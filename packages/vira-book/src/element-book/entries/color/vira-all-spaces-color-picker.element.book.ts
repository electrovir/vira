/* node:coverage disable */

import {defineBookPage} from 'element-book';
import {html, listen} from 'element-vir';
import {ViraAllSpacesColorPicker} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

export const viraAllSpacesColorPickerBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraAllSpacesColorPicker.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            state() {
                return {
                    currentColor: '#3498db',
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraAllSpacesColorPicker.assign({
                        color: state.currentColor,
                    })}
                        ${listen(ViraAllSpacesColorPicker.events.colorChange, (event) => {
                            updateState({
                                currentColor: event.detail,
                            });
                        })}
                    ></${ViraAllSpacesColorPicker}>
                `;
            },
        });
    },
});
