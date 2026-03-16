var o4=Object.defineProperty;var i=(e,r)=>o4(e,"name",{value:r,configurable:!0});i(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}i(t,"getFetchOpts");function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}i(n,"processPreload")},"polyfill")();var ct;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(ct||(ct={}));function gd(e,r=t=>t){const t=new Map;return e.filter(n=>{const o=r(n);return t.get(o)?!1:(t.set(o,n),!0)})}i(gd,"removeDuplicates");class yh{static{i(this,"Diff")}diff(r,t,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const a=this.castInput(r,n),s=this.castInput(t,n),l=this.removeEmpty(this.tokenize(a,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(l,u,n,o)}diffWithOptionsObj(r,t,n,o){var a;const s=i(A=>{if(A=this.postProcess(A,n),o){setTimeout(function(){o(A)},0);return}else return A},"done"),l=t.length,u=r.length;let f=1,g=l+u;n.maxEditLength!=null&&(g=Math.min(g,n.maxEditLength));const h=(a=n.timeout)!==null&&a!==void 0?a:1/0,p=Date.now()+h,b=[{oldPos:-1,lastComponent:void 0}];let v=this.extractCommon(b[0],t,r,0,n);if(b[0].oldPos+1>=u&&v+1>=l)return s(this.buildValues(b[0].lastComponent,t,r));let $=-1/0,C=1/0;const E=i(()=>{for(let A=Math.max($,-f);A<=Math.min(C,f);A+=2){let N;const _=b[A-1],H=b[A+1];_&&(b[A-1]=void 0);let ce=!1;if(H){const be=H.oldPos-A;ce=H&&0<=be&&be<l}const Te=_&&_.oldPos+1<u;if(!ce&&!Te){b[A]=void 0;continue}if(!Te||ce&&_.oldPos<H.oldPos?N=this.addToPath(H,!0,!1,0,n):N=this.addToPath(_,!1,!0,1,n),v=this.extractCommon(N,t,r,A,n),N.oldPos+1>=u&&v+1>=l)return s(this.buildValues(N.lastComponent,t,r))||!0;b[A]=N,N.oldPos+1>=u&&(C=Math.min(C,A-1)),v+1>=l&&($=Math.max($,A+1))}f++},"execEditLength");if(o)i(function A(){setTimeout(function(){if(f>g||Date.now()>p)return o(void 0);E()||A()},0)},"exec")();else for(;f<=g&&Date.now()<=p;){const A=E();if(A)return A}}addToPath(r,t,n,o,a){const s=r.lastComponent;return s&&!a.oneChangePerToken&&s.added===t&&s.removed===n?{oldPos:r.oldPos+o,lastComponent:{count:s.count+1,added:t,removed:n,previousComponent:s.previousComponent}}:{oldPos:r.oldPos+o,lastComponent:{count:1,added:t,removed:n,previousComponent:s}}}extractCommon(r,t,n,o,a){const s=t.length,l=n.length;let u=r.oldPos,f=u-o,g=0;for(;f+1<s&&u+1<l&&this.equals(n[u+1],t[f+1],a);)f++,u++,g++,a.oneChangePerToken&&(r.lastComponent={count:1,previousComponent:r.lastComponent,added:!1,removed:!1});return g&&!a.oneChangePerToken&&(r.lastComponent={count:g,previousComponent:r.lastComponent,added:!1,removed:!1}),r.oldPos=u,f}equals(r,t,n){return n.comparator?n.comparator(r,t):r===t||!!n.ignoreCase&&r.toLowerCase()===t.toLowerCase()}removeEmpty(r){const t=[];for(let n=0;n<r.length;n++)r[n]&&t.push(r[n]);return t}castInput(r,t){return r}tokenize(r,t){return Array.from(r)}join(r){return r.join("")}postProcess(r,t){return r}get useLongestToken(){return!1}buildValues(r,t,n){const o=[];let a;for(;r;)o.push(r),a=r.previousComponent,delete r.previousComponent,r=a;o.reverse();const s=o.length;let l=0,u=0,f=0;for(;l<s;l++){const g=o[l];if(g.removed)g.value=this.join(n.slice(f,f+g.count)),f+=g.count;else{if(!g.added&&this.useLongestToken){let h=t.slice(u,u+g.count);h=h.map(function(p,b){const v=n[f+b];return v.length>p.length?v:p}),g.value=this.join(h)}else g.value=this.join(t.slice(u,u+g.count));u+=g.count,g.added||(f+=g.count)}}return o}}function Bm(e,r){let t;for(t=0;t<e.length&&t<r.length;t++)if(e[t]!=r[t])return e.slice(0,t);return e.slice(0,t)}i(Bm,"longestCommonPrefix");function Om(e,r){let t;if(!e||!r||e[e.length-1]!=r[r.length-1])return"";for(t=0;t<e.length&&t<r.length;t++)if(e[e.length-(t+1)]!=r[r.length-(t+1)])return e.slice(-t);return e.slice(-t)}i(Om,"longestCommonSuffix");function eg(e,r,t){if(e.slice(0,r.length)!=r)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(r)}; this is a bug`);return t+e.slice(r.length)}i(eg,"replacePrefix");function rg(e,r,t){if(!r)return e+t;if(e.slice(-r.length)!=r)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(r)}; this is a bug`);return e.slice(0,-r.length)+t}i(rg,"replaceSuffix");function qs(e,r){return eg(e,r,"")}i(qs,"removePrefix$1");function Lu(e,r){return rg(e,r,"")}i(Lu,"removeSuffix$1");function Rm(e,r){return r.slice(0,i4(e,r))}i(Rm,"maximumOverlap");function i4(e,r){let t=0;e.length>r.length&&(t=e.length-r.length);let n=r.length;e.length<r.length&&(n=e.length);const o=Array(n);let a=0;o[0]=0;for(let s=1;s<n;s++){for(r[s]==r[a]?o[s]=o[a]:o[s]=a;a>0&&r[s]!=r[a];)a=o[a];r[s]==r[a]&&a++}a=0;for(let s=t;s<e.length;s++){for(;a>0&&e[s]!=r[a];)a=o[a];e[s]==r[a]&&a++}return a}i(i4,"overlapCount");function Vs(e){let r;for(r=e.length-1;r>=0&&e[r].match(/\s/);r--);return e.substring(r+1)}i(Vs,"trailingWs");function qo(e){const r=e.match(/^\s*/);return r?r[0]:""}i(qo,"leadingWs");const xc="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",a4=new RegExp(`[${xc}]+|\\s+|[^${xc}]`,"ug");class s4 extends yh{static{i(this,"WordDiff")}equals(r,t,n){return n.ignoreCase&&(r=r.toLowerCase(),t=t.toLowerCase()),r.trim()===t.trim()}tokenize(r,t={}){let n;if(t.intlSegmenter){const s=t.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const l of Array.from(s.segment(r))){const u=l.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(u)?n[n.length-1]+=u:n.push(u)}}else n=r.match(a4)||[];const o=[];let a=null;return n.forEach(s=>{/\s/.test(s)?a==null?o.push(s):o.push(o.pop()+s):a!=null&&/\s/.test(a)?o[o.length-1]==a?o.push(o.pop()+s):o.push(a+s):o.push(s),a=s}),o}join(r){return r.map((t,n)=>n==0?t:t.replace(/^\s+/,"")).join("")}postProcess(r,t){if(!r||t.oneChangePerToken)return r;let n=null,o=null,a=null;return r.forEach(s=>{s.added?o=s:s.removed?a=s:((o||a)&&Lm(n,a,o,s),n=s,o=null,a=null)}),(o||a)&&Lm(n,a,o,null),r}}const l4=new s4;function u4(e,r,t){return t?.ignoreWhitespace!=null&&!t.ignoreWhitespace?f4(e,r,t):l4.diff(e,r,t)}i(u4,"diffWords");function Lm(e,r,t,n){if(r&&t){const o=qo(r.value),a=Vs(r.value),s=qo(t.value),l=Vs(t.value);if(e){const u=Bm(o,s);e.value=rg(e.value,s,u),r.value=qs(r.value,u),t.value=qs(t.value,u)}if(n){const u=Om(a,l);n.value=eg(n.value,l,u),r.value=Lu(r.value,u),t.value=Lu(t.value,u)}}else if(t){if(e){const o=qo(t.value);t.value=t.value.substring(o.length)}if(n){const o=qo(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=qo(n.value),a=qo(r.value),s=Vs(r.value),l=Bm(o,a);r.value=qs(r.value,l);const u=Om(qs(o,l),s);r.value=Lu(r.value,u),n.value=eg(n.value,o,u),e.value=rg(e.value,o,o.slice(0,o.length-u.length))}else if(n){const o=qo(n.value),a=Vs(r.value),s=Rm(a,o);r.value=Lu(r.value,s)}else if(e){const o=Vs(e.value),a=qo(r.value),s=Rm(o,a);r.value=qs(r.value,s)}}i(Lm,"dedupeWhitespaceInChangeObjects");class c4 extends yh{static{i(this,"WordsWithSpaceDiff")}tokenize(r){const t=new RegExp(`(\\r?\\n)|[${xc}]+|[^\\S\\n\\r]+|[^${xc}]`,"ug");return r.match(t)||[]}}const d4=new c4;function f4(e,r,t){return d4.diff(e,r,t)}i(f4,"diffWordsWithSpace");class g4 extends yh{static{i(this,"LineDiff")}constructor(){super(...arguments),this.tokenize=m4}equals(r,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(r.endsWith(`
`)&&(r=r.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(r,t,n)}}const h4=new g4;function p4(e,r,t){return h4.diff(e,r,t)}i(p4,"diffLines");function m4(e,r){r.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const t=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const a=n[o];o%2&&!r.newlineIsToken?t[t.length-1]+=a:t.push(a)}return t}i(m4,"tokenize$1");function jm(e,r){return _1(e,new Map)}i(jm,"sortObject");function _1(e,r,t){if(e&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object){if(r.has(e))return r.get(e);const n={};return r.set(e,n),Object.entries(e).sort((o,a)=>o[0].localeCompare(a[0])).forEach(([o,a])=>{const s=_1(a,r);n[o]=s}),n}else return e}i(_1,"recursivelySortObject");var b4=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,v4=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,y4=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Sf={Space_Separator:b4,ID_Start:v4,ID_Continue:y4},Cr={isSpaceSeparator(e){return typeof e=="string"&&Sf.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Sf.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Sf.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let tg,Ft,xo,Dc,di,_n,Qr,wh,$l;var w4=i(function(r,t){tg=String(r),Ft="start",xo=[],Dc=0,di=1,_n=0,Qr=void 0,wh=void 0,$l=void 0;do Qr=k4(),D4[Ft]();while(Qr.type!=="eof");return typeof t=="function"?ng({"":$l},"",t):$l},"parse");function ng(e,r,t){const n=e[r];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const a=String(o),s=ng(n,a,t);s===void 0?delete n[a]:Object.defineProperty(n,a,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const a=ng(n,o,t);a===void 0?delete n[o]:Object.defineProperty(n,o,{value:a,writable:!0,enumerable:!0,configurable:!0})}return t.call(e,r,n)}i(ng,"internalize");let he,de,ll,vo,xe;function k4(){for(he="default",de="",ll=!1,vo=1;;){xe=Po();const e=z1[he]();if(e)return e}}i(k4,"lex");function Po(){if(tg[Dc])return String.fromCodePoint(tg.codePointAt(Dc))}i(Po,"peek");function O(){const e=Po();return e===`
`?(di++,_n=0):e?_n+=e.length:_n++,e&&(Dc+=e.length),e}i(O,"read");const z1={default(){switch(xe){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":O();return;case"/":O(),he="comment";return;case void 0:return O(),ar("eof")}if(Cr.isSpaceSeparator(xe)){O();return}return z1[Ft]()},comment(){switch(xe){case"*":O(),he="multiLineComment";return;case"/":O(),he="singleLineComment";return}throw sr(O())},multiLineComment(){switch(xe){case"*":O(),he="multiLineCommentAsterisk";return;case void 0:throw sr(O())}O()},multiLineCommentAsterisk(){switch(xe){case"*":O();return;case"/":O(),he="default";return;case void 0:throw sr(O())}O(),he="multiLineComment"},singleLineComment(){switch(xe){case`
`:case"\r":case"\u2028":case"\u2029":O(),he="default";return;case void 0:return O(),ar("eof")}O()},value(){switch(xe){case"{":case"[":return ar("punctuator",O());case"n":return O(),Mi("ull"),ar("null",null);case"t":return O(),Mi("rue"),ar("boolean",!0);case"f":return O(),Mi("alse"),ar("boolean",!1);case"-":case"+":O()==="-"&&(vo=-1),he="sign";return;case".":de=O(),he="decimalPointLeading";return;case"0":de=O(),he="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":de=O(),he="decimalInteger";return;case"I":return O(),Mi("nfinity"),ar("numeric",1/0);case"N":return O(),Mi("aN"),ar("numeric",NaN);case'"':case"'":ll=O()==='"',de="",he="string";return}throw sr(O())},identifierNameStartEscape(){if(xe!=="u")throw sr(O());O();const e=og();switch(e){case"$":case"_":break;default:if(!Cr.isIdStartChar(e))throw Um();break}de+=e,he="identifierName"},identifierName(){switch(xe){case"$":case"_":case"‌":case"‍":de+=O();return;case"\\":O(),he="identifierNameEscape";return}if(Cr.isIdContinueChar(xe)){de+=O();return}return ar("identifier",de)},identifierNameEscape(){if(xe!=="u")throw sr(O());O();const e=og();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!Cr.isIdContinueChar(e))throw Um();break}de+=e,he="identifierName"},sign(){switch(xe){case".":de=O(),he="decimalPointLeading";return;case"0":de=O(),he="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":de=O(),he="decimalInteger";return;case"I":return O(),Mi("nfinity"),ar("numeric",vo*(1/0));case"N":return O(),Mi("aN"),ar("numeric",NaN)}throw sr(O())},zero(){switch(xe){case".":de+=O(),he="decimalPoint";return;case"e":case"E":de+=O(),he="decimalExponent";return;case"x":case"X":de+=O(),he="hexadecimal";return}return ar("numeric",vo*0)},decimalInteger(){switch(xe){case".":de+=O(),he="decimalPoint";return;case"e":case"E":de+=O(),he="decimalExponent";return}if(Cr.isDigit(xe)){de+=O();return}return ar("numeric",vo*Number(de))},decimalPointLeading(){if(Cr.isDigit(xe)){de+=O(),he="decimalFraction";return}throw sr(O())},decimalPoint(){switch(xe){case"e":case"E":de+=O(),he="decimalExponent";return}if(Cr.isDigit(xe)){de+=O(),he="decimalFraction";return}return ar("numeric",vo*Number(de))},decimalFraction(){switch(xe){case"e":case"E":de+=O(),he="decimalExponent";return}if(Cr.isDigit(xe)){de+=O();return}return ar("numeric",vo*Number(de))},decimalExponent(){switch(xe){case"+":case"-":de+=O(),he="decimalExponentSign";return}if(Cr.isDigit(xe)){de+=O(),he="decimalExponentInteger";return}throw sr(O())},decimalExponentSign(){if(Cr.isDigit(xe)){de+=O(),he="decimalExponentInteger";return}throw sr(O())},decimalExponentInteger(){if(Cr.isDigit(xe)){de+=O();return}return ar("numeric",vo*Number(de))},hexadecimal(){if(Cr.isHexDigit(xe)){de+=O(),he="hexadecimalInteger";return}throw sr(O())},hexadecimalInteger(){if(Cr.isHexDigit(xe)){de+=O();return}return ar("numeric",vo*Number(de))},string(){switch(xe){case"\\":O(),de+=$4();return;case'"':if(ll)return O(),ar("string",de);de+=O();return;case"'":if(!ll)return O(),ar("string",de);de+=O();return;case`
`:case"\r":throw sr(O());case"\u2028":case"\u2029":C4(xe);break;case void 0:throw sr(O())}de+=O()},start(){switch(xe){case"{":case"[":return ar("punctuator",O())}he="value"},beforePropertyName(){switch(xe){case"$":case"_":de=O(),he="identifierName";return;case"\\":O(),he="identifierNameStartEscape";return;case"}":return ar("punctuator",O());case'"':case"'":ll=O()==='"',he="string";return}if(Cr.isIdStartChar(xe)){de+=O(),he="identifierName";return}throw sr(O())},afterPropertyName(){if(xe===":")return ar("punctuator",O());throw sr(O())},beforePropertyValue(){he="value"},afterPropertyValue(){switch(xe){case",":case"}":return ar("punctuator",O())}throw sr(O())},beforeArrayValue(){if(xe==="]")return ar("punctuator",O());he="value"},afterArrayValue(){switch(xe){case",":case"]":return ar("punctuator",O())}throw sr(O())},end(){throw sr(O())}};function ar(e,r){return{type:e,value:r,line:di,column:_n}}i(ar,"newToken");function Mi(e){for(const r of e){if(Po()!==r)throw sr(O());O()}}i(Mi,"literal");function $4(){switch(Po()){case"b":return O(),"\b";case"f":return O(),"\f";case"n":return O(),`
`;case"r":return O(),"\r";case"t":return O(),"	";case"v":return O(),"\v";case"0":if(O(),Cr.isDigit(Po()))throw sr(O());return"\0";case"x":return O(),x4();case"u":return O(),og();case`
`:case"\u2028":case"\u2029":return O(),"";case"\r":return O(),Po()===`
`&&O(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw sr(O());case void 0:throw sr(O())}return O()}i($4,"escape");function x4(){let e="",r=Po();if(!Cr.isHexDigit(r)||(e+=O(),r=Po(),!Cr.isHexDigit(r)))throw sr(O());return e+=O(),String.fromCodePoint(parseInt(e,16))}i(x4,"hexEscape");function og(){let e="",r=4;for(;r-- >0;){const t=Po();if(!Cr.isHexDigit(t))throw sr(O());e+=O()}return String.fromCodePoint(parseInt(e,16))}i(og,"unicodeEscape");const D4={start(){if(Qr.type==="eof")throw Ti();Mf()},beforePropertyName(){switch(Qr.type){case"identifier":case"string":wh=Qr.value,Ft="afterPropertyName";return;case"punctuator":ju();return;case"eof":throw Ti()}},afterPropertyName(){if(Qr.type==="eof")throw Ti();Ft="beforePropertyValue"},beforePropertyValue(){if(Qr.type==="eof")throw Ti();Mf()},beforeArrayValue(){if(Qr.type==="eof")throw Ti();if(Qr.type==="punctuator"&&Qr.value==="]"){ju();return}Mf()},afterPropertyValue(){if(Qr.type==="eof")throw Ti();switch(Qr.value){case",":Ft="beforePropertyName";return;case"}":ju()}},afterArrayValue(){if(Qr.type==="eof")throw Ti();switch(Qr.value){case",":Ft="beforeArrayValue";return;case"]":ju()}},end(){}};function Mf(){let e;switch(Qr.type){case"punctuator":switch(Qr.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Qr.value;break}if($l===void 0)$l=e;else{const r=xo[xo.length-1];Array.isArray(r)?r.push(e):Object.defineProperty(r,wh,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")xo.push(e),Array.isArray(e)?Ft="beforeArrayValue":Ft="beforePropertyName";else{const r=xo[xo.length-1];r==null?Ft="end":Array.isArray(r)?Ft="afterArrayValue":Ft="afterPropertyValue"}}i(Mf,"push");function ju(){xo.pop();const e=xo[xo.length-1];e==null?Ft="end":Array.isArray(e)?Ft="afterArrayValue":Ft="afterPropertyValue"}i(ju,"pop");function sr(e){return Cc(e===void 0?`JSON5: invalid end of input at ${di}:${_n}`:`JSON5: invalid character '${q1(e)}' at ${di}:${_n}`)}i(sr,"invalidChar");function Ti(){return Cc(`JSON5: invalid end of input at ${di}:${_n}`)}i(Ti,"invalidEOF");function Um(){return _n-=5,Cc(`JSON5: invalid identifier character at ${di}:${_n}`)}i(Um,"invalidIdentifier");function C4(e){console.warn(`JSON5: '${q1(e)}' in strings is not valid ECMAScript; consider escaping`)}i(C4,"separatorChar");function q1(e){const r={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(r[e])return r[e];if(e<" "){const t=e.charCodeAt(0).toString(16);return"\\x"+("00"+t).substring(t.length)}return e}i(q1,"formatChar");function Cc(e){const r=new SyntaxError(e);return r.lineNumber=di,r.columnNumber=_n,r}i(Cc,"syntaxError");var E4=i(function(r,t,n){const o=[];let a="",s,l,u="",f;if(t!=null&&typeof t=="object"&&!Array.isArray(t)&&(n=t.space,f=t.quote,t=t.replacer),typeof t=="function")l=t;else if(Array.isArray(t)){s=[];for(const $ of t){let C;typeof $=="string"?C=$:(typeof $=="number"||$ instanceof String||$ instanceof Number)&&(C=String($)),C!==void 0&&s.indexOf(C)<0&&s.push(C)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),g("",{"":r});function g($,C){let E=C[$];switch(E!=null&&(typeof E.toJSON5=="function"?E=E.toJSON5($):typeof E.toJSON=="function"&&(E=E.toJSON($))),l&&(E=l.call(C,$,E)),E instanceof Number?E=Number(E):E instanceof String?E=String(E):E instanceof Boolean&&(E=E.valueOf()),E){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof E=="string")return h(E);if(typeof E=="number")return String(E);if(typeof E=="object")return Array.isArray(E)?v(E):p(E)}i(g,"serializeProperty");function h($){const C={"'":.1,'"':.2},E={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let A="";for(let _=0;_<$.length;_++){const H=$[_];switch(H){case"'":case'"':C[H]++,A+=H;continue;case"\0":if(Cr.isDigit($[_+1])){A+="\\x00";continue}}if(E[H]){A+=E[H];continue}if(H<" "){let ce=H.charCodeAt(0).toString(16);A+="\\x"+("00"+ce).substring(ce.length);continue}A+=H}const N=f||Object.keys(C).reduce((_,H)=>C[_]<C[H]?_:H);return A=A.replace(new RegExp(N,"g"),E[N]),N+A+N}i(h,"quoteString");function p($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let C=a;a=a+u;let E=s||Object.keys($),A=[];for(const _ of E){const H=g(_,$);if(H!==void 0){let ce=b(_)+":";u!==""&&(ce+=" "),ce+=H,A.push(ce)}}let N;if(A.length===0)N="{}";else{let _;if(u==="")_=A.join(","),N="{"+_+"}";else{let H=`,
`+a;_=A.join(H),N=`{
`+a+_+`,
`+C+"}"}}return o.pop(),a=C,N}i(p,"serializeObject");function b($){if($.length===0)return h($);const C=String.fromCodePoint($.codePointAt(0));if(!Cr.isIdStartChar(C))return h($);for(let E=C.length;E<$.length;E++)if(!Cr.isIdContinueChar(String.fromCodePoint($.codePointAt(E))))return h($);return $}i(b,"serializeKey");function v($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let C=a;a=a+u;let E=[];for(let N=0;N<$.length;N++){const _=g(String(N),$);E.push(_!==void 0?_:"null")}let A;if(E.length===0)A="[]";else if(u==="")A="["+E.join(",")+"]";else{let N=`,
`+a,_=E.join(N);A=`[
`+a+_+`,
`+C+"]"}return o.pop(),a=C,A}i(v,"serializeArray")},"stringify");const A4={parse:w4,stringify:E4};var F4=A4;const V1="__@@augment-vir-undefined-sentinel@@__",S4=new RegExp(`['"]${V1}['"]`);function x(e,r){if(typeof e=="string")return e;try{return F4.stringify(e,(n,o)=>o===void 0?V1:typeof o=="bigint"?Number(o):o,r||void 0).split(S4).join("undefined")}catch{return String(e)}}i(x,"stringify");var M4=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var zn;(function(e){e.Node="node",e.Web="web"})(zn||(zn={}));function T4(){return M4?zn.Node:zn.Web}i(T4,"determineRuntimeEnv");const W1=T4();function kh(e){return W1===e}i(kh,"isRuntimeEnv");function K1(e){return e[W1]()}i(K1,"perEnv");function P4(e,r){const t=typeof r=="string"&&typeof e=="string",n=typeof r!="string"||typeof e!="string",o=n?p4:u4,a=[t?"":`
`,x(r&&typeof r=="object"&&!Array.isArray(r)?jm(r):r,4),`
`].join(""),s=[t?"":`
`,x(e&&typeof e=="object"&&!Array.isArray(e)?jm(e):e,4),`
`].join(""),l=I4(n,o(a,s)),u=kh(zn.Node);return[[u?Fo.Green:""," +added (unexpected, added in actual)",u?Fo.Red:""," -missing (expected, missing from actual)",u?Fo.Reset:""].join(""),t?`

`:`
`,l].join("")}i(P4,"prettyDiff");var Fo;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(Fo||(Fo={}));var Ec;(function(e){e.Added="+",e.Removed="-"})(Ec||(Ec={}));function I4(e,r){return e?r.flatMap(n=>n.value.split(`
`).map(o=>_m(o,n)).join(`
`)).join(""):r.map(n=>_m(void 0,n)).join("")}i(I4,"addDiffColors");function _m(e,r){if(e!=null&&!e)return"";const t=kh(zn.Node),n=r.added?Ec.Added:r.removed?Ec.Removed:e==null?"":" ",o=r.added?Fo.Green:r.removed?Fo.Red:Fo.Reset;return[t?o:"",n,e??r.value,Fo.Reset].join("")}i(_m,"addColorToChange");function Ke(e){let r;try{r=Reflect.ownKeys(e)}catch{}return r??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}i(Ke,"getObjectTypedKeys");function N4(e){return Ke(e).filter(r=>isNaN(Number(r)))}i(N4,"getEnumKeys");function Qt(e){return N4(e).map(t=>e[t])}i(Qt,"getEnumValues");const B4=[".",":",";",",","?","!"],O4=new RegExp(`[${B4.join("")}]+$`);function zm(e){return e.replace(O4,"")}i(zm,"removeEndingPunctuation");function nt(e){return e==null||e===""||e==="undefined"||e==="null"?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):x(e)}i(nt,"extractErrorMessage");function fa(...e){const r=e.map(a=>nt(a)).filter(a=>!!zm(a)),t=r[r.length-1]?.endsWith("."),n=r.map(a=>zm(nt(a)));return(n.length<2?n[0]||"":n.join(": "))+(t?".":"")}i(fa,"combineErrorMessages");function Dr(e){return e instanceof Error?e:new Error(nt(e))}i(Dr,"ensureError");function ga(e,r){const t=Dr(e),n=fa(r,t.message);try{return t.message=n,t}catch{return new Error(n,{cause:e})}}i(ga,"ensureErrorAndPrependMessage");var P;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(P||(P={}));var Z;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(Z||(Z={}));Z.ClientError,Z.ServerError;P.Continue+"",Z.Information,P.SwitchingProtocols+"",Z.Information,P.Processing+"",Z.Information,P.EarlyHints+"",Z.Information,P.Ok+"",Z.Success,P.Created+"",Z.Success,P.Accepted+"",Z.Success,P.NonAuthoritativeInformation+"",Z.Success,P.NoContent+"",Z.Success,P.ResetContent+"",Z.Success,P.PartialContent+"",Z.Success,P.MultiStatus+"",Z.Success,P.AlreadyReported+"",Z.Success,P.ImUsed+"",Z.Success,P.MultipleChoices+"",Z.Redirect,P.MovedPermanently+"",Z.Redirect,P.Found+"",Z.Redirect,P.SeeOther+"",Z.Redirect,P.NotModified+"",Z.Redirect,P.UseProxy+"",Z.Redirect,P.Unused+"",Z.Redirect,P.TemporaryRedirect+"",Z.Redirect,P.PermanentRedirect+"",Z.Redirect,P.BadRequest+"",Z.ClientError,P.Unauthorized+"",Z.ClientError,P.PaymentRequired+"",Z.ClientError,P.Forbidden+"",Z.ClientError,P.NotFound+"",Z.ClientError,P.MethodNotAllowed+"",Z.ClientError,P.NotAcceptable+"",Z.ClientError,P.ProxyAuthenticationRequired+"",Z.ClientError,P.RequestTimeout+"",Z.ClientError,P.Conflict+"",Z.ClientError,P.Gone+"",Z.ClientError,P.LengthRequired+"",Z.ClientError,P.PreconditionFailed+"",Z.ClientError,P.PayloadTooLarge+"",Z.ClientError,P.UriTooLong+"",Z.ClientError,P.UnsupportedMediaType+"",Z.ClientError,P.RangeNotSatisfiable+"",Z.ClientError,P.ExpectationFailed+"",Z.ClientError,P.ImATeapot+"",Z.ClientError,P.MisdirectedRequest+"",Z.ClientError,P.UnprocessableContent+"",Z.ClientError,P.Locked+"",Z.ClientError,P.FailedDependency+"",Z.ClientError,P.TooEarly+"",Z.ClientError,P.UpgradeRequired+"",Z.ClientError,P.PreconditionRequired+"",Z.ClientError,P.TooManyRequests+"",Z.ClientError,P.RequestHeaderFieldsTooLarge+"",Z.ClientError,P.UnavailableForLegalReasons+"",Z.ClientError,P.InternalServerError+"",Z.ServerError,P.NotImplemented+"",Z.ServerError,P.BadGateway+"",Z.ServerError,P.ServiceUnavailable+"",Z.ServerError,P.GatewayTimeout+"",Z.ServerError,P.HttpVersionNotSupported+"",Z.ServerError,P.VariantAlsoNegotiates+"",Z.ServerError,P.InsufficientStorage+"",Z.ServerError,P.LoopDetected+"",Z.ServerError,P.NotExtended+"",Z.ServerError,P.NetworkAuthenticationRequired+"",Z.ServerError;const fc={[Z.Information]:[P.Continue,P.SwitchingProtocols,P.Processing,P.EarlyHints],[Z.Success]:[P.Ok,P.Created,P.Accepted,P.NonAuthoritativeInformation,P.NoContent,P.ResetContent,P.PartialContent,P.MultiStatus,P.AlreadyReported,P.ImUsed],[Z.Redirect]:[P.MultipleChoices,P.MovedPermanently,P.Found,P.SeeOther,P.NotModified,P.UseProxy,P.Unused,P.TemporaryRedirect,P.PermanentRedirect],[Z.ClientError]:[P.BadRequest,P.Unauthorized,P.PaymentRequired,P.Forbidden,P.NotFound,P.MethodNotAllowed,P.NotAcceptable,P.ProxyAuthenticationRequired,P.RequestTimeout,P.Conflict,P.Gone,P.LengthRequired,P.PreconditionFailed,P.PayloadTooLarge,P.UriTooLong,P.UnsupportedMediaType,P.RangeNotSatisfiable,P.ExpectationFailed,P.ImATeapot,P.MisdirectedRequest,P.UnprocessableContent,P.Locked,P.FailedDependency,P.TooEarly,P.UpgradeRequired,P.PreconditionRequired,P.TooManyRequests,P.RequestHeaderFieldsTooLarge,P.UnavailableForLegalReasons],[Z.ServerError]:[P.InternalServerError,P.NotImplemented,P.BadGateway,P.ServiceUnavailable,P.GatewayTimeout,P.HttpVersionNotSupported,P.VariantAlsoNegotiates,P.InsufficientStorage,P.LoopDetected,P.NotExtended,P.NetworkAuthenticationRequired]};function $h({min:e,max:r}){return e>r?{min:r,max:e}:{min:e,max:r}}i($h,"ensureMinMax");class Ac{static{i(this,"DeferredPromise")}promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((r,t)=>{this.resolve=n=>(this.isSettled=!0,r(n)),this.reject=n=>{this.isSettled=!0,t(Dr(n))}})}}class ha extends Error{static{i(this,"LuxonError")}}class R4 extends ha{static{i(this,"InvalidDateTimeError")}constructor(r){super(`Invalid DateTime: ${r.toMessage()}`)}}class L4 extends ha{static{i(this,"InvalidIntervalError")}constructor(r){super(`Invalid Interval: ${r.toMessage()}`)}}class j4 extends ha{static{i(this,"InvalidDurationError")}constructor(r){super(`Invalid Duration: ${r.toMessage()}`)}}class _a extends ha{static{i(this,"ConflictingSpecificationError")}}class H1 extends ha{static{i(this,"InvalidUnitError")}constructor(r){super(`Invalid unit ${r}`)}}class wt extends ha{static{i(this,"InvalidArgumentError")}}class Vo extends ha{static{i(this,"ZoneIsAbstractError")}constructor(){super("Zone is an abstract class")}}const K="numeric",qn="short",tn="long",Fc={year:K,month:K,day:K},G1={year:K,month:qn,day:K},U4={year:K,month:qn,day:K,weekday:qn},Z1={year:K,month:tn,day:K},Y1={year:K,month:tn,day:K,weekday:tn},J1={hour:K,minute:K},X1={hour:K,minute:K,second:K},Q1={hour:K,minute:K,second:K,timeZoneName:qn},e2={hour:K,minute:K,second:K,timeZoneName:tn},r2={hour:K,minute:K,hourCycle:"h23"},t2={hour:K,minute:K,second:K,hourCycle:"h23"},n2={hour:K,minute:K,second:K,hourCycle:"h23",timeZoneName:qn},o2={hour:K,minute:K,second:K,hourCycle:"h23",timeZoneName:tn},i2={year:K,month:K,day:K,hour:K,minute:K},a2={year:K,month:K,day:K,hour:K,minute:K,second:K},s2={year:K,month:qn,day:K,hour:K,minute:K},l2={year:K,month:qn,day:K,hour:K,minute:K,second:K},_4={year:K,month:qn,day:K,weekday:qn,hour:K,minute:K},u2={year:K,month:tn,day:K,hour:K,minute:K,timeZoneName:qn},c2={year:K,month:tn,day:K,hour:K,minute:K,second:K,timeZoneName:qn},d2={year:K,month:tn,day:K,weekday:tn,hour:K,minute:K,timeZoneName:tn},f2={year:K,month:tn,day:K,weekday:tn,hour:K,minute:K,second:K,timeZoneName:tn};class au{static{i(this,"Zone")}get type(){throw new Vo}get name(){throw new Vo}get ianaName(){return this.name}get isUniversal(){throw new Vo}offsetName(r,t){throw new Vo}formatOffset(r,t){throw new Vo}offset(r){throw new Vo}equals(r){throw new Vo}get isValid(){throw new Vo}}let Tf=null;class hd extends au{static{i(this,"SystemZone")}static get instance(){return Tf===null&&(Tf=new hd),Tf}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(r,{format:t,locale:n}){return x2(r,t,n)}formatOffset(r,t){return xl(this.offset(r),t)}offset(r){return-new Date(r).getTimezoneOffset()}equals(r){return r.type==="system"}get isValid(){return!0}}const ig=new Map;function z4(e){let r=ig.get(e);return r===void 0&&(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),ig.set(e,r)),r}i(z4,"makeDTF");const q4={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function V4(e,r){const t=e.format(r).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t),[,o,a,s,l,u,f,g]=n;return[s,o,a,l,u,f,g]}i(V4,"hackyOffset");function W4(e,r){const t=e.formatToParts(r),n=[];for(let o=0;o<t.length;o++){const{type:a,value:s}=t[o],l=q4[a];a==="era"?n[l]=s:ae(l)||(n[l]=parseInt(s,10))}return n}i(W4,"partsOffset");const Pf=new Map;class No extends au{static{i(this,"IANAZone")}static create(r){let t=Pf.get(r);return t===void 0&&Pf.set(r,t=new No(r)),t}static resetCache(){Pf.clear(),ig.clear()}static isValidSpecifier(r){return this.isValidZone(r)}static isValidZone(r){if(!r)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:r}).format(),!0}catch{return!1}}constructor(r){super(),this.zoneName=r,this.valid=No.isValidZone(r)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(r,{format:t,locale:n}){return x2(r,t,n,this.name)}formatOffset(r,t){return xl(this.offset(r),t)}offset(r){if(!this.valid)return NaN;const t=new Date(r);if(isNaN(t))return NaN;const n=z4(this.name);let[o,a,s,l,u,f,g]=n.formatToParts?W4(n,t):V4(n,t);l==="BC"&&(o=-Math.abs(o)+1);const p=md({year:o,month:a,day:s,hour:u===24?0:u,minute:f,second:g,millisecond:0});let b=+t;const v=b%1e3;return b-=v>=0?v:1e3+v,(p-b)/(60*1e3)}equals(r){return r.type==="iana"&&r.name===this.name}get isValid(){return this.valid}}let qm={};function K4(e,r={}){const t=JSON.stringify([e,r]);let n=qm[t];return n||(n=new Intl.ListFormat(e,r),qm[t]=n),n}i(K4,"getCachedLF");const ag=new Map;function sg(e,r={}){const t=JSON.stringify([e,r]);let n=ag.get(t);return n===void 0&&(n=new Intl.DateTimeFormat(e,r),ag.set(t,n)),n}i(sg,"getCachedDTF");const lg=new Map;function H4(e,r={}){const t=JSON.stringify([e,r]);let n=lg.get(t);return n===void 0&&(n=new Intl.NumberFormat(e,r),lg.set(t,n)),n}i(H4,"getCachedINF");const ug=new Map;function G4(e,r={}){const{base:t,...n}=r,o=JSON.stringify([e,n]);let a=ug.get(o);return a===void 0&&(a=new Intl.RelativeTimeFormat(e,r),ug.set(o,a)),a}i(G4,"getCachedRTF");let ul=null;function Z4(){return ul||(ul=new Intl.DateTimeFormat().resolvedOptions().locale,ul)}i(Z4,"systemLocale");const cg=new Map;function g2(e){let r=cg.get(e);return r===void 0&&(r=new Intl.DateTimeFormat(e).resolvedOptions(),cg.set(e,r)),r}i(g2,"getCachedIntResolvedOptions");const dg=new Map;function Y4(e){let r=dg.get(e);if(!r){const t=new Intl.Locale(e);r="getWeekInfo"in t?t.getWeekInfo():t.weekInfo,"minimalDays"in r||(r={...h2,...r}),dg.set(e,r)}return r}i(Y4,"getCachedWeekInfo");function J4(e){const r=e.indexOf("-x-");r!==-1&&(e=e.substring(0,r));const t=e.indexOf("-u-");if(t===-1)return[e];{let n,o;try{n=sg(e).resolvedOptions(),o=e}catch{const u=e.substring(0,t);n=sg(u).resolvedOptions(),o=u}const{numberingSystem:a,calendar:s}=n;return[o,a,s]}}i(J4,"parseLocaleString");function X4(e,r,t){return(t||r)&&(e.includes("-u-")||(e+="-u"),t&&(e+=`-ca-${t}`),r&&(e+=`-nu-${r}`)),e}i(X4,"intlConfigString");function Q4(e){const r=[];for(let t=1;t<=12;t++){const n=se.utc(2009,t,1);r.push(e(n))}return r}i(Q4,"mapMonths");function e3(e){const r=[];for(let t=1;t<=7;t++){const n=se.utc(2016,11,13+t);r.push(e(n))}return r}i(e3,"mapWeekdays");function Uu(e,r,t,n){const o=e.listingMode();return o==="error"?null:o==="en"?t(r):n(r)}i(Uu,"listStuff");function r3(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||g2(e.locale).numberingSystem==="latn"}i(r3,"supportsFastNumbers");class t3{static{i(this,"PolyNumberFormatter")}constructor(r,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:a,...s}=n;if(!t||Object.keys(s).length>0){const l={useGrouping:!1,...n};n.padTo>0&&(l.minimumIntegerDigits=n.padTo),this.inf=H4(r,l)}}format(r){if(this.inf){const t=this.floor?Math.floor(r):r;return this.inf.format(t)}else{const t=this.floor?Math.floor(r):Ah(r,3);return Mr(t,this.padTo)}}}class n3{static{i(this,"PolyDateFormatter")}constructor(r,t,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=r;else if(r.zone.type==="fixed"){const s=-1*(r.offset/60),l=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;r.offset!==0&&No.create(l).valid?(o=l,this.dt=r):(o="UTC",this.dt=r.offset===0?r:r.setZone("UTC").plus({minutes:r.offset}),this.originalZone=r.zone)}else r.zone.type==="system"?this.dt=r:r.zone.type==="iana"?(this.dt=r,o=r.zone.name):(o="UTC",this.dt=r.setZone("UTC").plus({minutes:r.offset}),this.originalZone=r.zone);const a={...this.opts};a.timeZone=a.timeZone||o,this.dtf=sg(t,a)}format(){return this.originalZone?this.formatToParts().map(({value:r})=>r).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const r=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?r.map(t=>{if(t.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...t,value:n}}else return t}):r}resolvedOptions(){return this.dtf.resolvedOptions()}}class o3{static{i(this,"PolyRelFormatter")}constructor(r,t,n){this.opts={style:"long",...n},!t&&k2()&&(this.rtf=G4(r,n))}format(r,t){return this.rtf?this.rtf.format(r,t):E3(t,r,this.opts.numeric,this.opts.style!=="long")}formatToParts(r,t){return this.rtf?this.rtf.formatToParts(r,t):[]}}const h2={firstDay:1,minimalDays:4,weekend:[6,7]};class je{static{i(this,"Locale")}static fromOpts(r){return je.create(r.locale,r.numberingSystem,r.outputCalendar,r.weekSettings,r.defaultToEN)}static create(r,t,n,o,a=!1){const s=r||pr.defaultLocale,l=s||(a?"en-US":Z4()),u=t||pr.defaultNumberingSystem,f=n||pr.defaultOutputCalendar,g=gg(o)||pr.defaultWeekSettings;return new je(l,u,f,g,s)}static resetCache(){ul=null,ag.clear(),lg.clear(),ug.clear(),cg.clear(),dg.clear()}static fromObject({locale:r,numberingSystem:t,outputCalendar:n,weekSettings:o}={}){return je.create(r,t,n,o)}constructor(r,t,n,o,a){const[s,l,u]=J4(r);this.locale=s,this.numberingSystem=t||l||null,this.outputCalendar=n||u||null,this.weekSettings=o,this.intl=X4(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=r3(this)),this.fastNumbersCached}listingMode(){const r=this.isEnglish(),t=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return r&&t?"en":"intl"}clone(r){return!r||Object.getOwnPropertyNames(r).length===0?this:je.create(r.locale||this.specifiedLocale,r.numberingSystem||this.numberingSystem,r.outputCalendar||this.outputCalendar,gg(r.weekSettings)||this.weekSettings,r.defaultToEN||!1)}redefaultToEN(r={}){return this.clone({...r,defaultToEN:!0})}redefaultToSystem(r={}){return this.clone({...r,defaultToEN:!1})}months(r,t=!1){return Uu(this,r,E2,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");t&=!n;const o=t?{month:r,day:"numeric"}:{month:r},a=t?"format":"standalone";if(!this.monthsCache[a][r]){const s=n?l=>this.dtFormatter(l,o).format():l=>this.extract(l,o,"month");this.monthsCache[a][r]=Q4(s)}return this.monthsCache[a][r]})}weekdays(r,t=!1){return Uu(this,r,S2,()=>{const n=t?{weekday:r,year:"numeric",month:"long",day:"numeric"}:{weekday:r},o=t?"format":"standalone";return this.weekdaysCache[o][r]||(this.weekdaysCache[o][r]=e3(a=>this.extract(a,n,"weekday"))),this.weekdaysCache[o][r]})}meridiems(){return Uu(this,void 0,()=>M2,()=>{if(!this.meridiemCache){const r={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[se.utc(2016,11,13,9),se.utc(2016,11,13,19)].map(t=>this.extract(t,r,"dayperiod"))}return this.meridiemCache})}eras(r){return Uu(this,r,T2,()=>{const t={era:r};return this.eraCache[r]||(this.eraCache[r]=[se.utc(-40,1,1),se.utc(2017,1,1)].map(n=>this.extract(n,t,"era"))),this.eraCache[r]})}extract(r,t,n){const o=this.dtFormatter(r,t),a=o.formatToParts(),s=a.find(l=>l.type.toLowerCase()===n);return s?s.value:null}numberFormatter(r={}){return new t3(this.intl,r.forceSimple||this.fastNumbers,r)}dtFormatter(r,t={}){return new n3(r,this.intl,t)}relFormatter(r={}){return new o3(this.intl,this.isEnglish(),r)}listFormatter(r={}){return K4(this.intl,r)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||g2(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:$2()?Y4(this.locale):h2}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(r){return this.locale===r.locale&&this.numberingSystem===r.numberingSystem&&this.outputCalendar===r.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let If=null;class St extends au{static{i(this,"FixedOffsetZone")}static get utcInstance(){return If===null&&(If=new St(0)),If}static instance(r){return r===0?St.utcInstance:new St(r)}static parseSpecifier(r){if(r){const t=r.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new St(bd(t[1],t[2]))}return null}constructor(r){super(),this.fixed=r}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${xl(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${xl(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(r,t){return xl(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(r){return r.type==="fixed"&&r.fixed===this.fixed}get isValid(){return!0}}class i3 extends au{static{i(this,"InvalidZone")}constructor(r){super(),this.zoneName=r}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Xo(e,r){if(ae(e)||e===null)return r;if(e instanceof au)return e;if(d3(e)){const t=e.toLowerCase();return t==="default"?r:t==="local"||t==="system"?hd.instance:t==="utc"||t==="gmt"?St.utcInstance:St.parseSpecifier(t)||No.create(e)}else return ai(e)?St.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new i3(e)}i(Xo,"normalizeZone");const xh={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Vm={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},a3=xh.hanidec.replace(/[\[|\]]/g,"").split("");function s3(e){let r=parseInt(e,10);if(isNaN(r)){r="";for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(e[t].search(xh.hanidec)!==-1)r+=a3.indexOf(e[t]);else for(const o in Vm){const[a,s]=Vm[o];n>=a&&n<=s&&(r+=n-a)}}return parseInt(r,10)}else return r}i(s3,"parseDigits");const fg=new Map;function l3(){fg.clear()}i(l3,"resetDigitRegexCache");function Nn({numberingSystem:e},r=""){const t=e||"latn";let n=fg.get(t);n===void 0&&(n=new Map,fg.set(t,n));let o=n.get(r);return o===void 0&&(o=new RegExp(`${xh[t]}${r}`),n.set(r,o)),o}i(Nn,"digitRegex");let Wm=i(()=>Date.now(),"now"),Km="system",Hm=null,Gm=null,Zm=null,Ym=60,Jm,Xm=null;class pr{static{i(this,"Settings")}static get now(){return Wm}static set now(r){Wm=r}static set defaultZone(r){Km=r}static get defaultZone(){return Xo(Km,hd.instance)}static get defaultLocale(){return Hm}static set defaultLocale(r){Hm=r}static get defaultNumberingSystem(){return Gm}static set defaultNumberingSystem(r){Gm=r}static get defaultOutputCalendar(){return Zm}static set defaultOutputCalendar(r){Zm=r}static get defaultWeekSettings(){return Xm}static set defaultWeekSettings(r){Xm=gg(r)}static get twoDigitCutoffYear(){return Ym}static set twoDigitCutoffYear(r){Ym=r%100}static get throwOnInvalid(){return Jm}static set throwOnInvalid(r){Jm=r}static resetCaches(){je.resetCache(),No.resetCache(),se.resetCache(),l3()}}class jn{static{i(this,"Invalid")}constructor(r,t){this.reason=r,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const p2=[0,31,59,90,120,151,181,212,243,273,304,334],m2=[0,31,60,91,121,152,182,213,244,274,305,335];function xn(e,r){return new jn("unit out of range",`you specified ${r} (of type ${typeof r}) as a ${e}, which is invalid`)}i(xn,"unitOutOfRange");function Dh(e,r,t){const n=new Date(Date.UTC(e,r-1,t));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}i(Dh,"dayOfWeek");function b2(e,r,t){return t+(su(e)?m2:p2)[r-1]}i(b2,"computeOrdinal");function v2(e,r){const t=su(e)?m2:p2,n=t.findIndex(a=>a<r),o=r-t[n];return{month:n+1,day:o}}i(v2,"uncomputeOrdinal");function Ch(e,r){return(e-r+7)%7+1}i(Ch,"isoWeekdayToLocal");function Sc(e,r=4,t=1){const{year:n,month:o,day:a}=e,s=b2(n,o,a),l=Ch(Dh(n,o,a),t);let u=Math.floor((s-l+14-r)/7),f;return u<1?(f=n-1,u=Il(f,r,t)):u>Il(n,r,t)?(f=n+1,u=1):f=n,{weekYear:f,weekNumber:u,weekday:l,...vd(e)}}i(Sc,"gregorianToWeek");function Qm(e,r=4,t=1){const{weekYear:n,weekNumber:o,weekday:a}=e,s=Ch(Dh(n,1,r),t),l=Ka(n);let u=o*7+a-s-7+r,f;u<1?(f=n-1,u+=Ka(f)):u>l?(f=n+1,u-=Ka(n)):f=n;const{month:g,day:h}=v2(f,u);return{year:f,month:g,day:h,...vd(e)}}i(Qm,"weekToGregorian");function Nf(e){const{year:r,month:t,day:n}=e,o=b2(r,t,n);return{year:r,ordinal:o,...vd(e)}}i(Nf,"gregorianToOrdinal");function eb(e){const{year:r,ordinal:t}=e,{month:n,day:o}=v2(r,t);return{year:r,month:n,day:o,...vd(e)}}i(eb,"ordinalToGregorian");function rb(e,r){if(!ae(e.localWeekday)||!ae(e.localWeekNumber)||!ae(e.localWeekYear)){if(!ae(e.weekday)||!ae(e.weekNumber)||!ae(e.weekYear))throw new _a("Cannot mix locale-based week fields with ISO-based week fields");return ae(e.localWeekday)||(e.weekday=e.localWeekday),ae(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),ae(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:r.getMinDaysInFirstWeek(),startOfWeek:r.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}i(rb,"usesLocalWeekValues");function u3(e,r=4,t=1){const n=pd(e.weekYear),o=Dn(e.weekNumber,1,Il(e.weekYear,r,t)),a=Dn(e.weekday,1,7);return n?o?a?!1:xn("weekday",e.weekday):xn("week",e.weekNumber):xn("weekYear",e.weekYear)}i(u3,"hasInvalidWeekData");function c3(e){const r=pd(e.year),t=Dn(e.ordinal,1,Ka(e.year));return r?t?!1:xn("ordinal",e.ordinal):xn("year",e.year)}i(c3,"hasInvalidOrdinalData");function y2(e){const r=pd(e.year),t=Dn(e.month,1,12),n=Dn(e.day,1,Mc(e.year,e.month));return r?t?n?!1:xn("day",e.day):xn("month",e.month):xn("year",e.year)}i(y2,"hasInvalidGregorianData");function w2(e){const{hour:r,minute:t,second:n,millisecond:o}=e,a=Dn(r,0,23)||r===24&&t===0&&n===0&&o===0,s=Dn(t,0,59),l=Dn(n,0,59),u=Dn(o,0,999);return a?s?l?u?!1:xn("millisecond",o):xn("second",n):xn("minute",t):xn("hour",r)}i(w2,"hasInvalidTimeData");function ae(e){return typeof e>"u"}i(ae,"isUndefined");function ai(e){return typeof e=="number"}i(ai,"isNumber");function pd(e){return typeof e=="number"&&e%1===0}i(pd,"isInteger");function d3(e){return typeof e=="string"}i(d3,"isString$1");function f3(e){return Object.prototype.toString.call(e)==="[object Date]"}i(f3,"isDate");function k2(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}i(k2,"hasRelative");function $2(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}i($2,"hasLocaleWeekInfo");function g3(e){return Array.isArray(e)?e:[e]}i(g3,"maybeArray");function tb(e,r,t){if(e.length!==0)return e.reduce((n,o)=>{const a=[r(o),o];return n&&t(n[0],a[0])===n[0]?n:a},null)[1]}i(tb,"bestBy");function h3(e,r){return r.reduce((t,n)=>(t[n]=e[n],t),{})}i(h3,"pick");function es(e,r){return Object.prototype.hasOwnProperty.call(e,r)}i(es,"hasOwnProperty");function gg(e){if(e==null)return null;if(typeof e!="object")throw new wt("Week settings must be an object");if(!Dn(e.firstDay,1,7)||!Dn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(r=>!Dn(r,1,7)))throw new wt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}i(gg,"validateWeekSettings");function Dn(e,r,t){return pd(e)&&e>=r&&e<=t}i(Dn,"integerBetween");function p3(e,r){return e-r*Math.floor(e/r)}i(p3,"floorMod");function Mr(e,r=2){const t=e<0;let n;return t?n="-"+(""+-e).padStart(r,"0"):n=(""+e).padStart(r,"0"),n}i(Mr,"padStart");function Go(e){if(!(ae(e)||e===null||e===""))return parseInt(e,10)}i(Go,"parseInteger");function Pi(e){if(!(ae(e)||e===null||e===""))return parseFloat(e)}i(Pi,"parseFloating");function Eh(e){if(!(ae(e)||e===null||e==="")){const r=parseFloat("0."+e)*1e3;return Math.floor(r)}}i(Eh,"parseMillis");function Ah(e,r,t="round"){const n=10**r;switch(t){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${t} is out of range`)}}i(Ah,"roundTo");function su(e){return e%4===0&&(e%100!==0||e%400===0)}i(su,"isLeapYear");function Ka(e){return su(e)?366:365}i(Ka,"daysInYear");function Mc(e,r){const t=p3(r-1,12)+1,n=e+(r-t)/12;return t===2?su(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][t-1]}i(Mc,"daysInMonth");function md(e){let r=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(r=new Date(r),r.setUTCFullYear(e.year,e.month-1,e.day)),+r}i(md,"objToLocalTS");function nb(e,r,t){return-Ch(Dh(e,1,r),t)+r-1}i(nb,"firstWeekOffset");function Il(e,r=4,t=1){const n=nb(e,r,t),o=nb(e+1,r,t);return(Ka(e)-n+o)/7}i(Il,"weeksInWeekYear");function hg(e){return e>99?e:e>pr.twoDigitCutoffYear?1900+e:2e3+e}i(hg,"untruncateYear");function x2(e,r,t,n=null){const o=new Date(e),a={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(a.timeZone=n);const s={timeZoneName:r,...a},l=new Intl.DateTimeFormat(t,s).formatToParts(o).find(u=>u.type.toLowerCase()==="timezonename");return l?l.value:null}i(x2,"parseZoneInfo");function bd(e,r){let t=parseInt(e,10);Number.isNaN(t)&&(t=0);const n=parseInt(r,10)||0,o=t<0||Object.is(t,-0)?-n:n;return t*60+o}i(bd,"signedOffset");function D2(e){const r=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(r))throw new wt(`Invalid unit value ${e}`);return r}i(D2,"asNumber");function Tc(e,r){const t={};for(const n in e)if(es(e,n)){const o=e[n];if(o==null)continue;t[r(n)]=D2(o)}return t}i(Tc,"normalizeObject");function xl(e,r){const t=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(r){case"short":return`${o}${Mr(t,2)}:${Mr(n,2)}`;case"narrow":return`${o}${t}${n>0?`:${n}`:""}`;case"techie":return`${o}${Mr(t,2)}${Mr(n,2)}`;default:throw new RangeError(`Value format ${r} is out of range for property format`)}}i(xl,"formatOffset");function vd(e){return h3(e,["hour","minute","second","millisecond"])}i(vd,"timeObject");const m3=["January","February","March","April","May","June","July","August","September","October","November","December"],C2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b3=["J","F","M","A","M","J","J","A","S","O","N","D"];function E2(e){switch(e){case"narrow":return[...b3];case"short":return[...C2];case"long":return[...m3];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}i(E2,"months");const A2=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],F2=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],v3=["M","T","W","T","F","S","S"];function S2(e){switch(e){case"narrow":return[...v3];case"short":return[...F2];case"long":return[...A2];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}i(S2,"weekdays");const M2=["AM","PM"],y3=["Before Christ","Anno Domini"],w3=["BC","AD"],k3=["B","A"];function T2(e){switch(e){case"narrow":return[...k3];case"short":return[...w3];case"long":return[...y3];default:return null}}i(T2,"eras");function $3(e){return M2[e.hour<12?0:1]}i($3,"meridiemForDateTime");function x3(e,r){return S2(r)[e.weekday-1]}i(x3,"weekdayForDateTime");function D3(e,r){return E2(r)[e.month-1]}i(D3,"monthForDateTime");function C3(e,r){return T2(r)[e.year<0?0:1]}i(C3,"eraForDateTime");function E3(e,r,t="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},a=["hours","minutes","seconds"].indexOf(e)===-1;if(t==="auto"&&a){const h=e==="days";switch(r){case 1:return h?"tomorrow":`next ${o[e][0]}`;case-1:return h?"yesterday":`last ${o[e][0]}`;case 0:return h?"today":`this ${o[e][0]}`}}const s=Object.is(r,-0)||r<0,l=Math.abs(r),u=l===1,f=o[e],g=n?u?f[1]:f[2]||f[1]:u?o[e][0]:e;return s?`${l} ${g} ago`:`in ${l} ${g}`}i(E3,"formatRelativeTime");function ob(e,r){let t="";for(const n of e)n.literal?t+=n.val:t+=r(n.val);return t}i(ob,"stringifyTokens");const A3={D:Fc,DD:G1,DDD:Z1,DDDD:Y1,t:J1,tt:X1,ttt:Q1,tttt:e2,T:r2,TT:t2,TTT:n2,TTTT:o2,f:i2,ff:s2,fff:u2,ffff:d2,F:a2,FF:l2,FFF:c2,FFFF:f2};class xt{static{i(this,"Formatter")}static create(r,t={}){return new xt(r,t)}static parseFormat(r){let t=null,n="",o=!1;const a=[];for(let s=0;s<r.length;s++){const l=r.charAt(s);l==="'"?((n.length>0||o)&&a.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),t=null,n="",o=!o):o||l===t?n+=l:(n.length>0&&a.push({literal:/^\s+$/.test(n),val:n}),n=l,t=l)}return n.length>0&&a.push({literal:o||/^\s+$/.test(n),val:n}),a}static macroTokenToFormatOpts(r){return A3[r]}constructor(r,t){this.opts=t,this.loc=r,this.systemLoc=null}formatWithSystemDefault(r,t){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(r,{...this.opts,...t}).format()}dtFormatter(r,t={}){return this.loc.dtFormatter(r,{...this.opts,...t})}formatDateTime(r,t){return this.dtFormatter(r,t).format()}formatDateTimeParts(r,t){return this.dtFormatter(r,t).formatToParts()}formatInterval(r,t){return this.dtFormatter(r.start,t).dtf.formatRange(r.start.toJSDate(),r.end.toJSDate())}resolvedOptions(r,t){return this.dtFormatter(r,t).resolvedOptions()}num(r,t=0,n=void 0){if(this.opts.forceSimple)return Mr(r,t);const o={...this.opts};return t>0&&(o.padTo=t),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(r)}formatDateTimeFromString(r,t){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",a=i((b,v)=>this.loc.extract(r,b,v),"string"),s=i(b=>r.isOffsetFixed&&r.offset===0&&b.allowZ?"Z":r.isValid?r.zone.formatOffset(r.ts,b.format):"","formatOffset"),l=i(()=>n?$3(r):a({hour:"numeric",hourCycle:"h12"},"dayperiod"),"meridiem"),u=i((b,v)=>n?D3(r,b):a(v?{month:b}:{month:b,day:"numeric"},"month"),"month"),f=i((b,v)=>n?x3(r,b):a(v?{weekday:b}:{weekday:b,month:"long",day:"numeric"},"weekday"),"weekday"),g=i(b=>{const v=xt.macroTokenToFormatOpts(b);return v?this.formatWithSystemDefault(r,v):b},"maybeMacro"),h=i(b=>n?C3(r,b):a({era:b},"era"),"era"),p=i(b=>{switch(b){case"S":return this.num(r.millisecond);case"u":case"SSS":return this.num(r.millisecond,3);case"s":return this.num(r.second);case"ss":return this.num(r.second,2);case"uu":return this.num(Math.floor(r.millisecond/10),2);case"uuu":return this.num(Math.floor(r.millisecond/100));case"m":return this.num(r.minute);case"mm":return this.num(r.minute,2);case"h":return this.num(r.hour%12===0?12:r.hour%12);case"hh":return this.num(r.hour%12===0?12:r.hour%12,2);case"H":return this.num(r.hour);case"HH":return this.num(r.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return r.zone.offsetName(r.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return r.zone.offsetName(r.ts,{format:"long",locale:this.loc.locale});case"z":return r.zoneName;case"a":return l();case"d":return o?a({day:"numeric"},"day"):this.num(r.day);case"dd":return o?a({day:"2-digit"},"day"):this.num(r.day,2);case"c":return this.num(r.weekday);case"ccc":return f("short",!0);case"cccc":return f("long",!0);case"ccccc":return f("narrow",!0);case"E":return this.num(r.weekday);case"EEE":return f("short",!1);case"EEEE":return f("long",!1);case"EEEEE":return f("narrow",!1);case"L":return o?a({month:"numeric",day:"numeric"},"month"):this.num(r.month);case"LL":return o?a({month:"2-digit",day:"numeric"},"month"):this.num(r.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return o?a({month:"numeric"},"month"):this.num(r.month);case"MM":return o?a({month:"2-digit"},"month"):this.num(r.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return o?a({year:"numeric"},"year"):this.num(r.year);case"yy":return o?a({year:"2-digit"},"year"):this.num(r.year.toString().slice(-2),2);case"yyyy":return o?a({year:"numeric"},"year"):this.num(r.year,4);case"yyyyyy":return o?a({year:"numeric"},"year"):this.num(r.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(r.weekYear.toString().slice(-2),2);case"kkkk":return this.num(r.weekYear,4);case"W":return this.num(r.weekNumber);case"WW":return this.num(r.weekNumber,2);case"n":return this.num(r.localWeekNumber);case"nn":return this.num(r.localWeekNumber,2);case"ii":return this.num(r.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(r.localWeekYear,4);case"o":return this.num(r.ordinal);case"ooo":return this.num(r.ordinal,3);case"q":return this.num(r.quarter);case"qq":return this.num(r.quarter,2);case"X":return this.num(Math.floor(r.ts/1e3));case"x":return this.num(r.ts);default:return g(b)}},"tokenToString");return ob(xt.parseFormat(t),p)}formatDurationFromString(r,t){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=i(g=>{switch(g[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},"tokenToField"),a=i((g,h)=>p=>{const b=o(p);if(b){const v=h.isNegativeDuration&&b!==h.largestUnit?n:1;let $;return this.opts.signMode==="negativeLargestOnly"&&b!==h.largestUnit?$="never":this.opts.signMode==="all"?$="always":$="auto",this.num(g.get(b)*v,p.length,$)}else return p},"tokenToString"),s=xt.parseFormat(t),l=s.reduce((g,{literal:h,val:p})=>h?g:g.concat(p),[]),u=r.shiftTo(...l.map(o).filter(g=>g)),f={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return ob(s,a(u,f))}}const P2=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function $s(...e){const r=e.reduce((t,n)=>t+n.source,"");return RegExp(`^${r}$`)}i($s,"combineRegexes");function xs(...e){return r=>e.reduce(([t,n,o],a)=>{const[s,l,u]=a(r,o);return[{...t,...s},l||n,u]},[{},null,1]).slice(0,2)}i(xs,"combineExtractors");function Ds(e,...r){if(e==null)return[null,null];for(const[t,n]of r){const o=t.exec(e);if(o)return n(o)}return[null,null]}i(Ds,"parse$2");function I2(...e){return(r,t)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=Go(r[t+o]);return[n,null,t+o]}}i(I2,"simpleParse");const N2=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,F3=`(?:${N2.source}?(?:\\[(${P2.source})\\])?)?`,Fh=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,B2=RegExp(`${Fh.source}${F3}`),Sh=RegExp(`(?:[Tt]${B2.source})?`),S3=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,M3=/(\d{4})-?W(\d\d)(?:-?(\d))?/,T3=/(\d{4})-?(\d{3})/,P3=I2("weekYear","weekNumber","weekDay"),I3=I2("year","ordinal"),N3=/(\d{4})-(\d\d)-(\d\d)/,O2=RegExp(`${Fh.source} ?(?:${N2.source}|(${P2.source}))?`),B3=RegExp(`(?: ${O2.source})?`);function Ha(e,r,t){const n=e[r];return ae(n)?t:Go(n)}i(Ha,"int");function O3(e,r){return[{year:Ha(e,r),month:Ha(e,r+1,1),day:Ha(e,r+2,1)},null,r+3]}i(O3,"extractISOYmd");function Cs(e,r){return[{hours:Ha(e,r,0),minutes:Ha(e,r+1,0),seconds:Ha(e,r+2,0),milliseconds:Eh(e[r+3])},null,r+4]}i(Cs,"extractISOTime");function lu(e,r){const t=!e[r]&&!e[r+1],n=bd(e[r+1],e[r+2]),o=t?null:St.instance(n);return[{},o,r+3]}i(lu,"extractISOOffset");function uu(e,r){const t=e[r]?No.create(e[r]):null;return[{},t,r+1]}i(uu,"extractIANAZone");const R3=RegExp(`^T?${Fh.source}$`),L3=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function j3(e){const[r,t,n,o,a,s,l,u,f]=e,g=r[0]==="-",h=u&&u[0]==="-",p=i((b,v=!1)=>b!==void 0&&(v||b&&g)?-b:b,"maybeNegate");return[{years:p(Pi(t)),months:p(Pi(n)),weeks:p(Pi(o)),days:p(Pi(a)),hours:p(Pi(s)),minutes:p(Pi(l)),seconds:p(Pi(u),u==="-0"),milliseconds:p(Eh(f),h)}]}i(j3,"extractISODuration");const U3={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Mh(e,r,t,n,o,a,s){const l={year:r.length===2?hg(Go(r)):Go(r),month:C2.indexOf(t)+1,day:Go(n),hour:Go(o),minute:Go(a)};return s&&(l.second=Go(s)),e&&(l.weekday=e.length>3?A2.indexOf(e)+1:F2.indexOf(e)+1),l}i(Mh,"fromStrings");const _3=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function z3(e){const[,r,t,n,o,a,s,l,u,f,g,h]=e,p=Mh(r,o,n,t,a,s,l);let b;return u?b=U3[u]:f?b=0:b=bd(g,h),[p,new St(b)]}i(z3,"extractRFC2822");function q3(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}i(q3,"preprocessRFC2822");const V3=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,W3=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,K3=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function ib(e){const[,r,t,n,o,a,s,l]=e;return[Mh(r,o,n,t,a,s,l),St.utcInstance]}i(ib,"extractRFC1123Or850");function H3(e){const[,r,t,n,o,a,s,l]=e;return[Mh(r,l,t,n,o,a,s),St.utcInstance]}i(H3,"extractASCII");const G3=$s(S3,Sh),Z3=$s(M3,Sh),Y3=$s(T3,Sh),J3=$s(B2),R2=xs(O3,Cs,lu,uu),X3=xs(P3,Cs,lu,uu),Q3=xs(I3,Cs,lu,uu),e6=xs(Cs,lu,uu);function r6(e){return Ds(e,[G3,R2],[Z3,X3],[Y3,Q3],[J3,e6])}i(r6,"parseISODate");function t6(e){return Ds(q3(e),[_3,z3])}i(t6,"parseRFC2822Date");function n6(e){return Ds(e,[V3,ib],[W3,ib],[K3,H3])}i(n6,"parseHTTPDate");function o6(e){return Ds(e,[L3,j3])}i(o6,"parseISODuration");const i6=xs(Cs);function a6(e){return Ds(e,[R3,i6])}i(a6,"parseISOTimeOnly");const s6=$s(N3,B3),l6=$s(O2),u6=xs(Cs,lu,uu);function c6(e){return Ds(e,[s6,R2],[l6,u6])}i(c6,"parseSQL");const ab="Invalid Duration",L2={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},d6={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...L2},vn=146097/400,Ma=146097/4800,f6={years:{quarters:4,months:12,weeks:vn/7,days:vn,hours:vn*24,minutes:vn*24*60,seconds:vn*24*60*60,milliseconds:vn*24*60*60*1e3},quarters:{months:3,weeks:vn/28,days:vn/4,hours:vn*24/4,minutes:vn*24*60/4,seconds:vn*24*60*60/4,milliseconds:vn*24*60*60*1e3/4},months:{weeks:Ma/7,days:Ma,hours:Ma*24,minutes:Ma*24*60,seconds:Ma*24*60*60,milliseconds:Ma*24*60*60*1e3},...L2},zi=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],g6=zi.slice(0).reverse();function mo(e,r,t=!1){const n={values:t?r.values:{...e.values,...r.values||{}},loc:e.loc.clone(r.loc),conversionAccuracy:r.conversionAccuracy||e.conversionAccuracy,matrix:r.matrix||e.matrix};return new Ce(n)}i(mo,"clone$1$1");function j2(e,r){let t=r.milliseconds??0;for(const n of g6.slice(1))r[n]&&(t+=r[n]*e[n].milliseconds);return t}i(j2,"durationToMillis");function sb(e,r){const t=j2(e,r)<0?-1:1;zi.reduceRight((n,o)=>{if(ae(r[o]))return n;if(n){const a=r[n]*t,s=e[o][n],l=Math.floor(a/s);r[o]+=l*t,r[n]-=l*s*t}return o},null),zi.reduce((n,o)=>{if(ae(r[o]))return n;if(n){const a=r[n]%1;r[n]-=a,r[o]+=a*e[n][o]}return o},null)}i(sb,"normalizeValues");function lb(e){const r={};for(const[t,n]of Object.entries(e))n!==0&&(r[t]=n);return r}i(lb,"removeZeroes");class Ce{static{i(this,"Duration")}constructor(r){const t=r.conversionAccuracy==="longterm"||!1;let n=t?f6:d6;r.matrix&&(n=r.matrix),this.values=r.values,this.loc=r.loc||je.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=r.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(r,t){return Ce.fromObject({milliseconds:r},t)}static fromObject(r,t={}){if(r==null||typeof r!="object")throw new wt(`Duration.fromObject: argument expected to be an object, got ${r===null?"null":typeof r}`);return new Ce({values:Tc(r,Ce.normalizeUnit),loc:je.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(r){if(ai(r))return Ce.fromMillis(r);if(Ce.isDuration(r))return r;if(typeof r=="object")return Ce.fromObject(r);throw new wt(`Unknown duration argument ${r} of type ${typeof r}`)}static fromISO(r,t){const[n]=o6(r);return n?Ce.fromObject(n,t):Ce.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static fromISOTime(r,t){const[n]=a6(r);return n?Ce.fromObject(n,t):Ce.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static invalid(r,t=null){if(!r)throw new wt("need to specify a reason the Duration is invalid");const n=r instanceof jn?r:new jn(r,t);if(pr.throwOnInvalid)throw new j4(n);return new Ce({invalid:n})}static normalizeUnit(r){const t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[r&&r.toLowerCase()];if(!t)throw new H1(r);return t}static isDuration(r){return r&&r.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(r,t={}){const n={...t,floor:t.round!==!1&&t.floor!==!1};return this.isValid?xt.create(this.loc,n).formatDurationFromString(this,r):ab}toHuman(r={}){if(!this.isValid)return ab;const t=r.showZeros!==!1,n=zi.map(o=>{const a=this.values[o];return ae(a)||a===0&&!t?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...r,unit:o.slice(0,-1)}).format(a)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:r.listStyle||"narrow",...r}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let r="P";return this.years!==0&&(r+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(r+=this.months+this.quarters*3+"M"),this.weeks!==0&&(r+=this.weeks+"W"),this.days!==0&&(r+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(r+="T"),this.hours!==0&&(r+=this.hours+"H"),this.minutes!==0&&(r+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(r+=Ah(this.seconds+this.milliseconds/1e3,3)+"S"),r==="P"&&(r+="T0S"),r}toISOTime(r={}){if(!this.isValid)return null;const t=this.toMillis();return t<0||t>=864e5?null:(r={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...r,includeOffset:!1},se.fromMillis(t,{zone:"UTC"}).toISOTime(r))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?j2(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(r){if(!this.isValid)return this;const t=Ce.fromDurationLike(r),n={};for(const o of zi)(es(t.values,o)||es(this.values,o))&&(n[o]=t.get(o)+this.get(o));return mo(this,{values:n},!0)}minus(r){if(!this.isValid)return this;const t=Ce.fromDurationLike(r);return this.plus(t.negate())}mapUnits(r){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=D2(r(this.values[n],n));return mo(this,{values:t},!0)}get(r){return this[Ce.normalizeUnit(r)]}set(r){if(!this.isValid)return this;const t={...this.values,...Tc(r,Ce.normalizeUnit)};return mo(this,{values:t})}reconfigure({locale:r,numberingSystem:t,conversionAccuracy:n,matrix:o}={}){const s={loc:this.loc.clone({locale:r,numberingSystem:t}),matrix:o,conversionAccuracy:n};return mo(this,s)}as(r){return this.isValid?this.shiftTo(r).get(r):NaN}normalize(){if(!this.isValid)return this;const r=this.toObject();return sb(this.matrix,r),mo(this,{values:r},!0)}rescale(){if(!this.isValid)return this;const r=lb(this.normalize().shiftToAll().toObject());return mo(this,{values:r},!0)}shiftTo(...r){if(!this.isValid)return this;if(r.length===0)return this;r=r.map(s=>Ce.normalizeUnit(s));const t={},n={},o=this.toObject();let a;for(const s of zi)if(r.indexOf(s)>=0){a=s;let l=0;for(const f in n)l+=this.matrix[f][s]*n[f],n[f]=0;ai(o[s])&&(l+=o[s]);const u=Math.trunc(l);t[s]=u,n[s]=(l*1e3-u*1e3)/1e3}else ai(o[s])&&(n[s]=o[s]);for(const s in n)n[s]!==0&&(t[a]+=s===a?n[s]:n[s]/this.matrix[a][s]);return sb(this.matrix,t),mo(this,{values:t},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const r={};for(const t of Object.keys(this.values))r[t]=this.values[t]===0?0:-this.values[t];return mo(this,{values:r},!0)}removeZeros(){if(!this.isValid)return this;const r=lb(this.values);return mo(this,{values:r},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(r){if(!this.isValid||!r.isValid||!this.loc.equals(r.loc))return!1;function t(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}i(t,"eq");for(const n of zi)if(!t(this.values[n],r.values[n]))return!1;return!0}}const Ta="Invalid Interval";function h6(e,r){return!e||!e.isValid?$r.invalid("missing or invalid start"):!r||!r.isValid?$r.invalid("missing or invalid end"):r<e?$r.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${r.toISO()}`):null}i(h6,"validateStartEnd");class $r{static{i(this,"Interval")}constructor(r){this.s=r.start,this.e=r.end,this.invalid=r.invalid||null,this.isLuxonInterval=!0}static invalid(r,t=null){if(!r)throw new wt("need to specify a reason the Interval is invalid");const n=r instanceof jn?r:new jn(r,t);if(pr.throwOnInvalid)throw new L4(n);return new $r({invalid:n})}static fromDateTimes(r,t){const n=Ws(r),o=Ws(t),a=h6(n,o);return a??new $r({start:n,end:o})}static after(r,t){const n=Ce.fromDurationLike(t),o=Ws(r);return $r.fromDateTimes(o,o.plus(n))}static before(r,t){const n=Ce.fromDurationLike(t),o=Ws(r);return $r.fromDateTimes(o.minus(n),o)}static fromISO(r,t){const[n,o]=(r||"").split("/",2);if(n&&o){let a,s;try{a=se.fromISO(n,t),s=a.isValid}catch{s=!1}let l,u;try{l=se.fromISO(o,t),u=l.isValid}catch{u=!1}if(s&&u)return $r.fromDateTimes(a,l);if(s){const f=Ce.fromISO(o,t);if(f.isValid)return $r.after(a,f)}else if(u){const f=Ce.fromISO(n,t);if(f.isValid)return $r.before(l,f)}}return $r.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static isInterval(r){return r&&r.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(r="milliseconds"){return this.isValid?this.toDuration(r).get(r):NaN}count(r="milliseconds",t){if(!this.isValid)return NaN;const n=this.start.startOf(r,t);let o;return t?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(r,t),Math.floor(o.diff(n,r).get(r))+(o.valueOf()!==this.end.valueOf())}hasSame(r){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,r):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(r){return this.isValid?this.s>r:!1}isBefore(r){return this.isValid?this.e<=r:!1}contains(r){return this.isValid?this.s<=r&&this.e>r:!1}set({start:r,end:t}={}){return this.isValid?$r.fromDateTimes(r||this.s,t||this.e):this}splitAt(...r){if(!this.isValid)return[];const t=r.map(Ws).filter(s=>this.contains(s)).sort((s,l)=>s.toMillis()-l.toMillis()),n=[];let{s:o}=this,a=0;for(;o<this.e;){const s=t[a]||this.e,l=+s>+this.e?this.e:s;n.push($r.fromDateTimes(o,l)),o=l,a+=1}return n}splitBy(r){const t=Ce.fromDurationLike(r);if(!this.isValid||!t.isValid||t.as("milliseconds")===0)return[];let{s:n}=this,o=1,a;const s=[];for(;n<this.e;){const l=this.start.plus(t.mapUnits(u=>u*o));a=+l>+this.e?this.e:l,s.push($r.fromDateTimes(n,a)),n=a,o+=1}return s}divideEqually(r){return this.isValid?this.splitBy(this.length()/r).slice(0,r):[]}overlaps(r){return this.e>r.s&&this.s<r.e}abutsStart(r){return this.isValid?+this.e==+r.s:!1}abutsEnd(r){return this.isValid?+r.e==+this.s:!1}engulfs(r){return this.isValid?this.s<=r.s&&this.e>=r.e:!1}equals(r){return!this.isValid||!r.isValid?!1:this.s.equals(r.s)&&this.e.equals(r.e)}intersection(r){if(!this.isValid)return this;const t=this.s>r.s?this.s:r.s,n=this.e<r.e?this.e:r.e;return t>=n?null:$r.fromDateTimes(t,n)}union(r){if(!this.isValid)return this;const t=this.s<r.s?this.s:r.s,n=this.e>r.e?this.e:r.e;return $r.fromDateTimes(t,n)}static merge(r){const[t,n]=r.sort((o,a)=>o.s-a.s).reduce(([o,a],s)=>a?a.overlaps(s)||a.abutsStart(s)?[o,a.union(s)]:[o.concat([a]),s]:[o,s],[[],null]);return n&&t.push(n),t}static xor(r){let t=null,n=0;const o=[],a=r.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...a),l=s.sort((u,f)=>u.time-f.time);for(const u of l)n+=u.type==="s"?1:-1,n===1?t=u.time:(t&&+t!=+u.time&&o.push($r.fromDateTimes(t,u.time)),t=null);return $r.merge(o)}difference(...r){return $r.xor([this].concat(r)).map(t=>this.intersection(t)).filter(t=>t&&!t.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ta}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(r=Fc,t={}){return this.isValid?xt.create(this.s.loc.clone(t),r).formatInterval(this):Ta}toISO(r){return this.isValid?`${this.s.toISO(r)}/${this.e.toISO(r)}`:Ta}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ta}toISOTime(r){return this.isValid?`${this.s.toISOTime(r)}/${this.e.toISOTime(r)}`:Ta}toFormat(r,{separator:t=" – "}={}){return this.isValid?`${this.s.toFormat(r)}${t}${this.e.toFormat(r)}`:Ta}toDuration(r,t){return this.isValid?this.e.diff(this.s,r,t):Ce.invalid(this.invalidReason)}mapEndpoints(r){return $r.fromDateTimes(r(this.s),r(this.e))}}class _u{static{i(this,"Info")}static hasDST(r=pr.defaultZone){const t=se.now().setZone(r).set({month:12});return!r.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(r){return No.isValidZone(r)}static normalizeZone(r){return Xo(r,pr.defaultZone)}static getStartOfWeek({locale:r=null,locObj:t=null}={}){return(t||je.create(r)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:r=null,locObj:t=null}={}){return(t||je.create(r)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:r=null,locObj:t=null}={}){return(t||je.create(r)).getWeekendDays().slice()}static months(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null,outputCalendar:a="gregory"}={}){return(o||je.create(t,n,a)).months(r)}static monthsFormat(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null,outputCalendar:a="gregory"}={}){return(o||je.create(t,n,a)).months(r,!0)}static weekdays(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null}={}){return(o||je.create(t,n,null)).weekdays(r)}static weekdaysFormat(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null}={}){return(o||je.create(t,n,null)).weekdays(r,!0)}static meridiems({locale:r=null}={}){return je.create(r).meridiems()}static eras(r="short",{locale:t=null}={}){return je.create(t,null,"gregory").eras(r)}static features(){return{relative:k2(),localeWeek:$2()}}}function ub(e,r){const t=i(o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),"utcDayStart"),n=t(r)-t(e);return Math.floor(Ce.fromMillis(n).as("days"))}i(ub,"dayDiff");function p6(e,r,t){const n=[["years",(u,f)=>f.year-u.year],["quarters",(u,f)=>f.quarter-u.quarter+(f.year-u.year)*4],["months",(u,f)=>f.month-u.month+(f.year-u.year)*12],["weeks",(u,f)=>{const g=ub(u,f);return(g-g%7)/7}],["days",ub]],o={},a=e;let s,l;for(const[u,f]of n)t.indexOf(u)>=0&&(s=u,o[u]=f(e,r),l=a.plus(o),l>r?(o[u]--,e=a.plus(o),e>r&&(l=e,o[u]--,e=a.plus(o))):e=l);return[e,o,l,s]}i(p6,"highOrderDiffs");function m6(e,r,t,n){let[o,a,s,l]=p6(e,r,t);const u=r-o,f=t.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);f.length===0&&(s<r&&(s=o.plus({[l]:1})),s!==o&&(a[l]=(a[l]||0)+u/(s-o)));const g=Ce.fromObject(a,n);return f.length>0?Ce.fromMillis(u,n).shiftTo(...f).plus(g):g}i(m6,"diff");const b6="missing Intl.DateTimeFormat.formatToParts support";function Ie(e,r=t=>t){return{regex:e,deser:i(([t])=>r(s3(t)),"deser")}}i(Ie,"intUnit");const v6=" ",U2=`[ ${v6}]`,_2=new RegExp(U2,"g");function y6(e){return e.replace(/\./g,"\\.?").replace(_2,U2)}i(y6,"fixListRegex");function cb(e){return e.replace(/\./g,"").replace(_2," ").toLowerCase()}i(cb,"stripInsensitivities");function Bn(e,r){return e===null?null:{regex:RegExp(e.map(y6).join("|")),deser:i(([t])=>e.findIndex(n=>cb(t)===cb(n))+r,"deser")}}i(Bn,"oneOf");function db(e,r){return{regex:e,deser:i(([,t,n])=>bd(t,n),"deser"),groups:r}}i(db,"offset");function zu(e){return{regex:e,deser:i(([r])=>r,"deser")}}i(zu,"simple");function w6(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}i(w6,"escapeToken");function k6(e,r){const t=Nn(r),n=Nn(r,"{2}"),o=Nn(r,"{3}"),a=Nn(r,"{4}"),s=Nn(r,"{6}"),l=Nn(r,"{1,2}"),u=Nn(r,"{1,3}"),f=Nn(r,"{1,6}"),g=Nn(r,"{1,9}"),h=Nn(r,"{2,4}"),p=Nn(r,"{4,6}"),b=i(C=>({regex:RegExp(w6(C.val)),deser:i(([E])=>E,"deser"),literal:!0}),"literal"),$=i(C=>{if(e.literal)return b(C);switch(C.val){case"G":return Bn(r.eras("short"),0);case"GG":return Bn(r.eras("long"),0);case"y":return Ie(f);case"yy":return Ie(h,hg);case"yyyy":return Ie(a);case"yyyyy":return Ie(p);case"yyyyyy":return Ie(s);case"M":return Ie(l);case"MM":return Ie(n);case"MMM":return Bn(r.months("short",!0),1);case"MMMM":return Bn(r.months("long",!0),1);case"L":return Ie(l);case"LL":return Ie(n);case"LLL":return Bn(r.months("short",!1),1);case"LLLL":return Bn(r.months("long",!1),1);case"d":return Ie(l);case"dd":return Ie(n);case"o":return Ie(u);case"ooo":return Ie(o);case"HH":return Ie(n);case"H":return Ie(l);case"hh":return Ie(n);case"h":return Ie(l);case"mm":return Ie(n);case"m":return Ie(l);case"q":return Ie(l);case"qq":return Ie(n);case"s":return Ie(l);case"ss":return Ie(n);case"S":return Ie(u);case"SSS":return Ie(o);case"u":return zu(g);case"uu":return zu(l);case"uuu":return Ie(t);case"a":return Bn(r.meridiems(),0);case"kkkk":return Ie(a);case"kk":return Ie(h,hg);case"W":return Ie(l);case"WW":return Ie(n);case"E":case"c":return Ie(t);case"EEE":return Bn(r.weekdays("short",!1),1);case"EEEE":return Bn(r.weekdays("long",!1),1);case"ccc":return Bn(r.weekdays("short",!0),1);case"cccc":return Bn(r.weekdays("long",!0),1);case"Z":case"ZZ":return db(new RegExp(`([+-]${l.source})(?::(${n.source}))?`),2);case"ZZZ":return db(new RegExp(`([+-]${l.source})(${n.source})?`),2);case"z":return zu(/[a-z_+-/]{1,256}?/i);case" ":return zu(/[^\S\n\r]/);default:return b(C)}},"unitate")(e)||{invalidReason:b6};return $.token=e,$}i(k6,"unitForToken");const $6={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function x6(e,r,t){const{type:n,value:o}=e;if(n==="literal"){const u=/^\s+$/.test(o);return{literal:!u,val:u?" ":o}}const a=r[n];let s=n;n==="hour"&&(r.hour12!=null?s=r.hour12?"hour12":"hour24":r.hourCycle!=null?r.hourCycle==="h11"||r.hourCycle==="h12"?s="hour12":s="hour24":s=t.hour12?"hour12":"hour24");let l=$6[s];if(typeof l=="object"&&(l=l[a]),l)return{literal:!1,val:l}}i(x6,"tokenForPart");function D6(e){return[`^${e.map(t=>t.regex).reduce((t,n)=>`${t}(${n.source})`,"")}$`,e]}i(D6,"buildRegex");function C6(e,r,t){const n=e.match(r);if(n){const o={};let a=1;for(const s in t)if(es(t,s)){const l=t[s],u=l.groups?l.groups+1:1;!l.literal&&l.token&&(o[l.token.val[0]]=l.deser(n.slice(a,a+u))),a+=u}return[n,o]}else return[n,{}]}i(C6,"match$1");function E6(e){const r=i(a=>{switch(a){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},"toField");let t=null,n;return ae(e.z)||(t=No.create(e.z)),ae(e.Z)||(t||(t=new St(e.Z)),n=e.Z),ae(e.q)||(e.M=(e.q-1)*3+1),ae(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),ae(e.u)||(e.S=Eh(e.u)),[Object.keys(e).reduce((a,s)=>{const l=r(s);return l&&(a[l]=e[s]),a},{}),t,n]}i(E6,"dateTimeFromMatches");let Bf=null;function A6(){return Bf||(Bf=se.fromMillis(1555555555555)),Bf}i(A6,"getDummyDateTime");function F6(e,r){if(e.literal)return e;const t=xt.macroTokenToFormatOpts(e.val),n=W2(t,r);return n==null||n.includes(void 0)?e:n}i(F6,"maybeExpandMacroToken");function z2(e,r){return Array.prototype.concat(...e.map(t=>F6(t,r)))}i(z2,"expandMacroTokens");class q2{static{i(this,"TokenParser")}constructor(r,t){if(this.locale=r,this.format=t,this.tokens=z2(xt.parseFormat(t),r),this.units=this.tokens.map(n=>k6(n,r)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=D6(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(r){if(this.isValid){const[t,n]=C6(r,this.regex,this.handlers),[o,a,s]=n?E6(n):[null,null,void 0];if(es(n,"a")&&es(n,"H"))throw new _a("Can't include meridiem when specifying 24-hour format");return{input:r,tokens:this.tokens,regex:this.regex,rawMatches:t,matches:n,result:o,zone:a,specificOffset:s}}else return{input:r,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function V2(e,r,t){return new q2(e,t).explainFromTokens(r)}i(V2,"explainFromTokens");function S6(e,r,t){const{result:n,zone:o,specificOffset:a,invalidReason:s}=V2(e,r,t);return[n,o,a,s]}i(S6,"parseFromTokens");function W2(e,r){if(!e)return null;const n=xt.create(r,e).dtFormatter(A6()),o=n.formatToParts(),a=n.resolvedOptions();return o.map(s=>x6(s,e,a))}i(W2,"formatOptsToTokens");const Of="Invalid DateTime",fb=864e13;function cl(e){return new jn("unsupported zone",`the zone "${e.name}" is not supported`)}i(cl,"unsupportedZone");function Rf(e){return e.weekData===null&&(e.weekData=Sc(e.c)),e.weekData}i(Rf,"possiblyCachedWeekData");function Lf(e){return e.localWeekData===null&&(e.localWeekData=Sc(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}i(Lf,"possiblyCachedLocalWeekData");function Ii(e,r){const t={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new se({...t,...r,old:t})}i(Ii,"clone$2");function K2(e,r,t){let n=e-r*60*1e3;const o=t.offset(n);if(r===o)return[n,r];n-=(o-r)*60*1e3;const a=t.offset(n);return o===a?[n,o]:[e-Math.min(o,a)*60*1e3,Math.max(o,a)]}i(K2,"fixOffset");function qu(e,r){e+=r*60*1e3;const t=new Date(e);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hour:t.getUTCHours(),minute:t.getUTCMinutes(),second:t.getUTCSeconds(),millisecond:t.getUTCMilliseconds()}}i(qu,"tsToObj");function gc(e,r,t){return K2(md(e),r,t)}i(gc,"objToTS");function gb(e,r){const t=e.o,n=e.c.year+Math.trunc(r.years),o=e.c.month+Math.trunc(r.months)+Math.trunc(r.quarters)*3,a={...e.c,year:n,month:o,day:Math.min(e.c.day,Mc(n,o))+Math.trunc(r.days)+Math.trunc(r.weeks)*7},s=Ce.fromObject({years:r.years-Math.trunc(r.years),quarters:r.quarters-Math.trunc(r.quarters),months:r.months-Math.trunc(r.months),weeks:r.weeks-Math.trunc(r.weeks),days:r.days-Math.trunc(r.days),hours:r.hours,minutes:r.minutes,seconds:r.seconds,milliseconds:r.milliseconds}).as("milliseconds"),l=md(a);let[u,f]=K2(l,t,e.zone);return s!==0&&(u+=s,f=e.zone.offset(u)),{ts:u,o:f}}i(gb,"adjustTime");function Pa(e,r,t,n,o,a){const{setZone:s,zone:l}=t;if(e&&Object.keys(e).length!==0||r){const u=r||l,f=se.fromObject(e,{...t,zone:u,specificOffset:a});return s?f:f.setZone(l)}else return se.invalid(new jn("unparsable",`the input "${o}" can't be parsed as ${n}`))}i(Pa,"parseDataToDateTime");function Vu(e,r,t=!0){return e.isValid?xt.create(je.create("en-US"),{allowZ:t,forceSimple:!0}).formatDateTimeFromString(e,r):null}i(Vu,"toTechFormat");function jf(e,r,t){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=Mr(e.c.year,n?6:4),t==="year")return o;if(r){if(o+="-",o+=Mr(e.c.month),t==="month")return o;o+="-"}else if(o+=Mr(e.c.month),t==="month")return o;return o+=Mr(e.c.day),o}i(jf,"toISODate");function hb(e,r,t,n,o,a,s){let l=!t||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=Mr(e.c.hour),s==="hour")break;if(r){if(u+=":",u+=Mr(e.c.minute),s==="minute")break;l&&(u+=":",u+=Mr(e.c.second))}else{if(u+=Mr(e.c.minute),s==="minute")break;l&&(u+=Mr(e.c.second))}if(s==="second")break;l&&(!n||e.c.millisecond!==0)&&(u+=".",u+=Mr(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!a?u+="Z":e.o<0?(u+="-",u+=Mr(Math.trunc(-e.o/60)),u+=":",u+=Mr(Math.trunc(-e.o%60))):(u+="+",u+=Mr(Math.trunc(e.o/60)),u+=":",u+=Mr(Math.trunc(e.o%60)))),a&&(u+="["+e.zone.ianaName+"]"),u}i(hb,"toISOTime");const H2={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},M6={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},T6={ordinal:1,hour:0,minute:0,second:0,millisecond:0},hc=["year","month","day","hour","minute","second","millisecond"],P6=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],I6=["year","ordinal","hour","minute","second","millisecond"];function pc(e){const r={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!r)throw new H1(e);return r}i(pc,"normalizeUnit");function pb(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return pc(e)}}i(pb,"normalizeUnitWithLocalWeeks");function N6(e){if(dl===void 0&&(dl=pr.now()),e.type!=="iana")return e.offset(dl);const r=e.name;let t=pg.get(r);return t===void 0&&(t=e.offset(dl),pg.set(r,t)),t}i(N6,"guessOffsetForZone");function mb(e,r){const t=Xo(r.zone,pr.defaultZone);if(!t.isValid)return se.invalid(cl(t));const n=je.fromObject(r);let o,a;if(ae(e.year))o=pr.now();else{for(const u of hc)ae(e[u])&&(e[u]=H2[u]);const s=y2(e)||w2(e);if(s)return se.invalid(s);const l=N6(t);[o,a]=gc(e,l,t)}return new se({ts:o,zone:t,loc:n,o:a})}i(mb,"quickDT");function bb(e,r,t){const n=ae(t.round)?!0:t.round,o=ae(t.rounding)?"trunc":t.rounding,a=i((l,u)=>(l=Ah(l,n||t.calendary?0:2,t.calendary?"round":o),r.loc.clone(t).relFormatter(t).format(l,u)),"format"),s=i(l=>t.calendary?r.hasSame(e,l)?0:r.startOf(l).diff(e.startOf(l),l).get(l):r.diff(e,l).get(l),"differ");if(t.unit)return a(s(t.unit),t.unit);for(const l of t.units){const u=s(l);if(Math.abs(u)>=1)return a(u,l)}return a(e>r?-0:0,t.units[t.units.length-1])}i(bb,"diffRelative");function vb(e){let r={},t;return e.length>0&&typeof e[e.length-1]=="object"?(r=e[e.length-1],t=Array.from(e).slice(0,e.length-1)):t=Array.from(e),[r,t]}i(vb,"lastOpts");let dl;const pg=new Map;class se{static{i(this,"DateTime")}constructor(r){const t=r.zone||pr.defaultZone;let n=r.invalid||(Number.isNaN(r.ts)?new jn("invalid input"):null)||(t.isValid?null:cl(t));this.ts=ae(r.ts)?pr.now():r.ts;let o=null,a=null;if(!n)if(r.old&&r.old.ts===this.ts&&r.old.zone.equals(t))[o,a]=[r.old.c,r.old.o];else{const l=ai(r.o)&&!r.old?r.o:t.offset(this.ts);o=qu(this.ts,l),n=Number.isNaN(o.year)?new jn("invalid input"):null,o=n?null:o,a=n?null:l}this._zone=t,this.loc=r.loc||je.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=a,this.isLuxonDateTime=!0}static now(){return new se({})}static local(){const[r,t]=vb(arguments),[n,o,a,s,l,u,f]=t;return mb({year:n,month:o,day:a,hour:s,minute:l,second:u,millisecond:f},r)}static utc(){const[r,t]=vb(arguments),[n,o,a,s,l,u,f]=t;return r.zone=St.utcInstance,mb({year:n,month:o,day:a,hour:s,minute:l,second:u,millisecond:f},r)}static fromJSDate(r,t={}){const n=f3(r)?r.valueOf():NaN;if(Number.isNaN(n))return se.invalid("invalid input");const o=Xo(t.zone,pr.defaultZone);return o.isValid?new se({ts:n,zone:o,loc:je.fromObject(t)}):se.invalid(cl(o))}static fromMillis(r,t={}){if(ai(r))return r<-fb||r>fb?se.invalid("Timestamp out of range"):new se({ts:r,zone:Xo(t.zone,pr.defaultZone),loc:je.fromObject(t)});throw new wt(`fromMillis requires a numerical input, but received a ${typeof r} with value ${r}`)}static fromSeconds(r,t={}){if(ai(r))return new se({ts:r*1e3,zone:Xo(t.zone,pr.defaultZone),loc:je.fromObject(t)});throw new wt("fromSeconds requires a numerical input")}static fromObject(r,t={}){r=r||{};const n=Xo(t.zone,pr.defaultZone);if(!n.isValid)return se.invalid(cl(n));const o=je.fromObject(t),a=Tc(r,pb),{minDaysInFirstWeek:s,startOfWeek:l}=rb(a,o),u=pr.now(),f=ae(t.specificOffset)?n.offset(u):t.specificOffset,g=!ae(a.ordinal),h=!ae(a.year),p=!ae(a.month)||!ae(a.day),b=h||p,v=a.weekYear||a.weekNumber;if((b||g)&&v)throw new _a("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(p&&g)throw new _a("Can't mix ordinal dates with month/day");const $=v||a.weekday&&!b;let C,E,A=qu(u,f);$?(C=P6,E=M6,A=Sc(A,s,l)):g?(C=I6,E=T6,A=Nf(A)):(C=hc,E=H2);let N=!1;for(const or of C){const ir=a[or];ae(ir)?N?a[or]=E[or]:a[or]=A[or]:N=!0}const _=$?u3(a,s,l):g?c3(a):y2(a),H=_||w2(a);if(H)return se.invalid(H);const ce=$?Qm(a,s,l):g?eb(a):a,[Te,be]=gc(ce,f,n),Se=new se({ts:Te,zone:n,o:be,loc:o});return a.weekday&&b&&r.weekday!==Se.weekday?se.invalid("mismatched weekday",`you can't specify both a weekday of ${a.weekday} and a date of ${Se.toISO()}`):Se.isValid?Se:se.invalid(Se.invalid)}static fromISO(r,t={}){const[n,o]=r6(r);return Pa(n,o,t,"ISO 8601",r)}static fromRFC2822(r,t={}){const[n,o]=t6(r);return Pa(n,o,t,"RFC 2822",r)}static fromHTTP(r,t={}){const[n,o]=n6(r);return Pa(n,o,t,"HTTP",t)}static fromFormat(r,t,n={}){if(ae(r)||ae(t))throw new wt("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:a=null}=n,s=je.fromOpts({locale:o,numberingSystem:a,defaultToEN:!0}),[l,u,f,g]=S6(s,r,t);return g?se.invalid(g):Pa(l,u,n,`format ${t}`,r,f)}static fromString(r,t,n={}){return se.fromFormat(r,t,n)}static fromSQL(r,t={}){const[n,o]=c6(r);return Pa(n,o,t,"SQL",r)}static invalid(r,t=null){if(!r)throw new wt("need to specify a reason the DateTime is invalid");const n=r instanceof jn?r:new jn(r,t);if(pr.throwOnInvalid)throw new R4(n);return new se({invalid:n})}static isDateTime(r){return r&&r.isLuxonDateTime||!1}static parseFormatForOpts(r,t={}){const n=W2(r,je.fromObject(t));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(r,t={}){return z2(xt.parseFormat(r),je.fromObject(t)).map(o=>o.val).join("")}static resetCache(){dl=void 0,pg.clear()}get(r){return this[r]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Rf(this).weekYear:NaN}get weekNumber(){return this.isValid?Rf(this).weekNumber:NaN}get weekday(){return this.isValid?Rf(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Lf(this).weekday:NaN}get localWeekNumber(){return this.isValid?Lf(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Lf(this).weekYear:NaN}get ordinal(){return this.isValid?Nf(this.c).ordinal:NaN}get monthShort(){return this.isValid?_u.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?_u.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?_u.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?_u.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const r=864e5,t=6e4,n=md(this.c),o=this.zone.offset(n-r),a=this.zone.offset(n+r),s=this.zone.offset(n-o*t),l=this.zone.offset(n-a*t);if(s===l)return[this];const u=n-s*t,f=n-l*t,g=qu(u,s),h=qu(f,l);return g.hour===h.hour&&g.minute===h.minute&&g.second===h.second&&g.millisecond===h.millisecond?[Ii(this,{ts:u}),Ii(this,{ts:f})]:[this]}get isInLeapYear(){return su(this.year)}get daysInMonth(){return Mc(this.year,this.month)}get daysInYear(){return this.isValid?Ka(this.year):NaN}get weeksInWeekYear(){return this.isValid?Il(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Il(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(r={}){const{locale:t,numberingSystem:n,calendar:o}=xt.create(this.loc.clone(r),r).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:o}}toUTC(r=0,t={}){return this.setZone(St.instance(r),t)}toLocal(){return this.setZone(pr.defaultZone)}setZone(r,{keepLocalTime:t=!1,keepCalendarTime:n=!1}={}){if(r=Xo(r,pr.defaultZone),r.equals(this.zone))return this;if(r.isValid){let o=this.ts;if(t||n){const a=r.offset(this.ts),s=this.toObject();[o]=gc(s,a,r)}return Ii(this,{ts:o,zone:r})}else return se.invalid(cl(r))}reconfigure({locale:r,numberingSystem:t,outputCalendar:n}={}){const o=this.loc.clone({locale:r,numberingSystem:t,outputCalendar:n});return Ii(this,{loc:o})}setLocale(r){return this.reconfigure({locale:r})}set(r){if(!this.isValid)return this;const t=Tc(r,pb),{minDaysInFirstWeek:n,startOfWeek:o}=rb(t,this.loc),a=!ae(t.weekYear)||!ae(t.weekNumber)||!ae(t.weekday),s=!ae(t.ordinal),l=!ae(t.year),u=!ae(t.month)||!ae(t.day),f=l||u,g=t.weekYear||t.weekNumber;if((f||s)&&g)throw new _a("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new _a("Can't mix ordinal dates with month/day");let h;a?h=Qm({...Sc(this.c,n,o),...t},n,o):ae(t.ordinal)?(h={...this.toObject(),...t},ae(t.day)&&(h.day=Math.min(Mc(h.year,h.month),h.day))):h=eb({...Nf(this.c),...t});const[p,b]=gc(h,this.o,this.zone);return Ii(this,{ts:p,o:b})}plus(r){if(!this.isValid)return this;const t=Ce.fromDurationLike(r);return Ii(this,gb(this,t))}minus(r){if(!this.isValid)return this;const t=Ce.fromDurationLike(r).negate();return Ii(this,gb(this,t))}startOf(r,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;const n={},o=Ce.normalizeUnit(r);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(t){const a=this.loc.getStartOfWeek(),{weekday:s}=this;s<a&&(n.weekNumber=this.weekNumber-1),n.weekday=a}else n.weekday=1;if(o==="quarters"){const a=Math.ceil(this.month/3);n.month=(a-1)*3+1}return this.set(n)}endOf(r,t){return this.isValid?this.plus({[r]:1}).startOf(r,t).minus(1):this}toFormat(r,t={}){return this.isValid?xt.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,r):Of}toLocaleString(r=Fc,t={}){return this.isValid?xt.create(this.loc.clone(t),r).formatDateTime(this):Of}toLocaleParts(r={}){return this.isValid?xt.create(this.loc.clone(r),r).formatDateTimeParts(this):[]}toISO({format:r="extended",suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:a=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=pc(s);const l=r==="extended";let u=jf(this,l,s);return hc.indexOf(s)>=3&&(u+="T"),u+=hb(this,l,t,n,o,a,s),u}toISODate({format:r="extended",precision:t="day"}={}){return this.isValid?jf(this,r==="extended",pc(t)):null}toISOWeekDate(){return Vu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:r=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:a=!1,format:s="extended",precision:l="milliseconds"}={}){return this.isValid?(l=pc(l),(o&&hc.indexOf(l)>=3?"T":"")+hb(this,s==="extended",t,r,n,a,l)):null}toRFC2822(){return Vu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Vu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?jf(this,!0):null}toSQLTime({includeOffset:r=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(t||r)&&(n&&(o+=" "),t?o+="z":r&&(o+="ZZ")),Vu(this,o,!0)}toSQL(r={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(r)}`:null}toString(){return this.isValid?this.toISO():Of}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(r={}){if(!this.isValid)return{};const t={...this.c};return r.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(r,t="milliseconds",n={}){if(!this.isValid||!r.isValid)return Ce.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},a=g3(t).map(Ce.normalizeUnit),s=r.valueOf()>this.valueOf(),l=s?this:r,u=s?r:this,f=m6(l,u,a,o);return s?f.negate():f}diffNow(r="milliseconds",t={}){return this.diff(se.now(),r,t)}until(r){return this.isValid?$r.fromDateTimes(this,r):this}hasSame(r,t,n){if(!this.isValid)return!1;const o=r.valueOf(),a=this.setZone(r.zone,{keepLocalTime:!0});return a.startOf(t,n)<=o&&o<=a.endOf(t,n)}equals(r){return this.isValid&&r.isValid&&this.valueOf()===r.valueOf()&&this.zone.equals(r.zone)&&this.loc.equals(r.loc)}toRelative(r={}){if(!this.isValid)return null;const t=r.base||se.fromObject({},{zone:this.zone}),n=r.padding?this<t?-r.padding:r.padding:0;let o=["years","months","days","hours","minutes","seconds"],a=r.unit;return Array.isArray(r.unit)&&(o=r.unit,a=void 0),bb(t,this.plus(n),{...r,numeric:"always",units:o,unit:a})}toRelativeCalendar(r={}){return this.isValid?bb(r.base||se.fromObject({},{zone:this.zone}),this,{...r,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...r){if(!r.every(se.isDateTime))throw new wt("min requires all arguments be DateTimes");return tb(r,t=>t.valueOf(),Math.min)}static max(...r){if(!r.every(se.isDateTime))throw new wt("max requires all arguments be DateTimes");return tb(r,t=>t.valueOf(),Math.max)}static fromFormatExplain(r,t,n={}){const{locale:o=null,numberingSystem:a=null}=n,s=je.fromOpts({locale:o,numberingSystem:a,defaultToEN:!0});return V2(s,r,t)}static fromStringExplain(r,t,n={}){return se.fromFormatExplain(r,t,n)}static buildFormatParser(r,t={}){const{locale:n=null,numberingSystem:o=null}=t,a=je.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new q2(a,r)}static fromFormatParser(r,t,n={}){if(ae(r)||ae(t))throw new wt("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:a=null}=n,s=je.fromOpts({locale:o,numberingSystem:a,defaultToEN:!0});if(!s.equals(t.locale))throw new wt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${t.locale}`);const{result:l,zone:u,specificOffset:f,invalidReason:g}=t.explainFromTokens(r);return g?se.invalid(g):Pa(l,u,n,`format ${t.format}`,r,f)}static get DATE_SHORT(){return Fc}static get DATE_MED(){return G1}static get DATE_MED_WITH_WEEKDAY(){return U4}static get DATE_FULL(){return Z1}static get DATE_HUGE(){return Y1}static get TIME_SIMPLE(){return J1}static get TIME_WITH_SECONDS(){return X1}static get TIME_WITH_SHORT_OFFSET(){return Q1}static get TIME_WITH_LONG_OFFSET(){return e2}static get TIME_24_SIMPLE(){return r2}static get TIME_24_WITH_SECONDS(){return t2}static get TIME_24_WITH_SHORT_OFFSET(){return n2}static get TIME_24_WITH_LONG_OFFSET(){return o2}static get DATETIME_SHORT(){return i2}static get DATETIME_SHORT_WITH_SECONDS(){return a2}static get DATETIME_MED(){return s2}static get DATETIME_MED_WITH_SECONDS(){return l2}static get DATETIME_MED_WITH_WEEKDAY(){return _4}static get DATETIME_FULL(){return u2}static get DATETIME_FULL_WITH_SECONDS(){return c2}static get DATETIME_HUGE(){return d2}static get DATETIME_HUGE_WITH_SECONDS(){return f2}}function Ws(e){if(se.isDateTime(e))return e;if(e&&e.valueOf&&ai(e.valueOf()))return se.fromJSDate(e);if(e&&typeof e=="object")return se.fromObject(e);throw new wt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}i(Ws,"friendlyDateTime");Intl.DateTimeFormat().resolvedOptions().locale;var J;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(J||(J={}));J.Year,J.Hour,J.Minute,J.Second,J.Millisecond;J.Month,J.Week,J.Day;J.Millisecond,J.Second,J.Minute,J.Hour,J.Day,J.Week,J.Month,J.Year;const yb={min:0,max:23},wb={min:0,max:59},kb={min:0,max:59},$b={min:0,max:999};var le;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(le||(le={}));const B6=[le.Milliseconds,le.Seconds,le.Minutes,le.Hours,le.Days,le.Weeks,le.Months,le.Years];le.Milliseconds+"",le.Seconds+"",le.Minutes+"",le.Hours+"",le.Days+"",le.Weeks+"",le.Months+"",le.Years+"";le.Years+"",J.Year,le.Months+"",J.Month,le.Weeks+"",J.Week,le.Days+"",J.Day,le.Hours+"",J.Hour,le.Minutes+"",J.Minute,le.Seconds+"",J.Second,le.Milliseconds+"",J.Millisecond;J.Year+"",le.Years,J.Month+"",le.Months,J.Week+"",le.Weeks,J.Day+"",le.Days,J.Hour+"",le.Hours,J.Minute+"",le.Minutes,J.Second+"",le.Seconds,J.Millisecond+"",le.Milliseconds;function O6(e){return B6.filter(r=>e[r])}i(O6,"flattenUnitsSmallestToLargest");function mg(e,{decimalCount:r}){if(r==null)return e;const t=Math.pow(10,r),n=e*t;return Number((Math.round(n)/t).toFixed(r))}i(mg,"round$1");function R6(e){return mg(Math.max(e-.4,0),{decimalCount:0})}i(R6,"roundNarrow");function xb(e){return e===0?0:Math.sign(e)}i(xb,"getSign");function rs(e,r,t={}){const n={},o={decimalCount:t.decimalCount==null?void 0:Math.round(Math.abs(t.decimalCount))},a=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),l=O6(r).reverse();if(a||s)return l.forEach(g=>{n[g]=a?1/0:-1/0}),n;let u=Ce.fromObject(e).as(le.Milliseconds);const f=xb(u);return l.forEach((g,h)=>{const p=h===l.length-1;if(g===le.Milliseconds)n.milliseconds=mg(u,o);else{const b=Ce.fromObject({milliseconds:u}).as(g),v=Math.sign(b),$=Math.abs(b),C=p?mg($,o):Math.floor(o.decimalCount==null?$:R6($)),E=C===0?0:C*v;n[g]=E,u-=Ce.fromObject({[g]:E}).as(le.Milliseconds),f!==xb(u)&&(u=0)}}),n}i(rs,"convertDuration");var kt;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(kt||(kt={}));kt.Sunday+"",kt.Monday+"",kt.Tuesday+"",kt.Wednesday+"",kt.Thursday+"",kt.Friday+"",kt.Saturday+"";kt.Sunday,kt.Monday,kt.Tuesday,kt.Wednesday,kt.Thursday,kt.Friday,kt.Saturday;var Lt;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Lt||(Lt={}));Lt.January,Lt.February,Lt.March,Lt.April,Lt.May,Lt.June,Lt.July,Lt.August,Lt.September,Lt.October,Lt.November,Lt.December;const Db={min:1,max:12},Cb={min:1,max:31};function ea(e){const r=new Ac,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:rs(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{r.resolve()},n<=0?0:n),r.promise}i(ea,"wait");function G2(...e){const r=e.join(""),t=gd(Array.from(r));return Array.from(t).join("")}i(G2,"removeDuplicateCharacters");function Z2(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}i(Z2,"escapeStringForRegExp");function Y2(e,r){const t=G2([typeof e=="string"?"":e.flags,r].join("").toLowerCase());return J2(e,t)}i(Y2,"addRegExpFlags");function J2(e,r){const t=G2(r);return typeof e=="string"?new RegExp(Z2(e),t):new RegExp(e.source,t)}i(J2,"setRegExpFlags");function X2(e,{caseSensitive:r}){const n="".replaceAll("i","");return J2(e,n)}i(X2,"setRegExpCaseSensitivity");function Th(e,r=1){return e.split(`
`).map(t=>["    ".repeat(Math.round(r)),t].join("")).join(`
`)}i(Th,"indent");function Q2(e,r){return r?typeof r=="string"?!!new RegExp(Z2(r),"i").exec(e):!!Y2(r,"i").exec(e):!1}i(Q2,"match");class w extends Error{static{i(this,"AssertionError")}name="AssertionError";constructor(r,t){super(fa(t,r)||"Assertion failed.")}}const Eb={interval:{milliseconds:100},timeout:{seconds:10}},Uf=Symbol("not set");async function L6(e,r,t){const{callback:n,extraAssertionArgs:o,failureMessage:a,options:s}=j6(r),l=rs(s.timeout,{milliseconds:!0}).milliseconds,u=rs(s.interval,{milliseconds:!0});let f=Uf,g;async function h(){try{f=t?n():await n(),e(f,...o)}catch(b){f=Uf,g=Dr(b)}}i(h,"checkCondition");const p=Date.now();for(;f===Uf;)if(await h(),await ea(u),Date.now()-p>=l){const v=`${a?`${a}: `:""}Timeout of '${l}' milliseconds exceeded waiting for callback value to match expectations`;throw ga(g,v)}return f}i(L6,"executeWaitUntil");function j(e,r=!1){return((...t)=>L6(e,t,r))}i(j,"createWaitUntil");function j6(e){const r={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(t=>{if(r.callback)r.extraAssertionArgs.push(t);else if(typeof t=="function")r.callback=t;else if(typeof t=="string")r.failureMessage=t;else if(typeof t=="object")r.options=t;else{if(t===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(t)}`)}}),!r.callback)throw new TypeError("Missing waitUntil callback.");return{callback:r.callback,options:ew(r.options),extraAssertionArgs:r.extraAssertionArgs.toReversed(),failureMessage:r.failureMessage}}i(j6,"parseWaitUntilArgs");function ew(e){return{interval:e?.interval||Eb.interval,timeout:e?.timeout||Eb.timeout}}i(ew,"parseWaitUntilOptions");const Ks={isFalse(e,r){if(e!==!1)throw new w(`'${x(e)}' is not false.`,r)},isFalsy(e,r){if(e)throw new w(`'${x(e)}' is not falsy.`,r)},isTrue(e,r){if(e!==!0)throw new w(`'${x(e)}' is not true.`,r)},isTruthy(e,r){if(!e)throw new w(`'${x(e)}' is not truthy.`,r)}},rw={assert:Ks,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,r){if(e===!1)return e;throw new w(`'${x(e)}' is not false.`,r)},isFalsy(e,r){if(e)throw new w(`'${x(e)}' is not falsy.`,r);return e},isTrue(e,r){if(e===!0)return e;throw new w(`'${x(e)}' is not true.`,r)},isTruthy(e,r){if(e)return e;throw new w(`'${x(e)}' is not truthy.`,r)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:j(Ks.isFalse),isFalsy:j(Ks.isFalsy),isTrue:j(Ks.isTrue),isTruthy:j(Ks.isTruthy)}};function U6(e,r,t){if(typeof e=="string"){if(!e.endsWith(r))throw new w(`${x(e)} does not end with ${x(r)}}`,t)}else if(e[e.length-1]!==r)throw new w(`${x(e)} does not end with ${x(r)}}`,t)}i(U6,"endsWith");function _6(e,r,t){if(typeof e=="string"){if(e.endsWith(r))throw new w(`${x(e)} ends with ${x(r)}}`,t)}else if(e[e.length-1]===r)throw new w(`${x(e)} ends with ${x(r)}}`,t)}i(_6,"endsWithout");function z6(e,r,t){if(typeof e=="string"){if(!e.startsWith(r))throw new w(`${x(e)} does not start with ${x(r)}}`,t)}else if(e[0]!==r)throw new w(`${x(e)} does not start with ${x(r)}}`,t)}i(z6,"startsWith");function q6(e,r,t){if(typeof e=="string"){if(e.startsWith(r))throw new w(`${x(e)} starts with ${x(r)}}`,t)}else if(e[0]===r)throw new w(`${x(e)} starts with ${x(r)}}`,t)}i(q6,"startsWithout");const Hs={endsWith:U6,endsWithout:_6,startsWith:z6,startsWithout:q6},tw={assert:Hs,check:{endsWith:i(((e,r)=>typeof e=="string"?e.endsWith(r):e[e.length-1]===r),"endsWith"),endsWithout:i(((e,r)=>typeof e=="string"?!e.endsWith(r):e[e.length-1]!==r),"endsWithout"),startsWith:i(((e,r)=>typeof e=="string"?e.startsWith(r):e[0]===r),"startsWith"),startsWithout:i(((e,r)=>typeof e=="string"?!e.startsWith(r):e[0]!==r),"startsWithout")},assertWrap:{endsWith:i(((e,r,t)=>{if(typeof e=="string"){if(!e.endsWith(r))throw new w(`${x(e)} does not end with ${x(r)}}`,t)}else if(e[e.length-1]!==r)throw new w(`${x(e)} does not end with ${x(r)}}`,t);return e}),"endsWith"),endsWithout:i(((e,r,t)=>{if(typeof e=="string"){if(e.endsWith(r))throw new w(`${x(e)} ends with ${x(r)}}`,t)}else if(e[e.length-1]===r)throw new w(`${x(e)} ends with ${x(r)}}`,t);return e}),"endsWithout"),startsWith:i(((e,r,t)=>{if(typeof e=="string"){if(!e.startsWith(r))throw new w(`${x(e)} does not start with ${x(r)}}`,t)}else if(e[0]!==r)throw new w(`${x(e)} does not start with ${x(r)}}`,t);return e}),"startsWith"),startsWithout:i(((e,r,t)=>{if(typeof e=="string"){if(e.startsWith(r))throw new w(`${x(e)} starts with ${x(r)}}`,t)}else if(e[0]===r)throw new w(`${x(e)} starts with ${x(r)}}`,t);return e}),"startsWithout")},checkWrap:{endsWith:i(((e,r)=>{if(typeof e=="string")return e.endsWith(r)?e:void 0;if(e[e.length-1]===r)return e}),"endsWith"),endsWithout:i(((e,r)=>{if(typeof e=="string")return e.endsWith(r)?void 0:e;if(e[e.length-1]!==r)return e}),"endsWithout"),startsWith:i(((e,r)=>{if(typeof e=="string")return e.startsWith(r)?e:void 0;if(e[0]===r)return e}),"startsWith"),startsWithout:i(((e,r)=>{if(typeof e=="string")return e.startsWith(r)?void 0:e;if(e[0]!==r)return e}),"startsWithout")},waitUntil:{endsWith:j(Hs.endsWith),endsWithout:j(Hs.endsWithout),startsWith:j(Hs.startsWith),startsWithout:j(Hs.startsWithout)}};function V6(e,r,t){const n=Qt(r);if(!n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,t)}i(V6,"assertIsEnumValue");function yo(e,r){return Qt(r).includes(e)}i(yo,"isEnumValue");const _f={isEnumValue(e,r,t){V6(e,r,t)},isNotEnumValue(e,r,t){const n=Qt(r);if(n.includes(e))throw new w(`${String(e)} is an enum value in '${n.join(",")}'.`,t)}},nw={assert:_f,check:{isEnumValue:yo,isNotEnumValue(e,r){return!Qt(r).includes(e)}},assertWrap:{isEnumValue(e,r,t){const n=Qt(r);if(!n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,t);return e},isNotEnumValue(e,r,t){const n=Qt(r);if(n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,t);return e}},checkWrap:{isEnumValue(e,r){if(Qt(r).includes(e))return e},isNotEnumValue(e,r){if(!Qt(r).includes(e))return e}},waitUntil:{isEnumValue:j(_f.isEnumValue),isNotEnumValue:j(_f.isNotEnumValue)}},zf={entriesEqual(e,r,t){if(!e||typeof e!="object")throw new w(`${x(e)} is not an object.`,t);if(!r||typeof r!="object")throw new w(`${x(r)} is not an object.`,t);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).forEach(o=>{const a=e[o],s=r[o];if(a!==s)throw new w(`Entries are not equal at key '${String(o)}'.`,t)})},notEntriesEqual(e,r,t){if(!e||typeof e!="object"||!r||typeof r!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(a=>{const s=e[a],l=r[a];return s!==l}))throw new w("Entries are equal.",t)}},ow={assert:zf,check:{entriesEqual(e,r){return!e||typeof e!="object"||!r||typeof r!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).every(n=>{const o=e[n],a=r[n];return o===a})},notEntriesEqual(e,r){return!e||typeof e!="object"||!r||typeof r!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(n=>{const o=e[n],a=r[n];return o!==a})}},assertWrap:{entriesEqual(e,r,t){if(!e||typeof e!="object")throw new w(`${x(e)} is not an object.`,t);if(!r||typeof r!="object")throw new w(`${x(r)} is not an object.`,t);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).forEach(o=>{const a=e[o],s=r[o];if(a!==s)throw new w(`Entries are not equal at key '${String(o)}'.`,t)}),e},notEntriesEqual(e,r,t){if(!e||typeof e!="object"||!r||typeof r!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(a=>{const s=e[a],l=r[a];return s!==l}))return e;throw new w("Entries are equal.",t)}},checkWrap:{entriesEqual(e,r){if(!e||typeof e!="object"||!r||typeof r!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).every(o=>{const a=e[o],s=r[o];return a===s}))return e},notEntriesEqual(e,r){if(!e||typeof e!="object"||!r||typeof r!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(o=>{const a=e[o],s=r[o];return a!==s}))return e}},waitUntil:{entriesEqual:j(zf.entriesEqual),notEntriesEqual:j(zf.notEntriesEqual)}};function Pc(e,r){return JSON.stringify(e)===JSON.stringify(r)}i(Pc,"baseJsonEquals");function Nl(e,r){if(!(e===r||Pc(e,r))){if(e!=null&&r!=null&&typeof e=="object"&&typeof r=="object"){const t=Object.keys(e).sort(),n=Object.keys(r).sort();if(t.length!==n.length)throw new Error("Values are not JSON equal.");if(!Pc(t,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(a=>{try{Nl(e[a],r[a])}catch(s){throw new Error(`JSON objects are not equal at key '${a}': ${nt(s)}`)}})}throw new Error("Values are not JSON equal.")}}i(Nl,"recursiveAssertJsonEquals");function fl(e,r){if(e===r||Pc(e,r))return!0;if(e!=null&&r!=null&&typeof e=="object"&&typeof r=="object"){const t=Object.keys(e).sort(),n=Object.keys(r).sort();return t.length!==n.length||!Pc(t,n)?!1:Object.keys(e).every(a=>fl(e[a],r[a]))}return!1}i(fl,"recursiveCheckJsonEquals");const qf={jsonEquals(e,r,t){try{Nl(e,r)}catch(n){throw new w(nt(n),t)}},notJsonEquals(e,r,t){try{Nl(e,r)}catch{return}throw new w("Values are JSON equal.",t)}},iw={assert:qf,check:{jsonEquals(e,r){return fl(e,r)},notJsonEquals(e,r){return!fl(e,r)}},assertWrap:{jsonEquals(e,r,t){try{return Nl(e,r),e}catch(n){throw new w(nt(n),t)}},notJsonEquals(e,r,t){try{Nl(e,r)}catch{return e}throw new w("Values are JSON equal.",t)}},checkWrap:{jsonEquals(e,r){if(fl(e,r))return e},notJsonEquals(e,r){if(!fl(e,r))return e}},waitUntil:{jsonEquals:j(qf.jsonEquals),notJsonEquals:j(qf.notJsonEquals)}};function Ab(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const r=e[Symbol.toStringTag];return typeof r=="string"?r:Object.prototype.toString.call(e).slice(8,-1)}i(Ab,"type$1");function aw(){this._key="chai/deep-eql__"+Math.random()+Date.now()}i(aw,"FakeMap");aw.prototype={get:i(function(r){return r[this._key]},"get"),set:i(function(r,t){Object.isExtensible(r)&&Object.defineProperty(r,this._key,{value:t,configurable:!0})},"set")};var sw=typeof WeakMap=="function"?WeakMap:aw;function Fb(e,r,t){if(!t||ts(e)||ts(r))return null;var n=t.get(e);if(n){var o=n.get(r);if(typeof o=="boolean")return o}return null}i(Fb,"memoizeCompare");function Wu(e,r,t,n){if(!(!t||ts(e)||ts(r))){var o=t.get(e);o?o.set(r,n):(o=new sw,o.set(r,n),t.set(e,o))}}i(Wu,"memoizeSet");function Ln(e,r,t){if(t&&t.comparator)return Sb(e,r,t);var n=lw(e,r);return n!==null?n:Sb(e,r,t)}i(Ln,"deepEqual");function lw(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r?!0:ts(e)||ts(r)?!1:null}i(lw,"simpleEqual");function Sb(e,r,t){t=t||{},t.memoize=t.memoize===!1?!1:t.memoize||new sw;var n=t&&t.comparator,o=Fb(e,r,t.memoize);if(o!==null)return o;var a=Fb(r,e,t.memoize);if(a!==null)return a;if(n){var s=n(e,r);if(s===!1||s===!0)return Wu(e,r,t.memoize,s),s;var l=lw(e,r);if(l!==null)return l}var u=Ab(e);if(u!==Ab(r))return Wu(e,r,t.memoize,!1),!1;Wu(e,r,t.memoize,!0);var f=W6(e,r,u,t);return Wu(e,r,t.memoize,f),f}i(Sb,"extensiveDeepEqual");function W6(e,r,t,n){switch(t){case"String":case"Number":case"Boolean":case"Date":return Ln(e.valueOf(),r.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===r;case"Error":return uw(e,r,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Wi(e,r,n);case"RegExp":return K6(e,r);case"Generator":return H6(e,r,n);case"DataView":return Wi(new Uint8Array(e.buffer),new Uint8Array(r.buffer),n);case"ArrayBuffer":return Wi(new Uint8Array(e),new Uint8Array(r),n);case"Set":return Mb(e,r,n);case"Map":return Mb(e,r,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(r);case"Temporal.Duration":return e.total("nanoseconds")===r.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===r.toString();default:return Z6(e,r,n)}}i(W6,"extensiveDeepEqualByType");function K6(e,r){return e.toString()===r.toString()}i(K6,"regexpEqual");function Mb(e,r,t){try{if(e.size!==r.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(i(function(s,l){n.push([s,l])},"gatherEntries")),r.forEach(i(function(s,l){o.push([s,l])},"gatherEntries")),Wi(n.sort(),o.sort(),t)}i(Mb,"entriesEqual");function Wi(e,r,t){var n=e.length;if(n!==r.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(Ln(e[o],r[o],t)===!1)return!1;return!0}i(Wi,"iterableEqual");function H6(e,r,t){return Wi(bg(e),bg(r),t)}i(H6,"generatorEqual");function G6(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}i(G6,"hasIteratorFunction");function Tb(e){if(G6(e))try{return bg(e[Symbol.iterator]())}catch{return[]}return[]}i(Tb,"getIteratorEntries");function bg(e){for(var r=e.next(),t=[r.value];r.done===!1;)r=e.next(),t.push(r.value);return t}i(bg,"getGeneratorEntries");function Pb(e){var r=[];for(var t in e)r.push(t);return r}i(Pb,"getEnumerableKeys");function Ib(e){for(var r=[],t=Object.getOwnPropertySymbols(e),n=0;n<t.length;n+=1){var o=t[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&r.push(o)}return r}i(Ib,"getEnumerableSymbols");function uw(e,r,t,n){var o=t.length;if(o===0)return!0;for(var a=0;a<o;a+=1)if(Ln(e[t[a]],r[t[a]],n)===!1)return!1;return!0}i(uw,"keysEqual");function Z6(e,r,t){var n=Pb(e),o=Pb(r),a=Ib(e),s=Ib(r);if(n=n.concat(a),o=o.concat(s),n.length&&n.length===o.length)return Wi(Nb(n).sort(),Nb(o).sort())===!1?!1:uw(e,r,n,t);var l=Tb(e),u=Tb(r);return l.length&&l.length===u.length?(l.sort(),u.sort(),Wi(l,u,t)):n.length===0&&l.length===0&&o.length===0&&u.length===0}i(Z6,"objectEqual");function ts(e){return e===null||typeof e!="object"}i(ts,"isPrimitive");function Nb(e){return e.map(i(function(t){return typeof t=="symbol"?t.toString():t},"mapSymbol"))}i(Nb,"mapSymbols");class Ga extends w{static{i(this,"DiffError")}name="DiffError";constructor(r,t,n,o){const a=P4(t,n);super([r,Th(a)].join(`
`),o)}}function Zo(e,r){return typeof e=="function"&&typeof r=="function"?!0:null}i(Zo,"customComparator");const Ho={strictEquals(e,r,t){if(e!==r)throw typeof e=="object"&&e||typeof r=="object"&&r?new w(`Strict reference equality failed for 

${x(r)}

.`,t):new Ga("Not strictly equal.",e,r,t)},notStrictEquals(e,r,t){if(e===r)throw typeof e=="object"&&e?new w(`Strict reference INequality failed for 

${x(r)}

.`,t):new w(`

${x(e)}

strictly equals

${x(r)}

`,t)},looseEquals(e,r,t){if(e!=r)throw typeof e=="object"&&e||typeof r=="object"&&r?new w(`Loose reference equality failed for 

${x(r)}

.`,t):new Ga("Not loosely equal.",e,r,t)},notLooseEquals(e,r,t){if(e==r)throw typeof e=="object"&&e?new w(`Loose reference INequality failed for 

${x(r)}

.`,t):new w(`

${x(e)}

loosely equals

${x(r)}

`,t)},deepEquals(e,r,t){if(!Ln(e,r,{comparator:Zo}))throw new Ga("Not deeply equal.",e,r,t)},notDeepEquals(e,r,t){if(Ln(e,r,{comparator:Zo}))throw new w(`

${x(e)}

deeply equals

${x(r)}

`,t)}},cw=Ho.deepEquals,dw={assert:Ho,check:{strictEquals(e,r){return e===r},notStrictEquals(e,r){return e!==r},looseEquals(e,r){return e==r},notLooseEquals(e,r){return e!=r},deepEquals(e,r){return Ln(e,r,{comparator:Zo})},notDeepEquals(e,r){return!Ln(e,r,{comparator:Zo})}},assertWrap:{strictEquals(e,r,t){if(e===r)return e;throw typeof e=="object"&&e||typeof r=="object"&&r?new w(`Strict reference equality failed for 

${x(r)}

.`,t):new Ga("Not strictly equal.",e,r,t)},notStrictEquals(e,r,t){if(e===r)throw typeof e=="object"&&e?new w(`Strict reference INequality failed for 

${x(r)}

.`,t):new w(`

${x(e)}

strictly equals

${x(r)}

`,t);return e},looseEquals(e,r,t){if(e==r)return e;throw typeof e=="object"&&e||typeof r=="object"&&r?new w(`Loose reference equality failed for 

${x(r)}

.`,t):new Ga("Not loosely equal.",e,r,t)},notLooseEquals(e,r,t){if(e==r)throw typeof e=="object"&&e?new w(`Loose reference INequality failed for 

${x(r)}

.`,t):new w(`

${x(e)}

loosely equals

${x(r)}

`,t);return e},deepEquals(e,r,t){if(Ln(e,r,{comparator:Zo}))return e;throw new Ga("Not deeply equal.",e,r,t)},notDeepEquals(e,r,t){if(Ln(e,r,{comparator:Zo}))throw new w(`

${x(e)}

deeply equals

${x(r)}

`,t);return e}},checkWrap:{strictEquals(e,r){if(e===r)return e},notStrictEquals(e,r){if(e!==r)return e},looseEquals(e,r){if(e==r)return e},notLooseEquals(e,r){if(e!==r)return e},deepEquals(e,r){if(Ln(e,r,{comparator:Zo}))return e},notDeepEquals(e,r){if(!Ln(e,r,{comparator:Zo}))return e}},waitUntil:{strictEquals:j(Ho.strictEquals),notStrictEquals:j(Ho.notStrictEquals),looseEquals:j(Ho.looseEquals),notLooseEquals:j(Ho.notLooseEquals),deepEquals:j(Ho.deepEquals),notDeepEquals:j(Ho.notDeepEquals)}};function Jt(e,r){if(typeof e=="string")return typeof r=="string"&&e.includes(r);let t=!0;try{t=Reflect.ownKeys(e).map(n=>e[n]).includes(r)}catch{return!1}return t}i(Jt,"hasValue");function kn(e,r){return typeof r=="string"?r.includes(e):Jt(r,e)}i(kn,"isIn");const bo={hasValue(e,r,t){if(!Jt(e,r))throw new w(`'${x(e)}' does not have value '${x(r)}'.`,t)},lacksValue(e,r,t){if(Jt(e,r))throw new w(`'${x(e)}' has value '${x(r)}'.`,t)},hasValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(a=>e[a]);n=r.filter(a=>!o.includes(a))}catch{throw new w(`'${x(e)}' does not have values '${x(r)}'.`,t)}if(n.length)throw new w(`'${x(e)}' does not have values '${x(n)}'.`,t)},lacksValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(a=>e[a]);n=r.filter(a=>o.includes(a))}catch{}if(n.length)throw new w(`'${x(e)}' has values '${x(n)}'.`,t)},isIn(e,r,t){if(!kn(e,r))throw new w(`'${x(e)}'

is not in

${x(r)}.`,t)},isNotIn(e,r,t){if(kn(e,r))throw new w(`'${x(e)}'

is in

${x(r)}.`,t)},isEmpty(e,r){if(typeof e!="string"&&typeof e!="object")throw new w(`'${x(e)}' is not empty.`,r);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new w(`'${x(e)}' is not empty.`,r)},isNotEmpty(e,r){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new w(`'${x(e)}' is not empty.`,r)}else if(Array.isArray(e)){if(!e.length)throw new w(`'${x(e)}' is not empty.`,r)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new w(`'${x(e)}' is not empty.`,r)}else if(typeof e=="object"&&!Object.keys(e).length)throw new w(`'${x(e)}' is not empty.`,r)}}},fw={assert:bo,check:{hasValue(e,r){return Jt(e,r)},lacksValue(e,r){return!Jt(e,r)},hasValues(e,r){return r.every(t=>Jt(e,t))},lacksValues(e,r){return r.every(t=>!Jt(e,t))},isIn(e,r){return kn(e,r)},isNotIn(e,r){return!kn(e,r)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,r,t){if(!Jt(e,r))throw new w(`'${x(e)}' does not have value '${x(r)}'.`,t);return e},lacksValue(e,r,t){if(Jt(e,r))throw new w(`'${x(e)}' has value '${x(r)}'.`,t);return e},hasValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(a=>e[a]);n=r.filter(a=>!o.includes(a))}catch{throw new w(`'${x(e)}' does not have values '${x(r)}'.`,t)}if(n.length)throw new w(`'${x(e)}' does not have values '${x(n)}'.`,t);return e},lacksValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(a=>e[a]);n=r.filter(a=>o.includes(a))}catch{}if(n.length)throw new w(`'${x(e)}' has values '${x(n)}'.`,t);return e},isIn(e,r,t){if(!kn(e,r))throw new w(`'${x(e)}'

is not in

${x(r)}.`,t);return e},isNotIn(e,r,t){if(kn(e,r))throw new w(`'${x(e)}'

is in

${x(r)}.`,t);return e},isEmpty(e,r){if(typeof e!="string"&&typeof e!="object")throw new w(`'${x(e)}' is not empty.`,r);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new w(`'${x(e)}' is not empty.`,r)},isNotEmpty(e,r){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new w(`'${x(e)}' is empty.`,r)}else if(Array.isArray(e)){if(!e.length)throw new w(`'${x(e)}' is empty.`,r)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new w(`'${x(e)}' is empty.`,r)}else if(typeof e=="object"&&!Object.keys(e).length)throw new w(`'${x(e)}' is empty.`,r);return e}},checkWrap:{hasValue(e,r){if(Jt(e,r))return e},lacksValue(e,r){if(!Jt(e,r))return e},hasValues(e,r){if(r.every(t=>Jt(e,t)))return e},lacksValues(e,r){if(!r.every(t=>Jt(e,t)))return e},isIn(e,r){if(kn(e,r))return e},isNotIn(e,r){if(!kn(e,r))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:j(bo.hasValue),lacksValue:j(bo.lacksValue),hasValues:j(bo.hasValues),lacksValues:j(bo.lacksValues),isIn:j(bo.isIn),isNotIn:j(bo.isNotIn),isEmpty:j(bo.isEmpty),isNotEmpty:j(bo.isNotEmpty)}},Vf={isHttpStatus(e,r){if(!yo(e,P))throw new w(`${x(e)} is not a valid HTTP status.`,r)},isHttpStatusCategory(e,r,t){if(yo(e,P)){if(!kn(e,fc[r]))throw new w(`${x(e)} is not a '${r}' HTTP status.`,t)}else throw new w(`${x(e)} is not a valid HTTP status.`,t)}},gw={assert:Vf,check:{isHttpStatus(e){return yo(e,P)},isHttpStatusCategory(e,r){return yo(e,P)&&kn(e,fc[r])}},assertWrap:{isHttpStatus(e,r){if(!yo(e,P))throw new w(`${x(e)} is not a valid HTTP status.`,r);return e},isHttpStatusCategory(e,r,t){if(yo(e,P)){if(!kn(e,fc[r]))throw new w(`${x(e)} is not a '${r}' HTTP status.`,t)}else throw new w(`${x(e)} is not a valid HTTP status.`,t);return e}},checkWrap:{isHttpStatus(e){if(yo(e,P))return e},isHttpStatusCategory(e,r){if(yo(e,P)&&kn(e,fc[r]))return e}},waitUntil:{isHttpStatus:j(Vf.isHttpStatus),isHttpStatusCategory:j(Vf.isHttpStatusCategory)}},Wf={instanceOf(e,r,t){if(!(e instanceof r))throw new w(`'${x(e)}' is not an instance of '${r.name}'`,t)},notInstanceOf(e,r,t){if(e instanceof r)throw new w(`'${x(e)}' is an instance of '${r.name}'`,t)}},hw={assert:Wf,check:{instanceOf(e,r){return e instanceof r},notInstanceOf(e,r){return!(e instanceof r)}},assertWrap:{instanceOf(e,r,t){if(e instanceof r)return e;throw new w(`'${x(e)}' is not an instance of '${r.name}'`,t)},notInstanceOf(e,r,t){if(e instanceof r)throw new w(`'${x(e)}' is an instance of '${r.name}'`,t);return e}},checkWrap:{instanceOf(e,r){if(e instanceof r)return e},notInstanceOf(e,r){if(!(e instanceof r))return e}},waitUntil:{instanceOf:j(Wf.instanceOf),notInstanceOf:j(Wf.notInstanceOf)}},Y6=[(e,r)=>r in e,(e,r)=>r in e.constructor.prototype];function cr(e,r){return Y6.some(t=>{try{return t(e,r)}catch{return!1}})}i(cr,"hasKey");const Ni={isKeyOf(e,r,t){if(!cr(r,e))throw new w(`'${String(e)}' is not a key of '${x(r)}'.`,t)},isNotKeyOf(e,r,t){if(cr(r,e))throw new w(`'${String(e)}' is a key of '${x(r)}'.`,t)},hasKey(e,r,t){if(!cr(e,r))throw new w(`'${x(e)}' does not have key '${String(r)}'.`,t)},lacksKey(e,r,t){if(cr(e,r))throw new w(`'${x(e)}' has key '${String(r)}'.`,t)},hasKeys(e,r,t){const n=r.filter(o=>!cr(e,o));if(n.length)throw new w(`'${x(e)}' does not have keys '${n.join(",")}'.`,t)},lacksKeys(e,r,t){const n=r.filter(o=>cr(e,o));if(n.length)throw new w(`'${x(e)}' does not lack keys '${n.join(",")}'.`,t)}},pw={assert:Ni,check:{isKeyOf(e,r){return cr(r,e)},isNotKeyOf(e,r){return!cr(r,e)},hasKey:cr,lacksKey(e,r){return!cr(e,r)},hasKeys(e,r){return r.every(t=>cr(e,t))},lacksKeys(e,r){return r.every(t=>!cr(e,t))}},assertWrap:{isKeyOf(e,r,t){if(!cr(r,e))throw new w(`'${String(e)}' is not a key of '${x(r)}'.`,t);return e},isNotKeyOf(e,r,t){if(cr(r,e))throw new w(`'${String(e)}' is a key of '${x(r)}'.`,t);return e},hasKey(e,r,t){if(!cr(e,r))throw new w(`'${x(e)}' does not have key '${String(r)}'.`,t);return e},lacksKey(e,r,t){if(cr(e,r))throw new w(`'${x(e)}' has key '${String(r)}'.`,t);return e},hasKeys(e,r,t){const n=r.filter(o=>!cr(e,o));if(n.length)throw new w(`'${x(e)}' does not have keys '${n.join(",")}'.`,t);return e},lacksKeys(e,r,t){const n=r.filter(o=>cr(e,o));if(n.length)throw new w(`'${x(e)}' does not lack keys '${n.join(",")}'.`,t);return e}},checkWrap:{isKeyOf(e,r){if(cr(r,e))return e},isNotKeyOf(e,r){if(!cr(r,e))return e},hasKey(e,r){if(cr(e,r))return e},lacksKey(e,r){if(!cr(e,r))return e},hasKeys(e,r){if(r.every(t=>cr(e,t)))return e},lacksKeys(e,r){if(r.every(t=>!cr(e,t)))return e}},waitUntil:{isKeyOf:j(Ni.isKeyOf),isNotKeyOf:j(Ni.isNotKeyOf),hasKey:j(Ni.hasKey),lacksKey:j(Ni.lacksKey),hasKeys:j(Ni.hasKeys),lacksKeys:j(Ni.lacksKeys)}};function J6(e,r,t){if((Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)<r)throw new w(`Length '${e.length}' is not at least '${r}'.`,t)}i(J6,"isLengthAtLeast");function X6(e,r,t){if((Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)!==r)throw new w(`Length '${e.length}' is not exactly '${r}'.`,t)}i(X6,"isLengthExactly");const Kf={isLengthAtLeast:J6,isLengthExactly:X6},mw={assert:Kf,check:{isLengthAtLeast:i(((e,r)=>(Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)>=r),"isLengthAtLeast"),isLengthExactly:i(((e,r)=>(Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)===r),"isLengthExactly")},assertWrap:{isLengthAtLeast:i(((e,r,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)<r)throw new w(`Length '${e.length}' is not at least '${r}'.`,t);return e}),"isLengthAtLeast"),isLengthExactly:i(((e,r,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)!==r)throw new w(`Length '${e.length}' is not exactly '${r}'.`,t);return e}),"isLengthExactly")},checkWrap:{isLengthAtLeast:i(((e,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)>=r)return e}),"isLengthAtLeast"),isLengthExactly:i(((e,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)===r)return e}),"isLengthExactly")},waitUntil:{isLengthAtLeast:j(Kf.isLengthAtLeast),isLengthExactly:j(Kf.isLengthExactly)}},Q6={never(e){throw new w("This code should not have executed.",e)}},bw={assert:Q6,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Hf={isDefined(e,r){if(e==null)throw new w(`'${x(e)}' is not defined.`,r)},isNullish(e,r){if(e!=null)throw new w(`'${x(e)}' is not a nullish.`,r)}},vw={assert:Hf,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,r){if(e==null)throw new w(`'${x(e)}' is not defined.`,r);return e},isNullish(e,r){if(e==null)return e;throw new w(`'${x(e)}' is not nullish.`,r)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:j(Hf.isDefined),isNullish:j(Hf.isNullish)}},Bt={isInBounds(e,{max:r,min:t},n){if(e<t||r<e)throw new w(`${e} is not within the bounds ${x({min:t,max:r})}`,n)},isOutBounds(e,{min:r,max:t},n){if(r<=e&&e<=t)throw new w(`${e} is not outside the bounds ${x({min:r,max:t})}`,n)},isInteger(e,r){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new w(`${e} is not an integer.`,r)},isNotInteger(e,r){if(Number.isInteger(e))throw new w(`${e} is an integer.`,r)},isAbove(e,r,t){if(e<=r)throw new w(`${e} is not above ${r}`,t)},isAtLeast(e,r,t){if(e<r)throw new w(`${e} is not at least ${r}`,t)},isBelow(e,r,t){if(e>=r)throw new w(`${e} is not below ${r}`,t)},isAtMost(e,r,t){if(e>r)throw new w(`${e} is not at most ${r}`,t)},isNaN(e,r){if(!isNaN(e))throw new w(`${e} is not NaN`,r)},isFinite(e,r){if(isNaN(e)||e===1/0||e===-1/0)throw new w(`${e} is not finite`,r)},isInfinite(e,r){if(e!==1/0&&e!==-1/0)throw new w(`${e} is not infinite`,r)},isApproximately(e,r,t,n){if(e<r-t||e>r+t)throw new w(`${e} is not within ±${t} of ${r}`,n)},isNotApproximately(e,r,t,n){if(e>=r-t&&e<=r+t)throw new w(`${e} is within ±${t} of ${r}`,n)}},yw={assert:Bt,check:{isInBounds(e,{max:r,min:t}){return t<=e&&e<=r},isOutBounds(e,{max:r,min:t}){return e<t||r<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,r){return e>r},isAtLeast(e,r){return e>=r},isBelow(e,r){return e<r},isAtMost(e,r){return e<=r},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,r,t){return r-t<=e&&e<=r+t},isNotApproximately(e,r,t){return e<r-t||e>r+t}},assertWrap:{isInBounds(e,{max:r,min:t},n){if(e<t||r<e)throw new w(`${e} is not within the bounds ${x({min:t,max:r})}`,n);return e},isOutBounds(e,{min:r,max:t},n){if(r<=e&&e<=t)throw new w(`${e} is not outside the bounds ${x({min:r,max:t})}`,n);return e},isInteger(e,r){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new w(`${e} is not an integer.`,r);return e},isNotInteger(e,r){if(Number.isInteger(e))throw new w(`${e} is an integer.`,r);return e},isAbove(e,r,t){if(e<=r)throw new w(`${e} is not above ${r}`,t);return e},isAtLeast(e,r,t){if(e<r)throw new w(`${e} is not at least ${r}`,t);return e},isBelow(e,r,t){if(e>=r)throw new w(`${e} is not below ${r}`,t);return e},isAtMost(e,r,t){if(e>r)throw new w(`${e} is not at most ${r}`,t);return e},isNaN(e,r){if(!isNaN(e))throw new w(`${e} is not NaN`,r);return e},isFinite(e,r){if(isNaN(e)||e===1/0||e===-1/0)throw new w(`${e} is not finite`,r);return e},isInfinite(e,r){if(e!==1/0&&e!==-1/0)throw new w(`${e} is not infinite`,r);return e},isApproximately(e,r,t,n){if(e<r-t||e>r+t)throw new w(`${e} is not within ±${t} of ${r}`,n);return e},isNotApproximately(e,r,t,n){if(e>=r-t&&e<=r+t)throw new w(`${e} is within ±${t} of ${r}`,n);return e}},checkWrap:{isInBounds(e,{max:r,min:t}){if(t<=e&&e<=r)return e},isOutBounds(e,{max:r,min:t}){if(e<t||r<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,r){if(e>r)return e},isAtLeast(e,r){if(e>=r)return e},isBelow(e,r){if(e<r)return e},isAtMost(e,r){if(e<=r)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,r,t){if(r-t<=e&&e<=r+t)return e},isNotApproximately(e,r,t){if(e<r-t||e>r+t)return e}},waitUntil:{isInBounds:j(Bt.isInBounds),isOutBounds:j(Bt.isOutBounds),isInteger:j(Bt.isInteger),isNotInteger:j(Bt.isNotInteger),isAbove:j(Bt.isAbove),isAtLeast:j(Bt.isAtLeast),isBelow:j(Bt.isBelow),isAtMost:j(Bt.isAtMost),isNaN:j(Bt.isNaN),isFinite:j(Bt.isFinite),isInfinite:j(Bt.isInfinite),isApproximately:j(Bt.isApproximately),isNotApproximately:j(Bt.isNotApproximately)}};function eD(e,r,t,n,o){return cu(...yd(e,r,t,n,o),!1)}i(eD,"assertOutput");function yd(e,r,t,n,o){const a=Array.isArray(t);return[a?e:cw,a?r:e,a?t:r,a?n:t,a?o:n]}i(yd,"extractOutputArgs");function cu(e,r,t,n,o,a){const s=r(...t);if(s instanceof Promise)return new Promise(async(l,u)=>{try{const f=await s;e(f,n),a?l(f):l()}catch(f){u(new w(`Output from '${r.name}' did not produce expected output. ${nt(f)}`,o))}});try{return e(s,n),a?s:void 0}catch(l){throw new w(`Output from '${r.name}' did not produce expected output. ${nt(l)}`,o)}}i(cu,"innerAssertOutput");function rD(e,r,t,n,o){try{const a=cu(...yd(e,r,t,n,o),!1);return a instanceof Promise?new Promise(async s=>{try{await a,s(!0)}catch{s(!1)}}):!0}catch{return!1}}i(rD,"checkOutput");function tD(e,r,t,n,o){return cu(...yd(e,r,t,n,o),!0)}i(tD,"assertWrapOutput");function nD(e,r,t,n,o){try{const a=cu(...yd(e,r,t,n,o),!0);return a instanceof Promise?new Promise(async s=>{try{s(await a)}catch{s(void 0)}}):a}catch{return}}i(nD,"checkWrapOutput");const Gf=Symbol("not set");async function oD(e,r,t,n,o,a){const s=Array.isArray(t),l=s?e:cw,u=s?r:e,f=s?t:r,g=s?n:t,h=ew(s?o:n),p=s?a:o,b=rs(h.timeout,{milliseconds:!0}).milliseconds,v=rs(h.interval,{milliseconds:!0});let $=Gf,C;async function E(){try{$=await cu(l,u,f,g,void 0,!0)}catch(N){$=Gf,C=Dr(N)}}i(E,"checkCondition");const A=Date.now();for(;$===Gf;)if(await E(),await ea(v),Date.now()-A>=b)throw ga(C,fa(p,`Timeout of '${b}' milliseconds exceeded waiting for callback value to match expectations`));return $}i(oD,"waitUntilOutput");const iD={output:eD},ww={assert:iD,check:{output:rD},assertWrap:{output:tD},checkWrap:{output:nD},waitUntil:{output:oD}},Gs={isPropertyKey(e,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new w(`'${x(e)}' is not a PropertyKey.`,r)},isNotPropertyKey(e,r){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new w(`'${x(e)}' is a PropertyKey.`,r)},isPrimitive(e,r){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new w(`'${x(e)}' is not a Primitive.`,r)},isNotPrimitive(e,r){if(e===null||typeof e!="object"&&typeof e!="function")throw new w(`'${x(e)}' is not a Primitive.`,r)}},kw={assert:Gs,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,r){if(e===null||typeof e!="object"&&typeof e!="function")throw new w(`'${x(e)}' is not a Primitive.`,r);return e},isNotPropertyKey(e,r){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new w(`'${x(e)}' is a PropertyKey.`,r);return e},isPrimitive(e,r){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new w(`'${x(e)}' is not a Primitive.`,r);return e},isPropertyKey(e,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new w(`'${x(e)}' is not a PropertyKey.`,r);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:j(Gs.isNotPrimitive),isNotPropertyKey:j(Gs.isNotPropertyKey),isPrimitive:j(Gs.isPrimitive),isPropertyKey:j(Gs.isPropertyKey)}},Zs={isPromiseLike(e,r){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new w(`'${x(e)}' is not a PromiseLike.`,r)},isNotPromiseLike(e,r){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new w(`'${x(e)}' is a PromiseLike.`,r)},isPromise(e,r){if(!(e instanceof Promise))throw new w(`'${x(e)}' is not a Promise.`,r)},isNotPromise(e,r){if(e instanceof Promise)throw new w(`'${x(e)}' is a Promise.`,r)}},$w={assert:Zs,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,r){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new w(`'${x(e)}' is not a PromiseLike.`,r);return e},isNotPromiseLike(e,r){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new w(`'${x(e)}' is a PromiseLike.`,r);return e},isPromise(e,r){if(!(e instanceof Promise))throw new w(`'${x(e)}' is not a Promise.`,r);return e},isNotPromise(e,r){if(e instanceof Promise)throw new w(`'${x(e)}' is a Promise.`,r);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:j(Zs.isPromiseLike,!0),isNotPromiseLike:j(Zs.isNotPromiseLike,!0),isPromise:j(Zs.isPromise,!0),isNotPromise:j(Zs.isNotPromise,!0)}},Zf={matches(e,r,t){if(!r.test(e))throw new w(`'${e}' does not match ${r}`,t)},mismatches(e,r,t){if(r.test(e))throw new w(`'${e}' matches ${r}`,t)}},xw={assert:Zf,check:{matches(e,r){return r.test(e)},mismatches(e,r){return!r.test(e)}},assertWrap:{matches(e,r,t){if(!r.test(e))throw new w(`'${e}' does not match ${r}`,t);return e},mismatches(e,r,t){if(r.test(e))throw new w(`'${e}' matches ${r}`,t);return e}},checkWrap:{matches(e,r){if(r.test(e))return e},mismatches(e,r){if(!r.test(e))return e}},waitUntil:{matches:j(Zf.matches,!0),mismatches:j(Zf.mismatches,!0)}},hr={isArray(e,r){if(!Array.isArray(e))throw new w(`'${x(e)}' is not an array.`,r)},isBigInt(e,r){if(typeof e!="bigint")throw new w(`'${x(e)}' is not a bigint.`,r)},isBoolean(e,r){if(typeof e!="boolean")throw new w(`'${x(e)}' is not a boolean.`,r)},isFunction(e,r){if(typeof e!="function")throw new w(`'${x(e)}' is not a function.`,r)},isNull(e,r){if(e!==null)throw new w(`'${x(e)}' is not nul.`,r)},isNumber(e,r){if(typeof e!="number"||isNaN(e))throw new w(`'${x(e)}' is not a number.`,r)},isObject(e,r){if(Array.isArray(e)||typeof e!="object"||!e)throw new w(`'${x(e)}' is not a non-null object.`,r)},isPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new w(`'${x(e)}' is not a plain object.`,r)},isString(e,r){if(typeof e!="string")throw new w(`'${x(e)}' is not a string.`,r)},isSymbol(e,r){if(typeof e!="symbol")throw new w(`'${x(e)}' is not a symbol.`,r)},isUndefined(e,r){if(typeof e<"u")throw new w(`'${x(e)}' is not a undefined.`,r)},isNotArray(e,r){if(Array.isArray(e))throw new w(`'${x(e)}' is an array.`,r)},isNotBigInt(e,r){if(typeof e=="bigint")throw new w(`'${x(e)}' is a bigint.`,r)},isNotBoolean(e,r){if(typeof e=="boolean")throw new w(`'${x(e)}' is a boolean.`,r)},isNotFunction(e,r){if(typeof e=="function")throw new w(`'${x(e)}' is a function.`,r)},isNotNull(e,r){if(e===null)throw new w(`'${x(e)}' is a null.`,r)},isNotNumber(e,r){if(typeof e=="number"&&!isNaN(e))throw new w(`'${x(e)}' is a number.`,r)},isNotObject(e,r){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new w(`'${x(e)}' is a non-null object.`,r)},isNotPlainObject(e,r){const t=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new w(`'${x(e)}' is a plain object.`,r)},isNotString(e,r){if(typeof e=="string")throw new w(`'${x(e)}' is a string.`,r)},isNotSymbol(e,r){if(typeof e=="symbol")throw new w(`'${x(e)}' is a symbol.`,r)},isNotUndefined(e,r){if(typeof e>"u")throw new w(`'${x(e)}' is a undefined.`,r)}},Dw={assert:hr,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const r=Object.getPrototypeOf(e);return(r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const r=Object.getPrototypeOf(e);return!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,r){if(!Array.isArray(e))throw new w(`'${x(e)}' is not an array.`,r);return e},isBigInt(e,r){if(typeof e!="bigint")throw new w(`'${x(e)}' is not a bigint.`,r);return e},isBoolean(e,r){if(typeof e!="boolean")throw new w(`'${x(e)}' is not a boolean.`,r);return e},isFunction(e,r){if(typeof e!="function")throw new w(`'${x(e)}' is not a function.`,r);return e},isNull(e,r){if(e!==null)throw new w(`'${x(e)}' is not nul.`,r);return e},isNumber(e,r){if(typeof e!="number"||isNaN(e))throw new w(`'${x(e)}' is not a number.`,r);return e},isObject(e,r){if(Array.isArray(e)||typeof e!="object"||!e)throw new w(`'${x(e)}' is not a non-null object.`,r);return e},isPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new w(`'${x(e)}' is not a plain object.`,r);return e},isString(e,r){if(typeof e!="string")throw new w(`'${x(e)}' is not a string.`,r);return e},isSymbol(e,r){if(typeof e!="symbol")throw new w(`'${x(e)}' is not a symbol.`,r);return e},isUndefined(e,r){if(typeof e<"u")throw new w(`'${x(e)}' is not a undefined.`,r);return e},isNotArray(e,r){if(Array.isArray(e))throw new w(`'${x(e)}' is an array.`,r);return e},isNotBigInt(e,r){if(typeof e=="bigint")throw new w(`'${x(e)}' is a bigint.`,r);return e},isNotBoolean(e,r){if(typeof e=="boolean")throw new w(`'${x(e)}' is a boolean.`,r);return e},isNotFunction(e,r){if(typeof e=="function")throw new w(`'${x(e)}' is a function.`,r);return e},isNotNull(e,r){if(e===null)throw new w(`'${x(e)}' is a null.`,r);return e},isNotNumber(e,r){if(typeof e=="number"&&!isNaN(e))throw new w(`'${x(e)}' is a number.`,r);return e},isNotObject(e,r){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new w(`'${x(e)}' is a non-null object.`,r);return e},isNotPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new w(`'${x(e)}' is a plain object.`,r)},isNotString(e,r){if(typeof e=="string")throw new w(`'${x(e)}' is a string.`,r);return e},isNotSymbol(e,r){if(typeof e=="symbol")throw new w(`'${x(e)}' is a symbol.`,r);return e},isNotUndefined(e,r){if(typeof e>"u")throw new w(`'${x(e)}' is a undefined.`,r);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const r=Object.getPrototypeOf(e);if((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const r=Object.getPrototypeOf(e);if(!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:j(hr.isArray),isBigInt:j(hr.isBigInt),isBoolean:j(hr.isBoolean),isFunction:j(hr.isFunction),isNull:j(hr.isNull),isNumber:j(hr.isNumber),isObject:j(hr.isObject),isPlainObject:j(hr.isPlainObject),isString:j(hr.isString),isSymbol:j(hr.isSymbol),isUndefined:j(hr.isUndefined),isNotArray:j(hr.isNotArray),isNotBigInt:j(hr.isNotBigInt),isNotBoolean:j(hr.isNotBoolean),isNotFunction:j(hr.isNotFunction),isNotNull:j(hr.isNotNull),isNotNumber:j(hr.isNotNumber),isNotObject:j(hr.isNotObject),isNotPlainObject:j(hr.isNotPlainObject),isNotString:j(hr.isNotString),isNotSymbol:j(hr.isNotSymbol),isNotUndefined:j(hr.isNotUndefined)}};var jt;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(jt||(jt={}));function Ph(e,r,t){Ih(e,{noError:"No error.",notInstance:`'${x(e)}' is not an error instance.`},r,t)}i(Ph,"isError");function Bb(e,r,t){Ih(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${x(e)}' is not an error instance.`},r,t)}i(Bb,"assertThrownError");function Ih(e,r,t,n){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor)){const o=e.constructor.name;throw new w(`Error constructor '${o}' did not match expected constructor '${t.matchConstructor.name}'.`,n)}else if(t?.matchMessage){const o=nt(e);if(typeof t.matchMessage=="string"){if(!Q2(o,t.matchMessage))throw new w(`Error message

'${o}'

does not contain

'${t.matchMessage}'.`,n)}else if(!o.match(t.matchMessage))throw new w(`Error message

'${o}'

does not match RegExp

'${t.matchMessage}'.`,n)}}else throw new w(r.notInstance,n);else throw new w(r.noError,n)}i(Ih,"internalAssertError");function Ob(e,r){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor))return!1;if(r?.matchMessage){const t=nt(e);if(typeof r.matchMessage=="string"){if(!Q2(t,r.matchMessage))return!1}else if(!t.match(r.matchMessage))return!1}}else return!1;else return!1;return!0}i(Ob,"internalCheckError");function wd(e,r,t,n){let o;try{const a=r instanceof Promise?r:r();if(a instanceof Promise)return new Promise(async(s,l)=>{try{await a}catch(u){o=Dr(u)}try{Bb(o,t,n),e===jt.Assert?s():e===jt.Check?s(!0):s(o)}catch(u){e===jt.CheckWrap?s(void 0):e===jt.Check?s(!1):l(Dr(u))}})}catch(a){o=Dr(a)}try{return Bb(o,t,n),e===jt.Check?!0:e!==jt.Assert?o:void 0}catch(a){if(e===jt.CheckWrap)return;if(e===jt.Check)return!1;throw a}}i(wd,"internalThrowsCheck");function aD(e,r,t){return wd(jt.Assert,e,r,t)}i(aD,"throws");function sD(e,r){return wd(jt.Check,e,r)}i(sD,"throwsCheck");function lD(e,r,t){return wd(jt.AssertWrap,e,r,t)}i(lD,"throwsAssertWrap");function uD(e,r,t){return wd(jt.CheckWrap,e,r,t)}i(uD,"throwsCheckWrap");const cD=j(Ph);function dD(e,r,t,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,a=o?r:e,s=typeof t=="object"?n:t,l=typeof t=="object"?t:r;if(typeof a!="function")throw new TypeError(`Callback is not a function, got '${x(a)}'`);return cD(o,async()=>{try{await a();return}catch(u){return Dr(u)}},l,s)}i(dD,"throwsWaitUntil");const fD={throws:aD,isError:Ph},Cw={assert:fD,check:{throws:sD,isError(e,r){return Ob(e,r)}},assertWrap:{throws:lD,isError(e,r,t){return Ih(e,{noError:"No error.",notInstance:`'${x(e)}' is not an error instance.`},r,t),e}},checkWrap:{throws:uD,isError(e,r){if(Ob(e,r))return e}},waitUntil:{throws:dD,isError:j(Ph)}},Yo=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Yf={isUuid(e,r){if(!String(e).match(Yo))throw new w(`'${String(e)}' is not a UUID.`,r)},isNotUuid(e,r){if(String(e).match(Yo))throw new w(`'${String(e)}' is a UUID.`,r)}},Ew={assert:Yf,check:{isUuid(e){return!!String(e).match(Yo)},isNotUuid(e){return!String(e).match(Yo)}},assertWrap:{isUuid(e,r){if(!String(e).match(Yo))throw new w(`'${String(e)}' is not a UUID.`,r);return e},isNotUuid(e,r){if(String(e).match(Yo))throw new w(`'${String(e)}' is a UUID.`,r);return e}},checkWrap:{isUuid(e){if(String(e).match(Yo))return e},isNotUuid(e){if(!String(e).match(Yo))return e}},waitUntil:{isUuid:j(Yf.isUuid),isNotUuid:j(Yf.isNotUuid)}},gD={...bw.assert,...rw.assert,...tw.assert,...ow.assert,...nw.assert,...gw.assert,...hw.assert,...iw.assert,...pw.assert,...mw.assert,...vw.assert,...yw.assert,...ww.assert,...kw.assert,...$w.assert,...xw.assert,...Dw.assert,...dw.assert,...Cw.assert,...Ew.assert,...fw.assert},Nh=[rw,tw,ow,nw,gw,hw,iw,pw,mw,bw,vw,yw,ww,kw,$w,xw,Dw,dw,Cw,Ew,fw],hD=Object.assign({},...Nh.map(e=>e.check)),M=Object.assign(i(function(r){return!!r},"check"),hD);function pD(e,r,t){return mc(e,r,t,new Set)}i(pD,"checkCustomDeepQuality");function mc(e,r,t,n){if(e=Rb(e),r=Rb(r),M.isObject(e)&&M.isObject(r)){if(n.has(e)||n.has(r))return!0;if(n.add(e),n.add(r),!mc(Ke(e).sort(),Ke(r).sort(),t,n))return!1;let o=!1;const a=Ke(e).map(s=>{const l=mc(e[s],r[s],t,n);return M.isPromise(l)&&(o=!0),l});return Lb(o,a)}else if(M.isArray(e)&&M.isArray(r)){if(n.has(e)||n.has(r))return!0;if(n.add(e),n.add(r),e.length!==r.length)return!1;let o=!1;const a=e.map((s,l)=>{const u=mc(s,r[l],t,n);return M.isPromise(u)&&(o=!0),u});return Lb(o,a)}else return t(e,r)}i(mc,"recursiveCheckCustomDeepQuality");function Rb(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}i(Rb,"flattenComplexObject");function Lb(e,r){return e?new Promise(async(t,n)=>{try{const o=await Promise.all(r);t(o.every(M.isTrue))}catch(o){n(Dr(o))}}):r.every(M.isTrue)}i(Lb,"handleMaybePromise");const mD=Object.assign({},...Nh.map(e=>e.assertWrap)),ur=Object.assign(i(function(r,t){if(!r)throw new w("Assertion failed.",t);return r},"assertWrap"),mD);function bD(e){return{equals:i(()=>{},"equals"),notEquals:i(()=>{},"notEquals"),matches:i(()=>{},"matches"),notMatches:i(()=>{},"notMatches"),slowEquals:i(()=>{},"slowEquals")}}i(bD,"tsType");const vD={tsType:bD},yD={assert:vD},wD={fail:i(e=>{throw new w("Failure triggered.",e)},"fail")},kD={...yD.assert,...gD,...wD},Er=Object.assign(i(function(r,t){if(!r)throw new w("Assertion failed.",t)},"assert"),kD),$D=Object.assign({},...Nh.map(e=>e.checkWrap)),kd=Object.assign(i(function(r){if(r)return r},"checkWrap"),$D);function xD(e,r){return M.hasKey(e,"entryType")&&e.entryType===r}i(xD,"isBookEntry");function Bi(e,r){return e.controlType===r}i(Bi,"isControlInitType");var ge;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(ge||(ge={}));const Aw=Symbol("any-type"),DD={[ge.Checkbox]:!1,[ge.Color]:"",[ge.Custom]:void 0,[ge.Dropdown]:"",[ge.Hidden]:Aw,[ge.Number]:0,[ge.Text]:""};function CD(e,r){if(!e)return[];const t=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===ge.Custom)return;const a=DD[o.controlType];a!==Aw&&(typeof a!=typeof o.initValue&&t.push(new Error(`Control '${n}' in page '${r}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||t.push(new Error(`'${r}' cannot have an empty control name.`)))}),t}i(CD,"checkControls");function ED(e,r,t){const n=r;if(e.has(n))return e.get(n);{const o=t();return M.isPromise(o)?new Promise(async(a,s)=>{try{const l=await o;e.set(n,l),a(l)}catch(l){s(Dr(l))}}):(e.set(n,o),o)}}i(ED,"getOrSetFromMap");function pa(e,r,t){if(r in e)return e[r];{const n=t();return M.isPromise(n)?new Promise(async(o,a)=>{try{const s=await n;e[r]=s,o(s)}catch(s){a(Dr(s))}}):(e[r]=n,n)}}i(pa,"getOrSet");function En(e){return Ke(e).map(r=>[r,e[r]])}i(En,"getObjectTypedEntries");function Bl(e){return Object.fromEntries(e)}i(Bl,"typedObjectFromEntries");function Vt(e,r,t){return e.reduce((n,o,a,s)=>{const l=r(o,a,s);return t(l,o,a,s)&&n.push(l),n},[])}i(Vt,"filterMap");function AD(e,r,t={}){return e.reduce((n,o,a,s)=>{const l=r(o,a,s);return pa(n,l,()=>[]).push(o),n},{})}i(AD,"groupArrayBy");function fi(e,r,t={}){try{let n=!1;const o=e.map((a,s,l)=>{const u=r(a,s,l);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(M.isTruthy);return n?new Promise(async(a,s)=>{try{const l=Vt(await Promise.all(o),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},M.isTruthy);a(Bl(l))}catch(l){s(Dr(l))}}):Bl(o)}catch(n){throw Dr(n)}}i(fi,"arrayToObject");function FD(e,r){const t=[];let n=!1;for(let o=0;o<e;o++){const a=r(o);M.isPromise(a)&&(n=!0),t.push(a)}return n?Promise.all(t):t}i(FD,"createArray");function SD(e){return Array.isArray(e)?e:[e]}i(SD,"ensureArray");function MD({min:e,max:r}){const{min:t,max:n}=$h({min:Math.floor(e),max:Math.floor(r)}),o=n-t+1,a=Math.ceil(Math.log2(o)),s=Math.ceil(a/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${t}, max: ${n}})`);const l=Math.floor(256**s/o)*o,u=new Uint8Array(s);let f;do crypto.getRandomValues(u),f=u.reduce((g,h,p)=>g+h*256**p,0);while(f>=l);return t+f%o}i(MD,"randomInteger");const jb=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];function Io(e=16){let r="";for(let t=0;t<e;t++){const n=MD({min:0,max:jb.length-1});r+=jb[n]}return r}i(Io,"randomString");function Fw(e){if(M.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(r=>nt(r).trim()).join(`
`))}i(Fw,"combineErrors");function Sw(e,r={}){try{const t=e();return t instanceof Promise?t.catch(n=>r.handleError?r.handleError(n):M.hasKey(r,"fallbackValue")?r.fallbackValue:Dr(n)):t}catch(t){return r.handleError?r.handleError(t):M.hasKey(r,"fallbackValue")?r.fallbackValue:Dr(t)}}i(Sw,"wrapInTry");function Rn(e){try{return JSON.parse(JSON.stringify(e))}catch(r){throw console.error("Failed to JSON copy for:",e),ga(r,"Failed JSON copy")}}i(Rn,"copyThroughJson");const TD="modulepreload",PD=i(function(e){return"/vira/book/"+e},"assetsURL"),Ub={},Ol=i(function(r,t,n){let o=Promise.resolve();if(t&&t.length>0){let u=function(f){return Promise.all(f.map(g=>Promise.resolve(g).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};i(u,"allSettled"),document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");o=u(t.map(f=>{if(f=PD(f),f in Ub)return;Ub[f]=!0;const g=f.endsWith(".css"),h=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${h}`))return;const p=document.createElement("link");if(p.rel=g?"stylesheet":TD,g||(p.as="script"),p.crossOrigin="",p.href=f,l&&p.setAttribute("nonce",l),document.head.appendChild(p),g)return new Promise((b,v)=>{p.addEventListener("load",b),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return i(a,"handlePreloadError"),o.then(s=>{for(const l of s||[])l.status==="rejected"&&a(l.reason);return r().catch(a)})},"preload");var zr;(function(e){e.Standard="stdout",e.Error="stderr"})(zr||(zr={}));var ve;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ve||(ve={}));async function ID(){return await K1({async[zn.Node](){const e=(await Ol(async()=>{const{default:r}=await import("./index-aeZXflCI.js");return{default:r}},[])).default;return{[ve.Bold]:e.bold.open,[ve.Debug]:e.blueBright.open,[ve.Error]:e.red.open,[ve.Faint]:e.gray.open,[ve.Info]:e.cyan.open,[ve.Mutate]:e.magenta.open,[ve.NormalWeight]:"\x1B[22m",[ve.Plain]:"",[ve.Reset]:e.reset.open,[ve.Success]:e.green.open,[ve.Warning]:e.yellow.open}},[zn.Web](){return Promise.resolve({[ve.Bold]:"font-weight: bold",[ve.Debug]:"color: blue",[ve.Error]:"color: red",[ve.Faint]:"color: grey",[ve.Info]:"color: teal",[ve.Mutate]:"color: magenta",[ve.NormalWeight]:"",[ve.Plain]:"",[ve.Reset]:"",[ve.Success]:"color: green",[ve.Warning]:"color: orange"})}})}i(ID,"determineDefaultLogColors");const Yt=await ID(),ND={[ve.Bold]:{colors:[Yt.bold],logType:zr.Standard},[ve.Debug]:{colors:[Yt.debug],logType:zr.Standard},[ve.Faint]:{colors:[Yt.faint],logType:zr.Standard},[ve.Info]:{colors:[Yt.info],logType:zr.Standard},[ve.Mutate]:{colors:[Yt.mutate,Yt.bold],logType:zr.Standard},[ve.NormalWeight]:{colors:[Yt.normalWeight],logType:zr.Standard},[ve.Plain]:{colors:[],logType:zr.Standard},[ve.Reset]:{colors:[Yt.reset],logType:zr.Standard},[ve.Success]:{colors:[Yt.success,Yt.bold],logType:zr.Standard},[ve.Error]:{colors:[Yt.error,Yt.bold],logType:zr.Error},[ve.Warning]:{colors:[Yt.warning],logType:zr.Error}};function Tt({value:e,prefix:r}){return String(e).startsWith(r)?String(e):`${r}${String(e)}`}i(Tt,"addPrefix");function Ki({value:e,prefix:r}){return e.startsWith(r)?e.slice(r.length):e}i(Ki,"removePrefix");function Mw(e,r){try{let t=!1;const n=En(e).map(([o,a])=>{const s=r(o,a,e);return s instanceof Promise?(t=!0,s):s?[s.key,s.value]:void 0}).filter(M.isTruthy);return t?new Promise(async(o,a)=>{try{const s=Vt(await Promise.all(n),l=>{if(l)return Array.isArray(l)?l:[l.key,l.value]},M.isTruthy);o(Bl(s))}catch(s){a(Dr(s))}}):Bl(n)}catch(t){throw Dr(t)}}i(Mw,"mapObject");function Tw(e,r){return Mw(e,(t,n)=>{const o=n,a=r(n,e);return a instanceof Promise?a.then(s=>({key:o,value:s})):{key:o,value:a}})}i(Tw,"mapEnumToObject");function Pw(e,...r){const t={...e};return r.forEach(n=>{n&&En(n).forEach(([o,a])=>{a!=null&&(t[o]=a)})}),t}i(Pw,"mergeDefinedProperties");function BD(e){return e.replace(/,/g,"")}i(BD,"removeCommas");function OD(e){return typeof e=="number"?e:Number(typeof e=="string"?BD(e):e)}i(OD,"toNumber");function RD(e){const r=LD(e);if(r==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return r}i(RD,"toEnsuredNumber");function LD(e){const r=OD(e);if(!isNaN(r))return r}i(LD,"toMaybeNumber");const Iw="px";function ra(e){return Bh({value:e,suffix:Iw})}i(ra,"addPx");function jD(e){return RD(Oh({value:e,suffix:Iw}))}i(jD,"removePx");function Bh({value:e,suffix:r}){return String(e).endsWith(r)?String(e):`${String(e)}${r}`}i(Bh,"addSuffix");function Oh({value:e,suffix:r}){return e.endsWith(r)?e.slice(0,Math.max(0,e.length-r.length)):e}i(Oh,"removeSuffix");async function UD(){return await K1({async[zn.Node](){const{inspect:e}=await Ol(async()=>{const{inspect:r}=await import("node:util");return{inspect:r}},[]);return({args:r,colorKey:t,options:n})=>{const o=r.map(l=>typeof l=="string"?l:e(l));return{text:[n.omitColors?"":n.colorConfig[t].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[ve.Reset].colors.join("")].join(""),css:void 0}}},[zn.Web](){return({args:e,colorKey:r,options:t})=>{const n=t.omitColors?void 0:Vt(t.colorConfig[r].colors,s=>Oh({value:s,suffix:";"}),M.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?nt(s):x(s)).join(`
`),t.omitColors?"":t.colorConfig[ve.Reset].colors.join("")].join(""),css:n}}}})}i(UD,"createToLogString");const _D=await UD(),zD={colorConfig:ND,omitColors:!1},qD=Nw({[zr.Error](){},[zr.Standard](){}});function Nw(e,r){const t=Pw(zD,r);function n(a){e[t.colorConfig[a.colorKey].logType](_D({...a,options:t}))}i(n,"writeLog");const o=Tw(ve,a=>(...s)=>n({args:s,colorKey:a}));return{...o,if(a){return a?o:qD}}}i(Nw,"createLogger");const VD=kh(zn.Node)?{[zr.Error]({text:e}){process.stderr.write(e+`
`)},[zr.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[zr.Error]({text:e,css:r}){console.error(Tt({value:e,prefix:"%c"}),r)},[zr.Standard]({text:e,css:r}){console.log(Tt({value:e,prefix:"%c"}),r)}},Bw=Nw(VD);function WD(e,{min:r,max:t}){return Math.min(Math.max(e,r),t)}i(WD,"clamp$2");function Ow(e,{digits:r}){if(r==null)return e;const t=Math.pow(10,r),n=e*t;return Number((Math.round(n)/t).toFixed(r))}i(Ow,"round");function KD({searchIn:e,searchFor:r,caseSensitive:t,includeLength:n}){const o=Y2(X2(r,{caseSensitive:t}),"g"),a=[];return e.replace(o,(...s)=>{const l=s[s.length-2];if(typeof l!="number")throw new TypeError(`Match index "${l}" is not a number. Searching for "${r}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);a.push({index:l,length:u.length});const f=s[0];if(typeof f!="string")throw new TypeError(`Original match when searching for "${r}" in "${e}" at index ${l} is not a string.`);return f}),a}i(KD,"findSubstringIndexes");function HD(e,r,{caseSensitive:t}){const n=KD({searchIn:e,searchFor:r,caseSensitive:t,includeLength:!0}),o=X2(r,{caseSensitive:t});return e.split(o).reduce((s,l,u)=>{const f=n[u],g=s.concat(l);if(f){const h=e.slice(f.index,f.index+f.length);return g.concat(h)}else return g},[])}i(HD,"splitIncludeSplit");function GD(e,r){return e.split(r)}i(GD,"safeSplit");function _b(e,r){const{min:t,max:n}=$h(r);if(r.takeOverflow){const o=n-t+1,a=(e-t)%o;return a<0?t+o+a:t+a}else return e>n?t:e<t?n:e}i(_b,"wrapNumber");const Rw=typeof Buffer<"u",ZD=Rw?Buffer.isBuffer.bind(Buffer):i(function(r){return!1},"isBuffer"),YD=Rw?Buffer.from.bind(Buffer):i(function(r){return r},"cloneBuffer"),JD=typeof Promise=="function",XD=(e=>{if(typeof globalThis=="object")return globalThis;Object.defineProperty(e,"typeDetectGlobalObject",{get(){return this},configurable:!0});const r=typeDetectGlobalObject;return delete e.typeDetectGlobalObject,r})(Object.prototype),Lw=typeof Symbol<"u",vg=typeof Map<"u",yg=typeof Set<"u",QD=typeof WeakMap<"u",e8=typeof WeakSet<"u",r8=typeof DataView<"u",jw=Lw&&typeof Symbol.iterator<"u",zb=Lw&&typeof Symbol.toStringTag<"u",t8=yg&&typeof Set.prototype.entries=="function",n8=vg&&typeof Map.prototype.entries=="function",o8=t8&&Object.getPrototypeOf(new Set().entries()),i8=n8&&Object.getPrototypeOf(new Map().entries()),Uw=jw&&typeof Array.prototype[Symbol.iterator]=="function",a8=Uw&&Object.getPrototypeOf([][Symbol.iterator]()),_w=jw&&typeof String.prototype[Symbol.iterator]=="function",s8=_w&&Object.getPrototypeOf(""[Symbol.iterator]()),l8=8,u8=-1;function c8(e){const r=typeof e;if(r!=="object")return r;if(e===null)return"null";if(e===XD)return"global";if(Array.isArray(e)&&(!zb||!(Symbol.toStringTag in e)))return"Array";if(typeof window=="object"&&window!==null){if(typeof window.location=="object"&&e===window.location)return"Location";if(typeof window.document=="object"&&e===window.document)return"Document";if(typeof window.navigator=="object"){if(typeof window.navigator.mimeTypes=="object"&&e===window.navigator.mimeTypes)return"MimeTypeArray";if(typeof window.navigator.plugins=="object"&&e===window.navigator.plugins)return"PluginArray"}if((typeof window.HTMLElement=="function"||typeof window.HTMLElement=="object")&&e instanceof window.HTMLElement){if(e.tagName==="BLOCKQUOTE")return"HTMLQuoteElement";if(e.tagName==="TD")return"HTMLTableDataCellElement";if(e.tagName==="TH")return"HTMLTableHeaderCellElement"}}const t=zb&&e[Symbol.toStringTag];if(typeof t=="string")return t;const n=Object.getPrototypeOf(e);return n===RegExp.prototype?"RegExp":n===Date.prototype?"Date":JD&&n===Promise.prototype?"Promise":yg&&n===Set.prototype?"Set":vg&&n===Map.prototype?"Map":e8&&n===WeakSet.prototype?"WeakSet":QD&&n===WeakMap.prototype?"WeakMap":r8&&n===DataView.prototype?"DataView":vg&&n===i8?"Map Iterator":yg&&n===o8?"Set Iterator":Uw&&n===a8?"Array Iterator":_w&&n===s8?"String Iterator":n===null?"Object":Object.prototype.toString.call(e).slice(l8,u8)}i(c8,"typeDetect");const du="Arguments",fu="Array",gu="Object",hu="Map",pu="Set";function wg(e){return ZD(e)?"Buffer":c8(e)}i(wg,"detectType");function d8(e,r){switch(r){case"ArrayBuffer":return e.slice(0);case"Boolean":return new Boolean(e.valueOf());case"Buffer":return YD(e);case"DataView":return new DataView(e.buffer);case"Date":return new Date(e.getTime());case"Number":return new Number(e);case"RegExp":return new RegExp(e.source,e.flags);case"String":return new String(e);case"Float32Array":return new Float32Array(e);case"Float64Array":return new Float64Array(e);case"Int16Array":return new Int16Array(e);case"Int32Array":return new Int32Array(e);case"Int8Array":return new Int8Array(e);case"Uint16Array":return new Uint16Array(e);case"Uint32Array":return new Uint32Array(e);case"Uint8Array":return new Uint8Array(e);case"Uint8ClampedArray":return new Uint8ClampedArray(e);case"Array Iterator":return e;case"Map Iterator":return e;case"Promise":return e;case"Set Iterator":return e;case"String Iterator":return e;case"function":return e;case"global":return e;case"WeakMap":return e;case"WeakSet":return e;case"boolean":return e;case"null":return e;case"number":return e;case"string":return e;case"symbol":return e;case"undefined":return e;case du:return[];case fu:return[];case hu:return new Map;case gu:return{};case pu:return new Set;default:return e}}i(d8,"clone$1");function Ic(e,r,t=null){if(t&&r==="Object"){const n=t(e,r);if(n!==void 0)return n}return d8(e,r)}i(Ic,"copy");const f8=new Set([du,fu,hu,gu,pu]);function kg(e){return f8.has(e)}i(kg,"isCollection");function g8(e,r){switch(r){case du:case fu:return Object.keys(e);case gu:return[].concat(Object.keys(e),Object.getOwnPropertySymbols(e));case hu:case pu:return Array.from(e.keys());default:return[]}}i(g8,"getKeys");function h8(e,r,t){switch(t){case du:case fu:case gu:return e[r];case hu:return e.get(r);case pu:return r;default:return}}i(h8,"getValue");function qb(e,r,t,n){switch(n){case du:case fu:case gu:e[r]=t;break;case hu:e.set(r,t);break;case pu:e.add(t);break}return e}i(qb,"setValue");function zw(e,r,t,n,o){const a=wg(e),s=Ic(e,a);if(!kg(a))return s;const l=g8(e,a);for(const u of l){const f=h8(e,u,a);if(n.has(f))qb(r,u,t.get(f),a);else{const g=wg(f),h=Ic(f,g);kg(g)&&(t.set(f,h),n.add(f)),qb(r,u,zw(f,h,t,n),a)}}return r}i(zw,"recursiveCopy");function p8(e,r){const{customizer:t=null}={},n=wg(e);if(!kg(n))return Ic(e,n,t);const o=Ic(e,n,t),a=new WeakMap([[e,o]]),s=new WeakSet([e]);return zw(e,o,a,s)}i(p8,"deepCopy");function qe(e,r){let t=!1;const n=Ke(e).reduce((o,a)=>{const s=r(a,e[a],e);return s instanceof Promise&&(t=!0),o[a]=s,o},{});return t?new Promise(async(o,a)=>{try{await Promise.all(Ke(n).map(async s=>{const l=await n[s];n[s]=l})),o(n)}catch(s){a(Dr(s))}}):n}i(qe,"mapObjectValues");function $d(e,r){const t=En(e).filter(([n,o])=>r(n,o,e));return Bl(t)}i($d,"filterObject");function m8(e,r){return $d(e,t=>r.includes(t))}i(m8,"pickObjectKeys");function ns(e){return Ke(e).map(r=>e[r])}i(ns,"getObjectTypedValues");function qw(e,{keepNewLines:r}={}){return r?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}i(qw,"collapseWhiteSpace");var Rl;(function(e){e.Upper="upper",e.Lower="lower"})(Rl||(Rl={}));const b8={firstLetterCase:Rl.Lower};function v8(e,r){if(!e.length)return"";const t=e[0];return(r===Rl.Upper?t.toUpperCase():t.toLowerCase())+e.slice(1)}i(v8,"setFirstLetterCasing");function y8(e,r={}){const t=e.toLowerCase();if(!t.length)return"";const n=t.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,a=>{const s=a[1];return s?s.toUpperCase():""}),o=Pw(b8,r);return v8(n,o.firstLetterCase)}i(y8,"kebabCaseToCamelCase");function w8(e,r="and"){if(e.length<2)return e.join("");const t=e.length>2?", ":" ";return`${e.slice(0,-1).join(t)}${t}${r} ${e[e.length-1]}`}i(w8,"joinWithFinalConjunction");function k8({value:e,wrapper:r}){return Tt({value:Bh({value:e,suffix:r}),prefix:r})}i(k8,"wrapString");function Ht(){function e(r){return class extends CustomEvent{static{i(this,"TypedEventConstructor")}static type=r;constructor(n){super(r,n)}}}return i(e,"defineEventTypeString"),e}i(Ht,"defineTypedCustomEvent");function xd(e,r){const t=r??Event;return class extends t{static{i(this,"TypedEventConstructor")}static type=e;constructor(o){super(e,o)}}}i(xd,"defineTypedEvent$1");class $8{static{i(this,"TypedListenTarget")}listeners={};universalListeners=new Map;getListenerCount(){return ns(this.listeners).map(t=>t.size||0).reduce((t,n)=>t+n,0)+this.universalListeners.size}listenToAll(r,t={}){const n=i(()=>this.universalListeners.delete(r)||!1,"removeListener");function o(a,s){t.once&&n(),r(a,s)}return i(o,"wrappedCallback"),this.universalListeners.set(r,{listener:o,removeListener:n}),n}removeUniversalListener(r){return!!this.universalListeners.get(r)?.removeListener()}listen(r,t,n={}){const o=M.isString(r)?r:r.type,a=i(()=>this.listeners[o]?.delete(t)||!1,"removeListener");function s(l,u){n.once&&a(),t(l,u)}return i(s,"wrappedCallback"),pa(this.listeners,o,()=>new Map).set(t,{listener:s,removeListener:a}),a}removeListener(r,t){const n=M.isString(r)?r:r.type,o=this.listeners[n];if(!o)return!1;const a=o.get(t);return a?a.removeListener():!1}dispatch(r){const t=this.listeners[r.type];r.target==null&&Object.defineProperty(r,"target",{writable:!1,value:this});const n=t?.size||0;return t?.forEach(o=>{o.listener(r,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(r,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const t=ns(this.listeners).reduce((n,o)=>{const a=o.size||0;return o.clear(),n+a},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),t}destroy(){this.removeAllListeners()}}class mu extends $8{static{i(this,"ListenTarget")}}function Un(e,r,t,n){return e.addEventListener(r,t,n),()=>e.removeEventListener(r,t,n)}i(Un,"listenTo");function Ll(e,r,t){return Un(globalThis,e,r,t)}i(Ll,"listenToGlobal");function Rh(e,r){return jl(e.title),e.parent?[...Rh(e.parent),jl(e.parent.title)].concat([]):[]}i(Rh,"listUrlBreadcrumbs");function jl(e){return qw(e).toLowerCase().replaceAll(/\s/g,"-")}i(jl,"titleToUrlBreadcrumb");function x8({searchFor:e,searchIn:r}){return e.every((t,n)=>r[n]===t)}i(x8,"doBreadcrumbsStartWith");const D8=/[/?#&=]/;function Vw(e){const r=e.match(D8);return e.trim()?jl(e)?r?new Error(`Book page title has invalid character '${r[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}i(Vw,"getPageTitleError");const C8={[ct.ElementExample]:()=>[],[ct.Page]:e=>[Vw(e.title),...CD(e.controls,e.title)].filter(M.isTruthy),[ct.Root]:()=>[]},Nc="_isBookTreeNode",Ww=new Map;function E8(e){return Ww.get(e)}i(E8,"getTreeFromCache");function A8(e,r){ED(Ww,e,()=>r)}i(A8,"addTreeToCache");function Za(e,r){return Kw(e)&&e.entry.entryType===r}i(Za,"isBookTreeNode");function Kw(e){return!!(M.hasKeys(e,[Nc,"entry"])&&e[Nc])}i(Kw,"isAnyBookTreeNode");function F8(){return{[Nc]:!0,entry:{entryType:ct.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}i(F8,"createEmptyBookTreeRoot");function S8({entries:e,debug:r}){const t=E8(e);if(t)return t;const n=F8();e.forEach(s=>Lh({tree:n,newEntry:s,debug:r,manuallyAdded:!0}));const o=Hw(n),a={tree:n,flattenedNodes:o};return A8(e,a),r&&console.info("element-book tree:",n),a}i(S8,"createBookTreeFromEntries");function M8(e,r,t){if(!r.parent)return e;const n=$g(r,e);if(n)return n;t&&console.info(`parent of ${r.title} not found in tree; adding it now.`),Lh({tree:e,newEntry:r.parent,debug:t,manuallyAdded:!1});const o=$g(r,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Rh(r).join(" > ")}`);return o}i(M8,"getOrAddImmediateParent");function Lh({tree:e,newEntry:r,debug:t,manuallyAdded:n}){const o=C8[r.entryType](r);r.errors.push(...o);const a=M8(e,r,t),s=jl(r.title),l=a.children[s];if(l){if(n){if(l.manuallyAdded){l.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}l.manuallyAdded=!0}return}const u={[Nc]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:r,manuallyAdded:n};a.children[s]=u,xD(r,ct.Page)&&Object.values(r.elementExamples).length&&Object.values(r.elementExamples).forEach(f=>Lh({tree:e,newEntry:f,debug:t,manuallyAdded:n}))}i(Lh,"addEntryToTree");function $g(e,r){const t=Kw(e)?e.fullUrlBreadcrumbs.slice(0,-1):Rh(e);return t.length?t.reduce((o,a)=>{if(o)return o.children[a]},r):void 0}i($g,"traverseToImmediateParent");function Hw(e){const t=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Hw(o));return[e,...t].flat()}i(Hw,"flattenTree");function jh(e,r){return Uh(e,["",...r],void 0)}i(jh,"traverseControls");function Uh(e,r,t){const n=r.slice(1),o=n[0];!o&&t&&(e.controls=t);const a=e.children[o||""],s=a&&Uh(a,n,t);return{...e.controls,...s}}i(Uh,"traverseAndInsertNewControls");function T8(e,r,t){const n={...e};return Uh(n,["",...r],t),n}i(T8,"createNewControls");function Gw(e,r){const t=r?.controls||(Za(e,ct.Page)?qe(e.entry.controls,(o,a)=>a.initValue):{});return{children:qe(e.children,(o,a)=>Gw(a,r?.children?.[a.urlBreadcrumb])),controls:t}}i(Gw,"updateTreeControls");function Ee(e){const r={...e,entryType:ct.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},t=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:r.useVerticalExamples,entryType:ct.ElementExample,parent:r,descriptionParagraphs:n.descriptionParagraphs??[],errors:[t.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),Vw(n.title)].filter(M.isTruthy)};t.add(n.title),r.elementExamples[jl(o.title)]=o}}),r}i(Ee,"defineBookPage");var Ut;(function(e){e.Search="search",e.Book="book"})(Ut||(Ut={}));function Zw(e){return e[0]===Ut.Book?"":e[1]?decodeURIComponent(e[1]):""}i(Zw,"extractSearchQuery");const os={hash:void 0,paths:[Ut.Book],search:void 0};class Bc{static{i(this,"CssPropertyRegistry")}static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const r=Bc.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;r&&(globalThis.CSS.registerProperty=t=>(Yw.registry.set(t.name,t),r(t)))}canRegisterCssProperty(r){return Bc.cssPropertyDefinitionSupported&&!this.registry.has(r)}registerProperty(r){if(!this.canRegisterCssProperty(r.name))return!1;try{return globalThis.CSS.registerProperty(r),!0}catch(t){throw ga(t,`Failed to define CSS var: ${x(r,4)}

`)}}}const Yw=new Bc;const bc=globalThis,_h=bc.ShadowRoot&&(bc.ShadyCSS===void 0||bc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zh=Symbol(),Vb=new WeakMap;let ei=class{static{i(this,"n")}constructor(r,t,n){if(this._$cssResult$=!0,n!==zh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=t}get styleSheet(){let r=this.o;const t=this.t;if(_h&&r===void 0){const n=t!==void 0&&t.length===1;n&&(r=Vb.get(t)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),n&&Vb.set(t,r))}return r}toString(){return this.cssText}};const Re=i(e=>new ei(typeof e=="string"?e:e+"",void 0,zh),"r$3"),Jw=i((e,...r)=>{const t=e.length===1?e[0]:r.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new ei(t,e,zh)},"i$5"),P8=i((e,r)=>{if(_h)e.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of r){const n=document.createElement("style"),o=bc.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,e.appendChild(n)}},"S$1"),Wb=_h?e=>e:e=>e instanceof CSSStyleSheet?(r=>{let t="";for(const n of r.cssRules)t+=n.cssText;return Re(t)})(e):e;const{is:I8,defineProperty:N8,getOwnPropertyDescriptor:B8,getOwnPropertyNames:O8,getOwnPropertySymbols:R8,getPrototypeOf:L8}=Object,Dd=globalThis,Kb=Dd.trustedTypes,j8=Kb?Kb.emptyScript:"",U8=Dd.reactiveElementPolyfillSupport,Dl=i((e,r)=>e,"d$2"),Oc={toAttribute(e,r){switch(r){case Boolean:e=e?j8:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,r){let t=e;switch(r){case Boolean:t=e!==null;break;case Number:t=e===null?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch{t=null}}return t}},qh=i((e,r)=>!I8(e,r),"f$3"),Hb={attribute:!0,type:String,converter:Oc,reflect:!1,useDefault:!1,hasChanged:qh};Symbol.metadata??=Symbol("metadata"),Dd.litPropertyMetadata??=new WeakMap;let ja=class extends HTMLElement{static{i(this,"y")}static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,t=Hb){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(r,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(r,n,t);o!==void 0&&N8(this.prototype,r,o)}}static getPropertyDescriptor(r,t,n){const{get:o,set:a}=B8(this.prototype,r)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const l=o?.call(this);a?.call(this,s),this.requestUpdate(r,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Hb}static _$Ei(){if(this.hasOwnProperty(Dl("elementProperties")))return;const r=L8(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Dl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dl("properties"))){const t=this.properties,n=[...O8(t),...R8(t)];for(const o of n)this.createProperty(o,t[o])}const r=this[Symbol.metadata];if(r!==null){const t=litPropertyMetadata.get(r);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const t=[];if(Array.isArray(r)){const n=new Set(r.flat(1/0).reverse());for(const o of n)t.unshift(Wb(o))}else r!==void 0&&t.push(Wb(r));return t}static _$Eu(r,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(r.set(n,this[n]),delete this[n]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return P8(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,t,n){this._$AK(r,n)}_$ET(r,t){const n=this.constructor.elementProperties.get(r),o=this.constructor._$Eu(r,n);if(o!==void 0&&n.reflect===!0){const a=(n.converter?.toAttribute!==void 0?n.converter:Oc).toAttribute(t,n.type);this._$Em=r,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(r,t){const n=this.constructor,o=n._$Eh.get(r);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Oc;this._$Em=o;const l=s.fromAttribute(t,a.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(r,t,n,o=!1,a){if(r!==void 0){const s=this.constructor;if(o===!1&&(a=this[r]),n??=s.getPropertyOptions(r),!((n.hasChanged??qh)(a,t)||n.useDefault&&n.reflect&&a===this._$Ej?.get(r)&&!this.hasAttribute(s._$Eu(r,n))))return;this.C(r,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,t,{useDefault:n,reflect:o,wrapped:a},s){n&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,s??t??this[r]),a!==!0||s!==void 0)||(this._$AL.has(r)||(this.hasUpdated||n||(t=void 0),this._$AL.set(r,t)),o===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,a]of n){const{wrapped:s}=a,l=this[o];s!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,a,l)}}let r=!1;const t=this._$AL;try{r=this.shouldUpdate(t),r?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw r=!1,this._$EM(),n}r&&this._$AE(t)}willUpdate(r){}_$AE(r){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(r){}firstUpdated(r){}};ja.elementStyles=[],ja.shadowRootOptions={mode:"open"},ja[Dl("elementProperties")]=new Map,ja[Dl("finalized")]=new Map,U8?.({ReactiveElement:ja}),(Dd.reactiveElementVersions??=[]).push("2.1.2");const Vh=globalThis,Gb=i(e=>e,"i$3"),Rc=Vh.trustedTypes,Zb=Rc?Rc.createPolicy("lit-html",{createHTML:i(e=>e,"createHTML")}):void 0,Xw="$lit$",Qo=`lit$${Math.random().toFixed(9).slice(2)}$`,Qw="?"+Qo,_8=`<${Qw}>`,ta=document,Ul=i(()=>ta.createComment(""),"c$3"),_l=i(e=>e===null||typeof e!="object"&&typeof e!="function","a$1"),Wh=Array.isArray,z8=i(e=>Wh(e)||typeof e?.[Symbol.iterator]=="function","d$1"),Jf=`[ 	
\f\r]`,Ys=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yb=/-->/g,Jb=/>/g,Oi=RegExp(`>|${Jf}(?:([^\\s"'>=/]+)(${Jf}*=${Jf}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xb=/'/g,Qb=/"/g,e5=/^(?:script|style|textarea|title)$/i,q8=i(e=>(r,...t)=>({_$litType$:e,strings:r,values:t}),"x"),V8=q8(1),on=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),ev=new WeakMap,qi=ta.createTreeWalker(ta,129);function r5(e,r){if(!Wh(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zb!==void 0?Zb.createHTML(r):r}i(r5,"V");const W8=i((e,r)=>{const t=e.length-1,n=[];let o,a=r===2?"<svg>":r===3?"<math>":"",s=Ys;for(let l=0;l<t;l++){const u=e[l];let f,g,h=-1,p=0;for(;p<u.length&&(s.lastIndex=p,g=s.exec(u),g!==null);)p=s.lastIndex,s===Ys?g[1]==="!--"?s=Yb:g[1]!==void 0?s=Jb:g[2]!==void 0?(e5.test(g[2])&&(o=RegExp("</"+g[2],"g")),s=Oi):g[3]!==void 0&&(s=Oi):s===Oi?g[0]===">"?(s=o??Ys,h=-1):g[1]===void 0?h=-2:(h=s.lastIndex-g[2].length,f=g[1],s=g[3]===void 0?Oi:g[3]==='"'?Qb:Xb):s===Qb||s===Xb?s=Oi:s===Yb||s===Jb?s=Ys:(s=Oi,o=void 0);const b=s===Oi&&e[l+1].startsWith("/>")?" ":"";a+=s===Ys?u+_8:h>=0?(n.push(f),u.slice(0,h)+Xw+u.slice(h)+Qo+b):u+Qo+(h===-2?l:b)}return[r5(e,a+(e[t]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),n]},"N");class zl{static{i(this,"S")}constructor({strings:r,_$litType$:t},n){let o;this.parts=[];let a=0,s=0;const l=r.length-1,u=this.parts,[f,g]=W8(r,t);if(this.el=zl.createElement(f,n),qi.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=qi.nextNode())!==null&&u.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Xw)){const p=g[s++],b=o.getAttribute(h).split(Qo),v=/([.?@])?(.*)/.exec(p);u.push({type:1,index:a,name:v[2],strings:b,ctor:v[1]==="."?H8:v[1]==="?"?G8:v[1]==="@"?Z8:Ed}),o.removeAttribute(h)}else h.startsWith(Qo)&&(u.push({type:6,index:a}),o.removeAttribute(h));if(e5.test(o.tagName)){const h=o.textContent.split(Qo),p=h.length-1;if(p>0){o.textContent=Rc?Rc.emptyScript:"";for(let b=0;b<p;b++)o.append(h[b],Ul()),qi.nextNode(),u.push({type:2,index:++a});o.append(h[p],Ul())}}}else if(o.nodeType===8)if(o.data===Qw)u.push({type:2,index:a});else{let h=-1;for(;(h=o.data.indexOf(Qo,h+1))!==-1;)u.push({type:7,index:a}),h+=Qo.length-1}a++}}static createElement(r,t){const n=ta.createElement("template");return n.innerHTML=r,n}}function is(e,r,t=e,n){if(r===on)return r;let o=n!==void 0?t._$Co?.[n]:t._$Cl;const a=_l(r)?void 0:r._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(e),o._$AT(e,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(r=is(e,o._$AS(e,r.values),o,n)),r}i(is,"M$2");class K8{static{i(this,"R")}constructor(r,t){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:t},parts:n}=this._$AD,o=(r?.creationScope??ta).importNode(t,!0);qi.currentNode=o;let a=qi.nextNode(),s=0,l=0,u=n[0];for(;u!==void 0;){if(s===u.index){let f;u.type===2?f=new Cd(a,a.nextSibling,this,r):u.type===1?f=new u.ctor(a,u.name,u.strings,this,r):u.type===6&&(f=new Y8(a,this,r)),this._$AV.push(f),u=n[++l]}s!==u?.index&&(a=qi.nextNode(),s++)}return qi.currentNode=ta,o}p(r){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(r,n,t),t+=n.strings.length-2):n._$AI(r[t])),t++}}let Cd=class t5{static{i(this,"k")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,t,n,o){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=r,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&r?.nodeType===11&&(r=t.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,t=this){r=is(this,r,t),_l(r)?r===ee||r==null||r===""?(this._$AH!==ee&&this._$AR(),this._$AH=ee):r!==this._$AH&&r!==on&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):z8(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==ee&&_l(this._$AH)?this._$AA.nextSibling.data=r:this.T(ta.createTextNode(r)),this._$AH=r}$(r){const{values:t,_$litType$:n}=r,o=typeof n=="number"?this._$AC(r):(n.el===void 0&&(n.el=zl.createElement(r5(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const a=new K8(o,this),s=a.u(this.options);a.p(t),this.T(s),this._$AH=a}}_$AC(r){let t=ev.get(r.strings);return t===void 0&&ev.set(r.strings,t=new zl(r)),t}k(r){Wh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of r)o===t.length?t.push(n=new t5(this.O(Ul()),this.O(Ul()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(r=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);r!==this._$AB;){const n=Gb(r).nextSibling;Gb(r).remove(),r=n}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}};class Ed{static{i(this,"H")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,t,n,o,a){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=r,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ee}_$AI(r,t=this,n,o){const a=this.strings;let s=!1;if(a===void 0)r=is(this,r,t,0),s=!_l(r)||r!==this._$AH&&r!==on,s&&(this._$AH=r);else{const l=r;let u,f;for(r=a[0],u=0;u<a.length-1;u++)f=is(this,l[n+u],t,u),f===on&&(f=this._$AH[u]),s||=!_l(f)||f!==this._$AH[u],f===ee?r=ee:r!==ee&&(r+=(f??"")+a[u+1]),this._$AH[u]=f}s&&!o&&this.j(r)}j(r){r===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class H8 extends Ed{static{i(this,"I")}constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===ee?void 0:r}}class G8 extends Ed{static{i(this,"L")}constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==ee)}}class Z8 extends Ed{static{i(this,"z")}constructor(r,t,n,o,a){super(r,t,n,o,a),this.type=5}_$AI(r,t=this){if((r=is(this,r,t,0)??ee)===on)return;const n=this._$AH,o=r===ee&&n!==ee||r.capture!==n.capture||r.once!==n.once||r.passive!==n.passive,a=r!==ee&&(n===ee||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class Y8{static{i(this,"Z")}constructor(r,t,n){this.element=r,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(r){is(this,r)}}const J8={I:Cd},X8=Vh.litHtmlPolyfillSupport;X8?.(zl,Cd),(Vh.litHtmlVersions??=[]).push("3.3.2");const Q8=i((e,r,t)=>{const n=t?.renderBefore??r;let o=n._$litPart$;if(o===void 0){const a=t?.renderBefore??null;n._$litPart$=o=new Cd(r.insertBefore(Ul(),a),a,void 0,t??{})}return o._$AI(e),o},"D");const Kh=globalThis;let Cl=class extends ja{static{i(this,"i")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=Q8(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return on}};Cl._$litElement$=!0,Cl.finalized=!0,Kh.litElementHydrateSupport?.({LitElement:Cl});const eC=Kh.litElementPolyfillSupport;eC?.({LitElement:Cl});(Kh.litElementVersions??=[]).push("4.2.2");function Hh({onElement:e,toValue:r,forCssVar:t}){e.style.setProperty(String(t.name),String(r))}i(Hh,"setCssVarValue");function rC({onElement:e,forCssVar:r,includeCascade:t}){return(t?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(r.name)).trim()}i(rC,"readCssVarValue");var as;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(as||(as={}));var rv;(function(e){e.Space="+",e.Comma="#"})(rv||(rv={}));function It(e){return qe(e,(t,n)=>{tC(t);const o=n,a=M.isObject(o)&&!(o instanceof ei)&&M.lacksKey(o,"name"),s=M.isString(o)||M.isNumber(o)||o instanceof ei?String(o):String(o.default),l=M.isString(o)||M.isNumber(o)||o instanceof ei?String(o):String("initialValue"in o&&o.initialValue||o.default),u=Re(Tt({value:t.replace(/^-+/,""),prefix:"--"})),f={name:u,value:Jw`var(${u}, ${Re(s)})`,syntax:M.isString(o)||M.isNumber(o)||o instanceof ei?as.Any:xg("syntax"in o?o.syntax:void 0),default:s},g=String(f.name);if(!l)throw new Error(`Initial value for CSS var ${g} cannot be empty.`);return a&&Yw.registerProperty({inherits:!0,name:g,initialValue:l,syntax:f.syntax})&&globalThis.document?.documentElement&&Hh({forCssVar:f,onElement:globalThis.document.documentElement,toValue:s}),f})}i(It,"defineCssVars");function tC(e){try{if(M.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(r){throw new Error(fa("Invalid CSS var name.",r,`Got '${x(e)}'`))}}i(tC,"assertValidCssVarName");function xg(e){return e?M.isString(e)?e:e.union?e.union.map(r=>xg(r)).join(" | "):e.list?`${xg(e.list.values)}${e.list.separator}`:e.raw:as.Any}i(xg,"createSyntaxString");const Ne=It({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),nC={nav:{hover:{background:Ne["element-book-nav-hover-background-color"],foreground:Ne["element-book-nav-hover-foreground-color"]},active:{background:Ne["element-book-nav-active-background-color"],foreground:Ne["element-book-nav-active-foreground-color"]},selected:{background:Ne["element-book-nav-selected-background-color"],foreground:Ne["element-book-nav-selected-foreground-color"]}},accent:{icon:Ne["element-book-accent-icon-color"]},page:{background:Ne["element-book-page-background-color"],backgroundFaint1:Ne["element-book-page-background-faint-level-1-color"],backgroundFaint2:Ne["element-book-page-background-faint-level-2-color"],foreground:Ne["element-book-page-foreground-color"],foregroundFaint1:Ne["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Ne["element-book-page-foreground-faint-level-2-color"]}};function oC(e,r){n5(e,r,nC)}i(oC,"setThemeCssVars");function Dg(e){return M.hasKey(e,"_$cssResult$")}i(Dg,"isCssResult");function tv(e){return M.hasKeys(e,["name","value","default"])&&M.isString(e.default)&&Dg(e.name)&&Dg(e.value)}i(tv,"isCssVarDefinition");function n5(e,r,t){Object.entries(r).forEach(([n,o])=>{const a=t[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Dg(o)){if(!tv(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Hh({forCssVar:a,onElement:e,toValue:String(o)})}else{if(tv(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);n5(e,o,a)}})}i(n5,"recursiveSetThemeCssVars");function gl(e,r){let t=e.length,n,o,a=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],t=n.length,a=!0),Array.isArray(r[0])?o=r:(o=r.length>0?r.map(g=>[g]):[[]],s=!0);let l=o[0].length,u=o[0].map((g,h)=>o.map(p=>p[h])),f=n.map(g=>u.map(h=>{let p=0;if(!Array.isArray(g)){for(let b of h)p+=g*b;return p}for(let b=0;b<g.length;b++)p+=g[b]*(h[b]||0);return p}));return t===1&&a&&(f=f[0]),l===1&&s?t===1&&a?f[0]:f.map(g=>g[0]):f}i(gl,"multiplyMatrices");function Xf(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]}i(Xf,"dot3");function xr(e,r,t=[0,0,0]){const n=Xf(e,r[0]),o=Xf(e,r[1]),a=Xf(e,r[2]);return t[0]=n,t[1]=o,t[2]=a,t}i(xr,"multiply_v3_m3x3");function Es(e){return si(e)==="string"}i(Es,"isString");function si(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}i(si,"type");function Gh(e,{precision:r=16,unit:t}){return Oe(e)?"none":(e=+Zh(e,r),e+(t??""))}i(Gh,"serializeNumber");function Oe(e){return e===null}i(Oe,"isNone");function Tr(e){return Oe(e)?0:e}i(Tr,"skipNone");function Zh(e,r){if(e===0)return 0;let t=~~e,n=0;t&&r&&(n=~~Math.log10(Math.abs(t))+1);const o=10**(r-n);return Math.floor(e*o+.5)/o}i(Zh,"toPrecision");function ql(e,r,t){return isNaN(e)?r:isNaN(r)?e:e+(r-e)*t}i(ql,"interpolate");function o5(e,r,t){return(t-e)/(r-e)}i(o5,"interpolateInv");function Cg(e,r,t){return!e||!r||e===r||e[0]===r[0]&&e[1]===r[1]||isNaN(t)||t===null?t:ql(r[0],r[1],o5(e[0],e[1],t))}i(Cg,"mapRange");function Ad(e,r,t){return Math.max(Math.min(t,r),e)}i(Ad,"clamp$1");function Fd(e,r){return Math.sign(e)===Math.sign(r)?e:-e}i(Fd,"copySign");function Pr(e,r){return Fd(Math.abs(e)**r,e)}i(Pr,"spow");function Yh(e,r){return r===0?0:e/r}i(Yh,"zdiv");function i5(e,r,t=0,n=e.length){for(;t<n;){const o=t+n>>1;e[o]<r?t=o+1:n=o}return t}i(i5,"bisectLeft");function ss(e,r){if(e instanceof r)return!0;const t=r.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===t)return!0;if(!o||o==="Object")return!1;e=n}return!1}i(ss,"isInstance");var iC=Object.freeze({__proto__:null,bisectLeft:i5,clamp:Ad,copySign:Fd,interpolate:ql,interpolateInv:o5,isInstance:ss,isNone:Oe,isString:Es,mapRange:Cg,multiplyMatrices:gl,multiply_v3_m3x3:xr,serializeNumber:Gh,skipNone:Tr,spow:Pr,toPrecision:Zh,type:si,zdiv:Yh});class aC{static{i(this,"Hooks")}add(r,t,n){if(typeof arguments[0]!="string"){for(var r in arguments[0])this.add(r,arguments[0][r],arguments[1]);return}(Array.isArray(r)?r:[r]).forEach(function(o){this[o]=this[o]||[],t&&this[o][n?"unshift":"push"](t)},this)}run(r,t){this[r]=this[r]||[],this[r].forEach(function(n){n.call(t&&t.context?t.context:t,t)})}}const gi=new aC;var an={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:i(function(r){this.verbose&&globalThis?.console?.warn?.(r)},"warn")};let nv=class{static{i(this,"Type")}type;coordMeta;coordRange;range;constructor(r,t){if(typeof r=="object"&&(this.coordMeta=r),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof r=="string"){let n=r.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${r} as a type definition.`);this.type=n.groups.type;let{min:o,max:a}=n.groups;(o||a)&&(this.range=[+o,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(r){if(this.type==="<angle>")return r;let t=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),Cg(t,n,r)}serialize(r,t){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return r=Cg(this.coordRange,n,r),Gh(r,{unit:o,precision:t})}toString(){let r=this.type;if(this.range){let[t="",n=""]=this.range;r+=`[${t},${n}]`}return r}percentageRange(r=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*r,t[1]*r]}static get(r,t){return ss(r,this)?r:new this(r,t)}};const Qf=Symbol("instance");class Lc{static{i(this,"Format")}type;name;spaceCoords;coords;id;alpha;constructor(r,t=r.space){r[Qf]=this,this.type="function",this.name="color",Object.assign(this,r),this.space=t,this.type!=="custom"&&(this.spaceCoords=Object.values(t.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let a=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>nv.get(s,a))}))}serializeCoords(r,t,n){return n=r.map((o,a)=>nv.get(n?.[a]??this.coords[a][0],this.spaceCoords[a])),r.map((o,a)=>n[a].serialize(o,t))}coerceCoords(r,t){return Object.entries(this.space.coords).map(([n,o],a)=>{let s=r[a];if(Oe(s)||isNaN(s))return s;let l=t[a],u=this.coords[a].find(f=>f.type==l);if(!u){let f=o.name||n;throw new TypeError(`${l??s?.raw??s} not allowed for ${f} in ${this.name}()`)}return s=u.resolve(s),u.range&&(t[a]=u.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(r){return null}static get(r,...t){return!r||ss(r,this)?r:r[Qf]?r[Qf]:new Lc(r,...t)}}const Mt={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Eg(e){return Array.isArray(e)?e:Mt[e]}i(Eg,"getWhite");function jc(e,r,t,n={}){if(e=Eg(e),r=Eg(r),!e||!r)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!r?"/":""}${r?"":"to"}`);if(e===r)return t;let o={W1:e,W2:r,XYZ:t,options:n};if(gi.run("chromatic-adaptation-start",o),o.M||(o.W1===Mt.D65&&o.W2===Mt.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===Mt.D50&&o.W2===Mt.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),gi.run("chromatic-adaptation-end",o),o.M)return xr(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}i(jc,"adapt$2");function a5(e,r){let t={str:String(e)?.trim(),options:r};if(gi.run("parse-start",t),t.color)return t.color;t.parsed=lC(t.str);let n,o=t.options?t.options.parseMeta??t.options.meta:null;if(t.parsed){let a=t.parsed.name,s,l,u=t.parsed.args,f=u.map((p,b)=>t.parsed.argMeta[b]?.type);if(a==="color"){let p=u.shift();f.shift();let b=p.startsWith("--")?p.substring(2):`--${p}`,v=[p,b];if(s=Y.findFormat({name:a,id:v,type:"function"}),!s){let $,C=p in Y.registry?p:b;if(C in Y.registry){let E=Y.registry[C].formats?.color?.id;E&&($=`Did you mean ${e.replace("color("+p,"color("+E)}?`)}throw new TypeError(`Cannot parse ${t.str}. `+($??"Missing a plugin?"))}l=s.space,s.id.startsWith("--")&&!p.startsWith("--")&&an.warn(`${l.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${p}).`),p.startsWith("--")&&!s.id.startsWith("--")&&an.warn(`${l.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${p}).`)}else s=Y.findFormat({name:a,type:"function"}),l=s.space;o&&Object.assign(o,{format:s,formatId:s.name,types:f,commas:t.parsed.commas});let g=1;t.parsed.lastAlpha&&(g=t.parsed.args.pop(),o&&(o.alphaType=f.pop()));let h=s.coords.length;if(u.length!==h)throw new TypeError(`Expected ${h} coordinates for ${l.id} in ${t.str}), got ${u.length}`);u=s.coerceCoords(u,f),n={spaceId:l.id,coords:u,alpha:g}}else e:for(let a of Y.all)for(let s in a.formats){let l=a.formats[s];if(l.type!=="custom"||l.test&&!l.test(t.str))continue;let u=a.getFormat(l),f=u.parse(t.str);if(f){o&&Object.assign(o,{format:u,formatId:s}),n=f;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=Oe(n.alpha)?n.alpha:n.alpha===void 0?1:Ad(0,n.alpha,1),n}i(a5,"parse$1");const s5={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Uc={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(s5).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function sC(e){let r={},t=e.match(Uc.unitValue)?.[0],n=r.raw=e;return t?(r.type=t==="%"?"<percentage>":"<angle>",r.unit=t,r.unitless=Number(n.slice(0,-t.length)),n=r.unitless*s5[t]):Uc.number.test(n)?(n=Number(n),r.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,r.type="<number>"):r.type="<ident>",{value:n,meta:r}}i(sC,"parseArgument");function lC(e){if(!e)return;e=e.trim();let r=e.match(Uc.function);if(r){let t=[],n=[],o=!1,a=r[1].toLowerCase(),s=r[2].replace(Uc.singleArgument,(l,u)=>{let{value:f,meta:g}=sC(u);return(l.startsWith("/")||a!=="color"&&t.length===3)&&(o=!0),t.push(f),n.push(g),""});return{name:a,args:t,argMeta:n,lastAlpha:o,commas:s.includes(","),rawName:r[1],rawArgs:r[2]}}}i(lC,"parseFunction");function ue(e,r){if(Array.isArray(e))return e.map(n=>ue(n,r));if(!e)throw new TypeError("Empty color reference");Es(e)&&(e=a5(e,r));let t=e.space||e.spaceId;return typeof t=="string"&&(e.space=Y.get(t)),e.alpha===void 0&&(e.alpha=1),e}i(ue,"getColor");const uC=75e-6;class Y{static{i(this,"ColorSpace")}constructor(r){this.id=r.id,this.name=r.name,this.base=r.base?Y.get(r.base):null,this.aliases=r.aliases,this.base&&(this.fromBase=r.fromBase,this.toBase=r.toBase);let t=r.coords??this.base.coords;for(let o in t)"name"in t[o]||(t[o].name=o);this.coords=t;let n=r.white??this.base.white??"D65";this.white=Eg(n),this.formats=r.formats??{};for(let o in this.formats){let a=this.formats[o];a.type||="function",a.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:r.cssId||this.id}),r.gamutSpace?this.gamutSpace=r.gamutSpace==="self"?this:Y.get(r.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,a)=>!0),this.referred=r.referred,Object.defineProperty(this,"path",{value:cC(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),gi.run("colorspace-init-end",this)}inGamut(r,{epsilon:t=uC}={}){if(!this.equals(this.gamutSpace))return r=this.to(this.gamutSpace,r),this.gamutSpace.inGamut(r,{epsilon:t});let n=Object.values(this.coords);return r.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Oe(o))return!0;let[l,u]=s.range;return(l===void 0||o>=l-t)&&(u===void 0||o<=u+t)}return!0})}get isUnbounded(){return Object.values(this.coords).every(r=>!("range"in r))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let r in this.coords)if(this.coords[r].type==="angle")return!0;return!1}getFormat(r){if(!r)return null;r==="default"?r=Object.values(this.formats)[0]:typeof r=="string"&&(r=this.formats[r]);let t=Lc.get(r,this);return t!==r&&r.name in this.formats&&(this.formats[r.name]=t),t}equals(r){return r?this===r||this.id===r||this.id===r.id:!1}to(r,t){if(arguments.length===1){const l=ue(r);[r,t]=[l.space,l.coords]}if(r=Y.get(r),this.equals(r))return t;t=t.map(l=>Oe(l)?0:l);let n=this.path,o=r.path,a,s;for(let l=0;l<n.length&&n[l].equals(o[l]);l++)a=n[l],s=l;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${r}: no connection space was found`);for(let l=n.length-1;l>s;l--)t=n[l].toBase(t);for(let l=s+1;l<o.length;l++)t=o[l].fromBase(t);return t}from(r,t){if(arguments.length===1){const n=ue(r);[r,t]=[n.space,n.coords]}return r=Y.get(r),r.to(this,t)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let r=[];for(let t in this.coords){let n=this.coords[t],o=n.range||n.refRange;r.push(o?.min??0)}return r}static registry={};static get all(){return[...new Set(Object.values(Y.registry))]}static register(r,t){if(arguments.length===1&&(t=arguments[0],r=t.id),t=this.get(t),this.registry[r]&&this.registry[r]!==t)throw new Error(`Duplicate color space registration: '${r}'`);if(this.registry[r]=t,arguments.length===1&&t.aliases)for(let n of t.aliases)this.register(n,t);return t}static get(r,...t){if(!r||ss(r,this))return r;if(si(r)==="string"){let o=Y.registry[r.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${r}"`);return o}if(t.length)return Y.get(...t);throw new TypeError(`${r} is not a valid color space`)}static findFormat(r,t=Y.all){if(!r)return null;typeof r=="string"&&(r={name:r});for(let n of t)for(let[o,a]of Object.entries(n.formats)){a.name??=o,a.type??="function";let s=(!r.name||a.name===r.name)&&(!r.type||a.type===r.type);if(r.id){let l=a.ids||[a.id],u=Array.isArray(r.id)?r.id:[r.id];s&&=u.some(f=>l.includes(f))}if(s){let l=Lc.get(a,n);return l!==a&&(n.formats[a.name]=l),l}}return null}static resolveCoord(r,t){let n=si(r),o,a;if(n==="string"?r.includes(".")?[o,a]=r.split("."):[o,a]=[,r]:Array.isArray(r)?[o,a]=r:(o=r.space,a=r.coordId),o=Y.get(o),o||(o=t),!o)throw new TypeError(`Cannot resolve coordinate reference ${r}: No color space specified and relative references are not allowed here`);if(n=si(a),n==="number"||n==="string"&&a>=0){let u=Object.entries(o.coords)[a];if(u)return{space:o,id:u[0],index:a,...u[1]}}o=Y.get(o);let s=a.toLowerCase(),l=0;for(let u in o.coords){let f=o.coords[u];if(u.toLowerCase()===s||f.name?.toLowerCase()===s)return{space:o,id:u,index:l,...f};l++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function cC(e){let r=[e];for(let t=e;t=t.base;)r.push(t);return r}i(cC,"getPath");var dt=new Y({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Ct extends Y{static{i(this,"RGBColorSpace")}constructor(r){r.coords||(r.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),r.base||(r.base=dt),r.toXYZ_M&&r.fromXYZ_M&&(r.toBase??=t=>{let n=xr(t,r.toXYZ_M);return this.white!==this.base.white&&(n=jc(this.white,this.base.white,n)),n},r.fromBase??=t=>(t=jc(this.base.white,this.white,t),xr(t,r.fromXYZ_M))),r.referred??="display",super(r)}}function l5(e,r={}){if(Array.isArray(e))return e.map(u=>l5(u,r));let{cssProperty:t="background-color",element:n,...o}=r,a=null;try{return ue(e,o)}catch(u){a=u}let{CSS:s,getComputedStyle:l}=globalThis;if(Es(e)&&n&&s&&l&&s.supports(t,e)){let u=n.style[t];e!==u&&(n.style[t]=e);let f=l(n).getPropertyValue(t);if(e!==u&&(n.style[t]=u),f!==e)try{return ue(f,o)}catch(g){a=g}else a={message:"Color value is a valid CSS color, but it could not be resolved :("}}return r.errorMeta&&(r.errorMeta.error=a),null}i(l5,"tryColor");function bu(e,r){e=ue(e);let t=Y.get(r,r?.space),n=r?.precision,o;return!t||e.space.equals(t)?o=e.coords.slice():o=t.from(e),n===void 0?o:o.map(a=>Zh(a,n))}i(bu,"getAll");function en(e,r){if(e=ue(e),r==="alpha")return e.alpha??1;let{space:t,index:n}=Y.resolveCoord(r,e.space);return bu(e,t)[n]}i(en,"get");function Jh(e,r,t,n){return e=ue(e),Array.isArray(r)&&([r,t,n]=[e.space,r,t]),r=Y.get(r),e.coords=r===e.space?t.slice():r.to(e.space,t),n!==void 0&&(e.alpha=n),e}i(Jh,"setAll");Jh.returns="color";function Bo(e,r,t){if(e=ue(e),arguments.length===2&&si(arguments[1])==="object"){let n=arguments[1];for(let o in n)Bo(e,o,n[o])}else if(typeof t=="function"&&(t=t(en(e,r))),r==="alpha")e.alpha=t;else{let{space:n,index:o}=Y.resolveCoord(r,e.space),a=bu(e,n);a[o]=t,Jh(e,n,a)}return e}i(Bo,"set");Bo.returns="color";var Xh=new Y({id:"xyz-d50",name:"XYZ D50",white:"D50",base:dt,fromBase:i(e=>jc(dt.white,"D50",e),"fromBase"),toBase:i(e=>jc("D50",dt.white,e),"toBase")});const dC=216/24389,ov=24/116,Ku=24389/27;let e0=Mt.D50;var rn=new Y({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:e0,base:Xh,fromBase(e){let t=e.map((s,l)=>s/e0[l]).map(s=>s>dC?Math.cbrt(s):(Ku*s+16)/116),n=116*t[1]-16,o=500*(t[0]-t[1]),a=200*(t[1]-t[2]);return[n,o,a]},toBase(e){let[r,t,n]=e,o=[];return o[1]=(r+16)/116,o[0]=t/500+o[1],o[2]=o[1]-n/200,[o[0]>ov?Math.pow(o[0],3):(116*o[0]-16)/Ku,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ku,o[2]>ov?Math.pow(o[2],3):(116*o[2]-16)/Ku].map((s,l)=>s*e0[l])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function An(e){return typeof e!="number"?e:(e%360+360)%360}i(An,"constrain");function u5(e,r){let[t,n]=r,o=Oe(t),a=Oe(n);if(o&&a)return[t,n];if(o?t=n:a&&(n=t),e==="raw")return r;t=An(t),n=An(n);let s=n-t;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(t+=360):e==="longer"?-180<s&&s<180&&(s>0?t+=360:n+=360):e==="shorter"&&(s>180?t+=360:s<-180&&(n+=360)),[t,n]}i(u5,"adjust");var sn=new Y({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:rn,fromBase(e){if(this.ε===void 0){let l=Object.values(this.base.coords)[1].refRange,u=l[1]-l[0];this.ε=u/1e5}let[r,t,n]=e,o=Math.abs(t)<this.ε&&Math.abs(n)<this.ε,a=o?null:An(Math.atan2(n,t)*180/Math.PI),s=o?0:Math.sqrt(t**2+n**2);return[r,s,a]},toBase(e){let[r,t,n]=e,o=null,a=null;return Oe(n)||(t=t<0?0:t,o=t*Math.cos(n*Math.PI/180),a=t*Math.sin(n*Math.PI/180)),[r,o,a]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const iv=25**7,_c=Math.PI,av=180/_c,Ia=_c/180;function sv(e){const r=e*e;return r*r*r*e}i(sv,"pow7");function c5(e,r,{kL:t=1,kC:n=1,kH:o=1}={}){[e,r]=ue([e,r]);let[a,s,l]=rn.from(e),u=sn.from(rn,[a,s,l])[1],[f,g,h]=rn.from(r),p=sn.from(rn,[f,g,h])[1];u<0&&(u=0),p<0&&(p=0);let b=(u+p)/2,v=sv(b),$=.5*(1-Math.sqrt(v/(v+iv))),C=(1+$)*s,E=(1+$)*g,A=Math.sqrt(C**2+l**2),N=Math.sqrt(E**2+h**2),_=C===0&&l===0?0:Math.atan2(l,C),H=E===0&&h===0?0:Math.atan2(h,E);_<0&&(_+=2*_c),H<0&&(H+=2*_c),_*=av,H*=av;let ce=f-a,Te=N-A,be=H-_,Se=_+H,or=Math.abs(be),ir;A*N===0?ir=0:or<=180?ir=be:be>180?ir=be-360:be<-180?ir=be+360:an.warn("the unthinkable has happened");let jr=2*Math.sqrt(N*A)*Math.sin(ir*Ia/2),Zt=(a+f)/2,At=(A+N)/2,go=sv(At),Jr;A*N===0?Jr=Se:or<=180?Jr=Se/2:Se<360?Jr=(Se+360)/2:Jr=(Se-360)/2;let Qn=(Zt-50)**2,ho=1+.015*Qn/Math.sqrt(20+Qn),pn=1+.045*At,at=1;at-=.17*Math.cos((Jr-30)*Ia),at+=.24*Math.cos(2*Jr*Ia),at+=.32*Math.cos((3*Jr+6)*Ia),at-=.2*Math.cos((4*Jr-63)*Ia);let Ge=1+.015*At*at,Ur=30*Math.exp(-1*((Jr-275)/25)**2),mn=2*Math.sqrt(go/(go+iv)),vt=-1*Math.sin(2*Ur*Ia)*mn,bn=(ce/(t*ho))**2;return bn+=(Te/(n*pn))**2,bn+=(jr/(o*Ge))**2,bn+=vt*(Te/(n*pn))*(jr/(o*Ge)),Math.sqrt(bn)}i(c5,"deltaE2000");const fC=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],gC=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],hC=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],li=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Vn=new Y({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:dt,fromBase(e){let r=xr(e,fC);return r[0]=Math.cbrt(r[0]),r[1]=Math.cbrt(r[1]),r[2]=Math.cbrt(r[2]),xr(r,hC,r)},toBase(e){let r=xr(e,li);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,xr(r,gC,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Ag(e,r){[e,r]=ue([e,r]);let[t,n,o]=Vn.from(e),[a,s,l]=Vn.from(r),u=t-a,f=n-s,g=o-l;return Math.sqrt(u**2+f**2+g**2)}i(Ag,"deltaEOK");const pC=75e-6;function Hi(e,r,{epsilon:t=pC}={}){e=ue(e),r||(r=e.space),r=Y.get(r);let n=e.coords;return r!==e.space&&(n=r.from(e)),r.inGamut(n,{epsilon:t})}i(Hi,"inGamut$1");function ls(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}i(ls,"clone");function d5(e,r,t="lab"){t=Y.get(t);let n=t.from(e),o=t.from(r);return Math.sqrt(n.reduce((a,s,l)=>{let u=o[l];return Oe(s)||Oe(u)?a:a+(u-s)**2},0))}i(d5,"distance");function mC(e,r){return d5(e,r,"lab")}i(mC,"deltaE76");const bC=Math.PI,lv=bC/180;function vC(e,r,{l:t=2,c:n=1}={}){[e,r]=ue([e,r]);let[o,a,s]=rn.from(e),[,l,u]=sn.from(rn,[o,a,s]),[f,g,h]=rn.from(r),p=sn.from(rn,[f,g,h])[1];l<0&&(l=0),p<0&&(p=0);let b=o-f,v=l-p,$=a-g,C=s-h,E=$**2+C**2-v**2,A=.511;o>=16&&(A=.040975*o/(1+.01765*o));let N=.0638*l/(1+.0131*l)+.638,_;Oe(u)&&(u=0),u>=164&&u<=345?_=.56+Math.abs(.2*Math.cos((u+168)*lv)):_=.36+Math.abs(.4*Math.cos((u+35)*lv));let H=Math.pow(l,4),ce=Math.sqrt(H/(H+1900)),Te=N*(ce*_+1-ce),be=(b/(t*A))**2;return be+=(v/(n*N))**2,be+=E/Te**2,Math.sqrt(be)}i(vC,"deltaECMC");const uv=203;var Qh=new Y({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:dt,fromBase(e){return e.map(r=>r*uv)},toBase(e){return e.map(r=>r/uv)}});const Hu=1.15,Gu=.66,cv=2610/2**14,yC=2**14/2610,dv=3424/2**12,fv=2413/2**7,gv=2392/2**7,wC=1.7*2523/2**5,hv=2**5/(1.7*2523),Zu=-.56,r0=16295499532821565e-27,kC=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],$C=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],xC=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],DC=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var f5=new Y({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Qh,fromBase(e){let[r,t,n]=e,o=Hu*r-(Hu-1)*n,a=Gu*t-(Gu-1)*r,l=xr([o,a,n],kC).map(function(p){let b=dv+fv*Pr(p/1e4,cv),v=1+gv*Pr(p/1e4,cv);return Pr(b/v,wC)}),[u,f,g]=xr(l,xC);return[(1+Zu)*u/(1+Zu*u)-r0,f,g]},toBase(e){let[r,t,n]=e,o=(r+r0)/(1+Zu-Zu*(r+r0)),s=xr([o,t,n],DC).map(function(p){let b=dv-Pr(p,hv),v=gv*Pr(p,hv)-fv;return 1e4*Pr(b/v,yC)}),[l,u,f]=xr(s,$C),g=(l+(Hu-1)*f)/Hu,h=(u+(Gu-1)*g)/Gu;return[g,h,f]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),Fg=new Y({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:f5,fromBase:sn.fromBase,toBase:sn.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function CC(e,r){[e,r]=ue([e,r]);let[t,n,o]=Fg.from(e),[a,s,l]=Fg.from(r),u=t-a,f=n-s;Oe(o)&&Oe(l)?(o=0,l=0):Oe(o)?o=l:Oe(l)&&(l=o);let g=o-l,h=2*Math.sqrt(n*s)*Math.sin(g/2*(Math.PI/180));return Math.sqrt(u**2+f**2+h**2)}i(CC,"deltaEJz");const g5=3424/4096,h5=2413/128,p5=2392/128,pv=2610/16384,EC=2523/32,AC=16384/2610,mv=32/2523,FC=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],SC=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],MC=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],TC=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Sg=new Y({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Qh,fromBase(e){let r=xr(e,FC);return PC(r)},toBase(e){let r=IC(e);return xr(r,TC)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function PC(e){let r=e.map(function(t){let n=g5+h5*(t/1e4)**pv,o=1+p5*(t/1e4)**pv;return(n/o)**EC});return xr(r,SC)}i(PC,"LMStoICtCp");function IC(e){return xr(e,MC).map(function(n){let o=Math.max(n**mv-g5,0),a=h5-p5*n**mv;return 1e4*(o/a)**AC})}i(IC,"ICtCptoLMS");function NC(e,r){[e,r]=ue([e,r]);let[t,n,o]=Sg.from(e),[a,s,l]=Sg.from(r);return 720*Math.sqrt((t-a)**2+.25*(n-s)**2+(o-l)**2)}i(NC,"deltaEITP");function BC(e,r){[e,r]=ue([e,r]);let t=2,[n,o,a]=Vn.from(e),[s,l,u]=Vn.from(r),f=n-s,g=t*(o-l),h=t*(a-u);return Math.sqrt(f**2+g**2+h**2)}i(BC,"deltaEOK2");const OC=Mt.D65,m5=.42,bv=1/m5,t0=2*Math.PI,b5=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],RC=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],LC=[[460,451,288],[460,-891,-261],[460,-220,-6300]],jC={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Li={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},UC=180/Math.PI,vv=Math.PI/180;function v5(e,r){return e.map(n=>{const o=Pr(r*Math.abs(n)*.01,m5);return 400*Fd(o,n)/(o+27.13)})}i(v5,"adapt$1");function _C(e,r){const t=100/r*27.13**bv;return e.map(n=>{const o=Math.abs(n);return Fd(t*Pr(o/(400-o),bv),n)})}i(_C,"unadapt");function zC(e){let r=An(e);r<=Li.h[0]&&(r+=360);const t=i5(Li.h,r)-1,[n,o]=Li.h.slice(t,t+2),[a,s]=Li.e.slice(t,t+2),l=Li.H[t],u=(r-n)/a;return l+100*u/(u+(o-r)/s)}i(zC,"hueQuadrature");function qC(e){let r=(e%400+400)%400;const t=Math.floor(.01*r);r=r%100;const[n,o]=Li.h.slice(t,t+2),[a,s]=Li.e.slice(t,t+2);return An((r*(s*n-a*o)-100*n*s)/(r*(s-a)-100*s))}i(qC,"invHueQuadrature");function y5(e,r,t,n,o){const a={};a.discounting=o,a.refWhite=e,a.surround=n;const s=e.map(C=>C*100);a.la=r,a.yb=t;const l=s[1],u=xr(s,b5);let f=jC[a.surround];const g=f[0];a.c=f[1],a.nc=f[2];const p=(1/(5*a.la+1))**4;a.fl=p*a.la+.1*(1-p)*(1-p)*Math.cbrt(5*a.la),a.flRoot=a.fl**.25,a.n=a.yb/l,a.z=1.48+Math.sqrt(a.n),a.nbb=.725*a.n**-.2,a.ncb=a.nbb;const b=Math.max(Math.min(g*(1-1/3.6*Math.exp((-a.la-42)/92)),1),0);a.dRgb=u.map(C=>ql(1,l/C,b)),a.dRgbInv=a.dRgb.map(C=>1/C);const v=u.map((C,E)=>C*a.dRgb[E]),$=v5(v,a.fl);return a.aW=a.nbb*(2*$[0]+$[1]+.05*$[2]),a}i(y5,"environment");const yv=y5(OC,64/Math.PI*.2,20,"average",!1);function Mg(e,r){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let t=0;e.h!==void 0?t=An(e.h)*vv:t=qC(e.H)*vv;const n=Math.cos(t),o=Math.sin(t);let a=0;e.J!==void 0?a=Pr(e.J,1/2)*.1:e.Q!==void 0&&(a=.25*r.c*e.Q/((r.aW+4)*r.flRoot));let s=0;e.C!==void 0?s=e.C/a:e.M!==void 0?s=e.M/r.flRoot/a:e.s!==void 0&&(s=4e-4*e.s**2*(r.aW+4)/r.c);const l=Pr(s*Math.pow(1.64-Math.pow(.29,r.n),-.73),10/9),u=.25*(Math.cos(t+2)+3.8),f=r.aW*Pr(a,2/r.c/r.z),g=5e4/13*r.nc*r.ncb*u,h=f/r.nbb,p=23*(h+.305)*Yh(l,23*g+l*(11*n+108*o)),b=p*n,v=p*o,$=_C(xr([h,b,v],LC).map(C=>C*1/1403),r.fl);return xr($.map((C,E)=>C*r.dRgbInv[E]),RC).map(C=>C/100)}i(Mg,"fromCam16");function w5(e,r){const t=e.map(N=>N*100),n=v5(xr(t,b5).map((N,_)=>N*r.dRgb[_]),r.fl),o=n[0]+(-12*n[1]+n[2])/11,a=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(a,o)%t0+t0)%t0,l=.25*(Math.cos(s+2)+3.8),u=5e4/13*r.nc*r.ncb*Yh(l*Math.sqrt(o**2+a**2),n[0]+n[1]+1.05*n[2]+.305),f=Pr(u,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),g=r.nbb*(2*n[0]+n[1]+.05*n[2]),h=Pr(g/r.aW,.5*r.c*r.z),p=100*Pr(h,2),b=4/r.c*h*(r.aW+4)*r.flRoot,v=f*h,$=v*r.flRoot,C=An(s*UC),E=zC(C),A=50*Pr(r.c*f/(r.aW+4),1/2);return{J:p,C:v,h:C,s:A,Q:b,M:$,H:E}}i(w5,"toCam16");var VC=new Y({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:dt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const r=w5(e,yv),t=Math.abs(r.M)<this.ε;return[r.J,t?0:r.M,t?null:r.h]},toBase(e){return Mg({J:e[0],M:e[1],h:e[2]},yv)}});const WC=Mt.D65,KC=216/24389,k5=24389/27;function HC(e){return 116*(e>KC?Math.cbrt(e):(k5*e+16)/116)-16}i(HC,"toLstar");function Tg(e){return e>8?Math.pow((e+16)/116,3):e/k5}i(Tg,"fromLstar");function GC(e,r){let[t,n,o]=e,a=[],s=0;if(o===0)return[0,0,0];let l=Tg(o);o>0?s=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:s=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const u=2e-12,f=15;let g=0,h=1/0;for(;g<=f;){a=Mg({J:s,C:n,h:t},r);const p=Math.abs(a[1]-l);if(p<h){if(p<=u)return a;h=p}s=s-(a[1]-l)*s/(2*a[1]),g+=1}return Mg({J:s,C:n,h:t},r)}i(GC,"fromHct");function ZC(e,r){const t=HC(e[1]);if(t===0)return[0,0,0];const n=w5(e,ep);return[An(n.h),n.C,t]}i(ZC,"toHct");const ep=y5(WC,200/Math.PI*Tg(50),Tg(50)*100,"average",!1);var Vl=new Y({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:dt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let r=ZC(e);return r[1]<this.ε&&(r[1]=0,r[0]=null),r},toBase(e){return GC(e,ep)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const YC=Math.PI/180,wv=[1,.007,.0228];function kv(e){e[1]<0&&(e=Vl.fromBase(Vl.toBase(e)));const r=Math.log(Math.max(1+wv[2]*e[1]*ep.flRoot,1))/wv[2],t=e[0]*YC,n=r*Math.cos(t),o=r*Math.sin(t);return[e[2],n,o]}i(kv,"convertUcsAb");function JC(e,r){[e,r]=ue([e,r]);let[t,n,o]=kv(Vl.from(e)),[a,s,l]=kv(Vl.from(r));return Math.sqrt((t-a)**2+(n-s)**2+(o-l)**2)}i(JC,"deltaEHCT");var us={deltaE76:mC,deltaECMC:vC,deltaE2000:c5,deltaEJz:CC,deltaEITP:NC,deltaEOK:Ag,deltaEOK2:BC,deltaEHCT:JC};function XC(e){const r=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${r-2}`),1e-6)}i(XC,"calcEpsilon");const $v={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function hi(e,{method:r=an.gamut_mapping,space:t=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:a=void 0}={}){if(e=ue(e),Es(arguments[1])?t=arguments[1]:t||(t=e.space),t=Y.get(t),Hi(e,t,{epsilon:0}))return e;let s;if(r==="css")s=QC(e,{space:t});else{if(r!=="clip"&&!Hi(e,t)){Object.prototype.hasOwnProperty.call($v,r)&&({method:r,jnd:o,deltaEMethod:n,blackWhiteClamp:a}=$v[r]);let l=c5;if(n!==""){for(let f in us)if("deltae"+n.toLowerCase()===f.toLowerCase()){l=us[f];break}}o===0&&(o=1e-16);let u=hi(rr(e,t),{method:"clip",space:t});if(l(e,u)>o){if(a&&Object.keys(a).length===3){let A=Y.resolveCoord(a.channel),N=en(rr(e,A.space),A.id);if(Oe(N)&&(N=0),N>=a.max)return rr({space:"xyz-d65",coords:Mt.D65},e.space);if(N<=a.min)return rr({space:"xyz-d65",coords:[0,0,0]},e.space)}let f=Y.resolveCoord(r),g=f.space,h=f.id,p=rr(e,g);p.coords.forEach((A,N)=>{Oe(A)&&(p.coords[N]=0)});let v=(f.range||f.refRange)[0],$=XC(o),C=v,E=en(p,h);for(;E-C>$;){let A=ls(p);A=hi(A,{space:t,method:"clip"}),l(p,A)-o<$?C=en(p,h):E=en(p,h),Bo(p,h,(C+E)/2)}s=rr(p,t)}else s=u}else s=rr(e,t);if(r==="clip"||!Hi(s,t,{epsilon:0})){let l=Object.values(t.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,f)=>{let[g,h]=l[f];return g!==void 0&&(u=Math.max(g,u)),h!==void 0&&(u=Math.min(u,h)),u})}}return t!==e.space&&(s=rr(s,e.space)),e.coords=s.coords,e}i(hi,"toGamut");hi.returns="color";const xv={WHITE:{space:Vn,coords:[1,0,0],alpha:1},BLACK:{space:Vn,coords:[0,0,0],alpha:1}};function QC(e,{space:r}={}){e=ue(e),r||(r=e.space),r=Y.get(r);const o=Y.get("oklch");if(r.isUnbounded)return rr(e,r);const a=rr(e,o);let s=a.coords[0];if(s>=1){const v=rr(xv.WHITE,r);return v.alpha=e.alpha,rr(v,r)}if(s<=0){const v=rr(xv.BLACK,r);return v.alpha=e.alpha,rr(v,r)}if(Hi(a,r,{epsilon:0}))return rr(a,r);function l(v){const $=rr(v,r),C=Object.values(r.coords);return $.coords=$.coords.map((E,A)=>{if("range"in C[A]){const[N,_]=C[A].range;return Ad(N,E,_)}return E}),$}i(l,"clip");let u=0,f=a.coords[1],g=!0,h=ls(a),p=l(h),b=Ag(p,h);if(b<.02)return p;for(;f-u>1e-4;){const v=(u+f)/2;if(h.coords[1]=v,g&&Hi(h,r,{epsilon:0}))u=v;else if(p=l(h),b=Ag(p,h),b<.02){if(.02-b<1e-4)break;g=!1,u=v}else f=v}return p}i(QC,"toGamutCSS");function rr(e,r,{inGamut:t}={}){e=ue(e),r=Y.get(r);let n=r.from(e),o={space:r,coords:n,alpha:e.alpha};return t&&(o=hi(o,t===!0?void 0:t)),o}i(rr,"to");rr.returns="color";function El(e,r={}){let{precision:t=an.precision,format:n,inGamut:o=!0,coords:a,alpha:s,commas:l}=r,u,f=ue(e),g=n,h=f.parseMeta;h&&!n&&(h.format.canSerialize()&&(n=h.format,g=h.formatId),a??=h.types,s??=h.alphaType,l??=h.commas),g&&(n=f.space.getFormat(n)??Y.findFormat(g)),n||(n=f.space.getFormat("default")??Y.DEFAULT_FORMAT,g=n.name),n&&n.space&&n.space!==f.space&&(f=rr(f,n.space));let p=f.coords.slice();if(o||=n.toGamut,o&&!Hi(f)&&(p=hi(ls(f),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)u=n.serialize(p,f.alpha,r);else throw new TypeError(`format ${g} can only be used to parse colors, not for serialization`);else{let b=n.name||"color",v=n.serializeCoords(p,t,a);if(b==="color"){let N=n.id||n.ids?.[0]||f.space.cssId||f.space.id;v.unshift(N)}let $=f.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let C=s?.type??"<number>",E=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&$<1,A="";if(l??=n.commas,E){if(t!==null){let N;C==="<percentage>"&&(N="%",$*=100),$=Gh($,{precision:t,unit:N})}A=`${l?",":" /"} ${$}`}u=`${b}(${v.join(l?", ":" ")}${A})`}return u}i(El,"serialize");const eE=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],rE=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Wl=new Ct({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:eE,fromXYZ_M:rE}),$5=new Ct({id:"rec2020",name:"REC.2020",base:Wl,toBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return t*Math.pow(n,2.4)})},fromBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return t*Math.pow(n,1/2.4)})}});const tE=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],nE=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var x5=new Ct({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:tE,fromXYZ_M:nE});const oE=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Zr=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var D5=new Ct({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:oE,fromXYZ_M:Zr}),Dv={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Cv=Array(3).fill("<percentage> | <number>[0, 255]"),Ev=Array(3).fill("<number>[0, 255]");var na=new Ct({id:"srgb",name:"sRGB",base:D5,fromBase:i(e=>e.map(r=>{let t=r<0?-1:1,n=r*t;return n>.0031308?t*(1.055*n**(1/2.4)-.055):12.92*r}),"fromBase"),toBase:i(e=>e.map(r=>{let t=r<0?-1:1,n=r*t;return n<=.04045?r/12.92:t*((n+.055)/1.055)**2.4}),"toBase"),formats:{rgb:{coords:Cv},rgb_number:{name:"rgb",commas:!0,coords:Ev,alpha:!1},color:{},rgba:{coords:Cv,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ev},hex:{type:"custom",toGamut:!0,test:i(e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),"test"),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let r=[];return e.replace(/[a-f0-9]{2}/gi,t=>{r.push(parseInt(t,16)/255)}),{spaceId:"srgb",coords:r.slice(0,3),alpha:r.slice(3)[0]}},serialize:i((e,r,{collapse:t=!0,alpha:n}={})=>{(n!==!1&&r<1||n===!0)&&e.push(r),e=e.map(s=>Math.round(s*255));let o=t&&e.every(s=>s%17===0);return"#"+e.map(s=>o?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")},"serialize")},keyword:{type:"custom",test:i(e=>/^[a-z]+$/i.test(e),"test"),parse(e){e=e.toLowerCase();let r={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(r.coords=Dv.black,r.alpha=0):r.coords=Dv[e],r.coords)return r}}}}),C5=new Ct({id:"p3",cssId:"display-p3",name:"P3",base:x5,fromBase:na.fromBase,toBase:na.toBase});an.display_space=na;let iE;if(typeof CSS<"u"&&CSS.supports)for(let e of[rn,$5,C5]){let r=e.getMinCoords(),n=El({space:e,coords:r,alpha:1});if(CSS.supports("color",n)){an.display_space=e;break}}function aE(e,{space:r=an.display_space,...t}={}){e=ue(e);let n=El(e,t);if(typeof CSS>"u"||CSS.supports("color",n)||!an.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(Oe)||Oe(e.alpha))&&!(iE??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=ls(e),o.coords=o.coords.map(Tr),o.alpha=Tr(o.alpha),n=El(o,t),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=rr(o,r),n=new String(El(o,t)),n.color=o}return n}i(aE,"display");function sE(e,r,{space:t,hue:n="shorter"}={}){e=ue(e),t||=e.space,t=Y.get(t);let o=Object.values(t.coords);[e,r]=[e,r].map(f=>rr(f,t));let[a,s]=[e,r].map(f=>f.coords),l=a.map((f,g)=>{let h=o[g],p=s[g];return h.type==="angle"&&([f,p]=u5(n,[f,p])),Av(f,p)}),u=Av(e.alpha,r.alpha);return{space:t,coords:l,alpha:u}}i(sE,"deltas");function Av(e,r){return Oe(e)||Oe(r)?e===r?null:0:e-r}i(Av,"subtractCoords");function lE(e,r){return e=ue(e),r=ue(r),e.space===r.space&&e.alpha===r.alpha&&e.coords.every((t,n)=>t===r.coords[n])}i(lE,"equals");function pi(e){return en(e,[dt,"y"])}i(pi,"getLuminance");function E5(e,r){Bo(e,[dt,"y"],r)}i(E5,"setLuminance");function uE(e){Object.defineProperty(e.prototype,"luminance",{get(){return pi(this)},set(r){E5(this,r)}})}i(uE,"register$2");var cE=Object.freeze({__proto__:null,getLuminance:pi,register:uE,setLuminance:E5});function dE(e,r){e=ue(e),r=ue(r);let t=Math.max(pi(e),0),n=Math.max(pi(r),0);return n>t&&([t,n]=[n,t]),(t+.05)/(n+.05)}i(dE,"contrastWCAG21");const fE=.56,gE=.57,hE=.62,pE=.65,Fv=.022,mE=1.414,bE=.1,vE=5e-4,yE=1.14,Sv=.027,wE=1.14;function Mv(e){return e>=Fv?e:e+(Fv-e)**mE}i(Mv,"fclamp");function Na(e){let r=e<0?-1:1,t=Math.abs(e);return r*Math.pow(t,2.4)}i(Na,"linearize$3");function kE(e,r){r=ue(r),e=ue(e);let t,n,o,a,s,l;r=rr(r,"srgb"),[a,s,l]=r.coords.map(b=>Oe(b)?0:b);let u=Na(a)*.2126729+Na(s)*.7151522+Na(l)*.072175;e=rr(e,"srgb"),[a,s,l]=e.coords.map(b=>Oe(b)?0:b);let f=Na(a)*.2126729+Na(s)*.7151522+Na(l)*.072175,g=Mv(u),h=Mv(f),p=h>g;return Math.abs(h-g)<vE?n=0:p?(t=h**fE-g**gE,n=t*yE):(t=h**pE-g**hE,n=t*wE),Math.abs(n)<bE?o=0:n>0?o=n-Sv:o=n+Sv,o*100}i(kE,"contrastAPCA");function $E(e,r){e=ue(e),r=ue(r);let t=Math.max(pi(e),0),n=Math.max(pi(r),0);n>t&&([t,n]=[n,t]);let o=t+n;return o===0?0:(t-n)/o}i($E,"contrastMichelson");const xE=5e4;function DE(e,r){e=ue(e),r=ue(r);let t=Math.max(pi(e),0),n=Math.max(pi(r),0);return n>t&&([t,n]=[n,t]),n===0?xE:(t-n)/n}i(DE,"contrastWeber");function CE(e,r){e=ue(e),r=ue(r);let t=en(e,[rn,"l"]),n=en(r,[rn,"l"]);return Math.abs(t-n)}i(CE,"contrastLstar");const EE=216/24389,Tv=24/116,Yu=24389/27;let n0=Mt.D65;var Pg=new Y({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:n0,base:dt,fromBase(e){let t=e.map((n,o)=>n/n0[o]).map(n=>n>EE?Math.cbrt(n):(Yu*n+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let r=[];return r[1]=(e[0]+16)/116,r[0]=e[1]/500+r[1],r[2]=r[1]-e[2]/200,[r[0]>Tv?Math.pow(r[0],3):(116*r[0]-16)/Yu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Yu,r[2]>Tv?Math.pow(r[2],3):(116*r[2]-16)/Yu].map((n,o)=>n*n0[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const o0=Math.pow(5,.5)*.5+.5;function AE(e,r){e=ue(e),r=ue(r);let t=en(e,[Pg,"l"]),n=en(r,[Pg,"l"]),o=Math.abs(Math.pow(t,o0)-Math.pow(n,o0)),a=Math.pow(o,1/o0)*Math.SQRT2-40;return a<7.5?0:a}i(AE,"contrastDeltaPhi");var vc=Object.freeze({__proto__:null,contrastAPCA:kE,contrastDeltaPhi:AE,contrastLstar:CE,contrastMichelson:$E,contrastWCAG21:dE,contrastWeber:DE});function FE(e,r,t){Es(t)&&(t={algorithm:t});let{algorithm:n,...o}=t||{};if(!n){let a=Object.keys(vc).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=ue(e),r=ue(r);for(let a in vc)if("contrast"+n.toLowerCase()===a.toLowerCase())return vc[a](e,r,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}i(FE,"contrast");function Sd(e){let[r,t,n]=bu(e,dt),o=r+15*t+3*n;return[4*r/o,9*t/o]}i(Sd,"uv");function A5(e){let[r,t,n]=bu(e,dt),o=r+t+n;return[r/o,t/o]}i(A5,"xy");function SE(e){Object.defineProperty(e.prototype,"uv",{get(){return Sd(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return A5(this)}})}i(SE,"register$1");var ME=Object.freeze({__proto__:null,register:SE,uv:Sd,xy:A5});function hl(e,r,t={}){Es(t)&&(t={method:t});let{method:n=an.deltaE,...o}=t;for(let a in us)if("deltae"+n.toLowerCase()===a.toLowerCase())return us[a](e,r,o);throw new TypeError(`Unknown deltaE method: ${n}`)}i(hl,"deltaE");function F5(e,r=.25){let n=[Y.get("oklch","lch"),"l"];return Bo(e,n,o=>o*(1+r))}i(F5,"lighten");function S5(e,r=.25){let n=[Y.get("oklch","lch"),"l"];return Bo(e,n,o=>o*(1-r))}i(S5,"darken");F5.returns="color";S5.returns="color";var TE=Object.freeze({__proto__:null,darken:S5,lighten:F5});function M5(e,r,t,n={}){return[e,r]=[ue(e),ue(r)],si(t)==="object"&&([t,n]=[.5,t]),vu(e,r,n)(t??.5)}i(M5,"mix");function T5(e,r,t={}){let n;rp(e)&&([n,t]=[e,r],[e,r]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:l=1e3,...u}=t;n||([e,r]=[ue(e),ue(r)],n=vu(e,r,u));let f=hl(e,r),g=o>0?Math.max(s,Math.ceil(f/o)+1):s,h=[];if(l!==void 0&&(g=Math.min(g,l)),g===1)h=[{p:.5,color:n(.5)}];else{let p=1/(g-1);h=Array.from({length:g},(b,v)=>{let $=v*p;return{p:$,color:n($)}})}if(o>0){let p=h.reduce((b,v,$)=>{if($===0)return 0;let C=hl(v.color,h[$-1].color,a);return Math.max(b,C)},0);for(;p>o;){p=0;for(let b=1;b<h.length&&h.length<l;b++){let v=h[b-1],$=h[b],C=($.p+v.p)/2,E=n(C);p=Math.max(p,hl(E,v.color),hl(E,$.color)),h.splice(b,0,{p:C,color:n(C)}),b++}}}return h=h.map(p=>p.color),h}i(T5,"steps");function vu(e,r,t={}){if(rp(e)){let[u,f]=[e,r];return vu(...u.rangeArgs.colors,{...u.rangeArgs.options,...f})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=t;e=ue(e),r=ue(r),e=ls(e),r=ls(r);let l={colors:[e,r],options:t};if(n?n=Y.get(n):n=Y.registry[an.interpolationSpace]||e.space,o=o?Y.get(o):n,e=rr(e,n),r=rr(r,n),e=hi(e),r=hi(r),n.coords.h&&n.coords.h.type==="angle"){let u=t.hue=t.hue||"shorter",f=[n,"h"],[g,h]=[en(e,f),en(r,f)];Oe(g)&&!Oe(h)?g=h:Oe(h)&&!Oe(g)&&(h=g),[g,h]=u5(u,[g,h]),Bo(e,f,g),Bo(r,f,h)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),r.coords=r.coords.map(u=>u*r.alpha)),Object.assign(u=>{u=a?a(u):u;let f=e.coords.map((p,b)=>{let v=r.coords[b];return ql(p,v,u)}),g=ql(e.alpha,r.alpha,u),h={space:n,coords:f,alpha:g};return s&&(h.coords=h.coords.map(p=>p/g)),o!==n&&(h=rr(h,o)),h},{rangeArgs:l})}i(vu,"range");function rp(e){return si(e)==="function"&&!!e.rangeArgs}i(rp,"isRange");an.interpolationSpace="lab";function PE(e){e.defineFunction("mix",M5,{returns:"color"}),e.defineFunction("range",vu,{returns:"function<color>"}),e.defineFunction("steps",T5,{returns:"array<color>"})}i(PE,"register");var IE=Object.freeze({__proto__:null,isRange:rp,mix:M5,range:vu,register:PE,steps:T5}),NE=new Y({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:na,fromBase:i(e=>{let r=Math.max(...e),t=Math.min(...e),[n,o,a]=e,[s,l,u]=[null,0,(t+r)/2],f=r-t;if(f!==0){switch(l=u===0||u===1?0:(r-u)/Math.min(u,1-u),r){case n:s=(o-a)/f+(o<a?6:0);break;case o:s=(a-n)/f+2;break;case a:s=(n-o)/f+4}s=s*60}return l<0&&(s+=180,l=Math.abs(l)),s>=360&&(s-=360),[s,l*100,u*100]},"fromBase"),toBase:i(e=>{let[r,t,n]=e;r=r%360,r<0&&(r+=360),t/=100,n/=100;function o(a){let s=(a+r/30)%12,l=t*Math.min(n,1-n);return n-l*Math.max(-1,Math.min(s-3,9-s,1))}return i(o,"f"),[o(0),o(8),o(4)]},"toBase"),formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),P5=new Y({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:na,fromBase(e){let r=Math.max(...e),t=Math.min(...e),[n,o,a]=e,[s,l,u]=[null,0,r],f=r-t;if(f!==0){switch(r){case n:s=(o-a)/f+(o<a?6:0);break;case o:s=(a-n)/f+2;break;case a:s=(n-o)/f+4}s=s*60}return u&&(l=f/u),s>=360&&(s-=360),[s,l*100,u*100]},toBase(e){let[r,t,n]=e;r=r%360,r<0&&(r+=360),t/=100,n/=100;function o(a){let s=(a+r/60)%6;return n-n*t*Math.max(0,Math.min(s,4-s,1))}return i(o,"f"),[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),BE=new Y({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:P5,fromBase(e){let[r,t,n]=e;return[r,n*(100-t)/100,100-n]},toBase(e){let[r,t,n]=e;t/=100,n/=100;let o=t+n;if(o>=1){let l=t/o;return[r,0,l*100]}let a=1-n,s=a===0?0:1-t/a;return[r,s*100,a*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const OE=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],RE=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var I5=new Ct({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:OE,fromXYZ_M:RE}),LE=new Ct({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:I5,toBase:i(e=>e.map(r=>Math.pow(Math.abs(r),563/256)*Math.sign(r)),"toBase"),fromBase:i(e=>e.map(r=>Math.pow(Math.abs(r),256/563)*Math.sign(r)),"fromBase")});const jE=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],UE=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var N5=new Ct({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Xh,toXYZ_M:jE,fromXYZ_M:UE});const _E=1/512,zE=16/512;var qE=new Ct({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:N5,toBase(e){return e.map(r=>{let t=r<0?-1:1,n=r*t;return n<zE?r/16:t*n**1.8})},fromBase(e){return e.map(r=>{let t=r<0?-1:1,n=r*t;return n>=_E?t*n**(1/1.8):16*r})}});const Ju=1.09929682680944,Pv=.018053968510807;var VE=new Ct({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Wl,referred:"scene",toBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return n<Pv*4.5?r/4.5:t*Math.pow((n+Ju-1)/Ju,1/.45)})},fromBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return n>=Pv?t*(Ju*Math.pow(n,.45)-(Ju-1)):4.5*r})}}),WE=new Y({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Vn,fromBase:sn.fromBase,toBase:sn.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const cs=2*Math.PI,zc=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],qc=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],i0=Number.MAX_VALUE,Al=.206,tp=.03,pl=(1+Al)/(1+tp);function st(e,r){let t=e.length;if(t!==r.length)throw new Error(`Vectors of size ${t} and ${r.length} are not aligned`);let n=0;return e.forEach((o,a)=>{n+=o*r[a]}),n}i(st,"vdot");function Fl(e){return .5*(pl*e-Al+Math.sqrt((pl*e-Al)*(pl*e-Al)+4*tp*pl*e))}i(Fl,"toe$1");function Ya(e){return(e**2+Al*e)/(pl*(e+tp))}i(Ya,"toeInv");function np(e){let[r,t]=e;return[t/r,t/(1-r)]}i(np,"toSt");function KE(e,r){let t=.11516993+1/(7.4477897+4.1590124*r+e*(-2.19557347+1.75198401*r+e*(-2.13704948-10.02301043*r+e*(-4.24894561+5.38770819*r+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*r+e*(.40370612+.90148123*r+e*(-.27087943+.6122399*r+e*(.00299215-.45399568*r-.14661872*e))));return[t,n]}i(KE,"getStMid");function op(e,r){let t=xr(e,li);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,xr(t,r,t)}i(op,"oklabToLinearRGB");function Md(e,r,t,n){let o=GE(e,r,t,n),a=op([1,o*e,o*r],t),s=Pr(1/Math.max(...a),1/3),l=s*o;return[s,l]}i(Md,"findCusp");function HE(e,r,t,n,o,a,s,l){let u;if(l===void 0&&(l=Md(e,r,a,s)),(t-o)*l[1]-(l[0]-o)*n<=0)u=l[1]*o/(n*l[0]+l[1]*(o-t));else{u=l[1]*(o-1)/(n*(l[0]-1)+l[1]*(o-t));let f=t-o,g=n,h=st(li[0].slice(1),[e,r]),p=st(li[1].slice(1),[e,r]),b=st(li[2].slice(1),[e,r]),v=f+g*h,$=f+g*p,C=f+g*b,E=o*(1-u)+u*t,A=u*n,N=E+A*h,_=E+A*p,H=E+A*b,ce=N**3,Te=_**3,be=H**3,Se=3*v*N**2,or=3*$*_**2,ir=3*C*H**2,jr=6*v**2*N,Zt=6*$**2*_,At=6*C**2*H,go=st(a[0],[ce,Te,be])-1,Jr=st(a[0],[Se,or,ir]),Qn=st(a[0],[jr,Zt,At]),ho=Jr/(Jr*Jr-.5*go*Qn),pn=-go*ho,at=st(a[1],[ce,Te,be])-1,Ge=st(a[1],[Se,or,ir]),Ur=st(a[1],[jr,Zt,At]),mn=Ge/(Ge*Ge-.5*at*Ur),vt=-at*mn,bn=st(a[2],[ce,Te,be])-1,Pn=st(a[2],[Se,or,ir]),zo=st(a[2],[jr,Zt,At]),Ou=Pn/(Pn*Pn-.5*bn*zo),Sa=-bn*Ou;pn=ho>=0?pn:i0,vt=mn>=0?vt:i0,Sa=Ou>=0?Sa:i0,u+=Math.min(pn,Math.min(vt,Sa))}return u}i(HE,"findGamutIntersection");function B5(e,r,t){let[n,o,a]=e,s=Md(o,a,r,t),l=HE(o,a,n,1,n,r,t,s),u=np(s),f=l/Math.min(n*u[0],(1-n)*u[1]),g=KE(o,a),h=n*g[0],p=(1-n)*g[1],b=.9*f*Math.sqrt(Math.sqrt(1/(1/h**4+1/p**4)));return h=n*.4,p=(1-n)*.8,[Math.sqrt(1/(1/h**2+1/p**2)),b,l]}i(B5,"getCs");function GE(e,r,t,n){let o,a,s,l,u,f,g,h;st(n[0][0],[e,r])>1?([o,a,s,l,u]=n[0][1],[f,g,h]=t[0]):st(n[1][0],[e,r])>1?([o,a,s,l,u]=n[1][1],[f,g,h]=t[1]):([o,a,s,l,u]=n[2][1],[f,g,h]=t[2]);let p=o+a*e+s*r+l*e**2+u*e*r,b=st(li[0].slice(1),[e,r]),v=st(li[1].slice(1),[e,r]),$=st(li[2].slice(1),[e,r]),C=1+p*b,E=1+p*v,A=1+p*$,N=C**3,_=E**3,H=A**3,ce=3*b*C**2,Te=3*v*E**2,be=3*$*A**2,Se=6*b**2*C,or=6*v**2*E,ir=6*$**2*A,jr=f*N+g*_+h*H,Zt=f*ce+g*Te+h*be,At=f*Se+g*or+h*ir;return p=p-jr*Zt/(Zt**2-.5*jr*At),p}i(GE,"computeMaxSaturation");function ZE(e,r,t){let[n,o,a]=e,s=Ya(a),l=null,u=null;if(n=An(n)/360,s!==0&&s!==1&&o!==0){let f=Math.cos(cs*n),g=Math.sin(cs*n),[h,p,b]=B5([s,f,g],r,t),v=.8,$=1.25,C,E,A,N;o<v?(C=$*o,E=0,A=v*h,N=1-A/p):(C=5*(o-.8),E=p,A=.2*p**2*1.25**2/h,N=1-A/(b-p));let _=E+C*A/(1-N*C);l=_*f,u=_*g}return[s,l,u]}i(ZE,"okhslToOklab");function YE(e,r,t){let n=1e-7,o=1e-4,a=e[0],s=0,l=Fl(a),u=Math.sqrt(e[1]**2+e[2]**2),f=.5+Math.atan2(-e[2],-e[1])/cs;if(l!==0&&l!==1&&u!==0){let h=e[1]/u,p=e[2]/u,[b,v,$]=B5([a,h,p],r,t),C=.8,E=1.25,A,N,_,H;u<v?(N=C*b,_=1-N/v,H=u/(N+_*u),s=H*C):(A=v,N=.2*v**2*E**2/b,_=1-N/($-v),H=(u-A)/(N+_*(u-A)),s=C+.2*H)}const g=Math.abs(s)<o;return g||l===0||Math.abs(1-l)<n?(f=null,g||(s=0)):f=An(f*360),[f,s,l]}i(YE,"oklabToOkhsl");var JE=new Y({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Vn,gamutSpace:"self",fromBase(e){return YE(e,zc,qc)},toBase(e){return ZE(e,zc,qc)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),O5=new Y({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Vn,fromBase(e){return[Fl(e[0]),e[1],e[2]]},toBase(e){return[Ya(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),XE=new Y({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:O5,fromBase:sn.fromBase,toBase:sn.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function QE(e,r,t){let[n,o,a]=e;n=An(n)/360;let s=Ya(a),l=null,u=null;if(s!==0&&o!==0){let f=Math.cos(cs*n),g=Math.sin(cs*n),h=Md(f,g,r,t),[p,b]=np(h),v=.5,$=1-v/p,C=1-o*v/(v+b-b*$*o),E=o*b*v/(v+b-b*$*o);s=a*C;let A=a*E,N=Ya(C),_=E*N/C,H=Ya(s);A=A*H/s,s=H;let[ce,Te,be]=op([N,f*_,g*_],r),Se=Pr(1/Math.max(Math.max(ce,Te),Math.max(be,0)),1/3);s=s*Se,A=A*Se,l=A*f,u=A*g}return[s,l,u]}i(QE,"okhsvToOklab");function eA(e,r,t){let n=1e-4,o=e[0],a=0,s=Fl(o),l=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/cs;if(o!==0&&o!==1&&l!==0){let f=e[1]/l,g=e[2]/l,h=Md(f,g,r,t),[p,b]=np(h),v=.5,$=1-v/p,C=b/(l+o*b),E=C*o,A=C*l,N=Ya(E),_=A*N/E,[H,ce,Te]=op([N,f*_,g*_],r),be=Pr(1/Math.max(Math.max(H,ce),Math.max(Te,0)),1/3);o=o/be,l=l/be,l=l*Fl(o)/o,o=Fl(o),s=o/E,a=(v+b)*A/(b*v+b*$*A)}return Math.abs(a)<n||s===0?u=null:u=An(u*360),[u,a,s]}i(eA,"oklabToOkhsv");var rA=new Y({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Vn,gamutSpace:"self",fromBase(e){return eA(e,zc,qc)},toBase(e){return QE(e,zc,qc)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let R5=Mt.D65;const tA=216/24389,Iv=24389/27,[Nv,Bv]=Sd({space:dt,coords:R5});var L5=new Y({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:R5,base:dt,fromBase(e){let r=[Tr(e[0]),Tr(e[1]),Tr(e[2])],t=r[1],[n,o]=Sd({space:dt,coords:r});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let a=t<=tA?Iv*t:116*Math.cbrt(t)-16;return[a,13*a*(n-Nv),13*a*(o-Bv)]},toBase(e){let[r,t,n]=e;if(r===0||Oe(r))return[0,0,0];t=Tr(t),n=Tr(n);let o=t/(13*r)+Nv,a=n/(13*r)+Bv,s=r<=8?r/Iv:Math.pow((r+16)/116,3);return[s*(9*o/(4*a)),s,s*((12-3*o-20*a)/(4*a))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),ip=new Y({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:L5,fromBase:sn.fromBase,toBase:sn.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const nA=216/24389,oA=24389/27,Ov=Zr[0][0],Rv=Zr[0][1],a0=Zr[0][2],Lv=Zr[1][0],jv=Zr[1][1],s0=Zr[1][2],Uv=Zr[2][0],_v=Zr[2][1],l0=Zr[2][2];function Ba(e,r,t){const n=r/(Math.sin(t)-e*Math.cos(t));return n<0?1/0:n}i(Ba,"distanceFromOriginAngle");function Vc(e){const r=Math.pow(e+16,3)/1560896,t=r>nA?r:e/oA,n=t*(284517*Ov-94839*a0),o=t*(838422*a0+769860*Rv+731718*Ov),a=t*(632260*a0-126452*Rv),s=t*(284517*Lv-94839*s0),l=t*(838422*s0+769860*jv+731718*Lv),u=t*(632260*s0-126452*jv),f=t*(284517*Uv-94839*l0),g=t*(838422*l0+769860*_v+731718*Uv),h=t*(632260*l0-126452*_v);return{r0s:n/a,r0i:o*e/a,r1s:n/(a+126452),r1i:(o-769860)*e/(a+126452),g0s:s/u,g0i:l*e/u,g1s:s/(u+126452),g1i:(l-769860)*e/(u+126452),b0s:f/h,b0i:g*e/h,b1s:f/(h+126452),b1i:(g-769860)*e/(h+126452)}}i(Vc,"calculateBoundingLines");function zv(e,r){const t=r/360*Math.PI*2,n=Ba(e.r0s,e.r0i,t),o=Ba(e.r1s,e.r1i,t),a=Ba(e.g0s,e.g0i,t),s=Ba(e.g1s,e.g1i,t),l=Ba(e.b0s,e.b0i,t),u=Ba(e.b1s,e.b1i,t);return Math.min(n,o,a,s,l,u)}i(zv,"calcMaxChromaHsluv");var iA=new Y({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ip,gamutSpace:na,fromBase(e){let[r,t,n]=[Tr(e[0]),Tr(e[1]),Tr(e[2])],o;if(r>99.9999999)o=0,r=100;else if(r<1e-8)o=0,r=0;else{let a=Vc(r),s=zv(a,n);o=t/s*100}return[n,o,r]},toBase(e){let[r,t,n]=[Tr(e[0]),Tr(e[1]),Tr(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let a=Vc(n);o=zv(a,r)/100*t}return[n,o,r]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Zr[0][0];Zr[0][1];Zr[0][2];Zr[1][0];Zr[1][1];Zr[1][2];Zr[2][0];Zr[2][1];Zr[2][2];function Oa(e,r){return Math.abs(r)/Math.sqrt(Math.pow(e,2)+1)}i(Oa,"distanceFromOrigin");function qv(e){let r=Oa(e.r0s,e.r0i),t=Oa(e.r1s,e.r1i),n=Oa(e.g0s,e.g0i),o=Oa(e.g1s,e.g1i),a=Oa(e.b0s,e.b0i),s=Oa(e.b1s,e.b1i);return Math.min(r,t,n,o,a,s)}i(qv,"calcMaxChromaHpluv");var aA=new Y({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ip,gamutSpace:"self",fromBase(e){let[r,t,n]=[Tr(e[0]),Tr(e[1]),Tr(e[2])],o;if(r>99.9999999)o=0,r=100;else if(r<1e-8)o=0,r=0;else{let a=Vc(r),s=qv(a);o=t/s*100}return[n,o,r]},toBase(e){let[r,t,n]=[Tr(e[0]),Tr(e[1]),Tr(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let a=Vc(n);o=qv(a)/100*t}return[n,o,r]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),ap=new Ct({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:Wl.toBase,fromBase:Wl.fromBase});const Vv=203,Wv=2610/2**14,sA=2**14/2610,lA=2523/2**5,Kv=2**5/2523,Hv=3424/2**12,Gv=2413/2**7,Zv=2392/2**7;var uA=new Ct({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:ap,toBase(e){return e.map(function(r){return(Math.max(r**Kv-Hv,0)/(Gv-Zv*r**Kv))**sA*1e4/Vv})},fromBase(e){return e.map(function(r){let t=Math.max(r*Vv/1e4,0),n=Hv+Gv*t**Wv,o=1+Zv*t**Wv;return(n/o)**lA})}});const Yv=.17883277,Jv=.28466892,Xv=.55991073,u0=3.7743;var cA=new Ct({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:ap,toBase(e){return e.map(function(r){return r<=.5?r**2/3*u0:(Math.exp((r-Xv)/Yv)+Jv)/12*u0})},fromBase(e){return e.map(function(r){return r/=u0,r<=1/12?Pr(3*r,.5):Yv*Math.log(12*r-Jv)+Xv})}});const j5={};gi.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=U5(e.W1,e.W2,e.options.method))});gi.add("chromatic-adaptation-end",e=>{e.M||(e.M=U5(e.W1,e.W2,e.options.method))});function Td({id:e,toCone_M:r,fromCone_M:t}){j5[e]=arguments[0]}i(Td,"defineCAT");function U5(e,r,t="Bradford"){let n=j5[t],[o,a,s]=gl(n.toCone_M,e),[l,u,f]=gl(n.toCone_M,r),g=[[l/o,0,0],[0,u/a,0],[0,0,f/s]],h=gl(g,n.toCone_M);return gl(n.fromCone_M,h)}i(U5,"adapt");Td({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Td({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Td({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Td({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Mt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Mt.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const dA=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fA=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var _5=new Ct({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Mt.ACES,toXYZ_M:dA,fromXYZ_M:fA});const Xu=2**-16,c0=-.35828683,Qu=(Math.log2(65504)+9.72)/17.52;var gA=new Ct({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[c0,Qu],name:"Red"},g:{range:[c0,Qu],name:"Green"},b:{range:[c0,Qu],name:"Blue"}},referred:"scene",base:_5,toBase(e){const r=-.3013698630136986;return e.map(function(t){return t<=r?(2**(t*17.52-9.72)-Xu)*2:t<Qu?2**(t*17.52-9.72):65504})},fromBase(e){return e.map(function(r){return r<=0?(Math.log2(Xu)+9.72)/17.52:r<Xu?(Math.log2(Xu+r*.5)+9.72)/17.52:(Math.log2(r)+9.72)/17.52})}}),Qv=Object.freeze({__proto__:null,A98RGB:LE,A98RGB_Linear:I5,ACEScc:gA,ACEScg:_5,CAM16_JMh:VC,HCT:Vl,HPLuv:aA,HSL:NE,HSLuv:iA,HSV:P5,HWB:BE,ICTCP:Sg,JzCzHz:Fg,Jzazbz:f5,LCH:sn,LCHuv:ip,Lab:rn,Lab_D65:Pg,Luv:L5,OKLCH:WE,OKLab:Vn,OKLrCH:XE,OKLrab:O5,Okhsl:JE,Okhsv:rA,P3:C5,P3_Linear:x5,ProPhoto:qE,ProPhoto_Linear:N5,REC_2020:$5,REC_2020_Linear:Wl,REC_2020_Scene_Referred:VE,REC_2100_HLG:cA,REC_2100_Linear:ap,REC_2100_PQ:uA,XYZ_ABS_D65:Qh,XYZ_D50:Xh,XYZ_D65:dt,sRGB:na,sRGB_Linear:D5});let tr=class Rt{static{i(this,"Color")}constructor(...r){let t;if(r.length===1){let s={};typeof r[0]=="object"&&Object.getPrototypeOf(r[0]).constructor===Object&&(r[0]={...r[0]}),t=ue(r[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,o,a;t?(n=t.space||t.spaceId,o=t.coords,a=t.alpha):[n,o,a]=r,Object.defineProperty(this,"space",{value:Y.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=Oe(a)?a:a===void 0?1:Ad(0,a,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:i(()=>this.get(s),"get"),set:i(l=>this.set(s,l),"set")})}get spaceId(){return this.space.id}clone(){return new Rt(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...r){let t=aE(this,...r);return t.color=new Rt(t.color),t}static get(r,...t){return ss(r,this)?r:new Rt(r,...t)}static try(r,t){if(ss(r,this))return r;let n=l5(r,t);return n?new Rt(n):null}static defineFunction(r,t,n=t){let{instance:o=!0,returns:a}=n,s=i(function(...l){let u=t(...l);if(a==="color")u=Rt.get(u);else if(a==="function<color>"){let f=u;u=i(function(...g){let h=f(...g);return Rt.get(h)},"ret"),Object.assign(u,f)}else a==="array<color>"&&(u=u.map(f=>Rt.get(f)));return u},"func");r in Rt||(Rt[r]=s),o&&(Rt.prototype[r]=function(...l){return s(this,...l)})}static defineFunctions(r){for(let t in r)Rt.defineFunction(t,r[t],r[t])}static extend(r){if(r.register)r.register(Rt);else for(let t in r)Rt.defineFunction(t,r[t])}};tr.defineFunctions({get:en,getAll:bu,set:Bo,setAll:Jh,to:rr,equals:lE,inGamut:Hi,toGamut:hi,distance:d5,deltas:sE,toString:El});Object.assign(tr,{util:iC,hooks:gi,WHITES:Mt,Space:Y,spaces:Y.registry,parse:a5,defaults:an});for(let e of Object.keys(Qv))Y.register(Qv[e]);for(let e in Y.registry)Ig(e,Y.registry[e]);gi.add("colorspace-init-end",e=>{Ig(e.id,e),e.aliases?.forEach(r=>{Ig(r,e)})});function Ig(e,r){let t=e.replace(/-/g,"_");Object.defineProperty(tr.prototype,t,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:i(((a,s)=>{try{return Y.resolveCoord([r,s]),!0}catch{}return Reflect.has(a,s)}),"has"),get:i((a,s,l)=>{if(s&&typeof s!="symbol"&&!(s in a)&&s in o){let{index:u}=Y.resolveCoord([r,s]);if(u>=0)return a[u]}return Reflect.get(a,s,l)},"get"),set:i((a,s,l,u)=>{if(s&&typeof s!="symbol"&&!(s in a)||Number(s)>=0){let{index:f}=Y.resolveCoord([r,s]);if(f>=0)return a[f]=l,this.setAll(e,a),!0}return Reflect.set(a,s,l,u)},"set")});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}i(Ig,"addSpaceAccessors");tr.extend(us);tr.extend({deltaE:hl});Object.assign(tr,{deltaEMethods:us});tr.extend(TE);tr.extend({contrast:FE});tr.extend(ME);tr.extend(cE);tr.extend(IE);tr.extend(vc);const z5=Symbol("no update");function ey(e){return e!==z5}i(ey,"isNotNoUpdate");class d0 extends Ht()("observable-value-update"){static{i(this,"ObservableValueUpdateEvent")}}class hA extends Ht()("observable-value-resolve"){static{i(this,"ObservableValueResolveEvent")}}class pA extends Ht()("observable-value-error"){static{i(this,"ObservableValueErrorEvent")}}class mA extends xd("observable-destroy"){static{i(this,"ObservableDestroyEvent")}}class bA extends xd("observable-callback-call"){static{i(this,"ObservableCallbackCallEvent")}}class vA extends Ht()("observable-params-update"){static{i(this,"ObservableParamsUpdateEvent")}}class q5{static{i(this,"AnyObservable")}listenTarget=new mu;value;equalityCheck;listenerMap=new WeakMap;dispatch(...r){return this.listenTarget.dispatch(...r)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...r){const t=r[0];if(t===z5)return!1;if(!(r.length===2?r[1]:this.equalityCheck)?.(this.value,t)){const o=this.value;return this.value=t,this.listenTarget.dispatch(new d0({detail:[t,o]})),!0}return!1}listen(r,t){const n=i(o=>t(...o.detail),"mapped");return this.listenerMap.set(t,n),r&&t(this.value,void 0),this.listenTarget.listen(d0,n)}removeListener(r){const t=this.listenerMap.get(r);return!!t&&this.listenTarget.removeListener(d0,t)}destroy(){this.listenTarget.dispatch(new mA),this.listenTarget.destroy()}listenToEvent(r,t,n){return this.listenTarget.listen(r,t,n)}}function sp(e,r){return pD(e,r,(t,n)=>M.isFunction(t)&&M.isFunction(n)?!0:M.strictEquals(t,n))}i(sp,"observableEqualityCheck");var Sl;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Sl||(Sl={}));class yA extends q5{static{i(this,"AsyncObservable")}equalityCheck;waitingForValueDeferredPromise=new Ac;lastSetPromise;lastSetId=Io();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(r={}){super(),this.equalityCheck="equalityCheck"in r?r.equalityCheck:sp,"defaultValue"in r&&this.setValue(r.defaultValue)}setPromise(r){if(r===this.lastSetPromise)return!1;const t=Io();return this.lastSetId=t,this.lastSetPromise=r,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Ac,super.setValue(this.waitingForValueDeferredPromise.promise,M.strictEquals)),r.then(n=>{this.lastSetPromise!==r||this.lastSetId!==t||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==r||this.lastSetId!==t)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=Dr(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(r){return ey(r)||(r=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(r,M.strictEquals):super.setValue(r))?(this.lastResolvedValue=r,this.lastSetId=Io(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(r),this.dispatch(new hA({detail:r})),!0):!1}rejectValue(r){this.waitingForValueDeferredPromise.reject(r),super.setValue(r,M.strictEquals),this.dispatch(new pA({detail:r}))}setValue(r){try{return r instanceof Promise?this.setPromise(r):r instanceof Error?(this.rejectValue(r),!0):ey(r)?this.resolveValue(r):!1}catch(t){return this.rejectValue(Dr(t)),!0}}listen(r,t){return super.listen(r,t)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?Sl.Rejected:this.value instanceof Promise?Sl.Waiting:Sl.Resolved}}class za extends yA{static{i(this,"CallbackObservable")}static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==za.NotSet)return this.internalParams}internalParams;constructor(r={}){super(r),this.equalityCheck="equalityCheck"in r?r.equalityCheck:sp,this.updateCallback=r.updateCallback,this.internalParams="defaultParams"in r?r.defaultParams:za.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===za.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(r){return this.setValue(Dr(r))}finally{this.dispatch(new bA)}}updateLastParams(r){try{return this.internalParams===za.NotSet||!this.equalityCheck?.(r,this.internalParams)?(this.internalParams=r,this.dispatch(new vA({detail:this.internalParams})),!0):!1}catch(t){return this.setValue(Dr(t)),!1}}update(...[r]){return this.updateLastParams(r)?(this.updateFromCallback(),!0):!1}setParams(r){return this.updateLastParams(r)}forceUpdate(...r){return M.isLengthAtLeast(r,1)&&this.updateLastParams(r[0]),this.updateFromCallback()}}function wA(e){return Or(e)&&!Gt(e)&&!wu(e)&&Symbol.asyncIterator in e}i(wA,"IsAsyncIterator$3");function Gt(e){return Array.isArray(e)}i(Gt,"IsArray$3");function V5(e){return typeof e=="bigint"}i(V5,"IsBigInt$3");function yu(e){return typeof e=="boolean"}i(yu,"IsBoolean$3");function lp(e){return e instanceof globalThis.Date}i(lp,"IsDate$3");function kA(e){return typeof e=="function"}i(kA,"IsFunction$3");function $A(e){return Or(e)&&!Gt(e)&&!wu(e)&&Symbol.iterator in e}i($A,"IsIterator$3");function xA(e){return e===null}i(xA,"IsNull$3");function lo(e){return typeof e=="number"}i(lo,"IsNumber$3");function Or(e){return typeof e=="object"&&e!==null}i(Or,"IsObject$3");function W5(e){return e instanceof globalThis.RegExp}i(W5,"IsRegExp$2");function Fr(e){return typeof e=="string"}i(Fr,"IsString$3");function DA(e){return typeof e=="symbol"}i(DA,"IsSymbol$3");function wu(e){return e instanceof globalThis.Uint8Array}i(wu,"IsUint8Array$3");function Ir(e){return e===void 0}i(Ir,"IsUndefined$3");function CA(e){return e.map(r=>Wc(r))}i(CA,"ArrayType$1");function EA(e){return new Date(e.getTime())}i(EA,"DateType$1");function AA(e){return new Uint8Array(e)}i(AA,"Uint8ArrayType$1");function FA(e){return new RegExp(e.source,e.flags)}i(FA,"RegExpType");function SA(e){const r={};for(const t of Object.getOwnPropertyNames(e))r[t]=Wc(e[t]);for(const t of Object.getOwnPropertySymbols(e))r[t]=Wc(e[t]);return r}i(SA,"ObjectType$1");function Wc(e){return Gt(e)?CA(e):lp(e)?EA(e):wu(e)?AA(e):W5(e)?FA(e):Or(e)?SA(e):e}i(Wc,"Visit$8");function ln(e){return Wc(e)}i(ln,"Clone");function up(e,r){return ln(r===void 0?e:{...r,...e})}i(up,"CloneType");function K5(e){return uo(e)&&globalThis.Symbol.asyncIterator in e}i(K5,"IsAsyncIterator$2");function H5(e){return uo(e)&&globalThis.Symbol.iterator in e}i(H5,"IsIterator$2");function G5(e){return e instanceof globalThis.Promise}i(G5,"IsPromise$2");function cp(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}i(cp,"IsDate$2");function dp(e){return e instanceof globalThis.Uint8Array}i(dp,"IsUint8Array$2");function Z5(e,r){return r in e}i(Z5,"HasPropertyKey");function uo(e){return e!==null&&typeof e=="object"}i(uo,"IsObject$2");function un(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}i(un,"IsArray$2");function $i(e){return e===void 0}i($i,"IsUndefined$2");function Pd(e){return e===null}i(Pd,"IsNull$2");function Id(e){return typeof e=="boolean"}i(Id,"IsBoolean$2");function pe(e){return typeof e=="number"}i(pe,"IsNumber$2");function Y5(e){return globalThis.Number.isInteger(e)}i(Y5,"IsInteger$2");function Do(e){return typeof e=="bigint"}i(Do,"IsBigInt$2");function nn(e){return typeof e=="string"}i(nn,"IsString$2");function J5(e){return typeof e=="function"}i(J5,"IsFunction$2");function Nd(e){return typeof e=="symbol"}i(Nd,"IsSymbol$2");function X5(e){return Do(e)||Id(e)||Pd(e)||pe(e)||nn(e)||Nd(e)||$i(e)}i(X5,"IsValueType");var Ar;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function r(s,l){return e.ExactOptionalPropertyTypes?l in s:s[l]!==void 0}i(r,"IsExactOptionalProperty"),e.IsExactOptionalProperty=r;function t(s){const l=uo(s);return e.AllowArrayObject?l:l&&!un(s)}i(t,"IsObjectLike"),e.IsObjectLike=t;function n(s){return t(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}i(n,"IsRecordLike"),e.IsRecordLike=n;function o(s){return e.AllowNaN?pe(s):Number.isFinite(s)}i(o,"IsNumberLike"),e.IsNumberLike=o;function a(s){const l=$i(s);return e.AllowNullVoid?l||s===null:l}i(a,"IsVoidLike"),e.IsVoidLike=a})(Ar||(Ar={}));function MA(e){return globalThis.Object.freeze(e).map(r=>Kc(r))}i(MA,"ImmutableArray");function TA(e){const r={};for(const t of Object.getOwnPropertyNames(e))r[t]=Kc(e[t]);for(const t of Object.getOwnPropertySymbols(e))r[t]=Kc(e[t]);return globalThis.Object.freeze(r)}i(TA,"ImmutableObject");function Kc(e){return Gt(e)?MA(e):lp(e)?e:wu(e)?e:W5(e)?e:Or(e)?TA(e):e}i(Kc,"Immutable");function q(e,r){const t=r!==void 0?{...r,...e}:e;switch(Ar.InstanceMode){case"freeze":return Kc(t);case"clone":return ln(t);default:return t}}i(q,"CreateType");class pt extends Error{static{i(this,"TypeBoxError")}constructor(r){super(r)}}const _t=Symbol.for("TypeBox.Transform"),ku=Symbol.for("TypeBox.Readonly"),Lo=Symbol.for("TypeBox.Optional"),Bd=Symbol.for("TypeBox.Hint"),z=Symbol.for("TypeBox.Kind");function fp(e){return Or(e)&&e[ku]==="Readonly"}i(fp,"IsReadonly");function xi(e){return Or(e)&&e[Lo]==="Optional"}i(xi,"IsOptional$1");function Q5(e){return Ae(e,"Any")}i(Q5,"IsAny$1");function ek(e){return Ae(e,"Argument")}i(ek,"IsArgument$1");function As(e){return Ae(e,"Array")}i(As,"IsArray$1");function Od(e){return Ae(e,"AsyncIterator")}i(Od,"IsAsyncIterator$1");function Rd(e){return Ae(e,"BigInt")}i(Rd,"IsBigInt$1");function $u(e){return Ae(e,"Boolean")}i($u,"IsBoolean$1");function Fs(e){return Ae(e,"Computed")}i(Fs,"IsComputed$1");function Ss(e){return Ae(e,"Constructor")}i(Ss,"IsConstructor$1");function PA(e){return Ae(e,"Date")}i(PA,"IsDate$1");function Ms(e){return Ae(e,"Function")}i(Ms,"IsFunction$1");function Ts(e){return Ae(e,"Integer")}i(Ts,"IsInteger$1");function Sn(e){return Ae(e,"Intersect")}i(Sn,"IsIntersect$1");function Ld(e){return Ae(e,"Iterator")}i(Ld,"IsIterator$1");function Ae(e,r){return Or(e)&&z in e&&e[z]===r}i(Ae,"IsKindOf$1");function rk(e){return yu(e)||lo(e)||Fr(e)}i(rk,"IsLiteralValue$1");function ma(e){return Ae(e,"Literal")}i(ma,"IsLiteral$1");function ba(e){return Ae(e,"MappedKey")}i(ba,"IsMappedKey$1");function gn(e){return Ae(e,"MappedResult")}i(gn,"IsMappedResult$1");function xu(e){return Ae(e,"Never")}i(xu,"IsNever$1");function IA(e){return Ae(e,"Not")}i(IA,"IsNot$1");function gp(e){return Ae(e,"Null")}i(gp,"IsNull$1");function Ps(e){return Ae(e,"Number")}i(Ps,"IsNumber$1");function Yn(e){return Ae(e,"Object")}i(Yn,"IsObject$1");function jd(e){return Ae(e,"Promise")}i(jd,"IsPromise$1");function Ud(e){return Ae(e,"Record")}i(Ud,"IsRecord$1");function Wt(e){return Ae(e,"Ref")}i(Wt,"IsRef$1");function tk(e){return Ae(e,"RegExp")}i(tk,"IsRegExp$1");function Du(e){return Ae(e,"String")}i(Du,"IsString$1");function hp(e){return Ae(e,"Symbol")}i(hp,"IsSymbol$1");function va(e){return Ae(e,"TemplateLiteral")}i(va,"IsTemplateLiteral$1");function NA(e){return Ae(e,"This")}i(NA,"IsThis$1");function nr(e){return Or(e)&&_t in e}i(nr,"IsTransform$1");function ya(e){return Ae(e,"Tuple")}i(ya,"IsTuple$1");function Cu(e){return Ae(e,"Undefined")}i(Cu,"IsUndefined$1");function it(e){return Ae(e,"Union")}i(it,"IsUnion$1");function BA(e){return Ae(e,"Uint8Array")}i(BA,"IsUint8Array$1");function OA(e){return Ae(e,"Unknown")}i(OA,"IsUnknown$1");function RA(e){return Ae(e,"Unsafe")}i(RA,"IsUnsafe$1");function LA(e){return Ae(e,"Void")}i(LA,"IsVoid$1");function jA(e){return Or(e)&&z in e&&Fr(e[z])}i(jA,"IsKind$1");function Pt(e){return Q5(e)||ek(e)||As(e)||$u(e)||Rd(e)||Od(e)||Fs(e)||Ss(e)||PA(e)||Ms(e)||Ts(e)||Sn(e)||Ld(e)||ma(e)||ba(e)||gn(e)||xu(e)||IA(e)||gp(e)||Ps(e)||Yn(e)||jd(e)||Ud(e)||Wt(e)||tk(e)||Du(e)||hp(e)||va(e)||NA(e)||ya(e)||Cu(e)||it(e)||BA(e)||OA(e)||RA(e)||LA(e)||jA(e)}i(Pt,"IsSchema$1");const UA=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function nk(e){try{return new RegExp(e),!0}catch{return!1}}i(nk,"IsPattern");function pp(e){if(!Fr(e))return!1;for(let r=0;r<e.length;r++){const t=e.charCodeAt(r);if(t>=7&&t<=13||t===27||t===127)return!1}return!0}i(pp,"IsControlCharacterFree");function ok(e){return mp(e)||br(e)}i(ok,"IsAdditionalProperties");function Js(e){return Ir(e)||V5(e)}i(Js,"IsOptionalBigInt");function Je(e){return Ir(e)||lo(e)}i(Je,"IsOptionalNumber");function mp(e){return Ir(e)||yu(e)}i(mp,"IsOptionalBoolean");function We(e){return Ir(e)||Fr(e)}i(We,"IsOptionalString");function _A(e){return Ir(e)||Fr(e)&&pp(e)&&nk(e)}i(_A,"IsOptionalPattern");function zA(e){return Ir(e)||Fr(e)&&pp(e)}i(zA,"IsOptionalFormat");function ik(e){return Ir(e)||br(e)}i(ik,"IsOptionalSchema");function Hc(e){return Or(e)&&e[Lo]==="Optional"}i(Hc,"IsOptional");function Wn(e){return Fe(e,"Any")&&We(e.$id)}i(Wn,"IsAny");function qA(e){return Fe(e,"Argument")&&lo(e.index)}i(qA,"IsArgument");function wa(e){return Fe(e,"Array")&&e.type==="array"&&We(e.$id)&&br(e.items)&&Je(e.minItems)&&Je(e.maxItems)&&mp(e.uniqueItems)&&ik(e.contains)&&Je(e.minContains)&&Je(e.maxContains)}i(wa,"IsArray");function bp(e){return Fe(e,"AsyncIterator")&&e.type==="AsyncIterator"&&We(e.$id)&&br(e.items)}i(bp,"IsAsyncIterator");function _d(e){return Fe(e,"BigInt")&&e.type==="bigint"&&We(e.$id)&&Js(e.exclusiveMaximum)&&Js(e.exclusiveMinimum)&&Js(e.maximum)&&Js(e.minimum)&&Js(e.multipleOf)}i(_d,"IsBigInt");function ka(e){return Fe(e,"Boolean")&&e.type==="boolean"&&We(e.$id)}i(ka,"IsBoolean");function VA(e){return Fe(e,"Computed")&&Fr(e.target)&&Gt(e.parameters)&&e.parameters.every(r=>br(r))}i(VA,"IsComputed");function zd(e){return Fe(e,"Constructor")&&e.type==="Constructor"&&We(e.$id)&&Gt(e.parameters)&&e.parameters.every(r=>br(r))&&br(e.returns)}i(zd,"IsConstructor");function qd(e){return Fe(e,"Date")&&e.type==="Date"&&We(e.$id)&&Je(e.exclusiveMaximumTimestamp)&&Je(e.exclusiveMinimumTimestamp)&&Je(e.maximumTimestamp)&&Je(e.minimumTimestamp)&&Je(e.multipleOfTimestamp)}i(qd,"IsDate");function Vd(e){return Fe(e,"Function")&&e.type==="Function"&&We(e.$id)&&Gt(e.parameters)&&e.parameters.every(r=>br(r))&&br(e.returns)}i(Vd,"IsFunction");function jo(e){return Fe(e,"Integer")&&e.type==="integer"&&We(e.$id)&&Je(e.exclusiveMaximum)&&Je(e.exclusiveMinimum)&&Je(e.maximum)&&Je(e.minimum)&&Je(e.multipleOf)}i(jo,"IsInteger");function ak(e){return Or(e)&&Object.entries(e).every(([r,t])=>pp(r)&&br(t))}i(ak,"IsProperties");function $a(e){return Fe(e,"Intersect")&&!(Fr(e.type)&&e.type!=="object")&&Gt(e.allOf)&&e.allOf.every(r=>br(r)&&!YA(r))&&We(e.type)&&(mp(e.unevaluatedProperties)||ik(e.unevaluatedProperties))&&We(e.$id)}i($a,"IsIntersect");function vp(e){return Fe(e,"Iterator")&&e.type==="Iterator"&&We(e.$id)&&br(e.items)}i(vp,"IsIterator");function Fe(e,r){return Or(e)&&z in e&&e[z]===r}i(Fe,"IsKindOf");function sk(e){return Di(e)&&Fr(e.const)}i(sk,"IsLiteralString");function lk(e){return Di(e)&&lo(e.const)}i(lk,"IsLiteralNumber");function uk(e){return Di(e)&&yu(e.const)}i(uk,"IsLiteralBoolean");function Di(e){return Fe(e,"Literal")&&We(e.$id)&&WA(e.const)}i(Di,"IsLiteral");function WA(e){return yu(e)||lo(e)||Fr(e)}i(WA,"IsLiteralValue");function KA(e){return Fe(e,"MappedKey")&&Gt(e.keys)&&e.keys.every(r=>lo(r)||Fr(r))}i(KA,"IsMappedKey");function HA(e){return Fe(e,"MappedResult")&&ak(e.properties)}i(HA,"IsMappedResult");function Ci(e){return Fe(e,"Never")&&Or(e.not)&&Object.getOwnPropertyNames(e.not).length===0}i(Ci,"IsNever");function ds(e){return Fe(e,"Not")&&br(e.not)}i(ds,"IsNot");function yp(e){return Fe(e,"Null")&&e.type==="null"&&We(e.$id)}i(yp,"IsNull");function zt(e){return Fe(e,"Number")&&e.type==="number"&&We(e.$id)&&Je(e.exclusiveMaximum)&&Je(e.exclusiveMinimum)&&Je(e.maximum)&&Je(e.minimum)&&Je(e.multipleOf)}i(zt,"IsNumber");function vr(e){return Fe(e,"Object")&&e.type==="object"&&We(e.$id)&&ak(e.properties)&&ok(e.additionalProperties)&&Je(e.minProperties)&&Je(e.maxProperties)}i(vr,"IsObject");function wp(e){return Fe(e,"Promise")&&e.type==="Promise"&&We(e.$id)&&br(e.item)}i(wp,"IsPromise");function gt(e){return Fe(e,"Record")&&e.type==="object"&&We(e.$id)&&ok(e.additionalProperties)&&Or(e.patternProperties)&&(r=>{const t=Object.getOwnPropertyNames(r.patternProperties);return t.length===1&&nk(t[0])&&Or(r.patternProperties)&&br(r.patternProperties[t[0]])})(e)}i(gt,"IsRecord");function GA(e){return Fe(e,"Ref")&&We(e.$id)&&Fr(e.$ref)}i(GA,"IsRef");function Kl(e){return Fe(e,"RegExp")&&We(e.$id)&&Fr(e.source)&&Fr(e.flags)&&Je(e.maxLength)&&Je(e.minLength)}i(Kl,"IsRegExp");function Kn(e){return Fe(e,"String")&&e.type==="string"&&We(e.$id)&&Je(e.minLength)&&Je(e.maxLength)&&_A(e.pattern)&&zA(e.format)}i(Kn,"IsString");function Hl(e){return Fe(e,"Symbol")&&e.type==="symbol"&&We(e.$id)}i(Hl,"IsSymbol");function Gl(e){return Fe(e,"TemplateLiteral")&&e.type==="string"&&Fr(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}i(Gl,"IsTemplateLiteral");function ZA(e){return Fe(e,"This")&&We(e.$id)&&Fr(e.$ref)}i(ZA,"IsThis");function YA(e){return Or(e)&&_t in e}i(YA,"IsTransform");function Wd(e){return Fe(e,"Tuple")&&e.type==="array"&&We(e.$id)&&lo(e.minItems)&&lo(e.maxItems)&&e.minItems===e.maxItems&&(Ir(e.items)&&Ir(e.additionalItems)&&e.minItems===0||Gt(e.items)&&e.items.every(r=>br(r)))}i(Wd,"IsTuple");function oa(e){return Fe(e,"Undefined")&&e.type==="undefined"&&We(e.$id)}i(oa,"IsUndefined");function Oo(e){return Fe(e,"Union")&&We(e.$id)&&Or(e)&&Gt(e.anyOf)&&e.anyOf.every(r=>br(r))}i(Oo,"IsUnion");function Eu(e){return Fe(e,"Uint8Array")&&e.type==="Uint8Array"&&We(e.$id)&&Je(e.minByteLength)&&Je(e.maxByteLength)}i(Eu,"IsUint8Array");function Hn(e){return Fe(e,"Unknown")&&We(e.$id)}i(Hn,"IsUnknown");function JA(e){return Fe(e,"Unsafe")}i(JA,"IsUnsafe");function Kd(e){return Fe(e,"Void")&&e.type==="void"&&We(e.$id)}i(Kd,"IsVoid");function XA(e){return Or(e)&&z in e&&Fr(e[z])&&!UA.includes(e[z])}i(XA,"IsKind");function br(e){return Or(e)&&(Wn(e)||qA(e)||wa(e)||ka(e)||_d(e)||bp(e)||VA(e)||zd(e)||qd(e)||Vd(e)||jo(e)||$a(e)||vp(e)||Di(e)||KA(e)||HA(e)||Ci(e)||ds(e)||yp(e)||zt(e)||vr(e)||wp(e)||gt(e)||GA(e)||Kl(e)||Kn(e)||Hl(e)||Gl(e)||ZA(e)||Wd(e)||oa(e)||Oo(e)||Eu(e)||Hn(e)||JA(e)||Kd(e)||XA(e))}i(br,"IsSchema");const QA="(true|false)",yc="(0|[1-9][0-9]*)",ck="(.*)",e9="(?!.*)",fs=`^${yc}$`,gs=`^${ck}$`,r9=`^${e9}$`,dk=new Map;function kp(e){return dk.has(e)}i(kp,"Has$1");function $p(e){return dk.get(e)}i($p,"Get$1");const xp=new Map;function mi(e){return xp.has(e)}i(mi,"Has");function Dp(e,r){xp.set(e,r)}i(Dp,"Set$1");function Cp(e){return xp.get(e)}i(Cp,"Get");function t9(e,r){return e.includes(r)}i(t9,"SetIncludes");function n9(e){return[...new Set(e)]}i(n9,"SetDistinct");function o9(e,r){return e.filter(t=>r.includes(t))}i(o9,"SetIntersect");function i9(e,r){return e.reduce((t,n)=>o9(t,n),r)}i(i9,"SetIntersectManyResolve");function a9(e){return e.length===1?e[0]:e.length>1?i9(e.slice(1),e[0]):[]}i(a9,"SetIntersectMany");function s9(e){const r=[];for(const t of e)r.push(...t);return r}i(s9,"SetUnionMany");function Zl(e){return q({[z]:"Any"},e)}i(Zl,"Any");function Ep(e,r){return q({[z]:"Array",type:"array",items:e},r)}i(Ep,"Array$1");function l9(e){return q({[z]:"Argument",index:e})}i(l9,"Argument");function Ap(e,r){return q({[z]:"AsyncIterator",type:"AsyncIterator",items:e},r)}i(Ap,"AsyncIterator");function Kr(e,r,t){return q({[z]:"Computed",target:e,parameters:r},t)}i(Kr,"Computed");function u9(e,r){const{[r]:t,...n}=e;return n}i(u9,"DiscardKey");function cn(e,r){return r.reduce((t,n)=>u9(t,n),e)}i(cn,"Discard");function yr(e){return q({[z]:"Never",not:{}},e)}i(yr,"Never");function mt(e){return q({[z]:"MappedResult",properties:e})}i(mt,"MappedResult");function Fp(e,r,t){return q({[z]:"Constructor",type:"Constructor",parameters:e,returns:r},t)}i(Fp,"Constructor");function Au(e,r,t){return q({[z]:"Function",type:"Function",parameters:e,returns:r},t)}i(Au,"Function");function Ng(e,r){return q({[z]:"Union",anyOf:e},r)}i(Ng,"UnionCreate");function c9(e){return e.some(r=>xi(r))}i(c9,"IsUnionOptional");function ry(e){return e.map(r=>xi(r)?d9(r):r)}i(ry,"RemoveOptionalFromRest$1");function d9(e){return cn(e,[Lo])}i(d9,"RemoveOptionalFromType$1");function f9(e,r){return c9(e)?Fi(Ng(ry(e),r)):Ng(ry(e),r)}i(f9,"ResolveUnion");function Is(e,r){return e.length===1?q(e[0],r):e.length===0?yr(r):f9(e,r)}i(Is,"UnionEvaluated");function bt(e,r){return e.length===0?yr(r):e.length===1?q(e[0],r):Ng(e,r)}i(bt,"Union$1");class ty extends pt{static{i(this,"TemplateLiteralParserError")}}function g9(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}i(g9,"Unescape");function Sp(e,r,t){return e[r]===t&&e.charCodeAt(r-1)!==92}i(Sp,"IsNonEscaped");function So(e,r){return Sp(e,r,"(")}i(So,"IsOpenParen");function Yl(e,r){return Sp(e,r,")")}i(Yl,"IsCloseParen");function fk(e,r){return Sp(e,r,"|")}i(fk,"IsSeparator");function h9(e){if(!(So(e,0)&&Yl(e,e.length-1)))return!1;let r=0;for(let t=0;t<e.length;t++)if(So(e,t)&&(r+=1),Yl(e,t)&&(r-=1),r===0&&t!==e.length-1)return!1;return!0}i(h9,"IsGroup");function p9(e){return e.slice(1,e.length-1)}i(p9,"InGroup");function m9(e){let r=0;for(let t=0;t<e.length;t++)if(So(e,t)&&(r+=1),Yl(e,t)&&(r-=1),fk(e,t)&&r===0)return!0;return!1}i(m9,"IsPrecedenceOr");function b9(e){for(let r=0;r<e.length;r++)if(So(e,r))return!0;return!1}i(b9,"IsPrecedenceAnd");function v9(e){let[r,t]=[0,0];const n=[];for(let a=0;a<e.length;a++)if(So(e,a)&&(r+=1),Yl(e,a)&&(r-=1),fk(e,a)&&r===0){const s=e.slice(t,a);s.length>0&&n.push(hs(s)),t=a+1}const o=e.slice(t);return o.length>0&&n.push(hs(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}i(v9,"Or");function y9(e){function r(o,a){if(!So(o,a))throw new ty("TemplateLiteralParser: Index must point to open parens");let s=0;for(let l=a;l<o.length;l++)if(So(o,l)&&(s+=1),Yl(o,l)&&(s-=1),s===0)return[a,l];throw new ty("TemplateLiteralParser: Unclosed group parens in expression")}i(r,"Group");function t(o,a){for(let s=a;s<o.length;s++)if(So(o,s))return[a,s];return[a,o.length]}i(t,"Range");const n=[];for(let o=0;o<e.length;o++)if(So(e,o)){const[a,s]=r(e,o),l=e.slice(a,s+1);n.push(hs(l)),o=s}else{const[a,s]=t(e,o),l=e.slice(a,s);l.length>0&&n.push(hs(l)),o=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}i(y9,"And");function hs(e){return h9(e)?hs(p9(e)):m9(e)?v9(e):b9(e)?y9(e):{type:"const",const:g9(e)}}i(hs,"TemplateLiteralParse");function Mp(e){return hs(e.slice(1,e.length-1))}i(Mp,"TemplateLiteralParseExact");class w9 extends pt{static{i(this,"TemplateLiteralFiniteError")}}function k9(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}i(k9,"IsNumberExpression");function $9(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}i($9,"IsBooleanExpression");function x9(e){return e.type==="const"&&e.const===".*"}i(x9,"IsStringExpression");function Jl(e){return k9(e)||x9(e)?!1:$9(e)?!0:e.type==="and"?e.expr.every(r=>Jl(r)):e.type==="or"?e.expr.every(r=>Jl(r)):e.type==="const"?!0:(()=>{throw new w9("Unknown expression type")})()}i(Jl,"IsTemplateLiteralExpressionFinite");function D9(e){const r=Mp(e.pattern);return Jl(r)}i(D9,"IsTemplateLiteralFinite");class C9 extends pt{static{i(this,"TemplateLiteralGenerateError")}}function*gk(e){if(e.length===1)return yield*e[0];for(const r of e[0])for(const t of gk(e.slice(1)))yield`${r}${t}`}i(gk,"GenerateReduce");function*E9(e){return yield*gk(e.expr.map(r=>[...Hd(r)]))}i(E9,"GenerateAnd");function*A9(e){for(const r of e.expr)yield*Hd(r)}i(A9,"GenerateOr");function*F9(e){return yield e.const}i(F9,"GenerateConst");function*Hd(e){return e.type==="and"?yield*E9(e):e.type==="or"?yield*A9(e):e.type==="const"?yield*F9(e):(()=>{throw new C9("Unknown expression")})()}i(Hd,"TemplateLiteralExpressionGenerate");function hk(e){const r=Mp(e.pattern);return Jl(r)?[...Hd(r)]:[]}i(hk,"TemplateLiteralGenerate");function Nr(e,r){return q({[z]:"Literal",const:e,type:typeof e},r)}i(Nr,"Literal");function pk(e){return q({[z]:"Boolean",type:"boolean"},e)}i(pk,"Boolean$1");function Tp(e){return q({[z]:"BigInt",type:"bigint"},e)}i(Tp,"BigInt$1");function xa(e){return q({[z]:"Number",type:"number"},e)}i(xa,"Number$1");function ia(e){return q({[z]:"String",type:"string"},e)}i(ia,"String$1");function*S9(e){const r=e.trim().replace(/"|'/g,"");return r==="boolean"?yield pk():r==="number"?yield xa():r==="bigint"?yield Tp():r==="string"?yield ia():yield(()=>{const t=r.split("|").map(n=>Nr(n.trim()));return t.length===0?yr():t.length===1?t[0]:Is(t)})()}i(S9,"FromUnion$e");function*M9(e){if(e[1]!=="{"){const r=Nr("$"),t=Bg(e.slice(1));return yield*[r,...t]}for(let r=2;r<e.length;r++)if(e[r]==="}"){const t=S9(e.slice(2,r)),n=Bg(e.slice(r+1));return yield*[...t,...n]}yield Nr(e)}i(M9,"FromTerminal");function*Bg(e){for(let r=0;r<e.length;r++)if(e[r]==="$"){const t=Nr(e.slice(0,r)),n=M9(e.slice(r));return yield*[t,...n]}yield Nr(e)}i(Bg,"FromSyntax");function T9(e){return[...Bg(e)]}i(T9,"TemplateLiteralSyntax");class P9 extends pt{static{i(this,"TemplateLiteralPatternError")}}function I9(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}i(I9,"Escape");function mk(e,r){return va(e)?e.pattern.slice(1,e.pattern.length-1):it(e)?`(${e.anyOf.map(t=>mk(t,r)).join("|")})`:Ps(e)?`${r}${yc}`:Ts(e)?`${r}${yc}`:Rd(e)?`${r}${yc}`:Du(e)?`${r}${ck}`:ma(e)?`${r}${I9(e.const.toString())}`:$u(e)?`${r}${QA}`:(()=>{throw new P9(`Unexpected Kind '${e[z]}'`)})()}i(mk,"Visit$7");function ny(e){return`^${e.map(r=>mk(r,"")).join("")}$`}i(ny,"TemplateLiteralPattern");function Gc(e){const t=hk(e).map(n=>Nr(n));return Is(t)}i(Gc,"TemplateLiteralToUnion");function bk(e,r){const t=Fr(e)?ny(T9(e)):ny(e);return q({[z]:"TemplateLiteral",type:"string",pattern:t},r)}i(bk,"TemplateLiteral");function N9(e){return hk(e).map(t=>t.toString())}i(N9,"FromTemplateLiteral$4");function B9(e){const r=[];for(const t of e)r.push(...Ei(t));return r}i(B9,"FromUnion$d");function O9(e){return[e.toString()]}i(O9,"FromLiteral$3");function Ei(e){return[...new Set(va(e)?N9(e):it(e)?B9(e.anyOf):ma(e)?O9(e.const):Ps(e)?["[number]"]:Ts(e)?["[number]"]:[])]}i(Ei,"IndexPropertyKeys");function R9(e,r,t){const n={};for(const o of Object.getOwnPropertyNames(r))n[o]=Gd(e,Ei(r[o]),t);return n}i(R9,"FromProperties$i");function L9(e,r,t){return R9(e,r.properties,t)}i(L9,"FromMappedResult$b");function j9(e,r,t){const n=L9(e,r,t);return mt(n)}i(j9,"IndexFromMappedResult");function vk(e,r){return e.map(t=>yk(t,r))}i(vk,"FromRest$6");function U9(e){return e.filter(r=>!xu(r))}i(U9,"FromIntersectRest");function _9(e,r){return $k(U9(vk(e,r)))}i(_9,"FromIntersect$c");function z9(e){return e.some(r=>xu(r))?[]:e}i(z9,"FromUnionRest");function q9(e,r){return Is(z9(vk(e,r)))}i(q9,"FromUnion$c");function V9(e,r){return r in e?e[r]:r==="[number]"?Is(e):yr()}i(V9,"FromTuple$9");function W9(e,r){return r==="[number]"?e:yr()}i(W9,"FromArray$a");function K9(e,r){return r in e?e[r]:yr()}i(K9,"FromProperty$2");function yk(e,r){return Sn(e)?_9(e.allOf,r):it(e)?q9(e.anyOf,r):ya(e)?V9(e.items??[],r):As(e)?W9(e.items,r):Yn(e)?K9(e.properties,r):yr()}i(yk,"IndexFromPropertyKey");function Pp(e,r){return r.map(t=>yk(e,t))}i(Pp,"IndexFromPropertyKeys");function oy(e,r){return Is(Pp(e,r))}i(oy,"FromSchema");function Gd(e,r,t){if(Wt(e)||Wt(r)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Pt(e)||!Pt(r))throw new pt(n);return Kr("Index",[e,r])}return gn(r)?j9(e,r,t):ba(r)?Y9(e,r,t):q(Pt(r)?oy(e,Ei(r)):oy(e,r),t)}i(Gd,"Index");function H9(e,r,t){return{[r]:Gd(e,[r],ln(t))}}i(H9,"MappedIndexPropertyKey");function G9(e,r,t){return r.reduce((n,o)=>({...n,...H9(e,o,t)}),{})}i(G9,"MappedIndexPropertyKeys");function Z9(e,r,t){return G9(e,r.keys,t)}i(Z9,"MappedIndexProperties");function Y9(e,r,t){const n=Z9(e,r,t);return mt(n)}i(Y9,"IndexFromMappedKey");function Ip(e,r){return q({[z]:"Iterator",type:"Iterator",items:e},r)}i(Ip,"Iterator");function J9(e){return globalThis.Object.keys(e).filter(r=>!xi(e[r]))}i(J9,"RequiredArray");function X9(e,r){const t=J9(e),n=t.length>0?{[z]:"Object",type:"object",required:t,properties:e}:{[z]:"Object",type:"object",properties:e};return q(n,r)}i(X9,"_Object");var ot=X9;function wk(e,r){return q({[z]:"Promise",type:"Promise",item:e},r)}i(wk,"Promise$1");function Q9(e){return q(cn(e,[ku]))}i(Q9,"RemoveReadonly");function e7(e){return q({...e,[ku]:"Readonly"})}i(e7,"AddReadonly");function r7(e,r){return r===!1?Q9(e):e7(e)}i(r7,"ReadonlyWithFlag");function Ai(e,r){const t=r??!0;return gn(e)?o7(e,t):r7(e,t)}i(Ai,"Readonly");function t7(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Ai(e[n],r);return t}i(t7,"FromProperties$h");function n7(e,r){return t7(e.properties,r)}i(n7,"FromMappedResult$a");function o7(e,r){const t=n7(e,r);return mt(t)}i(o7,"ReadonlyFromMappedResult");function Ns(e,r){return q(e.length>0?{[z]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[z]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},r)}i(Ns,"Tuple");function kk(e,r){return e in r?wn(e,r[e]):mt(r)}i(kk,"FromMappedResult$9");function i7(e){return{[e]:Nr(e)}}i(i7,"MappedKeyToKnownMappedResultProperties");function a7(e){const r={};for(const t of e)r[t]=Nr(t);return r}i(a7,"MappedKeyToUnknownMappedResultProperties");function s7(e,r){return t9(r,e)?i7(e):a7(r)}i(s7,"MappedKeyToMappedResultProperties");function l7(e,r){const t=s7(e,r);return kk(e,t)}i(l7,"FromMappedKey$3");function Xs(e,r){return r.map(t=>wn(e,t))}i(Xs,"FromRest$5");function u7(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(r))t[n]=wn(e,r[n]);return t}i(u7,"FromProperties$g");function wn(e,r){const t={...r};return xi(r)?Fi(wn(e,cn(r,[Lo]))):fp(r)?Ai(wn(e,cn(r,[ku]))):gn(r)?kk(e,r.properties):ba(r)?l7(e,r.keys):Ss(r)?Fp(Xs(e,r.parameters),wn(e,r.returns),t):Ms(r)?Au(Xs(e,r.parameters),wn(e,r.returns),t):Od(r)?Ap(wn(e,r.items),t):Ld(r)?Ip(wn(e,r.items),t):Sn(r)?Si(Xs(e,r.allOf),t):it(r)?bt(Xs(e,r.anyOf),t):ya(r)?Ns(Xs(e,r.items??[]),t):Yn(r)?ot(u7(e,r.properties),t):As(r)?Ep(wn(e,r.items),t):jd(r)?wk(wn(e,r.item),t):r}i(wn,"FromSchemaType");function c7(e,r){const t={};for(const n of e)t[n]=wn(n,r);return t}i(c7,"MappedFunctionReturnType");function d7(e,r,t){const n=Pt(e)?Ei(e):e,o=r({[z]:"MappedKey",keys:n}),a=c7(n,o);return ot(a,t)}i(d7,"Mapped");function f7(e){return q(cn(e,[Lo]))}i(f7,"RemoveOptional");function g7(e){return q({...e,[Lo]:"Optional"})}i(g7,"AddOptional");function h7(e,r){return r===!1?f7(e):g7(e)}i(h7,"OptionalWithFlag");function Fi(e,r){const t=r??!0;return gn(e)?b7(e,t):h7(e,t)}i(Fi,"Optional");function p7(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Fi(e[n],r);return t}i(p7,"FromProperties$f");function m7(e,r){return p7(e.properties,r)}i(m7,"FromMappedResult$8");function b7(e,r){const t=m7(e,r);return mt(t)}i(b7,"OptionalFromMappedResult");function Og(e,r={}){const t=e.every(o=>Yn(o)),n=Pt(r.unevaluatedProperties)?{unevaluatedProperties:r.unevaluatedProperties}:{};return q(r.unevaluatedProperties===!1||Pt(r.unevaluatedProperties)||t?{...n,[z]:"Intersect",type:"object",allOf:e}:{...n,[z]:"Intersect",allOf:e},r)}i(Og,"IntersectCreate");function v7(e){return e.every(r=>xi(r))}i(v7,"IsIntersectOptional");function y7(e){return cn(e,[Lo])}i(y7,"RemoveOptionalFromType");function iy(e){return e.map(r=>xi(r)?y7(r):r)}i(iy,"RemoveOptionalFromRest");function w7(e,r){return v7(e)?Fi(Og(iy(e),r)):Og(iy(e),r)}i(w7,"ResolveIntersect");function $k(e,r={}){if(e.length===1)return q(e[0],r);if(e.length===0)return yr(r);if(e.some(t=>nr(t)))throw new Error("Cannot intersect transform types");return w7(e,r)}i($k,"IntersectEvaluated");function Si(e,r){if(e.length===1)return q(e[0],r);if(e.length===0)return yr(r);if(e.some(t=>nr(t)))throw new Error("Cannot intersect transform types");return Og(e,r)}i(Si,"Intersect$1");function Bs(...e){const[r,t]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof r!="string")throw new pt("Ref: $ref must be a string");return q({[z]:"Ref",$ref:r},t)}i(Bs,"Ref");function k7(e,r){return Kr("Awaited",[Kr(e,r)])}i(k7,"FromComputed$4");function $7(e){return Kr("Awaited",[Bs(e)])}i($7,"FromRef$8");function x7(e){return Si(xk(e))}i(x7,"FromIntersect$b");function D7(e){return bt(xk(e))}i(D7,"FromUnion$b");function C7(e){return Zd(e)}i(C7,"FromPromise$5");function xk(e){return e.map(r=>Zd(r))}i(xk,"FromRest$4");function Zd(e,r){return q(Fs(e)?k7(e.target,e.parameters):Sn(e)?x7(e.allOf):it(e)?D7(e.anyOf):jd(e)?C7(e.item):Wt(e)?$7(e.$ref):e,r)}i(Zd,"Awaited");function Dk(e){const r=[];for(const t of e)r.push(Da(t));return r}i(Dk,"FromRest$3");function E7(e){const r=Dk(e);return s9(r)}i(E7,"FromIntersect$a");function A7(e){const r=Dk(e);return a9(r)}i(A7,"FromUnion$a");function F7(e){return e.map((r,t)=>t.toString())}i(F7,"FromTuple$8");function S7(e){return["[number]"]}i(S7,"FromArray$9");function M7(e){return globalThis.Object.getOwnPropertyNames(e)}i(M7,"FromProperties$e");function T7(e){return Rg?globalThis.Object.getOwnPropertyNames(e).map(t=>t[0]==="^"&&t[t.length-1]==="$"?t.slice(1,t.length-1):t):[]}i(T7,"FromPatternProperties");function Da(e){return Sn(e)?E7(e.allOf):it(e)?A7(e.anyOf):ya(e)?F7(e.items??[]):As(e)?S7(e.items):Yn(e)?M7(e.properties):Ud(e)?T7(e.patternProperties):[]}i(Da,"KeyOfPropertyKeys");let Rg=!1;function ps(e){Rg=!0;const r=Da(e);return Rg=!1,`^(${r.map(n=>`(${n})`).join("|")})$`}i(ps,"KeyOfPattern");function P7(e,r){return Kr("KeyOf",[Kr(e,r)])}i(P7,"FromComputed$3");function I7(e){return Kr("KeyOf",[Bs(e)])}i(I7,"FromRef$7");function N7(e,r){const t=Da(e),n=B7(t),o=Is(n);return q(o,r)}i(N7,"KeyOfFromType");function B7(e){return e.map(r=>r==="[number]"?xa():Nr(r))}i(B7,"KeyOfPropertyKeysToRest");function Np(e,r){return Fs(e)?P7(e.target,e.parameters):Wt(e)?I7(e.$ref):gn(e)?L7(e,r):N7(e,r)}i(Np,"KeyOf");function O7(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Np(e[n],ln(r));return t}i(O7,"FromProperties$d");function R7(e,r){return O7(e.properties,r)}i(R7,"FromMappedResult$7");function L7(e,r){const t=R7(e,r);return mt(t)}i(L7,"KeyOfFromMappedResult");function Ck(e){const r=Da(e),t=Pp(e,r);return r.map((n,o)=>[r[o],t[o]])}i(Ck,"KeyOfPropertyEntries");function j7(e){const r=[];for(const t of e)r.push(...Da(t));return n9(r)}i(j7,"CompositeKeys");function U7(e){return e.filter(r=>!xu(r))}i(U7,"FilterNever");function _7(e,r){const t=[];for(const n of e)t.push(...Pp(n,[r]));return U7(t)}i(_7,"CompositeProperty");function z7(e,r){const t={};for(const n of r)t[n]=$k(_7(e,n));return t}i(z7,"CompositeProperties");function q7(e,r){const t=j7(e),n=z7(e,t);return ot(n,r)}i(q7,"Composite");function Ek(e){return q({[z]:"Date",type:"Date"},e)}i(Ek,"Date$1");function Ak(e){return q({[z]:"Null",type:"null"},e)}i(Ak,"Null");function Fk(e){return q({[z]:"Symbol",type:"symbol"},e)}i(Fk,"Symbol$1");function Sk(e){return q({[z]:"Undefined",type:"undefined"},e)}i(Sk,"Undefined");function Mk(e){return q({[z]:"Uint8Array",type:"Uint8Array"},e)}i(Mk,"Uint8Array$1");function Yd(e){return q({[z]:"Unknown"},e)}i(Yd,"Unknown");function V7(e){return e.map(r=>Bp(r,!1))}i(V7,"FromArray$8");function W7(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=Ai(Bp(e[t],!1));return r}i(W7,"FromProperties$c");function ec(e,r){return r===!0?e:Ai(e)}i(ec,"ConditionalReadonly");function Bp(e,r){return wA(e)||$A(e)?ec(Zl(),r):Gt(e)?Ai(Ns(V7(e))):wu(e)?Mk():lp(e)?Ek():Or(e)?ec(ot(W7(e)),r):kA(e)?ec(Au([],Yd()),r):Ir(e)?Sk():xA(e)?Ak():DA(e)?Fk():V5(e)?Tp():lo(e)||yu(e)||Fr(e)?Nr(e):ot({})}i(Bp,"FromValue");function K7(e,r){return q(Bp(e,!0),r)}i(K7,"Const");function H7(e,r){return Ss(e)?Ns(e.parameters,r):yr(r)}i(H7,"ConstructorParameters");function G7(e,r){if(Ir(e))throw new Error("Enum undefined or empty");const t=globalThis.Object.getOwnPropertyNames(e).filter(a=>isNaN(a)).map(a=>e[a]),o=[...new Set(t)].map(a=>Nr(a));return bt(o,{...r,[Bd]:"Enum"})}i(G7,"Enum");class Z7 extends pt{static{i(this,"ExtendsResolverError")}}var I;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(I||(I={}));function Fn(e){return e===I.False?e:I.True}i(Fn,"IntoBooleanResult");function Os(e){throw new Z7(e)}i(Os,"Throw");function Rr(e){return Ci(e)||$a(e)||Oo(e)||Hn(e)||Wn(e)}i(Rr,"IsStructuralRight");function Lr(e,r){return Ci(r)?Ik():$a(r)?Jd(e,r):Oo(r)?Rp(e,r):Hn(r)?Rk():Wn(r)?Op():Os("StructuralRight")}i(Lr,"StructuralRight");function Op(e,r){return I.True}i(Op,"FromAnyRight");function Y7(e,r){return $a(r)?Jd(e,r):Oo(r)&&r.anyOf.some(t=>Wn(t)||Hn(t))?I.True:Oo(r)?I.Union:Hn(r)||Wn(r)?I.True:I.Union}i(Y7,"FromAny$2");function J7(e,r){return Hn(e)?I.False:Wn(e)?I.Union:Ci(e)?I.True:I.False}i(J7,"FromArrayRight");function X7(e,r){return vr(r)&&Xd(r)?I.True:Rr(r)?Lr(e,r):wa(r)?Fn(Ve(e.items,r.items)):I.False}i(X7,"FromArray$7");function Q7(e,r){return Rr(r)?Lr(e,r):bp(r)?Fn(Ve(e.items,r.items)):I.False}i(Q7,"FromAsyncIterator$5");function eF(e,r){return Rr(r)?Lr(e,r):vr(r)?Et(e,r):gt(r)?Mn(e,r):_d(r)?I.True:I.False}i(eF,"FromBigInt$2");function Tk(e,r){return uk(e)||ka(e)?I.True:I.False}i(Tk,"FromBooleanRight");function rF(e,r){return Rr(r)?Lr(e,r):vr(r)?Et(e,r):gt(r)?Mn(e,r):ka(r)?I.True:I.False}i(rF,"FromBoolean$2");function tF(e,r){return Rr(r)?Lr(e,r):vr(r)?Et(e,r):zd(r)?e.parameters.length>r.parameters.length?I.False:e.parameters.every((t,n)=>Fn(Ve(r.parameters[n],t))===I.True)?Fn(Ve(e.returns,r.returns)):I.False:I.False}i(tF,"FromConstructor$5");function nF(e,r){return Rr(r)?Lr(e,r):vr(r)?Et(e,r):gt(r)?Mn(e,r):qd(r)?I.True:I.False}i(nF,"FromDate$2");function oF(e,r){return Rr(r)?Lr(e,r):vr(r)?Et(e,r):Vd(r)?e.parameters.length>r.parameters.length?I.False:e.parameters.every((t,n)=>Fn(Ve(r.parameters[n],t))===I.True)?Fn(Ve(e.returns,r.returns)):I.False:I.False}i(oF,"FromFunction$5");function Pk(e,r){return Di(e)&&lo(e.const)||zt(e)||jo(e)?I.True:I.False}i(Pk,"FromIntegerRight");function iF(e,r){return jo(r)||zt(r)?I.True:Rr(r)?Lr(e,r):vr(r)?Et(e,r):gt(r)?Mn(e,r):I.False}i(iF,"FromInteger$2");function Jd(e,r){return r.allOf.every(t=>Ve(e,t)===I.True)?I.True:I.False}i(Jd,"FromIntersectRight");function aF(e,r){return e.allOf.some(t=>Ve(t,r)===I.True)?I.True:I.False}i(aF,"FromIntersect$9");function sF(e,r){return Rr(r)?Lr(e,r):vp(r)?Fn(Ve(e.items,r.items)):I.False}i(sF,"FromIterator$5");function lF(e,r){return Di(r)&&r.const===e.const?I.True:Rr(r)?Lr(e,r):vr(r)?Et(e,r):gt(r)?Mn(e,r):Kn(r)?Ok(e):zt(r)?Nk(e):jo(r)?Pk(e):ka(r)?Tk(e):I.False}i(lF,"FromLiteral$2");function Ik(e,r){return I.False}i(Ik,"FromNeverRight");function uF(e,r){return I.True}i(uF,"FromNever$2");function ay(e){let[r,t]=[e,0];for(;ds(r);)r=r.not,t+=1;return t%2===0?r:Yd()}i(ay,"UnwrapTNot");function cF(e,r){return ds(e)?Ve(ay(e),r):ds(r)?Ve(e,ay(r)):Os("Invalid fallthrough for Not")}i(cF,"FromNot$5");function dF(e,r){return Rr(r)?Lr(e,r):vr(r)?Et(e,r):gt(r)?Mn(e,r):yp(r)?I.True:I.False}i(dF,"FromNull$2");function Nk(e,r){return lk(e)||zt(e)||jo(e)?I.True:I.False}i(Nk,"FromNumberRight");function fF(e,r){return Rr(r)?Lr(e,r):vr(r)?Et(e,r):gt(r)?Mn(e,r):jo(r)||zt(r)?I.True:I.False}i(fF,"FromNumber$2");function Kt(e,r){return Object.getOwnPropertyNames(e.properties).length===r}i(Kt,"IsObjectPropertyCount");function sy(e){return Xd(e)}i(sy,"IsObjectStringLike");function ly(e){return Kt(e,0)||Kt(e,1)&&"description"in e.properties&&Oo(e.properties.description)&&e.properties.description.anyOf.length===2&&(Kn(e.properties.description.anyOf[0])&&oa(e.properties.description.anyOf[1])||Kn(e.properties.description.anyOf[1])&&oa(e.properties.description.anyOf[0]))}i(ly,"IsObjectSymbolLike");function f0(e){return Kt(e,0)}i(f0,"IsObjectNumberLike");function uy(e){return Kt(e,0)}i(uy,"IsObjectBooleanLike");function gF(e){return Kt(e,0)}i(gF,"IsObjectBigIntLike");function hF(e){return Kt(e,0)}i(hF,"IsObjectDateLike");function pF(e){return Xd(e)}i(pF,"IsObjectUint8ArrayLike");function mF(e){const r=xa();return Kt(e,0)||Kt(e,1)&&"length"in e.properties&&Fn(Ve(e.properties.length,r))===I.True}i(mF,"IsObjectFunctionLike");function bF(e){return Kt(e,0)}i(bF,"IsObjectConstructorLike");function Xd(e){const r=xa();return Kt(e,0)||Kt(e,1)&&"length"in e.properties&&Fn(Ve(e.properties.length,r))===I.True}i(Xd,"IsObjectArrayLike");function vF(e){const r=Au([Zl()],Zl());return Kt(e,0)||Kt(e,1)&&"then"in e.properties&&Fn(Ve(e.properties.then,r))===I.True}i(vF,"IsObjectPromiseLike");function Bk(e,r){return Ve(e,r)===I.False||Hc(e)&&!Hc(r)?I.False:I.True}i(Bk,"Property");function Et(e,r){return Hn(e)?I.False:Wn(e)?I.Union:Ci(e)||sk(e)&&sy(r)||lk(e)&&f0(r)||uk(e)&&uy(r)||Hl(e)&&ly(r)||_d(e)&&gF(r)||Kn(e)&&sy(r)||Hl(e)&&ly(r)||zt(e)&&f0(r)||jo(e)&&f0(r)||ka(e)&&uy(r)||Eu(e)&&pF(r)||qd(e)&&hF(r)||zd(e)&&bF(r)||Vd(e)&&mF(r)?I.True:gt(e)&&Kn(Lg(e))?r[Bd]==="Record"?I.True:I.False:gt(e)&&zt(Lg(e))&&Kt(r,0)?I.True:I.False}i(Et,"FromObjectRight");function yF(e,r){return Rr(r)?Lr(e,r):gt(r)?Mn(e,r):vr(r)?(()=>{for(const t of Object.getOwnPropertyNames(r.properties)){if(!(t in e.properties)&&!Hc(r.properties[t]))return I.False;if(Hc(r.properties[t]))return I.True;if(Bk(e.properties[t],r.properties[t])===I.False)return I.False}return I.True})():I.False}i(yF,"FromObject$b");function wF(e,r){return Rr(r)?Lr(e,r):vr(r)&&vF(r)?I.True:wp(r)?Fn(Ve(e.item,r.item)):I.False}i(wF,"FromPromise$4");function Lg(e){return fs in e.patternProperties?xa():gs in e.patternProperties?ia():Os("Unknown record key pattern")}i(Lg,"RecordKey$1");function jg(e){return fs in e.patternProperties?e.patternProperties[fs]:gs in e.patternProperties?e.patternProperties[gs]:Os("Unable to get record value schema")}i(jg,"RecordValue$1");function Mn(e,r){const[t,n]=[Lg(r),jg(r)];return sk(e)&&zt(t)&&Fn(Ve(e,n))===I.True?I.True:Eu(e)&&zt(t)||Kn(e)&&zt(t)||wa(e)&&zt(t)?Ve(e,n):vr(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(Bk(n,e.properties[o])===I.False)return I.False;return I.True})():I.False}i(Mn,"FromRecordRight");function kF(e,r){return Rr(r)?Lr(e,r):vr(r)?Et(e,r):gt(r)?Ve(jg(e),jg(r)):I.False}i(kF,"FromRecord$7");function $F(e,r){const t=Kl(e)?ia():e,n=Kl(r)?ia():r;return Ve(t,n)}i($F,"FromRegExp$2");function Ok(e,r){return Di(e)&&Fr(e.const)||Kn(e)?I.True:I.False}i(Ok,"FromStringRight");function xF(e,r){return Rr(r)?Lr(e,r):vr(r)?Et(e,r):gt(r)?Mn(e,r):Kn(r)?I.True:I.False}i(xF,"FromString$2");function DF(e,r){return Rr(r)?Lr(e,r):vr(r)?Et(e,r):gt(r)?Mn(e,r):Hl(r)?I.True:I.False}i(DF,"FromSymbol$2");function CF(e,r){return Gl(e)?Ve(Gc(e),r):Gl(r)?Ve(e,Gc(r)):Os("Invalid fallthrough for TemplateLiteral")}i(CF,"FromTemplateLiteral$3");function EF(e,r){return wa(r)&&e.items!==void 0&&e.items.every(t=>Ve(t,r.items)===I.True)}i(EF,"IsArrayOfTuple");function AF(e,r){return Ci(e)?I.True:Hn(e)?I.False:Wn(e)?I.Union:I.False}i(AF,"FromTupleRight");function FF(e,r){return Rr(r)?Lr(e,r):vr(r)&&Xd(r)||wa(r)&&EF(e,r)?I.True:Wd(r)?Ir(e.items)&&!Ir(r.items)||!Ir(e.items)&&Ir(r.items)?I.False:Ir(e.items)&&!Ir(r.items)||e.items.every((t,n)=>Ve(t,r.items[n])===I.True)?I.True:I.False:I.False}i(FF,"FromTuple$7");function SF(e,r){return Rr(r)?Lr(e,r):vr(r)?Et(e,r):gt(r)?Mn(e,r):Eu(r)?I.True:I.False}i(SF,"FromUint8Array$2");function MF(e,r){return Rr(r)?Lr(e,r):vr(r)?Et(e,r):gt(r)?Mn(e,r):Kd(r)?IF(e):oa(r)?I.True:I.False}i(MF,"FromUndefined$2");function Rp(e,r){return r.anyOf.some(t=>Ve(e,t)===I.True)?I.True:I.False}i(Rp,"FromUnionRight");function TF(e,r){return e.anyOf.every(t=>Ve(t,r)===I.True)?I.True:I.False}i(TF,"FromUnion$9");function Rk(e,r){return I.True}i(Rk,"FromUnknownRight");function PF(e,r){return Ci(r)?Ik():$a(r)?Jd(e,r):Oo(r)?Rp(e,r):Wn(r)?Op():Kn(r)?Ok(e):zt(r)?Nk(e):jo(r)?Pk(e):ka(r)?Tk(e):wa(r)?J7(e):Wd(r)?AF(e):vr(r)?Et(e,r):Hn(r)?I.True:I.False}i(PF,"FromUnknown$2");function IF(e,r){return oa(e)||oa(e)?I.True:I.False}i(IF,"FromVoidRight");function NF(e,r){return $a(r)?Jd(e,r):Oo(r)?Rp(e,r):Hn(r)?Rk():Wn(r)?Op():vr(r)?Et(e,r):Kd(r)?I.True:I.False}i(NF,"FromVoid$2");function Ve(e,r){return Gl(e)||Gl(r)?CF(e,r):Kl(e)||Kl(r)?$F(e,r):ds(e)||ds(r)?cF(e,r):Wn(e)?Y7(e,r):wa(e)?X7(e,r):_d(e)?eF(e,r):ka(e)?rF(e,r):bp(e)?Q7(e,r):zd(e)?tF(e,r):qd(e)?nF(e,r):Vd(e)?oF(e,r):jo(e)?iF(e,r):$a(e)?aF(e,r):vp(e)?sF(e,r):Di(e)?lF(e,r):Ci(e)?uF():yp(e)?dF(e,r):zt(e)?fF(e,r):vr(e)?yF(e,r):gt(e)?kF(e,r):Kn(e)?xF(e,r):Hl(e)?DF(e,r):Wd(e)?FF(e,r):wp(e)?wF(e,r):Eu(e)?SF(e,r):oa(e)?MF(e,r):Oo(e)?TF(e,r):Hn(e)?PF(e,r):Kd(e)?NF(e,r):Os(`Unknown left type operand '${e[z]}'`)}i(Ve,"Visit$6");function Fu(e,r){return Ve(e,r)}i(Fu,"ExtendsCheck");function BF(e,r,t,n,o){const a={};for(const s of globalThis.Object.getOwnPropertyNames(e))a[s]=Lp(e[s],r,t,n,ln(o));return a}i(BF,"FromProperties$b");function OF(e,r,t,n,o){return BF(e.properties,r,t,n,o)}i(OF,"FromMappedResult$6");function RF(e,r,t,n,o){const a=OF(e,r,t,n,o);return mt(a)}i(RF,"ExtendsFromMappedResult");function LF(e,r,t,n){const o=Fu(e,r);return o===I.Union?bt([t,n]):o===I.True?t:n}i(LF,"ExtendsResolve");function Lp(e,r,t,n,o){return gn(e)?RF(e,r,t,n,o):ba(e)?q(zF(e,r,t,n,o)):q(LF(e,r,t,n),o)}i(Lp,"Extends");function jF(e,r,t,n,o){return{[e]:Lp(Nr(e),r,t,n,ln(o))}}i(jF,"FromPropertyKey$2");function UF(e,r,t,n,o){return e.reduce((a,s)=>({...a,...jF(s,r,t,n,o)}),{})}i(UF,"FromPropertyKeys$2");function _F(e,r,t,n,o){return UF(e.keys,r,t,n,o)}i(_F,"FromMappedKey$2");function zF(e,r,t,n,o){const a=_F(e,r,t,n,o);return mt(a)}i(zF,"ExtendsFromMappedKey");function qF(e){return e.allOf.every(r=>Rs(r))}i(qF,"Intersect");function VF(e){return e.anyOf.some(r=>Rs(r))}i(VF,"Union");function WF(e){return!Rs(e.not)}i(WF,"Not$1");function Rs(e){return e[z]==="Intersect"?qF(e):e[z]==="Union"?VF(e):e[z]==="Not"?WF(e):e[z]==="Undefined"}i(Rs,"ExtendsUndefinedCheck");function KF(e,r){return jp(Gc(e),r)}i(KF,"ExcludeFromTemplateLiteral");function HF(e,r){const t=e.filter(n=>Fu(n,r)===I.False);return t.length===1?t[0]:bt(t)}i(HF,"ExcludeRest");function jp(e,r,t={}){return va(e)?q(KF(e,r),t):gn(e)?q(YF(e,r),t):q(it(e)?HF(e.anyOf,r):Fu(e,r)!==I.False?yr():e,t)}i(jp,"Exclude");function GF(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=jp(e[n],r);return t}i(GF,"FromProperties$a");function ZF(e,r){return GF(e.properties,r)}i(ZF,"FromMappedResult$5");function YF(e,r){const t=ZF(e,r);return mt(t)}i(YF,"ExcludeFromMappedResult");function JF(e,r){return Up(Gc(e),r)}i(JF,"ExtractFromTemplateLiteral");function XF(e,r){const t=e.filter(n=>Fu(n,r)!==I.False);return t.length===1?t[0]:bt(t)}i(XF,"ExtractRest");function Up(e,r,t){return va(e)?q(JF(e,r),t):gn(e)?q(rS(e,r),t):q(it(e)?XF(e.anyOf,r):Fu(e,r)!==I.False?e:yr(),t)}i(Up,"Extract");function QF(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Up(e[n],r);return t}i(QF,"FromProperties$9");function eS(e,r){return QF(e.properties,r)}i(eS,"FromMappedResult$4");function rS(e,r){const t=eS(e,r);return mt(t)}i(rS,"ExtractFromMappedResult");function tS(e,r){return Ss(e)?q(e.returns,r):yr(r)}i(tS,"InstanceType");function Lk(e){return Ai(Fi(e))}i(Lk,"ReadonlyOptional");function Ca(e,r,t){return q({[z]:"Record",type:"object",patternProperties:{[e]:r}},t)}i(Ca,"RecordCreateFromPattern");function _p(e,r,t){const n={};for(const o of e)n[o]=r;return ot(n,{...t,[Bd]:"Record"})}i(_p,"RecordCreateFromKeys");function nS(e,r,t){return D9(e)?_p(Ei(e),r,t):Ca(e.pattern,r,t)}i(nS,"FromTemplateLiteralKey");function oS(e,r,t){return _p(Ei(bt(e)),r,t)}i(oS,"FromUnionKey");function iS(e,r,t){return _p([e.toString()],r,t)}i(iS,"FromLiteralKey");function aS(e,r,t){return Ca(e.source,r,t)}i(aS,"FromRegExpKey");function sS(e,r,t){const n=Ir(e.pattern)?gs:e.pattern;return Ca(n,r,t)}i(sS,"FromStringKey");function lS(e,r,t){return Ca(gs,r,t)}i(lS,"FromAnyKey");function uS(e,r,t){return Ca(r9,r,t)}i(uS,"FromNeverKey");function cS(e,r,t){return ot({true:r,false:r},t)}i(cS,"FromBooleanKey");function dS(e,r,t){return Ca(fs,r,t)}i(dS,"FromIntegerKey");function fS(e,r,t){return Ca(fs,r,t)}i(fS,"FromNumberKey");function jk(e,r,t={}){return it(e)?oS(e.anyOf,r,t):va(e)?nS(e,r,t):ma(e)?iS(e.const,r,t):$u(e)?cS(e,r,t):Ts(e)?dS(e,r,t):Ps(e)?fS(e,r,t):tk(e)?aS(e,r,t):Du(e)?sS(e,r,t):Q5(e)?lS(e,r,t):xu(e)?uS(e,r,t):yr(t)}i(jk,"Record");function zp(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}i(zp,"RecordPattern");function gS(e){const r=zp(e);return r===gs?ia():r===fs?xa():ia({pattern:r})}i(gS,"RecordKey");function Uk(e){return e.patternProperties[zp(e)]}i(Uk,"RecordValue");function hS(e,r){return r.parameters=Su(e,r.parameters),r.returns=Gn(e,r.returns),r}i(hS,"FromConstructor$4");function pS(e,r){return r.parameters=Su(e,r.parameters),r.returns=Gn(e,r.returns),r}i(pS,"FromFunction$4");function mS(e,r){return r.allOf=Su(e,r.allOf),r}i(mS,"FromIntersect$8");function bS(e,r){return r.anyOf=Su(e,r.anyOf),r}i(bS,"FromUnion$8");function vS(e,r){return Ir(r.items)||(r.items=Su(e,r.items)),r}i(vS,"FromTuple$6");function yS(e,r){return r.items=Gn(e,r.items),r}i(yS,"FromArray$6");function wS(e,r){return r.items=Gn(e,r.items),r}i(wS,"FromAsyncIterator$4");function kS(e,r){return r.items=Gn(e,r.items),r}i(kS,"FromIterator$4");function $S(e,r){return r.item=Gn(e,r.item),r}i($S,"FromPromise$3");function xS(e,r){const t=AS(e,r.properties);return{...r,...ot(t)}}i(xS,"FromObject$a");function DS(e,r){const t=Gn(e,gS(r)),n=Gn(e,Uk(r)),o=jk(t,n);return{...r,...o}}i(DS,"FromRecord$6");function CS(e,r){return r.index in e?e[r.index]:Yd()}i(CS,"FromArgument$2");function ES(e,r){const t=fp(r),n=xi(r),o=Gn(e,r);return t&&n?Lk(o):t&&!n?Ai(o):!t&&n?Fi(o):o}i(ES,"FromProperty$1");function AS(e,r){return globalThis.Object.getOwnPropertyNames(r).reduce((t,n)=>({...t,[n]:ES(e,r[n])}),{})}i(AS,"FromProperties$8");function Su(e,r){return r.map(t=>Gn(e,t))}i(Su,"FromTypes$1");function Gn(e,r){return Ss(r)?hS(e,r):Ms(r)?pS(e,r):Sn(r)?mS(e,r):it(r)?bS(e,r):ya(r)?vS(e,r):As(r)?yS(e,r):Od(r)?wS(e,r):Ld(r)?kS(e,r):jd(r)?$S(e,r):Yn(r)?xS(e,r):Ud(r)?DS(e,r):ek(r)?CS(e,r):r}i(Gn,"FromType$1");function FS(e,r){return Gn(r,up(e))}i(FS,"Instantiate");function SS(e){return q({[z]:"Integer",type:"integer"},e)}i(SS,"Integer");function MS(e,r,t){return{[e]:Ls(Nr(e),r,ln(t))}}i(MS,"MappedIntrinsicPropertyKey");function TS(e,r,t){return e.reduce((o,a)=>({...o,...MS(a,r,t)}),{})}i(TS,"MappedIntrinsicPropertyKeys");function PS(e,r,t){return TS(e.keys,r,t)}i(PS,"MappedIntrinsicProperties");function IS(e,r,t){const n=PS(e,r,t);return mt(n)}i(IS,"IntrinsicFromMappedKey");function NS(e){const[r,t]=[e.slice(0,1),e.slice(1)];return[r.toLowerCase(),t].join("")}i(NS,"ApplyUncapitalize");function BS(e){const[r,t]=[e.slice(0,1),e.slice(1)];return[r.toUpperCase(),t].join("")}i(BS,"ApplyCapitalize");function OS(e){return e.toUpperCase()}i(OS,"ApplyUppercase");function RS(e){return e.toLowerCase()}i(RS,"ApplyLowercase");function LS(e,r,t){const n=Mp(e.pattern);if(!Jl(n))return{...e,pattern:_k(e.pattern,r)};const s=[...Hd(n)].map(f=>Nr(f)),l=zk(s,r),u=bt(l);return bk([u],t)}i(LS,"FromTemplateLiteral$2");function _k(e,r){return typeof e=="string"?r==="Uncapitalize"?NS(e):r==="Capitalize"?BS(e):r==="Uppercase"?OS(e):r==="Lowercase"?RS(e):e:e.toString()}i(_k,"FromLiteralValue");function zk(e,r){return e.map(t=>Ls(t,r))}i(zk,"FromRest$2");function Ls(e,r,t={}){return ba(e)?IS(e,r,t):va(e)?LS(e,r,t):it(e)?bt(zk(e.anyOf,r),t):ma(e)?Nr(_k(e.const,r),t):q(e,t)}i(Ls,"Intrinsic");function jS(e,r={}){return Ls(e,"Capitalize",r)}i(jS,"Capitalize");function US(e,r={}){return Ls(e,"Lowercase",r)}i(US,"Lowercase");function _S(e,r={}){return Ls(e,"Uncapitalize",r)}i(_S,"Uncapitalize");function zS(e,r={}){return Ls(e,"Uppercase",r)}i(zS,"Uppercase");function qS(e,r,t){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=Qd(e[o],r,ln(t));return n}i(qS,"FromProperties$7");function VS(e,r,t){return qS(e.properties,r,t)}i(VS,"FromMappedResult$3");function WS(e,r,t){const n=VS(e,r,t);return mt(n)}i(WS,"OmitFromMappedResult");function KS(e,r){return e.map(t=>qp(t,r))}i(KS,"FromIntersect$7");function HS(e,r){return e.map(t=>qp(t,r))}i(HS,"FromUnion$7");function GS(e,r){const{[r]:t,...n}=e;return n}i(GS,"FromProperty");function ZS(e,r){return r.reduce((t,n)=>GS(t,n),e)}i(ZS,"FromProperties$6");function YS(e,r,t){const n=cn(e,[_t,"$id","required","properties"]),o=ZS(t,r);return ot(o,n)}i(YS,"FromObject$9");function JS(e){const r=e.reduce((t,n)=>rk(n)?[...t,Nr(n)]:t,[]);return bt(r)}i(JS,"UnionFromPropertyKeys$1");function qp(e,r){return Sn(e)?Si(KS(e.allOf,r)):it(e)?bt(HS(e.anyOf,r)):Yn(e)?YS(e,r,e.properties):ot({})}i(qp,"OmitResolve");function Qd(e,r,t){const n=Gt(r)?JS(r):r,o=Pt(r)?Ei(r):r,a=Wt(e),s=Wt(r);return gn(e)?WS(e,o,t):ba(r)?rM(e,r,t):a&&s?Kr("Omit",[e,n],t):!a&&s?Kr("Omit",[e,n],t):a&&!s?Kr("Omit",[e,n],t):q({...qp(e,o),...t})}i(Qd,"Omit");function XS(e,r,t){return{[r]:Qd(e,[r],ln(t))}}i(XS,"FromPropertyKey$1");function QS(e,r,t){return r.reduce((n,o)=>({...n,...XS(e,o,t)}),{})}i(QS,"FromPropertyKeys$1");function eM(e,r,t){return QS(e,r.keys,t)}i(eM,"FromMappedKey$1");function rM(e,r,t){const n=eM(e,r,t);return mt(n)}i(rM,"OmitFromMappedKey");function tM(e,r,t){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=ef(e[o],r,ln(t));return n}i(tM,"FromProperties$5");function nM(e,r,t){return tM(e.properties,r,t)}i(nM,"FromMappedResult$2");function oM(e,r,t){const n=nM(e,r,t);return mt(n)}i(oM,"PickFromMappedResult");function iM(e,r){return e.map(t=>Vp(t,r))}i(iM,"FromIntersect$6");function aM(e,r){return e.map(t=>Vp(t,r))}i(aM,"FromUnion$6");function sM(e,r){const t={};for(const n of r)n in e&&(t[n]=e[n]);return t}i(sM,"FromProperties$4");function lM(e,r,t){const n=cn(e,[_t,"$id","required","properties"]),o=sM(t,r);return ot(o,n)}i(lM,"FromObject$8");function uM(e){const r=e.reduce((t,n)=>rk(n)?[...t,Nr(n)]:t,[]);return bt(r)}i(uM,"UnionFromPropertyKeys");function Vp(e,r){return Sn(e)?Si(iM(e.allOf,r)):it(e)?bt(aM(e.anyOf,r)):Yn(e)?lM(e,r,e.properties):ot({})}i(Vp,"PickResolve");function ef(e,r,t){const n=Gt(r)?uM(r):r,o=Pt(r)?Ei(r):r,a=Wt(e),s=Wt(r);return gn(e)?oM(e,o,t):ba(r)?gM(e,r,t):a&&s?Kr("Pick",[e,n],t):!a&&s?Kr("Pick",[e,n],t):a&&!s?Kr("Pick",[e,n],t):q({...Vp(e,o),...t})}i(ef,"Pick");function cM(e,r,t){return{[r]:ef(e,[r],ln(t))}}i(cM,"FromPropertyKey");function dM(e,r,t){return r.reduce((n,o)=>({...n,...cM(e,o,t)}),{})}i(dM,"FromPropertyKeys");function fM(e,r,t){return dM(e,r.keys,t)}i(fM,"FromMappedKey");function gM(e,r,t){const n=fM(e,r,t);return mt(n)}i(gM,"PickFromMappedKey");function hM(e,r){return Kr("Partial",[Kr(e,r)])}i(hM,"FromComputed$2");function pM(e){return Kr("Partial",[Bs(e)])}i(pM,"FromRef$6");function mM(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=Fi(e[t]);return r}i(mM,"FromProperties$3");function bM(e,r){const t=cn(e,[_t,"$id","required","properties"]),n=mM(r);return ot(n,t)}i(bM,"FromObject$7");function cy(e){return e.map(r=>qk(r))}i(cy,"FromRest$1");function qk(e){return Fs(e)?hM(e.target,e.parameters):Wt(e)?pM(e.$ref):Sn(e)?Si(cy(e.allOf)):it(e)?bt(cy(e.anyOf)):Yn(e)?bM(e,e.properties):Rd(e)||$u(e)||Ts(e)||ma(e)||gp(e)||Ps(e)||Du(e)||hp(e)||Cu(e)?e:ot({})}i(qk,"PartialResolve");function Wp(e,r){return gn(e)?wM(e,r):q({...qk(e),...r})}i(Wp,"Partial");function vM(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Wp(e[n],ln(r));return t}i(vM,"FromProperties$2");function yM(e,r){return vM(e.properties,r)}i(yM,"FromMappedResult$1");function wM(e,r){const t=yM(e,r);return mt(t)}i(wM,"PartialFromMappedResult");function kM(e,r){return Kr("Required",[Kr(e,r)])}i(kM,"FromComputed$1");function $M(e){return Kr("Required",[Bs(e)])}i($M,"FromRef$5");function xM(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=cn(e[t],[Lo]);return r}i(xM,"FromProperties$1");function DM(e,r){const t=cn(e,[_t,"$id","required","properties"]),n=xM(r);return ot(n,t)}i(DM,"FromObject$6");function dy(e){return e.map(r=>Vk(r))}i(dy,"FromRest");function Vk(e){return Fs(e)?kM(e.target,e.parameters):Wt(e)?$M(e.$ref):Sn(e)?Si(dy(e.allOf)):it(e)?bt(dy(e.anyOf)):Yn(e)?DM(e,e.properties):Rd(e)||$u(e)||Ts(e)||ma(e)||gp(e)||Ps(e)||Du(e)||hp(e)||Cu(e)?e:ot({})}i(Vk,"RequiredResolve");function Kp(e,r){return gn(e)?AM(e,r):q({...Vk(e),...r})}i(Kp,"Required");function CM(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Kp(e[n],r);return t}i(CM,"FromProperties");function EM(e,r){return CM(e.properties,r)}i(EM,"FromMappedResult");function AM(e,r){const t=EM(e,r);return mt(t)}i(AM,"RequiredFromMappedResult");function FM(e,r){return r.map(t=>Wt(t)?Hp(e,t.$ref):dn(e,t))}i(FM,"DereferenceParameters");function Hp(e,r){return r in e?Wt(e[r])?Hp(e,e[r].$ref):dn(e,e[r]):yr()}i(Hp,"Dereference");function SM(e){return Zd(e[0])}i(SM,"FromAwaited");function MM(e){return Gd(e[0],e[1])}i(MM,"FromIndex");function TM(e){return Np(e[0])}i(TM,"FromKeyOf");function PM(e){return Wp(e[0])}i(PM,"FromPartial");function IM(e){return Qd(e[0],e[1])}i(IM,"FromOmit");function NM(e){return ef(e[0],e[1])}i(NM,"FromPick");function BM(e){return Kp(e[0])}i(BM,"FromRequired");function OM(e,r,t){const n=FM(e,t);return r==="Awaited"?SM(n):r==="Index"?MM(n):r==="KeyOf"?TM(n):r==="Partial"?PM(n):r==="Omit"?IM(n):r==="Pick"?NM(n):r==="Required"?BM(n):yr()}i(OM,"FromComputed");function RM(e,r){return Ep(dn(e,r))}i(RM,"FromArray$5");function LM(e,r){return Ap(dn(e,r))}i(LM,"FromAsyncIterator$3");function jM(e,r,t){return Fp(Mu(e,r),dn(e,t))}i(jM,"FromConstructor$3");function UM(e,r,t){return Au(Mu(e,r),dn(e,t))}i(UM,"FromFunction$3");function _M(e,r){return Si(Mu(e,r))}i(_M,"FromIntersect$5");function zM(e,r){return Ip(dn(e,r))}i(zM,"FromIterator$3");function qM(e,r){return ot(globalThis.Object.keys(r).reduce((t,n)=>({...t,[n]:dn(e,r[n])}),{}))}i(qM,"FromObject$5");function VM(e,r){const[t,n]=[dn(e,Uk(r)),zp(r)],o=up(r);return o.patternProperties[n]=t,o}i(VM,"FromRecord$5");function WM(e,r){return Wt(r)?{...Hp(e,r.$ref),[_t]:r[_t]}:r}i(WM,"FromTransform");function KM(e,r){return Ns(Mu(e,r))}i(KM,"FromTuple$5");function HM(e,r){return bt(Mu(e,r))}i(HM,"FromUnion$5");function Mu(e,r){return r.map(t=>dn(e,t))}i(Mu,"FromTypes");function dn(e,r){return xi(r)?q(dn(e,cn(r,[Lo])),r):fp(r)?q(dn(e,cn(r,[ku])),r):nr(r)?q(WM(e,r),r):As(r)?q(RM(e,r.items),r):Od(r)?q(LM(e,r.items),r):Fs(r)?q(OM(e,r.target,r.parameters)):Ss(r)?q(jM(e,r.parameters,r.returns),r):Ms(r)?q(UM(e,r.parameters,r.returns),r):Sn(r)?q(_M(e,r.allOf),r):Ld(r)?q(zM(e,r.items),r):Yn(r)?q(qM(e,r.properties),r):Ud(r)?q(VM(e,r)):ya(r)?q(KM(e,r.items||[]),r):it(r)?q(HM(e,r.anyOf),r):r}i(dn,"FromType");function GM(e,r){return r in e?dn(e,e[r]):yr()}i(GM,"ComputeType");function ZM(e){return globalThis.Object.getOwnPropertyNames(e).reduce((r,t)=>({...r,[t]:GM(e,t)}),{})}i(ZM,"ComputeModuleProperties");class YM{static{i(this,"TModule")}constructor(r){const t=ZM(r),n=this.WithIdentifiers(t);this.$defs=n}Import(r,t){const n={...this.$defs,[r]:q(this.$defs[r],t)};return q({[z]:"Import",$defs:n,$ref:r})}WithIdentifiers(r){return globalThis.Object.getOwnPropertyNames(r).reduce((t,n)=>({...t,[n]:{...r[n],$id:n}}),{})}}function JM(e){return new YM(e)}i(JM,"Module");function XM(e,r){return q({[z]:"Not",not:e},r)}i(XM,"Not");function QM(e,r){return Ms(e)?Ns(e.parameters,r):yr()}i(QM,"Parameters");let eT=0;function rT(e,r={}){Ir(r.$id)&&(r.$id=`T${eT++}`);const t=up(e({[z]:"This",$ref:`${r.$id}`}));return t.$id=r.$id,q({[Bd]:"Recursive",...t},r)}i(rT,"Recursive");function tT(e,r){const t=Fr(e)?new globalThis.RegExp(e):e;return q({[z]:"RegExp",type:"RegExp",source:t.source,flags:t.flags},r)}i(tT,"RegExp$1");function nT(e){return Sn(e)?e.allOf:it(e)?e.anyOf:ya(e)?e.items??[]:[]}i(nT,"RestResolve");function oT(e){return nT(e)}i(oT,"Rest");function iT(e,r){return Ms(e)?q(e.returns,r):yr(r)}i(iT,"ReturnType");class aT{static{i(this,"TransformDecodeBuilder")}constructor(r){this.schema=r}Decode(r){return new sT(this.schema,r)}}class sT{static{i(this,"TransformEncodeBuilder")}constructor(r,t){this.schema=r,this.decode=t}EncodeTransform(r,t){const a={Encode:i(s=>t[_t].Encode(r(s)),"Encode"),Decode:i(s=>this.decode(t[_t].Decode(s)),"Decode")};return{...t,[_t]:a}}EncodeSchema(r,t){const n={Decode:this.decode,Encode:r};return{...t,[_t]:n}}Encode(r){return nr(this.schema)?this.EncodeTransform(r,this.schema):this.EncodeSchema(r,this.schema)}}function lT(e){return new aT(e)}i(lT,"Transform");function uT(e={}){return q({[z]:e[z]??"Unsafe"},e)}i(uT,"Unsafe");function cT(e){return q({[z]:"Void",type:"void"},e)}i(cT,"Void");const dT=Object.freeze(Object.defineProperty({__proto__:null,Any:Zl,Argument:l9,Array:Ep,AsyncIterator:Ap,Awaited:Zd,BigInt:Tp,Boolean:pk,Capitalize:jS,Composite:q7,Const:K7,Constructor:Fp,ConstructorParameters:H7,Date:Ek,Enum:G7,Exclude:jp,Extends:Lp,Extract:Up,Function:Au,Index:Gd,InstanceType:tS,Instantiate:FS,Integer:SS,Intersect:Si,Iterator:Ip,KeyOf:Np,Literal:Nr,Lowercase:US,Mapped:d7,Module:JM,Never:yr,Not:XM,Null:Ak,Number:xa,Object:ot,Omit:Qd,Optional:Fi,Parameters:QM,Partial:Wp,Pick:ef,Promise:wk,Readonly:Ai,ReadonlyOptional:Lk,Record:jk,Recursive:rT,Ref:Bs,RegExp:tT,Required:Kp,Rest:oT,ReturnType:iT,String:ia,Symbol:Fk,TemplateLiteral:bk,Transform:lT,Tuple:Ns,Uint8Array:Mk,Uncapitalize:_S,Undefined:Sk,Union:bt,Unknown:Yd,Unsafe:uT,Uppercase:zS,Void:cT},Symbol.toStringTag,{value:"Module"})),Qe=dT;function Wk(e){switch(e.errorType){case T.ArrayContains:return"Expected array to contain at least one matching value";case T.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case T.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case T.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case T.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case T.ArrayUniqueItems:return"Expected array elements to be unique";case T.Array:return"Expected array";case T.AsyncIterator:return"Expected AsyncIterator";case T.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case T.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case T.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case T.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case T.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case T.BigInt:return"Expected bigint";case T.Boolean:return"Expected boolean";case T.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case T.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case T.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case T.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case T.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case T.Date:return"Expected Date";case T.Function:return"Expected function";case T.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case T.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case T.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case T.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case T.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case T.Integer:return"Expected integer";case T.IntersectUnevaluatedProperties:return"Unexpected property";case T.Intersect:return"Expected all values to match";case T.Iterator:return"Expected Iterator";case T.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case T.Never:return"Never";case T.Not:return"Value should not match";case T.Null:return"Expected null";case T.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case T.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case T.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case T.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case T.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case T.Number:return"Expected number";case T.Object:return"Expected object";case T.ObjectAdditionalProperties:return"Unexpected property";case T.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case T.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case T.ObjectRequiredProperty:return"Expected required property";case T.Promise:return"Expected Promise";case T.RegExp:return"Expected string to match regular expression";case T.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case T.StringFormat:return`Expected string to match '${e.schema.format}' format`;case T.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case T.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case T.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case T.String:return"Expected string";case T.Symbol:return"Expected symbol";case T.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case T.Tuple:return"Expected tuple";case T.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case T.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case T.Uint8Array:return"Expected Uint8Array";case T.Undefined:return"Expected undefined";case T.Union:return"Expected union value";case T.Void:return"Expected void";case T.Kind:return`Expected kind '${e.schema[z]}'`;default:return"Unknown error type"}}i(Wk,"DefaultErrorFunction");let Kk=Wk;function fT(e){Kk=e}i(fT,"SetErrorFunction");function gT(){return Kk}i(gT,"GetErrorFunction");class hT extends pt{static{i(this,"TypeDereferenceError")}constructor(r){super(`Unable to dereference schema with $id '${r.$ref}'`),this.schema=r}}function pT(e,r){const t=r.find(n=>n.$id===e.$ref);if(t===void 0)throw new hT(e);return Tn(t,r)}i(pT,"Resolve");function rf(e,r){return!nn(e.$id)||r.some(t=>t.$id===e.$id)||r.push(e),r}i(rf,"Pushref");function Tn(e,r){return e[z]==="This"||e[z]==="Ref"?pT(e,r):e}i(Tn,"Deref");class mT extends pt{static{i(this,"ValueHashError")}constructor(r){super("Unable to hash value"),this.value=r}}var fn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(fn||(fn={}));let qa=BigInt("14695981039346656037");const[bT,vT]=[BigInt("1099511628211"),BigInt("18446744073709551616")],yT=Array.from({length:256}).map((e,r)=>BigInt(r)),Hk=new Float64Array(1),Gk=new DataView(Hk.buffer),Zk=new Uint8Array(Hk.buffer);function*wT(e){const r=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let t=0;t<r;t++)yield e>>8*(r-1-t)&255}i(wT,"NumberToBytes");function kT(e){Dt(fn.Array);for(const r of e)ms(r)}i(kT,"ArrayType");function $T(e){Dt(fn.Boolean),Dt(e?1:0)}i($T,"BooleanType");function xT(e){Dt(fn.BigInt),Gk.setBigInt64(0,e);for(const r of Zk)Dt(r)}i(xT,"BigIntType");function DT(e){Dt(fn.Date),ms(e.getTime())}i(DT,"DateType");function CT(e){Dt(fn.Null)}i(CT,"NullType");function ET(e){Dt(fn.Number),Gk.setFloat64(0,e);for(const r of Zk)Dt(r)}i(ET,"NumberType");function AT(e){Dt(fn.Object);for(const r of globalThis.Object.getOwnPropertyNames(e).sort())ms(r),ms(e[r])}i(AT,"ObjectType");function FT(e){Dt(fn.String);for(let r=0;r<e.length;r++)for(const t of wT(e.charCodeAt(r)))Dt(t)}i(FT,"StringType");function ST(e){Dt(fn.Symbol),ms(e.description)}i(ST,"SymbolType");function MT(e){Dt(fn.Uint8Array);for(let r=0;r<e.length;r++)Dt(e[r])}i(MT,"Uint8ArrayType");function TT(e){return Dt(fn.Undefined)}i(TT,"UndefinedType");function ms(e){if(un(e))return kT(e);if(Id(e))return $T(e);if(Do(e))return xT(e);if(cp(e))return DT(e);if(Pd(e))return CT();if(pe(e))return ET(e);if(uo(e))return AT(e);if(nn(e))return FT(e);if(Nd(e))return ST(e);if(dp(e))return MT(e);if($i(e))return TT();throw new mT(e)}i(ms,"Visit$5");function Dt(e){qa=qa^yT[e],qa=qa*bT%vT}i(Dt,"FNV1A64");function Gp(e){return qa=BigInt("14695981039346656037"),ms(e),qa}i(Gp,"Hash");class PT extends pt{static{i(this,"ValueCheckUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}function IT(e){return e[z]==="Any"||e[z]==="Unknown"}i(IT,"IsAnyOrUnknown");function $e(e){return e!==void 0}i($e,"IsDefined$1");function NT(e,r,t){return!0}i(NT,"FromAny$1");function BT(e,r,t){return!0}i(BT,"FromArgument$1");function OT(e,r,t){if(!un(t)||$e(e.minItems)&&!(t.length>=e.minItems)||$e(e.maxItems)&&!(t.length<=e.maxItems))return!1;for(const a of t)if(!rt(e.items,r,a))return!1;if(e.uniqueItems===!0&&!(function(){const a=new Set;for(const s of t){const l=Gp(s);if(a.has(l))return!1;a.add(l)}return!0})())return!1;if(!($e(e.contains)||pe(e.minContains)||pe(e.maxContains)))return!0;const n=$e(e.contains)?e.contains:yr(),o=t.reduce((a,s)=>rt(n,r,s)?a+1:a,0);return!(o===0||pe(e.minContains)&&o<e.minContains||pe(e.maxContains)&&o>e.maxContains)}i(OT,"FromArray$4");function RT(e,r,t){return K5(t)}i(RT,"FromAsyncIterator$2");function LT(e,r,t){return!(!Do(t)||$e(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||$e(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||$e(e.maximum)&&!(t<=e.maximum)||$e(e.minimum)&&!(t>=e.minimum)||$e(e.multipleOf)&&t%e.multipleOf!==BigInt(0))}i(LT,"FromBigInt$1");function jT(e,r,t){return Id(t)}i(jT,"FromBoolean$1");function UT(e,r,t){return rt(e.returns,r,t.prototype)}i(UT,"FromConstructor$2");function _T(e,r,t){return!(!cp(t)||$e(e.exclusiveMaximumTimestamp)&&!(t.getTime()<e.exclusiveMaximumTimestamp)||$e(e.exclusiveMinimumTimestamp)&&!(t.getTime()>e.exclusiveMinimumTimestamp)||$e(e.maximumTimestamp)&&!(t.getTime()<=e.maximumTimestamp)||$e(e.minimumTimestamp)&&!(t.getTime()>=e.minimumTimestamp)||$e(e.multipleOfTimestamp)&&t.getTime()%e.multipleOfTimestamp!==0)}i(_T,"FromDate$1");function zT(e,r,t){return J5(t)}i(zT,"FromFunction$2");function qT(e,r,t){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return rt(o,[...r,...n],t)}i(qT,"FromImport$4");function VT(e,r,t){return!(!Y5(t)||$e(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||$e(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||$e(e.maximum)&&!(t<=e.maximum)||$e(e.minimum)&&!(t>=e.minimum)||$e(e.multipleOf)&&t%e.multipleOf!==0)}i(VT,"FromInteger$1");function WT(e,r,t){const n=e.allOf.every(o=>rt(o,r,t));if(e.unevaluatedProperties===!1){const o=new RegExp(ps(e)),a=Object.getOwnPropertyNames(t).every(s=>o.test(s));return n&&a}else if(Pt(e.unevaluatedProperties)){const o=new RegExp(ps(e)),a=Object.getOwnPropertyNames(t).every(s=>o.test(s)||rt(e.unevaluatedProperties,r,t[s]));return n&&a}else return n}i(WT,"FromIntersect$4");function KT(e,r,t){return H5(t)}i(KT,"FromIterator$2");function HT(e,r,t){return t===e.const}i(HT,"FromLiteral$1");function GT(e,r,t){return!1}i(GT,"FromNever$1");function ZT(e,r,t){return!rt(e.not,r,t)}i(ZT,"FromNot$4");function YT(e,r,t){return Pd(t)}i(YT,"FromNull$1");function JT(e,r,t){return!(!Ar.IsNumberLike(t)||$e(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||$e(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||$e(e.minimum)&&!(t>=e.minimum)||$e(e.maximum)&&!(t<=e.maximum)||$e(e.multipleOf)&&t%e.multipleOf!==0)}i(JT,"FromNumber$1");function XT(e,r,t){if(!Ar.IsObjectLike(t)||$e(e.minProperties)&&!(Object.getOwnPropertyNames(t).length>=e.minProperties)||$e(e.maxProperties)&&!(Object.getOwnPropertyNames(t).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const a=e.properties[o];if(e.required&&e.required.includes(o)){if(!rt(a,r,t[o])||(Rs(a)||IT(a))&&!(o in t))return!1}else if(Ar.IsExactOptionalProperty(t,o)&&!rt(a,r,t[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(t);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(a=>n.includes(a))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(t).every(a=>n.includes(a)||rt(e.additionalProperties,r,t[a])):!0}i(XT,"FromObject$4");function QT(e,r,t){return G5(t)}i(QT,"FromPromise$2");function eP(e,r,t){if(!Ar.IsRecordLike(t)||$e(e.minProperties)&&!(Object.getOwnPropertyNames(t).length>=e.minProperties)||$e(e.maxProperties)&&!(Object.getOwnPropertyNames(t).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],a=new RegExp(n),s=Object.entries(t).every(([f,g])=>a.test(f)?rt(o,r,g):!0),l=typeof e.additionalProperties=="object"?Object.entries(t).every(([f,g])=>a.test(f)?!0:rt(e.additionalProperties,r,g)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(t).every(f=>a.test(f)):!0;return s&&l&&u}i(eP,"FromRecord$4");function rP(e,r,t){return rt(Tn(e,r),r,t)}i(rP,"FromRef$4");function tP(e,r,t){const n=new RegExp(e.source,e.flags);return $e(e.minLength)&&!(t.length>=e.minLength)||$e(e.maxLength)&&!(t.length<=e.maxLength)?!1:n.test(t)}i(tP,"FromRegExp$1");function nP(e,r,t){return!nn(t)||$e(e.minLength)&&!(t.length>=e.minLength)||$e(e.maxLength)&&!(t.length<=e.maxLength)||$e(e.pattern)&&!new RegExp(e.pattern).test(t)?!1:$e(e.format)?kp(e.format)?$p(e.format)(t):!1:!0}i(nP,"FromString$1");function oP(e,r,t){return Nd(t)}i(oP,"FromSymbol$1");function iP(e,r,t){return nn(t)&&new RegExp(e.pattern).test(t)}i(iP,"FromTemplateLiteral$1");function aP(e,r,t){return rt(Tn(e,r),r,t)}i(aP,"FromThis$4");function sP(e,r,t){if(!un(t)||e.items===void 0&&t.length!==0||t.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!rt(e.items[n],r,t[n]))return!1;return!0}i(sP,"FromTuple$4");function lP(e,r,t){return $i(t)}i(lP,"FromUndefined$1");function uP(e,r,t){return e.anyOf.some(n=>rt(n,r,t))}i(uP,"FromUnion$4");function cP(e,r,t){return!(!dp(t)||$e(e.maxByteLength)&&!(t.length<=e.maxByteLength)||$e(e.minByteLength)&&!(t.length>=e.minByteLength))}i(cP,"FromUint8Array$1");function dP(e,r,t){return!0}i(dP,"FromUnknown$1");function fP(e,r,t){return Ar.IsVoidLike(t)}i(fP,"FromVoid$1");function gP(e,r,t){return mi(e[z])?Cp(e[z])(e,t):!1}i(gP,"FromKind$1");function rt(e,r,t){const n=$e(e.$id)?rf(e,r):r,o=e;switch(o[z]){case"Any":return NT();case"Argument":return BT();case"Array":return OT(o,n,t);case"AsyncIterator":return RT(o,n,t);case"BigInt":return LT(o,n,t);case"Boolean":return jT(o,n,t);case"Constructor":return UT(o,n,t);case"Date":return _T(o,n,t);case"Function":return zT(o,n,t);case"Import":return qT(o,n,t);case"Integer":return VT(o,n,t);case"Intersect":return WT(o,n,t);case"Iterator":return KT(o,n,t);case"Literal":return HT(o,n,t);case"Never":return GT();case"Not":return ZT(o,n,t);case"Null":return YT(o,n,t);case"Number":return JT(o,n,t);case"Object":return XT(o,n,t);case"Promise":return QT(o,n,t);case"Record":return eP(o,n,t);case"Ref":return rP(o,n,t);case"RegExp":return tP(o,n,t);case"String":return nP(o,n,t);case"Symbol":return oP(o,n,t);case"TemplateLiteral":return iP(o,n,t);case"This":return aP(o,n,t);case"Tuple":return sP(o,n,t);case"Undefined":return lP(o,n,t);case"Union":return uP(o,n,t);case"Uint8Array":return cP(o,n,t);case"Unknown":return dP();case"Void":return fP(o,n,t);default:if(!mi(o[z]))throw new PT(o);return gP(o,n,t)}}i(rt,"Visit$4");function Zc(...e){return e.length===3?rt(e[0],e[1],e[2]):rt(e[0],[],e[1])}i(Zc,"Check");var T;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(T||(T={}));class hP extends pt{static{i(this,"ValueErrorsUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}function wo(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}i(wo,"EscapeKey");function ke(e){return e!==void 0}i(ke,"IsDefined");class Yk{static{i(this,"ValueErrorIterator")}constructor(r){this.iterator=r}[Symbol.iterator](){return this.iterator}First(){const r=this.iterator.next();return r.done?void 0:r.value}}function W(e,r,t,n,o=[]){return{type:e,schema:r,path:t,value:n,message:gT()({errorType:e,path:t,schema:r,value:n,errors:o}),errors:o}}i(W,"Create");function*pP(e,r,t,n){}i(pP,"FromAny");function*mP(e,r,t,n){}i(mP,"FromArgument");function*bP(e,r,t,n){if(!un(n))return yield W(T.Array,e,t,n);ke(e.minItems)&&!(n.length>=e.minItems)&&(yield W(T.ArrayMinItems,e,t,n)),ke(e.maxItems)&&!(n.length<=e.maxItems)&&(yield W(T.ArrayMaxItems,e,t,n));for(let s=0;s<n.length;s++)yield*tt(e.items,r,`${t}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const l of n){const u=Gp(l);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield W(T.ArrayUniqueItems,e,t,n)),!(ke(e.contains)||ke(e.minContains)||ke(e.maxContains)))return;const o=ke(e.contains)?e.contains:yr(),a=n.reduce((s,l,u)=>tt(o,r,`${t}${u}`,l).next().done===!0?s+1:s,0);a===0&&(yield W(T.ArrayContains,e,t,n)),pe(e.minContains)&&a<e.minContains&&(yield W(T.ArrayMinContains,e,t,n)),pe(e.maxContains)&&a>e.maxContains&&(yield W(T.ArrayMaxContains,e,t,n))}i(bP,"FromArray$3");function*vP(e,r,t,n){K5(n)||(yield W(T.AsyncIterator,e,t,n))}i(vP,"FromAsyncIterator$1");function*yP(e,r,t,n){if(!Do(n))return yield W(T.BigInt,e,t,n);ke(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(T.BigIntExclusiveMaximum,e,t,n)),ke(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(T.BigIntExclusiveMinimum,e,t,n)),ke(e.maximum)&&!(n<=e.maximum)&&(yield W(T.BigIntMaximum,e,t,n)),ke(e.minimum)&&!(n>=e.minimum)&&(yield W(T.BigIntMinimum,e,t,n)),ke(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield W(T.BigIntMultipleOf,e,t,n))}i(yP,"FromBigInt");function*wP(e,r,t,n){Id(n)||(yield W(T.Boolean,e,t,n))}i(wP,"FromBoolean");function*kP(e,r,t,n){yield*tt(e.returns,r,t,n.prototype)}i(kP,"FromConstructor$1");function*$P(e,r,t,n){if(!cp(n))return yield W(T.Date,e,t,n);ke(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield W(T.DateExclusiveMaximumTimestamp,e,t,n)),ke(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield W(T.DateExclusiveMinimumTimestamp,e,t,n)),ke(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield W(T.DateMaximumTimestamp,e,t,n)),ke(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield W(T.DateMinimumTimestamp,e,t,n)),ke(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield W(T.DateMultipleOfTimestamp,e,t,n))}i($P,"FromDate");function*xP(e,r,t,n){J5(n)||(yield W(T.Function,e,t,n))}i(xP,"FromFunction$1");function*DP(e,r,t,n){const o=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];yield*tt(a,[...r,...o],t,n)}i(DP,"FromImport$3");function*CP(e,r,t,n){if(!Y5(n))return yield W(T.Integer,e,t,n);ke(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(T.IntegerExclusiveMaximum,e,t,n)),ke(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(T.IntegerExclusiveMinimum,e,t,n)),ke(e.maximum)&&!(n<=e.maximum)&&(yield W(T.IntegerMaximum,e,t,n)),ke(e.minimum)&&!(n>=e.minimum)&&(yield W(T.IntegerMinimum,e,t,n)),ke(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(T.IntegerMultipleOf,e,t,n))}i(CP,"FromInteger");function*EP(e,r,t,n){let o=!1;for(const a of e.allOf)for(const s of tt(a,r,t,n))o=!0,yield s;if(o)return yield W(T.Intersect,e,t,n);if(e.unevaluatedProperties===!1){const a=new RegExp(ps(e));for(const s of Object.getOwnPropertyNames(n))a.test(s)||(yield W(T.IntersectUnevaluatedProperties,e,`${t}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const a=new RegExp(ps(e));for(const s of Object.getOwnPropertyNames(n))if(!a.test(s)){const l=tt(e.unevaluatedProperties,r,`${t}/${s}`,n[s]).next();l.done||(yield l.value)}}}i(EP,"FromIntersect$3");function*AP(e,r,t,n){H5(n)||(yield W(T.Iterator,e,t,n))}i(AP,"FromIterator$1");function*FP(e,r,t,n){n!==e.const&&(yield W(T.Literal,e,t,n))}i(FP,"FromLiteral");function*SP(e,r,t,n){yield W(T.Never,e,t,n)}i(SP,"FromNever");function*MP(e,r,t,n){tt(e.not,r,t,n).next().done===!0&&(yield W(T.Not,e,t,n))}i(MP,"FromNot$3");function*TP(e,r,t,n){Pd(n)||(yield W(T.Null,e,t,n))}i(TP,"FromNull");function*PP(e,r,t,n){if(!Ar.IsNumberLike(n))return yield W(T.Number,e,t,n);ke(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(T.NumberExclusiveMaximum,e,t,n)),ke(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(T.NumberExclusiveMinimum,e,t,n)),ke(e.maximum)&&!(n<=e.maximum)&&(yield W(T.NumberMaximum,e,t,n)),ke(e.minimum)&&!(n>=e.minimum)&&(yield W(T.NumberMinimum,e,t,n)),ke(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(T.NumberMultipleOf,e,t,n))}i(PP,"FromNumber");function*IP(e,r,t,n){if(!Ar.IsObjectLike(n))return yield W(T.Object,e,t,n);ke(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(T.ObjectMinProperties,e,t,n)),ke(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(T.ObjectMaxProperties,e,t,n));const o=Array.isArray(e.required)?e.required:[],a=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const l of o)s.includes(l)||(yield W(T.ObjectRequiredProperty,e.properties[l],`${t}/${wo(l)}`,void 0));if(e.additionalProperties===!1)for(const l of s)a.includes(l)||(yield W(T.ObjectAdditionalProperties,e,`${t}/${wo(l)}`,n[l]));if(typeof e.additionalProperties=="object")for(const l of s)a.includes(l)||(yield*tt(e.additionalProperties,r,`${t}/${wo(l)}`,n[l]));for(const l of a){const u=e.properties[l];e.required&&e.required.includes(l)?(yield*tt(u,r,`${t}/${wo(l)}`,n[l]),Rs(e)&&!(l in n)&&(yield W(T.ObjectRequiredProperty,u,`${t}/${wo(l)}`,void 0))):Ar.IsExactOptionalProperty(n,l)&&(yield*tt(u,r,`${t}/${wo(l)}`,n[l]))}}i(IP,"FromObject$3");function*NP(e,r,t,n){G5(n)||(yield W(T.Promise,e,t,n))}i(NP,"FromPromise$1");function*BP(e,r,t,n){if(!Ar.IsRecordLike(n))return yield W(T.Object,e,t,n);ke(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(T.ObjectMinProperties,e,t,n)),ke(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(T.ObjectMaxProperties,e,t,n));const[o,a]=Object.entries(e.patternProperties)[0],s=new RegExp(o);for(const[l,u]of Object.entries(n))s.test(l)&&(yield*tt(a,r,`${t}/${wo(l)}`,u));if(typeof e.additionalProperties=="object")for(const[l,u]of Object.entries(n))s.test(l)||(yield*tt(e.additionalProperties,r,`${t}/${wo(l)}`,u));if(e.additionalProperties===!1){for(const[l,u]of Object.entries(n))if(!s.test(l))return yield W(T.ObjectAdditionalProperties,e,`${t}/${wo(l)}`,u)}}i(BP,"FromRecord$3");function*OP(e,r,t,n){yield*tt(Tn(e,r),r,t,n)}i(OP,"FromRef$3");function*RP(e,r,t,n){if(!nn(n))return yield W(T.String,e,t,n);if(ke(e.minLength)&&!(n.length>=e.minLength)&&(yield W(T.StringMinLength,e,t,n)),ke(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(T.StringMaxLength,e,t,n)),!new RegExp(e.source,e.flags).test(n))return yield W(T.RegExp,e,t,n)}i(RP,"FromRegExp");function*LP(e,r,t,n){if(!nn(n))return yield W(T.String,e,t,n);ke(e.minLength)&&!(n.length>=e.minLength)&&(yield W(T.StringMinLength,e,t,n)),ke(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(T.StringMaxLength,e,t,n)),nn(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield W(T.StringPattern,e,t,n))),nn(e.format)&&(kp(e.format)?$p(e.format)(n)||(yield W(T.StringFormat,e,t,n)):yield W(T.StringFormatUnknown,e,t,n))}i(LP,"FromString");function*jP(e,r,t,n){Nd(n)||(yield W(T.Symbol,e,t,n))}i(jP,"FromSymbol");function*UP(e,r,t,n){if(!nn(n))return yield W(T.String,e,t,n);new RegExp(e.pattern).test(n)||(yield W(T.StringPattern,e,t,n))}i(UP,"FromTemplateLiteral");function*_P(e,r,t,n){yield*tt(Tn(e,r),r,t,n)}i(_P,"FromThis$3");function*zP(e,r,t,n){if(!un(n))return yield W(T.Tuple,e,t,n);if(e.items===void 0&&n.length!==0)return yield W(T.TupleLength,e,t,n);if(n.length!==e.maxItems)return yield W(T.TupleLength,e,t,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*tt(e.items[o],r,`${t}/${o}`,n[o])}i(zP,"FromTuple$3");function*qP(e,r,t,n){$i(n)||(yield W(T.Undefined,e,t,n))}i(qP,"FromUndefined");function*VP(e,r,t,n){if(Zc(e,r,n))return;const o=e.anyOf.map(a=>new Yk(tt(a,r,t,n)));yield W(T.Union,e,t,n,o)}i(VP,"FromUnion$3");function*WP(e,r,t,n){if(!dp(n))return yield W(T.Uint8Array,e,t,n);ke(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield W(T.Uint8ArrayMaxByteLength,e,t,n)),ke(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield W(T.Uint8ArrayMinByteLength,e,t,n))}i(WP,"FromUint8Array");function*KP(e,r,t,n){}i(KP,"FromUnknown");function*HP(e,r,t,n){Ar.IsVoidLike(n)||(yield W(T.Void,e,t,n))}i(HP,"FromVoid");function*GP(e,r,t,n){Cp(e[z])(e,n)||(yield W(T.Kind,e,t,n))}i(GP,"FromKind");function*tt(e,r,t,n){const o=ke(e.$id)?[...r,e]:r,a=e;switch(a[z]){case"Any":return yield*pP();case"Argument":return yield*mP();case"Array":return yield*bP(a,o,t,n);case"AsyncIterator":return yield*vP(a,o,t,n);case"BigInt":return yield*yP(a,o,t,n);case"Boolean":return yield*wP(a,o,t,n);case"Constructor":return yield*kP(a,o,t,n);case"Date":return yield*$P(a,o,t,n);case"Function":return yield*xP(a,o,t,n);case"Import":return yield*DP(a,o,t,n);case"Integer":return yield*CP(a,o,t,n);case"Intersect":return yield*EP(a,o,t,n);case"Iterator":return yield*AP(a,o,t,n);case"Literal":return yield*FP(a,o,t,n);case"Never":return yield*SP(a,o,t,n);case"Not":return yield*MP(a,o,t,n);case"Null":return yield*TP(a,o,t,n);case"Number":return yield*PP(a,o,t,n);case"Object":return yield*IP(a,o,t,n);case"Promise":return yield*NP(a,o,t,n);case"Record":return yield*BP(a,o,t,n);case"Ref":return yield*OP(a,o,t,n);case"RegExp":return yield*RP(a,o,t,n);case"String":return yield*LP(a,o,t,n);case"Symbol":return yield*jP(a,o,t,n);case"TemplateLiteral":return yield*UP(a,o,t,n);case"This":return yield*_P(a,o,t,n);case"Tuple":return yield*zP(a,o,t,n);case"Undefined":return yield*qP(a,o,t,n);case"Union":return yield*VP(a,o,t,n);case"Uint8Array":return yield*WP(a,o,t,n);case"Unknown":return yield*KP();case"Void":return yield*HP(a,o,t,n);default:if(!mi(a[z]))throw new hP(e);return yield*GP(a,o,t,n)}}i(tt,"Visit$3");function ZP(...e){const r=e.length===3?tt(e[0],e[1],"",e[2]):tt(e[0],[],"",e[1]);return new Yk(r)}i(ZP,"Errors");class YP extends pt{static{i(this,"TransformDecodeCheckError")}constructor(r,t,n){super("Unable to decode value as it does not match the expected schema"),this.schema=r,this.value=t,this.error=n}}class JP extends pt{static{i(this,"TransformDecodeError")}constructor(r,t,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=r,this.path=t,this.value=n,this.error=o}}function fr(e,r,t){try{return nr(e)?e[_t].Decode(t):t}catch(n){throw new JP(e,r,t,n)}}i(fr,"Default$1");function XP(e,r,t,n){return un(n)?fr(e,t,n.map((o,a)=>Jn(e.items,r,`${t}/${a}`,o))):fr(e,t,n)}i(XP,"FromArray$2");function QP(e,r,t,n){if(!uo(n)||X5(n))return fr(e,t,n);const o=Ck(e),a=o.map(g=>g[0]),s={...n};for(const[g,h]of o)g in s&&(s[g]=Jn(h,r,`${t}/${g}`,s[g]));if(!nr(e.unevaluatedProperties))return fr(e,t,s);const l=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,f={...s};for(const g of l)a.includes(g)||(f[g]=fr(u,`${t}/${g}`,f[g]));return fr(e,t,f)}i(QP,"FromIntersect$2");function eI(e,r,t,n){const o=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref],s=Jn(a,[...r,...o],t,n);return fr(e,t,s)}i(eI,"FromImport$2");function rI(e,r,t,n){return fr(e,t,Jn(e.not,r,t,n))}i(rI,"FromNot$2");function tI(e,r,t,n){if(!uo(n))return fr(e,t,n);const o=Da(e),a={...n};for(const f of o)Z5(a,f)&&($i(a[f])&&(!Cu(e.properties[f])||Ar.IsExactOptionalProperty(a,f))||(a[f]=Jn(e.properties[f],r,`${t}/${f}`,a[f])));if(!Pt(e.additionalProperties))return fr(e,t,a);const s=Object.getOwnPropertyNames(a),l=e.additionalProperties,u={...a};for(const f of s)o.includes(f)||(u[f]=fr(l,`${t}/${f}`,u[f]));return fr(e,t,u)}i(tI,"FromObject$2");function nI(e,r,t,n){if(!uo(n))return fr(e,t,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],a=new RegExp(o),s={...n};for(const g of Object.getOwnPropertyNames(n))a.test(g)&&(s[g]=Jn(e.patternProperties[o],r,`${t}/${g}`,s[g]));if(!Pt(e.additionalProperties))return fr(e,t,s);const l=Object.getOwnPropertyNames(s),u=e.additionalProperties,f={...s};for(const g of l)a.test(g)||(f[g]=fr(u,`${t}/${g}`,f[g]));return fr(e,t,f)}i(nI,"FromRecord$2");function oI(e,r,t,n){const o=Tn(e,r);return fr(e,t,Jn(o,r,t,n))}i(oI,"FromRef$2");function iI(e,r,t,n){const o=Tn(e,r);return fr(e,t,Jn(o,r,t,n))}i(iI,"FromThis$2");function aI(e,r,t,n){return un(n)&&un(e.items)?fr(e,t,e.items.map((o,a)=>Jn(o,r,`${t}/${a}`,n[a]))):fr(e,t,n)}i(aI,"FromTuple$2");function sI(e,r,t,n){for(const o of e.anyOf){if(!Zc(o,r,n))continue;const a=Jn(o,r,t,n);return fr(e,t,a)}return fr(e,t,n)}i(sI,"FromUnion$2");function Jn(e,r,t,n){const o=rf(e,r),a=e;switch(e[z]){case"Array":return XP(a,o,t,n);case"Import":return eI(a,o,t,n);case"Intersect":return QP(a,o,t,n);case"Not":return rI(a,o,t,n);case"Object":return tI(a,o,t,n);case"Record":return nI(a,o,t,n);case"Ref":return oI(a,o,t,n);case"Symbol":return fr(a,t,n);case"This":return iI(a,o,t,n);case"Tuple":return aI(a,o,t,n);case"Union":return sI(a,o,t,n);default:return fr(a,t,n)}}i(Jn,"Visit$2");function lI(e,r,t){return Jn(e,r,"",t)}i(lI,"TransformDecode");class uI extends pt{static{i(this,"TransformEncodeCheckError")}constructor(r,t,n){super("The encoded value does not match the expected schema"),this.schema=r,this.value=t,this.error=n}}class cI extends pt{static{i(this,"TransformEncodeError")}constructor(r,t,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=r,this.path=t,this.value=n,this.error=o}}function ft(e,r,t){try{return nr(e)?e[_t].Encode(t):t}catch(n){throw new cI(e,r,t,n)}}i(ft,"Default");function dI(e,r,t,n){const o=ft(e,t,n);return un(o)?o.map((a,s)=>Zn(e.items,r,`${t}/${s}`,a)):o}i(dI,"FromArray$1");function fI(e,r,t,n){const o=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref],s=ft(e,t,n);return Zn(a,[...r,...o],t,s)}i(fI,"FromImport$1");function gI(e,r,t,n){const o=ft(e,t,n);if(!uo(n)||X5(n))return o;const a=Ck(e),s=a.map(h=>h[0]),l={...o};for(const[h,p]of a)h in l&&(l[h]=Zn(p,r,`${t}/${h}`,l[h]));if(!nr(e.unevaluatedProperties))return l;const u=Object.getOwnPropertyNames(l),f=e.unevaluatedProperties,g={...l};for(const h of u)s.includes(h)||(g[h]=ft(f,`${t}/${h}`,g[h]));return g}i(gI,"FromIntersect$1");function hI(e,r,t,n){return ft(e.not,t,ft(e,t,n))}i(hI,"FromNot$1");function pI(e,r,t,n){const o=ft(e,t,n);if(!uo(o))return o;const a=Da(e),s={...o};for(const g of a)Z5(s,g)&&($i(s[g])&&(!Cu(e.properties[g])||Ar.IsExactOptionalProperty(s,g))||(s[g]=Zn(e.properties[g],r,`${t}/${g}`,s[g])));if(!Pt(e.additionalProperties))return s;const l=Object.getOwnPropertyNames(s),u=e.additionalProperties,f={...s};for(const g of l)a.includes(g)||(f[g]=ft(u,`${t}/${g}`,f[g]));return f}i(pI,"FromObject$1");function mI(e,r,t,n){const o=ft(e,t,n);if(!uo(n))return o;const a=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(a),l={...o};for(const h of Object.getOwnPropertyNames(n))s.test(h)&&(l[h]=Zn(e.patternProperties[a],r,`${t}/${h}`,l[h]));if(!Pt(e.additionalProperties))return l;const u=Object.getOwnPropertyNames(l),f=e.additionalProperties,g={...l};for(const h of u)s.test(h)||(g[h]=ft(f,`${t}/${h}`,g[h]));return g}i(mI,"FromRecord$1");function bI(e,r,t,n){const o=Tn(e,r),a=Zn(o,r,t,n);return ft(e,t,a)}i(bI,"FromRef$1");function vI(e,r,t,n){const o=Tn(e,r),a=Zn(o,r,t,n);return ft(e,t,a)}i(vI,"FromThis$1");function yI(e,r,t,n){const o=ft(e,t,n);return un(e.items)?e.items.map((a,s)=>Zn(a,r,`${t}/${s}`,o[s])):[]}i(yI,"FromTuple$1");function wI(e,r,t,n){for(const o of e.anyOf){if(!Zc(o,r,n))continue;const a=Zn(o,r,t,n);return ft(e,t,a)}for(const o of e.anyOf){const a=Zn(o,r,t,n);if(Zc(e,r,a))return ft(e,t,a)}return ft(e,t,n)}i(wI,"FromUnion$1");function Zn(e,r,t,n){const o=rf(e,r),a=e;switch(e[z]){case"Array":return dI(a,o,t,n);case"Import":return fI(a,o,t,n);case"Intersect":return gI(a,o,t,n);case"Not":return hI(a,o,t,n);case"Object":return pI(a,o,t,n);case"Record":return mI(a,o,t,n);case"Ref":return bI(a,o,t,n);case"This":return vI(a,o,t,n);case"Tuple":return yI(a,o,t,n);case"Union":return wI(a,o,t,n);default:return ft(a,t,n)}}i(Zn,"Visit$1");function kI(e,r,t){return Zn(e,r,"",t)}i(kI,"TransformEncode");function $I(e,r){return nr(e)||Hr(e.items,r)}i($I,"FromArray");function xI(e,r){return nr(e)||Hr(e.items,r)}i(xI,"FromAsyncIterator");function DI(e,r){return nr(e)||Hr(e.returns,r)||e.parameters.some(t=>Hr(t,r))}i(DI,"FromConstructor");function CI(e,r){return nr(e)||Hr(e.returns,r)||e.parameters.some(t=>Hr(t,r))}i(CI,"FromFunction");function EI(e,r){return nr(e)||nr(e.unevaluatedProperties)||e.allOf.some(t=>Hr(t,r))}i(EI,"FromIntersect");function AI(e,r){const t=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,a)=>[...o,e.$defs[a]],[]),n=e.$defs[e.$ref];return nr(e)||Hr(n,[...t,...r])}i(AI,"FromImport");function FI(e,r){return nr(e)||Hr(e.items,r)}i(FI,"FromIterator");function SI(e,r){return nr(e)||Hr(e.not,r)}i(SI,"FromNot");function MI(e,r){return nr(e)||Object.values(e.properties).some(t=>Hr(t,r))||Pt(e.additionalProperties)&&Hr(e.additionalProperties,r)}i(MI,"FromObject");function TI(e,r){return nr(e)||Hr(e.item,r)}i(TI,"FromPromise");function PI(e,r){const t=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[t];return nr(e)||Hr(n,r)||Pt(e.additionalProperties)&&nr(e.additionalProperties)}i(PI,"FromRecord");function II(e,r){return nr(e)?!0:Hr(Tn(e,r),r)}i(II,"FromRef");function NI(e,r){return nr(e)?!0:Hr(Tn(e,r),r)}i(NI,"FromThis");function BI(e,r){return nr(e)||!$i(e.items)&&e.items.some(t=>Hr(t,r))}i(BI,"FromTuple");function OI(e,r){return nr(e)||e.anyOf.some(t=>Hr(t,r))}i(OI,"FromUnion");function Hr(e,r){const t=rf(e,r),n=e;if(e.$id&&Ug.has(e.$id))return!1;switch(e.$id&&Ug.add(e.$id),e[z]){case"Array":return $I(n,t);case"AsyncIterator":return xI(n,t);case"Constructor":return DI(n,t);case"Function":return CI(n,t);case"Import":return AI(n,t);case"Intersect":return EI(n,t);case"Iterator":return FI(n,t);case"Not":return SI(n,t);case"Object":return MI(n,t);case"Promise":return TI(n,t);case"Record":return PI(n,t);case"Ref":return II(n,t);case"This":return NI(n,t);case"Tuple":return BI(n,t);case"Union":return OI(n,t);default:return nr(e)}}i(Hr,"Visit");const Ug=new Set;function RI(e,r){return Ug.clear(),Hr(e,r)}i(RI,"HasTransform");class LI{static{i(this,"TypeCheck")}constructor(r,t,n,o){this.schema=r,this.references=t,this.checkFunc=n,this.code=o,this.hasTransform=RI(r,t)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(r){return ZP(this.schema,this.references,r)}Check(r){return this.checkFunc(r)}Decode(r){if(!this.checkFunc(r))throw new YP(this.schema,r,this.Errors(r).First());return this.hasTransform?lI(this.schema,this.references,r):r}Encode(r){const t=this.hasTransform?kI(this.schema,this.references,r):r;if(!this.checkFunc(t))throw new uI(this.schema,r,this.Errors(r).First());return t}}var Co;(function(e){function r(a){return a===36}i(r,"DollarSign"),e.DollarSign=r;function t(a){return a===95}i(t,"IsUnderscore"),e.IsUnderscore=t;function n(a){return a>=65&&a<=90||a>=97&&a<=122}i(n,"IsAlpha"),e.IsAlpha=n;function o(a){return a>=48&&a<=57}i(o,"IsNumeric"),e.IsNumeric=o})(Co||(Co={}));var Yc;(function(e){function r(a){return a.length===0?!1:Co.IsNumeric(a.charCodeAt(0))}i(r,"IsFirstCharacterNumeric");function t(a){if(r(a))return!1;for(let s=0;s<a.length;s++){const l=a.charCodeAt(s);if(!(Co.IsAlpha(l)||Co.IsNumeric(l)||Co.DollarSign(l)||Co.IsUnderscore(l)))return!1}return!0}i(t,"IsAccessor");function n(a){return a.replace(/'/g,"\\'")}i(n,"EscapeHyphen");function o(a,s){return t(s)?`${a}.${s}`:`${a}['${n(s)}']`}i(o,"Encode"),e.Encode=o})(Yc||(Yc={}));var _g;(function(e){function r(t){const n=[];for(let o=0;o<t.length;o++){const a=t.charCodeAt(o);Co.IsNumeric(a)||Co.IsAlpha(a)?n.push(t.charAt(o)):n.push(`_${a}_`)}return n.join("").replace(/__/g,"_")}i(r,"Encode"),e.Encode=r})(_g||(_g={}));var zg;(function(e){function r(t){return t.replace(/'/g,"\\'")}i(r,"Escape"),e.Escape=r})(zg||(zg={}));class jI extends pt{static{i(this,"TypeCompilerUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}class fy extends pt{static{i(this,"TypeCompilerTypeGuardError")}constructor(r){super("Preflight validation check failed to guard for the given schema"),this.schema=r}}var ji;(function(e){function r(s,l,u){return Ar.ExactOptionalPropertyTypes?`('${l}' in ${s} ? ${u} : true)`:`(${Yc.Encode(s,l)} !== undefined ? ${u} : true)`}i(r,"IsExactOptionalProperty"),e.IsExactOptionalProperty=r;function t(s){return Ar.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}i(t,"IsObjectLike"),e.IsObjectLike=t;function n(s){return Ar.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}i(n,"IsRecordLike"),e.IsRecordLike=n;function o(s){return Ar.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}i(o,"IsNumberLike"),e.IsNumberLike=o;function a(s){return Ar.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}i(a,"IsVoidLike"),e.IsVoidLike=a})(ji||(ji={}));var Ml;(function(e){function r(D){return D[z]==="Any"||D[z]==="Unknown"}i(r,"IsAnyOrUnknown");function*t(D,G,F){yield"true"}i(t,"FromAny");function*n(D,G,F){yield"true"}i(n,"FromArgument");function*o(D,G,F){yield`Array.isArray(${F})`;const[ie,X]=[Pn("value","any"),Pn("acc","number")];pe(D.maxItems)&&(yield`${F}.length <= ${D.maxItems}`),pe(D.minItems)&&(yield`${F}.length >= ${D.minItems}`);const Q=Ur(D.items,G,"value");if(yield`((array) => { for(const ${ie} of array) if(!(${Q})) { return false }; return true; })(${F})`,br(D.contains)||pe(D.minContains)||pe(D.maxContains)){const Xe=br(D.contains)?D.contains:yr(),Nt=Ur(Xe,G,"value"),po=pe(D.minContains)?[`(count >= ${D.minContains})`]:[],In=pe(D.maxContains)?[`(count <= ${D.maxContains})`]:[],eo=`const count = value.reduce((${X}, ${ie}) => ${Nt} ? acc + 1 : acc, 0)`,Ru=["(count > 0)",...po,...In].join(" && ");yield`((${ie}) => { ${eo}; return ${Ru}})(${F})`}D.uniqueItems===!0&&(yield`((${ie}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${F})`)}i(o,"FromArray");function*a(D,G,F){yield`(typeof value === 'object' && Symbol.asyncIterator in ${F})`}i(a,"FromAsyncIterator");function*s(D,G,F){yield`(typeof ${F} === 'bigint')`,Do(D.exclusiveMaximum)&&(yield`${F} < BigInt(${D.exclusiveMaximum})`),Do(D.exclusiveMinimum)&&(yield`${F} > BigInt(${D.exclusiveMinimum})`),Do(D.maximum)&&(yield`${F} <= BigInt(${D.maximum})`),Do(D.minimum)&&(yield`${F} >= BigInt(${D.minimum})`),Do(D.multipleOf)&&(yield`(${F} % BigInt(${D.multipleOf})) === 0`)}i(s,"FromBigInt");function*l(D,G,F){yield`(typeof ${F} === 'boolean')`}i(l,"FromBoolean");function*u(D,G,F){yield*at(D.returns,G,`${F}.prototype`)}i(u,"FromConstructor");function*f(D,G,F){yield`(${F} instanceof Date) && Number.isFinite(${F}.getTime())`,pe(D.exclusiveMaximumTimestamp)&&(yield`${F}.getTime() < ${D.exclusiveMaximumTimestamp}`),pe(D.exclusiveMinimumTimestamp)&&(yield`${F}.getTime() > ${D.exclusiveMinimumTimestamp}`),pe(D.maximumTimestamp)&&(yield`${F}.getTime() <= ${D.maximumTimestamp}`),pe(D.minimumTimestamp)&&(yield`${F}.getTime() >= ${D.minimumTimestamp}`),pe(D.multipleOfTimestamp)&&(yield`(${F}.getTime() % ${D.multipleOfTimestamp}) === 0`)}i(f,"FromDate");function*g(D,G,F){yield`(typeof ${F} === 'function')`}i(g,"FromFunction");function*h(D,G,F){const ie=globalThis.Object.getOwnPropertyNames(D.$defs).reduce((X,Q)=>[...X,D.$defs[Q]],[]);yield*at(Bs(D.$ref),[...G,...ie],F)}i(h,"FromImport");function*p(D,G,F){yield`Number.isInteger(${F})`,pe(D.exclusiveMaximum)&&(yield`${F} < ${D.exclusiveMaximum}`),pe(D.exclusiveMinimum)&&(yield`${F} > ${D.exclusiveMinimum}`),pe(D.maximum)&&(yield`${F} <= ${D.maximum}`),pe(D.minimum)&&(yield`${F} >= ${D.minimum}`),pe(D.multipleOf)&&(yield`(${F} % ${D.multipleOf}) === 0`)}i(p,"FromInteger");function*b(D,G,F){const ie=D.allOf.map(X=>Ur(X,G,F)).join(" && ");if(D.unevaluatedProperties===!1){const X=vt(`${new RegExp(ps(D))};`),Q=`Object.getOwnPropertyNames(${F}).every(key => ${X}.test(key))`;yield`(${ie} && ${Q})`}else if(br(D.unevaluatedProperties)){const X=vt(`${new RegExp(ps(D))};`),Q=`Object.getOwnPropertyNames(${F}).every(key => ${X}.test(key) || ${Ur(D.unevaluatedProperties,G,`${F}[key]`)})`;yield`(${ie} && ${Q})`}else yield`(${ie})`}i(b,"FromIntersect");function*v(D,G,F){yield`(typeof value === 'object' && Symbol.iterator in ${F})`}i(v,"FromIterator");function*$(D,G,F){typeof D.const=="number"||typeof D.const=="boolean"?yield`(${F} === ${D.const})`:yield`(${F} === '${zg.Escape(D.const)}')`}i($,"FromLiteral");function*C(D,G,F){yield"false"}i(C,"FromNever");function*E(D,G,F){yield`(!${Ur(D.not,G,F)})`}i(E,"FromNot");function*A(D,G,F){yield`(${F} === null)`}i(A,"FromNull");function*N(D,G,F){yield ji.IsNumberLike(F),pe(D.exclusiveMaximum)&&(yield`${F} < ${D.exclusiveMaximum}`),pe(D.exclusiveMinimum)&&(yield`${F} > ${D.exclusiveMinimum}`),pe(D.maximum)&&(yield`${F} <= ${D.maximum}`),pe(D.minimum)&&(yield`${F} >= ${D.minimum}`),pe(D.multipleOf)&&(yield`(${F} % ${D.multipleOf}) === 0`)}i(N,"FromNumber");function*_(D,G,F){yield ji.IsObjectLike(F),pe(D.minProperties)&&(yield`Object.getOwnPropertyNames(${F}).length >= ${D.minProperties}`),pe(D.maxProperties)&&(yield`Object.getOwnPropertyNames(${F}).length <= ${D.maxProperties}`);const ie=Object.getOwnPropertyNames(D.properties);for(const X of ie){const Q=Yc.Encode(F,X),Xe=D.properties[X];if(D.required&&D.required.includes(X))yield*at(Xe,G,Q),(Rs(Xe)||r(Xe))&&(yield`('${X}' in ${F})`);else{const Nt=Ur(Xe,G,Q);yield ji.IsExactOptionalProperty(F,X,Nt)}}if(D.additionalProperties===!1)if(D.required&&D.required.length===ie.length)yield`Object.getOwnPropertyNames(${F}).length === ${ie.length}`;else{const X=`[${ie.map(Q=>`'${Q}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${F}).every(key => ${X}.includes(key))`}if(typeof D.additionalProperties=="object"){const X=Ur(D.additionalProperties,G,`${F}[key]`),Q=`[${ie.map(Xe=>`'${Xe}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${F}).every(key => ${Q}.includes(key) || ${X}))`}}i(_,"FromObject");function*H(D,G,F){yield`${F} instanceof Promise`}i(H,"FromPromise");function*ce(D,G,F){yield ji.IsRecordLike(F),pe(D.minProperties)&&(yield`Object.getOwnPropertyNames(${F}).length >= ${D.minProperties}`),pe(D.maxProperties)&&(yield`Object.getOwnPropertyNames(${F}).length <= ${D.maxProperties}`);const[ie,X]=Object.entries(D.patternProperties)[0],Q=vt(`${new RegExp(ie)}`),Xe=Ur(X,G,"value"),Nt=br(D.additionalProperties)?Ur(D.additionalProperties,G,F):D.additionalProperties===!1?"false":"true",po=`(${Q}.test(key) ? ${Xe} : ${Nt})`;yield`(Object.entries(${F}).every(([key, value]) => ${po}))`}i(ce,"FromRecord");function*Te(D,G,F){const ie=Tn(D,G);if(Ge.functions.has(D.$ref))return yield`${mn(D.$ref)}(${F})`;yield*at(ie,G,F)}i(Te,"FromRef");function*be(D,G,F){const ie=vt(`${new RegExp(D.source,D.flags)};`);yield`(typeof ${F} === 'string')`,pe(D.maxLength)&&(yield`${F}.length <= ${D.maxLength}`),pe(D.minLength)&&(yield`${F}.length >= ${D.minLength}`),yield`${ie}.test(${F})`}i(be,"FromRegExp");function*Se(D,G,F){yield`(typeof ${F} === 'string')`,pe(D.maxLength)&&(yield`${F}.length <= ${D.maxLength}`),pe(D.minLength)&&(yield`${F}.length >= ${D.minLength}`),D.pattern!==void 0&&(yield`${vt(`${new RegExp(D.pattern)};`)}.test(${F})`),D.format!==void 0&&(yield`format('${D.format}', ${F})`)}i(Se,"FromString");function*or(D,G,F){yield`(typeof ${F} === 'symbol')`}i(or,"FromSymbol");function*ir(D,G,F){yield`(typeof ${F} === 'string')`,yield`${vt(`${new RegExp(D.pattern)};`)}.test(${F})`}i(ir,"FromTemplateLiteral");function*jr(D,G,F){yield`${mn(D.$ref)}(${F})`}i(jr,"FromThis");function*Zt(D,G,F){if(yield`Array.isArray(${F})`,D.items===void 0)return yield`${F}.length === 0`;yield`(${F}.length === ${D.maxItems})`;for(let ie=0;ie<D.items.length;ie++)yield`${Ur(D.items[ie],G,`${F}[${ie}]`)}`}i(Zt,"FromTuple");function*At(D,G,F){yield`${F} === undefined`}i(At,"FromUndefined");function*go(D,G,F){yield`(${D.anyOf.map(X=>Ur(X,G,F)).join(" || ")})`}i(go,"FromUnion");function*Jr(D,G,F){yield`${F} instanceof Uint8Array`,pe(D.maxByteLength)&&(yield`(${F}.length <= ${D.maxByteLength})`),pe(D.minByteLength)&&(yield`(${F}.length >= ${D.minByteLength})`)}i(Jr,"FromUint8Array");function*Qn(D,G,F){yield"true"}i(Qn,"FromUnknown");function*ho(D,G,F){yield ji.IsVoidLike(F)}i(ho,"FromVoid");function*pn(D,G,F){const ie=Ge.instances.size;Ge.instances.set(ie,D),yield`kind('${D[z]}', ${ie}, ${F})`}i(pn,"FromKind");function*at(D,G,F,ie=!0){const X=nn(D.$id)?[...G,D]:G,Q=D;if(ie&&nn(D.$id)){const Xe=mn(D.$id);if(Ge.functions.has(Xe))return yield`${Xe}(${F})`;{Ge.functions.set(Xe,"<deferred>");const Nt=bn(Xe,D,G,"value",!1);return Ge.functions.set(Xe,Nt),yield`${Xe}(${F})`}}switch(Q[z]){case"Any":return yield*t();case"Argument":return yield*n();case"Array":return yield*o(Q,X,F);case"AsyncIterator":return yield*a(Q,X,F);case"BigInt":return yield*s(Q,X,F);case"Boolean":return yield*l(Q,X,F);case"Constructor":return yield*u(Q,X,F);case"Date":return yield*f(Q,X,F);case"Function":return yield*g(Q,X,F);case"Import":return yield*h(Q,X,F);case"Integer":return yield*p(Q,X,F);case"Intersect":return yield*b(Q,X,F);case"Iterator":return yield*v(Q,X,F);case"Literal":return yield*$(Q,X,F);case"Never":return yield*C();case"Not":return yield*E(Q,X,F);case"Null":return yield*A(Q,X,F);case"Number":return yield*N(Q,X,F);case"Object":return yield*_(Q,X,F);case"Promise":return yield*H(Q,X,F);case"Record":return yield*ce(Q,X,F);case"Ref":return yield*Te(Q,X,F);case"RegExp":return yield*be(Q,X,F);case"String":return yield*Se(Q,X,F);case"Symbol":return yield*or(Q,X,F);case"TemplateLiteral":return yield*ir(Q,X,F);case"This":return yield*jr(Q,X,F);case"Tuple":return yield*Zt(Q,X,F);case"Undefined":return yield*At(Q,X,F);case"Union":return yield*go(Q,X,F);case"Uint8Array":return yield*Jr(Q,X,F);case"Unknown":return yield*Qn();case"Void":return yield*ho(Q,X,F);default:if(!mi(Q[z]))throw new jI(D);return yield*pn(Q,X,F)}}i(at,"Visit");const Ge={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Ur(D,G,F,ie=!0){return`(${[...at(D,G,F,ie)].join(" && ")})`}i(Ur,"CreateExpression");function mn(D){return`check_${_g.Encode(D)}`}i(mn,"CreateFunctionName");function vt(D){const G=`local_${Ge.variables.size}`;return Ge.variables.set(G,`const ${G} = ${D}`),G}i(vt,"CreateVariable");function bn(D,G,F,ie,X=!0){const[Q,Xe]=[`
`,eo=>"".padStart(eo," ")],Nt=Pn("value","any"),po=zo("boolean"),In=[...at(G,F,ie,X)].map(eo=>`${Xe(4)}${eo}`).join(` &&${Q}`);return`function ${D}(${Nt})${po} {${Q}${Xe(2)}return (${Q}${In}${Q}${Xe(2)})
}`}i(bn,"CreateFunction");function Pn(D,G){const F=Ge.language==="typescript"?`: ${G}`:"";return`${D}${F}`}i(Pn,"CreateParameter");function zo(D){return Ge.language==="typescript"?`: ${D}`:""}i(zo,"CreateReturns");function Ou(D,G,F){const ie=bn("check",D,G,"value"),X=Pn("value","any"),Q=zo("boolean"),Xe=[...Ge.functions.values()],Nt=[...Ge.variables.values()],po=nn(D.$id)?`return function check(${X})${Q} {
  return ${mn(D.$id)}(value)
}`:`return ${ie}`;return[...Nt,...Xe,po].join(`
`)}i(Ou,"Build");function Sa(...D){const G={language:"javascript"},[F,ie,X]=D.length===2&&un(D[1])?[D[0],D[1],G]:D.length===2&&!un(D[1])?[D[0],[],D[1]]:D.length===3?[D[0],D[1],D[2]]:D.length===1?[D[0],[],G]:[null,[],G];if(Ge.language=X.language,Ge.variables.clear(),Ge.functions.clear(),Ge.instances.clear(),!br(F))throw new fy(F);for(const Q of ie)if(!br(Q))throw new fy(Q);return Ou(F,ie)}i(Sa,"Code"),e.Code=Sa;function r4(D,G=[]){const F=Sa(D,G,{language:"javascript"}),ie=globalThis.Function("kind","format","hash",F),X=new Map(Ge.instances);function Q(In,eo,Ru){if(!mi(In)||!X.has(eo))return!1;const t4=Cp(In),n4=X.get(eo);return t4(n4,Ru)}i(Q,"typeRegistryFunction");function Xe(In,eo){return kp(In)?$p(In)(eo):!1}i(Xe,"formatRegistryFunction");function Nt(In){return Gp(In)}i(Nt,"hashFunction");const po=ie(Q,Xe,Nt);return new LI(D,G,po,F)}i(r4,"Compile"),e.Compile=r4})(Ml||(Ml={}));const qg={};function Jk(e,r){e in qg||(qg[e]=r)}i(Jk,"registerErrorMessage");let gy=!1;function UI(){gy||(gy=!0,fT(e=>(qg[e.schema[z]]||Wk)(e)))}i(UI,"setShapeDefinitionErrorMessage");const Vg=Symbol.for("object-shape-tester.shape-identifier");function _e(e){if(UI(),Zp(e))return e;const r=Wg(e),t=Ui(r,!1),n=Ui(r,!0),o={$_schema:r,$_schemaNoExtraKeys:t,$_schemaExtraKeys:n,default:r.default,$_compiledSchema:Ml.Compile(r),$_compiledSchemaNoExtraKeys:Ml.Compile(t),$_compiledSchemaExtraKeys:Ml.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[Vg]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}i(_e,"defineShape");function Zp(e){return M.hasKey(e,Vg)&&!!e[Vg]}i(Zp,"isShape");function Yp(e){return M.hasKey(e,z)}i(Yp,"isSchema");function Ui(e,r){const t={...e};if(Array.isArray(e.anyOf)&&(t.anyOf=e.anyOf.map(n=>Ui(n,r))),Array.isArray(e.allOf)&&(t.allOf=e.allOf.map(n=>Ui(n,r))),Yp(e.items)?t.items=Ui(e.items,r):Array.isArray(e.items)&&(t.items=e.items.map(n=>Ui(n,r))),M.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,a])=>{n[o]=Ui(a,r)}),t.properties=n}return t.additionalProperties=r,t}i(Ui,"forceAdditionalProperties");function Wg(e){if(Yp(e))return e;if(Zp(e))return e.$_schema;if(M.isFunction(e))return Qe.Function([],Qe.Any(),{default:e});if(M.isObject(e)){const r={},t={};return Object.entries(e).forEach(([n,o])=>{const a=Wg(o);t[n]=a,r[n]=a.default}),Qe.Object(t,{default:r})}else{if(M.isArray(e))return Qe.Array(Qe.Union(e.map(r=>Wg(r))),{default:[]});if(M.isPrimitive(e)){if(M.isString(e))return Qe.String({default:e});if(M.isNumber(e))return Qe.Number({default:e});if(M.isBoolean(e))return Qe.Boolean({default:e});if(M.isSymbol(e))return Qe.Symbol({default:e});if(M.isNull(e))return Qe.Null({default:null});if(M.isUndefined(e))return Qe.Undefined({default:void 0});if(M.isBigInt(e))return Qe.BigInt({default:e});Er.tsType(e).equals(),Er.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${x(e)}`)}}i(Wg,"shapeInitToSchema");function _I({checkValue:e,default:r,name:t}){return mi(t)||Dp(t,(n,o)=>e(o)),(n=r)=>_e(Qe.Unsafe({[z]:t,default:n}))}i(_I,"createCustomShape");function aa(e,r){const t=Qt(e);if(r!=null&&!t.includes(r))throw new TypeError("enumShape default must be a subset of the given enum.");return _e(Qe.Union(t.map(n=>Qe.Literal(n)),{default:r??t[0]}))}i(aa,"enumShape");function De(e){return M.isSymbol(e)?zI(e):_e(Qe.Const(e,{default:e}))}i(De,"exactShape");const rc="ExactSymbol";function zI(e){return mi(rc)||Dp(rc,(r,t)=>t===r.symbol),Jk(rc,({schema:r})=>`Expected symbol ${r.symbol?.description?k8({value:r.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),_e(Qe.Unsafe({[z]:rc,symbol:e,default:e}))}i(zI,"exactSymbolShape");function qI(...e){const r={},t=e.map(n=>{const o=_e(n);return Object.assign(r,o.default),o.$_schema});return _e(Qe.Composite(t,{default:r}))}i(qI,"intersectShape");function lt(e,r={}){Ar.ExactOptionalPropertyTypes=!0;const t=_e(e).$_schema,n=r.alsoUndefined?Qe.Union([Qe.Undefined(),t]):t;return _e(Qe.Optional(n))}i(lt,"optionalShape");function mr(...e){let r;const t=e.map((n,o)=>{const a=_e(n);return o||(r=a.default),a.$_schema});return _e(Qe.Union(t,{default:r}))}i(mr,"unionShape");class VI extends TypeError{static{i(this,"ShapeMismatchError")}errors;failureMessage;name="ShapeMismatchError";constructor(r,t){const n=r.map(a=>Xk(a)).join(`
`),o=fa(t,`Shape mismatch:
${Th(n,1)}`);super(o),this.errors=r,this.failureMessage=t}}function WI(e){return e.errors.flatMap(r=>Array.from(r))}i(WI,"getSubErrors");function Xk(e,r=0){const t=WI(e).map(o=>Xk(o,r+1)),n=[e.path,e.message].filter(M.isTruthy).join(": ")+(t.length?":":"");return[Th(n,r),...t].join(`
`)}i(Xk,"createErrorMessage");function ri(e,r,t={}){return Qk(r,t).Check(e)}i(ri,"checkValidShape");function Jc(e,r,t={},n){if(ri(e,r,t))return;const o=Array.from(Qk(r,t).Errors(e));if(o.length)throw new VI(o,n)}i(Jc,"assertValidShape");function Qk(e,r){return e=KI(e),r.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}i(Qk,"getCompiledSchema");function KI(e){return _e(e)}i(KI,"ensureShape");function Va({exclusiveMax:e,exclusiveMin:r,...t}){const{min:n,max:o}=$h(t),a=t.default??(o-n)/2+n,s=_e(Qe.Number({...r?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:a})),l=Sw(()=>Jc(a,s));if(l)throw ga(l,"Default range value is not within range.");return s}i(Va,"rangeShape");const wc="recordShape";function tf({keys:e,values:r,partial:t,additionalProperties:n}){HI();const o=e$(e),a=_e(r);return _e(Qe.Unsafe({[z]:wc,keysShape:o,valuesShape:a,isPartial:!!t,additionalProperties:!!n,default:GI({isPartial:!!t,keysShape:o,valuesShape:a})}))}i(tf,"recordShape");function HI(){mi(wc)||Dp(wc,(e,r)=>{if(typeof r!="object"||!r||Array.isArray(r))return!1;const t=Object.entries(r).every(([o,a])=>{const s=e.additionalProperties?!0:ri(o,e.keysShape),l=ri(a,e.valuesShape);return s&&l}),n=e.isPartial?!0:!hy(e.keysShape,r).length;return t&&n}),Jk(wc,e=>{const t=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=Vt(Object.entries(n),([u])=>u,(u,[f,g])=>!ri(f,t.keysShape)||!ri(g,t.valuesShape)),a=hy(t.keysShape,n),s=o.length?["Failure at keys",o.join(",")].join(": "):"",l=a.length?["Missing keys",a.join(",")].join(": "):"";return[s,l].filter(M.isTruthy).join(`
`)})}i(HI,"setRecordShapeRegistry");function hy(e,r){const t=Xc(e).filter(n=>M.isPropertyKey(n));return t.length?t.filter(n=>!M.hasKey(r,n)):[]}i(hy,"getMissingKeys");function GI({keysShape:e,valuesShape:r,isPartial:t}){if(t)return{};{const n=Xc(e),o=r.default;return Object.fromEntries(n.map(a=>[a,o]))}}i(GI,"createDefaultValue");function e$(e){return Zp(e)?e:Yp(e)?_e(e):M.isObject(e)?aa(e):M.isArray(e)&&M.isLengthAtLeast(e,1)?mr(...e.map(r=>De(r))):M.isPropertyKey(e)?_e(e):_e(Qe.Undefined())}i(e$,"defineKeysShape");function Xc(e){const r=e.$_schema,t=r[z].toLowerCase();return["const","literal"].includes(t)?[r.const]:t==="union"?gd(r.anyOf.flatMap(n=>Xc(_e(n)))):["undefined","number","string","symbol"].includes(t)?[]:Xc(e$(e.default))}i(Xc,"extractFiniteKeys");function ZI(e){return _e(Qe.Unknown({default:e}))}i(ZI,"unknownShape");const YI=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Jp=YI.reduce((e,r)=>(e[r]=r,e),{});pr.defaultZone.name;const r$=Jp.UTC,JI=_e({hour:Va({...yb,default:yb.min}),minute:Va({...wb,default:wb.min}),second:Va({...kb,default:kb.min}),millisecond:Va({...$b,default:$b.min}),timezone:aa(Jp,r$)}),XI=_e({year:2023,month:Va({...Db,default:Db.min}),day:Va({...Cb,default:Cb.min}),timezone:aa(Jp,r$)});_e(qI(XI,JI));le.Years+"",le.Months+"",le.Weeks+"",le.Days+"",le.Hours+"",le.Minutes+"",le.Seconds+"",le.Milliseconds+"";_e(mr({get:De(J.Month),in:mr(De(J.Year))},{get:De(J.Week),in:mr(De(J.Year),De(J.Month))},{get:De(J.Day),in:mr(De(J.Year),De(J.Month),De(J.Week))},{get:De(J.Hour),in:mr(De(J.Year),De(J.Month),De(J.Week),De(J.Day))},{get:De(J.Minute),in:mr(De(J.Year),De(J.Month),De(J.Week),De(J.Day),De(J.Hour))},{get:De(J.Second),in:mr(De(J.Year),De(J.Month),De(J.Week),De(J.Day),De(J.Hour),De(J.Minute))},{get:De(J.Millisecond),in:mr(De(J.Year),De(J.Month),De(J.Week),De(J.Day),De(J.Hour),De(J.Minute),De(J.Second))}));tf({keys:aa(le),values:-1,partial:!0});var py;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(py||(py={}));var Kg;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Kg||(Kg={}));var my;(function(e){e.Year="year",e.Month="month",e.Day="day"})(my||(my={}));const QI={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};m8(QI,Qt(Kg));_I({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return eN(e)}});function eN(e){return se.fromISO(e).toUTC().toISO()===e}i(eN,"isValidIsoString");const rN=_e({listen(e,r){return()=>!1},destroy(){},removeListener(e){return!1},value:ZI()});function g0(e){return ri(e,rN,{allowExtraKeys:!0})}i(g0,"isObservableBase");class t$ extends q5{static{i(this,"Observable")}value;equalityCheck;constructor(r){super(),this.value=r.defaultValue,this.equalityCheck="equalityCheck"in r?r.equalityCheck:sp}setValue(r){return super.setValue(r)}listen(r,t){return super.listen(r,t)}removeListener(r){return super.removeListener(r)}}const{I:tN}=J8,by=i(e=>e,"i$1"),vy=i(()=>document.createComment(""),"s"),Qs=i((e,r,t)=>{const n=e._$AA.parentNode,o=r===void 0?e._$AB:r._$AA;if(t===void 0){const a=n.insertBefore(vy(),o),s=n.insertBefore(vy(),o);t=new tN(a,s,e,e.options)}else{const a=t._$AB.nextSibling,s=t._$AM,l=s!==e;if(l){let u;t._$AQ?.(e),t._$AM=e,t._$AP!==void 0&&(u=e._$AU)!==s._$AU&&t._$AP(u)}if(a!==o||l){let u=t._$AA;for(;u!==a;){const f=by(u).nextSibling;by(n).insertBefore(u,o),u=f}}}return t},"v"),Ri=i((e,r,t=e)=>(e._$AI(r,t),e),"u$1"),nN={},oN=i((e,r=nN)=>e._$AH=r,"p$2"),iN=i(e=>e._$AH,"M$1"),h0=i(e=>{e._$AR(),e._$AA.remove()},"h");const nf={ATTRIBUTE:1,CHILD:2,ELEMENT:6},co=i(e=>(...r)=>({_$litDirective$:e,values:r}),"e$4");class fo{static{i(this,"i")}constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,n){this._$Ct=r,this._$AM=t,this._$Ci=n}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}}const aN={attribute:!0,type:String,converter:Oc,reflect:!1,hasChanged:qh},sN=i((e=aN,r,t)=>{const{kind:n,metadata:o}=t;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(t.name,e),n==="accessor"){const{name:s}=t;return{set(l){const u=r.get.call(this);r.set.call(this,l),this.requestUpdate(s,u,e,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,e,l),l}}}if(n==="setter"){const{name:s}=t;return function(l){const u=this[s];r.call(this,l),this.requestUpdate(s,u,e,!0,l)}}throw Error("Unsupported decorator location: "+n)},"r");function lN(e){return(r,t)=>typeof t=="object"?sN(e,r,t):((n,o,a)=>{const s=o.hasOwnProperty(a);return o.constructor.createProperty(a,n),s?Object.getOwnPropertyDescriptor(o,a):void 0})(e,r,t)}i(lN,"n$1");const Gr=co(class extends fo{constructor(e){if(super(e),e.type!==nf.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(r=>e[r]).join(" ")+" "}update(e,[r]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in r)r[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(r)}const t=e.element.classList;for(const n of this.st)n in r||(t.remove(n),this.st.delete(n));for(const n in r){const o=!!r[n];o===this.st.has(n)||this.nt?.has(n)||(o?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return on}});const Ue=i(e=>e??ee,"o$1");let Hg=class extends fo{static{i(this,"e")}constructor(r){if(super(r),this.it=ee,r.type!==nf.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===ee||r==null)return this._t=void 0,this.it=r;if(r===on)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const t=[r];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Hg.directiveName="unsafeHTML",Hg.resultType=1;const yy=co(Hg);function uN(e,r,t){return e?r(e):t?.(e)}i(uN,"n");class cN extends Cl{static{i(this,"DeclarativeElement")}static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function dN(e,r,t){const n=!r.length&&!t.length,o=e.length?!1:!r.filter(l=>!!l.index).length;if(n||o)return[...e];const a=e.map(l=>[l]);return a.length||(a[0]=[]),t.forEach(l=>{l>=0&&l<e.length&&(a[l]=[])}),r.forEach(l=>{const u=a[l.index];u&&u.splice(0,0,...l.values)}),a.flat()}i(dN,"insertAndRemoveValues");function Gg(e){return M.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}i(Gg,"isMinimalDefinitionWithInputs");function Xp(e){return M.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}i(Xp,"hasTagName");function n$(e){return Vt(e,r=>{if(Gg(r))return r.definition;if(Xp(r))return r.tagInterpolationKey||r},M.isTruthy)}i(n$,"extractElementKeys");const o$=new WeakMap;function fN(e,r){const t=n$(r);return i$(o$,[e,...t]).value?.template}i(fN,"getAlreadyMappedTemplate");function gN(e,r,t){const n=n$(r);return s$(o$,[e,...n],t)}i(gN,"setMappedTemplate");function i$(e,r,t=0){const{currentTemplateAndNested:n,reason:o}=a$(e,r,t);return n?t===r.length-1?{value:n,reason:"reached end of keys array"}:n.nested?i$(n.nested,r,t+1):{value:void 0,reason:`map at key index ${t} did not have nested maps`}:{value:n,reason:o}}i(i$,"getNestedValues");function a$(e,r,t){const n=r[t];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${t} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${t} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${t} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}i(a$,"getCurrentKeyAndValue");function s$(e,r,t,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=a$(e,r,n);if(!a)return{result:!1,reason:s};const l=o??{nested:void 0,template:void 0};if(o||e.set(a,l),n===r.length-1)return l.template=t,{result:!0,reason:"set value at end of keys array"};const u=l.nested??new WeakMap;return l.nested||(l.nested=u),s$(u,r,t,n+1)}i(s$,"setNestedValues");function l$(e,r,t){const n=fN(e,r),o=n??t();if(!n){const l=gN(e,r,o);if(!l.result)throw new Error(`Failed to set template transform: ${l.reason}`)}const a=o.valuesTransform(r),s=dN(r,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}i(l$,"getTransformedTemplate");function u$(e,r,t,n){const o=[],a=[],s=[],l=[];return e.forEach((f,g)=>{const h=o.length-1,p=o[h],b=g-1,v=r[b];n&&n(f);let $,C=[];if(typeof p=="string"&&($=t(p,f,v),$)){o[h]=[p,$.replacement].join(""),s.push(b);const A=$.getExtraValues;C=A?A(v):[],C.length&&A?(o[h]+=" ",C.forEach((N,_)=>{_&&o.push(" ")}),l.push(N=>{const _=N[b],H=A(_);return{index:b,values:H}}),o.push(f)):o[h]+=f}$||o.push(f);const E=e.raw[g];$?(a[h]=[a[h],$.replacement,E].join(""),C.length&&C.forEach(()=>{a.push("")})):a.push(E)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(f){const g=l.flatMap(h=>h(f));return{valueIndexDeletions:s,valueInsertions:g}}}}i(u$,"transformTemplate");function hN(...[e,r,t]){if(Xp(t))return{replacement:t.tagName,getExtraValues:void 0}}i(hN,"transformCss");function pN(e,r){return u$(e,r,hN)}i(pN,"transformCssTemplate");function k(e,...r){const t=l$(e,r,()=>pN(e,r));return Jw(t.strings,...t.values)}i(k,"css");const mN={allowPolymorphicState:!1,errorHandler:void 0};function c$(e,r){const t=e.instanceState;Ke(r).forEach(n=>{if(t&&n in t)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=r[n]:e[n]=r[n]}),"instanceInputs"in e&&Ke(e.instanceInputs).forEach(n=>{n in r||(e.instanceInputs[n]=void 0)})}i(c$,"assignInputs");class bN extends CustomEvent{static{i(this,"TypedEvent")}_type="";get type(){return this._type}constructor(r,t){super(typeof r=="string"?r:r.type,{detail:t,bubbles:!0,composed:!0})}}function Qp(){return e=>class extends bN{static type=e;_type=e;constructor(r){super(e,r)}}}i(Qp,"defineTypedEvent");function Pe(){return Qp()}i(Pe,"defineElementEvent");function vN(e,r){return r?Object.keys(r).filter(t=>{if(typeof t!="string")throw new TypeError(`Expected event key of type string but got type '${typeof t}' for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,n)=>{const o=Qp()([e,n].join("-"));return t[n]=o,t},{}):{}}i(vN,"createEventDescriptorMap");function yN(e){return e?qe(e,r=>r):{}}i(yN,"createHostClassNamesMap");function d$(e,r){r in e||lN()(e,r)}i(d$,"bindReactiveProperty");function wN(e,r,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${t.toLowerCase()}'`);if(!(e in r))throw new Error(`Property '${String(e)}' does not exist on '${t.toLowerCase()}'.`)}i(wN,"assertValidPropertyName");function wy(e,r){const t=e;function n(s){r?wN(s,e,e.tagName):d$(e,s)}i(n,"verifyProperty");function o(s,l){return n(l),t[l]}return i(o,"valueGetter"),new Proxy({},{get:o,set(s,l,u){n(l);const f=t[l];function g(p){s[l]=p,t[l]=p}i(g,"setValueOnElement");const h=e.observablePropertyListenerMap[l];if(f!==u&&g0(f)&&h&&f.removeListener(h),g0(u))if(h)u.listen(!1,h);else{let p=function(){e.requestUpdate()};i(p,"newListener"),e.observablePropertyListenerMap[l]=p,u.listen(!1,p)}else g0(f)&&(e.observablePropertyListenerMap[l]=void 0);return g(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,l){if(l in s)return{get value(){return o(s,l)},configurable:!0,enumerable:!0}},has(s,l){return Reflect.has(s,l)}})}i(wy,"createElementPropertyProxy");function ky(e,r){const t=[e,"-"].join("");Object.keys(r).forEach(n=>{if(!n.startsWith(t))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}i(ky,"assertValidStringNames");function $y(e,r,t){return t?fi(t,o=>({key:o,value:[e,r,o].join("-")}),{}):{}}i($y,"createStringNameMap");function kN({hostClassNames:e,cssVars:r}){return{hostClasses:qe(e,(t,n)=>({name:Re(n),selector:Re(`:host(.${n})`)})),cssVars:r}}i(kN,"createStylesCallbackInput");function $N({host:e,hostClassesInit:r,hostClassNames:t,state:n,inputs:o}){r&&Ke(r).forEach(a=>{const s=r[a],l=t[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(l):e.classList.remove(l))})}i($N,"applyHostClasses");function xN({element:e,eventsMap:r,cssVars:t,slotNamesMap:n,testIdsMap:o}){function a(l){Ke(l).forEach(u=>{const f=l[u];e.instanceState[u]=f})}return i(a,"updateState"),{cssVars:t,slotNames:n,testIds:o,dispatch:i(l=>e.dispatchEvent(l),"dispatch"),events:r,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:a}}i(xN,"createRenderParams");function Xn(...e){return Er.isEmpty(e),r=>{const t=r;if(!M.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");return DN({...t,options:{...t.options}})}}i(Xn,"defineElement");function DN(e){if(!M.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!M.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const r={...mN,...e.options},t=vN(e.tagName,e.events),n=yN(e.hostClasses);e.hostClasses&&ky(e.tagName,e.hostClasses),e.cssVars&&ky(e.tagName,e.cssVars);const o=e.cssVars?It(e.cssVars):{},a=$y(e.tagName,"slot",e.slotNames),s=$y(e.tagName,"test-id",e.testIds),l=typeof e.styles=="function"?e.styles(kN({hostClassNames:n,cssVars:o})):e.styles||k``,u=e.render;function f(...[h]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:g,inputs:h}}i(f,"typedAssignCallback");const g=class extends cN{static{i(this,"anonymousClass")}static elementOptions=r;static tagName=e.tagName;static styles=l;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return xN({element:this,eventsMap:t,cssVars:o,slotNamesMap:a,testIdsMap:s})}static assign=f;static events=t;static render=u;static hostClasses=n;static cssVars=o;static init=e;static slotNames=a;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const h=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const b=e.state(h);if(b instanceof Promise)throw new TypeError("init cannot be asynchronous");Ke(b).forEach(v=>{d$(this,v),this.instanceState[v]=b[v]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(h)instanceof Promise))throw new TypeError("init cannot be asynchronous");const p=u(h);if(p instanceof Promise)throw new TypeError("render cannot be asynchronous");return $N({host:h.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:h.state,inputs:h.inputs}),this._lastRenderedProps={inputs:{...h.inputs},state:{...h.state}},p}catch(h){const p=ga(h,`Failed to render ${e.tagName}`);return console.error(p),this._lastRenderError=p,r.errorHandler?.(p),nt(p)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const h=this.createRenderParams();if(e.init(h)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(h=>{M.hasKey(h,"destroy")&&M.isFunction(h.destroy)&&h.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup&&this._stateCalled){const h=this.createRenderParams();if(e.cleanup(h)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(h){c$(this,h)}observablePropertyListenerMap={};instanceInputs=wy(this,!1);instanceState=wy(this,!r.allowPolymorphicState);constructor(){super(),this.definition=g}};return Object.defineProperties(g,{name:{value:y8(e.tagName,{firstLetterCase:Rl.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,g)),g}i(DN,"internalDefineElement");class CN extends za{static{i(this,"InternalAsyncPropClass")}isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function EN(e){return new CN(e)}i(EN,"asyncProp");const xy=i((e,r,t)=>{const n=new Map;for(let o=r;o<=t;o++)n.set(e[o],o);return n},"u"),AN=co(class extends fo{constructor(e){if(super(e),e.type!==nf.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,r,t){let n;t===void 0?t=r:r!==void 0&&(n=r);const o=[],a=[];let s=0;for(const l of e)o[s]=n?n(l,s):s,a[s]=t(l,s),s++;return{values:a,keys:o}}render(e,r,t){return this.dt(e,r,t).values}update(e,[r,t,n]){const o=iN(e),{values:a,keys:s}=this.dt(r,t,n);if(!Array.isArray(o))return this.ut=s,a;const l=this.ut??=[],u=[];let f,g,h=0,p=o.length-1,b=0,v=a.length-1;for(;h<=p&&b<=v;)if(o[h]===null)h++;else if(o[p]===null)p--;else if(l[h]===s[b])u[b]=Ri(o[h],a[b]),h++,b++;else if(l[p]===s[v])u[v]=Ri(o[p],a[v]),p--,v--;else if(l[h]===s[v])u[v]=Ri(o[h],a[v]),Qs(e,u[v+1],o[h]),h++,v--;else if(l[p]===s[b])u[b]=Ri(o[p],a[b]),Qs(e,o[h],o[p]),p--,b++;else if(f===void 0&&(f=xy(s,b,v),g=xy(l,h,p)),f.has(l[h]))if(f.has(l[p])){const $=g.get(s[b]),C=$!==void 0?o[$]:null;if(C===null){const E=Qs(e,o[h]);Ri(E,a[b]),u[b]=E}else u[b]=Ri(C,a[b]),Qs(e,o[h],C),o[$]=null;b++}else h0(o[p]),p--;else h0(o[h]),h++;for(;b<=v;){const $=Qs(e,u[v+1]);Ri($,a[b]),u[b++]=$}for(;h<=p;){const $=o[h++];$!==null&&h0($)}return this.ut=s,oN(e,u),on}}),FN=AN;function of(e,r){return sa(e,r),e.element}i(of,"extractElement");function SN(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}i(SN,"getPartHostTagName");function sa(e,r){const t=SN(e),n=t?`: in ${t}`:"";if(e.type!==nf.ELEMENT)throw new Error(`${r} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${r} directive found no element${n}.`)}i(sa,"assertIsElementPartInfo");function MN(e,r){return co(class extends fo{element;constructor(t){super(t),this.element=ur.instanceOf(of(t,e),HTMLElement)}render(...t){return r({params:t,directive:this,element:this.element}),on}})}i(MN,"createMutateDirective");const Cn=MN("attributes",({element:e,params:[r],directive:t})=>{if(!r)return;const o=pa(t,"allAttributesApplied",()=>new Set);Ke(r).forEach(a=>{if(a.toLowerCase()!==a)throw new Error(`Cannot assign attribute name with uppercase letters: ${a}`);o.add(a)}),o.forEach(a=>{const s=r[a];s==null||s===!1||s===ee?e.removeAttribute(a):s===""||s===!0?e.setAttribute(a,""):e.setAttribute(a,String(s))})});function TN(e){const r=co(class extends fo{element;constructor(t){super(t),this.element=of(t,e)}render(t){return this.element.setAttribute(e,t),on}});return{attributeSelector(t){return`[${e}="${t}"]`},attributeDirective(t){return r(t)},attributeName:e}}i(TN,"createAttributeDirective");function L(e,r){return PN(e,r)}i(L,"listen");const PN=co(class extends fo{element;lastListenerMetaData;constructor(e){super(e),this.element=of(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,r){return{eventType:e,callback:r,listener:i(t=>this.lastListenerMetaData?.callback(t),"listener")}}render(e,r){const t=typeof e=="string"?e:e.type;if(typeof t!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(t)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===t?this.lastListenerMetaData.callback=r:this.resetListener(this.createListenerMetaData(t,r)),on}});function IN(e){return L("keydown",async r=>{const t=r.code.toLowerCase();(t.includes("enter")||t.includes("return")||t==="space")&&(r.stopImmediatePropagation(),r.preventDefault(),await e())})}i(IN,"listenToActivate");const Dy="onDomCreated",la=co(class extends fo{element;constructor(e){super(e),sa(e,Dy)}update(e,[r]){sa(e,Dy);const t=e.element;return t!==this.element&&(window.requestAnimationFrame(()=>r(t)),this.element=t),this.render(r)}render(e){}}),Cy="onDomRendered",NN=co(class extends fo{constructor(e){super(e),sa(e,Cy)}update(e,[r]){sa(e,Cy);const t=e.element;return window.requestAnimationFrame(()=>r(t)),this.render(r)}render(e){}}),Ey="onResize",em=co(class extends fo{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&BN(this.element,this.callback,e)});callback;constructor(e){super(e),sa(e,Ey)}update(e,[r]){sa(e,Ey),this.callback=r;const t=e.element,n=this.element;return t!==n&&(this.element=t,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(t)),this.render(r)}render(e){}});function BN(e,r,t){const n=t[0];if(!n)throw console.error(t),new Error("Resize observation triggered but the first entry was empty.");r({target:n.target,contentRect:n.contentRect},e)}i(BN,"handleOnResizeCallback");function Wr(e,r,t){return uN(e,()=>r,()=>t)}i(Wr,"renderIf");const{attributeDirective:ON}=TN("data-test-id"),ti=ON;function rm(e){const{assertInputs:r,transformInputs:t}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(r(o),Xn(...n)(t(o)))}i(rm,"wrapDefineElement");function RN(e,r){return LN(void 0,e)}i(RN,"assign");const LN=co(class extends fo{element;constructor(e){super(e),this.element=of(e,"assign")}render(e,r){return c$(this.element,r),on}}),jN={};function UN(e,r){return r.map((t,n)=>{const o=e[n],a=e[n+1];if(o&&a){const{shouldHaveTagNameHere:s}=f$(o,a);if(s&&M.isString(t))return{tagName:t,tagInterpolationKey:pa(jN,t,()=>({tagName:t}))}}return t})}i(UN,"mapHtmlValues");function f$(e,r){const t=e.trim().endsWith("<")&&!!r.match(/^[\s>]/),n=e.trim().endsWith("</")&&r.trim().startsWith(">");return{isOpeningTag:t,shouldHaveTagNameHere:t||n}}i(f$,"classifyValue");function _N(...[e,r,t]){const n=Gg(t)?t.definition:t,{isOpeningTag:o,shouldHaveTagNameHere:a}=f$(e,r),s=Xp(n);if(s&&a&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(a&&!s)throw console.error({lastNewString:e,currentTemplateString:r,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(u){const f=Gg(u)?u.inputs:void 0;return[o&&f?RN(f):void 0].filter(M.isTruthy)}}}i(_N,"transformHtml");function zN(e){}i(zN,"stringValidator");function qN(e){return u$(e.strings,e.values,_N,zN)}i(qN,"transformHtmlTemplate");function m(e,...r){const t=UN(e,r),n=V8(e,...t),o=l$(e,t,()=>qN(n));return{...n,strings:o.strings,values:o.values}}i(m,"html");function Zg(e){if("templateString"in e)return e.templateString;const{strings:r,values:t}=e;if(!r?.length&&!t?.length)return"";const n=[...t||[],""],a=(r??[""]).map((s,l)=>{const u=VN(s,n[l]);return`${s}${u}`});return qw(a.join(""))}i(Zg,"convertTemplateToString");function VN(e,r){return r._$litType$!=null||r._$litDirective$!=null?Zg(r):Array.isArray(r)?r.map(n=>Zg(n)).join(""):e.endsWith("=")?`"${r}"`:r}i(VN,"extractValue");function g$(e){return qe(e,(r,t)=>t instanceof tr?Re(t.toString({format:"hex"})):g$(t))}i(g$,"colorsObjectToCssResult");const WN="dodgerblue";function Yg(e){const r=Math.abs(e.contrast("white","APCA")),t=Math.abs(e.contrast("black","APCA"));return r>t?"white":"black"}i(Yg,"calculateTextColorString");function p0({background:e,foreground:r}){return{background:e??new tr(Yg(r)),foreground:r??new tr(Yg(e))}}i(p0,"createColorPair");var Qc;(function(e){e.Dark="dark",e.Light="light"})(Qc||(Qc={}));function KN(e){return e==="black"?"white":"black"}i(KN,"flipBackForeground");const HN={black:{foregroundFaint1:new tr("#ccc"),foregroundFaint2:new tr("#eee")},white:{foregroundFaint1:new tr("#ccc"),foregroundFaint2:new tr("#eee")}},GN={black:{backgroundFaint1:new tr("#666"),backgroundFaint2:new tr("#444")},white:{backgroundFaint1:new tr("#ccc"),backgroundFaint2:new tr("#fafafa")}};function Ay({themeColor:e=WN,themeStyle:r=Qc.Light}={}){const t=new tr(e),n=new tr(r===Qc.Dark?"black":"white"),o=Yg(n),a=new tr(o),s={nav:{hover:p0({background:t.clone().set({"hsl.l":93})}),active:p0({background:t.clone().set({"hsl.l":90})}),selected:p0({background:t.clone().set({"hsl.l":85})})},accent:{icon:t.clone().set({"hsl.l":40})},page:{background:n,...GN[KN(o)],foreground:a,...HN[o]}};return g$(s)}i(Ay,"createTheme");async function Fy(e=1){const r=new Ac;function t(){requestAnimationFrame(()=>{e--,e?t():r.resolve()})}return i(t,"requestNextFrame"),t(),r.promise}i(Fy,"waitForAnimationFrame");function ZN(e,r){return{element:e,children:h$(e)}}i(ZN,"getNestedChildrenTree");function h$(e,r,t){return YN(e).map(n=>{const o=h$(n);return{element:n,children:o}})}i(h$,"recursivelyGetNestedChildrenTree");function YN(e){return[...e.children,...e.shadowRoot?.children??[]]}i(YN,"getDirectChildren");function m0(e){return e.matches(":focus")}i(m0,"isElementFocused");function tm(e){if(e instanceof ShadowRoot)return e.host;const r=e.parentNode;if(r)return r instanceof Element?r:tm(r)}i(tm,"getParentElement");function p$(e,r){if(r(e))return e;const t=tm(e);if(t)return p$(t,r)}i(p$,"findMatchingAncestor");function Ea(e,r,t={}){const n=t.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof r)){const o=r.name,a=n?.constructor.name,s=t.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${a}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${a}'.`;throw new Error(s)}return n}i(Ea,"extractEventTarget");function m$(e){const r=tm(e);return r&&p$(r,t=>globalThis.getComputedStyle(t).overflowY!=="visible")||document.body}i(m$,"findOverflowAncestor");function b$(e){let r=0,t=document.activeElement||void 0;for(;t;){if(e({depth:r,element:t}))return r;t=t.shadowRoot?.activeElement||void 0,t&&++r}return r}i(b$,"walkActiveElement");function JN({searchQuery:e,searchIn:r}){const t=r.length,n=e.length;if(n>t)return!1;if(n===t)return e===r;const o=r.toLowerCase(),a=e.toLowerCase();e:for(let s=0,l=0;s<n;s++){const u=a.codePointAt(s);for(;l<t;)if(o.codePointAt(l++)===u)continue e;return!1}return!0}i(JN,"fuzzySearch");const XN=Io(32);function kc(e){return e.join(XN)}i(kc,"createBreadcrumbsSearchKey");function v$(e){if(!e.length)return[];const r=kc(e),t=v$(e.slice(0,-1));return[r,...t]}i(v$,"getFullTreeKeysToInclude");const QN=["error","errors"];function eB(e){return QN.includes(e)}i(eB,"isSearchingForErrors");function rB({flattenedNodes:e,searchQuery:r}){const t={};function n(o){Object.values(o.children).map(s=>(n(s),kc(s.fullUrlBreadcrumbs))).forEach(s=>t[s]=!0)}return i(n,"addChildren"),e.forEach(o=>{const a=o.entry.errors.length&&eB(r),s=kc(o.fullUrlBreadcrumbs);if(JN({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(u=>M.isString(u)?u:Zg(u))].join(" ").toLowerCase(),searchQuery:r.toLowerCase()})||a||t[s]){const u=v$(o.fullUrlBreadcrumbs);n(o),u.forEach(f=>t[f]=!0)}else t[s]=!1}),e.filter(o=>{const a=kc(o.fullUrlBreadcrumbs),s=t[a];if(!M.isBoolean(s))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}i(rB,"searchFlattenedNodes");class nm extends Error{static{i(this,"SpaRouterError")}name="SpaRouterError"}class Sy extends nm{static{i(this,"GlobalUrlEventsConsolidationError")}name="GlobalUrlEventsConsolidationError"}class tB extends nm{static{i(this,"SanitizationDepthMaxed")}name="SanitizationDepthMaxed"}function nB(e,r){return r.fullPaths.every((t,n)=>t.startsWith(":")?!!e[n]:e[n]===t)}i(nB,"matchesPaths");function b0(e,r,t){return nB(e.paths,r)}i(b0,"routeHasPaths");function y$(e,r){const t=Object.entries(e.children||{}),n=r.length?` at ${r.join(" -> ")}.`:".";if(e.allowBare&&e.anyChildren)throw new Error(`Invalid tree: cannot define both allowBare and anyChildren${n}`);if(e.anyChildren&&t.length)throw new Error(`Invalid tree: cannot define anyChildren and definite children${n}`);if(!e.allowBare&&!e.anyChildren&&!t.some(([o])=>!o.startsWith(":")))throw new Error(`Invalid tree: allowBare is false but there are no definite children${n}`);e.anyChildren||t.forEach(([o,a])=>{M.isEmpty(a)||y$(a,[...r,o])})}i(y$,"checkTree");function oB(e){return p8(e)}i(oB,"removePathsTypes");function Jg(e,r){const t=e.children,n=r[r.length-1]||"",o=Object.defineProperty({path:n,fullPaths:r,children:t&&Object.keys(t).length?qe(t,(a,s)=>Jg(s,[...r,a])):{}},"PathsType",{enumerable:!1,configurable:!1,get(){throw new Error("Do not access PathsType as value, it's only a type.")}});return n.startsWith(":")?{...o,fill:i(a=>Jg(e,[...r.slice(0,-1),a]),"fill")}:o}i(Jg,"generatePathTreePaths");class iB{static{i(this,"PathTree")}tree;paths;pathsWithoutTypes;constructor(r){this.tree=r,y$(this.tree,[]),this.paths=Jg(r,[]),this.pathsWithoutTypes=oB(this.paths)}get PathsType(){throw new Error("PathTree.PathsType is a type only, it cannot be accessed as a runtime value.")}sanitizePaths(r){return Xg(r,this.tree)}}function Xg(e,r){if("anyChildren"in r&&r.anyChildren)return e;if("allowBare"in r){const t=r.children||{};if(M.isLengthAtLeast(e,1)){const n=e[0],o=t[n]||Object.entries(t).find(([a])=>a.startsWith(":"))?.[1];if(o&&!("disable"in o&&o.disable)){if("redirectTo"in o&&o.redirectTo){if(!t[o.redirectTo])throw new Error(`Invalid redirect from '${n}' to '${o.redirectTo}'.`);return Xg([o.redirectTo,...e.slice(1)],r)}return[n,...Xg(e.slice(1),o)]}}if(r.allowBare)return[];{const n=En(t).find(([o,a])=>!o.startsWith(":")&&!("disable"in a&&a.disable))?.[0];if(!n)throw new Error("Got blocked bare path but no children exist.");return[n]}}else return[]}i(Xg,"sanitizeTreePaths");_e({paths:[""],search:lt(mr(void 0,tf({keys:"",values:[""]}))),hash:lt(mr(void 0,""))});const aB=_e({basePath:lt("",{alsoUndefined:!0}),sanitizeRoute:i((e=>e),"sanitizeRoute"),maxListenerCount:lt(1,{alsoUndefined:!0}),disableWarnings:lt(!1,{alsoUndefined:!0}),isPaused:lt(!1,{alsoUndefined:!0})}),v0="://";function om(...e){const r=e.join("/"),[t,n=""]=r.includes(v0)?r.split(v0):["",r];let o=!1;const a=n.replace(/\/{2,}/g,"/").split("/").reduce((s,l,u,f)=>{if(o)return s;const g=f[u+1];let h=l;const p=g?.startsWith("?"),b=!l.includes("?")&&p,v=g==="?";if(p||b){o=!0;let $=!1;const C=f.slice(u+2).reduce((E,A)=>(A.includes("#")&&($=!0),$?E.concat(A):[E,A].join("&")),"");h=[l,g,v?Ki({value:C,prefix:"&"}):C].join("")}return s.concat(h)},[]);return[t,t?v0:"",a.join("/")].join("")}i(om,"joinUrlPaths");var bs;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(bs||(bs={}));var vs;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(vs||(vs={}));const sB=_e({encoding:lt(mr(void 0,aa(bs))),searchParamStrategy:lt(mr(void 0,aa(vs)))});function tc(e,r){return e.map(t=>{if(t!=null)return Ja(String(t),r)}).filter(t=>t!=null)}i(tc,"codeValues");function Ja(e,r){return r?.encoding===bs.Decode?decodeURIComponent(e):r?.encoding===bs.Encode?encodeURIComponent(e):e}i(Ja,"codeValue");const lB=_e(tf({keys:"",values:[""]}));function uB(e,r,t){const n=t?.searchParamStrategy===vs.Clear?{}:qe(e,(s,l)=>SD(l)),o=qe(r,(s,l)=>{if(t?.searchParamStrategy===vs.Append){const u=n[s],f=M.isArray(u)?u:[u];if(l){const g=M.isArray(l)?l:[l];return tc([...f,...g],t)}else return tc(f,t)}else return M.isArray(l)?tc(l,t):l?tc([l],t):void 0});return $d({...n,...o},(s,l)=>!!l)}i(uB,"combineSearchParams");function w$(e,r){return M.isString(e)&&!e.includes("?")?{}:(M.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(a=>{const[s,...l]=GD(a,"=");return[s,l.length?l.join("="):void 0]}).reduce((a,[s,l])=>{const u=k$({options:r,key:s,value:l}),f=pa(a,u.key,()=>[]);return l!=null&&f.push(u.value),a},{})}i(w$,"searchParamsToObject");function cB(e){if(e!=null)return M.isArray(e)?[...e]:e===""?[]:[e]}i(cB,"wrapParamValue");function dB(e,r){const t=Vt(Object.entries(e),([n,o])=>{const a=cB(o);return a?.length?a.map(s=>{const l=k$({options:r,key:n,value:s});return[l.key,l.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return t.length?Tt({value:t.join("&"),prefix:"?"}):""}i(dB,"searchParamsToString");function k$({options:e,key:r,value:t}){return{key:Ja(r,e),value:Ja(String(t),e)}}i(k$,"codeParamKeyValue");function $$({hash:e,hostname:r,password:t,pathname:n,port:o,protocol:a,search:s,username:l}){return[a?a+"://":"",l?l+":":"",t?t+"@":"",af({hostname:r,port:o}),im({hash:e,pathname:n,search:s})].join("")}i($$,"createHref");function x$({pathname:e}){const r=Ki({value:e,prefix:"/"});return r?r.split("/"):[]}i(x$,"createPaths");function im({hash:e,pathname:r,search:t}){return[Tt({value:r,prefix:"/"}),t?Tt({value:t,prefix:"?"}):"",e?Tt({value:e,prefix:"#"}):""].join("")}i(im,"createFullPath");function af({hostname:e,port:r}){return[e,r?":"+r:""].join("")}i(af,"createHost");function D$({hostname:e,port:r,protocol:t}){return[t,af({hostname:e,port:r})].filter(M.isTruthy).join("://")}i(D$,"createOrigin");function Xa(e,r){const t=M.isString(e)?Ki({value:e,prefix:"."}):e.toString(),n=t.replace(/^[^#]*(?:#|$)/,""),o=n?Tt({value:Ja(n,r),prefix:"#"}):"",a=t.replace(/#[^#]*$/,""),s=a.replace(/^[^?]*(?:\?|$)/,""),l=s?Tt({value:Ja(s,r),prefix:"?"}):"",u=a.replace(/\?[^?]*$/,""),f=u.includes("://")?u.replace(/:\/\/.*$/,""):"",g=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),h=g.replace(/@.*/,""),p=g.replace(/^[^@]*@/,""),b=h!==p,[v,...$]=b?h.split(":").reverse():[],C=$.toReversed().join("").replace(/[/:]/g,"")||"",E=v?.replace(/[/:]/g,"")||"",A=HD(p.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),N=A[0]?.endsWith("]")?"":A[1]===":"&&A[0]||"",H=p.replace(new RegExp(`:${N}($|/)`),"$1").replace(/\/.*/,""),ce=p.replace(/^[^/]*(\/|$)/,"$1"),Te=Ja(ce.replace(/^[^/]*(?:\/|$)/,"/"),r),be=af({hostname:H,port:N}),Se=D$({hostname:H,port:N,protocol:f}),or=$$({hash:o,hostname:H,password:E,pathname:Te,port:N,protocol:f,search:l,username:C}),ir=w$(l),jr=x$({pathname:Te});return{fullPath:im({hash:o,pathname:Te,search:l}),hash:o,host:be,hostname:H,href:or,origin:Se,password:E,pathname:Te,paths:jr,port:N,protocol:f,search:l,searchParams:ir,username:C}}i(Xa,"parseUrl");_e({hash:lt(mr(void 0,"")),search:lt(mr(void 0,"",tf({keys:"",values:mr(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:lt(mr(void 0,"")),pathname:lt(mr(void 0,"")),paths:lt(mr(void 0,[""])),protocol:lt(mr(void 0,"")),username:lt(mr(void 0,"")),password:lt(mr(void 0,"")),port:lt(mr(void 0,"",-1))});function fB(e,r,t){const n=!!t,o=r==null||ri(r,sB,{allowExtraKeys:!1}),a=o?Xa(""):M.instanceOf(e,URL)||M.isString(e)?Xa(e):e,s=o?e:r,l=M.isString(s)&&s.startsWith("."),u=M.isString(s)||M.instanceOf(s,URL)?$d(Xa(s),($,C)=>M.isTruthy(C)):s,f=n?t:o?r:void 0,g=qe(a,($,C)=>{if(!M.hasKey(u,$))return C;const E=u[$];return M.isNumber(E)?String(E):M.isString(E)?$==="hash"&&E?Tt({value:E,prefix:"#"}):$==="pathname"?Tt({value:E,prefix:"/"}):E:C});M.hasKey(u,"paths")&&u.paths&&(g.pathname=om(l?a.pathname:"",...u.paths));const h=M.isString(u.search)?w$(Tt({value:u.search,prefix:"?"})):Rn(u.search||{}),p=uB(g.searchParams,h,{...f,encoding:bs.None}),b=dB(p,f);return{...g,searchParams:p,search:b,paths:x$(g),fullPath:im(g),host:af(g),origin:D$(g),href:$$({...g,search:b})}}i(fB,"buildUrl");const gB=_e({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:lB,hash:"",fullPath:"/",href:"/"});({...gB.default});const hB=0;function C$(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==hB)}i(C$,"shouldClickEventTriggerRouteChange");const sf="locationchange",Eo=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const My=Eo?.pushState;function Ty(...e){if(!My)return;const r=My.apply(Eo,e);return globalThis.dispatchEvent(new Event(sf)),r}i(Ty,"newPushState");const Py=Eo?.replaceState;function Iy(...e){if(!Py)return;const r=Py.apply(Eo,e);return globalThis.dispatchEvent(new Event(sf)),r}i(Iy,"newReplaceState");function pB(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Eo)){{if(Eo.pushState===Ty)throw new Sy("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Eo.replaceState===Iy)throw new Sy("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Eo.pushState=Ty,Eo.replaceState=Iy,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(sf))})}}i(pB,"consolidateGlobalUrlEvents");function nc(e,r){const t=Xa(e),n=Ki({value:Ki({value:t.pathname,prefix:Tt({value:r||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],a=Object.keys(t.searchParams).length?t.searchParams:void 0,s=t.hash?Ki({value:t.hash,prefix:"#"}):void 0;return{paths:o,search:a,hash:s}}i(nc,"parseUrlIntoRawRoute");class mB{static{i(this,"SpaRouter")}innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(r){Jc(r,aB),this.params={...r};const t=this.readCurrentRoute();this.innerObservable=new t$({defaultValue:t,equalityCheck:i(()=>!1,"equalityCheck")}),pB(),this.removeGlobalListener=Un(globalThis,sf,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new tB("Looping route sanitization detected; aborting window URL change listener.");const n=nc(globalThis.location.href,this.params.basePath),o=r.sanitizeRoute(n);M.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),r.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(t,{replace:!0})}routeIncludesBasePath(r){return!r.paths||!this.params.basePath?!1:om(...r.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(nc(globalThis.location.href,this.params.basePath))}sanitizeRoute(r){return this.params.sanitizeRoute(r)}createRouteUrl(r){const t={...nc(globalThis.location.href,this.params.basePath),...r},n=this.sanitizeRoute(t),a=this.routeIncludesBasePath(nc(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return fB(globalThis.location.href,{paths:a.paths,search:a.search,hash:a.hash?Tt({value:a.hash,prefix:"#"}):""},{searchParamStrategy:vs.Clear}).href}setRoute(r,t={}){const n=this.createRouteUrl(r),{fullPath:o}=Xa(n);return this.params.isPaused||!t.force&&M.jsonEquals(Xa(globalThis.location.href).fullPath,o)?!1:t.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(r,t){return C$(t)?(t.preventDefault(),this.setRoute(r)):!1}listen(r,t){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new nm(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(r,t),()=>this.removeListener(t)}removeListener(r){return this.innerObservable.removeListener(r)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function bB(e){return new mB({basePath:e,sanitizeRoute(r){return{paths:vB(r.paths),hash:void 0,search:void 0}}})}i(bB,"createBookRouter");function vB(e){const r=e[0];if(M.isEnumValue(r,Ut)){if(r===Ut.Book)return[Ut.Book,...e.slice(1)];if(r===Ut.Search)return e[1]?[r,e[1]]:[Ut.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return os.paths}i(vB,"sanitizePaths");const ed=Qp()("element-book-change-route"),y=It({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function re({name:e,svgTemplate:r}){return{name:e,svgTemplate:r}}i(re,"defineIcon$1");const lf=re({name:"Check24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function Ny(e){return M.isPrimitive(e)||e instanceof ei?String(e):e.default}i(Ny,"noRefColorInitToString");function no(e,r,t,n){const o=`${t.prefix}-default-fg`,a=`${t.prefix}-default-bg`;if(M.isPrimitive(r)||r instanceof ei)return r;if("refDefaultBackground"in r)return`var(--${a}, ${Ny(t.background)})`;if("refDefaultForeground"in r)return`var(--${o}, ${Ny(t.foreground)})`;if("refBackground"in r||"refForeground"in r){const s=M.hasKey(r,"refBackground")?"refBackground":M.hasKey(r,"refForeground")?"refForeground":void 0,l=s&&M.hasKey(r,s)?r[s]:void 0,u=s==="refBackground"?"background":"foreground",f=l&&n[l];if(!f)throw new Error(`Color theme ${s} reference '${l}' does not exist. (Referenced from '${e}'.)`);const g=f[u]||(u==="foreground"?no(o,t.foreground,t,n):no(a,t.background,t,n));return`var(--${l}-${u==="foreground"?"fg":"bg"}, ${no(l,g,t,n)})`}else return r.value}i(no,"createColorCssVarDefault");const Ye="theme-default";function am(e,r){try{if(Ye in r)throw new Error(`Cannot define theme color by name '${Ye}', it is used internally.`);const t=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,o=`${e.prefix}-default-inverse-fg`,a=`${e.prefix}-default-inverse-bg`,s={[t]:no(t,e.foreground,e,r),[n]:no(n,e.background,e,r),[o]:no(o,e.background,e,r),[a]:no(a,e.foreground,e,r)},l=It(s),u=En(r).reduce((v,[$,C])=>{const E=By($),A=C.foreground?no([$,"foreground"].join(" "),C.foreground,e,r):`var(${l[t].name}, ${l[t].default})`,N=C.background?no([$,"background"].join(" "),C.background,e,r):`var(${l[n].name}, ${l[n].default})`;return v[E.foreground]=A,v[E.background]=N,v[E.foregroundInverse]=`var(--${E.background}, ${N})`,v[E.backgroundInverse]=`var(--${E.foreground}, ${A})`,v},{}),f=It(u),g={},h={};En(r).forEach(([v,$])=>{Er.isString(v);const C=By(v),E=f[C.foreground],A=f[C.background],N=f[C.foregroundInverse],_=f[C.backgroundInverse];Er.isDefined(E),Er.isDefined(A),Er.isDefined(N),Er.isDefined(_),g[v]={foreground:E,background:A,init:$,name:v},h[v]={foreground:N,background:_,init:$,name:v}});const p={foreground:l[t],background:l[n],init:e,name:Ye},b={...p,foreground:l[o],background:l[a]};return{colors:{[Ye]:p,...g},inverse:{[Ye]:b,...h},init:{colors:r,default:e},prefix:e.prefix}}catch(t){throw globalThis.setTimeout(()=>Bw.error(t)),t}}i(am,"defineColorTheme");function By(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}i(By,"createCssVarNames");const c=It({"vira-red-100":"#FFF6F5","vira-red-150":"#FFEDEB","vira-red-200":"#FFE4E1","vira-red-250":"#FFDCD8","vira-red-300":"#FFD1CB","vira-red-350":"#FFC1B8","vira-red-400":"#FFA79B","vira-red-450":"#FF8274","vira-red-500":"#FF564A","vira-red-550":"#F43A32","vira-red-600":"#E2322C","vira-red-650":"#D02C27","vira-red-700":"#BB2520","vira-red-750":"#9E231D","vira-red-800":"#82211A","vira-red-850":"#701A13","vira-red-900":"#611710","vira-red-950":"#52140D","vira-red-1000":"#43130D","vira-yellow-100":"#FEF9E4","vira-yellow-150":"#FDF2D1","vira-yellow-200":"#FDEABF","vira-yellow-250":"#FEE2AD","vira-yellow-300":"#FDD89B","vira-yellow-350":"#FAC986","vira-yellow-400":"#EFB669","vira-yellow-450":"#E29D34","vira-yellow-500":"#CE8800","vira-yellow-550":"#BB7B00","vira-yellow-600":"#AC7100","vira-yellow-650":"#9E6800","vira-yellow-700":"#8C5C00","vira-yellow-750":"#794D00","vira-yellow-800":"#683E00","vira-yellow-850":"#5B3301","vira-yellow-900":"#502A05","vira-yellow-950":"#442308","vira-yellow-1000":"#381D0B","vira-green-100":"#EBFFEE","vira-green-150":"#DDFBE2","vira-green-200":"#CDF8D6","vira-green-250":"#BFF5CC","vira-green-300":"#AFF0C0","vira-green-350":"#9AE8B1","vira-green-400":"#7FD99C","vira-green-450":"#52C87F","vira-green-500":"#1BB565","vira-green-550":"#04A559","vira-green-600":"#009852","vira-green-650":"#008C4A","vira-green-700":"#007C41","vira-green-750":"#016A38","vira-green-800":"#095831","vira-green-850":"#024B29","vira-green-900":"#014024","vira-green-950":"#02371F","vira-green-1000":"#062D1B","vira-teal-100":"#E8FEFD","vira-teal-150":"#D9FAF8","vira-teal-200":"#C9F6F3","vira-teal-250":"#BAF2ED","vira-teal-300":"#A9EDE6","vira-teal-350":"#95E4DB","vira-teal-400":"#79D5CA","vira-teal-450":"#47C3B7","vira-teal-500":"#00B0A4","vira-teal-550":"#00A094","vira-teal-600":"#009389","vira-teal-650":"#00877D","vira-teal-700":"#00786F","vira-teal-750":"#00665F","vira-teal-800":"#01554F","vira-teal-850":"#004843","vira-teal-900":"#003E3A","vira-teal-950":"#033531","vira-teal-1000":"#072B29","vira-blue-100":"#F5F9FF","vira-blue-150":"#EAF3FF","vira-blue-200":"#E0EDFF","vira-blue-250":"#D6E7FF","vira-blue-300":"#CBDFFF","vira-blue-350":"#B9D4FF","vira-blue-400":"#9EC3FF","vira-blue-450":"#7AADFF","vira-blue-500":"#5697FF","vira-blue-550":"#4988ED","vira-blue-600":"#427DDC","vira-blue-650":"#3B72CA","vira-blue-700":"#3365B6","vira-blue-750":"#2D569A","vira-blue-800":"#27487E","vira-blue-850":"#203D6C","vira-blue-900":"#1B345D","vira-blue-950":"#172C4F","vira-blue-1000":"#142540","vira-accent-100":"#F5F9FF","vira-accent-150":"#EAF3FF","vira-accent-200":"#E0EDFF","vira-accent-250":"#D6E7FF","vira-accent-300":"#CBDFFF","vira-accent-350":"#B9D4FF","vira-accent-400":"#9EC3FF","vira-accent-450":"#7AADFF","vira-accent-500":"#5697FF","vira-accent-550":"#4988ED","vira-accent-600":"#427DDC","vira-accent-650":"#3B72CA","vira-accent-700":"#3365B6","vira-accent-750":"#2D569A","vira-accent-800":"#27487E","vira-accent-850":"#203D6C","vira-accent-900":"#1B345D","vira-accent-950":"#172C4F","vira-accent-1000":"#142540","vira-purple-100":"#F9F7FF","vira-purple-150":"#F3EFFF","vira-purple-200":"#EDE8FF","vira-purple-250":"#E6E1FF","vira-purple-300":"#DED8FF","vira-purple-350":"#D2CBFF","vira-purple-400":"#C1B7FF","vira-purple-450":"#AD9BFF","vira-purple-500":"#9B80FF","vira-purple-550":"#8D6EF4","vira-purple-600":"#8265E3","vira-purple-650":"#775BD1","vira-purple-700":"#6A50BB","vira-purple-750":"#5A459E","vira-purple-800":"#4A3B82","vira-purple-850":"#3E3170","vira-purple-900":"#352A61","vira-purple-950":"#2D2452","vira-purple-1000":"#251F43","vira-pink-100":"#FEF5FF","vira-pink-150":"#FFEAFF","vira-pink-200":"#FFE0FC","vira-pink-250":"#FFD7F8","vira-pink-300":"#FFCBF2","vira-pink-350":"#FFB9E9","vira-pink-400":"#FF9BDF","vira-pink-450":"#FF6DD6","vira-pink-500":"#F04AC5","vira-pink-550":"#DD3EB4","vira-pink-600":"#CC37A7","vira-pink-650":"#BC3099","vira-pink-700":"#A82988","vira-pink-750":"#8F2674","vira-pink-800":"#752361","vira-pink-850":"#641C53","vira-pink-900":"#561848","vira-pink-950":"#49153E","vira-pink-1000":"#3B1333","vira-grey-100":"#F9F9F9","vira-grey-150":"#F2F2F2","vira-grey-200":"#EBEBEB","vira-grey-250":"#E5E5E5","vira-grey-300":"#DEDEDE","vira-grey-350":"#D2D2D2","vira-grey-400":"#C2C2C2","vira-grey-450":"#ADADAD","vira-grey-500":"#999999","vira-grey-550":"#8A8A8A","vira-grey-600":"#7F7F7F","vira-grey-650":"#747474","vira-grey-700":"#676767","vira-grey-750":"#585858","vira-grey-800":"#494949","vira-grey-850":"#3E3E3E","vira-grey-900":"#353535","vira-grey-950":"#2D2D2D","vira-grey-1000":"#252525"});function y0({originalTheme:e,layerKey:r,themeColor:t,override:n,overrideValues:o}){const a=n?.[r];a&&(o[String(t[r].name)]=String(no(r,a,e.init.default,e.init.colors)))}i(y0,"applyCssVarOverride");function E$(e,r,{defaultOverride:t,colorOverrides:n}){const o={};t&&Ke(t).forEach(u=>{y0({originalTheme:e,layerKey:u,override:t,themeColor:e.colors[Ye],overrideValues:o})});const a={};n&&En(n).forEach(([u,f])=>{const g=e.colors[u];if(!g)throw new Error(`Override color name '${u}' does not exist in the theme being overridden.`);y0({originalTheme:e,layerKey:"foreground",override:f,themeColor:g,overrideValues:a}),y0({originalTheme:e,layerKey:"background",override:f,themeColor:g,overrideValues:a})});const s=qe(e.init.colors,(u,f)=>{const g=n?.[u];return{...f,...g}}),l=am({...e.init.default,...t},s);return{name:r,overrides:{...o,...a},originalTheme:e,asTheme:l}}i(E$,"defineColorThemeOverride");const S=am({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:c["vira-red-1000"]},"vira-red-foreground-body":{foreground:c["vira-red-750"]},"vira-red-foreground-non-body":{foreground:c["vira-red-650"]},"vira-red-foreground-header":{foreground:c["vira-red-500"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-400"]},"vira-red-foreground-decoration":{foreground:c["vira-red-350"]},"vira-red-foreground-invisible":{foreground:c["vira-red-250"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-1000"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-700"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-600"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-red-450"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-red-400"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-red-350"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-red-200"]},"vira-red-behind-fg-small-body":{background:c["vira-red-250"]},"vira-red-behind-fg-body":{background:c["vira-red-350"]},"vira-red-behind-fg-non-body":{background:c["vira-red-400"]},"vira-red-behind-fg-header":{background:c["vira-red-500"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-650"]},"vira-red-behind-fg-decoration":{background:c["vira-red-750"]},"vira-red-behind-fg-invisible":{background:c["vira-red-1000"]},"vira-red-on-self-small-body":{foreground:c["vira-red-850"],background:c["vira-red-100"]},"vira-red-on-self-body":{foreground:c["vira-red-850"],background:c["vira-red-250"]},"vira-red-on-self-non-body":{foreground:c["vira-red-850"],background:c["vira-red-350"]},"vira-red-on-self-header":{foreground:c["vira-red-850"],background:c["vira-red-450"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-850"],background:c["vira-red-500"]},"vira-red-on-self-decoration":{foreground:c["vira-red-850"],background:c["vira-red-650"]},"vira-red-on-self-invisible":{foreground:c["vira-red-850"],background:c["vira-red-1000"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-1000"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-750"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-650"]},"vira-yellow-foreground-header":{foreground:c["vira-yellow-500"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-400"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-350"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-250"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-1000"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-700"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-600"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-450"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-400"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-350"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-250"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-250"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-350"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-400"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-500"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-650"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-750"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-1000"]},"vira-yellow-on-self-small-body":{foreground:c["vira-yellow-850"],background:c["vira-yellow-100"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-850"],background:c["vira-yellow-300"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-850"],background:c["vira-yellow-350"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-850"],background:c["vira-yellow-450"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-850"],background:c["vira-yellow-550"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-850"],background:c["vira-yellow-650"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-850"],background:c["vira-yellow-1000"]},"vira-green-foreground-small-body":{foreground:c["vira-green-1000"]},"vira-green-foreground-body":{foreground:c["vira-green-800"]},"vira-green-foreground-non-body":{foreground:c["vira-green-650"]},"vira-green-foreground-header":{foreground:c["vira-green-550"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-450"]},"vira-green-foreground-decoration":{foreground:c["vira-green-350"]},"vira-green-foreground-invisible":{foreground:c["vira-green-250"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-1000"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-750"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-650"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-green-500"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-green-400"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-green-350"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-green-250"]},"vira-green-behind-fg-small-body":{background:c["vira-green-250"]},"vira-green-behind-fg-body":{background:c["vira-green-350"]},"vira-green-behind-fg-non-body":{background:c["vira-green-450"]},"vira-green-behind-fg-header":{background:c["vira-green-550"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-650"]},"vira-green-behind-fg-decoration":{background:c["vira-green-800"]},"vira-green-behind-fg-invisible":{background:c["vira-green-1000"]},"vira-green-on-self-small-body":{foreground:c["vira-green-850"],background:c["vira-green-100"]},"vira-green-on-self-body":{foreground:c["vira-green-850"],background:c["vira-green-300"]},"vira-green-on-self-non-body":{foreground:c["vira-green-850"],background:c["vira-green-400"]},"vira-green-on-self-header":{foreground:c["vira-green-850"],background:c["vira-green-450"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-850"],background:c["vira-green-550"]},"vira-green-on-self-decoration":{foreground:c["vira-green-850"],background:c["vira-green-700"]},"vira-green-on-self-invisible":{foreground:c["vira-green-850"],background:c["vira-green-1000"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-1000"]},"vira-teal-foreground-body":{foreground:c["vira-teal-800"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-650"]},"vira-teal-foreground-header":{foreground:c["vira-teal-550"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-450"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-350"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-250"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-1000"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-750"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-600"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-teal-500"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-teal-400"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-teal-350"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-teal-250"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-250"]},"vira-teal-behind-fg-body":{background:c["vira-teal-350"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-450"]},"vira-teal-behind-fg-header":{background:c["vira-teal-500"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-650"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-750"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-1000"]},"vira-teal-on-self-small-body":{foreground:c["vira-teal-850"],background:c["vira-teal-100"]},"vira-teal-on-self-body":{foreground:c["vira-teal-850"],background:c["vira-teal-300"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-850"],background:c["vira-teal-400"]},"vira-teal-on-self-header":{foreground:c["vira-teal-850"],background:c["vira-teal-450"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-850"],background:c["vira-teal-550"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-850"],background:c["vira-teal-700"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-850"],background:c["vira-teal-1000"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-1000"]},"vira-blue-foreground-body":{foreground:c["vira-blue-750"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-650"]},"vira-blue-foreground-header":{foreground:c["vira-blue-500"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-450"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-350"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-250"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-1000"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-750"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-600"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-blue-450"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-blue-400"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-blue-350"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-blue-250"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-250"]},"vira-blue-behind-fg-body":{background:c["vira-blue-350"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-400"]},"vira-blue-behind-fg-header":{background:c["vira-blue-500"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-650"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-750"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-1000"]},"vira-blue-on-self-small-body":{foreground:c["vira-blue-850"],background:c["vira-blue-100"]},"vira-blue-on-self-body":{foreground:c["vira-blue-850"],background:c["vira-blue-300"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-850"],background:c["vira-blue-350"]},"vira-blue-on-self-header":{foreground:c["vira-blue-850"],background:c["vira-blue-450"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-850"],background:c["vira-blue-550"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-850"],background:c["vira-blue-650"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-850"],background:c["vira-blue-1000"]},"vira-accent-foreground-small-body":{foreground:c["vira-accent-1000"]},"vira-accent-foreground-body":{foreground:c["vira-accent-750"]},"vira-accent-foreground-non-body":{foreground:c["vira-accent-650"]},"vira-accent-foreground-header":{foreground:c["vira-accent-500"]},"vira-accent-foreground-placeholder":{foreground:c["vira-accent-450"]},"vira-accent-foreground-decoration":{foreground:c["vira-accent-350"]},"vira-accent-foreground-invisible":{foreground:c["vira-accent-250"]},"vira-accent-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-1000"]},"vira-accent-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-750"]},"vira-accent-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-600"]},"vira-accent-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-accent-450"]},"vira-accent-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-accent-400"]},"vira-accent-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-accent-350"]},"vira-accent-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-accent-250"]},"vira-accent-behind-fg-small-body":{background:c["vira-accent-250"]},"vira-accent-behind-fg-body":{background:c["vira-accent-350"]},"vira-accent-behind-fg-non-body":{background:c["vira-accent-400"]},"vira-accent-behind-fg-header":{background:c["vira-accent-500"]},"vira-accent-behind-fg-placeholder":{background:c["vira-accent-650"]},"vira-accent-behind-fg-decoration":{background:c["vira-accent-750"]},"vira-accent-behind-fg-invisible":{background:c["vira-accent-1000"]},"vira-accent-on-self-small-body":{foreground:c["vira-accent-850"],background:c["vira-accent-100"]},"vira-accent-on-self-body":{foreground:c["vira-accent-850"],background:c["vira-accent-300"]},"vira-accent-on-self-non-body":{foreground:c["vira-accent-850"],background:c["vira-accent-350"]},"vira-accent-on-self-header":{foreground:c["vira-accent-850"],background:c["vira-accent-450"]},"vira-accent-on-self-placeholder":{foreground:c["vira-accent-850"],background:c["vira-accent-550"]},"vira-accent-on-self-decoration":{foreground:c["vira-accent-850"],background:c["vira-accent-650"]},"vira-accent-on-self-invisible":{foreground:c["vira-accent-850"],background:c["vira-accent-1000"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-1000"]},"vira-purple-foreground-body":{foreground:c["vira-purple-750"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-650"]},"vira-purple-foreground-header":{foreground:c["vira-purple-500"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-400"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-350"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-250"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-1000"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-700"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-600"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-purple-450"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-purple-400"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-purple-350"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-purple-200"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-250"]},"vira-purple-behind-fg-body":{background:c["vira-purple-350"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-400"]},"vira-purple-behind-fg-header":{background:c["vira-purple-500"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-600"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-750"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-1000"]},"vira-purple-on-self-small-body":{foreground:c["vira-purple-850"],background:c["vira-purple-100"]},"vira-purple-on-self-body":{foreground:c["vira-purple-850"],background:c["vira-purple-300"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-850"],background:c["vira-purple-350"]},"vira-purple-on-self-header":{foreground:c["vira-purple-850"],background:c["vira-purple-450"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-850"],background:c["vira-purple-500"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-850"],background:c["vira-purple-650"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-850"],background:c["vira-purple-1000"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-1000"]},"vira-pink-foreground-body":{foreground:c["vira-pink-750"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-650"]},"vira-pink-foreground-header":{foreground:c["vira-pink-500"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-400"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-350"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-250"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-1000"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-700"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-550"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-pink-450"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-pink-400"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-pink-350"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-pink-200"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-200"]},"vira-pink-behind-fg-body":{background:c["vira-pink-350"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-400"]},"vira-pink-behind-fg-header":{background:c["vira-pink-500"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-600"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-750"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-1000"]},"vira-pink-on-self-small-body":{foreground:c["vira-pink-850"],background:c["vira-pink-100"]},"vira-pink-on-self-body":{foreground:c["vira-pink-850"],background:c["vira-pink-250"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-850"],background:c["vira-pink-350"]},"vira-pink-on-self-header":{foreground:c["vira-pink-850"],background:c["vira-pink-450"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-850"],background:c["vira-pink-500"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-850"],background:c["vira-pink-650"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-850"],background:c["vira-pink-1000"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-1000"]},"vira-grey-foreground-body":{foreground:c["vira-grey-750"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-650"]},"vira-grey-foreground-header":{foreground:c["vira-grey-500"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-450"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-350"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-250"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-1000"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-750"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-600"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-grey-500"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-grey-400"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-grey-350"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-grey-250"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-250"]},"vira-grey-behind-fg-body":{background:c["vira-grey-350"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-400"]},"vira-grey-behind-fg-header":{background:c["vira-grey-500"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-650"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-750"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-1000"]},"vira-grey-on-self-small-body":{foreground:c["vira-grey-850"],background:c["vira-grey-100"]},"vira-grey-on-self-body":{foreground:c["vira-grey-850"],background:c["vira-grey-300"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-850"],background:c["vira-grey-350"]},"vira-grey-on-self-header":{foreground:c["vira-grey-850"],background:c["vira-grey-450"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-850"],background:c["vira-grey-550"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-850"],background:c["vira-grey-650"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-850"],background:c["vira-grey-1000"]}}),yB=E$(S,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:c["vira-red-250"]},"vira-red-foreground-body":{foreground:c["vira-red-350"]},"vira-red-foreground-non-body":{foreground:c["vira-red-400"]},"vira-red-foreground-header":{foreground:c["vira-red-450"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-600"]},"vira-red-foreground-decoration":{foreground:c["vira-red-750"]},"vira-red-foreground-invisible":{foreground:c["vira-red-1000"]},"vira-red-behind-bg-small-body":{background:c["vira-red-250"]},"vira-red-behind-bg-body":{background:c["vira-red-350"]},"vira-red-behind-bg-non-body":{background:c["vira-red-400"]},"vira-red-behind-bg-header":{background:c["vira-red-500"]},"vira-red-behind-bg-placeholder":{background:c["vira-red-650"]},"vira-red-behind-bg-decoration":{background:c["vira-red-750"]},"vira-red-behind-bg-invisible":{background:c["vira-red-1000"]},"vira-red-behind-fg-small-body":{background:c["vira-red-1000"]},"vira-red-behind-fg-body":{background:c["vira-red-700"]},"vira-red-behind-fg-non-body":{background:c["vira-red-600"]},"vira-red-behind-fg-header":{background:c["vira-red-450"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-400"]},"vira-red-behind-fg-decoration":{background:c["vira-red-350"]},"vira-red-behind-fg-invisible":{background:c["vira-red-200"]},"vira-red-on-self-small-body":{foreground:c["vira-red-200"],background:c["vira-red-1000"]},"vira-red-on-self-body":{foreground:c["vira-red-200"],background:c["vira-red-950"]},"vira-red-on-self-non-body":{foreground:c["vira-red-200"],background:c["vira-red-700"]},"vira-red-on-self-header":{foreground:c["vira-red-200"],background:c["vira-red-550"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-200"],background:c["vira-red-450"]},"vira-red-on-self-decoration":{foreground:c["vira-red-200"],background:c["vira-red-400"]},"vira-red-on-self-invisible":{foreground:c["vira-red-200"],background:c["vira-red-350"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-250"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-350"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-400"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-600"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-750"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-1000"]},"vira-yellow-behind-bg-small-body":{background:c["vira-yellow-250"]},"vira-yellow-behind-bg-body":{background:c["vira-yellow-350"]},"vira-yellow-behind-bg-non-body":{background:c["vira-yellow-400"]},"vira-yellow-behind-bg-header":{background:c["vira-yellow-500"]},"vira-yellow-behind-bg-placeholder":{background:c["vira-yellow-650"]},"vira-yellow-behind-bg-decoration":{background:c["vira-yellow-750"]},"vira-yellow-behind-bg-invisible":{background:c["vira-yellow-1000"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-1000"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-700"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-600"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-450"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-400"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-350"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-250"]},"vira-yellow-on-self-small-body":{foreground:c["vira-yellow-200"],background:c["vira-yellow-1000"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-200"],background:c["vira-yellow-900"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-200"],background:c["vira-yellow-700"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-200"],background:c["vira-yellow-550"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-200"],background:c["vira-yellow-450"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-200"],background:c["vira-yellow-400"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-200"],background:c["vira-yellow-350"]},"vira-green-foreground-small-body":{foreground:c["vira-green-250"]},"vira-green-foreground-body":{foreground:c["vira-green-350"]},"vira-green-foreground-non-body":{foreground:c["vira-green-450"]},"vira-green-foreground-header":{foreground:c["vira-green-500"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-650"]},"vira-green-foreground-decoration":{foreground:c["vira-green-750"]},"vira-green-foreground-invisible":{foreground:c["vira-green-1000"]},"vira-green-behind-bg-small-body":{background:c["vira-green-250"]},"vira-green-behind-bg-body":{background:c["vira-green-350"]},"vira-green-behind-bg-non-body":{background:c["vira-green-450"]},"vira-green-behind-bg-header":{background:c["vira-green-550"]},"vira-green-behind-bg-placeholder":{background:c["vira-green-650"]},"vira-green-behind-bg-decoration":{background:c["vira-green-800"]},"vira-green-behind-bg-invisible":{background:c["vira-green-1000"]},"vira-green-behind-fg-small-body":{background:c["vira-green-1000"]},"vira-green-behind-fg-body":{background:c["vira-green-750"]},"vira-green-behind-fg-non-body":{background:c["vira-green-650"]},"vira-green-behind-fg-header":{background:c["vira-green-500"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-400"]},"vira-green-behind-fg-decoration":{background:c["vira-green-350"]},"vira-green-behind-fg-invisible":{background:c["vira-green-250"]},"vira-green-on-self-small-body":{foreground:c["vira-green-200"],background:c["vira-green-1000"]},"vira-green-on-self-body":{foreground:c["vira-green-200"],background:c["vira-green-900"]},"vira-green-on-self-non-body":{foreground:c["vira-green-200"],background:c["vira-green-700"]},"vira-green-on-self-header":{foreground:c["vira-green-200"],background:c["vira-green-600"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-200"],background:c["vira-green-450"]},"vira-green-on-self-decoration":{foreground:c["vira-green-200"],background:c["vira-green-400"]},"vira-green-on-self-invisible":{foreground:c["vira-green-200"],background:c["vira-green-350"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-250"]},"vira-teal-foreground-body":{foreground:c["vira-teal-350"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-450"]},"vira-teal-foreground-header":{foreground:c["vira-teal-500"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-650"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-750"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-1000"]},"vira-teal-behind-bg-small-body":{background:c["vira-teal-250"]},"vira-teal-behind-bg-body":{background:c["vira-teal-350"]},"vira-teal-behind-bg-non-body":{background:c["vira-teal-450"]},"vira-teal-behind-bg-placeholder":{background:c["vira-teal-650"]},"vira-teal-behind-bg-decoration":{background:c["vira-teal-750"]},"vira-teal-behind-bg-invisible":{background:c["vira-teal-1000"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-1000"]},"vira-teal-behind-fg-body":{background:c["vira-teal-750"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-600"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-400"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-350"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-250"]},"vira-teal-on-self-small-body":{foreground:c["vira-teal-200"],background:c["vira-teal-1000"]},"vira-teal-on-self-body":{foreground:c["vira-teal-200"],background:c["vira-teal-900"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-200"],background:c["vira-teal-700"]},"vira-teal-on-self-header":{foreground:c["vira-teal-200"],background:c["vira-teal-600"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-200"],background:c["vira-teal-450"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-200"],background:c["vira-teal-400"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-200"],background:c["vira-teal-350"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-250"]},"vira-blue-foreground-body":{foreground:c["vira-blue-350"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-400"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-600"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-750"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-1000"]},"vira-blue-behind-bg-small-body":{background:c["vira-blue-250"]},"vira-blue-behind-bg-body":{background:c["vira-blue-350"]},"vira-blue-behind-bg-non-body":{background:c["vira-blue-400"]},"vira-blue-behind-bg-header":{background:c["vira-blue-500"]},"vira-blue-behind-bg-placeholder":{background:c["vira-blue-650"]},"vira-blue-behind-bg-decoration":{background:c["vira-blue-750"]},"vira-blue-behind-bg-invisible":{background:c["vira-blue-1000"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-1000"]},"vira-blue-behind-fg-body":{background:c["vira-blue-750"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-600"]},"vira-blue-behind-fg-header":{background:c["vira-blue-450"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-400"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-350"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-250"]},"vira-blue-on-self-small-body":{foreground:c["vira-blue-200"],background:c["vira-blue-1000"]},"vira-blue-on-self-body":{foreground:c["vira-blue-200"],background:c["vira-blue-900"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-200"],background:c["vira-blue-700"]},"vira-blue-on-self-header":{foreground:c["vira-blue-200"],background:c["vira-blue-550"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-200"],background:c["vira-blue-450"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-200"],background:c["vira-blue-400"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-200"],background:c["vira-blue-350"]},"vira-accent-foreground-small-body":{foreground:c["vira-accent-250"]},"vira-accent-foreground-body":{foreground:c["vira-accent-350"]},"vira-accent-foreground-non-body":{foreground:c["vira-accent-400"]},"vira-accent-foreground-placeholder":{foreground:c["vira-accent-600"]},"vira-accent-foreground-decoration":{foreground:c["vira-accent-750"]},"vira-accent-foreground-invisible":{foreground:c["vira-accent-1000"]},"vira-accent-behind-bg-small-body":{background:c["vira-accent-250"]},"vira-accent-behind-bg-body":{background:c["vira-accent-350"]},"vira-accent-behind-bg-non-body":{background:c["vira-accent-400"]},"vira-accent-behind-bg-header":{background:c["vira-accent-500"]},"vira-accent-behind-bg-placeholder":{background:c["vira-accent-650"]},"vira-accent-behind-bg-decoration":{background:c["vira-accent-750"]},"vira-accent-behind-bg-invisible":{background:c["vira-accent-1000"]},"vira-accent-behind-fg-small-body":{background:c["vira-accent-1000"]},"vira-accent-behind-fg-body":{background:c["vira-accent-750"]},"vira-accent-behind-fg-non-body":{background:c["vira-accent-600"]},"vira-accent-behind-fg-header":{background:c["vira-accent-450"]},"vira-accent-behind-fg-placeholder":{background:c["vira-accent-400"]},"vira-accent-behind-fg-decoration":{background:c["vira-accent-350"]},"vira-accent-behind-fg-invisible":{background:c["vira-accent-250"]},"vira-accent-on-self-small-body":{foreground:c["vira-accent-200"],background:c["vira-accent-1000"]},"vira-accent-on-self-body":{foreground:c["vira-accent-200"],background:c["vira-accent-900"]},"vira-accent-on-self-non-body":{foreground:c["vira-accent-200"],background:c["vira-accent-700"]},"vira-accent-on-self-header":{foreground:c["vira-accent-200"],background:c["vira-accent-550"]},"vira-accent-on-self-placeholder":{foreground:c["vira-accent-200"],background:c["vira-accent-450"]},"vira-accent-on-self-decoration":{foreground:c["vira-accent-200"],background:c["vira-accent-400"]},"vira-accent-on-self-invisible":{foreground:c["vira-accent-200"],background:c["vira-accent-350"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-250"]},"vira-purple-foreground-body":{foreground:c["vira-purple-350"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-400"]},"vira-purple-foreground-header":{foreground:c["vira-purple-450"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-600"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-750"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-1000"]},"vira-purple-behind-bg-small-body":{background:c["vira-purple-250"]},"vira-purple-behind-bg-body":{background:c["vira-purple-350"]},"vira-purple-behind-bg-non-body":{background:c["vira-purple-400"]},"vira-purple-behind-bg-header":{background:c["vira-purple-500"]},"vira-purple-behind-bg-placeholder":{background:c["vira-purple-600"]},"vira-purple-behind-bg-decoration":{background:c["vira-purple-750"]},"vira-purple-behind-bg-invisible":{background:c["vira-purple-1000"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-1000"]},"vira-purple-behind-fg-body":{background:c["vira-purple-700"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-600"]},"vira-purple-behind-fg-header":{background:c["vira-purple-450"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-400"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-350"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-200"]},"vira-purple-on-self-small-body":{foreground:c["vira-purple-200"],background:c["vira-purple-1000"]},"vira-purple-on-self-body":{foreground:c["vira-purple-200"],background:c["vira-purple-900"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-200"],background:c["vira-purple-700"]},"vira-purple-on-self-header":{foreground:c["vira-purple-200"],background:c["vira-purple-550"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-200"],background:c["vira-purple-450"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-200"],background:c["vira-purple-400"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-200"],background:c["vira-purple-350"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-200"]},"vira-pink-foreground-body":{foreground:c["vira-pink-350"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-400"]},"vira-pink-foreground-header":{foreground:c["vira-pink-450"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-600"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-750"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-1000"]},"vira-pink-behind-bg-small-body":{background:c["vira-pink-200"]},"vira-pink-behind-bg-body":{background:c["vira-pink-350"]},"vira-pink-behind-bg-non-body":{background:c["vira-pink-400"]},"vira-pink-behind-bg-header":{background:c["vira-pink-500"]},"vira-pink-behind-bg-placeholder":{background:c["vira-pink-600"]},"vira-pink-behind-bg-decoration":{background:c["vira-pink-750"]},"vira-pink-behind-bg-invisible":{background:c["vira-pink-1000"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-1000"]},"vira-pink-behind-fg-body":{background:c["vira-pink-700"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-550"]},"vira-pink-behind-fg-header":{background:c["vira-pink-450"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-400"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-350"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-200"]},"vira-pink-on-self-small-body":{foreground:c["vira-pink-200"],background:c["vira-pink-1000"]},"vira-pink-on-self-body":{foreground:c["vira-pink-200"],background:c["vira-pink-950"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-200"],background:c["vira-pink-700"]},"vira-pink-on-self-header":{foreground:c["vira-pink-200"],background:c["vira-pink-550"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-200"],background:c["vira-pink-450"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-200"],background:c["vira-pink-400"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-200"],background:c["vira-pink-300"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-250"]},"vira-grey-foreground-body":{foreground:c["vira-grey-350"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-400"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-600"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-750"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-1000"]},"vira-grey-behind-bg-small-body":{background:c["vira-grey-250"]},"vira-grey-behind-bg-body":{background:c["vira-grey-350"]},"vira-grey-behind-bg-non-body":{background:c["vira-grey-400"]},"vira-grey-behind-bg-placeholder":{background:c["vira-grey-650"]},"vira-grey-behind-bg-decoration":{background:c["vira-grey-750"]},"vira-grey-behind-bg-invisible":{background:c["vira-grey-1000"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-1000"]},"vira-grey-behind-fg-body":{background:c["vira-grey-750"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-600"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-400"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-350"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-250"]},"vira-grey-on-self-small-body":{foreground:c["vira-grey-200"],background:c["vira-grey-1000"]},"vira-grey-on-self-body":{foreground:c["vira-grey-200"],background:c["vira-grey-900"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-200"],background:c["vira-grey-700"]},"vira-grey-on-self-header":{foreground:c["vira-grey-200"],background:c["vira-grey-600"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-200"],background:c["vira-grey-450"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-200"],background:c["vira-grey-400"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-200"],background:c["vira-grey-350"]}}}),Oy="8px",R=It({"vira-form-border-color":S.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":S.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":S.colors[Ye].background.value,"vira-form-foreground-color":S.colors[Ye].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":S.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":S.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":S.colors["vira-accent-behind-bg-invisible"].background.value,"vira-form-selection-active-color":S.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-error-color":S.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":S.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":S.colors["vira-red-behind-bg-body"].background.value,"vira-form-warning-color":S.colors["vira-yellow-behind-bg-non-body"].background.value,"vira-form-warning-hover-color":S.colors["vira-yellow-behind-bg-header"].background.value,"vira-form-warning-active-color":S.colors["vira-yellow-behind-bg-body"].background.value,"vira-form-positive-color":S.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-positive-hover-color":S.colors["vira-green-behind-bg-header"].background.value,"vira-form-positive-active-color":S.colors["vira-green-behind-bg-body"].background.value,"vira-form-success-color":S.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":Oy,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":S.colors["vira-accent-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":k`calc(var(--vira-form-radius, ${Re(Oy)}) + 2px)`,"vira-form-plain-color":c["vira-grey-100"].value,"vira-form-plain-hover-color":S.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":S.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":S.colors["vira-accent-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":S.colors["vira-accent-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":S.colors["vira-accent-behind-bg-body"].background.value,"vira-form-danger-color":S.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":S.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":S.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":S.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":S.colors["vira-grey-foreground-decoration"].foreground.value}),ys=k`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,js=It({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function ro(e){return M.isString(e)?Re(e):e.value}i(ro,"cssValueOrRaw$1");function ua({elementBorderSize:e="1px",outlineGap:r="2px",outlineWidth:t="2px",noNesting:n,outlineColor:o=R["vira-form-focus-outline-color"],borderRadius:a=R["vira-form-focus-outline-border-radius"],renderInside:s}={}){const l=k`calc(${ro(r)})`,u=k`calc(${ro(t)} + ${ro(r)} + ${ro(e)})`,f=s?k`
              content: '';
              top: ${l};
              left: ${l};
              position: absolute;
              width: calc(100% - calc(${l} * 2));
              height: calc(100% - calc(${l} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${ro(t)} solid ${ro(o)};
              border-radius: ${ro(a)};
              z-index: 100;
          `:k`
              content: '';
              top: calc(${u} * -1);
              left: calc(${u} * -1);
              position: absolute;
              width: calc(100% + calc(${u} * 2));
              height: calc(100% + calc(${u} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${ro(t)} solid ${ro(o)};
              border-radius: ${ro(a)};
              z-index: 100;
          `;return n?f:k`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${f}
        }
    `}i(ua,"createFocusStyles$1");function Ry(e){if(typeof e=="string")return wB(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let r=[0,0,0,0,!1,"unknown"];return r[0]=e.r?e.r:e.red?e.red:!1,r[1]=e.g?e.g:e.green?e.green:!1,r[2]=e.b?e.b:e.blue?e.blue:!1,r[3]=e.a?e.a:e.alpha?e.alpha:1,r[4]=!!(r[0]&&r[1]&&r[2]),r[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",r}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}i(Ry,"colorParsley");function wB(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let r=!1,n=[0,0,0,0,r,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let l in s)if(e==l){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:i(function(g){for(let h=0;h<3;h++)n[h]=parseInt(g[h+1],16);return n[3]=1,!0},"sprig")},f=u.rex.exec(s[l]);return n[4]=r=u.sprig(f),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:i(function(s){let l=0,u=0,f=10,g=100,h=2.55,p="1";s[23]&&(p=s[23],delete s[23]),n[3]=p.match(/%/g)?parseFloat(p)/g:parseFloat(p);for(let b=1;b<s.length;b++)s[b]&&(l=l||b,u=b);switch(u){case 4:f=16,g=15,n[3]=parseInt(s[u],f)/g;case 3:f=16;for(let b=0;b<3;b++)n[b]=parseInt(s[l+b]+s[l+b],f);break;case 5:f=16;case 9:n[0]=n[1]=n[2]=f==10?parseFloat(s[u]):parseInt(s[u],f);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[u])*h;break;case 8:f=16,g=255,n[3]=parseInt(s[8],f)/g;case 7:f=16;case 11:for(let b=0;b<3;b++)n[b]=f==10?parseFloat(s[l+b]):parseInt(s[l+b],f);break;case 14:for(let b=0;b<3;b++)n[b]=parseFloat(s[l+b])*h;break;case 18:n[5]=s[15];for(let b=0;b<3;b++)l++,n[b]=s[l].match(/%/g)?parseFloat(s[l])*2.55:parseFloat(s[l])*255;break;case 22:n[5]=s[l];for(let b=0;b<3;b++)l++,n[b]=s[l]?s[l].match(/%/g)?parseFloat(s[l])/g:parseFloat(s[l]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let N=function(_){let H=(_+A/30)%12,ce=b*Math.min(v,1-v);return v-ce*Math.max(-1,Math.min(H-3,9-H,1))};i(N,"f");let b,v,$,C,E,A=n[0]%360;if(A<0&&(A+=360),n[5].match(/^hsla?/i))b=n[1],v=n[2],$=0,E=1;else if(n[5].match(/^hwba?/i)){if($=n[1],C=n[2],$+C>=1){n[0]=n[1]=n[2]=$/($+C),n[5]="sRGB";break}b=1,v=.5,E=1-$-C}n[0]=Math.round(255*(N(0)*E+$)),n[1]=Math.round(255*(N(8)*E+$)),n[2]=Math.round(255*(N(4)*E+$)),n[5]="sRGB"}break}return!0},"parsley")},a=o.rex.exec(e);return a?(n[4]=r=o.parsley(a),n):(r=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,r,"parsleyError"])}i(wB,"parseString");const Sr={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function kB(e,r,t=-1){const n=[0,1.1];if(isNaN(e)||isNaN(r)||Math.min(e,r)<n[0]||Math.max(e,r)>n[1])return 0;let o=0,a=0,s="BoW";return e=e>Sr.blkThrs?e:e+Math.pow(Sr.blkThrs-e,Sr.blkClmp),r=r>Sr.blkThrs?r:r+Math.pow(Sr.blkThrs-r,Sr.blkClmp),Math.abs(r-e)<Sr.deltaYmin?0:(r>e?(o=(Math.pow(r,Sr.normBG)-Math.pow(e,Sr.normTXT))*Sr.scaleBoW,a=o<Sr.loClip?0:o-Sr.loBoWoffset):(s="WoB",o=(Math.pow(r,Sr.revBG)-Math.pow(e,Sr.revTXT))*Sr.scaleWoB,a=o>-.1?0:o+Sr.loWoBoffset),t<0?a*100:t==0?Math.round(Math.abs(a)*100)+"<sub>"+s+"</sub>":Number.isInteger(t)?(a*100).toFixed(t):0)}i(kB,"APCAcontrast");function $B(e,r,t=-1,n=!0){let o=Ry(r),a=Ry(e);return!(a[3]==""||a[3]==1)&&(a=DB(a,o,n)),kB(Ly(a),Ly(o),t)}i($B,"calcAPCA");function xB(e,r=2){const t=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],a=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(r),0,0,0,0,0,0,0,0,0];s.length;let l=777;e=Math.abs(e);const u=.2,f=e==0?1:e*u|0;let g=0,h=(e-t[f][g])*u;for(g++;g<a;g++)l=t[f][g],l>400?s[g]=l:e<14.5?s[g]=999:e<29.5?s[g]=777:l>24?s[g]=Math.round(l-n[f][g]*h):s[g]=l-(2*n[f][g]*h|0)*.5;return s}i(xB,"fontLookupAPCA");function Ly(e=[0,0,0]){function r(t){return Math.pow(t/255,Sr.mainTRC)}return i(r,"simpleExp"),Sr.sRco*r(e[0])+Sr.sGco*r(e[1])+Sr.sBco*r(e[2])}i(Ly,"sRGBtoY");function DB(e=[0,0,0,1],r=[0,0,0],t=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let a=0;a<3;a++)o[a]=r[a]*n+e[a]*e[3],t&&(o[a]=Math.min(Math.round(o[a]),255));return o}i(DB,"alphaBlend");const A$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};qe(A$,e=>e);Object.fromEntries(Object.entries(A$).map(([e,r])=>[r,e]));const jy=new Map;function CB({background:e,foreground:r}){const t=`${r}|${e}`,n=jy.get(t);if(n)return n;const o=Ow(Number($B(r,e)),{digits:1}),a={contrast:o,fontSizes:EB(o),contrastLevel:AB(o)};return jy.set(t,a),a}i(CB,"calculateContrast");function EB(e){const r=xB(e).slice(1);return fi(r,(n,o)=>({key:(o+1)*100,value:n}))}i(EB,"calculateFontSizes");function AB(e){return ur.isDefined(uf.find(r=>r.min<=Math.abs(e)))}i(AB,"determineContrastLevel");var ne;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(ne||(ne={}));const FB={[ne.SmallBodyText]:"Small Text",[ne.BodyText]:"Body Text",[ne.NonBodyText]:"Non-body Text",[ne.Header]:"Header",[ne.Placeholder]:"Placeholder",[ne.Decoration]:"Decoration",[ne.Invisible]:"Invisible"};ne.SmallBodyText,ne.BodyText,ne.NonBodyText,ne.Header,ne.Placeholder,ne.Decoration,ne.Invisible;const uf=[{min:90,name:ne.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:ne.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:ne.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:ne.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:ne.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:ne.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:ne.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];fi(uf,e=>({key:e.min,value:e}));fi(uf,e=>({key:e.name,value:e}));const SB=Qt(ne).sort((e,r)=>Number(r.includes("-"))-Number(e.includes("-"))),MB=gd(Vt(Object.keys(S.colors),e=>e.split("-")[1],e=>e!=="default")).filter(M.isTruthy),Ua=fi(MB,e=>({key:e,value:e}),{}),TB=Ke(S.colors),Tl=Tw(Ua,e=>{const r=gd(Vt(TB,t=>SB.reduce((n,o)=>Oh({value:n,suffix:`-${o}`}),Ki({value:t,prefix:`vira-${e}-`})),(t,n)=>n.startsWith(`vira-${e}-`)));return fi(r,t=>({key:t,value:fi(Qt(ne),n=>{const o=`vira-${e}-${t}-${n}`;if(M.hasKey(S.colors,o))return{key:n,value:S.colors[o]}})}))});var te=(e=>(e.Accent="accent",e.Plain="plain",e.Neutral="neutral",e.Danger="danger",e.Warning="warning",e.Positive="positive",e.None="none",e))(te||{});const ao={accent:Ua.blue,neutral:Ua.grey,danger:Ua.red,warning:Ua.yellow,positive:Ua.green},ca=["accent","plain","neutral","danger","warning","positive"];var Gi=(e=>(e.Large="large",e.Medium="medium",e.Small="small",e.None="none",e))(Gi||{});const cf=["small","medium","large"];var lr=(e=>(e.Standard="standard",e.Subtle="subtle",e.None="none",e))(lr||{});const df=["standard","subtle"],Qg={large:40,medium:32,small:24},sm=k`
    padding: 0;
    margin: 0;
`,qr=k`
    ${sm};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Uy=It({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),rd={menuShadow:k`
        filter: drop-shadow(0px 5px 5px ${Uy["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:k`
        box-shadow: 0 5px 15px ${Uy["modal-shadow-color"].value};
    `},Ro=k`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,_y="vira-",gr=rm({assertInputs:i(e=>{if(!e.tagName.startsWith(_y))throw new Error(`Tag name should start with '${_y}' but got '${e.tagName}'`)},"assertInputs")}),B=gr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":i(({inputs:e})=>!!e.fitContainer||!!e.icon?.size,"vira-icon-fit-container")},styles:i(({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        svg * {
            vector-effect: non-scaling-stroke;
        }

        ${e["vira-icon-fit-container"].selector} {
            > *,
            svg {
                height: 100%;
                width: 100%;
            }
        }
    `,"styles"),render({inputs:e,host:r}){if(e.icon)e.icon.size&&(r.style.width=ra(e.icon.size),r.style.height=ra(e.icon.size));else return"";return e.icon.svgTemplate}}),ui=gr()({tagName:"vira-menu-item",state(){return{cleanupListeners:void 0}},hostClasses:{"vira-menu-item-selected":i(({inputs:e})=>!!e.selected||!!e.iconOverride,"vira-menu-item-selected"),"vira-menu-item-disabled":i(({inputs:e})=>!!e.disabled,"vira-menu-item-disabled"),"vira-menu-item-enabled":i(({inputs:e})=>!e.disabled,"vira-menu-item-enabled"),"vira-menu-item-default-icon":i(({inputs:e})=>!e.iconOverride,"vira-menu-item-default-icon"),"vira-menu-item-default-styles":i(({inputs:e})=>!e.disablePointerStyles,"vira-menu-item-default-styles")},styles:i(({hostClasses:e})=>k`
        :host {
            display: flex;
            ${Ro};
            box-sizing: border-box;
            max-width: 100%;
            gap: 1px;
            overflow: hidden;
            padding: 8px 3px;
            padding-right: 16px;
            align-items: center;
            text-align: left;
        }

        ${e["vira-menu-item-disabled"].selector}${e["vira-menu-item-default-styles"].selector} {
            cursor: not-allowed;

            & .slot-wrapper,
            & ${B} {
                opacity: 0.3;
                pointer-events: none;
            }
        }

        :host(:focus),
        :host(:active) {
            outline: none;
        }

        ${e["vira-menu-item-enabled"].selector}${e["vira-menu-item-default-styles"].selector} {
            cursor: pointer;

            &:host(:focus) {
                background-color: ${R["vira-form-selection-hover-color"].value};
            }

            &:host(:active) {
                background-color: ${R["vira-form-selection-active-color"].value};
            }
        }

        ${B} {
            width: 24px;
            aspect-ratio: 1;
            align-items: center;
            justify-content: center;
        }

        ${e["vira-menu-item-default-icon"].selector} {
            ${B} {
                visibility: hidden;
            }
        }

        ${e["vira-menu-item-selected"].selector} ${B} {
            visibility: visible;
        }

        .slot-wrapper {
            display: flex;
            flex-grow: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            min-width: 0;
        }
    `,"styles"),init({state:e,updateState:r,host:t,inputs:n}){t.setAttribute("role","menuitem"),t.setAttribute("tabindex",n.disabled?"-1":"0"),t.setAttribute("aria-selected",String(!!n.selected)),t.setAttribute("aria-disabled",String(!!n.disabled)),e.cleanupListeners?.();const o={};function a(l){if(o[l.type])return;if(n.disabled){l.preventDefault(),l.stopPropagation();return}ur.instanceOf(t.shadowRoot.querySelector("slot"),HTMLSlotElement).assignedElements({flatten:!0}).forEach(f=>{f instanceof HTMLElement&&!l.composedPath().includes(f)&&(l.preventDefault(),l.stopPropagation(),o[l.type]=!0,l.type==="click"?f.click():f.dispatchEvent(new MouseEvent(l.type,l)),delete o[l.type])})}i(a,"propagateMouseEvent");const s=[Un(t,"click",a),Un(t,"mousedown",a),Un(t,"mouseenter",()=>{n.disabled||t.focus()}),Un(t,"mouseleave",()=>{n.disabled||t.blur()})];r({cleanupListeners:i(()=>{s.forEach(l=>l())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e}){return m`
            <${B.assign({icon:e.iconOverride||lf})}></${B}>
            <div class="slot-wrapper">
                <slot>&nbsp;</slot>
            </div>
        `}});var lm=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(lm||{}),Xl=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Xl||{});const Zi=gr()({tagName:"vira-menu",hostClasses:{"vira-menu-open-upwards":i(({inputs:e})=>e.direction==="upwards","vira-menu-open-upwards"),"vira-menu-rounded":i(({inputs:e})=>e.cornerStyle==="all-rounded","vira-menu-rounded"),"vira-menu-square":i(({inputs:e})=>e.cornerStyle==="all-square","vira-menu-square")},styles:i(({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            overscroll-behavior: contain;
            border-radius: ${R["vira-form-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${R["vira-form-background-color"].value};
            border: 1px solid ${R["vira-form-border-color"].value};
            color: ${R["vira-form-foreground-color"].value};
            ${rd.menuShadow}
        }

        ${e["vira-menu-open-upwards"].selector} {
            border-radius: ${R["vira-form-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-menu-rounded"].selector} {
            border-radius: ${R["vira-form-radius"].value};
        }
    `,"styles"),render(){return m`
            <slot>&nbsp;</slot>
        `}});function PB(e,r){return e>r}i(PB,"greaterThan");function IB(e,r){return e<r}i(IB,"lessThan");function Ql(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}i(Ql,"focusElement");var qt;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(qt||(qt={}));var Be;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Be||(Be={}));function ff(e){const r={x:-1,y:-1};let t;for(;r.y<e.length-1&&!t;){r.y++;const n=e[r.y];for(;n&&r.x<n.length-1&&!t;){r.x++;const o=n[r.x];if(o)if(o.navEntry.navParams.group){const a=ff(o.children);a&&(t=a.node)}else o.navEntry.navParams.disabled||(t=o)}}if(t)return{node:t,coords:r}}i(ff,"findDefaultChild");function zy(e,r,t,n){if(!r){const u=ff(e.children);return u?(Ql(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:t,navAction:Be.Navigate}):{success:!1,reason:"no default element to focus",direction:t,navAction:Be.Navigate}}const{nextNode:o,requiresWrapping:a,coords:s}=F$(r.position,t),l=n?!0:!a;return o&&l?(Ql(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:a,direction:t,navAction:Be.Navigate,coords:s}):o?l?{success:!1,reason:"no conditions matched",direction:t,navAction:Be.Navigate}:{success:!1,reason:"wrapping blocked",direction:t,navAction:Be.Navigate}:{success:!1,reason:"failed to find node to focus",direction:t,navAction:Be.Navigate}}i(zy,"navigate");function F$(e,r){let t=!1,n,o=1;const a=Date.now();for(;!t||!n;)if(n=NB(e,r,o),t=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-a>1e3)return Bw.warning("Failed to find next non-disabled node."),n;return n}i(F$,"calculateNextNode");function NB(e,r,t){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Er.isDefined(n,"missing parent");const o=ur.isDefined(n.children[e.nodeCoords.y]),a=n.children.length>1&&(r===qt.Down||r===qt.Up),s=r===qt.Down||r===qt.Right?t:-1*t,l=s<0?PB:IB,u=a?_b(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,f=ur.isDefined(n.children[u]),g=a?e.nodeCoords.x>=f.length?f.length-1:e.nodeCoords.x:_b(e.nodeCoords.x+s,{min:0,max:o.length-1,takeOverflow:!0}),h=n.children[u]?.[g],p=a?l(u,e.nodeCoords.y):l(g,e.nodeCoords.x);return{nextNode:h,requiresWrapping:p,coords:{x:g,y:u}}}i(NB,"innerCalculateNextNode");function BB(e,r,t){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:r,navAction:Be.Pibling};const{nextNode:o,requiresWrapping:a,coords:s}=F$(n,r),l=o?.navEntry.navParams.group?ff(o.children):{node:o,coords:s},u=t?!0:!a;return!l||!l.node?{success:!1,reason:"no node to navigate to",direction:r,navAction:Be.Pibling}:u?(Ql(l.node.element),{success:!0,defaulted:!1,newElement:l.node.element,wrapped:a,coords:l.coords,direction:r,navAction:Be.Pibling}):{success:!1,reason:"wrapping blocked",direction:r,navAction:Be.Pibling}}i(BB,"navigatePibling");var ko;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(ko||(ko={}));const w0={name:"data-nav"},S$="navEntry";function OB(e){return S$ in e}i(OB,"hasNavEntry");function RB(e){if(OB(e)){const r=e[S$];return ur.instanceOf(r,jB,"Invalid nav entry")}else return}i(RB,"extractNavEntry");function LB(e){return r=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(r.type==="mousedown"&&!e.navController.options.activateOnMouseUp||r.type==="mouseup"&&e.navController.options.activateOnMouseUp?r.target===e.element&&e.activate(!0):r.type==="mouseup"||r.type==="focus"?r.target===e.element&&e.focus(!0):r.type==="mousemove"?r.target===e.element&&e.navValue!==ko.Active&&e.focus(!0):(r.type==="blur"||r.type==="mouseleave")&&r.target===e.element&&(e.activate(!1),e.focus(!1)))}}i(LB,"createEventListener");class jB{static{i(this,"NavEntry")}element;navParams;navTreeNode;navValue;eventListener=LB(this);constructor(r,t,n){this.element=r,this.navParams=n,this.attachListeners(),this.navController=t}set navController(r){this._navController!==r&&(this._navController?.removeNavEntry(this),this._navController=r,r.addNavEntry(this))}get navController(){return Er.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(w0.name,""),m0(this.element)&&this.element.blur())}focus(r,t){const n=this.navValue,o=r===(n===ko.Focused);if(!(this.navParams.group||this.navController.locked||o||!r&&this.navController.options.alwaysRequireFocused))return r?(this.setNavValue(ko.Focused),m0(this.element)||this.element.focus()):(this.removeNavValue(ko.Focused),m0(this.element)&&this.element.blur()),t||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:r,previousNavValue:n}),this.navController.triggerNavEntry(this,r,Be.Focus)}activate(r){const t=this.navValue,n=r===(t===ko.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(r,!0),r?this.setNavValue(ko.Active):this.setNavValue(ko.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:r,previousNavValue:t}),this.navController.triggerNavEntry(this,r,Be.Activate)}setNavValue(r){this.navValue=r,this.element.setAttribute(w0.name,r)}removeNavValue(r){this.navValue===r&&(this.navValue=void 0,this.element.setAttribute(w0.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function UB(e,r){Object.entries(r).forEach(([t,n])=>{M.isBoolean(n)&&n?e.setAttribute(t,""):M.isBoolean(n)||n==null?e.removeAttribute(t):e.setAttribute(t,String(n))})}i(UB,"applyAttributes");function _B(e,r){if(!r)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Be.Enter};if(!r.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Be.Enter};const t=r.position.node.children[0]?.[0];return t?(Ql(t.element),{success:!0,defaulted:!1,wrapped:!1,newElement:t.element,direction:void 0,navAction:Be.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Be.Enter}}i(_B,"enterInto");function zB(e,r){return M$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,r)}i(zB,"walkNavTree");function M$(e,r,t){for(let n=0;n<r.length;n++){const o=r[n];for(let a=0;a<o.length;a++){const s=o[a],l={ancestorChain:e,nodeCoords:{x:a,y:n},node:s};if(t(l))return l;const u=M$(e.concat(l),s.children,t);if(u)return u}}}i(M$,"walkRecursively");function T$(e,r){const t=zB(e,({node:n})=>!n.root&&n.navEntry===r);if(!t)throw new Error("Failed to find NavEntry in NavTree.");return t}i(T$,"findNavTreeNodeByNavEntry");function qB(e,r){if(!r)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Be.Exit};const t=r.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!t||t.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Be.Exit};const{nodeCoords:n}=T$(e,t.navEntry);return Ql(t.element),{success:!0,defaulted:!1,wrapped:!1,newElement:t.element,direction:void 0,navAction:Be.Exit,coords:n}}i(qB,"exitOutOf");class VB extends Ht()("nav-exit"){static{i(this,"NavExitEvent")}}class um extends Ht()("nav-activate"){static{i(this,"NavActivateEvent")}}class WB extends Ht()("nav-focus"){static{i(this,"NavFocusEvent")}}class KB extends Ht()("nav-enter"){static{i(this,"NavEnterEvent")}}class HB extends Ht()("nav-navigate"){static{i(this,"NavigateEvent")}}class GB extends Ht()("nav-navigate-pibling"){static{i(this,"NavPiblingEvent")}}function ZB(e){return{root:!0,children:P$(e)?.children||[]}}i(ZB,"mapTree");function P$(e){const r=e.element;if(!(r instanceof HTMLElement))return;const t=RB(r),n=YB(e);if((t?.navParams.group?!!n.length:!1)||n.length||t)return{root:!1,element:r,navEntry:t,children:n}}i(P$,"mapTreeRecursively");function YB(e){const r=[];function t(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(l=>l.forEach(u=>t(u)));return}const o=n.navEntry.navParams.x,a=n.navEntry.navParams.y||0,s=pa(r,a,()=>({noX:[],withX:[],y:a}));o==null?s.noX.push(n):s.withX.push({x:o,node:n})}return i(t,"pushNode"),e.children.forEach(n=>{const o=P$(n);o&&t(o)}),r.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,a)=>o.x-a.x),n.withX.forEach(({x:o,node:a})=>{n.noX.splice(o,0,a)}),n.noX)).filter(M.isTruthy)}i(YB,"expandChildren");class I$ extends mu{static{i(this,"NavController")}rootElement;options;constructor(r,t={}){super(),this.rootElement=r,this.options=t}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){ff(this.getNavTree().children)?.node.element.focus()}addNavEntry(r){this.navEntries.add(r),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(r){this.navEntries.delete(r),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(r,t,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!r)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=T$(this.getNavTree(),r);t?(this.navEntries.forEach(s=>{s!==r&&s.clearNavValue()}),this.currentNavEntry={entry:r,navAction:n,position:o}):this.currentNavEntry?.entry===r&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const a={success:!0,defaulted:!1,direction:void 0,newElement:r.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return t&&(n===Be.Activate?this.dispatch(new um({detail:a})):n===Be.Focus&&this.dispatch(new WB({detail:a}))),a}navigate({direction:r,allowWrapping:t}){if(this.locked)return{success:!1,direction:r,navAction:Be.Navigate,reason:"NavController is locked."};const n=zy(this.getNavTree(),this.currentNavEntry,r,t);return this.dispatch(new HB({detail:n})),n}enterInto({fallbackToActivate:r}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Be.Enter,reason:"NavController is locked."};const t=_B(this.getNavTree(),this.currentNavEntry);return!t.success&&r?this.activate():(this.dispatch(new KB({detail:t})),t)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Be.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Be.Activate,reason:"No focused NavEntry to activate."};const r=this.currentNavEntry.entry.activate(!0);return Er.isDefined(r,"Cannot activate a group."),r}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Be.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Be.Activate&&this.currentNavEntry.entry.focus(!0);const r=qB(this.getNavTree(),this.currentNavEntry);return this.dispatch(new VB({detail:r})),r}navigatePibling({allowWrapping:r,direction:t}){if(this.locked)return{success:!1,direction:t,navAction:Be.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),a={...this.currentNavEntry?BB(this.currentNavEntry,t,r):zy(n,void 0,t,r),navAction:Be.Pibling};return this.dispatch(new GB({detail:a})),a}buildNavTree(){const r=ZN(this.rootElement),t=ZB(r);return this.cachedNavTree=t,t}}function qy({open:e,callback:r,popUpManager:t,host:n,options:o}){if(e){const a=t.showPopUp(n,o);r?.(a)}else t.removePopUp(),r?.(void 0)}i(qy,"triggerPopUpState$1");function cm(e){return Vt(e,(r,t)=>m`
                <${ui.assign({...r})}
                    ${L("click",async n=>{if(r.disabled){n.stopImmediatePropagation(),n.preventDefault();return}await r.onClick?.({event:n,index:t})})}
                >
                    ${r.content}
                </${ui}>
            `,(r,t)=>!t.hidden)}i(cm,"renderMenuItemEntries");const oc=globalThis.document;class JB extends t${static{i(this,"PageActiveObservable")}constructor(){if(super({defaultValue:!!oc?.hidden,equalityCheck:M.strictEquals}),!oc)return;globalThis.addEventListener("visibilitychange",t=>this.updateVisibility(t,oc));const r=i(t=>this.updateVisibility(t,oc),"visibilityHandler");globalThis.onpageshow=r,globalThis.onpagehide=r,globalThis.onfocus=r,globalThis.onblur=r}updateVisibility(r,t){const n=QB.includes(r.type),o=XB.includes(r.type),a=n?!0:o?!1:t.hasFocus()||!t.hidden;this.setValue(a)}}const XB=["blur","focusout","pagehide"],QB=["focus","focusin","pageshow"],eO=new JB;function N$(e,r){return eO.listen(e,r)}i(N$,"listenToPageActivation");function eh(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}i(eh,"isInputLikeElement$1");const Vy={top:0,left:0,right:0,bottom:0};let B$=class extends xd("hide-pop-up"){static{i(this,"HidePopUpEvent")}},O$=class extends Ht()("nav-select"){static{i(this,"NavSelectEvent")}},rO=class{static{i(this,"PopUpManager")}constructor(r,t){this.navController=r,this.options={...this.options,...t}}listenTarget=new mu;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[N$(!1,r=>{r||this.removePopUp()}),this.navController.listen(um,r=>{const t=r.composedPath()[0];t instanceof Element&&eh(t)||r.detail.success&&(this.listenTarget.dispatch(new O$({detail:r.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),r.stopImmediatePropagation(),r.preventDefault())}),Ll("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Ll("keydown",r=>{const t=r.code;if(t==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=r.composedPath()[0];if(n instanceof Element&&eh(n))return;t==="ArrowDown"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:qt.Down,allowWrapping:!1})):t==="ArrowUp"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:qt.Up,allowWrapping:!1})):t==="ArrowLeft"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:qt.Left,allowWrapping:!1})):t==="ArrowRight"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:qt.Right,allowWrapping:!1})):(t==="Enter"||t==="Return"||t==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(r.stopImmediatePropagation(),r.preventDefault())}})]}listen(r,t,n){return this.listenTarget.listen(r,t,n)}removePopUp(){this.cleanupCallbacks.forEach(r=>r()),this.listenTarget.dispatch(new B$)}showPopUp(r,t){this.lastRootElement=r;const n={...this.options,...t},o=m$(r);Er.instanceOf(o,HTMLElement);const a=r.getBoundingClientRect(),s=o.getBoundingClientRect(),l=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,f=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-l,bottom:s.bottom-u},g=qe(Vy,v=>a[v]),h=qe(Vy,v=>{const $=f[v],C=g[v];return Math.abs($-C)}),p=h.top>h.bottom+n.verticalDiffThreshold&&h.bottom<n.minDownSpace,b=h.left>h.right+n.horizontalDiffThreshold&&h.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!p,popRight:!b,positions:{container:f,root:g,diff:h}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}};var Yi=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(Yi||{});const me=gr()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new rO(new I$(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-disabled"),"vira-pop-up-trigger-inside-focus":i(({inputs:e})=>!!e.useInsideFocus,"vira-pop-up-trigger-inside-focus"),"vira-pop-up-trigger-outside-focus":i(({inputs:e})=>!e.useInsideFocus,"vira-pop-up-trigger-outside-focus")},styles:i(({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${qr};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;
        }

        ${e["vira-pop-up-trigger-inside-focus"].selector} .dropdown-wrapper {
            ${ua({renderInside:!0})}
        }
        ${e["vira-pop-up-trigger-outside-focus"].selector} .dropdown-wrapper {
            ${ua()}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${Ro};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${ys}
            pointer-events: auto;
        }

        ${e["vira-pop-up-trigger-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            align-items: flex-start;

            /* highest possible z-index */
            z-index: 2147483647;

            & > * {
                pointer-events: auto;
                max-width: 100%;
            }

            &.right-aligned {
                align-items: flex-end;
            }
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
        }
    `,"styles"),events:{navSelect:Pe(),openChange:Pe(),init:Pe()},cleanup({state:e,updateState:r}){r({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:r,host:t,inputs:n,dispatch:o,events:a}){e.popUpManager.listen(B$,()=>{if(r({showPopUpResult:void 0}),o(new a.openChange(void 0)),n.focusOnClose&&!n.isDisabled){const s=t.shadowRoot.querySelector(".dropdown-wrapper");Er.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(O$,s=>{n.keepOpenAfterInteraction||qy({open:!1,callback(l){r({showPopUpResult:l})},host:t,popUpManager:e.popUpManager}),o(new a.navSelect(s.detail))}),o(new a.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:r,state:t,inputs:n,updateState:o,host:a,slotNames:s}){function l({emitEvent:v,open:$},C){if(t.showPopUpResult&&n.keepOpenAfterInteraction&&C){const E=a.shadowRoot.querySelector(".dropdown-trigger");if(E&&!C.composedPath().includes(E))return}qy({open:$,callback(E){o({showPopUpResult:E}),v&&e(new r.openChange(E))},host:a,popUpManager:t.popUpManager})}i(l,"triggerPopUp"),n.isDisabled?l({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&t.showPopUpResult?l({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!t.showPopUpResult&&l({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?t.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,f=u==="right"&&t.showPopUpResult?n.ignoreMaxWidth?k`
                          left: unset;
                      `:k`
                          left: -${t.showPopUpResult.positions.diff.left}px;
                      `:k`
                      left: ${n.popUpOffset?.left||0}px;
                  `,g=t.showPopUpResult&&u==="left"?n.ignoreMaxWidth?k`
                          right: unset;
                      `:k`
                          right: -${t.showPopUpResult.positions.diff.right}px;
                      `:k`
                      right: ${n.popUpOffset?.right||0}px;
                  `,h=k`
            ${f}
            ${g}
        `,p=t.showPopUpResult?t.showPopUpResult.popDown?n.ignoreMaxHeight?k`
                          bottom: unset;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${h}
                      `:k`
                          bottom: -${t.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${h}
                      `:n.ignoreMaxHeight?k`
                        top: unset;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${h}
                    `:k`
                        top: -${t.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${h}
                    `:void 0;function b(v){l({emitEvent:!0,open:!t.showPopUpResult},v)}return i(b,"respondToClick"),m`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Gr({open:!!t.showPopUpResult,"open-upwards":!t.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!t.showPopUpResult}
                ${L("keydown",v=>{!t.showPopUpResult&&v.code.startsWith("Arrow")&&l({emitEvent:!0,open:!0},v)})}
                ${L("click",v=>{if(v.detail===0){let $=!1;if(b$(({element:C})=>eh(C)?($=!0,!0):!1),$)return;b(v)}else if(v.button===0&&t.showPopUpResult){const $=a.shadowRoot.querySelector(".dropdown-trigger");$&&!v.composedPath().includes($)&&l({emitEvent:!0,open:!1},v)}})}
                ${L("mousedown",v=>{if(v.button!==0)return;const $=ur.instanceOf(a.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);v.composedPath().includes($)&&b(v)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${Gr({"right-aligned":u==="right"})}"
                    style=${p}
                >
                    ${Wr(!!t.showPopUpResult,m`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),ni=gr()({tagName:"vira-menu-trigger",slotNames:["trigger"],styles:k`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${me} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{openChange:Pe()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:r,updateState:t,dispatch:n,events:o,slotNames:a}){return m`
            <${me.assign({...e})}
                class=${Gr({open:!!r.showPopUpResult})}
                ${L(me.events.init,s=>{t({navController:s.detail.navController,popUpManager:s.detail.popUpManager})})}
                ${L(me.events.openChange,s=>{!!r.showPopUpResult!=!!s.detail&&n(new o.openChange(s.detail)),t({showPopUpResult:s.detail})})}
            >
                <slot name=${a.trigger} slot=${me.slotNames.trigger}></slot>
                ${r.navController&&r.showPopUpResult?m`
                          <${Zi.assign({direction:r.showPopUpResult.popDown?Xl.Downwards:Xl.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${me.slotNames.popUp}
                              class=${Gr({"full-width-menu":e.horizontalAnchor===Yi.Both})}
                          >
                              <slot></slot>
                          </${Zi}>
                      `:ee}
            </${me}>
        `}}),kr=gr()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":i(({inputs:e})=>e.bold,"vira-bold-bold")},styles:i(({hostClasses:e,cssVars:r})=>k`
        span {
            text-decoration: inherit;
            white-space: inherit;
        }

        .bold-wrapper {
            position: relative;
        }

        .everything-wrapper {
            width: 100%;
        }

        .bold {
            font-weight: ${r["vira-bold-bold-weight"].value};
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }

        .normal {
            position: absolute;
            top: 0;
            left: 0;
        }

        ${e["vira-bold-bold"].selector} .normal {
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }
        ${e["vira-bold-bold"].selector} .bold {
            visibility: visible;
            pointer-events: unset;
            z-index: unset;
        }
    `,"styles"),render({inputs:e}){return m`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}}),dm=re({name:"Check16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),fm=re({name:"ChevronDown16Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${y["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M4 5.5 L8 10 12 5.5"
            />
        </svg>
    `}),Tu=re({name:"ChevronUp16Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${y["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M4 10 L8 6 12 10"
            />
        </svg>
    `}),R$=re({name:"Dash16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 8h8"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="round"
            />
        </svg>
    `}),gm=re({name:"Element16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),td=re({name:"Upload16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M3 9v4h10v-4"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8 9V2m3 3-3-3-3 3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `}),hm=re({name:"X16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),L$=re({name:"ArrowDown24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M12 5v14m0 0-7-7m7 7 7-7"
                style="fill-rule:nonzero"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),j$=re({name:"ArrowLeft24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M19 12H5m0 0 7-7m-7 7 7 7"
                style="fill-rule:nonzero"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),U$=re({name:"ArrowRight24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M5 12h14m0 0-7-7m7 7-7 7"
                style="fill-rule:nonzero"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),_$=re({name:"ArrowUp24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M12 19V5m0 0-7 7m7-7 7 7"
                style="fill-rule:nonzero"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),z$=re({name:"AutoTheme24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 4c4.39 0 8 3.61 8 8s-3.61 8-8 8z"
                fill=${y["vira-icon-stroke-color"].value}
                stroke="none"
                style="fill-rule:nonzero"
            />
            <path
                d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 0v16"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),pm=re({name:"Bell24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M11.3 4c-2.7 0-5 3.5-5 6.4v3.3q0 1.2-.7 2.2l-1 1.1h14.8l-1-1.1q-.7-1-.8-2.2v-3.3c0-3-2.3-6.4-5-6.4zM10 17v1q.2 1.8 2 2a2 2 0 0 0 2-2v-1"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),mm=re({name:"Chat24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),q$=re({name:"ChevronDown24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${y["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),V$=re({name:"ChevronUp24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${y["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),bm=re({name:"CloseX24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),W$=re({name:"Commit24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),K$=re({name:"Copy24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M16 6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke="none"
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),H$=re({name:"Document24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),G$=re({name:"DocumentSearch24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:100"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill-rule="nonzero"
            stroke-linecap="butt"
            stroke-linejoin="round"
            stroke-miterlimit="2"
        >
            <path
                d="m19 9-6-6H5v18h14z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Z$=re({name:"DoubleChevron24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:miter;stroke-miterlimit:2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M16.5 8.5 12 4 7.5 8.5v7L12 20l4.5-4.5z"
                fill-rule="nonzero"
                fill=${y["vira-icon-fill-color"].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),dr=re({name:"Element24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Y$=re({name:"ExternalLink24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M11 7H6a2 2 0 0 0-2 2v9q.2 1.8 2 2h9a2 2 0 0 0 2-2v-5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),vm=re({name:"EyeClosed24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${y["vira-icon-fill-color"].value}
            stroke=${y["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),ym=re({name:"EyeOpen24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${y["vira-icon-fill-color"].value}
            stroke=${y["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),J$=re({name:"Filter24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M4 6h16l-6 12h-4z"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="0"
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),X$=re({name:"Globe24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="M21 12c0 5-4 9-9 9m9-9c0-5-4-9-9-9m9 9H3m9 9c-5 0-9-4-9-9m9 9q3.5-3.9 3.6-9 0-5.1-3.6-9m0 18a14 14 0 0 1-3.6-9q0-5.1 3.6-9m-9 9c0-5 4-9 9-9"
                style="fill-rule:nonzero;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Q$=re({name:"Link24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M11.6 14.4a4 4 0 0 1-1.5-6.6l4.2-4.2A4 4 0 0 1 20 9.3l-3 2.9"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M11.6 14.4a4 4 0 0 1-1.5-6.6l4.2-4.2A4 4 0 0 1 20 9.3l-3 2.9"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),wm=re({name:"Loader24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),tO=k`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${js["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,bi=re({name:"LoaderAnimated24Icon",svgTemplate:m`
        <style>
            ${tO}
        </style>
        ${wm.svgTemplate}
    `}),ex=re({name:"Lock24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M19 11c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v9c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-9Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),rx=re({name:"MagnifyingGlass24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round"
            viewBox="0 0 24 24"
        >
            <path
                d="m20 20-4.9-4.9M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Z"
                style="fill-rule:nonzero"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),tx=re({name:"Moon24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke=${y["vira-icon-stroke-color"].value}
            stroke-width=${y["vira-icon-stroke-width"].value}
            fill=${y["vira-icon-fill-color"].value}
            stroke-linejoin="round"
        >
            <path d="M18.6 17.72A8 8 0 1 1 15 4.26a8 8 0 0 0 3.6 13.46Z" />
        </svg>
    `}),gf=re({name:"Options24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),nx=re({name:"Pencil24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),ox=re({name:"Plus24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ix=re({name:"Printer24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M7 9V4h10v5M7 17H5.6C4.7 17 4 16 4 15.2v-4.6Q4.1 9.1 5.6 9h12.8q1.5.1 1.6 1.6v4.6c0 .9-.7 1.8-1.6 1.8H17M7 14h10v6H7z"
                style="fill-rule:nonzero"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ax=re({name:"Shield24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),sx=re({name:"SortAscending24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                fill=${y["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),lx=re({name:"SortDescending24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                fill=${y["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),ux=re({name:"Sparkle24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
            viewBox="0 0 24 24"
        >
            <path
                d="m18.46 8.14-.73-1.62a.5.5 0 0 0-.23-.23l-1.6-.73 1.61-.72q.15-.08.23-.23L18.47 3l.72 1.62q.08.15.23.23l1.6.72-1.6.73a.5.5 0 0 0-.23.23zm0 7.72.73 1.62q.08.16.23.23l1.6.73-1.6.72a.5.5 0 0 0-.24.23L18.46 21l-.73-1.61a.5.5 0 0 0-.23-.24l-1.6-.72 1.6-.73q.16-.06.23-.23zm-7.3-5.97q.06.15.22.23l3.21 1.46a.46.46 0 0 1 0 .84l-3.21 1.46a.5.5 0 0 0-.23.23L9.7 17.32a.5.5 0 0 1-.42.27.5.5 0 0 1-.42-.27L7.4 14.11a.5.5 0 0 0-.23-.23l-3.21-1.46a.46.46 0 0 1 0-.84l3.21-1.46q.16-.08.23-.23l1.46-3.21a.5.5 0 0 1 .42-.27q.29 0 .42.27z"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),cx=re({name:"SpeakerLoud24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),dx=re({name:"SpeakerMedium24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),fx=re({name:"SpeakerMuted24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),gx=re({name:"SpeakerQuiet24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),ws=re({name:"Star24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),eu=re({name:"StatusFailure24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),hx=re({name:"StatusInProgress24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),Wa=re({name:"StatusSuccess24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),px=re({name:"StatusUnknown24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),mx=re({name:"StatusWarning24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),bx=re({name:"Sun24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style="fill-rule:nonzero;stroke:#000;stroke-width:1px;stroke-linecap:round;clip-rule:evenodd;"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),nd=re({name:"Upload24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M4 14v6h16v-6"
                style="fill-rule:nonzero;"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),km=re({name:"X24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function Xt(e,r){const t=Ke(r).map(o=>{if(r[o])return`${y[o].name}: ${String(r[o])};`}).filter(M.isTruthy).join(" "),n=k`
        ${Re(t)}
        display: inline-flex;
        vertical-align: middle;
    `;return re({name:e.name,svgTemplate:m`
            <div style=${n}>${e.svgTemplate}</div>
        `})}i(Xt,"createColoredIcon");async function nO(){const e=await Ol(()=>import("./feather-xHQv1Yf1.js").then(t=>t.f),[]);function r(t){if(M.isObject(t)){if(M.hasKey(t,"default"))return r(t.default);if(M.hasKey(t,"icons"))return t}}return i(r,"recurseImport"),r(e)||globalThis.feather}i(nO,"importFeatherIcons");const ml=await nO(),Wy={fill:String(y["vira-icon-fill-color"].value),stroke:String(y["vira-icon-stroke-color"].value),"stroke-width":String(y["vira-icon-stroke-width"].value)};function oO(e){const r=ml.icons[e],t=i(n=>({name:r.name,svgTemplate:m`
                ${yy(r.toSvg({...Wy,...n}))}
            `}),"configureIconCallback");return Object.defineProperty(t,"name",{value:r.name,writable:!1,configurable:!0}),Object.assign(t,{svgTemplate:m`
            ${yy(r.toSvg(Wy))}
        `})}i(oO,"createFeatherIconEntry");const Ky=new Map,bl=new Proxy({},{get(e,r){const t=r;if(!(t in ml.icons))return;const n=Ky.get(t);if(n)return n;const o=oO(t);return Ky.set(t,o),o},has(e,r){return r in ml.icons},ownKeys(){return Object.keys(ml.icons)},getOwnPropertyDescriptor(e,r){if(r in ml.icons)return{configurable:!0,enumerable:!0,writable:!1}}});function rh(e,r){return{...e,size:r}}i(rh,"createSizedIcon");const Hy={ArrowDown24Icon:L$,ArrowLeft24Icon:j$,ArrowRight24Icon:U$,ArrowUp24Icon:_$,AutoTheme24Icon:z$,Bell24Icon:pm,Chat24Icon:mm,Check16Icon:dm,Check24Icon:lf,ChevronDown16Icon:fm,ChevronDown24Icon:q$,ChevronUp16Icon:Tu,ChevronUp24Icon:V$,CloseX24Icon:bm,Commit24Icon:W$,Copy24Icon:K$,Dash16Icon:R$,Document24Icon:H$,DocumentSearch24Icon:G$,DoubleChevron24Icon:Z$,Element16Icon:gm,Element24Icon:dr,ExternalLink24Icon:Y$,EyeClosed24Icon:vm,EyeOpen24Icon:ym,Filter24Icon:J$,Globe24Icon:X$,Link24Icon:Q$,Loader24Icon:wm,LoaderAnimated24Icon:bi,Lock24Icon:ex,MagnifyingGlass24Icon:rx,Moon24Icon:tx,Options24Icon:gf,Pencil24Icon:nx,Plus24Icon:ox,Printer24Icon:ix,Shield24Icon:ax,SortAscending24Icon:sx,SortDescending24Icon:lx,Sparkle24Icon:ux,SpeakerLoud24Icon:cx,SpeakerMedium24Icon:dx,SpeakerMuted24Icon:fx,SpeakerQuiet24Icon:gx,Star24Icon:ws,StatusFailure24Icon:eu,StatusInProgress24Icon:hx,StatusSuccess24Icon:Wa,StatusUnknown24Icon:px,StatusWarning24Icon:mx,Sun24Icon:bx,Upload16Icon:td,Upload24Icon:nd,X16Icon:hm,X24Icon:km},iO={ArrowDown24Icon:L$,ArrowLeft24Icon:j$,ArrowRight24Icon:U$,ArrowUp24Icon:_$,AutoTheme24Icon:z$,Bell24Icon:pm,Chat24Icon:mm,Check24Icon:lf,ChevronDown24Icon:q$,ChevronUp24Icon:V$,CloseX24Icon:bm,Commit24Icon:W$,Copy24Icon:K$,Document24Icon:H$,DocumentSearch24Icon:G$,DoubleChevron24Icon:Z$,Element24Icon:dr,ExternalLink24Icon:Y$,EyeClosed24Icon:vm,EyeOpen24Icon:ym,Filter24Icon:J$,Globe24Icon:X$,Link24Icon:Q$,Loader24Icon:wm,LoaderAnimated24Icon:bi,Lock24Icon:ex,MagnifyingGlass24Icon:rx,Moon24Icon:tx,Options24Icon:gf,Pencil24Icon:nx,Plus24Icon:ox,Printer24Icon:ix,Shield24Icon:ax,SortAscending24Icon:sx,SortDescending24Icon:lx,Sparkle24Icon:ux,SpeakerLoud24Icon:cx,SpeakerMedium24Icon:dx,SpeakerMuted24Icon:fx,SpeakerQuiet24Icon:gx,Star24Icon:ws,StatusFailure24Icon:eu,StatusInProgress24Icon:hx,StatusSuccess24Icon:Wa,StatusUnknown24Icon:px,StatusWarning24Icon:mx,Sun24Icon:bx,Upload24Icon:nd,X24Icon:km},aO={Check16Icon:dm,ChevronDown16Icon:fm,ChevronUp16Icon:Tu,Dash16Icon:R$,Element16Icon:gm,Upload16Icon:td,X16Icon:hm},yn={value:k`transparent`},sO={[te.Plain]:{[lr.Standard]:{idle:{backgroundColor:S.inverse[Ye].background,textColor:S.inverse[Ye].foreground,borderColor:S.inverse[Ye].background},hover:{backgroundColor:S.colors["vira-grey-behind-bg-non-body"].background,textColor:S.colors["vira-grey-behind-bg-non-body"].foreground,borderColor:S.inverse[Ye].background},active:{backgroundColor:S.colors["vira-grey-behind-bg-body"].background,textColor:S.colors["vira-grey-behind-bg-body"].foreground,borderColor:S.inverse[Ye].background}},[lr.Subtle]:{idle:{backgroundColor:yn,textColor:S.colors[Ye].foreground,borderColor:yn},hover:{backgroundColor:S.colors["vira-grey-on-self-body"].background,textColor:S.colors["vira-grey-on-self-body"].foreground,borderColor:S.colors["vira-grey-on-self-body"].foreground},active:{backgroundColor:S.colors["vira-grey-on-self-non-body"].background,textColor:S.colors["vira-grey-on-self-non-body"].foreground,borderColor:S.colors["vira-grey-on-self-non-body"].foreground}}},[te.Accent]:{[lr.Standard]:{idle:{backgroundColor:S.colors["vira-accent-behind-bg-non-body"].background,textColor:S.colors["vira-accent-behind-bg-non-body"].foreground,borderColor:S.colors["vira-accent-behind-bg-body"].background},hover:{backgroundColor:S.colors["vira-accent-behind-bg-header"].background,textColor:S.colors["vira-accent-behind-bg-header"].foreground,borderColor:S.colors["vira-accent-behind-bg-body"].background},active:{backgroundColor:S.colors["vira-accent-behind-bg-body"].background,textColor:S.colors["vira-accent-behind-bg-body"].foreground,borderColor:S.colors["vira-accent-behind-bg-body"].background}},[lr.Subtle]:{idle:{backgroundColor:yn,textColor:S.colors["vira-accent-foreground-non-body"].foreground,borderColor:yn},hover:{backgroundColor:S.colors["vira-accent-on-self-body"].background,textColor:S.colors["vira-accent-on-self-body"].foreground,borderColor:S.colors["vira-accent-on-self-body"].foreground},active:{backgroundColor:S.colors["vira-accent-on-self-non-body"].background,textColor:S.colors["vira-accent-on-self-non-body"].foreground,borderColor:S.colors["vira-accent-on-self-non-body"].foreground}}},[te.Neutral]:{[lr.Standard]:{idle:{backgroundColor:S.colors[Ye].background,textColor:S.colors[Ye].foreground,borderColor:R["vira-form-border-color"]},hover:{backgroundColor:S.colors["vira-grey-behind-fg-small-body"].background,textColor:S.colors["vira-grey-behind-fg-small-body"].foreground,borderColor:R["vira-form-border-color"]},active:{backgroundColor:S.colors["vira-grey-behind-fg-body"].background,textColor:S.colors["vira-grey-behind-fg-body"].foreground,borderColor:R["vira-form-border-color"]}},[lr.Subtle]:{idle:{backgroundColor:yn,textColor:S.colors["vira-grey-foreground-non-body"].foreground,borderColor:yn},hover:{backgroundColor:S.colors["vira-grey-on-self-body"].background,textColor:S.colors["vira-grey-on-self-body"].foreground,borderColor:S.colors["vira-grey-on-self-body"].foreground},active:{backgroundColor:S.colors["vira-grey-on-self-non-body"].background,textColor:S.colors["vira-grey-on-self-non-body"].foreground,borderColor:S.colors["vira-grey-on-self-non-body"].foreground}}},[te.Danger]:{[lr.Standard]:{idle:{backgroundColor:S.colors["vira-red-behind-bg-non-body"].background,textColor:S.colors["vira-red-behind-bg-non-body"].foreground,borderColor:S.colors["vira-red-behind-bg-body"].background},hover:{backgroundColor:S.colors["vira-red-behind-bg-header"].background,textColor:S.colors["vira-red-behind-bg-header"].foreground,borderColor:S.colors["vira-red-behind-bg-body"].background},active:{backgroundColor:S.colors["vira-red-behind-bg-body"].background,textColor:S.colors["vira-red-behind-bg-body"].foreground,borderColor:S.colors["vira-red-behind-bg-body"].background}},[lr.Subtle]:{idle:{backgroundColor:yn,textColor:S.colors["vira-red-foreground-non-body"].foreground,borderColor:yn},hover:{backgroundColor:S.colors["vira-red-on-self-body"].background,textColor:S.colors["vira-red-on-self-body"].foreground,borderColor:S.colors["vira-red-on-self-body"].foreground},active:{backgroundColor:S.colors["vira-red-on-self-non-body"].background,textColor:S.colors["vira-red-on-self-non-body"].foreground,borderColor:S.colors["vira-red-on-self-non-body"].foreground}}},[te.Warning]:{[lr.Standard]:{idle:{backgroundColor:S.colors["vira-yellow-behind-bg-non-body"].background,textColor:S.colors["vira-yellow-behind-bg-non-body"].foreground,borderColor:S.colors["vira-yellow-behind-bg-body"].background},hover:{backgroundColor:S.colors["vira-yellow-behind-bg-header"].background,textColor:S.colors["vira-yellow-behind-bg-header"].foreground,borderColor:S.colors["vira-yellow-behind-bg-body"].background},active:{backgroundColor:S.colors["vira-yellow-behind-bg-body"].background,textColor:S.colors["vira-yellow-behind-bg-body"].foreground,borderColor:S.colors["vira-yellow-behind-bg-body"].background}},[lr.Subtle]:{idle:{backgroundColor:yn,textColor:S.colors["vira-yellow-foreground-non-body"].foreground,borderColor:yn},hover:{backgroundColor:S.colors["vira-yellow-on-self-body"].background,textColor:S.colors["vira-yellow-on-self-body"].foreground,borderColor:S.colors["vira-yellow-on-self-body"].foreground},active:{backgroundColor:S.colors["vira-yellow-on-self-non-body"].background,textColor:S.colors["vira-yellow-on-self-non-body"].foreground,borderColor:S.colors["vira-yellow-on-self-non-body"].foreground}}},[te.Positive]:{[lr.Standard]:{idle:{backgroundColor:S.colors["vira-green-behind-bg-non-body"].background,textColor:S.colors["vira-green-behind-bg-non-body"].foreground,borderColor:S.colors["vira-green-behind-bg-body"].background},hover:{backgroundColor:S.colors["vira-green-behind-bg-header"].background,textColor:S.colors["vira-green-behind-bg-header"].foreground,borderColor:S.colors["vira-green-behind-bg-body"].background},active:{backgroundColor:S.colors["vira-green-behind-bg-body"].background,textColor:S.colors["vira-green-behind-bg-body"].foreground,borderColor:S.colors["vira-green-behind-bg-body"].background}},[lr.Subtle]:{idle:{backgroundColor:yn,textColor:S.colors["vira-green-foreground-non-body"].foreground,borderColor:yn},hover:{backgroundColor:S.colors["vira-green-on-self-body"].background,textColor:S.colors["vira-green-on-self-body"].foreground,borderColor:S.colors["vira-green-on-self-body"].foreground},active:{backgroundColor:S.colors["vira-green-on-self-non-body"].background,textColor:S.colors["vira-green-on-self-non-body"].foreground,borderColor:S.colors["vira-green-on-self-non-body"].foreground}}}},ye=gr()({tagName:"vira-button",hostClasses:{"vira-button-with-menu-caret":i(({inputs:e})=>!!e.showMenuCaret,"vira-button-with-menu-caret"),"vira-button-size-large":i(({inputs:e})=>e.buttonSize===Gi.Large,"vira-button-size-large"),"vira-button-size-medium":i(({inputs:e})=>!e.buttonSize||e.buttonSize===Gi.Medium,"vira-button-size-medium"),"vira-button-size-small":i(({inputs:e})=>e.buttonSize===Gi.Small,"vira-button-size-small"),"vira-button-emphasis-standard":i(({inputs:e})=>!e.buttonEmphasis||e.buttonEmphasis===lr.Standard,"vira-button-emphasis-standard"),"vira-button-emphasis-subtle":i(({inputs:e})=>e.buttonEmphasis===lr.Subtle,"vira-button-emphasis-subtle"),"vira-button-color-accent":i(({inputs:e})=>!e.colorVariant||e.colorVariant===te.Accent,"vira-button-color-accent"),"vira-button-color-plain":i(({inputs:e})=>e.colorVariant===te.Plain,"vira-button-color-plain"),"vira-button-color-neutral":i(({inputs:e})=>e.colorVariant===te.Neutral,"vira-button-color-neutral"),"vira-button-color-danger":i(({inputs:e})=>e.colorVariant===te.Danger,"vira-button-color-danger"),"vira-button-color-warning":i(({inputs:e})=>e.colorVariant===te.Warning,"vira-button-color-warning"),"vira-button-color-positive":i(({inputs:e})=>e.colorVariant===te.Positive,"vira-button-color-positive"),"vira-button-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-button-disabled"),"vira-button-icon-only":i(({inputs:e})=>!e.text&&!!e.icon,"vira-button-icon-only")},cssVars:{"vira-button-text-color":"transparent","vira-button-background-color":"transparent","vira-button-border-color":"transparent","vira-button-hover-text-color":"transparent","vira-button-hover-background-color":"transparent","vira-button-hover-border-color":"transparent","vira-button-active-text-color":"transparent","vira-button-active-background-color":"transparent","vira-button-active-border-color":"transparent","vira-button-disabled-text-color":S.colors["vira-grey-behind-bg-decoration"].foreground.value,"vira-button-disabled-background-color":S.colors["vira-grey-behind-bg-decoration"].background.value,"vira-button-disabled-border-color":S.colors["vira-grey-behind-bg-decoration"].background.value,"vira-button-border-width":"1px","vira-button-border-radius":R["vira-form-radius"].value},styles:i(({hostClasses:e,cssVars:r})=>{function t(){const o=df.flatMap(a=>ca.map(s=>{const l=sO[s][a],u=e[`vira-button-color-${s}`].selector,f=e[`vira-button-emphasis-${a}`].selector;return k`
                        ${u}${f} {
                            ${r["vira-button-background-color"].name}: ${l.idle.backgroundColor.value};
                            ${r["vira-button-text-color"].name}: ${l.idle.textColor.value};
                            ${r["vira-button-border-color"].name}: ${l.idle.borderColor.value};

                            ${r["vira-button-hover-background-color"].name}: ${l.hover.backgroundColor.value};
                            ${r["vira-button-hover-text-color"].name}: ${l.hover.textColor.value};
                            ${r["vira-button-hover-border-color"].name}: ${l.hover.borderColor.value};

                            ${r["vira-button-active-background-color"].name}: ${l.active.backgroundColor.value};
                            ${r["vira-button-active-text-color"].name}: ${l.active.textColor.value};
                            ${r["vira-button-active-border-color"].name}: ${l.active.borderColor.value};
                        }
                    `}));return Re(o.join(`
`))}i(t,"generateVariantCss");function n(){const o=cf.map(a=>k`
                    ${e[`vira-button-size-${a}`].selector} {
                        font-size: ${R[`vira-form-${a}-text-size`].value};

                        button {
                            min-height: ${Qg[a]}px;
                            padding: 2px
                                ${R[`vira-form-${a}-text-size`].value};
                        }

                        &${e["vira-button-icon-only"].selector} {
                            min-width: ${Qg[a]}px;
                        }
                    }
                `);return Re(o.join(`
`))}return i(n,"generateSizeVariantCss"),k`
            :host {
                cursor: pointer;
                display: inline-flex;
                position: relative;
                vertical-align: middle;
                align-items: center;
                box-sizing: border-box;
                ${Ro};
                ${R["vira-form-focus-outline-color"].name}: ${R["vira-form-accent-primary-hover-color"].value}
            }

            ${n()}
            ${t()}

            button {
                ${qr};
                flex-shrink: 0;
                position: relative;
                cursor: pointer;

                width: 100%;
                height: 100%;

                border-width: ${r["vira-button-border-width"].value};
                border-style: solid;
                border-color: ${r["vira-button-border-color"].value};

                box-sizing: border-box;
                display: inline-flex;
                justify-content: center;
                align-items: center;

                border-radius: ${r["vira-button-border-radius"].value};

                background-color: ${r["vira-button-background-color"].value};
                color: ${r["vira-button-text-color"].value};

                ${ua({elementBorderSize:r["vira-button-border-width"]})}
            }

            :host(:hover) button,
            & button:hover {
                background-color: ${r["vira-button-hover-background-color"].value};
                color: ${r["vira-button-hover-text-color"].value};
                border-color: ${r["vira-button-hover-border-color"].value};
            }

            :host(:active) button,
            & button:active {
                background-color: ${r["vira-button-active-background-color"].value};
                color: ${r["vira-button-active-text-color"].value};
                border-color: ${r["vira-button-active-border-color"].value};
            }

            .empty-text {
                width: 0;
            }

            button ${B} + .text-template {
                margin-left: 8px;
            }

            ${B} {
                height: 0;
                display: flex;
                align-items: center;
            }

            .caret-icon {
                margin-left: 8px;
            }

            ${e["vira-button-with-menu-caret"].selector} {
                button {
                    padding-right: 6px;
                }
            }

            ${e["vira-button-disabled"].selector} {
                cursor: not-allowed;

                & button {
                    pointer-events: none;
                    color: ${r["vira-button-disabled-text-color"].value};
                    background-color: ${r["vira-button-disabled-background-color"].value};
                    border-color: ${r["vira-button-disabled-border-color"].value};
                }
            }

            ${e["vira-button-icon-only"].selector} {
                button {
                    padding: 0;
                }
            }
        `},"styles"),render:i(({inputs:e})=>{const r=e.icon?m`
                  <${B.assign({icon:e.icon})}></${B}>
              `:ee,t=e.text?m`
                  <span class="text-template">${e.text}</span>
              `:m`
                  <span class="empty-text">&nbsp;</span>
              `,n=e.showMenuCaret?m`
                  <${B.assign({icon:fm})}
                      class="caret-icon"
                  ></${B}>
              `:ee;return m`
            <button ?disabled=${e.isDisabled}>
                ${r}${t}${n}
            </button>
        `},"render")});var th=(e=>(e.Error="error",e.Success="success",e))(th||{});const k0=gr()({tagName:"vira-card",hostClasses:{"vira-card-error":i(({inputs:e})=>e.cardState==="error","vira-card-error"),"vira-card-success":i(({inputs:e})=>e.cardState==="success","vira-card-success")},cssVars:{"vira-card-border":k`1px solid ${R["vira-form-border-color"].value}`,"vira-card-padding":R["vira-form-wrapper-radius"].value},styles:i(({hostClasses:e,cssVars:r})=>k`
        :host {
            display: block;
            border: ${r["vira-card-border"].value};
            border-radius: ${R["vira-form-wrapper-radius"].value};
            padding: ${r["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${R["vira-form-error-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${R["vira-form-success-color"].value};
        }
    `,"styles"),render(){return m`
            <slot></slot>
        `}}),fe=gr()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":i(({inputs:e})=>!!e.horizontal,"vira-checkbox-horizontal"),"vira-checkbox-filled-checked":i(({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-checked"),"vira-checkbox-filled-unchecked":i(({inputs:e})=>!!e.fillWhenUnchecked,"vira-checkbox-filled-unchecked")},styles:i(({hostClasses:e})=>k`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${B} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            ${y["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        ${e["vira-checkbox-filled-checked"].selector} {
            & .custom-checkbox.checked {
                color: ${R["vira-form-background-color"].value};
                background-color: ${R["vira-form-accent-primary-color"].value};
            }

            label {
                &:hover .custom-checkbox.checked {
                    background-color: ${R["vira-form-accent-primary-hover-color"].value};
                }

                &:active .custom-checkbox.checked {
                    background-color: ${R["vira-form-accent-primary-active-color"].value};
                }
            }
        }
        ${e["vira-checkbox-filled-unchecked"].selector} {
            & .custom-checkbox:not(.checked) {
                color: ${R["vira-form-background-color"].value};
                background-color: ${R["vira-form-error-color"].value};
            }

            label {
                &:hover .custom-checkbox:not(.checked) {
                    background-color: ${R["vira-form-error-hover-color"].value};
                }

                &:active .custom-checkbox:not(.checked) {
                    background-color: ${R["vira-form-error-active-color"].value};
                }
            }
        }

        label {
            display: inline-flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;

            &.disabled {
                cursor: not-allowed;
            }

            & .label-text {
                cursor: pointer;
                font-weight: ${R["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${R["vira-form-selection-hover-color"].value};
            }
            &:active .custom-checkbox {
                background-color: ${R["vira-form-selection-active-color"].value};
            }
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${R["vira-form-border-color"].value};
            color: ${R["vira-form-foreground-color"].value};
            border-radius: ${R["vira-form-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${ua({elementBorderSize:"1px"})}

            &.checked {
                & ${B} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${R["vira-form-error-color"].value};
            }

            &.disabled {
                ${ys};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,"styles"),events:{valueChange:Pe()},render({inputs:e,dispatch:r,events:t}){function n(){e.disabled||r(new t.valueChange(!e.value))}i(n,"updateValue");const o=e.label?m`
                  <span
                      class="label-text"
                      ${Cn(e.attributePassthrough?.text)}
                      style=${Ue(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:ee;return m`
            <label
                class=${Gr({disabled:!!e.disabled})}
                ${Cn(e.attributePassthrough?.label)}
                style=${Ue(e.stylePassthrough?.label)}
                ${L("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${Gr({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${Ue(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${Cn(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Ue(e.stylePassthrough?.["custom-checkbox"])}
                    ${IN(n)}
                >
                    <${B.assign({icon:lf,fitContainer:!0})}
                        ${Cn(e.attributePassthrough?.[B.tagName])}
                        style=${Ue(e.stylePassthrough?.[B.tagName])}
                    ></${B}>
                </span>
            </label>
        `}}),yt=gr()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":i(({inputs:e})=>!!e.expandOnPrint,"vira-collapsible-wrapper-expand-on-print")},slotNames:["header"],styles:i(({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            box-sizing: border-box;
        }

        .header-wrapper {
            ${qr};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${js["vira-pretty-animation-duration"].value};
            overflow: hidden;

            &.collapsed {
                ${Ro}
            }
        }

        @media print {
            :host(.${e["vira-collapsible-wrapper-expand-on-print"].name})
                .collapsing-element {
                height: auto !important;
                overflow: visible !important;
                transition: none !important;
            }
        }
    `,"styles"),events:{expandChange:Pe()},render({state:e,slotNames:r,updateState:t,dispatch:n,events:o,inputs:a}){const s=a.expanded?k`
                  height: ${e.contentHeight}px;
              `:k`
                  height: 0;
              `;return m`
            <button
                class="header-wrapper"
                ${L("click",()=>{n(new o.expandChange(!a.expanded))})}
            >
                <slot name=${r.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${Gr({collapsed:!a.expanded})}"
                style=${s}
                disabled="disabled"
            >
                <div
                    ${em(({contentRect:l})=>{t({contentHeight:l.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Xr=gr()({tagName:"vira-collapsible-card",testIds:["openCaret"],events:{expandToggle:Pe()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":i(({state:e})=>e.isExpanded,"vira-collapsible-card-expanded"),"vira-collapsible-card-expansion-blocked":i(({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-expansion-blocked"),"vira-collapsible-card-card-styles":i(({inputs:e})=>!e.rawCollapsible,"vira-collapsible-card-card-styles")},cssVars:{"vira-collapsible-card-content-gap":"16px"},styles:i(({hostClasses:e,cssVars:r})=>k`
        :host {
            display: inline-flex;
            max-width: 100%;
            box-sizing: border-box;
        }

        ${e["vira-collapsible-card-expanded"].selector} .open-caret {
            transform: rotate(180deg);
        }

        ${yt} {
            flex-grow: 1;
            max-width: 100%;
        }

        ${e["vira-collapsible-card-card-styles"].selector} {
            & ${yt} {
                border: 1px solid ${R["vira-form-border-color"].value};
                border-radius: ${R["vira-form-wrapper-radius"].value};
            }

            & .card-header {
                padding: 8px 16px;
            }

            & .card-content {
                padding: 8px 16px 8px 16px;
            }
        }

        ${e["vira-collapsible-card-expansion-blocked"].selector} {
            & .header-wrapper {
                cursor: default;
            }
        }

        .card-header {
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;

            & .header-filler {
                flex-grow: 1;
            }
        }

        .card-content {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: ${r["vira-collapsible-card-content-gap"].value};
            overflow-x: auto;
            overflow-y: hidden;
        }

        @media print {
            ${yt} {
                border: none !important;
            }

            .card-header {
                padding: 8px 0 !important;
            }

            .card-content {
                overflow: visible !important;
                padding: 8px 0 16px 0 !important;
            }

            .open-caret {
                display: none;
            }
        }
    `,"styles"),slotNames:["header"],render({inputs:e,slotNames:r,state:t,updateState:n,testIds:o,dispatch:a,events:s}){e.blockExpansion&&n({isExpanded:!0});const l=t.isExpanded||e.expandOnPrint?m`
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  `:ee,u=e.hideHeader?ee:m`
                  <div class="card-header">
                      <slot name=${r.header}><div class="header-filler"></div></slot>

                      ${e.blockExpansion?ee:m`
                                <${B.assign({icon:Tu,fitContainer:!0})}
                                    ${ti(o.openCaret)}
                                    class="open-caret"
                                ></${B}>
                            `}
                  </div>
              `;return m`
            <${yt.assign({expanded:t.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${L(yt.events.expandChange,f=>{f.stopImmediatePropagation(),!e.blockExpansion&&(n({isExpanded:f.detail}),a(new s.expandToggle(f.detail)))})}
            >
                <div class="header-wrapper" slot=${yt.slotNames.header}>
                    ${u}
                </div>
                ${l}
            </${yt}>
        `}}),vl=gr()({tagName:"vira-dropdown",testIds:["leadingIcon","prefixText","trigger"],styles:k`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${me} {
            width: 100%;
        }

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            width: 24px;
            aspect-ratio: 1;
            align-self: flex-start;
            will-change: transform;
            transform: rotate(180deg);
            transition: transform
                ${js["vira-interaction-animation-duration"].value} linear;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .open {
            & .trigger-icon {
                transform: rotate(0);
            }

            &:not(.open-upwards).dropdown-trigger {
                border-bottom-left-radius: 0;
            }

            &.open-upwards.dropdown-trigger {
                border-top-left-radius: 0;
            }
        }

        .dropdown-trigger {
            ${Ro};
            border: 1px solid ${R["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${R["vira-form-radius"].value};
            background-color: ${R["vira-form-background-color"].value};
            color: ${R["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:Pe(),openChange:Pe()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:r,dispatch:t,events:n,updateState:o,testIds:a}){const s=Vt(r.selected,p=>r.options.find(b=>b.value===p),M.isTruthy),l=r.icon?m`
                  <${B.assign({icon:r.icon})}
                      ${ti(a.leadingIcon)}
                  ></${B}>
              `:ee,u=!s.length,f=r.selectionPrefix&&!u?m`
                      <span class="selected-label-prefix" ${ti(a.prefixText)}>
                          ${r.selectionPrefix}
                      </span>
                  `:ee,g=u?r.placeholder||"":r.isMultiSelect&&s.length>1?`${s.length} Selected`:s[0]?.label||"",h=m`
            <${Zi.assign({direction:e.showPopUpResult?.popDown?Xl.Downwards:Xl.Upwards})}
                slot=${me.slotNames.popUp}
            >
                ${cm(r.options.map(p=>({content:p.label,onClick(){t(new n.selectedChange([p.value]))},disabled:p.disabled,selected:s.includes(p)})))}
            </${Zi}>
        `;return m`
            <${me.assign({...r,focusOnClose:!0,popUpOffset:{vertical:-1,right:24},horizontalAnchor:r.horizontalAnchor||Yi.Both})}
                ${L(me.events.openChange,p=>{!!e.showPopUpResult!=!!p.detail&&t(new n.openChange(p.detail)),o({showPopUpResult:p.detail})})}
            >
                <div
                    class="dropdown-trigger ${Gr({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    slot=${me.slotNames.trigger}
                    ${ti(a.trigger)}
                >
                    ${l}
                    <span
                        class="selection-display ${Gr({"using-placeholder":u})}"
                        title=${Ue(u?void 0:g)}
                    >
                        ${f} ${g}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${B.assign({icon:Tu})}
                            class="trigger-icon"
                        ></${B}>
                    </span>
                </div>
                ${e.showPopUpResult?h:ee}
            </${me}>
        `}}),Ji=gr()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:i(({cssVars:e})=>k`
        :host {
            color: ${R["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,"styles"),render(){return m`
            <slot></slot>
        `}});var Me=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Number="number",e.Select="select",e.Checkbox="checkbox",e))(Me||{});function ic(e,r){if(e)return r?Bh({value:e,suffix:"*"}):e}i(ic,"applyRequiredLabel");function lO(e){return ns(e).every(r=>r.isHidden||!r.isRequired?!0:M.isString(r.value)?!!r.value:r.value!=null)}i(lO,"areFormFieldsValid");function nh({input:e,matcher:r}){return!e||!r?!0:e.length>1?e.split("").every(t=>nh({input:t,matcher:r})):r instanceof RegExp?!!e.match(r):r.includes(e)}i(nh,"doesMatch$1");function uO({value:e,allowed:r,blocked:t}){const n=String(e),o=r?nh({input:n,matcher:r}):!0,a=t?nh({input:n,matcher:t}):!1;return o&&!a}i(uO,"isAllowed$1");function oh(e){const r=String(e.value);if(!e.value)return{filtered:r,blocked:""};const{filtered:t,blocked:n}=r.split("").reduce((o,a)=>(uO({...e,value:a})?o.filtered.push(a):o.blocked.push(a),o),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}i(oh,"filterTextInputValue$1");function cO({inputs:e,previousValue:r,event:t,inputBlockedCallback:n,newValueCallback:o}){const a=Ea(t,HTMLInputElement),s=M.hasKey(t,"data")&&kd.isString(t.data)||"";if(s){const{blocked:u}=oh({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const l=oh({value:a.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;a.value!==l&&(a.value=l),r!==l&&o(l)}i(cO,"textInputListener$1");var Vi=(e=>(e.Default="text",e.Password="password",e.Email="email",e.Number="number",e))(Vi||{});const er=gr()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:i(({hostClasses:e,cssVars:r})=>k`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${R["vira-form-foreground-color"].value};
            }

            label {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 2px;
                width: 100%;
                max-width: 100%;
                cursor: text;

                & .input-label {
                    font-weight: ${R["vira-form-label-font-weight"].value};
                    text-align: left;
                    flex-shrink: 0;
                    flex-wrap: wrap;
                }
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${qr};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${Ro};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${qr};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${R["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${R["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${qr};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${r["vira-input-padding-horizontal"].value};
                border-radius: ${R["vira-form-radius"].value};
                background-color: ${R["vira-form-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            .left-side-icon {
                margin-right: calc(${r["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${qr};
                cursor: text;
                margin: ${r["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                text-align: inherit;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
                outline: none;

                &:focus:focus-visible:not([disabled]) ~ .focus-border {
                    ${ua({elementBorderSize:"1px",noNesting:!0})}
                }
            }

            ::selection {
                background: ${R["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${R["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${R["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Ro};
            }

            button {
                ${qr};
                cursor: pointer;
                display: flex;
                transition: color
                    ${js["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${R["vira-form-placeholder-color"].value};
            }

            .clear-x-button:hover {
                color: ${R["vira-form-error-color"].value};
            }

            .clear-x-button:active {
                color: ${R["vira-form-error-active-color"].value};
            }

            .show-password-button:hover {
                color: ${R["vira-form-accent-primary-color"].value};
            }

            .show-password-button:active {
                color: ${R["vira-form-accent-primary-active-color"].value};
            }

            ${e["vira-input-error"].selector} {
                & .wrapper-border {
                    border-color: ${R["vira-form-error-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${ys};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,"styles"),events:{valueChange:Pe(),inputBlocked:Pe()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Io(32)}},hostClasses:{"vira-input-disabled":i(({inputs:e})=>!!e.disabled,"vira-input-disabled"),"vira-input-fit-text":i(({inputs:e})=>!!e.fitText,"vira-input-fit-text"),"vira-input-clear-button-shown":i(({inputs:e})=>!!e.showClearButton,"vira-input-clear-button-shown"),"vira-input-error":i(({inputs:e})=>!!e.hasError,"vira-input-error")},render:i(({inputs:e,dispatch:r,state:t,updateState:n,events:o,host:a})=>{const{filtered:s}=oh({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),l=e.icon?m`
                  <${B.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${B}>
              `:ee,u=e.fitText?k`
                  width: ${t.forcedInputWidth}px;
              `:ee,f=L("mousedown",p=>{const b=Ea(p,HTMLElement,{useOriginalTarget:!0}),v=ur.instanceOf(a.shadowRoot.querySelector("input"),HTMLInputElement);b!==v&&(p.preventDefault(),v.focus())}),g=e.disableBrowserHelps||e.type==="password",h=m`
            <span class="input-wrapper" ${e.label?ee:f}>
                ${l}
                ${Wr(!!e.fitText,m`
                        <span
                            class="size-span"
                            ${em(({contentRect:p})=>{n({forcedInputWidth:p.width})})}
                        >
                            <pre>${s||e.placeholder||ee}</pre>
                        </span>
                    `)}

                <input
                    id=${Ue(e.label?t.randomId:void 0)}
                    aria-label=${Ue(e.label||void 0)}
                    autofocus=${!1}
                    type=${dO(e.type,t.showPassword)}
                    style=${u}
                    autocomplete=${Ue(g?"off":void 0)}
                    autocorrect=${Ue(g?"off":void 0)}
                    autocapitalize=${Ue(g?"off":void 0)}
                    spellcheck=${Ue(g?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${L("input",p=>{cO({inputs:e,previousValue:s,event:p,inputBlockedCallback(b){r(new o.inputBlocked(b))},newValueCallback(b){r(new o.valueChange(b))}})})}
                    placeholder=${Ue(e.placeholder||void 0)}
                    ${Cn(e.attributePassthrough)}
                />

                ${Wr(!!(e.showClearButton&&e.value),m`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${L("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault()})}
                            ${L("click",()=>{e.disabled||r(new o.valueChange(""))})}
                        >
                            <${B.assign({icon:bm})}></${B}>
                        </button>
                    `)}
                ${Wr(e.type==="password",m`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${L("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault()})}
                            ${L("click",()=>{n({showPassword:!t.showPassword})})}
                        >
                            <${B.assign({icon:t.showPassword?ym:vm})}></${B}>
                        </button>
                    `)}
                ${Wr(!!e.suffix,m`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?m`
                <label for=${t.randomId} ${f}>
                    <span class="input-label">${e.label}</span>
                    ${h}
                </label>
            `:h},"render")});function dO(e,r){return e==="password"&&r?"text":e||"text"}i(dO,"calculateEffectiveInputType$1");const He=gr()({tagName:"vira-select",state(){return{randomId:Io(32),cleanupListeners:void 0}},events:{valueChange:Pe()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":i(({inputs:e})=>!!e.disabled,"vira-select-disabled"),"vira-select-error":i(({inputs:e})=>!!e.hasError,"vira-select-error"),"vira-select-not-raw":i(({inputs:e})=>!e.rawSelect,"vira-select-not-raw")},styles:i(({hostClasses:e,cssVars:r})=>k`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${R["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${qr};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            cursor: pointer;

            & select {
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                color: inherit;
                font: inherit;
                outline: none;
                width: 100%;
                border: none;
                background: none;
                border-radius: inherit;
                cursor: pointer;
                /* Prevent the left pixel of text getting cut off. */
                padding-left: 0.5px;
                padding-right: 28px;
                overflow: hidden;
                text-overflow: ellipsis;

                &.placeholder {
                    color: ${R["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${r["vira-select-icon-padding"].value};
                }
            }

            & ${B} {
                position: absolute;
                pointer-events: none;

                &.trigger-icon {
                    transform: rotate(180deg);
                    right: 3px;
                }

                &.input-icon {
                    left: 10px;
                }
            }
        }

        .trigger-icon {
            width: 24px;
            aspect-ratio: 1;
        }

        ${e["vira-select-not-raw"].selector} {
            .select-wrapper {
                border-radius: ${R["vira-form-radius"].value};
                color: ${R["vira-form-foreground-color"].value};
                background-color: ${R["vira-form-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                cursor: pointer;

                & select {
                    padding: ${r["vira-select-padding-vertical"].value} 31px
                        ${r["vira-select-padding-vertical"].value}
                        ${r["vira-select-padding-horizontal"].value};

                    &:focus:focus-visible:not([aria-disabled='true']) ~ .focus-border {
                        ${ua({elementBorderSize:"1px",noNesting:!0})}
                    }
                }

                & .border-style {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: ${R["vira-form-radius"].value};
                    z-index: 0;
                    pointer-events: none;
                }

                & .wrapper-border {
                    top: -1px;
                    left: -1px;
                    border: 1px solid ${R["vira-form-border-color"].value};
                    transition: border
                        ${js["vira-interaction-animation-duration"].value};
                }
            }
        }

        label {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 2px;
            width: 100%;
            max-width: 100%;

            & .select-label {
                font-weight: ${R["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${ys}
            }
            ${B} {
                ${ys}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${R["vira-form-error-color"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanupListeners?.();function n(){return ur.instanceOf(t.shadowRoot.querySelector("select"),HTMLSelectElement)}i(n,"getSelectElement");const o=[Un(t,"mousedown",a=>{const s=n();a.composedPath().includes(s)||(a.preventDefault(),a.stopPropagation(),s.showPicker&&s.showPicker())}),Un(t,"click",a=>{const s=n();a.composedPath().includes(s)||(a.preventDefault(),a.stopPropagation(),s.showPicker&&s.showPicker())})];r({cleanupListeners:i(()=>{o.forEach(a=>a())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e,state:r,dispatch:t,events:n}){const o=e.value||void 0,a=e.placeholder||o==null?m`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:ee,s=m`
            <span class="select-wrapper">
                <select
                    .value=${Ue(o)}
                    class=${Gr({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Ue(e.label?r.randomId:void 0)}
                    aria-label=${Ue(e.label||void 0)}
                    aria-disabled=${Ue(e.disabled?"true":void 0)}
                    ${L("input",l=>{const u=Ea(l,HTMLSelectElement),f=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(g=>g.value===o)),t(new n.valueChange(f))})}
                    ${Cn(e.attributePassthrough?.select)}
                >
                    ${a}
                    ${e.options.map(l=>m`
                            <option
                                ?selected=${l.value===o}
                                aria-label=${l.label}
                                ?disabled=${l.disabled}
                                value=${l.value}
                            >
                                ${l.label}
                            </option>
                        `)}
                </select>
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <select> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>

                <${B.assign({icon:e.icon})}
                    class="input-icon"
                ></${B}>
                <${B.assign({icon:Tu})}
                    class="trigger-icon"
                ></${B}>
            </span>
        `;return e.label?m`
                <label for=${r.randomId} ${Cn(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),Ot=gr()({tagName:"vira-form",events:{valueChange:Pe(),validChange:Pe()},styles:k`
        :host {
            display: flex;
        }

        form {
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            align-items: stretch;
            gap: 10px;

            > * {
                width: unset;
            }
        }
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:r,events:t,state:n,updateState:o}){const a=lO(e.fields);a!==n.lastIsValid&&(o({lastIsValid:a}),r(new t.validChange({allFieldsAreValid:a})));const s=En(e.fields).map(([l,u])=>u.isHidden?ee:u.type===Me.Checkbox?m`
                        <${fe.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:ic(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?ti(u.testId):ee}
                            ${L(fe.events.valueChange,f=>{r(new t.valueChange({key:l,...u,value:f.detail}))})}
                        ></${fe}>
                    `:u.type===Me.Select?m`
                        <${He.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:ic(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?ti(u.testId):ee}
                            ${L(He.events.valueChange,f=>{r(new t.valueChange({key:l,...u,value:f.detail}))})}
                        ></${He}>
                    `:u.type===Me.Number?m`
                        <${er.assign({value:u.value?.toString()||"",disabled:e.isDisabled||u.isDisabled,allowedInputs:/\d/,hasError:u.hasError,icon:u.icon,label:ic(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,type:Vi.Number,attributePassthrough:{...u.min===void 0?{}:{min:String(u.min)},...u.max===void 0?{}:{max:String(u.max)},...u.step===void 0?{}:{step:String(u.step)}}})}
                            ${u.testId?ti(u.testId):ee}
                            ${L(er.events.valueChange,f=>{const g=f.detail===""?void 0:Number(f.detail);r(new t.valueChange({key:l,...u,value:g}))})}
                        ></${er}>
                    `:m`
                        <${er.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:ic(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===Me.NewPassword?{autocomplete:"new-password"}:u.type===Me.ExistingPassword?{autocomplete:"password"}:u.type===Me.Email?{autocomplete:"email"}:{},type:[Me.NewPassword,Me.ExistingPassword,Me.PlainPassword].includes(u.type)?Vi.Password:u.type===Me.Email?Vi.Email:Vi.Default})}
                            ${u.testId?ti(u.testId):ee}
                            ${L(er.events.valueChange,f=>{r(new t.valueChange({key:l,...u,value:f.detail}))})}
                        ></${er}>
                    `);return m`
            <form ${L("submit",l=>l.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}}),Wo=gr()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":i(({inputs:e})=>e.dominantDimension==="height","vira-image-height-constrained")},slotNames:["loading","error"],events:{imageLoad:Pe(),imageError:Pe()},styles:i(({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,"styles"),render({inputs:e,state:r,updateState:t,dispatch:n,events:o,slotNames:a}){const s=e.imageUrl,l=r.erroredUrls[s]?m`
                  <slot class="status-wrapper" name=${a.error}>
                      <${B.assign({icon:eu})}
                          class="error"
                      ></${B}>
                  </slot>
              `:r.loadedUrls[s]?void 0:m`
                    <slot class="status-wrapper" name=${a.loading}>
                        <${B.assign({icon:bi})}></${B}>
                    </slot>
                `;return m`
            ${Wr(!!l,l)}
            <img
                class=${Gr({hidden:!!l})}
                ${L("load",async()=>{e._debugLoadDelay&&await ea(e._debugLoadDelay),t({loadedUrls:{...r.loadedUrls,[s]:!0}}),n(new o.imageLoad)})}
                ${L("error",async u=>{e._debugLoadDelay&&await ea(e._debugLoadDelay),t({erroredUrls:{...r.erroredUrls,[s]:!0}}),n(new o.imageError(u.error))})}
                src=${s}
            />
        `}}),$t=gr()({tagName:"vira-link",state(){return{cleanupListeners:void 0}},hostClasses:{"vira-link-link-styles":i(({inputs:e})=>!e.disableLinkStyles,"vira-link-link-styles")},styles:i(({hostClasses:e})=>k`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        ${e["vira-link-link-styles"].selector} {
            &:hover a,
            & a:hover {
                color: ${R["vira-form-accent-primary-color"].value};
            }

            &:active a,
            & a:active {
                color: ${R["vira-form-accent-primary-active-color"].value};
            }
        }
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanupListeners?.();let n=!1;const o=[Un(t,"click",a=>{if(n)return;const s=ur.instanceOf(t.shadowRoot.querySelector("a"),HTMLAnchorElement);a.composedPath().includes(s)||(a.preventDefault(),a.stopPropagation(),n=!0,s.dispatchEvent(new MouseEvent(a.type,a)),n=!1)})];r({cleanupListeners:i(()=>{o.forEach(a=>a())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e}){function r(t){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,t)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(i(r,"clickCallback"),e.link?.newTab)return m`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${Cn(e.attributePassthrough?.a)}
                    style=${Ue(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const t=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return m`
                <a
                    href=${t}
                    rel="noopener noreferrer"
                    ${Cn(e.attributePassthrough?.a)}
                    style=${Ue(e.stylePassthrough?.a)}
                    ${L("click",r)}
                >
                    <slot></slot>
                </a>
            `}}});var ru;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})(ru||(ru={}));const $m={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:ru.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},vi=qe($m,e=>e),we={...vi,name:"name",hexString:"hexString"},oo=qe($m,(e,r)=>{const t=M.isEnumValue(e,ru)&&M.isEnumValue(e,vi)?e:"conversionFormat"in r&&r.conversionFormat&&M.isEnumValue(r.conversionFormat,ru)&&M.isEnumValue(r.conversionFormat,vi)?r.conversionFormat:void 0;return Er.isTruthy(t,`Invalid conversion format for color format '${e}' ${x(r)}.`),{...r,colorFormat:e,conversionFormat:t,rawSyntax:ur.isEnumValue("rawSyntax"in r&&r.rawSyntax?r.rawSyntax:e,we)}});fi(ns($m),e=>({key:e.colorSpace,value:e.colorSpace}),{});En(oo).reduce((e,[r,t])=>(pa(e,t.colorSpace,()=>({}))[r]=t,e),{});function fO(e){return e.startsWith("rgb")?we.rgb:e.startsWith("hsl")?we.hsl:e.startsWith("hwb")?we.hwb:e.startsWith("oklab")?we.oklab:e.startsWith("oklch")?we.oklch:e.startsWith("lab")?we.lab:e.startsWith("lch")?we.lch:e.startsWith("#")?we.hexString:we.name}i(fO,"getColorSyntaxFromCssString");const ih={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in ih)Object.freeze(ih[e]);const tu=Object.freeze(ih),gO=Object.keys(tu).reduce((e,r)=>r.length>e.length?r:e),hO=$d(qe(tu,(e,r)=>Vt(Object.entries(tu),([n])=>n,(n,[,o])=>n===e?!1:M.deepEquals(o,r))),(e,r)=>!!r.length),Gy=Object.entries(hO).reduce((e,r)=>{const t=[e[0],...e[1]].join(", ");return[r[0],...r[1]].join(", ").length>t.length?r:e}).reduce((e,r)=>M.isArray(r)?[...e,...r]:[...e,r],[]),Zy=Math.max(gO.length,Gy.length+(Gy.length-1)*2),vx=i((e,r)=>{if(typeof e=="number"){if(r===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(r===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(r===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(r===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},"parseNumber"),pO={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mO=i(e=>vx(pO[e.toLowerCase()],6),"parseNamed"),bO=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,vO=i(e=>{let r;return(r=e.match(bO))?vx(parseInt(r[1],16),r[1].length):void 0},"parseHex"),ci="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",Pl=`${ci}%`,xm=`(?:${ci}%|${ci})`,yO=`(?:${ci}(deg|grad|rad|turn)|${ci})`,ks="\\s*,\\s*",wO=new RegExp(`^rgba?\\(\\s*${ci}${ks}${ci}${ks}${ci}\\s*(?:,\\s*${xm}\\s*)?\\)$`),kO=new RegExp(`^rgba?\\(\\s*${Pl}${ks}${Pl}${ks}${Pl}\\s*(?:,\\s*${xm}\\s*)?\\)$`),$O=i(e=>{let r={mode:"rgb"},t;if(t=e.match(wO))t[1]!==void 0&&(r.r=t[1]/255),t[2]!==void 0&&(r.g=t[2]/255),t[3]!==void 0&&(r.b=t[3]/255);else if(t=e.match(kO))t[1]!==void 0&&(r.r=t[1]/100),t[2]!==void 0&&(r.g=t[2]/100),t[3]!==void 0&&(r.b=t[3]/100);else return;return t[4]!==void 0?r.alpha=Math.max(0,Math.min(1,t[4]/100)):t[5]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[5]))),r},"parseRgbLegacy"),ah=i((e,r)=>e===void 0?void 0:typeof e!="object"?uh(e):e.mode!==void 0?e:r?{...e,mode:r}:void 0,"prepare"),da=i((e="rgb")=>r=>(r=ah(r,e))!==void 0?r.mode===e?r:so[r.mode][e]?so[r.mode][e](r):e==="rgb"?so[r.mode].rgb(r):so.rgb[e](so[r.mode].rgb(r)):void 0,"converter"),so={},yx={},od=[],wx={},xO=i(e=>e,"identity"),ze=i(e=>(so[e.mode]={...so[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(r=>{so[r]||(so[r]={}),so[r][e.mode]=e.fromMode[r]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(r=>{if(e.ranges[r]===void 0&&(e.ranges[r]=[0,1]),!e.interpolate[r])throw new Error(`Missing interpolator for: ${r}`);typeof e.interpolate[r]=="function"&&(e.interpolate[r]={use:e.interpolate[r]}),e.interpolate[r].fixup||(e.interpolate[r].fixup=xO)}),yx[e.mode]=e,(e.parse||[]).forEach(r=>{DO(r,e.mode)}),da(e.mode)),"useMode"),hf=i(e=>yx[e],"getMode"),DO=i((e,r)=>{if(typeof e=="string"){if(!r)throw new Error("'mode' required when 'parser' is a string");wx[e]=r}else typeof e=="function"&&od.indexOf(e)<0&&od.push(e)},"useParser"),sh=/[^\x00-\x7F]|[a-zA-Z_]/,CO=/[^\x00-\x7F]|[-\w]/,U={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let oe=0;function ac(e){let r=e[oe],t=e[oe+1];return r==="-"||r==="+"?/\d/.test(t)||t==="."&&/\d/.test(e[oe+2]):r==="."?/\d/.test(t):/\d/.test(r)}i(ac,"is_num");function lh(e){if(oe>=e.length)return!1;let r=e[oe];if(sh.test(r))return!0;if(r==="-"){if(e.length-oe<2)return!1;let t=e[oe+1];return!!(t==="-"||sh.test(t))}return!1}i(lh,"is_ident");const EO={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function el(e){let r="";if((e[oe]==="-"||e[oe]==="+")&&(r+=e[oe++]),r+=sc(e),e[oe]==="."&&/\d/.test(e[oe+1])&&(r+=e[oe++]+sc(e)),(e[oe]==="e"||e[oe]==="E")&&((e[oe+1]==="-"||e[oe+1]==="+")&&/\d/.test(e[oe+2])?r+=e[oe++]+e[oe++]+sc(e):/\d/.test(e[oe+1])&&(r+=e[oe++]+sc(e))),lh(e)){let t=id(e);return t==="deg"||t==="rad"||t==="turn"||t==="grad"?{type:U.Hue,value:r*EO[t]}:void 0}return e[oe]==="%"?(oe++,{type:U.Percentage,value:+r}):{type:U.Number,value:+r}}i(el,"num");function sc(e){let r="";for(;/\d/.test(e[oe]);)r+=e[oe++];return r}i(sc,"digits");function id(e){let r="";for(;oe<e.length&&CO.test(e[oe]);)r+=e[oe++];return r}i(id,"ident");function AO(e){let r=id(e);return e[oe]==="("?(oe++,{type:U.Function,value:r}):r==="none"?{type:U.None,value:void 0}:{type:U.Ident,value:r}}i(AO,"identlike");function FO(e=""){let r=e.trim(),t=[],n;for(oe=0;oe<r.length;){if(n=r[oe++],n===`
`||n==="	"||n===" "){for(;oe<r.length&&(r[oe]===`
`||r[oe]==="	"||r[oe]===" ");)oe++;continue}if(n===",")return;if(n===")"){t.push({type:U.ParenClose});continue}if(n==="+"){if(oe--,ac(r)){t.push(el(r));continue}return}if(n==="-"){if(oe--,ac(r)){t.push(el(r));continue}if(lh(r)){t.push({type:U.Ident,value:id(r)});continue}return}if(n==="."){if(oe--,ac(r)){t.push(el(r));continue}return}if(n==="/"){for(;oe<r.length&&(r[oe]===`
`||r[oe]==="	"||r[oe]===" ");)oe++;let o;if(ac(r)&&(o=el(r),o.type!==U.Hue)){t.push({type:U.Alpha,value:o});continue}if(lh(r)&&id(r)==="none"){t.push({type:U.Alpha,value:{type:U.None,value:void 0}});continue}return}if(/\d/.test(n)){oe--,t.push(el(r));continue}if(sh.test(n)){oe--,t.push(AO(r));continue}return}return t}i(FO,"tokenize");function SO(e){e._i=0;let r=e[e._i++];if(!r||r.type!==U.Function||r.value!=="color"||(r=e[e._i++],r.type!==U.Ident))return;const t=wx[r.value];if(!t)return;const n={mode:t},o=kx(e,!1);if(!o)return;const a=hf(t).channels;for(let s=0,l,u;s<a.length;s++)l=o[s],u=a[s],l.type!==U.None&&(n[u]=l.type===U.Number?l.value:l.value/100,u==="alpha"&&(n[u]=Math.max(0,Math.min(1,n[u]))));return n}i(SO,"parseColorSyntax");function kx(e,r){const t=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===U.None||n.type===U.Number||n.type===U.Alpha||n.type===U.Percentage||r&&n.type===U.Hue){t.push(n);continue}if(n.type===U.ParenClose){if(e._i<e.length)return;continue}return}if(!(t.length<3||t.length>4)){if(t.length===4){if(t[3].type!==U.Alpha)return;t[3]=t[3].value}return t.length===3&&t.push({type:U.None,value:void 0}),t.every(o=>o.type!==U.Alpha)?t:void 0}}i(kx,"consumeCoords");function MO(e,r){e._i=0;let t=e[e._i++];if(!t||t.type!==U.Function)return;let n=kx(e,r);if(n)return n.unshift(t.value),n}i(MO,"parseModernSyntax");const uh=i(e=>{if(typeof e!="string")return;const r=FO(e),t=r?MO(r,!0):void 0;let n,o=0,a=od.length;for(;o<a;)if((n=od[o++](e,t))!==void 0)return n;return r?SO(r):void 0},"parse");function TO(e,r){if(!r||r[0]!=="rgb"&&r[0]!=="rgba")return;const t={mode:"rgb"},[,n,o,a,s]=r;if(!(n.type===U.Hue||o.type===U.Hue||a.type===U.Hue))return n.type!==U.None&&(t.r=n.type===U.Number?n.value/255:n.value/100),o.type!==U.None&&(t.g=o.type===U.Number?o.value/255:o.value/100),a.type!==U.None&&(t.b=a.type===U.Number?a.value/255:a.value/100),s.type!==U.None&&(t.alpha=Math.min(1,Math.max(0,s.type===U.Number?s.value:s.value/100))),t}i(TO,"parseRgb");const PO=i(e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,"parseTransparent"),IO=i((e,r,t)=>e+t*(r-e),"lerp"),NO=i(e=>{let r=[];for(let t=0;t<e.length-1;t++){let n=e[t],o=e[t+1];n===void 0&&o===void 0?r.push(void 0):n!==void 0&&o!==void 0?r.push([n,o]):r.push(n!==void 0?[n,n]:[o,o])}return r},"get_classes"),BO=i(e=>r=>{let t=NO(r);return n=>{let o=n*t.length,a=n>=1?t.length-1:Math.max(Math.floor(o),0),s=t[a];return s===void 0?void 0:e(s[0],s[1],o-a)}},"interpolatorPiecewise"),V=BO(IO),Yr=i(e=>{let r=!1,t=e.map(n=>n!==void 0?(r=!0,n):1);return r?t:e},"fixupAlpha"),Us={mode:"rgb",channels:["r","g","b","alpha"],parse:[TO,vO,$O,mO,PO,"srgb"],serialize:"srgb",interpolate:{r:V,g:V,b:V,alpha:{use:V,fixup:Yr}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},$0=i((e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),"linearize$2"),Yy=i(e=>{let r=$0(e.r),t=$0(e.g),n=$0(e.b),o={mode:"xyz65",x:.5766690429101305*r+.1855582379065463*t+.1882286462349947*n,y:.297344975250536*r+.6273635662554661*t+.0752914584939979*n,z:.0270313613864123*r+.0706888525358272*t+.9913375368376386*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertA98ToXyz65"),x0=i(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),"gamma$2"),Jy=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"a98",r:x0(e*2.0415879038107465-r*.5650069742788597-.3447313507783297*t),g:x0(e*-.9692436362808798+r*1.8759675015077206+.0415550574071756*t),b:x0(e*.0134442806320312-r*.1183623922310184+1.0151749943912058*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz65ToA98"),D0=i((e=0)=>{const r=Math.abs(e);return r<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((r+.055)/1.055,2.4)},"fn$3"),_s=i(({r:e,g:r,b:t,alpha:n})=>{let o={mode:"lrgb",r:D0(e),g:D0(r),b:D0(t)};return n!==void 0&&(o.alpha=n),o},"convertRgbToLrgb"),Aa=i(e=>{let{r,g:t,b:n,alpha:o}=_s(e),a={mode:"xyz65",x:.4123907992659593*r+.357584339383878*t+.1804807884018343*n,y:.2126390058715102*r+.715168678767756*t+.0721923153607337*n,z:.0193308187155918*r+.119194779794626*t+.9505321522496607*n};return o!==void 0&&(a.alpha=o),a},"convertRgbToXyz65"),C0=i((e=0)=>{const r=Math.abs(e);return r>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(r,1/2.4)-.055):e*12.92},"fn$2"),zs=i(({r:e,g:r,b:t,alpha:n},o="rgb")=>{let a={mode:o,r:C0(e),g:C0(r),b:C0(t)};return n!==void 0&&(a.alpha=n),a},"convertLrgbToRgb"),Fa=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=zs({r:e*3.2409699419045226-r*1.537383177570094-.4986107602930034*t,g:e*-.9692436362808796+r*1.8759675015077204+.0415550574071756*t,b:e*.0556300796969936-r*.2039769588889765+1.0569715142428784*t});return n!==void 0&&(o.alpha=n),o},"convertXyz65ToRgb"),OO={...Us,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:i(e=>Jy(Aa(e)),"rgb"),xyz65:Jy},toMode:{rgb:i(e=>Fa(Yy(e)),"rgb"),xyz65:Yy}},ht=i(e=>(e=e%360)<0?e+360:e,"normalizeHue"),RO=i((e,r)=>e.map((t,n,o)=>{if(t===void 0)return t;let a=ht(t);return n===0||e[n-1]===void 0?a:r(a-ht(o[n-1]))}).reduce((t,n)=>!t.length||n===void 0||t[t.length-1]===void 0?(t.push(n),t):(t.push(n+t[t.length-1]),t),[]),"hue"),Uo=i(e=>RO(e,r=>Math.abs(r)<=180?r:r-360*Math.sign(r)),"fixupHueShorter"),et=[-.14861,1.78277,-.29227,-.90649,1.97294,0],LO=Math.PI/180,jO=180/Math.PI;let Xy=et[3]*et[4],Qy=et[1]*et[4],e1=et[1]*et[2]-et[0]*et[3];const UO=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e1*t+e*Xy-r*Qy)/(e1+Xy-Qy),a=t-o,s=(et[4]*(r-o)-et[2]*a)/et[3],l={mode:"cubehelix",l:o,s:o===0||o===1?void 0:Math.sqrt(a*a+s*s)/(et[4]*o*(1-o))};return l.s&&(l.h=Math.atan2(s,a)*jO-120),n!==void 0&&(l.alpha=n),l},"convertRgbToCubehelix"),_O=i(({h:e,s:r,l:t,alpha:n})=>{let o={mode:"rgb"};e=(e===void 0?0:e+120)*LO,t===void 0&&(t=0);let a=r===void 0?0:r*t*(1-t),s=Math.cos(e),l=Math.sin(e);return o.r=t+a*(et[0]*s+et[1]*l),o.g=t+a*(et[2]*s+et[3]*l),o.b=t+a*(et[4]*s+et[5]*l),n!==void 0&&(o.alpha=n),o},"convertCubehelixToRgb"),pf=i((e,r)=>{if(e.h===void 0||r.h===void 0||!e.s||!r.s)return 0;let t=ht(e.h),n=ht(r.h),o=Math.sin((n-t+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*r.s)*o},"differenceHueSaturation"),zO=i((e,r)=>{if(e.h===void 0||r.h===void 0)return 0;let t=ht(e.h),n=ht(r.h);return Math.abs(n-t)>180?t-(n-360*Math.sign(n-t)):n-t},"differenceHueNaive"),mf=i((e,r)=>{if(e.h===void 0||r.h===void 0||!e.c||!r.c)return 0;let t=ht(e.h),n=ht(r.h),o=Math.sin((n-t+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*r.c)*o},"differenceHueChroma"),qO=i((e="rgb",r=[1,1,1,0])=>{let t=hf(e),n=t.channels,o=t.difference,a=da(e);return(s,l)=>{let u=a(s),f=a(l);return Math.sqrt(n.reduce((g,h,p)=>{let b=o[h]?o[h](u,f):u[h]-f[h];return g+(r[p]||0)*Math.pow(isNaN(b)?0:b,2)},0))}},"differenceEuclidean"),_o=i(e=>{let r=e.reduce((n,o)=>{if(o!==void 0){let a=o*Math.PI/180;n.sin+=Math.sin(a),n.cos+=Math.cos(a)}return n},{sin:0,cos:0}),t=Math.atan2(r.sin,r.cos)*180/Math.PI;return t<0?360+t:t},"averageAngle"),VO={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:UO},toMode:{rgb:_O},interpolate:{h:{use:V,fixup:Uo},s:V,l:V,alpha:{use:V,fixup:Yr}},difference:{h:pf},average:{h:_o}},yi=i(({l:e,a:r,b:t,alpha:n},o="lch")=>{r===void 0&&(r=0),t===void 0&&(t=0);let a=Math.sqrt(r*r+t*t),s={mode:o,l:e,c:a};return a&&(s.h=ht(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},"convertLabToLch"),wi=i(({l:e,c:r,h:t,alpha:n},o="lab")=>{t===void 0&&(t=0);let a={mode:o,l:e,a:r?r*Math.cos(t/180*Math.PI):0,b:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(a.alpha=n),a},"convertLchToLab"),$x=Math.pow(29,3)/Math.pow(3,3),xx=Math.pow(6,3)/Math.pow(29,3),Br={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},Qa={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let E0=i(e=>Math.pow(e,3)>xx?Math.pow(e,3):(116*e-16)/$x,"fn$1");const Dx=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+16)/116,a=r/500+o,s=o-t/200,l={mode:"xyz65",x:E0(a)*Qa.X,y:E0(o)*Qa.Y,z:E0(s)*Qa.Z};return n!==void 0&&(l.alpha=n),l},"convertLab65ToXyz65"),bf=i(e=>Fa(Dx(e)),"convertLab65ToRgb"),A0=i(e=>e>xx?Math.cbrt(e):($x*e+16)/116,"f$1"),Cx=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=A0(e/Qa.X),a=A0(r/Qa.Y),s=A0(t/Qa.Z),l={mode:"lab65",l:116*a-16,a:500*(o-a),b:200*(a-s)};return n!==void 0&&(l.alpha=n),l},"convertXyz65ToLab65"),vf=i(e=>{let r=Cx(Aa(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToLab65"),ad=1,Ex=1,nu=26/180*Math.PI,sd=Math.cos(nu),ld=Math.sin(nu),Ax=100/Math.log(139/100),ch=i(({l:e,c:r,h:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"lab65",l:(Math.exp(e*ad/Ax)-1)/.0039},a=(Math.exp(.0435*r*Ex*ad)-1)/.075,s=a*Math.cos(t/180*Math.PI-nu),l=a*Math.sin(t/180*Math.PI-nu);return o.a=s*sd-l/.83*ld,o.b=s*ld+l/.83*sd,n!==void 0&&(o.alpha=n),o},"convertDlchToLab65"),dh=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=r*sd+t*ld,a=.83*(t*sd-r*ld),s=Math.sqrt(o*o+a*a),l={mode:"dlch",l:Ax/ad*Math.log(1+.0039*e),c:Math.log(1+.075*s)/(.0435*Ex*ad)};return l.c&&(l.h=ht((Math.atan2(a,o)+nu)/Math.PI*180)),n!==void 0&&(l.alpha=n),l},"convertLab65ToDlch"),r1=i(e=>ch(yi(e,"dlch")),"convertDlabToLab65"),t1=i(e=>wi(dh(e),"dlab"),"convertLab65ToDlab"),WO={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:r1,rgb:i(e=>bf(r1(e)),"rgb")},fromMode:{lab65:t1,rgb:i(e=>t1(vf(e)),"rgb")},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:V,a:V,b:V,alpha:{use:V,fixup:Yr}}},KO={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:ch,dlab:i(e=>wi(e,"dlab"),"dlab"),rgb:i(e=>bf(ch(e)),"rgb")},fromMode:{lab65:dh,dlab:i(e=>yi(e,"dlch"),"dlab"),rgb:i(e=>dh(vf(e)),"rgb")},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:V,c:V,h:{use:V,fixup:Uo},alpha:{use:V,fixup:Yr}},difference:{h:mf},average:{h:_o}};function HO({h:e,s:r,i:t,alpha:n}){e=ht(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:t*(1+r*(3/(2-o)-1)),g:t*(1+r*(3*(1-o)/(2-o)-1)),b:t*(1-r)};break;case 1:a={r:t*(1+r*(3*(1-o)/(2-o)-1)),g:t*(1+r*(3/(2-o)-1)),b:t*(1-r)};break;case 2:a={r:t*(1-r),g:t*(1+r*(3/(2-o)-1)),b:t*(1+r*(3*(1-o)/(2-o)-1))};break;case 3:a={r:t*(1-r),g:t*(1+r*(3*(1-o)/(2-o)-1)),b:t*(1+r*(3/(2-o)-1))};break;case 4:a={r:t*(1+r*(3*(1-o)/(2-o)-1)),g:t*(1-r),b:t*(1+r*(3/(2-o)-1))};break;case 5:a={r:t*(1+r*(3/(2-o)-1)),g:t*(1-r),b:t*(1+r*(3*(1-o)/(2-o)-1))};break;default:a={r:t*(1-r),g:t*(1-r),b:t*(1-r)}}return a.mode="rgb",n!==void 0&&(a.alpha=n),a}i(HO,"convertHsiToRgb");function GO({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),a=Math.min(e,r,t),s={mode:"hsi",s:e+r+t===0?0:1-3*a/(e+r+t),i:(e+r+t)/3};return o-a!==0&&(s.h=(o===e?(r-t)/(o-a)+(r<t)*6:o===r?(t-e)/(o-a)+2:(e-r)/(o-a)+4)*60),n!==void 0&&(s.alpha=n),s}i(GO,"convertRgbToHsi");const ZO={mode:"hsi",toMode:{rgb:HO},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:GO},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:V,fixup:Uo},s:V,i:V,alpha:{use:V,fixup:Yr}},difference:{h:pf},average:{h:_o}};function YO({h:e,s:r,l:t,alpha:n}){e=ht(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=t+r*(t<.5?t:1-t),a=o-(o-t)*2*Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:o,g:a,b:2*t-o};break;case 1:s={r:a,g:o,b:2*t-o};break;case 2:s={r:2*t-o,g:o,b:a};break;case 3:s={r:2*t-o,g:a,b:o};break;case 4:s={r:a,g:2*t-o,b:o};break;case 5:s={r:o,g:2*t-o,b:a};break;default:s={r:2*t-o,g:2*t-o,b:2*t-o}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}i(YO,"convertHslToRgb");function JO({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),a=Math.min(e,r,t),s={mode:"hsl",s:o===a?0:(o-a)/(1-Math.abs(o+a-1)),l:.5*(o+a)};return o-a!==0&&(s.h=(o===e?(r-t)/(o-a)+(r<t)*6:o===r?(t-e)/(o-a)+2:(e-r)/(o-a)+4)*60),n!==void 0&&(s.alpha=n),s}i(JO,"convertRgbToHsl");const XO=i((e,r)=>{switch(r){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},"hueToDeg"),QO=new RegExp(`^hsla?\\(\\s*${yO}${ks}${Pl}${ks}${Pl}\\s*(?:,\\s*${xm}\\s*)?\\)$`),eR=i(e=>{let r=e.match(QO);if(!r)return;let t={mode:"hsl"};return r[3]!==void 0?t.h=+r[3]:r[1]!==void 0&&r[2]!==void 0&&(t.h=XO(r[1],r[2])),r[4]!==void 0&&(t.s=Math.min(Math.max(0,r[4]/100),1)),r[5]!==void 0&&(t.l=Math.min(Math.max(0,r[5]/100),1)),r[6]!==void 0?t.alpha=Math.max(0,Math.min(1,r[6]/100)):r[7]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[7]))),t},"parseHslLegacy");function rR(e,r){if(!r||r[0]!=="hsl"&&r[0]!=="hsla")return;const t={mode:"hsl"},[,n,o,a,s]=r;if(n.type!==U.None){if(n.type===U.Percentage)return;t.h=n.value}if(o.type!==U.None){if(o.type===U.Hue)return;t.s=o.value/100}if(a.type!==U.None){if(a.type===U.Hue)return;t.l=a.value/100}return s.type!==U.None&&(t.alpha=Math.min(1,Math.max(0,s.type===U.Number?s.value:s.value/100))),t}i(rR,"parseHsl");const Fx={mode:"hsl",toMode:{rgb:YO},fromMode:{rgb:JO},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[rR,eR],serialize:i(e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:Uo},s:V,l:V,alpha:{use:V,fixup:Yr}},difference:{h:pf},average:{h:_o}};function Sx({h:e,s:r,v:t,alpha:n}){e=ht(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:t,g:t*(1-r*o),b:t*(1-r)};break;case 1:a={r:t*(1-r*o),g:t,b:t*(1-r)};break;case 2:a={r:t*(1-r),g:t,b:t*(1-r*o)};break;case 3:a={r:t*(1-r),g:t*(1-r*o),b:t};break;case 4:a={r:t*(1-r*o),g:t*(1-r),b:t};break;case 5:a={r:t,g:t*(1-r),b:t*(1-r*o)};break;default:a={r:t*(1-r),g:t*(1-r),b:t*(1-r)}}return a.mode="rgb",n!==void 0&&(a.alpha=n),a}i(Sx,"convertHsvToRgb");function Mx({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),a=Math.min(e,r,t),s={mode:"hsv",s:o===0?0:1-a/o,v:o};return o-a!==0&&(s.h=(o===e?(r-t)/(o-a)+(r<t)*6:o===r?(t-e)/(o-a)+2:(e-r)/(o-a)+4)*60),n!==void 0&&(s.alpha=n),s}i(Mx,"convertRgbToHsv");const Tx={mode:"hsv",toMode:{rgb:Sx},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:Mx},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:V,fixup:Uo},s:V,v:V,alpha:{use:V,fixup:Yr}},difference:{h:pf},average:{h:_o}};function tR({h:e,w:r,b:t,alpha:n}){if(r===void 0&&(r=0),t===void 0&&(t=0),r+t>1){let o=r+t;r/=o,t/=o}return Sx({h:e,s:t===1?1:1-r/(1-t),v:1-t,alpha:n})}i(tR,"convertHwbToRgb");function nR(e){let r=Mx(e);if(r===void 0)return;let t=r.s!==void 0?r.s:0,n=r.v!==void 0?r.v:0,o={mode:"hwb",w:(1-t)*n,b:1-n};return r.h!==void 0&&(o.h=r.h),r.alpha!==void 0&&(o.alpha=r.alpha),o}i(nR,"convertRgbToHwb");function oR(e,r){if(!r||r[0]!=="hwb")return;const t={mode:"hwb"},[,n,o,a,s]=r;if(n.type!==U.None){if(n.type===U.Percentage)return;t.h=n.value}if(o.type!==U.None){if(o.type===U.Hue)return;t.w=o.value/100}if(a.type!==U.None){if(a.type===U.Hue)return;t.b=a.value/100}return s.type!==U.None&&(t.alpha=Math.min(1,Math.max(0,s.type===U.Number?s.value:s.value/100))),t}i(oR,"ParseHwb");const iR={mode:"hwb",toMode:{rgb:tR},fromMode:{rgb:nR},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[oR],serialize:i(e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:Uo},w:V,b:V,alpha:{use:V,fixup:Yr}},difference:{h:zO},average:{h:_o}},Px=203,yf=.1593017578125,Ix=78.84375,wf=.8359375,kf=18.8515625,$f=18.6875;function F0(e){if(e<0)return 0;const r=Math.pow(e,1/Ix);return 1e4*Math.pow(Math.max(0,r-wf)/(kf-$f*r),1/yf)}i(F0,"transferPqDecode");function S0(e){if(e<0)return 0;const r=Math.pow(e/1e4,yf);return Math.pow((wf+kf*r)/(1+$f*r),Ix)}i(S0,"transferPqEncode");const M0=i(e=>Math.max(e/Px,0),"toRel"),n1=i(({i:e,t:r,p:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o=F0(e+.008609037037932761*r+.11102962500302593*t),a=F0(e-.00860903703793275*r-.11102962500302599*t),s=F0(e+.5600313357106791*r-.32062717498731885*t),l={mode:"xyz65",x:M0(2.070152218389422*o-1.3263473389671556*a+.2066510476294051*s),y:M0(.3647385209748074*o+.680566024947227*a-.0453045459220346*s),z:M0(-.049747207535812*o-.0492609666966138*a+1.1880659249923042*s)};return n!==void 0&&(l.alpha=n),l},"convertItpToXyz65"),T0=i((e=0)=>Math.max(e*Px,0),"toAbs"),o1=i(({x:e,y:r,z:t,alpha:n})=>{const o=T0(e),a=T0(r),s=T0(t),l=S0(.3592832590121217*o+.6976051147779502*a-.0358915932320289*s),u=S0(-.1920808463704995*o+1.1004767970374323*a+.0753748658519118*s),f=S0(.0070797844607477*o+.0748396662186366*a+.8433265453898765*s),g=.5*l+.5*u,h=1.61376953125*l-3.323486328125*u+1.709716796875*f,p=4.378173828125*l-4.24560546875*u-.132568359375*f,b={mode:"itp",i:g,t:h,p};return n!==void 0&&(b.alpha=n),b},"convertXyz65ToItp"),aR={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:n1,rgb:i(e=>Fa(n1(e)),"rgb")},fromMode:{xyz65:o1,rgb:i(e=>o1(Aa(e)),"rgb")},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:V,t:V,p:V,alpha:{use:V,fixup:Yr}}},sR=134.03437499999998,lR=16295499532821565e-27,P0=i(e=>{if(e<0)return 0;let r=Math.pow(e/1e4,yf);return Math.pow((wf+kf*r)/(1+$f*r),sR)},"jabPqEncode"),I0=i((e=0)=>Math.max(e*203,0),"abs"),Nx=i(({x:e,y:r,z:t,alpha:n})=>{e=I0(e),r=I0(r),t=I0(t);let o=1.15*e-.15*t,a=.66*r+.34*e,s=P0(.41478972*o+.579999*a+.014648*t),l=P0(-.20151*o+1.120649*a+.0531008*t),u=P0(-.0166008*o+.2648*a+.6684799*t),f=(s+l)/2,g={mode:"jab",j:.44*f/(1-.56*f)-lR,a:3.524*s-4.066708*l+.542708*u,b:.199076*s+1.096799*l-1.295875*u};return n!==void 0&&(g.alpha=n),g},"convertXyz65ToJab"),uR=134.03437499999998,i1=16295499532821565e-27,N0=i(e=>{if(e<0)return 0;let r=Math.pow(e,1/uR);return 1e4*Math.pow((wf-r)/($f*r-kf),1/yf)},"jabPqDecode"),B0=i(e=>e/203,"rel"),Bx=i(({j:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+i1)/(.44+.56*(e+i1)),a=N0(o+.13860504*r+.058047316*t),s=N0(o-.13860504*r-.058047316*t),l=N0(o-.096019242*r-.8118919*t),u={mode:"xyz65",x:B0(1.661373024652174*a-.914523081304348*s+.23136208173913045*l),y:B0(-.3250758611844533*a+1.571847026732543*s-.21825383453227928*l),z:B0(-.090982811*a-.31272829*s+1.5227666*l)};return n!==void 0&&(u.alpha=n),u},"convertJabToXyz65"),Ox=i(e=>{let r=Nx(Aa(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToJab"),Rx=i(e=>Fa(Bx(e)),"convertJabToRgb"),cR={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:Ox,xyz65:Nx},toMode:{rgb:Rx,xyz65:Bx},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:V,a:V,b:V,alpha:{use:V,fixup:Yr}}},a1=i(({j:e,a:r,b:t,alpha:n})=>{r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.sqrt(r*r+t*t),a={mode:"jch",j:e,c:o};return o&&(a.h=ht(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(a.alpha=n),a},"convertJabToJch"),s1=i(({j:e,c:r,h:t,alpha:n})=>{t===void 0&&(t=0);let o={mode:"jab",j:e,a:r?r*Math.cos(t/180*Math.PI):0,b:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},"convertJchToJab"),dR={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:s1,rgb:i(e=>Rx(s1(e)),"rgb")},fromMode:{rgb:i(e=>a1(Ox(e)),"rgb"),jab:a1},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:V,fixup:Uo},c:V,j:V,alpha:{use:V,fixup:Yr}},difference:{h:mf},average:{h:_o}},xf=Math.pow(29,3)/Math.pow(3,3),Dm=Math.pow(6,3)/Math.pow(29,3);let O0=i(e=>Math.pow(e,3)>Dm?Math.pow(e,3):(116*e-16)/xf,"fn");const Cm=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+16)/116,a=r/500+o,s=o-t/200,l={mode:"xyz50",x:O0(a)*Br.X,y:O0(o)*Br.Y,z:O0(s)*Br.Z};return n!==void 0&&(l.alpha=n),l},"convertLabToXyz50"),Pu=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=zs({r:e*3.1341359569958707-r*1.6173863321612538-.4906619460083532*t,g:e*-.978795502912089+r*1.916254567259524+.03344273116131949*t,b:e*.07195537988411677-r*.2289768264158322+1.405386058324125*t});return n!==void 0&&(o.alpha=n),o},"convertXyz50ToRgb"),Lx=i(e=>Pu(Cm(e)),"convertLabToRgb"),Iu=i(e=>{let{r,g:t,b:n,alpha:o}=_s(e),a={mode:"xyz50",x:.436065742824811*r+.3851514688337912*t+.14307845442264197*n,y:.22249319175623702*r+.7168870538238823*t+.06061979053616537*n,z:.013923904500943465*r+.09708128566574634*t+.7140993584005155*n};return o!==void 0&&(a.alpha=o),a},"convertRgbToXyz50"),R0=i(e=>e>Dm?Math.cbrt(e):(xf*e+16)/116,"f"),Em=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=R0(e/Br.X),a=R0(r/Br.Y),s=R0(t/Br.Z),l={mode:"lab",l:116*a-16,a:500*(o-a),b:200*(a-s)};return n!==void 0&&(l.alpha=n),l},"convertXyz50ToLab"),jx=i(e=>{let r=Em(Iu(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToLab");function fR(e,r){if(!r||r[0]!=="lab")return;const t={mode:"lab"},[,n,o,a,s]=r;if(!(n.type===U.Hue||o.type===U.Hue||a.type===U.Hue))return n.type!==U.None&&(t.l=Math.min(Math.max(0,n.value),100)),o.type!==U.None&&(t.a=o.type===U.Number?o.value:o.value*125/100),a.type!==U.None&&(t.b=a.type===U.Number?a.value:a.value*125/100),s.type!==U.None&&(t.alpha=Math.min(1,Math.max(0,s.type===U.Number?s.value:s.value/100))),t}i(fR,"parseLab");const Am={mode:"lab",toMode:{xyz50:Cm,rgb:Lx},fromMode:{xyz50:Em,rgb:jx},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[fR],serialize:i(e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{l:V,a:V,b:V,alpha:{use:V,fixup:Yr}}},gR={...Am,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:Dx,rgb:bf},fromMode:{xyz65:Cx,rgb:vf},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function hR(e,r){if(!r||r[0]!=="lch")return;const t={mode:"lch"},[,n,o,a,s]=r;if(n.type!==U.None){if(n.type===U.Hue)return;t.l=Math.min(Math.max(0,n.value),100)}if(o.type!==U.None&&(t.c=Math.max(0,o.type===U.Number?o.value:o.value*150/100)),a.type!==U.None){if(a.type===U.Percentage)return;t.h=a.value}return s.type!==U.None&&(t.alpha=Math.min(1,Math.max(0,s.type===U.Number?s.value:s.value/100))),t}i(hR,"parseLch");const Fm={mode:"lch",toMode:{lab:wi,rgb:i(e=>Lx(wi(e)),"rgb")},fromMode:{rgb:i(e=>yi(jx(e)),"rgb"),lab:yi},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[hR],serialize:i(e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:Uo},c:V,l:V,alpha:{use:V,fixup:Yr}},difference:{h:mf},average:{h:_o}},pR={...Fm,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:i(e=>wi(e,"lab65"),"lab65"),rgb:i(e=>bf(wi(e,"lab65")),"rgb")},fromMode:{rgb:i(e=>yi(vf(e),"lch65"),"rgb"),lab65:i(e=>yi(e,"lch65"),"lab65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},Ux=i(({l:e,u:r,v:t,alpha:n})=>{r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.sqrt(r*r+t*t),a={mode:"lchuv",l:e,c:o};return o&&(a.h=ht(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(a.alpha=n),a},"convertLuvToLchuv"),_x=i(({l:e,c:r,h:t,alpha:n})=>{t===void 0&&(t=0);let o={mode:"luv",l:e,u:r?r*Math.cos(t/180*Math.PI):0,v:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},"convertLchuvToLuv"),zx=i((e,r,t)=>4*e/(e+15*r+3*t),"u_fn$1"),qx=i((e,r,t)=>9*r/(e+15*r+3*t),"v_fn$1"),mR=zx(Br.X,Br.Y,Br.Z),bR=qx(Br.X,Br.Y,Br.Z),vR=i(e=>e<=Dm?xf*e:116*Math.cbrt(e)-16,"l_fn"),fh=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=vR(r/Br.Y),a=zx(e,r,t),s=qx(e,r,t);!isFinite(a)||!isFinite(s)?o=a=s=0:(a=13*o*(a-mR),s=13*o*(s-bR));let l={mode:"luv",l:o,u:a,v:s};return n!==void 0&&(l.alpha=n),l},"convertXyz50ToLuv"),yR=i((e,r,t)=>4*e/(e+15*r+3*t),"u_fn"),wR=i((e,r,t)=>9*r/(e+15*r+3*t),"v_fn"),kR=yR(Br.X,Br.Y,Br.Z),$R=wR(Br.X,Br.Y,Br.Z),gh=i(({l:e,u:r,v:t,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};r===void 0&&(r=0),t===void 0&&(t=0);let o=r/(13*e)+kR,a=t/(13*e)+$R,s=Br.Y*(e<=8?e/xf:Math.pow((e+16)/116,3)),l=s*(9*o)/(4*a),u=s*(12-3*o-20*a)/(4*a),f={mode:"xyz50",x:l,y:s,z:u};return n!==void 0&&(f.alpha=n),f},"convertLuvToXyz50"),xR=i(e=>Ux(fh(Iu(e))),"convertRgbToLchuv"),DR=i(e=>Pu(gh(_x(e))),"convertLchuvToRgb"),CR={mode:"lchuv",toMode:{luv:_x,rgb:DR},fromMode:{rgb:xR,luv:Ux},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:V,fixup:Uo},c:V,l:V,alpha:{use:V,fixup:Yr}},difference:{h:mf},average:{h:_o}},ER={...Us,mode:"lrgb",toMode:{rgb:zs},fromMode:{rgb:_s},parse:["srgb-linear"],serialize:"srgb-linear"},AR={mode:"luv",toMode:{xyz50:gh,rgb:i(e=>Pu(gh(e)),"rgb")},fromMode:{xyz50:fh,rgb:i(e=>fh(Iu(e)),"rgb")},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:V,u:V,v:V,alpha:{use:V,fixup:Yr}}},Vx=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.cbrt(.412221469470763*e+.5363325372617348*r+.0514459932675022*t),a=Math.cbrt(.2119034958178252*e+.6806995506452344*r+.1073969535369406*t),s=Math.cbrt(.0883024591900564*e+.2817188391361215*r+.6299787016738222*t),l={mode:"oklab",l:.210454268309314*o+.7936177747023054*a-.0040720430116193*s,a:1.9779985324311684*o-2.42859224204858*a+.450593709617411*s,b:.0259040424655478*o+.7827717124575296*a-.8086757549230774*s};return n!==void 0&&(l.alpha=n),l},"convertLrgbToOklab"),Df=i(e=>{let r=Vx(_s(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToOklab"),Nu=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.pow(e+.3963377773761749*r+.2158037573099136*t,3),a=Math.pow(e-.1055613458156586*r-.0638541728258133*t,3),s=Math.pow(e-.0894841775298119*r-1.2914855480194092*t,3),l={mode:"lrgb",r:4.076741636075957*o-3.3077115392580616*a+.2309699031821044*s,g:-1.2684379732850317*o+2.6097573492876887*a-.3413193760026573*s,b:-.0041960761386756*o-.7034186179359362*a+1.7076146940746117*s};return n!==void 0&&(l.alpha=n),l},"convertOklabToLrgb"),Cf=i(e=>zs(Nu(e)),"convertOklabToRgb");function hh(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}i(hh,"toe");function ud(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}i(ud,"toe_inv");function FR(e,r){let t,n,o,a,s,l,u,f;-1.88170328*e-.80936493*r>1?(t=1.19086277,n=1.76576728,o=.59662641,a=.75515197,s=.56771245,l=4.0767416621,u=-3.3077115913,f=.2309699292):1.81444104*e-1.19445276*r>1?(t=.73956515,n=-.45954404,o=.08285427,a=.1254107,s=.14503204,l=-1.2684380046,u=2.6097574011,f=-.3413193965):(t=1.35733652,n=-.00915799,o=-1.1513021,a=-.50559606,s=.00692167,l=-.0041960863,u=-.7034186147,f=1.707614701);let g=t+n*e+o*r+a*e*e+s*e*r,h=.3963377774*e+.2158037573*r,p=-.1055613458*e-.0638541728*r,b=-.0894841775*e-1.291485548*r;{let v=1+g*h,$=1+g*p,C=1+g*b,E=v*v*v,A=$*$*$,N=C*C*C,_=3*h*v*v,H=3*p*$*$,ce=3*b*C*C,Te=6*h*h*v,be=6*p*p*$,Se=6*b*b*C,or=l*E+u*A+f*N,ir=l*_+u*H+f*ce,jr=l*Te+u*be+f*Se;g=g-or*ir/(ir*ir-.5*or*jr)}return g}i(FR,"compute_max_saturation");function Sm(e,r){let t=FR(e,r),n=Nu({l:1,a:t*e,b:t*r}),o=Math.cbrt(1/Math.max(n.r,n.g,n.b)),a=o*t;return[o,a]}i(Sm,"find_cusp");function SR(e,r,t,n,o,a=null){a||(a=Sm(e,r));let s;if((t-o)*a[1]-(a[0]-o)*n<=0)s=a[1]*o/(n*a[0]+a[1]*(o-t));else{s=a[1]*(o-1)/(n*(a[0]-1)+a[1]*(o-t));{let l=t-o,u=n,f=.3963377774*e+.2158037573*r,g=-.1055613458*e-.0638541728*r,h=-.0894841775*e-1.291485548*r,p=l+u*f,b=l+u*g,v=l+u*h;{let $=o*(1-s)+s*t,C=s*n,E=$+C*f,A=$+C*g,N=$+C*h,_=E*E*E,H=A*A*A,ce=N*N*N,Te=3*p*E*E,be=3*b*A*A,Se=3*v*N*N,or=6*p*p*E,ir=6*b*b*A,jr=6*v*v*N,Zt=4.0767416621*_-3.3077115913*H+.2309699292*ce-1,At=4.0767416621*Te-3.3077115913*be+.2309699292*Se,go=4.0767416621*or-3.3077115913*ir+.2309699292*jr,Jr=At/(At*At-.5*Zt*go),Qn=-Zt*Jr,ho=-1.2684380046*_+2.6097574011*H-.3413193965*ce-1,pn=-1.2684380046*Te+2.6097574011*be-.3413193965*Se,at=-1.2684380046*or+2.6097574011*ir-.3413193965*jr,Ge=pn/(pn*pn-.5*ho*at),Ur=-ho*Ge,mn=-.0041960863*_-.7034186147*H+1.707614701*ce-1,vt=-.0041960863*Te-.7034186147*be+1.707614701*Se,bn=-.0041960863*or-.7034186147*ir+1.707614701*jr,Pn=vt/(vt*vt-.5*mn*bn),zo=-mn*Pn;Qn=Jr>=0?Qn:1e6,Ur=Ge>=0?Ur:1e6,zo=Pn>=0?zo:1e6,s+=Math.min(Qn,Math.min(Ur,zo))}}}return s}i(SR,"find_gamut_intersection");function Mm(e,r,t=null){t||(t=Sm(e,r));let n=t[0],o=t[1];return[o/n,o/(1-n)]}i(Mm,"get_ST_max");function Wx(e,r,t){let n=Sm(r,t),o=SR(r,t,e,1,e,n),a=Mm(r,t,n),s=.11516993+1/(7.4477897+4.1590124*t+r*(-2.19557347+1.75198401*t+r*(-2.13704948-10.02301043*t+r*(-4.24894561+5.38770819*t+4.69891013*r)))),l=.11239642+1/(1.6132032-.68124379*t+r*(.40370612+.90148123*t+r*(-.27087943+.6122399*t+r*(.00299215-.45399568*t-.14661872*r)))),u=o/Math.min(e*a[0],(1-e)*a[1]),f=e*s,g=(1-e)*l,h=.9*u*Math.sqrt(Math.sqrt(1/(1/(f*f*f*f)+1/(g*g*g*g))));return f=e*.4,g=(1-e)*.8,[Math.sqrt(1/(1/(f*f)+1/(g*g))),h,o]}i(Wx,"get_Cs");function l1(e){const r=e.l!==void 0?e.l:0,t=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o={mode:"okhsl",l:hh(r)};e.alpha!==void 0&&(o.alpha=e.alpha);let a=Math.sqrt(t*t+n*n);if(!a)return o.s=0,o;let[s,l,u]=Wx(r,t/a,n/a),f;if(a<l){let g=0,h=.8*s,p=1-h/l;f=(a-g)/(h+p*(a-g))*.8}else{let g=l,h=.2*l*l*1.25*1.25/s,p=1-h/(u-l);f=.8+.2*((a-g)/(h+p*(a-g)))}return f&&(o.s=f,o.h=ht(Math.atan2(n,t)*180/Math.PI)),o}i(l1,"convertOklabToOkhsl");function u1(e){let r=e.h!==void 0?e.h:0,t=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const o={mode:"oklab",l:ud(n)};if(e.alpha!==void 0&&(o.alpha=e.alpha),!t||n===1)return o.a=o.b=0,o;let a=Math.cos(r/180*Math.PI),s=Math.sin(r/180*Math.PI),[l,u,f]=Wx(o.l,a,s),g,h,p,b;t<.8?(g=1.25*t,h=0,p=.8*l,b=1-p/u):(g=5*(t-.8),h=u,p=.2*u*u*1.25*1.25/l,b=1-p/(f-u));let v=h+g*p/(1-b*g);return o.a=v*a,o.b=v*s,o}i(u1,"convertOkhslToOklab");const MR={...Fx,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:l1,rgb:i(e=>l1(Df(e)),"rgb")},toMode:{oklab:u1,rgb:i(e=>Cf(u1(e)),"rgb")}};function c1(e){let r=e.l!==void 0?e.l:0,t=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o=Math.sqrt(t*t+n*n),a=o?t/o:1,s=o?n/o:1,[l,u]=Mm(a,s),f=.5,g=1-f/l,h=u/(o+r*u),p=h*r,b=h*o,v=ud(p),$=b*v/p,C=Nu({l:v,a:a*$,b:s*$}),E=Math.cbrt(1/Math.max(C.r,C.g,C.b,0));r=r/E,o=o/E*hh(r)/r,r=hh(r);const A={mode:"okhsv",s:o?(f+u)*b/(u*f+u*g*b):0,v:r?r/p:0};return A.s&&(A.h=ht(Math.atan2(n,t)*180/Math.PI)),e.alpha!==void 0&&(A.alpha=e.alpha),A}i(c1,"convertOklabToOkhsv");function d1(e){const r={mode:"oklab"};e.alpha!==void 0&&(r.alpha=e.alpha);const t=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,o=e.v!==void 0?e.v:0,a=Math.cos(t/180*Math.PI),s=Math.sin(t/180*Math.PI),[l,u]=Mm(a,s),f=.5,g=1-f/l,h=1-n*f/(f+u-u*g*n),p=n*u*f/(f+u-u*g*n),b=ud(h),v=p*b/h,$=Nu({l:b,a:a*v,b:s*v}),C=Math.cbrt(1/Math.max($.r,$.g,$.b,0)),E=ud(o*h),A=p*E/h;return r.l=E*C,r.a=A*a*C,r.b=A*s*C,r}i(d1,"convertOkhsvToOklab");const TR={...Tx,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:c1,rgb:i(e=>c1(Df(e)),"rgb")},toMode:{oklab:d1,rgb:i(e=>Cf(d1(e)),"rgb")}};function PR(e,r){if(!r||r[0]!=="oklab")return;const t={mode:"oklab"},[,n,o,a,s]=r;if(!(n.type===U.Hue||o.type===U.Hue||a.type===U.Hue))return n.type!==U.None&&(t.l=Math.min(Math.max(0,n.type===U.Number?n.value:n.value/100),1)),o.type!==U.None&&(t.a=o.type===U.Number?o.value:o.value*.4/100),a.type!==U.None&&(t.b=a.type===U.Number?a.value:a.value*.4/100),s.type!==U.None&&(t.alpha=Math.min(1,Math.max(0,s.type===U.Number?s.value:s.value/100))),t}i(PR,"parseOklab");const IR={...Am,mode:"oklab",toMode:{lrgb:Nu,rgb:Cf},fromMode:{lrgb:Vx,rgb:Df},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[PR],serialize:i(e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize")};function NR(e,r){if(!r||r[0]!=="oklch")return;const t={mode:"oklch"},[,n,o,a,s]=r;if(n.type!==U.None){if(n.type===U.Hue)return;t.l=Math.min(Math.max(0,n.type===U.Number?n.value:n.value/100),1)}if(o.type!==U.None&&(t.c=Math.max(0,o.type===U.Number?o.value:o.value*.4/100)),a.type!==U.None){if(a.type===U.Percentage)return;t.h=a.value}return s.type!==U.None&&(t.alpha=Math.min(1,Math.max(0,s.type===U.Number?s.value:s.value/100))),t}i(NR,"parseOklch");const BR={...Fm,mode:"oklch",toMode:{oklab:i(e=>wi(e,"oklab"),"oklab"),rgb:i(e=>Cf(wi(e,"oklab")),"rgb")},fromMode:{rgb:i(e=>yi(Df(e),"oklch"),"rgb"),oklab:i(e=>yi(e,"oklch"),"oklab")},parse:[NR],serialize:i(e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),ranges:{l:[0,1],c:[0,.4],h:[0,360]}},f1=i(e=>{let{r,g:t,b:n,alpha:o}=_s(e),a={mode:"xyz65",x:.486570948648216*r+.265667693169093*t+.1982172852343625*n,y:.2289745640697487*r+.6917385218365062*t+.079286914093745*n,z:0*r+.0451133818589026*t+1.043944368900976*n};return o!==void 0&&(a.alpha=o),a},"convertP3ToXyz65"),g1=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=zs({r:e*2.4934969119414263-r*.9313836179191242-.402710784450717*t,g:e*-.8294889695615749+r*1.7626640603183465+.0236246858419436*t,b:e*.0358458302437845-r*.0761723892680418+.9568845240076871*t},"p3");return n!==void 0&&(o.alpha=n),o},"convertXyz65ToP3"),OR={...Us,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:i(e=>g1(Aa(e)),"rgb"),xyz65:g1},toMode:{rgb:i(e=>Fa(f1(e)),"rgb"),xyz65:f1}},L0=i(e=>{let r=Math.abs(e);return r>=1/512?Math.sign(e)*Math.pow(r,1/1.8):16*e},"gamma$1"),h1=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"prophoto",r:L0(e*1.3457868816471585-r*.2555720873797946-.0511018649755453*t),g:L0(e*-.5446307051249019+r*1.5082477428451466+.0205274474364214*t),b:L0(e*0+r*0+1.2119675456389452*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz50ToProphoto"),j0=i((e=0)=>{let r=Math.abs(e);return r>=16/512?Math.sign(e)*Math.pow(r,1.8):e/16},"linearize$1"),p1=i(e=>{let r=j0(e.r),t=j0(e.g),n=j0(e.b),o={mode:"xyz50",x:.7977666449006423*r+.1351812974005331*t+.0313477341283922*n,y:.2880748288194013*r+.7118352342418731*t+899369387256e-16*n,z:0*r+0*t+.8251046025104602*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertProphotoToXyz50"),RR={...Us,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:h1,rgb:i(e=>h1(Iu(e)),"rgb")},toMode:{xyz50:p1,rgb:i(e=>Pu(p1(e)),"rgb")}},m1=1.09929682680944,LR=.018053968510807,U0=i(e=>{const r=Math.abs(e);return r>LR?(Math.sign(e)||1)*(m1*Math.pow(r,.45)-(m1-1)):4.5*e},"gamma"),b1=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"rec2020",r:U0(e*1.7166511879712683-r*.3556707837763925-.2533662813736599*t),g:U0(e*-.6666843518324893+r*1.6164812366349395+.0157685458139111*t),b:U0(e*.0176398574453108-r*.0427706132578085+.9421031212354739*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz65ToRec2020"),v1=1.09929682680944,jR=.018053968510807,_0=i((e=0)=>{let r=Math.abs(e);return r<jR*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((r+v1-1)/v1,1/.45)},"linearize"),y1=i(e=>{let r=_0(e.r),t=_0(e.g),n=_0(e.b),o={mode:"xyz65",x:.6369580483012911*r+.1446169035862083*t+.1688809751641721*n,y:.262700212011267*r+.6779980715188708*t+.059301716469862*n,z:0*r+.0280726930490874*t+1.0609850577107909*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertRec2020ToXyz65"),UR={...Us,mode:"rec2020",fromMode:{xyz65:b1,rgb:i(e=>b1(Aa(e)),"rgb")},toMode:{xyz65:y1,rgb:i(e=>Fa(y1(e)),"rgb")},parse:["rec2020"],serialize:"rec2020"},Xi=.0037930732552754493,Kx=Math.cbrt(Xi),z0=i(e=>Math.cbrt(e)-Kx,"transfer$1"),_R=i(e=>{const{r,g:t,b:n,alpha:o}=_s(e),a=z0(.3*r+.622*t+.078*n+Xi),s=z0(.23*r+.692*t+.078*n+Xi),l=z0(.2434226892454782*r+.2047674442449682*t+.5518098665095535*n+Xi),u={mode:"xyb",x:(a-s)/2,y:(a+s)/2,b:l-(a+s)/2};return o!==void 0&&(u.alpha=o),u},"convertRgbToXyb"),q0=i(e=>Math.pow(e+Kx,3),"transfer"),zR=i(({x:e,y:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o=q0(e+r)-Xi,a=q0(r-e)-Xi,s=q0(t+r)-Xi,l=zs({r:11.031566904639861*o-9.866943908131562*a-.16462299650829934*s,g:-3.2541473810744237*o+4.418770377582723*a-.16462299650829934*s,b:-3.6588512867136815*o+2.7129230459360922*a+1.9459282407775895*s});return n!==void 0&&(l.alpha=n),l},"convertXybToRgb"),qR={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:zR},fromMode:{rgb:_R},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:V,y:V,b:V,alpha:{use:V,fixup:Yr}}},VR={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:Pu,lab:Em},fromMode:{rgb:Iu,lab:Cm},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:V,y:V,z:V,alpha:{use:V,fixup:Yr}}},WR=i(e=>{let{x:r,y:t,z:n,alpha:o}=e;r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0);let a={mode:"xyz50",x:1.0479298208405488*r+.0229467933410191*t-.0501922295431356*n,y:.0296278156881593*r+.990434484573249*t-.0170738250293851*n,z:-.0092430581525912*r+.0150551448965779*t+.7518742899580008*n};return o!==void 0&&(a.alpha=o),a},"convertXyz65ToXyz50"),KR=i(e=>{let{x:r,y:t,z:n,alpha:o}=e;r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0);let a={mode:"xyz65",x:.9554734527042182*r-.0230985368742614*t+.0632593086610217*n,y:-.0283697069632081*r+1.0099954580058226*t+.021041398966943*n,z:.0123140016883199*r-.0205076964334779*t+1.3303659366080753*n};return o!==void 0&&(a.alpha=o),a},"convertXyz50ToXyz65"),HR={mode:"xyz65",toMode:{rgb:Fa,xyz50:WR},fromMode:{rgb:Aa,xyz50:KR},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:V,y:V,z:V,alpha:{use:V,fixup:Yr}}},GR=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o={mode:"yiq",y:.29889531*e+.58662247*r+.11448223*t,i:.59597799*e-.2741761*r-.32180189*t,q:.21147017*e-.52261711*r+.31114694*t};return n!==void 0&&(o.alpha=n),o},"convertRgbToYiq"),ZR=i(({y:e,i:r,q:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o={mode:"rgb",r:e+.95608445*r+.6208885*t,g:e-.27137664*r-.6486059*t,b:e-1.10561724*r+1.70250126*t};return n!==void 0&&(o.alpha=n),o},"convertYiqToRgb"),YR={mode:"yiq",toMode:{rgb:ZR},fromMode:{rgb:GR},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:V,i:V,q:V,alpha:{use:V,fixup:Yr}}},JR=i(e=>Math.max(0,Math.min(1,e||0)),"clamp"),V0=i(e=>Math.round(JR(e)*255),"fixup"),XR=da("rgb"),QR=i(e=>{if(e===void 0)return;let r=V0(e.r),t=V0(e.g),n=V0(e.b);return"#"+(1<<24|r<<16|t<<8|n).toString(16).slice(1)},"serializeHex"),eL=i(e=>QR(XR(e)),"formatHex"),rL=i(e=>{const r={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(r.alpha=e.alpha),r},"fixup_rgb"),tL=i(e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1),"inrange_rgb");function nL(e="rgb"){const{gamut:r}=hf(e);if(!r)return n=>!0;const t=da(typeof r=="string"?r:e);return n=>tL(t(n))}i(nL,"inGamut");function oL(e="rgb"){const{gamut:r}=hf(e);if(!r)return a=>ah(a);const t=typeof r=="string"?r:e,n=da(t),o=nL(t);return a=>{const s=ah(a);if(!s)return;const l=n(s);if(o(l))return s;const u=rL(l);return s.mode===u.mode?u:da(s.mode)(u)}}i(oL,"clampGamut");ze(OO);ze(VO);ze(WO);ze(KO);ze(ZO);ze(Fx);ze(Tx);ze(iR);ze(aR);ze(cR);ze(dR);ze(Am);ze(gR);ze(Fm);ze(pR);ze(CR);ze(ER);ze(AR);ze(MR);ze(TR);ze(IR);ze(BR);ze(OR);ze(RR);ze(UR);ze(Us);ze(qR);ze(VR);ze(HR);ze(YR);const iL=qO("rgb");class Mo{static{i(this,"Color")}constructor(r){this.set(r)}static isValidColorString(r){try{return new Mo(r),!0}catch{return!1}}static isColor(r){return r instanceof Mo}static deserialize(r){const t=JSON.parse(r),n=new Mo("black");return En(t).forEach(([o,a])=>{o==="originalColorSyntax"?n.originalColorSyntax=ur.isEnumValue(a,we,"Cannot deserialize: invalid color syntax."):n._allColors[o]=a}),n}getRgbDistance(r){return iL(this.#e,r)}getClosestNamedColor(){return Ke(tu).reduce((r,t)=>{const n=this.getRgbDistance(t);return n<r.distance?{distance:n,name:t}:r},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=we.hex;#e=ur.isDefined(uh("black"));_allColors={names:["black"],[we.name]:"black",hexString:"#000000",[we.hex]:{r:0,g:0,b:0},[we.rgb]:{r:0,g:0,b:0},[we.hsl]:{h:0,s:0,l:0},[we.hwb]:{h:0,w:0,b:0},[we.lab]:{l:0,a:0,b:0},[we.lch]:{l:0,c:0,h:0},[we.oklab]:{l:0,a:0,b:0},[we.oklch]:{l:0,c:0,h:0}};clone(){return Mo.deserialize(this.serialize())}setByString(r){const t=uh(r);if(!t)throw new Error(`Unable to parse invalid color string: '${r}'`);this.originalColorSyntax=fO(r),this.#e=t,this.pullFromInternalColor()}set(r){if(M.isString(r))return this.setByString(r);if(Er.isLengthExactly(Object.keys(r),1,`Cannot set multiple color formats at once: got '${w8(Object.keys(r))}'`),r.hexString||r.name)this.setByString(r.hexString||r.name);else{const[t,n]=ur.isDefined(En(r)[0]),o=oo[t],a=Object.values(qe(o.coords,s=>{const l=n[s],u=o.coords[ur.isKeyOf(s,o.coords)],f=l!=null&&l>=u.min&&l<=u.max?n[s]:this[t][s];return ur.isDefined(f)}));this.setByString(`${o.conversionFormat}(${a.join(" ")})`)}}pullFromInternalColor(){Qt(vi).forEach(r=>{const t=oo[r],n=t.conversionFormat,o=M.isKeyOf(this.#e.mode,oo)?oo[this.#e.mode]:void 0,a=oL(t.colorSpace===o?.colorSpace?n:"rgb")(da(n)(this.#e));a||Er.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${r}'.`),Ke(this[r]).forEach(s=>{const l=a[s],u=t.coords[ur.isKeyOf(s,t.coords)];l!=null&&(this._allColors[r][s]=Ow((l||0)*(u.factor||1),{digits:u.digits||0}))})}),this._allColors.hexString=eL(this.#e),this._allColors.names=aL(this.rgb),this._allColors[we.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return Rn(this._allColors)}toFormattedStrings(){return{...qe(oo,t=>Object.values(this[t]).map(o=>String(o).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(Zy," "),[we.name]:(this.names[0]||"").padEnd(Zy," "),[we.hexString]:this[we.hexString]}}toCss(){return{...qe(oo,t=>{const n=Object.values(this[t]);return`${t}(${n.join(" ")})`}),[we.hexString]:this[we.hexString],[we.name]:this.names[0]||""}}get names(){return Rn(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[we.hexString]}get hex(){return Rn(this._allColors[we.hex])}get rgb(){return Rn(this._allColors[we.rgb])}get hsl(){return Rn(this._allColors[we.hsl])}get hwb(){return Rn(this._allColors[we.hwb])}get lab(){return Rn(this._allColors[we.lab])}get lch(){return Rn(this._allColors[we.lch])}get oklab(){return Rn(this._allColors[we.oklab])}get oklch(){return Rn(this._allColors[we.oklch])}}function aL(e){return Vt(En(tu),([r])=>r,(r,[,t])=>M.deepEquals(t,[e.r,e.g,e.b]))}i(aL,"findMatchingColorNames");function sL(e){return k`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}i(sL,"colorCss");const Tm=k`
    padding: 0;
    margin: 0;
`,Ao=k`
    ${Tm};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Vr=It({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function Bu({name:e,svgTemplate:r}){return{name:e,svgTemplate:r}}i(Bu,"defineIcon");const lL=Bu({name:"CloseX24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${Vr["vira-icon-fill-color"].value}
                stroke=${Vr["vira-icon-stroke-color"].value}
                stroke-width=${Vr["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${Vr["vira-icon-stroke-color"].value}
                stroke-width=${Vr["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),uL=Bu({name:"ChevronUp16Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${Vr["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${Vr["vira-icon-stroke-width"].value}
                d="M4 10 L8 6 12 10"
            />
        </svg>
    `}),w1=Bu({name:"Copy24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M16 6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke="none"
                fill=${Vr["vira-icon-fill-color"].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${Vr["vira-icon-stroke-color"].value}
                stroke-width=${Vr["vira-icon-stroke-width"].value}
                fill=${Vr["vira-icon-fill-color"].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${Vr["vira-icon-stroke-color"].value}
                stroke-width=${Vr["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),cL=Bu({name:"EyeClosed24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${Vr["vira-icon-fill-color"].value}
            stroke=${Vr["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${Vr["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),dL=Bu({name:"EyeOpen24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${Vr["vira-icon-fill-color"].value}
            stroke=${Vr["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${Vr["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),Hx=It({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),d=It({"vira-red-100":"#FFF6F5","vira-red-150":"#FFEDEB","vira-red-200":"#FFE4E1","vira-red-250":"#FFDCD8","vira-red-300":"#FFD1CB","vira-red-350":"#FFC1B8","vira-red-400":"#FFA79B","vira-red-450":"#FF8274","vira-red-500":"#FF564A","vira-red-550":"#F43A32","vira-red-600":"#E2322C","vira-red-650":"#D02C27","vira-red-700":"#BB2520","vira-red-750":"#9E231D","vira-red-800":"#82211A","vira-red-850":"#701A13","vira-red-900":"#611710","vira-red-950":"#52140D","vira-red-1000":"#43130D","vira-yellow-100":"#FEF9E4","vira-yellow-150":"#FDF2D1","vira-yellow-200":"#FDEABF","vira-yellow-250":"#FEE2AD","vira-yellow-300":"#FDD89B","vira-yellow-350":"#FAC986","vira-yellow-400":"#EFB669","vira-yellow-450":"#E29D34","vira-yellow-500":"#CE8800","vira-yellow-550":"#BB7B00","vira-yellow-600":"#AC7100","vira-yellow-650":"#9E6800","vira-yellow-700":"#8C5C00","vira-yellow-750":"#794D00","vira-yellow-800":"#683E00","vira-yellow-850":"#5B3301","vira-yellow-900":"#502A05","vira-yellow-950":"#442308","vira-yellow-1000":"#381D0B","vira-green-100":"#EBFFEE","vira-green-150":"#DDFBE2","vira-green-200":"#CDF8D6","vira-green-250":"#BFF5CC","vira-green-300":"#AFF0C0","vira-green-350":"#9AE8B1","vira-green-400":"#7FD99C","vira-green-450":"#52C87F","vira-green-500":"#1BB565","vira-green-550":"#04A559","vira-green-600":"#009852","vira-green-650":"#008C4A","vira-green-700":"#007C41","vira-green-750":"#016A38","vira-green-800":"#095831","vira-green-850":"#024B29","vira-green-900":"#014024","vira-green-950":"#02371F","vira-green-1000":"#062D1B","vira-teal-100":"#E8FEFD","vira-teal-150":"#D9FAF8","vira-teal-200":"#C9F6F3","vira-teal-250":"#BAF2ED","vira-teal-300":"#A9EDE6","vira-teal-350":"#95E4DB","vira-teal-400":"#79D5CA","vira-teal-450":"#47C3B7","vira-teal-500":"#00B0A4","vira-teal-550":"#00A094","vira-teal-600":"#009389","vira-teal-650":"#00877D","vira-teal-700":"#00786F","vira-teal-750":"#00665F","vira-teal-800":"#01554F","vira-teal-850":"#004843","vira-teal-900":"#003E3A","vira-teal-950":"#033531","vira-teal-1000":"#072B29","vira-blue-100":"#F5F9FF","vira-blue-150":"#EAF3FF","vira-blue-200":"#E0EDFF","vira-blue-250":"#D6E7FF","vira-blue-300":"#CBDFFF","vira-blue-350":"#B9D4FF","vira-blue-400":"#9EC3FF","vira-blue-450":"#7AADFF","vira-blue-500":"#5697FF","vira-blue-550":"#4988ED","vira-blue-600":"#427DDC","vira-blue-650":"#3B72CA","vira-blue-700":"#3365B6","vira-blue-750":"#2D569A","vira-blue-800":"#27487E","vira-blue-850":"#203D6C","vira-blue-900":"#1B345D","vira-blue-950":"#172C4F","vira-blue-1000":"#142540","vira-accent-100":"#F5F9FF","vira-accent-150":"#EAF3FF","vira-accent-200":"#E0EDFF","vira-accent-250":"#D6E7FF","vira-accent-300":"#CBDFFF","vira-accent-350":"#B9D4FF","vira-accent-400":"#9EC3FF","vira-accent-450":"#7AADFF","vira-accent-500":"#5697FF","vira-accent-550":"#4988ED","vira-accent-600":"#427DDC","vira-accent-650":"#3B72CA","vira-accent-700":"#3365B6","vira-accent-750":"#2D569A","vira-accent-800":"#27487E","vira-accent-850":"#203D6C","vira-accent-900":"#1B345D","vira-accent-950":"#172C4F","vira-accent-1000":"#142540","vira-purple-100":"#F9F7FF","vira-purple-150":"#F3EFFF","vira-purple-200":"#EDE8FF","vira-purple-250":"#E6E1FF","vira-purple-300":"#DED8FF","vira-purple-350":"#D2CBFF","vira-purple-400":"#C1B7FF","vira-purple-450":"#AD9BFF","vira-purple-500":"#9B80FF","vira-purple-550":"#8D6EF4","vira-purple-600":"#8265E3","vira-purple-650":"#775BD1","vira-purple-700":"#6A50BB","vira-purple-750":"#5A459E","vira-purple-800":"#4A3B82","vira-purple-850":"#3E3170","vira-purple-900":"#352A61","vira-purple-950":"#2D2452","vira-purple-1000":"#251F43","vira-pink-100":"#FEF5FF","vira-pink-150":"#FFEAFF","vira-pink-200":"#FFE0FC","vira-pink-250":"#FFD7F8","vira-pink-300":"#FFCBF2","vira-pink-350":"#FFB9E9","vira-pink-400":"#FF9BDF","vira-pink-450":"#FF6DD6","vira-pink-500":"#F04AC5","vira-pink-550":"#DD3EB4","vira-pink-600":"#CC37A7","vira-pink-650":"#BC3099","vira-pink-700":"#A82988","vira-pink-750":"#8F2674","vira-pink-800":"#752361","vira-pink-850":"#641C53","vira-pink-900":"#561848","vira-pink-950":"#49153E","vira-pink-1000":"#3B1333","vira-grey-100":"#F9F9F9","vira-grey-150":"#F2F2F2","vira-grey-200":"#EBEBEB","vira-grey-250":"#E5E5E5","vira-grey-300":"#DEDEDE","vira-grey-350":"#D2D2D2","vira-grey-400":"#C2C2C2","vira-grey-450":"#ADADAD","vira-grey-500":"#999999","vira-grey-550":"#8A8A8A","vira-grey-600":"#7F7F7F","vira-grey-650":"#747474","vira-grey-700":"#676767","vira-grey-750":"#585858","vira-grey-800":"#494949","vira-grey-850":"#3E3E3E","vira-grey-900":"#353535","vira-grey-950":"#2D2D2D","vira-grey-1000":"#252525"}),Le=am({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:d["vira-red-1000"]},"vira-red-foreground-body":{foreground:d["vira-red-750"]},"vira-red-foreground-non-body":{foreground:d["vira-red-650"]},"vira-red-foreground-header":{foreground:d["vira-red-500"]},"vira-red-foreground-placeholder":{foreground:d["vira-red-400"]},"vira-red-foreground-decoration":{foreground:d["vira-red-350"]},"vira-red-foreground-invisible":{foreground:d["vira-red-250"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-red-1000"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-red-700"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-red-600"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-red-450"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-red-400"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-red-350"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-red-200"]},"vira-red-behind-fg-small-body":{background:d["vira-red-250"]},"vira-red-behind-fg-body":{background:d["vira-red-350"]},"vira-red-behind-fg-non-body":{background:d["vira-red-400"]},"vira-red-behind-fg-header":{background:d["vira-red-500"]},"vira-red-behind-fg-placeholder":{background:d["vira-red-650"]},"vira-red-behind-fg-decoration":{background:d["vira-red-750"]},"vira-red-behind-fg-invisible":{background:d["vira-red-1000"]},"vira-red-on-self-small-body":{foreground:d["vira-red-850"],background:d["vira-red-100"]},"vira-red-on-self-body":{foreground:d["vira-red-850"],background:d["vira-red-250"]},"vira-red-on-self-non-body":{foreground:d["vira-red-850"],background:d["vira-red-350"]},"vira-red-on-self-header":{foreground:d["vira-red-850"],background:d["vira-red-450"]},"vira-red-on-self-placeholder":{foreground:d["vira-red-850"],background:d["vira-red-500"]},"vira-red-on-self-decoration":{foreground:d["vira-red-850"],background:d["vira-red-650"]},"vira-red-on-self-invisible":{foreground:d["vira-red-850"],background:d["vira-red-1000"]},"vira-yellow-foreground-small-body":{foreground:d["vira-yellow-1000"]},"vira-yellow-foreground-body":{foreground:d["vira-yellow-750"]},"vira-yellow-foreground-non-body":{foreground:d["vira-yellow-650"]},"vira-yellow-foreground-header":{foreground:d["vira-yellow-500"]},"vira-yellow-foreground-placeholder":{foreground:d["vira-yellow-400"]},"vira-yellow-foreground-decoration":{foreground:d["vira-yellow-350"]},"vira-yellow-foreground-invisible":{foreground:d["vira-yellow-250"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-1000"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-700"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-600"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-450"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-400"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-350"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-250"]},"vira-yellow-behind-fg-small-body":{background:d["vira-yellow-250"]},"vira-yellow-behind-fg-body":{background:d["vira-yellow-350"]},"vira-yellow-behind-fg-non-body":{background:d["vira-yellow-400"]},"vira-yellow-behind-fg-header":{background:d["vira-yellow-500"]},"vira-yellow-behind-fg-placeholder":{background:d["vira-yellow-650"]},"vira-yellow-behind-fg-decoration":{background:d["vira-yellow-750"]},"vira-yellow-behind-fg-invisible":{background:d["vira-yellow-1000"]},"vira-yellow-on-self-small-body":{foreground:d["vira-yellow-850"],background:d["vira-yellow-100"]},"vira-yellow-on-self-body":{foreground:d["vira-yellow-850"],background:d["vira-yellow-300"]},"vira-yellow-on-self-non-body":{foreground:d["vira-yellow-850"],background:d["vira-yellow-350"]},"vira-yellow-on-self-header":{foreground:d["vira-yellow-850"],background:d["vira-yellow-450"]},"vira-yellow-on-self-placeholder":{foreground:d["vira-yellow-850"],background:d["vira-yellow-550"]},"vira-yellow-on-self-decoration":{foreground:d["vira-yellow-850"],background:d["vira-yellow-650"]},"vira-yellow-on-self-invisible":{foreground:d["vira-yellow-850"],background:d["vira-yellow-1000"]},"vira-green-foreground-small-body":{foreground:d["vira-green-1000"]},"vira-green-foreground-body":{foreground:d["vira-green-800"]},"vira-green-foreground-non-body":{foreground:d["vira-green-650"]},"vira-green-foreground-header":{foreground:d["vira-green-550"]},"vira-green-foreground-placeholder":{foreground:d["vira-green-450"]},"vira-green-foreground-decoration":{foreground:d["vira-green-350"]},"vira-green-foreground-invisible":{foreground:d["vira-green-250"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-green-1000"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-green-750"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-green-650"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-green-500"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-green-400"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-green-350"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-green-250"]},"vira-green-behind-fg-small-body":{background:d["vira-green-250"]},"vira-green-behind-fg-body":{background:d["vira-green-350"]},"vira-green-behind-fg-non-body":{background:d["vira-green-450"]},"vira-green-behind-fg-header":{background:d["vira-green-550"]},"vira-green-behind-fg-placeholder":{background:d["vira-green-650"]},"vira-green-behind-fg-decoration":{background:d["vira-green-800"]},"vira-green-behind-fg-invisible":{background:d["vira-green-1000"]},"vira-green-on-self-small-body":{foreground:d["vira-green-850"],background:d["vira-green-100"]},"vira-green-on-self-body":{foreground:d["vira-green-850"],background:d["vira-green-300"]},"vira-green-on-self-non-body":{foreground:d["vira-green-850"],background:d["vira-green-400"]},"vira-green-on-self-header":{foreground:d["vira-green-850"],background:d["vira-green-450"]},"vira-green-on-self-placeholder":{foreground:d["vira-green-850"],background:d["vira-green-550"]},"vira-green-on-self-decoration":{foreground:d["vira-green-850"],background:d["vira-green-700"]},"vira-green-on-self-invisible":{foreground:d["vira-green-850"],background:d["vira-green-1000"]},"vira-teal-foreground-small-body":{foreground:d["vira-teal-1000"]},"vira-teal-foreground-body":{foreground:d["vira-teal-800"]},"vira-teal-foreground-non-body":{foreground:d["vira-teal-650"]},"vira-teal-foreground-header":{foreground:d["vira-teal-550"]},"vira-teal-foreground-placeholder":{foreground:d["vira-teal-450"]},"vira-teal-foreground-decoration":{foreground:d["vira-teal-350"]},"vira-teal-foreground-invisible":{foreground:d["vira-teal-250"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-teal-1000"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-teal-750"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-teal-600"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-teal-500"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-teal-400"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-teal-350"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-teal-250"]},"vira-teal-behind-fg-small-body":{background:d["vira-teal-250"]},"vira-teal-behind-fg-body":{background:d["vira-teal-350"]},"vira-teal-behind-fg-non-body":{background:d["vira-teal-450"]},"vira-teal-behind-fg-header":{background:d["vira-teal-500"]},"vira-teal-behind-fg-placeholder":{background:d["vira-teal-650"]},"vira-teal-behind-fg-decoration":{background:d["vira-teal-750"]},"vira-teal-behind-fg-invisible":{background:d["vira-teal-1000"]},"vira-teal-on-self-small-body":{foreground:d["vira-teal-850"],background:d["vira-teal-100"]},"vira-teal-on-self-body":{foreground:d["vira-teal-850"],background:d["vira-teal-300"]},"vira-teal-on-self-non-body":{foreground:d["vira-teal-850"],background:d["vira-teal-400"]},"vira-teal-on-self-header":{foreground:d["vira-teal-850"],background:d["vira-teal-450"]},"vira-teal-on-self-placeholder":{foreground:d["vira-teal-850"],background:d["vira-teal-550"]},"vira-teal-on-self-decoration":{foreground:d["vira-teal-850"],background:d["vira-teal-700"]},"vira-teal-on-self-invisible":{foreground:d["vira-teal-850"],background:d["vira-teal-1000"]},"vira-blue-foreground-small-body":{foreground:d["vira-blue-1000"]},"vira-blue-foreground-body":{foreground:d["vira-blue-750"]},"vira-blue-foreground-non-body":{foreground:d["vira-blue-650"]},"vira-blue-foreground-header":{foreground:d["vira-blue-500"]},"vira-blue-foreground-placeholder":{foreground:d["vira-blue-450"]},"vira-blue-foreground-decoration":{foreground:d["vira-blue-350"]},"vira-blue-foreground-invisible":{foreground:d["vira-blue-250"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-blue-1000"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-blue-750"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-blue-600"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-blue-450"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-blue-400"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-blue-350"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-blue-250"]},"vira-blue-behind-fg-small-body":{background:d["vira-blue-250"]},"vira-blue-behind-fg-body":{background:d["vira-blue-350"]},"vira-blue-behind-fg-non-body":{background:d["vira-blue-400"]},"vira-blue-behind-fg-header":{background:d["vira-blue-500"]},"vira-blue-behind-fg-placeholder":{background:d["vira-blue-650"]},"vira-blue-behind-fg-decoration":{background:d["vira-blue-750"]},"vira-blue-behind-fg-invisible":{background:d["vira-blue-1000"]},"vira-blue-on-self-small-body":{foreground:d["vira-blue-850"],background:d["vira-blue-100"]},"vira-blue-on-self-body":{foreground:d["vira-blue-850"],background:d["vira-blue-300"]},"vira-blue-on-self-non-body":{foreground:d["vira-blue-850"],background:d["vira-blue-350"]},"vira-blue-on-self-header":{foreground:d["vira-blue-850"],background:d["vira-blue-450"]},"vira-blue-on-self-placeholder":{foreground:d["vira-blue-850"],background:d["vira-blue-550"]},"vira-blue-on-self-decoration":{foreground:d["vira-blue-850"],background:d["vira-blue-650"]},"vira-blue-on-self-invisible":{foreground:d["vira-blue-850"],background:d["vira-blue-1000"]},"vira-accent-foreground-small-body":{foreground:d["vira-accent-1000"]},"vira-accent-foreground-body":{foreground:d["vira-accent-750"]},"vira-accent-foreground-non-body":{foreground:d["vira-accent-650"]},"vira-accent-foreground-header":{foreground:d["vira-accent-500"]},"vira-accent-foreground-placeholder":{foreground:d["vira-accent-450"]},"vira-accent-foreground-decoration":{foreground:d["vira-accent-350"]},"vira-accent-foreground-invisible":{foreground:d["vira-accent-250"]},"vira-accent-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-accent-1000"]},"vira-accent-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-accent-750"]},"vira-accent-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-accent-600"]},"vira-accent-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-accent-450"]},"vira-accent-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-accent-400"]},"vira-accent-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-accent-350"]},"vira-accent-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-accent-250"]},"vira-accent-behind-fg-small-body":{background:d["vira-accent-250"]},"vira-accent-behind-fg-body":{background:d["vira-accent-350"]},"vira-accent-behind-fg-non-body":{background:d["vira-accent-400"]},"vira-accent-behind-fg-header":{background:d["vira-accent-500"]},"vira-accent-behind-fg-placeholder":{background:d["vira-accent-650"]},"vira-accent-behind-fg-decoration":{background:d["vira-accent-750"]},"vira-accent-behind-fg-invisible":{background:d["vira-accent-1000"]},"vira-accent-on-self-small-body":{foreground:d["vira-accent-850"],background:d["vira-accent-100"]},"vira-accent-on-self-body":{foreground:d["vira-accent-850"],background:d["vira-accent-300"]},"vira-accent-on-self-non-body":{foreground:d["vira-accent-850"],background:d["vira-accent-350"]},"vira-accent-on-self-header":{foreground:d["vira-accent-850"],background:d["vira-accent-450"]},"vira-accent-on-self-placeholder":{foreground:d["vira-accent-850"],background:d["vira-accent-550"]},"vira-accent-on-self-decoration":{foreground:d["vira-accent-850"],background:d["vira-accent-650"]},"vira-accent-on-self-invisible":{foreground:d["vira-accent-850"],background:d["vira-accent-1000"]},"vira-purple-foreground-small-body":{foreground:d["vira-purple-1000"]},"vira-purple-foreground-body":{foreground:d["vira-purple-750"]},"vira-purple-foreground-non-body":{foreground:d["vira-purple-650"]},"vira-purple-foreground-header":{foreground:d["vira-purple-500"]},"vira-purple-foreground-placeholder":{foreground:d["vira-purple-400"]},"vira-purple-foreground-decoration":{foreground:d["vira-purple-350"]},"vira-purple-foreground-invisible":{foreground:d["vira-purple-250"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-purple-1000"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-purple-700"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-purple-600"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-purple-450"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-purple-400"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-purple-350"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-purple-200"]},"vira-purple-behind-fg-small-body":{background:d["vira-purple-250"]},"vira-purple-behind-fg-body":{background:d["vira-purple-350"]},"vira-purple-behind-fg-non-body":{background:d["vira-purple-400"]},"vira-purple-behind-fg-header":{background:d["vira-purple-500"]},"vira-purple-behind-fg-placeholder":{background:d["vira-purple-600"]},"vira-purple-behind-fg-decoration":{background:d["vira-purple-750"]},"vira-purple-behind-fg-invisible":{background:d["vira-purple-1000"]},"vira-purple-on-self-small-body":{foreground:d["vira-purple-850"],background:d["vira-purple-100"]},"vira-purple-on-self-body":{foreground:d["vira-purple-850"],background:d["vira-purple-300"]},"vira-purple-on-self-non-body":{foreground:d["vira-purple-850"],background:d["vira-purple-350"]},"vira-purple-on-self-header":{foreground:d["vira-purple-850"],background:d["vira-purple-450"]},"vira-purple-on-self-placeholder":{foreground:d["vira-purple-850"],background:d["vira-purple-500"]},"vira-purple-on-self-decoration":{foreground:d["vira-purple-850"],background:d["vira-purple-650"]},"vira-purple-on-self-invisible":{foreground:d["vira-purple-850"],background:d["vira-purple-1000"]},"vira-pink-foreground-small-body":{foreground:d["vira-pink-1000"]},"vira-pink-foreground-body":{foreground:d["vira-pink-750"]},"vira-pink-foreground-non-body":{foreground:d["vira-pink-650"]},"vira-pink-foreground-header":{foreground:d["vira-pink-500"]},"vira-pink-foreground-placeholder":{foreground:d["vira-pink-400"]},"vira-pink-foreground-decoration":{foreground:d["vira-pink-350"]},"vira-pink-foreground-invisible":{foreground:d["vira-pink-250"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-pink-1000"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-pink-700"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-pink-550"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-pink-450"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-pink-400"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-pink-350"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-pink-200"]},"vira-pink-behind-fg-small-body":{background:d["vira-pink-200"]},"vira-pink-behind-fg-body":{background:d["vira-pink-350"]},"vira-pink-behind-fg-non-body":{background:d["vira-pink-400"]},"vira-pink-behind-fg-header":{background:d["vira-pink-500"]},"vira-pink-behind-fg-placeholder":{background:d["vira-pink-600"]},"vira-pink-behind-fg-decoration":{background:d["vira-pink-750"]},"vira-pink-behind-fg-invisible":{background:d["vira-pink-1000"]},"vira-pink-on-self-small-body":{foreground:d["vira-pink-850"],background:d["vira-pink-100"]},"vira-pink-on-self-body":{foreground:d["vira-pink-850"],background:d["vira-pink-250"]},"vira-pink-on-self-non-body":{foreground:d["vira-pink-850"],background:d["vira-pink-350"]},"vira-pink-on-self-header":{foreground:d["vira-pink-850"],background:d["vira-pink-450"]},"vira-pink-on-self-placeholder":{foreground:d["vira-pink-850"],background:d["vira-pink-500"]},"vira-pink-on-self-decoration":{foreground:d["vira-pink-850"],background:d["vira-pink-650"]},"vira-pink-on-self-invisible":{foreground:d["vira-pink-850"],background:d["vira-pink-1000"]},"vira-grey-foreground-small-body":{foreground:d["vira-grey-1000"]},"vira-grey-foreground-body":{foreground:d["vira-grey-750"]},"vira-grey-foreground-non-body":{foreground:d["vira-grey-650"]},"vira-grey-foreground-header":{foreground:d["vira-grey-500"]},"vira-grey-foreground-placeholder":{foreground:d["vira-grey-450"]},"vira-grey-foreground-decoration":{foreground:d["vira-grey-350"]},"vira-grey-foreground-invisible":{foreground:d["vira-grey-250"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-grey-1000"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-grey-750"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-grey-600"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-grey-500"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-grey-400"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-grey-350"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-grey-250"]},"vira-grey-behind-fg-small-body":{background:d["vira-grey-250"]},"vira-grey-behind-fg-body":{background:d["vira-grey-350"]},"vira-grey-behind-fg-non-body":{background:d["vira-grey-400"]},"vira-grey-behind-fg-header":{background:d["vira-grey-500"]},"vira-grey-behind-fg-placeholder":{background:d["vira-grey-650"]},"vira-grey-behind-fg-decoration":{background:d["vira-grey-750"]},"vira-grey-behind-fg-invisible":{background:d["vira-grey-1000"]},"vira-grey-on-self-small-body":{foreground:d["vira-grey-850"],background:d["vira-grey-100"]},"vira-grey-on-self-body":{foreground:d["vira-grey-850"],background:d["vira-grey-300"]},"vira-grey-on-self-non-body":{foreground:d["vira-grey-850"],background:d["vira-grey-350"]},"vira-grey-on-self-header":{foreground:d["vira-grey-850"],background:d["vira-grey-450"]},"vira-grey-on-self-placeholder":{foreground:d["vira-grey-850"],background:d["vira-grey-550"]},"vira-grey-on-self-decoration":{foreground:d["vira-grey-850"],background:d["vira-grey-650"]},"vira-grey-on-self-invisible":{foreground:d["vira-grey-850"],background:d["vira-grey-1000"]}});E$(Le,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:d["vira-red-250"]},"vira-red-foreground-body":{foreground:d["vira-red-350"]},"vira-red-foreground-non-body":{foreground:d["vira-red-400"]},"vira-red-foreground-header":{foreground:d["vira-red-450"]},"vira-red-foreground-placeholder":{foreground:d["vira-red-600"]},"vira-red-foreground-decoration":{foreground:d["vira-red-750"]},"vira-red-foreground-invisible":{foreground:d["vira-red-1000"]},"vira-red-behind-bg-small-body":{background:d["vira-red-250"]},"vira-red-behind-bg-body":{background:d["vira-red-350"]},"vira-red-behind-bg-non-body":{background:d["vira-red-400"]},"vira-red-behind-bg-header":{background:d["vira-red-500"]},"vira-red-behind-bg-placeholder":{background:d["vira-red-650"]},"vira-red-behind-bg-decoration":{background:d["vira-red-750"]},"vira-red-behind-bg-invisible":{background:d["vira-red-1000"]},"vira-red-behind-fg-small-body":{background:d["vira-red-1000"]},"vira-red-behind-fg-body":{background:d["vira-red-700"]},"vira-red-behind-fg-non-body":{background:d["vira-red-600"]},"vira-red-behind-fg-header":{background:d["vira-red-450"]},"vira-red-behind-fg-placeholder":{background:d["vira-red-400"]},"vira-red-behind-fg-decoration":{background:d["vira-red-350"]},"vira-red-behind-fg-invisible":{background:d["vira-red-200"]},"vira-red-on-self-small-body":{foreground:d["vira-red-200"],background:d["vira-red-1000"]},"vira-red-on-self-body":{foreground:d["vira-red-200"],background:d["vira-red-950"]},"vira-red-on-self-non-body":{foreground:d["vira-red-200"],background:d["vira-red-700"]},"vira-red-on-self-header":{foreground:d["vira-red-200"],background:d["vira-red-550"]},"vira-red-on-self-placeholder":{foreground:d["vira-red-200"],background:d["vira-red-450"]},"vira-red-on-self-decoration":{foreground:d["vira-red-200"],background:d["vira-red-400"]},"vira-red-on-self-invisible":{foreground:d["vira-red-200"],background:d["vira-red-350"]},"vira-yellow-foreground-small-body":{foreground:d["vira-yellow-250"]},"vira-yellow-foreground-body":{foreground:d["vira-yellow-350"]},"vira-yellow-foreground-non-body":{foreground:d["vira-yellow-400"]},"vira-yellow-foreground-placeholder":{foreground:d["vira-yellow-600"]},"vira-yellow-foreground-decoration":{foreground:d["vira-yellow-750"]},"vira-yellow-foreground-invisible":{foreground:d["vira-yellow-1000"]},"vira-yellow-behind-bg-small-body":{background:d["vira-yellow-250"]},"vira-yellow-behind-bg-body":{background:d["vira-yellow-350"]},"vira-yellow-behind-bg-non-body":{background:d["vira-yellow-400"]},"vira-yellow-behind-bg-header":{background:d["vira-yellow-500"]},"vira-yellow-behind-bg-placeholder":{background:d["vira-yellow-650"]},"vira-yellow-behind-bg-decoration":{background:d["vira-yellow-750"]},"vira-yellow-behind-bg-invisible":{background:d["vira-yellow-1000"]},"vira-yellow-behind-fg-small-body":{background:d["vira-yellow-1000"]},"vira-yellow-behind-fg-body":{background:d["vira-yellow-700"]},"vira-yellow-behind-fg-non-body":{background:d["vira-yellow-600"]},"vira-yellow-behind-fg-header":{background:d["vira-yellow-450"]},"vira-yellow-behind-fg-placeholder":{background:d["vira-yellow-400"]},"vira-yellow-behind-fg-decoration":{background:d["vira-yellow-350"]},"vira-yellow-behind-fg-invisible":{background:d["vira-yellow-250"]},"vira-yellow-on-self-small-body":{foreground:d["vira-yellow-200"],background:d["vira-yellow-1000"]},"vira-yellow-on-self-body":{foreground:d["vira-yellow-200"],background:d["vira-yellow-900"]},"vira-yellow-on-self-non-body":{foreground:d["vira-yellow-200"],background:d["vira-yellow-700"]},"vira-yellow-on-self-header":{foreground:d["vira-yellow-200"],background:d["vira-yellow-550"]},"vira-yellow-on-self-placeholder":{foreground:d["vira-yellow-200"],background:d["vira-yellow-450"]},"vira-yellow-on-self-decoration":{foreground:d["vira-yellow-200"],background:d["vira-yellow-400"]},"vira-yellow-on-self-invisible":{foreground:d["vira-yellow-200"],background:d["vira-yellow-350"]},"vira-green-foreground-small-body":{foreground:d["vira-green-250"]},"vira-green-foreground-body":{foreground:d["vira-green-350"]},"vira-green-foreground-non-body":{foreground:d["vira-green-450"]},"vira-green-foreground-header":{foreground:d["vira-green-500"]},"vira-green-foreground-placeholder":{foreground:d["vira-green-650"]},"vira-green-foreground-decoration":{foreground:d["vira-green-750"]},"vira-green-foreground-invisible":{foreground:d["vira-green-1000"]},"vira-green-behind-bg-small-body":{background:d["vira-green-250"]},"vira-green-behind-bg-body":{background:d["vira-green-350"]},"vira-green-behind-bg-non-body":{background:d["vira-green-450"]},"vira-green-behind-bg-header":{background:d["vira-green-550"]},"vira-green-behind-bg-placeholder":{background:d["vira-green-650"]},"vira-green-behind-bg-decoration":{background:d["vira-green-800"]},"vira-green-behind-bg-invisible":{background:d["vira-green-1000"]},"vira-green-behind-fg-small-body":{background:d["vira-green-1000"]},"vira-green-behind-fg-body":{background:d["vira-green-750"]},"vira-green-behind-fg-non-body":{background:d["vira-green-650"]},"vira-green-behind-fg-header":{background:d["vira-green-500"]},"vira-green-behind-fg-placeholder":{background:d["vira-green-400"]},"vira-green-behind-fg-decoration":{background:d["vira-green-350"]},"vira-green-behind-fg-invisible":{background:d["vira-green-250"]},"vira-green-on-self-small-body":{foreground:d["vira-green-200"],background:d["vira-green-1000"]},"vira-green-on-self-body":{foreground:d["vira-green-200"],background:d["vira-green-900"]},"vira-green-on-self-non-body":{foreground:d["vira-green-200"],background:d["vira-green-700"]},"vira-green-on-self-header":{foreground:d["vira-green-200"],background:d["vira-green-600"]},"vira-green-on-self-placeholder":{foreground:d["vira-green-200"],background:d["vira-green-450"]},"vira-green-on-self-decoration":{foreground:d["vira-green-200"],background:d["vira-green-400"]},"vira-green-on-self-invisible":{foreground:d["vira-green-200"],background:d["vira-green-350"]},"vira-teal-foreground-small-body":{foreground:d["vira-teal-250"]},"vira-teal-foreground-body":{foreground:d["vira-teal-350"]},"vira-teal-foreground-non-body":{foreground:d["vira-teal-450"]},"vira-teal-foreground-header":{foreground:d["vira-teal-500"]},"vira-teal-foreground-placeholder":{foreground:d["vira-teal-650"]},"vira-teal-foreground-decoration":{foreground:d["vira-teal-750"]},"vira-teal-foreground-invisible":{foreground:d["vira-teal-1000"]},"vira-teal-behind-bg-small-body":{background:d["vira-teal-250"]},"vira-teal-behind-bg-body":{background:d["vira-teal-350"]},"vira-teal-behind-bg-non-body":{background:d["vira-teal-450"]},"vira-teal-behind-bg-placeholder":{background:d["vira-teal-650"]},"vira-teal-behind-bg-decoration":{background:d["vira-teal-750"]},"vira-teal-behind-bg-invisible":{background:d["vira-teal-1000"]},"vira-teal-behind-fg-small-body":{background:d["vira-teal-1000"]},"vira-teal-behind-fg-body":{background:d["vira-teal-750"]},"vira-teal-behind-fg-non-body":{background:d["vira-teal-600"]},"vira-teal-behind-fg-placeholder":{background:d["vira-teal-400"]},"vira-teal-behind-fg-decoration":{background:d["vira-teal-350"]},"vira-teal-behind-fg-invisible":{background:d["vira-teal-250"]},"vira-teal-on-self-small-body":{foreground:d["vira-teal-200"],background:d["vira-teal-1000"]},"vira-teal-on-self-body":{foreground:d["vira-teal-200"],background:d["vira-teal-900"]},"vira-teal-on-self-non-body":{foreground:d["vira-teal-200"],background:d["vira-teal-700"]},"vira-teal-on-self-header":{foreground:d["vira-teal-200"],background:d["vira-teal-600"]},"vira-teal-on-self-placeholder":{foreground:d["vira-teal-200"],background:d["vira-teal-450"]},"vira-teal-on-self-decoration":{foreground:d["vira-teal-200"],background:d["vira-teal-400"]},"vira-teal-on-self-invisible":{foreground:d["vira-teal-200"],background:d["vira-teal-350"]},"vira-blue-foreground-small-body":{foreground:d["vira-blue-250"]},"vira-blue-foreground-body":{foreground:d["vira-blue-350"]},"vira-blue-foreground-non-body":{foreground:d["vira-blue-400"]},"vira-blue-foreground-placeholder":{foreground:d["vira-blue-600"]},"vira-blue-foreground-decoration":{foreground:d["vira-blue-750"]},"vira-blue-foreground-invisible":{foreground:d["vira-blue-1000"]},"vira-blue-behind-bg-small-body":{background:d["vira-blue-250"]},"vira-blue-behind-bg-body":{background:d["vira-blue-350"]},"vira-blue-behind-bg-non-body":{background:d["vira-blue-400"]},"vira-blue-behind-bg-header":{background:d["vira-blue-500"]},"vira-blue-behind-bg-placeholder":{background:d["vira-blue-650"]},"vira-blue-behind-bg-decoration":{background:d["vira-blue-750"]},"vira-blue-behind-bg-invisible":{background:d["vira-blue-1000"]},"vira-blue-behind-fg-small-body":{background:d["vira-blue-1000"]},"vira-blue-behind-fg-body":{background:d["vira-blue-750"]},"vira-blue-behind-fg-non-body":{background:d["vira-blue-600"]},"vira-blue-behind-fg-header":{background:d["vira-blue-450"]},"vira-blue-behind-fg-placeholder":{background:d["vira-blue-400"]},"vira-blue-behind-fg-decoration":{background:d["vira-blue-350"]},"vira-blue-behind-fg-invisible":{background:d["vira-blue-250"]},"vira-blue-on-self-small-body":{foreground:d["vira-blue-200"],background:d["vira-blue-1000"]},"vira-blue-on-self-body":{foreground:d["vira-blue-200"],background:d["vira-blue-900"]},"vira-blue-on-self-non-body":{foreground:d["vira-blue-200"],background:d["vira-blue-700"]},"vira-blue-on-self-header":{foreground:d["vira-blue-200"],background:d["vira-blue-550"]},"vira-blue-on-self-placeholder":{foreground:d["vira-blue-200"],background:d["vira-blue-450"]},"vira-blue-on-self-decoration":{foreground:d["vira-blue-200"],background:d["vira-blue-400"]},"vira-blue-on-self-invisible":{foreground:d["vira-blue-200"],background:d["vira-blue-350"]},"vira-accent-foreground-small-body":{foreground:d["vira-accent-250"]},"vira-accent-foreground-body":{foreground:d["vira-accent-350"]},"vira-accent-foreground-non-body":{foreground:d["vira-accent-400"]},"vira-accent-foreground-placeholder":{foreground:d["vira-accent-600"]},"vira-accent-foreground-decoration":{foreground:d["vira-accent-750"]},"vira-accent-foreground-invisible":{foreground:d["vira-accent-1000"]},"vira-accent-behind-bg-small-body":{background:d["vira-accent-250"]},"vira-accent-behind-bg-body":{background:d["vira-accent-350"]},"vira-accent-behind-bg-non-body":{background:d["vira-accent-400"]},"vira-accent-behind-bg-header":{background:d["vira-accent-500"]},"vira-accent-behind-bg-placeholder":{background:d["vira-accent-650"]},"vira-accent-behind-bg-decoration":{background:d["vira-accent-750"]},"vira-accent-behind-bg-invisible":{background:d["vira-accent-1000"]},"vira-accent-behind-fg-small-body":{background:d["vira-accent-1000"]},"vira-accent-behind-fg-body":{background:d["vira-accent-750"]},"vira-accent-behind-fg-non-body":{background:d["vira-accent-600"]},"vira-accent-behind-fg-header":{background:d["vira-accent-450"]},"vira-accent-behind-fg-placeholder":{background:d["vira-accent-400"]},"vira-accent-behind-fg-decoration":{background:d["vira-accent-350"]},"vira-accent-behind-fg-invisible":{background:d["vira-accent-250"]},"vira-accent-on-self-small-body":{foreground:d["vira-accent-200"],background:d["vira-accent-1000"]},"vira-accent-on-self-body":{foreground:d["vira-accent-200"],background:d["vira-accent-900"]},"vira-accent-on-self-non-body":{foreground:d["vira-accent-200"],background:d["vira-accent-700"]},"vira-accent-on-self-header":{foreground:d["vira-accent-200"],background:d["vira-accent-550"]},"vira-accent-on-self-placeholder":{foreground:d["vira-accent-200"],background:d["vira-accent-450"]},"vira-accent-on-self-decoration":{foreground:d["vira-accent-200"],background:d["vira-accent-400"]},"vira-accent-on-self-invisible":{foreground:d["vira-accent-200"],background:d["vira-accent-350"]},"vira-purple-foreground-small-body":{foreground:d["vira-purple-250"]},"vira-purple-foreground-body":{foreground:d["vira-purple-350"]},"vira-purple-foreground-non-body":{foreground:d["vira-purple-400"]},"vira-purple-foreground-header":{foreground:d["vira-purple-450"]},"vira-purple-foreground-placeholder":{foreground:d["vira-purple-600"]},"vira-purple-foreground-decoration":{foreground:d["vira-purple-750"]},"vira-purple-foreground-invisible":{foreground:d["vira-purple-1000"]},"vira-purple-behind-bg-small-body":{background:d["vira-purple-250"]},"vira-purple-behind-bg-body":{background:d["vira-purple-350"]},"vira-purple-behind-bg-non-body":{background:d["vira-purple-400"]},"vira-purple-behind-bg-header":{background:d["vira-purple-500"]},"vira-purple-behind-bg-placeholder":{background:d["vira-purple-600"]},"vira-purple-behind-bg-decoration":{background:d["vira-purple-750"]},"vira-purple-behind-bg-invisible":{background:d["vira-purple-1000"]},"vira-purple-behind-fg-small-body":{background:d["vira-purple-1000"]},"vira-purple-behind-fg-body":{background:d["vira-purple-700"]},"vira-purple-behind-fg-non-body":{background:d["vira-purple-600"]},"vira-purple-behind-fg-header":{background:d["vira-purple-450"]},"vira-purple-behind-fg-placeholder":{background:d["vira-purple-400"]},"vira-purple-behind-fg-decoration":{background:d["vira-purple-350"]},"vira-purple-behind-fg-invisible":{background:d["vira-purple-200"]},"vira-purple-on-self-small-body":{foreground:d["vira-purple-200"],background:d["vira-purple-1000"]},"vira-purple-on-self-body":{foreground:d["vira-purple-200"],background:d["vira-purple-900"]},"vira-purple-on-self-non-body":{foreground:d["vira-purple-200"],background:d["vira-purple-700"]},"vira-purple-on-self-header":{foreground:d["vira-purple-200"],background:d["vira-purple-550"]},"vira-purple-on-self-placeholder":{foreground:d["vira-purple-200"],background:d["vira-purple-450"]},"vira-purple-on-self-decoration":{foreground:d["vira-purple-200"],background:d["vira-purple-400"]},"vira-purple-on-self-invisible":{foreground:d["vira-purple-200"],background:d["vira-purple-350"]},"vira-pink-foreground-small-body":{foreground:d["vira-pink-200"]},"vira-pink-foreground-body":{foreground:d["vira-pink-350"]},"vira-pink-foreground-non-body":{foreground:d["vira-pink-400"]},"vira-pink-foreground-header":{foreground:d["vira-pink-450"]},"vira-pink-foreground-placeholder":{foreground:d["vira-pink-600"]},"vira-pink-foreground-decoration":{foreground:d["vira-pink-750"]},"vira-pink-foreground-invisible":{foreground:d["vira-pink-1000"]},"vira-pink-behind-bg-small-body":{background:d["vira-pink-200"]},"vira-pink-behind-bg-body":{background:d["vira-pink-350"]},"vira-pink-behind-bg-non-body":{background:d["vira-pink-400"]},"vira-pink-behind-bg-header":{background:d["vira-pink-500"]},"vira-pink-behind-bg-placeholder":{background:d["vira-pink-600"]},"vira-pink-behind-bg-decoration":{background:d["vira-pink-750"]},"vira-pink-behind-bg-invisible":{background:d["vira-pink-1000"]},"vira-pink-behind-fg-small-body":{background:d["vira-pink-1000"]},"vira-pink-behind-fg-body":{background:d["vira-pink-700"]},"vira-pink-behind-fg-non-body":{background:d["vira-pink-550"]},"vira-pink-behind-fg-header":{background:d["vira-pink-450"]},"vira-pink-behind-fg-placeholder":{background:d["vira-pink-400"]},"vira-pink-behind-fg-decoration":{background:d["vira-pink-350"]},"vira-pink-behind-fg-invisible":{background:d["vira-pink-200"]},"vira-pink-on-self-small-body":{foreground:d["vira-pink-200"],background:d["vira-pink-1000"]},"vira-pink-on-self-body":{foreground:d["vira-pink-200"],background:d["vira-pink-950"]},"vira-pink-on-self-non-body":{foreground:d["vira-pink-200"],background:d["vira-pink-700"]},"vira-pink-on-self-header":{foreground:d["vira-pink-200"],background:d["vira-pink-550"]},"vira-pink-on-self-placeholder":{foreground:d["vira-pink-200"],background:d["vira-pink-450"]},"vira-pink-on-self-decoration":{foreground:d["vira-pink-200"],background:d["vira-pink-400"]},"vira-pink-on-self-invisible":{foreground:d["vira-pink-200"],background:d["vira-pink-300"]},"vira-grey-foreground-small-body":{foreground:d["vira-grey-250"]},"vira-grey-foreground-body":{foreground:d["vira-grey-350"]},"vira-grey-foreground-non-body":{foreground:d["vira-grey-400"]},"vira-grey-foreground-placeholder":{foreground:d["vira-grey-600"]},"vira-grey-foreground-decoration":{foreground:d["vira-grey-750"]},"vira-grey-foreground-invisible":{foreground:d["vira-grey-1000"]},"vira-grey-behind-bg-small-body":{background:d["vira-grey-250"]},"vira-grey-behind-bg-body":{background:d["vira-grey-350"]},"vira-grey-behind-bg-non-body":{background:d["vira-grey-400"]},"vira-grey-behind-bg-placeholder":{background:d["vira-grey-650"]},"vira-grey-behind-bg-decoration":{background:d["vira-grey-750"]},"vira-grey-behind-bg-invisible":{background:d["vira-grey-1000"]},"vira-grey-behind-fg-small-body":{background:d["vira-grey-1000"]},"vira-grey-behind-fg-body":{background:d["vira-grey-750"]},"vira-grey-behind-fg-non-body":{background:d["vira-grey-600"]},"vira-grey-behind-fg-placeholder":{background:d["vira-grey-400"]},"vira-grey-behind-fg-decoration":{background:d["vira-grey-350"]},"vira-grey-behind-fg-invisible":{background:d["vira-grey-250"]},"vira-grey-on-self-small-body":{foreground:d["vira-grey-200"],background:d["vira-grey-1000"]},"vira-grey-on-self-body":{foreground:d["vira-grey-200"],background:d["vira-grey-900"]},"vira-grey-on-self-non-body":{foreground:d["vira-grey-200"],background:d["vira-grey-700"]},"vira-grey-on-self-header":{foreground:d["vira-grey-200"],background:d["vira-grey-600"]},"vira-grey-on-self-placeholder":{foreground:d["vira-grey-200"],background:d["vira-grey-450"]},"vira-grey-on-self-decoration":{foreground:d["vira-grey-200"],background:d["vira-grey-400"]},"vira-grey-on-self-invisible":{foreground:d["vira-grey-200"],background:d["vira-grey-350"]}}});const k1="8px",Ze=It({"vira-form-border-color":Le.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":Le.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":Le.colors[Ye].background.value,"vira-form-foreground-color":Le.colors[Ye].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":Le.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":Le.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":Le.colors["vira-accent-behind-bg-invisible"].background.value,"vira-form-selection-active-color":Le.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-error-color":Le.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":Le.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":Le.colors["vira-red-behind-bg-body"].background.value,"vira-form-warning-color":Le.colors["vira-yellow-behind-bg-non-body"].background.value,"vira-form-warning-hover-color":Le.colors["vira-yellow-behind-bg-header"].background.value,"vira-form-warning-active-color":Le.colors["vira-yellow-behind-bg-body"].background.value,"vira-form-positive-color":Le.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-positive-hover-color":Le.colors["vira-green-behind-bg-header"].background.value,"vira-form-positive-active-color":Le.colors["vira-green-behind-bg-body"].background.value,"vira-form-success-color":Le.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":k1,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":Le.colors["vira-accent-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":k`calc(var(--vira-form-radius, ${Re(k1)}) + 2px)`,"vira-form-plain-color":d["vira-grey-100"].value,"vira-form-plain-hover-color":Le.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":Le.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":Le.colors["vira-accent-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":Le.colors["vira-accent-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":Le.colors["vira-accent-behind-bg-body"].background.value,"vira-form-danger-color":Le.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":Le.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":Le.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":Le.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":Le.colors["vira-grey-foreground-decoration"].foreground.value});function to(e){return M.isString(e)?Re(e):e.value}i(to,"cssValueOrRaw");function cd({elementBorderSize:e="1px",outlineGap:r="2px",outlineWidth:t="2px",noNesting:n,outlineColor:o=Ze["vira-form-focus-outline-color"],borderRadius:a=Ze["vira-form-focus-outline-border-radius"],renderInside:s}={}){const l=k`calc(${to(r)})`,u=k`calc(${to(t)} + ${to(r)} + ${to(e)})`,f=s?k`
              content: '';
              top: ${l};
              left: ${l};
              position: absolute;
              width: calc(100% - calc(${l} * 2));
              height: calc(100% - calc(${l} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${to(t)} solid ${to(o)};
              border-radius: ${to(a)};
              z-index: 100;
          `:k`
              content: '';
              top: calc(${u} * -1);
              left: calc(${u} * -1);
              position: absolute;
              width: calc(100% + calc(${u} * 2));
              height: calc(100% + calc(${u} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${to(t)} solid ${to(o)};
              border-radius: ${to(a)};
              z-index: 100;
          `;return n?f:k`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${f}
        }
    `}i(cd,"createFocusStyles");const dd=k`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Pm=It({"vira-monospace":"monospace"}),$1=It({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),fL={menuShadow:k`
        filter: drop-shadow(0px 5px 5px ${$1["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:k`
        box-shadow: 0 5px 15px ${$1["modal-shadow-color"].value};
    `},ph=k`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,x1="vira-",Ef=rm({assertInputs:i(e=>{if(!e.tagName.startsWith(x1))throw new Error(`Tag name should start with '${x1}' but got '${e.tagName}'`)},"assertInputs")});function mh({input:e,matcher:r}){return!e||!r?!0:e.length>1?e.split("").every(t=>mh({input:t,matcher:r})):r instanceof RegExp?!!e.match(r):r.includes(e)}i(mh,"doesMatch");function gL({value:e,allowed:r,blocked:t}){const n=String(e),o=r?mh({input:n,matcher:r}):!0,a=t?mh({input:n,matcher:t}):!1;return o&&!a}i(gL,"isAllowed");function bh(e){const r=String(e.value);if(!e.value)return{filtered:r,blocked:""};const{filtered:t,blocked:n}=r.split("").reduce((o,a)=>(gL({...e,value:a})?o.filtered.push(a):o.blocked.push(a),o),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}i(bh,"filterTextInputValue");function hL({inputs:e,previousValue:r,event:t,inputBlockedCallback:n,newValueCallback:o}){const a=Ea(t,HTMLInputElement),s=M.hasKey(t,"data")&&kd.isString(t.data)||"";if(s){const{blocked:u}=bh({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const l=bh({value:a.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;a.value!==l&&(a.value=l),r!==l&&o(l)}i(hL,"textInputListener");const ut=Ef()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":i(({inputs:e})=>!!e.fitContainer||!!e.icon?.size,"vira-icon-fit-container")},styles:i(({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        svg * {
            vector-effect: non-scaling-stroke;
        }

        ${e["vira-icon-fit-container"].selector} {
            > *,
            svg {
                height: 100%;
                width: 100%;
            }
        }
    `,"styles"),render({inputs:e,host:r}){if(e.icon)e.icon.size&&(r.style.width=ra(e.icon.size),r.style.height=ra(e.icon.size));else return"";return e.icon.svgTemplate}});var Qi;(function(e){e.Default="text",e.Password="password",e.Email="email",e.Number="number"})(Qi||(Qi={}));const oi=Ef()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:i(({hostClasses:e,cssVars:r})=>k`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${Ze["vira-form-foreground-color"].value};
            }

            label {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 2px;
                width: 100%;
                max-width: 100%;
                cursor: text;

                & .input-label {
                    font-weight: ${Ze["vira-form-label-font-weight"].value};
                    text-align: left;
                    flex-shrink: 0;
                    flex-wrap: wrap;
                }
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${Ao};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${ph};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Ao};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${Ze["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${Ze["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Ao};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${r["vira-input-padding-horizontal"].value};
                border-radius: ${Ze["vira-form-radius"].value};
                background-color: ${Ze["vira-form-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            .left-side-icon {
                margin-right: calc(${r["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Ao};
                cursor: text;
                margin: ${r["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                text-align: inherit;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
                outline: none;

                &:focus:focus-visible:not([disabled]) ~ .focus-border {
                    ${cd({elementBorderSize:"1px",noNesting:!0})}
                }
            }

            ::selection {
                background: ${Ze["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${Ze["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${Ze["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${ph};
            }

            button {
                ${Ao};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Hx["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${Ze["vira-form-placeholder-color"].value};
            }

            .clear-x-button:hover {
                color: ${Ze["vira-form-error-color"].value};
            }

            .clear-x-button:active {
                color: ${Ze["vira-form-error-active-color"].value};
            }

            .show-password-button:hover {
                color: ${Ze["vira-form-accent-primary-color"].value};
            }

            .show-password-button:active {
                color: ${Ze["vira-form-accent-primary-active-color"].value};
            }

            ${e["vira-input-error"].selector} {
                & .wrapper-border {
                    border-color: ${Ze["vira-form-error-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${dd};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,"styles"),events:{valueChange:Pe(),inputBlocked:Pe()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Io(32)}},hostClasses:{"vira-input-disabled":i(({inputs:e})=>!!e.disabled,"vira-input-disabled"),"vira-input-fit-text":i(({inputs:e})=>!!e.fitText,"vira-input-fit-text"),"vira-input-clear-button-shown":i(({inputs:e})=>!!e.showClearButton,"vira-input-clear-button-shown"),"vira-input-error":i(({inputs:e})=>!!e.hasError,"vira-input-error")},render:i(({inputs:e,dispatch:r,state:t,updateState:n,events:o,host:a})=>{const{filtered:s}=bh({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),l=e.icon?m`
                  <${ut.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${ut}>
              `:ee,u=e.fitText?k`
                  width: ${t.forcedInputWidth}px;
              `:ee,f=L("mousedown",p=>{const b=Ea(p,HTMLElement,{useOriginalTarget:!0}),v=ur.instanceOf(a.shadowRoot.querySelector("input"),HTMLInputElement);b!==v&&(p.preventDefault(),v.focus())}),g=e.disableBrowserHelps||e.type===Qi.Password,h=m`
            <span class="input-wrapper" ${e.label?ee:f}>
                ${l}
                ${Wr(!!e.fitText,m`
                        <span
                            class="size-span"
                            ${em(({contentRect:p})=>{n({forcedInputWidth:p.width})})}
                        >
                            <pre>${s||e.placeholder||ee}</pre>
                        </span>
                    `)}

                <input
                    id=${Ue(e.label?t.randomId:void 0)}
                    aria-label=${Ue(e.label||void 0)}
                    autofocus=${!1}
                    type=${pL(e.type,t.showPassword)}
                    style=${u}
                    autocomplete=${Ue(g?"off":void 0)}
                    autocorrect=${Ue(g?"off":void 0)}
                    autocapitalize=${Ue(g?"off":void 0)}
                    spellcheck=${Ue(g?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${L("input",p=>{hL({inputs:e,previousValue:s,event:p,inputBlockedCallback(b){r(new o.inputBlocked(b))},newValueCallback(b){r(new o.valueChange(b))}})})}
                    placeholder=${Ue(e.placeholder||void 0)}
                    ${Cn(e.attributePassthrough)}
                />

                ${Wr(!!(e.showClearButton&&e.value),m`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${L("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault()})}
                            ${L("click",()=>{e.disabled||r(new o.valueChange(""))})}
                        >
                            <${ut.assign({icon:lL})}></${ut}>
                        </button>
                    `)}
                ${Wr(e.type===Qi.Password,m`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${L("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault()})}
                            ${L("click",()=>{n({showPassword:!t.showPassword})})}
                        >
                            <${ut.assign({icon:t.showPassword?dL:cL})}></${ut}>
                        </button>
                    `)}
                ${Wr(!!e.suffix,m`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?m`
                <label for=${t.randomId} ${f}>
                    <span class="input-label">${e.label}</span>
                    ${h}
                </label>
            `:h},"render")});function pL(e,r){return e===Qi.Password&&r?Qi.Default:e||Qi.Default}i(pL,"calculateEffectiveInputType");const W0=Xn()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:i(({cssVars:e})=>k`
        :host {
            display: flex;
            align-items: center;
            font-family: ${Pm["vira-monospace"].value};
            gap: 2px;
        }

        input[type='range'] {
            flex-grow: 1;
            appearance: none;
            background: ${e["vir-color-slider-gradient"].value};
            height: 9px;
            border-radius: 4px;
            cursor: pointer;
        }

        ${oi} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,"styles"),events:{valueChange:Pe()},render({inputs:e,events:r,dispatch:t,cssVars:n}){const o=oo[e.colorFormatName],a=o.coords[e.colorCoordinateName];if(!a)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const s=10,l=FD(s,h=>{const p=a.min+(a.max-a.min)*(h/s);return new Mo({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:p}}).toCss()[o.conversionFormat]}),u=k`linear-gradient(to right, ${Re(l.join(","))})`,f=ur.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),g=a.radix?Math.round(f).toString(a.radix).toUpperCase().padStart(a.radixPad||0,"0"):String(f);return m`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${k`
                    ${n["vir-color-slider-gradient"].name}: ${u};
                `}
                step=${Math.pow(10,a.digits?-a.digits:0)}
                ${NN(h=>{Er.instanceOf(h,HTMLInputElement),h.min=String(a.min),h.max=String(a.max),h.value=String(f)})}
                ${L("input",h=>{const p=Ea(h,HTMLInputElement),b=Number(p.value);isNaN(b)||t(new r.valueChange(b))})}
            />
            <${oi.assign({value:g})}
                ${L(oi.events.valueChange,h=>{const p=a.radix?parseInt(h.detail,a.radix):Number(h.detail);isNaN(p)||t(new r.valueChange(p))})}
            ></${oi}>
        `}}),K0=Xn()({tagName:"vir-color-format-sliders",styles:k`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${Tm};
        }
    `,events:{colorChange:Pe()},render({inputs:e,dispatch:r,events:t}){const n=oo[e.colorFormatName],o=Ke(n.coords).map(a=>m`
                    <${W0.assign({color:e.color,colorCoordinateName:a,colorFormatName:e.colorFormatName})}
                        ${L(W0.events.valueChange,s=>{const l=e.color.clone();l.set({[e.colorFormatName]:{[a]:s.detail}});const u=l.toCss()[n.conversionFormat];r(new t.colorChange(u))})}
                    ></${W0}>
                `);return m`
            ${e.showFormatName?m`
                      <h3>${e.colorFormatName}</h3>
                  `:ee}
            ${o}
        `}}),H0=Xn()({tagName:"vir-color-swatch",styles:k`
        :host {
            display: flex;
            height: 400px;
            width: 400px;
            border: 1px solid black;
            max-height: 100%;
            max-width: 100%;
            container-type: size;
            overflow: hidden;
        }

        div {
            flex-grow: 1;
            height: 100%;
            max-height: 100%;
            width: 100%;
            max-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `,render({inputs:e}){const r=e.backgroundColor||e.foregroundColor,t=e.foregroundColor||"transparent";return m`
            <div
                style=${k`
                    background-color: ${Re(r)};
                    color: ${Re(t)};
                `}
            >
                <slot></slot>
            </div>
        `}}),G0=Xn()({tagName:"vir-contrast-indicator",styles:k`
        :host {
            display: inline-flex;
            max-width: 100%;
            font-size: 12px;
        }

        .wrapper {
            text-align: center;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            max-width: 100%;
            color: #aaa;
        }

        .${Re(ne.Invisible)} {
            color: red;
        }
        .${Re(ne.Decoration)} {
            color: #ff6600;
        }
        .${Re(ne.Placeholder)} {
            color: #a5a520;
        }

        .gauge {
            align-self: center;
            background-color: currentColor;
            display: flex;
            padding: 1px;
            gap: 1px;
            margin-bottom: 2px;
            /* Sure sure if I actually want to keep this. */
            display: none;
        }

        .gauge-level {
            width: 10px;
            height: 2px;

            &.active {
                background-color: white;
            }
        }

        .gauge-text + .gauge-text {
            border-left: 1px solid #ccc;
            padding-left: 1ex;
        }
    `,render({inputs:e}){const r=uf.toReversed().slice(1).map(o=>m`
                    <div
                        class="gauge-level ${Gr({active:o.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),t=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return m`
            <div title=${t} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${r}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${FB[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),D1=Xn()({tagName:"vir-color-pair",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"vir-color-pair-no-contrast-tips":i(({inputs:e,state:r})=>!e.showContrast&&!r.forceShowEverything,"vir-color-pair-no-contrast-tips")},styles:i(({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Ao};
            cursor: pointer;
            font-size: 32px;
            padding-left: 12px;
            padding-right: 0;
            border: 1px solid #ccc;
            border-radius: 8px;
            display: flex;
            gap: 8px;
            align-items: baseline;

            & b {
                margin: 12px 0;
                font-weight: bold;
                text-decoration: underline;
            }

            & .square {
                margin: 12px 0;
                width: 24px;
                height: 24px;
                background-color: currentColor;
            }
        }
        ${e["vir-color-pair-no-contrast-tips"].selector} {
            & .needed-size-wrapper {
                display: none;
            }

            & .color-preview {
                padding: 4px 24px;
            }
        }

        .needed-size-wrapper {
            align-self: stretch;
            width: 56px;
            position: relative;
            overflow: hidden;
            border-left: 1px solid #ccc;
        }

        .needed-size {
            top: 0;
            height: 100%;
            display: flex;
            align-items: center;
            left: 6px;
            position: absolute;

            & span {
                margin: 0 auto;
            }
        }

        .css-var-names {
            font-family: ${Pm["vira-monospace"].value};
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${Tm};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${G0} {
            margin-top: 1px;
        }
    `,"styles"),render({state:e,updateState:r,inputs:t}){const n=["foreground","background"].map(l=>{const u=[t.color[l].name,t.showVarValues||e.forceShowEverything?":":""].filter(M.isTruthy).join(""),f=t.showVarValues||e.forceShowEverything?m`
                          <span>${t.color[l].default}</span>
                      `:ee;return m`
                <p>
                    <span>${u}</span>
                    ${f}
                </p>
            `}),o=t.showVarNames||e.forceShowEverything?m`
                      <div class="css-var-names">${n}</div>
                  `:ee,a=e.previewElement?CB({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,s=a&&(t.showContrast||e.forceShowEverything)?m`
                      <${G0.assign({contrast:a,fontWeight:t.fontWeight})}></${G0}>
                  `:ee;return m`
            <button
                ${L("click",()=>{r({forceShowEverything:!e.forceShowEverything})})}
                ${la(l=>{r({previewElement:ur.instanceOf(l,HTMLElement)})})}
                class="color-preview"
                style=${k`
                    color: ${Re(t.color.foreground.default)};
                    background: ${Re(t.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${k`
                                visibility: ${Re((a?.fontSizes[400]||1/0)>150?"hidden":"visible")};
                                font-weight: ${t.fontWeight};
                                font-size: ${a?a.fontSizes[400]:14}px;
                            `}
                        >
                            Min
                        </span>
                    </span>
                </div>
            </button>
            ${s} ${o}
        `}});function C1({open:e,callback:r,popUpManager:t,host:n,options:o}){if(e){const a=t.showPopUp(n,o);r?.(a)}else t.removePopUp(),r?.(void 0)}i(C1,"triggerPopUpState");function vh(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}i(vh,"isInputLikeElement");const E1={top:0,left:0,right:0,bottom:0};class Gx extends xd("hide-pop-up"){static{i(this,"HidePopUpEvent")}}class Zx extends Ht()("nav-select"){static{i(this,"NavSelectEvent")}}class mL{static{i(this,"PopUpManager")}navController;listenTarget=new mu;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(r,t){this.navController=r,this.options={...this.options,...t}}attachGlobalListeners(){this.cleanupCallbacks=[N$(!1,r=>{r||this.removePopUp()}),this.navController.listen(um,r=>{const t=r.composedPath()[0];t instanceof Element&&vh(t)||r.detail.success&&(this.listenTarget.dispatch(new Zx({detail:r.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),r.stopImmediatePropagation(),r.preventDefault())}),Ll("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Ll("keydown",r=>{const t=r.code;if(t==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=r.composedPath()[0];if(n instanceof Element&&vh(n))return;t==="ArrowDown"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:qt.Down,allowWrapping:!1})):t==="ArrowUp"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:qt.Up,allowWrapping:!1})):t==="ArrowLeft"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:qt.Left,allowWrapping:!1})):t==="ArrowRight"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:qt.Right,allowWrapping:!1})):(t==="Enter"||t==="Return"||t==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(r.stopImmediatePropagation(),r.preventDefault())}})]}listen(r,t,n){return this.listenTarget.listen(r,t,n)}removePopUp(){this.cleanupCallbacks.forEach(r=>r()),this.listenTarget.dispatch(new Gx)}showPopUp(r,t){this.lastRootElement=r;const n={...this.options,...t},o=m$(r);Er.instanceOf(o,HTMLElement);const a=r.getBoundingClientRect(),s=o.getBoundingClientRect(),l=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,f=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-l,bottom:s.bottom-u},g=qe(E1,v=>a[v]),h=qe(E1,v=>{const $=f[v],C=g[v];return Math.abs($-C)}),p=h.top>h.bottom+n.verticalDiffThreshold&&h.bottom<n.minDownSpace,b=h.left>h.right+n.horizontalDiffThreshold&&h.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!p,popRight:!b,positions:{container:f,root:g,diff:h}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Jo;(function(e){e.Left="left",e.Right="right",e.Both="both",e.Auto="auto"})(Jo||(Jo={}));const rl=Ef()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new mL(new I$(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-disabled"),"vira-pop-up-trigger-inside-focus":i(({inputs:e})=>!!e.useInsideFocus,"vira-pop-up-trigger-inside-focus"),"vira-pop-up-trigger-outside-focus":i(({inputs:e})=>!e.useInsideFocus,"vira-pop-up-trigger-outside-focus")},styles:i(({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Ao};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;
        }

        ${e["vira-pop-up-trigger-inside-focus"].selector} .dropdown-wrapper {
            ${cd({renderInside:!0})}
        }
        ${e["vira-pop-up-trigger-outside-focus"].selector} .dropdown-wrapper {
            ${cd()}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${ph};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${dd}
            pointer-events: auto;
        }

        ${e["vira-pop-up-trigger-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            align-items: flex-start;

            /* highest possible z-index */
            z-index: 2147483647;

            & > * {
                pointer-events: auto;
                max-width: 100%;
            }

            &.right-aligned {
                align-items: flex-end;
            }
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
        }
    `,"styles"),events:{navSelect:Pe(),openChange:Pe(),init:Pe()},cleanup({state:e,updateState:r}){r({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:r,host:t,inputs:n,dispatch:o,events:a}){e.popUpManager.listen(Gx,()=>{if(r({showPopUpResult:void 0}),o(new a.openChange(void 0)),n.focusOnClose&&!n.isDisabled){const s=t.shadowRoot.querySelector(".dropdown-wrapper");Er.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(Zx,s=>{n.keepOpenAfterInteraction||C1({open:!1,callback(l){r({showPopUpResult:l})},host:t,popUpManager:e.popUpManager}),o(new a.navSelect(s.detail))}),o(new a.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:r,state:t,inputs:n,updateState:o,host:a,slotNames:s}){function l({emitEvent:v,open:$},C){if(t.showPopUpResult&&n.keepOpenAfterInteraction&&C){const E=a.shadowRoot.querySelector(".dropdown-trigger");if(E&&!C.composedPath().includes(E))return}C1({open:$,callback(E){o({showPopUpResult:E}),v&&e(new r.openChange(E))},host:a,popUpManager:t.popUpManager})}i(l,"triggerPopUp"),n.isDisabled?l({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&t.showPopUpResult?l({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!t.showPopUpResult&&l({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor===Jo.Auto||n.horizontalAnchor===void 0?t.showPopUpResult?.popRight?Jo.Left:Jo.Right:n.horizontalAnchor,f=u===Jo.Right&&t.showPopUpResult?n.ignoreMaxWidth?k`
                          left: unset;
                      `:k`
                          left: -${t.showPopUpResult.positions.diff.left}px;
                      `:k`
                      left: ${n.popUpOffset?.left||0}px;
                  `,g=t.showPopUpResult&&u===Jo.Left?n.ignoreMaxWidth?k`
                          right: unset;
                      `:k`
                          right: -${t.showPopUpResult.positions.diff.right}px;
                      `:k`
                      right: ${n.popUpOffset?.right||0}px;
                  `,h=k`
            ${f}
            ${g}
        `,p=t.showPopUpResult?t.showPopUpResult.popDown?n.ignoreMaxHeight?k`
                          bottom: unset;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${h}
                      `:k`
                          bottom: -${t.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${h}
                      `:n.ignoreMaxHeight?k`
                        top: unset;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${h}
                    `:k`
                        top: -${t.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${h}
                    `:void 0;function b(v){l({emitEvent:!0,open:!t.showPopUpResult},v)}return i(b,"respondToClick"),m`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Gr({open:!!t.showPopUpResult,"open-upwards":!t.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!t.showPopUpResult}
                ${L("keydown",v=>{!t.showPopUpResult&&v.code.startsWith("Arrow")&&l({emitEvent:!0,open:!0},v)})}
                ${L("click",v=>{if(v.detail===0){let $=!1;if(b$(({element:C})=>vh(C)?($=!0,!0):!1),$)return;b(v)}else if(v.button===0&&t.showPopUpResult){const $=a.shadowRoot.querySelector(".dropdown-trigger");$&&!v.composedPath().includes($)&&l({emitEvent:!0,open:!1},v)}})}
                ${L("mousedown",v=>{if(v.button!==0)return;const $=ur.instanceOf(a.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);v.composedPath().includes($)&&b(v)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${Gr({"right-aligned":u===Jo.Right})}"
                    style=${p}
                >
                    ${Wr(!!t.showPopUpResult,m`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),Z0=Ef()({tagName:"vira-select",state(){return{randomId:Io(32),cleanupListeners:void 0}},events:{valueChange:Pe()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":i(({inputs:e})=>!!e.disabled,"vira-select-disabled"),"vira-select-error":i(({inputs:e})=>!!e.hasError,"vira-select-error"),"vira-select-not-raw":i(({inputs:e})=>!e.rawSelect,"vira-select-not-raw")},styles:i(({hostClasses:e,cssVars:r})=>k`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${Ze["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Ao};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            cursor: pointer;

            & select {
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                color: inherit;
                font: inherit;
                outline: none;
                width: 100%;
                border: none;
                background: none;
                border-radius: inherit;
                cursor: pointer;
                /* Prevent the left pixel of text getting cut off. */
                padding-left: 0.5px;
                padding-right: 28px;
                overflow: hidden;
                text-overflow: ellipsis;

                &.placeholder {
                    color: ${Ze["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${r["vira-select-icon-padding"].value};
                }
            }

            & ${ut} {
                position: absolute;
                pointer-events: none;

                &.trigger-icon {
                    transform: rotate(180deg);
                    right: 3px;
                }

                &.input-icon {
                    left: 10px;
                }
            }
        }

        .trigger-icon {
            width: 24px;
            aspect-ratio: 1;
        }

        ${e["vira-select-not-raw"].selector} {
            .select-wrapper {
                border-radius: ${Ze["vira-form-radius"].value};
                color: ${Ze["vira-form-foreground-color"].value};
                background-color: ${Ze["vira-form-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                cursor: pointer;

                & select {
                    padding: ${r["vira-select-padding-vertical"].value} 31px
                        ${r["vira-select-padding-vertical"].value}
                        ${r["vira-select-padding-horizontal"].value};

                    &:focus:focus-visible:not([aria-disabled='true']) ~ .focus-border {
                        ${cd({elementBorderSize:"1px",noNesting:!0})}
                    }
                }

                & .border-style {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: ${Ze["vira-form-radius"].value};
                    z-index: 0;
                    pointer-events: none;
                }

                & .wrapper-border {
                    top: -1px;
                    left: -1px;
                    border: 1px solid ${Ze["vira-form-border-color"].value};
                    transition: border
                        ${Hx["vira-interaction-animation-duration"].value};
                }
            }
        }

        label {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 2px;
            width: 100%;
            max-width: 100%;

            & .select-label {
                font-weight: ${Ze["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${dd}
            }
            ${ut} {
                ${dd}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${Ze["vira-form-error-color"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanupListeners?.();function n(){return ur.instanceOf(t.shadowRoot.querySelector("select"),HTMLSelectElement)}i(n,"getSelectElement");const o=[Un(t,"mousedown",a=>{const s=n();a.composedPath().includes(s)||(a.preventDefault(),a.stopPropagation(),s.showPicker&&s.showPicker())}),Un(t,"click",a=>{const s=n();a.composedPath().includes(s)||(a.preventDefault(),a.stopPropagation(),s.showPicker&&s.showPicker())})];r({cleanupListeners:i(()=>{o.forEach(a=>a())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e,state:r,dispatch:t,events:n}){const o=e.value||void 0,a=e.placeholder||o==null?m`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:ee,s=m`
            <span class="select-wrapper">
                <select
                    .value=${Ue(o)}
                    class=${Gr({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Ue(e.label?r.randomId:void 0)}
                    aria-label=${Ue(e.label||void 0)}
                    aria-disabled=${Ue(e.disabled?"true":void 0)}
                    ${L("input",l=>{const u=Ea(l,HTMLSelectElement),f=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(g=>g.value===o)),t(new n.valueChange(f))})}
                    ${Cn(e.attributePassthrough?.select)}
                >
                    ${a}
                    ${e.options.map(l=>m`
                            <option
                                ?selected=${l.value===o}
                                aria-label=${l.label}
                                ?disabled=${l.disabled}
                                value=${l.value}
                            >
                                ${l.label}
                            </option>
                        `)}
                </select>
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <select> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>

                <${ut.assign({icon:e.icon})}
                    class="input-icon"
                ></${ut}>
                <${ut.assign({icon:uL})}
                    class="trigger-icon"
                ></${ut}>
            </span>
        `;return e.label?m`
                <label for=${r.randomId} ${Cn(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}});class Y0 extends Ht()("local-storage-client-all-values-event"){static{i(this,"LocalStorageClientAllValuesEvent")}}class bL{static{i(this,"LocalStorageClient")}shapes;options;listenTarget=new mu;keyEvents;get AllValuesType(){throw new Error("Cannot use AllValuesType as a runtime value. It is a type only.")}get ValueType(){throw new Error("Cannot use ValueType as a runtime value. It is a type only.")}constructor(r,t={}){this.shapes=r,this.options=t,this.storeName=t.storeName||"local-storage-client",this.keyEvents=qe(r,n=>class extends Ht()(`local-storage-client-${String(n)}-event`){}),this.get=qe(this.shapes,n=>(o={})=>this.getAllValues(o)[n]),this.listen=qe(this.shapes,n=>o=>this.listenTarget.listen(this.keyEvents[n],async a=>{await o(a.detail)})),this.set=qe(this.shapes,n=>o=>{Jc(o,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const a=this.getAllValues();return a[n]=o,globalThis.localStorage.setItem(this.storeName,JSON.stringify(a)),this.listenTarget.dispatch(new Y0({detail:a})),this.listenTarget.dispatch(new this.keyEvents[n]({detail:o})),o}),this.delete=qe(this.shapes,n=>()=>{const o=this.getAllValues();delete o[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(o)),this.listenTarget.dispatch(new Y0({detail:o})),this.listenTarget.dispatch(new this.keyEvents[n]({detail:void 0}))})}storeName;getAllValues({throwErrorOnFailure:r=!1}={}){return Sw(()=>{const t=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return Mw(t,(n,o)=>{const a=this.shapes[n];if(a){if(r)Jc(o,a,{allowExtraKeys:!0});else if(!ri(o,a,{allowExtraKeys:!0}))return;return{key:n,value:o}}})},{handleError:i(t=>{if(r)throw ga(t,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}},"handleError")})}listenToAllValues(r){return this.listenTarget.listen(Y0,async t=>{await r(t.detail)})}listen;get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}destroy(){this.listenTarget.destroy()}}const J0=new bL({lastFormat:aa(vi)}),vL=ns(vi).map(e=>({value:e,label:e.toUpperCase()})),tl=Xn()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:as.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:as.Length}},state(){return{selectedFormatName:J0.get.lastFormat()||vi.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":i(({inputs:e})=>!!e.alwaysShowPicker,"vir-color-picker-always-show")},styles:i(({cssVars:e,hostClasses:r})=>k`
        :host {
            display: inline-flex;
        }

        ${r["vir-color-picker-always-show"].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${Ao}
            cursor: pointer;
            display: flex;
        }

        ${rl} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${H0} {
                width: ${e["vir-color-picker-swatch-width"].value};
                height: ${e["vir-color-picker-swatch-height"].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${Pm["vira-monospace"].value};
            font-size: 12px;
            color: #666;
            display: flex;
            justify-content: center;
            gap: 2px;
            align-items: center;

            & ${ut} {
                width: 18px;
                aspect-ratio: 1;
            }

            &:hover {
                color: #000;
            }

            &:active {
                color: dodgerblue;
            }
        }

        .picker {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 16px;
            background: white;
            border: 1px solid #ccc;
            border-radius: 8px;
        }

        .pop-up .picker {
            ${fL.menuShadow}
        }

        .raw-input-wrapper {
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 12px;
            ${Ze["vira-form-border-color"].name}: #ddd;
            color: #666;

            & ${oi} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,"styles"),events:{colorChange:Pe()},render({inputs:e,dispatch:r,events:t,state:n,updateState:o}){const a=Mo.isColor(e.color)?e.color:new Mo(e.color||"black"),s=oo[n.selectedFormatName],l=n.rawInput??a.toCss()[s.rawSyntax],u=m`
            <div class="raw-input-wrapper">
                <${oi.assign({value:l})}
                    ${L(oi.events.valueChange,p=>{const b=p.detail;o({rawInput:b}),Mo.isValidColorString(b)&&r(new t.colorChange(b))})}
                ></${oi}>
                <button
                    class="code-button"
                    ${L("click",async()=>{await globalThis.navigator.clipboard.writeText(l)})}
                >
                    <${ut.assign({icon:w1,fitContainer:!0})}></${ut}>
                </button>
            </div>
        `,f=m`
            <button
                class="code-button"
                ${L("click",async()=>{await globalThis.navigator.clipboard.writeText(a.hexString)})}
            >
                <span>${a.hexString}</span>
                <${ut.assign({icon:w1,fitContainer:!0})}></${ut}>
            </button>
        `,g=m`
            <div class="swatch-wrapper">
                <${H0.assign({backgroundColor:a})}></${H0}>
                ${e.showHexValue?f:ee}
            </div>
        `,h=m`
            <div class="picker">
                <${Z0.assign({options:vL,value:n.selectedFormatName})}
                    ${L(Z0.events.valueChange,p=>{const b=kd.isEnumValue(p.detail,vi);b&&(o({selectedFormatName:b}),J0.set.lastFormat(b))})}
                ></${Z0}>
                ${u}
                <${K0.assign({color:a,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${L(K0.events.colorChange,p=>{r(new t.colorChange(p.detail)),o({rawInput:void 0})})}
                ></${K0}>
            </div>
        `;return e.alwaysShowPicker?m`
                ${g} ${h}
            `:m`
                <${rl.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${rl.slotNames.trigger}
                        ${L("mousedown",()=>{const p=J0.get.lastFormat();p&&o({selectedFormatName:p})})}
                    >
                        ${g}
                    </button>
                    <div class="pop-up" slot=${rl.slotNames.popUp}>
                        ${h}
                    </div>
                </${rl}>
            `}}),lc="None";function yL({parent:e,title:r,theme:t,hideInverseColors:n,overrides:o,useVerticalLayout:a,prefixGroupByCount:s=2,hideCopyCode:l}){const u={"Show Var Names":{controlType:ge.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:ge.Checkbox,initValue:!0}},f={"Theme Override":{controlType:ge.Dropdown,initValue:lc,options:[lc,...(o||[]).map(C=>{if(C.name===lc)throw new Error(`Cannot have theme override named '${lc}'`);return C.name})]}},g=Ee({parent:e,title:r,controls:u});function h({controls:C,theme:E,themeColorName:A}){const N=M.isKeyOf(A,E.colors)?E.colors[A]:void 0,_=M.isKeyOf(A,E.inverse)?E.inverse[A]:void 0;if(!N||!_)throw new Error(`No theme color found by name '${A}'`);const H=m`
            <${D1.assign({color:N,showVarValues:!0,showVarNames:C["Show Var Names"],showContrast:C["Show Contrast Tips"],fontWeight:400})}></${D1}>
        `;return m`
            <div class="with-inverse">${H}${ee}</div>
        `}i(h,"buildThemeColorTemplate");function p(C,E,A){const N=AD(Object.keys(E.colors),_=>s?_.split("-").slice(0,s).join("-"):_);Object.entries(N).forEach(([_,H])=>{H&&C({title:_,styles:k`
                        :host {
                            display: flex;
                            flex-direction: column;
                            gap: 4px;
                        }

                        .theme-wrapper {
                            display: contents;
                        }

                        .with-inverse {
                            display: flex;
                            flex-direction: column;
                            gap: 4px;
                        }
                    `,render({controls:ce}){const be=("Theme Override"in ce&&ce["Theme Override"]&&A?.find(Se=>Se.name===ce["Theme Override"])||void 0)?.asTheme||E;return m`
                            <div class="theme-wrapper">
                                ${H.map(Se=>h({controls:ce,theme:be,themeColorName:Se}))}
                            </div>
                        `}})})}i(p,"createThemePageExamples");const b=["Click a color preview to show CSS var names and values."],v=Ee({parent:g,title:"Default",descriptionParagraphs:b,useVerticalExamples:a,controls:{...f},defineExamples({defineExample:C}){p(C,t,o)}}),$=(o||[]).map(C=>Ee({parent:g,title:C.name,useVerticalExamples:a,descriptionParagraphs:b,defineExamples({defineExample:E}){p(E,C.asTheme,void 0)}}));return[g,v,...$]}i(yL,"createColorThemeBookPages");const wL=["pagehide","pageshow","popstate"],Ko=gr()({tagName:"vira-modal",events:{modalClose:Pe()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanupListeners:void 0}},cleanup({state:e}){e.cleanupListeners?.()},hostClasses:{"vira-modal-phone-size":i(({inputs:e})=>!!e.isMobileSize,"vira-modal-phone-size")},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-filter":"blur(3px)"},styles:i(({hostClasses:e,cssVars:r})=>k`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${sm};
        }

        dialog {
            ${sL(S.colors[Ye])}
            border: none;
            flex-direction: column;
            border-radius: inherit;
            padding: 0;
            overflow: hidden;
            min-width: inherit;
            min-height: inherit;
            max-width: calc(100dvw - 100px);
            max-height: calc(100dvh - 100px);
            ${rd.modal}

            &[open] {
                display: flex;
            }
            &::backdrop {
                background: ${R["vira-form-modal-backdrop-color"].value};
                backdrop-filter: ${r["vira-modal-backdrop-filter"].value};
            }

            & .modal-content-wrapper {
                overflow: hidden;
                display: flex;
                flex-direction: column;

                & .header {
                    padding: 16px 24px;
                    display: flex;
                    gap: 16px;
                    align-items: flex-start;

                    & .header-text-wrapper {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        align-self: center;
                        margin-right: auto;

                        & h1 {
                            font-size: 24px;
                        }

                        & sub {
                            font-size: 16px;
                            color: ${R["vira-form-secondary-body-foreground"].value};
                        }
                    }

                    & button.close {
                        ${qr};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${R["vira-form-radius"].value};

                        &:hover {
                            background-color: ${R["vira-form-selection-hover-color"].value};
                        }

                        & ${B} {
                            display: flex;
                        }
                    }
                }
                & .body {
                    padding: 16px 24px;
                    overflow: auto;
                    overscroll-behavior: contain;
                }
            }
        }

        ${e["vira-modal-phone-size"].selector} {
            & dialog {
                width: 100dvw;
                max-width: 100dvw;
            }
        }
    `,"styles"),render({inputs:e,state:r,updateState:t,events:n,dispatch:o,slotNames:a}){if(r.dialogElement&&e.open!==r.dialogElement.open&&(e.open?r.dialogElement.showModal():r.dialogElement.close()),r.previousOpenValue!==e.open&&(r.cleanupListeners?.(),t({previousOpenValue:e.open}),e.open)){const l=wL.map(u=>Ll(u,()=>{o(new n.modalClose)}));t({cleanupListeners:i(()=>{l.forEach(u=>u())},"cleanupListeners")})}function s(){e.open&&(r.cleanupListeners?.(),o(new n.modalClose))}return i(s,"close"),m`
            <dialog
                ${la(l=>{t({dialogElement:ur.instanceOf(l,HTMLDialogElement)})})}
                ${L("close",()=>{s()})}
                ${L("mousedown",l=>{r.contentElement&&!l.composedPath().includes(r.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${la(l=>{t({contentElement:ur.instanceOf(l,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${a.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?m`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:ee}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${L("click",()=>{r.dialogElement?.close()})}
                        >
                            <${B.assign({icon:km})}></${B}>
                        </button>
                    </div>
                    ${e.open?m`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:ee}
                </div>
            </dialog>
        `}}),$o=gr()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px"},styles:i(({cssVars:e})=>k`
        :host {
            /* Default width that can easily be overridden because it's applied on the host. */
            width: 100px;
            /* Default height that can easily be overridden because it's applied on the host. */
            height: 10px;
            display: inline-flex;
            align-items: center;
            border-radius: ${e["vira-progress-border-radius"].value};
            color: ${R["vira-form-accent-primary-color"].value};
            overflow: hidden;
        }

        .progress-bar {
            background-color: currentColor;
            height: 100%;
        }

        .background-bar {
            background-color: ${R["vira-form-filled-background-color"].value};
            height: 100%;
            flex-grow: 1;
        }
    `,"styles"),render({inputs:e,host:r}){const t=e.min||0,o=(e.max||100)-t,a=e.value-t,s=WD(Math.round(a/o*100),{min:0,max:100});return UB(r,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),m`
            <div
                class="progress-bar"
                style=${s?k`
                          width: ${s}%;
                      `:k`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function kL({element:e,widthElement:r,onChange:t}){const n=r||e;function o(){t(e.scrollWidth>n.clientWidth)}i(o,"checkOverflow");const a=new ResizeObserver(o);a.observe(e),n!==e&&a.observe(n);const s=new MutationObserver(o);return s.observe(e,{childList:!0,subtree:!0,characterData:!0}),o(),()=>{a.disconnect(),s.disconnect()}}i(kL,"createOverflowObserver");var ii=(e=>(e.Top="top",e.Bottom="bottom",e.Left="left",e.Right="right",e))(ii||{}),Yx=(e=>(e.Vertical="vertical",e.Horizontal="horizontal",e))(Yx||{});const On=gr()({tagName:"vira-tabs",events:{tabSelect:Pe()},state(){return{isOverflowing:!1,cleanupObserver:void 0}},hostClasses:{"vira-tabs-bar-top":i(({inputs:e})=>e.barDirection==="top","vira-tabs-bar-top"),"vira-tabs-bar-bottom":i(({inputs:e})=>!e.barDirection||e.barDirection==="bottom","vira-tabs-bar-bottom"),"vira-tabs-bar-left":i(({inputs:e})=>e.barDirection==="left","vira-tabs-bar-left"),"vira-tabs-bar-right":i(({inputs:e})=>e.barDirection==="right","vira-tabs-bar-right"),"vira-tabs-color-accent":i(({inputs:e})=>!e.colorVariant||e.colorVariant===te.Accent,"vira-tabs-color-accent"),"vira-tabs-color-plain":i(({inputs:e})=>e.colorVariant===te.Plain,"vira-tabs-color-plain"),"vira-tabs-icon-layout-vertical":i(({inputs:e})=>!e.iconLayout||e.iconLayout==="vertical","vira-tabs-icon-layout-vertical"),"vira-tabs-icon-layout-horizontal":i(({inputs:e})=>e.iconLayout==="horizontal","vira-tabs-icon-layout-horizontal"),"vira-tabs-overflowing":i(({state:e})=>e.isOverflowing,"vira-tabs-overflowing")},cssVars:{"vira-tabs-active-color":R["vira-form-accent-primary-color"].value,"vira-tabs-active-hover-color":R["vira-form-accent-primary-hover-color"].value,"vira-tabs-inactive-color":S.colors["vira-grey-foreground-header"].foreground.value,"vira-tabs-inactive-hover-color":S.colors["vira-grey-foreground-non-body"].foreground.value,"vira-tabs-bar-thickness":"3px"},styles:i(({hostClasses:e,cssVars:r})=>k`
            :host {
                display: flex;
                box-sizing: border-box;
                ${Ro};
                width: 100%;
            }

            .tabs-container {
                display: flex;
                position: relative;
                list-style: none;
                overflow: hidden;
                margin: 0;
                padding: 0;
            }

            ${e["vira-tabs-bar-top"].selector},
            ${e["vira-tabs-bar-bottom"].selector} {
                & .tabs-container {
                    flex-direction: row;
                }
            }

            ${e["vira-tabs-bar-left"].selector},
            ${e["vira-tabs-bar-right"].selector} {
                & .tabs-container {
                    flex-direction: column;
                }
            }

            li {
                ${qr};
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                color: ${r["vira-tabs-inactive-color"].value};
                font-size: ${R["vira-form-medium-text-size"].value};
                text-decoration: none;
                ${ua({renderInside:!0,elementBorderSize:"0"})}

                &::after {
                    content: '';
                    position: absolute;
                    background-color: transparent;
                }

                &:hover {
                    color: ${r["vira-tabs-inactive-hover-color"].value};
                }

                &.selected {
                    pointer-events: none;
                    color: ${r["vira-tabs-active-color"].value};

                    &::after {
                        background-color: ${r["vira-tabs-active-color"].value};
                    }
                }

                &.disabled {
                    ${ys};
                }
            }

            ${e["vira-tabs-bar-bottom"].selector} {
                border-bottom: 1px solid
                    ${S.colors["vira-grey-foreground-decoration"].foreground.value};

                & li::after {
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: ${r["vira-tabs-bar-thickness"].value};
                    border-radius: ${r["vira-tabs-bar-thickness"].value}
                        ${r["vira-tabs-bar-thickness"].value} 0 0;
                }
            }

            ${e["vira-tabs-bar-top"].selector} {
                border-top: 1px solid
                    ${S.colors["vira-grey-foreground-decoration"].foreground.value};

                & li::after {
                    top: 0;
                    left: 0;
                    right: 0;
                    height: ${r["vira-tabs-bar-thickness"].value};
                    border-radius: 0 0 ${r["vira-tabs-bar-thickness"].value}
                        ${r["vira-tabs-bar-thickness"].value};
                }
            }

            ${e["vira-tabs-bar-left"].selector} {
                border-left: 1px solid
                    ${S.colors["vira-grey-foreground-decoration"].foreground.value};

                & li::after {
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: ${r["vira-tabs-bar-thickness"].value};
                    border-radius: 0 ${r["vira-tabs-bar-thickness"].value}
                        ${r["vira-tabs-bar-thickness"].value} 0;
                }
            }

            ${e["vira-tabs-bar-right"].selector} {
                border-right: 1px solid
                    ${S.colors["vira-grey-foreground-decoration"].foreground.value};

                & li::after {
                    top: 0;
                    bottom: 0;
                    right: 0;
                    width: ${r["vira-tabs-bar-thickness"].value};
                    border-radius: ${r["vira-tabs-bar-thickness"].value} 0 0
                        ${r["vira-tabs-bar-thickness"].value};
                }
            }

            ${e["vira-tabs-color-plain"].selector} {
                ${r["vira-tabs-active-color"].name}: ${S.colors["vira-grey-foreground-small-body"].foreground.value};
                ${r["vira-tabs-active-hover-color"].name}: ${S.colors["vira-grey-foreground-body"].foreground.value};
            }

            .tab-content {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            ${e["vira-tabs-icon-layout-vertical"].selector} {
                & .tab-content {
                    flex-direction: column;
                    gap: 4px;
                }
            }

            ${e["vira-tabs-icon-layout-horizontal"].selector} {
                & .tab-content {
                    flex-direction: row;
                    gap: 8px;
                }
            }

            ${e["vira-tabs-overflowing"].selector} .tabs-container {
                visibility: hidden;
                height: 0;
            }

            .overflow-menu {
                display: none;
            }

            ${e["vira-tabs-overflowing"].selector} .overflow-menu {
                display: flex;
                align-items: center;
                width: fit-content;
            }

            ${$t} {
                text-decoration: none;
            }

            .tabs-container ${$t} {
                display: flex;
                padding: 8px 16px;
            }

            ${ni} {
                margin: 3px 0;
            }
        `,"styles"),cleanup({state:e}){e.cleanupObserver?.()},render({inputs:e,state:r,updateState:t,host:n,dispatch:o,events:a}){const s=Vt(e.tabs,f=>{if(f.isHidden)return;const g=b0(e.currentRoute,f.paths),h=f.icon?m`
                          <${B.assign({icon:f.icon})}></${B}>
                      `:ee,p=g||!!f.isDisabled;return m`
                    <li
                        class=${Gr({selected:g,disabled:!!f.isDisabled})}
                        role="presentation"
                        ${L("click",()=>{f.isDisabled||o(new a.tabSelect(f))})}
                    >
                        <${$t.assign({route:{router:e.router,route:{paths:f.paths.fullPaths},scrollToTop:!0},disableLinkStyles:!0,attributePassthrough:{a:{role:"tab","aria-selected":String(g),"aria-disabled":String(!!f.isDisabled),tabindex:p?"-1":void 0}}})}>
                            <span class="tab-content">
                                ${h}
                                <span class="tab-label">${f.label}</span>
                            </span>
                        </${$t}>
                    </li>
                `},M.isTruthy),l=e.tabs.find(f=>b0(e.currentRoute,f.paths)),u=cm(Vt(e.tabs,f=>{if(f.isHidden)return;const g=b0(e.currentRoute,f.paths);return{content:m`
                            <${$t.assign({route:{router:e.router,route:{paths:f.paths.fullPaths},scrollToTop:!0},disableLinkStyles:!0})}>
                                ${f.label}
                            </${$t}>
                        `,selected:g,disabled:f.isDisabled,onClick(){f.isDisabled||o(new a.tabSelect(f))}}},M.isTruthy));return m`
            <${ni.assign({horizontalAnchor:e.menuHorizontalAnchor,isDisabled:e.menuIsDisabled,popUpOffset:e.menuPopUpOffset,menuCornerStyle:lm.AllRounded})}
                class="overflow-menu"
            >
                <${ye.assign({text:l?.label||"",showMenuCaret:!0,colorVariant:te.Neutral})}
                    slot=${ni.slotNames.trigger}
                ></${ye}>
                ${u}
            </${ni}>
            <ul
                class="tabs-container"
                role="tablist"
                ${la(f=>{r.cleanupObserver?.(),t({cleanupObserver:kL({element:f,widthElement:n,onChange(g){t({isOverflowing:g})}})})})}
            >
                ${s}
            </ul>
        `}}),ou={value:k`transparent`};function nl(e){const r=Tl[e]["behind-bg"],t=Tl[e]["on-self"];return{[lr.Standard]:{idle:{textColor:r[ne.NonBodyText].foreground,backgroundColor:r[ne.NonBodyText].background,borderColor:r[ne.NonBodyText].background},hover:{textColor:r[ne.Header].foreground,backgroundColor:r[ne.Header].background,borderColor:r[ne.Header].background},active:{textColor:r[ne.NonBodyText].foreground,backgroundColor:r[ne.NonBodyText].background,borderColor:r[ne.NonBodyText].background}},[lr.Subtle]:{idle:{textColor:t[ne.BodyText].foreground,backgroundColor:t[ne.BodyText].background,borderColor:t[ne.BodyText].background},hover:{textColor:t[ne.NonBodyText].foreground,backgroundColor:t[ne.NonBodyText].background,borderColor:t[ne.NonBodyText].background},active:{textColor:t[ne.BodyText].foreground,backgroundColor:t[ne.BodyText].background,borderColor:t[ne.BodyText].background}}}}i(nl,"buildThemedTagColors");function ol(e){const r=Tl[e]["on-self"][ne.BodyText];return{idle:{textColor:r.foreground,backgroundColor:ou,borderColor:r.background},hover:{textColor:r.foreground,backgroundColor:Tl[e]["behind-bg"][ne.Invisible].background,borderColor:r.background},active:{textColor:r.foreground,backgroundColor:Tl[e]["behind-bg"][ne.Decoration].background,borderColor:r.background}}}i(ol,"buildThemedNotCheckedColors");const $L={[te.Plain]:{[lr.Standard]:{idle:{backgroundColor:S.inverse[Ye].background,textColor:S.inverse[Ye].foreground,borderColor:S.inverse[Ye].background},hover:{backgroundColor:S.colors["vira-grey-behind-bg-non-body"].background,textColor:S.colors["vira-grey-behind-bg-non-body"].foreground,borderColor:S.colors["vira-grey-behind-bg-non-body"].background},active:{backgroundColor:S.inverse[Ye].background,textColor:S.inverse[Ye].foreground,borderColor:S.inverse[Ye].background}},[lr.Subtle]:{idle:{backgroundColor:ou,textColor:S.colors[Ye].foreground,borderColor:ou},hover:{backgroundColor:S.colors["vira-grey-behind-fg-small-body"].background,textColor:S.colors["vira-grey-behind-fg-small-body"].foreground,borderColor:S.colors["vira-grey-behind-fg-small-body"].background},active:{backgroundColor:S.colors["vira-grey-behind-fg-body"].background,textColor:S.colors["vira-grey-behind-fg-body"].foreground,borderColor:S.colors["vira-grey-behind-fg-body"].background}}},[te.Accent]:nl(ao[te.Accent]),[te.Neutral]:nl(ao[te.Neutral]),[te.Danger]:nl(ao[te.Danger]),[te.Warning]:nl(ao[te.Warning]),[te.Positive]:nl(ao[te.Positive])},xL={[te.Plain]:{idle:{textColor:S.colors[Ye].foreground,backgroundColor:ou,borderColor:ou},hover:{backgroundColor:S.colors["vira-grey-behind-fg-small-body"].background,textColor:S.colors["vira-grey-behind-fg-small-body"].foreground,borderColor:S.colors["vira-grey-behind-fg-small-body"].background},active:{backgroundColor:S.colors["vira-grey-behind-fg-body"].background,textColor:S.colors["vira-grey-behind-fg-body"].foreground,borderColor:S.colors["vira-grey-behind-fg-body"].background}},[te.Accent]:ol(ao[te.Accent]),[te.Neutral]:ol(ao[te.Neutral]),[te.Danger]:ol(ao[te.Danger]),[te.Warning]:ol(ao[te.Warning]),[te.Positive]:ol(ao[te.Positive])},il=gr()({tagName:"vira-tag",cssVars:{"vira-tag-text-color":"transparent","vira-tag-background-color":"transparent","vira-tag-border-color":"transparent","vira-tag-hover-text-color":"transparent","vira-tag-hover-background-color":"transparent","vira-tag-hover-border-color":"transparent","vira-tag-active-text-color":"transparent","vira-tag-active-background-color":"transparent","vira-tag-active-border-color":"transparent","vira-tag-disabled-text-color":S.colors["vira-grey-behind-bg-decoration"].foreground.value,"vira-tag-disabled-background-color":S.colors["vira-grey-behind-bg-decoration"].background.value,"vira-tag-disabled-border-color":S.colors["vira-grey-behind-bg-decoration"].background.value,"vira-tag-border-radius":"1000px","vira-tag-gap":"6px","vira-tag-horizontal-padding":"12px","vira-tag-border-width":"2px"},events:{toggle:Pe(),cancel:Pe()},hostClasses:{"vira-tag-selectable":i(({inputs:e})=>M.isBoolean(e.isClickable?.selected),"vira-tag-selectable"),"vira-tag-checked":i(({inputs:e})=>!!e.isClickable?.selected,"vira-tag-checked"),"vira-tag-not-checked":i(({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-not-checked"),"vira-tag-cancellable":i(({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-cancellable"),"vira-tag-not-clickable":i(({inputs:e})=>!e.isClickable,"vira-tag-not-clickable"),"vira-tag-disabled":i(({inputs:e})=>!!e.disabled,"vira-tag-disabled"),"vira-tag-size-large":i(({inputs:e})=>e.size===Gi.Large,"vira-tag-size-large"),"vira-tag-size-medium":i(({inputs:e})=>!e.size||e.size===Gi.Medium,"vira-tag-size-medium"),"vira-tag-size-small":i(({inputs:e})=>e.size===Gi.Small,"vira-tag-size-small"),"vira-tag-emphasis-standard":i(({inputs:e})=>!e.emphasis||e.emphasis===lr.Standard,"vira-tag-emphasis-standard"),"vira-tag-emphasis-subtle":i(({inputs:e})=>e.emphasis===lr.Subtle,"vira-tag-emphasis-subtle"),"vira-tag-color-accent":i(({inputs:e})=>!e.color||e.color===te.Accent,"vira-tag-color-accent"),"vira-tag-color-plain":i(({inputs:e})=>e.color===te.Plain,"vira-tag-color-plain"),"vira-tag-color-neutral":i(({inputs:e})=>e.color===te.Neutral,"vira-tag-color-neutral"),"vira-tag-color-danger":i(({inputs:e})=>e.color===te.Danger,"vira-tag-color-danger"),"vira-tag-color-warning":i(({inputs:e})=>e.color===te.Warning,"vira-tag-color-warning"),"vira-tag-color-positive":i(({inputs:e})=>e.color===te.Positive,"vira-tag-color-positive")},styles:i(({cssVars:e,hostClasses:r})=>{function t(){const a=df.flatMap(s=>ca.map(l=>{const u=$L[l][s],f=r[`vira-tag-color-${l}`].selector,g=r[`vira-tag-emphasis-${s}`].selector;return k`
                        ${f}${g} {
                            ${e["vira-tag-background-color"].name}: ${u.idle.backgroundColor.value};
                            ${e["vira-tag-text-color"].name}: ${u.idle.textColor.value};
                            ${e["vira-tag-border-color"].name}: ${u.idle.borderColor.value};

                            ${e["vira-tag-hover-background-color"].name}: ${u.hover.backgroundColor.value};
                            ${e["vira-tag-hover-text-color"].name}: ${u.hover.textColor.value};
                            ${e["vira-tag-hover-border-color"].name}: ${u.hover.borderColor.value};

                            ${e["vira-tag-active-background-color"].name}: ${u.active.backgroundColor.value};
                            ${e["vira-tag-active-text-color"].name}: ${u.active.textColor.value};
                            ${e["vira-tag-active-border-color"].name}: ${u.active.borderColor.value};
                        }
                    `}));return Re(a.join(`
`))}i(t,"generateVariantCss");function n(){const a=ca.map(s=>{const l=xL[s],u=r[`vira-tag-color-${s}`].selector,f=r["vira-tag-not-checked"].selector;return k`
                    ${u}${f}${f}${f} {
                        ${e["vira-tag-background-color"].name}: ${l.idle.backgroundColor.value};
                        ${e["vira-tag-text-color"].name}: ${l.idle.textColor.value};
                        ${e["vira-tag-border-color"].name}: ${l.idle.borderColor.value};

                        ${e["vira-tag-hover-background-color"].name}: ${l.hover.backgroundColor.value};
                        ${e["vira-tag-hover-text-color"].name}: ${l.hover.textColor.value};
                        ${e["vira-tag-hover-border-color"].name}: ${l.hover.borderColor.value};

                        ${e["vira-tag-active-background-color"].name}: ${l.active.backgroundColor.value};
                        ${e["vira-tag-active-text-color"].name}: ${l.active.textColor.value};
                        ${e["vira-tag-active-border-color"].name}: ${l.active.borderColor.value};
                    }
                `});return Re(a.join(`
`))}i(n,"generateNotCheckedCss");function o(){const a=cf.map(s=>k`
                    ${r[`vira-tag-size-${s}`].selector} button {
                        height: ${Qg[s]}px;
                        font-size: ${R[`vira-form-${s}-text-size`].value};
                    }
                `);return Re(a.join(`
`))}return i(o,"generateSizeVariantCss"),k`
            :host {
                display: inline-flex;
            }

            ${o()}
            ${t()}
            ${n()}

            button {
                ${qr}
                flex-shrink: 0;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: ${e["vira-tag-gap"].value};
                border-radius: ${e["vira-tag-border-radius"].value};
                border-width: ${e["vira-tag-border-width"].value};
                border-style: solid;
                border-color: ${e["vira-tag-border-color"].value};
                color: ${e["vira-tag-text-color"].value};
                background-color: ${e["vira-tag-background-color"].value};
                box-sizing: border-box;
                padding: 0 ${e["vira-tag-horizontal-padding"].value};

                &[disabled] {
                    cursor: default;
                    pointer-events: none;
                }
            }

            button:hover {
                background-color: ${e["vira-tag-hover-background-color"].value};
                color: ${e["vira-tag-hover-text-color"].value};
                border-color: ${e["vira-tag-hover-border-color"].value};
            }

            button:active {
                background-color: ${e["vira-tag-active-background-color"].value};
                color: ${e["vira-tag-active-text-color"].value};
                border-color: ${e["vira-tag-active-border-color"].value};
            }

            .cancel-x,
            .selected-check,
            .text {
                height: 0;
                display: flex;
                align-items: center;
            }

            .cancel-x {
                display: none;
                margin-right: -2px;
            }

            .selected-check {
                margin-left: -2px;
                display: none;
                visibility: hidden;
            }

            ${r["vira-tag-selectable"].selector} .selected-check {
                display: flex;
            }
            ${r["vira-tag-checked"].selector} .selected-check {
                visibility: visible;
            }
            ${r["vira-tag-cancellable"].selector} .cancel-x {
                display: flex;
            }

            ${r["vira-tag-size-large"].selector} button {
                padding: 0 var(${e["vira-tag-horizontal-padding"].name}, 16px);
            }

            ${r["vira-tag-disabled"].selector} {
                cursor: not-allowed;
                ${Ro}

                & button {
                    color: ${e["vira-tag-disabled-text-color"].value};
                    background-color: ${e["vira-tag-disabled-background-color"].value};
                    border-color: ${e["vira-tag-disabled-border-color"].value};
                }
            }
        `},"styles"),render({inputs:e,dispatch:r,events:t}){const n=!e.isClickable||!!e.disabled;return m`
            <button
                ?disabled=${n}
                ${L("click",()=>{n||(e.isClickable?.selected!=null?r(new t.toggle(!e.isClickable.selected)):e.isClickable?.cancellable&&r(new t.cancel))})}
            >
                <${B.assign({icon:dm})}
                    class="selected-check"
                ></${B}>
                <span class="text">${String(e.text)}</span>
                <${B.assign({icon:hm})}
                    class="cancel-x"
                ></${B}>
            </button>
        `}});function Jx(e){return EN({async updateCallback(r,t){if(t&&r in t.cache)return{cache:t.cache,element:t.cache[r],key:r};const n=await e[r]();return{cache:{...t?.cache,[r]:n},element:n,key:r}}})}i(Jx,"createDynamicElementLoader");function Xx(e,{ready:r,loading:t,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?t(e.value.then(a=>({[a.key]:a.element}))):r({[e.value.key]:e.value.element})}i(Xx,"renderDynamicElement");const hn=rm(),$n=hn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:i(({cssVars:e})=>k`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,"styles"),render:i(({inputs:e,dispatch:r})=>{const t=e.router?.createRouteUrl({...e.route})??"#";return m`
            <a
                href=${t}
                ${L("click",n=>{(!e.router||C$(n))&&(n.preventDefault(),window.scrollTo(0,0),r(new ed(e.route)))})}
            >
                <slot></slot>
            </a>
        `},"render")});function DL(e,r){return e.entry.entryType===ct.Root?!1:e.entry.entryType===ct.Page||M.jsonEquals(r,e.fullUrlBreadcrumbs.slice(0,-1))?!0:M.jsonEquals(r?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}i(DL,"shouldShowTreeNodeInNav");const Ra=hn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:i(({cssVars:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Ne["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Ne["element-book-nav-hover-background-color"].value};
            color: ${Ne["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Ne["element-book-nav-active-background-color"].value};
            color: ${Ne["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${$n.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Ne["element-book-nav-selected-background-color"].value};
            color: ${Ne["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${B} {
            display: inline-flex;
            color: ${Ne["element-book-accent-icon-color"].value};
        }
    `,"styles"),render({inputs:e}){const r=e.flattenedNodes.map(t=>{if(!DL(t,e.selectedPath))return;const n=k`
                --book-nav-internal-indent: ${t.fullUrlBreadcrumbs.length-1};
            `;return m`
                <li style=${n}>
                    <${$n.assign({router:e.router,route:{paths:[Ut.Book,...t.fullUrlBreadcrumbs]}})}
                        class=${Gr({"title-row":!0,selected:e.selectedPath?M.jsonEquals(e.selectedPath,t.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Wr(Za(t,ct.ElementExample),m`
                                    <${B.assign({icon:gm})}></${B}>
                                `)}
                            ${t.entry.title}
                        </div>
                    </${$n}>
                </li>
            `});return m`
            <${$n.assign({route:os,router:e.router})}>
                <slot>Book</slot>
            </${$n}>
            <ul>
                ${r}
            </ul>
        `}}),ki=hn()({tagName:"book-error",styles:k`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,render({inputs:e}){return(M.isArray(e.message)?e.message:[e.message]).map(t=>m`
                <p>${t}</p>
            `)}}),iu=hn()({tagName:"book-page-controls",events:{controlValueChange:Pe()},hostClasses:{"book-page-controls-has-controls":i(({inputs:e})=>!!Object.keys(e.config).length,"book-page-controls-has-controls")},styles:i(({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Ne["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${er}, ${He} {
            height: 24px;
            max-width: 128px;
        }

        ${B}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,"styles"),render({inputs:e,dispatch:r,events:t}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===ge.Hidden)return"";const s=CL(e.currentValues[n],o,l=>{const u=M.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);r(new t.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...Object.fromEntries(Object.keys(e.config).map(f=>[f,e.currentValues[f]])),[n]:l}}))});return m`
                    <div class="control-wrapper">
                        ${Wr(a===0,m`
                                <${B.assign({icon:gf})}
                                    class="options-icon"
                                ></${B}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${o.controlType===ge.Custom?m`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function CL(e,r,t){return Bi(r,ge.Hidden)?"":Bi(r,ge.Checkbox)?m`
            <${fe.assign({value:!!e})}
                ${L(fe.events.valueChange,n=>{t(n.detail)})}
            ></${fe}>
        `:Bi(r,ge.Color)?m`
            <${tl.assign({color:e})}
                style=${k`
                    ${tl.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${tl.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${L(tl.events.colorChange,n=>{t(n.detail)})}
            ></${tl}>
        `:Bi(r,ge.Text)?m`
            <${er.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${L(er.events.valueChange,n=>{t(n.detail)})}
            ></${er}>
        `:Bi(r,ge.Number)?m`
            <${er.assign({value:e,allowedInputs:/[\d.]/})}
                ${L(er.events.valueChange,n=>{t(n.detail)})}
            ></${er}>
        `:Bi(r,ge.Dropdown)?m`
            <${He.assign({value:e,options:r.options.map(n=>({label:n,value:n}))})}
                ${L(He.events.valueChange,n=>{t(n.detail)})}
            ></${He}>
        `:Bi(r,ge.Custom)?r.content:m`
            <p class="error">
                ${r.controlType} controls are not implemented yet.
            </p>
        `}i(CL,"createControlInput");const A1=hn()({tagName:"book-breadcrumbs",styles:k`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:i(({inputs:e})=>{const r=e.currentRoute.paths.slice(1);return r.length?r.map((t,n,o)=>{const a=n>=o.length-1,s=o.slice(0,n+1),l=a?"":m`
                      <span class="spacer">&gt;</span>
                  `;return m`
                <${$n.assign({route:{hash:void 0,search:void 0,paths:[Ut.Book,...s]},router:e.router})}>
                    ${t}
                </${$n}>
                ${l}
            `}):m`
                &nbsp;
            `},"render")}),X0=hn()({tagName:"book-breadcrumbs-bar",styles:k`
        :host {
            border-bottom: 1px solid
                ${Ne["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Ne["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:r}){return m`
            ${Wr(!!e.currentSearch,m`
                    &nbsp;
                `,m`
                    <${A1.assign({currentRoute:e.currentRoute,router:e.router})}></${A1}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${L("input",async t=>{const n=t.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await ea({milliseconds:200}),n.value===o&&(n.value?r(new ed({paths:[Ut.Search,encodeURIComponent(n.value)]})):r(new ed(os)))})}
            />
        `}}),F1=hn()({tagName:"book-entry-description",styles:k`
        :host {
            color: ${Ne["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Ne["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }

        code {
            font-size: 1.2em;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(r=>m`
                <p>${r}</p>
            `)}}),S1=hn()({tagName:"book-page-wrapper",styles:k`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${$n} {
            display: inline-block;
        }
    `,render({inputs:e}){const r=e.isTopLevel?m`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:m`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,t=[Ut.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?Fw(e.pageNode.entry.errors):void 0;n&&console.error(n);const o=e.blockNavigation?r:m`
                  <${$n.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                      ${r}
                  </${$n}>
              `;return m`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${o}
                    ${n?m`
                              <${ki.assign({message:n.message})}></${ki}>
                          `:m`
                              <${F1.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${F1}>
                              <${iu.assign({config:e.pageNode.entry.controls,currentValues:jh(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${iu}>
                          `}
                </div>
            </div>
        `}}),uc=hn()({tagName:"book-element-example-title",styles:k`
        :host {
            display: flex;
            color: ${Ne["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const r=[Ut.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return m`
            <${$n.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${$n}>
        `}}),M1=Symbol("unset-internal-state"),T1=hn()({tagName:"book-element-example-viewer",state(){return{isUnset:M1}},render({state:e,inputs:r,updateState:t}){try{if(r.elementExampleNode.entry.errors.length)throw Fw(r.elementExampleNode.entry.errors);if(!r.elementExampleNode.entry.render||typeof r.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${r.elementExampleNode.entry.title}': render is not a function`);e.isUnset===M1&&t({isUnset:void 0,...r.elementExampleNode.entry.state?.()});const n=r.elementExampleNode.entry.render({state:e,updateState:t,controls:r.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return m`
                ${Wr(!!r.elementExampleNode.entry.styles,m`
                        <style>
                            ${r.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",nt(n)),console.error(n),m`
                <${ki.assign({message:`${r.elementExampleNode.entry.title} failed: ${nt(n)}`})}></${ki}>
            `}},options:{allowPolymorphicState:!0}}),P1=hn()({tagName:"book-element-example-wrapper",styles:k`
        :host {
            display: inline-block;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
            align-items: flex-start;
        }

        ${uc} {
            color: ${Ne["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${uc} {
            color: ${Ne["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return m`
            <div class="individual-example-wrapper">
                <${uc.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${uc}>
                <${T1.assign(e)}></${T1}>
            </div>
        `}}),EL={milliseconds:10};let yl;const fd=new Map,_i=new Map;function AL(){return yl||(yl=new IntersectionObserver(e=>{for(const r of e){const t=r.target,n=fd.get(t);if(n)if(r.isIntersecting){if(!_i.has(t)){const o=globalThis.setTimeout(()=>{_i.delete(t),n(),yl?.unobserve(t),fd.delete(t)},rs(EL,{milliseconds:!0}).milliseconds);_i.set(t,o)}}else{const o=_i.get(t);o&&(clearTimeout(o),_i.delete(t))}}},{rootMargin:"100px"})),yl}i(AL,"getSharedObserver");function I1(e){const r=_i.get(e);r&&(clearTimeout(r),_i.delete(e)),fd.delete(e),yl?.unobserve(e)}i(I1,"unobserveElement");const cc=hn()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:k`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&I1(e.placeholderElement)},render({inputs:e,state:r,updateState:t}){return r.hasRendered?e.content:m`
            <div
                class="placeholder"
                ${la(n=>{r.placeholderElement&&I1(r.placeholderElement),t({placeholderElement:n}),fd.set(n,()=>{t({hasRendered:!0})}),AL().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function Qx(e,r,t,n){const o=$g(t,n),a=[];if(o){const s=Qx(e,r,o,n);s&&a.push(s)}if(Za(t,ct.Page)&&!e.includes(t)){const s=jh(r,t.fullUrlBreadcrumbs);a.push({config:t.entry.controls,current:s,breadcrumbs:qe(s,()=>t.fullUrlBreadcrumbs)})}return a.reduce((s,l)=>({config:{...s.config,...l.config},current:{...s.current,...l.current},breadcrumbs:{...s.breadcrumbs,...l.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}i(Qx,"getFlattenedControlsFromHiddenParents");function FL({blockNavigation:e,currentNodes:r,isTopLevel:t,router:n,isSearching:o,controls:a,originalTree:s}){if(!r.length&&o)return[m`
                No results
            `];const l=M.isLengthAtLeast(r,1)?Qx(r,a,r[0],s):void 0,u=l&&Object.values(l.config).length&&M.isLengthAtLeast(r,1)?m`
                  <${iu.assign({config:l.config,currentValues:l.current,fullUrlBreadcrumbs:l.breadcrumbs})}></${iu}>
              `:ee,f=FN(r,g=>g.fullUrlBreadcrumbs.join(">"),g=>{if(Za(g,ct.Page))return m`
                    <${S1.assign({blockNavigation:e,isTopLevel:t,pageNode:g,controls:a,router:n})}
                        class="block-entry"
                    ></${S1}>
                `;if(Za(g,ct.ElementExample)){const h=jh(a,g.fullUrlBreadcrumbs.slice(0,-1)),p=m`
                    <${P1.assign({blockNavigation:e,elementExampleNode:g,currentPageControls:h,router:n})}></${P1}>
                `;return m`
                    <${cc.assign({content:p})}
                        class="inline-entry ${Gr({"block-entry":g.entry.isVertical})}"
                    ></${cc}>
                `}else{if(Za(g,ct.Root))return ee;{const h=m`
                    <${ki.assign({message:`Unknown entry type for rendering: '${g.entry.entryType}'`})}></${ki}>
                `;return m`
                    <${cc.assign({content:h})}
                        class="block-entry"
                    ></${cc}>
                `}}});return[u,f]}i(FL,"createNodeTemplates");const La=hn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:k`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        .inline-entry {
            display: inline-block;
            margin: 8px;

            &.block-entry {
                display: block;
            }
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${X0} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${js["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:Pe()},render:i(({inputs:e,dispatch:r,events:t,state:n,updateState:o})=>{const a=Zw(e.currentRoute.paths),s=FL({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return m`
            <${X0.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${X0}>

            ${Wr(e.showLoading,m`
                    <div
                        ${la(()=>{r(new t.loadingRender(!0))})}
                        class="loading"
                    >
                        <${B.assign({icon:bi})}></${B}>
                    </div>
                    ${Wr(!!n.lastElement,m`
                            ${n.lastElement}
                            <slot></slot>
                        `)}
                `,m`
                    <div
                        ${la(l=>{o({lastElement:l})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot></slot>
                `)}
        `},"render")});function SL(e,r,t){const n=N1(e,r);return n.length?n:(t(os),N1(e,os.paths))}i(SL,"getCurrentNodes");function N1(e,r){return e.filter(t=>x8({searchFor:r.slice(1),searchIn:t.fullUrlBreadcrumbs}))}i(N1,"filterNodes");const dc=Xn()({tagName:"element-book-app",state(){return{currentRoute:os,router:void 0,loading:!0,colors:{config:void 0,theme:Ay(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:Pe()},slotNames:["footer","navHeader"],styles:k`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Ne["element-book-page-background-color"].value};
            color: ${Ne["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${La} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${Ra} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:r}){e.router&&(e.router.destroy(),r({router:void 0}))},render:i(({state:e,inputs:r,host:t,updateState:n,dispatch:o,events:a,slotNames:s})=>{r._debug&&console.info("rendering element-book app");function l(h){return{...e.currentRoute,...h}}i(l,"mergeRoutes");function u(h){const p=l(h);return!M.jsonEquals(e.currentRoute,p)}i(u,"areRoutesNew");function f(h){r.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,h].filter(M.isTruthy).join(" - "))}i(f,"updateWindowTitle");function g(h){if(!u(h))return;const p=l(h);e.router?e.router.setRoute(p):n({currentRoute:{...e.currentRoute,...p}}),r.elementBookRoutePaths&&!M.jsonEquals(r.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(p.paths))}i(g,"updateRoutes");try{if(r.elementBookRoutePaths&&!M.jsonEquals(r.elementBookRoutePaths,e.currentRoute.paths)&&g({paths:r.elementBookRoutePaths}),r.internalRouterConfig?.useInternalRouter&&!e.router){const A=bB(r.internalRouterConfig.basePath);n({router:A}),A.listen(!0,N=>{n({currentRoute:N})})}else!r.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const h={themeColor:r.themeColor};if(!M.jsonEquals(h,e.colors.config)){const A=Ay(h);n({colors:{config:h,theme:A}}),oC(t,A)}const p=r._debug??!1,b=S8({entries:r.pages,debug:p});(!e.treeBasedControls||e.treeBasedControls.pages!==r.pages||e.treeBasedControls.lastGlobalInputs!==r.globalValues)&&(r._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:r.pages,lastGlobalInputs:r.globalValues??{},controls:Gw(b.tree,{children:e.treeBasedControls?.controls.children,controls:r.globalValues})}}));const v=Zw(e.currentRoute.paths),C=(v?rB({flattenedNodes:b.flattenedNodes,searchQuery:v}):void 0)??SL(b.flattenedNodes,e.currentRoute.paths,g);f(C[0]?.entry.title);const E=e.treeBasedControls?.controls;return E?(r._debug&&console.info({currentControls:E}),m`
                <div
                    class="root"
                    ${L(ed,A=>{const N=A.detail;if(!u(N))return;if(n({loading:!0}),g(N),!(t.shadowRoot.querySelector(Ra.tagName)instanceof Ra))throw new TypeError(`Failed to find child '${Ra.tagName}'`)})}
                    ${L(iu.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const N=T8(E,A.detail.fullUrlBreadcrumbs,A.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:N}})})}
                >
                    ${r.blockNavigation?ee:m`
                              <${Ra.assign({flattenedNodes:b.flattenedNodes,router:e.router,selectedPath:v?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${s.navHeader}></slot>
                              </${Ra}>
                          `}
                    <${La.assign({blockNavigation:!!r.blockNavigation,controls:E,currentNodes:C,currentRoute:e.currentRoute,debug:p,originalTree:b.tree,router:e.router,showLoading:e.loading})}
                        ${L(La.events.loadingRender,async A=>{await Fy();const N=t.shadowRoot.querySelector(La.tagName);N?N.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${La.tagName}' for scrolling.`),await Fy(),n({loading:!A.detail})})}
                    >
                        <slot name=${s.footer}></slot>
                    </${La}>
                </div>
            `):m`
                    <${ki.assign({message:"Failed to generate page controls."})}></${ki}>
                `}catch(h){return console.error(h),m`
                <p class="error">${nt(h)}</p>
            `}},"render")}),wr=Ee({title:"Elements",parent:void 0}),Im=Ee({title:"Styles",parent:void 0}),Af=Ee({title:"Util",parent:void 0}),Ff=Ee({title:"Icons",controls:{"Stroke Color":{controlType:ge.Color,initValue:""},"Fill Color":{controlType:ge.Color,initValue:""},"Stroke Width":{controlType:ge.Number,initValue:1.5}},parent:void 0}),ML=yL({parent:Im,theme:S,title:"Vira Theme",hideInverseColors:!0,overrides:[yB],hideCopyCode:!0}),TL=Ee({title:Xt.name,parent:Af,descriptionParagraphs:["Wraps an existing icon with specific colors to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){e({title:"stroke color",styles:k`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Xt(dr,{"vira-icon-stroke-color":"red"});return m`
                    <${B.assign({icon:dr})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"fill color",styles:k`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Xt(ws,{"vira-icon-fill-color":"gold","vira-icon-stroke-color":"orange"});return m`
                    <${B.assign({icon:ws})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"stroke width",styles:k`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Xt(Wa,{"vira-icon-stroke-color":"green","vira-icon-stroke-width":"3px"});return m`
                    <${B.assign({icon:Wa})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"with CSS var values",styles:k`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Xt(Wa,{"vira-icon-stroke-color":`${R["vira-form-error-color"].value}`}),t=Xt(Wa,{"vira-icon-stroke-color":`${R["vira-form-success-color"].value}`});return m`
                    <${B.assign({icon:r})}></${B}>
                    <${B.assign({icon:t})}></${B}>
                `}}),e({title:"multiple icons with different colors",styles:k`
                :host {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
            `,render(){const r=Xt(dr,{"vira-icon-stroke-color":"red"}),t=Xt(dr,{"vira-icon-stroke-color":"dodgerblue"}),n=Xt(dr,{"vira-icon-stroke-color":"green"}),o=Xt(dr,{"vira-icon-stroke-color":"purple"});return m`
                    <${B.assign({icon:r})}></${B}>
                    <${B.assign({icon:t})}></${B}>
                    <${B.assign({icon:n})}></${B}>
                    <${B.assign({icon:o})}></${B}>
                `}})}}),PL=[{title:"smaller",size:16,icon:dr},{title:"larger",size:48,icon:ws}],IL=Ee({title:rh.name,parent:Af,descriptionParagraphs:["Wraps an existing icon with explicit dimensions to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){PL.forEach(r=>{e({title:r.title,styles:k`
                    :host {
                        display: flex;
                        gap: 16px;
                        align-items: center;
                    }
                `,render(){const t=rh(r.icon,r.size);return m`
                        <${B.assign({icon:r.icon})}></${B}>
                        <span>→</span>
                        <${B.assign({icon:t})}></${B}>
                    `}})})}}),e4={async element1(){return await ea({seconds:2}),(await Ol(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-B6u_65uG.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await ea({seconds:2}),(await Ol(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-B3UZIQET.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},B1=Xn()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:Jx(e4)}},render({state:e,inputs:r}){return Xx(e.dynamicElements,{key:r.numberValue===1?"element1":r.numberValue===2?"element2":"errorElement",error(t){return m`
                    <${Ji}>
                        ${fa("Failed to import element",nt(t))}
                    </${Ji}>
                `},loading(){return m`
                    <${B.assign({icon:bi})}></${B}>
                `},ready(t){if(t.element1)return m`
                        <${t.element1}></${t.element1}>
                    `;if(t.element2)return m`
                        <${t.element2.assign({userName:"John"})}></${t.element2}>
                    `;Er.never("The error element will always error")}})}}),O1=Xn()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:Jx(e4)}},render({state:e,inputs:r}){return e.dynamicElements.update(r.numberValue===1?"element1":r.numberValue===2?"element2":"errorElement"),Xx(e.dynamicElements,{error(t){return m`
                    <${Ji}>
                        ${fa("Failed to import element",nt(t))}
                    </${Ji}>
                `},loading(){return m`
                    <${B.assign({icon:bi})}></${B}>
                `},ready(t){if(t.element1)return m`
                        <${t.element1}></${t.element1}>
                    `;if(t.element2)return m`
                        <${t.element2.assign({userName:"John"})}></${t.element2}>
                    `;Er.never("The error element will always error")}})}}),R1=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],NL=Ee({parent:Af,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:k`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:r,updateState:t}){return m`
                    <${He.assign({value:String(r.value),options:R1})}
                        ${L(He.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);t({value:o})})}
                    ></${He}>
                    <${B1.assign({numberValue:r.value})}></${B1}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:k`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:r,updateState:t}){return m`
                    <${He.assign({value:String(r.value),options:R1})}
                        ${L(He.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);t({value:o})})}
                    ></${He}>
                    <${O1.assign({numberValue:r.value})}></${O1}>
                `}})}}),BL=[{title:"unselected",content:"my label",inputs:{selected:!1}},{title:"selected",content:"my label",inputs:{selected:!0}},{title:"with custom child",content:"custom child",inputs:{selected:!0},customTemplate:m`
            <b>This is custom</b>
        `},{title:"constrained width",content:"has more text than is possible to fit",customStyle:k`
            :host {
                max-width: 100px;
            }
        `,inputs:{selected:!0}},{title:"stretched width",content:"wide",customStyle:k`
            ${ui} {
                width: 400px;
            }
        `,inputs:{selected:!0}},{title:"disabled",content:"my label",inputs:{selected:!0,disabled:!0}},{title:"no default pointer styles",content:"my label",inputs:{selected:!0,disablePointerStyles:!0}},{title:"icon override",content:"my label",inputs:{selected:!1,iconOverride:Xt(gf,{"vira-icon-stroke-color":"blue"})}},{title:"with ViraLink content",customStyle:k`
            ${$t} {
                text-decoration: none;
            }
        `,content:m`
            <${$t.assign({link:{url:"https://example.com",newTab:!0},disableLinkStyles:!0})}>
                link label
            </${$t}>
        `,inputs:{selected:!1}}],OL=Ee({title:ui.tagName,parent:wr,defineExamples({defineExample:e}){BL.forEach(r=>{e({title:r.title,styles:r.customStyle,render(){return m`
                        <${ui.assign(r.inputs)}>${r.content}</${ui}>
                    `}})})}}),wl=[{content:"one"},{content:"two"},{content:"three"},{content:"four"},{content:"five"},{content:"six"}],RL=[{value:"1",label:"Option one"},{value:"2",label:"Option two"},{value:"3",label:"Option three"}],L1={content:m`
        <div
            style=${k`
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `}
        >
            This menu item is much longer than the others
        </div>
    `},LL=[{title:"basic"},{title:"rounded",inputs:{menuCornerStyle:lm.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"inside focus",inputs:{useInsideFocus:!0}},{title:"long item",menuItems:[...wl,L1]},{title:"restricted long item",inputs:{horizontalAnchor:Yi.Both},menuItems:[...wl,L1]},{title:"ViraLink URL item",menuItems:[...wl,{content:m`
                    <${$t.assign({link:{url:"https://www.wikipedia.org",newTab:!0},disableLinkStyles:!0})}>
                        Wikipedia link
                    </${$t}>
                `}]},{title:"ViraLink route item",menuItems:[...wl,{content:m`
                    <${$t.assign({route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(e,r){return console.info(e,r),!1}}},disableLinkStyles:!0})}>
                        Route link
                    </${$t}>
                `}]}],jL=Ee({parent:wr,title:ni.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){LL.forEach(r=>{e({title:r.title,styles:k`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,state(){return{selectedValue:void 0}},render({state:t,updateState:n}){const a=[{content:m`
                            <${He.assign({options:RL,value:t.selectedValue,rawSelect:!0})}
                                style=${k`
                                    width: 100%;
                                `}
                                ${L("click",s=>{s.stopPropagation()})}
                                ${L("mousedown",s=>{s.stopPropagation()})}
                                ${L(He.events.valueChange,s=>{n({selectedValue:s.detail})})}
                            ></${He}>
                        `},...r.menuItems||wl];return m`
                        <${ni.assign({popUpOffset:{vertical:-1},...r.inputs})}>
                            <div class="trigger" slot=${ni.slotNames.trigger}>
                                Trigger Menu
                            </div>
                            ${cm(a)}
                        </${ni}>
                    `}})})}}),UL=[{title:"basic",items:[{content:"one"},{content:"two"},{content:"three"}]},{title:"with selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three"}]},{title:"with multi selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three",selected:!0}]},{title:"with disabled item",items:[{content:"one"},{content:"two",disabled:!0},{content:"three"}]}],_L=Ee({parent:wr,title:Zi.tagName,defineExamples({defineExample:e}){UL.forEach(r=>{e({title:r.title,render(){return m`
                        <${Zi.assign({...r.menuInputs})}>
                            ${r.items.map(t=>m`
                                    <${ui.assign({selected:t.selected,disabled:t.disabled,disablePointerStyles:t.disablePointerStyles})}>
                                        ${t.content}
                                    </${ui}>
                                `)}
                        </${Zi}>
                    `}})})}}),zL=Ee({parent:wr,title:me.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:k`
                ${me} {
                    ${R["vira-form-focus-outline-border-radius"].name}: 0;
                }

                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    background-color: #eef9ff;
                }
            `,render(){return m`
                    <${me.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${me.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>Pop up!</div>
                    </${me}>
                `}}),e({title:"long clipped content",styles:k`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,render(){return m`
                    <${me.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${me.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${me}>
                `}}),e({title:"long right anchored content",styles:k`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,render(){return m`
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Yi.Right})}>
                        <div slot=${me.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${me}>
                `}}),e({title:"long left anchored content",styles:k`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,render(){return m`
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Yi.Left})}>
                        <div slot=${me.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${me}>
                `}}),e({title:"short right anchored content",styles:k`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,render(){return m`
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Yi.Right})}>
                        <div slot=${me.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>not long</div>
                    </${me}>
                `}}),e({title:"ignoreMaxWidth wide content",styles:k`
                .container {
                    width: 300px;
                    overflow: auto;
                    border: 2px solid #999;
                    padding: 16px;
                }

                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    background-color: #eef9ff;
                    white-space: nowrap;
                }
            `,render(){return m`
                    <div class="container">
                        <${me.assign({keepOpenAfterInteraction:!0})}>
                            <div class="trigger" slot=${me.slotNames.trigger}>
                                Trigger
                            </div>
                            <div class="pop-up" slot=${me.slotNames.popUp}>
                                This content is much wider than the container and should overflow
                                <div>Item 1</div>
                                <div>Item 2</div>
                                <div>Item 3</div>
                                <div>Item 4</div>
                                <div>Item 5</div>
                                <div>Item 6</div>
                                <div>Item 7</div>
                                <div>Item 8</div>
                                <div>Item 9</div>
                                <div>Item 10</div>
                            </div>
                        </${me}>
                    </div>
                `}})}}),qL=[{title:"menu shadow",styles:rd.menuShadow},{title:"modal",styles:rd.modal}],VL=Ee({parent:Im,title:"Shadows",defineExamples({defineExample:e}){qL.forEach(r=>{e({title:r.title,styles:k`
                    .shadow-block {
                        height: 100px;
                        width: 256px;
                        margin: 32px;
                        ${r.styles}
                        border-radius: 8px;
                        background-color: white;
                    }
                `,render(){return m`
                        <div class="shadow-block"></div>
                    `}})})}}),WL=Ee({parent:wr,title:kr.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:ge.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return m`
                    <${kr.assign({text:"Text here",bold:!1})}></${kr}>
                `}}),e({title:"Bold",render(){return m`
                    <${kr.assign({text:"Text here",bold:!0})}></${kr}>
                `}}),e({title:"Dynamic",render({controls:r}){return m`
                    <${kr.assign({text:"Text here",bold:r.bolded})}></${kr}>
                `}}),e({title:"Resized",styles:k`
                ${kr} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return m`
                    <${kr.assign({text:"Not Bolded",bold:!1})}></${kr}>
                    <${kr.assign({text:"Bolded",bold:!0})}></${kr}>
                `}}),e({title:"Alignment",styles:k`
                ${kr} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return m`
                    <${kr.assign({text:"Not Bolded",bold:!1})}></${kr}>
                    <${kr.assign({text:"Bolded",bold:!0})}></${kr}>
                `}}),e({title:"Stylized",styles:k`
                ${kr} {
                    text-decoration: underline;
                }
            `,render(){return m`
                    <${kr.assign({text:"Not Bolded",bold:!1})}></${kr}>
                    <${kr.assign({text:"Bolded",bold:!0})}></${kr}>
                `}})}}),KL=[{label:"basic",extraInputs:{}},{label:"with 24px icon",extraInputs:{icon:nd}},{label:"with 16px icon",extraInputs:{icon:td}},{label:"only 24px icon",extraInputs:{icon:nd,text:""}},{label:"only 16px icon",extraInputs:{icon:td,text:""}},{label:"disabled",extraInputs:{isDisabled:!0}},{label:"menu caret",extraInputs:{showMenuCaret:!0}}],HL=k`
    table {
        border-collapse: collapse;
    }

    th,
    td {
        padding: 8px;
        text-align: center;
    }

    th {
        font-weight: normal;
    }
`,GL=Ee({parent:wr,title:ye.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],defineExamples({defineExample:e}){cf.forEach(r=>{e({title:r,styles:HL,render(){return KL.map(({label:t,extraInputs:n})=>m`
                            <h3>${t}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${ca.map(o=>m`
                                                <th>${o}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${df.map(o=>m`
                                            <tr>
                                                <th>${o}</th>
                                                ${ca.map(a=>m`
                                                        <td>
                                                            <${ye.assign({text:"Button",...n,buttonSize:r,buttonEmphasis:o,colorVariant:a})}></${ye}>
                                                        </td>
                                                    `)}
                                            </tr>
                                        `)}
                                </tbody>
                            </table>
                        `)}})}),e({title:"customized colors",styles:k`
                :host {
                    ${ye.cssVars["vira-button-text-color"].name}: purple;
                    ${ye.cssVars["vira-button-background-color"].name}: pink;
                    ${ye.cssVars["vira-button-border-color"].name}: magenta;

                    ${ye.cssVars["vira-button-hover-text-color"].name}: white;
                    ${ye.cssVars["vira-button-hover-background-color"].name}: orange;
                    ${ye.cssVars["vira-button-hover-border-color"].name}: red;

                    ${ye.cssVars["vira-button-active-text-color"].name}: black;
                    ${ye.cssVars["vira-button-active-background-color"].name}: yellow;
                    ${ye.cssVars["vira-button-active-border-color"].name}: goldenrod;

                    ${ye.cssVars["vira-button-disabled-text-color"].name}: gray;
                    ${ye.cssVars["vira-button-disabled-background-color"].name}: lightgray;
                    ${ye.cssVars["vira-button-disabled-border-color"].name}: darkgray;
                }
            `,render(){return m`
                    <${ye.assign({text:"hello",colorVariant:te.None})}></${ye}>
                `}}),e({title:"text wrapping",styles:k`
                ${ye} {
                    max-width: 120px;
                }
            `,render(){return m`
                    <${ye.assign({text:"This is a long button label that wraps"})}></${ye}>
                `}})}}),ZL=[{title:"basic"},{title:"success",inputs:{cardState:th.Success}},{title:"error",inputs:{cardState:th.Error}},{title:"long",content:m`
            <p
                style=${k`
                    ${sm}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],YL=Ee({parent:wr,title:k0.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){ZL.forEach(r=>{e({title:r.title,render(){return m`
                        <${k0.assign(r.inputs||{})}>
                            ${r.content||"Content"}
                        </${k0}>
                    `}})})}}),JL=Ee({parent:wr,title:fe.tagName,controls:{Checked:{controlType:ge.Checkbox,initValue:!1},Disabled:{controlType:ge.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked})}
                        ${L(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked})}
                        ${L(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,hasError:!0})}
                        ${L(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"disabled unchecked",render(){return m`
                    <${fe.assign({value:!1,disabled:!0})}></${fe}>
                `}}),e({title:"disabled checked",render(){return m`
                    <${fe.assign({value:!0,disabled:!0})}></${fe}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:r}){return m`
                    <${fe.assign({value:r.Checked,disabled:r.Disabled})}></${fe}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return m`
                    <${fe.assign({value:!0})}></${fe}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,label:"label goes here"})}
                        ${L(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,label:"label goes here",horizontal:!0})}
                        ${L(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:k`
                ${fe} {
                    max-width: 400px;
                }
            `,render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${L(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"fill when checked",state(){return{checked:!0}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,fillWhenChecked:!0})}
                        ${L(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"fill when unchecked",state(){return{checked:!1}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,fillWhenUnchecked:!0})}
                        ${L(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"both fills",state(){return{checked:!1}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,fillWhenUnchecked:!0,fillWhenChecked:!0})}
                        ${L(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}})}}),XL=Ee({title:Xr.tagName,parent:wr,descriptionParagraphs:["A collapsible card element with built-in header, caret icon, and card styling. Wraps ViraCollapsibleWrapper with opinionated styles."],defineExamples({defineExample:e}){e({title:"basic",styles:k`
                p {
                    ${qr}
                }
            `,render(){return m`
                    <${Xr}>
                        <span slot=${Xr.slotNames.header}>Card Header</span>
                        <p>Card content goes here.</p>
                    </${Xr}>
                `}}),e({title:"start expanded",styles:k`
                p {
                    ${qr}
                }
            `,render(){return m`
                    <${Xr.assign({startExpanded:!0})}>
                        <span slot=${Xr.slotNames.header}>
                            Expanded Card Header
                        </span>
                        <p>This card starts expanded.</p>
                    </${Xr}>
                `}}),e({title:"block expansion",styles:k`
                p {
                    ${qr}
                }
            `,render(){return m`
                    <${Xr.assign({blockExpansion:!0})}>
                        <span slot=${Xr.slotNames.header}>Always Expanded</span>
                        <p>This card cannot be collapsed.</p>
                    </${Xr}>
                `}}),e({title:"raw collapsible",styles:k`
                p {
                    ${qr}
                }
            `,render(){return m`
                    <${Xr.assign({rawCollapsible:!0,startExpanded:!0})}>
                        <span slot=${Xr.slotNames.header}>Raw Header</span>
                        <p>No card border or padding styles.</p>
                    </${Xr}>
                `}}),e({title:"hidden header",styles:k`
                p {
                    ${qr}
                }
            `,render(){return m`
                    <${Xr.assign({hideHeader:!0,startExpanded:!0})}>
                        <p>Content with no header visible.</p>
                    </${Xr}>
                `}}),e({title:"wide",styles:k`
                div {
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                }
                p {
                    ${qr}
                }
            `,render(){return m`
                    <div>
                        <${Xr}>
                            <span slot=${Xr.slotNames.header}>Wide</span>
                            <p>Content content content content content content content.</p>
                        </${Xr}>
                    </div>
                `}})}}),QL=Ee({title:yt.tagName,parent:wr,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:k`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:r,state:t}){return new Array(3).fill(0).map((n,o)=>m`
                        <${yt.assign({expanded:!!t.expandedStates[o]})}
                            ${L(yt.events.expandChange,a=>{const s=[...t.expandedStates];s[o]=a.detail,r({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${yt.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${L("click",()=>{const a=[...t.showMoreStates];a[o]=!a[o],r({showMoreStates:a})})}
                            >
                                show more
                            </button>
                            ${Wr(!!t.showMoreStates[o],m`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${yt}>
                    `)}}),e({title:"wider examples",styles:k`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:r,state:t}){return new Array(3).fill(0).map((n,o)=>m`
                        <${yt.assign({expanded:!!t.expandedStates[o]})}
                            ${L(yt.events.expandChange,a=>{const s=[...t.expandedStates];s[o]=a.detail,r({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${yt.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${L("click",()=>{const a=[...t.showMoreStates];a[o]=!a[o],r({showMoreStates:a})})}
                            >
                                show more
                            </button>
                            ${Wr(!!t.showMoreStates[o],m`
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                `)}
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                        </${yt}>
                    `)}})}}),$c=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Really really super duper long option",value:"4"},{label:"Really really super duper long option",value:"5"},{label:"Really really super duper long option",value:"6"},{label:"Really really super duper long option",value:"7"},{label:"Really really super duper long it just keeps going because it's so long option",value:"8"}],ej=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{value:"1",label:"1"},{value:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with disabled item",inputs:{selected:[],options:[...$c,{value:"42",label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:k`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:k`
            ${vl} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:dr}}],rj=Ee({title:vl.tagName,parent:wr,controls:{Selected:{controlType:ge.Dropdown,initValue:"",options:["",...$c.map(e=>e.label)]},Prefix:{controlType:ge.Text,initValue:""},"Force State":{controlType:ge.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:ge.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:ge.Dropdown,initValue:"",options:["",...Object.keys(Hy)]},Disabled:{controlType:ge.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:ge.Text,initValue:"Select something"}},defineExamples({defineExample:e}){ej.forEach(r=>{e({title:r.title,state(){return{selected:r.inputs?.selected||[]}},styles:r.customStyle,render({state:t,updateState:n,controls:o}){const a={...r.inputs,placeholder:r.inputs&&"placeholder"in r.inputs?r.inputs.placeholder:o.Placeholder,options:r.inputs?.options||$c,selected:o.Selected?[$c.find(s=>s.label===o.Selected)?.value].filter(M.isTruthy):t.selected,selectionPrefix:o.Prefix||r.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":r.inputs?.isDisabled,icon:o.Icon?Hy[o.Icon]:r.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":r.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":r.inputs?.z_debug_forceOpenState};return m`
                        <${vl.assign(a)}
                            ${L(vl.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${vl}>
                    `}})})}}),tj=Ee({parent:wr,title:Ji.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return m`
                    <${Ji}>Error Content</${Ji}>
                `}})}}),Q0=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],nj=Ee({parent:wr,title:Ot.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0,quantity:0}},styles:k`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Me.Text,label:"First Name",value:r.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:Me.Text,label:"Last Name",value:r.lastName,isRequired:!0},subscribe:{type:Me.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Me.Email,label:"Email Address",value:r.email},password:{type:Me.NewPassword,label:"Password",value:r.password},userRole:{type:Me.Select,label:"Role",options:Q0,value:r.userRole,placeholder:"placeholder"},quantity:{type:Me.Number,label:"Quantity",value:r.quantity,min:0,max:100,step:2,placeholder:"Enter quantity"},disabledField:{type:Me.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:Me.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return m`
                    <${Ot.assign({fields:n})}
                        ${L(Ot.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonEmphasis:lr.Subtle,colorVariant:te.Neutral})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${Ot}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:k`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Me.Text,label:"First Name",value:r.firstName},lastName:{type:Me.Text,label:"Last Name",value:r.lastName}};return m`
                    <${Ot.assign({fields:n})}
                        ${L(Ot.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <${er.assign({value:"",label:"More stuff"})}></${er}>
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonEmphasis:lr.Subtle,colorVariant:te.Neutral})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${Ot}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:k`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${Ot} {
                    width: 400px;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Me.Text,label:"First Name",value:r.firstName},lastName:{type:Me.Text,label:"Last Name",value:r.lastName},subscribe:{type:Me.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Me.Email,label:"Email Address",value:r.email},password:{type:Me.NewPassword,label:"Password",value:r.password},userRole:{type:Me.Select,label:"Role",options:Q0,value:r.userRole}};return m`
                    <${Ot.assign({fields:n})}
                        ${L(Ot.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonEmphasis:lr.Subtle,colorVariant:te.Neutral})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${Ot}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:k`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Me.Text,label:"First Name",value:r.firstName},lastName:{type:Me.Text,label:"Last Name",value:r.lastName},subscribe:{type:Me.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Me.Email,label:"Email Address",value:r.email},password:{type:Me.NewPassword,label:"Password",value:r.password},userRole:{type:Me.Select,label:"Role",options:Q0,value:r.userRole}};return m`
                    <${Ot.assign({fields:n,isDisabled:!0})}
                        ${L(Ot.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonEmphasis:lr.Subtle,colorVariant:te.Neutral})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${Ot}>
                `}})}}),oj=Ee({title:B.tagName,parent:wr,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return m`
                    <${B.assign({icon:dr})}></${B}>
                `}}),e({title:"using createColoredIcon",render(){return m`
                    <${B.assign({icon:Xt(dr,{"vira-icon-stroke-color":"red"})})}></${B}>
                `}}),e({title:"using createSizedIcon",render(){return m`
                    <${B.assign({icon:rh(dr,32)})}></${B}>
                `}}),e({title:"using feather icon",render(){return m`
                    <${B.assign({icon:bl.anchor})}></${B}>
                `}}),e({title:"using customized feather icon",render(){return m`
                    <${B.assign({icon:bl.anchor({height:64,width:64})})}></${B}>
                `}}),e({title:"fit container",styles:k`
                ${B} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return m`
                    <${B.assign({icon:dr,fitContainer:!0})}></${B}>
                `}}),e({title:"colored fit container",styles:k`
                ${B} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return m`
                    <${B.assign({icon:Xt(dr,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${B}>
                `}}),e({title:"feather fit container",styles:k`
                ${B} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return m`
                    <${B.assign({icon:bl.anchor,fitContainer:!0})}></${B}>
                `}}),e({title:"customized feather fit container",styles:k`
                ${B} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return m`
                    <${B.assign({icon:bl.anchor({"stroke-width":4}),fitContainer:!0})}></${B}>
                `}})}}),ij=Ee({title:Wo.tagName,parent:wr,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:k`
                    border-radius: 32px;
                `,loadingSlot:m`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${B.assign({icon:bi,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:k`
                    border-radius: 32px;
                `,errorSlot:m`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${B.assign({icon:eu,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:k`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:k`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:k`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:m`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${B.assign({icon:bi,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `,errorSlot:m`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${B.assign({icon:eu,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `}].forEach(t=>{e({title:t.title,styles:k`
                    ${Wo} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${t.styles||k``}
                    }

                    ${t.allowReload?k`
                              ${Wo} {
                                  cursor: pointer;
                              }

                              ${Wo}:hover {
                                  border-color: #0055ff;
                              }
                          `:k``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:t.inputs.imageUrl}},render({state:n,updateState:o}){return m`
                        <${Wo.assign({...t.inputs,imageUrl:n.imageUrl})}
                            ${L("click",()=>{t.allowReload&&o({imageUrl:`${t.inputs.imageUrl}?di=${Io()}`})})}
                        >
                            ${t.loadingSlot?m`
                                      <div class="slot-wrapper" slot=${Wo.slotNames.loading}>
                                          ${t.loadingSlot}
                                      </div>
                                  `:ee}${t.errorSlot?m`
                                      <div class="slot-wrapper" slot=${Wo.slotNames.error}>
                                          ${t.errorSlot}
                                      </div>
                                  `:ee}
                        </${Wo}>
                    `}})})}}),aj=Ee({title:er.tagName,parent:wr,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:ge.Color,initValue:R["vira-form-foreground-color"].default},"Placeholder color":{controlType:ge.Color,initValue:R["vira-form-placeholder-color"].default},"Border color":{controlType:ge.Color,initValue:R["vira-form-border-color"].default},"Focus color":{controlType:ge.Color,initValue:R["vira-form-focus-outline-color"].default},"Selection color":{controlType:ge.Color,initValue:R["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function r({styles:n,title:o,inputs:a}){e({title:o,styles:k`
                    ${n||k``}
                `,state(){return{value:a.value}},render({state:s,updateState:l,controls:u}){const f={[String(R["vira-form-foreground-color"].name)]:u["Text color"],[String(R["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(R["vira-form-border-color"].name)]:u["Border color"],[String(R["vira-form-focus-outline-color"].name)]:u["Focus color"],[String(R["vira-form-text-selection-color"].name)]:u["Selection color"]},g=qe(f,(p,b)=>b||"inherit"),h=Object.entries(g).map(([p,b])=>[p,b].join(": ")+";").join(`
`);return m`
                        <${er.assign({...a,value:s.value})}
                            style=${h}
                            ${L(er.events.valueChange,p=>{l({value:p.detail}),console.info("changed:",p.detail)})}
                        ></${er}>
                    `}})}i(r,"defineInputExample"),[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:dr}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:k`
                    ${er} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:dr}},{title:"taller height",styles:k`
                    ${er} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:dr}},{title:"shorter height",styles:k`
                    ${er} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:dr}},{title:"max width",styles:k`
                    ${er} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:k`
                    ${er} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Vi.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Vi.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:k`
                    ${er} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:k`
                    ${er} {
                        width: unset;
                    }
                `}].forEach(r)}}),sj=Ee({title:$t.tagName,parent:wr,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:ge.Color,initValue:""},"Hover color":{controlType:ge.Color,initValue:""},"Active color":{controlType:ge.Color,initValue:""}},defineExamples({defineExample:e}){function r({title:t,inputs:n}){e({title:t,render({controls:o}){const a=k`
                        ${R["vira-form-accent-primary-color"].name}: ${Re(o["Hover color"]||"inherit")};
                        ${R["vira-form-accent-primary-active-color"].name}: ${Re(o["Active color"]||"inherit")};
                        color: ${Re(o["CSS Color"]||"inherit")};
                    `;return m`
                        <${$t.assign(n)} style=${a}>My Link</${$t}>
                    `}})}i(r,"defineLinkExample"),r({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),r({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(t,n){return console.info(t,n),!1}}}}}),r({title:"disabled link styles",inputs:{disableLinkStyles:!0,link:{newTab:!0,url:"https://www.wikipedia.org"}}})}}),lj=Ee({title:Ko.tagName,parent:wr,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:r,updateState:t}){return m`
                    <button
                        ${L("click",()=>{t({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Ko.assign({open:r.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${L(Ko.events.modalClose,()=>{t({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Ko}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:k`
                ${Ko} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${R["vira-form-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:r,updateState:t}){return m`
                    <button
                        ${L("click",()=>{t({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Ko.assign({open:r.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${L(Ko.events.modalClose,()=>{t({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Ko}>
                `}})}}),uj=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:k`
            :host {
                ${R["vira-form-filled-background-color"].name}: red;
                ${R["vira-form-accent-primary-color"].name}: black;
                ${$o.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${$o} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:k`
            :host {
                ${R["vira-form-filled-background-color"].name}: red;
                ${R["vira-form-accent-primary-color"].name}: yellow;
                ${$o.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${$o} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:k`
            :host {
                ${R["vira-form-filled-background-color"].name}: red;
                ${R["vira-form-accent-primary-color"].name}: yellow;
                ${$o.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${$o} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],cj=Ee({parent:wr,title:$o.tagName,defineExamples({defineExample:e}){uj.forEach(r=>{e({title:r.title,styles:k`
                    ${r.styles||k``}
                `,render(){return m`
                        <${$o.assign({value:50,...r.inputs})}></${$o}>
                    `}})})}}),_r=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],dj=[{title:"basic",inputs:{options:_r}},{title:"with really long option",inputs:{options:[..._r,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:_r,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:_r,disabled:!0}},{title:"error",inputs:{options:_r,hasError:!0}},{title:"with icon",inputs:{options:_r,icon:dr}},{title:"custom width",inputs:{options:_r},styles:k`
            ${He} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:_r,icon:dr},styles:k`
            ${He} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:_r,icon:dr},styles:k`
            ${He} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:_r,label:"Pick an option"}},{title:"with long label",inputs:{options:_r,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:_r,label:"Pick a really really really really long option"},styles:k`
            ${He} {
                width: unset;
            }
        `},{title:"raw",inputs:{options:[..._r,{label:"really really really really really really really really long option",value:"something"}],rawSelect:!0,icon:dr}}],fj=Ee({parent:wr,title:He.tagName,defineExamples({defineExample:e}){dj.forEach(r=>{e({title:r.title,styles:k`
                    ${r.styles||k``}
                `,state(){return{selected:void 0}},render({state:t,updateState:n}){return m`
                        <${He.assign({...r.inputs,value:t.selected??r.inputs.value})}
                            ${L(He.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${He}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return m`
                    <${He.assign({options:_r,value:_r[0]?.value})}></${He}>
                `}}),e({title:"force update",render(){return m`
                    <${j1}></${j1}>
                `}})}}),j1=gr()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:r}){e({intervalId:globalThis.setInterval(()=>{const t=_r.findIndex(o=>o.value===r.value),n=ur.isDefined(_r[(t+1)%_r.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return m`
            <${He.assign({options:_r,value:e.value})}></${He}>
        `}}),To=new iB({allowBare:!0,children:{tab1:{},tab2:{},tab3:{},tab4:{}}}),al={createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(){return!1}};function gj(e){return{paths:e,search:{},hash:""}}i(gj,"createMockRoute");const io=[{label:"Dashboard",paths:To.paths.children.tab1,icon:dr},{label:"Notifications",paths:To.paths.children.tab2,icon:pm},{label:"Messages",paths:To.paths.children.tab3,icon:mm},{label:"Favorites",paths:To.paths.children.tab4,icon:ws}],hj=[{label:"Dashboard",paths:To.paths.children.tab1},{label:"Notifications",paths:To.paths.children.tab2},{label:"Messages",paths:To.paths.children.tab3},{label:"Favorites",paths:To.paths.children.tab4}],sl=gj(To.paths.children.tab2.fullPaths),pj=[{title:"basic",tabs:hj},{title:"with icons (vertical layout)",tabs:io},{title:"with icons (horizontal layout)",tabs:io,iconLayout:Yx.Horizontal},{title:"plain color variant",tabs:io,colorVariant:te.Plain},{title:"bar direction: top",tabs:io,barDirection:ii.Top},{title:"bar direction: left",tabs:io,barDirection:ii.Left},{title:"bar direction: right",tabs:io,barDirection:ii.Right}],kl={max:600,min:150,default:600},U1=gr()({tagName:"vira-dynamic-width-tabs-example",cssVars:{"vira-dynamic-width-tabs-example-width":ra(kl.default)},state(){return{intervalId:void 0,increment:2}},styles:i(({cssVars:e})=>k`
        :host {
            display: block;
            border: 1px solid
                ${S.colors["vira-grey-foreground-decoration"].foreground.value};
            width: ${e["vira-dynamic-width-tabs-example-width"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t,cssVars:n}){globalThis.clearInterval(e.intervalId),r({intervalId:globalThis.setInterval(()=>{const o=kd.isNumber(jD(rC({onElement:t,forCssVar:n["vira-dynamic-width-tabs-example-width"]})))||kl.default;(o>=kl.max||o<=kl.min)&&r({increment:e.increment*-1}),Hh({onElement:t,forCssVar:n["vira-dynamic-width-tabs-example-width"],toValue:ra(o+e.increment)})},10)})},cleanup({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:void 0})},render(){return m`
            <slot></slot>
        `}}),mj=Ee({parent:wr,title:On.tagName,descriptionParagraphs:["A tab bar element with route-based selection. Tabs render as links for proper SPA navigation."],defineExamples({defineExample:e}){pj.forEach(({title:r,...t})=>{e({title:r,render(){return m`
                        <${On.assign({router:al,currentRoute:sl,...t})}></${On}>
                    `}})}),e({title:"overflow into menu",styles:k`
                :host {
                    max-width: 200px;
                    border: 1px solid red;
                }
            `,render(){return m`
                    <${On.assign({tabs:io,router:al,currentRoute:sl})}></${On}>
                `}}),e({title:"big font",styles:k`
                :host {
                    font-size: 32px;
                    max-width: 200px;
                    border: 1px solid red;
                }
            `,render(){return m`
                    <${On.assign({tabs:io,router:al,currentRoute:sl})}></${On}>
                `}}),e({title:"dynamic overflow",styles:k`
                :host {
                    width: ${kl.max+20}px;
                }
            `,render(){return m`
                    <${U1}>
                        <${On.assign({tabs:io,router:al,currentRoute:sl})}></${On}>
                    </${U1}>
                `}}),e({title:"all combinations",styles:k`
                .grid {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    gap: 24px;
                    align-items: start;
                }

                h4 {
                    margin: 0;
                }
            `,render(){const r=[ii.Top,ii.Bottom,ii.Left,ii.Right],t=[te.Accent,te.Plain];return m`
                    ${t.map(n=>m`
                            <h4>${n} variant</h4>
                            <div class="grid">
                                ${r.map(o=>m`
                                        <span>${o}</span>
                                        <${On.assign({tabs:io,router:al,currentRoute:sl,barDirection:o,colorVariant:n})}></${On}>
                                    `)}
                            </div>
                        `)}
                `}})}}),bj=[{label:"basic",isClickable:void 0},{label:"selectable",isClickable:{selected:!0}},{label:"cancellable",isClickable:{cancellable:!0}},{label:"disabled",disabled:!0,isClickable:{selected:!0}}],vj=Ee({parent:wr,title:il.tagName,descriptionParagraphs:["A tag element with selectable, cancellable, size, emphasis, and color variants."],defineExamples({defineExample:e}){cf.forEach(r=>{e({title:r,styles:k`
                    table {
                        border-collapse: collapse;
                    }

                    th,
                    td {
                        padding: 8px;
                        text-align: center;
                    }

                    th {
                        font-weight: normal;
                    }

                    .cancelled {
                        visibility: hidden;
                    }
                `,state(){return{clicked:{}}},render({state:t,updateState:n}){return bj.map(({label:o,...a})=>m`
                            <h3>${o}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${ca.map(s=>m`
                                                <th>${s}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${df.map(s=>m`
                                            <tr>
                                                <th>${s}</th>
                                                ${ca.map(l=>{const u=[o,s,l].join("-"),f=M.isBoolean(a.isClickable?.selected)?{selected:!t.clicked[u]}:a.isClickable,g=m`
                                                        <${il.assign({text:"Label",...a,size:r,emphasis:s,color:l,isClickable:f})}
                                                            class=${Gr({cancelled:!!a.isClickable?.cancellable&&!!t.clicked[u]})}
                                                            ${L(il.events.cancel,()=>{n({clicked:{...t.clicked,[u]:!0}})})}
                                                            ${L(il.events.toggle,h=>{n({clicked:{...t.clicked,[u]:!h.detail}})})}
                                                        ></${il}>
                                                    `;return m`
                                                        <td>${g}</td>
                                                    `})}
                                            </tr>
                                        `)}
                                </tbody>
                            </table>
                        `)}})})}});function Nm(e,r){ns(e).forEach(t=>{r({title:t.name,styles:k`
                button {
                    ${qr}
                    display: flex;
                    padding: 8px;
                    border-radius: ${R["vira-form-radius"].value};
                    cursor: pointer;

                    &:hover {
                        background-color: #f2f2f2;

                        & ${B} {
                            border-color: red;
                        }
                    }

                    &:active {
                        background-color: #999999;

                        & ${B} {
                            border-color: transparent;
                        }
                    }
                }

                ${B} {
                    border: 1px solid transparent;
                }
            `,render({controls:n}){const o=k`
                    ${y["vira-icon-fill-color"].name}: ${Re(n["Fill Color"]||"inherit")};
                    ${y["vira-icon-stroke-color"].name}: ${Re(n["Stroke Color"]||"inherit")};
                    ${y["vira-icon-stroke-width"].name}: ${Re(n["Stroke Width"]?ra(n["Stroke Width"]):"inherit")};
                `;return m`
                    <button>
                        <${B.assign({icon:t})}
                            style=${o}
                        ></${B}>
                    </button>
                `}})})}i(Nm,"defineIconExamples");const yj=Ee({title:"16px Icons",parent:Ff,defineExamples({defineExample:e}){Nm(aO,e)}}),wj=Ee({title:"24px Icons",parent:Ff,defineExamples({defineExample:e}){Nm(iO,e)}}),kj=Ee({title:"Feather Icons",parent:Ff,defineExamples({defineExample:e}){Nm(bl,e)}}),$j=[wr,Ff,Im,Af],xj=[WL,GL,YL,JL,XL,QL,rj,tj,nj,oj,ij,aj,sj,OL,_L,jL,lj,zL,cj,fj,mj,vj].sort((e,r)=>e.title.localeCompare(r.title)),Dj=[...xj,TL,IL,NL,kj,yj,wj,VL,...ML],Cj=[...$j,...Dj];Xn()({tagName:"vira-book-app",styles:k`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${dc} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return m`
            <${dc.assign({internalRouterConfig:{basePath:om("vira"),useInternalRouter:!0},pages:Cj,themeColor:"#33ccff"})}>
                <h1 slot=${dc.slotNames.navHeader}>Vira</h1>
            </${dc}>
        `}});export{Xn as d,m as h};
