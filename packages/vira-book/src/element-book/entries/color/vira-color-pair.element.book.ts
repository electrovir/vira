/* node:coverage disable */

import type {ColorPair} from '@electrovir/color';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {defineCssVars} from 'lit-css-vars';
import {ViraColorPair} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

const mockColors = defineCssVars({
    'mock-foreground': '#1a1a2e',
    'mock-background': '#eaeaea',
});

const mockColorPair: ColorPair = {
    foreground: mockColors['mock-foreground'],
    background: mockColors['mock-background'],
};

const mockColorsLowContrast = defineCssVars({
    'low-contrast-foreground': '#888888',
    'low-contrast-background': '#aaaaaa',
});

const mockColorPairLowContrast: ColorPair = {
    foreground: mockColorsLowContrast['low-contrast-foreground'],
    background: mockColorsLowContrast['low-contrast-background'],
};

export const viraColorPairBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraColorPair.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            render() {
                return html`
                    <${ViraColorPair.assign({
                        color: mockColorPair,
                        showVarValues: false,
                        showVarNames: false,
                        showContrast: false,
                        fontWeight: 400,
                    })}></${ViraColorPair}>
                `;
            },
        });

        defineExample({
            title: 'with var names',
            render() {
                return html`
                    <${ViraColorPair.assign({
                        color: mockColorPair,
                        showVarValues: false,
                        showVarNames: true,
                        showContrast: false,
                        fontWeight: 400,
                    })}></${ViraColorPair}>
                `;
            },
        });

        defineExample({
            title: 'with var names and values',
            render() {
                return html`
                    <${ViraColorPair.assign({
                        color: mockColorPair,
                        showVarValues: true,
                        showVarNames: true,
                        showContrast: false,
                        fontWeight: 400,
                    })}></${ViraColorPair}>
                `;
            },
        });

        defineExample({
            title: 'with contrast',
            render() {
                return html`
                    <${ViraColorPair.assign({
                        color: mockColorPair,
                        showVarValues: false,
                        showVarNames: false,
                        showContrast: true,
                        fontWeight: 400,
                    })}></${ViraColorPair}>
                `;
            },
        });

        defineExample({
            title: 'bold font weight',
            render() {
                return html`
                    <${ViraColorPair.assign({
                        color: mockColorPair,
                        showVarValues: false,
                        showVarNames: false,
                        showContrast: true,
                        fontWeight: 700,
                    })}></${ViraColorPair}>
                `;
            },
        });

        defineExample({
            title: 'low contrast',
            render() {
                return html`
                    <${ViraColorPair.assign({
                        color: mockColorPairLowContrast,
                        showVarValues: false,
                        showVarNames: false,
                        showContrast: true,
                        fontWeight: 400,
                    })}></${ViraColorPair}>
                `;
            },
        });

        defineExample({
            title: 'all options enabled',
            render() {
                return html`
                    <${ViraColorPair.assign({
                        color: mockColorPair,
                        showVarValues: true,
                        showVarNames: true,
                        showContrast: true,
                        fontWeight: 400,
                    })}></${ViraColorPair}>
                `;
            },
        });
    },
});
