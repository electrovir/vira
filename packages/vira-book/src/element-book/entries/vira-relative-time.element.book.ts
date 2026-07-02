import {calculateRelativeDate, getNowInUtcTimezone, utcTimezone} from 'date-vir';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {ViraRelativeTime} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraRelativeTimeBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraRelativeTime.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: '5 minutes ago',
            render() {
                return html`
                    <${ViraRelativeTime.assign({
                        time: calculateRelativeDate(getNowInUtcTimezone(), {
                            minutes: -5,
                        }),
                    })}></${ViraRelativeTime}>
                `;
            },
        });

        defineExample({
            title: '2 hours ago',
            render() {
                return html`
                    <${ViraRelativeTime.assign({
                        time: calculateRelativeDate(getNowInUtcTimezone(), {
                            hours: -2,
                        }),
                    })}></${ViraRelativeTime}>
                `;
            },
        });

        defineExample({
            title: '3 days ago',
            render() {
                return html`
                    <${ViraRelativeTime.assign({
                        time: calculateRelativeDate(getNowInUtcTimezone(), {
                            days: -3,
                        }),
                    })}></${ViraRelativeTime}>
                `;
            },
        });

        defineExample({
            title: 'In the future (1 hour)',
            render() {
                return html`
                    <${ViraRelativeTime.assign({
                        time: calculateRelativeDate(getNowInUtcTimezone(), {
                            hours: 1,
                        }),
                    })}></${ViraRelativeTime}>
                `;
            },
        });

        defineExample({
            title: 'With absolute time',
            render() {
                return html`
                    <${ViraRelativeTime.assign({
                        time: calculateRelativeDate(getNowInUtcTimezone(), {
                            hours: -2,
                        }),
                        showAbsoluteTime: true,
                    })}></${ViraRelativeTime}>
                `;
            },
        });

        defineExample({
            title: 'With absolute time in a specific timezone',
            render() {
                return html`
                    <${ViraRelativeTime.assign({
                        time: calculateRelativeDate(getNowInUtcTimezone(), {
                            hours: -2,
                        }),
                        showAbsoluteTime: true,
                        timezone: utcTimezone,
                    })}></${ViraRelativeTime}>
                `;
            },
        });
    },
});
