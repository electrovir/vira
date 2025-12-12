import {describe, itCases} from '@augment-vir/test';
import {areFieldsValid, type ViraFormField, ViraFormFieldType} from './vira-form-fields.js';

describe(areFieldsValid.name, () => {
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

    itCases(areFieldsValid, [
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
