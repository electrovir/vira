import {describe, itCases} from '@augment-vir/test';
import {
    areFormFieldsValid,
    moveFormFieldKey,
    type ViraFormField,
    ViraFormFieldType,
} from './vira-form-fields.js';

describe(areFormFieldsValid.name, () => {
    const requiredEmptyFormField: ViraFormField = {
        type: ViraFormFieldType.Text,
        value: '',
        label: '',
        isRequired: true,
    };
    const requiredFilledFormField: ViraFormField = {
        type: ViraFormFieldType.Text,
        value: 'value',
        label: '',
        isRequired: true,
    };
    const hiddenFormField: ViraFormField = {
        type: ViraFormFieldType.Text,
        value: '',
        label: '',
        isHidden: true,
        isRequired: true,
    };
    const normalEmptyField: ViraFormField = {
        type: ViraFormFieldType.Text,
        value: '',
        label: '',
    };

    itCases(areFormFieldsValid, [
        {
            it: 'ignores hidden fields',
            input: {
                hiddenFormField,
                requiredFilledFormField,
            },
            expect: true,
        },
        {
            it: 'requires required fields',
            input: {
                requiredEmptyFormField,
                requiredFilledFormField,
                hiddenFormField,
                normalEmptyField,
            },
            expect: false,
        },
        {
            it: 'allows empty non-required fields',
            input: {
                normalEmptyField,
            },
            expect: true,
        },
    ]);
});

describe(moveFormFieldKey.name, () => {
    const keys = [
        'first',
        'hidden',
        'second',
        'third',
    ];

    itCases(moveFormFieldKey, [
        {
            it: 'moves a key earlier',
            input: {
                keys,
                movedKey: 'third',
                beforeKey: 'first',
            },
            expect: [
                'third',
                'first',
                'hidden',
                'second',
            ],
        },
        {
            it: 'moves a key later without disturbing hidden keys',
            input: {
                keys,
                movedKey: 'first',
                beforeKey: 'third',
            },
            expect: [
                'hidden',
                'second',
                'first',
                'third',
            ],
        },
        {
            it: 'moves a key to the end',
            input: {
                keys,
                movedKey: 'first',
                beforeKey: undefined,
            },
            expect: [
                'hidden',
                'second',
                'third',
                'first',
            ],
        },
    ]);
});
