import {defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html, listen, renderIf} from 'element-vir';
import {elementsBookChapter} from '../elements.book';
import {
    ViraCollapsibleSlotNameEnum,
    ViraCollapsibleWrapper,
} from './vira-collapsible-wrapper.element';

const viraCollapsibleBookChapter = defineElementBookChapter({
    title: 'Collapsible',
    parent: elementsBookChapter,
});

const viraCollapsibleBookPage = defineElementBookPage({
    title: ViraCollapsibleWrapper.tagName,
    parent: viraCollapsibleBookChapter,
    descriptionParagraphs: [
        'A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!',
        'This element does not make any assumptions on styling, all styles are applied by consumers.',
    ],
    defineExamplesCallback({defineExample}) {
        defineExample({
            title: 'stacked examples',
            styles: css`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,
            stateInitStatic: {
                expandedStates: [] as boolean[],
                showMoreStates: [] as boolean[],
            },
            renderCallback({updateState, state}) {
                return Array(3)
                    .fill(0)
                    .map((value, index) => {
                        return html`
                            <${ViraCollapsibleWrapper}
                                ${assign(ViraCollapsibleWrapper, {
                                    expanded: !!state.expandedStates[index],
                                })}
                                ${listen(ViraCollapsibleWrapper.events.expandChange, (event) => {
                                    const newExpandedStates = [...state.expandedStates];
                                    newExpandedStates[index] = event.detail;
                                    updateState({expandedStates: newExpandedStates});
                                })}
                            >
                                <div
                                    class="section-header"
                                    slot=${ViraCollapsibleSlotNameEnum.Header}
                                >
                                    Section ${index}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${listen('click', () => {
                                        const newShowMoreStates = [...state.showMoreStates];
                                        newShowMoreStates[index] = !newShowMoreStates[index];
                                        updateState({showMoreStates: newShowMoreStates});
                                    })}
                                >
                                    show more
                                </button>
                                ${renderIf(
                                    !!state.showMoreStates[index],
                                    html`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `,
                                )}
                                <p>Variable contents</p>
                            </${ViraCollapsibleWrapper}>
                        `;
                    });
            },
        });
        defineExample({
            title: 'wider examples',
            styles: css`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,
            stateInitStatic: {
                expandedStates: [] as boolean[],
                showMoreStates: [] as boolean[],
            },
            renderCallback({updateState, state}) {
                return Array(3)
                    .fill(0)
                    .map((value, index) => {
                        return html`
                            <${ViraCollapsibleWrapper}
                                ${assign(ViraCollapsibleWrapper, {
                                    expanded: !!state.expandedStates[index],
                                })}
                                ${listen(ViraCollapsibleWrapper.events.expandChange, (event) => {
                                    const newExpandedStates = [...state.expandedStates];
                                    newExpandedStates[index] = event.detail;
                                    updateState({expandedStates: newExpandedStates});
                                })}
                            >
                                <div
                                    class="section-header"
                                    slot=${ViraCollapsibleSlotNameEnum.Header}
                                >
                                    Section ${index}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${listen('click', () => {
                                        const newShowMoreStates = [...state.showMoreStates];
                                        newShowMoreStates[index] = !newShowMoreStates[index];
                                        updateState({showMoreStates: newShowMoreStates});
                                    })}
                                >
                                    show more
                                </button>
                                ${renderIf(
                                    !!state.showMoreStates[index],
                                    html`
                                        <p>
                                            Variable contents Variable contents Variable contents
                                            Variable contents Variable contents Variable contents
                                        </p>
                                        <p>
                                            Variable contents Variable contents Variable contents
                                            Variable contents Variable contents Variable contents
                                        </p>
                                    `,
                                )}
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                            </${ViraCollapsibleWrapper}>
                        `;
                    });
            },
        });
    },
});

export const viraCollapsibleBookEntries = [
    viraCollapsibleBookChapter,
    viraCollapsibleBookPage,
];
