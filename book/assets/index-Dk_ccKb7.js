var u4=Object.defineProperty;var i=(e,r)=>u4(e,"name",{value:r,configurable:!0});i(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}i(t,"getFetchOpts");function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}i(n,"processPreload")},"polyfill")();var ct;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(ct||(ct={}));function gd(e,r=t=>t){const t=new Map;return e.filter(n=>{const o=r(n);return t.get(o)?!1:(t.set(o,n),!0)})}i(gd,"removeDuplicates");class xh{static{i(this,"Diff")}diff(r,t,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const a=this.castInput(r,n),s=this.castInput(t,n),l=this.removeEmpty(this.tokenize(a,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(l,u,n,o)}diffWithOptionsObj(r,t,n,o){var a;const s=i(A=>{if(A=this.postProcess(A,n),o){setTimeout(function(){o(A)},0);return}else return A},"done"),l=t.length,u=r.length;let f=1,g=l+u;n.maxEditLength!=null&&(g=Math.min(g,n.maxEditLength));const h=(a=n.timeout)!==null&&a!==void 0?a:1/0,p=Date.now()+h,b=[{oldPos:-1,lastComponent:void 0}];let v=this.extractCommon(b[0],t,r,0,n);if(b[0].oldPos+1>=u&&v+1>=l)return s(this.buildValues(b[0].lastComponent,t,r));let $=-1/0,C=1/0;const E=i(()=>{for(let A=Math.max($,-f);A<=Math.min(C,f);A+=2){let N;const _=b[A-1],H=b[A+1];_&&(b[A-1]=void 0);let ce=!1;if(H){const be=H.oldPos-A;ce=H&&0<=be&&be<l}const Te=_&&_.oldPos+1<u;if(!ce&&!Te){b[A]=void 0;continue}if(!Te||ce&&_.oldPos<H.oldPos?N=this.addToPath(H,!0,!1,0,n):N=this.addToPath(_,!1,!0,1,n),v=this.extractCommon(N,t,r,A,n),N.oldPos+1>=u&&v+1>=l)return s(this.buildValues(N.lastComponent,t,r))||!0;b[A]=N,N.oldPos+1>=u&&(C=Math.min(C,A-1)),v+1>=l&&($=Math.max($,A+1))}f++},"execEditLength");if(o)i(function A(){setTimeout(function(){if(f>g||Date.now()>p)return o(void 0);E()||A()},0)},"exec")();else for(;f<=g&&Date.now()<=p;){const A=E();if(A)return A}}addToPath(r,t,n,o,a){const s=r.lastComponent;return s&&!a.oneChangePerToken&&s.added===t&&s.removed===n?{oldPos:r.oldPos+o,lastComponent:{count:s.count+1,added:t,removed:n,previousComponent:s.previousComponent}}:{oldPos:r.oldPos+o,lastComponent:{count:1,added:t,removed:n,previousComponent:s}}}extractCommon(r,t,n,o,a){const s=t.length,l=n.length;let u=r.oldPos,f=u-o,g=0;for(;f+1<s&&u+1<l&&this.equals(n[u+1],t[f+1],a);)f++,u++,g++,a.oneChangePerToken&&(r.lastComponent={count:1,previousComponent:r.lastComponent,added:!1,removed:!1});return g&&!a.oneChangePerToken&&(r.lastComponent={count:g,previousComponent:r.lastComponent,added:!1,removed:!1}),r.oldPos=u,f}equals(r,t,n){return n.comparator?n.comparator(r,t):r===t||!!n.ignoreCase&&r.toLowerCase()===t.toLowerCase()}removeEmpty(r){const t=[];for(let n=0;n<r.length;n++)r[n]&&t.push(r[n]);return t}castInput(r,t){return r}tokenize(r,t){return Array.from(r)}join(r){return r.join("")}postProcess(r,t){return r}get useLongestToken(){return!1}buildValues(r,t,n){const o=[];let a;for(;r;)o.push(r),a=r.previousComponent,delete r.previousComponent,r=a;o.reverse();const s=o.length;let l=0,u=0,f=0;for(;l<s;l++){const g=o[l];if(g.removed)g.value=this.join(n.slice(f,f+g.count)),f+=g.count;else{if(!g.added&&this.useLongestToken){let h=t.slice(u,u+g.count);h=h.map(function(p,b){const v=n[f+b];return v.length>p.length?v:p}),g.value=this.join(h)}else g.value=this.join(t.slice(u,u+g.count));u+=g.count,g.added||(f+=g.count)}}return o}}function jm(e,r){let t;for(t=0;t<e.length&&t<r.length;t++)if(e[t]!=r[t])return e.slice(0,t);return e.slice(0,t)}i(jm,"longestCommonPrefix");function Um(e,r){let t;if(!e||!r||e[e.length-1]!=r[r.length-1])return"";for(t=0;t<e.length&&t<r.length;t++)if(e[e.length-(t+1)]!=r[r.length-(t+1)])return e.slice(-t);return e.slice(-t)}i(Um,"longestCommonSuffix");function og(e,r,t){if(e.slice(0,r.length)!=r)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(r)}; this is a bug`);return t+e.slice(r.length)}i(og,"replacePrefix");function ig(e,r,t){if(!r)return e+t;if(e.slice(-r.length)!=r)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(r)}; this is a bug`);return e.slice(0,-r.length)+t}i(ig,"replaceSuffix");function Ws(e,r){return og(e,r,"")}i(Ws,"removePrefix$1");function Lu(e,r){return ig(e,r,"")}i(Lu,"removeSuffix$1");function _m(e,r){return r.slice(0,c4(e,r))}i(_m,"maximumOverlap");function c4(e,r){let t=0;e.length>r.length&&(t=e.length-r.length);let n=r.length;e.length<r.length&&(n=e.length);const o=Array(n);let a=0;o[0]=0;for(let s=1;s<n;s++){for(r[s]==r[a]?o[s]=o[a]:o[s]=a;a>0&&r[s]!=r[a];)a=o[a];r[s]==r[a]&&a++}a=0;for(let s=t;s<e.length;s++){for(;a>0&&e[s]!=r[a];)a=o[a];e[s]==r[a]&&a++}return a}i(c4,"overlapCount");function Ks(e){let r;for(r=e.length-1;r>=0&&e[r].match(/\s/);r--);return e.substring(r+1)}i(Ks,"trailingWs");function zo(e){const r=e.match(/^\s*/);return r?r[0]:""}i(zo,"leadingWs");const xc="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",d4=new RegExp(`[${xc}]+|\\s+|[^${xc}]`,"ug");class f4 extends xh{static{i(this,"WordDiff")}equals(r,t,n){return n.ignoreCase&&(r=r.toLowerCase(),t=t.toLowerCase()),r.trim()===t.trim()}tokenize(r,t={}){let n;if(t.intlSegmenter){const s=t.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const l of Array.from(s.segment(r))){const u=l.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(u)?n[n.length-1]+=u:n.push(u)}}else n=r.match(d4)||[];const o=[];let a=null;return n.forEach(s=>{/\s/.test(s)?a==null?o.push(s):o.push(o.pop()+s):a!=null&&/\s/.test(a)?o[o.length-1]==a?o.push(o.pop()+s):o.push(a+s):o.push(s),a=s}),o}join(r){return r.map((t,n)=>n==0?t:t.replace(/^\s+/,"")).join("")}postProcess(r,t){if(!r||t.oneChangePerToken)return r;let n=null,o=null,a=null;return r.forEach(s=>{s.added?o=s:s.removed?a=s:((o||a)&&zm(n,a,o,s),n=s,o=null,a=null)}),(o||a)&&zm(n,a,o,null),r}}const g4=new f4;function h4(e,r,t){return t?.ignoreWhitespace!=null&&!t.ignoreWhitespace?b4(e,r,t):g4.diff(e,r,t)}i(h4,"diffWords");function zm(e,r,t,n){if(r&&t){const o=zo(r.value),a=Ks(r.value),s=zo(t.value),l=Ks(t.value);if(e){const u=jm(o,s);e.value=ig(e.value,s,u),r.value=Ws(r.value,u),t.value=Ws(t.value,u)}if(n){const u=Um(a,l);n.value=og(n.value,l,u),r.value=Lu(r.value,u),t.value=Lu(t.value,u)}}else if(t){if(e){const o=zo(t.value);t.value=t.value.substring(o.length)}if(n){const o=zo(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=zo(n.value),a=zo(r.value),s=Ks(r.value),l=jm(o,a);r.value=Ws(r.value,l);const u=Um(Ws(o,l),s);r.value=Lu(r.value,u),n.value=og(n.value,o,u),e.value=ig(e.value,o,o.slice(0,o.length-u.length))}else if(n){const o=zo(n.value),a=Ks(r.value),s=_m(a,o);r.value=Lu(r.value,s)}else if(e){const o=Ks(e.value),a=zo(r.value),s=_m(o,a);r.value=Ws(r.value,s)}}i(zm,"dedupeWhitespaceInChangeObjects");class p4 extends xh{static{i(this,"WordsWithSpaceDiff")}tokenize(r){const t=new RegExp(`(\\r?\\n)|[${xc}]+|[^\\S\\n\\r]+|[^${xc}]`,"ug");return r.match(t)||[]}}const m4=new p4;function b4(e,r,t){return m4.diff(e,r,t)}i(b4,"diffWordsWithSpace");class v4 extends xh{static{i(this,"LineDiff")}constructor(){super(...arguments),this.tokenize=k4}equals(r,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(r.endsWith(`
`)&&(r=r.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(r,t,n)}}const y4=new v4;function w4(e,r,t){return y4.diff(e,r,t)}i(w4,"diffLines");function k4(e,r){r.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const t=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const a=n[o];o%2&&!r.newlineIsToken?t[t.length-1]+=a:t.push(a)}return t}i(k4,"tokenize$1");function qm(e,r){return K1(e,new Map)}i(qm,"sortObject");function K1(e,r,t){if(e&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object){if(r.has(e))return r.get(e);const n={};return r.set(e,n),Object.entries(e).sort((o,a)=>o[0].localeCompare(a[0])).forEach(([o,a])=>{const s=K1(a,r);n[o]=s}),n}else return e}i(K1,"recursivelySortObject");var $4=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,x4=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,D4=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Sf={Space_Separator:$4,ID_Start:x4,ID_Continue:D4},Cr={isSpaceSeparator(e){return typeof e=="string"&&Sf.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Sf.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Sf.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let ag,At,$o,Dc,ci,Un,Qr,Dh,$l;var C4=i(function(r,t){ag=String(r),At="start",$o=[],Dc=0,ci=1,Un=0,Qr=void 0,Dh=void 0,$l=void 0;do Qr=E4(),S4[At]();while(Qr.type!=="eof");return typeof t=="function"?sg({"":$l},"",t):$l},"parse");function sg(e,r,t){const n=e[r];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const a=String(o),s=sg(n,a,t);s===void 0?delete n[a]:Object.defineProperty(n,a,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const a=sg(n,o,t);a===void 0?delete n[o]:Object.defineProperty(n,o,{value:a,writable:!0,enumerable:!0,configurable:!0})}return t.call(e,r,n)}i(sg,"internalize");let he,de,ll,bo,De;function E4(){for(he="default",de="",ll=!1,bo=1;;){De=To();const e=H1[he]();if(e)return e}}i(E4,"lex");function To(){if(ag[Dc])return String.fromCodePoint(ag.codePointAt(Dc))}i(To,"peek");function O(){const e=To();return e===`
`?(ci++,Un=0):e?Un+=e.length:Un++,e&&(Dc+=e.length),e}i(O,"read");const H1={default(){switch(De){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":O();return;case"/":O(),he="comment";return;case void 0:return O(),ar("eof")}if(Cr.isSpaceSeparator(De)){O();return}return H1[At]()},comment(){switch(De){case"*":O(),he="multiLineComment";return;case"/":O(),he="singleLineComment";return}throw sr(O())},multiLineComment(){switch(De){case"*":O(),he="multiLineCommentAsterisk";return;case void 0:throw sr(O())}O()},multiLineCommentAsterisk(){switch(De){case"*":O();return;case"/":O(),he="default";return;case void 0:throw sr(O())}O(),he="multiLineComment"},singleLineComment(){switch(De){case`
`:case"\r":case"\u2028":case"\u2029":O(),he="default";return;case void 0:return O(),ar("eof")}O()},value(){switch(De){case"{":case"[":return ar("punctuator",O());case"n":return O(),Mi("ull"),ar("null",null);case"t":return O(),Mi("rue"),ar("boolean",!0);case"f":return O(),Mi("alse"),ar("boolean",!1);case"-":case"+":O()==="-"&&(bo=-1),he="sign";return;case".":de=O(),he="decimalPointLeading";return;case"0":de=O(),he="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":de=O(),he="decimalInteger";return;case"I":return O(),Mi("nfinity"),ar("numeric",1/0);case"N":return O(),Mi("aN"),ar("numeric",NaN);case'"':case"'":ll=O()==='"',de="",he="string";return}throw sr(O())},identifierNameStartEscape(){if(De!=="u")throw sr(O());O();const e=lg();switch(e){case"$":case"_":break;default:if(!Cr.isIdStartChar(e))throw Vm();break}de+=e,he="identifierName"},identifierName(){switch(De){case"$":case"_":case"‌":case"‍":de+=O();return;case"\\":O(),he="identifierNameEscape";return}if(Cr.isIdContinueChar(De)){de+=O();return}return ar("identifier",de)},identifierNameEscape(){if(De!=="u")throw sr(O());O();const e=lg();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!Cr.isIdContinueChar(e))throw Vm();break}de+=e,he="identifierName"},sign(){switch(De){case".":de=O(),he="decimalPointLeading";return;case"0":de=O(),he="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":de=O(),he="decimalInteger";return;case"I":return O(),Mi("nfinity"),ar("numeric",bo*(1/0));case"N":return O(),Mi("aN"),ar("numeric",NaN)}throw sr(O())},zero(){switch(De){case".":de+=O(),he="decimalPoint";return;case"e":case"E":de+=O(),he="decimalExponent";return;case"x":case"X":de+=O(),he="hexadecimal";return}return ar("numeric",bo*0)},decimalInteger(){switch(De){case".":de+=O(),he="decimalPoint";return;case"e":case"E":de+=O(),he="decimalExponent";return}if(Cr.isDigit(De)){de+=O();return}return ar("numeric",bo*Number(de))},decimalPointLeading(){if(Cr.isDigit(De)){de+=O(),he="decimalFraction";return}throw sr(O())},decimalPoint(){switch(De){case"e":case"E":de+=O(),he="decimalExponent";return}if(Cr.isDigit(De)){de+=O(),he="decimalFraction";return}return ar("numeric",bo*Number(de))},decimalFraction(){switch(De){case"e":case"E":de+=O(),he="decimalExponent";return}if(Cr.isDigit(De)){de+=O();return}return ar("numeric",bo*Number(de))},decimalExponent(){switch(De){case"+":case"-":de+=O(),he="decimalExponentSign";return}if(Cr.isDigit(De)){de+=O(),he="decimalExponentInteger";return}throw sr(O())},decimalExponentSign(){if(Cr.isDigit(De)){de+=O(),he="decimalExponentInteger";return}throw sr(O())},decimalExponentInteger(){if(Cr.isDigit(De)){de+=O();return}return ar("numeric",bo*Number(de))},hexadecimal(){if(Cr.isHexDigit(De)){de+=O(),he="hexadecimalInteger";return}throw sr(O())},hexadecimalInteger(){if(Cr.isHexDigit(De)){de+=O();return}return ar("numeric",bo*Number(de))},string(){switch(De){case"\\":O(),de+=A4();return;case'"':if(ll)return O(),ar("string",de);de+=O();return;case"'":if(!ll)return O(),ar("string",de);de+=O();return;case`
`:case"\r":throw sr(O());case"\u2028":case"\u2029":M4(De);break;case void 0:throw sr(O())}de+=O()},start(){switch(De){case"{":case"[":return ar("punctuator",O())}he="value"},beforePropertyName(){switch(De){case"$":case"_":de=O(),he="identifierName";return;case"\\":O(),he="identifierNameStartEscape";return;case"}":return ar("punctuator",O());case'"':case"'":ll=O()==='"',he="string";return}if(Cr.isIdStartChar(De)){de+=O(),he="identifierName";return}throw sr(O())},afterPropertyName(){if(De===":")return ar("punctuator",O());throw sr(O())},beforePropertyValue(){he="value"},afterPropertyValue(){switch(De){case",":case"}":return ar("punctuator",O())}throw sr(O())},beforeArrayValue(){if(De==="]")return ar("punctuator",O());he="value"},afterArrayValue(){switch(De){case",":case"]":return ar("punctuator",O())}throw sr(O())},end(){throw sr(O())}};function ar(e,r){return{type:e,value:r,line:ci,column:Un}}i(ar,"newToken");function Mi(e){for(const r of e){if(To()!==r)throw sr(O());O()}}i(Mi,"literal");function A4(){switch(To()){case"b":return O(),"\b";case"f":return O(),"\f";case"n":return O(),`
`;case"r":return O(),"\r";case"t":return O(),"	";case"v":return O(),"\v";case"0":if(O(),Cr.isDigit(To()))throw sr(O());return"\0";case"x":return O(),F4();case"u":return O(),lg();case`
`:case"\u2028":case"\u2029":return O(),"";case"\r":return O(),To()===`
`&&O(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw sr(O());case void 0:throw sr(O())}return O()}i(A4,"escape");function F4(){let e="",r=To();if(!Cr.isHexDigit(r)||(e+=O(),r=To(),!Cr.isHexDigit(r)))throw sr(O());return e+=O(),String.fromCodePoint(parseInt(e,16))}i(F4,"hexEscape");function lg(){let e="",r=4;for(;r-- >0;){const t=To();if(!Cr.isHexDigit(t))throw sr(O());e+=O()}return String.fromCodePoint(parseInt(e,16))}i(lg,"unicodeEscape");const S4={start(){if(Qr.type==="eof")throw Ti();Mf()},beforePropertyName(){switch(Qr.type){case"identifier":case"string":Dh=Qr.value,At="afterPropertyName";return;case"punctuator":ju();return;case"eof":throw Ti()}},afterPropertyName(){if(Qr.type==="eof")throw Ti();At="beforePropertyValue"},beforePropertyValue(){if(Qr.type==="eof")throw Ti();Mf()},beforeArrayValue(){if(Qr.type==="eof")throw Ti();if(Qr.type==="punctuator"&&Qr.value==="]"){ju();return}Mf()},afterPropertyValue(){if(Qr.type==="eof")throw Ti();switch(Qr.value){case",":At="beforePropertyName";return;case"}":ju()}},afterArrayValue(){if(Qr.type==="eof")throw Ti();switch(Qr.value){case",":At="beforeArrayValue";return;case"]":ju()}},end(){}};function Mf(){let e;switch(Qr.type){case"punctuator":switch(Qr.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Qr.value;break}if($l===void 0)$l=e;else{const r=$o[$o.length-1];Array.isArray(r)?r.push(e):Object.defineProperty(r,Dh,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")$o.push(e),Array.isArray(e)?At="beforeArrayValue":At="beforePropertyName";else{const r=$o[$o.length-1];r==null?At="end":Array.isArray(r)?At="afterArrayValue":At="afterPropertyValue"}}i(Mf,"push");function ju(){$o.pop();const e=$o[$o.length-1];e==null?At="end":Array.isArray(e)?At="afterArrayValue":At="afterPropertyValue"}i(ju,"pop");function sr(e){return Cc(e===void 0?`JSON5: invalid end of input at ${ci}:${Un}`:`JSON5: invalid character '${G1(e)}' at ${ci}:${Un}`)}i(sr,"invalidChar");function Ti(){return Cc(`JSON5: invalid end of input at ${ci}:${Un}`)}i(Ti,"invalidEOF");function Vm(){return Un-=5,Cc(`JSON5: invalid identifier character at ${ci}:${Un}`)}i(Vm,"invalidIdentifier");function M4(e){console.warn(`JSON5: '${G1(e)}' in strings is not valid ECMAScript; consider escaping`)}i(M4,"separatorChar");function G1(e){const r={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(r[e])return r[e];if(e<" "){const t=e.charCodeAt(0).toString(16);return"\\x"+("00"+t).substring(t.length)}return e}i(G1,"formatChar");function Cc(e){const r=new SyntaxError(e);return r.lineNumber=ci,r.columnNumber=Un,r}i(Cc,"syntaxError");var T4=i(function(r,t,n){const o=[];let a="",s,l,u="",f;if(t!=null&&typeof t=="object"&&!Array.isArray(t)&&(n=t.space,f=t.quote,t=t.replacer),typeof t=="function")l=t;else if(Array.isArray(t)){s=[];for(const $ of t){let C;typeof $=="string"?C=$:(typeof $=="number"||$ instanceof String||$ instanceof Number)&&(C=String($)),C!==void 0&&s.indexOf(C)<0&&s.push(C)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),g("",{"":r});function g($,C){let E=C[$];switch(E!=null&&(typeof E.toJSON5=="function"?E=E.toJSON5($):typeof E.toJSON=="function"&&(E=E.toJSON($))),l&&(E=l.call(C,$,E)),E instanceof Number?E=Number(E):E instanceof String?E=String(E):E instanceof Boolean&&(E=E.valueOf()),E){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof E=="string")return h(E);if(typeof E=="number")return String(E);if(typeof E=="object")return Array.isArray(E)?v(E):p(E)}i(g,"serializeProperty");function h($){const C={"'":.1,'"':.2},E={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let A="";for(let _=0;_<$.length;_++){const H=$[_];switch(H){case"'":case'"':C[H]++,A+=H;continue;case"\0":if(Cr.isDigit($[_+1])){A+="\\x00";continue}}if(E[H]){A+=E[H];continue}if(H<" "){let ce=H.charCodeAt(0).toString(16);A+="\\x"+("00"+ce).substring(ce.length);continue}A+=H}const N=f||Object.keys(C).reduce((_,H)=>C[_]<C[H]?_:H);return A=A.replace(new RegExp(N,"g"),E[N]),N+A+N}i(h,"quoteString");function p($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let C=a;a=a+u;let E=s||Object.keys($),A=[];for(const _ of E){const H=g(_,$);if(H!==void 0){let ce=b(_)+":";u!==""&&(ce+=" "),ce+=H,A.push(ce)}}let N;if(A.length===0)N="{}";else{let _;if(u==="")_=A.join(","),N="{"+_+"}";else{let H=`,
`+a;_=A.join(H),N=`{
`+a+_+`,
`+C+"}"}}return o.pop(),a=C,N}i(p,"serializeObject");function b($){if($.length===0)return h($);const C=String.fromCodePoint($.codePointAt(0));if(!Cr.isIdStartChar(C))return h($);for(let E=C.length;E<$.length;E++)if(!Cr.isIdContinueChar(String.fromCodePoint($.codePointAt(E))))return h($);return $}i(b,"serializeKey");function v($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let C=a;a=a+u;let E=[];for(let N=0;N<$.length;N++){const _=g(String(N),$);E.push(_!==void 0?_:"null")}let A;if(E.length===0)A="[]";else if(u==="")A="["+E.join(",")+"]";else{let N=`,
`+a,_=E.join(N);A=`[
`+a+_+`,
`+C+"]"}return o.pop(),a=C,A}i(v,"serializeArray")},"stringify");const P4={parse:C4,stringify:T4};var I4=P4;const Z1="__@@augment-vir-undefined-sentinel@@__",N4=new RegExp(`['"]${Z1}['"]`);function x(e,r){if(typeof e=="string")return e;try{return I4.stringify(e,(n,o)=>o===void 0?Z1:typeof o=="bigint"?Number(o):o,r||void 0).split(N4).join("undefined")}catch{return String(e)}}i(x,"stringify");var B4=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var _n;(function(e){e.Node="node",e.Web="web"})(_n||(_n={}));function O4(){return B4?_n.Node:_n.Web}i(O4,"determineRuntimeEnv");const Y1=O4();function Ch(e){return Y1===e}i(Ch,"isRuntimeEnv");function J1(e){return e[Y1]()}i(J1,"perEnv");function R4(e,r){const t=typeof r=="string"&&typeof e=="string",n=typeof r!="string"||typeof e!="string",o=n?w4:h4,a=[t?"":`
`,x(r&&typeof r=="object"&&!Array.isArray(r)?qm(r):r,4),`
`].join(""),s=[t?"":`
`,x(e&&typeof e=="object"&&!Array.isArray(e)?qm(e):e,4),`
`].join(""),l=L4(n,o(a,s)),u=Ch(_n.Node);return[[u?Ao.Green:""," +added (unexpected, added in actual)",u?Ao.Red:""," -missing (expected, missing from actual)",u?Ao.Reset:""].join(""),t?`

`:`
`,l].join("")}i(R4,"prettyDiff");var Ao;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(Ao||(Ao={}));var Ec;(function(e){e.Added="+",e.Removed="-"})(Ec||(Ec={}));function L4(e,r){return e?r.flatMap(n=>n.value.split(`
`).map(o=>Wm(o,n)).join(`
`)).join(""):r.map(n=>Wm(void 0,n)).join("")}i(L4,"addDiffColors");function Wm(e,r){if(e!=null&&!e)return"";const t=Ch(_n.Node),n=r.added?Ec.Added:r.removed?Ec.Removed:e==null?"":" ",o=r.added?Ao.Green:r.removed?Ao.Red:Ao.Reset;return[t?o:"",n,e??r.value,Ao.Reset].join("")}i(Wm,"addColorToChange");function Ke(e){let r;try{r=Reflect.ownKeys(e)}catch{}return r??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}i(Ke,"getObjectTypedKeys");function j4(e){return Ke(e).filter(r=>isNaN(Number(r)))}i(j4,"getEnumKeys");function en(e){return j4(e).map(t=>e[t])}i(en,"getEnumValues");const U4=[".",":",";",",","?","!"],_4=new RegExp(`[${U4.join("")}]+$`);function Km(e){return e.replace(_4,"")}i(Km,"removeEndingPunctuation");function nt(e){return e==null||e===""||e==="undefined"||e==="null"?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):x(e)}i(nt,"extractErrorMessage");function ga(...e){const r=e.map(a=>nt(a)).filter(a=>!!Km(a)),t=r[r.length-1]?.endsWith("."),n=r.map(a=>Km(nt(a)));return(n.length<2?n[0]||"":n.join(": "))+(t?".":"")}i(ga,"combineErrorMessages");function Dr(e){return e instanceof Error?e:new Error(nt(e))}i(Dr,"ensureError");function ha(e,r){const t=Dr(e),n=ga(r,t.message);try{return t.message=n,t}catch{return new Error(n,{cause:e})}}i(ha,"ensureErrorAndPrependMessage");var P;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(P||(P={}));var Z;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(Z||(Z={}));Z.ClientError,Z.ServerError;P.Continue+"",Z.Information,P.SwitchingProtocols+"",Z.Information,P.Processing+"",Z.Information,P.EarlyHints+"",Z.Information,P.Ok+"",Z.Success,P.Created+"",Z.Success,P.Accepted+"",Z.Success,P.NonAuthoritativeInformation+"",Z.Success,P.NoContent+"",Z.Success,P.ResetContent+"",Z.Success,P.PartialContent+"",Z.Success,P.MultiStatus+"",Z.Success,P.AlreadyReported+"",Z.Success,P.ImUsed+"",Z.Success,P.MultipleChoices+"",Z.Redirect,P.MovedPermanently+"",Z.Redirect,P.Found+"",Z.Redirect,P.SeeOther+"",Z.Redirect,P.NotModified+"",Z.Redirect,P.UseProxy+"",Z.Redirect,P.Unused+"",Z.Redirect,P.TemporaryRedirect+"",Z.Redirect,P.PermanentRedirect+"",Z.Redirect,P.BadRequest+"",Z.ClientError,P.Unauthorized+"",Z.ClientError,P.PaymentRequired+"",Z.ClientError,P.Forbidden+"",Z.ClientError,P.NotFound+"",Z.ClientError,P.MethodNotAllowed+"",Z.ClientError,P.NotAcceptable+"",Z.ClientError,P.ProxyAuthenticationRequired+"",Z.ClientError,P.RequestTimeout+"",Z.ClientError,P.Conflict+"",Z.ClientError,P.Gone+"",Z.ClientError,P.LengthRequired+"",Z.ClientError,P.PreconditionFailed+"",Z.ClientError,P.PayloadTooLarge+"",Z.ClientError,P.UriTooLong+"",Z.ClientError,P.UnsupportedMediaType+"",Z.ClientError,P.RangeNotSatisfiable+"",Z.ClientError,P.ExpectationFailed+"",Z.ClientError,P.ImATeapot+"",Z.ClientError,P.MisdirectedRequest+"",Z.ClientError,P.UnprocessableContent+"",Z.ClientError,P.Locked+"",Z.ClientError,P.FailedDependency+"",Z.ClientError,P.TooEarly+"",Z.ClientError,P.UpgradeRequired+"",Z.ClientError,P.PreconditionRequired+"",Z.ClientError,P.TooManyRequests+"",Z.ClientError,P.RequestHeaderFieldsTooLarge+"",Z.ClientError,P.UnavailableForLegalReasons+"",Z.ClientError,P.InternalServerError+"",Z.ServerError,P.NotImplemented+"",Z.ServerError,P.BadGateway+"",Z.ServerError,P.ServiceUnavailable+"",Z.ServerError,P.GatewayTimeout+"",Z.ServerError,P.HttpVersionNotSupported+"",Z.ServerError,P.VariantAlsoNegotiates+"",Z.ServerError,P.InsufficientStorage+"",Z.ServerError,P.LoopDetected+"",Z.ServerError,P.NotExtended+"",Z.ServerError,P.NetworkAuthenticationRequired+"",Z.ServerError;const fc={[Z.Information]:[P.Continue,P.SwitchingProtocols,P.Processing,P.EarlyHints],[Z.Success]:[P.Ok,P.Created,P.Accepted,P.NonAuthoritativeInformation,P.NoContent,P.ResetContent,P.PartialContent,P.MultiStatus,P.AlreadyReported,P.ImUsed],[Z.Redirect]:[P.MultipleChoices,P.MovedPermanently,P.Found,P.SeeOther,P.NotModified,P.UseProxy,P.Unused,P.TemporaryRedirect,P.PermanentRedirect],[Z.ClientError]:[P.BadRequest,P.Unauthorized,P.PaymentRequired,P.Forbidden,P.NotFound,P.MethodNotAllowed,P.NotAcceptable,P.ProxyAuthenticationRequired,P.RequestTimeout,P.Conflict,P.Gone,P.LengthRequired,P.PreconditionFailed,P.PayloadTooLarge,P.UriTooLong,P.UnsupportedMediaType,P.RangeNotSatisfiable,P.ExpectationFailed,P.ImATeapot,P.MisdirectedRequest,P.UnprocessableContent,P.Locked,P.FailedDependency,P.TooEarly,P.UpgradeRequired,P.PreconditionRequired,P.TooManyRequests,P.RequestHeaderFieldsTooLarge,P.UnavailableForLegalReasons],[Z.ServerError]:[P.InternalServerError,P.NotImplemented,P.BadGateway,P.ServiceUnavailable,P.GatewayTimeout,P.HttpVersionNotSupported,P.VariantAlsoNegotiates,P.InsufficientStorage,P.LoopDetected,P.NotExtended,P.NetworkAuthenticationRequired]};function Eh({min:e,max:r}){return e>r?{min:r,max:e}:{min:e,max:r}}i(Eh,"ensureMinMax");class Ac{static{i(this,"DeferredPromise")}promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((r,t)=>{this.resolve=n=>(this.isSettled=!0,r(n)),this.reject=n=>{this.isSettled=!0,t(Dr(n))}})}}class pa extends Error{static{i(this,"LuxonError")}}class z4 extends pa{static{i(this,"InvalidDateTimeError")}constructor(r){super(`Invalid DateTime: ${r.toMessage()}`)}}class q4 extends pa{static{i(this,"InvalidIntervalError")}constructor(r){super(`Invalid Interval: ${r.toMessage()}`)}}class V4 extends pa{static{i(this,"InvalidDurationError")}constructor(r){super(`Invalid Duration: ${r.toMessage()}`)}}class za extends pa{static{i(this,"ConflictingSpecificationError")}}class X1 extends pa{static{i(this,"InvalidUnitError")}constructor(r){super(`Invalid unit ${r}`)}}class wt extends pa{static{i(this,"InvalidArgumentError")}}class qo extends pa{static{i(this,"ZoneIsAbstractError")}constructor(){super("Zone is an abstract class")}}const K="numeric",zn="short",nn="long",Fc={year:K,month:K,day:K},Q1={year:K,month:zn,day:K},W4={year:K,month:zn,day:K,weekday:zn},e2={year:K,month:nn,day:K},r2={year:K,month:nn,day:K,weekday:nn},t2={hour:K,minute:K},n2={hour:K,minute:K,second:K},o2={hour:K,minute:K,second:K,timeZoneName:zn},i2={hour:K,minute:K,second:K,timeZoneName:nn},a2={hour:K,minute:K,hourCycle:"h23"},s2={hour:K,minute:K,second:K,hourCycle:"h23"},l2={hour:K,minute:K,second:K,hourCycle:"h23",timeZoneName:zn},u2={hour:K,minute:K,second:K,hourCycle:"h23",timeZoneName:nn},c2={year:K,month:K,day:K,hour:K,minute:K},d2={year:K,month:K,day:K,hour:K,minute:K,second:K},f2={year:K,month:zn,day:K,hour:K,minute:K},g2={year:K,month:zn,day:K,hour:K,minute:K,second:K},K4={year:K,month:zn,day:K,weekday:zn,hour:K,minute:K},h2={year:K,month:nn,day:K,hour:K,minute:K,timeZoneName:zn},p2={year:K,month:nn,day:K,hour:K,minute:K,second:K,timeZoneName:zn},m2={year:K,month:nn,day:K,weekday:nn,hour:K,minute:K,timeZoneName:nn},b2={year:K,month:nn,day:K,weekday:nn,hour:K,minute:K,second:K,timeZoneName:nn};class au{static{i(this,"Zone")}get type(){throw new qo}get name(){throw new qo}get ianaName(){return this.name}get isUniversal(){throw new qo}offsetName(r,t){throw new qo}formatOffset(r,t){throw new qo}offset(r){throw new qo}equals(r){throw new qo}get isValid(){throw new qo}}let Tf=null;class hd extends au{static{i(this,"SystemZone")}static get instance(){return Tf===null&&(Tf=new hd),Tf}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(r,{format:t,locale:n}){return F2(r,t,n)}formatOffset(r,t){return xl(this.offset(r),t)}offset(r){return-new Date(r).getTimezoneOffset()}equals(r){return r.type==="system"}get isValid(){return!0}}const ug=new Map;function H4(e){let r=ug.get(e);return r===void 0&&(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),ug.set(e,r)),r}i(H4,"makeDTF");const G4={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Z4(e,r){const t=e.format(r).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t),[,o,a,s,l,u,f,g]=n;return[s,o,a,l,u,f,g]}i(Z4,"hackyOffset");function Y4(e,r){const t=e.formatToParts(r),n=[];for(let o=0;o<t.length;o++){const{type:a,value:s}=t[o],l=G4[a];a==="era"?n[l]=s:ae(l)||(n[l]=parseInt(s,10))}return n}i(Y4,"partsOffset");const Pf=new Map;class Io extends au{static{i(this,"IANAZone")}static create(r){let t=Pf.get(r);return t===void 0&&Pf.set(r,t=new Io(r)),t}static resetCache(){Pf.clear(),ug.clear()}static isValidSpecifier(r){return this.isValidZone(r)}static isValidZone(r){if(!r)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:r}).format(),!0}catch{return!1}}constructor(r){super(),this.zoneName=r,this.valid=Io.isValidZone(r)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(r,{format:t,locale:n}){return F2(r,t,n,this.name)}formatOffset(r,t){return xl(this.offset(r),t)}offset(r){if(!this.valid)return NaN;const t=new Date(r);if(isNaN(t))return NaN;const n=H4(this.name);let[o,a,s,l,u,f,g]=n.formatToParts?Y4(n,t):Z4(n,t);l==="BC"&&(o=-Math.abs(o)+1);const p=md({year:o,month:a,day:s,hour:u===24?0:u,minute:f,second:g,millisecond:0});let b=+t;const v=b%1e3;return b-=v>=0?v:1e3+v,(p-b)/(60*1e3)}equals(r){return r.type==="iana"&&r.name===this.name}get isValid(){return this.valid}}let Hm={};function J4(e,r={}){const t=JSON.stringify([e,r]);let n=Hm[t];return n||(n=new Intl.ListFormat(e,r),Hm[t]=n),n}i(J4,"getCachedLF");const cg=new Map;function dg(e,r={}){const t=JSON.stringify([e,r]);let n=cg.get(t);return n===void 0&&(n=new Intl.DateTimeFormat(e,r),cg.set(t,n)),n}i(dg,"getCachedDTF");const fg=new Map;function X4(e,r={}){const t=JSON.stringify([e,r]);let n=fg.get(t);return n===void 0&&(n=new Intl.NumberFormat(e,r),fg.set(t,n)),n}i(X4,"getCachedINF");const gg=new Map;function Q4(e,r={}){const{base:t,...n}=r,o=JSON.stringify([e,n]);let a=gg.get(o);return a===void 0&&(a=new Intl.RelativeTimeFormat(e,r),gg.set(o,a)),a}i(Q4,"getCachedRTF");let ul=null;function e3(){return ul||(ul=new Intl.DateTimeFormat().resolvedOptions().locale,ul)}i(e3,"systemLocale");const hg=new Map;function v2(e){let r=hg.get(e);return r===void 0&&(r=new Intl.DateTimeFormat(e).resolvedOptions(),hg.set(e,r)),r}i(v2,"getCachedIntResolvedOptions");const pg=new Map;function r3(e){let r=pg.get(e);if(!r){const t=new Intl.Locale(e);r="getWeekInfo"in t?t.getWeekInfo():t.weekInfo,"minimalDays"in r||(r={...y2,...r}),pg.set(e,r)}return r}i(r3,"getCachedWeekInfo");function t3(e){const r=e.indexOf("-x-");r!==-1&&(e=e.substring(0,r));const t=e.indexOf("-u-");if(t===-1)return[e];{let n,o;try{n=dg(e).resolvedOptions(),o=e}catch{const u=e.substring(0,t);n=dg(u).resolvedOptions(),o=u}const{numberingSystem:a,calendar:s}=n;return[o,a,s]}}i(t3,"parseLocaleString");function n3(e,r,t){return(t||r)&&(e.includes("-u-")||(e+="-u"),t&&(e+=`-ca-${t}`),r&&(e+=`-nu-${r}`)),e}i(n3,"intlConfigString");function o3(e){const r=[];for(let t=1;t<=12;t++){const n=se.utc(2009,t,1);r.push(e(n))}return r}i(o3,"mapMonths");function i3(e){const r=[];for(let t=1;t<=7;t++){const n=se.utc(2016,11,13+t);r.push(e(n))}return r}i(i3,"mapWeekdays");function Uu(e,r,t,n){const o=e.listingMode();return o==="error"?null:o==="en"?t(r):n(r)}i(Uu,"listStuff");function a3(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||v2(e.locale).numberingSystem==="latn"}i(a3,"supportsFastNumbers");class s3{static{i(this,"PolyNumberFormatter")}constructor(r,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:a,...s}=n;if(!t||Object.keys(s).length>0){const l={useGrouping:!1,...n};n.padTo>0&&(l.minimumIntegerDigits=n.padTo),this.inf=X4(r,l)}}format(r){if(this.inf){const t=this.floor?Math.floor(r):r;return this.inf.format(t)}else{const t=this.floor?Math.floor(r):Th(r,3);return Mr(t,this.padTo)}}}class l3{static{i(this,"PolyDateFormatter")}constructor(r,t,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=r;else if(r.zone.type==="fixed"){const s=-1*(r.offset/60),l=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;r.offset!==0&&Io.create(l).valid?(o=l,this.dt=r):(o="UTC",this.dt=r.offset===0?r:r.setZone("UTC").plus({minutes:r.offset}),this.originalZone=r.zone)}else r.zone.type==="system"?this.dt=r:r.zone.type==="iana"?(this.dt=r,o=r.zone.name):(o="UTC",this.dt=r.setZone("UTC").plus({minutes:r.offset}),this.originalZone=r.zone);const a={...this.opts};a.timeZone=a.timeZone||o,this.dtf=dg(t,a)}format(){return this.originalZone?this.formatToParts().map(({value:r})=>r).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const r=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?r.map(t=>{if(t.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...t,value:n}}else return t}):r}resolvedOptions(){return this.dtf.resolvedOptions()}}class u3{static{i(this,"PolyRelFormatter")}constructor(r,t,n){this.opts={style:"long",...n},!t&&E2()&&(this.rtf=Q4(r,n))}format(r,t){return this.rtf?this.rtf.format(r,t):T3(t,r,this.opts.numeric,this.opts.style!=="long")}formatToParts(r,t){return this.rtf?this.rtf.formatToParts(r,t):[]}}const y2={firstDay:1,minimalDays:4,weekend:[6,7]};class je{static{i(this,"Locale")}static fromOpts(r){return je.create(r.locale,r.numberingSystem,r.outputCalendar,r.weekSettings,r.defaultToEN)}static create(r,t,n,o,a=!1){const s=r||mr.defaultLocale,l=s||(a?"en-US":e3()),u=t||mr.defaultNumberingSystem,f=n||mr.defaultOutputCalendar,g=bg(o)||mr.defaultWeekSettings;return new je(l,u,f,g,s)}static resetCache(){ul=null,cg.clear(),fg.clear(),gg.clear(),hg.clear(),pg.clear()}static fromObject({locale:r,numberingSystem:t,outputCalendar:n,weekSettings:o}={}){return je.create(r,t,n,o)}constructor(r,t,n,o,a){const[s,l,u]=t3(r);this.locale=s,this.numberingSystem=t||l||null,this.outputCalendar=n||u||null,this.weekSettings=o,this.intl=n3(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=a3(this)),this.fastNumbersCached}listingMode(){const r=this.isEnglish(),t=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return r&&t?"en":"intl"}clone(r){return!r||Object.getOwnPropertyNames(r).length===0?this:je.create(r.locale||this.specifiedLocale,r.numberingSystem||this.numberingSystem,r.outputCalendar||this.outputCalendar,bg(r.weekSettings)||this.weekSettings,r.defaultToEN||!1)}redefaultToEN(r={}){return this.clone({...r,defaultToEN:!0})}redefaultToSystem(r={}){return this.clone({...r,defaultToEN:!1})}months(r,t=!1){return Uu(this,r,T2,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");t&=!n;const o=t?{month:r,day:"numeric"}:{month:r},a=t?"format":"standalone";if(!this.monthsCache[a][r]){const s=n?l=>this.dtFormatter(l,o).format():l=>this.extract(l,o,"month");this.monthsCache[a][r]=o3(s)}return this.monthsCache[a][r]})}weekdays(r,t=!1){return Uu(this,r,N2,()=>{const n=t?{weekday:r,year:"numeric",month:"long",day:"numeric"}:{weekday:r},o=t?"format":"standalone";return this.weekdaysCache[o][r]||(this.weekdaysCache[o][r]=i3(a=>this.extract(a,n,"weekday"))),this.weekdaysCache[o][r]})}meridiems(){return Uu(this,void 0,()=>B2,()=>{if(!this.meridiemCache){const r={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[se.utc(2016,11,13,9),se.utc(2016,11,13,19)].map(t=>this.extract(t,r,"dayperiod"))}return this.meridiemCache})}eras(r){return Uu(this,r,O2,()=>{const t={era:r};return this.eraCache[r]||(this.eraCache[r]=[se.utc(-40,1,1),se.utc(2017,1,1)].map(n=>this.extract(n,t,"era"))),this.eraCache[r]})}extract(r,t,n){const o=this.dtFormatter(r,t),a=o.formatToParts(),s=a.find(l=>l.type.toLowerCase()===n);return s?s.value:null}numberFormatter(r={}){return new s3(this.intl,r.forceSimple||this.fastNumbers,r)}dtFormatter(r,t={}){return new l3(r,this.intl,t)}relFormatter(r={}){return new u3(this.intl,this.isEnglish(),r)}listFormatter(r={}){return J4(this.intl,r)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||v2(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:A2()?r3(this.locale):y2}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(r){return this.locale===r.locale&&this.numberingSystem===r.numberingSystem&&this.outputCalendar===r.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let If=null;class Mt extends au{static{i(this,"FixedOffsetZone")}static get utcInstance(){return If===null&&(If=new Mt(0)),If}static instance(r){return r===0?Mt.utcInstance:new Mt(r)}static parseSpecifier(r){if(r){const t=r.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new Mt(bd(t[1],t[2]))}return null}constructor(r){super(),this.fixed=r}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${xl(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${xl(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(r,t){return xl(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(r){return r.type==="fixed"&&r.fixed===this.fixed}get isValid(){return!0}}class c3 extends au{static{i(this,"InvalidZone")}constructor(r){super(),this.zoneName=r}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Xo(e,r){if(ae(e)||e===null)return r;if(e instanceof au)return e;if(m3(e)){const t=e.toLowerCase();return t==="default"?r:t==="local"||t==="system"?hd.instance:t==="utc"||t==="gmt"?Mt.utcInstance:Mt.parseSpecifier(t)||Io.create(e)}else return ii(e)?Mt.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new c3(e)}i(Xo,"normalizeZone");const Ah={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Gm={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},d3=Ah.hanidec.replace(/[\[|\]]/g,"").split("");function f3(e){let r=parseInt(e,10);if(isNaN(r)){r="";for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(e[t].search(Ah.hanidec)!==-1)r+=d3.indexOf(e[t]);else for(const o in Gm){const[a,s]=Gm[o];n>=a&&n<=s&&(r+=n-a)}}return parseInt(r,10)}else return r}i(f3,"parseDigits");const mg=new Map;function g3(){mg.clear()}i(g3,"resetDigitRegexCache");function Bn({numberingSystem:e},r=""){const t=e||"latn";let n=mg.get(t);n===void 0&&(n=new Map,mg.set(t,n));let o=n.get(r);return o===void 0&&(o=new RegExp(`${Ah[t]}${r}`),n.set(r,o)),o}i(Bn,"digitRegex");let Zm=i(()=>Date.now(),"now"),Ym="system",Jm=null,Xm=null,Qm=null,eb=60,rb,tb=null;class mr{static{i(this,"Settings")}static get now(){return Zm}static set now(r){Zm=r}static set defaultZone(r){Ym=r}static get defaultZone(){return Xo(Ym,hd.instance)}static get defaultLocale(){return Jm}static set defaultLocale(r){Jm=r}static get defaultNumberingSystem(){return Xm}static set defaultNumberingSystem(r){Xm=r}static get defaultOutputCalendar(){return Qm}static set defaultOutputCalendar(r){Qm=r}static get defaultWeekSettings(){return tb}static set defaultWeekSettings(r){tb=bg(r)}static get twoDigitCutoffYear(){return eb}static set twoDigitCutoffYear(r){eb=r%100}static get throwOnInvalid(){return rb}static set throwOnInvalid(r){rb=r}static resetCaches(){je.resetCache(),Io.resetCache(),se.resetCache(),g3()}}class jn{static{i(this,"Invalid")}constructor(r,t){this.reason=r,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const w2=[0,31,59,90,120,151,181,212,243,273,304,334],k2=[0,31,60,91,121,152,182,213,244,274,305,335];function Dn(e,r){return new jn("unit out of range",`you specified ${r} (of type ${typeof r}) as a ${e}, which is invalid`)}i(Dn,"unitOutOfRange");function Fh(e,r,t){const n=new Date(Date.UTC(e,r-1,t));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}i(Fh,"dayOfWeek");function $2(e,r,t){return t+(su(e)?k2:w2)[r-1]}i($2,"computeOrdinal");function x2(e,r){const t=su(e)?k2:w2,n=t.findIndex(a=>a<r),o=r-t[n];return{month:n+1,day:o}}i(x2,"uncomputeOrdinal");function Sh(e,r){return(e-r+7)%7+1}i(Sh,"isoWeekdayToLocal");function Sc(e,r=4,t=1){const{year:n,month:o,day:a}=e,s=$2(n,o,a),l=Sh(Fh(n,o,a),t);let u=Math.floor((s-l+14-r)/7),f;return u<1?(f=n-1,u=Il(f,r,t)):u>Il(n,r,t)?(f=n+1,u=1):f=n,{weekYear:f,weekNumber:u,weekday:l,...vd(e)}}i(Sc,"gregorianToWeek");function nb(e,r=4,t=1){const{weekYear:n,weekNumber:o,weekday:a}=e,s=Sh(Fh(n,1,r),t),l=Ga(n);let u=o*7+a-s-7+r,f;u<1?(f=n-1,u+=Ga(f)):u>l?(f=n+1,u-=Ga(n)):f=n;const{month:g,day:h}=x2(f,u);return{year:f,month:g,day:h,...vd(e)}}i(nb,"weekToGregorian");function Nf(e){const{year:r,month:t,day:n}=e,o=$2(r,t,n);return{year:r,ordinal:o,...vd(e)}}i(Nf,"gregorianToOrdinal");function ob(e){const{year:r,ordinal:t}=e,{month:n,day:o}=x2(r,t);return{year:r,month:n,day:o,...vd(e)}}i(ob,"ordinalToGregorian");function ib(e,r){if(!ae(e.localWeekday)||!ae(e.localWeekNumber)||!ae(e.localWeekYear)){if(!ae(e.weekday)||!ae(e.weekNumber)||!ae(e.weekYear))throw new za("Cannot mix locale-based week fields with ISO-based week fields");return ae(e.localWeekday)||(e.weekday=e.localWeekday),ae(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),ae(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:r.getMinDaysInFirstWeek(),startOfWeek:r.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}i(ib,"usesLocalWeekValues");function h3(e,r=4,t=1){const n=pd(e.weekYear),o=Cn(e.weekNumber,1,Il(e.weekYear,r,t)),a=Cn(e.weekday,1,7);return n?o?a?!1:Dn("weekday",e.weekday):Dn("week",e.weekNumber):Dn("weekYear",e.weekYear)}i(h3,"hasInvalidWeekData");function p3(e){const r=pd(e.year),t=Cn(e.ordinal,1,Ga(e.year));return r?t?!1:Dn("ordinal",e.ordinal):Dn("year",e.year)}i(p3,"hasInvalidOrdinalData");function D2(e){const r=pd(e.year),t=Cn(e.month,1,12),n=Cn(e.day,1,Mc(e.year,e.month));return r?t?n?!1:Dn("day",e.day):Dn("month",e.month):Dn("year",e.year)}i(D2,"hasInvalidGregorianData");function C2(e){const{hour:r,minute:t,second:n,millisecond:o}=e,a=Cn(r,0,23)||r===24&&t===0&&n===0&&o===0,s=Cn(t,0,59),l=Cn(n,0,59),u=Cn(o,0,999);return a?s?l?u?!1:Dn("millisecond",o):Dn("second",n):Dn("minute",t):Dn("hour",r)}i(C2,"hasInvalidTimeData");function ae(e){return typeof e>"u"}i(ae,"isUndefined");function ii(e){return typeof e=="number"}i(ii,"isNumber");function pd(e){return typeof e=="number"&&e%1===0}i(pd,"isInteger");function m3(e){return typeof e=="string"}i(m3,"isString$1");function b3(e){return Object.prototype.toString.call(e)==="[object Date]"}i(b3,"isDate");function E2(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}i(E2,"hasRelative");function A2(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}i(A2,"hasLocaleWeekInfo");function v3(e){return Array.isArray(e)?e:[e]}i(v3,"maybeArray");function ab(e,r,t){if(e.length!==0)return e.reduce((n,o)=>{const a=[r(o),o];return n&&t(n[0],a[0])===n[0]?n:a},null)[1]}i(ab,"bestBy");function y3(e,r){return r.reduce((t,n)=>(t[n]=e[n],t),{})}i(y3,"pick");function ts(e,r){return Object.prototype.hasOwnProperty.call(e,r)}i(ts,"hasOwnProperty");function bg(e){if(e==null)return null;if(typeof e!="object")throw new wt("Week settings must be an object");if(!Cn(e.firstDay,1,7)||!Cn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(r=>!Cn(r,1,7)))throw new wt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}i(bg,"validateWeekSettings");function Cn(e,r,t){return pd(e)&&e>=r&&e<=t}i(Cn,"integerBetween");function w3(e,r){return e-r*Math.floor(e/r)}i(w3,"floorMod");function Mr(e,r=2){const t=e<0;let n;return t?n="-"+(""+-e).padStart(r,"0"):n=(""+e).padStart(r,"0"),n}i(Mr,"padStart");function Ho(e){if(!(ae(e)||e===null||e===""))return parseInt(e,10)}i(Ho,"parseInteger");function Pi(e){if(!(ae(e)||e===null||e===""))return parseFloat(e)}i(Pi,"parseFloating");function Mh(e){if(!(ae(e)||e===null||e==="")){const r=parseFloat("0."+e)*1e3;return Math.floor(r)}}i(Mh,"parseMillis");function Th(e,r,t="round"){const n=10**r;switch(t){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${t} is out of range`)}}i(Th,"roundTo");function su(e){return e%4===0&&(e%100!==0||e%400===0)}i(su,"isLeapYear");function Ga(e){return su(e)?366:365}i(Ga,"daysInYear");function Mc(e,r){const t=w3(r-1,12)+1,n=e+(r-t)/12;return t===2?su(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][t-1]}i(Mc,"daysInMonth");function md(e){let r=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(r=new Date(r),r.setUTCFullYear(e.year,e.month-1,e.day)),+r}i(md,"objToLocalTS");function sb(e,r,t){return-Sh(Fh(e,1,r),t)+r-1}i(sb,"firstWeekOffset");function Il(e,r=4,t=1){const n=sb(e,r,t),o=sb(e+1,r,t);return(Ga(e)-n+o)/7}i(Il,"weeksInWeekYear");function vg(e){return e>99?e:e>mr.twoDigitCutoffYear?1900+e:2e3+e}i(vg,"untruncateYear");function F2(e,r,t,n=null){const o=new Date(e),a={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(a.timeZone=n);const s={timeZoneName:r,...a},l=new Intl.DateTimeFormat(t,s).formatToParts(o).find(u=>u.type.toLowerCase()==="timezonename");return l?l.value:null}i(F2,"parseZoneInfo");function bd(e,r){let t=parseInt(e,10);Number.isNaN(t)&&(t=0);const n=parseInt(r,10)||0,o=t<0||Object.is(t,-0)?-n:n;return t*60+o}i(bd,"signedOffset");function S2(e){const r=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(r))throw new wt(`Invalid unit value ${e}`);return r}i(S2,"asNumber");function Tc(e,r){const t={};for(const n in e)if(ts(e,n)){const o=e[n];if(o==null)continue;t[r(n)]=S2(o)}return t}i(Tc,"normalizeObject");function xl(e,r){const t=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(r){case"short":return`${o}${Mr(t,2)}:${Mr(n,2)}`;case"narrow":return`${o}${t}${n>0?`:${n}`:""}`;case"techie":return`${o}${Mr(t,2)}${Mr(n,2)}`;default:throw new RangeError(`Value format ${r} is out of range for property format`)}}i(xl,"formatOffset");function vd(e){return y3(e,["hour","minute","second","millisecond"])}i(vd,"timeObject");const k3=["January","February","March","April","May","June","July","August","September","October","November","December"],M2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$3=["J","F","M","A","M","J","J","A","S","O","N","D"];function T2(e){switch(e){case"narrow":return[...$3];case"short":return[...M2];case"long":return[...k3];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}i(T2,"months");const P2=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],I2=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],x3=["M","T","W","T","F","S","S"];function N2(e){switch(e){case"narrow":return[...x3];case"short":return[...I2];case"long":return[...P2];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}i(N2,"weekdays");const B2=["AM","PM"],D3=["Before Christ","Anno Domini"],C3=["BC","AD"],E3=["B","A"];function O2(e){switch(e){case"narrow":return[...E3];case"short":return[...C3];case"long":return[...D3];default:return null}}i(O2,"eras");function A3(e){return B2[e.hour<12?0:1]}i(A3,"meridiemForDateTime");function F3(e,r){return N2(r)[e.weekday-1]}i(F3,"weekdayForDateTime");function S3(e,r){return T2(r)[e.month-1]}i(S3,"monthForDateTime");function M3(e,r){return O2(r)[e.year<0?0:1]}i(M3,"eraForDateTime");function T3(e,r,t="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},a=["hours","minutes","seconds"].indexOf(e)===-1;if(t==="auto"&&a){const h=e==="days";switch(r){case 1:return h?"tomorrow":`next ${o[e][0]}`;case-1:return h?"yesterday":`last ${o[e][0]}`;case 0:return h?"today":`this ${o[e][0]}`}}const s=Object.is(r,-0)||r<0,l=Math.abs(r),u=l===1,f=o[e],g=n?u?f[1]:f[2]||f[1]:u?o[e][0]:e;return s?`${l} ${g} ago`:`in ${l} ${g}`}i(T3,"formatRelativeTime");function lb(e,r){let t="";for(const n of e)n.literal?t+=n.val:t+=r(n.val);return t}i(lb,"stringifyTokens");const P3={D:Fc,DD:Q1,DDD:e2,DDDD:r2,t:t2,tt:n2,ttt:o2,tttt:i2,T:a2,TT:s2,TTT:l2,TTTT:u2,f:c2,ff:f2,fff:h2,ffff:m2,F:d2,FF:g2,FFF:p2,FFFF:b2};class $t{static{i(this,"Formatter")}static create(r,t={}){return new $t(r,t)}static parseFormat(r){let t=null,n="",o=!1;const a=[];for(let s=0;s<r.length;s++){const l=r.charAt(s);l==="'"?((n.length>0||o)&&a.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),t=null,n="",o=!o):o||l===t?n+=l:(n.length>0&&a.push({literal:/^\s+$/.test(n),val:n}),n=l,t=l)}return n.length>0&&a.push({literal:o||/^\s+$/.test(n),val:n}),a}static macroTokenToFormatOpts(r){return P3[r]}constructor(r,t){this.opts=t,this.loc=r,this.systemLoc=null}formatWithSystemDefault(r,t){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(r,{...this.opts,...t}).format()}dtFormatter(r,t={}){return this.loc.dtFormatter(r,{...this.opts,...t})}formatDateTime(r,t){return this.dtFormatter(r,t).format()}formatDateTimeParts(r,t){return this.dtFormatter(r,t).formatToParts()}formatInterval(r,t){return this.dtFormatter(r.start,t).dtf.formatRange(r.start.toJSDate(),r.end.toJSDate())}resolvedOptions(r,t){return this.dtFormatter(r,t).resolvedOptions()}num(r,t=0,n=void 0){if(this.opts.forceSimple)return Mr(r,t);const o={...this.opts};return t>0&&(o.padTo=t),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(r)}formatDateTimeFromString(r,t){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",a=i((b,v)=>this.loc.extract(r,b,v),"string"),s=i(b=>r.isOffsetFixed&&r.offset===0&&b.allowZ?"Z":r.isValid?r.zone.formatOffset(r.ts,b.format):"","formatOffset"),l=i(()=>n?A3(r):a({hour:"numeric",hourCycle:"h12"},"dayperiod"),"meridiem"),u=i((b,v)=>n?S3(r,b):a(v?{month:b}:{month:b,day:"numeric"},"month"),"month"),f=i((b,v)=>n?F3(r,b):a(v?{weekday:b}:{weekday:b,month:"long",day:"numeric"},"weekday"),"weekday"),g=i(b=>{const v=$t.macroTokenToFormatOpts(b);return v?this.formatWithSystemDefault(r,v):b},"maybeMacro"),h=i(b=>n?M3(r,b):a({era:b},"era"),"era"),p=i(b=>{switch(b){case"S":return this.num(r.millisecond);case"u":case"SSS":return this.num(r.millisecond,3);case"s":return this.num(r.second);case"ss":return this.num(r.second,2);case"uu":return this.num(Math.floor(r.millisecond/10),2);case"uuu":return this.num(Math.floor(r.millisecond/100));case"m":return this.num(r.minute);case"mm":return this.num(r.minute,2);case"h":return this.num(r.hour%12===0?12:r.hour%12);case"hh":return this.num(r.hour%12===0?12:r.hour%12,2);case"H":return this.num(r.hour);case"HH":return this.num(r.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return r.zone.offsetName(r.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return r.zone.offsetName(r.ts,{format:"long",locale:this.loc.locale});case"z":return r.zoneName;case"a":return l();case"d":return o?a({day:"numeric"},"day"):this.num(r.day);case"dd":return o?a({day:"2-digit"},"day"):this.num(r.day,2);case"c":return this.num(r.weekday);case"ccc":return f("short",!0);case"cccc":return f("long",!0);case"ccccc":return f("narrow",!0);case"E":return this.num(r.weekday);case"EEE":return f("short",!1);case"EEEE":return f("long",!1);case"EEEEE":return f("narrow",!1);case"L":return o?a({month:"numeric",day:"numeric"},"month"):this.num(r.month);case"LL":return o?a({month:"2-digit",day:"numeric"},"month"):this.num(r.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return o?a({month:"numeric"},"month"):this.num(r.month);case"MM":return o?a({month:"2-digit"},"month"):this.num(r.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return o?a({year:"numeric"},"year"):this.num(r.year);case"yy":return o?a({year:"2-digit"},"year"):this.num(r.year.toString().slice(-2),2);case"yyyy":return o?a({year:"numeric"},"year"):this.num(r.year,4);case"yyyyyy":return o?a({year:"numeric"},"year"):this.num(r.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(r.weekYear.toString().slice(-2),2);case"kkkk":return this.num(r.weekYear,4);case"W":return this.num(r.weekNumber);case"WW":return this.num(r.weekNumber,2);case"n":return this.num(r.localWeekNumber);case"nn":return this.num(r.localWeekNumber,2);case"ii":return this.num(r.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(r.localWeekYear,4);case"o":return this.num(r.ordinal);case"ooo":return this.num(r.ordinal,3);case"q":return this.num(r.quarter);case"qq":return this.num(r.quarter,2);case"X":return this.num(Math.floor(r.ts/1e3));case"x":return this.num(r.ts);default:return g(b)}},"tokenToString");return lb($t.parseFormat(t),p)}formatDurationFromString(r,t){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=i(g=>{switch(g[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},"tokenToField"),a=i((g,h)=>p=>{const b=o(p);if(b){const v=h.isNegativeDuration&&b!==h.largestUnit?n:1;let $;return this.opts.signMode==="negativeLargestOnly"&&b!==h.largestUnit?$="never":this.opts.signMode==="all"?$="always":$="auto",this.num(g.get(b)*v,p.length,$)}else return p},"tokenToString"),s=$t.parseFormat(t),l=s.reduce((g,{literal:h,val:p})=>h?g:g.concat(p),[]),u=r.shiftTo(...l.map(o).filter(g=>g)),f={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return lb(s,a(u,f))}}const R2=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Ds(...e){const r=e.reduce((t,n)=>t+n.source,"");return RegExp(`^${r}$`)}i(Ds,"combineRegexes");function Cs(...e){return r=>e.reduce(([t,n,o],a)=>{const[s,l,u]=a(r,o);return[{...t,...s},l||n,u]},[{},null,1]).slice(0,2)}i(Cs,"combineExtractors");function Es(e,...r){if(e==null)return[null,null];for(const[t,n]of r){const o=t.exec(e);if(o)return n(o)}return[null,null]}i(Es,"parse$2");function L2(...e){return(r,t)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=Ho(r[t+o]);return[n,null,t+o]}}i(L2,"simpleParse");const j2=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,I3=`(?:${j2.source}?(?:\\[(${R2.source})\\])?)?`,Ph=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,U2=RegExp(`${Ph.source}${I3}`),Ih=RegExp(`(?:[Tt]${U2.source})?`),N3=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,B3=/(\d{4})-?W(\d\d)(?:-?(\d))?/,O3=/(\d{4})-?(\d{3})/,R3=L2("weekYear","weekNumber","weekDay"),L3=L2("year","ordinal"),j3=/(\d{4})-(\d\d)-(\d\d)/,_2=RegExp(`${Ph.source} ?(?:${j2.source}|(${R2.source}))?`),U3=RegExp(`(?: ${_2.source})?`);function Za(e,r,t){const n=e[r];return ae(n)?t:Ho(n)}i(Za,"int");function _3(e,r){return[{year:Za(e,r),month:Za(e,r+1,1),day:Za(e,r+2,1)},null,r+3]}i(_3,"extractISOYmd");function As(e,r){return[{hours:Za(e,r,0),minutes:Za(e,r+1,0),seconds:Za(e,r+2,0),milliseconds:Mh(e[r+3])},null,r+4]}i(As,"extractISOTime");function lu(e,r){const t=!e[r]&&!e[r+1],n=bd(e[r+1],e[r+2]),o=t?null:Mt.instance(n);return[{},o,r+3]}i(lu,"extractISOOffset");function uu(e,r){const t=e[r]?Io.create(e[r]):null;return[{},t,r+1]}i(uu,"extractIANAZone");const z3=RegExp(`^T?${Ph.source}$`),q3=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function V3(e){const[r,t,n,o,a,s,l,u,f]=e,g=r[0]==="-",h=u&&u[0]==="-",p=i((b,v=!1)=>b!==void 0&&(v||b&&g)?-b:b,"maybeNegate");return[{years:p(Pi(t)),months:p(Pi(n)),weeks:p(Pi(o)),days:p(Pi(a)),hours:p(Pi(s)),minutes:p(Pi(l)),seconds:p(Pi(u),u==="-0"),milliseconds:p(Mh(f),h)}]}i(V3,"extractISODuration");const W3={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Nh(e,r,t,n,o,a,s){const l={year:r.length===2?vg(Ho(r)):Ho(r),month:M2.indexOf(t)+1,day:Ho(n),hour:Ho(o),minute:Ho(a)};return s&&(l.second=Ho(s)),e&&(l.weekday=e.length>3?P2.indexOf(e)+1:I2.indexOf(e)+1),l}i(Nh,"fromStrings");const K3=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function H3(e){const[,r,t,n,o,a,s,l,u,f,g,h]=e,p=Nh(r,o,n,t,a,s,l);let b;return u?b=W3[u]:f?b=0:b=bd(g,h),[p,new Mt(b)]}i(H3,"extractRFC2822");function G3(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}i(G3,"preprocessRFC2822");const Z3=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Y3=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,J3=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function ub(e){const[,r,t,n,o,a,s,l]=e;return[Nh(r,o,n,t,a,s,l),Mt.utcInstance]}i(ub,"extractRFC1123Or850");function X3(e){const[,r,t,n,o,a,s,l]=e;return[Nh(r,l,t,n,o,a,s),Mt.utcInstance]}i(X3,"extractASCII");const Q3=Ds(N3,Ih),e6=Ds(B3,Ih),r6=Ds(O3,Ih),t6=Ds(U2),z2=Cs(_3,As,lu,uu),n6=Cs(R3,As,lu,uu),o6=Cs(L3,As,lu,uu),i6=Cs(As,lu,uu);function a6(e){return Es(e,[Q3,z2],[e6,n6],[r6,o6],[t6,i6])}i(a6,"parseISODate");function s6(e){return Es(G3(e),[K3,H3])}i(s6,"parseRFC2822Date");function l6(e){return Es(e,[Z3,ub],[Y3,ub],[J3,X3])}i(l6,"parseHTTPDate");function u6(e){return Es(e,[q3,V3])}i(u6,"parseISODuration");const c6=Cs(As);function d6(e){return Es(e,[z3,c6])}i(d6,"parseISOTimeOnly");const f6=Ds(j3,U3),g6=Ds(_2),h6=Cs(As,lu,uu);function p6(e){return Es(e,[f6,z2],[g6,h6])}i(p6,"parseSQL");const cb="Invalid Duration",q2={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},m6={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...q2},yn=146097/400,Ta=146097/4800,b6={years:{quarters:4,months:12,weeks:yn/7,days:yn,hours:yn*24,minutes:yn*24*60,seconds:yn*24*60*60,milliseconds:yn*24*60*60*1e3},quarters:{months:3,weeks:yn/28,days:yn/4,hours:yn*24/4,minutes:yn*24*60/4,seconds:yn*24*60*60/4,milliseconds:yn*24*60*60*1e3/4},months:{weeks:Ta/7,days:Ta,hours:Ta*24,minutes:Ta*24*60,seconds:Ta*24*60*60,milliseconds:Ta*24*60*60*1e3},...q2},qi=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],v6=qi.slice(0).reverse();function po(e,r,t=!1){const n={values:t?r.values:{...e.values,...r.values||{}},loc:e.loc.clone(r.loc),conversionAccuracy:r.conversionAccuracy||e.conversionAccuracy,matrix:r.matrix||e.matrix};return new Ee(n)}i(po,"clone$1$1");function V2(e,r){let t=r.milliseconds??0;for(const n of v6.slice(1))r[n]&&(t+=r[n]*e[n].milliseconds);return t}i(V2,"durationToMillis");function db(e,r){const t=V2(e,r)<0?-1:1;qi.reduceRight((n,o)=>{if(ae(r[o]))return n;if(n){const a=r[n]*t,s=e[o][n],l=Math.floor(a/s);r[o]+=l*t,r[n]-=l*s*t}return o},null),qi.reduce((n,o)=>{if(ae(r[o]))return n;if(n){const a=r[n]%1;r[n]-=a,r[o]+=a*e[n][o]}return o},null)}i(db,"normalizeValues");function fb(e){const r={};for(const[t,n]of Object.entries(e))n!==0&&(r[t]=n);return r}i(fb,"removeZeroes");class Ee{static{i(this,"Duration")}constructor(r){const t=r.conversionAccuracy==="longterm"||!1;let n=t?b6:m6;r.matrix&&(n=r.matrix),this.values=r.values,this.loc=r.loc||je.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=r.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(r,t){return Ee.fromObject({milliseconds:r},t)}static fromObject(r,t={}){if(r==null||typeof r!="object")throw new wt(`Duration.fromObject: argument expected to be an object, got ${r===null?"null":typeof r}`);return new Ee({values:Tc(r,Ee.normalizeUnit),loc:je.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(r){if(ii(r))return Ee.fromMillis(r);if(Ee.isDuration(r))return r;if(typeof r=="object")return Ee.fromObject(r);throw new wt(`Unknown duration argument ${r} of type ${typeof r}`)}static fromISO(r,t){const[n]=u6(r);return n?Ee.fromObject(n,t):Ee.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static fromISOTime(r,t){const[n]=d6(r);return n?Ee.fromObject(n,t):Ee.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static invalid(r,t=null){if(!r)throw new wt("need to specify a reason the Duration is invalid");const n=r instanceof jn?r:new jn(r,t);if(mr.throwOnInvalid)throw new V4(n);return new Ee({invalid:n})}static normalizeUnit(r){const t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[r&&r.toLowerCase()];if(!t)throw new X1(r);return t}static isDuration(r){return r&&r.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(r,t={}){const n={...t,floor:t.round!==!1&&t.floor!==!1};return this.isValid?$t.create(this.loc,n).formatDurationFromString(this,r):cb}toHuman(r={}){if(!this.isValid)return cb;const t=r.showZeros!==!1,n=qi.map(o=>{const a=this.values[o];return ae(a)||a===0&&!t?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...r,unit:o.slice(0,-1)}).format(a)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:r.listStyle||"narrow",...r}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let r="P";return this.years!==0&&(r+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(r+=this.months+this.quarters*3+"M"),this.weeks!==0&&(r+=this.weeks+"W"),this.days!==0&&(r+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(r+="T"),this.hours!==0&&(r+=this.hours+"H"),this.minutes!==0&&(r+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(r+=Th(this.seconds+this.milliseconds/1e3,3)+"S"),r==="P"&&(r+="T0S"),r}toISOTime(r={}){if(!this.isValid)return null;const t=this.toMillis();return t<0||t>=864e5?null:(r={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...r,includeOffset:!1},se.fromMillis(t,{zone:"UTC"}).toISOTime(r))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?V2(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(r){if(!this.isValid)return this;const t=Ee.fromDurationLike(r),n={};for(const o of qi)(ts(t.values,o)||ts(this.values,o))&&(n[o]=t.get(o)+this.get(o));return po(this,{values:n},!0)}minus(r){if(!this.isValid)return this;const t=Ee.fromDurationLike(r);return this.plus(t.negate())}mapUnits(r){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=S2(r(this.values[n],n));return po(this,{values:t},!0)}get(r){return this[Ee.normalizeUnit(r)]}set(r){if(!this.isValid)return this;const t={...this.values,...Tc(r,Ee.normalizeUnit)};return po(this,{values:t})}reconfigure({locale:r,numberingSystem:t,conversionAccuracy:n,matrix:o}={}){const s={loc:this.loc.clone({locale:r,numberingSystem:t}),matrix:o,conversionAccuracy:n};return po(this,s)}as(r){return this.isValid?this.shiftTo(r).get(r):NaN}normalize(){if(!this.isValid)return this;const r=this.toObject();return db(this.matrix,r),po(this,{values:r},!0)}rescale(){if(!this.isValid)return this;const r=fb(this.normalize().shiftToAll().toObject());return po(this,{values:r},!0)}shiftTo(...r){if(!this.isValid)return this;if(r.length===0)return this;r=r.map(s=>Ee.normalizeUnit(s));const t={},n={},o=this.toObject();let a;for(const s of qi)if(r.indexOf(s)>=0){a=s;let l=0;for(const f in n)l+=this.matrix[f][s]*n[f],n[f]=0;ii(o[s])&&(l+=o[s]);const u=Math.trunc(l);t[s]=u,n[s]=(l*1e3-u*1e3)/1e3}else ii(o[s])&&(n[s]=o[s]);for(const s in n)n[s]!==0&&(t[a]+=s===a?n[s]:n[s]/this.matrix[a][s]);return db(this.matrix,t),po(this,{values:t},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const r={};for(const t of Object.keys(this.values))r[t]=this.values[t]===0?0:-this.values[t];return po(this,{values:r},!0)}removeZeros(){if(!this.isValid)return this;const r=fb(this.values);return po(this,{values:r},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(r){if(!this.isValid||!r.isValid||!this.loc.equals(r.loc))return!1;function t(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}i(t,"eq");for(const n of qi)if(!t(this.values[n],r.values[n]))return!1;return!0}}const Pa="Invalid Interval";function y6(e,r){return!e||!e.isValid?$r.invalid("missing or invalid start"):!r||!r.isValid?$r.invalid("missing or invalid end"):r<e?$r.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${r.toISO()}`):null}i(y6,"validateStartEnd");class $r{static{i(this,"Interval")}constructor(r){this.s=r.start,this.e=r.end,this.invalid=r.invalid||null,this.isLuxonInterval=!0}static invalid(r,t=null){if(!r)throw new wt("need to specify a reason the Interval is invalid");const n=r instanceof jn?r:new jn(r,t);if(mr.throwOnInvalid)throw new q4(n);return new $r({invalid:n})}static fromDateTimes(r,t){const n=Hs(r),o=Hs(t),a=y6(n,o);return a??new $r({start:n,end:o})}static after(r,t){const n=Ee.fromDurationLike(t),o=Hs(r);return $r.fromDateTimes(o,o.plus(n))}static before(r,t){const n=Ee.fromDurationLike(t),o=Hs(r);return $r.fromDateTimes(o.minus(n),o)}static fromISO(r,t){const[n,o]=(r||"").split("/",2);if(n&&o){let a,s;try{a=se.fromISO(n,t),s=a.isValid}catch{s=!1}let l,u;try{l=se.fromISO(o,t),u=l.isValid}catch{u=!1}if(s&&u)return $r.fromDateTimes(a,l);if(s){const f=Ee.fromISO(o,t);if(f.isValid)return $r.after(a,f)}else if(u){const f=Ee.fromISO(n,t);if(f.isValid)return $r.before(l,f)}}return $r.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static isInterval(r){return r&&r.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(r="milliseconds"){return this.isValid?this.toDuration(r).get(r):NaN}count(r="milliseconds",t){if(!this.isValid)return NaN;const n=this.start.startOf(r,t);let o;return t?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(r,t),Math.floor(o.diff(n,r).get(r))+(o.valueOf()!==this.end.valueOf())}hasSame(r){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,r):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(r){return this.isValid?this.s>r:!1}isBefore(r){return this.isValid?this.e<=r:!1}contains(r){return this.isValid?this.s<=r&&this.e>r:!1}set({start:r,end:t}={}){return this.isValid?$r.fromDateTimes(r||this.s,t||this.e):this}splitAt(...r){if(!this.isValid)return[];const t=r.map(Hs).filter(s=>this.contains(s)).sort((s,l)=>s.toMillis()-l.toMillis()),n=[];let{s:o}=this,a=0;for(;o<this.e;){const s=t[a]||this.e,l=+s>+this.e?this.e:s;n.push($r.fromDateTimes(o,l)),o=l,a+=1}return n}splitBy(r){const t=Ee.fromDurationLike(r);if(!this.isValid||!t.isValid||t.as("milliseconds")===0)return[];let{s:n}=this,o=1,a;const s=[];for(;n<this.e;){const l=this.start.plus(t.mapUnits(u=>u*o));a=+l>+this.e?this.e:l,s.push($r.fromDateTimes(n,a)),n=a,o+=1}return s}divideEqually(r){return this.isValid?this.splitBy(this.length()/r).slice(0,r):[]}overlaps(r){return this.e>r.s&&this.s<r.e}abutsStart(r){return this.isValid?+this.e==+r.s:!1}abutsEnd(r){return this.isValid?+r.e==+this.s:!1}engulfs(r){return this.isValid?this.s<=r.s&&this.e>=r.e:!1}equals(r){return!this.isValid||!r.isValid?!1:this.s.equals(r.s)&&this.e.equals(r.e)}intersection(r){if(!this.isValid)return this;const t=this.s>r.s?this.s:r.s,n=this.e<r.e?this.e:r.e;return t>=n?null:$r.fromDateTimes(t,n)}union(r){if(!this.isValid)return this;const t=this.s<r.s?this.s:r.s,n=this.e>r.e?this.e:r.e;return $r.fromDateTimes(t,n)}static merge(r){const[t,n]=r.sort((o,a)=>o.s-a.s).reduce(([o,a],s)=>a?a.overlaps(s)||a.abutsStart(s)?[o,a.union(s)]:[o.concat([a]),s]:[o,s],[[],null]);return n&&t.push(n),t}static xor(r){let t=null,n=0;const o=[],a=r.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...a),l=s.sort((u,f)=>u.time-f.time);for(const u of l)n+=u.type==="s"?1:-1,n===1?t=u.time:(t&&+t!=+u.time&&o.push($r.fromDateTimes(t,u.time)),t=null);return $r.merge(o)}difference(...r){return $r.xor([this].concat(r)).map(t=>this.intersection(t)).filter(t=>t&&!t.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Pa}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(r=Fc,t={}){return this.isValid?$t.create(this.s.loc.clone(t),r).formatInterval(this):Pa}toISO(r){return this.isValid?`${this.s.toISO(r)}/${this.e.toISO(r)}`:Pa}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Pa}toISOTime(r){return this.isValid?`${this.s.toISOTime(r)}/${this.e.toISOTime(r)}`:Pa}toFormat(r,{separator:t=" – "}={}){return this.isValid?`${this.s.toFormat(r)}${t}${this.e.toFormat(r)}`:Pa}toDuration(r,t){return this.isValid?this.e.diff(this.s,r,t):Ee.invalid(this.invalidReason)}mapEndpoints(r){return $r.fromDateTimes(r(this.s),r(this.e))}}class _u{static{i(this,"Info")}static hasDST(r=mr.defaultZone){const t=se.now().setZone(r).set({month:12});return!r.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(r){return Io.isValidZone(r)}static normalizeZone(r){return Xo(r,mr.defaultZone)}static getStartOfWeek({locale:r=null,locObj:t=null}={}){return(t||je.create(r)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:r=null,locObj:t=null}={}){return(t||je.create(r)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:r=null,locObj:t=null}={}){return(t||je.create(r)).getWeekendDays().slice()}static months(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null,outputCalendar:a="gregory"}={}){return(o||je.create(t,n,a)).months(r)}static monthsFormat(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null,outputCalendar:a="gregory"}={}){return(o||je.create(t,n,a)).months(r,!0)}static weekdays(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null}={}){return(o||je.create(t,n,null)).weekdays(r)}static weekdaysFormat(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null}={}){return(o||je.create(t,n,null)).weekdays(r,!0)}static meridiems({locale:r=null}={}){return je.create(r).meridiems()}static eras(r="short",{locale:t=null}={}){return je.create(t,null,"gregory").eras(r)}static features(){return{relative:E2(),localeWeek:A2()}}}function gb(e,r){const t=i(o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),"utcDayStart"),n=t(r)-t(e);return Math.floor(Ee.fromMillis(n).as("days"))}i(gb,"dayDiff");function w6(e,r,t){const n=[["years",(u,f)=>f.year-u.year],["quarters",(u,f)=>f.quarter-u.quarter+(f.year-u.year)*4],["months",(u,f)=>f.month-u.month+(f.year-u.year)*12],["weeks",(u,f)=>{const g=gb(u,f);return(g-g%7)/7}],["days",gb]],o={},a=e;let s,l;for(const[u,f]of n)t.indexOf(u)>=0&&(s=u,o[u]=f(e,r),l=a.plus(o),l>r?(o[u]--,e=a.plus(o),e>r&&(l=e,o[u]--,e=a.plus(o))):e=l);return[e,o,l,s]}i(w6,"highOrderDiffs");function k6(e,r,t,n){let[o,a,s,l]=w6(e,r,t);const u=r-o,f=t.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);f.length===0&&(s<r&&(s=o.plus({[l]:1})),s!==o&&(a[l]=(a[l]||0)+u/(s-o)));const g=Ee.fromObject(a,n);return f.length>0?Ee.fromMillis(u,n).shiftTo(...f).plus(g):g}i(k6,"diff");const $6="missing Intl.DateTimeFormat.formatToParts support";function Pe(e,r=t=>t){return{regex:e,deser:i(([t])=>r(f3(t)),"deser")}}i(Pe,"intUnit");const x6=" ",W2=`[ ${x6}]`,K2=new RegExp(W2,"g");function D6(e){return e.replace(/\./g,"\\.?").replace(K2,W2)}i(D6,"fixListRegex");function hb(e){return e.replace(/\./g,"").replace(K2," ").toLowerCase()}i(hb,"stripInsensitivities");function On(e,r){return e===null?null:{regex:RegExp(e.map(D6).join("|")),deser:i(([t])=>e.findIndex(n=>hb(t)===hb(n))+r,"deser")}}i(On,"oneOf");function pb(e,r){return{regex:e,deser:i(([,t,n])=>bd(t,n),"deser"),groups:r}}i(pb,"offset");function zu(e){return{regex:e,deser:i(([r])=>r,"deser")}}i(zu,"simple");function C6(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}i(C6,"escapeToken");function E6(e,r){const t=Bn(r),n=Bn(r,"{2}"),o=Bn(r,"{3}"),a=Bn(r,"{4}"),s=Bn(r,"{6}"),l=Bn(r,"{1,2}"),u=Bn(r,"{1,3}"),f=Bn(r,"{1,6}"),g=Bn(r,"{1,9}"),h=Bn(r,"{2,4}"),p=Bn(r,"{4,6}"),b=i(C=>({regex:RegExp(C6(C.val)),deser:i(([E])=>E,"deser"),literal:!0}),"literal"),$=i(C=>{if(e.literal)return b(C);switch(C.val){case"G":return On(r.eras("short"),0);case"GG":return On(r.eras("long"),0);case"y":return Pe(f);case"yy":return Pe(h,vg);case"yyyy":return Pe(a);case"yyyyy":return Pe(p);case"yyyyyy":return Pe(s);case"M":return Pe(l);case"MM":return Pe(n);case"MMM":return On(r.months("short",!0),1);case"MMMM":return On(r.months("long",!0),1);case"L":return Pe(l);case"LL":return Pe(n);case"LLL":return On(r.months("short",!1),1);case"LLLL":return On(r.months("long",!1),1);case"d":return Pe(l);case"dd":return Pe(n);case"o":return Pe(u);case"ooo":return Pe(o);case"HH":return Pe(n);case"H":return Pe(l);case"hh":return Pe(n);case"h":return Pe(l);case"mm":return Pe(n);case"m":return Pe(l);case"q":return Pe(l);case"qq":return Pe(n);case"s":return Pe(l);case"ss":return Pe(n);case"S":return Pe(u);case"SSS":return Pe(o);case"u":return zu(g);case"uu":return zu(l);case"uuu":return Pe(t);case"a":return On(r.meridiems(),0);case"kkkk":return Pe(a);case"kk":return Pe(h,vg);case"W":return Pe(l);case"WW":return Pe(n);case"E":case"c":return Pe(t);case"EEE":return On(r.weekdays("short",!1),1);case"EEEE":return On(r.weekdays("long",!1),1);case"ccc":return On(r.weekdays("short",!0),1);case"cccc":return On(r.weekdays("long",!0),1);case"Z":case"ZZ":return pb(new RegExp(`([+-]${l.source})(?::(${n.source}))?`),2);case"ZZZ":return pb(new RegExp(`([+-]${l.source})(${n.source})?`),2);case"z":return zu(/[a-z_+-/]{1,256}?/i);case" ":return zu(/[^\S\n\r]/);default:return b(C)}},"unitate")(e)||{invalidReason:$6};return $.token=e,$}i(E6,"unitForToken");const A6={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function F6(e,r,t){const{type:n,value:o}=e;if(n==="literal"){const u=/^\s+$/.test(o);return{literal:!u,val:u?" ":o}}const a=r[n];let s=n;n==="hour"&&(r.hour12!=null?s=r.hour12?"hour12":"hour24":r.hourCycle!=null?r.hourCycle==="h11"||r.hourCycle==="h12"?s="hour12":s="hour24":s=t.hour12?"hour12":"hour24");let l=A6[s];if(typeof l=="object"&&(l=l[a]),l)return{literal:!1,val:l}}i(F6,"tokenForPart");function S6(e){return[`^${e.map(t=>t.regex).reduce((t,n)=>`${t}(${n.source})`,"")}$`,e]}i(S6,"buildRegex");function M6(e,r,t){const n=e.match(r);if(n){const o={};let a=1;for(const s in t)if(ts(t,s)){const l=t[s],u=l.groups?l.groups+1:1;!l.literal&&l.token&&(o[l.token.val[0]]=l.deser(n.slice(a,a+u))),a+=u}return[n,o]}else return[n,{}]}i(M6,"match$1");function T6(e){const r=i(a=>{switch(a){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},"toField");let t=null,n;return ae(e.z)||(t=Io.create(e.z)),ae(e.Z)||(t||(t=new Mt(e.Z)),n=e.Z),ae(e.q)||(e.M=(e.q-1)*3+1),ae(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),ae(e.u)||(e.S=Mh(e.u)),[Object.keys(e).reduce((a,s)=>{const l=r(s);return l&&(a[l]=e[s]),a},{}),t,n]}i(T6,"dateTimeFromMatches");let Bf=null;function P6(){return Bf||(Bf=se.fromMillis(1555555555555)),Bf}i(P6,"getDummyDateTime");function I6(e,r){if(e.literal)return e;const t=$t.macroTokenToFormatOpts(e.val),n=Y2(t,r);return n==null||n.includes(void 0)?e:n}i(I6,"maybeExpandMacroToken");function H2(e,r){return Array.prototype.concat(...e.map(t=>I6(t,r)))}i(H2,"expandMacroTokens");class G2{static{i(this,"TokenParser")}constructor(r,t){if(this.locale=r,this.format=t,this.tokens=H2($t.parseFormat(t),r),this.units=this.tokens.map(n=>E6(n,r)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=S6(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(r){if(this.isValid){const[t,n]=M6(r,this.regex,this.handlers),[o,a,s]=n?T6(n):[null,null,void 0];if(ts(n,"a")&&ts(n,"H"))throw new za("Can't include meridiem when specifying 24-hour format");return{input:r,tokens:this.tokens,regex:this.regex,rawMatches:t,matches:n,result:o,zone:a,specificOffset:s}}else return{input:r,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Z2(e,r,t){return new G2(e,t).explainFromTokens(r)}i(Z2,"explainFromTokens");function N6(e,r,t){const{result:n,zone:o,specificOffset:a,invalidReason:s}=Z2(e,r,t);return[n,o,a,s]}i(N6,"parseFromTokens");function Y2(e,r){if(!e)return null;const n=$t.create(r,e).dtFormatter(P6()),o=n.formatToParts(),a=n.resolvedOptions();return o.map(s=>F6(s,e,a))}i(Y2,"formatOptsToTokens");const Of="Invalid DateTime",mb=864e13;function cl(e){return new jn("unsupported zone",`the zone "${e.name}" is not supported`)}i(cl,"unsupportedZone");function Rf(e){return e.weekData===null&&(e.weekData=Sc(e.c)),e.weekData}i(Rf,"possiblyCachedWeekData");function Lf(e){return e.localWeekData===null&&(e.localWeekData=Sc(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}i(Lf,"possiblyCachedLocalWeekData");function Ii(e,r){const t={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new se({...t,...r,old:t})}i(Ii,"clone$2");function J2(e,r,t){let n=e-r*60*1e3;const o=t.offset(n);if(r===o)return[n,r];n-=(o-r)*60*1e3;const a=t.offset(n);return o===a?[n,o]:[e-Math.min(o,a)*60*1e3,Math.max(o,a)]}i(J2,"fixOffset");function qu(e,r){e+=r*60*1e3;const t=new Date(e);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hour:t.getUTCHours(),minute:t.getUTCMinutes(),second:t.getUTCSeconds(),millisecond:t.getUTCMilliseconds()}}i(qu,"tsToObj");function gc(e,r,t){return J2(md(e),r,t)}i(gc,"objToTS");function bb(e,r){const t=e.o,n=e.c.year+Math.trunc(r.years),o=e.c.month+Math.trunc(r.months)+Math.trunc(r.quarters)*3,a={...e.c,year:n,month:o,day:Math.min(e.c.day,Mc(n,o))+Math.trunc(r.days)+Math.trunc(r.weeks)*7},s=Ee.fromObject({years:r.years-Math.trunc(r.years),quarters:r.quarters-Math.trunc(r.quarters),months:r.months-Math.trunc(r.months),weeks:r.weeks-Math.trunc(r.weeks),days:r.days-Math.trunc(r.days),hours:r.hours,minutes:r.minutes,seconds:r.seconds,milliseconds:r.milliseconds}).as("milliseconds"),l=md(a);let[u,f]=J2(l,t,e.zone);return s!==0&&(u+=s,f=e.zone.offset(u)),{ts:u,o:f}}i(bb,"adjustTime");function Ia(e,r,t,n,o,a){const{setZone:s,zone:l}=t;if(e&&Object.keys(e).length!==0||r){const u=r||l,f=se.fromObject(e,{...t,zone:u,specificOffset:a});return s?f:f.setZone(l)}else return se.invalid(new jn("unparsable",`the input "${o}" can't be parsed as ${n}`))}i(Ia,"parseDataToDateTime");function Vu(e,r,t=!0){return e.isValid?$t.create(je.create("en-US"),{allowZ:t,forceSimple:!0}).formatDateTimeFromString(e,r):null}i(Vu,"toTechFormat");function jf(e,r,t){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=Mr(e.c.year,n?6:4),t==="year")return o;if(r){if(o+="-",o+=Mr(e.c.month),t==="month")return o;o+="-"}else if(o+=Mr(e.c.month),t==="month")return o;return o+=Mr(e.c.day),o}i(jf,"toISODate");function vb(e,r,t,n,o,a,s){let l=!t||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=Mr(e.c.hour),s==="hour")break;if(r){if(u+=":",u+=Mr(e.c.minute),s==="minute")break;l&&(u+=":",u+=Mr(e.c.second))}else{if(u+=Mr(e.c.minute),s==="minute")break;l&&(u+=Mr(e.c.second))}if(s==="second")break;l&&(!n||e.c.millisecond!==0)&&(u+=".",u+=Mr(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!a?u+="Z":e.o<0?(u+="-",u+=Mr(Math.trunc(-e.o/60)),u+=":",u+=Mr(Math.trunc(-e.o%60))):(u+="+",u+=Mr(Math.trunc(e.o/60)),u+=":",u+=Mr(Math.trunc(e.o%60)))),a&&(u+="["+e.zone.ianaName+"]"),u}i(vb,"toISOTime");const X2={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},B6={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},O6={ordinal:1,hour:0,minute:0,second:0,millisecond:0},hc=["year","month","day","hour","minute","second","millisecond"],R6=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],L6=["year","ordinal","hour","minute","second","millisecond"];function pc(e){const r={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!r)throw new X1(e);return r}i(pc,"normalizeUnit");function yb(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return pc(e)}}i(yb,"normalizeUnitWithLocalWeeks");function j6(e){if(dl===void 0&&(dl=mr.now()),e.type!=="iana")return e.offset(dl);const r=e.name;let t=yg.get(r);return t===void 0&&(t=e.offset(dl),yg.set(r,t)),t}i(j6,"guessOffsetForZone");function wb(e,r){const t=Xo(r.zone,mr.defaultZone);if(!t.isValid)return se.invalid(cl(t));const n=je.fromObject(r);let o,a;if(ae(e.year))o=mr.now();else{for(const u of hc)ae(e[u])&&(e[u]=X2[u]);const s=D2(e)||C2(e);if(s)return se.invalid(s);const l=j6(t);[o,a]=gc(e,l,t)}return new se({ts:o,zone:t,loc:n,o:a})}i(wb,"quickDT");function kb(e,r,t){const n=ae(t.round)?!0:t.round,o=ae(t.rounding)?"trunc":t.rounding,a=i((l,u)=>(l=Th(l,n||t.calendary?0:2,t.calendary?"round":o),r.loc.clone(t).relFormatter(t).format(l,u)),"format"),s=i(l=>t.calendary?r.hasSame(e,l)?0:r.startOf(l).diff(e.startOf(l),l).get(l):r.diff(e,l).get(l),"differ");if(t.unit)return a(s(t.unit),t.unit);for(const l of t.units){const u=s(l);if(Math.abs(u)>=1)return a(u,l)}return a(e>r?-0:0,t.units[t.units.length-1])}i(kb,"diffRelative");function $b(e){let r={},t;return e.length>0&&typeof e[e.length-1]=="object"?(r=e[e.length-1],t=Array.from(e).slice(0,e.length-1)):t=Array.from(e),[r,t]}i($b,"lastOpts");let dl;const yg=new Map;class se{static{i(this,"DateTime")}constructor(r){const t=r.zone||mr.defaultZone;let n=r.invalid||(Number.isNaN(r.ts)?new jn("invalid input"):null)||(t.isValid?null:cl(t));this.ts=ae(r.ts)?mr.now():r.ts;let o=null,a=null;if(!n)if(r.old&&r.old.ts===this.ts&&r.old.zone.equals(t))[o,a]=[r.old.c,r.old.o];else{const l=ii(r.o)&&!r.old?r.o:t.offset(this.ts);o=qu(this.ts,l),n=Number.isNaN(o.year)?new jn("invalid input"):null,o=n?null:o,a=n?null:l}this._zone=t,this.loc=r.loc||je.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=a,this.isLuxonDateTime=!0}static now(){return new se({})}static local(){const[r,t]=$b(arguments),[n,o,a,s,l,u,f]=t;return wb({year:n,month:o,day:a,hour:s,minute:l,second:u,millisecond:f},r)}static utc(){const[r,t]=$b(arguments),[n,o,a,s,l,u,f]=t;return r.zone=Mt.utcInstance,wb({year:n,month:o,day:a,hour:s,minute:l,second:u,millisecond:f},r)}static fromJSDate(r,t={}){const n=b3(r)?r.valueOf():NaN;if(Number.isNaN(n))return se.invalid("invalid input");const o=Xo(t.zone,mr.defaultZone);return o.isValid?new se({ts:n,zone:o,loc:je.fromObject(t)}):se.invalid(cl(o))}static fromMillis(r,t={}){if(ii(r))return r<-mb||r>mb?se.invalid("Timestamp out of range"):new se({ts:r,zone:Xo(t.zone,mr.defaultZone),loc:je.fromObject(t)});throw new wt(`fromMillis requires a numerical input, but received a ${typeof r} with value ${r}`)}static fromSeconds(r,t={}){if(ii(r))return new se({ts:r*1e3,zone:Xo(t.zone,mr.defaultZone),loc:je.fromObject(t)});throw new wt("fromSeconds requires a numerical input")}static fromObject(r,t={}){r=r||{};const n=Xo(t.zone,mr.defaultZone);if(!n.isValid)return se.invalid(cl(n));const o=je.fromObject(t),a=Tc(r,yb),{minDaysInFirstWeek:s,startOfWeek:l}=ib(a,o),u=mr.now(),f=ae(t.specificOffset)?n.offset(u):t.specificOffset,g=!ae(a.ordinal),h=!ae(a.year),p=!ae(a.month)||!ae(a.day),b=h||p,v=a.weekYear||a.weekNumber;if((b||g)&&v)throw new za("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(p&&g)throw new za("Can't mix ordinal dates with month/day");const $=v||a.weekday&&!b;let C,E,A=qu(u,f);$?(C=R6,E=B6,A=Sc(A,s,l)):g?(C=L6,E=O6,A=Nf(A)):(C=hc,E=X2);let N=!1;for(const or of C){const ir=a[or];ae(ir)?N?a[or]=E[or]:a[or]=A[or]:N=!0}const _=$?h3(a,s,l):g?p3(a):D2(a),H=_||C2(a);if(H)return se.invalid(H);const ce=$?nb(a,s,l):g?ob(a):a,[Te,be]=gc(ce,f,n),Se=new se({ts:Te,zone:n,o:be,loc:o});return a.weekday&&b&&r.weekday!==Se.weekday?se.invalid("mismatched weekday",`you can't specify both a weekday of ${a.weekday} and a date of ${Se.toISO()}`):Se.isValid?Se:se.invalid(Se.invalid)}static fromISO(r,t={}){const[n,o]=a6(r);return Ia(n,o,t,"ISO 8601",r)}static fromRFC2822(r,t={}){const[n,o]=s6(r);return Ia(n,o,t,"RFC 2822",r)}static fromHTTP(r,t={}){const[n,o]=l6(r);return Ia(n,o,t,"HTTP",t)}static fromFormat(r,t,n={}){if(ae(r)||ae(t))throw new wt("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:a=null}=n,s=je.fromOpts({locale:o,numberingSystem:a,defaultToEN:!0}),[l,u,f,g]=N6(s,r,t);return g?se.invalid(g):Ia(l,u,n,`format ${t}`,r,f)}static fromString(r,t,n={}){return se.fromFormat(r,t,n)}static fromSQL(r,t={}){const[n,o]=p6(r);return Ia(n,o,t,"SQL",r)}static invalid(r,t=null){if(!r)throw new wt("need to specify a reason the DateTime is invalid");const n=r instanceof jn?r:new jn(r,t);if(mr.throwOnInvalid)throw new z4(n);return new se({invalid:n})}static isDateTime(r){return r&&r.isLuxonDateTime||!1}static parseFormatForOpts(r,t={}){const n=Y2(r,je.fromObject(t));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(r,t={}){return H2($t.parseFormat(r),je.fromObject(t)).map(o=>o.val).join("")}static resetCache(){dl=void 0,yg.clear()}get(r){return this[r]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Rf(this).weekYear:NaN}get weekNumber(){return this.isValid?Rf(this).weekNumber:NaN}get weekday(){return this.isValid?Rf(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Lf(this).weekday:NaN}get localWeekNumber(){return this.isValid?Lf(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Lf(this).weekYear:NaN}get ordinal(){return this.isValid?Nf(this.c).ordinal:NaN}get monthShort(){return this.isValid?_u.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?_u.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?_u.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?_u.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const r=864e5,t=6e4,n=md(this.c),o=this.zone.offset(n-r),a=this.zone.offset(n+r),s=this.zone.offset(n-o*t),l=this.zone.offset(n-a*t);if(s===l)return[this];const u=n-s*t,f=n-l*t,g=qu(u,s),h=qu(f,l);return g.hour===h.hour&&g.minute===h.minute&&g.second===h.second&&g.millisecond===h.millisecond?[Ii(this,{ts:u}),Ii(this,{ts:f})]:[this]}get isInLeapYear(){return su(this.year)}get daysInMonth(){return Mc(this.year,this.month)}get daysInYear(){return this.isValid?Ga(this.year):NaN}get weeksInWeekYear(){return this.isValid?Il(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Il(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(r={}){const{locale:t,numberingSystem:n,calendar:o}=$t.create(this.loc.clone(r),r).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:o}}toUTC(r=0,t={}){return this.setZone(Mt.instance(r),t)}toLocal(){return this.setZone(mr.defaultZone)}setZone(r,{keepLocalTime:t=!1,keepCalendarTime:n=!1}={}){if(r=Xo(r,mr.defaultZone),r.equals(this.zone))return this;if(r.isValid){let o=this.ts;if(t||n){const a=r.offset(this.ts),s=this.toObject();[o]=gc(s,a,r)}return Ii(this,{ts:o,zone:r})}else return se.invalid(cl(r))}reconfigure({locale:r,numberingSystem:t,outputCalendar:n}={}){const o=this.loc.clone({locale:r,numberingSystem:t,outputCalendar:n});return Ii(this,{loc:o})}setLocale(r){return this.reconfigure({locale:r})}set(r){if(!this.isValid)return this;const t=Tc(r,yb),{minDaysInFirstWeek:n,startOfWeek:o}=ib(t,this.loc),a=!ae(t.weekYear)||!ae(t.weekNumber)||!ae(t.weekday),s=!ae(t.ordinal),l=!ae(t.year),u=!ae(t.month)||!ae(t.day),f=l||u,g=t.weekYear||t.weekNumber;if((f||s)&&g)throw new za("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new za("Can't mix ordinal dates with month/day");let h;a?h=nb({...Sc(this.c,n,o),...t},n,o):ae(t.ordinal)?(h={...this.toObject(),...t},ae(t.day)&&(h.day=Math.min(Mc(h.year,h.month),h.day))):h=ob({...Nf(this.c),...t});const[p,b]=gc(h,this.o,this.zone);return Ii(this,{ts:p,o:b})}plus(r){if(!this.isValid)return this;const t=Ee.fromDurationLike(r);return Ii(this,bb(this,t))}minus(r){if(!this.isValid)return this;const t=Ee.fromDurationLike(r).negate();return Ii(this,bb(this,t))}startOf(r,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;const n={},o=Ee.normalizeUnit(r);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(t){const a=this.loc.getStartOfWeek(),{weekday:s}=this;s<a&&(n.weekNumber=this.weekNumber-1),n.weekday=a}else n.weekday=1;if(o==="quarters"){const a=Math.ceil(this.month/3);n.month=(a-1)*3+1}return this.set(n)}endOf(r,t){return this.isValid?this.plus({[r]:1}).startOf(r,t).minus(1):this}toFormat(r,t={}){return this.isValid?$t.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,r):Of}toLocaleString(r=Fc,t={}){return this.isValid?$t.create(this.loc.clone(t),r).formatDateTime(this):Of}toLocaleParts(r={}){return this.isValid?$t.create(this.loc.clone(r),r).formatDateTimeParts(this):[]}toISO({format:r="extended",suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:a=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=pc(s);const l=r==="extended";let u=jf(this,l,s);return hc.indexOf(s)>=3&&(u+="T"),u+=vb(this,l,t,n,o,a,s),u}toISODate({format:r="extended",precision:t="day"}={}){return this.isValid?jf(this,r==="extended",pc(t)):null}toISOWeekDate(){return Vu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:r=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:a=!1,format:s="extended",precision:l="milliseconds"}={}){return this.isValid?(l=pc(l),(o&&hc.indexOf(l)>=3?"T":"")+vb(this,s==="extended",t,r,n,a,l)):null}toRFC2822(){return Vu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Vu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?jf(this,!0):null}toSQLTime({includeOffset:r=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(t||r)&&(n&&(o+=" "),t?o+="z":r&&(o+="ZZ")),Vu(this,o,!0)}toSQL(r={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(r)}`:null}toString(){return this.isValid?this.toISO():Of}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(r={}){if(!this.isValid)return{};const t={...this.c};return r.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(r,t="milliseconds",n={}){if(!this.isValid||!r.isValid)return Ee.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},a=v3(t).map(Ee.normalizeUnit),s=r.valueOf()>this.valueOf(),l=s?this:r,u=s?r:this,f=k6(l,u,a,o);return s?f.negate():f}diffNow(r="milliseconds",t={}){return this.diff(se.now(),r,t)}until(r){return this.isValid?$r.fromDateTimes(this,r):this}hasSame(r,t,n){if(!this.isValid)return!1;const o=r.valueOf(),a=this.setZone(r.zone,{keepLocalTime:!0});return a.startOf(t,n)<=o&&o<=a.endOf(t,n)}equals(r){return this.isValid&&r.isValid&&this.valueOf()===r.valueOf()&&this.zone.equals(r.zone)&&this.loc.equals(r.loc)}toRelative(r={}){if(!this.isValid)return null;const t=r.base||se.fromObject({},{zone:this.zone}),n=r.padding?this<t?-r.padding:r.padding:0;let o=["years","months","days","hours","minutes","seconds"],a=r.unit;return Array.isArray(r.unit)&&(o=r.unit,a=void 0),kb(t,this.plus(n),{...r,numeric:"always",units:o,unit:a})}toRelativeCalendar(r={}){return this.isValid?kb(r.base||se.fromObject({},{zone:this.zone}),this,{...r,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...r){if(!r.every(se.isDateTime))throw new wt("min requires all arguments be DateTimes");return ab(r,t=>t.valueOf(),Math.min)}static max(...r){if(!r.every(se.isDateTime))throw new wt("max requires all arguments be DateTimes");return ab(r,t=>t.valueOf(),Math.max)}static fromFormatExplain(r,t,n={}){const{locale:o=null,numberingSystem:a=null}=n,s=je.fromOpts({locale:o,numberingSystem:a,defaultToEN:!0});return Z2(s,r,t)}static fromStringExplain(r,t,n={}){return se.fromFormatExplain(r,t,n)}static buildFormatParser(r,t={}){const{locale:n=null,numberingSystem:o=null}=t,a=je.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new G2(a,r)}static fromFormatParser(r,t,n={}){if(ae(r)||ae(t))throw new wt("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:a=null}=n,s=je.fromOpts({locale:o,numberingSystem:a,defaultToEN:!0});if(!s.equals(t.locale))throw new wt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${t.locale}`);const{result:l,zone:u,specificOffset:f,invalidReason:g}=t.explainFromTokens(r);return g?se.invalid(g):Ia(l,u,n,`format ${t.format}`,r,f)}static get DATE_SHORT(){return Fc}static get DATE_MED(){return Q1}static get DATE_MED_WITH_WEEKDAY(){return W4}static get DATE_FULL(){return e2}static get DATE_HUGE(){return r2}static get TIME_SIMPLE(){return t2}static get TIME_WITH_SECONDS(){return n2}static get TIME_WITH_SHORT_OFFSET(){return o2}static get TIME_WITH_LONG_OFFSET(){return i2}static get TIME_24_SIMPLE(){return a2}static get TIME_24_WITH_SECONDS(){return s2}static get TIME_24_WITH_SHORT_OFFSET(){return l2}static get TIME_24_WITH_LONG_OFFSET(){return u2}static get DATETIME_SHORT(){return c2}static get DATETIME_SHORT_WITH_SECONDS(){return d2}static get DATETIME_MED(){return f2}static get DATETIME_MED_WITH_SECONDS(){return g2}static get DATETIME_MED_WITH_WEEKDAY(){return K4}static get DATETIME_FULL(){return h2}static get DATETIME_FULL_WITH_SECONDS(){return p2}static get DATETIME_HUGE(){return m2}static get DATETIME_HUGE_WITH_SECONDS(){return b2}}function Hs(e){if(se.isDateTime(e))return e;if(e&&e.valueOf&&ii(e.valueOf()))return se.fromJSDate(e);if(e&&typeof e=="object")return se.fromObject(e);throw new wt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}i(Hs,"friendlyDateTime");Intl.DateTimeFormat().resolvedOptions().locale;var J;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(J||(J={}));J.Year,J.Hour,J.Minute,J.Second,J.Millisecond;J.Month,J.Week,J.Day;J.Millisecond,J.Second,J.Minute,J.Hour,J.Day,J.Week,J.Month,J.Year;const xb={min:0,max:23},Db={min:0,max:59},Cb={min:0,max:59},Eb={min:0,max:999};var le;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(le||(le={}));const U6=[le.Milliseconds,le.Seconds,le.Minutes,le.Hours,le.Days,le.Weeks,le.Months,le.Years];le.Milliseconds+"",le.Seconds+"",le.Minutes+"",le.Hours+"",le.Days+"",le.Weeks+"",le.Months+"",le.Years+"";le.Years+"",J.Year,le.Months+"",J.Month,le.Weeks+"",J.Week,le.Days+"",J.Day,le.Hours+"",J.Hour,le.Minutes+"",J.Minute,le.Seconds+"",J.Second,le.Milliseconds+"",J.Millisecond;J.Year+"",le.Years,J.Month+"",le.Months,J.Week+"",le.Weeks,J.Day+"",le.Days,J.Hour+"",le.Hours,J.Minute+"",le.Minutes,J.Second+"",le.Seconds,J.Millisecond+"",le.Milliseconds;function _6(e){return U6.filter(r=>e[r])}i(_6,"flattenUnitsSmallestToLargest");function wg(e,{decimalCount:r}){if(r==null)return e;const t=Math.pow(10,r),n=e*t;return Number((Math.round(n)/t).toFixed(r))}i(wg,"round$1");function z6(e){return wg(Math.max(e-.4,0),{decimalCount:0})}i(z6,"roundNarrow");function Ab(e){return e===0?0:Math.sign(e)}i(Ab,"getSign");function ns(e,r,t={}){const n={},o={decimalCount:t.decimalCount==null?void 0:Math.round(Math.abs(t.decimalCount))},a=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),l=_6(r).reverse();if(a||s)return l.forEach(g=>{n[g]=a?1/0:-1/0}),n;let u=Ee.fromObject(e).as(le.Milliseconds);const f=Ab(u);return l.forEach((g,h)=>{const p=h===l.length-1;if(g===le.Milliseconds)n.milliseconds=wg(u,o);else{const b=Ee.fromObject({milliseconds:u}).as(g),v=Math.sign(b),$=Math.abs(b),C=p?wg($,o):Math.floor(o.decimalCount==null?$:z6($)),E=C===0?0:C*v;n[g]=E,u-=Ee.fromObject({[g]:E}).as(le.Milliseconds),f!==Ab(u)&&(u=0)}}),n}i(ns,"convertDuration");var kt;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(kt||(kt={}));kt.Sunday+"",kt.Monday+"",kt.Tuesday+"",kt.Wednesday+"",kt.Thursday+"",kt.Friday+"",kt.Saturday+"";kt.Sunday,kt.Monday,kt.Tuesday,kt.Wednesday,kt.Thursday,kt.Friday,kt.Saturday;var jt;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(jt||(jt={}));jt.January,jt.February,jt.March,jt.April,jt.May,jt.June,jt.July,jt.August,jt.September,jt.October,jt.November,jt.December;const Fb={min:1,max:12},Sb={min:1,max:31};function ta(e){const r=new Ac,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:ns(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{r.resolve()},n<=0?0:n),r.promise}i(ta,"wait");function Q2(...e){const r=e.join(""),t=gd(Array.from(r));return Array.from(t).join("")}i(Q2,"removeDuplicateCharacters");function ew(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}i(ew,"escapeStringForRegExp");function rw(e,r){const t=Q2([typeof e=="string"?"":e.flags,r].join("").toLowerCase());return tw(e,t)}i(rw,"addRegExpFlags");function tw(e,r){const t=Q2(r);return typeof e=="string"?new RegExp(ew(e),t):new RegExp(e.source,t)}i(tw,"setRegExpFlags");function nw(e,{caseSensitive:r}){const n="".replaceAll("i","");return tw(e,n)}i(nw,"setRegExpCaseSensitivity");function Bh(e,r=1){return e.split(`
`).map(t=>["    ".repeat(Math.round(r)),t].join("")).join(`
`)}i(Bh,"indent");function ow(e,r){return r?typeof r=="string"?!!new RegExp(ew(r),"i").exec(e):!!rw(r,"i").exec(e):!1}i(ow,"match");class w extends Error{static{i(this,"AssertionError")}name="AssertionError";constructor(r,t){super(ga(t,r)||"Assertion failed.")}}const Mb={interval:{milliseconds:100},timeout:{seconds:10}},Uf=Symbol("not set");async function q6(e,r,t){const{callback:n,extraAssertionArgs:o,failureMessage:a,options:s}=V6(r),l=ns(s.timeout,{milliseconds:!0}).milliseconds,u=ns(s.interval,{milliseconds:!0});let f=Uf,g;async function h(){try{f=t?n():await n(),e(f,...o)}catch(b){f=Uf,g=Dr(b)}}i(h,"checkCondition");const p=Date.now();for(;f===Uf;)if(await h(),await ta(u),Date.now()-p>=l){const v=`${a?`${a}: `:""}Timeout of '${l}' milliseconds exceeded waiting for callback value to match expectations`;throw ha(g,v)}return f}i(q6,"executeWaitUntil");function L(e,r=!1){return((...t)=>q6(e,t,r))}i(L,"createWaitUntil");function V6(e){const r={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(t=>{if(r.callback)r.extraAssertionArgs.push(t);else if(typeof t=="function")r.callback=t;else if(typeof t=="string")r.failureMessage=t;else if(typeof t=="object")r.options=t;else{if(t===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(t)}`)}}),!r.callback)throw new TypeError("Missing waitUntil callback.");return{callback:r.callback,options:iw(r.options),extraAssertionArgs:r.extraAssertionArgs.toReversed(),failureMessage:r.failureMessage}}i(V6,"parseWaitUntilArgs");function iw(e){return{interval:e?.interval||Mb.interval,timeout:e?.timeout||Mb.timeout}}i(iw,"parseWaitUntilOptions");const Gs={isFalse(e,r){if(e!==!1)throw new w(`'${x(e)}' is not false.`,r)},isFalsy(e,r){if(e)throw new w(`'${x(e)}' is not falsy.`,r)},isTrue(e,r){if(e!==!0)throw new w(`'${x(e)}' is not true.`,r)},isTruthy(e,r){if(!e)throw new w(`'${x(e)}' is not truthy.`,r)}},aw={assert:Gs,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,r){if(e===!1)return e;throw new w(`'${x(e)}' is not false.`,r)},isFalsy(e,r){if(e)throw new w(`'${x(e)}' is not falsy.`,r);return e},isTrue(e,r){if(e===!0)return e;throw new w(`'${x(e)}' is not true.`,r)},isTruthy(e,r){if(e)return e;throw new w(`'${x(e)}' is not truthy.`,r)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:L(Gs.isFalse),isFalsy:L(Gs.isFalsy),isTrue:L(Gs.isTrue),isTruthy:L(Gs.isTruthy)}};function W6(e,r,t){if(typeof e=="string"){if(!e.endsWith(r))throw new w(`${x(e)} does not end with ${x(r)}}`,t)}else if(e[e.length-1]!==r)throw new w(`${x(e)} does not end with ${x(r)}}`,t)}i(W6,"endsWith");function K6(e,r,t){if(typeof e=="string"){if(e.endsWith(r))throw new w(`${x(e)} ends with ${x(r)}}`,t)}else if(e[e.length-1]===r)throw new w(`${x(e)} ends with ${x(r)}}`,t)}i(K6,"endsWithout");function H6(e,r,t){if(typeof e=="string"){if(!e.startsWith(r))throw new w(`${x(e)} does not start with ${x(r)}}`,t)}else if(e[0]!==r)throw new w(`${x(e)} does not start with ${x(r)}}`,t)}i(H6,"startsWith");function G6(e,r,t){if(typeof e=="string"){if(e.startsWith(r))throw new w(`${x(e)} starts with ${x(r)}}`,t)}else if(e[0]===r)throw new w(`${x(e)} starts with ${x(r)}}`,t)}i(G6,"startsWithout");const Zs={endsWith:W6,endsWithout:K6,startsWith:H6,startsWithout:G6},sw={assert:Zs,check:{endsWith:i(((e,r)=>typeof e=="string"?e.endsWith(r):e[e.length-1]===r),"endsWith"),endsWithout:i(((e,r)=>typeof e=="string"?!e.endsWith(r):e[e.length-1]!==r),"endsWithout"),startsWith:i(((e,r)=>typeof e=="string"?e.startsWith(r):e[0]===r),"startsWith"),startsWithout:i(((e,r)=>typeof e=="string"?!e.startsWith(r):e[0]!==r),"startsWithout")},assertWrap:{endsWith:i(((e,r,t)=>{if(typeof e=="string"){if(!e.endsWith(r))throw new w(`${x(e)} does not end with ${x(r)}}`,t)}else if(e[e.length-1]!==r)throw new w(`${x(e)} does not end with ${x(r)}}`,t);return e}),"endsWith"),endsWithout:i(((e,r,t)=>{if(typeof e=="string"){if(e.endsWith(r))throw new w(`${x(e)} ends with ${x(r)}}`,t)}else if(e[e.length-1]===r)throw new w(`${x(e)} ends with ${x(r)}}`,t);return e}),"endsWithout"),startsWith:i(((e,r,t)=>{if(typeof e=="string"){if(!e.startsWith(r))throw new w(`${x(e)} does not start with ${x(r)}}`,t)}else if(e[0]!==r)throw new w(`${x(e)} does not start with ${x(r)}}`,t);return e}),"startsWith"),startsWithout:i(((e,r,t)=>{if(typeof e=="string"){if(e.startsWith(r))throw new w(`${x(e)} starts with ${x(r)}}`,t)}else if(e[0]===r)throw new w(`${x(e)} starts with ${x(r)}}`,t);return e}),"startsWithout")},checkWrap:{endsWith:i(((e,r)=>{if(typeof e=="string")return e.endsWith(r)?e:void 0;if(e[e.length-1]===r)return e}),"endsWith"),endsWithout:i(((e,r)=>{if(typeof e=="string")return e.endsWith(r)?void 0:e;if(e[e.length-1]!==r)return e}),"endsWithout"),startsWith:i(((e,r)=>{if(typeof e=="string")return e.startsWith(r)?e:void 0;if(e[0]===r)return e}),"startsWith"),startsWithout:i(((e,r)=>{if(typeof e=="string")return e.startsWith(r)?void 0:e;if(e[0]!==r)return e}),"startsWithout")},waitUntil:{endsWith:L(Zs.endsWith),endsWithout:L(Zs.endsWithout),startsWith:L(Zs.startsWith),startsWithout:L(Zs.startsWithout)}};function Z6(e,r,t){const n=en(r);if(!n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,t)}i(Z6,"assertIsEnumValue");function vo(e,r){return en(r).includes(e)}i(vo,"isEnumValue");const _f={isEnumValue(e,r,t){Z6(e,r,t)},isNotEnumValue(e,r,t){const n=en(r);if(n.includes(e))throw new w(`${String(e)} is an enum value in '${n.join(",")}'.`,t)}},lw={assert:_f,check:{isEnumValue:vo,isNotEnumValue(e,r){return!en(r).includes(e)}},assertWrap:{isEnumValue(e,r,t){const n=en(r);if(!n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,t);return e},isNotEnumValue(e,r,t){const n=en(r);if(n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,t);return e}},checkWrap:{isEnumValue(e,r){if(en(r).includes(e))return e},isNotEnumValue(e,r){if(!en(r).includes(e))return e}},waitUntil:{isEnumValue:L(_f.isEnumValue),isNotEnumValue:L(_f.isNotEnumValue)}},zf={entriesEqual(e,r,t){if(!e||typeof e!="object")throw new w(`${x(e)} is not an object.`,t);if(!r||typeof r!="object")throw new w(`${x(r)} is not an object.`,t);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).forEach(o=>{const a=e[o],s=r[o];if(a!==s)throw new w(`Entries are not equal at key '${String(o)}'.`,t)})},notEntriesEqual(e,r,t){if(!e||typeof e!="object"||!r||typeof r!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(a=>{const s=e[a],l=r[a];return s!==l}))throw new w("Entries are equal.",t)}},uw={assert:zf,check:{entriesEqual(e,r){return!e||typeof e!="object"||!r||typeof r!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).every(n=>{const o=e[n],a=r[n];return o===a})},notEntriesEqual(e,r){return!e||typeof e!="object"||!r||typeof r!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(n=>{const o=e[n],a=r[n];return o!==a})}},assertWrap:{entriesEqual(e,r,t){if(!e||typeof e!="object")throw new w(`${x(e)} is not an object.`,t);if(!r||typeof r!="object")throw new w(`${x(r)} is not an object.`,t);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).forEach(o=>{const a=e[o],s=r[o];if(a!==s)throw new w(`Entries are not equal at key '${String(o)}'.`,t)}),e},notEntriesEqual(e,r,t){if(!e||typeof e!="object"||!r||typeof r!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(a=>{const s=e[a],l=r[a];return s!==l}))return e;throw new w("Entries are equal.",t)}},checkWrap:{entriesEqual(e,r){if(!e||typeof e!="object"||!r||typeof r!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).every(o=>{const a=e[o],s=r[o];return a===s}))return e},notEntriesEqual(e,r){if(!e||typeof e!="object"||!r||typeof r!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(o=>{const a=e[o],s=r[o];return a!==s}))return e}},waitUntil:{entriesEqual:L(zf.entriesEqual),notEntriesEqual:L(zf.notEntriesEqual)}};function Pc(e,r){return JSON.stringify(e)===JSON.stringify(r)}i(Pc,"baseJsonEquals");function Nl(e,r){if(!(e===r||Pc(e,r))){if(e!=null&&r!=null&&typeof e=="object"&&typeof r=="object"){const t=Object.keys(e).sort(),n=Object.keys(r).sort();if(t.length!==n.length)throw new Error("Values are not JSON equal.");if(!Pc(t,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(a=>{try{Nl(e[a],r[a])}catch(s){throw new Error(`JSON objects are not equal at key '${a}': ${nt(s)}`)}})}throw new Error("Values are not JSON equal.")}}i(Nl,"recursiveAssertJsonEquals");function fl(e,r){if(e===r||Pc(e,r))return!0;if(e!=null&&r!=null&&typeof e=="object"&&typeof r=="object"){const t=Object.keys(e).sort(),n=Object.keys(r).sort();return t.length!==n.length||!Pc(t,n)?!1:Object.keys(e).every(a=>fl(e[a],r[a]))}return!1}i(fl,"recursiveCheckJsonEquals");const qf={jsonEquals(e,r,t){try{Nl(e,r)}catch(n){throw new w(nt(n),t)}},notJsonEquals(e,r,t){try{Nl(e,r)}catch{return}throw new w("Values are JSON equal.",t)}},cw={assert:qf,check:{jsonEquals(e,r){return fl(e,r)},notJsonEquals(e,r){return!fl(e,r)}},assertWrap:{jsonEquals(e,r,t){try{return Nl(e,r),e}catch(n){throw new w(nt(n),t)}},notJsonEquals(e,r,t){try{Nl(e,r)}catch{return e}throw new w("Values are JSON equal.",t)}},checkWrap:{jsonEquals(e,r){if(fl(e,r))return e},notJsonEquals(e,r){if(!fl(e,r))return e}},waitUntil:{jsonEquals:L(qf.jsonEquals),notJsonEquals:L(qf.notJsonEquals)}};function Tb(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const r=e[Symbol.toStringTag];return typeof r=="string"?r:Object.prototype.toString.call(e).slice(8,-1)}i(Tb,"type$1");function dw(){this._key="chai/deep-eql__"+Math.random()+Date.now()}i(dw,"FakeMap");dw.prototype={get:i(function(r){return r[this._key]},"get"),set:i(function(r,t){Object.isExtensible(r)&&Object.defineProperty(r,this._key,{value:t,configurable:!0})},"set")};var fw=typeof WeakMap=="function"?WeakMap:dw;function Pb(e,r,t){if(!t||os(e)||os(r))return null;var n=t.get(e);if(n){var o=n.get(r);if(typeof o=="boolean")return o}return null}i(Pb,"memoizeCompare");function Wu(e,r,t,n){if(!(!t||os(e)||os(r))){var o=t.get(e);o?o.set(r,n):(o=new fw,o.set(r,n),t.set(e,o))}}i(Wu,"memoizeSet");function Ln(e,r,t){if(t&&t.comparator)return Ib(e,r,t);var n=gw(e,r);return n!==null?n:Ib(e,r,t)}i(Ln,"deepEqual");function gw(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r?!0:os(e)||os(r)?!1:null}i(gw,"simpleEqual");function Ib(e,r,t){t=t||{},t.memoize=t.memoize===!1?!1:t.memoize||new fw;var n=t&&t.comparator,o=Pb(e,r,t.memoize);if(o!==null)return o;var a=Pb(r,e,t.memoize);if(a!==null)return a;if(n){var s=n(e,r);if(s===!1||s===!0)return Wu(e,r,t.memoize,s),s;var l=gw(e,r);if(l!==null)return l}var u=Tb(e);if(u!==Tb(r))return Wu(e,r,t.memoize,!1),!1;Wu(e,r,t.memoize,!0);var f=Y6(e,r,u,t);return Wu(e,r,t.memoize,f),f}i(Ib,"extensiveDeepEqual");function Y6(e,r,t,n){switch(t){case"String":case"Number":case"Boolean":case"Date":return Ln(e.valueOf(),r.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===r;case"Error":return hw(e,r,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Hi(e,r,n);case"RegExp":return J6(e,r);case"Generator":return X6(e,r,n);case"DataView":return Hi(new Uint8Array(e.buffer),new Uint8Array(r.buffer),n);case"ArrayBuffer":return Hi(new Uint8Array(e),new Uint8Array(r),n);case"Set":return Nb(e,r,n);case"Map":return Nb(e,r,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(r);case"Temporal.Duration":return e.total("nanoseconds")===r.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===r.toString();default:return eD(e,r,n)}}i(Y6,"extensiveDeepEqualByType");function J6(e,r){return e.toString()===r.toString()}i(J6,"regexpEqual");function Nb(e,r,t){try{if(e.size!==r.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(i(function(s,l){n.push([s,l])},"gatherEntries")),r.forEach(i(function(s,l){o.push([s,l])},"gatherEntries")),Hi(n.sort(),o.sort(),t)}i(Nb,"entriesEqual");function Hi(e,r,t){var n=e.length;if(n!==r.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(Ln(e[o],r[o],t)===!1)return!1;return!0}i(Hi,"iterableEqual");function X6(e,r,t){return Hi(kg(e),kg(r),t)}i(X6,"generatorEqual");function Q6(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}i(Q6,"hasIteratorFunction");function Bb(e){if(Q6(e))try{return kg(e[Symbol.iterator]())}catch{return[]}return[]}i(Bb,"getIteratorEntries");function kg(e){for(var r=e.next(),t=[r.value];r.done===!1;)r=e.next(),t.push(r.value);return t}i(kg,"getGeneratorEntries");function Ob(e){var r=[];for(var t in e)r.push(t);return r}i(Ob,"getEnumerableKeys");function Rb(e){for(var r=[],t=Object.getOwnPropertySymbols(e),n=0;n<t.length;n+=1){var o=t[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&r.push(o)}return r}i(Rb,"getEnumerableSymbols");function hw(e,r,t,n){var o=t.length;if(o===0)return!0;for(var a=0;a<o;a+=1)if(Ln(e[t[a]],r[t[a]],n)===!1)return!1;return!0}i(hw,"keysEqual");function eD(e,r,t){var n=Ob(e),o=Ob(r),a=Rb(e),s=Rb(r);if(n=n.concat(a),o=o.concat(s),n.length&&n.length===o.length)return Hi(Lb(n).sort(),Lb(o).sort())===!1?!1:hw(e,r,n,t);var l=Bb(e),u=Bb(r);return l.length&&l.length===u.length?(l.sort(),u.sort(),Hi(l,u,t)):n.length===0&&l.length===0&&o.length===0&&u.length===0}i(eD,"objectEqual");function os(e){return e===null||typeof e!="object"}i(os,"isPrimitive");function Lb(e){return e.map(i(function(t){return typeof t=="symbol"?t.toString():t},"mapSymbol"))}i(Lb,"mapSymbols");class Ya extends w{static{i(this,"DiffError")}name="DiffError";constructor(r,t,n,o){const a=R4(t,n);super([r,Bh(a)].join(`
`),o)}}function Go(e,r){return typeof e=="function"&&typeof r=="function"?!0:null}i(Go,"customComparator");const Ko={strictEquals(e,r,t){if(e!==r)throw typeof e=="object"&&e||typeof r=="object"&&r?new w(`Strict reference equality failed for 

${x(r)}

.`,t):new Ya("Not strictly equal.",e,r,t)},notStrictEquals(e,r,t){if(e===r)throw typeof e=="object"&&e?new w(`Strict reference INequality failed for 

${x(r)}

.`,t):new w(`

${x(e)}

strictly equals

${x(r)}

`,t)},looseEquals(e,r,t){if(e!=r)throw typeof e=="object"&&e||typeof r=="object"&&r?new w(`Loose reference equality failed for 

${x(r)}

.`,t):new Ya("Not loosely equal.",e,r,t)},notLooseEquals(e,r,t){if(e==r)throw typeof e=="object"&&e?new w(`Loose reference INequality failed for 

${x(r)}

.`,t):new w(`

${x(e)}

loosely equals

${x(r)}

`,t)},deepEquals(e,r,t){if(!Ln(e,r,{comparator:Go}))throw new Ya("Not deeply equal.",e,r,t)},notDeepEquals(e,r,t){if(Ln(e,r,{comparator:Go}))throw new w(`

${x(e)}

deeply equals

${x(r)}

`,t)}},pw=Ko.deepEquals,mw={assert:Ko,check:{strictEquals(e,r){return e===r},notStrictEquals(e,r){return e!==r},looseEquals(e,r){return e==r},notLooseEquals(e,r){return e!=r},deepEquals(e,r){return Ln(e,r,{comparator:Go})},notDeepEquals(e,r){return!Ln(e,r,{comparator:Go})}},assertWrap:{strictEquals(e,r,t){if(e===r)return e;throw typeof e=="object"&&e||typeof r=="object"&&r?new w(`Strict reference equality failed for 

${x(r)}

.`,t):new Ya("Not strictly equal.",e,r,t)},notStrictEquals(e,r,t){if(e===r)throw typeof e=="object"&&e?new w(`Strict reference INequality failed for 

${x(r)}

.`,t):new w(`

${x(e)}

strictly equals

${x(r)}

`,t);return e},looseEquals(e,r,t){if(e==r)return e;throw typeof e=="object"&&e||typeof r=="object"&&r?new w(`Loose reference equality failed for 

${x(r)}

.`,t):new Ya("Not loosely equal.",e,r,t)},notLooseEquals(e,r,t){if(e==r)throw typeof e=="object"&&e?new w(`Loose reference INequality failed for 

${x(r)}

.`,t):new w(`

${x(e)}

loosely equals

${x(r)}

`,t);return e},deepEquals(e,r,t){if(Ln(e,r,{comparator:Go}))return e;throw new Ya("Not deeply equal.",e,r,t)},notDeepEquals(e,r,t){if(Ln(e,r,{comparator:Go}))throw new w(`

${x(e)}

deeply equals

${x(r)}

`,t);return e}},checkWrap:{strictEquals(e,r){if(e===r)return e},notStrictEquals(e,r){if(e!==r)return e},looseEquals(e,r){if(e==r)return e},notLooseEquals(e,r){if(e!==r)return e},deepEquals(e,r){if(Ln(e,r,{comparator:Go}))return e},notDeepEquals(e,r){if(!Ln(e,r,{comparator:Go}))return e}},waitUntil:{strictEquals:L(Ko.strictEquals),notStrictEquals:L(Ko.notStrictEquals),looseEquals:L(Ko.looseEquals),notLooseEquals:L(Ko.notLooseEquals),deepEquals:L(Ko.deepEquals),notDeepEquals:L(Ko.notDeepEquals)}};function Xt(e,r){if(typeof e=="string")return typeof r=="string"&&e.includes(r);let t=!0;try{t=Reflect.ownKeys(e).map(n=>e[n]).includes(r)}catch{return!1}return t}i(Xt,"hasValue");function $n(e,r){return typeof r=="string"?r.includes(e):Xt(r,e)}i($n,"isIn");const mo={hasValue(e,r,t){if(!Xt(e,r))throw new w(`'${x(e)}' does not have value '${x(r)}'.`,t)},lacksValue(e,r,t){if(Xt(e,r))throw new w(`'${x(e)}' has value '${x(r)}'.`,t)},hasValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(a=>e[a]);n=r.filter(a=>!o.includes(a))}catch{throw new w(`'${x(e)}' does not have values '${x(r)}'.`,t)}if(n.length)throw new w(`'${x(e)}' does not have values '${x(n)}'.`,t)},lacksValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(a=>e[a]);n=r.filter(a=>o.includes(a))}catch{}if(n.length)throw new w(`'${x(e)}' has values '${x(n)}'.`,t)},isIn(e,r,t){if(!$n(e,r))throw new w(`'${x(e)}'

is not in

${x(r)}.`,t)},isNotIn(e,r,t){if($n(e,r))throw new w(`'${x(e)}'

is in

${x(r)}.`,t)},isEmpty(e,r){if(typeof e!="string"&&typeof e!="object")throw new w(`'${x(e)}' is not empty.`,r);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new w(`'${x(e)}' is not empty.`,r)},isNotEmpty(e,r){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new w(`'${x(e)}' is not empty.`,r)}else if(Array.isArray(e)){if(!e.length)throw new w(`'${x(e)}' is not empty.`,r)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new w(`'${x(e)}' is not empty.`,r)}else if(typeof e=="object"&&!Object.keys(e).length)throw new w(`'${x(e)}' is not empty.`,r)}}},bw={assert:mo,check:{hasValue(e,r){return Xt(e,r)},lacksValue(e,r){return!Xt(e,r)},hasValues(e,r){return r.every(t=>Xt(e,t))},lacksValues(e,r){return r.every(t=>!Xt(e,t))},isIn(e,r){return $n(e,r)},isNotIn(e,r){return!$n(e,r)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,r,t){if(!Xt(e,r))throw new w(`'${x(e)}' does not have value '${x(r)}'.`,t);return e},lacksValue(e,r,t){if(Xt(e,r))throw new w(`'${x(e)}' has value '${x(r)}'.`,t);return e},hasValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(a=>e[a]);n=r.filter(a=>!o.includes(a))}catch{throw new w(`'${x(e)}' does not have values '${x(r)}'.`,t)}if(n.length)throw new w(`'${x(e)}' does not have values '${x(n)}'.`,t);return e},lacksValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(a=>e[a]);n=r.filter(a=>o.includes(a))}catch{}if(n.length)throw new w(`'${x(e)}' has values '${x(n)}'.`,t);return e},isIn(e,r,t){if(!$n(e,r))throw new w(`'${x(e)}'

is not in

${x(r)}.`,t);return e},isNotIn(e,r,t){if($n(e,r))throw new w(`'${x(e)}'

is in

${x(r)}.`,t);return e},isEmpty(e,r){if(typeof e!="string"&&typeof e!="object")throw new w(`'${x(e)}' is not empty.`,r);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new w(`'${x(e)}' is not empty.`,r)},isNotEmpty(e,r){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new w(`'${x(e)}' is empty.`,r)}else if(Array.isArray(e)){if(!e.length)throw new w(`'${x(e)}' is empty.`,r)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new w(`'${x(e)}' is empty.`,r)}else if(typeof e=="object"&&!Object.keys(e).length)throw new w(`'${x(e)}' is empty.`,r);return e}},checkWrap:{hasValue(e,r){if(Xt(e,r))return e},lacksValue(e,r){if(!Xt(e,r))return e},hasValues(e,r){if(r.every(t=>Xt(e,t)))return e},lacksValues(e,r){if(!r.every(t=>Xt(e,t)))return e},isIn(e,r){if($n(e,r))return e},isNotIn(e,r){if(!$n(e,r))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:L(mo.hasValue),lacksValue:L(mo.lacksValue),hasValues:L(mo.hasValues),lacksValues:L(mo.lacksValues),isIn:L(mo.isIn),isNotIn:L(mo.isNotIn),isEmpty:L(mo.isEmpty),isNotEmpty:L(mo.isNotEmpty)}},Vf={isHttpStatus(e,r){if(!vo(e,P))throw new w(`${x(e)} is not a valid HTTP status.`,r)},isHttpStatusCategory(e,r,t){if(vo(e,P)){if(!$n(e,fc[r]))throw new w(`${x(e)} is not a '${r}' HTTP status.`,t)}else throw new w(`${x(e)} is not a valid HTTP status.`,t)}},vw={assert:Vf,check:{isHttpStatus(e){return vo(e,P)},isHttpStatusCategory(e,r){return vo(e,P)&&$n(e,fc[r])}},assertWrap:{isHttpStatus(e,r){if(!vo(e,P))throw new w(`${x(e)} is not a valid HTTP status.`,r);return e},isHttpStatusCategory(e,r,t){if(vo(e,P)){if(!$n(e,fc[r]))throw new w(`${x(e)} is not a '${r}' HTTP status.`,t)}else throw new w(`${x(e)} is not a valid HTTP status.`,t);return e}},checkWrap:{isHttpStatus(e){if(vo(e,P))return e},isHttpStatusCategory(e,r){if(vo(e,P)&&$n(e,fc[r]))return e}},waitUntil:{isHttpStatus:L(Vf.isHttpStatus),isHttpStatusCategory:L(Vf.isHttpStatusCategory)}},Wf={instanceOf(e,r,t){if(!(e instanceof r))throw new w(`'${x(e)}' is not an instance of '${r.name}'`,t)},notInstanceOf(e,r,t){if(e instanceof r)throw new w(`'${x(e)}' is an instance of '${r.name}'`,t)}},yw={assert:Wf,check:{instanceOf(e,r){return e instanceof r},notInstanceOf(e,r){return!(e instanceof r)}},assertWrap:{instanceOf(e,r,t){if(e instanceof r)return e;throw new w(`'${x(e)}' is not an instance of '${r.name}'`,t)},notInstanceOf(e,r,t){if(e instanceof r)throw new w(`'${x(e)}' is an instance of '${r.name}'`,t);return e}},checkWrap:{instanceOf(e,r){if(e instanceof r)return e},notInstanceOf(e,r){if(!(e instanceof r))return e}},waitUntil:{instanceOf:L(Wf.instanceOf),notInstanceOf:L(Wf.notInstanceOf)}},rD=[(e,r)=>r in e,(e,r)=>r in e.constructor.prototype];function dr(e,r){return rD.some(t=>{try{return t(e,r)}catch{return!1}})}i(dr,"hasKey");const Ni={isKeyOf(e,r,t){if(!dr(r,e))throw new w(`'${String(e)}' is not a key of '${x(r)}'.`,t)},isNotKeyOf(e,r,t){if(dr(r,e))throw new w(`'${String(e)}' is a key of '${x(r)}'.`,t)},hasKey(e,r,t){if(!dr(e,r))throw new w(`'${x(e)}' does not have key '${String(r)}'.`,t)},lacksKey(e,r,t){if(dr(e,r))throw new w(`'${x(e)}' has key '${String(r)}'.`,t)},hasKeys(e,r,t){const n=r.filter(o=>!dr(e,o));if(n.length)throw new w(`'${x(e)}' does not have keys '${n.join(",")}'.`,t)},lacksKeys(e,r,t){const n=r.filter(o=>dr(e,o));if(n.length)throw new w(`'${x(e)}' does not lack keys '${n.join(",")}'.`,t)}},ww={assert:Ni,check:{isKeyOf(e,r){return dr(r,e)},isNotKeyOf(e,r){return!dr(r,e)},hasKey:dr,lacksKey(e,r){return!dr(e,r)},hasKeys(e,r){return r.every(t=>dr(e,t))},lacksKeys(e,r){return r.every(t=>!dr(e,t))}},assertWrap:{isKeyOf(e,r,t){if(!dr(r,e))throw new w(`'${String(e)}' is not a key of '${x(r)}'.`,t);return e},isNotKeyOf(e,r,t){if(dr(r,e))throw new w(`'${String(e)}' is a key of '${x(r)}'.`,t);return e},hasKey(e,r,t){if(!dr(e,r))throw new w(`'${x(e)}' does not have key '${String(r)}'.`,t);return e},lacksKey(e,r,t){if(dr(e,r))throw new w(`'${x(e)}' has key '${String(r)}'.`,t);return e},hasKeys(e,r,t){const n=r.filter(o=>!dr(e,o));if(n.length)throw new w(`'${x(e)}' does not have keys '${n.join(",")}'.`,t);return e},lacksKeys(e,r,t){const n=r.filter(o=>dr(e,o));if(n.length)throw new w(`'${x(e)}' does not lack keys '${n.join(",")}'.`,t);return e}},checkWrap:{isKeyOf(e,r){if(dr(r,e))return e},isNotKeyOf(e,r){if(!dr(r,e))return e},hasKey(e,r){if(dr(e,r))return e},lacksKey(e,r){if(!dr(e,r))return e},hasKeys(e,r){if(r.every(t=>dr(e,t)))return e},lacksKeys(e,r){if(r.every(t=>!dr(e,t)))return e}},waitUntil:{isKeyOf:L(Ni.isKeyOf),isNotKeyOf:L(Ni.isNotKeyOf),hasKey:L(Ni.hasKey),lacksKey:L(Ni.lacksKey),hasKeys:L(Ni.hasKeys),lacksKeys:L(Ni.lacksKeys)}};function tD(e,r,t){if((Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)<r)throw new w(`Length '${e.length}' is not at least '${r}'.`,t)}i(tD,"isLengthAtLeast");function nD(e,r,t){if((Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)!==r)throw new w(`Length '${e.length}' is not exactly '${r}'.`,t)}i(nD,"isLengthExactly");const Kf={isLengthAtLeast:tD,isLengthExactly:nD},kw={assert:Kf,check:{isLengthAtLeast:i(((e,r)=>(Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)>=r),"isLengthAtLeast"),isLengthExactly:i(((e,r)=>(Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)===r),"isLengthExactly")},assertWrap:{isLengthAtLeast:i(((e,r,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)<r)throw new w(`Length '${e.length}' is not at least '${r}'.`,t);return e}),"isLengthAtLeast"),isLengthExactly:i(((e,r,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)!==r)throw new w(`Length '${e.length}' is not exactly '${r}'.`,t);return e}),"isLengthExactly")},checkWrap:{isLengthAtLeast:i(((e,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)>=r)return e}),"isLengthAtLeast"),isLengthExactly:i(((e,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ke(e).length)===r)return e}),"isLengthExactly")},waitUntil:{isLengthAtLeast:L(Kf.isLengthAtLeast),isLengthExactly:L(Kf.isLengthExactly)}},oD={never(e){throw new w("This code should not have executed.",e)}},$w={assert:oD,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Hf={isDefined(e,r){if(e==null)throw new w(`'${x(e)}' is not defined.`,r)},isNullish(e,r){if(e!=null)throw new w(`'${x(e)}' is not a nullish.`,r)}},xw={assert:Hf,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,r){if(e==null)throw new w(`'${x(e)}' is not defined.`,r);return e},isNullish(e,r){if(e==null)return e;throw new w(`'${x(e)}' is not nullish.`,r)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:L(Hf.isDefined),isNullish:L(Hf.isNullish)}},Ot={isInBounds(e,{max:r,min:t},n){if(e<t||r<e)throw new w(`${e} is not within the bounds ${x({min:t,max:r})}`,n)},isOutBounds(e,{min:r,max:t},n){if(r<=e&&e<=t)throw new w(`${e} is not outside the bounds ${x({min:r,max:t})}`,n)},isInteger(e,r){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new w(`${e} is not an integer.`,r)},isNotInteger(e,r){if(Number.isInteger(e))throw new w(`${e} is an integer.`,r)},isAbove(e,r,t){if(e<=r)throw new w(`${e} is not above ${r}`,t)},isAtLeast(e,r,t){if(e<r)throw new w(`${e} is not at least ${r}`,t)},isBelow(e,r,t){if(e>=r)throw new w(`${e} is not below ${r}`,t)},isAtMost(e,r,t){if(e>r)throw new w(`${e} is not at most ${r}`,t)},isNaN(e,r){if(!isNaN(e))throw new w(`${e} is not NaN`,r)},isFinite(e,r){if(isNaN(e)||e===1/0||e===-1/0)throw new w(`${e} is not finite`,r)},isInfinite(e,r){if(e!==1/0&&e!==-1/0)throw new w(`${e} is not infinite`,r)},isApproximately(e,r,t,n){if(e<r-t||e>r+t)throw new w(`${e} is not within ±${t} of ${r}`,n)},isNotApproximately(e,r,t,n){if(e>=r-t&&e<=r+t)throw new w(`${e} is within ±${t} of ${r}`,n)}},Dw={assert:Ot,check:{isInBounds(e,{max:r,min:t}){return t<=e&&e<=r},isOutBounds(e,{max:r,min:t}){return e<t||r<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,r){return e>r},isAtLeast(e,r){return e>=r},isBelow(e,r){return e<r},isAtMost(e,r){return e<=r},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,r,t){return r-t<=e&&e<=r+t},isNotApproximately(e,r,t){return e<r-t||e>r+t}},assertWrap:{isInBounds(e,{max:r,min:t},n){if(e<t||r<e)throw new w(`${e} is not within the bounds ${x({min:t,max:r})}`,n);return e},isOutBounds(e,{min:r,max:t},n){if(r<=e&&e<=t)throw new w(`${e} is not outside the bounds ${x({min:r,max:t})}`,n);return e},isInteger(e,r){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new w(`${e} is not an integer.`,r);return e},isNotInteger(e,r){if(Number.isInteger(e))throw new w(`${e} is an integer.`,r);return e},isAbove(e,r,t){if(e<=r)throw new w(`${e} is not above ${r}`,t);return e},isAtLeast(e,r,t){if(e<r)throw new w(`${e} is not at least ${r}`,t);return e},isBelow(e,r,t){if(e>=r)throw new w(`${e} is not below ${r}`,t);return e},isAtMost(e,r,t){if(e>r)throw new w(`${e} is not at most ${r}`,t);return e},isNaN(e,r){if(!isNaN(e))throw new w(`${e} is not NaN`,r);return e},isFinite(e,r){if(isNaN(e)||e===1/0||e===-1/0)throw new w(`${e} is not finite`,r);return e},isInfinite(e,r){if(e!==1/0&&e!==-1/0)throw new w(`${e} is not infinite`,r);return e},isApproximately(e,r,t,n){if(e<r-t||e>r+t)throw new w(`${e} is not within ±${t} of ${r}`,n);return e},isNotApproximately(e,r,t,n){if(e>=r-t&&e<=r+t)throw new w(`${e} is within ±${t} of ${r}`,n);return e}},checkWrap:{isInBounds(e,{max:r,min:t}){if(t<=e&&e<=r)return e},isOutBounds(e,{max:r,min:t}){if(e<t||r<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,r){if(e>r)return e},isAtLeast(e,r){if(e>=r)return e},isBelow(e,r){if(e<r)return e},isAtMost(e,r){if(e<=r)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,r,t){if(r-t<=e&&e<=r+t)return e},isNotApproximately(e,r,t){if(e<r-t||e>r+t)return e}},waitUntil:{isInBounds:L(Ot.isInBounds),isOutBounds:L(Ot.isOutBounds),isInteger:L(Ot.isInteger),isNotInteger:L(Ot.isNotInteger),isAbove:L(Ot.isAbove),isAtLeast:L(Ot.isAtLeast),isBelow:L(Ot.isBelow),isAtMost:L(Ot.isAtMost),isNaN:L(Ot.isNaN),isFinite:L(Ot.isFinite),isInfinite:L(Ot.isInfinite),isApproximately:L(Ot.isApproximately),isNotApproximately:L(Ot.isNotApproximately)}};function iD(e,r,t,n,o){return cu(...yd(e,r,t,n,o),!1)}i(iD,"assertOutput");function yd(e,r,t,n,o){const a=Array.isArray(t);return[a?e:pw,a?r:e,a?t:r,a?n:t,a?o:n]}i(yd,"extractOutputArgs");function cu(e,r,t,n,o,a){const s=r(...t);if(s instanceof Promise)return new Promise(async(l,u)=>{try{const f=await s;e(f,n),a?l(f):l()}catch(f){u(new w(`Output from '${r.name}' did not produce expected output. ${nt(f)}`,o))}});try{return e(s,n),a?s:void 0}catch(l){throw new w(`Output from '${r.name}' did not produce expected output. ${nt(l)}`,o)}}i(cu,"innerAssertOutput");function aD(e,r,t,n,o){try{const a=cu(...yd(e,r,t,n,o),!1);return a instanceof Promise?new Promise(async s=>{try{await a,s(!0)}catch{s(!1)}}):!0}catch{return!1}}i(aD,"checkOutput");function sD(e,r,t,n,o){return cu(...yd(e,r,t,n,o),!0)}i(sD,"assertWrapOutput");function lD(e,r,t,n,o){try{const a=cu(...yd(e,r,t,n,o),!0);return a instanceof Promise?new Promise(async s=>{try{s(await a)}catch{s(void 0)}}):a}catch{return}}i(lD,"checkWrapOutput");const Gf=Symbol("not set");async function uD(e,r,t,n,o,a){const s=Array.isArray(t),l=s?e:pw,u=s?r:e,f=s?t:r,g=s?n:t,h=iw(s?o:n),p=s?a:o,b=ns(h.timeout,{milliseconds:!0}).milliseconds,v=ns(h.interval,{milliseconds:!0});let $=Gf,C;async function E(){try{$=await cu(l,u,f,g,void 0,!0)}catch(N){$=Gf,C=Dr(N)}}i(E,"checkCondition");const A=Date.now();for(;$===Gf;)if(await E(),await ta(v),Date.now()-A>=b)throw ha(C,ga(p,`Timeout of '${b}' milliseconds exceeded waiting for callback value to match expectations`));return $}i(uD,"waitUntilOutput");const cD={output:iD},Cw={assert:cD,check:{output:aD},assertWrap:{output:sD},checkWrap:{output:lD},waitUntil:{output:uD}},Ys={isPropertyKey(e,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new w(`'${x(e)}' is not a PropertyKey.`,r)},isNotPropertyKey(e,r){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new w(`'${x(e)}' is a PropertyKey.`,r)},isPrimitive(e,r){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new w(`'${x(e)}' is not a Primitive.`,r)},isNotPrimitive(e,r){if(e===null||typeof e!="object"&&typeof e!="function")throw new w(`'${x(e)}' is not a Primitive.`,r)}},Ew={assert:Ys,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,r){if(e===null||typeof e!="object"&&typeof e!="function")throw new w(`'${x(e)}' is not a Primitive.`,r);return e},isNotPropertyKey(e,r){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new w(`'${x(e)}' is a PropertyKey.`,r);return e},isPrimitive(e,r){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new w(`'${x(e)}' is not a Primitive.`,r);return e},isPropertyKey(e,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new w(`'${x(e)}' is not a PropertyKey.`,r);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:L(Ys.isNotPrimitive),isNotPropertyKey:L(Ys.isNotPropertyKey),isPrimitive:L(Ys.isPrimitive),isPropertyKey:L(Ys.isPropertyKey)}},Js={isPromiseLike(e,r){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new w(`'${x(e)}' is not a PromiseLike.`,r)},isNotPromiseLike(e,r){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new w(`'${x(e)}' is a PromiseLike.`,r)},isPromise(e,r){if(!(e instanceof Promise))throw new w(`'${x(e)}' is not a Promise.`,r)},isNotPromise(e,r){if(e instanceof Promise)throw new w(`'${x(e)}' is a Promise.`,r)}},Aw={assert:Js,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,r){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new w(`'${x(e)}' is not a PromiseLike.`,r);return e},isNotPromiseLike(e,r){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new w(`'${x(e)}' is a PromiseLike.`,r);return e},isPromise(e,r){if(!(e instanceof Promise))throw new w(`'${x(e)}' is not a Promise.`,r);return e},isNotPromise(e,r){if(e instanceof Promise)throw new w(`'${x(e)}' is a Promise.`,r);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:L(Js.isPromiseLike,!0),isNotPromiseLike:L(Js.isNotPromiseLike,!0),isPromise:L(Js.isPromise,!0),isNotPromise:L(Js.isNotPromise,!0)}},Zf={matches(e,r,t){if(!r.test(e))throw new w(`'${e}' does not match ${r}`,t)},mismatches(e,r,t){if(r.test(e))throw new w(`'${e}' matches ${r}`,t)}},Fw={assert:Zf,check:{matches(e,r){return r.test(e)},mismatches(e,r){return!r.test(e)}},assertWrap:{matches(e,r,t){if(!r.test(e))throw new w(`'${e}' does not match ${r}`,t);return e},mismatches(e,r,t){if(r.test(e))throw new w(`'${e}' matches ${r}`,t);return e}},checkWrap:{matches(e,r){if(r.test(e))return e},mismatches(e,r){if(!r.test(e))return e}},waitUntil:{matches:L(Zf.matches,!0),mismatches:L(Zf.mismatches,!0)}},pr={isArray(e,r){if(!Array.isArray(e))throw new w(`'${x(e)}' is not an array.`,r)},isBigInt(e,r){if(typeof e!="bigint")throw new w(`'${x(e)}' is not a bigint.`,r)},isBoolean(e,r){if(typeof e!="boolean")throw new w(`'${x(e)}' is not a boolean.`,r)},isFunction(e,r){if(typeof e!="function")throw new w(`'${x(e)}' is not a function.`,r)},isNull(e,r){if(e!==null)throw new w(`'${x(e)}' is not nul.`,r)},isNumber(e,r){if(typeof e!="number"||isNaN(e))throw new w(`'${x(e)}' is not a number.`,r)},isObject(e,r){if(Array.isArray(e)||typeof e!="object"||!e)throw new w(`'${x(e)}' is not a non-null object.`,r)},isPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new w(`'${x(e)}' is not a plain object.`,r)},isString(e,r){if(typeof e!="string")throw new w(`'${x(e)}' is not a string.`,r)},isSymbol(e,r){if(typeof e!="symbol")throw new w(`'${x(e)}' is not a symbol.`,r)},isUndefined(e,r){if(typeof e<"u")throw new w(`'${x(e)}' is not a undefined.`,r)},isNotArray(e,r){if(Array.isArray(e))throw new w(`'${x(e)}' is an array.`,r)},isNotBigInt(e,r){if(typeof e=="bigint")throw new w(`'${x(e)}' is a bigint.`,r)},isNotBoolean(e,r){if(typeof e=="boolean")throw new w(`'${x(e)}' is a boolean.`,r)},isNotFunction(e,r){if(typeof e=="function")throw new w(`'${x(e)}' is a function.`,r)},isNotNull(e,r){if(e===null)throw new w(`'${x(e)}' is a null.`,r)},isNotNumber(e,r){if(typeof e=="number"&&!isNaN(e))throw new w(`'${x(e)}' is a number.`,r)},isNotObject(e,r){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new w(`'${x(e)}' is a non-null object.`,r)},isNotPlainObject(e,r){const t=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new w(`'${x(e)}' is a plain object.`,r)},isNotString(e,r){if(typeof e=="string")throw new w(`'${x(e)}' is a string.`,r)},isNotSymbol(e,r){if(typeof e=="symbol")throw new w(`'${x(e)}' is a symbol.`,r)},isNotUndefined(e,r){if(typeof e>"u")throw new w(`'${x(e)}' is a undefined.`,r)}},Sw={assert:pr,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const r=Object.getPrototypeOf(e);return(r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const r=Object.getPrototypeOf(e);return!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,r){if(!Array.isArray(e))throw new w(`'${x(e)}' is not an array.`,r);return e},isBigInt(e,r){if(typeof e!="bigint")throw new w(`'${x(e)}' is not a bigint.`,r);return e},isBoolean(e,r){if(typeof e!="boolean")throw new w(`'${x(e)}' is not a boolean.`,r);return e},isFunction(e,r){if(typeof e!="function")throw new w(`'${x(e)}' is not a function.`,r);return e},isNull(e,r){if(e!==null)throw new w(`'${x(e)}' is not nul.`,r);return e},isNumber(e,r){if(typeof e!="number"||isNaN(e))throw new w(`'${x(e)}' is not a number.`,r);return e},isObject(e,r){if(Array.isArray(e)||typeof e!="object"||!e)throw new w(`'${x(e)}' is not a non-null object.`,r);return e},isPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new w(`'${x(e)}' is not a plain object.`,r);return e},isString(e,r){if(typeof e!="string")throw new w(`'${x(e)}' is not a string.`,r);return e},isSymbol(e,r){if(typeof e!="symbol")throw new w(`'${x(e)}' is not a symbol.`,r);return e},isUndefined(e,r){if(typeof e<"u")throw new w(`'${x(e)}' is not a undefined.`,r);return e},isNotArray(e,r){if(Array.isArray(e))throw new w(`'${x(e)}' is an array.`,r);return e},isNotBigInt(e,r){if(typeof e=="bigint")throw new w(`'${x(e)}' is a bigint.`,r);return e},isNotBoolean(e,r){if(typeof e=="boolean")throw new w(`'${x(e)}' is a boolean.`,r);return e},isNotFunction(e,r){if(typeof e=="function")throw new w(`'${x(e)}' is a function.`,r);return e},isNotNull(e,r){if(e===null)throw new w(`'${x(e)}' is a null.`,r);return e},isNotNumber(e,r){if(typeof e=="number"&&!isNaN(e))throw new w(`'${x(e)}' is a number.`,r);return e},isNotObject(e,r){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new w(`'${x(e)}' is a non-null object.`,r);return e},isNotPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new w(`'${x(e)}' is a plain object.`,r)},isNotString(e,r){if(typeof e=="string")throw new w(`'${x(e)}' is a string.`,r);return e},isNotSymbol(e,r){if(typeof e=="symbol")throw new w(`'${x(e)}' is a symbol.`,r);return e},isNotUndefined(e,r){if(typeof e>"u")throw new w(`'${x(e)}' is a undefined.`,r);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const r=Object.getPrototypeOf(e);if((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const r=Object.getPrototypeOf(e);if(!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:L(pr.isArray),isBigInt:L(pr.isBigInt),isBoolean:L(pr.isBoolean),isFunction:L(pr.isFunction),isNull:L(pr.isNull),isNumber:L(pr.isNumber),isObject:L(pr.isObject),isPlainObject:L(pr.isPlainObject),isString:L(pr.isString),isSymbol:L(pr.isSymbol),isUndefined:L(pr.isUndefined),isNotArray:L(pr.isNotArray),isNotBigInt:L(pr.isNotBigInt),isNotBoolean:L(pr.isNotBoolean),isNotFunction:L(pr.isNotFunction),isNotNull:L(pr.isNotNull),isNotNumber:L(pr.isNotNumber),isNotObject:L(pr.isNotObject),isNotPlainObject:L(pr.isNotPlainObject),isNotString:L(pr.isNotString),isNotSymbol:L(pr.isNotSymbol),isNotUndefined:L(pr.isNotUndefined)}};var Ut;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Ut||(Ut={}));function Oh(e,r,t){Rh(e,{noError:"No error.",notInstance:`'${x(e)}' is not an error instance.`},r,t)}i(Oh,"isError");function jb(e,r,t){Rh(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${x(e)}' is not an error instance.`},r,t)}i(jb,"assertThrownError");function Rh(e,r,t,n){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor)){const o=e.constructor.name;throw new w(`Error constructor '${o}' did not match expected constructor '${t.matchConstructor.name}'.`,n)}else if(t?.matchMessage){const o=nt(e);if(typeof t.matchMessage=="string"){if(!ow(o,t.matchMessage))throw new w(`Error message

'${o}'

does not contain

'${t.matchMessage}'.`,n)}else if(!o.match(t.matchMessage))throw new w(`Error message

'${o}'

does not match RegExp

'${t.matchMessage}'.`,n)}}else throw new w(r.notInstance,n);else throw new w(r.noError,n)}i(Rh,"internalAssertError");function Ub(e,r){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor))return!1;if(r?.matchMessage){const t=nt(e);if(typeof r.matchMessage=="string"){if(!ow(t,r.matchMessage))return!1}else if(!t.match(r.matchMessage))return!1}}else return!1;else return!1;return!0}i(Ub,"internalCheckError");function wd(e,r,t,n){let o;try{const a=r instanceof Promise?r:r();if(a instanceof Promise)return new Promise(async(s,l)=>{try{await a}catch(u){o=Dr(u)}try{jb(o,t,n),e===Ut.Assert?s():e===Ut.Check?s(!0):s(o)}catch(u){e===Ut.CheckWrap?s(void 0):e===Ut.Check?s(!1):l(Dr(u))}})}catch(a){o=Dr(a)}try{return jb(o,t,n),e===Ut.Check?!0:e!==Ut.Assert?o:void 0}catch(a){if(e===Ut.CheckWrap)return;if(e===Ut.Check)return!1;throw a}}i(wd,"internalThrowsCheck");function dD(e,r,t){return wd(Ut.Assert,e,r,t)}i(dD,"throws");function fD(e,r){return wd(Ut.Check,e,r)}i(fD,"throwsCheck");function gD(e,r,t){return wd(Ut.AssertWrap,e,r,t)}i(gD,"throwsAssertWrap");function hD(e,r,t){return wd(Ut.CheckWrap,e,r,t)}i(hD,"throwsCheckWrap");const pD=L(Oh);function mD(e,r,t,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,a=o?r:e,s=typeof t=="object"?n:t,l=typeof t=="object"?t:r;if(typeof a!="function")throw new TypeError(`Callback is not a function, got '${x(a)}'`);return pD(o,async()=>{try{await a();return}catch(u){return Dr(u)}},l,s)}i(mD,"throwsWaitUntil");const bD={throws:dD,isError:Oh},Mw={assert:bD,check:{throws:fD,isError(e,r){return Ub(e,r)}},assertWrap:{throws:gD,isError(e,r,t){return Rh(e,{noError:"No error.",notInstance:`'${x(e)}' is not an error instance.`},r,t),e}},checkWrap:{throws:hD,isError(e,r){if(Ub(e,r))return e}},waitUntil:{throws:mD,isError:L(Oh)}},Zo=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Yf={isUuid(e,r){if(!String(e).match(Zo))throw new w(`'${String(e)}' is not a UUID.`,r)},isNotUuid(e,r){if(String(e).match(Zo))throw new w(`'${String(e)}' is a UUID.`,r)}},Tw={assert:Yf,check:{isUuid(e){return!!String(e).match(Zo)},isNotUuid(e){return!String(e).match(Zo)}},assertWrap:{isUuid(e,r){if(!String(e).match(Zo))throw new w(`'${String(e)}' is not a UUID.`,r);return e},isNotUuid(e,r){if(String(e).match(Zo))throw new w(`'${String(e)}' is a UUID.`,r);return e}},checkWrap:{isUuid(e){if(String(e).match(Zo))return e},isNotUuid(e){if(!String(e).match(Zo))return e}},waitUntil:{isUuid:L(Yf.isUuid),isNotUuid:L(Yf.isNotUuid)}},vD={...$w.assert,...aw.assert,...sw.assert,...uw.assert,...lw.assert,...vw.assert,...yw.assert,...cw.assert,...ww.assert,...kw.assert,...xw.assert,...Dw.assert,...Cw.assert,...Ew.assert,...Aw.assert,...Fw.assert,...Sw.assert,...mw.assert,...Mw.assert,...Tw.assert,...bw.assert},Lh=[aw,sw,uw,lw,vw,yw,cw,ww,kw,$w,xw,Dw,Cw,Ew,Aw,Fw,Sw,mw,Mw,Tw,bw],yD=Object.assign({},...Lh.map(e=>e.check)),M=Object.assign(i(function(r){return!!r},"check"),yD);function wD(e,r,t){return mc(e,r,t,new Set)}i(wD,"checkCustomDeepQuality");function mc(e,r,t,n){if(e=_b(e),r=_b(r),M.isObject(e)&&M.isObject(r)){if(n.has(e)||n.has(r))return!0;if(n.add(e),n.add(r),!mc(Ke(e).sort(),Ke(r).sort(),t,n))return!1;let o=!1;const a=Ke(e).map(s=>{const l=mc(e[s],r[s],t,n);return M.isPromise(l)&&(o=!0),l});return zb(o,a)}else if(M.isArray(e)&&M.isArray(r)){if(n.has(e)||n.has(r))return!0;if(n.add(e),n.add(r),e.length!==r.length)return!1;let o=!1;const a=e.map((s,l)=>{const u=mc(s,r[l],t,n);return M.isPromise(u)&&(o=!0),u});return zb(o,a)}else return t(e,r)}i(mc,"recursiveCheckCustomDeepQuality");function _b(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}i(_b,"flattenComplexObject");function zb(e,r){return e?new Promise(async(t,n)=>{try{const o=await Promise.all(r);t(o.every(M.isTrue))}catch(o){n(Dr(o))}}):r.every(M.isTrue)}i(zb,"handleMaybePromise");const kD=Object.assign({},...Lh.map(e=>e.assertWrap)),ur=Object.assign(i(function(r,t){if(!r)throw new w("Assertion failed.",t);return r},"assertWrap"),kD);function $D(e){return{equals:i(()=>{},"equals"),notEquals:i(()=>{},"notEquals"),matches:i(()=>{},"matches"),notMatches:i(()=>{},"notMatches"),slowEquals:i(()=>{},"slowEquals")}}i($D,"tsType");const xD={tsType:$D},DD={assert:xD},CD={fail:i(e=>{throw new w("Failure triggered.",e)},"fail")},ED={...DD.assert,...vD,...CD},Er=Object.assign(i(function(r,t){if(!r)throw new w("Assertion failed.",t)},"assert"),ED),AD=Object.assign({},...Lh.map(e=>e.checkWrap)),kd=Object.assign(i(function(r){if(r)return r},"checkWrap"),AD);function FD(e,r){return M.hasKey(e,"entryType")&&e.entryType===r}i(FD,"isBookEntry");function Bi(e,r){return e.controlType===r}i(Bi,"isControlInitType");var ge;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(ge||(ge={}));const Pw=Symbol("any-type"),SD={[ge.Checkbox]:!1,[ge.Color]:"",[ge.Custom]:void 0,[ge.Dropdown]:"",[ge.Hidden]:Pw,[ge.Number]:0,[ge.Text]:""};function MD(e,r){if(!e)return[];const t=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===ge.Custom)return;const a=SD[o.controlType];a!==Pw&&(typeof a!=typeof o.initValue&&t.push(new Error(`Control '${n}' in page '${r}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||t.push(new Error(`'${r}' cannot have an empty control name.`)))}),t}i(MD,"checkControls");function TD(e,r,t){const n=r;if(e.has(n))return e.get(n);{const o=t();return M.isPromise(o)?new Promise(async(a,s)=>{try{const l=await o;e.set(n,l),a(l)}catch(l){s(Dr(l))}}):(e.set(n,o),o)}}i(TD,"getOrSetFromMap");function ma(e,r,t){if(r in e)return e[r];{const n=t();return M.isPromise(n)?new Promise(async(o,a)=>{try{const s=await n;e[r]=s,o(s)}catch(s){a(Dr(s))}}):(e[r]=n,n)}}i(ma,"getOrSet");function An(e){return Ke(e).map(r=>[r,e[r]])}i(An,"getObjectTypedEntries");function Bl(e){return Object.fromEntries(e)}i(Bl,"typedObjectFromEntries");function Wt(e,r,t){return e.reduce((n,o,a,s)=>{const l=r(o,a,s);return t(l,o,a,s)&&n.push(l),n},[])}i(Wt,"filterMap");function PD(e,r,t={}){return e.reduce((n,o,a,s)=>{const l=r(o,a,s);return ma(n,l,()=>[]).push(o),n},{})}i(PD,"groupArrayBy");function di(e,r,t={}){try{let n=!1;const o=e.map((a,s,l)=>{const u=r(a,s,l);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(M.isTruthy);return n?new Promise(async(a,s)=>{try{const l=Wt(await Promise.all(o),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},M.isTruthy);a(Bl(l))}catch(l){s(Dr(l))}}):Bl(o)}catch(n){throw Dr(n)}}i(di,"arrayToObject");function ID(e,r){const t=[];let n=!1;for(let o=0;o<e;o++){const a=r(o);M.isPromise(a)&&(n=!0),t.push(a)}return n?Promise.all(t):t}i(ID,"createArray");function ND(e){return Array.isArray(e)?e:[e]}i(ND,"ensureArray");function BD({min:e,max:r}){const{min:t,max:n}=Eh({min:Math.floor(e),max:Math.floor(r)}),o=n-t+1,a=Math.ceil(Math.log2(o)),s=Math.ceil(a/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${t}, max: ${n}})`);const l=Math.floor(256**s/o)*o,u=new Uint8Array(s);let f;do crypto.getRandomValues(u),f=u.reduce((g,h,p)=>g+h*256**p,0);while(f>=l);return t+f%o}i(BD,"randomInteger");const qb=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];function Po(e=16){let r="";for(let t=0;t<e;t++){const n=BD({min:0,max:qb.length-1});r+=qb[n]}return r}i(Po,"randomString");function Iw(e){if(M.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(r=>nt(r).trim()).join(`
`))}i(Iw,"combineErrors");function Nw(e,r={}){try{const t=e();return t instanceof Promise?t.catch(n=>r.handleError?r.handleError(n):M.hasKey(r,"fallbackValue")?r.fallbackValue:Dr(n)):t}catch(t){return r.handleError?r.handleError(t):M.hasKey(r,"fallbackValue")?r.fallbackValue:Dr(t)}}i(Nw,"wrapInTry");function Rn(e){try{return JSON.parse(JSON.stringify(e))}catch(r){throw console.error("Failed to JSON copy for:",e),ha(r,"Failed JSON copy")}}i(Rn,"copyThroughJson");const OD="modulepreload",RD=i(function(e){return"/vira/book/"+e},"assetsURL"),Vb={},Ol=i(function(r,t,n){let o=Promise.resolve();if(t&&t.length>0){let u=function(f){return Promise.all(f.map(g=>Promise.resolve(g).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};i(u,"allSettled"),document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");o=u(t.map(f=>{if(f=RD(f),f in Vb)return;Vb[f]=!0;const g=f.endsWith(".css"),h=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${h}`))return;const p=document.createElement("link");if(p.rel=g?"stylesheet":OD,g||(p.as="script"),p.crossOrigin="",p.href=f,l&&p.setAttribute("nonce",l),document.head.appendChild(p),g)return new Promise((b,v)=>{p.addEventListener("load",b),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return i(a,"handlePreloadError"),o.then(s=>{for(const l of s||[])l.status==="rejected"&&a(l.reason);return r().catch(a)})},"preload");var zr;(function(e){e.Standard="stdout",e.Error="stderr"})(zr||(zr={}));var ve;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ve||(ve={}));async function LD(){return await J1({async[_n.Node](){const e=(await Ol(async()=>{const{default:r}=await import("./index-aeZXflCI.js");return{default:r}},[])).default;return{[ve.Bold]:e.bold.open,[ve.Debug]:e.blueBright.open,[ve.Error]:e.red.open,[ve.Faint]:e.gray.open,[ve.Info]:e.cyan.open,[ve.Mutate]:e.magenta.open,[ve.NormalWeight]:"\x1B[22m",[ve.Plain]:"",[ve.Reset]:e.reset.open,[ve.Success]:e.green.open,[ve.Warning]:e.yellow.open}},[_n.Web](){return Promise.resolve({[ve.Bold]:"font-weight: bold",[ve.Debug]:"color: blue",[ve.Error]:"color: red",[ve.Faint]:"color: grey",[ve.Info]:"color: teal",[ve.Mutate]:"color: magenta",[ve.NormalWeight]:"",[ve.Plain]:"",[ve.Reset]:"",[ve.Success]:"color: green",[ve.Warning]:"color: orange"})}})}i(LD,"determineDefaultLogColors");const Jt=await LD(),jD={[ve.Bold]:{colors:[Jt.bold],logType:zr.Standard},[ve.Debug]:{colors:[Jt.debug],logType:zr.Standard},[ve.Faint]:{colors:[Jt.faint],logType:zr.Standard},[ve.Info]:{colors:[Jt.info],logType:zr.Standard},[ve.Mutate]:{colors:[Jt.mutate,Jt.bold],logType:zr.Standard},[ve.NormalWeight]:{colors:[Jt.normalWeight],logType:zr.Standard},[ve.Plain]:{colors:[],logType:zr.Standard},[ve.Reset]:{colors:[Jt.reset],logType:zr.Standard},[ve.Success]:{colors:[Jt.success,Jt.bold],logType:zr.Standard},[ve.Error]:{colors:[Jt.error,Jt.bold],logType:zr.Error},[ve.Warning]:{colors:[Jt.warning],logType:zr.Error}};function Pt({value:e,prefix:r}){return String(e).startsWith(r)?String(e):`${r}${String(e)}`}i(Pt,"addPrefix");function Gi({value:e,prefix:r}){return e.startsWith(r)?e.slice(r.length):e}i(Gi,"removePrefix");function Bw(e,r){try{let t=!1;const n=An(e).map(([o,a])=>{const s=r(o,a,e);return s instanceof Promise?(t=!0,s):s?[s.key,s.value]:void 0}).filter(M.isTruthy);return t?new Promise(async(o,a)=>{try{const s=Wt(await Promise.all(n),l=>{if(l)return Array.isArray(l)?l:[l.key,l.value]},M.isTruthy);o(Bl(s))}catch(s){a(Dr(s))}}):Bl(n)}catch(t){throw Dr(t)}}i(Bw,"mapObject");function Ow(e,r){return Bw(e,(t,n)=>{const o=n,a=r(n,e);return a instanceof Promise?a.then(s=>({key:o,value:s})):{key:o,value:a}})}i(Ow,"mapEnumToObject");function Rw(e,...r){const t={...e};return r.forEach(n=>{n&&An(n).forEach(([o,a])=>{a!=null&&(t[o]=a)})}),t}i(Rw,"mergeDefinedProperties");function UD(e){return e.replace(/,/g,"")}i(UD,"removeCommas");function _D(e){return typeof e=="number"?e:Number(typeof e=="string"?UD(e):e)}i(_D,"toNumber");function zD(e){const r=qD(e);if(r==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return r}i(zD,"toEnsuredNumber");function qD(e){const r=_D(e);if(!isNaN(r))return r}i(qD,"toMaybeNumber");const Lw="px";function fi(e){return jh({value:e,suffix:Lw})}i(fi,"addPx");function VD(e){return zD(Uh({value:e,suffix:Lw}))}i(VD,"removePx");function jh({value:e,suffix:r}){return String(e).endsWith(r)?String(e):`${String(e)}${r}`}i(jh,"addSuffix");function Uh({value:e,suffix:r}){return e.endsWith(r)?e.slice(0,Math.max(0,e.length-r.length)):e}i(Uh,"removeSuffix");async function WD(){return await J1({async[_n.Node](){const{inspect:e}=await Ol(async()=>{const{inspect:r}=await import("node:util");return{inspect:r}},[]);return({args:r,colorKey:t,options:n})=>{const o=r.map(l=>typeof l=="string"?l:e(l));return{text:[n.omitColors?"":n.colorConfig[t].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[ve.Reset].colors.join("")].join(""),css:void 0}}},[_n.Web](){return({args:e,colorKey:r,options:t})=>{const n=t.omitColors?void 0:Wt(t.colorConfig[r].colors,s=>Uh({value:s,suffix:";"}),M.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?nt(s):x(s)).join(`
`),t.omitColors?"":t.colorConfig[ve.Reset].colors.join("")].join(""),css:n}}}})}i(WD,"createToLogString");const KD=await WD(),HD={colorConfig:jD,omitColors:!1},GD=jw({[zr.Error](){},[zr.Standard](){}});function jw(e,r){const t=Rw(HD,r);function n(a){e[t.colorConfig[a.colorKey].logType](KD({...a,options:t}))}i(n,"writeLog");const o=Ow(ve,a=>(...s)=>n({args:s,colorKey:a}));return{...o,if(a){return a?o:GD}}}i(jw,"createLogger");const ZD=Ch(_n.Node)?{[zr.Error]({text:e}){process.stderr.write(e+`
`)},[zr.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[zr.Error]({text:e,css:r}){console.error(Pt({value:e,prefix:"%c"}),r)},[zr.Standard]({text:e,css:r}){console.log(Pt({value:e,prefix:"%c"}),r)}},Uw=jw(ZD);function YD(e,{min:r,max:t}){return Math.min(Math.max(e,r),t)}i(YD,"clamp$2");function _w(e,{digits:r}){if(r==null)return e;const t=Math.pow(10,r),n=e*t;return Number((Math.round(n)/t).toFixed(r))}i(_w,"round");function JD({searchIn:e,searchFor:r,caseSensitive:t,includeLength:n}){const o=rw(nw(r,{caseSensitive:t}),"g"),a=[];return e.replace(o,(...s)=>{const l=s[s.length-2];if(typeof l!="number")throw new TypeError(`Match index "${l}" is not a number. Searching for "${r}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);a.push({index:l,length:u.length});const f=s[0];if(typeof f!="string")throw new TypeError(`Original match when searching for "${r}" in "${e}" at index ${l} is not a string.`);return f}),a}i(JD,"findSubstringIndexes");function XD(e,r,{caseSensitive:t}){const n=JD({searchIn:e,searchFor:r,caseSensitive:t,includeLength:!0}),o=nw(r,{caseSensitive:t});return e.split(o).reduce((s,l,u)=>{const f=n[u],g=s.concat(l);if(f){const h=e.slice(f.index,f.index+f.length);return g.concat(h)}else return g},[])}i(XD,"splitIncludeSplit");function QD(e,r){return e.split(r)}i(QD,"safeSplit");function Wb(e,r){const{min:t,max:n}=Eh(r);if(r.takeOverflow){const o=n-t+1,a=(e-t)%o;return a<0?t+o+a:t+a}else return e>n?t:e<t?n:e}i(Wb,"wrapNumber");const zw=typeof Buffer<"u",e8=zw?Buffer.isBuffer.bind(Buffer):i(function(r){return!1},"isBuffer"),r8=zw?Buffer.from.bind(Buffer):i(function(r){return r},"cloneBuffer"),t8=typeof Promise=="function",n8=(e=>{if(typeof globalThis=="object")return globalThis;Object.defineProperty(e,"typeDetectGlobalObject",{get(){return this},configurable:!0});const r=typeDetectGlobalObject;return delete e.typeDetectGlobalObject,r})(Object.prototype),qw=typeof Symbol<"u",$g=typeof Map<"u",xg=typeof Set<"u",o8=typeof WeakMap<"u",i8=typeof WeakSet<"u",a8=typeof DataView<"u",Vw=qw&&typeof Symbol.iterator<"u",Kb=qw&&typeof Symbol.toStringTag<"u",s8=xg&&typeof Set.prototype.entries=="function",l8=$g&&typeof Map.prototype.entries=="function",u8=s8&&Object.getPrototypeOf(new Set().entries()),c8=l8&&Object.getPrototypeOf(new Map().entries()),Ww=Vw&&typeof Array.prototype[Symbol.iterator]=="function",d8=Ww&&Object.getPrototypeOf([][Symbol.iterator]()),Kw=Vw&&typeof String.prototype[Symbol.iterator]=="function",f8=Kw&&Object.getPrototypeOf(""[Symbol.iterator]()),g8=8,h8=-1;function p8(e){const r=typeof e;if(r!=="object")return r;if(e===null)return"null";if(e===n8)return"global";if(Array.isArray(e)&&(!Kb||!(Symbol.toStringTag in e)))return"Array";if(typeof window=="object"&&window!==null){if(typeof window.location=="object"&&e===window.location)return"Location";if(typeof window.document=="object"&&e===window.document)return"Document";if(typeof window.navigator=="object"){if(typeof window.navigator.mimeTypes=="object"&&e===window.navigator.mimeTypes)return"MimeTypeArray";if(typeof window.navigator.plugins=="object"&&e===window.navigator.plugins)return"PluginArray"}if((typeof window.HTMLElement=="function"||typeof window.HTMLElement=="object")&&e instanceof window.HTMLElement){if(e.tagName==="BLOCKQUOTE")return"HTMLQuoteElement";if(e.tagName==="TD")return"HTMLTableDataCellElement";if(e.tagName==="TH")return"HTMLTableHeaderCellElement"}}const t=Kb&&e[Symbol.toStringTag];if(typeof t=="string")return t;const n=Object.getPrototypeOf(e);return n===RegExp.prototype?"RegExp":n===Date.prototype?"Date":t8&&n===Promise.prototype?"Promise":xg&&n===Set.prototype?"Set":$g&&n===Map.prototype?"Map":i8&&n===WeakSet.prototype?"WeakSet":o8&&n===WeakMap.prototype?"WeakMap":a8&&n===DataView.prototype?"DataView":$g&&n===c8?"Map Iterator":xg&&n===u8?"Set Iterator":Ww&&n===d8?"Array Iterator":Kw&&n===f8?"String Iterator":n===null?"Object":Object.prototype.toString.call(e).slice(g8,h8)}i(p8,"typeDetect");const du="Arguments",fu="Array",gu="Object",hu="Map",pu="Set";function Dg(e){return e8(e)?"Buffer":p8(e)}i(Dg,"detectType");function m8(e,r){switch(r){case"ArrayBuffer":return e.slice(0);case"Boolean":return new Boolean(e.valueOf());case"Buffer":return r8(e);case"DataView":return new DataView(e.buffer);case"Date":return new Date(e.getTime());case"Number":return new Number(e);case"RegExp":return new RegExp(e.source,e.flags);case"String":return new String(e);case"Float32Array":return new Float32Array(e);case"Float64Array":return new Float64Array(e);case"Int16Array":return new Int16Array(e);case"Int32Array":return new Int32Array(e);case"Int8Array":return new Int8Array(e);case"Uint16Array":return new Uint16Array(e);case"Uint32Array":return new Uint32Array(e);case"Uint8Array":return new Uint8Array(e);case"Uint8ClampedArray":return new Uint8ClampedArray(e);case"Array Iterator":return e;case"Map Iterator":return e;case"Promise":return e;case"Set Iterator":return e;case"String Iterator":return e;case"function":return e;case"global":return e;case"WeakMap":return e;case"WeakSet":return e;case"boolean":return e;case"null":return e;case"number":return e;case"string":return e;case"symbol":return e;case"undefined":return e;case du:return[];case fu:return[];case hu:return new Map;case gu:return{};case pu:return new Set;default:return e}}i(m8,"clone$1");function Ic(e,r,t=null){if(t&&r==="Object"){const n=t(e,r);if(n!==void 0)return n}return m8(e,r)}i(Ic,"copy");const b8=new Set([du,fu,hu,gu,pu]);function Cg(e){return b8.has(e)}i(Cg,"isCollection");function v8(e,r){switch(r){case du:case fu:return Object.keys(e);case gu:return[].concat(Object.keys(e),Object.getOwnPropertySymbols(e));case hu:case pu:return Array.from(e.keys());default:return[]}}i(v8,"getKeys");function y8(e,r,t){switch(t){case du:case fu:case gu:return e[r];case hu:return e.get(r);case pu:return r;default:return}}i(y8,"getValue");function Hb(e,r,t,n){switch(n){case du:case fu:case gu:e[r]=t;break;case hu:e.set(r,t);break;case pu:e.add(t);break}return e}i(Hb,"setValue");function Hw(e,r,t,n,o){const a=Dg(e),s=Ic(e,a);if(!Cg(a))return s;const l=v8(e,a);for(const u of l){const f=y8(e,u,a);if(n.has(f))Hb(r,u,t.get(f),a);else{const g=Dg(f),h=Ic(f,g);Cg(g)&&(t.set(f,h),n.add(f)),Hb(r,u,Hw(f,h,t,n),a)}}return r}i(Hw,"recursiveCopy");function w8(e,r){const{customizer:t=null}={},n=Dg(e);if(!Cg(n))return Ic(e,n,t);const o=Ic(e,n,t),a=new WeakMap([[e,o]]),s=new WeakSet([e]);return Hw(e,o,a,s)}i(w8,"deepCopy");function qe(e,r){let t=!1;const n=Ke(e).reduce((o,a)=>{const s=r(a,e[a],e);return s instanceof Promise&&(t=!0),o[a]=s,o},{});return t?new Promise(async(o,a)=>{try{await Promise.all(Ke(n).map(async s=>{const l=await n[s];n[s]=l})),o(n)}catch(s){a(Dr(s))}}):n}i(qe,"mapObjectValues");function $d(e,r){const t=An(e).filter(([n,o])=>r(n,o,e));return Bl(t)}i($d,"filterObject");function k8(e,r){return $d(e,t=>r.includes(t))}i(k8,"pickObjectKeys");function is(e){return Ke(e).map(r=>e[r])}i(is,"getObjectTypedValues");function Gw(e,{keepNewLines:r}={}){return r?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}i(Gw,"collapseWhiteSpace");var Rl;(function(e){e.Upper="upper",e.Lower="lower"})(Rl||(Rl={}));const $8={firstLetterCase:Rl.Lower};function x8(e,r){if(!e.length)return"";const t=e[0];return(r===Rl.Upper?t.toUpperCase():t.toLowerCase())+e.slice(1)}i(x8,"setFirstLetterCasing");function D8(e,r={}){const t=e.toLowerCase();if(!t.length)return"";const n=t.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,a=>{const s=a[1];return s?s.toUpperCase():""}),o=Rw($8,r);return x8(n,o.firstLetterCase)}i(D8,"kebabCaseToCamelCase");function C8(e,r="and"){if(e.length<2)return e.join("");const t=e.length>2?", ":" ";return`${e.slice(0,-1).join(t)}${t}${r} ${e[e.length-1]}`}i(C8,"joinWithFinalConjunction");function E8({value:e,wrapper:r}){return Pt({value:jh({value:e,suffix:r}),prefix:r})}i(E8,"wrapString");function Gt(){function e(r){return class extends CustomEvent{static{i(this,"TypedEventConstructor")}static type=r;constructor(n){super(r,n)}}}return i(e,"defineEventTypeString"),e}i(Gt,"defineTypedCustomEvent");function xd(e,r){const t=r??Event;return class extends t{static{i(this,"TypedEventConstructor")}static type=e;constructor(o){super(e,o)}}}i(xd,"defineTypedEvent$1");class A8{static{i(this,"TypedListenTarget")}listeners={};universalListeners=new Map;getListenerCount(){return is(this.listeners).map(t=>t.size||0).reduce((t,n)=>t+n,0)+this.universalListeners.size}listenToAll(r,t={}){const n=i(()=>this.universalListeners.delete(r)||!1,"removeListener");function o(a,s){t.once&&n(),r(a,s)}return i(o,"wrappedCallback"),this.universalListeners.set(r,{listener:o,removeListener:n}),n}removeUniversalListener(r){return!!this.universalListeners.get(r)?.removeListener()}listen(r,t,n={}){const o=M.isString(r)?r:r.type,a=i(()=>this.listeners[o]?.delete(t)||!1,"removeListener");function s(l,u){n.once&&a(),t(l,u)}return i(s,"wrappedCallback"),ma(this.listeners,o,()=>new Map).set(t,{listener:s,removeListener:a}),a}removeListener(r,t){const n=M.isString(r)?r:r.type,o=this.listeners[n];if(!o)return!1;const a=o.get(t);return a?a.removeListener():!1}dispatch(r){const t=this.listeners[r.type];r.target==null&&Object.defineProperty(r,"target",{writable:!1,value:this});const n=t?.size||0;return t?.forEach(o=>{o.listener(r,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(r,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const t=is(this.listeners).reduce((n,o)=>{const a=o.size||0;return o.clear(),n+a},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),t}destroy(){this.removeAllListeners()}}class mu extends A8{static{i(this,"ListenTarget")}}function ao(e,r,t,n){return e.addEventListener(r,t,n),()=>e.removeEventListener(r,t,n)}i(ao,"listenTo");function Ll(e,r,t){return ao(globalThis,e,r,t)}i(Ll,"listenToGlobal");function _h(e,r){return jl(e.title),e.parent?[..._h(e.parent),jl(e.parent.title)].concat([]):[]}i(_h,"listUrlBreadcrumbs");function jl(e){return Gw(e).toLowerCase().replaceAll(/\s/g,"-")}i(jl,"titleToUrlBreadcrumb");function F8({searchFor:e,searchIn:r}){return e.every((t,n)=>r[n]===t)}i(F8,"doBreadcrumbsStartWith");const S8=/[/?#&=]/;function Zw(e){const r=e.match(S8);return e.trim()?jl(e)?r?new Error(`Book page title has invalid character '${r[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}i(Zw,"getPageTitleError");const M8={[ct.ElementExample]:()=>[],[ct.Page]:e=>[Zw(e.title),...MD(e.controls,e.title)].filter(M.isTruthy),[ct.Root]:()=>[]},Nc="_isBookTreeNode",Yw=new Map;function T8(e){return Yw.get(e)}i(T8,"getTreeFromCache");function P8(e,r){TD(Yw,e,()=>r)}i(P8,"addTreeToCache");function Ja(e,r){return Jw(e)&&e.entry.entryType===r}i(Ja,"isBookTreeNode");function Jw(e){return!!(M.hasKeys(e,[Nc,"entry"])&&e[Nc])}i(Jw,"isAnyBookTreeNode");function I8(){return{[Nc]:!0,entry:{entryType:ct.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}i(I8,"createEmptyBookTreeRoot");function N8({entries:e,debug:r}){const t=T8(e);if(t)return t;const n=I8();e.forEach(s=>zh({tree:n,newEntry:s,debug:r,manuallyAdded:!0}));const o=Xw(n),a={tree:n,flattenedNodes:o};return P8(e,a),r&&console.info("element-book tree:",n),a}i(N8,"createBookTreeFromEntries");function B8(e,r,t){if(!r.parent)return e;const n=Eg(r,e);if(n)return n;t&&console.info(`parent of ${r.title} not found in tree; adding it now.`),zh({tree:e,newEntry:r.parent,debug:t,manuallyAdded:!1});const o=Eg(r,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${_h(r).join(" > ")}`);return o}i(B8,"getOrAddImmediateParent");function zh({tree:e,newEntry:r,debug:t,manuallyAdded:n}){const o=M8[r.entryType](r);r.errors.push(...o);const a=B8(e,r,t),s=jl(r.title),l=a.children[s];if(l){if(n){if(l.manuallyAdded){l.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}l.manuallyAdded=!0}return}const u={[Nc]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:r,manuallyAdded:n};a.children[s]=u,FD(r,ct.Page)&&Object.values(r.elementExamples).length&&Object.values(r.elementExamples).forEach(f=>zh({tree:e,newEntry:f,debug:t,manuallyAdded:n}))}i(zh,"addEntryToTree");function Eg(e,r){const t=Jw(e)?e.fullUrlBreadcrumbs.slice(0,-1):_h(e);return t.length?t.reduce((o,a)=>{if(o)return o.children[a]},r):void 0}i(Eg,"traverseToImmediateParent");function Xw(e){const t=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Xw(o));return[e,...t].flat()}i(Xw,"flattenTree");function qh(e,r){return Vh(e,["",...r],void 0)}i(qh,"traverseControls");function Vh(e,r,t){const n=r.slice(1),o=n[0];!o&&t&&(e.controls=t);const a=e.children[o||""],s=a&&Vh(a,n,t);return{...e.controls,...s}}i(Vh,"traverseAndInsertNewControls");function O8(e,r,t){const n={...e};return Vh(n,["",...r],t),n}i(O8,"createNewControls");function Qw(e,r){const t=r?.controls||(Ja(e,ct.Page)?qe(e.entry.controls,(o,a)=>a.initValue):{});return{children:qe(e.children,(o,a)=>Qw(a,r?.children?.[a.urlBreadcrumb])),controls:t}}i(Qw,"updateTreeControls");function xe(e){const r={...e,entryType:ct.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},t=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:r.useVerticalExamples,entryType:ct.ElementExample,parent:r,descriptionParagraphs:n.descriptionParagraphs??[],errors:[t.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),Zw(n.title)].filter(M.isTruthy)};t.add(n.title),r.elementExamples[jl(o.title)]=o}}),r}i(xe,"defineBookPage");var _t;(function(e){e.Search="search",e.Book="book"})(_t||(_t={}));function e5(e){return e[0]===_t.Book?"":e[1]?decodeURIComponent(e[1]):""}i(e5,"extractSearchQuery");const as={hash:void 0,paths:[_t.Book],search:void 0};class Bc{static{i(this,"CssPropertyRegistry")}static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const r=Bc.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;r&&(globalThis.CSS.registerProperty=t=>(r5.registry.set(t.name,t),r(t)))}canRegisterCssProperty(r){return Bc.cssPropertyDefinitionSupported&&!this.registry.has(r)}registerProperty(r){if(!this.canRegisterCssProperty(r.name))return!1;try{return globalThis.CSS.registerProperty(r),!0}catch(t){throw ha(t,`Failed to define CSS var: ${x(r,4)}

`)}}}const r5=new Bc;const bc=globalThis,Wh=bc.ShadowRoot&&(bc.ShadyCSS===void 0||bc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kh=Symbol(),Gb=new WeakMap;let ei=class{static{i(this,"n")}constructor(r,t,n){if(this._$cssResult$=!0,n!==Kh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=t}get styleSheet(){let r=this.o;const t=this.t;if(Wh&&r===void 0){const n=t!==void 0&&t.length===1;n&&(r=Gb.get(t)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),n&&Gb.set(t,r))}return r}toString(){return this.cssText}};const Oe=i(e=>new ei(typeof e=="string"?e:e+"",void 0,Kh),"r$3"),t5=i((e,...r)=>{const t=e.length===1?e[0]:r.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new ei(t,e,Kh)},"i$5"),R8=i((e,r)=>{if(Wh)e.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of r){const n=document.createElement("style"),o=bc.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,e.appendChild(n)}},"S$1"),Zb=Wh?e=>e:e=>e instanceof CSSStyleSheet?(r=>{let t="";for(const n of r.cssRules)t+=n.cssText;return Oe(t)})(e):e;const{is:L8,defineProperty:j8,getOwnPropertyDescriptor:U8,getOwnPropertyNames:_8,getOwnPropertySymbols:z8,getPrototypeOf:q8}=Object,Dd=globalThis,Yb=Dd.trustedTypes,V8=Yb?Yb.emptyScript:"",W8=Dd.reactiveElementPolyfillSupport,Dl=i((e,r)=>e,"d$2"),Oc={toAttribute(e,r){switch(r){case Boolean:e=e?V8:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,r){let t=e;switch(r){case Boolean:t=e!==null;break;case Number:t=e===null?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch{t=null}}return t}},Hh=i((e,r)=>!L8(e,r),"f$3"),Jb={attribute:!0,type:String,converter:Oc,reflect:!1,useDefault:!1,hasChanged:Hh};Symbol.metadata??=Symbol("metadata"),Dd.litPropertyMetadata??=new WeakMap;let Ua=class extends HTMLElement{static{i(this,"y")}static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,t=Jb){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(r,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(r,n,t);o!==void 0&&j8(this.prototype,r,o)}}static getPropertyDescriptor(r,t,n){const{get:o,set:a}=U8(this.prototype,r)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const l=o?.call(this);a?.call(this,s),this.requestUpdate(r,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Jb}static _$Ei(){if(this.hasOwnProperty(Dl("elementProperties")))return;const r=q8(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Dl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dl("properties"))){const t=this.properties,n=[..._8(t),...z8(t)];for(const o of n)this.createProperty(o,t[o])}const r=this[Symbol.metadata];if(r!==null){const t=litPropertyMetadata.get(r);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const t=[];if(Array.isArray(r)){const n=new Set(r.flat(1/0).reverse());for(const o of n)t.unshift(Zb(o))}else r!==void 0&&t.push(Zb(r));return t}static _$Eu(r,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(r.set(n,this[n]),delete this[n]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return R8(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,t,n){this._$AK(r,n)}_$ET(r,t){const n=this.constructor.elementProperties.get(r),o=this.constructor._$Eu(r,n);if(o!==void 0&&n.reflect===!0){const a=(n.converter?.toAttribute!==void 0?n.converter:Oc).toAttribute(t,n.type);this._$Em=r,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(r,t){const n=this.constructor,o=n._$Eh.get(r);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Oc;this._$Em=o;const l=s.fromAttribute(t,a.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(r,t,n,o=!1,a){if(r!==void 0){const s=this.constructor;if(o===!1&&(a=this[r]),n??=s.getPropertyOptions(r),!((n.hasChanged??Hh)(a,t)||n.useDefault&&n.reflect&&a===this._$Ej?.get(r)&&!this.hasAttribute(s._$Eu(r,n))))return;this.C(r,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,t,{useDefault:n,reflect:o,wrapped:a},s){n&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,s??t??this[r]),a!==!0||s!==void 0)||(this._$AL.has(r)||(this.hasUpdated||n||(t=void 0),this._$AL.set(r,t)),o===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,a]of n){const{wrapped:s}=a,l=this[o];s!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,a,l)}}let r=!1;const t=this._$AL;try{r=this.shouldUpdate(t),r?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw r=!1,this._$EM(),n}r&&this._$AE(t)}willUpdate(r){}_$AE(r){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(r){}firstUpdated(r){}};Ua.elementStyles=[],Ua.shadowRootOptions={mode:"open"},Ua[Dl("elementProperties")]=new Map,Ua[Dl("finalized")]=new Map,W8?.({ReactiveElement:Ua}),(Dd.reactiveElementVersions??=[]).push("2.1.2");const Gh=globalThis,Xb=i(e=>e,"i$3"),Rc=Gh.trustedTypes,Qb=Rc?Rc.createPolicy("lit-html",{createHTML:i(e=>e,"createHTML")}):void 0,n5="$lit$",Qo=`lit$${Math.random().toFixed(9).slice(2)}$`,o5="?"+Qo,K8=`<${o5}>`,na=document,Ul=i(()=>na.createComment(""),"c$3"),_l=i(e=>e===null||typeof e!="object"&&typeof e!="function","a$1"),Zh=Array.isArray,H8=i(e=>Zh(e)||typeof e?.[Symbol.iterator]=="function","d$1"),Jf=`[ 	
\f\r]`,Xs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ev=/-->/g,rv=/>/g,Oi=RegExp(`>|${Jf}(?:([^\\s"'>=/]+)(${Jf}*=${Jf}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tv=/'/g,nv=/"/g,i5=/^(?:script|style|textarea|title)$/i,G8=i(e=>(r,...t)=>({_$litType$:e,strings:r,values:t}),"x"),Z8=G8(1),an=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),ov=new WeakMap,Vi=na.createTreeWalker(na,129);function a5(e,r){if(!Zh(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qb!==void 0?Qb.createHTML(r):r}i(a5,"V");const Y8=i((e,r)=>{const t=e.length-1,n=[];let o,a=r===2?"<svg>":r===3?"<math>":"",s=Xs;for(let l=0;l<t;l++){const u=e[l];let f,g,h=-1,p=0;for(;p<u.length&&(s.lastIndex=p,g=s.exec(u),g!==null);)p=s.lastIndex,s===Xs?g[1]==="!--"?s=ev:g[1]!==void 0?s=rv:g[2]!==void 0?(i5.test(g[2])&&(o=RegExp("</"+g[2],"g")),s=Oi):g[3]!==void 0&&(s=Oi):s===Oi?g[0]===">"?(s=o??Xs,h=-1):g[1]===void 0?h=-2:(h=s.lastIndex-g[2].length,f=g[1],s=g[3]===void 0?Oi:g[3]==='"'?nv:tv):s===nv||s===tv?s=Oi:s===ev||s===rv?s=Xs:(s=Oi,o=void 0);const b=s===Oi&&e[l+1].startsWith("/>")?" ":"";a+=s===Xs?u+K8:h>=0?(n.push(f),u.slice(0,h)+n5+u.slice(h)+Qo+b):u+Qo+(h===-2?l:b)}return[a5(e,a+(e[t]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),n]},"N");class zl{static{i(this,"S")}constructor({strings:r,_$litType$:t},n){let o;this.parts=[];let a=0,s=0;const l=r.length-1,u=this.parts,[f,g]=Y8(r,t);if(this.el=zl.createElement(f,n),Vi.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Vi.nextNode())!==null&&u.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(n5)){const p=g[s++],b=o.getAttribute(h).split(Qo),v=/([.?@])?(.*)/.exec(p);u.push({type:1,index:a,name:v[2],strings:b,ctor:v[1]==="."?X8:v[1]==="?"?Q8:v[1]==="@"?eC:Ed}),o.removeAttribute(h)}else h.startsWith(Qo)&&(u.push({type:6,index:a}),o.removeAttribute(h));if(i5.test(o.tagName)){const h=o.textContent.split(Qo),p=h.length-1;if(p>0){o.textContent=Rc?Rc.emptyScript:"";for(let b=0;b<p;b++)o.append(h[b],Ul()),Vi.nextNode(),u.push({type:2,index:++a});o.append(h[p],Ul())}}}else if(o.nodeType===8)if(o.data===o5)u.push({type:2,index:a});else{let h=-1;for(;(h=o.data.indexOf(Qo,h+1))!==-1;)u.push({type:7,index:a}),h+=Qo.length-1}a++}}static createElement(r,t){const n=na.createElement("template");return n.innerHTML=r,n}}function ss(e,r,t=e,n){if(r===an)return r;let o=n!==void 0?t._$Co?.[n]:t._$Cl;const a=_l(r)?void 0:r._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(e),o._$AT(e,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(r=ss(e,o._$AS(e,r.values),o,n)),r}i(ss,"M$2");class J8{static{i(this,"R")}constructor(r,t){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:t},parts:n}=this._$AD,o=(r?.creationScope??na).importNode(t,!0);Vi.currentNode=o;let a=Vi.nextNode(),s=0,l=0,u=n[0];for(;u!==void 0;){if(s===u.index){let f;u.type===2?f=new Cd(a,a.nextSibling,this,r):u.type===1?f=new u.ctor(a,u.name,u.strings,this,r):u.type===6&&(f=new rC(a,this,r)),this._$AV.push(f),u=n[++l]}s!==u?.index&&(a=Vi.nextNode(),s++)}return Vi.currentNode=na,o}p(r){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(r,n,t),t+=n.strings.length-2):n._$AI(r[t])),t++}}let Cd=class s5{static{i(this,"k")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,t,n,o){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=r,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&r?.nodeType===11&&(r=t.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,t=this){r=ss(this,r,t),_l(r)?r===ee||r==null||r===""?(this._$AH!==ee&&this._$AR(),this._$AH=ee):r!==this._$AH&&r!==an&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):H8(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==ee&&_l(this._$AH)?this._$AA.nextSibling.data=r:this.T(na.createTextNode(r)),this._$AH=r}$(r){const{values:t,_$litType$:n}=r,o=typeof n=="number"?this._$AC(r):(n.el===void 0&&(n.el=zl.createElement(a5(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const a=new J8(o,this),s=a.u(this.options);a.p(t),this.T(s),this._$AH=a}}_$AC(r){let t=ov.get(r.strings);return t===void 0&&ov.set(r.strings,t=new zl(r)),t}k(r){Zh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of r)o===t.length?t.push(n=new s5(this.O(Ul()),this.O(Ul()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(r=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);r!==this._$AB;){const n=Xb(r).nextSibling;Xb(r).remove(),r=n}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}};class Ed{static{i(this,"H")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,t,n,o,a){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=r,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ee}_$AI(r,t=this,n,o){const a=this.strings;let s=!1;if(a===void 0)r=ss(this,r,t,0),s=!_l(r)||r!==this._$AH&&r!==an,s&&(this._$AH=r);else{const l=r;let u,f;for(r=a[0],u=0;u<a.length-1;u++)f=ss(this,l[n+u],t,u),f===an&&(f=this._$AH[u]),s||=!_l(f)||f!==this._$AH[u],f===ee?r=ee:r!==ee&&(r+=(f??"")+a[u+1]),this._$AH[u]=f}s&&!o&&this.j(r)}j(r){r===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class X8 extends Ed{static{i(this,"I")}constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===ee?void 0:r}}class Q8 extends Ed{static{i(this,"L")}constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==ee)}}class eC extends Ed{static{i(this,"z")}constructor(r,t,n,o,a){super(r,t,n,o,a),this.type=5}_$AI(r,t=this){if((r=ss(this,r,t,0)??ee)===an)return;const n=this._$AH,o=r===ee&&n!==ee||r.capture!==n.capture||r.once!==n.once||r.passive!==n.passive,a=r!==ee&&(n===ee||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class rC{static{i(this,"Z")}constructor(r,t,n){this.element=r,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(r){ss(this,r)}}const tC={I:Cd},nC=Gh.litHtmlPolyfillSupport;nC?.(zl,Cd),(Gh.litHtmlVersions??=[]).push("3.3.2");const oC=i((e,r,t)=>{const n=t?.renderBefore??r;let o=n._$litPart$;if(o===void 0){const a=t?.renderBefore??null;n._$litPart$=o=new Cd(r.insertBefore(Ul(),a),a,void 0,t??{})}return o._$AI(e),o},"D");const Yh=globalThis;let Cl=class extends Ua{static{i(this,"i")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=oC(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return an}};Cl._$litElement$=!0,Cl.finalized=!0,Yh.litElementHydrateSupport?.({LitElement:Cl});const iC=Yh.litElementPolyfillSupport;iC?.({LitElement:Cl});(Yh.litElementVersions??=[]).push("4.2.2");function Jh({onElement:e,toValue:r,forCssVar:t}){e.style.setProperty(String(t.name),String(r))}i(Jh,"setCssVarValue");function aC({onElement:e,forCssVar:r,includeCascade:t}){return(t?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(r.name)).trim()}i(aC,"readCssVarValue");var ls;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(ls||(ls={}));var iv;(function(e){e.Space="+",e.Comma="#"})(iv||(iv={}));function Nt(e){return qe(e,(t,n)=>{sC(t);const o=n,a=M.isObject(o)&&!(o instanceof ei)&&M.lacksKey(o,"name"),s=M.isString(o)||M.isNumber(o)||o instanceof ei?String(o):String(o.default),l=M.isString(o)||M.isNumber(o)||o instanceof ei?String(o):String("initialValue"in o&&o.initialValue||o.default),u=Oe(Pt({value:t.replace(/^-+/,""),prefix:"--"})),f={name:u,value:t5`var(${u}, ${Oe(s)})`,syntax:M.isString(o)||M.isNumber(o)||o instanceof ei?ls.Any:Ag("syntax"in o?o.syntax:void 0),default:s},g=String(f.name);if(!l)throw new Error(`Initial value for CSS var ${g} cannot be empty.`);return a&&r5.registerProperty({inherits:!0,name:g,initialValue:l,syntax:f.syntax})&&globalThis.document?.documentElement&&Jh({forCssVar:f,onElement:globalThis.document.documentElement,toValue:s}),f})}i(Nt,"defineCssVars");function sC(e){try{if(M.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(r){throw new Error(ga("Invalid CSS var name.",r,`Got '${x(e)}'`))}}i(sC,"assertValidCssVarName");function Ag(e){return e?M.isString(e)?e:e.union?e.union.map(r=>Ag(r)).join(" | "):e.list?`${Ag(e.list.values)}${e.list.separator}`:e.raw:ls.Any}i(Ag,"createSyntaxString");const Ie=Nt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),lC={nav:{hover:{background:Ie["element-book-nav-hover-background-color"],foreground:Ie["element-book-nav-hover-foreground-color"]},active:{background:Ie["element-book-nav-active-background-color"],foreground:Ie["element-book-nav-active-foreground-color"]},selected:{background:Ie["element-book-nav-selected-background-color"],foreground:Ie["element-book-nav-selected-foreground-color"]}},accent:{icon:Ie["element-book-accent-icon-color"]},page:{background:Ie["element-book-page-background-color"],backgroundFaint1:Ie["element-book-page-background-faint-level-1-color"],backgroundFaint2:Ie["element-book-page-background-faint-level-2-color"],foreground:Ie["element-book-page-foreground-color"],foregroundFaint1:Ie["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Ie["element-book-page-foreground-faint-level-2-color"]}};function uC(e,r){l5(e,r,lC)}i(uC,"setThemeCssVars");function Fg(e){return M.hasKey(e,"_$cssResult$")}i(Fg,"isCssResult");function av(e){return M.hasKeys(e,["name","value","default"])&&M.isString(e.default)&&Fg(e.name)&&Fg(e.value)}i(av,"isCssVarDefinition");function l5(e,r,t){Object.entries(r).forEach(([n,o])=>{const a=t[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Fg(o)){if(!av(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Jh({forCssVar:a,onElement:e,toValue:String(o)})}else{if(av(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);l5(e,o,a)}})}i(l5,"recursiveSetThemeCssVars");function gl(e,r){let t=e.length,n,o,a=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],t=n.length,a=!0),Array.isArray(r[0])?o=r:(o=r.length>0?r.map(g=>[g]):[[]],s=!0);let l=o[0].length,u=o[0].map((g,h)=>o.map(p=>p[h])),f=n.map(g=>u.map(h=>{let p=0;if(!Array.isArray(g)){for(let b of h)p+=g*b;return p}for(let b=0;b<g.length;b++)p+=g[b]*(h[b]||0);return p}));return t===1&&a&&(f=f[0]),l===1&&s?t===1&&a?f[0]:f.map(g=>g[0]):f}i(gl,"multiplyMatrices");function Xf(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]}i(Xf,"dot3");function xr(e,r,t=[0,0,0]){const n=Xf(e,r[0]),o=Xf(e,r[1]),a=Xf(e,r[2]);return t[0]=n,t[1]=o,t[2]=a,t}i(xr,"multiply_v3_m3x3");function Fs(e){return ai(e)==="string"}i(Fs,"isString");function ai(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}i(ai,"type");function Xh(e,{precision:r=16,unit:t}){return Be(e)?"none":(e=+Qh(e,r),e+(t??""))}i(Xh,"serializeNumber");function Be(e){return e===null}i(Be,"isNone");function Tr(e){return Be(e)?0:e}i(Tr,"skipNone");function Qh(e,r){if(e===0)return 0;let t=~~e,n=0;t&&r&&(n=~~Math.log10(Math.abs(t))+1);const o=10**(r-n);return Math.floor(e*o+.5)/o}i(Qh,"toPrecision");function ql(e,r,t){return isNaN(e)?r:isNaN(r)?e:e+(r-e)*t}i(ql,"interpolate");function u5(e,r,t){return(t-e)/(r-e)}i(u5,"interpolateInv");function Sg(e,r,t){return!e||!r||e===r||e[0]===r[0]&&e[1]===r[1]||isNaN(t)||t===null?t:ql(r[0],r[1],u5(e[0],e[1],t))}i(Sg,"mapRange");function Ad(e,r,t){return Math.max(Math.min(t,r),e)}i(Ad,"clamp$1");function Fd(e,r){return Math.sign(e)===Math.sign(r)?e:-e}i(Fd,"copySign");function Pr(e,r){return Fd(Math.abs(e)**r,e)}i(Pr,"spow");function ep(e,r){return r===0?0:e/r}i(ep,"zdiv");function c5(e,r,t=0,n=e.length){for(;t<n;){const o=t+n>>1;e[o]<r?t=o+1:n=o}return t}i(c5,"bisectLeft");function us(e,r){if(e instanceof r)return!0;const t=r.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===t)return!0;if(!o||o==="Object")return!1;e=n}return!1}i(us,"isInstance");var cC=Object.freeze({__proto__:null,bisectLeft:c5,clamp:Ad,copySign:Fd,interpolate:ql,interpolateInv:u5,isInstance:us,isNone:Be,isString:Fs,mapRange:Sg,multiplyMatrices:gl,multiply_v3_m3x3:xr,serializeNumber:Xh,skipNone:Tr,spow:Pr,toPrecision:Qh,type:ai,zdiv:ep});class dC{static{i(this,"Hooks")}add(r,t,n){if(typeof arguments[0]!="string"){for(var r in arguments[0])this.add(r,arguments[0][r],arguments[1]);return}(Array.isArray(r)?r:[r]).forEach(function(o){this[o]=this[o]||[],t&&this[o][n?"unshift":"push"](t)},this)}run(r,t){this[r]=this[r]||[],this[r].forEach(function(n){n.call(t&&t.context?t.context:t,t)})}}const gi=new dC;var sn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:i(function(r){this.verbose&&globalThis?.console?.warn?.(r)},"warn")};let sv=class{static{i(this,"Type")}type;coordMeta;coordRange;range;constructor(r,t){if(typeof r=="object"&&(this.coordMeta=r),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof r=="string"){let n=r.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${r} as a type definition.`);this.type=n.groups.type;let{min:o,max:a}=n.groups;(o||a)&&(this.range=[+o,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(r){if(this.type==="<angle>")return r;let t=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),Sg(t,n,r)}serialize(r,t){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return r=Sg(this.coordRange,n,r),Xh(r,{unit:o,precision:t})}toString(){let r=this.type;if(this.range){let[t="",n=""]=this.range;r+=`[${t},${n}]`}return r}percentageRange(r=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*r,t[1]*r]}static get(r,t){return us(r,this)?r:new this(r,t)}};const Qf=Symbol("instance");class Lc{static{i(this,"Format")}type;name;spaceCoords;coords;id;alpha;constructor(r,t=r.space){r[Qf]=this,this.type="function",this.name="color",Object.assign(this,r),this.space=t,this.type!=="custom"&&(this.spaceCoords=Object.values(t.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let a=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>sv.get(s,a))}))}serializeCoords(r,t,n){return n=r.map((o,a)=>sv.get(n?.[a]??this.coords[a][0],this.spaceCoords[a])),r.map((o,a)=>n[a].serialize(o,t))}coerceCoords(r,t){return Object.entries(this.space.coords).map(([n,o],a)=>{let s=r[a];if(Be(s)||isNaN(s))return s;let l=t[a],u=this.coords[a].find(f=>f.type==l);if(!u){let f=o.name||n;throw new TypeError(`${l??s?.raw??s} not allowed for ${f} in ${this.name}()`)}return s=u.resolve(s),u.range&&(t[a]=u.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(r){return null}static get(r,...t){return!r||us(r,this)?r:r[Qf]?r[Qf]:new Lc(r,...t)}}const Tt={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Mg(e){return Array.isArray(e)?e:Tt[e]}i(Mg,"getWhite");function jc(e,r,t,n={}){if(e=Mg(e),r=Mg(r),!e||!r)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!r?"/":""}${r?"":"to"}`);if(e===r)return t;let o={W1:e,W2:r,XYZ:t,options:n};if(gi.run("chromatic-adaptation-start",o),o.M||(o.W1===Tt.D65&&o.W2===Tt.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===Tt.D50&&o.W2===Tt.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),gi.run("chromatic-adaptation-end",o),o.M)return xr(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}i(jc,"adapt$2");function d5(e,r){let t={str:String(e)?.trim(),options:r};if(gi.run("parse-start",t),t.color)return t.color;t.parsed=gC(t.str);let n,o=t.options?t.options.parseMeta??t.options.meta:null;if(t.parsed){let a=t.parsed.name,s,l,u=t.parsed.args,f=u.map((p,b)=>t.parsed.argMeta[b]?.type);if(a==="color"){let p=u.shift();f.shift();let b=p.startsWith("--")?p.substring(2):`--${p}`,v=[p,b];if(s=Y.findFormat({name:a,id:v,type:"function"}),!s){let $,C=p in Y.registry?p:b;if(C in Y.registry){let E=Y.registry[C].formats?.color?.id;E&&($=`Did you mean ${e.replace("color("+p,"color("+E)}?`)}throw new TypeError(`Cannot parse ${t.str}. `+($??"Missing a plugin?"))}l=s.space,s.id.startsWith("--")&&!p.startsWith("--")&&sn.warn(`${l.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${p}).`),p.startsWith("--")&&!s.id.startsWith("--")&&sn.warn(`${l.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${p}).`)}else s=Y.findFormat({name:a,type:"function"}),l=s.space;o&&Object.assign(o,{format:s,formatId:s.name,types:f,commas:t.parsed.commas});let g=1;t.parsed.lastAlpha&&(g=t.parsed.args.pop(),o&&(o.alphaType=f.pop()));let h=s.coords.length;if(u.length!==h)throw new TypeError(`Expected ${h} coordinates for ${l.id} in ${t.str}), got ${u.length}`);u=s.coerceCoords(u,f),n={spaceId:l.id,coords:u,alpha:g}}else e:for(let a of Y.all)for(let s in a.formats){let l=a.formats[s];if(l.type!=="custom"||l.test&&!l.test(t.str))continue;let u=a.getFormat(l),f=u.parse(t.str);if(f){o&&Object.assign(o,{format:u,formatId:s}),n=f;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=Be(n.alpha)?n.alpha:n.alpha===void 0?1:Ad(0,n.alpha,1),n}i(d5,"parse$1");const f5={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Uc={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(f5).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function fC(e){let r={},t=e.match(Uc.unitValue)?.[0],n=r.raw=e;return t?(r.type=t==="%"?"<percentage>":"<angle>",r.unit=t,r.unitless=Number(n.slice(0,-t.length)),n=r.unitless*f5[t]):Uc.number.test(n)?(n=Number(n),r.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,r.type="<number>"):r.type="<ident>",{value:n,meta:r}}i(fC,"parseArgument");function gC(e){if(!e)return;e=e.trim();let r=e.match(Uc.function);if(r){let t=[],n=[],o=!1,a=r[1].toLowerCase(),s=r[2].replace(Uc.singleArgument,(l,u)=>{let{value:f,meta:g}=fC(u);return(l.startsWith("/")||a!=="color"&&t.length===3)&&(o=!0),t.push(f),n.push(g),""});return{name:a,args:t,argMeta:n,lastAlpha:o,commas:s.includes(","),rawName:r[1],rawArgs:r[2]}}}i(gC,"parseFunction");function ue(e,r){if(Array.isArray(e))return e.map(n=>ue(n,r));if(!e)throw new TypeError("Empty color reference");Fs(e)&&(e=d5(e,r));let t=e.space||e.spaceId;return typeof t=="string"&&(e.space=Y.get(t)),e.alpha===void 0&&(e.alpha=1),e}i(ue,"getColor");const hC=75e-6;class Y{static{i(this,"ColorSpace")}constructor(r){this.id=r.id,this.name=r.name,this.base=r.base?Y.get(r.base):null,this.aliases=r.aliases,this.base&&(this.fromBase=r.fromBase,this.toBase=r.toBase);let t=r.coords??this.base.coords;for(let o in t)"name"in t[o]||(t[o].name=o);this.coords=t;let n=r.white??this.base.white??"D65";this.white=Mg(n),this.formats=r.formats??{};for(let o in this.formats){let a=this.formats[o];a.type||="function",a.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:r.cssId||this.id}),r.gamutSpace?this.gamutSpace=r.gamutSpace==="self"?this:Y.get(r.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,a)=>!0),this.referred=r.referred,Object.defineProperty(this,"path",{value:pC(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),gi.run("colorspace-init-end",this)}inGamut(r,{epsilon:t=hC}={}){if(!this.equals(this.gamutSpace))return r=this.to(this.gamutSpace,r),this.gamutSpace.inGamut(r,{epsilon:t});let n=Object.values(this.coords);return r.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Be(o))return!0;let[l,u]=s.range;return(l===void 0||o>=l-t)&&(u===void 0||o<=u+t)}return!0})}get isUnbounded(){return Object.values(this.coords).every(r=>!("range"in r))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let r in this.coords)if(this.coords[r].type==="angle")return!0;return!1}getFormat(r){if(!r)return null;r==="default"?r=Object.values(this.formats)[0]:typeof r=="string"&&(r=this.formats[r]);let t=Lc.get(r,this);return t!==r&&r.name in this.formats&&(this.formats[r.name]=t),t}equals(r){return r?this===r||this.id===r||this.id===r.id:!1}to(r,t){if(arguments.length===1){const l=ue(r);[r,t]=[l.space,l.coords]}if(r=Y.get(r),this.equals(r))return t;t=t.map(l=>Be(l)?0:l);let n=this.path,o=r.path,a,s;for(let l=0;l<n.length&&n[l].equals(o[l]);l++)a=n[l],s=l;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${r}: no connection space was found`);for(let l=n.length-1;l>s;l--)t=n[l].toBase(t);for(let l=s+1;l<o.length;l++)t=o[l].fromBase(t);return t}from(r,t){if(arguments.length===1){const n=ue(r);[r,t]=[n.space,n.coords]}return r=Y.get(r),r.to(this,t)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let r=[];for(let t in this.coords){let n=this.coords[t],o=n.range||n.refRange;r.push(o?.min??0)}return r}static registry={};static get all(){return[...new Set(Object.values(Y.registry))]}static register(r,t){if(arguments.length===1&&(t=arguments[0],r=t.id),t=this.get(t),this.registry[r]&&this.registry[r]!==t)throw new Error(`Duplicate color space registration: '${r}'`);if(this.registry[r]=t,arguments.length===1&&t.aliases)for(let n of t.aliases)this.register(n,t);return t}static get(r,...t){if(!r||us(r,this))return r;if(ai(r)==="string"){let o=Y.registry[r.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${r}"`);return o}if(t.length)return Y.get(...t);throw new TypeError(`${r} is not a valid color space`)}static findFormat(r,t=Y.all){if(!r)return null;typeof r=="string"&&(r={name:r});for(let n of t)for(let[o,a]of Object.entries(n.formats)){a.name??=o,a.type??="function";let s=(!r.name||a.name===r.name)&&(!r.type||a.type===r.type);if(r.id){let l=a.ids||[a.id],u=Array.isArray(r.id)?r.id:[r.id];s&&=u.some(f=>l.includes(f))}if(s){let l=Lc.get(a,n);return l!==a&&(n.formats[a.name]=l),l}}return null}static resolveCoord(r,t){let n=ai(r),o,a;if(n==="string"?r.includes(".")?[o,a]=r.split("."):[o,a]=[,r]:Array.isArray(r)?[o,a]=r:(o=r.space,a=r.coordId),o=Y.get(o),o||(o=t),!o)throw new TypeError(`Cannot resolve coordinate reference ${r}: No color space specified and relative references are not allowed here`);if(n=ai(a),n==="number"||n==="string"&&a>=0){let u=Object.entries(o.coords)[a];if(u)return{space:o,id:u[0],index:a,...u[1]}}o=Y.get(o);let s=a.toLowerCase(),l=0;for(let u in o.coords){let f=o.coords[u];if(u.toLowerCase()===s||f.name?.toLowerCase()===s)return{space:o,id:u,index:l,...f};l++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function pC(e){let r=[e];for(let t=e;t=t.base;)r.push(t);return r}i(pC,"getPath");var dt=new Y({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Dt extends Y{static{i(this,"RGBColorSpace")}constructor(r){r.coords||(r.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),r.base||(r.base=dt),r.toXYZ_M&&r.fromXYZ_M&&(r.toBase??=t=>{let n=xr(t,r.toXYZ_M);return this.white!==this.base.white&&(n=jc(this.white,this.base.white,n)),n},r.fromBase??=t=>(t=jc(this.base.white,this.white,t),xr(t,r.fromXYZ_M))),r.referred??="display",super(r)}}function g5(e,r={}){if(Array.isArray(e))return e.map(u=>g5(u,r));let{cssProperty:t="background-color",element:n,...o}=r,a=null;try{return ue(e,o)}catch(u){a=u}let{CSS:s,getComputedStyle:l}=globalThis;if(Fs(e)&&n&&s&&l&&s.supports(t,e)){let u=n.style[t];e!==u&&(n.style[t]=e);let f=l(n).getPropertyValue(t);if(e!==u&&(n.style[t]=u),f!==e)try{return ue(f,o)}catch(g){a=g}else a={message:"Color value is a valid CSS color, but it could not be resolved :("}}return r.errorMeta&&(r.errorMeta.error=a),null}i(g5,"tryColor");function bu(e,r){e=ue(e);let t=Y.get(r,r?.space),n=r?.precision,o;return!t||e.space.equals(t)?o=e.coords.slice():o=t.from(e),n===void 0?o:o.map(a=>Qh(a,n))}i(bu,"getAll");function rn(e,r){if(e=ue(e),r==="alpha")return e.alpha??1;let{space:t,index:n}=Y.resolveCoord(r,e.space);return bu(e,t)[n]}i(rn,"get");function rp(e,r,t,n){return e=ue(e),Array.isArray(r)&&([r,t,n]=[e.space,r,t]),r=Y.get(r),e.coords=r===e.space?t.slice():r.to(e.space,t),n!==void 0&&(e.alpha=n),e}i(rp,"setAll");rp.returns="color";function No(e,r,t){if(e=ue(e),arguments.length===2&&ai(arguments[1])==="object"){let n=arguments[1];for(let o in n)No(e,o,n[o])}else if(typeof t=="function"&&(t=t(rn(e,r))),r==="alpha")e.alpha=t;else{let{space:n,index:o}=Y.resolveCoord(r,e.space),a=bu(e,n);a[o]=t,rp(e,n,a)}return e}i(No,"set");No.returns="color";var tp=new Y({id:"xyz-d50",name:"XYZ D50",white:"D50",base:dt,fromBase:i(e=>jc(dt.white,"D50",e),"fromBase"),toBase:i(e=>jc("D50",dt.white,e),"toBase")});const mC=216/24389,lv=24/116,Ku=24389/27;let e0=Tt.D50;var tn=new Y({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:e0,base:tp,fromBase(e){let t=e.map((s,l)=>s/e0[l]).map(s=>s>mC?Math.cbrt(s):(Ku*s+16)/116),n=116*t[1]-16,o=500*(t[0]-t[1]),a=200*(t[1]-t[2]);return[n,o,a]},toBase(e){let[r,t,n]=e,o=[];return o[1]=(r+16)/116,o[0]=t/500+o[1],o[2]=o[1]-n/200,[o[0]>lv?Math.pow(o[0],3):(116*o[0]-16)/Ku,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ku,o[2]>lv?Math.pow(o[2],3):(116*o[2]-16)/Ku].map((s,l)=>s*e0[l])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Fn(e){return typeof e!="number"?e:(e%360+360)%360}i(Fn,"constrain");function h5(e,r){let[t,n]=r,o=Be(t),a=Be(n);if(o&&a)return[t,n];if(o?t=n:a&&(n=t),e==="raw")return r;t=Fn(t),n=Fn(n);let s=n-t;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(t+=360):e==="longer"?-180<s&&s<180&&(s>0?t+=360:n+=360):e==="shorter"&&(s>180?t+=360:s<-180&&(n+=360)),[t,n]}i(h5,"adjust");var ln=new Y({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:tn,fromBase(e){if(this.ε===void 0){let l=Object.values(this.base.coords)[1].refRange,u=l[1]-l[0];this.ε=u/1e5}let[r,t,n]=e,o=Math.abs(t)<this.ε&&Math.abs(n)<this.ε,a=o?null:Fn(Math.atan2(n,t)*180/Math.PI),s=o?0:Math.sqrt(t**2+n**2);return[r,s,a]},toBase(e){let[r,t,n]=e,o=null,a=null;return Be(n)||(t=t<0?0:t,o=t*Math.cos(n*Math.PI/180),a=t*Math.sin(n*Math.PI/180)),[r,o,a]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const uv=25**7,_c=Math.PI,cv=180/_c,Na=_c/180;function dv(e){const r=e*e;return r*r*r*e}i(dv,"pow7");function p5(e,r,{kL:t=1,kC:n=1,kH:o=1}={}){[e,r]=ue([e,r]);let[a,s,l]=tn.from(e),u=ln.from(tn,[a,s,l])[1],[f,g,h]=tn.from(r),p=ln.from(tn,[f,g,h])[1];u<0&&(u=0),p<0&&(p=0);let b=(u+p)/2,v=dv(b),$=.5*(1-Math.sqrt(v/(v+uv))),C=(1+$)*s,E=(1+$)*g,A=Math.sqrt(C**2+l**2),N=Math.sqrt(E**2+h**2),_=C===0&&l===0?0:Math.atan2(l,C),H=E===0&&h===0?0:Math.atan2(h,E);_<0&&(_+=2*_c),H<0&&(H+=2*_c),_*=cv,H*=cv;let ce=f-a,Te=N-A,be=H-_,Se=_+H,or=Math.abs(be),ir;A*N===0?ir=0:or<=180?ir=be:be>180?ir=be-360:be<-180?ir=be+360:sn.warn("the unthinkable has happened");let jr=2*Math.sqrt(N*A)*Math.sin(ir*Na/2),Yt=(a+f)/2,Et=(A+N)/2,fo=dv(Et),Jr;A*N===0?Jr=Se:or<=180?Jr=Se/2:Se<360?Jr=(Se+360)/2:Jr=(Se-360)/2;let Xn=(Yt-50)**2,go=1+.015*Xn/Math.sqrt(20+Xn),mn=1+.045*Et,at=1;at-=.17*Math.cos((Jr-30)*Na),at+=.24*Math.cos(2*Jr*Na),at+=.32*Math.cos((3*Jr+6)*Na),at-=.2*Math.cos((4*Jr-63)*Na);let He=1+.015*Et*at,Ur=30*Math.exp(-1*((Jr-275)/25)**2),bn=2*Math.sqrt(fo/(fo+uv)),vt=-1*Math.sin(2*Ur*Na)*bn,vn=(ce/(t*go))**2;return vn+=(Te/(n*mn))**2,vn+=(jr/(o*He))**2,vn+=vt*(Te/(n*mn))*(jr/(o*He)),Math.sqrt(vn)}i(p5,"deltaE2000");const bC=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],vC=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],yC=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],si=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var qn=new Y({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:dt,fromBase(e){let r=xr(e,bC);return r[0]=Math.cbrt(r[0]),r[1]=Math.cbrt(r[1]),r[2]=Math.cbrt(r[2]),xr(r,yC,r)},toBase(e){let r=xr(e,si);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,xr(r,vC,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Tg(e,r){[e,r]=ue([e,r]);let[t,n,o]=qn.from(e),[a,s,l]=qn.from(r),u=t-a,f=n-s,g=o-l;return Math.sqrt(u**2+f**2+g**2)}i(Tg,"deltaEOK");const wC=75e-6;function Zi(e,r,{epsilon:t=wC}={}){e=ue(e),r||(r=e.space),r=Y.get(r);let n=e.coords;return r!==e.space&&(n=r.from(e)),r.inGamut(n,{epsilon:t})}i(Zi,"inGamut$1");function cs(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}i(cs,"clone");function m5(e,r,t="lab"){t=Y.get(t);let n=t.from(e),o=t.from(r);return Math.sqrt(n.reduce((a,s,l)=>{let u=o[l];return Be(s)||Be(u)?a:a+(u-s)**2},0))}i(m5,"distance");function kC(e,r){return m5(e,r,"lab")}i(kC,"deltaE76");const $C=Math.PI,fv=$C/180;function xC(e,r,{l:t=2,c:n=1}={}){[e,r]=ue([e,r]);let[o,a,s]=tn.from(e),[,l,u]=ln.from(tn,[o,a,s]),[f,g,h]=tn.from(r),p=ln.from(tn,[f,g,h])[1];l<0&&(l=0),p<0&&(p=0);let b=o-f,v=l-p,$=a-g,C=s-h,E=$**2+C**2-v**2,A=.511;o>=16&&(A=.040975*o/(1+.01765*o));let N=.0638*l/(1+.0131*l)+.638,_;Be(u)&&(u=0),u>=164&&u<=345?_=.56+Math.abs(.2*Math.cos((u+168)*fv)):_=.36+Math.abs(.4*Math.cos((u+35)*fv));let H=Math.pow(l,4),ce=Math.sqrt(H/(H+1900)),Te=N*(ce*_+1-ce),be=(b/(t*A))**2;return be+=(v/(n*N))**2,be+=E/Te**2,Math.sqrt(be)}i(xC,"deltaECMC");const gv=203;var np=new Y({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:dt,fromBase(e){return e.map(r=>r*gv)},toBase(e){return e.map(r=>r/gv)}});const Hu=1.15,Gu=.66,hv=2610/2**14,DC=2**14/2610,pv=3424/2**12,mv=2413/2**7,bv=2392/2**7,CC=1.7*2523/2**5,vv=2**5/(1.7*2523),Zu=-.56,r0=16295499532821565e-27,EC=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],AC=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],FC=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],SC=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var b5=new Y({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:np,fromBase(e){let[r,t,n]=e,o=Hu*r-(Hu-1)*n,a=Gu*t-(Gu-1)*r,l=xr([o,a,n],EC).map(function(p){let b=pv+mv*Pr(p/1e4,hv),v=1+bv*Pr(p/1e4,hv);return Pr(b/v,CC)}),[u,f,g]=xr(l,FC);return[(1+Zu)*u/(1+Zu*u)-r0,f,g]},toBase(e){let[r,t,n]=e,o=(r+r0)/(1+Zu-Zu*(r+r0)),s=xr([o,t,n],SC).map(function(p){let b=pv-Pr(p,vv),v=bv*Pr(p,vv)-mv;return 1e4*Pr(b/v,DC)}),[l,u,f]=xr(s,AC),g=(l+(Hu-1)*f)/Hu,h=(u+(Gu-1)*g)/Gu;return[g,h,f]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),Pg=new Y({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:b5,fromBase:ln.fromBase,toBase:ln.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function MC(e,r){[e,r]=ue([e,r]);let[t,n,o]=Pg.from(e),[a,s,l]=Pg.from(r),u=t-a,f=n-s;Be(o)&&Be(l)?(o=0,l=0):Be(o)?o=l:Be(l)&&(l=o);let g=o-l,h=2*Math.sqrt(n*s)*Math.sin(g/2*(Math.PI/180));return Math.sqrt(u**2+f**2+h**2)}i(MC,"deltaEJz");const v5=3424/4096,y5=2413/128,w5=2392/128,yv=2610/16384,TC=2523/32,PC=16384/2610,wv=32/2523,IC=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],NC=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],BC=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],OC=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Ig=new Y({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:np,fromBase(e){let r=xr(e,IC);return RC(r)},toBase(e){let r=LC(e);return xr(r,OC)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function RC(e){let r=e.map(function(t){let n=v5+y5*(t/1e4)**yv,o=1+w5*(t/1e4)**yv;return(n/o)**TC});return xr(r,NC)}i(RC,"LMStoICtCp");function LC(e){return xr(e,BC).map(function(n){let o=Math.max(n**wv-v5,0),a=y5-w5*n**wv;return 1e4*(o/a)**PC})}i(LC,"ICtCptoLMS");function jC(e,r){[e,r]=ue([e,r]);let[t,n,o]=Ig.from(e),[a,s,l]=Ig.from(r);return 720*Math.sqrt((t-a)**2+.25*(n-s)**2+(o-l)**2)}i(jC,"deltaEITP");function UC(e,r){[e,r]=ue([e,r]);let t=2,[n,o,a]=qn.from(e),[s,l,u]=qn.from(r),f=n-s,g=t*(o-l),h=t*(a-u);return Math.sqrt(f**2+g**2+h**2)}i(UC,"deltaEOK2");const _C=Tt.D65,k5=.42,kv=1/k5,t0=2*Math.PI,$5=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],zC=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],qC=[[460,451,288],[460,-891,-261],[460,-220,-6300]],VC={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},ji={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},WC=180/Math.PI,$v=Math.PI/180;function x5(e,r){return e.map(n=>{const o=Pr(r*Math.abs(n)*.01,k5);return 400*Fd(o,n)/(o+27.13)})}i(x5,"adapt$1");function KC(e,r){const t=100/r*27.13**kv;return e.map(n=>{const o=Math.abs(n);return Fd(t*Pr(o/(400-o),kv),n)})}i(KC,"unadapt");function HC(e){let r=Fn(e);r<=ji.h[0]&&(r+=360);const t=c5(ji.h,r)-1,[n,o]=ji.h.slice(t,t+2),[a,s]=ji.e.slice(t,t+2),l=ji.H[t],u=(r-n)/a;return l+100*u/(u+(o-r)/s)}i(HC,"hueQuadrature");function GC(e){let r=(e%400+400)%400;const t=Math.floor(.01*r);r=r%100;const[n,o]=ji.h.slice(t,t+2),[a,s]=ji.e.slice(t,t+2);return Fn((r*(s*n-a*o)-100*n*s)/(r*(s-a)-100*s))}i(GC,"invHueQuadrature");function D5(e,r,t,n,o){const a={};a.discounting=o,a.refWhite=e,a.surround=n;const s=e.map(C=>C*100);a.la=r,a.yb=t;const l=s[1],u=xr(s,$5);let f=VC[a.surround];const g=f[0];a.c=f[1],a.nc=f[2];const p=(1/(5*a.la+1))**4;a.fl=p*a.la+.1*(1-p)*(1-p)*Math.cbrt(5*a.la),a.flRoot=a.fl**.25,a.n=a.yb/l,a.z=1.48+Math.sqrt(a.n),a.nbb=.725*a.n**-.2,a.ncb=a.nbb;const b=Math.max(Math.min(g*(1-1/3.6*Math.exp((-a.la-42)/92)),1),0);a.dRgb=u.map(C=>ql(1,l/C,b)),a.dRgbInv=a.dRgb.map(C=>1/C);const v=u.map((C,E)=>C*a.dRgb[E]),$=x5(v,a.fl);return a.aW=a.nbb*(2*$[0]+$[1]+.05*$[2]),a}i(D5,"environment");const xv=D5(_C,64/Math.PI*.2,20,"average",!1);function Ng(e,r){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let t=0;e.h!==void 0?t=Fn(e.h)*$v:t=GC(e.H)*$v;const n=Math.cos(t),o=Math.sin(t);let a=0;e.J!==void 0?a=Pr(e.J,1/2)*.1:e.Q!==void 0&&(a=.25*r.c*e.Q/((r.aW+4)*r.flRoot));let s=0;e.C!==void 0?s=e.C/a:e.M!==void 0?s=e.M/r.flRoot/a:e.s!==void 0&&(s=4e-4*e.s**2*(r.aW+4)/r.c);const l=Pr(s*Math.pow(1.64-Math.pow(.29,r.n),-.73),10/9),u=.25*(Math.cos(t+2)+3.8),f=r.aW*Pr(a,2/r.c/r.z),g=5e4/13*r.nc*r.ncb*u,h=f/r.nbb,p=23*(h+.305)*ep(l,23*g+l*(11*n+108*o)),b=p*n,v=p*o,$=KC(xr([h,b,v],qC).map(C=>C*1/1403),r.fl);return xr($.map((C,E)=>C*r.dRgbInv[E]),zC).map(C=>C/100)}i(Ng,"fromCam16");function C5(e,r){const t=e.map(N=>N*100),n=x5(xr(t,$5).map((N,_)=>N*r.dRgb[_]),r.fl),o=n[0]+(-12*n[1]+n[2])/11,a=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(a,o)%t0+t0)%t0,l=.25*(Math.cos(s+2)+3.8),u=5e4/13*r.nc*r.ncb*ep(l*Math.sqrt(o**2+a**2),n[0]+n[1]+1.05*n[2]+.305),f=Pr(u,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),g=r.nbb*(2*n[0]+n[1]+.05*n[2]),h=Pr(g/r.aW,.5*r.c*r.z),p=100*Pr(h,2),b=4/r.c*h*(r.aW+4)*r.flRoot,v=f*h,$=v*r.flRoot,C=Fn(s*WC),E=HC(C),A=50*Pr(r.c*f/(r.aW+4),1/2);return{J:p,C:v,h:C,s:A,Q:b,M:$,H:E}}i(C5,"toCam16");var ZC=new Y({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:dt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const r=C5(e,xv),t=Math.abs(r.M)<this.ε;return[r.J,t?0:r.M,t?null:r.h]},toBase(e){return Ng({J:e[0],M:e[1],h:e[2]},xv)}});const YC=Tt.D65,JC=216/24389,E5=24389/27;function XC(e){return 116*(e>JC?Math.cbrt(e):(E5*e+16)/116)-16}i(XC,"toLstar");function Bg(e){return e>8?Math.pow((e+16)/116,3):e/E5}i(Bg,"fromLstar");function QC(e,r){let[t,n,o]=e,a=[],s=0;if(o===0)return[0,0,0];let l=Bg(o);o>0?s=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:s=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const u=2e-12,f=15;let g=0,h=1/0;for(;g<=f;){a=Ng({J:s,C:n,h:t},r);const p=Math.abs(a[1]-l);if(p<h){if(p<=u)return a;h=p}s=s-(a[1]-l)*s/(2*a[1]),g+=1}return Ng({J:s,C:n,h:t},r)}i(QC,"fromHct");function eE(e,r){const t=XC(e[1]);if(t===0)return[0,0,0];const n=C5(e,op);return[Fn(n.h),n.C,t]}i(eE,"toHct");const op=D5(YC,200/Math.PI*Bg(50),Bg(50)*100,"average",!1);var Vl=new Y({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:dt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let r=eE(e);return r[1]<this.ε&&(r[1]=0,r[0]=null),r},toBase(e){return QC(e,op)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const rE=Math.PI/180,Dv=[1,.007,.0228];function Cv(e){e[1]<0&&(e=Vl.fromBase(Vl.toBase(e)));const r=Math.log(Math.max(1+Dv[2]*e[1]*op.flRoot,1))/Dv[2],t=e[0]*rE,n=r*Math.cos(t),o=r*Math.sin(t);return[e[2],n,o]}i(Cv,"convertUcsAb");function tE(e,r){[e,r]=ue([e,r]);let[t,n,o]=Cv(Vl.from(e)),[a,s,l]=Cv(Vl.from(r));return Math.sqrt((t-a)**2+(n-s)**2+(o-l)**2)}i(tE,"deltaEHCT");var ds={deltaE76:kC,deltaECMC:xC,deltaE2000:p5,deltaEJz:MC,deltaEITP:jC,deltaEOK:Tg,deltaEOK2:UC,deltaEHCT:tE};function nE(e){const r=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${r-2}`),1e-6)}i(nE,"calcEpsilon");const Ev={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function hi(e,{method:r=sn.gamut_mapping,space:t=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:a=void 0}={}){if(e=ue(e),Fs(arguments[1])?t=arguments[1]:t||(t=e.space),t=Y.get(t),Zi(e,t,{epsilon:0}))return e;let s;if(r==="css")s=oE(e,{space:t});else{if(r!=="clip"&&!Zi(e,t)){Object.prototype.hasOwnProperty.call(Ev,r)&&({method:r,jnd:o,deltaEMethod:n,blackWhiteClamp:a}=Ev[r]);let l=p5;if(n!==""){for(let f in ds)if("deltae"+n.toLowerCase()===f.toLowerCase()){l=ds[f];break}}o===0&&(o=1e-16);let u=hi(er(e,t),{method:"clip",space:t});if(l(e,u)>o){if(a&&Object.keys(a).length===3){let A=Y.resolveCoord(a.channel),N=rn(er(e,A.space),A.id);if(Be(N)&&(N=0),N>=a.max)return er({space:"xyz-d65",coords:Tt.D65},e.space);if(N<=a.min)return er({space:"xyz-d65",coords:[0,0,0]},e.space)}let f=Y.resolveCoord(r),g=f.space,h=f.id,p=er(e,g);p.coords.forEach((A,N)=>{Be(A)&&(p.coords[N]=0)});let v=(f.range||f.refRange)[0],$=nE(o),C=v,E=rn(p,h);for(;E-C>$;){let A=cs(p);A=hi(A,{space:t,method:"clip"}),l(p,A)-o<$?C=rn(p,h):E=rn(p,h),No(p,h,(C+E)/2)}s=er(p,t)}else s=u}else s=er(e,t);if(r==="clip"||!Zi(s,t,{epsilon:0})){let l=Object.values(t.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,f)=>{let[g,h]=l[f];return g!==void 0&&(u=Math.max(g,u)),h!==void 0&&(u=Math.min(u,h)),u})}}return t!==e.space&&(s=er(s,e.space)),e.coords=s.coords,e}i(hi,"toGamut");hi.returns="color";const Av={WHITE:{space:qn,coords:[1,0,0],alpha:1},BLACK:{space:qn,coords:[0,0,0],alpha:1}};function oE(e,{space:r}={}){e=ue(e),r||(r=e.space),r=Y.get(r);const o=Y.get("oklch");if(r.isUnbounded)return er(e,r);const a=er(e,o);let s=a.coords[0];if(s>=1){const v=er(Av.WHITE,r);return v.alpha=e.alpha,er(v,r)}if(s<=0){const v=er(Av.BLACK,r);return v.alpha=e.alpha,er(v,r)}if(Zi(a,r,{epsilon:0}))return er(a,r);function l(v){const $=er(v,r),C=Object.values(r.coords);return $.coords=$.coords.map((E,A)=>{if("range"in C[A]){const[N,_]=C[A].range;return Ad(N,E,_)}return E}),$}i(l,"clip");let u=0,f=a.coords[1],g=!0,h=cs(a),p=l(h),b=Tg(p,h);if(b<.02)return p;for(;f-u>1e-4;){const v=(u+f)/2;if(h.coords[1]=v,g&&Zi(h,r,{epsilon:0}))u=v;else if(p=l(h),b=Tg(p,h),b<.02){if(.02-b<1e-4)break;g=!1,u=v}else f=v}return p}i(oE,"toGamutCSS");function er(e,r,{inGamut:t}={}){e=ue(e),r=Y.get(r);let n=r.from(e),o={space:r,coords:n,alpha:e.alpha};return t&&(o=hi(o,t===!0?void 0:t)),o}i(er,"to");er.returns="color";function El(e,r={}){let{precision:t=sn.precision,format:n,inGamut:o=!0,coords:a,alpha:s,commas:l}=r,u,f=ue(e),g=n,h=f.parseMeta;h&&!n&&(h.format.canSerialize()&&(n=h.format,g=h.formatId),a??=h.types,s??=h.alphaType,l??=h.commas),g&&(n=f.space.getFormat(n)??Y.findFormat(g)),n||(n=f.space.getFormat("default")??Y.DEFAULT_FORMAT,g=n.name),n&&n.space&&n.space!==f.space&&(f=er(f,n.space));let p=f.coords.slice();if(o||=n.toGamut,o&&!Zi(f)&&(p=hi(cs(f),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)u=n.serialize(p,f.alpha,r);else throw new TypeError(`format ${g} can only be used to parse colors, not for serialization`);else{let b=n.name||"color",v=n.serializeCoords(p,t,a);if(b==="color"){let N=n.id||n.ids?.[0]||f.space.cssId||f.space.id;v.unshift(N)}let $=f.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let C=s?.type??"<number>",E=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&$<1,A="";if(l??=n.commas,E){if(t!==null){let N;C==="<percentage>"&&(N="%",$*=100),$=Xh($,{precision:t,unit:N})}A=`${l?",":" /"} ${$}`}u=`${b}(${v.join(l?", ":" ")}${A})`}return u}i(El,"serialize");const iE=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],aE=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Wl=new Dt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:iE,fromXYZ_M:aE}),A5=new Dt({id:"rec2020",name:"REC.2020",base:Wl,toBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return t*Math.pow(n,2.4)})},fromBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return t*Math.pow(n,1/2.4)})}});const sE=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],lE=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var F5=new Dt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:sE,fromXYZ_M:lE});const uE=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Zr=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var S5=new Dt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:uE,fromXYZ_M:Zr}),Fv={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Sv=Array(3).fill("<percentage> | <number>[0, 255]"),Mv=Array(3).fill("<number>[0, 255]");var oa=new Dt({id:"srgb",name:"sRGB",base:S5,fromBase:i(e=>e.map(r=>{let t=r<0?-1:1,n=r*t;return n>.0031308?t*(1.055*n**(1/2.4)-.055):12.92*r}),"fromBase"),toBase:i(e=>e.map(r=>{let t=r<0?-1:1,n=r*t;return n<=.04045?r/12.92:t*((n+.055)/1.055)**2.4}),"toBase"),formats:{rgb:{coords:Sv},rgb_number:{name:"rgb",commas:!0,coords:Mv,alpha:!1},color:{},rgba:{coords:Sv,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Mv},hex:{type:"custom",toGamut:!0,test:i(e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),"test"),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let r=[];return e.replace(/[a-f0-9]{2}/gi,t=>{r.push(parseInt(t,16)/255)}),{spaceId:"srgb",coords:r.slice(0,3),alpha:r.slice(3)[0]}},serialize:i((e,r,{collapse:t=!0,alpha:n}={})=>{(n!==!1&&r<1||n===!0)&&e.push(r),e=e.map(s=>Math.round(s*255));let o=t&&e.every(s=>s%17===0);return"#"+e.map(s=>o?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")},"serialize")},keyword:{type:"custom",test:i(e=>/^[a-z]+$/i.test(e),"test"),parse(e){e=e.toLowerCase();let r={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(r.coords=Fv.black,r.alpha=0):r.coords=Fv[e],r.coords)return r}}}}),M5=new Dt({id:"p3",cssId:"display-p3",name:"P3",base:F5,fromBase:oa.fromBase,toBase:oa.toBase});sn.display_space=oa;let cE;if(typeof CSS<"u"&&CSS.supports)for(let e of[tn,A5,M5]){let r=e.getMinCoords(),n=El({space:e,coords:r,alpha:1});if(CSS.supports("color",n)){sn.display_space=e;break}}function dE(e,{space:r=sn.display_space,...t}={}){e=ue(e);let n=El(e,t);if(typeof CSS>"u"||CSS.supports("color",n)||!sn.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(Be)||Be(e.alpha))&&!(cE??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=cs(e),o.coords=o.coords.map(Tr),o.alpha=Tr(o.alpha),n=El(o,t),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=er(o,r),n=new String(El(o,t)),n.color=o}return n}i(dE,"display");function fE(e,r,{space:t,hue:n="shorter"}={}){e=ue(e),t||=e.space,t=Y.get(t);let o=Object.values(t.coords);[e,r]=[e,r].map(f=>er(f,t));let[a,s]=[e,r].map(f=>f.coords),l=a.map((f,g)=>{let h=o[g],p=s[g];return h.type==="angle"&&([f,p]=h5(n,[f,p])),Tv(f,p)}),u=Tv(e.alpha,r.alpha);return{space:t,coords:l,alpha:u}}i(fE,"deltas");function Tv(e,r){return Be(e)||Be(r)?e===r?null:0:e-r}i(Tv,"subtractCoords");function gE(e,r){return e=ue(e),r=ue(r),e.space===r.space&&e.alpha===r.alpha&&e.coords.every((t,n)=>t===r.coords[n])}i(gE,"equals");function pi(e){return rn(e,[dt,"y"])}i(pi,"getLuminance");function T5(e,r){No(e,[dt,"y"],r)}i(T5,"setLuminance");function hE(e){Object.defineProperty(e.prototype,"luminance",{get(){return pi(this)},set(r){T5(this,r)}})}i(hE,"register$2");var pE=Object.freeze({__proto__:null,getLuminance:pi,register:hE,setLuminance:T5});function mE(e,r){e=ue(e),r=ue(r);let t=Math.max(pi(e),0),n=Math.max(pi(r),0);return n>t&&([t,n]=[n,t]),(t+.05)/(n+.05)}i(mE,"contrastWCAG21");const bE=.56,vE=.57,yE=.62,wE=.65,Pv=.022,kE=1.414,$E=.1,xE=5e-4,DE=1.14,Iv=.027,CE=1.14;function Nv(e){return e>=Pv?e:e+(Pv-e)**kE}i(Nv,"fclamp");function Ba(e){let r=e<0?-1:1,t=Math.abs(e);return r*Math.pow(t,2.4)}i(Ba,"linearize$3");function EE(e,r){r=ue(r),e=ue(e);let t,n,o,a,s,l;r=er(r,"srgb"),[a,s,l]=r.coords.map(b=>Be(b)?0:b);let u=Ba(a)*.2126729+Ba(s)*.7151522+Ba(l)*.072175;e=er(e,"srgb"),[a,s,l]=e.coords.map(b=>Be(b)?0:b);let f=Ba(a)*.2126729+Ba(s)*.7151522+Ba(l)*.072175,g=Nv(u),h=Nv(f),p=h>g;return Math.abs(h-g)<xE?n=0:p?(t=h**bE-g**vE,n=t*DE):(t=h**wE-g**yE,n=t*CE),Math.abs(n)<$E?o=0:n>0?o=n-Iv:o=n+Iv,o*100}i(EE,"contrastAPCA");function AE(e,r){e=ue(e),r=ue(r);let t=Math.max(pi(e),0),n=Math.max(pi(r),0);n>t&&([t,n]=[n,t]);let o=t+n;return o===0?0:(t-n)/o}i(AE,"contrastMichelson");const FE=5e4;function SE(e,r){e=ue(e),r=ue(r);let t=Math.max(pi(e),0),n=Math.max(pi(r),0);return n>t&&([t,n]=[n,t]),n===0?FE:(t-n)/n}i(SE,"contrastWeber");function ME(e,r){e=ue(e),r=ue(r);let t=rn(e,[tn,"l"]),n=rn(r,[tn,"l"]);return Math.abs(t-n)}i(ME,"contrastLstar");const TE=216/24389,Bv=24/116,Yu=24389/27;let n0=Tt.D65;var Og=new Y({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:n0,base:dt,fromBase(e){let t=e.map((n,o)=>n/n0[o]).map(n=>n>TE?Math.cbrt(n):(Yu*n+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let r=[];return r[1]=(e[0]+16)/116,r[0]=e[1]/500+r[1],r[2]=r[1]-e[2]/200,[r[0]>Bv?Math.pow(r[0],3):(116*r[0]-16)/Yu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Yu,r[2]>Bv?Math.pow(r[2],3):(116*r[2]-16)/Yu].map((n,o)=>n*n0[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const o0=Math.pow(5,.5)*.5+.5;function PE(e,r){e=ue(e),r=ue(r);let t=rn(e,[Og,"l"]),n=rn(r,[Og,"l"]),o=Math.abs(Math.pow(t,o0)-Math.pow(n,o0)),a=Math.pow(o,1/o0)*Math.SQRT2-40;return a<7.5?0:a}i(PE,"contrastDeltaPhi");var vc=Object.freeze({__proto__:null,contrastAPCA:EE,contrastDeltaPhi:PE,contrastLstar:ME,contrastMichelson:AE,contrastWCAG21:mE,contrastWeber:SE});function IE(e,r,t){Fs(t)&&(t={algorithm:t});let{algorithm:n,...o}=t||{};if(!n){let a=Object.keys(vc).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=ue(e),r=ue(r);for(let a in vc)if("contrast"+n.toLowerCase()===a.toLowerCase())return vc[a](e,r,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}i(IE,"contrast");function Sd(e){let[r,t,n]=bu(e,dt),o=r+15*t+3*n;return[4*r/o,9*t/o]}i(Sd,"uv");function P5(e){let[r,t,n]=bu(e,dt),o=r+t+n;return[r/o,t/o]}i(P5,"xy");function NE(e){Object.defineProperty(e.prototype,"uv",{get(){return Sd(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return P5(this)}})}i(NE,"register$1");var BE=Object.freeze({__proto__:null,register:NE,uv:Sd,xy:P5});function hl(e,r,t={}){Fs(t)&&(t={method:t});let{method:n=sn.deltaE,...o}=t;for(let a in ds)if("deltae"+n.toLowerCase()===a.toLowerCase())return ds[a](e,r,o);throw new TypeError(`Unknown deltaE method: ${n}`)}i(hl,"deltaE");function I5(e,r=.25){let n=[Y.get("oklch","lch"),"l"];return No(e,n,o=>o*(1+r))}i(I5,"lighten");function N5(e,r=.25){let n=[Y.get("oklch","lch"),"l"];return No(e,n,o=>o*(1-r))}i(N5,"darken");I5.returns="color";N5.returns="color";var OE=Object.freeze({__proto__:null,darken:N5,lighten:I5});function B5(e,r,t,n={}){return[e,r]=[ue(e),ue(r)],ai(t)==="object"&&([t,n]=[.5,t]),vu(e,r,n)(t??.5)}i(B5,"mix");function O5(e,r,t={}){let n;ip(e)&&([n,t]=[e,r],[e,r]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:l=1e3,...u}=t;n||([e,r]=[ue(e),ue(r)],n=vu(e,r,u));let f=hl(e,r),g=o>0?Math.max(s,Math.ceil(f/o)+1):s,h=[];if(l!==void 0&&(g=Math.min(g,l)),g===1)h=[{p:.5,color:n(.5)}];else{let p=1/(g-1);h=Array.from({length:g},(b,v)=>{let $=v*p;return{p:$,color:n($)}})}if(o>0){let p=h.reduce((b,v,$)=>{if($===0)return 0;let C=hl(v.color,h[$-1].color,a);return Math.max(b,C)},0);for(;p>o;){p=0;for(let b=1;b<h.length&&h.length<l;b++){let v=h[b-1],$=h[b],C=($.p+v.p)/2,E=n(C);p=Math.max(p,hl(E,v.color),hl(E,$.color)),h.splice(b,0,{p:C,color:n(C)}),b++}}}return h=h.map(p=>p.color),h}i(O5,"steps");function vu(e,r,t={}){if(ip(e)){let[u,f]=[e,r];return vu(...u.rangeArgs.colors,{...u.rangeArgs.options,...f})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=t;e=ue(e),r=ue(r),e=cs(e),r=cs(r);let l={colors:[e,r],options:t};if(n?n=Y.get(n):n=Y.registry[sn.interpolationSpace]||e.space,o=o?Y.get(o):n,e=er(e,n),r=er(r,n),e=hi(e),r=hi(r),n.coords.h&&n.coords.h.type==="angle"){let u=t.hue=t.hue||"shorter",f=[n,"h"],[g,h]=[rn(e,f),rn(r,f)];Be(g)&&!Be(h)?g=h:Be(h)&&!Be(g)&&(h=g),[g,h]=h5(u,[g,h]),No(e,f,g),No(r,f,h)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),r.coords=r.coords.map(u=>u*r.alpha)),Object.assign(u=>{u=a?a(u):u;let f=e.coords.map((p,b)=>{let v=r.coords[b];return ql(p,v,u)}),g=ql(e.alpha,r.alpha,u),h={space:n,coords:f,alpha:g};return s&&(h.coords=h.coords.map(p=>p/g)),o!==n&&(h=er(h,o)),h},{rangeArgs:l})}i(vu,"range");function ip(e){return ai(e)==="function"&&!!e.rangeArgs}i(ip,"isRange");sn.interpolationSpace="lab";function RE(e){e.defineFunction("mix",B5,{returns:"color"}),e.defineFunction("range",vu,{returns:"function<color>"}),e.defineFunction("steps",O5,{returns:"array<color>"})}i(RE,"register");var LE=Object.freeze({__proto__:null,isRange:ip,mix:B5,range:vu,register:RE,steps:O5}),jE=new Y({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:oa,fromBase:i(e=>{let r=Math.max(...e),t=Math.min(...e),[n,o,a]=e,[s,l,u]=[null,0,(t+r)/2],f=r-t;if(f!==0){switch(l=u===0||u===1?0:(r-u)/Math.min(u,1-u),r){case n:s=(o-a)/f+(o<a?6:0);break;case o:s=(a-n)/f+2;break;case a:s=(n-o)/f+4}s=s*60}return l<0&&(s+=180,l=Math.abs(l)),s>=360&&(s-=360),[s,l*100,u*100]},"fromBase"),toBase:i(e=>{let[r,t,n]=e;r=r%360,r<0&&(r+=360),t/=100,n/=100;function o(a){let s=(a+r/30)%12,l=t*Math.min(n,1-n);return n-l*Math.max(-1,Math.min(s-3,9-s,1))}return i(o,"f"),[o(0),o(8),o(4)]},"toBase"),formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),R5=new Y({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:oa,fromBase(e){let r=Math.max(...e),t=Math.min(...e),[n,o,a]=e,[s,l,u]=[null,0,r],f=r-t;if(f!==0){switch(r){case n:s=(o-a)/f+(o<a?6:0);break;case o:s=(a-n)/f+2;break;case a:s=(n-o)/f+4}s=s*60}return u&&(l=f/u),s>=360&&(s-=360),[s,l*100,u*100]},toBase(e){let[r,t,n]=e;r=r%360,r<0&&(r+=360),t/=100,n/=100;function o(a){let s=(a+r/60)%6;return n-n*t*Math.max(0,Math.min(s,4-s,1))}return i(o,"f"),[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),UE=new Y({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:R5,fromBase(e){let[r,t,n]=e;return[r,n*(100-t)/100,100-n]},toBase(e){let[r,t,n]=e;t/=100,n/=100;let o=t+n;if(o>=1){let l=t/o;return[r,0,l*100]}let a=1-n,s=a===0?0:1-t/a;return[r,s*100,a*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const _E=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],zE=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var L5=new Dt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:_E,fromXYZ_M:zE}),qE=new Dt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:L5,toBase:i(e=>e.map(r=>Math.pow(Math.abs(r),563/256)*Math.sign(r)),"toBase"),fromBase:i(e=>e.map(r=>Math.pow(Math.abs(r),256/563)*Math.sign(r)),"fromBase")});const VE=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],WE=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var j5=new Dt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:tp,toXYZ_M:VE,fromXYZ_M:WE});const KE=1/512,HE=16/512;var GE=new Dt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:j5,toBase(e){return e.map(r=>{let t=r<0?-1:1,n=r*t;return n<HE?r/16:t*n**1.8})},fromBase(e){return e.map(r=>{let t=r<0?-1:1,n=r*t;return n>=KE?t*n**(1/1.8):16*r})}});const Ju=1.09929682680944,Ov=.018053968510807;var ZE=new Dt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Wl,referred:"scene",toBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return n<Ov*4.5?r/4.5:t*Math.pow((n+Ju-1)/Ju,1/.45)})},fromBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return n>=Ov?t*(Ju*Math.pow(n,.45)-(Ju-1)):4.5*r})}}),YE=new Y({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:qn,fromBase:ln.fromBase,toBase:ln.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const fs=2*Math.PI,zc=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],qc=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],i0=Number.MAX_VALUE,Al=.206,ap=.03,pl=(1+Al)/(1+ap);function st(e,r){let t=e.length;if(t!==r.length)throw new Error(`Vectors of size ${t} and ${r.length} are not aligned`);let n=0;return e.forEach((o,a)=>{n+=o*r[a]}),n}i(st,"vdot");function Fl(e){return .5*(pl*e-Al+Math.sqrt((pl*e-Al)*(pl*e-Al)+4*ap*pl*e))}i(Fl,"toe$1");function Xa(e){return(e**2+Al*e)/(pl*(e+ap))}i(Xa,"toeInv");function sp(e){let[r,t]=e;return[t/r,t/(1-r)]}i(sp,"toSt");function JE(e,r){let t=.11516993+1/(7.4477897+4.1590124*r+e*(-2.19557347+1.75198401*r+e*(-2.13704948-10.02301043*r+e*(-4.24894561+5.38770819*r+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*r+e*(.40370612+.90148123*r+e*(-.27087943+.6122399*r+e*(.00299215-.45399568*r-.14661872*e))));return[t,n]}i(JE,"getStMid");function lp(e,r){let t=xr(e,si);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,xr(t,r,t)}i(lp,"oklabToLinearRGB");function Md(e,r,t,n){let o=QE(e,r,t,n),a=lp([1,o*e,o*r],t),s=Pr(1/Math.max(...a),1/3),l=s*o;return[s,l]}i(Md,"findCusp");function XE(e,r,t,n,o,a,s,l){let u;if(l===void 0&&(l=Md(e,r,a,s)),(t-o)*l[1]-(l[0]-o)*n<=0)u=l[1]*o/(n*l[0]+l[1]*(o-t));else{u=l[1]*(o-1)/(n*(l[0]-1)+l[1]*(o-t));let f=t-o,g=n,h=st(si[0].slice(1),[e,r]),p=st(si[1].slice(1),[e,r]),b=st(si[2].slice(1),[e,r]),v=f+g*h,$=f+g*p,C=f+g*b,E=o*(1-u)+u*t,A=u*n,N=E+A*h,_=E+A*p,H=E+A*b,ce=N**3,Te=_**3,be=H**3,Se=3*v*N**2,or=3*$*_**2,ir=3*C*H**2,jr=6*v**2*N,Yt=6*$**2*_,Et=6*C**2*H,fo=st(a[0],[ce,Te,be])-1,Jr=st(a[0],[Se,or,ir]),Xn=st(a[0],[jr,Yt,Et]),go=Jr/(Jr*Jr-.5*fo*Xn),mn=-fo*go,at=st(a[1],[ce,Te,be])-1,He=st(a[1],[Se,or,ir]),Ur=st(a[1],[jr,Yt,Et]),bn=He/(He*He-.5*at*Ur),vt=-at*bn,vn=st(a[2],[ce,Te,be])-1,In=st(a[2],[Se,or,ir]),_o=st(a[2],[jr,Yt,Et]),Ou=In/(In*In-.5*vn*_o),Ma=-vn*Ou;mn=go>=0?mn:i0,vt=bn>=0?vt:i0,Ma=Ou>=0?Ma:i0,u+=Math.min(mn,Math.min(vt,Ma))}return u}i(XE,"findGamutIntersection");function U5(e,r,t){let[n,o,a]=e,s=Md(o,a,r,t),l=XE(o,a,n,1,n,r,t,s),u=sp(s),f=l/Math.min(n*u[0],(1-n)*u[1]),g=JE(o,a),h=n*g[0],p=(1-n)*g[1],b=.9*f*Math.sqrt(Math.sqrt(1/(1/h**4+1/p**4)));return h=n*.4,p=(1-n)*.8,[Math.sqrt(1/(1/h**2+1/p**2)),b,l]}i(U5,"getCs");function QE(e,r,t,n){let o,a,s,l,u,f,g,h;st(n[0][0],[e,r])>1?([o,a,s,l,u]=n[0][1],[f,g,h]=t[0]):st(n[1][0],[e,r])>1?([o,a,s,l,u]=n[1][1],[f,g,h]=t[1]):([o,a,s,l,u]=n[2][1],[f,g,h]=t[2]);let p=o+a*e+s*r+l*e**2+u*e*r,b=st(si[0].slice(1),[e,r]),v=st(si[1].slice(1),[e,r]),$=st(si[2].slice(1),[e,r]),C=1+p*b,E=1+p*v,A=1+p*$,N=C**3,_=E**3,H=A**3,ce=3*b*C**2,Te=3*v*E**2,be=3*$*A**2,Se=6*b**2*C,or=6*v**2*E,ir=6*$**2*A,jr=f*N+g*_+h*H,Yt=f*ce+g*Te+h*be,Et=f*Se+g*or+h*ir;return p=p-jr*Yt/(Yt**2-.5*jr*Et),p}i(QE,"computeMaxSaturation");function eA(e,r,t){let[n,o,a]=e,s=Xa(a),l=null,u=null;if(n=Fn(n)/360,s!==0&&s!==1&&o!==0){let f=Math.cos(fs*n),g=Math.sin(fs*n),[h,p,b]=U5([s,f,g],r,t),v=.8,$=1.25,C,E,A,N;o<v?(C=$*o,E=0,A=v*h,N=1-A/p):(C=5*(o-.8),E=p,A=.2*p**2*1.25**2/h,N=1-A/(b-p));let _=E+C*A/(1-N*C);l=_*f,u=_*g}return[s,l,u]}i(eA,"okhslToOklab");function rA(e,r,t){let n=1e-7,o=1e-4,a=e[0],s=0,l=Fl(a),u=Math.sqrt(e[1]**2+e[2]**2),f=.5+Math.atan2(-e[2],-e[1])/fs;if(l!==0&&l!==1&&u!==0){let h=e[1]/u,p=e[2]/u,[b,v,$]=U5([a,h,p],r,t),C=.8,E=1.25,A,N,_,H;u<v?(N=C*b,_=1-N/v,H=u/(N+_*u),s=H*C):(A=v,N=.2*v**2*E**2/b,_=1-N/($-v),H=(u-A)/(N+_*(u-A)),s=C+.2*H)}const g=Math.abs(s)<o;return g||l===0||Math.abs(1-l)<n?(f=null,g||(s=0)):f=Fn(f*360),[f,s,l]}i(rA,"oklabToOkhsl");var tA=new Y({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:qn,gamutSpace:"self",fromBase(e){return rA(e,zc,qc)},toBase(e){return eA(e,zc,qc)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),_5=new Y({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:qn,fromBase(e){return[Fl(e[0]),e[1],e[2]]},toBase(e){return[Xa(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),nA=new Y({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:_5,fromBase:ln.fromBase,toBase:ln.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function oA(e,r,t){let[n,o,a]=e;n=Fn(n)/360;let s=Xa(a),l=null,u=null;if(s!==0&&o!==0){let f=Math.cos(fs*n),g=Math.sin(fs*n),h=Md(f,g,r,t),[p,b]=sp(h),v=.5,$=1-v/p,C=1-o*v/(v+b-b*$*o),E=o*b*v/(v+b-b*$*o);s=a*C;let A=a*E,N=Xa(C),_=E*N/C,H=Xa(s);A=A*H/s,s=H;let[ce,Te,be]=lp([N,f*_,g*_],r),Se=Pr(1/Math.max(Math.max(ce,Te),Math.max(be,0)),1/3);s=s*Se,A=A*Se,l=A*f,u=A*g}return[s,l,u]}i(oA,"okhsvToOklab");function iA(e,r,t){let n=1e-4,o=e[0],a=0,s=Fl(o),l=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/fs;if(o!==0&&o!==1&&l!==0){let f=e[1]/l,g=e[2]/l,h=Md(f,g,r,t),[p,b]=sp(h),v=.5,$=1-v/p,C=b/(l+o*b),E=C*o,A=C*l,N=Xa(E),_=A*N/E,[H,ce,Te]=lp([N,f*_,g*_],r),be=Pr(1/Math.max(Math.max(H,ce),Math.max(Te,0)),1/3);o=o/be,l=l/be,l=l*Fl(o)/o,o=Fl(o),s=o/E,a=(v+b)*A/(b*v+b*$*A)}return Math.abs(a)<n||s===0?u=null:u=Fn(u*360),[u,a,s]}i(iA,"oklabToOkhsv");var aA=new Y({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:qn,gamutSpace:"self",fromBase(e){return iA(e,zc,qc)},toBase(e){return oA(e,zc,qc)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let z5=Tt.D65;const sA=216/24389,Rv=24389/27,[Lv,jv]=Sd({space:dt,coords:z5});var q5=new Y({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:z5,base:dt,fromBase(e){let r=[Tr(e[0]),Tr(e[1]),Tr(e[2])],t=r[1],[n,o]=Sd({space:dt,coords:r});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let a=t<=sA?Rv*t:116*Math.cbrt(t)-16;return[a,13*a*(n-Lv),13*a*(o-jv)]},toBase(e){let[r,t,n]=e;if(r===0||Be(r))return[0,0,0];t=Tr(t),n=Tr(n);let o=t/(13*r)+Lv,a=n/(13*r)+jv,s=r<=8?r/Rv:Math.pow((r+16)/116,3);return[s*(9*o/(4*a)),s,s*((12-3*o-20*a)/(4*a))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),up=new Y({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:q5,fromBase:ln.fromBase,toBase:ln.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const lA=216/24389,uA=24389/27,Uv=Zr[0][0],_v=Zr[0][1],a0=Zr[0][2],zv=Zr[1][0],qv=Zr[1][1],s0=Zr[1][2],Vv=Zr[2][0],Wv=Zr[2][1],l0=Zr[2][2];function Oa(e,r,t){const n=r/(Math.sin(t)-e*Math.cos(t));return n<0?1/0:n}i(Oa,"distanceFromOriginAngle");function Vc(e){const r=Math.pow(e+16,3)/1560896,t=r>lA?r:e/uA,n=t*(284517*Uv-94839*a0),o=t*(838422*a0+769860*_v+731718*Uv),a=t*(632260*a0-126452*_v),s=t*(284517*zv-94839*s0),l=t*(838422*s0+769860*qv+731718*zv),u=t*(632260*s0-126452*qv),f=t*(284517*Vv-94839*l0),g=t*(838422*l0+769860*Wv+731718*Vv),h=t*(632260*l0-126452*Wv);return{r0s:n/a,r0i:o*e/a,r1s:n/(a+126452),r1i:(o-769860)*e/(a+126452),g0s:s/u,g0i:l*e/u,g1s:s/(u+126452),g1i:(l-769860)*e/(u+126452),b0s:f/h,b0i:g*e/h,b1s:f/(h+126452),b1i:(g-769860)*e/(h+126452)}}i(Vc,"calculateBoundingLines");function Kv(e,r){const t=r/360*Math.PI*2,n=Oa(e.r0s,e.r0i,t),o=Oa(e.r1s,e.r1i,t),a=Oa(e.g0s,e.g0i,t),s=Oa(e.g1s,e.g1i,t),l=Oa(e.b0s,e.b0i,t),u=Oa(e.b1s,e.b1i,t);return Math.min(n,o,a,s,l,u)}i(Kv,"calcMaxChromaHsluv");var cA=new Y({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:up,gamutSpace:oa,fromBase(e){let[r,t,n]=[Tr(e[0]),Tr(e[1]),Tr(e[2])],o;if(r>99.9999999)o=0,r=100;else if(r<1e-8)o=0,r=0;else{let a=Vc(r),s=Kv(a,n);o=t/s*100}return[n,o,r]},toBase(e){let[r,t,n]=[Tr(e[0]),Tr(e[1]),Tr(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let a=Vc(n);o=Kv(a,r)/100*t}return[n,o,r]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Zr[0][0];Zr[0][1];Zr[0][2];Zr[1][0];Zr[1][1];Zr[1][2];Zr[2][0];Zr[2][1];Zr[2][2];function Ra(e,r){return Math.abs(r)/Math.sqrt(Math.pow(e,2)+1)}i(Ra,"distanceFromOrigin");function Hv(e){let r=Ra(e.r0s,e.r0i),t=Ra(e.r1s,e.r1i),n=Ra(e.g0s,e.g0i),o=Ra(e.g1s,e.g1i),a=Ra(e.b0s,e.b0i),s=Ra(e.b1s,e.b1i);return Math.min(r,t,n,o,a,s)}i(Hv,"calcMaxChromaHpluv");var dA=new Y({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:up,gamutSpace:"self",fromBase(e){let[r,t,n]=[Tr(e[0]),Tr(e[1]),Tr(e[2])],o;if(r>99.9999999)o=0,r=100;else if(r<1e-8)o=0,r=0;else{let a=Vc(r),s=Hv(a);o=t/s*100}return[n,o,r]},toBase(e){let[r,t,n]=[Tr(e[0]),Tr(e[1]),Tr(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let a=Vc(n);o=Hv(a)/100*t}return[n,o,r]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),cp=new Dt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:Wl.toBase,fromBase:Wl.fromBase});const Gv=203,Zv=2610/2**14,fA=2**14/2610,gA=2523/2**5,Yv=2**5/2523,Jv=3424/2**12,Xv=2413/2**7,Qv=2392/2**7;var hA=new Dt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:cp,toBase(e){return e.map(function(r){return(Math.max(r**Yv-Jv,0)/(Xv-Qv*r**Yv))**fA*1e4/Gv})},fromBase(e){return e.map(function(r){let t=Math.max(r*Gv/1e4,0),n=Jv+Xv*t**Zv,o=1+Qv*t**Zv;return(n/o)**gA})}});const ey=.17883277,ry=.28466892,ty=.55991073,u0=3.7743;var pA=new Dt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:cp,toBase(e){return e.map(function(r){return r<=.5?r**2/3*u0:(Math.exp((r-ty)/ey)+ry)/12*u0})},fromBase(e){return e.map(function(r){return r/=u0,r<=1/12?Pr(3*r,.5):ey*Math.log(12*r-ry)+ty})}});const V5={};gi.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=W5(e.W1,e.W2,e.options.method))});gi.add("chromatic-adaptation-end",e=>{e.M||(e.M=W5(e.W1,e.W2,e.options.method))});function Td({id:e,toCone_M:r,fromCone_M:t}){V5[e]=arguments[0]}i(Td,"defineCAT");function W5(e,r,t="Bradford"){let n=V5[t],[o,a,s]=gl(n.toCone_M,e),[l,u,f]=gl(n.toCone_M,r),g=[[l/o,0,0],[0,u/a,0],[0,0,f/s]],h=gl(g,n.toCone_M);return gl(n.fromCone_M,h)}i(W5,"adapt");Td({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Td({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Td({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Td({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Tt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Tt.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const mA=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],bA=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var K5=new Dt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Tt.ACES,toXYZ_M:mA,fromXYZ_M:bA});const Xu=2**-16,c0=-.35828683,Qu=(Math.log2(65504)+9.72)/17.52;var vA=new Dt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[c0,Qu],name:"Red"},g:{range:[c0,Qu],name:"Green"},b:{range:[c0,Qu],name:"Blue"}},referred:"scene",base:K5,toBase(e){const r=-.3013698630136986;return e.map(function(t){return t<=r?(2**(t*17.52-9.72)-Xu)*2:t<Qu?2**(t*17.52-9.72):65504})},fromBase(e){return e.map(function(r){return r<=0?(Math.log2(Xu)+9.72)/17.52:r<Xu?(Math.log2(Xu+r*.5)+9.72)/17.52:(Math.log2(r)+9.72)/17.52})}}),ny=Object.freeze({__proto__:null,A98RGB:qE,A98RGB_Linear:L5,ACEScc:vA,ACEScg:K5,CAM16_JMh:ZC,HCT:Vl,HPLuv:dA,HSL:jE,HSLuv:cA,HSV:R5,HWB:UE,ICTCP:Ig,JzCzHz:Pg,Jzazbz:b5,LCH:ln,LCHuv:up,Lab:tn,Lab_D65:Og,Luv:q5,OKLCH:YE,OKLab:qn,OKLrCH:nA,OKLrab:_5,Okhsl:tA,Okhsv:aA,P3:M5,P3_Linear:F5,ProPhoto:GE,ProPhoto_Linear:j5,REC_2020:A5,REC_2020_Linear:Wl,REC_2020_Scene_Referred:ZE,REC_2100_HLG:pA,REC_2100_Linear:cp,REC_2100_PQ:hA,XYZ_ABS_D65:np,XYZ_D50:tp,XYZ_D65:dt,sRGB:oa,sRGB_Linear:S5});let rr=class Lt{static{i(this,"Color")}constructor(...r){let t;if(r.length===1){let s={};typeof r[0]=="object"&&Object.getPrototypeOf(r[0]).constructor===Object&&(r[0]={...r[0]}),t=ue(r[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,o,a;t?(n=t.space||t.spaceId,o=t.coords,a=t.alpha):[n,o,a]=r,Object.defineProperty(this,"space",{value:Y.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=Be(a)?a:a===void 0?1:Ad(0,a,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:i(()=>this.get(s),"get"),set:i(l=>this.set(s,l),"set")})}get spaceId(){return this.space.id}clone(){return new Lt(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...r){let t=dE(this,...r);return t.color=new Lt(t.color),t}static get(r,...t){return us(r,this)?r:new Lt(r,...t)}static try(r,t){if(us(r,this))return r;let n=g5(r,t);return n?new Lt(n):null}static defineFunction(r,t,n=t){let{instance:o=!0,returns:a}=n,s=i(function(...l){let u=t(...l);if(a==="color")u=Lt.get(u);else if(a==="function<color>"){let f=u;u=i(function(...g){let h=f(...g);return Lt.get(h)},"ret"),Object.assign(u,f)}else a==="array<color>"&&(u=u.map(f=>Lt.get(f)));return u},"func");r in Lt||(Lt[r]=s),o&&(Lt.prototype[r]=function(...l){return s(this,...l)})}static defineFunctions(r){for(let t in r)Lt.defineFunction(t,r[t],r[t])}static extend(r){if(r.register)r.register(Lt);else for(let t in r)Lt.defineFunction(t,r[t])}};rr.defineFunctions({get:rn,getAll:bu,set:No,setAll:rp,to:er,equals:gE,inGamut:Zi,toGamut:hi,distance:m5,deltas:fE,toString:El});Object.assign(rr,{util:cC,hooks:gi,WHITES:Tt,Space:Y,spaces:Y.registry,parse:d5,defaults:sn});for(let e of Object.keys(ny))Y.register(ny[e]);for(let e in Y.registry)Rg(e,Y.registry[e]);gi.add("colorspace-init-end",e=>{Rg(e.id,e),e.aliases?.forEach(r=>{Rg(r,e)})});function Rg(e,r){let t=e.replace(/-/g,"_");Object.defineProperty(rr.prototype,t,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:i(((a,s)=>{try{return Y.resolveCoord([r,s]),!0}catch{}return Reflect.has(a,s)}),"has"),get:i((a,s,l)=>{if(s&&typeof s!="symbol"&&!(s in a)&&s in o){let{index:u}=Y.resolveCoord([r,s]);if(u>=0)return a[u]}return Reflect.get(a,s,l)},"get"),set:i((a,s,l,u)=>{if(s&&typeof s!="symbol"&&!(s in a)||Number(s)>=0){let{index:f}=Y.resolveCoord([r,s]);if(f>=0)return a[f]=l,this.setAll(e,a),!0}return Reflect.set(a,s,l,u)},"set")});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}i(Rg,"addSpaceAccessors");rr.extend(ds);rr.extend({deltaE:hl});Object.assign(rr,{deltaEMethods:ds});rr.extend(OE);rr.extend({contrast:IE});rr.extend(BE);rr.extend(pE);rr.extend(LE);rr.extend(vc);const H5=Symbol("no update");function oy(e){return e!==H5}i(oy,"isNotNoUpdate");class d0 extends Gt()("observable-value-update"){static{i(this,"ObservableValueUpdateEvent")}}class yA extends Gt()("observable-value-resolve"){static{i(this,"ObservableValueResolveEvent")}}class wA extends Gt()("observable-value-error"){static{i(this,"ObservableValueErrorEvent")}}class kA extends xd("observable-destroy"){static{i(this,"ObservableDestroyEvent")}}class $A extends xd("observable-callback-call"){static{i(this,"ObservableCallbackCallEvent")}}class xA extends Gt()("observable-params-update"){static{i(this,"ObservableParamsUpdateEvent")}}class G5{static{i(this,"AnyObservable")}listenTarget=new mu;value;equalityCheck;listenerMap=new WeakMap;dispatch(...r){return this.listenTarget.dispatch(...r)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...r){const t=r[0];if(t===H5)return!1;if(!(r.length===2?r[1]:this.equalityCheck)?.(this.value,t)){const o=this.value;return this.value=t,this.listenTarget.dispatch(new d0({detail:[t,o]})),!0}return!1}listen(r,t){const n=i(o=>t(...o.detail),"mapped");return this.listenerMap.set(t,n),r&&t(this.value,void 0),this.listenTarget.listen(d0,n)}removeListener(r){const t=this.listenerMap.get(r);return!!t&&this.listenTarget.removeListener(d0,t)}destroy(){this.listenTarget.dispatch(new kA),this.listenTarget.destroy()}listenToEvent(r,t,n){return this.listenTarget.listen(r,t,n)}}function dp(e,r){return wD(e,r,(t,n)=>M.isFunction(t)&&M.isFunction(n)?!0:M.strictEquals(t,n))}i(dp,"observableEqualityCheck");var Sl;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Sl||(Sl={}));class DA extends G5{static{i(this,"AsyncObservable")}equalityCheck;waitingForValueDeferredPromise=new Ac;lastSetPromise;lastSetId=Po();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(r={}){super(),this.equalityCheck="equalityCheck"in r?r.equalityCheck:dp,"defaultValue"in r&&this.setValue(r.defaultValue)}setPromise(r){if(r===this.lastSetPromise)return!1;const t=Po();return this.lastSetId=t,this.lastSetPromise=r,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Ac,super.setValue(this.waitingForValueDeferredPromise.promise,M.strictEquals)),r.then(n=>{this.lastSetPromise!==r||this.lastSetId!==t||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==r||this.lastSetId!==t)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=Dr(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(r){return oy(r)||(r=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(r,M.strictEquals):super.setValue(r))?(this.lastResolvedValue=r,this.lastSetId=Po(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(r),this.dispatch(new yA({detail:r})),!0):!1}rejectValue(r){this.waitingForValueDeferredPromise.reject(r),super.setValue(r,M.strictEquals),this.dispatch(new wA({detail:r}))}setValue(r){try{return r instanceof Promise?this.setPromise(r):r instanceof Error?(this.rejectValue(r),!0):oy(r)?this.resolveValue(r):!1}catch(t){return this.rejectValue(Dr(t)),!0}}listen(r,t){return super.listen(r,t)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?Sl.Rejected:this.value instanceof Promise?Sl.Waiting:Sl.Resolved}}class qa extends DA{static{i(this,"CallbackObservable")}static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==qa.NotSet)return this.internalParams}internalParams;constructor(r={}){super(r),this.equalityCheck="equalityCheck"in r?r.equalityCheck:dp,this.updateCallback=r.updateCallback,this.internalParams="defaultParams"in r?r.defaultParams:qa.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===qa.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(r){return this.setValue(Dr(r))}finally{this.dispatch(new $A)}}updateLastParams(r){try{return this.internalParams===qa.NotSet||!this.equalityCheck?.(r,this.internalParams)?(this.internalParams=r,this.dispatch(new xA({detail:this.internalParams})),!0):!1}catch(t){return this.setValue(Dr(t)),!1}}update(...[r]){return this.updateLastParams(r)?(this.updateFromCallback(),!0):!1}setParams(r){return this.updateLastParams(r)}forceUpdate(...r){return M.isLengthAtLeast(r,1)&&this.updateLastParams(r[0]),this.updateFromCallback()}}function CA(e){return Or(e)&&!Zt(e)&&!wu(e)&&Symbol.asyncIterator in e}i(CA,"IsAsyncIterator$3");function Zt(e){return Array.isArray(e)}i(Zt,"IsArray$3");function Z5(e){return typeof e=="bigint"}i(Z5,"IsBigInt$3");function yu(e){return typeof e=="boolean"}i(yu,"IsBoolean$3");function fp(e){return e instanceof globalThis.Date}i(fp,"IsDate$3");function EA(e){return typeof e=="function"}i(EA,"IsFunction$3");function AA(e){return Or(e)&&!Zt(e)&&!wu(e)&&Symbol.iterator in e}i(AA,"IsIterator$3");function FA(e){return e===null}i(FA,"IsNull$3");function so(e){return typeof e=="number"}i(so,"IsNumber$3");function Or(e){return typeof e=="object"&&e!==null}i(Or,"IsObject$3");function Y5(e){return e instanceof globalThis.RegExp}i(Y5,"IsRegExp$2");function Fr(e){return typeof e=="string"}i(Fr,"IsString$3");function SA(e){return typeof e=="symbol"}i(SA,"IsSymbol$3");function wu(e){return e instanceof globalThis.Uint8Array}i(wu,"IsUint8Array$3");function Ir(e){return e===void 0}i(Ir,"IsUndefined$3");function MA(e){return e.map(r=>Wc(r))}i(MA,"ArrayType$1");function TA(e){return new Date(e.getTime())}i(TA,"DateType$1");function PA(e){return new Uint8Array(e)}i(PA,"Uint8ArrayType$1");function IA(e){return new RegExp(e.source,e.flags)}i(IA,"RegExpType");function NA(e){const r={};for(const t of Object.getOwnPropertyNames(e))r[t]=Wc(e[t]);for(const t of Object.getOwnPropertySymbols(e))r[t]=Wc(e[t]);return r}i(NA,"ObjectType$1");function Wc(e){return Zt(e)?MA(e):fp(e)?TA(e):wu(e)?PA(e):Y5(e)?IA(e):Or(e)?NA(e):e}i(Wc,"Visit$8");function un(e){return Wc(e)}i(un,"Clone");function gp(e,r){return un(r===void 0?e:{...r,...e})}i(gp,"CloneType");function J5(e){return lo(e)&&globalThis.Symbol.asyncIterator in e}i(J5,"IsAsyncIterator$2");function X5(e){return lo(e)&&globalThis.Symbol.iterator in e}i(X5,"IsIterator$2");function Q5(e){return e instanceof globalThis.Promise}i(Q5,"IsPromise$2");function hp(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}i(hp,"IsDate$2");function pp(e){return e instanceof globalThis.Uint8Array}i(pp,"IsUint8Array$2");function ek(e,r){return r in e}i(ek,"HasPropertyKey");function lo(e){return e!==null&&typeof e=="object"}i(lo,"IsObject$2");function cn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}i(cn,"IsArray$2");function $i(e){return e===void 0}i($i,"IsUndefined$2");function Pd(e){return e===null}i(Pd,"IsNull$2");function Id(e){return typeof e=="boolean"}i(Id,"IsBoolean$2");function pe(e){return typeof e=="number"}i(pe,"IsNumber$2");function rk(e){return globalThis.Number.isInteger(e)}i(rk,"IsInteger$2");function xo(e){return typeof e=="bigint"}i(xo,"IsBigInt$2");function on(e){return typeof e=="string"}i(on,"IsString$2");function tk(e){return typeof e=="function"}i(tk,"IsFunction$2");function Nd(e){return typeof e=="symbol"}i(Nd,"IsSymbol$2");function nk(e){return xo(e)||Id(e)||Pd(e)||pe(e)||on(e)||Nd(e)||$i(e)}i(nk,"IsValueType");var Ar;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function r(s,l){return e.ExactOptionalPropertyTypes?l in s:s[l]!==void 0}i(r,"IsExactOptionalProperty"),e.IsExactOptionalProperty=r;function t(s){const l=lo(s);return e.AllowArrayObject?l:l&&!cn(s)}i(t,"IsObjectLike"),e.IsObjectLike=t;function n(s){return t(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}i(n,"IsRecordLike"),e.IsRecordLike=n;function o(s){return e.AllowNaN?pe(s):Number.isFinite(s)}i(o,"IsNumberLike"),e.IsNumberLike=o;function a(s){const l=$i(s);return e.AllowNullVoid?l||s===null:l}i(a,"IsVoidLike"),e.IsVoidLike=a})(Ar||(Ar={}));function BA(e){return globalThis.Object.freeze(e).map(r=>Kc(r))}i(BA,"ImmutableArray");function OA(e){const r={};for(const t of Object.getOwnPropertyNames(e))r[t]=Kc(e[t]);for(const t of Object.getOwnPropertySymbols(e))r[t]=Kc(e[t]);return globalThis.Object.freeze(r)}i(OA,"ImmutableObject");function Kc(e){return Zt(e)?BA(e):fp(e)?e:wu(e)?e:Y5(e)?e:Or(e)?OA(e):e}i(Kc,"Immutable");function q(e,r){const t=r!==void 0?{...r,...e}:e;switch(Ar.InstanceMode){case"freeze":return Kc(t);case"clone":return un(t);default:return t}}i(q,"CreateType");class pt extends Error{static{i(this,"TypeBoxError")}constructor(r){super(r)}}const zt=Symbol.for("TypeBox.Transform"),ku=Symbol.for("TypeBox.Readonly"),Ro=Symbol.for("TypeBox.Optional"),Bd=Symbol.for("TypeBox.Hint"),z=Symbol.for("TypeBox.Kind");function mp(e){return Or(e)&&e[ku]==="Readonly"}i(mp,"IsReadonly");function xi(e){return Or(e)&&e[Ro]==="Optional"}i(xi,"IsOptional$1");function ok(e){return Ae(e,"Any")}i(ok,"IsAny$1");function ik(e){return Ae(e,"Argument")}i(ik,"IsArgument$1");function Ss(e){return Ae(e,"Array")}i(Ss,"IsArray$1");function Od(e){return Ae(e,"AsyncIterator")}i(Od,"IsAsyncIterator$1");function Rd(e){return Ae(e,"BigInt")}i(Rd,"IsBigInt$1");function $u(e){return Ae(e,"Boolean")}i($u,"IsBoolean$1");function Ms(e){return Ae(e,"Computed")}i(Ms,"IsComputed$1");function Ts(e){return Ae(e,"Constructor")}i(Ts,"IsConstructor$1");function RA(e){return Ae(e,"Date")}i(RA,"IsDate$1");function Ps(e){return Ae(e,"Function")}i(Ps,"IsFunction$1");function Is(e){return Ae(e,"Integer")}i(Is,"IsInteger$1");function Mn(e){return Ae(e,"Intersect")}i(Mn,"IsIntersect$1");function Ld(e){return Ae(e,"Iterator")}i(Ld,"IsIterator$1");function Ae(e,r){return Or(e)&&z in e&&e[z]===r}i(Ae,"IsKindOf$1");function ak(e){return yu(e)||so(e)||Fr(e)}i(ak,"IsLiteralValue$1");function ba(e){return Ae(e,"Literal")}i(ba,"IsLiteral$1");function va(e){return Ae(e,"MappedKey")}i(va,"IsMappedKey$1");function hn(e){return Ae(e,"MappedResult")}i(hn,"IsMappedResult$1");function xu(e){return Ae(e,"Never")}i(xu,"IsNever$1");function LA(e){return Ae(e,"Not")}i(LA,"IsNot$1");function bp(e){return Ae(e,"Null")}i(bp,"IsNull$1");function Ns(e){return Ae(e,"Number")}i(Ns,"IsNumber$1");function Zn(e){return Ae(e,"Object")}i(Zn,"IsObject$1");function jd(e){return Ae(e,"Promise")}i(jd,"IsPromise$1");function Ud(e){return Ae(e,"Record")}i(Ud,"IsRecord$1");function Kt(e){return Ae(e,"Ref")}i(Kt,"IsRef$1");function sk(e){return Ae(e,"RegExp")}i(sk,"IsRegExp$1");function Du(e){return Ae(e,"String")}i(Du,"IsString$1");function vp(e){return Ae(e,"Symbol")}i(vp,"IsSymbol$1");function ya(e){return Ae(e,"TemplateLiteral")}i(ya,"IsTemplateLiteral$1");function jA(e){return Ae(e,"This")}i(jA,"IsThis$1");function tr(e){return Or(e)&&zt in e}i(tr,"IsTransform$1");function wa(e){return Ae(e,"Tuple")}i(wa,"IsTuple$1");function Cu(e){return Ae(e,"Undefined")}i(Cu,"IsUndefined$1");function it(e){return Ae(e,"Union")}i(it,"IsUnion$1");function UA(e){return Ae(e,"Uint8Array")}i(UA,"IsUint8Array$1");function _A(e){return Ae(e,"Unknown")}i(_A,"IsUnknown$1");function zA(e){return Ae(e,"Unsafe")}i(zA,"IsUnsafe$1");function qA(e){return Ae(e,"Void")}i(qA,"IsVoid$1");function VA(e){return Or(e)&&z in e&&Fr(e[z])}i(VA,"IsKind$1");function It(e){return ok(e)||ik(e)||Ss(e)||$u(e)||Rd(e)||Od(e)||Ms(e)||Ts(e)||RA(e)||Ps(e)||Is(e)||Mn(e)||Ld(e)||ba(e)||va(e)||hn(e)||xu(e)||LA(e)||bp(e)||Ns(e)||Zn(e)||jd(e)||Ud(e)||Kt(e)||sk(e)||Du(e)||vp(e)||ya(e)||jA(e)||wa(e)||Cu(e)||it(e)||UA(e)||_A(e)||zA(e)||qA(e)||VA(e)}i(It,"IsSchema$1");const WA=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function lk(e){try{return new RegExp(e),!0}catch{return!1}}i(lk,"IsPattern");function yp(e){if(!Fr(e))return!1;for(let r=0;r<e.length;r++){const t=e.charCodeAt(r);if(t>=7&&t<=13||t===27||t===127)return!1}return!0}i(yp,"IsControlCharacterFree");function uk(e){return wp(e)||vr(e)}i(uk,"IsAdditionalProperties");function Qs(e){return Ir(e)||Z5(e)}i(Qs,"IsOptionalBigInt");function Ye(e){return Ir(e)||so(e)}i(Ye,"IsOptionalNumber");function wp(e){return Ir(e)||yu(e)}i(wp,"IsOptionalBoolean");function We(e){return Ir(e)||Fr(e)}i(We,"IsOptionalString");function KA(e){return Ir(e)||Fr(e)&&yp(e)&&lk(e)}i(KA,"IsOptionalPattern");function HA(e){return Ir(e)||Fr(e)&&yp(e)}i(HA,"IsOptionalFormat");function ck(e){return Ir(e)||vr(e)}i(ck,"IsOptionalSchema");function Hc(e){return Or(e)&&e[Ro]==="Optional"}i(Hc,"IsOptional");function Vn(e){return Fe(e,"Any")&&We(e.$id)}i(Vn,"IsAny");function GA(e){return Fe(e,"Argument")&&so(e.index)}i(GA,"IsArgument");function ka(e){return Fe(e,"Array")&&e.type==="array"&&We(e.$id)&&vr(e.items)&&Ye(e.minItems)&&Ye(e.maxItems)&&wp(e.uniqueItems)&&ck(e.contains)&&Ye(e.minContains)&&Ye(e.maxContains)}i(ka,"IsArray");function kp(e){return Fe(e,"AsyncIterator")&&e.type==="AsyncIterator"&&We(e.$id)&&vr(e.items)}i(kp,"IsAsyncIterator");function _d(e){return Fe(e,"BigInt")&&e.type==="bigint"&&We(e.$id)&&Qs(e.exclusiveMaximum)&&Qs(e.exclusiveMinimum)&&Qs(e.maximum)&&Qs(e.minimum)&&Qs(e.multipleOf)}i(_d,"IsBigInt");function $a(e){return Fe(e,"Boolean")&&e.type==="boolean"&&We(e.$id)}i($a,"IsBoolean");function ZA(e){return Fe(e,"Computed")&&Fr(e.target)&&Zt(e.parameters)&&e.parameters.every(r=>vr(r))}i(ZA,"IsComputed");function zd(e){return Fe(e,"Constructor")&&e.type==="Constructor"&&We(e.$id)&&Zt(e.parameters)&&e.parameters.every(r=>vr(r))&&vr(e.returns)}i(zd,"IsConstructor");function qd(e){return Fe(e,"Date")&&e.type==="Date"&&We(e.$id)&&Ye(e.exclusiveMaximumTimestamp)&&Ye(e.exclusiveMinimumTimestamp)&&Ye(e.maximumTimestamp)&&Ye(e.minimumTimestamp)&&Ye(e.multipleOfTimestamp)}i(qd,"IsDate");function Vd(e){return Fe(e,"Function")&&e.type==="Function"&&We(e.$id)&&Zt(e.parameters)&&e.parameters.every(r=>vr(r))&&vr(e.returns)}i(Vd,"IsFunction");function Lo(e){return Fe(e,"Integer")&&e.type==="integer"&&We(e.$id)&&Ye(e.exclusiveMaximum)&&Ye(e.exclusiveMinimum)&&Ye(e.maximum)&&Ye(e.minimum)&&Ye(e.multipleOf)}i(Lo,"IsInteger");function dk(e){return Or(e)&&Object.entries(e).every(([r,t])=>yp(r)&&vr(t))}i(dk,"IsProperties");function xa(e){return Fe(e,"Intersect")&&!(Fr(e.type)&&e.type!=="object")&&Zt(e.allOf)&&e.allOf.every(r=>vr(r)&&!r9(r))&&We(e.type)&&(wp(e.unevaluatedProperties)||ck(e.unevaluatedProperties))&&We(e.$id)}i(xa,"IsIntersect");function $p(e){return Fe(e,"Iterator")&&e.type==="Iterator"&&We(e.$id)&&vr(e.items)}i($p,"IsIterator");function Fe(e,r){return Or(e)&&z in e&&e[z]===r}i(Fe,"IsKindOf");function fk(e){return Di(e)&&Fr(e.const)}i(fk,"IsLiteralString");function gk(e){return Di(e)&&so(e.const)}i(gk,"IsLiteralNumber");function hk(e){return Di(e)&&yu(e.const)}i(hk,"IsLiteralBoolean");function Di(e){return Fe(e,"Literal")&&We(e.$id)&&YA(e.const)}i(Di,"IsLiteral");function YA(e){return yu(e)||so(e)||Fr(e)}i(YA,"IsLiteralValue");function JA(e){return Fe(e,"MappedKey")&&Zt(e.keys)&&e.keys.every(r=>so(r)||Fr(r))}i(JA,"IsMappedKey");function XA(e){return Fe(e,"MappedResult")&&dk(e.properties)}i(XA,"IsMappedResult");function Ci(e){return Fe(e,"Never")&&Or(e.not)&&Object.getOwnPropertyNames(e.not).length===0}i(Ci,"IsNever");function gs(e){return Fe(e,"Not")&&vr(e.not)}i(gs,"IsNot");function xp(e){return Fe(e,"Null")&&e.type==="null"&&We(e.$id)}i(xp,"IsNull");function qt(e){return Fe(e,"Number")&&e.type==="number"&&We(e.$id)&&Ye(e.exclusiveMaximum)&&Ye(e.exclusiveMinimum)&&Ye(e.maximum)&&Ye(e.minimum)&&Ye(e.multipleOf)}i(qt,"IsNumber");function yr(e){return Fe(e,"Object")&&e.type==="object"&&We(e.$id)&&dk(e.properties)&&uk(e.additionalProperties)&&Ye(e.minProperties)&&Ye(e.maxProperties)}i(yr,"IsObject");function Dp(e){return Fe(e,"Promise")&&e.type==="Promise"&&We(e.$id)&&vr(e.item)}i(Dp,"IsPromise");function gt(e){return Fe(e,"Record")&&e.type==="object"&&We(e.$id)&&uk(e.additionalProperties)&&Or(e.patternProperties)&&(r=>{const t=Object.getOwnPropertyNames(r.patternProperties);return t.length===1&&lk(t[0])&&Or(r.patternProperties)&&vr(r.patternProperties[t[0]])})(e)}i(gt,"IsRecord");function QA(e){return Fe(e,"Ref")&&We(e.$id)&&Fr(e.$ref)}i(QA,"IsRef");function Kl(e){return Fe(e,"RegExp")&&We(e.$id)&&Fr(e.source)&&Fr(e.flags)&&Ye(e.maxLength)&&Ye(e.minLength)}i(Kl,"IsRegExp");function Wn(e){return Fe(e,"String")&&e.type==="string"&&We(e.$id)&&Ye(e.minLength)&&Ye(e.maxLength)&&KA(e.pattern)&&HA(e.format)}i(Wn,"IsString");function Hl(e){return Fe(e,"Symbol")&&e.type==="symbol"&&We(e.$id)}i(Hl,"IsSymbol");function Gl(e){return Fe(e,"TemplateLiteral")&&e.type==="string"&&Fr(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}i(Gl,"IsTemplateLiteral");function e9(e){return Fe(e,"This")&&We(e.$id)&&Fr(e.$ref)}i(e9,"IsThis");function r9(e){return Or(e)&&zt in e}i(r9,"IsTransform");function Wd(e){return Fe(e,"Tuple")&&e.type==="array"&&We(e.$id)&&so(e.minItems)&&so(e.maxItems)&&e.minItems===e.maxItems&&(Ir(e.items)&&Ir(e.additionalItems)&&e.minItems===0||Zt(e.items)&&e.items.every(r=>vr(r)))}i(Wd,"IsTuple");function ia(e){return Fe(e,"Undefined")&&e.type==="undefined"&&We(e.$id)}i(ia,"IsUndefined");function Bo(e){return Fe(e,"Union")&&We(e.$id)&&Or(e)&&Zt(e.anyOf)&&e.anyOf.every(r=>vr(r))}i(Bo,"IsUnion");function Eu(e){return Fe(e,"Uint8Array")&&e.type==="Uint8Array"&&We(e.$id)&&Ye(e.minByteLength)&&Ye(e.maxByteLength)}i(Eu,"IsUint8Array");function Kn(e){return Fe(e,"Unknown")&&We(e.$id)}i(Kn,"IsUnknown");function t9(e){return Fe(e,"Unsafe")}i(t9,"IsUnsafe");function Kd(e){return Fe(e,"Void")&&e.type==="void"&&We(e.$id)}i(Kd,"IsVoid");function n9(e){return Or(e)&&z in e&&Fr(e[z])&&!WA.includes(e[z])}i(n9,"IsKind");function vr(e){return Or(e)&&(Vn(e)||GA(e)||ka(e)||$a(e)||_d(e)||kp(e)||ZA(e)||zd(e)||qd(e)||Vd(e)||Lo(e)||xa(e)||$p(e)||Di(e)||JA(e)||XA(e)||Ci(e)||gs(e)||xp(e)||qt(e)||yr(e)||Dp(e)||gt(e)||QA(e)||Kl(e)||Wn(e)||Hl(e)||Gl(e)||e9(e)||Wd(e)||ia(e)||Bo(e)||Eu(e)||Kn(e)||t9(e)||Kd(e)||n9(e))}i(vr,"IsSchema");const o9="(true|false)",yc="(0|[1-9][0-9]*)",pk="(.*)",i9="(?!.*)",hs=`^${yc}$`,ps=`^${pk}$`,a9=`^${i9}$`,mk=new Map;function Cp(e){return mk.has(e)}i(Cp,"Has$1");function Ep(e){return mk.get(e)}i(Ep,"Get$1");const Ap=new Map;function mi(e){return Ap.has(e)}i(mi,"Has");function Fp(e,r){Ap.set(e,r)}i(Fp,"Set$1");function Sp(e){return Ap.get(e)}i(Sp,"Get");function s9(e,r){return e.includes(r)}i(s9,"SetIncludes");function l9(e){return[...new Set(e)]}i(l9,"SetDistinct");function u9(e,r){return e.filter(t=>r.includes(t))}i(u9,"SetIntersect");function c9(e,r){return e.reduce((t,n)=>u9(t,n),r)}i(c9,"SetIntersectManyResolve");function d9(e){return e.length===1?e[0]:e.length>1?c9(e.slice(1),e[0]):[]}i(d9,"SetIntersectMany");function f9(e){const r=[];for(const t of e)r.push(...t);return r}i(f9,"SetUnionMany");function Zl(e){return q({[z]:"Any"},e)}i(Zl,"Any");function Mp(e,r){return q({[z]:"Array",type:"array",items:e},r)}i(Mp,"Array$1");function g9(e){return q({[z]:"Argument",index:e})}i(g9,"Argument");function Tp(e,r){return q({[z]:"AsyncIterator",type:"AsyncIterator",items:e},r)}i(Tp,"AsyncIterator");function Kr(e,r,t){return q({[z]:"Computed",target:e,parameters:r},t)}i(Kr,"Computed");function h9(e,r){const{[r]:t,...n}=e;return n}i(h9,"DiscardKey");function dn(e,r){return r.reduce((t,n)=>h9(t,n),e)}i(dn,"Discard");function wr(e){return q({[z]:"Never",not:{}},e)}i(wr,"Never");function mt(e){return q({[z]:"MappedResult",properties:e})}i(mt,"MappedResult");function Pp(e,r,t){return q({[z]:"Constructor",type:"Constructor",parameters:e,returns:r},t)}i(Pp,"Constructor");function Au(e,r,t){return q({[z]:"Function",type:"Function",parameters:e,returns:r},t)}i(Au,"Function");function Lg(e,r){return q({[z]:"Union",anyOf:e},r)}i(Lg,"UnionCreate");function p9(e){return e.some(r=>xi(r))}i(p9,"IsUnionOptional");function iy(e){return e.map(r=>xi(r)?m9(r):r)}i(iy,"RemoveOptionalFromRest$1");function m9(e){return dn(e,[Ro])}i(m9,"RemoveOptionalFromType$1");function b9(e,r){return p9(e)?Fi(Lg(iy(e),r)):Lg(iy(e),r)}i(b9,"ResolveUnion");function Bs(e,r){return e.length===1?q(e[0],r):e.length===0?wr(r):b9(e,r)}i(Bs,"UnionEvaluated");function bt(e,r){return e.length===0?wr(r):e.length===1?q(e[0],r):Lg(e,r)}i(bt,"Union$1");class ay extends pt{static{i(this,"TemplateLiteralParserError")}}function v9(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}i(v9,"Unescape");function Ip(e,r,t){return e[r]===t&&e.charCodeAt(r-1)!==92}i(Ip,"IsNonEscaped");function Fo(e,r){return Ip(e,r,"(")}i(Fo,"IsOpenParen");function Yl(e,r){return Ip(e,r,")")}i(Yl,"IsCloseParen");function bk(e,r){return Ip(e,r,"|")}i(bk,"IsSeparator");function y9(e){if(!(Fo(e,0)&&Yl(e,e.length-1)))return!1;let r=0;for(let t=0;t<e.length;t++)if(Fo(e,t)&&(r+=1),Yl(e,t)&&(r-=1),r===0&&t!==e.length-1)return!1;return!0}i(y9,"IsGroup");function w9(e){return e.slice(1,e.length-1)}i(w9,"InGroup");function k9(e){let r=0;for(let t=0;t<e.length;t++)if(Fo(e,t)&&(r+=1),Yl(e,t)&&(r-=1),bk(e,t)&&r===0)return!0;return!1}i(k9,"IsPrecedenceOr");function $9(e){for(let r=0;r<e.length;r++)if(Fo(e,r))return!0;return!1}i($9,"IsPrecedenceAnd");function x9(e){let[r,t]=[0,0];const n=[];for(let a=0;a<e.length;a++)if(Fo(e,a)&&(r+=1),Yl(e,a)&&(r-=1),bk(e,a)&&r===0){const s=e.slice(t,a);s.length>0&&n.push(ms(s)),t=a+1}const o=e.slice(t);return o.length>0&&n.push(ms(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}i(x9,"Or");function D9(e){function r(o,a){if(!Fo(o,a))throw new ay("TemplateLiteralParser: Index must point to open parens");let s=0;for(let l=a;l<o.length;l++)if(Fo(o,l)&&(s+=1),Yl(o,l)&&(s-=1),s===0)return[a,l];throw new ay("TemplateLiteralParser: Unclosed group parens in expression")}i(r,"Group");function t(o,a){for(let s=a;s<o.length;s++)if(Fo(o,s))return[a,s];return[a,o.length]}i(t,"Range");const n=[];for(let o=0;o<e.length;o++)if(Fo(e,o)){const[a,s]=r(e,o),l=e.slice(a,s+1);n.push(ms(l)),o=s}else{const[a,s]=t(e,o),l=e.slice(a,s);l.length>0&&n.push(ms(l)),o=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}i(D9,"And");function ms(e){return y9(e)?ms(w9(e)):k9(e)?x9(e):$9(e)?D9(e):{type:"const",const:v9(e)}}i(ms,"TemplateLiteralParse");function Np(e){return ms(e.slice(1,e.length-1))}i(Np,"TemplateLiteralParseExact");class C9 extends pt{static{i(this,"TemplateLiteralFiniteError")}}function E9(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}i(E9,"IsNumberExpression");function A9(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}i(A9,"IsBooleanExpression");function F9(e){return e.type==="const"&&e.const===".*"}i(F9,"IsStringExpression");function Jl(e){return E9(e)||F9(e)?!1:A9(e)?!0:e.type==="and"?e.expr.every(r=>Jl(r)):e.type==="or"?e.expr.every(r=>Jl(r)):e.type==="const"?!0:(()=>{throw new C9("Unknown expression type")})()}i(Jl,"IsTemplateLiteralExpressionFinite");function S9(e){const r=Np(e.pattern);return Jl(r)}i(S9,"IsTemplateLiteralFinite");class M9 extends pt{static{i(this,"TemplateLiteralGenerateError")}}function*vk(e){if(e.length===1)return yield*e[0];for(const r of e[0])for(const t of vk(e.slice(1)))yield`${r}${t}`}i(vk,"GenerateReduce");function*T9(e){return yield*vk(e.expr.map(r=>[...Hd(r)]))}i(T9,"GenerateAnd");function*P9(e){for(const r of e.expr)yield*Hd(r)}i(P9,"GenerateOr");function*I9(e){return yield e.const}i(I9,"GenerateConst");function*Hd(e){return e.type==="and"?yield*T9(e):e.type==="or"?yield*P9(e):e.type==="const"?yield*I9(e):(()=>{throw new M9("Unknown expression")})()}i(Hd,"TemplateLiteralExpressionGenerate");function yk(e){const r=Np(e.pattern);return Jl(r)?[...Hd(r)]:[]}i(yk,"TemplateLiteralGenerate");function Nr(e,r){return q({[z]:"Literal",const:e,type:typeof e},r)}i(Nr,"Literal");function wk(e){return q({[z]:"Boolean",type:"boolean"},e)}i(wk,"Boolean$1");function Bp(e){return q({[z]:"BigInt",type:"bigint"},e)}i(Bp,"BigInt$1");function Da(e){return q({[z]:"Number",type:"number"},e)}i(Da,"Number$1");function aa(e){return q({[z]:"String",type:"string"},e)}i(aa,"String$1");function*N9(e){const r=e.trim().replace(/"|'/g,"");return r==="boolean"?yield wk():r==="number"?yield Da():r==="bigint"?yield Bp():r==="string"?yield aa():yield(()=>{const t=r.split("|").map(n=>Nr(n.trim()));return t.length===0?wr():t.length===1?t[0]:Bs(t)})()}i(N9,"FromUnion$e");function*B9(e){if(e[1]!=="{"){const r=Nr("$"),t=jg(e.slice(1));return yield*[r,...t]}for(let r=2;r<e.length;r++)if(e[r]==="}"){const t=N9(e.slice(2,r)),n=jg(e.slice(r+1));return yield*[...t,...n]}yield Nr(e)}i(B9,"FromTerminal");function*jg(e){for(let r=0;r<e.length;r++)if(e[r]==="$"){const t=Nr(e.slice(0,r)),n=B9(e.slice(r));return yield*[t,...n]}yield Nr(e)}i(jg,"FromSyntax");function O9(e){return[...jg(e)]}i(O9,"TemplateLiteralSyntax");class R9 extends pt{static{i(this,"TemplateLiteralPatternError")}}function L9(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}i(L9,"Escape");function kk(e,r){return ya(e)?e.pattern.slice(1,e.pattern.length-1):it(e)?`(${e.anyOf.map(t=>kk(t,r)).join("|")})`:Ns(e)?`${r}${yc}`:Is(e)?`${r}${yc}`:Rd(e)?`${r}${yc}`:Du(e)?`${r}${pk}`:ba(e)?`${r}${L9(e.const.toString())}`:$u(e)?`${r}${o9}`:(()=>{throw new R9(`Unexpected Kind '${e[z]}'`)})()}i(kk,"Visit$7");function sy(e){return`^${e.map(r=>kk(r,"")).join("")}$`}i(sy,"TemplateLiteralPattern");function Gc(e){const t=yk(e).map(n=>Nr(n));return Bs(t)}i(Gc,"TemplateLiteralToUnion");function $k(e,r){const t=Fr(e)?sy(O9(e)):sy(e);return q({[z]:"TemplateLiteral",type:"string",pattern:t},r)}i($k,"TemplateLiteral");function j9(e){return yk(e).map(t=>t.toString())}i(j9,"FromTemplateLiteral$4");function U9(e){const r=[];for(const t of e)r.push(...Ei(t));return r}i(U9,"FromUnion$d");function _9(e){return[e.toString()]}i(_9,"FromLiteral$3");function Ei(e){return[...new Set(ya(e)?j9(e):it(e)?U9(e.anyOf):ba(e)?_9(e.const):Ns(e)?["[number]"]:Is(e)?["[number]"]:[])]}i(Ei,"IndexPropertyKeys");function z9(e,r,t){const n={};for(const o of Object.getOwnPropertyNames(r))n[o]=Gd(e,Ei(r[o]),t);return n}i(z9,"FromProperties$i");function q9(e,r,t){return z9(e,r.properties,t)}i(q9,"FromMappedResult$b");function V9(e,r,t){const n=q9(e,r,t);return mt(n)}i(V9,"IndexFromMappedResult");function xk(e,r){return e.map(t=>Dk(t,r))}i(xk,"FromRest$6");function W9(e){return e.filter(r=>!xu(r))}i(W9,"FromIntersectRest");function K9(e,r){return Ak(W9(xk(e,r)))}i(K9,"FromIntersect$c");function H9(e){return e.some(r=>xu(r))?[]:e}i(H9,"FromUnionRest");function G9(e,r){return Bs(H9(xk(e,r)))}i(G9,"FromUnion$c");function Z9(e,r){return r in e?e[r]:r==="[number]"?Bs(e):wr()}i(Z9,"FromTuple$9");function Y9(e,r){return r==="[number]"?e:wr()}i(Y9,"FromArray$a");function J9(e,r){return r in e?e[r]:wr()}i(J9,"FromProperty$2");function Dk(e,r){return Mn(e)?K9(e.allOf,r):it(e)?G9(e.anyOf,r):wa(e)?Z9(e.items??[],r):Ss(e)?Y9(e.items,r):Zn(e)?J9(e.properties,r):wr()}i(Dk,"IndexFromPropertyKey");function Op(e,r){return r.map(t=>Dk(e,t))}i(Op,"IndexFromPropertyKeys");function ly(e,r){return Bs(Op(e,r))}i(ly,"FromSchema");function Gd(e,r,t){if(Kt(e)||Kt(r)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!It(e)||!It(r))throw new pt(n);return Kr("Index",[e,r])}return hn(r)?V9(e,r,t):va(r)?r7(e,r,t):q(It(r)?ly(e,Ei(r)):ly(e,r),t)}i(Gd,"Index");function X9(e,r,t){return{[r]:Gd(e,[r],un(t))}}i(X9,"MappedIndexPropertyKey");function Q9(e,r,t){return r.reduce((n,o)=>({...n,...X9(e,o,t)}),{})}i(Q9,"MappedIndexPropertyKeys");function e7(e,r,t){return Q9(e,r.keys,t)}i(e7,"MappedIndexProperties");function r7(e,r,t){const n=e7(e,r,t);return mt(n)}i(r7,"IndexFromMappedKey");function Rp(e,r){return q({[z]:"Iterator",type:"Iterator",items:e},r)}i(Rp,"Iterator");function t7(e){return globalThis.Object.keys(e).filter(r=>!xi(e[r]))}i(t7,"RequiredArray");function n7(e,r){const t=t7(e),n=t.length>0?{[z]:"Object",type:"object",required:t,properties:e}:{[z]:"Object",type:"object",properties:e};return q(n,r)}i(n7,"_Object");var ot=n7;function Ck(e,r){return q({[z]:"Promise",type:"Promise",item:e},r)}i(Ck,"Promise$1");function o7(e){return q(dn(e,[ku]))}i(o7,"RemoveReadonly");function i7(e){return q({...e,[ku]:"Readonly"})}i(i7,"AddReadonly");function a7(e,r){return r===!1?o7(e):i7(e)}i(a7,"ReadonlyWithFlag");function Ai(e,r){const t=r??!0;return hn(e)?u7(e,t):a7(e,t)}i(Ai,"Readonly");function s7(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Ai(e[n],r);return t}i(s7,"FromProperties$h");function l7(e,r){return s7(e.properties,r)}i(l7,"FromMappedResult$a");function u7(e,r){const t=l7(e,r);return mt(t)}i(u7,"ReadonlyFromMappedResult");function Os(e,r){return q(e.length>0?{[z]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[z]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},r)}i(Os,"Tuple");function Ek(e,r){return e in r?kn(e,r[e]):mt(r)}i(Ek,"FromMappedResult$9");function c7(e){return{[e]:Nr(e)}}i(c7,"MappedKeyToKnownMappedResultProperties");function d7(e){const r={};for(const t of e)r[t]=Nr(t);return r}i(d7,"MappedKeyToUnknownMappedResultProperties");function f7(e,r){return s9(r,e)?c7(e):d7(r)}i(f7,"MappedKeyToMappedResultProperties");function g7(e,r){const t=f7(e,r);return Ek(e,t)}i(g7,"FromMappedKey$3");function el(e,r){return r.map(t=>kn(e,t))}i(el,"FromRest$5");function h7(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(r))t[n]=kn(e,r[n]);return t}i(h7,"FromProperties$g");function kn(e,r){const t={...r};return xi(r)?Fi(kn(e,dn(r,[Ro]))):mp(r)?Ai(kn(e,dn(r,[ku]))):hn(r)?Ek(e,r.properties):va(r)?g7(e,r.keys):Ts(r)?Pp(el(e,r.parameters),kn(e,r.returns),t):Ps(r)?Au(el(e,r.parameters),kn(e,r.returns),t):Od(r)?Tp(kn(e,r.items),t):Ld(r)?Rp(kn(e,r.items),t):Mn(r)?Si(el(e,r.allOf),t):it(r)?bt(el(e,r.anyOf),t):wa(r)?Os(el(e,r.items??[]),t):Zn(r)?ot(h7(e,r.properties),t):Ss(r)?Mp(kn(e,r.items),t):jd(r)?Ck(kn(e,r.item),t):r}i(kn,"FromSchemaType");function p7(e,r){const t={};for(const n of e)t[n]=kn(n,r);return t}i(p7,"MappedFunctionReturnType");function m7(e,r,t){const n=It(e)?Ei(e):e,o=r({[z]:"MappedKey",keys:n}),a=p7(n,o);return ot(a,t)}i(m7,"Mapped");function b7(e){return q(dn(e,[Ro]))}i(b7,"RemoveOptional");function v7(e){return q({...e,[Ro]:"Optional"})}i(v7,"AddOptional");function y7(e,r){return r===!1?b7(e):v7(e)}i(y7,"OptionalWithFlag");function Fi(e,r){const t=r??!0;return hn(e)?$7(e,t):y7(e,t)}i(Fi,"Optional");function w7(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Fi(e[n],r);return t}i(w7,"FromProperties$f");function k7(e,r){return w7(e.properties,r)}i(k7,"FromMappedResult$8");function $7(e,r){const t=k7(e,r);return mt(t)}i($7,"OptionalFromMappedResult");function Ug(e,r={}){const t=e.every(o=>Zn(o)),n=It(r.unevaluatedProperties)?{unevaluatedProperties:r.unevaluatedProperties}:{};return q(r.unevaluatedProperties===!1||It(r.unevaluatedProperties)||t?{...n,[z]:"Intersect",type:"object",allOf:e}:{...n,[z]:"Intersect",allOf:e},r)}i(Ug,"IntersectCreate");function x7(e){return e.every(r=>xi(r))}i(x7,"IsIntersectOptional");function D7(e){return dn(e,[Ro])}i(D7,"RemoveOptionalFromType");function uy(e){return e.map(r=>xi(r)?D7(r):r)}i(uy,"RemoveOptionalFromRest");function C7(e,r){return x7(e)?Fi(Ug(uy(e),r)):Ug(uy(e),r)}i(C7,"ResolveIntersect");function Ak(e,r={}){if(e.length===1)return q(e[0],r);if(e.length===0)return wr(r);if(e.some(t=>tr(t)))throw new Error("Cannot intersect transform types");return C7(e,r)}i(Ak,"IntersectEvaluated");function Si(e,r){if(e.length===1)return q(e[0],r);if(e.length===0)return wr(r);if(e.some(t=>tr(t)))throw new Error("Cannot intersect transform types");return Ug(e,r)}i(Si,"Intersect$1");function Rs(...e){const[r,t]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof r!="string")throw new pt("Ref: $ref must be a string");return q({[z]:"Ref",$ref:r},t)}i(Rs,"Ref");function E7(e,r){return Kr("Awaited",[Kr(e,r)])}i(E7,"FromComputed$4");function A7(e){return Kr("Awaited",[Rs(e)])}i(A7,"FromRef$8");function F7(e){return Si(Fk(e))}i(F7,"FromIntersect$b");function S7(e){return bt(Fk(e))}i(S7,"FromUnion$b");function M7(e){return Zd(e)}i(M7,"FromPromise$5");function Fk(e){return e.map(r=>Zd(r))}i(Fk,"FromRest$4");function Zd(e,r){return q(Ms(e)?E7(e.target,e.parameters):Mn(e)?F7(e.allOf):it(e)?S7(e.anyOf):jd(e)?M7(e.item):Kt(e)?A7(e.$ref):e,r)}i(Zd,"Awaited");function Sk(e){const r=[];for(const t of e)r.push(Ca(t));return r}i(Sk,"FromRest$3");function T7(e){const r=Sk(e);return f9(r)}i(T7,"FromIntersect$a");function P7(e){const r=Sk(e);return d9(r)}i(P7,"FromUnion$a");function I7(e){return e.map((r,t)=>t.toString())}i(I7,"FromTuple$8");function N7(e){return["[number]"]}i(N7,"FromArray$9");function B7(e){return globalThis.Object.getOwnPropertyNames(e)}i(B7,"FromProperties$e");function O7(e){return _g?globalThis.Object.getOwnPropertyNames(e).map(t=>t[0]==="^"&&t[t.length-1]==="$"?t.slice(1,t.length-1):t):[]}i(O7,"FromPatternProperties");function Ca(e){return Mn(e)?T7(e.allOf):it(e)?P7(e.anyOf):wa(e)?I7(e.items??[]):Ss(e)?N7(e.items):Zn(e)?B7(e.properties):Ud(e)?O7(e.patternProperties):[]}i(Ca,"KeyOfPropertyKeys");let _g=!1;function bs(e){_g=!0;const r=Ca(e);return _g=!1,`^(${r.map(n=>`(${n})`).join("|")})$`}i(bs,"KeyOfPattern");function R7(e,r){return Kr("KeyOf",[Kr(e,r)])}i(R7,"FromComputed$3");function L7(e){return Kr("KeyOf",[Rs(e)])}i(L7,"FromRef$7");function j7(e,r){const t=Ca(e),n=U7(t),o=Bs(n);return q(o,r)}i(j7,"KeyOfFromType");function U7(e){return e.map(r=>r==="[number]"?Da():Nr(r))}i(U7,"KeyOfPropertyKeysToRest");function Lp(e,r){return Ms(e)?R7(e.target,e.parameters):Kt(e)?L7(e.$ref):hn(e)?q7(e,r):j7(e,r)}i(Lp,"KeyOf");function _7(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Lp(e[n],un(r));return t}i(_7,"FromProperties$d");function z7(e,r){return _7(e.properties,r)}i(z7,"FromMappedResult$7");function q7(e,r){const t=z7(e,r);return mt(t)}i(q7,"KeyOfFromMappedResult");function Mk(e){const r=Ca(e),t=Op(e,r);return r.map((n,o)=>[r[o],t[o]])}i(Mk,"KeyOfPropertyEntries");function V7(e){const r=[];for(const t of e)r.push(...Ca(t));return l9(r)}i(V7,"CompositeKeys");function W7(e){return e.filter(r=>!xu(r))}i(W7,"FilterNever");function K7(e,r){const t=[];for(const n of e)t.push(...Op(n,[r]));return W7(t)}i(K7,"CompositeProperty");function H7(e,r){const t={};for(const n of r)t[n]=Ak(K7(e,n));return t}i(H7,"CompositeProperties");function G7(e,r){const t=V7(e),n=H7(e,t);return ot(n,r)}i(G7,"Composite");function Tk(e){return q({[z]:"Date",type:"Date"},e)}i(Tk,"Date$1");function Pk(e){return q({[z]:"Null",type:"null"},e)}i(Pk,"Null");function Ik(e){return q({[z]:"Symbol",type:"symbol"},e)}i(Ik,"Symbol$1");function Nk(e){return q({[z]:"Undefined",type:"undefined"},e)}i(Nk,"Undefined");function Bk(e){return q({[z]:"Uint8Array",type:"Uint8Array"},e)}i(Bk,"Uint8Array$1");function Yd(e){return q({[z]:"Unknown"},e)}i(Yd,"Unknown");function Z7(e){return e.map(r=>jp(r,!1))}i(Z7,"FromArray$8");function Y7(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=Ai(jp(e[t],!1));return r}i(Y7,"FromProperties$c");function ec(e,r){return r===!0?e:Ai(e)}i(ec,"ConditionalReadonly");function jp(e,r){return CA(e)||AA(e)?ec(Zl(),r):Zt(e)?Ai(Os(Z7(e))):wu(e)?Bk():fp(e)?Tk():Or(e)?ec(ot(Y7(e)),r):EA(e)?ec(Au([],Yd()),r):Ir(e)?Nk():FA(e)?Pk():SA(e)?Ik():Z5(e)?Bp():so(e)||yu(e)||Fr(e)?Nr(e):ot({})}i(jp,"FromValue");function J7(e,r){return q(jp(e,!0),r)}i(J7,"Const");function X7(e,r){return Ts(e)?Os(e.parameters,r):wr(r)}i(X7,"ConstructorParameters");function Q7(e,r){if(Ir(e))throw new Error("Enum undefined or empty");const t=globalThis.Object.getOwnPropertyNames(e).filter(a=>isNaN(a)).map(a=>e[a]),o=[...new Set(t)].map(a=>Nr(a));return bt(o,{...r,[Bd]:"Enum"})}i(Q7,"Enum");class eF extends pt{static{i(this,"ExtendsResolverError")}}var I;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(I||(I={}));function Sn(e){return e===I.False?e:I.True}i(Sn,"IntoBooleanResult");function Ls(e){throw new eF(e)}i(Ls,"Throw");function Rr(e){return Ci(e)||xa(e)||Bo(e)||Kn(e)||Vn(e)}i(Rr,"IsStructuralRight");function Lr(e,r){return Ci(r)?Lk():xa(r)?Jd(e,r):Bo(r)?_p(e,r):Kn(r)?zk():Vn(r)?Up():Ls("StructuralRight")}i(Lr,"StructuralRight");function Up(e,r){return I.True}i(Up,"FromAnyRight");function rF(e,r){return xa(r)?Jd(e,r):Bo(r)&&r.anyOf.some(t=>Vn(t)||Kn(t))?I.True:Bo(r)?I.Union:Kn(r)||Vn(r)?I.True:I.Union}i(rF,"FromAny$2");function tF(e,r){return Kn(e)?I.False:Vn(e)?I.Union:Ci(e)?I.True:I.False}i(tF,"FromArrayRight");function nF(e,r){return yr(r)&&Xd(r)?I.True:Rr(r)?Lr(e,r):ka(r)?Sn(Ve(e.items,r.items)):I.False}i(nF,"FromArray$7");function oF(e,r){return Rr(r)?Lr(e,r):kp(r)?Sn(Ve(e.items,r.items)):I.False}i(oF,"FromAsyncIterator$5");function iF(e,r){return Rr(r)?Lr(e,r):yr(r)?Ct(e,r):gt(r)?Tn(e,r):_d(r)?I.True:I.False}i(iF,"FromBigInt$2");function Ok(e,r){return hk(e)||$a(e)?I.True:I.False}i(Ok,"FromBooleanRight");function aF(e,r){return Rr(r)?Lr(e,r):yr(r)?Ct(e,r):gt(r)?Tn(e,r):$a(r)?I.True:I.False}i(aF,"FromBoolean$2");function sF(e,r){return Rr(r)?Lr(e,r):yr(r)?Ct(e,r):zd(r)?e.parameters.length>r.parameters.length?I.False:e.parameters.every((t,n)=>Sn(Ve(r.parameters[n],t))===I.True)?Sn(Ve(e.returns,r.returns)):I.False:I.False}i(sF,"FromConstructor$5");function lF(e,r){return Rr(r)?Lr(e,r):yr(r)?Ct(e,r):gt(r)?Tn(e,r):qd(r)?I.True:I.False}i(lF,"FromDate$2");function uF(e,r){return Rr(r)?Lr(e,r):yr(r)?Ct(e,r):Vd(r)?e.parameters.length>r.parameters.length?I.False:e.parameters.every((t,n)=>Sn(Ve(r.parameters[n],t))===I.True)?Sn(Ve(e.returns,r.returns)):I.False:I.False}i(uF,"FromFunction$5");function Rk(e,r){return Di(e)&&so(e.const)||qt(e)||Lo(e)?I.True:I.False}i(Rk,"FromIntegerRight");function cF(e,r){return Lo(r)||qt(r)?I.True:Rr(r)?Lr(e,r):yr(r)?Ct(e,r):gt(r)?Tn(e,r):I.False}i(cF,"FromInteger$2");function Jd(e,r){return r.allOf.every(t=>Ve(e,t)===I.True)?I.True:I.False}i(Jd,"FromIntersectRight");function dF(e,r){return e.allOf.some(t=>Ve(t,r)===I.True)?I.True:I.False}i(dF,"FromIntersect$9");function fF(e,r){return Rr(r)?Lr(e,r):$p(r)?Sn(Ve(e.items,r.items)):I.False}i(fF,"FromIterator$5");function gF(e,r){return Di(r)&&r.const===e.const?I.True:Rr(r)?Lr(e,r):yr(r)?Ct(e,r):gt(r)?Tn(e,r):Wn(r)?_k(e):qt(r)?jk(e):Lo(r)?Rk(e):$a(r)?Ok(e):I.False}i(gF,"FromLiteral$2");function Lk(e,r){return I.False}i(Lk,"FromNeverRight");function hF(e,r){return I.True}i(hF,"FromNever$2");function cy(e){let[r,t]=[e,0];for(;gs(r);)r=r.not,t+=1;return t%2===0?r:Yd()}i(cy,"UnwrapTNot");function pF(e,r){return gs(e)?Ve(cy(e),r):gs(r)?Ve(e,cy(r)):Ls("Invalid fallthrough for Not")}i(pF,"FromNot$5");function mF(e,r){return Rr(r)?Lr(e,r):yr(r)?Ct(e,r):gt(r)?Tn(e,r):xp(r)?I.True:I.False}i(mF,"FromNull$2");function jk(e,r){return gk(e)||qt(e)||Lo(e)?I.True:I.False}i(jk,"FromNumberRight");function bF(e,r){return Rr(r)?Lr(e,r):yr(r)?Ct(e,r):gt(r)?Tn(e,r):Lo(r)||qt(r)?I.True:I.False}i(bF,"FromNumber$2");function Ht(e,r){return Object.getOwnPropertyNames(e.properties).length===r}i(Ht,"IsObjectPropertyCount");function dy(e){return Xd(e)}i(dy,"IsObjectStringLike");function fy(e){return Ht(e,0)||Ht(e,1)&&"description"in e.properties&&Bo(e.properties.description)&&e.properties.description.anyOf.length===2&&(Wn(e.properties.description.anyOf[0])&&ia(e.properties.description.anyOf[1])||Wn(e.properties.description.anyOf[1])&&ia(e.properties.description.anyOf[0]))}i(fy,"IsObjectSymbolLike");function f0(e){return Ht(e,0)}i(f0,"IsObjectNumberLike");function gy(e){return Ht(e,0)}i(gy,"IsObjectBooleanLike");function vF(e){return Ht(e,0)}i(vF,"IsObjectBigIntLike");function yF(e){return Ht(e,0)}i(yF,"IsObjectDateLike");function wF(e){return Xd(e)}i(wF,"IsObjectUint8ArrayLike");function kF(e){const r=Da();return Ht(e,0)||Ht(e,1)&&"length"in e.properties&&Sn(Ve(e.properties.length,r))===I.True}i(kF,"IsObjectFunctionLike");function $F(e){return Ht(e,0)}i($F,"IsObjectConstructorLike");function Xd(e){const r=Da();return Ht(e,0)||Ht(e,1)&&"length"in e.properties&&Sn(Ve(e.properties.length,r))===I.True}i(Xd,"IsObjectArrayLike");function xF(e){const r=Au([Zl()],Zl());return Ht(e,0)||Ht(e,1)&&"then"in e.properties&&Sn(Ve(e.properties.then,r))===I.True}i(xF,"IsObjectPromiseLike");function Uk(e,r){return Ve(e,r)===I.False||Hc(e)&&!Hc(r)?I.False:I.True}i(Uk,"Property");function Ct(e,r){return Kn(e)?I.False:Vn(e)?I.Union:Ci(e)||fk(e)&&dy(r)||gk(e)&&f0(r)||hk(e)&&gy(r)||Hl(e)&&fy(r)||_d(e)&&vF(r)||Wn(e)&&dy(r)||Hl(e)&&fy(r)||qt(e)&&f0(r)||Lo(e)&&f0(r)||$a(e)&&gy(r)||Eu(e)&&wF(r)||qd(e)&&yF(r)||zd(e)&&$F(r)||Vd(e)&&kF(r)?I.True:gt(e)&&Wn(zg(e))?r[Bd]==="Record"?I.True:I.False:gt(e)&&qt(zg(e))&&Ht(r,0)?I.True:I.False}i(Ct,"FromObjectRight");function DF(e,r){return Rr(r)?Lr(e,r):gt(r)?Tn(e,r):yr(r)?(()=>{for(const t of Object.getOwnPropertyNames(r.properties)){if(!(t in e.properties)&&!Hc(r.properties[t]))return I.False;if(Hc(r.properties[t]))return I.True;if(Uk(e.properties[t],r.properties[t])===I.False)return I.False}return I.True})():I.False}i(DF,"FromObject$b");function CF(e,r){return Rr(r)?Lr(e,r):yr(r)&&xF(r)?I.True:Dp(r)?Sn(Ve(e.item,r.item)):I.False}i(CF,"FromPromise$4");function zg(e){return hs in e.patternProperties?Da():ps in e.patternProperties?aa():Ls("Unknown record key pattern")}i(zg,"RecordKey$1");function qg(e){return hs in e.patternProperties?e.patternProperties[hs]:ps in e.patternProperties?e.patternProperties[ps]:Ls("Unable to get record value schema")}i(qg,"RecordValue$1");function Tn(e,r){const[t,n]=[zg(r),qg(r)];return fk(e)&&qt(t)&&Sn(Ve(e,n))===I.True?I.True:Eu(e)&&qt(t)||Wn(e)&&qt(t)||ka(e)&&qt(t)?Ve(e,n):yr(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(Uk(n,e.properties[o])===I.False)return I.False;return I.True})():I.False}i(Tn,"FromRecordRight");function EF(e,r){return Rr(r)?Lr(e,r):yr(r)?Ct(e,r):gt(r)?Ve(qg(e),qg(r)):I.False}i(EF,"FromRecord$7");function AF(e,r){const t=Kl(e)?aa():e,n=Kl(r)?aa():r;return Ve(t,n)}i(AF,"FromRegExp$2");function _k(e,r){return Di(e)&&Fr(e.const)||Wn(e)?I.True:I.False}i(_k,"FromStringRight");function FF(e,r){return Rr(r)?Lr(e,r):yr(r)?Ct(e,r):gt(r)?Tn(e,r):Wn(r)?I.True:I.False}i(FF,"FromString$2");function SF(e,r){return Rr(r)?Lr(e,r):yr(r)?Ct(e,r):gt(r)?Tn(e,r):Hl(r)?I.True:I.False}i(SF,"FromSymbol$2");function MF(e,r){return Gl(e)?Ve(Gc(e),r):Gl(r)?Ve(e,Gc(r)):Ls("Invalid fallthrough for TemplateLiteral")}i(MF,"FromTemplateLiteral$3");function TF(e,r){return ka(r)&&e.items!==void 0&&e.items.every(t=>Ve(t,r.items)===I.True)}i(TF,"IsArrayOfTuple");function PF(e,r){return Ci(e)?I.True:Kn(e)?I.False:Vn(e)?I.Union:I.False}i(PF,"FromTupleRight");function IF(e,r){return Rr(r)?Lr(e,r):yr(r)&&Xd(r)||ka(r)&&TF(e,r)?I.True:Wd(r)?Ir(e.items)&&!Ir(r.items)||!Ir(e.items)&&Ir(r.items)?I.False:Ir(e.items)&&!Ir(r.items)||e.items.every((t,n)=>Ve(t,r.items[n])===I.True)?I.True:I.False:I.False}i(IF,"FromTuple$7");function NF(e,r){return Rr(r)?Lr(e,r):yr(r)?Ct(e,r):gt(r)?Tn(e,r):Eu(r)?I.True:I.False}i(NF,"FromUint8Array$2");function BF(e,r){return Rr(r)?Lr(e,r):yr(r)?Ct(e,r):gt(r)?Tn(e,r):Kd(r)?LF(e):ia(r)?I.True:I.False}i(BF,"FromUndefined$2");function _p(e,r){return r.anyOf.some(t=>Ve(e,t)===I.True)?I.True:I.False}i(_p,"FromUnionRight");function OF(e,r){return e.anyOf.every(t=>Ve(t,r)===I.True)?I.True:I.False}i(OF,"FromUnion$9");function zk(e,r){return I.True}i(zk,"FromUnknownRight");function RF(e,r){return Ci(r)?Lk():xa(r)?Jd(e,r):Bo(r)?_p(e,r):Vn(r)?Up():Wn(r)?_k(e):qt(r)?jk(e):Lo(r)?Rk(e):$a(r)?Ok(e):ka(r)?tF(e):Wd(r)?PF(e):yr(r)?Ct(e,r):Kn(r)?I.True:I.False}i(RF,"FromUnknown$2");function LF(e,r){return ia(e)||ia(e)?I.True:I.False}i(LF,"FromVoidRight");function jF(e,r){return xa(r)?Jd(e,r):Bo(r)?_p(e,r):Kn(r)?zk():Vn(r)?Up():yr(r)?Ct(e,r):Kd(r)?I.True:I.False}i(jF,"FromVoid$2");function Ve(e,r){return Gl(e)||Gl(r)?MF(e,r):Kl(e)||Kl(r)?AF(e,r):gs(e)||gs(r)?pF(e,r):Vn(e)?rF(e,r):ka(e)?nF(e,r):_d(e)?iF(e,r):$a(e)?aF(e,r):kp(e)?oF(e,r):zd(e)?sF(e,r):qd(e)?lF(e,r):Vd(e)?uF(e,r):Lo(e)?cF(e,r):xa(e)?dF(e,r):$p(e)?fF(e,r):Di(e)?gF(e,r):Ci(e)?hF():xp(e)?mF(e,r):qt(e)?bF(e,r):yr(e)?DF(e,r):gt(e)?EF(e,r):Wn(e)?FF(e,r):Hl(e)?SF(e,r):Wd(e)?IF(e,r):Dp(e)?CF(e,r):Eu(e)?NF(e,r):ia(e)?BF(e,r):Bo(e)?OF(e,r):Kn(e)?RF(e,r):Kd(e)?jF(e,r):Ls(`Unknown left type operand '${e[z]}'`)}i(Ve,"Visit$6");function Fu(e,r){return Ve(e,r)}i(Fu,"ExtendsCheck");function UF(e,r,t,n,o){const a={};for(const s of globalThis.Object.getOwnPropertyNames(e))a[s]=zp(e[s],r,t,n,un(o));return a}i(UF,"FromProperties$b");function _F(e,r,t,n,o){return UF(e.properties,r,t,n,o)}i(_F,"FromMappedResult$6");function zF(e,r,t,n,o){const a=_F(e,r,t,n,o);return mt(a)}i(zF,"ExtendsFromMappedResult");function qF(e,r,t,n){const o=Fu(e,r);return o===I.Union?bt([t,n]):o===I.True?t:n}i(qF,"ExtendsResolve");function zp(e,r,t,n,o){return hn(e)?zF(e,r,t,n,o):va(e)?q(HF(e,r,t,n,o)):q(qF(e,r,t,n),o)}i(zp,"Extends");function VF(e,r,t,n,o){return{[e]:zp(Nr(e),r,t,n,un(o))}}i(VF,"FromPropertyKey$2");function WF(e,r,t,n,o){return e.reduce((a,s)=>({...a,...VF(s,r,t,n,o)}),{})}i(WF,"FromPropertyKeys$2");function KF(e,r,t,n,o){return WF(e.keys,r,t,n,o)}i(KF,"FromMappedKey$2");function HF(e,r,t,n,o){const a=KF(e,r,t,n,o);return mt(a)}i(HF,"ExtendsFromMappedKey");function GF(e){return e.allOf.every(r=>js(r))}i(GF,"Intersect");function ZF(e){return e.anyOf.some(r=>js(r))}i(ZF,"Union");function YF(e){return!js(e.not)}i(YF,"Not$1");function js(e){return e[z]==="Intersect"?GF(e):e[z]==="Union"?ZF(e):e[z]==="Not"?YF(e):e[z]==="Undefined"}i(js,"ExtendsUndefinedCheck");function JF(e,r){return qp(Gc(e),r)}i(JF,"ExcludeFromTemplateLiteral");function XF(e,r){const t=e.filter(n=>Fu(n,r)===I.False);return t.length===1?t[0]:bt(t)}i(XF,"ExcludeRest");function qp(e,r,t={}){return ya(e)?q(JF(e,r),t):hn(e)?q(rS(e,r),t):q(it(e)?XF(e.anyOf,r):Fu(e,r)!==I.False?wr():e,t)}i(qp,"Exclude");function QF(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=qp(e[n],r);return t}i(QF,"FromProperties$a");function eS(e,r){return QF(e.properties,r)}i(eS,"FromMappedResult$5");function rS(e,r){const t=eS(e,r);return mt(t)}i(rS,"ExcludeFromMappedResult");function tS(e,r){return Vp(Gc(e),r)}i(tS,"ExtractFromTemplateLiteral");function nS(e,r){const t=e.filter(n=>Fu(n,r)!==I.False);return t.length===1?t[0]:bt(t)}i(nS,"ExtractRest");function Vp(e,r,t){return ya(e)?q(tS(e,r),t):hn(e)?q(aS(e,r),t):q(it(e)?nS(e.anyOf,r):Fu(e,r)!==I.False?e:wr(),t)}i(Vp,"Extract");function oS(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Vp(e[n],r);return t}i(oS,"FromProperties$9");function iS(e,r){return oS(e.properties,r)}i(iS,"FromMappedResult$4");function aS(e,r){const t=iS(e,r);return mt(t)}i(aS,"ExtractFromMappedResult");function sS(e,r){return Ts(e)?q(e.returns,r):wr(r)}i(sS,"InstanceType");function qk(e){return Ai(Fi(e))}i(qk,"ReadonlyOptional");function Ea(e,r,t){return q({[z]:"Record",type:"object",patternProperties:{[e]:r}},t)}i(Ea,"RecordCreateFromPattern");function Wp(e,r,t){const n={};for(const o of e)n[o]=r;return ot(n,{...t,[Bd]:"Record"})}i(Wp,"RecordCreateFromKeys");function lS(e,r,t){return S9(e)?Wp(Ei(e),r,t):Ea(e.pattern,r,t)}i(lS,"FromTemplateLiteralKey");function uS(e,r,t){return Wp(Ei(bt(e)),r,t)}i(uS,"FromUnionKey");function cS(e,r,t){return Wp([e.toString()],r,t)}i(cS,"FromLiteralKey");function dS(e,r,t){return Ea(e.source,r,t)}i(dS,"FromRegExpKey");function fS(e,r,t){const n=Ir(e.pattern)?ps:e.pattern;return Ea(n,r,t)}i(fS,"FromStringKey");function gS(e,r,t){return Ea(ps,r,t)}i(gS,"FromAnyKey");function hS(e,r,t){return Ea(a9,r,t)}i(hS,"FromNeverKey");function pS(e,r,t){return ot({true:r,false:r},t)}i(pS,"FromBooleanKey");function mS(e,r,t){return Ea(hs,r,t)}i(mS,"FromIntegerKey");function bS(e,r,t){return Ea(hs,r,t)}i(bS,"FromNumberKey");function Vk(e,r,t={}){return it(e)?uS(e.anyOf,r,t):ya(e)?lS(e,r,t):ba(e)?cS(e.const,r,t):$u(e)?pS(e,r,t):Is(e)?mS(e,r,t):Ns(e)?bS(e,r,t):sk(e)?dS(e,r,t):Du(e)?fS(e,r,t):ok(e)?gS(e,r,t):xu(e)?hS(e,r,t):wr(t)}i(Vk,"Record");function Kp(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}i(Kp,"RecordPattern");function vS(e){const r=Kp(e);return r===ps?aa():r===hs?Da():aa({pattern:r})}i(vS,"RecordKey");function Wk(e){return e.patternProperties[Kp(e)]}i(Wk,"RecordValue");function yS(e,r){return r.parameters=Su(e,r.parameters),r.returns=Hn(e,r.returns),r}i(yS,"FromConstructor$4");function wS(e,r){return r.parameters=Su(e,r.parameters),r.returns=Hn(e,r.returns),r}i(wS,"FromFunction$4");function kS(e,r){return r.allOf=Su(e,r.allOf),r}i(kS,"FromIntersect$8");function $S(e,r){return r.anyOf=Su(e,r.anyOf),r}i($S,"FromUnion$8");function xS(e,r){return Ir(r.items)||(r.items=Su(e,r.items)),r}i(xS,"FromTuple$6");function DS(e,r){return r.items=Hn(e,r.items),r}i(DS,"FromArray$6");function CS(e,r){return r.items=Hn(e,r.items),r}i(CS,"FromAsyncIterator$4");function ES(e,r){return r.items=Hn(e,r.items),r}i(ES,"FromIterator$4");function AS(e,r){return r.item=Hn(e,r.item),r}i(AS,"FromPromise$3");function FS(e,r){const t=PS(e,r.properties);return{...r,...ot(t)}}i(FS,"FromObject$a");function SS(e,r){const t=Hn(e,vS(r)),n=Hn(e,Wk(r)),o=Vk(t,n);return{...r,...o}}i(SS,"FromRecord$6");function MS(e,r){return r.index in e?e[r.index]:Yd()}i(MS,"FromArgument$2");function TS(e,r){const t=mp(r),n=xi(r),o=Hn(e,r);return t&&n?qk(o):t&&!n?Ai(o):!t&&n?Fi(o):o}i(TS,"FromProperty$1");function PS(e,r){return globalThis.Object.getOwnPropertyNames(r).reduce((t,n)=>({...t,[n]:TS(e,r[n])}),{})}i(PS,"FromProperties$8");function Su(e,r){return r.map(t=>Hn(e,t))}i(Su,"FromTypes$1");function Hn(e,r){return Ts(r)?yS(e,r):Ps(r)?wS(e,r):Mn(r)?kS(e,r):it(r)?$S(e,r):wa(r)?xS(e,r):Ss(r)?DS(e,r):Od(r)?CS(e,r):Ld(r)?ES(e,r):jd(r)?AS(e,r):Zn(r)?FS(e,r):Ud(r)?SS(e,r):ik(r)?MS(e,r):r}i(Hn,"FromType$1");function IS(e,r){return Hn(r,gp(e))}i(IS,"Instantiate");function NS(e){return q({[z]:"Integer",type:"integer"},e)}i(NS,"Integer");function BS(e,r,t){return{[e]:Us(Nr(e),r,un(t))}}i(BS,"MappedIntrinsicPropertyKey");function OS(e,r,t){return e.reduce((o,a)=>({...o,...BS(a,r,t)}),{})}i(OS,"MappedIntrinsicPropertyKeys");function RS(e,r,t){return OS(e.keys,r,t)}i(RS,"MappedIntrinsicProperties");function LS(e,r,t){const n=RS(e,r,t);return mt(n)}i(LS,"IntrinsicFromMappedKey");function jS(e){const[r,t]=[e.slice(0,1),e.slice(1)];return[r.toLowerCase(),t].join("")}i(jS,"ApplyUncapitalize");function US(e){const[r,t]=[e.slice(0,1),e.slice(1)];return[r.toUpperCase(),t].join("")}i(US,"ApplyCapitalize");function _S(e){return e.toUpperCase()}i(_S,"ApplyUppercase");function zS(e){return e.toLowerCase()}i(zS,"ApplyLowercase");function qS(e,r,t){const n=Np(e.pattern);if(!Jl(n))return{...e,pattern:Kk(e.pattern,r)};const s=[...Hd(n)].map(f=>Nr(f)),l=Hk(s,r),u=bt(l);return $k([u],t)}i(qS,"FromTemplateLiteral$2");function Kk(e,r){return typeof e=="string"?r==="Uncapitalize"?jS(e):r==="Capitalize"?US(e):r==="Uppercase"?_S(e):r==="Lowercase"?zS(e):e:e.toString()}i(Kk,"FromLiteralValue");function Hk(e,r){return e.map(t=>Us(t,r))}i(Hk,"FromRest$2");function Us(e,r,t={}){return va(e)?LS(e,r,t):ya(e)?qS(e,r,t):it(e)?bt(Hk(e.anyOf,r),t):ba(e)?Nr(Kk(e.const,r),t):q(e,t)}i(Us,"Intrinsic");function VS(e,r={}){return Us(e,"Capitalize",r)}i(VS,"Capitalize");function WS(e,r={}){return Us(e,"Lowercase",r)}i(WS,"Lowercase");function KS(e,r={}){return Us(e,"Uncapitalize",r)}i(KS,"Uncapitalize");function HS(e,r={}){return Us(e,"Uppercase",r)}i(HS,"Uppercase");function GS(e,r,t){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=Qd(e[o],r,un(t));return n}i(GS,"FromProperties$7");function ZS(e,r,t){return GS(e.properties,r,t)}i(ZS,"FromMappedResult$3");function YS(e,r,t){const n=ZS(e,r,t);return mt(n)}i(YS,"OmitFromMappedResult");function JS(e,r){return e.map(t=>Hp(t,r))}i(JS,"FromIntersect$7");function XS(e,r){return e.map(t=>Hp(t,r))}i(XS,"FromUnion$7");function QS(e,r){const{[r]:t,...n}=e;return n}i(QS,"FromProperty");function eM(e,r){return r.reduce((t,n)=>QS(t,n),e)}i(eM,"FromProperties$6");function rM(e,r,t){const n=dn(e,[zt,"$id","required","properties"]),o=eM(t,r);return ot(o,n)}i(rM,"FromObject$9");function tM(e){const r=e.reduce((t,n)=>ak(n)?[...t,Nr(n)]:t,[]);return bt(r)}i(tM,"UnionFromPropertyKeys$1");function Hp(e,r){return Mn(e)?Si(JS(e.allOf,r)):it(e)?bt(XS(e.anyOf,r)):Zn(e)?rM(e,r,e.properties):ot({})}i(Hp,"OmitResolve");function Qd(e,r,t){const n=Zt(r)?tM(r):r,o=It(r)?Ei(r):r,a=Kt(e),s=Kt(r);return hn(e)?YS(e,o,t):va(r)?aM(e,r,t):a&&s?Kr("Omit",[e,n],t):!a&&s?Kr("Omit",[e,n],t):a&&!s?Kr("Omit",[e,n],t):q({...Hp(e,o),...t})}i(Qd,"Omit");function nM(e,r,t){return{[r]:Qd(e,[r],un(t))}}i(nM,"FromPropertyKey$1");function oM(e,r,t){return r.reduce((n,o)=>({...n,...nM(e,o,t)}),{})}i(oM,"FromPropertyKeys$1");function iM(e,r,t){return oM(e,r.keys,t)}i(iM,"FromMappedKey$1");function aM(e,r,t){const n=iM(e,r,t);return mt(n)}i(aM,"OmitFromMappedKey");function sM(e,r,t){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=ef(e[o],r,un(t));return n}i(sM,"FromProperties$5");function lM(e,r,t){return sM(e.properties,r,t)}i(lM,"FromMappedResult$2");function uM(e,r,t){const n=lM(e,r,t);return mt(n)}i(uM,"PickFromMappedResult");function cM(e,r){return e.map(t=>Gp(t,r))}i(cM,"FromIntersect$6");function dM(e,r){return e.map(t=>Gp(t,r))}i(dM,"FromUnion$6");function fM(e,r){const t={};for(const n of r)n in e&&(t[n]=e[n]);return t}i(fM,"FromProperties$4");function gM(e,r,t){const n=dn(e,[zt,"$id","required","properties"]),o=fM(t,r);return ot(o,n)}i(gM,"FromObject$8");function hM(e){const r=e.reduce((t,n)=>ak(n)?[...t,Nr(n)]:t,[]);return bt(r)}i(hM,"UnionFromPropertyKeys");function Gp(e,r){return Mn(e)?Si(cM(e.allOf,r)):it(e)?bt(dM(e.anyOf,r)):Zn(e)?gM(e,r,e.properties):ot({})}i(Gp,"PickResolve");function ef(e,r,t){const n=Zt(r)?hM(r):r,o=It(r)?Ei(r):r,a=Kt(e),s=Kt(r);return hn(e)?uM(e,o,t):va(r)?vM(e,r,t):a&&s?Kr("Pick",[e,n],t):!a&&s?Kr("Pick",[e,n],t):a&&!s?Kr("Pick",[e,n],t):q({...Gp(e,o),...t})}i(ef,"Pick");function pM(e,r,t){return{[r]:ef(e,[r],un(t))}}i(pM,"FromPropertyKey");function mM(e,r,t){return r.reduce((n,o)=>({...n,...pM(e,o,t)}),{})}i(mM,"FromPropertyKeys");function bM(e,r,t){return mM(e,r.keys,t)}i(bM,"FromMappedKey");function vM(e,r,t){const n=bM(e,r,t);return mt(n)}i(vM,"PickFromMappedKey");function yM(e,r){return Kr("Partial",[Kr(e,r)])}i(yM,"FromComputed$2");function wM(e){return Kr("Partial",[Rs(e)])}i(wM,"FromRef$6");function kM(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=Fi(e[t]);return r}i(kM,"FromProperties$3");function $M(e,r){const t=dn(e,[zt,"$id","required","properties"]),n=kM(r);return ot(n,t)}i($M,"FromObject$7");function hy(e){return e.map(r=>Gk(r))}i(hy,"FromRest$1");function Gk(e){return Ms(e)?yM(e.target,e.parameters):Kt(e)?wM(e.$ref):Mn(e)?Si(hy(e.allOf)):it(e)?bt(hy(e.anyOf)):Zn(e)?$M(e,e.properties):Rd(e)||$u(e)||Is(e)||ba(e)||bp(e)||Ns(e)||Du(e)||vp(e)||Cu(e)?e:ot({})}i(Gk,"PartialResolve");function Zp(e,r){return hn(e)?CM(e,r):q({...Gk(e),...r})}i(Zp,"Partial");function xM(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Zp(e[n],un(r));return t}i(xM,"FromProperties$2");function DM(e,r){return xM(e.properties,r)}i(DM,"FromMappedResult$1");function CM(e,r){const t=DM(e,r);return mt(t)}i(CM,"PartialFromMappedResult");function EM(e,r){return Kr("Required",[Kr(e,r)])}i(EM,"FromComputed$1");function AM(e){return Kr("Required",[Rs(e)])}i(AM,"FromRef$5");function FM(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=dn(e[t],[Ro]);return r}i(FM,"FromProperties$1");function SM(e,r){const t=dn(e,[zt,"$id","required","properties"]),n=FM(r);return ot(n,t)}i(SM,"FromObject$6");function py(e){return e.map(r=>Zk(r))}i(py,"FromRest");function Zk(e){return Ms(e)?EM(e.target,e.parameters):Kt(e)?AM(e.$ref):Mn(e)?Si(py(e.allOf)):it(e)?bt(py(e.anyOf)):Zn(e)?SM(e,e.properties):Rd(e)||$u(e)||Is(e)||ba(e)||bp(e)||Ns(e)||Du(e)||vp(e)||Cu(e)?e:ot({})}i(Zk,"RequiredResolve");function Yp(e,r){return hn(e)?PM(e,r):q({...Zk(e),...r})}i(Yp,"Required");function MM(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Yp(e[n],r);return t}i(MM,"FromProperties");function TM(e,r){return MM(e.properties,r)}i(TM,"FromMappedResult");function PM(e,r){const t=TM(e,r);return mt(t)}i(PM,"RequiredFromMappedResult");function IM(e,r){return r.map(t=>Kt(t)?Jp(e,t.$ref):fn(e,t))}i(IM,"DereferenceParameters");function Jp(e,r){return r in e?Kt(e[r])?Jp(e,e[r].$ref):fn(e,e[r]):wr()}i(Jp,"Dereference");function NM(e){return Zd(e[0])}i(NM,"FromAwaited");function BM(e){return Gd(e[0],e[1])}i(BM,"FromIndex");function OM(e){return Lp(e[0])}i(OM,"FromKeyOf");function RM(e){return Zp(e[0])}i(RM,"FromPartial");function LM(e){return Qd(e[0],e[1])}i(LM,"FromOmit");function jM(e){return ef(e[0],e[1])}i(jM,"FromPick");function UM(e){return Yp(e[0])}i(UM,"FromRequired");function _M(e,r,t){const n=IM(e,t);return r==="Awaited"?NM(n):r==="Index"?BM(n):r==="KeyOf"?OM(n):r==="Partial"?RM(n):r==="Omit"?LM(n):r==="Pick"?jM(n):r==="Required"?UM(n):wr()}i(_M,"FromComputed");function zM(e,r){return Mp(fn(e,r))}i(zM,"FromArray$5");function qM(e,r){return Tp(fn(e,r))}i(qM,"FromAsyncIterator$3");function VM(e,r,t){return Pp(Mu(e,r),fn(e,t))}i(VM,"FromConstructor$3");function WM(e,r,t){return Au(Mu(e,r),fn(e,t))}i(WM,"FromFunction$3");function KM(e,r){return Si(Mu(e,r))}i(KM,"FromIntersect$5");function HM(e,r){return Rp(fn(e,r))}i(HM,"FromIterator$3");function GM(e,r){return ot(globalThis.Object.keys(r).reduce((t,n)=>({...t,[n]:fn(e,r[n])}),{}))}i(GM,"FromObject$5");function ZM(e,r){const[t,n]=[fn(e,Wk(r)),Kp(r)],o=gp(r);return o.patternProperties[n]=t,o}i(ZM,"FromRecord$5");function YM(e,r){return Kt(r)?{...Jp(e,r.$ref),[zt]:r[zt]}:r}i(YM,"FromTransform");function JM(e,r){return Os(Mu(e,r))}i(JM,"FromTuple$5");function XM(e,r){return bt(Mu(e,r))}i(XM,"FromUnion$5");function Mu(e,r){return r.map(t=>fn(e,t))}i(Mu,"FromTypes");function fn(e,r){return xi(r)?q(fn(e,dn(r,[Ro])),r):mp(r)?q(fn(e,dn(r,[ku])),r):tr(r)?q(YM(e,r),r):Ss(r)?q(zM(e,r.items),r):Od(r)?q(qM(e,r.items),r):Ms(r)?q(_M(e,r.target,r.parameters)):Ts(r)?q(VM(e,r.parameters,r.returns),r):Ps(r)?q(WM(e,r.parameters,r.returns),r):Mn(r)?q(KM(e,r.allOf),r):Ld(r)?q(HM(e,r.items),r):Zn(r)?q(GM(e,r.properties),r):Ud(r)?q(ZM(e,r)):wa(r)?q(JM(e,r.items||[]),r):it(r)?q(XM(e,r.anyOf),r):r}i(fn,"FromType");function QM(e,r){return r in e?fn(e,e[r]):wr()}i(QM,"ComputeType");function eT(e){return globalThis.Object.getOwnPropertyNames(e).reduce((r,t)=>({...r,[t]:QM(e,t)}),{})}i(eT,"ComputeModuleProperties");class rT{static{i(this,"TModule")}constructor(r){const t=eT(r),n=this.WithIdentifiers(t);this.$defs=n}Import(r,t){const n={...this.$defs,[r]:q(this.$defs[r],t)};return q({[z]:"Import",$defs:n,$ref:r})}WithIdentifiers(r){return globalThis.Object.getOwnPropertyNames(r).reduce((t,n)=>({...t,[n]:{...r[n],$id:n}}),{})}}function tT(e){return new rT(e)}i(tT,"Module");function nT(e,r){return q({[z]:"Not",not:e},r)}i(nT,"Not");function oT(e,r){return Ps(e)?Os(e.parameters,r):wr()}i(oT,"Parameters");let iT=0;function aT(e,r={}){Ir(r.$id)&&(r.$id=`T${iT++}`);const t=gp(e({[z]:"This",$ref:`${r.$id}`}));return t.$id=r.$id,q({[Bd]:"Recursive",...t},r)}i(aT,"Recursive");function sT(e,r){const t=Fr(e)?new globalThis.RegExp(e):e;return q({[z]:"RegExp",type:"RegExp",source:t.source,flags:t.flags},r)}i(sT,"RegExp$1");function lT(e){return Mn(e)?e.allOf:it(e)?e.anyOf:wa(e)?e.items??[]:[]}i(lT,"RestResolve");function uT(e){return lT(e)}i(uT,"Rest");function cT(e,r){return Ps(e)?q(e.returns,r):wr(r)}i(cT,"ReturnType");class dT{static{i(this,"TransformDecodeBuilder")}constructor(r){this.schema=r}Decode(r){return new fT(this.schema,r)}}class fT{static{i(this,"TransformEncodeBuilder")}constructor(r,t){this.schema=r,this.decode=t}EncodeTransform(r,t){const a={Encode:i(s=>t[zt].Encode(r(s)),"Encode"),Decode:i(s=>this.decode(t[zt].Decode(s)),"Decode")};return{...t,[zt]:a}}EncodeSchema(r,t){const n={Decode:this.decode,Encode:r};return{...t,[zt]:n}}Encode(r){return tr(this.schema)?this.EncodeTransform(r,this.schema):this.EncodeSchema(r,this.schema)}}function gT(e){return new dT(e)}i(gT,"Transform");function hT(e={}){return q({[z]:e[z]??"Unsafe"},e)}i(hT,"Unsafe");function pT(e){return q({[z]:"Void",type:"void"},e)}i(pT,"Void");const mT=Object.freeze(Object.defineProperty({__proto__:null,Any:Zl,Argument:g9,Array:Mp,AsyncIterator:Tp,Awaited:Zd,BigInt:Bp,Boolean:wk,Capitalize:VS,Composite:G7,Const:J7,Constructor:Pp,ConstructorParameters:X7,Date:Tk,Enum:Q7,Exclude:qp,Extends:zp,Extract:Vp,Function:Au,Index:Gd,InstanceType:sS,Instantiate:IS,Integer:NS,Intersect:Si,Iterator:Rp,KeyOf:Lp,Literal:Nr,Lowercase:WS,Mapped:m7,Module:tT,Never:wr,Not:nT,Null:Pk,Number:Da,Object:ot,Omit:Qd,Optional:Fi,Parameters:oT,Partial:Zp,Pick:ef,Promise:Ck,Readonly:Ai,ReadonlyOptional:qk,Record:Vk,Recursive:aT,Ref:Rs,RegExp:sT,Required:Yp,Rest:uT,ReturnType:cT,String:aa,Symbol:Ik,TemplateLiteral:$k,Transform:gT,Tuple:Os,Uint8Array:Bk,Uncapitalize:KS,Undefined:Nk,Union:bt,Unknown:Yd,Unsafe:hT,Uppercase:HS,Void:pT},Symbol.toStringTag,{value:"Module"})),Xe=mT;function Yk(e){switch(e.errorType){case T.ArrayContains:return"Expected array to contain at least one matching value";case T.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case T.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case T.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case T.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case T.ArrayUniqueItems:return"Expected array elements to be unique";case T.Array:return"Expected array";case T.AsyncIterator:return"Expected AsyncIterator";case T.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case T.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case T.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case T.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case T.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case T.BigInt:return"Expected bigint";case T.Boolean:return"Expected boolean";case T.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case T.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case T.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case T.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case T.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case T.Date:return"Expected Date";case T.Function:return"Expected function";case T.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case T.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case T.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case T.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case T.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case T.Integer:return"Expected integer";case T.IntersectUnevaluatedProperties:return"Unexpected property";case T.Intersect:return"Expected all values to match";case T.Iterator:return"Expected Iterator";case T.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case T.Never:return"Never";case T.Not:return"Value should not match";case T.Null:return"Expected null";case T.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case T.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case T.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case T.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case T.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case T.Number:return"Expected number";case T.Object:return"Expected object";case T.ObjectAdditionalProperties:return"Unexpected property";case T.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case T.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case T.ObjectRequiredProperty:return"Expected required property";case T.Promise:return"Expected Promise";case T.RegExp:return"Expected string to match regular expression";case T.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case T.StringFormat:return`Expected string to match '${e.schema.format}' format`;case T.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case T.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case T.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case T.String:return"Expected string";case T.Symbol:return"Expected symbol";case T.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case T.Tuple:return"Expected tuple";case T.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case T.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case T.Uint8Array:return"Expected Uint8Array";case T.Undefined:return"Expected undefined";case T.Union:return"Expected union value";case T.Void:return"Expected void";case T.Kind:return`Expected kind '${e.schema[z]}'`;default:return"Unknown error type"}}i(Yk,"DefaultErrorFunction");let Jk=Yk;function bT(e){Jk=e}i(bT,"SetErrorFunction");function vT(){return Jk}i(vT,"GetErrorFunction");class yT extends pt{static{i(this,"TypeDereferenceError")}constructor(r){super(`Unable to dereference schema with $id '${r.$ref}'`),this.schema=r}}function wT(e,r){const t=r.find(n=>n.$id===e.$ref);if(t===void 0)throw new yT(e);return Pn(t,r)}i(wT,"Resolve");function rf(e,r){return!on(e.$id)||r.some(t=>t.$id===e.$id)||r.push(e),r}i(rf,"Pushref");function Pn(e,r){return e[z]==="This"||e[z]==="Ref"?wT(e,r):e}i(Pn,"Deref");class kT extends pt{static{i(this,"ValueHashError")}constructor(r){super("Unable to hash value"),this.value=r}}var gn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(gn||(gn={}));let Va=BigInt("14695981039346656037");const[$T,xT]=[BigInt("1099511628211"),BigInt("18446744073709551616")],DT=Array.from({length:256}).map((e,r)=>BigInt(r)),Xk=new Float64Array(1),Qk=new DataView(Xk.buffer),e$=new Uint8Array(Xk.buffer);function*CT(e){const r=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let t=0;t<r;t++)yield e>>8*(r-1-t)&255}i(CT,"NumberToBytes");function ET(e){xt(gn.Array);for(const r of e)vs(r)}i(ET,"ArrayType");function AT(e){xt(gn.Boolean),xt(e?1:0)}i(AT,"BooleanType");function FT(e){xt(gn.BigInt),Qk.setBigInt64(0,e);for(const r of e$)xt(r)}i(FT,"BigIntType");function ST(e){xt(gn.Date),vs(e.getTime())}i(ST,"DateType");function MT(e){xt(gn.Null)}i(MT,"NullType");function TT(e){xt(gn.Number),Qk.setFloat64(0,e);for(const r of e$)xt(r)}i(TT,"NumberType");function PT(e){xt(gn.Object);for(const r of globalThis.Object.getOwnPropertyNames(e).sort())vs(r),vs(e[r])}i(PT,"ObjectType");function IT(e){xt(gn.String);for(let r=0;r<e.length;r++)for(const t of CT(e.charCodeAt(r)))xt(t)}i(IT,"StringType");function NT(e){xt(gn.Symbol),vs(e.description)}i(NT,"SymbolType");function BT(e){xt(gn.Uint8Array);for(let r=0;r<e.length;r++)xt(e[r])}i(BT,"Uint8ArrayType");function OT(e){return xt(gn.Undefined)}i(OT,"UndefinedType");function vs(e){if(cn(e))return ET(e);if(Id(e))return AT(e);if(xo(e))return FT(e);if(hp(e))return ST(e);if(Pd(e))return MT();if(pe(e))return TT(e);if(lo(e))return PT(e);if(on(e))return IT(e);if(Nd(e))return NT(e);if(pp(e))return BT(e);if($i(e))return OT();throw new kT(e)}i(vs,"Visit$5");function xt(e){Va=Va^DT[e],Va=Va*$T%xT}i(xt,"FNV1A64");function Xp(e){return Va=BigInt("14695981039346656037"),vs(e),Va}i(Xp,"Hash");class RT extends pt{static{i(this,"ValueCheckUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}function LT(e){return e[z]==="Any"||e[z]==="Unknown"}i(LT,"IsAnyOrUnknown");function $e(e){return e!==void 0}i($e,"IsDefined$1");function jT(e,r,t){return!0}i(jT,"FromAny$1");function UT(e,r,t){return!0}i(UT,"FromArgument$1");function _T(e,r,t){if(!cn(t)||$e(e.minItems)&&!(t.length>=e.minItems)||$e(e.maxItems)&&!(t.length<=e.maxItems))return!1;for(const a of t)if(!rt(e.items,r,a))return!1;if(e.uniqueItems===!0&&!(function(){const a=new Set;for(const s of t){const l=Xp(s);if(a.has(l))return!1;a.add(l)}return!0})())return!1;if(!($e(e.contains)||pe(e.minContains)||pe(e.maxContains)))return!0;const n=$e(e.contains)?e.contains:wr(),o=t.reduce((a,s)=>rt(n,r,s)?a+1:a,0);return!(o===0||pe(e.minContains)&&o<e.minContains||pe(e.maxContains)&&o>e.maxContains)}i(_T,"FromArray$4");function zT(e,r,t){return J5(t)}i(zT,"FromAsyncIterator$2");function qT(e,r,t){return!(!xo(t)||$e(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||$e(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||$e(e.maximum)&&!(t<=e.maximum)||$e(e.minimum)&&!(t>=e.minimum)||$e(e.multipleOf)&&t%e.multipleOf!==BigInt(0))}i(qT,"FromBigInt$1");function VT(e,r,t){return Id(t)}i(VT,"FromBoolean$1");function WT(e,r,t){return rt(e.returns,r,t.prototype)}i(WT,"FromConstructor$2");function KT(e,r,t){return!(!hp(t)||$e(e.exclusiveMaximumTimestamp)&&!(t.getTime()<e.exclusiveMaximumTimestamp)||$e(e.exclusiveMinimumTimestamp)&&!(t.getTime()>e.exclusiveMinimumTimestamp)||$e(e.maximumTimestamp)&&!(t.getTime()<=e.maximumTimestamp)||$e(e.minimumTimestamp)&&!(t.getTime()>=e.minimumTimestamp)||$e(e.multipleOfTimestamp)&&t.getTime()%e.multipleOfTimestamp!==0)}i(KT,"FromDate$1");function HT(e,r,t){return tk(t)}i(HT,"FromFunction$2");function GT(e,r,t){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return rt(o,[...r,...n],t)}i(GT,"FromImport$4");function ZT(e,r,t){return!(!rk(t)||$e(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||$e(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||$e(e.maximum)&&!(t<=e.maximum)||$e(e.minimum)&&!(t>=e.minimum)||$e(e.multipleOf)&&t%e.multipleOf!==0)}i(ZT,"FromInteger$1");function YT(e,r,t){const n=e.allOf.every(o=>rt(o,r,t));if(e.unevaluatedProperties===!1){const o=new RegExp(bs(e)),a=Object.getOwnPropertyNames(t).every(s=>o.test(s));return n&&a}else if(It(e.unevaluatedProperties)){const o=new RegExp(bs(e)),a=Object.getOwnPropertyNames(t).every(s=>o.test(s)||rt(e.unevaluatedProperties,r,t[s]));return n&&a}else return n}i(YT,"FromIntersect$4");function JT(e,r,t){return X5(t)}i(JT,"FromIterator$2");function XT(e,r,t){return t===e.const}i(XT,"FromLiteral$1");function QT(e,r,t){return!1}i(QT,"FromNever$1");function eP(e,r,t){return!rt(e.not,r,t)}i(eP,"FromNot$4");function rP(e,r,t){return Pd(t)}i(rP,"FromNull$1");function tP(e,r,t){return!(!Ar.IsNumberLike(t)||$e(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||$e(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||$e(e.minimum)&&!(t>=e.minimum)||$e(e.maximum)&&!(t<=e.maximum)||$e(e.multipleOf)&&t%e.multipleOf!==0)}i(tP,"FromNumber$1");function nP(e,r,t){if(!Ar.IsObjectLike(t)||$e(e.minProperties)&&!(Object.getOwnPropertyNames(t).length>=e.minProperties)||$e(e.maxProperties)&&!(Object.getOwnPropertyNames(t).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const a=e.properties[o];if(e.required&&e.required.includes(o)){if(!rt(a,r,t[o])||(js(a)||LT(a))&&!(o in t))return!1}else if(Ar.IsExactOptionalProperty(t,o)&&!rt(a,r,t[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(t);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(a=>n.includes(a))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(t).every(a=>n.includes(a)||rt(e.additionalProperties,r,t[a])):!0}i(nP,"FromObject$4");function oP(e,r,t){return Q5(t)}i(oP,"FromPromise$2");function iP(e,r,t){if(!Ar.IsRecordLike(t)||$e(e.minProperties)&&!(Object.getOwnPropertyNames(t).length>=e.minProperties)||$e(e.maxProperties)&&!(Object.getOwnPropertyNames(t).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],a=new RegExp(n),s=Object.entries(t).every(([f,g])=>a.test(f)?rt(o,r,g):!0),l=typeof e.additionalProperties=="object"?Object.entries(t).every(([f,g])=>a.test(f)?!0:rt(e.additionalProperties,r,g)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(t).every(f=>a.test(f)):!0;return s&&l&&u}i(iP,"FromRecord$4");function aP(e,r,t){return rt(Pn(e,r),r,t)}i(aP,"FromRef$4");function sP(e,r,t){const n=new RegExp(e.source,e.flags);return $e(e.minLength)&&!(t.length>=e.minLength)||$e(e.maxLength)&&!(t.length<=e.maxLength)?!1:n.test(t)}i(sP,"FromRegExp$1");function lP(e,r,t){return!on(t)||$e(e.minLength)&&!(t.length>=e.minLength)||$e(e.maxLength)&&!(t.length<=e.maxLength)||$e(e.pattern)&&!new RegExp(e.pattern).test(t)?!1:$e(e.format)?Cp(e.format)?Ep(e.format)(t):!1:!0}i(lP,"FromString$1");function uP(e,r,t){return Nd(t)}i(uP,"FromSymbol$1");function cP(e,r,t){return on(t)&&new RegExp(e.pattern).test(t)}i(cP,"FromTemplateLiteral$1");function dP(e,r,t){return rt(Pn(e,r),r,t)}i(dP,"FromThis$4");function fP(e,r,t){if(!cn(t)||e.items===void 0&&t.length!==0||t.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!rt(e.items[n],r,t[n]))return!1;return!0}i(fP,"FromTuple$4");function gP(e,r,t){return $i(t)}i(gP,"FromUndefined$1");function hP(e,r,t){return e.anyOf.some(n=>rt(n,r,t))}i(hP,"FromUnion$4");function pP(e,r,t){return!(!pp(t)||$e(e.maxByteLength)&&!(t.length<=e.maxByteLength)||$e(e.minByteLength)&&!(t.length>=e.minByteLength))}i(pP,"FromUint8Array$1");function mP(e,r,t){return!0}i(mP,"FromUnknown$1");function bP(e,r,t){return Ar.IsVoidLike(t)}i(bP,"FromVoid$1");function vP(e,r,t){return mi(e[z])?Sp(e[z])(e,t):!1}i(vP,"FromKind$1");function rt(e,r,t){const n=$e(e.$id)?rf(e,r):r,o=e;switch(o[z]){case"Any":return jT();case"Argument":return UT();case"Array":return _T(o,n,t);case"AsyncIterator":return zT(o,n,t);case"BigInt":return qT(o,n,t);case"Boolean":return VT(o,n,t);case"Constructor":return WT(o,n,t);case"Date":return KT(o,n,t);case"Function":return HT(o,n,t);case"Import":return GT(o,n,t);case"Integer":return ZT(o,n,t);case"Intersect":return YT(o,n,t);case"Iterator":return JT(o,n,t);case"Literal":return XT(o,n,t);case"Never":return QT();case"Not":return eP(o,n,t);case"Null":return rP(o,n,t);case"Number":return tP(o,n,t);case"Object":return nP(o,n,t);case"Promise":return oP(o,n,t);case"Record":return iP(o,n,t);case"Ref":return aP(o,n,t);case"RegExp":return sP(o,n,t);case"String":return lP(o,n,t);case"Symbol":return uP(o,n,t);case"TemplateLiteral":return cP(o,n,t);case"This":return dP(o,n,t);case"Tuple":return fP(o,n,t);case"Undefined":return gP(o,n,t);case"Union":return hP(o,n,t);case"Uint8Array":return pP(o,n,t);case"Unknown":return mP();case"Void":return bP(o,n,t);default:if(!mi(o[z]))throw new RT(o);return vP(o,n,t)}}i(rt,"Visit$4");function Zc(...e){return e.length===3?rt(e[0],e[1],e[2]):rt(e[0],[],e[1])}i(Zc,"Check");var T;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(T||(T={}));class yP extends pt{static{i(this,"ValueErrorsUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}function yo(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}i(yo,"EscapeKey");function ke(e){return e!==void 0}i(ke,"IsDefined");class r${static{i(this,"ValueErrorIterator")}constructor(r){this.iterator=r}[Symbol.iterator](){return this.iterator}First(){const r=this.iterator.next();return r.done?void 0:r.value}}function W(e,r,t,n,o=[]){return{type:e,schema:r,path:t,value:n,message:vT()({errorType:e,path:t,schema:r,value:n,errors:o}),errors:o}}i(W,"Create");function*wP(e,r,t,n){}i(wP,"FromAny");function*kP(e,r,t,n){}i(kP,"FromArgument");function*$P(e,r,t,n){if(!cn(n))return yield W(T.Array,e,t,n);ke(e.minItems)&&!(n.length>=e.minItems)&&(yield W(T.ArrayMinItems,e,t,n)),ke(e.maxItems)&&!(n.length<=e.maxItems)&&(yield W(T.ArrayMaxItems,e,t,n));for(let s=0;s<n.length;s++)yield*tt(e.items,r,`${t}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const l of n){const u=Xp(l);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield W(T.ArrayUniqueItems,e,t,n)),!(ke(e.contains)||ke(e.minContains)||ke(e.maxContains)))return;const o=ke(e.contains)?e.contains:wr(),a=n.reduce((s,l,u)=>tt(o,r,`${t}${u}`,l).next().done===!0?s+1:s,0);a===0&&(yield W(T.ArrayContains,e,t,n)),pe(e.minContains)&&a<e.minContains&&(yield W(T.ArrayMinContains,e,t,n)),pe(e.maxContains)&&a>e.maxContains&&(yield W(T.ArrayMaxContains,e,t,n))}i($P,"FromArray$3");function*xP(e,r,t,n){J5(n)||(yield W(T.AsyncIterator,e,t,n))}i(xP,"FromAsyncIterator$1");function*DP(e,r,t,n){if(!xo(n))return yield W(T.BigInt,e,t,n);ke(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(T.BigIntExclusiveMaximum,e,t,n)),ke(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(T.BigIntExclusiveMinimum,e,t,n)),ke(e.maximum)&&!(n<=e.maximum)&&(yield W(T.BigIntMaximum,e,t,n)),ke(e.minimum)&&!(n>=e.minimum)&&(yield W(T.BigIntMinimum,e,t,n)),ke(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield W(T.BigIntMultipleOf,e,t,n))}i(DP,"FromBigInt");function*CP(e,r,t,n){Id(n)||(yield W(T.Boolean,e,t,n))}i(CP,"FromBoolean");function*EP(e,r,t,n){yield*tt(e.returns,r,t,n.prototype)}i(EP,"FromConstructor$1");function*AP(e,r,t,n){if(!hp(n))return yield W(T.Date,e,t,n);ke(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield W(T.DateExclusiveMaximumTimestamp,e,t,n)),ke(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield W(T.DateExclusiveMinimumTimestamp,e,t,n)),ke(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield W(T.DateMaximumTimestamp,e,t,n)),ke(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield W(T.DateMinimumTimestamp,e,t,n)),ke(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield W(T.DateMultipleOfTimestamp,e,t,n))}i(AP,"FromDate");function*FP(e,r,t,n){tk(n)||(yield W(T.Function,e,t,n))}i(FP,"FromFunction$1");function*SP(e,r,t,n){const o=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];yield*tt(a,[...r,...o],t,n)}i(SP,"FromImport$3");function*MP(e,r,t,n){if(!rk(n))return yield W(T.Integer,e,t,n);ke(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(T.IntegerExclusiveMaximum,e,t,n)),ke(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(T.IntegerExclusiveMinimum,e,t,n)),ke(e.maximum)&&!(n<=e.maximum)&&(yield W(T.IntegerMaximum,e,t,n)),ke(e.minimum)&&!(n>=e.minimum)&&(yield W(T.IntegerMinimum,e,t,n)),ke(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(T.IntegerMultipleOf,e,t,n))}i(MP,"FromInteger");function*TP(e,r,t,n){let o=!1;for(const a of e.allOf)for(const s of tt(a,r,t,n))o=!0,yield s;if(o)return yield W(T.Intersect,e,t,n);if(e.unevaluatedProperties===!1){const a=new RegExp(bs(e));for(const s of Object.getOwnPropertyNames(n))a.test(s)||(yield W(T.IntersectUnevaluatedProperties,e,`${t}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const a=new RegExp(bs(e));for(const s of Object.getOwnPropertyNames(n))if(!a.test(s)){const l=tt(e.unevaluatedProperties,r,`${t}/${s}`,n[s]).next();l.done||(yield l.value)}}}i(TP,"FromIntersect$3");function*PP(e,r,t,n){X5(n)||(yield W(T.Iterator,e,t,n))}i(PP,"FromIterator$1");function*IP(e,r,t,n){n!==e.const&&(yield W(T.Literal,e,t,n))}i(IP,"FromLiteral");function*NP(e,r,t,n){yield W(T.Never,e,t,n)}i(NP,"FromNever");function*BP(e,r,t,n){tt(e.not,r,t,n).next().done===!0&&(yield W(T.Not,e,t,n))}i(BP,"FromNot$3");function*OP(e,r,t,n){Pd(n)||(yield W(T.Null,e,t,n))}i(OP,"FromNull");function*RP(e,r,t,n){if(!Ar.IsNumberLike(n))return yield W(T.Number,e,t,n);ke(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(T.NumberExclusiveMaximum,e,t,n)),ke(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(T.NumberExclusiveMinimum,e,t,n)),ke(e.maximum)&&!(n<=e.maximum)&&(yield W(T.NumberMaximum,e,t,n)),ke(e.minimum)&&!(n>=e.minimum)&&(yield W(T.NumberMinimum,e,t,n)),ke(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(T.NumberMultipleOf,e,t,n))}i(RP,"FromNumber");function*LP(e,r,t,n){if(!Ar.IsObjectLike(n))return yield W(T.Object,e,t,n);ke(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(T.ObjectMinProperties,e,t,n)),ke(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(T.ObjectMaxProperties,e,t,n));const o=Array.isArray(e.required)?e.required:[],a=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const l of o)s.includes(l)||(yield W(T.ObjectRequiredProperty,e.properties[l],`${t}/${yo(l)}`,void 0));if(e.additionalProperties===!1)for(const l of s)a.includes(l)||(yield W(T.ObjectAdditionalProperties,e,`${t}/${yo(l)}`,n[l]));if(typeof e.additionalProperties=="object")for(const l of s)a.includes(l)||(yield*tt(e.additionalProperties,r,`${t}/${yo(l)}`,n[l]));for(const l of a){const u=e.properties[l];e.required&&e.required.includes(l)?(yield*tt(u,r,`${t}/${yo(l)}`,n[l]),js(e)&&!(l in n)&&(yield W(T.ObjectRequiredProperty,u,`${t}/${yo(l)}`,void 0))):Ar.IsExactOptionalProperty(n,l)&&(yield*tt(u,r,`${t}/${yo(l)}`,n[l]))}}i(LP,"FromObject$3");function*jP(e,r,t,n){Q5(n)||(yield W(T.Promise,e,t,n))}i(jP,"FromPromise$1");function*UP(e,r,t,n){if(!Ar.IsRecordLike(n))return yield W(T.Object,e,t,n);ke(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(T.ObjectMinProperties,e,t,n)),ke(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(T.ObjectMaxProperties,e,t,n));const[o,a]=Object.entries(e.patternProperties)[0],s=new RegExp(o);for(const[l,u]of Object.entries(n))s.test(l)&&(yield*tt(a,r,`${t}/${yo(l)}`,u));if(typeof e.additionalProperties=="object")for(const[l,u]of Object.entries(n))s.test(l)||(yield*tt(e.additionalProperties,r,`${t}/${yo(l)}`,u));if(e.additionalProperties===!1){for(const[l,u]of Object.entries(n))if(!s.test(l))return yield W(T.ObjectAdditionalProperties,e,`${t}/${yo(l)}`,u)}}i(UP,"FromRecord$3");function*_P(e,r,t,n){yield*tt(Pn(e,r),r,t,n)}i(_P,"FromRef$3");function*zP(e,r,t,n){if(!on(n))return yield W(T.String,e,t,n);if(ke(e.minLength)&&!(n.length>=e.minLength)&&(yield W(T.StringMinLength,e,t,n)),ke(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(T.StringMaxLength,e,t,n)),!new RegExp(e.source,e.flags).test(n))return yield W(T.RegExp,e,t,n)}i(zP,"FromRegExp");function*qP(e,r,t,n){if(!on(n))return yield W(T.String,e,t,n);ke(e.minLength)&&!(n.length>=e.minLength)&&(yield W(T.StringMinLength,e,t,n)),ke(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(T.StringMaxLength,e,t,n)),on(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield W(T.StringPattern,e,t,n))),on(e.format)&&(Cp(e.format)?Ep(e.format)(n)||(yield W(T.StringFormat,e,t,n)):yield W(T.StringFormatUnknown,e,t,n))}i(qP,"FromString");function*VP(e,r,t,n){Nd(n)||(yield W(T.Symbol,e,t,n))}i(VP,"FromSymbol");function*WP(e,r,t,n){if(!on(n))return yield W(T.String,e,t,n);new RegExp(e.pattern).test(n)||(yield W(T.StringPattern,e,t,n))}i(WP,"FromTemplateLiteral");function*KP(e,r,t,n){yield*tt(Pn(e,r),r,t,n)}i(KP,"FromThis$3");function*HP(e,r,t,n){if(!cn(n))return yield W(T.Tuple,e,t,n);if(e.items===void 0&&n.length!==0)return yield W(T.TupleLength,e,t,n);if(n.length!==e.maxItems)return yield W(T.TupleLength,e,t,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*tt(e.items[o],r,`${t}/${o}`,n[o])}i(HP,"FromTuple$3");function*GP(e,r,t,n){$i(n)||(yield W(T.Undefined,e,t,n))}i(GP,"FromUndefined");function*ZP(e,r,t,n){if(Zc(e,r,n))return;const o=e.anyOf.map(a=>new r$(tt(a,r,t,n)));yield W(T.Union,e,t,n,o)}i(ZP,"FromUnion$3");function*YP(e,r,t,n){if(!pp(n))return yield W(T.Uint8Array,e,t,n);ke(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield W(T.Uint8ArrayMaxByteLength,e,t,n)),ke(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield W(T.Uint8ArrayMinByteLength,e,t,n))}i(YP,"FromUint8Array");function*JP(e,r,t,n){}i(JP,"FromUnknown");function*XP(e,r,t,n){Ar.IsVoidLike(n)||(yield W(T.Void,e,t,n))}i(XP,"FromVoid");function*QP(e,r,t,n){Sp(e[z])(e,n)||(yield W(T.Kind,e,t,n))}i(QP,"FromKind");function*tt(e,r,t,n){const o=ke(e.$id)?[...r,e]:r,a=e;switch(a[z]){case"Any":return yield*wP();case"Argument":return yield*kP();case"Array":return yield*$P(a,o,t,n);case"AsyncIterator":return yield*xP(a,o,t,n);case"BigInt":return yield*DP(a,o,t,n);case"Boolean":return yield*CP(a,o,t,n);case"Constructor":return yield*EP(a,o,t,n);case"Date":return yield*AP(a,o,t,n);case"Function":return yield*FP(a,o,t,n);case"Import":return yield*SP(a,o,t,n);case"Integer":return yield*MP(a,o,t,n);case"Intersect":return yield*TP(a,o,t,n);case"Iterator":return yield*PP(a,o,t,n);case"Literal":return yield*IP(a,o,t,n);case"Never":return yield*NP(a,o,t,n);case"Not":return yield*BP(a,o,t,n);case"Null":return yield*OP(a,o,t,n);case"Number":return yield*RP(a,o,t,n);case"Object":return yield*LP(a,o,t,n);case"Promise":return yield*jP(a,o,t,n);case"Record":return yield*UP(a,o,t,n);case"Ref":return yield*_P(a,o,t,n);case"RegExp":return yield*zP(a,o,t,n);case"String":return yield*qP(a,o,t,n);case"Symbol":return yield*VP(a,o,t,n);case"TemplateLiteral":return yield*WP(a,o,t,n);case"This":return yield*KP(a,o,t,n);case"Tuple":return yield*HP(a,o,t,n);case"Undefined":return yield*GP(a,o,t,n);case"Union":return yield*ZP(a,o,t,n);case"Uint8Array":return yield*YP(a,o,t,n);case"Unknown":return yield*JP();case"Void":return yield*XP(a,o,t,n);default:if(!mi(a[z]))throw new yP(e);return yield*QP(a,o,t,n)}}i(tt,"Visit$3");function eI(...e){const r=e.length===3?tt(e[0],e[1],"",e[2]):tt(e[0],[],"",e[1]);return new r$(r)}i(eI,"Errors");class rI extends pt{static{i(this,"TransformDecodeCheckError")}constructor(r,t,n){super("Unable to decode value as it does not match the expected schema"),this.schema=r,this.value=t,this.error=n}}class tI extends pt{static{i(this,"TransformDecodeError")}constructor(r,t,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=r,this.path=t,this.value=n,this.error=o}}function gr(e,r,t){try{return tr(e)?e[zt].Decode(t):t}catch(n){throw new tI(e,r,t,n)}}i(gr,"Default$1");function nI(e,r,t,n){return cn(n)?gr(e,t,n.map((o,a)=>Yn(e.items,r,`${t}/${a}`,o))):gr(e,t,n)}i(nI,"FromArray$2");function oI(e,r,t,n){if(!lo(n)||nk(n))return gr(e,t,n);const o=Mk(e),a=o.map(g=>g[0]),s={...n};for(const[g,h]of o)g in s&&(s[g]=Yn(h,r,`${t}/${g}`,s[g]));if(!tr(e.unevaluatedProperties))return gr(e,t,s);const l=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,f={...s};for(const g of l)a.includes(g)||(f[g]=gr(u,`${t}/${g}`,f[g]));return gr(e,t,f)}i(oI,"FromIntersect$2");function iI(e,r,t,n){const o=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref],s=Yn(a,[...r,...o],t,n);return gr(e,t,s)}i(iI,"FromImport$2");function aI(e,r,t,n){return gr(e,t,Yn(e.not,r,t,n))}i(aI,"FromNot$2");function sI(e,r,t,n){if(!lo(n))return gr(e,t,n);const o=Ca(e),a={...n};for(const f of o)ek(a,f)&&($i(a[f])&&(!Cu(e.properties[f])||Ar.IsExactOptionalProperty(a,f))||(a[f]=Yn(e.properties[f],r,`${t}/${f}`,a[f])));if(!It(e.additionalProperties))return gr(e,t,a);const s=Object.getOwnPropertyNames(a),l=e.additionalProperties,u={...a};for(const f of s)o.includes(f)||(u[f]=gr(l,`${t}/${f}`,u[f]));return gr(e,t,u)}i(sI,"FromObject$2");function lI(e,r,t,n){if(!lo(n))return gr(e,t,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],a=new RegExp(o),s={...n};for(const g of Object.getOwnPropertyNames(n))a.test(g)&&(s[g]=Yn(e.patternProperties[o],r,`${t}/${g}`,s[g]));if(!It(e.additionalProperties))return gr(e,t,s);const l=Object.getOwnPropertyNames(s),u=e.additionalProperties,f={...s};for(const g of l)a.test(g)||(f[g]=gr(u,`${t}/${g}`,f[g]));return gr(e,t,f)}i(lI,"FromRecord$2");function uI(e,r,t,n){const o=Pn(e,r);return gr(e,t,Yn(o,r,t,n))}i(uI,"FromRef$2");function cI(e,r,t,n){const o=Pn(e,r);return gr(e,t,Yn(o,r,t,n))}i(cI,"FromThis$2");function dI(e,r,t,n){return cn(n)&&cn(e.items)?gr(e,t,e.items.map((o,a)=>Yn(o,r,`${t}/${a}`,n[a]))):gr(e,t,n)}i(dI,"FromTuple$2");function fI(e,r,t,n){for(const o of e.anyOf){if(!Zc(o,r,n))continue;const a=Yn(o,r,t,n);return gr(e,t,a)}return gr(e,t,n)}i(fI,"FromUnion$2");function Yn(e,r,t,n){const o=rf(e,r),a=e;switch(e[z]){case"Array":return nI(a,o,t,n);case"Import":return iI(a,o,t,n);case"Intersect":return oI(a,o,t,n);case"Not":return aI(a,o,t,n);case"Object":return sI(a,o,t,n);case"Record":return lI(a,o,t,n);case"Ref":return uI(a,o,t,n);case"Symbol":return gr(a,t,n);case"This":return cI(a,o,t,n);case"Tuple":return dI(a,o,t,n);case"Union":return fI(a,o,t,n);default:return gr(a,t,n)}}i(Yn,"Visit$2");function gI(e,r,t){return Yn(e,r,"",t)}i(gI,"TransformDecode");class hI extends pt{static{i(this,"TransformEncodeCheckError")}constructor(r,t,n){super("The encoded value does not match the expected schema"),this.schema=r,this.value=t,this.error=n}}class pI extends pt{static{i(this,"TransformEncodeError")}constructor(r,t,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=r,this.path=t,this.value=n,this.error=o}}function ft(e,r,t){try{return tr(e)?e[zt].Encode(t):t}catch(n){throw new pI(e,r,t,n)}}i(ft,"Default");function mI(e,r,t,n){const o=ft(e,t,n);return cn(o)?o.map((a,s)=>Gn(e.items,r,`${t}/${s}`,a)):o}i(mI,"FromArray$1");function bI(e,r,t,n){const o=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref],s=ft(e,t,n);return Gn(a,[...r,...o],t,s)}i(bI,"FromImport$1");function vI(e,r,t,n){const o=ft(e,t,n);if(!lo(n)||nk(n))return o;const a=Mk(e),s=a.map(h=>h[0]),l={...o};for(const[h,p]of a)h in l&&(l[h]=Gn(p,r,`${t}/${h}`,l[h]));if(!tr(e.unevaluatedProperties))return l;const u=Object.getOwnPropertyNames(l),f=e.unevaluatedProperties,g={...l};for(const h of u)s.includes(h)||(g[h]=ft(f,`${t}/${h}`,g[h]));return g}i(vI,"FromIntersect$1");function yI(e,r,t,n){return ft(e.not,t,ft(e,t,n))}i(yI,"FromNot$1");function wI(e,r,t,n){const o=ft(e,t,n);if(!lo(o))return o;const a=Ca(e),s={...o};for(const g of a)ek(s,g)&&($i(s[g])&&(!Cu(e.properties[g])||Ar.IsExactOptionalProperty(s,g))||(s[g]=Gn(e.properties[g],r,`${t}/${g}`,s[g])));if(!It(e.additionalProperties))return s;const l=Object.getOwnPropertyNames(s),u=e.additionalProperties,f={...s};for(const g of l)a.includes(g)||(f[g]=ft(u,`${t}/${g}`,f[g]));return f}i(wI,"FromObject$1");function kI(e,r,t,n){const o=ft(e,t,n);if(!lo(n))return o;const a=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(a),l={...o};for(const h of Object.getOwnPropertyNames(n))s.test(h)&&(l[h]=Gn(e.patternProperties[a],r,`${t}/${h}`,l[h]));if(!It(e.additionalProperties))return l;const u=Object.getOwnPropertyNames(l),f=e.additionalProperties,g={...l};for(const h of u)s.test(h)||(g[h]=ft(f,`${t}/${h}`,g[h]));return g}i(kI,"FromRecord$1");function $I(e,r,t,n){const o=Pn(e,r),a=Gn(o,r,t,n);return ft(e,t,a)}i($I,"FromRef$1");function xI(e,r,t,n){const o=Pn(e,r),a=Gn(o,r,t,n);return ft(e,t,a)}i(xI,"FromThis$1");function DI(e,r,t,n){const o=ft(e,t,n);return cn(e.items)?e.items.map((a,s)=>Gn(a,r,`${t}/${s}`,o[s])):[]}i(DI,"FromTuple$1");function CI(e,r,t,n){for(const o of e.anyOf){if(!Zc(o,r,n))continue;const a=Gn(o,r,t,n);return ft(e,t,a)}for(const o of e.anyOf){const a=Gn(o,r,t,n);if(Zc(e,r,a))return ft(e,t,a)}return ft(e,t,n)}i(CI,"FromUnion$1");function Gn(e,r,t,n){const o=rf(e,r),a=e;switch(e[z]){case"Array":return mI(a,o,t,n);case"Import":return bI(a,o,t,n);case"Intersect":return vI(a,o,t,n);case"Not":return yI(a,o,t,n);case"Object":return wI(a,o,t,n);case"Record":return kI(a,o,t,n);case"Ref":return $I(a,o,t,n);case"This":return xI(a,o,t,n);case"Tuple":return DI(a,o,t,n);case"Union":return CI(a,o,t,n);default:return ft(a,t,n)}}i(Gn,"Visit$1");function EI(e,r,t){return Gn(e,r,"",t)}i(EI,"TransformEncode");function AI(e,r){return tr(e)||Hr(e.items,r)}i(AI,"FromArray");function FI(e,r){return tr(e)||Hr(e.items,r)}i(FI,"FromAsyncIterator");function SI(e,r){return tr(e)||Hr(e.returns,r)||e.parameters.some(t=>Hr(t,r))}i(SI,"FromConstructor");function MI(e,r){return tr(e)||Hr(e.returns,r)||e.parameters.some(t=>Hr(t,r))}i(MI,"FromFunction");function TI(e,r){return tr(e)||tr(e.unevaluatedProperties)||e.allOf.some(t=>Hr(t,r))}i(TI,"FromIntersect");function PI(e,r){const t=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,a)=>[...o,e.$defs[a]],[]),n=e.$defs[e.$ref];return tr(e)||Hr(n,[...t,...r])}i(PI,"FromImport");function II(e,r){return tr(e)||Hr(e.items,r)}i(II,"FromIterator");function NI(e,r){return tr(e)||Hr(e.not,r)}i(NI,"FromNot");function BI(e,r){return tr(e)||Object.values(e.properties).some(t=>Hr(t,r))||It(e.additionalProperties)&&Hr(e.additionalProperties,r)}i(BI,"FromObject");function OI(e,r){return tr(e)||Hr(e.item,r)}i(OI,"FromPromise");function RI(e,r){const t=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[t];return tr(e)||Hr(n,r)||It(e.additionalProperties)&&tr(e.additionalProperties)}i(RI,"FromRecord");function LI(e,r){return tr(e)?!0:Hr(Pn(e,r),r)}i(LI,"FromRef");function jI(e,r){return tr(e)?!0:Hr(Pn(e,r),r)}i(jI,"FromThis");function UI(e,r){return tr(e)||!$i(e.items)&&e.items.some(t=>Hr(t,r))}i(UI,"FromTuple");function _I(e,r){return tr(e)||e.anyOf.some(t=>Hr(t,r))}i(_I,"FromUnion");function Hr(e,r){const t=rf(e,r),n=e;if(e.$id&&Vg.has(e.$id))return!1;switch(e.$id&&Vg.add(e.$id),e[z]){case"Array":return AI(n,t);case"AsyncIterator":return FI(n,t);case"Constructor":return SI(n,t);case"Function":return MI(n,t);case"Import":return PI(n,t);case"Intersect":return TI(n,t);case"Iterator":return II(n,t);case"Not":return NI(n,t);case"Object":return BI(n,t);case"Promise":return OI(n,t);case"Record":return RI(n,t);case"Ref":return LI(n,t);case"This":return jI(n,t);case"Tuple":return UI(n,t);case"Union":return _I(n,t);default:return tr(e)}}i(Hr,"Visit");const Vg=new Set;function zI(e,r){return Vg.clear(),Hr(e,r)}i(zI,"HasTransform");class qI{static{i(this,"TypeCheck")}constructor(r,t,n,o){this.schema=r,this.references=t,this.checkFunc=n,this.code=o,this.hasTransform=zI(r,t)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(r){return eI(this.schema,this.references,r)}Check(r){return this.checkFunc(r)}Decode(r){if(!this.checkFunc(r))throw new rI(this.schema,r,this.Errors(r).First());return this.hasTransform?gI(this.schema,this.references,r):r}Encode(r){const t=this.hasTransform?EI(this.schema,this.references,r):r;if(!this.checkFunc(t))throw new hI(this.schema,r,this.Errors(r).First());return t}}var Do;(function(e){function r(a){return a===36}i(r,"DollarSign"),e.DollarSign=r;function t(a){return a===95}i(t,"IsUnderscore"),e.IsUnderscore=t;function n(a){return a>=65&&a<=90||a>=97&&a<=122}i(n,"IsAlpha"),e.IsAlpha=n;function o(a){return a>=48&&a<=57}i(o,"IsNumeric"),e.IsNumeric=o})(Do||(Do={}));var Yc;(function(e){function r(a){return a.length===0?!1:Do.IsNumeric(a.charCodeAt(0))}i(r,"IsFirstCharacterNumeric");function t(a){if(r(a))return!1;for(let s=0;s<a.length;s++){const l=a.charCodeAt(s);if(!(Do.IsAlpha(l)||Do.IsNumeric(l)||Do.DollarSign(l)||Do.IsUnderscore(l)))return!1}return!0}i(t,"IsAccessor");function n(a){return a.replace(/'/g,"\\'")}i(n,"EscapeHyphen");function o(a,s){return t(s)?`${a}.${s}`:`${a}['${n(s)}']`}i(o,"Encode"),e.Encode=o})(Yc||(Yc={}));var Wg;(function(e){function r(t){const n=[];for(let o=0;o<t.length;o++){const a=t.charCodeAt(o);Do.IsNumeric(a)||Do.IsAlpha(a)?n.push(t.charAt(o)):n.push(`_${a}_`)}return n.join("").replace(/__/g,"_")}i(r,"Encode"),e.Encode=r})(Wg||(Wg={}));var Kg;(function(e){function r(t){return t.replace(/'/g,"\\'")}i(r,"Escape"),e.Escape=r})(Kg||(Kg={}));class VI extends pt{static{i(this,"TypeCompilerUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}class my extends pt{static{i(this,"TypeCompilerTypeGuardError")}constructor(r){super("Preflight validation check failed to guard for the given schema"),this.schema=r}}var Ui;(function(e){function r(s,l,u){return Ar.ExactOptionalPropertyTypes?`('${l}' in ${s} ? ${u} : true)`:`(${Yc.Encode(s,l)} !== undefined ? ${u} : true)`}i(r,"IsExactOptionalProperty"),e.IsExactOptionalProperty=r;function t(s){return Ar.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}i(t,"IsObjectLike"),e.IsObjectLike=t;function n(s){return Ar.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}i(n,"IsRecordLike"),e.IsRecordLike=n;function o(s){return Ar.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}i(o,"IsNumberLike"),e.IsNumberLike=o;function a(s){return Ar.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}i(a,"IsVoidLike"),e.IsVoidLike=a})(Ui||(Ui={}));var Ml;(function(e){function r(D){return D[z]==="Any"||D[z]==="Unknown"}i(r,"IsAnyOrUnknown");function*t(D,G,F){yield"true"}i(t,"FromAny");function*n(D,G,F){yield"true"}i(n,"FromArgument");function*o(D,G,F){yield`Array.isArray(${F})`;const[ie,X]=[In("value","any"),In("acc","number")];pe(D.maxItems)&&(yield`${F}.length <= ${D.maxItems}`),pe(D.minItems)&&(yield`${F}.length >= ${D.minItems}`);const Q=Ur(D.items,G,"value");if(yield`((array) => { for(const ${ie} of array) if(!(${Q})) { return false }; return true; })(${F})`,vr(D.contains)||pe(D.minContains)||pe(D.maxContains)){const Je=vr(D.contains)?D.contains:wr(),Bt=Ur(Je,G,"value"),ho=pe(D.minContains)?[`(count >= ${D.minContains})`]:[],Nn=pe(D.maxContains)?[`(count <= ${D.maxContains})`]:[],Qn=`const count = value.reduce((${X}, ${ie}) => ${Bt} ? acc + 1 : acc, 0)`,Ru=["(count > 0)",...ho,...Nn].join(" && ");yield`((${ie}) => { ${Qn}; return ${Ru}})(${F})`}D.uniqueItems===!0&&(yield`((${ie}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${F})`)}i(o,"FromArray");function*a(D,G,F){yield`(typeof value === 'object' && Symbol.asyncIterator in ${F})`}i(a,"FromAsyncIterator");function*s(D,G,F){yield`(typeof ${F} === 'bigint')`,xo(D.exclusiveMaximum)&&(yield`${F} < BigInt(${D.exclusiveMaximum})`),xo(D.exclusiveMinimum)&&(yield`${F} > BigInt(${D.exclusiveMinimum})`),xo(D.maximum)&&(yield`${F} <= BigInt(${D.maximum})`),xo(D.minimum)&&(yield`${F} >= BigInt(${D.minimum})`),xo(D.multipleOf)&&(yield`(${F} % BigInt(${D.multipleOf})) === 0`)}i(s,"FromBigInt");function*l(D,G,F){yield`(typeof ${F} === 'boolean')`}i(l,"FromBoolean");function*u(D,G,F){yield*at(D.returns,G,`${F}.prototype`)}i(u,"FromConstructor");function*f(D,G,F){yield`(${F} instanceof Date) && Number.isFinite(${F}.getTime())`,pe(D.exclusiveMaximumTimestamp)&&(yield`${F}.getTime() < ${D.exclusiveMaximumTimestamp}`),pe(D.exclusiveMinimumTimestamp)&&(yield`${F}.getTime() > ${D.exclusiveMinimumTimestamp}`),pe(D.maximumTimestamp)&&(yield`${F}.getTime() <= ${D.maximumTimestamp}`),pe(D.minimumTimestamp)&&(yield`${F}.getTime() >= ${D.minimumTimestamp}`),pe(D.multipleOfTimestamp)&&(yield`(${F}.getTime() % ${D.multipleOfTimestamp}) === 0`)}i(f,"FromDate");function*g(D,G,F){yield`(typeof ${F} === 'function')`}i(g,"FromFunction");function*h(D,G,F){const ie=globalThis.Object.getOwnPropertyNames(D.$defs).reduce((X,Q)=>[...X,D.$defs[Q]],[]);yield*at(Rs(D.$ref),[...G,...ie],F)}i(h,"FromImport");function*p(D,G,F){yield`Number.isInteger(${F})`,pe(D.exclusiveMaximum)&&(yield`${F} < ${D.exclusiveMaximum}`),pe(D.exclusiveMinimum)&&(yield`${F} > ${D.exclusiveMinimum}`),pe(D.maximum)&&(yield`${F} <= ${D.maximum}`),pe(D.minimum)&&(yield`${F} >= ${D.minimum}`),pe(D.multipleOf)&&(yield`(${F} % ${D.multipleOf}) === 0`)}i(p,"FromInteger");function*b(D,G,F){const ie=D.allOf.map(X=>Ur(X,G,F)).join(" && ");if(D.unevaluatedProperties===!1){const X=vt(`${new RegExp(bs(D))};`),Q=`Object.getOwnPropertyNames(${F}).every(key => ${X}.test(key))`;yield`(${ie} && ${Q})`}else if(vr(D.unevaluatedProperties)){const X=vt(`${new RegExp(bs(D))};`),Q=`Object.getOwnPropertyNames(${F}).every(key => ${X}.test(key) || ${Ur(D.unevaluatedProperties,G,`${F}[key]`)})`;yield`(${ie} && ${Q})`}else yield`(${ie})`}i(b,"FromIntersect");function*v(D,G,F){yield`(typeof value === 'object' && Symbol.iterator in ${F})`}i(v,"FromIterator");function*$(D,G,F){typeof D.const=="number"||typeof D.const=="boolean"?yield`(${F} === ${D.const})`:yield`(${F} === '${Kg.Escape(D.const)}')`}i($,"FromLiteral");function*C(D,G,F){yield"false"}i(C,"FromNever");function*E(D,G,F){yield`(!${Ur(D.not,G,F)})`}i(E,"FromNot");function*A(D,G,F){yield`(${F} === null)`}i(A,"FromNull");function*N(D,G,F){yield Ui.IsNumberLike(F),pe(D.exclusiveMaximum)&&(yield`${F} < ${D.exclusiveMaximum}`),pe(D.exclusiveMinimum)&&(yield`${F} > ${D.exclusiveMinimum}`),pe(D.maximum)&&(yield`${F} <= ${D.maximum}`),pe(D.minimum)&&(yield`${F} >= ${D.minimum}`),pe(D.multipleOf)&&(yield`(${F} % ${D.multipleOf}) === 0`)}i(N,"FromNumber");function*_(D,G,F){yield Ui.IsObjectLike(F),pe(D.minProperties)&&(yield`Object.getOwnPropertyNames(${F}).length >= ${D.minProperties}`),pe(D.maxProperties)&&(yield`Object.getOwnPropertyNames(${F}).length <= ${D.maxProperties}`);const ie=Object.getOwnPropertyNames(D.properties);for(const X of ie){const Q=Yc.Encode(F,X),Je=D.properties[X];if(D.required&&D.required.includes(X))yield*at(Je,G,Q),(js(Je)||r(Je))&&(yield`('${X}' in ${F})`);else{const Bt=Ur(Je,G,Q);yield Ui.IsExactOptionalProperty(F,X,Bt)}}if(D.additionalProperties===!1)if(D.required&&D.required.length===ie.length)yield`Object.getOwnPropertyNames(${F}).length === ${ie.length}`;else{const X=`[${ie.map(Q=>`'${Q}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${F}).every(key => ${X}.includes(key))`}if(typeof D.additionalProperties=="object"){const X=Ur(D.additionalProperties,G,`${F}[key]`),Q=`[${ie.map(Je=>`'${Je}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${F}).every(key => ${Q}.includes(key) || ${X}))`}}i(_,"FromObject");function*H(D,G,F){yield`${F} instanceof Promise`}i(H,"FromPromise");function*ce(D,G,F){yield Ui.IsRecordLike(F),pe(D.minProperties)&&(yield`Object.getOwnPropertyNames(${F}).length >= ${D.minProperties}`),pe(D.maxProperties)&&(yield`Object.getOwnPropertyNames(${F}).length <= ${D.maxProperties}`);const[ie,X]=Object.entries(D.patternProperties)[0],Q=vt(`${new RegExp(ie)}`),Je=Ur(X,G,"value"),Bt=vr(D.additionalProperties)?Ur(D.additionalProperties,G,F):D.additionalProperties===!1?"false":"true",ho=`(${Q}.test(key) ? ${Je} : ${Bt})`;yield`(Object.entries(${F}).every(([key, value]) => ${ho}))`}i(ce,"FromRecord");function*Te(D,G,F){const ie=Pn(D,G);if(He.functions.has(D.$ref))return yield`${bn(D.$ref)}(${F})`;yield*at(ie,G,F)}i(Te,"FromRef");function*be(D,G,F){const ie=vt(`${new RegExp(D.source,D.flags)};`);yield`(typeof ${F} === 'string')`,pe(D.maxLength)&&(yield`${F}.length <= ${D.maxLength}`),pe(D.minLength)&&(yield`${F}.length >= ${D.minLength}`),yield`${ie}.test(${F})`}i(be,"FromRegExp");function*Se(D,G,F){yield`(typeof ${F} === 'string')`,pe(D.maxLength)&&(yield`${F}.length <= ${D.maxLength}`),pe(D.minLength)&&(yield`${F}.length >= ${D.minLength}`),D.pattern!==void 0&&(yield`${vt(`${new RegExp(D.pattern)};`)}.test(${F})`),D.format!==void 0&&(yield`format('${D.format}', ${F})`)}i(Se,"FromString");function*or(D,G,F){yield`(typeof ${F} === 'symbol')`}i(or,"FromSymbol");function*ir(D,G,F){yield`(typeof ${F} === 'string')`,yield`${vt(`${new RegExp(D.pattern)};`)}.test(${F})`}i(ir,"FromTemplateLiteral");function*jr(D,G,F){yield`${bn(D.$ref)}(${F})`}i(jr,"FromThis");function*Yt(D,G,F){if(yield`Array.isArray(${F})`,D.items===void 0)return yield`${F}.length === 0`;yield`(${F}.length === ${D.maxItems})`;for(let ie=0;ie<D.items.length;ie++)yield`${Ur(D.items[ie],G,`${F}[${ie}]`)}`}i(Yt,"FromTuple");function*Et(D,G,F){yield`${F} === undefined`}i(Et,"FromUndefined");function*fo(D,G,F){yield`(${D.anyOf.map(X=>Ur(X,G,F)).join(" || ")})`}i(fo,"FromUnion");function*Jr(D,G,F){yield`${F} instanceof Uint8Array`,pe(D.maxByteLength)&&(yield`(${F}.length <= ${D.maxByteLength})`),pe(D.minByteLength)&&(yield`(${F}.length >= ${D.minByteLength})`)}i(Jr,"FromUint8Array");function*Xn(D,G,F){yield"true"}i(Xn,"FromUnknown");function*go(D,G,F){yield Ui.IsVoidLike(F)}i(go,"FromVoid");function*mn(D,G,F){const ie=He.instances.size;He.instances.set(ie,D),yield`kind('${D[z]}', ${ie}, ${F})`}i(mn,"FromKind");function*at(D,G,F,ie=!0){const X=on(D.$id)?[...G,D]:G,Q=D;if(ie&&on(D.$id)){const Je=bn(D.$id);if(He.functions.has(Je))return yield`${Je}(${F})`;{He.functions.set(Je,"<deferred>");const Bt=vn(Je,D,G,"value",!1);return He.functions.set(Je,Bt),yield`${Je}(${F})`}}switch(Q[z]){case"Any":return yield*t();case"Argument":return yield*n();case"Array":return yield*o(Q,X,F);case"AsyncIterator":return yield*a(Q,X,F);case"BigInt":return yield*s(Q,X,F);case"Boolean":return yield*l(Q,X,F);case"Constructor":return yield*u(Q,X,F);case"Date":return yield*f(Q,X,F);case"Function":return yield*g(Q,X,F);case"Import":return yield*h(Q,X,F);case"Integer":return yield*p(Q,X,F);case"Intersect":return yield*b(Q,X,F);case"Iterator":return yield*v(Q,X,F);case"Literal":return yield*$(Q,X,F);case"Never":return yield*C();case"Not":return yield*E(Q,X,F);case"Null":return yield*A(Q,X,F);case"Number":return yield*N(Q,X,F);case"Object":return yield*_(Q,X,F);case"Promise":return yield*H(Q,X,F);case"Record":return yield*ce(Q,X,F);case"Ref":return yield*Te(Q,X,F);case"RegExp":return yield*be(Q,X,F);case"String":return yield*Se(Q,X,F);case"Symbol":return yield*or(Q,X,F);case"TemplateLiteral":return yield*ir(Q,X,F);case"This":return yield*jr(Q,X,F);case"Tuple":return yield*Yt(Q,X,F);case"Undefined":return yield*Et(Q,X,F);case"Union":return yield*fo(Q,X,F);case"Uint8Array":return yield*Jr(Q,X,F);case"Unknown":return yield*Xn();case"Void":return yield*go(Q,X,F);default:if(!mi(Q[z]))throw new VI(D);return yield*mn(Q,X,F)}}i(at,"Visit");const He={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Ur(D,G,F,ie=!0){return`(${[...at(D,G,F,ie)].join(" && ")})`}i(Ur,"CreateExpression");function bn(D){return`check_${Wg.Encode(D)}`}i(bn,"CreateFunctionName");function vt(D){const G=`local_${He.variables.size}`;return He.variables.set(G,`const ${G} = ${D}`),G}i(vt,"CreateVariable");function vn(D,G,F,ie,X=!0){const[Q,Je]=[`
`,Qn=>"".padStart(Qn," ")],Bt=In("value","any"),ho=_o("boolean"),Nn=[...at(G,F,ie,X)].map(Qn=>`${Je(4)}${Qn}`).join(` &&${Q}`);return`function ${D}(${Bt})${ho} {${Q}${Je(2)}return (${Q}${Nn}${Q}${Je(2)})
}`}i(vn,"CreateFunction");function In(D,G){const F=He.language==="typescript"?`: ${G}`:"";return`${D}${F}`}i(In,"CreateParameter");function _o(D){return He.language==="typescript"?`: ${D}`:""}i(_o,"CreateReturns");function Ou(D,G,F){const ie=vn("check",D,G,"value"),X=In("value","any"),Q=_o("boolean"),Je=[...He.functions.values()],Bt=[...He.variables.values()],ho=on(D.$id)?`return function check(${X})${Q} {
  return ${bn(D.$id)}(value)
}`:`return ${ie}`;return[...Bt,...Je,ho].join(`
`)}i(Ou,"Build");function Ma(...D){const G={language:"javascript"},[F,ie,X]=D.length===2&&cn(D[1])?[D[0],D[1],G]:D.length===2&&!cn(D[1])?[D[0],[],D[1]]:D.length===3?[D[0],D[1],D[2]]:D.length===1?[D[0],[],G]:[null,[],G];if(He.language=X.language,He.variables.clear(),He.functions.clear(),He.instances.clear(),!vr(F))throw new my(F);for(const Q of ie)if(!vr(Q))throw new my(Q);return Ou(F,ie)}i(Ma,"Code"),e.Code=Ma;function a4(D,G=[]){const F=Ma(D,G,{language:"javascript"}),ie=globalThis.Function("kind","format","hash",F),X=new Map(He.instances);function Q(Nn,Qn,Ru){if(!mi(Nn)||!X.has(Qn))return!1;const s4=Sp(Nn),l4=X.get(Qn);return s4(l4,Ru)}i(Q,"typeRegistryFunction");function Je(Nn,Qn){return Cp(Nn)?Ep(Nn)(Qn):!1}i(Je,"formatRegistryFunction");function Bt(Nn){return Xp(Nn)}i(Bt,"hashFunction");const ho=ie(Q,Je,Bt);return new qI(D,G,ho,F)}i(a4,"Compile"),e.Compile=a4})(Ml||(Ml={}));const Hg={};function t$(e,r){e in Hg||(Hg[e]=r)}i(t$,"registerErrorMessage");let by=!1;function WI(){by||(by=!0,bT(e=>(Hg[e.schema[z]]||Yk)(e)))}i(WI,"setShapeDefinitionErrorMessage");const Gg=Symbol.for("object-shape-tester.shape-identifier");function _e(e){if(WI(),Qp(e))return e;const r=Zg(e),t=_i(r,!1),n=_i(r,!0),o={$_schema:r,$_schemaNoExtraKeys:t,$_schemaExtraKeys:n,default:r.default,$_compiledSchema:Ml.Compile(r),$_compiledSchemaNoExtraKeys:Ml.Compile(t),$_compiledSchemaExtraKeys:Ml.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[Gg]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}i(_e,"defineShape");function Qp(e){return M.hasKey(e,Gg)&&!!e[Gg]}i(Qp,"isShape");function em(e){return M.hasKey(e,z)}i(em,"isSchema");function _i(e,r){const t={...e};if(Array.isArray(e.anyOf)&&(t.anyOf=e.anyOf.map(n=>_i(n,r))),Array.isArray(e.allOf)&&(t.allOf=e.allOf.map(n=>_i(n,r))),em(e.items)?t.items=_i(e.items,r):Array.isArray(e.items)&&(t.items=e.items.map(n=>_i(n,r))),M.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,a])=>{n[o]=_i(a,r)}),t.properties=n}return t.additionalProperties=r,t}i(_i,"forceAdditionalProperties");function Zg(e){if(em(e))return e;if(Qp(e))return e.$_schema;if(M.isFunction(e))return Xe.Function([],Xe.Any(),{default:e});if(M.isObject(e)){const r={},t={};return Object.entries(e).forEach(([n,o])=>{const a=Zg(o);t[n]=a,r[n]=a.default}),Xe.Object(t,{default:r})}else{if(M.isArray(e))return Xe.Array(Xe.Union(e.map(r=>Zg(r))),{default:[]});if(M.isPrimitive(e)){if(M.isString(e))return Xe.String({default:e});if(M.isNumber(e))return Xe.Number({default:e});if(M.isBoolean(e))return Xe.Boolean({default:e});if(M.isSymbol(e))return Xe.Symbol({default:e});if(M.isNull(e))return Xe.Null({default:null});if(M.isUndefined(e))return Xe.Undefined({default:void 0});if(M.isBigInt(e))return Xe.BigInt({default:e});Er.tsType(e).equals(),Er.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${x(e)}`)}}i(Zg,"shapeInitToSchema");function KI({checkValue:e,default:r,name:t}){return mi(t)||Fp(t,(n,o)=>e(o)),(n=r)=>_e(Xe.Unsafe({[z]:t,default:n}))}i(KI,"createCustomShape");function sa(e,r){const t=en(e);if(r!=null&&!t.includes(r))throw new TypeError("enumShape default must be a subset of the given enum.");return _e(Xe.Union(t.map(n=>Xe.Literal(n)),{default:r??t[0]}))}i(sa,"enumShape");function Ce(e){return M.isSymbol(e)?HI(e):_e(Xe.Const(e,{default:e}))}i(Ce,"exactShape");const rc="ExactSymbol";function HI(e){return mi(rc)||Fp(rc,(r,t)=>t===r.symbol),t$(rc,({schema:r})=>`Expected symbol ${r.symbol?.description?E8({value:r.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),_e(Xe.Unsafe({[z]:rc,symbol:e,default:e}))}i(HI,"exactSymbolShape");function GI(...e){const r={},t=e.map(n=>{const o=_e(n);return Object.assign(r,o.default),o.$_schema});return _e(Xe.Composite(t,{default:r}))}i(GI,"intersectShape");function lt(e,r={}){Ar.ExactOptionalPropertyTypes=!0;const t=_e(e).$_schema,n=r.alsoUndefined?Xe.Union([Xe.Undefined(),t]):t;return _e(Xe.Optional(n))}i(lt,"optionalShape");function br(...e){let r;const t=e.map((n,o)=>{const a=_e(n);return o||(r=a.default),a.$_schema});return _e(Xe.Union(t,{default:r}))}i(br,"unionShape");class ZI extends TypeError{static{i(this,"ShapeMismatchError")}errors;failureMessage;name="ShapeMismatchError";constructor(r,t){const n=r.map(a=>n$(a)).join(`
`),o=ga(t,`Shape mismatch:
${Bh(n,1)}`);super(o),this.errors=r,this.failureMessage=t}}function YI(e){return e.errors.flatMap(r=>Array.from(r))}i(YI,"getSubErrors");function n$(e,r=0){const t=YI(e).map(o=>n$(o,r+1)),n=[e.path,e.message].filter(M.isTruthy).join(": ")+(t.length?":":"");return[Bh(n,r),...t].join(`
`)}i(n$,"createErrorMessage");function ri(e,r,t={}){return o$(r,t).Check(e)}i(ri,"checkValidShape");function Jc(e,r,t={},n){if(ri(e,r,t))return;const o=Array.from(o$(r,t).Errors(e));if(o.length)throw new ZI(o,n)}i(Jc,"assertValidShape");function o$(e,r){return e=JI(e),r.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}i(o$,"getCompiledSchema");function JI(e){return _e(e)}i(JI,"ensureShape");function Wa({exclusiveMax:e,exclusiveMin:r,...t}){const{min:n,max:o}=Eh(t),a=t.default??(o-n)/2+n,s=_e(Xe.Number({...r?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:a})),l=Nw(()=>Jc(a,s));if(l)throw ha(l,"Default range value is not within range.");return s}i(Wa,"rangeShape");const wc="recordShape";function tf({keys:e,values:r,partial:t,additionalProperties:n}){XI();const o=i$(e),a=_e(r);return _e(Xe.Unsafe({[z]:wc,keysShape:o,valuesShape:a,isPartial:!!t,additionalProperties:!!n,default:QI({isPartial:!!t,keysShape:o,valuesShape:a})}))}i(tf,"recordShape");function XI(){mi(wc)||Fp(wc,(e,r)=>{if(typeof r!="object"||!r||Array.isArray(r))return!1;const t=Object.entries(r).every(([o,a])=>{const s=e.additionalProperties?!0:ri(o,e.keysShape),l=ri(a,e.valuesShape);return s&&l}),n=e.isPartial?!0:!vy(e.keysShape,r).length;return t&&n}),t$(wc,e=>{const t=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=Wt(Object.entries(n),([u])=>u,(u,[f,g])=>!ri(f,t.keysShape)||!ri(g,t.valuesShape)),a=vy(t.keysShape,n),s=o.length?["Failure at keys",o.join(",")].join(": "):"",l=a.length?["Missing keys",a.join(",")].join(": "):"";return[s,l].filter(M.isTruthy).join(`
`)})}i(XI,"setRecordShapeRegistry");function vy(e,r){const t=Xc(e).filter(n=>M.isPropertyKey(n));return t.length?t.filter(n=>!M.hasKey(r,n)):[]}i(vy,"getMissingKeys");function QI({keysShape:e,valuesShape:r,isPartial:t}){if(t)return{};{const n=Xc(e),o=r.default;return Object.fromEntries(n.map(a=>[a,o]))}}i(QI,"createDefaultValue");function i$(e){return Qp(e)?e:em(e)?_e(e):M.isObject(e)?sa(e):M.isArray(e)&&M.isLengthAtLeast(e,1)?br(...e.map(r=>Ce(r))):M.isPropertyKey(e)?_e(e):_e(Xe.Undefined())}i(i$,"defineKeysShape");function Xc(e){const r=e.$_schema,t=r[z].toLowerCase();return["const","literal"].includes(t)?[r.const]:t==="union"?gd(r.anyOf.flatMap(n=>Xc(_e(n)))):["undefined","number","string","symbol"].includes(t)?[]:Xc(i$(e.default))}i(Xc,"extractFiniteKeys");function eN(e){return _e(Xe.Unknown({default:e}))}i(eN,"unknownShape");const rN=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],rm=rN.reduce((e,r)=>(e[r]=r,e),{});mr.defaultZone.name;const a$=rm.UTC,tN=_e({hour:Wa({...xb,default:xb.min}),minute:Wa({...Db,default:Db.min}),second:Wa({...Cb,default:Cb.min}),millisecond:Wa({...Eb,default:Eb.min}),timezone:sa(rm,a$)}),nN=_e({year:2023,month:Wa({...Fb,default:Fb.min}),day:Wa({...Sb,default:Sb.min}),timezone:sa(rm,a$)});_e(GI(nN,tN));le.Years+"",le.Months+"",le.Weeks+"",le.Days+"",le.Hours+"",le.Minutes+"",le.Seconds+"",le.Milliseconds+"";_e(br({get:Ce(J.Month),in:br(Ce(J.Year))},{get:Ce(J.Week),in:br(Ce(J.Year),Ce(J.Month))},{get:Ce(J.Day),in:br(Ce(J.Year),Ce(J.Month),Ce(J.Week))},{get:Ce(J.Hour),in:br(Ce(J.Year),Ce(J.Month),Ce(J.Week),Ce(J.Day))},{get:Ce(J.Minute),in:br(Ce(J.Year),Ce(J.Month),Ce(J.Week),Ce(J.Day),Ce(J.Hour))},{get:Ce(J.Second),in:br(Ce(J.Year),Ce(J.Month),Ce(J.Week),Ce(J.Day),Ce(J.Hour),Ce(J.Minute))},{get:Ce(J.Millisecond),in:br(Ce(J.Year),Ce(J.Month),Ce(J.Week),Ce(J.Day),Ce(J.Hour),Ce(J.Minute),Ce(J.Second))}));tf({keys:sa(le),values:-1,partial:!0});var yy;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(yy||(yy={}));var Yg;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Yg||(Yg={}));var wy;(function(e){e.Year="year",e.Month="month",e.Day="day"})(wy||(wy={}));const oN={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};k8(oN,en(Yg));KI({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return iN(e)}});function iN(e){return se.fromISO(e).toUTC().toISO()===e}i(iN,"isValidIsoString");const aN=_e({listen(e,r){return()=>!1},destroy(){},removeListener(e){return!1},value:eN()});function g0(e){return ri(e,aN,{allowExtraKeys:!0})}i(g0,"isObservableBase");class s$ extends G5{static{i(this,"Observable")}value;equalityCheck;constructor(r){super(),this.value=r.defaultValue,this.equalityCheck="equalityCheck"in r?r.equalityCheck:dp}setValue(r){return super.setValue(r)}listen(r,t){return super.listen(r,t)}removeListener(r){return super.removeListener(r)}}const{I:sN}=tC,ky=i(e=>e,"i$1"),$y=i(()=>document.createComment(""),"s"),rl=i((e,r,t)=>{const n=e._$AA.parentNode,o=r===void 0?e._$AB:r._$AA;if(t===void 0){const a=n.insertBefore($y(),o),s=n.insertBefore($y(),o);t=new sN(a,s,e,e.options)}else{const a=t._$AB.nextSibling,s=t._$AM,l=s!==e;if(l){let u;t._$AQ?.(e),t._$AM=e,t._$AP!==void 0&&(u=e._$AU)!==s._$AU&&t._$AP(u)}if(a!==o||l){let u=t._$AA;for(;u!==a;){const f=ky(u).nextSibling;ky(n).insertBefore(u,o),u=f}}}return t},"v"),Ri=i((e,r,t=e)=>(e._$AI(r,t),e),"u$1"),lN={},uN=i((e,r=lN)=>e._$AH=r,"p$2"),cN=i(e=>e._$AH,"M$1"),h0=i(e=>{e._$AR(),e._$AA.remove()},"h");const nf={ATTRIBUTE:1,CHILD:2,ELEMENT:6},uo=i(e=>(...r)=>({_$litDirective$:e,values:r}),"e$4");class co{static{i(this,"i")}constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,n){this._$Ct=r,this._$AM=t,this._$Ci=n}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}}const dN={attribute:!0,type:String,converter:Oc,reflect:!1,hasChanged:Hh},fN=i((e=dN,r,t)=>{const{kind:n,metadata:o}=t;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(t.name,e),n==="accessor"){const{name:s}=t;return{set(l){const u=r.get.call(this);r.set.call(this,l),this.requestUpdate(s,u,e,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,e,l),l}}}if(n==="setter"){const{name:s}=t;return function(l){const u=this[s];r.call(this,l),this.requestUpdate(s,u,e,!0,l)}}throw Error("Unsupported decorator location: "+n)},"r");function gN(e){return(r,t)=>typeof t=="object"?fN(e,r,t):((n,o,a)=>{const s=o.hasOwnProperty(a);return o.constructor.createProperty(a,n),s?Object.getOwnPropertyDescriptor(o,a):void 0})(e,r,t)}i(gN,"n$1");const Gr=uo(class extends co{constructor(e){if(super(e),e.type!==nf.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(r=>e[r]).join(" ")+" "}update(e,[r]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in r)r[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(r)}const t=e.element.classList;for(const n of this.st)n in r||(t.remove(n),this.st.delete(n));for(const n in r){const o=!!r[n];o===this.st.has(n)||this.nt?.has(n)||(o?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return an}});const Ue=i(e=>e??ee,"o$1");let Jg=class extends co{static{i(this,"e")}constructor(r){if(super(r),this.it=ee,r.type!==nf.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===ee||r==null)return this._t=void 0,this.it=r;if(r===an)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const t=[r];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Jg.directiveName="unsafeHTML",Jg.resultType=1;const xy=uo(Jg);function hN(e,r,t){return e?r(e):t?.(e)}i(hN,"n");class pN extends Cl{static{i(this,"DeclarativeElement")}static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function mN(e,r,t){const n=!r.length&&!t.length,o=e.length?!1:!r.filter(l=>!!l.index).length;if(n||o)return[...e];const a=e.map(l=>[l]);return a.length||(a[0]=[]),t.forEach(l=>{l>=0&&l<e.length&&(a[l]=[])}),r.forEach(l=>{const u=a[l.index];u&&u.splice(0,0,...l.values)}),a.flat()}i(mN,"insertAndRemoveValues");function Xg(e){return M.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}i(Xg,"isMinimalDefinitionWithInputs");function tm(e){return M.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}i(tm,"hasTagName");function l$(e){return Wt(e,r=>{if(Xg(r))return r.definition;if(tm(r))return r.tagInterpolationKey||r},M.isTruthy)}i(l$,"extractElementKeys");const u$=new WeakMap;function bN(e,r){const t=l$(r);return c$(u$,[e,...t]).value?.template}i(bN,"getAlreadyMappedTemplate");function vN(e,r,t){const n=l$(r);return f$(u$,[e,...n],t)}i(vN,"setMappedTemplate");function c$(e,r,t=0){const{currentTemplateAndNested:n,reason:o}=d$(e,r,t);return n?t===r.length-1?{value:n,reason:"reached end of keys array"}:n.nested?c$(n.nested,r,t+1):{value:void 0,reason:`map at key index ${t} did not have nested maps`}:{value:n,reason:o}}i(c$,"getNestedValues");function d$(e,r,t){const n=r[t];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${t} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${t} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${t} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}i(d$,"getCurrentKeyAndValue");function f$(e,r,t,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=d$(e,r,n);if(!a)return{result:!1,reason:s};const l=o??{nested:void 0,template:void 0};if(o||e.set(a,l),n===r.length-1)return l.template=t,{result:!0,reason:"set value at end of keys array"};const u=l.nested??new WeakMap;return l.nested||(l.nested=u),f$(u,r,t,n+1)}i(f$,"setNestedValues");function g$(e,r,t){const n=bN(e,r),o=n??t();if(!n){const l=vN(e,r,o);if(!l.result)throw new Error(`Failed to set template transform: ${l.reason}`)}const a=o.valuesTransform(r),s=mN(r,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}i(g$,"getTransformedTemplate");function h$(e,r,t,n){const o=[],a=[],s=[],l=[];return e.forEach((f,g)=>{const h=o.length-1,p=o[h],b=g-1,v=r[b];n&&n(f);let $,C=[];if(typeof p=="string"&&($=t(p,f,v),$)){o[h]=[p,$.replacement].join(""),s.push(b);const A=$.getExtraValues;C=A?A(v):[],C.length&&A?(o[h]+=" ",C.forEach((N,_)=>{_&&o.push(" ")}),l.push(N=>{const _=N[b],H=A(_);return{index:b,values:H}}),o.push(f)):o[h]+=f}$||o.push(f);const E=e.raw[g];$?(a[h]=[a[h],$.replacement,E].join(""),C.length&&C.forEach(()=>{a.push("")})):a.push(E)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(f){const g=l.flatMap(h=>h(f));return{valueIndexDeletions:s,valueInsertions:g}}}}i(h$,"transformTemplate");function yN(...[e,r,t]){if(tm(t))return{replacement:t.tagName,getExtraValues:void 0}}i(yN,"transformCss");function wN(e,r){return h$(e,r,yN)}i(wN,"transformCssTemplate");function k(e,...r){const t=g$(e,r,()=>wN(e,r));return t5(t.strings,...t.values)}i(k,"css");const kN={allowPolymorphicState:!1,errorHandler:void 0};function p$(e,r){const t=e.instanceState;Ke(r).forEach(n=>{if(t&&n in t)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=r[n]:e[n]=r[n]}),"instanceInputs"in e&&Ke(e.instanceInputs).forEach(n=>{n in r||(e.instanceInputs[n]=void 0)})}i(p$,"assignInputs");class $N extends CustomEvent{static{i(this,"TypedEvent")}_type="";get type(){return this._type}constructor(r,t){super(typeof r=="string"?r:r.type,{detail:t,bubbles:!0,composed:!0})}}function nm(){return e=>class extends $N{static type=e;_type=e;constructor(r){super(e,r)}}}i(nm,"defineTypedEvent");function Re(){return nm()}i(Re,"defineElementEvent");function xN(e,r){return r?Object.keys(r).filter(t=>{if(typeof t!="string")throw new TypeError(`Expected event key of type string but got type '${typeof t}' for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,n)=>{const o=nm()([e,n].join("-"));return t[n]=o,t},{}):{}}i(xN,"createEventDescriptorMap");function DN(e){return e?qe(e,r=>r):{}}i(DN,"createHostClassNamesMap");function m$(e,r){r in e||gN()(e,r)}i(m$,"bindReactiveProperty");function CN(e,r,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${t.toLowerCase()}'`);if(!(e in r))throw new Error(`Property '${String(e)}' does not exist on '${t.toLowerCase()}'.`)}i(CN,"assertValidPropertyName");function Dy(e,r){const t=e;function n(s){r?CN(s,e,e.tagName):m$(e,s)}i(n,"verifyProperty");function o(s,l){return n(l),t[l]}return i(o,"valueGetter"),new Proxy({},{get:o,set(s,l,u){n(l);const f=t[l];function g(p){s[l]=p,t[l]=p}i(g,"setValueOnElement");const h=e.observablePropertyListenerMap[l];if(f!==u&&g0(f)&&h&&f.removeListener(h),g0(u))if(h)u.listen(!1,h);else{let p=function(){e.requestUpdate()};i(p,"newListener"),e.observablePropertyListenerMap[l]=p,u.listen(!1,p)}else g0(f)&&(e.observablePropertyListenerMap[l]=void 0);return g(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,l){if(l in s)return{get value(){return o(s,l)},configurable:!0,enumerable:!0}},has(s,l){return Reflect.has(s,l)}})}i(Dy,"createElementPropertyProxy");function Cy(e,r){const t=[e,"-"].join("");Object.keys(r).forEach(n=>{if(!n.startsWith(t))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}i(Cy,"assertValidStringNames");function Ey(e,r,t){return t?di(t,o=>({key:o,value:[e,r,o].join("-")}),{}):{}}i(Ey,"createStringNameMap");function EN({hostClassNames:e,cssVars:r}){return{hostClasses:qe(e,(t,n)=>({name:Oe(n),selector:Oe(`:host(.${n})`)})),cssVars:r}}i(EN,"createStylesCallbackInput");function AN({host:e,hostClassesInit:r,hostClassNames:t,state:n,inputs:o}){r&&Ke(r).forEach(a=>{const s=r[a],l=t[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(l):e.classList.remove(l))})}i(AN,"applyHostClasses");function FN({element:e,eventsMap:r,cssVars:t,slotNamesMap:n,testIdsMap:o}){function a(l){Ke(l).forEach(u=>{const f=l[u];e.instanceState[u]=f})}return i(a,"updateState"),{cssVars:t,slotNames:n,testIds:o,dispatch:i(l=>e.dispatchEvent(l),"dispatch"),events:r,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:a}}i(FN,"createRenderParams");function Jn(...e){return Er.isEmpty(e),r=>{const t=r;if(!M.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");return SN({...t,options:{...t.options}})}}i(Jn,"defineElement");function SN(e){if(!M.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!M.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const r={...kN,...e.options},t=xN(e.tagName,e.events),n=DN(e.hostClasses);e.hostClasses&&Cy(e.tagName,e.hostClasses),e.cssVars&&Cy(e.tagName,e.cssVars);const o=e.cssVars?Nt(e.cssVars):{},a=Ey(e.tagName,"slot",e.slotNames),s=Ey(e.tagName,"test-id",e.testIds),l=typeof e.styles=="function"?e.styles(EN({hostClassNames:n,cssVars:o})):e.styles||k``,u=e.render;function f(...[h]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:g,inputs:h}}i(f,"typedAssignCallback");const g=class extends pN{static{i(this,"anonymousClass")}static elementOptions=r;static tagName=e.tagName;static styles=l;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return FN({element:this,eventsMap:t,cssVars:o,slotNamesMap:a,testIdsMap:s})}static assign=f;static events=t;static render=u;static hostClasses=n;static cssVars=o;static init=e;static slotNames=a;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const h=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const b=e.state(h);if(b instanceof Promise)throw new TypeError("init cannot be asynchronous");Ke(b).forEach(v=>{m$(this,v),this.instanceState[v]=b[v]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(h)instanceof Promise))throw new TypeError("init cannot be asynchronous");const p=u(h);if(p instanceof Promise)throw new TypeError("render cannot be asynchronous");return AN({host:h.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:h.state,inputs:h.inputs}),this._lastRenderedProps={inputs:{...h.inputs},state:{...h.state}},p}catch(h){const p=ha(h,`Failed to render ${e.tagName}`);return console.error(p),this._lastRenderError=p,r.errorHandler?.(p),nt(p)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const h=this.createRenderParams();if(e.init(h)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(h=>{M.hasKey(h,"destroy")&&M.isFunction(h.destroy)&&h.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup&&this._stateCalled){const h=this.createRenderParams();if(e.cleanup(h)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(h){p$(this,h)}observablePropertyListenerMap={};instanceInputs=Dy(this,!1);instanceState=Dy(this,!r.allowPolymorphicState);constructor(){super(),this.definition=g}};return Object.defineProperties(g,{name:{value:D8(e.tagName,{firstLetterCase:Rl.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,g)),g}i(SN,"internalDefineElement");class MN extends qa{static{i(this,"InternalAsyncPropClass")}isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function TN(e){return new MN(e)}i(TN,"asyncProp");const Ay=i((e,r,t)=>{const n=new Map;for(let o=r;o<=t;o++)n.set(e[o],o);return n},"u"),PN=uo(class extends co{constructor(e){if(super(e),e.type!==nf.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,r,t){let n;t===void 0?t=r:r!==void 0&&(n=r);const o=[],a=[];let s=0;for(const l of e)o[s]=n?n(l,s):s,a[s]=t(l,s),s++;return{values:a,keys:o}}render(e,r,t){return this.dt(e,r,t).values}update(e,[r,t,n]){const o=cN(e),{values:a,keys:s}=this.dt(r,t,n);if(!Array.isArray(o))return this.ut=s,a;const l=this.ut??=[],u=[];let f,g,h=0,p=o.length-1,b=0,v=a.length-1;for(;h<=p&&b<=v;)if(o[h]===null)h++;else if(o[p]===null)p--;else if(l[h]===s[b])u[b]=Ri(o[h],a[b]),h++,b++;else if(l[p]===s[v])u[v]=Ri(o[p],a[v]),p--,v--;else if(l[h]===s[v])u[v]=Ri(o[h],a[v]),rl(e,u[v+1],o[h]),h++,v--;else if(l[p]===s[b])u[b]=Ri(o[p],a[b]),rl(e,o[h],o[p]),p--,b++;else if(f===void 0&&(f=Ay(s,b,v),g=Ay(l,h,p)),f.has(l[h]))if(f.has(l[p])){const $=g.get(s[b]),C=$!==void 0?o[$]:null;if(C===null){const E=rl(e,o[h]);Ri(E,a[b]),u[b]=E}else u[b]=Ri(C,a[b]),rl(e,o[h],C),o[$]=null;b++}else h0(o[p]),p--;else h0(o[h]),h++;for(;b<=v;){const $=rl(e,u[v+1]);Ri($,a[b]),u[b++]=$}for(;h<=p;){const $=o[h++];$!==null&&h0($)}return this.ut=s,uN(e,u),an}}),IN=PN;function of(e,r){return la(e,r),e.element}i(of,"extractElement");function NN(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}i(NN,"getPartHostTagName");function la(e,r){const t=NN(e),n=t?`: in ${t}`:"";if(e.type!==nf.ELEMENT)throw new Error(`${r} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${r} directive found no element${n}.`)}i(la,"assertIsElementPartInfo");function BN(e,r){return uo(class extends co{element;constructor(t){super(t),this.element=ur.instanceOf(of(t,e),HTMLElement)}render(...t){return r({params:t,directive:this,element:this.element}),an}})}i(BN,"createMutateDirective");const En=BN("attributes",({element:e,params:[r],directive:t})=>{if(!r)return;const o=ma(t,"allAttributesApplied",()=>new Set);Ke(r).forEach(a=>{if(a.toLowerCase()!==a)throw new Error(`Cannot assign attribute name with uppercase letters: ${a}`);o.add(a)}),o.forEach(a=>{const s=r[a];s==null||s===!1||s===ee?e.removeAttribute(a):s===""||s===!0?e.setAttribute(a,""):e.setAttribute(a,String(s))})});function ON(e){const r=uo(class extends co{element;constructor(t){super(t),this.element=of(t,e)}render(t){return this.element.setAttribute(e,t),an}});return{attributeSelector(t){return`[${e}="${t}"]`},attributeDirective(t){return r(t)},attributeName:e}}i(ON,"createAttributeDirective");function U(e,r){return RN(e,r)}i(U,"listen");const RN=uo(class extends co{element;lastListenerMetaData;constructor(e){super(e),this.element=of(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,r){return{eventType:e,callback:r,listener:i(t=>this.lastListenerMetaData?.callback(t),"listener")}}render(e,r){const t=typeof e=="string"?e:e.type;if(typeof t!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(t)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===t?this.lastListenerMetaData.callback=r:this.resetListener(this.createListenerMetaData(t,r)),an}});function LN(e){return U("keydown",async r=>{const t=r.code.toLowerCase();(t.includes("enter")||t.includes("return")||t==="space")&&(r.stopImmediatePropagation(),r.preventDefault(),await e())})}i(LN,"listenToActivate");const Fy="onDomCreated",ua=uo(class extends co{element;constructor(e){super(e),la(e,Fy)}update(e,[r]){la(e,Fy);const t=e.element;return t!==this.element&&(window.requestAnimationFrame(()=>r(t)),this.element=t),this.render(r)}render(e){}}),Sy="onDomRendered",jN=uo(class extends co{constructor(e){super(e),la(e,Sy)}update(e,[r]){la(e,Sy);const t=e.element;return window.requestAnimationFrame(()=>r(t)),this.render(r)}render(e){}}),My="onResize",om=uo(class extends co{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&UN(this.element,this.callback,e)});callback;constructor(e){super(e),la(e,My)}update(e,[r]){la(e,My),this.callback=r;const t=e.element,n=this.element;return t!==n&&(this.element=t,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(t)),this.render(r)}render(e){}});function UN(e,r,t){const n=t[0];if(!n)throw console.error(t),new Error("Resize observation triggered but the first entry was empty.");r({target:n.target,contentRect:n.contentRect},e)}i(UN,"handleOnResizeCallback");function Wr(e,r,t){return hN(e,()=>r,()=>t)}i(Wr,"renderIf");const{attributeDirective:_N}=ON("data-test-id"),ti=_N;function im(e){const{assertInputs:r,transformInputs:t}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(r(o),Jn(...n)(t(o)))}i(im,"wrapDefineElement");function zN(e,r){return qN(void 0,e)}i(zN,"assign");const qN=uo(class extends co{element;constructor(e){super(e),this.element=of(e,"assign")}render(e,r){return p$(this.element,r),an}}),VN={};function WN(e,r){return r.map((t,n)=>{const o=e[n],a=e[n+1];if(o&&a){const{shouldHaveTagNameHere:s}=b$(o,a);if(s&&M.isString(t))return{tagName:t,tagInterpolationKey:ma(VN,t,()=>({tagName:t}))}}return t})}i(WN,"mapHtmlValues");function b$(e,r){const t=e.trim().endsWith("<")&&!!r.match(/^[\s>]/),n=e.trim().endsWith("</")&&r.trim().startsWith(">");return{isOpeningTag:t,shouldHaveTagNameHere:t||n}}i(b$,"classifyValue");function KN(...[e,r,t]){const n=Xg(t)?t.definition:t,{isOpeningTag:o,shouldHaveTagNameHere:a}=b$(e,r),s=tm(n);if(s&&a&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(a&&!s)throw console.error({lastNewString:e,currentTemplateString:r,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(u){const f=Xg(u)?u.inputs:void 0;return[o&&f?zN(f):void 0].filter(M.isTruthy)}}}i(KN,"transformHtml");function HN(e){}i(HN,"stringValidator");function GN(e){return h$(e.strings,e.values,KN,HN)}i(GN,"transformHtmlTemplate");function m(e,...r){const t=WN(e,r),n=Z8(e,...t),o=g$(e,t,()=>GN(n));return{...n,strings:o.strings,values:o.values}}i(m,"html");function Qg(e){if("templateString"in e)return e.templateString;const{strings:r,values:t}=e;if(!r?.length&&!t?.length)return"";const n=[...t||[],""],a=(r??[""]).map((s,l)=>{const u=ZN(s,n[l]);return`${s}${u}`});return Gw(a.join(""))}i(Qg,"convertTemplateToString");function ZN(e,r){return r._$litType$!=null||r._$litDirective$!=null?Qg(r):Array.isArray(r)?r.map(n=>Qg(n)).join(""):e.endsWith("=")?`"${r}"`:r}i(ZN,"extractValue");function v$(e){return qe(e,(r,t)=>t instanceof rr?Oe(t.toString({format:"hex"})):v$(t))}i(v$,"colorsObjectToCssResult");const YN="dodgerblue";function eh(e){const r=Math.abs(e.contrast("white","APCA")),t=Math.abs(e.contrast("black","APCA"));return r>t?"white":"black"}i(eh,"calculateTextColorString");function p0({background:e,foreground:r}){return{background:e??new rr(eh(r)),foreground:r??new rr(eh(e))}}i(p0,"createColorPair");var Qc;(function(e){e.Dark="dark",e.Light="light"})(Qc||(Qc={}));function JN(e){return e==="black"?"white":"black"}i(JN,"flipBackForeground");const XN={black:{foregroundFaint1:new rr("#ccc"),foregroundFaint2:new rr("#eee")},white:{foregroundFaint1:new rr("#ccc"),foregroundFaint2:new rr("#eee")}},QN={black:{backgroundFaint1:new rr("#666"),backgroundFaint2:new rr("#444")},white:{backgroundFaint1:new rr("#ccc"),backgroundFaint2:new rr("#fafafa")}};function Ty({themeColor:e=YN,themeStyle:r=Qc.Light}={}){const t=new rr(e),n=new rr(r===Qc.Dark?"black":"white"),o=eh(n),a=new rr(o),s={nav:{hover:p0({background:t.clone().set({"hsl.l":93})}),active:p0({background:t.clone().set({"hsl.l":90})}),selected:p0({background:t.clone().set({"hsl.l":85})})},accent:{icon:t.clone().set({"hsl.l":40})},page:{background:n,...QN[JN(o)],foreground:a,...XN[o]}};return v$(s)}i(Ty,"createTheme");async function Py(e=1){const r=new Ac;function t(){requestAnimationFrame(()=>{e--,e?t():r.resolve()})}return i(t,"requestNextFrame"),t(),r.promise}i(Py,"waitForAnimationFrame");function eB(e,r){return{element:e,children:y$(e)}}i(eB,"getNestedChildrenTree");function y$(e,r,t){return rB(e).map(n=>{const o=y$(n);return{element:n,children:o}})}i(y$,"recursivelyGetNestedChildrenTree");function rB(e){return[...e.children,...e.shadowRoot?.children??[]]}i(rB,"getDirectChildren");function m0(e){return e.matches(":focus")}i(m0,"isElementFocused");function am(e){if(e instanceof ShadowRoot)return e.host;const r=e.parentNode;if(r)return r instanceof Element?r:am(r)}i(am,"getParentElement");function w$(e,r){if(r(e))return e;const t=am(e);if(t)return w$(t,r)}i(w$,"findMatchingAncestor");function Aa(e,r,t={}){const n=t.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof r)){const o=r.name,a=n?.constructor.name,s=t.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${a}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${a}'.`;throw new Error(s)}return n}i(Aa,"extractEventTarget");function k$(e){const r=am(e);return r&&w$(r,t=>globalThis.getComputedStyle(t).overflowY!=="visible")||document.body}i(k$,"findOverflowAncestor");function $$(e){let r=0,t=document.activeElement||void 0;for(;t;){if(e({depth:r,element:t}))return r;t=t.shadowRoot?.activeElement||void 0,t&&++r}return r}i($$,"walkActiveElement");function tB({searchQuery:e,searchIn:r}){const t=r.length,n=e.length;if(n>t)return!1;if(n===t)return e===r;const o=r.toLowerCase(),a=e.toLowerCase();e:for(let s=0,l=0;s<n;s++){const u=a.codePointAt(s);for(;l<t;)if(o.codePointAt(l++)===u)continue e;return!1}return!0}i(tB,"fuzzySearch");const nB=Po(32);function kc(e){return e.join(nB)}i(kc,"createBreadcrumbsSearchKey");function x$(e){if(!e.length)return[];const r=kc(e),t=x$(e.slice(0,-1));return[r,...t]}i(x$,"getFullTreeKeysToInclude");const oB=["error","errors"];function iB(e){return oB.includes(e)}i(iB,"isSearchingForErrors");function aB({flattenedNodes:e,searchQuery:r}){const t={};function n(o){Object.values(o.children).map(s=>(n(s),kc(s.fullUrlBreadcrumbs))).forEach(s=>t[s]=!0)}return i(n,"addChildren"),e.forEach(o=>{const a=o.entry.errors.length&&iB(r),s=kc(o.fullUrlBreadcrumbs);if(tB({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(u=>M.isString(u)?u:Qg(u))].join(" ").toLowerCase(),searchQuery:r.toLowerCase()})||a||t[s]){const u=x$(o.fullUrlBreadcrumbs);n(o),u.forEach(f=>t[f]=!0)}else t[s]=!1}),e.filter(o=>{const a=kc(o.fullUrlBreadcrumbs),s=t[a];if(!M.isBoolean(s))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}i(aB,"searchFlattenedNodes");class sm extends Error{static{i(this,"SpaRouterError")}name="SpaRouterError"}class Iy extends sm{static{i(this,"GlobalUrlEventsConsolidationError")}name="GlobalUrlEventsConsolidationError"}class sB extends sm{static{i(this,"SanitizationDepthMaxed")}name="SanitizationDepthMaxed"}function lB(e,r){return r.fullPaths.every((t,n)=>t.startsWith(":")?!!e[n]:e[n]===t)}i(lB,"matchesPaths");function b0(e,r,t){return lB(e.paths,r)}i(b0,"routeHasPaths");function D$(e,r){const t=Object.entries(e.children||{}),n=r.length?` at ${r.join(" -> ")}.`:".";if(e.allowBare&&e.anyChildren)throw new Error(`Invalid tree: cannot define both allowBare and anyChildren${n}`);if(e.anyChildren&&t.length)throw new Error(`Invalid tree: cannot define anyChildren and definite children${n}`);if(!e.allowBare&&!e.anyChildren&&!t.some(([o])=>!o.startsWith(":")))throw new Error(`Invalid tree: allowBare is false but there are no definite children${n}`);e.anyChildren||t.forEach(([o,a])=>{M.isEmpty(a)||D$(a,[...r,o])})}i(D$,"checkTree");function uB(e){return w8(e)}i(uB,"removePathsTypes");function rh(e,r){const t=e.children,n=r[r.length-1]||"",o=Object.defineProperty({path:n,fullPaths:r,children:t&&Object.keys(t).length?qe(t,(a,s)=>rh(s,[...r,a])):{}},"PathsType",{enumerable:!1,configurable:!1,get(){throw new Error("Do not access PathsType as value, it's only a type.")}});return n.startsWith(":")?{...o,fill:i(a=>rh(e,[...r.slice(0,-1),a]),"fill")}:o}i(rh,"generatePathTreePaths");class cB{static{i(this,"PathTree")}tree;paths;pathsWithoutTypes;constructor(r){this.tree=r,D$(this.tree,[]),this.paths=rh(r,[]),this.pathsWithoutTypes=uB(this.paths)}get PathsType(){throw new Error("PathTree.PathsType is a type only, it cannot be accessed as a runtime value.")}sanitizePaths(r){return th(r,this.tree)}}function th(e,r){if("anyChildren"in r&&r.anyChildren)return e;if("allowBare"in r){const t=r.children||{};if(M.isLengthAtLeast(e,1)){const n=e[0],o=t[n]||Object.entries(t).find(([a])=>a.startsWith(":"))?.[1];if(o&&!("disable"in o&&o.disable)){if("redirectTo"in o&&o.redirectTo){if(!t[o.redirectTo])throw new Error(`Invalid redirect from '${n}' to '${o.redirectTo}'.`);return th([o.redirectTo,...e.slice(1)],r)}return[n,...th(e.slice(1),o)]}}if(r.allowBare)return[];{const n=An(t).find(([o,a])=>!o.startsWith(":")&&!("disable"in a&&a.disable))?.[0];if(!n)throw new Error("Got blocked bare path but no children exist.");return[n]}}else return[]}i(th,"sanitizeTreePaths");_e({paths:[""],search:lt(br(void 0,tf({keys:"",values:[""]}))),hash:lt(br(void 0,""))});const dB=_e({basePath:lt("",{alsoUndefined:!0}),sanitizeRoute:i((e=>e),"sanitizeRoute"),maxListenerCount:lt(1,{alsoUndefined:!0}),disableWarnings:lt(!1,{alsoUndefined:!0}),isPaused:lt(!1,{alsoUndefined:!0})}),v0="://";function lm(...e){const r=e.join("/"),[t,n=""]=r.includes(v0)?r.split(v0):["",r];let o=!1;const a=n.replace(/\/{2,}/g,"/").split("/").reduce((s,l,u,f)=>{if(o)return s;const g=f[u+1];let h=l;const p=g?.startsWith("?"),b=!l.includes("?")&&p,v=g==="?";if(p||b){o=!0;let $=!1;const C=f.slice(u+2).reduce((E,A)=>(A.includes("#")&&($=!0),$?E.concat(A):[E,A].join("&")),"");h=[l,g,v?Gi({value:C,prefix:"&"}):C].join("")}return s.concat(h)},[]);return[t,t?v0:"",a.join("/")].join("")}i(lm,"joinUrlPaths");var ys;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(ys||(ys={}));var ws;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(ws||(ws={}));const fB=_e({encoding:lt(br(void 0,sa(ys))),searchParamStrategy:lt(br(void 0,sa(ws)))});function tc(e,r){return e.map(t=>{if(t!=null)return Qa(String(t),r)}).filter(t=>t!=null)}i(tc,"codeValues");function Qa(e,r){return r?.encoding===ys.Decode?decodeURIComponent(e):r?.encoding===ys.Encode?encodeURIComponent(e):e}i(Qa,"codeValue");const gB=_e(tf({keys:"",values:[""]}));function hB(e,r,t){const n=t?.searchParamStrategy===ws.Clear?{}:qe(e,(s,l)=>ND(l)),o=qe(r,(s,l)=>{if(t?.searchParamStrategy===ws.Append){const u=n[s],f=M.isArray(u)?u:[u];if(l){const g=M.isArray(l)?l:[l];return tc([...f,...g],t)}else return tc(f,t)}else return M.isArray(l)?tc(l,t):l?tc([l],t):void 0});return $d({...n,...o},(s,l)=>!!l)}i(hB,"combineSearchParams");function C$(e,r){return M.isString(e)&&!e.includes("?")?{}:(M.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(a=>{const[s,...l]=QD(a,"=");return[s,l.length?l.join("="):void 0]}).reduce((a,[s,l])=>{const u=E$({options:r,key:s,value:l}),f=ma(a,u.key,()=>[]);return l!=null&&f.push(u.value),a},{})}i(C$,"searchParamsToObject");function pB(e){if(e!=null)return M.isArray(e)?[...e]:e===""?[]:[e]}i(pB,"wrapParamValue");function mB(e,r){const t=Wt(Object.entries(e),([n,o])=>{const a=pB(o);return a?.length?a.map(s=>{const l=E$({options:r,key:n,value:s});return[l.key,l.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return t.length?Pt({value:t.join("&"),prefix:"?"}):""}i(mB,"searchParamsToString");function E$({options:e,key:r,value:t}){return{key:Qa(r,e),value:Qa(String(t),e)}}i(E$,"codeParamKeyValue");function A$({hash:e,hostname:r,password:t,pathname:n,port:o,protocol:a,search:s,username:l}){return[a?a+"://":"",l?l+":":"",t?t+"@":"",af({hostname:r,port:o}),um({hash:e,pathname:n,search:s})].join("")}i(A$,"createHref");function F$({pathname:e}){const r=Gi({value:e,prefix:"/"});return r?r.split("/"):[]}i(F$,"createPaths");function um({hash:e,pathname:r,search:t}){return[Pt({value:r,prefix:"/"}),t?Pt({value:t,prefix:"?"}):"",e?Pt({value:e,prefix:"#"}):""].join("")}i(um,"createFullPath");function af({hostname:e,port:r}){return[e,r?":"+r:""].join("")}i(af,"createHost");function S$({hostname:e,port:r,protocol:t}){return[t,af({hostname:e,port:r})].filter(M.isTruthy).join("://")}i(S$,"createOrigin");function es(e,r){const t=M.isString(e)?Gi({value:e,prefix:"."}):e.toString(),n=t.replace(/^[^#]*(?:#|$)/,""),o=n?Pt({value:Qa(n,r),prefix:"#"}):"",a=t.replace(/#[^#]*$/,""),s=a.replace(/^[^?]*(?:\?|$)/,""),l=s?Pt({value:Qa(s,r),prefix:"?"}):"",u=a.replace(/\?[^?]*$/,""),f=u.includes("://")?u.replace(/:\/\/.*$/,""):"",g=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),h=g.replace(/@.*/,""),p=g.replace(/^[^@]*@/,""),b=h!==p,[v,...$]=b?h.split(":").reverse():[],C=$.toReversed().join("").replace(/[/:]/g,"")||"",E=v?.replace(/[/:]/g,"")||"",A=XD(p.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),N=A[0]?.endsWith("]")?"":A[1]===":"&&A[0]||"",H=p.replace(new RegExp(`:${N}($|/)`),"$1").replace(/\/.*/,""),ce=p.replace(/^[^/]*(\/|$)/,"$1"),Te=Qa(ce.replace(/^[^/]*(?:\/|$)/,"/"),r),be=af({hostname:H,port:N}),Se=S$({hostname:H,port:N,protocol:f}),or=A$({hash:o,hostname:H,password:E,pathname:Te,port:N,protocol:f,search:l,username:C}),ir=C$(l),jr=F$({pathname:Te});return{fullPath:um({hash:o,pathname:Te,search:l}),hash:o,host:be,hostname:H,href:or,origin:Se,password:E,pathname:Te,paths:jr,port:N,protocol:f,search:l,searchParams:ir,username:C}}i(es,"parseUrl");_e({hash:lt(br(void 0,"")),search:lt(br(void 0,"",tf({keys:"",values:br(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:lt(br(void 0,"")),pathname:lt(br(void 0,"")),paths:lt(br(void 0,[""])),protocol:lt(br(void 0,"")),username:lt(br(void 0,"")),password:lt(br(void 0,"")),port:lt(br(void 0,"",-1))});function bB(e,r,t){const n=!!t,o=r==null||ri(r,fB,{allowExtraKeys:!1}),a=o?es(""):M.instanceOf(e,URL)||M.isString(e)?es(e):e,s=o?e:r,l=M.isString(s)&&s.startsWith("."),u=M.isString(s)||M.instanceOf(s,URL)?$d(es(s),($,C)=>M.isTruthy(C)):s,f=n?t:o?r:void 0,g=qe(a,($,C)=>{if(!M.hasKey(u,$))return C;const E=u[$];return M.isNumber(E)?String(E):M.isString(E)?$==="hash"&&E?Pt({value:E,prefix:"#"}):$==="pathname"?Pt({value:E,prefix:"/"}):E:C});M.hasKey(u,"paths")&&u.paths&&(g.pathname=lm(l?a.pathname:"",...u.paths));const h=M.isString(u.search)?C$(Pt({value:u.search,prefix:"?"})):Rn(u.search||{}),p=hB(g.searchParams,h,{...f,encoding:ys.None}),b=mB(p,f);return{...g,searchParams:p,search:b,paths:F$(g),fullPath:um(g),host:af(g),origin:S$(g),href:A$({...g,search:b})}}i(bB,"buildUrl");const vB=_e({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:gB,hash:"",fullPath:"/",href:"/"});({...vB.default});const yB=0;function M$(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==yB)}i(M$,"shouldClickEventTriggerRouteChange");const sf="locationchange",Co=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Ny=Co?.pushState;function By(...e){if(!Ny)return;const r=Ny.apply(Co,e);return globalThis.dispatchEvent(new Event(sf)),r}i(By,"newPushState");const Oy=Co?.replaceState;function Ry(...e){if(!Oy)return;const r=Oy.apply(Co,e);return globalThis.dispatchEvent(new Event(sf)),r}i(Ry,"newReplaceState");function wB(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Co)){{if(Co.pushState===By)throw new Iy("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Co.replaceState===Ry)throw new Iy("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Co.pushState=By,Co.replaceState=Ry,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(sf))})}}i(wB,"consolidateGlobalUrlEvents");function nc(e,r){const t=es(e),n=Gi({value:Gi({value:t.pathname,prefix:Pt({value:r||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],a=Object.keys(t.searchParams).length?t.searchParams:void 0,s=t.hash?Gi({value:t.hash,prefix:"#"}):void 0;return{paths:o,search:a,hash:s}}i(nc,"parseUrlIntoRawRoute");class kB{static{i(this,"SpaRouter")}innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(r){Jc(r,dB),this.params={...r};const t=this.readCurrentRoute();this.innerObservable=new s$({defaultValue:t,equalityCheck:i(()=>!1,"equalityCheck")}),wB(),this.removeGlobalListener=ao(globalThis,sf,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new sB("Looping route sanitization detected; aborting window URL change listener.");const n=nc(globalThis.location.href,this.params.basePath),o=r.sanitizeRoute(n);M.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),r.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(t,{replace:!0})}routeIncludesBasePath(r){return!r.paths||!this.params.basePath?!1:lm(...r.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(nc(globalThis.location.href,this.params.basePath))}sanitizeRoute(r){return this.params.sanitizeRoute(r)}createRouteUrl(r){const t={...nc(globalThis.location.href,this.params.basePath),...r},n=this.sanitizeRoute(t),a=this.routeIncludesBasePath(nc(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return bB(globalThis.location.href,{paths:a.paths,search:a.search,hash:a.hash?Pt({value:a.hash,prefix:"#"}):""},{searchParamStrategy:ws.Clear}).href}setRoute(r,t={}){const n=this.createRouteUrl(r),{fullPath:o}=es(n);return this.params.isPaused||!t.force&&M.jsonEquals(es(globalThis.location.href).fullPath,o)?!1:t.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(r,t){return M$(t)?(t.preventDefault(),this.setRoute(r)):!1}listen(r,t){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new sm(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(r,t),()=>this.removeListener(t)}removeListener(r){return this.innerObservable.removeListener(r)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function $B(e){return new kB({basePath:e,sanitizeRoute(r){return{paths:xB(r.paths),hash:void 0,search:void 0}}})}i($B,"createBookRouter");function xB(e){const r=e[0];if(M.isEnumValue(r,_t)){if(r===_t.Book)return[_t.Book,...e.slice(1)];if(r===_t.Search)return e[1]?[r,e[1]]:[_t.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return as.paths}i(xB,"sanitizePaths");const ed=nm()("element-book-change-route"),y=Nt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function re({name:e,svgTemplate:r}){return{name:e,svgTemplate:r}}i(re,"defineIcon$1");const lf=re({name:"Check24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function Ly(e){return M.isPrimitive(e)||e instanceof ei?String(e):e.default}i(Ly,"noRefColorInitToString");function to(e,r,t,n){const o=`${t.prefix}-default-fg`,a=`${t.prefix}-default-bg`;if(M.isPrimitive(r)||r instanceof ei)return r;if("refDefaultBackground"in r)return`var(--${a}, ${Ly(t.background)})`;if("refDefaultForeground"in r)return`var(--${o}, ${Ly(t.foreground)})`;if("refBackground"in r||"refForeground"in r){const s=M.hasKey(r,"refBackground")?"refBackground":M.hasKey(r,"refForeground")?"refForeground":void 0,l=s&&M.hasKey(r,s)?r[s]:void 0,u=s==="refBackground"?"background":"foreground",f=l&&n[l];if(!f)throw new Error(`Color theme ${s} reference '${l}' does not exist. (Referenced from '${e}'.)`);const g=f[u]||(u==="foreground"?to(o,t.foreground,t,n):to(a,t.background,t,n));return`var(--${l}-${u==="foreground"?"fg":"bg"}, ${to(l,g,t,n)})`}else return r.value}i(to,"createColorCssVarDefault");const Ze="theme-default";function cm(e,r){try{if(Ze in r)throw new Error(`Cannot define theme color by name '${Ze}', it is used internally.`);const t=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,o=`${e.prefix}-default-inverse-fg`,a=`${e.prefix}-default-inverse-bg`,s={[t]:to(t,e.foreground,e,r),[n]:to(n,e.background,e,r),[o]:to(o,e.background,e,r),[a]:to(a,e.foreground,e,r)},l=Nt(s),u=An(r).reduce((v,[$,C])=>{const E=jy($),A=C.foreground?to([$,"foreground"].join(" "),C.foreground,e,r):`var(${l[t].name}, ${l[t].default})`,N=C.background?to([$,"background"].join(" "),C.background,e,r):`var(${l[n].name}, ${l[n].default})`;return v[E.foreground]=A,v[E.background]=N,v[E.foregroundInverse]=`var(--${E.background}, ${N})`,v[E.backgroundInverse]=`var(--${E.foreground}, ${A})`,v},{}),f=Nt(u),g={},h={};An(r).forEach(([v,$])=>{Er.isString(v);const C=jy(v),E=f[C.foreground],A=f[C.background],N=f[C.foregroundInverse],_=f[C.backgroundInverse];Er.isDefined(E),Er.isDefined(A),Er.isDefined(N),Er.isDefined(_),g[v]={foreground:E,background:A,init:$,name:v},h[v]={foreground:N,background:_,init:$,name:v}});const p={foreground:l[t],background:l[n],init:e,name:Ze},b={...p,foreground:l[o],background:l[a]};return{colors:{[Ze]:p,...g},inverse:{[Ze]:b,...h},init:{colors:r,default:e},prefix:e.prefix}}catch(t){throw globalThis.setTimeout(()=>Uw.error(t)),t}}i(cm,"defineColorTheme");function jy(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}i(jy,"createCssVarNames");const c=Nt({"vira-red-100":"#FFF6F5","vira-red-150":"#FFEDEB","vira-red-200":"#FFE4E1","vira-red-250":"#FFDCD8","vira-red-300":"#FFD1CB","vira-red-350":"#FFC1B8","vira-red-400":"#FFA79B","vira-red-450":"#FF8274","vira-red-500":"#FF564A","vira-red-550":"#F43A32","vira-red-600":"#E2322C","vira-red-650":"#D02C27","vira-red-700":"#BB2520","vira-red-750":"#9E231D","vira-red-800":"#82211A","vira-red-850":"#701A13","vira-red-900":"#611710","vira-red-950":"#52140D","vira-red-1000":"#43130D","vira-yellow-100":"#FEF9E4","vira-yellow-150":"#FDF2D1","vira-yellow-200":"#FDEABF","vira-yellow-250":"#FEE2AD","vira-yellow-300":"#FDD89B","vira-yellow-350":"#FAC986","vira-yellow-400":"#EFB669","vira-yellow-450":"#E29D34","vira-yellow-500":"#CE8800","vira-yellow-550":"#BB7B00","vira-yellow-600":"#AC7100","vira-yellow-650":"#9E6800","vira-yellow-700":"#8C5C00","vira-yellow-750":"#794D00","vira-yellow-800":"#683E00","vira-yellow-850":"#5B3301","vira-yellow-900":"#502A05","vira-yellow-950":"#442308","vira-yellow-1000":"#381D0B","vira-green-100":"#EBFFEE","vira-green-150":"#DDFBE2","vira-green-200":"#CDF8D6","vira-green-250":"#BFF5CC","vira-green-300":"#AFF0C0","vira-green-350":"#9AE8B1","vira-green-400":"#7FD99C","vira-green-450":"#52C87F","vira-green-500":"#1BB565","vira-green-550":"#04A559","vira-green-600":"#009852","vira-green-650":"#008C4A","vira-green-700":"#007C41","vira-green-750":"#016A38","vira-green-800":"#095831","vira-green-850":"#024B29","vira-green-900":"#014024","vira-green-950":"#02371F","vira-green-1000":"#062D1B","vira-teal-100":"#E8FEFD","vira-teal-150":"#D9FAF8","vira-teal-200":"#C9F6F3","vira-teal-250":"#BAF2ED","vira-teal-300":"#A9EDE6","vira-teal-350":"#95E4DB","vira-teal-400":"#79D5CA","vira-teal-450":"#47C3B7","vira-teal-500":"#00B0A4","vira-teal-550":"#00A094","vira-teal-600":"#009389","vira-teal-650":"#00877D","vira-teal-700":"#00786F","vira-teal-750":"#00665F","vira-teal-800":"#01554F","vira-teal-850":"#004843","vira-teal-900":"#003E3A","vira-teal-950":"#033531","vira-teal-1000":"#072B29","vira-blue-100":"#F5F9FF","vira-blue-150":"#EAF3FF","vira-blue-200":"#E0EDFF","vira-blue-250":"#D6E7FF","vira-blue-300":"#CBDFFF","vira-blue-350":"#B9D4FF","vira-blue-400":"#9EC3FF","vira-blue-450":"#7AADFF","vira-blue-500":"#5697FF","vira-blue-550":"#4988ED","vira-blue-600":"#427DDC","vira-blue-650":"#3B72CA","vira-blue-700":"#3365B6","vira-blue-750":"#2D569A","vira-blue-800":"#27487E","vira-blue-850":"#203D6C","vira-blue-900":"#1B345D","vira-blue-950":"#172C4F","vira-blue-1000":"#142540","vira-accent-100":"#F5F9FF","vira-accent-150":"#EAF3FF","vira-accent-200":"#E0EDFF","vira-accent-250":"#D6E7FF","vira-accent-300":"#CBDFFF","vira-accent-350":"#B9D4FF","vira-accent-400":"#9EC3FF","vira-accent-450":"#7AADFF","vira-accent-500":"#5697FF","vira-accent-550":"#4988ED","vira-accent-600":"#427DDC","vira-accent-650":"#3B72CA","vira-accent-700":"#3365B6","vira-accent-750":"#2D569A","vira-accent-800":"#27487E","vira-accent-850":"#203D6C","vira-accent-900":"#1B345D","vira-accent-950":"#172C4F","vira-accent-1000":"#142540","vira-purple-100":"#F9F7FF","vira-purple-150":"#F3EFFF","vira-purple-200":"#EDE8FF","vira-purple-250":"#E6E1FF","vira-purple-300":"#DED8FF","vira-purple-350":"#D2CBFF","vira-purple-400":"#C1B7FF","vira-purple-450":"#AD9BFF","vira-purple-500":"#9B80FF","vira-purple-550":"#8D6EF4","vira-purple-600":"#8265E3","vira-purple-650":"#775BD1","vira-purple-700":"#6A50BB","vira-purple-750":"#5A459E","vira-purple-800":"#4A3B82","vira-purple-850":"#3E3170","vira-purple-900":"#352A61","vira-purple-950":"#2D2452","vira-purple-1000":"#251F43","vira-pink-100":"#FEF5FF","vira-pink-150":"#FFEAFF","vira-pink-200":"#FFE0FC","vira-pink-250":"#FFD7F8","vira-pink-300":"#FFCBF2","vira-pink-350":"#FFB9E9","vira-pink-400":"#FF9BDF","vira-pink-450":"#FF6DD6","vira-pink-500":"#F04AC5","vira-pink-550":"#DD3EB4","vira-pink-600":"#CC37A7","vira-pink-650":"#BC3099","vira-pink-700":"#A82988","vira-pink-750":"#8F2674","vira-pink-800":"#752361","vira-pink-850":"#641C53","vira-pink-900":"#561848","vira-pink-950":"#49153E","vira-pink-1000":"#3B1333","vira-grey-100":"#F9F9F9","vira-grey-150":"#F2F2F2","vira-grey-200":"#EBEBEB","vira-grey-250":"#E5E5E5","vira-grey-300":"#DEDEDE","vira-grey-350":"#D2D2D2","vira-grey-400":"#C2C2C2","vira-grey-450":"#ADADAD","vira-grey-500":"#999999","vira-grey-550":"#8A8A8A","vira-grey-600":"#7F7F7F","vira-grey-650":"#747474","vira-grey-700":"#676767","vira-grey-750":"#585858","vira-grey-800":"#494949","vira-grey-850":"#3E3E3E","vira-grey-900":"#353535","vira-grey-950":"#2D2D2D","vira-grey-1000":"#252525"});function y0({originalTheme:e,layerKey:r,themeColor:t,override:n,overrideValues:o}){const a=n?.[r];a&&(o[String(t[r].name)]=String(to(r,a,e.init.default,e.init.colors)))}i(y0,"applyCssVarOverride");function T$(e,r,{defaultOverride:t,colorOverrides:n}){const o={};t&&Ke(t).forEach(u=>{y0({originalTheme:e,layerKey:u,override:t,themeColor:e.colors[Ze],overrideValues:o})});const a={};n&&An(n).forEach(([u,f])=>{const g=e.colors[u];if(!g)throw new Error(`Override color name '${u}' does not exist in the theme being overridden.`);y0({originalTheme:e,layerKey:"foreground",override:f,themeColor:g,overrideValues:a}),y0({originalTheme:e,layerKey:"background",override:f,themeColor:g,overrideValues:a})});const s=qe(e.init.colors,(u,f)=>{const g=n?.[u];return{...f,...g}}),l=cm({...e.init.default,...t},s);return{name:r,overrides:{...o,...a},originalTheme:e,asTheme:l}}i(T$,"defineColorThemeOverride");const S=cm({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:c["vira-red-1000"]},"vira-red-foreground-body":{foreground:c["vira-red-750"]},"vira-red-foreground-non-body":{foreground:c["vira-red-650"]},"vira-red-foreground-header":{foreground:c["vira-red-500"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-400"]},"vira-red-foreground-decoration":{foreground:c["vira-red-350"]},"vira-red-foreground-invisible":{foreground:c["vira-red-250"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-1000"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-700"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-600"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-red-450"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-red-400"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-red-350"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-red-200"]},"vira-red-behind-fg-small-body":{background:c["vira-red-250"]},"vira-red-behind-fg-body":{background:c["vira-red-350"]},"vira-red-behind-fg-non-body":{background:c["vira-red-400"]},"vira-red-behind-fg-header":{background:c["vira-red-500"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-650"]},"vira-red-behind-fg-decoration":{background:c["vira-red-750"]},"vira-red-behind-fg-invisible":{background:c["vira-red-1000"]},"vira-red-on-self-small-body":{foreground:c["vira-red-850"],background:c["vira-red-100"]},"vira-red-on-self-body":{foreground:c["vira-red-850"],background:c["vira-red-250"]},"vira-red-on-self-non-body":{foreground:c["vira-red-850"],background:c["vira-red-350"]},"vira-red-on-self-header":{foreground:c["vira-red-850"],background:c["vira-red-450"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-850"],background:c["vira-red-500"]},"vira-red-on-self-decoration":{foreground:c["vira-red-850"],background:c["vira-red-650"]},"vira-red-on-self-invisible":{foreground:c["vira-red-850"],background:c["vira-red-1000"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-1000"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-750"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-650"]},"vira-yellow-foreground-header":{foreground:c["vira-yellow-500"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-400"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-350"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-250"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-1000"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-700"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-600"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-450"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-400"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-350"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-250"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-250"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-350"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-400"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-500"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-650"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-750"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-1000"]},"vira-yellow-on-self-small-body":{foreground:c["vira-yellow-850"],background:c["vira-yellow-100"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-850"],background:c["vira-yellow-300"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-850"],background:c["vira-yellow-350"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-850"],background:c["vira-yellow-450"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-850"],background:c["vira-yellow-550"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-850"],background:c["vira-yellow-650"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-850"],background:c["vira-yellow-1000"]},"vira-green-foreground-small-body":{foreground:c["vira-green-1000"]},"vira-green-foreground-body":{foreground:c["vira-green-800"]},"vira-green-foreground-non-body":{foreground:c["vira-green-650"]},"vira-green-foreground-header":{foreground:c["vira-green-550"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-450"]},"vira-green-foreground-decoration":{foreground:c["vira-green-350"]},"vira-green-foreground-invisible":{foreground:c["vira-green-250"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-1000"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-750"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-650"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-green-500"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-green-400"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-green-350"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-green-250"]},"vira-green-behind-fg-small-body":{background:c["vira-green-250"]},"vira-green-behind-fg-body":{background:c["vira-green-350"]},"vira-green-behind-fg-non-body":{background:c["vira-green-450"]},"vira-green-behind-fg-header":{background:c["vira-green-550"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-650"]},"vira-green-behind-fg-decoration":{background:c["vira-green-800"]},"vira-green-behind-fg-invisible":{background:c["vira-green-1000"]},"vira-green-on-self-small-body":{foreground:c["vira-green-850"],background:c["vira-green-100"]},"vira-green-on-self-body":{foreground:c["vira-green-850"],background:c["vira-green-300"]},"vira-green-on-self-non-body":{foreground:c["vira-green-850"],background:c["vira-green-400"]},"vira-green-on-self-header":{foreground:c["vira-green-850"],background:c["vira-green-450"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-850"],background:c["vira-green-550"]},"vira-green-on-self-decoration":{foreground:c["vira-green-850"],background:c["vira-green-700"]},"vira-green-on-self-invisible":{foreground:c["vira-green-850"],background:c["vira-green-1000"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-1000"]},"vira-teal-foreground-body":{foreground:c["vira-teal-800"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-650"]},"vira-teal-foreground-header":{foreground:c["vira-teal-550"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-450"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-350"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-250"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-1000"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-750"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-600"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-teal-500"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-teal-400"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-teal-350"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-teal-250"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-250"]},"vira-teal-behind-fg-body":{background:c["vira-teal-350"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-450"]},"vira-teal-behind-fg-header":{background:c["vira-teal-500"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-650"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-750"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-1000"]},"vira-teal-on-self-small-body":{foreground:c["vira-teal-850"],background:c["vira-teal-100"]},"vira-teal-on-self-body":{foreground:c["vira-teal-850"],background:c["vira-teal-300"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-850"],background:c["vira-teal-400"]},"vira-teal-on-self-header":{foreground:c["vira-teal-850"],background:c["vira-teal-450"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-850"],background:c["vira-teal-550"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-850"],background:c["vira-teal-700"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-850"],background:c["vira-teal-1000"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-1000"]},"vira-blue-foreground-body":{foreground:c["vira-blue-750"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-650"]},"vira-blue-foreground-header":{foreground:c["vira-blue-500"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-450"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-350"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-250"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-1000"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-750"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-600"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-blue-450"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-blue-400"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-blue-350"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-blue-250"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-250"]},"vira-blue-behind-fg-body":{background:c["vira-blue-350"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-400"]},"vira-blue-behind-fg-header":{background:c["vira-blue-500"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-650"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-750"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-1000"]},"vira-blue-on-self-small-body":{foreground:c["vira-blue-850"],background:c["vira-blue-100"]},"vira-blue-on-self-body":{foreground:c["vira-blue-850"],background:c["vira-blue-300"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-850"],background:c["vira-blue-350"]},"vira-blue-on-self-header":{foreground:c["vira-blue-850"],background:c["vira-blue-450"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-850"],background:c["vira-blue-550"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-850"],background:c["vira-blue-650"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-850"],background:c["vira-blue-1000"]},"vira-accent-foreground-small-body":{foreground:c["vira-accent-1000"]},"vira-accent-foreground-body":{foreground:c["vira-accent-750"]},"vira-accent-foreground-non-body":{foreground:c["vira-accent-650"]},"vira-accent-foreground-header":{foreground:c["vira-accent-500"]},"vira-accent-foreground-placeholder":{foreground:c["vira-accent-450"]},"vira-accent-foreground-decoration":{foreground:c["vira-accent-350"]},"vira-accent-foreground-invisible":{foreground:c["vira-accent-250"]},"vira-accent-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-1000"]},"vira-accent-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-750"]},"vira-accent-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-600"]},"vira-accent-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-accent-450"]},"vira-accent-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-accent-400"]},"vira-accent-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-accent-350"]},"vira-accent-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-accent-250"]},"vira-accent-behind-fg-small-body":{background:c["vira-accent-250"]},"vira-accent-behind-fg-body":{background:c["vira-accent-350"]},"vira-accent-behind-fg-non-body":{background:c["vira-accent-400"]},"vira-accent-behind-fg-header":{background:c["vira-accent-500"]},"vira-accent-behind-fg-placeholder":{background:c["vira-accent-650"]},"vira-accent-behind-fg-decoration":{background:c["vira-accent-750"]},"vira-accent-behind-fg-invisible":{background:c["vira-accent-1000"]},"vira-accent-on-self-small-body":{foreground:c["vira-accent-850"],background:c["vira-accent-100"]},"vira-accent-on-self-body":{foreground:c["vira-accent-850"],background:c["vira-accent-300"]},"vira-accent-on-self-non-body":{foreground:c["vira-accent-850"],background:c["vira-accent-350"]},"vira-accent-on-self-header":{foreground:c["vira-accent-850"],background:c["vira-accent-450"]},"vira-accent-on-self-placeholder":{foreground:c["vira-accent-850"],background:c["vira-accent-550"]},"vira-accent-on-self-decoration":{foreground:c["vira-accent-850"],background:c["vira-accent-650"]},"vira-accent-on-self-invisible":{foreground:c["vira-accent-850"],background:c["vira-accent-1000"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-1000"]},"vira-purple-foreground-body":{foreground:c["vira-purple-750"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-650"]},"vira-purple-foreground-header":{foreground:c["vira-purple-500"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-400"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-350"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-250"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-1000"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-700"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-600"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-purple-450"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-purple-400"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-purple-350"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-purple-200"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-250"]},"vira-purple-behind-fg-body":{background:c["vira-purple-350"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-400"]},"vira-purple-behind-fg-header":{background:c["vira-purple-500"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-600"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-750"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-1000"]},"vira-purple-on-self-small-body":{foreground:c["vira-purple-850"],background:c["vira-purple-100"]},"vira-purple-on-self-body":{foreground:c["vira-purple-850"],background:c["vira-purple-300"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-850"],background:c["vira-purple-350"]},"vira-purple-on-self-header":{foreground:c["vira-purple-850"],background:c["vira-purple-450"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-850"],background:c["vira-purple-500"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-850"],background:c["vira-purple-650"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-850"],background:c["vira-purple-1000"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-1000"]},"vira-pink-foreground-body":{foreground:c["vira-pink-750"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-650"]},"vira-pink-foreground-header":{foreground:c["vira-pink-500"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-400"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-350"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-250"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-1000"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-700"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-550"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-pink-450"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-pink-400"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-pink-350"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-pink-200"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-200"]},"vira-pink-behind-fg-body":{background:c["vira-pink-350"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-400"]},"vira-pink-behind-fg-header":{background:c["vira-pink-500"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-600"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-750"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-1000"]},"vira-pink-on-self-small-body":{foreground:c["vira-pink-850"],background:c["vira-pink-100"]},"vira-pink-on-self-body":{foreground:c["vira-pink-850"],background:c["vira-pink-250"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-850"],background:c["vira-pink-350"]},"vira-pink-on-self-header":{foreground:c["vira-pink-850"],background:c["vira-pink-450"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-850"],background:c["vira-pink-500"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-850"],background:c["vira-pink-650"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-850"],background:c["vira-pink-1000"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-1000"]},"vira-grey-foreground-body":{foreground:c["vira-grey-750"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-650"]},"vira-grey-foreground-header":{foreground:c["vira-grey-500"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-450"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-350"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-250"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-1000"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-750"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-600"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-grey-500"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-grey-400"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-grey-350"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-grey-250"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-250"]},"vira-grey-behind-fg-body":{background:c["vira-grey-350"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-400"]},"vira-grey-behind-fg-header":{background:c["vira-grey-500"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-650"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-750"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-1000"]},"vira-grey-on-self-small-body":{foreground:c["vira-grey-850"],background:c["vira-grey-100"]},"vira-grey-on-self-body":{foreground:c["vira-grey-850"],background:c["vira-grey-300"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-850"],background:c["vira-grey-350"]},"vira-grey-on-self-header":{foreground:c["vira-grey-850"],background:c["vira-grey-450"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-850"],background:c["vira-grey-550"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-850"],background:c["vira-grey-650"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-850"],background:c["vira-grey-1000"]}}),DB=T$(S,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:c["vira-red-250"]},"vira-red-foreground-body":{foreground:c["vira-red-350"]},"vira-red-foreground-non-body":{foreground:c["vira-red-400"]},"vira-red-foreground-header":{foreground:c["vira-red-450"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-600"]},"vira-red-foreground-decoration":{foreground:c["vira-red-750"]},"vira-red-foreground-invisible":{foreground:c["vira-red-1000"]},"vira-red-behind-bg-small-body":{background:c["vira-red-250"]},"vira-red-behind-bg-body":{background:c["vira-red-350"]},"vira-red-behind-bg-non-body":{background:c["vira-red-400"]},"vira-red-behind-bg-header":{background:c["vira-red-500"]},"vira-red-behind-bg-placeholder":{background:c["vira-red-650"]},"vira-red-behind-bg-decoration":{background:c["vira-red-750"]},"vira-red-behind-bg-invisible":{background:c["vira-red-1000"]},"vira-red-behind-fg-small-body":{background:c["vira-red-1000"]},"vira-red-behind-fg-body":{background:c["vira-red-700"]},"vira-red-behind-fg-non-body":{background:c["vira-red-600"]},"vira-red-behind-fg-header":{background:c["vira-red-450"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-400"]},"vira-red-behind-fg-decoration":{background:c["vira-red-350"]},"vira-red-behind-fg-invisible":{background:c["vira-red-200"]},"vira-red-on-self-small-body":{foreground:c["vira-red-200"],background:c["vira-red-1000"]},"vira-red-on-self-body":{foreground:c["vira-red-200"],background:c["vira-red-950"]},"vira-red-on-self-non-body":{foreground:c["vira-red-200"],background:c["vira-red-700"]},"vira-red-on-self-header":{foreground:c["vira-red-200"],background:c["vira-red-550"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-200"],background:c["vira-red-450"]},"vira-red-on-self-decoration":{foreground:c["vira-red-200"],background:c["vira-red-400"]},"vira-red-on-self-invisible":{foreground:c["vira-red-200"],background:c["vira-red-350"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-250"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-350"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-400"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-600"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-750"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-1000"]},"vira-yellow-behind-bg-small-body":{background:c["vira-yellow-250"]},"vira-yellow-behind-bg-body":{background:c["vira-yellow-350"]},"vira-yellow-behind-bg-non-body":{background:c["vira-yellow-400"]},"vira-yellow-behind-bg-header":{background:c["vira-yellow-500"]},"vira-yellow-behind-bg-placeholder":{background:c["vira-yellow-650"]},"vira-yellow-behind-bg-decoration":{background:c["vira-yellow-750"]},"vira-yellow-behind-bg-invisible":{background:c["vira-yellow-1000"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-1000"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-700"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-600"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-450"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-400"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-350"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-250"]},"vira-yellow-on-self-small-body":{foreground:c["vira-yellow-200"],background:c["vira-yellow-1000"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-200"],background:c["vira-yellow-900"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-200"],background:c["vira-yellow-700"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-200"],background:c["vira-yellow-550"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-200"],background:c["vira-yellow-450"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-200"],background:c["vira-yellow-400"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-200"],background:c["vira-yellow-350"]},"vira-green-foreground-small-body":{foreground:c["vira-green-250"]},"vira-green-foreground-body":{foreground:c["vira-green-350"]},"vira-green-foreground-non-body":{foreground:c["vira-green-450"]},"vira-green-foreground-header":{foreground:c["vira-green-500"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-650"]},"vira-green-foreground-decoration":{foreground:c["vira-green-750"]},"vira-green-foreground-invisible":{foreground:c["vira-green-1000"]},"vira-green-behind-bg-small-body":{background:c["vira-green-250"]},"vira-green-behind-bg-body":{background:c["vira-green-350"]},"vira-green-behind-bg-non-body":{background:c["vira-green-450"]},"vira-green-behind-bg-header":{background:c["vira-green-550"]},"vira-green-behind-bg-placeholder":{background:c["vira-green-650"]},"vira-green-behind-bg-decoration":{background:c["vira-green-800"]},"vira-green-behind-bg-invisible":{background:c["vira-green-1000"]},"vira-green-behind-fg-small-body":{background:c["vira-green-1000"]},"vira-green-behind-fg-body":{background:c["vira-green-750"]},"vira-green-behind-fg-non-body":{background:c["vira-green-650"]},"vira-green-behind-fg-header":{background:c["vira-green-500"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-400"]},"vira-green-behind-fg-decoration":{background:c["vira-green-350"]},"vira-green-behind-fg-invisible":{background:c["vira-green-250"]},"vira-green-on-self-small-body":{foreground:c["vira-green-200"],background:c["vira-green-1000"]},"vira-green-on-self-body":{foreground:c["vira-green-200"],background:c["vira-green-900"]},"vira-green-on-self-non-body":{foreground:c["vira-green-200"],background:c["vira-green-700"]},"vira-green-on-self-header":{foreground:c["vira-green-200"],background:c["vira-green-600"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-200"],background:c["vira-green-450"]},"vira-green-on-self-decoration":{foreground:c["vira-green-200"],background:c["vira-green-400"]},"vira-green-on-self-invisible":{foreground:c["vira-green-200"],background:c["vira-green-350"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-250"]},"vira-teal-foreground-body":{foreground:c["vira-teal-350"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-450"]},"vira-teal-foreground-header":{foreground:c["vira-teal-500"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-650"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-750"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-1000"]},"vira-teal-behind-bg-small-body":{background:c["vira-teal-250"]},"vira-teal-behind-bg-body":{background:c["vira-teal-350"]},"vira-teal-behind-bg-non-body":{background:c["vira-teal-450"]},"vira-teal-behind-bg-placeholder":{background:c["vira-teal-650"]},"vira-teal-behind-bg-decoration":{background:c["vira-teal-750"]},"vira-teal-behind-bg-invisible":{background:c["vira-teal-1000"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-1000"]},"vira-teal-behind-fg-body":{background:c["vira-teal-750"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-600"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-400"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-350"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-250"]},"vira-teal-on-self-small-body":{foreground:c["vira-teal-200"],background:c["vira-teal-1000"]},"vira-teal-on-self-body":{foreground:c["vira-teal-200"],background:c["vira-teal-900"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-200"],background:c["vira-teal-700"]},"vira-teal-on-self-header":{foreground:c["vira-teal-200"],background:c["vira-teal-600"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-200"],background:c["vira-teal-450"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-200"],background:c["vira-teal-400"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-200"],background:c["vira-teal-350"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-250"]},"vira-blue-foreground-body":{foreground:c["vira-blue-350"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-400"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-600"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-750"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-1000"]},"vira-blue-behind-bg-small-body":{background:c["vira-blue-250"]},"vira-blue-behind-bg-body":{background:c["vira-blue-350"]},"vira-blue-behind-bg-non-body":{background:c["vira-blue-400"]},"vira-blue-behind-bg-header":{background:c["vira-blue-500"]},"vira-blue-behind-bg-placeholder":{background:c["vira-blue-650"]},"vira-blue-behind-bg-decoration":{background:c["vira-blue-750"]},"vira-blue-behind-bg-invisible":{background:c["vira-blue-1000"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-1000"]},"vira-blue-behind-fg-body":{background:c["vira-blue-750"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-600"]},"vira-blue-behind-fg-header":{background:c["vira-blue-450"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-400"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-350"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-250"]},"vira-blue-on-self-small-body":{foreground:c["vira-blue-200"],background:c["vira-blue-1000"]},"vira-blue-on-self-body":{foreground:c["vira-blue-200"],background:c["vira-blue-900"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-200"],background:c["vira-blue-700"]},"vira-blue-on-self-header":{foreground:c["vira-blue-200"],background:c["vira-blue-550"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-200"],background:c["vira-blue-450"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-200"],background:c["vira-blue-400"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-200"],background:c["vira-blue-350"]},"vira-accent-foreground-small-body":{foreground:c["vira-accent-250"]},"vira-accent-foreground-body":{foreground:c["vira-accent-350"]},"vira-accent-foreground-non-body":{foreground:c["vira-accent-400"]},"vira-accent-foreground-placeholder":{foreground:c["vira-accent-600"]},"vira-accent-foreground-decoration":{foreground:c["vira-accent-750"]},"vira-accent-foreground-invisible":{foreground:c["vira-accent-1000"]},"vira-accent-behind-bg-small-body":{background:c["vira-accent-250"]},"vira-accent-behind-bg-body":{background:c["vira-accent-350"]},"vira-accent-behind-bg-non-body":{background:c["vira-accent-400"]},"vira-accent-behind-bg-header":{background:c["vira-accent-500"]},"vira-accent-behind-bg-placeholder":{background:c["vira-accent-650"]},"vira-accent-behind-bg-decoration":{background:c["vira-accent-750"]},"vira-accent-behind-bg-invisible":{background:c["vira-accent-1000"]},"vira-accent-behind-fg-small-body":{background:c["vira-accent-1000"]},"vira-accent-behind-fg-body":{background:c["vira-accent-750"]},"vira-accent-behind-fg-non-body":{background:c["vira-accent-600"]},"vira-accent-behind-fg-header":{background:c["vira-accent-450"]},"vira-accent-behind-fg-placeholder":{background:c["vira-accent-400"]},"vira-accent-behind-fg-decoration":{background:c["vira-accent-350"]},"vira-accent-behind-fg-invisible":{background:c["vira-accent-250"]},"vira-accent-on-self-small-body":{foreground:c["vira-accent-200"],background:c["vira-accent-1000"]},"vira-accent-on-self-body":{foreground:c["vira-accent-200"],background:c["vira-accent-900"]},"vira-accent-on-self-non-body":{foreground:c["vira-accent-200"],background:c["vira-accent-700"]},"vira-accent-on-self-header":{foreground:c["vira-accent-200"],background:c["vira-accent-550"]},"vira-accent-on-self-placeholder":{foreground:c["vira-accent-200"],background:c["vira-accent-450"]},"vira-accent-on-self-decoration":{foreground:c["vira-accent-200"],background:c["vira-accent-400"]},"vira-accent-on-self-invisible":{foreground:c["vira-accent-200"],background:c["vira-accent-350"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-250"]},"vira-purple-foreground-body":{foreground:c["vira-purple-350"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-400"]},"vira-purple-foreground-header":{foreground:c["vira-purple-450"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-600"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-750"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-1000"]},"vira-purple-behind-bg-small-body":{background:c["vira-purple-250"]},"vira-purple-behind-bg-body":{background:c["vira-purple-350"]},"vira-purple-behind-bg-non-body":{background:c["vira-purple-400"]},"vira-purple-behind-bg-header":{background:c["vira-purple-500"]},"vira-purple-behind-bg-placeholder":{background:c["vira-purple-600"]},"vira-purple-behind-bg-decoration":{background:c["vira-purple-750"]},"vira-purple-behind-bg-invisible":{background:c["vira-purple-1000"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-1000"]},"vira-purple-behind-fg-body":{background:c["vira-purple-700"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-600"]},"vira-purple-behind-fg-header":{background:c["vira-purple-450"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-400"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-350"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-200"]},"vira-purple-on-self-small-body":{foreground:c["vira-purple-200"],background:c["vira-purple-1000"]},"vira-purple-on-self-body":{foreground:c["vira-purple-200"],background:c["vira-purple-900"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-200"],background:c["vira-purple-700"]},"vira-purple-on-self-header":{foreground:c["vira-purple-200"],background:c["vira-purple-550"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-200"],background:c["vira-purple-450"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-200"],background:c["vira-purple-400"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-200"],background:c["vira-purple-350"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-200"]},"vira-pink-foreground-body":{foreground:c["vira-pink-350"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-400"]},"vira-pink-foreground-header":{foreground:c["vira-pink-450"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-600"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-750"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-1000"]},"vira-pink-behind-bg-small-body":{background:c["vira-pink-200"]},"vira-pink-behind-bg-body":{background:c["vira-pink-350"]},"vira-pink-behind-bg-non-body":{background:c["vira-pink-400"]},"vira-pink-behind-bg-header":{background:c["vira-pink-500"]},"vira-pink-behind-bg-placeholder":{background:c["vira-pink-600"]},"vira-pink-behind-bg-decoration":{background:c["vira-pink-750"]},"vira-pink-behind-bg-invisible":{background:c["vira-pink-1000"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-1000"]},"vira-pink-behind-fg-body":{background:c["vira-pink-700"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-550"]},"vira-pink-behind-fg-header":{background:c["vira-pink-450"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-400"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-350"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-200"]},"vira-pink-on-self-small-body":{foreground:c["vira-pink-200"],background:c["vira-pink-1000"]},"vira-pink-on-self-body":{foreground:c["vira-pink-200"],background:c["vira-pink-950"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-200"],background:c["vira-pink-700"]},"vira-pink-on-self-header":{foreground:c["vira-pink-200"],background:c["vira-pink-550"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-200"],background:c["vira-pink-450"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-200"],background:c["vira-pink-400"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-200"],background:c["vira-pink-300"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-250"]},"vira-grey-foreground-body":{foreground:c["vira-grey-350"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-400"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-600"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-750"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-1000"]},"vira-grey-behind-bg-small-body":{background:c["vira-grey-250"]},"vira-grey-behind-bg-body":{background:c["vira-grey-350"]},"vira-grey-behind-bg-non-body":{background:c["vira-grey-400"]},"vira-grey-behind-bg-placeholder":{background:c["vira-grey-650"]},"vira-grey-behind-bg-decoration":{background:c["vira-grey-750"]},"vira-grey-behind-bg-invisible":{background:c["vira-grey-1000"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-1000"]},"vira-grey-behind-fg-body":{background:c["vira-grey-750"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-600"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-400"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-350"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-250"]},"vira-grey-on-self-small-body":{foreground:c["vira-grey-200"],background:c["vira-grey-1000"]},"vira-grey-on-self-body":{foreground:c["vira-grey-200"],background:c["vira-grey-900"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-200"],background:c["vira-grey-700"]},"vira-grey-on-self-header":{foreground:c["vira-grey-200"],background:c["vira-grey-600"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-200"],background:c["vira-grey-450"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-200"],background:c["vira-grey-400"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-200"],background:c["vira-grey-350"]}}}),Uy="8px",R=Nt({"vira-form-border-color":S.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":S.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":S.colors[Ze].background.value,"vira-form-foreground-color":S.colors[Ze].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":S.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":S.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":S.colors["vira-accent-behind-bg-invisible"].background.value,"vira-form-selection-active-color":S.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-error-color":S.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":S.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":S.colors["vira-red-behind-bg-body"].background.value,"vira-form-warning-color":S.colors["vira-yellow-behind-bg-non-body"].background.value,"vira-form-warning-hover-color":S.colors["vira-yellow-behind-bg-header"].background.value,"vira-form-warning-active-color":S.colors["vira-yellow-behind-bg-body"].background.value,"vira-form-positive-color":S.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-positive-hover-color":S.colors["vira-green-behind-bg-header"].background.value,"vira-form-positive-active-color":S.colors["vira-green-behind-bg-body"].background.value,"vira-form-success-color":S.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":Uy,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":S.colors["vira-accent-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":k`calc(var(--vira-form-radius, ${Oe(Uy)}) + 2px)`,"vira-form-plain-color":c["vira-grey-100"].value,"vira-form-plain-hover-color":S.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":S.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":S.colors["vira-accent-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":S.colors["vira-accent-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":S.colors["vira-accent-behind-bg-body"].background.value,"vira-form-danger-color":S.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":S.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":S.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":S.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":S.colors["vira-grey-foreground-decoration"].foreground.value}),ks=k`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,_s=Nt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function eo(e){return M.isString(e)?Oe(e):e.value}i(eo,"cssValueOrRaw$1");function ca({elementBorderSize:e="1px",outlineGap:r="2px",outlineWidth:t="2px",noNesting:n,outlineColor:o=R["vira-form-focus-outline-color"],borderRadius:a=R["vira-form-focus-outline-border-radius"],renderInside:s}={}){const l=k`calc(${eo(r)})`,u=k`calc(${eo(t)} + ${eo(r)} + ${eo(e)})`,f=s?k`
              content: '';
              top: ${l};
              left: ${l};
              position: absolute;
              width: calc(100% - calc(${l} * 2));
              height: calc(100% - calc(${l} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${eo(t)} solid ${eo(o)};
              border-radius: ${eo(a)};
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
              border: ${eo(t)} solid ${eo(o)};
              border-radius: ${eo(a)};
              z-index: 100;
          `;return n?f:k`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${f}
        }
    `}i(ca,"createFocusStyles$1");function _y(e){if(typeof e=="string")return CB(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let r=[0,0,0,0,!1,"unknown"];return r[0]=e.r?e.r:e.red?e.red:!1,r[1]=e.g?e.g:e.green?e.green:!1,r[2]=e.b?e.b:e.blue?e.blue:!1,r[3]=e.a?e.a:e.alpha?e.alpha:1,r[4]=!!(r[0]&&r[1]&&r[2]),r[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",r}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}i(_y,"colorParsley");function CB(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let r=!1,n=[0,0,0,0,r,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let l in s)if(e==l){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:i(function(g){for(let h=0;h<3;h++)n[h]=parseInt(g[h+1],16);return n[3]=1,!0},"sprig")},f=u.rex.exec(s[l]);return n[4]=r=u.sprig(f),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:i(function(s){let l=0,u=0,f=10,g=100,h=2.55,p="1";s[23]&&(p=s[23],delete s[23]),n[3]=p.match(/%/g)?parseFloat(p)/g:parseFloat(p);for(let b=1;b<s.length;b++)s[b]&&(l=l||b,u=b);switch(u){case 4:f=16,g=15,n[3]=parseInt(s[u],f)/g;case 3:f=16;for(let b=0;b<3;b++)n[b]=parseInt(s[l+b]+s[l+b],f);break;case 5:f=16;case 9:n[0]=n[1]=n[2]=f==10?parseFloat(s[u]):parseInt(s[u],f);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[u])*h;break;case 8:f=16,g=255,n[3]=parseInt(s[8],f)/g;case 7:f=16;case 11:for(let b=0;b<3;b++)n[b]=f==10?parseFloat(s[l+b]):parseInt(s[l+b],f);break;case 14:for(let b=0;b<3;b++)n[b]=parseFloat(s[l+b])*h;break;case 18:n[5]=s[15];for(let b=0;b<3;b++)l++,n[b]=s[l].match(/%/g)?parseFloat(s[l])*2.55:parseFloat(s[l])*255;break;case 22:n[5]=s[l];for(let b=0;b<3;b++)l++,n[b]=s[l]?s[l].match(/%/g)?parseFloat(s[l])/g:parseFloat(s[l]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let N=function(_){let H=(_+A/30)%12,ce=b*Math.min(v,1-v);return v-ce*Math.max(-1,Math.min(H-3,9-H,1))};i(N,"f");let b,v,$,C,E,A=n[0]%360;if(A<0&&(A+=360),n[5].match(/^hsla?/i))b=n[1],v=n[2],$=0,E=1;else if(n[5].match(/^hwba?/i)){if($=n[1],C=n[2],$+C>=1){n[0]=n[1]=n[2]=$/($+C),n[5]="sRGB";break}b=1,v=.5,E=1-$-C}n[0]=Math.round(255*(N(0)*E+$)),n[1]=Math.round(255*(N(8)*E+$)),n[2]=Math.round(255*(N(4)*E+$)),n[5]="sRGB"}break}return!0},"parsley")},a=o.rex.exec(e);return a?(n[4]=r=o.parsley(a),n):(r=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,r,"parsleyError"])}i(CB,"parseString");const Sr={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function EB(e,r,t=-1){const n=[0,1.1];if(isNaN(e)||isNaN(r)||Math.min(e,r)<n[0]||Math.max(e,r)>n[1])return 0;let o=0,a=0,s="BoW";return e=e>Sr.blkThrs?e:e+Math.pow(Sr.blkThrs-e,Sr.blkClmp),r=r>Sr.blkThrs?r:r+Math.pow(Sr.blkThrs-r,Sr.blkClmp),Math.abs(r-e)<Sr.deltaYmin?0:(r>e?(o=(Math.pow(r,Sr.normBG)-Math.pow(e,Sr.normTXT))*Sr.scaleBoW,a=o<Sr.loClip?0:o-Sr.loBoWoffset):(s="WoB",o=(Math.pow(r,Sr.revBG)-Math.pow(e,Sr.revTXT))*Sr.scaleWoB,a=o>-.1?0:o+Sr.loWoBoffset),t<0?a*100:t==0?Math.round(Math.abs(a)*100)+"<sub>"+s+"</sub>":Number.isInteger(t)?(a*100).toFixed(t):0)}i(EB,"APCAcontrast");function AB(e,r,t=-1,n=!0){let o=_y(r),a=_y(e);return!(a[3]==""||a[3]==1)&&(a=SB(a,o,n)),EB(zy(a),zy(o),t)}i(AB,"calcAPCA");function FB(e,r=2){const t=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],a=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(r),0,0,0,0,0,0,0,0,0];s.length;let l=777;e=Math.abs(e);const u=.2,f=e==0?1:e*u|0;let g=0,h=(e-t[f][g])*u;for(g++;g<a;g++)l=t[f][g],l>400?s[g]=l:e<14.5?s[g]=999:e<29.5?s[g]=777:l>24?s[g]=Math.round(l-n[f][g]*h):s[g]=l-(2*n[f][g]*h|0)*.5;return s}i(FB,"fontLookupAPCA");function zy(e=[0,0,0]){function r(t){return Math.pow(t/255,Sr.mainTRC)}return i(r,"simpleExp"),Sr.sRco*r(e[0])+Sr.sGco*r(e[1])+Sr.sBco*r(e[2])}i(zy,"sRGBtoY");function SB(e=[0,0,0,1],r=[0,0,0],t=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let a=0;a<3;a++)o[a]=r[a]*n+e[a]*e[3],t&&(o[a]=Math.min(Math.round(o[a]),255));return o}i(SB,"alphaBlend");const P$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};qe(P$,e=>e);Object.fromEntries(Object.entries(P$).map(([e,r])=>[r,e]));const qy=new Map;function MB({background:e,foreground:r}){const t=`${r}|${e}`,n=qy.get(t);if(n)return n;const o=_w(Number(AB(r,e)),{digits:1}),a={contrast:o,fontSizes:TB(o),contrastLevel:PB(o)};return qy.set(t,a),a}i(MB,"calculateContrast");function TB(e){const r=FB(e).slice(1);return di(r,(n,o)=>({key:(o+1)*100,value:n}))}i(TB,"calculateFontSizes");function PB(e){return ur.isDefined(uf.find(r=>r.min<=Math.abs(e)))}i(PB,"determineContrastLevel");var ne;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(ne||(ne={}));const IB={[ne.SmallBodyText]:"Small Text",[ne.BodyText]:"Body Text",[ne.NonBodyText]:"Non-body Text",[ne.Header]:"Header",[ne.Placeholder]:"Placeholder",[ne.Decoration]:"Decoration",[ne.Invisible]:"Invisible"};ne.SmallBodyText,ne.BodyText,ne.NonBodyText,ne.Header,ne.Placeholder,ne.Decoration,ne.Invisible;const uf=[{min:90,name:ne.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:ne.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:ne.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:ne.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:ne.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:ne.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:ne.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];di(uf,e=>({key:e.min,value:e}));di(uf,e=>({key:e.name,value:e}));const NB=en(ne).sort((e,r)=>Number(r.includes("-"))-Number(e.includes("-"))),BB=gd(Wt(Object.keys(S.colors),e=>e.split("-")[1],e=>e!=="default")).filter(M.isTruthy),_a=di(BB,e=>({key:e,value:e}),{}),OB=Ke(S.colors),Tl=Ow(_a,e=>{const r=gd(Wt(OB,t=>NB.reduce((n,o)=>Uh({value:n,suffix:`-${o}`}),Gi({value:t,prefix:`vira-${e}-`})),(t,n)=>n.startsWith(`vira-${e}-`)));return di(r,t=>({key:t,value:di(en(ne),n=>{const o=`vira-${e}-${t}-${n}`;if(M.hasKey(S.colors,o))return{key:n,value:S.colors[o]}})}))});var te=(e=>(e.Accent="accent",e.Plain="plain",e.Neutral="neutral",e.Danger="danger",e.Warning="warning",e.Positive="positive",e.None="none",e))(te||{});const oo={accent:_a.blue,neutral:_a.grey,danger:_a.red,warning:_a.yellow,positive:_a.green},da=["accent","plain","neutral","danger","warning","positive"];var Yi=(e=>(e.Large="large",e.Medium="medium",e.Small="small",e.None="none",e))(Yi||{});const cf=["small","medium","large"];var lr=(e=>(e.Standard="standard",e.Subtle="subtle",e.None="none",e))(lr||{});const df=["standard","subtle"],nh={large:40,medium:32,small:24},dm=k`
    padding: 0;
    margin: 0;
`,qr=k`
    ${dm};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Vy=Nt({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),rd={menuShadow:k`
        filter: drop-shadow(0px 5px 5px ${Vy["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:k`
        box-shadow: 0 5px 15px ${Vy["modal-shadow-color"].value};
    `},Oo=k`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,Wy="vira-",nr=im({assertInputs:i(e=>{if(!e.tagName.startsWith(Wy))throw new Error(`Tag name should start with '${Wy}' but got '${e.tagName}'`)},"assertInputs")}),B=nr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":i(({inputs:e})=>!!e.fitContainer||!!e.icon?.size,"vira-icon-fit-container")},styles:i(({hostClasses:e})=>k`
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
    `,"styles"),render({inputs:e,host:r}){if(e.icon)e.icon.size&&(r.style.width=fi(e.icon.size),r.style.height=fi(e.icon.size));else return"";return e.icon.svgTemplate}}),li=nr()({tagName:"vira-menu-item",state(){return{cleanupListeners:void 0}},hostClasses:{"vira-menu-item-selected":i(({inputs:e})=>!!e.selected||!!e.iconOverride,"vira-menu-item-selected"),"vira-menu-item-disabled":i(({inputs:e})=>!!e.disabled,"vira-menu-item-disabled"),"vira-menu-item-enabled":i(({inputs:e})=>!e.disabled,"vira-menu-item-enabled"),"vira-menu-item-default-icon":i(({inputs:e})=>!e.iconOverride,"vira-menu-item-default-icon"),"vira-menu-item-default-styles":i(({inputs:e})=>!e.disablePointerStyles,"vira-menu-item-default-styles")},styles:i(({hostClasses:e})=>k`
        :host {
            display: flex;
            ${Oo};
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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            min-width: 0;
        }
    `,"styles"),init({state:e,updateState:r,host:t,inputs:n}){t.setAttribute("role","menuitem"),t.setAttribute("tabindex",n.disabled?"-1":"0"),t.setAttribute("aria-selected",String(!!n.selected)),t.setAttribute("aria-disabled",String(!!n.disabled)),e.cleanupListeners?.();const o={};function a(l){if(o[l.type])return;if(n.disabled){l.preventDefault(),l.stopPropagation();return}ur.instanceOf(t.shadowRoot.querySelector("slot"),HTMLSlotElement).assignedElements({flatten:!0}).forEach(f=>{f instanceof HTMLElement&&!l.composedPath().includes(f)&&(l.preventDefault(),l.stopPropagation(),o[l.type]=!0,f.dispatchEvent(new MouseEvent(l.type,l)),delete o[l.type])})}i(a,"propagateMouseEvent");const s=[ao(t,"click",a),ao(t,"mousedown",a),ao(t,"mouseenter",()=>{n.disabled||t.focus()}),ao(t,"mouseleave",()=>{n.disabled||t.blur()})];r({cleanupListeners:i(()=>{s.forEach(l=>l())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e}){return m`
            <${B.assign({icon:e.iconOverride||lf})}></${B}>
            <div class="slot-wrapper">
                <slot>&nbsp;</slot>
            </div>
        `}});var fm=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(fm||{}),Xl=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Xl||{});const Ji=nr()({tagName:"vira-menu",hostClasses:{"vira-menu-open-upwards":i(({inputs:e})=>e.direction==="upwards","vira-menu-open-upwards"),"vira-menu-rounded":i(({inputs:e})=>e.cornerStyle==="all-rounded","vira-menu-rounded"),"vira-menu-square":i(({inputs:e})=>e.cornerStyle==="all-square","vira-menu-square")},styles:i(({hostClasses:e})=>k`
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
        `}});function RB(e,r){return e>r}i(RB,"greaterThan");function LB(e,r){return e<r}i(LB,"lessThan");function Ql(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}i(Ql,"focusElement");var Vt;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Vt||(Vt={}));var Ne;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Ne||(Ne={}));function ff(e){const r={x:-1,y:-1};let t;for(;r.y<e.length-1&&!t;){r.y++;const n=e[r.y];for(;n&&r.x<n.length-1&&!t;){r.x++;const o=n[r.x];if(o)if(o.navEntry.navParams.group){const a=ff(o.children);a&&(t=a.node)}else o.navEntry.navParams.disabled||(t=o)}}if(t)return{node:t,coords:r}}i(ff,"findDefaultChild");function Ky(e,r,t,n){if(!r){const u=ff(e.children);return u?(Ql(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:t,navAction:Ne.Navigate}):{success:!1,reason:"no default element to focus",direction:t,navAction:Ne.Navigate}}const{nextNode:o,requiresWrapping:a,coords:s}=I$(r.position,t),l=n?!0:!a;return o&&l?(Ql(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:a,direction:t,navAction:Ne.Navigate,coords:s}):o?l?{success:!1,reason:"no conditions matched",direction:t,navAction:Ne.Navigate}:{success:!1,reason:"wrapping blocked",direction:t,navAction:Ne.Navigate}:{success:!1,reason:"failed to find node to focus",direction:t,navAction:Ne.Navigate}}i(Ky,"navigate");function I$(e,r){let t=!1,n,o=1;const a=Date.now();for(;!t||!n;)if(n=jB(e,r,o),t=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-a>1e3)return Uw.warning("Failed to find next non-disabled node."),n;return n}i(I$,"calculateNextNode");function jB(e,r,t){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Er.isDefined(n,"missing parent");const o=ur.isDefined(n.children[e.nodeCoords.y]),a=n.children.length>1&&(r===Vt.Down||r===Vt.Up),s=r===Vt.Down||r===Vt.Right?t:-1*t,l=s<0?RB:LB,u=a?Wb(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,f=ur.isDefined(n.children[u]),g=a?e.nodeCoords.x>=f.length?f.length-1:e.nodeCoords.x:Wb(e.nodeCoords.x+s,{min:0,max:o.length-1,takeOverflow:!0}),h=n.children[u]?.[g],p=a?l(u,e.nodeCoords.y):l(g,e.nodeCoords.x);return{nextNode:h,requiresWrapping:p,coords:{x:g,y:u}}}i(jB,"innerCalculateNextNode");function UB(e,r,t){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:r,navAction:Ne.Pibling};const{nextNode:o,requiresWrapping:a,coords:s}=I$(n,r),l=o?.navEntry.navParams.group?ff(o.children):{node:o,coords:s},u=t?!0:!a;return!l||!l.node?{success:!1,reason:"no node to navigate to",direction:r,navAction:Ne.Pibling}:u?(Ql(l.node.element),{success:!0,defaulted:!1,newElement:l.node.element,wrapped:a,coords:l.coords,direction:r,navAction:Ne.Pibling}):{success:!1,reason:"wrapping blocked",direction:r,navAction:Ne.Pibling}}i(UB,"navigatePibling");var wo;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(wo||(wo={}));const w0={name:"data-nav"},N$="navEntry";function _B(e){return N$ in e}i(_B,"hasNavEntry");function zB(e){if(_B(e)){const r=e[N$];return ur.instanceOf(r,VB,"Invalid nav entry")}else return}i(zB,"extractNavEntry");function qB(e){return r=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(r.type==="mousedown"&&!e.navController.options.activateOnMouseUp||r.type==="mouseup"&&e.navController.options.activateOnMouseUp?r.target===e.element&&e.activate(!0):r.type==="mouseup"||r.type==="focus"?r.target===e.element&&e.focus(!0):r.type==="mousemove"?r.target===e.element&&e.navValue!==wo.Active&&e.focus(!0):(r.type==="blur"||r.type==="mouseleave")&&r.target===e.element&&(e.activate(!1),e.focus(!1)))}}i(qB,"createEventListener");class VB{static{i(this,"NavEntry")}element;navParams;navTreeNode;navValue;eventListener=qB(this);constructor(r,t,n){this.element=r,this.navParams=n,this.attachListeners(),this.navController=t}set navController(r){this._navController!==r&&(this._navController?.removeNavEntry(this),this._navController=r,r.addNavEntry(this))}get navController(){return Er.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(w0.name,""),m0(this.element)&&this.element.blur())}focus(r,t){const n=this.navValue,o=r===(n===wo.Focused);if(!(this.navParams.group||this.navController.locked||o||!r&&this.navController.options.alwaysRequireFocused))return r?(this.setNavValue(wo.Focused),m0(this.element)||this.element.focus()):(this.removeNavValue(wo.Focused),m0(this.element)&&this.element.blur()),t||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:r,previousNavValue:n}),this.navController.triggerNavEntry(this,r,Ne.Focus)}activate(r){const t=this.navValue,n=r===(t===wo.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(r,!0),r?this.setNavValue(wo.Active):this.setNavValue(wo.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:r,previousNavValue:t}),this.navController.triggerNavEntry(this,r,Ne.Activate)}setNavValue(r){this.navValue=r,this.element.setAttribute(w0.name,r)}removeNavValue(r){this.navValue===r&&(this.navValue=void 0,this.element.setAttribute(w0.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function WB(e,r){Object.entries(r).forEach(([t,n])=>{M.isBoolean(n)&&n?e.setAttribute(t,""):M.isBoolean(n)||n==null?e.removeAttribute(t):e.setAttribute(t,String(n))})}i(WB,"applyAttributes");function KB(e,r){if(!r)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Ne.Enter};if(!r.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Ne.Enter};const t=r.position.node.children[0]?.[0];return t?(Ql(t.element),{success:!0,defaulted:!1,wrapped:!1,newElement:t.element,direction:void 0,navAction:Ne.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Ne.Enter}}i(KB,"enterInto");function HB(e,r){return B$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,r)}i(HB,"walkNavTree");function B$(e,r,t){for(let n=0;n<r.length;n++){const o=r[n];for(let a=0;a<o.length;a++){const s=o[a],l={ancestorChain:e,nodeCoords:{x:a,y:n},node:s};if(t(l))return l;const u=B$(e.concat(l),s.children,t);if(u)return u}}}i(B$,"walkRecursively");function O$(e,r){const t=HB(e,({node:n})=>!n.root&&n.navEntry===r);if(!t)throw new Error("Failed to find NavEntry in NavTree.");return t}i(O$,"findNavTreeNodeByNavEntry");function GB(e,r){if(!r)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Ne.Exit};const t=r.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!t||t.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Ne.Exit};const{nodeCoords:n}=O$(e,t.navEntry);return Ql(t.element),{success:!0,defaulted:!1,wrapped:!1,newElement:t.element,direction:void 0,navAction:Ne.Exit,coords:n}}i(GB,"exitOutOf");class ZB extends Gt()("nav-exit"){static{i(this,"NavExitEvent")}}class gm extends Gt()("nav-activate"){static{i(this,"NavActivateEvent")}}class YB extends Gt()("nav-focus"){static{i(this,"NavFocusEvent")}}class JB extends Gt()("nav-enter"){static{i(this,"NavEnterEvent")}}class XB extends Gt()("nav-navigate"){static{i(this,"NavigateEvent")}}class QB extends Gt()("nav-navigate-pibling"){static{i(this,"NavPiblingEvent")}}function eO(e){return{root:!0,children:R$(e)?.children||[]}}i(eO,"mapTree");function R$(e){const r=e.element;if(!(r instanceof HTMLElement))return;const t=zB(r),n=rO(e);if((t?.navParams.group?!!n.length:!1)||n.length||t)return{root:!1,element:r,navEntry:t,children:n}}i(R$,"mapTreeRecursively");function rO(e){const r=[];function t(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(l=>l.forEach(u=>t(u)));return}const o=n.navEntry.navParams.x,a=n.navEntry.navParams.y||0,s=ma(r,a,()=>({noX:[],withX:[],y:a}));o==null?s.noX.push(n):s.withX.push({x:o,node:n})}return i(t,"pushNode"),e.children.forEach(n=>{const o=R$(n);o&&t(o)}),r.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,a)=>o.x-a.x),n.withX.forEach(({x:o,node:a})=>{n.noX.splice(o,0,a)}),n.noX)).filter(M.isTruthy)}i(rO,"expandChildren");class L$ extends mu{static{i(this,"NavController")}rootElement;options;constructor(r,t={}){super(),this.rootElement=r,this.options=t}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){ff(this.getNavTree().children)?.node.element.focus()}addNavEntry(r){this.navEntries.add(r),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(r){this.navEntries.delete(r),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(r,t,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!r)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=O$(this.getNavTree(),r);t?(this.navEntries.forEach(s=>{s!==r&&s.clearNavValue()}),this.currentNavEntry={entry:r,navAction:n,position:o}):this.currentNavEntry?.entry===r&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const a={success:!0,defaulted:!1,direction:void 0,newElement:r.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return t&&(n===Ne.Activate?this.dispatch(new gm({detail:a})):n===Ne.Focus&&this.dispatch(new YB({detail:a}))),a}navigate({direction:r,allowWrapping:t}){if(this.locked)return{success:!1,direction:r,navAction:Ne.Navigate,reason:"NavController is locked."};const n=Ky(this.getNavTree(),this.currentNavEntry,r,t);return this.dispatch(new XB({detail:n})),n}enterInto({fallbackToActivate:r}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Ne.Enter,reason:"NavController is locked."};const t=KB(this.getNavTree(),this.currentNavEntry);return!t.success&&r?this.activate():(this.dispatch(new JB({detail:t})),t)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Ne.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Ne.Activate,reason:"No focused NavEntry to activate."};const r=this.currentNavEntry.entry.activate(!0);return Er.isDefined(r,"Cannot activate a group."),r}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Ne.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Ne.Activate&&this.currentNavEntry.entry.focus(!0);const r=GB(this.getNavTree(),this.currentNavEntry);return this.dispatch(new ZB({detail:r})),r}navigatePibling({allowWrapping:r,direction:t}){if(this.locked)return{success:!1,direction:t,navAction:Ne.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),a={...this.currentNavEntry?UB(this.currentNavEntry,t,r):Ky(n,void 0,t,r),navAction:Ne.Pibling};return this.dispatch(new QB({detail:a})),a}buildNavTree(){const r=eB(this.rootElement),t=eO(r);return this.cachedNavTree=t,t}}function Hy({open:e,callback:r,popUpManager:t,host:n,options:o}){if(e){const a=t.showPopUp(n,o);r?.(a)}else t.removePopUp(),r?.(void 0)}i(Hy,"triggerPopUpState$1");function hm(e){return Wt(e,(r,t)=>m`
                <${li.assign({...r})}
                    ${U("click",async n=>{if(r.disabled){n.stopImmediatePropagation(),n.preventDefault();return}await r.onClick?.({event:n,index:t})})}
                >
                    ${r.content}
                </${li}>
            `,(r,t)=>!t.hidden)}i(hm,"renderMenuItemEntries");const oc=globalThis.document;class tO extends s${static{i(this,"PageActiveObservable")}constructor(){if(super({defaultValue:!!oc?.hidden,equalityCheck:M.strictEquals}),!oc)return;globalThis.addEventListener("visibilitychange",t=>this.updateVisibility(t,oc));const r=i(t=>this.updateVisibility(t,oc),"visibilityHandler");globalThis.onpageshow=r,globalThis.onpagehide=r,globalThis.onfocus=r,globalThis.onblur=r}updateVisibility(r,t){const n=oO.includes(r.type),o=nO.includes(r.type),a=n?!0:o?!1:t.hasFocus()||!t.hidden;this.setValue(a)}}const nO=["blur","focusout","pagehide"],oO=["focus","focusin","pageshow"],iO=new tO;function j$(e,r){return iO.listen(e,r)}i(j$,"listenToPageActivation");function oh(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}i(oh,"isInputLikeElement$1");const Gy={top:0,left:0,right:0,bottom:0};let U$=class extends xd("hide-pop-up"){static{i(this,"HidePopUpEvent")}},_$=class extends Gt()("nav-select"){static{i(this,"NavSelectEvent")}},aO=class{static{i(this,"PopUpManager")}constructor(r,t){this.navController=r,this.options={...this.options,...t}}listenTarget=new mu;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[j$(!1,r=>{r||this.removePopUp()}),this.navController.listen(gm,r=>{const t=r.composedPath()[0];t instanceof Element&&oh(t)||r.detail.success&&(this.listenTarget.dispatch(new _$({detail:r.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),r.stopImmediatePropagation(),r.preventDefault())}),Ll("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Ll("keydown",r=>{const t=r.code;if(t==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=r.composedPath()[0];if(n instanceof Element&&oh(n))return;t==="ArrowDown"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Vt.Down,allowWrapping:!1})):t==="ArrowUp"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Vt.Up,allowWrapping:!1})):t==="ArrowLeft"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Vt.Left,allowWrapping:!1})):t==="ArrowRight"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Vt.Right,allowWrapping:!1})):(t==="Enter"||t==="Return"||t==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(r.stopImmediatePropagation(),r.preventDefault())}})]}listen(r,t,n){return this.listenTarget.listen(r,t,n)}removePopUp(){this.cleanupCallbacks.forEach(r=>r()),this.listenTarget.dispatch(new U$)}showPopUp(r,t){this.lastRootElement=r;const n={...this.options,...t},o=k$(r);Er.instanceOf(o,HTMLElement);const a=r.getBoundingClientRect(),s=o.getBoundingClientRect(),l=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,f=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-l,bottom:s.bottom-u},g=qe(Gy,v=>a[v]),h=qe(Gy,v=>{const $=f[v],C=g[v];return Math.abs($-C)}),p=h.top>h.bottom+n.verticalDiffThreshold&&h.bottom<n.minDownSpace,b=h.left>h.right+n.horizontalDiffThreshold&&h.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!p,popRight:!b,positions:{container:f,root:g,diff:h}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}};var Xi=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(Xi||{});const me=nr()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new aO(new L$(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-disabled"),"vira-pop-up-trigger-inside-focus":i(({inputs:e})=>!!e.useInsideFocus,"vira-pop-up-trigger-inside-focus"),"vira-pop-up-trigger-outside-focus":i(({inputs:e})=>!e.useInsideFocus,"vira-pop-up-trigger-outside-focus")},styles:i(({hostClasses:e})=>k`
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
            ${ca({renderInside:!0})}
        }
        ${e["vira-pop-up-trigger-outside-focus"].selector} .dropdown-wrapper {
            ${ca()}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${Oo};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${ks}
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
    `,"styles"),events:{navSelect:Re(),openChange:Re(),init:Re()},cleanup({state:e,updateState:r}){r({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:r,host:t,inputs:n,dispatch:o,events:a}){e.popUpManager.listen(U$,()=>{if(r({showPopUpResult:void 0}),o(new a.openChange(void 0)),n.focusOnClose&&!n.isDisabled){const s=t.shadowRoot.querySelector(".dropdown-wrapper");Er.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(_$,s=>{n.keepOpenAfterInteraction||Hy({open:!1,callback(l){r({showPopUpResult:l})},host:t,popUpManager:e.popUpManager}),o(new a.navSelect(s.detail))}),o(new a.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:r,state:t,inputs:n,updateState:o,host:a,slotNames:s}){function l({emitEvent:v,open:$},C){if(t.showPopUpResult&&n.keepOpenAfterInteraction&&C){const E=a.shadowRoot.querySelector(".dropdown-trigger");if(E&&!C.composedPath().includes(E))return}Hy({open:$,callback(E){o({showPopUpResult:E}),v&&e(new r.openChange(E))},host:a,popUpManager:t.popUpManager})}i(l,"triggerPopUp"),n.isDisabled?l({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&t.showPopUpResult?l({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!t.showPopUpResult&&l({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?t.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,f=u==="right"&&t.showPopUpResult?n.ignoreMaxWidth?k`
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
                ${U("keydown",v=>{!t.showPopUpResult&&v.code.startsWith("Arrow")&&l({emitEvent:!0,open:!0},v)})}
                ${U("click",v=>{if(v.detail===0){let $=!1;if($$(({element:C})=>oh(C)?($=!0,!0):!1),$)return;b(v)}else if(v.button===0&&t.showPopUpResult){const $=a.shadowRoot.querySelector(".dropdown-trigger");$&&!v.composedPath().includes($)&&l({emitEvent:!0,open:!1},v)}})}
                ${U("mousedown",v=>{if(v.button!==0)return;const $=ur.instanceOf(a.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);v.composedPath().includes($)&&b(v)})}
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
        `}}),Wi=nr()({tagName:"vira-menu-trigger",slotNames:["trigger"],styles:k`
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
    `,events:{openChange:Re()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:r,updateState:t,dispatch:n,events:o,slotNames:a}){return m`
            <${me.assign({...e})}
                class=${Gr({open:!!r.showPopUpResult})}
                ${U(me.events.init,s=>{t({navController:s.detail.navController,popUpManager:s.detail.popUpManager})})}
                ${U(me.events.openChange,s=>{!!r.showPopUpResult!=!!s.detail&&n(new o.openChange(s.detail)),t({showPopUpResult:s.detail})})}
            >
                <slot name=${a.trigger} slot=${me.slotNames.trigger}></slot>
                ${r.navController&&r.showPopUpResult?m`
                          <${Ji.assign({direction:r.showPopUpResult.popDown?Xl.Downwards:Xl.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${me.slotNames.popUp}
                              class=${Gr({"full-width-menu":e.horizontalAnchor===Xi.Both})}
                          >
                              <slot></slot>
                          </${Ji}>
                      `:ee}
            </${me}>
        `}}),kr=nr()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":i(({inputs:e})=>e.bold,"vira-bold-bold")},styles:i(({hostClasses:e,cssVars:r})=>k`
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
        `}}),pm=re({name:"Check16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),mm=re({name:"ChevronDown16Icon",svgTemplate:m`
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
    `}),z$=re({name:"Dash16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 8h8"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="round"
            />
        </svg>
    `}),bm=re({name:"Element16Icon",svgTemplate:m`
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
    `}),vm=re({name:"X16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),q$=re({name:"ArrowDown24Icon",svgTemplate:m`
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
    `}),V$=re({name:"ArrowLeft24Icon",svgTemplate:m`
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
    `}),W$=re({name:"ArrowRight24Icon",svgTemplate:m`
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
    `}),K$=re({name:"ArrowUp24Icon",svgTemplate:m`
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
    `}),H$=re({name:"AutoTheme24Icon",svgTemplate:m`
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
    `}),ym=re({name:"Bell24Icon",svgTemplate:m`
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
    `}),wm=re({name:"Chat24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),G$=re({name:"ChevronDown24Icon",svgTemplate:m`
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
    `}),Z$=re({name:"ChevronUp24Icon",svgTemplate:m`
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
    `}),km=re({name:"CloseX24Icon",svgTemplate:m`
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
    `}),Y$=re({name:"Commit24Icon",svgTemplate:m`
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
    `}),J$=re({name:"Copy24Icon",svgTemplate:m`
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
    `}),X$=re({name:"Document24Icon",svgTemplate:m`
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
    `}),Q$=re({name:"DocumentSearch24Icon",svgTemplate:m`
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
    `}),ex=re({name:"DoubleChevron24Icon",svgTemplate:m`
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
    `}),fr=re({name:"Element24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),rx=re({name:"ExternalLink24Icon",svgTemplate:m`
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
    `}),$m=re({name:"EyeClosed24Icon",svgTemplate:m`
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
    `}),xm=re({name:"EyeOpen24Icon",svgTemplate:m`
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
    `}),tx=re({name:"Filter24Icon",svgTemplate:m`
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
    `}),nx=re({name:"Globe24Icon",svgTemplate:m`
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
    `}),ox=re({name:"Link24Icon",svgTemplate:m`
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
    `}),Dm=re({name:"Loader24Icon",svgTemplate:m`
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
    `}),sO=k`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${_s["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,bi=re({name:"LoaderAnimated24Icon",svgTemplate:m`
        <style>
            ${sO}
        </style>
        ${Dm.svgTemplate}
    `}),ix=re({name:"Lock24Icon",svgTemplate:m`
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
    `}),ax=re({name:"MagnifyingGlass24Icon",svgTemplate:m`
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
    `}),sx=re({name:"Moon24Icon",svgTemplate:m`
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
    `}),lx=re({name:"Pencil24Icon",svgTemplate:m`
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
    `}),ux=re({name:"Plus24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),cx=re({name:"Printer24Icon",svgTemplate:m`
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
    `}),dx=re({name:"Shield24Icon",svgTemplate:m`
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
    `}),fx=re({name:"SortAscending24Icon",svgTemplate:m`
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
    `}),gx=re({name:"SortDescending24Icon",svgTemplate:m`
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
    `}),hx=re({name:"Sparkle24Icon",svgTemplate:m`
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
    `}),px=re({name:"SpeakerLoud24Icon",svgTemplate:m`
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
    `}),mx=re({name:"SpeakerMedium24Icon",svgTemplate:m`
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
    `}),bx=re({name:"SpeakerMuted24Icon",svgTemplate:m`
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
    `}),vx=re({name:"SpeakerQuiet24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),$s=re({name:"Star24Icon",svgTemplate:m`
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
    `}),yx=re({name:"StatusInProgress24Icon",svgTemplate:m`
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
    `}),Ka=re({name:"StatusSuccess24Icon",svgTemplate:m`
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
    `}),wx=re({name:"StatusUnknown24Icon",svgTemplate:m`
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
    `}),kx=re({name:"StatusWarning24Icon",svgTemplate:m`
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
    `}),$x=re({name:"Sun24Icon",svgTemplate:m`
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
    `}),Cm=re({name:"X24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function Qt(e,r){const t=Ke(r).map(o=>{if(r[o])return`${y[o].name}: ${String(r[o])};`}).filter(M.isTruthy).join(" "),n=k`
        ${Oe(t)}
        display: inline-flex;
        vertical-align: middle;
    `;return re({name:e.name,svgTemplate:m`
            <div style=${n}>${e.svgTemplate}</div>
        `})}i(Qt,"createColoredIcon");async function lO(){const e=await Ol(()=>import("./feather-xHQv1Yf1.js").then(t=>t.f),[]);function r(t){if(M.isObject(t)){if(M.hasKey(t,"default"))return r(t.default);if(M.hasKey(t,"icons"))return t}}return i(r,"recurseImport"),r(e)||globalThis.feather}i(lO,"importFeatherIcons");const ml=await lO(),Zy={fill:String(y["vira-icon-fill-color"].value),stroke:String(y["vira-icon-stroke-color"].value),"stroke-width":String(y["vira-icon-stroke-width"].value)};function uO(e){const r=ml.icons[e],t=i(n=>({name:r.name,svgTemplate:m`
                ${xy(r.toSvg({...Zy,...n}))}
            `}),"configureIconCallback");return Object.defineProperty(t,"name",{value:r.name,writable:!1,configurable:!0}),Object.assign(t,{svgTemplate:m`
            ${xy(r.toSvg(Zy))}
        `})}i(uO,"createFeatherIconEntry");const Yy=new Map,bl=new Proxy({},{get(e,r){const t=r;if(!(t in ml.icons))return;const n=Yy.get(t);if(n)return n;const o=uO(t);return Yy.set(t,o),o},has(e,r){return r in ml.icons},ownKeys(){return Object.keys(ml.icons)},getOwnPropertyDescriptor(e,r){if(r in ml.icons)return{configurable:!0,enumerable:!0,writable:!1}}});function ih(e,r){return{...e,size:r}}i(ih,"createSizedIcon");const Jy={ArrowDown24Icon:q$,ArrowLeft24Icon:V$,ArrowRight24Icon:W$,ArrowUp24Icon:K$,AutoTheme24Icon:H$,Bell24Icon:ym,Chat24Icon:wm,Check16Icon:pm,Check24Icon:lf,ChevronDown16Icon:mm,ChevronDown24Icon:G$,ChevronUp16Icon:Tu,ChevronUp24Icon:Z$,CloseX24Icon:km,Commit24Icon:Y$,Copy24Icon:J$,Dash16Icon:z$,Document24Icon:X$,DocumentSearch24Icon:Q$,DoubleChevron24Icon:ex,Element16Icon:bm,Element24Icon:fr,ExternalLink24Icon:rx,EyeClosed24Icon:$m,EyeOpen24Icon:xm,Filter24Icon:tx,Globe24Icon:nx,Link24Icon:ox,Loader24Icon:Dm,LoaderAnimated24Icon:bi,Lock24Icon:ix,MagnifyingGlass24Icon:ax,Moon24Icon:sx,Options24Icon:gf,Pencil24Icon:lx,Plus24Icon:ux,Printer24Icon:cx,Shield24Icon:dx,SortAscending24Icon:fx,SortDescending24Icon:gx,Sparkle24Icon:hx,SpeakerLoud24Icon:px,SpeakerMedium24Icon:mx,SpeakerMuted24Icon:bx,SpeakerQuiet24Icon:vx,Star24Icon:$s,StatusFailure24Icon:eu,StatusInProgress24Icon:yx,StatusSuccess24Icon:Ka,StatusUnknown24Icon:wx,StatusWarning24Icon:kx,Sun24Icon:$x,Upload16Icon:td,Upload24Icon:nd,X16Icon:vm,X24Icon:Cm},cO={ArrowDown24Icon:q$,ArrowLeft24Icon:V$,ArrowRight24Icon:W$,ArrowUp24Icon:K$,AutoTheme24Icon:H$,Bell24Icon:ym,Chat24Icon:wm,Check24Icon:lf,ChevronDown24Icon:G$,ChevronUp24Icon:Z$,CloseX24Icon:km,Commit24Icon:Y$,Copy24Icon:J$,Document24Icon:X$,DocumentSearch24Icon:Q$,DoubleChevron24Icon:ex,Element24Icon:fr,ExternalLink24Icon:rx,EyeClosed24Icon:$m,EyeOpen24Icon:xm,Filter24Icon:tx,Globe24Icon:nx,Link24Icon:ox,Loader24Icon:Dm,LoaderAnimated24Icon:bi,Lock24Icon:ix,MagnifyingGlass24Icon:ax,Moon24Icon:sx,Options24Icon:gf,Pencil24Icon:lx,Plus24Icon:ux,Printer24Icon:cx,Shield24Icon:dx,SortAscending24Icon:fx,SortDescending24Icon:gx,Sparkle24Icon:hx,SpeakerLoud24Icon:px,SpeakerMedium24Icon:mx,SpeakerMuted24Icon:bx,SpeakerQuiet24Icon:vx,Star24Icon:$s,StatusFailure24Icon:eu,StatusInProgress24Icon:yx,StatusSuccess24Icon:Ka,StatusUnknown24Icon:wx,StatusWarning24Icon:kx,Sun24Icon:$x,Upload24Icon:nd,X24Icon:Cm},dO={Check16Icon:pm,ChevronDown16Icon:mm,ChevronUp16Icon:Tu,Dash16Icon:z$,Element16Icon:bm,Upload16Icon:td,X16Icon:vm},wn={value:k`transparent`},fO={[te.Plain]:{[lr.Standard]:{idle:{backgroundColor:S.inverse[Ze].background,textColor:S.inverse[Ze].foreground,borderColor:S.inverse[Ze].background},hover:{backgroundColor:S.colors["vira-grey-behind-bg-non-body"].background,textColor:S.colors["vira-grey-behind-bg-non-body"].foreground,borderColor:S.inverse[Ze].background},active:{backgroundColor:S.colors["vira-grey-behind-bg-body"].background,textColor:S.colors["vira-grey-behind-bg-body"].foreground,borderColor:S.inverse[Ze].background}},[lr.Subtle]:{idle:{backgroundColor:wn,textColor:S.colors[Ze].foreground,borderColor:wn},hover:{backgroundColor:S.colors["vira-grey-on-self-body"].background,textColor:S.colors["vira-grey-on-self-body"].foreground,borderColor:S.colors["vira-grey-on-self-body"].foreground},active:{backgroundColor:S.colors["vira-grey-on-self-non-body"].background,textColor:S.colors["vira-grey-on-self-non-body"].foreground,borderColor:S.colors["vira-grey-on-self-non-body"].foreground}}},[te.Accent]:{[lr.Standard]:{idle:{backgroundColor:S.colors["vira-accent-behind-bg-non-body"].background,textColor:S.colors["vira-accent-behind-bg-non-body"].foreground,borderColor:S.colors["vira-accent-behind-bg-body"].background},hover:{backgroundColor:S.colors["vira-accent-behind-bg-header"].background,textColor:S.colors["vira-accent-behind-bg-header"].foreground,borderColor:S.colors["vira-accent-behind-bg-body"].background},active:{backgroundColor:S.colors["vira-accent-behind-bg-body"].background,textColor:S.colors["vira-accent-behind-bg-body"].foreground,borderColor:S.colors["vira-accent-behind-bg-body"].background}},[lr.Subtle]:{idle:{backgroundColor:wn,textColor:S.colors["vira-accent-foreground-non-body"].foreground,borderColor:wn},hover:{backgroundColor:S.colors["vira-accent-on-self-body"].background,textColor:S.colors["vira-accent-on-self-body"].foreground,borderColor:S.colors["vira-accent-on-self-body"].foreground},active:{backgroundColor:S.colors["vira-accent-on-self-non-body"].background,textColor:S.colors["vira-accent-on-self-non-body"].foreground,borderColor:S.colors["vira-accent-on-self-non-body"].foreground}}},[te.Neutral]:{[lr.Standard]:{idle:{backgroundColor:S.colors[Ze].background,textColor:S.colors[Ze].foreground,borderColor:R["vira-form-border-color"]},hover:{backgroundColor:S.colors["vira-grey-behind-fg-small-body"].background,textColor:S.colors["vira-grey-behind-fg-small-body"].foreground,borderColor:R["vira-form-border-color"]},active:{backgroundColor:S.colors["vira-grey-behind-fg-body"].background,textColor:S.colors["vira-grey-behind-fg-body"].foreground,borderColor:R["vira-form-border-color"]}},[lr.Subtle]:{idle:{backgroundColor:wn,textColor:S.colors["vira-grey-foreground-non-body"].foreground,borderColor:wn},hover:{backgroundColor:S.colors["vira-grey-on-self-body"].background,textColor:S.colors["vira-grey-on-self-body"].foreground,borderColor:S.colors["vira-grey-on-self-body"].foreground},active:{backgroundColor:S.colors["vira-grey-on-self-non-body"].background,textColor:S.colors["vira-grey-on-self-non-body"].foreground,borderColor:S.colors["vira-grey-on-self-non-body"].foreground}}},[te.Danger]:{[lr.Standard]:{idle:{backgroundColor:S.colors["vira-red-behind-bg-non-body"].background,textColor:S.colors["vira-red-behind-bg-non-body"].foreground,borderColor:S.colors["vira-red-behind-bg-body"].background},hover:{backgroundColor:S.colors["vira-red-behind-bg-header"].background,textColor:S.colors["vira-red-behind-bg-header"].foreground,borderColor:S.colors["vira-red-behind-bg-body"].background},active:{backgroundColor:S.colors["vira-red-behind-bg-body"].background,textColor:S.colors["vira-red-behind-bg-body"].foreground,borderColor:S.colors["vira-red-behind-bg-body"].background}},[lr.Subtle]:{idle:{backgroundColor:wn,textColor:S.colors["vira-red-foreground-non-body"].foreground,borderColor:wn},hover:{backgroundColor:S.colors["vira-red-on-self-body"].background,textColor:S.colors["vira-red-on-self-body"].foreground,borderColor:S.colors["vira-red-on-self-body"].foreground},active:{backgroundColor:S.colors["vira-red-on-self-non-body"].background,textColor:S.colors["vira-red-on-self-non-body"].foreground,borderColor:S.colors["vira-red-on-self-non-body"].foreground}}},[te.Warning]:{[lr.Standard]:{idle:{backgroundColor:S.colors["vira-yellow-behind-bg-non-body"].background,textColor:S.colors["vira-yellow-behind-bg-non-body"].foreground,borderColor:S.colors["vira-yellow-behind-bg-body"].background},hover:{backgroundColor:S.colors["vira-yellow-behind-bg-header"].background,textColor:S.colors["vira-yellow-behind-bg-header"].foreground,borderColor:S.colors["vira-yellow-behind-bg-body"].background},active:{backgroundColor:S.colors["vira-yellow-behind-bg-body"].background,textColor:S.colors["vira-yellow-behind-bg-body"].foreground,borderColor:S.colors["vira-yellow-behind-bg-body"].background}},[lr.Subtle]:{idle:{backgroundColor:wn,textColor:S.colors["vira-yellow-foreground-non-body"].foreground,borderColor:wn},hover:{backgroundColor:S.colors["vira-yellow-on-self-body"].background,textColor:S.colors["vira-yellow-on-self-body"].foreground,borderColor:S.colors["vira-yellow-on-self-body"].foreground},active:{backgroundColor:S.colors["vira-yellow-on-self-non-body"].background,textColor:S.colors["vira-yellow-on-self-non-body"].foreground,borderColor:S.colors["vira-yellow-on-self-non-body"].foreground}}},[te.Positive]:{[lr.Standard]:{idle:{backgroundColor:S.colors["vira-green-behind-bg-non-body"].background,textColor:S.colors["vira-green-behind-bg-non-body"].foreground,borderColor:S.colors["vira-green-behind-bg-body"].background},hover:{backgroundColor:S.colors["vira-green-behind-bg-header"].background,textColor:S.colors["vira-green-behind-bg-header"].foreground,borderColor:S.colors["vira-green-behind-bg-body"].background},active:{backgroundColor:S.colors["vira-green-behind-bg-body"].background,textColor:S.colors["vira-green-behind-bg-body"].foreground,borderColor:S.colors["vira-green-behind-bg-body"].background}},[lr.Subtle]:{idle:{backgroundColor:wn,textColor:S.colors["vira-green-foreground-non-body"].foreground,borderColor:wn},hover:{backgroundColor:S.colors["vira-green-on-self-body"].background,textColor:S.colors["vira-green-on-self-body"].foreground,borderColor:S.colors["vira-green-on-self-body"].foreground},active:{backgroundColor:S.colors["vira-green-on-self-non-body"].background,textColor:S.colors["vira-green-on-self-non-body"].foreground,borderColor:S.colors["vira-green-on-self-non-body"].foreground}}}},ye=nr()({tagName:"vira-button",hostClasses:{"vira-button-with-menu-caret":i(({inputs:e})=>!!e.showMenuCaret,"vira-button-with-menu-caret"),"vira-button-size-large":i(({inputs:e})=>e.buttonSize===Yi.Large,"vira-button-size-large"),"vira-button-size-medium":i(({inputs:e})=>!e.buttonSize||e.buttonSize===Yi.Medium,"vira-button-size-medium"),"vira-button-size-small":i(({inputs:e})=>e.buttonSize===Yi.Small,"vira-button-size-small"),"vira-button-emphasis-standard":i(({inputs:e})=>!e.buttonEmphasis||e.buttonEmphasis===lr.Standard,"vira-button-emphasis-standard"),"vira-button-emphasis-subtle":i(({inputs:e})=>e.buttonEmphasis===lr.Subtle,"vira-button-emphasis-subtle"),"vira-button-color-accent":i(({inputs:e})=>!e.colorVariant||e.colorVariant===te.Accent,"vira-button-color-accent"),"vira-button-color-plain":i(({inputs:e})=>e.colorVariant===te.Plain,"vira-button-color-plain"),"vira-button-color-neutral":i(({inputs:e})=>e.colorVariant===te.Neutral,"vira-button-color-neutral"),"vira-button-color-danger":i(({inputs:e})=>e.colorVariant===te.Danger,"vira-button-color-danger"),"vira-button-color-warning":i(({inputs:e})=>e.colorVariant===te.Warning,"vira-button-color-warning"),"vira-button-color-positive":i(({inputs:e})=>e.colorVariant===te.Positive,"vira-button-color-positive"),"vira-button-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-button-disabled"),"vira-button-icon-only":i(({inputs:e})=>!e.text&&!!e.icon,"vira-button-icon-only")},cssVars:{"vira-button-text-color":"transparent","vira-button-background-color":"transparent","vira-button-border-color":"transparent","vira-button-hover-text-color":"transparent","vira-button-hover-background-color":"transparent","vira-button-hover-border-color":"transparent","vira-button-active-text-color":"transparent","vira-button-active-background-color":"transparent","vira-button-active-border-color":"transparent","vira-button-disabled-text-color":S.colors["vira-grey-behind-bg-decoration"].foreground.value,"vira-button-disabled-background-color":S.colors["vira-grey-behind-bg-decoration"].background.value,"vira-button-disabled-border-color":S.colors["vira-grey-behind-bg-decoration"].background.value,"vira-button-border-width":"1px","vira-button-border-radius":R["vira-form-radius"].value},styles:i(({hostClasses:e,cssVars:r})=>{function t(){const o=df.flatMap(a=>da.map(s=>{const l=fO[s][a],u=e[`vira-button-color-${s}`].selector,f=e[`vira-button-emphasis-${a}`].selector;return k`
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
                    `}));return Oe(o.join(`
`))}i(t,"generateVariantCss");function n(){const o=cf.map(a=>k`
                    ${e[`vira-button-size-${a}`].selector} {
                        font-size: ${R[`vira-form-${a}-text-size`].value};

                        button {
                            min-height: ${nh[a]}px;
                            padding: 2px
                                ${R[`vira-form-${a}-text-size`].value};
                        }

                        &${e["vira-button-icon-only"].selector} {
                            min-width: ${nh[a]}px;
                        }
                    }
                `);return Oe(o.join(`
`))}return i(n,"generateSizeVariantCss"),k`
            :host {
                cursor: pointer;
                display: inline-flex;
                position: relative;
                vertical-align: middle;
                align-items: center;
                box-sizing: border-box;
                ${Oo};
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

                ${ca({elementBorderSize:r["vira-button-border-width"]})}
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
                  <${B.assign({icon:mm})}
                      class="caret-icon"
                  ></${B}>
              `:ee;return m`
            <button ?disabled=${e.isDisabled}>
                ${r}${t}${n}
            </button>
        `},"render")});var ah=(e=>(e.Error="error",e.Success="success",e))(ah||{});const k0=nr()({tagName:"vira-card",hostClasses:{"vira-card-error":i(({inputs:e})=>e.cardState==="error","vira-card-error"),"vira-card-success":i(({inputs:e})=>e.cardState==="success","vira-card-success")},cssVars:{"vira-card-border":k`1px solid ${R["vira-form-border-color"].value}`,"vira-card-padding":R["vira-form-wrapper-radius"].value},styles:i(({hostClasses:e,cssVars:r})=>k`
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
        `}}),fe=nr()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":i(({inputs:e})=>!!e.horizontal,"vira-checkbox-horizontal"),"vira-checkbox-filled-checked":i(({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-checked"),"vira-checkbox-filled-unchecked":i(({inputs:e})=>!!e.fillWhenUnchecked,"vira-checkbox-filled-unchecked")},styles:i(({hostClasses:e})=>k`
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

            ${ca({elementBorderSize:"1px"})}

            &.checked {
                & ${B} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${R["vira-form-error-color"].value};
            }

            &.disabled {
                ${ks};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,"styles"),events:{valueChange:Re()},render({inputs:e,dispatch:r,events:t}){function n(){e.disabled||r(new t.valueChange(!e.value))}i(n,"updateValue");const o=e.label?m`
                  <span
                      class="label-text"
                      ${En(e.attributePassthrough?.text)}
                      style=${Ue(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:ee;return m`
            <label
                class=${Gr({disabled:!!e.disabled})}
                ${En(e.attributePassthrough?.label)}
                style=${Ue(e.stylePassthrough?.label)}
                ${U("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${Gr({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${Ue(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${En(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Ue(e.stylePassthrough?.["custom-checkbox"])}
                    ${LN(n)}
                >
                    <${B.assign({icon:lf,fitContainer:!0})}
                        ${En(e.attributePassthrough?.[B.tagName])}
                        style=${Ue(e.stylePassthrough?.[B.tagName])}
                    ></${B}>
                </span>
            </label>
        `}}),yt=nr()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":i(({inputs:e})=>!!e.expandOnPrint,"vira-collapsible-wrapper-expand-on-print")},slotNames:["header"],styles:i(({hostClasses:e})=>k`
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
            transition: height ${_s["vira-pretty-animation-duration"].value};
            overflow: hidden;

            &.collapsed {
                ${Oo}
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
    `,"styles"),events:{expandChange:Re()},render({state:e,slotNames:r,updateState:t,dispatch:n,events:o,inputs:a}){const s=a.expanded?k`
                  height: ${e.contentHeight}px;
              `:k`
                  height: 0;
              `;return m`
            <button
                class="header-wrapper"
                ${U("click",()=>{n(new o.expandChange(!a.expanded))})}
            >
                <slot name=${r.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${Gr({collapsed:!a.expanded})}"
                style=${s}
                disabled="disabled"
            >
                <div
                    ${om(({contentRect:l})=>{t({contentHeight:l.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Xr=nr()({tagName:"vira-collapsible-card",testIds:["openCaret"],events:{expandToggle:Re()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":i(({state:e})=>e.isExpanded,"vira-collapsible-card-expanded"),"vira-collapsible-card-expansion-blocked":i(({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-expansion-blocked"),"vira-collapsible-card-card-styles":i(({inputs:e})=>!e.rawCollapsible,"vira-collapsible-card-card-styles")},cssVars:{"vira-collapsible-card-content-gap":"16px"},styles:i(({hostClasses:e,cssVars:r})=>k`
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
                ${U(yt.events.expandChange,f=>{f.stopImmediatePropagation(),!e.blockExpansion&&(n({isExpanded:f.detail}),a(new s.expandToggle(f.detail)))})}
            >
                <div class="header-wrapper" slot=${yt.slotNames.header}>
                    ${u}
                </div>
                ${l}
            </${yt}>
        `}}),vl=nr()({tagName:"vira-dropdown",testIds:["leadingIcon","prefixText","trigger"],styles:k`
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
                ${_s["vira-interaction-animation-duration"].value} linear;
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
            ${Oo};
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
    `,events:{selectedChange:Re(),openChange:Re()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:r,dispatch:t,events:n,updateState:o,testIds:a}){const s=Wt(r.selected,p=>r.options.find(b=>b.value===p),M.isTruthy),l=r.icon?m`
                  <${B.assign({icon:r.icon})}
                      ${ti(a.leadingIcon)}
                  ></${B}>
              `:ee,u=!s.length,f=r.selectionPrefix&&!u?m`
                      <span class="selected-label-prefix" ${ti(a.prefixText)}>
                          ${r.selectionPrefix}
                      </span>
                  `:ee,g=u?r.placeholder||"":r.isMultiSelect&&s.length>1?`${s.length} Selected`:s[0]?.label||"",h=m`
            <${Ji.assign({direction:e.showPopUpResult?.popDown?Xl.Downwards:Xl.Upwards})}
                slot=${me.slotNames.popUp}
            >
                ${hm(r.options.map(p=>({content:p.label,onClick(){t(new n.selectedChange([p.value]))},disabled:p.disabled,selected:s.includes(p)})))}
            </${Ji}>
        `;return m`
            <${me.assign({...r,focusOnClose:!0,popUpOffset:{vertical:-1,right:24},horizontalAnchor:r.horizontalAnchor||Xi.Both})}
                ${U(me.events.openChange,p=>{!!e.showPopUpResult!=!!p.detail&&t(new n.openChange(p.detail)),o({showPopUpResult:p.detail})})}
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
        `}}),Qi=nr()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:i(({cssVars:e})=>k`
        :host {
            color: ${R["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,"styles"),render(){return m`
            <slot></slot>
        `}});var Me=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Number="number",e.Select="select",e.Checkbox="checkbox",e))(Me||{});function ic(e,r){if(e)return r?jh({value:e,suffix:"*"}):e}i(ic,"applyRequiredLabel");function gO(e){return is(e).every(r=>r.isHidden||!r.isRequired?!0:M.isString(r.value)?!!r.value:r.value!=null)}i(gO,"areFormFieldsValid");function sh({input:e,matcher:r}){return!e||!r?!0:e.length>1?e.split("").every(t=>sh({input:t,matcher:r})):r instanceof RegExp?!!e.match(r):r.includes(e)}i(sh,"doesMatch$1");function hO({value:e,allowed:r,blocked:t}){const n=String(e),o=r?sh({input:n,matcher:r}):!0,a=t?sh({input:n,matcher:t}):!1;return o&&!a}i(hO,"isAllowed$1");function lh(e){const r=String(e.value);if(!e.value)return{filtered:r,blocked:""};const{filtered:t,blocked:n}=r.split("").reduce((o,a)=>(hO({...e,value:a})?o.filtered.push(a):o.blocked.push(a),o),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}i(lh,"filterTextInputValue$1");function pO({inputs:e,previousValue:r,event:t,inputBlockedCallback:n,newValueCallback:o}){const a=Aa(t,HTMLInputElement),s=M.hasKey(t,"data")&&kd.isString(t.data)||"";if(s){const{blocked:u}=lh({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const l=lh({value:a.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;a.value!==l&&(a.value=l),r!==l&&o(l)}i(pO,"textInputListener$1");var Ki=(e=>(e.Default="text",e.Password="password",e.Email="email",e.Number="number",e))(Ki||{});const Qe=nr()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:i(({hostClasses:e,cssVars:r})=>k`
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
                ${Oo};
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
                    ${ca({elementBorderSize:"1px",noNesting:!0})}
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
                ${Oo};
            }

            button {
                ${qr};
                cursor: pointer;
                display: flex;
                transition: color
                    ${_s["vira-interaction-animation-duration"].value};
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
                    ${ks};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,"styles"),events:{valueChange:Re(),inputBlocked:Re()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Po(32)}},hostClasses:{"vira-input-disabled":i(({inputs:e})=>!!e.disabled,"vira-input-disabled"),"vira-input-fit-text":i(({inputs:e})=>!!e.fitText,"vira-input-fit-text"),"vira-input-clear-button-shown":i(({inputs:e})=>!!e.showClearButton,"vira-input-clear-button-shown"),"vira-input-error":i(({inputs:e})=>!!e.hasError,"vira-input-error")},render:i(({inputs:e,dispatch:r,state:t,updateState:n,events:o,host:a})=>{const{filtered:s}=lh({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),l=e.icon?m`
                  <${B.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${B}>
              `:ee,u=e.fitText?k`
                  width: ${t.forcedInputWidth}px;
              `:ee,f=U("mousedown",p=>{const b=Aa(p,HTMLElement,{useOriginalTarget:!0}),v=ur.instanceOf(a.shadowRoot.querySelector("input"),HTMLInputElement);b!==v&&(p.preventDefault(),v.focus())}),g=e.disableBrowserHelps||e.type==="password",h=m`
            <span class="input-wrapper" ${e.label?ee:f}>
                ${l}
                ${Wr(!!e.fitText,m`
                        <span
                            class="size-span"
                            ${om(({contentRect:p})=>{n({forcedInputWidth:p.width})})}
                        >
                            <pre>${s||e.placeholder||ee}</pre>
                        </span>
                    `)}

                <input
                    id=${Ue(e.label?t.randomId:void 0)}
                    aria-label=${Ue(e.label||void 0)}
                    autofocus=${!1}
                    type=${mO(e.type,t.showPassword)}
                    style=${u}
                    autocomplete=${Ue(g?"off":void 0)}
                    autocorrect=${Ue(g?"off":void 0)}
                    autocapitalize=${Ue(g?"off":void 0)}
                    spellcheck=${Ue(g?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${U("input",p=>{pO({inputs:e,previousValue:s,event:p,inputBlockedCallback(b){r(new o.inputBlocked(b))},newValueCallback(b){r(new o.valueChange(b))}})})}
                    placeholder=${Ue(e.placeholder||void 0)}
                    ${En(e.attributePassthrough)}
                />

                ${Wr(!!(e.showClearButton&&e.value),m`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${U("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault()})}
                            ${U("click",()=>{e.disabled||r(new o.valueChange(""))})}
                        >
                            <${B.assign({icon:km})}></${B}>
                        </button>
                    `)}
                ${Wr(e.type==="password",m`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${U("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault()})}
                            ${U("click",()=>{n({showPassword:!t.showPassword})})}
                        >
                            <${B.assign({icon:t.showPassword?xm:$m})}></${B}>
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
            `:h},"render")});function mO(e,r){return e==="password"&&r?"text":e||"text"}i(mO,"calculateEffectiveInputType$1");const cr=nr()({tagName:"vira-select",state(){return{randomId:Po(32),cleanupListeners:void 0}},events:{valueChange:Re()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":i(({inputs:e})=>!!e.disabled,"vira-select-disabled"),"vira-select-error":i(({inputs:e})=>!!e.hasError,"vira-select-error"),"vira-select-not-raw":i(({inputs:e})=>!e.rawSelect,"vira-select-not-raw")},styles:i(({hostClasses:e,cssVars:r})=>k`
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
                        ${ca({elementBorderSize:"1px",noNesting:!0})}
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
                        ${_s["vira-interaction-animation-duration"].value};
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
                ${ks}
            }
            ${B} {
                ${ks}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${R["vira-form-error-color"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanupListeners?.();const n=[ao(t,"mousedown",o=>{const a=ur.instanceOf(t.shadowRoot.querySelector("select"),HTMLSelectElement);o.composedPath().includes(a)||(o.preventDefault(),o.stopPropagation(),a.showPicker&&a.showPicker())})];r({cleanupListeners:i(()=>{n.forEach(o=>o())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e,state:r,dispatch:t,events:n}){const o=e.value||void 0,a=e.placeholder||o==null?m`
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
                    ${U("input",l=>{const u=Aa(l,HTMLSelectElement),f=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(g=>g.value===o)),t(new n.valueChange(f))})}
                    ${En(e.attributePassthrough?.select)}
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
                <label for=${r.randomId} ${En(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),Rt=nr()({tagName:"vira-form",events:{valueChange:Re(),validChange:Re()},styles:k`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:r,events:t,state:n,updateState:o}){const a=gO(e.fields);a!==n.lastIsValid&&(o({lastIsValid:a}),r(new t.validChange({allFieldsAreValid:a})));const s=An(e.fields).map(([l,u])=>u.isHidden?ee:u.type===Me.Checkbox?m`
                        <${fe.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:ic(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?ti(u.testId):ee}
                            ${U(fe.events.valueChange,f=>{r(new t.valueChange({key:l,...u,value:f.detail}))})}
                        ></${fe}>
                    `:u.type===Me.Select?m`
                        <${cr.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:ic(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?ti(u.testId):ee}
                            ${U(cr.events.valueChange,f=>{r(new t.valueChange({key:l,...u,value:f.detail}))})}
                        ></${cr}>
                    `:u.type===Me.Number?m`
                        <${Qe.assign({value:u.value?.toString()||"",disabled:e.isDisabled||u.isDisabled,allowedInputs:/\d/,hasError:u.hasError,icon:u.icon,label:ic(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,type:Ki.Number,attributePassthrough:{...u.min===void 0?{}:{min:String(u.min)},...u.max===void 0?{}:{max:String(u.max)},...u.step===void 0?{}:{step:String(u.step)}}})}
                            ${u.testId?ti(u.testId):ee}
                            ${U(Qe.events.valueChange,f=>{const g=f.detail===""?void 0:Number(f.detail);r(new t.valueChange({key:l,...u,value:g}))})}
                        ></${Qe}>
                    `:m`
                        <${Qe.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:ic(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===Me.NewPassword?{autocomplete:"new-password"}:u.type===Me.ExistingPassword?{autocomplete:"password"}:u.type===Me.Email?{autocomplete:"email"}:{},type:[Me.NewPassword,Me.ExistingPassword,Me.PlainPassword].includes(u.type)?Ki.Password:u.type===Me.Email?Ki.Email:Ki.Default})}
                            ${u.testId?ti(u.testId):ee}
                            ${U(Qe.events.valueChange,f=>{r(new t.valueChange({key:l,...u,value:f.detail}))})}
                        ></${Qe}>
                    `);return m`
            <form ${U("submit",l=>l.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}}),Vo=nr()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":i(({inputs:e})=>e.dominantDimension==="height","vira-image-height-constrained")},slotNames:["loading","error"],events:{imageLoad:Re(),imageError:Re()},styles:i(({hostClasses:e})=>k`
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
                ${U("load",async()=>{e._debugLoadDelay&&await ta(e._debugLoadDelay),t({loadedUrls:{...r.loadedUrls,[s]:!0}}),n(new o.imageLoad)})}
                ${U("error",async u=>{e._debugLoadDelay&&await ta(e._debugLoadDelay),t({erroredUrls:{...r.erroredUrls,[s]:!0}}),n(new o.imageError(u.error))})}
                src=${s}
            />
        `}}),Ft=nr()({tagName:"vira-link",state(){return{cleanupListeners:void 0}},hostClasses:{"vira-link-link-styles":i(({inputs:e})=>!e.disableLinkStyles,"vira-link-link-styles")},styles:i(({hostClasses:e})=>k`
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
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanupListeners?.();let n=!1;const o=[ao(t,"click",a=>{if(n)return;const s=ur.instanceOf(t.shadowRoot.querySelector("a"),HTMLAnchorElement);a.composedPath().includes(s)||(a.preventDefault(),a.stopPropagation(),n=!0,s.dispatchEvent(new MouseEvent(a.type,a)),n=!1)})];r({cleanupListeners:i(()=>{o.forEach(a=>a())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e}){function r(t){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,t)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(i(r,"clickCallback"),e.link?.newTab)return m`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${En(e.attributePassthrough?.a)}
                    style=${Ue(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const t=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return m`
                <a
                    href=${t}
                    rel="noopener noreferrer"
                    ${En(e.attributePassthrough?.a)}
                    style=${Ue(e.stylePassthrough?.a)}
                    ${U("click",r)}
                >
                    <slot></slot>
                </a>
            `}}});var ru;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})(ru||(ru={}));const Em={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:ru.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},vi=qe(Em,e=>e),we={...vi,name:"name",hexString:"hexString"},no=qe(Em,(e,r)=>{const t=M.isEnumValue(e,ru)&&M.isEnumValue(e,vi)?e:"conversionFormat"in r&&r.conversionFormat&&M.isEnumValue(r.conversionFormat,ru)&&M.isEnumValue(r.conversionFormat,vi)?r.conversionFormat:void 0;return Er.isTruthy(t,`Invalid conversion format for color format '${e}' ${x(r)}.`),{...r,colorFormat:e,conversionFormat:t,rawSyntax:ur.isEnumValue("rawSyntax"in r&&r.rawSyntax?r.rawSyntax:e,we)}});di(is(Em),e=>({key:e.colorSpace,value:e.colorSpace}),{});An(no).reduce((e,[r,t])=>(ma(e,t.colorSpace,()=>({}))[r]=t,e),{});function bO(e){return e.startsWith("rgb")?we.rgb:e.startsWith("hsl")?we.hsl:e.startsWith("hwb")?we.hwb:e.startsWith("oklab")?we.oklab:e.startsWith("oklch")?we.oklch:e.startsWith("lab")?we.lab:e.startsWith("lch")?we.lch:e.startsWith("#")?we.hexString:we.name}i(bO,"getColorSyntaxFromCssString");const uh={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in uh)Object.freeze(uh[e]);const tu=Object.freeze(uh),vO=Object.keys(tu).reduce((e,r)=>r.length>e.length?r:e),yO=$d(qe(tu,(e,r)=>Wt(Object.entries(tu),([n])=>n,(n,[,o])=>n===e?!1:M.deepEquals(o,r))),(e,r)=>!!r.length),Xy=Object.entries(yO).reduce((e,r)=>{const t=[e[0],...e[1]].join(", ");return[r[0],...r[1]].join(", ").length>t.length?r:e}).reduce((e,r)=>M.isArray(r)?[...e,...r]:[...e,r],[]),Qy=Math.max(vO.length,Xy.length+(Xy.length-1)*2),xx=i((e,r)=>{if(typeof e=="number"){if(r===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(r===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(r===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(r===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},"parseNumber"),wO={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kO=i(e=>xx(wO[e.toLowerCase()],6),"parseNamed"),$O=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,xO=i(e=>{let r;return(r=e.match($O))?xx(parseInt(r[1],16),r[1].length):void 0},"parseHex"),ui="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",Pl=`${ui}%`,Am=`(?:${ui}%|${ui})`,DO=`(?:${ui}(deg|grad|rad|turn)|${ui})`,xs="\\s*,\\s*",CO=new RegExp(`^rgba?\\(\\s*${ui}${xs}${ui}${xs}${ui}\\s*(?:,\\s*${Am}\\s*)?\\)$`),EO=new RegExp(`^rgba?\\(\\s*${Pl}${xs}${Pl}${xs}${Pl}\\s*(?:,\\s*${Am}\\s*)?\\)$`),AO=i(e=>{let r={mode:"rgb"},t;if(t=e.match(CO))t[1]!==void 0&&(r.r=t[1]/255),t[2]!==void 0&&(r.g=t[2]/255),t[3]!==void 0&&(r.b=t[3]/255);else if(t=e.match(EO))t[1]!==void 0&&(r.r=t[1]/100),t[2]!==void 0&&(r.g=t[2]/100),t[3]!==void 0&&(r.b=t[3]/100);else return;return t[4]!==void 0?r.alpha=Math.max(0,Math.min(1,t[4]/100)):t[5]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[5]))),r},"parseRgbLegacy"),ch=i((e,r)=>e===void 0?void 0:typeof e!="object"?gh(e):e.mode!==void 0?e:r?{...e,mode:r}:void 0,"prepare"),fa=i((e="rgb")=>r=>(r=ch(r,e))!==void 0?r.mode===e?r:io[r.mode][e]?io[r.mode][e](r):e==="rgb"?io[r.mode].rgb(r):io.rgb[e](io[r.mode].rgb(r)):void 0,"converter"),io={},Dx={},od=[],Cx={},FO=i(e=>e,"identity"),ze=i(e=>(io[e.mode]={...io[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(r=>{io[r]||(io[r]={}),io[r][e.mode]=e.fromMode[r]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(r=>{if(e.ranges[r]===void 0&&(e.ranges[r]=[0,1]),!e.interpolate[r])throw new Error(`Missing interpolator for: ${r}`);typeof e.interpolate[r]=="function"&&(e.interpolate[r]={use:e.interpolate[r]}),e.interpolate[r].fixup||(e.interpolate[r].fixup=FO)}),Dx[e.mode]=e,(e.parse||[]).forEach(r=>{SO(r,e.mode)}),fa(e.mode)),"useMode"),hf=i(e=>Dx[e],"getMode"),SO=i((e,r)=>{if(typeof e=="string"){if(!r)throw new Error("'mode' required when 'parser' is a string");Cx[e]=r}else typeof e=="function"&&od.indexOf(e)<0&&od.push(e)},"useParser"),dh=/[^\x00-\x7F]|[a-zA-Z_]/,MO=/[^\x00-\x7F]|[-\w]/,j={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let oe=0;function ac(e){let r=e[oe],t=e[oe+1];return r==="-"||r==="+"?/\d/.test(t)||t==="."&&/\d/.test(e[oe+2]):r==="."?/\d/.test(t):/\d/.test(r)}i(ac,"is_num");function fh(e){if(oe>=e.length)return!1;let r=e[oe];if(dh.test(r))return!0;if(r==="-"){if(e.length-oe<2)return!1;let t=e[oe+1];return!!(t==="-"||dh.test(t))}return!1}i(fh,"is_ident");const TO={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function tl(e){let r="";if((e[oe]==="-"||e[oe]==="+")&&(r+=e[oe++]),r+=sc(e),e[oe]==="."&&/\d/.test(e[oe+1])&&(r+=e[oe++]+sc(e)),(e[oe]==="e"||e[oe]==="E")&&((e[oe+1]==="-"||e[oe+1]==="+")&&/\d/.test(e[oe+2])?r+=e[oe++]+e[oe++]+sc(e):/\d/.test(e[oe+1])&&(r+=e[oe++]+sc(e))),fh(e)){let t=id(e);return t==="deg"||t==="rad"||t==="turn"||t==="grad"?{type:j.Hue,value:r*TO[t]}:void 0}return e[oe]==="%"?(oe++,{type:j.Percentage,value:+r}):{type:j.Number,value:+r}}i(tl,"num");function sc(e){let r="";for(;/\d/.test(e[oe]);)r+=e[oe++];return r}i(sc,"digits");function id(e){let r="";for(;oe<e.length&&MO.test(e[oe]);)r+=e[oe++];return r}i(id,"ident");function PO(e){let r=id(e);return e[oe]==="("?(oe++,{type:j.Function,value:r}):r==="none"?{type:j.None,value:void 0}:{type:j.Ident,value:r}}i(PO,"identlike");function IO(e=""){let r=e.trim(),t=[],n;for(oe=0;oe<r.length;){if(n=r[oe++],n===`
`||n==="	"||n===" "){for(;oe<r.length&&(r[oe]===`
`||r[oe]==="	"||r[oe]===" ");)oe++;continue}if(n===",")return;if(n===")"){t.push({type:j.ParenClose});continue}if(n==="+"){if(oe--,ac(r)){t.push(tl(r));continue}return}if(n==="-"){if(oe--,ac(r)){t.push(tl(r));continue}if(fh(r)){t.push({type:j.Ident,value:id(r)});continue}return}if(n==="."){if(oe--,ac(r)){t.push(tl(r));continue}return}if(n==="/"){for(;oe<r.length&&(r[oe]===`
`||r[oe]==="	"||r[oe]===" ");)oe++;let o;if(ac(r)&&(o=tl(r),o.type!==j.Hue)){t.push({type:j.Alpha,value:o});continue}if(fh(r)&&id(r)==="none"){t.push({type:j.Alpha,value:{type:j.None,value:void 0}});continue}return}if(/\d/.test(n)){oe--,t.push(tl(r));continue}if(dh.test(n)){oe--,t.push(PO(r));continue}return}return t}i(IO,"tokenize");function NO(e){e._i=0;let r=e[e._i++];if(!r||r.type!==j.Function||r.value!=="color"||(r=e[e._i++],r.type!==j.Ident))return;const t=Cx[r.value];if(!t)return;const n={mode:t},o=Ex(e,!1);if(!o)return;const a=hf(t).channels;for(let s=0,l,u;s<a.length;s++)l=o[s],u=a[s],l.type!==j.None&&(n[u]=l.type===j.Number?l.value:l.value/100,u==="alpha"&&(n[u]=Math.max(0,Math.min(1,n[u]))));return n}i(NO,"parseColorSyntax");function Ex(e,r){const t=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===j.None||n.type===j.Number||n.type===j.Alpha||n.type===j.Percentage||r&&n.type===j.Hue){t.push(n);continue}if(n.type===j.ParenClose){if(e._i<e.length)return;continue}return}if(!(t.length<3||t.length>4)){if(t.length===4){if(t[3].type!==j.Alpha)return;t[3]=t[3].value}return t.length===3&&t.push({type:j.None,value:void 0}),t.every(o=>o.type!==j.Alpha)?t:void 0}}i(Ex,"consumeCoords");function BO(e,r){e._i=0;let t=e[e._i++];if(!t||t.type!==j.Function)return;let n=Ex(e,r);if(n)return n.unshift(t.value),n}i(BO,"parseModernSyntax");const gh=i(e=>{if(typeof e!="string")return;const r=IO(e),t=r?BO(r,!0):void 0;let n,o=0,a=od.length;for(;o<a;)if((n=od[o++](e,t))!==void 0)return n;return r?NO(r):void 0},"parse");function OO(e,r){if(!r||r[0]!=="rgb"&&r[0]!=="rgba")return;const t={mode:"rgb"},[,n,o,a,s]=r;if(!(n.type===j.Hue||o.type===j.Hue||a.type===j.Hue))return n.type!==j.None&&(t.r=n.type===j.Number?n.value/255:n.value/100),o.type!==j.None&&(t.g=o.type===j.Number?o.value/255:o.value/100),a.type!==j.None&&(t.b=a.type===j.Number?a.value/255:a.value/100),s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(OO,"parseRgb");const RO=i(e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,"parseTransparent"),LO=i((e,r,t)=>e+t*(r-e),"lerp"),jO=i(e=>{let r=[];for(let t=0;t<e.length-1;t++){let n=e[t],o=e[t+1];n===void 0&&o===void 0?r.push(void 0):n!==void 0&&o!==void 0?r.push([n,o]):r.push(n!==void 0?[n,n]:[o,o])}return r},"get_classes"),UO=i(e=>r=>{let t=jO(r);return n=>{let o=n*t.length,a=n>=1?t.length-1:Math.max(Math.floor(o),0),s=t[a];return s===void 0?void 0:e(s[0],s[1],o-a)}},"interpolatorPiecewise"),V=UO(LO),Yr=i(e=>{let r=!1,t=e.map(n=>n!==void 0?(r=!0,n):1);return r?t:e},"fixupAlpha"),zs={mode:"rgb",channels:["r","g","b","alpha"],parse:[OO,xO,AO,kO,RO,"srgb"],serialize:"srgb",interpolate:{r:V,g:V,b:V,alpha:{use:V,fixup:Yr}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},$0=i((e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),"linearize$2"),e1=i(e=>{let r=$0(e.r),t=$0(e.g),n=$0(e.b),o={mode:"xyz65",x:.5766690429101305*r+.1855582379065463*t+.1882286462349947*n,y:.297344975250536*r+.6273635662554661*t+.0752914584939979*n,z:.0270313613864123*r+.0706888525358272*t+.9913375368376386*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertA98ToXyz65"),x0=i(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),"gamma$2"),r1=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"a98",r:x0(e*2.0415879038107465-r*.5650069742788597-.3447313507783297*t),g:x0(e*-.9692436362808798+r*1.8759675015077206+.0415550574071756*t),b:x0(e*.0134442806320312-r*.1183623922310184+1.0151749943912058*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz65ToA98"),D0=i((e=0)=>{const r=Math.abs(e);return r<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((r+.055)/1.055,2.4)},"fn$3"),qs=i(({r:e,g:r,b:t,alpha:n})=>{let o={mode:"lrgb",r:D0(e),g:D0(r),b:D0(t)};return n!==void 0&&(o.alpha=n),o},"convertRgbToLrgb"),Fa=i(e=>{let{r,g:t,b:n,alpha:o}=qs(e),a={mode:"xyz65",x:.4123907992659593*r+.357584339383878*t+.1804807884018343*n,y:.2126390058715102*r+.715168678767756*t+.0721923153607337*n,z:.0193308187155918*r+.119194779794626*t+.9505321522496607*n};return o!==void 0&&(a.alpha=o),a},"convertRgbToXyz65"),C0=i((e=0)=>{const r=Math.abs(e);return r>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(r,1/2.4)-.055):e*12.92},"fn$2"),Vs=i(({r:e,g:r,b:t,alpha:n},o="rgb")=>{let a={mode:o,r:C0(e),g:C0(r),b:C0(t)};return n!==void 0&&(a.alpha=n),a},"convertLrgbToRgb"),Sa=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Vs({r:e*3.2409699419045226-r*1.537383177570094-.4986107602930034*t,g:e*-.9692436362808796+r*1.8759675015077204+.0415550574071756*t,b:e*.0556300796969936-r*.2039769588889765+1.0569715142428784*t});return n!==void 0&&(o.alpha=n),o},"convertXyz65ToRgb"),_O={...zs,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:i(e=>r1(Fa(e)),"rgb"),xyz65:r1},toMode:{rgb:i(e=>Sa(e1(e)),"rgb"),xyz65:e1}},ht=i(e=>(e=e%360)<0?e+360:e,"normalizeHue"),zO=i((e,r)=>e.map((t,n,o)=>{if(t===void 0)return t;let a=ht(t);return n===0||e[n-1]===void 0?a:r(a-ht(o[n-1]))}).reduce((t,n)=>!t.length||n===void 0||t[t.length-1]===void 0?(t.push(n),t):(t.push(n+t[t.length-1]),t),[]),"hue"),jo=i(e=>zO(e,r=>Math.abs(r)<=180?r:r-360*Math.sign(r)),"fixupHueShorter"),et=[-.14861,1.78277,-.29227,-.90649,1.97294,0],qO=Math.PI/180,VO=180/Math.PI;let t1=et[3]*et[4],n1=et[1]*et[4],o1=et[1]*et[2]-et[0]*et[3];const WO=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(o1*t+e*t1-r*n1)/(o1+t1-n1),a=t-o,s=(et[4]*(r-o)-et[2]*a)/et[3],l={mode:"cubehelix",l:o,s:o===0||o===1?void 0:Math.sqrt(a*a+s*s)/(et[4]*o*(1-o))};return l.s&&(l.h=Math.atan2(s,a)*VO-120),n!==void 0&&(l.alpha=n),l},"convertRgbToCubehelix"),KO=i(({h:e,s:r,l:t,alpha:n})=>{let o={mode:"rgb"};e=(e===void 0?0:e+120)*qO,t===void 0&&(t=0);let a=r===void 0?0:r*t*(1-t),s=Math.cos(e),l=Math.sin(e);return o.r=t+a*(et[0]*s+et[1]*l),o.g=t+a*(et[2]*s+et[3]*l),o.b=t+a*(et[4]*s+et[5]*l),n!==void 0&&(o.alpha=n),o},"convertCubehelixToRgb"),pf=i((e,r)=>{if(e.h===void 0||r.h===void 0||!e.s||!r.s)return 0;let t=ht(e.h),n=ht(r.h),o=Math.sin((n-t+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*r.s)*o},"differenceHueSaturation"),HO=i((e,r)=>{if(e.h===void 0||r.h===void 0)return 0;let t=ht(e.h),n=ht(r.h);return Math.abs(n-t)>180?t-(n-360*Math.sign(n-t)):n-t},"differenceHueNaive"),mf=i((e,r)=>{if(e.h===void 0||r.h===void 0||!e.c||!r.c)return 0;let t=ht(e.h),n=ht(r.h),o=Math.sin((n-t+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*r.c)*o},"differenceHueChroma"),GO=i((e="rgb",r=[1,1,1,0])=>{let t=hf(e),n=t.channels,o=t.difference,a=fa(e);return(s,l)=>{let u=a(s),f=a(l);return Math.sqrt(n.reduce((g,h,p)=>{let b=o[h]?o[h](u,f):u[h]-f[h];return g+(r[p]||0)*Math.pow(isNaN(b)?0:b,2)},0))}},"differenceEuclidean"),Uo=i(e=>{let r=e.reduce((n,o)=>{if(o!==void 0){let a=o*Math.PI/180;n.sin+=Math.sin(a),n.cos+=Math.cos(a)}return n},{sin:0,cos:0}),t=Math.atan2(r.sin,r.cos)*180/Math.PI;return t<0?360+t:t},"averageAngle"),ZO={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:WO},toMode:{rgb:KO},interpolate:{h:{use:V,fixup:jo},s:V,l:V,alpha:{use:V,fixup:Yr}},difference:{h:pf},average:{h:Uo}},yi=i(({l:e,a:r,b:t,alpha:n},o="lch")=>{r===void 0&&(r=0),t===void 0&&(t=0);let a=Math.sqrt(r*r+t*t),s={mode:o,l:e,c:a};return a&&(s.h=ht(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},"convertLabToLch"),wi=i(({l:e,c:r,h:t,alpha:n},o="lab")=>{t===void 0&&(t=0);let a={mode:o,l:e,a:r?r*Math.cos(t/180*Math.PI):0,b:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(a.alpha=n),a},"convertLchToLab"),Ax=Math.pow(29,3)/Math.pow(3,3),Fx=Math.pow(6,3)/Math.pow(29,3),Br={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},rs={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let E0=i(e=>Math.pow(e,3)>Fx?Math.pow(e,3):(116*e-16)/Ax,"fn$1");const Sx=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+16)/116,a=r/500+o,s=o-t/200,l={mode:"xyz65",x:E0(a)*rs.X,y:E0(o)*rs.Y,z:E0(s)*rs.Z};return n!==void 0&&(l.alpha=n),l},"convertLab65ToXyz65"),bf=i(e=>Sa(Sx(e)),"convertLab65ToRgb"),A0=i(e=>e>Fx?Math.cbrt(e):(Ax*e+16)/116,"f$1"),Mx=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=A0(e/rs.X),a=A0(r/rs.Y),s=A0(t/rs.Z),l={mode:"lab65",l:116*a-16,a:500*(o-a),b:200*(a-s)};return n!==void 0&&(l.alpha=n),l},"convertXyz65ToLab65"),vf=i(e=>{let r=Mx(Fa(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToLab65"),ad=1,Tx=1,nu=26/180*Math.PI,sd=Math.cos(nu),ld=Math.sin(nu),Px=100/Math.log(139/100),hh=i(({l:e,c:r,h:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"lab65",l:(Math.exp(e*ad/Px)-1)/.0039},a=(Math.exp(.0435*r*Tx*ad)-1)/.075,s=a*Math.cos(t/180*Math.PI-nu),l=a*Math.sin(t/180*Math.PI-nu);return o.a=s*sd-l/.83*ld,o.b=s*ld+l/.83*sd,n!==void 0&&(o.alpha=n),o},"convertDlchToLab65"),ph=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=r*sd+t*ld,a=.83*(t*sd-r*ld),s=Math.sqrt(o*o+a*a),l={mode:"dlch",l:Px/ad*Math.log(1+.0039*e),c:Math.log(1+.075*s)/(.0435*Tx*ad)};return l.c&&(l.h=ht((Math.atan2(a,o)+nu)/Math.PI*180)),n!==void 0&&(l.alpha=n),l},"convertLab65ToDlch"),i1=i(e=>hh(yi(e,"dlch")),"convertDlabToLab65"),a1=i(e=>wi(ph(e),"dlab"),"convertLab65ToDlab"),YO={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:i1,rgb:i(e=>bf(i1(e)),"rgb")},fromMode:{lab65:a1,rgb:i(e=>a1(vf(e)),"rgb")},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:V,a:V,b:V,alpha:{use:V,fixup:Yr}}},JO={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:hh,dlab:i(e=>wi(e,"dlab"),"dlab"),rgb:i(e=>bf(hh(e)),"rgb")},fromMode:{lab65:ph,dlab:i(e=>yi(e,"dlch"),"dlab"),rgb:i(e=>ph(vf(e)),"rgb")},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:V,c:V,h:{use:V,fixup:jo},alpha:{use:V,fixup:Yr}},difference:{h:mf},average:{h:Uo}};function XO({h:e,s:r,i:t,alpha:n}){e=ht(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:t*(1+r*(3/(2-o)-1)),g:t*(1+r*(3*(1-o)/(2-o)-1)),b:t*(1-r)};break;case 1:a={r:t*(1+r*(3*(1-o)/(2-o)-1)),g:t*(1+r*(3/(2-o)-1)),b:t*(1-r)};break;case 2:a={r:t*(1-r),g:t*(1+r*(3/(2-o)-1)),b:t*(1+r*(3*(1-o)/(2-o)-1))};break;case 3:a={r:t*(1-r),g:t*(1+r*(3*(1-o)/(2-o)-1)),b:t*(1+r*(3/(2-o)-1))};break;case 4:a={r:t*(1+r*(3*(1-o)/(2-o)-1)),g:t*(1-r),b:t*(1+r*(3/(2-o)-1))};break;case 5:a={r:t*(1+r*(3/(2-o)-1)),g:t*(1-r),b:t*(1+r*(3*(1-o)/(2-o)-1))};break;default:a={r:t*(1-r),g:t*(1-r),b:t*(1-r)}}return a.mode="rgb",n!==void 0&&(a.alpha=n),a}i(XO,"convertHsiToRgb");function QO({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),a=Math.min(e,r,t),s={mode:"hsi",s:e+r+t===0?0:1-3*a/(e+r+t),i:(e+r+t)/3};return o-a!==0&&(s.h=(o===e?(r-t)/(o-a)+(r<t)*6:o===r?(t-e)/(o-a)+2:(e-r)/(o-a)+4)*60),n!==void 0&&(s.alpha=n),s}i(QO,"convertRgbToHsi");const eR={mode:"hsi",toMode:{rgb:XO},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:QO},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:V,fixup:jo},s:V,i:V,alpha:{use:V,fixup:Yr}},difference:{h:pf},average:{h:Uo}};function rR({h:e,s:r,l:t,alpha:n}){e=ht(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=t+r*(t<.5?t:1-t),a=o-(o-t)*2*Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:o,g:a,b:2*t-o};break;case 1:s={r:a,g:o,b:2*t-o};break;case 2:s={r:2*t-o,g:o,b:a};break;case 3:s={r:2*t-o,g:a,b:o};break;case 4:s={r:a,g:2*t-o,b:o};break;case 5:s={r:o,g:2*t-o,b:a};break;default:s={r:2*t-o,g:2*t-o,b:2*t-o}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}i(rR,"convertHslToRgb");function tR({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),a=Math.min(e,r,t),s={mode:"hsl",s:o===a?0:(o-a)/(1-Math.abs(o+a-1)),l:.5*(o+a)};return o-a!==0&&(s.h=(o===e?(r-t)/(o-a)+(r<t)*6:o===r?(t-e)/(o-a)+2:(e-r)/(o-a)+4)*60),n!==void 0&&(s.alpha=n),s}i(tR,"convertRgbToHsl");const nR=i((e,r)=>{switch(r){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},"hueToDeg"),oR=new RegExp(`^hsla?\\(\\s*${DO}${xs}${Pl}${xs}${Pl}\\s*(?:,\\s*${Am}\\s*)?\\)$`),iR=i(e=>{let r=e.match(oR);if(!r)return;let t={mode:"hsl"};return r[3]!==void 0?t.h=+r[3]:r[1]!==void 0&&r[2]!==void 0&&(t.h=nR(r[1],r[2])),r[4]!==void 0&&(t.s=Math.min(Math.max(0,r[4]/100),1)),r[5]!==void 0&&(t.l=Math.min(Math.max(0,r[5]/100),1)),r[6]!==void 0?t.alpha=Math.max(0,Math.min(1,r[6]/100)):r[7]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[7]))),t},"parseHslLegacy");function aR(e,r){if(!r||r[0]!=="hsl"&&r[0]!=="hsla")return;const t={mode:"hsl"},[,n,o,a,s]=r;if(n.type!==j.None){if(n.type===j.Percentage)return;t.h=n.value}if(o.type!==j.None){if(o.type===j.Hue)return;t.s=o.value/100}if(a.type!==j.None){if(a.type===j.Hue)return;t.l=a.value/100}return s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(aR,"parseHsl");const Ix={mode:"hsl",toMode:{rgb:rR},fromMode:{rgb:tR},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[aR,iR],serialize:i(e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:jo},s:V,l:V,alpha:{use:V,fixup:Yr}},difference:{h:pf},average:{h:Uo}};function Nx({h:e,s:r,v:t,alpha:n}){e=ht(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:t,g:t*(1-r*o),b:t*(1-r)};break;case 1:a={r:t*(1-r*o),g:t,b:t*(1-r)};break;case 2:a={r:t*(1-r),g:t,b:t*(1-r*o)};break;case 3:a={r:t*(1-r),g:t*(1-r*o),b:t};break;case 4:a={r:t*(1-r*o),g:t*(1-r),b:t};break;case 5:a={r:t,g:t*(1-r),b:t*(1-r*o)};break;default:a={r:t*(1-r),g:t*(1-r),b:t*(1-r)}}return a.mode="rgb",n!==void 0&&(a.alpha=n),a}i(Nx,"convertHsvToRgb");function Bx({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),a=Math.min(e,r,t),s={mode:"hsv",s:o===0?0:1-a/o,v:o};return o-a!==0&&(s.h=(o===e?(r-t)/(o-a)+(r<t)*6:o===r?(t-e)/(o-a)+2:(e-r)/(o-a)+4)*60),n!==void 0&&(s.alpha=n),s}i(Bx,"convertRgbToHsv");const Ox={mode:"hsv",toMode:{rgb:Nx},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:Bx},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:V,fixup:jo},s:V,v:V,alpha:{use:V,fixup:Yr}},difference:{h:pf},average:{h:Uo}};function sR({h:e,w:r,b:t,alpha:n}){if(r===void 0&&(r=0),t===void 0&&(t=0),r+t>1){let o=r+t;r/=o,t/=o}return Nx({h:e,s:t===1?1:1-r/(1-t),v:1-t,alpha:n})}i(sR,"convertHwbToRgb");function lR(e){let r=Bx(e);if(r===void 0)return;let t=r.s!==void 0?r.s:0,n=r.v!==void 0?r.v:0,o={mode:"hwb",w:(1-t)*n,b:1-n};return r.h!==void 0&&(o.h=r.h),r.alpha!==void 0&&(o.alpha=r.alpha),o}i(lR,"convertRgbToHwb");function uR(e,r){if(!r||r[0]!=="hwb")return;const t={mode:"hwb"},[,n,o,a,s]=r;if(n.type!==j.None){if(n.type===j.Percentage)return;t.h=n.value}if(o.type!==j.None){if(o.type===j.Hue)return;t.w=o.value/100}if(a.type!==j.None){if(a.type===j.Hue)return;t.b=a.value/100}return s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(uR,"ParseHwb");const cR={mode:"hwb",toMode:{rgb:sR},fromMode:{rgb:lR},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[uR],serialize:i(e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:jo},w:V,b:V,alpha:{use:V,fixup:Yr}},difference:{h:HO},average:{h:Uo}},Rx=203,yf=.1593017578125,Lx=78.84375,wf=.8359375,kf=18.8515625,$f=18.6875;function F0(e){if(e<0)return 0;const r=Math.pow(e,1/Lx);return 1e4*Math.pow(Math.max(0,r-wf)/(kf-$f*r),1/yf)}i(F0,"transferPqDecode");function S0(e){if(e<0)return 0;const r=Math.pow(e/1e4,yf);return Math.pow((wf+kf*r)/(1+$f*r),Lx)}i(S0,"transferPqEncode");const M0=i(e=>Math.max(e/Rx,0),"toRel"),s1=i(({i:e,t:r,p:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o=F0(e+.008609037037932761*r+.11102962500302593*t),a=F0(e-.00860903703793275*r-.11102962500302599*t),s=F0(e+.5600313357106791*r-.32062717498731885*t),l={mode:"xyz65",x:M0(2.070152218389422*o-1.3263473389671556*a+.2066510476294051*s),y:M0(.3647385209748074*o+.680566024947227*a-.0453045459220346*s),z:M0(-.049747207535812*o-.0492609666966138*a+1.1880659249923042*s)};return n!==void 0&&(l.alpha=n),l},"convertItpToXyz65"),T0=i((e=0)=>Math.max(e*Rx,0),"toAbs"),l1=i(({x:e,y:r,z:t,alpha:n})=>{const o=T0(e),a=T0(r),s=T0(t),l=S0(.3592832590121217*o+.6976051147779502*a-.0358915932320289*s),u=S0(-.1920808463704995*o+1.1004767970374323*a+.0753748658519118*s),f=S0(.0070797844607477*o+.0748396662186366*a+.8433265453898765*s),g=.5*l+.5*u,h=1.61376953125*l-3.323486328125*u+1.709716796875*f,p=4.378173828125*l-4.24560546875*u-.132568359375*f,b={mode:"itp",i:g,t:h,p};return n!==void 0&&(b.alpha=n),b},"convertXyz65ToItp"),dR={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:s1,rgb:i(e=>Sa(s1(e)),"rgb")},fromMode:{xyz65:l1,rgb:i(e=>l1(Fa(e)),"rgb")},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:V,t:V,p:V,alpha:{use:V,fixup:Yr}}},fR=134.03437499999998,gR=16295499532821565e-27,P0=i(e=>{if(e<0)return 0;let r=Math.pow(e/1e4,yf);return Math.pow((wf+kf*r)/(1+$f*r),fR)},"jabPqEncode"),I0=i((e=0)=>Math.max(e*203,0),"abs"),jx=i(({x:e,y:r,z:t,alpha:n})=>{e=I0(e),r=I0(r),t=I0(t);let o=1.15*e-.15*t,a=.66*r+.34*e,s=P0(.41478972*o+.579999*a+.014648*t),l=P0(-.20151*o+1.120649*a+.0531008*t),u=P0(-.0166008*o+.2648*a+.6684799*t),f=(s+l)/2,g={mode:"jab",j:.44*f/(1-.56*f)-gR,a:3.524*s-4.066708*l+.542708*u,b:.199076*s+1.096799*l-1.295875*u};return n!==void 0&&(g.alpha=n),g},"convertXyz65ToJab"),hR=134.03437499999998,u1=16295499532821565e-27,N0=i(e=>{if(e<0)return 0;let r=Math.pow(e,1/hR);return 1e4*Math.pow((wf-r)/($f*r-kf),1/yf)},"jabPqDecode"),B0=i(e=>e/203,"rel"),Ux=i(({j:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+u1)/(.44+.56*(e+u1)),a=N0(o+.13860504*r+.058047316*t),s=N0(o-.13860504*r-.058047316*t),l=N0(o-.096019242*r-.8118919*t),u={mode:"xyz65",x:B0(1.661373024652174*a-.914523081304348*s+.23136208173913045*l),y:B0(-.3250758611844533*a+1.571847026732543*s-.21825383453227928*l),z:B0(-.090982811*a-.31272829*s+1.5227666*l)};return n!==void 0&&(u.alpha=n),u},"convertJabToXyz65"),_x=i(e=>{let r=jx(Fa(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToJab"),zx=i(e=>Sa(Ux(e)),"convertJabToRgb"),pR={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:_x,xyz65:jx},toMode:{rgb:zx,xyz65:Ux},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:V,a:V,b:V,alpha:{use:V,fixup:Yr}}},c1=i(({j:e,a:r,b:t,alpha:n})=>{r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.sqrt(r*r+t*t),a={mode:"jch",j:e,c:o};return o&&(a.h=ht(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(a.alpha=n),a},"convertJabToJch"),d1=i(({j:e,c:r,h:t,alpha:n})=>{t===void 0&&(t=0);let o={mode:"jab",j:e,a:r?r*Math.cos(t/180*Math.PI):0,b:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},"convertJchToJab"),mR={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:d1,rgb:i(e=>zx(d1(e)),"rgb")},fromMode:{rgb:i(e=>c1(_x(e)),"rgb"),jab:c1},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:V,fixup:jo},c:V,j:V,alpha:{use:V,fixup:Yr}},difference:{h:mf},average:{h:Uo}},xf=Math.pow(29,3)/Math.pow(3,3),Fm=Math.pow(6,3)/Math.pow(29,3);let O0=i(e=>Math.pow(e,3)>Fm?Math.pow(e,3):(116*e-16)/xf,"fn");const Sm=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+16)/116,a=r/500+o,s=o-t/200,l={mode:"xyz50",x:O0(a)*Br.X,y:O0(o)*Br.Y,z:O0(s)*Br.Z};return n!==void 0&&(l.alpha=n),l},"convertLabToXyz50"),Pu=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Vs({r:e*3.1341359569958707-r*1.6173863321612538-.4906619460083532*t,g:e*-.978795502912089+r*1.916254567259524+.03344273116131949*t,b:e*.07195537988411677-r*.2289768264158322+1.405386058324125*t});return n!==void 0&&(o.alpha=n),o},"convertXyz50ToRgb"),qx=i(e=>Pu(Sm(e)),"convertLabToRgb"),Iu=i(e=>{let{r,g:t,b:n,alpha:o}=qs(e),a={mode:"xyz50",x:.436065742824811*r+.3851514688337912*t+.14307845442264197*n,y:.22249319175623702*r+.7168870538238823*t+.06061979053616537*n,z:.013923904500943465*r+.09708128566574634*t+.7140993584005155*n};return o!==void 0&&(a.alpha=o),a},"convertRgbToXyz50"),R0=i(e=>e>Fm?Math.cbrt(e):(xf*e+16)/116,"f"),Mm=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=R0(e/Br.X),a=R0(r/Br.Y),s=R0(t/Br.Z),l={mode:"lab",l:116*a-16,a:500*(o-a),b:200*(a-s)};return n!==void 0&&(l.alpha=n),l},"convertXyz50ToLab"),Vx=i(e=>{let r=Mm(Iu(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToLab");function bR(e,r){if(!r||r[0]!=="lab")return;const t={mode:"lab"},[,n,o,a,s]=r;if(!(n.type===j.Hue||o.type===j.Hue||a.type===j.Hue))return n.type!==j.None&&(t.l=Math.min(Math.max(0,n.value),100)),o.type!==j.None&&(t.a=o.type===j.Number?o.value:o.value*125/100),a.type!==j.None&&(t.b=a.type===j.Number?a.value:a.value*125/100),s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(bR,"parseLab");const Tm={mode:"lab",toMode:{xyz50:Sm,rgb:qx},fromMode:{xyz50:Mm,rgb:Vx},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[bR],serialize:i(e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{l:V,a:V,b:V,alpha:{use:V,fixup:Yr}}},vR={...Tm,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:Sx,rgb:bf},fromMode:{xyz65:Mx,rgb:vf},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function yR(e,r){if(!r||r[0]!=="lch")return;const t={mode:"lch"},[,n,o,a,s]=r;if(n.type!==j.None){if(n.type===j.Hue)return;t.l=Math.min(Math.max(0,n.value),100)}if(o.type!==j.None&&(t.c=Math.max(0,o.type===j.Number?o.value:o.value*150/100)),a.type!==j.None){if(a.type===j.Percentage)return;t.h=a.value}return s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(yR,"parseLch");const Pm={mode:"lch",toMode:{lab:wi,rgb:i(e=>qx(wi(e)),"rgb")},fromMode:{rgb:i(e=>yi(Vx(e)),"rgb"),lab:yi},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[yR],serialize:i(e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:jo},c:V,l:V,alpha:{use:V,fixup:Yr}},difference:{h:mf},average:{h:Uo}},wR={...Pm,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:i(e=>wi(e,"lab65"),"lab65"),rgb:i(e=>bf(wi(e,"lab65")),"rgb")},fromMode:{rgb:i(e=>yi(vf(e),"lch65"),"rgb"),lab65:i(e=>yi(e,"lch65"),"lab65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},Wx=i(({l:e,u:r,v:t,alpha:n})=>{r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.sqrt(r*r+t*t),a={mode:"lchuv",l:e,c:o};return o&&(a.h=ht(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(a.alpha=n),a},"convertLuvToLchuv"),Kx=i(({l:e,c:r,h:t,alpha:n})=>{t===void 0&&(t=0);let o={mode:"luv",l:e,u:r?r*Math.cos(t/180*Math.PI):0,v:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},"convertLchuvToLuv"),Hx=i((e,r,t)=>4*e/(e+15*r+3*t),"u_fn$1"),Gx=i((e,r,t)=>9*r/(e+15*r+3*t),"v_fn$1"),kR=Hx(Br.X,Br.Y,Br.Z),$R=Gx(Br.X,Br.Y,Br.Z),xR=i(e=>e<=Fm?xf*e:116*Math.cbrt(e)-16,"l_fn"),mh=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=xR(r/Br.Y),a=Hx(e,r,t),s=Gx(e,r,t);!isFinite(a)||!isFinite(s)?o=a=s=0:(a=13*o*(a-kR),s=13*o*(s-$R));let l={mode:"luv",l:o,u:a,v:s};return n!==void 0&&(l.alpha=n),l},"convertXyz50ToLuv"),DR=i((e,r,t)=>4*e/(e+15*r+3*t),"u_fn"),CR=i((e,r,t)=>9*r/(e+15*r+3*t),"v_fn"),ER=DR(Br.X,Br.Y,Br.Z),AR=CR(Br.X,Br.Y,Br.Z),bh=i(({l:e,u:r,v:t,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};r===void 0&&(r=0),t===void 0&&(t=0);let o=r/(13*e)+ER,a=t/(13*e)+AR,s=Br.Y*(e<=8?e/xf:Math.pow((e+16)/116,3)),l=s*(9*o)/(4*a),u=s*(12-3*o-20*a)/(4*a),f={mode:"xyz50",x:l,y:s,z:u};return n!==void 0&&(f.alpha=n),f},"convertLuvToXyz50"),FR=i(e=>Wx(mh(Iu(e))),"convertRgbToLchuv"),SR=i(e=>Pu(bh(Kx(e))),"convertLchuvToRgb"),MR={mode:"lchuv",toMode:{luv:Kx,rgb:SR},fromMode:{rgb:FR,luv:Wx},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:V,fixup:jo},c:V,l:V,alpha:{use:V,fixup:Yr}},difference:{h:mf},average:{h:Uo}},TR={...zs,mode:"lrgb",toMode:{rgb:Vs},fromMode:{rgb:qs},parse:["srgb-linear"],serialize:"srgb-linear"},PR={mode:"luv",toMode:{xyz50:bh,rgb:i(e=>Pu(bh(e)),"rgb")},fromMode:{xyz50:mh,rgb:i(e=>mh(Iu(e)),"rgb")},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:V,u:V,v:V,alpha:{use:V,fixup:Yr}}},Zx=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.cbrt(.412221469470763*e+.5363325372617348*r+.0514459932675022*t),a=Math.cbrt(.2119034958178252*e+.6806995506452344*r+.1073969535369406*t),s=Math.cbrt(.0883024591900564*e+.2817188391361215*r+.6299787016738222*t),l={mode:"oklab",l:.210454268309314*o+.7936177747023054*a-.0040720430116193*s,a:1.9779985324311684*o-2.42859224204858*a+.450593709617411*s,b:.0259040424655478*o+.7827717124575296*a-.8086757549230774*s};return n!==void 0&&(l.alpha=n),l},"convertLrgbToOklab"),Df=i(e=>{let r=Zx(qs(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToOklab"),Nu=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.pow(e+.3963377773761749*r+.2158037573099136*t,3),a=Math.pow(e-.1055613458156586*r-.0638541728258133*t,3),s=Math.pow(e-.0894841775298119*r-1.2914855480194092*t,3),l={mode:"lrgb",r:4.076741636075957*o-3.3077115392580616*a+.2309699031821044*s,g:-1.2684379732850317*o+2.6097573492876887*a-.3413193760026573*s,b:-.0041960761386756*o-.7034186179359362*a+1.7076146940746117*s};return n!==void 0&&(l.alpha=n),l},"convertOklabToLrgb"),Cf=i(e=>Vs(Nu(e)),"convertOklabToRgb");function vh(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}i(vh,"toe");function ud(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}i(ud,"toe_inv");function IR(e,r){let t,n,o,a,s,l,u,f;-1.88170328*e-.80936493*r>1?(t=1.19086277,n=1.76576728,o=.59662641,a=.75515197,s=.56771245,l=4.0767416621,u=-3.3077115913,f=.2309699292):1.81444104*e-1.19445276*r>1?(t=.73956515,n=-.45954404,o=.08285427,a=.1254107,s=.14503204,l=-1.2684380046,u=2.6097574011,f=-.3413193965):(t=1.35733652,n=-.00915799,o=-1.1513021,a=-.50559606,s=.00692167,l=-.0041960863,u=-.7034186147,f=1.707614701);let g=t+n*e+o*r+a*e*e+s*e*r,h=.3963377774*e+.2158037573*r,p=-.1055613458*e-.0638541728*r,b=-.0894841775*e-1.291485548*r;{let v=1+g*h,$=1+g*p,C=1+g*b,E=v*v*v,A=$*$*$,N=C*C*C,_=3*h*v*v,H=3*p*$*$,ce=3*b*C*C,Te=6*h*h*v,be=6*p*p*$,Se=6*b*b*C,or=l*E+u*A+f*N,ir=l*_+u*H+f*ce,jr=l*Te+u*be+f*Se;g=g-or*ir/(ir*ir-.5*or*jr)}return g}i(IR,"compute_max_saturation");function Im(e,r){let t=IR(e,r),n=Nu({l:1,a:t*e,b:t*r}),o=Math.cbrt(1/Math.max(n.r,n.g,n.b)),a=o*t;return[o,a]}i(Im,"find_cusp");function NR(e,r,t,n,o,a=null){a||(a=Im(e,r));let s;if((t-o)*a[1]-(a[0]-o)*n<=0)s=a[1]*o/(n*a[0]+a[1]*(o-t));else{s=a[1]*(o-1)/(n*(a[0]-1)+a[1]*(o-t));{let l=t-o,u=n,f=.3963377774*e+.2158037573*r,g=-.1055613458*e-.0638541728*r,h=-.0894841775*e-1.291485548*r,p=l+u*f,b=l+u*g,v=l+u*h;{let $=o*(1-s)+s*t,C=s*n,E=$+C*f,A=$+C*g,N=$+C*h,_=E*E*E,H=A*A*A,ce=N*N*N,Te=3*p*E*E,be=3*b*A*A,Se=3*v*N*N,or=6*p*p*E,ir=6*b*b*A,jr=6*v*v*N,Yt=4.0767416621*_-3.3077115913*H+.2309699292*ce-1,Et=4.0767416621*Te-3.3077115913*be+.2309699292*Se,fo=4.0767416621*or-3.3077115913*ir+.2309699292*jr,Jr=Et/(Et*Et-.5*Yt*fo),Xn=-Yt*Jr,go=-1.2684380046*_+2.6097574011*H-.3413193965*ce-1,mn=-1.2684380046*Te+2.6097574011*be-.3413193965*Se,at=-1.2684380046*or+2.6097574011*ir-.3413193965*jr,He=mn/(mn*mn-.5*go*at),Ur=-go*He,bn=-.0041960863*_-.7034186147*H+1.707614701*ce-1,vt=-.0041960863*Te-.7034186147*be+1.707614701*Se,vn=-.0041960863*or-.7034186147*ir+1.707614701*jr,In=vt/(vt*vt-.5*bn*vn),_o=-bn*In;Xn=Jr>=0?Xn:1e6,Ur=He>=0?Ur:1e6,_o=In>=0?_o:1e6,s+=Math.min(Xn,Math.min(Ur,_o))}}}return s}i(NR,"find_gamut_intersection");function Nm(e,r,t=null){t||(t=Im(e,r));let n=t[0],o=t[1];return[o/n,o/(1-n)]}i(Nm,"get_ST_max");function Yx(e,r,t){let n=Im(r,t),o=NR(r,t,e,1,e,n),a=Nm(r,t,n),s=.11516993+1/(7.4477897+4.1590124*t+r*(-2.19557347+1.75198401*t+r*(-2.13704948-10.02301043*t+r*(-4.24894561+5.38770819*t+4.69891013*r)))),l=.11239642+1/(1.6132032-.68124379*t+r*(.40370612+.90148123*t+r*(-.27087943+.6122399*t+r*(.00299215-.45399568*t-.14661872*r)))),u=o/Math.min(e*a[0],(1-e)*a[1]),f=e*s,g=(1-e)*l,h=.9*u*Math.sqrt(Math.sqrt(1/(1/(f*f*f*f)+1/(g*g*g*g))));return f=e*.4,g=(1-e)*.8,[Math.sqrt(1/(1/(f*f)+1/(g*g))),h,o]}i(Yx,"get_Cs");function f1(e){const r=e.l!==void 0?e.l:0,t=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o={mode:"okhsl",l:vh(r)};e.alpha!==void 0&&(o.alpha=e.alpha);let a=Math.sqrt(t*t+n*n);if(!a)return o.s=0,o;let[s,l,u]=Yx(r,t/a,n/a),f;if(a<l){let g=0,h=.8*s,p=1-h/l;f=(a-g)/(h+p*(a-g))*.8}else{let g=l,h=.2*l*l*1.25*1.25/s,p=1-h/(u-l);f=.8+.2*((a-g)/(h+p*(a-g)))}return f&&(o.s=f,o.h=ht(Math.atan2(n,t)*180/Math.PI)),o}i(f1,"convertOklabToOkhsl");function g1(e){let r=e.h!==void 0?e.h:0,t=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const o={mode:"oklab",l:ud(n)};if(e.alpha!==void 0&&(o.alpha=e.alpha),!t||n===1)return o.a=o.b=0,o;let a=Math.cos(r/180*Math.PI),s=Math.sin(r/180*Math.PI),[l,u,f]=Yx(o.l,a,s),g,h,p,b;t<.8?(g=1.25*t,h=0,p=.8*l,b=1-p/u):(g=5*(t-.8),h=u,p=.2*u*u*1.25*1.25/l,b=1-p/(f-u));let v=h+g*p/(1-b*g);return o.a=v*a,o.b=v*s,o}i(g1,"convertOkhslToOklab");const BR={...Ix,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:f1,rgb:i(e=>f1(Df(e)),"rgb")},toMode:{oklab:g1,rgb:i(e=>Cf(g1(e)),"rgb")}};function h1(e){let r=e.l!==void 0?e.l:0,t=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o=Math.sqrt(t*t+n*n),a=o?t/o:1,s=o?n/o:1,[l,u]=Nm(a,s),f=.5,g=1-f/l,h=u/(o+r*u),p=h*r,b=h*o,v=ud(p),$=b*v/p,C=Nu({l:v,a:a*$,b:s*$}),E=Math.cbrt(1/Math.max(C.r,C.g,C.b,0));r=r/E,o=o/E*vh(r)/r,r=vh(r);const A={mode:"okhsv",s:o?(f+u)*b/(u*f+u*g*b):0,v:r?r/p:0};return A.s&&(A.h=ht(Math.atan2(n,t)*180/Math.PI)),e.alpha!==void 0&&(A.alpha=e.alpha),A}i(h1,"convertOklabToOkhsv");function p1(e){const r={mode:"oklab"};e.alpha!==void 0&&(r.alpha=e.alpha);const t=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,o=e.v!==void 0?e.v:0,a=Math.cos(t/180*Math.PI),s=Math.sin(t/180*Math.PI),[l,u]=Nm(a,s),f=.5,g=1-f/l,h=1-n*f/(f+u-u*g*n),p=n*u*f/(f+u-u*g*n),b=ud(h),v=p*b/h,$=Nu({l:b,a:a*v,b:s*v}),C=Math.cbrt(1/Math.max($.r,$.g,$.b,0)),E=ud(o*h),A=p*E/h;return r.l=E*C,r.a=A*a*C,r.b=A*s*C,r}i(p1,"convertOkhsvToOklab");const OR={...Ox,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:h1,rgb:i(e=>h1(Df(e)),"rgb")},toMode:{oklab:p1,rgb:i(e=>Cf(p1(e)),"rgb")}};function RR(e,r){if(!r||r[0]!=="oklab")return;const t={mode:"oklab"},[,n,o,a,s]=r;if(!(n.type===j.Hue||o.type===j.Hue||a.type===j.Hue))return n.type!==j.None&&(t.l=Math.min(Math.max(0,n.type===j.Number?n.value:n.value/100),1)),o.type!==j.None&&(t.a=o.type===j.Number?o.value:o.value*.4/100),a.type!==j.None&&(t.b=a.type===j.Number?a.value:a.value*.4/100),s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(RR,"parseOklab");const LR={...Tm,mode:"oklab",toMode:{lrgb:Nu,rgb:Cf},fromMode:{lrgb:Zx,rgb:Df},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[RR],serialize:i(e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize")};function jR(e,r){if(!r||r[0]!=="oklch")return;const t={mode:"oklch"},[,n,o,a,s]=r;if(n.type!==j.None){if(n.type===j.Hue)return;t.l=Math.min(Math.max(0,n.type===j.Number?n.value:n.value/100),1)}if(o.type!==j.None&&(t.c=Math.max(0,o.type===j.Number?o.value:o.value*.4/100)),a.type!==j.None){if(a.type===j.Percentage)return;t.h=a.value}return s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(jR,"parseOklch");const UR={...Pm,mode:"oklch",toMode:{oklab:i(e=>wi(e,"oklab"),"oklab"),rgb:i(e=>Cf(wi(e,"oklab")),"rgb")},fromMode:{rgb:i(e=>yi(Df(e),"oklch"),"rgb"),oklab:i(e=>yi(e,"oklch"),"oklab")},parse:[jR],serialize:i(e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),ranges:{l:[0,1],c:[0,.4],h:[0,360]}},m1=i(e=>{let{r,g:t,b:n,alpha:o}=qs(e),a={mode:"xyz65",x:.486570948648216*r+.265667693169093*t+.1982172852343625*n,y:.2289745640697487*r+.6917385218365062*t+.079286914093745*n,z:0*r+.0451133818589026*t+1.043944368900976*n};return o!==void 0&&(a.alpha=o),a},"convertP3ToXyz65"),b1=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Vs({r:e*2.4934969119414263-r*.9313836179191242-.402710784450717*t,g:e*-.8294889695615749+r*1.7626640603183465+.0236246858419436*t,b:e*.0358458302437845-r*.0761723892680418+.9568845240076871*t},"p3");return n!==void 0&&(o.alpha=n),o},"convertXyz65ToP3"),_R={...zs,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:i(e=>b1(Fa(e)),"rgb"),xyz65:b1},toMode:{rgb:i(e=>Sa(m1(e)),"rgb"),xyz65:m1}},L0=i(e=>{let r=Math.abs(e);return r>=1/512?Math.sign(e)*Math.pow(r,1/1.8):16*e},"gamma$1"),v1=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"prophoto",r:L0(e*1.3457868816471585-r*.2555720873797946-.0511018649755453*t),g:L0(e*-.5446307051249019+r*1.5082477428451466+.0205274474364214*t),b:L0(e*0+r*0+1.2119675456389452*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz50ToProphoto"),j0=i((e=0)=>{let r=Math.abs(e);return r>=16/512?Math.sign(e)*Math.pow(r,1.8):e/16},"linearize$1"),y1=i(e=>{let r=j0(e.r),t=j0(e.g),n=j0(e.b),o={mode:"xyz50",x:.7977666449006423*r+.1351812974005331*t+.0313477341283922*n,y:.2880748288194013*r+.7118352342418731*t+899369387256e-16*n,z:0*r+0*t+.8251046025104602*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertProphotoToXyz50"),zR={...zs,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:v1,rgb:i(e=>v1(Iu(e)),"rgb")},toMode:{xyz50:y1,rgb:i(e=>Pu(y1(e)),"rgb")}},w1=1.09929682680944,qR=.018053968510807,U0=i(e=>{const r=Math.abs(e);return r>qR?(Math.sign(e)||1)*(w1*Math.pow(r,.45)-(w1-1)):4.5*e},"gamma"),k1=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"rec2020",r:U0(e*1.7166511879712683-r*.3556707837763925-.2533662813736599*t),g:U0(e*-.6666843518324893+r*1.6164812366349395+.0157685458139111*t),b:U0(e*.0176398574453108-r*.0427706132578085+.9421031212354739*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz65ToRec2020"),$1=1.09929682680944,VR=.018053968510807,_0=i((e=0)=>{let r=Math.abs(e);return r<VR*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((r+$1-1)/$1,1/.45)},"linearize"),x1=i(e=>{let r=_0(e.r),t=_0(e.g),n=_0(e.b),o={mode:"xyz65",x:.6369580483012911*r+.1446169035862083*t+.1688809751641721*n,y:.262700212011267*r+.6779980715188708*t+.059301716469862*n,z:0*r+.0280726930490874*t+1.0609850577107909*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertRec2020ToXyz65"),WR={...zs,mode:"rec2020",fromMode:{xyz65:k1,rgb:i(e=>k1(Fa(e)),"rgb")},toMode:{xyz65:x1,rgb:i(e=>Sa(x1(e)),"rgb")},parse:["rec2020"],serialize:"rec2020"},ea=.0037930732552754493,Jx=Math.cbrt(ea),z0=i(e=>Math.cbrt(e)-Jx,"transfer$1"),KR=i(e=>{const{r,g:t,b:n,alpha:o}=qs(e),a=z0(.3*r+.622*t+.078*n+ea),s=z0(.23*r+.692*t+.078*n+ea),l=z0(.2434226892454782*r+.2047674442449682*t+.5518098665095535*n+ea),u={mode:"xyb",x:(a-s)/2,y:(a+s)/2,b:l-(a+s)/2};return o!==void 0&&(u.alpha=o),u},"convertRgbToXyb"),q0=i(e=>Math.pow(e+Jx,3),"transfer"),HR=i(({x:e,y:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o=q0(e+r)-ea,a=q0(r-e)-ea,s=q0(t+r)-ea,l=Vs({r:11.031566904639861*o-9.866943908131562*a-.16462299650829934*s,g:-3.2541473810744237*o+4.418770377582723*a-.16462299650829934*s,b:-3.6588512867136815*o+2.7129230459360922*a+1.9459282407775895*s});return n!==void 0&&(l.alpha=n),l},"convertXybToRgb"),GR={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:HR},fromMode:{rgb:KR},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:V,y:V,b:V,alpha:{use:V,fixup:Yr}}},ZR={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:Pu,lab:Mm},fromMode:{rgb:Iu,lab:Sm},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:V,y:V,z:V,alpha:{use:V,fixup:Yr}}},YR=i(e=>{let{x:r,y:t,z:n,alpha:o}=e;r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0);let a={mode:"xyz50",x:1.0479298208405488*r+.0229467933410191*t-.0501922295431356*n,y:.0296278156881593*r+.990434484573249*t-.0170738250293851*n,z:-.0092430581525912*r+.0150551448965779*t+.7518742899580008*n};return o!==void 0&&(a.alpha=o),a},"convertXyz65ToXyz50"),JR=i(e=>{let{x:r,y:t,z:n,alpha:o}=e;r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0);let a={mode:"xyz65",x:.9554734527042182*r-.0230985368742614*t+.0632593086610217*n,y:-.0283697069632081*r+1.0099954580058226*t+.021041398966943*n,z:.0123140016883199*r-.0205076964334779*t+1.3303659366080753*n};return o!==void 0&&(a.alpha=o),a},"convertXyz50ToXyz65"),XR={mode:"xyz65",toMode:{rgb:Sa,xyz50:YR},fromMode:{rgb:Fa,xyz50:JR},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:V,y:V,z:V,alpha:{use:V,fixup:Yr}}},QR=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o={mode:"yiq",y:.29889531*e+.58662247*r+.11448223*t,i:.59597799*e-.2741761*r-.32180189*t,q:.21147017*e-.52261711*r+.31114694*t};return n!==void 0&&(o.alpha=n),o},"convertRgbToYiq"),eL=i(({y:e,i:r,q:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o={mode:"rgb",r:e+.95608445*r+.6208885*t,g:e-.27137664*r-.6486059*t,b:e-1.10561724*r+1.70250126*t};return n!==void 0&&(o.alpha=n),o},"convertYiqToRgb"),rL={mode:"yiq",toMode:{rgb:eL},fromMode:{rgb:QR},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:V,i:V,q:V,alpha:{use:V,fixup:Yr}}},tL=i(e=>Math.max(0,Math.min(1,e||0)),"clamp"),V0=i(e=>Math.round(tL(e)*255),"fixup"),nL=fa("rgb"),oL=i(e=>{if(e===void 0)return;let r=V0(e.r),t=V0(e.g),n=V0(e.b);return"#"+(1<<24|r<<16|t<<8|n).toString(16).slice(1)},"serializeHex"),iL=i(e=>oL(nL(e)),"formatHex"),aL=i(e=>{const r={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(r.alpha=e.alpha),r},"fixup_rgb"),sL=i(e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1),"inrange_rgb");function lL(e="rgb"){const{gamut:r}=hf(e);if(!r)return n=>!0;const t=fa(typeof r=="string"?r:e);return n=>sL(t(n))}i(lL,"inGamut");function uL(e="rgb"){const{gamut:r}=hf(e);if(!r)return a=>ch(a);const t=typeof r=="string"?r:e,n=fa(t),o=lL(t);return a=>{const s=ch(a);if(!s)return;const l=n(s);if(o(l))return s;const u=aL(l);return s.mode===u.mode?u:fa(s.mode)(u)}}i(uL,"clampGamut");ze(_O);ze(ZO);ze(YO);ze(JO);ze(eR);ze(Ix);ze(Ox);ze(cR);ze(dR);ze(pR);ze(mR);ze(Tm);ze(vR);ze(Pm);ze(wR);ze(MR);ze(TR);ze(PR);ze(BR);ze(OR);ze(LR);ze(UR);ze(_R);ze(zR);ze(WR);ze(zs);ze(GR);ze(ZR);ze(XR);ze(rL);const cL=GO("rgb");class So{static{i(this,"Color")}constructor(r){this.set(r)}static isValidColorString(r){try{return new So(r),!0}catch{return!1}}static isColor(r){return r instanceof So}static deserialize(r){const t=JSON.parse(r),n=new So("black");return An(t).forEach(([o,a])=>{o==="originalColorSyntax"?n.originalColorSyntax=ur.isEnumValue(a,we,"Cannot deserialize: invalid color syntax."):n._allColors[o]=a}),n}getRgbDistance(r){return cL(this.#e,r)}getClosestNamedColor(){return Ke(tu).reduce((r,t)=>{const n=this.getRgbDistance(t);return n<r.distance?{distance:n,name:t}:r},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=we.hex;#e=ur.isDefined(gh("black"));_allColors={names:["black"],[we.name]:"black",hexString:"#000000",[we.hex]:{r:0,g:0,b:0},[we.rgb]:{r:0,g:0,b:0},[we.hsl]:{h:0,s:0,l:0},[we.hwb]:{h:0,w:0,b:0},[we.lab]:{l:0,a:0,b:0},[we.lch]:{l:0,c:0,h:0},[we.oklab]:{l:0,a:0,b:0},[we.oklch]:{l:0,c:0,h:0}};clone(){return So.deserialize(this.serialize())}setByString(r){const t=gh(r);if(!t)throw new Error(`Unable to parse invalid color string: '${r}'`);this.originalColorSyntax=bO(r),this.#e=t,this.pullFromInternalColor()}set(r){if(M.isString(r))return this.setByString(r);if(Er.isLengthExactly(Object.keys(r),1,`Cannot set multiple color formats at once: got '${C8(Object.keys(r))}'`),r.hexString||r.name)this.setByString(r.hexString||r.name);else{const[t,n]=ur.isDefined(An(r)[0]),o=no[t],a=Object.values(qe(o.coords,s=>{const l=n[s],u=o.coords[ur.isKeyOf(s,o.coords)],f=l!=null&&l>=u.min&&l<=u.max?n[s]:this[t][s];return ur.isDefined(f)}));this.setByString(`${o.conversionFormat}(${a.join(" ")})`)}}pullFromInternalColor(){en(vi).forEach(r=>{const t=no[r],n=t.conversionFormat,o=M.isKeyOf(this.#e.mode,no)?no[this.#e.mode]:void 0,a=uL(t.colorSpace===o?.colorSpace?n:"rgb")(fa(n)(this.#e));a||Er.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${r}'.`),Ke(this[r]).forEach(s=>{const l=a[s],u=t.coords[ur.isKeyOf(s,t.coords)];l!=null&&(this._allColors[r][s]=_w((l||0)*(u.factor||1),{digits:u.digits||0}))})}),this._allColors.hexString=iL(this.#e),this._allColors.names=dL(this.rgb),this._allColors[we.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return Rn(this._allColors)}toFormattedStrings(){return{...qe(no,t=>Object.values(this[t]).map(o=>String(o).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(Qy," "),[we.name]:(this.names[0]||"").padEnd(Qy," "),[we.hexString]:this[we.hexString]}}toCss(){return{...qe(no,t=>{const n=Object.values(this[t]);return`${t}(${n.join(" ")})`}),[we.hexString]:this[we.hexString],[we.name]:this.names[0]||""}}get names(){return Rn(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[we.hexString]}get hex(){return Rn(this._allColors[we.hex])}get rgb(){return Rn(this._allColors[we.rgb])}get hsl(){return Rn(this._allColors[we.hsl])}get hwb(){return Rn(this._allColors[we.hwb])}get lab(){return Rn(this._allColors[we.lab])}get lch(){return Rn(this._allColors[we.lch])}get oklab(){return Rn(this._allColors[we.oklab])}get oklch(){return Rn(this._allColors[we.oklch])}}function dL(e){return Wt(An(tu),([r])=>r,(r,[,t])=>M.deepEquals(t,[e.r,e.g,e.b]))}i(dL,"findMatchingColorNames");function fL(e){return k`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}i(fL,"colorCss");const Bm=k`
    padding: 0;
    margin: 0;
`,Eo=k`
    ${Bm};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Vr=Nt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function Bu({name:e,svgTemplate:r}){return{name:e,svgTemplate:r}}i(Bu,"defineIcon");const gL=Bu({name:"CloseX24Icon",svgTemplate:m`
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
    `}),hL=Bu({name:"ChevronUp16Icon",svgTemplate:m`
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
    `}),D1=Bu({name:"Copy24Icon",svgTemplate:m`
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
    `}),pL=Bu({name:"EyeClosed24Icon",svgTemplate:m`
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
    `}),mL=Bu({name:"EyeOpen24Icon",svgTemplate:m`
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
    `}),Xx=Nt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),d=Nt({"vira-red-100":"#FFF6F5","vira-red-150":"#FFEDEB","vira-red-200":"#FFE4E1","vira-red-250":"#FFDCD8","vira-red-300":"#FFD1CB","vira-red-350":"#FFC1B8","vira-red-400":"#FFA79B","vira-red-450":"#FF8274","vira-red-500":"#FF564A","vira-red-550":"#F43A32","vira-red-600":"#E2322C","vira-red-650":"#D02C27","vira-red-700":"#BB2520","vira-red-750":"#9E231D","vira-red-800":"#82211A","vira-red-850":"#701A13","vira-red-900":"#611710","vira-red-950":"#52140D","vira-red-1000":"#43130D","vira-yellow-100":"#FEF9E4","vira-yellow-150":"#FDF2D1","vira-yellow-200":"#FDEABF","vira-yellow-250":"#FEE2AD","vira-yellow-300":"#FDD89B","vira-yellow-350":"#FAC986","vira-yellow-400":"#EFB669","vira-yellow-450":"#E29D34","vira-yellow-500":"#CE8800","vira-yellow-550":"#BB7B00","vira-yellow-600":"#AC7100","vira-yellow-650":"#9E6800","vira-yellow-700":"#8C5C00","vira-yellow-750":"#794D00","vira-yellow-800":"#683E00","vira-yellow-850":"#5B3301","vira-yellow-900":"#502A05","vira-yellow-950":"#442308","vira-yellow-1000":"#381D0B","vira-green-100":"#EBFFEE","vira-green-150":"#DDFBE2","vira-green-200":"#CDF8D6","vira-green-250":"#BFF5CC","vira-green-300":"#AFF0C0","vira-green-350":"#9AE8B1","vira-green-400":"#7FD99C","vira-green-450":"#52C87F","vira-green-500":"#1BB565","vira-green-550":"#04A559","vira-green-600":"#009852","vira-green-650":"#008C4A","vira-green-700":"#007C41","vira-green-750":"#016A38","vira-green-800":"#095831","vira-green-850":"#024B29","vira-green-900":"#014024","vira-green-950":"#02371F","vira-green-1000":"#062D1B","vira-teal-100":"#E8FEFD","vira-teal-150":"#D9FAF8","vira-teal-200":"#C9F6F3","vira-teal-250":"#BAF2ED","vira-teal-300":"#A9EDE6","vira-teal-350":"#95E4DB","vira-teal-400":"#79D5CA","vira-teal-450":"#47C3B7","vira-teal-500":"#00B0A4","vira-teal-550":"#00A094","vira-teal-600":"#009389","vira-teal-650":"#00877D","vira-teal-700":"#00786F","vira-teal-750":"#00665F","vira-teal-800":"#01554F","vira-teal-850":"#004843","vira-teal-900":"#003E3A","vira-teal-950":"#033531","vira-teal-1000":"#072B29","vira-blue-100":"#F5F9FF","vira-blue-150":"#EAF3FF","vira-blue-200":"#E0EDFF","vira-blue-250":"#D6E7FF","vira-blue-300":"#CBDFFF","vira-blue-350":"#B9D4FF","vira-blue-400":"#9EC3FF","vira-blue-450":"#7AADFF","vira-blue-500":"#5697FF","vira-blue-550":"#4988ED","vira-blue-600":"#427DDC","vira-blue-650":"#3B72CA","vira-blue-700":"#3365B6","vira-blue-750":"#2D569A","vira-blue-800":"#27487E","vira-blue-850":"#203D6C","vira-blue-900":"#1B345D","vira-blue-950":"#172C4F","vira-blue-1000":"#142540","vira-accent-100":"#F5F9FF","vira-accent-150":"#EAF3FF","vira-accent-200":"#E0EDFF","vira-accent-250":"#D6E7FF","vira-accent-300":"#CBDFFF","vira-accent-350":"#B9D4FF","vira-accent-400":"#9EC3FF","vira-accent-450":"#7AADFF","vira-accent-500":"#5697FF","vira-accent-550":"#4988ED","vira-accent-600":"#427DDC","vira-accent-650":"#3B72CA","vira-accent-700":"#3365B6","vira-accent-750":"#2D569A","vira-accent-800":"#27487E","vira-accent-850":"#203D6C","vira-accent-900":"#1B345D","vira-accent-950":"#172C4F","vira-accent-1000":"#142540","vira-purple-100":"#F9F7FF","vira-purple-150":"#F3EFFF","vira-purple-200":"#EDE8FF","vira-purple-250":"#E6E1FF","vira-purple-300":"#DED8FF","vira-purple-350":"#D2CBFF","vira-purple-400":"#C1B7FF","vira-purple-450":"#AD9BFF","vira-purple-500":"#9B80FF","vira-purple-550":"#8D6EF4","vira-purple-600":"#8265E3","vira-purple-650":"#775BD1","vira-purple-700":"#6A50BB","vira-purple-750":"#5A459E","vira-purple-800":"#4A3B82","vira-purple-850":"#3E3170","vira-purple-900":"#352A61","vira-purple-950":"#2D2452","vira-purple-1000":"#251F43","vira-pink-100":"#FEF5FF","vira-pink-150":"#FFEAFF","vira-pink-200":"#FFE0FC","vira-pink-250":"#FFD7F8","vira-pink-300":"#FFCBF2","vira-pink-350":"#FFB9E9","vira-pink-400":"#FF9BDF","vira-pink-450":"#FF6DD6","vira-pink-500":"#F04AC5","vira-pink-550":"#DD3EB4","vira-pink-600":"#CC37A7","vira-pink-650":"#BC3099","vira-pink-700":"#A82988","vira-pink-750":"#8F2674","vira-pink-800":"#752361","vira-pink-850":"#641C53","vira-pink-900":"#561848","vira-pink-950":"#49153E","vira-pink-1000":"#3B1333","vira-grey-100":"#F9F9F9","vira-grey-150":"#F2F2F2","vira-grey-200":"#EBEBEB","vira-grey-250":"#E5E5E5","vira-grey-300":"#DEDEDE","vira-grey-350":"#D2D2D2","vira-grey-400":"#C2C2C2","vira-grey-450":"#ADADAD","vira-grey-500":"#999999","vira-grey-550":"#8A8A8A","vira-grey-600":"#7F7F7F","vira-grey-650":"#747474","vira-grey-700":"#676767","vira-grey-750":"#585858","vira-grey-800":"#494949","vira-grey-850":"#3E3E3E","vira-grey-900":"#353535","vira-grey-950":"#2D2D2D","vira-grey-1000":"#252525"}),Le=cm({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:d["vira-red-1000"]},"vira-red-foreground-body":{foreground:d["vira-red-750"]},"vira-red-foreground-non-body":{foreground:d["vira-red-650"]},"vira-red-foreground-header":{foreground:d["vira-red-500"]},"vira-red-foreground-placeholder":{foreground:d["vira-red-400"]},"vira-red-foreground-decoration":{foreground:d["vira-red-350"]},"vira-red-foreground-invisible":{foreground:d["vira-red-250"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-red-1000"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-red-700"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-red-600"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-red-450"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-red-400"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-red-350"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-red-200"]},"vira-red-behind-fg-small-body":{background:d["vira-red-250"]},"vira-red-behind-fg-body":{background:d["vira-red-350"]},"vira-red-behind-fg-non-body":{background:d["vira-red-400"]},"vira-red-behind-fg-header":{background:d["vira-red-500"]},"vira-red-behind-fg-placeholder":{background:d["vira-red-650"]},"vira-red-behind-fg-decoration":{background:d["vira-red-750"]},"vira-red-behind-fg-invisible":{background:d["vira-red-1000"]},"vira-red-on-self-small-body":{foreground:d["vira-red-850"],background:d["vira-red-100"]},"vira-red-on-self-body":{foreground:d["vira-red-850"],background:d["vira-red-250"]},"vira-red-on-self-non-body":{foreground:d["vira-red-850"],background:d["vira-red-350"]},"vira-red-on-self-header":{foreground:d["vira-red-850"],background:d["vira-red-450"]},"vira-red-on-self-placeholder":{foreground:d["vira-red-850"],background:d["vira-red-500"]},"vira-red-on-self-decoration":{foreground:d["vira-red-850"],background:d["vira-red-650"]},"vira-red-on-self-invisible":{foreground:d["vira-red-850"],background:d["vira-red-1000"]},"vira-yellow-foreground-small-body":{foreground:d["vira-yellow-1000"]},"vira-yellow-foreground-body":{foreground:d["vira-yellow-750"]},"vira-yellow-foreground-non-body":{foreground:d["vira-yellow-650"]},"vira-yellow-foreground-header":{foreground:d["vira-yellow-500"]},"vira-yellow-foreground-placeholder":{foreground:d["vira-yellow-400"]},"vira-yellow-foreground-decoration":{foreground:d["vira-yellow-350"]},"vira-yellow-foreground-invisible":{foreground:d["vira-yellow-250"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-1000"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-700"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-600"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-450"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-400"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-350"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-250"]},"vira-yellow-behind-fg-small-body":{background:d["vira-yellow-250"]},"vira-yellow-behind-fg-body":{background:d["vira-yellow-350"]},"vira-yellow-behind-fg-non-body":{background:d["vira-yellow-400"]},"vira-yellow-behind-fg-header":{background:d["vira-yellow-500"]},"vira-yellow-behind-fg-placeholder":{background:d["vira-yellow-650"]},"vira-yellow-behind-fg-decoration":{background:d["vira-yellow-750"]},"vira-yellow-behind-fg-invisible":{background:d["vira-yellow-1000"]},"vira-yellow-on-self-small-body":{foreground:d["vira-yellow-850"],background:d["vira-yellow-100"]},"vira-yellow-on-self-body":{foreground:d["vira-yellow-850"],background:d["vira-yellow-300"]},"vira-yellow-on-self-non-body":{foreground:d["vira-yellow-850"],background:d["vira-yellow-350"]},"vira-yellow-on-self-header":{foreground:d["vira-yellow-850"],background:d["vira-yellow-450"]},"vira-yellow-on-self-placeholder":{foreground:d["vira-yellow-850"],background:d["vira-yellow-550"]},"vira-yellow-on-self-decoration":{foreground:d["vira-yellow-850"],background:d["vira-yellow-650"]},"vira-yellow-on-self-invisible":{foreground:d["vira-yellow-850"],background:d["vira-yellow-1000"]},"vira-green-foreground-small-body":{foreground:d["vira-green-1000"]},"vira-green-foreground-body":{foreground:d["vira-green-800"]},"vira-green-foreground-non-body":{foreground:d["vira-green-650"]},"vira-green-foreground-header":{foreground:d["vira-green-550"]},"vira-green-foreground-placeholder":{foreground:d["vira-green-450"]},"vira-green-foreground-decoration":{foreground:d["vira-green-350"]},"vira-green-foreground-invisible":{foreground:d["vira-green-250"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-green-1000"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-green-750"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-green-650"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-green-500"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-green-400"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-green-350"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-green-250"]},"vira-green-behind-fg-small-body":{background:d["vira-green-250"]},"vira-green-behind-fg-body":{background:d["vira-green-350"]},"vira-green-behind-fg-non-body":{background:d["vira-green-450"]},"vira-green-behind-fg-header":{background:d["vira-green-550"]},"vira-green-behind-fg-placeholder":{background:d["vira-green-650"]},"vira-green-behind-fg-decoration":{background:d["vira-green-800"]},"vira-green-behind-fg-invisible":{background:d["vira-green-1000"]},"vira-green-on-self-small-body":{foreground:d["vira-green-850"],background:d["vira-green-100"]},"vira-green-on-self-body":{foreground:d["vira-green-850"],background:d["vira-green-300"]},"vira-green-on-self-non-body":{foreground:d["vira-green-850"],background:d["vira-green-400"]},"vira-green-on-self-header":{foreground:d["vira-green-850"],background:d["vira-green-450"]},"vira-green-on-self-placeholder":{foreground:d["vira-green-850"],background:d["vira-green-550"]},"vira-green-on-self-decoration":{foreground:d["vira-green-850"],background:d["vira-green-700"]},"vira-green-on-self-invisible":{foreground:d["vira-green-850"],background:d["vira-green-1000"]},"vira-teal-foreground-small-body":{foreground:d["vira-teal-1000"]},"vira-teal-foreground-body":{foreground:d["vira-teal-800"]},"vira-teal-foreground-non-body":{foreground:d["vira-teal-650"]},"vira-teal-foreground-header":{foreground:d["vira-teal-550"]},"vira-teal-foreground-placeholder":{foreground:d["vira-teal-450"]},"vira-teal-foreground-decoration":{foreground:d["vira-teal-350"]},"vira-teal-foreground-invisible":{foreground:d["vira-teal-250"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-teal-1000"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-teal-750"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-teal-600"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-teal-500"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-teal-400"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-teal-350"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-teal-250"]},"vira-teal-behind-fg-small-body":{background:d["vira-teal-250"]},"vira-teal-behind-fg-body":{background:d["vira-teal-350"]},"vira-teal-behind-fg-non-body":{background:d["vira-teal-450"]},"vira-teal-behind-fg-header":{background:d["vira-teal-500"]},"vira-teal-behind-fg-placeholder":{background:d["vira-teal-650"]},"vira-teal-behind-fg-decoration":{background:d["vira-teal-750"]},"vira-teal-behind-fg-invisible":{background:d["vira-teal-1000"]},"vira-teal-on-self-small-body":{foreground:d["vira-teal-850"],background:d["vira-teal-100"]},"vira-teal-on-self-body":{foreground:d["vira-teal-850"],background:d["vira-teal-300"]},"vira-teal-on-self-non-body":{foreground:d["vira-teal-850"],background:d["vira-teal-400"]},"vira-teal-on-self-header":{foreground:d["vira-teal-850"],background:d["vira-teal-450"]},"vira-teal-on-self-placeholder":{foreground:d["vira-teal-850"],background:d["vira-teal-550"]},"vira-teal-on-self-decoration":{foreground:d["vira-teal-850"],background:d["vira-teal-700"]},"vira-teal-on-self-invisible":{foreground:d["vira-teal-850"],background:d["vira-teal-1000"]},"vira-blue-foreground-small-body":{foreground:d["vira-blue-1000"]},"vira-blue-foreground-body":{foreground:d["vira-blue-750"]},"vira-blue-foreground-non-body":{foreground:d["vira-blue-650"]},"vira-blue-foreground-header":{foreground:d["vira-blue-500"]},"vira-blue-foreground-placeholder":{foreground:d["vira-blue-450"]},"vira-blue-foreground-decoration":{foreground:d["vira-blue-350"]},"vira-blue-foreground-invisible":{foreground:d["vira-blue-250"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-blue-1000"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-blue-750"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-blue-600"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-blue-450"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-blue-400"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-blue-350"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-blue-250"]},"vira-blue-behind-fg-small-body":{background:d["vira-blue-250"]},"vira-blue-behind-fg-body":{background:d["vira-blue-350"]},"vira-blue-behind-fg-non-body":{background:d["vira-blue-400"]},"vira-blue-behind-fg-header":{background:d["vira-blue-500"]},"vira-blue-behind-fg-placeholder":{background:d["vira-blue-650"]},"vira-blue-behind-fg-decoration":{background:d["vira-blue-750"]},"vira-blue-behind-fg-invisible":{background:d["vira-blue-1000"]},"vira-blue-on-self-small-body":{foreground:d["vira-blue-850"],background:d["vira-blue-100"]},"vira-blue-on-self-body":{foreground:d["vira-blue-850"],background:d["vira-blue-300"]},"vira-blue-on-self-non-body":{foreground:d["vira-blue-850"],background:d["vira-blue-350"]},"vira-blue-on-self-header":{foreground:d["vira-blue-850"],background:d["vira-blue-450"]},"vira-blue-on-self-placeholder":{foreground:d["vira-blue-850"],background:d["vira-blue-550"]},"vira-blue-on-self-decoration":{foreground:d["vira-blue-850"],background:d["vira-blue-650"]},"vira-blue-on-self-invisible":{foreground:d["vira-blue-850"],background:d["vira-blue-1000"]},"vira-accent-foreground-small-body":{foreground:d["vira-accent-1000"]},"vira-accent-foreground-body":{foreground:d["vira-accent-750"]},"vira-accent-foreground-non-body":{foreground:d["vira-accent-650"]},"vira-accent-foreground-header":{foreground:d["vira-accent-500"]},"vira-accent-foreground-placeholder":{foreground:d["vira-accent-450"]},"vira-accent-foreground-decoration":{foreground:d["vira-accent-350"]},"vira-accent-foreground-invisible":{foreground:d["vira-accent-250"]},"vira-accent-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-accent-1000"]},"vira-accent-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-accent-750"]},"vira-accent-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-accent-600"]},"vira-accent-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-accent-450"]},"vira-accent-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-accent-400"]},"vira-accent-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-accent-350"]},"vira-accent-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-accent-250"]},"vira-accent-behind-fg-small-body":{background:d["vira-accent-250"]},"vira-accent-behind-fg-body":{background:d["vira-accent-350"]},"vira-accent-behind-fg-non-body":{background:d["vira-accent-400"]},"vira-accent-behind-fg-header":{background:d["vira-accent-500"]},"vira-accent-behind-fg-placeholder":{background:d["vira-accent-650"]},"vira-accent-behind-fg-decoration":{background:d["vira-accent-750"]},"vira-accent-behind-fg-invisible":{background:d["vira-accent-1000"]},"vira-accent-on-self-small-body":{foreground:d["vira-accent-850"],background:d["vira-accent-100"]},"vira-accent-on-self-body":{foreground:d["vira-accent-850"],background:d["vira-accent-300"]},"vira-accent-on-self-non-body":{foreground:d["vira-accent-850"],background:d["vira-accent-350"]},"vira-accent-on-self-header":{foreground:d["vira-accent-850"],background:d["vira-accent-450"]},"vira-accent-on-self-placeholder":{foreground:d["vira-accent-850"],background:d["vira-accent-550"]},"vira-accent-on-self-decoration":{foreground:d["vira-accent-850"],background:d["vira-accent-650"]},"vira-accent-on-self-invisible":{foreground:d["vira-accent-850"],background:d["vira-accent-1000"]},"vira-purple-foreground-small-body":{foreground:d["vira-purple-1000"]},"vira-purple-foreground-body":{foreground:d["vira-purple-750"]},"vira-purple-foreground-non-body":{foreground:d["vira-purple-650"]},"vira-purple-foreground-header":{foreground:d["vira-purple-500"]},"vira-purple-foreground-placeholder":{foreground:d["vira-purple-400"]},"vira-purple-foreground-decoration":{foreground:d["vira-purple-350"]},"vira-purple-foreground-invisible":{foreground:d["vira-purple-250"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-purple-1000"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-purple-700"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-purple-600"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-purple-450"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-purple-400"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-purple-350"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-purple-200"]},"vira-purple-behind-fg-small-body":{background:d["vira-purple-250"]},"vira-purple-behind-fg-body":{background:d["vira-purple-350"]},"vira-purple-behind-fg-non-body":{background:d["vira-purple-400"]},"vira-purple-behind-fg-header":{background:d["vira-purple-500"]},"vira-purple-behind-fg-placeholder":{background:d["vira-purple-600"]},"vira-purple-behind-fg-decoration":{background:d["vira-purple-750"]},"vira-purple-behind-fg-invisible":{background:d["vira-purple-1000"]},"vira-purple-on-self-small-body":{foreground:d["vira-purple-850"],background:d["vira-purple-100"]},"vira-purple-on-self-body":{foreground:d["vira-purple-850"],background:d["vira-purple-300"]},"vira-purple-on-self-non-body":{foreground:d["vira-purple-850"],background:d["vira-purple-350"]},"vira-purple-on-self-header":{foreground:d["vira-purple-850"],background:d["vira-purple-450"]},"vira-purple-on-self-placeholder":{foreground:d["vira-purple-850"],background:d["vira-purple-500"]},"vira-purple-on-self-decoration":{foreground:d["vira-purple-850"],background:d["vira-purple-650"]},"vira-purple-on-self-invisible":{foreground:d["vira-purple-850"],background:d["vira-purple-1000"]},"vira-pink-foreground-small-body":{foreground:d["vira-pink-1000"]},"vira-pink-foreground-body":{foreground:d["vira-pink-750"]},"vira-pink-foreground-non-body":{foreground:d["vira-pink-650"]},"vira-pink-foreground-header":{foreground:d["vira-pink-500"]},"vira-pink-foreground-placeholder":{foreground:d["vira-pink-400"]},"vira-pink-foreground-decoration":{foreground:d["vira-pink-350"]},"vira-pink-foreground-invisible":{foreground:d["vira-pink-250"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-pink-1000"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-pink-700"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-pink-550"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-pink-450"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-pink-400"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-pink-350"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-pink-200"]},"vira-pink-behind-fg-small-body":{background:d["vira-pink-200"]},"vira-pink-behind-fg-body":{background:d["vira-pink-350"]},"vira-pink-behind-fg-non-body":{background:d["vira-pink-400"]},"vira-pink-behind-fg-header":{background:d["vira-pink-500"]},"vira-pink-behind-fg-placeholder":{background:d["vira-pink-600"]},"vira-pink-behind-fg-decoration":{background:d["vira-pink-750"]},"vira-pink-behind-fg-invisible":{background:d["vira-pink-1000"]},"vira-pink-on-self-small-body":{foreground:d["vira-pink-850"],background:d["vira-pink-100"]},"vira-pink-on-self-body":{foreground:d["vira-pink-850"],background:d["vira-pink-250"]},"vira-pink-on-self-non-body":{foreground:d["vira-pink-850"],background:d["vira-pink-350"]},"vira-pink-on-self-header":{foreground:d["vira-pink-850"],background:d["vira-pink-450"]},"vira-pink-on-self-placeholder":{foreground:d["vira-pink-850"],background:d["vira-pink-500"]},"vira-pink-on-self-decoration":{foreground:d["vira-pink-850"],background:d["vira-pink-650"]},"vira-pink-on-self-invisible":{foreground:d["vira-pink-850"],background:d["vira-pink-1000"]},"vira-grey-foreground-small-body":{foreground:d["vira-grey-1000"]},"vira-grey-foreground-body":{foreground:d["vira-grey-750"]},"vira-grey-foreground-non-body":{foreground:d["vira-grey-650"]},"vira-grey-foreground-header":{foreground:d["vira-grey-500"]},"vira-grey-foreground-placeholder":{foreground:d["vira-grey-450"]},"vira-grey-foreground-decoration":{foreground:d["vira-grey-350"]},"vira-grey-foreground-invisible":{foreground:d["vira-grey-250"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-grey-1000"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-grey-750"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-grey-600"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-grey-500"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-grey-400"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-grey-350"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-grey-250"]},"vira-grey-behind-fg-small-body":{background:d["vira-grey-250"]},"vira-grey-behind-fg-body":{background:d["vira-grey-350"]},"vira-grey-behind-fg-non-body":{background:d["vira-grey-400"]},"vira-grey-behind-fg-header":{background:d["vira-grey-500"]},"vira-grey-behind-fg-placeholder":{background:d["vira-grey-650"]},"vira-grey-behind-fg-decoration":{background:d["vira-grey-750"]},"vira-grey-behind-fg-invisible":{background:d["vira-grey-1000"]},"vira-grey-on-self-small-body":{foreground:d["vira-grey-850"],background:d["vira-grey-100"]},"vira-grey-on-self-body":{foreground:d["vira-grey-850"],background:d["vira-grey-300"]},"vira-grey-on-self-non-body":{foreground:d["vira-grey-850"],background:d["vira-grey-350"]},"vira-grey-on-self-header":{foreground:d["vira-grey-850"],background:d["vira-grey-450"]},"vira-grey-on-self-placeholder":{foreground:d["vira-grey-850"],background:d["vira-grey-550"]},"vira-grey-on-self-decoration":{foreground:d["vira-grey-850"],background:d["vira-grey-650"]},"vira-grey-on-self-invisible":{foreground:d["vira-grey-850"],background:d["vira-grey-1000"]}});T$(Le,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:d["vira-red-250"]},"vira-red-foreground-body":{foreground:d["vira-red-350"]},"vira-red-foreground-non-body":{foreground:d["vira-red-400"]},"vira-red-foreground-header":{foreground:d["vira-red-450"]},"vira-red-foreground-placeholder":{foreground:d["vira-red-600"]},"vira-red-foreground-decoration":{foreground:d["vira-red-750"]},"vira-red-foreground-invisible":{foreground:d["vira-red-1000"]},"vira-red-behind-bg-small-body":{background:d["vira-red-250"]},"vira-red-behind-bg-body":{background:d["vira-red-350"]},"vira-red-behind-bg-non-body":{background:d["vira-red-400"]},"vira-red-behind-bg-header":{background:d["vira-red-500"]},"vira-red-behind-bg-placeholder":{background:d["vira-red-650"]},"vira-red-behind-bg-decoration":{background:d["vira-red-750"]},"vira-red-behind-bg-invisible":{background:d["vira-red-1000"]},"vira-red-behind-fg-small-body":{background:d["vira-red-1000"]},"vira-red-behind-fg-body":{background:d["vira-red-700"]},"vira-red-behind-fg-non-body":{background:d["vira-red-600"]},"vira-red-behind-fg-header":{background:d["vira-red-450"]},"vira-red-behind-fg-placeholder":{background:d["vira-red-400"]},"vira-red-behind-fg-decoration":{background:d["vira-red-350"]},"vira-red-behind-fg-invisible":{background:d["vira-red-200"]},"vira-red-on-self-small-body":{foreground:d["vira-red-200"],background:d["vira-red-1000"]},"vira-red-on-self-body":{foreground:d["vira-red-200"],background:d["vira-red-950"]},"vira-red-on-self-non-body":{foreground:d["vira-red-200"],background:d["vira-red-700"]},"vira-red-on-self-header":{foreground:d["vira-red-200"],background:d["vira-red-550"]},"vira-red-on-self-placeholder":{foreground:d["vira-red-200"],background:d["vira-red-450"]},"vira-red-on-self-decoration":{foreground:d["vira-red-200"],background:d["vira-red-400"]},"vira-red-on-self-invisible":{foreground:d["vira-red-200"],background:d["vira-red-350"]},"vira-yellow-foreground-small-body":{foreground:d["vira-yellow-250"]},"vira-yellow-foreground-body":{foreground:d["vira-yellow-350"]},"vira-yellow-foreground-non-body":{foreground:d["vira-yellow-400"]},"vira-yellow-foreground-placeholder":{foreground:d["vira-yellow-600"]},"vira-yellow-foreground-decoration":{foreground:d["vira-yellow-750"]},"vira-yellow-foreground-invisible":{foreground:d["vira-yellow-1000"]},"vira-yellow-behind-bg-small-body":{background:d["vira-yellow-250"]},"vira-yellow-behind-bg-body":{background:d["vira-yellow-350"]},"vira-yellow-behind-bg-non-body":{background:d["vira-yellow-400"]},"vira-yellow-behind-bg-header":{background:d["vira-yellow-500"]},"vira-yellow-behind-bg-placeholder":{background:d["vira-yellow-650"]},"vira-yellow-behind-bg-decoration":{background:d["vira-yellow-750"]},"vira-yellow-behind-bg-invisible":{background:d["vira-yellow-1000"]},"vira-yellow-behind-fg-small-body":{background:d["vira-yellow-1000"]},"vira-yellow-behind-fg-body":{background:d["vira-yellow-700"]},"vira-yellow-behind-fg-non-body":{background:d["vira-yellow-600"]},"vira-yellow-behind-fg-header":{background:d["vira-yellow-450"]},"vira-yellow-behind-fg-placeholder":{background:d["vira-yellow-400"]},"vira-yellow-behind-fg-decoration":{background:d["vira-yellow-350"]},"vira-yellow-behind-fg-invisible":{background:d["vira-yellow-250"]},"vira-yellow-on-self-small-body":{foreground:d["vira-yellow-200"],background:d["vira-yellow-1000"]},"vira-yellow-on-self-body":{foreground:d["vira-yellow-200"],background:d["vira-yellow-900"]},"vira-yellow-on-self-non-body":{foreground:d["vira-yellow-200"],background:d["vira-yellow-700"]},"vira-yellow-on-self-header":{foreground:d["vira-yellow-200"],background:d["vira-yellow-550"]},"vira-yellow-on-self-placeholder":{foreground:d["vira-yellow-200"],background:d["vira-yellow-450"]},"vira-yellow-on-self-decoration":{foreground:d["vira-yellow-200"],background:d["vira-yellow-400"]},"vira-yellow-on-self-invisible":{foreground:d["vira-yellow-200"],background:d["vira-yellow-350"]},"vira-green-foreground-small-body":{foreground:d["vira-green-250"]},"vira-green-foreground-body":{foreground:d["vira-green-350"]},"vira-green-foreground-non-body":{foreground:d["vira-green-450"]},"vira-green-foreground-header":{foreground:d["vira-green-500"]},"vira-green-foreground-placeholder":{foreground:d["vira-green-650"]},"vira-green-foreground-decoration":{foreground:d["vira-green-750"]},"vira-green-foreground-invisible":{foreground:d["vira-green-1000"]},"vira-green-behind-bg-small-body":{background:d["vira-green-250"]},"vira-green-behind-bg-body":{background:d["vira-green-350"]},"vira-green-behind-bg-non-body":{background:d["vira-green-450"]},"vira-green-behind-bg-header":{background:d["vira-green-550"]},"vira-green-behind-bg-placeholder":{background:d["vira-green-650"]},"vira-green-behind-bg-decoration":{background:d["vira-green-800"]},"vira-green-behind-bg-invisible":{background:d["vira-green-1000"]},"vira-green-behind-fg-small-body":{background:d["vira-green-1000"]},"vira-green-behind-fg-body":{background:d["vira-green-750"]},"vira-green-behind-fg-non-body":{background:d["vira-green-650"]},"vira-green-behind-fg-header":{background:d["vira-green-500"]},"vira-green-behind-fg-placeholder":{background:d["vira-green-400"]},"vira-green-behind-fg-decoration":{background:d["vira-green-350"]},"vira-green-behind-fg-invisible":{background:d["vira-green-250"]},"vira-green-on-self-small-body":{foreground:d["vira-green-200"],background:d["vira-green-1000"]},"vira-green-on-self-body":{foreground:d["vira-green-200"],background:d["vira-green-900"]},"vira-green-on-self-non-body":{foreground:d["vira-green-200"],background:d["vira-green-700"]},"vira-green-on-self-header":{foreground:d["vira-green-200"],background:d["vira-green-600"]},"vira-green-on-self-placeholder":{foreground:d["vira-green-200"],background:d["vira-green-450"]},"vira-green-on-self-decoration":{foreground:d["vira-green-200"],background:d["vira-green-400"]},"vira-green-on-self-invisible":{foreground:d["vira-green-200"],background:d["vira-green-350"]},"vira-teal-foreground-small-body":{foreground:d["vira-teal-250"]},"vira-teal-foreground-body":{foreground:d["vira-teal-350"]},"vira-teal-foreground-non-body":{foreground:d["vira-teal-450"]},"vira-teal-foreground-header":{foreground:d["vira-teal-500"]},"vira-teal-foreground-placeholder":{foreground:d["vira-teal-650"]},"vira-teal-foreground-decoration":{foreground:d["vira-teal-750"]},"vira-teal-foreground-invisible":{foreground:d["vira-teal-1000"]},"vira-teal-behind-bg-small-body":{background:d["vira-teal-250"]},"vira-teal-behind-bg-body":{background:d["vira-teal-350"]},"vira-teal-behind-bg-non-body":{background:d["vira-teal-450"]},"vira-teal-behind-bg-placeholder":{background:d["vira-teal-650"]},"vira-teal-behind-bg-decoration":{background:d["vira-teal-750"]},"vira-teal-behind-bg-invisible":{background:d["vira-teal-1000"]},"vira-teal-behind-fg-small-body":{background:d["vira-teal-1000"]},"vira-teal-behind-fg-body":{background:d["vira-teal-750"]},"vira-teal-behind-fg-non-body":{background:d["vira-teal-600"]},"vira-teal-behind-fg-placeholder":{background:d["vira-teal-400"]},"vira-teal-behind-fg-decoration":{background:d["vira-teal-350"]},"vira-teal-behind-fg-invisible":{background:d["vira-teal-250"]},"vira-teal-on-self-small-body":{foreground:d["vira-teal-200"],background:d["vira-teal-1000"]},"vira-teal-on-self-body":{foreground:d["vira-teal-200"],background:d["vira-teal-900"]},"vira-teal-on-self-non-body":{foreground:d["vira-teal-200"],background:d["vira-teal-700"]},"vira-teal-on-self-header":{foreground:d["vira-teal-200"],background:d["vira-teal-600"]},"vira-teal-on-self-placeholder":{foreground:d["vira-teal-200"],background:d["vira-teal-450"]},"vira-teal-on-self-decoration":{foreground:d["vira-teal-200"],background:d["vira-teal-400"]},"vira-teal-on-self-invisible":{foreground:d["vira-teal-200"],background:d["vira-teal-350"]},"vira-blue-foreground-small-body":{foreground:d["vira-blue-250"]},"vira-blue-foreground-body":{foreground:d["vira-blue-350"]},"vira-blue-foreground-non-body":{foreground:d["vira-blue-400"]},"vira-blue-foreground-placeholder":{foreground:d["vira-blue-600"]},"vira-blue-foreground-decoration":{foreground:d["vira-blue-750"]},"vira-blue-foreground-invisible":{foreground:d["vira-blue-1000"]},"vira-blue-behind-bg-small-body":{background:d["vira-blue-250"]},"vira-blue-behind-bg-body":{background:d["vira-blue-350"]},"vira-blue-behind-bg-non-body":{background:d["vira-blue-400"]},"vira-blue-behind-bg-header":{background:d["vira-blue-500"]},"vira-blue-behind-bg-placeholder":{background:d["vira-blue-650"]},"vira-blue-behind-bg-decoration":{background:d["vira-blue-750"]},"vira-blue-behind-bg-invisible":{background:d["vira-blue-1000"]},"vira-blue-behind-fg-small-body":{background:d["vira-blue-1000"]},"vira-blue-behind-fg-body":{background:d["vira-blue-750"]},"vira-blue-behind-fg-non-body":{background:d["vira-blue-600"]},"vira-blue-behind-fg-header":{background:d["vira-blue-450"]},"vira-blue-behind-fg-placeholder":{background:d["vira-blue-400"]},"vira-blue-behind-fg-decoration":{background:d["vira-blue-350"]},"vira-blue-behind-fg-invisible":{background:d["vira-blue-250"]},"vira-blue-on-self-small-body":{foreground:d["vira-blue-200"],background:d["vira-blue-1000"]},"vira-blue-on-self-body":{foreground:d["vira-blue-200"],background:d["vira-blue-900"]},"vira-blue-on-self-non-body":{foreground:d["vira-blue-200"],background:d["vira-blue-700"]},"vira-blue-on-self-header":{foreground:d["vira-blue-200"],background:d["vira-blue-550"]},"vira-blue-on-self-placeholder":{foreground:d["vira-blue-200"],background:d["vira-blue-450"]},"vira-blue-on-self-decoration":{foreground:d["vira-blue-200"],background:d["vira-blue-400"]},"vira-blue-on-self-invisible":{foreground:d["vira-blue-200"],background:d["vira-blue-350"]},"vira-accent-foreground-small-body":{foreground:d["vira-accent-250"]},"vira-accent-foreground-body":{foreground:d["vira-accent-350"]},"vira-accent-foreground-non-body":{foreground:d["vira-accent-400"]},"vira-accent-foreground-placeholder":{foreground:d["vira-accent-600"]},"vira-accent-foreground-decoration":{foreground:d["vira-accent-750"]},"vira-accent-foreground-invisible":{foreground:d["vira-accent-1000"]},"vira-accent-behind-bg-small-body":{background:d["vira-accent-250"]},"vira-accent-behind-bg-body":{background:d["vira-accent-350"]},"vira-accent-behind-bg-non-body":{background:d["vira-accent-400"]},"vira-accent-behind-bg-header":{background:d["vira-accent-500"]},"vira-accent-behind-bg-placeholder":{background:d["vira-accent-650"]},"vira-accent-behind-bg-decoration":{background:d["vira-accent-750"]},"vira-accent-behind-bg-invisible":{background:d["vira-accent-1000"]},"vira-accent-behind-fg-small-body":{background:d["vira-accent-1000"]},"vira-accent-behind-fg-body":{background:d["vira-accent-750"]},"vira-accent-behind-fg-non-body":{background:d["vira-accent-600"]},"vira-accent-behind-fg-header":{background:d["vira-accent-450"]},"vira-accent-behind-fg-placeholder":{background:d["vira-accent-400"]},"vira-accent-behind-fg-decoration":{background:d["vira-accent-350"]},"vira-accent-behind-fg-invisible":{background:d["vira-accent-250"]},"vira-accent-on-self-small-body":{foreground:d["vira-accent-200"],background:d["vira-accent-1000"]},"vira-accent-on-self-body":{foreground:d["vira-accent-200"],background:d["vira-accent-900"]},"vira-accent-on-self-non-body":{foreground:d["vira-accent-200"],background:d["vira-accent-700"]},"vira-accent-on-self-header":{foreground:d["vira-accent-200"],background:d["vira-accent-550"]},"vira-accent-on-self-placeholder":{foreground:d["vira-accent-200"],background:d["vira-accent-450"]},"vira-accent-on-self-decoration":{foreground:d["vira-accent-200"],background:d["vira-accent-400"]},"vira-accent-on-self-invisible":{foreground:d["vira-accent-200"],background:d["vira-accent-350"]},"vira-purple-foreground-small-body":{foreground:d["vira-purple-250"]},"vira-purple-foreground-body":{foreground:d["vira-purple-350"]},"vira-purple-foreground-non-body":{foreground:d["vira-purple-400"]},"vira-purple-foreground-header":{foreground:d["vira-purple-450"]},"vira-purple-foreground-placeholder":{foreground:d["vira-purple-600"]},"vira-purple-foreground-decoration":{foreground:d["vira-purple-750"]},"vira-purple-foreground-invisible":{foreground:d["vira-purple-1000"]},"vira-purple-behind-bg-small-body":{background:d["vira-purple-250"]},"vira-purple-behind-bg-body":{background:d["vira-purple-350"]},"vira-purple-behind-bg-non-body":{background:d["vira-purple-400"]},"vira-purple-behind-bg-header":{background:d["vira-purple-500"]},"vira-purple-behind-bg-placeholder":{background:d["vira-purple-600"]},"vira-purple-behind-bg-decoration":{background:d["vira-purple-750"]},"vira-purple-behind-bg-invisible":{background:d["vira-purple-1000"]},"vira-purple-behind-fg-small-body":{background:d["vira-purple-1000"]},"vira-purple-behind-fg-body":{background:d["vira-purple-700"]},"vira-purple-behind-fg-non-body":{background:d["vira-purple-600"]},"vira-purple-behind-fg-header":{background:d["vira-purple-450"]},"vira-purple-behind-fg-placeholder":{background:d["vira-purple-400"]},"vira-purple-behind-fg-decoration":{background:d["vira-purple-350"]},"vira-purple-behind-fg-invisible":{background:d["vira-purple-200"]},"vira-purple-on-self-small-body":{foreground:d["vira-purple-200"],background:d["vira-purple-1000"]},"vira-purple-on-self-body":{foreground:d["vira-purple-200"],background:d["vira-purple-900"]},"vira-purple-on-self-non-body":{foreground:d["vira-purple-200"],background:d["vira-purple-700"]},"vira-purple-on-self-header":{foreground:d["vira-purple-200"],background:d["vira-purple-550"]},"vira-purple-on-self-placeholder":{foreground:d["vira-purple-200"],background:d["vira-purple-450"]},"vira-purple-on-self-decoration":{foreground:d["vira-purple-200"],background:d["vira-purple-400"]},"vira-purple-on-self-invisible":{foreground:d["vira-purple-200"],background:d["vira-purple-350"]},"vira-pink-foreground-small-body":{foreground:d["vira-pink-200"]},"vira-pink-foreground-body":{foreground:d["vira-pink-350"]},"vira-pink-foreground-non-body":{foreground:d["vira-pink-400"]},"vira-pink-foreground-header":{foreground:d["vira-pink-450"]},"vira-pink-foreground-placeholder":{foreground:d["vira-pink-600"]},"vira-pink-foreground-decoration":{foreground:d["vira-pink-750"]},"vira-pink-foreground-invisible":{foreground:d["vira-pink-1000"]},"vira-pink-behind-bg-small-body":{background:d["vira-pink-200"]},"vira-pink-behind-bg-body":{background:d["vira-pink-350"]},"vira-pink-behind-bg-non-body":{background:d["vira-pink-400"]},"vira-pink-behind-bg-header":{background:d["vira-pink-500"]},"vira-pink-behind-bg-placeholder":{background:d["vira-pink-600"]},"vira-pink-behind-bg-decoration":{background:d["vira-pink-750"]},"vira-pink-behind-bg-invisible":{background:d["vira-pink-1000"]},"vira-pink-behind-fg-small-body":{background:d["vira-pink-1000"]},"vira-pink-behind-fg-body":{background:d["vira-pink-700"]},"vira-pink-behind-fg-non-body":{background:d["vira-pink-550"]},"vira-pink-behind-fg-header":{background:d["vira-pink-450"]},"vira-pink-behind-fg-placeholder":{background:d["vira-pink-400"]},"vira-pink-behind-fg-decoration":{background:d["vira-pink-350"]},"vira-pink-behind-fg-invisible":{background:d["vira-pink-200"]},"vira-pink-on-self-small-body":{foreground:d["vira-pink-200"],background:d["vira-pink-1000"]},"vira-pink-on-self-body":{foreground:d["vira-pink-200"],background:d["vira-pink-950"]},"vira-pink-on-self-non-body":{foreground:d["vira-pink-200"],background:d["vira-pink-700"]},"vira-pink-on-self-header":{foreground:d["vira-pink-200"],background:d["vira-pink-550"]},"vira-pink-on-self-placeholder":{foreground:d["vira-pink-200"],background:d["vira-pink-450"]},"vira-pink-on-self-decoration":{foreground:d["vira-pink-200"],background:d["vira-pink-400"]},"vira-pink-on-self-invisible":{foreground:d["vira-pink-200"],background:d["vira-pink-300"]},"vira-grey-foreground-small-body":{foreground:d["vira-grey-250"]},"vira-grey-foreground-body":{foreground:d["vira-grey-350"]},"vira-grey-foreground-non-body":{foreground:d["vira-grey-400"]},"vira-grey-foreground-placeholder":{foreground:d["vira-grey-600"]},"vira-grey-foreground-decoration":{foreground:d["vira-grey-750"]},"vira-grey-foreground-invisible":{foreground:d["vira-grey-1000"]},"vira-grey-behind-bg-small-body":{background:d["vira-grey-250"]},"vira-grey-behind-bg-body":{background:d["vira-grey-350"]},"vira-grey-behind-bg-non-body":{background:d["vira-grey-400"]},"vira-grey-behind-bg-placeholder":{background:d["vira-grey-650"]},"vira-grey-behind-bg-decoration":{background:d["vira-grey-750"]},"vira-grey-behind-bg-invisible":{background:d["vira-grey-1000"]},"vira-grey-behind-fg-small-body":{background:d["vira-grey-1000"]},"vira-grey-behind-fg-body":{background:d["vira-grey-750"]},"vira-grey-behind-fg-non-body":{background:d["vira-grey-600"]},"vira-grey-behind-fg-placeholder":{background:d["vira-grey-400"]},"vira-grey-behind-fg-decoration":{background:d["vira-grey-350"]},"vira-grey-behind-fg-invisible":{background:d["vira-grey-250"]},"vira-grey-on-self-small-body":{foreground:d["vira-grey-200"],background:d["vira-grey-1000"]},"vira-grey-on-self-body":{foreground:d["vira-grey-200"],background:d["vira-grey-900"]},"vira-grey-on-self-non-body":{foreground:d["vira-grey-200"],background:d["vira-grey-700"]},"vira-grey-on-self-header":{foreground:d["vira-grey-200"],background:d["vira-grey-600"]},"vira-grey-on-self-placeholder":{foreground:d["vira-grey-200"],background:d["vira-grey-450"]},"vira-grey-on-self-decoration":{foreground:d["vira-grey-200"],background:d["vira-grey-400"]},"vira-grey-on-self-invisible":{foreground:d["vira-grey-200"],background:d["vira-grey-350"]}}});const C1="8px",Ge=Nt({"vira-form-border-color":Le.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":Le.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":Le.colors[Ze].background.value,"vira-form-foreground-color":Le.colors[Ze].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":Le.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":Le.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":Le.colors["vira-accent-behind-bg-invisible"].background.value,"vira-form-selection-active-color":Le.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-error-color":Le.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":Le.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":Le.colors["vira-red-behind-bg-body"].background.value,"vira-form-warning-color":Le.colors["vira-yellow-behind-bg-non-body"].background.value,"vira-form-warning-hover-color":Le.colors["vira-yellow-behind-bg-header"].background.value,"vira-form-warning-active-color":Le.colors["vira-yellow-behind-bg-body"].background.value,"vira-form-positive-color":Le.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-positive-hover-color":Le.colors["vira-green-behind-bg-header"].background.value,"vira-form-positive-active-color":Le.colors["vira-green-behind-bg-body"].background.value,"vira-form-success-color":Le.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":C1,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":Le.colors["vira-accent-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":k`calc(var(--vira-form-radius, ${Oe(C1)}) + 2px)`,"vira-form-plain-color":d["vira-grey-100"].value,"vira-form-plain-hover-color":Le.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":Le.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":Le.colors["vira-accent-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":Le.colors["vira-accent-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":Le.colors["vira-accent-behind-bg-body"].background.value,"vira-form-danger-color":Le.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":Le.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":Le.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":Le.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":Le.colors["vira-grey-foreground-decoration"].foreground.value});function ro(e){return M.isString(e)?Oe(e):e.value}i(ro,"cssValueOrRaw");function cd({elementBorderSize:e="1px",outlineGap:r="2px",outlineWidth:t="2px",noNesting:n,outlineColor:o=Ge["vira-form-focus-outline-color"],borderRadius:a=Ge["vira-form-focus-outline-border-radius"],renderInside:s}={}){const l=k`calc(${ro(r)})`,u=k`calc(${ro(t)} + ${ro(r)} + ${ro(e)})`,f=s?k`
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
    `}i(cd,"createFocusStyles");const dd=k`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Om=Nt({"vira-monospace":"monospace"}),E1=Nt({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),bL={menuShadow:k`
        filter: drop-shadow(0px 5px 5px ${E1["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:k`
        box-shadow: 0 5px 15px ${E1["modal-shadow-color"].value};
    `},yh=k`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,A1="vira-",Ef=im({assertInputs:i(e=>{if(!e.tagName.startsWith(A1))throw new Error(`Tag name should start with '${A1}' but got '${e.tagName}'`)},"assertInputs")});function wh({input:e,matcher:r}){return!e||!r?!0:e.length>1?e.split("").every(t=>wh({input:t,matcher:r})):r instanceof RegExp?!!e.match(r):r.includes(e)}i(wh,"doesMatch");function vL({value:e,allowed:r,blocked:t}){const n=String(e),o=r?wh({input:n,matcher:r}):!0,a=t?wh({input:n,matcher:t}):!1;return o&&!a}i(vL,"isAllowed");function kh(e){const r=String(e.value);if(!e.value)return{filtered:r,blocked:""};const{filtered:t,blocked:n}=r.split("").reduce((o,a)=>(vL({...e,value:a})?o.filtered.push(a):o.blocked.push(a),o),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}i(kh,"filterTextInputValue");function yL({inputs:e,previousValue:r,event:t,inputBlockedCallback:n,newValueCallback:o}){const a=Aa(t,HTMLInputElement),s=M.hasKey(t,"data")&&kd.isString(t.data)||"";if(s){const{blocked:u}=kh({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const l=kh({value:a.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;a.value!==l&&(a.value=l),r!==l&&o(l)}i(yL,"textInputListener");const ut=Ef()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":i(({inputs:e})=>!!e.fitContainer||!!e.icon?.size,"vira-icon-fit-container")},styles:i(({hostClasses:e})=>k`
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
    `,"styles"),render({inputs:e,host:r}){if(e.icon)e.icon.size&&(r.style.width=fi(e.icon.size),r.style.height=fi(e.icon.size));else return"";return e.icon.svgTemplate}});var ra;(function(e){e.Default="text",e.Password="password",e.Email="email",e.Number="number"})(ra||(ra={}));const ni=Ef()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:i(({hostClasses:e,cssVars:r})=>k`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${Ge["vira-form-foreground-color"].value};
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
                    font-weight: ${Ge["vira-form-label-font-weight"].value};
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
                ${Eo};
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
                ${yh};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Eo};
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
                border-radius: ${Ge["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${Ge["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Eo};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${r["vira-input-padding-horizontal"].value};
                border-radius: ${Ge["vira-form-radius"].value};
                background-color: ${Ge["vira-form-background-color"].value};
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
                ${Eo};
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
                background: ${Ge["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${Ge["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${Ge["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${yh};
            }

            button {
                ${Eo};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Xx["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${Ge["vira-form-placeholder-color"].value};
            }

            .clear-x-button:hover {
                color: ${Ge["vira-form-error-color"].value};
            }

            .clear-x-button:active {
                color: ${Ge["vira-form-error-active-color"].value};
            }

            .show-password-button:hover {
                color: ${Ge["vira-form-accent-primary-color"].value};
            }

            .show-password-button:active {
                color: ${Ge["vira-form-accent-primary-active-color"].value};
            }

            ${e["vira-input-error"].selector} {
                & .wrapper-border {
                    border-color: ${Ge["vira-form-error-color"].value};
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
        `,"styles"),events:{valueChange:Re(),inputBlocked:Re()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Po(32)}},hostClasses:{"vira-input-disabled":i(({inputs:e})=>!!e.disabled,"vira-input-disabled"),"vira-input-fit-text":i(({inputs:e})=>!!e.fitText,"vira-input-fit-text"),"vira-input-clear-button-shown":i(({inputs:e})=>!!e.showClearButton,"vira-input-clear-button-shown"),"vira-input-error":i(({inputs:e})=>!!e.hasError,"vira-input-error")},render:i(({inputs:e,dispatch:r,state:t,updateState:n,events:o,host:a})=>{const{filtered:s}=kh({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),l=e.icon?m`
                  <${ut.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${ut}>
              `:ee,u=e.fitText?k`
                  width: ${t.forcedInputWidth}px;
              `:ee,f=U("mousedown",p=>{const b=Aa(p,HTMLElement,{useOriginalTarget:!0}),v=ur.instanceOf(a.shadowRoot.querySelector("input"),HTMLInputElement);b!==v&&(p.preventDefault(),v.focus())}),g=e.disableBrowserHelps||e.type===ra.Password,h=m`
            <span class="input-wrapper" ${e.label?ee:f}>
                ${l}
                ${Wr(!!e.fitText,m`
                        <span
                            class="size-span"
                            ${om(({contentRect:p})=>{n({forcedInputWidth:p.width})})}
                        >
                            <pre>${s||e.placeholder||ee}</pre>
                        </span>
                    `)}

                <input
                    id=${Ue(e.label?t.randomId:void 0)}
                    aria-label=${Ue(e.label||void 0)}
                    autofocus=${!1}
                    type=${wL(e.type,t.showPassword)}
                    style=${u}
                    autocomplete=${Ue(g?"off":void 0)}
                    autocorrect=${Ue(g?"off":void 0)}
                    autocapitalize=${Ue(g?"off":void 0)}
                    spellcheck=${Ue(g?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${U("input",p=>{yL({inputs:e,previousValue:s,event:p,inputBlockedCallback(b){r(new o.inputBlocked(b))},newValueCallback(b){r(new o.valueChange(b))}})})}
                    placeholder=${Ue(e.placeholder||void 0)}
                    ${En(e.attributePassthrough)}
                />

                ${Wr(!!(e.showClearButton&&e.value),m`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${U("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault()})}
                            ${U("click",()=>{e.disabled||r(new o.valueChange(""))})}
                        >
                            <${ut.assign({icon:gL})}></${ut}>
                        </button>
                    `)}
                ${Wr(e.type===ra.Password,m`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${U("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault()})}
                            ${U("click",()=>{n({showPassword:!t.showPassword})})}
                        >
                            <${ut.assign({icon:t.showPassword?mL:pL})}></${ut}>
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
            `:h},"render")});function wL(e,r){return e===ra.Password&&r?ra.Default:e||ra.Default}i(wL,"calculateEffectiveInputType");const W0=Jn()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:i(({cssVars:e})=>k`
        :host {
            display: flex;
            align-items: center;
            font-family: ${Om["vira-monospace"].value};
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

        ${ni} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,"styles"),events:{valueChange:Re()},render({inputs:e,events:r,dispatch:t,cssVars:n}){const o=no[e.colorFormatName],a=o.coords[e.colorCoordinateName];if(!a)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const s=10,l=ID(s,h=>{const p=a.min+(a.max-a.min)*(h/s);return new So({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:p}}).toCss()[o.conversionFormat]}),u=k`linear-gradient(to right, ${Oe(l.join(","))})`,f=ur.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),g=a.radix?Math.round(f).toString(a.radix).toUpperCase().padStart(a.radixPad||0,"0"):String(f);return m`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${k`
                    ${n["vir-color-slider-gradient"].name}: ${u};
                `}
                step=${Math.pow(10,a.digits?-a.digits:0)}
                ${jN(h=>{Er.instanceOf(h,HTMLInputElement),h.min=String(a.min),h.max=String(a.max),h.value=String(f)})}
                ${U("input",h=>{const p=Aa(h,HTMLInputElement),b=Number(p.value);isNaN(b)||t(new r.valueChange(b))})}
            />
            <${ni.assign({value:g})}
                ${U(ni.events.valueChange,h=>{const p=a.radix?parseInt(h.detail,a.radix):Number(h.detail);isNaN(p)||t(new r.valueChange(p))})}
            ></${ni}>
        `}}),K0=Jn()({tagName:"vir-color-format-sliders",styles:k`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${Bm};
        }
    `,events:{colorChange:Re()},render({inputs:e,dispatch:r,events:t}){const n=no[e.colorFormatName],o=Ke(n.coords).map(a=>m`
                    <${W0.assign({color:e.color,colorCoordinateName:a,colorFormatName:e.colorFormatName})}
                        ${U(W0.events.valueChange,s=>{const l=e.color.clone();l.set({[e.colorFormatName]:{[a]:s.detail}});const u=l.toCss()[n.conversionFormat];r(new t.colorChange(u))})}
                    ></${W0}>
                `);return m`
            ${e.showFormatName?m`
                      <h3>${e.colorFormatName}</h3>
                  `:ee}
            ${o}
        `}}),H0=Jn()({tagName:"vir-color-swatch",styles:k`
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
                    background-color: ${Oe(r)};
                    color: ${Oe(t)};
                `}
            >
                <slot></slot>
            </div>
        `}}),G0=Jn()({tagName:"vir-contrast-indicator",styles:k`
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

        .${Oe(ne.Invisible)} {
            color: red;
        }
        .${Oe(ne.Decoration)} {
            color: #ff6600;
        }
        .${Oe(ne.Placeholder)} {
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
                        ${IB[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),F1=Jn()({tagName:"vir-color-pair",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"vir-color-pair-no-contrast-tips":i(({inputs:e,state:r})=>!e.showContrast&&!r.forceShowEverything,"vir-color-pair-no-contrast-tips")},styles:i(({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Eo};
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
            font-family: ${Om["vira-monospace"].value};
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${Bm};
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
                  `:ee,a=e.previewElement?MB({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,s=a&&(t.showContrast||e.forceShowEverything)?m`
                      <${G0.assign({contrast:a,fontWeight:t.fontWeight})}></${G0}>
                  `:ee;return m`
            <button
                ${U("click",()=>{r({forceShowEverything:!e.forceShowEverything})})}
                ${ua(l=>{r({previewElement:ur.instanceOf(l,HTMLElement)})})}
                class="color-preview"
                style=${k`
                    color: ${Oe(t.color.foreground.default)};
                    background: ${Oe(t.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${k`
                                visibility: ${Oe((a?.fontSizes[400]||1/0)>150?"hidden":"visible")};
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
        `}});function S1({open:e,callback:r,popUpManager:t,host:n,options:o}){if(e){const a=t.showPopUp(n,o);r?.(a)}else t.removePopUp(),r?.(void 0)}i(S1,"triggerPopUpState");function $h(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}i($h,"isInputLikeElement");const M1={top:0,left:0,right:0,bottom:0};class Qx extends xd("hide-pop-up"){static{i(this,"HidePopUpEvent")}}class e4 extends Gt()("nav-select"){static{i(this,"NavSelectEvent")}}class kL{static{i(this,"PopUpManager")}navController;listenTarget=new mu;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(r,t){this.navController=r,this.options={...this.options,...t}}attachGlobalListeners(){this.cleanupCallbacks=[j$(!1,r=>{r||this.removePopUp()}),this.navController.listen(gm,r=>{const t=r.composedPath()[0];t instanceof Element&&$h(t)||r.detail.success&&(this.listenTarget.dispatch(new e4({detail:r.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),r.stopImmediatePropagation(),r.preventDefault())}),Ll("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Ll("keydown",r=>{const t=r.code;if(t==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=r.composedPath()[0];if(n instanceof Element&&$h(n))return;t==="ArrowDown"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Vt.Down,allowWrapping:!1})):t==="ArrowUp"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Vt.Up,allowWrapping:!1})):t==="ArrowLeft"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Vt.Left,allowWrapping:!1})):t==="ArrowRight"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:Vt.Right,allowWrapping:!1})):(t==="Enter"||t==="Return"||t==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(r.stopImmediatePropagation(),r.preventDefault())}})]}listen(r,t,n){return this.listenTarget.listen(r,t,n)}removePopUp(){this.cleanupCallbacks.forEach(r=>r()),this.listenTarget.dispatch(new Qx)}showPopUp(r,t){this.lastRootElement=r;const n={...this.options,...t},o=k$(r);Er.instanceOf(o,HTMLElement);const a=r.getBoundingClientRect(),s=o.getBoundingClientRect(),l=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,f=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-l,bottom:s.bottom-u},g=qe(M1,v=>a[v]),h=qe(M1,v=>{const $=f[v],C=g[v];return Math.abs($-C)}),p=h.top>h.bottom+n.verticalDiffThreshold&&h.bottom<n.minDownSpace,b=h.left>h.right+n.horizontalDiffThreshold&&h.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!p,popRight:!b,positions:{container:f,root:g,diff:h}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Yo;(function(e){e.Left="left",e.Right="right",e.Both="both",e.Auto="auto"})(Yo||(Yo={}));const nl=Ef()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new kL(new L$(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-disabled"),"vira-pop-up-trigger-inside-focus":i(({inputs:e})=>!!e.useInsideFocus,"vira-pop-up-trigger-inside-focus"),"vira-pop-up-trigger-outside-focus":i(({inputs:e})=>!e.useInsideFocus,"vira-pop-up-trigger-outside-focus")},styles:i(({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Eo};
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
            ${yh};
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
    `,"styles"),events:{navSelect:Re(),openChange:Re(),init:Re()},cleanup({state:e,updateState:r}){r({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:r,host:t,inputs:n,dispatch:o,events:a}){e.popUpManager.listen(Qx,()=>{if(r({showPopUpResult:void 0}),o(new a.openChange(void 0)),n.focusOnClose&&!n.isDisabled){const s=t.shadowRoot.querySelector(".dropdown-wrapper");Er.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(e4,s=>{n.keepOpenAfterInteraction||S1({open:!1,callback(l){r({showPopUpResult:l})},host:t,popUpManager:e.popUpManager}),o(new a.navSelect(s.detail))}),o(new a.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:r,state:t,inputs:n,updateState:o,host:a,slotNames:s}){function l({emitEvent:v,open:$},C){if(t.showPopUpResult&&n.keepOpenAfterInteraction&&C){const E=a.shadowRoot.querySelector(".dropdown-trigger");if(E&&!C.composedPath().includes(E))return}S1({open:$,callback(E){o({showPopUpResult:E}),v&&e(new r.openChange(E))},host:a,popUpManager:t.popUpManager})}i(l,"triggerPopUp"),n.isDisabled?l({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&t.showPopUpResult?l({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!t.showPopUpResult&&l({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor===Yo.Auto||n.horizontalAnchor===void 0?t.showPopUpResult?.popRight?Yo.Left:Yo.Right:n.horizontalAnchor,f=u===Yo.Right&&t.showPopUpResult?n.ignoreMaxWidth?k`
                          left: unset;
                      `:k`
                          left: -${t.showPopUpResult.positions.diff.left}px;
                      `:k`
                      left: ${n.popUpOffset?.left||0}px;
                  `,g=t.showPopUpResult&&u===Yo.Left?n.ignoreMaxWidth?k`
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
                ${U("keydown",v=>{!t.showPopUpResult&&v.code.startsWith("Arrow")&&l({emitEvent:!0,open:!0},v)})}
                ${U("click",v=>{if(v.detail===0){let $=!1;if($$(({element:C})=>$h(C)?($=!0,!0):!1),$)return;b(v)}else if(v.button===0&&t.showPopUpResult){const $=a.shadowRoot.querySelector(".dropdown-trigger");$&&!v.composedPath().includes($)&&l({emitEvent:!0,open:!1},v)}})}
                ${U("mousedown",v=>{if(v.button!==0)return;const $=ur.instanceOf(a.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);v.composedPath().includes($)&&b(v)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${Gr({"right-aligned":u===Yo.Right})}"
                    style=${p}
                >
                    ${Wr(!!t.showPopUpResult,m`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),Z0=Ef()({tagName:"vira-select",state(){return{randomId:Po(32),cleanupListeners:void 0}},events:{valueChange:Re()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":i(({inputs:e})=>!!e.disabled,"vira-select-disabled"),"vira-select-error":i(({inputs:e})=>!!e.hasError,"vira-select-error"),"vira-select-not-raw":i(({inputs:e})=>!e.rawSelect,"vira-select-not-raw")},styles:i(({hostClasses:e,cssVars:r})=>k`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${Ge["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Eo};
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
                    color: ${Ge["vira-form-placeholder-color"].value};
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
                border-radius: ${Ge["vira-form-radius"].value};
                color: ${Ge["vira-form-foreground-color"].value};
                background-color: ${Ge["vira-form-background-color"].value};
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
                    border-radius: ${Ge["vira-form-radius"].value};
                    z-index: 0;
                    pointer-events: none;
                }

                & .wrapper-border {
                    top: -1px;
                    left: -1px;
                    border: 1px solid ${Ge["vira-form-border-color"].value};
                    transition: border
                        ${Xx["vira-interaction-animation-duration"].value};
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
                font-weight: ${Ge["vira-form-label-font-weight"].value};
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
            border-color: ${Ge["vira-form-error-color"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanupListeners?.();const n=[ao(t,"mousedown",o=>{const a=ur.instanceOf(t.shadowRoot.querySelector("select"),HTMLSelectElement);o.composedPath().includes(a)||(o.preventDefault(),o.stopPropagation(),a.showPicker&&a.showPicker())})];r({cleanupListeners:i(()=>{n.forEach(o=>o())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e,state:r,dispatch:t,events:n}){const o=e.value||void 0,a=e.placeholder||o==null?m`
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
                    ${U("input",l=>{const u=Aa(l,HTMLSelectElement),f=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(g=>g.value===o)),t(new n.valueChange(f))})}
                    ${En(e.attributePassthrough?.select)}
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
                <${ut.assign({icon:hL})}
                    class="trigger-icon"
                ></${ut}>
            </span>
        `;return e.label?m`
                <label for=${r.randomId} ${En(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}});class Y0 extends Gt()("local-storage-client-all-values-event"){static{i(this,"LocalStorageClientAllValuesEvent")}}class $L{static{i(this,"LocalStorageClient")}shapes;options;listenTarget=new mu;keyEvents;get AllValuesType(){throw new Error("Cannot use AllValuesType as a runtime value. It is a type only.")}get ValueType(){throw new Error("Cannot use ValueType as a runtime value. It is a type only.")}constructor(r,t={}){this.shapes=r,this.options=t,this.storeName=t.storeName||"local-storage-client",this.keyEvents=qe(r,n=>class extends Gt()(`local-storage-client-${String(n)}-event`){}),this.get=qe(this.shapes,n=>(o={})=>this.getAllValues(o)[n]),this.listen=qe(this.shapes,n=>o=>this.listenTarget.listen(this.keyEvents[n],async a=>{await o(a.detail)})),this.set=qe(this.shapes,n=>o=>{Jc(o,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const a=this.getAllValues();return a[n]=o,globalThis.localStorage.setItem(this.storeName,JSON.stringify(a)),this.listenTarget.dispatch(new Y0({detail:a})),this.listenTarget.dispatch(new this.keyEvents[n]({detail:o})),o}),this.delete=qe(this.shapes,n=>()=>{const o=this.getAllValues();delete o[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(o)),this.listenTarget.dispatch(new Y0({detail:o})),this.listenTarget.dispatch(new this.keyEvents[n]({detail:void 0}))})}storeName;getAllValues({throwErrorOnFailure:r=!1}={}){return Nw(()=>{const t=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return Bw(t,(n,o)=>{const a=this.shapes[n];if(a){if(r)Jc(o,a,{allowExtraKeys:!0});else if(!ri(o,a,{allowExtraKeys:!0}))return;return{key:n,value:o}}})},{handleError:i(t=>{if(r)throw ha(t,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}},"handleError")})}listenToAllValues(r){return this.listenTarget.listen(Y0,async t=>{await r(t.detail)})}listen;get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}destroy(){this.listenTarget.destroy()}}const J0=new $L({lastFormat:sa(vi)}),xL=is(vi).map(e=>({value:e,label:e.toUpperCase()})),ol=Jn()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:ls.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:ls.Length}},state(){return{selectedFormatName:J0.get.lastFormat()||vi.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":i(({inputs:e})=>!!e.alwaysShowPicker,"vir-color-picker-always-show")},styles:i(({cssVars:e,hostClasses:r})=>k`
        :host {
            display: inline-flex;
        }

        ${r["vir-color-picker-always-show"].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${Eo}
            cursor: pointer;
            display: flex;
        }

        ${nl} {
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
            font-family: ${Om["vira-monospace"].value};
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
            ${bL.menuShadow}
        }

        .raw-input-wrapper {
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 12px;
            ${Ge["vira-form-border-color"].name}: #ddd;
            color: #666;

            & ${ni} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,"styles"),events:{colorChange:Re()},render({inputs:e,dispatch:r,events:t,state:n,updateState:o}){const a=So.isColor(e.color)?e.color:new So(e.color||"black"),s=no[n.selectedFormatName],l=n.rawInput??a.toCss()[s.rawSyntax],u=m`
            <div class="raw-input-wrapper">
                <${ni.assign({value:l})}
                    ${U(ni.events.valueChange,p=>{const b=p.detail;o({rawInput:b}),So.isValidColorString(b)&&r(new t.colorChange(b))})}
                ></${ni}>
                <button
                    class="code-button"
                    ${U("click",async()=>{await globalThis.navigator.clipboard.writeText(l)})}
                >
                    <${ut.assign({icon:D1,fitContainer:!0})}></${ut}>
                </button>
            </div>
        `,f=m`
            <button
                class="code-button"
                ${U("click",async()=>{await globalThis.navigator.clipboard.writeText(a.hexString)})}
            >
                <span>${a.hexString}</span>
                <${ut.assign({icon:D1,fitContainer:!0})}></${ut}>
            </button>
        `,g=m`
            <div class="swatch-wrapper">
                <${H0.assign({backgroundColor:a})}></${H0}>
                ${e.showHexValue?f:ee}
            </div>
        `,h=m`
            <div class="picker">
                <${Z0.assign({options:xL,value:n.selectedFormatName})}
                    ${U(Z0.events.valueChange,p=>{const b=kd.isEnumValue(p.detail,vi);b&&(o({selectedFormatName:b}),J0.set.lastFormat(b))})}
                ></${Z0}>
                ${u}
                <${K0.assign({color:a,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${U(K0.events.colorChange,p=>{r(new t.colorChange(p.detail)),o({rawInput:void 0})})}
                ></${K0}>
            </div>
        `;return e.alwaysShowPicker?m`
                ${g} ${h}
            `:m`
                <${nl.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${nl.slotNames.trigger}
                        ${U("mousedown",()=>{const p=J0.get.lastFormat();p&&o({selectedFormatName:p})})}
                    >
                        ${g}
                    </button>
                    <div class="pop-up" slot=${nl.slotNames.popUp}>
                        ${h}
                    </div>
                </${nl}>
            `}}),lc="None";function DL({parent:e,title:r,theme:t,hideInverseColors:n,overrides:o,useVerticalLayout:a,prefixGroupByCount:s=2,hideCopyCode:l}){const u={"Show Var Names":{controlType:ge.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:ge.Checkbox,initValue:!0}},f={"Theme Override":{controlType:ge.Dropdown,initValue:lc,options:[lc,...(o||[]).map(C=>{if(C.name===lc)throw new Error(`Cannot have theme override named '${lc}'`);return C.name})]}},g=xe({parent:e,title:r,controls:u});function h({controls:C,theme:E,themeColorName:A}){const N=M.isKeyOf(A,E.colors)?E.colors[A]:void 0,_=M.isKeyOf(A,E.inverse)?E.inverse[A]:void 0;if(!N||!_)throw new Error(`No theme color found by name '${A}'`);const H=m`
            <${F1.assign({color:N,showVarValues:!0,showVarNames:C["Show Var Names"],showContrast:C["Show Contrast Tips"],fontWeight:400})}></${F1}>
        `;return m`
            <div class="with-inverse">${H}${ee}</div>
        `}i(h,"buildThemeColorTemplate");function p(C,E,A){const N=PD(Object.keys(E.colors),_=>s?_.split("-").slice(0,s).join("-"):_);Object.entries(N).forEach(([_,H])=>{H&&C({title:_,styles:k`
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
                        `}})})}i(p,"createThemePageExamples");const b=["Click a color preview to show CSS var names and values."],v=xe({parent:g,title:"Default",descriptionParagraphs:b,useVerticalExamples:a,controls:{...f},defineExamples({defineExample:C}){p(C,t,o)}}),$=(o||[]).map(C=>xe({parent:g,title:C.name,useVerticalExamples:a,descriptionParagraphs:b,defineExamples({defineExample:E}){p(E,C.asTheme,void 0)}}));return[g,v,...$]}i(DL,"createColorThemeBookPages");const CL=["pagehide","pageshow","popstate"],Wo=nr()({tagName:"vira-modal",events:{modalClose:Re()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanupListeners:void 0}},cleanup({state:e}){e.cleanupListeners?.()},hostClasses:{"vira-modal-phone-size":i(({inputs:e})=>!!e.isMobileSize,"vira-modal-phone-size")},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-filter":"blur(3px)"},styles:i(({hostClasses:e,cssVars:r})=>k`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${dm};
        }

        dialog {
            ${fL(S.colors[Ze])}
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
    `,"styles"),render({inputs:e,state:r,updateState:t,events:n,dispatch:o,slotNames:a}){if(r.dialogElement&&e.open!==r.dialogElement.open&&(e.open?r.dialogElement.showModal():r.dialogElement.close()),r.previousOpenValue!==e.open&&(r.cleanupListeners?.(),t({previousOpenValue:e.open}),e.open)){const l=CL.map(u=>Ll(u,()=>{o(new n.modalClose)}));t({cleanupListeners:i(()=>{l.forEach(u=>u())},"cleanupListeners")})}function s(){e.open&&(r.cleanupListeners?.(),o(new n.modalClose))}return i(s,"close"),m`
            <dialog
                ${ua(l=>{t({dialogElement:ur.instanceOf(l,HTMLDialogElement)})})}
                ${U("close",()=>{s()})}
                ${U("mousedown",l=>{r.contentElement&&!l.composedPath().includes(r.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${ua(l=>{t({contentElement:ur.instanceOf(l,HTMLDivElement)})})}
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
                            ${U("click",()=>{r.dialogElement?.close()})}
                        >
                            <${B.assign({icon:Cm})}></${B}>
                        </button>
                    </div>
                    ${e.open?m`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:ee}
                </div>
            </dialog>
        `}}),St=nr()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanupListeners:void 0}},hostClasses:{"vira-overflow-switch-show-small":i(({state:e,inputs:r})=>e.isOverflowing||!!r.useSmall,"vira-overflow-switch-show-small")},styles:i(({hostClasses:e})=>k`
        :host {
            display: inline-block;
            max-width: 100%;
        }

        .large,
        .small {
            display: inline-block;
        }

        .small {
            display: none;
        }

        /**
         * When the large content overflows, hide it but keep it in layout so we can measure it.
         * The small content is then shown instead.
         */
        ${e["vira-overflow-switch-show-small"].selector} .large {
            visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
        }

        ${e["vira-overflow-switch-show-small"].selector} .small {
            display: inline-block;
        }
    `,"styles"),cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({slotNames:e,updateState:r,inputs:t,host:n,state:o}){return m`
            <div
                class="large"
                ${ua(a=>{if(!t.automaticallySwitch)return;const s={elementToTest:a,host:n,updateState:r},l=new ResizeObserver(()=>{X0(s)});l.observe(n),l.observe(a);const u=ao(a,"slotchange",()=>{X0(s)});X0(s),o.cleanupListeners?.(),r({cleanupListeners(){l.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function X0({elementToTest:e,host:r,updateState:t}){const n=e.scrollWidth>r.clientWidth;t({isOverflowing:n})}i(X0,"updateOverflowing");const ko=nr()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px"},styles:i(({cssVars:e})=>k`
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
    `,"styles"),render({inputs:e,host:r}){const t=e.min||0,o=(e.max||100)-t,a=e.value-t,s=YD(Math.round(a/o*100),{min:0,max:100});return WB(r,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),m`
            <div
                class="progress-bar"
                style=${s?k`
                          width: ${s}%;
                      `:k`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});var oi=(e=>(e.Top="top",e.Bottom="bottom",e.Left="left",e.Right="right",e))(oi||{}),r4=(e=>(e.Vertical="vertical",e.Horizontal="horizontal",e))(r4||{});const Li=nr()({tagName:"vira-tabs",hostClasses:{"vira-tabs-bar-top":i(({inputs:e})=>e.barDirection==="top","vira-tabs-bar-top"),"vira-tabs-bar-bottom":i(({inputs:e})=>!e.barDirection||e.barDirection==="bottom","vira-tabs-bar-bottom"),"vira-tabs-bar-left":i(({inputs:e})=>e.barDirection==="left","vira-tabs-bar-left"),"vira-tabs-bar-right":i(({inputs:e})=>e.barDirection==="right","vira-tabs-bar-right"),"vira-tabs-color-accent":i(({inputs:e})=>!e.colorVariant||e.colorVariant===te.Accent,"vira-tabs-color-accent"),"vira-tabs-color-plain":i(({inputs:e})=>e.colorVariant===te.Plain,"vira-tabs-color-plain"),"vira-tabs-icon-layout-vertical":i(({inputs:e})=>!e.iconLayout||e.iconLayout==="vertical","vira-tabs-icon-layout-vertical"),"vira-tabs-icon-layout-horizontal":i(({inputs:e})=>e.iconLayout==="horizontal","vira-tabs-icon-layout-horizontal")},cssVars:{"vira-tabs-active-color":R["vira-form-accent-primary-color"].value,"vira-tabs-active-hover-color":R["vira-form-accent-primary-hover-color"].value,"vira-tabs-inactive-color":S.colors["vira-grey-foreground-header"].foreground.value,"vira-tabs-inactive-hover-color":S.colors["vira-grey-foreground-non-body"].foreground.value,"vira-tabs-bar-thickness":"3px"},styles:i(({hostClasses:e,cssVars:r})=>k`
            :host {
                display: inline-flex;
                box-sizing: border-box;
                ${Oo};
                max-width: 100%;
                max-height: 100%;
            }

            .tabs-container {
                display: flex;
                position: relative;
                list-style: none;
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
                padding: 8px 16px;
                position: relative;
                color: ${r["vira-tabs-inactive-color"].value};
                font-size: ${R["vira-form-medium-text-size"].value};
                text-decoration: none;
                ${ca({renderInside:!0,elementBorderSize:"0"})}

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
                    ${ks};
                }
            }

            ${e["vira-tabs-bar-bottom"].selector} {
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

            ${St} {
                max-width: 100%;
            }

            ${Ft} {
                text-decoration: none;
            }
        `,"styles"),render({inputs:e}){const r=Wt(e.tabs,o=>{if(o.isHidden)return;const a=b0(e.currentRoute,o.paths),s=o.icon?m`
                          <${B.assign({icon:o.icon})}></${B}>
                      `:ee,l=a||!!o.isDisabled;return m`
                    <li
                        class=${Gr({selected:a,disabled:!!o.isDisabled})}
                        role="presentation"
                    >
                        <${Ft.assign({route:{router:e.router,route:{paths:o.paths.fullPaths},scrollToTop:!0},disableLinkStyles:!0,attributePassthrough:{a:{role:"tab","aria-selected":String(a),"aria-disabled":String(!!o.isDisabled),tabindex:l?"-1":void 0}}})}>
                            <span class="tab-content">
                                ${s}
                                <span class="tab-label">${o.label}</span>
                            </span>
                        </${Ft}>
                    </li>
                `},M.isTruthy),t=e.tabs.find(o=>b0(e.currentRoute,o.paths)),n=hm(Wt(e.tabs,o=>{if(o.isHidden)return;const a=b0(e.currentRoute,o.paths);return{content:m`
                            <${Ft.assign({route:{router:e.router,route:{paths:o.paths.fullPaths},scrollToTop:!0},disableLinkStyles:!0})}>
                                ${o.label}
                            </${Ft}>
                        `,selected:a,disabled:o.isDisabled}},M.isTruthy));return m`
            <${St.assign({automaticallySwitch:!0})}>
                <ul
                    class="tabs-container"
                    role="tablist"
                    slot=${St.slotNames.large}
                >
                    ${r}
                </ul>
                <${Wi.assign({horizontalAnchor:e.menuHorizontalAnchor,isDisabled:e.menuIsDisabled,popUpOffset:e.menuPopUpOffset,menuCornerStyle:fm.AllRounded})}
                    slot=${St.slotNames.small}
                >
                    <${ye.assign({text:t?.label||"",showMenuCaret:!0,colorVariant:te.Neutral})}
                        slot=${Wi.slotNames.trigger}
                    ></${ye}>
                    ${n}
                </${Wi}>
            </${St}>
        `}}),ou={value:k`transparent`};function il(e){const r=Tl[e]["behind-bg"],t=Tl[e]["on-self"];return{[lr.Standard]:{idle:{textColor:r[ne.NonBodyText].foreground,backgroundColor:r[ne.NonBodyText].background,borderColor:r[ne.NonBodyText].background},hover:{textColor:r[ne.Header].foreground,backgroundColor:r[ne.Header].background,borderColor:r[ne.Header].background},active:{textColor:r[ne.NonBodyText].foreground,backgroundColor:r[ne.NonBodyText].background,borderColor:r[ne.NonBodyText].background}},[lr.Subtle]:{idle:{textColor:t[ne.BodyText].foreground,backgroundColor:t[ne.BodyText].background,borderColor:t[ne.BodyText].background},hover:{textColor:t[ne.NonBodyText].foreground,backgroundColor:t[ne.NonBodyText].background,borderColor:t[ne.NonBodyText].background},active:{textColor:t[ne.BodyText].foreground,backgroundColor:t[ne.BodyText].background,borderColor:t[ne.BodyText].background}}}}i(il,"buildThemedTagColors");function al(e){const r=Tl[e]["on-self"][ne.BodyText];return{idle:{textColor:r.foreground,backgroundColor:ou,borderColor:r.background},hover:{textColor:r.foreground,backgroundColor:Tl[e]["behind-bg"][ne.Invisible].background,borderColor:r.background},active:{textColor:r.foreground,backgroundColor:Tl[e]["behind-bg"][ne.Decoration].background,borderColor:r.background}}}i(al,"buildThemedNotCheckedColors");const EL={[te.Plain]:{[lr.Standard]:{idle:{backgroundColor:S.inverse[Ze].background,textColor:S.inverse[Ze].foreground,borderColor:S.inverse[Ze].background},hover:{backgroundColor:S.colors["vira-grey-behind-bg-non-body"].background,textColor:S.colors["vira-grey-behind-bg-non-body"].foreground,borderColor:S.colors["vira-grey-behind-bg-non-body"].background},active:{backgroundColor:S.inverse[Ze].background,textColor:S.inverse[Ze].foreground,borderColor:S.inverse[Ze].background}},[lr.Subtle]:{idle:{backgroundColor:ou,textColor:S.colors[Ze].foreground,borderColor:ou},hover:{backgroundColor:S.colors["vira-grey-behind-fg-small-body"].background,textColor:S.colors["vira-grey-behind-fg-small-body"].foreground,borderColor:S.colors["vira-grey-behind-fg-small-body"].background},active:{backgroundColor:S.colors["vira-grey-behind-fg-body"].background,textColor:S.colors["vira-grey-behind-fg-body"].foreground,borderColor:S.colors["vira-grey-behind-fg-body"].background}}},[te.Accent]:il(oo[te.Accent]),[te.Neutral]:il(oo[te.Neutral]),[te.Danger]:il(oo[te.Danger]),[te.Warning]:il(oo[te.Warning]),[te.Positive]:il(oo[te.Positive])},AL={[te.Plain]:{idle:{textColor:S.colors[Ze].foreground,backgroundColor:ou,borderColor:ou},hover:{backgroundColor:S.colors["vira-grey-behind-fg-small-body"].background,textColor:S.colors["vira-grey-behind-fg-small-body"].foreground,borderColor:S.colors["vira-grey-behind-fg-small-body"].background},active:{backgroundColor:S.colors["vira-grey-behind-fg-body"].background,textColor:S.colors["vira-grey-behind-fg-body"].foreground,borderColor:S.colors["vira-grey-behind-fg-body"].background}},[te.Accent]:al(oo[te.Accent]),[te.Neutral]:al(oo[te.Neutral]),[te.Danger]:al(oo[te.Danger]),[te.Warning]:al(oo[te.Warning]),[te.Positive]:al(oo[te.Positive])},sl=nr()({tagName:"vira-tag",cssVars:{"vira-tag-text-color":"transparent","vira-tag-background-color":"transparent","vira-tag-border-color":"transparent","vira-tag-hover-text-color":"transparent","vira-tag-hover-background-color":"transparent","vira-tag-hover-border-color":"transparent","vira-tag-active-text-color":"transparent","vira-tag-active-background-color":"transparent","vira-tag-active-border-color":"transparent","vira-tag-disabled-text-color":S.colors["vira-grey-behind-bg-decoration"].foreground.value,"vira-tag-disabled-background-color":S.colors["vira-grey-behind-bg-decoration"].background.value,"vira-tag-disabled-border-color":S.colors["vira-grey-behind-bg-decoration"].background.value,"vira-tag-border-radius":"1000px","vira-tag-gap":"6px","vira-tag-horizontal-padding":"12px","vira-tag-border-width":"2px"},events:{toggle:Re(),cancel:Re()},hostClasses:{"vira-tag-selectable":i(({inputs:e})=>M.isBoolean(e.isClickable?.selected),"vira-tag-selectable"),"vira-tag-checked":i(({inputs:e})=>!!e.isClickable?.selected,"vira-tag-checked"),"vira-tag-not-checked":i(({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-not-checked"),"vira-tag-cancellable":i(({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-cancellable"),"vira-tag-not-clickable":i(({inputs:e})=>!e.isClickable,"vira-tag-not-clickable"),"vira-tag-disabled":i(({inputs:e})=>!!e.disabled,"vira-tag-disabled"),"vira-tag-size-large":i(({inputs:e})=>e.size===Yi.Large,"vira-tag-size-large"),"vira-tag-size-medium":i(({inputs:e})=>!e.size||e.size===Yi.Medium,"vira-tag-size-medium"),"vira-tag-size-small":i(({inputs:e})=>e.size===Yi.Small,"vira-tag-size-small"),"vira-tag-emphasis-standard":i(({inputs:e})=>!e.emphasis||e.emphasis===lr.Standard,"vira-tag-emphasis-standard"),"vira-tag-emphasis-subtle":i(({inputs:e})=>e.emphasis===lr.Subtle,"vira-tag-emphasis-subtle"),"vira-tag-color-accent":i(({inputs:e})=>!e.color||e.color===te.Accent,"vira-tag-color-accent"),"vira-tag-color-plain":i(({inputs:e})=>e.color===te.Plain,"vira-tag-color-plain"),"vira-tag-color-neutral":i(({inputs:e})=>e.color===te.Neutral,"vira-tag-color-neutral"),"vira-tag-color-danger":i(({inputs:e})=>e.color===te.Danger,"vira-tag-color-danger"),"vira-tag-color-warning":i(({inputs:e})=>e.color===te.Warning,"vira-tag-color-warning"),"vira-tag-color-positive":i(({inputs:e})=>e.color===te.Positive,"vira-tag-color-positive")},styles:i(({cssVars:e,hostClasses:r})=>{function t(){const a=df.flatMap(s=>da.map(l=>{const u=EL[l][s],f=r[`vira-tag-color-${l}`].selector,g=r[`vira-tag-emphasis-${s}`].selector;return k`
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
                    `}));return Oe(a.join(`
`))}i(t,"generateVariantCss");function n(){const a=da.map(s=>{const l=AL[s],u=r[`vira-tag-color-${s}`].selector,f=r["vira-tag-not-checked"].selector;return k`
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
                `});return Oe(a.join(`
`))}i(n,"generateNotCheckedCss");function o(){const a=cf.map(s=>k`
                    ${r[`vira-tag-size-${s}`].selector} button {
                        height: ${nh[s]}px;
                        font-size: ${R[`vira-form-${s}-text-size`].value};
                    }
                `);return Oe(a.join(`
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
                ${Oo}

                & button {
                    color: ${e["vira-tag-disabled-text-color"].value};
                    background-color: ${e["vira-tag-disabled-background-color"].value};
                    border-color: ${e["vira-tag-disabled-border-color"].value};
                }
            }
        `},"styles"),render({inputs:e,dispatch:r,events:t}){const n=!e.isClickable||!!e.disabled;return m`
            <button
                ?disabled=${n}
                ${U("click",()=>{n||(e.isClickable?.selected!=null?r(new t.toggle(!e.isClickable.selected)):e.isClickable?.cancellable&&r(new t.cancel))})}
            >
                <${B.assign({icon:pm})}
                    class="selected-check"
                ></${B}>
                <span class="text">${String(e.text)}</span>
                <${B.assign({icon:vm})}
                    class="cancel-x"
                ></${B}>
            </button>
        `}});function t4(e){return TN({async updateCallback(r,t){if(t&&r in t.cache)return{cache:t.cache,element:t.cache[r],key:r};const n=await e[r]();return{cache:{...t?.cache,[r]:n},element:n,key:r}}})}i(t4,"createDynamicElementLoader");function n4(e,{ready:r,loading:t,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?t(e.value.then(a=>({[a.key]:a.element}))):r({[e.value.key]:e.value.element})}i(n4,"renderDynamicElement");const pn=im(),xn=pn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:i(({cssVars:e})=>k`
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
                ${U("click",n=>{(!e.router||M$(n))&&(n.preventDefault(),window.scrollTo(0,0),r(new ed(e.route)))})}
            >
                <slot></slot>
            </a>
        `},"render")});function FL(e,r){return e.entry.entryType===ct.Root?!1:e.entry.entryType===ct.Page||M.jsonEquals(r,e.fullUrlBreadcrumbs.slice(0,-1))?!0:M.jsonEquals(r?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}i(FL,"shouldShowTreeNodeInNav");const La=pn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:i(({cssVars:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Ie["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Ie["element-book-nav-hover-background-color"].value};
            color: ${Ie["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Ie["element-book-nav-active-background-color"].value};
            color: ${Ie["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${xn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Ie["element-book-nav-selected-background-color"].value};
            color: ${Ie["element-book-nav-selected-foreground-color"].value};
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
            color: ${Ie["element-book-accent-icon-color"].value};
        }
    `,"styles"),render({inputs:e}){const r=e.flattenedNodes.map(t=>{if(!FL(t,e.selectedPath))return;const n=k`
                --book-nav-internal-indent: ${t.fullUrlBreadcrumbs.length-1};
            `;return m`
                <li style=${n}>
                    <${xn.assign({router:e.router,route:{paths:[_t.Book,...t.fullUrlBreadcrumbs]}})}
                        class=${Gr({"title-row":!0,selected:e.selectedPath?M.jsonEquals(e.selectedPath,t.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Wr(Ja(t,ct.ElementExample),m`
                                    <${B.assign({icon:bm})}></${B}>
                                `)}
                            ${t.entry.title}
                        </div>
                    </${xn}>
                </li>
            `});return m`
            <${xn.assign({route:as,router:e.router})}>
                <slot>Book</slot>
            </${xn}>
            <ul>
                ${r}
            </ul>
        `}}),ki=pn()({tagName:"book-error",styles:k`
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
            `)}}),iu=pn()({tagName:"book-page-controls",events:{controlValueChange:Re()},hostClasses:{"book-page-controls-has-controls":i(({inputs:e})=>!!Object.keys(e.config).length,"book-page-controls-has-controls")},styles:i(({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Ie["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Qe}, ${cr} {
            height: 24px;
            max-width: 128px;
        }

        ${B}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,"styles"),render({inputs:e,dispatch:r,events:t}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===ge.Hidden)return"";const s=SL(e.currentValues[n],o,l=>{const u=M.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);r(new t.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...Object.fromEntries(Object.keys(e.config).map(f=>[f,e.currentValues[f]])),[n]:l}}))});return m`
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
                `}):""}});function SL(e,r,t){return Bi(r,ge.Hidden)?"":Bi(r,ge.Checkbox)?m`
            <${fe.assign({value:!!e})}
                ${U(fe.events.valueChange,n=>{t(n.detail)})}
            ></${fe}>
        `:Bi(r,ge.Color)?m`
            <${ol.assign({color:e})}
                style=${k`
                    ${ol.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${ol.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${U(ol.events.colorChange,n=>{t(n.detail)})}
            ></${ol}>
        `:Bi(r,ge.Text)?m`
            <${Qe.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${U(Qe.events.valueChange,n=>{t(n.detail)})}
            ></${Qe}>
        `:Bi(r,ge.Number)?m`
            <${Qe.assign({value:e,allowedInputs:/[\d.]/})}
                ${U(Qe.events.valueChange,n=>{t(n.detail)})}
            ></${Qe}>
        `:Bi(r,ge.Dropdown)?m`
            <${cr.assign({value:e,options:r.options.map(n=>({label:n,value:n}))})}
                ${U(cr.events.valueChange,n=>{t(n.detail)})}
            ></${cr}>
        `:Bi(r,ge.Custom)?r.content:m`
            <p class="error">
                ${r.controlType} controls are not implemented yet.
            </p>
        `}i(SL,"createControlInput");const T1=pn()({tagName:"book-breadcrumbs",styles:k`
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
                <${xn.assign({route:{hash:void 0,search:void 0,paths:[_t.Book,...s]},router:e.router})}>
                    ${t}
                </${xn}>
                ${l}
            `}):m`
                &nbsp;
            `},"render")}),Q0=pn()({tagName:"book-breadcrumbs-bar",styles:k`
        :host {
            border-bottom: 1px solid
                ${Ie["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Ie["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:r}){return m`
            ${Wr(!!e.currentSearch,m`
                    &nbsp;
                `,m`
                    <${T1.assign({currentRoute:e.currentRoute,router:e.router})}></${T1}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${U("input",async t=>{const n=t.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await ta({milliseconds:200}),n.value===o&&(n.value?r(new ed({paths:[_t.Search,encodeURIComponent(n.value)]})):r(new ed(as)))})}
            />
        `}}),P1=pn()({tagName:"book-entry-description",styles:k`
        :host {
            color: ${Ie["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Ie["element-book-page-foreground-color"].value};
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
            `)}}),I1=pn()({tagName:"book-page-wrapper",styles:k`
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

        ${xn} {
            display: inline-block;
        }
    `,render({inputs:e}){const r=e.isTopLevel?m`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:m`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,t=[_t.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?Iw(e.pageNode.entry.errors):void 0;n&&console.error(n);const o=e.blockNavigation?r:m`
                  <${xn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                      ${r}
                  </${xn}>
              `;return m`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${o}
                    ${n?m`
                              <${ki.assign({message:n.message})}></${ki}>
                          `:m`
                              <${P1.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${P1}>
                              <${iu.assign({config:e.pageNode.entry.controls,currentValues:qh(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${iu}>
                          `}
                </div>
            </div>
        `}}),uc=pn()({tagName:"book-element-example-title",styles:k`
        :host {
            display: flex;
            color: ${Ie["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const r=[_t.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return m`
            <${xn.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${xn}>
        `}}),N1=Symbol("unset-internal-state"),B1=pn()({tagName:"book-element-example-viewer",state(){return{isUnset:N1}},render({state:e,inputs:r,updateState:t}){try{if(r.elementExampleNode.entry.errors.length)throw Iw(r.elementExampleNode.entry.errors);if(!r.elementExampleNode.entry.render||typeof r.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${r.elementExampleNode.entry.title}': render is not a function`);e.isUnset===N1&&t({isUnset:void 0,...r.elementExampleNode.entry.state?.()});const n=r.elementExampleNode.entry.render({state:e,updateState:t,controls:r.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return m`
                ${Wr(!!r.elementExampleNode.entry.styles,m`
                        <style>
                            ${r.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",nt(n)),console.error(n),m`
                <${ki.assign({message:`${r.elementExampleNode.entry.title} failed: ${nt(n)}`})}></${ki}>
            `}},options:{allowPolymorphicState:!0}}),O1=pn()({tagName:"book-element-example-wrapper",styles:k`
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
            color: ${Ie["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${uc} {
            color: ${Ie["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return m`
            <div class="individual-example-wrapper">
                <${uc.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${uc}>
                <${B1.assign(e)}></${B1}>
            </div>
        `}}),ML={milliseconds:10};let yl;const fd=new Map,zi=new Map;function TL(){return yl||(yl=new IntersectionObserver(e=>{for(const r of e){const t=r.target,n=fd.get(t);if(n)if(r.isIntersecting){if(!zi.has(t)){const o=globalThis.setTimeout(()=>{zi.delete(t),n(),yl?.unobserve(t),fd.delete(t)},ns(ML,{milliseconds:!0}).milliseconds);zi.set(t,o)}}else{const o=zi.get(t);o&&(clearTimeout(o),zi.delete(t))}}},{rootMargin:"100px"})),yl}i(TL,"getSharedObserver");function R1(e){const r=zi.get(e);r&&(clearTimeout(r),zi.delete(e)),fd.delete(e),yl?.unobserve(e)}i(R1,"unobserveElement");const cc=pn()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:k`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&R1(e.placeholderElement)},render({inputs:e,state:r,updateState:t}){return r.hasRendered?e.content:m`
            <div
                class="placeholder"
                ${ua(n=>{r.placeholderElement&&R1(r.placeholderElement),t({placeholderElement:n}),fd.set(n,()=>{t({hasRendered:!0})}),TL().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function o4(e,r,t,n){const o=Eg(t,n),a=[];if(o){const s=o4(e,r,o,n);s&&a.push(s)}if(Ja(t,ct.Page)&&!e.includes(t)){const s=qh(r,t.fullUrlBreadcrumbs);a.push({config:t.entry.controls,current:s,breadcrumbs:qe(s,()=>t.fullUrlBreadcrumbs)})}return a.reduce((s,l)=>({config:{...s.config,...l.config},current:{...s.current,...l.current},breadcrumbs:{...s.breadcrumbs,...l.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}i(o4,"getFlattenedControlsFromHiddenParents");function PL({blockNavigation:e,currentNodes:r,isTopLevel:t,router:n,isSearching:o,controls:a,originalTree:s}){if(!r.length&&o)return[m`
                No results
            `];const l=M.isLengthAtLeast(r,1)?o4(r,a,r[0],s):void 0,u=l&&Object.values(l.config).length&&M.isLengthAtLeast(r,1)?m`
                  <${iu.assign({config:l.config,currentValues:l.current,fullUrlBreadcrumbs:l.breadcrumbs})}></${iu}>
              `:ee,f=IN(r,g=>g.fullUrlBreadcrumbs.join(">"),g=>{if(Ja(g,ct.Page))return m`
                    <${I1.assign({blockNavigation:e,isTopLevel:t,pageNode:g,controls:a,router:n})}
                        class="block-entry"
                    ></${I1}>
                `;if(Ja(g,ct.ElementExample)){const h=qh(a,g.fullUrlBreadcrumbs.slice(0,-1)),p=m`
                    <${O1.assign({blockNavigation:e,elementExampleNode:g,currentPageControls:h,router:n})}></${O1}>
                `;return m`
                    <${cc.assign({content:p})}
                        class="inline-entry ${Gr({"block-entry":g.entry.isVertical})}"
                    ></${cc}>
                `}else{if(Ja(g,ct.Root))return ee;{const h=m`
                    <${ki.assign({message:`Unknown entry type for rendering: '${g.entry.entryType}'`})}></${ki}>
                `;return m`
                    <${cc.assign({content:h})}
                        class="block-entry"
                    ></${cc}>
                `}}});return[u,f]}i(PL,"createNodeTemplates");const ja=pn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:k`
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

        ${Q0} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${_s["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:Re()},render:i(({inputs:e,dispatch:r,events:t,state:n,updateState:o})=>{const a=e5(e.currentRoute.paths),s=PL({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return m`
            <${Q0.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${Q0}>

            ${Wr(e.showLoading,m`
                    <div
                        ${ua(()=>{r(new t.loadingRender(!0))})}
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
                        ${ua(l=>{o({lastElement:l})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot></slot>
                `)}
        `},"render")});function IL(e,r,t){const n=L1(e,r);return n.length?n:(t(as),L1(e,as.paths))}i(IL,"getCurrentNodes");function L1(e,r){return e.filter(t=>F8({searchFor:r.slice(1),searchIn:t.fullUrlBreadcrumbs}))}i(L1,"filterNodes");const dc=Jn()({tagName:"element-book-app",state(){return{currentRoute:as,router:void 0,loading:!0,colors:{config:void 0,theme:Ty(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:Re()},slotNames:["footer","navHeader"],styles:k`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Ie["element-book-page-background-color"].value};
            color: ${Ie["element-book-page-foreground-color"].value};
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

        ${ja} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${La} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:r}){e.router&&(e.router.destroy(),r({router:void 0}))},render:i(({state:e,inputs:r,host:t,updateState:n,dispatch:o,events:a,slotNames:s})=>{r._debug&&console.info("rendering element-book app");function l(h){return{...e.currentRoute,...h}}i(l,"mergeRoutes");function u(h){const p=l(h);return!M.jsonEquals(e.currentRoute,p)}i(u,"areRoutesNew");function f(h){r.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,h].filter(M.isTruthy).join(" - "))}i(f,"updateWindowTitle");function g(h){if(!u(h))return;const p=l(h);e.router?e.router.setRoute(p):n({currentRoute:{...e.currentRoute,...p}}),r.elementBookRoutePaths&&!M.jsonEquals(r.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(p.paths))}i(g,"updateRoutes");try{if(r.elementBookRoutePaths&&!M.jsonEquals(r.elementBookRoutePaths,e.currentRoute.paths)&&g({paths:r.elementBookRoutePaths}),r.internalRouterConfig?.useInternalRouter&&!e.router){const A=$B(r.internalRouterConfig.basePath);n({router:A}),A.listen(!0,N=>{n({currentRoute:N})})}else!r.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const h={themeColor:r.themeColor};if(!M.jsonEquals(h,e.colors.config)){const A=Ty(h);n({colors:{config:h,theme:A}}),uC(t,A)}const p=r._debug??!1,b=N8({entries:r.pages,debug:p});(!e.treeBasedControls||e.treeBasedControls.pages!==r.pages||e.treeBasedControls.lastGlobalInputs!==r.globalValues)&&(r._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:r.pages,lastGlobalInputs:r.globalValues??{},controls:Qw(b.tree,{children:e.treeBasedControls?.controls.children,controls:r.globalValues})}}));const v=e5(e.currentRoute.paths),C=(v?aB({flattenedNodes:b.flattenedNodes,searchQuery:v}):void 0)??IL(b.flattenedNodes,e.currentRoute.paths,g);f(C[0]?.entry.title);const E=e.treeBasedControls?.controls;return E?(r._debug&&console.info({currentControls:E}),m`
                <div
                    class="root"
                    ${U(ed,A=>{const N=A.detail;if(!u(N))return;if(n({loading:!0}),g(N),!(t.shadowRoot.querySelector(La.tagName)instanceof La))throw new TypeError(`Failed to find child '${La.tagName}'`)})}
                    ${U(iu.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const N=O8(E,A.detail.fullUrlBreadcrumbs,A.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:N}})})}
                >
                    ${r.blockNavigation?ee:m`
                              <${La.assign({flattenedNodes:b.flattenedNodes,router:e.router,selectedPath:v?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${s.navHeader}></slot>
                              </${La}>
                          `}
                    <${ja.assign({blockNavigation:!!r.blockNavigation,controls:E,currentNodes:C,currentRoute:e.currentRoute,debug:p,originalTree:b.tree,router:e.router,showLoading:e.loading})}
                        ${U(ja.events.loadingRender,async A=>{await Py();const N=t.shadowRoot.querySelector(ja.tagName);N?N.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${ja.tagName}' for scrolling.`),await Py(),n({loading:!A.detail})})}
                    >
                        <slot name=${s.footer}></slot>
                    </${ja}>
                </div>
            `):m`
                    <${ki.assign({message:"Failed to generate page controls."})}></${ki}>
                `}catch(h){return console.error(h),m`
                <p class="error">${nt(h)}</p>
            `}},"render")}),hr=xe({title:"Elements",parent:void 0}),Rm=xe({title:"Styles",parent:void 0}),Af=xe({title:"Util",parent:void 0}),Ff=xe({title:"Icons",controls:{"Stroke Color":{controlType:ge.Color,initValue:""},"Fill Color":{controlType:ge.Color,initValue:""},"Stroke Width":{controlType:ge.Number,initValue:1.5}},parent:void 0}),NL=DL({parent:Rm,theme:S,title:"Vira Theme",hideInverseColors:!0,overrides:[DB],hideCopyCode:!0}),BL=xe({title:Qt.name,parent:Af,descriptionParagraphs:["Wraps an existing icon with specific colors to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){e({title:"stroke color",styles:k`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Qt(fr,{"vira-icon-stroke-color":"red"});return m`
                    <${B.assign({icon:fr})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"fill color",styles:k`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Qt($s,{"vira-icon-fill-color":"gold","vira-icon-stroke-color":"orange"});return m`
                    <${B.assign({icon:$s})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"stroke width",styles:k`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Qt(Ka,{"vira-icon-stroke-color":"green","vira-icon-stroke-width":"3px"});return m`
                    <${B.assign({icon:Ka})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"with CSS var values",styles:k`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Qt(Ka,{"vira-icon-stroke-color":`${R["vira-form-error-color"].value}`}),t=Qt(Ka,{"vira-icon-stroke-color":`${R["vira-form-success-color"].value}`});return m`
                    <${B.assign({icon:r})}></${B}>
                    <${B.assign({icon:t})}></${B}>
                `}}),e({title:"multiple icons with different colors",styles:k`
                :host {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
            `,render(){const r=Qt(fr,{"vira-icon-stroke-color":"red"}),t=Qt(fr,{"vira-icon-stroke-color":"dodgerblue"}),n=Qt(fr,{"vira-icon-stroke-color":"green"}),o=Qt(fr,{"vira-icon-stroke-color":"purple"});return m`
                    <${B.assign({icon:r})}></${B}>
                    <${B.assign({icon:t})}></${B}>
                    <${B.assign({icon:n})}></${B}>
                    <${B.assign({icon:o})}></${B}>
                `}})}}),OL=[{title:"smaller",size:16,icon:fr},{title:"larger",size:48,icon:$s}],RL=xe({title:ih.name,parent:Af,descriptionParagraphs:["Wraps an existing icon with explicit dimensions to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){OL.forEach(r=>{e({title:r.title,styles:k`
                    :host {
                        display: flex;
                        gap: 16px;
                        align-items: center;
                    }
                `,render(){const t=ih(r.icon,r.size);return m`
                        <${B.assign({icon:r.icon})}></${B}>
                        <span>→</span>
                        <${B.assign({icon:t})}></${B}>
                    `}})})}}),i4={async element1(){return await ta({seconds:2}),(await Ol(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-gn3xomjo.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await ta({seconds:2}),(await Ol(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-D2PMvObN.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},j1=Jn()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:t4(i4)}},render({state:e,inputs:r}){return n4(e.dynamicElements,{key:r.numberValue===1?"element1":r.numberValue===2?"element2":"errorElement",error(t){return m`
                    <${Qi}>
                        ${ga("Failed to import element",nt(t))}
                    </${Qi}>
                `},loading(){return m`
                    <${B.assign({icon:bi})}></${B}>
                `},ready(t){if(t.element1)return m`
                        <${t.element1}></${t.element1}>
                    `;if(t.element2)return m`
                        <${t.element2.assign({userName:"John"})}></${t.element2}>
                    `;Er.never("The error element will always error")}})}}),U1=Jn()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:t4(i4)}},render({state:e,inputs:r}){return e.dynamicElements.update(r.numberValue===1?"element1":r.numberValue===2?"element2":"errorElement"),n4(e.dynamicElements,{error(t){return m`
                    <${Qi}>
                        ${ga("Failed to import element",nt(t))}
                    </${Qi}>
                `},loading(){return m`
                    <${B.assign({icon:bi})}></${B}>
                `},ready(t){if(t.element1)return m`
                        <${t.element1}></${t.element1}>
                    `;if(t.element2)return m`
                        <${t.element2.assign({userName:"John"})}></${t.element2}>
                    `;Er.never("The error element will always error")}})}}),_1=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],LL=xe({parent:Af,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:k`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:r,updateState:t}){return m`
                    <${cr.assign({value:String(r.value),options:_1})}
                        ${U(cr.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);t({value:o})})}
                    ></${cr}>
                    <${j1.assign({numberValue:r.value})}></${j1}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:k`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:r,updateState:t}){return m`
                    <${cr.assign({value:String(r.value),options:_1})}
                        ${U(cr.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);t({value:o})})}
                    ></${cr}>
                    <${U1.assign({numberValue:r.value})}></${U1}>
                `}})}}),jL=[{title:"unselected",content:"my label",inputs:{selected:!1}},{title:"selected",content:"my label",inputs:{selected:!0}},{title:"with custom child",content:"custom child",inputs:{selected:!0},customTemplate:m`
            <b>This is custom</b>
        `},{title:"constrained width",content:"has more text than is possible to fit",customStyle:k`
            :host {
                max-width: 100px;
            }
        `,inputs:{selected:!0}},{title:"stretched width",content:"wide",customStyle:k`
            ${li} {
                width: 400px;
            }
        `,inputs:{selected:!0}},{title:"disabled",content:"my label",inputs:{selected:!0,disabled:!0}},{title:"no default pointer styles",content:"my label",inputs:{selected:!0,disablePointerStyles:!0}},{title:"icon override",content:"my label",inputs:{selected:!1,iconOverride:Qt(gf,{"vira-icon-stroke-color":"blue"})}},{title:"with ViraLink content",customStyle:k`
            ${Ft} {
                text-decoration: none;
            }
        `,content:m`
            <${Ft.assign({link:{url:"https://example.com",newTab:!0},disableLinkStyles:!0})}>
                link label
            </${Ft}>
        `,inputs:{selected:!1}}],UL=xe({title:li.tagName,parent:hr,defineExamples({defineExample:e}){jL.forEach(r=>{e({title:r.title,styles:r.customStyle,render(){return m`
                        <${li.assign(r.inputs)}>${r.content}</${li}>
                    `}})})}}),wl=[{content:"one"},{content:"two"},{content:"three"},{content:"four"},{content:"five"},{content:"six"}],z1={content:m`
        <div
            style=${k`
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `}
        >
            This menu item is much longer than the others
        </div>
    `},_L=[{title:"basic"},{title:"rounded",inputs:{menuCornerStyle:fm.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"inside focus",inputs:{useInsideFocus:!0}},{title:"long item",menuItems:[...wl,z1]},{title:"restricted long item",inputs:{horizontalAnchor:Xi.Both},menuItems:[...wl,z1]},{title:"ViraLink URL item",menuItems:[...wl,{content:m`
                    <${Ft.assign({link:{url:"https://www.wikipedia.org",newTab:!0},disableLinkStyles:!0})}>
                        Wikipedia link
                    </${Ft}>
                `}]},{title:"ViraLink route item",menuItems:[...wl,{content:m`
                    <${Ft.assign({route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(e,r){return console.info(e,r),!1}}},disableLinkStyles:!0})}>
                        Route link
                    </${Ft}>
                `}]}],zL=xe({parent:hr,title:Wi.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){_L.forEach(r=>{e({title:r.title,styles:k`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){const t=r.menuItems||wl;return m`
                        <${Wi.assign({popUpOffset:{vertical:-1},...r.inputs})}>
                            <div class="trigger" slot=${Wi.slotNames.trigger}>
                                Trigger Menu
                            </div>
                            ${hm(t)}
                        </${Wi}>
                    `}})})}}),qL=[{title:"basic",items:[{content:"one"},{content:"two"},{content:"three"}]},{title:"with selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three"}]},{title:"with multi selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three",selected:!0}]},{title:"with disabled item",items:[{content:"one"},{content:"two",disabled:!0},{content:"three"}]}],VL=xe({parent:hr,title:Ji.tagName,defineExamples({defineExample:e}){qL.forEach(r=>{e({title:r.title,render(){return m`
                        <${Ji.assign({...r.menuInputs})}>
                            ${r.items.map(t=>m`
                                    <${li.assign({selected:t.selected,disabled:t.disabled,disablePointerStyles:t.disablePointerStyles})}>
                                        ${t.content}
                                    </${li}>
                                `)}
                        </${Ji}>
                    `}})})}}),WL=xe({parent:hr,title:me.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:k`
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
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Xi.Right})}>
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
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Xi.Left})}>
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
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Xi.Right})}>
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
                `}})}}),KL=[{title:"menu shadow",styles:rd.menuShadow},{title:"modal",styles:rd.modal}],HL=xe({parent:Rm,title:"Shadows",defineExamples({defineExample:e}){KL.forEach(r=>{e({title:r.title,styles:k`
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
                    `}})})}}),GL=xe({parent:hr,title:kr.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:ge.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return m`
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
                `}})}}),ZL=[{label:"basic",extraInputs:{}},{label:"with 24px icon",extraInputs:{icon:nd}},{label:"with 16px icon",extraInputs:{icon:td}},{label:"only 24px icon",extraInputs:{icon:nd,text:""}},{label:"only 16px icon",extraInputs:{icon:td,text:""}},{label:"disabled",extraInputs:{isDisabled:!0}},{label:"menu caret",extraInputs:{showMenuCaret:!0}}],YL=k`
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
`,JL=xe({parent:hr,title:ye.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],defineExamples({defineExample:e}){cf.forEach(r=>{e({title:r,styles:YL,render(){return ZL.map(({label:t,extraInputs:n})=>m`
                            <h3>${t}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${da.map(o=>m`
                                                <th>${o}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${df.map(o=>m`
                                            <tr>
                                                <th>${o}</th>
                                                ${da.map(a=>m`
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
                `}})}}),XL=[{title:"basic"},{title:"success",inputs:{cardState:ah.Success}},{title:"error",inputs:{cardState:ah.Error}},{title:"long",content:m`
            <p
                style=${k`
                    ${dm}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],QL=xe({parent:hr,title:k0.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){XL.forEach(r=>{e({title:r.title,render(){return m`
                        <${k0.assign(r.inputs||{})}>
                            ${r.content||"Content"}
                        </${k0}>
                    `}})})}}),ej=xe({parent:hr,title:fe.tagName,controls:{Checked:{controlType:ge.Checkbox,initValue:!1},Disabled:{controlType:ge.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,hasError:!0})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
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
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,label:"label goes here",horizontal:!0})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:k`
                ${fe} {
                    max-width: 400px;
                }
            `,render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"fill when checked",state(){return{checked:!0}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,fillWhenChecked:!0})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"fill when unchecked",state(){return{checked:!1}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,fillWhenUnchecked:!0})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"both fills",state(){return{checked:!1}},render({state:r,updateState:t}){return m`
                    <${fe.assign({value:r.checked,fillWhenUnchecked:!0,fillWhenChecked:!0})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}})}}),rj=xe({title:Xr.tagName,parent:hr,descriptionParagraphs:["A collapsible card element with built-in header, caret icon, and card styling. Wraps ViraCollapsibleWrapper with opinionated styles."],defineExamples({defineExample:e}){e({title:"basic",styles:k`
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
                `}})}}),tj=xe({title:yt.tagName,parent:hr,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:k`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:r,state:t}){return new Array(3).fill(0).map((n,o)=>m`
                        <${yt.assign({expanded:!!t.expandedStates[o]})}
                            ${U(yt.events.expandChange,a=>{const s=[...t.expandedStates];s[o]=a.detail,r({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${yt.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${U("click",()=>{const a=[...t.showMoreStates];a[o]=!a[o],r({showMoreStates:a})})}
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
                            ${U(yt.events.expandChange,a=>{const s=[...t.expandedStates];s[o]=a.detail,r({expandedStates:s})})}
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
                                ${U("click",()=>{const a=[...t.showMoreStates];a[o]=!a[o],r({showMoreStates:a})})}
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
                    `)}})}}),$c=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Really really super duper long option",value:"4"},{label:"Really really super duper long option",value:"5"},{label:"Really really super duper long option",value:"6"},{label:"Really really super duper long option",value:"7"},{label:"Really really super duper long it just keeps going because it's so long option",value:"8"}],nj=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{value:"1",label:"1"},{value:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with disabled item",inputs:{selected:[],options:[...$c,{value:"42",label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:k`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:k`
            ${vl} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:fr}}],oj=xe({title:vl.tagName,parent:hr,controls:{Selected:{controlType:ge.Dropdown,initValue:"",options:["",...$c.map(e=>e.label)]},Prefix:{controlType:ge.Text,initValue:""},"Force State":{controlType:ge.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:ge.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:ge.Dropdown,initValue:"",options:["",...Object.keys(Jy)]},Disabled:{controlType:ge.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:ge.Text,initValue:"Select something"}},defineExamples({defineExample:e}){nj.forEach(r=>{e({title:r.title,state(){return{selected:r.inputs?.selected||[]}},styles:r.customStyle,render({state:t,updateState:n,controls:o}){const a={...r.inputs,placeholder:r.inputs&&"placeholder"in r.inputs?r.inputs.placeholder:o.Placeholder,options:r.inputs?.options||$c,selected:o.Selected?[$c.find(s=>s.label===o.Selected)?.value].filter(M.isTruthy):t.selected,selectionPrefix:o.Prefix||r.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":r.inputs?.isDisabled,icon:o.Icon?Jy[o.Icon]:r.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":r.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":r.inputs?.z_debug_forceOpenState};return m`
                        <${vl.assign(a)}
                            ${U(vl.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${vl}>
                    `}})})}}),ij=xe({parent:hr,title:Qi.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return m`
                    <${Qi}>Error Content</${Qi}>
                `}})}}),eg=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],aj=xe({parent:hr,title:Rt.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0,quantity:0}},styles:k`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Me.Text,label:"First Name",value:r.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:Me.Text,label:"Last Name",value:r.lastName,isRequired:!0},subscribe:{type:Me.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Me.Email,label:"Email Address",value:r.email},password:{type:Me.NewPassword,label:"Password",value:r.password},userRole:{type:Me.Select,label:"Role",options:eg,value:r.userRole,placeholder:"placeholder"},quantity:{type:Me.Number,label:"Quantity",value:r.quantity,min:0,max:100,step:2,placeholder:"Enter quantity"},disabledField:{type:Me.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:Me.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return m`
                    <${Rt.assign({fields:n})}
                        ${U(Rt.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonEmphasis:lr.Subtle,colorVariant:te.Neutral})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${Rt}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:k`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Me.Text,label:"First Name",value:r.firstName},lastName:{type:Me.Text,label:"Last Name",value:r.lastName}};return m`
                    <${Rt.assign({fields:n})}
                        ${U(Rt.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <${Qe.assign({value:"",label:"More stuff"})}></${Qe}>
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonEmphasis:lr.Subtle,colorVariant:te.Neutral})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${Rt}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:k`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${Rt} {
                    width: 400px;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Me.Text,label:"First Name",value:r.firstName},lastName:{type:Me.Text,label:"Last Name",value:r.lastName},subscribe:{type:Me.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Me.Email,label:"Email Address",value:r.email},password:{type:Me.NewPassword,label:"Password",value:r.password},userRole:{type:Me.Select,label:"Role",options:eg,value:r.userRole}};return m`
                    <${Rt.assign({fields:n})}
                        ${U(Rt.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonEmphasis:lr.Subtle,colorVariant:te.Neutral})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${Rt}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:k`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Me.Text,label:"First Name",value:r.firstName},lastName:{type:Me.Text,label:"Last Name",value:r.lastName},subscribe:{type:Me.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Me.Email,label:"Email Address",value:r.email},password:{type:Me.NewPassword,label:"Password",value:r.password},userRole:{type:Me.Select,label:"Role",options:eg,value:r.userRole}};return m`
                    <${Rt.assign({fields:n,isDisabled:!0})}
                        ${U(Rt.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonEmphasis:lr.Subtle,colorVariant:te.Neutral})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${Rt}>
                `}})}}),sj=xe({title:B.tagName,parent:hr,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return m`
                    <${B.assign({icon:fr})}></${B}>
                `}}),e({title:"using createColoredIcon",render(){return m`
                    <${B.assign({icon:Qt(fr,{"vira-icon-stroke-color":"red"})})}></${B}>
                `}}),e({title:"using createSizedIcon",render(){return m`
                    <${B.assign({icon:ih(fr,32)})}></${B}>
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
                    <${B.assign({icon:fr,fitContainer:!0})}></${B}>
                `}}),e({title:"colored fit container",styles:k`
                ${B} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return m`
                    <${B.assign({icon:Qt(fr,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${B}>
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
                `}})}}),lj=xe({title:Vo.tagName,parent:hr,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:k`
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
                    ${Vo} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${t.styles||k``}
                    }

                    ${t.allowReload?k`
                              ${Vo} {
                                  cursor: pointer;
                              }

                              ${Vo}:hover {
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
                        <${Vo.assign({...t.inputs,imageUrl:n.imageUrl})}
                            ${U("click",()=>{t.allowReload&&o({imageUrl:`${t.inputs.imageUrl}?di=${Po()}`})})}
                        >
                            ${t.loadingSlot?m`
                                      <div class="slot-wrapper" slot=${Vo.slotNames.loading}>
                                          ${t.loadingSlot}
                                      </div>
                                  `:ee}${t.errorSlot?m`
                                      <div class="slot-wrapper" slot=${Vo.slotNames.error}>
                                          ${t.errorSlot}
                                      </div>
                                  `:ee}
                        </${Vo}>
                    `}})})}}),uj=xe({title:Qe.tagName,parent:hr,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:ge.Color,initValue:R["vira-form-foreground-color"].default},"Placeholder color":{controlType:ge.Color,initValue:R["vira-form-placeholder-color"].default},"Border color":{controlType:ge.Color,initValue:R["vira-form-border-color"].default},"Focus color":{controlType:ge.Color,initValue:R["vira-form-focus-outline-color"].default},"Selection color":{controlType:ge.Color,initValue:R["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function r({styles:n,title:o,inputs:a}){e({title:o,styles:k`
                    ${n||k``}
                `,state(){return{value:a.value}},render({state:s,updateState:l,controls:u}){const f={[String(R["vira-form-foreground-color"].name)]:u["Text color"],[String(R["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(R["vira-form-border-color"].name)]:u["Border color"],[String(R["vira-form-focus-outline-color"].name)]:u["Focus color"],[String(R["vira-form-text-selection-color"].name)]:u["Selection color"]},g=qe(f,(p,b)=>b||"inherit"),h=Object.entries(g).map(([p,b])=>[p,b].join(": ")+";").join(`
`);return m`
                        <${Qe.assign({...a,value:s.value})}
                            style=${h}
                            ${U(Qe.events.valueChange,p=>{l({value:p.detail}),console.info("changed:",p.detail)})}
                        ></${Qe}>
                    `}})}i(r,"defineInputExample"),[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:fr}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:k`
                    ${Qe} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:fr}},{title:"taller height",styles:k`
                    ${Qe} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:fr}},{title:"shorter height",styles:k`
                    ${Qe} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:fr}},{title:"max width",styles:k`
                    ${Qe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:k`
                    ${Qe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Ki.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Ki.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:k`
                    ${Qe} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:k`
                    ${Qe} {
                        width: unset;
                    }
                `}].forEach(r)}}),cj=xe({title:Ft.tagName,parent:hr,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:ge.Color,initValue:""},"Hover color":{controlType:ge.Color,initValue:""},"Active color":{controlType:ge.Color,initValue:""}},defineExamples({defineExample:e}){function r({title:t,inputs:n}){e({title:t,render({controls:o}){const a=k`
                        ${R["vira-form-accent-primary-color"].name}: ${Oe(o["Hover color"]||"inherit")};
                        ${R["vira-form-accent-primary-active-color"].name}: ${Oe(o["Active color"]||"inherit")};
                        color: ${Oe(o["CSS Color"]||"inherit")};
                    `;return m`
                        <${Ft.assign(n)} style=${a}>My Link</${Ft}>
                    `}})}i(r,"defineLinkExample"),r({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),r({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(t,n){return console.info(t,n),!1}}}}}),r({title:"disabled link styles",inputs:{disableLinkStyles:!0,link:{newTab:!0,url:"https://www.wikipedia.org"}}})}}),dj=xe({title:Wo.tagName,parent:hr,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:r,updateState:t}){return m`
                    <button
                        ${U("click",()=>{t({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Wo.assign({open:r.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${U(Wo.events.modalClose,()=>{t({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Wo}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:k`
                ${Wo} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${R["vira-form-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:r,updateState:t}){return m`
                    <button
                        ${U("click",()=>{t({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Wo.assign({open:r.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${U(Wo.events.modalClose,()=>{t({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Wo}>
                `}})}}),kl=k`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,rg=m`
    <${St.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${St.slotNames.large}>Large</div>
        <div class="small" slot=${St.slotNames.small}>Small</div>
    </${St}>
`,Ha={max:120,min:25,default:80},q1=nr()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":fi(Ha.default)},state(){return{intervalId:void 0,increment:1}},styles:i(({cssVars:e})=>k`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t,cssVars:n}){globalThis.clearInterval(e.intervalId),r({intervalId:globalThis.setInterval(()=>{const o=kd.isNumber(VD(aC({onElement:t,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||Ha.default;(o>=Ha.max||o<=Ha.min)&&r({increment:e.increment*-1}),Jh({onElement:t,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:fi(o+e.increment)})},10)})},cleanup({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:void 0})},render(){return m`
            <slot></slot>
        `}}),V1=nr()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":fi(Ha.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:k`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${kl}

        .large {
            white-space: nowrap;
        }
    `,init({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:globalThis.setInterval(()=>{r({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:void 0})},render({state:e}){return m`
            <${St.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${St.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${St.slotNames.small}>Small</div>
            </${St}>
        `}}),fj=xe({title:St.tagName,parent:hr,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:k`
                ${kl}
            `,render(){return rg}}),e({title:"overflowing",styles:k`
                ${kl}

                ${St} {
                    max-width: 50px;
                }
            `,render(){return rg}}),e({title:"dynamic size",styles:k`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${kl}

                .wrapper {
                    width: ${Ha.max+10}px;
                }
            `,render(){return m`
                    <div class="wrapper">
                        <${q1}>
                            ${rg}
                        </${q1}>
                    </div>
                `}}),e({title:"dynamic slot",styles:k`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${kl}
            `,render(){return m`
                    <${V1}></${V1}>
                `}})}}),gj=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:k`
            :host {
                ${R["vira-form-filled-background-color"].name}: red;
                ${R["vira-form-accent-primary-color"].name}: black;
                ${ko.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${ko} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:k`
            :host {
                ${R["vira-form-filled-background-color"].name}: red;
                ${R["vira-form-accent-primary-color"].name}: yellow;
                ${ko.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${ko} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:k`
            :host {
                ${R["vira-form-filled-background-color"].name}: red;
                ${R["vira-form-accent-primary-color"].name}: yellow;
                ${ko.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${ko} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],hj=xe({parent:hr,title:ko.tagName,defineExamples({defineExample:e}){gj.forEach(r=>{e({title:r.title,styles:k`
                    ${r.styles||k``}
                `,render(){return m`
                        <${ko.assign({value:50,...r.inputs})}></${ko}>
                    `}})})}}),_r=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],pj=[{title:"basic",inputs:{options:_r}},{title:"with really long option",inputs:{options:[..._r,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:_r,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:_r,disabled:!0}},{title:"error",inputs:{options:_r,hasError:!0}},{title:"with icon",inputs:{options:_r,icon:fr}},{title:"custom width",inputs:{options:_r},styles:k`
            ${cr} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:_r,icon:fr},styles:k`
            ${cr} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:_r,icon:fr},styles:k`
            ${cr} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:_r,label:"Pick an option"}},{title:"with long label",inputs:{options:_r,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:_r,label:"Pick a really really really really long option"},styles:k`
            ${cr} {
                width: unset;
            }
        `},{title:"raw",inputs:{options:[..._r,{label:"really really really really really really really really long option",value:"something"}],rawSelect:!0,icon:fr}}],mj=xe({parent:hr,title:cr.tagName,defineExamples({defineExample:e}){pj.forEach(r=>{e({title:r.title,styles:k`
                    ${r.styles||k``}
                `,state(){return{selected:void 0}},render({state:t,updateState:n}){return m`
                        <${cr.assign({...r.inputs,value:t.selected??r.inputs.value})}
                            ${U(cr.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${cr}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return m`
                    <${cr.assign({options:_r,value:_r[0]?.value})}></${cr}>
                `}}),e({title:"force update",render(){return m`
                    <${W1}></${W1}>
                `}})}}),W1=nr()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:r}){e({intervalId:globalThis.setInterval(()=>{const t=_r.findIndex(o=>o.value===r.value),n=ur.isDefined(_r[(t+1)%_r.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return m`
            <${cr.assign({options:_r,value:e.value})}></${cr}>
        `}}),Mo=new cB({allowBare:!0,children:{tab1:{},tab2:{},tab3:{},tab4:{}}}),tg={createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(){return!1}};function bj(e){return{paths:e,search:{},hash:""}}i(bj,"createMockRoute");const Jo=[{label:"Dashboard",paths:Mo.paths.children.tab1,icon:fr},{label:"Notifications",paths:Mo.paths.children.tab2,icon:ym},{label:"Messages",paths:Mo.paths.children.tab3,icon:wm},{label:"Favorites",paths:Mo.paths.children.tab4,icon:$s}],vj=[{label:"Dashboard",paths:Mo.paths.children.tab1},{label:"Notifications",paths:Mo.paths.children.tab2},{label:"Messages",paths:Mo.paths.children.tab3},{label:"Favorites",paths:Mo.paths.children.tab4}],ng=bj(Mo.paths.children.tab2.fullPaths),yj=[{title:"basic",tabs:vj},{title:"with icons (vertical layout)",tabs:Jo},{title:"with icons (horizontal layout)",tabs:Jo,iconLayout:r4.Horizontal},{title:"plain color variant",tabs:Jo,colorVariant:te.Plain},{title:"bar direction: top",tabs:Jo,barDirection:oi.Top},{title:"bar direction: left",tabs:Jo,barDirection:oi.Left},{title:"bar direction: right",tabs:Jo,barDirection:oi.Right}],wj=xe({parent:hr,title:Li.tagName,descriptionParagraphs:["A tab bar element with route-based selection. Tabs render as links for proper SPA navigation."],defineExamples({defineExample:e}){yj.forEach(({title:r,...t})=>{e({title:r,render(){return m`
                        <${Li.assign({router:tg,currentRoute:ng,...t})}></${Li}>
                    `}})}),e({title:"overflow into menu",styles:k`
                :host {
                    max-width: 200px;
                }
            `,render(){return m`
                    <${Li.assign({tabs:Jo,router:tg,currentRoute:ng})}></${Li}>
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
            `,render(){const r=[oi.Top,oi.Bottom,oi.Left,oi.Right],t=[te.Accent,te.Plain];return m`
                    ${t.map(n=>m`
                            <h4>${n} variant</h4>
                            <div class="grid">
                                ${r.map(o=>m`
                                        <span>${o}</span>
                                        <${Li.assign({tabs:Jo,router:tg,currentRoute:ng,barDirection:o,colorVariant:n})}></${Li}>
                                    `)}
                            </div>
                        `)}
                `}})}}),kj=[{label:"basic",isClickable:void 0},{label:"selectable",isClickable:{selected:!0}},{label:"cancellable",isClickable:{cancellable:!0}},{label:"disabled",disabled:!0,isClickable:{selected:!0}}],$j=xe({parent:hr,title:sl.tagName,descriptionParagraphs:["A tag element with selectable, cancellable, size, emphasis, and color variants."],defineExamples({defineExample:e}){cf.forEach(r=>{e({title:r,styles:k`
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
                `,state(){return{clicked:{}}},render({state:t,updateState:n}){return kj.map(({label:o,...a})=>m`
                            <h3>${o}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${da.map(s=>m`
                                                <th>${s}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${df.map(s=>m`
                                            <tr>
                                                <th>${s}</th>
                                                ${da.map(l=>{const u=[o,s,l].join("-"),f=M.isBoolean(a.isClickable?.selected)?{selected:!t.clicked[u]}:a.isClickable,g=m`
                                                        <${sl.assign({text:"Label",...a,size:r,emphasis:s,color:l,isClickable:f})}
                                                            class=${Gr({cancelled:!!a.isClickable?.cancellable&&!!t.clicked[u]})}
                                                            ${U(sl.events.cancel,()=>{n({clicked:{...t.clicked,[u]:!0}})})}
                                                            ${U(sl.events.toggle,h=>{n({clicked:{...t.clicked,[u]:!h.detail}})})}
                                                        ></${sl}>
                                                    `;return m`
                                                        <td>${g}</td>
                                                    `})}
                                            </tr>
                                        `)}
                                </tbody>
                            </table>
                        `)}})})}});function Lm(e,r){is(e).forEach(t=>{r({title:t.name,styles:k`
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
                    ${y["vira-icon-fill-color"].name}: ${Oe(n["Fill Color"]||"inherit")};
                    ${y["vira-icon-stroke-color"].name}: ${Oe(n["Stroke Color"]||"inherit")};
                    ${y["vira-icon-stroke-width"].name}: ${Oe(n["Stroke Width"]?fi(n["Stroke Width"]):"inherit")};
                `;return m`
                    <button>
                        <${B.assign({icon:t})}
                            style=${o}
                        ></${B}>
                    </button>
                `}})})}i(Lm,"defineIconExamples");const xj=xe({title:"16px Icons",parent:Ff,defineExamples({defineExample:e}){Lm(dO,e)}}),Dj=xe({title:"24px Icons",parent:Ff,defineExamples({defineExample:e}){Lm(cO,e)}}),Cj=xe({title:"Feather Icons",parent:Ff,defineExamples({defineExample:e}){Lm(bl,e)}}),Ej=[hr,Ff,Rm,Af],Aj=[GL,JL,QL,ej,rj,tj,oj,ij,aj,sj,lj,uj,cj,UL,VL,zL,dj,fj,WL,hj,mj,wj,$j].sort((e,r)=>e.title.localeCompare(r.title)),Fj=[...Aj,BL,RL,LL,Cj,xj,Dj,HL,...NL],Sj=[...Ej,...Fj];Jn()({tagName:"vira-book-app",styles:k`
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
            <${dc.assign({internalRouterConfig:{basePath:lm("vira"),useInternalRouter:!0},pages:Sj,themeColor:"#33ccff"})}>
                <h1 slot=${dc.slotNames.navHeader}>Vira</h1>
            </${dc}>
        `}});export{Jn as d,m as h};
