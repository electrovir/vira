import {type RequireExactlyOne, type Values} from '@augment-vir/common';
import {type AsyncProp, asyncProp, type DeclarativeElementDefinition} from 'element-vir';

/**
 * Base type for loaders passed to {@link createDynamicElementLoader}.
 *
 * @category Internal
 */
export type BaseDynamicElementLoaders = Record<string, () => Promise<DeclarativeElementDefinition>>;

/**
 * Create a dynamic element loader. This should go in your element state. This makes deferring
 * element importing convenient and allows parts of your app to be placed in separate bundles. Make
 * sure to also use {@link renderDynamicElement} to use the output of this loader.
 *
 * @category Util
 * @see {@link renderDynamicElement}
 * @see [example usage](https://github.com/electrovir/vira/blob/dev/packages/vira-book/src/element-book/entries/dynamic-elements.book.ts)
 */
export function createDynamicElementLoader<
    const Loaders extends Readonly<BaseDynamicElementLoaders>,
>(loaders: Readonly<Loaders>): DynamicElementAsyncProp<Loaders> {
    return asyncProp<DynamicElementValue<NoInfer<Loaders>>, keyof NoInfer<Loaders>>({
        async updateCallback(elementKey, previousResolvedValue) {
            if (previousResolvedValue && elementKey in previousResolvedValue.cache) {
                return {
                    cache: previousResolvedValue.cache,
                    element: previousResolvedValue.cache[elementKey],
                    key: elementKey,
                };
            }

            const imported = await loaders[elementKey]();

            return {
                cache: {
                    ...previousResolvedValue?.cache,
                    [elementKey]: imported,
                },
                element: imported,
                key: elementKey,
            } as any;
        },
    });
}

/**
 * The value for the async prop {@link DynamicElementAsyncProp}.
 *
 * @category Internal
 */
export type DynamicElementValue<Loaders extends BaseDynamicElementLoaders> = {
    cache: Partial<Record<keyof Loaders, DeclarativeElementDefinition>>;
    element: Awaited<ReturnType<Values<Loaders>>>;
    key: keyof Loaders;
};
/**
 * An async prop for dynamic loading elements. This is the output from
 * {@link createDynamicElementLoader}.
 *
 * @category Internal
 */
export type DynamicElementAsyncProp<Loaders extends BaseDynamicElementLoaders> = AsyncProp<
    DynamicElementValue<Loaders>,
    keyof Loaders
>;

/**
 * Params for the `ready` callback in {@link renderDynamicElement}.
 *
 * @category Internal
 */
export type ReadyParams<Loaders extends Readonly<BaseDynamicElementLoaders>> = RequireExactlyOne<{
    [Key in keyof Loaders]: Awaited<ReturnType<Loaders[Key]>>;
}>;

/**
 * Renders the current state of a dynamic element loader. This should go in your render function.
 * Make sure to also use {@link createDynamicElementLoader} to create a dynamic loader in your
 * element's state.
 *
 * @category Util
 * @see {@link createDynamicElementLoader}
 * @see [example usage](https://github.com/electrovir/vira/blob/dev/packages/vira-book/src/element-book/entries/dynamic-elements.book.ts)
 */
export function renderDynamicElement<
    const Loaders extends BaseDynamicElementLoaders,
    const LoadingReturnValue,
    const ReadyReturnValue,
    const ErrorReturnValue,
>(
    asyncProp: DynamicElementAsyncProp<Loaders>,
    {
        ready,
        loading,
        error,
        key,
    }: {
        /**
         * If this is left undefined (or falsy), the current key will not be set, whatever the
         * existing key is will continue to be used.
         */
        key?: keyof NoInfer<Loaders> | undefined;
        loading(this: void, params: Promise<ReadyParams<NoInfer<Loaders>>>): LoadingReturnValue;
        ready(this: void, params: ReadyParams<NoInfer<Loaders>>): ReadyReturnValue;
        error(this: void, error: Error): ErrorReturnValue;
    },
): ReadyReturnValue | LoadingReturnValue | ErrorReturnValue {
    if (key) {
        (asyncProp.update as (key: keyof Loaders) => boolean)(key);
    }

    if (asyncProp.value instanceof Error) {
        return error(asyncProp.value);
    } else if (asyncProp.value instanceof Promise) {
        return loading(
            asyncProp.value.then((value) => {
                return {
                    [value.key]: value.element,
                } as ReadyParams<Loaders>;
            }),
        );
    } else {
        return ready({
            [asyncProp.value.key]: asyncProp.value.element,
        } as ReadyParams<Loaders>);
    }
}
