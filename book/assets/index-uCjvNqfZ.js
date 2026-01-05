(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var qt;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(qt||(qt={}));function U0(e,t=r=>r){const r=new Map;return e.filter(n=>{const i=t(n);return r.get(i)?!1:(r.set(i,n),!0)})}class z0{diff(t,r,n={}){let i;typeof n=="function"?(i=n,n={}):"callback"in n&&(i=n.callback);const o=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(o,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,u,n,i)}diffWithOptionsObj(t,r,n,i){var o;const s=A=>{if(A=this.postProcess(A,n),i){setTimeout(function(){i(A)},0);return}else return A},a=r.length,u=t.length;let l=1,c=a+u;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));const f=(o=n.timeout)!==null&&o!==void 0?o:1/0,d=Date.now()+f,m=[{oldPos:-1,lastComponent:void 0}];let h=this.extractCommon(m[0],r,t,0,n);if(m[0].oldPos+1>=u&&h+1>=a)return s(this.buildValues(m[0].lastComponent,r,t));let p=-1/0,$=1/0;const v=()=>{for(let A=Math.max(p,-l);A<=Math.min($,l);A+=2){let S;const N=m[A-1],I=m[A+1];N&&(m[A-1]=void 0);let te=!1;if(I){const re=I.oldPos-A;te=I&&0<=re&&re<a}const le=N&&N.oldPos+1<u;if(!te&&!le){m[A]=void 0;continue}if(!le||te&&N.oldPos<I.oldPos?S=this.addToPath(I,!0,!1,0,n):S=this.addToPath(N,!1,!0,1,n),h=this.extractCommon(S,r,t,A,n),S.oldPos+1>=u&&h+1>=a)return s(this.buildValues(S.lastComponent,r,t))||!0;m[A]=S,S.oldPos+1>=u&&($=Math.min($,A-1)),h+1>=a&&(p=Math.max(p,A+1))}l++};if(i)(function A(){setTimeout(function(){if(l>c||Date.now()>d)return i(void 0);v()||A()},0)})();else for(;l<=c&&Date.now()<=d;){const A=v();if(A)return A}}addToPath(t,r,n,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,i,o){const s=r.length,a=n.length;let u=t.oldPos,l=u-i,c=0;for(;l+1<s&&u+1<a&&this.equals(n[u+1],r[l+1],o);)l++,u++,c++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!o.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let a=0,u=0,l=0;for(;a<s;a++){const c=i[a];if(c.removed)c.value=this.join(n.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let f=r.slice(u,u+c.count);f=f.map(function(d,m){const h=n[l+m];return h.length>d.length?h:d}),c.value=this.join(f)}else c.value=this.join(r.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return i}}function qh(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function Kh(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function Pd(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function Id(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function ba(e,t){return Pd(e,t,"")}function Qu(e,t){return Id(e,t,"")}function Gh(e,t){return t.slice(0,t4(e,t))}function t4(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const i=Array(n);let o=0;i[0]=0;for(let s=1;s<n;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=r;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function wa(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function Fi(e){const t=e.match(/^\s*/);return t?t[0]:""}const Vl="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",r4=new RegExp(`[${Vl}]+|\\s+|[^${Vl}]`,"ug");class n4 extends z0{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=Array.from(s.segment(t),a=>a.segment)}else n=t.match(r4)||[];const i=[];let o=null;return n.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&Zh(n,o,i,s),n=s,i=null,o=null)}),(i||o)&&Zh(n,o,i,null),t}}const i4=new n4;function o4(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?u4(e,t,r):i4.diff(e,t,r)}function Zh(e,t,r,n){if(t&&r){const i=Fi(t.value),o=wa(t.value),s=Fi(r.value),a=wa(r.value);if(e){const u=qh(i,s);e.value=Id(e.value,s,u),t.value=ba(t.value,u),r.value=ba(r.value,u)}if(n){const u=Kh(o,a);n.value=Pd(n.value,a,u),t.value=Qu(t.value,u),r.value=Qu(r.value,u)}}else if(r){if(e){const i=Fi(r.value);r.value=r.value.substring(i.length)}if(n){const i=Fi(n.value);n.value=n.value.substring(i.length)}}else if(e&&n){const i=Fi(n.value),o=Fi(t.value),s=wa(t.value),a=qh(i,o);t.value=ba(t.value,a);const u=Kh(ba(i,a),s);t.value=Qu(t.value,u),n.value=Pd(n.value,i,u),e.value=Id(e.value,i,i.slice(0,i.length-u.length))}else if(n){const i=Fi(n.value),o=wa(t.value),s=Gh(o,i);t.value=Qu(t.value,s)}else if(e){const i=wa(e.value),o=Fi(t.value),s=Gh(i,o);t.value=ba(t.value,s)}}class s4 extends z0{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Vl}]+|[^\\S\\n\\r]+|[^${Vl}]`,"ug");return t.match(r)||[]}}const a4=new s4;function u4(e,t,r){return a4.diff(e,t,r)}class l4 extends z0{constructor(){super(...arguments),this.tokenize=d4}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const c4=new l4;function f4(e,t,r){return c4.diff(e,t,r)}function d4(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let i=0;i<n.length;i++){const o=n[i];i%2&&!t.newlineIsToken?r[r.length-1]+=o:r.push(o)}return r}function Hh(e){return cy(e,new Map)}function cy(e,t){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const r={};return t.set(e,r),Object.entries(e).sort((n,i)=>n[0].localeCompare(i[0])).forEach(([n,i])=>{const o=cy(i,t);r[n]=o}),r}else return e}var m4=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,h4=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,p4=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Af={Space_Separator:m4,ID_Start:h4,ID_Continue:p4},ft={isSpaceSeparator(e){return typeof e=="string"&&Af.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Af.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Af.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let Od,cr,si,Wl,Vi,kn,Pt,V0,za;var g4=function(t,r){Od=String(t),cr="start",si=[],Wl=0,Vi=1,kn=0,Pt=void 0,V0=void 0,za=void 0;do Pt=y4(),$4[cr]();while(Pt.type!=="eof");return typeof r=="function"?Bd({"":za},"",r):za};function Bd(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const o=String(i),s=Bd(n,o,r);s===void 0?delete n[o]:Object.defineProperty(n,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const o=Bd(n,i,r);o===void 0?delete n[i]:Object.defineProperty(n,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let oe,ee,Sa,ti,de;function y4(){for(oe="default",ee="",Sa=!1,ti=1;;){de=mi();const e=fy[oe]();if(e)return e}}function mi(){if(Od[Wl])return String.fromCodePoint(Od.codePointAt(Wl))}function T(){const e=mi();return e===`
`?(Vi++,kn=0):e?kn+=e.length:kn++,e&&(Wl+=e.length),e}const fy={default(){switch(de){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":T();return;case"/":T(),oe="comment";return;case void 0:return T(),Ve("eof")}if(ft.isSpaceSeparator(de)){T();return}return fy[cr]()},comment(){switch(de){case"*":T(),oe="multiLineComment";return;case"/":T(),oe="singleLineComment";return}throw We(T())},multiLineComment(){switch(de){case"*":T(),oe="multiLineCommentAsterisk";return;case void 0:throw We(T())}T()},multiLineCommentAsterisk(){switch(de){case"*":T();return;case"/":T(),oe="default";return;case void 0:throw We(T())}T(),oe="multiLineComment"},singleLineComment(){switch(de){case`
`:case"\r":case"\u2028":case"\u2029":T(),oe="default";return;case void 0:return T(),Ve("eof")}T()},value(){switch(de){case"{":case"[":return Ve("punctuator",T());case"n":return T(),ao("ull"),Ve("null",null);case"t":return T(),ao("rue"),Ve("boolean",!0);case"f":return T(),ao("alse"),Ve("boolean",!1);case"-":case"+":T()==="-"&&(ti=-1),oe="sign";return;case".":ee=T(),oe="decimalPointLeading";return;case"0":ee=T(),oe="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":ee=T(),oe="decimalInteger";return;case"I":return T(),ao("nfinity"),Ve("numeric",1/0);case"N":return T(),ao("aN"),Ve("numeric",NaN);case'"':case"'":Sa=T()==='"',ee="",oe="string";return}throw We(T())},identifierNameStartEscape(){if(de!=="u")throw We(T());T();const e=Rd();switch(e){case"$":case"_":break;default:if(!ft.isIdStartChar(e))throw Yh();break}ee+=e,oe="identifierName"},identifierName(){switch(de){case"$":case"_":case"‌":case"‍":ee+=T();return;case"\\":T(),oe="identifierNameEscape";return}if(ft.isIdContinueChar(de)){ee+=T();return}return Ve("identifier",ee)},identifierNameEscape(){if(de!=="u")throw We(T());T();const e=Rd();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!ft.isIdContinueChar(e))throw Yh();break}ee+=e,oe="identifierName"},sign(){switch(de){case".":ee=T(),oe="decimalPointLeading";return;case"0":ee=T(),oe="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":ee=T(),oe="decimalInteger";return;case"I":return T(),ao("nfinity"),Ve("numeric",ti*(1/0));case"N":return T(),ao("aN"),Ve("numeric",NaN)}throw We(T())},zero(){switch(de){case".":ee+=T(),oe="decimalPoint";return;case"e":case"E":ee+=T(),oe="decimalExponent";return;case"x":case"X":ee+=T(),oe="hexadecimal";return}return Ve("numeric",ti*0)},decimalInteger(){switch(de){case".":ee+=T(),oe="decimalPoint";return;case"e":case"E":ee+=T(),oe="decimalExponent";return}if(ft.isDigit(de)){ee+=T();return}return Ve("numeric",ti*Number(ee))},decimalPointLeading(){if(ft.isDigit(de)){ee+=T(),oe="decimalFraction";return}throw We(T())},decimalPoint(){switch(de){case"e":case"E":ee+=T(),oe="decimalExponent";return}if(ft.isDigit(de)){ee+=T(),oe="decimalFraction";return}return Ve("numeric",ti*Number(ee))},decimalFraction(){switch(de){case"e":case"E":ee+=T(),oe="decimalExponent";return}if(ft.isDigit(de)){ee+=T();return}return Ve("numeric",ti*Number(ee))},decimalExponent(){switch(de){case"+":case"-":ee+=T(),oe="decimalExponentSign";return}if(ft.isDigit(de)){ee+=T(),oe="decimalExponentInteger";return}throw We(T())},decimalExponentSign(){if(ft.isDigit(de)){ee+=T(),oe="decimalExponentInteger";return}throw We(T())},decimalExponentInteger(){if(ft.isDigit(de)){ee+=T();return}return Ve("numeric",ti*Number(ee))},hexadecimal(){if(ft.isHexDigit(de)){ee+=T(),oe="hexadecimalInteger";return}throw We(T())},hexadecimalInteger(){if(ft.isHexDigit(de)){ee+=T();return}return Ve("numeric",ti*Number(ee))},string(){switch(de){case"\\":T(),ee+=b4();return;case'"':if(Sa)return T(),Ve("string",ee);ee+=T();return;case"'":if(!Sa)return T(),Ve("string",ee);ee+=T();return;case`
`:case"\r":throw We(T());case"\u2028":case"\u2029":v4(de);break;case void 0:throw We(T())}ee+=T()},start(){switch(de){case"{":case"[":return Ve("punctuator",T())}oe="value"},beforePropertyName(){switch(de){case"$":case"_":ee=T(),oe="identifierName";return;case"\\":T(),oe="identifierNameStartEscape";return;case"}":return Ve("punctuator",T());case'"':case"'":Sa=T()==='"',oe="string";return}if(ft.isIdStartChar(de)){ee+=T(),oe="identifierName";return}throw We(T())},afterPropertyName(){if(de===":")return Ve("punctuator",T());throw We(T())},beforePropertyValue(){oe="value"},afterPropertyValue(){switch(de){case",":case"}":return Ve("punctuator",T())}throw We(T())},beforeArrayValue(){if(de==="]")return Ve("punctuator",T());oe="value"},afterArrayValue(){switch(de){case",":case"]":return Ve("punctuator",T())}throw We(T())},end(){throw We(T())}};function Ve(e,t){return{type:e,value:t,line:Vi,column:kn}}function ao(e){for(const t of e){if(mi()!==t)throw We(T());T()}}function b4(){switch(mi()){case"b":return T(),"\b";case"f":return T(),"\f";case"n":return T(),`
`;case"r":return T(),"\r";case"t":return T(),"	";case"v":return T(),"\v";case"0":if(T(),ft.isDigit(mi()))throw We(T());return"\0";case"x":return T(),w4();case"u":return T(),Rd();case`
`:case"\u2028":case"\u2029":return T(),"";case"\r":return T(),mi()===`
`&&T(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw We(T());case void 0:throw We(T())}return T()}function w4(){let e="",t=mi();if(!ft.isHexDigit(t)||(e+=T(),t=mi(),!ft.isHexDigit(t)))throw We(T());return e+=T(),String.fromCodePoint(parseInt(e,16))}function Rd(){let e="",t=4;for(;t-- >0;){const r=mi();if(!ft.isHexDigit(r))throw We(T());e+=T()}return String.fromCodePoint(parseInt(e,16))}const $4={start(){if(Pt.type==="eof")throw uo();Ef()},beforePropertyName(){switch(Pt.type){case"identifier":case"string":V0=Pt.value,cr="afterPropertyName";return;case"punctuator":el();return;case"eof":throw uo()}},afterPropertyName(){if(Pt.type==="eof")throw uo();cr="beforePropertyValue"},beforePropertyValue(){if(Pt.type==="eof")throw uo();Ef()},beforeArrayValue(){if(Pt.type==="eof")throw uo();if(Pt.type==="punctuator"&&Pt.value==="]"){el();return}Ef()},afterPropertyValue(){if(Pt.type==="eof")throw uo();switch(Pt.value){case",":cr="beforePropertyName";return;case"}":el()}},afterArrayValue(){if(Pt.type==="eof")throw uo();switch(Pt.value){case",":cr="beforeArrayValue";return;case"]":el()}},end(){}};function Ef(){let e;switch(Pt.type){case"punctuator":switch(Pt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Pt.value;break}if(za===void 0)za=e;else{const t=si[si.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,V0,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")si.push(e),Array.isArray(e)?cr="beforeArrayValue":cr="beforePropertyName";else{const t=si[si.length-1];t==null?cr="end":Array.isArray(t)?cr="afterArrayValue":cr="afterPropertyValue"}}function el(){si.pop();const e=si[si.length-1];e==null?cr="end":Array.isArray(e)?cr="afterArrayValue":cr="afterPropertyValue"}function We(e){return ql(e===void 0?`JSON5: invalid end of input at ${Vi}:${kn}`:`JSON5: invalid character '${dy(e)}' at ${Vi}:${kn}`)}function uo(){return ql(`JSON5: invalid end of input at ${Vi}:${kn}`)}function Yh(){return kn-=5,ql(`JSON5: invalid identifier character at ${Vi}:${kn}`)}function v4(e){console.warn(`JSON5: '${dy(e)}' in strings is not valid ECMAScript; consider escaping`)}function dy(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function ql(e){const t=new SyntaxError(e);return t.lineNumber=Vi,t.columnNumber=kn,t}var D4=function(t,r,n){const i=[];let o="",s,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const p of r){let $;typeof p=="string"?$=p:(typeof p=="number"||p instanceof String||p instanceof Number)&&($=String(p)),$!==void 0&&s.indexOf($)<0&&s.push($)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c(p,$){let v=$[p];switch(v!=null&&(typeof v.toJSON5=="function"?v=v.toJSON5(p):typeof v.toJSON=="function"&&(v=v.toJSON(p))),a&&(v=a.call($,p,v)),v instanceof Number?v=Number(v):v instanceof String?v=String(v):v instanceof Boolean&&(v=v.valueOf()),v){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof v=="string")return f(v);if(typeof v=="number")return String(v);if(typeof v=="object")return Array.isArray(v)?h(v):d(v)}function f(p){const $={"'":.1,'"':.2},v={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let A="";for(let N=0;N<p.length;N++){const I=p[N];switch(I){case"'":case'"':$[I]++,A+=I;continue;case"\0":if(ft.isDigit(p[N+1])){A+="\\x00";continue}}if(v[I]){A+=v[I];continue}if(I<" "){let te=I.charCodeAt(0).toString(16);A+="\\x"+("00"+te).substring(te.length);continue}A+=I}const S=l||Object.keys($).reduce((N,I)=>$[N]<$[I]?N:I);return A=A.replace(new RegExp(S,"g"),v[S]),S+A+S}function d(p){if(i.indexOf(p)>=0)throw TypeError("Converting circular structure to JSON5");i.push(p);let $=o;o=o+u;let v=s||Object.keys(p),A=[];for(const N of v){const I=c(N,p);if(I!==void 0){let te=m(N)+":";u!==""&&(te+=" "),te+=I,A.push(te)}}let S;if(A.length===0)S="{}";else{let N;if(u==="")N=A.join(","),S="{"+N+"}";else{let I=`,
`+o;N=A.join(I),S=`{
`+o+N+`,
`+$+"}"}}return i.pop(),o=$,S}function m(p){if(p.length===0)return f(p);const $=String.fromCodePoint(p.codePointAt(0));if(!ft.isIdStartChar($))return f(p);for(let v=$.length;v<p.length;v++)if(!ft.isIdContinueChar(String.fromCodePoint(p.codePointAt(v))))return f(p);return p}function h(p){if(i.indexOf(p)>=0)throw TypeError("Converting circular structure to JSON5");i.push(p);let $=o;o=o+u;let v=[];for(let S=0;S<p.length;S++){const N=c(String(S),p);v.push(N!==void 0?N:"null")}let A;if(v.length===0)A="[]";else if(u==="")A="["+v.join(",")+"]";else{let S=`,
`+o,N=v.join(S);A=`[
`+o+N+`,
`+$+"]"}return i.pop(),o=$,A}};const x4={parse:g4,stringify:D4};var A4=x4;const my="__@@augment-vir-undefined-sentinel@@__",E4=new RegExp(`['"]${my}['"]`);function b(e,t){if(typeof e=="string")return e;try{return A4.stringify(e,(n,i)=>i===void 0?my:typeof i=="bigint"?Number(i):i,t||void 0).split(E4).join("undefined")}catch{return String(e)}}var C4=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Fn;(function(e){e.Node="node",e.Web="web"})(Fn||(Fn={}));function k4(){return C4?Fn.Node:Fn.Web}const hy=k4();function W0(e){return hy===e}function py(e){return e[hy]()}function F4(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",i=n?f4:o4,o=[r?"":`
`,b(t&&typeof t=="object"&&!Array.isArray(t)?Hh(t):t,4),`
`].join(""),s=[r?"":`
`,b(e&&typeof e=="object"&&!Array.isArray(e)?Hh(e):e,4),`
`].join(""),a=M4(n,i(o,s)),u=W0(Fn.Node);return[[u?ci.Green:""," +added (unexpected, added in actual)",u?ci.Red:""," -missing (expected, missing from actual)",u?ci.Reset:""].join(""),r?`

`:`
`,a].join("")}var ci;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(ci||(ci={}));var Kl;(function(e){e.Added="+",e.Removed="-"})(Kl||(Kl={}));function M4(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(i=>Jh(i,n)).join(`
`)).join(""):t.map(n=>Jh(void 0,n)).join("")}function Jh(e,t){if(e!=null&&!e)return"";const r=W0(Fn.Node),n=t.added?Kl.Added:t.removed?Kl.Removed:e==null?"":" ",i=t.added?ci.Green:t.removed?ci.Red:ci.Reset;return[r?i:"",n,e??t.value,ci.Reset].join("")}function et(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function S4(e){return et(e).filter(t=>isNaN(Number(t)))}function nn(e){return S4(e).map(r=>e[r])}const T4=[".",":",";",",","?","!"],N4=new RegExp(`[${T4.join("")}]+$`);function Xh(e){return e.replace(N4,"")}function jt(e){return e==null||e===""?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):b(e)}function Qs(...e){const t=e.map(o=>jt(o)).filter(o=>!!Xh(o)),r=t[t.length-1]?.endsWith("."),n=t.map(o=>Xh(jt(o)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function at(e){return e instanceof Error?e:new Error(jt(e))}function kc(e,t){const r=at(e),n=Qs(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var k;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(k||(k={}));var _;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(_||(_={}));_.ClientError,_.ServerError;k.Continue+"",_.Information,k.SwitchingProtocols+"",_.Information,k.Processing+"",_.Information,k.EarlyHints+"",_.Information,k.Ok+"",_.Success,k.Created+"",_.Success,k.Accepted+"",_.Success,k.NonAuthoritativeInformation+"",_.Success,k.NoContent+"",_.Success,k.ResetContent+"",_.Success,k.PartialContent+"",_.Success,k.MultiStatus+"",_.Success,k.AlreadyReported+"",_.Success,k.ImUsed+"",_.Success,k.MultipleChoices+"",_.Redirect,k.MovedPermanently+"",_.Redirect,k.Found+"",_.Redirect,k.SeeOther+"",_.Redirect,k.NotModified+"",_.Redirect,k.UseProxy+"",_.Redirect,k.Unused+"",_.Redirect,k.TemporaryRedirect+"",_.Redirect,k.PermanentRedirect+"",_.Redirect,k.BadRequest+"",_.ClientError,k.Unauthorized+"",_.ClientError,k.PaymentRequired+"",_.ClientError,k.Forbidden+"",_.ClientError,k.NotFound+"",_.ClientError,k.MethodNotAllowed+"",_.ClientError,k.NotAcceptable+"",_.ClientError,k.ProxyAuthenticationRequired+"",_.ClientError,k.RequestTimeout+"",_.ClientError,k.Conflict+"",_.ClientError,k.Gone+"",_.ClientError,k.LengthRequired+"",_.ClientError,k.PreconditionFailed+"",_.ClientError,k.PayloadTooLarge+"",_.ClientError,k.UriTooLong+"",_.ClientError,k.UnsupportedMediaType+"",_.ClientError,k.RangeNotSatisfiable+"",_.ClientError,k.ExpectationFailed+"",_.ClientError,k.ImATeapot+"",_.ClientError,k.MisdirectedRequest+"",_.ClientError,k.UnprocessableContent+"",_.ClientError,k.Locked+"",_.ClientError,k.FailedDependency+"",_.ClientError,k.TooEarly+"",_.ClientError,k.UpgradeRequired+"",_.ClientError,k.PreconditionRequired+"",_.ClientError,k.TooManyRequests+"",_.ClientError,k.RequestHeaderFieldsTooLarge+"",_.ClientError,k.UnavailableForLegalReasons+"",_.ClientError,k.InternalServerError+"",_.ServerError,k.NotImplemented+"",_.ServerError,k.BadGateway+"",_.ServerError,k.ServiceUnavailable+"",_.ServerError,k.GatewayTimeout+"",_.ServerError,k.HttpVersionNotSupported+"",_.ServerError,k.VariantAlsoNegotiates+"",_.ServerError,k.InsufficientStorage+"",_.ServerError,k.LoopDetected+"",_.ServerError,k.NotExtended+"",_.ServerError,k.NetworkAuthenticationRequired+"",_.ServerError;const Tl={[_.Information]:[k.Continue,k.SwitchingProtocols,k.Processing,k.EarlyHints],[_.Success]:[k.Ok,k.Created,k.Accepted,k.NonAuthoritativeInformation,k.NoContent,k.ResetContent,k.PartialContent,k.MultiStatus,k.AlreadyReported,k.ImUsed],[_.Redirect]:[k.MultipleChoices,k.MovedPermanently,k.Found,k.SeeOther,k.NotModified,k.UseProxy,k.Unused,k.TemporaryRedirect,k.PermanentRedirect],[_.ClientError]:[k.BadRequest,k.Unauthorized,k.PaymentRequired,k.Forbidden,k.NotFound,k.MethodNotAllowed,k.NotAcceptable,k.ProxyAuthenticationRequired,k.RequestTimeout,k.Conflict,k.Gone,k.LengthRequired,k.PreconditionFailed,k.PayloadTooLarge,k.UriTooLong,k.UnsupportedMediaType,k.RangeNotSatisfiable,k.ExpectationFailed,k.ImATeapot,k.MisdirectedRequest,k.UnprocessableContent,k.Locked,k.FailedDependency,k.TooEarly,k.UpgradeRequired,k.PreconditionRequired,k.TooManyRequests,k.RequestHeaderFieldsTooLarge,k.UnavailableForLegalReasons],[_.ServerError]:[k.InternalServerError,k.NotImplemented,k.BadGateway,k.ServiceUnavailable,k.GatewayTimeout,k.HttpVersionNotSupported,k.VariantAlsoNegotiates,k.InsufficientStorage,k.LoopDetected,k.NotExtended,k.NetworkAuthenticationRequired]};function q0({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Gl{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(at(n))}})}}class jo extends Error{}class P4 extends jo{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class I4 extends jo{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class O4 extends jo{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class ds extends jo{}class gy extends jo{constructor(t){super(`Invalid unit ${t}`)}}class er extends jo{}class Mi extends jo{constructor(){super("Zone is an abstract class")}}const L="numeric",Mn="short",_r="long",Zl={year:L,month:L,day:L},yy={year:L,month:Mn,day:L},B4={year:L,month:Mn,day:L,weekday:Mn},by={year:L,month:_r,day:L},wy={year:L,month:_r,day:L,weekday:_r},$y={hour:L,minute:L},vy={hour:L,minute:L,second:L},Dy={hour:L,minute:L,second:L,timeZoneName:Mn},xy={hour:L,minute:L,second:L,timeZoneName:_r},Ay={hour:L,minute:L,hourCycle:"h23"},Ey={hour:L,minute:L,second:L,hourCycle:"h23"},Cy={hour:L,minute:L,second:L,hourCycle:"h23",timeZoneName:Mn},ky={hour:L,minute:L,second:L,hourCycle:"h23",timeZoneName:_r},Fy={year:L,month:L,day:L,hour:L,minute:L},My={year:L,month:L,day:L,hour:L,minute:L,second:L},Sy={year:L,month:Mn,day:L,hour:L,minute:L},Ty={year:L,month:Mn,day:L,hour:L,minute:L,second:L},R4={year:L,month:Mn,day:L,weekday:Mn,hour:L,minute:L},Ny={year:L,month:_r,day:L,hour:L,minute:L,timeZoneName:Mn},Py={year:L,month:_r,day:L,hour:L,minute:L,second:L,timeZoneName:Mn},Iy={year:L,month:_r,day:L,weekday:_r,hour:L,minute:L,timeZoneName:_r},Oy={year:L,month:_r,day:L,weekday:_r,hour:L,minute:L,second:L,timeZoneName:_r};class Eu{get type(){throw new Mi}get name(){throw new Mi}get ianaName(){return this.name}get isUniversal(){throw new Mi}offsetName(t,r){throw new Mi}formatOffset(t,r){throw new Mi}offset(t){throw new Mi}equals(t){throw new Mi}get isValid(){throw new Mi}}let Cf=null;class Fc extends Eu{static get instance(){return Cf===null&&(Cf=new Fc),Cf}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Ky(t,r,n)}formatOffset(t,r){return Va(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Ld=new Map;function L4(e){let t=Ld.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Ld.set(e,t)),t}const j4={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function _4(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,o,s,a,u,l,c]=n;return[s,i,o,a,u,l,c]}function U4(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:o,value:s}=r[i],a=j4[o];o==="era"?n[a]=s:Y(a)||(n[a]=parseInt(s,10))}return n}const kf=new Map;class gi extends Eu{static create(t){let r=kf.get(t);return r===void 0&&kf.set(t,r=new gi(t)),r}static resetCache(){kf.clear(),Ld.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=gi.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Ky(t,r,n,this.name)}formatOffset(t,r){return Va(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=L4(this.name);let[i,o,s,a,u,l,c]=n.formatToParts?U4(n,r):_4(n,r);a==="BC"&&(i=-Math.abs(i)+1);const d=Sc({year:i,month:o,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let m=+r;const h=m%1e3;return m-=h>=0?h:1e3+h,(d-m)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Qh={};function z4(e,t={}){const r=JSON.stringify([e,t]);let n=Qh[r];return n||(n=new Intl.ListFormat(e,t),Qh[r]=n),n}const jd=new Map;function _d(e,t={}){const r=JSON.stringify([e,t]);let n=jd.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),jd.set(r,n)),n}const Ud=new Map;function V4(e,t={}){const r=JSON.stringify([e,t]);let n=Ud.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),Ud.set(r,n)),n}const zd=new Map;function W4(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let o=zd.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),zd.set(i,o)),o}let Ta=null;function q4(){return Ta||(Ta=new Intl.DateTimeFormat().resolvedOptions().locale,Ta)}const Vd=new Map;function By(e){let t=Vd.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Vd.set(e,t)),t}const Wd=new Map;function K4(e){let t=Wd.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...Ry,...t}),Wd.set(e,t)}return t}function G4(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=_d(e).resolvedOptions(),i=e}catch{const u=e.substring(0,r);n=_d(u).resolvedOptions(),i=u}const{numberingSystem:o,calendar:s}=n;return[i,o,s]}}function Z4(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function H4(e){const t=[];for(let r=1;r<=12;r++){const n=J.utc(2009,r,1);t.push(e(n))}return t}function Y4(e){const t=[];for(let r=1;r<=7;r++){const n=J.utc(2016,11,13+r);t.push(e(n))}return t}function tl(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function J4(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||By(e.locale).numberingSystem==="latn"}class X4{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:o,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=V4(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Y0(t,3);return yt(r,this.padTo)}}}class Q4{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&gi.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=_d(r,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class e3{constructor(t,r,n){this.opts={style:"long",...n},!r&&Wy()&&(this.rtf=W4(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):D3(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Ry={firstDay:1,minimalDays:4,weekend:[6,7]};class ke{static fromOpts(t){return ke.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,o=!1){const s=t||Xe.defaultLocale,a=s||(o?"en-US":q4()),u=r||Xe.defaultNumberingSystem,l=n||Xe.defaultOutputCalendar,c=Kd(i)||Xe.defaultWeekSettings;return new ke(a,u,l,c,s)}static resetCache(){Ta=null,jd.clear(),Ud.clear(),zd.clear(),Vd.clear(),Wd.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return ke.create(t,r,n,i)}constructor(t,r,n,i,o){const[s,a,u]=G4(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=i,this.intl=Z4(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=J4(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:ke.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Kd(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return tl(this,t,Hy,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const i=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";if(!this.monthsCache[o][t]){const s=n?a=>this.dtFormatter(a,i).format():a=>this.extract(a,i,"month");this.monthsCache[o][t]=H4(s)}return this.monthsCache[o][t]})}weekdays(t,r=!1){return tl(this,t,Xy,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Y4(o=>this.extract(o,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return tl(this,void 0,()=>Qy,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[J.utc(2016,11,13,9),J.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return tl(this,t,eb,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[J.utc(-40,1,1),J.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),o=i.formatToParts(),s=o.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new X4(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Q4(t,this.intl,r)}relFormatter(t={}){return new e3(this.intl,this.isEnglish(),t)}listFormatter(t={}){return z4(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||By(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:qy()?K4(this.locale):Ry}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Ff=null;class fr extends Eu{static get utcInstance(){return Ff===null&&(Ff=new fr(0)),Ff}static instance(t){return t===0?fr.utcInstance:new fr(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new fr(Tc(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Va(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Va(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Va(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class t3 extends Eu{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Oi(e,t){if(Y(e)||e===null)return t;if(e instanceof Eu)return e;if(a3(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Fc.instance:r==="utc"||r==="gmt"?fr.utcInstance:fr.parseSpecifier(r)||gi.create(e)}else return Li(e)?fr.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new t3(e)}const K0={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ep={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},r3=K0.hanidec.replace(/[\[|\]]/g,"").split("");function n3(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(K0.hanidec)!==-1)t+=r3.indexOf(e[r]);else for(const i in ep){const[o,s]=ep[i];n>=o&&n<=s&&(t+=n-o)}}return parseInt(t,10)}else return t}const qd=new Map;function i3(){qd.clear()}function $n({numberingSystem:e},t=""){const r=e||"latn";let n=qd.get(r);n===void 0&&(n=new Map,qd.set(r,n));let i=n.get(t);return i===void 0&&(i=new RegExp(`${K0[r]}${t}`),n.set(t,i)),i}let tp=()=>Date.now(),rp="system",np=null,ip=null,op=null,sp=60,ap,up=null;class Xe{static get now(){return tp}static set now(t){tp=t}static set defaultZone(t){rp=t}static get defaultZone(){return Oi(rp,Fc.instance)}static get defaultLocale(){return np}static set defaultLocale(t){np=t}static get defaultNumberingSystem(){return ip}static set defaultNumberingSystem(t){ip=t}static get defaultOutputCalendar(){return op}static set defaultOutputCalendar(t){op=t}static get defaultWeekSettings(){return up}static set defaultWeekSettings(t){up=Kd(t)}static get twoDigitCutoffYear(){return sp}static set twoDigitCutoffYear(t){sp=t%100}static get throwOnInvalid(){return ap}static set throwOnInvalid(t){ap=t}static resetCaches(){ke.resetCache(),gi.resetCache(),J.resetCache(),i3()}}class En{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Ly=[0,31,59,90,120,151,181,212,243,273,304,334],jy=[0,31,60,91,121,152,182,213,244,274,305,335];function an(e,t){return new En("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function G0(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function _y(e,t,r){return r+(Cu(e)?jy:Ly)[t-1]}function Uy(e,t){const r=Cu(e)?jy:Ly,n=r.findIndex(o=>o<t),i=t-r[n];return{month:n+1,day:i}}function Z0(e,t){return(e-t+7)%7+1}function Hl(e,t=4,r=1){const{year:n,month:i,day:o}=e,s=_y(n,i,o),a=Z0(G0(n,i,o),r);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=n-1,u=ru(l,t,r)):u>ru(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...Nc(e)}}function lp(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:o}=e,s=Z0(G0(n,1,t),r),a=ws(n);let u=i*7+o-s-7+t,l;u<1?(l=n-1,u+=ws(l)):u>a?(l=n+1,u-=ws(n)):l=n;const{month:c,day:f}=Uy(l,u);return{year:l,month:c,day:f,...Nc(e)}}function Mf(e){const{year:t,month:r,day:n}=e,i=_y(t,r,n);return{year:t,ordinal:i,...Nc(e)}}function cp(e){const{year:t,ordinal:r}=e,{month:n,day:i}=Uy(t,r);return{year:t,month:n,day:i,...Nc(e)}}function fp(e,t){if(!Y(e.localWeekday)||!Y(e.localWeekNumber)||!Y(e.localWeekYear)){if(!Y(e.weekday)||!Y(e.weekNumber)||!Y(e.weekYear))throw new ds("Cannot mix locale-based week fields with ISO-based week fields");return Y(e.localWeekday)||(e.weekday=e.localWeekday),Y(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),Y(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function o3(e,t=4,r=1){const n=Mc(e.weekYear),i=un(e.weekNumber,1,ru(e.weekYear,t,r)),o=un(e.weekday,1,7);return n?i?o?!1:an("weekday",e.weekday):an("week",e.weekNumber):an("weekYear",e.weekYear)}function s3(e){const t=Mc(e.year),r=un(e.ordinal,1,ws(e.year));return t?r?!1:an("ordinal",e.ordinal):an("year",e.year)}function zy(e){const t=Mc(e.year),r=un(e.month,1,12),n=un(e.day,1,Yl(e.year,e.month));return t?r?n?!1:an("day",e.day):an("month",e.month):an("year",e.year)}function Vy(e){const{hour:t,minute:r,second:n,millisecond:i}=e,o=un(t,0,23)||t===24&&r===0&&n===0&&i===0,s=un(r,0,59),a=un(n,0,59),u=un(i,0,999);return o?s?a?u?!1:an("millisecond",i):an("second",n):an("minute",r):an("hour",t)}function Y(e){return typeof e>"u"}function Li(e){return typeof e=="number"}function Mc(e){return typeof e=="number"&&e%1===0}function a3(e){return typeof e=="string"}function u3(e){return Object.prototype.toString.call(e)==="[object Date]"}function Wy(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function qy(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function l3(e){return Array.isArray(e)?e:[e]}function dp(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const o=[t(i),i];return n&&r(n[0],o[0])===n[0]?n:o},null)[1]}function c3(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function Ms(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Kd(e){if(e==null)return null;if(typeof e!="object")throw new er("Week settings must be an object");if(!un(e.firstDay,1,7)||!un(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!un(t,1,7)))throw new er("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function un(e,t,r){return Mc(e)&&e>=t&&e<=r}function f3(e,t){return e-t*Math.floor(e/t)}function yt(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function Ni(e){if(!(Y(e)||e===null||e===""))return parseInt(e,10)}function lo(e){if(!(Y(e)||e===null||e===""))return parseFloat(e)}function H0(e){if(!(Y(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Y0(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function Cu(e){return e%4===0&&(e%100!==0||e%400===0)}function ws(e){return Cu(e)?366:365}function Yl(e,t){const r=f3(t-1,12)+1,n=e+(t-r)/12;return r===2?Cu(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Sc(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function mp(e,t,r){return-Z0(G0(e,1,t),r)+t-1}function ru(e,t=4,r=1){const n=mp(e,t,r),i=mp(e+1,t,r);return(ws(e)-n+i)/7}function Gd(e){return e>99?e:e>Xe.twoDigitCutoffYear?1900+e:2e3+e}function Ky(e,t,r,n=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(o.timeZone=n);const s={timeZoneName:t,...o},a=new Intl.DateTimeFormat(r,s).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Tc(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function Gy(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new er(`Invalid unit value ${e}`);return t}function Jl(e,t){const r={};for(const n in e)if(Ms(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=Gy(i)}return r}function Va(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${yt(r,2)}:${yt(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${yt(r,2)}${yt(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Nc(e){return c3(e,["hour","minute","second","millisecond"])}const d3=["January","February","March","April","May","June","July","August","September","October","November","December"],Zy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m3=["J","F","M","A","M","J","J","A","S","O","N","D"];function Hy(e){switch(e){case"narrow":return[...m3];case"short":return[...Zy];case"long":return[...d3];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Yy=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Jy=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],h3=["M","T","W","T","F","S","S"];function Xy(e){switch(e){case"narrow":return[...h3];case"short":return[...Jy];case"long":return[...Yy];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Qy=["AM","PM"],p3=["Before Christ","Anno Domini"],g3=["BC","AD"],y3=["B","A"];function eb(e){switch(e){case"narrow":return[...y3];case"short":return[...g3];case"long":return[...p3];default:return null}}function b3(e){return Qy[e.hour<12?0:1]}function w3(e,t){return Xy(t)[e.weekday-1]}function $3(e,t){return Hy(t)[e.month-1]}function v3(e,t){return eb(t)[e.year<0?0:1]}function D3(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&o){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=n?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function hp(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const x3={D:Zl,DD:yy,DDD:by,DDDD:wy,t:$y,tt:vy,ttt:Dy,tttt:xy,T:Ay,TT:Ey,TTT:Cy,TTTT:ky,f:Fy,ff:Sy,fff:Ny,ffff:Iy,F:My,FF:Ty,FFF:Py,FFFF:Oy};class rr{static create(t,r={}){return new rr(t,r)}static parseFormat(t){let r=null,n="",i=!1;const o=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||i)&&o.push({literal:i||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&o.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&o.push({literal:i||/^\s+$/.test(n),val:n}),o}static macroTokenToFormatOpts(t){return x3[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return yt(t,r);const i={...this.opts};return r>0&&(i.padTo=r),n&&(i.signDisplay=n),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(m,h)=>this.loc.extract(t,m,h),s=m=>t.isOffsetFixed&&t.offset===0&&m.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,m.format):"",a=()=>n?b3(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(m,h)=>n?$3(t,m):o(h?{month:m}:{month:m,day:"numeric"},"month"),l=(m,h)=>n?w3(t,m):o(h?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),c=m=>{const h=rr.macroTokenToFormatOpts(m);return h?this.formatWithSystemDefault(t,h):m},f=m=>n?v3(t,m):o({era:m},"era"),d=m=>{switch(m){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(m)}};return hp(rr.parseFormat(r),d)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,i=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(c,f)=>d=>{const m=i(d);if(m){const h=f.isNegativeDuration&&m!==f.largestUnit?n:1;let p;return this.opts.signMode==="negativeLargestOnly"&&m!==f.largestUnit?p="never":this.opts.signMode==="all"?p="always":p="auto",this.num(c.get(m)*h,d.length,p)}else return d},s=rr.parseFormat(r),a=s.reduce((c,{literal:f,val:d})=>f?c:c.concat(d),[]),u=t.shiftTo(...a.map(i).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return hp(s,o(u,l))}}const tb=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function ea(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function ta(...e){return t=>e.reduce(([r,n,i],o)=>{const[s,a,u]=o(t,i);return[{...r,...s},a||n,u]},[{},null,1]).slice(0,2)}function ra(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function rb(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=Ni(t[r+i]);return[n,null,r+i]}}const nb=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,A3=`(?:${nb.source}?(?:\\[(${tb.source})\\])?)?`,J0=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,ib=RegExp(`${J0.source}${A3}`),X0=RegExp(`(?:[Tt]${ib.source})?`),E3=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,C3=/(\d{4})-?W(\d\d)(?:-?(\d))?/,k3=/(\d{4})-?(\d{3})/,F3=rb("weekYear","weekNumber","weekDay"),M3=rb("year","ordinal"),S3=/(\d{4})-(\d\d)-(\d\d)/,ob=RegExp(`${J0.source} ?(?:${nb.source}|(${tb.source}))?`),T3=RegExp(`(?: ${ob.source})?`);function $s(e,t,r){const n=e[t];return Y(n)?r:Ni(n)}function N3(e,t){return[{year:$s(e,t),month:$s(e,t+1,1),day:$s(e,t+2,1)},null,t+3]}function na(e,t){return[{hours:$s(e,t,0),minutes:$s(e,t+1,0),seconds:$s(e,t+2,0),milliseconds:H0(e[t+3])},null,t+4]}function ku(e,t){const r=!e[t]&&!e[t+1],n=Tc(e[t+1],e[t+2]),i=r?null:fr.instance(n);return[{},i,t+3]}function Fu(e,t){const r=e[t]?gi.create(e[t]):null;return[{},r,t+1]}const P3=RegExp(`^T?${J0.source}$`),I3=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function O3(e){const[t,r,n,i,o,s,a,u,l]=e,c=t[0]==="-",f=u&&u[0]==="-",d=(m,h=!1)=>m!==void 0&&(h||m&&c)?-m:m;return[{years:d(lo(r)),months:d(lo(n)),weeks:d(lo(i)),days:d(lo(o)),hours:d(lo(s)),minutes:d(lo(a)),seconds:d(lo(u),u==="-0"),milliseconds:d(H0(l),f)}]}const B3={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Q0(e,t,r,n,i,o,s){const a={year:t.length===2?Gd(Ni(t)):Ni(t),month:Zy.indexOf(r)+1,day:Ni(n),hour:Ni(i),minute:Ni(o)};return s&&(a.second=Ni(s)),e&&(a.weekday=e.length>3?Yy.indexOf(e)+1:Jy.indexOf(e)+1),a}const R3=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function L3(e){const[,t,r,n,i,o,s,a,u,l,c,f]=e,d=Q0(t,i,n,r,o,s,a);let m;return u?m=B3[u]:l?m=0:m=Tc(c,f),[d,new fr(m)]}function j3(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const _3=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,U3=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,z3=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function pp(e){const[,t,r,n,i,o,s,a]=e;return[Q0(t,i,n,r,o,s,a),fr.utcInstance]}function V3(e){const[,t,r,n,i,o,s,a]=e;return[Q0(t,a,r,n,i,o,s),fr.utcInstance]}const W3=ea(E3,X0),q3=ea(C3,X0),K3=ea(k3,X0),G3=ea(ib),sb=ta(N3,na,ku,Fu),Z3=ta(F3,na,ku,Fu),H3=ta(M3,na,ku,Fu),Y3=ta(na,ku,Fu);function J3(e){return ra(e,[W3,sb],[q3,Z3],[K3,H3],[G3,Y3])}function X3(e){return ra(j3(e),[R3,L3])}function Q3(e){return ra(e,[_3,pp],[U3,pp],[z3,V3])}function e6(e){return ra(e,[I3,O3])}const t6=ta(na);function r6(e){return ra(e,[P3,t6])}const n6=ea(S3,T3),i6=ea(ob),o6=ta(na,ku,Fu);function s6(e){return ra(e,[n6,sb],[i6,o6])}const gp="Invalid Duration",ab={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},a6={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...ab},en=146097/400,Qo=146097/4800,u6={years:{quarters:4,months:12,weeks:en/7,days:en,hours:en*24,minutes:en*24*60,seconds:en*24*60*60,milliseconds:en*24*60*60*1e3},quarters:{months:3,weeks:en/28,days:en/4,hours:en*24/4,minutes:en*24*60/4,seconds:en*24*60*60/4,milliseconds:en*24*60*60*1e3/4},months:{weeks:Qo/7,days:Qo,hours:Qo*24,minutes:Qo*24*60,seconds:Qo*24*60*60,milliseconds:Qo*24*60*60*1e3},...ab},vo=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],l6=vo.slice(0).reverse();function Jn(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new he(n)}function ub(e,t){let r=t.milliseconds??0;for(const n of l6.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function yp(e,t){const r=ub(e,t)<0?-1:1;vo.reduceRight((n,i)=>{if(Y(t[i]))return n;if(n){const o=t[n]*r,s=e[i][n],a=Math.floor(o/s);t[i]+=a*r,t[n]-=a*s*r}return i},null),vo.reduce((n,i)=>{if(Y(t[i]))return n;if(n){const o=t[n]%1;t[n]-=o,t[i]+=o*e[n][i]}return i},null)}function bp(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class he{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?u6:a6;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||ke.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return he.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new er(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new he({values:Jl(t,he.normalizeUnit),loc:ke.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Li(t))return he.fromMillis(t);if(he.isDuration(t))return t;if(typeof t=="object")return he.fromObject(t);throw new er(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=e6(t);return n?he.fromObject(n,r):he.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=r6(t);return n?he.fromObject(n,r):he.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new er("need to specify a reason the Duration is invalid");const n=t instanceof En?t:new En(t,r);if(Xe.throwOnInvalid)throw new O4(n);return new he({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new gy(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?rr.create(this.loc,n).formatDurationFromString(this,t):gp}toHuman(t={}){if(!this.isValid)return gp;const r=t.showZeros!==!1,n=vo.map(i=>{const o=this.values[i];return Y(o)||o===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Y0(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},J.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?ub(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=he.fromDurationLike(t),n={};for(const i of vo)(Ms(r.values,i)||Ms(this.values,i))&&(n[i]=r.get(i)+this.get(i));return Jn(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=he.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Gy(t(this.values[n],n));return Jn(this,{values:r},!0)}get(t){return this[he.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Jl(t,he.normalizeUnit)};return Jn(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return Jn(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return yp(this.matrix,t),Jn(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=bp(this.normalize().shiftToAll().toObject());return Jn(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>he.normalizeUnit(s));const r={},n={},i=this.toObject();let o;for(const s of vo)if(t.indexOf(s)>=0){o=s;let a=0;for(const l in n)a+=this.matrix[l][s]*n[l],n[l]=0;Li(i[s])&&(a+=i[s]);const u=Math.trunc(a);r[s]=u,n[s]=(a*1e3-u*1e3)/1e3}else Li(i[s])&&(n[s]=i[s]);for(const s in n)n[s]!==0&&(r[o]+=s===o?n[s]:n[s]/this.matrix[o][s]);return yp(this.matrix,r),Jn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return Jn(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=bp(this.values);return Jn(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of vo)if(!r(this.values[n],t.values[n]))return!1;return!0}}const es="Invalid Interval";function c6(e,t){return!e||!e.isValid?ot.invalid("missing or invalid start"):!t||!t.isValid?ot.invalid("missing or invalid end"):t<e?ot.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ot{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new er("need to specify a reason the Interval is invalid");const n=t instanceof En?t:new En(t,r);if(Xe.throwOnInvalid)throw new I4(n);return new ot({invalid:n})}static fromDateTimes(t,r){const n=$a(t),i=$a(r),o=c6(n,i);return o??new ot({start:n,end:i})}static after(t,r){const n=he.fromDurationLike(r),i=$a(t);return ot.fromDateTimes(i,i.plus(n))}static before(t,r){const n=he.fromDurationLike(r),i=$a(t);return ot.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let o,s;try{o=J.fromISO(n,r),s=o.isValid}catch{s=!1}let a,u;try{a=J.fromISO(i,r),u=a.isValid}catch{u=!1}if(s&&u)return ot.fromDateTimes(o,a);if(s){const l=he.fromISO(i,r);if(l.isValid)return ot.after(o,l)}else if(u){const l=he.fromISO(n,r);if(l.isValid)return ot.before(a,l)}}return ot.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ot.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map($a).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:i}=this,o=0;for(;i<this.e;){const s=r[o]||this.e,a=+s>+this.e?this.e:s;n.push(ot.fromDateTimes(i,a)),i=a,o+=1}return n}splitBy(t){const r=he.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,o;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*i));o=+a>+this.e?this.e:a,s.push(ot.fromDateTimes(n,o)),n=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ot.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ot.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],o=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...o),a=s.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&i.push(ot.fromDateTimes(r,u.time)),r=null);return ot.merge(i)}difference(...t){return ot.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:es}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Zl,r={}){return this.isValid?rr.create(this.s.loc.clone(r),t).formatInterval(this):es}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:es}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:es}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:es}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:es}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):he.invalid(this.invalidReason)}mapEndpoints(t){return ot.fromDateTimes(t(this.s),t(this.e))}}class rl{static hasDST(t=Xe.defaultZone){const r=J.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return gi.isValidZone(t)}static normalizeZone(t){return Oi(t,Xe.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||ke.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||ke.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||ke.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||ke.create(r,n,o)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||ke.create(r,n,o)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||ke.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||ke.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return ke.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return ke.create(r,null,"gregory").eras(t)}static features(){return{relative:Wy(),localeWeek:qy()}}}function wp(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(he.fromMillis(n).as("days"))}function f6(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=wp(u,l);return(c-c%7)/7}],["days",wp]],i={},o=e;let s,a;for(const[u,l]of n)r.indexOf(u)>=0&&(s=u,i[u]=l(e,t),a=o.plus(i),a>t?(i[u]--,e=o.plus(i),e>t&&(a=e,i[u]--,e=o.plus(i))):e=a);return[e,i,a,s]}function d6(e,t,r,n){let[i,o,s,a]=f6(e,t,r);const u=t-i,l=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);l.length===0&&(s<t&&(s=i.plus({[a]:1})),s!==i&&(o[a]=(o[a]||0)+u/(s-i)));const c=he.fromObject(o,n);return l.length>0?he.fromMillis(u,n).shiftTo(...l).plus(c):c}const m6="missing Intl.DateTimeFormat.formatToParts support";function ve(e,t=r=>r){return{regex:e,deser:([r])=>t(n3(r))}}const h6=" ",lb=`[ ${h6}]`,cb=new RegExp(lb,"g");function p6(e){return e.replace(/\./g,"\\.?").replace(cb,lb)}function $p(e){return e.replace(/\./g,"").replace(cb," ").toLowerCase()}function vn(e,t){return e===null?null:{regex:RegExp(e.map(p6).join("|")),deser:([r])=>e.findIndex(n=>$p(r)===$p(n))+t}}function vp(e,t){return{regex:e,deser:([,r,n])=>Tc(r,n),groups:t}}function nl(e){return{regex:e,deser:([t])=>t}}function g6(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function y6(e,t){const r=$n(t),n=$n(t,"{2}"),i=$n(t,"{3}"),o=$n(t,"{4}"),s=$n(t,"{6}"),a=$n(t,"{1,2}"),u=$n(t,"{1,3}"),l=$n(t,"{1,6}"),c=$n(t,"{1,9}"),f=$n(t,"{2,4}"),d=$n(t,"{4,6}"),m=$=>({regex:RegExp(g6($.val)),deser:([v])=>v,literal:!0}),p=($=>{if(e.literal)return m($);switch($.val){case"G":return vn(t.eras("short"),0);case"GG":return vn(t.eras("long"),0);case"y":return ve(l);case"yy":return ve(f,Gd);case"yyyy":return ve(o);case"yyyyy":return ve(d);case"yyyyyy":return ve(s);case"M":return ve(a);case"MM":return ve(n);case"MMM":return vn(t.months("short",!0),1);case"MMMM":return vn(t.months("long",!0),1);case"L":return ve(a);case"LL":return ve(n);case"LLL":return vn(t.months("short",!1),1);case"LLLL":return vn(t.months("long",!1),1);case"d":return ve(a);case"dd":return ve(n);case"o":return ve(u);case"ooo":return ve(i);case"HH":return ve(n);case"H":return ve(a);case"hh":return ve(n);case"h":return ve(a);case"mm":return ve(n);case"m":return ve(a);case"q":return ve(a);case"qq":return ve(n);case"s":return ve(a);case"ss":return ve(n);case"S":return ve(u);case"SSS":return ve(i);case"u":return nl(c);case"uu":return nl(a);case"uuu":return ve(r);case"a":return vn(t.meridiems(),0);case"kkkk":return ve(o);case"kk":return ve(f,Gd);case"W":return ve(a);case"WW":return ve(n);case"E":case"c":return ve(r);case"EEE":return vn(t.weekdays("short",!1),1);case"EEEE":return vn(t.weekdays("long",!1),1);case"ccc":return vn(t.weekdays("short",!0),1);case"cccc":return vn(t.weekdays("long",!0),1);case"Z":case"ZZ":return vp(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return vp(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return nl(/[a-z_+-/]{1,256}?/i);case" ":return nl(/[^\S\n\r]/);default:return m($)}})(e)||{invalidReason:m6};return p.token=e,p}const b6={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function w6(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const o=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=b6[s];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function $6(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function v6(e,t,r){const n=e.match(t);if(n){const i={};let o=1;for(const s in r)if(Ms(r,s)){const a=r[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(o,o+u))),o+=u}return[n,i]}else return[n,{}]}function D6(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return Y(e.z)||(r=gi.create(e.z)),Y(e.Z)||(r||(r=new fr(e.Z)),n=e.Z),Y(e.q)||(e.M=(e.q-1)*3+1),Y(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),Y(e.u)||(e.S=H0(e.u)),[Object.keys(e).reduce((o,s)=>{const a=t(s);return a&&(o[a]=e[s]),o},{}),r,n]}let Sf=null;function x6(){return Sf||(Sf=J.fromMillis(1555555555555)),Sf}function A6(e,t){if(e.literal)return e;const r=rr.macroTokenToFormatOpts(e.val),n=hb(r,t);return n==null||n.includes(void 0)?e:n}function fb(e,t){return Array.prototype.concat(...e.map(r=>A6(r,t)))}class db{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=fb(rr.parseFormat(r),t),this.units=this.tokens.map(n=>y6(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=$6(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=v6(t,this.regex,this.handlers),[i,o,s]=n?D6(n):[null,null,void 0];if(Ms(n,"a")&&Ms(n,"H"))throw new ds("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function mb(e,t,r){return new db(e,r).explainFromTokens(t)}function E6(e,t,r){const{result:n,zone:i,specificOffset:o,invalidReason:s}=mb(e,t,r);return[n,i,o,s]}function hb(e,t){if(!e)return null;const n=rr.create(t,e).dtFormatter(x6()),i=n.formatToParts(),o=n.resolvedOptions();return i.map(s=>w6(s,e,o))}const Tf="Invalid DateTime",Dp=864e13;function Na(e){return new En("unsupported zone",`the zone "${e.name}" is not supported`)}function Nf(e){return e.weekData===null&&(e.weekData=Hl(e.c)),e.weekData}function Pf(e){return e.localWeekData===null&&(e.localWeekData=Hl(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function co(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new J({...r,...t,old:r})}function pb(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const o=r.offset(n);return i===o?[n,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function il(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Nl(e,t,r){return pb(Sc(e),t,r)}function xp(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:n,month:i,day:Math.min(e.c.day,Yl(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=he.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Sc(o);let[u,l]=pb(a,r,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function ts(e,t,r,n,i,o){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=J.fromObject(e,{...r,zone:u,specificOffset:o});return s?l:l.setZone(a)}else return J.invalid(new En("unparsable",`the input "${i}" can't be parsed as ${n}`))}function ol(e,t,r=!0){return e.isValid?rr.create(ke.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function If(e,t,r){const n=e.c.year>9999||e.c.year<0;let i="";if(n&&e.c.year>=0&&(i+="+"),i+=yt(e.c.year,n?6:4),r==="year")return i;if(t){if(i+="-",i+=yt(e.c.month),r==="month")return i;i+="-"}else if(i+=yt(e.c.month),r==="month")return i;return i+=yt(e.c.day),i}function Ap(e,t,r,n,i,o,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=yt(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=yt(e.c.minute),s==="minute")break;a&&(u+=":",u+=yt(e.c.second))}else{if(u+=yt(e.c.minute),s==="minute")break;a&&(u+=yt(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(u+=".",u+=yt(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?u+="Z":e.o<0?(u+="-",u+=yt(Math.trunc(-e.o/60)),u+=":",u+=yt(Math.trunc(-e.o%60))):(u+="+",u+=yt(Math.trunc(e.o/60)),u+=":",u+=yt(Math.trunc(e.o%60)))),o&&(u+="["+e.zone.ianaName+"]"),u}const gb={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},C6={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},k6={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Pl=["year","month","day","hour","minute","second","millisecond"],F6=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],M6=["year","ordinal","hour","minute","second","millisecond"];function Il(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new gy(e);return t}function Ep(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Il(e)}}function S6(e){if(Pa===void 0&&(Pa=Xe.now()),e.type!=="iana")return e.offset(Pa);const t=e.name;let r=Zd.get(t);return r===void 0&&(r=e.offset(Pa),Zd.set(t,r)),r}function Cp(e,t){const r=Oi(t.zone,Xe.defaultZone);if(!r.isValid)return J.invalid(Na(r));const n=ke.fromObject(t);let i,o;if(Y(e.year))i=Xe.now();else{for(const u of Pl)Y(e[u])&&(e[u]=gb[u]);const s=zy(e)||Vy(e);if(s)return J.invalid(s);const a=S6(r);[i,o]=Nl(e,a,r)}return new J({ts:i,zone:r,loc:n,o})}function kp(e,t,r){const n=Y(r.round)?!0:r.round,i=Y(r.rounding)?"trunc":r.rounding,o=(a,u)=>(a=Y0(a,n||r.calendary?0:2,r.calendary?"round":i),t.loc.clone(r).relFormatter(r).format(a,u)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(s(r.unit),r.unit);for(const a of r.units){const u=s(a);if(Math.abs(u)>=1)return o(u,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function Fp(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let Pa;const Zd=new Map;class J{constructor(t){const r=t.zone||Xe.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new En("invalid input"):null)||(r.isValid?null:Na(r));this.ts=Y(t.ts)?Xe.now():t.ts;let i=null,o=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,o]=[t.old.c,t.old.o];else{const a=Li(t.o)&&!t.old?t.o:r.offset(this.ts);i=il(this.ts,a),n=Number.isNaN(i.year)?new En("invalid input"):null,i=n?null:i,o=n?null:a}this._zone=r,this.loc=t.loc||ke.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new J({})}static local(){const[t,r]=Fp(arguments),[n,i,o,s,a,u,l]=r;return Cp({year:n,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=Fp(arguments),[n,i,o,s,a,u,l]=r;return t.zone=fr.utcInstance,Cp({year:n,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=u3(t)?t.valueOf():NaN;if(Number.isNaN(n))return J.invalid("invalid input");const i=Oi(r.zone,Xe.defaultZone);return i.isValid?new J({ts:n,zone:i,loc:ke.fromObject(r)}):J.invalid(Na(i))}static fromMillis(t,r={}){if(Li(t))return t<-Dp||t>Dp?J.invalid("Timestamp out of range"):new J({ts:t,zone:Oi(r.zone,Xe.defaultZone),loc:ke.fromObject(r)});throw new er(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Li(t))return new J({ts:t*1e3,zone:Oi(r.zone,Xe.defaultZone),loc:ke.fromObject(r)});throw new er("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=Oi(r.zone,Xe.defaultZone);if(!n.isValid)return J.invalid(Na(n));const i=ke.fromObject(r),o=Jl(t,Ep),{minDaysInFirstWeek:s,startOfWeek:a}=fp(o,i),u=Xe.now(),l=Y(r.specificOffset)?n.offset(u):r.specificOffset,c=!Y(o.ordinal),f=!Y(o.year),d=!Y(o.month)||!Y(o.day),m=f||d,h=o.weekYear||o.weekNumber;if((m||c)&&h)throw new ds("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(d&&c)throw new ds("Can't mix ordinal dates with month/day");const p=h||o.weekday&&!m;let $,v,A=il(u,l);p?($=F6,v=C6,A=Hl(A,s,a)):c?($=M6,v=k6,A=Mf(A)):($=Pl,v=gb);let S=!1;for(const lt of $){const Ye=o[lt];Y(Ye)?S?o[lt]=v[lt]:o[lt]=A[lt]:S=!0}const N=p?o3(o,s,a):c?s3(o):zy(o),I=N||Vy(o);if(I)return J.invalid(I);const te=p?lp(o,s,a):c?cp(o):o,[le,re]=Nl(te,l,n),Ce=new J({ts:le,zone:n,o:re,loc:i});return o.weekday&&m&&t.weekday!==Ce.weekday?J.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${Ce.toISO()}`):Ce.isValid?Ce:J.invalid(Ce.invalid)}static fromISO(t,r={}){const[n,i]=J3(t);return ts(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=X3(t);return ts(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=Q3(t);return ts(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(Y(t)||Y(r))throw new er("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=n,s=ke.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[a,u,l,c]=E6(s,t,r);return c?J.invalid(c):ts(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return J.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=s6(t);return ts(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new er("need to specify a reason the DateTime is invalid");const n=t instanceof En?t:new En(t,r);if(Xe.throwOnInvalid)throw new P4(n);return new J({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=hb(t,ke.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return fb(rr.parseFormat(t),ke.fromObject(r)).map(i=>i.val).join("")}static resetCache(){Pa=void 0,Zd.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Nf(this).weekYear:NaN}get weekNumber(){return this.isValid?Nf(this).weekNumber:NaN}get weekday(){return this.isValid?Nf(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Pf(this).weekday:NaN}get localWeekNumber(){return this.isValid?Pf(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Pf(this).weekYear:NaN}get ordinal(){return this.isValid?Mf(this.c).ordinal:NaN}get monthShort(){return this.isValid?rl.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?rl.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?rl.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?rl.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Sc(this.c),i=this.zone.offset(n-t),o=this.zone.offset(n+t),s=this.zone.offset(n-i*r),a=this.zone.offset(n-o*r);if(s===a)return[this];const u=n-s*r,l=n-a*r,c=il(u,s),f=il(l,a);return c.hour===f.hour&&c.minute===f.minute&&c.second===f.second&&c.millisecond===f.millisecond?[co(this,{ts:u}),co(this,{ts:l})]:[this]}get isInLeapYear(){return Cu(this.year)}get daysInMonth(){return Yl(this.year,this.month)}get daysInYear(){return this.isValid?ws(this.year):NaN}get weeksInWeekYear(){return this.isValid?ru(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?ru(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=rr.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(fr.instance(t),r)}toLocal(){return this.setZone(Xe.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=Oi(t,Xe.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const o=t.offset(this.ts),s=this.toObject();[i]=Nl(s,o,t)}return co(this,{ts:i,zone:t})}else return J.invalid(Na(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return co(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Jl(t,Ep),{minDaysInFirstWeek:n,startOfWeek:i}=fp(r,this.loc),o=!Y(r.weekYear)||!Y(r.weekNumber)||!Y(r.weekday),s=!Y(r.ordinal),a=!Y(r.year),u=!Y(r.month)||!Y(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||s)&&c)throw new ds("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new ds("Can't mix ordinal dates with month/day");let f;o?f=lp({...Hl(this.c,n,i),...r},n,i):Y(r.ordinal)?(f={...this.toObject(),...r},Y(r.day)&&(f.day=Math.min(Yl(f.year,f.month),f.day))):f=cp({...Mf(this.c),...r});const[d,m]=Nl(f,this.o,this.zone);return co(this,{ts:d,o:m})}plus(t){if(!this.isValid)return this;const r=he.fromDurationLike(t);return co(this,xp(this,r))}minus(t){if(!this.isValid)return this;const r=he.fromDurationLike(t).negate();return co(this,xp(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=he.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(n.weekNumber=this.weekNumber-1),n.weekday=o}else n.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);n.month=(o-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?rr.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Tf}toLocaleString(t=Zl,r={}){return this.isValid?rr.create(this.loc.clone(r),t).formatDateTime(this):Tf}toLocaleParts(t={}){return this.isValid?rr.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=Il(s);const a=t==="extended";let u=If(this,a,s);return Pl.indexOf(s)>=3&&(u+="T"),u+=Ap(this,a,r,n,i,o,s),u}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?If(this,t==="extended",Il(r)):null}toISOWeekDate(){return ol(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=Il(a),(i&&Pl.indexOf(a)>=3?"T":"")+Ap(this,s==="extended",r,t,n,o,a)):null}toRFC2822(){return ol(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return ol(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?If(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),ol(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Tf}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return he.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},o=l3(r).map(he.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=d6(a,u,o,i);return s?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(J.now(),t,r)}until(t){return this.isValid?ot.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(r,n)<=i&&i<=o.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||J.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),kp(r,this.plus(n),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?kp(t.base||J.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(J.isDateTime))throw new er("min requires all arguments be DateTimes");return dp(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(J.isDateTime))throw new er("max requires all arguments be DateTimes");return dp(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:o=null}=n,s=ke.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return mb(s,t,r)}static fromStringExplain(t,r,n={}){return J.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,o=ke.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new db(o,t)}static fromFormatParser(t,r,n={}){if(Y(t)||Y(r))throw new er("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=n,s=ke.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(r.locale))throw new er(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?J.invalid(c):ts(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return Zl}static get DATE_MED(){return yy}static get DATE_MED_WITH_WEEKDAY(){return B4}static get DATE_FULL(){return by}static get DATE_HUGE(){return wy}static get TIME_SIMPLE(){return $y}static get TIME_WITH_SECONDS(){return vy}static get TIME_WITH_SHORT_OFFSET(){return Dy}static get TIME_WITH_LONG_OFFSET(){return xy}static get TIME_24_SIMPLE(){return Ay}static get TIME_24_WITH_SECONDS(){return Ey}static get TIME_24_WITH_SHORT_OFFSET(){return Cy}static get TIME_24_WITH_LONG_OFFSET(){return ky}static get DATETIME_SHORT(){return Fy}static get DATETIME_SHORT_WITH_SECONDS(){return My}static get DATETIME_MED(){return Sy}static get DATETIME_MED_WITH_SECONDS(){return Ty}static get DATETIME_MED_WITH_WEEKDAY(){return R4}static get DATETIME_FULL(){return Ny}static get DATETIME_FULL_WITH_SECONDS(){return Py}static get DATETIME_HUGE(){return Iy}static get DATETIME_HUGE_WITH_SECONDS(){return Oy}}function $a(e){if(J.isDateTime(e))return e;if(e&&e.valueOf&&Li(e.valueOf()))return J.fromJSDate(e);if(e&&typeof e=="object")return J.fromObject(e);throw new er(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var Fe;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Fe||(Fe={}));const T6=[Fe.Milliseconds,Fe.Seconds,Fe.Minutes,Fe.Hours,Fe.Days,Fe.Weeks,Fe.Months,Fe.Years];Fe.Milliseconds+"",Fe.Seconds+"",Fe.Minutes+"",Fe.Hours+"",Fe.Days+"",Fe.Weeks+"",Fe.Months+"",Fe.Years+"";function N6(e){return T6.filter(t=>e[t])}function Hd(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function P6(e){return Hd(Math.max(e-.4,0),{decimalCount:0})}function Mp(e){return e===0?0:Math.sign(e)}function Ss(e,t,r={}){const n={},i={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=N6(t).reverse();if(o||s)return a.forEach(c=>{n[c]=o?1/0:-1/0}),n;let u=he.fromObject(e).as(Fe.Milliseconds);const l=Mp(u);return a.forEach((c,f)=>{const d=f===a.length-1;if(c===Fe.Milliseconds)n.milliseconds=Hd(u,i);else{const m=he.fromObject({milliseconds:u}).as(c),h=Math.sign(m),p=Math.abs(m),$=d?Hd(p,i):Math.floor(i.decimalCount==null?p:P6(p)),v=$===0?0:$*h;n[c]=v,u-=he.fromObject({[c]:v}).as(Fe.Milliseconds),l!==Mp(u)&&(u=0)}}),n}Intl.DateTimeFormat().resolvedOptions().locale;var G;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(G||(G={}));G.Year,G.Hour,G.Minute,G.Second,G.Millisecond;G.Month,G.Week,G.Day;G.Millisecond,G.Second,G.Minute,G.Hour,G.Day,G.Week,G.Month,G.Year;const Sp={min:0,max:23},Tp={min:0,max:59},Np={min:0,max:59},Pp={min:0,max:999};var tr;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(tr||(tr={}));tr.Sunday+"",tr.Monday+"",tr.Tuesday+"",tr.Wednesday+"",tr.Thursday+"",tr.Friday+"",tr.Saturday+"";tr.Sunday,tr.Monday,tr.Tuesday,tr.Wednesday,tr.Thursday,tr.Friday,tr.Saturday;var Dr;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Dr||(Dr={}));Dr.January,Dr.February,Dr.March,Dr.April,Dr.May,Dr.June,Dr.July,Dr.August,Dr.September,Dr.October,Dr.November,Dr.December;const Ip={min:1,max:12},Op={min:1,max:31};function So(e){const t=new Gl,n=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:Ss(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function yb(...e){const t=e.join(""),r=U0(Array.from(t));return Array.from(r).join("")}function bb(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function wb(e,t){const r=yb([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return $b(e,r)}function $b(e,t){const r=yb(t);return typeof e=="string"?new RegExp(bb(e),r):new RegExp(e.source,r)}function vb(e,{caseSensitive:t}){const n="".replaceAll("i","");return $b(e,n)}function em(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function Db(e,t){return t?typeof t=="string"?!!new RegExp(bb(t),"i").exec(e):!!wb(t,"i").exec(e):!1}class y extends Error{name="AssertionError";constructor(t,r){super(Qs(r,t)||"Assertion failed.")}}const Bp={interval:{milliseconds:100},timeout:{seconds:10}},Of=Symbol("not set");async function I6(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:o,options:s}=O6(t),a=Ss(s.timeout,{milliseconds:!0}).milliseconds,u=Ss(s.interval,{milliseconds:!0});let l=Of,c;async function f(){try{l=r?n():await n(),e(l,...i)}catch(m){l=Of,c=at(m)}}const d=Date.now();for(;l===Of;)if(await f(),await So(u),Date.now()-d>=a){const h=`${o?`${o}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw kc(c,h)}return l}function P(e,t=!1){return((...r)=>I6(e,r,t))}function O6(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:xb(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function xb(e){return{interval:e?.interval||Bp.interval,timeout:e?.timeout||Bp.timeout}}const va={isFalse(e,t){if(e!==!1)throw new y(`'${b(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new y(`'${b(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new y(`'${b(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new y(`'${b(e)}' is not truthy.`,t)}},Ab={assert:va,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new y(`'${b(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new y(`'${b(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new y(`'${b(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new y(`'${b(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:P(va.isFalse),isFalsy:P(va.isFalsy),isTrue:P(va.isTrue),isTruthy:P(va.isTruthy)}};function B6(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new y(`${b(e)} does not end with ${b(t)}}`,r)}else if(e[e.length-1]!==t)throw new y(`${b(e)} does not end with ${b(t)}}`,r)}function R6(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new y(`${b(e)} ends with ${b(t)}}`,r)}else if(e[e.length-1]===t)throw new y(`${b(e)} ends with ${b(t)}}`,r)}function L6(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new y(`${b(e)} does not start with ${b(t)}}`,r)}else if(e[0]!==t)throw new y(`${b(e)} does not start with ${b(t)}}`,r)}function j6(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new y(`${b(e)} starts with ${b(t)}}`,r)}else if(e[0]===t)throw new y(`${b(e)} starts with ${b(t)}}`,r)}const Da={endsWith:B6,endsWithout:R6,startsWith:L6,startsWithout:j6},Eb={assert:Da,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new y(`${b(e)} does not end with ${b(t)}}`,r)}else if(e[e.length-1]!==t)throw new y(`${b(e)} does not end with ${b(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new y(`${b(e)} ends with ${b(t)}}`,r)}else if(e[e.length-1]===t)throw new y(`${b(e)} ends with ${b(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new y(`${b(e)} does not start with ${b(t)}}`,r)}else if(e[0]!==t)throw new y(`${b(e)} does not start with ${b(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new y(`${b(e)} starts with ${b(t)}}`,r)}else if(e[0]===t)throw new y(`${b(e)} starts with ${b(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:P(Da.endsWith),endsWithout:P(Da.endsWithout),startsWith:P(Da.startsWith),startsWithout:P(Da.startsWithout)}};function _6(e,t,r){const n=nn(t);if(!n.includes(e))throw new y(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function ri(e,t){return nn(t).includes(e)}const Bf={isEnumValue(e,t,r){_6(e,t,r)},isNotEnumValue(e,t,r){const n=nn(t);if(n.includes(e))throw new y(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},Cb={assert:Bf,check:{isEnumValue:ri,isNotEnumValue(e,t){return!nn(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=nn(t);if(!n.includes(e))throw new y(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=nn(t);if(n.includes(e))throw new y(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(nn(t).includes(e))return e},isNotEnumValue(e,t){if(!nn(t).includes(e))return e}},waitUntil:{isEnumValue:P(Bf.isEnumValue),isNotEnumValue:P(Bf.isNotEnumValue)}},Rf={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new y(`${b(e)} is not an object.`,r);if(!t||typeof t!="object")throw new y(`${b(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new y(`Entries are not equal at key '${String(i)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))throw new y("Entries are equal.",r)}},kb={assert:Rf,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const i=e[n],o=t[n];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const i=e[n],o=t[n];return i!==o})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new y(`${b(e)} is not an object.`,r);if(!t||typeof t!="object")throw new y(`${b(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new y(`Entries are not equal at key '${String(i)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))return e;throw new y("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:P(Rf.entriesEqual),notEntriesEqual:P(Rf.notEntriesEqual)}};function Xl(e,t){return JSON.stringify(e)===JSON.stringify(t)}function nu(e,t){if(!(e===t||Xl(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Xl(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{nu(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${jt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function Ia(e,t){if(e===t||Xl(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Xl(r,n)?!1:Object.keys(e).every(o=>Ia(e[o],t[o]))}return!1}const Lf={jsonEquals(e,t,r){try{nu(e,t)}catch(n){throw new y(jt(n),r)}},notJsonEquals(e,t,r){try{nu(e,t)}catch{return}throw new y("Values are JSON equal.",r)}},Fb={assert:Lf,check:{jsonEquals(e,t){return Ia(e,t)},notJsonEquals(e,t){return!Ia(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return nu(e,t),e}catch(n){throw new y(jt(n),r)}},notJsonEquals(e,t,r){try{nu(e,t)}catch{return e}throw new y("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Ia(e,t))return e},notJsonEquals(e,t){if(!Ia(e,t))return e}},waitUntil:{jsonEquals:P(Lf.jsonEquals),notJsonEquals:P(Lf.notJsonEquals)}};function Rp(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Mb(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Mb.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var Sb=typeof WeakMap=="function"?WeakMap:Mb;function Lp(e,t,r){if(!r||Ts(e)||Ts(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}function sl(e,t,r,n){if(!(!r||Ts(e)||Ts(t))){var i=r.get(e);i?i.set(t,n):(i=new Sb,i.set(t,n),r.set(e,i))}}function An(e,t,r){if(r&&r.comparator)return jp(e,t,r);var n=Tb(e,t);return n!==null?n:jp(e,t,r)}function Tb(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Ts(e)||Ts(t)?!1:null}function jp(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new Sb;var n=r&&r.comparator,i=Lp(e,t,r.memoize);if(i!==null)return i;var o=Lp(t,e,r.memoize);if(o!==null)return o;if(n){var s=n(e,t);if(s===!1||s===!0)return sl(e,t,r.memoize,s),s;var a=Tb(e,t);if(a!==null)return a}var u=Rp(e);if(u!==Rp(t))return sl(e,t,r.memoize,!1),!1;sl(e,t,r.memoize,!0);var l=U6(e,t,u,r);return sl(e,t,r.memoize,l),l}function U6(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return An(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Nb(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Eo(e,t,n);case"RegExp":return z6(e,t);case"Generator":return V6(e,t,n);case"DataView":return Eo(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Eo(new Uint8Array(e),new Uint8Array(t),n);case"Set":return _p(e,t,n);case"Map":return _p(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return q6(e,t,n)}}function z6(e,t){return e.toString()===t.toString()}function _p(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){i.push([s,a])}),Eo(n.sort(),i.sort(),r)}function Eo(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(An(e[i],t[i],r)===!1)return!1;return!0}function V6(e,t,r){return Eo(Yd(e),Yd(t),r)}function W6(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function Up(e){if(W6(e))try{return Yd(e[Symbol.iterator]())}catch{return[]}return[]}function Yd(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function zp(e){var t=[];for(var r in e)t.push(r);return t}function Vp(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function Nb(e,t,r,n){var i=r.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(An(e[r[o]],t[r[o]],n)===!1)return!1;return!0}function q6(e,t,r){var n=zp(e),i=zp(t),o=Vp(e),s=Vp(t);if(n=n.concat(o),i=i.concat(s),n.length&&n.length===i.length)return Eo(Wp(n).sort(),Wp(i).sort())===!1?!1:Nb(e,t,n,r);var a=Up(e),u=Up(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Eo(a,u,r)):n.length===0&&a.length===0&&i.length===0&&u.length===0}function Ts(e){return e===null||typeof e!="object"}function Wp(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class vs extends y{name="DiffError";constructor(t,r,n,i){const o=F4(r,n);super([t,em(o)].join(`
`),i)}}function Pi(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const Ti={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new y(`Strict reference equality failed for 

${b(t)}

.`,r):new vs("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new y(`Strict reference INequality failed for 

${b(t)}

.`,r):new y(`

${b(e)}

strictly equals

${b(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new y(`Loose reference equality failed for 

${b(t)}

.`,r):new vs("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new y(`Loose reference INequality failed for 

${b(t)}

.`,r):new y(`

${b(e)}

loosely equals

${b(t)}

`,r)},deepEquals(e,t,r){if(!An(e,t,{comparator:Pi}))throw new vs("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(An(e,t,{comparator:Pi}))throw new y(`

${b(e)}

deeply equals

${b(t)}

`,r)}},Pb=Ti.deepEquals,Ib={assert:Ti,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return An(e,t,{comparator:Pi})},notDeepEquals(e,t){return!An(e,t,{comparator:Pi})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new y(`Strict reference equality failed for 

${b(t)}

.`,r):new vs("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new y(`Strict reference INequality failed for 

${b(t)}

.`,r):new y(`

${b(e)}

strictly equals

${b(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new y(`Loose reference equality failed for 

${b(t)}

.`,r):new vs("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new y(`Loose reference INequality failed for 

${b(t)}

.`,r):new y(`

${b(e)}

loosely equals

${b(t)}

`,r);return e},deepEquals(e,t,r){if(An(e,t,{comparator:Pi}))return e;throw new vs("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(An(e,t,{comparator:Pi}))throw new y(`

${b(e)}

deeply equals

${b(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(An(e,t,{comparator:Pi}))return e},notDeepEquals(e,t){if(!An(e,t,{comparator:Pi}))return e}},waitUntil:{strictEquals:P(Ti.strictEquals),notStrictEquals:P(Ti.notStrictEquals),looseEquals:P(Ti.looseEquals),notLooseEquals:P(Ti.notLooseEquals),deepEquals:P(Ti.deepEquals),notDeepEquals:P(Ti.notDeepEquals)}};function Ir(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function rn(e,t){return typeof t=="string"?t.includes(e):Ir(t,e)}const Xn={hasValue(e,t,r){if(!Ir(e,t))throw new y(`'${b(e)}' does not have value '${b(t)}'.`,r)},lacksValue(e,t,r){if(Ir(e,t))throw new y(`'${b(e)}' has value '${b(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new y(`'${b(e)}' does not have values '${b(t)}'.`,r)}if(n.length)throw new y(`'${b(e)}' does not have values '${b(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new y(`'${b(e)}' has values '${b(n)}'.`,r)},isIn(e,t,r){if(!rn(e,t))throw new y(`'${b(e)}'

is not in

${b(t)}.`,r)},isNotIn(e,t,r){if(rn(e,t))throw new y(`'${b(e)}'

is in

${b(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new y(`'${b(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new y(`'${b(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new y(`'${b(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new y(`'${b(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new y(`'${b(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new y(`'${b(e)}' is not empty.`,t)}}},Ob={assert:Xn,check:{hasValue(e,t){return Ir(e,t)},lacksValue(e,t){return!Ir(e,t)},hasValues(e,t){return t.every(r=>Ir(e,r))},lacksValues(e,t){return t.every(r=>!Ir(e,r))},isIn(e,t){return rn(e,t)},isNotIn(e,t){return!rn(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!Ir(e,t))throw new y(`'${b(e)}' does not have value '${b(t)}'.`,r);return e},lacksValue(e,t,r){if(Ir(e,t))throw new y(`'${b(e)}' has value '${b(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new y(`'${b(e)}' does not have values '${b(t)}'.`,r)}if(n.length)throw new y(`'${b(e)}' does not have values '${b(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new y(`'${b(e)}' has values '${b(n)}'.`,r);return e},isIn(e,t,r){if(!rn(e,t))throw new y(`'${b(e)}'

is not in

${b(t)}.`,r);return e},isNotIn(e,t,r){if(rn(e,t))throw new y(`'${b(e)}'

is in

${b(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new y(`'${b(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new y(`'${b(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new y(`'${b(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new y(`'${b(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new y(`'${b(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new y(`'${b(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(Ir(e,t))return e},lacksValue(e,t){if(!Ir(e,t))return e},hasValues(e,t){if(t.every(r=>Ir(e,r)))return e},lacksValues(e,t){if(!t.every(r=>Ir(e,r)))return e},isIn(e,t){if(rn(e,t))return e},isNotIn(e,t){if(!rn(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:P(Xn.hasValue),lacksValue:P(Xn.lacksValue),hasValues:P(Xn.hasValues),lacksValues:P(Xn.lacksValues),isIn:P(Xn.isIn),isNotIn:P(Xn.isNotIn),isEmpty:P(Xn.isEmpty),isNotEmpty:P(Xn.isNotEmpty)}},jf={isHttpStatus(e,t){if(!ri(e,k))throw new y(`${b(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(ri(e,k)){if(!rn(e,Tl[t]))throw new y(`${b(e)} is not a '${t}' HTTP status.`,r)}else throw new y(`${b(e)} is not a valid HTTP status.`,r)}},Bb={assert:jf,check:{isHttpStatus(e){return ri(e,k)},isHttpStatusCategory(e,t){return ri(e,k)&&rn(e,Tl[t])}},assertWrap:{isHttpStatus(e,t){if(!ri(e,k))throw new y(`${b(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(ri(e,k)){if(!rn(e,Tl[t]))throw new y(`${b(e)} is not a '${t}' HTTP status.`,r)}else throw new y(`${b(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(ri(e,k))return e},isHttpStatusCategory(e,t){if(ri(e,k)&&rn(e,Tl[t]))return e}},waitUntil:{isHttpStatus:P(jf.isHttpStatus),isHttpStatusCategory:P(jf.isHttpStatusCategory)}},_f={instanceOf(e,t,r){if(!(e instanceof t))throw new y(`'${b(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new y(`'${b(e)}' is an instance of '${t.name}'`,r)}},Rb={assert:_f,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new y(`'${b(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new y(`'${b(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:P(_f.instanceOf),notInstanceOf:P(_f.notInstanceOf)}},K6=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function qe(e,t){return K6.some(r=>{try{return r(e,t)}catch{return!1}})}const fo={isKeyOf(e,t,r){if(!qe(t,e))throw new y(`'${String(e)}' is not a key of '${b(t)}'.`,r)},isNotKeyOf(e,t,r){if(qe(t,e))throw new y(`'${String(e)}' is a key of '${b(t)}'.`,r)},hasKey(e,t,r){if(!qe(e,t))throw new y(`'${b(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(qe(e,t))throw new y(`'${b(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(i=>!qe(e,i));if(n.length)throw new y(`'${b(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(i=>qe(e,i));if(n.length)throw new y(`'${b(e)}' does not lack keys '${n.join(",")}'.`,r)}},Lb={assert:fo,check:{isKeyOf(e,t){return qe(t,e)},isNotKeyOf(e,t){return!qe(t,e)},hasKey:qe,lacksKey(e,t){return!qe(e,t)},hasKeys(e,t){return t.every(r=>qe(e,r))},lacksKeys(e,t){return t.every(r=>!qe(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!qe(t,e))throw new y(`'${String(e)}' is not a key of '${b(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(qe(t,e))throw new y(`'${String(e)}' is a key of '${b(t)}'.`,r);return e},hasKey(e,t,r){if(!qe(e,t))throw new y(`'${b(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(qe(e,t))throw new y(`'${b(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(i=>!qe(e,i));if(n.length)throw new y(`'${b(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(i=>qe(e,i));if(n.length)throw new y(`'${b(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(qe(t,e))return e},isNotKeyOf(e,t){if(!qe(t,e))return e},hasKey(e,t){if(qe(e,t))return e},lacksKey(e,t){if(!qe(e,t))return e},hasKeys(e,t){if(t.every(r=>qe(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!qe(e,r)))return e}},waitUntil:{isKeyOf:P(fo.isKeyOf),isNotKeyOf:P(fo.isNotKeyOf),hasKey:P(fo.hasKey),lacksKey:P(fo.lacksKey),hasKeys:P(fo.hasKeys),lacksKeys:P(fo.lacksKeys)}};function G6(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:et(e).length)<t)throw new y(`Length '${e.length}' is not at least '${t}'.`,r)}function Z6(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:et(e).length)!==t)throw new y(`Length '${e.length}' is not exactly '${t}'.`,r)}const Uf={isLengthAtLeast:G6,isLengthExactly:Z6},jb={assert:Uf,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:et(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:et(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:et(e).length)<t)throw new y(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:et(e).length)!==t)throw new y(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:et(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:et(e).length)===t)return e})},waitUntil:{isLengthAtLeast:P(Uf.isLengthAtLeast),isLengthExactly:P(Uf.isLengthExactly)}},H6={never(e){throw new y("This code should not have executed.",e)}},_b={assert:H6,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},zf={isDefined(e,t){if(e==null)throw new y(`'${b(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new y(`'${b(e)}' is not a nullish.`,t)}},Ub={assert:zf,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new y(`'${b(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new y(`'${b(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:P(zf.isDefined),isNullish:P(zf.isNullish)}},wr={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new y(`${e} is not within the bounds ${b({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new y(`${e} is not outside the bounds ${b({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new y(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new y(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new y(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new y(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new y(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new y(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new y(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new y(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new y(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new y(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new y(`${e} is within ±${r} of ${t}`,n)}},zb={assert:wr,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new y(`${e} is not within the bounds ${b({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new y(`${e} is not outside the bounds ${b({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new y(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new y(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new y(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new y(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new y(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new y(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new y(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new y(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new y(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new y(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new y(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:P(wr.isInBounds),isOutBounds:P(wr.isOutBounds),isInteger:P(wr.isInteger),isNotInteger:P(wr.isNotInteger),isAbove:P(wr.isAbove),isAtLeast:P(wr.isAtLeast),isBelow:P(wr.isBelow),isAtMost:P(wr.isAtMost),isNaN:P(wr.isNaN),isFinite:P(wr.isFinite),isInfinite:P(wr.isInfinite),isApproximately:P(wr.isApproximately),isNotApproximately:P(wr.isNotApproximately)}};function Y6(e,t,r,n,i){return Mu(...Pc(e,t,r,n,i),!1)}function Pc(e,t,r,n,i){const o=Array.isArray(r);return[o?e:Pb,o?t:e,o?r:t,o?n:r,o?i:n]}function Mu(e,t,r,n,i,o){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,n),o?a(l):a()}catch(l){u(new y(`Output from '${t.name}' did not produce expected output. ${jt(l)}`,i))}});try{return e(s,n),o?s:void 0}catch(a){throw new y(`Output from '${t.name}' did not produce expected output. ${jt(a)}`,i)}}function J6(e,t,r,n,i){try{const o=Mu(...Pc(e,t,r,n,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function X6(e,t,r,n,i){return Mu(...Pc(e,t,r,n,i),!0)}function Q6(e,t,r,n,i){try{const o=Mu(...Pc(e,t,r,n,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const Vf=Symbol("not set");async function eD(e,t,r,n,i,o){const s=Array.isArray(r),a=s?e:Pb,u=s?t:e,l=s?r:t,c=s?n:r,f=xb(s?i:n),d=s?o:i,m=Ss(f.timeout,{milliseconds:!0}).milliseconds,h=Ss(f.interval,{milliseconds:!0});let p=Vf,$;async function v(){try{p=await Mu(a,u,l,c,void 0,!0)}catch(S){p=Vf,$=at(S)}}const A=Date.now();for(;p===Vf;)if(await v(),await So(h),Date.now()-A>=m)throw kc($,Qs(d,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return p}const tD={output:Y6},Vb={assert:tD,check:{output:J6},assertWrap:{output:X6},checkWrap:{output:Q6},waitUntil:{output:eD}},xa={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new y(`'${b(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new y(`'${b(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new y(`'${b(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new y(`'${b(e)}' is not a Primitive.`,t)}},Wb={assert:xa,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new y(`'${b(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new y(`'${b(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new y(`'${b(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new y(`'${b(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:P(xa.isNotPrimitive),isNotPropertyKey:P(xa.isNotPropertyKey),isPrimitive:P(xa.isPrimitive),isPropertyKey:P(xa.isPropertyKey)}},Aa={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new y(`'${b(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new y(`'${b(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new y(`'${b(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new y(`'${b(e)}' is a Promise.`,t)}},qb={assert:Aa,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new y(`'${b(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new y(`'${b(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new y(`'${b(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new y(`'${b(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:P(Aa.isPromiseLike,!0),isNotPromiseLike:P(Aa.isNotPromiseLike,!0),isPromise:P(Aa.isPromise,!0),isNotPromise:P(Aa.isNotPromise,!0)}},Wf={matches(e,t,r){if(!t.test(e))throw new y(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new y(`'${e}' matches ${t}`,r)}},Kb={assert:Wf,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new y(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new y(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:P(Wf.matches,!0),mismatches:P(Wf.mismatches,!0)}},Je={isArray(e,t){if(!Array.isArray(e))throw new y(`'${b(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new y(`'${b(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new y(`'${b(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new y(`'${b(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new y(`'${b(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new y(`'${b(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new y(`'${b(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new y(`'${b(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new y(`'${b(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new y(`'${b(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new y(`'${b(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new y(`'${b(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new y(`'${b(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new y(`'${b(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new y(`'${b(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new y(`'${b(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new y(`'${b(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new y(`'${b(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new y(`'${b(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new y(`'${b(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new y(`'${b(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new y(`'${b(e)}' is a undefined.`,t)}},Gb={assert:Je,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new y(`'${b(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new y(`'${b(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new y(`'${b(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new y(`'${b(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new y(`'${b(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new y(`'${b(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new y(`'${b(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new y(`'${b(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new y(`'${b(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new y(`'${b(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new y(`'${b(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new y(`'${b(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new y(`'${b(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new y(`'${b(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new y(`'${b(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new y(`'${b(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new y(`'${b(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new y(`'${b(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new y(`'${b(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new y(`'${b(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new y(`'${b(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new y(`'${b(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:P(Je.isArray),isBigInt:P(Je.isBigInt),isBoolean:P(Je.isBoolean),isFunction:P(Je.isFunction),isNull:P(Je.isNull),isNumber:P(Je.isNumber),isObject:P(Je.isObject),isPlainObject:P(Je.isPlainObject),isString:P(Je.isString),isSymbol:P(Je.isSymbol),isUndefined:P(Je.isUndefined),isNotArray:P(Je.isNotArray),isNotBigInt:P(Je.isNotBigInt),isNotBoolean:P(Je.isNotBoolean),isNotFunction:P(Je.isNotFunction),isNotNull:P(Je.isNotNull),isNotNumber:P(Je.isNotNumber),isNotObject:P(Je.isNotObject),isNotPlainObject:P(Je.isNotPlainObject),isNotString:P(Je.isNotString),isNotSymbol:P(Je.isNotSymbol),isNotUndefined:P(Je.isNotUndefined)}};var xr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(xr||(xr={}));function tm(e,t,r){rm(e,{noError:"No error.",notInstance:`'${b(e)}' is not an error instance.`},t,r)}function qp(e,t,r){rm(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${b(e)}' is not an error instance.`},t,r)}function rm(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new y(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=jt(e);if(typeof r.matchMessage=="string"){if(!Db(i,r.matchMessage))throw new y(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new y(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new y(t.notInstance,n);else throw new y(t.noError,n)}function Kp(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=jt(e);if(typeof t.matchMessage=="string"){if(!Db(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Ic(e,t,r,n){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,a)=>{try{await o}catch(u){i=at(u)}try{qp(i,r,n),e===xr.Assert?s():e===xr.Check?s(!0):s(i)}catch(u){e===xr.CheckWrap?s(void 0):e===xr.Check?s(!1):a(at(u))}})}catch(o){i=at(o)}try{return qp(i,r,n),e===xr.Check?!0:e!==xr.Assert?i:void 0}catch(o){if(e===xr.CheckWrap)return;if(e===xr.Check)return!1;throw o}}function rD(e,t,r){return Ic(xr.Assert,e,t,r)}function nD(e,t){return Ic(xr.Check,e,t)}function iD(e,t,r){return Ic(xr.AssertWrap,e,t,r)}function oD(e,t,r){return Ic(xr.CheckWrap,e,t,r)}const sD=P(tm);function aD(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${b(o)}'`);return sD(i,async()=>{try{await o();return}catch(u){return at(u)}},a,s)}const uD={throws:rD,isError:tm},Zb={assert:uD,check:{throws:nD,isError(e,t){return Kp(e,t)}},assertWrap:{throws:iD,isError(e,t,r){return rm(e,{noError:"No error.",notInstance:`'${b(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:oD,isError(e,t){if(Kp(e,t))return e}},waitUntil:{throws:aD,isError:P(tm)}},Ii=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,qf={isUuid(e,t){if(!String(e).match(Ii))throw new y(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Ii))throw new y(`'${String(e)}' is a UUID.`,t)}},Hb={assert:qf,check:{isUuid(e){return!!String(e).match(Ii)},isNotUuid(e){return!String(e).match(Ii)}},assertWrap:{isUuid(e,t){if(!String(e).match(Ii))throw new y(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Ii))throw new y(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Ii))return e},isNotUuid(e){if(!String(e).match(Ii))return e}},waitUntil:{isUuid:P(qf.isUuid),isNotUuid:P(qf.isNotUuid)}},lD={..._b.assert,...Ab.assert,...Eb.assert,...kb.assert,...Cb.assert,...Bb.assert,...Rb.assert,...Fb.assert,...Lb.assert,...jb.assert,...Ub.assert,...zb.assert,...Vb.assert,...Wb.assert,...qb.assert,...Kb.assert,...Gb.assert,...Ib.assert,...Zb.assert,...Hb.assert,...Ob.assert},nm=[Ab,Eb,kb,Cb,Bb,Rb,Fb,Lb,jb,_b,Ub,zb,Vb,Wb,qb,Kb,Gb,Ib,Zb,Hb,Ob],cD=Object.assign({},...nm.map(e=>e.check)),F=Object.assign(function(t){return!!t},cD);function fD(e,t,r){return Ol(e,t,r,new Set)}function Ol(e,t,r,n){if(e=Gp(e),t=Gp(t),F.isObject(e)&&F.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Ol(et(e).sort(),et(t).sort(),r,n))return!1;let i=!1;const o=et(e).map(s=>{const a=Ol(e[s],t[s],r,n);return F.isPromise(a)&&(i=!0),a});return Zp(i,o)}else if(F.isArray(e)&&F.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,a)=>{const u=Ol(s,t[a],r,n);return F.isPromise(u)&&(i=!0),u});return Zp(i,o)}else return r(e,t)}function Gp(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Zp(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(F.isTrue))}catch(i){n(at(i))}}):t.every(F.isTrue)}const dD=Object.assign({},...nm.map(e=>e.assertWrap)),Sn=Object.assign(function(t,r){if(!t)throw new y("Assertion failed.",r);return t},dD);function mD(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const hD={tsType:mD},pD={assert:hD},gD={fail:e=>{throw new y("Failure triggered.",e)}},yD={...pD.assert,...lD,...gD},Bt=Object.assign(function(t,r){if(!t)throw new y("Assertion failed.",r)},yD),bD=Object.assign({},...nm.map(e=>e.checkWrap)),Yb=Object.assign(function(t){if(t)return t},bD);function wD(e,t){return F.hasKey(e,"entryType")&&e.entryType===t}function mo(e,t){return e.controlType===t}var Z;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(Z||(Z={}));const Jb=Symbol("any-type"),$D={[Z.Checkbox]:!1,[Z.Color]:"",[Z.Custom]:void 0,[Z.Dropdown]:"",[Z.Hidden]:Jb,[Z.Number]:0,[Z.Text]:""};function vD(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{if(i.controlType===Z.Custom)return;const o=$D[i.controlType];o!==Jb&&(typeof o!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function DD(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return F.isPromise(i)?new Promise(async(o,s)=>{try{const a=await i;e.set(n,a),o(a)}catch(a){s(at(a))}}):(e.set(n,i),i)}}function _o(e,t,r){if(t in e)return e[t];{const n=r();return F.isPromise(n)?new Promise(async(i,o)=>{try{const s=await n;e[t]=s,i(s)}catch(s){o(at(s))}}):(e[t]=n,n)}}function To(e){return et(e).map(t=>[t,e[t]])}function iu(e){return Object.fromEntries(e)}function vi(e,t,r){return e.reduce((n,i,o,s)=>{const a=t(i,o,s);return r(a,i,o,s)&&n.push(a),n},[])}function xD(e,t,r={}){return e.reduce((n,i,o,s)=>{const a=t(i,o,s);return _o(n,a,()=>[]).push(i),n},{})}function Oc(e,t,r={}){try{let n=!1;const i=e.map((o,s,a)=>{const u=t(o,s,a);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(F.isTruthy);return n?new Promise(async(o,s)=>{try{const a=vi(await Promise.all(i),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},F.isTruthy);o(iu(a))}catch(a){s(at(a))}}):iu(i)}catch(n){throw at(n)}}function AD(e){return Object.entries(e).reverse().filter(([,t])=>t.length).reduce((t,[r,n])=>(t.length||(t=[{}]),n.flatMap(i=>t.map(o=>({...o,[r]:i})))),[])}function ED(e){return Array.isArray(e)?e:[e]}function CD({min:e,max:t}){const{min:r,max:n}=q0({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/i)*i,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,f,d)=>c+f*256**d,0);while(l>=a);return r+l%i}const Hp=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Co(e=16){let t="";for(let r=0;r<e;r++){const n=CD({min:0,max:Hp.length-1});t+=Hp[n]}return t}function Xb(e){if(F.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>jt(t).trim()).join(`
`))}function kD(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):F.hasKey(t,"fallbackValue")?t.fallbackValue:at(n)):r}catch(r){return t.handleError?t.handleError(r):F.hasKey(t,"fallbackValue")?t.fallbackValue:at(r)}}function FD(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const MD="modulepreload",SD=function(e){return"/vira/book/"+e},Yp={},Ql=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");i=u(r.map(l=>{if(l=SD(l),l in Yp)return;Yp[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":MD,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((m,h)=>{d.addEventListener("load",m),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};var kt;(function(e){e.Standard="stdout",e.Error="stderr"})(kt||(kt={}));var ae;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ae||(ae={}));async function TD(){return await py({async[Fn.Node](){const e=(await Ql(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[ae.Bold]:e.bold.open,[ae.Debug]:e.blueBright.open,[ae.Error]:e.red.open,[ae.Faint]:e.gray.open,[ae.Info]:e.cyan.open,[ae.Mutate]:e.magenta.open,[ae.NormalWeight]:"\x1B[22m",[ae.Plain]:"",[ae.Reset]:e.reset.open,[ae.Success]:e.green.open,[ae.Warning]:e.yellow.open}},[Fn.Web](){return Promise.resolve({[ae.Bold]:"font-weight: bold",[ae.Debug]:"color: blue",[ae.Error]:"color: red",[ae.Faint]:"color: grey",[ae.Info]:"color: teal",[ae.Mutate]:"color: magenta",[ae.NormalWeight]:"",[ae.Plain]:"",[ae.Reset]:"",[ae.Success]:"color: green",[ae.Warning]:"color: orange"})}})}const Pr=await TD(),ND={[ae.Bold]:{colors:[Pr.bold],logType:kt.Standard},[ae.Debug]:{colors:[Pr.debug],logType:kt.Standard},[ae.Faint]:{colors:[Pr.faint],logType:kt.Standard},[ae.Info]:{colors:[Pr.info],logType:kt.Standard},[ae.Mutate]:{colors:[Pr.mutate,Pr.bold],logType:kt.Standard},[ae.NormalWeight]:{colors:[Pr.normalWeight],logType:kt.Standard},[ae.Plain]:{colors:[],logType:kt.Standard},[ae.Reset]:{colors:[Pr.reset],logType:kt.Standard},[ae.Success]:{colors:[Pr.success,Pr.bold],logType:kt.Standard},[ae.Error]:{colors:[Pr.error,Pr.bold],logType:kt.Error},[ae.Warning]:{colors:[Pr.warning],logType:kt.Error}};function Fr({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Ds({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function PD(e,t){try{let r=!1;const n=To(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(F.isTruthy);return r?new Promise(async(i,o)=>{try{const s=vi(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},F.isTruthy);i(iu(s))}catch(s){o(at(s))}}):iu(n)}catch(r){throw at(r)}}function ID(e,t){return PD(e,(r,n)=>{const i=n,o=t(n,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function Qb(e,...t){const r={...e};return t.forEach(n=>{n&&To(n).forEach(([i,o])=>{o!=null&&(r[i]=o)})}),r}function OD(e){return e.replace(/,/g,"")}function BD(e){return typeof e=="number"?e:Number(typeof e=="string"?OD(e):e)}function RD(e){const t=LD(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function LD(e){const t=BD(e);if(!isNaN(t))return t}const e5="px";function ou(e){return im({value:e,suffix:e5})}function jD(e){return RD(t5({value:e,suffix:e5}))}function im({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function t5({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function _D(){return await py({async[Fn.Node](){const{inspect:e}=await Ql(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),i.join(`
`),n.omitColors?"":n.colorConfig[ae.Reset].colors.join("")].join(""),css:void 0}}},[Fn.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:vi(r.colorConfig[t].colors,s=>t5({value:s,suffix:";"}),F.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?jt(s):b(s)).join(`
`),r.omitColors?"":r.colorConfig[ae.Reset].colors.join("")].join(""),css:n}}}})}const UD=await _D(),zD={colorConfig:ND,omitColors:!1},VD=r5({[kt.Error](){},[kt.Standard](){}});function r5(e,t){const r=Qb(zD,t);function n(o){e[r.colorConfig[o.colorKey].logType](UD({...o,options:r}))}const i=ID(ae,o=>(...s)=>n({args:s,colorKey:o}));return{...i,if(o){return o?i:VD}}}const WD=W0(Fn.Node)?{[kt.Error]({text:e}){process.stderr.write(e+`
`)},[kt.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[kt.Error]({text:e,css:t}){console.error(Fr({value:e,prefix:"%c"}),t)},[kt.Standard]({text:e,css:t}){console.log(Fr({value:e,prefix:"%c"}),t)}},om=r5(WD);function qD(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}function KD(e,{digits:t}){const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function GD({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const i=wb(vb(t,{caseSensitive:r}),"g"),o=[];return e.replace(i,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);o.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),o}function ZD(e,t,{caseSensitive:r}){const n=GD({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),i=vb(t,{caseSensitive:r});return e.split(i).reduce((s,a,u)=>{const l=n[u],c=s.concat(a);if(l){const f=e.slice(l.index,l.index+l.length);return c.concat(f)}else return c},[])}function HD(e,t){return e.split(t)}function Jp(e,t){const{min:r,max:n}=q0(t);if(t.takeOverflow){const i=n-r+1,o=(e-r)%i;return o<0?r+i+o:r+o}else return e>n?r:e<r?n:e}function pr(e,t){let r=!1;const n=et(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(r=!0),i[o]=s,i},{});return r?new Promise(async(i,o)=>{try{await Promise.all(et(n).map(async s=>{const a=await n[s];n[s]=a})),i(n)}catch(s){o(at(s))}}):n}function Bc(e,t){const r=To(e).filter(([n,i])=>t(n,i,e));return iu(r)}function YD(e,t){return Bc(e,r=>!t.includes(r))}function JD(e,t){return Bc(e,r=>t.includes(r))}function Jd(e){return et(e).map(t=>e[t])}function n5(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var yi;(function(e){e.Upper="upper",e.Lower="lower"})(yi||(yi={}));const XD={firstLetterCase:yi.Lower};function QD(e,t){if(!e.length)return"";const r=e[0];return(t===yi.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function ex(e){return e.toLowerCase()!==e.toUpperCase()}function Xp(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if(ex(n)){if(t===yi.Upper&&n!==n.toUpperCase()||t===yi.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}function tx(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""}),i=Qb(XD,t);return QD(n,i.firstLetterCase)}function rx(e){return e.split("").reduce((r,n,i,o)=>{const s=i>0&&o[i-1]||"",a=i<o.length-1&&o[i+1]||"",u=Xp(s,yi.Lower,{rejectNoCaseCharacters:!0})||Xp(a,yi.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!u?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function nx(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function ix({value:e,wrapper:t}){return Fr({value:im({value:e,suffix:t}),prefix:t})}function Rn(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function sm(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class ox{listeners={};universalListeners=new Map;getListenerCount(){return Jd(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function i(o,s){r.once&&n(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const i=F.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(r)||!1;function s(a,u){n.once&&o(),r(a,u)}return _o(this.listeners,i,()=>new Map).set(r,{listener:s,removeListener:o}),o}removeListener(t,r){const n=F.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const o=i.get(r);return o?o.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=Jd(this.listeners).reduce((n,i)=>{const o=i.size||0;return i.clear(),n+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class am extends ox{}function um(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function Xd(e,t,r){return um(globalThis,e,t,r)}function lm(e,t){return su(e.title),e.parent?[...lm(e.parent),su(e.parent.title)].concat([]):[]}function su(e){return n5(e).toLowerCase().replaceAll(/\s/g,"-")}function sx({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const ax=/[/?#&=]/;function i5(e){const t=e.match(ax);return e.trim()?su(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const ux={[qt.ElementExample]:()=>[],[qt.Page]:e=>[i5(e.title),...vD(e.controls,e.title)].filter(F.isTruthy),[qt.Root]:()=>[]},ec="_isBookTreeNode",o5=new Map;function lx(e){return o5.get(e)}function cx(e,t){DD(o5,e,()=>t)}function xs(e,t){return s5(e)&&e.entry.entryType===t}function s5(e){return!!(F.hasKeys(e,[ec,"entry"])&&e[ec])}function fx(){return{[ec]:!0,entry:{entryType:qt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function dx({entries:e,debug:t}){const r=lx(e);if(r)return r;const n=fx();e.forEach(s=>cm({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const i=a5(n),o={tree:n,flattenedNodes:i};return cx(e,o),t&&console.info("element-book tree:",n),o}function mx(e,t,r){if(!t.parent)return e;const n=Qd(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),cm({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=Qd(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${lm(t).join(" > ")}`);return i}function cm({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=ux[t.entryType](t);t.errors.push(...i);const o=mx(e,t,r),s=su(t.title),a=o.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[ec]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};o.children[s]=u,wD(t,qt.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>cm({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function Qd(e,t){const r=s5(e)?e.fullUrlBreadcrumbs.slice(0,-1):lm(e);return r.length?r.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function a5(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>a5(i));return[e,...r].flat()}function fm(e,t){return dm(e,["",...t],void 0)}function dm(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const o=e.children[i||""],s=o&&dm(o,n,r);return{...e.controls,...s}}function hx(e,t,r){const n={...e};return dm(n,["",...t],r),n}function u5(e,t){const r=t?.controls||(xs(e,qt.Page)?pr(e.entry.controls,(i,o)=>o.initValue):{});return{children:pr(e.children,(i,o)=>u5(o,t?.children?.[o.urlBreadcrumb])),controls:r}}function we(e){const t={...e,entryType:qt.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const i={...n,isVertical:t.useVerticalExamples,entryType:qt.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),i5(n.title)].filter(F.isTruthy)};r.add(n.title),t.elementExamples[su(i.title)]=i}}),t}var Ar;(function(e){e.Search="search",e.Book="book"})(Ar||(Ar={}));function e0(e){return e[0]===Ar.Book?"":e[1]?decodeURIComponent(e[1]):""}const Ns={hash:void 0,paths:[Ar.Book],search:void 0};const Bl=globalThis,mm=Bl.ShadowRoot&&(Bl.ShadyCSS===void 0||Bl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hm=Symbol(),Qp=new WeakMap;let l5=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==hm)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(mm&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Qp.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Qp.set(r,t))}return t}toString(){return this.cssText}};const Be=e=>new l5(typeof e=="string"?e:e+"",void 0,hm),Rl=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new l5(r,e,hm)},px=(e,t)=>{if(mm)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Bl.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},eg=mm?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Be(r)})(e):e;const{is:gx,defineProperty:yx,getOwnPropertyDescriptor:bx,getOwnPropertyNames:wx,getOwnPropertySymbols:$x,getPrototypeOf:vx}=Object,Rc=globalThis,tg=Rc.trustedTypes,Dx=tg?tg.emptyScript:"",xx=Rc.reactiveElementPolyfillSupport,Wa=(e,t)=>e,tc={toAttribute(e,t){switch(t){case Boolean:e=e?Dx:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},pm=(e,t)=>!gx(e,t),rg={attribute:!0,type:String,converter:tc,reflect:!1,useDefault:!1,hasChanged:pm};Symbol.metadata??=Symbol("metadata"),Rc.litPropertyMetadata??=new WeakMap;let fs=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=rg){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&yx(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:o}=bx(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??rg}static _$Ei(){if(this.hasOwnProperty(Wa("elementProperties")))return;const t=vx(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Wa("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wa("properties"))){const r=this.properties,n=[...wx(r),...$x(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(eg(i))}else t!==void 0&&r.push(eg(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return px(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const o=(n.converter?.toAttribute!==void 0?n.converter:tc).toAttribute(r,n.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:tc;this._$Em=i;const a=s.fromAttribute(r,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,r,n,i=!1,o){if(t!==void 0){const s=this.constructor;if(i===!1&&(o=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??pm)(o,r)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,o]of n){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};fs.elementStyles=[],fs.shadowRootOptions={mode:"open"},fs[Wa("elementProperties")]=new Map,fs[Wa("finalized")]=new Map,xx?.({ReactiveElement:fs}),(Rc.reactiveElementVersions??=[]).push("2.1.2");const gm=globalThis,ng=e=>e,rc=gm.trustedTypes,ig=rc?rc.createPolicy("lit-html",{createHTML:e=>e}):void 0,c5="$lit$",Bi=`lit$${Math.random().toFixed(9).slice(2)}$`,f5="?"+Bi,Ax=`<${f5}>`,No=document,au=()=>No.createComment(""),uu=e=>e===null||typeof e!="object"&&typeof e!="function",ym=Array.isArray,Ex=e=>ym(e)||typeof e?.[Symbol.iterator]=="function",Kf=`[ 	
\f\r]`,Ea=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,og=/-->/g,sg=/>/g,ho=RegExp(`>|${Kf}(?:([^\\s"'>=/]+)(${Kf}*=${Kf}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ag=/'/g,ug=/"/g,d5=/^(?:script|style|textarea|title)$/i,Cx=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),kx=Cx(1),zr=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),lg=new WeakMap,Do=No.createTreeWalker(No,129);function m5(e,t){if(!ym(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ig!==void 0?ig.createHTML(t):t}const Fx=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=Ea;for(let a=0;a<r;a++){const u=e[a];let l,c,f=-1,d=0;for(;d<u.length&&(s.lastIndex=d,c=s.exec(u),c!==null);)d=s.lastIndex,s===Ea?c[1]==="!--"?s=og:c[1]!==void 0?s=sg:c[2]!==void 0?(d5.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=ho):c[3]!==void 0&&(s=ho):s===ho?c[0]===">"?(s=i??Ea,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?ho:c[3]==='"'?ug:ag):s===ug||s===ag?s=ho:s===og||s===sg?s=Ea:(s=ho,i=void 0);const m=s===ho&&e[a+1].startsWith("/>")?" ":"";o+=s===Ea?u+Ax:f>=0?(n.push(l),u.slice(0,f)+c5+u.slice(f)+Bi+m):u+Bi+(f===-2?a:m)}return[m5(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class lu{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=t.length-1,u=this.parts,[l,c]=Fx(t,r);if(this.el=lu.createElement(l,n),Do.currentNode=this.el.content,r===2||r===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Do.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(c5)){const d=c[s++],m=i.getAttribute(f).split(Bi),h=/([.?@])?(.*)/.exec(d);u.push({type:1,index:o,name:h[2],strings:m,ctor:h[1]==="."?Sx:h[1]==="?"?Tx:h[1]==="@"?Nx:Lc}),i.removeAttribute(f)}else f.startsWith(Bi)&&(u.push({type:6,index:o}),i.removeAttribute(f));if(d5.test(i.tagName)){const f=i.textContent.split(Bi),d=f.length-1;if(d>0){i.textContent=rc?rc.emptyScript:"";for(let m=0;m<d;m++)i.append(f[m],au()),Do.nextNode(),u.push({type:2,index:++o});i.append(f[d],au())}}}else if(i.nodeType===8)if(i.data===f5)u.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(Bi,f+1))!==-1;)u.push({type:7,index:o}),f+=Bi.length-1}o++}}static createElement(t,r){const n=No.createElement("template");return n.innerHTML=t,n}}function Ps(e,t,r=e,n){if(t===zr)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const o=uu(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=Ps(e,i._$AS(e,t.values),i,n)),t}class Mx{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??No).importNode(r,!0);Do.currentNode=i;let o=Do.nextNode(),s=0,a=0,u=n[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new ia(o,o.nextSibling,this,t):u.type===1?l=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(l=new Px(o,this,t)),this._$AV.push(l),u=n[++a]}s!==u?.index&&(o=Do.nextNode(),s++)}return Do.currentNode=No,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class ia{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ps(this,t,r),uu(t)?t===Q||t==null||t===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==zr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ex(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&uu(this._$AH)?this._$AA.nextSibling.data=t:this.T(No.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=lu.createElement(m5(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const o=new Mx(i,this),s=o.u(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(t){let r=lg.get(t.strings);return r===void 0&&lg.set(t.strings,r=new lu(t)),r}k(t){ym(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new ia(this.O(au()),this.O(au()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=ng(t).nextSibling;ng(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Lc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,o){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Q}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=Ps(this,t,r,0),s=!uu(t)||t!==this._$AH&&t!==zr,s&&(this._$AH=t);else{const a=t;let u,l;for(t=o[0],u=0;u<o.length-1;u++)l=Ps(this,a[n+u],r,u),l===zr&&(l=this._$AH[u]),s||=!uu(l)||l!==this._$AH[u],l===Q?t=Q:t!==Q&&(t+=(l??"")+o[u+1]),this._$AH[u]=l}s&&!i&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Sx extends Lc{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class Tx extends Lc{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class Nx extends Lc{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){if((t=Ps(this,t,r,0)??Q)===zr)return;const n=this._$AH,i=t===Q&&n!==Q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==Q&&(n===Q||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Px{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ps(this,t)}}const Ix={I:ia},Ox=gm.litHtmlPolyfillSupport;Ox?.(lu,ia),(gm.litHtmlVersions??=[]).push("3.3.2");const Bx=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const o=r?.renderBefore??null;n._$litPart$=i=new ia(t.insertBefore(au(),o),o,void 0,r??{})}return i._$AI(e),i};const bm=globalThis;let qa=class extends fs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bx(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return zr}};qa._$litElement$=!0,qa.finalized=!0,bm.litElementHydrateSupport?.({LitElement:qa});const Rx=bm.litElementPolyfillSupport;Rx?.({LitElement:qa});(bm.litElementVersions??=[]).push("4.2.2");function fn(e){if(F.isObject(e))return pr(e,(r,n)=>{if(!F.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(rx(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const o=n,s=r.startsWith("--")?Be(r):r.startsWith("-")?Rl`-${Be(r)}`:Rl`--${Be(r)}`;return{name:s,value:Rl`var(${s}, ${Be(o)})`,default:String(o)}});throw new TypeError(`Invalid setup input for '${fn.name}' function.`)}function h5({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function Lx({onElement:e,forCssVar:t,includeCascade:r}){return(r?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(t.name)).trim()}const xe=fn({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),jx={nav:{hover:{background:xe["element-book-nav-hover-background-color"],foreground:xe["element-book-nav-hover-foreground-color"]},active:{background:xe["element-book-nav-active-background-color"],foreground:xe["element-book-nav-active-foreground-color"]},selected:{background:xe["element-book-nav-selected-background-color"],foreground:xe["element-book-nav-selected-foreground-color"]}},accent:{icon:xe["element-book-accent-icon-color"]},page:{background:xe["element-book-page-background-color"],backgroundFaint1:xe["element-book-page-background-faint-level-1-color"],backgroundFaint2:xe["element-book-page-background-faint-level-2-color"],foreground:xe["element-book-page-foreground-color"],foregroundFaint1:xe["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:xe["element-book-page-foreground-faint-level-2-color"]}};function _x(e,t){p5(e,t,jx)}function t0(e){return F.hasKey(e,"_$cssResult$")}function cg(e){return F.hasKeys(e,["name","value","default"])&&F.isString(e.default)&&t0(e.name)&&t0(e.value)}function p5(e,t,r){Object.entries(t).forEach(([n,i])=>{const o=r[n];if(!o)throw new Error(`no nestedCssVar at key '${n}'`);if(t0(i)){if(!cg(o))throw new Error(`got a CSS result at '${n}' but no CSS var`);h5({forCssVar:o,onElement:e,toValue:String(i)})}else{if(cg(o))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);p5(e,i,o)}})}function Ge(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,i=t[0].map((s,a)=>t.map(u=>u[a])),o=e.map(s=>i.map(a=>{let u=0;if(!Array.isArray(s)){for(let l of a)u+=s*l;return u}for(let l=0;l<s.length;l++)u+=s[l]*(a[l]||0);return u}));return r===1&&(o=o[0]),n===1?o.map(s=>s[0]):o}function Su(e){return ji(e)==="string"}function ji(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function nc(e,{precision:t,unit:r}){return Wi(e)?"none":g5(e,t)+(r??"")}function Wi(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function bt(e){return Wi(e)?0:e}function g5(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}const Ux={deg:1,grad:.9,rad:180/Math.PI,turn:360};function y5(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let o=e.match(t);if(o){let s=[];return o[2].replace(i,(a,u)=>{let l=u.match(n),c=u;if(l){let f=l[0],d=c.slice(0,-f.length);f==="%"?(c=new Number(d/100),c.type="<percentage>"):(c=new Number(d*Ux[f]),c.type="<angle>",c.unit=f)}else r.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),s.push(c)}),{name:o[1].toLowerCase(),rawName:o[1],rawArgs:o[2],args:s}}}function b5(e){return e[e.length-1]}function cu(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function w5(e,t,r){return(r-e)/(t-e)}function wm(e,t,r){return cu(t[0],t[1],w5(e[0],e[1],r))}function $5(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let i=new String(n[1]);return i.range=[+n[2],+n[3]],i}return r}))}function v5(e,t,r){return Math.max(Math.min(r,t),e)}function jc(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function zn(e,t){return jc(Math.abs(e)**t,e)}function $m(e,t){return t===0?0:e/t}function D5(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}var zx=Object.freeze({__proto__:null,bisectLeft:D5,clamp:v5,copySign:jc,interpolate:cu,interpolateInv:w5,isNone:Wi,isString:Su,last:b5,mapRange:wm,multiplyMatrices:Ge,parseCoordGrammar:$5,parseFunction:y5,serializeNumber:nc,skipNone:bt,spow:zn,toPrecision:g5,type:ji,zdiv:$m});let Vx=class{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}};const qi=new Vx;var Vr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const dr={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function r0(e){return Array.isArray(e)?e:dr[e]}function ic(e,t,r,n={}){if(e=r0(e),t=r0(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(qi.run("chromatic-adaptation-start",i),i.M||(i.W1===dr.D65&&i.W2===dr.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===dr.D50&&i.W2===dr.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),qi.run("chromatic-adaptation-end",i),i.M)return Ge(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Wx=new Set(["<number>","<percentage>","<angle>"]);function fg(e,t,r,n){return Object.entries(e.coords).map(([o,s],a)=>{let u=t.coordGrammar[a],l=n[a],c=l?.type,f;if(l.none?f=u.find(h=>Wx.has(h)):f=u.find(h=>h==c),!f){let h=s.name||o;throw new TypeError(`${c??l.raw} not allowed for ${h} in ${r}()`)}let d=f.range;c==="<percentage>"&&(d||=[0,1]);let m=s.range||s.refRange;return d&&m&&(n[a]=wm(d,m,n[a])),f})}function x5(e,{meta:t}={}){let r={str:String(e)?.trim()};if(qi.run("parse-start",r),r.color)return r.color;if(r.parsed=y5(r.str),r.parsed){let n=r.parsed.name;if(n==="color"){let i=r.parsed.args.shift(),o=i.startsWith("--")?i.substring(2):`--${i}`,s=[i,o],a=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let c of K.all){let f=c.getFormat("color");if(f&&(s.includes(f.id)||f.ids?.filter(d=>s.includes(d)).length)){const d=Object.keys(c.coords).map((h,p)=>r.parsed.args[p]||0);let m;return f.coordGrammar&&(m=fg(c,f,"color",d)),t&&Object.assign(t,{formatId:"color",types:m}),f.id.startsWith("--")&&!i.startsWith("--")&&Vr.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${i}).`),i.startsWith("--")&&!f.id.startsWith("--")&&Vr.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:d,alpha:a}}}let u="",l=i in K.registry?i:o;if(l in K.registry){let c=K.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of K.all){let o=i.getFormat(n);if(o&&o.type==="function"){let s=1;(o.lastAlpha||b5(r.parsed.args).alpha)&&(s=r.parsed.args.pop());let a=r.parsed.args,u;return o.coordGrammar&&(u=fg(i,o,n,a)),t&&Object.assign(t,{formatId:o.name,types:u}),{spaceId:i.id,coords:a,alpha:s}}}}else for(let n of K.all)for(let i in n.formats){let o=n.formats[i];if(o.type!=="custom"||o.test&&!o.test(r.str))continue;let s=o.parse(r.str);if(s)return s.alpha??=1,t&&(t.formatId=i),s}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function ie(e){if(Array.isArray(e))return e.map(ie);if(!e)throw new TypeError("Empty color reference");Su(e)&&(e=x5(e));let t=e.space||e.spaceId;return t instanceof K||(e.space=K.get(t)),e.alpha===void 0&&(e.alpha=1),e}const qx=75e-6;let K=class Dn{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Dn.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=r0(n),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Dn.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:Kx(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),qi.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=qx}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,o)=>{let s=n[o];if(s.type!=="angle"&&s.range){if(Number.isNaN(i))return!0;let[a,u]=s.range;return(a===void 0||i>=a-r)&&(u===void 0||i<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=dg(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=dg(r,this),r):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=ie(t);[t,r]=[a.space,a.coords]}if(t=Dn.get(t),this.equals(t))return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=this.path,i=t.path,o,s;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)o=n[a],s=a;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=ie(t);[t,r]=[n.space,n.coords]}return t=Dn.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Dn.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Dn)return t;if(ji(t)==="string"){let i=Dn.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return Dn.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){let n=ji(t),i,o;if(n==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=Dn.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ji(o),n==="number"||n==="string"&&o>=0){let u=Object.entries(i.coords)[o];if(u)return{space:i,id:u[0],index:o,...u[1]}}i=Dn.get(i);let s=o.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function Kx(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function dg(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=$5(e.coords);let r=Object.entries(t).map(([n,i],o)=>{let s=e.coordGrammar[o][0],a=i.range||i.refRange,u=s.range,l="";return s=="<percentage>"?(u=[0,100],l="%"):s=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(n,i)=>n.map((o,s)=>{let{fromRange:a,toRange:u,suffix:l}=r[s];return a&&u&&(o=wm(a,u,o)),o=nc(o,{precision:i,unit:l}),o})}return e}var Kt=new K({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});let Tr=class extends K{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Kt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=Ge(t.toXYZ_M,r);return this.white!==this.base.white&&(n=ic(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=ic(this.base.white,this.white,r),Ge(t.fromXYZ_M,r))),t.referred??="display",super(t)}};function Tu(e,t){return e=ie(e),!t||e.space.equals(t)?e.coords.slice():(t=K.get(t),t.from(e))}function Br(e,t){e=ie(e);let{space:r,index:n}=K.resolveCoord(t,e.space);return Tu(e,r)[n]}function vm(e,t,r){return e=ie(e),t=K.get(t),e.coords=t.to(e.space,r),e}vm.returns="color";function bi(e,t,r){if(e=ie(e),arguments.length===2&&ji(arguments[1])==="object"){let n=arguments[1];for(let i in n)bi(e,i,n[i])}else{typeof r=="function"&&(r=r(Br(e,t)));let{space:n,index:i}=K.resolveCoord(t,e.space),o=Tu(e,n);o[i]=r,vm(e,n,o)}return e}bi.returns="color";var Dm=new K({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Kt,fromBase:e=>ic(Kt.white,"D50",e),toBase:e=>ic("D50",Kt.white,e)});const Gx=216/24389,mg=24/116,al=24389/27;let Gf=dr.D50;var Rr=new K({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Gf,base:Dm,fromBase(e){let r=e.map((n,i)=>n/Gf[i]).map(n=>n>Gx?Math.cbrt(n):(al*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>mg?Math.pow(t[0],3):(116*t[0]-16)/al,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/al,t[2]>mg?Math.pow(t[2],3):(116*t[2]-16)/al].map((n,i)=>n*Gf[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Gn(e){return(e%360+360)%360}function Zx(e,t){if(e==="raw")return t;let[r,n]=t.map(Gn),i=n-r;return e==="increasing"?i<0&&(n+=360):e==="decreasing"?i>0&&(r+=360):e==="longer"?-180<i&&i<180&&(i>0?r+=360:n+=360):e==="shorter"&&(i>180?r+=360:i<-180&&(n+=360)),[r,n]}var fu=new K({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Rr,fromBase(e){let[t,r,n]=e,i;const o=.02;return Math.abs(r)<o&&Math.abs(n)<o?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Gn(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const hg=25**7,oc=Math.PI,pg=180/oc,rs=oc/180;function gg(e){const t=e*e;return t*t*t*e}function A5(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=ie([e,t]);let[o,s,a]=Rr.from(e),u=fu.from(Rr,[o,s,a])[1],[l,c,f]=Rr.from(t),d=fu.from(Rr,[l,c,f])[1];u<0&&(u=0),d<0&&(d=0);let m=(u+d)/2,h=gg(m),p=.5*(1-Math.sqrt(h/(h+hg))),$=(1+p)*s,v=(1+p)*c,A=Math.sqrt($**2+a**2),S=Math.sqrt(v**2+f**2),N=$===0&&a===0?0:Math.atan2(a,$),I=v===0&&f===0?0:Math.atan2(f,v);N<0&&(N+=2*oc),I<0&&(I+=2*oc),N*=pg,I*=pg;let te=l-o,le=S-A,re=I-N,Ce=N+I,lt=Math.abs(re),Ye;A*S===0?Ye=0:lt<=180?Ye=re:re>180?Ye=re-360:re<-180?Ye=re+360:Vr.warn("the unthinkable has happened");let Qt=2*Math.sqrt(S*A)*Math.sin(Ye*rs/2),Qr=(o+l)/2,sr=(A+S)/2,_n=gg(sr),ze;A*S===0?ze=Ce:lt<=180?ze=Ce/2:Ce<360?ze=(Ce+360)/2:ze=(Ce-360)/2;let Hn=(Qr-50)**2,Ci=1+.015*Hn/Math.sqrt(20+Hn),yn=1+.045*sr,ct=1;ct-=.17*Math.cos((ze-30)*rs),ct+=.24*Math.cos(2*ze*rs),ct+=.32*Math.cos((3*ze+6)*rs),ct-=.2*Math.cos((4*ze-63)*rs);let Pe=1+.015*sr*ct,zt=30*Math.exp(-1*((ze-275)/25)**2),bn=2*Math.sqrt(_n/(_n+hg)),yr=-1*Math.sin(2*zt*rs)*bn,ar=(te/(r*Ci))**2;return ar+=(le/(n*yn))**2,ar+=(Qt/(i*Pe))**2,ar+=yr*(le/(n*yn))*(Qt/(i*Pe)),Math.sqrt(ar)}const Hx=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Yx=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Jx=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Xx=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Is=new K({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Kt,fromBase(e){let r=Ge(Hx,e).map(n=>Math.cbrt(n));return Ge(Jx,r)},toBase(e){let r=Ge(Xx,e).map(n=>n**3);return Ge(Yx,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function n0(e,t){[e,t]=ie([e,t]);let[r,n,i]=Is.from(e),[o,s,a]=Is.from(t),u=r-o,l=n-s,c=i-a;return Math.sqrt(u**2+l**2+c**2)}const Qx=75e-6;function ko(e,t,{epsilon:r=Qx}={}){e=ie(e),t||(t=e.space),t=K.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Os(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function E5(e,t,r="lab"){r=K.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((o,s,a)=>{let u=i[a];return isNaN(s)||isNaN(u)?o:o+(u-s)**2},0))}function eA(e,t){return E5(e,t,"lab")}const tA=Math.PI,yg=tA/180;function rA(e,t,{l:r=2,c:n=1}={}){[e,t]=ie([e,t]);let[i,o,s]=Rr.from(e),[,a,u]=fu.from(Rr,[i,o,s]),[l,c,f]=Rr.from(t),d=fu.from(Rr,[l,c,f])[1];a<0&&(a=0),d<0&&(d=0);let m=i-l,h=a-d,p=o-c,$=s-f,v=p**2+$**2-h**2,A=.511;i>=16&&(A=.040975*i/(1+.01765*i));let S=.0638*a/(1+.0131*a)+.638,N;Number.isNaN(u)&&(u=0),u>=164&&u<=345?N=.56+Math.abs(.2*Math.cos((u+168)*yg)):N=.36+Math.abs(.4*Math.cos((u+35)*yg));let I=Math.pow(a,4),te=Math.sqrt(I/(I+1900)),le=S*(te*N+1-te),re=(m/(r*A))**2;return re+=(h/(n*S))**2,re+=v/le**2,Math.sqrt(re)}const bg=203;var xm=new K({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Kt,fromBase(e){return e.map(t=>Math.max(t*bg,0))},toBase(e){return e.map(t=>Math.max(t/bg,0))}});const ul=1.15,ll=.66,wg=2610/2**14,nA=2**14/2610,$g=3424/2**12,vg=2413/2**7,Dg=2392/2**7,iA=1.7*2523/2**5,xg=2**5/(1.7*2523),cl=-.56,Zf=16295499532821565e-27,oA=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],sA=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],aA=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],uA=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var C5=new K({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:xm,fromBase(e){let[t,r,n]=e,i=ul*t-(ul-1)*n,o=ll*r-(ll-1)*t,a=Ge(oA,[i,o,n]).map(function(d){let m=$g+vg*(d/1e4)**wg,h=1+Dg*(d/1e4)**wg;return(m/h)**iA}),[u,l,c]=Ge(aA,a);return[(1+cl)*u/(1+cl*u)-Zf,l,c]},toBase(e){let[t,r,n]=e,i=(t+Zf)/(1+cl-cl*(t+Zf)),s=Ge(uA,[i,r,n]).map(function(d){let m=$g-d**xg,h=Dg*d**xg-vg;return 1e4*(m/h)**nA}),[a,u,l]=Ge(sA,s),c=(a+(ul-1)*l)/ul,f=(u+(ll-1)*c)/ll;return[c,f,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),i0=new K({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:C5,fromBase(e){let[t,r,n]=e,i;const o=2e-4;return Math.abs(r)<o&&Math.abs(n)<o?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Gn(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function lA(e,t){[e,t]=ie([e,t]);let[r,n,i]=i0.from(e),[o,s,a]=i0.from(t),u=r-o,l=n-s;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let c=i-a,f=2*Math.sqrt(n*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+f**2)}const k5=3424/4096,F5=2413/128,M5=2392/128,Ag=2610/16384,cA=2523/32,fA=16384/2610,Eg=32/2523,dA=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],mA=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],hA=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],pA=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var o0=new K({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:xm,fromBase(e){let t=Ge(dA,e);return gA(t)},toBase(e){let t=yA(e);return Ge(pA,t)}});function gA(e){let t=e.map(function(r){let n=k5+F5*(r/1e4)**Ag,i=1+M5*(r/1e4)**Ag;return(n/i)**cA});return Ge(mA,t)}function yA(e){return Ge(hA,e).map(function(n){let i=Math.max(n**Eg-k5,0),o=F5-M5*n**Eg;return 1e4*(i/o)**fA})}function bA(e,t){[e,t]=ie([e,t]);let[r,n,i]=o0.from(e),[o,s,a]=o0.from(t);return 720*Math.sqrt((r-o)**2+.25*(n-s)**2+(i-a)**2)}const wA=dr.D65,S5=.42,Cg=1/S5,Hf=2*Math.PI,T5=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],$A=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],vA=[[460,451,288],[460,-891,-261],[460,-220,-6300]],DA={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},go={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},xA=180/Math.PI,kg=Math.PI/180;function N5(e,t){return e.map(n=>{const i=zn(t*Math.abs(n)*.01,S5);return 400*jc(i,n)/(i+27.13)})}function AA(e,t){const r=100/t*27.13**Cg;return e.map(n=>{const i=Math.abs(n);return jc(r*zn(i/(400-i),Cg),n)})}function EA(e){let t=Gn(e);t<=go.h[0]&&(t+=360);const r=D5(go.h,t)-1,[n,i]=go.h.slice(r,r+2),[o,s]=go.e.slice(r,r+2),a=go.H[r],u=(t-n)/o;return a+100*u/(u+(i-t)/s)}function CA(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=go.h.slice(r,r+2),[o,s]=go.e.slice(r,r+2);return Gn((t*(s*n-o*i)-100*n*s)/(t*(s-o)-100*s))}function P5(e,t,r,n,i){const o={};o.discounting=i,o.refWhite=e,o.surround=n;const s=e.map(p=>p*100);o.la=t,o.yb=r;const a=s[1],u=Ge(T5,s);n=DA[o.surround];const l=n[0];o.c=n[1],o.nc=n[2];const f=(1/(5*o.la+1))**4;o.fl=f*o.la+.1*(1-f)*(1-f)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/a,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const d=Math.max(Math.min(l*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=u.map(p=>cu(1,a/p,d)),o.dRgbInv=o.dRgb.map(p=>1/p);const m=u.map((p,$)=>p*o.dRgb[$]),h=N5(m,o.fl);return o.aW=o.nbb*(2*h[0]+h[1]+.05*h[2]),o}const Fg=P5(wA,64/Math.PI*.2,20,"average",!1);function s0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Gn(e.h)*kg:r=CA(e.H)*kg;const n=Math.cos(r),i=Math.sin(r);let o=0;e.J!==void 0?o=zn(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=zn(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*zn(o,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,f=l/t.nbb,d=23*(f+.305)*$m(a,23*c+a*(11*n+108*i)),m=d*n,h=d*i,p=AA(Ge(vA,[f,m,h]).map($=>$*1/1403),t.fl);return Ge($A,p.map(($,v)=>$*t.dRgbInv[v])).map($=>$/100)}function I5(e,t){const r=e.map(S=>S*100),n=N5(Ge(T5,r).map((S,N)=>S*t.dRgb[N]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,o=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(o,i)%Hf+Hf)%Hf,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*$m(a*Math.sqrt(i**2+o**2),n[0]+n[1]+1.05*n[2]+.305),l=zn(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),f=zn(c/t.aW,.5*t.c*t.z),d=100*zn(f,2),m=4/t.c*f*(t.aW+4)*t.flRoot,h=l*f,p=h*t.flRoot,$=Gn(s*xA),v=EA($),A=50*zn(t.c*l/(t.aW+4),1/2);return{J:d,C:h,h:$,s:A,Q:m,M:p,H:v}}var kA=new K({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Kt,fromBase(e){const t=I5(e,Fg);return[t.J,t.M,t.h]},toBase(e){return s0({J:e[0],M:e[1],h:e[2]},Fg)}});const FA=dr.D65,MA=216/24389,O5=24389/27;function SA(e){return 116*(e>MA?Math.cbrt(e):(O5*e+16)/116)-16}function a0(e){return e>8?Math.pow((e+16)/116,3):e/O5}function TA(e,t){let[r,n,i]=e,o=[],s=0;if(i===0)return[0,0,0];let a=a0(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let c=0,f=1/0;for(;c<=l;){o=s0({J:s,C:n,h:r},t);const d=Math.abs(o[1]-a);if(d<f){if(d<=u)return o;f=d}s=s-(o[1]-a)*s/(2*o[1]),c+=1}return s0({J:s,C:n,h:r},t)}function NA(e,t){const r=SA(e[1]);if(r===0)return[0,0,0];const n=I5(e,Am);return[Gn(n.h),n.C,r]}const Am=P5(FA,200/Math.PI*a0(50),a0(50)*100,"average",!1);var du=new K({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Kt,fromBase(e){return NA(e)},toBase(e){return TA(e,Am)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const PA=Math.PI/180,Mg=[1,.007,.0228];function Sg(e){e[1]<0&&(e=du.fromBase(du.toBase(e)));const t=Math.log(Math.max(1+Mg[2]*e[1]*Am.flRoot,1))/Mg[2],r=e[0]*PA,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function IA(e,t){[e,t]=ie([e,t]);let[r,n,i]=Sg(du.from(e)),[o,s,a]=Sg(du.from(t));return Math.sqrt((r-o)**2+(n-s)**2+(i-a)**2)}var Bs={deltaE76:eA,deltaECMC:rA,deltaE2000:A5,deltaEJz:lA,deltaEITP:bA,deltaEOK:n0,deltaEHCT:IA};function OA(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Tg={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Ki(e,{method:t=Vr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:o={}}={}){if(e=ie(e),Su(arguments[1])?r=arguments[1]:r||(r=e.space),r=K.get(r),ko(e,r,{epsilon:0}))return e;let s;if(t==="css")s=BA(e,{space:r});else{if(t!=="clip"&&!ko(e,r)){Object.prototype.hasOwnProperty.call(Tg,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:o}=Tg[t]);let a=A5;if(n!==""){for(let l in Bs)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=Bs[l];break}}let u=Ki(Ke(e,r),{method:"clip",space:r});if(a(e,u)>i){if(Object.keys(o).length===3){let A=K.resolveCoord(o.channel),S=Br(Ke(e,A.space),A.id);if(Wi(S)&&(S=0),S>=o.max)return Ke({space:"xyz-d65",coords:dr.D65},e.space);if(S<=o.min)return Ke({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=K.resolveCoord(t),c=l.space,f=l.id,d=Ke(e,c);d.coords.forEach((A,S)=>{Wi(A)&&(d.coords[S]=0)});let h=(l.range||l.refRange)[0],p=OA(i),$=h,v=Br(d,f);for(;v-$>p;){let A=Os(d);A=Ki(A,{space:r,method:"clip"}),a(d,A)-i<p?$=Br(d,f):v=Br(d,f),bi(d,f,($+v)/2)}s=Ke(d,r)}else s=u}else s=Ke(e,r);if(t==="clip"||!ko(s,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,f]=a[l];return c!==void 0&&(u=Math.max(c,u)),f!==void 0&&(u=Math.min(u,f)),u})}}return r!==e.space&&(s=Ke(s,e.space)),e.coords=s.coords,e}Ki.returns="color";const Ng={WHITE:{space:Is,coords:[1,0,0]},BLACK:{space:Is,coords:[0,0,0]}};function BA(e,{space:t}={}){e=ie(e),t||(t=e.space),t=K.get(t);const i=K.get("oklch");if(t.isUnbounded)return Ke(e,t);const o=Ke(e,i);let s=o.coords[0];if(s>=1){const h=Ke(Ng.WHITE,t);return h.alpha=e.alpha,Ke(h,t)}if(s<=0){const h=Ke(Ng.BLACK,t);return h.alpha=e.alpha,Ke(h,t)}if(ko(o,t,{epsilon:0}))return Ke(o,t);function a(h){const p=Ke(h,t),$=Object.values(t.coords);return p.coords=p.coords.map((v,A)=>{if("range"in $[A]){const[S,N]=$[A].range;return v5(S,v,N)}return v}),p}let u=0,l=o.coords[1],c=!0,f=Os(o),d=a(f),m=n0(d,f);if(m<.02)return d;for(;l-u>1e-4;){const h=(u+l)/2;if(f.coords[1]=h,c&&ko(f,t,{epsilon:0}))u=h;else if(d=a(f),m=n0(d,f),m<.02){if(.02-m<1e-4)break;c=!1,u=h}else l=h}return d}function Ke(e,t,{inGamut:r}={}){e=ie(e),t=K.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=Ki(i,r===!0?void 0:r)),i}Ke.returns="color";function Ka(e,{precision:t=Vr.precision,format:r="default",inGamut:n=!0,...i}={}){let o;e=ie(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??K.DEFAULT_FORMAT;let a=e.coords.slice();if(n||=r.toGamut,n&&!ko(e)&&(a=Ki(Os(e),n===!0?void 0:n).coords),r.type==="custom")if(i.precision=t,r.serialize)o=r.serialize(a,e.alpha,i);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let u=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(d=>nc(d,{precision:t})));let l=[...a];if(u==="color"){let d=r.id||r.ids?.[0]||e.space.id;l.unshift(d)}let c=e.alpha;t!==null&&(c=nc(c,{precision:t}));let f=e.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${c}`;o=`${u}(${l.join(r.commas?", ":" ")}${f})`}return o}const RA=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],LA=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var _c=new Tr({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:RA,fromXYZ_M:LA});const fl=1.09929682680944,Pg=.018053968510807;var B5=new Tr({id:"rec2020",name:"REC.2020",base:_c,toBase(e){return e.map(function(t){return t<Pg*4.5?t/4.5:Math.pow((t+fl-1)/fl,1/.45)})},fromBase(e){return e.map(function(t){return t>=Pg?fl*Math.pow(t,.45)-(fl-1):4.5*t})}});const jA=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],_A=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var R5=new Tr({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:jA,fromXYZ_M:_A});const UA=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Tt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var L5=new Tr({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:UA,fromXYZ_M:Tt}),Ig={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Og=Array(3).fill("<percentage> | <number>[0, 255]"),Bg=Array(3).fill("<number>[0, 255]");var Rs=new Tr({id:"srgb",name:"sRGB",base:L5,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Og},rgb_number:{name:"rgb",commas:!0,coords:Bg,noAlpha:!0},color:{},rgba:{coords:Og,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Bg},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(o=>Math.round(o*255));let n=r&&e.every(o=>o%17===0);return"#"+e.map(o=>n?(o/17).toString(16):o.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Ig.black,t.alpha=0):t.coords=Ig[e],t.coords)return t}}}}),j5=new Tr({id:"p3",cssId:"display-p3",name:"P3",base:R5,fromBase:Rs.fromBase,toBase:Rs.toBase});Vr.display_space=Rs;let zA;if(typeof CSS<"u"&&CSS.supports)for(let e of[Rr,B5,j5]){let t=e.getMinCoords(),n=Ka({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Vr.display_space=e;break}}function VA(e,{space:t=Vr.display_space,...r}={}){let n=Ka(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Vr.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(Wi)||Wi(e.alpha))&&!(zA??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=Os(e),i.coords=i.coords.map(bt),i.alpha=bt(i.alpha),n=Ka(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=Ke(i,t),n=new String(Ka(i,r)),n.color=i}return n}function WA(e,t){return e=ie(e),t=ie(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Gi(e){return Br(e,[Kt,"y"])}function _5(e,t){bi(e,[Kt,"y"],t)}function qA(e){Object.defineProperty(e.prototype,"luminance",{get(){return Gi(this)},set(t){_5(this,t)}})}var KA=Object.freeze({__proto__:null,getLuminance:Gi,register:qA,setLuminance:_5});function GA(e,t){e=ie(e),t=ie(t);let r=Math.max(Gi(e),0),n=Math.max(Gi(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const ZA=.56,HA=.57,YA=.62,JA=.65,Rg=.022,XA=1.414,QA=.1,eE=5e-4,tE=1.14,Lg=.027,rE=1.14;function jg(e){return e>=Rg?e:e+(Rg-e)**XA}function ns(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function nE(e,t){t=ie(t),e=ie(e);let r,n,i,o,s,a;t=Ke(t,"srgb"),[o,s,a]=t.coords;let u=ns(o)*.2126729+ns(s)*.7151522+ns(a)*.072175;e=Ke(e,"srgb"),[o,s,a]=e.coords;let l=ns(o)*.2126729+ns(s)*.7151522+ns(a)*.072175,c=jg(u),f=jg(l),d=f>c;return Math.abs(f-c)<eE?n=0:d?(r=f**ZA-c**HA,n=r*tE):(r=f**JA-c**YA,n=r*rE),Math.abs(n)<QA?i=0:n>0?i=n-Lg:i=n+Lg,i*100}function iE(e,t){e=ie(e),t=ie(t);let r=Math.max(Gi(e),0),n=Math.max(Gi(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const oE=5e4;function sE(e,t){e=ie(e),t=ie(t);let r=Math.max(Gi(e),0),n=Math.max(Gi(t),0);return n>r&&([r,n]=[n,r]),n===0?oE:(r-n)/n}function aE(e,t){e=ie(e),t=ie(t);let r=Br(e,[Rr,"l"]),n=Br(t,[Rr,"l"]);return Math.abs(r-n)}const uE=216/24389,_g=24/116,dl=24389/27;let Yf=dr.D65;var u0=new K({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Yf,base:Kt,fromBase(e){let r=e.map((n,i)=>n/Yf[i]).map(n=>n>uE?Math.cbrt(n):(dl*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>_g?Math.pow(t[0],3):(116*t[0]-16)/dl,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/dl,t[2]>_g?Math.pow(t[2],3):(116*t[2]-16)/dl].map((n,i)=>n*Yf[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Jf=Math.pow(5,.5)*.5+.5;function lE(e,t){e=ie(e),t=ie(t);let r=Br(e,[u0,"l"]),n=Br(t,[u0,"l"]),i=Math.abs(Math.pow(r,Jf)-Math.pow(n,Jf)),o=Math.pow(i,1/Jf)*Math.SQRT2-40;return o<7.5?0:o}var Ll=Object.freeze({__proto__:null,contrastAPCA:nE,contrastDeltaPhi:lE,contrastLstar:aE,contrastMichelson:iE,contrastWCAG21:GA,contrastWeber:sE});function cE(e,t,r={}){Su(r)&&(r={algorithm:r});let{algorithm:n,...i}=r;if(!n){let o=Object.keys(Ll).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=ie(e),t=ie(t);for(let o in Ll)if("contrast"+n.toLowerCase()===o.toLowerCase())return Ll[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Uc(e){let[t,r,n]=Tu(e,Kt),i=t+15*r+3*n;return[4*t/i,9*r/i]}function U5(e){let[t,r,n]=Tu(e,Kt),i=t+r+n;return[t/i,r/i]}function fE(e){Object.defineProperty(e.prototype,"uv",{get(){return Uc(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return U5(this)}})}var dE=Object.freeze({__proto__:null,register:fE,uv:Uc,xy:U5});function Oa(e,t,r={}){Su(r)&&(r={method:r});let{method:n=Vr.deltaE,...i}=r;for(let o in Bs)if("deltae"+n.toLowerCase()===o.toLowerCase())return Bs[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function mE(e,t=.25){let n=[K.get("oklch","lch"),"l"];return bi(e,n,i=>i*(1+t))}function hE(e,t=.25){let n=[K.get("oklch","lch"),"l"];return bi(e,n,i=>i*(1-t))}var pE=Object.freeze({__proto__:null,darken:hE,lighten:mE});function z5(e,t,r=.5,n={}){return[e,t]=[ie(e),ie(t)],ji(r)==="object"&&([r,n]=[.5,r]),Nu(e,t,n)(r)}function V5(e,t,r={}){let n;Em(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[ie(e),ie(t)],n=Nu(e,t,u));let l=Oa(e,t),c=i>0?Math.max(s,Math.ceil(l/i)+1):s,f=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)f=[{p:.5,color:n(.5)}];else{let d=1/(c-1);f=Array.from({length:c},(m,h)=>{let p=h*d;return{p,color:n(p)}})}if(i>0){let d=f.reduce((m,h,p)=>{if(p===0)return 0;let $=Oa(h.color,f[p-1].color,o);return Math.max(m,$)},0);for(;d>i;){d=0;for(let m=1;m<f.length&&f.length<a;m++){let h=f[m-1],p=f[m],$=(p.p+h.p)/2,v=n($);d=Math.max(d,Oa(v,h.color),Oa(v,p.color)),f.splice(m,0,{p:$,color:n($)}),m++}}}return f=f.map(d=>d.color),f}function Nu(e,t,r={}){if(Em(e)){let[u,l]=[e,t];return Nu(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:i,progression:o,premultiplied:s}=r;e=ie(e),t=ie(t),e=Os(e),t=Os(t);let a={colors:[e,t],options:r};if(n?n=K.get(n):n=K.registry[Vr.interpolationSpace]||e.space,i=i?K.get(i):n,e=Ke(e,n),t=Ke(t,n),e=Ki(e),t=Ki(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,f]=[Br(e,l),Br(t,l)];isNaN(c)&&!isNaN(f)?c=f:isNaN(f)&&!isNaN(c)&&(f=c),[c,f]=Zx(u,[c,f]),bi(e,l,c),bi(t,l,f)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=o?o(u):u;let l=e.coords.map((d,m)=>{let h=t.coords[m];return cu(d,h,u)}),c=cu(e.alpha,t.alpha,u),f={space:n,coords:l,alpha:c};return s&&(f.coords=f.coords.map(d=>d/c)),i!==n&&(f=Ke(f,i)),f},{rangeArgs:a})}function Em(e){return ji(e)==="function"&&!!e.rangeArgs}Vr.interpolationSpace="lab";function gE(e){e.defineFunction("mix",z5,{returns:"color"}),e.defineFunction("range",Nu,{returns:"function<color>"}),e.defineFunction("steps",V5,{returns:"array<color>"})}var yE=Object.freeze({__proto__:null,isRange:Em,mix:z5,range:Nu,register:gE,steps:V5}),W5=new K({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Rs,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,u]=[NaN,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-n)/l+2;break;case o:s=(n-i)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),q5=new K({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:W5,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n+r*Math.min(n,1-n);return[t,i===0?0:200*(1-n/i),100*i]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n*(1-r/2);return[t,i===0||i===1?0:(n-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),bE=new K({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:q5,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[t,0,a*100]}let o=1-n,s=o===0?0:1-r/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const wE=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],$E=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var K5=new Tr({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:wE,fromXYZ_M:$E}),vE=new Tr({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:K5,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const DE=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],xE=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var G5=new Tr({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Dm,toXYZ_M:DE,fromXYZ_M:xE});const AE=1/512,EE=16/512;var CE=new Tr({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:G5,toBase(e){return e.map(t=>t<EE?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=AE?t**(1/1.8):16*t)}}),kE=new K({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Is,fromBase(e){let[t,r,n]=e,i;const o=2e-4;return Math.abs(r)<o&&Math.abs(n)<o?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Gn(i)]},toBase(e){let[t,r,n]=e,i,o;return isNaN(n)?(i=0,o=0):(i=r*Math.cos(n*Math.PI/180),o=r*Math.sin(n*Math.PI/180)),[t,i,o]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Z5=dr.D65;const FE=216/24389,Ug=24389/27,[zg,Vg]=Uc({space:Kt,coords:Z5});var H5=new K({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Z5,base:Kt,fromBase(e){let t=[bt(e[0]),bt(e[1]),bt(e[2])],r=t[1],[n,i]=Uc({space:Kt,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let o=r<=FE?Ug*r:116*Math.cbrt(r)-16;return[o,13*o*(n-zg),13*o*(i-Vg)]},toBase(e){let[t,r,n]=e;if(t===0||Wi(t))return[0,0,0];r=bt(r),n=bt(n);let i=r/(13*t)+zg,o=n/(13*t)+Vg,s=t<=8?t/Ug:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Cm=new K({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:H5,fromBase(e){let[t,r,n]=e,i;const o=.02;return Math.abs(r)<o&&Math.abs(n)<o?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Gn(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const ME=216/24389,SE=24389/27,Wg=Tt[0][0],qg=Tt[0][1],Xf=Tt[0][2],Kg=Tt[1][0],Gg=Tt[1][1],Qf=Tt[1][2],Zg=Tt[2][0],Hg=Tt[2][1],ed=Tt[2][2];function is(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function sc(e){const t=Math.pow(e+16,3)/1560896,r=t>ME?t:e/SE,n=r*(284517*Wg-94839*Xf),i=r*(838422*Xf+769860*qg+731718*Wg),o=r*(632260*Xf-126452*qg),s=r*(284517*Kg-94839*Qf),a=r*(838422*Qf+769860*Gg+731718*Kg),u=r*(632260*Qf-126452*Gg),l=r*(284517*Zg-94839*ed),c=r*(838422*ed+769860*Hg+731718*Zg),f=r*(632260*ed-126452*Hg);return{r0s:n/o,r0i:i*e/o,r1s:n/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/f,b0i:c*e/f,b1s:l/(f+126452),b1i:(c-769860)*e/(f+126452)}}function Yg(e,t){const r=t/360*Math.PI*2,n=is(e.r0s,e.r0i,r),i=is(e.r1s,e.r1i,r),o=is(e.g0s,e.g0i,r),s=is(e.g1s,e.g1i,r),a=is(e.b0s,e.b0i,r),u=is(e.b1s,e.b1i,r);return Math.min(n,i,o,s,a,u)}var TE=new K({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Cm,gamutSpace:Rs,fromBase(e){let[t,r,n]=[bt(e[0]),bt(e[1]),bt(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=sc(t),s=Yg(o,n);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[bt(e[0]),bt(e[1]),bt(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=sc(n);i=Yg(o,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Tt[0][0];Tt[0][1];Tt[0][2];Tt[1][0];Tt[1][1];Tt[1][2];Tt[2][0];Tt[2][1];Tt[2][2];function os(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Jg(e){let t=os(e.r0s,e.r0i),r=os(e.r1s,e.r1i),n=os(e.g0s,e.g0i),i=os(e.g1s,e.g1i),o=os(e.b0s,e.b0i),s=os(e.b1s,e.b1i);return Math.min(t,r,n,i,o,s)}var NE=new K({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Cm,gamutSpace:"self",fromBase(e){let[t,r,n]=[bt(e[0]),bt(e[1]),bt(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=sc(t),s=Jg(o);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[bt(e[0]),bt(e[1]),bt(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=sc(n);i=Jg(o)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Xg=203,Qg=2610/2**14,PE=2**14/2610,IE=2523/2**5,e1=2**5/2523,t1=3424/2**12,r1=2413/2**7,n1=2392/2**7;var OE=new Tr({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:_c,toBase(e){return e.map(function(t){return(Math.max(t**e1-t1,0)/(r1-n1*t**e1))**PE*1e4/Xg})},fromBase(e){return e.map(function(t){let r=Math.max(t*Xg/1e4,0),n=t1+r1*r**Qg,i=1+n1*r**Qg;return(n/i)**IE})}});const i1=.17883277,o1=.28466892,s1=.55991073,td=3.7743;var BE=new Tr({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:_c,toBase(e){return e.map(function(t){return t<=.5?t**2/3*td:(Math.exp((t-s1)/i1)+o1)/12*td})},fromBase(e){return e.map(function(t){return t/=td,t<=1/12?Math.sqrt(3*t):i1*Math.log(12*t-o1)+s1})}});const Y5={};qi.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=J5(e.W1,e.W2,e.options.method))});qi.add("chromatic-adaptation-end",e=>{e.M||(e.M=J5(e.W1,e.W2,e.options.method))});function zc({id:e,toCone_M:t,fromCone_M:r}){Y5[e]=arguments[0]}function J5(e,t,r="Bradford"){let n=Y5[r],[i,o,s]=Ge(n.toCone_M,e),[a,u,l]=Ge(n.toCone_M,t),c=[[a/i,0,0],[0,u/o,0],[0,0,l/s]],f=Ge(c,n.toCone_M);return Ge(n.fromCone_M,f)}zc({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});zc({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});zc({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});zc({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(dr,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});dr.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const RE=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],LE=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var X5=new Tr({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:dr.ACES,toXYZ_M:RE,fromXYZ_M:LE});const ml=2**-16,rd=-.35828683,hl=(Math.log2(65504)+9.72)/17.52;var jE=new Tr({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[rd,hl],name:"Red"},g:{range:[rd,hl],name:"Green"},b:{range:[rd,hl],name:"Blue"}},referred:"scene",base:X5,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-ml)*2:r<hl?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(ml)+9.72)/17.52:t<ml?(Math.log2(ml+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),a1=Object.freeze({__proto__:null,A98RGB:vE,A98RGB_Linear:K5,ACEScc:jE,ACEScg:X5,CAM16_JMh:kA,HCT:du,HPLuv:NE,HSL:W5,HSLuv:TE,HSV:q5,HWB:bE,ICTCP:o0,JzCzHz:i0,Jzazbz:C5,LCH:fu,LCHuv:Cm,Lab:Rr,Lab_D65:u0,Luv:H5,OKLCH:kE,OKLab:Is,P3:j5,P3_Linear:R5,ProPhoto:CE,ProPhoto_Linear:G5,REC_2020:B5,REC_2020_Linear:_c,REC_2100_HLG:BE,REC_2100_PQ:OE,XYZ_ABS_D65:xm,XYZ_D50:Dm,XYZ_D65:Kt,sRGB:Rs,sRGB_Linear:L5});let _e=class vr{constructor(...t){let r;t.length===1&&(r=ie(t[0]));let n,i,o;r?(n=r.space||r.spaceId,i=r.coords,o=r.alpha):[n,i,o]=t,Object.defineProperty(this,"space",{value:K.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=o>1||o===void 0?1:o<0?0:o;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new vr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=VA(this,...t);return r.color=new vr(r.color),r}static get(t,...r){return t instanceof vr?t:new vr(t,...r)}static defineFunction(t,r,n=r){let{instance:i=!0,returns:o}=n,s=function(...a){let u=r(...a);if(o==="color")u=vr.get(u);else if(o==="function<color>"){let l=u;u=function(...c){let f=l(...c);return vr.get(f)},Object.assign(u,l)}else o==="array<color>"&&(u=u.map(l=>vr.get(l)));return u};t in vr||(vr[t]=s),i&&(vr.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)vr.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(vr);else for(let r in t)vr.defineFunction(r,t[r])}};_e.defineFunctions({get:Br,getAll:Tu,set:bi,setAll:vm,to:Ke,equals:WA,inGamut:ko,toGamut:Ki,distance:E5,toString:Ka});Object.assign(_e,{util:zx,hooks:qi,WHITES:dr,Space:K,spaces:K.registry,parse:x5,defaults:Vr});for(let e of Object.keys(a1))K.register(a1[e]);for(let e in K.registry)l0(e,K.registry[e]);qi.add("colorspace-init-end",e=>{l0(e.id,e),e.aliases?.forEach(t=>{l0(t,e)})});function l0(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(_e.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(i,o)=>{try{return K.resolveCoord([t,o]),!0}catch{}return Reflect.has(i,o)},get:(i,o,s)=>{if(o&&typeof o!="symbol"&&!(o in i)){let{index:a}=K.resolveCoord([t,o]);if(a>=0)return i[a]}return Reflect.get(i,o,s)},set:(i,o,s,a)=>{if(o&&typeof o!="symbol"&&!(o in i)||o>=0){let{index:u}=K.resolveCoord([t,o]);if(u>=0)return i[u]=s,this.setAll(e,i),!0}return Reflect.set(i,o,s,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}_e.extend(Bs);_e.extend({deltaE:Oa});Object.assign(_e,{deltaEMethods:Bs});_e.extend(pE);_e.extend({contrast:cE});_e.extend(dE);_e.extend(KA);_e.extend(yE);_e.extend(Ll);const Q5=Symbol("no update");function u1(e){return e!==Q5}class nd extends Rn()("observable-value-update"){}class _E extends Rn()("observable-value-resolve"){}class UE extends Rn()("observable-value-error"){}class zE extends sm("observable-destroy"){}class VE extends sm("observable-callback-call"){}class WE extends Rn()("observable-params-update"){}class ew{listenTarget=new am;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===Q5)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const i=this.value;return this.value=r,this.listenTarget.dispatch(new nd({detail:[r,i]})),!0}return!1}listen(t,r){const n=i=>r(...i.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(nd,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(nd,r)}destroy(){this.listenTarget.dispatch(new zE),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function km(e,t){return fD(e,t,(r,n)=>F.isFunction(r)&&F.isFunction(n)?!0:F.strictEquals(r,n))}var Ga;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Ga||(Ga={}));class qE extends ew{equalityCheck;waitingForValueDeferredPromise=new Gl;lastSetPromise;lastSetId=Co();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||km,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=Co();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Gl,super.setValue(this.waitingForValueDeferredPromise.promise,F.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=at(n);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return u1(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,F.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Co(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new _E({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,F.strictEquals),this.dispatch(new UE({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):u1(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(at(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?Ga.Rejected:this.value instanceof Promise?Ga.Waiting:Ga.Resolved}}class ms extends qE{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==ms.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||km,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:ms.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===ms.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(at(t))}finally{this.dispatch(new VE)}}updateLastParams(t){try{return this.internalParams===ms.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new WE({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(at(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return F.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function KE(e){return At(e)&&!Nr(e)&&!Iu(e)&&Symbol.asyncIterator in e}function Nr(e){return Array.isArray(e)}function tw(e){return typeof e=="bigint"}function Pu(e){return typeof e=="boolean"}function Fm(e){return e instanceof globalThis.Date}function GE(e){return typeof e=="function"}function ZE(e){return At(e)&&!Nr(e)&&!Iu(e)&&Symbol.iterator in e}function HE(e){return e===null}function Kn(e){return typeof e=="number"}function At(e){return typeof e=="object"&&e!==null}function rw(e){return e instanceof globalThis.RegExp}function pt(e){return typeof e=="string"}function YE(e){return typeof e=="symbol"}function Iu(e){return e instanceof globalThis.Uint8Array}function wt(e){return e===void 0}function JE(e){return e.map(t=>ac(t))}function XE(e){return new Date(e.getTime())}function QE(e){return new Uint8Array(e)}function eC(e){return new RegExp(e.source,e.flags)}function tC(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=ac(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=ac(e[r]);return t}function ac(e){return Nr(e)?JE(e):Fm(e)?XE(e):Iu(e)?QE(e):rw(e)?eC(e):At(e)?tC(e):e}function Wr(e){return ac(e)}function Mm(e,t){return Wr(t===void 0?e:{...t,...e})}function nw(e){return Zn(e)&&globalThis.Symbol.asyncIterator in e}function iw(e){return Zn(e)&&globalThis.Symbol.iterator in e}function ow(e){return e instanceof globalThis.Promise}function Sm(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function Tm(e){return e instanceof globalThis.Uint8Array}function sw(e,t){return t in e}function Zn(e){return e!==null&&typeof e=="object"}function qr(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function Qi(e){return e===void 0}function Vc(e){return e===null}function Wc(e){return typeof e=="boolean"}function se(e){return typeof e=="number"}function aw(e){return globalThis.Number.isInteger(e)}function ai(e){return typeof e=="bigint"}function Ur(e){return typeof e=="string"}function uw(e){return typeof e=="function"}function qc(e){return typeof e=="symbol"}function lw(e){return ai(e)||Wc(e)||Vc(e)||se(e)||Ur(e)||qc(e)||Qi(e)}var ht;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=Zn(s);return e.AllowArrayObject?a:a&&!qr(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function i(s){return e.AllowNaN?se(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const a=Qi(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=o})(ht||(ht={}));function rC(e){return globalThis.Object.freeze(e).map(t=>uc(t))}function nC(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=uc(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=uc(e[r]);return globalThis.Object.freeze(t)}function uc(e){return Nr(e)?rC(e):Fm(e)?e:Iu(e)?e:rw(e)?e:At(e)?nC(e):e}function B(e,t){const r=t!==void 0?{...t,...e}:e;switch(ht.InstanceMode){case"freeze":return uc(r);case"clone":return Wr(r);default:return r}}class Yt extends Error{constructor(t){super(t)}}const Er=Symbol.for("TypeBox.Transform"),Ou=Symbol.for("TypeBox.Readonly"),Di=Symbol.for("TypeBox.Optional"),Kc=Symbol.for("TypeBox.Hint"),O=Symbol.for("TypeBox.Kind");function Nm(e){return At(e)&&e[Ou]==="Readonly"}function eo(e){return At(e)&&e[Di]==="Optional"}function cw(e){return pe(e,"Any")}function fw(e){return pe(e,"Argument")}function oa(e){return pe(e,"Array")}function Gc(e){return pe(e,"AsyncIterator")}function Zc(e){return pe(e,"BigInt")}function Bu(e){return pe(e,"Boolean")}function sa(e){return pe(e,"Computed")}function aa(e){return pe(e,"Constructor")}function iC(e){return pe(e,"Date")}function ua(e){return pe(e,"Function")}function la(e){return pe(e,"Integer")}function hn(e){return pe(e,"Intersect")}function Hc(e){return pe(e,"Iterator")}function pe(e,t){return At(e)&&O in e&&e[O]===t}function dw(e){return Pu(e)||Kn(e)||pt(e)}function Uo(e){return pe(e,"Literal")}function zo(e){return pe(e,"MappedKey")}function Jr(e){return pe(e,"MappedResult")}function Ru(e){return pe(e,"Never")}function oC(e){return pe(e,"Not")}function Pm(e){return pe(e,"Null")}function ca(e){return pe(e,"Number")}function Ln(e){return pe(e,"Object")}function Yc(e){return pe(e,"Promise")}function Jc(e){return pe(e,"Record")}function Mr(e){return pe(e,"Ref")}function mw(e){return pe(e,"RegExp")}function Lu(e){return pe(e,"String")}function Im(e){return pe(e,"Symbol")}function Vo(e){return pe(e,"TemplateLiteral")}function sC(e){return pe(e,"This")}function Ue(e){return At(e)&&Er in e}function Wo(e){return pe(e,"Tuple")}function ju(e){return pe(e,"Undefined")}function Ut(e){return pe(e,"Union")}function aC(e){return pe(e,"Uint8Array")}function uC(e){return pe(e,"Unknown")}function lC(e){return pe(e,"Unsafe")}function cC(e){return pe(e,"Void")}function fC(e){return At(e)&&O in e&&pt(e[O])}function hr(e){return cw(e)||fw(e)||oa(e)||Bu(e)||Zc(e)||Gc(e)||sa(e)||aa(e)||iC(e)||ua(e)||la(e)||hn(e)||Hc(e)||Uo(e)||zo(e)||Jr(e)||Ru(e)||oC(e)||Pm(e)||ca(e)||Ln(e)||Yc(e)||Jc(e)||Mr(e)||mw(e)||Lu(e)||Im(e)||Vo(e)||sC(e)||Wo(e)||ju(e)||Ut(e)||aC(e)||uC(e)||lC(e)||cC(e)||fC(e)}const dC=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function hw(e){try{return new RegExp(e),!0}catch{return!1}}function Om(e){if(!pt(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function pw(e){return Bm(e)||tt(e)}function Ca(e){return wt(e)||tw(e)}function Oe(e){return wt(e)||Kn(e)}function Bm(e){return wt(e)||Pu(e)}function Ne(e){return wt(e)||pt(e)}function mC(e){return wt(e)||pt(e)&&Om(e)&&hw(e)}function hC(e){return wt(e)||pt(e)&&Om(e)}function gw(e){return wt(e)||tt(e)}function lc(e){return At(e)&&e[Di]==="Optional"}function Tn(e){return ge(e,"Any")&&Ne(e.$id)}function pC(e){return ge(e,"Argument")&&Kn(e.index)}function qo(e){return ge(e,"Array")&&e.type==="array"&&Ne(e.$id)&&tt(e.items)&&Oe(e.minItems)&&Oe(e.maxItems)&&Bm(e.uniqueItems)&&gw(e.contains)&&Oe(e.minContains)&&Oe(e.maxContains)}function Rm(e){return ge(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Ne(e.$id)&&tt(e.items)}function Xc(e){return ge(e,"BigInt")&&e.type==="bigint"&&Ne(e.$id)&&Ca(e.exclusiveMaximum)&&Ca(e.exclusiveMinimum)&&Ca(e.maximum)&&Ca(e.minimum)&&Ca(e.multipleOf)}function Ko(e){return ge(e,"Boolean")&&e.type==="boolean"&&Ne(e.$id)}function gC(e){return ge(e,"Computed")&&pt(e.target)&&Nr(e.parameters)&&e.parameters.every(t=>tt(t))}function Qc(e){return ge(e,"Constructor")&&e.type==="Constructor"&&Ne(e.$id)&&Nr(e.parameters)&&e.parameters.every(t=>tt(t))&&tt(e.returns)}function ef(e){return ge(e,"Date")&&e.type==="Date"&&Ne(e.$id)&&Oe(e.exclusiveMaximumTimestamp)&&Oe(e.exclusiveMinimumTimestamp)&&Oe(e.maximumTimestamp)&&Oe(e.minimumTimestamp)&&Oe(e.multipleOfTimestamp)}function tf(e){return ge(e,"Function")&&e.type==="Function"&&Ne(e.$id)&&Nr(e.parameters)&&e.parameters.every(t=>tt(t))&&tt(e.returns)}function xi(e){return ge(e,"Integer")&&e.type==="integer"&&Ne(e.$id)&&Oe(e.exclusiveMaximum)&&Oe(e.exclusiveMinimum)&&Oe(e.maximum)&&Oe(e.minimum)&&Oe(e.multipleOf)}function yw(e){return At(e)&&Object.entries(e).every(([t,r])=>Om(t)&&tt(r))}function Go(e){return ge(e,"Intersect")&&!(pt(e.type)&&e.type!=="object")&&Nr(e.allOf)&&e.allOf.every(t=>tt(t)&&!DC(t))&&Ne(e.type)&&(Bm(e.unevaluatedProperties)||gw(e.unevaluatedProperties))&&Ne(e.$id)}function Lm(e){return ge(e,"Iterator")&&e.type==="Iterator"&&Ne(e.$id)&&tt(e.items)}function ge(e,t){return At(e)&&O in e&&e[O]===t}function bw(e){return to(e)&&pt(e.const)}function ww(e){return to(e)&&Kn(e.const)}function $w(e){return to(e)&&Pu(e.const)}function to(e){return ge(e,"Literal")&&Ne(e.$id)&&yC(e.const)}function yC(e){return Pu(e)||Kn(e)||pt(e)}function bC(e){return ge(e,"MappedKey")&&Nr(e.keys)&&e.keys.every(t=>Kn(t)||pt(t))}function wC(e){return ge(e,"MappedResult")&&yw(e.properties)}function ro(e){return ge(e,"Never")&&At(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function Ls(e){return ge(e,"Not")&&tt(e.not)}function jm(e){return ge(e,"Null")&&e.type==="null"&&Ne(e.$id)}function Cr(e){return ge(e,"Number")&&e.type==="number"&&Ne(e.$id)&&Oe(e.exclusiveMaximum)&&Oe(e.exclusiveMinimum)&&Oe(e.maximum)&&Oe(e.minimum)&&Oe(e.multipleOf)}function rt(e){return ge(e,"Object")&&e.type==="object"&&Ne(e.$id)&&yw(e.properties)&&pw(e.additionalProperties)&&Oe(e.minProperties)&&Oe(e.maxProperties)}function _m(e){return ge(e,"Promise")&&e.type==="Promise"&&Ne(e.$id)&&tt(e.item)}function Ht(e){return ge(e,"Record")&&e.type==="object"&&Ne(e.$id)&&pw(e.additionalProperties)&&At(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&hw(r[0])&&At(t.patternProperties)&&tt(t.patternProperties[r[0]])})(e)}function $C(e){return ge(e,"Ref")&&Ne(e.$id)&&pt(e.$ref)}function mu(e){return ge(e,"RegExp")&&Ne(e.$id)&&pt(e.source)&&pt(e.flags)&&Oe(e.maxLength)&&Oe(e.minLength)}function Nn(e){return ge(e,"String")&&e.type==="string"&&Ne(e.$id)&&Oe(e.minLength)&&Oe(e.maxLength)&&mC(e.pattern)&&hC(e.format)}function hu(e){return ge(e,"Symbol")&&e.type==="symbol"&&Ne(e.$id)}function pu(e){return ge(e,"TemplateLiteral")&&e.type==="string"&&pt(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function vC(e){return ge(e,"This")&&Ne(e.$id)&&pt(e.$ref)}function DC(e){return At(e)&&Er in e}function rf(e){return ge(e,"Tuple")&&e.type==="array"&&Ne(e.$id)&&Kn(e.minItems)&&Kn(e.maxItems)&&e.minItems===e.maxItems&&(wt(e.items)&&wt(e.additionalItems)&&e.minItems===0||Nr(e.items)&&e.items.every(t=>tt(t)))}function Po(e){return ge(e,"Undefined")&&e.type==="undefined"&&Ne(e.$id)}function wi(e){return ge(e,"Union")&&Ne(e.$id)&&At(e)&&Nr(e.anyOf)&&e.anyOf.every(t=>tt(t))}function _u(e){return ge(e,"Uint8Array")&&e.type==="Uint8Array"&&Ne(e.$id)&&Oe(e.minByteLength)&&Oe(e.maxByteLength)}function Pn(e){return ge(e,"Unknown")&&Ne(e.$id)}function xC(e){return ge(e,"Unsafe")}function nf(e){return ge(e,"Void")&&e.type==="void"&&Ne(e.$id)}function AC(e){return At(e)&&O in e&&pt(e[O])&&!dC.includes(e[O])}function tt(e){return At(e)&&(Tn(e)||pC(e)||qo(e)||Ko(e)||Xc(e)||Rm(e)||gC(e)||Qc(e)||ef(e)||tf(e)||xi(e)||Go(e)||Lm(e)||to(e)||bC(e)||wC(e)||ro(e)||Ls(e)||jm(e)||Cr(e)||rt(e)||_m(e)||Ht(e)||$C(e)||mu(e)||Nn(e)||hu(e)||pu(e)||vC(e)||rf(e)||Po(e)||wi(e)||_u(e)||Pn(e)||xC(e)||nf(e)||AC(e))}const EC="(true|false)",jl="(0|[1-9][0-9]*)",vw="(.*)",CC="(?!.*)",js=`^${jl}$`,_s=`^${vw}$`,kC=`^${CC}$`,Dw=new Map;function Um(e){return Dw.has(e)}function zm(e){return Dw.get(e)}const Vm=new Map;function Zi(e){return Vm.has(e)}function Wm(e,t){Vm.set(e,t)}function qm(e){return Vm.get(e)}function FC(e,t){return e.includes(t)}function MC(e){return[...new Set(e)]}function SC(e,t){return e.filter(r=>t.includes(r))}function TC(e,t){return e.reduce((r,n)=>SC(r,n),t)}function NC(e){return e.length===1?e[0]:e.length>1?TC(e.slice(1),e[0]):[]}function PC(e){const t=[];for(const r of e)t.push(...r);return t}function gu(e){return B({[O]:"Any"},e)}function Km(e,t){return B({[O]:"Array",type:"array",items:e},t)}function IC(e){return B({[O]:"Argument",index:e})}function Gm(e,t){return B({[O]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function Mt(e,t,r){return B({[O]:"Computed",target:e,parameters:t},r)}function OC(e,t){const{[t]:r,...n}=e;return n}function Kr(e,t){return t.reduce((r,n)=>OC(r,n),e)}function nt(e){return B({[O]:"Never",not:{}},e)}function Jt(e){return B({[O]:"MappedResult",properties:e})}function Zm(e,t,r){return B({[O]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function Uu(e,t,r){return B({[O]:"Function",type:"Function",parameters:e,returns:t},r)}function c0(e,t){return B({[O]:"Union",anyOf:e},t)}function BC(e){return e.some(t=>eo(t))}function l1(e){return e.map(t=>eo(t)?RC(t):t)}function RC(e){return Kr(e,[Di])}function LC(e,t){return BC(e)?oo(c0(l1(e),t)):c0(l1(e),t)}function fa(e,t){return e.length===1?B(e[0],t):e.length===0?nt(t):LC(e,t)}function Xt(e,t){return e.length===0?nt(t):e.length===1?B(e[0],t):c0(e,t)}class c1 extends Yt{}function jC(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function Hm(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function fi(e,t){return Hm(e,t,"(")}function yu(e,t){return Hm(e,t,")")}function xw(e,t){return Hm(e,t,"|")}function _C(e){if(!(fi(e,0)&&yu(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(fi(e,r)&&(t+=1),yu(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function UC(e){return e.slice(1,e.length-1)}function zC(e){let t=0;for(let r=0;r<e.length;r++)if(fi(e,r)&&(t+=1),yu(e,r)&&(t-=1),xw(e,r)&&t===0)return!0;return!1}function VC(e){for(let t=0;t<e.length;t++)if(fi(e,t))return!0;return!1}function WC(e){let[t,r]=[0,0];const n=[];for(let o=0;o<e.length;o++)if(fi(e,o)&&(t+=1),yu(e,o)&&(t-=1),xw(e,o)&&t===0){const s=e.slice(r,o);s.length>0&&n.push(Us(s)),r=o+1}const i=e.slice(r);return i.length>0&&n.push(Us(i)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function qC(e){function t(i,o){if(!fi(i,o))throw new c1("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=o;a<i.length;a++)if(fi(i,a)&&(s+=1),yu(i,a)&&(s-=1),s===0)return[o,a];throw new c1("TemplateLiteralParser: Unclosed group parens in expression")}function r(i,o){for(let s=o;s<i.length;s++)if(fi(i,s))return[o,s];return[o,i.length]}const n=[];for(let i=0;i<e.length;i++)if(fi(e,i)){const[o,s]=t(e,i),a=e.slice(o,s+1);n.push(Us(a)),i=s}else{const[o,s]=r(e,i),a=e.slice(o,s);a.length>0&&n.push(Us(a)),i=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function Us(e){return _C(e)?Us(UC(e)):zC(e)?WC(e):VC(e)?qC(e):{type:"const",const:jC(e)}}function Ym(e){return Us(e.slice(1,e.length-1))}class KC extends Yt{}function GC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function ZC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function HC(e){return e.type==="const"&&e.const===".*"}function bu(e){return GC(e)||HC(e)?!1:ZC(e)?!0:e.type==="and"?e.expr.every(t=>bu(t)):e.type==="or"?e.expr.every(t=>bu(t)):e.type==="const"?!0:(()=>{throw new KC("Unknown expression type")})()}function YC(e){const t=Ym(e.pattern);return bu(t)}class JC extends Yt{}function*Aw(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of Aw(e.slice(1)))yield`${t}${r}`}function*XC(e){return yield*Aw(e.expr.map(t=>[...of(t)]))}function*QC(e){for(const t of e.expr)yield*of(t)}function*e8(e){return yield e.const}function*of(e){return e.type==="and"?yield*XC(e):e.type==="or"?yield*QC(e):e.type==="const"?yield*e8(e):(()=>{throw new JC("Unknown expression")})()}function Ew(e){const t=Ym(e.pattern);return bu(t)?[...of(t)]:[]}function Dt(e,t){return B({[O]:"Literal",const:e,type:typeof e},t)}function Cw(e){return B({[O]:"Boolean",type:"boolean"},e)}function Jm(e){return B({[O]:"BigInt",type:"bigint"},e)}function Zo(e){return B({[O]:"Number",type:"number"},e)}function Io(e){return B({[O]:"String",type:"string"},e)}function*t8(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield Cw():t==="number"?yield Zo():t==="bigint"?yield Jm():t==="string"?yield Io():yield(()=>{const r=t.split("|").map(n=>Dt(n.trim()));return r.length===0?nt():r.length===1?r[0]:fa(r)})()}function*r8(e){if(e[1]!=="{"){const t=Dt("$"),r=f0(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=t8(e.slice(2,t)),n=f0(e.slice(t+1));return yield*[...r,...n]}yield Dt(e)}function*f0(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=Dt(e.slice(0,t)),n=r8(e.slice(t));return yield*[r,...n]}yield Dt(e)}function n8(e){return[...f0(e)]}class i8 extends Yt{}function o8(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function kw(e,t){return Vo(e)?e.pattern.slice(1,e.pattern.length-1):Ut(e)?`(${e.anyOf.map(r=>kw(r,t)).join("|")})`:ca(e)?`${t}${jl}`:la(e)?`${t}${jl}`:Zc(e)?`${t}${jl}`:Lu(e)?`${t}${vw}`:Uo(e)?`${t}${o8(e.const.toString())}`:Bu(e)?`${t}${EC}`:(()=>{throw new i8(`Unexpected Kind '${e[O]}'`)})()}function f1(e){return`^${e.map(t=>kw(t,"")).join("")}$`}function cc(e){const r=Ew(e).map(n=>Dt(n));return fa(r)}function Fw(e,t){const r=pt(e)?f1(n8(e)):f1(e);return B({[O]:"TemplateLiteral",type:"string",pattern:r},t)}function s8(e){return Ew(e).map(r=>r.toString())}function a8(e){const t=[];for(const r of e)t.push(...no(r));return t}function u8(e){return[e.toString()]}function no(e){return[...new Set(Vo(e)?s8(e):Ut(e)?a8(e.anyOf):Uo(e)?u8(e.const):ca(e)?["[number]"]:la(e)?["[number]"]:[])]}function l8(e,t,r){const n={};for(const i of Object.getOwnPropertyNames(t))n[i]=sf(e,no(t[i]),r);return n}function c8(e,t,r){return l8(e,t.properties,r)}function f8(e,t,r){const n=c8(e,t,r);return Jt(n)}function Mw(e,t){return e.map(r=>Sw(r,t))}function d8(e){return e.filter(t=>!Ru(t))}function m8(e,t){return Pw(d8(Mw(e,t)))}function h8(e){return e.some(t=>Ru(t))?[]:e}function p8(e,t){return fa(h8(Mw(e,t)))}function g8(e,t){return t in e?e[t]:t==="[number]"?fa(e):nt()}function y8(e,t){return t==="[number]"?e:nt()}function b8(e,t){return t in e?e[t]:nt()}function Sw(e,t){return hn(e)?m8(e.allOf,t):Ut(e)?p8(e.anyOf,t):Wo(e)?g8(e.items??[],t):oa(e)?y8(e.items,t):Ln(e)?b8(e.properties,t):nt()}function Xm(e,t){return t.map(r=>Sw(e,r))}function d1(e,t){return fa(Xm(e,t))}function sf(e,t,r){if(Mr(e)||Mr(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!hr(e)||!hr(t))throw new Yt(n);return Mt("Index",[e,t])}return Jr(t)?f8(e,t,r):zo(t)?D8(e,t,r):B(hr(t)?d1(e,no(t)):d1(e,t),r)}function w8(e,t,r){return{[t]:sf(e,[t],Wr(r))}}function $8(e,t,r){return t.reduce((n,i)=>({...n,...w8(e,i,r)}),{})}function v8(e,t,r){return $8(e,t.keys,r)}function D8(e,t,r){const n=v8(e,t,r);return Jt(n)}function Qm(e,t){return B({[O]:"Iterator",type:"Iterator",items:e},t)}function x8(e){return globalThis.Object.keys(e).filter(t=>!eo(e[t]))}function A8(e,t){const r=x8(e),n=r.length>0?{[O]:"Object",type:"object",required:r,properties:e}:{[O]:"Object",type:"object",properties:e};return B(n,t)}var _t=A8;function Tw(e,t){return B({[O]:"Promise",type:"Promise",item:e},t)}function E8(e){return B(Kr(e,[Ou]))}function C8(e){return B({...e,[Ou]:"Readonly"})}function k8(e,t){return t===!1?E8(e):C8(e)}function io(e,t){const r=t??!0;return Jr(e)?S8(e,r):k8(e,r)}function F8(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=io(e[n],t);return r}function M8(e,t){return F8(e.properties,t)}function S8(e,t){const r=M8(e,t);return Jt(r)}function da(e,t){return B(e.length>0?{[O]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[O]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function Nw(e,t){return e in t?tn(e,t[e]):Jt(t)}function T8(e){return{[e]:Dt(e)}}function N8(e){const t={};for(const r of e)t[r]=Dt(r);return t}function P8(e,t){return FC(t,e)?T8(e):N8(t)}function I8(e,t){const r=P8(e,t);return Nw(e,r)}function ka(e,t){return t.map(r=>tn(e,r))}function O8(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=tn(e,t[n]);return r}function tn(e,t){const r={...t};return eo(t)?oo(tn(e,Kr(t,[Di]))):Nm(t)?io(tn(e,Kr(t,[Ou]))):Jr(t)?Nw(e,t.properties):zo(t)?I8(e,t.keys):aa(t)?Zm(ka(e,t.parameters),tn(e,t.returns),r):ua(t)?Uu(ka(e,t.parameters),tn(e,t.returns),r):Gc(t)?Gm(tn(e,t.items),r):Hc(t)?Qm(tn(e,t.items),r):hn(t)?so(ka(e,t.allOf),r):Ut(t)?Xt(ka(e,t.anyOf),r):Wo(t)?da(ka(e,t.items??[]),r):Ln(t)?_t(O8(e,t.properties),r):oa(t)?Km(tn(e,t.items),r):Yc(t)?Tw(tn(e,t.item),r):t}function B8(e,t){const r={};for(const n of e)r[n]=tn(n,t);return r}function R8(e,t,r){const n=hr(e)?no(e):e,i=t({[O]:"MappedKey",keys:n}),o=B8(n,i);return _t(o,r)}function L8(e){return B(Kr(e,[Di]))}function j8(e){return B({...e,[Di]:"Optional"})}function _8(e,t){return t===!1?L8(e):j8(e)}function oo(e,t){const r=t??!0;return Jr(e)?V8(e,r):_8(e,r)}function U8(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=oo(e[n],t);return r}function z8(e,t){return U8(e.properties,t)}function V8(e,t){const r=z8(e,t);return Jt(r)}function d0(e,t={}){const r=e.every(i=>Ln(i)),n=hr(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return B(t.unevaluatedProperties===!1||hr(t.unevaluatedProperties)||r?{...n,[O]:"Intersect",type:"object",allOf:e}:{...n,[O]:"Intersect",allOf:e},t)}function W8(e){return e.every(t=>eo(t))}function q8(e){return Kr(e,[Di])}function m1(e){return e.map(t=>eo(t)?q8(t):t)}function K8(e,t){return W8(e)?oo(d0(m1(e),t)):d0(m1(e),t)}function Pw(e,t={}){if(e.length===1)return B(e[0],t);if(e.length===0)return nt(t);if(e.some(r=>Ue(r)))throw new Error("Cannot intersect transform types");return K8(e,t)}function so(e,t){if(e.length===1)return B(e[0],t);if(e.length===0)return nt(t);if(e.some(r=>Ue(r)))throw new Error("Cannot intersect transform types");return d0(e,t)}function ma(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new Yt("Ref: $ref must be a string");return B({[O]:"Ref",$ref:t},r)}function G8(e,t){return Mt("Awaited",[Mt(e,t)])}function Z8(e){return Mt("Awaited",[ma(e)])}function H8(e){return so(Iw(e))}function Y8(e){return Xt(Iw(e))}function J8(e){return af(e)}function Iw(e){return e.map(t=>af(t))}function af(e,t){return B(sa(e)?G8(e.target,e.parameters):hn(e)?H8(e.allOf):Ut(e)?Y8(e.anyOf):Yc(e)?J8(e.item):Mr(e)?Z8(e.$ref):e,t)}function Ow(e){const t=[];for(const r of e)t.push(Ho(r));return t}function X8(e){const t=Ow(e);return PC(t)}function Q8(e){const t=Ow(e);return NC(t)}function e9(e){return e.map((t,r)=>r.toString())}function t9(e){return["[number]"]}function r9(e){return globalThis.Object.getOwnPropertyNames(e)}function n9(e){return m0?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function Ho(e){return hn(e)?X8(e.allOf):Ut(e)?Q8(e.anyOf):Wo(e)?e9(e.items??[]):oa(e)?t9(e.items):Ln(e)?r9(e.properties):Jc(e)?n9(e.patternProperties):[]}let m0=!1;function zs(e){m0=!0;const t=Ho(e);return m0=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function i9(e,t){return Mt("KeyOf",[Mt(e,t)])}function o9(e){return Mt("KeyOf",[ma(e)])}function s9(e,t){const r=Ho(e),n=a9(r),i=fa(n);return B(i,t)}function a9(e){return e.map(t=>t==="[number]"?Zo():Dt(t))}function eh(e,t){return sa(e)?i9(e.target,e.parameters):Mr(e)?o9(e.$ref):Jr(e)?c9(e,t):s9(e,t)}function u9(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=eh(e[n],Wr(t));return r}function l9(e,t){return u9(e.properties,t)}function c9(e,t){const r=l9(e,t);return Jt(r)}function Bw(e){const t=Ho(e),r=Xm(e,t);return t.map((n,i)=>[t[i],r[i]])}function f9(e){const t=[];for(const r of e)t.push(...Ho(r));return MC(t)}function d9(e){return e.filter(t=>!Ru(t))}function m9(e,t){const r=[];for(const n of e)r.push(...Xm(n,[t]));return d9(r)}function h9(e,t){const r={};for(const n of t)r[n]=Pw(m9(e,n));return r}function p9(e,t){const r=f9(e),n=h9(e,r);return _t(n,t)}function Rw(e){return B({[O]:"Date",type:"Date"},e)}function Lw(e){return B({[O]:"Null",type:"null"},e)}function jw(e){return B({[O]:"Symbol",type:"symbol"},e)}function _w(e){return B({[O]:"Undefined",type:"undefined"},e)}function Uw(e){return B({[O]:"Uint8Array",type:"Uint8Array"},e)}function uf(e){return B({[O]:"Unknown"},e)}function g9(e){return e.map(t=>th(t,!1))}function y9(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=io(th(e[r],!1));return t}function pl(e,t){return t===!0?e:io(e)}function th(e,t){return KE(e)||ZE(e)?pl(gu(),t):Nr(e)?io(da(g9(e))):Iu(e)?Uw():Fm(e)?Rw():At(e)?pl(_t(y9(e)),t):GE(e)?pl(Uu([],uf()),t):wt(e)?_w():HE(e)?Lw():YE(e)?jw():tw(e)?Jm():Kn(e)||Pu(e)||pt(e)?Dt(e):_t({})}function b9(e,t){return B(th(e,!0),t)}function w9(e,t){return aa(e)?da(e.parameters,t):nt(t)}function $9(e,t){if(wt(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(r)].map(o=>Dt(o));return Xt(i,{...t,[Kc]:"Enum"})}class v9 extends Yt{}var M;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(M||(M={}));function dn(e){return e===M.False?e:M.True}function ha(e){throw new v9(e)}function Et(e){return ro(e)||Go(e)||wi(e)||Pn(e)||Tn(e)}function Ct(e,t){return ro(t)?Ww():Go(t)?lf(e,t):wi(t)?nh(e,t):Pn(t)?Zw():Tn(t)?rh():ha("StructuralRight")}function rh(e,t){return M.True}function D9(e,t){return Go(t)?lf(e,t):wi(t)&&t.anyOf.some(r=>Tn(r)||Pn(r))?M.True:wi(t)?M.Union:Pn(t)||Tn(t)?M.True:M.Union}function x9(e,t){return Pn(e)?M.False:Tn(e)?M.Union:ro(e)?M.True:M.False}function A9(e,t){return rt(t)&&cf(t)?M.True:Et(t)?Ct(e,t):qo(t)?dn(Te(e.items,t.items)):M.False}function E9(e,t){return Et(t)?Ct(e,t):Rm(t)?dn(Te(e.items,t.items)):M.False}function C9(e,t){return Et(t)?Ct(e,t):rt(t)?ir(e,t):Ht(t)?pn(e,t):Xc(t)?M.True:M.False}function zw(e,t){return $w(e)||Ko(e)?M.True:M.False}function k9(e,t){return Et(t)?Ct(e,t):rt(t)?ir(e,t):Ht(t)?pn(e,t):Ko(t)?M.True:M.False}function F9(e,t){return Et(t)?Ct(e,t):rt(t)?ir(e,t):Qc(t)?e.parameters.length>t.parameters.length?M.False:e.parameters.every((r,n)=>dn(Te(t.parameters[n],r))===M.True)?dn(Te(e.returns,t.returns)):M.False:M.False}function M9(e,t){return Et(t)?Ct(e,t):rt(t)?ir(e,t):Ht(t)?pn(e,t):ef(t)?M.True:M.False}function S9(e,t){return Et(t)?Ct(e,t):rt(t)?ir(e,t):tf(t)?e.parameters.length>t.parameters.length?M.False:e.parameters.every((r,n)=>dn(Te(t.parameters[n],r))===M.True)?dn(Te(e.returns,t.returns)):M.False:M.False}function Vw(e,t){return to(e)&&Kn(e.const)||Cr(e)||xi(e)?M.True:M.False}function T9(e,t){return xi(t)||Cr(t)?M.True:Et(t)?Ct(e,t):rt(t)?ir(e,t):Ht(t)?pn(e,t):M.False}function lf(e,t){return t.allOf.every(r=>Te(e,r)===M.True)?M.True:M.False}function N9(e,t){return e.allOf.some(r=>Te(r,t)===M.True)?M.True:M.False}function P9(e,t){return Et(t)?Ct(e,t):Lm(t)?dn(Te(e.items,t.items)):M.False}function I9(e,t){return to(t)&&t.const===e.const?M.True:Et(t)?Ct(e,t):rt(t)?ir(e,t):Ht(t)?pn(e,t):Nn(t)?Gw(e):Cr(t)?qw(e):xi(t)?Vw(e):Ko(t)?zw(e):M.False}function Ww(e,t){return M.False}function O9(e,t){return M.True}function h1(e){let[t,r]=[e,0];for(;Ls(t);)t=t.not,r+=1;return r%2===0?t:uf()}function B9(e,t){return Ls(e)?Te(h1(e),t):Ls(t)?Te(e,h1(t)):ha("Invalid fallthrough for Not")}function R9(e,t){return Et(t)?Ct(e,t):rt(t)?ir(e,t):Ht(t)?pn(e,t):jm(t)?M.True:M.False}function qw(e,t){return ww(e)||Cr(e)||xi(e)?M.True:M.False}function L9(e,t){return Et(t)?Ct(e,t):rt(t)?ir(e,t):Ht(t)?pn(e,t):xi(t)||Cr(t)?M.True:M.False}function Sr(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function p1(e){return cf(e)}function g1(e){return Sr(e,0)||Sr(e,1)&&"description"in e.properties&&wi(e.properties.description)&&e.properties.description.anyOf.length===2&&(Nn(e.properties.description.anyOf[0])&&Po(e.properties.description.anyOf[1])||Nn(e.properties.description.anyOf[1])&&Po(e.properties.description.anyOf[0]))}function id(e){return Sr(e,0)}function y1(e){return Sr(e,0)}function j9(e){return Sr(e,0)}function _9(e){return Sr(e,0)}function U9(e){return cf(e)}function z9(e){const t=Zo();return Sr(e,0)||Sr(e,1)&&"length"in e.properties&&dn(Te(e.properties.length,t))===M.True}function V9(e){return Sr(e,0)}function cf(e){const t=Zo();return Sr(e,0)||Sr(e,1)&&"length"in e.properties&&dn(Te(e.properties.length,t))===M.True}function W9(e){const t=Uu([gu()],gu());return Sr(e,0)||Sr(e,1)&&"then"in e.properties&&dn(Te(e.properties.then,t))===M.True}function Kw(e,t){return Te(e,t)===M.False||lc(e)&&!lc(t)?M.False:M.True}function ir(e,t){return Pn(e)?M.False:Tn(e)?M.Union:ro(e)||bw(e)&&p1(t)||ww(e)&&id(t)||$w(e)&&y1(t)||hu(e)&&g1(t)||Xc(e)&&j9(t)||Nn(e)&&p1(t)||hu(e)&&g1(t)||Cr(e)&&id(t)||xi(e)&&id(t)||Ko(e)&&y1(t)||_u(e)&&U9(t)||ef(e)&&_9(t)||Qc(e)&&V9(t)||tf(e)&&z9(t)?M.True:Ht(e)&&Nn(h0(e))?t[Kc]==="Record"?M.True:M.False:Ht(e)&&Cr(h0(e))&&Sr(t,0)?M.True:M.False}function q9(e,t){return Et(t)?Ct(e,t):Ht(t)?pn(e,t):rt(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!lc(t.properties[r]))return M.False;if(lc(t.properties[r]))return M.True;if(Kw(e.properties[r],t.properties[r])===M.False)return M.False}return M.True})():M.False}function K9(e,t){return Et(t)?Ct(e,t):rt(t)&&W9(t)?M.True:_m(t)?dn(Te(e.item,t.item)):M.False}function h0(e){return js in e.patternProperties?Zo():_s in e.patternProperties?Io():ha("Unknown record key pattern")}function p0(e){return js in e.patternProperties?e.patternProperties[js]:_s in e.patternProperties?e.patternProperties[_s]:ha("Unable to get record value schema")}function pn(e,t){const[r,n]=[h0(t),p0(t)];return bw(e)&&Cr(r)&&dn(Te(e,n))===M.True?M.True:_u(e)&&Cr(r)||Nn(e)&&Cr(r)||qo(e)&&Cr(r)?Te(e,n):rt(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(Kw(n,e.properties[i])===M.False)return M.False;return M.True})():M.False}function G9(e,t){return Et(t)?Ct(e,t):rt(t)?ir(e,t):Ht(t)?Te(p0(e),p0(t)):M.False}function Z9(e,t){const r=mu(e)?Io():e,n=mu(t)?Io():t;return Te(r,n)}function Gw(e,t){return to(e)&&pt(e.const)||Nn(e)?M.True:M.False}function H9(e,t){return Et(t)?Ct(e,t):rt(t)?ir(e,t):Ht(t)?pn(e,t):Nn(t)?M.True:M.False}function Y9(e,t){return Et(t)?Ct(e,t):rt(t)?ir(e,t):Ht(t)?pn(e,t):hu(t)?M.True:M.False}function J9(e,t){return pu(e)?Te(cc(e),t):pu(t)?Te(e,cc(t)):ha("Invalid fallthrough for TemplateLiteral")}function X9(e,t){return qo(t)&&e.items!==void 0&&e.items.every(r=>Te(r,t.items)===M.True)}function Q9(e,t){return ro(e)?M.True:Pn(e)?M.False:Tn(e)?M.Union:M.False}function ek(e,t){return Et(t)?Ct(e,t):rt(t)&&cf(t)||qo(t)&&X9(e,t)?M.True:rf(t)?wt(e.items)&&!wt(t.items)||!wt(e.items)&&wt(t.items)?M.False:wt(e.items)&&!wt(t.items)||e.items.every((r,n)=>Te(r,t.items[n])===M.True)?M.True:M.False:M.False}function tk(e,t){return Et(t)?Ct(e,t):rt(t)?ir(e,t):Ht(t)?pn(e,t):_u(t)?M.True:M.False}function rk(e,t){return Et(t)?Ct(e,t):rt(t)?ir(e,t):Ht(t)?pn(e,t):nf(t)?ok(e):Po(t)?M.True:M.False}function nh(e,t){return t.anyOf.some(r=>Te(e,r)===M.True)?M.True:M.False}function nk(e,t){return e.anyOf.every(r=>Te(r,t)===M.True)?M.True:M.False}function Zw(e,t){return M.True}function ik(e,t){return ro(t)?Ww():Go(t)?lf(e,t):wi(t)?nh(e,t):Tn(t)?rh():Nn(t)?Gw(e):Cr(t)?qw(e):xi(t)?Vw(e):Ko(t)?zw(e):qo(t)?x9(e):rf(t)?Q9(e):rt(t)?ir(e,t):Pn(t)?M.True:M.False}function ok(e,t){return Po(e)||Po(e)?M.True:M.False}function sk(e,t){return Go(t)?lf(e,t):wi(t)?nh(e,t):Pn(t)?Zw():Tn(t)?rh():rt(t)?ir(e,t):nf(t)?M.True:M.False}function Te(e,t){return pu(e)||pu(t)?J9(e,t):mu(e)||mu(t)?Z9(e,t):Ls(e)||Ls(t)?B9(e,t):Tn(e)?D9(e,t):qo(e)?A9(e,t):Xc(e)?C9(e,t):Ko(e)?k9(e,t):Rm(e)?E9(e,t):Qc(e)?F9(e,t):ef(e)?M9(e,t):tf(e)?S9(e,t):xi(e)?T9(e,t):Go(e)?N9(e,t):Lm(e)?P9(e,t):to(e)?I9(e,t):ro(e)?O9():jm(e)?R9(e,t):Cr(e)?L9(e,t):rt(e)?q9(e,t):Ht(e)?G9(e,t):Nn(e)?H9(e,t):hu(e)?Y9(e,t):rf(e)?ek(e,t):_m(e)?K9(e,t):_u(e)?tk(e,t):Po(e)?rk(e,t):wi(e)?nk(e,t):Pn(e)?ik(e,t):nf(e)?sk(e,t):ha(`Unknown left type operand '${e[O]}'`)}function zu(e,t){return Te(e,t)}function ak(e,t,r,n,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=ih(e[s],t,r,n,Wr(i));return o}function uk(e,t,r,n,i){return ak(e.properties,t,r,n,i)}function lk(e,t,r,n,i){const o=uk(e,t,r,n,i);return Jt(o)}function ck(e,t,r,n){const i=zu(e,t);return i===M.Union?Xt([r,n]):i===M.True?r:n}function ih(e,t,r,n,i){return Jr(e)?lk(e,t,r,n,i):zo(e)?B(hk(e,t,r,n,i)):B(ck(e,t,r,n),i)}function fk(e,t,r,n,i){return{[e]:ih(Dt(e),t,r,n,Wr(i))}}function dk(e,t,r,n,i){return e.reduce((o,s)=>({...o,...fk(s,t,r,n,i)}),{})}function mk(e,t,r,n,i){return dk(e.keys,t,r,n,i)}function hk(e,t,r,n,i){const o=mk(e,t,r,n,i);return Jt(o)}function pk(e){return e.allOf.every(t=>pa(t))}function gk(e){return e.anyOf.some(t=>pa(t))}function yk(e){return!pa(e.not)}function pa(e){return e[O]==="Intersect"?pk(e):e[O]==="Union"?gk(e):e[O]==="Not"?yk(e):e[O]==="Undefined"}function bk(e,t){return oh(cc(e),t)}function wk(e,t){const r=e.filter(n=>zu(n,t)===M.False);return r.length===1?r[0]:Xt(r)}function oh(e,t,r={}){return Vo(e)?B(bk(e,t),r):Jr(e)?B(Dk(e,t),r):B(Ut(e)?wk(e.anyOf,t):zu(e,t)!==M.False?nt():e,r)}function $k(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=oh(e[n],t);return r}function vk(e,t){return $k(e.properties,t)}function Dk(e,t){const r=vk(e,t);return Jt(r)}function xk(e,t){return sh(cc(e),t)}function Ak(e,t){const r=e.filter(n=>zu(n,t)!==M.False);return r.length===1?r[0]:Xt(r)}function sh(e,t,r){return Vo(e)?B(xk(e,t),r):Jr(e)?B(kk(e,t),r):B(Ut(e)?Ak(e.anyOf,t):zu(e,t)!==M.False?e:nt(),r)}function Ek(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=sh(e[n],t);return r}function Ck(e,t){return Ek(e.properties,t)}function kk(e,t){const r=Ck(e,t);return Jt(r)}function Fk(e,t){return aa(e)?B(e.returns,t):nt(t)}function Hw(e){return io(oo(e))}function Yo(e,t,r){return B({[O]:"Record",type:"object",patternProperties:{[e]:t}},r)}function ah(e,t,r){const n={};for(const i of e)n[i]=t;return _t(n,{...r,[Kc]:"Record"})}function Mk(e,t,r){return YC(e)?ah(no(e),t,r):Yo(e.pattern,t,r)}function Sk(e,t,r){return ah(no(Xt(e)),t,r)}function Tk(e,t,r){return ah([e.toString()],t,r)}function Nk(e,t,r){return Yo(e.source,t,r)}function Pk(e,t,r){const n=wt(e.pattern)?_s:e.pattern;return Yo(n,t,r)}function Ik(e,t,r){return Yo(_s,t,r)}function Ok(e,t,r){return Yo(kC,t,r)}function Bk(e,t,r){return _t({true:t,false:t},r)}function Rk(e,t,r){return Yo(js,t,r)}function Lk(e,t,r){return Yo(js,t,r)}function Yw(e,t,r={}){return Ut(e)?Sk(e.anyOf,t,r):Vo(e)?Mk(e,t,r):Uo(e)?Tk(e.const,t,r):Bu(e)?Bk(e,t,r):la(e)?Rk(e,t,r):ca(e)?Lk(e,t,r):mw(e)?Nk(e,t,r):Lu(e)?Pk(e,t,r):cw(e)?Ik(e,t,r):Ru(e)?Ok(e,t,r):nt(r)}function uh(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function jk(e){const t=uh(e);return t===_s?Io():t===js?Zo():Io({pattern:t})}function Jw(e){return e.patternProperties[uh(e)]}function _k(e,t){return t.parameters=Vu(e,t.parameters),t.returns=In(e,t.returns),t}function Uk(e,t){return t.parameters=Vu(e,t.parameters),t.returns=In(e,t.returns),t}function zk(e,t){return t.allOf=Vu(e,t.allOf),t}function Vk(e,t){return t.anyOf=Vu(e,t.anyOf),t}function Wk(e,t){return wt(t.items)||(t.items=Vu(e,t.items)),t}function qk(e,t){return t.items=In(e,t.items),t}function Kk(e,t){return t.items=In(e,t.items),t}function Gk(e,t){return t.items=In(e,t.items),t}function Zk(e,t){return t.item=In(e,t.item),t}function Hk(e,t){const r=Qk(e,t.properties);return{...t,..._t(r)}}function Yk(e,t){const r=In(e,jk(t)),n=In(e,Jw(t)),i=Yw(r,n);return{...t,...i}}function Jk(e,t){return t.index in e?e[t.index]:uf()}function Xk(e,t){const r=Nm(t),n=eo(t),i=In(e,t);return r&&n?Hw(i):r&&!n?io(i):!r&&n?oo(i):i}function Qk(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:Xk(e,t[n])}),{})}function Vu(e,t){return t.map(r=>In(e,r))}function In(e,t){return aa(t)?_k(e,t):ua(t)?Uk(e,t):hn(t)?zk(e,t):Ut(t)?Vk(e,t):Wo(t)?Wk(e,t):oa(t)?qk(e,t):Gc(t)?Kk(e,t):Hc(t)?Gk(e,t):Yc(t)?Zk(e,t):Ln(t)?Hk(e,t):Jc(t)?Yk(e,t):fw(t)?Jk(e,t):t}function e7(e,t){return In(t,Mm(e))}function t7(e){return B({[O]:"Integer",type:"integer"},e)}function r7(e,t,r){return{[e]:ga(Dt(e),t,Wr(r))}}function n7(e,t,r){return e.reduce((i,o)=>({...i,...r7(o,t,r)}),{})}function i7(e,t,r){return n7(e.keys,t,r)}function o7(e,t,r){const n=i7(e,t,r);return Jt(n)}function s7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function a7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function u7(e){return e.toUpperCase()}function l7(e){return e.toLowerCase()}function c7(e,t,r){const n=Ym(e.pattern);if(!bu(n))return{...e,pattern:Xw(e.pattern,t)};const s=[...of(n)].map(l=>Dt(l)),a=Qw(s,t),u=Xt(a);return Fw([u],r)}function Xw(e,t){return typeof e=="string"?t==="Uncapitalize"?s7(e):t==="Capitalize"?a7(e):t==="Uppercase"?u7(e):t==="Lowercase"?l7(e):e:e.toString()}function Qw(e,t){return e.map(r=>ga(r,t))}function ga(e,t,r={}){return zo(e)?o7(e,t,r):Vo(e)?c7(e,t,r):Ut(e)?Xt(Qw(e.anyOf,t),r):Uo(e)?Dt(Xw(e.const,t),r):B(e,r)}function f7(e,t={}){return ga(e,"Capitalize",t)}function d7(e,t={}){return ga(e,"Lowercase",t)}function m7(e,t={}){return ga(e,"Uncapitalize",t)}function h7(e,t={}){return ga(e,"Uppercase",t)}function p7(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=ff(e[i],t,Wr(r));return n}function g7(e,t,r){return p7(e.properties,t,r)}function y7(e,t,r){const n=g7(e,t,r);return Jt(n)}function b7(e,t){return e.map(r=>lh(r,t))}function w7(e,t){return e.map(r=>lh(r,t))}function $7(e,t){const{[t]:r,...n}=e;return n}function v7(e,t){return t.reduce((r,n)=>$7(r,n),e)}function D7(e,t,r){const n=Kr(e,[Er,"$id","required","properties"]),i=v7(r,t);return _t(i,n)}function x7(e){const t=e.reduce((r,n)=>dw(n)?[...r,Dt(n)]:r,[]);return Xt(t)}function lh(e,t){return hn(e)?so(b7(e.allOf,t)):Ut(e)?Xt(w7(e.anyOf,t)):Ln(e)?D7(e,t,e.properties):_t({})}function ff(e,t,r){const n=Nr(t)?x7(t):t,i=hr(t)?no(t):t,o=Mr(e),s=Mr(t);return Jr(e)?y7(e,i,r):zo(t)?k7(e,t,r):o&&s?Mt("Omit",[e,n],r):!o&&s?Mt("Omit",[e,n],r):o&&!s?Mt("Omit",[e,n],r):B({...lh(e,i),...r})}function A7(e,t,r){return{[t]:ff(e,[t],Wr(r))}}function E7(e,t,r){return t.reduce((n,i)=>({...n,...A7(e,i,r)}),{})}function C7(e,t,r){return E7(e,t.keys,r)}function k7(e,t,r){const n=C7(e,t,r);return Jt(n)}function F7(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=df(e[i],t,Wr(r));return n}function M7(e,t,r){return F7(e.properties,t,r)}function S7(e,t,r){const n=M7(e,t,r);return Jt(n)}function T7(e,t){return e.map(r=>ch(r,t))}function N7(e,t){return e.map(r=>ch(r,t))}function P7(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function I7(e,t,r){const n=Kr(e,[Er,"$id","required","properties"]),i=P7(r,t);return _t(i,n)}function O7(e){const t=e.reduce((r,n)=>dw(n)?[...r,Dt(n)]:r,[]);return Xt(t)}function ch(e,t){return hn(e)?so(T7(e.allOf,t)):Ut(e)?Xt(N7(e.anyOf,t)):Ln(e)?I7(e,t,e.properties):_t({})}function df(e,t,r){const n=Nr(t)?O7(t):t,i=hr(t)?no(t):t,o=Mr(e),s=Mr(t);return Jr(e)?S7(e,i,r):zo(t)?j7(e,t,r):o&&s?Mt("Pick",[e,n],r):!o&&s?Mt("Pick",[e,n],r):o&&!s?Mt("Pick",[e,n],r):B({...ch(e,i),...r})}function B7(e,t,r){return{[t]:df(e,[t],Wr(r))}}function R7(e,t,r){return t.reduce((n,i)=>({...n,...B7(e,i,r)}),{})}function L7(e,t,r){return R7(e,t.keys,r)}function j7(e,t,r){const n=L7(e,t,r);return Jt(n)}function _7(e,t){return Mt("Partial",[Mt(e,t)])}function U7(e){return Mt("Partial",[ma(e)])}function z7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=oo(e[r]);return t}function V7(e,t){const r=Kr(e,[Er,"$id","required","properties"]),n=z7(t);return _t(n,r)}function b1(e){return e.map(t=>e$(t))}function e$(e){return sa(e)?_7(e.target,e.parameters):Mr(e)?U7(e.$ref):hn(e)?so(b1(e.allOf)):Ut(e)?Xt(b1(e.anyOf)):Ln(e)?V7(e,e.properties):Zc(e)||Bu(e)||la(e)||Uo(e)||Pm(e)||ca(e)||Lu(e)||Im(e)||ju(e)?e:_t({})}function fh(e,t){return Jr(e)?K7(e,t):B({...e$(e),...t})}function W7(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=fh(e[n],Wr(t));return r}function q7(e,t){return W7(e.properties,t)}function K7(e,t){const r=q7(e,t);return Jt(r)}function G7(e,t){return Mt("Required",[Mt(e,t)])}function Z7(e){return Mt("Required",[ma(e)])}function H7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Kr(e[r],[Di]);return t}function Y7(e,t){const r=Kr(e,[Er,"$id","required","properties"]),n=H7(t);return _t(n,r)}function w1(e){return e.map(t=>t$(t))}function t$(e){return sa(e)?G7(e.target,e.parameters):Mr(e)?Z7(e.$ref):hn(e)?so(w1(e.allOf)):Ut(e)?Xt(w1(e.anyOf)):Ln(e)?Y7(e,e.properties):Zc(e)||Bu(e)||la(e)||Uo(e)||Pm(e)||ca(e)||Lu(e)||Im(e)||ju(e)?e:_t({})}function dh(e,t){return Jr(e)?Q7(e,t):B({...t$(e),...t})}function J7(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=dh(e[n],t);return r}function X7(e,t){return J7(e.properties,t)}function Q7(e,t){const r=X7(e,t);return Jt(r)}function eF(e,t){return t.map(r=>Mr(r)?mh(e,r.$ref):Gr(e,r))}function mh(e,t){return t in e?Mr(e[t])?mh(e,e[t].$ref):Gr(e,e[t]):nt()}function tF(e){return af(e[0])}function rF(e){return sf(e[0],e[1])}function nF(e){return eh(e[0])}function iF(e){return fh(e[0])}function oF(e){return ff(e[0],e[1])}function sF(e){return df(e[0],e[1])}function aF(e){return dh(e[0])}function uF(e,t,r){const n=eF(e,r);return t==="Awaited"?tF(n):t==="Index"?rF(n):t==="KeyOf"?nF(n):t==="Partial"?iF(n):t==="Omit"?oF(n):t==="Pick"?sF(n):t==="Required"?aF(n):nt()}function lF(e,t){return Km(Gr(e,t))}function cF(e,t){return Gm(Gr(e,t))}function fF(e,t,r){return Zm(Wu(e,t),Gr(e,r))}function dF(e,t,r){return Uu(Wu(e,t),Gr(e,r))}function mF(e,t){return so(Wu(e,t))}function hF(e,t){return Qm(Gr(e,t))}function pF(e,t){return _t(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:Gr(e,t[n])}),{}))}function gF(e,t){const[r,n]=[Gr(e,Jw(t)),uh(t)],i=Mm(t);return i.patternProperties[n]=r,i}function yF(e,t){return Mr(t)?{...mh(e,t.$ref),[Er]:t[Er]}:t}function bF(e,t){return da(Wu(e,t))}function wF(e,t){return Xt(Wu(e,t))}function Wu(e,t){return t.map(r=>Gr(e,r))}function Gr(e,t){return eo(t)?B(Gr(e,Kr(t,[Di])),t):Nm(t)?B(Gr(e,Kr(t,[Ou])),t):Ue(t)?B(yF(e,t),t):oa(t)?B(lF(e,t.items),t):Gc(t)?B(cF(e,t.items),t):sa(t)?B(uF(e,t.target,t.parameters)):aa(t)?B(fF(e,t.parameters,t.returns),t):ua(t)?B(dF(e,t.parameters,t.returns),t):hn(t)?B(mF(e,t.allOf),t):Hc(t)?B(hF(e,t.items),t):Ln(t)?B(pF(e,t.properties),t):Jc(t)?B(gF(e,t)):Wo(t)?B(bF(e,t.items||[]),t):Ut(t)?B(wF(e,t.anyOf),t):t}function $F(e,t){return t in e?Gr(e,e[t]):nt()}function vF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:$F(e,r)}),{})}class DF{constructor(t){const r=vF(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:B(this.$defs[t],r)};return B({[O]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function xF(e){return new DF(e)}function AF(e,t){return B({[O]:"Not",not:e},t)}function EF(e,t){return ua(e)?da(e.parameters,t):nt()}let CF=0;function kF(e,t={}){wt(t.$id)&&(t.$id=`T${CF++}`);const r=Mm(e({[O]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,B({[Kc]:"Recursive",...r},t)}function FF(e,t){const r=pt(e)?new globalThis.RegExp(e):e;return B({[O]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function MF(e){return hn(e)?e.allOf:Ut(e)?e.anyOf:Wo(e)?e.items??[]:[]}function SF(e){return MF(e)}function TF(e,t){return ua(e)?B(e.returns,t):nt(t)}class NF{constructor(t){this.schema=t}Decode(t){return new PF(this.schema,t)}}class PF{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const o={Encode:s=>r[Er].Encode(t(s)),Decode:s=>this.decode(r[Er].Decode(s))};return{...r,[Er]:o}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[Er]:n}}Encode(t){return Ue(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function IF(e){return new NF(e)}function OF(e={}){return B({[O]:e[O]??"Unsafe"},e)}function BF(e){return B({[O]:"Void",type:"void"},e)}const RF=Object.freeze(Object.defineProperty({__proto__:null,Any:gu,Argument:IC,Array:Km,AsyncIterator:Gm,Awaited:af,BigInt:Jm,Boolean:Cw,Capitalize:f7,Composite:p9,Const:b9,Constructor:Zm,ConstructorParameters:w9,Date:Rw,Enum:$9,Exclude:oh,Extends:ih,Extract:sh,Function:Uu,Index:sf,InstanceType:Fk,Instantiate:e7,Integer:t7,Intersect:so,Iterator:Qm,KeyOf:eh,Literal:Dt,Lowercase:d7,Mapped:R8,Module:xF,Never:nt,Not:AF,Null:Lw,Number:Zo,Object:_t,Omit:ff,Optional:oo,Parameters:EF,Partial:fh,Pick:df,Promise:Tw,Readonly:io,ReadonlyOptional:Hw,Record:Yw,Recursive:kF,Ref:ma,RegExp:FF,Required:dh,Rest:SF,ReturnType:TF,String:Io,Symbol:jw,TemplateLiteral:Fw,Transform:IF,Tuple:da,Uint8Array:Uw,Uncapitalize:m7,Undefined:_w,Union:Xt,Unknown:uf,Unsafe:OF,Uppercase:h7,Void:BF},Symbol.toStringTag,{value:"Module"})),Le=RF;function r$(e){switch(e.errorType){case C.ArrayContains:return"Expected array to contain at least one matching value";case C.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case C.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case C.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case C.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case C.ArrayUniqueItems:return"Expected array elements to be unique";case C.Array:return"Expected array";case C.AsyncIterator:return"Expected AsyncIterator";case C.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case C.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case C.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case C.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case C.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case C.BigInt:return"Expected bigint";case C.Boolean:return"Expected boolean";case C.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case C.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case C.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case C.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case C.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case C.Date:return"Expected Date";case C.Function:return"Expected function";case C.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case C.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case C.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case C.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case C.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case C.Integer:return"Expected integer";case C.IntersectUnevaluatedProperties:return"Unexpected property";case C.Intersect:return"Expected all values to match";case C.Iterator:return"Expected Iterator";case C.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case C.Never:return"Never";case C.Not:return"Value should not match";case C.Null:return"Expected null";case C.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case C.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case C.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case C.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case C.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case C.Number:return"Expected number";case C.Object:return"Expected object";case C.ObjectAdditionalProperties:return"Unexpected property";case C.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case C.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case C.ObjectRequiredProperty:return"Expected required property";case C.Promise:return"Expected Promise";case C.RegExp:return"Expected string to match regular expression";case C.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case C.StringFormat:return`Expected string to match '${e.schema.format}' format`;case C.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case C.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case C.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case C.String:return"Expected string";case C.Symbol:return"Expected symbol";case C.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case C.Tuple:return"Expected tuple";case C.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case C.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case C.Uint8Array:return"Expected Uint8Array";case C.Undefined:return"Expected undefined";case C.Union:return"Expected union value";case C.Void:return"Expected void";case C.Kind:return`Expected kind '${e.schema[O]}'`;default:return"Unknown error type"}}let n$=r$;function LF(e){n$=e}function jF(){return n$}class _F extends Yt{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function UF(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new _F(e);return gn(r,t)}function mf(e,t){return!Ur(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function gn(e,t){return e[O]==="This"||e[O]==="Ref"?UF(e,t):e}class zF extends Yt{constructor(t){super("Unable to hash value"),this.value=t}}var Zr;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(Zr||(Zr={}));let hs=BigInt("14695981039346656037");const[VF,WF]=[BigInt("1099511628211"),BigInt("18446744073709551616")],qF=Array.from({length:256}).map((e,t)=>BigInt(t)),i$=new Float64Array(1),o$=new DataView(i$.buffer),s$=new Uint8Array(i$.buffer);function*KF(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function GF(e){nr(Zr.Array);for(const t of e)Vs(t)}function ZF(e){nr(Zr.Boolean),nr(e?1:0)}function HF(e){nr(Zr.BigInt),o$.setBigInt64(0,e);for(const t of s$)nr(t)}function YF(e){nr(Zr.Date),Vs(e.getTime())}function JF(e){nr(Zr.Null)}function XF(e){nr(Zr.Number),o$.setFloat64(0,e);for(const t of s$)nr(t)}function QF(e){nr(Zr.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())Vs(t),Vs(e[t])}function eM(e){nr(Zr.String);for(let t=0;t<e.length;t++)for(const r of KF(e.charCodeAt(t)))nr(r)}function tM(e){nr(Zr.Symbol),Vs(e.description)}function rM(e){nr(Zr.Uint8Array);for(let t=0;t<e.length;t++)nr(e[t])}function nM(e){return nr(Zr.Undefined)}function Vs(e){if(qr(e))return GF(e);if(Wc(e))return ZF(e);if(ai(e))return HF(e);if(Sm(e))return YF(e);if(Vc(e))return JF();if(se(e))return XF(e);if(Zn(e))return QF(e);if(Ur(e))return eM(e);if(qc(e))return tM(e);if(Tm(e))return rM(e);if(Qi(e))return nM();throw new zF(e)}function nr(e){hs=hs^qF[e],hs=hs*VF%WF}function hh(e){return hs=BigInt("14695981039346656037"),Vs(e),hs}class iM extends Yt{constructor(t){super("Unknown type"),this.schema=t}}function oM(e){return e[O]==="Any"||e[O]==="Unknown"}function fe(e){return e!==void 0}function sM(e,t,r){return!0}function aM(e,t,r){return!0}function uM(e,t,r){if(!qr(r)||fe(e.minItems)&&!(r.length>=e.minItems)||fe(e.maxItems)&&!(r.length<=e.maxItems)||!r.every(o=>Rt(e.items,t,o))||e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of r){const a=hh(s);if(o.has(a))return!1;o.add(a)}return!0})())return!1;if(!(fe(e.contains)||se(e.minContains)||se(e.maxContains)))return!0;const n=fe(e.contains)?e.contains:nt(),i=r.reduce((o,s)=>Rt(n,t,s)?o+1:o,0);return!(i===0||se(e.minContains)&&i<e.minContains||se(e.maxContains)&&i>e.maxContains)}function lM(e,t,r){return nw(r)}function cM(e,t,r){return!(!ai(r)||fe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||fe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||fe(e.maximum)&&!(r<=e.maximum)||fe(e.minimum)&&!(r>=e.minimum)||fe(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function fM(e,t,r){return Wc(r)}function dM(e,t,r){return Rt(e.returns,t,r.prototype)}function mM(e,t,r){return!(!Sm(r)||fe(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||fe(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||fe(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||fe(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||fe(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function hM(e,t,r){return uw(r)}function pM(e,t,r){const n=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return Rt(i,[...t,...n],r)}function gM(e,t,r){return!(!aw(r)||fe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||fe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||fe(e.maximum)&&!(r<=e.maximum)||fe(e.minimum)&&!(r>=e.minimum)||fe(e.multipleOf)&&r%e.multipleOf!==0)}function yM(e,t,r){const n=e.allOf.every(i=>Rt(i,t,r));if(e.unevaluatedProperties===!1){const i=new RegExp(zs(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s));return n&&o}else if(hr(e.unevaluatedProperties)){const i=new RegExp(zs(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s)||Rt(e.unevaluatedProperties,t,r[s]));return n&&o}else return n}function bM(e,t,r){return iw(r)}function wM(e,t,r){return r===e.const}function $M(e,t,r){return!1}function vM(e,t,r){return!Rt(e.not,t,r)}function DM(e,t,r){return Vc(r)}function xM(e,t,r){return!(!ht.IsNumberLike(r)||fe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||fe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||fe(e.minimum)&&!(r>=e.minimum)||fe(e.maximum)&&!(r<=e.maximum)||fe(e.multipleOf)&&r%e.multipleOf!==0)}function AM(e,t,r){if(!ht.IsObjectLike(r)||fe(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||fe(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const i of n){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!Rt(o,t,r[i])||(pa(o)||oM(o))&&!(i in r))return!1}else if(ht.IsExactOptionalProperty(r,i)&&!Rt(o,t,r[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&i.length===n.length?!0:i.every(o=>n.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(o=>n.includes(o)||Rt(e.additionalProperties,t,r[o])):!0}function EM(e,t,r){return ow(r)}function CM(e,t,r){if(!ht.IsRecordLike(r)||fe(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||fe(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,i]=Object.entries(e.patternProperties)[0],o=new RegExp(n),s=Object.entries(r).every(([l,c])=>o.test(l)?Rt(i,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([l,c])=>o.test(l)?!0:Rt(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(l=>o.test(l)):!0;return s&&a&&u}function kM(e,t,r){return Rt(gn(e,t),t,r)}function FM(e,t,r){const n=new RegExp(e.source,e.flags);return fe(e.minLength)&&!(r.length>=e.minLength)||fe(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function MM(e,t,r){return!Ur(r)||fe(e.minLength)&&!(r.length>=e.minLength)||fe(e.maxLength)&&!(r.length<=e.maxLength)||fe(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:fe(e.format)?Um(e.format)?zm(e.format)(r):!1:!0}function SM(e,t,r){return qc(r)}function TM(e,t,r){return Ur(r)&&new RegExp(e.pattern).test(r)}function NM(e,t,r){return Rt(gn(e,t),t,r)}function PM(e,t,r){if(!qr(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!Rt(e.items[n],t,r[n]))return!1;return!0}function IM(e,t,r){return Qi(r)}function OM(e,t,r){return e.anyOf.some(n=>Rt(n,t,r))}function BM(e,t,r){return!(!Tm(r)||fe(e.maxByteLength)&&!(r.length<=e.maxByteLength)||fe(e.minByteLength)&&!(r.length>=e.minByteLength))}function RM(e,t,r){return!0}function LM(e,t,r){return ht.IsVoidLike(r)}function jM(e,t,r){return Zi(e[O])?qm(e[O])(e,r):!1}function Rt(e,t,r){const n=fe(e.$id)?mf(e,t):t,i=e;switch(i[O]){case"Any":return sM();case"Argument":return aM();case"Array":return uM(i,n,r);case"AsyncIterator":return lM(i,n,r);case"BigInt":return cM(i,n,r);case"Boolean":return fM(i,n,r);case"Constructor":return dM(i,n,r);case"Date":return mM(i,n,r);case"Function":return hM(i,n,r);case"Import":return pM(i,n,r);case"Integer":return gM(i,n,r);case"Intersect":return yM(i,n,r);case"Iterator":return bM(i,n,r);case"Literal":return wM(i,n,r);case"Never":return $M();case"Not":return vM(i,n,r);case"Null":return DM(i,n,r);case"Number":return xM(i,n,r);case"Object":return AM(i,n,r);case"Promise":return EM(i,n,r);case"Record":return CM(i,n,r);case"Ref":return kM(i,n,r);case"RegExp":return FM(i,n,r);case"String":return MM(i,n,r);case"Symbol":return SM(i,n,r);case"TemplateLiteral":return TM(i,n,r);case"This":return NM(i,n,r);case"Tuple":return PM(i,n,r);case"Undefined":return IM(i,n,r);case"Union":return OM(i,n,r);case"Uint8Array":return BM(i,n,r);case"Unknown":return RM();case"Void":return LM(i,n,r);default:if(!Zi(i[O]))throw new iM(i);return jM(i,n,r)}}function fc(...e){return e.length===3?Rt(e[0],e[1],e[2]):Rt(e[0],[],e[1])}var C;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(C||(C={}));class _M extends Yt{constructor(t){super("Unknown type"),this.schema=t}}function ni(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function ce(e){return e!==void 0}class a${constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function R(e,t,r,n,i=[]){return{type:e,schema:t,path:r,value:n,message:jF()({errorType:e,path:r,schema:t,value:n,errors:i}),errors:i}}function*UM(e,t,r,n){}function*zM(e,t,r,n){}function*VM(e,t,r,n){if(!qr(n))return yield R(C.Array,e,r,n);ce(e.minItems)&&!(n.length>=e.minItems)&&(yield R(C.ArrayMinItems,e,r,n)),ce(e.maxItems)&&!(n.length<=e.maxItems)&&(yield R(C.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*Lt(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const u=hh(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield R(C.ArrayUniqueItems,e,r,n)),!(ce(e.contains)||ce(e.minContains)||ce(e.maxContains)))return;const i=ce(e.contains)?e.contains:nt(),o=n.reduce((s,a,u)=>Lt(i,t,`${r}${u}`,a).next().done===!0?s+1:s,0);o===0&&(yield R(C.ArrayContains,e,r,n)),se(e.minContains)&&o<e.minContains&&(yield R(C.ArrayMinContains,e,r,n)),se(e.maxContains)&&o>e.maxContains&&(yield R(C.ArrayMaxContains,e,r,n))}function*WM(e,t,r,n){nw(n)||(yield R(C.AsyncIterator,e,r,n))}function*qM(e,t,r,n){if(!ai(n))return yield R(C.BigInt,e,r,n);ce(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield R(C.BigIntExclusiveMaximum,e,r,n)),ce(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield R(C.BigIntExclusiveMinimum,e,r,n)),ce(e.maximum)&&!(n<=e.maximum)&&(yield R(C.BigIntMaximum,e,r,n)),ce(e.minimum)&&!(n>=e.minimum)&&(yield R(C.BigIntMinimum,e,r,n)),ce(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield R(C.BigIntMultipleOf,e,r,n))}function*KM(e,t,r,n){Wc(n)||(yield R(C.Boolean,e,r,n))}function*GM(e,t,r,n){yield*Lt(e.returns,t,r,n.prototype)}function*ZM(e,t,r,n){if(!Sm(n))return yield R(C.Date,e,r,n);ce(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield R(C.DateExclusiveMaximumTimestamp,e,r,n)),ce(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield R(C.DateExclusiveMinimumTimestamp,e,r,n)),ce(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield R(C.DateMaximumTimestamp,e,r,n)),ce(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield R(C.DateMinimumTimestamp,e,r,n)),ce(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield R(C.DateMultipleOfTimestamp,e,r,n))}function*HM(e,t,r,n){uw(n)||(yield R(C.Function,e,r,n))}function*YM(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*Lt(o,[...t,...i],r,n)}function*JM(e,t,r,n){if(!aw(n))return yield R(C.Integer,e,r,n);ce(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield R(C.IntegerExclusiveMaximum,e,r,n)),ce(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield R(C.IntegerExclusiveMinimum,e,r,n)),ce(e.maximum)&&!(n<=e.maximum)&&(yield R(C.IntegerMaximum,e,r,n)),ce(e.minimum)&&!(n>=e.minimum)&&(yield R(C.IntegerMinimum,e,r,n)),ce(e.multipleOf)&&n%e.multipleOf!==0&&(yield R(C.IntegerMultipleOf,e,r,n))}function*XM(e,t,r,n){let i=!1;for(const o of e.allOf)for(const s of Lt(o,t,r,n))i=!0,yield s;if(i)return yield R(C.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const o=new RegExp(zs(e));for(const s of Object.getOwnPropertyNames(n))o.test(s)||(yield R(C.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp(zs(e));for(const s of Object.getOwnPropertyNames(n))if(!o.test(s)){const a=Lt(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*QM(e,t,r,n){iw(n)||(yield R(C.Iterator,e,r,n))}function*eS(e,t,r,n){n!==e.const&&(yield R(C.Literal,e,r,n))}function*tS(e,t,r,n){yield R(C.Never,e,r,n)}function*rS(e,t,r,n){Lt(e.not,t,r,n).next().done===!0&&(yield R(C.Not,e,r,n))}function*nS(e,t,r,n){Vc(n)||(yield R(C.Null,e,r,n))}function*iS(e,t,r,n){if(!ht.IsNumberLike(n))return yield R(C.Number,e,r,n);ce(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield R(C.NumberExclusiveMaximum,e,r,n)),ce(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield R(C.NumberExclusiveMinimum,e,r,n)),ce(e.maximum)&&!(n<=e.maximum)&&(yield R(C.NumberMaximum,e,r,n)),ce(e.minimum)&&!(n>=e.minimum)&&(yield R(C.NumberMinimum,e,r,n)),ce(e.multipleOf)&&n%e.multipleOf!==0&&(yield R(C.NumberMultipleOf,e,r,n))}function*oS(e,t,r,n){if(!ht.IsObjectLike(n))return yield R(C.Object,e,r,n);ce(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield R(C.ObjectMinProperties,e,r,n)),ce(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield R(C.ObjectMaxProperties,e,r,n));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of i)s.includes(a)||(yield R(C.ObjectRequiredProperty,e.properties[a],`${r}/${ni(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)o.includes(a)||(yield R(C.ObjectAdditionalProperties,e,`${r}/${ni(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)o.includes(a)||(yield*Lt(e.additionalProperties,t,`${r}/${ni(a)}`,n[a]));for(const a of o){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*Lt(u,t,`${r}/${ni(a)}`,n[a]),pa(e)&&!(a in n)&&(yield R(C.ObjectRequiredProperty,u,`${r}/${ni(a)}`,void 0))):ht.IsExactOptionalProperty(n,a)&&(yield*Lt(u,t,`${r}/${ni(a)}`,n[a]))}}function*sS(e,t,r,n){ow(n)||(yield R(C.Promise,e,r,n))}function*aS(e,t,r,n){if(!ht.IsRecordLike(n))return yield R(C.Object,e,r,n);ce(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield R(C.ObjectMinProperties,e,r,n)),ce(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield R(C.ObjectMaxProperties,e,r,n));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[a,u]of Object.entries(n))s.test(a)&&(yield*Lt(o,t,`${r}/${ni(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(n))s.test(a)||(yield*Lt(e.additionalProperties,t,`${r}/${ni(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(n))if(!s.test(a))return yield R(C.ObjectAdditionalProperties,e,`${r}/${ni(a)}`,u)}}function*uS(e,t,r,n){yield*Lt(gn(e,t),t,r,n)}function*lS(e,t,r,n){if(!Ur(n))return yield R(C.String,e,r,n);if(ce(e.minLength)&&!(n.length>=e.minLength)&&(yield R(C.StringMinLength,e,r,n)),ce(e.maxLength)&&!(n.length<=e.maxLength)&&(yield R(C.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield R(C.RegExp,e,r,n)}function*cS(e,t,r,n){if(!Ur(n))return yield R(C.String,e,r,n);ce(e.minLength)&&!(n.length>=e.minLength)&&(yield R(C.StringMinLength,e,r,n)),ce(e.maxLength)&&!(n.length<=e.maxLength)&&(yield R(C.StringMaxLength,e,r,n)),Ur(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield R(C.StringPattern,e,r,n))),Ur(e.format)&&(Um(e.format)?zm(e.format)(n)||(yield R(C.StringFormat,e,r,n)):yield R(C.StringFormatUnknown,e,r,n))}function*fS(e,t,r,n){qc(n)||(yield R(C.Symbol,e,r,n))}function*dS(e,t,r,n){if(!Ur(n))return yield R(C.String,e,r,n);new RegExp(e.pattern).test(n)||(yield R(C.StringPattern,e,r,n))}function*mS(e,t,r,n){yield*Lt(gn(e,t),t,r,n)}function*hS(e,t,r,n){if(!qr(n))return yield R(C.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield R(C.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield R(C.TupleLength,e,r,n);if(e.items)for(let i=0;i<e.items.length;i++)yield*Lt(e.items[i],t,`${r}/${i}`,n[i])}function*pS(e,t,r,n){Qi(n)||(yield R(C.Undefined,e,r,n))}function*gS(e,t,r,n){if(fc(e,t,n))return;const i=e.anyOf.map(o=>new a$(Lt(o,t,r,n)));yield R(C.Union,e,r,n,i)}function*yS(e,t,r,n){if(!Tm(n))return yield R(C.Uint8Array,e,r,n);ce(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield R(C.Uint8ArrayMaxByteLength,e,r,n)),ce(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield R(C.Uint8ArrayMinByteLength,e,r,n))}function*bS(e,t,r,n){}function*wS(e,t,r,n){ht.IsVoidLike(n)||(yield R(C.Void,e,r,n))}function*$S(e,t,r,n){qm(e[O])(e,n)||(yield R(C.Kind,e,r,n))}function*Lt(e,t,r,n){const i=ce(e.$id)?[...t,e]:t,o=e;switch(o[O]){case"Any":return yield*UM();case"Argument":return yield*zM();case"Array":return yield*VM(o,i,r,n);case"AsyncIterator":return yield*WM(o,i,r,n);case"BigInt":return yield*qM(o,i,r,n);case"Boolean":return yield*KM(o,i,r,n);case"Constructor":return yield*GM(o,i,r,n);case"Date":return yield*ZM(o,i,r,n);case"Function":return yield*HM(o,i,r,n);case"Import":return yield*YM(o,i,r,n);case"Integer":return yield*JM(o,i,r,n);case"Intersect":return yield*XM(o,i,r,n);case"Iterator":return yield*QM(o,i,r,n);case"Literal":return yield*eS(o,i,r,n);case"Never":return yield*tS(o,i,r,n);case"Not":return yield*rS(o,i,r,n);case"Null":return yield*nS(o,i,r,n);case"Number":return yield*iS(o,i,r,n);case"Object":return yield*oS(o,i,r,n);case"Promise":return yield*sS(o,i,r,n);case"Record":return yield*aS(o,i,r,n);case"Ref":return yield*uS(o,i,r,n);case"RegExp":return yield*lS(o,i,r,n);case"String":return yield*cS(o,i,r,n);case"Symbol":return yield*fS(o,i,r,n);case"TemplateLiteral":return yield*dS(o,i,r,n);case"This":return yield*mS(o,i,r,n);case"Tuple":return yield*hS(o,i,r,n);case"Undefined":return yield*pS(o,i,r,n);case"Union":return yield*gS(o,i,r,n);case"Uint8Array":return yield*yS(o,i,r,n);case"Unknown":return yield*bS();case"Void":return yield*wS(o,i,r,n);default:if(!Zi(o[O]))throw new _M(e);return yield*$S(o,i,r,n)}}function vS(...e){const t=e.length===3?Lt(e[0],e[1],"",e[2]):Lt(e[0],[],"",e[1]);return new a$(t)}class DS extends Yt{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class xS extends Yt{constructor(t,r,n,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=i}}function Ze(e,t,r){try{return Ue(e)?e[Er].Decode(r):r}catch(n){throw new xS(e,t,r,n)}}function AS(e,t,r,n){return qr(n)?Ze(e,r,n.map((i,o)=>jn(e.items,t,`${r}/${o}`,i))):Ze(e,r,n)}function ES(e,t,r,n){if(!Zn(n)||lw(n))return Ze(e,r,n);const i=Bw(e),o=i.map(c=>c[0]),s={...n};for(const[c,f]of i)c in s&&(s[c]=jn(f,t,`${r}/${c}`,s[c]));if(!Ue(e.unevaluatedProperties))return Ze(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Ze(u,`${r}/${c}`,l[c]));return Ze(e,r,l)}function CS(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=jn(o,[...t,...i],r,n);return Ze(e,r,s)}function kS(e,t,r,n){return Ze(e,r,jn(e.not,t,r,n))}function FS(e,t,r,n){if(!Zn(n))return Ze(e,r,n);const i=Ho(e),o={...n};for(const l of i)sw(o,l)&&(Qi(o[l])&&(!ju(e.properties[l])||ht.IsExactOptionalProperty(o,l))||(o[l]=jn(e.properties[l],t,`${r}/${l}`,o[l])));if(!hr(e.additionalProperties))return Ze(e,r,o);const s=Object.getOwnPropertyNames(o),a=e.additionalProperties,u={...o};for(const l of s)i.includes(l)||(u[l]=Ze(a,`${r}/${l}`,u[l]));return Ze(e,r,u)}function MS(e,t,r,n){if(!Zn(n))return Ze(e,r,n);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...n};for(const c of Object.getOwnPropertyNames(n))o.test(c)&&(s[c]=jn(e.patternProperties[i],t,`${r}/${c}`,s[c]));if(!hr(e.additionalProperties))return Ze(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.test(c)||(l[c]=Ze(u,`${r}/${c}`,l[c]));return Ze(e,r,l)}function SS(e,t,r,n){const i=gn(e,t);return Ze(e,r,jn(i,t,r,n))}function TS(e,t,r,n){const i=gn(e,t);return Ze(e,r,jn(i,t,r,n))}function NS(e,t,r,n){return qr(n)&&qr(e.items)?Ze(e,r,e.items.map((i,o)=>jn(i,t,`${r}/${o}`,n[o]))):Ze(e,r,n)}function PS(e,t,r,n){for(const i of e.anyOf){if(!fc(i,t,n))continue;const o=jn(i,t,r,n);return Ze(e,r,o)}return Ze(e,r,n)}function jn(e,t,r,n){const i=mf(e,t),o=e;switch(e[O]){case"Array":return AS(o,i,r,n);case"Import":return CS(o,i,r,n);case"Intersect":return ES(o,i,r,n);case"Not":return kS(o,i,r,n);case"Object":return FS(o,i,r,n);case"Record":return MS(o,i,r,n);case"Ref":return SS(o,i,r,n);case"Symbol":return Ze(o,r,n);case"This":return TS(o,i,r,n);case"Tuple":return NS(o,i,r,n);case"Union":return PS(o,i,r,n);default:return Ze(o,r,n)}}function IS(e,t,r){return jn(e,t,"",r)}class OS extends Yt{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class BS extends Yt{constructor(t,r,n,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=i}}function Gt(e,t,r){try{return Ue(e)?e[Er].Encode(r):r}catch(n){throw new BS(e,t,r,n)}}function RS(e,t,r,n){const i=Gt(e,r,n);return qr(i)?i.map((o,s)=>On(e.items,t,`${r}/${s}`,o)):i}function LS(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=Gt(e,r,n);return On(o,[...t,...i],r,s)}function jS(e,t,r,n){const i=Gt(e,r,n);if(!Zn(n)||lw(n))return i;const o=Bw(e),s=o.map(f=>f[0]),a={...i};for(const[f,d]of o)f in a&&(a[f]=On(d,t,`${r}/${f}`,a[f]));if(!Ue(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const f of u)s.includes(f)||(c[f]=Gt(l,`${r}/${f}`,c[f]));return c}function _S(e,t,r,n){return Gt(e.not,r,Gt(e,r,n))}function US(e,t,r,n){const i=Gt(e,r,n);if(!Zn(i))return i;const o=Ho(e),s={...i};for(const c of o)sw(s,c)&&(Qi(s[c])&&(!ju(e.properties[c])||ht.IsExactOptionalProperty(s,c))||(s[c]=On(e.properties[c],t,`${r}/${c}`,s[c])));if(!hr(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Gt(u,`${r}/${c}`,l[c]));return l}function zS(e,t,r,n){const i=Gt(e,r,n);if(!Zn(n))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...i};for(const f of Object.getOwnPropertyNames(n))s.test(f)&&(a[f]=On(e.patternProperties[o],t,`${r}/${f}`,a[f]));if(!hr(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const f of u)s.test(f)||(c[f]=Gt(l,`${r}/${f}`,c[f]));return c}function VS(e,t,r,n){const i=gn(e,t),o=On(i,t,r,n);return Gt(e,r,o)}function WS(e,t,r,n){const i=gn(e,t),o=On(i,t,r,n);return Gt(e,r,o)}function qS(e,t,r,n){const i=Gt(e,r,n);return qr(e.items)?e.items.map((o,s)=>On(o,t,`${r}/${s}`,i[s])):[]}function KS(e,t,r,n){for(const i of e.anyOf){if(!fc(i,t,n))continue;const o=On(i,t,r,n);return Gt(e,r,o)}for(const i of e.anyOf){const o=On(i,t,r,n);if(fc(e,t,o))return Gt(e,r,o)}return Gt(e,r,n)}function On(e,t,r,n){const i=mf(e,t),o=e;switch(e[O]){case"Array":return RS(o,i,r,n);case"Import":return LS(o,i,r,n);case"Intersect":return jS(o,i,r,n);case"Not":return _S(o,i,r,n);case"Object":return US(o,i,r,n);case"Record":return zS(o,i,r,n);case"Ref":return VS(o,i,r,n);case"This":return WS(o,i,r,n);case"Tuple":return qS(o,i,r,n);case"Union":return KS(o,i,r,n);default:return Gt(o,r,n)}}function GS(e,t,r){return On(e,t,"",r)}function ZS(e,t){return Ue(e)||St(e.items,t)}function HS(e,t){return Ue(e)||St(e.items,t)}function YS(e,t){return Ue(e)||St(e.returns,t)||e.parameters.some(r=>St(r,t))}function JS(e,t){return Ue(e)||St(e.returns,t)||e.parameters.some(r=>St(r,t))}function XS(e,t){return Ue(e)||Ue(e.unevaluatedProperties)||e.allOf.some(r=>St(r,t))}function QS(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),n=e.$defs[e.$ref];return Ue(e)||St(n,[...r,...t])}function eT(e,t){return Ue(e)||St(e.items,t)}function tT(e,t){return Ue(e)||St(e.not,t)}function rT(e,t){return Ue(e)||Object.values(e.properties).some(r=>St(r,t))||hr(e.additionalProperties)&&St(e.additionalProperties,t)}function nT(e,t){return Ue(e)||St(e.item,t)}function iT(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return Ue(e)||St(n,t)||hr(e.additionalProperties)&&Ue(e.additionalProperties)}function oT(e,t){return Ue(e)?!0:St(gn(e,t),t)}function sT(e,t){return Ue(e)?!0:St(gn(e,t),t)}function aT(e,t){return Ue(e)||!Qi(e.items)&&e.items.some(r=>St(r,t))}function uT(e,t){return Ue(e)||e.anyOf.some(r=>St(r,t))}function St(e,t){const r=mf(e,t),n=e;if(e.$id&&g0.has(e.$id))return!1;switch(e.$id&&g0.add(e.$id),e[O]){case"Array":return ZS(n,r);case"AsyncIterator":return HS(n,r);case"Constructor":return YS(n,r);case"Function":return JS(n,r);case"Import":return QS(n,r);case"Intersect":return XS(n,r);case"Iterator":return eT(n,r);case"Not":return tT(n,r);case"Object":return rT(n,r);case"Promise":return nT(n,r);case"Record":return iT(n,r);case"Ref":return oT(n,r);case"This":return sT(n,r);case"Tuple":return aT(n,r);case"Union":return uT(n,r);default:return Ue(e)}}const g0=new Set;function lT(e,t){return g0.clear(),St(e,t)}class cT{constructor(t,r,n,i){this.schema=t,this.references=r,this.checkFunc=n,this.code=i,this.hasTransform=lT(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return vS(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new DS(this.schema,t,this.Errors(t).First());return this.hasTransform?IS(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?GS(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new OS(this.schema,t,this.Errors(t).First());return r}}var ui;(function(e){function t(o){return o===36}e.DollarSign=t;function r(o){return o===95}e.IsUnderscore=r;function n(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=n;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(ui||(ui={}));var dc;(function(e){function t(o){return o.length===0?!1:ui.IsNumeric(o.charCodeAt(0))}function r(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const a=o.charCodeAt(s);if(!(ui.IsAlpha(a)||ui.IsNumeric(a)||ui.DollarSign(a)||ui.IsUnderscore(a)))return!1}return!0}function n(o){return o.replace(/'/g,"\\'")}function i(o,s){return r(s)?`${o}.${s}`:`${o}['${n(s)}']`}e.Encode=i})(dc||(dc={}));var y0;(function(e){function t(r){const n=[];for(let i=0;i<r.length;i++){const o=r.charCodeAt(i);ui.IsNumeric(o)||ui.IsAlpha(o)?n.push(r.charAt(i)):n.push(`_${o}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(y0||(y0={}));var b0;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(b0||(b0={}));class fT extends Yt{constructor(t){super("Unknown type"),this.schema=t}}class $1 extends Yt{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var yo;(function(e){function t(s,a,u){return ht.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${dc.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function r(s){return ht.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return ht.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function i(s){return ht.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return ht.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(yo||(yo={}));var Za;(function(e){function t(w){return w[O]==="Any"||w[O]==="Unknown"}function*r(w,j,x){yield"true"}function*n(w,j,x){yield"true"}function*i(w,j,x){yield`Array.isArray(${x})`;const[H,V]=[ki("value","any"),ki("acc","number")];se(w.maxItems)&&(yield`${x}.length <= ${w.maxItems}`),se(w.minItems)&&(yield`${x}.length >= ${w.minItems}`);const q=zt(w.items,j,"value");if(yield`${x}.every((${H}) => ${q})`,tt(w.contains)||se(w.minContains)||se(w.maxContains)){const Re=tt(w.contains)?w.contains:nt(),br=zt(Re,j,"value"),Yn=se(w.minContains)?[`(count >= ${w.minContains})`]:[],wn=se(w.maxContains)?[`(count <= ${w.maxContains})`]:[],Un=`const count = value.reduce((${V}, ${H}) => ${br} ? acc + 1 : acc, 0)`,Xu=["(count > 0)",...Yn,...wn].join(" && ");yield`((${H}) => { ${Un}; return ${Xu}})(${x})`}w.uniqueItems===!0&&(yield`((${H}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${x})`)}function*o(w,j,x){yield`(typeof value === 'object' && Symbol.asyncIterator in ${x})`}function*s(w,j,x){yield`(typeof ${x} === 'bigint')`,ai(w.exclusiveMaximum)&&(yield`${x} < BigInt(${w.exclusiveMaximum})`),ai(w.exclusiveMinimum)&&(yield`${x} > BigInt(${w.exclusiveMinimum})`),ai(w.maximum)&&(yield`${x} <= BigInt(${w.maximum})`),ai(w.minimum)&&(yield`${x} >= BigInt(${w.minimum})`),ai(w.multipleOf)&&(yield`(${x} % BigInt(${w.multipleOf})) === 0`)}function*a(w,j,x){yield`(typeof ${x} === 'boolean')`}function*u(w,j,x){yield*ct(w.returns,j,`${x}.prototype`)}function*l(w,j,x){yield`(${x} instanceof Date) && Number.isFinite(${x}.getTime())`,se(w.exclusiveMaximumTimestamp)&&(yield`${x}.getTime() < ${w.exclusiveMaximumTimestamp}`),se(w.exclusiveMinimumTimestamp)&&(yield`${x}.getTime() > ${w.exclusiveMinimumTimestamp}`),se(w.maximumTimestamp)&&(yield`${x}.getTime() <= ${w.maximumTimestamp}`),se(w.minimumTimestamp)&&(yield`${x}.getTime() >= ${w.minimumTimestamp}`),se(w.multipleOfTimestamp)&&(yield`(${x}.getTime() % ${w.multipleOfTimestamp}) === 0`)}function*c(w,j,x){yield`(typeof ${x} === 'function')`}function*f(w,j,x){const H=globalThis.Object.getOwnPropertyNames(w.$defs).reduce((V,q)=>[...V,w.$defs[q]],[]);yield*ct(ma(w.$ref),[...j,...H],x)}function*d(w,j,x){yield`Number.isInteger(${x})`,se(w.exclusiveMaximum)&&(yield`${x} < ${w.exclusiveMaximum}`),se(w.exclusiveMinimum)&&(yield`${x} > ${w.exclusiveMinimum}`),se(w.maximum)&&(yield`${x} <= ${w.maximum}`),se(w.minimum)&&(yield`${x} >= ${w.minimum}`),se(w.multipleOf)&&(yield`(${x} % ${w.multipleOf}) === 0`)}function*m(w,j,x){const H=w.allOf.map(V=>zt(V,j,x)).join(" && ");if(w.unevaluatedProperties===!1){const V=yr(`${new RegExp(zs(w))};`),q=`Object.getOwnPropertyNames(${x}).every(key => ${V}.test(key))`;yield`(${H} && ${q})`}else if(tt(w.unevaluatedProperties)){const V=yr(`${new RegExp(zs(w))};`),q=`Object.getOwnPropertyNames(${x}).every(key => ${V}.test(key) || ${zt(w.unevaluatedProperties,j,`${x}[key]`)})`;yield`(${H} && ${q})`}else yield`(${H})`}function*h(w,j,x){yield`(typeof value === 'object' && Symbol.iterator in ${x})`}function*p(w,j,x){typeof w.const=="number"||typeof w.const=="boolean"?yield`(${x} === ${w.const})`:yield`(${x} === '${b0.Escape(w.const)}')`}function*$(w,j,x){yield"false"}function*v(w,j,x){yield`(!${zt(w.not,j,x)})`}function*A(w,j,x){yield`(${x} === null)`}function*S(w,j,x){yield yo.IsNumberLike(x),se(w.exclusiveMaximum)&&(yield`${x} < ${w.exclusiveMaximum}`),se(w.exclusiveMinimum)&&(yield`${x} > ${w.exclusiveMinimum}`),se(w.maximum)&&(yield`${x} <= ${w.maximum}`),se(w.minimum)&&(yield`${x} >= ${w.minimum}`),se(w.multipleOf)&&(yield`(${x} % ${w.multipleOf}) === 0`)}function*N(w,j,x){yield yo.IsObjectLike(x),se(w.minProperties)&&(yield`Object.getOwnPropertyNames(${x}).length >= ${w.minProperties}`),se(w.maxProperties)&&(yield`Object.getOwnPropertyNames(${x}).length <= ${w.maxProperties}`);const H=Object.getOwnPropertyNames(w.properties);for(const V of H){const q=dc.Encode(x,V),Re=w.properties[V];if(w.required&&w.required.includes(V))yield*ct(Re,j,q),(pa(Re)||t(Re))&&(yield`('${V}' in ${x})`);else{const br=zt(Re,j,q);yield yo.IsExactOptionalProperty(x,V,br)}}if(w.additionalProperties===!1)if(w.required&&w.required.length===H.length)yield`Object.getOwnPropertyNames(${x}).length === ${H.length}`;else{const V=`[${H.map(q=>`'${q}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${x}).every(key => ${V}.includes(key))`}if(typeof w.additionalProperties=="object"){const V=zt(w.additionalProperties,j,`${x}[key]`),q=`[${H.map(Re=>`'${Re}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${x}).every(key => ${q}.includes(key) || ${V}))`}}function*I(w,j,x){yield`${x} instanceof Promise`}function*te(w,j,x){yield yo.IsRecordLike(x),se(w.minProperties)&&(yield`Object.getOwnPropertyNames(${x}).length >= ${w.minProperties}`),se(w.maxProperties)&&(yield`Object.getOwnPropertyNames(${x}).length <= ${w.maxProperties}`);const[H,V]=Object.entries(w.patternProperties)[0],q=yr(`${new RegExp(H)}`),Re=zt(V,j,"value"),br=tt(w.additionalProperties)?zt(w.additionalProperties,j,x):w.additionalProperties===!1?"false":"true",Yn=`(${q}.test(key) ? ${Re} : ${br})`;yield`(Object.entries(${x}).every(([key, value]) => ${Yn}))`}function*le(w,j,x){const H=gn(w,j);if(Pe.functions.has(w.$ref))return yield`${bn(w.$ref)}(${x})`;yield*ct(H,j,x)}function*re(w,j,x){const H=yr(`${new RegExp(w.source,w.flags)};`);yield`(typeof ${x} === 'string')`,se(w.maxLength)&&(yield`${x}.length <= ${w.maxLength}`),se(w.minLength)&&(yield`${x}.length >= ${w.minLength}`),yield`${H}.test(${x})`}function*Ce(w,j,x){yield`(typeof ${x} === 'string')`,se(w.maxLength)&&(yield`${x}.length <= ${w.maxLength}`),se(w.minLength)&&(yield`${x}.length >= ${w.minLength}`),w.pattern!==void 0&&(yield`${yr(`${new RegExp(w.pattern)};`)}.test(${x})`),w.format!==void 0&&(yield`format('${w.format}', ${x})`)}function*lt(w,j,x){yield`(typeof ${x} === 'symbol')`}function*Ye(w,j,x){yield`(typeof ${x} === 'string')`,yield`${yr(`${new RegExp(w.pattern)};`)}.test(${x})`}function*Qt(w,j,x){yield`${bn(w.$ref)}(${x})`}function*Qr(w,j,x){if(yield`Array.isArray(${x})`,w.items===void 0)return yield`${x}.length === 0`;yield`(${x}.length === ${w.maxItems})`;for(let H=0;H<w.items.length;H++)yield`${zt(w.items[H],j,`${x}[${H}]`)}`}function*sr(w,j,x){yield`${x} === undefined`}function*_n(w,j,x){yield`(${w.anyOf.map(V=>zt(V,j,x)).join(" || ")})`}function*ze(w,j,x){yield`${x} instanceof Uint8Array`,se(w.maxByteLength)&&(yield`(${x}.length <= ${w.maxByteLength})`),se(w.minByteLength)&&(yield`(${x}.length >= ${w.minByteLength})`)}function*Hn(w,j,x){yield"true"}function*Ci(w,j,x){yield yo.IsVoidLike(x)}function*yn(w,j,x){const H=Pe.instances.size;Pe.instances.set(H,w),yield`kind('${w[O]}', ${H}, ${x})`}function*ct(w,j,x,H=!0){const V=Ur(w.$id)?[...j,w]:j,q=w;if(H&&Ur(w.$id)){const Re=bn(w.$id);if(Pe.functions.has(Re))return yield`${Re}(${x})`;{Pe.functions.set(Re,"<deferred>");const br=ar(Re,w,j,"value",!1);return Pe.functions.set(Re,br),yield`${Re}(${x})`}}switch(q[O]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*i(q,V,x);case"AsyncIterator":return yield*o(q,V,x);case"BigInt":return yield*s(q,V,x);case"Boolean":return yield*a(q,V,x);case"Constructor":return yield*u(q,V,x);case"Date":return yield*l(q,V,x);case"Function":return yield*c(q,V,x);case"Import":return yield*f(q,V,x);case"Integer":return yield*d(q,V,x);case"Intersect":return yield*m(q,V,x);case"Iterator":return yield*h(q,V,x);case"Literal":return yield*p(q,V,x);case"Never":return yield*$();case"Not":return yield*v(q,V,x);case"Null":return yield*A(q,V,x);case"Number":return yield*S(q,V,x);case"Object":return yield*N(q,V,x);case"Promise":return yield*I(q,V,x);case"Record":return yield*te(q,V,x);case"Ref":return yield*le(q,V,x);case"RegExp":return yield*re(q,V,x);case"String":return yield*Ce(q,V,x);case"Symbol":return yield*lt(q,V,x);case"TemplateLiteral":return yield*Ye(q,V,x);case"This":return yield*Qt(q,V,x);case"Tuple":return yield*Qr(q,V,x);case"Undefined":return yield*sr(q,V,x);case"Union":return yield*_n(q,V,x);case"Uint8Array":return yield*ze(q,V,x);case"Unknown":return yield*Hn();case"Void":return yield*Ci(q,V,x);default:if(!Zi(q[O]))throw new fT(w);return yield*yn(q,V,x)}}const Pe={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function zt(w,j,x,H=!0){return`(${[...ct(w,j,x,H)].join(" && ")})`}function bn(w){return`check_${y0.Encode(w)}`}function yr(w){const j=`local_${Pe.variables.size}`;return Pe.variables.set(j,`const ${j} = ${w}`),j}function ar(w,j,x,H,V=!0){const[q,Re]=[`
`,Un=>"".padStart(Un," ")],br=ki("value","any"),Yn=Yu("boolean"),wn=[...ct(j,x,H,V)].map(Un=>`${Re(4)}${Un}`).join(` &&${q}`);return`function ${w}(${br})${Yn} {${q}${Re(2)}return (${q}${wn}${q}${Re(2)})
}`}function ki(w,j){const x=Pe.language==="typescript"?`: ${j}`:"";return`${w}${x}`}function Yu(w){return Pe.language==="typescript"?`: ${w}`:""}function Ju(w,j,x){const H=ar("check",w,j,"value"),V=ki("value","any"),q=Yu("boolean"),Re=[...Pe.functions.values()],br=[...Pe.variables.values()],Yn=Ur(w.$id)?`return function check(${V})${q} {
  return ${bn(w.$id)}(value)
}`:`return ${H}`;return[...br,...Re,Yn].join(`
`)}function Xo(...w){const j={language:"javascript"},[x,H,V]=w.length===2&&qr(w[1])?[w[0],w[1],j]:w.length===2&&!qr(w[1])?[w[0],[],w[1]]:w.length===3?[w[0],w[1],w[2]]:w.length===1?[w[0],[],j]:[null,[],j];if(Pe.language=V.language,Pe.variables.clear(),Pe.functions.clear(),Pe.instances.clear(),!tt(x))throw new $1(x);for(const q of H)if(!tt(q))throw new $1(q);return Ju(x,H)}e.Code=Xo;function Xv(w,j=[]){const x=Xo(w,j,{language:"javascript"}),H=globalThis.Function("kind","format","hash",x),V=new Map(Pe.instances);function q(wn,Un,Xu){if(!Zi(wn)||!V.has(Un))return!1;const Qv=qm(wn),e4=V.get(Un);return Qv(e4,Xu)}function Re(wn,Un){return Um(wn)?zm(wn)(Un):!1}function br(wn){return hh(wn)}const Yn=H(q,Re,br);return new cT(w,j,Yn,x)}e.Compile=Xv})(Za||(Za={}));const w0={};function u$(e,t){e in w0||(w0[e]=t)}let v1=!1;function dT(){v1||(v1=!0,LF(e=>(w0[e.schema[O]]||r$)(e)))}const $0=Symbol.for("object-shape-tester.shape-identifier");function Se(e){if(dT(),ph(e))return e;const t=v0(e),r=bo(t,!1),n=bo(t,!0),i={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:Za.Compile(t),$_compiledSchemaNoExtraKeys:Za.Compile(r),$_compiledSchemaExtraKeys:Za.Compile(n)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[$0]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function ph(e){return F.hasKey(e,$0)&&!!e[$0]}function gh(e){return F.hasKey(e,O)}function bo(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>bo(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>bo(n,t))),gh(e.items)?r.items=bo(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>bo(n,t))),F.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([i,o])=>{n[i]=bo(o,t)}),r.properties=n}return r.additionalProperties=t,r}function v0(e){if(gh(e))return e;if(ph(e))return e.$_schema;if(F.isFunction(e))return Le.Function([],Le.Any(),{default:e});if(F.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,i])=>{const o=v0(i);r[n]=o,t[n]=o.default}),Le.Object(r,{default:t})}else{if(F.isArray(e))return Le.Array(Le.Union(e.map(t=>v0(t))),{default:[]});if(F.isPrimitive(e)){if(F.isString(e))return Le.String({default:e});if(F.isNumber(e))return Le.Number({default:e});if(F.isBoolean(e))return Le.Boolean({default:e});if(F.isSymbol(e))return Le.Symbol({default:e});if(F.isNull(e))return Le.Null({default:null});if(F.isUndefined(e))return Le.Undefined({default:void 0});if(F.isBigInt(e))return Le.BigInt({default:e});Bt.tsType(e).equals(),Bt.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${b(e)}`)}}function mT({checkValue:e,default:t,name:r}){return Zi(r)||Wm(r,(n,i)=>e(i)),(n=t)=>Se(Le.Unsafe({[O]:r,default:n}))}function Ws(e,t){const r=nn(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return Se(Le.Union(r.map(n=>Le.Literal(n)),{default:t??r[0]}))}function me(e){return F.isSymbol(e)?hT(e):Se(Le.Const(e,{default:e}))}const gl="ExactSymbol";function hT(e){return Zi(gl)||Wm(gl,(t,r)=>r===t.symbol),u$(gl,({schema:t})=>`Expected symbol ${t.symbol?.description?ix({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Se(Le.Unsafe({[O]:gl,symbol:e,default:e}))}function pT(...e){const t={},r=e.map(n=>{const i=Se(n);return Object.assign(t,i.default),i.$_schema});return Se(Le.Composite(r,{default:t}))}function Wt(e,t={}){ht.ExactOptionalPropertyTypes=!0;const r=Se(e).$_schema,n=t.alsoUndefined?Le.Union([Le.Undefined(),r]):r;return Se(Le.Optional(n))}function Qe(...e){let t;const r=e.map((n,i)=>{const o=Se(n);return i||(t=o.default),o.$_schema});return Se(Le.Union(r,{default:t}))}class gT extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(o=>l$(o)).join(`
`),i=Qs(r,`Shape mismatch:
${em(n,1)}`);super(i),this.errors=t,this.failureMessage=r}}function yT(e){return e.errors.flatMap(t=>Array.from(t))}function l$(e,t=0){const r=yT(e).map(i=>l$(i,t+1)),n=[e.path,e.message].filter(F.isTruthy).join(": ")+(r.length?":":"");return[em(n,t),...r].join(`
`)}function xo(e,t,r={}){return f$(t,r).Check(e)}function c$(e,t,r={},n){if(xo(e,t,r))return;const i=Array.from(f$(t,r).Errors(e));if(i.length)throw new gT(i,n)}function f$(e,t){return e=bT(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function bT(e){return Se(e)}function ps({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:i}=q0(r),o=r.default??(i-n)/2+n,s=Se(Le.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:i}:{maximum:i},default:o})),a=kD(()=>c$(o,s));if(a)throw kc(a,"Default range value is not within range.");return s}const _l="recordShape";function hf({keys:e,values:t,partial:r,additionalProperties:n}){wT();const i=d$(e),o=Se(t);return Se(Le.Unsafe({[O]:_l,keysShape:i,valuesShape:o,isPartial:!!r,additionalProperties:!!n,default:$T({isPartial:!!r,keysShape:i,valuesShape:o})}))}function wT(){Zi(_l)||Wm(_l,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:xo(i,e.keysShape),a=xo(o,e.valuesShape);return s&&a}),n=e.isPartial?!0:!D1(e.keysShape,t).length;return r&&n}),u$(_l,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const i=vi(Object.entries(n),([u])=>u,(u,[l,c])=>!xo(l,r.keysShape)||!xo(c,r.valuesShape)),o=D1(r.keysShape,n),s=i.length?["Failure at keys",i.join(",")].join(": "):"",a=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,a].filter(F.isTruthy).join(`
`)})}function D1(e,t){const r=mc(e).filter(n=>F.isPropertyKey(n));return r.length?r.filter(n=>!F.hasKey(t,n)):[]}function $T({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=mc(e),i=t.default;return Object.fromEntries(n.map(o=>[o,i]))}}function d$(e){return ph(e)?e:gh(e)?Se(e):F.isObject(e)?Ws(e):F.isArray(e)&&F.isLengthAtLeast(e,1)?Qe(...e.map(t=>me(t))):F.isPropertyKey(e)?Se(e):Se(Le.Undefined())}function mc(e){const t=e.$_schema,r=t[O].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?U0(t.anyOf.flatMap(n=>mc(Se(n)))):["undefined","number","string","symbol"].includes(r)?[]:mc(d$(e.default))}function vT(e){return Se(Le.Unknown({default:e}))}const DT=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],yh=DT.reduce((e,t)=>(e[t]=t,e),{});Xe.defaultZone.name;const m$=yh.UTC,xT=Se({hour:ps({...Sp,default:Sp.min}),minute:ps({...Tp,default:Tp.min}),second:ps({...Np,default:Np.min}),millisecond:ps({...Pp,default:Pp.min}),timezone:Ws(yh,m$)}),AT=Se({year:2023,month:ps({...Ip,default:Ip.min}),day:ps({...Op,default:Op.min}),timezone:Ws(yh,m$)});Se(pT(AT,xT));Fe.Years+"",Fe.Months+"",Fe.Weeks+"",Fe.Days+"",Fe.Hours+"",Fe.Minutes+"",Fe.Seconds+"",Fe.Milliseconds+"";Se(Qe({get:me(G.Month),in:Qe(me(G.Year))},{get:me(G.Week),in:Qe(me(G.Year),me(G.Month))},{get:me(G.Day),in:Qe(me(G.Year),me(G.Month),me(G.Week))},{get:me(G.Hour),in:Qe(me(G.Year),me(G.Month),me(G.Week),me(G.Day))},{get:me(G.Minute),in:Qe(me(G.Year),me(G.Month),me(G.Week),me(G.Day),me(G.Hour))},{get:me(G.Second),in:Qe(me(G.Year),me(G.Month),me(G.Week),me(G.Day),me(G.Hour),me(G.Minute))},{get:me(G.Millisecond),in:Qe(me(G.Year),me(G.Month),me(G.Week),me(G.Day),me(G.Hour),me(G.Minute),me(G.Second))}));hf({keys:Ws(Fe),values:-1,partial:!0});var x1;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(x1||(x1={}));var D0;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(D0||(D0={}));var A1;(function(e){e.Year="year",e.Month="month",e.Day="day"})(A1||(A1={}));const ET={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};JD(ET,nn(D0));mT({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return CT(e)}});function CT(e){return J.fromISO(e).toUTC().toISO()===e}const kT=Se({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:vT()});function od(e){return xo(e,kT,{allowExtraKeys:!0})}class h$ extends ew{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||km}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:FT}=Ix,E1=e=>e,C1=()=>document.createComment(""),Fa=(e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const o=n.insertBefore(C1(),i),s=n.insertBefore(C1(),i);r=new FT(o,s,e,e.options)}else{const o=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==s._$AU&&r._$AP(u)}if(o!==i||a){let u=r._$AA;for(;u!==o;){const l=E1(u).nextSibling;E1(n).insertBefore(u,i),u=l}}}return r},po=(e,t,r=e)=>(e._$AI(t,r),e),MT={},ST=(e,t=MT)=>e._$AH=t,TT=e=>e._$AH,sd=e=>{e._$AR(),e._$AA.remove()};const bh={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Ai=e=>(...t)=>({_$litDirective$:e,values:t});class Ei{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const NT={attribute:!0,type:String,converter:tc,reflect:!1,hasChanged:pm},PT=(e=NT,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function IT(e){return(t,r)=>typeof r=="object"?PT(e,t,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}const gr=Ai(class extends Ei{constructor(e){if(super(e),e.type!==bh.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return zr}});const dt=e=>e??Q;function OT(e,t,r){return e?t(e):r?.(e)}class BT extends qa{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function RT(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const o=e.map(a=>[a]);return o.length||(o[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(o[a]=[])}),t.forEach(a=>{const u=o[a.index];u&&u.splice(0,0,...a.values)}),o.flat()}function x0(e){return F.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function wh(e){return F.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function p$(e){return vi(e,t=>{if(x0(t))return t.definition;if(wh(t))return t.tagInterpolationKey||t},F.isTruthy)}const g$=new WeakMap;function LT(e,t){const r=p$(t);return y$(g$,[e,...r]).value?.template}function jT(e,t,r){const n=p$(t);return w$(g$,[e,...n],r)}function y$(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=b$(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?y$(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function b$(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function w$(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=b$(e,t,n);if(!o)return{result:!1,reason:s};const a=i??{nested:void 0,template:void 0};if(i||e.set(o,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),w$(u,t,r,n+1)}function $$(e,t,r){const n=LT(e,t),i=n??r();if(!n){const a=jT(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const o=i.valuesTransform(t),s=RT(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function v$(e,t,r,n){const i=[],o=[],s=[],a=[];return e.forEach((l,c)=>{const f=i.length-1,d=i[f],m=c-1,h=t[m];n&&n(l);let p,$=[];if(typeof d=="string"&&(p=r(d,l,h),p)){i[f]=[d,p.replacement].join(""),s.push(m);const A=p.getExtraValues;$=A?A(h):[],$.length&&A?(i[f]+=" ",$.forEach((S,N)=>{N&&i.push(" ")}),a.push(S=>{const N=S[m],I=A(N);return{index:m,values:I}}),i.push(l)):i[f]+=l}p||i.push(l);const v=e.raw[c];p?(o[f]=[o[f],p.replacement,v].join(""),$.length&&$.forEach(()=>{o.push("")})):o.push(v)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(l){const c=a.flatMap(f=>f(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function _T(...[e,t,r]){if(wh(r))return{replacement:r.tagName,getExtraValues:void 0}}function UT(e,t){return v$(e,t,_T)}function E(e,...t){const r=$$(e,t,()=>UT(e,t));return Rl(r.strings,...r.values)}const zT={allowPolymorphicState:!1,errorHandler:void 0};function D$(e,t){const r=e.instanceState;et(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&et(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class VT extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function $h(){return e=>class extends VT{static type=e;_type=e;constructor(t){super(e,t)}}}function xt(){return $h()}function WT(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=$h()([e,n].join("-"));return r[n]=i,r},{}):{}}function qT(e){return e?pr(e,t=>t):{}}function x$(e,t){t in e||IT()(e,t)}function KT(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function k1(e,t){const r=e;function n(s){t?KT(s,e,e.tagName):x$(e,s)}function i(s,a){return n(a),r[a]}return new Proxy({},{get:i,set(s,a,u){n(a);const l=r[a];function c(d){s[a]=d,r[a]=d}const f=e.observablePropertyListenerMap[a];if(l!==u&&od(l)&&f&&l.removeListener(f),od(u))if(f)u.listen(!1,f);else{let d=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=d,u.listen(!1,d)}else od(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return i(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function F1(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function M1(e,t,r){return r?Oc(r,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function GT({hostClassNames:e,cssVars:t}){return{hostClasses:pr(e,(r,n)=>({name:Be(n),selector:Be(`:host(.${n})`)})),cssVars:t}}function ZT({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&et(t).forEach(o=>{const s=t[o],a=r[o];typeof s=="function"&&(s({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function HT({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:i}){function o(a){et(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:r,slotNames:n,testIds:i,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function Jo(...e){return Bt.isEmpty(e),t=>{const r=t;if(!F.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return YT({...r,options:{...r.options}})}}function YT(e){if(!F.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!F.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...zT,...e.options},r=WT(e.tagName,e.events),n=qT(e.hostClasses);e.hostClasses&&F1(e.tagName,e.hostClasses),e.cssVars&&F1(e.tagName,e.cssVars);const i=e.cssVars?fn(e.cssVars):{},o=M1(e.tagName,"slot",e.slotNames),s=M1(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(GT({hostClassNames:n,cssVars:i})):e.styles||E``,u=e.render;function l(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:f}}const c=class extends BT{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return HT({element:this,eventsMap:r,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=l;static events=r;static render=u;static hostClasses=n;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(f);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");et(m).forEach(h=>{x$(this,h),this.instanceState[h]=m[h]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=u(f);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return ZT({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},d}catch(f){const d=kc(f,`Failed to render ${e.tagName}`);return console.error(d),this._lastRenderError=d,t.errorHandler?.(d),jt(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{F.hasKey(f,"destroy")&&F.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){D$(this,f)}observablePropertyListenerMap={};instanceInputs=k1(this,!1);instanceState=k1(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:tx(e.tagName,{firstLetterCase:yi.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}class JT extends ms{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function XT(e){return new JT(e)}const S1=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},QT=Ai(class extends Ei{constructor(e){if(super(e),e.type!==bh.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],o=[];let s=0;for(const a of e)i[s]=n?n(a,s):s,o[s]=r(a,s),s++;return{values:o,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=TT(e),{values:o,keys:s}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??=[],u=[];let l,c,f=0,d=i.length-1,m=0,h=o.length-1;for(;f<=d&&m<=h;)if(i[f]===null)f++;else if(i[d]===null)d--;else if(a[f]===s[m])u[m]=po(i[f],o[m]),f++,m++;else if(a[d]===s[h])u[h]=po(i[d],o[h]),d--,h--;else if(a[f]===s[h])u[h]=po(i[f],o[h]),Fa(e,u[h+1],i[f]),f++,h--;else if(a[d]===s[m])u[m]=po(i[d],o[m]),Fa(e,i[f],i[d]),d--,m++;else if(l===void 0&&(l=S1(s,m,h),c=S1(a,f,d)),l.has(a[f]))if(l.has(a[d])){const p=c.get(s[m]),$=p!==void 0?i[p]:null;if($===null){const v=Fa(e,i[f]);po(v,o[m]),u[m]=v}else u[m]=po($,o[m]),Fa(e,i[f],$),i[p]=null;m++}else sd(i[d]),d--;else sd(i[f]),f++;for(;m<=h;){const p=Fa(e,u[h+1]);po(p,o[m]),u[m++]=p}for(;f<=d;){const p=i[f++];p!==null&&sd(p)}return this.ut=s,ST(e,u),zr}}),eN=QT;function qu(e,t){return wu(e,t),e.element}function tN(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function wu(e,t){const r=tN(e),n=r?`: in ${r}`:"";if(e.type!==bh.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function rN(e,t){return Ai(class extends Ei{element;constructor(r){super(r),this.element=Sn.instanceOf(qu(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),zr}})}const di=rN("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const i=_o(r,"allAttributesApplied",()=>new Set);et(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===Q?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function nN(e){const t=Ai(class extends Ei{element;constructor(r){super(r),this.element=qu(r,e)}render(r){return this.element.setAttribute(e,r),zr}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function W(e,t){return iN(e,t)}const iN=Ai(class extends Ei{element;lastListenerMetaData;constructor(e){super(e),this.element=qu(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),zr}});function oN(e){return W("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const T1="onDomCreated",Oo=Ai(class extends Ei{element;constructor(e){super(e),wu(e,T1)}update(e,[t]){wu(e,T1);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),N1="onResize",A$=Ai(class extends Ei{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&sN(this.element,this.callback,e)});callback;constructor(e){super(e),wu(e,N1)}update(e,[t]){wu(e,N1),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function sN(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function kr(e,t,r){return OT(e,()=>t,()=>r)}const{attributeDirective:aN}=nN("data-test-id"),hi=aN;function E$(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>i=>(t(i),Jo(...n)(r(i)))}function uN(e,t){return lN(void 0,e)}const lN=Ai(class extends Ei{element;constructor(e){super(e),this.element=qu(e,"assign")}render(e,t){return D$(this.element,t),zr}}),cN={};function fN(e,t){return t.map((r,n)=>{const i=e[n],o=e[n+1];if(i&&o){const{shouldHaveTagNameHere:s}=C$(i,o);if(s&&F.isString(r))return{tagName:r,tagInterpolationKey:_o(cN,r,()=>({tagName:r}))}}return r})}function C$(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function dN(...[e,t,r]){const n=x0(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:o}=C$(e,t),s=wh(n);if(s&&o&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!o||!s?void 0:{replacement:n.tagName,getExtraValues(u){const l=x0(u)?u.inputs:void 0;return[i&&l?uN(l):void 0].filter(F.isTruthy)}}}function mN(e){}function hN(e){return v$(e.strings,e.values,dN,mN)}function g(e,...t){const r=fN(e,t),n=kx(e,...r),i=$$(e,r,()=>hN(n));return{...n,strings:i.strings,values:i.values}}function A0(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],o=(t??[""]).map((s,a)=>{const u=pN(s,n[a]);return`${s}${u}`});return n5(o.join(""))}function pN(e,t){return t._$litType$!=null||t._$litDirective$!=null?A0(t):Array.isArray(t)?t.map(n=>A0(n)).join(""):e.endsWith("=")?`"${t}"`:t}function k$(e){return pr(e,(t,r)=>r instanceof _e?Be(r.toString({format:"hex"})):k$(r))}const gN="dodgerblue";function E0(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function ad({background:e,foreground:t}){return{background:e??new _e(E0(t)),foreground:t??new _e(E0(e))}}var hc;(function(e){e.Dark="dark",e.Light="light"})(hc||(hc={}));function yN(e){return e==="black"?"white":"black"}const bN={black:{foregroundFaint1:new _e("#ccc"),foregroundFaint2:new _e("#eee")},white:{foregroundFaint1:new _e("#ccc"),foregroundFaint2:new _e("#eee")}},wN={black:{backgroundFaint1:new _e("#666"),backgroundFaint2:new _e("#444")},white:{backgroundFaint1:new _e("#ccc"),backgroundFaint2:new _e("#fafafa")}};function P1({themeColor:e=gN,themeStyle:t=hc.Light}={}){const r=new _e(e),n=new _e(t===hc.Dark?"black":"white"),i=E0(n),o=new _e(i),s={nav:{hover:ad({background:r.clone().set({"hsl.l":93})}),active:ad({background:r.clone().set({"hsl.l":90})}),selected:ad({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...wN[yN(i)],foreground:o,...bN[i]}};return k$(s)}var Vn;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(Vn||(Vn={}));async function C0(e=1){const t=new Gl;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function $N(e,t){return{element:e,children:F$(e)}}function F$(e,t,r){return vN(e).map(n=>{const i=F$(n);return{element:n,children:i}})}function vN(e){return[...e.children,...e.shadowRoot?.children??[]]}function ud(e){return e.matches(":focus")}function vh(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:vh(t)}function M$(e,t){if(t(e))return e;const r=vh(e);if(r)return M$(r,t)}async function DN(e){return xN(e,1)}async function xN(e,t){return new Promise(r=>{new IntersectionObserver((i,o)=>{Bt.isLengthAtLeast(i,1),o.disconnect(),r(i[0].intersectionRatio>=t)}).observe(e)})}function Ao(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,o=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return n}function AN(e){const t=vh(e);return t&&M$(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function EN({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const u=o.codePointAt(s);for(;a<r;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const CN=Co(32);function Ul(e){return e.join(CN)}function S$(e){if(!e.length)return[];const t=Ul(e),r=S$(e.slice(0,-1));return[t,...r]}const kN=["error","errors"];function FN(e){return kN.includes(e)}function MN({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(s=>(n(s),Ul(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&FN(t),s=Ul(i.fullUrlBreadcrumbs);if(EN({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(u=>F.isString(u)?u:A0(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||r[s]){const u=S$(i.fullUrlBreadcrumbs);n(i),u.forEach(l=>r[l]=!0)}else r[s]=!1}),e.filter(i=>{const o=Ul(i.fullUrlBreadcrumbs),s=r[o];if(!F.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Dh extends Error{name="SpaRouterError"}class I1 extends Dh{name="GlobalUrlEventsConsolidationError"}class SN extends Dh{name="SanitizationDepthMaxed"}Se({paths:[""],search:Wt(Qe(void 0,hf({keys:"",values:[""]}))),hash:Wt(Qe(void 0,""))});const TN=Se({basePath:Wt("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Wt(1,{alsoUndefined:!0}),disableWarnings:Wt(!1,{alsoUndefined:!0}),isPaused:Wt(!1,{alsoUndefined:!0})}),ld="://";function xh(...e){const t=e.join("/"),[r,n=""]=t.includes(ld)?t.split(ld):["",t];let i=!1;const o=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(i)return s;const c=l[u+1];let f=a;const d=c?.startsWith("?"),m=!a.includes("?")&&d,h=c==="?";if(d||m){i=!0;let p=!1;const $=l.slice(u+2).reduce((v,A)=>(A.includes("#")&&(p=!0),p?v.concat(A):[v,A].join("&")),"");f=[a,c,h?Ds({value:$,prefix:"&"}):$].join("")}return s.concat(f)},[]);return[r,r?ld:"",o.join("/")].join("")}var qs;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(qs||(qs={}));var Ks;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Ks||(Ks={}));const NN=Se({encoding:Wt(Qe(void 0,Ws(qs))),searchParamStrategy:Wt(Qe(void 0,Ws(Ks)))});function yl(e,t){return e.map(r=>{if(r!=null)return As(String(r),t)}).filter(r=>r!=null)}function As(e,t){return t?.encoding===qs.Decode?decodeURIComponent(e):t?.encoding===qs.Encode?encodeURIComponent(e):e}const PN=Se(hf({keys:"",values:[""]}));function IN(e,t,r){const n=r?.searchParamStrategy===Ks.Clear?{}:pr(e,(s,a)=>ED(a)),i=pr(t,(s,a)=>{if(r?.searchParamStrategy===Ks.Append){const u=n[s],l=F.isArray(u)?u:[u];if(a){const c=F.isArray(a)?a:[a];return yl([...l,...c],r)}else return yl(l,r)}else return F.isArray(a)?yl(a,r):a?yl([a],r):void 0});return Bc({...n,...i},(s,a)=>!!a)}function T$(e,t){return F.isString(e)&&!e.includes("?")?{}:(F.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...a]=HD(o,"=");return[s,a.length?a.join("="):void 0]}).reduce((o,[s,a])=>{const u=N$({options:t,key:s,value:a}),l=_o(o,u.key,()=>[]);return a!=null&&l.push(u.value),o},{})}function ON(e){if(e!=null)return F.isArray(e)?[...e]:e===""?[]:[e]}function BN(e,t){const r=vi(Object.entries(e),([n,i])=>{const o=ON(i);return o?.length?o.map(s=>{const a=N$({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?Fr({value:r.join("&"),prefix:"?"}):""}function N$({options:e,key:t,value:r}){return{key:As(t,e),value:As(String(r),e)}}function P$({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:o,search:s,username:a}){return[o?o+"://":"",a?a+":":"",r?r+"@":"",pf({hostname:t,port:i}),Ah({hash:e,pathname:n,search:s})].join("")}function I$({pathname:e}){const t=Ds({value:e,prefix:"/"});return t?t.split("/"):[]}function Ah({hash:e,pathname:t,search:r}){return[Fr({value:t,prefix:"/"}),r?Fr({value:r,prefix:"?"}):"",e?Fr({value:e,prefix:"#"}):""].join("")}function pf({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function O$({hostname:e,port:t,protocol:r}){return[r,pf({hostname:e,port:t})].filter(F.isTruthy).join("://")}function Es(e,t){const r=F.isString(e)?Ds({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?Fr({value:As(n,t),prefix:"#"}):"",o=r.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),a=s?Fr({value:As(s,t),prefix:"?"}):"",u=o.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=c.replace(/@.*/,""),d=c.replace(/^[^@]*@/,""),m=f!==d,[h,...p]=m?f.split(":").reverse():[],$=p.toReversed().join("").replace(/[/:]/g,"")||"",v=h?.replace(/[/:]/g,"")||"",A=ZD(d.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),S=A[0]?.endsWith("]")?"":A[1]===":"&&A[0]||"",I=d.replace(new RegExp(`:${S}($|/)`),"$1").replace(/\/.*/,""),te=d.replace(/^[^/]*(\/|$)/,"$1"),le=As(te.replace(/^[^/]*(?:\/|$)/,"/"),t),re=pf({hostname:I,port:S}),Ce=O$({hostname:I,port:S,protocol:l}),lt=P$({hash:i,hostname:I,password:v,pathname:le,port:S,protocol:l,search:a,username:$}),Ye=T$(a),Qt=I$({pathname:le});return{fullPath:Ah({hash:i,pathname:le,search:a}),hash:i,host:re,hostname:I,href:lt,origin:Ce,password:v,pathname:le,paths:Qt,port:S,protocol:l,search:a,searchParams:Ye,username:$}}Se({hash:Wt(Qe(void 0,"")),search:Wt(Qe(void 0,"",hf({keys:"",values:Qe(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:Wt(Qe(void 0,"")),pathname:Wt(Qe(void 0,"")),paths:Wt(Qe(void 0,[""])),protocol:Wt(Qe(void 0,"")),username:Wt(Qe(void 0,"")),password:Wt(Qe(void 0,"")),port:Wt(Qe(void 0,"",-1))});function RN(e,t,r){const n=!!r,i=t==null||xo(t,NN,{allowExtraKeys:!1}),o=i?Es(""):F.instanceOf(e,URL)||F.isString(e)?Es(e):e,s=i?e:t,a=F.isString(s)&&s.startsWith("."),u=F.isString(s)||F.instanceOf(s,URL)?Bc(Es(s),(p,$)=>F.isTruthy($)):s,l=n?r:i?t:void 0,c=pr(o,(p,$)=>{if(!F.hasKey(u,p))return $;const v=u[p];return F.isNumber(v)?String(v):F.isString(v)?p==="hash"&&v?Fr({value:v,prefix:"#"}):p==="pathname"?Fr({value:v,prefix:"/"}):v:$});F.hasKey(u,"paths")&&u.paths&&(c.pathname=xh(a?o.pathname:"",...u.paths));const f=F.isString(u.search)?T$(Fr({value:u.search,prefix:"?"})):FD(u.search||{}),d=IN(c.searchParams,f,{...l,encoding:qs.None}),m=BN(d,l);return{...c,searchParams:d,search:m,paths:I$(c),fullPath:Ah(c),host:pf(c),origin:O$(c),href:P$({...c,search:m})}}const LN=Se({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:PN,hash:"",fullPath:"/",href:"/"});({...LN.default});const jN=0;function B$(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==jN)}const gf="locationchange",li=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const O1=li?.pushState;function B1(...e){if(!O1)return;const t=O1.apply(li,e);return globalThis.dispatchEvent(new Event(gf)),t}const R1=li?.replaceState;function L1(...e){if(!R1)return;const t=R1.apply(li,e);return globalThis.dispatchEvent(new Event(gf)),t}function _N(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!li)){{if(li.pushState===B1)throw new I1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(li.replaceState===L1)throw new I1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,li.pushState=B1,li.replaceState=L1,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(gf))})}}function bl(e,t){const r=Es(e),n=Ds({value:Ds({value:r.pathname,prefix:Fr({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],o=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?Ds({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class Eh{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){c$(t,TN),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new h$({defaultValue:r,equalityCheck:()=>!1}),_N(),this.removeGlobalListener=um(globalThis,gf,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new SN("Looping route sanitization detected; aborting window URL change listener.");const n=bl(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);F.jsonEquals(n,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:xh(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(bl(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...bl(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),o=this.routeIncludesBasePath(bl(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return RN(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Fr({value:o.hash,prefix:"#"}):""},{searchParamStrategy:Ks.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=Es(n);return this.params.isPaused||!r.force&&F.jsonEquals(Es(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return B$(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new Dh(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function UN(e){return new Eh({basePath:e,sanitizeRoute(t){return{paths:zN(t.paths),hash:void 0,search:void 0}}})}function zN(e){const t=e[0];if(F.isEnumValue(t,Ar)){if(t===Ar.Book)return[Ar.Book,...e.slice(1)];if(t===Ar.Search)return e[1]?[t,e[1]]:[Ar.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Ns.paths}const pc=$h()("element-book-change-route"),j1="vira-",He=E$({assertInputs:e=>{if(!e.tagName.startsWith(j1))throw new Error(`Tag name should start with '${j1}' but got '${e.tagName}'`)}});var $e=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Select="select",e.Checkbox="checkbox",e))($e||{});function cd(e,t){if(e)return t?im({value:e,suffix:"*"}):e}function VN(e){return Jd(e).every(t=>t.isHidden||!t.isRequired?!0:F.isString(t.value)?!!t.value:t.value!=null)}const D=fn({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function Ba(e,t){let r=e.length,n,i,o=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,o=!0),Array.isArray(t[0])?i=t:(i=t.length>0?t.map(c=>[c]):[[]],s=!0);let a=i[0].length,u=i[0].map((c,f)=>i.map(d=>d[f])),l=n.map(c=>u.map(f=>{let d=0;if(!Array.isArray(c)){for(let m of f)d+=c*m;return d}for(let m=0;m<c.length;m++)d+=c[m]*(f[m]||0);return d}));return r===1&&o&&(l=l[0]),a===1&&s?r===1&&o?l[0]:l.map(c=>c[0]):l}function fd(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function st(e,t,r=[0,0,0]){const n=fd(e,t[0]),i=fd(e,t[1]),o=fd(e,t[2]);return r[0]=n,r[1]=i,r[2]=o,r}function ya(e){return _i(e)==="string"}function _i(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ch(e,{precision:t=16,unit:r}){return Ee(e)?"none":(e=+kh(e,t),e+(r??""))}function Ee(e){return e===null}function $t(e){return Ee(e)?0:e}function kh(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}function $u(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function R$(e,t,r){return(r-e)/(t-e)}function k0(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:$u(t[0],t[1],R$(e[0],e[1],r))}function yf(e,t,r){return Math.max(Math.min(r,t),e)}function bf(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function vt(e,t){return bf(Math.abs(e)**t,e)}function Fh(e,t){return t===0?0:e/t}function L$(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}function Gs(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),i=n?.constructor?.name;if(i===r)return!0;if(!i||i==="Object")return!1;e=n}return!1}var WN=Object.freeze({__proto__:null,bisectLeft:L$,clamp:yf,copySign:bf,interpolate:$u,interpolateInv:R$,isInstance:Gs,isNone:Ee,isString:ya,mapRange:k0,multiplyMatrices:Ba,multiply_v3_m3x3:st,serializeNumber:Ch,skipNone:$t,spow:vt,toPrecision:kh,type:_i,zdiv:Fh});class qN{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Hi=new qN;var Hr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};class _1{type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:i,max:o}=n.groups;(i||o)&&(this.range=[+i,+o])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),k0(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,i=this.unit;return t=k0(this.coordRange,n,t),Ch(t,{unit:i,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return Gs(t,this)?t:new this(t,r)}}const dd=Symbol("instance");class gc{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[dd]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let i=["<number>","<percentage>"];return n.type==="angle"&&i.push("<angle>"),i})),this.coords=this.coords.map((n,i)=>{let o=this.spaceCoords[i];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>_1.get(s,o))}))}serializeCoords(t,r,n){return n=t.map((i,o)=>_1.get(n?.[o]??this.coords[o][0],this.spaceCoords[o])),t.map((i,o)=>n[o].serialize(i,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,i],o)=>{let s=t[o];if(Ee(s)||isNaN(s))return s;let a=r[o],u=this.coords[o].find(l=>l.type==a);if(!u){let l=i.name||n;throw new TypeError(`${a??s?.raw??s} not allowed for ${l} in ${this.name}()`)}return s=u.resolve(s),u.range&&(r[o]=u.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||Gs(t,this)?t:t[dd]?t[dd]:new gc(t,...r)}}const mr={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function F0(e){return Array.isArray(e)?e:mr[e]}function yc(e,t,r,n={}){if(e=F0(e),t=F0(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(Hi.run("chromatic-adaptation-start",i),i.M||(i.W1===mr.D65&&i.W2===mr.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===mr.D50&&i.W2===mr.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Hi.run("chromatic-adaptation-end",i),i.M)return st(i.XYZ,i.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function j$(e,t){let r={str:String(e)?.trim(),options:t};if(Hi.run("parse-start",r),r.color)return r.color;r.parsed=GN(r.str);let n,i=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let o=r.parsed.name,s,a,u=r.parsed.args,l=u.map((d,m)=>r.parsed.argMeta[m]?.type);if(o==="color"){let d=u.shift();l.shift();let m=d.startsWith("--")?d.substring(2):`--${d}`,h=[d,m];if(s=U.findFormat({name:o,id:h,type:"function"}),!s){let p,$=d in U.registry?d:m;if($ in U.registry){let v=U.registry[$].formats?.color?.id;v&&(p=`Did you mean ${e.replace("color("+d,"color("+v)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(p??"Missing a plugin?"))}a=s.space,s.id.startsWith("--")&&!d.startsWith("--")&&Hr.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${d}).`),d.startsWith("--")&&!s.id.startsWith("--")&&Hr.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${d}).`)}else s=U.findFormat({name:o,type:"function"}),a=s.space;i&&Object.assign(i,{format:s,formatId:s.name,types:l,commas:r.parsed.commas});let c=1;r.parsed.lastAlpha&&(c=r.parsed.args.pop(),i&&(i.alphaType=l.pop()));let f=s.coords.length;if(u.length!==f)throw new TypeError(`Expected ${f} coordinates for ${a.id} in ${r.str}), got ${u.length}`);u=s.coerceCoords(u,l),n={spaceId:a.id,coords:u,alpha:c}}else e:for(let o of U.all)for(let s in o.formats){let a=o.formats[s];if(a.type!=="custom"||a.test&&!a.test(r.str))continue;let u=o.getFormat(a),l=u.parse(r.str);if(l){i&&Object.assign(i,{format:u,formatId:s}),n=l;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=Ee(n.alpha)?n.alpha:n.alpha===void 0?1:yf(0,n.alpha,1),n}const _$={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},bc={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(_$).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function KN(e){let t={},r=e.match(bc.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*_$[r]):bc.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}function GN(e){if(!e)return;e=e.trim();let t=e.match(bc.function);if(t){let r=[],n=[],i=!1,o=t[1].toLowerCase(),s=t[2].replace(bc.singleArgument,(a,u)=>{let{value:l,meta:c}=KN(u);return(a.startsWith("/")||o!=="color"&&r.length===3)&&(i=!0),r.push(l),n.push(c),""});return{name:o,args:r,argMeta:n,lastAlpha:i,commas:s.includes(","),rawName:t[1],rawArgs:t[2]}}}function X(e,t){if(Array.isArray(e))return e.map(n=>X(n,t));if(!e)throw new TypeError("Empty color reference");ya(e)&&(e=j$(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=U.get(r)),e.alpha===void 0&&(e.alpha=1),e}const ZN=75e-6;class U{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?U.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=F0(n),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:U.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:HN(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Hi.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=ZN}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,o)=>{let s=n[o];if(s.type!=="angle"&&s.range){if(Ee(i))return!0;let[a,u]=s.range;return(a===void 0||i>=a-r)&&(u===void 0||i<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=gc.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=X(t);[t,r]=[a.space,a.coords]}if(t=U.get(t),this.equals(t))return r;r=r.map(a=>Ee(a)?0:a);let n=this.path,i=t.path,o,s;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)o=n[a],s=a;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=X(t);[t,r]=[n.space,n.coords]}return t=U.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(U.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||Gs(t,this))return t;if(_i(t)==="string"){let i=U.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return U.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=U.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[i,o]of Object.entries(n.formats)){o.name??=i,o.type??="function";let s=(!t.name||o.name===t.name)&&(!t.type||o.type===t.type);if(t.id){let a=o.ids||[o.id],u=Array.isArray(t.id)?t.id:[t.id];s&&=u.some(l=>a.includes(l))}if(s){let a=gc.get(o,n);return a!==o&&(n.formats[o.name]=a),a}}return null}static resolveCoord(t,r){let n=_i(t),i,o;if(n==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=U.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=_i(o),n==="number"||n==="string"&&o>=0){let u=Object.entries(i.coords)[o];if(u)return{space:i,id:u[0],index:o,...u[1]}}i=U.get(i);let s=o.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function HN(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Zt=new U({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class or extends U{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Zt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=st(r,t.toXYZ_M);return this.white!==this.base.white&&(n=yc(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=yc(this.base.white,this.white,r),st(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function U$(e,t={}){if(Array.isArray(e))return e.map(u=>U$(u,t));let{cssProperty:r="background-color",element:n,...i}=t,o=null;try{return X(e,i)}catch(u){o=u}let{CSS:s,getComputedStyle:a}=globalThis;if(ya(e)&&n&&s&&a&&s.supports(r,e)){let u=n.style[r];e!==u&&(n.style[r]=e);let l=a(n).getPropertyValue(r);if(e!==u&&(n.style[r]=u),l!==e)try{return X(l,i)}catch(c){o=c}else o={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=o),null}function Ku(e,t){e=X(e);let r=U.get(t,t?.space),n=t?.precision,i;return!r||e.space.equals(r)?i=e.coords.slice():i=r.from(e),n===void 0?i:i.map(o=>kh(o,n))}function Lr(e,t){if(e=X(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=U.resolveCoord(t,e.space);return Ku(e,r)[n]}function Mh(e,t,r,n){return e=X(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=U.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}Mh.returns="color";function $i(e,t,r){if(e=X(e),arguments.length===2&&_i(arguments[1])==="object"){let n=arguments[1];for(let i in n)$i(e,i,n[i])}else if(typeof r=="function"&&(r=r(Lr(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:i}=U.resolveCoord(t,e.space),o=Ku(e,n);o[i]=r,Mh(e,n,o)}return e}$i.returns="color";var Sh=new U({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Zt,fromBase:e=>yc(Zt.white,"D50",e),toBase:e=>yc("D50",Zt.white,e)});const YN=216/24389,U1=24/116,wl=24389/27;let md=mr.D50;var jr=new U({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:md,base:Sh,fromBase(e){let r=e.map((s,a)=>s/md[a]).map(s=>s>YN?Math.cbrt(s):(wl*s+16)/116),n=116*r[1]-16,i=500*(r[0]-r[1]),o=200*(r[1]-r[2]);return[n,i,o]},toBase(e){let[t,r,n]=e,i=[];return i[1]=(t+16)/116,i[0]=r/500+i[1],i[2]=i[1]-n/200,[i[0]>U1?Math.pow(i[0],3):(116*i[0]-16)/wl,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/wl,i[2]>U1?Math.pow(i[2],3):(116*i[2]-16)/wl].map((s,a)=>s*md[a])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function mn(e){return typeof e!="number"?e:(e%360+360)%360}function z$(e,t){let[r,n]=t,i=Ee(r),o=Ee(n);if(i&&o)return[r,n];if(i?r=n:o&&(n=r),e==="raw")return t;r=mn(r),n=mn(n);let s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var Yr=new U({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:jr,fromBase(e){if(this.ε===void 0){let a=Object.values(this.base.coords)[1].refRange,u=a[1]-a[0];this.ε=u/1e5}let[t,r,n]=e,i=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,o=i?null:mn(Math.atan2(n,r)*180/Math.PI),s=i?0:Math.sqrt(r**2+n**2);return[t,s,o]},toBase(e){let[t,r,n]=e,i=null,o=null;return Ee(n)||(r=r<0?0:r,i=r*Math.cos(n*Math.PI/180),o=r*Math.sin(n*Math.PI/180)),[t,i,o]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const z1=25**7,wc=Math.PI,V1=180/wc,ss=wc/180;function W1(e){const t=e*e;return t*t*t*e}function V$(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=X([e,t]);let[o,s,a]=jr.from(e),u=Yr.from(jr,[o,s,a])[1],[l,c,f]=jr.from(t),d=Yr.from(jr,[l,c,f])[1];u<0&&(u=0),d<0&&(d=0);let m=(u+d)/2,h=W1(m),p=.5*(1-Math.sqrt(h/(h+z1))),$=(1+p)*s,v=(1+p)*c,A=Math.sqrt($**2+a**2),S=Math.sqrt(v**2+f**2),N=$===0&&a===0?0:Math.atan2(a,$),I=v===0&&f===0?0:Math.atan2(f,v);N<0&&(N+=2*wc),I<0&&(I+=2*wc),N*=V1,I*=V1;let te=l-o,le=S-A,re=I-N,Ce=N+I,lt=Math.abs(re),Ye;A*S===0?Ye=0:lt<=180?Ye=re:re>180?Ye=re-360:re<-180?Ye=re+360:Hr.warn("the unthinkable has happened");let Qt=2*Math.sqrt(S*A)*Math.sin(Ye*ss/2),Qr=(o+l)/2,sr=(A+S)/2,_n=W1(sr),ze;A*S===0?ze=Ce:lt<=180?ze=Ce/2:Ce<360?ze=(Ce+360)/2:ze=(Ce-360)/2;let Hn=(Qr-50)**2,Ci=1+.015*Hn/Math.sqrt(20+Hn),yn=1+.045*sr,ct=1;ct-=.17*Math.cos((ze-30)*ss),ct+=.24*Math.cos(2*ze*ss),ct+=.32*Math.cos((3*ze+6)*ss),ct-=.2*Math.cos((4*ze-63)*ss);let Pe=1+.015*sr*ct,zt=30*Math.exp(-1*((ze-275)/25)**2),bn=2*Math.sqrt(_n/(_n+z1)),yr=-1*Math.sin(2*zt*ss)*bn,ar=(te/(r*Ci))**2;return ar+=(le/(n*yn))**2,ar+=(Qt/(i*Pe))**2,ar+=yr*(le/(n*yn))*(Qt/(i*Pe)),Math.sqrt(ar)}const JN=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],XN=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],QN=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Ui=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Bn=new U({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Zt,fromBase(e){let t=st(e,JN);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),st(t,QN,t)},toBase(e){let t=st(e,Ui);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,st(t,XN,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function M0(e,t){[e,t]=X([e,t]);let[r,n,i]=Bn.from(e),[o,s,a]=Bn.from(t),u=r-o,l=n-s,c=i-a;return Math.sqrt(u**2+l**2+c**2)}const eP=75e-6;function Fo(e,t,{epsilon:r=eP}={}){e=X(e),t||(t=e.space),t=U.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Zs(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function W$(e,t,r="lab"){r=U.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((o,s,a)=>{let u=i[a];return Ee(s)||Ee(u)?o:o+(u-s)**2},0))}function tP(e,t){return W$(e,t,"lab")}const rP=Math.PI,q1=rP/180;function nP(e,t,{l:r=2,c:n=1}={}){[e,t]=X([e,t]);let[i,o,s]=jr.from(e),[,a,u]=Yr.from(jr,[i,o,s]),[l,c,f]=jr.from(t),d=Yr.from(jr,[l,c,f])[1];a<0&&(a=0),d<0&&(d=0);let m=i-l,h=a-d,p=o-c,$=s-f,v=p**2+$**2-h**2,A=.511;i>=16&&(A=.040975*i/(1+.01765*i));let S=.0638*a/(1+.0131*a)+.638,N;Ee(u)&&(u=0),u>=164&&u<=345?N=.56+Math.abs(.2*Math.cos((u+168)*q1)):N=.36+Math.abs(.4*Math.cos((u+35)*q1));let I=Math.pow(a,4),te=Math.sqrt(I/(I+1900)),le=S*(te*N+1-te),re=(m/(r*A))**2;return re+=(h/(n*S))**2,re+=v/le**2,Math.sqrt(re)}const K1=203;var Th=new U({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Zt,fromBase(e){return e.map(t=>t*K1)},toBase(e){return e.map(t=>t/K1)}});const $l=1.15,vl=.66,G1=2610/2**14,iP=2**14/2610,Z1=3424/2**12,H1=2413/2**7,Y1=2392/2**7,oP=1.7*2523/2**5,J1=2**5/(1.7*2523),Dl=-.56,hd=16295499532821565e-27,sP=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],aP=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],uP=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],lP=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var q$=new U({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Th,fromBase(e){let[t,r,n]=e,i=$l*t-($l-1)*n,o=vl*r-(vl-1)*t,a=st([i,o,n],sP).map(function(d){let m=Z1+H1*vt(d/1e4,G1),h=1+Y1*vt(d/1e4,G1);return vt(m/h,oP)}),[u,l,c]=st(a,uP);return[(1+Dl)*u/(1+Dl*u)-hd,l,c]},toBase(e){let[t,r,n]=e,i=(t+hd)/(1+Dl-Dl*(t+hd)),s=st([i,r,n],lP).map(function(d){let m=Z1-vt(d,J1),h=Y1*vt(d,J1)-H1;return 1e4*vt(m/h,iP)}),[a,u,l]=st(s,aP),c=(a+($l-1)*l)/$l,f=(u+(vl-1)*c)/vl;return[c,f,l]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),S0=new U({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:q$,fromBase:Yr.fromBase,toBase:Yr.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function cP(e,t){[e,t]=X([e,t]);let[r,n,i]=S0.from(e),[o,s,a]=S0.from(t),u=r-o,l=n-s;Ee(i)&&Ee(a)?(i=0,a=0):Ee(i)?i=a:Ee(a)&&(a=i);let c=i-a,f=2*Math.sqrt(n*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+f**2)}const K$=3424/4096,G$=2413/128,Z$=2392/128,X1=2610/16384,fP=2523/32,dP=16384/2610,Q1=32/2523,mP=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],hP=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],pP=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],gP=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var T0=new U({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Th,fromBase(e){let t=st(e,mP);return yP(t)},toBase(e){let t=bP(e);return st(t,gP)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function yP(e){let t=e.map(function(r){let n=K$+G$*(r/1e4)**X1,i=1+Z$*(r/1e4)**X1;return(n/i)**fP});return st(t,hP)}function bP(e){return st(e,pP).map(function(n){let i=Math.max(n**Q1-K$,0),o=G$-Z$*n**Q1;return 1e4*(i/o)**dP})}function wP(e,t){[e,t]=X([e,t]);let[r,n,i]=T0.from(e),[o,s,a]=T0.from(t);return 720*Math.sqrt((r-o)**2+.25*(n-s)**2+(i-a)**2)}function $P(e,t){[e,t]=X([e,t]);let r=2,[n,i,o]=Bn.from(e),[s,a,u]=Bn.from(t),l=n-s,c=r*(i-a),f=r*(o-u);return Math.sqrt(l**2+c**2+f**2)}const vP=mr.D65,H$=.42,e2=1/H$,pd=2*Math.PI,Y$=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],DP=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],xP=[[460,451,288],[460,-891,-261],[460,-220,-6300]],AP={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},wo={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},EP=180/Math.PI,t2=Math.PI/180;function J$(e,t){return e.map(n=>{const i=vt(t*Math.abs(n)*.01,H$);return 400*bf(i,n)/(i+27.13)})}function CP(e,t){const r=100/t*27.13**e2;return e.map(n=>{const i=Math.abs(n);return bf(r*vt(i/(400-i),e2),n)})}function kP(e){let t=mn(e);t<=wo.h[0]&&(t+=360);const r=L$(wo.h,t)-1,[n,i]=wo.h.slice(r,r+2),[o,s]=wo.e.slice(r,r+2),a=wo.H[r],u=(t-n)/o;return a+100*u/(u+(i-t)/s)}function FP(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=wo.h.slice(r,r+2),[o,s]=wo.e.slice(r,r+2);return mn((t*(s*n-o*i)-100*n*s)/(t*(s-o)-100*s))}function X$(e,t,r,n,i){const o={};o.discounting=i,o.refWhite=e,o.surround=n;const s=e.map($=>$*100);o.la=t,o.yb=r;const a=s[1],u=st(s,Y$);let l=AP[o.surround];const c=l[0];o.c=l[1],o.nc=l[2];const d=(1/(5*o.la+1))**4;o.fl=d*o.la+.1*(1-d)*(1-d)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/a,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const m=Math.max(Math.min(c*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=u.map($=>$u(1,a/$,m)),o.dRgbInv=o.dRgb.map($=>1/$);const h=u.map(($,v)=>$*o.dRgb[v]),p=J$(h,o.fl);return o.aW=o.nbb*(2*p[0]+p[1]+.05*p[2]),o}const r2=X$(vP,64/Math.PI*.2,20,"average",!1);function N0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=mn(e.h)*t2:r=FP(e.H)*t2;const n=Math.cos(r),i=Math.sin(r);let o=0;e.J!==void 0?o=vt(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=vt(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*vt(o,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,f=l/t.nbb,d=23*(f+.305)*Fh(a,23*c+a*(11*n+108*i)),m=d*n,h=d*i,p=CP(st([f,m,h],xP).map($=>$*1/1403),t.fl);return st(p.map(($,v)=>$*t.dRgbInv[v]),DP).map($=>$/100)}function Q$(e,t){const r=e.map(S=>S*100),n=J$(st(r,Y$).map((S,N)=>S*t.dRgb[N]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,o=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(o,i)%pd+pd)%pd,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*Fh(a*Math.sqrt(i**2+o**2),n[0]+n[1]+1.05*n[2]+.305),l=vt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),f=vt(c/t.aW,.5*t.c*t.z),d=100*vt(f,2),m=4/t.c*f*(t.aW+4)*t.flRoot,h=l*f,p=h*t.flRoot,$=mn(s*EP),v=kP($),A=50*vt(t.c*l/(t.aW+4),1/2);return{J:d,C:h,h:$,s:A,Q:m,M:p,H:v}}var MP=new U({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Zt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=Q$(e,r2),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return N0({J:e[0],M:e[1],h:e[2]},r2)}});const SP=mr.D65,TP=216/24389,ev=24389/27;function NP(e){return 116*(e>TP?Math.cbrt(e):(ev*e+16)/116)-16}function P0(e){return e>8?Math.pow((e+16)/116,3):e/ev}function PP(e,t){let[r,n,i]=e,o=[],s=0;if(i===0)return[0,0,0];let a=P0(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let c=0,f=1/0;for(;c<=l;){o=N0({J:s,C:n,h:r},t);const d=Math.abs(o[1]-a);if(d<f){if(d<=u)return o;f=d}s=s-(o[1]-a)*s/(2*o[1]),c+=1}return N0({J:s,C:n,h:r},t)}function IP(e,t){const r=NP(e[1]);if(r===0)return[0,0,0];const n=Q$(e,Nh);return[mn(n.h),n.C,r]}const Nh=X$(SP,200/Math.PI*P0(50),P0(50)*100,"average",!1);var vu=new U({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Zt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=IP(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return PP(e,Nh)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const OP=Math.PI/180,n2=[1,.007,.0228];function i2(e){e[1]<0&&(e=vu.fromBase(vu.toBase(e)));const t=Math.log(Math.max(1+n2[2]*e[1]*Nh.flRoot,1))/n2[2],r=e[0]*OP,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function BP(e,t){[e,t]=X([e,t]);let[r,n,i]=i2(vu.from(e)),[o,s,a]=i2(vu.from(t));return Math.sqrt((r-o)**2+(n-s)**2+(i-a)**2)}var Hs={deltaE76:tP,deltaECMC:nP,deltaE2000:V$,deltaEJz:cP,deltaEITP:wP,deltaEOK:M0,deltaEOK2:$P,deltaEHCT:BP};function RP(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const o2={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Yi(e,{method:t=Hr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:o=void 0}={}){if(e=X(e),ya(arguments[1])?r=arguments[1]:r||(r=e.space),r=U.get(r),Fo(e,r,{epsilon:0}))return e;let s;if(t==="css")s=LP(e,{space:r});else{if(t!=="clip"&&!Fo(e,r)){Object.prototype.hasOwnProperty.call(o2,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:o}=o2[t]);let a=V$;if(n!==""){for(let l in Hs)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=Hs[l];break}}i===0&&(i=1e-16);let u=Yi(je(e,r),{method:"clip",space:r});if(a(e,u)>i){if(o&&Object.keys(o).length===3){let A=U.resolveCoord(o.channel),S=Lr(je(e,A.space),A.id);if(Ee(S)&&(S=0),S>=o.max)return je({space:"xyz-d65",coords:mr.D65},e.space);if(S<=o.min)return je({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=U.resolveCoord(t),c=l.space,f=l.id,d=je(e,c);d.coords.forEach((A,S)=>{Ee(A)&&(d.coords[S]=0)});let h=(l.range||l.refRange)[0],p=RP(i),$=h,v=Lr(d,f);for(;v-$>p;){let A=Zs(d);A=Yi(A,{space:r,method:"clip"}),a(d,A)-i<p?$=Lr(d,f):v=Lr(d,f),$i(d,f,($+v)/2)}s=je(d,r)}else s=u}else s=je(e,r);if(t==="clip"||!Fo(s,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,f]=a[l];return c!==void 0&&(u=Math.max(c,u)),f!==void 0&&(u=Math.min(u,f)),u})}}return r!==e.space&&(s=je(s,e.space)),e.coords=s.coords,e}Yi.returns="color";const s2={WHITE:{space:Bn,coords:[1,0,0],alpha:1},BLACK:{space:Bn,coords:[0,0,0],alpha:1}};function LP(e,{space:t}={}){e=X(e),t||(t=e.space),t=U.get(t);const i=U.get("oklch");if(t.isUnbounded)return je(e,t);const o=je(e,i);let s=o.coords[0];if(s>=1){const h=je(s2.WHITE,t);return h.alpha=e.alpha,je(h,t)}if(s<=0){const h=je(s2.BLACK,t);return h.alpha=e.alpha,je(h,t)}if(Fo(o,t,{epsilon:0}))return je(o,t);function a(h){const p=je(h,t),$=Object.values(t.coords);return p.coords=p.coords.map((v,A)=>{if("range"in $[A]){const[S,N]=$[A].range;return yf(S,v,N)}return v}),p}let u=0,l=o.coords[1],c=!0,f=Zs(o),d=a(f),m=M0(d,f);if(m<.02)return d;for(;l-u>1e-4;){const h=(u+l)/2;if(f.coords[1]=h,c&&Fo(f,t,{epsilon:0}))u=h;else if(d=a(f),m=M0(d,f),m<.02){if(.02-m<1e-4)break;c=!1,u=h}else l=h}return d}function je(e,t,{inGamut:r}={}){e=X(e),t=U.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=Yi(i,r===!0?void 0:r)),i}je.returns="color";function Ha(e,t={}){let{precision:r=Hr.precision,format:n,inGamut:i=!0,coords:o,alpha:s,commas:a}=t,u,l=X(e),c=n,f=l.parseMeta;f&&!n&&(f.format.canSerialize()&&(n=f.format,c=f.formatId),o??=f.types,s??=f.alphaType,a??=f.commas),c&&(n=l.space.getFormat(n)??U.findFormat(c)),n||(n=l.space.getFormat("default")??U.DEFAULT_FORMAT,c=n.name),n&&n.space&&n.space!==l.space&&(l=je(l,n.space));let d=l.coords.slice();if(i||=n.toGamut,i&&!Fo(l)&&(d=Yi(Zs(l),i===!0?void 0:i).coords),n.type==="custom")if(n.serialize)u=n.serialize(d,l.alpha,t);else throw new TypeError(`format ${c} can only be used to parse colors, not for serialization`);else{let m=n.name||"color",h=n.serializeCoords(d,r,o);if(m==="color"){let S=n.id||n.ids?.[0]||l.space.cssId||l.space.id;h.unshift(S)}let p=l.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let $=s?.type??"<number>",v=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&p<1,A="";if(a??=n.commas,v){if(r!==null){let S;$==="<percentage>"&&(S="%",p*=100),p=Ch(p,{precision:r,unit:S})}A=`${a?",":" /"} ${p}`}u=`${m}(${h.join(a?", ":" ")}${A})`}return u}const jP=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],_P=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Du=new or({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:jP,fromXYZ_M:_P}),tv=new or({id:"rec2020",name:"REC.2020",base:Du,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const UP=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],zP=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var rv=new or({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:UP,fromXYZ_M:zP});const VP=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Nt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var nv=new or({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:VP,fromXYZ_M:Nt}),a2={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let u2=Array(3).fill("<percentage> | <number>[0, 255]"),l2=Array(3).fill("<number>[0, 255]");var Bo=new or({id:"srgb",name:"sRGB",base:nv,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:u2},rgb_number:{name:"rgb",commas:!0,coords:l2,alpha:!1},color:{},rgba:{coords:u2,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:l2},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let i=r&&e.every(s=>s%17===0);return"#"+e.map(s=>i?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=a2.black,t.alpha=0):t.coords=a2[e],t.coords)return t}}}}),iv=new or({id:"p3",cssId:"display-p3",name:"P3",base:rv,fromBase:Bo.fromBase,toBase:Bo.toBase});Hr.display_space=Bo;let WP;if(typeof CSS<"u"&&CSS.supports)for(let e of[jr,tv,iv]){let t=e.getMinCoords(),n=Ha({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Hr.display_space=e;break}}function qP(e,{space:t=Hr.display_space,...r}={}){e=X(e);let n=Ha(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Hr.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(Ee)||Ee(e.alpha))&&!(WP??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=Zs(e),i.coords=i.coords.map($t),i.alpha=$t(i.alpha),n=Ha(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=je(i,t),n=new String(Ha(i,r)),n.color=i}return n}function KP(e,t,{space:r,hue:n="shorter"}={}){e=X(e),r||=e.space,r=U.get(r);let i=Object.values(r.coords);[e,t]=[e,t].map(l=>je(l,r));let[o,s]=[e,t].map(l=>l.coords),a=o.map((l,c)=>{let f=i[c],d=s[c];return f.type==="angle"&&([l,d]=z$(n,[l,d])),c2(l,d)}),u=c2(e.alpha,t.alpha);return{space:r,coords:a,alpha:u}}function c2(e,t){return Ee(e)||Ee(t)?e===t?null:0:e-t}function GP(e,t){return e=X(e),t=X(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Ji(e){return Lr(e,[Zt,"y"])}function ov(e,t){$i(e,[Zt,"y"],t)}function ZP(e){Object.defineProperty(e.prototype,"luminance",{get(){return Ji(this)},set(t){ov(this,t)}})}var HP=Object.freeze({__proto__:null,getLuminance:Ji,register:ZP,setLuminance:ov});function YP(e,t){e=X(e),t=X(t);let r=Math.max(Ji(e),0),n=Math.max(Ji(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const JP=.56,XP=.57,QP=.62,eI=.65,f2=.022,tI=1.414,rI=.1,nI=5e-4,iI=1.14,d2=.027,oI=1.14;function m2(e){return e>=f2?e:e+(f2-e)**tI}function as(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function sI(e,t){t=X(t),e=X(e);let r,n,i,o,s,a;t=je(t,"srgb"),[o,s,a]=t.coords.map(m=>Ee(m)?0:m);let u=as(o)*.2126729+as(s)*.7151522+as(a)*.072175;e=je(e,"srgb"),[o,s,a]=e.coords.map(m=>Ee(m)?0:m);let l=as(o)*.2126729+as(s)*.7151522+as(a)*.072175,c=m2(u),f=m2(l),d=f>c;return Math.abs(f-c)<nI?n=0:d?(r=f**JP-c**XP,n=r*iI):(r=f**eI-c**QP,n=r*oI),Math.abs(n)<rI?i=0:n>0?i=n-d2:i=n+d2,i*100}function aI(e,t){e=X(e),t=X(t);let r=Math.max(Ji(e),0),n=Math.max(Ji(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const uI=5e4;function lI(e,t){e=X(e),t=X(t);let r=Math.max(Ji(e),0),n=Math.max(Ji(t),0);return n>r&&([r,n]=[n,r]),n===0?uI:(r-n)/n}function cI(e,t){e=X(e),t=X(t);let r=Lr(e,[jr,"l"]),n=Lr(t,[jr,"l"]);return Math.abs(r-n)}const fI=216/24389,h2=24/116,xl=24389/27;let gd=mr.D65;var I0=new U({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:gd,base:Zt,fromBase(e){let r=e.map((n,i)=>n/gd[i]).map(n=>n>fI?Math.cbrt(n):(xl*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>h2?Math.pow(t[0],3):(116*t[0]-16)/xl,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/xl,t[2]>h2?Math.pow(t[2],3):(116*t[2]-16)/xl].map((n,i)=>n*gd[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const yd=Math.pow(5,.5)*.5+.5;function dI(e,t){e=X(e),t=X(t);let r=Lr(e,[I0,"l"]),n=Lr(t,[I0,"l"]),i=Math.abs(Math.pow(r,yd)-Math.pow(n,yd)),o=Math.pow(i,1/yd)*Math.SQRT2-40;return o<7.5?0:o}var zl=Object.freeze({__proto__:null,contrastAPCA:sI,contrastDeltaPhi:dI,contrastLstar:cI,contrastMichelson:aI,contrastWCAG21:YP,contrastWeber:lI});function mI(e,t,r){ya(r)&&(r={algorithm:r});let{algorithm:n,...i}=r||{};if(!n){let o=Object.keys(zl).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=X(e),t=X(t);for(let o in zl)if("contrast"+n.toLowerCase()===o.toLowerCase())return zl[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function wf(e){let[t,r,n]=Ku(e,Zt),i=t+15*r+3*n;return[4*t/i,9*r/i]}function sv(e){let[t,r,n]=Ku(e,Zt),i=t+r+n;return[t/i,r/i]}function hI(e){Object.defineProperty(e.prototype,"uv",{get(){return wf(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return sv(this)}})}var pI=Object.freeze({__proto__:null,register:hI,uv:wf,xy:sv});function Ra(e,t,r={}){ya(r)&&(r={method:r});let{method:n=Hr.deltaE,...i}=r;for(let o in Hs)if("deltae"+n.toLowerCase()===o.toLowerCase())return Hs[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function av(e,t=.25){let n=[U.get("oklch","lch"),"l"];return $i(e,n,i=>i*(1+t))}function uv(e,t=.25){let n=[U.get("oklch","lch"),"l"];return $i(e,n,i=>i*(1-t))}av.returns="color";uv.returns="color";var gI=Object.freeze({__proto__:null,darken:uv,lighten:av});function lv(e,t,r,n={}){return[e,t]=[X(e),X(t)],_i(r)==="object"&&([r,n]=[.5,r]),Gu(e,t,n)(r??.5)}function cv(e,t,r={}){let n;Ph(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[X(e),X(t)],n=Gu(e,t,u));let l=Ra(e,t),c=i>0?Math.max(s,Math.ceil(l/i)+1):s,f=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)f=[{p:.5,color:n(.5)}];else{let d=1/(c-1);f=Array.from({length:c},(m,h)=>{let p=h*d;return{p,color:n(p)}})}if(i>0){let d=f.reduce((m,h,p)=>{if(p===0)return 0;let $=Ra(h.color,f[p-1].color,o);return Math.max(m,$)},0);for(;d>i;){d=0;for(let m=1;m<f.length&&f.length<a;m++){let h=f[m-1],p=f[m],$=(p.p+h.p)/2,v=n($);d=Math.max(d,Ra(v,h.color),Ra(v,p.color)),f.splice(m,0,{p:$,color:n($)}),m++}}}return f=f.map(d=>d.color),f}function Gu(e,t,r={}){if(Ph(e)){let[u,l]=[e,t];return Gu(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:i,progression:o,premultiplied:s}=r;e=X(e),t=X(t),e=Zs(e),t=Zs(t);let a={colors:[e,t],options:r};if(n?n=U.get(n):n=U.registry[Hr.interpolationSpace]||e.space,i=i?U.get(i):n,e=je(e,n),t=je(t,n),e=Yi(e),t=Yi(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,f]=[Lr(e,l),Lr(t,l)];Ee(c)&&!Ee(f)?c=f:Ee(f)&&!Ee(c)&&(f=c),[c,f]=z$(u,[c,f]),$i(e,l,c),$i(t,l,f)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=o?o(u):u;let l=e.coords.map((d,m)=>{let h=t.coords[m];return $u(d,h,u)}),c=$u(e.alpha,t.alpha,u),f={space:n,coords:l,alpha:c};return s&&(f.coords=f.coords.map(d=>d/c)),i!==n&&(f=je(f,i)),f},{rangeArgs:a})}function Ph(e){return _i(e)==="function"&&!!e.rangeArgs}Hr.interpolationSpace="lab";function yI(e){e.defineFunction("mix",lv,{returns:"color"}),e.defineFunction("range",Gu,{returns:"function<color>"}),e.defineFunction("steps",cv,{returns:"array<color>"})}var bI=Object.freeze({__proto__:null,isRange:Ph,mix:lv,range:Gu,register:yI,steps:cv}),wI=new U({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Bo,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,u]=[null,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-n)/l+2;break;case o:s=(n-i)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),fv=new U({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Bo,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,u]=[null,0,t],l=t-r;if(l!==0){switch(t){case n:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-n)/l+2;break;case o:s=(n-i)/l+4}s=s*60}return u&&(a=l/u),s>=360&&(s-=360),[s,a*100,u*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/60)%6;return n-n*r*Math.max(0,Math.min(s,4-s,1))}return[i(5),i(3),i(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),$I=new U({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:fv,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[t,0,a*100]}let o=1-n,s=o===0?0:1-r/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const vI=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],DI=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var dv=new or({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:vI,fromXYZ_M:DI}),xI=new or({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:dv,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const AI=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],EI=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var mv=new or({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Sh,toXYZ_M:AI,fromXYZ_M:EI});const CI=1/512,kI=16/512;var FI=new or({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:mv,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<kI?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=CI?r*n**(1/1.8):16*t})}});const Al=1.09929682680944,p2=.018053968510807;var MI=new or({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Du,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<p2*4.5?t/4.5:r*Math.pow((n+Al-1)/Al,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=p2?r*(Al*Math.pow(n,.45)-(Al-1)):4.5*t})}}),SI=new U({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Bn,fromBase:Yr.fromBase,toBase:Yr.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Ys=2*Math.PI,$c=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],vc=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],bd=Number.MAX_VALUE,Ya=.206,Ih=.03,La=(1+Ya)/(1+Ih);function Vt(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((i,o)=>{n+=i*t[o]}),n}function Ja(e){return .5*(La*e-Ya+Math.sqrt((La*e-Ya)*(La*e-Ya)+4*Ih*La*e))}function Cs(e){return(e**2+Ya*e)/(La*(e+Ih))}function Oh(e){let[t,r]=e;return[r/t,r/(1-t)]}function TI(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}function Bh(e,t){let r=st(e,Ui);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,st(r,t,r)}function $f(e,t,r,n){let i=PI(e,t,r,n),o=Bh([1,i*e,i*t],r),s=vt(1/Math.max(...o),1/3),a=s*i;return[s,a]}function NI(e,t,r,n,i,o,s,a){let u;if(a===void 0&&(a=$f(e,t,o,s)),(r-i)*a[1]-(a[0]-i)*n<=0)u=a[1]*i/(n*a[0]+a[1]*(i-r));else{u=a[1]*(i-1)/(n*(a[0]-1)+a[1]*(i-r));let l=r-i,c=n,f=Vt(Ui[0].slice(1),[e,t]),d=Vt(Ui[1].slice(1),[e,t]),m=Vt(Ui[2].slice(1),[e,t]),h=l+c*f,p=l+c*d,$=l+c*m,v=i*(1-u)+u*r,A=u*n,S=v+A*f,N=v+A*d,I=v+A*m,te=S**3,le=N**3,re=I**3,Ce=3*h*S**2,lt=3*p*N**2,Ye=3*$*I**2,Qt=6*h**2*S,Qr=6*p**2*N,sr=6*$**2*I,_n=Vt(o[0],[te,le,re])-1,ze=Vt(o[0],[Ce,lt,Ye]),Hn=Vt(o[0],[Qt,Qr,sr]),Ci=ze/(ze*ze-.5*_n*Hn),yn=-_n*Ci,ct=Vt(o[1],[te,le,re])-1,Pe=Vt(o[1],[Ce,lt,Ye]),zt=Vt(o[1],[Qt,Qr,sr]),bn=Pe/(Pe*Pe-.5*ct*zt),yr=-ct*bn,ar=Vt(o[2],[te,le,re])-1,ki=Vt(o[2],[Ce,lt,Ye]),Yu=Vt(o[2],[Qt,Qr,sr]),Ju=ki/(ki*ki-.5*ar*Yu),Xo=-ar*Ju;yn=Ci>=0?yn:bd,yr=bn>=0?yr:bd,Xo=Ju>=0?Xo:bd,u+=Math.min(yn,Math.min(yr,Xo))}return u}function hv(e,t,r){let[n,i,o]=e,s=$f(i,o,t,r),a=NI(i,o,n,1,n,t,r,s),u=Oh(s),l=a/Math.min(n*u[0],(1-n)*u[1]),c=TI(i,o),f=n*c[0],d=(1-n)*c[1],m=.9*l*Math.sqrt(Math.sqrt(1/(1/f**4+1/d**4)));return f=n*.4,d=(1-n)*.8,[Math.sqrt(1/(1/f**2+1/d**2)),m,a]}function PI(e,t,r,n){let i,o,s,a,u,l,c,f;Vt(n[0][0],[e,t])>1?([i,o,s,a,u]=n[0][1],[l,c,f]=r[0]):Vt(n[1][0],[e,t])>1?([i,o,s,a,u]=n[1][1],[l,c,f]=r[1]):([i,o,s,a,u]=n[2][1],[l,c,f]=r[2]);let d=i+o*e+s*t+a*e**2+u*e*t,m=Vt(Ui[0].slice(1),[e,t]),h=Vt(Ui[1].slice(1),[e,t]),p=Vt(Ui[2].slice(1),[e,t]),$=1+d*m,v=1+d*h,A=1+d*p,S=$**3,N=v**3,I=A**3,te=3*m*$**2,le=3*h*v**2,re=3*p*A**2,Ce=6*m**2*$,lt=6*h**2*v,Ye=6*p**2*A,Qt=l*S+c*N+f*I,Qr=l*te+c*le+f*re,sr=l*Ce+c*lt+f*Ye;return d=d-Qt*Qr/(Qr**2-.5*Qt*sr),d}function II(e,t,r){let[n,i,o]=e,s=Cs(o),a=null,u=null;if(n=mn(n)/360,s!==0&&s!==1&&i!==0){let l=Math.cos(Ys*n),c=Math.sin(Ys*n),[f,d,m]=hv([s,l,c],t,r),h=.8,p=1.25,$,v,A,S;i<h?($=p*i,v=0,A=h*f,S=1-A/d):($=5*(i-.8),v=d,A=.2*d**2*1.25**2/f,S=1-A/(m-d));let N=v+$*A/(1-S*$);a=N*l,u=N*c}return[s,a,u]}function OI(e,t,r){let n=1e-7,i=1e-4,o=e[0],s=0,a=Ja(o),u=Math.sqrt(e[1]**2+e[2]**2),l=.5+Math.atan2(-e[2],-e[1])/Ys;if(a!==0&&a!==1&&u!==0){let f=e[1]/u,d=e[2]/u,[m,h,p]=hv([o,f,d],t,r),$=.8,v=1.25,A,S,N,I;u<h?(S=$*m,N=1-S/h,I=u/(S+N*u),s=I*$):(A=h,S=.2*h**2*v**2/m,N=1-S/(p-h),I=(u-A)/(S+N*(u-A)),s=$+.2*I)}const c=Math.abs(s)<i;return c||a===0||Math.abs(1-a)<n?(l=null,c||(s=0)):l=mn(l*360),[l,s,a]}var BI=new U({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Bn,gamutSpace:"self",fromBase(e){return OI(e,$c,vc)},toBase(e){return II(e,$c,vc)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),pv=new U({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Bn,fromBase(e){return[Ja(e[0]),e[1],e[2]]},toBase(e){return[Cs(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),RI=new U({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:pv,fromBase:Yr.fromBase,toBase:Yr.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function LI(e,t,r){let[n,i,o]=e;n=mn(n)/360;let s=Cs(o),a=null,u=null;if(s!==0&&i!==0){let l=Math.cos(Ys*n),c=Math.sin(Ys*n),f=$f(l,c,t,r),[d,m]=Oh(f),h=.5,p=1-h/d,$=1-i*h/(h+m-m*p*i),v=i*m*h/(h+m-m*p*i);s=o*$;let A=o*v,S=Cs($),N=v*S/$,I=Cs(s);A=A*I/s,s=I;let[te,le,re]=Bh([S,l*N,c*N],t),Ce=vt(1/Math.max(Math.max(te,le),Math.max(re,0)),1/3);s=s*Ce,A=A*Ce,a=A*l,u=A*c}return[s,a,u]}function jI(e,t,r){let n=1e-4,i=e[0],o=0,s=Ja(i),a=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/Ys;if(i!==0&&i!==1&&a!==0){let l=e[1]/a,c=e[2]/a,f=$f(l,c,t,r),[d,m]=Oh(f),h=.5,p=1-h/d,$=m/(a+i*m),v=$*i,A=$*a,S=Cs(v),N=A*S/v,[I,te,le]=Bh([S,l*N,c*N],t),re=vt(1/Math.max(Math.max(I,te),Math.max(le,0)),1/3);i=i/re,a=a/re,a=a*Ja(i)/i,i=Ja(i),s=i/v,o=(h+m)*A/(m*h+m*p*A)}return Math.abs(o)<n||s===0?u=null:u=mn(u*360),[u,o,s]}var _I=new U({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Bn,gamutSpace:"self",fromBase(e){return jI(e,$c,vc)},toBase(e){return LI(e,$c,vc)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let gv=mr.D65;const UI=216/24389,g2=24389/27,[y2,b2]=wf({space:Zt,coords:gv});var yv=new U({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:gv,base:Zt,fromBase(e){let t=[$t(e[0]),$t(e[1]),$t(e[2])],r=t[1],[n,i]=wf({space:Zt,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let o=r<=UI?g2*r:116*Math.cbrt(r)-16;return[o,13*o*(n-y2),13*o*(i-b2)]},toBase(e){let[t,r,n]=e;if(t===0||Ee(t))return[0,0,0];r=$t(r),n=$t(n);let i=r/(13*t)+y2,o=n/(13*t)+b2,s=t<=8?t/g2:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),Rh=new U({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:yv,fromBase:Yr.fromBase,toBase:Yr.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const zI=216/24389,VI=24389/27,w2=Nt[0][0],$2=Nt[0][1],wd=Nt[0][2],v2=Nt[1][0],D2=Nt[1][1],$d=Nt[1][2],x2=Nt[2][0],A2=Nt[2][1],vd=Nt[2][2];function us(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function Dc(e){const t=Math.pow(e+16,3)/1560896,r=t>zI?t:e/VI,n=r*(284517*w2-94839*wd),i=r*(838422*wd+769860*$2+731718*w2),o=r*(632260*wd-126452*$2),s=r*(284517*v2-94839*$d),a=r*(838422*$d+769860*D2+731718*v2),u=r*(632260*$d-126452*D2),l=r*(284517*x2-94839*vd),c=r*(838422*vd+769860*A2+731718*x2),f=r*(632260*vd-126452*A2);return{r0s:n/o,r0i:i*e/o,r1s:n/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/f,b0i:c*e/f,b1s:l/(f+126452),b1i:(c-769860)*e/(f+126452)}}function E2(e,t){const r=t/360*Math.PI*2,n=us(e.r0s,e.r0i,r),i=us(e.r1s,e.r1i,r),o=us(e.g0s,e.g0i,r),s=us(e.g1s,e.g1i,r),a=us(e.b0s,e.b0i,r),u=us(e.b1s,e.b1i,r);return Math.min(n,i,o,s,a,u)}var WI=new U({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Rh,gamutSpace:Bo,fromBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=Dc(t),s=E2(o,n);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=Dc(n);i=E2(o,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Nt[0][0];Nt[0][1];Nt[0][2];Nt[1][0];Nt[1][1];Nt[1][2];Nt[2][0];Nt[2][1];Nt[2][2];function ls(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function C2(e){let t=ls(e.r0s,e.r0i),r=ls(e.r1s,e.r1i),n=ls(e.g0s,e.g0i),i=ls(e.g1s,e.g1i),o=ls(e.b0s,e.b0i),s=ls(e.b1s,e.b1i);return Math.min(t,r,n,i,o,s)}var qI=new U({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Rh,gamutSpace:"self",fromBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=Dc(t),s=C2(o);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=Dc(n);i=C2(o)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Lh=new or({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:Du.toBase,fromBase:Du.fromBase});const k2=203,F2=2610/2**14,KI=2**14/2610,GI=2523/2**5,M2=2**5/2523,S2=3424/2**12,T2=2413/2**7,N2=2392/2**7;var ZI=new or({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Lh,toBase(e){return e.map(function(t){return(Math.max(t**M2-S2,0)/(T2-N2*t**M2))**KI*1e4/k2})},fromBase(e){return e.map(function(t){let r=Math.max(t*k2/1e4,0),n=S2+T2*r**F2,i=1+N2*r**F2;return(n/i)**GI})}});const P2=.17883277,I2=.28466892,O2=.55991073,Dd=3.7743;var HI=new or({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Lh,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Dd:(Math.exp((t-O2)/P2)+I2)/12*Dd})},fromBase(e){return e.map(function(t){return t/=Dd,t<=1/12?vt(3*t,.5):P2*Math.log(12*t-I2)+O2})}});const bv={};Hi.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=wv(e.W1,e.W2,e.options.method))});Hi.add("chromatic-adaptation-end",e=>{e.M||(e.M=wv(e.W1,e.W2,e.options.method))});function vf({id:e,toCone_M:t,fromCone_M:r}){bv[e]=arguments[0]}function wv(e,t,r="Bradford"){let n=bv[r],[i,o,s]=Ba(n.toCone_M,e),[a,u,l]=Ba(n.toCone_M,t),c=[[a/i,0,0],[0,u/o,0],[0,0,l/s]],f=Ba(c,n.toCone_M);return Ba(n.fromCone_M,f)}vf({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});vf({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});vf({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});vf({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(mr,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});mr.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const YI=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],JI=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var $v=new or({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:mr.ACES,toXYZ_M:YI,fromXYZ_M:JI});const El=2**-16,xd=-.35828683,Cl=(Math.log2(65504)+9.72)/17.52;var XI=new or({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[xd,Cl],name:"Red"},g:{range:[xd,Cl],name:"Green"},b:{range:[xd,Cl],name:"Blue"}},referred:"scene",base:$v,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-El)*2:r<Cl?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(El)+9.72)/17.52:t<El?(Math.log2(El+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),B2=Object.freeze({__proto__:null,A98RGB:xI,A98RGB_Linear:dv,ACEScc:XI,ACEScg:$v,CAM16_JMh:MP,HCT:vu,HPLuv:qI,HSL:wI,HSLuv:WI,HSV:fv,HWB:$I,ICTCP:T0,JzCzHz:S0,Jzazbz:q$,LCH:Yr,LCHuv:Rh,Lab:jr,Lab_D65:I0,Luv:yv,OKLCH:SI,OKLab:Bn,OKLrCH:RI,OKLrab:pv,Okhsl:BI,Okhsv:_I,P3:iv,P3_Linear:rv,ProPhoto:FI,ProPhoto_Linear:mv,REC_2020:tv,REC_2020_Linear:Du,REC_2020_Scene_Referred:MI,REC_2100_HLG:HI,REC_2100_Linear:Lh,REC_2100_PQ:ZI,XYZ_ABS_D65:Th,XYZ_D50:Sh,XYZ_D65:Zt,sRGB:Bo,sRGB_Linear:nv});class Ie{constructor(...t){let r;if(t.length===1){let s={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=X(t[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,i,o;r?(n=r.space||r.spaceId,i=r.coords,o=r.alpha):[n,i,o]=t,Object.defineProperty(this,"space",{value:U.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=Ee(o)?o:o===void 0?1:yf(0,o,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new Ie(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=qP(this,...t);return r.color=new Ie(r.color),r}static get(t,...r){return Gs(t,this)?t:new Ie(t,...r)}static try(t,r){if(Gs(t,this))return t;let n=U$(t,r);return n?new Ie(n):null}static defineFunction(t,r,n=r){let{instance:i=!0,returns:o}=n,s=function(...a){let u=r(...a);if(o==="color")u=Ie.get(u);else if(o==="function<color>"){let l=u;u=function(...c){let f=l(...c);return Ie.get(f)},Object.assign(u,l)}else o==="array<color>"&&(u=u.map(l=>Ie.get(l)));return u};t in Ie||(Ie[t]=s),i&&(Ie.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)Ie.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Ie);else for(let r in t)Ie.defineFunction(r,t[r])}}Ie.defineFunctions({get:Lr,getAll:Ku,set:$i,setAll:Mh,to:je,equals:GP,inGamut:Fo,toGamut:Yi,distance:W$,deltas:KP,toString:Ha});Object.assign(Ie,{util:WN,hooks:Hi,WHITES:mr,Space:U,spaces:U.registry,parse:j$,defaults:Hr});for(let e of Object.keys(B2))U.register(B2[e]);for(let e in U.registry)O0(e,U.registry[e]);Hi.add("colorspace-init-end",e=>{O0(e.id,e),e.aliases?.forEach(t=>{O0(t,e)})});function O0(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(Ie.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let i=new Proxy(n,{has:((o,s)=>{try{return U.resolveCoord([t,s]),!0}catch{}return Reflect.has(o,s)}),get:(o,s,a)=>{if(s&&typeof s!="symbol"&&!(s in o)&&s in i){let{index:u}=U.resolveCoord([t,s]);if(u>=0)return o[u]}return Reflect.get(o,s,a)},set:(o,s,a,u)=>{if(s&&typeof s!="symbol"&&!(s in o)||Number(s)>=0){let{index:l}=U.resolveCoord([t,s]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,s,a,u)}});return i},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}Ie.extend(Hs);Ie.extend({deltaE:Ra});Object.assign(Ie,{deltaEMethods:Hs});Ie.extend(gI);Ie.extend({contrast:mI});Ie.extend(pI);Ie.extend(HP);Ie.extend(bI);Ie.extend(zl);function ue({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function QI(e){try{if(!e)throw new Error("invalid empty color");return new Ie(e)}catch{throw new Error(`Invalid color: ${b(e)}`)}}function R2(e,t){const r=et(t).map(n=>{const i=t[n],o=QI(i);return`${D[n].name}: ${o.toString()};`}).join(" ");return ue({name:e.name,svgTemplate:g`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const eO=ue({name:"Bell24Icon",svgTemplate:g`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),tO=ue({name:"Chat24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),jh=ue({name:"Check24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),rO=ue({name:"ChevronDown24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${D["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${D["vira-icon-stroke-width"].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),_h=ue({name:"ChevronUp24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${D["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${D["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),vv=ue({name:"CloseX24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),nO=ue({name:"Commit24Icon",svgTemplate:g`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),iO=ue({name:"Document24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),oO=ue({name:"DocumentSearch24Icon",svgTemplate:g`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),sO=ue({name:"DoubleChevron24Icon",svgTemplate:g`
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
                fill=${D["vira-icon-fill-color"].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Dv=ue({name:"Element16Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ln=ue({name:"Element24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),aO=ue({name:"ExternalLink24Icon",svgTemplate:g`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),xv=ue({name:"EyeClosed24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${D["vira-icon-fill-color"].value}
            stroke=${D["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${D["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Av=ue({name:"EyeOpen24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${D["vira-icon-fill-color"].value}
            stroke=${D["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${D["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),uO=ue({name:"Filter24Icon",svgTemplate:g`
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
                fill=${D["vira-icon-fill-color"].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),lO=ue({name:"Link24Icon",svgTemplate:g`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />

            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Ev=ue({name:"Loader24Icon",svgTemplate:g`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),pi=fn({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),cO=E`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${pi["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Ro=ue({name:"LoaderAnimated24Icon",svgTemplate:g`
        <style>
            ${cO}
        </style>
        ${Ev.svgTemplate}
    `}),fO=ue({name:"Lock24Icon",svgTemplate:g`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width="calc(${D["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Xa=ue({name:"Options24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),dO=ue({name:"Pencil24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),mO=ue({name:"Shield24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),hO=ue({name:"SortAscending24Icon",svgTemplate:g`
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
                fill=${D["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),pO=ue({name:"SortDescending24Icon",svgTemplate:g`
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
                fill=${D["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),gO=ue({name:"SpeakerLoud24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),yO=ue({name:"SpeakerMedium24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),bO=ue({name:"SpeakerMuted24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),wO=ue({name:"SpeakerQuiet24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),$O=ue({name:"Star24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
        </svg>
    `}),xc=ue({name:"StatusFailure24Icon",svgTemplate:g`
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
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),vO=ue({name:"StatusInProgress24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width="calc(${D["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width="calc(${D["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width="calc(${D["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),DO=ue({name:"StatusSuccess24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),xO=ue({name:"StatusUnknown24Icon",svgTemplate:g`
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
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width="calc(${D["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),AO=ue({name:"StatusWarning24Icon",svgTemplate:g`
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
                fill=${D["vira-icon-fill-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${D["vira-icon-stroke-color"].value}
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width="calc(${D["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),EO=ue({name:"Upload24Icon",svgTemplate:g`
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
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
                fill=${D["vira-icon-fill-color"].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Cv=ue({name:"X24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${D["vira-icon-stroke-color"].value}
                stroke-width=${D["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),B0={Bell24Icon:eO,Chat24Icon:tO,Check24Icon:jh,ChevronDown24Icon:rO,ChevronUp24Icon:_h,CloseX24Icon:vv,Commit24Icon:nO,Document24Icon:iO,DocumentSearch24Icon:oO,DoubleChevron24Icon:sO,Element16Icon:Dv,Element24Icon:ln,ExternalLink24Icon:aO,EyeClosed24Icon:xv,EyeOpen24Icon:Av,Filter24Icon:uO,Link24Icon:lO,Loader24Icon:Ev,LoaderAnimated24Icon:Ro,Lock24Icon:fO,Options24Icon:Xa,Pencil24Icon:dO,Shield24Icon:mO,SortAscending24Icon:hO,SortDescending24Icon:pO,SpeakerLoud24Icon:gO,SpeakerMedium24Icon:yO,SpeakerMuted24Icon:bO,SpeakerQuiet24Icon:wO,Star24Icon:$O,StatusFailure24Icon:xc,StatusInProgress24Icon:vO,StatusSuccess24Icon:DO,StatusUnknown24Icon:xO,StatusWarning24Icon:AO,Upload24Icon:EO,X24Icon:Cv},cn=fn({"vira-form-input-radius":"8px"}),Lo=E`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Js=fn({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":E`calc(${cn["vira-form-input-radius"].value} + 2px)`});function Zu({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const i=Be(ou(r+t+e)),o=E`
        content: '';
        top: calc(${i} * -1);
        left: calc(${i} * -1);
        position: absolute;
        width: calc(100% + calc(${i} * 2));
        height: calc(100% + calc(${i} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${r}px solid ${Js["vira-focus-outline-color"].value};
        border-radius: ${Js["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return n?o:E`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const ne=fn({"vira-form-border-color":"#cccccc","vira-form-placeholder-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-text-selection-color":"#cfe9ff","vira-form-selection-hover-background-color":"#e6f9fe","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#e6f9fe","vira-form-selection-active-foreground-color":"black","vira-form-error-foreground-color":"red","vira-form-success-foreground-color":"green","vira-form-label-font-weight":"bold"}),z=He()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>E`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),De=He()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal},styles:({hostClasses:e})=>E`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${z} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
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
                font-weight: ${ne["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${ne["vira-form-selection-hover-background-color"].value};
            }
        }

        ${z} {
            ${D["vira-icon-stroke-width"].name}: 2px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${ne["vira-form-border-color"].value};
            color: ${ne["vira-form-foreground-color"].value};
            border-radius: ${cn["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${Zu({elementBorderSize:1})}

            &.checked {
                & ${z} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${ne["vira-form-error-foreground-color"].value};
            }

            &:active {
                background-color: ${ne["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${Lo};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:xt()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}const i=e.label?g`
                  <span
                      class="label-text"
                      ${di(e.attributePassthrough?.text)}
                      style=${dt(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:Q;return g`
            <label
                class=${gr({disabled:!!e.disabled})}
                ${di(e.attributePassthrough?.label)}
                style=${dt(e.stylePassthrough?.label)}
                ${W("mousedown",n)}
            >
                ${i}
                <span
                    class="custom-checkbox ${gr({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${dt(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${di(e.attributePassthrough?.["custom-checkbox"])}
                    style=${dt(e.stylePassthrough?.["custom-checkbox"])}
                    ${oN(n)}
                >
                    <${z.assign({icon:jh,fitContainer:!0})}
                        ${di(e.attributePassthrough?.[z.tagName])}
                        style=${dt(e.stylePassthrough?.[z.tagName])}
                    ></${z}>
                </span>
            </label>
        `}}),Hu=E`
    padding: 0;
    margin: 0;
`,on=E`
    ${Hu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Ad=fn({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),ks={menuShadow:E`
        filter: drop-shadow(0px 5px 5px ${Ad["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:E`
        filter: drop-shadow(0px -5px 5px ${Ad["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:E`
        box-shadow: 0 5px 15px ${Ad["modal-shadow-color"].value};
    `},Xs=E`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,xn=fn({"vira-white":"#ffffff","vira-black":"#000000","vira-teal-10":"#c9f6ee","vira-teal-20":"#89ebda","vira-teal-30":"#3fddc3","vira-teal-40":"#23c9ad","vira-teal-50":"#1fb59b","vira-teal-60":"#1a9681","vira-teal-70":"#147464","vira-teal-80":"#0d4c42","vira-teal-90":"#09362f","vira-blue-10":"#ddf0f9","vira-blue-20":"#b9e0f3","vira-blue-30":"#95d0ec","vira-blue-40":"#6dbee5","vira-blue-50":"#44acde","vira-blue-60":"#228ec4","vira-blue-70":"#1a6e98","vira-blue-80":"#114864","vira-blue-90":"#092736","vira-purple-10":"#f0eafb","vira-purple-20":"#e0d4f8","vira-purple-30":"#d1bff4","vira-purple-40":"#c0a9f0","vira-purple-50":"#b093ec","vira-purple-60":"#9770e6","vira-purple-70":"#7745de","vira-purple-80":"#4c1ea9","vira-purple-90":"#31136d","vira-pink-10":"#fbe7f9","vira-pink-20":"#f6cdf3","vira-pink-30":"#f2b3ed","vira-pink-40":"#ed96e6","vira-pink-50":"#e778df","vira-pink-60":"#dd3bd0","vira-pink-70":"#b01fa4","vira-pink-80":"#74146c","vira-pink-90":"#360933","vira-red-10":"#fbe8ec","vira-red-20":"#f7d0d7","vira-red-30":"#f3b8c2","vira-red-40":"#ee9eac","vira-red-50":"#e98495","vira-red-60":"#e1546b","vira-red-70":"#c1223c","vira-red-80":"#7f1628","vira-red-90":"#6d1322","vira-orange-10":"#f8ebd9","vira-orange-20":"#f1d6af","vira-orange-30":"#eac186","vira-orange-40":"#e2aa5c","vira-orange-50":"#da932d","vira-orange-60":"#b77920","vira-orange-70":"#8e5e19","vira-orange-80":"#5e3d10","vira-orange-90":"#362409","vira-green-10":"#e2f4bd","vira-green-20":"#c1e776","vira-green-30":"#9fd927","vira-green-40":"#8fc422","vira-green-50":"#80b11f","vira-green-60":"#6a931a","vira-green-70":"#527214","vira-green-80":"#364b0d","vira-green-90":"#273609","vira-yellow-10":"#f3f199","vira-yellow-20":"#e4e01a","vira-yellow-30":"#d0cd18","vira-yellow-40":"#bdb915","vira-yellow-50":"#aaa613","vira-yellow-60":"#8d8a10","vira-yellow-70":"#6d6b0c","vira-yellow-80":"#484608","vira-yellow-90":"#393807","vira-grey-10":"#ededed","vira-grey-20":"#dadada","vira-grey-30":"#c7c7c7","vira-grey-40":"#b4b4b4","vira-grey-50":"#a2a2a2","vira-grey-60":"#878787","vira-grey-70":"#686868","vira-grey-80":"#444444","vira-grey-90":"#202020"});function L2(e){return F.isPrimitive(e)||"_$cssResult$"in e?String(e):e.default}function ii(e,t,r,n){if(F.isPrimitive(t)||"_$cssResult$"in t)return t;if("refDefaultBackground"in t)return"--var(default-bg)";if("refDefaultForeground"in t)return"--var(default-fg)";if("refBackground"in t||"refForeground"in t){const i=F.hasKey(t,"refBackground")?"refBackground":F.hasKey(t,"refForeground")?"refForeground":void 0,o=i&&F.hasKey(t,i)?t[i]:void 0,s=i==="refBackground"?"background":"foreground",a=o&&n[o];if(!a)throw new Error(`Color theme ${i} reference '${o}' does not exist. (Referenced from '${e}'.)`);const u=a[s]||(s==="foreground"?ii("default-fg",r.foreground,r,n):ii("default-bg",r.background,r,n));return`var(--${o}-${s==="foreground"?"fg":"bg"}, ${ii(o,u,r,n)})`}else return t.value}const Ma="theme-default";function CO(e,t){try{if(Ma in t)throw new Error(`Cannot define theme color by name '${Ma}', it is used internally.`);const r=fn({"default-fg":ii("default-fg",e.foreground,e,t),"default-bg":ii("default-bg",e.background,e,t),"default-inverse-fg":ii("default-inverse-fg",e.background,e,t),"default-inverse-bg":ii("default-inverse-bg",e.foreground,e,t)}),n=To(t).reduce((l,[c,f])=>{const d=j2(c);return l[d.foreground]=f.foreground?ii([c,"foreground"].join(" "),f.foreground,e,t):`var(${r["default-fg"].name}, ${r["default-fg"].default})`,l[d.background]=f.background?ii([c,"background"].join(" "),f.background,e,t):`var(${r["default-bg"].name}, ${r["default-bg"].default})`,l[d.foregroundInverse]=`var(--${d.background}, ${l[d.background]})`,l[d.backgroundInverse]=`var(--${d.foreground}, ${l[d.foreground]})`,l},{}),i=fn(n),o={},s={};To(t).forEach(([l,c])=>{Bt.isString(l);const f=j2(l),d=i[f.foreground],m=i[f.background],h=i[f.foregroundInverse],p=i[f.backgroundInverse];Bt.isDefined(d),Bt.isDefined(m),Bt.isDefined(h),Bt.isDefined(p),o[l]={foreground:d,background:m,init:c,name:l},s[l]={foreground:h,background:p,init:c,name:l}});const a={foreground:r["default-fg"],background:r["default-bg"],init:e,name:Ma},u={...a,foreground:r["default-inverse-fg"],background:r["default-inverse-bg"]};return{colors:{[Ma]:a,...o},inverse:{[Ma]:u,...s},init:{colors:t,default:e}}}catch(r){throw globalThis.setTimeout(()=>om.error(r)),r}}function j2(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}function kO(e,t){const r=kv(e.init.default,1,void 0,t),n=MO(e.init.colors,1,e.init.default,t);return`defineColorTheme(
${r},
${n},
)`}function Ot(e){return"    ".repeat(e)}function kl(e,t){return typeof e!=typeof t?!1:typeof e=="string"||typeof e=="number"?e===t:"_$cssResult$"in e&&"_$cssResult$"in t?e.cssText===t.cssText:JSON.stringify(e)===JSON.stringify(t)}function FO(e){const t=e.match(/^var\(--([^,)]+)/);return t?t[1]:void 0}function _2(e,t,r){if(typeof e=="string")return`'${e}'`;if(typeof e=="number")return String(e);if("_$cssResult$"in e){const n=String(e);{const i=FO(n);if(i)return`${r}['${i}']`}return`css\`${n}\``}else if("refBackground"in e||"refForeground"in e||"refDefaultBackground"in e||"refDefaultForeground"in e){const n=[];return"refForeground"in e&&n.push(`${Ot(t+1)}refForeground: '${e.refForeground}',`),"refBackground"in e&&n.push(`${Ot(t+1)}refBackground: '${e.refBackground}',`),"refDefaultForeground"in e&&n.push(`${Ot(t+1)}refDefaultForeground: true,`),"refDefaultBackground"in e&&n.push(`${Ot(t+1)}refDefaultBackground: true,`),`{
${n.join(`
`)}
${Ot(t)}}`}else return`'${e.default}'`}function kv(e,t,r,n){const i=[];return"foreground"in e&&(!r||!kl(e.foreground,r.foreground))&&(r&&kl(e.foreground,r.background)?i.push(`${Ot(t+1)}foreground: {
${Ot(t+2)}refDefaultBackground: true,
${Ot(t+1)}},`):i.push(`${Ot(t+1)}foreground: ${_2(e.foreground,t+1,n)},`)),"background"in e&&(!r||!kl(e.background,r.background))&&(r&&kl(e.background,r.foreground)?i.push(`${Ot(t+1)}background: {
${Ot(t+2)}refDefaultForeground: true,
${Ot(t+1)}},`):i.push(`${Ot(t+1)}background: ${_2(e.background,t+1,n)},`)),`${Ot(t)}{
${i.join(`
`)}
${Ot(t)}}`}function MO(e,t,r,n){const i=To(e).map(([o,s])=>`${Ot(t+1)}'${o}': ${kv(s,t+1,r,n).trimStart()},`);return`${Ot(t)}{
${i.join(`
`)}
${Ot(t)}}`}function R0({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>R0({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function SO({value:e,allowed:t,blocked:r}){const n=t?R0({input:e,matcher:t}):!0,i=r?R0({input:e,matcher:r}):!1;return n&&!i}function L0(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(SO({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function TO({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){const o=Ao(r,HTMLInputElement),s=F.hasKey(r,"data")&&Yb.isString(r.data)||"";if(s){const{blocked:u}=L0({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=L0({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==a&&(o.value=a),t!==a&&i(a)}var Fs=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(Fs||{});const Ft=He()({tagName:"vira-input",cssVars:{"vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>E`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${ne["vira-form-foreground-color"].value};
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
                    font-weight: ${ne["vira-form-label-font-weight"].value};
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
                ${on};
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
                ${Xs};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${on};
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
                border-radius: ${cn["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${ne["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${on};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${cn["vira-form-input-radius"].value};
                background-color: ${ne["vira-form-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${on};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
                outline: none;

                &:focus:focus-visible:not([disabled]) ~ .focus-border {
                    ${Zu({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${ne["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${ne["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${ne["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Xs};
            }

            button {
                ${on};
                cursor: pointer;
                display: flex;
                transition: color
                    ${pi["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }

            ${e["vira-input-error"].selector} {
                & .wrapper-border {
                    border-color: ${ne["vira-form-error-foreground-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${Lo};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:xt(),inputBlocked:xt()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Co(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:i,host:o})=>{const{filtered:s}=L0({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?g`
                  <${z.assign({icon:e.icon})} class="left-side-icon"></${z}>
              `:Q,u=e.fitText?E`
                  width: ${r.forcedInputWidth}px;
              `:Q,l=W("mousedown",d=>{const m=Ao(d,HTMLElement,{useOriginalTarget:!0}),h=Sn.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);m!==h&&(d.preventDefault(),h.focus())}),c=e.disableBrowserHelps||e.type==="password",f=g`
            <span class="input-wrapper" ${e.label?Q:l}>
                ${a}
                ${kr(!!e.fitText,g`
                        <span
                            class="size-span"
                            ${A$(({contentRect:d})=>{n({forcedInputWidth:d.width})})}
                        >
                            <pre>${s||e.placeholder||Q}</pre>
                        </span>
                    `)}

                <input
                    id=${dt(e.label?r.randomId:void 0)}
                    aria-label=${dt(e.label||void 0)}
                    autofocus=${!1}
                    type=${NO(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${dt(c?"off":void 0)}
                    autocorrect=${dt(c?"off":void 0)}
                    autocapitalize=${dt(c?"off":void 0)}
                    spellcheck=${dt(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${W("input",d=>{TO({inputs:e,previousValue:s,event:d,inputBlockedCallback(m){t(new i.inputBlocked(m))},newValueCallback(m){t(new i.valueChange(m))}})})}
                    placeholder=${dt(e.placeholder||void 0)}
                    ${di(e.attributePassthrough)}
                />

                ${kr(!!(e.showClearButton&&e.value),g`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${W("mousedown",d=>{d.stopImmediatePropagation(),d.preventDefault()})}
                            ${W("click",()=>{e.disabled||t(new i.valueChange(""))})}
                        >
                            <${z.assign({icon:vv})}></${z}>
                        </button>
                    `)}
                ${kr(e.type==="password",g`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${W("mousedown",d=>{d.stopImmediatePropagation(),d.preventDefault()})}
                            ${W("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${z.assign({icon:r.showPassword?Av:xv})}></${z}>
                        </button>
                    `)}
                ${kr(!!e.suffix,g`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?g`
                <label for=${r.randomId} ${l}>
                    <span class="input-label">${e.label}</span>
                    ${f}
                </label>
            `:f}});function NO(e,t){return e==="password"&&t?"text":e||"text"}const mt=He()({tagName:"vira-select",state(){return{randomId:Co(32)}},events:{valueChange:xt()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${ne["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${on};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${cn["vira-form-input-radius"].value};
            background-color: ${ne["vira-form-background-color"].value};
            /*
                Border colors are actually applied via the .wrapper-border class. However, we must
                apply a border here still so that it takes up space.
            */
            border: 1px solid transparent;
            cursor: pointer;

            & select {
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                font: inherit;
                outline: none;
                width: 100%;
                border: none;
                background: none;
                border-radius: inherit;
                padding: ${t["vira-select-padding-vertical"].value} 31px
                    ${t["vira-select-padding-vertical"].value}
                    ${t["vira-select-padding-horizontal"].value};
                cursor: pointer;
                overflow: hidden;
                text-overflow: ellipsis;

                &:focus:focus-visible:not([aria-disabled='true']) ~ .focus-border {
                    ${Zu({elementBorderSize:0,noNesting:!0})}
                }

                &.placeholder {
                    color: ${ne["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${t["vira-select-icon-padding"].value};
                }
            }

            & ${z} {
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

            & .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${cn["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${ne["vira-form-border-color"].value};
                transition: border
                    ${pi["vira-interaction-animation-duration"].value};
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
                font-weight: ${ne["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${Lo}
            }
            ${z} {
                ${Lo}
            }
            & * {
                cursor: not-allowed;
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${ne["vira-form-error-foreground-color"].value};
            }
        }
    `,render({inputs:e,state:t,dispatch:r,events:n}){const i=e.value||void 0,o=e.placeholder||i==null?g`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:Q,s=g`
            <span class="select-wrapper">
                <select
                    .value=${dt(i)}
                    class=${gr({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${dt(e.label?t.randomId:void 0)}
                    aria-label=${dt(e.label||void 0)}
                    aria-disabled=${dt(e.disabled?"true":void 0)}
                    ${W("input",a=>{const u=Ao(a,HTMLSelectElement),l=u.value;u.value!==i&&(u.selectedIndex=e.options.findIndex(c=>c.value===i)),r(new n.valueChange(l))})}
                    ${di(e.attributePassthrough?.select)}
                >
                    ${o}
                    ${e.options.map(a=>g`
                            <option
                                ?selected=${a.value===i}
                                aria-label=${a.label}
                                ?disabled=${a.disabled}
                                value=${a.value}
                            >
                                ${a.label}
                            </option>
                        `)}
                </select>
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <select> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>

                <${z.assign({icon:e.icon})} class="input-icon"></${z}>
                <${z.assign({icon:_h})} class="trigger-icon"></${z}>
            </span>
        `;return e.label?g`
                <label for=${t.randomId} ${di(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),$r=He()({tagName:"vira-form",events:{valueChange:xt(),validChange:xt()},styles:E`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:r,state:n,updateState:i}){const o=VN(e.fields);o!==n.lastIsValid&&(i({lastIsValid:o}),t(new r.validChange({allFieldsAreValid:o})));const s=To(e.fields).map(([a,u])=>u.isHidden?Q:u.type===$e.Checkbox?g`
                        <${De.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:cd(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?hi(u.testId):Q}
                            ${W(De.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${De}>
                    `:u.type===$e.Select?g`
                        <${mt.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:cd(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?hi(u.testId):Q}
                            ${W(mt.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${mt}>
                    `:g`
                        <${Ft.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:cd(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===$e.NewPassword?{autocomplete:"new-password"}:u.type===$e.ExistingPassword?{autocomplete:"password"}:u.type===$e.Email?{autocomplete:"email"}:{},type:[$e.NewPassword,$e.ExistingPassword,$e.PlainPassword].includes(u.type)?Fs.Password:u.type===$e.Email?Fs.Email:Fs.Default})}
                            ${u.testId?hi(u.testId):Q}
                            ${W(Ft.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${Ft}>
                    `);return g`
            <form ${W("submit",a=>a.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}});function PO(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given: ${nx(r)}`)}function IO(e,t=[],r=!1){return r?t.includes(e.id)?t.filter(n=>n!==e.id):[...t,e.id]:[e.id]}function U2({open:e,callback:t,popUpManager:r,host:n,options:i}){if(e){const o=r.showPopUp(n,i);t?.(o)}else r.removePopUp(),t?.(void 0)}const Or=He()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            ${Xs};
            box-sizing: border-box;
            max-width: 100%;
            overflow: hidden;
        }

        .item {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding: 8px;
            padding-right: 24px;
            padding-left: 0;
            text-align: left;
            box-sizing: border-box;
        }

        ${e["vira-menu-item-selected"].selector} ${z} {
            opacity: 1;
            visibility: visible;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${z} {
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
            visibility: hidden;
        }
    `,render({inputs:e}){return g`
            <div class="item">
                <${z.assign({icon:jh})}></${z}>
                <slot>${e.label}</slot>
            </div>
        `}});function OO(e,t){return e>t}function BO(e,t){return e<t}function xu(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var Wn;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Wn||(Wn={}));var Ae;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Ae||(Ae={}));function Df(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const i=n[t.x];if(i)if(i.navEntry.navParams.group){const o=Df(i.children);o&&(r=o.node)}else i.navEntry.navParams.disabled||(r=i)}}if(r)return{node:r,coords:t}}function z2(e,t,r,n){if(!t){const u=Df(e.children);return u?(xu(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:Ae.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:Ae.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=Fv(t.position,r),a=n?!0:!o;return i&&a?(xu(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:r,navAction:Ae.Navigate,coords:s}):i?a?{success:!1,reason:"no conditions matched",direction:r,navAction:Ae.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:Ae.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:Ae.Navigate}}function Fv(e,t){let r=!1,n,i=1;const o=Date.now();for(;!r||!n;)if(n=RO(e,t,i),r=!n.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return om.warning("Failed to find next non-disabled node."),n;return n}function RO(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Bt.isDefined(n,"missing parent");const i=Sn.isDefined(n.children[e.nodeCoords.y]),o=n.children.length>1&&(t===Wn.Down||t===Wn.Up),s=t===Wn.Down||t===Wn.Right?r:-1*r,a=s<0?OO:BO,u=o?Jp(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=Sn.isDefined(n.children[u]),c=o?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:Jp(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),f=n.children[u]?.[c],d=o?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:f,requiresWrapping:d,coords:{x:c,y:u}}}function LO(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:Ae.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=Fv(n,t),a=i?.navEntry.navParams.group?Df(i.children):{node:i,coords:s},u=r?!0:!o;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:Ae.Pibling}:u?(xu(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:o,coords:a.coords,direction:t,navAction:Ae.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:Ae.Pibling}}var lr;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(lr||(lr={}));const Cn={name:"data-nav",js(e){return e?`[${Cn.name}*="${e}"]`:`[${Cn.name}]`},css({baseSelector:e="",navValue:t}={}){return E`
            ${Be(e)}${Be(Cn.js(t))}
        `}},Uh="navEntry";function Mv(e){return Uh in e}function Sv(e){if(Mv(e)){const t=e[Uh];return Sn.instanceOf(t,Tv,"Invalid nav entry")}else return}function jO(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==lr.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class Tv{element;navParams;navTreeNode;navValue;eventListener=jO(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Bt.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Cn.name,""),ud(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,i=t===(n===lr.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(lr.Focused),ud(this.element)||this.element.focus()):(this.removeNavValue(lr.Focused),ud(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,Ae.Focus)}activate(t){const r=this.navValue,n=t===(r===lr.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(lr.Active):this.setNavValue(lr.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,Ae.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(Cn.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(Cn.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function Nv(e,t){Object.entries(t).forEach(([r,n])=>{F.isBoolean(n)&&n?e.setAttribute(r,""):F.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const _O=Ai(class extends Ei{element;lastKey;constructor(e){super(e),this.element=qu(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),zr}});function UO(e){return"group"in e?lr.Group:e.disabled?lr.Disabled:""}function V2(e,t={}){return _O(b(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;Bt.instanceOf(r,HTMLElement);const i={[Cn.name]:UO(t),tabindex:n?0:-1};Nv(r,i);const o=Sv(r)||new Tv(r,e,t);Mv(r)?(o.navParams=t,o.navController=e):r[Uh]=o,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function zO(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Ae.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Ae.Enter};const r=t.position.node.children[0]?.[0];return r?(xu(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ae.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Ae.Enter}}function VO(e,t){return Pv([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function Pv(e,t,r){for(let n=0;n<t.length;n++){const i=t[n];for(let o=0;o<i.length;o++){const s=i[o],a={ancestorChain:e,nodeCoords:{x:o,y:n},node:s};if(r(a))return a;const u=Pv(e.concat(a),s.children,r);if(u)return u}}}function Iv(e,t){const r=VO(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function WO(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Ae.Exit};const r=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Ae.Exit};const{nodeCoords:n}=Iv(e,r.navEntry);return xu(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ae.Exit,coords:n}}class qO extends Rn()("nav-exit"){}class Ov extends Rn()("nav-activate"){}class KO extends Rn()("nav-focus"){}class GO extends Rn()("nav-enter"){}class ZO extends Rn()("nav-navigate"){}class HO extends Rn()("nav-navigate-pibling"){}function YO(e){return{root:!0,children:Bv(e)?.children||[]}}function Bv(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=Sv(t),n=JO(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function JO(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const i=n.navEntry.navParams.x,o=n.navEntry.navParams.y||0,s=_o(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(n):s.withX.push({x:i,node:n})}return e.children.forEach(n=>{const i=Bv(n);i&&r(i)}),t.sort((n,i)=>n.y-i.y).map(n=>(n.withX.sort((i,o)=>i.x-o.x),n.withX.forEach(({x:i,node:o})=>{n.noX.splice(i,0,o)}),n.noX)).filter(F.isTruthy)}class Rv extends am{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Df(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const i=Iv(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:i.nodeCoords};return r&&(n===Ae.Activate?this.dispatch(new Ov({detail:o})):n===Ae.Focus&&this.dispatch(new KO({detail:o}))),o}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:Ae.Navigate,reason:"NavController is locked."};const n=z2(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new ZO({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Ae.Enter,reason:"NavController is locked."};const r=zO(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new GO({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Ae.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Ae.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Bt.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Ae.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Ae.Activate&&this.currentNavEntry.entry.focus(!0);const t=WO(this.getNavTree(),this.currentNavEntry);return this.dispatch(new qO({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:Ae.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),o={...this.currentNavEntry?LO(this.currentNavEntry,r,t):z2(n,void 0,r,t),navAction:Ae.Pibling};return this.dispatch(new HO({detail:o})),o}buildNavTree(){const t=$N(this.rootElement),r=YO(t);return this.cachedNavTree=r,r}}const gs=He()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>E`
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

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,render({inputs:e}){function t(r){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,r)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(e.link?.newTab)return g`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${di(e.attributePassthrough?.a)}
                    style=${dt(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return g`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${di(e.attributePassthrough?.a)}
                    style=${dt(e.stylePassthrough?.a)}
                    ${W("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),W2={item:"menu-item"},Qa=He()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new Rv(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;

            width: 100%;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            overscroll-behavior: contain;
            z-index: 100;
            box-sizing: border-box;
            background-color: ${ne["vira-form-background-color"].value};
            color: ${ne["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${on};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${Cn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:lr.Focused})}, ${Cn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:lr.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${ne["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${Cn.css({baseSelector:".menu-item:not(.disabled)",navValue:lr.Focused})},
                ${Cn.css({baseSelector:".menu-item:not(.disabled)",navValue:lr.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${ne["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${Or} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${Lo};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){PO(e.items);const r=e.items.map(n=>{const i=!!e.selected?.includes(n.id),o=F.isString(n.label)?g`
                      <${Or.assign({label:n.label,selected:i,hideCheckIcon:e.hideCheckIcons})}></${Or}>
                  `:n.label,s=n.disabled||!e.isMultiSelect&&i;return n.route?g`
                    <${gs.assign({route:n.route})}
                        class="menu-item ${gr({disabled:!!n.disabled,selected:i})}"
                        ${hi(W2.item)}
                        title=${dt(n.titleText||void 0)}
                        role="option"
                        ${V2(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </${gs}>
                `:g`
                    <button
                        class="menu-item ${gr({disabled:!!n.disabled,selected:i})}"
                        ${hi(W2.item)}
                        title=${dt(n.titleText||void 0)}
                        role="option"
                        ${V2(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </button>
                `});return g`
            ${r}
        `}});var zh=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(zh||{}),Ac=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Ac||{});const eu=He()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${cn["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${ne["vira-form-background-color"].value};
            border: 1px solid ${ne["vira-form-border-color"].value};
            color: ${ne["vira-form-foreground-color"].value};
            ${ks.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${ks.menuShadowReversed}
            border-radius: ${cn["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${cn["vira-form-input-radius"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),Fl=globalThis.document;class XO extends h${constructor(){if(super({defaultValue:!!Fl?.hidden,equalityCheck:F.strictEquals}),!Fl)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,Fl));const t=r=>this.updateVisibility(r,Fl);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=eB.includes(t.type),i=QO.includes(t.type),o=n?!0:i?!1:r.hasFocus()||!r.hidden;this.setValue(o)}}const QO=["blur","focusout","pagehide"],eB=["focus","focusin","pageshow"],tB=new XO;function rB(e,t){return tB.listen(e,t)}const q2={top:0,left:0,right:0,bottom:0};class Lv extends sm("hide-pop-up"){}class jv extends Rn()("nav-select"){}class nB{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new am;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(t){let r=!1;const n=new ResizeObserver(()=>{r?this.removePopUp():r=!0});n.observe(t),this.cleanupCallbacks=[()=>{n.disconnect()},rB(!1,i=>{i||this.removePopUp()}),this.navController.listen(Ov,i=>{i.detail.success&&(this.listenTarget.dispatch(new jv({detail:i.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),i.stopImmediatePropagation(),i.preventDefault())}),Xd("mousedown",i=>{this.lastRootElement&&i.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Xd("keydown",i=>{const o=i.code;o==="Escape"?this.removePopUp():this.options.supportNavigation&&(o==="ArrowDown"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:Wn.Down,allowWrapping:!1})):o==="ArrowUp"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:Wn.Up,allowWrapping:!1})):o==="ArrowLeft"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:Wn.Left,allowWrapping:!1})):o==="ArrowRight"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:Wn.Right,allowWrapping:!1})):(o==="Enter"||o==="Return"||o==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(i.stopImmediatePropagation(),i.preventDefault()))})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Lv)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=AN(t);Bt.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=pr(q2,h=>o[h]),f=pr(q2,h=>{const p=l[h],$=c[h];return Math.abs(p-$)}),d=f.top>f.bottom+n.verticalDiffThreshold&&f.bottom<n.minDownSpace,m=f.left>f.right+n.horizontalDiffThreshold&&f.right<n.minRightSpace;return this.attachGlobalListeners(i),{popDown:!d,popRight:!m,positions:{container:l,root:c,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var zi=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(zi||{});const be=He()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new nB(new Rv(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>E`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${on};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${Zu({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${Xs};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Lo}
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
    `,events:{navSelect:xt(),openChange:xt(),init:xt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:o}){e.popUpManager.listen(Lv,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");Bt.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(jv,s=>{n.keepOpenAfterInteraction||U2({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:o,slotNames:s}){function a({emitEvent:h,open:p},$){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&$){const v=o.shadowRoot.querySelector(".dropdown-trigger");if(v&&!$.composedPath().includes(v))return}U2({open:p,callback(v){i({showPopUpResult:v}),h&&e(new t.openChange(v))},host:o,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,l=u==="right"&&r.showPopUpResult?n.ignoreMaxDimensions?E`
                          left: unset;
                      `:E`
                          left: -${r.showPopUpResult.positions.diff.left}px;
                      `:E`
                      left: ${n.popUpOffset?.left||0}px;
                  `,c=r.showPopUpResult&&u==="left"?n.ignoreMaxDimensions?E`
                          right: unset;
                      `:E`
                          right: -${r.showPopUpResult.positions.diff.right}px;
                      `:E`
                      right: ${n.popUpOffset?.right||0}px;
                  `,f=E`
            ${l}
            ${c}
        `,d=r.showPopUpResult?r.showPopUpResult.popDown?n.ignoreMaxDimensions?E`
                          bottom: unset;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${f}
                      `:E`
                          bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${f}
                      `:n.ignoreMaxDimensions?E`
                        top: unset;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${f}
                    `:E`
                        top: -${r.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${f}
                    `:void 0;function m(h){a({emitEvent:!0,open:!r.showPopUpResult},h)}return g`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${gr({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${W("keydown",h=>{!r.showPopUpResult&&h.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},h)})}
                ${W("click",h=>{h.detail===0&&m(h)})}
                ${W("mousedown",h=>{h.button===0&&m(h)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${gr({"right-aligned":u==="right"})}"
                    style=${d}
                >
                    ${kr(!!r.showPopUpResult,g`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),iB={menu:"menu-trigger-menu"},Ri=He()({tagName:"vira-menu-trigger",styles:E`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${be} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{itemActivate:xt(),openChange:xt()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:i}){return g`
            <${be.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||zi.Left,ignoreMaxDimensions:e.ignoreMaxDimensions})}
                class=${gr({open:!!t.showPopUpResult})}
                ${W(be.events.init,o=>{r({navController:o.detail.navController,popUpManager:o.detail.popUpManager})})}
                ${W(be.events.openChange,o=>{!!t.showPopUpResult!=!!o.detail&&n(new i.openChange(o.detail)),r({showPopUpResult:o.detail})})}
                ${W(be.events.navSelect,o=>{const s=o.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);n(new i.itemActivate(IO(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${be.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?g`
                          <${eu.assign({direction:t.showPopUpResult.popDown?Ac.Downwards:Ac.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${be.slotNames.popUp}
                              class=${gr({"full-width-menu":e.horizontalAnchor===zi.Both})}
                          >
                              <${Qa.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${hi(iB.menu)}
                              ></${Qa}>
                          </${eu}>
                      `:Q}
            </${be}>
        `}}),it=He()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>E`
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
            font-weight: ${t["vira-bold-bold-weight"].value};
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
    `,render({inputs:e}){return g`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var ys=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(ys||{});const ye=He()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Xs};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Js["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${Lo};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${on};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${cn["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${pi["vira-interaction-animation-duration"].value},
                background-color
                    ${pi["vira-interaction-animation-duration"].value},
                border-color ${pi["vira-interaction-animation-duration"].value};

            ${Zu({elementBorderSize:2})}
        }

        .empty-text {
            width: 0;
        }

        button ${z} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${z} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?g`
                  <${z.assign({icon:e.icon})}></${z}>
              `:Q,r=e.text?g`
                  <span class="text-template">${e.text}</span>
              `:g`
                  <span class="empty-text">&nbsp;</span>
              `;return g`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var j0=(e=>(e.Error="error",e.Success="success",e))(j0||{});const Ed=He()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":"1px solid #d3d3d3","vira-card-border-radius":"16px","vira-card-padding":"16px"},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${t["vira-card-border-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${ne["vira-form-error-foreground-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${ne["vira-form-success-foreground-color"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),Qn=He()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${on};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${pi["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:xt()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:o}){const s=o.expanded?E`
                  height: ${e.contentHeight}px;
              `:E`
                  height: 0;
              `;return g`
            <button
                class="header-wrapper"
                ${W("click",()=>{n(new i.expandChange(!o.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${A$(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Cd={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},ja=He()({tagName:"vira-dropdown",styles:E`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${Ri} {
            width: 100%;
        }

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            align-self: flex-start;
            will-change: transform;
            transform: rotate(180deg);
            transition: transform
                ${pi["vira-interaction-animation-duration"].value} linear;
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
            ${Xs};
            border: 1px solid ${ne["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${cn["vira-form-input-radius"].value};
            background-color: ${ne["vira-form-background-color"].value};
            color: ${ne["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:xt(),openChange:xt()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:i}){const o=vi(t.selected,c=>t.options.find(f=>f.id===c),F.isTruthy),s=t.icon?g`
                  <${z.assign({icon:t.icon})}
                      ${hi(Cd.icon)}
                  ></${z}>
              `:Q,a=!o.length,u=t.selectionPrefix&&!a?g`
                      <span class="selected-label-prefix" ${hi(Cd.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:Q,l=a?t.placeholder||"":t.isMultiSelect&&o.length>1?`${o.length} Selected`:o[0]?.label||"";return g`
            <${Ri.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||zi.Both,ignoreMaxDimensions:t.ignoreMaxDimensions})}
                ${W(Ri.events.openChange,c=>{i({showPopUpResult:c.detail}),r(new n.openChange(c.detail))})}
                ${W(Ri.events.itemActivate,c=>{r(new n.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${gr({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${hi(Cd.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${gr({"using-placeholder":a})}"
                        title=${dt(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${z.assign({icon:_h})}
                            class="trigger-icon"
                        ></${z}>
                    </span>
                </div>
            </${Ri}>
        `}}),Mo=He()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>E`
        :host {
            color: ${ne["vira-form-error-foreground-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),Si=He()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:xt(),imageError:xt()},styles:({hostClasses:e})=>E`
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
    `,render({inputs:e,state:t,updateState:r,dispatch:n,events:i,slotNames:o}){const s=e.imageUrl,a=t.erroredUrls[s]?g`
                  <slot class="status-wrapper" name=${o.error}>
                      <${z.assign({icon:xc})} class="error"></${z}>
                  </slot>
              `:t.loadedUrls[s]?void 0:g`
                    <slot class="status-wrapper" name=${o.loading}>
                        <${z.assign({icon:Ro})}></${z}>
                    </slot>
                `;return g`
            ${kr(!!a,a)}
            <img
                class=${gr({hidden:!!a})}
                ${W("load",async()=>{e._debugLoadDelay&&await So(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new i.imageLoad)})}
                ${W("error",async u=>{e._debugLoadDelay&&await So(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new i.imageError(u.error))})}
                src=${s}
            />
        `}}),oB=["pagehide","pageshow","popstate"],ei=He()({tagName:"vira-modal",events:{modalClose:xt()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-modal-backdrop-filter":"blur(3px)","vira-modal-subtitle-color":"#7E7E7E","vira-modal-close-button-hover-radius":"8px","vira-modal-close-button-hover-background-color":"#E4E4E4"},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${Hu};
        }

        dialog {
            border: none;
            flex-direction: column;
            border-radius: inherit;
            padding: 0;
            overflow: hidden;
            min-width: inherit;
            min-height: inherit;
            max-width: calc(100dvw - 100px);
            max-height: calc(100dvh - 100px);
            ${ks.modal}

            &[open] {
                display: flex;
            }
            &::backdrop {
                background: ${t["vira-modal-backdrop-color"].value};
                backdrop-filter: ${t["vira-modal-backdrop-filter"].value};
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
                            color: ${t["vira-modal-subtitle-color"].value};
                        }
                    }

                    & button.close {
                        ${on};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${t["vira-modal-close-button-hover-radius"].value};

                        &:hover {
                            background-color: ${t["vira-modal-close-button-hover-background-color"].value};
                        }

                        & ${z} {
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
    `,render({inputs:e,state:t,updateState:r,events:n,dispatch:i,slotNames:o}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),r({previousOpenValue:e.open}),e.open)){const a=oB.map(u=>Xd(u,()=>{i(new n.modalClose)}));r({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),i(new n.modalClose))}return g`
            <dialog
                ${Oo(a=>{r({dialogElement:Sn.instanceOf(a,HTMLDialogElement)})})}
                ${W("close",()=>{s()})}
                ${W("click",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Oo(a=>{r({contentElement:Sn.instanceOf(a,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${o.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?g`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:Q}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${W("click",()=>{t.dialogElement?.close()})}
                        >
                            <${z.assign({icon:Cv})}></${z}>
                        </button>
                    </div>
                    ${e.open?g`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:Q}
                </div>
            </dialog>
        `}}),qn=He()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":({state:e,inputs:t})=>e.isOverflowing||!!t.useSmall},styles:({hostClasses:e})=>E`
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
    `,cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({slotNames:e,updateState:t,inputs:r,host:n,state:i}){return g`
            <div
                class="large"
                ${Oo(o=>{if(!r.automaticallySwitch)return;const s={elementToTest:o,host:n,updateState:t},a=new ResizeObserver(()=>{kd(s)});a.observe(n),a.observe(o);const u=um(o,"slotchange",()=>{kd(s)});kd(s),i.cleanup?.(),t({cleanup(){a.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function kd({elementToTest:e,host:t,updateState:r}){const n=e.scrollWidth>t.clientWidth;r({isOverflowing:n})}const ur=He()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>E`
        :host {
            /* Default width that can easily be overridden because it's applied on the host. */
            width: 100px;
            /* Default height that can easily be overridden because it's applied on the host. */
            height: 10px;
            display: inline-flex;
            align-items: center;
            border-radius: ${e["vira-progress-border-radius"].value};
            color: ${e["vira-progress-foreground-color"].value};
            overflow: hidden;
        }

        .progress-bar {
            background-color: currentColor;
            height: 100%;
        }

        .background-bar {
            background-color: ${e["vira-progress-background-color"].value};
            height: 100%;
            flex-grow: 1;
        }
    `,render({inputs:e,host:t}){const r=e.min||0,i=(e.max||100)-r,o=e.value-r,s=qD(Math.round(o/i*100),{min:0,max:100});return Nv(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),g`
            <div
                class="progress-bar"
                style=${s?E`
                          width: ${s}%;
                      `:E`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function _v(e){return XT({async updateCallback(t,r){if(r&&t in r.cache)return{cache:r.cache,element:r.cache[t],key:t};const n=await e[t]();return{cache:{...r?.cache,[t]:n},element:n,key:t}}})}function Uv(e,{ready:t,loading:r,error:n,key:i}){return i&&e.update(i),e.value instanceof Error?n(e.value):e.value instanceof Promise?r(e.value.then(o=>({[o.key]:o.element}))):t({[e.value.key]:e.value.element})}const Xr=E$(),sn=Xr()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>E`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return g`
            <a
                href=${r}
                ${W("click",n=>{(!e.router||B$(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new pc(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function sB(e,t){return e.entry.entryType===qt.Root?!1:e.entry.entryType===qt.Page||F.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:F.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const oi=Xr()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${xe["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${xe["element-book-nav-hover-background-color"].value};
            color: ${xe["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${xe["element-book-nav-active-background-color"].value};
            color: ${xe["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${sn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${xe["element-book-nav-selected-background-color"].value};
            color: ${xe["element-book-nav-selected-foreground-color"].value};
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

        ${z} {
            display: inline-flex;
            color: ${xe["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!sB(r,e.selectedPath))return;const n=E`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return g`
                <li style=${n}>
                    <${sn.assign({router:e.router,route:{paths:[Ar.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${gr({"title-row":!0,selected:e.selectedPath?F.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${kr(xs(r,qt.ElementExample),g`
                                    <${z.assign({icon:Dv})}></${z}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${sn}>
                </li>
            `});return g`
            <${sn.assign({route:Ns,router:e.router})}>
                <slot name=${Vn.NavHeader}>Book</slot>
            </${sn}>
            <ul>
                ${t}
            </ul>
        `}});async function aB(e){await C0(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await DN(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Xi=Xr()({tagName:"book-error",styles:E`
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
    `,render({inputs:e}){return(F.isArray(e.message)?e.message:[e.message]).map(r=>g`
                <p>${r}</p>
            `)}}),Au=Xr()({tagName:"book-page-controls",events:{controlValueChange:xt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${xe["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Ft} {
            height: 24px;
            max-width: 128px;
        }

        ${z}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],o)=>{if(i.controlType===Z.Hidden)return"";const s=uB(e.currentValues[n],i,a=>{const u=F.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[n]:a}}))});return g`
                    <div class="control-wrapper">
                        ${kr(o===0,g`
                                <${z.assign({icon:Xa})}
                                    class="options-icon"
                                ></${z}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${i.controlType===Z.Custom?g`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function uB(e,t,r){return mo(t,Z.Hidden)?"":mo(t,Z.Checkbox)?g`
            <input
                type="checkbox"
                ?checked=${e}
                ${W("input",n=>{const i=Ao(n,HTMLInputElement);r(i.checked)})}
            />
        `:mo(t,Z.Color)?g`
            <input
                type="color"
                .value=${e}
                ${W("input",n=>{const i=Ao(n,HTMLInputElement);r(i.value)})}
            />
        `:mo(t,Z.Text)?g`
            <${Ft.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${W(Ft.events.valueChange,n=>{r(n.detail)})}
            ></${Ft}>
        `:mo(t,Z.Number)?g`
            <input
                type="number"
                .value=${e}
                ${W("input",n=>{const i=Ao(n,HTMLInputElement);r(i.value)})}
            />
        `:mo(t,Z.Dropdown)?g`
            <select
                .value=${e}
                ${W("input",n=>{const i=Ao(n,HTMLSelectElement);r(i.value)})}
            >
                ${t.options.map(n=>g`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:mo(t,Z.Custom)?t.content:g`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const K2=Xr()({tagName:"book-breadcrumbs",styles:E`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,i)=>{const o=n>=i.length-1,s=i.slice(0,n+1),a=o?"":g`
                      <span class="spacer">&gt;</span>
                  `;return g`
                <${sn.assign({route:{hash:void 0,search:void 0,paths:[Ar.Book,...s]},router:e.router})}>
                    ${r}
                </${sn}>
                ${a}
            `}):g`
                &nbsp;
            `}}),Fd=Xr()({tagName:"book-breadcrumbs-bar",styles:E`
        :host {
            border-bottom: 1px solid
                ${xe["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${xe["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return g`
            ${kr(!!e.currentSearch,g`
                    &nbsp;
                `,g`
                    <${K2.assign({currentRoute:e.currentRoute,router:e.router})}></${K2}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${W("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=n.value;await So({milliseconds:200}),n.value===i&&(n.value?t(new pc({paths:[Ar.Search,encodeURIComponent(n.value)]})):t(new pc(Ns)))})}
            />
        `}}),G2=Xr()({tagName:"book-entry-description",styles:E`
        :host {
            color: ${xe["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${xe["element-book-page-foreground-color"].value};
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>g`
                <p>${t}</p>
            `)}}),Z2=Xr()({tagName:"book-page-wrapper",styles:E`
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

        ${sn} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?g`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:g`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Ar.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?Xb(e.pageNode.entry.errors):void 0;return n&&console.error(n),g`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${sn.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${sn}>
                    ${n?g`
                              <${Xi.assign({message:n.message})}></${Xi}>
                          `:g`
                              <${G2.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${G2}>
                              <${Au.assign({config:e.pageNode.entry.controls,currentValues:fm(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Au}>
                          `}
                </div>
            </div>
        `}}),Ml=Xr()({tagName:"book-element-example-controls",styles:E`
        :host {
            display: flex;
            color: ${xe["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[Ar.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return g`
            <${sn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${sn}>
        `}}),H2=Symbol("unset-internal-state"),Y2=Xr()({tagName:"book-element-example-viewer",state(){return{isUnset:H2}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Xb(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===H2&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return g`
                ${kr(!!t.elementExampleNode.entry.styles,g`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",jt(n)),console.error(n),g`
                <${Xi.assign({message:`${t.elementExampleNode.entry.title} failed: ${jt(n)}`})}></${Xi}>
            `}},options:{allowPolymorphicState:!0}}),J2=Xr()({tagName:"book-element-example-wrapper",styles:E`
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

        ${Ml} {
            color: ${xe["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ml} {
            color: ${xe["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return g`
            <div class="individual-example-wrapper">
                <${Ml.assign(YD(e,["currentPageControls"]))}></${Ml}>
                <${Y2.assign(e)}></${Y2}>
            </div>
        `}}),lB={milliseconds:10};let _a;const Ec=new Map,$o=new Map;function cB(){return _a||(_a=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=Ec.get(r);if(n)if(t.isIntersecting){if(!$o.has(r)){const i=globalThis.setTimeout(()=>{$o.delete(r),n(),_a?.unobserve(r),Ec.delete(r)},Ss(lB,{milliseconds:!0}).milliseconds);$o.set(r,i)}}else{const i=$o.get(r);i&&(clearTimeout(i),$o.delete(r))}}},{rootMargin:"100px"})),_a}function X2(e){const t=$o.get(e);t&&(clearTimeout(t),$o.delete(e)),Ec.delete(e),_a?.unobserve(e)}const Sl=Xr()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:E`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&X2(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:g`
            <div
                class="placeholder"
                ${Oo(n=>{t.placeholderElement&&X2(t.placeholderElement),r({placeholderElement:n}),Ec.set(n,()=>{r({hasRendered:!0})}),cB().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function zv(e,t,r,n){const i=Qd(r,n),o=[];if(i){const s=zv(e,t,i,n);s&&o.push(s)}if(xs(r,qt.Page)&&!e.includes(r)){const s=fm(t,r.fullUrlBreadcrumbs);o.push({config:r.entry.controls,current:s,breadcrumbs:pr(s,()=>r.fullUrlBreadcrumbs)})}return o.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function fB({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:i,originalTree:o}){if(!e.length&&n)return[g`
                No results
            `];const s=F.isLengthAtLeast(e,1)?zv(e,i,e[0],o):void 0,a=s&&Object.values(s.config).length&&F.isLengthAtLeast(e,1)?g`
                  <${Au.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${Au}>
              `:Q,u=eN(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(xs(l,qt.Page))return g`
                    <${Z2.assign({isTopLevel:t,pageNode:l,controls:i,router:r})}
                        class="block-entry"
                    ></${Z2}>
                `;if(xs(l,qt.ElementExample)){const c=fm(i,l.fullUrlBreadcrumbs.slice(0,-1)),f=g`
                    <${J2.assign({elementExampleNode:l,currentPageControls:c,router:r})}></${J2}>
                `;return g`
                    <${Sl.assign({content:f})}
                        class="inline-entry ${gr({"block-entry":l.entry.isVertical})}"
                    ></${Sl}>
                `}else{if(xs(l,qt.Root))return Q;{const c=g`
                    <${Xi.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}></${Xi}>
                `;return g`
                    <${Sl.assign({content:c})}
                        class="block-entry"
                    ></${Sl}>
                `}}});return[a,u]}const cs=Xr()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:E`
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
            margin: 8px;

            &.block-entry {
                display: block;
            }
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${Fd} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${pi["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:xt()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const o=e0(e.currentRoute.paths),s=fB({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return g`
            <${Fd.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${Fd}>

            ${kr(e.showLoading,g`
                    <div
                        ${Oo(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${z.assign({icon:Ro})}></${z}>
                    </div>
                    ${kr(!!n.lastElement,g`
                            ${n.lastElement}
                            <slot name=${Vn.Footer}></slot>
                        `)}
                `,g`
                    <div
                        ${Oo(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${Vn.Footer}></slot>
                `)}
        `}});function dB(e,t,r){const n=Q2(e,t);return n.length?n:(r(Ns),Q2(e,Ns.paths))}function Q2(e,t){return e.filter(r=>sx({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Md=Jo()({tagName:"element-book-app",state(){return{currentRoute:Ns,router:void 0,loading:!0,colors:{config:void 0,theme:P1(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:xt()},styles:E`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${xe["element-book-page-background-color"].value};
            color: ${xe["element-book-page-foreground-color"].value};
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

        ${cs} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${oi} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await ey(e,e0(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:o})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const f=s(c);return!F.jsonEquals(e.currentRoute,f)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(F.isTruthy).join(" - "))}function l(c){if(!a(c))return;const f=s(c);e.router?e.router.setRoute(f):n({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(f.paths))}try{if(t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const v=UN(t.internalRouterConfig.basePath);n({router:v}),v.listen(!0,A=>{n({currentRoute:A})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!F.jsonEquals(c,e.colors.config)){const v=P1(c);n({colors:{config:c,theme:v}}),_x(r,v)}const f=t._debug??!1,d=dx({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:u5(d.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=e0(e.currentRoute.paths),p=(m?MN({flattenedNodes:d.flattenedNodes,searchQuery:m}):void 0)??dB(d.flattenedNodes,e.currentRoute.paths,l);u(p[0]?.entry.title);const $=e.treeBasedControls?.controls;return $?(t._debug&&console.info({currentControls:$}),g`
                <div
                    class="root"
                    ${W(pc,async v=>{const A=v.detail;if(!a(A))return;if(n({loading:!0}),l(A),!(r.shadowRoot.querySelector(oi.tagName)instanceof oi))throw new TypeError(`Failed to find child '${oi.tagName}'`);await ey(r,m,e.currentRoute)})}
                    ${W(Au.events.controlValueChange,v=>{if(!e.treeBasedControls)return;const A=hx($,v.detail.fullUrlBreadcrumbs,v.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:A}})})}
                >
                    <${oi.assign({flattenedNodes:d.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Vn.NavHeader}
                            slot=${Vn.NavHeader}
                        ></slot>
                    </${oi}>
                    <${cs.assign({controls:$,currentNodes:p,currentRoute:e.currentRoute,debug:f,originalTree:d.tree,router:e.router,showLoading:e.loading})}
                        ${W(cs.events.loadingRender,async v=>{await C0();const A=r.shadowRoot.querySelector(cs.tagName);A?A.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${cs.tagName}' for scrolling.`),await C0(),n({loading:!v.detail})})}
                    >
                        <slot
                            name=${Vn.Footer}
                            slot=${Vn.Footer}
                        ></slot>
                    </${cs}>
                </div>
            `):g`
                    <${Xi.assign({message:"Failed to generate page controls."})}></${Xi}>
                `}catch(c){return console.error(c),g`
                <p class="error">${jt(c)}</p>
            `}}});async function ey(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(oi.tagName);if(!(n instanceof oi))throw new TypeError(`Failed to find child '${oi.tagName}'`);await aB(n)}function ty(e){if(typeof e=="string")return mB(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let t=[0,0,0,0,!1,"unknown"];return t[0]=e.r?e.r:e.red?e.red:!1,t[1]=e.g?e.g:e.green?e.green:!1,t[2]=e.b?e.b:e.blue?e.blue:!1,t[3]=e.a?e.a:e.alpha?e.alpha:1,t[4]=!!(t[0]&&t[1]&&t[2]),t[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",t}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}function mB(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let t=!1,n=[0,0,0,0,t,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let a in s)if(e==a){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:function(c){for(let f=0;f<3;f++)n[f]=parseInt(c[f+1],16);return n[3]=1,!0}},l=u.rex.exec(s[a]);return n[4]=t=u.sprig(l),n}}let i={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:function(s){let a=0,u=0,l=10,c=100,f=2.55,d="1";s[23]&&(d=s[23],delete s[23]),n[3]=d.match(/%/g)?parseFloat(d)/c:parseFloat(d);for(let m=1;m<s.length;m++)s[m]&&(a=a||m,u=m);switch(u){case 4:l=16,c=15,n[3]=parseInt(s[u],l)/c;case 3:l=16;for(let m=0;m<3;m++)n[m]=parseInt(s[a+m]+s[a+m],l);break;case 5:l=16;case 9:n[0]=n[1]=n[2]=l==10?parseFloat(s[u]):parseInt(s[u],l);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[u])*f;break;case 8:l=16,c=255,n[3]=parseInt(s[8],l)/c;case 7:l=16;case 11:for(let m=0;m<3;m++)n[m]=l==10?parseFloat(s[a+m]):parseInt(s[a+m],l);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(s[a+m])*f;break;case 18:n[5]=s[15];for(let m=0;m<3;m++)a++,n[m]=s[a].match(/%/g)?parseFloat(s[a])*2.55:parseFloat(s[a])*255;break;case 22:n[5]=s[a];for(let m=0;m<3;m++)a++,n[m]=s[a]?s[a].match(/%/g)?parseFloat(s[a])/c:parseFloat(s[a]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let S=function(N){let I=(N+A/30)%12,te=m*Math.min(h,1-h);return h-te*Math.max(-1,Math.min(I-3,9-I,1))},m,h,p,$,v,A=n[0]%360;if(A<0&&(A+=360),n[5].match(/^hsla?/i))m=n[1],h=n[2],p=0,v=1;else if(n[5].match(/^hwba?/i)){if(p=n[1],$=n[2],p+$>=1){n[0]=n[1]=n[2]=p/(p+$),n[5]="sRGB";break}m=1,h=.5,v=1-p-$}n[0]=Math.round(255*(S(0)*v+p)),n[1]=Math.round(255*(S(8)*v+p)),n[2]=Math.round(255*(S(4)*v+p)),n[5]="sRGB"}break}return!0}},o=i.rex.exec(e);return o?(n[4]=t=i.parsley(o),n):(t=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,t,"parsleyError"])}const gt={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function hB(e,t,r=-1){const n=[0,1.1];if(isNaN(e)||isNaN(t)||Math.min(e,t)<n[0]||Math.max(e,t)>n[1])return 0;let i=0,o=0,s="BoW";return e=e>gt.blkThrs?e:e+Math.pow(gt.blkThrs-e,gt.blkClmp),t=t>gt.blkThrs?t:t+Math.pow(gt.blkThrs-t,gt.blkClmp),Math.abs(t-e)<gt.deltaYmin?0:(t>e?(i=(Math.pow(t,gt.normBG)-Math.pow(e,gt.normTXT))*gt.scaleBoW,o=i<gt.loClip?0:i-gt.loBoWoffset):(s="WoB",i=(Math.pow(t,gt.revBG)-Math.pow(e,gt.revTXT))*gt.scaleWoB,o=i>-.1?0:i+gt.loWoBoffset),r<0?o*100:r==0?Math.round(Math.abs(o)*100)+"<sub>"+s+"</sub>":Number.isInteger(r)?(o*100).toFixed(r):0)}function pB(e,t,r=-1,n=!0){let i=ty(t),o=ty(e);return!(o[3]==""||o[3]==1)&&(o=yB(o,i,n)),hB(ry(o),ry(i),r)}function gB(e,t=2){const r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],o=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(t),0,0,0,0,0,0,0,0,0];s.length;let a=777;e=Math.abs(e);const u=.2,l=e==0?1:e*u|0;let c=0,f=(e-r[l][c])*u;for(c++;c<o;c++)a=r[l][c],a>400?s[c]=a:e<14.5?s[c]=999:e<29.5?s[c]=777:a>24?s[c]=Math.round(a-n[l][c]*f):s[c]=a-(2*n[l][c]*f|0)*.5;return s}function ry(e=[0,0,0]){function t(r){return Math.pow(r/255,gt.mainTRC)}return gt.sRco*t(e[0])+gt.sGco*t(e[1])+gt.sBco*t(e[2])}function yB(e=[0,0,0,1],t=[0,0,0],r=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],i=[0,0,0,1,!0];for(let o=0;o<3;o++)i[o]=t[o]*n+e[o]*e[3],r&&(i[o]=Math.min(Math.round(i[o]),255));return i}const Vv={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};pr(Vv,e=>e);Object.fromEntries(Object.entries(Vv).map(([e,t])=>[t,e]));function Vh({background:e,foreground:t}){const r=KD(Number(pB(t,e)),{digits:1});return{contrast:r,fontSizes:$B(r),contrastLevel:vB(r)}}function bB(e,t){return t.reduce((r,n)=>{const i=Math.abs(Vh({foreground:n,background:e}).contrast);return i>r.contrast?r:{contrast:i,color:n}},{contrast:1/0,color:""}).color}function wB(e,t){const r=F.isArray(e.foreground)?e.foreground:F.isArray(e.background)?e.background:new Error("No color array provided.");if(r instanceof Error)throw r;const n=ny.indexOf(t);return r.reduce((o,s)=>{const a=Vh({foreground:F.isString(e.foreground)?e.foreground:s,background:F.isString(e.background)?e.background:s}),l=ny.indexOf(a.contrastLevel.name)-n;return l>0||o.distance>l?o:{color:s,distance:l}},{distance:0,color:void 0}).color}function $B(e){const t=gB(e).slice(1);return Oc(t,(n,i)=>({key:(i+1)*100,value:n}))}function vB(e){return Sn.isDefined(xf.find(t=>t.min<=Math.abs(e)))}var Me;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(Me||(Me={}));const Wv={[Me.SmallBodyText]:"Small Text",[Me.BodyText]:"Body Text",[Me.NonBodyText]:"Non-body Text",[Me.Header]:"Header",[Me.Placeholder]:"Placeholder",[Me.Decoration]:"Decoration",[Me.Invisible]:"Invisible"},ny=[Me.SmallBodyText,Me.BodyText,Me.NonBodyText,Me.Header,Me.Placeholder,Me.Decoration,Me.Invisible],xf=[{min:90,name:Me.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:Me.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:Me.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:Me.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:Me.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:Me.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:Me.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];Oc(xf,e=>({key:e.min,value:e}));Oc(xf,e=>({key:e.name,value:e}));const qv=["#000000","#ffffff","#000","#fff","white","black"];function Kv(e,t=qv){const r={};return Object.values(e).forEach(n=>{if(t.includes(n.default))return;const i=DB(n);_o(r,i.colorName,()=>[]).push(i)}),r}function DB(e){const t=String(e.name).replace(/^-+/,"").split("-"),r=t.length>2?t.at(-1):void 0,n=Sn.isTruthy(t[0]),i=t.slice(1,r?-1:void 0).join("-");return{suffix:r,prefix:n,colorName:i,definition:e,cssVarName:String(e.name)}}function Gv(e,{mapFrom:t,mapTo:r}){return F.isArray(e)?U0(e.map(n=>{if(t&&F.isKeyOf(n,t))return n;if(r&&F.isKeyOf(n,r)&&r[n]!=null)return r[n];throw new Error(`Unknown font weight: ${String(n)}`)})):Gv(vi(Object.entries(e),([n,i])=>{if(i)return n},F.isTruthy),{mapTo:r,mapFrom:t})}const xB={background:"white",foreground:"black"},AB={[Me.BodyText]:!0,[Me.Header]:!0,[Me.Placeholder]:!0,[Me.Decoration]:!0};function EB(e,{defaultTheme:t=xB,omittedColorValues:r=qv,crossContrastLevels:n=AB}={}){const i=Gv(n,{mapFrom:Wv}),o=Kv(e,r),s=Object.fromEntries(Object.entries(o).flatMap(([a,u])=>{Bt.isLengthAtLeast(u,1);const l=u.map(p=>p.definition.default),c=AD({crossWith:["ahead-background","behind-background","ahead-foreground","behind-foreground","self-light-front","self-light-back"],contrast:i}),f=u[0],d=L2(t.foreground),m=L2(t.background),h=bB("white",l);return vi(c,p=>{const $=[f.prefix,f.colorName,p.crossWith,p.contrast].join("-"),v=p.crossWith==="ahead-background"?{foreground:l,background:m}:p.crossWith==="behind-background"?{foreground:m,background:l}:p.crossWith==="ahead-foreground"?{foreground:l,background:d}:p.crossWith==="behind-foreground"?{foreground:d,background:l}:p.crossWith==="self-light-back"?{foreground:l,background:h}:{foreground:h,background:l},A=wB(v,p.contrast),S=u.find(N=>N.definition.default===A);if(!S){om.error(`No valid '${a}' color cross found for: ${b(p)} with ${b(l)}`);return}return[$,pr(v,(N,I)=>F.isString(I)?I:S.definition.value)]},F.isTruthy)}));return CO(t,s)}const Sd=Jo()({tagName:"theme-vir-contrast-indicator",styles:E`
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

        .${Be(Me.Invisible)} {
            color: red;
        }
        .${Be(Me.Decoration)} {
            color: #ff6600;
        }
        .${Be(Me.Placeholder)} {
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
    `,render({inputs:e}){const t=xf.toReversed().slice(1).map(i=>g`
                    <div
                        class="gauge-level ${gr({active:i.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),r=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return g`
            <div title=${r} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${t}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${Wv[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),Cc=Jo()({tagName:"theme-vir-color-example",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"theme-vir-color-example-no-contrast-tips":({inputs:e,state:t})=>!e.showContrast&&!t.forceShowEverything},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${on};
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
        ${e["theme-vir-color-example-no-contrast-tips"].selector} {
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
            font-family: monospace;
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${Hu};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${Sd} {
            margin-top: 1px;
        }
    `,render({state:e,updateState:t,inputs:r}){const n=["foreground","background"].map(a=>{const u=[r.color[a].name,r.showVarValues||e.forceShowEverything?":":""].filter(F.isTruthy).join(""),l=r.showVarValues||e.forceShowEverything?g`
                          <span>${r.color[a].default}</span>
                      `:Q;return g`
                <p>
                    <span>${u}</span>
                    ${l}
                </p>
            `}),i=r.showVarNames||e.forceShowEverything?g`
                      <div class="css-var-names">${n}</div>
                  `:Q,o=e.previewElement?Vh({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,s=o&&(r.showContrast||e.forceShowEverything)?g`
                      <${Sd.assign({contrast:o,fontWeight:r.fontWeight})}></${Sd}>
                  `:Q;return g`
            <button
                ${W("click",()=>{t({forceShowEverything:!e.forceShowEverything})})}
                ${Oo(a=>{t({previewElement:Sn.instanceOf(a,HTMLElement)})})}
                class="color-preview"
                style=${E`
                    color: ${Be(r.color.foreground.default)};
                    background: ${Be(r.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${E`
                                visibility: ${Be((o?.fontSizes[400]||1/0)>150?"hidden":"visible")};
                                font-weight: ${r.fontWeight};
                                font-size: ${o?o.fontSizes[400]:14}px;
                            `}
                        >
                            Min
                        </span>
                    </span>
                </div>
            </button>
            ${s} ${i}
        `}});function CB({parent:e,title:t,theme:r,hideInverseColors:n,overrides:i,useVerticalLayout:o,prefixGroupByCount:s=0}){const a={"Show Var Names":{controlType:Z.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:Z.Checkbox,initValue:!0}},u=we({parent:e,title:t,controls:a});function l({controls:h,theme:p,themeColorName:$}){const v=F.isKeyOf($,p.colors)?p.colors[$]:void 0,A=F.isKeyOf($,p.inverse)?p.inverse[$]:void 0;if(!v||!A)throw new Error(`No theme color found by name '${$}'`);const S=g`
            <${Cc.assign({color:v,showVarValues:!0,showVarNames:h["Show Var Names"],showContrast:h["Show Contrast Tips"],fontWeight:400})}></${Cc}>
        `;return g`
            <div class="with-inverse">${S}${Q}</div>
        `}function c(h,p){const $=xD(Object.keys(p.colors),v=>s?v.split("-").slice(0,s).join("-"):v);Object.entries($).forEach(([v,A])=>{A&&h({title:v,styles:E`
                        :host {
                            display: flex;
                            flex-direction: column;
                            gap: 4px;
                        }

                        .with-inverse {
                            display: flex;
                            flex-direction: column;
                            gap: 4px;
                        }
                    `,render({controls:S}){return A.map(N=>l({controls:S,theme:p,themeColorName:N}))}})})}const f=["Click a color preview to show CSS var names and values."],d=we({parent:u,title:"Default Theme",descriptionParagraphs:f,useVerticalExamples:o,controls:{copy:{controlType:Z.Custom,content:g`
                    <button
                        ${W("click",async()=>{const h=kO(r,"viraColorPalette");await navigator.clipboard.writeText(h)})}
                    >
                        Copy Code
                    </button>
                `}},defineExamples({defineExample:h}){c(h,r)}}),m=(i||[]).map(h=>we({parent:u,title:h.name,useVerticalExamples:o,descriptionParagraphs:f,defineExamples({defineExample:p}){c(p,h.asTheme)}}));return[u,d,...m]}const kB=[{title:"Black",fontWeight:400,foreground:xn["vira-black"]},{title:"Black",fontWeight:700,foreground:xn["vira-black"]},{title:"White",fontWeight:400,foreground:xn["vira-white"]},{title:"White",fontWeight:700,foreground:xn["vira-white"]},{title:"Black",fontWeight:400,background:xn["vira-black"]},{title:"Black",fontWeight:700,background:xn["vira-black"]},{title:"White",fontWeight:400,background:xn["vira-white"]},{title:"White",fontWeight:700,background:xn["vira-white"]}];function FB({colors:e,parent:t,title:r,includeContrast:n,includeTheme:i,useVerticalTheme:o}){const s=Kv(e),a=we({parent:t,title:r}),u=we({parent:a,title:"Palette",defineExamples({defineExample:m}){Object.entries(s).forEach(([h,p])=>{m({title:h,styles:E`
                            :host {
                                display: flex;
                                flex-direction: column;
                            }

                            .swatch-wrapper {
                                display: flex;
                                gap: 4px;
                                align-items: center;

                                & .swatch {
                                    width: 50px;
                                    height: 50px;
                                }

                                & .color-details {
                                    font-family: monospace;
                                    font-size: 12px;
                                    color: ${xn["vira-grey-50"].value};
                                }

                                & .color-value {
                                    margin-left: 1ch;
                                }
                            }
                        `,render(){return p.map($=>g`
                                    <div class="swatch-wrapper">
                                        <div
                                            class="swatch"
                                            style=${E`
                                                background-color: ${Be($.definition.default)};
                                            `}
                                        ></div>
                                        <p class="color-details">
                                            <span>${$.cssVarName}</span>
                                            <br />
                                            <span class="color-value">
                                                ${$.definition.default}
                                            </span>
                                        </p>
                                    </div>
                                `)}})})}}),l=we({parent:a,title:"Palette Contrast"});function c(m,h){return we({parent:l,title:`${r} ${m}`,defineExamples({defineExample:p}){Object.entries(s).forEach(([$,v])=>{const A=F.isArray(h)?h:h(v);p({title:$,styles:E`
                                :host {
                                    display: flex;
                                    flex-direction: column;
                                    gap: 24px;
                                }

                                p {
                                    ${Hu}
                                }

                                .darkness-level {
                                    text-align: center;
                                    font-size: 12px;
                                    color: ${xn["vira-grey-50"].value};
                                }

                                td {
                                    padding: 4px;
                                    min-width: 170px;
                                }
                            `,render(){const S=v.map(I=>{const te=A.map(le=>g`
                                            <td>
                                                <p class="darkness-level">${I.suffix}</p>
                                                <${Cc.assign({color:{background:le.background||I.definition,foreground:le.foreground||I.definition},showVarValues:!0,showVarNames:!1,showContrast:!0,fontWeight:le.fontWeight})}></${Cc}>
                                            </td>
                                        `);return g`
                                        <tr>${te}</tr>
                                    `}),N=A.map(I=>{const te=I.background?"in back":"in front",le=[I.title,`(${te})`,`(${I.fontWeight})`].join(" ");return g`
                                        <th>${le}</th>
                                    `});return g`
                                    <table cellspacing="0" cellpadding="0">
                                        <thead><tr>${N}</tr></thead>
                                        <tbody>${S}</tbody>
                                    </table>
                                `}})})}})}const f=c("Contrast Black White",kB);function d(m){return c(`Contrast Self ${m}`,h=>h.map(p=>({fontWeight:m,title:p.suffix||"",foreground:p.definition})))}return[a,u,l,f,d(400),d(700),...CB({parent:a,title:"Theme (auto)",theme:EB(e),hideInverseColors:!0,useVerticalLayout:o,prefixGroupByCount:2})].filter(F.isTruthy)}const ut=we({title:"Elements",parent:void 0}),Wh=we({title:"Styles",parent:void 0}),Zv=we({title:"Util",parent:void 0}),MB=we({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:Z.Color,initValue:""},"Fill Color":{controlType:Z.Color,initValue:""},"Stroke Width":{controlType:Z.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(B0).forEach(t=>{e({title:t.name,styles:E`
                    :host(:hover) ${z} {
                        background-color: #f2f2f2;
                    }

                    ${z} {
                        padding: 8px;
                        border-radius: ${cn["vira-form-input-radius"].value};
                    }
                `,render({controls:r}){const n=E`
                        ${D["vira-icon-fill-color"].name}: ${Be(r["Fill Color"]||"inherit")};
                        ${D["vira-icon-stroke-color"].name}: ${Be(r["Stroke Color"]||"inherit")};
                        ${D["vira-icon-stroke-width"].name}: ${Be(r["Stroke Width"]?ou(r["Stroke Width"]):"inherit")};
                    `;return g`
                        <${z.assign({icon:t})} style=${n}></${z}>
                    `}})})}}),SB=FB({colors:xn,parent:Wh,title:"Vira Color",includeContrast:!0,includeTheme:!0}),Hv={async element1(){return await So({seconds:2}),(await Ql(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-gBwJqSfK.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await So({seconds:2}),(await Ql(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-VHFQ5847.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},iy=Jo()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:_v(Hv)}},render({state:e,inputs:t}){return Uv(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(r){return g`
                    <${Mo}>
                        ${Qs("Failed to import element",jt(r))}
                    </${Mo}>
                `},loading(){return g`
                    <${z.assign({icon:Ro})}></${z}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Bt.never("The error element will always error")}})}}),oy=Jo()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:_v(Hv)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),Uv(e.dynamicElements,{error(r){return g`
                    <${Mo}>
                        ${Qs("Failed to import element",jt(r))}
                    </${Mo}>
                `},loading(){return g`
                    <${z.assign({icon:Ro})}></${z}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Bt.never("The error element will always error")}})}}),sy=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],TB=we({parent:Zv,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:E`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${mt.assign({value:String(t.value),options:sy})}
                        ${W(mt.events.valueChange,n=>{const i=Number(n.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);r({value:i})})}
                    ></${mt}>
                    <${iy.assign({numberValue:t.value})}></${iy}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:E`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${mt.assign({value:String(t.value),options:sy})}
                        ${W(mt.events.valueChange,n=>{const i=Number(n.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);r({value:i})})}
                    ></${mt}>
                    <${oy.assign({numberValue:t.value})}></${oy}>
                `}})}}),NB=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:g`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:E`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:E`
            ${Or} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],PB=we({title:Or.tagName,parent:ut,controls:{Selected:{controlType:Z.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:Z.Text,initValue:""}},defineExamples({defineExample:e}){NB.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?g`
                            <${Or.assign(n)}>
                                ${t.customTemplate}
                            </${Or}>
                        `:g`
                            <${Or.assign(n)}></${Or}>
                        `}})})}}),_0=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new Eh({sanitizeRoute(e){return e}})}}],IB=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:zh.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[..._0,{id:"long",label:g`
                        <${Or.assign({selected:!1})}>
                            <div
                                style=${E`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${Or}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:zi.Both,items:[..._0,{id:"long",label:g`
                        <${Or.assign({selected:!1})}>
                            <div
                                style=${E`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${Or}>
                    `}]}}],OB=we({parent:ut,title:Ri.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){IB.forEach(t=>{e({title:t.title,styles:E`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${Ri.assign({items:_0,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${Ri}>
                    `}})})}}),Yv=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],BB=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...Yv,{id:4,label:"link here",route:{route:{paths:["test"]},router:new Eh({sanitizeRoute(e){return e}})}}]}}],RB=we({parent:ut,title:Qa.tagName,defineExamples({defineExample:e}){BB.forEach(t=>{e({title:t.title,render(){return g`
                        <${Qa.assign({isMultiSelect:!1,navController:void 0,items:Yv,selected:[],...t.inputs})}></${Qa}>
                    `}})})}}),Jv=[];nn(Ac).forEach(e=>{nn(zh).forEach(t=>{Jv.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const LB=we({parent:ut,title:eu.tagName,defineExamples({defineExample:e}){Jv.forEach(t=>{e({title:t.title,styles:E`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${eu.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${eu}>
                    `}})})}}),jB=we({parent:ut,title:be.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:E`
                ${be} {
                    ${Js["vira-focus-outline-border-radius"].name}: 0;
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
            `,render(){return g`
                    <${be.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${be.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${be.slotNames.popUp}>Pop up!</div>
                    </${be}>
                `}}),e({title:"long clipped content",styles:E`
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
            `,render(){return g`
                    <${be.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${be.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${be.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${be}>
                `}}),e({title:"long right anchored content",styles:E`
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
            `,render(){return g`
                    <${be.assign({keepOpenAfterInteraction:!0,horizontalAnchor:zi.Right})}>
                        <div slot=${be.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${be.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${be}>
                `}}),e({title:"long left anchored content",styles:E`
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
            `,render(){return g`
                    <${be.assign({keepOpenAfterInteraction:!0,horizontalAnchor:zi.Left})}>
                        <div slot=${be.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${be.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${be}>
                `}}),e({title:"short right anchored content",styles:E`
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
            `,render(){return g`
                    <${be.assign({keepOpenAfterInteraction:!0,horizontalAnchor:zi.Right})}>
                        <div slot=${be.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${be.slotNames.popUp}>not long</div>
                    </${be}>
                `}}),e({title:"ignoreMaxDimensions wide content",styles:E`
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
            `,render(){return g`
                    <p>
                        The container has a fixed width of 300px. With
                        <code>ignoreMaxDimensions: true</code>
                        , the pop-up can exceed the container width.
                    </p>
                    <div class="container">
                        <${be.assign({keepOpenAfterInteraction:!0,z_debug_forceOpenState:!0,ignoreMaxDimensions:!0})}>
                            <div class="trigger" slot=${be.slotNames.trigger}>
                                Trigger
                            </div>
                            <div class="pop-up" slot=${be.slotNames.popUp}>
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
                        </${be}>
                    </div>
                `}})}}),_B=[{title:"menu shadow",styles:ks.menuShadow},{title:"menu shadow reversed",styles:ks.menuShadowReversed},{title:"modal",styles:ks.modal}],UB=we({parent:Wh,title:"Shadows",defineExamples({defineExample:e}){_B.forEach(t=>{e({title:t.title,styles:E`
                    .shadow-block {
                        height: 100px;
                        width: 256px;
                        margin: 32px;
                        ${t.styles}
                        border-radius: 8px;
                        background-color: white;
                    }
                `,render(){return g`
                        <div class="shadow-block"></div>
                    `}})})}}),zB=we({parent:ut,title:it.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:Z.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return g`
                    <${it.assign({text:"Text here",bold:!1})}></${it}>
                `}}),e({title:"Bold",render(){return g`
                    <${it.assign({text:"Text here",bold:!0})}></${it}>
                `}}),e({title:"Dynamic",render({controls:t}){return g`
                    <${it.assign({text:"Text here",bold:t.bolded})}></${it}>
                `}}),e({title:"Resized",styles:E`
                ${it} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return g`
                    <${it.assign({text:"Not Bolded",bold:!1})}></${it}>
                    <${it.assign({text:"Bolded",bold:!0})}></${it}>
                `}}),e({title:"Alignment",styles:E`
                ${it} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return g`
                    <${it.assign({text:"Not Bolded",bold:!1})}></${it}>
                    <${it.assign({text:"Bolded",bold:!0})}></${it}>
                `}}),e({title:"Stylized",styles:E`
                ${it} {
                    text-decoration: underline;
                }
            `,render(){return g`
                    <${it.assign({text:"Not Bolded",bold:!1})}></${it}>
                    <${it.assign({text:"Bolded",bold:!0})}></${it}>
                `}})}}),VB=we({parent:ut,title:ye.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:Z.Color,initValue:ye.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:Z.Color,initValue:ye.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:Z.Color,initValue:ye.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:Z.Color,initValue:ye.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:i}){const o=n??E``;e({title:r,styles:o,render({controls:s}){const a=E`
                        ${ye.cssVars["vira-button-primary-color"].name}: ${Be(s["Primary color"]||"inherit")};
                        ${ye.cssVars["vira-button-secondary-color"].name}: ${Be(s["Secondary color"]||"inherit")};
                        ${ye.cssVars["vira-button-primary-hover-color"].name}: ${Be(s["Hover color"]||"inherit")};
                        ${ye.cssVars["vira-button-primary-active-color"].name}: ${Be(s["Active color"]||"inherit")};
                    `;return g`
                        <${ye.assign({text:"hello",...i})}
                            style=${a}
                        ></${ye}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Xa}}),t({title:"with expanding icon",inputs:{icon:Xa,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:ys.Outline}}),t({title:"only icon",inputs:{icon:Xa,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:E`
                ${ye} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:E`
                ${ye} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:E`
                :host {
                    ${ye.cssVars["vira-button-primary-color"].name}: pink;
                    ${ye.cssVars["vira-button-secondary-color"].name}: purple;
                    ${ye.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${ye.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return g`
                    <${ye.assign({text:"hello"})}></${ye}>
                `}})}}),WB=[{title:"basic"},{title:"success",inputs:{cardState:j0.Success}},{title:"error",inputs:{cardState:j0.Error}},{title:"long",content:g`
            <p
                style=${E`
                    ${Hu}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],qB=we({parent:ut,title:Ed.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){WB.forEach(t=>{e({title:t.title,render(){return g`
                        <${Ed.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${Ed}>
                    `}})})}}),KB=we({parent:ut,title:De.tagName,controls:{Checked:{controlType:Z.Checkbox,initValue:!1},Disabled:{controlType:Z.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${De.assign({value:t.checked})}
                        ${W(De.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${De}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${De.assign({value:t.checked})}
                        ${W(De.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${De}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${De.assign({value:t.checked,hasError:!0})}
                        ${W(De.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${De}>
                `}}),e({title:"disabled unchecked",render(){return g`
                    <${De.assign({value:!1,disabled:!0})}></${De}>
                `}}),e({title:"disabled checked",render(){return g`
                    <${De.assign({value:!0,disabled:!0})}></${De}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return g`
                    <${De.assign({value:t.Checked,disabled:t.Disabled})}></${De}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return g`
                    <${De.assign({value:!0})}></${De}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${De.assign({value:t.checked,label:"label goes here"})}
                        ${W(De.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${De}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${De.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${W(De.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${De}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:E`
                ${De} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${De.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${W(De.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${De}>
                `}})}}),GB=we({title:Qn.tagName,parent:ut,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:E`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>g`
                        <${Qn.assign({expanded:!!r.expandedStates[i]})}
                            ${W(Qn.events.expandChange,o=>{const s=[...r.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${Qn.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${W("click",()=>{const o=[...r.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${kr(!!r.showMoreStates[i],g`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${Qn}>
                    `)}}),e({title:"wider examples",styles:E`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>g`
                        <${Qn.assign({expanded:!!r.expandedStates[i]})}
                            ${W(Qn.events.expandChange,o=>{const s=[...r.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${Qn.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${W("click",()=>{const o=[...r.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${kr(!!r.showMoreStates[i],g`
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
                        </${Qn}>
                    `)}})}}),tu=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],ZB=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...tu,{id:42,label:g`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...tu,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:E`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:E`
            ${ja} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:ln}}],HB=we({title:ja.tagName,parent:ut,controls:{Selected:{controlType:Z.Dropdown,initValue:"",options:["",...tu.map(e=>e.label)]},Prefix:{controlType:Z.Text,initValue:""},"Force State":{controlType:Z.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:Z.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:Z.Dropdown,initValue:"",options:["",...Object.keys(B0)]},Disabled:{controlType:Z.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:Z.Text,initValue:"Select something"}},defineExamples({defineExample:e}){ZB.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:i}){const o={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||tu,selected:i.Selected?[tu.find(s=>s.label===i.Selected)?.id].filter(F.isTruthy):r.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?B0[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return g`
                        <${ja.assign(o)}
                            ${W(ja.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${ja}>
                    `}})})}}),YB=we({parent:ut,title:Mo.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${Mo}>Error Content</${Mo}>
                `}})}}),Td=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],JB=we({parent:ut,title:$r.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:$e.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:$e.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:$e.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:$e.Email,label:"Email Address",value:t.email},password:{type:$e.NewPassword,label:"Password",value:t.password},userRole:{type:$e.Select,label:"Role",options:Td,value:t.userRole,placeholder:"placeholder"},disabledField:{type:$e.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:$e.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return g`
                    <${$r.assign({fields:n})}
                        ${W($r.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonStyle:ys.Outline})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${$r}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:$e.Text,label:"First Name",value:t.firstName},lastName:{type:$e.Text,label:"Last Name",value:t.lastName}};return g`
                    <${$r.assign({fields:n})}
                        ${W($r.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <${Ft.assign({value:"",label:"More stuff"})}></${Ft}>
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonStyle:ys.Outline})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${$r}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${$r} {
                    width: 400px;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:$e.Text,label:"First Name",value:t.firstName},lastName:{type:$e.Text,label:"Last Name",value:t.lastName},subscribe:{type:$e.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:$e.Email,label:"Email Address",value:t.email},password:{type:$e.NewPassword,label:"Password",value:t.password},userRole:{type:$e.Select,label:"Role",options:Td,value:t.userRole}};return g`
                    <${$r.assign({fields:n})}
                        ${W($r.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonStyle:ys.Outline})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${$r}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:$e.Text,label:"First Name",value:t.firstName},lastName:{type:$e.Text,label:"Last Name",value:t.lastName},subscribe:{type:$e.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:$e.Email,label:"Email Address",value:t.email},password:{type:$e.NewPassword,label:"Password",value:t.password},userRole:{type:$e.Select,label:"Role",options:Td,value:t.userRole}};return g`
                    <${$r.assign({fields:n,isDisabled:!0})}
                        ${W($r.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonStyle:ys.Outline})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${$r}>
                `}})}}),XB=we({title:z.tagName,parent:ut,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${z.assign({icon:ln})}></${z}>
                `}}),e({title:"using createColoredIcon",render(){return g`
                    <${z.assign({icon:R2(ln,{"vira-icon-stroke-color":"red"})})}></${z}>
                `}}),e({title:"fit container",styles:E`
                ${z} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return g`
                    <${z.assign({icon:R2(ln,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${z}>
                `}})}}),QB=we({title:Si.tagName,parent:ut,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:E`
                    border-radius: 32px;
                `,loadingSlot:g`
                    <div
                        style=${E`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${z.assign({icon:Ro,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${z}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:E`
                    border-radius: 32px;
                `,errorSlot:g`
                    <div
                        style=${E`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${z.assign({icon:xc,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${z}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:E`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:E`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:E`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:g`
                    <div
                        style=${E`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${z.assign({icon:Ro,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${z}>
                    </div>
                `,errorSlot:g`
                    <div
                        style=${E`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${z.assign({icon:xc,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${z}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:E`
                    ${Si} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||E``}
                    }

                    ${r.allowReload?E`
                              ${Si} {
                                  cursor: pointer;
                              }

                              ${Si}:hover {
                                  border-color: #0055ff;
                              }
                          `:E``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:i}){return g`
                        <${Si.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${W("click",()=>{r.allowReload&&i({imageUrl:`${r.inputs.imageUrl}?di=${Co()}`})})}
                        >
                            ${r.loadingSlot?g`
                                      <div class="slot-wrapper" slot=${Si.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:Q}${r.errorSlot?g`
                                      <div class="slot-wrapper" slot=${Si.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:Q}
                        </${Si}>
                    `}})})}}),eR=we({title:Ft.tagName,parent:ut,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:Z.Color,initValue:ne["vira-form-foreground-color"].default},"Placeholder color":{controlType:Z.Color,initValue:ne["vira-form-placeholder-color"].default},"Border color":{controlType:Z.Color,initValue:ne["vira-form-border-color"].default},"Focus color":{controlType:Z.Color,initValue:Js["vira-focus-outline-color"].default},"Selection color":{controlType:Z.Color,initValue:ne["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:i,inputs:o}){e({title:i,styles:E`
                    ${n||E``}
                `,state(){return{value:o.value}},render({state:s,updateState:a,controls:u}){const l={[String(ne["vira-form-foreground-color"].name)]:u["Text color"],[String(ne["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(ne["vira-form-border-color"].name)]:u["Border color"],[String(Js["vira-focus-outline-color"].name)]:u["Focus color"],[String(ne["vira-form-text-selection-color"].name)]:u["Selection color"]},c=pr(l,(d,m)=>m||"inherit"),f=Object.entries(c).map(([d,m])=>[d,m].join(": ")+";").join(`
`);return g`
                        <${Ft.assign({...o,value:s.value})}
                            style=${f}
                            ${W(Ft.events.valueChange,d=>{a({value:d.detail}),console.info("changed:",d.detail)})}
                        ></${Ft}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:ln}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:E`
                    ${Ft} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:ln}},{title:"taller height",styles:E`
                    ${Ft} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:ln}},{title:"shorter height",styles:E`
                    ${Ft} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:ln}},{title:"max width",styles:E`
                    ${Ft} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:E`
                    ${Ft} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Fs.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Fs.Email,attributePassthrough:{autocomplete:"username"}}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:E`
                    ${Ft} {
                        width: unset;
                    }
                `}].forEach(t)}}),tR=we({title:gs.tagName,parent:ut,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:Z.Color,initValue:""},"Hover color":{controlType:Z.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:i}){const o=E`
                        ${gs.cssVars["vira-link-hover-color"].name}: ${Be(i["Hover color"]||"inherit")};
                        color: ${Be(i["CSS Color"]||"inherit")};
                    `;return g`
                        <${gs.assign(n)} style=${o}>My Link</${gs}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),rR=we({title:ei.tagName,parent:ut,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:r}){return g`
                    <button
                        ${W("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${ei.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${W(ei.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${ei}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:E`
                ${ei} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${ei.cssVars["vira-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:r}){return g`
                    <button
                        ${W("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${ei.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${W(ei.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${ei}>
                `}})}}),Ua=E`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,Nd=g`
    <${qn.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${qn.slotNames.large}>Large</div>
        <div class="small" slot=${qn.slotNames.small}>Small</div>
    </${qn}>
`,bs={max:120,min:25,default:80},ay=He()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":ou(bs.default)},state(){return{intervalId:void 0,increment:1}},styles:({cssVars:e})=>E`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,init({state:e,updateState:t,host:r,cssVars:n}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{const i=Yb.isNumber(jD(Lx({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||bs.default;(i>=bs.max||i<=bs.min)&&t({increment:e.increment*-1}),h5({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:ou(i+e.increment)})},10)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render(){return g`
            <slot></slot>
        `}}),uy=He()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":ou(bs.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:E`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${Ua}

        .large {
            white-space: nowrap;
        }
    `,init({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{t({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render({state:e}){return g`
            <${qn.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${qn.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${qn.slotNames.small}>Small</div>
            </${qn}>
        `}}),nR=we({title:qn.tagName,parent:ut,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:E`
                ${Ua}
            `,render(){return Nd}}),e({title:"overflowing",styles:E`
                ${Ua}

                ${qn} {
                    max-width: 50px;
                }
            `,render(){return Nd}}),e({title:"dynamic size",styles:E`
                ${Ua}

                .wrapper {
                    width: ${bs.max+10}px;
                }
            `,render(){return g`
                    <div class="wrapper">
                        <${ay}>
                            ${Nd}
                        </${ay}>
                    </div>
                `}}),e({title:"dynamic slot",styles:E`
                ${Ua}
            `,render(){return g`
                    <${uy}></${uy}>
                `}})}}),iR=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:E`
            :host {
                ${ur.cssVars["vira-progress-background-color"].name}: red;
                ${ur.cssVars["vira-progress-foreground-color"].name}: black;
                ${ur.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${ur} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:E`
            :host {
                ${ur.cssVars["vira-progress-background-color"].name}: red;
                ${ur.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${ur.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${ur} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:E`
            :host {
                ${ur.cssVars["vira-progress-background-color"].name}: red;
                ${ur.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${ur.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${ur} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],oR=we({parent:ut,title:ur.tagName,defineExamples({defineExample:e}){iR.forEach(t=>{e({title:t.title,styles:E`
                    ${t.styles||E``}
                `,render(){return g`
                        <${ur.assign({value:50,...t.inputs})}></${ur}>
                    `}})})}}),It=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],sR=[{title:"basic",inputs:{options:It}},{title:"with really long option",inputs:{options:[...It,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:It,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:It,disabled:!0}},{title:"error",inputs:{options:It,hasError:!0}},{title:"with icon",inputs:{options:It,icon:ln}},{title:"custom width",inputs:{options:It},styles:E`
            ${mt} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:It,icon:ln},styles:E`
            ${mt} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:It,icon:ln},styles:E`
            ${mt} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:It,label:"Pick an option"}},{title:"with long label",inputs:{options:It,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:It,label:"Pick a really really really really long option"},styles:E`
            ${mt} {
                width: unset;
            }
        `}],aR=we({parent:ut,title:mt.tagName,defineExamples({defineExample:e}){sR.forEach(t=>{e({title:t.title,styles:E`
                    ${t.styles||E``}
                `,state(){return{selected:void 0}},render({state:r,updateState:n}){return g`
                        <${mt.assign({...t.inputs,value:r.selected??t.inputs.value})}
                            ${W(mt.events.valueChange,i=>{n({selected:i.detail})})}
                        ></${mt}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return g`
                    <${mt.assign({options:It,value:It[0]?.value})}></${mt}>
                `}}),e({title:"force update",render(){return g`
                    <${ly}></${ly}>
                `}})}}),ly=He()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const r=It.findIndex(i=>i.value===t.value),n=Sn.isDefined(It[(r+1)%It.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return g`
            <${mt.assign({options:It,value:e.value})}></${mt}>
        `}}),uR=[ut,MB,Wh,Zv],lR=[zB,VB,qB,KB,GB,HB,YB,JB,XB,QB,eR,tR,PB,RB,OB,rR,nR,LB,jB,oR,aR].sort((e,t)=>e.title.localeCompare(t.title)),cR=[...lR,TB,UB,...SB],fR=[...uR,...cR];Jo()({tagName:"vira-book-app",styles:E`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Md} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return g`
            <${Md.assign({internalRouterConfig:{basePath:xh("vira"),useInternalRouter:!0},pages:fR,themeColor:"#33ccff"})}>
                <h1 slot=${Vn.NavHeader}>Vira</h1>
            </${Md}>
        `}});export{Jo as d,g as h};
