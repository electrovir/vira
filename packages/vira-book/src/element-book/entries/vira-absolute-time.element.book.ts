import {calculateRelativeDate, getNowInUtcTimezone, utcTimezone} from 'date-vir';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {ViraAbsoluteTime} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraAbsoluteTimeBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraAbsoluteTime.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'Current time',
            render() {
                return html`
                    <${ViraAbsoluteTime.assign({
                        time: getNowInUtcTimezone(),
                    })}></${ViraAbsoluteTime}>
                `;
            },
        });

        defineExample({
            title: '5 minutes ago',
            render() {
                return html`
                    <${ViraAbsoluteTime.assign({
                        time: calculateRelativeDate(getNowInUtcTimezone(), {
                            minutes: -5,
                        }),
                    })}></${ViraAbsoluteTime}>
                `;
            },
        });

        defineExample({
            title: 'Date only',
            render() {
                return html`
                    <${ViraAbsoluteTime.assign({
                        time: getNowInUtcTimezone(),
                        dateOnly: true,
                    })}></${ViraAbsoluteTime}>
                `;
            },
        });

        defineExample({
            title: 'Date only in a specific timezone',
            render() {
                return html`
                    <${ViraAbsoluteTime.assign({
                        time: getNowInUtcTimezone(),
                        dateOnly: true,
                        timezone: utcTimezone,
                    })}></${ViraAbsoluteTime}>
                `;
            },
        });

        defineExample({
            title: '3 days ago',
            render() {
                return html`
                    <${ViraAbsoluteTime.assign({
                        time: calculateRelativeDate(getNowInUtcTimezone(), {
                            days: -3,
                        }),
                    })}></${ViraAbsoluteTime}>
                `;
            },
        });
    },
});
