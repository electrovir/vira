var Ix=Object.defineProperty;var i=(e,r)=>Ix(e,"name",{value:r,configurable:!0});i(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}i(t,"getFetchOpts");function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}i(n,"processPreload")},"polyfill")();var ct;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(ct||(ct={}));function nd(e,r=t=>t){const t=new Map;return e.filter(n=>{const o=r(n);return t.get(o)?!1:(t.set(o,n),!0)})}i(nd,"removeDuplicates");class oh{static{i(this,"Diff")}diff(r,t,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const a=this.castInput(r,n),s=this.castInput(t,n),l=this.removeEmpty(this.tokenize(a,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(l,u,n,o)}diffWithOptionsObj(r,t,n,o){var a;const s=i(A=>{if(A=this.postProcess(A,n),o){setTimeout(function(){o(A)},0);return}else return A},"done"),l=t.length,u=r.length;let f=1,g=l+u;n.maxEditLength!=null&&(g=Math.min(g,n.maxEditLength));const h=(a=n.timeout)!==null&&a!==void 0?a:1/0,p=Date.now()+h,m=[{oldPos:-1,lastComponent:void 0}];let v=this.extractCommon(m[0],t,r,0,n);if(m[0].oldPos+1>=u&&v+1>=l)return s(this.buildValues(m[0].lastComponent,t,r));let $=-1/0,C=1/0;const E=i(()=>{for(let A=Math.max($,-f);A<=Math.min(C,f);A+=2){let I;const _=m[A-1],H=m[A+1];_&&(m[A-1]=void 0);let ce=!1;if(H){const be=H.oldPos-A;ce=H&&0<=be&&be<l}const Te=_&&_.oldPos+1<u;if(!ce&&!Te){m[A]=void 0;continue}if(!Te||ce&&_.oldPos<H.oldPos?I=this.addToPath(H,!0,!1,0,n):I=this.addToPath(_,!1,!0,1,n),v=this.extractCommon(I,t,r,A,n),I.oldPos+1>=u&&v+1>=l)return s(this.buildValues(I.lastComponent,t,r))||!0;m[A]=I,I.oldPos+1>=u&&(C=Math.min(C,A-1)),v+1>=l&&($=Math.max($,A+1))}f++},"execEditLength");if(o)i(function A(){setTimeout(function(){if(f>g||Date.now()>p)return o(void 0);E()||A()},0)},"exec")();else for(;f<=g&&Date.now()<=p;){const A=E();if(A)return A}}addToPath(r,t,n,o,a){const s=r.lastComponent;return s&&!a.oneChangePerToken&&s.added===t&&s.removed===n?{oldPos:r.oldPos+o,lastComponent:{count:s.count+1,added:t,removed:n,previousComponent:s.previousComponent}}:{oldPos:r.oldPos+o,lastComponent:{count:1,added:t,removed:n,previousComponent:s}}}extractCommon(r,t,n,o,a){const s=t.length,l=n.length;let u=r.oldPos,f=u-o,g=0;for(;f+1<s&&u+1<l&&this.equals(n[u+1],t[f+1],a);)f++,u++,g++,a.oneChangePerToken&&(r.lastComponent={count:1,previousComponent:r.lastComponent,added:!1,removed:!1});return g&&!a.oneChangePerToken&&(r.lastComponent={count:g,previousComponent:r.lastComponent,added:!1,removed:!1}),r.oldPos=u,f}equals(r,t,n){return n.comparator?n.comparator(r,t):r===t||!!n.ignoreCase&&r.toLowerCase()===t.toLowerCase()}removeEmpty(r){const t=[];for(let n=0;n<r.length;n++)r[n]&&t.push(r[n]);return t}castInput(r,t){return r}tokenize(r,t){return Array.from(r)}join(r){return r.join("")}postProcess(r,t){return r}get useLongestToken(){return!1}buildValues(r,t,n){const o=[];let a;for(;r;)o.push(r),a=r.previousComponent,delete r.previousComponent,r=a;o.reverse();const s=o.length;let l=0,u=0,f=0;for(;l<s;l++){const g=o[l];if(g.removed)g.value=this.join(n.slice(f,f+g.count)),f+=g.count;else{if(!g.added&&this.useLongestToken){let h=t.slice(u,u+g.count);h=h.map(function(p,m){const v=n[f+m];return v.length>p.length?v:p}),g.value=this.join(h)}else g.value=this.join(t.slice(u,u+g.count));u+=g.count,g.added||(f+=g.count)}}return o}}function mm(e,r){let t;for(t=0;t<e.length&&t<r.length;t++)if(e[t]!=r[t])return e.slice(0,t);return e.slice(0,t)}i(mm,"longestCommonPrefix");function bm(e,r){let t;if(!e||!r||e[e.length-1]!=r[r.length-1])return"";for(t=0;t<e.length&&t<r.length;t++)if(e[e.length-(t+1)]!=r[r.length-(t+1)])return e.slice(-t);return e.slice(-t)}i(bm,"longestCommonSuffix");function W0(e,r,t){if(e.slice(0,r.length)!=r)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(r)}; this is a bug`);return t+e.slice(r.length)}i(W0,"replacePrefix");function K0(e,r,t){if(!r)return e+t;if(e.slice(-r.length)!=r)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(r)}; this is a bug`);return e.slice(0,-r.length)+t}i(K0,"replaceSuffix");function Ls(e,r){return W0(e,r,"")}i(Ls,"removePrefix$1");function Fu(e,r){return K0(e,r,"")}i(Fu,"removeSuffix$1");function vm(e,r){return r.slice(0,Bx(e,r))}i(vm,"maximumOverlap");function Bx(e,r){let t=0;e.length>r.length&&(t=e.length-r.length);let n=r.length;e.length<r.length&&(n=e.length);const o=Array(n);let a=0;o[0]=0;for(let s=1;s<n;s++){for(r[s]==r[a]?o[s]=o[a]:o[s]=a;a>0&&r[s]!=r[a];)a=o[a];r[s]==r[a]&&a++}a=0;for(let s=t;s<e.length;s++){for(;a>0&&e[s]!=r[a];)a=o[a];e[s]==r[a]&&a++}return a}i(Bx,"overlapCount");function js(e){let r;for(r=e.length-1;r>=0&&e[r].match(/\s/);r--);return e.substring(r+1)}i(js,"trailingWs");function Uo(e){const r=e.match(/^\s*/);return r?r[0]:""}i(Uo,"leadingWs");const hc="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Ox=new RegExp(`[${hc}]+|\\s+|[^${hc}]`,"ug");class Rx extends oh{static{i(this,"WordDiff")}equals(r,t,n){return n.ignoreCase&&(r=r.toLowerCase(),t=t.toLowerCase()),r.trim()===t.trim()}tokenize(r,t={}){let n;if(t.intlSegmenter){const s=t.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const l of Array.from(s.segment(r))){const u=l.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(u)?n[n.length-1]+=u:n.push(u)}}else n=r.match(Ox)||[];const o=[];let a=null;return n.forEach(s=>{/\s/.test(s)?a==null?o.push(s):o.push(o.pop()+s):a!=null&&/\s/.test(a)?o[o.length-1]==a?o.push(o.pop()+s):o.push(a+s):o.push(s),a=s}),o}join(r){return r.map((t,n)=>n==0?t:t.replace(/^\s+/,"")).join("")}postProcess(r,t){if(!r||t.oneChangePerToken)return r;let n=null,o=null,a=null;return r.forEach(s=>{s.added?o=s:s.removed?a=s:((o||a)&&ym(n,a,o,s),n=s,o=null,a=null)}),(o||a)&&ym(n,a,o,null),r}}const Lx=new Rx;function jx(e,r,t){return t?.ignoreWhitespace!=null&&!t.ignoreWhitespace?zx(e,r,t):Lx.diff(e,r,t)}i(jx,"diffWords");function ym(e,r,t,n){if(r&&t){const o=Uo(r.value),a=js(r.value),s=Uo(t.value),l=js(t.value);if(e){const u=mm(o,s);e.value=K0(e.value,s,u),r.value=Ls(r.value,u),t.value=Ls(t.value,u)}if(n){const u=bm(a,l);n.value=W0(n.value,l,u),r.value=Fu(r.value,u),t.value=Fu(t.value,u)}}else if(t){if(e){const o=Uo(t.value);t.value=t.value.substring(o.length)}if(n){const o=Uo(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=Uo(n.value),a=Uo(r.value),s=js(r.value),l=mm(o,a);r.value=Ls(r.value,l);const u=bm(Ls(o,l),s);r.value=Fu(r.value,u),n.value=W0(n.value,o,u),e.value=K0(e.value,o,o.slice(0,o.length-u.length))}else if(n){const o=Uo(n.value),a=js(r.value),s=vm(a,o);r.value=Fu(r.value,s)}else if(e){const o=js(e.value),a=Uo(r.value),s=vm(o,a);r.value=Ls(r.value,s)}}i(ym,"dedupeWhitespaceInChangeObjects");class Ux extends oh{static{i(this,"WordsWithSpaceDiff")}tokenize(r){const t=new RegExp(`(\\r?\\n)|[${hc}]+|[^\\S\\n\\r]+|[^${hc}]`,"ug");return r.match(t)||[]}}const _x=new Ux;function zx(e,r,t){return _x.diff(e,r,t)}i(zx,"diffWordsWithSpace");class qx extends oh{static{i(this,"LineDiff")}constructor(){super(...arguments),this.tokenize=Kx}equals(r,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(r.endsWith(`
`)&&(r=r.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(r,t,n)}}const Vx=new qx;function Wx(e,r,t){return Vx.diff(e,r,t)}i(Wx,"diffLines");function Kx(e,r){r.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const t=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const a=n[o];o%2&&!r.newlineIsToken?t[t.length-1]+=a:t.push(a)}return t}i(Kx,"tokenize$1");function wm(e,r){return ky(e,new Map)}i(wm,"sortObject");function ky(e,r,t){if(e&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object){if(r.has(e))return r.get(e);const n={};return r.set(e,n),Object.entries(e).sort((o,a)=>o[0].localeCompare(a[0])).forEach(([o,a])=>{const s=ky(a,r);n[o]=s}),n}else return e}i(ky,"recursivelySortObject");var Hx=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,Gx=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,Zx=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,yf={Space_Separator:Hx,ID_Start:Gx,ID_Continue:Zx},Cr={isSpaceSeparator(e){return typeof e=="string"&&yf.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||yf.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||yf.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let H0,At,$o,pc,ai,Rn,Jr,ih,pl;var Yx=i(function(r,t){H0=String(r),At="start",$o=[],pc=0,ai=1,Rn=0,Jr=void 0,ih=void 0,pl=void 0;do Jr=Jx(),e4[At]();while(Jr.type!=="eof");return typeof t=="function"?G0({"":pl},"",t):pl},"parse");function G0(e,r,t){const n=e[r];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const a=String(o),s=G0(n,a,t);s===void 0?delete n[a]:Object.defineProperty(n,a,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const a=G0(n,o,t);a===void 0?delete n[o]:Object.defineProperty(n,o,{value:a,writable:!0,enumerable:!0,configurable:!0})}return t.call(e,r,n)}i(G0,"internalize");let he,de,rl,bo,$e;function Jx(){for(he="default",de="",rl=!1,bo=1;;){$e=So();const e=$y[he]();if(e)return e}}i(Jx,"lex");function So(){if(H0[pc])return String.fromCodePoint(H0.codePointAt(pc))}i(So,"peek");function O(){const e=So();return e===`
`?(ai++,Rn=0):e?Rn+=e.length:Rn++,e&&(pc+=e.length),e}i(O,"read");const $y={default(){switch($e){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":O();return;case"/":O(),he="comment";return;case void 0:return O(),ir("eof")}if(Cr.isSpaceSeparator($e)){O();return}return $y[At]()},comment(){switch($e){case"*":O(),he="multiLineComment";return;case"/":O(),he="singleLineComment";return}throw ar(O())},multiLineComment(){switch($e){case"*":O(),he="multiLineCommentAsterisk";return;case void 0:throw ar(O())}O()},multiLineCommentAsterisk(){switch($e){case"*":O();return;case"/":O(),he="default";return;case void 0:throw ar(O())}O(),he="multiLineComment"},singleLineComment(){switch($e){case`
`:case"\r":case"\u2028":case"\u2029":O(),he="default";return;case void 0:return O(),ir("eof")}O()},value(){switch($e){case"{":case"[":return ir("punctuator",O());case"n":return O(),Ai("ull"),ir("null",null);case"t":return O(),Ai("rue"),ir("boolean",!0);case"f":return O(),Ai("alse"),ir("boolean",!1);case"-":case"+":O()==="-"&&(bo=-1),he="sign";return;case".":de=O(),he="decimalPointLeading";return;case"0":de=O(),he="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":de=O(),he="decimalInteger";return;case"I":return O(),Ai("nfinity"),ir("numeric",1/0);case"N":return O(),Ai("aN"),ir("numeric",NaN);case'"':case"'":rl=O()==='"',de="",he="string";return}throw ar(O())},identifierNameStartEscape(){if($e!=="u")throw ar(O());O();const e=Z0();switch(e){case"$":case"_":break;default:if(!Cr.isIdStartChar(e))throw km();break}de+=e,he="identifierName"},identifierName(){switch($e){case"$":case"_":case"‌":case"‍":de+=O();return;case"\\":O(),he="identifierNameEscape";return}if(Cr.isIdContinueChar($e)){de+=O();return}return ir("identifier",de)},identifierNameEscape(){if($e!=="u")throw ar(O());O();const e=Z0();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!Cr.isIdContinueChar(e))throw km();break}de+=e,he="identifierName"},sign(){switch($e){case".":de=O(),he="decimalPointLeading";return;case"0":de=O(),he="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":de=O(),he="decimalInteger";return;case"I":return O(),Ai("nfinity"),ir("numeric",bo*(1/0));case"N":return O(),Ai("aN"),ir("numeric",NaN)}throw ar(O())},zero(){switch($e){case".":de+=O(),he="decimalPoint";return;case"e":case"E":de+=O(),he="decimalExponent";return;case"x":case"X":de+=O(),he="hexadecimal";return}return ir("numeric",bo*0)},decimalInteger(){switch($e){case".":de+=O(),he="decimalPoint";return;case"e":case"E":de+=O(),he="decimalExponent";return}if(Cr.isDigit($e)){de+=O();return}return ir("numeric",bo*Number(de))},decimalPointLeading(){if(Cr.isDigit($e)){de+=O(),he="decimalFraction";return}throw ar(O())},decimalPoint(){switch($e){case"e":case"E":de+=O(),he="decimalExponent";return}if(Cr.isDigit($e)){de+=O(),he="decimalFraction";return}return ir("numeric",bo*Number(de))},decimalFraction(){switch($e){case"e":case"E":de+=O(),he="decimalExponent";return}if(Cr.isDigit($e)){de+=O();return}return ir("numeric",bo*Number(de))},decimalExponent(){switch($e){case"+":case"-":de+=O(),he="decimalExponentSign";return}if(Cr.isDigit($e)){de+=O(),he="decimalExponentInteger";return}throw ar(O())},decimalExponentSign(){if(Cr.isDigit($e)){de+=O(),he="decimalExponentInteger";return}throw ar(O())},decimalExponentInteger(){if(Cr.isDigit($e)){de+=O();return}return ir("numeric",bo*Number(de))},hexadecimal(){if(Cr.isHexDigit($e)){de+=O(),he="hexadecimalInteger";return}throw ar(O())},hexadecimalInteger(){if(Cr.isHexDigit($e)){de+=O();return}return ir("numeric",bo*Number(de))},string(){switch($e){case"\\":O(),de+=Xx();return;case'"':if(rl)return O(),ir("string",de);de+=O();return;case"'":if(!rl)return O(),ir("string",de);de+=O();return;case`
`:case"\r":throw ar(O());case"\u2028":case"\u2029":r4($e);break;case void 0:throw ar(O())}de+=O()},start(){switch($e){case"{":case"[":return ir("punctuator",O())}he="value"},beforePropertyName(){switch($e){case"$":case"_":de=O(),he="identifierName";return;case"\\":O(),he="identifierNameStartEscape";return;case"}":return ir("punctuator",O());case'"':case"'":rl=O()==='"',he="string";return}if(Cr.isIdStartChar($e)){de+=O(),he="identifierName";return}throw ar(O())},afterPropertyName(){if($e===":")return ir("punctuator",O());throw ar(O())},beforePropertyValue(){he="value"},afterPropertyValue(){switch($e){case",":case"}":return ir("punctuator",O())}throw ar(O())},beforeArrayValue(){if($e==="]")return ir("punctuator",O());he="value"},afterArrayValue(){switch($e){case",":case"]":return ir("punctuator",O())}throw ar(O())},end(){throw ar(O())}};function ir(e,r){return{type:e,value:r,line:ai,column:Rn}}i(ir,"newToken");function Ai(e){for(const r of e){if(So()!==r)throw ar(O());O()}}i(Ai,"literal");function Xx(){switch(So()){case"b":return O(),"\b";case"f":return O(),"\f";case"n":return O(),`
`;case"r":return O(),"\r";case"t":return O(),"	";case"v":return O(),"\v";case"0":if(O(),Cr.isDigit(So()))throw ar(O());return"\0";case"x":return O(),Qx();case"u":return O(),Z0();case`
`:case"\u2028":case"\u2029":return O(),"";case"\r":return O(),So()===`
`&&O(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw ar(O());case void 0:throw ar(O())}return O()}i(Xx,"escape");function Qx(){let e="",r=So();if(!Cr.isHexDigit(r)||(e+=O(),r=So(),!Cr.isHexDigit(r)))throw ar(O());return e+=O(),String.fromCodePoint(parseInt(e,16))}i(Qx,"hexEscape");function Z0(){let e="",r=4;for(;r-- >0;){const t=So();if(!Cr.isHexDigit(t))throw ar(O());e+=O()}return String.fromCodePoint(parseInt(e,16))}i(Z0,"unicodeEscape");const e4={start(){if(Jr.type==="eof")throw Fi();wf()},beforePropertyName(){switch(Jr.type){case"identifier":case"string":ih=Jr.value,At="afterPropertyName";return;case"punctuator":Mu();return;case"eof":throw Fi()}},afterPropertyName(){if(Jr.type==="eof")throw Fi();At="beforePropertyValue"},beforePropertyValue(){if(Jr.type==="eof")throw Fi();wf()},beforeArrayValue(){if(Jr.type==="eof")throw Fi();if(Jr.type==="punctuator"&&Jr.value==="]"){Mu();return}wf()},afterPropertyValue(){if(Jr.type==="eof")throw Fi();switch(Jr.value){case",":At="beforePropertyName";return;case"}":Mu()}},afterArrayValue(){if(Jr.type==="eof")throw Fi();switch(Jr.value){case",":At="beforeArrayValue";return;case"]":Mu()}},end(){}};function wf(){let e;switch(Jr.type){case"punctuator":switch(Jr.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Jr.value;break}if(pl===void 0)pl=e;else{const r=$o[$o.length-1];Array.isArray(r)?r.push(e):Object.defineProperty(r,ih,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")$o.push(e),Array.isArray(e)?At="beforeArrayValue":At="beforePropertyName";else{const r=$o[$o.length-1];r==null?At="end":Array.isArray(r)?At="afterArrayValue":At="afterPropertyValue"}}i(wf,"push");function Mu(){$o.pop();const e=$o[$o.length-1];e==null?At="end":Array.isArray(e)?At="afterArrayValue":At="afterPropertyValue"}i(Mu,"pop");function ar(e){return mc(e===void 0?`JSON5: invalid end of input at ${ai}:${Rn}`:`JSON5: invalid character '${xy(e)}' at ${ai}:${Rn}`)}i(ar,"invalidChar");function Fi(){return mc(`JSON5: invalid end of input at ${ai}:${Rn}`)}i(Fi,"invalidEOF");function km(){return Rn-=5,mc(`JSON5: invalid identifier character at ${ai}:${Rn}`)}i(km,"invalidIdentifier");function r4(e){console.warn(`JSON5: '${xy(e)}' in strings is not valid ECMAScript; consider escaping`)}i(r4,"separatorChar");function xy(e){const r={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(r[e])return r[e];if(e<" "){const t=e.charCodeAt(0).toString(16);return"\\x"+("00"+t).substring(t.length)}return e}i(xy,"formatChar");function mc(e){const r=new SyntaxError(e);return r.lineNumber=ai,r.columnNumber=Rn,r}i(mc,"syntaxError");var t4=i(function(r,t,n){const o=[];let a="",s,l,u="",f;if(t!=null&&typeof t=="object"&&!Array.isArray(t)&&(n=t.space,f=t.quote,t=t.replacer),typeof t=="function")l=t;else if(Array.isArray(t)){s=[];for(const $ of t){let C;typeof $=="string"?C=$:(typeof $=="number"||$ instanceof String||$ instanceof Number)&&(C=String($)),C!==void 0&&s.indexOf(C)<0&&s.push(C)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),g("",{"":r});function g($,C){let E=C[$];switch(E!=null&&(typeof E.toJSON5=="function"?E=E.toJSON5($):typeof E.toJSON=="function"&&(E=E.toJSON($))),l&&(E=l.call(C,$,E)),E instanceof Number?E=Number(E):E instanceof String?E=String(E):E instanceof Boolean&&(E=E.valueOf()),E){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof E=="string")return h(E);if(typeof E=="number")return String(E);if(typeof E=="object")return Array.isArray(E)?v(E):p(E)}i(g,"serializeProperty");function h($){const C={"'":.1,'"':.2},E={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let A="";for(let _=0;_<$.length;_++){const H=$[_];switch(H){case"'":case'"':C[H]++,A+=H;continue;case"\0":if(Cr.isDigit($[_+1])){A+="\\x00";continue}}if(E[H]){A+=E[H];continue}if(H<" "){let ce=H.charCodeAt(0).toString(16);A+="\\x"+("00"+ce).substring(ce.length);continue}A+=H}const I=f||Object.keys(C).reduce((_,H)=>C[_]<C[H]?_:H);return A=A.replace(new RegExp(I,"g"),E[I]),I+A+I}i(h,"quoteString");function p($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let C=a;a=a+u;let E=s||Object.keys($),A=[];for(const _ of E){const H=g(_,$);if(H!==void 0){let ce=m(_)+":";u!==""&&(ce+=" "),ce+=H,A.push(ce)}}let I;if(A.length===0)I="{}";else{let _;if(u==="")_=A.join(","),I="{"+_+"}";else{let H=`,
`+a;_=A.join(H),I=`{
`+a+_+`,
`+C+"}"}}return o.pop(),a=C,I}i(p,"serializeObject");function m($){if($.length===0)return h($);const C=String.fromCodePoint($.codePointAt(0));if(!Cr.isIdStartChar(C))return h($);for(let E=C.length;E<$.length;E++)if(!Cr.isIdContinueChar(String.fromCodePoint($.codePointAt(E))))return h($);return $}i(m,"serializeKey");function v($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let C=a;a=a+u;let E=[];for(let I=0;I<$.length;I++){const _=g(String(I),$);E.push(_!==void 0?_:"null")}let A;if(E.length===0)A="[]";else if(u==="")A="["+E.join(",")+"]";else{let I=`,
`+a,_=E.join(I);A=`[
`+a+_+`,
`+C+"]"}return o.pop(),a=C,A}i(v,"serializeArray")},"stringify");const n4={parse:Yx,stringify:t4};var o4=n4;const Dy="__@@augment-vir-undefined-sentinel@@__",i4=new RegExp(`['"]${Dy}['"]`);function x(e,r){if(typeof e=="string")return e;try{return o4.stringify(e,(n,o)=>o===void 0?Dy:typeof o=="bigint"?Number(o):o,r||void 0).split(i4).join("undefined")}catch{return String(e)}}i(x,"stringify");var a4=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Ln;(function(e){e.Node="node",e.Web="web"})(Ln||(Ln={}));function s4(){return a4?Ln.Node:Ln.Web}i(s4,"determineRuntimeEnv");const Cy=s4();function ah(e){return Cy===e}i(ah,"isRuntimeEnv");function Ey(e){return e[Cy]()}i(Ey,"perEnv");function l4(e,r){const t=typeof r=="string"&&typeof e=="string",n=typeof r!="string"||typeof e!="string",o=n?Wx:jx,a=[t?"":`
`,x(r&&typeof r=="object"&&!Array.isArray(r)?wm(r):r,4),`
`].join(""),s=[t?"":`
`,x(e&&typeof e=="object"&&!Array.isArray(e)?wm(e):e,4),`
`].join(""),l=u4(n,o(a,s)),u=ah(Ln.Node);return[[u?Ao.Green:""," +added (unexpected, added in actual)",u?Ao.Red:""," -missing (expected, missing from actual)",u?Ao.Reset:""].join(""),t?`

`:`
`,l].join("")}i(l4,"prettyDiff");var Ao;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(Ao||(Ao={}));var bc;(function(e){e.Added="+",e.Removed="-"})(bc||(bc={}));function u4(e,r){return e?r.flatMap(n=>n.value.split(`
`).map(o=>$m(o,n)).join(`
`)).join(""):r.map(n=>$m(void 0,n)).join("")}i(u4,"addDiffColors");function $m(e,r){if(e!=null&&!e)return"";const t=ah(Ln.Node),n=r.added?bc.Added:r.removed?bc.Removed:e==null?"":" ",o=r.added?Ao.Green:r.removed?Ao.Red:Ao.Reset;return[t?o:"",n,e??r.value,Ao.Reset].join("")}i($m,"addColorToChange");function We(e){let r;try{r=Reflect.ownKeys(e)}catch{}return r??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}i(We,"getObjectTypedKeys");function c4(e){return We(e).filter(r=>isNaN(Number(r)))}i(c4,"getEnumKeys");function Jt(e){return c4(e).map(t=>e[t])}i(Jt,"getEnumValues");const d4=[".",":",";",",","?","!"],f4=new RegExp(`[${d4.join("")}]+$`);function xm(e){return e.replace(f4,"")}i(xm,"removeEndingPunctuation");function tt(e){return e==null||e===""||e==="undefined"||e==="null"?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):x(e)}i(tt,"extractErrorMessage");function sa(...e){const r=e.map(a=>tt(a)).filter(a=>!!xm(a)),t=r[r.length-1]?.endsWith("."),n=r.map(a=>xm(tt(a)));return(n.length<2?n[0]||"":n.join(": "))+(t?".":"")}i(sa,"combineErrorMessages");function Dr(e){return e instanceof Error?e:new Error(tt(e))}i(Dr,"ensureError");function la(e,r){const t=Dr(e),n=sa(r,t.message);try{return t.message=n,t}catch{return new Error(n,{cause:e})}}i(la,"ensureErrorAndPrependMessage");var P;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(P||(P={}));var Z;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(Z||(Z={}));Z.ClientError,Z.ServerError;P.Continue+"",Z.Information,P.SwitchingProtocols+"",Z.Information,P.Processing+"",Z.Information,P.EarlyHints+"",Z.Information,P.Ok+"",Z.Success,P.Created+"",Z.Success,P.Accepted+"",Z.Success,P.NonAuthoritativeInformation+"",Z.Success,P.NoContent+"",Z.Success,P.ResetContent+"",Z.Success,P.PartialContent+"",Z.Success,P.MultiStatus+"",Z.Success,P.AlreadyReported+"",Z.Success,P.ImUsed+"",Z.Success,P.MultipleChoices+"",Z.Redirect,P.MovedPermanently+"",Z.Redirect,P.Found+"",Z.Redirect,P.SeeOther+"",Z.Redirect,P.NotModified+"",Z.Redirect,P.UseProxy+"",Z.Redirect,P.Unused+"",Z.Redirect,P.TemporaryRedirect+"",Z.Redirect,P.PermanentRedirect+"",Z.Redirect,P.BadRequest+"",Z.ClientError,P.Unauthorized+"",Z.ClientError,P.PaymentRequired+"",Z.ClientError,P.Forbidden+"",Z.ClientError,P.NotFound+"",Z.ClientError,P.MethodNotAllowed+"",Z.ClientError,P.NotAcceptable+"",Z.ClientError,P.ProxyAuthenticationRequired+"",Z.ClientError,P.RequestTimeout+"",Z.ClientError,P.Conflict+"",Z.ClientError,P.Gone+"",Z.ClientError,P.LengthRequired+"",Z.ClientError,P.PreconditionFailed+"",Z.ClientError,P.PayloadTooLarge+"",Z.ClientError,P.UriTooLong+"",Z.ClientError,P.UnsupportedMediaType+"",Z.ClientError,P.RangeNotSatisfiable+"",Z.ClientError,P.ExpectationFailed+"",Z.ClientError,P.ImATeapot+"",Z.ClientError,P.MisdirectedRequest+"",Z.ClientError,P.UnprocessableContent+"",Z.ClientError,P.Locked+"",Z.ClientError,P.FailedDependency+"",Z.ClientError,P.TooEarly+"",Z.ClientError,P.UpgradeRequired+"",Z.ClientError,P.PreconditionRequired+"",Z.ClientError,P.TooManyRequests+"",Z.ClientError,P.RequestHeaderFieldsTooLarge+"",Z.ClientError,P.UnavailableForLegalReasons+"",Z.ClientError,P.InternalServerError+"",Z.ServerError,P.NotImplemented+"",Z.ServerError,P.BadGateway+"",Z.ServerError,P.ServiceUnavailable+"",Z.ServerError,P.GatewayTimeout+"",Z.ServerError,P.HttpVersionNotSupported+"",Z.ServerError,P.VariantAlsoNegotiates+"",Z.ServerError,P.InsufficientStorage+"",Z.ServerError,P.LoopDetected+"",Z.ServerError,P.NotExtended+"",Z.ServerError,P.NetworkAuthenticationRequired+"",Z.ServerError;const nc={[Z.Information]:[P.Continue,P.SwitchingProtocols,P.Processing,P.EarlyHints],[Z.Success]:[P.Ok,P.Created,P.Accepted,P.NonAuthoritativeInformation,P.NoContent,P.ResetContent,P.PartialContent,P.MultiStatus,P.AlreadyReported,P.ImUsed],[Z.Redirect]:[P.MultipleChoices,P.MovedPermanently,P.Found,P.SeeOther,P.NotModified,P.UseProxy,P.Unused,P.TemporaryRedirect,P.PermanentRedirect],[Z.ClientError]:[P.BadRequest,P.Unauthorized,P.PaymentRequired,P.Forbidden,P.NotFound,P.MethodNotAllowed,P.NotAcceptable,P.ProxyAuthenticationRequired,P.RequestTimeout,P.Conflict,P.Gone,P.LengthRequired,P.PreconditionFailed,P.PayloadTooLarge,P.UriTooLong,P.UnsupportedMediaType,P.RangeNotSatisfiable,P.ExpectationFailed,P.ImATeapot,P.MisdirectedRequest,P.UnprocessableContent,P.Locked,P.FailedDependency,P.TooEarly,P.UpgradeRequired,P.PreconditionRequired,P.TooManyRequests,P.RequestHeaderFieldsTooLarge,P.UnavailableForLegalReasons],[Z.ServerError]:[P.InternalServerError,P.NotImplemented,P.BadGateway,P.ServiceUnavailable,P.GatewayTimeout,P.HttpVersionNotSupported,P.VariantAlsoNegotiates,P.InsufficientStorage,P.LoopDetected,P.NotExtended,P.NetworkAuthenticationRequired]};function sh({min:e,max:r}){return e>r?{min:r,max:e}:{min:e,max:r}}i(sh,"ensureMinMax");class vc{static{i(this,"DeferredPromise")}promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((r,t)=>{this.resolve=n=>(this.isSettled=!0,r(n)),this.reject=n=>{this.isSettled=!0,t(Dr(n))}})}}class ua extends Error{static{i(this,"LuxonError")}}class g4 extends ua{static{i(this,"InvalidDateTimeError")}constructor(r){super(`Invalid DateTime: ${r.toMessage()}`)}}class h4 extends ua{static{i(this,"InvalidIntervalError")}constructor(r){super(`Invalid Interval: ${r.toMessage()}`)}}class p4 extends ua{static{i(this,"InvalidDurationError")}constructor(r){super(`Invalid Duration: ${r.toMessage()}`)}}class Oa extends ua{static{i(this,"ConflictingSpecificationError")}}class Ay extends ua{static{i(this,"InvalidUnitError")}constructor(r){super(`Invalid unit ${r}`)}}class wt extends ua{static{i(this,"InvalidArgumentError")}}class _o extends ua{static{i(this,"ZoneIsAbstractError")}constructor(){super("Zone is an abstract class")}}const K="numeric",jn="short",en="long",yc={year:K,month:K,day:K},Fy={year:K,month:jn,day:K},m4={year:K,month:jn,day:K,weekday:jn},My={year:K,month:en,day:K},Sy={year:K,month:en,day:K,weekday:en},Ty={hour:K,minute:K},Py={hour:K,minute:K,second:K},Ny={hour:K,minute:K,second:K,timeZoneName:jn},Iy={hour:K,minute:K,second:K,timeZoneName:en},By={hour:K,minute:K,hourCycle:"h23"},Oy={hour:K,minute:K,second:K,hourCycle:"h23"},Ry={hour:K,minute:K,second:K,hourCycle:"h23",timeZoneName:jn},Ly={hour:K,minute:K,second:K,hourCycle:"h23",timeZoneName:en},jy={year:K,month:K,day:K,hour:K,minute:K},Uy={year:K,month:K,day:K,hour:K,minute:K,second:K},_y={year:K,month:jn,day:K,hour:K,minute:K},zy={year:K,month:jn,day:K,hour:K,minute:K,second:K},b4={year:K,month:jn,day:K,weekday:jn,hour:K,minute:K},qy={year:K,month:en,day:K,hour:K,minute:K,timeZoneName:jn},Vy={year:K,month:en,day:K,hour:K,minute:K,second:K,timeZoneName:jn},Wy={year:K,month:en,day:K,weekday:en,hour:K,minute:K,timeZoneName:en},Ky={year:K,month:en,day:K,weekday:en,hour:K,minute:K,second:K,timeZoneName:en};class ru{static{i(this,"Zone")}get type(){throw new _o}get name(){throw new _o}get ianaName(){return this.name}get isUniversal(){throw new _o}offsetName(r,t){throw new _o}formatOffset(r,t){throw new _o}offset(r){throw new _o}equals(r){throw new _o}get isValid(){throw new _o}}let kf=null;class od extends ru{static{i(this,"SystemZone")}static get instance(){return kf===null&&(kf=new od),kf}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(r,{format:t,locale:n}){return n2(r,t,n)}formatOffset(r,t){return ml(this.offset(r),t)}offset(r){return-new Date(r).getTimezoneOffset()}equals(r){return r.type==="system"}get isValid(){return!0}}const Y0=new Map;function v4(e){let r=Y0.get(e);return r===void 0&&(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Y0.set(e,r)),r}i(v4,"makeDTF");const y4={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function w4(e,r){const t=e.format(r).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t),[,o,a,s,l,u,f,g]=n;return[s,o,a,l,u,f,g]}i(w4,"hackyOffset");function k4(e,r){const t=e.formatToParts(r),n=[];for(let o=0;o<t.length;o++){const{type:a,value:s}=t[o],l=y4[a];a==="era"?n[l]=s:ie(l)||(n[l]=parseInt(s,10))}return n}i(k4,"partsOffset");const $f=new Map;class Po extends ru{static{i(this,"IANAZone")}static create(r){let t=$f.get(r);return t===void 0&&$f.set(r,t=new Po(r)),t}static resetCache(){$f.clear(),Y0.clear()}static isValidSpecifier(r){return this.isValidZone(r)}static isValidZone(r){if(!r)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:r}).format(),!0}catch{return!1}}constructor(r){super(),this.zoneName=r,this.valid=Po.isValidZone(r)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(r,{format:t,locale:n}){return n2(r,t,n,this.name)}formatOffset(r,t){return ml(this.offset(r),t)}offset(r){if(!this.valid)return NaN;const t=new Date(r);if(isNaN(t))return NaN;const n=v4(this.name);let[o,a,s,l,u,f,g]=n.formatToParts?k4(n,t):w4(n,t);l==="BC"&&(o=-Math.abs(o)+1);const p=ad({year:o,month:a,day:s,hour:u===24?0:u,minute:f,second:g,millisecond:0});let m=+t;const v=m%1e3;return m-=v>=0?v:1e3+v,(p-m)/(60*1e3)}equals(r){return r.type==="iana"&&r.name===this.name}get isValid(){return this.valid}}let Dm={};function $4(e,r={}){const t=JSON.stringify([e,r]);let n=Dm[t];return n||(n=new Intl.ListFormat(e,r),Dm[t]=n),n}i($4,"getCachedLF");const J0=new Map;function X0(e,r={}){const t=JSON.stringify([e,r]);let n=J0.get(t);return n===void 0&&(n=new Intl.DateTimeFormat(e,r),J0.set(t,n)),n}i(X0,"getCachedDTF");const Q0=new Map;function x4(e,r={}){const t=JSON.stringify([e,r]);let n=Q0.get(t);return n===void 0&&(n=new Intl.NumberFormat(e,r),Q0.set(t,n)),n}i(x4,"getCachedINF");const eg=new Map;function D4(e,r={}){const{base:t,...n}=r,o=JSON.stringify([e,n]);let a=eg.get(o);return a===void 0&&(a=new Intl.RelativeTimeFormat(e,r),eg.set(o,a)),a}i(D4,"getCachedRTF");let tl=null;function C4(){return tl||(tl=new Intl.DateTimeFormat().resolvedOptions().locale,tl)}i(C4,"systemLocale");const rg=new Map;function Hy(e){let r=rg.get(e);return r===void 0&&(r=new Intl.DateTimeFormat(e).resolvedOptions(),rg.set(e,r)),r}i(Hy,"getCachedIntResolvedOptions");const tg=new Map;function E4(e){let r=tg.get(e);if(!r){const t=new Intl.Locale(e);r="getWeekInfo"in t?t.getWeekInfo():t.weekInfo,"minimalDays"in r||(r={...Gy,...r}),tg.set(e,r)}return r}i(E4,"getCachedWeekInfo");function A4(e){const r=e.indexOf("-x-");r!==-1&&(e=e.substring(0,r));const t=e.indexOf("-u-");if(t===-1)return[e];{let n,o;try{n=X0(e).resolvedOptions(),o=e}catch{const u=e.substring(0,t);n=X0(u).resolvedOptions(),o=u}const{numberingSystem:a,calendar:s}=n;return[o,a,s]}}i(A4,"parseLocaleString");function F4(e,r,t){return(t||r)&&(e.includes("-u-")||(e+="-u"),t&&(e+=`-ca-${t}`),r&&(e+=`-nu-${r}`)),e}i(F4,"intlConfigString");function M4(e){const r=[];for(let t=1;t<=12;t++){const n=ae.utc(2009,t,1);r.push(e(n))}return r}i(M4,"mapMonths");function S4(e){const r=[];for(let t=1;t<=7;t++){const n=ae.utc(2016,11,13+t);r.push(e(n))}return r}i(S4,"mapWeekdays");function Su(e,r,t,n){const o=e.listingMode();return o==="error"?null:o==="en"?t(r):n(r)}i(Su,"listStuff");function T4(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Hy(e.locale).numberingSystem==="latn"}i(T4,"supportsFastNumbers");class P4{static{i(this,"PolyNumberFormatter")}constructor(r,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:a,...s}=n;if(!t||Object.keys(s).length>0){const l={useGrouping:!1,...n};n.padTo>0&&(l.minimumIntegerDigits=n.padTo),this.inf=x4(r,l)}}format(r){if(this.inf){const t=this.floor?Math.floor(r):r;return this.inf.format(t)}else{const t=this.floor?Math.floor(r):fh(r,3);return Sr(t,this.padTo)}}}class N4{static{i(this,"PolyDateFormatter")}constructor(r,t,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=r;else if(r.zone.type==="fixed"){const s=-1*(r.offset/60),l=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;r.offset!==0&&Po.create(l).valid?(o=l,this.dt=r):(o="UTC",this.dt=r.offset===0?r:r.setZone("UTC").plus({minutes:r.offset}),this.originalZone=r.zone)}else r.zone.type==="system"?this.dt=r:r.zone.type==="iana"?(this.dt=r,o=r.zone.name):(o="UTC",this.dt=r.setZone("UTC").plus({minutes:r.offset}),this.originalZone=r.zone);const a={...this.opts};a.timeZone=a.timeZone||o,this.dtf=X0(t,a)}format(){return this.originalZone?this.formatToParts().map(({value:r})=>r).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const r=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?r.map(t=>{if(t.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...t,value:n}}else return t}):r}resolvedOptions(){return this.dtf.resolvedOptions()}}class I4{static{i(this,"PolyRelFormatter")}constructor(r,t,n){this.opts={style:"long",...n},!t&&r2()&&(this.rtf=D4(r,n))}format(r,t){return this.rtf?this.rtf.format(r,t):t3(t,r,this.opts.numeric,this.opts.style!=="long")}formatToParts(r,t){return this.rtf?this.rtf.formatToParts(r,t):[]}}const Gy={firstDay:1,minimalDays:4,weekend:[6,7]};class je{static{i(this,"Locale")}static fromOpts(r){return je.create(r.locale,r.numberingSystem,r.outputCalendar,r.weekSettings,r.defaultToEN)}static create(r,t,n,o,a=!1){const s=r||hr.defaultLocale,l=s||(a?"en-US":C4()),u=t||hr.defaultNumberingSystem,f=n||hr.defaultOutputCalendar,g=og(o)||hr.defaultWeekSettings;return new je(l,u,f,g,s)}static resetCache(){tl=null,J0.clear(),Q0.clear(),eg.clear(),rg.clear(),tg.clear()}static fromObject({locale:r,numberingSystem:t,outputCalendar:n,weekSettings:o}={}){return je.create(r,t,n,o)}constructor(r,t,n,o,a){const[s,l,u]=A4(r);this.locale=s,this.numberingSystem=t||l||null,this.outputCalendar=n||u||null,this.weekSettings=o,this.intl=F4(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=T4(this)),this.fastNumbersCached}listingMode(){const r=this.isEnglish(),t=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return r&&t?"en":"intl"}clone(r){return!r||Object.getOwnPropertyNames(r).length===0?this:je.create(r.locale||this.specifiedLocale,r.numberingSystem||this.numberingSystem,r.outputCalendar||this.outputCalendar,og(r.weekSettings)||this.weekSettings,r.defaultToEN||!1)}redefaultToEN(r={}){return this.clone({...r,defaultToEN:!0})}redefaultToSystem(r={}){return this.clone({...r,defaultToEN:!1})}months(r,t=!1){return Su(this,r,a2,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");t&=!n;const o=t?{month:r,day:"numeric"}:{month:r},a=t?"format":"standalone";if(!this.monthsCache[a][r]){const s=n?l=>this.dtFormatter(l,o).format():l=>this.extract(l,o,"month");this.monthsCache[a][r]=M4(s)}return this.monthsCache[a][r]})}weekdays(r,t=!1){return Su(this,r,u2,()=>{const n=t?{weekday:r,year:"numeric",month:"long",day:"numeric"}:{weekday:r},o=t?"format":"standalone";return this.weekdaysCache[o][r]||(this.weekdaysCache[o][r]=S4(a=>this.extract(a,n,"weekday"))),this.weekdaysCache[o][r]})}meridiems(){return Su(this,void 0,()=>c2,()=>{if(!this.meridiemCache){const r={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[ae.utc(2016,11,13,9),ae.utc(2016,11,13,19)].map(t=>this.extract(t,r,"dayperiod"))}return this.meridiemCache})}eras(r){return Su(this,r,d2,()=>{const t={era:r};return this.eraCache[r]||(this.eraCache[r]=[ae.utc(-40,1,1),ae.utc(2017,1,1)].map(n=>this.extract(n,t,"era"))),this.eraCache[r]})}extract(r,t,n){const o=this.dtFormatter(r,t),a=o.formatToParts(),s=a.find(l=>l.type.toLowerCase()===n);return s?s.value:null}numberFormatter(r={}){return new P4(this.intl,r.forceSimple||this.fastNumbers,r)}dtFormatter(r,t={}){return new N4(r,this.intl,t)}relFormatter(r={}){return new I4(this.intl,this.isEnglish(),r)}listFormatter(r={}){return $4(this.intl,r)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Hy(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:t2()?E4(this.locale):Gy}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(r){return this.locale===r.locale&&this.numberingSystem===r.numberingSystem&&this.outputCalendar===r.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let xf=null;class Ft extends ru{static{i(this,"FixedOffsetZone")}static get utcInstance(){return xf===null&&(xf=new Ft(0)),xf}static instance(r){return r===0?Ft.utcInstance:new Ft(r)}static parseSpecifier(r){if(r){const t=r.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new Ft(sd(t[1],t[2]))}return null}constructor(r){super(),this.fixed=r}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${ml(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${ml(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(r,t){return ml(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(r){return r.type==="fixed"&&r.fixed===this.fixed}get isValid(){return!0}}class B4 extends ru{static{i(this,"InvalidZone")}constructor(r){super(),this.zoneName=r}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Zo(e,r){if(ie(e)||e===null)return r;if(e instanceof ru)return e;if(_4(e)){const t=e.toLowerCase();return t==="default"?r:t==="local"||t==="system"?od.instance:t==="utc"||t==="gmt"?Ft.utcInstance:Ft.parseSpecifier(t)||Po.create(e)}else return ri(e)?Ft.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new B4(e)}i(Zo,"normalizeZone");const lh={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Cm={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},O4=lh.hanidec.replace(/[\[|\]]/g,"").split("");function R4(e){let r=parseInt(e,10);if(isNaN(r)){r="";for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(e[t].search(lh.hanidec)!==-1)r+=O4.indexOf(e[t]);else for(const o in Cm){const[a,s]=Cm[o];n>=a&&n<=s&&(r+=n-a)}}return parseInt(r,10)}else return r}i(R4,"parseDigits");const ng=new Map;function L4(){ng.clear()}i(L4,"resetDigitRegexCache");function Pn({numberingSystem:e},r=""){const t=e||"latn";let n=ng.get(t);n===void 0&&(n=new Map,ng.set(t,n));let o=n.get(r);return o===void 0&&(o=new RegExp(`${lh[t]}${r}`),n.set(r,o)),o}i(Pn,"digitRegex");let Em=i(()=>Date.now(),"now"),Am="system",Fm=null,Mm=null,Sm=null,Tm=60,Pm,Nm=null;class hr{static{i(this,"Settings")}static get now(){return Em}static set now(r){Em=r}static set defaultZone(r){Am=r}static get defaultZone(){return Zo(Am,od.instance)}static get defaultLocale(){return Fm}static set defaultLocale(r){Fm=r}static get defaultNumberingSystem(){return Mm}static set defaultNumberingSystem(r){Mm=r}static get defaultOutputCalendar(){return Sm}static set defaultOutputCalendar(r){Sm=r}static get defaultWeekSettings(){return Nm}static set defaultWeekSettings(r){Nm=og(r)}static get twoDigitCutoffYear(){return Tm}static set twoDigitCutoffYear(r){Tm=r%100}static get throwOnInvalid(){return Pm}static set throwOnInvalid(r){Pm=r}static resetCaches(){je.resetCache(),Po.resetCache(),ae.resetCache(),L4()}}class On{static{i(this,"Invalid")}constructor(r,t){this.reason=r,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Zy=[0,31,59,90,120,151,181,212,243,273,304,334],Yy=[0,31,60,91,121,152,182,213,244,274,305,335];function kn(e,r){return new On("unit out of range",`you specified ${r} (of type ${typeof r}) as a ${e}, which is invalid`)}i(kn,"unitOutOfRange");function uh(e,r,t){const n=new Date(Date.UTC(e,r-1,t));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}i(uh,"dayOfWeek");function Jy(e,r,t){return t+(tu(e)?Yy:Zy)[r-1]}i(Jy,"computeOrdinal");function Xy(e,r){const t=tu(e)?Yy:Zy,n=t.findIndex(a=>a<r),o=r-t[n];return{month:n+1,day:o}}i(Xy,"uncomputeOrdinal");function ch(e,r){return(e-r+7)%7+1}i(ch,"isoWeekdayToLocal");function wc(e,r=4,t=1){const{year:n,month:o,day:a}=e,s=Jy(n,o,a),l=ch(uh(n,o,a),t);let u=Math.floor((s-l+14-r)/7),f;return u<1?(f=n-1,u=El(f,r,t)):u>El(n,r,t)?(f=n+1,u=1):f=n,{weekYear:f,weekNumber:u,weekday:l,...ld(e)}}i(wc,"gregorianToWeek");function Im(e,r=4,t=1){const{weekYear:n,weekNumber:o,weekday:a}=e,s=ch(uh(n,1,r),t),l=za(n);let u=o*7+a-s-7+r,f;u<1?(f=n-1,u+=za(f)):u>l?(f=n+1,u-=za(n)):f=n;const{month:g,day:h}=Xy(f,u);return{year:f,month:g,day:h,...ld(e)}}i(Im,"weekToGregorian");function Df(e){const{year:r,month:t,day:n}=e,o=Jy(r,t,n);return{year:r,ordinal:o,...ld(e)}}i(Df,"gregorianToOrdinal");function Bm(e){const{year:r,ordinal:t}=e,{month:n,day:o}=Xy(r,t);return{year:r,month:n,day:o,...ld(e)}}i(Bm,"ordinalToGregorian");function Om(e,r){if(!ie(e.localWeekday)||!ie(e.localWeekNumber)||!ie(e.localWeekYear)){if(!ie(e.weekday)||!ie(e.weekNumber)||!ie(e.weekYear))throw new Oa("Cannot mix locale-based week fields with ISO-based week fields");return ie(e.localWeekday)||(e.weekday=e.localWeekday),ie(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),ie(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:r.getMinDaysInFirstWeek(),startOfWeek:r.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}i(Om,"usesLocalWeekValues");function j4(e,r=4,t=1){const n=id(e.weekYear),o=$n(e.weekNumber,1,El(e.weekYear,r,t)),a=$n(e.weekday,1,7);return n?o?a?!1:kn("weekday",e.weekday):kn("week",e.weekNumber):kn("weekYear",e.weekYear)}i(j4,"hasInvalidWeekData");function U4(e){const r=id(e.year),t=$n(e.ordinal,1,za(e.year));return r?t?!1:kn("ordinal",e.ordinal):kn("year",e.year)}i(U4,"hasInvalidOrdinalData");function Qy(e){const r=id(e.year),t=$n(e.month,1,12),n=$n(e.day,1,kc(e.year,e.month));return r?t?n?!1:kn("day",e.day):kn("month",e.month):kn("year",e.year)}i(Qy,"hasInvalidGregorianData");function e2(e){const{hour:r,minute:t,second:n,millisecond:o}=e,a=$n(r,0,23)||r===24&&t===0&&n===0&&o===0,s=$n(t,0,59),l=$n(n,0,59),u=$n(o,0,999);return a?s?l?u?!1:kn("millisecond",o):kn("second",n):kn("minute",t):kn("hour",r)}i(e2,"hasInvalidTimeData");function ie(e){return typeof e>"u"}i(ie,"isUndefined");function ri(e){return typeof e=="number"}i(ri,"isNumber");function id(e){return typeof e=="number"&&e%1===0}i(id,"isInteger");function _4(e){return typeof e=="string"}i(_4,"isString$1");function z4(e){return Object.prototype.toString.call(e)==="[object Date]"}i(z4,"isDate");function r2(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}i(r2,"hasRelative");function t2(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}i(t2,"hasLocaleWeekInfo");function q4(e){return Array.isArray(e)?e:[e]}i(q4,"maybeArray");function Rm(e,r,t){if(e.length!==0)return e.reduce((n,o)=>{const a=[r(o),o];return n&&t(n[0],a[0])===n[0]?n:a},null)[1]}i(Rm,"bestBy");function V4(e,r){return r.reduce((t,n)=>(t[n]=e[n],t),{})}i(V4,"pick");function Ya(e,r){return Object.prototype.hasOwnProperty.call(e,r)}i(Ya,"hasOwnProperty");function og(e){if(e==null)return null;if(typeof e!="object")throw new wt("Week settings must be an object");if(!$n(e.firstDay,1,7)||!$n(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(r=>!$n(r,1,7)))throw new wt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}i(og,"validateWeekSettings");function $n(e,r,t){return id(e)&&e>=r&&e<=t}i($n,"integerBetween");function W4(e,r){return e-r*Math.floor(e/r)}i(W4,"floorMod");function Sr(e,r=2){const t=e<0;let n;return t?n="-"+(""+-e).padStart(r,"0"):n=(""+e).padStart(r,"0"),n}i(Sr,"padStart");function Wo(e){if(!(ie(e)||e===null||e===""))return parseInt(e,10)}i(Wo,"parseInteger");function Mi(e){if(!(ie(e)||e===null||e===""))return parseFloat(e)}i(Mi,"parseFloating");function dh(e){if(!(ie(e)||e===null||e==="")){const r=parseFloat("0."+e)*1e3;return Math.floor(r)}}i(dh,"parseMillis");function fh(e,r,t="round"){const n=10**r;switch(t){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${t} is out of range`)}}i(fh,"roundTo");function tu(e){return e%4===0&&(e%100!==0||e%400===0)}i(tu,"isLeapYear");function za(e){return tu(e)?366:365}i(za,"daysInYear");function kc(e,r){const t=W4(r-1,12)+1,n=e+(r-t)/12;return t===2?tu(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][t-1]}i(kc,"daysInMonth");function ad(e){let r=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(r=new Date(r),r.setUTCFullYear(e.year,e.month-1,e.day)),+r}i(ad,"objToLocalTS");function Lm(e,r,t){return-ch(uh(e,1,r),t)+r-1}i(Lm,"firstWeekOffset");function El(e,r=4,t=1){const n=Lm(e,r,t),o=Lm(e+1,r,t);return(za(e)-n+o)/7}i(El,"weeksInWeekYear");function ig(e){return e>99?e:e>hr.twoDigitCutoffYear?1900+e:2e3+e}i(ig,"untruncateYear");function n2(e,r,t,n=null){const o=new Date(e),a={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(a.timeZone=n);const s={timeZoneName:r,...a},l=new Intl.DateTimeFormat(t,s).formatToParts(o).find(u=>u.type.toLowerCase()==="timezonename");return l?l.value:null}i(n2,"parseZoneInfo");function sd(e,r){let t=parseInt(e,10);Number.isNaN(t)&&(t=0);const n=parseInt(r,10)||0,o=t<0||Object.is(t,-0)?-n:n;return t*60+o}i(sd,"signedOffset");function o2(e){const r=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(r))throw new wt(`Invalid unit value ${e}`);return r}i(o2,"asNumber");function $c(e,r){const t={};for(const n in e)if(Ya(e,n)){const o=e[n];if(o==null)continue;t[r(n)]=o2(o)}return t}i($c,"normalizeObject");function ml(e,r){const t=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(r){case"short":return`${o}${Sr(t,2)}:${Sr(n,2)}`;case"narrow":return`${o}${t}${n>0?`:${n}`:""}`;case"techie":return`${o}${Sr(t,2)}${Sr(n,2)}`;default:throw new RangeError(`Value format ${r} is out of range for property format`)}}i(ml,"formatOffset");function ld(e){return V4(e,["hour","minute","second","millisecond"])}i(ld,"timeObject");const K4=["January","February","March","April","May","June","July","August","September","October","November","December"],i2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],H4=["J","F","M","A","M","J","J","A","S","O","N","D"];function a2(e){switch(e){case"narrow":return[...H4];case"short":return[...i2];case"long":return[...K4];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}i(a2,"months");const s2=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],l2=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],G4=["M","T","W","T","F","S","S"];function u2(e){switch(e){case"narrow":return[...G4];case"short":return[...l2];case"long":return[...s2];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}i(u2,"weekdays");const c2=["AM","PM"],Z4=["Before Christ","Anno Domini"],Y4=["BC","AD"],J4=["B","A"];function d2(e){switch(e){case"narrow":return[...J4];case"short":return[...Y4];case"long":return[...Z4];default:return null}}i(d2,"eras");function X4(e){return c2[e.hour<12?0:1]}i(X4,"meridiemForDateTime");function Q4(e,r){return u2(r)[e.weekday-1]}i(Q4,"weekdayForDateTime");function e3(e,r){return a2(r)[e.month-1]}i(e3,"monthForDateTime");function r3(e,r){return d2(r)[e.year<0?0:1]}i(r3,"eraForDateTime");function t3(e,r,t="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},a=["hours","minutes","seconds"].indexOf(e)===-1;if(t==="auto"&&a){const h=e==="days";switch(r){case 1:return h?"tomorrow":`next ${o[e][0]}`;case-1:return h?"yesterday":`last ${o[e][0]}`;case 0:return h?"today":`this ${o[e][0]}`}}const s=Object.is(r,-0)||r<0,l=Math.abs(r),u=l===1,f=o[e],g=n?u?f[1]:f[2]||f[1]:u?o[e][0]:e;return s?`${l} ${g} ago`:`in ${l} ${g}`}i(t3,"formatRelativeTime");function jm(e,r){let t="";for(const n of e)n.literal?t+=n.val:t+=r(n.val);return t}i(jm,"stringifyTokens");const n3={D:yc,DD:Fy,DDD:My,DDDD:Sy,t:Ty,tt:Py,ttt:Ny,tttt:Iy,T:By,TT:Oy,TTT:Ry,TTTT:Ly,f:jy,ff:_y,fff:qy,ffff:Wy,F:Uy,FF:zy,FFF:Vy,FFFF:Ky};class $t{static{i(this,"Formatter")}static create(r,t={}){return new $t(r,t)}static parseFormat(r){let t=null,n="",o=!1;const a=[];for(let s=0;s<r.length;s++){const l=r.charAt(s);l==="'"?((n.length>0||o)&&a.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),t=null,n="",o=!o):o||l===t?n+=l:(n.length>0&&a.push({literal:/^\s+$/.test(n),val:n}),n=l,t=l)}return n.length>0&&a.push({literal:o||/^\s+$/.test(n),val:n}),a}static macroTokenToFormatOpts(r){return n3[r]}constructor(r,t){this.opts=t,this.loc=r,this.systemLoc=null}formatWithSystemDefault(r,t){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(r,{...this.opts,...t}).format()}dtFormatter(r,t={}){return this.loc.dtFormatter(r,{...this.opts,...t})}formatDateTime(r,t){return this.dtFormatter(r,t).format()}formatDateTimeParts(r,t){return this.dtFormatter(r,t).formatToParts()}formatInterval(r,t){return this.dtFormatter(r.start,t).dtf.formatRange(r.start.toJSDate(),r.end.toJSDate())}resolvedOptions(r,t){return this.dtFormatter(r,t).resolvedOptions()}num(r,t=0,n=void 0){if(this.opts.forceSimple)return Sr(r,t);const o={...this.opts};return t>0&&(o.padTo=t),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(r)}formatDateTimeFromString(r,t){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",a=i((m,v)=>this.loc.extract(r,m,v),"string"),s=i(m=>r.isOffsetFixed&&r.offset===0&&m.allowZ?"Z":r.isValid?r.zone.formatOffset(r.ts,m.format):"","formatOffset"),l=i(()=>n?X4(r):a({hour:"numeric",hourCycle:"h12"},"dayperiod"),"meridiem"),u=i((m,v)=>n?e3(r,m):a(v?{month:m}:{month:m,day:"numeric"},"month"),"month"),f=i((m,v)=>n?Q4(r,m):a(v?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),"weekday"),g=i(m=>{const v=$t.macroTokenToFormatOpts(m);return v?this.formatWithSystemDefault(r,v):m},"maybeMacro"),h=i(m=>n?r3(r,m):a({era:m},"era"),"era"),p=i(m=>{switch(m){case"S":return this.num(r.millisecond);case"u":case"SSS":return this.num(r.millisecond,3);case"s":return this.num(r.second);case"ss":return this.num(r.second,2);case"uu":return this.num(Math.floor(r.millisecond/10),2);case"uuu":return this.num(Math.floor(r.millisecond/100));case"m":return this.num(r.minute);case"mm":return this.num(r.minute,2);case"h":return this.num(r.hour%12===0?12:r.hour%12);case"hh":return this.num(r.hour%12===0?12:r.hour%12,2);case"H":return this.num(r.hour);case"HH":return this.num(r.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return r.zone.offsetName(r.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return r.zone.offsetName(r.ts,{format:"long",locale:this.loc.locale});case"z":return r.zoneName;case"a":return l();case"d":return o?a({day:"numeric"},"day"):this.num(r.day);case"dd":return o?a({day:"2-digit"},"day"):this.num(r.day,2);case"c":return this.num(r.weekday);case"ccc":return f("short",!0);case"cccc":return f("long",!0);case"ccccc":return f("narrow",!0);case"E":return this.num(r.weekday);case"EEE":return f("short",!1);case"EEEE":return f("long",!1);case"EEEEE":return f("narrow",!1);case"L":return o?a({month:"numeric",day:"numeric"},"month"):this.num(r.month);case"LL":return o?a({month:"2-digit",day:"numeric"},"month"):this.num(r.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return o?a({month:"numeric"},"month"):this.num(r.month);case"MM":return o?a({month:"2-digit"},"month"):this.num(r.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return o?a({year:"numeric"},"year"):this.num(r.year);case"yy":return o?a({year:"2-digit"},"year"):this.num(r.year.toString().slice(-2),2);case"yyyy":return o?a({year:"numeric"},"year"):this.num(r.year,4);case"yyyyyy":return o?a({year:"numeric"},"year"):this.num(r.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(r.weekYear.toString().slice(-2),2);case"kkkk":return this.num(r.weekYear,4);case"W":return this.num(r.weekNumber);case"WW":return this.num(r.weekNumber,2);case"n":return this.num(r.localWeekNumber);case"nn":return this.num(r.localWeekNumber,2);case"ii":return this.num(r.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(r.localWeekYear,4);case"o":return this.num(r.ordinal);case"ooo":return this.num(r.ordinal,3);case"q":return this.num(r.quarter);case"qq":return this.num(r.quarter,2);case"X":return this.num(Math.floor(r.ts/1e3));case"x":return this.num(r.ts);default:return g(m)}},"tokenToString");return jm($t.parseFormat(t),p)}formatDurationFromString(r,t){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=i(g=>{switch(g[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},"tokenToField"),a=i((g,h)=>p=>{const m=o(p);if(m){const v=h.isNegativeDuration&&m!==h.largestUnit?n:1;let $;return this.opts.signMode==="negativeLargestOnly"&&m!==h.largestUnit?$="never":this.opts.signMode==="all"?$="always":$="auto",this.num(g.get(m)*v,p.length,$)}else return p},"tokenToString"),s=$t.parseFormat(t),l=s.reduce((g,{literal:h,val:p})=>h?g:g.concat(p),[]),u=r.shiftTo(...l.map(o).filter(g=>g)),f={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return jm(s,a(u,f))}}const f2=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function bs(...e){const r=e.reduce((t,n)=>t+n.source,"");return RegExp(`^${r}$`)}i(bs,"combineRegexes");function vs(...e){return r=>e.reduce(([t,n,o],a)=>{const[s,l,u]=a(r,o);return[{...t,...s},l||n,u]},[{},null,1]).slice(0,2)}i(vs,"combineExtractors");function ys(e,...r){if(e==null)return[null,null];for(const[t,n]of r){const o=t.exec(e);if(o)return n(o)}return[null,null]}i(ys,"parse$2");function g2(...e){return(r,t)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=Wo(r[t+o]);return[n,null,t+o]}}i(g2,"simpleParse");const h2=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,o3=`(?:${h2.source}?(?:\\[(${f2.source})\\])?)?`,gh=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,p2=RegExp(`${gh.source}${o3}`),hh=RegExp(`(?:[Tt]${p2.source})?`),i3=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,a3=/(\d{4})-?W(\d\d)(?:-?(\d))?/,s3=/(\d{4})-?(\d{3})/,l3=g2("weekYear","weekNumber","weekDay"),u3=g2("year","ordinal"),c3=/(\d{4})-(\d\d)-(\d\d)/,m2=RegExp(`${gh.source} ?(?:${h2.source}|(${f2.source}))?`),d3=RegExp(`(?: ${m2.source})?`);function qa(e,r,t){const n=e[r];return ie(n)?t:Wo(n)}i(qa,"int");function f3(e,r){return[{year:qa(e,r),month:qa(e,r+1,1),day:qa(e,r+2,1)},null,r+3]}i(f3,"extractISOYmd");function ws(e,r){return[{hours:qa(e,r,0),minutes:qa(e,r+1,0),seconds:qa(e,r+2,0),milliseconds:dh(e[r+3])},null,r+4]}i(ws,"extractISOTime");function nu(e,r){const t=!e[r]&&!e[r+1],n=sd(e[r+1],e[r+2]),o=t?null:Ft.instance(n);return[{},o,r+3]}i(nu,"extractISOOffset");function ou(e,r){const t=e[r]?Po.create(e[r]):null;return[{},t,r+1]}i(ou,"extractIANAZone");const g3=RegExp(`^T?${gh.source}$`),h3=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function p3(e){const[r,t,n,o,a,s,l,u,f]=e,g=r[0]==="-",h=u&&u[0]==="-",p=i((m,v=!1)=>m!==void 0&&(v||m&&g)?-m:m,"maybeNegate");return[{years:p(Mi(t)),months:p(Mi(n)),weeks:p(Mi(o)),days:p(Mi(a)),hours:p(Mi(s)),minutes:p(Mi(l)),seconds:p(Mi(u),u==="-0"),milliseconds:p(dh(f),h)}]}i(p3,"extractISODuration");const m3={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ph(e,r,t,n,o,a,s){const l={year:r.length===2?ig(Wo(r)):Wo(r),month:i2.indexOf(t)+1,day:Wo(n),hour:Wo(o),minute:Wo(a)};return s&&(l.second=Wo(s)),e&&(l.weekday=e.length>3?s2.indexOf(e)+1:l2.indexOf(e)+1),l}i(ph,"fromStrings");const b3=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function v3(e){const[,r,t,n,o,a,s,l,u,f,g,h]=e,p=ph(r,o,n,t,a,s,l);let m;return u?m=m3[u]:f?m=0:m=sd(g,h),[p,new Ft(m)]}i(v3,"extractRFC2822");function y3(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}i(y3,"preprocessRFC2822");const w3=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,k3=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,$3=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Um(e){const[,r,t,n,o,a,s,l]=e;return[ph(r,o,n,t,a,s,l),Ft.utcInstance]}i(Um,"extractRFC1123Or850");function x3(e){const[,r,t,n,o,a,s,l]=e;return[ph(r,l,t,n,o,a,s),Ft.utcInstance]}i(x3,"extractASCII");const D3=bs(i3,hh),C3=bs(a3,hh),E3=bs(s3,hh),A3=bs(p2),b2=vs(f3,ws,nu,ou),F3=vs(l3,ws,nu,ou),M3=vs(u3,ws,nu,ou),S3=vs(ws,nu,ou);function T3(e){return ys(e,[D3,b2],[C3,F3],[E3,M3],[A3,S3])}i(T3,"parseISODate");function P3(e){return ys(y3(e),[b3,v3])}i(P3,"parseRFC2822Date");function N3(e){return ys(e,[w3,Um],[k3,Um],[$3,x3])}i(N3,"parseHTTPDate");function I3(e){return ys(e,[h3,p3])}i(I3,"parseISODuration");const B3=vs(ws);function O3(e){return ys(e,[g3,B3])}i(O3,"parseISOTimeOnly");const R3=bs(c3,d3),L3=bs(m2),j3=vs(ws,nu,ou);function U3(e){return ys(e,[R3,b2],[L3,j3])}i(U3,"parseSQL");const _m="Invalid Duration",v2={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},_3={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...v2},mn=146097/400,Ca=146097/4800,z3={years:{quarters:4,months:12,weeks:mn/7,days:mn,hours:mn*24,minutes:mn*24*60,seconds:mn*24*60*60,milliseconds:mn*24*60*60*1e3},quarters:{months:3,weeks:mn/28,days:mn/4,hours:mn*24/4,minutes:mn*24*60/4,seconds:mn*24*60*60/4,milliseconds:mn*24*60*60*1e3/4},months:{weeks:Ca/7,days:Ca,hours:Ca*24,minutes:Ca*24*60,seconds:Ca*24*60*60,milliseconds:Ca*24*60*60*1e3},...v2},ji=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],q3=ji.slice(0).reverse();function po(e,r,t=!1){const n={values:t?r.values:{...e.values,...r.values||{}},loc:e.loc.clone(r.loc),conversionAccuracy:r.conversionAccuracy||e.conversionAccuracy,matrix:r.matrix||e.matrix};return new Ce(n)}i(po,"clone$1");function y2(e,r){let t=r.milliseconds??0;for(const n of q3.slice(1))r[n]&&(t+=r[n]*e[n].milliseconds);return t}i(y2,"durationToMillis");function zm(e,r){const t=y2(e,r)<0?-1:1;ji.reduceRight((n,o)=>{if(ie(r[o]))return n;if(n){const a=r[n]*t,s=e[o][n],l=Math.floor(a/s);r[o]+=l*t,r[n]-=l*s*t}return o},null),ji.reduce((n,o)=>{if(ie(r[o]))return n;if(n){const a=r[n]%1;r[n]-=a,r[o]+=a*e[n][o]}return o},null)}i(zm,"normalizeValues");function qm(e){const r={};for(const[t,n]of Object.entries(e))n!==0&&(r[t]=n);return r}i(qm,"removeZeroes");class Ce{static{i(this,"Duration")}constructor(r){const t=r.conversionAccuracy==="longterm"||!1;let n=t?z3:_3;r.matrix&&(n=r.matrix),this.values=r.values,this.loc=r.loc||je.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=r.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(r,t){return Ce.fromObject({milliseconds:r},t)}static fromObject(r,t={}){if(r==null||typeof r!="object")throw new wt(`Duration.fromObject: argument expected to be an object, got ${r===null?"null":typeof r}`);return new Ce({values:$c(r,Ce.normalizeUnit),loc:je.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(r){if(ri(r))return Ce.fromMillis(r);if(Ce.isDuration(r))return r;if(typeof r=="object")return Ce.fromObject(r);throw new wt(`Unknown duration argument ${r} of type ${typeof r}`)}static fromISO(r,t){const[n]=I3(r);return n?Ce.fromObject(n,t):Ce.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static fromISOTime(r,t){const[n]=O3(r);return n?Ce.fromObject(n,t):Ce.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static invalid(r,t=null){if(!r)throw new wt("need to specify a reason the Duration is invalid");const n=r instanceof On?r:new On(r,t);if(hr.throwOnInvalid)throw new p4(n);return new Ce({invalid:n})}static normalizeUnit(r){const t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[r&&r.toLowerCase()];if(!t)throw new Ay(r);return t}static isDuration(r){return r&&r.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(r,t={}){const n={...t,floor:t.round!==!1&&t.floor!==!1};return this.isValid?$t.create(this.loc,n).formatDurationFromString(this,r):_m}toHuman(r={}){if(!this.isValid)return _m;const t=r.showZeros!==!1,n=ji.map(o=>{const a=this.values[o];return ie(a)||a===0&&!t?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...r,unit:o.slice(0,-1)}).format(a)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:r.listStyle||"narrow",...r}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let r="P";return this.years!==0&&(r+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(r+=this.months+this.quarters*3+"M"),this.weeks!==0&&(r+=this.weeks+"W"),this.days!==0&&(r+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(r+="T"),this.hours!==0&&(r+=this.hours+"H"),this.minutes!==0&&(r+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(r+=fh(this.seconds+this.milliseconds/1e3,3)+"S"),r==="P"&&(r+="T0S"),r}toISOTime(r={}){if(!this.isValid)return null;const t=this.toMillis();return t<0||t>=864e5?null:(r={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...r,includeOffset:!1},ae.fromMillis(t,{zone:"UTC"}).toISOTime(r))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?y2(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(r){if(!this.isValid)return this;const t=Ce.fromDurationLike(r),n={};for(const o of ji)(Ya(t.values,o)||Ya(this.values,o))&&(n[o]=t.get(o)+this.get(o));return po(this,{values:n},!0)}minus(r){if(!this.isValid)return this;const t=Ce.fromDurationLike(r);return this.plus(t.negate())}mapUnits(r){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=o2(r(this.values[n],n));return po(this,{values:t},!0)}get(r){return this[Ce.normalizeUnit(r)]}set(r){if(!this.isValid)return this;const t={...this.values,...$c(r,Ce.normalizeUnit)};return po(this,{values:t})}reconfigure({locale:r,numberingSystem:t,conversionAccuracy:n,matrix:o}={}){const s={loc:this.loc.clone({locale:r,numberingSystem:t}),matrix:o,conversionAccuracy:n};return po(this,s)}as(r){return this.isValid?this.shiftTo(r).get(r):NaN}normalize(){if(!this.isValid)return this;const r=this.toObject();return zm(this.matrix,r),po(this,{values:r},!0)}rescale(){if(!this.isValid)return this;const r=qm(this.normalize().shiftToAll().toObject());return po(this,{values:r},!0)}shiftTo(...r){if(!this.isValid)return this;if(r.length===0)return this;r=r.map(s=>Ce.normalizeUnit(s));const t={},n={},o=this.toObject();let a;for(const s of ji)if(r.indexOf(s)>=0){a=s;let l=0;for(const f in n)l+=this.matrix[f][s]*n[f],n[f]=0;ri(o[s])&&(l+=o[s]);const u=Math.trunc(l);t[s]=u,n[s]=(l*1e3-u*1e3)/1e3}else ri(o[s])&&(n[s]=o[s]);for(const s in n)n[s]!==0&&(t[a]+=s===a?n[s]:n[s]/this.matrix[a][s]);return zm(this.matrix,t),po(this,{values:t},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const r={};for(const t of Object.keys(this.values))r[t]=this.values[t]===0?0:-this.values[t];return po(this,{values:r},!0)}removeZeros(){if(!this.isValid)return this;const r=qm(this.values);return po(this,{values:r},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(r){if(!this.isValid||!r.isValid||!this.loc.equals(r.loc))return!1;function t(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}i(t,"eq");for(const n of ji)if(!t(this.values[n],r.values[n]))return!1;return!0}}const Ea="Invalid Interval";function V3(e,r){return!e||!e.isValid?$r.invalid("missing or invalid start"):!r||!r.isValid?$r.invalid("missing or invalid end"):r<e?$r.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${r.toISO()}`):null}i(V3,"validateStartEnd");class $r{static{i(this,"Interval")}constructor(r){this.s=r.start,this.e=r.end,this.invalid=r.invalid||null,this.isLuxonInterval=!0}static invalid(r,t=null){if(!r)throw new wt("need to specify a reason the Interval is invalid");const n=r instanceof On?r:new On(r,t);if(hr.throwOnInvalid)throw new h4(n);return new $r({invalid:n})}static fromDateTimes(r,t){const n=Us(r),o=Us(t),a=V3(n,o);return a??new $r({start:n,end:o})}static after(r,t){const n=Ce.fromDurationLike(t),o=Us(r);return $r.fromDateTimes(o,o.plus(n))}static before(r,t){const n=Ce.fromDurationLike(t),o=Us(r);return $r.fromDateTimes(o.minus(n),o)}static fromISO(r,t){const[n,o]=(r||"").split("/",2);if(n&&o){let a,s;try{a=ae.fromISO(n,t),s=a.isValid}catch{s=!1}let l,u;try{l=ae.fromISO(o,t),u=l.isValid}catch{u=!1}if(s&&u)return $r.fromDateTimes(a,l);if(s){const f=Ce.fromISO(o,t);if(f.isValid)return $r.after(a,f)}else if(u){const f=Ce.fromISO(n,t);if(f.isValid)return $r.before(l,f)}}return $r.invalid("unparsable",`the input "${r}" can't be parsed as ISO 8601`)}static isInterval(r){return r&&r.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(r="milliseconds"){return this.isValid?this.toDuration(r).get(r):NaN}count(r="milliseconds",t){if(!this.isValid)return NaN;const n=this.start.startOf(r,t);let o;return t?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(r,t),Math.floor(o.diff(n,r).get(r))+(o.valueOf()!==this.end.valueOf())}hasSame(r){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,r):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(r){return this.isValid?this.s>r:!1}isBefore(r){return this.isValid?this.e<=r:!1}contains(r){return this.isValid?this.s<=r&&this.e>r:!1}set({start:r,end:t}={}){return this.isValid?$r.fromDateTimes(r||this.s,t||this.e):this}splitAt(...r){if(!this.isValid)return[];const t=r.map(Us).filter(s=>this.contains(s)).sort((s,l)=>s.toMillis()-l.toMillis()),n=[];let{s:o}=this,a=0;for(;o<this.e;){const s=t[a]||this.e,l=+s>+this.e?this.e:s;n.push($r.fromDateTimes(o,l)),o=l,a+=1}return n}splitBy(r){const t=Ce.fromDurationLike(r);if(!this.isValid||!t.isValid||t.as("milliseconds")===0)return[];let{s:n}=this,o=1,a;const s=[];for(;n<this.e;){const l=this.start.plus(t.mapUnits(u=>u*o));a=+l>+this.e?this.e:l,s.push($r.fromDateTimes(n,a)),n=a,o+=1}return s}divideEqually(r){return this.isValid?this.splitBy(this.length()/r).slice(0,r):[]}overlaps(r){return this.e>r.s&&this.s<r.e}abutsStart(r){return this.isValid?+this.e==+r.s:!1}abutsEnd(r){return this.isValid?+r.e==+this.s:!1}engulfs(r){return this.isValid?this.s<=r.s&&this.e>=r.e:!1}equals(r){return!this.isValid||!r.isValid?!1:this.s.equals(r.s)&&this.e.equals(r.e)}intersection(r){if(!this.isValid)return this;const t=this.s>r.s?this.s:r.s,n=this.e<r.e?this.e:r.e;return t>=n?null:$r.fromDateTimes(t,n)}union(r){if(!this.isValid)return this;const t=this.s<r.s?this.s:r.s,n=this.e>r.e?this.e:r.e;return $r.fromDateTimes(t,n)}static merge(r){const[t,n]=r.sort((o,a)=>o.s-a.s).reduce(([o,a],s)=>a?a.overlaps(s)||a.abutsStart(s)?[o,a.union(s)]:[o.concat([a]),s]:[o,s],[[],null]);return n&&t.push(n),t}static xor(r){let t=null,n=0;const o=[],a=r.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...a),l=s.sort((u,f)=>u.time-f.time);for(const u of l)n+=u.type==="s"?1:-1,n===1?t=u.time:(t&&+t!=+u.time&&o.push($r.fromDateTimes(t,u.time)),t=null);return $r.merge(o)}difference(...r){return $r.xor([this].concat(r)).map(t=>this.intersection(t)).filter(t=>t&&!t.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ea}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(r=yc,t={}){return this.isValid?$t.create(this.s.loc.clone(t),r).formatInterval(this):Ea}toISO(r){return this.isValid?`${this.s.toISO(r)}/${this.e.toISO(r)}`:Ea}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ea}toISOTime(r){return this.isValid?`${this.s.toISOTime(r)}/${this.e.toISOTime(r)}`:Ea}toFormat(r,{separator:t=" – "}={}){return this.isValid?`${this.s.toFormat(r)}${t}${this.e.toFormat(r)}`:Ea}toDuration(r,t){return this.isValid?this.e.diff(this.s,r,t):Ce.invalid(this.invalidReason)}mapEndpoints(r){return $r.fromDateTimes(r(this.s),r(this.e))}}class Tu{static{i(this,"Info")}static hasDST(r=hr.defaultZone){const t=ae.now().setZone(r).set({month:12});return!r.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(r){return Po.isValidZone(r)}static normalizeZone(r){return Zo(r,hr.defaultZone)}static getStartOfWeek({locale:r=null,locObj:t=null}={}){return(t||je.create(r)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:r=null,locObj:t=null}={}){return(t||je.create(r)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:r=null,locObj:t=null}={}){return(t||je.create(r)).getWeekendDays().slice()}static months(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null,outputCalendar:a="gregory"}={}){return(o||je.create(t,n,a)).months(r)}static monthsFormat(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null,outputCalendar:a="gregory"}={}){return(o||je.create(t,n,a)).months(r,!0)}static weekdays(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null}={}){return(o||je.create(t,n,null)).weekdays(r)}static weekdaysFormat(r="long",{locale:t=null,numberingSystem:n=null,locObj:o=null}={}){return(o||je.create(t,n,null)).weekdays(r,!0)}static meridiems({locale:r=null}={}){return je.create(r).meridiems()}static eras(r="short",{locale:t=null}={}){return je.create(t,null,"gregory").eras(r)}static features(){return{relative:r2(),localeWeek:t2()}}}function Vm(e,r){const t=i(o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),"utcDayStart"),n=t(r)-t(e);return Math.floor(Ce.fromMillis(n).as("days"))}i(Vm,"dayDiff");function W3(e,r,t){const n=[["years",(u,f)=>f.year-u.year],["quarters",(u,f)=>f.quarter-u.quarter+(f.year-u.year)*4],["months",(u,f)=>f.month-u.month+(f.year-u.year)*12],["weeks",(u,f)=>{const g=Vm(u,f);return(g-g%7)/7}],["days",Vm]],o={},a=e;let s,l;for(const[u,f]of n)t.indexOf(u)>=0&&(s=u,o[u]=f(e,r),l=a.plus(o),l>r?(o[u]--,e=a.plus(o),e>r&&(l=e,o[u]--,e=a.plus(o))):e=l);return[e,o,l,s]}i(W3,"highOrderDiffs");function K3(e,r,t,n){let[o,a,s,l]=W3(e,r,t);const u=r-o,f=t.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);f.length===0&&(s<r&&(s=o.plus({[l]:1})),s!==o&&(a[l]=(a[l]||0)+u/(s-o)));const g=Ce.fromObject(a,n);return f.length>0?Ce.fromMillis(u,n).shiftTo(...f).plus(g):g}i(K3,"diff");const H3="missing Intl.DateTimeFormat.formatToParts support";function Pe(e,r=t=>t){return{regex:e,deser:i(([t])=>r(R4(t)),"deser")}}i(Pe,"intUnit");const G3=" ",w2=`[ ${G3}]`,k2=new RegExp(w2,"g");function Z3(e){return e.replace(/\./g,"\\.?").replace(k2,w2)}i(Z3,"fixListRegex");function Wm(e){return e.replace(/\./g,"").replace(k2," ").toLowerCase()}i(Wm,"stripInsensitivities");function Nn(e,r){return e===null?null:{regex:RegExp(e.map(Z3).join("|")),deser:i(([t])=>e.findIndex(n=>Wm(t)===Wm(n))+r,"deser")}}i(Nn,"oneOf");function Km(e,r){return{regex:e,deser:i(([,t,n])=>sd(t,n),"deser"),groups:r}}i(Km,"offset");function Pu(e){return{regex:e,deser:i(([r])=>r,"deser")}}i(Pu,"simple");function Y3(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}i(Y3,"escapeToken");function J3(e,r){const t=Pn(r),n=Pn(r,"{2}"),o=Pn(r,"{3}"),a=Pn(r,"{4}"),s=Pn(r,"{6}"),l=Pn(r,"{1,2}"),u=Pn(r,"{1,3}"),f=Pn(r,"{1,6}"),g=Pn(r,"{1,9}"),h=Pn(r,"{2,4}"),p=Pn(r,"{4,6}"),m=i(C=>({regex:RegExp(Y3(C.val)),deser:i(([E])=>E,"deser"),literal:!0}),"literal"),$=i(C=>{if(e.literal)return m(C);switch(C.val){case"G":return Nn(r.eras("short"),0);case"GG":return Nn(r.eras("long"),0);case"y":return Pe(f);case"yy":return Pe(h,ig);case"yyyy":return Pe(a);case"yyyyy":return Pe(p);case"yyyyyy":return Pe(s);case"M":return Pe(l);case"MM":return Pe(n);case"MMM":return Nn(r.months("short",!0),1);case"MMMM":return Nn(r.months("long",!0),1);case"L":return Pe(l);case"LL":return Pe(n);case"LLL":return Nn(r.months("short",!1),1);case"LLLL":return Nn(r.months("long",!1),1);case"d":return Pe(l);case"dd":return Pe(n);case"o":return Pe(u);case"ooo":return Pe(o);case"HH":return Pe(n);case"H":return Pe(l);case"hh":return Pe(n);case"h":return Pe(l);case"mm":return Pe(n);case"m":return Pe(l);case"q":return Pe(l);case"qq":return Pe(n);case"s":return Pe(l);case"ss":return Pe(n);case"S":return Pe(u);case"SSS":return Pe(o);case"u":return Pu(g);case"uu":return Pu(l);case"uuu":return Pe(t);case"a":return Nn(r.meridiems(),0);case"kkkk":return Pe(a);case"kk":return Pe(h,ig);case"W":return Pe(l);case"WW":return Pe(n);case"E":case"c":return Pe(t);case"EEE":return Nn(r.weekdays("short",!1),1);case"EEEE":return Nn(r.weekdays("long",!1),1);case"ccc":return Nn(r.weekdays("short",!0),1);case"cccc":return Nn(r.weekdays("long",!0),1);case"Z":case"ZZ":return Km(new RegExp(`([+-]${l.source})(?::(${n.source}))?`),2);case"ZZZ":return Km(new RegExp(`([+-]${l.source})(${n.source})?`),2);case"z":return Pu(/[a-z_+-/]{1,256}?/i);case" ":return Pu(/[^\S\n\r]/);default:return m(C)}},"unitate")(e)||{invalidReason:H3};return $.token=e,$}i(J3,"unitForToken");const X3={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Q3(e,r,t){const{type:n,value:o}=e;if(n==="literal"){const u=/^\s+$/.test(o);return{literal:!u,val:u?" ":o}}const a=r[n];let s=n;n==="hour"&&(r.hour12!=null?s=r.hour12?"hour12":"hour24":r.hourCycle!=null?r.hourCycle==="h11"||r.hourCycle==="h12"?s="hour12":s="hour24":s=t.hour12?"hour12":"hour24");let l=X3[s];if(typeof l=="object"&&(l=l[a]),l)return{literal:!1,val:l}}i(Q3,"tokenForPart");function e6(e){return[`^${e.map(t=>t.regex).reduce((t,n)=>`${t}(${n.source})`,"")}$`,e]}i(e6,"buildRegex");function r6(e,r,t){const n=e.match(r);if(n){const o={};let a=1;for(const s in t)if(Ya(t,s)){const l=t[s],u=l.groups?l.groups+1:1;!l.literal&&l.token&&(o[l.token.val[0]]=l.deser(n.slice(a,a+u))),a+=u}return[n,o]}else return[n,{}]}i(r6,"match$1");function t6(e){const r=i(a=>{switch(a){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},"toField");let t=null,n;return ie(e.z)||(t=Po.create(e.z)),ie(e.Z)||(t||(t=new Ft(e.Z)),n=e.Z),ie(e.q)||(e.M=(e.q-1)*3+1),ie(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),ie(e.u)||(e.S=dh(e.u)),[Object.keys(e).reduce((a,s)=>{const l=r(s);return l&&(a[l]=e[s]),a},{}),t,n]}i(t6,"dateTimeFromMatches");let Cf=null;function n6(){return Cf||(Cf=ae.fromMillis(1555555555555)),Cf}i(n6,"getDummyDateTime");function o6(e,r){if(e.literal)return e;const t=$t.macroTokenToFormatOpts(e.val),n=C2(t,r);return n==null||n.includes(void 0)?e:n}i(o6,"maybeExpandMacroToken");function $2(e,r){return Array.prototype.concat(...e.map(t=>o6(t,r)))}i($2,"expandMacroTokens");class x2{static{i(this,"TokenParser")}constructor(r,t){if(this.locale=r,this.format=t,this.tokens=$2($t.parseFormat(t),r),this.units=this.tokens.map(n=>J3(n,r)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=e6(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(r){if(this.isValid){const[t,n]=r6(r,this.regex,this.handlers),[o,a,s]=n?t6(n):[null,null,void 0];if(Ya(n,"a")&&Ya(n,"H"))throw new Oa("Can't include meridiem when specifying 24-hour format");return{input:r,tokens:this.tokens,regex:this.regex,rawMatches:t,matches:n,result:o,zone:a,specificOffset:s}}else return{input:r,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function D2(e,r,t){return new x2(e,t).explainFromTokens(r)}i(D2,"explainFromTokens");function i6(e,r,t){const{result:n,zone:o,specificOffset:a,invalidReason:s}=D2(e,r,t);return[n,o,a,s]}i(i6,"parseFromTokens");function C2(e,r){if(!e)return null;const n=$t.create(r,e).dtFormatter(n6()),o=n.formatToParts(),a=n.resolvedOptions();return o.map(s=>Q3(s,e,a))}i(C2,"formatOptsToTokens");const Ef="Invalid DateTime",Hm=864e13;function nl(e){return new On("unsupported zone",`the zone "${e.name}" is not supported`)}i(nl,"unsupportedZone");function Af(e){return e.weekData===null&&(e.weekData=wc(e.c)),e.weekData}i(Af,"possiblyCachedWeekData");function Ff(e){return e.localWeekData===null&&(e.localWeekData=wc(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}i(Ff,"possiblyCachedLocalWeekData");function Si(e,r){const t={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new ae({...t,...r,old:t})}i(Si,"clone$2");function E2(e,r,t){let n=e-r*60*1e3;const o=t.offset(n);if(r===o)return[n,r];n-=(o-r)*60*1e3;const a=t.offset(n);return o===a?[n,o]:[e-Math.min(o,a)*60*1e3,Math.max(o,a)]}i(E2,"fixOffset");function Nu(e,r){e+=r*60*1e3;const t=new Date(e);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hour:t.getUTCHours(),minute:t.getUTCMinutes(),second:t.getUTCSeconds(),millisecond:t.getUTCMilliseconds()}}i(Nu,"tsToObj");function oc(e,r,t){return E2(ad(e),r,t)}i(oc,"objToTS");function Gm(e,r){const t=e.o,n=e.c.year+Math.trunc(r.years),o=e.c.month+Math.trunc(r.months)+Math.trunc(r.quarters)*3,a={...e.c,year:n,month:o,day:Math.min(e.c.day,kc(n,o))+Math.trunc(r.days)+Math.trunc(r.weeks)*7},s=Ce.fromObject({years:r.years-Math.trunc(r.years),quarters:r.quarters-Math.trunc(r.quarters),months:r.months-Math.trunc(r.months),weeks:r.weeks-Math.trunc(r.weeks),days:r.days-Math.trunc(r.days),hours:r.hours,minutes:r.minutes,seconds:r.seconds,milliseconds:r.milliseconds}).as("milliseconds"),l=ad(a);let[u,f]=E2(l,t,e.zone);return s!==0&&(u+=s,f=e.zone.offset(u)),{ts:u,o:f}}i(Gm,"adjustTime");function Aa(e,r,t,n,o,a){const{setZone:s,zone:l}=t;if(e&&Object.keys(e).length!==0||r){const u=r||l,f=ae.fromObject(e,{...t,zone:u,specificOffset:a});return s?f:f.setZone(l)}else return ae.invalid(new On("unparsable",`the input "${o}" can't be parsed as ${n}`))}i(Aa,"parseDataToDateTime");function Iu(e,r,t=!0){return e.isValid?$t.create(je.create("en-US"),{allowZ:t,forceSimple:!0}).formatDateTimeFromString(e,r):null}i(Iu,"toTechFormat");function Mf(e,r,t){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=Sr(e.c.year,n?6:4),t==="year")return o;if(r){if(o+="-",o+=Sr(e.c.month),t==="month")return o;o+="-"}else if(o+=Sr(e.c.month),t==="month")return o;return o+=Sr(e.c.day),o}i(Mf,"toISODate");function Zm(e,r,t,n,o,a,s){let l=!t||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=Sr(e.c.hour),s==="hour")break;if(r){if(u+=":",u+=Sr(e.c.minute),s==="minute")break;l&&(u+=":",u+=Sr(e.c.second))}else{if(u+=Sr(e.c.minute),s==="minute")break;l&&(u+=Sr(e.c.second))}if(s==="second")break;l&&(!n||e.c.millisecond!==0)&&(u+=".",u+=Sr(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!a?u+="Z":e.o<0?(u+="-",u+=Sr(Math.trunc(-e.o/60)),u+=":",u+=Sr(Math.trunc(-e.o%60))):(u+="+",u+=Sr(Math.trunc(e.o/60)),u+=":",u+=Sr(Math.trunc(e.o%60)))),a&&(u+="["+e.zone.ianaName+"]"),u}i(Zm,"toISOTime");const A2={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},a6={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},s6={ordinal:1,hour:0,minute:0,second:0,millisecond:0},ic=["year","month","day","hour","minute","second","millisecond"],l6=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],u6=["year","ordinal","hour","minute","second","millisecond"];function ac(e){const r={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!r)throw new Ay(e);return r}i(ac,"normalizeUnit");function Ym(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return ac(e)}}i(Ym,"normalizeUnitWithLocalWeeks");function c6(e){if(ol===void 0&&(ol=hr.now()),e.type!=="iana")return e.offset(ol);const r=e.name;let t=ag.get(r);return t===void 0&&(t=e.offset(ol),ag.set(r,t)),t}i(c6,"guessOffsetForZone");function Jm(e,r){const t=Zo(r.zone,hr.defaultZone);if(!t.isValid)return ae.invalid(nl(t));const n=je.fromObject(r);let o,a;if(ie(e.year))o=hr.now();else{for(const u of ic)ie(e[u])&&(e[u]=A2[u]);const s=Qy(e)||e2(e);if(s)return ae.invalid(s);const l=c6(t);[o,a]=oc(e,l,t)}return new ae({ts:o,zone:t,loc:n,o:a})}i(Jm,"quickDT");function Xm(e,r,t){const n=ie(t.round)?!0:t.round,o=ie(t.rounding)?"trunc":t.rounding,a=i((l,u)=>(l=fh(l,n||t.calendary?0:2,t.calendary?"round":o),r.loc.clone(t).relFormatter(t).format(l,u)),"format"),s=i(l=>t.calendary?r.hasSame(e,l)?0:r.startOf(l).diff(e.startOf(l),l).get(l):r.diff(e,l).get(l),"differ");if(t.unit)return a(s(t.unit),t.unit);for(const l of t.units){const u=s(l);if(Math.abs(u)>=1)return a(u,l)}return a(e>r?-0:0,t.units[t.units.length-1])}i(Xm,"diffRelative");function Qm(e){let r={},t;return e.length>0&&typeof e[e.length-1]=="object"?(r=e[e.length-1],t=Array.from(e).slice(0,e.length-1)):t=Array.from(e),[r,t]}i(Qm,"lastOpts");let ol;const ag=new Map;class ae{static{i(this,"DateTime")}constructor(r){const t=r.zone||hr.defaultZone;let n=r.invalid||(Number.isNaN(r.ts)?new On("invalid input"):null)||(t.isValid?null:nl(t));this.ts=ie(r.ts)?hr.now():r.ts;let o=null,a=null;if(!n)if(r.old&&r.old.ts===this.ts&&r.old.zone.equals(t))[o,a]=[r.old.c,r.old.o];else{const l=ri(r.o)&&!r.old?r.o:t.offset(this.ts);o=Nu(this.ts,l),n=Number.isNaN(o.year)?new On("invalid input"):null,o=n?null:o,a=n?null:l}this._zone=t,this.loc=r.loc||je.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=a,this.isLuxonDateTime=!0}static now(){return new ae({})}static local(){const[r,t]=Qm(arguments),[n,o,a,s,l,u,f]=t;return Jm({year:n,month:o,day:a,hour:s,minute:l,second:u,millisecond:f},r)}static utc(){const[r,t]=Qm(arguments),[n,o,a,s,l,u,f]=t;return r.zone=Ft.utcInstance,Jm({year:n,month:o,day:a,hour:s,minute:l,second:u,millisecond:f},r)}static fromJSDate(r,t={}){const n=z4(r)?r.valueOf():NaN;if(Number.isNaN(n))return ae.invalid("invalid input");const o=Zo(t.zone,hr.defaultZone);return o.isValid?new ae({ts:n,zone:o,loc:je.fromObject(t)}):ae.invalid(nl(o))}static fromMillis(r,t={}){if(ri(r))return r<-Hm||r>Hm?ae.invalid("Timestamp out of range"):new ae({ts:r,zone:Zo(t.zone,hr.defaultZone),loc:je.fromObject(t)});throw new wt(`fromMillis requires a numerical input, but received a ${typeof r} with value ${r}`)}static fromSeconds(r,t={}){if(ri(r))return new ae({ts:r*1e3,zone:Zo(t.zone,hr.defaultZone),loc:je.fromObject(t)});throw new wt("fromSeconds requires a numerical input")}static fromObject(r,t={}){r=r||{};const n=Zo(t.zone,hr.defaultZone);if(!n.isValid)return ae.invalid(nl(n));const o=je.fromObject(t),a=$c(r,Ym),{minDaysInFirstWeek:s,startOfWeek:l}=Om(a,o),u=hr.now(),f=ie(t.specificOffset)?n.offset(u):t.specificOffset,g=!ie(a.ordinal),h=!ie(a.year),p=!ie(a.month)||!ie(a.day),m=h||p,v=a.weekYear||a.weekNumber;if((m||g)&&v)throw new Oa("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(p&&g)throw new Oa("Can't mix ordinal dates with month/day");const $=v||a.weekday&&!m;let C,E,A=Nu(u,f);$?(C=l6,E=a6,A=wc(A,s,l)):g?(C=u6,E=s6,A=Df(A)):(C=ic,E=A2);let I=!1;for(const nr of C){const or=a[nr];ie(or)?I?a[nr]=E[nr]:a[nr]=A[nr]:I=!0}const _=$?j4(a,s,l):g?U4(a):Qy(a),H=_||e2(a);if(H)return ae.invalid(H);const ce=$?Im(a,s,l):g?Bm(a):a,[Te,be]=oc(ce,f,n),Me=new ae({ts:Te,zone:n,o:be,loc:o});return a.weekday&&m&&r.weekday!==Me.weekday?ae.invalid("mismatched weekday",`you can't specify both a weekday of ${a.weekday} and a date of ${Me.toISO()}`):Me.isValid?Me:ae.invalid(Me.invalid)}static fromISO(r,t={}){const[n,o]=T3(r);return Aa(n,o,t,"ISO 8601",r)}static fromRFC2822(r,t={}){const[n,o]=P3(r);return Aa(n,o,t,"RFC 2822",r)}static fromHTTP(r,t={}){const[n,o]=N3(r);return Aa(n,o,t,"HTTP",t)}static fromFormat(r,t,n={}){if(ie(r)||ie(t))throw new wt("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:a=null}=n,s=je.fromOpts({locale:o,numberingSystem:a,defaultToEN:!0}),[l,u,f,g]=i6(s,r,t);return g?ae.invalid(g):Aa(l,u,n,`format ${t}`,r,f)}static fromString(r,t,n={}){return ae.fromFormat(r,t,n)}static fromSQL(r,t={}){const[n,o]=U3(r);return Aa(n,o,t,"SQL",r)}static invalid(r,t=null){if(!r)throw new wt("need to specify a reason the DateTime is invalid");const n=r instanceof On?r:new On(r,t);if(hr.throwOnInvalid)throw new g4(n);return new ae({invalid:n})}static isDateTime(r){return r&&r.isLuxonDateTime||!1}static parseFormatForOpts(r,t={}){const n=C2(r,je.fromObject(t));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(r,t={}){return $2($t.parseFormat(r),je.fromObject(t)).map(o=>o.val).join("")}static resetCache(){ol=void 0,ag.clear()}get(r){return this[r]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Af(this).weekYear:NaN}get weekNumber(){return this.isValid?Af(this).weekNumber:NaN}get weekday(){return this.isValid?Af(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Ff(this).weekday:NaN}get localWeekNumber(){return this.isValid?Ff(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Ff(this).weekYear:NaN}get ordinal(){return this.isValid?Df(this.c).ordinal:NaN}get monthShort(){return this.isValid?Tu.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Tu.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Tu.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Tu.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const r=864e5,t=6e4,n=ad(this.c),o=this.zone.offset(n-r),a=this.zone.offset(n+r),s=this.zone.offset(n-o*t),l=this.zone.offset(n-a*t);if(s===l)return[this];const u=n-s*t,f=n-l*t,g=Nu(u,s),h=Nu(f,l);return g.hour===h.hour&&g.minute===h.minute&&g.second===h.second&&g.millisecond===h.millisecond?[Si(this,{ts:u}),Si(this,{ts:f})]:[this]}get isInLeapYear(){return tu(this.year)}get daysInMonth(){return kc(this.year,this.month)}get daysInYear(){return this.isValid?za(this.year):NaN}get weeksInWeekYear(){return this.isValid?El(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?El(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(r={}){const{locale:t,numberingSystem:n,calendar:o}=$t.create(this.loc.clone(r),r).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:o}}toUTC(r=0,t={}){return this.setZone(Ft.instance(r),t)}toLocal(){return this.setZone(hr.defaultZone)}setZone(r,{keepLocalTime:t=!1,keepCalendarTime:n=!1}={}){if(r=Zo(r,hr.defaultZone),r.equals(this.zone))return this;if(r.isValid){let o=this.ts;if(t||n){const a=r.offset(this.ts),s=this.toObject();[o]=oc(s,a,r)}return Si(this,{ts:o,zone:r})}else return ae.invalid(nl(r))}reconfigure({locale:r,numberingSystem:t,outputCalendar:n}={}){const o=this.loc.clone({locale:r,numberingSystem:t,outputCalendar:n});return Si(this,{loc:o})}setLocale(r){return this.reconfigure({locale:r})}set(r){if(!this.isValid)return this;const t=$c(r,Ym),{minDaysInFirstWeek:n,startOfWeek:o}=Om(t,this.loc),a=!ie(t.weekYear)||!ie(t.weekNumber)||!ie(t.weekday),s=!ie(t.ordinal),l=!ie(t.year),u=!ie(t.month)||!ie(t.day),f=l||u,g=t.weekYear||t.weekNumber;if((f||s)&&g)throw new Oa("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new Oa("Can't mix ordinal dates with month/day");let h;a?h=Im({...wc(this.c,n,o),...t},n,o):ie(t.ordinal)?(h={...this.toObject(),...t},ie(t.day)&&(h.day=Math.min(kc(h.year,h.month),h.day))):h=Bm({...Df(this.c),...t});const[p,m]=oc(h,this.o,this.zone);return Si(this,{ts:p,o:m})}plus(r){if(!this.isValid)return this;const t=Ce.fromDurationLike(r);return Si(this,Gm(this,t))}minus(r){if(!this.isValid)return this;const t=Ce.fromDurationLike(r).negate();return Si(this,Gm(this,t))}startOf(r,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;const n={},o=Ce.normalizeUnit(r);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(t){const a=this.loc.getStartOfWeek(),{weekday:s}=this;s<a&&(n.weekNumber=this.weekNumber-1),n.weekday=a}else n.weekday=1;if(o==="quarters"){const a=Math.ceil(this.month/3);n.month=(a-1)*3+1}return this.set(n)}endOf(r,t){return this.isValid?this.plus({[r]:1}).startOf(r,t).minus(1):this}toFormat(r,t={}){return this.isValid?$t.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,r):Ef}toLocaleString(r=yc,t={}){return this.isValid?$t.create(this.loc.clone(t),r).formatDateTime(this):Ef}toLocaleParts(r={}){return this.isValid?$t.create(this.loc.clone(r),r).formatDateTimeParts(this):[]}toISO({format:r="extended",suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:a=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=ac(s);const l=r==="extended";let u=Mf(this,l,s);return ic.indexOf(s)>=3&&(u+="T"),u+=Zm(this,l,t,n,o,a,s),u}toISODate({format:r="extended",precision:t="day"}={}){return this.isValid?Mf(this,r==="extended",ac(t)):null}toISOWeekDate(){return Iu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:r=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:a=!1,format:s="extended",precision:l="milliseconds"}={}){return this.isValid?(l=ac(l),(o&&ic.indexOf(l)>=3?"T":"")+Zm(this,s==="extended",t,r,n,a,l)):null}toRFC2822(){return Iu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Iu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Mf(this,!0):null}toSQLTime({includeOffset:r=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(t||r)&&(n&&(o+=" "),t?o+="z":r&&(o+="ZZ")),Iu(this,o,!0)}toSQL(r={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(r)}`:null}toString(){return this.isValid?this.toISO():Ef}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(r={}){if(!this.isValid)return{};const t={...this.c};return r.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(r,t="milliseconds",n={}){if(!this.isValid||!r.isValid)return Ce.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},a=q4(t).map(Ce.normalizeUnit),s=r.valueOf()>this.valueOf(),l=s?this:r,u=s?r:this,f=K3(l,u,a,o);return s?f.negate():f}diffNow(r="milliseconds",t={}){return this.diff(ae.now(),r,t)}until(r){return this.isValid?$r.fromDateTimes(this,r):this}hasSame(r,t,n){if(!this.isValid)return!1;const o=r.valueOf(),a=this.setZone(r.zone,{keepLocalTime:!0});return a.startOf(t,n)<=o&&o<=a.endOf(t,n)}equals(r){return this.isValid&&r.isValid&&this.valueOf()===r.valueOf()&&this.zone.equals(r.zone)&&this.loc.equals(r.loc)}toRelative(r={}){if(!this.isValid)return null;const t=r.base||ae.fromObject({},{zone:this.zone}),n=r.padding?this<t?-r.padding:r.padding:0;let o=["years","months","days","hours","minutes","seconds"],a=r.unit;return Array.isArray(r.unit)&&(o=r.unit,a=void 0),Xm(t,this.plus(n),{...r,numeric:"always",units:o,unit:a})}toRelativeCalendar(r={}){return this.isValid?Xm(r.base||ae.fromObject({},{zone:this.zone}),this,{...r,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...r){if(!r.every(ae.isDateTime))throw new wt("min requires all arguments be DateTimes");return Rm(r,t=>t.valueOf(),Math.min)}static max(...r){if(!r.every(ae.isDateTime))throw new wt("max requires all arguments be DateTimes");return Rm(r,t=>t.valueOf(),Math.max)}static fromFormatExplain(r,t,n={}){const{locale:o=null,numberingSystem:a=null}=n,s=je.fromOpts({locale:o,numberingSystem:a,defaultToEN:!0});return D2(s,r,t)}static fromStringExplain(r,t,n={}){return ae.fromFormatExplain(r,t,n)}static buildFormatParser(r,t={}){const{locale:n=null,numberingSystem:o=null}=t,a=je.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new x2(a,r)}static fromFormatParser(r,t,n={}){if(ie(r)||ie(t))throw new wt("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:a=null}=n,s=je.fromOpts({locale:o,numberingSystem:a,defaultToEN:!0});if(!s.equals(t.locale))throw new wt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${t.locale}`);const{result:l,zone:u,specificOffset:f,invalidReason:g}=t.explainFromTokens(r);return g?ae.invalid(g):Aa(l,u,n,`format ${t.format}`,r,f)}static get DATE_SHORT(){return yc}static get DATE_MED(){return Fy}static get DATE_MED_WITH_WEEKDAY(){return m4}static get DATE_FULL(){return My}static get DATE_HUGE(){return Sy}static get TIME_SIMPLE(){return Ty}static get TIME_WITH_SECONDS(){return Py}static get TIME_WITH_SHORT_OFFSET(){return Ny}static get TIME_WITH_LONG_OFFSET(){return Iy}static get TIME_24_SIMPLE(){return By}static get TIME_24_WITH_SECONDS(){return Oy}static get TIME_24_WITH_SHORT_OFFSET(){return Ry}static get TIME_24_WITH_LONG_OFFSET(){return Ly}static get DATETIME_SHORT(){return jy}static get DATETIME_SHORT_WITH_SECONDS(){return Uy}static get DATETIME_MED(){return _y}static get DATETIME_MED_WITH_SECONDS(){return zy}static get DATETIME_MED_WITH_WEEKDAY(){return b4}static get DATETIME_FULL(){return qy}static get DATETIME_FULL_WITH_SECONDS(){return Vy}static get DATETIME_HUGE(){return Wy}static get DATETIME_HUGE_WITH_SECONDS(){return Ky}}function Us(e){if(ae.isDateTime(e))return e;if(e&&e.valueOf&&ri(e.valueOf()))return ae.fromJSDate(e);if(e&&typeof e=="object")return ae.fromObject(e);throw new wt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}i(Us,"friendlyDateTime");Intl.DateTimeFormat().resolvedOptions().locale;var J;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(J||(J={}));J.Year,J.Hour,J.Minute,J.Second,J.Millisecond;J.Month,J.Week,J.Day;J.Millisecond,J.Second,J.Minute,J.Hour,J.Day,J.Week,J.Month,J.Year;const eb={min:0,max:23},rb={min:0,max:59},tb={min:0,max:59},nb={min:0,max:999};var le;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(le||(le={}));const d6=[le.Milliseconds,le.Seconds,le.Minutes,le.Hours,le.Days,le.Weeks,le.Months,le.Years];le.Milliseconds+"",le.Seconds+"",le.Minutes+"",le.Hours+"",le.Days+"",le.Weeks+"",le.Months+"",le.Years+"";le.Years+"",J.Year,le.Months+"",J.Month,le.Weeks+"",J.Week,le.Days+"",J.Day,le.Hours+"",J.Hour,le.Minutes+"",J.Minute,le.Seconds+"",J.Second,le.Milliseconds+"",J.Millisecond;J.Year+"",le.Years,J.Month+"",le.Months,J.Week+"",le.Weeks,J.Day+"",le.Days,J.Hour+"",le.Hours,J.Minute+"",le.Minutes,J.Second+"",le.Seconds,J.Millisecond+"",le.Milliseconds;function f6(e){return d6.filter(r=>e[r])}i(f6,"flattenUnitsSmallestToLargest");function sg(e,{decimalCount:r}){if(r==null)return e;const t=Math.pow(10,r),n=e*t;return Number((Math.round(n)/t).toFixed(r))}i(sg,"round$1");function g6(e){return sg(Math.max(e-.4,0),{decimalCount:0})}i(g6,"roundNarrow");function ob(e){return e===0?0:Math.sign(e)}i(ob,"getSign");function Ja(e,r,t={}){const n={},o={decimalCount:t.decimalCount==null?void 0:Math.round(Math.abs(t.decimalCount))},a=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),l=f6(r).reverse();if(a||s)return l.forEach(g=>{n[g]=a?1/0:-1/0}),n;let u=Ce.fromObject(e).as(le.Milliseconds);const f=ob(u);return l.forEach((g,h)=>{const p=h===l.length-1;if(g===le.Milliseconds)n.milliseconds=sg(u,o);else{const m=Ce.fromObject({milliseconds:u}).as(g),v=Math.sign(m),$=Math.abs(m),C=p?sg($,o):Math.floor(o.decimalCount==null?$:g6($)),E=C===0?0:C*v;n[g]=E,u-=Ce.fromObject({[g]:E}).as(le.Milliseconds),f!==ob(u)&&(u=0)}}),n}i(Ja,"convertDuration");var kt;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(kt||(kt={}));kt.Sunday+"",kt.Monday+"",kt.Tuesday+"",kt.Wednesday+"",kt.Thursday+"",kt.Friday+"",kt.Saturday+"";kt.Sunday,kt.Monday,kt.Tuesday,kt.Wednesday,kt.Thursday,kt.Friday,kt.Saturday;var Rt;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Rt||(Rt={}));Rt.January,Rt.February,Rt.March,Rt.April,Rt.May,Rt.June,Rt.July,Rt.August,Rt.September,Rt.October,Rt.November,Rt.December;const ib={min:1,max:12},ab={min:1,max:31};function Ji(e){const r=new vc,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:Ja(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{r.resolve()},n<=0?0:n),r.promise}i(Ji,"wait");function F2(...e){const r=e.join(""),t=nd(Array.from(r));return Array.from(t).join("")}i(F2,"removeDuplicateCharacters");function M2(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}i(M2,"escapeStringForRegExp");function S2(e,r){const t=F2([typeof e=="string"?"":e.flags,r].join("").toLowerCase());return T2(e,t)}i(S2,"addRegExpFlags");function T2(e,r){const t=F2(r);return typeof e=="string"?new RegExp(M2(e),t):new RegExp(e.source,t)}i(T2,"setRegExpFlags");function P2(e,{caseSensitive:r}){const n="".replaceAll("i","");return T2(e,n)}i(P2,"setRegExpCaseSensitivity");function mh(e,r=1){return e.split(`
`).map(t=>["    ".repeat(Math.round(r)),t].join("")).join(`
`)}i(mh,"indent");function N2(e,r){return r?typeof r=="string"?!!new RegExp(M2(r),"i").exec(e):!!S2(r,"i").exec(e):!1}i(N2,"match");class w extends Error{static{i(this,"AssertionError")}name="AssertionError";constructor(r,t){super(sa(t,r)||"Assertion failed.")}}const sb={interval:{milliseconds:100},timeout:{seconds:10}},Sf=Symbol("not set");async function h6(e,r,t){const{callback:n,extraAssertionArgs:o,failureMessage:a,options:s}=p6(r),l=Ja(s.timeout,{milliseconds:!0}).milliseconds,u=Ja(s.interval,{milliseconds:!0});let f=Sf,g;async function h(){try{f=t?n():await n(),e(f,...o)}catch(m){f=Sf,g=Dr(m)}}i(h,"checkCondition");const p=Date.now();for(;f===Sf;)if(await h(),await Ji(u),Date.now()-p>=l){const v=`${a?`${a}: `:""}Timeout of '${l}' milliseconds exceeded waiting for callback value to match expectations`;throw la(g,v)}return f}i(h6,"executeWaitUntil");function L(e,r=!1){return((...t)=>h6(e,t,r))}i(L,"createWaitUntil");function p6(e){const r={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(t=>{if(r.callback)r.extraAssertionArgs.push(t);else if(typeof t=="function")r.callback=t;else if(typeof t=="string")r.failureMessage=t;else if(typeof t=="object")r.options=t;else{if(t===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(t)}`)}}),!r.callback)throw new TypeError("Missing waitUntil callback.");return{callback:r.callback,options:I2(r.options),extraAssertionArgs:r.extraAssertionArgs.toReversed(),failureMessage:r.failureMessage}}i(p6,"parseWaitUntilArgs");function I2(e){return{interval:e?.interval||sb.interval,timeout:e?.timeout||sb.timeout}}i(I2,"parseWaitUntilOptions");const _s={isFalse(e,r){if(e!==!1)throw new w(`'${x(e)}' is not false.`,r)},isFalsy(e,r){if(e)throw new w(`'${x(e)}' is not falsy.`,r)},isTrue(e,r){if(e!==!0)throw new w(`'${x(e)}' is not true.`,r)},isTruthy(e,r){if(!e)throw new w(`'${x(e)}' is not truthy.`,r)}},B2={assert:_s,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,r){if(e===!1)return e;throw new w(`'${x(e)}' is not false.`,r)},isFalsy(e,r){if(e)throw new w(`'${x(e)}' is not falsy.`,r);return e},isTrue(e,r){if(e===!0)return e;throw new w(`'${x(e)}' is not true.`,r)},isTruthy(e,r){if(e)return e;throw new w(`'${x(e)}' is not truthy.`,r)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:L(_s.isFalse),isFalsy:L(_s.isFalsy),isTrue:L(_s.isTrue),isTruthy:L(_s.isTruthy)}};function m6(e,r,t){if(typeof e=="string"){if(!e.endsWith(r))throw new w(`${x(e)} does not end with ${x(r)}}`,t)}else if(e[e.length-1]!==r)throw new w(`${x(e)} does not end with ${x(r)}}`,t)}i(m6,"endsWith");function b6(e,r,t){if(typeof e=="string"){if(e.endsWith(r))throw new w(`${x(e)} ends with ${x(r)}}`,t)}else if(e[e.length-1]===r)throw new w(`${x(e)} ends with ${x(r)}}`,t)}i(b6,"endsWithout");function v6(e,r,t){if(typeof e=="string"){if(!e.startsWith(r))throw new w(`${x(e)} does not start with ${x(r)}}`,t)}else if(e[0]!==r)throw new w(`${x(e)} does not start with ${x(r)}}`,t)}i(v6,"startsWith");function y6(e,r,t){if(typeof e=="string"){if(e.startsWith(r))throw new w(`${x(e)} starts with ${x(r)}}`,t)}else if(e[0]===r)throw new w(`${x(e)} starts with ${x(r)}}`,t)}i(y6,"startsWithout");const zs={endsWith:m6,endsWithout:b6,startsWith:v6,startsWithout:y6},O2={assert:zs,check:{endsWith:i(((e,r)=>typeof e=="string"?e.endsWith(r):e[e.length-1]===r),"endsWith"),endsWithout:i(((e,r)=>typeof e=="string"?!e.endsWith(r):e[e.length-1]!==r),"endsWithout"),startsWith:i(((e,r)=>typeof e=="string"?e.startsWith(r):e[0]===r),"startsWith"),startsWithout:i(((e,r)=>typeof e=="string"?!e.startsWith(r):e[0]!==r),"startsWithout")},assertWrap:{endsWith:i(((e,r,t)=>{if(typeof e=="string"){if(!e.endsWith(r))throw new w(`${x(e)} does not end with ${x(r)}}`,t)}else if(e[e.length-1]!==r)throw new w(`${x(e)} does not end with ${x(r)}}`,t);return e}),"endsWith"),endsWithout:i(((e,r,t)=>{if(typeof e=="string"){if(e.endsWith(r))throw new w(`${x(e)} ends with ${x(r)}}`,t)}else if(e[e.length-1]===r)throw new w(`${x(e)} ends with ${x(r)}}`,t);return e}),"endsWithout"),startsWith:i(((e,r,t)=>{if(typeof e=="string"){if(!e.startsWith(r))throw new w(`${x(e)} does not start with ${x(r)}}`,t)}else if(e[0]!==r)throw new w(`${x(e)} does not start with ${x(r)}}`,t);return e}),"startsWith"),startsWithout:i(((e,r,t)=>{if(typeof e=="string"){if(e.startsWith(r))throw new w(`${x(e)} starts with ${x(r)}}`,t)}else if(e[0]===r)throw new w(`${x(e)} starts with ${x(r)}}`,t);return e}),"startsWithout")},checkWrap:{endsWith:i(((e,r)=>{if(typeof e=="string")return e.endsWith(r)?e:void 0;if(e[e.length-1]===r)return e}),"endsWith"),endsWithout:i(((e,r)=>{if(typeof e=="string")return e.endsWith(r)?void 0:e;if(e[e.length-1]!==r)return e}),"endsWithout"),startsWith:i(((e,r)=>{if(typeof e=="string")return e.startsWith(r)?e:void 0;if(e[0]===r)return e}),"startsWith"),startsWithout:i(((e,r)=>{if(typeof e=="string")return e.startsWith(r)?void 0:e;if(e[0]!==r)return e}),"startsWithout")},waitUntil:{endsWith:L(zs.endsWith),endsWithout:L(zs.endsWithout),startsWith:L(zs.startsWith),startsWithout:L(zs.startsWithout)}};function w6(e,r,t){const n=Jt(r);if(!n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,t)}i(w6,"assertIsEnumValue");function vo(e,r){return Jt(r).includes(e)}i(vo,"isEnumValue");const Tf={isEnumValue(e,r,t){w6(e,r,t)},isNotEnumValue(e,r,t){const n=Jt(r);if(n.includes(e))throw new w(`${String(e)} is an enum value in '${n.join(",")}'.`,t)}},R2={assert:Tf,check:{isEnumValue:vo,isNotEnumValue(e,r){return!Jt(r).includes(e)}},assertWrap:{isEnumValue(e,r,t){const n=Jt(r);if(!n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,t);return e},isNotEnumValue(e,r,t){const n=Jt(r);if(n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,t);return e}},checkWrap:{isEnumValue(e,r){if(Jt(r).includes(e))return e},isNotEnumValue(e,r){if(!Jt(r).includes(e))return e}},waitUntil:{isEnumValue:L(Tf.isEnumValue),isNotEnumValue:L(Tf.isNotEnumValue)}},Pf={entriesEqual(e,r,t){if(!e||typeof e!="object")throw new w(`${x(e)} is not an object.`,t);if(!r||typeof r!="object")throw new w(`${x(r)} is not an object.`,t);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).forEach(o=>{const a=e[o],s=r[o];if(a!==s)throw new w(`Entries are not equal at key '${String(o)}'.`,t)})},notEntriesEqual(e,r,t){if(!e||typeof e!="object"||!r||typeof r!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(a=>{const s=e[a],l=r[a];return s!==l}))throw new w("Entries are equal.",t)}},L2={assert:Pf,check:{entriesEqual(e,r){return!e||typeof e!="object"||!r||typeof r!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).every(n=>{const o=e[n],a=r[n];return o===a})},notEntriesEqual(e,r){return!e||typeof e!="object"||!r||typeof r!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(n=>{const o=e[n],a=r[n];return o!==a})}},assertWrap:{entriesEqual(e,r,t){if(!e||typeof e!="object")throw new w(`${x(e)} is not an object.`,t);if(!r||typeof r!="object")throw new w(`${x(r)} is not an object.`,t);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).forEach(o=>{const a=e[o],s=r[o];if(a!==s)throw new w(`Entries are not equal at key '${String(o)}'.`,t)}),e},notEntriesEqual(e,r,t){if(!e||typeof e!="object"||!r||typeof r!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(a=>{const s=e[a],l=r[a];return s!==l}))return e;throw new w("Entries are equal.",t)}},checkWrap:{entriesEqual(e,r){if(!e||typeof e!="object"||!r||typeof r!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).every(o=>{const a=e[o],s=r[o];return a===s}))return e},notEntriesEqual(e,r){if(!e||typeof e!="object"||!r||typeof r!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(r)])).some(o=>{const a=e[o],s=r[o];return a!==s}))return e}},waitUntil:{entriesEqual:L(Pf.entriesEqual),notEntriesEqual:L(Pf.notEntriesEqual)}};function xc(e,r){return JSON.stringify(e)===JSON.stringify(r)}i(xc,"baseJsonEquals");function Al(e,r){if(!(e===r||xc(e,r))){if(e!=null&&r!=null&&typeof e=="object"&&typeof r=="object"){const t=Object.keys(e).sort(),n=Object.keys(r).sort();if(t.length!==n.length)throw new Error("Values are not JSON equal.");if(!xc(t,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(a=>{try{Al(e[a],r[a])}catch(s){throw new Error(`JSON objects are not equal at key '${a}': ${tt(s)}`)}})}throw new Error("Values are not JSON equal.")}}i(Al,"recursiveAssertJsonEquals");function il(e,r){if(e===r||xc(e,r))return!0;if(e!=null&&r!=null&&typeof e=="object"&&typeof r=="object"){const t=Object.keys(e).sort(),n=Object.keys(r).sort();return t.length!==n.length||!xc(t,n)?!1:Object.keys(e).every(a=>il(e[a],r[a]))}return!1}i(il,"recursiveCheckJsonEquals");const Nf={jsonEquals(e,r,t){try{Al(e,r)}catch(n){throw new w(tt(n),t)}},notJsonEquals(e,r,t){try{Al(e,r)}catch{return}throw new w("Values are JSON equal.",t)}},j2={assert:Nf,check:{jsonEquals(e,r){return il(e,r)},notJsonEquals(e,r){return!il(e,r)}},assertWrap:{jsonEquals(e,r,t){try{return Al(e,r),e}catch(n){throw new w(tt(n),t)}},notJsonEquals(e,r,t){try{Al(e,r)}catch{return e}throw new w("Values are JSON equal.",t)}},checkWrap:{jsonEquals(e,r){if(il(e,r))return e},notJsonEquals(e,r){if(!il(e,r))return e}},waitUntil:{jsonEquals:L(Nf.jsonEquals),notJsonEquals:L(Nf.notJsonEquals)}};function lb(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const r=e[Symbol.toStringTag];return typeof r=="string"?r:Object.prototype.toString.call(e).slice(8,-1)}i(lb,"type$1");function U2(){this._key="chai/deep-eql__"+Math.random()+Date.now()}i(U2,"FakeMap");U2.prototype={get:i(function(r){return r[this._key]},"get"),set:i(function(r,t){Object.isExtensible(r)&&Object.defineProperty(r,this._key,{value:t,configurable:!0})},"set")};var _2=typeof WeakMap=="function"?WeakMap:U2;function ub(e,r,t){if(!t||Xa(e)||Xa(r))return null;var n=t.get(e);if(n){var o=n.get(r);if(typeof o=="boolean")return o}return null}i(ub,"memoizeCompare");function Bu(e,r,t,n){if(!(!t||Xa(e)||Xa(r))){var o=t.get(e);o?o.set(r,n):(o=new _2,o.set(r,n),t.set(e,o))}}i(Bu,"memoizeSet");function Bn(e,r,t){if(t&&t.comparator)return cb(e,r,t);var n=z2(e,r);return n!==null?n:cb(e,r,t)}i(Bn,"deepEqual");function z2(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r?!0:Xa(e)||Xa(r)?!1:null}i(z2,"simpleEqual");function cb(e,r,t){t=t||{},t.memoize=t.memoize===!1?!1:t.memoize||new _2;var n=t&&t.comparator,o=ub(e,r,t.memoize);if(o!==null)return o;var a=ub(r,e,t.memoize);if(a!==null)return a;if(n){var s=n(e,r);if(s===!1||s===!0)return Bu(e,r,t.memoize,s),s;var l=z2(e,r);if(l!==null)return l}var u=lb(e);if(u!==lb(r))return Bu(e,r,t.memoize,!1),!1;Bu(e,r,t.memoize,!0);var f=k6(e,r,u,t);return Bu(e,r,t.memoize,f),f}i(cb,"extensiveDeepEqual");function k6(e,r,t,n){switch(t){case"String":case"Number":case"Boolean":case"Date":return Bn(e.valueOf(),r.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===r;case"Error":return q2(e,r,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return zi(e,r,n);case"RegExp":return $6(e,r);case"Generator":return x6(e,r,n);case"DataView":return zi(new Uint8Array(e.buffer),new Uint8Array(r.buffer),n);case"ArrayBuffer":return zi(new Uint8Array(e),new Uint8Array(r),n);case"Set":return db(e,r,n);case"Map":return db(e,r,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(r);case"Temporal.Duration":return e.total("nanoseconds")===r.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===r.toString();default:return C6(e,r,n)}}i(k6,"extensiveDeepEqualByType");function $6(e,r){return e.toString()===r.toString()}i($6,"regexpEqual");function db(e,r,t){try{if(e.size!==r.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(i(function(s,l){n.push([s,l])},"gatherEntries")),r.forEach(i(function(s,l){o.push([s,l])},"gatherEntries")),zi(n.sort(),o.sort(),t)}i(db,"entriesEqual");function zi(e,r,t){var n=e.length;if(n!==r.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(Bn(e[o],r[o],t)===!1)return!1;return!0}i(zi,"iterableEqual");function x6(e,r,t){return zi(lg(e),lg(r),t)}i(x6,"generatorEqual");function D6(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}i(D6,"hasIteratorFunction");function fb(e){if(D6(e))try{return lg(e[Symbol.iterator]())}catch{return[]}return[]}i(fb,"getIteratorEntries");function lg(e){for(var r=e.next(),t=[r.value];r.done===!1;)r=e.next(),t.push(r.value);return t}i(lg,"getGeneratorEntries");function gb(e){var r=[];for(var t in e)r.push(t);return r}i(gb,"getEnumerableKeys");function hb(e){for(var r=[],t=Object.getOwnPropertySymbols(e),n=0;n<t.length;n+=1){var o=t[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&r.push(o)}return r}i(hb,"getEnumerableSymbols");function q2(e,r,t,n){var o=t.length;if(o===0)return!0;for(var a=0;a<o;a+=1)if(Bn(e[t[a]],r[t[a]],n)===!1)return!1;return!0}i(q2,"keysEqual");function C6(e,r,t){var n=gb(e),o=gb(r),a=hb(e),s=hb(r);if(n=n.concat(a),o=o.concat(s),n.length&&n.length===o.length)return zi(pb(n).sort(),pb(o).sort())===!1?!1:q2(e,r,n,t);var l=fb(e),u=fb(r);return l.length&&l.length===u.length?(l.sort(),u.sort(),zi(l,u,t)):n.length===0&&l.length===0&&o.length===0&&u.length===0}i(C6,"objectEqual");function Xa(e){return e===null||typeof e!="object"}i(Xa,"isPrimitive");function pb(e){return e.map(i(function(t){return typeof t=="symbol"?t.toString():t},"mapSymbol"))}i(pb,"mapSymbols");class Va extends w{static{i(this,"DiffError")}name="DiffError";constructor(r,t,n,o){const a=l4(t,n);super([r,mh(a)].join(`
`),o)}}function Ko(e,r){return typeof e=="function"&&typeof r=="function"?!0:null}i(Ko,"customComparator");const Vo={strictEquals(e,r,t){if(e!==r)throw typeof e=="object"&&e||typeof r=="object"&&r?new w(`Strict reference equality failed for 

${x(r)}

.`,t):new Va("Not strictly equal.",e,r,t)},notStrictEquals(e,r,t){if(e===r)throw typeof e=="object"&&e?new w(`Strict reference INequality failed for 

${x(r)}

.`,t):new w(`

${x(e)}

strictly equals

${x(r)}

`,t)},looseEquals(e,r,t){if(e!=r)throw typeof e=="object"&&e||typeof r=="object"&&r?new w(`Loose reference equality failed for 

${x(r)}

.`,t):new Va("Not loosely equal.",e,r,t)},notLooseEquals(e,r,t){if(e==r)throw typeof e=="object"&&e?new w(`Loose reference INequality failed for 

${x(r)}

.`,t):new w(`

${x(e)}

loosely equals

${x(r)}

`,t)},deepEquals(e,r,t){if(!Bn(e,r,{comparator:Ko}))throw new Va("Not deeply equal.",e,r,t)},notDeepEquals(e,r,t){if(Bn(e,r,{comparator:Ko}))throw new w(`

${x(e)}

deeply equals

${x(r)}

`,t)}},V2=Vo.deepEquals,W2={assert:Vo,check:{strictEquals(e,r){return e===r},notStrictEquals(e,r){return e!==r},looseEquals(e,r){return e==r},notLooseEquals(e,r){return e!=r},deepEquals(e,r){return Bn(e,r,{comparator:Ko})},notDeepEquals(e,r){return!Bn(e,r,{comparator:Ko})}},assertWrap:{strictEquals(e,r,t){if(e===r)return e;throw typeof e=="object"&&e||typeof r=="object"&&r?new w(`Strict reference equality failed for 

${x(r)}

.`,t):new Va("Not strictly equal.",e,r,t)},notStrictEquals(e,r,t){if(e===r)throw typeof e=="object"&&e?new w(`Strict reference INequality failed for 

${x(r)}

.`,t):new w(`

${x(e)}

strictly equals

${x(r)}

`,t);return e},looseEquals(e,r,t){if(e==r)return e;throw typeof e=="object"&&e||typeof r=="object"&&r?new w(`Loose reference equality failed for 

${x(r)}

.`,t):new Va("Not loosely equal.",e,r,t)},notLooseEquals(e,r,t){if(e==r)throw typeof e=="object"&&e?new w(`Loose reference INequality failed for 

${x(r)}

.`,t):new w(`

${x(e)}

loosely equals

${x(r)}

`,t);return e},deepEquals(e,r,t){if(Bn(e,r,{comparator:Ko}))return e;throw new Va("Not deeply equal.",e,r,t)},notDeepEquals(e,r,t){if(Bn(e,r,{comparator:Ko}))throw new w(`

${x(e)}

deeply equals

${x(r)}

`,t);return e}},checkWrap:{strictEquals(e,r){if(e===r)return e},notStrictEquals(e,r){if(e!==r)return e},looseEquals(e,r){if(e==r)return e},notLooseEquals(e,r){if(e!==r)return e},deepEquals(e,r){if(Bn(e,r,{comparator:Ko}))return e},notDeepEquals(e,r){if(!Bn(e,r,{comparator:Ko}))return e}},waitUntil:{strictEquals:L(Vo.strictEquals),notStrictEquals:L(Vo.notStrictEquals),looseEquals:L(Vo.looseEquals),notLooseEquals:L(Vo.notLooseEquals),deepEquals:L(Vo.deepEquals),notDeepEquals:L(Vo.notDeepEquals)}};function Zt(e,r){if(typeof e=="string")return typeof r=="string"&&e.includes(r);let t=!0;try{t=Reflect.ownKeys(e).map(n=>e[n]).includes(r)}catch{return!1}return t}i(Zt,"hasValue");function yn(e,r){return typeof r=="string"?r.includes(e):Zt(r,e)}i(yn,"isIn");const mo={hasValue(e,r,t){if(!Zt(e,r))throw new w(`'${x(e)}' does not have value '${x(r)}'.`,t)},lacksValue(e,r,t){if(Zt(e,r))throw new w(`'${x(e)}' has value '${x(r)}'.`,t)},hasValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(a=>e[a]);n=r.filter(a=>!o.includes(a))}catch{throw new w(`'${x(e)}' does not have values '${x(r)}'.`,t)}if(n.length)throw new w(`'${x(e)}' does not have values '${x(n)}'.`,t)},lacksValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(a=>e[a]);n=r.filter(a=>o.includes(a))}catch{}if(n.length)throw new w(`'${x(e)}' has values '${x(n)}'.`,t)},isIn(e,r,t){if(!yn(e,r))throw new w(`'${x(e)}'

is not in

${x(r)}.`,t)},isNotIn(e,r,t){if(yn(e,r))throw new w(`'${x(e)}'

is in

${x(r)}.`,t)},isEmpty(e,r){if(typeof e!="string"&&typeof e!="object")throw new w(`'${x(e)}' is not empty.`,r);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new w(`'${x(e)}' is not empty.`,r)},isNotEmpty(e,r){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new w(`'${x(e)}' is not empty.`,r)}else if(Array.isArray(e)){if(!e.length)throw new w(`'${x(e)}' is not empty.`,r)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new w(`'${x(e)}' is not empty.`,r)}else if(typeof e=="object"&&!Object.keys(e).length)throw new w(`'${x(e)}' is not empty.`,r)}}},K2={assert:mo,check:{hasValue(e,r){return Zt(e,r)},lacksValue(e,r){return!Zt(e,r)},hasValues(e,r){return r.every(t=>Zt(e,t))},lacksValues(e,r){return r.every(t=>!Zt(e,t))},isIn(e,r){return yn(e,r)},isNotIn(e,r){return!yn(e,r)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,r,t){if(!Zt(e,r))throw new w(`'${x(e)}' does not have value '${x(r)}'.`,t);return e},lacksValue(e,r,t){if(Zt(e,r))throw new w(`'${x(e)}' has value '${x(r)}'.`,t);return e},hasValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(a=>e[a]);n=r.filter(a=>!o.includes(a))}catch{throw new w(`'${x(e)}' does not have values '${x(r)}'.`,t)}if(n.length)throw new w(`'${x(e)}' does not have values '${x(n)}'.`,t);return e},lacksValues(e,r,t){let n=[];if(typeof e=="string")n=r.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(a=>e[a]);n=r.filter(a=>o.includes(a))}catch{}if(n.length)throw new w(`'${x(e)}' has values '${x(n)}'.`,t);return e},isIn(e,r,t){if(!yn(e,r))throw new w(`'${x(e)}'

is not in

${x(r)}.`,t);return e},isNotIn(e,r,t){if(yn(e,r))throw new w(`'${x(e)}'

is in

${x(r)}.`,t);return e},isEmpty(e,r){if(typeof e!="string"&&typeof e!="object")throw new w(`'${x(e)}' is not empty.`,r);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new w(`'${x(e)}' is not empty.`,r)},isNotEmpty(e,r){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new w(`'${x(e)}' is empty.`,r)}else if(Array.isArray(e)){if(!e.length)throw new w(`'${x(e)}' is empty.`,r)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new w(`'${x(e)}' is empty.`,r)}else if(typeof e=="object"&&!Object.keys(e).length)throw new w(`'${x(e)}' is empty.`,r);return e}},checkWrap:{hasValue(e,r){if(Zt(e,r))return e},lacksValue(e,r){if(!Zt(e,r))return e},hasValues(e,r){if(r.every(t=>Zt(e,t)))return e},lacksValues(e,r){if(!r.every(t=>Zt(e,t)))return e},isIn(e,r){if(yn(e,r))return e},isNotIn(e,r){if(!yn(e,r))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:L(mo.hasValue),lacksValue:L(mo.lacksValue),hasValues:L(mo.hasValues),lacksValues:L(mo.lacksValues),isIn:L(mo.isIn),isNotIn:L(mo.isNotIn),isEmpty:L(mo.isEmpty),isNotEmpty:L(mo.isNotEmpty)}},If={isHttpStatus(e,r){if(!vo(e,P))throw new w(`${x(e)} is not a valid HTTP status.`,r)},isHttpStatusCategory(e,r,t){if(vo(e,P)){if(!yn(e,nc[r]))throw new w(`${x(e)} is not a '${r}' HTTP status.`,t)}else throw new w(`${x(e)} is not a valid HTTP status.`,t)}},H2={assert:If,check:{isHttpStatus(e){return vo(e,P)},isHttpStatusCategory(e,r){return vo(e,P)&&yn(e,nc[r])}},assertWrap:{isHttpStatus(e,r){if(!vo(e,P))throw new w(`${x(e)} is not a valid HTTP status.`,r);return e},isHttpStatusCategory(e,r,t){if(vo(e,P)){if(!yn(e,nc[r]))throw new w(`${x(e)} is not a '${r}' HTTP status.`,t)}else throw new w(`${x(e)} is not a valid HTTP status.`,t);return e}},checkWrap:{isHttpStatus(e){if(vo(e,P))return e},isHttpStatusCategory(e,r){if(vo(e,P)&&yn(e,nc[r]))return e}},waitUntil:{isHttpStatus:L(If.isHttpStatus),isHttpStatusCategory:L(If.isHttpStatusCategory)}},Bf={instanceOf(e,r,t){if(!(e instanceof r))throw new w(`'${x(e)}' is not an instance of '${r.name}'`,t)},notInstanceOf(e,r,t){if(e instanceof r)throw new w(`'${x(e)}' is an instance of '${r.name}'`,t)}},G2={assert:Bf,check:{instanceOf(e,r){return e instanceof r},notInstanceOf(e,r){return!(e instanceof r)}},assertWrap:{instanceOf(e,r,t){if(e instanceof r)return e;throw new w(`'${x(e)}' is not an instance of '${r.name}'`,t)},notInstanceOf(e,r,t){if(e instanceof r)throw new w(`'${x(e)}' is an instance of '${r.name}'`,t);return e}},checkWrap:{instanceOf(e,r){if(e instanceof r)return e},notInstanceOf(e,r){if(!(e instanceof r))return e}},waitUntil:{instanceOf:L(Bf.instanceOf),notInstanceOf:L(Bf.notInstanceOf)}},E6=[(e,r)=>r in e,(e,r)=>r in e.constructor.prototype];function dr(e,r){return E6.some(t=>{try{return t(e,r)}catch{return!1}})}i(dr,"hasKey");const Ti={isKeyOf(e,r,t){if(!dr(r,e))throw new w(`'${String(e)}' is not a key of '${x(r)}'.`,t)},isNotKeyOf(e,r,t){if(dr(r,e))throw new w(`'${String(e)}' is a key of '${x(r)}'.`,t)},hasKey(e,r,t){if(!dr(e,r))throw new w(`'${x(e)}' does not have key '${String(r)}'.`,t)},lacksKey(e,r,t){if(dr(e,r))throw new w(`'${x(e)}' has key '${String(r)}'.`,t)},hasKeys(e,r,t){const n=r.filter(o=>!dr(e,o));if(n.length)throw new w(`'${x(e)}' does not have keys '${n.join(",")}'.`,t)},lacksKeys(e,r,t){const n=r.filter(o=>dr(e,o));if(n.length)throw new w(`'${x(e)}' does not lack keys '${n.join(",")}'.`,t)}},Z2={assert:Ti,check:{isKeyOf(e,r){return dr(r,e)},isNotKeyOf(e,r){return!dr(r,e)},hasKey:dr,lacksKey(e,r){return!dr(e,r)},hasKeys(e,r){return r.every(t=>dr(e,t))},lacksKeys(e,r){return r.every(t=>!dr(e,t))}},assertWrap:{isKeyOf(e,r,t){if(!dr(r,e))throw new w(`'${String(e)}' is not a key of '${x(r)}'.`,t);return e},isNotKeyOf(e,r,t){if(dr(r,e))throw new w(`'${String(e)}' is a key of '${x(r)}'.`,t);return e},hasKey(e,r,t){if(!dr(e,r))throw new w(`'${x(e)}' does not have key '${String(r)}'.`,t);return e},lacksKey(e,r,t){if(dr(e,r))throw new w(`'${x(e)}' has key '${String(r)}'.`,t);return e},hasKeys(e,r,t){const n=r.filter(o=>!dr(e,o));if(n.length)throw new w(`'${x(e)}' does not have keys '${n.join(",")}'.`,t);return e},lacksKeys(e,r,t){const n=r.filter(o=>dr(e,o));if(n.length)throw new w(`'${x(e)}' does not lack keys '${n.join(",")}'.`,t);return e}},checkWrap:{isKeyOf(e,r){if(dr(r,e))return e},isNotKeyOf(e,r){if(!dr(r,e))return e},hasKey(e,r){if(dr(e,r))return e},lacksKey(e,r){if(!dr(e,r))return e},hasKeys(e,r){if(r.every(t=>dr(e,t)))return e},lacksKeys(e,r){if(r.every(t=>!dr(e,t)))return e}},waitUntil:{isKeyOf:L(Ti.isKeyOf),isNotKeyOf:L(Ti.isNotKeyOf),hasKey:L(Ti.hasKey),lacksKey:L(Ti.lacksKey),hasKeys:L(Ti.hasKeys),lacksKeys:L(Ti.lacksKeys)}};function A6(e,r,t){if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)<r)throw new w(`Length '${e.length}' is not at least '${r}'.`,t)}i(A6,"isLengthAtLeast");function F6(e,r,t){if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)!==r)throw new w(`Length '${e.length}' is not exactly '${r}'.`,t)}i(F6,"isLengthExactly");const Of={isLengthAtLeast:A6,isLengthExactly:F6},Y2={assert:Of,check:{isLengthAtLeast:i(((e,r)=>(Array.isArray(e)||typeof e=="string"?e.length:We(e).length)>=r),"isLengthAtLeast"),isLengthExactly:i(((e,r)=>(Array.isArray(e)||typeof e=="string"?e.length:We(e).length)===r),"isLengthExactly")},assertWrap:{isLengthAtLeast:i(((e,r,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)<r)throw new w(`Length '${e.length}' is not at least '${r}'.`,t);return e}),"isLengthAtLeast"),isLengthExactly:i(((e,r,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)!==r)throw new w(`Length '${e.length}' is not exactly '${r}'.`,t);return e}),"isLengthExactly")},checkWrap:{isLengthAtLeast:i(((e,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)>=r)return e}),"isLengthAtLeast"),isLengthExactly:i(((e,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)===r)return e}),"isLengthExactly")},waitUntil:{isLengthAtLeast:L(Of.isLengthAtLeast),isLengthExactly:L(Of.isLengthExactly)}},M6={never(e){throw new w("This code should not have executed.",e)}},J2={assert:M6,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Rf={isDefined(e,r){if(e==null)throw new w(`'${x(e)}' is not defined.`,r)},isNullish(e,r){if(e!=null)throw new w(`'${x(e)}' is not a nullish.`,r)}},X2={assert:Rf,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,r){if(e==null)throw new w(`'${x(e)}' is not defined.`,r);return e},isNullish(e,r){if(e==null)return e;throw new w(`'${x(e)}' is not nullish.`,r)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:L(Rf.isDefined),isNullish:L(Rf.isNullish)}},It={isInBounds(e,{max:r,min:t},n){if(e<t||r<e)throw new w(`${e} is not within the bounds ${x({min:t,max:r})}`,n)},isOutBounds(e,{min:r,max:t},n){if(r<=e&&e<=t)throw new w(`${e} is not outside the bounds ${x({min:r,max:t})}`,n)},isInteger(e,r){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new w(`${e} is not an integer.`,r)},isNotInteger(e,r){if(Number.isInteger(e))throw new w(`${e} is an integer.`,r)},isAbove(e,r,t){if(e<=r)throw new w(`${e} is not above ${r}`,t)},isAtLeast(e,r,t){if(e<r)throw new w(`${e} is not at least ${r}`,t)},isBelow(e,r,t){if(e>=r)throw new w(`${e} is not below ${r}`,t)},isAtMost(e,r,t){if(e>r)throw new w(`${e} is not at most ${r}`,t)},isNaN(e,r){if(!isNaN(e))throw new w(`${e} is not NaN`,r)},isFinite(e,r){if(isNaN(e)||e===1/0||e===-1/0)throw new w(`${e} is not finite`,r)},isInfinite(e,r){if(e!==1/0&&e!==-1/0)throw new w(`${e} is not infinite`,r)},isApproximately(e,r,t,n){if(e<r-t||e>r+t)throw new w(`${e} is not within ±${t} of ${r}`,n)},isNotApproximately(e,r,t,n){if(e>=r-t&&e<=r+t)throw new w(`${e} is within ±${t} of ${r}`,n)}},Q2={assert:It,check:{isInBounds(e,{max:r,min:t}){return t<=e&&e<=r},isOutBounds(e,{max:r,min:t}){return e<t||r<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,r){return e>r},isAtLeast(e,r){return e>=r},isBelow(e,r){return e<r},isAtMost(e,r){return e<=r},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,r,t){return r-t<=e&&e<=r+t},isNotApproximately(e,r,t){return e<r-t||e>r+t}},assertWrap:{isInBounds(e,{max:r,min:t},n){if(e<t||r<e)throw new w(`${e} is not within the bounds ${x({min:t,max:r})}`,n);return e},isOutBounds(e,{min:r,max:t},n){if(r<=e&&e<=t)throw new w(`${e} is not outside the bounds ${x({min:r,max:t})}`,n);return e},isInteger(e,r){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new w(`${e} is not an integer.`,r);return e},isNotInteger(e,r){if(Number.isInteger(e))throw new w(`${e} is an integer.`,r);return e},isAbove(e,r,t){if(e<=r)throw new w(`${e} is not above ${r}`,t);return e},isAtLeast(e,r,t){if(e<r)throw new w(`${e} is not at least ${r}`,t);return e},isBelow(e,r,t){if(e>=r)throw new w(`${e} is not below ${r}`,t);return e},isAtMost(e,r,t){if(e>r)throw new w(`${e} is not at most ${r}`,t);return e},isNaN(e,r){if(!isNaN(e))throw new w(`${e} is not NaN`,r);return e},isFinite(e,r){if(isNaN(e)||e===1/0||e===-1/0)throw new w(`${e} is not finite`,r);return e},isInfinite(e,r){if(e!==1/0&&e!==-1/0)throw new w(`${e} is not infinite`,r);return e},isApproximately(e,r,t,n){if(e<r-t||e>r+t)throw new w(`${e} is not within ±${t} of ${r}`,n);return e},isNotApproximately(e,r,t,n){if(e>=r-t&&e<=r+t)throw new w(`${e} is within ±${t} of ${r}`,n);return e}},checkWrap:{isInBounds(e,{max:r,min:t}){if(t<=e&&e<=r)return e},isOutBounds(e,{max:r,min:t}){if(e<t||r<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,r){if(e>r)return e},isAtLeast(e,r){if(e>=r)return e},isBelow(e,r){if(e<r)return e},isAtMost(e,r){if(e<=r)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,r,t){if(r-t<=e&&e<=r+t)return e},isNotApproximately(e,r,t){if(e<r-t||e>r+t)return e}},waitUntil:{isInBounds:L(It.isInBounds),isOutBounds:L(It.isOutBounds),isInteger:L(It.isInteger),isNotInteger:L(It.isNotInteger),isAbove:L(It.isAbove),isAtLeast:L(It.isAtLeast),isBelow:L(It.isBelow),isAtMost:L(It.isAtMost),isNaN:L(It.isNaN),isFinite:L(It.isFinite),isInfinite:L(It.isInfinite),isApproximately:L(It.isApproximately),isNotApproximately:L(It.isNotApproximately)}};function S6(e,r,t,n,o){return iu(...ud(e,r,t,n,o),!1)}i(S6,"assertOutput");function ud(e,r,t,n,o){const a=Array.isArray(t);return[a?e:V2,a?r:e,a?t:r,a?n:t,a?o:n]}i(ud,"extractOutputArgs");function iu(e,r,t,n,o,a){const s=r(...t);if(s instanceof Promise)return new Promise(async(l,u)=>{try{const f=await s;e(f,n),a?l(f):l()}catch(f){u(new w(`Output from '${r.name}' did not produce expected output. ${tt(f)}`,o))}});try{return e(s,n),a?s:void 0}catch(l){throw new w(`Output from '${r.name}' did not produce expected output. ${tt(l)}`,o)}}i(iu,"innerAssertOutput");function T6(e,r,t,n,o){try{const a=iu(...ud(e,r,t,n,o),!1);return a instanceof Promise?new Promise(async s=>{try{await a,s(!0)}catch{s(!1)}}):!0}catch{return!1}}i(T6,"checkOutput");function P6(e,r,t,n,o){return iu(...ud(e,r,t,n,o),!0)}i(P6,"assertWrapOutput");function N6(e,r,t,n,o){try{const a=iu(...ud(e,r,t,n,o),!0);return a instanceof Promise?new Promise(async s=>{try{s(await a)}catch{s(void 0)}}):a}catch{return}}i(N6,"checkWrapOutput");const Lf=Symbol("not set");async function I6(e,r,t,n,o,a){const s=Array.isArray(t),l=s?e:V2,u=s?r:e,f=s?t:r,g=s?n:t,h=I2(s?o:n),p=s?a:o,m=Ja(h.timeout,{milliseconds:!0}).milliseconds,v=Ja(h.interval,{milliseconds:!0});let $=Lf,C;async function E(){try{$=await iu(l,u,f,g,void 0,!0)}catch(I){$=Lf,C=Dr(I)}}i(E,"checkCondition");const A=Date.now();for(;$===Lf;)if(await E(),await Ji(v),Date.now()-A>=m)throw la(C,sa(p,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return $}i(I6,"waitUntilOutput");const B6={output:S6},ew={assert:B6,check:{output:T6},assertWrap:{output:P6},checkWrap:{output:N6},waitUntil:{output:I6}},qs={isPropertyKey(e,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new w(`'${x(e)}' is not a PropertyKey.`,r)},isNotPropertyKey(e,r){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new w(`'${x(e)}' is a PropertyKey.`,r)},isPrimitive(e,r){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new w(`'${x(e)}' is not a Primitive.`,r)},isNotPrimitive(e,r){if(e===null||typeof e!="object"&&typeof e!="function")throw new w(`'${x(e)}' is not a Primitive.`,r)}},rw={assert:qs,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,r){if(e===null||typeof e!="object"&&typeof e!="function")throw new w(`'${x(e)}' is not a Primitive.`,r);return e},isNotPropertyKey(e,r){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new w(`'${x(e)}' is a PropertyKey.`,r);return e},isPrimitive(e,r){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new w(`'${x(e)}' is not a Primitive.`,r);return e},isPropertyKey(e,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new w(`'${x(e)}' is not a PropertyKey.`,r);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:L(qs.isNotPrimitive),isNotPropertyKey:L(qs.isNotPropertyKey),isPrimitive:L(qs.isPrimitive),isPropertyKey:L(qs.isPropertyKey)}},Vs={isPromiseLike(e,r){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new w(`'${x(e)}' is not a PromiseLike.`,r)},isNotPromiseLike(e,r){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new w(`'${x(e)}' is a PromiseLike.`,r)},isPromise(e,r){if(!(e instanceof Promise))throw new w(`'${x(e)}' is not a Promise.`,r)},isNotPromise(e,r){if(e instanceof Promise)throw new w(`'${x(e)}' is a Promise.`,r)}},tw={assert:Vs,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,r){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new w(`'${x(e)}' is not a PromiseLike.`,r);return e},isNotPromiseLike(e,r){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new w(`'${x(e)}' is a PromiseLike.`,r);return e},isPromise(e,r){if(!(e instanceof Promise))throw new w(`'${x(e)}' is not a Promise.`,r);return e},isNotPromise(e,r){if(e instanceof Promise)throw new w(`'${x(e)}' is a Promise.`,r);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:L(Vs.isPromiseLike,!0),isNotPromiseLike:L(Vs.isNotPromiseLike,!0),isPromise:L(Vs.isPromise,!0),isNotPromise:L(Vs.isNotPromise,!0)}},jf={matches(e,r,t){if(!r.test(e))throw new w(`'${e}' does not match ${r}`,t)},mismatches(e,r,t){if(r.test(e))throw new w(`'${e}' matches ${r}`,t)}},nw={assert:jf,check:{matches(e,r){return r.test(e)},mismatches(e,r){return!r.test(e)}},assertWrap:{matches(e,r,t){if(!r.test(e))throw new w(`'${e}' does not match ${r}`,t);return e},mismatches(e,r,t){if(r.test(e))throw new w(`'${e}' matches ${r}`,t);return e}},checkWrap:{matches(e,r){if(r.test(e))return e},mismatches(e,r){if(!r.test(e))return e}},waitUntil:{matches:L(jf.matches,!0),mismatches:L(jf.mismatches,!0)}},gr={isArray(e,r){if(!Array.isArray(e))throw new w(`'${x(e)}' is not an array.`,r)},isBigInt(e,r){if(typeof e!="bigint")throw new w(`'${x(e)}' is not a bigint.`,r)},isBoolean(e,r){if(typeof e!="boolean")throw new w(`'${x(e)}' is not a boolean.`,r)},isFunction(e,r){if(typeof e!="function")throw new w(`'${x(e)}' is not a function.`,r)},isNull(e,r){if(e!==null)throw new w(`'${x(e)}' is not nul.`,r)},isNumber(e,r){if(typeof e!="number"||isNaN(e))throw new w(`'${x(e)}' is not a number.`,r)},isObject(e,r){if(Array.isArray(e)||typeof e!="object"||!e)throw new w(`'${x(e)}' is not a non-null object.`,r)},isPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new w(`'${x(e)}' is not a plain object.`,r)},isString(e,r){if(typeof e!="string")throw new w(`'${x(e)}' is not a string.`,r)},isSymbol(e,r){if(typeof e!="symbol")throw new w(`'${x(e)}' is not a symbol.`,r)},isUndefined(e,r){if(typeof e<"u")throw new w(`'${x(e)}' is not a undefined.`,r)},isNotArray(e,r){if(Array.isArray(e))throw new w(`'${x(e)}' is an array.`,r)},isNotBigInt(e,r){if(typeof e=="bigint")throw new w(`'${x(e)}' is a bigint.`,r)},isNotBoolean(e,r){if(typeof e=="boolean")throw new w(`'${x(e)}' is a boolean.`,r)},isNotFunction(e,r){if(typeof e=="function")throw new w(`'${x(e)}' is a function.`,r)},isNotNull(e,r){if(e===null)throw new w(`'${x(e)}' is a null.`,r)},isNotNumber(e,r){if(typeof e=="number"&&!isNaN(e))throw new w(`'${x(e)}' is a number.`,r)},isNotObject(e,r){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new w(`'${x(e)}' is a non-null object.`,r)},isNotPlainObject(e,r){const t=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new w(`'${x(e)}' is a plain object.`,r)},isNotString(e,r){if(typeof e=="string")throw new w(`'${x(e)}' is a string.`,r)},isNotSymbol(e,r){if(typeof e=="symbol")throw new w(`'${x(e)}' is a symbol.`,r)},isNotUndefined(e,r){if(typeof e>"u")throw new w(`'${x(e)}' is a undefined.`,r)}},ow={assert:gr,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const r=Object.getPrototypeOf(e);return(r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const r=Object.getPrototypeOf(e);return!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,r){if(!Array.isArray(e))throw new w(`'${x(e)}' is not an array.`,r);return e},isBigInt(e,r){if(typeof e!="bigint")throw new w(`'${x(e)}' is not a bigint.`,r);return e},isBoolean(e,r){if(typeof e!="boolean")throw new w(`'${x(e)}' is not a boolean.`,r);return e},isFunction(e,r){if(typeof e!="function")throw new w(`'${x(e)}' is not a function.`,r);return e},isNull(e,r){if(e!==null)throw new w(`'${x(e)}' is not nul.`,r);return e},isNumber(e,r){if(typeof e!="number"||isNaN(e))throw new w(`'${x(e)}' is not a number.`,r);return e},isObject(e,r){if(Array.isArray(e)||typeof e!="object"||!e)throw new w(`'${x(e)}' is not a non-null object.`,r);return e},isPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new w(`'${x(e)}' is not a plain object.`,r);return e},isString(e,r){if(typeof e!="string")throw new w(`'${x(e)}' is not a string.`,r);return e},isSymbol(e,r){if(typeof e!="symbol")throw new w(`'${x(e)}' is not a symbol.`,r);return e},isUndefined(e,r){if(typeof e<"u")throw new w(`'${x(e)}' is not a undefined.`,r);return e},isNotArray(e,r){if(Array.isArray(e))throw new w(`'${x(e)}' is an array.`,r);return e},isNotBigInt(e,r){if(typeof e=="bigint")throw new w(`'${x(e)}' is a bigint.`,r);return e},isNotBoolean(e,r){if(typeof e=="boolean")throw new w(`'${x(e)}' is a boolean.`,r);return e},isNotFunction(e,r){if(typeof e=="function")throw new w(`'${x(e)}' is a function.`,r);return e},isNotNull(e,r){if(e===null)throw new w(`'${x(e)}' is a null.`,r);return e},isNotNumber(e,r){if(typeof e=="number"&&!isNaN(e))throw new w(`'${x(e)}' is a number.`,r);return e},isNotObject(e,r){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new w(`'${x(e)}' is a non-null object.`,r);return e},isNotPlainObject(e,r){const t=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new w(`'${x(e)}' is a plain object.`,r)},isNotString(e,r){if(typeof e=="string")throw new w(`'${x(e)}' is a string.`,r);return e},isNotSymbol(e,r){if(typeof e=="symbol")throw new w(`'${x(e)}' is a symbol.`,r);return e},isNotUndefined(e,r){if(typeof e>"u")throw new w(`'${x(e)}' is a undefined.`,r);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const r=Object.getPrototypeOf(e);if((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const r=Object.getPrototypeOf(e);if(!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:L(gr.isArray),isBigInt:L(gr.isBigInt),isBoolean:L(gr.isBoolean),isFunction:L(gr.isFunction),isNull:L(gr.isNull),isNumber:L(gr.isNumber),isObject:L(gr.isObject),isPlainObject:L(gr.isPlainObject),isString:L(gr.isString),isSymbol:L(gr.isSymbol),isUndefined:L(gr.isUndefined),isNotArray:L(gr.isNotArray),isNotBigInt:L(gr.isNotBigInt),isNotBoolean:L(gr.isNotBoolean),isNotFunction:L(gr.isNotFunction),isNotNull:L(gr.isNotNull),isNotNumber:L(gr.isNotNumber),isNotObject:L(gr.isNotObject),isNotPlainObject:L(gr.isNotPlainObject),isNotString:L(gr.isNotString),isNotSymbol:L(gr.isNotSymbol),isNotUndefined:L(gr.isNotUndefined)}};var Lt;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Lt||(Lt={}));function bh(e,r,t){vh(e,{noError:"No error.",notInstance:`'${x(e)}' is not an error instance.`},r,t)}i(bh,"isError");function mb(e,r,t){vh(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${x(e)}' is not an error instance.`},r,t)}i(mb,"assertThrownError");function vh(e,r,t,n){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor)){const o=e.constructor.name;throw new w(`Error constructor '${o}' did not match expected constructor '${t.matchConstructor.name}'.`,n)}else if(t?.matchMessage){const o=tt(e);if(typeof t.matchMessage=="string"){if(!N2(o,t.matchMessage))throw new w(`Error message

'${o}'

does not contain

'${t.matchMessage}'.`,n)}else if(!o.match(t.matchMessage))throw new w(`Error message

'${o}'

does not match RegExp

'${t.matchMessage}'.`,n)}}else throw new w(r.notInstance,n);else throw new w(r.noError,n)}i(vh,"internalAssertError");function bb(e,r){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor))return!1;if(r?.matchMessage){const t=tt(e);if(typeof r.matchMessage=="string"){if(!N2(t,r.matchMessage))return!1}else if(!t.match(r.matchMessage))return!1}}else return!1;else return!1;return!0}i(bb,"internalCheckError");function cd(e,r,t,n){let o;try{const a=r instanceof Promise?r:r();if(a instanceof Promise)return new Promise(async(s,l)=>{try{await a}catch(u){o=Dr(u)}try{mb(o,t,n),e===Lt.Assert?s():e===Lt.Check?s(!0):s(o)}catch(u){e===Lt.CheckWrap?s(void 0):e===Lt.Check?s(!1):l(Dr(u))}})}catch(a){o=Dr(a)}try{return mb(o,t,n),e===Lt.Check?!0:e!==Lt.Assert?o:void 0}catch(a){if(e===Lt.CheckWrap)return;if(e===Lt.Check)return!1;throw a}}i(cd,"internalThrowsCheck");function O6(e,r,t){return cd(Lt.Assert,e,r,t)}i(O6,"throws");function R6(e,r){return cd(Lt.Check,e,r)}i(R6,"throwsCheck");function L6(e,r,t){return cd(Lt.AssertWrap,e,r,t)}i(L6,"throwsAssertWrap");function j6(e,r,t){return cd(Lt.CheckWrap,e,r,t)}i(j6,"throwsCheckWrap");const U6=L(bh);function _6(e,r,t,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,a=o?r:e,s=typeof t=="object"?n:t,l=typeof t=="object"?t:r;if(typeof a!="function")throw new TypeError(`Callback is not a function, got '${x(a)}'`);return U6(o,async()=>{try{await a();return}catch(u){return Dr(u)}},l,s)}i(_6,"throwsWaitUntil");const z6={throws:O6,isError:bh},iw={assert:z6,check:{throws:R6,isError(e,r){return bb(e,r)}},assertWrap:{throws:L6,isError(e,r,t){return vh(e,{noError:"No error.",notInstance:`'${x(e)}' is not an error instance.`},r,t),e}},checkWrap:{throws:j6,isError(e,r){if(bb(e,r))return e}},waitUntil:{throws:_6,isError:L(bh)}},Ho=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Uf={isUuid(e,r){if(!String(e).match(Ho))throw new w(`'${String(e)}' is not a UUID.`,r)},isNotUuid(e,r){if(String(e).match(Ho))throw new w(`'${String(e)}' is a UUID.`,r)}},aw={assert:Uf,check:{isUuid(e){return!!String(e).match(Ho)},isNotUuid(e){return!String(e).match(Ho)}},assertWrap:{isUuid(e,r){if(!String(e).match(Ho))throw new w(`'${String(e)}' is not a UUID.`,r);return e},isNotUuid(e,r){if(String(e).match(Ho))throw new w(`'${String(e)}' is a UUID.`,r);return e}},checkWrap:{isUuid(e){if(String(e).match(Ho))return e},isNotUuid(e){if(!String(e).match(Ho))return e}},waitUntil:{isUuid:L(Uf.isUuid),isNotUuid:L(Uf.isNotUuid)}},q6={...J2.assert,...B2.assert,...O2.assert,...L2.assert,...R2.assert,...H2.assert,...G2.assert,...j2.assert,...Z2.assert,...Y2.assert,...X2.assert,...Q2.assert,...ew.assert,...rw.assert,...tw.assert,...nw.assert,...ow.assert,...W2.assert,...iw.assert,...aw.assert,...K2.assert},yh=[B2,O2,L2,R2,H2,G2,j2,Z2,Y2,J2,X2,Q2,ew,rw,tw,nw,ow,W2,iw,aw,K2],V6=Object.assign({},...yh.map(e=>e.check)),S=Object.assign(i(function(r){return!!r},"check"),V6);function W6(e,r,t){return sc(e,r,t,new Set)}i(W6,"checkCustomDeepQuality");function sc(e,r,t,n){if(e=vb(e),r=vb(r),S.isObject(e)&&S.isObject(r)){if(n.has(e)||n.has(r))return!0;if(n.add(e),n.add(r),!sc(We(e).sort(),We(r).sort(),t,n))return!1;let o=!1;const a=We(e).map(s=>{const l=sc(e[s],r[s],t,n);return S.isPromise(l)&&(o=!0),l});return yb(o,a)}else if(S.isArray(e)&&S.isArray(r)){if(n.has(e)||n.has(r))return!0;if(n.add(e),n.add(r),e.length!==r.length)return!1;let o=!1;const a=e.map((s,l)=>{const u=sc(s,r[l],t,n);return S.isPromise(u)&&(o=!0),u});return yb(o,a)}else return t(e,r)}i(sc,"recursiveCheckCustomDeepQuality");function vb(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}i(vb,"flattenComplexObject");function yb(e,r){return e?new Promise(async(t,n)=>{try{const o=await Promise.all(r);t(o.every(S.isTrue))}catch(o){n(Dr(o))}}):r.every(S.isTrue)}i(yb,"handleMaybePromise");const K6=Object.assign({},...yh.map(e=>e.assertWrap)),lr=Object.assign(i(function(r,t){if(!r)throw new w("Assertion failed.",t);return r},"assertWrap"),K6);function H6(e){return{equals:i(()=>{},"equals"),notEquals:i(()=>{},"notEquals"),matches:i(()=>{},"matches"),notMatches:i(()=>{},"notMatches"),slowEquals:i(()=>{},"slowEquals")}}i(H6,"tsType");const G6={tsType:H6},Z6={assert:G6},Y6={fail:i(e=>{throw new w("Failure triggered.",e)},"fail")},J6={...Z6.assert,...q6,...Y6},Er=Object.assign(i(function(r,t){if(!r)throw new w("Assertion failed.",t)},"assert"),J6),X6=Object.assign({},...yh.map(e=>e.checkWrap)),dd=Object.assign(i(function(r){if(r)return r},"checkWrap"),X6);function Q6(e,r){return S.hasKey(e,"entryType")&&e.entryType===r}i(Q6,"isBookEntry");function Pi(e,r){return e.controlType===r}i(Pi,"isControlInitType");var ge;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(ge||(ge={}));const sw=Symbol("any-type"),eD={[ge.Checkbox]:!1,[ge.Color]:"",[ge.Custom]:void 0,[ge.Dropdown]:"",[ge.Hidden]:sw,[ge.Number]:0,[ge.Text]:""};function rD(e,r){if(!e)return[];const t=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===ge.Custom)return;const a=eD[o.controlType];a!==sw&&(typeof a!=typeof o.initValue&&t.push(new Error(`Control '${n}' in page '${r}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||t.push(new Error(`'${r}' cannot have an empty control name.`)))}),t}i(rD,"checkControls");function tD(e,r,t){const n=r;if(e.has(n))return e.get(n);{const o=t();return S.isPromise(o)?new Promise(async(a,s)=>{try{const l=await o;e.set(n,l),a(l)}catch(l){s(Dr(l))}}):(e.set(n,o),o)}}i(tD,"getOrSetFromMap");function ca(e,r,t){if(r in e)return e[r];{const n=t();return S.isPromise(n)?new Promise(async(o,a)=>{try{const s=await n;e[r]=s,o(s)}catch(s){a(Dr(s))}}):(e[r]=n,n)}}i(ca,"getOrSet");function Un(e){return We(e).map(r=>[r,e[r]])}i(Un,"getObjectTypedEntries");function Fl(e){return Object.fromEntries(e)}i(Fl,"typedObjectFromEntries");function En(e,r,t){return e.reduce((n,o,a,s)=>{const l=r(o,a,s);return t(l,o,a,s)&&n.push(l),n},[])}i(En,"filterMap");function nD(e,r,t={}){return e.reduce((n,o,a,s)=>{const l=r(o,a,s);return ca(n,l,()=>[]).push(o),n},{})}i(nD,"groupArrayBy");function si(e,r,t={}){try{let n=!1;const o=e.map((a,s,l)=>{const u=r(a,s,l);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(S.isTruthy);return n?new Promise(async(a,s)=>{try{const l=En(await Promise.all(o),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},S.isTruthy);a(Fl(l))}catch(l){s(Dr(l))}}):Fl(o)}catch(n){throw Dr(n)}}i(si,"arrayToObject");function oD(e,r){const t=[];let n=!1;for(let o=0;o<e;o++){const a=r(o);S.isPromise(a)&&(n=!0),t.push(a)}return n?Promise.all(t):t}i(oD,"createArray");function iD(e){return Array.isArray(e)?e:[e]}i(iD,"ensureArray");function aD({min:e,max:r}){const{min:t,max:n}=sh({min:Math.floor(e),max:Math.floor(r)}),o=n-t+1,a=Math.ceil(Math.log2(o)),s=Math.ceil(a/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${t}, max: ${n}})`);const l=Math.floor(256**s/o)*o,u=new Uint8Array(s);let f;do crypto.getRandomValues(u),f=u.reduce((g,h,p)=>g+h*256**p,0);while(f>=l);return t+f%o}i(aD,"randomInteger");const wb=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];function To(e=16){let r="";for(let t=0;t<e;t++){const n=aD({min:0,max:wb.length-1});r+=wb[n]}return r}i(To,"randomString");function lw(e){if(S.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(r=>tt(r).trim()).join(`
`))}i(lw,"combineErrors");function uw(e,r={}){try{const t=e();return t instanceof Promise?t.catch(n=>r.handleError?r.handleError(n):S.hasKey(r,"fallbackValue")?r.fallbackValue:Dr(n)):t}catch(t){return r.handleError?r.handleError(t):S.hasKey(r,"fallbackValue")?r.fallbackValue:Dr(t)}}i(uw,"wrapInTry");function In(e){try{return JSON.parse(JSON.stringify(e))}catch(r){throw console.error("Failed to JSON copy for:",e),la(r,"Failed JSON copy")}}i(In,"copyThroughJson");const sD="modulepreload",lD=i(function(e){return"/vira/book/"+e},"assetsURL"),kb={},Ml=i(function(r,t,n){let o=Promise.resolve();if(t&&t.length>0){let u=function(f){return Promise.all(f.map(g=>Promise.resolve(g).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};i(u,"allSettled"),document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");o=u(t.map(f=>{if(f=lD(f),f in kb)return;kb[f]=!0;const g=f.endsWith(".css"),h=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${h}`))return;const p=document.createElement("link");if(p.rel=g?"stylesheet":sD,g||(p.as="script"),p.crossOrigin="",p.href=f,l&&p.setAttribute("nonce",l),document.head.appendChild(p),g)return new Promise((m,v)=>{p.addEventListener("load",m),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return i(a,"handlePreloadError"),o.then(s=>{for(const l of s||[])l.status==="rejected"&&a(l.reason);return r().catch(a)})},"preload");var zr;(function(e){e.Standard="stdout",e.Error="stderr"})(zr||(zr={}));var ve;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ve||(ve={}));async function uD(){return await Ey({async[Ln.Node](){const e=(await Ml(async()=>{const{default:r}=await import("./index-aeZXflCI.js");return{default:r}},[])).default;return{[ve.Bold]:e.bold.open,[ve.Debug]:e.blueBright.open,[ve.Error]:e.red.open,[ve.Faint]:e.gray.open,[ve.Info]:e.cyan.open,[ve.Mutate]:e.magenta.open,[ve.NormalWeight]:"\x1B[22m",[ve.Plain]:"",[ve.Reset]:e.reset.open,[ve.Success]:e.green.open,[ve.Warning]:e.yellow.open}},[Ln.Web](){return Promise.resolve({[ve.Bold]:"font-weight: bold",[ve.Debug]:"color: blue",[ve.Error]:"color: red",[ve.Faint]:"color: grey",[ve.Info]:"color: teal",[ve.Mutate]:"color: magenta",[ve.NormalWeight]:"",[ve.Plain]:"",[ve.Reset]:"",[ve.Success]:"color: green",[ve.Warning]:"color: orange"})}})}i(uD,"determineDefaultLogColors");const Gt=await uD(),cD={[ve.Bold]:{colors:[Gt.bold],logType:zr.Standard},[ve.Debug]:{colors:[Gt.debug],logType:zr.Standard},[ve.Faint]:{colors:[Gt.faint],logType:zr.Standard},[ve.Info]:{colors:[Gt.info],logType:zr.Standard},[ve.Mutate]:{colors:[Gt.mutate,Gt.bold],logType:zr.Standard},[ve.NormalWeight]:{colors:[Gt.normalWeight],logType:zr.Standard},[ve.Plain]:{colors:[],logType:zr.Standard},[ve.Reset]:{colors:[Gt.reset],logType:zr.Standard},[ve.Success]:{colors:[Gt.success,Gt.bold],logType:zr.Standard},[ve.Error]:{colors:[Gt.error,Gt.bold],logType:zr.Error},[ve.Warning]:{colors:[Gt.warning],logType:zr.Error}};function St({value:e,prefix:r}){return String(e).startsWith(r)?String(e):`${r}${String(e)}`}i(St,"addPrefix");function qi({value:e,prefix:r}){return e.startsWith(r)?e.slice(r.length):e}i(qi,"removePrefix");function cw(e,r){try{let t=!1;const n=Un(e).map(([o,a])=>{const s=r(o,a,e);return s instanceof Promise?(t=!0,s):s?[s.key,s.value]:void 0}).filter(S.isTruthy);return t?new Promise(async(o,a)=>{try{const s=En(await Promise.all(n),l=>{if(l)return Array.isArray(l)?l:[l.key,l.value]},S.isTruthy);o(Fl(s))}catch(s){a(Dr(s))}}):Fl(n)}catch(t){throw Dr(t)}}i(cw,"mapObject");function dw(e,r){return cw(e,(t,n)=>{const o=n,a=r(n,e);return a instanceof Promise?a.then(s=>({key:o,value:s})):{key:o,value:a}})}i(dw,"mapEnumToObject");function fw(e,...r){const t={...e};return r.forEach(n=>{n&&Un(n).forEach(([o,a])=>{a!=null&&(t[o]=a)})}),t}i(fw,"mergeDefinedProperties");function dD(e){return e.replace(/,/g,"")}i(dD,"removeCommas");function fD(e){return typeof e=="number"?e:Number(typeof e=="string"?dD(e):e)}i(fD,"toNumber");function gD(e){const r=hD(e);if(r==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return r}i(gD,"toEnsuredNumber");function hD(e){const r=fD(e);if(!isNaN(r))return r}i(hD,"toMaybeNumber");const gw="px";function li(e){return wh({value:e,suffix:gw})}i(li,"addPx");function pD(e){return gD(kh({value:e,suffix:gw}))}i(pD,"removePx");function wh({value:e,suffix:r}){return String(e).endsWith(r)?String(e):`${String(e)}${r}`}i(wh,"addSuffix");function kh({value:e,suffix:r}){return e.endsWith(r)?e.slice(0,Math.max(0,e.length-r.length)):e}i(kh,"removeSuffix");async function mD(){return await Ey({async[Ln.Node](){const{inspect:e}=await Ml(async()=>{const{inspect:r}=await import("node:util");return{inspect:r}},[]);return({args:r,colorKey:t,options:n})=>{const o=r.map(l=>typeof l=="string"?l:e(l));return{text:[n.omitColors?"":n.colorConfig[t].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[ve.Reset].colors.join("")].join(""),css:void 0}}},[Ln.Web](){return({args:e,colorKey:r,options:t})=>{const n=t.omitColors?void 0:En(t.colorConfig[r].colors,s=>kh({value:s,suffix:";"}),S.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?tt(s):x(s)).join(`
`),t.omitColors?"":t.colorConfig[ve.Reset].colors.join("")].join(""),css:n}}}})}i(mD,"createToLogString");const bD=await mD(),vD={colorConfig:cD,omitColors:!1},yD=hw({[zr.Error](){},[zr.Standard](){}});function hw(e,r){const t=fw(vD,r);function n(a){e[t.colorConfig[a.colorKey].logType](bD({...a,options:t}))}i(n,"writeLog");const o=dw(ve,a=>(...s)=>n({args:s,colorKey:a}));return{...o,if(a){return a?o:yD}}}i(hw,"createLogger");const wD=ah(Ln.Node)?{[zr.Error]({text:e}){process.stderr.write(e+`
`)},[zr.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[zr.Error]({text:e,css:r}){console.error(St({value:e,prefix:"%c"}),r)},[zr.Standard]({text:e,css:r}){console.log(St({value:e,prefix:"%c"}),r)}},pw=hw(wD);function kD(e,{min:r,max:t}){return Math.min(Math.max(e,r),t)}i(kD,"clamp$2");function mw(e,{digits:r}){if(r==null)return e;const t=Math.pow(10,r),n=e*t;return Number((Math.round(n)/t).toFixed(r))}i(mw,"round");function $D({searchIn:e,searchFor:r,caseSensitive:t,includeLength:n}){const o=S2(P2(r,{caseSensitive:t}),"g"),a=[];return e.replace(o,(...s)=>{const l=s[s.length-2];if(typeof l!="number")throw new TypeError(`Match index "${l}" is not a number. Searching for "${r}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);a.push({index:l,length:u.length});const f=s[0];if(typeof f!="string")throw new TypeError(`Original match when searching for "${r}" in "${e}" at index ${l} is not a string.`);return f}),a}i($D,"findSubstringIndexes");function xD(e,r,{caseSensitive:t}){const n=$D({searchIn:e,searchFor:r,caseSensitive:t,includeLength:!0}),o=P2(r,{caseSensitive:t});return e.split(o).reduce((s,l,u)=>{const f=n[u],g=s.concat(l);if(f){const h=e.slice(f.index,f.index+f.length);return g.concat(h)}else return g},[])}i(xD,"splitIncludeSplit");function DD(e,r){return e.split(r)}i(DD,"safeSplit");function $b(e,r){const{min:t,max:n}=sh(r);if(r.takeOverflow){const o=n-t+1,a=(e-t)%o;return a<0?t+o+a:t+a}else return e>n?t:e<t?n:e}i($b,"wrapNumber");function Ke(e,r){let t=!1;const n=We(e).reduce((o,a)=>{const s=r(a,e[a],e);return s instanceof Promise&&(t=!0),o[a]=s,o},{});return t?new Promise(async(o,a)=>{try{await Promise.all(We(n).map(async s=>{const l=await n[s];n[s]=l})),o(n)}catch(s){a(Dr(s))}}):n}i(Ke,"mapObjectValues");function fd(e,r){const t=Un(e).filter(([n,o])=>r(n,o,e));return Fl(t)}i(fd,"filterObject");function CD(e,r){return fd(e,t=>r.includes(t))}i(CD,"pickObjectKeys");function Qa(e){return We(e).map(r=>e[r])}i(Qa,"getObjectTypedValues");function bw(e,{keepNewLines:r}={}){return r?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}i(bw,"collapseWhiteSpace");var Sl;(function(e){e.Upper="upper",e.Lower="lower"})(Sl||(Sl={}));const ED={firstLetterCase:Sl.Lower};function AD(e,r){if(!e.length)return"";const t=e[0];return(r===Sl.Upper?t.toUpperCase():t.toLowerCase())+e.slice(1)}i(AD,"setFirstLetterCasing");function FD(e,r={}){const t=e.toLowerCase();if(!t.length)return"";const n=t.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,a=>{const s=a[1];return s?s.toUpperCase():""}),o=fw(ED,r);return AD(n,o.firstLetterCase)}i(FD,"kebabCaseToCamelCase");function MD(e,r="and"){if(e.length<2)return e.join("");const t=e.length>2?", ":" ";return`${e.slice(0,-1).join(t)}${t}${r} ${e[e.length-1]}`}i(MD,"joinWithFinalConjunction");function SD({value:e,wrapper:r}){return St({value:wh({value:e,suffix:r}),prefix:r})}i(SD,"wrapString");function Wt(){function e(r){return class extends CustomEvent{static{i(this,"TypedEventConstructor")}static type=r;constructor(n){super(r,n)}}}return i(e,"defineEventTypeString"),e}i(Wt,"defineTypedCustomEvent");function gd(e,r){const t=r??Event;return class extends t{static{i(this,"TypedEventConstructor")}static type=e;constructor(o){super(e,o)}}}i(gd,"defineTypedEvent$1");class TD{static{i(this,"TypedListenTarget")}listeners={};universalListeners=new Map;getListenerCount(){return Qa(this.listeners).map(t=>t.size||0).reduce((t,n)=>t+n,0)+this.universalListeners.size}listenToAll(r,t={}){const n=i(()=>this.universalListeners.delete(r)||!1,"removeListener");function o(a,s){t.once&&n(),r(a,s)}return i(o,"wrappedCallback"),this.universalListeners.set(r,{listener:o,removeListener:n}),n}removeUniversalListener(r){return!!this.universalListeners.get(r)?.removeListener()}listen(r,t,n={}){const o=S.isString(r)?r:r.type,a=i(()=>this.listeners[o]?.delete(t)||!1,"removeListener");function s(l,u){n.once&&a(),t(l,u)}return i(s,"wrappedCallback"),ca(this.listeners,o,()=>new Map).set(t,{listener:s,removeListener:a}),a}removeListener(r,t){const n=S.isString(r)?r:r.type,o=this.listeners[n];if(!o)return!1;const a=o.get(t);return a?a.removeListener():!1}dispatch(r){const t=this.listeners[r.type];r.target==null&&Object.defineProperty(r,"target",{writable:!1,value:this});const n=t?.size||0;return t?.forEach(o=>{o.listener(r,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(r,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const t=Qa(this.listeners).reduce((n,o)=>{const a=o.size||0;return o.clear(),n+a},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),t}destroy(){this.removeAllListeners()}}class au extends TD{static{i(this,"ListenTarget")}}function oo(e,r,t,n){return e.addEventListener(r,t,n),()=>e.removeEventListener(r,t,n)}i(oo,"listenTo");function Tl(e,r,t){return oo(globalThis,e,r,t)}i(Tl,"listenToGlobal");function $h(e,r){return Pl(e.title),e.parent?[...$h(e.parent),Pl(e.parent.title)].concat([]):[]}i($h,"listUrlBreadcrumbs");function Pl(e){return bw(e).toLowerCase().replaceAll(/\s/g,"-")}i(Pl,"titleToUrlBreadcrumb");function PD({searchFor:e,searchIn:r}){return e.every((t,n)=>r[n]===t)}i(PD,"doBreadcrumbsStartWith");const ND=/[/?#&=]/;function vw(e){const r=e.match(ND);return e.trim()?Pl(e)?r?new Error(`Book page title has invalid character '${r[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}i(vw,"getPageTitleError");const ID={[ct.ElementExample]:()=>[],[ct.Page]:e=>[vw(e.title),...rD(e.controls,e.title)].filter(S.isTruthy),[ct.Root]:()=>[]},Dc="_isBookTreeNode",yw=new Map;function BD(e){return yw.get(e)}i(BD,"getTreeFromCache");function OD(e,r){tD(yw,e,()=>r)}i(OD,"addTreeToCache");function Wa(e,r){return ww(e)&&e.entry.entryType===r}i(Wa,"isBookTreeNode");function ww(e){return!!(S.hasKeys(e,[Dc,"entry"])&&e[Dc])}i(ww,"isAnyBookTreeNode");function RD(){return{[Dc]:!0,entry:{entryType:ct.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}i(RD,"createEmptyBookTreeRoot");function LD({entries:e,debug:r}){const t=BD(e);if(t)return t;const n=RD();e.forEach(s=>xh({tree:n,newEntry:s,debug:r,manuallyAdded:!0}));const o=kw(n),a={tree:n,flattenedNodes:o};return OD(e,a),r&&console.info("element-book tree:",n),a}i(LD,"createBookTreeFromEntries");function jD(e,r,t){if(!r.parent)return e;const n=ug(r,e);if(n)return n;t&&console.info(`parent of ${r.title} not found in tree; adding it now.`),xh({tree:e,newEntry:r.parent,debug:t,manuallyAdded:!1});const o=ug(r,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${$h(r).join(" > ")}`);return o}i(jD,"getOrAddImmediateParent");function xh({tree:e,newEntry:r,debug:t,manuallyAdded:n}){const o=ID[r.entryType](r);r.errors.push(...o);const a=jD(e,r,t),s=Pl(r.title),l=a.children[s];if(l){if(n){if(l.manuallyAdded){l.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}l.manuallyAdded=!0}return}const u={[Dc]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:r,manuallyAdded:n};a.children[s]=u,Q6(r,ct.Page)&&Object.values(r.elementExamples).length&&Object.values(r.elementExamples).forEach(f=>xh({tree:e,newEntry:f,debug:t,manuallyAdded:n}))}i(xh,"addEntryToTree");function ug(e,r){const t=ww(e)?e.fullUrlBreadcrumbs.slice(0,-1):$h(e);return t.length?t.reduce((o,a)=>{if(o)return o.children[a]},r):void 0}i(ug,"traverseToImmediateParent");function kw(e){const t=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>kw(o));return[e,...t].flat()}i(kw,"flattenTree");function Dh(e,r){return Ch(e,["",...r],void 0)}i(Dh,"traverseControls");function Ch(e,r,t){const n=r.slice(1),o=n[0];!o&&t&&(e.controls=t);const a=e.children[o||""],s=a&&Ch(a,n,t);return{...e.controls,...s}}i(Ch,"traverseAndInsertNewControls");function UD(e,r,t){const n={...e};return Ch(n,["",...r],t),n}i(UD,"createNewControls");function $w(e,r){const t=r?.controls||(Wa(e,ct.Page)?Ke(e.entry.controls,(o,a)=>a.initValue):{});return{children:Ke(e.children,(o,a)=>$w(a,r?.children?.[a.urlBreadcrumb])),controls:t}}i($w,"updateTreeControls");function Ee(e){const r={...e,entryType:ct.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},t=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:r.useVerticalExamples,entryType:ct.ElementExample,parent:r,descriptionParagraphs:n.descriptionParagraphs??[],errors:[t.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),vw(n.title)].filter(S.isTruthy)};t.add(n.title),r.elementExamples[Pl(o.title)]=o}}),r}i(Ee,"defineBookPage");var jt;(function(e){e.Search="search",e.Book="book"})(jt||(jt={}));function xw(e){return e[0]===jt.Book?"":e[1]?decodeURIComponent(e[1]):""}i(xw,"extractSearchQuery");const es={hash:void 0,paths:[jt.Book],search:void 0};class Cc{static{i(this,"CssPropertyRegistry")}static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const r=Cc.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;r&&(globalThis.CSS.registerProperty=t=>(Dw.registry.set(t.name,t),r(t)))}canRegisterCssProperty(r){return Cc.cssPropertyDefinitionSupported&&!this.registry.has(r)}registerProperty(r){if(!this.canRegisterCssProperty(r.name))return!1;try{return globalThis.CSS.registerProperty(r),!0}catch(t){throw la(t,`Failed to define CSS var: ${x(r,4)}

`)}}}const Dw=new Cc;const lc=globalThis,Eh=lc.ShadowRoot&&(lc.ShadyCSS===void 0||lc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ah=Symbol(),xb=new WeakMap;let Jo=class{static{i(this,"n")}constructor(r,t,n){if(this._$cssResult$=!0,n!==Ah)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=t}get styleSheet(){let r=this.o;const t=this.t;if(Eh&&r===void 0){const n=t!==void 0&&t.length===1;n&&(r=xb.get(t)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),n&&xb.set(t,r))}return r}toString(){return this.cssText}};const Oe=i(e=>new Jo(typeof e=="string"?e:e+"",void 0,Ah),"r$3"),Cw=i((e,...r)=>{const t=e.length===1?e[0]:r.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new Jo(t,e,Ah)},"i$5"),_D=i((e,r)=>{if(Eh)e.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of r){const n=document.createElement("style"),o=lc.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,e.appendChild(n)}},"S$1"),Db=Eh?e=>e:e=>e instanceof CSSStyleSheet?(r=>{let t="";for(const n of r.cssRules)t+=n.cssText;return Oe(t)})(e):e;const{is:zD,defineProperty:qD,getOwnPropertyDescriptor:VD,getOwnPropertyNames:WD,getOwnPropertySymbols:KD,getPrototypeOf:HD}=Object,hd=globalThis,Cb=hd.trustedTypes,GD=Cb?Cb.emptyScript:"",ZD=hd.reactiveElementPolyfillSupport,bl=i((e,r)=>e,"d$2"),Ec={toAttribute(e,r){switch(r){case Boolean:e=e?GD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,r){let t=e;switch(r){case Boolean:t=e!==null;break;case Number:t=e===null?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch{t=null}}return t}},Fh=i((e,r)=>!zD(e,r),"f$3"),Eb={attribute:!0,type:String,converter:Ec,reflect:!1,useDefault:!1,hasChanged:Fh};Symbol.metadata??=Symbol("metadata"),hd.litPropertyMetadata??=new WeakMap;let Ia=class extends HTMLElement{static{i(this,"y")}static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,t=Eb){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(r,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(r,n,t);o!==void 0&&qD(this.prototype,r,o)}}static getPropertyDescriptor(r,t,n){const{get:o,set:a}=VD(this.prototype,r)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const l=o?.call(this);a?.call(this,s),this.requestUpdate(r,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Eb}static _$Ei(){if(this.hasOwnProperty(bl("elementProperties")))return;const r=HD(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(bl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(bl("properties"))){const t=this.properties,n=[...WD(t),...KD(t)];for(const o of n)this.createProperty(o,t[o])}const r=this[Symbol.metadata];if(r!==null){const t=litPropertyMetadata.get(r);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const t=[];if(Array.isArray(r)){const n=new Set(r.flat(1/0).reverse());for(const o of n)t.unshift(Db(o))}else r!==void 0&&t.push(Db(r));return t}static _$Eu(r,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(r.set(n,this[n]),delete this[n]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _D(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,t,n){this._$AK(r,n)}_$ET(r,t){const n=this.constructor.elementProperties.get(r),o=this.constructor._$Eu(r,n);if(o!==void 0&&n.reflect===!0){const a=(n.converter?.toAttribute!==void 0?n.converter:Ec).toAttribute(t,n.type);this._$Em=r,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(r,t){const n=this.constructor,o=n._$Eh.get(r);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Ec;this._$Em=o;const l=s.fromAttribute(t,a.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(r,t,n,o=!1,a){if(r!==void 0){const s=this.constructor;if(o===!1&&(a=this[r]),n??=s.getPropertyOptions(r),!((n.hasChanged??Fh)(a,t)||n.useDefault&&n.reflect&&a===this._$Ej?.get(r)&&!this.hasAttribute(s._$Eu(r,n))))return;this.C(r,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,t,{useDefault:n,reflect:o,wrapped:a},s){n&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,s??t??this[r]),a!==!0||s!==void 0)||(this._$AL.has(r)||(this.hasUpdated||n||(t=void 0),this._$AL.set(r,t)),o===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,a]of n){const{wrapped:s}=a,l=this[o];s!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,a,l)}}let r=!1;const t=this._$AL;try{r=this.shouldUpdate(t),r?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw r=!1,this._$EM(),n}r&&this._$AE(t)}willUpdate(r){}_$AE(r){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(r){}firstUpdated(r){}};Ia.elementStyles=[],Ia.shadowRootOptions={mode:"open"},Ia[bl("elementProperties")]=new Map,Ia[bl("finalized")]=new Map,ZD?.({ReactiveElement:Ia}),(hd.reactiveElementVersions??=[]).push("2.1.2");const Mh=globalThis,Ab=i(e=>e,"i$3"),Ac=Mh.trustedTypes,Fb=Ac?Ac.createPolicy("lit-html",{createHTML:i(e=>e,"createHTML")}):void 0,Ew="$lit$",Yo=`lit$${Math.random().toFixed(9).slice(2)}$`,Aw="?"+Yo,YD=`<${Aw}>`,Xi=document,Nl=i(()=>Xi.createComment(""),"c$3"),Il=i(e=>e===null||typeof e!="object"&&typeof e!="function","a$1"),Sh=Array.isArray,JD=i(e=>Sh(e)||typeof e?.[Symbol.iterator]=="function","d$1"),_f=`[ 	
\f\r]`,Ws=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mb=/-->/g,Sb=/>/g,Ni=RegExp(`>|${_f}(?:([^\\s"'>=/]+)(${_f}*=${_f}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tb=/'/g,Pb=/"/g,Fw=/^(?:script|style|textarea|title)$/i,XD=i(e=>(r,...t)=>({_$litType$:e,strings:r,values:t}),"x"),QD=XD(1),tn=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),Nb=new WeakMap,Ui=Xi.createTreeWalker(Xi,129);function Mw(e,r){if(!Sh(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fb!==void 0?Fb.createHTML(r):r}i(Mw,"V");const e8=i((e,r)=>{const t=e.length-1,n=[];let o,a=r===2?"<svg>":r===3?"<math>":"",s=Ws;for(let l=0;l<t;l++){const u=e[l];let f,g,h=-1,p=0;for(;p<u.length&&(s.lastIndex=p,g=s.exec(u),g!==null);)p=s.lastIndex,s===Ws?g[1]==="!--"?s=Mb:g[1]!==void 0?s=Sb:g[2]!==void 0?(Fw.test(g[2])&&(o=RegExp("</"+g[2],"g")),s=Ni):g[3]!==void 0&&(s=Ni):s===Ni?g[0]===">"?(s=o??Ws,h=-1):g[1]===void 0?h=-2:(h=s.lastIndex-g[2].length,f=g[1],s=g[3]===void 0?Ni:g[3]==='"'?Pb:Tb):s===Pb||s===Tb?s=Ni:s===Mb||s===Sb?s=Ws:(s=Ni,o=void 0);const m=s===Ni&&e[l+1].startsWith("/>")?" ":"";a+=s===Ws?u+YD:h>=0?(n.push(f),u.slice(0,h)+Ew+u.slice(h)+Yo+m):u+Yo+(h===-2?l:m)}return[Mw(e,a+(e[t]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),n]},"N");class Bl{static{i(this,"S")}constructor({strings:r,_$litType$:t},n){let o;this.parts=[];let a=0,s=0;const l=r.length-1,u=this.parts,[f,g]=e8(r,t);if(this.el=Bl.createElement(f,n),Ui.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Ui.nextNode())!==null&&u.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Ew)){const p=g[s++],m=o.getAttribute(h).split(Yo),v=/([.?@])?(.*)/.exec(p);u.push({type:1,index:a,name:v[2],strings:m,ctor:v[1]==="."?t8:v[1]==="?"?n8:v[1]==="@"?o8:md}),o.removeAttribute(h)}else h.startsWith(Yo)&&(u.push({type:6,index:a}),o.removeAttribute(h));if(Fw.test(o.tagName)){const h=o.textContent.split(Yo),p=h.length-1;if(p>0){o.textContent=Ac?Ac.emptyScript:"";for(let m=0;m<p;m++)o.append(h[m],Nl()),Ui.nextNode(),u.push({type:2,index:++a});o.append(h[p],Nl())}}}else if(o.nodeType===8)if(o.data===Aw)u.push({type:2,index:a});else{let h=-1;for(;(h=o.data.indexOf(Yo,h+1))!==-1;)u.push({type:7,index:a}),h+=Yo.length-1}a++}}static createElement(r,t){const n=Xi.createElement("template");return n.innerHTML=r,n}}function rs(e,r,t=e,n){if(r===tn)return r;let o=n!==void 0?t._$Co?.[n]:t._$Cl;const a=Il(r)?void 0:r._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(e),o._$AT(e,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(r=rs(e,o._$AS(e,r.values),o,n)),r}i(rs,"M$2");class r8{static{i(this,"R")}constructor(r,t){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:t},parts:n}=this._$AD,o=(r?.creationScope??Xi).importNode(t,!0);Ui.currentNode=o;let a=Ui.nextNode(),s=0,l=0,u=n[0];for(;u!==void 0;){if(s===u.index){let f;u.type===2?f=new pd(a,a.nextSibling,this,r):u.type===1?f=new u.ctor(a,u.name,u.strings,this,r):u.type===6&&(f=new i8(a,this,r)),this._$AV.push(f),u=n[++l]}s!==u?.index&&(a=Ui.nextNode(),s++)}return Ui.currentNode=Xi,o}p(r){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(r,n,t),t+=n.strings.length-2):n._$AI(r[t])),t++}}let pd=class Sw{static{i(this,"k")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,t,n,o){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=r,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&r?.nodeType===11&&(r=t.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,t=this){r=rs(this,r,t),Il(r)?r===ee||r==null||r===""?(this._$AH!==ee&&this._$AR(),this._$AH=ee):r!==this._$AH&&r!==tn&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):JD(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==ee&&Il(this._$AH)?this._$AA.nextSibling.data=r:this.T(Xi.createTextNode(r)),this._$AH=r}$(r){const{values:t,_$litType$:n}=r,o=typeof n=="number"?this._$AC(r):(n.el===void 0&&(n.el=Bl.createElement(Mw(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const a=new r8(o,this),s=a.u(this.options);a.p(t),this.T(s),this._$AH=a}}_$AC(r){let t=Nb.get(r.strings);return t===void 0&&Nb.set(r.strings,t=new Bl(r)),t}k(r){Sh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of r)o===t.length?t.push(n=new Sw(this.O(Nl()),this.O(Nl()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(r=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);r!==this._$AB;){const n=Ab(r).nextSibling;Ab(r).remove(),r=n}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}};class md{static{i(this,"H")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,t,n,o,a){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=r,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ee}_$AI(r,t=this,n,o){const a=this.strings;let s=!1;if(a===void 0)r=rs(this,r,t,0),s=!Il(r)||r!==this._$AH&&r!==tn,s&&(this._$AH=r);else{const l=r;let u,f;for(r=a[0],u=0;u<a.length-1;u++)f=rs(this,l[n+u],t,u),f===tn&&(f=this._$AH[u]),s||=!Il(f)||f!==this._$AH[u],f===ee?r=ee:r!==ee&&(r+=(f??"")+a[u+1]),this._$AH[u]=f}s&&!o&&this.j(r)}j(r){r===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class t8 extends md{static{i(this,"I")}constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===ee?void 0:r}}class n8 extends md{static{i(this,"L")}constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==ee)}}class o8 extends md{static{i(this,"z")}constructor(r,t,n,o,a){super(r,t,n,o,a),this.type=5}_$AI(r,t=this){if((r=rs(this,r,t,0)??ee)===tn)return;const n=this._$AH,o=r===ee&&n!==ee||r.capture!==n.capture||r.once!==n.once||r.passive!==n.passive,a=r!==ee&&(n===ee||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class i8{static{i(this,"Z")}constructor(r,t,n){this.element=r,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(r){rs(this,r)}}const a8={I:pd},s8=Mh.litHtmlPolyfillSupport;s8?.(Bl,pd),(Mh.litHtmlVersions??=[]).push("3.3.2");const l8=i((e,r,t)=>{const n=t?.renderBefore??r;let o=n._$litPart$;if(o===void 0){const a=t?.renderBefore??null;n._$litPart$=o=new pd(r.insertBefore(Nl(),a),a,void 0,t??{})}return o._$AI(e),o},"D");const Th=globalThis;let vl=class extends Ia{static{i(this,"i")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=l8(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tn}};vl._$litElement$=!0,vl.finalized=!0,Th.litElementHydrateSupport?.({LitElement:vl});const u8=Th.litElementPolyfillSupport;u8?.({LitElement:vl});(Th.litElementVersions??=[]).push("4.2.2");function Ph({onElement:e,toValue:r,forCssVar:t}){e.style.setProperty(String(t.name),String(r))}i(Ph,"setCssVarValue");function c8({onElement:e,forCssVar:r,includeCascade:t}){return(t?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(r.name)).trim()}i(c8,"readCssVarValue");var ts;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(ts||(ts={}));var Ib;(function(e){e.Space="+",e.Comma="#"})(Ib||(Ib={}));function Pt(e){return Ke(e,(t,n)=>{d8(t);const o=n,a=S.isObject(o)&&!(o instanceof Jo)&&S.lacksKey(o,"name"),s=S.isString(o)||S.isNumber(o)||o instanceof Jo?String(o):String(o.default),l=S.isString(o)||S.isNumber(o)||o instanceof Jo?String(o):String("initialValue"in o&&o.initialValue||o.default),u=Oe(St({value:t.replace(/^-+/,""),prefix:"--"})),f={name:u,value:Cw`var(${u}, ${Oe(s)})`,syntax:S.isString(o)||S.isNumber(o)||o instanceof Jo?ts.Any:cg("syntax"in o?o.syntax:void 0),default:s},g=String(f.name);if(!l)throw new Error(`Initial value for CSS var ${g} cannot be empty.`);return a&&Dw.registerProperty({inherits:!0,name:g,initialValue:l,syntax:f.syntax})&&globalThis.document?.documentElement&&Ph({forCssVar:f,onElement:globalThis.document.documentElement,toValue:s}),f})}i(Pt,"defineCssVars");function d8(e){try{if(S.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(r){throw new Error(sa("Invalid CSS var name.",r,`Got '${x(e)}'`))}}i(d8,"assertValidCssVarName");function cg(e){return e?S.isString(e)?e:e.union?e.union.map(r=>cg(r)).join(" | "):e.list?`${cg(e.list.values)}${e.list.separator}`:e.raw:ts.Any}i(cg,"createSyntaxString");const Ne=Pt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),f8={nav:{hover:{background:Ne["element-book-nav-hover-background-color"],foreground:Ne["element-book-nav-hover-foreground-color"]},active:{background:Ne["element-book-nav-active-background-color"],foreground:Ne["element-book-nav-active-foreground-color"]},selected:{background:Ne["element-book-nav-selected-background-color"],foreground:Ne["element-book-nav-selected-foreground-color"]}},accent:{icon:Ne["element-book-accent-icon-color"]},page:{background:Ne["element-book-page-background-color"],backgroundFaint1:Ne["element-book-page-background-faint-level-1-color"],backgroundFaint2:Ne["element-book-page-background-faint-level-2-color"],foreground:Ne["element-book-page-foreground-color"],foregroundFaint1:Ne["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Ne["element-book-page-foreground-faint-level-2-color"]}};function g8(e,r){Tw(e,r,f8)}i(g8,"setThemeCssVars");function dg(e){return S.hasKey(e,"_$cssResult$")}i(dg,"isCssResult");function Bb(e){return S.hasKeys(e,["name","value","default"])&&S.isString(e.default)&&dg(e.name)&&dg(e.value)}i(Bb,"isCssVarDefinition");function Tw(e,r,t){Object.entries(r).forEach(([n,o])=>{const a=t[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(dg(o)){if(!Bb(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Ph({forCssVar:a,onElement:e,toValue:String(o)})}else{if(Bb(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Tw(e,o,a)}})}i(Tw,"recursiveSetThemeCssVars");function al(e,r){let t=e.length,n,o,a=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],t=n.length,a=!0),Array.isArray(r[0])?o=r:(o=r.length>0?r.map(g=>[g]):[[]],s=!0);let l=o[0].length,u=o[0].map((g,h)=>o.map(p=>p[h])),f=n.map(g=>u.map(h=>{let p=0;if(!Array.isArray(g)){for(let m of h)p+=g*m;return p}for(let m=0;m<g.length;m++)p+=g[m]*(h[m]||0);return p}));return t===1&&a&&(f=f[0]),l===1&&s?t===1&&a?f[0]:f.map(g=>g[0]):f}i(al,"multiplyMatrices");function zf(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]}i(zf,"dot3");function xr(e,r,t=[0,0,0]){const n=zf(e,r[0]),o=zf(e,r[1]),a=zf(e,r[2]);return t[0]=n,t[1]=o,t[2]=a,t}i(xr,"multiply_v3_m3x3");function ks(e){return ti(e)==="string"}i(ks,"isString");function ti(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}i(ti,"type");function Nh(e,{precision:r=16,unit:t}){return Be(e)?"none":(e=+Ih(e,r),e+(t??""))}i(Nh,"serializeNumber");function Be(e){return e===null}i(Be,"isNone");function Tr(e){return Be(e)?0:e}i(Tr,"skipNone");function Ih(e,r){if(e===0)return 0;let t=~~e,n=0;t&&r&&(n=~~Math.log10(Math.abs(t))+1);const o=10**(r-n);return Math.floor(e*o+.5)/o}i(Ih,"toPrecision");function Ol(e,r,t){return isNaN(e)?r:isNaN(r)?e:e+(r-e)*t}i(Ol,"interpolate");function Pw(e,r,t){return(t-e)/(r-e)}i(Pw,"interpolateInv");function fg(e,r,t){return!e||!r||e===r||e[0]===r[0]&&e[1]===r[1]||isNaN(t)||t===null?t:Ol(r[0],r[1],Pw(e[0],e[1],t))}i(fg,"mapRange");function bd(e,r,t){return Math.max(Math.min(t,r),e)}i(bd,"clamp$1");function vd(e,r){return Math.sign(e)===Math.sign(r)?e:-e}i(vd,"copySign");function Pr(e,r){return vd(Math.abs(e)**r,e)}i(Pr,"spow");function Bh(e,r){return r===0?0:e/r}i(Bh,"zdiv");function Nw(e,r,t=0,n=e.length){for(;t<n;){const o=t+n>>1;e[o]<r?t=o+1:n=o}return t}i(Nw,"bisectLeft");function ns(e,r){if(e instanceof r)return!0;const t=r.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===t)return!0;if(!o||o==="Object")return!1;e=n}return!1}i(ns,"isInstance");var h8=Object.freeze({__proto__:null,bisectLeft:Nw,clamp:bd,copySign:vd,interpolate:Ol,interpolateInv:Pw,isInstance:ns,isNone:Be,isString:ks,mapRange:fg,multiplyMatrices:al,multiply_v3_m3x3:xr,serializeNumber:Nh,skipNone:Tr,spow:Pr,toPrecision:Ih,type:ti,zdiv:Bh});class p8{static{i(this,"Hooks")}add(r,t,n){if(typeof arguments[0]!="string"){for(var r in arguments[0])this.add(r,arguments[0][r],arguments[1]);return}(Array.isArray(r)?r:[r]).forEach(function(o){this[o]=this[o]||[],t&&this[o][n?"unshift":"push"](t)},this)}run(r,t){this[r]=this[r]||[],this[r].forEach(function(n){n.call(t&&t.context?t.context:t,t)})}}const ui=new p8;var nn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:i(function(r){this.verbose&&globalThis?.console?.warn?.(r)},"warn")};let Ob=class{static{i(this,"Type")}type;coordMeta;coordRange;range;constructor(r,t){if(typeof r=="object"&&(this.coordMeta=r),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof r=="string"){let n=r.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${r} as a type definition.`);this.type=n.groups.type;let{min:o,max:a}=n.groups;(o||a)&&(this.range=[+o,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(r){if(this.type==="<angle>")return r;let t=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),fg(t,n,r)}serialize(r,t){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return r=fg(this.coordRange,n,r),Nh(r,{unit:o,precision:t})}toString(){let r=this.type;if(this.range){let[t="",n=""]=this.range;r+=`[${t},${n}]`}return r}percentageRange(r=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*r,t[1]*r]}static get(r,t){return ns(r,this)?r:new this(r,t)}};const qf=Symbol("instance");class Fc{static{i(this,"Format")}type;name;spaceCoords;coords;id;alpha;constructor(r,t=r.space){r[qf]=this,this.type="function",this.name="color",Object.assign(this,r),this.space=t,this.type!=="custom"&&(this.spaceCoords=Object.values(t.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let a=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>Ob.get(s,a))}))}serializeCoords(r,t,n){return n=r.map((o,a)=>Ob.get(n?.[a]??this.coords[a][0],this.spaceCoords[a])),r.map((o,a)=>n[a].serialize(o,t))}coerceCoords(r,t){return Object.entries(this.space.coords).map(([n,o],a)=>{let s=r[a];if(Be(s)||isNaN(s))return s;let l=t[a],u=this.coords[a].find(f=>f.type==l);if(!u){let f=o.name||n;throw new TypeError(`${l??s?.raw??s} not allowed for ${f} in ${this.name}()`)}return s=u.resolve(s),u.range&&(t[a]=u.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(r){return null}static get(r,...t){return!r||ns(r,this)?r:r[qf]?r[qf]:new Fc(r,...t)}}const Mt={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function gg(e){return Array.isArray(e)?e:Mt[e]}i(gg,"getWhite");function Mc(e,r,t,n={}){if(e=gg(e),r=gg(r),!e||!r)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!r?"/":""}${r?"":"to"}`);if(e===r)return t;let o={W1:e,W2:r,XYZ:t,options:n};if(ui.run("chromatic-adaptation-start",o),o.M||(o.W1===Mt.D65&&o.W2===Mt.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===Mt.D50&&o.W2===Mt.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ui.run("chromatic-adaptation-end",o),o.M)return xr(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}i(Mc,"adapt$2");function Iw(e,r){let t={str:String(e)?.trim(),options:r};if(ui.run("parse-start",t),t.color)return t.color;t.parsed=b8(t.str);let n,o=t.options?t.options.parseMeta??t.options.meta:null;if(t.parsed){let a=t.parsed.name,s,l,u=t.parsed.args,f=u.map((p,m)=>t.parsed.argMeta[m]?.type);if(a==="color"){let p=u.shift();f.shift();let m=p.startsWith("--")?p.substring(2):`--${p}`,v=[p,m];if(s=Y.findFormat({name:a,id:v,type:"function"}),!s){let $,C=p in Y.registry?p:m;if(C in Y.registry){let E=Y.registry[C].formats?.color?.id;E&&($=`Did you mean ${e.replace("color("+p,"color("+E)}?`)}throw new TypeError(`Cannot parse ${t.str}. `+($??"Missing a plugin?"))}l=s.space,s.id.startsWith("--")&&!p.startsWith("--")&&nn.warn(`${l.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${p}).`),p.startsWith("--")&&!s.id.startsWith("--")&&nn.warn(`${l.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${p}).`)}else s=Y.findFormat({name:a,type:"function"}),l=s.space;o&&Object.assign(o,{format:s,formatId:s.name,types:f,commas:t.parsed.commas});let g=1;t.parsed.lastAlpha&&(g=t.parsed.args.pop(),o&&(o.alphaType=f.pop()));let h=s.coords.length;if(u.length!==h)throw new TypeError(`Expected ${h} coordinates for ${l.id} in ${t.str}), got ${u.length}`);u=s.coerceCoords(u,f),n={spaceId:l.id,coords:u,alpha:g}}else e:for(let a of Y.all)for(let s in a.formats){let l=a.formats[s];if(l.type!=="custom"||l.test&&!l.test(t.str))continue;let u=a.getFormat(l),f=u.parse(t.str);if(f){o&&Object.assign(o,{format:u,formatId:s}),n=f;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=Be(n.alpha)?n.alpha:n.alpha===void 0?1:bd(0,n.alpha,1),n}i(Iw,"parse$1");const Bw={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Sc={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Bw).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function m8(e){let r={},t=e.match(Sc.unitValue)?.[0],n=r.raw=e;return t?(r.type=t==="%"?"<percentage>":"<angle>",r.unit=t,r.unitless=Number(n.slice(0,-t.length)),n=r.unitless*Bw[t]):Sc.number.test(n)?(n=Number(n),r.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,r.type="<number>"):r.type="<ident>",{value:n,meta:r}}i(m8,"parseArgument");function b8(e){if(!e)return;e=e.trim();let r=e.match(Sc.function);if(r){let t=[],n=[],o=!1,a=r[1].toLowerCase(),s=r[2].replace(Sc.singleArgument,(l,u)=>{let{value:f,meta:g}=m8(u);return(l.startsWith("/")||a!=="color"&&t.length===3)&&(o=!0),t.push(f),n.push(g),""});return{name:a,args:t,argMeta:n,lastAlpha:o,commas:s.includes(","),rawName:r[1],rawArgs:r[2]}}}i(b8,"parseFunction");function ue(e,r){if(Array.isArray(e))return e.map(n=>ue(n,r));if(!e)throw new TypeError("Empty color reference");ks(e)&&(e=Iw(e,r));let t=e.space||e.spaceId;return typeof t=="string"&&(e.space=Y.get(t)),e.alpha===void 0&&(e.alpha=1),e}i(ue,"getColor");const v8=75e-6;class Y{static{i(this,"ColorSpace")}constructor(r){this.id=r.id,this.name=r.name,this.base=r.base?Y.get(r.base):null,this.aliases=r.aliases,this.base&&(this.fromBase=r.fromBase,this.toBase=r.toBase);let t=r.coords??this.base.coords;for(let o in t)"name"in t[o]||(t[o].name=o);this.coords=t;let n=r.white??this.base.white??"D65";this.white=gg(n),this.formats=r.formats??{};for(let o in this.formats){let a=this.formats[o];a.type||="function",a.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:r.cssId||this.id}),r.gamutSpace?this.gamutSpace=r.gamutSpace==="self"?this:Y.get(r.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,a)=>!0),this.referred=r.referred,Object.defineProperty(this,"path",{value:y8(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ui.run("colorspace-init-end",this)}inGamut(r,{epsilon:t=v8}={}){if(!this.equals(this.gamutSpace))return r=this.to(this.gamutSpace,r),this.gamutSpace.inGamut(r,{epsilon:t});let n=Object.values(this.coords);return r.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Be(o))return!0;let[l,u]=s.range;return(l===void 0||o>=l-t)&&(u===void 0||o<=u+t)}return!0})}get isUnbounded(){return Object.values(this.coords).every(r=>!("range"in r))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let r in this.coords)if(this.coords[r].type==="angle")return!0;return!1}getFormat(r){if(!r)return null;r==="default"?r=Object.values(this.formats)[0]:typeof r=="string"&&(r=this.formats[r]);let t=Fc.get(r,this);return t!==r&&r.name in this.formats&&(this.formats[r.name]=t),t}equals(r){return r?this===r||this.id===r||this.id===r.id:!1}to(r,t){if(arguments.length===1){const l=ue(r);[r,t]=[l.space,l.coords]}if(r=Y.get(r),this.equals(r))return t;t=t.map(l=>Be(l)?0:l);let n=this.path,o=r.path,a,s;for(let l=0;l<n.length&&n[l].equals(o[l]);l++)a=n[l],s=l;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${r}: no connection space was found`);for(let l=n.length-1;l>s;l--)t=n[l].toBase(t);for(let l=s+1;l<o.length;l++)t=o[l].fromBase(t);return t}from(r,t){if(arguments.length===1){const n=ue(r);[r,t]=[n.space,n.coords]}return r=Y.get(r),r.to(this,t)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let r=[];for(let t in this.coords){let n=this.coords[t],o=n.range||n.refRange;r.push(o?.min??0)}return r}static registry={};static get all(){return[...new Set(Object.values(Y.registry))]}static register(r,t){if(arguments.length===1&&(t=arguments[0],r=t.id),t=this.get(t),this.registry[r]&&this.registry[r]!==t)throw new Error(`Duplicate color space registration: '${r}'`);if(this.registry[r]=t,arguments.length===1&&t.aliases)for(let n of t.aliases)this.register(n,t);return t}static get(r,...t){if(!r||ns(r,this))return r;if(ti(r)==="string"){let o=Y.registry[r.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${r}"`);return o}if(t.length)return Y.get(...t);throw new TypeError(`${r} is not a valid color space`)}static findFormat(r,t=Y.all){if(!r)return null;typeof r=="string"&&(r={name:r});for(let n of t)for(let[o,a]of Object.entries(n.formats)){a.name??=o,a.type??="function";let s=(!r.name||a.name===r.name)&&(!r.type||a.type===r.type);if(r.id){let l=a.ids||[a.id],u=Array.isArray(r.id)?r.id:[r.id];s&&=u.some(f=>l.includes(f))}if(s){let l=Fc.get(a,n);return l!==a&&(n.formats[a.name]=l),l}}return null}static resolveCoord(r,t){let n=ti(r),o,a;if(n==="string"?r.includes(".")?[o,a]=r.split("."):[o,a]=[,r]:Array.isArray(r)?[o,a]=r:(o=r.space,a=r.coordId),o=Y.get(o),o||(o=t),!o)throw new TypeError(`Cannot resolve coordinate reference ${r}: No color space specified and relative references are not allowed here`);if(n=ti(a),n==="number"||n==="string"&&a>=0){let u=Object.entries(o.coords)[a];if(u)return{space:o,id:u[0],index:a,...u[1]}}o=Y.get(o);let s=a.toLowerCase(),l=0;for(let u in o.coords){let f=o.coords[u];if(u.toLowerCase()===s||f.name?.toLowerCase()===s)return{space:o,id:u,index:l,...f};l++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function y8(e){let r=[e];for(let t=e;t=t.base;)r.push(t);return r}i(y8,"getPath");var dt=new Y({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Dt extends Y{static{i(this,"RGBColorSpace")}constructor(r){r.coords||(r.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),r.base||(r.base=dt),r.toXYZ_M&&r.fromXYZ_M&&(r.toBase??=t=>{let n=xr(t,r.toXYZ_M);return this.white!==this.base.white&&(n=Mc(this.white,this.base.white,n)),n},r.fromBase??=t=>(t=Mc(this.base.white,this.white,t),xr(t,r.fromXYZ_M))),r.referred??="display",super(r)}}function Ow(e,r={}){if(Array.isArray(e))return e.map(u=>Ow(u,r));let{cssProperty:t="background-color",element:n,...o}=r,a=null;try{return ue(e,o)}catch(u){a=u}let{CSS:s,getComputedStyle:l}=globalThis;if(ks(e)&&n&&s&&l&&s.supports(t,e)){let u=n.style[t];e!==u&&(n.style[t]=e);let f=l(n).getPropertyValue(t);if(e!==u&&(n.style[t]=u),f!==e)try{return ue(f,o)}catch(g){a=g}else a={message:"Color value is a valid CSS color, but it could not be resolved :("}}return r.errorMeta&&(r.errorMeta.error=a),null}i(Ow,"tryColor");function su(e,r){e=ue(e);let t=Y.get(r,r?.space),n=r?.precision,o;return!t||e.space.equals(t)?o=e.coords.slice():o=t.from(e),n===void 0?o:o.map(a=>Ih(a,n))}i(su,"getAll");function Xt(e,r){if(e=ue(e),r==="alpha")return e.alpha??1;let{space:t,index:n}=Y.resolveCoord(r,e.space);return su(e,t)[n]}i(Xt,"get");function Oh(e,r,t,n){return e=ue(e),Array.isArray(r)&&([r,t,n]=[e.space,r,t]),r=Y.get(r),e.coords=r===e.space?t.slice():r.to(e.space,t),n!==void 0&&(e.alpha=n),e}i(Oh,"setAll");Oh.returns="color";function No(e,r,t){if(e=ue(e),arguments.length===2&&ti(arguments[1])==="object"){let n=arguments[1];for(let o in n)No(e,o,n[o])}else if(typeof t=="function"&&(t=t(Xt(e,r))),r==="alpha")e.alpha=t;else{let{space:n,index:o}=Y.resolveCoord(r,e.space),a=su(e,n);a[o]=t,Oh(e,n,a)}return e}i(No,"set");No.returns="color";var Rh=new Y({id:"xyz-d50",name:"XYZ D50",white:"D50",base:dt,fromBase:i(e=>Mc(dt.white,"D50",e),"fromBase"),toBase:i(e=>Mc("D50",dt.white,e),"toBase")});const w8=216/24389,Rb=24/116,Ou=24389/27;let Vf=Mt.D50;var Qt=new Y({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Vf,base:Rh,fromBase(e){let t=e.map((s,l)=>s/Vf[l]).map(s=>s>w8?Math.cbrt(s):(Ou*s+16)/116),n=116*t[1]-16,o=500*(t[0]-t[1]),a=200*(t[1]-t[2]);return[n,o,a]},toBase(e){let[r,t,n]=e,o=[];return o[1]=(r+16)/116,o[0]=t/500+o[1],o[2]=o[1]-n/200,[o[0]>Rb?Math.pow(o[0],3):(116*o[0]-16)/Ou,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ou,o[2]>Rb?Math.pow(o[2],3):(116*o[2]-16)/Ou].map((s,l)=>s*Vf[l])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Dn(e){return typeof e!="number"?e:(e%360+360)%360}i(Dn,"constrain");function Rw(e,r){let[t,n]=r,o=Be(t),a=Be(n);if(o&&a)return[t,n];if(o?t=n:a&&(n=t),e==="raw")return r;t=Dn(t),n=Dn(n);let s=n-t;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(t+=360):e==="longer"?-180<s&&s<180&&(s>0?t+=360:n+=360):e==="shorter"&&(s>180?t+=360:s<-180&&(n+=360)),[t,n]}i(Rw,"adjust");var on=new Y({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Qt,fromBase(e){if(this.ε===void 0){let l=Object.values(this.base.coords)[1].refRange,u=l[1]-l[0];this.ε=u/1e5}let[r,t,n]=e,o=Math.abs(t)<this.ε&&Math.abs(n)<this.ε,a=o?null:Dn(Math.atan2(n,t)*180/Math.PI),s=o?0:Math.sqrt(t**2+n**2);return[r,s,a]},toBase(e){let[r,t,n]=e,o=null,a=null;return Be(n)||(t=t<0?0:t,o=t*Math.cos(n*Math.PI/180),a=t*Math.sin(n*Math.PI/180)),[r,o,a]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Lb=25**7,Tc=Math.PI,jb=180/Tc,Fa=Tc/180;function Ub(e){const r=e*e;return r*r*r*e}i(Ub,"pow7");function Lw(e,r,{kL:t=1,kC:n=1,kH:o=1}={}){[e,r]=ue([e,r]);let[a,s,l]=Qt.from(e),u=on.from(Qt,[a,s,l])[1],[f,g,h]=Qt.from(r),p=on.from(Qt,[f,g,h])[1];u<0&&(u=0),p<0&&(p=0);let m=(u+p)/2,v=Ub(m),$=.5*(1-Math.sqrt(v/(v+Lb))),C=(1+$)*s,E=(1+$)*g,A=Math.sqrt(C**2+l**2),I=Math.sqrt(E**2+h**2),_=C===0&&l===0?0:Math.atan2(l,C),H=E===0&&h===0?0:Math.atan2(h,E);_<0&&(_+=2*Tc),H<0&&(H+=2*Tc),_*=jb,H*=jb;let ce=f-a,Te=I-A,be=H-_,Me=_+H,nr=Math.abs(be),or;A*I===0?or=0:nr<=180?or=be:be>180?or=be-360:be<-180?or=be+360:nn.warn("the unthinkable has happened");let jr=2*Math.sqrt(I*A)*Math.sin(or*Fa/2),Ht=(a+f)/2,Et=(A+I)/2,fo=Ub(Et),Zr;A*I===0?Zr=Me:nr<=180?Zr=Me/2:Me<360?Zr=(Me+360)/2:Zr=(Me-360)/2;let Yn=(Ht-50)**2,go=1+.015*Yn/Math.sqrt(20+Yn),gn=1+.045*Et,at=1;at-=.17*Math.cos((Zr-30)*Fa),at+=.24*Math.cos(2*Zr*Fa),at+=.32*Math.cos((3*Zr+6)*Fa),at-=.2*Math.cos((4*Zr-63)*Fa);let He=1+.015*Et*at,Ur=30*Math.exp(-1*((Zr-275)/25)**2),hn=2*Math.sqrt(fo/(fo+Lb)),vt=-1*Math.sin(2*Ur*Fa)*hn,pn=(ce/(t*go))**2;return pn+=(Te/(n*gn))**2,pn+=(jr/(o*He))**2,pn+=vt*(Te/(n*gn))*(jr/(o*He)),Math.sqrt(pn)}i(Lw,"deltaE2000");const k8=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],$8=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],x8=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],ni=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var _n=new Y({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:dt,fromBase(e){let r=xr(e,k8);return r[0]=Math.cbrt(r[0]),r[1]=Math.cbrt(r[1]),r[2]=Math.cbrt(r[2]),xr(r,x8,r)},toBase(e){let r=xr(e,ni);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,xr(r,$8,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function hg(e,r){[e,r]=ue([e,r]);let[t,n,o]=_n.from(e),[a,s,l]=_n.from(r),u=t-a,f=n-s,g=o-l;return Math.sqrt(u**2+f**2+g**2)}i(hg,"deltaEOK");const D8=75e-6;function Vi(e,r,{epsilon:t=D8}={}){e=ue(e),r||(r=e.space),r=Y.get(r);let n=e.coords;return r!==e.space&&(n=r.from(e)),r.inGamut(n,{epsilon:t})}i(Vi,"inGamut$1");function os(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}i(os,"clone");function jw(e,r,t="lab"){t=Y.get(t);let n=t.from(e),o=t.from(r);return Math.sqrt(n.reduce((a,s,l)=>{let u=o[l];return Be(s)||Be(u)?a:a+(u-s)**2},0))}i(jw,"distance");function C8(e,r){return jw(e,r,"lab")}i(C8,"deltaE76");const E8=Math.PI,_b=E8/180;function A8(e,r,{l:t=2,c:n=1}={}){[e,r]=ue([e,r]);let[o,a,s]=Qt.from(e),[,l,u]=on.from(Qt,[o,a,s]),[f,g,h]=Qt.from(r),p=on.from(Qt,[f,g,h])[1];l<0&&(l=0),p<0&&(p=0);let m=o-f,v=l-p,$=a-g,C=s-h,E=$**2+C**2-v**2,A=.511;o>=16&&(A=.040975*o/(1+.01765*o));let I=.0638*l/(1+.0131*l)+.638,_;Be(u)&&(u=0),u>=164&&u<=345?_=.56+Math.abs(.2*Math.cos((u+168)*_b)):_=.36+Math.abs(.4*Math.cos((u+35)*_b));let H=Math.pow(l,4),ce=Math.sqrt(H/(H+1900)),Te=I*(ce*_+1-ce),be=(m/(t*A))**2;return be+=(v/(n*I))**2,be+=E/Te**2,Math.sqrt(be)}i(A8,"deltaECMC");const zb=203;var Lh=new Y({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:dt,fromBase(e){return e.map(r=>r*zb)},toBase(e){return e.map(r=>r/zb)}});const Ru=1.15,Lu=.66,qb=2610/2**14,F8=2**14/2610,Vb=3424/2**12,Wb=2413/2**7,Kb=2392/2**7,M8=1.7*2523/2**5,Hb=2**5/(1.7*2523),ju=-.56,Wf=16295499532821565e-27,S8=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],T8=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],P8=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],N8=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var Uw=new Y({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Lh,fromBase(e){let[r,t,n]=e,o=Ru*r-(Ru-1)*n,a=Lu*t-(Lu-1)*r,l=xr([o,a,n],S8).map(function(p){let m=Vb+Wb*Pr(p/1e4,qb),v=1+Kb*Pr(p/1e4,qb);return Pr(m/v,M8)}),[u,f,g]=xr(l,P8);return[(1+ju)*u/(1+ju*u)-Wf,f,g]},toBase(e){let[r,t,n]=e,o=(r+Wf)/(1+ju-ju*(r+Wf)),s=xr([o,t,n],N8).map(function(p){let m=Vb-Pr(p,Hb),v=Kb*Pr(p,Hb)-Wb;return 1e4*Pr(m/v,F8)}),[l,u,f]=xr(s,T8),g=(l+(Ru-1)*f)/Ru,h=(u+(Lu-1)*g)/Lu;return[g,h,f]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),pg=new Y({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Uw,fromBase:on.fromBase,toBase:on.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function I8(e,r){[e,r]=ue([e,r]);let[t,n,o]=pg.from(e),[a,s,l]=pg.from(r),u=t-a,f=n-s;Be(o)&&Be(l)?(o=0,l=0):Be(o)?o=l:Be(l)&&(l=o);let g=o-l,h=2*Math.sqrt(n*s)*Math.sin(g/2*(Math.PI/180));return Math.sqrt(u**2+f**2+h**2)}i(I8,"deltaEJz");const _w=3424/4096,zw=2413/128,qw=2392/128,Gb=2610/16384,B8=2523/32,O8=16384/2610,Zb=32/2523,R8=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],L8=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],j8=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],U8=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var mg=new Y({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Lh,fromBase(e){let r=xr(e,R8);return _8(r)},toBase(e){let r=z8(e);return xr(r,U8)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function _8(e){let r=e.map(function(t){let n=_w+zw*(t/1e4)**Gb,o=1+qw*(t/1e4)**Gb;return(n/o)**B8});return xr(r,L8)}i(_8,"LMStoICtCp");function z8(e){return xr(e,j8).map(function(n){let o=Math.max(n**Zb-_w,0),a=zw-qw*n**Zb;return 1e4*(o/a)**O8})}i(z8,"ICtCptoLMS");function q8(e,r){[e,r]=ue([e,r]);let[t,n,o]=mg.from(e),[a,s,l]=mg.from(r);return 720*Math.sqrt((t-a)**2+.25*(n-s)**2+(o-l)**2)}i(q8,"deltaEITP");function V8(e,r){[e,r]=ue([e,r]);let t=2,[n,o,a]=_n.from(e),[s,l,u]=_n.from(r),f=n-s,g=t*(o-l),h=t*(a-u);return Math.sqrt(f**2+g**2+h**2)}i(V8,"deltaEOK2");const W8=Mt.D65,Vw=.42,Yb=1/Vw,Kf=2*Math.PI,Ww=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],K8=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],H8=[[460,451,288],[460,-891,-261],[460,-220,-6300]],G8={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Bi={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Z8=180/Math.PI,Jb=Math.PI/180;function Kw(e,r){return e.map(n=>{const o=Pr(r*Math.abs(n)*.01,Vw);return 400*vd(o,n)/(o+27.13)})}i(Kw,"adapt$1");function Y8(e,r){const t=100/r*27.13**Yb;return e.map(n=>{const o=Math.abs(n);return vd(t*Pr(o/(400-o),Yb),n)})}i(Y8,"unadapt");function J8(e){let r=Dn(e);r<=Bi.h[0]&&(r+=360);const t=Nw(Bi.h,r)-1,[n,o]=Bi.h.slice(t,t+2),[a,s]=Bi.e.slice(t,t+2),l=Bi.H[t],u=(r-n)/a;return l+100*u/(u+(o-r)/s)}i(J8,"hueQuadrature");function X8(e){let r=(e%400+400)%400;const t=Math.floor(.01*r);r=r%100;const[n,o]=Bi.h.slice(t,t+2),[a,s]=Bi.e.slice(t,t+2);return Dn((r*(s*n-a*o)-100*n*s)/(r*(s-a)-100*s))}i(X8,"invHueQuadrature");function Hw(e,r,t,n,o){const a={};a.discounting=o,a.refWhite=e,a.surround=n;const s=e.map(C=>C*100);a.la=r,a.yb=t;const l=s[1],u=xr(s,Ww);let f=G8[a.surround];const g=f[0];a.c=f[1],a.nc=f[2];const p=(1/(5*a.la+1))**4;a.fl=p*a.la+.1*(1-p)*(1-p)*Math.cbrt(5*a.la),a.flRoot=a.fl**.25,a.n=a.yb/l,a.z=1.48+Math.sqrt(a.n),a.nbb=.725*a.n**-.2,a.ncb=a.nbb;const m=Math.max(Math.min(g*(1-1/3.6*Math.exp((-a.la-42)/92)),1),0);a.dRgb=u.map(C=>Ol(1,l/C,m)),a.dRgbInv=a.dRgb.map(C=>1/C);const v=u.map((C,E)=>C*a.dRgb[E]),$=Kw(v,a.fl);return a.aW=a.nbb*(2*$[0]+$[1]+.05*$[2]),a}i(Hw,"environment");const Xb=Hw(W8,64/Math.PI*.2,20,"average",!1);function bg(e,r){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let t=0;e.h!==void 0?t=Dn(e.h)*Jb:t=X8(e.H)*Jb;const n=Math.cos(t),o=Math.sin(t);let a=0;e.J!==void 0?a=Pr(e.J,1/2)*.1:e.Q!==void 0&&(a=.25*r.c*e.Q/((r.aW+4)*r.flRoot));let s=0;e.C!==void 0?s=e.C/a:e.M!==void 0?s=e.M/r.flRoot/a:e.s!==void 0&&(s=4e-4*e.s**2*(r.aW+4)/r.c);const l=Pr(s*Math.pow(1.64-Math.pow(.29,r.n),-.73),10/9),u=.25*(Math.cos(t+2)+3.8),f=r.aW*Pr(a,2/r.c/r.z),g=5e4/13*r.nc*r.ncb*u,h=f/r.nbb,p=23*(h+.305)*Bh(l,23*g+l*(11*n+108*o)),m=p*n,v=p*o,$=Y8(xr([h,m,v],H8).map(C=>C*1/1403),r.fl);return xr($.map((C,E)=>C*r.dRgbInv[E]),K8).map(C=>C/100)}i(bg,"fromCam16");function Gw(e,r){const t=e.map(I=>I*100),n=Kw(xr(t,Ww).map((I,_)=>I*r.dRgb[_]),r.fl),o=n[0]+(-12*n[1]+n[2])/11,a=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(a,o)%Kf+Kf)%Kf,l=.25*(Math.cos(s+2)+3.8),u=5e4/13*r.nc*r.ncb*Bh(l*Math.sqrt(o**2+a**2),n[0]+n[1]+1.05*n[2]+.305),f=Pr(u,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),g=r.nbb*(2*n[0]+n[1]+.05*n[2]),h=Pr(g/r.aW,.5*r.c*r.z),p=100*Pr(h,2),m=4/r.c*h*(r.aW+4)*r.flRoot,v=f*h,$=v*r.flRoot,C=Dn(s*Z8),E=J8(C),A=50*Pr(r.c*f/(r.aW+4),1/2);return{J:p,C:v,h:C,s:A,Q:m,M:$,H:E}}i(Gw,"toCam16");var Q8=new Y({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:dt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const r=Gw(e,Xb),t=Math.abs(r.M)<this.ε;return[r.J,t?0:r.M,t?null:r.h]},toBase(e){return bg({J:e[0],M:e[1],h:e[2]},Xb)}});const eC=Mt.D65,rC=216/24389,Zw=24389/27;function tC(e){return 116*(e>rC?Math.cbrt(e):(Zw*e+16)/116)-16}i(tC,"toLstar");function vg(e){return e>8?Math.pow((e+16)/116,3):e/Zw}i(vg,"fromLstar");function nC(e,r){let[t,n,o]=e,a=[],s=0;if(o===0)return[0,0,0];let l=vg(o);o>0?s=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:s=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const u=2e-12,f=15;let g=0,h=1/0;for(;g<=f;){a=bg({J:s,C:n,h:t},r);const p=Math.abs(a[1]-l);if(p<h){if(p<=u)return a;h=p}s=s-(a[1]-l)*s/(2*a[1]),g+=1}return bg({J:s,C:n,h:t},r)}i(nC,"fromHct");function oC(e,r){const t=tC(e[1]);if(t===0)return[0,0,0];const n=Gw(e,jh);return[Dn(n.h),n.C,t]}i(oC,"toHct");const jh=Hw(eC,200/Math.PI*vg(50),vg(50)*100,"average",!1);var Rl=new Y({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:dt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let r=oC(e);return r[1]<this.ε&&(r[1]=0,r[0]=null),r},toBase(e){return nC(e,jh)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const iC=Math.PI/180,Qb=[1,.007,.0228];function ev(e){e[1]<0&&(e=Rl.fromBase(Rl.toBase(e)));const r=Math.log(Math.max(1+Qb[2]*e[1]*jh.flRoot,1))/Qb[2],t=e[0]*iC,n=r*Math.cos(t),o=r*Math.sin(t);return[e[2],n,o]}i(ev,"convertUcsAb");function aC(e,r){[e,r]=ue([e,r]);let[t,n,o]=ev(Rl.from(e)),[a,s,l]=ev(Rl.from(r));return Math.sqrt((t-a)**2+(n-s)**2+(o-l)**2)}i(aC,"deltaEHCT");var is={deltaE76:C8,deltaECMC:A8,deltaE2000:Lw,deltaEJz:I8,deltaEITP:q8,deltaEOK:hg,deltaEOK2:V8,deltaEHCT:aC};function sC(e){const r=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${r-2}`),1e-6)}i(sC,"calcEpsilon");const rv={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function ci(e,{method:r=nn.gamut_mapping,space:t=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:a=void 0}={}){if(e=ue(e),ks(arguments[1])?t=arguments[1]:t||(t=e.space),t=Y.get(t),Vi(e,t,{epsilon:0}))return e;let s;if(r==="css")s=lC(e,{space:t});else{if(r!=="clip"&&!Vi(e,t)){Object.prototype.hasOwnProperty.call(rv,r)&&({method:r,jnd:o,deltaEMethod:n,blackWhiteClamp:a}=rv[r]);let l=Lw;if(n!==""){for(let f in is)if("deltae"+n.toLowerCase()===f.toLowerCase()){l=is[f];break}}o===0&&(o=1e-16);let u=ci(er(e,t),{method:"clip",space:t});if(l(e,u)>o){if(a&&Object.keys(a).length===3){let A=Y.resolveCoord(a.channel),I=Xt(er(e,A.space),A.id);if(Be(I)&&(I=0),I>=a.max)return er({space:"xyz-d65",coords:Mt.D65},e.space);if(I<=a.min)return er({space:"xyz-d65",coords:[0,0,0]},e.space)}let f=Y.resolveCoord(r),g=f.space,h=f.id,p=er(e,g);p.coords.forEach((A,I)=>{Be(A)&&(p.coords[I]=0)});let v=(f.range||f.refRange)[0],$=sC(o),C=v,E=Xt(p,h);for(;E-C>$;){let A=os(p);A=ci(A,{space:t,method:"clip"}),l(p,A)-o<$?C=Xt(p,h):E=Xt(p,h),No(p,h,(C+E)/2)}s=er(p,t)}else s=u}else s=er(e,t);if(r==="clip"||!Vi(s,t,{epsilon:0})){let l=Object.values(t.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,f)=>{let[g,h]=l[f];return g!==void 0&&(u=Math.max(g,u)),h!==void 0&&(u=Math.min(u,h)),u})}}return t!==e.space&&(s=er(s,e.space)),e.coords=s.coords,e}i(ci,"toGamut");ci.returns="color";const tv={WHITE:{space:_n,coords:[1,0,0],alpha:1},BLACK:{space:_n,coords:[0,0,0],alpha:1}};function lC(e,{space:r}={}){e=ue(e),r||(r=e.space),r=Y.get(r);const o=Y.get("oklch");if(r.isUnbounded)return er(e,r);const a=er(e,o);let s=a.coords[0];if(s>=1){const v=er(tv.WHITE,r);return v.alpha=e.alpha,er(v,r)}if(s<=0){const v=er(tv.BLACK,r);return v.alpha=e.alpha,er(v,r)}if(Vi(a,r,{epsilon:0}))return er(a,r);function l(v){const $=er(v,r),C=Object.values(r.coords);return $.coords=$.coords.map((E,A)=>{if("range"in C[A]){const[I,_]=C[A].range;return bd(I,E,_)}return E}),$}i(l,"clip");let u=0,f=a.coords[1],g=!0,h=os(a),p=l(h),m=hg(p,h);if(m<.02)return p;for(;f-u>1e-4;){const v=(u+f)/2;if(h.coords[1]=v,g&&Vi(h,r,{epsilon:0}))u=v;else if(p=l(h),m=hg(p,h),m<.02){if(.02-m<1e-4)break;g=!1,u=v}else f=v}return p}i(lC,"toGamutCSS");function er(e,r,{inGamut:t}={}){e=ue(e),r=Y.get(r);let n=r.from(e),o={space:r,coords:n,alpha:e.alpha};return t&&(o=ci(o,t===!0?void 0:t)),o}i(er,"to");er.returns="color";function yl(e,r={}){let{precision:t=nn.precision,format:n,inGamut:o=!0,coords:a,alpha:s,commas:l}=r,u,f=ue(e),g=n,h=f.parseMeta;h&&!n&&(h.format.canSerialize()&&(n=h.format,g=h.formatId),a??=h.types,s??=h.alphaType,l??=h.commas),g&&(n=f.space.getFormat(n)??Y.findFormat(g)),n||(n=f.space.getFormat("default")??Y.DEFAULT_FORMAT,g=n.name),n&&n.space&&n.space!==f.space&&(f=er(f,n.space));let p=f.coords.slice();if(o||=n.toGamut,o&&!Vi(f)&&(p=ci(os(f),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)u=n.serialize(p,f.alpha,r);else throw new TypeError(`format ${g} can only be used to parse colors, not for serialization`);else{let m=n.name||"color",v=n.serializeCoords(p,t,a);if(m==="color"){let I=n.id||n.ids?.[0]||f.space.cssId||f.space.id;v.unshift(I)}let $=f.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let C=s?.type??"<number>",E=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&$<1,A="";if(l??=n.commas,E){if(t!==null){let I;C==="<percentage>"&&(I="%",$*=100),$=Nh($,{precision:t,unit:I})}A=`${l?",":" /"} ${$}`}u=`${m}(${v.join(l?", ":" ")}${A})`}return u}i(yl,"serialize");const uC=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],cC=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Ll=new Dt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:uC,fromXYZ_M:cC}),Yw=new Dt({id:"rec2020",name:"REC.2020",base:Ll,toBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return t*Math.pow(n,2.4)})},fromBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return t*Math.pow(n,1/2.4)})}});const dC=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fC=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Jw=new Dt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:dC,fromXYZ_M:fC});const gC=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Hr=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Xw=new Dt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:gC,fromXYZ_M:Hr}),nv={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ov=Array(3).fill("<percentage> | <number>[0, 255]"),iv=Array(3).fill("<number>[0, 255]");var Qi=new Dt({id:"srgb",name:"sRGB",base:Xw,fromBase:i(e=>e.map(r=>{let t=r<0?-1:1,n=r*t;return n>.0031308?t*(1.055*n**(1/2.4)-.055):12.92*r}),"fromBase"),toBase:i(e=>e.map(r=>{let t=r<0?-1:1,n=r*t;return n<=.04045?r/12.92:t*((n+.055)/1.055)**2.4}),"toBase"),formats:{rgb:{coords:ov},rgb_number:{name:"rgb",commas:!0,coords:iv,alpha:!1},color:{},rgba:{coords:ov,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:iv},hex:{type:"custom",toGamut:!0,test:i(e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),"test"),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let r=[];return e.replace(/[a-f0-9]{2}/gi,t=>{r.push(parseInt(t,16)/255)}),{spaceId:"srgb",coords:r.slice(0,3),alpha:r.slice(3)[0]}},serialize:i((e,r,{collapse:t=!0,alpha:n}={})=>{(n!==!1&&r<1||n===!0)&&e.push(r),e=e.map(s=>Math.round(s*255));let o=t&&e.every(s=>s%17===0);return"#"+e.map(s=>o?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")},"serialize")},keyword:{type:"custom",test:i(e=>/^[a-z]+$/i.test(e),"test"),parse(e){e=e.toLowerCase();let r={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(r.coords=nv.black,r.alpha=0):r.coords=nv[e],r.coords)return r}}}}),Qw=new Dt({id:"p3",cssId:"display-p3",name:"P3",base:Jw,fromBase:Qi.fromBase,toBase:Qi.toBase});nn.display_space=Qi;let hC;if(typeof CSS<"u"&&CSS.supports)for(let e of[Qt,Yw,Qw]){let r=e.getMinCoords(),n=yl({space:e,coords:r,alpha:1});if(CSS.supports("color",n)){nn.display_space=e;break}}function pC(e,{space:r=nn.display_space,...t}={}){e=ue(e);let n=yl(e,t);if(typeof CSS>"u"||CSS.supports("color",n)||!nn.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(Be)||Be(e.alpha))&&!(hC??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=os(e),o.coords=o.coords.map(Tr),o.alpha=Tr(o.alpha),n=yl(o,t),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=er(o,r),n=new String(yl(o,t)),n.color=o}return n}i(pC,"display");function mC(e,r,{space:t,hue:n="shorter"}={}){e=ue(e),t||=e.space,t=Y.get(t);let o=Object.values(t.coords);[e,r]=[e,r].map(f=>er(f,t));let[a,s]=[e,r].map(f=>f.coords),l=a.map((f,g)=>{let h=o[g],p=s[g];return h.type==="angle"&&([f,p]=Rw(n,[f,p])),av(f,p)}),u=av(e.alpha,r.alpha);return{space:t,coords:l,alpha:u}}i(mC,"deltas");function av(e,r){return Be(e)||Be(r)?e===r?null:0:e-r}i(av,"subtractCoords");function bC(e,r){return e=ue(e),r=ue(r),e.space===r.space&&e.alpha===r.alpha&&e.coords.every((t,n)=>t===r.coords[n])}i(bC,"equals");function di(e){return Xt(e,[dt,"y"])}i(di,"getLuminance");function e5(e,r){No(e,[dt,"y"],r)}i(e5,"setLuminance");function vC(e){Object.defineProperty(e.prototype,"luminance",{get(){return di(this)},set(r){e5(this,r)}})}i(vC,"register$2");var yC=Object.freeze({__proto__:null,getLuminance:di,register:vC,setLuminance:e5});function wC(e,r){e=ue(e),r=ue(r);let t=Math.max(di(e),0),n=Math.max(di(r),0);return n>t&&([t,n]=[n,t]),(t+.05)/(n+.05)}i(wC,"contrastWCAG21");const kC=.56,$C=.57,xC=.62,DC=.65,sv=.022,CC=1.414,EC=.1,AC=5e-4,FC=1.14,lv=.027,MC=1.14;function uv(e){return e>=sv?e:e+(sv-e)**CC}i(uv,"fclamp");function Ma(e){let r=e<0?-1:1,t=Math.abs(e);return r*Math.pow(t,2.4)}i(Ma,"linearize$3");function SC(e,r){r=ue(r),e=ue(e);let t,n,o,a,s,l;r=er(r,"srgb"),[a,s,l]=r.coords.map(m=>Be(m)?0:m);let u=Ma(a)*.2126729+Ma(s)*.7151522+Ma(l)*.072175;e=er(e,"srgb"),[a,s,l]=e.coords.map(m=>Be(m)?0:m);let f=Ma(a)*.2126729+Ma(s)*.7151522+Ma(l)*.072175,g=uv(u),h=uv(f),p=h>g;return Math.abs(h-g)<AC?n=0:p?(t=h**kC-g**$C,n=t*FC):(t=h**DC-g**xC,n=t*MC),Math.abs(n)<EC?o=0:n>0?o=n-lv:o=n+lv,o*100}i(SC,"contrastAPCA");function TC(e,r){e=ue(e),r=ue(r);let t=Math.max(di(e),0),n=Math.max(di(r),0);n>t&&([t,n]=[n,t]);let o=t+n;return o===0?0:(t-n)/o}i(TC,"contrastMichelson");const PC=5e4;function NC(e,r){e=ue(e),r=ue(r);let t=Math.max(di(e),0),n=Math.max(di(r),0);return n>t&&([t,n]=[n,t]),n===0?PC:(t-n)/n}i(NC,"contrastWeber");function IC(e,r){e=ue(e),r=ue(r);let t=Xt(e,[Qt,"l"]),n=Xt(r,[Qt,"l"]);return Math.abs(t-n)}i(IC,"contrastLstar");const BC=216/24389,cv=24/116,Uu=24389/27;let Hf=Mt.D65;var yg=new Y({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Hf,base:dt,fromBase(e){let t=e.map((n,o)=>n/Hf[o]).map(n=>n>BC?Math.cbrt(n):(Uu*n+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let r=[];return r[1]=(e[0]+16)/116,r[0]=e[1]/500+r[1],r[2]=r[1]-e[2]/200,[r[0]>cv?Math.pow(r[0],3):(116*r[0]-16)/Uu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Uu,r[2]>cv?Math.pow(r[2],3):(116*r[2]-16)/Uu].map((n,o)=>n*Hf[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const Gf=Math.pow(5,.5)*.5+.5;function OC(e,r){e=ue(e),r=ue(r);let t=Xt(e,[yg,"l"]),n=Xt(r,[yg,"l"]),o=Math.abs(Math.pow(t,Gf)-Math.pow(n,Gf)),a=Math.pow(o,1/Gf)*Math.SQRT2-40;return a<7.5?0:a}i(OC,"contrastDeltaPhi");var uc=Object.freeze({__proto__:null,contrastAPCA:SC,contrastDeltaPhi:OC,contrastLstar:IC,contrastMichelson:TC,contrastWCAG21:wC,contrastWeber:NC});function RC(e,r,t){ks(t)&&(t={algorithm:t});let{algorithm:n,...o}=t||{};if(!n){let a=Object.keys(uc).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=ue(e),r=ue(r);for(let a in uc)if("contrast"+n.toLowerCase()===a.toLowerCase())return uc[a](e,r,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}i(RC,"contrast");function yd(e){let[r,t,n]=su(e,dt),o=r+15*t+3*n;return[4*r/o,9*t/o]}i(yd,"uv");function r5(e){let[r,t,n]=su(e,dt),o=r+t+n;return[r/o,t/o]}i(r5,"xy");function LC(e){Object.defineProperty(e.prototype,"uv",{get(){return yd(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return r5(this)}})}i(LC,"register$1");var jC=Object.freeze({__proto__:null,register:LC,uv:yd,xy:r5});function sl(e,r,t={}){ks(t)&&(t={method:t});let{method:n=nn.deltaE,...o}=t;for(let a in is)if("deltae"+n.toLowerCase()===a.toLowerCase())return is[a](e,r,o);throw new TypeError(`Unknown deltaE method: ${n}`)}i(sl,"deltaE");function t5(e,r=.25){let n=[Y.get("oklch","lch"),"l"];return No(e,n,o=>o*(1+r))}i(t5,"lighten");function n5(e,r=.25){let n=[Y.get("oklch","lch"),"l"];return No(e,n,o=>o*(1-r))}i(n5,"darken");t5.returns="color";n5.returns="color";var UC=Object.freeze({__proto__:null,darken:n5,lighten:t5});function o5(e,r,t,n={}){return[e,r]=[ue(e),ue(r)],ti(t)==="object"&&([t,n]=[.5,t]),lu(e,r,n)(t??.5)}i(o5,"mix");function i5(e,r,t={}){let n;Uh(e)&&([n,t]=[e,r],[e,r]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:l=1e3,...u}=t;n||([e,r]=[ue(e),ue(r)],n=lu(e,r,u));let f=sl(e,r),g=o>0?Math.max(s,Math.ceil(f/o)+1):s,h=[];if(l!==void 0&&(g=Math.min(g,l)),g===1)h=[{p:.5,color:n(.5)}];else{let p=1/(g-1);h=Array.from({length:g},(m,v)=>{let $=v*p;return{p:$,color:n($)}})}if(o>0){let p=h.reduce((m,v,$)=>{if($===0)return 0;let C=sl(v.color,h[$-1].color,a);return Math.max(m,C)},0);for(;p>o;){p=0;for(let m=1;m<h.length&&h.length<l;m++){let v=h[m-1],$=h[m],C=($.p+v.p)/2,E=n(C);p=Math.max(p,sl(E,v.color),sl(E,$.color)),h.splice(m,0,{p:C,color:n(C)}),m++}}}return h=h.map(p=>p.color),h}i(i5,"steps");function lu(e,r,t={}){if(Uh(e)){let[u,f]=[e,r];return lu(...u.rangeArgs.colors,{...u.rangeArgs.options,...f})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=t;e=ue(e),r=ue(r),e=os(e),r=os(r);let l={colors:[e,r],options:t};if(n?n=Y.get(n):n=Y.registry[nn.interpolationSpace]||e.space,o=o?Y.get(o):n,e=er(e,n),r=er(r,n),e=ci(e),r=ci(r),n.coords.h&&n.coords.h.type==="angle"){let u=t.hue=t.hue||"shorter",f=[n,"h"],[g,h]=[Xt(e,f),Xt(r,f)];Be(g)&&!Be(h)?g=h:Be(h)&&!Be(g)&&(h=g),[g,h]=Rw(u,[g,h]),No(e,f,g),No(r,f,h)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),r.coords=r.coords.map(u=>u*r.alpha)),Object.assign(u=>{u=a?a(u):u;let f=e.coords.map((p,m)=>{let v=r.coords[m];return Ol(p,v,u)}),g=Ol(e.alpha,r.alpha,u),h={space:n,coords:f,alpha:g};return s&&(h.coords=h.coords.map(p=>p/g)),o!==n&&(h=er(h,o)),h},{rangeArgs:l})}i(lu,"range");function Uh(e){return ti(e)==="function"&&!!e.rangeArgs}i(Uh,"isRange");nn.interpolationSpace="lab";function _C(e){e.defineFunction("mix",o5,{returns:"color"}),e.defineFunction("range",lu,{returns:"function<color>"}),e.defineFunction("steps",i5,{returns:"array<color>"})}i(_C,"register");var zC=Object.freeze({__proto__:null,isRange:Uh,mix:o5,range:lu,register:_C,steps:i5}),qC=new Y({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Qi,fromBase:i(e=>{let r=Math.max(...e),t=Math.min(...e),[n,o,a]=e,[s,l,u]=[null,0,(t+r)/2],f=r-t;if(f!==0){switch(l=u===0||u===1?0:(r-u)/Math.min(u,1-u),r){case n:s=(o-a)/f+(o<a?6:0);break;case o:s=(a-n)/f+2;break;case a:s=(n-o)/f+4}s=s*60}return l<0&&(s+=180,l=Math.abs(l)),s>=360&&(s-=360),[s,l*100,u*100]},"fromBase"),toBase:i(e=>{let[r,t,n]=e;r=r%360,r<0&&(r+=360),t/=100,n/=100;function o(a){let s=(a+r/30)%12,l=t*Math.min(n,1-n);return n-l*Math.max(-1,Math.min(s-3,9-s,1))}return i(o,"f"),[o(0),o(8),o(4)]},"toBase"),formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),a5=new Y({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Qi,fromBase(e){let r=Math.max(...e),t=Math.min(...e),[n,o,a]=e,[s,l,u]=[null,0,r],f=r-t;if(f!==0){switch(r){case n:s=(o-a)/f+(o<a?6:0);break;case o:s=(a-n)/f+2;break;case a:s=(n-o)/f+4}s=s*60}return u&&(l=f/u),s>=360&&(s-=360),[s,l*100,u*100]},toBase(e){let[r,t,n]=e;r=r%360,r<0&&(r+=360),t/=100,n/=100;function o(a){let s=(a+r/60)%6;return n-n*t*Math.max(0,Math.min(s,4-s,1))}return i(o,"f"),[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),VC=new Y({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:a5,fromBase(e){let[r,t,n]=e;return[r,n*(100-t)/100,100-n]},toBase(e){let[r,t,n]=e;t/=100,n/=100;let o=t+n;if(o>=1){let l=t/o;return[r,0,l*100]}let a=1-n,s=a===0?0:1-t/a;return[r,s*100,a*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const WC=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],KC=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var s5=new Dt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:WC,fromXYZ_M:KC}),HC=new Dt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:s5,toBase:i(e=>e.map(r=>Math.pow(Math.abs(r),563/256)*Math.sign(r)),"toBase"),fromBase:i(e=>e.map(r=>Math.pow(Math.abs(r),256/563)*Math.sign(r)),"fromBase")});const GC=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],ZC=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var l5=new Dt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Rh,toXYZ_M:GC,fromXYZ_M:ZC});const YC=1/512,JC=16/512;var XC=new Dt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:l5,toBase(e){return e.map(r=>{let t=r<0?-1:1,n=r*t;return n<JC?r/16:t*n**1.8})},fromBase(e){return e.map(r=>{let t=r<0?-1:1,n=r*t;return n>=YC?t*n**(1/1.8):16*r})}});const _u=1.09929682680944,dv=.018053968510807;var QC=new Dt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Ll,referred:"scene",toBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return n<dv*4.5?r/4.5:t*Math.pow((n+_u-1)/_u,1/.45)})},fromBase(e){return e.map(function(r){let t=r<0?-1:1,n=r*t;return n>=dv?t*(_u*Math.pow(n,.45)-(_u-1)):4.5*r})}}),eE=new Y({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:_n,fromBase:on.fromBase,toBase:on.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const as=2*Math.PI,Pc=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],Nc=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Zf=Number.MAX_VALUE,wl=.206,_h=.03,ll=(1+wl)/(1+_h);function st(e,r){let t=e.length;if(t!==r.length)throw new Error(`Vectors of size ${t} and ${r.length} are not aligned`);let n=0;return e.forEach((o,a)=>{n+=o*r[a]}),n}i(st,"vdot");function kl(e){return .5*(ll*e-wl+Math.sqrt((ll*e-wl)*(ll*e-wl)+4*_h*ll*e))}i(kl,"toe$1");function Ka(e){return(e**2+wl*e)/(ll*(e+_h))}i(Ka,"toeInv");function zh(e){let[r,t]=e;return[t/r,t/(1-r)]}i(zh,"toSt");function rE(e,r){let t=.11516993+1/(7.4477897+4.1590124*r+e*(-2.19557347+1.75198401*r+e*(-2.13704948-10.02301043*r+e*(-4.24894561+5.38770819*r+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*r+e*(.40370612+.90148123*r+e*(-.27087943+.6122399*r+e*(.00299215-.45399568*r-.14661872*e))));return[t,n]}i(rE,"getStMid");function qh(e,r){let t=xr(e,ni);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,xr(t,r,t)}i(qh,"oklabToLinearRGB");function wd(e,r,t,n){let o=nE(e,r,t,n),a=qh([1,o*e,o*r],t),s=Pr(1/Math.max(...a),1/3),l=s*o;return[s,l]}i(wd,"findCusp");function tE(e,r,t,n,o,a,s,l){let u;if(l===void 0&&(l=wd(e,r,a,s)),(t-o)*l[1]-(l[0]-o)*n<=0)u=l[1]*o/(n*l[0]+l[1]*(o-t));else{u=l[1]*(o-1)/(n*(l[0]-1)+l[1]*(o-t));let f=t-o,g=n,h=st(ni[0].slice(1),[e,r]),p=st(ni[1].slice(1),[e,r]),m=st(ni[2].slice(1),[e,r]),v=f+g*h,$=f+g*p,C=f+g*m,E=o*(1-u)+u*t,A=u*n,I=E+A*h,_=E+A*p,H=E+A*m,ce=I**3,Te=_**3,be=H**3,Me=3*v*I**2,nr=3*$*_**2,or=3*C*H**2,jr=6*v**2*I,Ht=6*$**2*_,Et=6*C**2*H,fo=st(a[0],[ce,Te,be])-1,Zr=st(a[0],[Me,nr,or]),Yn=st(a[0],[jr,Ht,Et]),go=Zr/(Zr*Zr-.5*fo*Yn),gn=-fo*go,at=st(a[1],[ce,Te,be])-1,He=st(a[1],[Me,nr,or]),Ur=st(a[1],[jr,Ht,Et]),hn=He/(He*He-.5*at*Ur),vt=-at*hn,pn=st(a[2],[ce,Te,be])-1,Sn=st(a[2],[Me,nr,or]),jo=st(a[2],[jr,Ht,Et]),Eu=Sn/(Sn*Sn-.5*pn*jo),Da=-pn*Eu;gn=go>=0?gn:Zf,vt=hn>=0?vt:Zf,Da=Eu>=0?Da:Zf,u+=Math.min(gn,Math.min(vt,Da))}return u}i(tE,"findGamutIntersection");function u5(e,r,t){let[n,o,a]=e,s=wd(o,a,r,t),l=tE(o,a,n,1,n,r,t,s),u=zh(s),f=l/Math.min(n*u[0],(1-n)*u[1]),g=rE(o,a),h=n*g[0],p=(1-n)*g[1],m=.9*f*Math.sqrt(Math.sqrt(1/(1/h**4+1/p**4)));return h=n*.4,p=(1-n)*.8,[Math.sqrt(1/(1/h**2+1/p**2)),m,l]}i(u5,"getCs");function nE(e,r,t,n){let o,a,s,l,u,f,g,h;st(n[0][0],[e,r])>1?([o,a,s,l,u]=n[0][1],[f,g,h]=t[0]):st(n[1][0],[e,r])>1?([o,a,s,l,u]=n[1][1],[f,g,h]=t[1]):([o,a,s,l,u]=n[2][1],[f,g,h]=t[2]);let p=o+a*e+s*r+l*e**2+u*e*r,m=st(ni[0].slice(1),[e,r]),v=st(ni[1].slice(1),[e,r]),$=st(ni[2].slice(1),[e,r]),C=1+p*m,E=1+p*v,A=1+p*$,I=C**3,_=E**3,H=A**3,ce=3*m*C**2,Te=3*v*E**2,be=3*$*A**2,Me=6*m**2*C,nr=6*v**2*E,or=6*$**2*A,jr=f*I+g*_+h*H,Ht=f*ce+g*Te+h*be,Et=f*Me+g*nr+h*or;return p=p-jr*Ht/(Ht**2-.5*jr*Et),p}i(nE,"computeMaxSaturation");function oE(e,r,t){let[n,o,a]=e,s=Ka(a),l=null,u=null;if(n=Dn(n)/360,s!==0&&s!==1&&o!==0){let f=Math.cos(as*n),g=Math.sin(as*n),[h,p,m]=u5([s,f,g],r,t),v=.8,$=1.25,C,E,A,I;o<v?(C=$*o,E=0,A=v*h,I=1-A/p):(C=5*(o-.8),E=p,A=.2*p**2*1.25**2/h,I=1-A/(m-p));let _=E+C*A/(1-I*C);l=_*f,u=_*g}return[s,l,u]}i(oE,"okhslToOklab");function iE(e,r,t){let n=1e-7,o=1e-4,a=e[0],s=0,l=kl(a),u=Math.sqrt(e[1]**2+e[2]**2),f=.5+Math.atan2(-e[2],-e[1])/as;if(l!==0&&l!==1&&u!==0){let h=e[1]/u,p=e[2]/u,[m,v,$]=u5([a,h,p],r,t),C=.8,E=1.25,A,I,_,H;u<v?(I=C*m,_=1-I/v,H=u/(I+_*u),s=H*C):(A=v,I=.2*v**2*E**2/m,_=1-I/($-v),H=(u-A)/(I+_*(u-A)),s=C+.2*H)}const g=Math.abs(s)<o;return g||l===0||Math.abs(1-l)<n?(f=null,g||(s=0)):f=Dn(f*360),[f,s,l]}i(iE,"oklabToOkhsl");var aE=new Y({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:_n,gamutSpace:"self",fromBase(e){return iE(e,Pc,Nc)},toBase(e){return oE(e,Pc,Nc)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),c5=new Y({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:_n,fromBase(e){return[kl(e[0]),e[1],e[2]]},toBase(e){return[Ka(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),sE=new Y({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:c5,fromBase:on.fromBase,toBase:on.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function lE(e,r,t){let[n,o,a]=e;n=Dn(n)/360;let s=Ka(a),l=null,u=null;if(s!==0&&o!==0){let f=Math.cos(as*n),g=Math.sin(as*n),h=wd(f,g,r,t),[p,m]=zh(h),v=.5,$=1-v/p,C=1-o*v/(v+m-m*$*o),E=o*m*v/(v+m-m*$*o);s=a*C;let A=a*E,I=Ka(C),_=E*I/C,H=Ka(s);A=A*H/s,s=H;let[ce,Te,be]=qh([I,f*_,g*_],r),Me=Pr(1/Math.max(Math.max(ce,Te),Math.max(be,0)),1/3);s=s*Me,A=A*Me,l=A*f,u=A*g}return[s,l,u]}i(lE,"okhsvToOklab");function uE(e,r,t){let n=1e-4,o=e[0],a=0,s=kl(o),l=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/as;if(o!==0&&o!==1&&l!==0){let f=e[1]/l,g=e[2]/l,h=wd(f,g,r,t),[p,m]=zh(h),v=.5,$=1-v/p,C=m/(l+o*m),E=C*o,A=C*l,I=Ka(E),_=A*I/E,[H,ce,Te]=qh([I,f*_,g*_],r),be=Pr(1/Math.max(Math.max(H,ce),Math.max(Te,0)),1/3);o=o/be,l=l/be,l=l*kl(o)/o,o=kl(o),s=o/E,a=(v+m)*A/(m*v+m*$*A)}return Math.abs(a)<n||s===0?u=null:u=Dn(u*360),[u,a,s]}i(uE,"oklabToOkhsv");var cE=new Y({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:_n,gamutSpace:"self",fromBase(e){return uE(e,Pc,Nc)},toBase(e){return lE(e,Pc,Nc)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let d5=Mt.D65;const dE=216/24389,fv=24389/27,[gv,hv]=yd({space:dt,coords:d5});var f5=new Y({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:d5,base:dt,fromBase(e){let r=[Tr(e[0]),Tr(e[1]),Tr(e[2])],t=r[1],[n,o]=yd({space:dt,coords:r});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let a=t<=dE?fv*t:116*Math.cbrt(t)-16;return[a,13*a*(n-gv),13*a*(o-hv)]},toBase(e){let[r,t,n]=e;if(r===0||Be(r))return[0,0,0];t=Tr(t),n=Tr(n);let o=t/(13*r)+gv,a=n/(13*r)+hv,s=r<=8?r/fv:Math.pow((r+16)/116,3);return[s*(9*o/(4*a)),s,s*((12-3*o-20*a)/(4*a))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),Vh=new Y({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:f5,fromBase:on.fromBase,toBase:on.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const fE=216/24389,gE=24389/27,pv=Hr[0][0],mv=Hr[0][1],Yf=Hr[0][2],bv=Hr[1][0],vv=Hr[1][1],Jf=Hr[1][2],yv=Hr[2][0],wv=Hr[2][1],Xf=Hr[2][2];function Sa(e,r,t){const n=r/(Math.sin(t)-e*Math.cos(t));return n<0?1/0:n}i(Sa,"distanceFromOriginAngle");function Ic(e){const r=Math.pow(e+16,3)/1560896,t=r>fE?r:e/gE,n=t*(284517*pv-94839*Yf),o=t*(838422*Yf+769860*mv+731718*pv),a=t*(632260*Yf-126452*mv),s=t*(284517*bv-94839*Jf),l=t*(838422*Jf+769860*vv+731718*bv),u=t*(632260*Jf-126452*vv),f=t*(284517*yv-94839*Xf),g=t*(838422*Xf+769860*wv+731718*yv),h=t*(632260*Xf-126452*wv);return{r0s:n/a,r0i:o*e/a,r1s:n/(a+126452),r1i:(o-769860)*e/(a+126452),g0s:s/u,g0i:l*e/u,g1s:s/(u+126452),g1i:(l-769860)*e/(u+126452),b0s:f/h,b0i:g*e/h,b1s:f/(h+126452),b1i:(g-769860)*e/(h+126452)}}i(Ic,"calculateBoundingLines");function kv(e,r){const t=r/360*Math.PI*2,n=Sa(e.r0s,e.r0i,t),o=Sa(e.r1s,e.r1i,t),a=Sa(e.g0s,e.g0i,t),s=Sa(e.g1s,e.g1i,t),l=Sa(e.b0s,e.b0i,t),u=Sa(e.b1s,e.b1i,t);return Math.min(n,o,a,s,l,u)}i(kv,"calcMaxChromaHsluv");var hE=new Y({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Vh,gamutSpace:Qi,fromBase(e){let[r,t,n]=[Tr(e[0]),Tr(e[1]),Tr(e[2])],o;if(r>99.9999999)o=0,r=100;else if(r<1e-8)o=0,r=0;else{let a=Ic(r),s=kv(a,n);o=t/s*100}return[n,o,r]},toBase(e){let[r,t,n]=[Tr(e[0]),Tr(e[1]),Tr(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let a=Ic(n);o=kv(a,r)/100*t}return[n,o,r]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Hr[0][0];Hr[0][1];Hr[0][2];Hr[1][0];Hr[1][1];Hr[1][2];Hr[2][0];Hr[2][1];Hr[2][2];function Ta(e,r){return Math.abs(r)/Math.sqrt(Math.pow(e,2)+1)}i(Ta,"distanceFromOrigin");function $v(e){let r=Ta(e.r0s,e.r0i),t=Ta(e.r1s,e.r1i),n=Ta(e.g0s,e.g0i),o=Ta(e.g1s,e.g1i),a=Ta(e.b0s,e.b0i),s=Ta(e.b1s,e.b1i);return Math.min(r,t,n,o,a,s)}i($v,"calcMaxChromaHpluv");var pE=new Y({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Vh,gamutSpace:"self",fromBase(e){let[r,t,n]=[Tr(e[0]),Tr(e[1]),Tr(e[2])],o;if(r>99.9999999)o=0,r=100;else if(r<1e-8)o=0,r=0;else{let a=Ic(r),s=$v(a);o=t/s*100}return[n,o,r]},toBase(e){let[r,t,n]=[Tr(e[0]),Tr(e[1]),Tr(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let a=Ic(n);o=$v(a)/100*t}return[n,o,r]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Wh=new Dt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:Ll.toBase,fromBase:Ll.fromBase});const xv=203,Dv=2610/2**14,mE=2**14/2610,bE=2523/2**5,Cv=2**5/2523,Ev=3424/2**12,Av=2413/2**7,Fv=2392/2**7;var vE=new Dt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Wh,toBase(e){return e.map(function(r){return(Math.max(r**Cv-Ev,0)/(Av-Fv*r**Cv))**mE*1e4/xv})},fromBase(e){return e.map(function(r){let t=Math.max(r*xv/1e4,0),n=Ev+Av*t**Dv,o=1+Fv*t**Dv;return(n/o)**bE})}});const Mv=.17883277,Sv=.28466892,Tv=.55991073,Qf=3.7743;var yE=new Dt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Wh,toBase(e){return e.map(function(r){return r<=.5?r**2/3*Qf:(Math.exp((r-Tv)/Mv)+Sv)/12*Qf})},fromBase(e){return e.map(function(r){return r/=Qf,r<=1/12?Pr(3*r,.5):Mv*Math.log(12*r-Sv)+Tv})}});const g5={};ui.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=h5(e.W1,e.W2,e.options.method))});ui.add("chromatic-adaptation-end",e=>{e.M||(e.M=h5(e.W1,e.W2,e.options.method))});function kd({id:e,toCone_M:r,fromCone_M:t}){g5[e]=arguments[0]}i(kd,"defineCAT");function h5(e,r,t="Bradford"){let n=g5[t],[o,a,s]=al(n.toCone_M,e),[l,u,f]=al(n.toCone_M,r),g=[[l/o,0,0],[0,u/a,0],[0,0,f/s]],h=al(g,n.toCone_M);return al(n.fromCone_M,h)}i(h5,"adapt");kd({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});kd({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});kd({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});kd({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Mt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Mt.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const wE=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],kE=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var p5=new Dt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Mt.ACES,toXYZ_M:wE,fromXYZ_M:kE});const zu=2**-16,e0=-.35828683,qu=(Math.log2(65504)+9.72)/17.52;var $E=new Dt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[e0,qu],name:"Red"},g:{range:[e0,qu],name:"Green"},b:{range:[e0,qu],name:"Blue"}},referred:"scene",base:p5,toBase(e){const r=-.3013698630136986;return e.map(function(t){return t<=r?(2**(t*17.52-9.72)-zu)*2:t<qu?2**(t*17.52-9.72):65504})},fromBase(e){return e.map(function(r){return r<=0?(Math.log2(zu)+9.72)/17.52:r<zu?(Math.log2(zu+r*.5)+9.72)/17.52:(Math.log2(r)+9.72)/17.52})}}),Pv=Object.freeze({__proto__:null,A98RGB:HC,A98RGB_Linear:s5,ACEScc:$E,ACEScg:p5,CAM16_JMh:Q8,HCT:Rl,HPLuv:pE,HSL:qC,HSLuv:hE,HSV:a5,HWB:VC,ICTCP:mg,JzCzHz:pg,Jzazbz:Uw,LCH:on,LCHuv:Vh,Lab:Qt,Lab_D65:yg,Luv:f5,OKLCH:eE,OKLab:_n,OKLrCH:sE,OKLrab:c5,Okhsl:aE,Okhsv:cE,P3:Qw,P3_Linear:Jw,ProPhoto:XC,ProPhoto_Linear:l5,REC_2020:Yw,REC_2020_Linear:Ll,REC_2020_Scene_Referred:QC,REC_2100_HLG:yE,REC_2100_Linear:Wh,REC_2100_PQ:vE,XYZ_ABS_D65:Lh,XYZ_D50:Rh,XYZ_D65:dt,sRGB:Qi,sRGB_Linear:Xw});let rr=class Ot{static{i(this,"Color")}constructor(...r){let t;if(r.length===1){let s={};typeof r[0]=="object"&&Object.getPrototypeOf(r[0]).constructor===Object&&(r[0]={...r[0]}),t=ue(r[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,o,a;t?(n=t.space||t.spaceId,o=t.coords,a=t.alpha):[n,o,a]=r,Object.defineProperty(this,"space",{value:Y.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=Be(a)?a:a===void 0?1:bd(0,a,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:i(()=>this.get(s),"get"),set:i(l=>this.set(s,l),"set")})}get spaceId(){return this.space.id}clone(){return new Ot(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...r){let t=pC(this,...r);return t.color=new Ot(t.color),t}static get(r,...t){return ns(r,this)?r:new Ot(r,...t)}static try(r,t){if(ns(r,this))return r;let n=Ow(r,t);return n?new Ot(n):null}static defineFunction(r,t,n=t){let{instance:o=!0,returns:a}=n,s=i(function(...l){let u=t(...l);if(a==="color")u=Ot.get(u);else if(a==="function<color>"){let f=u;u=i(function(...g){let h=f(...g);return Ot.get(h)},"ret"),Object.assign(u,f)}else a==="array<color>"&&(u=u.map(f=>Ot.get(f)));return u},"func");r in Ot||(Ot[r]=s),o&&(Ot.prototype[r]=function(...l){return s(this,...l)})}static defineFunctions(r){for(let t in r)Ot.defineFunction(t,r[t],r[t])}static extend(r){if(r.register)r.register(Ot);else for(let t in r)Ot.defineFunction(t,r[t])}};rr.defineFunctions({get:Xt,getAll:su,set:No,setAll:Oh,to:er,equals:bC,inGamut:Vi,toGamut:ci,distance:jw,deltas:mC,toString:yl});Object.assign(rr,{util:h8,hooks:ui,WHITES:Mt,Space:Y,spaces:Y.registry,parse:Iw,defaults:nn});for(let e of Object.keys(Pv))Y.register(Pv[e]);for(let e in Y.registry)wg(e,Y.registry[e]);ui.add("colorspace-init-end",e=>{wg(e.id,e),e.aliases?.forEach(r=>{wg(r,e)})});function wg(e,r){let t=e.replace(/-/g,"_");Object.defineProperty(rr.prototype,t,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:i(((a,s)=>{try{return Y.resolveCoord([r,s]),!0}catch{}return Reflect.has(a,s)}),"has"),get:i((a,s,l)=>{if(s&&typeof s!="symbol"&&!(s in a)&&s in o){let{index:u}=Y.resolveCoord([r,s]);if(u>=0)return a[u]}return Reflect.get(a,s,l)},"get"),set:i((a,s,l,u)=>{if(s&&typeof s!="symbol"&&!(s in a)||Number(s)>=0){let{index:f}=Y.resolveCoord([r,s]);if(f>=0)return a[f]=l,this.setAll(e,a),!0}return Reflect.set(a,s,l,u)},"set")});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}i(wg,"addSpaceAccessors");rr.extend(is);rr.extend({deltaE:sl});Object.assign(rr,{deltaEMethods:is});rr.extend(UC);rr.extend({contrast:RC});rr.extend(jC);rr.extend(yC);rr.extend(zC);rr.extend(uc);const m5=Symbol("no update");function Nv(e){return e!==m5}i(Nv,"isNotNoUpdate");class r0 extends Wt()("observable-value-update"){static{i(this,"ObservableValueUpdateEvent")}}class xE extends Wt()("observable-value-resolve"){static{i(this,"ObservableValueResolveEvent")}}class DE extends Wt()("observable-value-error"){static{i(this,"ObservableValueErrorEvent")}}class CE extends gd("observable-destroy"){static{i(this,"ObservableDestroyEvent")}}class EE extends gd("observable-callback-call"){static{i(this,"ObservableCallbackCallEvent")}}class AE extends Wt()("observable-params-update"){static{i(this,"ObservableParamsUpdateEvent")}}class b5{static{i(this,"AnyObservable")}listenTarget=new au;value;equalityCheck;listenerMap=new WeakMap;dispatch(...r){return this.listenTarget.dispatch(...r)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...r){const t=r[0];if(t===m5)return!1;if(!(r.length===2?r[1]:this.equalityCheck)?.(this.value,t)){const o=this.value;return this.value=t,this.listenTarget.dispatch(new r0({detail:[t,o]})),!0}return!1}listen(r,t){const n=i(o=>t(...o.detail),"mapped");return this.listenerMap.set(t,n),r&&t(this.value,void 0),this.listenTarget.listen(r0,n)}removeListener(r){const t=this.listenerMap.get(r);return!!t&&this.listenTarget.removeListener(r0,t)}destroy(){this.listenTarget.dispatch(new CE),this.listenTarget.destroy()}listenToEvent(r,t,n){return this.listenTarget.listen(r,t,n)}}function Kh(e,r){return W6(e,r,(t,n)=>S.isFunction(t)&&S.isFunction(n)?!0:S.strictEquals(t,n))}i(Kh,"observableEqualityCheck");var $l;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})($l||($l={}));class FE extends b5{static{i(this,"AsyncObservable")}equalityCheck;waitingForValueDeferredPromise=new vc;lastSetPromise;lastSetId=To();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(r={}){super(),this.equalityCheck="equalityCheck"in r?r.equalityCheck:Kh,"defaultValue"in r&&this.setValue(r.defaultValue)}setPromise(r){if(r===this.lastSetPromise)return!1;const t=To();return this.lastSetId=t,this.lastSetPromise=r,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new vc,super.setValue(this.waitingForValueDeferredPromise.promise,S.strictEquals)),r.then(n=>{this.lastSetPromise!==r||this.lastSetId!==t||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==r||this.lastSetId!==t)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=Dr(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(r){return Nv(r)||(r=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(r,S.strictEquals):super.setValue(r))?(this.lastResolvedValue=r,this.lastSetId=To(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(r),this.dispatch(new xE({detail:r})),!0):!1}rejectValue(r){this.waitingForValueDeferredPromise.reject(r),super.setValue(r,S.strictEquals),this.dispatch(new DE({detail:r}))}setValue(r){try{return r instanceof Promise?this.setPromise(r):r instanceof Error?(this.rejectValue(r),!0):Nv(r)?this.resolveValue(r):!1}catch(t){return this.rejectValue(Dr(t)),!0}}listen(r,t){return super.listen(r,t)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?$l.Rejected:this.value instanceof Promise?$l.Waiting:$l.Resolved}}class Ra extends FE{static{i(this,"CallbackObservable")}static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==Ra.NotSet)return this.internalParams}internalParams;constructor(r={}){super(r),this.equalityCheck="equalityCheck"in r?r.equalityCheck:Kh,this.updateCallback=r.updateCallback,this.internalParams="defaultParams"in r?r.defaultParams:Ra.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===Ra.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(r){return this.setValue(Dr(r))}finally{this.dispatch(new EE)}}updateLastParams(r){try{return this.internalParams===Ra.NotSet||!this.equalityCheck?.(r,this.internalParams)?(this.internalParams=r,this.dispatch(new AE({detail:this.internalParams})),!0):!1}catch(t){return this.setValue(Dr(t)),!1}}update(...[r]){return this.updateLastParams(r)?(this.updateFromCallback(),!0):!1}setParams(r){return this.updateLastParams(r)}forceUpdate(...r){return S.isLengthAtLeast(r,1)&&this.updateLastParams(r[0]),this.updateFromCallback()}}function ME(e){return Or(e)&&!Kt(e)&&!cu(e)&&Symbol.asyncIterator in e}i(ME,"IsAsyncIterator$3");function Kt(e){return Array.isArray(e)}i(Kt,"IsArray$3");function v5(e){return typeof e=="bigint"}i(v5,"IsBigInt$3");function uu(e){return typeof e=="boolean"}i(uu,"IsBoolean$3");function Hh(e){return e instanceof globalThis.Date}i(Hh,"IsDate$3");function SE(e){return typeof e=="function"}i(SE,"IsFunction$3");function TE(e){return Or(e)&&!Kt(e)&&!cu(e)&&Symbol.iterator in e}i(TE,"IsIterator$3");function PE(e){return e===null}i(PE,"IsNull$3");function so(e){return typeof e=="number"}i(so,"IsNumber$3");function Or(e){return typeof e=="object"&&e!==null}i(Or,"IsObject$3");function y5(e){return e instanceof globalThis.RegExp}i(y5,"IsRegExp$2");function Fr(e){return typeof e=="string"}i(Fr,"IsString$3");function NE(e){return typeof e=="symbol"}i(NE,"IsSymbol$3");function cu(e){return e instanceof globalThis.Uint8Array}i(cu,"IsUint8Array$3");function Nr(e){return e===void 0}i(Nr,"IsUndefined$3");function IE(e){return e.map(r=>Bc(r))}i(IE,"ArrayType$1");function BE(e){return new Date(e.getTime())}i(BE,"DateType$1");function OE(e){return new Uint8Array(e)}i(OE,"Uint8ArrayType$1");function RE(e){return new RegExp(e.source,e.flags)}i(RE,"RegExpType");function LE(e){const r={};for(const t of Object.getOwnPropertyNames(e))r[t]=Bc(e[t]);for(const t of Object.getOwnPropertySymbols(e))r[t]=Bc(e[t]);return r}i(LE,"ObjectType$1");function Bc(e){return Kt(e)?IE(e):Hh(e)?BE(e):cu(e)?OE(e):y5(e)?RE(e):Or(e)?LE(e):e}i(Bc,"Visit$8");function an(e){return Bc(e)}i(an,"Clone");function Gh(e,r){return an(r===void 0?e:{...r,...e})}i(Gh,"CloneType");function w5(e){return lo(e)&&globalThis.Symbol.asyncIterator in e}i(w5,"IsAsyncIterator$2");function k5(e){return lo(e)&&globalThis.Symbol.iterator in e}i(k5,"IsIterator$2");function $5(e){return e instanceof globalThis.Promise}i($5,"IsPromise$2");function Zh(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}i(Zh,"IsDate$2");function Yh(e){return e instanceof globalThis.Uint8Array}i(Yh,"IsUint8Array$2");function x5(e,r){return r in e}i(x5,"HasPropertyKey");function lo(e){return e!==null&&typeof e=="object"}i(lo,"IsObject$2");function sn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}i(sn,"IsArray$2");function yi(e){return e===void 0}i(yi,"IsUndefined$2");function $d(e){return e===null}i($d,"IsNull$2");function xd(e){return typeof e=="boolean"}i(xd,"IsBoolean$2");function pe(e){return typeof e=="number"}i(pe,"IsNumber$2");function D5(e){return globalThis.Number.isInteger(e)}i(D5,"IsInteger$2");function xo(e){return typeof e=="bigint"}i(xo,"IsBigInt$2");function rn(e){return typeof e=="string"}i(rn,"IsString$2");function C5(e){return typeof e=="function"}i(C5,"IsFunction$2");function Dd(e){return typeof e=="symbol"}i(Dd,"IsSymbol$2");function E5(e){return xo(e)||xd(e)||$d(e)||pe(e)||rn(e)||Dd(e)||yi(e)}i(E5,"IsValueType");var Ar;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function r(s,l){return e.ExactOptionalPropertyTypes?l in s:s[l]!==void 0}i(r,"IsExactOptionalProperty"),e.IsExactOptionalProperty=r;function t(s){const l=lo(s);return e.AllowArrayObject?l:l&&!sn(s)}i(t,"IsObjectLike"),e.IsObjectLike=t;function n(s){return t(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}i(n,"IsRecordLike"),e.IsRecordLike=n;function o(s){return e.AllowNaN?pe(s):Number.isFinite(s)}i(o,"IsNumberLike"),e.IsNumberLike=o;function a(s){const l=yi(s);return e.AllowNullVoid?l||s===null:l}i(a,"IsVoidLike"),e.IsVoidLike=a})(Ar||(Ar={}));function jE(e){return globalThis.Object.freeze(e).map(r=>Oc(r))}i(jE,"ImmutableArray");function UE(e){const r={};for(const t of Object.getOwnPropertyNames(e))r[t]=Oc(e[t]);for(const t of Object.getOwnPropertySymbols(e))r[t]=Oc(e[t]);return globalThis.Object.freeze(r)}i(UE,"ImmutableObject");function Oc(e){return Kt(e)?jE(e):Hh(e)?e:cu(e)?e:y5(e)?e:Or(e)?UE(e):e}i(Oc,"Immutable");function q(e,r){const t=r!==void 0?{...r,...e}:e;switch(Ar.InstanceMode){case"freeze":return Oc(t);case"clone":return an(t);default:return t}}i(q,"CreateType");class pt extends Error{static{i(this,"TypeBoxError")}constructor(r){super(r)}}const Ut=Symbol.for("TypeBox.Transform"),du=Symbol.for("TypeBox.Readonly"),Bo=Symbol.for("TypeBox.Optional"),Cd=Symbol.for("TypeBox.Hint"),z=Symbol.for("TypeBox.Kind");function Jh(e){return Or(e)&&e[du]==="Readonly"}i(Jh,"IsReadonly");function wi(e){return Or(e)&&e[Bo]==="Optional"}i(wi,"IsOptional$1");function A5(e){return Ae(e,"Any")}i(A5,"IsAny$1");function F5(e){return Ae(e,"Argument")}i(F5,"IsArgument$1");function $s(e){return Ae(e,"Array")}i($s,"IsArray$1");function Ed(e){return Ae(e,"AsyncIterator")}i(Ed,"IsAsyncIterator$1");function Ad(e){return Ae(e,"BigInt")}i(Ad,"IsBigInt$1");function fu(e){return Ae(e,"Boolean")}i(fu,"IsBoolean$1");function xs(e){return Ae(e,"Computed")}i(xs,"IsComputed$1");function Ds(e){return Ae(e,"Constructor")}i(Ds,"IsConstructor$1");function _E(e){return Ae(e,"Date")}i(_E,"IsDate$1");function Cs(e){return Ae(e,"Function")}i(Cs,"IsFunction$1");function Es(e){return Ae(e,"Integer")}i(Es,"IsInteger$1");function An(e){return Ae(e,"Intersect")}i(An,"IsIntersect$1");function Fd(e){return Ae(e,"Iterator")}i(Fd,"IsIterator$1");function Ae(e,r){return Or(e)&&z in e&&e[z]===r}i(Ae,"IsKindOf$1");function M5(e){return uu(e)||so(e)||Fr(e)}i(M5,"IsLiteralValue$1");function da(e){return Ae(e,"Literal")}i(da,"IsLiteral$1");function fa(e){return Ae(e,"MappedKey")}i(fa,"IsMappedKey$1");function dn(e){return Ae(e,"MappedResult")}i(dn,"IsMappedResult$1");function gu(e){return Ae(e,"Never")}i(gu,"IsNever$1");function zE(e){return Ae(e,"Not")}i(zE,"IsNot$1");function Xh(e){return Ae(e,"Null")}i(Xh,"IsNull$1");function As(e){return Ae(e,"Number")}i(As,"IsNumber$1");function Hn(e){return Ae(e,"Object")}i(Hn,"IsObject$1");function Md(e){return Ae(e,"Promise")}i(Md,"IsPromise$1");function Sd(e){return Ae(e,"Record")}i(Sd,"IsRecord$1");function qt(e){return Ae(e,"Ref")}i(qt,"IsRef$1");function S5(e){return Ae(e,"RegExp")}i(S5,"IsRegExp$1");function hu(e){return Ae(e,"String")}i(hu,"IsString$1");function Qh(e){return Ae(e,"Symbol")}i(Qh,"IsSymbol$1");function ga(e){return Ae(e,"TemplateLiteral")}i(ga,"IsTemplateLiteral$1");function qE(e){return Ae(e,"This")}i(qE,"IsThis$1");function tr(e){return Or(e)&&Ut in e}i(tr,"IsTransform$1");function ha(e){return Ae(e,"Tuple")}i(ha,"IsTuple$1");function pu(e){return Ae(e,"Undefined")}i(pu,"IsUndefined$1");function it(e){return Ae(e,"Union")}i(it,"IsUnion$1");function VE(e){return Ae(e,"Uint8Array")}i(VE,"IsUint8Array$1");function WE(e){return Ae(e,"Unknown")}i(WE,"IsUnknown$1");function KE(e){return Ae(e,"Unsafe")}i(KE,"IsUnsafe$1");function HE(e){return Ae(e,"Void")}i(HE,"IsVoid$1");function GE(e){return Or(e)&&z in e&&Fr(e[z])}i(GE,"IsKind$1");function Tt(e){return A5(e)||F5(e)||$s(e)||fu(e)||Ad(e)||Ed(e)||xs(e)||Ds(e)||_E(e)||Cs(e)||Es(e)||An(e)||Fd(e)||da(e)||fa(e)||dn(e)||gu(e)||zE(e)||Xh(e)||As(e)||Hn(e)||Md(e)||Sd(e)||qt(e)||S5(e)||hu(e)||Qh(e)||ga(e)||qE(e)||ha(e)||pu(e)||it(e)||VE(e)||WE(e)||KE(e)||HE(e)||GE(e)}i(Tt,"IsSchema$1");const ZE=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function T5(e){try{return new RegExp(e),!0}catch{return!1}}i(T5,"IsPattern");function ep(e){if(!Fr(e))return!1;for(let r=0;r<e.length;r++){const t=e.charCodeAt(r);if(t>=7&&t<=13||t===27||t===127)return!1}return!0}i(ep,"IsControlCharacterFree");function P5(e){return rp(e)||mr(e)}i(P5,"IsAdditionalProperties");function Ks(e){return Nr(e)||v5(e)}i(Ks,"IsOptionalBigInt");function Ye(e){return Nr(e)||so(e)}i(Ye,"IsOptionalNumber");function rp(e){return Nr(e)||uu(e)}i(rp,"IsOptionalBoolean");function Ve(e){return Nr(e)||Fr(e)}i(Ve,"IsOptionalString");function YE(e){return Nr(e)||Fr(e)&&ep(e)&&T5(e)}i(YE,"IsOptionalPattern");function JE(e){return Nr(e)||Fr(e)&&ep(e)}i(JE,"IsOptionalFormat");function N5(e){return Nr(e)||mr(e)}i(N5,"IsOptionalSchema");function Rc(e){return Or(e)&&e[Bo]==="Optional"}i(Rc,"IsOptional");function zn(e){return Fe(e,"Any")&&Ve(e.$id)}i(zn,"IsAny");function XE(e){return Fe(e,"Argument")&&so(e.index)}i(XE,"IsArgument");function pa(e){return Fe(e,"Array")&&e.type==="array"&&Ve(e.$id)&&mr(e.items)&&Ye(e.minItems)&&Ye(e.maxItems)&&rp(e.uniqueItems)&&N5(e.contains)&&Ye(e.minContains)&&Ye(e.maxContains)}i(pa,"IsArray");function tp(e){return Fe(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Ve(e.$id)&&mr(e.items)}i(tp,"IsAsyncIterator");function Td(e){return Fe(e,"BigInt")&&e.type==="bigint"&&Ve(e.$id)&&Ks(e.exclusiveMaximum)&&Ks(e.exclusiveMinimum)&&Ks(e.maximum)&&Ks(e.minimum)&&Ks(e.multipleOf)}i(Td,"IsBigInt");function ma(e){return Fe(e,"Boolean")&&e.type==="boolean"&&Ve(e.$id)}i(ma,"IsBoolean");function QE(e){return Fe(e,"Computed")&&Fr(e.target)&&Kt(e.parameters)&&e.parameters.every(r=>mr(r))}i(QE,"IsComputed");function Pd(e){return Fe(e,"Constructor")&&e.type==="Constructor"&&Ve(e.$id)&&Kt(e.parameters)&&e.parameters.every(r=>mr(r))&&mr(e.returns)}i(Pd,"IsConstructor");function Nd(e){return Fe(e,"Date")&&e.type==="Date"&&Ve(e.$id)&&Ye(e.exclusiveMaximumTimestamp)&&Ye(e.exclusiveMinimumTimestamp)&&Ye(e.maximumTimestamp)&&Ye(e.minimumTimestamp)&&Ye(e.multipleOfTimestamp)}i(Nd,"IsDate");function Id(e){return Fe(e,"Function")&&e.type==="Function"&&Ve(e.$id)&&Kt(e.parameters)&&e.parameters.every(r=>mr(r))&&mr(e.returns)}i(Id,"IsFunction");function Oo(e){return Fe(e,"Integer")&&e.type==="integer"&&Ve(e.$id)&&Ye(e.exclusiveMaximum)&&Ye(e.exclusiveMinimum)&&Ye(e.maximum)&&Ye(e.minimum)&&Ye(e.multipleOf)}i(Oo,"IsInteger");function I5(e){return Or(e)&&Object.entries(e).every(([r,t])=>ep(r)&&mr(t))}i(I5,"IsProperties");function ba(e){return Fe(e,"Intersect")&&!(Fr(e.type)&&e.type!=="object")&&Kt(e.allOf)&&e.allOf.every(r=>mr(r)&&!iA(r))&&Ve(e.type)&&(rp(e.unevaluatedProperties)||N5(e.unevaluatedProperties))&&Ve(e.$id)}i(ba,"IsIntersect");function np(e){return Fe(e,"Iterator")&&e.type==="Iterator"&&Ve(e.$id)&&mr(e.items)}i(np,"IsIterator");function Fe(e,r){return Or(e)&&z in e&&e[z]===r}i(Fe,"IsKindOf");function B5(e){return ki(e)&&Fr(e.const)}i(B5,"IsLiteralString");function O5(e){return ki(e)&&so(e.const)}i(O5,"IsLiteralNumber");function R5(e){return ki(e)&&uu(e.const)}i(R5,"IsLiteralBoolean");function ki(e){return Fe(e,"Literal")&&Ve(e.$id)&&eA(e.const)}i(ki,"IsLiteral");function eA(e){return uu(e)||so(e)||Fr(e)}i(eA,"IsLiteralValue");function rA(e){return Fe(e,"MappedKey")&&Kt(e.keys)&&e.keys.every(r=>so(r)||Fr(r))}i(rA,"IsMappedKey");function tA(e){return Fe(e,"MappedResult")&&I5(e.properties)}i(tA,"IsMappedResult");function $i(e){return Fe(e,"Never")&&Or(e.not)&&Object.getOwnPropertyNames(e.not).length===0}i($i,"IsNever");function ss(e){return Fe(e,"Not")&&mr(e.not)}i(ss,"IsNot");function op(e){return Fe(e,"Null")&&e.type==="null"&&Ve(e.$id)}i(op,"IsNull");function _t(e){return Fe(e,"Number")&&e.type==="number"&&Ve(e.$id)&&Ye(e.exclusiveMaximum)&&Ye(e.exclusiveMinimum)&&Ye(e.maximum)&&Ye(e.minimum)&&Ye(e.multipleOf)}i(_t,"IsNumber");function vr(e){return Fe(e,"Object")&&e.type==="object"&&Ve(e.$id)&&I5(e.properties)&&P5(e.additionalProperties)&&Ye(e.minProperties)&&Ye(e.maxProperties)}i(vr,"IsObject");function ip(e){return Fe(e,"Promise")&&e.type==="Promise"&&Ve(e.$id)&&mr(e.item)}i(ip,"IsPromise");function gt(e){return Fe(e,"Record")&&e.type==="object"&&Ve(e.$id)&&P5(e.additionalProperties)&&Or(e.patternProperties)&&(r=>{const t=Object.getOwnPropertyNames(r.patternProperties);return t.length===1&&T5(t[0])&&Or(r.patternProperties)&&mr(r.patternProperties[t[0]])})(e)}i(gt,"IsRecord");function nA(e){return Fe(e,"Ref")&&Ve(e.$id)&&Fr(e.$ref)}i(nA,"IsRef");function jl(e){return Fe(e,"RegExp")&&Ve(e.$id)&&Fr(e.source)&&Fr(e.flags)&&Ye(e.maxLength)&&Ye(e.minLength)}i(jl,"IsRegExp");function qn(e){return Fe(e,"String")&&e.type==="string"&&Ve(e.$id)&&Ye(e.minLength)&&Ye(e.maxLength)&&YE(e.pattern)&&JE(e.format)}i(qn,"IsString");function Ul(e){return Fe(e,"Symbol")&&e.type==="symbol"&&Ve(e.$id)}i(Ul,"IsSymbol");function _l(e){return Fe(e,"TemplateLiteral")&&e.type==="string"&&Fr(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}i(_l,"IsTemplateLiteral");function oA(e){return Fe(e,"This")&&Ve(e.$id)&&Fr(e.$ref)}i(oA,"IsThis");function iA(e){return Or(e)&&Ut in e}i(iA,"IsTransform");function Bd(e){return Fe(e,"Tuple")&&e.type==="array"&&Ve(e.$id)&&so(e.minItems)&&so(e.maxItems)&&e.minItems===e.maxItems&&(Nr(e.items)&&Nr(e.additionalItems)&&e.minItems===0||Kt(e.items)&&e.items.every(r=>mr(r)))}i(Bd,"IsTuple");function ea(e){return Fe(e,"Undefined")&&e.type==="undefined"&&Ve(e.$id)}i(ea,"IsUndefined");function Io(e){return Fe(e,"Union")&&Ve(e.$id)&&Or(e)&&Kt(e.anyOf)&&e.anyOf.every(r=>mr(r))}i(Io,"IsUnion");function mu(e){return Fe(e,"Uint8Array")&&e.type==="Uint8Array"&&Ve(e.$id)&&Ye(e.minByteLength)&&Ye(e.maxByteLength)}i(mu,"IsUint8Array");function Vn(e){return Fe(e,"Unknown")&&Ve(e.$id)}i(Vn,"IsUnknown");function aA(e){return Fe(e,"Unsafe")}i(aA,"IsUnsafe");function Od(e){return Fe(e,"Void")&&e.type==="void"&&Ve(e.$id)}i(Od,"IsVoid");function sA(e){return Or(e)&&z in e&&Fr(e[z])&&!ZE.includes(e[z])}i(sA,"IsKind");function mr(e){return Or(e)&&(zn(e)||XE(e)||pa(e)||ma(e)||Td(e)||tp(e)||QE(e)||Pd(e)||Nd(e)||Id(e)||Oo(e)||ba(e)||np(e)||ki(e)||rA(e)||tA(e)||$i(e)||ss(e)||op(e)||_t(e)||vr(e)||ip(e)||gt(e)||nA(e)||jl(e)||qn(e)||Ul(e)||_l(e)||oA(e)||Bd(e)||ea(e)||Io(e)||mu(e)||Vn(e)||aA(e)||Od(e)||sA(e))}i(mr,"IsSchema");const lA="(true|false)",cc="(0|[1-9][0-9]*)",L5="(.*)",uA="(?!.*)",ls=`^${cc}$`,us=`^${L5}$`,cA=`^${uA}$`,j5=new Map;function ap(e){return j5.has(e)}i(ap,"Has$1");function sp(e){return j5.get(e)}i(sp,"Get$1");const lp=new Map;function fi(e){return lp.has(e)}i(fi,"Has");function up(e,r){lp.set(e,r)}i(up,"Set$1");function cp(e){return lp.get(e)}i(cp,"Get");function dA(e,r){return e.includes(r)}i(dA,"SetIncludes");function fA(e){return[...new Set(e)]}i(fA,"SetDistinct");function gA(e,r){return e.filter(t=>r.includes(t))}i(gA,"SetIntersect");function hA(e,r){return e.reduce((t,n)=>gA(t,n),r)}i(hA,"SetIntersectManyResolve");function pA(e){return e.length===1?e[0]:e.length>1?hA(e.slice(1),e[0]):[]}i(pA,"SetIntersectMany");function mA(e){const r=[];for(const t of e)r.push(...t);return r}i(mA,"SetUnionMany");function zl(e){return q({[z]:"Any"},e)}i(zl,"Any");function dp(e,r){return q({[z]:"Array",type:"array",items:e},r)}i(dp,"Array$1");function bA(e){return q({[z]:"Argument",index:e})}i(bA,"Argument");function fp(e,r){return q({[z]:"AsyncIterator",type:"AsyncIterator",items:e},r)}i(fp,"AsyncIterator");function Wr(e,r,t){return q({[z]:"Computed",target:e,parameters:r},t)}i(Wr,"Computed");function vA(e,r){const{[r]:t,...n}=e;return n}i(vA,"DiscardKey");function ln(e,r){return r.reduce((t,n)=>vA(t,n),e)}i(ln,"Discard");function yr(e){return q({[z]:"Never",not:{}},e)}i(yr,"Never");function mt(e){return q({[z]:"MappedResult",properties:e})}i(mt,"MappedResult");function gp(e,r,t){return q({[z]:"Constructor",type:"Constructor",parameters:e,returns:r},t)}i(gp,"Constructor");function bu(e,r,t){return q({[z]:"Function",type:"Function",parameters:e,returns:r},t)}i(bu,"Function");function kg(e,r){return q({[z]:"Union",anyOf:e},r)}i(kg,"UnionCreate");function yA(e){return e.some(r=>wi(r))}i(yA,"IsUnionOptional");function Iv(e){return e.map(r=>wi(r)?wA(r):r)}i(Iv,"RemoveOptionalFromRest$1");function wA(e){return ln(e,[Bo])}i(wA,"RemoveOptionalFromType$1");function kA(e,r){return yA(e)?Ci(kg(Iv(e),r)):kg(Iv(e),r)}i(kA,"ResolveUnion");function Fs(e,r){return e.length===1?q(e[0],r):e.length===0?yr(r):kA(e,r)}i(Fs,"UnionEvaluated");function bt(e,r){return e.length===0?yr(r):e.length===1?q(e[0],r):kg(e,r)}i(bt,"Union$1");class Bv extends pt{static{i(this,"TemplateLiteralParserError")}}function $A(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}i($A,"Unescape");function hp(e,r,t){return e[r]===t&&e.charCodeAt(r-1)!==92}i(hp,"IsNonEscaped");function Fo(e,r){return hp(e,r,"(")}i(Fo,"IsOpenParen");function ql(e,r){return hp(e,r,")")}i(ql,"IsCloseParen");function U5(e,r){return hp(e,r,"|")}i(U5,"IsSeparator");function xA(e){if(!(Fo(e,0)&&ql(e,e.length-1)))return!1;let r=0;for(let t=0;t<e.length;t++)if(Fo(e,t)&&(r+=1),ql(e,t)&&(r-=1),r===0&&t!==e.length-1)return!1;return!0}i(xA,"IsGroup");function DA(e){return e.slice(1,e.length-1)}i(DA,"InGroup");function CA(e){let r=0;for(let t=0;t<e.length;t++)if(Fo(e,t)&&(r+=1),ql(e,t)&&(r-=1),U5(e,t)&&r===0)return!0;return!1}i(CA,"IsPrecedenceOr");function EA(e){for(let r=0;r<e.length;r++)if(Fo(e,r))return!0;return!1}i(EA,"IsPrecedenceAnd");function AA(e){let[r,t]=[0,0];const n=[];for(let a=0;a<e.length;a++)if(Fo(e,a)&&(r+=1),ql(e,a)&&(r-=1),U5(e,a)&&r===0){const s=e.slice(t,a);s.length>0&&n.push(cs(s)),t=a+1}const o=e.slice(t);return o.length>0&&n.push(cs(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}i(AA,"Or");function FA(e){function r(o,a){if(!Fo(o,a))throw new Bv("TemplateLiteralParser: Index must point to open parens");let s=0;for(let l=a;l<o.length;l++)if(Fo(o,l)&&(s+=1),ql(o,l)&&(s-=1),s===0)return[a,l];throw new Bv("TemplateLiteralParser: Unclosed group parens in expression")}i(r,"Group");function t(o,a){for(let s=a;s<o.length;s++)if(Fo(o,s))return[a,s];return[a,o.length]}i(t,"Range");const n=[];for(let o=0;o<e.length;o++)if(Fo(e,o)){const[a,s]=r(e,o),l=e.slice(a,s+1);n.push(cs(l)),o=s}else{const[a,s]=t(e,o),l=e.slice(a,s);l.length>0&&n.push(cs(l)),o=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}i(FA,"And");function cs(e){return xA(e)?cs(DA(e)):CA(e)?AA(e):EA(e)?FA(e):{type:"const",const:$A(e)}}i(cs,"TemplateLiteralParse");function pp(e){return cs(e.slice(1,e.length-1))}i(pp,"TemplateLiteralParseExact");class MA extends pt{static{i(this,"TemplateLiteralFiniteError")}}function SA(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}i(SA,"IsNumberExpression");function TA(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}i(TA,"IsBooleanExpression");function PA(e){return e.type==="const"&&e.const===".*"}i(PA,"IsStringExpression");function Vl(e){return SA(e)||PA(e)?!1:TA(e)?!0:e.type==="and"?e.expr.every(r=>Vl(r)):e.type==="or"?e.expr.every(r=>Vl(r)):e.type==="const"?!0:(()=>{throw new MA("Unknown expression type")})()}i(Vl,"IsTemplateLiteralExpressionFinite");function NA(e){const r=pp(e.pattern);return Vl(r)}i(NA,"IsTemplateLiteralFinite");class IA extends pt{static{i(this,"TemplateLiteralGenerateError")}}function*_5(e){if(e.length===1)return yield*e[0];for(const r of e[0])for(const t of _5(e.slice(1)))yield`${r}${t}`}i(_5,"GenerateReduce");function*BA(e){return yield*_5(e.expr.map(r=>[...Rd(r)]))}i(BA,"GenerateAnd");function*OA(e){for(const r of e.expr)yield*Rd(r)}i(OA,"GenerateOr");function*RA(e){return yield e.const}i(RA,"GenerateConst");function*Rd(e){return e.type==="and"?yield*BA(e):e.type==="or"?yield*OA(e):e.type==="const"?yield*RA(e):(()=>{throw new IA("Unknown expression")})()}i(Rd,"TemplateLiteralExpressionGenerate");function z5(e){const r=pp(e.pattern);return Vl(r)?[...Rd(r)]:[]}i(z5,"TemplateLiteralGenerate");function Ir(e,r){return q({[z]:"Literal",const:e,type:typeof e},r)}i(Ir,"Literal");function q5(e){return q({[z]:"Boolean",type:"boolean"},e)}i(q5,"Boolean$1");function mp(e){return q({[z]:"BigInt",type:"bigint"},e)}i(mp,"BigInt$1");function va(e){return q({[z]:"Number",type:"number"},e)}i(va,"Number$1");function ra(e){return q({[z]:"String",type:"string"},e)}i(ra,"String$1");function*LA(e){const r=e.trim().replace(/"|'/g,"");return r==="boolean"?yield q5():r==="number"?yield va():r==="bigint"?yield mp():r==="string"?yield ra():yield(()=>{const t=r.split("|").map(n=>Ir(n.trim()));return t.length===0?yr():t.length===1?t[0]:Fs(t)})()}i(LA,"FromUnion$e");function*jA(e){if(e[1]!=="{"){const r=Ir("$"),t=$g(e.slice(1));return yield*[r,...t]}for(let r=2;r<e.length;r++)if(e[r]==="}"){const t=LA(e.slice(2,r)),n=$g(e.slice(r+1));return yield*[...t,...n]}yield Ir(e)}i(jA,"FromTerminal");function*$g(e){for(let r=0;r<e.length;r++)if(e[r]==="$"){const t=Ir(e.slice(0,r)),n=jA(e.slice(r));return yield*[t,...n]}yield Ir(e)}i($g,"FromSyntax");function UA(e){return[...$g(e)]}i(UA,"TemplateLiteralSyntax");class _A extends pt{static{i(this,"TemplateLiteralPatternError")}}function zA(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}i(zA,"Escape");function V5(e,r){return ga(e)?e.pattern.slice(1,e.pattern.length-1):it(e)?`(${e.anyOf.map(t=>V5(t,r)).join("|")})`:As(e)?`${r}${cc}`:Es(e)?`${r}${cc}`:Ad(e)?`${r}${cc}`:hu(e)?`${r}${L5}`:da(e)?`${r}${zA(e.const.toString())}`:fu(e)?`${r}${lA}`:(()=>{throw new _A(`Unexpected Kind '${e[z]}'`)})()}i(V5,"Visit$7");function Ov(e){return`^${e.map(r=>V5(r,"")).join("")}$`}i(Ov,"TemplateLiteralPattern");function Lc(e){const t=z5(e).map(n=>Ir(n));return Fs(t)}i(Lc,"TemplateLiteralToUnion");function W5(e,r){const t=Fr(e)?Ov(UA(e)):Ov(e);return q({[z]:"TemplateLiteral",type:"string",pattern:t},r)}i(W5,"TemplateLiteral");function qA(e){return z5(e).map(t=>t.toString())}i(qA,"FromTemplateLiteral$4");function VA(e){const r=[];for(const t of e)r.push(...xi(t));return r}i(VA,"FromUnion$d");function WA(e){return[e.toString()]}i(WA,"FromLiteral$3");function xi(e){return[...new Set(ga(e)?qA(e):it(e)?VA(e.anyOf):da(e)?WA(e.const):As(e)?["[number]"]:Es(e)?["[number]"]:[])]}i(xi,"IndexPropertyKeys");function KA(e,r,t){const n={};for(const o of Object.getOwnPropertyNames(r))n[o]=Ld(e,xi(r[o]),t);return n}i(KA,"FromProperties$i");function HA(e,r,t){return KA(e,r.properties,t)}i(HA,"FromMappedResult$b");function GA(e,r,t){const n=HA(e,r,t);return mt(n)}i(GA,"IndexFromMappedResult");function K5(e,r){return e.map(t=>H5(t,r))}i(K5,"FromRest$6");function ZA(e){return e.filter(r=>!gu(r))}i(ZA,"FromIntersectRest");function YA(e,r){return Y5(ZA(K5(e,r)))}i(YA,"FromIntersect$c");function JA(e){return e.some(r=>gu(r))?[]:e}i(JA,"FromUnionRest");function XA(e,r){return Fs(JA(K5(e,r)))}i(XA,"FromUnion$c");function QA(e,r){return r in e?e[r]:r==="[number]"?Fs(e):yr()}i(QA,"FromTuple$9");function e9(e,r){return r==="[number]"?e:yr()}i(e9,"FromArray$a");function r9(e,r){return r in e?e[r]:yr()}i(r9,"FromProperty$2");function H5(e,r){return An(e)?YA(e.allOf,r):it(e)?XA(e.anyOf,r):ha(e)?QA(e.items??[],r):$s(e)?e9(e.items,r):Hn(e)?r9(e.properties,r):yr()}i(H5,"IndexFromPropertyKey");function bp(e,r){return r.map(t=>H5(e,t))}i(bp,"IndexFromPropertyKeys");function Rv(e,r){return Fs(bp(e,r))}i(Rv,"FromSchema");function Ld(e,r,t){if(qt(e)||qt(r)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Tt(e)||!Tt(r))throw new pt(n);return Wr("Index",[e,r])}return dn(r)?GA(e,r,t):fa(r)?i9(e,r,t):q(Tt(r)?Rv(e,xi(r)):Rv(e,r),t)}i(Ld,"Index");function t9(e,r,t){return{[r]:Ld(e,[r],an(t))}}i(t9,"MappedIndexPropertyKey");function n9(e,r,t){return r.reduce((n,o)=>({...n,...t9(e,o,t)}),{})}i(n9,"MappedIndexPropertyKeys");function o9(e,r,t){return n9(e,r.keys,t)}i(o9,"MappedIndexProperties");function i9(e,r,t){const n=o9(e,r,t);return mt(n)}i(i9,"IndexFromMappedKey");function vp(e,r){return q({[z]:"Iterator",type:"Iterator",items:e},r)}i(vp,"Iterator");function a9(e){return globalThis.Object.keys(e).filter(r=>!wi(e[r]))}i(a9,"RequiredArray");function s9(e,r){const t=a9(e),n=t.length>0?{[z]:"Object",type:"object",required:t,properties:e}:{[z]:"Object",type:"object",properties:e};return q(n,r)}i(s9,"_Object");var nt=s9;function G5(e,r){return q({[z]:"Promise",type:"Promise",item:e},r)}i(G5,"Promise$1");function l9(e){return q(ln(e,[du]))}i(l9,"RemoveReadonly");function u9(e){return q({...e,[du]:"Readonly"})}i(u9,"AddReadonly");function c9(e,r){return r===!1?l9(e):u9(e)}i(c9,"ReadonlyWithFlag");function Di(e,r){const t=r??!0;return dn(e)?g9(e,t):c9(e,t)}i(Di,"Readonly");function d9(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Di(e[n],r);return t}i(d9,"FromProperties$h");function f9(e,r){return d9(e.properties,r)}i(f9,"FromMappedResult$a");function g9(e,r){const t=f9(e,r);return mt(t)}i(g9,"ReadonlyFromMappedResult");function Ms(e,r){return q(e.length>0?{[z]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[z]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},r)}i(Ms,"Tuple");function Z5(e,r){return e in r?vn(e,r[e]):mt(r)}i(Z5,"FromMappedResult$9");function h9(e){return{[e]:Ir(e)}}i(h9,"MappedKeyToKnownMappedResultProperties");function p9(e){const r={};for(const t of e)r[t]=Ir(t);return r}i(p9,"MappedKeyToUnknownMappedResultProperties");function m9(e,r){return dA(r,e)?h9(e):p9(r)}i(m9,"MappedKeyToMappedResultProperties");function b9(e,r){const t=m9(e,r);return Z5(e,t)}i(b9,"FromMappedKey$3");function Hs(e,r){return r.map(t=>vn(e,t))}i(Hs,"FromRest$5");function v9(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(r))t[n]=vn(e,r[n]);return t}i(v9,"FromProperties$g");function vn(e,r){const t={...r};return wi(r)?Ci(vn(e,ln(r,[Bo]))):Jh(r)?Di(vn(e,ln(r,[du]))):dn(r)?Z5(e,r.properties):fa(r)?b9(e,r.keys):Ds(r)?gp(Hs(e,r.parameters),vn(e,r.returns),t):Cs(r)?bu(Hs(e,r.parameters),vn(e,r.returns),t):Ed(r)?fp(vn(e,r.items),t):Fd(r)?vp(vn(e,r.items),t):An(r)?Ei(Hs(e,r.allOf),t):it(r)?bt(Hs(e,r.anyOf),t):ha(r)?Ms(Hs(e,r.items??[]),t):Hn(r)?nt(v9(e,r.properties),t):$s(r)?dp(vn(e,r.items),t):Md(r)?G5(vn(e,r.item),t):r}i(vn,"FromSchemaType");function y9(e,r){const t={};for(const n of e)t[n]=vn(n,r);return t}i(y9,"MappedFunctionReturnType");function w9(e,r,t){const n=Tt(e)?xi(e):e,o=r({[z]:"MappedKey",keys:n}),a=y9(n,o);return nt(a,t)}i(w9,"Mapped");function k9(e){return q(ln(e,[Bo]))}i(k9,"RemoveOptional");function $9(e){return q({...e,[Bo]:"Optional"})}i($9,"AddOptional");function x9(e,r){return r===!1?k9(e):$9(e)}i(x9,"OptionalWithFlag");function Ci(e,r){const t=r??!0;return dn(e)?E9(e,t):x9(e,t)}i(Ci,"Optional");function D9(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Ci(e[n],r);return t}i(D9,"FromProperties$f");function C9(e,r){return D9(e.properties,r)}i(C9,"FromMappedResult$8");function E9(e,r){const t=C9(e,r);return mt(t)}i(E9,"OptionalFromMappedResult");function xg(e,r={}){const t=e.every(o=>Hn(o)),n=Tt(r.unevaluatedProperties)?{unevaluatedProperties:r.unevaluatedProperties}:{};return q(r.unevaluatedProperties===!1||Tt(r.unevaluatedProperties)||t?{...n,[z]:"Intersect",type:"object",allOf:e}:{...n,[z]:"Intersect",allOf:e},r)}i(xg,"IntersectCreate");function A9(e){return e.every(r=>wi(r))}i(A9,"IsIntersectOptional");function F9(e){return ln(e,[Bo])}i(F9,"RemoveOptionalFromType");function Lv(e){return e.map(r=>wi(r)?F9(r):r)}i(Lv,"RemoveOptionalFromRest");function M9(e,r){return A9(e)?Ci(xg(Lv(e),r)):xg(Lv(e),r)}i(M9,"ResolveIntersect");function Y5(e,r={}){if(e.length===1)return q(e[0],r);if(e.length===0)return yr(r);if(e.some(t=>tr(t)))throw new Error("Cannot intersect transform types");return M9(e,r)}i(Y5,"IntersectEvaluated");function Ei(e,r){if(e.length===1)return q(e[0],r);if(e.length===0)return yr(r);if(e.some(t=>tr(t)))throw new Error("Cannot intersect transform types");return xg(e,r)}i(Ei,"Intersect$1");function Ss(...e){const[r,t]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof r!="string")throw new pt("Ref: $ref must be a string");return q({[z]:"Ref",$ref:r},t)}i(Ss,"Ref");function S9(e,r){return Wr("Awaited",[Wr(e,r)])}i(S9,"FromComputed$4");function T9(e){return Wr("Awaited",[Ss(e)])}i(T9,"FromRef$8");function P9(e){return Ei(J5(e))}i(P9,"FromIntersect$b");function N9(e){return bt(J5(e))}i(N9,"FromUnion$b");function I9(e){return jd(e)}i(I9,"FromPromise$5");function J5(e){return e.map(r=>jd(r))}i(J5,"FromRest$4");function jd(e,r){return q(xs(e)?S9(e.target,e.parameters):An(e)?P9(e.allOf):it(e)?N9(e.anyOf):Md(e)?I9(e.item):qt(e)?T9(e.$ref):e,r)}i(jd,"Awaited");function X5(e){const r=[];for(const t of e)r.push(ya(t));return r}i(X5,"FromRest$3");function B9(e){const r=X5(e);return mA(r)}i(B9,"FromIntersect$a");function O9(e){const r=X5(e);return pA(r)}i(O9,"FromUnion$a");function R9(e){return e.map((r,t)=>t.toString())}i(R9,"FromTuple$8");function L9(e){return["[number]"]}i(L9,"FromArray$9");function j9(e){return globalThis.Object.getOwnPropertyNames(e)}i(j9,"FromProperties$e");function U9(e){return Dg?globalThis.Object.getOwnPropertyNames(e).map(t=>t[0]==="^"&&t[t.length-1]==="$"?t.slice(1,t.length-1):t):[]}i(U9,"FromPatternProperties");function ya(e){return An(e)?B9(e.allOf):it(e)?O9(e.anyOf):ha(e)?R9(e.items??[]):$s(e)?L9(e.items):Hn(e)?j9(e.properties):Sd(e)?U9(e.patternProperties):[]}i(ya,"KeyOfPropertyKeys");let Dg=!1;function ds(e){Dg=!0;const r=ya(e);return Dg=!1,`^(${r.map(n=>`(${n})`).join("|")})$`}i(ds,"KeyOfPattern");function _9(e,r){return Wr("KeyOf",[Wr(e,r)])}i(_9,"FromComputed$3");function z9(e){return Wr("KeyOf",[Ss(e)])}i(z9,"FromRef$7");function q9(e,r){const t=ya(e),n=V9(t),o=Fs(n);return q(o,r)}i(q9,"KeyOfFromType");function V9(e){return e.map(r=>r==="[number]"?va():Ir(r))}i(V9,"KeyOfPropertyKeysToRest");function yp(e,r){return xs(e)?_9(e.target,e.parameters):qt(e)?z9(e.$ref):dn(e)?H9(e,r):q9(e,r)}i(yp,"KeyOf");function W9(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=yp(e[n],an(r));return t}i(W9,"FromProperties$d");function K9(e,r){return W9(e.properties,r)}i(K9,"FromMappedResult$7");function H9(e,r){const t=K9(e,r);return mt(t)}i(H9,"KeyOfFromMappedResult");function Q5(e){const r=ya(e),t=bp(e,r);return r.map((n,o)=>[r[o],t[o]])}i(Q5,"KeyOfPropertyEntries");function G9(e){const r=[];for(const t of e)r.push(...ya(t));return fA(r)}i(G9,"CompositeKeys");function Z9(e){return e.filter(r=>!gu(r))}i(Z9,"FilterNever");function Y9(e,r){const t=[];for(const n of e)t.push(...bp(n,[r]));return Z9(t)}i(Y9,"CompositeProperty");function J9(e,r){const t={};for(const n of r)t[n]=Y5(Y9(e,n));return t}i(J9,"CompositeProperties");function X9(e,r){const t=G9(e),n=J9(e,t);return nt(n,r)}i(X9,"Composite");function ek(e){return q({[z]:"Date",type:"Date"},e)}i(ek,"Date$1");function rk(e){return q({[z]:"Null",type:"null"},e)}i(rk,"Null");function tk(e){return q({[z]:"Symbol",type:"symbol"},e)}i(tk,"Symbol$1");function nk(e){return q({[z]:"Undefined",type:"undefined"},e)}i(nk,"Undefined");function ok(e){return q({[z]:"Uint8Array",type:"Uint8Array"},e)}i(ok,"Uint8Array$1");function Ud(e){return q({[z]:"Unknown"},e)}i(Ud,"Unknown");function Q9(e){return e.map(r=>wp(r,!1))}i(Q9,"FromArray$8");function e7(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=Di(wp(e[t],!1));return r}i(e7,"FromProperties$c");function Vu(e,r){return r===!0?e:Di(e)}i(Vu,"ConditionalReadonly");function wp(e,r){return ME(e)||TE(e)?Vu(zl(),r):Kt(e)?Di(Ms(Q9(e))):cu(e)?ok():Hh(e)?ek():Or(e)?Vu(nt(e7(e)),r):SE(e)?Vu(bu([],Ud()),r):Nr(e)?nk():PE(e)?rk():NE(e)?tk():v5(e)?mp():so(e)||uu(e)||Fr(e)?Ir(e):nt({})}i(wp,"FromValue");function r7(e,r){return q(wp(e,!0),r)}i(r7,"Const");function t7(e,r){return Ds(e)?Ms(e.parameters,r):yr(r)}i(t7,"ConstructorParameters");function n7(e,r){if(Nr(e))throw new Error("Enum undefined or empty");const t=globalThis.Object.getOwnPropertyNames(e).filter(a=>isNaN(a)).map(a=>e[a]),o=[...new Set(t)].map(a=>Ir(a));return bt(o,{...r,[Cd]:"Enum"})}i(n7,"Enum");class o7 extends pt{static{i(this,"ExtendsResolverError")}}var N;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(N||(N={}));function Cn(e){return e===N.False?e:N.True}i(Cn,"IntoBooleanResult");function Ts(e){throw new o7(e)}i(Ts,"Throw");function Rr(e){return $i(e)||ba(e)||Io(e)||Vn(e)||zn(e)}i(Rr,"IsStructuralRight");function Lr(e,r){return $i(r)?sk():ba(r)?_d(e,r):Io(r)?$p(e,r):Vn(r)?dk():zn(r)?kp():Ts("StructuralRight")}i(Lr,"StructuralRight");function kp(e,r){return N.True}i(kp,"FromAnyRight");function i7(e,r){return ba(r)?_d(e,r):Io(r)&&r.anyOf.some(t=>zn(t)||Vn(t))?N.True:Io(r)?N.Union:Vn(r)||zn(r)?N.True:N.Union}i(i7,"FromAny$2");function a7(e,r){return Vn(e)?N.False:zn(e)?N.Union:$i(e)?N.True:N.False}i(a7,"FromArrayRight");function s7(e,r){return vr(r)&&zd(r)?N.True:Rr(r)?Lr(e,r):pa(r)?Cn(qe(e.items,r.items)):N.False}i(s7,"FromArray$7");function l7(e,r){return Rr(r)?Lr(e,r):tp(r)?Cn(qe(e.items,r.items)):N.False}i(l7,"FromAsyncIterator$5");function u7(e,r){return Rr(r)?Lr(e,r):vr(r)?Ct(e,r):gt(r)?Fn(e,r):Td(r)?N.True:N.False}i(u7,"FromBigInt$2");function ik(e,r){return R5(e)||ma(e)?N.True:N.False}i(ik,"FromBooleanRight");function c7(e,r){return Rr(r)?Lr(e,r):vr(r)?Ct(e,r):gt(r)?Fn(e,r):ma(r)?N.True:N.False}i(c7,"FromBoolean$2");function d7(e,r){return Rr(r)?Lr(e,r):vr(r)?Ct(e,r):Pd(r)?e.parameters.length>r.parameters.length?N.False:e.parameters.every((t,n)=>Cn(qe(r.parameters[n],t))===N.True)?Cn(qe(e.returns,r.returns)):N.False:N.False}i(d7,"FromConstructor$5");function f7(e,r){return Rr(r)?Lr(e,r):vr(r)?Ct(e,r):gt(r)?Fn(e,r):Nd(r)?N.True:N.False}i(f7,"FromDate$2");function g7(e,r){return Rr(r)?Lr(e,r):vr(r)?Ct(e,r):Id(r)?e.parameters.length>r.parameters.length?N.False:e.parameters.every((t,n)=>Cn(qe(r.parameters[n],t))===N.True)?Cn(qe(e.returns,r.returns)):N.False:N.False}i(g7,"FromFunction$5");function ak(e,r){return ki(e)&&so(e.const)||_t(e)||Oo(e)?N.True:N.False}i(ak,"FromIntegerRight");function h7(e,r){return Oo(r)||_t(r)?N.True:Rr(r)?Lr(e,r):vr(r)?Ct(e,r):gt(r)?Fn(e,r):N.False}i(h7,"FromInteger$2");function _d(e,r){return r.allOf.every(t=>qe(e,t)===N.True)?N.True:N.False}i(_d,"FromIntersectRight");function p7(e,r){return e.allOf.some(t=>qe(t,r)===N.True)?N.True:N.False}i(p7,"FromIntersect$9");function m7(e,r){return Rr(r)?Lr(e,r):np(r)?Cn(qe(e.items,r.items)):N.False}i(m7,"FromIterator$5");function b7(e,r){return ki(r)&&r.const===e.const?N.True:Rr(r)?Lr(e,r):vr(r)?Ct(e,r):gt(r)?Fn(e,r):qn(r)?ck(e):_t(r)?lk(e):Oo(r)?ak(e):ma(r)?ik(e):N.False}i(b7,"FromLiteral$2");function sk(e,r){return N.False}i(sk,"FromNeverRight");function v7(e,r){return N.True}i(v7,"FromNever$2");function jv(e){let[r,t]=[e,0];for(;ss(r);)r=r.not,t+=1;return t%2===0?r:Ud()}i(jv,"UnwrapTNot");function y7(e,r){return ss(e)?qe(jv(e),r):ss(r)?qe(e,jv(r)):Ts("Invalid fallthrough for Not")}i(y7,"FromNot$5");function w7(e,r){return Rr(r)?Lr(e,r):vr(r)?Ct(e,r):gt(r)?Fn(e,r):op(r)?N.True:N.False}i(w7,"FromNull$2");function lk(e,r){return O5(e)||_t(e)||Oo(e)?N.True:N.False}i(lk,"FromNumberRight");function k7(e,r){return Rr(r)?Lr(e,r):vr(r)?Ct(e,r):gt(r)?Fn(e,r):Oo(r)||_t(r)?N.True:N.False}i(k7,"FromNumber$2");function Vt(e,r){return Object.getOwnPropertyNames(e.properties).length===r}i(Vt,"IsObjectPropertyCount");function Uv(e){return zd(e)}i(Uv,"IsObjectStringLike");function _v(e){return Vt(e,0)||Vt(e,1)&&"description"in e.properties&&Io(e.properties.description)&&e.properties.description.anyOf.length===2&&(qn(e.properties.description.anyOf[0])&&ea(e.properties.description.anyOf[1])||qn(e.properties.description.anyOf[1])&&ea(e.properties.description.anyOf[0]))}i(_v,"IsObjectSymbolLike");function t0(e){return Vt(e,0)}i(t0,"IsObjectNumberLike");function zv(e){return Vt(e,0)}i(zv,"IsObjectBooleanLike");function $7(e){return Vt(e,0)}i($7,"IsObjectBigIntLike");function x7(e){return Vt(e,0)}i(x7,"IsObjectDateLike");function D7(e){return zd(e)}i(D7,"IsObjectUint8ArrayLike");function C7(e){const r=va();return Vt(e,0)||Vt(e,1)&&"length"in e.properties&&Cn(qe(e.properties.length,r))===N.True}i(C7,"IsObjectFunctionLike");function E7(e){return Vt(e,0)}i(E7,"IsObjectConstructorLike");function zd(e){const r=va();return Vt(e,0)||Vt(e,1)&&"length"in e.properties&&Cn(qe(e.properties.length,r))===N.True}i(zd,"IsObjectArrayLike");function A7(e){const r=bu([zl()],zl());return Vt(e,0)||Vt(e,1)&&"then"in e.properties&&Cn(qe(e.properties.then,r))===N.True}i(A7,"IsObjectPromiseLike");function uk(e,r){return qe(e,r)===N.False||Rc(e)&&!Rc(r)?N.False:N.True}i(uk,"Property");function Ct(e,r){return Vn(e)?N.False:zn(e)?N.Union:$i(e)||B5(e)&&Uv(r)||O5(e)&&t0(r)||R5(e)&&zv(r)||Ul(e)&&_v(r)||Td(e)&&$7(r)||qn(e)&&Uv(r)||Ul(e)&&_v(r)||_t(e)&&t0(r)||Oo(e)&&t0(r)||ma(e)&&zv(r)||mu(e)&&D7(r)||Nd(e)&&x7(r)||Pd(e)&&E7(r)||Id(e)&&C7(r)?N.True:gt(e)&&qn(Cg(e))?r[Cd]==="Record"?N.True:N.False:gt(e)&&_t(Cg(e))&&Vt(r,0)?N.True:N.False}i(Ct,"FromObjectRight");function F7(e,r){return Rr(r)?Lr(e,r):gt(r)?Fn(e,r):vr(r)?(()=>{for(const t of Object.getOwnPropertyNames(r.properties)){if(!(t in e.properties)&&!Rc(r.properties[t]))return N.False;if(Rc(r.properties[t]))return N.True;if(uk(e.properties[t],r.properties[t])===N.False)return N.False}return N.True})():N.False}i(F7,"FromObject$b");function M7(e,r){return Rr(r)?Lr(e,r):vr(r)&&A7(r)?N.True:ip(r)?Cn(qe(e.item,r.item)):N.False}i(M7,"FromPromise$4");function Cg(e){return ls in e.patternProperties?va():us in e.patternProperties?ra():Ts("Unknown record key pattern")}i(Cg,"RecordKey$1");function Eg(e){return ls in e.patternProperties?e.patternProperties[ls]:us in e.patternProperties?e.patternProperties[us]:Ts("Unable to get record value schema")}i(Eg,"RecordValue$1");function Fn(e,r){const[t,n]=[Cg(r),Eg(r)];return B5(e)&&_t(t)&&Cn(qe(e,n))===N.True?N.True:mu(e)&&_t(t)||qn(e)&&_t(t)||pa(e)&&_t(t)?qe(e,n):vr(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(uk(n,e.properties[o])===N.False)return N.False;return N.True})():N.False}i(Fn,"FromRecordRight");function S7(e,r){return Rr(r)?Lr(e,r):vr(r)?Ct(e,r):gt(r)?qe(Eg(e),Eg(r)):N.False}i(S7,"FromRecord$7");function T7(e,r){const t=jl(e)?ra():e,n=jl(r)?ra():r;return qe(t,n)}i(T7,"FromRegExp$2");function ck(e,r){return ki(e)&&Fr(e.const)||qn(e)?N.True:N.False}i(ck,"FromStringRight");function P7(e,r){return Rr(r)?Lr(e,r):vr(r)?Ct(e,r):gt(r)?Fn(e,r):qn(r)?N.True:N.False}i(P7,"FromString$2");function N7(e,r){return Rr(r)?Lr(e,r):vr(r)?Ct(e,r):gt(r)?Fn(e,r):Ul(r)?N.True:N.False}i(N7,"FromSymbol$2");function I7(e,r){return _l(e)?qe(Lc(e),r):_l(r)?qe(e,Lc(r)):Ts("Invalid fallthrough for TemplateLiteral")}i(I7,"FromTemplateLiteral$3");function B7(e,r){return pa(r)&&e.items!==void 0&&e.items.every(t=>qe(t,r.items)===N.True)}i(B7,"IsArrayOfTuple");function O7(e,r){return $i(e)?N.True:Vn(e)?N.False:zn(e)?N.Union:N.False}i(O7,"FromTupleRight");function R7(e,r){return Rr(r)?Lr(e,r):vr(r)&&zd(r)||pa(r)&&B7(e,r)?N.True:Bd(r)?Nr(e.items)&&!Nr(r.items)||!Nr(e.items)&&Nr(r.items)?N.False:Nr(e.items)&&!Nr(r.items)||e.items.every((t,n)=>qe(t,r.items[n])===N.True)?N.True:N.False:N.False}i(R7,"FromTuple$7");function L7(e,r){return Rr(r)?Lr(e,r):vr(r)?Ct(e,r):gt(r)?Fn(e,r):mu(r)?N.True:N.False}i(L7,"FromUint8Array$2");function j7(e,r){return Rr(r)?Lr(e,r):vr(r)?Ct(e,r):gt(r)?Fn(e,r):Od(r)?z7(e):ea(r)?N.True:N.False}i(j7,"FromUndefined$2");function $p(e,r){return r.anyOf.some(t=>qe(e,t)===N.True)?N.True:N.False}i($p,"FromUnionRight");function U7(e,r){return e.anyOf.every(t=>qe(t,r)===N.True)?N.True:N.False}i(U7,"FromUnion$9");function dk(e,r){return N.True}i(dk,"FromUnknownRight");function _7(e,r){return $i(r)?sk():ba(r)?_d(e,r):Io(r)?$p(e,r):zn(r)?kp():qn(r)?ck(e):_t(r)?lk(e):Oo(r)?ak(e):ma(r)?ik(e):pa(r)?a7(e):Bd(r)?O7(e):vr(r)?Ct(e,r):Vn(r)?N.True:N.False}i(_7,"FromUnknown$2");function z7(e,r){return ea(e)||ea(e)?N.True:N.False}i(z7,"FromVoidRight");function q7(e,r){return ba(r)?_d(e,r):Io(r)?$p(e,r):Vn(r)?dk():zn(r)?kp():vr(r)?Ct(e,r):Od(r)?N.True:N.False}i(q7,"FromVoid$2");function qe(e,r){return _l(e)||_l(r)?I7(e,r):jl(e)||jl(r)?T7(e,r):ss(e)||ss(r)?y7(e,r):zn(e)?i7(e,r):pa(e)?s7(e,r):Td(e)?u7(e,r):ma(e)?c7(e,r):tp(e)?l7(e,r):Pd(e)?d7(e,r):Nd(e)?f7(e,r):Id(e)?g7(e,r):Oo(e)?h7(e,r):ba(e)?p7(e,r):np(e)?m7(e,r):ki(e)?b7(e,r):$i(e)?v7():op(e)?w7(e,r):_t(e)?k7(e,r):vr(e)?F7(e,r):gt(e)?S7(e,r):qn(e)?P7(e,r):Ul(e)?N7(e,r):Bd(e)?R7(e,r):ip(e)?M7(e,r):mu(e)?L7(e,r):ea(e)?j7(e,r):Io(e)?U7(e,r):Vn(e)?_7(e,r):Od(e)?q7(e,r):Ts(`Unknown left type operand '${e[z]}'`)}i(qe,"Visit$6");function vu(e,r){return qe(e,r)}i(vu,"ExtendsCheck");function V7(e,r,t,n,o){const a={};for(const s of globalThis.Object.getOwnPropertyNames(e))a[s]=xp(e[s],r,t,n,an(o));return a}i(V7,"FromProperties$b");function W7(e,r,t,n,o){return V7(e.properties,r,t,n,o)}i(W7,"FromMappedResult$6");function K7(e,r,t,n,o){const a=W7(e,r,t,n,o);return mt(a)}i(K7,"ExtendsFromMappedResult");function H7(e,r,t,n){const o=vu(e,r);return o===N.Union?bt([t,n]):o===N.True?t:n}i(H7,"ExtendsResolve");function xp(e,r,t,n,o){return dn(e)?K7(e,r,t,n,o):fa(e)?q(J7(e,r,t,n,o)):q(H7(e,r,t,n),o)}i(xp,"Extends");function G7(e,r,t,n,o){return{[e]:xp(Ir(e),r,t,n,an(o))}}i(G7,"FromPropertyKey$2");function Z7(e,r,t,n,o){return e.reduce((a,s)=>({...a,...G7(s,r,t,n,o)}),{})}i(Z7,"FromPropertyKeys$2");function Y7(e,r,t,n,o){return Z7(e.keys,r,t,n,o)}i(Y7,"FromMappedKey$2");function J7(e,r,t,n,o){const a=Y7(e,r,t,n,o);return mt(a)}i(J7,"ExtendsFromMappedKey");function X7(e){return e.allOf.every(r=>Ps(r))}i(X7,"Intersect");function Q7(e){return e.anyOf.some(r=>Ps(r))}i(Q7,"Union");function eF(e){return!Ps(e.not)}i(eF,"Not$1");function Ps(e){return e[z]==="Intersect"?X7(e):e[z]==="Union"?Q7(e):e[z]==="Not"?eF(e):e[z]==="Undefined"}i(Ps,"ExtendsUndefinedCheck");function rF(e,r){return Dp(Lc(e),r)}i(rF,"ExcludeFromTemplateLiteral");function tF(e,r){const t=e.filter(n=>vu(n,r)===N.False);return t.length===1?t[0]:bt(t)}i(tF,"ExcludeRest");function Dp(e,r,t={}){return ga(e)?q(rF(e,r),t):dn(e)?q(iF(e,r),t):q(it(e)?tF(e.anyOf,r):vu(e,r)!==N.False?yr():e,t)}i(Dp,"Exclude");function nF(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Dp(e[n],r);return t}i(nF,"FromProperties$a");function oF(e,r){return nF(e.properties,r)}i(oF,"FromMappedResult$5");function iF(e,r){const t=oF(e,r);return mt(t)}i(iF,"ExcludeFromMappedResult");function aF(e,r){return Cp(Lc(e),r)}i(aF,"ExtractFromTemplateLiteral");function sF(e,r){const t=e.filter(n=>vu(n,r)!==N.False);return t.length===1?t[0]:bt(t)}i(sF,"ExtractRest");function Cp(e,r,t){return ga(e)?q(aF(e,r),t):dn(e)?q(cF(e,r),t):q(it(e)?sF(e.anyOf,r):vu(e,r)!==N.False?e:yr(),t)}i(Cp,"Extract");function lF(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Cp(e[n],r);return t}i(lF,"FromProperties$9");function uF(e,r){return lF(e.properties,r)}i(uF,"FromMappedResult$4");function cF(e,r){const t=uF(e,r);return mt(t)}i(cF,"ExtractFromMappedResult");function dF(e,r){return Ds(e)?q(e.returns,r):yr(r)}i(dF,"InstanceType");function fk(e){return Di(Ci(e))}i(fk,"ReadonlyOptional");function wa(e,r,t){return q({[z]:"Record",type:"object",patternProperties:{[e]:r}},t)}i(wa,"RecordCreateFromPattern");function Ep(e,r,t){const n={};for(const o of e)n[o]=r;return nt(n,{...t,[Cd]:"Record"})}i(Ep,"RecordCreateFromKeys");function fF(e,r,t){return NA(e)?Ep(xi(e),r,t):wa(e.pattern,r,t)}i(fF,"FromTemplateLiteralKey");function gF(e,r,t){return Ep(xi(bt(e)),r,t)}i(gF,"FromUnionKey");function hF(e,r,t){return Ep([e.toString()],r,t)}i(hF,"FromLiteralKey");function pF(e,r,t){return wa(e.source,r,t)}i(pF,"FromRegExpKey");function mF(e,r,t){const n=Nr(e.pattern)?us:e.pattern;return wa(n,r,t)}i(mF,"FromStringKey");function bF(e,r,t){return wa(us,r,t)}i(bF,"FromAnyKey");function vF(e,r,t){return wa(cA,r,t)}i(vF,"FromNeverKey");function yF(e,r,t){return nt({true:r,false:r},t)}i(yF,"FromBooleanKey");function wF(e,r,t){return wa(ls,r,t)}i(wF,"FromIntegerKey");function kF(e,r,t){return wa(ls,r,t)}i(kF,"FromNumberKey");function gk(e,r,t={}){return it(e)?gF(e.anyOf,r,t):ga(e)?fF(e,r,t):da(e)?hF(e.const,r,t):fu(e)?yF(e,r,t):Es(e)?wF(e,r,t):As(e)?kF(e,r,t):S5(e)?pF(e,r,t):hu(e)?mF(e,r,t):A5(e)?bF(e,r,t):gu(e)?vF(e,r,t):yr(t)}i(gk,"Record");function Ap(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}i(Ap,"RecordPattern");function $F(e){const r=Ap(e);return r===us?ra():r===ls?va():ra({pattern:r})}i($F,"RecordKey");function hk(e){return e.patternProperties[Ap(e)]}i(hk,"RecordValue");function xF(e,r){return r.parameters=yu(e,r.parameters),r.returns=Wn(e,r.returns),r}i(xF,"FromConstructor$4");function DF(e,r){return r.parameters=yu(e,r.parameters),r.returns=Wn(e,r.returns),r}i(DF,"FromFunction$4");function CF(e,r){return r.allOf=yu(e,r.allOf),r}i(CF,"FromIntersect$8");function EF(e,r){return r.anyOf=yu(e,r.anyOf),r}i(EF,"FromUnion$8");function AF(e,r){return Nr(r.items)||(r.items=yu(e,r.items)),r}i(AF,"FromTuple$6");function FF(e,r){return r.items=Wn(e,r.items),r}i(FF,"FromArray$6");function MF(e,r){return r.items=Wn(e,r.items),r}i(MF,"FromAsyncIterator$4");function SF(e,r){return r.items=Wn(e,r.items),r}i(SF,"FromIterator$4");function TF(e,r){return r.item=Wn(e,r.item),r}i(TF,"FromPromise$3");function PF(e,r){const t=OF(e,r.properties);return{...r,...nt(t)}}i(PF,"FromObject$a");function NF(e,r){const t=Wn(e,$F(r)),n=Wn(e,hk(r)),o=gk(t,n);return{...r,...o}}i(NF,"FromRecord$6");function IF(e,r){return r.index in e?e[r.index]:Ud()}i(IF,"FromArgument$2");function BF(e,r){const t=Jh(r),n=wi(r),o=Wn(e,r);return t&&n?fk(o):t&&!n?Di(o):!t&&n?Ci(o):o}i(BF,"FromProperty$1");function OF(e,r){return globalThis.Object.getOwnPropertyNames(r).reduce((t,n)=>({...t,[n]:BF(e,r[n])}),{})}i(OF,"FromProperties$8");function yu(e,r){return r.map(t=>Wn(e,t))}i(yu,"FromTypes$1");function Wn(e,r){return Ds(r)?xF(e,r):Cs(r)?DF(e,r):An(r)?CF(e,r):it(r)?EF(e,r):ha(r)?AF(e,r):$s(r)?FF(e,r):Ed(r)?MF(e,r):Fd(r)?SF(e,r):Md(r)?TF(e,r):Hn(r)?PF(e,r):Sd(r)?NF(e,r):F5(r)?IF(e,r):r}i(Wn,"FromType$1");function RF(e,r){return Wn(r,Gh(e))}i(RF,"Instantiate");function LF(e){return q({[z]:"Integer",type:"integer"},e)}i(LF,"Integer");function jF(e,r,t){return{[e]:Ns(Ir(e),r,an(t))}}i(jF,"MappedIntrinsicPropertyKey");function UF(e,r,t){return e.reduce((o,a)=>({...o,...jF(a,r,t)}),{})}i(UF,"MappedIntrinsicPropertyKeys");function _F(e,r,t){return UF(e.keys,r,t)}i(_F,"MappedIntrinsicProperties");function zF(e,r,t){const n=_F(e,r,t);return mt(n)}i(zF,"IntrinsicFromMappedKey");function qF(e){const[r,t]=[e.slice(0,1),e.slice(1)];return[r.toLowerCase(),t].join("")}i(qF,"ApplyUncapitalize");function VF(e){const[r,t]=[e.slice(0,1),e.slice(1)];return[r.toUpperCase(),t].join("")}i(VF,"ApplyCapitalize");function WF(e){return e.toUpperCase()}i(WF,"ApplyUppercase");function KF(e){return e.toLowerCase()}i(KF,"ApplyLowercase");function HF(e,r,t){const n=pp(e.pattern);if(!Vl(n))return{...e,pattern:pk(e.pattern,r)};const s=[...Rd(n)].map(f=>Ir(f)),l=mk(s,r),u=bt(l);return W5([u],t)}i(HF,"FromTemplateLiteral$2");function pk(e,r){return typeof e=="string"?r==="Uncapitalize"?qF(e):r==="Capitalize"?VF(e):r==="Uppercase"?WF(e):r==="Lowercase"?KF(e):e:e.toString()}i(pk,"FromLiteralValue");function mk(e,r){return e.map(t=>Ns(t,r))}i(mk,"FromRest$2");function Ns(e,r,t={}){return fa(e)?zF(e,r,t):ga(e)?HF(e,r,t):it(e)?bt(mk(e.anyOf,r),t):da(e)?Ir(pk(e.const,r),t):q(e,t)}i(Ns,"Intrinsic");function GF(e,r={}){return Ns(e,"Capitalize",r)}i(GF,"Capitalize");function ZF(e,r={}){return Ns(e,"Lowercase",r)}i(ZF,"Lowercase");function YF(e,r={}){return Ns(e,"Uncapitalize",r)}i(YF,"Uncapitalize");function JF(e,r={}){return Ns(e,"Uppercase",r)}i(JF,"Uppercase");function XF(e,r,t){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=qd(e[o],r,an(t));return n}i(XF,"FromProperties$7");function QF(e,r,t){return XF(e.properties,r,t)}i(QF,"FromMappedResult$3");function eM(e,r,t){const n=QF(e,r,t);return mt(n)}i(eM,"OmitFromMappedResult");function rM(e,r){return e.map(t=>Fp(t,r))}i(rM,"FromIntersect$7");function tM(e,r){return e.map(t=>Fp(t,r))}i(tM,"FromUnion$7");function nM(e,r){const{[r]:t,...n}=e;return n}i(nM,"FromProperty");function oM(e,r){return r.reduce((t,n)=>nM(t,n),e)}i(oM,"FromProperties$6");function iM(e,r,t){const n=ln(e,[Ut,"$id","required","properties"]),o=oM(t,r);return nt(o,n)}i(iM,"FromObject$9");function aM(e){const r=e.reduce((t,n)=>M5(n)?[...t,Ir(n)]:t,[]);return bt(r)}i(aM,"UnionFromPropertyKeys$1");function Fp(e,r){return An(e)?Ei(rM(e.allOf,r)):it(e)?bt(tM(e.anyOf,r)):Hn(e)?iM(e,r,e.properties):nt({})}i(Fp,"OmitResolve");function qd(e,r,t){const n=Kt(r)?aM(r):r,o=Tt(r)?xi(r):r,a=qt(e),s=qt(r);return dn(e)?eM(e,o,t):fa(r)?cM(e,r,t):a&&s?Wr("Omit",[e,n],t):!a&&s?Wr("Omit",[e,n],t):a&&!s?Wr("Omit",[e,n],t):q({...Fp(e,o),...t})}i(qd,"Omit");function sM(e,r,t){return{[r]:qd(e,[r],an(t))}}i(sM,"FromPropertyKey$1");function lM(e,r,t){return r.reduce((n,o)=>({...n,...sM(e,o,t)}),{})}i(lM,"FromPropertyKeys$1");function uM(e,r,t){return lM(e,r.keys,t)}i(uM,"FromMappedKey$1");function cM(e,r,t){const n=uM(e,r,t);return mt(n)}i(cM,"OmitFromMappedKey");function dM(e,r,t){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=Vd(e[o],r,an(t));return n}i(dM,"FromProperties$5");function fM(e,r,t){return dM(e.properties,r,t)}i(fM,"FromMappedResult$2");function gM(e,r,t){const n=fM(e,r,t);return mt(n)}i(gM,"PickFromMappedResult");function hM(e,r){return e.map(t=>Mp(t,r))}i(hM,"FromIntersect$6");function pM(e,r){return e.map(t=>Mp(t,r))}i(pM,"FromUnion$6");function mM(e,r){const t={};for(const n of r)n in e&&(t[n]=e[n]);return t}i(mM,"FromProperties$4");function bM(e,r,t){const n=ln(e,[Ut,"$id","required","properties"]),o=mM(t,r);return nt(o,n)}i(bM,"FromObject$8");function vM(e){const r=e.reduce((t,n)=>M5(n)?[...t,Ir(n)]:t,[]);return bt(r)}i(vM,"UnionFromPropertyKeys");function Mp(e,r){return An(e)?Ei(hM(e.allOf,r)):it(e)?bt(pM(e.anyOf,r)):Hn(e)?bM(e,r,e.properties):nt({})}i(Mp,"PickResolve");function Vd(e,r,t){const n=Kt(r)?vM(r):r,o=Tt(r)?xi(r):r,a=qt(e),s=qt(r);return dn(e)?gM(e,o,t):fa(r)?$M(e,r,t):a&&s?Wr("Pick",[e,n],t):!a&&s?Wr("Pick",[e,n],t):a&&!s?Wr("Pick",[e,n],t):q({...Mp(e,o),...t})}i(Vd,"Pick");function yM(e,r,t){return{[r]:Vd(e,[r],an(t))}}i(yM,"FromPropertyKey");function wM(e,r,t){return r.reduce((n,o)=>({...n,...yM(e,o,t)}),{})}i(wM,"FromPropertyKeys");function kM(e,r,t){return wM(e,r.keys,t)}i(kM,"FromMappedKey");function $M(e,r,t){const n=kM(e,r,t);return mt(n)}i($M,"PickFromMappedKey");function xM(e,r){return Wr("Partial",[Wr(e,r)])}i(xM,"FromComputed$2");function DM(e){return Wr("Partial",[Ss(e)])}i(DM,"FromRef$6");function CM(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=Ci(e[t]);return r}i(CM,"FromProperties$3");function EM(e,r){const t=ln(e,[Ut,"$id","required","properties"]),n=CM(r);return nt(n,t)}i(EM,"FromObject$7");function qv(e){return e.map(r=>bk(r))}i(qv,"FromRest$1");function bk(e){return xs(e)?xM(e.target,e.parameters):qt(e)?DM(e.$ref):An(e)?Ei(qv(e.allOf)):it(e)?bt(qv(e.anyOf)):Hn(e)?EM(e,e.properties):Ad(e)||fu(e)||Es(e)||da(e)||Xh(e)||As(e)||hu(e)||Qh(e)||pu(e)?e:nt({})}i(bk,"PartialResolve");function Sp(e,r){return dn(e)?MM(e,r):q({...bk(e),...r})}i(Sp,"Partial");function AM(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Sp(e[n],an(r));return t}i(AM,"FromProperties$2");function FM(e,r){return AM(e.properties,r)}i(FM,"FromMappedResult$1");function MM(e,r){const t=FM(e,r);return mt(t)}i(MM,"PartialFromMappedResult");function SM(e,r){return Wr("Required",[Wr(e,r)])}i(SM,"FromComputed$1");function TM(e){return Wr("Required",[Ss(e)])}i(TM,"FromRef$5");function PM(e){const r={};for(const t of globalThis.Object.getOwnPropertyNames(e))r[t]=ln(e[t],[Bo]);return r}i(PM,"FromProperties$1");function NM(e,r){const t=ln(e,[Ut,"$id","required","properties"]),n=PM(r);return nt(n,t)}i(NM,"FromObject$6");function Vv(e){return e.map(r=>vk(r))}i(Vv,"FromRest");function vk(e){return xs(e)?SM(e.target,e.parameters):qt(e)?TM(e.$ref):An(e)?Ei(Vv(e.allOf)):it(e)?bt(Vv(e.anyOf)):Hn(e)?NM(e,e.properties):Ad(e)||fu(e)||Es(e)||da(e)||Xh(e)||As(e)||hu(e)||Qh(e)||pu(e)?e:nt({})}i(vk,"RequiredResolve");function Tp(e,r){return dn(e)?OM(e,r):q({...vk(e),...r})}i(Tp,"Required");function IM(e,r){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=Tp(e[n],r);return t}i(IM,"FromProperties");function BM(e,r){return IM(e.properties,r)}i(BM,"FromMappedResult");function OM(e,r){const t=BM(e,r);return mt(t)}i(OM,"RequiredFromMappedResult");function RM(e,r){return r.map(t=>qt(t)?Pp(e,t.$ref):un(e,t))}i(RM,"DereferenceParameters");function Pp(e,r){return r in e?qt(e[r])?Pp(e,e[r].$ref):un(e,e[r]):yr()}i(Pp,"Dereference");function LM(e){return jd(e[0])}i(LM,"FromAwaited");function jM(e){return Ld(e[0],e[1])}i(jM,"FromIndex");function UM(e){return yp(e[0])}i(UM,"FromKeyOf");function _M(e){return Sp(e[0])}i(_M,"FromPartial");function zM(e){return qd(e[0],e[1])}i(zM,"FromOmit");function qM(e){return Vd(e[0],e[1])}i(qM,"FromPick");function VM(e){return Tp(e[0])}i(VM,"FromRequired");function WM(e,r,t){const n=RM(e,t);return r==="Awaited"?LM(n):r==="Index"?jM(n):r==="KeyOf"?UM(n):r==="Partial"?_M(n):r==="Omit"?zM(n):r==="Pick"?qM(n):r==="Required"?VM(n):yr()}i(WM,"FromComputed");function KM(e,r){return dp(un(e,r))}i(KM,"FromArray$5");function HM(e,r){return fp(un(e,r))}i(HM,"FromAsyncIterator$3");function GM(e,r,t){return gp(wu(e,r),un(e,t))}i(GM,"FromConstructor$3");function ZM(e,r,t){return bu(wu(e,r),un(e,t))}i(ZM,"FromFunction$3");function YM(e,r){return Ei(wu(e,r))}i(YM,"FromIntersect$5");function JM(e,r){return vp(un(e,r))}i(JM,"FromIterator$3");function XM(e,r){return nt(globalThis.Object.keys(r).reduce((t,n)=>({...t,[n]:un(e,r[n])}),{}))}i(XM,"FromObject$5");function QM(e,r){const[t,n]=[un(e,hk(r)),Ap(r)],o=Gh(r);return o.patternProperties[n]=t,o}i(QM,"FromRecord$5");function eS(e,r){return qt(r)?{...Pp(e,r.$ref),[Ut]:r[Ut]}:r}i(eS,"FromTransform");function rS(e,r){return Ms(wu(e,r))}i(rS,"FromTuple$5");function tS(e,r){return bt(wu(e,r))}i(tS,"FromUnion$5");function wu(e,r){return r.map(t=>un(e,t))}i(wu,"FromTypes");function un(e,r){return wi(r)?q(un(e,ln(r,[Bo])),r):Jh(r)?q(un(e,ln(r,[du])),r):tr(r)?q(eS(e,r),r):$s(r)?q(KM(e,r.items),r):Ed(r)?q(HM(e,r.items),r):xs(r)?q(WM(e,r.target,r.parameters)):Ds(r)?q(GM(e,r.parameters,r.returns),r):Cs(r)?q(ZM(e,r.parameters,r.returns),r):An(r)?q(YM(e,r.allOf),r):Fd(r)?q(JM(e,r.items),r):Hn(r)?q(XM(e,r.properties),r):Sd(r)?q(QM(e,r)):ha(r)?q(rS(e,r.items||[]),r):it(r)?q(tS(e,r.anyOf),r):r}i(un,"FromType");function nS(e,r){return r in e?un(e,e[r]):yr()}i(nS,"ComputeType");function oS(e){return globalThis.Object.getOwnPropertyNames(e).reduce((r,t)=>({...r,[t]:nS(e,t)}),{})}i(oS,"ComputeModuleProperties");class iS{static{i(this,"TModule")}constructor(r){const t=oS(r),n=this.WithIdentifiers(t);this.$defs=n}Import(r,t){const n={...this.$defs,[r]:q(this.$defs[r],t)};return q({[z]:"Import",$defs:n,$ref:r})}WithIdentifiers(r){return globalThis.Object.getOwnPropertyNames(r).reduce((t,n)=>({...t,[n]:{...r[n],$id:n}}),{})}}function aS(e){return new iS(e)}i(aS,"Module");function sS(e,r){return q({[z]:"Not",not:e},r)}i(sS,"Not");function lS(e,r){return Cs(e)?Ms(e.parameters,r):yr()}i(lS,"Parameters");let uS=0;function cS(e,r={}){Nr(r.$id)&&(r.$id=`T${uS++}`);const t=Gh(e({[z]:"This",$ref:`${r.$id}`}));return t.$id=r.$id,q({[Cd]:"Recursive",...t},r)}i(cS,"Recursive");function dS(e,r){const t=Fr(e)?new globalThis.RegExp(e):e;return q({[z]:"RegExp",type:"RegExp",source:t.source,flags:t.flags},r)}i(dS,"RegExp$1");function fS(e){return An(e)?e.allOf:it(e)?e.anyOf:ha(e)?e.items??[]:[]}i(fS,"RestResolve");function gS(e){return fS(e)}i(gS,"Rest");function hS(e,r){return Cs(e)?q(e.returns,r):yr(r)}i(hS,"ReturnType");class pS{static{i(this,"TransformDecodeBuilder")}constructor(r){this.schema=r}Decode(r){return new mS(this.schema,r)}}class mS{static{i(this,"TransformEncodeBuilder")}constructor(r,t){this.schema=r,this.decode=t}EncodeTransform(r,t){const a={Encode:i(s=>t[Ut].Encode(r(s)),"Encode"),Decode:i(s=>this.decode(t[Ut].Decode(s)),"Decode")};return{...t,[Ut]:a}}EncodeSchema(r,t){const n={Decode:this.decode,Encode:r};return{...t,[Ut]:n}}Encode(r){return tr(this.schema)?this.EncodeTransform(r,this.schema):this.EncodeSchema(r,this.schema)}}function bS(e){return new pS(e)}i(bS,"Transform");function vS(e={}){return q({[z]:e[z]??"Unsafe"},e)}i(vS,"Unsafe");function yS(e){return q({[z]:"Void",type:"void"},e)}i(yS,"Void");const wS=Object.freeze(Object.defineProperty({__proto__:null,Any:zl,Argument:bA,Array:dp,AsyncIterator:fp,Awaited:jd,BigInt:mp,Boolean:q5,Capitalize:GF,Composite:X9,Const:r7,Constructor:gp,ConstructorParameters:t7,Date:ek,Enum:n7,Exclude:Dp,Extends:xp,Extract:Cp,Function:bu,Index:Ld,InstanceType:dF,Instantiate:RF,Integer:LF,Intersect:Ei,Iterator:vp,KeyOf:yp,Literal:Ir,Lowercase:ZF,Mapped:w9,Module:aS,Never:yr,Not:sS,Null:rk,Number:va,Object:nt,Omit:qd,Optional:Ci,Parameters:lS,Partial:Sp,Pick:Vd,Promise:G5,Readonly:Di,ReadonlyOptional:fk,Record:gk,Recursive:cS,Ref:Ss,RegExp:dS,Required:Tp,Rest:gS,ReturnType:hS,String:ra,Symbol:tk,TemplateLiteral:W5,Transform:bS,Tuple:Ms,Uint8Array:ok,Uncapitalize:YF,Undefined:nk,Union:bt,Unknown:Ud,Unsafe:vS,Uppercase:JF,Void:yS},Symbol.toStringTag,{value:"Module"})),Xe=wS;function yk(e){switch(e.errorType){case T.ArrayContains:return"Expected array to contain at least one matching value";case T.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case T.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case T.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case T.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case T.ArrayUniqueItems:return"Expected array elements to be unique";case T.Array:return"Expected array";case T.AsyncIterator:return"Expected AsyncIterator";case T.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case T.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case T.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case T.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case T.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case T.BigInt:return"Expected bigint";case T.Boolean:return"Expected boolean";case T.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case T.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case T.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case T.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case T.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case T.Date:return"Expected Date";case T.Function:return"Expected function";case T.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case T.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case T.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case T.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case T.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case T.Integer:return"Expected integer";case T.IntersectUnevaluatedProperties:return"Unexpected property";case T.Intersect:return"Expected all values to match";case T.Iterator:return"Expected Iterator";case T.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case T.Never:return"Never";case T.Not:return"Value should not match";case T.Null:return"Expected null";case T.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case T.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case T.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case T.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case T.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case T.Number:return"Expected number";case T.Object:return"Expected object";case T.ObjectAdditionalProperties:return"Unexpected property";case T.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case T.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case T.ObjectRequiredProperty:return"Expected required property";case T.Promise:return"Expected Promise";case T.RegExp:return"Expected string to match regular expression";case T.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case T.StringFormat:return`Expected string to match '${e.schema.format}' format`;case T.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case T.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case T.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case T.String:return"Expected string";case T.Symbol:return"Expected symbol";case T.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case T.Tuple:return"Expected tuple";case T.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case T.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case T.Uint8Array:return"Expected Uint8Array";case T.Undefined:return"Expected undefined";case T.Union:return"Expected union value";case T.Void:return"Expected void";case T.Kind:return`Expected kind '${e.schema[z]}'`;default:return"Unknown error type"}}i(yk,"DefaultErrorFunction");let wk=yk;function kS(e){wk=e}i(kS,"SetErrorFunction");function $S(){return wk}i($S,"GetErrorFunction");class xS extends pt{static{i(this,"TypeDereferenceError")}constructor(r){super(`Unable to dereference schema with $id '${r.$ref}'`),this.schema=r}}function DS(e,r){const t=r.find(n=>n.$id===e.$ref);if(t===void 0)throw new xS(e);return Mn(t,r)}i(DS,"Resolve");function Wd(e,r){return!rn(e.$id)||r.some(t=>t.$id===e.$id)||r.push(e),r}i(Wd,"Pushref");function Mn(e,r){return e[z]==="This"||e[z]==="Ref"?DS(e,r):e}i(Mn,"Deref");class CS extends pt{static{i(this,"ValueHashError")}constructor(r){super("Unable to hash value"),this.value=r}}var cn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(cn||(cn={}));let La=BigInt("14695981039346656037");const[ES,AS]=[BigInt("1099511628211"),BigInt("18446744073709551616")],FS=Array.from({length:256}).map((e,r)=>BigInt(r)),kk=new Float64Array(1),$k=new DataView(kk.buffer),xk=new Uint8Array(kk.buffer);function*MS(e){const r=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let t=0;t<r;t++)yield e>>8*(r-1-t)&255}i(MS,"NumberToBytes");function SS(e){xt(cn.Array);for(const r of e)fs(r)}i(SS,"ArrayType");function TS(e){xt(cn.Boolean),xt(e?1:0)}i(TS,"BooleanType");function PS(e){xt(cn.BigInt),$k.setBigInt64(0,e);for(const r of xk)xt(r)}i(PS,"BigIntType");function NS(e){xt(cn.Date),fs(e.getTime())}i(NS,"DateType");function IS(e){xt(cn.Null)}i(IS,"NullType");function BS(e){xt(cn.Number),$k.setFloat64(0,e);for(const r of xk)xt(r)}i(BS,"NumberType");function OS(e){xt(cn.Object);for(const r of globalThis.Object.getOwnPropertyNames(e).sort())fs(r),fs(e[r])}i(OS,"ObjectType");function RS(e){xt(cn.String);for(let r=0;r<e.length;r++)for(const t of MS(e.charCodeAt(r)))xt(t)}i(RS,"StringType");function LS(e){xt(cn.Symbol),fs(e.description)}i(LS,"SymbolType");function jS(e){xt(cn.Uint8Array);for(let r=0;r<e.length;r++)xt(e[r])}i(jS,"Uint8ArrayType");function US(e){return xt(cn.Undefined)}i(US,"UndefinedType");function fs(e){if(sn(e))return SS(e);if(xd(e))return TS(e);if(xo(e))return PS(e);if(Zh(e))return NS(e);if($d(e))return IS();if(pe(e))return BS(e);if(lo(e))return OS(e);if(rn(e))return RS(e);if(Dd(e))return LS(e);if(Yh(e))return jS(e);if(yi(e))return US();throw new CS(e)}i(fs,"Visit$5");function xt(e){La=La^FS[e],La=La*ES%AS}i(xt,"FNV1A64");function Np(e){return La=BigInt("14695981039346656037"),fs(e),La}i(Np,"Hash");class _S extends pt{static{i(this,"ValueCheckUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}function zS(e){return e[z]==="Any"||e[z]==="Unknown"}i(zS,"IsAnyOrUnknown");function ke(e){return e!==void 0}i(ke,"IsDefined$1");function qS(e,r,t){return!0}i(qS,"FromAny$1");function VS(e,r,t){return!0}i(VS,"FromArgument$1");function WS(e,r,t){if(!sn(t)||ke(e.minItems)&&!(t.length>=e.minItems)||ke(e.maxItems)&&!(t.length<=e.maxItems))return!1;for(const a of t)if(!et(e.items,r,a))return!1;if(e.uniqueItems===!0&&!(function(){const a=new Set;for(const s of t){const l=Np(s);if(a.has(l))return!1;a.add(l)}return!0})())return!1;if(!(ke(e.contains)||pe(e.minContains)||pe(e.maxContains)))return!0;const n=ke(e.contains)?e.contains:yr(),o=t.reduce((a,s)=>et(n,r,s)?a+1:a,0);return!(o===0||pe(e.minContains)&&o<e.minContains||pe(e.maxContains)&&o>e.maxContains)}i(WS,"FromArray$4");function KS(e,r,t){return w5(t)}i(KS,"FromAsyncIterator$2");function HS(e,r,t){return!(!xo(t)||ke(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||ke(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||ke(e.maximum)&&!(t<=e.maximum)||ke(e.minimum)&&!(t>=e.minimum)||ke(e.multipleOf)&&t%e.multipleOf!==BigInt(0))}i(HS,"FromBigInt$1");function GS(e,r,t){return xd(t)}i(GS,"FromBoolean$1");function ZS(e,r,t){return et(e.returns,r,t.prototype)}i(ZS,"FromConstructor$2");function YS(e,r,t){return!(!Zh(t)||ke(e.exclusiveMaximumTimestamp)&&!(t.getTime()<e.exclusiveMaximumTimestamp)||ke(e.exclusiveMinimumTimestamp)&&!(t.getTime()>e.exclusiveMinimumTimestamp)||ke(e.maximumTimestamp)&&!(t.getTime()<=e.maximumTimestamp)||ke(e.minimumTimestamp)&&!(t.getTime()>=e.minimumTimestamp)||ke(e.multipleOfTimestamp)&&t.getTime()%e.multipleOfTimestamp!==0)}i(YS,"FromDate$1");function JS(e,r,t){return C5(t)}i(JS,"FromFunction$2");function XS(e,r,t){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return et(o,[...r,...n],t)}i(XS,"FromImport$4");function QS(e,r,t){return!(!D5(t)||ke(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||ke(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||ke(e.maximum)&&!(t<=e.maximum)||ke(e.minimum)&&!(t>=e.minimum)||ke(e.multipleOf)&&t%e.multipleOf!==0)}i(QS,"FromInteger$1");function eT(e,r,t){const n=e.allOf.every(o=>et(o,r,t));if(e.unevaluatedProperties===!1){const o=new RegExp(ds(e)),a=Object.getOwnPropertyNames(t).every(s=>o.test(s));return n&&a}else if(Tt(e.unevaluatedProperties)){const o=new RegExp(ds(e)),a=Object.getOwnPropertyNames(t).every(s=>o.test(s)||et(e.unevaluatedProperties,r,t[s]));return n&&a}else return n}i(eT,"FromIntersect$4");function rT(e,r,t){return k5(t)}i(rT,"FromIterator$2");function tT(e,r,t){return t===e.const}i(tT,"FromLiteral$1");function nT(e,r,t){return!1}i(nT,"FromNever$1");function oT(e,r,t){return!et(e.not,r,t)}i(oT,"FromNot$4");function iT(e,r,t){return $d(t)}i(iT,"FromNull$1");function aT(e,r,t){return!(!Ar.IsNumberLike(t)||ke(e.exclusiveMaximum)&&!(t<e.exclusiveMaximum)||ke(e.exclusiveMinimum)&&!(t>e.exclusiveMinimum)||ke(e.minimum)&&!(t>=e.minimum)||ke(e.maximum)&&!(t<=e.maximum)||ke(e.multipleOf)&&t%e.multipleOf!==0)}i(aT,"FromNumber$1");function sT(e,r,t){if(!Ar.IsObjectLike(t)||ke(e.minProperties)&&!(Object.getOwnPropertyNames(t).length>=e.minProperties)||ke(e.maxProperties)&&!(Object.getOwnPropertyNames(t).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const a=e.properties[o];if(e.required&&e.required.includes(o)){if(!et(a,r,t[o])||(Ps(a)||zS(a))&&!(o in t))return!1}else if(Ar.IsExactOptionalProperty(t,o)&&!et(a,r,t[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(t);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(a=>n.includes(a))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(t).every(a=>n.includes(a)||et(e.additionalProperties,r,t[a])):!0}i(sT,"FromObject$4");function lT(e,r,t){return $5(t)}i(lT,"FromPromise$2");function uT(e,r,t){if(!Ar.IsRecordLike(t)||ke(e.minProperties)&&!(Object.getOwnPropertyNames(t).length>=e.minProperties)||ke(e.maxProperties)&&!(Object.getOwnPropertyNames(t).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],a=new RegExp(n),s=Object.entries(t).every(([f,g])=>a.test(f)?et(o,r,g):!0),l=typeof e.additionalProperties=="object"?Object.entries(t).every(([f,g])=>a.test(f)?!0:et(e.additionalProperties,r,g)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(t).every(f=>a.test(f)):!0;return s&&l&&u}i(uT,"FromRecord$4");function cT(e,r,t){return et(Mn(e,r),r,t)}i(cT,"FromRef$4");function dT(e,r,t){const n=new RegExp(e.source,e.flags);return ke(e.minLength)&&!(t.length>=e.minLength)||ke(e.maxLength)&&!(t.length<=e.maxLength)?!1:n.test(t)}i(dT,"FromRegExp$1");function fT(e,r,t){return!rn(t)||ke(e.minLength)&&!(t.length>=e.minLength)||ke(e.maxLength)&&!(t.length<=e.maxLength)||ke(e.pattern)&&!new RegExp(e.pattern).test(t)?!1:ke(e.format)?ap(e.format)?sp(e.format)(t):!1:!0}i(fT,"FromString$1");function gT(e,r,t){return Dd(t)}i(gT,"FromSymbol$1");function hT(e,r,t){return rn(t)&&new RegExp(e.pattern).test(t)}i(hT,"FromTemplateLiteral$1");function pT(e,r,t){return et(Mn(e,r),r,t)}i(pT,"FromThis$4");function mT(e,r,t){if(!sn(t)||e.items===void 0&&t.length!==0||t.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!et(e.items[n],r,t[n]))return!1;return!0}i(mT,"FromTuple$4");function bT(e,r,t){return yi(t)}i(bT,"FromUndefined$1");function vT(e,r,t){return e.anyOf.some(n=>et(n,r,t))}i(vT,"FromUnion$4");function yT(e,r,t){return!(!Yh(t)||ke(e.maxByteLength)&&!(t.length<=e.maxByteLength)||ke(e.minByteLength)&&!(t.length>=e.minByteLength))}i(yT,"FromUint8Array$1");function wT(e,r,t){return!0}i(wT,"FromUnknown$1");function kT(e,r,t){return Ar.IsVoidLike(t)}i(kT,"FromVoid$1");function $T(e,r,t){return fi(e[z])?cp(e[z])(e,t):!1}i($T,"FromKind$1");function et(e,r,t){const n=ke(e.$id)?Wd(e,r):r,o=e;switch(o[z]){case"Any":return qS();case"Argument":return VS();case"Array":return WS(o,n,t);case"AsyncIterator":return KS(o,n,t);case"BigInt":return HS(o,n,t);case"Boolean":return GS(o,n,t);case"Constructor":return ZS(o,n,t);case"Date":return YS(o,n,t);case"Function":return JS(o,n,t);case"Import":return XS(o,n,t);case"Integer":return QS(o,n,t);case"Intersect":return eT(o,n,t);case"Iterator":return rT(o,n,t);case"Literal":return tT(o,n,t);case"Never":return nT();case"Not":return oT(o,n,t);case"Null":return iT(o,n,t);case"Number":return aT(o,n,t);case"Object":return sT(o,n,t);case"Promise":return lT(o,n,t);case"Record":return uT(o,n,t);case"Ref":return cT(o,n,t);case"RegExp":return dT(o,n,t);case"String":return fT(o,n,t);case"Symbol":return gT(o,n,t);case"TemplateLiteral":return hT(o,n,t);case"This":return pT(o,n,t);case"Tuple":return mT(o,n,t);case"Undefined":return bT(o,n,t);case"Union":return vT(o,n,t);case"Uint8Array":return yT(o,n,t);case"Unknown":return wT();case"Void":return kT(o,n,t);default:if(!fi(o[z]))throw new _S(o);return $T(o,n,t)}}i(et,"Visit$4");function jc(...e){return e.length===3?et(e[0],e[1],e[2]):et(e[0],[],e[1])}i(jc,"Check");var T;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(T||(T={}));class xT extends pt{static{i(this,"ValueErrorsUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}function yo(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}i(yo,"EscapeKey");function we(e){return e!==void 0}i(we,"IsDefined");class Dk{static{i(this,"ValueErrorIterator")}constructor(r){this.iterator=r}[Symbol.iterator](){return this.iterator}First(){const r=this.iterator.next();return r.done?void 0:r.value}}function W(e,r,t,n,o=[]){return{type:e,schema:r,path:t,value:n,message:$S()({errorType:e,path:t,schema:r,value:n,errors:o}),errors:o}}i(W,"Create");function*DT(e,r,t,n){}i(DT,"FromAny");function*CT(e,r,t,n){}i(CT,"FromArgument");function*ET(e,r,t,n){if(!sn(n))return yield W(T.Array,e,t,n);we(e.minItems)&&!(n.length>=e.minItems)&&(yield W(T.ArrayMinItems,e,t,n)),we(e.maxItems)&&!(n.length<=e.maxItems)&&(yield W(T.ArrayMaxItems,e,t,n));for(let s=0;s<n.length;s++)yield*rt(e.items,r,`${t}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const l of n){const u=Np(l);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield W(T.ArrayUniqueItems,e,t,n)),!(we(e.contains)||we(e.minContains)||we(e.maxContains)))return;const o=we(e.contains)?e.contains:yr(),a=n.reduce((s,l,u)=>rt(o,r,`${t}${u}`,l).next().done===!0?s+1:s,0);a===0&&(yield W(T.ArrayContains,e,t,n)),pe(e.minContains)&&a<e.minContains&&(yield W(T.ArrayMinContains,e,t,n)),pe(e.maxContains)&&a>e.maxContains&&(yield W(T.ArrayMaxContains,e,t,n))}i(ET,"FromArray$3");function*AT(e,r,t,n){w5(n)||(yield W(T.AsyncIterator,e,t,n))}i(AT,"FromAsyncIterator$1");function*FT(e,r,t,n){if(!xo(n))return yield W(T.BigInt,e,t,n);we(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(T.BigIntExclusiveMaximum,e,t,n)),we(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(T.BigIntExclusiveMinimum,e,t,n)),we(e.maximum)&&!(n<=e.maximum)&&(yield W(T.BigIntMaximum,e,t,n)),we(e.minimum)&&!(n>=e.minimum)&&(yield W(T.BigIntMinimum,e,t,n)),we(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield W(T.BigIntMultipleOf,e,t,n))}i(FT,"FromBigInt");function*MT(e,r,t,n){xd(n)||(yield W(T.Boolean,e,t,n))}i(MT,"FromBoolean");function*ST(e,r,t,n){yield*rt(e.returns,r,t,n.prototype)}i(ST,"FromConstructor$1");function*TT(e,r,t,n){if(!Zh(n))return yield W(T.Date,e,t,n);we(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield W(T.DateExclusiveMaximumTimestamp,e,t,n)),we(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield W(T.DateExclusiveMinimumTimestamp,e,t,n)),we(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield W(T.DateMaximumTimestamp,e,t,n)),we(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield W(T.DateMinimumTimestamp,e,t,n)),we(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield W(T.DateMultipleOfTimestamp,e,t,n))}i(TT,"FromDate");function*PT(e,r,t,n){C5(n)||(yield W(T.Function,e,t,n))}i(PT,"FromFunction$1");function*NT(e,r,t,n){const o=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];yield*rt(a,[...r,...o],t,n)}i(NT,"FromImport$3");function*IT(e,r,t,n){if(!D5(n))return yield W(T.Integer,e,t,n);we(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(T.IntegerExclusiveMaximum,e,t,n)),we(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(T.IntegerExclusiveMinimum,e,t,n)),we(e.maximum)&&!(n<=e.maximum)&&(yield W(T.IntegerMaximum,e,t,n)),we(e.minimum)&&!(n>=e.minimum)&&(yield W(T.IntegerMinimum,e,t,n)),we(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(T.IntegerMultipleOf,e,t,n))}i(IT,"FromInteger");function*BT(e,r,t,n){let o=!1;for(const a of e.allOf)for(const s of rt(a,r,t,n))o=!0,yield s;if(o)return yield W(T.Intersect,e,t,n);if(e.unevaluatedProperties===!1){const a=new RegExp(ds(e));for(const s of Object.getOwnPropertyNames(n))a.test(s)||(yield W(T.IntersectUnevaluatedProperties,e,`${t}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const a=new RegExp(ds(e));for(const s of Object.getOwnPropertyNames(n))if(!a.test(s)){const l=rt(e.unevaluatedProperties,r,`${t}/${s}`,n[s]).next();l.done||(yield l.value)}}}i(BT,"FromIntersect$3");function*OT(e,r,t,n){k5(n)||(yield W(T.Iterator,e,t,n))}i(OT,"FromIterator$1");function*RT(e,r,t,n){n!==e.const&&(yield W(T.Literal,e,t,n))}i(RT,"FromLiteral");function*LT(e,r,t,n){yield W(T.Never,e,t,n)}i(LT,"FromNever");function*jT(e,r,t,n){rt(e.not,r,t,n).next().done===!0&&(yield W(T.Not,e,t,n))}i(jT,"FromNot$3");function*UT(e,r,t,n){$d(n)||(yield W(T.Null,e,t,n))}i(UT,"FromNull");function*_T(e,r,t,n){if(!Ar.IsNumberLike(n))return yield W(T.Number,e,t,n);we(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(T.NumberExclusiveMaximum,e,t,n)),we(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(T.NumberExclusiveMinimum,e,t,n)),we(e.maximum)&&!(n<=e.maximum)&&(yield W(T.NumberMaximum,e,t,n)),we(e.minimum)&&!(n>=e.minimum)&&(yield W(T.NumberMinimum,e,t,n)),we(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(T.NumberMultipleOf,e,t,n))}i(_T,"FromNumber");function*zT(e,r,t,n){if(!Ar.IsObjectLike(n))return yield W(T.Object,e,t,n);we(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(T.ObjectMinProperties,e,t,n)),we(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(T.ObjectMaxProperties,e,t,n));const o=Array.isArray(e.required)?e.required:[],a=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const l of o)s.includes(l)||(yield W(T.ObjectRequiredProperty,e.properties[l],`${t}/${yo(l)}`,void 0));if(e.additionalProperties===!1)for(const l of s)a.includes(l)||(yield W(T.ObjectAdditionalProperties,e,`${t}/${yo(l)}`,n[l]));if(typeof e.additionalProperties=="object")for(const l of s)a.includes(l)||(yield*rt(e.additionalProperties,r,`${t}/${yo(l)}`,n[l]));for(const l of a){const u=e.properties[l];e.required&&e.required.includes(l)?(yield*rt(u,r,`${t}/${yo(l)}`,n[l]),Ps(e)&&!(l in n)&&(yield W(T.ObjectRequiredProperty,u,`${t}/${yo(l)}`,void 0))):Ar.IsExactOptionalProperty(n,l)&&(yield*rt(u,r,`${t}/${yo(l)}`,n[l]))}}i(zT,"FromObject$3");function*qT(e,r,t,n){$5(n)||(yield W(T.Promise,e,t,n))}i(qT,"FromPromise$1");function*VT(e,r,t,n){if(!Ar.IsRecordLike(n))return yield W(T.Object,e,t,n);we(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(T.ObjectMinProperties,e,t,n)),we(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(T.ObjectMaxProperties,e,t,n));const[o,a]=Object.entries(e.patternProperties)[0],s=new RegExp(o);for(const[l,u]of Object.entries(n))s.test(l)&&(yield*rt(a,r,`${t}/${yo(l)}`,u));if(typeof e.additionalProperties=="object")for(const[l,u]of Object.entries(n))s.test(l)||(yield*rt(e.additionalProperties,r,`${t}/${yo(l)}`,u));if(e.additionalProperties===!1){for(const[l,u]of Object.entries(n))if(!s.test(l))return yield W(T.ObjectAdditionalProperties,e,`${t}/${yo(l)}`,u)}}i(VT,"FromRecord$3");function*WT(e,r,t,n){yield*rt(Mn(e,r),r,t,n)}i(WT,"FromRef$3");function*KT(e,r,t,n){if(!rn(n))return yield W(T.String,e,t,n);if(we(e.minLength)&&!(n.length>=e.minLength)&&(yield W(T.StringMinLength,e,t,n)),we(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(T.StringMaxLength,e,t,n)),!new RegExp(e.source,e.flags).test(n))return yield W(T.RegExp,e,t,n)}i(KT,"FromRegExp");function*HT(e,r,t,n){if(!rn(n))return yield W(T.String,e,t,n);we(e.minLength)&&!(n.length>=e.minLength)&&(yield W(T.StringMinLength,e,t,n)),we(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(T.StringMaxLength,e,t,n)),rn(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield W(T.StringPattern,e,t,n))),rn(e.format)&&(ap(e.format)?sp(e.format)(n)||(yield W(T.StringFormat,e,t,n)):yield W(T.StringFormatUnknown,e,t,n))}i(HT,"FromString");function*GT(e,r,t,n){Dd(n)||(yield W(T.Symbol,e,t,n))}i(GT,"FromSymbol");function*ZT(e,r,t,n){if(!rn(n))return yield W(T.String,e,t,n);new RegExp(e.pattern).test(n)||(yield W(T.StringPattern,e,t,n))}i(ZT,"FromTemplateLiteral");function*YT(e,r,t,n){yield*rt(Mn(e,r),r,t,n)}i(YT,"FromThis$3");function*JT(e,r,t,n){if(!sn(n))return yield W(T.Tuple,e,t,n);if(e.items===void 0&&n.length!==0)return yield W(T.TupleLength,e,t,n);if(n.length!==e.maxItems)return yield W(T.TupleLength,e,t,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*rt(e.items[o],r,`${t}/${o}`,n[o])}i(JT,"FromTuple$3");function*XT(e,r,t,n){yi(n)||(yield W(T.Undefined,e,t,n))}i(XT,"FromUndefined");function*QT(e,r,t,n){if(jc(e,r,n))return;const o=e.anyOf.map(a=>new Dk(rt(a,r,t,n)));yield W(T.Union,e,t,n,o)}i(QT,"FromUnion$3");function*eP(e,r,t,n){if(!Yh(n))return yield W(T.Uint8Array,e,t,n);we(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield W(T.Uint8ArrayMaxByteLength,e,t,n)),we(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield W(T.Uint8ArrayMinByteLength,e,t,n))}i(eP,"FromUint8Array");function*rP(e,r,t,n){}i(rP,"FromUnknown");function*tP(e,r,t,n){Ar.IsVoidLike(n)||(yield W(T.Void,e,t,n))}i(tP,"FromVoid");function*nP(e,r,t,n){cp(e[z])(e,n)||(yield W(T.Kind,e,t,n))}i(nP,"FromKind");function*rt(e,r,t,n){const o=we(e.$id)?[...r,e]:r,a=e;switch(a[z]){case"Any":return yield*DT();case"Argument":return yield*CT();case"Array":return yield*ET(a,o,t,n);case"AsyncIterator":return yield*AT(a,o,t,n);case"BigInt":return yield*FT(a,o,t,n);case"Boolean":return yield*MT(a,o,t,n);case"Constructor":return yield*ST(a,o,t,n);case"Date":return yield*TT(a,o,t,n);case"Function":return yield*PT(a,o,t,n);case"Import":return yield*NT(a,o,t,n);case"Integer":return yield*IT(a,o,t,n);case"Intersect":return yield*BT(a,o,t,n);case"Iterator":return yield*OT(a,o,t,n);case"Literal":return yield*RT(a,o,t,n);case"Never":return yield*LT(a,o,t,n);case"Not":return yield*jT(a,o,t,n);case"Null":return yield*UT(a,o,t,n);case"Number":return yield*_T(a,o,t,n);case"Object":return yield*zT(a,o,t,n);case"Promise":return yield*qT(a,o,t,n);case"Record":return yield*VT(a,o,t,n);case"Ref":return yield*WT(a,o,t,n);case"RegExp":return yield*KT(a,o,t,n);case"String":return yield*HT(a,o,t,n);case"Symbol":return yield*GT(a,o,t,n);case"TemplateLiteral":return yield*ZT(a,o,t,n);case"This":return yield*YT(a,o,t,n);case"Tuple":return yield*JT(a,o,t,n);case"Undefined":return yield*XT(a,o,t,n);case"Union":return yield*QT(a,o,t,n);case"Uint8Array":return yield*eP(a,o,t,n);case"Unknown":return yield*rP();case"Void":return yield*tP(a,o,t,n);default:if(!fi(a[z]))throw new xT(e);return yield*nP(a,o,t,n)}}i(rt,"Visit$3");function oP(...e){const r=e.length===3?rt(e[0],e[1],"",e[2]):rt(e[0],[],"",e[1]);return new Dk(r)}i(oP,"Errors");class iP extends pt{static{i(this,"TransformDecodeCheckError")}constructor(r,t,n){super("Unable to decode value as it does not match the expected schema"),this.schema=r,this.value=t,this.error=n}}class aP extends pt{static{i(this,"TransformDecodeError")}constructor(r,t,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=r,this.path=t,this.value=n,this.error=o}}function fr(e,r,t){try{return tr(e)?e[Ut].Decode(t):t}catch(n){throw new aP(e,r,t,n)}}i(fr,"Default$1");function sP(e,r,t,n){return sn(n)?fr(e,t,n.map((o,a)=>Gn(e.items,r,`${t}/${a}`,o))):fr(e,t,n)}i(sP,"FromArray$2");function lP(e,r,t,n){if(!lo(n)||E5(n))return fr(e,t,n);const o=Q5(e),a=o.map(g=>g[0]),s={...n};for(const[g,h]of o)g in s&&(s[g]=Gn(h,r,`${t}/${g}`,s[g]));if(!tr(e.unevaluatedProperties))return fr(e,t,s);const l=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,f={...s};for(const g of l)a.includes(g)||(f[g]=fr(u,`${t}/${g}`,f[g]));return fr(e,t,f)}i(lP,"FromIntersect$2");function uP(e,r,t,n){const o=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref],s=Gn(a,[...r,...o],t,n);return fr(e,t,s)}i(uP,"FromImport$2");function cP(e,r,t,n){return fr(e,t,Gn(e.not,r,t,n))}i(cP,"FromNot$2");function dP(e,r,t,n){if(!lo(n))return fr(e,t,n);const o=ya(e),a={...n};for(const f of o)x5(a,f)&&(yi(a[f])&&(!pu(e.properties[f])||Ar.IsExactOptionalProperty(a,f))||(a[f]=Gn(e.properties[f],r,`${t}/${f}`,a[f])));if(!Tt(e.additionalProperties))return fr(e,t,a);const s=Object.getOwnPropertyNames(a),l=e.additionalProperties,u={...a};for(const f of s)o.includes(f)||(u[f]=fr(l,`${t}/${f}`,u[f]));return fr(e,t,u)}i(dP,"FromObject$2");function fP(e,r,t,n){if(!lo(n))return fr(e,t,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],a=new RegExp(o),s={...n};for(const g of Object.getOwnPropertyNames(n))a.test(g)&&(s[g]=Gn(e.patternProperties[o],r,`${t}/${g}`,s[g]));if(!Tt(e.additionalProperties))return fr(e,t,s);const l=Object.getOwnPropertyNames(s),u=e.additionalProperties,f={...s};for(const g of l)a.test(g)||(f[g]=fr(u,`${t}/${g}`,f[g]));return fr(e,t,f)}i(fP,"FromRecord$2");function gP(e,r,t,n){const o=Mn(e,r);return fr(e,t,Gn(o,r,t,n))}i(gP,"FromRef$2");function hP(e,r,t,n){const o=Mn(e,r);return fr(e,t,Gn(o,r,t,n))}i(hP,"FromThis$2");function pP(e,r,t,n){return sn(n)&&sn(e.items)?fr(e,t,e.items.map((o,a)=>Gn(o,r,`${t}/${a}`,n[a]))):fr(e,t,n)}i(pP,"FromTuple$2");function mP(e,r,t,n){for(const o of e.anyOf){if(!jc(o,r,n))continue;const a=Gn(o,r,t,n);return fr(e,t,a)}return fr(e,t,n)}i(mP,"FromUnion$2");function Gn(e,r,t,n){const o=Wd(e,r),a=e;switch(e[z]){case"Array":return sP(a,o,t,n);case"Import":return uP(a,o,t,n);case"Intersect":return lP(a,o,t,n);case"Not":return cP(a,o,t,n);case"Object":return dP(a,o,t,n);case"Record":return fP(a,o,t,n);case"Ref":return gP(a,o,t,n);case"Symbol":return fr(a,t,n);case"This":return hP(a,o,t,n);case"Tuple":return pP(a,o,t,n);case"Union":return mP(a,o,t,n);default:return fr(a,t,n)}}i(Gn,"Visit$2");function bP(e,r,t){return Gn(e,r,"",t)}i(bP,"TransformDecode");class vP extends pt{static{i(this,"TransformEncodeCheckError")}constructor(r,t,n){super("The encoded value does not match the expected schema"),this.schema=r,this.value=t,this.error=n}}class yP extends pt{static{i(this,"TransformEncodeError")}constructor(r,t,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=r,this.path=t,this.value=n,this.error=o}}function ft(e,r,t){try{return tr(e)?e[Ut].Encode(t):t}catch(n){throw new yP(e,r,t,n)}}i(ft,"Default");function wP(e,r,t,n){const o=ft(e,t,n);return sn(o)?o.map((a,s)=>Kn(e.items,r,`${t}/${s}`,a)):o}i(wP,"FromArray$1");function kP(e,r,t,n){const o=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref],s=ft(e,t,n);return Kn(a,[...r,...o],t,s)}i(kP,"FromImport$1");function $P(e,r,t,n){const o=ft(e,t,n);if(!lo(n)||E5(n))return o;const a=Q5(e),s=a.map(h=>h[0]),l={...o};for(const[h,p]of a)h in l&&(l[h]=Kn(p,r,`${t}/${h}`,l[h]));if(!tr(e.unevaluatedProperties))return l;const u=Object.getOwnPropertyNames(l),f=e.unevaluatedProperties,g={...l};for(const h of u)s.includes(h)||(g[h]=ft(f,`${t}/${h}`,g[h]));return g}i($P,"FromIntersect$1");function xP(e,r,t,n){return ft(e.not,t,ft(e,t,n))}i(xP,"FromNot$1");function DP(e,r,t,n){const o=ft(e,t,n);if(!lo(o))return o;const a=ya(e),s={...o};for(const g of a)x5(s,g)&&(yi(s[g])&&(!pu(e.properties[g])||Ar.IsExactOptionalProperty(s,g))||(s[g]=Kn(e.properties[g],r,`${t}/${g}`,s[g])));if(!Tt(e.additionalProperties))return s;const l=Object.getOwnPropertyNames(s),u=e.additionalProperties,f={...s};for(const g of l)a.includes(g)||(f[g]=ft(u,`${t}/${g}`,f[g]));return f}i(DP,"FromObject$1");function CP(e,r,t,n){const o=ft(e,t,n);if(!lo(n))return o;const a=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(a),l={...o};for(const h of Object.getOwnPropertyNames(n))s.test(h)&&(l[h]=Kn(e.patternProperties[a],r,`${t}/${h}`,l[h]));if(!Tt(e.additionalProperties))return l;const u=Object.getOwnPropertyNames(l),f=e.additionalProperties,g={...l};for(const h of u)s.test(h)||(g[h]=ft(f,`${t}/${h}`,g[h]));return g}i(CP,"FromRecord$1");function EP(e,r,t,n){const o=Mn(e,r),a=Kn(o,r,t,n);return ft(e,t,a)}i(EP,"FromRef$1");function AP(e,r,t,n){const o=Mn(e,r),a=Kn(o,r,t,n);return ft(e,t,a)}i(AP,"FromThis$1");function FP(e,r,t,n){const o=ft(e,t,n);return sn(e.items)?e.items.map((a,s)=>Kn(a,r,`${t}/${s}`,o[s])):[]}i(FP,"FromTuple$1");function MP(e,r,t,n){for(const o of e.anyOf){if(!jc(o,r,n))continue;const a=Kn(o,r,t,n);return ft(e,t,a)}for(const o of e.anyOf){const a=Kn(o,r,t,n);if(jc(e,r,a))return ft(e,t,a)}return ft(e,t,n)}i(MP,"FromUnion$1");function Kn(e,r,t,n){const o=Wd(e,r),a=e;switch(e[z]){case"Array":return wP(a,o,t,n);case"Import":return kP(a,o,t,n);case"Intersect":return $P(a,o,t,n);case"Not":return xP(a,o,t,n);case"Object":return DP(a,o,t,n);case"Record":return CP(a,o,t,n);case"Ref":return EP(a,o,t,n);case"This":return AP(a,o,t,n);case"Tuple":return FP(a,o,t,n);case"Union":return MP(a,o,t,n);default:return ft(a,t,n)}}i(Kn,"Visit$1");function SP(e,r,t){return Kn(e,r,"",t)}i(SP,"TransformEncode");function TP(e,r){return tr(e)||Kr(e.items,r)}i(TP,"FromArray");function PP(e,r){return tr(e)||Kr(e.items,r)}i(PP,"FromAsyncIterator");function NP(e,r){return tr(e)||Kr(e.returns,r)||e.parameters.some(t=>Kr(t,r))}i(NP,"FromConstructor");function IP(e,r){return tr(e)||Kr(e.returns,r)||e.parameters.some(t=>Kr(t,r))}i(IP,"FromFunction");function BP(e,r){return tr(e)||tr(e.unevaluatedProperties)||e.allOf.some(t=>Kr(t,r))}i(BP,"FromIntersect");function OP(e,r){const t=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,a)=>[...o,e.$defs[a]],[]),n=e.$defs[e.$ref];return tr(e)||Kr(n,[...t,...r])}i(OP,"FromImport");function RP(e,r){return tr(e)||Kr(e.items,r)}i(RP,"FromIterator");function LP(e,r){return tr(e)||Kr(e.not,r)}i(LP,"FromNot");function jP(e,r){return tr(e)||Object.values(e.properties).some(t=>Kr(t,r))||Tt(e.additionalProperties)&&Kr(e.additionalProperties,r)}i(jP,"FromObject");function UP(e,r){return tr(e)||Kr(e.item,r)}i(UP,"FromPromise");function _P(e,r){const t=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[t];return tr(e)||Kr(n,r)||Tt(e.additionalProperties)&&tr(e.additionalProperties)}i(_P,"FromRecord");function zP(e,r){return tr(e)?!0:Kr(Mn(e,r),r)}i(zP,"FromRef");function qP(e,r){return tr(e)?!0:Kr(Mn(e,r),r)}i(qP,"FromThis");function VP(e,r){return tr(e)||!yi(e.items)&&e.items.some(t=>Kr(t,r))}i(VP,"FromTuple");function WP(e,r){return tr(e)||e.anyOf.some(t=>Kr(t,r))}i(WP,"FromUnion");function Kr(e,r){const t=Wd(e,r),n=e;if(e.$id&&Ag.has(e.$id))return!1;switch(e.$id&&Ag.add(e.$id),e[z]){case"Array":return TP(n,t);case"AsyncIterator":return PP(n,t);case"Constructor":return NP(n,t);case"Function":return IP(n,t);case"Import":return OP(n,t);case"Intersect":return BP(n,t);case"Iterator":return RP(n,t);case"Not":return LP(n,t);case"Object":return jP(n,t);case"Promise":return UP(n,t);case"Record":return _P(n,t);case"Ref":return zP(n,t);case"This":return qP(n,t);case"Tuple":return VP(n,t);case"Union":return WP(n,t);default:return tr(e)}}i(Kr,"Visit");const Ag=new Set;function KP(e,r){return Ag.clear(),Kr(e,r)}i(KP,"HasTransform");class HP{static{i(this,"TypeCheck")}constructor(r,t,n,o){this.schema=r,this.references=t,this.checkFunc=n,this.code=o,this.hasTransform=KP(r,t)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(r){return oP(this.schema,this.references,r)}Check(r){return this.checkFunc(r)}Decode(r){if(!this.checkFunc(r))throw new iP(this.schema,r,this.Errors(r).First());return this.hasTransform?bP(this.schema,this.references,r):r}Encode(r){const t=this.hasTransform?SP(this.schema,this.references,r):r;if(!this.checkFunc(t))throw new vP(this.schema,r,this.Errors(r).First());return t}}var Do;(function(e){function r(a){return a===36}i(r,"DollarSign"),e.DollarSign=r;function t(a){return a===95}i(t,"IsUnderscore"),e.IsUnderscore=t;function n(a){return a>=65&&a<=90||a>=97&&a<=122}i(n,"IsAlpha"),e.IsAlpha=n;function o(a){return a>=48&&a<=57}i(o,"IsNumeric"),e.IsNumeric=o})(Do||(Do={}));var Uc;(function(e){function r(a){return a.length===0?!1:Do.IsNumeric(a.charCodeAt(0))}i(r,"IsFirstCharacterNumeric");function t(a){if(r(a))return!1;for(let s=0;s<a.length;s++){const l=a.charCodeAt(s);if(!(Do.IsAlpha(l)||Do.IsNumeric(l)||Do.DollarSign(l)||Do.IsUnderscore(l)))return!1}return!0}i(t,"IsAccessor");function n(a){return a.replace(/'/g,"\\'")}i(n,"EscapeHyphen");function o(a,s){return t(s)?`${a}.${s}`:`${a}['${n(s)}']`}i(o,"Encode"),e.Encode=o})(Uc||(Uc={}));var Fg;(function(e){function r(t){const n=[];for(let o=0;o<t.length;o++){const a=t.charCodeAt(o);Do.IsNumeric(a)||Do.IsAlpha(a)?n.push(t.charAt(o)):n.push(`_${a}_`)}return n.join("").replace(/__/g,"_")}i(r,"Encode"),e.Encode=r})(Fg||(Fg={}));var Mg;(function(e){function r(t){return t.replace(/'/g,"\\'")}i(r,"Escape"),e.Escape=r})(Mg||(Mg={}));class GP extends pt{static{i(this,"TypeCompilerUnknownTypeError")}constructor(r){super("Unknown type"),this.schema=r}}class Wv extends pt{static{i(this,"TypeCompilerTypeGuardError")}constructor(r){super("Preflight validation check failed to guard for the given schema"),this.schema=r}}var Oi;(function(e){function r(s,l,u){return Ar.ExactOptionalPropertyTypes?`('${l}' in ${s} ? ${u} : true)`:`(${Uc.Encode(s,l)} !== undefined ? ${u} : true)`}i(r,"IsExactOptionalProperty"),e.IsExactOptionalProperty=r;function t(s){return Ar.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}i(t,"IsObjectLike"),e.IsObjectLike=t;function n(s){return Ar.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}i(n,"IsRecordLike"),e.IsRecordLike=n;function o(s){return Ar.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}i(o,"IsNumberLike"),e.IsNumberLike=o;function a(s){return Ar.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}i(a,"IsVoidLike"),e.IsVoidLike=a})(Oi||(Oi={}));var xl;(function(e){function r(D){return D[z]==="Any"||D[z]==="Unknown"}i(r,"IsAnyOrUnknown");function*t(D,G,F){yield"true"}i(t,"FromAny");function*n(D,G,F){yield"true"}i(n,"FromArgument");function*o(D,G,F){yield`Array.isArray(${F})`;const[oe,X]=[Sn("value","any"),Sn("acc","number")];pe(D.maxItems)&&(yield`${F}.length <= ${D.maxItems}`),pe(D.minItems)&&(yield`${F}.length >= ${D.minItems}`);const Q=Ur(D.items,G,"value");if(yield`((array) => { for(const ${oe} of array) if(!(${Q})) { return false }; return true; })(${F})`,mr(D.contains)||pe(D.minContains)||pe(D.maxContains)){const Je=mr(D.contains)?D.contains:yr(),Nt=Ur(Je,G,"value"),ho=pe(D.minContains)?[`(count >= ${D.minContains})`]:[],Tn=pe(D.maxContains)?[`(count <= ${D.maxContains})`]:[],Jn=`const count = value.reduce((${X}, ${oe}) => ${Nt} ? acc + 1 : acc, 0)`,Au=["(count > 0)",...ho,...Tn].join(" && ");yield`((${oe}) => { ${Jn}; return ${Au}})(${F})`}D.uniqueItems===!0&&(yield`((${oe}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${F})`)}i(o,"FromArray");function*a(D,G,F){yield`(typeof value === 'object' && Symbol.asyncIterator in ${F})`}i(a,"FromAsyncIterator");function*s(D,G,F){yield`(typeof ${F} === 'bigint')`,xo(D.exclusiveMaximum)&&(yield`${F} < BigInt(${D.exclusiveMaximum})`),xo(D.exclusiveMinimum)&&(yield`${F} > BigInt(${D.exclusiveMinimum})`),xo(D.maximum)&&(yield`${F} <= BigInt(${D.maximum})`),xo(D.minimum)&&(yield`${F} >= BigInt(${D.minimum})`),xo(D.multipleOf)&&(yield`(${F} % BigInt(${D.multipleOf})) === 0`)}i(s,"FromBigInt");function*l(D,G,F){yield`(typeof ${F} === 'boolean')`}i(l,"FromBoolean");function*u(D,G,F){yield*at(D.returns,G,`${F}.prototype`)}i(u,"FromConstructor");function*f(D,G,F){yield`(${F} instanceof Date) && Number.isFinite(${F}.getTime())`,pe(D.exclusiveMaximumTimestamp)&&(yield`${F}.getTime() < ${D.exclusiveMaximumTimestamp}`),pe(D.exclusiveMinimumTimestamp)&&(yield`${F}.getTime() > ${D.exclusiveMinimumTimestamp}`),pe(D.maximumTimestamp)&&(yield`${F}.getTime() <= ${D.maximumTimestamp}`),pe(D.minimumTimestamp)&&(yield`${F}.getTime() >= ${D.minimumTimestamp}`),pe(D.multipleOfTimestamp)&&(yield`(${F}.getTime() % ${D.multipleOfTimestamp}) === 0`)}i(f,"FromDate");function*g(D,G,F){yield`(typeof ${F} === 'function')`}i(g,"FromFunction");function*h(D,G,F){const oe=globalThis.Object.getOwnPropertyNames(D.$defs).reduce((X,Q)=>[...X,D.$defs[Q]],[]);yield*at(Ss(D.$ref),[...G,...oe],F)}i(h,"FromImport");function*p(D,G,F){yield`Number.isInteger(${F})`,pe(D.exclusiveMaximum)&&(yield`${F} < ${D.exclusiveMaximum}`),pe(D.exclusiveMinimum)&&(yield`${F} > ${D.exclusiveMinimum}`),pe(D.maximum)&&(yield`${F} <= ${D.maximum}`),pe(D.minimum)&&(yield`${F} >= ${D.minimum}`),pe(D.multipleOf)&&(yield`(${F} % ${D.multipleOf}) === 0`)}i(p,"FromInteger");function*m(D,G,F){const oe=D.allOf.map(X=>Ur(X,G,F)).join(" && ");if(D.unevaluatedProperties===!1){const X=vt(`${new RegExp(ds(D))};`),Q=`Object.getOwnPropertyNames(${F}).every(key => ${X}.test(key))`;yield`(${oe} && ${Q})`}else if(mr(D.unevaluatedProperties)){const X=vt(`${new RegExp(ds(D))};`),Q=`Object.getOwnPropertyNames(${F}).every(key => ${X}.test(key) || ${Ur(D.unevaluatedProperties,G,`${F}[key]`)})`;yield`(${oe} && ${Q})`}else yield`(${oe})`}i(m,"FromIntersect");function*v(D,G,F){yield`(typeof value === 'object' && Symbol.iterator in ${F})`}i(v,"FromIterator");function*$(D,G,F){typeof D.const=="number"||typeof D.const=="boolean"?yield`(${F} === ${D.const})`:yield`(${F} === '${Mg.Escape(D.const)}')`}i($,"FromLiteral");function*C(D,G,F){yield"false"}i(C,"FromNever");function*E(D,G,F){yield`(!${Ur(D.not,G,F)})`}i(E,"FromNot");function*A(D,G,F){yield`(${F} === null)`}i(A,"FromNull");function*I(D,G,F){yield Oi.IsNumberLike(F),pe(D.exclusiveMaximum)&&(yield`${F} < ${D.exclusiveMaximum}`),pe(D.exclusiveMinimum)&&(yield`${F} > ${D.exclusiveMinimum}`),pe(D.maximum)&&(yield`${F} <= ${D.maximum}`),pe(D.minimum)&&(yield`${F} >= ${D.minimum}`),pe(D.multipleOf)&&(yield`(${F} % ${D.multipleOf}) === 0`)}i(I,"FromNumber");function*_(D,G,F){yield Oi.IsObjectLike(F),pe(D.minProperties)&&(yield`Object.getOwnPropertyNames(${F}).length >= ${D.minProperties}`),pe(D.maxProperties)&&(yield`Object.getOwnPropertyNames(${F}).length <= ${D.maxProperties}`);const oe=Object.getOwnPropertyNames(D.properties);for(const X of oe){const Q=Uc.Encode(F,X),Je=D.properties[X];if(D.required&&D.required.includes(X))yield*at(Je,G,Q),(Ps(Je)||r(Je))&&(yield`('${X}' in ${F})`);else{const Nt=Ur(Je,G,Q);yield Oi.IsExactOptionalProperty(F,X,Nt)}}if(D.additionalProperties===!1)if(D.required&&D.required.length===oe.length)yield`Object.getOwnPropertyNames(${F}).length === ${oe.length}`;else{const X=`[${oe.map(Q=>`'${Q}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${F}).every(key => ${X}.includes(key))`}if(typeof D.additionalProperties=="object"){const X=Ur(D.additionalProperties,G,`${F}[key]`),Q=`[${oe.map(Je=>`'${Je}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${F}).every(key => ${Q}.includes(key) || ${X}))`}}i(_,"FromObject");function*H(D,G,F){yield`${F} instanceof Promise`}i(H,"FromPromise");function*ce(D,G,F){yield Oi.IsRecordLike(F),pe(D.minProperties)&&(yield`Object.getOwnPropertyNames(${F}).length >= ${D.minProperties}`),pe(D.maxProperties)&&(yield`Object.getOwnPropertyNames(${F}).length <= ${D.maxProperties}`);const[oe,X]=Object.entries(D.patternProperties)[0],Q=vt(`${new RegExp(oe)}`),Je=Ur(X,G,"value"),Nt=mr(D.additionalProperties)?Ur(D.additionalProperties,G,F):D.additionalProperties===!1?"false":"true",ho=`(${Q}.test(key) ? ${Je} : ${Nt})`;yield`(Object.entries(${F}).every(([key, value]) => ${ho}))`}i(ce,"FromRecord");function*Te(D,G,F){const oe=Mn(D,G);if(He.functions.has(D.$ref))return yield`${hn(D.$ref)}(${F})`;yield*at(oe,G,F)}i(Te,"FromRef");function*be(D,G,F){const oe=vt(`${new RegExp(D.source,D.flags)};`);yield`(typeof ${F} === 'string')`,pe(D.maxLength)&&(yield`${F}.length <= ${D.maxLength}`),pe(D.minLength)&&(yield`${F}.length >= ${D.minLength}`),yield`${oe}.test(${F})`}i(be,"FromRegExp");function*Me(D,G,F){yield`(typeof ${F} === 'string')`,pe(D.maxLength)&&(yield`${F}.length <= ${D.maxLength}`),pe(D.minLength)&&(yield`${F}.length >= ${D.minLength}`),D.pattern!==void 0&&(yield`${vt(`${new RegExp(D.pattern)};`)}.test(${F})`),D.format!==void 0&&(yield`format('${D.format}', ${F})`)}i(Me,"FromString");function*nr(D,G,F){yield`(typeof ${F} === 'symbol')`}i(nr,"FromSymbol");function*or(D,G,F){yield`(typeof ${F} === 'string')`,yield`${vt(`${new RegExp(D.pattern)};`)}.test(${F})`}i(or,"FromTemplateLiteral");function*jr(D,G,F){yield`${hn(D.$ref)}(${F})`}i(jr,"FromThis");function*Ht(D,G,F){if(yield`Array.isArray(${F})`,D.items===void 0)return yield`${F}.length === 0`;yield`(${F}.length === ${D.maxItems})`;for(let oe=0;oe<D.items.length;oe++)yield`${Ur(D.items[oe],G,`${F}[${oe}]`)}`}i(Ht,"FromTuple");function*Et(D,G,F){yield`${F} === undefined`}i(Et,"FromUndefined");function*fo(D,G,F){yield`(${D.anyOf.map(X=>Ur(X,G,F)).join(" || ")})`}i(fo,"FromUnion");function*Zr(D,G,F){yield`${F} instanceof Uint8Array`,pe(D.maxByteLength)&&(yield`(${F}.length <= ${D.maxByteLength})`),pe(D.minByteLength)&&(yield`(${F}.length >= ${D.minByteLength})`)}i(Zr,"FromUint8Array");function*Yn(D,G,F){yield"true"}i(Yn,"FromUnknown");function*go(D,G,F){yield Oi.IsVoidLike(F)}i(go,"FromVoid");function*gn(D,G,F){const oe=He.instances.size;He.instances.set(oe,D),yield`kind('${D[z]}', ${oe}, ${F})`}i(gn,"FromKind");function*at(D,G,F,oe=!0){const X=rn(D.$id)?[...G,D]:G,Q=D;if(oe&&rn(D.$id)){const Je=hn(D.$id);if(He.functions.has(Je))return yield`${Je}(${F})`;{He.functions.set(Je,"<deferred>");const Nt=pn(Je,D,G,"value",!1);return He.functions.set(Je,Nt),yield`${Je}(${F})`}}switch(Q[z]){case"Any":return yield*t();case"Argument":return yield*n();case"Array":return yield*o(Q,X,F);case"AsyncIterator":return yield*a(Q,X,F);case"BigInt":return yield*s(Q,X,F);case"Boolean":return yield*l(Q,X,F);case"Constructor":return yield*u(Q,X,F);case"Date":return yield*f(Q,X,F);case"Function":return yield*g(Q,X,F);case"Import":return yield*h(Q,X,F);case"Integer":return yield*p(Q,X,F);case"Intersect":return yield*m(Q,X,F);case"Iterator":return yield*v(Q,X,F);case"Literal":return yield*$(Q,X,F);case"Never":return yield*C();case"Not":return yield*E(Q,X,F);case"Null":return yield*A(Q,X,F);case"Number":return yield*I(Q,X,F);case"Object":return yield*_(Q,X,F);case"Promise":return yield*H(Q,X,F);case"Record":return yield*ce(Q,X,F);case"Ref":return yield*Te(Q,X,F);case"RegExp":return yield*be(Q,X,F);case"String":return yield*Me(Q,X,F);case"Symbol":return yield*nr(Q,X,F);case"TemplateLiteral":return yield*or(Q,X,F);case"This":return yield*jr(Q,X,F);case"Tuple":return yield*Ht(Q,X,F);case"Undefined":return yield*Et(Q,X,F);case"Union":return yield*fo(Q,X,F);case"Uint8Array":return yield*Zr(Q,X,F);case"Unknown":return yield*Yn();case"Void":return yield*go(Q,X,F);default:if(!fi(Q[z]))throw new GP(D);return yield*gn(Q,X,F)}}i(at,"Visit");const He={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Ur(D,G,F,oe=!0){return`(${[...at(D,G,F,oe)].join(" && ")})`}i(Ur,"CreateExpression");function hn(D){return`check_${Fg.Encode(D)}`}i(hn,"CreateFunctionName");function vt(D){const G=`local_${He.variables.size}`;return He.variables.set(G,`const ${G} = ${D}`),G}i(vt,"CreateVariable");function pn(D,G,F,oe,X=!0){const[Q,Je]=[`
`,Jn=>"".padStart(Jn," ")],Nt=Sn("value","any"),ho=jo("boolean"),Tn=[...at(G,F,oe,X)].map(Jn=>`${Je(4)}${Jn}`).join(` &&${Q}`);return`function ${D}(${Nt})${ho} {${Q}${Je(2)}return (${Q}${Tn}${Q}${Je(2)})
}`}i(pn,"CreateFunction");function Sn(D,G){const F=He.language==="typescript"?`: ${G}`:"";return`${D}${F}`}i(Sn,"CreateParameter");function jo(D){return He.language==="typescript"?`: ${D}`:""}i(jo,"CreateReturns");function Eu(D,G,F){const oe=pn("check",D,G,"value"),X=Sn("value","any"),Q=jo("boolean"),Je=[...He.functions.values()],Nt=[...He.variables.values()],ho=rn(D.$id)?`return function check(${X})${Q} {
  return ${hn(D.$id)}(value)
}`:`return ${oe}`;return[...Nt,...Je,ho].join(`
`)}i(Eu,"Build");function Da(...D){const G={language:"javascript"},[F,oe,X]=D.length===2&&sn(D[1])?[D[0],D[1],G]:D.length===2&&!sn(D[1])?[D[0],[],D[1]]:D.length===3?[D[0],D[1],D[2]]:D.length===1?[D[0],[],G]:[null,[],G];if(He.language=X.language,He.variables.clear(),He.functions.clear(),He.instances.clear(),!mr(F))throw new Wv(F);for(const Q of oe)if(!mr(Q))throw new Wv(Q);return Eu(F,oe)}i(Da,"Code"),e.Code=Da;function Tx(D,G=[]){const F=Da(D,G,{language:"javascript"}),oe=globalThis.Function("kind","format","hash",F),X=new Map(He.instances);function Q(Tn,Jn,Au){if(!fi(Tn)||!X.has(Jn))return!1;const Px=cp(Tn),Nx=X.get(Jn);return Px(Nx,Au)}i(Q,"typeRegistryFunction");function Je(Tn,Jn){return ap(Tn)?sp(Tn)(Jn):!1}i(Je,"formatRegistryFunction");function Nt(Tn){return Np(Tn)}i(Nt,"hashFunction");const ho=oe(Q,Je,Nt);return new HP(D,G,ho,F)}i(Tx,"Compile"),e.Compile=Tx})(xl||(xl={}));const Sg={};function Ck(e,r){e in Sg||(Sg[e]=r)}i(Ck,"registerErrorMessage");let Kv=!1;function ZP(){Kv||(Kv=!0,kS(e=>(Sg[e.schema[z]]||yk)(e)))}i(ZP,"setShapeDefinitionErrorMessage");const Tg=Symbol.for("object-shape-tester.shape-identifier");function _e(e){if(ZP(),Ip(e))return e;const r=Pg(e),t=Ri(r,!1),n=Ri(r,!0),o={$_schema:r,$_schemaNoExtraKeys:t,$_schemaExtraKeys:n,default:r.default,$_compiledSchema:xl.Compile(r),$_compiledSchemaNoExtraKeys:xl.Compile(t),$_compiledSchemaExtraKeys:xl.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[Tg]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}i(_e,"defineShape");function Ip(e){return S.hasKey(e,Tg)&&!!e[Tg]}i(Ip,"isShape");function Bp(e){return S.hasKey(e,z)}i(Bp,"isSchema");function Ri(e,r){const t={...e};if(Array.isArray(e.anyOf)&&(t.anyOf=e.anyOf.map(n=>Ri(n,r))),Array.isArray(e.allOf)&&(t.allOf=e.allOf.map(n=>Ri(n,r))),Bp(e.items)?t.items=Ri(e.items,r):Array.isArray(e.items)&&(t.items=e.items.map(n=>Ri(n,r))),S.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,a])=>{n[o]=Ri(a,r)}),t.properties=n}return t.additionalProperties=r,t}i(Ri,"forceAdditionalProperties");function Pg(e){if(Bp(e))return e;if(Ip(e))return e.$_schema;if(S.isFunction(e))return Xe.Function([],Xe.Any(),{default:e});if(S.isObject(e)){const r={},t={};return Object.entries(e).forEach(([n,o])=>{const a=Pg(o);t[n]=a,r[n]=a.default}),Xe.Object(t,{default:r})}else{if(S.isArray(e))return Xe.Array(Xe.Union(e.map(r=>Pg(r))),{default:[]});if(S.isPrimitive(e)){if(S.isString(e))return Xe.String({default:e});if(S.isNumber(e))return Xe.Number({default:e});if(S.isBoolean(e))return Xe.Boolean({default:e});if(S.isSymbol(e))return Xe.Symbol({default:e});if(S.isNull(e))return Xe.Null({default:null});if(S.isUndefined(e))return Xe.Undefined({default:void 0});if(S.isBigInt(e))return Xe.BigInt({default:e});Er.tsType(e).equals(),Er.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${x(e)}`)}}i(Pg,"shapeInitToSchema");function YP({checkValue:e,default:r,name:t}){return fi(t)||up(t,(n,o)=>e(o)),(n=r)=>_e(Xe.Unsafe({[z]:t,default:n}))}i(YP,"createCustomShape");function ta(e,r){const t=Jt(e);if(r!=null&&!t.includes(r))throw new TypeError("enumShape default must be a subset of the given enum.");return _e(Xe.Union(t.map(n=>Xe.Literal(n)),{default:r??t[0]}))}i(ta,"enumShape");function xe(e){return S.isSymbol(e)?JP(e):_e(Xe.Const(e,{default:e}))}i(xe,"exactShape");const Wu="ExactSymbol";function JP(e){return fi(Wu)||up(Wu,(r,t)=>t===r.symbol),Ck(Wu,({schema:r})=>`Expected symbol ${r.symbol?.description?SD({value:r.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),_e(Xe.Unsafe({[z]:Wu,symbol:e,default:e}))}i(JP,"exactSymbolShape");function XP(...e){const r={},t=e.map(n=>{const o=_e(n);return Object.assign(r,o.default),o.$_schema});return _e(Xe.Composite(t,{default:r}))}i(XP,"intersectShape");function lt(e,r={}){Ar.ExactOptionalPropertyTypes=!0;const t=_e(e).$_schema,n=r.alsoUndefined?Xe.Union([Xe.Undefined(),t]):t;return _e(Xe.Optional(n))}i(lt,"optionalShape");function pr(...e){let r;const t=e.map((n,o)=>{const a=_e(n);return o||(r=a.default),a.$_schema});return _e(Xe.Union(t,{default:r}))}i(pr,"unionShape");class QP extends TypeError{static{i(this,"ShapeMismatchError")}errors;failureMessage;name="ShapeMismatchError";constructor(r,t){const n=r.map(a=>Ek(a)).join(`
`),o=sa(t,`Shape mismatch:
${mh(n,1)}`);super(o),this.errors=r,this.failureMessage=t}}function eN(e){return e.errors.flatMap(r=>Array.from(r))}i(eN,"getSubErrors");function Ek(e,r=0){const t=eN(e).map(o=>Ek(o,r+1)),n=[e.path,e.message].filter(S.isTruthy).join(": ")+(t.length?":":"");return[mh(n,r),...t].join(`
`)}i(Ek,"createErrorMessage");function Xo(e,r,t={}){return Ak(r,t).Check(e)}i(Xo,"checkValidShape");function _c(e,r,t={},n){if(Xo(e,r,t))return;const o=Array.from(Ak(r,t).Errors(e));if(o.length)throw new QP(o,n)}i(_c,"assertValidShape");function Ak(e,r){return e=rN(e),r.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}i(Ak,"getCompiledSchema");function rN(e){return _e(e)}i(rN,"ensureShape");function ja({exclusiveMax:e,exclusiveMin:r,...t}){const{min:n,max:o}=sh(t),a=t.default??(o-n)/2+n,s=_e(Xe.Number({...r?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:a})),l=uw(()=>_c(a,s));if(l)throw la(l,"Default range value is not within range.");return s}i(ja,"rangeShape");const dc="recordShape";function Kd({keys:e,values:r,partial:t,additionalProperties:n}){tN();const o=Fk(e),a=_e(r);return _e(Xe.Unsafe({[z]:dc,keysShape:o,valuesShape:a,isPartial:!!t,additionalProperties:!!n,default:nN({isPartial:!!t,keysShape:o,valuesShape:a})}))}i(Kd,"recordShape");function tN(){fi(dc)||up(dc,(e,r)=>{if(typeof r!="object"||!r||Array.isArray(r))return!1;const t=Object.entries(r).every(([o,a])=>{const s=e.additionalProperties?!0:Xo(o,e.keysShape),l=Xo(a,e.valuesShape);return s&&l}),n=e.isPartial?!0:!Hv(e.keysShape,r).length;return t&&n}),Ck(dc,e=>{const t=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=En(Object.entries(n),([u])=>u,(u,[f,g])=>!Xo(f,t.keysShape)||!Xo(g,t.valuesShape)),a=Hv(t.keysShape,n),s=o.length?["Failure at keys",o.join(",")].join(": "):"",l=a.length?["Missing keys",a.join(",")].join(": "):"";return[s,l].filter(S.isTruthy).join(`
`)})}i(tN,"setRecordShapeRegistry");function Hv(e,r){const t=zc(e).filter(n=>S.isPropertyKey(n));return t.length?t.filter(n=>!S.hasKey(r,n)):[]}i(Hv,"getMissingKeys");function nN({keysShape:e,valuesShape:r,isPartial:t}){if(t)return{};{const n=zc(e),o=r.default;return Object.fromEntries(n.map(a=>[a,o]))}}i(nN,"createDefaultValue");function Fk(e){return Ip(e)?e:Bp(e)?_e(e):S.isObject(e)?ta(e):S.isArray(e)&&S.isLengthAtLeast(e,1)?pr(...e.map(r=>xe(r))):S.isPropertyKey(e)?_e(e):_e(Xe.Undefined())}i(Fk,"defineKeysShape");function zc(e){const r=e.$_schema,t=r[z].toLowerCase();return["const","literal"].includes(t)?[r.const]:t==="union"?nd(r.anyOf.flatMap(n=>zc(_e(n)))):["undefined","number","string","symbol"].includes(t)?[]:zc(Fk(e.default))}i(zc,"extractFiniteKeys");function oN(e){return _e(Xe.Unknown({default:e}))}i(oN,"unknownShape");const iN=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Op=iN.reduce((e,r)=>(e[r]=r,e),{});hr.defaultZone.name;const Mk=Op.UTC,aN=_e({hour:ja({...eb,default:eb.min}),minute:ja({...rb,default:rb.min}),second:ja({...tb,default:tb.min}),millisecond:ja({...nb,default:nb.min}),timezone:ta(Op,Mk)}),sN=_e({year:2023,month:ja({...ib,default:ib.min}),day:ja({...ab,default:ab.min}),timezone:ta(Op,Mk)});_e(XP(sN,aN));le.Years+"",le.Months+"",le.Weeks+"",le.Days+"",le.Hours+"",le.Minutes+"",le.Seconds+"",le.Milliseconds+"";_e(pr({get:xe(J.Month),in:pr(xe(J.Year))},{get:xe(J.Week),in:pr(xe(J.Year),xe(J.Month))},{get:xe(J.Day),in:pr(xe(J.Year),xe(J.Month),xe(J.Week))},{get:xe(J.Hour),in:pr(xe(J.Year),xe(J.Month),xe(J.Week),xe(J.Day))},{get:xe(J.Minute),in:pr(xe(J.Year),xe(J.Month),xe(J.Week),xe(J.Day),xe(J.Hour))},{get:xe(J.Second),in:pr(xe(J.Year),xe(J.Month),xe(J.Week),xe(J.Day),xe(J.Hour),xe(J.Minute))},{get:xe(J.Millisecond),in:pr(xe(J.Year),xe(J.Month),xe(J.Week),xe(J.Day),xe(J.Hour),xe(J.Minute),xe(J.Second))}));Kd({keys:ta(le),values:-1,partial:!0});var Gv;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Gv||(Gv={}));var Ng;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Ng||(Ng={}));var Zv;(function(e){e.Year="year",e.Month="month",e.Day="day"})(Zv||(Zv={}));const lN={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};CD(lN,Jt(Ng));YP({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return uN(e)}});function uN(e){return ae.fromISO(e).toUTC().toISO()===e}i(uN,"isValidIsoString");const cN=_e({listen(e,r){return()=>!1},destroy(){},removeListener(e){return!1},value:oN()});function n0(e){return Xo(e,cN,{allowExtraKeys:!0})}i(n0,"isObservableBase");class Sk extends b5{static{i(this,"Observable")}value;equalityCheck;constructor(r){super(),this.value=r.defaultValue,this.equalityCheck="equalityCheck"in r?r.equalityCheck:Kh}setValue(r){return super.setValue(r)}listen(r,t){return super.listen(r,t)}removeListener(r){return super.removeListener(r)}}const{I:dN}=a8,Yv=i(e=>e,"i$1"),Jv=i(()=>document.createComment(""),"s"),Gs=i((e,r,t)=>{const n=e._$AA.parentNode,o=r===void 0?e._$AB:r._$AA;if(t===void 0){const a=n.insertBefore(Jv(),o),s=n.insertBefore(Jv(),o);t=new dN(a,s,e,e.options)}else{const a=t._$AB.nextSibling,s=t._$AM,l=s!==e;if(l){let u;t._$AQ?.(e),t._$AM=e,t._$AP!==void 0&&(u=e._$AU)!==s._$AU&&t._$AP(u)}if(a!==o||l){let u=t._$AA;for(;u!==a;){const f=Yv(u).nextSibling;Yv(n).insertBefore(u,o),u=f}}}return t},"v"),Ii=i((e,r,t=e)=>(e._$AI(r,t),e),"u$1"),fN={},gN=i((e,r=fN)=>e._$AH=r,"p$2"),hN=i(e=>e._$AH,"M$1"),o0=i(e=>{e._$AR(),e._$AA.remove()},"h");const Hd={ATTRIBUTE:1,CHILD:2,ELEMENT:6},uo=i(e=>(...r)=>({_$litDirective$:e,values:r}),"e$4");class co{static{i(this,"i")}constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,n){this._$Ct=r,this._$AM=t,this._$Ci=n}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}}const pN={attribute:!0,type:String,converter:Ec,reflect:!1,hasChanged:Fh},mN=i((e=pN,r,t)=>{const{kind:n,metadata:o}=t;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(t.name,e),n==="accessor"){const{name:s}=t;return{set(l){const u=r.get.call(this);r.set.call(this,l),this.requestUpdate(s,u,e,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,e,l),l}}}if(n==="setter"){const{name:s}=t;return function(l){const u=this[s];r.call(this,l),this.requestUpdate(s,u,e,!0,l)}}throw Error("Unsupported decorator location: "+n)},"r");function bN(e){return(r,t)=>typeof t=="object"?mN(e,r,t):((n,o,a)=>{const s=o.hasOwnProperty(a);return o.constructor.createProperty(a,n),s?Object.getOwnPropertyDescriptor(o,a):void 0})(e,r,t)}i(bN,"n$1");const ot=uo(class extends co{constructor(e){if(super(e),e.type!==Hd.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(r=>e[r]).join(" ")+" "}update(e,[r]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in r)r[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(r)}const t=e.element.classList;for(const n of this.st)n in r||(t.remove(n),this.st.delete(n));for(const n in r){const o=!!r[n];o===this.st.has(n)||this.nt?.has(n)||(o?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return tn}});const Ue=i(e=>e??ee,"o$1");let Ig=class extends co{static{i(this,"e")}constructor(r){if(super(r),this.it=ee,r.type!==Hd.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===ee||r==null)return this._t=void 0,this.it=r;if(r===tn)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const t=[r];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ig.directiveName="unsafeHTML",Ig.resultType=1;const Xv=uo(Ig);function vN(e,r,t){return e?r(e):t?.(e)}i(vN,"n");class yN extends vl{static{i(this,"DeclarativeElement")}static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function wN(e,r,t){const n=!r.length&&!t.length,o=e.length?!1:!r.filter(l=>!!l.index).length;if(n||o)return[...e];const a=e.map(l=>[l]);return a.length||(a[0]=[]),t.forEach(l=>{l>=0&&l<e.length&&(a[l]=[])}),r.forEach(l=>{const u=a[l.index];u&&u.splice(0,0,...l.values)}),a.flat()}i(wN,"insertAndRemoveValues");function Bg(e){return S.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}i(Bg,"isMinimalDefinitionWithInputs");function Rp(e){return S.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}i(Rp,"hasTagName");function Tk(e){return En(e,r=>{if(Bg(r))return r.definition;if(Rp(r))return r.tagInterpolationKey||r},S.isTruthy)}i(Tk,"extractElementKeys");const Pk=new WeakMap;function kN(e,r){const t=Tk(r);return Nk(Pk,[e,...t]).value?.template}i(kN,"getAlreadyMappedTemplate");function $N(e,r,t){const n=Tk(r);return Bk(Pk,[e,...n],t)}i($N,"setMappedTemplate");function Nk(e,r,t=0){const{currentTemplateAndNested:n,reason:o}=Ik(e,r,t);return n?t===r.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Nk(n.nested,r,t+1):{value:void 0,reason:`map at key index ${t} did not have nested maps`}:{value:n,reason:o}}i(Nk,"getNestedValues");function Ik(e,r,t){const n=r[t];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${t} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${t} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${t} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}i(Ik,"getCurrentKeyAndValue");function Bk(e,r,t,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Ik(e,r,n);if(!a)return{result:!1,reason:s};const l=o??{nested:void 0,template:void 0};if(o||e.set(a,l),n===r.length-1)return l.template=t,{result:!0,reason:"set value at end of keys array"};const u=l.nested??new WeakMap;return l.nested||(l.nested=u),Bk(u,r,t,n+1)}i(Bk,"setNestedValues");function Ok(e,r,t){const n=kN(e,r),o=n??t();if(!n){const l=$N(e,r,o);if(!l.result)throw new Error(`Failed to set template transform: ${l.reason}`)}const a=o.valuesTransform(r),s=wN(r,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}i(Ok,"getTransformedTemplate");function Rk(e,r,t,n){const o=[],a=[],s=[],l=[];return e.forEach((f,g)=>{const h=o.length-1,p=o[h],m=g-1,v=r[m];n&&n(f);let $,C=[];if(typeof p=="string"&&($=t(p,f,v),$)){o[h]=[p,$.replacement].join(""),s.push(m);const A=$.getExtraValues;C=A?A(v):[],C.length&&A?(o[h]+=" ",C.forEach((I,_)=>{_&&o.push(" ")}),l.push(I=>{const _=I[m],H=A(_);return{index:m,values:H}}),o.push(f)):o[h]+=f}$||o.push(f);const E=e.raw[g];$?(a[h]=[a[h],$.replacement,E].join(""),C.length&&C.forEach(()=>{a.push("")})):a.push(E)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(f){const g=l.flatMap(h=>h(f));return{valueIndexDeletions:s,valueInsertions:g}}}}i(Rk,"transformTemplate");function xN(...[e,r,t]){if(Rp(t))return{replacement:t.tagName,getExtraValues:void 0}}i(xN,"transformCss");function DN(e,r){return Rk(e,r,xN)}i(DN,"transformCssTemplate");function k(e,...r){const t=Ok(e,r,()=>DN(e,r));return Cw(t.strings,...t.values)}i(k,"css");const CN={allowPolymorphicState:!1,errorHandler:void 0};function Lk(e,r){const t=e.instanceState;We(r).forEach(n=>{if(t&&n in t)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=r[n]:e[n]=r[n]}),"instanceInputs"in e&&We(e.instanceInputs).forEach(n=>{n in r||(e.instanceInputs[n]=void 0)})}i(Lk,"assignInputs");class EN extends CustomEvent{static{i(this,"TypedEvent")}_type="";get type(){return this._type}constructor(r,t){super(typeof r=="string"?r:r.type,{detail:t,bubbles:!0,composed:!0})}}function Lp(){return e=>class extends EN{static type=e;_type=e;constructor(r){super(e,r)}}}i(Lp,"defineTypedEvent");function Re(){return Lp()}i(Re,"defineElementEvent");function AN(e,r){return r?Object.keys(r).filter(t=>{if(typeof t!="string")throw new TypeError(`Expected event key of type string but got type '${typeof t}' for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,n)=>{const o=Lp()([e,n].join("-"));return t[n]=o,t},{}):{}}i(AN,"createEventDescriptorMap");function FN(e){return e?Ke(e,r=>r):{}}i(FN,"createHostClassNamesMap");function jk(e,r){r in e||bN()(e,r)}i(jk,"bindReactiveProperty");function MN(e,r,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${t.toLowerCase()}'`);if(!(e in r))throw new Error(`Property '${String(e)}' does not exist on '${t.toLowerCase()}'.`)}i(MN,"assertValidPropertyName");function Qv(e,r){const t=e;function n(s){r?MN(s,e,e.tagName):jk(e,s)}i(n,"verifyProperty");function o(s,l){return n(l),t[l]}return i(o,"valueGetter"),new Proxy({},{get:o,set(s,l,u){n(l);const f=t[l];function g(p){s[l]=p,t[l]=p}i(g,"setValueOnElement");const h=e.observablePropertyListenerMap[l];if(f!==u&&n0(f)&&h&&f.removeListener(h),n0(u))if(h)u.listen(!1,h);else{let p=function(){e.requestUpdate()};i(p,"newListener"),e.observablePropertyListenerMap[l]=p,u.listen(!1,p)}else n0(f)&&(e.observablePropertyListenerMap[l]=void 0);return g(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,l){if(l in s)return{get value(){return o(s,l)},configurable:!0,enumerable:!0}},has(s,l){return Reflect.has(s,l)}})}i(Qv,"createElementPropertyProxy");function e1(e,r){const t=[e,"-"].join("");Object.keys(r).forEach(n=>{if(!n.startsWith(t))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}i(e1,"assertValidStringNames");function r1(e,r,t){return t?si(t,o=>({key:o,value:[e,r,o].join("-")}),{}):{}}i(r1,"createStringNameMap");function SN({hostClassNames:e,cssVars:r}){return{hostClasses:Ke(e,(t,n)=>({name:Oe(n),selector:Oe(`:host(.${n})`)})),cssVars:r}}i(SN,"createStylesCallbackInput");function TN({host:e,hostClassesInit:r,hostClassNames:t,state:n,inputs:o}){r&&We(r).forEach(a=>{const s=r[a],l=t[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(l):e.classList.remove(l))})}i(TN,"applyHostClasses");function PN({element:e,eventsMap:r,cssVars:t,slotNamesMap:n,testIdsMap:o}){function a(l){We(l).forEach(u=>{const f=l[u];e.instanceState[u]=f})}return i(a,"updateState"),{cssVars:t,slotNames:n,testIds:o,dispatch:i(l=>e.dispatchEvent(l),"dispatch"),events:r,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:a}}i(PN,"createRenderParams");function Zn(...e){return Er.isEmpty(e),r=>{const t=r;if(!S.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");return NN({...t,options:{...t.options}})}}i(Zn,"defineElement");function NN(e){if(!S.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!S.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const r={...CN,...e.options},t=AN(e.tagName,e.events),n=FN(e.hostClasses);e.hostClasses&&e1(e.tagName,e.hostClasses),e.cssVars&&e1(e.tagName,e.cssVars);const o=e.cssVars?Pt(e.cssVars):{},a=r1(e.tagName,"slot",e.slotNames),s=r1(e.tagName,"test-id",e.testIds),l=typeof e.styles=="function"?e.styles(SN({hostClassNames:n,cssVars:o})):e.styles||k``,u=e.render;function f(...[h]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:g,inputs:h}}i(f,"typedAssignCallback");const g=class extends yN{static{i(this,"anonymousClass")}static elementOptions=r;static tagName=e.tagName;static styles=l;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return PN({element:this,eventsMap:t,cssVars:o,slotNamesMap:a,testIdsMap:s})}static assign=f;static events=t;static render=u;static hostClasses=n;static cssVars=o;static init=e;static slotNames=a;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const h=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(h);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");We(m).forEach(v=>{jk(this,v),this.instanceState[v]=m[v]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(h)instanceof Promise))throw new TypeError("init cannot be asynchronous");const p=u(h);if(p instanceof Promise)throw new TypeError("render cannot be asynchronous");return TN({host:h.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:h.state,inputs:h.inputs}),this._lastRenderedProps={inputs:{...h.inputs},state:{...h.state}},p}catch(h){const p=la(h,`Failed to render ${e.tagName}`);return console.error(p),this._lastRenderError=p,r.errorHandler?.(p),tt(p)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const h=this.createRenderParams();if(e.init(h)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(h=>{S.hasKey(h,"destroy")&&S.isFunction(h.destroy)&&h.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup&&this._stateCalled){const h=this.createRenderParams();if(e.cleanup(h)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(h){Lk(this,h)}observablePropertyListenerMap={};instanceInputs=Qv(this,!1);instanceState=Qv(this,!r.allowPolymorphicState);constructor(){super(),this.definition=g}};return Object.defineProperties(g,{name:{value:FD(e.tagName,{firstLetterCase:Sl.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,g)),g}i(NN,"internalDefineElement");class IN extends Ra{static{i(this,"InternalAsyncPropClass")}isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function BN(e){return new IN(e)}i(BN,"asyncProp");const t1=i((e,r,t)=>{const n=new Map;for(let o=r;o<=t;o++)n.set(e[o],o);return n},"u"),ON=uo(class extends co{constructor(e){if(super(e),e.type!==Hd.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,r,t){let n;t===void 0?t=r:r!==void 0&&(n=r);const o=[],a=[];let s=0;for(const l of e)o[s]=n?n(l,s):s,a[s]=t(l,s),s++;return{values:a,keys:o}}render(e,r,t){return this.dt(e,r,t).values}update(e,[r,t,n]){const o=hN(e),{values:a,keys:s}=this.dt(r,t,n);if(!Array.isArray(o))return this.ut=s,a;const l=this.ut??=[],u=[];let f,g,h=0,p=o.length-1,m=0,v=a.length-1;for(;h<=p&&m<=v;)if(o[h]===null)h++;else if(o[p]===null)p--;else if(l[h]===s[m])u[m]=Ii(o[h],a[m]),h++,m++;else if(l[p]===s[v])u[v]=Ii(o[p],a[v]),p--,v--;else if(l[h]===s[v])u[v]=Ii(o[h],a[v]),Gs(e,u[v+1],o[h]),h++,v--;else if(l[p]===s[m])u[m]=Ii(o[p],a[m]),Gs(e,o[h],o[p]),p--,m++;else if(f===void 0&&(f=t1(s,m,v),g=t1(l,h,p)),f.has(l[h]))if(f.has(l[p])){const $=g.get(s[m]),C=$!==void 0?o[$]:null;if(C===null){const E=Gs(e,o[h]);Ii(E,a[m]),u[m]=E}else u[m]=Ii(C,a[m]),Gs(e,o[h],C),o[$]=null;m++}else o0(o[p]),p--;else o0(o[h]),h++;for(;m<=v;){const $=Gs(e,u[v+1]);Ii($,a[m]),u[m++]=$}for(;h<=p;){const $=o[h++];$!==null&&o0($)}return this.ut=s,gN(e,u),tn}}),RN=ON;function Gd(e,r){return na(e,r),e.element}i(Gd,"extractElement");function LN(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}i(LN,"getPartHostTagName");function na(e,r){const t=LN(e),n=t?`: in ${t}`:"";if(e.type!==Hd.ELEMENT)throw new Error(`${r} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${r} directive found no element${n}.`)}i(na,"assertIsElementPartInfo");function jN(e,r){return uo(class extends co{element;constructor(t){super(t),this.element=lr.instanceOf(Gd(t,e),HTMLElement)}render(...t){return r({params:t,directive:this,element:this.element}),tn}})}i(jN,"createMutateDirective");const xn=jN("attributes",({element:e,params:[r],directive:t})=>{if(!r)return;const o=ca(t,"allAttributesApplied",()=>new Set);We(r).forEach(a=>{if(a.toLowerCase()!==a)throw new Error(`Cannot assign attribute name with uppercase letters: ${a}`);o.add(a)}),o.forEach(a=>{const s=r[a];s==null||s===!1||s===ee?e.removeAttribute(a):s===""||s===!0?e.setAttribute(a,""):e.setAttribute(a,String(s))})});function UN(e){const r=uo(class extends co{element;constructor(t){super(t),this.element=Gd(t,e)}render(t){return this.element.setAttribute(e,t),tn}});return{attributeSelector(t){return`[${e}="${t}"]`},attributeDirective(t){return r(t)},attributeName:e}}i(UN,"createAttributeDirective");function U(e,r){return _N(e,r)}i(U,"listen");const _N=uo(class extends co{element;lastListenerMetaData;constructor(e){super(e),this.element=Gd(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,r){return{eventType:e,callback:r,listener:i(t=>this.lastListenerMetaData?.callback(t),"listener")}}render(e,r){const t=typeof e=="string"?e:e.type;if(typeof t!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(t)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===t?this.lastListenerMetaData.callback=r:this.resetListener(this.createListenerMetaData(t,r)),tn}});function zN(e){return U("keydown",async r=>{const t=r.code.toLowerCase();(t.includes("enter")||t.includes("return")||t==="space")&&(r.stopImmediatePropagation(),r.preventDefault(),await e())})}i(zN,"listenToActivate");const n1="onDomCreated",oa=uo(class extends co{element;constructor(e){super(e),na(e,n1)}update(e,[r]){na(e,n1);const t=e.element;return t!==this.element&&(window.requestAnimationFrame(()=>r(t)),this.element=t),this.render(r)}render(e){}}),o1="onDomRendered",qN=uo(class extends co{constructor(e){super(e),na(e,o1)}update(e,[r]){na(e,o1);const t=e.element;return window.requestAnimationFrame(()=>r(t)),this.render(r)}render(e){}}),i1="onResize",jp=uo(class extends co{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&VN(this.element,this.callback,e)});callback;constructor(e){super(e),na(e,i1)}update(e,[r]){na(e,i1),this.callback=r;const t=e.element,n=this.element;return t!==n&&(this.element=t,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(t)),this.render(r)}render(e){}});function VN(e,r,t){const n=t[0];if(!n)throw console.error(t),new Error("Resize observation triggered but the first entry was empty.");r({target:n.target,contentRect:n.contentRect},e)}i(VN,"handleOnResizeCallback");function Vr(e,r,t){return vN(e,()=>r,()=>t)}i(Vr,"renderIf");const{attributeDirective:WN}=UN("data-test-id"),Qo=WN;function Up(e){const{assertInputs:r,transformInputs:t}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(r(o),Zn(...n)(t(o)))}i(Up,"wrapDefineElement");function KN(e,r){return HN(void 0,e)}i(KN,"assign");const HN=uo(class extends co{element;constructor(e){super(e),this.element=Gd(e,"assign")}render(e,r){return Lk(this.element,r),tn}}),GN={};function ZN(e,r){return r.map((t,n)=>{const o=e[n],a=e[n+1];if(o&&a){const{shouldHaveTagNameHere:s}=Uk(o,a);if(s&&S.isString(t))return{tagName:t,tagInterpolationKey:ca(GN,t,()=>({tagName:t}))}}return t})}i(ZN,"mapHtmlValues");function Uk(e,r){const t=e.trim().endsWith("<")&&!!r.match(/^[\s>]/),n=e.trim().endsWith("</")&&r.trim().startsWith(">");return{isOpeningTag:t,shouldHaveTagNameHere:t||n}}i(Uk,"classifyValue");function YN(...[e,r,t]){const n=Bg(t)?t.definition:t,{isOpeningTag:o,shouldHaveTagNameHere:a}=Uk(e,r),s=Rp(n);if(s&&a&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(a&&!s)throw console.error({lastNewString:e,currentTemplateString:r,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(u){const f=Bg(u)?u.inputs:void 0;return[o&&f?KN(f):void 0].filter(S.isTruthy)}}}i(YN,"transformHtml");function JN(e){}i(JN,"stringValidator");function XN(e){return Rk(e.strings,e.values,YN,JN)}i(XN,"transformHtmlTemplate");function b(e,...r){const t=ZN(e,r),n=QD(e,...t),o=Ok(e,t,()=>XN(n));return{...n,strings:o.strings,values:o.values}}i(b,"html");function Og(e){if("templateString"in e)return e.templateString;const{strings:r,values:t}=e;if(!r?.length&&!t?.length)return"";const n=[...t||[],""],a=(r??[""]).map((s,l)=>{const u=QN(s,n[l]);return`${s}${u}`});return bw(a.join(""))}i(Og,"convertTemplateToString");function QN(e,r){return r._$litType$!=null||r._$litDirective$!=null?Og(r):Array.isArray(r)?r.map(n=>Og(n)).join(""):e.endsWith("=")?`"${r}"`:r}i(QN,"extractValue");function _k(e){return Ke(e,(r,t)=>t instanceof rr?Oe(t.toString({format:"hex"})):_k(t))}i(_k,"colorsObjectToCssResult");const eI="dodgerblue";function Rg(e){const r=Math.abs(e.contrast("white","APCA")),t=Math.abs(e.contrast("black","APCA"));return r>t?"white":"black"}i(Rg,"calculateTextColorString");function i0({background:e,foreground:r}){return{background:e??new rr(Rg(r)),foreground:r??new rr(Rg(e))}}i(i0,"createColorPair");var qc;(function(e){e.Dark="dark",e.Light="light"})(qc||(qc={}));function rI(e){return e==="black"?"white":"black"}i(rI,"flipBackForeground");const tI={black:{foregroundFaint1:new rr("#ccc"),foregroundFaint2:new rr("#eee")},white:{foregroundFaint1:new rr("#ccc"),foregroundFaint2:new rr("#eee")}},nI={black:{backgroundFaint1:new rr("#666"),backgroundFaint2:new rr("#444")},white:{backgroundFaint1:new rr("#ccc"),backgroundFaint2:new rr("#fafafa")}};function a1({themeColor:e=eI,themeStyle:r=qc.Light}={}){const t=new rr(e),n=new rr(r===qc.Dark?"black":"white"),o=Rg(n),a=new rr(o),s={nav:{hover:i0({background:t.clone().set({"hsl.l":93})}),active:i0({background:t.clone().set({"hsl.l":90})}),selected:i0({background:t.clone().set({"hsl.l":85})})},accent:{icon:t.clone().set({"hsl.l":40})},page:{background:n,...nI[rI(o)],foreground:a,...tI[o]}};return _k(s)}i(a1,"createTheme");async function s1(e=1){const r=new vc;function t(){requestAnimationFrame(()=>{e--,e?t():r.resolve()})}return i(t,"requestNextFrame"),t(),r.promise}i(s1,"waitForAnimationFrame");function oI(e,r){return{element:e,children:zk(e)}}i(oI,"getNestedChildrenTree");function zk(e,r,t){return iI(e).map(n=>{const o=zk(n);return{element:n,children:o}})}i(zk,"recursivelyGetNestedChildrenTree");function iI(e){return[...e.children,...e.shadowRoot?.children??[]]}i(iI,"getDirectChildren");function a0(e){return e.matches(":focus")}i(a0,"isElementFocused");function _p(e){if(e instanceof ShadowRoot)return e.host;const r=e.parentNode;if(r)return r instanceof Element?r:_p(r)}i(_p,"getParentElement");function qk(e,r){if(r(e))return e;const t=_p(e);if(t)return qk(t,r)}i(qk,"findMatchingAncestor");function ka(e,r,t={}){const n=t.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof r)){const o=r.name,a=n?.constructor.name,s=t.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${a}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${a}'.`;throw new Error(s)}return n}i(ka,"extractEventTarget");function Vk(e){const r=_p(e);return r&&qk(r,t=>globalThis.getComputedStyle(t).overflowY!=="visible")||document.body}i(Vk,"findOverflowAncestor");function Wk(e){let r=0,t=document.activeElement||void 0;for(;t;){if(e({depth:r,element:t}))return r;t=t.shadowRoot?.activeElement||void 0,t&&++r}return r}i(Wk,"walkActiveElement");function aI({searchQuery:e,searchIn:r}){const t=r.length,n=e.length;if(n>t)return!1;if(n===t)return e===r;const o=r.toLowerCase(),a=e.toLowerCase();e:for(let s=0,l=0;s<n;s++){const u=a.codePointAt(s);for(;l<t;)if(o.codePointAt(l++)===u)continue e;return!1}return!0}i(aI,"fuzzySearch");const sI=To(32);function fc(e){return e.join(sI)}i(fc,"createBreadcrumbsSearchKey");function Kk(e){if(!e.length)return[];const r=fc(e),t=Kk(e.slice(0,-1));return[r,...t]}i(Kk,"getFullTreeKeysToInclude");const lI=["error","errors"];function uI(e){return lI.includes(e)}i(uI,"isSearchingForErrors");function cI({flattenedNodes:e,searchQuery:r}){const t={};function n(o){Object.values(o.children).map(s=>(n(s),fc(s.fullUrlBreadcrumbs))).forEach(s=>t[s]=!0)}return i(n,"addChildren"),e.forEach(o=>{const a=o.entry.errors.length&&uI(r),s=fc(o.fullUrlBreadcrumbs);if(aI({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(u=>S.isString(u)?u:Og(u))].join(" ").toLowerCase(),searchQuery:r.toLowerCase()})||a||t[s]){const u=Kk(o.fullUrlBreadcrumbs);n(o),u.forEach(f=>t[f]=!0)}else t[s]=!1}),e.filter(o=>{const a=fc(o.fullUrlBreadcrumbs),s=t[a];if(!S.isBoolean(s))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}i(cI,"searchFlattenedNodes");class zp extends Error{static{i(this,"SpaRouterError")}name="SpaRouterError"}class l1 extends zp{static{i(this,"GlobalUrlEventsConsolidationError")}name="GlobalUrlEventsConsolidationError"}class dI extends zp{static{i(this,"SanitizationDepthMaxed")}name="SanitizationDepthMaxed"}_e({paths:[""],search:lt(pr(void 0,Kd({keys:"",values:[""]}))),hash:lt(pr(void 0,""))});const fI=_e({basePath:lt("",{alsoUndefined:!0}),sanitizeRoute:i((e=>e),"sanitizeRoute"),maxListenerCount:lt(1,{alsoUndefined:!0}),disableWarnings:lt(!1,{alsoUndefined:!0}),isPaused:lt(!1,{alsoUndefined:!0})}),s0="://";function qp(...e){const r=e.join("/"),[t,n=""]=r.includes(s0)?r.split(s0):["",r];let o=!1;const a=n.replace(/\/{2,}/g,"/").split("/").reduce((s,l,u,f)=>{if(o)return s;const g=f[u+1];let h=l;const p=g?.startsWith("?"),m=!l.includes("?")&&p,v=g==="?";if(p||m){o=!0;let $=!1;const C=f.slice(u+2).reduce((E,A)=>(A.includes("#")&&($=!0),$?E.concat(A):[E,A].join("&")),"");h=[l,g,v?qi({value:C,prefix:"&"}):C].join("")}return s.concat(h)},[]);return[t,t?s0:"",a.join("/")].join("")}i(qp,"joinUrlPaths");var gs;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(gs||(gs={}));var hs;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(hs||(hs={}));const gI=_e({encoding:lt(pr(void 0,ta(gs))),searchParamStrategy:lt(pr(void 0,ta(hs)))});function Ku(e,r){return e.map(t=>{if(t!=null)return Ha(String(t),r)}).filter(t=>t!=null)}i(Ku,"codeValues");function Ha(e,r){return r?.encoding===gs.Decode?decodeURIComponent(e):r?.encoding===gs.Encode?encodeURIComponent(e):e}i(Ha,"codeValue");const hI=_e(Kd({keys:"",values:[""]}));function pI(e,r,t){const n=t?.searchParamStrategy===hs.Clear?{}:Ke(e,(s,l)=>iD(l)),o=Ke(r,(s,l)=>{if(t?.searchParamStrategy===hs.Append){const u=n[s],f=S.isArray(u)?u:[u];if(l){const g=S.isArray(l)?l:[l];return Ku([...f,...g],t)}else return Ku(f,t)}else return S.isArray(l)?Ku(l,t):l?Ku([l],t):void 0});return fd({...n,...o},(s,l)=>!!l)}i(pI,"combineSearchParams");function Hk(e,r){return S.isString(e)&&!e.includes("?")?{}:(S.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(a=>{const[s,...l]=DD(a,"=");return[s,l.length?l.join("="):void 0]}).reduce((a,[s,l])=>{const u=Gk({options:r,key:s,value:l}),f=ca(a,u.key,()=>[]);return l!=null&&f.push(u.value),a},{})}i(Hk,"searchParamsToObject");function mI(e){if(e!=null)return S.isArray(e)?[...e]:e===""?[]:[e]}i(mI,"wrapParamValue");function bI(e,r){const t=En(Object.entries(e),([n,o])=>{const a=mI(o);return a?.length?a.map(s=>{const l=Gk({options:r,key:n,value:s});return[l.key,l.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return t.length?St({value:t.join("&"),prefix:"?"}):""}i(bI,"searchParamsToString");function Gk({options:e,key:r,value:t}){return{key:Ha(r,e),value:Ha(String(t),e)}}i(Gk,"codeParamKeyValue");function Zk({hash:e,hostname:r,password:t,pathname:n,port:o,protocol:a,search:s,username:l}){return[a?a+"://":"",l?l+":":"",t?t+"@":"",Zd({hostname:r,port:o}),Vp({hash:e,pathname:n,search:s})].join("")}i(Zk,"createHref");function Yk({pathname:e}){const r=qi({value:e,prefix:"/"});return r?r.split("/"):[]}i(Yk,"createPaths");function Vp({hash:e,pathname:r,search:t}){return[St({value:r,prefix:"/"}),t?St({value:t,prefix:"?"}):"",e?St({value:e,prefix:"#"}):""].join("")}i(Vp,"createFullPath");function Zd({hostname:e,port:r}){return[e,r?":"+r:""].join("")}i(Zd,"createHost");function Jk({hostname:e,port:r,protocol:t}){return[t,Zd({hostname:e,port:r})].filter(S.isTruthy).join("://")}i(Jk,"createOrigin");function Ga(e,r){const t=S.isString(e)?qi({value:e,prefix:"."}):e.toString(),n=t.replace(/^[^#]*(?:#|$)/,""),o=n?St({value:Ha(n,r),prefix:"#"}):"",a=t.replace(/#[^#]*$/,""),s=a.replace(/^[^?]*(?:\?|$)/,""),l=s?St({value:Ha(s,r),prefix:"?"}):"",u=a.replace(/\?[^?]*$/,""),f=u.includes("://")?u.replace(/:\/\/.*$/,""):"",g=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),h=g.replace(/@.*/,""),p=g.replace(/^[^@]*@/,""),m=h!==p,[v,...$]=m?h.split(":").reverse():[],C=$.toReversed().join("").replace(/[/:]/g,"")||"",E=v?.replace(/[/:]/g,"")||"",A=xD(p.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),I=A[0]?.endsWith("]")?"":A[1]===":"&&A[0]||"",H=p.replace(new RegExp(`:${I}($|/)`),"$1").replace(/\/.*/,""),ce=p.replace(/^[^/]*(\/|$)/,"$1"),Te=Ha(ce.replace(/^[^/]*(?:\/|$)/,"/"),r),be=Zd({hostname:H,port:I}),Me=Jk({hostname:H,port:I,protocol:f}),nr=Zk({hash:o,hostname:H,password:E,pathname:Te,port:I,protocol:f,search:l,username:C}),or=Hk(l),jr=Yk({pathname:Te});return{fullPath:Vp({hash:o,pathname:Te,search:l}),hash:o,host:be,hostname:H,href:nr,origin:Me,password:E,pathname:Te,paths:jr,port:I,protocol:f,search:l,searchParams:or,username:C}}i(Ga,"parseUrl");_e({hash:lt(pr(void 0,"")),search:lt(pr(void 0,"",Kd({keys:"",values:pr(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:lt(pr(void 0,"")),pathname:lt(pr(void 0,"")),paths:lt(pr(void 0,[""])),protocol:lt(pr(void 0,"")),username:lt(pr(void 0,"")),password:lt(pr(void 0,"")),port:lt(pr(void 0,"",-1))});function vI(e,r,t){const n=!!t,o=r==null||Xo(r,gI,{allowExtraKeys:!1}),a=o?Ga(""):S.instanceOf(e,URL)||S.isString(e)?Ga(e):e,s=o?e:r,l=S.isString(s)&&s.startsWith("."),u=S.isString(s)||S.instanceOf(s,URL)?fd(Ga(s),($,C)=>S.isTruthy(C)):s,f=n?t:o?r:void 0,g=Ke(a,($,C)=>{if(!S.hasKey(u,$))return C;const E=u[$];return S.isNumber(E)?String(E):S.isString(E)?$==="hash"&&E?St({value:E,prefix:"#"}):$==="pathname"?St({value:E,prefix:"/"}):E:C});S.hasKey(u,"paths")&&u.paths&&(g.pathname=qp(l?a.pathname:"",...u.paths));const h=S.isString(u.search)?Hk(St({value:u.search,prefix:"?"})):In(u.search||{}),p=pI(g.searchParams,h,{...f,encoding:gs.None}),m=bI(p,f);return{...g,searchParams:p,search:m,paths:Yk(g),fullPath:Vp(g),host:Zd(g),origin:Jk(g),href:Zk({...g,search:m})}}i(vI,"buildUrl");const yI=_e({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:hI,hash:"",fullPath:"/",href:"/"});({...yI.default});const wI=0;function Xk(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==wI)}i(Xk,"shouldClickEventTriggerRouteChange");const Yd="locationchange",Co=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const u1=Co?.pushState;function c1(...e){if(!u1)return;const r=u1.apply(Co,e);return globalThis.dispatchEvent(new Event(Yd)),r}i(c1,"newPushState");const d1=Co?.replaceState;function f1(...e){if(!d1)return;const r=d1.apply(Co,e);return globalThis.dispatchEvent(new Event(Yd)),r}i(f1,"newReplaceState");function kI(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Co)){{if(Co.pushState===c1)throw new l1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Co.replaceState===f1)throw new l1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Co.pushState=c1,Co.replaceState=f1,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Yd))})}}i(kI,"consolidateGlobalUrlEvents");function Hu(e,r){const t=Ga(e),n=qi({value:qi({value:t.pathname,prefix:St({value:r||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],a=Object.keys(t.searchParams).length?t.searchParams:void 0,s=t.hash?qi({value:t.hash,prefix:"#"}):void 0;return{paths:o,search:a,hash:s}}i(Hu,"parseUrlIntoRawRoute");class $I{static{i(this,"SpaRouter")}innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(r){_c(r,fI),this.params={...r};const t=this.readCurrentRoute();this.innerObservable=new Sk({defaultValue:t,equalityCheck:i(()=>!1,"equalityCheck")}),kI(),this.removeGlobalListener=oo(globalThis,Yd,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new dI("Looping route sanitization detected; aborting window URL change listener.");const n=Hu(globalThis.location.href,this.params.basePath),o=r.sanitizeRoute(n);S.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),r.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(t,{replace:!0})}routeIncludesBasePath(r){return!r.paths||!this.params.basePath?!1:qp(...r.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Hu(globalThis.location.href,this.params.basePath))}sanitizeRoute(r){return this.params.sanitizeRoute(r)}createRouteUrl(r){const t={...Hu(globalThis.location.href,this.params.basePath),...r},n=this.sanitizeRoute(t),a=this.routeIncludesBasePath(Hu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return vI(globalThis.location.href,{paths:a.paths,search:a.search,hash:a.hash?St({value:a.hash,prefix:"#"}):""},{searchParamStrategy:hs.Clear}).href}setRoute(r,t={}){const n=this.createRouteUrl(r),{fullPath:o}=Ga(n);return this.params.isPaused||!t.force&&S.jsonEquals(Ga(globalThis.location.href).fullPath,o)?!1:t.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(r,t){return Xk(t)?(t.preventDefault(),this.setRoute(r)):!1}listen(r,t){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new zp(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(r,t),()=>this.removeListener(t)}removeListener(r){return this.innerObservable.removeListener(r)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function xI(e){return new $I({basePath:e,sanitizeRoute(r){return{paths:DI(r.paths),hash:void 0,search:void 0}}})}i(xI,"createBookRouter");function DI(e){const r=e[0];if(S.isEnumValue(r,jt)){if(r===jt.Book)return[jt.Book,...e.slice(1)];if(r===jt.Search)return e[1]?[r,e[1]]:[jt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return es.paths}i(DI,"sanitizePaths");const Vc=Lp()("element-book-change-route"),y=Pt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function re({name:e,svgTemplate:r}){return{name:e,svgTemplate:r}}i(re,"defineIcon$1");const Jd=re({name:"Check24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function g1(e){return S.isPrimitive(e)||e instanceof Jo?String(e):e.default}i(g1,"noRefColorInitToString");function eo(e,r,t,n){const o=`${t.prefix}-default-fg`,a=`${t.prefix}-default-bg`;if(S.isPrimitive(r)||r instanceof Jo)return r;if("refDefaultBackground"in r)return`var(--${a}, ${g1(t.background)})`;if("refDefaultForeground"in r)return`var(--${o}, ${g1(t.foreground)})`;if("refBackground"in r||"refForeground"in r){const s=S.hasKey(r,"refBackground")?"refBackground":S.hasKey(r,"refForeground")?"refForeground":void 0,l=s&&S.hasKey(r,s)?r[s]:void 0,u=s==="refBackground"?"background":"foreground",f=l&&n[l];if(!f)throw new Error(`Color theme ${s} reference '${l}' does not exist. (Referenced from '${e}'.)`);const g=f[u]||(u==="foreground"?eo(o,t.foreground,t,n):eo(a,t.background,t,n));return`var(--${l}-${u==="foreground"?"fg":"bg"}, ${eo(l,g,t,n)})`}else return r.value}i(eo,"createColorCssVarDefault");const Ze="theme-default";function Wp(e,r){try{if(Ze in r)throw new Error(`Cannot define theme color by name '${Ze}', it is used internally.`);const t=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,o=`${e.prefix}-default-inverse-fg`,a=`${e.prefix}-default-inverse-bg`,s={[t]:eo(t,e.foreground,e,r),[n]:eo(n,e.background,e,r),[o]:eo(o,e.background,e,r),[a]:eo(a,e.foreground,e,r)},l=Pt(s),u=Un(r).reduce((v,[$,C])=>{const E=h1($),A=C.foreground?eo([$,"foreground"].join(" "),C.foreground,e,r):`var(${l[t].name}, ${l[t].default})`,I=C.background?eo([$,"background"].join(" "),C.background,e,r):`var(${l[n].name}, ${l[n].default})`;return v[E.foreground]=A,v[E.background]=I,v[E.foregroundInverse]=`var(--${E.background}, ${I})`,v[E.backgroundInverse]=`var(--${E.foreground}, ${A})`,v},{}),f=Pt(u),g={},h={};Un(r).forEach(([v,$])=>{Er.isString(v);const C=h1(v),E=f[C.foreground],A=f[C.background],I=f[C.foregroundInverse],_=f[C.backgroundInverse];Er.isDefined(E),Er.isDefined(A),Er.isDefined(I),Er.isDefined(_),g[v]={foreground:E,background:A,init:$,name:v},h[v]={foreground:I,background:_,init:$,name:v}});const p={foreground:l[t],background:l[n],init:e,name:Ze},m={...p,foreground:l[o],background:l[a]};return{colors:{[Ze]:p,...g},inverse:{[Ze]:m,...h},init:{colors:r,default:e},prefix:e.prefix}}catch(t){throw globalThis.setTimeout(()=>pw.error(t)),t}}i(Wp,"defineColorTheme");function h1(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}i(h1,"createCssVarNames");const c=Pt({"vira-red-100":"#FFF6F5","vira-red-150":"#FFEDEB","vira-red-200":"#FFE4E1","vira-red-250":"#FFDCD8","vira-red-300":"#FFD1CB","vira-red-350":"#FFC1B8","vira-red-400":"#FFA79B","vira-red-450":"#FF8274","vira-red-500":"#FF564A","vira-red-550":"#F43A32","vira-red-600":"#E2322C","vira-red-650":"#D02C27","vira-red-700":"#BB2520","vira-red-750":"#9E231D","vira-red-800":"#82211A","vira-red-850":"#701A13","vira-red-900":"#611710","vira-red-950":"#52140D","vira-red-1000":"#43130D","vira-yellow-100":"#FEF9E4","vira-yellow-150":"#FDF2D1","vira-yellow-200":"#FDEABF","vira-yellow-250":"#FEE2AD","vira-yellow-300":"#FDD89B","vira-yellow-350":"#FAC986","vira-yellow-400":"#EFB669","vira-yellow-450":"#E29D34","vira-yellow-500":"#CE8800","vira-yellow-550":"#BB7B00","vira-yellow-600":"#AC7100","vira-yellow-650":"#9E6800","vira-yellow-700":"#8C5C00","vira-yellow-750":"#794D00","vira-yellow-800":"#683E00","vira-yellow-850":"#5B3301","vira-yellow-900":"#502A05","vira-yellow-950":"#442308","vira-yellow-1000":"#381D0B","vira-green-100":"#EBFFEE","vira-green-150":"#DDFBE2","vira-green-200":"#CDF8D6","vira-green-250":"#BFF5CC","vira-green-300":"#AFF0C0","vira-green-350":"#9AE8B1","vira-green-400":"#7FD99C","vira-green-450":"#52C87F","vira-green-500":"#1BB565","vira-green-550":"#04A559","vira-green-600":"#009852","vira-green-650":"#008C4A","vira-green-700":"#007C41","vira-green-750":"#016A38","vira-green-800":"#095831","vira-green-850":"#024B29","vira-green-900":"#014024","vira-green-950":"#02371F","vira-green-1000":"#062D1B","vira-teal-100":"#E8FEFD","vira-teal-150":"#D9FAF8","vira-teal-200":"#C9F6F3","vira-teal-250":"#BAF2ED","vira-teal-300":"#A9EDE6","vira-teal-350":"#95E4DB","vira-teal-400":"#79D5CA","vira-teal-450":"#47C3B7","vira-teal-500":"#00B0A4","vira-teal-550":"#00A094","vira-teal-600":"#009389","vira-teal-650":"#00877D","vira-teal-700":"#00786F","vira-teal-750":"#00665F","vira-teal-800":"#01554F","vira-teal-850":"#004843","vira-teal-900":"#003E3A","vira-teal-950":"#033531","vira-teal-1000":"#072B29","vira-blue-100":"#F5F9FF","vira-blue-150":"#EAF3FF","vira-blue-200":"#E0EDFF","vira-blue-250":"#D6E7FF","vira-blue-300":"#CBDFFF","vira-blue-350":"#B9D4FF","vira-blue-400":"#9EC3FF","vira-blue-450":"#7AADFF","vira-blue-500":"#5697FF","vira-blue-550":"#4988ED","vira-blue-600":"#427DDC","vira-blue-650":"#3B72CA","vira-blue-700":"#3365B6","vira-blue-750":"#2D569A","vira-blue-800":"#27487E","vira-blue-850":"#203D6C","vira-blue-900":"#1B345D","vira-blue-950":"#172C4F","vira-blue-1000":"#142540","vira-accent-100":"#F5F9FF","vira-accent-150":"#EAF3FF","vira-accent-200":"#E0EDFF","vira-accent-250":"#D6E7FF","vira-accent-300":"#CBDFFF","vira-accent-350":"#B9D4FF","vira-accent-400":"#9EC3FF","vira-accent-450":"#7AADFF","vira-accent-500":"#5697FF","vira-accent-550":"#4988ED","vira-accent-600":"#427DDC","vira-accent-650":"#3B72CA","vira-accent-700":"#3365B6","vira-accent-750":"#2D569A","vira-accent-800":"#27487E","vira-accent-850":"#203D6C","vira-accent-900":"#1B345D","vira-accent-950":"#172C4F","vira-accent-1000":"#142540","vira-purple-100":"#F9F7FF","vira-purple-150":"#F3EFFF","vira-purple-200":"#EDE8FF","vira-purple-250":"#E6E1FF","vira-purple-300":"#DED8FF","vira-purple-350":"#D2CBFF","vira-purple-400":"#C1B7FF","vira-purple-450":"#AD9BFF","vira-purple-500":"#9B80FF","vira-purple-550":"#8D6EF4","vira-purple-600":"#8265E3","vira-purple-650":"#775BD1","vira-purple-700":"#6A50BB","vira-purple-750":"#5A459E","vira-purple-800":"#4A3B82","vira-purple-850":"#3E3170","vira-purple-900":"#352A61","vira-purple-950":"#2D2452","vira-purple-1000":"#251F43","vira-pink-100":"#FEF5FF","vira-pink-150":"#FFEAFF","vira-pink-200":"#FFE0FC","vira-pink-250":"#FFD7F8","vira-pink-300":"#FFCBF2","vira-pink-350":"#FFB9E9","vira-pink-400":"#FF9BDF","vira-pink-450":"#FF6DD6","vira-pink-500":"#F04AC5","vira-pink-550":"#DD3EB4","vira-pink-600":"#CC37A7","vira-pink-650":"#BC3099","vira-pink-700":"#A82988","vira-pink-750":"#8F2674","vira-pink-800":"#752361","vira-pink-850":"#641C53","vira-pink-900":"#561848","vira-pink-950":"#49153E","vira-pink-1000":"#3B1333","vira-grey-100":"#F9F9F9","vira-grey-150":"#F2F2F2","vira-grey-200":"#EBEBEB","vira-grey-250":"#E5E5E5","vira-grey-300":"#DEDEDE","vira-grey-350":"#D2D2D2","vira-grey-400":"#C2C2C2","vira-grey-450":"#ADADAD","vira-grey-500":"#999999","vira-grey-550":"#8A8A8A","vira-grey-600":"#7F7F7F","vira-grey-650":"#747474","vira-grey-700":"#676767","vira-grey-750":"#585858","vira-grey-800":"#494949","vira-grey-850":"#3E3E3E","vira-grey-900":"#353535","vira-grey-950":"#2D2D2D","vira-grey-1000":"#252525"});function l0({originalTheme:e,layerKey:r,themeColor:t,override:n,overrideValues:o}){const a=n?.[r];a&&(o[String(t[r].name)]=String(eo(r,a,e.init.default,e.init.colors)))}i(l0,"applyCssVarOverride");function Qk(e,r,{defaultOverride:t,colorOverrides:n}){const o={};t&&We(t).forEach(u=>{l0({originalTheme:e,layerKey:u,override:t,themeColor:e.colors[Ze],overrideValues:o})});const a={};n&&Un(n).forEach(([u,f])=>{const g=e.colors[u];if(!g)throw new Error(`Override color name '${u}' does not exist in the theme being overridden.`);l0({originalTheme:e,layerKey:"foreground",override:f,themeColor:g,overrideValues:a}),l0({originalTheme:e,layerKey:"background",override:f,themeColor:g,overrideValues:a})});const s=Ke(e.init.colors,(u,f)=>{const g=n?.[u];return{...f,...g}}),l=Wp({...e.init.default,...t},s);return{name:r,overrides:{...o,...a},originalTheme:e,asTheme:l}}i(Qk,"defineColorThemeOverride");const M=Wp({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:c["vira-red-1000"]},"vira-red-foreground-body":{foreground:c["vira-red-750"]},"vira-red-foreground-non-body":{foreground:c["vira-red-650"]},"vira-red-foreground-header":{foreground:c["vira-red-500"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-400"]},"vira-red-foreground-decoration":{foreground:c["vira-red-350"]},"vira-red-foreground-invisible":{foreground:c["vira-red-250"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-1000"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-700"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-600"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-red-450"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-red-400"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-red-350"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-red-200"]},"vira-red-behind-fg-small-body":{background:c["vira-red-250"]},"vira-red-behind-fg-body":{background:c["vira-red-350"]},"vira-red-behind-fg-non-body":{background:c["vira-red-400"]},"vira-red-behind-fg-header":{background:c["vira-red-500"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-650"]},"vira-red-behind-fg-decoration":{background:c["vira-red-750"]},"vira-red-behind-fg-invisible":{background:c["vira-red-1000"]},"vira-red-on-self-small-body":{foreground:c["vira-red-850"],background:c["vira-red-100"]},"vira-red-on-self-body":{foreground:c["vira-red-850"],background:c["vira-red-250"]},"vira-red-on-self-non-body":{foreground:c["vira-red-850"],background:c["vira-red-350"]},"vira-red-on-self-header":{foreground:c["vira-red-850"],background:c["vira-red-450"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-850"],background:c["vira-red-500"]},"vira-red-on-self-decoration":{foreground:c["vira-red-850"],background:c["vira-red-650"]},"vira-red-on-self-invisible":{foreground:c["vira-red-850"],background:c["vira-red-1000"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-1000"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-750"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-650"]},"vira-yellow-foreground-header":{foreground:c["vira-yellow-500"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-400"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-350"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-250"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-1000"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-700"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-600"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-450"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-400"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-350"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-250"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-250"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-350"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-400"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-500"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-650"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-750"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-1000"]},"vira-yellow-on-self-small-body":{foreground:c["vira-yellow-850"],background:c["vira-yellow-100"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-850"],background:c["vira-yellow-300"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-850"],background:c["vira-yellow-350"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-850"],background:c["vira-yellow-450"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-850"],background:c["vira-yellow-550"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-850"],background:c["vira-yellow-650"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-850"],background:c["vira-yellow-1000"]},"vira-green-foreground-small-body":{foreground:c["vira-green-1000"]},"vira-green-foreground-body":{foreground:c["vira-green-800"]},"vira-green-foreground-non-body":{foreground:c["vira-green-650"]},"vira-green-foreground-header":{foreground:c["vira-green-550"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-450"]},"vira-green-foreground-decoration":{foreground:c["vira-green-350"]},"vira-green-foreground-invisible":{foreground:c["vira-green-250"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-1000"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-750"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-650"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-green-500"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-green-400"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-green-350"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-green-250"]},"vira-green-behind-fg-small-body":{background:c["vira-green-250"]},"vira-green-behind-fg-body":{background:c["vira-green-350"]},"vira-green-behind-fg-non-body":{background:c["vira-green-450"]},"vira-green-behind-fg-header":{background:c["vira-green-550"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-650"]},"vira-green-behind-fg-decoration":{background:c["vira-green-800"]},"vira-green-behind-fg-invisible":{background:c["vira-green-1000"]},"vira-green-on-self-small-body":{foreground:c["vira-green-850"],background:c["vira-green-100"]},"vira-green-on-self-body":{foreground:c["vira-green-850"],background:c["vira-green-300"]},"vira-green-on-self-non-body":{foreground:c["vira-green-850"],background:c["vira-green-400"]},"vira-green-on-self-header":{foreground:c["vira-green-850"],background:c["vira-green-450"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-850"],background:c["vira-green-550"]},"vira-green-on-self-decoration":{foreground:c["vira-green-850"],background:c["vira-green-700"]},"vira-green-on-self-invisible":{foreground:c["vira-green-850"],background:c["vira-green-1000"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-1000"]},"vira-teal-foreground-body":{foreground:c["vira-teal-800"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-650"]},"vira-teal-foreground-header":{foreground:c["vira-teal-550"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-450"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-350"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-250"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-1000"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-750"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-600"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-teal-500"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-teal-400"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-teal-350"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-teal-250"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-250"]},"vira-teal-behind-fg-body":{background:c["vira-teal-350"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-450"]},"vira-teal-behind-fg-header":{background:c["vira-teal-500"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-650"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-750"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-1000"]},"vira-teal-on-self-small-body":{foreground:c["vira-teal-850"],background:c["vira-teal-100"]},"vira-teal-on-self-body":{foreground:c["vira-teal-850"],background:c["vira-teal-300"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-850"],background:c["vira-teal-400"]},"vira-teal-on-self-header":{foreground:c["vira-teal-850"],background:c["vira-teal-450"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-850"],background:c["vira-teal-550"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-850"],background:c["vira-teal-700"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-850"],background:c["vira-teal-1000"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-1000"]},"vira-blue-foreground-body":{foreground:c["vira-blue-750"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-650"]},"vira-blue-foreground-header":{foreground:c["vira-blue-500"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-450"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-350"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-250"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-1000"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-750"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-600"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-blue-450"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-blue-400"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-blue-350"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-blue-250"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-250"]},"vira-blue-behind-fg-body":{background:c["vira-blue-350"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-400"]},"vira-blue-behind-fg-header":{background:c["vira-blue-500"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-650"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-750"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-1000"]},"vira-blue-on-self-small-body":{foreground:c["vira-blue-850"],background:c["vira-blue-100"]},"vira-blue-on-self-body":{foreground:c["vira-blue-850"],background:c["vira-blue-300"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-850"],background:c["vira-blue-350"]},"vira-blue-on-self-header":{foreground:c["vira-blue-850"],background:c["vira-blue-450"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-850"],background:c["vira-blue-550"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-850"],background:c["vira-blue-650"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-850"],background:c["vira-blue-1000"]},"vira-accent-foreground-small-body":{foreground:c["vira-accent-1000"]},"vira-accent-foreground-body":{foreground:c["vira-accent-750"]},"vira-accent-foreground-non-body":{foreground:c["vira-accent-650"]},"vira-accent-foreground-header":{foreground:c["vira-accent-500"]},"vira-accent-foreground-placeholder":{foreground:c["vira-accent-450"]},"vira-accent-foreground-decoration":{foreground:c["vira-accent-350"]},"vira-accent-foreground-invisible":{foreground:c["vira-accent-250"]},"vira-accent-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-1000"]},"vira-accent-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-750"]},"vira-accent-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-accent-600"]},"vira-accent-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-accent-450"]},"vira-accent-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-accent-400"]},"vira-accent-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-accent-350"]},"vira-accent-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-accent-250"]},"vira-accent-behind-fg-small-body":{background:c["vira-accent-250"]},"vira-accent-behind-fg-body":{background:c["vira-accent-350"]},"vira-accent-behind-fg-non-body":{background:c["vira-accent-400"]},"vira-accent-behind-fg-header":{background:c["vira-accent-500"]},"vira-accent-behind-fg-placeholder":{background:c["vira-accent-650"]},"vira-accent-behind-fg-decoration":{background:c["vira-accent-750"]},"vira-accent-behind-fg-invisible":{background:c["vira-accent-1000"]},"vira-accent-on-self-small-body":{foreground:c["vira-accent-850"],background:c["vira-accent-100"]},"vira-accent-on-self-body":{foreground:c["vira-accent-850"],background:c["vira-accent-300"]},"vira-accent-on-self-non-body":{foreground:c["vira-accent-850"],background:c["vira-accent-350"]},"vira-accent-on-self-header":{foreground:c["vira-accent-850"],background:c["vira-accent-450"]},"vira-accent-on-self-placeholder":{foreground:c["vira-accent-850"],background:c["vira-accent-550"]},"vira-accent-on-self-decoration":{foreground:c["vira-accent-850"],background:c["vira-accent-650"]},"vira-accent-on-self-invisible":{foreground:c["vira-accent-850"],background:c["vira-accent-1000"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-1000"]},"vira-purple-foreground-body":{foreground:c["vira-purple-750"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-650"]},"vira-purple-foreground-header":{foreground:c["vira-purple-500"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-400"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-350"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-250"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-1000"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-700"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-600"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-purple-450"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-purple-400"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-purple-350"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-purple-200"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-250"]},"vira-purple-behind-fg-body":{background:c["vira-purple-350"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-400"]},"vira-purple-behind-fg-header":{background:c["vira-purple-500"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-600"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-750"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-1000"]},"vira-purple-on-self-small-body":{foreground:c["vira-purple-850"],background:c["vira-purple-100"]},"vira-purple-on-self-body":{foreground:c["vira-purple-850"],background:c["vira-purple-300"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-850"],background:c["vira-purple-350"]},"vira-purple-on-self-header":{foreground:c["vira-purple-850"],background:c["vira-purple-450"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-850"],background:c["vira-purple-500"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-850"],background:c["vira-purple-650"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-850"],background:c["vira-purple-1000"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-1000"]},"vira-pink-foreground-body":{foreground:c["vira-pink-750"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-650"]},"vira-pink-foreground-header":{foreground:c["vira-pink-500"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-400"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-350"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-250"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-1000"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-700"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-550"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-pink-450"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-pink-400"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-pink-350"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-pink-200"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-200"]},"vira-pink-behind-fg-body":{background:c["vira-pink-350"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-400"]},"vira-pink-behind-fg-header":{background:c["vira-pink-500"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-600"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-750"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-1000"]},"vira-pink-on-self-small-body":{foreground:c["vira-pink-850"],background:c["vira-pink-100"]},"vira-pink-on-self-body":{foreground:c["vira-pink-850"],background:c["vira-pink-250"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-850"],background:c["vira-pink-350"]},"vira-pink-on-self-header":{foreground:c["vira-pink-850"],background:c["vira-pink-450"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-850"],background:c["vira-pink-500"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-850"],background:c["vira-pink-650"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-850"],background:c["vira-pink-1000"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-1000"]},"vira-grey-foreground-body":{foreground:c["vira-grey-750"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-650"]},"vira-grey-foreground-header":{foreground:c["vira-grey-500"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-450"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-350"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-250"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-1000"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-750"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-600"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-grey-500"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-grey-400"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-grey-350"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-grey-250"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-250"]},"vira-grey-behind-fg-body":{background:c["vira-grey-350"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-400"]},"vira-grey-behind-fg-header":{background:c["vira-grey-500"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-650"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-750"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-1000"]},"vira-grey-on-self-small-body":{foreground:c["vira-grey-850"],background:c["vira-grey-100"]},"vira-grey-on-self-body":{foreground:c["vira-grey-850"],background:c["vira-grey-300"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-850"],background:c["vira-grey-350"]},"vira-grey-on-self-header":{foreground:c["vira-grey-850"],background:c["vira-grey-450"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-850"],background:c["vira-grey-550"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-850"],background:c["vira-grey-650"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-850"],background:c["vira-grey-1000"]}}),CI=Qk(M,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:c["vira-red-250"]},"vira-red-foreground-body":{foreground:c["vira-red-350"]},"vira-red-foreground-non-body":{foreground:c["vira-red-400"]},"vira-red-foreground-header":{foreground:c["vira-red-450"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-600"]},"vira-red-foreground-decoration":{foreground:c["vira-red-750"]},"vira-red-foreground-invisible":{foreground:c["vira-red-1000"]},"vira-red-behind-bg-small-body":{background:c["vira-red-250"]},"vira-red-behind-bg-body":{background:c["vira-red-350"]},"vira-red-behind-bg-non-body":{background:c["vira-red-400"]},"vira-red-behind-bg-header":{background:c["vira-red-500"]},"vira-red-behind-bg-placeholder":{background:c["vira-red-650"]},"vira-red-behind-bg-decoration":{background:c["vira-red-750"]},"vira-red-behind-bg-invisible":{background:c["vira-red-1000"]},"vira-red-behind-fg-small-body":{background:c["vira-red-1000"]},"vira-red-behind-fg-body":{background:c["vira-red-700"]},"vira-red-behind-fg-non-body":{background:c["vira-red-600"]},"vira-red-behind-fg-header":{background:c["vira-red-450"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-400"]},"vira-red-behind-fg-decoration":{background:c["vira-red-350"]},"vira-red-behind-fg-invisible":{background:c["vira-red-200"]},"vira-red-on-self-small-body":{foreground:c["vira-red-200"],background:c["vira-red-1000"]},"vira-red-on-self-body":{foreground:c["vira-red-200"],background:c["vira-red-950"]},"vira-red-on-self-non-body":{foreground:c["vira-red-200"],background:c["vira-red-700"]},"vira-red-on-self-header":{foreground:c["vira-red-200"],background:c["vira-red-550"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-200"],background:c["vira-red-450"]},"vira-red-on-self-decoration":{foreground:c["vira-red-200"],background:c["vira-red-400"]},"vira-red-on-self-invisible":{foreground:c["vira-red-200"],background:c["vira-red-350"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-250"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-350"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-400"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-600"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-750"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-1000"]},"vira-yellow-behind-bg-small-body":{background:c["vira-yellow-250"]},"vira-yellow-behind-bg-body":{background:c["vira-yellow-350"]},"vira-yellow-behind-bg-non-body":{background:c["vira-yellow-400"]},"vira-yellow-behind-bg-header":{background:c["vira-yellow-500"]},"vira-yellow-behind-bg-placeholder":{background:c["vira-yellow-650"]},"vira-yellow-behind-bg-decoration":{background:c["vira-yellow-750"]},"vira-yellow-behind-bg-invisible":{background:c["vira-yellow-1000"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-1000"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-700"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-600"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-450"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-400"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-350"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-250"]},"vira-yellow-on-self-small-body":{foreground:c["vira-yellow-200"],background:c["vira-yellow-1000"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-200"],background:c["vira-yellow-900"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-200"],background:c["vira-yellow-700"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-200"],background:c["vira-yellow-550"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-200"],background:c["vira-yellow-450"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-200"],background:c["vira-yellow-400"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-200"],background:c["vira-yellow-350"]},"vira-green-foreground-small-body":{foreground:c["vira-green-250"]},"vira-green-foreground-body":{foreground:c["vira-green-350"]},"vira-green-foreground-non-body":{foreground:c["vira-green-450"]},"vira-green-foreground-header":{foreground:c["vira-green-500"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-650"]},"vira-green-foreground-decoration":{foreground:c["vira-green-750"]},"vira-green-foreground-invisible":{foreground:c["vira-green-1000"]},"vira-green-behind-bg-small-body":{background:c["vira-green-250"]},"vira-green-behind-bg-body":{background:c["vira-green-350"]},"vira-green-behind-bg-non-body":{background:c["vira-green-450"]},"vira-green-behind-bg-header":{background:c["vira-green-550"]},"vira-green-behind-bg-placeholder":{background:c["vira-green-650"]},"vira-green-behind-bg-decoration":{background:c["vira-green-800"]},"vira-green-behind-bg-invisible":{background:c["vira-green-1000"]},"vira-green-behind-fg-small-body":{background:c["vira-green-1000"]},"vira-green-behind-fg-body":{background:c["vira-green-750"]},"vira-green-behind-fg-non-body":{background:c["vira-green-650"]},"vira-green-behind-fg-header":{background:c["vira-green-500"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-400"]},"vira-green-behind-fg-decoration":{background:c["vira-green-350"]},"vira-green-behind-fg-invisible":{background:c["vira-green-250"]},"vira-green-on-self-small-body":{foreground:c["vira-green-200"],background:c["vira-green-1000"]},"vira-green-on-self-body":{foreground:c["vira-green-200"],background:c["vira-green-900"]},"vira-green-on-self-non-body":{foreground:c["vira-green-200"],background:c["vira-green-700"]},"vira-green-on-self-header":{foreground:c["vira-green-200"],background:c["vira-green-600"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-200"],background:c["vira-green-450"]},"vira-green-on-self-decoration":{foreground:c["vira-green-200"],background:c["vira-green-400"]},"vira-green-on-self-invisible":{foreground:c["vira-green-200"],background:c["vira-green-350"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-250"]},"vira-teal-foreground-body":{foreground:c["vira-teal-350"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-450"]},"vira-teal-foreground-header":{foreground:c["vira-teal-500"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-650"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-750"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-1000"]},"vira-teal-behind-bg-small-body":{background:c["vira-teal-250"]},"vira-teal-behind-bg-body":{background:c["vira-teal-350"]},"vira-teal-behind-bg-non-body":{background:c["vira-teal-450"]},"vira-teal-behind-bg-placeholder":{background:c["vira-teal-650"]},"vira-teal-behind-bg-decoration":{background:c["vira-teal-750"]},"vira-teal-behind-bg-invisible":{background:c["vira-teal-1000"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-1000"]},"vira-teal-behind-fg-body":{background:c["vira-teal-750"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-600"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-400"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-350"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-250"]},"vira-teal-on-self-small-body":{foreground:c["vira-teal-200"],background:c["vira-teal-1000"]},"vira-teal-on-self-body":{foreground:c["vira-teal-200"],background:c["vira-teal-900"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-200"],background:c["vira-teal-700"]},"vira-teal-on-self-header":{foreground:c["vira-teal-200"],background:c["vira-teal-600"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-200"],background:c["vira-teal-450"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-200"],background:c["vira-teal-400"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-200"],background:c["vira-teal-350"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-250"]},"vira-blue-foreground-body":{foreground:c["vira-blue-350"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-400"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-600"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-750"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-1000"]},"vira-blue-behind-bg-small-body":{background:c["vira-blue-250"]},"vira-blue-behind-bg-body":{background:c["vira-blue-350"]},"vira-blue-behind-bg-non-body":{background:c["vira-blue-400"]},"vira-blue-behind-bg-header":{background:c["vira-blue-500"]},"vira-blue-behind-bg-placeholder":{background:c["vira-blue-650"]},"vira-blue-behind-bg-decoration":{background:c["vira-blue-750"]},"vira-blue-behind-bg-invisible":{background:c["vira-blue-1000"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-1000"]},"vira-blue-behind-fg-body":{background:c["vira-blue-750"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-600"]},"vira-blue-behind-fg-header":{background:c["vira-blue-450"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-400"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-350"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-250"]},"vira-blue-on-self-small-body":{foreground:c["vira-blue-200"],background:c["vira-blue-1000"]},"vira-blue-on-self-body":{foreground:c["vira-blue-200"],background:c["vira-blue-900"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-200"],background:c["vira-blue-700"]},"vira-blue-on-self-header":{foreground:c["vira-blue-200"],background:c["vira-blue-550"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-200"],background:c["vira-blue-450"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-200"],background:c["vira-blue-400"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-200"],background:c["vira-blue-350"]},"vira-accent-foreground-small-body":{foreground:c["vira-accent-250"]},"vira-accent-foreground-body":{foreground:c["vira-accent-350"]},"vira-accent-foreground-non-body":{foreground:c["vira-accent-400"]},"vira-accent-foreground-placeholder":{foreground:c["vira-accent-600"]},"vira-accent-foreground-decoration":{foreground:c["vira-accent-750"]},"vira-accent-foreground-invisible":{foreground:c["vira-accent-1000"]},"vira-accent-behind-bg-small-body":{background:c["vira-accent-250"]},"vira-accent-behind-bg-body":{background:c["vira-accent-350"]},"vira-accent-behind-bg-non-body":{background:c["vira-accent-400"]},"vira-accent-behind-bg-header":{background:c["vira-accent-500"]},"vira-accent-behind-bg-placeholder":{background:c["vira-accent-650"]},"vira-accent-behind-bg-decoration":{background:c["vira-accent-750"]},"vira-accent-behind-bg-invisible":{background:c["vira-accent-1000"]},"vira-accent-behind-fg-small-body":{background:c["vira-accent-1000"]},"vira-accent-behind-fg-body":{background:c["vira-accent-750"]},"vira-accent-behind-fg-non-body":{background:c["vira-accent-600"]},"vira-accent-behind-fg-header":{background:c["vira-accent-450"]},"vira-accent-behind-fg-placeholder":{background:c["vira-accent-400"]},"vira-accent-behind-fg-decoration":{background:c["vira-accent-350"]},"vira-accent-behind-fg-invisible":{background:c["vira-accent-250"]},"vira-accent-on-self-small-body":{foreground:c["vira-accent-200"],background:c["vira-accent-1000"]},"vira-accent-on-self-body":{foreground:c["vira-accent-200"],background:c["vira-accent-900"]},"vira-accent-on-self-non-body":{foreground:c["vira-accent-200"],background:c["vira-accent-700"]},"vira-accent-on-self-header":{foreground:c["vira-accent-200"],background:c["vira-accent-550"]},"vira-accent-on-self-placeholder":{foreground:c["vira-accent-200"],background:c["vira-accent-450"]},"vira-accent-on-self-decoration":{foreground:c["vira-accent-200"],background:c["vira-accent-400"]},"vira-accent-on-self-invisible":{foreground:c["vira-accent-200"],background:c["vira-accent-350"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-250"]},"vira-purple-foreground-body":{foreground:c["vira-purple-350"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-400"]},"vira-purple-foreground-header":{foreground:c["vira-purple-450"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-600"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-750"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-1000"]},"vira-purple-behind-bg-small-body":{background:c["vira-purple-250"]},"vira-purple-behind-bg-body":{background:c["vira-purple-350"]},"vira-purple-behind-bg-non-body":{background:c["vira-purple-400"]},"vira-purple-behind-bg-header":{background:c["vira-purple-500"]},"vira-purple-behind-bg-placeholder":{background:c["vira-purple-600"]},"vira-purple-behind-bg-decoration":{background:c["vira-purple-750"]},"vira-purple-behind-bg-invisible":{background:c["vira-purple-1000"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-1000"]},"vira-purple-behind-fg-body":{background:c["vira-purple-700"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-600"]},"vira-purple-behind-fg-header":{background:c["vira-purple-450"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-400"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-350"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-200"]},"vira-purple-on-self-small-body":{foreground:c["vira-purple-200"],background:c["vira-purple-1000"]},"vira-purple-on-self-body":{foreground:c["vira-purple-200"],background:c["vira-purple-900"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-200"],background:c["vira-purple-700"]},"vira-purple-on-self-header":{foreground:c["vira-purple-200"],background:c["vira-purple-550"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-200"],background:c["vira-purple-450"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-200"],background:c["vira-purple-400"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-200"],background:c["vira-purple-350"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-200"]},"vira-pink-foreground-body":{foreground:c["vira-pink-350"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-400"]},"vira-pink-foreground-header":{foreground:c["vira-pink-450"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-600"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-750"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-1000"]},"vira-pink-behind-bg-small-body":{background:c["vira-pink-200"]},"vira-pink-behind-bg-body":{background:c["vira-pink-350"]},"vira-pink-behind-bg-non-body":{background:c["vira-pink-400"]},"vira-pink-behind-bg-header":{background:c["vira-pink-500"]},"vira-pink-behind-bg-placeholder":{background:c["vira-pink-600"]},"vira-pink-behind-bg-decoration":{background:c["vira-pink-750"]},"vira-pink-behind-bg-invisible":{background:c["vira-pink-1000"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-1000"]},"vira-pink-behind-fg-body":{background:c["vira-pink-700"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-550"]},"vira-pink-behind-fg-header":{background:c["vira-pink-450"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-400"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-350"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-200"]},"vira-pink-on-self-small-body":{foreground:c["vira-pink-200"],background:c["vira-pink-1000"]},"vira-pink-on-self-body":{foreground:c["vira-pink-200"],background:c["vira-pink-950"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-200"],background:c["vira-pink-700"]},"vira-pink-on-self-header":{foreground:c["vira-pink-200"],background:c["vira-pink-550"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-200"],background:c["vira-pink-450"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-200"],background:c["vira-pink-400"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-200"],background:c["vira-pink-300"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-250"]},"vira-grey-foreground-body":{foreground:c["vira-grey-350"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-400"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-600"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-750"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-1000"]},"vira-grey-behind-bg-small-body":{background:c["vira-grey-250"]},"vira-grey-behind-bg-body":{background:c["vira-grey-350"]},"vira-grey-behind-bg-non-body":{background:c["vira-grey-400"]},"vira-grey-behind-bg-placeholder":{background:c["vira-grey-650"]},"vira-grey-behind-bg-decoration":{background:c["vira-grey-750"]},"vira-grey-behind-bg-invisible":{background:c["vira-grey-1000"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-1000"]},"vira-grey-behind-fg-body":{background:c["vira-grey-750"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-600"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-400"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-350"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-250"]},"vira-grey-on-self-small-body":{foreground:c["vira-grey-200"],background:c["vira-grey-1000"]},"vira-grey-on-self-body":{foreground:c["vira-grey-200"],background:c["vira-grey-900"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-200"],background:c["vira-grey-700"]},"vira-grey-on-self-header":{foreground:c["vira-grey-200"],background:c["vira-grey-600"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-200"],background:c["vira-grey-450"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-200"],background:c["vira-grey-400"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-200"],background:c["vira-grey-350"]}}}),p1="8px",R=Pt({"vira-form-border-color":M.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":M.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":M.colors[Ze].background.value,"vira-form-foreground-color":M.colors[Ze].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":M.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":M.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":M.colors["vira-accent-behind-bg-invisible"].background.value,"vira-form-selection-active-color":M.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-error-color":M.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":M.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":M.colors["vira-red-behind-bg-body"].background.value,"vira-form-warning-color":M.colors["vira-yellow-behind-bg-non-body"].background.value,"vira-form-warning-hover-color":M.colors["vira-yellow-behind-bg-header"].background.value,"vira-form-warning-active-color":M.colors["vira-yellow-behind-bg-body"].background.value,"vira-form-positive-color":M.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-positive-hover-color":M.colors["vira-green-behind-bg-header"].background.value,"vira-form-positive-active-color":M.colors["vira-green-behind-bg-body"].background.value,"vira-form-success-color":M.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":p1,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":M.colors["vira-accent-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":k`calc(var(--vira-form-radius, ${Oe(p1)}) + 2px)`,"vira-form-plain-color":c["vira-grey-100"].value,"vira-form-plain-hover-color":M.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":M.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":M.colors["vira-accent-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":M.colors["vira-accent-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":M.colors["vira-accent-behind-bg-body"].background.value,"vira-form-danger-color":M.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":M.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":M.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":M.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":M.colors["vira-grey-foreground-decoration"].foreground.value}),Wl=k`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Is=Pt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Xn(e){return S.isString(e)?Oe(e):e.value}i(Xn,"cssValueOrRaw$1");function ps({elementBorderSize:e="1px",outlineGap:r="2px",outlineWidth:t="2px",noNesting:n,outlineColor:o=R["vira-form-focus-outline-color"],borderRadius:a=R["vira-form-focus-outline-border-radius"],renderInside:s}={}){const l=k`calc(${Xn(r)})`,u=k`calc(${Xn(t)} + ${Xn(r)} + ${Xn(e)})`,f=s?k`
              content: '';
              top: ${l};
              left: ${l};
              position: absolute;
              width: calc(100% - calc(${l} * 2));
              height: calc(100% - calc(${l} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${Xn(t)} solid ${Xn(o)};
              border-radius: ${Xn(a)};
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
              border: ${Xn(t)} solid ${Xn(o)};
              border-radius: ${Xn(a)};
              z-index: 100;
          `;return n?f:k`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${f}
        }
    `}i(ps,"createFocusStyles$1");function m1(e){if(typeof e=="string")return EI(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let r=[0,0,0,0,!1,"unknown"];return r[0]=e.r?e.r:e.red?e.red:!1,r[1]=e.g?e.g:e.green?e.green:!1,r[2]=e.b?e.b:e.blue?e.blue:!1,r[3]=e.a?e.a:e.alpha?e.alpha:1,r[4]=!!(r[0]&&r[1]&&r[2]),r[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",r}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}i(m1,"colorParsley");function EI(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let r=!1,n=[0,0,0,0,r,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let l in s)if(e==l){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:i(function(g){for(let h=0;h<3;h++)n[h]=parseInt(g[h+1],16);return n[3]=1,!0},"sprig")},f=u.rex.exec(s[l]);return n[4]=r=u.sprig(f),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:i(function(s){let l=0,u=0,f=10,g=100,h=2.55,p="1";s[23]&&(p=s[23],delete s[23]),n[3]=p.match(/%/g)?parseFloat(p)/g:parseFloat(p);for(let m=1;m<s.length;m++)s[m]&&(l=l||m,u=m);switch(u){case 4:f=16,g=15,n[3]=parseInt(s[u],f)/g;case 3:f=16;for(let m=0;m<3;m++)n[m]=parseInt(s[l+m]+s[l+m],f);break;case 5:f=16;case 9:n[0]=n[1]=n[2]=f==10?parseFloat(s[u]):parseInt(s[u],f);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[u])*h;break;case 8:f=16,g=255,n[3]=parseInt(s[8],f)/g;case 7:f=16;case 11:for(let m=0;m<3;m++)n[m]=f==10?parseFloat(s[l+m]):parseInt(s[l+m],f);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(s[l+m])*h;break;case 18:n[5]=s[15];for(let m=0;m<3;m++)l++,n[m]=s[l].match(/%/g)?parseFloat(s[l])*2.55:parseFloat(s[l])*255;break;case 22:n[5]=s[l];for(let m=0;m<3;m++)l++,n[m]=s[l]?s[l].match(/%/g)?parseFloat(s[l])/g:parseFloat(s[l]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let I=function(_){let H=(_+A/30)%12,ce=m*Math.min(v,1-v);return v-ce*Math.max(-1,Math.min(H-3,9-H,1))};i(I,"f");let m,v,$,C,E,A=n[0]%360;if(A<0&&(A+=360),n[5].match(/^hsla?/i))m=n[1],v=n[2],$=0,E=1;else if(n[5].match(/^hwba?/i)){if($=n[1],C=n[2],$+C>=1){n[0]=n[1]=n[2]=$/($+C),n[5]="sRGB";break}m=1,v=.5,E=1-$-C}n[0]=Math.round(255*(I(0)*E+$)),n[1]=Math.round(255*(I(8)*E+$)),n[2]=Math.round(255*(I(4)*E+$)),n[5]="sRGB"}break}return!0},"parsley")},a=o.rex.exec(e);return a?(n[4]=r=o.parsley(a),n):(r=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,r,"parsleyError"])}i(EI,"parseString");const Mr={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function AI(e,r,t=-1){const n=[0,1.1];if(isNaN(e)||isNaN(r)||Math.min(e,r)<n[0]||Math.max(e,r)>n[1])return 0;let o=0,a=0,s="BoW";return e=e>Mr.blkThrs?e:e+Math.pow(Mr.blkThrs-e,Mr.blkClmp),r=r>Mr.blkThrs?r:r+Math.pow(Mr.blkThrs-r,Mr.blkClmp),Math.abs(r-e)<Mr.deltaYmin?0:(r>e?(o=(Math.pow(r,Mr.normBG)-Math.pow(e,Mr.normTXT))*Mr.scaleBoW,a=o<Mr.loClip?0:o-Mr.loBoWoffset):(s="WoB",o=(Math.pow(r,Mr.revBG)-Math.pow(e,Mr.revTXT))*Mr.scaleWoB,a=o>-.1?0:o+Mr.loWoBoffset),t<0?a*100:t==0?Math.round(Math.abs(a)*100)+"<sub>"+s+"</sub>":Number.isInteger(t)?(a*100).toFixed(t):0)}i(AI,"APCAcontrast");function FI(e,r,t=-1,n=!0){let o=m1(r),a=m1(e);return!(a[3]==""||a[3]==1)&&(a=SI(a,o,n)),AI(b1(a),b1(o),t)}i(FI,"calcAPCA");function MI(e,r=2){const t=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],a=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(r),0,0,0,0,0,0,0,0,0];s.length;let l=777;e=Math.abs(e);const u=.2,f=e==0?1:e*u|0;let g=0,h=(e-t[f][g])*u;for(g++;g<a;g++)l=t[f][g],l>400?s[g]=l:e<14.5?s[g]=999:e<29.5?s[g]=777:l>24?s[g]=Math.round(l-n[f][g]*h):s[g]=l-(2*n[f][g]*h|0)*.5;return s}i(MI,"fontLookupAPCA");function b1(e=[0,0,0]){function r(t){return Math.pow(t/255,Mr.mainTRC)}return i(r,"simpleExp"),Mr.sRco*r(e[0])+Mr.sGco*r(e[1])+Mr.sBco*r(e[2])}i(b1,"sRGBtoY");function SI(e=[0,0,0,1],r=[0,0,0],t=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let a=0;a<3;a++)o[a]=r[a]*n+e[a]*e[3],t&&(o[a]=Math.min(Math.round(o[a]),255));return o}i(SI,"alphaBlend");const e$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};Ke(e$,e=>e);Object.fromEntries(Object.entries(e$).map(([e,r])=>[r,e]));const v1=new Map;function TI({background:e,foreground:r}){const t=`${r}|${e}`,n=v1.get(t);if(n)return n;const o=mw(Number(FI(r,e)),{digits:1}),a={contrast:o,fontSizes:PI(o),contrastLevel:NI(o)};return v1.set(t,a),a}i(TI,"calculateContrast");function PI(e){const r=MI(e).slice(1);return si(r,(n,o)=>({key:(o+1)*100,value:n}))}i(PI,"calculateFontSizes");function NI(e){return lr.isDefined(Xd.find(r=>r.min<=Math.abs(e)))}i(NI,"determineContrastLevel");var te;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(te||(te={}));const II={[te.SmallBodyText]:"Small Text",[te.BodyText]:"Body Text",[te.NonBodyText]:"Non-body Text",[te.Header]:"Header",[te.Placeholder]:"Placeholder",[te.Decoration]:"Decoration",[te.Invisible]:"Invisible"};te.SmallBodyText,te.BodyText,te.NonBodyText,te.Header,te.Placeholder,te.Decoration,te.Invisible;const Xd=[{min:90,name:te.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:te.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:te.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:te.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:te.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:te.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:te.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];si(Xd,e=>({key:e.min,value:e}));si(Xd,e=>({key:e.name,value:e}));const BI=Jt(te).sort((e,r)=>Number(r.includes("-"))-Number(e.includes("-"))),OI=nd(En(Object.keys(M.colors),e=>e.split("-")[1],e=>e!=="default")).filter(S.isTruthy),Ba=si(OI,e=>({key:e,value:e}),{}),RI=We(M.colors),Dl=dw(Ba,e=>{const r=nd(En(RI,t=>BI.reduce((n,o)=>kh({value:n,suffix:`-${o}`}),qi({value:t,prefix:`vira-${e}-`})),(t,n)=>n.startsWith(`vira-${e}-`)));return si(r,t=>({key:t,value:si(Jt(te),n=>{const o=`vira-${e}-${t}-${n}`;if(S.hasKey(M.colors,o))return{key:n,value:M.colors[o]}})}))});var se=(e=>(e.Accent="accent",e.Plain="plain",e.Neutral="neutral",e.Danger="danger",e.Warning="warning",e.Positive="positive",e.None="none",e))(se||{});const to={accent:Ba.blue,neutral:Ba.grey,danger:Ba.red,warning:Ba.yellow,positive:Ba.green},ia=["accent","plain","neutral","danger","warning","positive"];var Wi=(e=>(e.Large="large",e.Medium="medium",e.Small="small",e.None="none",e))(Wi||{});const Qd=["small","medium","large"];var sr=(e=>(e.Standard="standard",e.Subtle="subtle",e.None="none",e))(sr||{});const ef=["standard","subtle"],Lg={large:40,medium:32,small:24},Kp=k`
    padding: 0;
    margin: 0;
`,Xr=k`
    ${Kp};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,y1=Pt({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Wc={menuShadow:k`
        filter: drop-shadow(0px 5px 5px ${y1["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:k`
        box-shadow: 0 5px 15px ${y1["modal-shadow-color"].value};
    `},gi=k`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,w1="vira-",cr=Up({assertInputs:i(e=>{if(!e.tagName.startsWith(w1))throw new Error(`Tag name should start with '${w1}' but got '${e.tagName}'`)},"assertInputs")}),B=cr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":i(({inputs:e})=>!!e.fitContainer||!!e.icon?.size,"vira-icon-fit-container")},styles:i(({hostClasses:e})=>k`
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
    `,"styles"),render({inputs:e,host:r}){if(e.icon)e.icon.size&&(r.style.width=li(e.icon.size),r.style.height=li(e.icon.size));else return"";return e.icon.svgTemplate}}),oi=cr()({tagName:"vira-menu-item",state(){return{cleanupListeners:void 0}},hostClasses:{"vira-menu-item-selected":i(({inputs:e})=>!!e.selected||!!e.iconOverride,"vira-menu-item-selected"),"vira-menu-item-disabled":i(({inputs:e})=>!!e.disabled,"vira-menu-item-disabled"),"vira-menu-item-enabled":i(({inputs:e})=>!e.disabled,"vira-menu-item-enabled"),"vira-menu-item-default-icon":i(({inputs:e})=>!e.iconOverride,"vira-menu-item-default-icon"),"vira-menu-item-default-styles":i(({inputs:e})=>!e.disablePointerStyles,"vira-menu-item-default-styles")},styles:i(({hostClasses:e})=>k`
        :host {
            display: flex;
            ${gi};
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
    `,"styles"),init({state:e,updateState:r,host:t,inputs:n}){t.setAttribute("role","menuitem"),t.setAttribute("tabindex",n.disabled?"-1":"0"),t.setAttribute("aria-selected",String(!!n.selected)),t.setAttribute("aria-disabled",String(!!n.disabled)),e.cleanupListeners?.();const o={};function a(l){if(o[l.type])return;if(n.disabled){l.preventDefault(),l.stopPropagation();return}lr.instanceOf(t.shadowRoot.querySelector("slot"),HTMLSlotElement).assignedElements({flatten:!0}).forEach(f=>{f instanceof HTMLElement&&!l.composedPath().includes(f)&&(l.preventDefault(),l.stopPropagation(),o[l.type]=!0,f.dispatchEvent(new MouseEvent(l.type,l)),delete o[l.type])})}i(a,"propagateMouseEvent");const s=[oo(t,"click",a),oo(t,"mousedown",a),oo(t,"mouseenter",()=>{n.disabled||t.focus()}),oo(t,"mouseleave",()=>{n.disabled||t.blur()})];r({cleanupListeners:i(()=>{s.forEach(l=>l())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e}){return b`
            <${B.assign({icon:e.iconOverride||Jd})}></${B}>
            <div class="slot-wrapper">
                <slot>&nbsp;</slot>
            </div>
        `}});var r$=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(r$||{}),Kl=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Kl||{});const Ki=cr()({tagName:"vira-menu",hostClasses:{"vira-menu-open-upwards":i(({inputs:e})=>e.direction==="upwards","vira-menu-open-upwards"),"vira-menu-rounded":i(({inputs:e})=>e.cornerStyle==="all-rounded","vira-menu-rounded"),"vira-menu-square":i(({inputs:e})=>e.cornerStyle==="all-square","vira-menu-square")},styles:i(({hostClasses:e})=>k`
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
            ${Wc.menuShadow}
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
    `,"styles"),render(){return b`
            <slot>&nbsp;</slot>
        `}});function LI(e,r){return e>r}i(LI,"greaterThan");function jI(e,r){return e<r}i(jI,"lessThan");function Hl(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}i(Hl,"focusElement");var zt;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(zt||(zt={}));var Ie;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Ie||(Ie={}));function rf(e){const r={x:-1,y:-1};let t;for(;r.y<e.length-1&&!t;){r.y++;const n=e[r.y];for(;n&&r.x<n.length-1&&!t;){r.x++;const o=n[r.x];if(o)if(o.navEntry.navParams.group){const a=rf(o.children);a&&(t=a.node)}else o.navEntry.navParams.disabled||(t=o)}}if(t)return{node:t,coords:r}}i(rf,"findDefaultChild");function k1(e,r,t,n){if(!r){const u=rf(e.children);return u?(Hl(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:t,navAction:Ie.Navigate}):{success:!1,reason:"no default element to focus",direction:t,navAction:Ie.Navigate}}const{nextNode:o,requiresWrapping:a,coords:s}=t$(r.position,t),l=n?!0:!a;return o&&l?(Hl(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:a,direction:t,navAction:Ie.Navigate,coords:s}):o?l?{success:!1,reason:"no conditions matched",direction:t,navAction:Ie.Navigate}:{success:!1,reason:"wrapping blocked",direction:t,navAction:Ie.Navigate}:{success:!1,reason:"failed to find node to focus",direction:t,navAction:Ie.Navigate}}i(k1,"navigate");function t$(e,r){let t=!1,n,o=1;const a=Date.now();for(;!t||!n;)if(n=UI(e,r,o),t=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-a>1e3)return pw.warning("Failed to find next non-disabled node."),n;return n}i(t$,"calculateNextNode");function UI(e,r,t){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Er.isDefined(n,"missing parent");const o=lr.isDefined(n.children[e.nodeCoords.y]),a=n.children.length>1&&(r===zt.Down||r===zt.Up),s=r===zt.Down||r===zt.Right?t:-1*t,l=s<0?LI:jI,u=a?$b(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,f=lr.isDefined(n.children[u]),g=a?e.nodeCoords.x>=f.length?f.length-1:e.nodeCoords.x:$b(e.nodeCoords.x+s,{min:0,max:o.length-1,takeOverflow:!0}),h=n.children[u]?.[g],p=a?l(u,e.nodeCoords.y):l(g,e.nodeCoords.x);return{nextNode:h,requiresWrapping:p,coords:{x:g,y:u}}}i(UI,"innerCalculateNextNode");function _I(e,r,t){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:r,navAction:Ie.Pibling};const{nextNode:o,requiresWrapping:a,coords:s}=t$(n,r),l=o?.navEntry.navParams.group?rf(o.children):{node:o,coords:s},u=t?!0:!a;return!l||!l.node?{success:!1,reason:"no node to navigate to",direction:r,navAction:Ie.Pibling}:u?(Hl(l.node.element),{success:!0,defaulted:!1,newElement:l.node.element,wrapped:a,coords:l.coords,direction:r,navAction:Ie.Pibling}):{success:!1,reason:"wrapping blocked",direction:r,navAction:Ie.Pibling}}i(_I,"navigatePibling");var wo;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(wo||(wo={}));const u0={name:"data-nav"},n$="navEntry";function zI(e){return n$ in e}i(zI,"hasNavEntry");function qI(e){if(zI(e)){const r=e[n$];return lr.instanceOf(r,WI,"Invalid nav entry")}else return}i(qI,"extractNavEntry");function VI(e){return r=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(r.type==="mousedown"&&!e.navController.options.activateOnMouseUp||r.type==="mouseup"&&e.navController.options.activateOnMouseUp?r.target===e.element&&e.activate(!0):r.type==="mouseup"||r.type==="focus"?r.target===e.element&&e.focus(!0):r.type==="mousemove"?r.target===e.element&&e.navValue!==wo.Active&&e.focus(!0):(r.type==="blur"||r.type==="mouseleave")&&r.target===e.element&&(e.activate(!1),e.focus(!1)))}}i(VI,"createEventListener");class WI{static{i(this,"NavEntry")}element;navParams;navTreeNode;navValue;eventListener=VI(this);constructor(r,t,n){this.element=r,this.navParams=n,this.attachListeners(),this.navController=t}set navController(r){this._navController!==r&&(this._navController?.removeNavEntry(this),this._navController=r,r.addNavEntry(this))}get navController(){return Er.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(u0.name,""),a0(this.element)&&this.element.blur())}focus(r,t){const n=this.navValue,o=r===(n===wo.Focused);if(!(this.navParams.group||this.navController.locked||o||!r&&this.navController.options.alwaysRequireFocused))return r?(this.setNavValue(wo.Focused),a0(this.element)||this.element.focus()):(this.removeNavValue(wo.Focused),a0(this.element)&&this.element.blur()),t||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:r,previousNavValue:n}),this.navController.triggerNavEntry(this,r,Ie.Focus)}activate(r){const t=this.navValue,n=r===(t===wo.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(r,!0),r?this.setNavValue(wo.Active):this.setNavValue(wo.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:r,previousNavValue:t}),this.navController.triggerNavEntry(this,r,Ie.Activate)}setNavValue(r){this.navValue=r,this.element.setAttribute(u0.name,r)}removeNavValue(r){this.navValue===r&&(this.navValue=void 0,this.element.setAttribute(u0.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function KI(e,r){Object.entries(r).forEach(([t,n])=>{S.isBoolean(n)&&n?e.setAttribute(t,""):S.isBoolean(n)||n==null?e.removeAttribute(t):e.setAttribute(t,String(n))})}i(KI,"applyAttributes");function HI(e,r){if(!r)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Ie.Enter};if(!r.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Ie.Enter};const t=r.position.node.children[0]?.[0];return t?(Hl(t.element),{success:!0,defaulted:!1,wrapped:!1,newElement:t.element,direction:void 0,navAction:Ie.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Ie.Enter}}i(HI,"enterInto");function GI(e,r){return o$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,r)}i(GI,"walkNavTree");function o$(e,r,t){for(let n=0;n<r.length;n++){const o=r[n];for(let a=0;a<o.length;a++){const s=o[a],l={ancestorChain:e,nodeCoords:{x:a,y:n},node:s};if(t(l))return l;const u=o$(e.concat(l),s.children,t);if(u)return u}}}i(o$,"walkRecursively");function i$(e,r){const t=GI(e,({node:n})=>!n.root&&n.navEntry===r);if(!t)throw new Error("Failed to find NavEntry in NavTree.");return t}i(i$,"findNavTreeNodeByNavEntry");function ZI(e,r){if(!r)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Ie.Exit};const t=r.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!t||t.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Ie.Exit};const{nodeCoords:n}=i$(e,t.navEntry);return Hl(t.element),{success:!0,defaulted:!1,wrapped:!1,newElement:t.element,direction:void 0,navAction:Ie.Exit,coords:n}}i(ZI,"exitOutOf");class YI extends Wt()("nav-exit"){static{i(this,"NavExitEvent")}}class Hp extends Wt()("nav-activate"){static{i(this,"NavActivateEvent")}}class JI extends Wt()("nav-focus"){static{i(this,"NavFocusEvent")}}class XI extends Wt()("nav-enter"){static{i(this,"NavEnterEvent")}}class QI extends Wt()("nav-navigate"){static{i(this,"NavigateEvent")}}class eB extends Wt()("nav-navigate-pibling"){static{i(this,"NavPiblingEvent")}}function rB(e){return{root:!0,children:a$(e)?.children||[]}}i(rB,"mapTree");function a$(e){const r=e.element;if(!(r instanceof HTMLElement))return;const t=qI(r),n=tB(e);if((t?.navParams.group?!!n.length:!1)||n.length||t)return{root:!1,element:r,navEntry:t,children:n}}i(a$,"mapTreeRecursively");function tB(e){const r=[];function t(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(l=>l.forEach(u=>t(u)));return}const o=n.navEntry.navParams.x,a=n.navEntry.navParams.y||0,s=ca(r,a,()=>({noX:[],withX:[],y:a}));o==null?s.noX.push(n):s.withX.push({x:o,node:n})}return i(t,"pushNode"),e.children.forEach(n=>{const o=a$(n);o&&t(o)}),r.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,a)=>o.x-a.x),n.withX.forEach(({x:o,node:a})=>{n.noX.splice(o,0,a)}),n.noX)).filter(S.isTruthy)}i(tB,"expandChildren");class s$ extends au{static{i(this,"NavController")}rootElement;options;constructor(r,t={}){super(),this.rootElement=r,this.options=t}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){rf(this.getNavTree().children)?.node.element.focus()}addNavEntry(r){this.navEntries.add(r),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(r){this.navEntries.delete(r),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(r,t,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!r)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=i$(this.getNavTree(),r);t?(this.navEntries.forEach(s=>{s!==r&&s.clearNavValue()}),this.currentNavEntry={entry:r,navAction:n,position:o}):this.currentNavEntry?.entry===r&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const a={success:!0,defaulted:!1,direction:void 0,newElement:r.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return t&&(n===Ie.Activate?this.dispatch(new Hp({detail:a})):n===Ie.Focus&&this.dispatch(new JI({detail:a}))),a}navigate({direction:r,allowWrapping:t}){if(this.locked)return{success:!1,direction:r,navAction:Ie.Navigate,reason:"NavController is locked."};const n=k1(this.getNavTree(),this.currentNavEntry,r,t);return this.dispatch(new QI({detail:n})),n}enterInto({fallbackToActivate:r}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Ie.Enter,reason:"NavController is locked."};const t=HI(this.getNavTree(),this.currentNavEntry);return!t.success&&r?this.activate():(this.dispatch(new XI({detail:t})),t)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Ie.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Ie.Activate,reason:"No focused NavEntry to activate."};const r=this.currentNavEntry.entry.activate(!0);return Er.isDefined(r,"Cannot activate a group."),r}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Ie.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Ie.Activate&&this.currentNavEntry.entry.focus(!0);const r=ZI(this.getNavTree(),this.currentNavEntry);return this.dispatch(new YI({detail:r})),r}navigatePibling({allowWrapping:r,direction:t}){if(this.locked)return{success:!1,direction:t,navAction:Ie.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),a={...this.currentNavEntry?_I(this.currentNavEntry,t,r):k1(n,void 0,t,r),navAction:Ie.Pibling};return this.dispatch(new eB({detail:a})),a}buildNavTree(){const r=oI(this.rootElement),t=rB(r);return this.cachedNavTree=t,t}}function $1({open:e,callback:r,popUpManager:t,host:n,options:o}){if(e){const a=t.showPopUp(n,o);r?.(a)}else t.removePopUp(),r?.(void 0)}i($1,"triggerPopUpState$1");function l$(e){return En(e,(r,t)=>b`
                <${oi.assign({...r})}
                    ${U("click",async n=>{await r.onClick?.({event:n,index:t})})}
                >
                    ${r.content}
                </${oi}>
            `,(r,t)=>!t.hidden)}i(l$,"renderMenuItemEntries");const Gu=globalThis.document;class nB extends Sk{static{i(this,"PageActiveObservable")}constructor(){if(super({defaultValue:!!Gu?.hidden,equalityCheck:S.strictEquals}),!Gu)return;globalThis.addEventListener("visibilitychange",t=>this.updateVisibility(t,Gu));const r=i(t=>this.updateVisibility(t,Gu),"visibilityHandler");globalThis.onpageshow=r,globalThis.onpagehide=r,globalThis.onfocus=r,globalThis.onblur=r}updateVisibility(r,t){const n=iB.includes(r.type),o=oB.includes(r.type),a=n?!0:o?!1:t.hasFocus()||!t.hidden;this.setValue(a)}}const oB=["blur","focusout","pagehide"],iB=["focus","focusin","pageshow"],aB=new nB;function u$(e,r){return aB.listen(e,r)}i(u$,"listenToPageActivation");function jg(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}i(jg,"isInputLikeElement$1");const x1={top:0,left:0,right:0,bottom:0};let c$=class extends gd("hide-pop-up"){static{i(this,"HidePopUpEvent")}},d$=class extends Wt()("nav-select"){static{i(this,"NavSelectEvent")}},sB=class{static{i(this,"PopUpManager")}constructor(r,t){this.navController=r,this.options={...this.options,...t}}listenTarget=new au;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[u$(!1,r=>{r||this.removePopUp()}),this.navController.listen(Hp,r=>{const t=r.composedPath()[0];t instanceof Element&&jg(t)||r.detail.success&&(this.listenTarget.dispatch(new d$({detail:r.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),r.stopImmediatePropagation(),r.preventDefault())}),Tl("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Tl("keydown",r=>{const t=r.code;if(t==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=r.composedPath()[0];if(n instanceof Element&&jg(n))return;t==="ArrowDown"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:zt.Down,allowWrapping:!1})):t==="ArrowUp"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:zt.Up,allowWrapping:!1})):t==="ArrowLeft"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:zt.Left,allowWrapping:!1})):t==="ArrowRight"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:zt.Right,allowWrapping:!1})):(t==="Enter"||t==="Return"||t==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(r.stopImmediatePropagation(),r.preventDefault())}})]}listen(r,t,n){return this.listenTarget.listen(r,t,n)}removePopUp(){this.cleanupCallbacks.forEach(r=>r()),this.listenTarget.dispatch(new c$)}showPopUp(r,t){this.lastRootElement=r;const n={...this.options,...t},o=Vk(r);Er.instanceOf(o,HTMLElement);const a=r.getBoundingClientRect(),s=o.getBoundingClientRect(),l=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,f=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-l,bottom:s.bottom-u},g=Ke(x1,v=>a[v]),h=Ke(x1,v=>{const $=f[v],C=g[v];return Math.abs($-C)}),p=h.top>h.bottom+n.verticalDiffThreshold&&h.bottom<n.minDownSpace,m=h.left>h.right+n.horizontalDiffThreshold&&h.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!p,popRight:!m,positions:{container:f,root:g,diff:h}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}};var Hi=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(Hi||{});const me=cr()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new sB(new s$(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-disabled"),"vira-pop-up-trigger-inside-focus":i(({inputs:e})=>!!e.useInsideFocus,"vira-pop-up-trigger-inside-focus"),"vira-pop-up-trigger-outside-focus":i(({inputs:e})=>!e.useInsideFocus,"vira-pop-up-trigger-outside-focus")},styles:i(({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Xr};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;
        }

        ${e["vira-pop-up-trigger-inside-focus"].selector} .dropdown-wrapper {
            ${ps({renderInside:!0})}
        }
        ${e["vira-pop-up-trigger-outside-focus"].selector} .dropdown-wrapper {
            ${ps()}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${gi};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Wl}
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
    `,"styles"),events:{navSelect:Re(),openChange:Re(),init:Re()},cleanup({state:e,updateState:r}){r({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:r,host:t,inputs:n,dispatch:o,events:a}){e.popUpManager.listen(c$,()=>{if(r({showPopUpResult:void 0}),o(new a.openChange(void 0)),n.focusOnClose&&!n.isDisabled){const s=t.shadowRoot.querySelector(".dropdown-wrapper");Er.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(d$,s=>{n.keepOpenAfterInteraction||$1({open:!1,callback(l){r({showPopUpResult:l})},host:t,popUpManager:e.popUpManager}),o(new a.navSelect(s.detail))}),o(new a.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:r,state:t,inputs:n,updateState:o,host:a,slotNames:s}){function l({emitEvent:v,open:$},C){if(t.showPopUpResult&&n.keepOpenAfterInteraction&&C){const E=a.shadowRoot.querySelector(".dropdown-trigger");if(E&&!C.composedPath().includes(E))return}$1({open:$,callback(E){o({showPopUpResult:E}),v&&e(new r.openChange(E))},host:a,popUpManager:t.popUpManager})}i(l,"triggerPopUp"),n.isDisabled?l({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&t.showPopUpResult?l({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!t.showPopUpResult&&l({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?t.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,f=u==="right"&&t.showPopUpResult?n.ignoreMaxWidth?k`
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
                    `:void 0;function m(v){l({emitEvent:!0,open:!t.showPopUpResult},v)}return i(m,"respondToClick"),b`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${ot({open:!!t.showPopUpResult,"open-upwards":!t.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!t.showPopUpResult}
                ${U("keydown",v=>{!t.showPopUpResult&&v.code.startsWith("Arrow")&&l({emitEvent:!0,open:!0},v)})}
                ${U("click",v=>{if(v.detail===0){let $=!1;if(Wk(({element:C})=>jg(C)?($=!0,!0):!1),$)return;m(v)}else if(v.button===0&&t.showPopUpResult){const $=a.shadowRoot.querySelector(".dropdown-trigger");$&&!v.composedPath().includes($)&&l({emitEvent:!0,open:!1},v)}})}
                ${U("mousedown",v=>{if(v.button!==0)return;const $=lr.instanceOf(a.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);v.composedPath().includes($)&&m(v)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${ot({"right-aligned":u==="right"})}"
                    style=${p}
                >
                    ${Vr(!!t.showPopUpResult,b`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),Zu=cr()({tagName:"vira-menu-trigger",slotNames:["trigger"],styles:k`
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
    `,events:{openChange:Re()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:r,updateState:t,dispatch:n,events:o,slotNames:a}){return b`
            <${me.assign({...e})}
                class=${ot({open:!!r.showPopUpResult})}
                ${U(me.events.init,s=>{t({navController:s.detail.navController,popUpManager:s.detail.popUpManager})})}
                ${U(me.events.openChange,s=>{!!r.showPopUpResult!=!!s.detail&&n(new o.openChange(s.detail)),t({showPopUpResult:s.detail})})}
            >
                <slot name=${a.trigger} slot=${me.slotNames.trigger}></slot>
                ${r.navController&&r.showPopUpResult?b`
                          <${Ki.assign({direction:r.showPopUpResult.popDown?Kl.Downwards:Kl.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${me.slotNames.popUp}
                              class=${ot({"full-width-menu":e.horizontalAnchor===Hi.Both})}
                          >
                              <slot></slot>
                          </${Ki}>
                      `:ee}
            </${me}>
        `}}),kr=cr()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":i(({inputs:e})=>e.bold,"vira-bold-bold")},styles:i(({hostClasses:e,cssVars:r})=>k`
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
    `,"styles"),render({inputs:e}){return b`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}}),Gp=re({name:"Check16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Zp=re({name:"ChevronDown16Icon",svgTemplate:b`
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
    `}),ku=re({name:"ChevronUp16Icon",svgTemplate:b`
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
    `}),f$=re({name:"Dash16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 8h8"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="round"
            />
        </svg>
    `}),Yp=re({name:"Element16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Kc=re({name:"Upload16Icon",svgTemplate:b`
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
    `}),Jp=re({name:"X16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),g$=re({name:"ArrowDown24Icon",svgTemplate:b`
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
    `}),h$=re({name:"ArrowLeft24Icon",svgTemplate:b`
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
    `}),p$=re({name:"ArrowRight24Icon",svgTemplate:b`
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
    `}),m$=re({name:"ArrowUp24Icon",svgTemplate:b`
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
    `}),b$=re({name:"AutoTheme24Icon",svgTemplate:b`
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
    `}),v$=re({name:"Bell24Icon",svgTemplate:b`
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
    `}),y$=re({name:"Chat24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),w$=re({name:"ChevronDown24Icon",svgTemplate:b`
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
    `}),k$=re({name:"ChevronUp24Icon",svgTemplate:b`
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
    `}),Xp=re({name:"CloseX24Icon",svgTemplate:b`
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
    `}),$$=re({name:"Commit24Icon",svgTemplate:b`
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
    `}),x$=re({name:"Copy24Icon",svgTemplate:b`
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
    `}),D$=re({name:"Document24Icon",svgTemplate:b`
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
    `}),C$=re({name:"DocumentSearch24Icon",svgTemplate:b`
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
    `}),E$=re({name:"DoubleChevron24Icon",svgTemplate:b`
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
    `}),br=re({name:"Element24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),A$=re({name:"ExternalLink24Icon",svgTemplate:b`
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
    `}),Qp=re({name:"EyeClosed24Icon",svgTemplate:b`
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
    `}),em=re({name:"EyeOpen24Icon",svgTemplate:b`
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
    `}),F$=re({name:"Filter24Icon",svgTemplate:b`
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
    `}),M$=re({name:"Globe24Icon",svgTemplate:b`
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
    `}),S$=re({name:"Link24Icon",svgTemplate:b`
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
    `}),rm=re({name:"Loader24Icon",svgTemplate:b`
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
    `}),lB=k`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Is["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,hi=re({name:"LoaderAnimated24Icon",svgTemplate:b`
        <style>
            ${lB}
        </style>
        ${rm.svgTemplate}
    `}),T$=re({name:"Lock24Icon",svgTemplate:b`
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
    `}),P$=re({name:"MagnifyingGlass24Icon",svgTemplate:b`
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
    `}),N$=re({name:"Moon24Icon",svgTemplate:b`
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
    `}),tf=re({name:"Options24Icon",svgTemplate:b`
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
    `}),I$=re({name:"Pencil24Icon",svgTemplate:b`
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
    `}),B$=re({name:"Plus24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),O$=re({name:"Printer24Icon",svgTemplate:b`
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
    `}),R$=re({name:"Shield24Icon",svgTemplate:b`
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
    `}),L$=re({name:"SortAscending24Icon",svgTemplate:b`
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
    `}),j$=re({name:"SortDescending24Icon",svgTemplate:b`
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
    `}),U$=re({name:"Sparkle24Icon",svgTemplate:b`
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
    `}),_$=re({name:"SpeakerLoud24Icon",svgTemplate:b`
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
    `}),z$=re({name:"SpeakerMedium24Icon",svgTemplate:b`
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
    `}),q$=re({name:"SpeakerMuted24Icon",svgTemplate:b`
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
    `}),V$=re({name:"SpeakerQuiet24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Gl=re({name:"Star24Icon",svgTemplate:b`
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
    `}),Zl=re({name:"StatusFailure24Icon",svgTemplate:b`
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
    `}),W$=re({name:"StatusInProgress24Icon",svgTemplate:b`
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
    `}),Ua=re({name:"StatusSuccess24Icon",svgTemplate:b`
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
    `}),K$=re({name:"StatusUnknown24Icon",svgTemplate:b`
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
    `}),H$=re({name:"StatusWarning24Icon",svgTemplate:b`
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
    `}),G$=re({name:"Sun24Icon",svgTemplate:b`
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
    `}),Hc=re({name:"Upload24Icon",svgTemplate:b`
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
    `}),tm=re({name:"X24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function Yt(e,r){const t=We(r).map(o=>{if(r[o])return`${y[o].name}: ${String(r[o])};`}).filter(S.isTruthy).join(" "),n=k`
        ${Oe(t)}
        display: inline-flex;
        vertical-align: middle;
    `;return re({name:e.name,svgTemplate:b`
            <div style=${n}>${e.svgTemplate}</div>
        `})}i(Yt,"createColoredIcon");async function uB(){const e=await Ml(()=>import("./feather-xHQv1Yf1.js").then(t=>t.f),[]);function r(t){if(S.isObject(t)){if(S.hasKey(t,"default"))return r(t.default);if(S.hasKey(t,"icons"))return t}}return i(r,"recurseImport"),r(e)||globalThis.feather}i(uB,"importFeatherIcons");const ul=await uB(),D1={fill:String(y["vira-icon-fill-color"].value),stroke:String(y["vira-icon-stroke-color"].value),"stroke-width":String(y["vira-icon-stroke-width"].value)};function cB(e){const r=ul.icons[e],t=i(n=>({name:r.name,svgTemplate:b`
                ${Xv(r.toSvg({...D1,...n}))}
            `}),"configureIconCallback");return Object.defineProperty(t,"name",{value:r.name,writable:!1,configurable:!0}),Object.assign(t,{svgTemplate:b`
            ${Xv(r.toSvg(D1))}
        `})}i(cB,"createFeatherIconEntry");const C1=new Map,cl=new Proxy({},{get(e,r){const t=r;if(!(t in ul.icons))return;const n=C1.get(t);if(n)return n;const o=cB(t);return C1.set(t,o),o},has(e,r){return r in ul.icons},ownKeys(){return Object.keys(ul.icons)},getOwnPropertyDescriptor(e,r){if(r in ul.icons)return{configurable:!0,enumerable:!0,writable:!1}}});function Ug(e,r){return{...e,size:r}}i(Ug,"createSizedIcon");const E1={ArrowDown24Icon:g$,ArrowLeft24Icon:h$,ArrowRight24Icon:p$,ArrowUp24Icon:m$,AutoTheme24Icon:b$,Bell24Icon:v$,Chat24Icon:y$,Check16Icon:Gp,Check24Icon:Jd,ChevronDown16Icon:Zp,ChevronDown24Icon:w$,ChevronUp16Icon:ku,ChevronUp24Icon:k$,CloseX24Icon:Xp,Commit24Icon:$$,Copy24Icon:x$,Dash16Icon:f$,Document24Icon:D$,DocumentSearch24Icon:C$,DoubleChevron24Icon:E$,Element16Icon:Yp,Element24Icon:br,ExternalLink24Icon:A$,EyeClosed24Icon:Qp,EyeOpen24Icon:em,Filter24Icon:F$,Globe24Icon:M$,Link24Icon:S$,Loader24Icon:rm,LoaderAnimated24Icon:hi,Lock24Icon:T$,MagnifyingGlass24Icon:P$,Moon24Icon:N$,Options24Icon:tf,Pencil24Icon:I$,Plus24Icon:B$,Printer24Icon:O$,Shield24Icon:R$,SortAscending24Icon:L$,SortDescending24Icon:j$,Sparkle24Icon:U$,SpeakerLoud24Icon:_$,SpeakerMedium24Icon:z$,SpeakerMuted24Icon:q$,SpeakerQuiet24Icon:V$,Star24Icon:Gl,StatusFailure24Icon:Zl,StatusInProgress24Icon:W$,StatusSuccess24Icon:Ua,StatusUnknown24Icon:K$,StatusWarning24Icon:H$,Sun24Icon:G$,Upload16Icon:Kc,Upload24Icon:Hc,X16Icon:Jp,X24Icon:tm},dB={ArrowDown24Icon:g$,ArrowLeft24Icon:h$,ArrowRight24Icon:p$,ArrowUp24Icon:m$,AutoTheme24Icon:b$,Bell24Icon:v$,Chat24Icon:y$,Check24Icon:Jd,ChevronDown24Icon:w$,ChevronUp24Icon:k$,CloseX24Icon:Xp,Commit24Icon:$$,Copy24Icon:x$,Document24Icon:D$,DocumentSearch24Icon:C$,DoubleChevron24Icon:E$,Element24Icon:br,ExternalLink24Icon:A$,EyeClosed24Icon:Qp,EyeOpen24Icon:em,Filter24Icon:F$,Globe24Icon:M$,Link24Icon:S$,Loader24Icon:rm,LoaderAnimated24Icon:hi,Lock24Icon:T$,MagnifyingGlass24Icon:P$,Moon24Icon:N$,Options24Icon:tf,Pencil24Icon:I$,Plus24Icon:B$,Printer24Icon:O$,Shield24Icon:R$,SortAscending24Icon:L$,SortDescending24Icon:j$,Sparkle24Icon:U$,SpeakerLoud24Icon:_$,SpeakerMedium24Icon:z$,SpeakerMuted24Icon:q$,SpeakerQuiet24Icon:V$,Star24Icon:Gl,StatusFailure24Icon:Zl,StatusInProgress24Icon:W$,StatusSuccess24Icon:Ua,StatusUnknown24Icon:K$,StatusWarning24Icon:H$,Sun24Icon:G$,Upload24Icon:Hc,X24Icon:tm},fB={Check16Icon:Gp,ChevronDown16Icon:Zp,ChevronUp16Icon:ku,Dash16Icon:f$,Element16Icon:Yp,Upload16Icon:Kc,X16Icon:Jp},bn={value:k`transparent`},gB={[se.Plain]:{[sr.Standard]:{idle:{backgroundColor:M.inverse[Ze].background,textColor:M.inverse[Ze].foreground,borderColor:M.inverse[Ze].background},hover:{backgroundColor:M.colors["vira-grey-behind-bg-non-body"].background,textColor:M.colors["vira-grey-behind-bg-non-body"].foreground,borderColor:M.inverse[Ze].background},active:{backgroundColor:M.colors["vira-grey-behind-bg-body"].background,textColor:M.colors["vira-grey-behind-bg-body"].foreground,borderColor:M.inverse[Ze].background}},[sr.Subtle]:{idle:{backgroundColor:bn,textColor:M.colors[Ze].foreground,borderColor:bn},hover:{backgroundColor:M.colors["vira-grey-on-self-body"].background,textColor:M.colors["vira-grey-on-self-body"].foreground,borderColor:M.colors["vira-grey-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-grey-on-self-non-body"].background,textColor:M.colors["vira-grey-on-self-non-body"].foreground,borderColor:M.colors["vira-grey-on-self-non-body"].foreground}}},[se.Accent]:{[sr.Standard]:{idle:{backgroundColor:M.colors["vira-accent-behind-bg-non-body"].background,textColor:M.colors["vira-accent-behind-bg-non-body"].foreground,borderColor:M.colors["vira-accent-behind-bg-body"].background},hover:{backgroundColor:M.colors["vira-accent-behind-bg-header"].background,textColor:M.colors["vira-accent-behind-bg-header"].foreground,borderColor:M.colors["vira-accent-behind-bg-body"].background},active:{backgroundColor:M.colors["vira-accent-behind-bg-body"].background,textColor:M.colors["vira-accent-behind-bg-body"].foreground,borderColor:M.colors["vira-accent-behind-bg-body"].background}},[sr.Subtle]:{idle:{backgroundColor:bn,textColor:M.colors["vira-accent-foreground-non-body"].foreground,borderColor:bn},hover:{backgroundColor:M.colors["vira-accent-on-self-body"].background,textColor:M.colors["vira-accent-on-self-body"].foreground,borderColor:M.colors["vira-accent-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-accent-on-self-non-body"].background,textColor:M.colors["vira-accent-on-self-non-body"].foreground,borderColor:M.colors["vira-accent-on-self-non-body"].foreground}}},[se.Neutral]:{[sr.Standard]:{idle:{backgroundColor:M.colors[Ze].background,textColor:M.colors[Ze].foreground,borderColor:R["vira-form-border-color"]},hover:{backgroundColor:M.colors["vira-grey-behind-fg-small-body"].background,textColor:M.colors["vira-grey-behind-fg-small-body"].foreground,borderColor:R["vira-form-border-color"]},active:{backgroundColor:M.colors["vira-grey-behind-fg-body"].background,textColor:M.colors["vira-grey-behind-fg-body"].foreground,borderColor:R["vira-form-border-color"]}},[sr.Subtle]:{idle:{backgroundColor:bn,textColor:M.colors["vira-grey-foreground-non-body"].foreground,borderColor:bn},hover:{backgroundColor:M.colors["vira-grey-on-self-body"].background,textColor:M.colors["vira-grey-on-self-body"].foreground,borderColor:M.colors["vira-grey-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-grey-on-self-non-body"].background,textColor:M.colors["vira-grey-on-self-non-body"].foreground,borderColor:M.colors["vira-grey-on-self-non-body"].foreground}}},[se.Danger]:{[sr.Standard]:{idle:{backgroundColor:M.colors["vira-red-behind-bg-non-body"].background,textColor:M.colors["vira-red-behind-bg-non-body"].foreground,borderColor:M.colors["vira-red-behind-bg-body"].background},hover:{backgroundColor:M.colors["vira-red-behind-bg-header"].background,textColor:M.colors["vira-red-behind-bg-header"].foreground,borderColor:M.colors["vira-red-behind-bg-body"].background},active:{backgroundColor:M.colors["vira-red-behind-bg-body"].background,textColor:M.colors["vira-red-behind-bg-body"].foreground,borderColor:M.colors["vira-red-behind-bg-body"].background}},[sr.Subtle]:{idle:{backgroundColor:bn,textColor:M.colors["vira-red-foreground-non-body"].foreground,borderColor:bn},hover:{backgroundColor:M.colors["vira-red-on-self-body"].background,textColor:M.colors["vira-red-on-self-body"].foreground,borderColor:M.colors["vira-red-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-red-on-self-non-body"].background,textColor:M.colors["vira-red-on-self-non-body"].foreground,borderColor:M.colors["vira-red-on-self-non-body"].foreground}}},[se.Warning]:{[sr.Standard]:{idle:{backgroundColor:M.colors["vira-yellow-behind-bg-non-body"].background,textColor:M.colors["vira-yellow-behind-bg-non-body"].foreground,borderColor:M.colors["vira-yellow-behind-bg-body"].background},hover:{backgroundColor:M.colors["vira-yellow-behind-bg-header"].background,textColor:M.colors["vira-yellow-behind-bg-header"].foreground,borderColor:M.colors["vira-yellow-behind-bg-body"].background},active:{backgroundColor:M.colors["vira-yellow-behind-bg-body"].background,textColor:M.colors["vira-yellow-behind-bg-body"].foreground,borderColor:M.colors["vira-yellow-behind-bg-body"].background}},[sr.Subtle]:{idle:{backgroundColor:bn,textColor:M.colors["vira-yellow-foreground-non-body"].foreground,borderColor:bn},hover:{backgroundColor:M.colors["vira-yellow-on-self-body"].background,textColor:M.colors["vira-yellow-on-self-body"].foreground,borderColor:M.colors["vira-yellow-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-yellow-on-self-non-body"].background,textColor:M.colors["vira-yellow-on-self-non-body"].foreground,borderColor:M.colors["vira-yellow-on-self-non-body"].foreground}}},[se.Positive]:{[sr.Standard]:{idle:{backgroundColor:M.colors["vira-green-behind-bg-non-body"].background,textColor:M.colors["vira-green-behind-bg-non-body"].foreground,borderColor:M.colors["vira-green-behind-bg-body"].background},hover:{backgroundColor:M.colors["vira-green-behind-bg-header"].background,textColor:M.colors["vira-green-behind-bg-header"].foreground,borderColor:M.colors["vira-green-behind-bg-body"].background},active:{backgroundColor:M.colors["vira-green-behind-bg-body"].background,textColor:M.colors["vira-green-behind-bg-body"].foreground,borderColor:M.colors["vira-green-behind-bg-body"].background}},[sr.Subtle]:{idle:{backgroundColor:bn,textColor:M.colors["vira-green-foreground-non-body"].foreground,borderColor:bn},hover:{backgroundColor:M.colors["vira-green-on-self-body"].background,textColor:M.colors["vira-green-on-self-body"].foreground,borderColor:M.colors["vira-green-on-self-body"].foreground},active:{backgroundColor:M.colors["vira-green-on-self-non-body"].background,textColor:M.colors["vira-green-on-self-non-body"].foreground,borderColor:M.colors["vira-green-on-self-non-body"].foreground}}}},De=cr()({tagName:"vira-button",hostClasses:{"vira-button-with-menu-caret":i(({inputs:e})=>!!e.showMenuCaret,"vira-button-with-menu-caret"),"vira-button-size-large":i(({inputs:e})=>e.buttonSize===Wi.Large,"vira-button-size-large"),"vira-button-size-medium":i(({inputs:e})=>!e.buttonSize||e.buttonSize===Wi.Medium,"vira-button-size-medium"),"vira-button-size-small":i(({inputs:e})=>e.buttonSize===Wi.Small,"vira-button-size-small"),"vira-button-emphasis-standard":i(({inputs:e})=>!e.buttonEmphasis||e.buttonEmphasis===sr.Standard,"vira-button-emphasis-standard"),"vira-button-emphasis-subtle":i(({inputs:e})=>e.buttonEmphasis===sr.Subtle,"vira-button-emphasis-subtle"),"vira-button-color-accent":i(({inputs:e})=>!e.colorVariant||e.colorVariant===se.Accent,"vira-button-color-accent"),"vira-button-color-plain":i(({inputs:e})=>e.colorVariant===se.Plain,"vira-button-color-plain"),"vira-button-color-neutral":i(({inputs:e})=>e.colorVariant===se.Neutral,"vira-button-color-neutral"),"vira-button-color-danger":i(({inputs:e})=>e.colorVariant===se.Danger,"vira-button-color-danger"),"vira-button-color-warning":i(({inputs:e})=>e.colorVariant===se.Warning,"vira-button-color-warning"),"vira-button-color-positive":i(({inputs:e})=>e.colorVariant===se.Positive,"vira-button-color-positive"),"vira-button-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-button-disabled"),"vira-button-icon-only":i(({inputs:e})=>!e.text&&!!e.icon,"vira-button-icon-only")},cssVars:{"vira-button-text-color":"transparent","vira-button-background-color":"transparent","vira-button-border-color":"transparent","vira-button-hover-text-color":"transparent","vira-button-hover-background-color":"transparent","vira-button-hover-border-color":"transparent","vira-button-active-text-color":"transparent","vira-button-active-background-color":"transparent","vira-button-active-border-color":"transparent","vira-button-disabled-text-color":M.colors["vira-grey-behind-bg-decoration"].foreground.value,"vira-button-disabled-background-color":M.colors["vira-grey-behind-bg-decoration"].background.value,"vira-button-disabled-border-color":M.colors["vira-grey-behind-bg-decoration"].background.value,"vira-button-border-width":"1px","vira-button-border-radius":R["vira-form-radius"].value},styles:i(({hostClasses:e,cssVars:r})=>{function t(){const o=ef.flatMap(a=>ia.map(s=>{const l=gB[s][a],u=e[`vira-button-color-${s}`].selector,f=e[`vira-button-emphasis-${a}`].selector;return k`
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
`))}i(t,"generateVariantCss");function n(){const o=Qd.map(a=>k`
                    ${e[`vira-button-size-${a}`].selector} {
                        font-size: ${R[`vira-form-${a}-text-size`].value};

                        button {
                            min-height: ${Lg[a]}px;
                            padding: 2px
                                ${R[`vira-form-${a}-text-size`].value};
                        }

                        &${e["vira-button-icon-only"].selector} {
                            min-width: ${Lg[a]}px;
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
                ${gi};
                ${R["vira-form-focus-outline-color"].name}: ${R["vira-form-accent-primary-hover-color"].value}
            }

            ${n()}
            ${t()}

            button {
                ${Xr};
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

                ${ps({elementBorderSize:r["vira-button-border-width"]})}
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
        `},"styles"),render:i(({inputs:e})=>{const r=e.icon?b`
                  <${B.assign({icon:e.icon})}></${B}>
              `:ee,t=e.text?b`
                  <span class="text-template">${e.text}</span>
              `:b`
                  <span class="empty-text">&nbsp;</span>
              `,n=e.showMenuCaret?b`
                  <${B.assign({icon:Zp})}
                      class="caret-icon"
                  ></${B}>
              `:ee;return b`
            <button ?disabled=${e.isDisabled}>
                ${r}${t}${n}
            </button>
        `},"render")});var _g=(e=>(e.Error="error",e.Success="success",e))(_g||{});const c0=cr()({tagName:"vira-card",hostClasses:{"vira-card-error":i(({inputs:e})=>e.cardState==="error","vira-card-error"),"vira-card-success":i(({inputs:e})=>e.cardState==="success","vira-card-success")},cssVars:{"vira-card-border":k`1px solid ${R["vira-form-border-color"].value}`,"vira-card-padding":R["vira-form-wrapper-radius"].value},styles:i(({hostClasses:e,cssVars:r})=>k`
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
    `,"styles"),render(){return b`
            <slot></slot>
        `}}),fe=cr()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":i(({inputs:e})=>!!e.horizontal,"vira-checkbox-horizontal"),"vira-checkbox-filled-checked":i(({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-checked"),"vira-checkbox-filled-unchecked":i(({inputs:e})=>!!e.fillWhenUnchecked,"vira-checkbox-filled-unchecked")},styles:i(({hostClasses:e})=>k`
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

            ${ps({elementBorderSize:"1px"})}

            &.checked {
                & ${B} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${R["vira-form-error-color"].value};
            }

            &.disabled {
                ${Wl};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,"styles"),events:{valueChange:Re()},render({inputs:e,dispatch:r,events:t}){function n(){e.disabled||r(new t.valueChange(!e.value))}i(n,"updateValue");const o=e.label?b`
                  <span
                      class="label-text"
                      ${xn(e.attributePassthrough?.text)}
                      style=${Ue(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:ee;return b`
            <label
                class=${ot({disabled:!!e.disabled})}
                ${xn(e.attributePassthrough?.label)}
                style=${Ue(e.stylePassthrough?.label)}
                ${U("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${ot({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${Ue(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${xn(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Ue(e.stylePassthrough?.["custom-checkbox"])}
                    ${zN(n)}
                >
                    <${B.assign({icon:Jd,fitContainer:!0})}
                        ${xn(e.attributePassthrough?.[B.tagName])}
                        style=${Ue(e.stylePassthrough?.[B.tagName])}
                    ></${B}>
                </span>
            </label>
        `}}),yt=cr()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":i(({inputs:e})=>!!e.expandOnPrint,"vira-collapsible-wrapper-expand-on-print")},slotNames:["header"],styles:i(({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            box-sizing: border-box;
        }

        .header-wrapper {
            ${Xr};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Is["vira-pretty-animation-duration"].value};
            overflow: hidden;

            &.collapsed {
                ${gi}
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
              `;return b`
            <button
                class="header-wrapper"
                ${U("click",()=>{n(new o.expandChange(!a.expanded))})}
            >
                <slot name=${r.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${ot({collapsed:!a.expanded})}"
                style=${s}
                disabled="disabled"
            >
                <div
                    ${jp(({contentRect:l})=>{t({contentHeight:l.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Yr=cr()({tagName:"vira-collapsible-card",testIds:["openCaret"],events:{expandToggle:Re()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":i(({state:e})=>e.isExpanded,"vira-collapsible-card-expanded"),"vira-collapsible-card-expansion-blocked":i(({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-expansion-blocked"),"vira-collapsible-card-card-styles":i(({inputs:e})=>!e.rawCollapsible,"vira-collapsible-card-card-styles")},cssVars:{"vira-collapsible-card-content-gap":"16px"},styles:i(({hostClasses:e,cssVars:r})=>k`
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
    `,"styles"),slotNames:["header"],render({inputs:e,slotNames:r,state:t,updateState:n,testIds:o,dispatch:a,events:s}){e.blockExpansion&&n({isExpanded:!0});const l=t.isExpanded||e.expandOnPrint?b`
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  `:ee,u=e.hideHeader?ee:b`
                  <div class="card-header">
                      <slot name=${r.header}><div class="header-filler"></div></slot>

                      ${e.blockExpansion?ee:b`
                                <${B.assign({icon:ku,fitContainer:!0})}
                                    ${Qo(o.openCaret)}
                                    class="open-caret"
                                ></${B}>
                            `}
                  </div>
              `;return b`
            <${yt.assign({expanded:t.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${U(yt.events.expandChange,f=>{f.stopImmediatePropagation(),!e.blockExpansion&&(n({isExpanded:f.detail}),a(new s.expandToggle(f.detail)))})}
            >
                <div class="header-wrapper" slot=${yt.slotNames.header}>
                    ${u}
                </div>
                ${l}
            </${yt}>
        `}}),dl=cr()({tagName:"vira-dropdown",testIds:["leadingIcon","prefixText","trigger"],styles:k`
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
                ${Is["vira-interaction-animation-duration"].value} linear;
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
            ${gi};
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
    `,events:{selectedChange:Re(),openChange:Re()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:r,dispatch:t,events:n,updateState:o,testIds:a}){const s=En(r.selected,p=>r.options.find(m=>m.value===p),S.isTruthy),l=r.icon?b`
                  <${B.assign({icon:r.icon})}
                      ${Qo(a.leadingIcon)}
                  ></${B}>
              `:ee,u=!s.length,f=r.selectionPrefix&&!u?b`
                      <span class="selected-label-prefix" ${Qo(a.prefixText)}>
                          ${r.selectionPrefix}
                      </span>
                  `:ee,g=u?r.placeholder||"":r.isMultiSelect&&s.length>1?`${s.length} Selected`:s[0]?.label||"",h=b`
            <${Ki.assign({direction:e.showPopUpResult?.popDown?Kl.Downwards:Kl.Upwards})}
                slot=${me.slotNames.popUp}
            >
                ${l$(r.options.map(p=>({content:p.label,onClick(){t(new n.selectedChange([p.value]))},disabled:p.disabled,selected:s.includes(p)})))}
            </${Ki}>
        `;return b`
            <${me.assign({...r,focusOnClose:!0,popUpOffset:{vertical:-1,right:24},horizontalAnchor:r.horizontalAnchor||Hi.Both})}
                ${U(me.events.openChange,p=>{!!e.showPopUpResult!=!!p.detail&&t(new n.openChange(p.detail)),o({showPopUpResult:p.detail})})}
            >
                <div
                    class="dropdown-trigger ${ot({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    slot=${me.slotNames.trigger}
                    ${Qo(a.trigger)}
                >
                    ${l}
                    <span
                        class="selection-display ${ot({"using-placeholder":u})}"
                        title=${Ue(u?void 0:g)}
                    >
                        ${f} ${g}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${B.assign({icon:ku})}
                            class="trigger-icon"
                        ></${B}>
                    </span>
                </div>
                ${e.showPopUpResult?h:ee}
            </${me}>
        `}}),Gi=cr()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:i(({cssVars:e})=>k`
        :host {
            color: ${R["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,"styles"),render(){return b`
            <slot></slot>
        `}});var Se=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Number="number",e.Select="select",e.Checkbox="checkbox",e))(Se||{});function Yu(e,r){if(e)return r?wh({value:e,suffix:"*"}):e}i(Yu,"applyRequiredLabel");function hB(e){return Qa(e).every(r=>r.isHidden||!r.isRequired?!0:S.isString(r.value)?!!r.value:r.value!=null)}i(hB,"areFormFieldsValid");function zg({input:e,matcher:r}){return!e||!r?!0:e.length>1?e.split("").every(t=>zg({input:t,matcher:r})):r instanceof RegExp?!!e.match(r):r.includes(e)}i(zg,"doesMatch$1");function pB({value:e,allowed:r,blocked:t}){const n=String(e),o=r?zg({input:n,matcher:r}):!0,a=t?zg({input:n,matcher:t}):!1;return o&&!a}i(pB,"isAllowed$1");function qg(e){const r=String(e.value);if(!e.value)return{filtered:r,blocked:""};const{filtered:t,blocked:n}=r.split("").reduce((o,a)=>(pB({...e,value:a})?o.filtered.push(a):o.blocked.push(a),o),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}i(qg,"filterTextInputValue$1");function mB({inputs:e,previousValue:r,event:t,inputBlockedCallback:n,newValueCallback:o}){const a=ka(t,HTMLInputElement),s=S.hasKey(t,"data")&&dd.isString(t.data)||"";if(s){const{blocked:u}=qg({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const l=qg({value:a.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;a.value!==l&&(a.value=l),r!==l&&o(l)}i(mB,"textInputListener$1");var _i=(e=>(e.Default="text",e.Password="password",e.Email="email",e.Number="number",e))(_i||{});const Qe=cr()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:i(({hostClasses:e,cssVars:r})=>k`
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
                ${Xr};
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
                ${gi};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Xr};
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
                ${Xr};
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
                ${Xr};
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
                    ${ps({elementBorderSize:"1px",noNesting:!0})}
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
                ${gi};
            }

            button {
                ${Xr};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Is["vira-interaction-animation-duration"].value};
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
                    ${Wl};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,"styles"),events:{valueChange:Re(),inputBlocked:Re()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:To(32)}},hostClasses:{"vira-input-disabled":i(({inputs:e})=>!!e.disabled,"vira-input-disabled"),"vira-input-fit-text":i(({inputs:e})=>!!e.fitText,"vira-input-fit-text"),"vira-input-clear-button-shown":i(({inputs:e})=>!!e.showClearButton,"vira-input-clear-button-shown"),"vira-input-error":i(({inputs:e})=>!!e.hasError,"vira-input-error")},render:i(({inputs:e,dispatch:r,state:t,updateState:n,events:o,host:a})=>{const{filtered:s}=qg({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),l=e.icon?b`
                  <${B.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${B}>
              `:ee,u=e.fitText?k`
                  width: ${t.forcedInputWidth}px;
              `:ee,f=U("mousedown",p=>{const m=ka(p,HTMLElement,{useOriginalTarget:!0}),v=lr.instanceOf(a.shadowRoot.querySelector("input"),HTMLInputElement);m!==v&&(p.preventDefault(),v.focus())}),g=e.disableBrowserHelps||e.type==="password",h=b`
            <span class="input-wrapper" ${e.label?ee:f}>
                ${l}
                ${Vr(!!e.fitText,b`
                        <span
                            class="size-span"
                            ${jp(({contentRect:p})=>{n({forcedInputWidth:p.width})})}
                        >
                            <pre>${s||e.placeholder||ee}</pre>
                        </span>
                    `)}

                <input
                    id=${Ue(e.label?t.randomId:void 0)}
                    aria-label=${Ue(e.label||void 0)}
                    autofocus=${!1}
                    type=${bB(e.type,t.showPassword)}
                    style=${u}
                    autocomplete=${Ue(g?"off":void 0)}
                    autocorrect=${Ue(g?"off":void 0)}
                    autocapitalize=${Ue(g?"off":void 0)}
                    spellcheck=${Ue(g?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${U("input",p=>{mB({inputs:e,previousValue:s,event:p,inputBlockedCallback(m){r(new o.inputBlocked(m))},newValueCallback(m){r(new o.valueChange(m))}})})}
                    placeholder=${Ue(e.placeholder||void 0)}
                    ${xn(e.attributePassthrough)}
                />

                ${Vr(!!(e.showClearButton&&e.value),b`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${U("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault()})}
                            ${U("click",()=>{e.disabled||r(new o.valueChange(""))})}
                        >
                            <${B.assign({icon:Xp})}></${B}>
                        </button>
                    `)}
                ${Vr(e.type==="password",b`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${U("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault()})}
                            ${U("click",()=>{n({showPassword:!t.showPassword})})}
                        >
                            <${B.assign({icon:t.showPassword?em:Qp})}></${B}>
                        </button>
                    `)}
                ${Vr(!!e.suffix,b`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?b`
                <label for=${t.randomId} ${f}>
                    <span class="input-label">${e.label}</span>
                    ${h}
                </label>
            `:h},"render")});function bB(e,r){return e==="password"&&r?"text":e||"text"}i(bB,"calculateEffectiveInputType$1");const ur=cr()({tagName:"vira-select",state(){return{randomId:To(32),cleanupListeners:void 0}},events:{valueChange:Re()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":i(({inputs:e})=>!!e.disabled,"vira-select-disabled"),"vira-select-error":i(({inputs:e})=>!!e.hasError,"vira-select-error"),"vira-select-not-raw":i(({inputs:e})=>!e.rawSelect,"vira-select-not-raw")},styles:i(({hostClasses:e,cssVars:r})=>k`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${R["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Xr};
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
                        ${ps({elementBorderSize:"1px",noNesting:!0})}
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
                        ${Is["vira-interaction-animation-duration"].value};
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
                ${Wl}
            }
            ${B} {
                ${Wl}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${R["vira-form-error-color"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanupListeners?.();const n=[oo(t,"mousedown",o=>{const a=lr.instanceOf(t.shadowRoot.querySelector("select"),HTMLSelectElement);o.composedPath().includes(a)||(o.preventDefault(),o.stopPropagation(),a.showPicker&&a.showPicker())})];r({cleanupListeners:i(()=>{n.forEach(o=>o())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e,state:r,dispatch:t,events:n}){const o=e.value||void 0,a=e.placeholder||o==null?b`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:ee,s=b`
            <span class="select-wrapper">
                <select
                    .value=${Ue(o)}
                    class=${ot({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Ue(e.label?r.randomId:void 0)}
                    aria-label=${Ue(e.label||void 0)}
                    aria-disabled=${Ue(e.disabled?"true":void 0)}
                    ${U("input",l=>{const u=ka(l,HTMLSelectElement),f=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(g=>g.value===o)),t(new n.valueChange(f))})}
                    ${xn(e.attributePassthrough?.select)}
                >
                    ${a}
                    ${e.options.map(l=>b`
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
                <${B.assign({icon:ku})}
                    class="trigger-icon"
                ></${B}>
            </span>
        `;return e.label?b`
                <label for=${r.randomId} ${xn(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),Bt=cr()({tagName:"vira-form",events:{valueChange:Re(),validChange:Re()},styles:k`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:r,events:t,state:n,updateState:o}){const a=hB(e.fields);a!==n.lastIsValid&&(o({lastIsValid:a}),r(new t.validChange({allFieldsAreValid:a})));const s=Un(e.fields).map(([l,u])=>u.isHidden?ee:u.type===Se.Checkbox?b`
                        <${fe.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:Yu(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?Qo(u.testId):ee}
                            ${U(fe.events.valueChange,f=>{r(new t.valueChange({key:l,...u,value:f.detail}))})}
                        ></${fe}>
                    `:u.type===Se.Select?b`
                        <${ur.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:Yu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?Qo(u.testId):ee}
                            ${U(ur.events.valueChange,f=>{r(new t.valueChange({key:l,...u,value:f.detail}))})}
                        ></${ur}>
                    `:u.type===Se.Number?b`
                        <${Qe.assign({value:u.value?.toString()||"",disabled:e.isDisabled||u.isDisabled,allowedInputs:/\d/,hasError:u.hasError,icon:u.icon,label:Yu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,type:_i.Number,attributePassthrough:{...u.min===void 0?{}:{min:String(u.min)},...u.max===void 0?{}:{max:String(u.max)},...u.step===void 0?{}:{step:String(u.step)}}})}
                            ${u.testId?Qo(u.testId):ee}
                            ${U(Qe.events.valueChange,f=>{const g=f.detail===""?void 0:Number(f.detail);r(new t.valueChange({key:l,...u,value:g}))})}
                        ></${Qe}>
                    `:b`
                        <${Qe.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:Yu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===Se.NewPassword?{autocomplete:"new-password"}:u.type===Se.ExistingPassword?{autocomplete:"password"}:u.type===Se.Email?{autocomplete:"email"}:{},type:[Se.NewPassword,Se.ExistingPassword,Se.PlainPassword].includes(u.type)?_i.Password:u.type===Se.Email?_i.Email:_i.Default})}
                            ${u.testId?Qo(u.testId):ee}
                            ${U(Qe.events.valueChange,f=>{r(new t.valueChange({key:l,...u,value:f.detail}))})}
                        ></${Qe}>
                    `);return b`
            <form ${U("submit",l=>l.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}}),zo=cr()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":i(({inputs:e})=>e.dominantDimension==="height","vira-image-height-constrained")},slotNames:["loading","error"],events:{imageLoad:Re(),imageError:Re()},styles:i(({hostClasses:e})=>k`
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
    `,"styles"),render({inputs:e,state:r,updateState:t,dispatch:n,events:o,slotNames:a}){const s=e.imageUrl,l=r.erroredUrls[s]?b`
                  <slot class="status-wrapper" name=${a.error}>
                      <${B.assign({icon:Zl})}
                          class="error"
                      ></${B}>
                  </slot>
              `:r.loadedUrls[s]?void 0:b`
                    <slot class="status-wrapper" name=${a.loading}>
                        <${B.assign({icon:hi})}></${B}>
                    </slot>
                `;return b`
            ${Vr(!!l,l)}
            <img
                class=${ot({hidden:!!l})}
                ${U("load",async()=>{e._debugLoadDelay&&await Ji(e._debugLoadDelay),t({loadedUrls:{...r.loadedUrls,[s]:!0}}),n(new o.imageLoad)})}
                ${U("error",async u=>{e._debugLoadDelay&&await Ji(e._debugLoadDelay),t({erroredUrls:{...r.erroredUrls,[s]:!0}}),n(new o.imageError(u.error))})}
                src=${s}
            />
        `}}),io=cr()({tagName:"vira-link",state(){return{cleanupListeners:void 0}},hostClasses:{"vira-link-link-styles":i(({inputs:e})=>!e.disableLinkStyles,"vira-link-link-styles")},styles:i(({hostClasses:e})=>k`
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
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanupListeners?.();let n=!1;const o=[oo(t,"click",a=>{if(n)return;const s=lr.instanceOf(t.shadowRoot.querySelector("a"),HTMLAnchorElement);a.composedPath().includes(s)||(a.preventDefault(),a.stopPropagation(),n=!0,s.dispatchEvent(new MouseEvent(a.type,a)),n=!1)})];r({cleanupListeners:i(()=>{o.forEach(a=>a())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e}){function r(t){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,t)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(i(r,"clickCallback"),e.link?.newTab)return b`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${xn(e.attributePassthrough?.a)}
                    style=${Ue(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const t=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return b`
                <a
                    href=${t}
                    rel="noopener noreferrer"
                    ${xn(e.attributePassthrough?.a)}
                    style=${Ue(e.stylePassthrough?.a)}
                    ${U("click",r)}
                >
                    <slot></slot>
                </a>
            `}}});var Yl;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})(Yl||(Yl={}));const nm={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:Yl.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},pi=Ke(nm,e=>e),ye={...pi,name:"name",hexString:"hexString"},ro=Ke(nm,(e,r)=>{const t=S.isEnumValue(e,Yl)&&S.isEnumValue(e,pi)?e:"conversionFormat"in r&&r.conversionFormat&&S.isEnumValue(r.conversionFormat,Yl)&&S.isEnumValue(r.conversionFormat,pi)?r.conversionFormat:void 0;return Er.isTruthy(t,`Invalid conversion format for color format '${e}' ${x(r)}.`),{...r,colorFormat:e,conversionFormat:t,rawSyntax:lr.isEnumValue("rawSyntax"in r&&r.rawSyntax?r.rawSyntax:e,ye)}});si(Qa(nm),e=>({key:e.colorSpace,value:e.colorSpace}),{});Un(ro).reduce((e,[r,t])=>(ca(e,t.colorSpace,()=>({}))[r]=t,e),{});function vB(e){return e.startsWith("rgb")?ye.rgb:e.startsWith("hsl")?ye.hsl:e.startsWith("hwb")?ye.hwb:e.startsWith("oklab")?ye.oklab:e.startsWith("oklch")?ye.oklch:e.startsWith("lab")?ye.lab:e.startsWith("lch")?ye.lch:e.startsWith("#")?ye.hexString:ye.name}i(vB,"getColorSyntaxFromCssString");const Vg={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in Vg)Object.freeze(Vg[e]);const Jl=Object.freeze(Vg),yB=Object.keys(Jl).reduce((e,r)=>r.length>e.length?r:e),wB=fd(Ke(Jl,(e,r)=>En(Object.entries(Jl),([n])=>n,(n,[,o])=>n===e?!1:S.deepEquals(o,r))),(e,r)=>!!r.length),A1=Object.entries(wB).reduce((e,r)=>{const t=[e[0],...e[1]].join(", ");return[r[0],...r[1]].join(", ").length>t.length?r:e}).reduce((e,r)=>S.isArray(r)?[...e,...r]:[...e,r],[]),F1=Math.max(yB.length,A1.length+(A1.length-1)*2),Z$=i((e,r)=>{if(typeof e=="number"){if(r===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(r===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(r===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(r===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},"parseNumber"),kB={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$B=i(e=>Z$(kB[e.toLowerCase()],6),"parseNamed"),xB=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,DB=i(e=>{let r;return(r=e.match(xB))?Z$(parseInt(r[1],16),r[1].length):void 0},"parseHex"),ii="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",Cl=`${ii}%`,om=`(?:${ii}%|${ii})`,CB=`(?:${ii}(deg|grad|rad|turn)|${ii})`,ms="\\s*,\\s*",EB=new RegExp(`^rgba?\\(\\s*${ii}${ms}${ii}${ms}${ii}\\s*(?:,\\s*${om}\\s*)?\\)$`),AB=new RegExp(`^rgba?\\(\\s*${Cl}${ms}${Cl}${ms}${Cl}\\s*(?:,\\s*${om}\\s*)?\\)$`),FB=i(e=>{let r={mode:"rgb"},t;if(t=e.match(EB))t[1]!==void 0&&(r.r=t[1]/255),t[2]!==void 0&&(r.g=t[2]/255),t[3]!==void 0&&(r.b=t[3]/255);else if(t=e.match(AB))t[1]!==void 0&&(r.r=t[1]/100),t[2]!==void 0&&(r.g=t[2]/100),t[3]!==void 0&&(r.b=t[3]/100);else return;return t[4]!==void 0?r.alpha=Math.max(0,Math.min(1,t[4]/100)):t[5]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[5]))),r},"parseRgbLegacy"),Wg=i((e,r)=>e===void 0?void 0:typeof e!="object"?Gg(e):e.mode!==void 0?e:r?{...e,mode:r}:void 0,"prepare"),aa=i((e="rgb")=>r=>(r=Wg(r,e))!==void 0?r.mode===e?r:no[r.mode][e]?no[r.mode][e](r):e==="rgb"?no[r.mode].rgb(r):no.rgb[e](no[r.mode].rgb(r)):void 0,"converter"),no={},Y$={},Gc=[],J$={},MB=i(e=>e,"identity"),ze=i(e=>(no[e.mode]={...no[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(r=>{no[r]||(no[r]={}),no[r][e.mode]=e.fromMode[r]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(r=>{if(e.ranges[r]===void 0&&(e.ranges[r]=[0,1]),!e.interpolate[r])throw new Error(`Missing interpolator for: ${r}`);typeof e.interpolate[r]=="function"&&(e.interpolate[r]={use:e.interpolate[r]}),e.interpolate[r].fixup||(e.interpolate[r].fixup=MB)}),Y$[e.mode]=e,(e.parse||[]).forEach(r=>{SB(r,e.mode)}),aa(e.mode)),"useMode"),nf=i(e=>Y$[e],"getMode"),SB=i((e,r)=>{if(typeof e=="string"){if(!r)throw new Error("'mode' required when 'parser' is a string");J$[e]=r}else typeof e=="function"&&Gc.indexOf(e)<0&&Gc.push(e)},"useParser"),Kg=/[^\x00-\x7F]|[a-zA-Z_]/,TB=/[^\x00-\x7F]|[-\w]/,j={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let ne=0;function Ju(e){let r=e[ne],t=e[ne+1];return r==="-"||r==="+"?/\d/.test(t)||t==="."&&/\d/.test(e[ne+2]):r==="."?/\d/.test(t):/\d/.test(r)}i(Ju,"is_num");function Hg(e){if(ne>=e.length)return!1;let r=e[ne];if(Kg.test(r))return!0;if(r==="-"){if(e.length-ne<2)return!1;let t=e[ne+1];return!!(t==="-"||Kg.test(t))}return!1}i(Hg,"is_ident");const PB={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function Zs(e){let r="";if((e[ne]==="-"||e[ne]==="+")&&(r+=e[ne++]),r+=Xu(e),e[ne]==="."&&/\d/.test(e[ne+1])&&(r+=e[ne++]+Xu(e)),(e[ne]==="e"||e[ne]==="E")&&((e[ne+1]==="-"||e[ne+1]==="+")&&/\d/.test(e[ne+2])?r+=e[ne++]+e[ne++]+Xu(e):/\d/.test(e[ne+1])&&(r+=e[ne++]+Xu(e))),Hg(e)){let t=Zc(e);return t==="deg"||t==="rad"||t==="turn"||t==="grad"?{type:j.Hue,value:r*PB[t]}:void 0}return e[ne]==="%"?(ne++,{type:j.Percentage,value:+r}):{type:j.Number,value:+r}}i(Zs,"num");function Xu(e){let r="";for(;/\d/.test(e[ne]);)r+=e[ne++];return r}i(Xu,"digits");function Zc(e){let r="";for(;ne<e.length&&TB.test(e[ne]);)r+=e[ne++];return r}i(Zc,"ident");function NB(e){let r=Zc(e);return e[ne]==="("?(ne++,{type:j.Function,value:r}):r==="none"?{type:j.None,value:void 0}:{type:j.Ident,value:r}}i(NB,"identlike");function IB(e=""){let r=e.trim(),t=[],n;for(ne=0;ne<r.length;){if(n=r[ne++],n===`
`||n==="	"||n===" "){for(;ne<r.length&&(r[ne]===`
`||r[ne]==="	"||r[ne]===" ");)ne++;continue}if(n===",")return;if(n===")"){t.push({type:j.ParenClose});continue}if(n==="+"){if(ne--,Ju(r)){t.push(Zs(r));continue}return}if(n==="-"){if(ne--,Ju(r)){t.push(Zs(r));continue}if(Hg(r)){t.push({type:j.Ident,value:Zc(r)});continue}return}if(n==="."){if(ne--,Ju(r)){t.push(Zs(r));continue}return}if(n==="/"){for(;ne<r.length&&(r[ne]===`
`||r[ne]==="	"||r[ne]===" ");)ne++;let o;if(Ju(r)&&(o=Zs(r),o.type!==j.Hue)){t.push({type:j.Alpha,value:o});continue}if(Hg(r)&&Zc(r)==="none"){t.push({type:j.Alpha,value:{type:j.None,value:void 0}});continue}return}if(/\d/.test(n)){ne--,t.push(Zs(r));continue}if(Kg.test(n)){ne--,t.push(NB(r));continue}return}return t}i(IB,"tokenize");function BB(e){e._i=0;let r=e[e._i++];if(!r||r.type!==j.Function||r.value!=="color"||(r=e[e._i++],r.type!==j.Ident))return;const t=J$[r.value];if(!t)return;const n={mode:t},o=X$(e,!1);if(!o)return;const a=nf(t).channels;for(let s=0,l,u;s<a.length;s++)l=o[s],u=a[s],l.type!==j.None&&(n[u]=l.type===j.Number?l.value:l.value/100,u==="alpha"&&(n[u]=Math.max(0,Math.min(1,n[u]))));return n}i(BB,"parseColorSyntax");function X$(e,r){const t=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===j.None||n.type===j.Number||n.type===j.Alpha||n.type===j.Percentage||r&&n.type===j.Hue){t.push(n);continue}if(n.type===j.ParenClose){if(e._i<e.length)return;continue}return}if(!(t.length<3||t.length>4)){if(t.length===4){if(t[3].type!==j.Alpha)return;t[3]=t[3].value}return t.length===3&&t.push({type:j.None,value:void 0}),t.every(o=>o.type!==j.Alpha)?t:void 0}}i(X$,"consumeCoords");function OB(e,r){e._i=0;let t=e[e._i++];if(!t||t.type!==j.Function)return;let n=X$(e,r);if(n)return n.unshift(t.value),n}i(OB,"parseModernSyntax");const Gg=i(e=>{if(typeof e!="string")return;const r=IB(e),t=r?OB(r,!0):void 0;let n,o=0,a=Gc.length;for(;o<a;)if((n=Gc[o++](e,t))!==void 0)return n;return r?BB(r):void 0},"parse");function RB(e,r){if(!r||r[0]!=="rgb"&&r[0]!=="rgba")return;const t={mode:"rgb"},[,n,o,a,s]=r;if(!(n.type===j.Hue||o.type===j.Hue||a.type===j.Hue))return n.type!==j.None&&(t.r=n.type===j.Number?n.value/255:n.value/100),o.type!==j.None&&(t.g=o.type===j.Number?o.value/255:o.value/100),a.type!==j.None&&(t.b=a.type===j.Number?a.value/255:a.value/100),s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(RB,"parseRgb");const LB=i(e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,"parseTransparent"),jB=i((e,r,t)=>e+t*(r-e),"lerp"),UB=i(e=>{let r=[];for(let t=0;t<e.length-1;t++){let n=e[t],o=e[t+1];n===void 0&&o===void 0?r.push(void 0):n!==void 0&&o!==void 0?r.push([n,o]):r.push(n!==void 0?[n,n]:[o,o])}return r},"get_classes"),_B=i(e=>r=>{let t=UB(r);return n=>{let o=n*t.length,a=n>=1?t.length-1:Math.max(Math.floor(o),0),s=t[a];return s===void 0?void 0:e(s[0],s[1],o-a)}},"interpolatorPiecewise"),V=_B(jB),Gr=i(e=>{let r=!1,t=e.map(n=>n!==void 0?(r=!0,n):1);return r?t:e},"fixupAlpha"),Bs={mode:"rgb",channels:["r","g","b","alpha"],parse:[RB,DB,FB,$B,LB,"srgb"],serialize:"srgb",interpolate:{r:V,g:V,b:V,alpha:{use:V,fixup:Gr}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},d0=i((e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),"linearize$2"),M1=i(e=>{let r=d0(e.r),t=d0(e.g),n=d0(e.b),o={mode:"xyz65",x:.5766690429101305*r+.1855582379065463*t+.1882286462349947*n,y:.297344975250536*r+.6273635662554661*t+.0752914584939979*n,z:.0270313613864123*r+.0706888525358272*t+.9913375368376386*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertA98ToXyz65"),f0=i(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),"gamma$2"),S1=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"a98",r:f0(e*2.0415879038107465-r*.5650069742788597-.3447313507783297*t),g:f0(e*-.9692436362808798+r*1.8759675015077206+.0415550574071756*t),b:f0(e*.0134442806320312-r*.1183623922310184+1.0151749943912058*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz65ToA98"),g0=i((e=0)=>{const r=Math.abs(e);return r<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((r+.055)/1.055,2.4)},"fn$3"),Os=i(({r:e,g:r,b:t,alpha:n})=>{let o={mode:"lrgb",r:g0(e),g:g0(r),b:g0(t)};return n!==void 0&&(o.alpha=n),o},"convertRgbToLrgb"),$a=i(e=>{let{r,g:t,b:n,alpha:o}=Os(e),a={mode:"xyz65",x:.4123907992659593*r+.357584339383878*t+.1804807884018343*n,y:.2126390058715102*r+.715168678767756*t+.0721923153607337*n,z:.0193308187155918*r+.119194779794626*t+.9505321522496607*n};return o!==void 0&&(a.alpha=o),a},"convertRgbToXyz65"),h0=i((e=0)=>{const r=Math.abs(e);return r>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(r,1/2.4)-.055):e*12.92},"fn$2"),Rs=i(({r:e,g:r,b:t,alpha:n},o="rgb")=>{let a={mode:o,r:h0(e),g:h0(r),b:h0(t)};return n!==void 0&&(a.alpha=n),a},"convertLrgbToRgb"),xa=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Rs({r:e*3.2409699419045226-r*1.537383177570094-.4986107602930034*t,g:e*-.9692436362808796+r*1.8759675015077204+.0415550574071756*t,b:e*.0556300796969936-r*.2039769588889765+1.0569715142428784*t});return n!==void 0&&(o.alpha=n),o},"convertXyz65ToRgb"),zB={...Bs,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:i(e=>S1($a(e)),"rgb"),xyz65:S1},toMode:{rgb:i(e=>xa(M1(e)),"rgb"),xyz65:M1}},ht=i(e=>(e=e%360)<0?e+360:e,"normalizeHue"),qB=i((e,r)=>e.map((t,n,o)=>{if(t===void 0)return t;let a=ht(t);return n===0||e[n-1]===void 0?a:r(a-ht(o[n-1]))}).reduce((t,n)=>!t.length||n===void 0||t[t.length-1]===void 0?(t.push(n),t):(t.push(n+t[t.length-1]),t),[]),"hue"),Ro=i(e=>qB(e,r=>Math.abs(r)<=180?r:r-360*Math.sign(r)),"fixupHueShorter"),Qr=[-.14861,1.78277,-.29227,-.90649,1.97294,0],VB=Math.PI/180,WB=180/Math.PI;let T1=Qr[3]*Qr[4],P1=Qr[1]*Qr[4],N1=Qr[1]*Qr[2]-Qr[0]*Qr[3];const KB=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(N1*t+e*T1-r*P1)/(N1+T1-P1),a=t-o,s=(Qr[4]*(r-o)-Qr[2]*a)/Qr[3],l={mode:"cubehelix",l:o,s:o===0||o===1?void 0:Math.sqrt(a*a+s*s)/(Qr[4]*o*(1-o))};return l.s&&(l.h=Math.atan2(s,a)*WB-120),n!==void 0&&(l.alpha=n),l},"convertRgbToCubehelix"),HB=i(({h:e,s:r,l:t,alpha:n})=>{let o={mode:"rgb"};e=(e===void 0?0:e+120)*VB,t===void 0&&(t=0);let a=r===void 0?0:r*t*(1-t),s=Math.cos(e),l=Math.sin(e);return o.r=t+a*(Qr[0]*s+Qr[1]*l),o.g=t+a*(Qr[2]*s+Qr[3]*l),o.b=t+a*(Qr[4]*s+Qr[5]*l),n!==void 0&&(o.alpha=n),o},"convertCubehelixToRgb"),of=i((e,r)=>{if(e.h===void 0||r.h===void 0||!e.s||!r.s)return 0;let t=ht(e.h),n=ht(r.h),o=Math.sin((n-t+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*r.s)*o},"differenceHueSaturation"),GB=i((e,r)=>{if(e.h===void 0||r.h===void 0)return 0;let t=ht(e.h),n=ht(r.h);return Math.abs(n-t)>180?t-(n-360*Math.sign(n-t)):n-t},"differenceHueNaive"),af=i((e,r)=>{if(e.h===void 0||r.h===void 0||!e.c||!r.c)return 0;let t=ht(e.h),n=ht(r.h),o=Math.sin((n-t+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*r.c)*o},"differenceHueChroma"),ZB=i((e="rgb",r=[1,1,1,0])=>{let t=nf(e),n=t.channels,o=t.difference,a=aa(e);return(s,l)=>{let u=a(s),f=a(l);return Math.sqrt(n.reduce((g,h,p)=>{let m=o[h]?o[h](u,f):u[h]-f[h];return g+(r[p]||0)*Math.pow(isNaN(m)?0:m,2)},0))}},"differenceEuclidean"),Lo=i(e=>{let r=e.reduce((n,o)=>{if(o!==void 0){let a=o*Math.PI/180;n.sin+=Math.sin(a),n.cos+=Math.cos(a)}return n},{sin:0,cos:0}),t=Math.atan2(r.sin,r.cos)*180/Math.PI;return t<0?360+t:t},"averageAngle"),YB={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:KB},toMode:{rgb:HB},interpolate:{h:{use:V,fixup:Ro},s:V,l:V,alpha:{use:V,fixup:Gr}},difference:{h:of},average:{h:Lo}},mi=i(({l:e,a:r,b:t,alpha:n},o="lch")=>{r===void 0&&(r=0),t===void 0&&(t=0);let a=Math.sqrt(r*r+t*t),s={mode:o,l:e,c:a};return a&&(s.h=ht(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},"convertLabToLch"),bi=i(({l:e,c:r,h:t,alpha:n},o="lab")=>{t===void 0&&(t=0);let a={mode:o,l:e,a:r?r*Math.cos(t/180*Math.PI):0,b:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(a.alpha=n),a},"convertLchToLab"),Q$=Math.pow(29,3)/Math.pow(3,3),ex=Math.pow(6,3)/Math.pow(29,3),Br={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},Za={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let p0=i(e=>Math.pow(e,3)>ex?Math.pow(e,3):(116*e-16)/Q$,"fn$1");const rx=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+16)/116,a=r/500+o,s=o-t/200,l={mode:"xyz65",x:p0(a)*Za.X,y:p0(o)*Za.Y,z:p0(s)*Za.Z};return n!==void 0&&(l.alpha=n),l},"convertLab65ToXyz65"),sf=i(e=>xa(rx(e)),"convertLab65ToRgb"),m0=i(e=>e>ex?Math.cbrt(e):(Q$*e+16)/116,"f$1"),tx=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=m0(e/Za.X),a=m0(r/Za.Y),s=m0(t/Za.Z),l={mode:"lab65",l:116*a-16,a:500*(o-a),b:200*(a-s)};return n!==void 0&&(l.alpha=n),l},"convertXyz65ToLab65"),lf=i(e=>{let r=tx($a(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToLab65"),Yc=1,nx=1,Xl=26/180*Math.PI,Jc=Math.cos(Xl),Xc=Math.sin(Xl),ox=100/Math.log(139/100),Zg=i(({l:e,c:r,h:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"lab65",l:(Math.exp(e*Yc/ox)-1)/.0039},a=(Math.exp(.0435*r*nx*Yc)-1)/.075,s=a*Math.cos(t/180*Math.PI-Xl),l=a*Math.sin(t/180*Math.PI-Xl);return o.a=s*Jc-l/.83*Xc,o.b=s*Xc+l/.83*Jc,n!==void 0&&(o.alpha=n),o},"convertDlchToLab65"),Yg=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=r*Jc+t*Xc,a=.83*(t*Jc-r*Xc),s=Math.sqrt(o*o+a*a),l={mode:"dlch",l:ox/Yc*Math.log(1+.0039*e),c:Math.log(1+.075*s)/(.0435*nx*Yc)};return l.c&&(l.h=ht((Math.atan2(a,o)+Xl)/Math.PI*180)),n!==void 0&&(l.alpha=n),l},"convertLab65ToDlch"),I1=i(e=>Zg(mi(e,"dlch")),"convertDlabToLab65"),B1=i(e=>bi(Yg(e),"dlab"),"convertLab65ToDlab"),JB={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:I1,rgb:i(e=>sf(I1(e)),"rgb")},fromMode:{lab65:B1,rgb:i(e=>B1(lf(e)),"rgb")},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:V,a:V,b:V,alpha:{use:V,fixup:Gr}}},XB={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:Zg,dlab:i(e=>bi(e,"dlab"),"dlab"),rgb:i(e=>sf(Zg(e)),"rgb")},fromMode:{lab65:Yg,dlab:i(e=>mi(e,"dlch"),"dlab"),rgb:i(e=>Yg(lf(e)),"rgb")},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:V,c:V,h:{use:V,fixup:Ro},alpha:{use:V,fixup:Gr}},difference:{h:af},average:{h:Lo}};function QB({h:e,s:r,i:t,alpha:n}){e=ht(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:t*(1+r*(3/(2-o)-1)),g:t*(1+r*(3*(1-o)/(2-o)-1)),b:t*(1-r)};break;case 1:a={r:t*(1+r*(3*(1-o)/(2-o)-1)),g:t*(1+r*(3/(2-o)-1)),b:t*(1-r)};break;case 2:a={r:t*(1-r),g:t*(1+r*(3/(2-o)-1)),b:t*(1+r*(3*(1-o)/(2-o)-1))};break;case 3:a={r:t*(1-r),g:t*(1+r*(3*(1-o)/(2-o)-1)),b:t*(1+r*(3/(2-o)-1))};break;case 4:a={r:t*(1+r*(3*(1-o)/(2-o)-1)),g:t*(1-r),b:t*(1+r*(3/(2-o)-1))};break;case 5:a={r:t*(1+r*(3/(2-o)-1)),g:t*(1-r),b:t*(1+r*(3*(1-o)/(2-o)-1))};break;default:a={r:t*(1-r),g:t*(1-r),b:t*(1-r)}}return a.mode="rgb",n!==void 0&&(a.alpha=n),a}i(QB,"convertHsiToRgb");function eO({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),a=Math.min(e,r,t),s={mode:"hsi",s:e+r+t===0?0:1-3*a/(e+r+t),i:(e+r+t)/3};return o-a!==0&&(s.h=(o===e?(r-t)/(o-a)+(r<t)*6:o===r?(t-e)/(o-a)+2:(e-r)/(o-a)+4)*60),n!==void 0&&(s.alpha=n),s}i(eO,"convertRgbToHsi");const rO={mode:"hsi",toMode:{rgb:QB},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:eO},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:V,fixup:Ro},s:V,i:V,alpha:{use:V,fixup:Gr}},difference:{h:of},average:{h:Lo}};function tO({h:e,s:r,l:t,alpha:n}){e=ht(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=t+r*(t<.5?t:1-t),a=o-(o-t)*2*Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:o,g:a,b:2*t-o};break;case 1:s={r:a,g:o,b:2*t-o};break;case 2:s={r:2*t-o,g:o,b:a};break;case 3:s={r:2*t-o,g:a,b:o};break;case 4:s={r:a,g:2*t-o,b:o};break;case 5:s={r:o,g:2*t-o,b:a};break;default:s={r:2*t-o,g:2*t-o,b:2*t-o}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}i(tO,"convertHslToRgb");function nO({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),a=Math.min(e,r,t),s={mode:"hsl",s:o===a?0:(o-a)/(1-Math.abs(o+a-1)),l:.5*(o+a)};return o-a!==0&&(s.h=(o===e?(r-t)/(o-a)+(r<t)*6:o===r?(t-e)/(o-a)+2:(e-r)/(o-a)+4)*60),n!==void 0&&(s.alpha=n),s}i(nO,"convertRgbToHsl");const oO=i((e,r)=>{switch(r){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},"hueToDeg"),iO=new RegExp(`^hsla?\\(\\s*${CB}${ms}${Cl}${ms}${Cl}\\s*(?:,\\s*${om}\\s*)?\\)$`),aO=i(e=>{let r=e.match(iO);if(!r)return;let t={mode:"hsl"};return r[3]!==void 0?t.h=+r[3]:r[1]!==void 0&&r[2]!==void 0&&(t.h=oO(r[1],r[2])),r[4]!==void 0&&(t.s=Math.min(Math.max(0,r[4]/100),1)),r[5]!==void 0&&(t.l=Math.min(Math.max(0,r[5]/100),1)),r[6]!==void 0?t.alpha=Math.max(0,Math.min(1,r[6]/100)):r[7]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[7]))),t},"parseHslLegacy");function sO(e,r){if(!r||r[0]!=="hsl"&&r[0]!=="hsla")return;const t={mode:"hsl"},[,n,o,a,s]=r;if(n.type!==j.None){if(n.type===j.Percentage)return;t.h=n.value}if(o.type!==j.None){if(o.type===j.Hue)return;t.s=o.value/100}if(a.type!==j.None){if(a.type===j.Hue)return;t.l=a.value/100}return s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(sO,"parseHsl");const ix={mode:"hsl",toMode:{rgb:tO},fromMode:{rgb:nO},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[sO,aO],serialize:i(e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:Ro},s:V,l:V,alpha:{use:V,fixup:Gr}},difference:{h:of},average:{h:Lo}};function ax({h:e,s:r,v:t,alpha:n}){e=ht(e!==void 0?e:0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:t,g:t*(1-r*o),b:t*(1-r)};break;case 1:a={r:t*(1-r*o),g:t,b:t*(1-r)};break;case 2:a={r:t*(1-r),g:t,b:t*(1-r*o)};break;case 3:a={r:t*(1-r),g:t*(1-r*o),b:t};break;case 4:a={r:t*(1-r*o),g:t*(1-r),b:t};break;case 5:a={r:t,g:t*(1-r),b:t*(1-r*o)};break;default:a={r:t*(1-r),g:t*(1-r),b:t*(1-r)}}return a.mode="rgb",n!==void 0&&(a.alpha=n),a}i(ax,"convertHsvToRgb");function sx({r:e,g:r,b:t,alpha:n}){e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.max(e,r,t),a=Math.min(e,r,t),s={mode:"hsv",s:o===0?0:1-a/o,v:o};return o-a!==0&&(s.h=(o===e?(r-t)/(o-a)+(r<t)*6:o===r?(t-e)/(o-a)+2:(e-r)/(o-a)+4)*60),n!==void 0&&(s.alpha=n),s}i(sx,"convertRgbToHsv");const lx={mode:"hsv",toMode:{rgb:ax},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:sx},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:V,fixup:Ro},s:V,v:V,alpha:{use:V,fixup:Gr}},difference:{h:of},average:{h:Lo}};function lO({h:e,w:r,b:t,alpha:n}){if(r===void 0&&(r=0),t===void 0&&(t=0),r+t>1){let o=r+t;r/=o,t/=o}return ax({h:e,s:t===1?1:1-r/(1-t),v:1-t,alpha:n})}i(lO,"convertHwbToRgb");function uO(e){let r=sx(e);if(r===void 0)return;let t=r.s!==void 0?r.s:0,n=r.v!==void 0?r.v:0,o={mode:"hwb",w:(1-t)*n,b:1-n};return r.h!==void 0&&(o.h=r.h),r.alpha!==void 0&&(o.alpha=r.alpha),o}i(uO,"convertRgbToHwb");function cO(e,r){if(!r||r[0]!=="hwb")return;const t={mode:"hwb"},[,n,o,a,s]=r;if(n.type!==j.None){if(n.type===j.Percentage)return;t.h=n.value}if(o.type!==j.None){if(o.type===j.Hue)return;t.w=o.value/100}if(a.type!==j.None){if(a.type===j.Hue)return;t.b=a.value/100}return s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(cO,"ParseHwb");const dO={mode:"hwb",toMode:{rgb:lO},fromMode:{rgb:uO},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[cO],serialize:i(e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:Ro},w:V,b:V,alpha:{use:V,fixup:Gr}},difference:{h:GB},average:{h:Lo}},ux=203,uf=.1593017578125,cx=78.84375,cf=.8359375,df=18.8515625,ff=18.6875;function b0(e){if(e<0)return 0;const r=Math.pow(e,1/cx);return 1e4*Math.pow(Math.max(0,r-cf)/(df-ff*r),1/uf)}i(b0,"transferPqDecode");function v0(e){if(e<0)return 0;const r=Math.pow(e/1e4,uf);return Math.pow((cf+df*r)/(1+ff*r),cx)}i(v0,"transferPqEncode");const y0=i(e=>Math.max(e/ux,0),"toRel"),O1=i(({i:e,t:r,p:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o=b0(e+.008609037037932761*r+.11102962500302593*t),a=b0(e-.00860903703793275*r-.11102962500302599*t),s=b0(e+.5600313357106791*r-.32062717498731885*t),l={mode:"xyz65",x:y0(2.070152218389422*o-1.3263473389671556*a+.2066510476294051*s),y:y0(.3647385209748074*o+.680566024947227*a-.0453045459220346*s),z:y0(-.049747207535812*o-.0492609666966138*a+1.1880659249923042*s)};return n!==void 0&&(l.alpha=n),l},"convertItpToXyz65"),w0=i((e=0)=>Math.max(e*ux,0),"toAbs"),R1=i(({x:e,y:r,z:t,alpha:n})=>{const o=w0(e),a=w0(r),s=w0(t),l=v0(.3592832590121217*o+.6976051147779502*a-.0358915932320289*s),u=v0(-.1920808463704995*o+1.1004767970374323*a+.0753748658519118*s),f=v0(.0070797844607477*o+.0748396662186366*a+.8433265453898765*s),g=.5*l+.5*u,h=1.61376953125*l-3.323486328125*u+1.709716796875*f,p=4.378173828125*l-4.24560546875*u-.132568359375*f,m={mode:"itp",i:g,t:h,p};return n!==void 0&&(m.alpha=n),m},"convertXyz65ToItp"),fO={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:O1,rgb:i(e=>xa(O1(e)),"rgb")},fromMode:{xyz65:R1,rgb:i(e=>R1($a(e)),"rgb")},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:V,t:V,p:V,alpha:{use:V,fixup:Gr}}},gO=134.03437499999998,hO=16295499532821565e-27,k0=i(e=>{if(e<0)return 0;let r=Math.pow(e/1e4,uf);return Math.pow((cf+df*r)/(1+ff*r),gO)},"jabPqEncode"),$0=i((e=0)=>Math.max(e*203,0),"abs"),dx=i(({x:e,y:r,z:t,alpha:n})=>{e=$0(e),r=$0(r),t=$0(t);let o=1.15*e-.15*t,a=.66*r+.34*e,s=k0(.41478972*o+.579999*a+.014648*t),l=k0(-.20151*o+1.120649*a+.0531008*t),u=k0(-.0166008*o+.2648*a+.6684799*t),f=(s+l)/2,g={mode:"jab",j:.44*f/(1-.56*f)-hO,a:3.524*s-4.066708*l+.542708*u,b:.199076*s+1.096799*l-1.295875*u};return n!==void 0&&(g.alpha=n),g},"convertXyz65ToJab"),pO=134.03437499999998,L1=16295499532821565e-27,x0=i(e=>{if(e<0)return 0;let r=Math.pow(e,1/pO);return 1e4*Math.pow((cf-r)/(ff*r-df),1/uf)},"jabPqDecode"),D0=i(e=>e/203,"rel"),fx=i(({j:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+L1)/(.44+.56*(e+L1)),a=x0(o+.13860504*r+.058047316*t),s=x0(o-.13860504*r-.058047316*t),l=x0(o-.096019242*r-.8118919*t),u={mode:"xyz65",x:D0(1.661373024652174*a-.914523081304348*s+.23136208173913045*l),y:D0(-.3250758611844533*a+1.571847026732543*s-.21825383453227928*l),z:D0(-.090982811*a-.31272829*s+1.5227666*l)};return n!==void 0&&(u.alpha=n),u},"convertJabToXyz65"),gx=i(e=>{let r=dx($a(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToJab"),hx=i(e=>xa(fx(e)),"convertJabToRgb"),mO={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:gx,xyz65:dx},toMode:{rgb:hx,xyz65:fx},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:V,a:V,b:V,alpha:{use:V,fixup:Gr}}},j1=i(({j:e,a:r,b:t,alpha:n})=>{r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.sqrt(r*r+t*t),a={mode:"jch",j:e,c:o};return o&&(a.h=ht(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(a.alpha=n),a},"convertJabToJch"),U1=i(({j:e,c:r,h:t,alpha:n})=>{t===void 0&&(t=0);let o={mode:"jab",j:e,a:r?r*Math.cos(t/180*Math.PI):0,b:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},"convertJchToJab"),bO={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:U1,rgb:i(e=>hx(U1(e)),"rgb")},fromMode:{rgb:i(e=>j1(gx(e)),"rgb"),jab:j1},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:V,fixup:Ro},c:V,j:V,alpha:{use:V,fixup:Gr}},difference:{h:af},average:{h:Lo}},gf=Math.pow(29,3)/Math.pow(3,3),im=Math.pow(6,3)/Math.pow(29,3);let C0=i(e=>Math.pow(e,3)>im?Math.pow(e,3):(116*e-16)/gf,"fn");const am=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=(e+16)/116,a=r/500+o,s=o-t/200,l={mode:"xyz50",x:C0(a)*Br.X,y:C0(o)*Br.Y,z:C0(s)*Br.Z};return n!==void 0&&(l.alpha=n),l},"convertLabToXyz50"),$u=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Rs({r:e*3.1341359569958707-r*1.6173863321612538-.4906619460083532*t,g:e*-.978795502912089+r*1.916254567259524+.03344273116131949*t,b:e*.07195537988411677-r*.2289768264158322+1.405386058324125*t});return n!==void 0&&(o.alpha=n),o},"convertXyz50ToRgb"),px=i(e=>$u(am(e)),"convertLabToRgb"),xu=i(e=>{let{r,g:t,b:n,alpha:o}=Os(e),a={mode:"xyz50",x:.436065742824811*r+.3851514688337912*t+.14307845442264197*n,y:.22249319175623702*r+.7168870538238823*t+.06061979053616537*n,z:.013923904500943465*r+.09708128566574634*t+.7140993584005155*n};return o!==void 0&&(a.alpha=o),a},"convertRgbToXyz50"),E0=i(e=>e>im?Math.cbrt(e):(gf*e+16)/116,"f"),sm=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=E0(e/Br.X),a=E0(r/Br.Y),s=E0(t/Br.Z),l={mode:"lab",l:116*a-16,a:500*(o-a),b:200*(a-s)};return n!==void 0&&(l.alpha=n),l},"convertXyz50ToLab"),mx=i(e=>{let r=sm(xu(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToLab");function vO(e,r){if(!r||r[0]!=="lab")return;const t={mode:"lab"},[,n,o,a,s]=r;if(!(n.type===j.Hue||o.type===j.Hue||a.type===j.Hue))return n.type!==j.None&&(t.l=Math.min(Math.max(0,n.value),100)),o.type!==j.None&&(t.a=o.type===j.Number?o.value:o.value*125/100),a.type!==j.None&&(t.b=a.type===j.Number?a.value:a.value*125/100),s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(vO,"parseLab");const lm={mode:"lab",toMode:{xyz50:am,rgb:px},fromMode:{xyz50:sm,rgb:mx},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[vO],serialize:i(e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{l:V,a:V,b:V,alpha:{use:V,fixup:Gr}}},yO={...lm,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:rx,rgb:sf},fromMode:{xyz65:tx,rgb:lf},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function wO(e,r){if(!r||r[0]!=="lch")return;const t={mode:"lch"},[,n,o,a,s]=r;if(n.type!==j.None){if(n.type===j.Hue)return;t.l=Math.min(Math.max(0,n.value),100)}if(o.type!==j.None&&(t.c=Math.max(0,o.type===j.Number?o.value:o.value*150/100)),a.type!==j.None){if(a.type===j.Percentage)return;t.h=a.value}return s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(wO,"parseLch");const um={mode:"lch",toMode:{lab:bi,rgb:i(e=>px(bi(e)),"rgb")},fromMode:{rgb:i(e=>mi(mx(e)),"rgb"),lab:mi},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[wO],serialize:i(e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),interpolate:{h:{use:V,fixup:Ro},c:V,l:V,alpha:{use:V,fixup:Gr}},difference:{h:af},average:{h:Lo}},kO={...um,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:i(e=>bi(e,"lab65"),"lab65"),rgb:i(e=>sf(bi(e,"lab65")),"rgb")},fromMode:{rgb:i(e=>mi(lf(e),"lch65"),"rgb"),lab65:i(e=>mi(e,"lch65"),"lab65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},bx=i(({l:e,u:r,v:t,alpha:n})=>{r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.sqrt(r*r+t*t),a={mode:"lchuv",l:e,c:o};return o&&(a.h=ht(Math.atan2(t,r)*180/Math.PI)),n!==void 0&&(a.alpha=n),a},"convertLuvToLchuv"),vx=i(({l:e,c:r,h:t,alpha:n})=>{t===void 0&&(t=0);let o={mode:"luv",l:e,u:r?r*Math.cos(t/180*Math.PI):0,v:r?r*Math.sin(t/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},"convertLchuvToLuv"),yx=i((e,r,t)=>4*e/(e+15*r+3*t),"u_fn$1"),wx=i((e,r,t)=>9*r/(e+15*r+3*t),"v_fn$1"),$O=yx(Br.X,Br.Y,Br.Z),xO=wx(Br.X,Br.Y,Br.Z),DO=i(e=>e<=im?gf*e:116*Math.cbrt(e)-16,"l_fn"),Jg=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=DO(r/Br.Y),a=yx(e,r,t),s=wx(e,r,t);!isFinite(a)||!isFinite(s)?o=a=s=0:(a=13*o*(a-$O),s=13*o*(s-xO));let l={mode:"luv",l:o,u:a,v:s};return n!==void 0&&(l.alpha=n),l},"convertXyz50ToLuv"),CO=i((e,r,t)=>4*e/(e+15*r+3*t),"u_fn"),EO=i((e,r,t)=>9*r/(e+15*r+3*t),"v_fn"),AO=CO(Br.X,Br.Y,Br.Z),FO=EO(Br.X,Br.Y,Br.Z),Xg=i(({l:e,u:r,v:t,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};r===void 0&&(r=0),t===void 0&&(t=0);let o=r/(13*e)+AO,a=t/(13*e)+FO,s=Br.Y*(e<=8?e/gf:Math.pow((e+16)/116,3)),l=s*(9*o)/(4*a),u=s*(12-3*o-20*a)/(4*a),f={mode:"xyz50",x:l,y:s,z:u};return n!==void 0&&(f.alpha=n),f},"convertLuvToXyz50"),MO=i(e=>bx(Jg(xu(e))),"convertRgbToLchuv"),SO=i(e=>$u(Xg(vx(e))),"convertLchuvToRgb"),TO={mode:"lchuv",toMode:{luv:vx,rgb:SO},fromMode:{rgb:MO,luv:bx},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:V,fixup:Ro},c:V,l:V,alpha:{use:V,fixup:Gr}},difference:{h:af},average:{h:Lo}},PO={...Bs,mode:"lrgb",toMode:{rgb:Rs},fromMode:{rgb:Os},parse:["srgb-linear"],serialize:"srgb-linear"},NO={mode:"luv",toMode:{xyz50:Xg,rgb:i(e=>$u(Xg(e)),"rgb")},fromMode:{xyz50:Jg,rgb:i(e=>Jg(xu(e)),"rgb")},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:V,u:V,v:V,alpha:{use:V,fixup:Gr}}},kx=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.cbrt(.412221469470763*e+.5363325372617348*r+.0514459932675022*t),a=Math.cbrt(.2119034958178252*e+.6806995506452344*r+.1073969535369406*t),s=Math.cbrt(.0883024591900564*e+.2817188391361215*r+.6299787016738222*t),l={mode:"oklab",l:.210454268309314*o+.7936177747023054*a-.0040720430116193*s,a:1.9779985324311684*o-2.42859224204858*a+.450593709617411*s,b:.0259040424655478*o+.7827717124575296*a-.8086757549230774*s};return n!==void 0&&(l.alpha=n),l},"convertLrgbToOklab"),hf=i(e=>{let r=kx(Os(e));return e.r===e.b&&e.b===e.g&&(r.a=r.b=0),r},"convertRgbToOklab"),Du=i(({l:e,a:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Math.pow(e+.3963377773761749*r+.2158037573099136*t,3),a=Math.pow(e-.1055613458156586*r-.0638541728258133*t,3),s=Math.pow(e-.0894841775298119*r-1.2914855480194092*t,3),l={mode:"lrgb",r:4.076741636075957*o-3.3077115392580616*a+.2309699031821044*s,g:-1.2684379732850317*o+2.6097573492876887*a-.3413193760026573*s,b:-.0041960761386756*o-.7034186179359362*a+1.7076146940746117*s};return n!==void 0&&(l.alpha=n),l},"convertOklabToLrgb"),pf=i(e=>Rs(Du(e)),"convertOklabToRgb");function Qg(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}i(Qg,"toe");function Qc(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}i(Qc,"toe_inv");function IO(e,r){let t,n,o,a,s,l,u,f;-1.88170328*e-.80936493*r>1?(t=1.19086277,n=1.76576728,o=.59662641,a=.75515197,s=.56771245,l=4.0767416621,u=-3.3077115913,f=.2309699292):1.81444104*e-1.19445276*r>1?(t=.73956515,n=-.45954404,o=.08285427,a=.1254107,s=.14503204,l=-1.2684380046,u=2.6097574011,f=-.3413193965):(t=1.35733652,n=-.00915799,o=-1.1513021,a=-.50559606,s=.00692167,l=-.0041960863,u=-.7034186147,f=1.707614701);let g=t+n*e+o*r+a*e*e+s*e*r,h=.3963377774*e+.2158037573*r,p=-.1055613458*e-.0638541728*r,m=-.0894841775*e-1.291485548*r;{let v=1+g*h,$=1+g*p,C=1+g*m,E=v*v*v,A=$*$*$,I=C*C*C,_=3*h*v*v,H=3*p*$*$,ce=3*m*C*C,Te=6*h*h*v,be=6*p*p*$,Me=6*m*m*C,nr=l*E+u*A+f*I,or=l*_+u*H+f*ce,jr=l*Te+u*be+f*Me;g=g-nr*or/(or*or-.5*nr*jr)}return g}i(IO,"compute_max_saturation");function cm(e,r){let t=IO(e,r),n=Du({l:1,a:t*e,b:t*r}),o=Math.cbrt(1/Math.max(n.r,n.g,n.b)),a=o*t;return[o,a]}i(cm,"find_cusp");function BO(e,r,t,n,o,a=null){a||(a=cm(e,r));let s;if((t-o)*a[1]-(a[0]-o)*n<=0)s=a[1]*o/(n*a[0]+a[1]*(o-t));else{s=a[1]*(o-1)/(n*(a[0]-1)+a[1]*(o-t));{let l=t-o,u=n,f=.3963377774*e+.2158037573*r,g=-.1055613458*e-.0638541728*r,h=-.0894841775*e-1.291485548*r,p=l+u*f,m=l+u*g,v=l+u*h;{let $=o*(1-s)+s*t,C=s*n,E=$+C*f,A=$+C*g,I=$+C*h,_=E*E*E,H=A*A*A,ce=I*I*I,Te=3*p*E*E,be=3*m*A*A,Me=3*v*I*I,nr=6*p*p*E,or=6*m*m*A,jr=6*v*v*I,Ht=4.0767416621*_-3.3077115913*H+.2309699292*ce-1,Et=4.0767416621*Te-3.3077115913*be+.2309699292*Me,fo=4.0767416621*nr-3.3077115913*or+.2309699292*jr,Zr=Et/(Et*Et-.5*Ht*fo),Yn=-Ht*Zr,go=-1.2684380046*_+2.6097574011*H-.3413193965*ce-1,gn=-1.2684380046*Te+2.6097574011*be-.3413193965*Me,at=-1.2684380046*nr+2.6097574011*or-.3413193965*jr,He=gn/(gn*gn-.5*go*at),Ur=-go*He,hn=-.0041960863*_-.7034186147*H+1.707614701*ce-1,vt=-.0041960863*Te-.7034186147*be+1.707614701*Me,pn=-.0041960863*nr-.7034186147*or+1.707614701*jr,Sn=vt/(vt*vt-.5*hn*pn),jo=-hn*Sn;Yn=Zr>=0?Yn:1e6,Ur=He>=0?Ur:1e6,jo=Sn>=0?jo:1e6,s+=Math.min(Yn,Math.min(Ur,jo))}}}return s}i(BO,"find_gamut_intersection");function dm(e,r,t=null){t||(t=cm(e,r));let n=t[0],o=t[1];return[o/n,o/(1-n)]}i(dm,"get_ST_max");function $x(e,r,t){let n=cm(r,t),o=BO(r,t,e,1,e,n),a=dm(r,t,n),s=.11516993+1/(7.4477897+4.1590124*t+r*(-2.19557347+1.75198401*t+r*(-2.13704948-10.02301043*t+r*(-4.24894561+5.38770819*t+4.69891013*r)))),l=.11239642+1/(1.6132032-.68124379*t+r*(.40370612+.90148123*t+r*(-.27087943+.6122399*t+r*(.00299215-.45399568*t-.14661872*r)))),u=o/Math.min(e*a[0],(1-e)*a[1]),f=e*s,g=(1-e)*l,h=.9*u*Math.sqrt(Math.sqrt(1/(1/(f*f*f*f)+1/(g*g*g*g))));return f=e*.4,g=(1-e)*.8,[Math.sqrt(1/(1/(f*f)+1/(g*g))),h,o]}i($x,"get_Cs");function _1(e){const r=e.l!==void 0?e.l:0,t=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o={mode:"okhsl",l:Qg(r)};e.alpha!==void 0&&(o.alpha=e.alpha);let a=Math.sqrt(t*t+n*n);if(!a)return o.s=0,o;let[s,l,u]=$x(r,t/a,n/a),f;if(a<l){let g=0,h=.8*s,p=1-h/l;f=(a-g)/(h+p*(a-g))*.8}else{let g=l,h=.2*l*l*1.25*1.25/s,p=1-h/(u-l);f=.8+.2*((a-g)/(h+p*(a-g)))}return f&&(o.s=f,o.h=ht(Math.atan2(n,t)*180/Math.PI)),o}i(_1,"convertOklabToOkhsl");function z1(e){let r=e.h!==void 0?e.h:0,t=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const o={mode:"oklab",l:Qc(n)};if(e.alpha!==void 0&&(o.alpha=e.alpha),!t||n===1)return o.a=o.b=0,o;let a=Math.cos(r/180*Math.PI),s=Math.sin(r/180*Math.PI),[l,u,f]=$x(o.l,a,s),g,h,p,m;t<.8?(g=1.25*t,h=0,p=.8*l,m=1-p/u):(g=5*(t-.8),h=u,p=.2*u*u*1.25*1.25/l,m=1-p/(f-u));let v=h+g*p/(1-m*g);return o.a=v*a,o.b=v*s,o}i(z1,"convertOkhslToOklab");const OO={...ix,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:_1,rgb:i(e=>_1(hf(e)),"rgb")},toMode:{oklab:z1,rgb:i(e=>pf(z1(e)),"rgb")}};function q1(e){let r=e.l!==void 0?e.l:0,t=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o=Math.sqrt(t*t+n*n),a=o?t/o:1,s=o?n/o:1,[l,u]=dm(a,s),f=.5,g=1-f/l,h=u/(o+r*u),p=h*r,m=h*o,v=Qc(p),$=m*v/p,C=Du({l:v,a:a*$,b:s*$}),E=Math.cbrt(1/Math.max(C.r,C.g,C.b,0));r=r/E,o=o/E*Qg(r)/r,r=Qg(r);const A={mode:"okhsv",s:o?(f+u)*m/(u*f+u*g*m):0,v:r?r/p:0};return A.s&&(A.h=ht(Math.atan2(n,t)*180/Math.PI)),e.alpha!==void 0&&(A.alpha=e.alpha),A}i(q1,"convertOklabToOkhsv");function V1(e){const r={mode:"oklab"};e.alpha!==void 0&&(r.alpha=e.alpha);const t=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,o=e.v!==void 0?e.v:0,a=Math.cos(t/180*Math.PI),s=Math.sin(t/180*Math.PI),[l,u]=dm(a,s),f=.5,g=1-f/l,h=1-n*f/(f+u-u*g*n),p=n*u*f/(f+u-u*g*n),m=Qc(h),v=p*m/h,$=Du({l:m,a:a*v,b:s*v}),C=Math.cbrt(1/Math.max($.r,$.g,$.b,0)),E=Qc(o*h),A=p*E/h;return r.l=E*C,r.a=A*a*C,r.b=A*s*C,r}i(V1,"convertOkhsvToOklab");const RO={...lx,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:q1,rgb:i(e=>q1(hf(e)),"rgb")},toMode:{oklab:V1,rgb:i(e=>pf(V1(e)),"rgb")}};function LO(e,r){if(!r||r[0]!=="oklab")return;const t={mode:"oklab"},[,n,o,a,s]=r;if(!(n.type===j.Hue||o.type===j.Hue||a.type===j.Hue))return n.type!==j.None&&(t.l=Math.min(Math.max(0,n.type===j.Number?n.value:n.value/100),1)),o.type!==j.None&&(t.a=o.type===j.Number?o.value:o.value*.4/100),a.type!==j.None&&(t.b=a.type===j.Number?a.value:a.value*.4/100),s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(LO,"parseOklab");const jO={...lm,mode:"oklab",toMode:{lrgb:Du,rgb:pf},fromMode:{lrgb:kx,rgb:hf},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[LO],serialize:i(e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize")};function UO(e,r){if(!r||r[0]!=="oklch")return;const t={mode:"oklch"},[,n,o,a,s]=r;if(n.type!==j.None){if(n.type===j.Hue)return;t.l=Math.min(Math.max(0,n.type===j.Number?n.value:n.value/100),1)}if(o.type!==j.None&&(t.c=Math.max(0,o.type===j.Number?o.value:o.value*.4/100)),a.type!==j.None){if(a.type===j.Percentage)return;t.h=a.value}return s.type!==j.None&&(t.alpha=Math.min(1,Math.max(0,s.type===j.Number?s.value:s.value/100))),t}i(UO,"parseOklch");const _O={...um,mode:"oklch",toMode:{oklab:i(e=>bi(e,"oklab"),"oklab"),rgb:i(e=>pf(bi(e,"oklab")),"rgb")},fromMode:{rgb:i(e=>mi(hf(e),"oklch"),"rgb"),oklab:i(e=>mi(e,"oklch"),"oklab")},parse:[UO],serialize:i(e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,"serialize"),ranges:{l:[0,1],c:[0,.4],h:[0,360]}},W1=i(e=>{let{r,g:t,b:n,alpha:o}=Os(e),a={mode:"xyz65",x:.486570948648216*r+.265667693169093*t+.1982172852343625*n,y:.2289745640697487*r+.6917385218365062*t+.079286914093745*n,z:0*r+.0451133818589026*t+1.043944368900976*n};return o!==void 0&&(a.alpha=o),a},"convertP3ToXyz65"),K1=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o=Rs({r:e*2.4934969119414263-r*.9313836179191242-.402710784450717*t,g:e*-.8294889695615749+r*1.7626640603183465+.0236246858419436*t,b:e*.0358458302437845-r*.0761723892680418+.9568845240076871*t},"p3");return n!==void 0&&(o.alpha=n),o},"convertXyz65ToP3"),zO={...Bs,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:i(e=>K1($a(e)),"rgb"),xyz65:K1},toMode:{rgb:i(e=>xa(W1(e)),"rgb"),xyz65:W1}},A0=i(e=>{let r=Math.abs(e);return r>=1/512?Math.sign(e)*Math.pow(r,1/1.8):16*e},"gamma$1"),H1=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"prophoto",r:A0(e*1.3457868816471585-r*.2555720873797946-.0511018649755453*t),g:A0(e*-.5446307051249019+r*1.5082477428451466+.0205274474364214*t),b:A0(e*0+r*0+1.2119675456389452*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz50ToProphoto"),F0=i((e=0)=>{let r=Math.abs(e);return r>=16/512?Math.sign(e)*Math.pow(r,1.8):e/16},"linearize$1"),G1=i(e=>{let r=F0(e.r),t=F0(e.g),n=F0(e.b),o={mode:"xyz50",x:.7977666449006423*r+.1351812974005331*t+.0313477341283922*n,y:.2880748288194013*r+.7118352342418731*t+899369387256e-16*n,z:0*r+0*t+.8251046025104602*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertProphotoToXyz50"),qO={...Bs,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:H1,rgb:i(e=>H1(xu(e)),"rgb")},toMode:{xyz50:G1,rgb:i(e=>$u(G1(e)),"rgb")}},Z1=1.09929682680944,VO=.018053968510807,M0=i(e=>{const r=Math.abs(e);return r>VO?(Math.sign(e)||1)*(Z1*Math.pow(r,.45)-(Z1-1)):4.5*e},"gamma"),Y1=i(({x:e,y:r,z:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);let o={mode:"rec2020",r:M0(e*1.7166511879712683-r*.3556707837763925-.2533662813736599*t),g:M0(e*-.6666843518324893+r*1.6164812366349395+.0157685458139111*t),b:M0(e*.0176398574453108-r*.0427706132578085+.9421031212354739*t)};return n!==void 0&&(o.alpha=n),o},"convertXyz65ToRec2020"),J1=1.09929682680944,WO=.018053968510807,S0=i((e=0)=>{let r=Math.abs(e);return r<WO*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((r+J1-1)/J1,1/.45)},"linearize"),X1=i(e=>{let r=S0(e.r),t=S0(e.g),n=S0(e.b),o={mode:"xyz65",x:.6369580483012911*r+.1446169035862083*t+.1688809751641721*n,y:.262700212011267*r+.6779980715188708*t+.059301716469862*n,z:0*r+.0280726930490874*t+1.0609850577107909*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},"convertRec2020ToXyz65"),KO={...Bs,mode:"rec2020",fromMode:{xyz65:Y1,rgb:i(e=>Y1($a(e)),"rgb")},toMode:{xyz65:X1,rgb:i(e=>xa(X1(e)),"rgb")},parse:["rec2020"],serialize:"rec2020"},Zi=.0037930732552754493,xx=Math.cbrt(Zi),T0=i(e=>Math.cbrt(e)-xx,"transfer$1"),HO=i(e=>{const{r,g:t,b:n,alpha:o}=Os(e),a=T0(.3*r+.622*t+.078*n+Zi),s=T0(.23*r+.692*t+.078*n+Zi),l=T0(.2434226892454782*r+.2047674442449682*t+.5518098665095535*n+Zi),u={mode:"xyb",x:(a-s)/2,y:(a+s)/2,b:l-(a+s)/2};return o!==void 0&&(u.alpha=o),u},"convertRgbToXyb"),P0=i(e=>Math.pow(e+xx,3),"transfer"),GO=i(({x:e,y:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o=P0(e+r)-Zi,a=P0(r-e)-Zi,s=P0(t+r)-Zi,l=Rs({r:11.031566904639861*o-9.866943908131562*a-.16462299650829934*s,g:-3.2541473810744237*o+4.418770377582723*a-.16462299650829934*s,b:-3.6588512867136815*o+2.7129230459360922*a+1.9459282407775895*s});return n!==void 0&&(l.alpha=n),l},"convertXybToRgb"),ZO={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:GO},fromMode:{rgb:HO},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:V,y:V,b:V,alpha:{use:V,fixup:Gr}}},YO={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:$u,lab:sm},fromMode:{rgb:xu,lab:am},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:V,y:V,z:V,alpha:{use:V,fixup:Gr}}},JO=i(e=>{let{x:r,y:t,z:n,alpha:o}=e;r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0);let a={mode:"xyz50",x:1.0479298208405488*r+.0229467933410191*t-.0501922295431356*n,y:.0296278156881593*r+.990434484573249*t-.0170738250293851*n,z:-.0092430581525912*r+.0150551448965779*t+.7518742899580008*n};return o!==void 0&&(a.alpha=o),a},"convertXyz65ToXyz50"),XO=i(e=>{let{x:r,y:t,z:n,alpha:o}=e;r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0);let a={mode:"xyz65",x:.9554734527042182*r-.0230985368742614*t+.0632593086610217*n,y:-.0283697069632081*r+1.0099954580058226*t+.021041398966943*n,z:.0123140016883199*r-.0205076964334779*t+1.3303659366080753*n};return o!==void 0&&(a.alpha=o),a},"convertXyz50ToXyz65"),QO={mode:"xyz65",toMode:{rgb:xa,xyz50:JO},fromMode:{rgb:$a,xyz50:XO},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:V,y:V,z:V,alpha:{use:V,fixup:Gr}}},eR=i(({r:e,g:r,b:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o={mode:"yiq",y:.29889531*e+.58662247*r+.11448223*t,i:.59597799*e-.2741761*r-.32180189*t,q:.21147017*e-.52261711*r+.31114694*t};return n!==void 0&&(o.alpha=n),o},"convertRgbToYiq"),rR=i(({y:e,i:r,q:t,alpha:n})=>{e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=0);const o={mode:"rgb",r:e+.95608445*r+.6208885*t,g:e-.27137664*r-.6486059*t,b:e-1.10561724*r+1.70250126*t};return n!==void 0&&(o.alpha=n),o},"convertYiqToRgb"),tR={mode:"yiq",toMode:{rgb:rR},fromMode:{rgb:eR},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:V,i:V,q:V,alpha:{use:V,fixup:Gr}}},nR=i(e=>Math.max(0,Math.min(1,e||0)),"clamp"),N0=i(e=>Math.round(nR(e)*255),"fixup"),oR=aa("rgb"),iR=i(e=>{if(e===void 0)return;let r=N0(e.r),t=N0(e.g),n=N0(e.b);return"#"+(1<<24|r<<16|t<<8|n).toString(16).slice(1)},"serializeHex"),aR=i(e=>iR(oR(e)),"formatHex"),sR=i(e=>{const r={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(r.alpha=e.alpha),r},"fixup_rgb"),lR=i(e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1),"inrange_rgb");function uR(e="rgb"){const{gamut:r}=nf(e);if(!r)return n=>!0;const t=aa(typeof r=="string"?r:e);return n=>lR(t(n))}i(uR,"inGamut");function cR(e="rgb"){const{gamut:r}=nf(e);if(!r)return a=>Wg(a);const t=typeof r=="string"?r:e,n=aa(t),o=uR(t);return a=>{const s=Wg(a);if(!s)return;const l=n(s);if(o(l))return s;const u=sR(l);return s.mode===u.mode?u:aa(s.mode)(u)}}i(cR,"clampGamut");ze(zB);ze(YB);ze(JB);ze(XB);ze(rO);ze(ix);ze(lx);ze(dO);ze(fO);ze(mO);ze(bO);ze(lm);ze(yO);ze(um);ze(kO);ze(TO);ze(PO);ze(NO);ze(OO);ze(RO);ze(jO);ze(_O);ze(zO);ze(qO);ze(KO);ze(Bs);ze(ZO);ze(YO);ze(QO);ze(tR);const dR=ZB("rgb");class Mo{static{i(this,"Color")}constructor(r){this.set(r)}static isValidColorString(r){try{return new Mo(r),!0}catch{return!1}}static isColor(r){return r instanceof Mo}static deserialize(r){const t=JSON.parse(r),n=new Mo("black");return Un(t).forEach(([o,a])=>{o==="originalColorSyntax"?n.originalColorSyntax=lr.isEnumValue(a,ye,"Cannot deserialize: invalid color syntax."):n._allColors[o]=a}),n}getRgbDistance(r){return dR(this.#e,r)}getClosestNamedColor(){return We(Jl).reduce((r,t)=>{const n=this.getRgbDistance(t);return n<r.distance?{distance:n,name:t}:r},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=ye.hex;#e=lr.isDefined(Gg("black"));_allColors={names:["black"],[ye.name]:"black",hexString:"#000000",[ye.hex]:{r:0,g:0,b:0},[ye.rgb]:{r:0,g:0,b:0},[ye.hsl]:{h:0,s:0,l:0},[ye.hwb]:{h:0,w:0,b:0},[ye.lab]:{l:0,a:0,b:0},[ye.lch]:{l:0,c:0,h:0},[ye.oklab]:{l:0,a:0,b:0},[ye.oklch]:{l:0,c:0,h:0}};clone(){return Mo.deserialize(this.serialize())}setByString(r){const t=Gg(r);if(!t)throw new Error(`Unable to parse invalid color string: '${r}'`);this.originalColorSyntax=vB(r),this.#e=t,this.pullFromInternalColor()}set(r){if(S.isString(r))return this.setByString(r);if(Er.isLengthExactly(Object.keys(r),1,`Cannot set multiple color formats at once: got '${MD(Object.keys(r))}'`),r.hexString||r.name)this.setByString(r.hexString||r.name);else{const[t,n]=lr.isDefined(Un(r)[0]),o=ro[t],a=Object.values(Ke(o.coords,s=>{const l=n[s],u=o.coords[lr.isKeyOf(s,o.coords)],f=l!=null&&l>=u.min&&l<=u.max?n[s]:this[t][s];return lr.isDefined(f)}));this.setByString(`${o.conversionFormat}(${a.join(" ")})`)}}pullFromInternalColor(){Jt(pi).forEach(r=>{const t=ro[r],n=t.conversionFormat,o=S.isKeyOf(this.#e.mode,ro)?ro[this.#e.mode]:void 0,a=cR(t.colorSpace===o?.colorSpace?n:"rgb")(aa(n)(this.#e));a||Er.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${r}'.`),We(this[r]).forEach(s=>{const l=a[s],u=t.coords[lr.isKeyOf(s,t.coords)];l!=null&&(this._allColors[r][s]=mw((l||0)*(u.factor||1),{digits:u.digits||0}))})}),this._allColors.hexString=aR(this.#e),this._allColors.names=fR(this.rgb),this._allColors[ye.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return In(this._allColors)}toFormattedStrings(){return{...Ke(ro,t=>Object.values(this[t]).map(o=>String(o).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(F1," "),[ye.name]:(this.names[0]||"").padEnd(F1," "),[ye.hexString]:this[ye.hexString]}}toCss(){return{...Ke(ro,t=>{const n=Object.values(this[t]);return`${t}(${n.join(" ")})`}),[ye.hexString]:this[ye.hexString],[ye.name]:this.names[0]||""}}get names(){return In(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[ye.hexString]}get hex(){return In(this._allColors[ye.hex])}get rgb(){return In(this._allColors[ye.rgb])}get hsl(){return In(this._allColors[ye.hsl])}get hwb(){return In(this._allColors[ye.hwb])}get lab(){return In(this._allColors[ye.lab])}get lch(){return In(this._allColors[ye.lch])}get oklab(){return In(this._allColors[ye.oklab])}get oklch(){return In(this._allColors[ye.oklch])}}function fR(e){return En(Un(Jl),([r])=>r,(r,[,t])=>S.deepEquals(t,[e.r,e.g,e.b]))}i(fR,"findMatchingColorNames");function gR(e){return k`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}i(gR,"colorCss");const fm=k`
    padding: 0;
    margin: 0;
`,Eo=k`
    ${fm};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,qr=Pt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function Cu({name:e,svgTemplate:r}){return{name:e,svgTemplate:r}}i(Cu,"defineIcon");const hR=Cu({name:"CloseX24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${qr["vira-icon-fill-color"].value}
                stroke=${qr["vira-icon-stroke-color"].value}
                stroke-width=${qr["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${qr["vira-icon-stroke-color"].value}
                stroke-width=${qr["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),pR=Cu({name:"ChevronUp16Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${qr["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${qr["vira-icon-stroke-width"].value}
                d="M4 10 L8 6 12 10"
            />
        </svg>
    `}),Q1=Cu({name:"Copy24Icon",svgTemplate:b`
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
                fill=${qr["vira-icon-fill-color"].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${qr["vira-icon-stroke-color"].value}
                stroke-width=${qr["vira-icon-stroke-width"].value}
                fill=${qr["vira-icon-fill-color"].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${qr["vira-icon-stroke-color"].value}
                stroke-width=${qr["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),mR=Cu({name:"EyeClosed24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${qr["vira-icon-fill-color"].value}
            stroke=${qr["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${qr["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),bR=Cu({name:"EyeOpen24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${qr["vira-icon-fill-color"].value}
            stroke=${qr["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${qr["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),Dx=Pt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),d=Pt({"vira-red-100":"#FFF6F5","vira-red-150":"#FFEDEB","vira-red-200":"#FFE4E1","vira-red-250":"#FFDCD8","vira-red-300":"#FFD1CB","vira-red-350":"#FFC1B8","vira-red-400":"#FFA79B","vira-red-450":"#FF8274","vira-red-500":"#FF564A","vira-red-550":"#F43A32","vira-red-600":"#E2322C","vira-red-650":"#D02C27","vira-red-700":"#BB2520","vira-red-750":"#9E231D","vira-red-800":"#82211A","vira-red-850":"#701A13","vira-red-900":"#611710","vira-red-950":"#52140D","vira-red-1000":"#43130D","vira-yellow-100":"#FEF9E4","vira-yellow-150":"#FDF2D1","vira-yellow-200":"#FDEABF","vira-yellow-250":"#FEE2AD","vira-yellow-300":"#FDD89B","vira-yellow-350":"#FAC986","vira-yellow-400":"#EFB669","vira-yellow-450":"#E29D34","vira-yellow-500":"#CE8800","vira-yellow-550":"#BB7B00","vira-yellow-600":"#AC7100","vira-yellow-650":"#9E6800","vira-yellow-700":"#8C5C00","vira-yellow-750":"#794D00","vira-yellow-800":"#683E00","vira-yellow-850":"#5B3301","vira-yellow-900":"#502A05","vira-yellow-950":"#442308","vira-yellow-1000":"#381D0B","vira-green-100":"#EBFFEE","vira-green-150":"#DDFBE2","vira-green-200":"#CDF8D6","vira-green-250":"#BFF5CC","vira-green-300":"#AFF0C0","vira-green-350":"#9AE8B1","vira-green-400":"#7FD99C","vira-green-450":"#52C87F","vira-green-500":"#1BB565","vira-green-550":"#04A559","vira-green-600":"#009852","vira-green-650":"#008C4A","vira-green-700":"#007C41","vira-green-750":"#016A38","vira-green-800":"#095831","vira-green-850":"#024B29","vira-green-900":"#014024","vira-green-950":"#02371F","vira-green-1000":"#062D1B","vira-teal-100":"#E8FEFD","vira-teal-150":"#D9FAF8","vira-teal-200":"#C9F6F3","vira-teal-250":"#BAF2ED","vira-teal-300":"#A9EDE6","vira-teal-350":"#95E4DB","vira-teal-400":"#79D5CA","vira-teal-450":"#47C3B7","vira-teal-500":"#00B0A4","vira-teal-550":"#00A094","vira-teal-600":"#009389","vira-teal-650":"#00877D","vira-teal-700":"#00786F","vira-teal-750":"#00665F","vira-teal-800":"#01554F","vira-teal-850":"#004843","vira-teal-900":"#003E3A","vira-teal-950":"#033531","vira-teal-1000":"#072B29","vira-blue-100":"#F5F9FF","vira-blue-150":"#EAF3FF","vira-blue-200":"#E0EDFF","vira-blue-250":"#D6E7FF","vira-blue-300":"#CBDFFF","vira-blue-350":"#B9D4FF","vira-blue-400":"#9EC3FF","vira-blue-450":"#7AADFF","vira-blue-500":"#5697FF","vira-blue-550":"#4988ED","vira-blue-600":"#427DDC","vira-blue-650":"#3B72CA","vira-blue-700":"#3365B6","vira-blue-750":"#2D569A","vira-blue-800":"#27487E","vira-blue-850":"#203D6C","vira-blue-900":"#1B345D","vira-blue-950":"#172C4F","vira-blue-1000":"#142540","vira-accent-100":"#F5F9FF","vira-accent-150":"#EAF3FF","vira-accent-200":"#E0EDFF","vira-accent-250":"#D6E7FF","vira-accent-300":"#CBDFFF","vira-accent-350":"#B9D4FF","vira-accent-400":"#9EC3FF","vira-accent-450":"#7AADFF","vira-accent-500":"#5697FF","vira-accent-550":"#4988ED","vira-accent-600":"#427DDC","vira-accent-650":"#3B72CA","vira-accent-700":"#3365B6","vira-accent-750":"#2D569A","vira-accent-800":"#27487E","vira-accent-850":"#203D6C","vira-accent-900":"#1B345D","vira-accent-950":"#172C4F","vira-accent-1000":"#142540","vira-purple-100":"#F9F7FF","vira-purple-150":"#F3EFFF","vira-purple-200":"#EDE8FF","vira-purple-250":"#E6E1FF","vira-purple-300":"#DED8FF","vira-purple-350":"#D2CBFF","vira-purple-400":"#C1B7FF","vira-purple-450":"#AD9BFF","vira-purple-500":"#9B80FF","vira-purple-550":"#8D6EF4","vira-purple-600":"#8265E3","vira-purple-650":"#775BD1","vira-purple-700":"#6A50BB","vira-purple-750":"#5A459E","vira-purple-800":"#4A3B82","vira-purple-850":"#3E3170","vira-purple-900":"#352A61","vira-purple-950":"#2D2452","vira-purple-1000":"#251F43","vira-pink-100":"#FEF5FF","vira-pink-150":"#FFEAFF","vira-pink-200":"#FFE0FC","vira-pink-250":"#FFD7F8","vira-pink-300":"#FFCBF2","vira-pink-350":"#FFB9E9","vira-pink-400":"#FF9BDF","vira-pink-450":"#FF6DD6","vira-pink-500":"#F04AC5","vira-pink-550":"#DD3EB4","vira-pink-600":"#CC37A7","vira-pink-650":"#BC3099","vira-pink-700":"#A82988","vira-pink-750":"#8F2674","vira-pink-800":"#752361","vira-pink-850":"#641C53","vira-pink-900":"#561848","vira-pink-950":"#49153E","vira-pink-1000":"#3B1333","vira-grey-100":"#F9F9F9","vira-grey-150":"#F2F2F2","vira-grey-200":"#EBEBEB","vira-grey-250":"#E5E5E5","vira-grey-300":"#DEDEDE","vira-grey-350":"#D2D2D2","vira-grey-400":"#C2C2C2","vira-grey-450":"#ADADAD","vira-grey-500":"#999999","vira-grey-550":"#8A8A8A","vira-grey-600":"#7F7F7F","vira-grey-650":"#747474","vira-grey-700":"#676767","vira-grey-750":"#585858","vira-grey-800":"#494949","vira-grey-850":"#3E3E3E","vira-grey-900":"#353535","vira-grey-950":"#2D2D2D","vira-grey-1000":"#252525"}),Le=Wp({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:d["vira-red-1000"]},"vira-red-foreground-body":{foreground:d["vira-red-750"]},"vira-red-foreground-non-body":{foreground:d["vira-red-650"]},"vira-red-foreground-header":{foreground:d["vira-red-500"]},"vira-red-foreground-placeholder":{foreground:d["vira-red-400"]},"vira-red-foreground-decoration":{foreground:d["vira-red-350"]},"vira-red-foreground-invisible":{foreground:d["vira-red-250"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-red-1000"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-red-700"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-red-600"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-red-450"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-red-400"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-red-350"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-red-200"]},"vira-red-behind-fg-small-body":{background:d["vira-red-250"]},"vira-red-behind-fg-body":{background:d["vira-red-350"]},"vira-red-behind-fg-non-body":{background:d["vira-red-400"]},"vira-red-behind-fg-header":{background:d["vira-red-500"]},"vira-red-behind-fg-placeholder":{background:d["vira-red-650"]},"vira-red-behind-fg-decoration":{background:d["vira-red-750"]},"vira-red-behind-fg-invisible":{background:d["vira-red-1000"]},"vira-red-on-self-small-body":{foreground:d["vira-red-850"],background:d["vira-red-100"]},"vira-red-on-self-body":{foreground:d["vira-red-850"],background:d["vira-red-250"]},"vira-red-on-self-non-body":{foreground:d["vira-red-850"],background:d["vira-red-350"]},"vira-red-on-self-header":{foreground:d["vira-red-850"],background:d["vira-red-450"]},"vira-red-on-self-placeholder":{foreground:d["vira-red-850"],background:d["vira-red-500"]},"vira-red-on-self-decoration":{foreground:d["vira-red-850"],background:d["vira-red-650"]},"vira-red-on-self-invisible":{foreground:d["vira-red-850"],background:d["vira-red-1000"]},"vira-yellow-foreground-small-body":{foreground:d["vira-yellow-1000"]},"vira-yellow-foreground-body":{foreground:d["vira-yellow-750"]},"vira-yellow-foreground-non-body":{foreground:d["vira-yellow-650"]},"vira-yellow-foreground-header":{foreground:d["vira-yellow-500"]},"vira-yellow-foreground-placeholder":{foreground:d["vira-yellow-400"]},"vira-yellow-foreground-decoration":{foreground:d["vira-yellow-350"]},"vira-yellow-foreground-invisible":{foreground:d["vira-yellow-250"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-1000"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-700"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-600"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-450"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-400"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-350"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-yellow-250"]},"vira-yellow-behind-fg-small-body":{background:d["vira-yellow-250"]},"vira-yellow-behind-fg-body":{background:d["vira-yellow-350"]},"vira-yellow-behind-fg-non-body":{background:d["vira-yellow-400"]},"vira-yellow-behind-fg-header":{background:d["vira-yellow-500"]},"vira-yellow-behind-fg-placeholder":{background:d["vira-yellow-650"]},"vira-yellow-behind-fg-decoration":{background:d["vira-yellow-750"]},"vira-yellow-behind-fg-invisible":{background:d["vira-yellow-1000"]},"vira-yellow-on-self-small-body":{foreground:d["vira-yellow-850"],background:d["vira-yellow-100"]},"vira-yellow-on-self-body":{foreground:d["vira-yellow-850"],background:d["vira-yellow-300"]},"vira-yellow-on-self-non-body":{foreground:d["vira-yellow-850"],background:d["vira-yellow-350"]},"vira-yellow-on-self-header":{foreground:d["vira-yellow-850"],background:d["vira-yellow-450"]},"vira-yellow-on-self-placeholder":{foreground:d["vira-yellow-850"],background:d["vira-yellow-550"]},"vira-yellow-on-self-decoration":{foreground:d["vira-yellow-850"],background:d["vira-yellow-650"]},"vira-yellow-on-self-invisible":{foreground:d["vira-yellow-850"],background:d["vira-yellow-1000"]},"vira-green-foreground-small-body":{foreground:d["vira-green-1000"]},"vira-green-foreground-body":{foreground:d["vira-green-800"]},"vira-green-foreground-non-body":{foreground:d["vira-green-650"]},"vira-green-foreground-header":{foreground:d["vira-green-550"]},"vira-green-foreground-placeholder":{foreground:d["vira-green-450"]},"vira-green-foreground-decoration":{foreground:d["vira-green-350"]},"vira-green-foreground-invisible":{foreground:d["vira-green-250"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-green-1000"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-green-750"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-green-650"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-green-500"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-green-400"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-green-350"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-green-250"]},"vira-green-behind-fg-small-body":{background:d["vira-green-250"]},"vira-green-behind-fg-body":{background:d["vira-green-350"]},"vira-green-behind-fg-non-body":{background:d["vira-green-450"]},"vira-green-behind-fg-header":{background:d["vira-green-550"]},"vira-green-behind-fg-placeholder":{background:d["vira-green-650"]},"vira-green-behind-fg-decoration":{background:d["vira-green-800"]},"vira-green-behind-fg-invisible":{background:d["vira-green-1000"]},"vira-green-on-self-small-body":{foreground:d["vira-green-850"],background:d["vira-green-100"]},"vira-green-on-self-body":{foreground:d["vira-green-850"],background:d["vira-green-300"]},"vira-green-on-self-non-body":{foreground:d["vira-green-850"],background:d["vira-green-400"]},"vira-green-on-self-header":{foreground:d["vira-green-850"],background:d["vira-green-450"]},"vira-green-on-self-placeholder":{foreground:d["vira-green-850"],background:d["vira-green-550"]},"vira-green-on-self-decoration":{foreground:d["vira-green-850"],background:d["vira-green-700"]},"vira-green-on-self-invisible":{foreground:d["vira-green-850"],background:d["vira-green-1000"]},"vira-teal-foreground-small-body":{foreground:d["vira-teal-1000"]},"vira-teal-foreground-body":{foreground:d["vira-teal-800"]},"vira-teal-foreground-non-body":{foreground:d["vira-teal-650"]},"vira-teal-foreground-header":{foreground:d["vira-teal-550"]},"vira-teal-foreground-placeholder":{foreground:d["vira-teal-450"]},"vira-teal-foreground-decoration":{foreground:d["vira-teal-350"]},"vira-teal-foreground-invisible":{foreground:d["vira-teal-250"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-teal-1000"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-teal-750"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-teal-600"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-teal-500"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-teal-400"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-teal-350"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-teal-250"]},"vira-teal-behind-fg-small-body":{background:d["vira-teal-250"]},"vira-teal-behind-fg-body":{background:d["vira-teal-350"]},"vira-teal-behind-fg-non-body":{background:d["vira-teal-450"]},"vira-teal-behind-fg-header":{background:d["vira-teal-500"]},"vira-teal-behind-fg-placeholder":{background:d["vira-teal-650"]},"vira-teal-behind-fg-decoration":{background:d["vira-teal-750"]},"vira-teal-behind-fg-invisible":{background:d["vira-teal-1000"]},"vira-teal-on-self-small-body":{foreground:d["vira-teal-850"],background:d["vira-teal-100"]},"vira-teal-on-self-body":{foreground:d["vira-teal-850"],background:d["vira-teal-300"]},"vira-teal-on-self-non-body":{foreground:d["vira-teal-850"],background:d["vira-teal-400"]},"vira-teal-on-self-header":{foreground:d["vira-teal-850"],background:d["vira-teal-450"]},"vira-teal-on-self-placeholder":{foreground:d["vira-teal-850"],background:d["vira-teal-550"]},"vira-teal-on-self-decoration":{foreground:d["vira-teal-850"],background:d["vira-teal-700"]},"vira-teal-on-self-invisible":{foreground:d["vira-teal-850"],background:d["vira-teal-1000"]},"vira-blue-foreground-small-body":{foreground:d["vira-blue-1000"]},"vira-blue-foreground-body":{foreground:d["vira-blue-750"]},"vira-blue-foreground-non-body":{foreground:d["vira-blue-650"]},"vira-blue-foreground-header":{foreground:d["vira-blue-500"]},"vira-blue-foreground-placeholder":{foreground:d["vira-blue-450"]},"vira-blue-foreground-decoration":{foreground:d["vira-blue-350"]},"vira-blue-foreground-invisible":{foreground:d["vira-blue-250"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-blue-1000"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-blue-750"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-blue-600"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-blue-450"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-blue-400"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-blue-350"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-blue-250"]},"vira-blue-behind-fg-small-body":{background:d["vira-blue-250"]},"vira-blue-behind-fg-body":{background:d["vira-blue-350"]},"vira-blue-behind-fg-non-body":{background:d["vira-blue-400"]},"vira-blue-behind-fg-header":{background:d["vira-blue-500"]},"vira-blue-behind-fg-placeholder":{background:d["vira-blue-650"]},"vira-blue-behind-fg-decoration":{background:d["vira-blue-750"]},"vira-blue-behind-fg-invisible":{background:d["vira-blue-1000"]},"vira-blue-on-self-small-body":{foreground:d["vira-blue-850"],background:d["vira-blue-100"]},"vira-blue-on-self-body":{foreground:d["vira-blue-850"],background:d["vira-blue-300"]},"vira-blue-on-self-non-body":{foreground:d["vira-blue-850"],background:d["vira-blue-350"]},"vira-blue-on-self-header":{foreground:d["vira-blue-850"],background:d["vira-blue-450"]},"vira-blue-on-self-placeholder":{foreground:d["vira-blue-850"],background:d["vira-blue-550"]},"vira-blue-on-self-decoration":{foreground:d["vira-blue-850"],background:d["vira-blue-650"]},"vira-blue-on-self-invisible":{foreground:d["vira-blue-850"],background:d["vira-blue-1000"]},"vira-accent-foreground-small-body":{foreground:d["vira-accent-1000"]},"vira-accent-foreground-body":{foreground:d["vira-accent-750"]},"vira-accent-foreground-non-body":{foreground:d["vira-accent-650"]},"vira-accent-foreground-header":{foreground:d["vira-accent-500"]},"vira-accent-foreground-placeholder":{foreground:d["vira-accent-450"]},"vira-accent-foreground-decoration":{foreground:d["vira-accent-350"]},"vira-accent-foreground-invisible":{foreground:d["vira-accent-250"]},"vira-accent-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-accent-1000"]},"vira-accent-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-accent-750"]},"vira-accent-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-accent-600"]},"vira-accent-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-accent-450"]},"vira-accent-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-accent-400"]},"vira-accent-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-accent-350"]},"vira-accent-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-accent-250"]},"vira-accent-behind-fg-small-body":{background:d["vira-accent-250"]},"vira-accent-behind-fg-body":{background:d["vira-accent-350"]},"vira-accent-behind-fg-non-body":{background:d["vira-accent-400"]},"vira-accent-behind-fg-header":{background:d["vira-accent-500"]},"vira-accent-behind-fg-placeholder":{background:d["vira-accent-650"]},"vira-accent-behind-fg-decoration":{background:d["vira-accent-750"]},"vira-accent-behind-fg-invisible":{background:d["vira-accent-1000"]},"vira-accent-on-self-small-body":{foreground:d["vira-accent-850"],background:d["vira-accent-100"]},"vira-accent-on-self-body":{foreground:d["vira-accent-850"],background:d["vira-accent-300"]},"vira-accent-on-self-non-body":{foreground:d["vira-accent-850"],background:d["vira-accent-350"]},"vira-accent-on-self-header":{foreground:d["vira-accent-850"],background:d["vira-accent-450"]},"vira-accent-on-self-placeholder":{foreground:d["vira-accent-850"],background:d["vira-accent-550"]},"vira-accent-on-self-decoration":{foreground:d["vira-accent-850"],background:d["vira-accent-650"]},"vira-accent-on-self-invisible":{foreground:d["vira-accent-850"],background:d["vira-accent-1000"]},"vira-purple-foreground-small-body":{foreground:d["vira-purple-1000"]},"vira-purple-foreground-body":{foreground:d["vira-purple-750"]},"vira-purple-foreground-non-body":{foreground:d["vira-purple-650"]},"vira-purple-foreground-header":{foreground:d["vira-purple-500"]},"vira-purple-foreground-placeholder":{foreground:d["vira-purple-400"]},"vira-purple-foreground-decoration":{foreground:d["vira-purple-350"]},"vira-purple-foreground-invisible":{foreground:d["vira-purple-250"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-purple-1000"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-purple-700"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-purple-600"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-purple-450"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-purple-400"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-purple-350"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-purple-200"]},"vira-purple-behind-fg-small-body":{background:d["vira-purple-250"]},"vira-purple-behind-fg-body":{background:d["vira-purple-350"]},"vira-purple-behind-fg-non-body":{background:d["vira-purple-400"]},"vira-purple-behind-fg-header":{background:d["vira-purple-500"]},"vira-purple-behind-fg-placeholder":{background:d["vira-purple-600"]},"vira-purple-behind-fg-decoration":{background:d["vira-purple-750"]},"vira-purple-behind-fg-invisible":{background:d["vira-purple-1000"]},"vira-purple-on-self-small-body":{foreground:d["vira-purple-850"],background:d["vira-purple-100"]},"vira-purple-on-self-body":{foreground:d["vira-purple-850"],background:d["vira-purple-300"]},"vira-purple-on-self-non-body":{foreground:d["vira-purple-850"],background:d["vira-purple-350"]},"vira-purple-on-self-header":{foreground:d["vira-purple-850"],background:d["vira-purple-450"]},"vira-purple-on-self-placeholder":{foreground:d["vira-purple-850"],background:d["vira-purple-500"]},"vira-purple-on-self-decoration":{foreground:d["vira-purple-850"],background:d["vira-purple-650"]},"vira-purple-on-self-invisible":{foreground:d["vira-purple-850"],background:d["vira-purple-1000"]},"vira-pink-foreground-small-body":{foreground:d["vira-pink-1000"]},"vira-pink-foreground-body":{foreground:d["vira-pink-750"]},"vira-pink-foreground-non-body":{foreground:d["vira-pink-650"]},"vira-pink-foreground-header":{foreground:d["vira-pink-500"]},"vira-pink-foreground-placeholder":{foreground:d["vira-pink-400"]},"vira-pink-foreground-decoration":{foreground:d["vira-pink-350"]},"vira-pink-foreground-invisible":{foreground:d["vira-pink-250"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-pink-1000"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-pink-700"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-pink-550"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-pink-450"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-pink-400"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-pink-350"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-pink-200"]},"vira-pink-behind-fg-small-body":{background:d["vira-pink-200"]},"vira-pink-behind-fg-body":{background:d["vira-pink-350"]},"vira-pink-behind-fg-non-body":{background:d["vira-pink-400"]},"vira-pink-behind-fg-header":{background:d["vira-pink-500"]},"vira-pink-behind-fg-placeholder":{background:d["vira-pink-600"]},"vira-pink-behind-fg-decoration":{background:d["vira-pink-750"]},"vira-pink-behind-fg-invisible":{background:d["vira-pink-1000"]},"vira-pink-on-self-small-body":{foreground:d["vira-pink-850"],background:d["vira-pink-100"]},"vira-pink-on-self-body":{foreground:d["vira-pink-850"],background:d["vira-pink-250"]},"vira-pink-on-self-non-body":{foreground:d["vira-pink-850"],background:d["vira-pink-350"]},"vira-pink-on-self-header":{foreground:d["vira-pink-850"],background:d["vira-pink-450"]},"vira-pink-on-self-placeholder":{foreground:d["vira-pink-850"],background:d["vira-pink-500"]},"vira-pink-on-self-decoration":{foreground:d["vira-pink-850"],background:d["vira-pink-650"]},"vira-pink-on-self-invisible":{foreground:d["vira-pink-850"],background:d["vira-pink-1000"]},"vira-grey-foreground-small-body":{foreground:d["vira-grey-1000"]},"vira-grey-foreground-body":{foreground:d["vira-grey-750"]},"vira-grey-foreground-non-body":{foreground:d["vira-grey-650"]},"vira-grey-foreground-header":{foreground:d["vira-grey-500"]},"vira-grey-foreground-placeholder":{foreground:d["vira-grey-450"]},"vira-grey-foreground-decoration":{foreground:d["vira-grey-350"]},"vira-grey-foreground-invisible":{foreground:d["vira-grey-250"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:d["vira-grey-1000"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:d["vira-grey-750"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:d["vira-grey-600"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:d["vira-grey-500"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:d["vira-grey-400"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:d["vira-grey-350"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:d["vira-grey-250"]},"vira-grey-behind-fg-small-body":{background:d["vira-grey-250"]},"vira-grey-behind-fg-body":{background:d["vira-grey-350"]},"vira-grey-behind-fg-non-body":{background:d["vira-grey-400"]},"vira-grey-behind-fg-header":{background:d["vira-grey-500"]},"vira-grey-behind-fg-placeholder":{background:d["vira-grey-650"]},"vira-grey-behind-fg-decoration":{background:d["vira-grey-750"]},"vira-grey-behind-fg-invisible":{background:d["vira-grey-1000"]},"vira-grey-on-self-small-body":{foreground:d["vira-grey-850"],background:d["vira-grey-100"]},"vira-grey-on-self-body":{foreground:d["vira-grey-850"],background:d["vira-grey-300"]},"vira-grey-on-self-non-body":{foreground:d["vira-grey-850"],background:d["vira-grey-350"]},"vira-grey-on-self-header":{foreground:d["vira-grey-850"],background:d["vira-grey-450"]},"vira-grey-on-self-placeholder":{foreground:d["vira-grey-850"],background:d["vira-grey-550"]},"vira-grey-on-self-decoration":{foreground:d["vira-grey-850"],background:d["vira-grey-650"]},"vira-grey-on-self-invisible":{foreground:d["vira-grey-850"],background:d["vira-grey-1000"]}});Qk(Le,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:d["vira-red-250"]},"vira-red-foreground-body":{foreground:d["vira-red-350"]},"vira-red-foreground-non-body":{foreground:d["vira-red-400"]},"vira-red-foreground-header":{foreground:d["vira-red-450"]},"vira-red-foreground-placeholder":{foreground:d["vira-red-600"]},"vira-red-foreground-decoration":{foreground:d["vira-red-750"]},"vira-red-foreground-invisible":{foreground:d["vira-red-1000"]},"vira-red-behind-bg-small-body":{background:d["vira-red-250"]},"vira-red-behind-bg-body":{background:d["vira-red-350"]},"vira-red-behind-bg-non-body":{background:d["vira-red-400"]},"vira-red-behind-bg-header":{background:d["vira-red-500"]},"vira-red-behind-bg-placeholder":{background:d["vira-red-650"]},"vira-red-behind-bg-decoration":{background:d["vira-red-750"]},"vira-red-behind-bg-invisible":{background:d["vira-red-1000"]},"vira-red-behind-fg-small-body":{background:d["vira-red-1000"]},"vira-red-behind-fg-body":{background:d["vira-red-700"]},"vira-red-behind-fg-non-body":{background:d["vira-red-600"]},"vira-red-behind-fg-header":{background:d["vira-red-450"]},"vira-red-behind-fg-placeholder":{background:d["vira-red-400"]},"vira-red-behind-fg-decoration":{background:d["vira-red-350"]},"vira-red-behind-fg-invisible":{background:d["vira-red-200"]},"vira-red-on-self-small-body":{foreground:d["vira-red-200"],background:d["vira-red-1000"]},"vira-red-on-self-body":{foreground:d["vira-red-200"],background:d["vira-red-950"]},"vira-red-on-self-non-body":{foreground:d["vira-red-200"],background:d["vira-red-700"]},"vira-red-on-self-header":{foreground:d["vira-red-200"],background:d["vira-red-550"]},"vira-red-on-self-placeholder":{foreground:d["vira-red-200"],background:d["vira-red-450"]},"vira-red-on-self-decoration":{foreground:d["vira-red-200"],background:d["vira-red-400"]},"vira-red-on-self-invisible":{foreground:d["vira-red-200"],background:d["vira-red-350"]},"vira-yellow-foreground-small-body":{foreground:d["vira-yellow-250"]},"vira-yellow-foreground-body":{foreground:d["vira-yellow-350"]},"vira-yellow-foreground-non-body":{foreground:d["vira-yellow-400"]},"vira-yellow-foreground-placeholder":{foreground:d["vira-yellow-600"]},"vira-yellow-foreground-decoration":{foreground:d["vira-yellow-750"]},"vira-yellow-foreground-invisible":{foreground:d["vira-yellow-1000"]},"vira-yellow-behind-bg-small-body":{background:d["vira-yellow-250"]},"vira-yellow-behind-bg-body":{background:d["vira-yellow-350"]},"vira-yellow-behind-bg-non-body":{background:d["vira-yellow-400"]},"vira-yellow-behind-bg-header":{background:d["vira-yellow-500"]},"vira-yellow-behind-bg-placeholder":{background:d["vira-yellow-650"]},"vira-yellow-behind-bg-decoration":{background:d["vira-yellow-750"]},"vira-yellow-behind-bg-invisible":{background:d["vira-yellow-1000"]},"vira-yellow-behind-fg-small-body":{background:d["vira-yellow-1000"]},"vira-yellow-behind-fg-body":{background:d["vira-yellow-700"]},"vira-yellow-behind-fg-non-body":{background:d["vira-yellow-600"]},"vira-yellow-behind-fg-header":{background:d["vira-yellow-450"]},"vira-yellow-behind-fg-placeholder":{background:d["vira-yellow-400"]},"vira-yellow-behind-fg-decoration":{background:d["vira-yellow-350"]},"vira-yellow-behind-fg-invisible":{background:d["vira-yellow-250"]},"vira-yellow-on-self-small-body":{foreground:d["vira-yellow-200"],background:d["vira-yellow-1000"]},"vira-yellow-on-self-body":{foreground:d["vira-yellow-200"],background:d["vira-yellow-900"]},"vira-yellow-on-self-non-body":{foreground:d["vira-yellow-200"],background:d["vira-yellow-700"]},"vira-yellow-on-self-header":{foreground:d["vira-yellow-200"],background:d["vira-yellow-550"]},"vira-yellow-on-self-placeholder":{foreground:d["vira-yellow-200"],background:d["vira-yellow-450"]},"vira-yellow-on-self-decoration":{foreground:d["vira-yellow-200"],background:d["vira-yellow-400"]},"vira-yellow-on-self-invisible":{foreground:d["vira-yellow-200"],background:d["vira-yellow-350"]},"vira-green-foreground-small-body":{foreground:d["vira-green-250"]},"vira-green-foreground-body":{foreground:d["vira-green-350"]},"vira-green-foreground-non-body":{foreground:d["vira-green-450"]},"vira-green-foreground-header":{foreground:d["vira-green-500"]},"vira-green-foreground-placeholder":{foreground:d["vira-green-650"]},"vira-green-foreground-decoration":{foreground:d["vira-green-750"]},"vira-green-foreground-invisible":{foreground:d["vira-green-1000"]},"vira-green-behind-bg-small-body":{background:d["vira-green-250"]},"vira-green-behind-bg-body":{background:d["vira-green-350"]},"vira-green-behind-bg-non-body":{background:d["vira-green-450"]},"vira-green-behind-bg-header":{background:d["vira-green-550"]},"vira-green-behind-bg-placeholder":{background:d["vira-green-650"]},"vira-green-behind-bg-decoration":{background:d["vira-green-800"]},"vira-green-behind-bg-invisible":{background:d["vira-green-1000"]},"vira-green-behind-fg-small-body":{background:d["vira-green-1000"]},"vira-green-behind-fg-body":{background:d["vira-green-750"]},"vira-green-behind-fg-non-body":{background:d["vira-green-650"]},"vira-green-behind-fg-header":{background:d["vira-green-500"]},"vira-green-behind-fg-placeholder":{background:d["vira-green-400"]},"vira-green-behind-fg-decoration":{background:d["vira-green-350"]},"vira-green-behind-fg-invisible":{background:d["vira-green-250"]},"vira-green-on-self-small-body":{foreground:d["vira-green-200"],background:d["vira-green-1000"]},"vira-green-on-self-body":{foreground:d["vira-green-200"],background:d["vira-green-900"]},"vira-green-on-self-non-body":{foreground:d["vira-green-200"],background:d["vira-green-700"]},"vira-green-on-self-header":{foreground:d["vira-green-200"],background:d["vira-green-600"]},"vira-green-on-self-placeholder":{foreground:d["vira-green-200"],background:d["vira-green-450"]},"vira-green-on-self-decoration":{foreground:d["vira-green-200"],background:d["vira-green-400"]},"vira-green-on-self-invisible":{foreground:d["vira-green-200"],background:d["vira-green-350"]},"vira-teal-foreground-small-body":{foreground:d["vira-teal-250"]},"vira-teal-foreground-body":{foreground:d["vira-teal-350"]},"vira-teal-foreground-non-body":{foreground:d["vira-teal-450"]},"vira-teal-foreground-header":{foreground:d["vira-teal-500"]},"vira-teal-foreground-placeholder":{foreground:d["vira-teal-650"]},"vira-teal-foreground-decoration":{foreground:d["vira-teal-750"]},"vira-teal-foreground-invisible":{foreground:d["vira-teal-1000"]},"vira-teal-behind-bg-small-body":{background:d["vira-teal-250"]},"vira-teal-behind-bg-body":{background:d["vira-teal-350"]},"vira-teal-behind-bg-non-body":{background:d["vira-teal-450"]},"vira-teal-behind-bg-placeholder":{background:d["vira-teal-650"]},"vira-teal-behind-bg-decoration":{background:d["vira-teal-750"]},"vira-teal-behind-bg-invisible":{background:d["vira-teal-1000"]},"vira-teal-behind-fg-small-body":{background:d["vira-teal-1000"]},"vira-teal-behind-fg-body":{background:d["vira-teal-750"]},"vira-teal-behind-fg-non-body":{background:d["vira-teal-600"]},"vira-teal-behind-fg-placeholder":{background:d["vira-teal-400"]},"vira-teal-behind-fg-decoration":{background:d["vira-teal-350"]},"vira-teal-behind-fg-invisible":{background:d["vira-teal-250"]},"vira-teal-on-self-small-body":{foreground:d["vira-teal-200"],background:d["vira-teal-1000"]},"vira-teal-on-self-body":{foreground:d["vira-teal-200"],background:d["vira-teal-900"]},"vira-teal-on-self-non-body":{foreground:d["vira-teal-200"],background:d["vira-teal-700"]},"vira-teal-on-self-header":{foreground:d["vira-teal-200"],background:d["vira-teal-600"]},"vira-teal-on-self-placeholder":{foreground:d["vira-teal-200"],background:d["vira-teal-450"]},"vira-teal-on-self-decoration":{foreground:d["vira-teal-200"],background:d["vira-teal-400"]},"vira-teal-on-self-invisible":{foreground:d["vira-teal-200"],background:d["vira-teal-350"]},"vira-blue-foreground-small-body":{foreground:d["vira-blue-250"]},"vira-blue-foreground-body":{foreground:d["vira-blue-350"]},"vira-blue-foreground-non-body":{foreground:d["vira-blue-400"]},"vira-blue-foreground-placeholder":{foreground:d["vira-blue-600"]},"vira-blue-foreground-decoration":{foreground:d["vira-blue-750"]},"vira-blue-foreground-invisible":{foreground:d["vira-blue-1000"]},"vira-blue-behind-bg-small-body":{background:d["vira-blue-250"]},"vira-blue-behind-bg-body":{background:d["vira-blue-350"]},"vira-blue-behind-bg-non-body":{background:d["vira-blue-400"]},"vira-blue-behind-bg-header":{background:d["vira-blue-500"]},"vira-blue-behind-bg-placeholder":{background:d["vira-blue-650"]},"vira-blue-behind-bg-decoration":{background:d["vira-blue-750"]},"vira-blue-behind-bg-invisible":{background:d["vira-blue-1000"]},"vira-blue-behind-fg-small-body":{background:d["vira-blue-1000"]},"vira-blue-behind-fg-body":{background:d["vira-blue-750"]},"vira-blue-behind-fg-non-body":{background:d["vira-blue-600"]},"vira-blue-behind-fg-header":{background:d["vira-blue-450"]},"vira-blue-behind-fg-placeholder":{background:d["vira-blue-400"]},"vira-blue-behind-fg-decoration":{background:d["vira-blue-350"]},"vira-blue-behind-fg-invisible":{background:d["vira-blue-250"]},"vira-blue-on-self-small-body":{foreground:d["vira-blue-200"],background:d["vira-blue-1000"]},"vira-blue-on-self-body":{foreground:d["vira-blue-200"],background:d["vira-blue-900"]},"vira-blue-on-self-non-body":{foreground:d["vira-blue-200"],background:d["vira-blue-700"]},"vira-blue-on-self-header":{foreground:d["vira-blue-200"],background:d["vira-blue-550"]},"vira-blue-on-self-placeholder":{foreground:d["vira-blue-200"],background:d["vira-blue-450"]},"vira-blue-on-self-decoration":{foreground:d["vira-blue-200"],background:d["vira-blue-400"]},"vira-blue-on-self-invisible":{foreground:d["vira-blue-200"],background:d["vira-blue-350"]},"vira-accent-foreground-small-body":{foreground:d["vira-accent-250"]},"vira-accent-foreground-body":{foreground:d["vira-accent-350"]},"vira-accent-foreground-non-body":{foreground:d["vira-accent-400"]},"vira-accent-foreground-placeholder":{foreground:d["vira-accent-600"]},"vira-accent-foreground-decoration":{foreground:d["vira-accent-750"]},"vira-accent-foreground-invisible":{foreground:d["vira-accent-1000"]},"vira-accent-behind-bg-small-body":{background:d["vira-accent-250"]},"vira-accent-behind-bg-body":{background:d["vira-accent-350"]},"vira-accent-behind-bg-non-body":{background:d["vira-accent-400"]},"vira-accent-behind-bg-header":{background:d["vira-accent-500"]},"vira-accent-behind-bg-placeholder":{background:d["vira-accent-650"]},"vira-accent-behind-bg-decoration":{background:d["vira-accent-750"]},"vira-accent-behind-bg-invisible":{background:d["vira-accent-1000"]},"vira-accent-behind-fg-small-body":{background:d["vira-accent-1000"]},"vira-accent-behind-fg-body":{background:d["vira-accent-750"]},"vira-accent-behind-fg-non-body":{background:d["vira-accent-600"]},"vira-accent-behind-fg-header":{background:d["vira-accent-450"]},"vira-accent-behind-fg-placeholder":{background:d["vira-accent-400"]},"vira-accent-behind-fg-decoration":{background:d["vira-accent-350"]},"vira-accent-behind-fg-invisible":{background:d["vira-accent-250"]},"vira-accent-on-self-small-body":{foreground:d["vira-accent-200"],background:d["vira-accent-1000"]},"vira-accent-on-self-body":{foreground:d["vira-accent-200"],background:d["vira-accent-900"]},"vira-accent-on-self-non-body":{foreground:d["vira-accent-200"],background:d["vira-accent-700"]},"vira-accent-on-self-header":{foreground:d["vira-accent-200"],background:d["vira-accent-550"]},"vira-accent-on-self-placeholder":{foreground:d["vira-accent-200"],background:d["vira-accent-450"]},"vira-accent-on-self-decoration":{foreground:d["vira-accent-200"],background:d["vira-accent-400"]},"vira-accent-on-self-invisible":{foreground:d["vira-accent-200"],background:d["vira-accent-350"]},"vira-purple-foreground-small-body":{foreground:d["vira-purple-250"]},"vira-purple-foreground-body":{foreground:d["vira-purple-350"]},"vira-purple-foreground-non-body":{foreground:d["vira-purple-400"]},"vira-purple-foreground-header":{foreground:d["vira-purple-450"]},"vira-purple-foreground-placeholder":{foreground:d["vira-purple-600"]},"vira-purple-foreground-decoration":{foreground:d["vira-purple-750"]},"vira-purple-foreground-invisible":{foreground:d["vira-purple-1000"]},"vira-purple-behind-bg-small-body":{background:d["vira-purple-250"]},"vira-purple-behind-bg-body":{background:d["vira-purple-350"]},"vira-purple-behind-bg-non-body":{background:d["vira-purple-400"]},"vira-purple-behind-bg-header":{background:d["vira-purple-500"]},"vira-purple-behind-bg-placeholder":{background:d["vira-purple-600"]},"vira-purple-behind-bg-decoration":{background:d["vira-purple-750"]},"vira-purple-behind-bg-invisible":{background:d["vira-purple-1000"]},"vira-purple-behind-fg-small-body":{background:d["vira-purple-1000"]},"vira-purple-behind-fg-body":{background:d["vira-purple-700"]},"vira-purple-behind-fg-non-body":{background:d["vira-purple-600"]},"vira-purple-behind-fg-header":{background:d["vira-purple-450"]},"vira-purple-behind-fg-placeholder":{background:d["vira-purple-400"]},"vira-purple-behind-fg-decoration":{background:d["vira-purple-350"]},"vira-purple-behind-fg-invisible":{background:d["vira-purple-200"]},"vira-purple-on-self-small-body":{foreground:d["vira-purple-200"],background:d["vira-purple-1000"]},"vira-purple-on-self-body":{foreground:d["vira-purple-200"],background:d["vira-purple-900"]},"vira-purple-on-self-non-body":{foreground:d["vira-purple-200"],background:d["vira-purple-700"]},"vira-purple-on-self-header":{foreground:d["vira-purple-200"],background:d["vira-purple-550"]},"vira-purple-on-self-placeholder":{foreground:d["vira-purple-200"],background:d["vira-purple-450"]},"vira-purple-on-self-decoration":{foreground:d["vira-purple-200"],background:d["vira-purple-400"]},"vira-purple-on-self-invisible":{foreground:d["vira-purple-200"],background:d["vira-purple-350"]},"vira-pink-foreground-small-body":{foreground:d["vira-pink-200"]},"vira-pink-foreground-body":{foreground:d["vira-pink-350"]},"vira-pink-foreground-non-body":{foreground:d["vira-pink-400"]},"vira-pink-foreground-header":{foreground:d["vira-pink-450"]},"vira-pink-foreground-placeholder":{foreground:d["vira-pink-600"]},"vira-pink-foreground-decoration":{foreground:d["vira-pink-750"]},"vira-pink-foreground-invisible":{foreground:d["vira-pink-1000"]},"vira-pink-behind-bg-small-body":{background:d["vira-pink-200"]},"vira-pink-behind-bg-body":{background:d["vira-pink-350"]},"vira-pink-behind-bg-non-body":{background:d["vira-pink-400"]},"vira-pink-behind-bg-header":{background:d["vira-pink-500"]},"vira-pink-behind-bg-placeholder":{background:d["vira-pink-600"]},"vira-pink-behind-bg-decoration":{background:d["vira-pink-750"]},"vira-pink-behind-bg-invisible":{background:d["vira-pink-1000"]},"vira-pink-behind-fg-small-body":{background:d["vira-pink-1000"]},"vira-pink-behind-fg-body":{background:d["vira-pink-700"]},"vira-pink-behind-fg-non-body":{background:d["vira-pink-550"]},"vira-pink-behind-fg-header":{background:d["vira-pink-450"]},"vira-pink-behind-fg-placeholder":{background:d["vira-pink-400"]},"vira-pink-behind-fg-decoration":{background:d["vira-pink-350"]},"vira-pink-behind-fg-invisible":{background:d["vira-pink-200"]},"vira-pink-on-self-small-body":{foreground:d["vira-pink-200"],background:d["vira-pink-1000"]},"vira-pink-on-self-body":{foreground:d["vira-pink-200"],background:d["vira-pink-950"]},"vira-pink-on-self-non-body":{foreground:d["vira-pink-200"],background:d["vira-pink-700"]},"vira-pink-on-self-header":{foreground:d["vira-pink-200"],background:d["vira-pink-550"]},"vira-pink-on-self-placeholder":{foreground:d["vira-pink-200"],background:d["vira-pink-450"]},"vira-pink-on-self-decoration":{foreground:d["vira-pink-200"],background:d["vira-pink-400"]},"vira-pink-on-self-invisible":{foreground:d["vira-pink-200"],background:d["vira-pink-300"]},"vira-grey-foreground-small-body":{foreground:d["vira-grey-250"]},"vira-grey-foreground-body":{foreground:d["vira-grey-350"]},"vira-grey-foreground-non-body":{foreground:d["vira-grey-400"]},"vira-grey-foreground-placeholder":{foreground:d["vira-grey-600"]},"vira-grey-foreground-decoration":{foreground:d["vira-grey-750"]},"vira-grey-foreground-invisible":{foreground:d["vira-grey-1000"]},"vira-grey-behind-bg-small-body":{background:d["vira-grey-250"]},"vira-grey-behind-bg-body":{background:d["vira-grey-350"]},"vira-grey-behind-bg-non-body":{background:d["vira-grey-400"]},"vira-grey-behind-bg-placeholder":{background:d["vira-grey-650"]},"vira-grey-behind-bg-decoration":{background:d["vira-grey-750"]},"vira-grey-behind-bg-invisible":{background:d["vira-grey-1000"]},"vira-grey-behind-fg-small-body":{background:d["vira-grey-1000"]},"vira-grey-behind-fg-body":{background:d["vira-grey-750"]},"vira-grey-behind-fg-non-body":{background:d["vira-grey-600"]},"vira-grey-behind-fg-placeholder":{background:d["vira-grey-400"]},"vira-grey-behind-fg-decoration":{background:d["vira-grey-350"]},"vira-grey-behind-fg-invisible":{background:d["vira-grey-250"]},"vira-grey-on-self-small-body":{foreground:d["vira-grey-200"],background:d["vira-grey-1000"]},"vira-grey-on-self-body":{foreground:d["vira-grey-200"],background:d["vira-grey-900"]},"vira-grey-on-self-non-body":{foreground:d["vira-grey-200"],background:d["vira-grey-700"]},"vira-grey-on-self-header":{foreground:d["vira-grey-200"],background:d["vira-grey-600"]},"vira-grey-on-self-placeholder":{foreground:d["vira-grey-200"],background:d["vira-grey-450"]},"vira-grey-on-self-decoration":{foreground:d["vira-grey-200"],background:d["vira-grey-400"]},"vira-grey-on-self-invisible":{foreground:d["vira-grey-200"],background:d["vira-grey-350"]}}});const ey="8px",Ge=Pt({"vira-form-border-color":Le.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":Le.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":Le.colors[Ze].background.value,"vira-form-foreground-color":Le.colors[Ze].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":Le.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":Le.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":Le.colors["vira-accent-behind-bg-invisible"].background.value,"vira-form-selection-active-color":Le.colors["vira-accent-behind-bg-decoration"].background.value,"vira-form-error-color":Le.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":Le.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":Le.colors["vira-red-behind-bg-body"].background.value,"vira-form-warning-color":Le.colors["vira-yellow-behind-bg-non-body"].background.value,"vira-form-warning-hover-color":Le.colors["vira-yellow-behind-bg-header"].background.value,"vira-form-warning-active-color":Le.colors["vira-yellow-behind-bg-body"].background.value,"vira-form-positive-color":Le.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-positive-hover-color":Le.colors["vira-green-behind-bg-header"].background.value,"vira-form-positive-active-color":Le.colors["vira-green-behind-bg-body"].background.value,"vira-form-success-color":Le.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":ey,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":Le.colors["vira-accent-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":k`calc(var(--vira-form-radius, ${Oe(ey)}) + 2px)`,"vira-form-plain-color":d["vira-grey-100"].value,"vira-form-plain-hover-color":Le.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":Le.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":Le.colors["vira-accent-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":Le.colors["vira-accent-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":Le.colors["vira-accent-behind-bg-body"].background.value,"vira-form-danger-color":Le.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":Le.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":Le.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":Le.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":Le.colors["vira-grey-foreground-decoration"].foreground.value});function Qn(e){return S.isString(e)?Oe(e):e.value}i(Qn,"cssValueOrRaw");function ed({elementBorderSize:e="1px",outlineGap:r="2px",outlineWidth:t="2px",noNesting:n,outlineColor:o=Ge["vira-form-focus-outline-color"],borderRadius:a=Ge["vira-form-focus-outline-border-radius"],renderInside:s}={}){const l=k`calc(${Qn(r)})`,u=k`calc(${Qn(t)} + ${Qn(r)} + ${Qn(e)})`,f=s?k`
              content: '';
              top: ${l};
              left: ${l};
              position: absolute;
              width: calc(100% - calc(${l} * 2));
              height: calc(100% - calc(${l} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${Qn(t)} solid ${Qn(o)};
              border-radius: ${Qn(a)};
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
              border: ${Qn(t)} solid ${Qn(o)};
              border-radius: ${Qn(a)};
              z-index: 100;
          `;return n?f:k`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${f}
        }
    `}i(ed,"createFocusStyles");const rd=k`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,gm=Pt({"vira-monospace":"monospace"}),ry=Pt({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),vR={menuShadow:k`
        filter: drop-shadow(0px 5px 5px ${ry["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:k`
        box-shadow: 0 5px 15px ${ry["modal-shadow-color"].value};
    `},eh=k`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,ty="vira-",mf=Up({assertInputs:i(e=>{if(!e.tagName.startsWith(ty))throw new Error(`Tag name should start with '${ty}' but got '${e.tagName}'`)},"assertInputs")});function rh({input:e,matcher:r}){return!e||!r?!0:e.length>1?e.split("").every(t=>rh({input:t,matcher:r})):r instanceof RegExp?!!e.match(r):r.includes(e)}i(rh,"doesMatch");function yR({value:e,allowed:r,blocked:t}){const n=String(e),o=r?rh({input:n,matcher:r}):!0,a=t?rh({input:n,matcher:t}):!1;return o&&!a}i(yR,"isAllowed");function th(e){const r=String(e.value);if(!e.value)return{filtered:r,blocked:""};const{filtered:t,blocked:n}=r.split("").reduce((o,a)=>(yR({...e,value:a})?o.filtered.push(a):o.blocked.push(a),o),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}i(th,"filterTextInputValue");function wR({inputs:e,previousValue:r,event:t,inputBlockedCallback:n,newValueCallback:o}){const a=ka(t,HTMLInputElement),s=S.hasKey(t,"data")&&dd.isString(t.data)||"";if(s){const{blocked:u}=th({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const l=th({value:a.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;a.value!==l&&(a.value=l),r!==l&&o(l)}i(wR,"textInputListener");const ut=mf()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":i(({inputs:e})=>!!e.fitContainer||!!e.icon?.size,"vira-icon-fit-container")},styles:i(({hostClasses:e})=>k`
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
    `,"styles"),render({inputs:e,host:r}){if(e.icon)e.icon.size&&(r.style.width=li(e.icon.size),r.style.height=li(e.icon.size));else return"";return e.icon.svgTemplate}});var Yi;(function(e){e.Default="text",e.Password="password",e.Email="email",e.Number="number"})(Yi||(Yi={}));const ei=mf()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:i(({hostClasses:e,cssVars:r})=>k`
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
                ${eh};
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
                    ${ed({elementBorderSize:"1px",noNesting:!0})}
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
                ${eh};
            }

            button {
                ${Eo};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Dx["vira-interaction-animation-duration"].value};
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
                    ${rd};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,"styles"),events:{valueChange:Re(),inputBlocked:Re()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:To(32)}},hostClasses:{"vira-input-disabled":i(({inputs:e})=>!!e.disabled,"vira-input-disabled"),"vira-input-fit-text":i(({inputs:e})=>!!e.fitText,"vira-input-fit-text"),"vira-input-clear-button-shown":i(({inputs:e})=>!!e.showClearButton,"vira-input-clear-button-shown"),"vira-input-error":i(({inputs:e})=>!!e.hasError,"vira-input-error")},render:i(({inputs:e,dispatch:r,state:t,updateState:n,events:o,host:a})=>{const{filtered:s}=th({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),l=e.icon?b`
                  <${ut.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${ut}>
              `:ee,u=e.fitText?k`
                  width: ${t.forcedInputWidth}px;
              `:ee,f=U("mousedown",p=>{const m=ka(p,HTMLElement,{useOriginalTarget:!0}),v=lr.instanceOf(a.shadowRoot.querySelector("input"),HTMLInputElement);m!==v&&(p.preventDefault(),v.focus())}),g=e.disableBrowserHelps||e.type===Yi.Password,h=b`
            <span class="input-wrapper" ${e.label?ee:f}>
                ${l}
                ${Vr(!!e.fitText,b`
                        <span
                            class="size-span"
                            ${jp(({contentRect:p})=>{n({forcedInputWidth:p.width})})}
                        >
                            <pre>${s||e.placeholder||ee}</pre>
                        </span>
                    `)}

                <input
                    id=${Ue(e.label?t.randomId:void 0)}
                    aria-label=${Ue(e.label||void 0)}
                    autofocus=${!1}
                    type=${kR(e.type,t.showPassword)}
                    style=${u}
                    autocomplete=${Ue(g?"off":void 0)}
                    autocorrect=${Ue(g?"off":void 0)}
                    autocapitalize=${Ue(g?"off":void 0)}
                    spellcheck=${Ue(g?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${U("input",p=>{wR({inputs:e,previousValue:s,event:p,inputBlockedCallback(m){r(new o.inputBlocked(m))},newValueCallback(m){r(new o.valueChange(m))}})})}
                    placeholder=${Ue(e.placeholder||void 0)}
                    ${xn(e.attributePassthrough)}
                />

                ${Vr(!!(e.showClearButton&&e.value),b`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${U("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault()})}
                            ${U("click",()=>{e.disabled||r(new o.valueChange(""))})}
                        >
                            <${ut.assign({icon:hR})}></${ut}>
                        </button>
                    `)}
                ${Vr(e.type===Yi.Password,b`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${U("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault()})}
                            ${U("click",()=>{n({showPassword:!t.showPassword})})}
                        >
                            <${ut.assign({icon:t.showPassword?bR:mR})}></${ut}>
                        </button>
                    `)}
                ${Vr(!!e.suffix,b`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?b`
                <label for=${t.randomId} ${f}>
                    <span class="input-label">${e.label}</span>
                    ${h}
                </label>
            `:h},"render")});function kR(e,r){return e===Yi.Password&&r?Yi.Default:e||Yi.Default}i(kR,"calculateEffectiveInputType");const I0=Zn()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:i(({cssVars:e})=>k`
        :host {
            display: flex;
            align-items: center;
            font-family: ${gm["vira-monospace"].value};
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

        ${ei} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,"styles"),events:{valueChange:Re()},render({inputs:e,events:r,dispatch:t,cssVars:n}){const o=ro[e.colorFormatName],a=o.coords[e.colorCoordinateName];if(!a)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const s=10,l=oD(s,h=>{const p=a.min+(a.max-a.min)*(h/s);return new Mo({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:p}}).toCss()[o.conversionFormat]}),u=k`linear-gradient(to right, ${Oe(l.join(","))})`,f=lr.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),g=a.radix?Math.round(f).toString(a.radix).toUpperCase().padStart(a.radixPad||0,"0"):String(f);return b`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${k`
                    ${n["vir-color-slider-gradient"].name}: ${u};
                `}
                step=${Math.pow(10,a.digits?-a.digits:0)}
                ${qN(h=>{Er.instanceOf(h,HTMLInputElement),h.min=String(a.min),h.max=String(a.max),h.value=String(f)})}
                ${U("input",h=>{const p=ka(h,HTMLInputElement),m=Number(p.value);isNaN(m)||t(new r.valueChange(m))})}
            />
            <${ei.assign({value:g})}
                ${U(ei.events.valueChange,h=>{const p=a.radix?parseInt(h.detail,a.radix):Number(h.detail);isNaN(p)||t(new r.valueChange(p))})}
            ></${ei}>
        `}}),B0=Zn()({tagName:"vir-color-format-sliders",styles:k`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${fm};
        }
    `,events:{colorChange:Re()},render({inputs:e,dispatch:r,events:t}){const n=ro[e.colorFormatName],o=We(n.coords).map(a=>b`
                    <${I0.assign({color:e.color,colorCoordinateName:a,colorFormatName:e.colorFormatName})}
                        ${U(I0.events.valueChange,s=>{const l=e.color.clone();l.set({[e.colorFormatName]:{[a]:s.detail}});const u=l.toCss()[n.conversionFormat];r(new t.colorChange(u))})}
                    ></${I0}>
                `);return b`
            ${e.showFormatName?b`
                      <h3>${e.colorFormatName}</h3>
                  `:ee}
            ${o}
        `}}),O0=Zn()({tagName:"vir-color-swatch",styles:k`
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
    `,render({inputs:e}){const r=e.backgroundColor||e.foregroundColor,t=e.foregroundColor||"transparent";return b`
            <div
                style=${k`
                    background-color: ${Oe(r)};
                    color: ${Oe(t)};
                `}
            >
                <slot></slot>
            </div>
        `}}),R0=Zn()({tagName:"vir-contrast-indicator",styles:k`
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

        .${Oe(te.Invisible)} {
            color: red;
        }
        .${Oe(te.Decoration)} {
            color: #ff6600;
        }
        .${Oe(te.Placeholder)} {
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
    `,render({inputs:e}){const r=Xd.toReversed().slice(1).map(o=>b`
                    <div
                        class="gauge-level ${ot({active:o.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),t=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return b`
            <div title=${t} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${r}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${II[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),ny=Zn()({tagName:"vir-color-pair",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"vir-color-pair-no-contrast-tips":i(({inputs:e,state:r})=>!e.showContrast&&!r.forceShowEverything,"vir-color-pair-no-contrast-tips")},styles:i(({hostClasses:e})=>k`
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
            font-family: ${gm["vira-monospace"].value};
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${fm};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${R0} {
            margin-top: 1px;
        }
    `,"styles"),render({state:e,updateState:r,inputs:t}){const n=["foreground","background"].map(l=>{const u=[t.color[l].name,t.showVarValues||e.forceShowEverything?":":""].filter(S.isTruthy).join(""),f=t.showVarValues||e.forceShowEverything?b`
                          <span>${t.color[l].default}</span>
                      `:ee;return b`
                <p>
                    <span>${u}</span>
                    ${f}
                </p>
            `}),o=t.showVarNames||e.forceShowEverything?b`
                      <div class="css-var-names">${n}</div>
                  `:ee,a=e.previewElement?TI({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,s=a&&(t.showContrast||e.forceShowEverything)?b`
                      <${R0.assign({contrast:a,fontWeight:t.fontWeight})}></${R0}>
                  `:ee;return b`
            <button
                ${U("click",()=>{r({forceShowEverything:!e.forceShowEverything})})}
                ${oa(l=>{r({previewElement:lr.instanceOf(l,HTMLElement)})})}
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
        `}});function oy({open:e,callback:r,popUpManager:t,host:n,options:o}){if(e){const a=t.showPopUp(n,o);r?.(a)}else t.removePopUp(),r?.(void 0)}i(oy,"triggerPopUpState");function nh(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}i(nh,"isInputLikeElement");const iy={top:0,left:0,right:0,bottom:0};class Cx extends gd("hide-pop-up"){static{i(this,"HidePopUpEvent")}}class Ex extends Wt()("nav-select"){static{i(this,"NavSelectEvent")}}class $R{static{i(this,"PopUpManager")}navController;listenTarget=new au;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(r,t){this.navController=r,this.options={...this.options,...t}}attachGlobalListeners(){this.cleanupCallbacks=[u$(!1,r=>{r||this.removePopUp()}),this.navController.listen(Hp,r=>{const t=r.composedPath()[0];t instanceof Element&&nh(t)||r.detail.success&&(this.listenTarget.dispatch(new Ex({detail:r.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),r.stopImmediatePropagation(),r.preventDefault())}),Tl("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Tl("keydown",r=>{const t=r.code;if(t==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=r.composedPath()[0];if(n instanceof Element&&nh(n))return;t==="ArrowDown"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:zt.Down,allowWrapping:!1})):t==="ArrowUp"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:zt.Up,allowWrapping:!1})):t==="ArrowLeft"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:zt.Left,allowWrapping:!1})):t==="ArrowRight"?(r.stopImmediatePropagation(),r.preventDefault(),this.navController.navigate({direction:zt.Right,allowWrapping:!1})):(t==="Enter"||t==="Return"||t==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(r.stopImmediatePropagation(),r.preventDefault())}})]}listen(r,t,n){return this.listenTarget.listen(r,t,n)}removePopUp(){this.cleanupCallbacks.forEach(r=>r()),this.listenTarget.dispatch(new Cx)}showPopUp(r,t){this.lastRootElement=r;const n={...this.options,...t},o=Vk(r);Er.instanceOf(o,HTMLElement);const a=r.getBoundingClientRect(),s=o.getBoundingClientRect(),l=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,f=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-l,bottom:s.bottom-u},g=Ke(iy,v=>a[v]),h=Ke(iy,v=>{const $=f[v],C=g[v];return Math.abs($-C)}),p=h.top>h.bottom+n.verticalDiffThreshold&&h.bottom<n.minDownSpace,m=h.left>h.right+n.horizontalDiffThreshold&&h.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!p,popRight:!m,positions:{container:f,root:g,diff:h}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Go;(function(e){e.Left="left",e.Right="right",e.Both="both",e.Auto="auto"})(Go||(Go={}));const Ys=mf()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new $R(new s$(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":i(({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-disabled"),"vira-pop-up-trigger-inside-focus":i(({inputs:e})=>!!e.useInsideFocus,"vira-pop-up-trigger-inside-focus"),"vira-pop-up-trigger-outside-focus":i(({inputs:e})=>!e.useInsideFocus,"vira-pop-up-trigger-outside-focus")},styles:i(({hostClasses:e})=>k`
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
            ${ed({renderInside:!0})}
        }
        ${e["vira-pop-up-trigger-outside-focus"].selector} .dropdown-wrapper {
            ${ed()}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${eh};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${rd}
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
    `,"styles"),events:{navSelect:Re(),openChange:Re(),init:Re()},cleanup({state:e,updateState:r}){r({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:r,host:t,inputs:n,dispatch:o,events:a}){e.popUpManager.listen(Cx,()=>{if(r({showPopUpResult:void 0}),o(new a.openChange(void 0)),n.focusOnClose&&!n.isDisabled){const s=t.shadowRoot.querySelector(".dropdown-wrapper");Er.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(Ex,s=>{n.keepOpenAfterInteraction||oy({open:!1,callback(l){r({showPopUpResult:l})},host:t,popUpManager:e.popUpManager}),o(new a.navSelect(s.detail))}),o(new a.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:r,state:t,inputs:n,updateState:o,host:a,slotNames:s}){function l({emitEvent:v,open:$},C){if(t.showPopUpResult&&n.keepOpenAfterInteraction&&C){const E=a.shadowRoot.querySelector(".dropdown-trigger");if(E&&!C.composedPath().includes(E))return}oy({open:$,callback(E){o({showPopUpResult:E}),v&&e(new r.openChange(E))},host:a,popUpManager:t.popUpManager})}i(l,"triggerPopUp"),n.isDisabled?l({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&t.showPopUpResult?l({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!t.showPopUpResult&&l({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor===Go.Auto||n.horizontalAnchor===void 0?t.showPopUpResult?.popRight?Go.Left:Go.Right:n.horizontalAnchor,f=u===Go.Right&&t.showPopUpResult?n.ignoreMaxWidth?k`
                          left: unset;
                      `:k`
                          left: -${t.showPopUpResult.positions.diff.left}px;
                      `:k`
                      left: ${n.popUpOffset?.left||0}px;
                  `,g=t.showPopUpResult&&u===Go.Left?n.ignoreMaxWidth?k`
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
                    `:void 0;function m(v){l({emitEvent:!0,open:!t.showPopUpResult},v)}return i(m,"respondToClick"),b`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${ot({open:!!t.showPopUpResult,"open-upwards":!t.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!t.showPopUpResult}
                ${U("keydown",v=>{!t.showPopUpResult&&v.code.startsWith("Arrow")&&l({emitEvent:!0,open:!0},v)})}
                ${U("click",v=>{if(v.detail===0){let $=!1;if(Wk(({element:C})=>nh(C)?($=!0,!0):!1),$)return;m(v)}else if(v.button===0&&t.showPopUpResult){const $=a.shadowRoot.querySelector(".dropdown-trigger");$&&!v.composedPath().includes($)&&l({emitEvent:!0,open:!1},v)}})}
                ${U("mousedown",v=>{if(v.button!==0)return;const $=lr.instanceOf(a.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);v.composedPath().includes($)&&m(v)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${ot({"right-aligned":u===Go.Right})}"
                    style=${p}
                >
                    ${Vr(!!t.showPopUpResult,b`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),L0=mf()({tagName:"vira-select",state(){return{randomId:To(32),cleanupListeners:void 0}},events:{valueChange:Re()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":i(({inputs:e})=>!!e.disabled,"vira-select-disabled"),"vira-select-error":i(({inputs:e})=>!!e.hasError,"vira-select-error"),"vira-select-not-raw":i(({inputs:e})=>!e.rawSelect,"vira-select-not-raw")},styles:i(({hostClasses:e,cssVars:r})=>k`
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
                        ${ed({elementBorderSize:"1px",noNesting:!0})}
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
                        ${Dx["vira-interaction-animation-duration"].value};
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
                ${rd}
            }
            ${ut} {
                ${rd}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${Ge["vira-form-error-color"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t}){e.cleanupListeners?.();const n=[oo(t,"mousedown",o=>{const a=lr.instanceOf(t.shadowRoot.querySelector("select"),HTMLSelectElement);o.composedPath().includes(a)||(o.preventDefault(),o.stopPropagation(),a.showPicker&&a.showPicker())})];r({cleanupListeners:i(()=>{n.forEach(o=>o())},"cleanupListeners")})},cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({inputs:e,state:r,dispatch:t,events:n}){const o=e.value||void 0,a=e.placeholder||o==null?b`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:ee,s=b`
            <span class="select-wrapper">
                <select
                    .value=${Ue(o)}
                    class=${ot({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Ue(e.label?r.randomId:void 0)}
                    aria-label=${Ue(e.label||void 0)}
                    aria-disabled=${Ue(e.disabled?"true":void 0)}
                    ${U("input",l=>{const u=ka(l,HTMLSelectElement),f=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(g=>g.value===o)),t(new n.valueChange(f))})}
                    ${xn(e.attributePassthrough?.select)}
                >
                    ${a}
                    ${e.options.map(l=>b`
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
                <${ut.assign({icon:pR})}
                    class="trigger-icon"
                ></${ut}>
            </span>
        `;return e.label?b`
                <label for=${r.randomId} ${xn(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}});class j0 extends Wt()("local-storage-client-all-values-event"){static{i(this,"LocalStorageClientAllValuesEvent")}}class xR{static{i(this,"LocalStorageClient")}shapes;options;listenTarget=new au;keyEvents;get AllValuesType(){throw new Error("Cannot use AllValuesType as a runtime value. It is a type only.")}get ValueType(){throw new Error("Cannot use ValueType as a runtime value. It is a type only.")}constructor(r,t={}){this.shapes=r,this.options=t,this.storeName=t.storeName||"local-storage-client",this.keyEvents=Ke(r,n=>class extends Wt()(`local-storage-client-${String(n)}-event`){}),this.get=Ke(this.shapes,n=>(o={})=>this.getAllValues(o)[n]),this.listen=Ke(this.shapes,n=>o=>this.listenTarget.listen(this.keyEvents[n],async a=>{await o(a.detail)})),this.set=Ke(this.shapes,n=>o=>{_c(o,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const a=this.getAllValues();return a[n]=o,globalThis.localStorage.setItem(this.storeName,JSON.stringify(a)),this.listenTarget.dispatch(new j0({detail:a})),this.listenTarget.dispatch(new this.keyEvents[n]({detail:o})),o}),this.delete=Ke(this.shapes,n=>()=>{const o=this.getAllValues();delete o[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(o)),this.listenTarget.dispatch(new j0({detail:o})),this.listenTarget.dispatch(new this.keyEvents[n]({detail:void 0}))})}storeName;getAllValues({throwErrorOnFailure:r=!1}={}){return uw(()=>{const t=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return cw(t,(n,o)=>{const a=this.shapes[n];if(a){if(r)_c(o,a,{allowExtraKeys:!0});else if(!Xo(o,a,{allowExtraKeys:!0}))return;return{key:n,value:o}}})},{handleError:i(t=>{if(r)throw la(t,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}},"handleError")})}listenToAllValues(r){return this.listenTarget.listen(j0,async t=>{await r(t.detail)})}listen;get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}destroy(){this.listenTarget.destroy()}}const U0=new xR({lastFormat:ta(pi)}),DR=Qa(pi).map(e=>({value:e,label:e.toUpperCase()})),Js=Zn()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:ts.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:ts.Length}},state(){return{selectedFormatName:U0.get.lastFormat()||pi.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":i(({inputs:e})=>!!e.alwaysShowPicker,"vir-color-picker-always-show")},styles:i(({cssVars:e,hostClasses:r})=>k`
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

        ${Ys} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${O0} {
                width: ${e["vir-color-picker-swatch-width"].value};
                height: ${e["vir-color-picker-swatch-height"].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${gm["vira-monospace"].value};
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
            ${vR.menuShadow}
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

            & ${ei} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,"styles"),events:{colorChange:Re()},render({inputs:e,dispatch:r,events:t,state:n,updateState:o}){const a=Mo.isColor(e.color)?e.color:new Mo(e.color||"black"),s=ro[n.selectedFormatName],l=n.rawInput??a.toCss()[s.rawSyntax],u=b`
            <div class="raw-input-wrapper">
                <${ei.assign({value:l})}
                    ${U(ei.events.valueChange,p=>{const m=p.detail;o({rawInput:m}),Mo.isValidColorString(m)&&r(new t.colorChange(m))})}
                ></${ei}>
                <button
                    class="code-button"
                    ${U("click",async()=>{await globalThis.navigator.clipboard.writeText(l)})}
                >
                    <${ut.assign({icon:Q1,fitContainer:!0})}></${ut}>
                </button>
            </div>
        `,f=b`
            <button
                class="code-button"
                ${U("click",async()=>{await globalThis.navigator.clipboard.writeText(a.hexString)})}
            >
                <span>${a.hexString}</span>
                <${ut.assign({icon:Q1,fitContainer:!0})}></${ut}>
            </button>
        `,g=b`
            <div class="swatch-wrapper">
                <${O0.assign({backgroundColor:a})}></${O0}>
                ${e.showHexValue?f:ee}
            </div>
        `,h=b`
            <div class="picker">
                <${L0.assign({options:DR,value:n.selectedFormatName})}
                    ${U(L0.events.valueChange,p=>{const m=dd.isEnumValue(p.detail,pi);m&&(o({selectedFormatName:m}),U0.set.lastFormat(m))})}
                ></${L0}>
                ${u}
                <${B0.assign({color:a,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${U(B0.events.colorChange,p=>{r(new t.colorChange(p.detail)),o({rawInput:void 0})})}
                ></${B0}>
            </div>
        `;return e.alwaysShowPicker?b`
                ${g} ${h}
            `:b`
                <${Ys.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${Ys.slotNames.trigger}
                        ${U("mousedown",()=>{const p=U0.get.lastFormat();p&&o({selectedFormatName:p})})}
                    >
                        ${g}
                    </button>
                    <div class="pop-up" slot=${Ys.slotNames.popUp}>
                        ${h}
                    </div>
                </${Ys}>
            `}}),Qu="None";function CR({parent:e,title:r,theme:t,hideInverseColors:n,overrides:o,useVerticalLayout:a,prefixGroupByCount:s=2,hideCopyCode:l}){const u={"Show Var Names":{controlType:ge.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:ge.Checkbox,initValue:!0}},f={"Theme Override":{controlType:ge.Dropdown,initValue:Qu,options:[Qu,...(o||[]).map(C=>{if(C.name===Qu)throw new Error(`Cannot have theme override named '${Qu}'`);return C.name})]}},g=Ee({parent:e,title:r,controls:u});function h({controls:C,theme:E,themeColorName:A}){const I=S.isKeyOf(A,E.colors)?E.colors[A]:void 0,_=S.isKeyOf(A,E.inverse)?E.inverse[A]:void 0;if(!I||!_)throw new Error(`No theme color found by name '${A}'`);const H=b`
            <${ny.assign({color:I,showVarValues:!0,showVarNames:C["Show Var Names"],showContrast:C["Show Contrast Tips"],fontWeight:400})}></${ny}>
        `;return b`
            <div class="with-inverse">${H}${ee}</div>
        `}i(h,"buildThemeColorTemplate");function p(C,E,A){const I=nD(Object.keys(E.colors),_=>s?_.split("-").slice(0,s).join("-"):_);Object.entries(I).forEach(([_,H])=>{H&&C({title:_,styles:k`
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
                    `,render({controls:ce}){const be=("Theme Override"in ce&&ce["Theme Override"]&&A?.find(Me=>Me.name===ce["Theme Override"])||void 0)?.asTheme||E;return b`
                            <div class="theme-wrapper">
                                ${H.map(Me=>h({controls:ce,theme:be,themeColorName:Me}))}
                            </div>
                        `}})})}i(p,"createThemePageExamples");const m=["Click a color preview to show CSS var names and values."],v=Ee({parent:g,title:"Default",descriptionParagraphs:m,useVerticalExamples:a,controls:{...f},defineExamples({defineExample:C}){p(C,t,o)}}),$=(o||[]).map(C=>Ee({parent:g,title:C.name,useVerticalExamples:a,descriptionParagraphs:m,defineExamples({defineExample:E}){p(E,C.asTheme,void 0)}}));return[g,v,...$]}i(CR,"createColorThemeBookPages");const ER=["pagehide","pageshow","popstate"],qo=cr()({tagName:"vira-modal",events:{modalClose:Re()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanupListeners:void 0}},cleanup({state:e}){e.cleanupListeners?.()},hostClasses:{"vira-modal-phone-size":i(({inputs:e})=>!!e.isMobileSize,"vira-modal-phone-size")},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-filter":"blur(3px)"},styles:i(({hostClasses:e,cssVars:r})=>k`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${Kp};
        }

        dialog {
            ${gR(M.colors[Ze])}
            border: none;
            flex-direction: column;
            border-radius: inherit;
            padding: 0;
            overflow: hidden;
            min-width: inherit;
            min-height: inherit;
            max-width: calc(100dvw - 100px);
            max-height: calc(100dvh - 100px);
            ${Wc.modal}

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
                        ${Xr};
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
    `,"styles"),render({inputs:e,state:r,updateState:t,events:n,dispatch:o,slotNames:a}){if(r.dialogElement&&e.open!==r.dialogElement.open&&(e.open?r.dialogElement.showModal():r.dialogElement.close()),r.previousOpenValue!==e.open&&(r.cleanupListeners?.(),t({previousOpenValue:e.open}),e.open)){const l=ER.map(u=>Tl(u,()=>{o(new n.modalClose)}));t({cleanupListeners:i(()=>{l.forEach(u=>u())},"cleanupListeners")})}function s(){e.open&&(r.cleanupListeners?.(),o(new n.modalClose))}return i(s,"close"),b`
            <dialog
                ${oa(l=>{t({dialogElement:lr.instanceOf(l,HTMLDialogElement)})})}
                ${U("close",()=>{s()})}
                ${U("mousedown",l=>{r.contentElement&&!l.composedPath().includes(r.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${oa(l=>{t({contentElement:lr.instanceOf(l,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${a.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?b`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:ee}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${U("click",()=>{r.dialogElement?.close()})}
                        >
                            <${B.assign({icon:tm})}></${B}>
                        </button>
                    </div>
                    ${e.open?b`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:ee}
                </div>
            </dialog>
        `}}),ao=cr()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanupListeners:void 0}},hostClasses:{"vira-overflow-switch-show-small":i(({state:e,inputs:r})=>e.isOverflowing||!!r.useSmall,"vira-overflow-switch-show-small")},styles:i(({hostClasses:e})=>k`
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
    `,"styles"),cleanup({state:e,updateState:r}){e.cleanupListeners?.(),r({cleanupListeners:void 0})},render({slotNames:e,updateState:r,inputs:t,host:n,state:o}){return b`
            <div
                class="large"
                ${oa(a=>{if(!t.automaticallySwitch)return;const s={elementToTest:a,host:n,updateState:r},l=new ResizeObserver(()=>{_0(s)});l.observe(n),l.observe(a);const u=oo(a,"slotchange",()=>{_0(s)});_0(s),o.cleanupListeners?.(),r({cleanupListeners(){l.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function _0({elementToTest:e,host:r,updateState:t}){const n=e.scrollWidth>r.clientWidth;t({isOverflowing:n})}i(_0,"updateOverflowing");const ko=cr()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px"},styles:i(({cssVars:e})=>k`
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
    `,"styles"),render({inputs:e,host:r}){const t=e.min||0,o=(e.max||100)-t,a=e.value-t,s=kD(Math.round(a/o*100),{min:0,max:100});return KI(r,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),b`
            <div
                class="progress-bar"
                style=${s?k`
                          width: ${s}%;
                      `:k`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}}),Ql={value:k`transparent`};function Xs(e){const r=Dl[e]["behind-bg"],t=Dl[e]["on-self"];return{[sr.Standard]:{idle:{textColor:r[te.NonBodyText].foreground,backgroundColor:r[te.NonBodyText].background,borderColor:r[te.NonBodyText].background},hover:{textColor:r[te.Header].foreground,backgroundColor:r[te.Header].background,borderColor:r[te.Header].background},active:{textColor:r[te.NonBodyText].foreground,backgroundColor:r[te.NonBodyText].background,borderColor:r[te.NonBodyText].background}},[sr.Subtle]:{idle:{textColor:t[te.BodyText].foreground,backgroundColor:t[te.BodyText].background,borderColor:t[te.BodyText].background},hover:{textColor:t[te.NonBodyText].foreground,backgroundColor:t[te.NonBodyText].background,borderColor:t[te.NonBodyText].background},active:{textColor:t[te.BodyText].foreground,backgroundColor:t[te.BodyText].background,borderColor:t[te.BodyText].background}}}}i(Xs,"buildThemedTagColors");function Qs(e){const r=Dl[e]["on-self"][te.BodyText];return{idle:{textColor:r.foreground,backgroundColor:Ql,borderColor:r.background},hover:{textColor:r.foreground,backgroundColor:Dl[e]["behind-bg"][te.Invisible].background,borderColor:r.background},active:{textColor:r.foreground,backgroundColor:Dl[e]["behind-bg"][te.Decoration].background,borderColor:r.background}}}i(Qs,"buildThemedNotCheckedColors");const AR={[se.Plain]:{[sr.Standard]:{idle:{backgroundColor:M.inverse[Ze].background,textColor:M.inverse[Ze].foreground,borderColor:M.inverse[Ze].background},hover:{backgroundColor:M.colors["vira-grey-behind-bg-non-body"].background,textColor:M.colors["vira-grey-behind-bg-non-body"].foreground,borderColor:M.colors["vira-grey-behind-bg-non-body"].background},active:{backgroundColor:M.inverse[Ze].background,textColor:M.inverse[Ze].foreground,borderColor:M.inverse[Ze].background}},[sr.Subtle]:{idle:{backgroundColor:Ql,textColor:M.colors[Ze].foreground,borderColor:Ql},hover:{backgroundColor:M.colors["vira-grey-behind-fg-small-body"].background,textColor:M.colors["vira-grey-behind-fg-small-body"].foreground,borderColor:M.colors["vira-grey-behind-fg-small-body"].background},active:{backgroundColor:M.colors["vira-grey-behind-fg-body"].background,textColor:M.colors["vira-grey-behind-fg-body"].foreground,borderColor:M.colors["vira-grey-behind-fg-body"].background}}},[se.Accent]:Xs(to[se.Accent]),[se.Neutral]:Xs(to[se.Neutral]),[se.Danger]:Xs(to[se.Danger]),[se.Warning]:Xs(to[se.Warning]),[se.Positive]:Xs(to[se.Positive])},FR={[se.Plain]:{idle:{textColor:M.colors[Ze].foreground,backgroundColor:Ql,borderColor:Ql},hover:{backgroundColor:M.colors["vira-grey-behind-fg-small-body"].background,textColor:M.colors["vira-grey-behind-fg-small-body"].foreground,borderColor:M.colors["vira-grey-behind-fg-small-body"].background},active:{backgroundColor:M.colors["vira-grey-behind-fg-body"].background,textColor:M.colors["vira-grey-behind-fg-body"].foreground,borderColor:M.colors["vira-grey-behind-fg-body"].background}},[se.Accent]:Qs(to[se.Accent]),[se.Neutral]:Qs(to[se.Neutral]),[se.Danger]:Qs(to[se.Danger]),[se.Warning]:Qs(to[se.Warning]),[se.Positive]:Qs(to[se.Positive])},el=cr()({tagName:"vira-tag",cssVars:{"vira-tag-text-color":"transparent","vira-tag-background-color":"transparent","vira-tag-border-color":"transparent","vira-tag-hover-text-color":"transparent","vira-tag-hover-background-color":"transparent","vira-tag-hover-border-color":"transparent","vira-tag-active-text-color":"transparent","vira-tag-active-background-color":"transparent","vira-tag-active-border-color":"transparent","vira-tag-disabled-text-color":M.colors["vira-grey-behind-bg-decoration"].foreground.value,"vira-tag-disabled-background-color":M.colors["vira-grey-behind-bg-decoration"].background.value,"vira-tag-disabled-border-color":M.colors["vira-grey-behind-bg-decoration"].background.value,"vira-tag-border-radius":"1000px","vira-tag-gap":"6px","vira-tag-horizontal-padding":"12px","vira-tag-border-width":"2px"},events:{toggle:Re(),cancel:Re()},hostClasses:{"vira-tag-selectable":i(({inputs:e})=>S.isBoolean(e.isClickable?.selected),"vira-tag-selectable"),"vira-tag-checked":i(({inputs:e})=>!!e.isClickable?.selected,"vira-tag-checked"),"vira-tag-not-checked":i(({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-not-checked"),"vira-tag-cancellable":i(({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-cancellable"),"vira-tag-not-clickable":i(({inputs:e})=>!e.isClickable,"vira-tag-not-clickable"),"vira-tag-disabled":i(({inputs:e})=>!!e.disabled,"vira-tag-disabled"),"vira-tag-size-large":i(({inputs:e})=>e.size===Wi.Large,"vira-tag-size-large"),"vira-tag-size-medium":i(({inputs:e})=>!e.size||e.size===Wi.Medium,"vira-tag-size-medium"),"vira-tag-size-small":i(({inputs:e})=>e.size===Wi.Small,"vira-tag-size-small"),"vira-tag-emphasis-standard":i(({inputs:e})=>!e.emphasis||e.emphasis===sr.Standard,"vira-tag-emphasis-standard"),"vira-tag-emphasis-subtle":i(({inputs:e})=>e.emphasis===sr.Subtle,"vira-tag-emphasis-subtle"),"vira-tag-color-accent":i(({inputs:e})=>!e.color||e.color===se.Accent,"vira-tag-color-accent"),"vira-tag-color-plain":i(({inputs:e})=>e.color===se.Plain,"vira-tag-color-plain"),"vira-tag-color-neutral":i(({inputs:e})=>e.color===se.Neutral,"vira-tag-color-neutral"),"vira-tag-color-danger":i(({inputs:e})=>e.color===se.Danger,"vira-tag-color-danger"),"vira-tag-color-warning":i(({inputs:e})=>e.color===se.Warning,"vira-tag-color-warning"),"vira-tag-color-positive":i(({inputs:e})=>e.color===se.Positive,"vira-tag-color-positive")},styles:i(({cssVars:e,hostClasses:r})=>{function t(){const a=ef.flatMap(s=>ia.map(l=>{const u=AR[l][s],f=r[`vira-tag-color-${l}`].selector,g=r[`vira-tag-emphasis-${s}`].selector;return k`
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
`))}i(t,"generateVariantCss");function n(){const a=ia.map(s=>{const l=FR[s],u=r[`vira-tag-color-${s}`].selector,f=r["vira-tag-not-checked"].selector;return k`
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
`))}i(n,"generateNotCheckedCss");function o(){const a=Qd.map(s=>k`
                    ${r[`vira-tag-size-${s}`].selector} button {
                        height: ${Lg[s]}px;
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
                ${Xr}
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
                ${gi}

                & button {
                    color: ${e["vira-tag-disabled-text-color"].value};
                    background-color: ${e["vira-tag-disabled-background-color"].value};
                    border-color: ${e["vira-tag-disabled-border-color"].value};
                }
            }
        `},"styles"),render({inputs:e,dispatch:r,events:t}){const n=!e.isClickable||!!e.disabled;return b`
            <button
                ?disabled=${n}
                ${U("click",()=>{n||(e.isClickable?.selected!=null?r(new t.toggle(!e.isClickable.selected)):e.isClickable?.cancellable&&r(new t.cancel))})}
            >
                <${B.assign({icon:Gp})}
                    class="selected-check"
                ></${B}>
                <span class="text">${String(e.text)}</span>
                <${B.assign({icon:Jp})}
                    class="cancel-x"
                ></${B}>
            </button>
        `}});function Ax(e){return BN({async updateCallback(r,t){if(t&&r in t.cache)return{cache:t.cache,element:t.cache[r],key:r};const n=await e[r]();return{cache:{...t?.cache,[r]:n},element:n,key:r}}})}i(Ax,"createDynamicElementLoader");function Fx(e,{ready:r,loading:t,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?t(e.value.then(a=>({[a.key]:a.element}))):r({[e.value.key]:e.value.element})}i(Fx,"renderDynamicElement");const fn=Up(),wn=fn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:i(({cssVars:e})=>k`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,"styles"),render:i(({inputs:e,dispatch:r})=>{const t=e.router?.createRouteUrl({...e.route})??"#";return b`
            <a
                href=${t}
                ${U("click",n=>{(!e.router||Xk(n))&&(n.preventDefault(),window.scrollTo(0,0),r(new Vc(e.route)))})}
            >
                <slot></slot>
            </a>
        `},"render")});function MR(e,r){return e.entry.entryType===ct.Root?!1:e.entry.entryType===ct.Page||S.jsonEquals(r,e.fullUrlBreadcrumbs.slice(0,-1))?!0:S.jsonEquals(r?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}i(MR,"shouldShowTreeNodeInNav");const Pa=fn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:i(({cssVars:e})=>k`
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
            ${wn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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
    `,"styles"),render({inputs:e}){const r=e.flattenedNodes.map(t=>{if(!MR(t,e.selectedPath))return;const n=k`
                --book-nav-internal-indent: ${t.fullUrlBreadcrumbs.length-1};
            `;return b`
                <li style=${n}>
                    <${wn.assign({router:e.router,route:{paths:[jt.Book,...t.fullUrlBreadcrumbs]}})}
                        class=${ot({"title-row":!0,selected:e.selectedPath?S.jsonEquals(e.selectedPath,t.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Vr(Wa(t,ct.ElementExample),b`
                                    <${B.assign({icon:Yp})}></${B}>
                                `)}
                            ${t.entry.title}
                        </div>
                    </${wn}>
                </li>
            `});return b`
            <${wn.assign({route:es,router:e.router})}>
                <slot>Book</slot>
            </${wn}>
            <ul>
                ${r}
            </ul>
        `}}),vi=fn()({tagName:"book-error",styles:k`
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
    `,render({inputs:e}){return(S.isArray(e.message)?e.message:[e.message]).map(t=>b`
                <p>${t}</p>
            `)}}),eu=fn()({tagName:"book-page-controls",events:{controlValueChange:Re()},hostClasses:{"book-page-controls-has-controls":i(({inputs:e})=>!!Object.keys(e.config).length,"book-page-controls-has-controls")},styles:i(({hostClasses:e})=>k`
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

        ${Qe}, ${ur} {
            height: 24px;
            max-width: 128px;
        }

        ${B}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,"styles"),render({inputs:e,dispatch:r,events:t}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===ge.Hidden)return"";const s=SR(e.currentValues[n],o,l=>{const u=S.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);r(new t.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...Object.fromEntries(Object.keys(e.config).map(f=>[f,e.currentValues[f]])),[n]:l}}))});return b`
                    <div class="control-wrapper">
                        ${Vr(a===0,b`
                                <${B.assign({icon:tf})}
                                    class="options-icon"
                                ></${B}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${o.controlType===ge.Custom?b`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function SR(e,r,t){return Pi(r,ge.Hidden)?"":Pi(r,ge.Checkbox)?b`
            <${fe.assign({value:!!e})}
                ${U(fe.events.valueChange,n=>{t(n.detail)})}
            ></${fe}>
        `:Pi(r,ge.Color)?b`
            <${Js.assign({color:e})}
                style=${k`
                    ${Js.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${Js.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${U(Js.events.colorChange,n=>{t(n.detail)})}
            ></${Js}>
        `:Pi(r,ge.Text)?b`
            <${Qe.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${U(Qe.events.valueChange,n=>{t(n.detail)})}
            ></${Qe}>
        `:Pi(r,ge.Number)?b`
            <${Qe.assign({value:e,allowedInputs:/[\d.]/})}
                ${U(Qe.events.valueChange,n=>{t(n.detail)})}
            ></${Qe}>
        `:Pi(r,ge.Dropdown)?b`
            <${ur.assign({value:e,options:r.options.map(n=>({label:n,value:n}))})}
                ${U(ur.events.valueChange,n=>{t(n.detail)})}
            ></${ur}>
        `:Pi(r,ge.Custom)?r.content:b`
            <p class="error">
                ${r.controlType} controls are not implemented yet.
            </p>
        `}i(SR,"createControlInput");const ay=fn()({tagName:"book-breadcrumbs",styles:k`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:i(({inputs:e})=>{const r=e.currentRoute.paths.slice(1);return r.length?r.map((t,n,o)=>{const a=n>=o.length-1,s=o.slice(0,n+1),l=a?"":b`
                      <span class="spacer">&gt;</span>
                  `;return b`
                <${wn.assign({route:{hash:void 0,search:void 0,paths:[jt.Book,...s]},router:e.router})}>
                    ${t}
                </${wn}>
                ${l}
            `}):b`
                &nbsp;
            `},"render")}),z0=fn()({tagName:"book-breadcrumbs-bar",styles:k`
        :host {
            border-bottom: 1px solid
                ${Ne["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Ne["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:r}){return b`
            ${Vr(!!e.currentSearch,b`
                    &nbsp;
                `,b`
                    <${ay.assign({currentRoute:e.currentRoute,router:e.router})}></${ay}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${U("input",async t=>{const n=t.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await Ji({milliseconds:200}),n.value===o&&(n.value?r(new Vc({paths:[jt.Search,encodeURIComponent(n.value)]})):r(new Vc(es)))})}
            />
        `}}),sy=fn()({tagName:"book-entry-description",styles:k`
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(r=>b`
                <p>${r}</p>
            `)}}),ly=fn()({tagName:"book-page-wrapper",styles:k`
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

        ${wn} {
            display: inline-block;
        }
    `,render({inputs:e}){const r=e.isTopLevel?b`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:b`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,t=[jt.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?lw(e.pageNode.entry.errors):void 0;n&&console.error(n);const o=e.blockNavigation?r:b`
                  <${wn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                      ${r}
                  </${wn}>
              `;return b`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${o}
                    ${n?b`
                              <${vi.assign({message:n.message})}></${vi}>
                          `:b`
                              <${sy.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${sy}>
                              <${eu.assign({config:e.pageNode.entry.controls,currentValues:Dh(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${eu}>
                          `}
                </div>
            </div>
        `}}),ec=fn()({tagName:"book-element-example-title",styles:k`
        :host {
            display: flex;
            color: ${Ne["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const r=[jt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return b`
            <${wn.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${wn}>
        `}}),uy=Symbol("unset-internal-state"),cy=fn()({tagName:"book-element-example-viewer",state(){return{isUnset:uy}},render({state:e,inputs:r,updateState:t}){try{if(r.elementExampleNode.entry.errors.length)throw lw(r.elementExampleNode.entry.errors);if(!r.elementExampleNode.entry.render||typeof r.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${r.elementExampleNode.entry.title}': render is not a function`);e.isUnset===uy&&t({isUnset:void 0,...r.elementExampleNode.entry.state?.()});const n=r.elementExampleNode.entry.render({state:e,updateState:t,controls:r.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return b`
                ${Vr(!!r.elementExampleNode.entry.styles,b`
                        <style>
                            ${r.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",tt(n)),console.error(n),b`
                <${vi.assign({message:`${r.elementExampleNode.entry.title} failed: ${tt(n)}`})}></${vi}>
            `}},options:{allowPolymorphicState:!0}}),dy=fn()({tagName:"book-element-example-wrapper",styles:k`
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

        ${ec} {
            color: ${Ne["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${ec} {
            color: ${Ne["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return b`
            <div class="individual-example-wrapper">
                <${ec.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${ec}>
                <${cy.assign(e)}></${cy}>
            </div>
        `}}),TR={milliseconds:10};let fl;const td=new Map,Li=new Map;function PR(){return fl||(fl=new IntersectionObserver(e=>{for(const r of e){const t=r.target,n=td.get(t);if(n)if(r.isIntersecting){if(!Li.has(t)){const o=globalThis.setTimeout(()=>{Li.delete(t),n(),fl?.unobserve(t),td.delete(t)},Ja(TR,{milliseconds:!0}).milliseconds);Li.set(t,o)}}else{const o=Li.get(t);o&&(clearTimeout(o),Li.delete(t))}}},{rootMargin:"100px"})),fl}i(PR,"getSharedObserver");function fy(e){const r=Li.get(e);r&&(clearTimeout(r),Li.delete(e)),td.delete(e),fl?.unobserve(e)}i(fy,"unobserveElement");const rc=fn()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:k`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&fy(e.placeholderElement)},render({inputs:e,state:r,updateState:t}){return r.hasRendered?e.content:b`
            <div
                class="placeholder"
                ${oa(n=>{r.placeholderElement&&fy(r.placeholderElement),t({placeholderElement:n}),td.set(n,()=>{t({hasRendered:!0})}),PR().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function Mx(e,r,t,n){const o=ug(t,n),a=[];if(o){const s=Mx(e,r,o,n);s&&a.push(s)}if(Wa(t,ct.Page)&&!e.includes(t)){const s=Dh(r,t.fullUrlBreadcrumbs);a.push({config:t.entry.controls,current:s,breadcrumbs:Ke(s,()=>t.fullUrlBreadcrumbs)})}return a.reduce((s,l)=>({config:{...s.config,...l.config},current:{...s.current,...l.current},breadcrumbs:{...s.breadcrumbs,...l.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}i(Mx,"getFlattenedControlsFromHiddenParents");function NR({blockNavigation:e,currentNodes:r,isTopLevel:t,router:n,isSearching:o,controls:a,originalTree:s}){if(!r.length&&o)return[b`
                No results
            `];const l=S.isLengthAtLeast(r,1)?Mx(r,a,r[0],s):void 0,u=l&&Object.values(l.config).length&&S.isLengthAtLeast(r,1)?b`
                  <${eu.assign({config:l.config,currentValues:l.current,fullUrlBreadcrumbs:l.breadcrumbs})}></${eu}>
              `:ee,f=RN(r,g=>g.fullUrlBreadcrumbs.join(">"),g=>{if(Wa(g,ct.Page))return b`
                    <${ly.assign({blockNavigation:e,isTopLevel:t,pageNode:g,controls:a,router:n})}
                        class="block-entry"
                    ></${ly}>
                `;if(Wa(g,ct.ElementExample)){const h=Dh(a,g.fullUrlBreadcrumbs.slice(0,-1)),p=b`
                    <${dy.assign({blockNavigation:e,elementExampleNode:g,currentPageControls:h,router:n})}></${dy}>
                `;return b`
                    <${rc.assign({content:p})}
                        class="inline-entry ${ot({"block-entry":g.entry.isVertical})}"
                    ></${rc}>
                `}else{if(Wa(g,ct.Root))return ee;{const h=b`
                    <${vi.assign({message:`Unknown entry type for rendering: '${g.entry.entryType}'`})}></${vi}>
                `;return b`
                    <${rc.assign({content:h})}
                        class="block-entry"
                    ></${rc}>
                `}}});return[u,f]}i(NR,"createNodeTemplates");const Na=fn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:k`
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

        ${z0} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Is["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:Re()},render:i(({inputs:e,dispatch:r,events:t,state:n,updateState:o})=>{const a=xw(e.currentRoute.paths),s=NR({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return b`
            <${z0.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${z0}>

            ${Vr(e.showLoading,b`
                    <div
                        ${oa(()=>{r(new t.loadingRender(!0))})}
                        class="loading"
                    >
                        <${B.assign({icon:hi})}></${B}>
                    </div>
                    ${Vr(!!n.lastElement,b`
                            ${n.lastElement}
                            <slot></slot>
                        `)}
                `,b`
                    <div
                        ${oa(l=>{o({lastElement:l})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot></slot>
                `)}
        `},"render")});function IR(e,r,t){const n=gy(e,r);return n.length?n:(t(es),gy(e,es.paths))}i(IR,"getCurrentNodes");function gy(e,r){return e.filter(t=>PD({searchFor:r.slice(1),searchIn:t.fullUrlBreadcrumbs}))}i(gy,"filterNodes");const tc=Zn()({tagName:"element-book-app",state(){return{currentRoute:es,router:void 0,loading:!0,colors:{config:void 0,theme:a1(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:Re()},slotNames:["footer","navHeader"],styles:k`
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

        ${Na} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${Pa} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:r}){e.router&&(e.router.destroy(),r({router:void 0}))},render:i(({state:e,inputs:r,host:t,updateState:n,dispatch:o,events:a,slotNames:s})=>{r._debug&&console.info("rendering element-book app");function l(h){return{...e.currentRoute,...h}}i(l,"mergeRoutes");function u(h){const p=l(h);return!S.jsonEquals(e.currentRoute,p)}i(u,"areRoutesNew");function f(h){r.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,h].filter(S.isTruthy).join(" - "))}i(f,"updateWindowTitle");function g(h){if(!u(h))return;const p=l(h);e.router?e.router.setRoute(p):n({currentRoute:{...e.currentRoute,...p}}),r.elementBookRoutePaths&&!S.jsonEquals(r.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(p.paths))}i(g,"updateRoutes");try{if(r.elementBookRoutePaths&&!S.jsonEquals(r.elementBookRoutePaths,e.currentRoute.paths)&&g({paths:r.elementBookRoutePaths}),r.internalRouterConfig?.useInternalRouter&&!e.router){const A=xI(r.internalRouterConfig.basePath);n({router:A}),A.listen(!0,I=>{n({currentRoute:I})})}else!r.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const h={themeColor:r.themeColor};if(!S.jsonEquals(h,e.colors.config)){const A=a1(h);n({colors:{config:h,theme:A}}),g8(t,A)}const p=r._debug??!1,m=LD({entries:r.pages,debug:p});(!e.treeBasedControls||e.treeBasedControls.pages!==r.pages||e.treeBasedControls.lastGlobalInputs!==r.globalValues)&&(r._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:r.pages,lastGlobalInputs:r.globalValues??{},controls:$w(m.tree,{children:e.treeBasedControls?.controls.children,controls:r.globalValues})}}));const v=xw(e.currentRoute.paths),C=(v?cI({flattenedNodes:m.flattenedNodes,searchQuery:v}):void 0)??IR(m.flattenedNodes,e.currentRoute.paths,g);f(C[0]?.entry.title);const E=e.treeBasedControls?.controls;return E?(r._debug&&console.info({currentControls:E}),b`
                <div
                    class="root"
                    ${U(Vc,A=>{const I=A.detail;if(!u(I))return;if(n({loading:!0}),g(I),!(t.shadowRoot.querySelector(Pa.tagName)instanceof Pa))throw new TypeError(`Failed to find child '${Pa.tagName}'`)})}
                    ${U(eu.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const I=UD(E,A.detail.fullUrlBreadcrumbs,A.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:I}})})}
                >
                    ${r.blockNavigation?ee:b`
                              <${Pa.assign({flattenedNodes:m.flattenedNodes,router:e.router,selectedPath:v?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${s.navHeader}></slot>
                              </${Pa}>
                          `}
                    <${Na.assign({blockNavigation:!!r.blockNavigation,controls:E,currentNodes:C,currentRoute:e.currentRoute,debug:p,originalTree:m.tree,router:e.router,showLoading:e.loading})}
                        ${U(Na.events.loadingRender,async A=>{await s1();const I=t.shadowRoot.querySelector(Na.tagName);I?I.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Na.tagName}' for scrolling.`),await s1(),n({loading:!A.detail})})}
                    >
                        <slot name=${s.footer}></slot>
                    </${Na}>
                </div>
            `):b`
                    <${vi.assign({message:"Failed to generate page controls."})}></${vi}>
                `}catch(h){return console.error(h),b`
                <p class="error">${tt(h)}</p>
            `}},"render")}),wr=Ee({title:"Elements",parent:void 0}),hm=Ee({title:"Styles",parent:void 0}),bf=Ee({title:"Util",parent:void 0}),vf=Ee({title:"Icons",controls:{"Stroke Color":{controlType:ge.Color,initValue:""},"Fill Color":{controlType:ge.Color,initValue:""},"Stroke Width":{controlType:ge.Number,initValue:1.5}},parent:void 0}),BR=CR({parent:hm,theme:M,title:"Vira Theme",hideInverseColors:!0,overrides:[CI],hideCopyCode:!0}),OR=Ee({title:Yt.name,parent:bf,descriptionParagraphs:["Wraps an existing icon with specific colors to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){e({title:"stroke color",styles:k`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Yt(br,{"vira-icon-stroke-color":"red"});return b`
                    <${B.assign({icon:br})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"fill color",styles:k`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Yt(Gl,{"vira-icon-fill-color":"gold","vira-icon-stroke-color":"orange"});return b`
                    <${B.assign({icon:Gl})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"stroke width",styles:k`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Yt(Ua,{"vira-icon-stroke-color":"green","vira-icon-stroke-width":"3px"});return b`
                    <${B.assign({icon:Ua})}></${B}>
                    <span>→</span>
                    <${B.assign({icon:r})}></${B}>
                `}}),e({title:"with CSS var values",styles:k`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const r=Yt(Ua,{"vira-icon-stroke-color":`${R["vira-form-error-color"].value}`}),t=Yt(Ua,{"vira-icon-stroke-color":`${R["vira-form-success-color"].value}`});return b`
                    <${B.assign({icon:r})}></${B}>
                    <${B.assign({icon:t})}></${B}>
                `}}),e({title:"multiple icons with different colors",styles:k`
                :host {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
            `,render(){const r=Yt(br,{"vira-icon-stroke-color":"red"}),t=Yt(br,{"vira-icon-stroke-color":"dodgerblue"}),n=Yt(br,{"vira-icon-stroke-color":"green"}),o=Yt(br,{"vira-icon-stroke-color":"purple"});return b`
                    <${B.assign({icon:r})}></${B}>
                    <${B.assign({icon:t})}></${B}>
                    <${B.assign({icon:n})}></${B}>
                    <${B.assign({icon:o})}></${B}>
                `}})}}),RR=[{title:"smaller",size:16,icon:br},{title:"larger",size:48,icon:Gl}],LR=Ee({title:Ug.name,parent:bf,descriptionParagraphs:["Wraps an existing icon with explicit dimensions to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){RR.forEach(r=>{e({title:r.title,styles:k`
                    :host {
                        display: flex;
                        gap: 16px;
                        align-items: center;
                    }
                `,render(){const t=Ug(r.icon,r.size);return b`
                        <${B.assign({icon:r.icon})}></${B}>
                        <span>→</span>
                        <${B.assign({icon:t})}></${B}>
                    `}})})}}),Sx={async element1(){return await Ji({seconds:2}),(await Ml(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-CZjhGKsc.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await Ji({seconds:2}),(await Ml(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-DybTlL6B.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},hy=Zn()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:Ax(Sx)}},render({state:e,inputs:r}){return Fx(e.dynamicElements,{key:r.numberValue===1?"element1":r.numberValue===2?"element2":"errorElement",error(t){return b`
                    <${Gi}>
                        ${sa("Failed to import element",tt(t))}
                    </${Gi}>
                `},loading(){return b`
                    <${B.assign({icon:hi})}></${B}>
                `},ready(t){if(t.element1)return b`
                        <${t.element1}></${t.element1}>
                    `;if(t.element2)return b`
                        <${t.element2.assign({userName:"John"})}></${t.element2}>
                    `;Er.never("The error element will always error")}})}}),py=Zn()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:Ax(Sx)}},render({state:e,inputs:r}){return e.dynamicElements.update(r.numberValue===1?"element1":r.numberValue===2?"element2":"errorElement"),Fx(e.dynamicElements,{error(t){return b`
                    <${Gi}>
                        ${sa("Failed to import element",tt(t))}
                    </${Gi}>
                `},loading(){return b`
                    <${B.assign({icon:hi})}></${B}>
                `},ready(t){if(t.element1)return b`
                        <${t.element1}></${t.element1}>
                    `;if(t.element2)return b`
                        <${t.element2.assign({userName:"John"})}></${t.element2}>
                    `;Er.never("The error element will always error")}})}}),my=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],jR=Ee({parent:bf,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:k`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:r,updateState:t}){return b`
                    <${ur.assign({value:String(r.value),options:my})}
                        ${U(ur.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);t({value:o})})}
                    ></${ur}>
                    <${hy.assign({numberValue:r.value})}></${hy}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:k`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:r,updateState:t}){return b`
                    <${ur.assign({value:String(r.value),options:my})}
                        ${U(ur.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);t({value:o})})}
                    ></${ur}>
                    <${py.assign({numberValue:r.value})}></${py}>
                `}})}}),UR=[{title:"unselected",content:"my label",inputs:{selected:!1}},{title:"selected",content:"my label",inputs:{selected:!0}},{title:"with custom child",content:"custom child",inputs:{selected:!0},customTemplate:b`
            <b>This is custom</b>
        `},{title:"constrained width",content:"has more text than is possible to fit",customStyle:k`
            :host {
                max-width: 100px;
            }
        `,inputs:{selected:!0}},{title:"stretched width",content:"wide",customStyle:k`
            ${oi} {
                width: 400px;
            }
        `,inputs:{selected:!0}},{title:"disabled",content:"my label",inputs:{selected:!0,disabled:!0}},{title:"no default pointer styles",content:"my label",inputs:{selected:!0,disablePointerStyles:!0}},{title:"icon override",content:"my label",inputs:{selected:!1,iconOverride:Yt(tf,{"vira-icon-stroke-color":"blue"})}},{title:"with ViraLink content",customStyle:k`
            ${io} {
                text-decoration: none;
            }
        `,content:b`
            <${io.assign({link:{url:"https://example.com",newTab:!0},disableLinkStyles:!0})}>
                link label
            </${io}>
        `,inputs:{selected:!1}}],_R=Ee({title:oi.tagName,parent:wr,defineExamples({defineExample:e}){UR.forEach(r=>{e({title:r.title,styles:r.customStyle,render(){return b`
                        <${oi.assign(r.inputs)}>${r.content}</${oi}>
                    `}})})}}),gl=[{content:"one"},{content:"two"},{content:"three"},{content:"four"},{content:"five"},{content:"six"}],by={content:b`
        <div
            style=${k`
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `}
        >
            This menu item is much longer than the others
        </div>
    `},zR=[{title:"basic"},{title:"rounded",inputs:{menuCornerStyle:r$.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"inside focus",inputs:{useInsideFocus:!0}},{title:"long item",menuItems:[...gl,by]},{title:"restricted long item",inputs:{horizontalAnchor:Hi.Both},menuItems:[...gl,by]},{title:"ViraLink URL item",menuItems:[...gl,{content:b`
                    <${io.assign({link:{url:"https://www.wikipedia.org",newTab:!0},disableLinkStyles:!0})}>
                        Wikipedia link
                    </${io}>
                `}]},{title:"ViraLink route item",menuItems:[...gl,{content:b`
                    <${io.assign({route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(e,r){return console.info(e,r),!1}}},disableLinkStyles:!0})}>
                        Route link
                    </${io}>
                `}]}],qR=Ee({parent:wr,title:Zu.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){zR.forEach(r=>{e({title:r.title,styles:k`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){const t=r.menuItems||gl;return b`
                        <${Zu.assign({popUpOffset:{vertical:-1},...r.inputs})}>
                            <div class="trigger" slot=${Zu.slotNames.trigger}>
                                Trigger Menu
                            </div>
                            ${l$(t)}
                        </${Zu}>
                    `}})})}}),VR=[{title:"basic",items:[{content:"one"},{content:"two"},{content:"three"}]},{title:"with selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three"}]},{title:"with multi selection",items:[{content:"one"},{content:"two",selected:!0},{content:"three",selected:!0}]},{title:"with disabled item",items:[{content:"one"},{content:"two",disabled:!0},{content:"three"}]}],WR=Ee({parent:wr,title:Ki.tagName,defineExamples({defineExample:e}){VR.forEach(r=>{e({title:r.title,render(){return b`
                        <${Ki.assign({...r.menuInputs})}>
                            ${r.items.map(t=>b`
                                    <${oi.assign({selected:t.selected,disabled:t.disabled,disablePointerStyles:t.disablePointerStyles})}>
                                        ${t.content}
                                    </${oi}>
                                `)}
                        </${Ki}>
                    `}})})}}),KR=Ee({parent:wr,title:me.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:k`
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
            `,render(){return b`
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
            `,render(){return b`
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
            `,render(){return b`
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Hi.Right})}>
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
            `,render(){return b`
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Hi.Left})}>
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
            `,render(){return b`
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Hi.Right})}>
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
            `,render(){return b`
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
                `}})}}),HR=[{title:"menu shadow",styles:Wc.menuShadow},{title:"modal",styles:Wc.modal}],GR=Ee({parent:hm,title:"Shadows",defineExamples({defineExample:e}){HR.forEach(r=>{e({title:r.title,styles:k`
                    .shadow-block {
                        height: 100px;
                        width: 256px;
                        margin: 32px;
                        ${r.styles}
                        border-radius: 8px;
                        background-color: white;
                    }
                `,render(){return b`
                        <div class="shadow-block"></div>
                    `}})})}}),ZR=Ee({parent:wr,title:kr.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:ge.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return b`
                    <${kr.assign({text:"Text here",bold:!1})}></${kr}>
                `}}),e({title:"Bold",render(){return b`
                    <${kr.assign({text:"Text here",bold:!0})}></${kr}>
                `}}),e({title:"Dynamic",render({controls:r}){return b`
                    <${kr.assign({text:"Text here",bold:r.bolded})}></${kr}>
                `}}),e({title:"Resized",styles:k`
                ${kr} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return b`
                    <${kr.assign({text:"Not Bolded",bold:!1})}></${kr}>
                    <${kr.assign({text:"Bolded",bold:!0})}></${kr}>
                `}}),e({title:"Alignment",styles:k`
                ${kr} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return b`
                    <${kr.assign({text:"Not Bolded",bold:!1})}></${kr}>
                    <${kr.assign({text:"Bolded",bold:!0})}></${kr}>
                `}}),e({title:"Stylized",styles:k`
                ${kr} {
                    text-decoration: underline;
                }
            `,render(){return b`
                    <${kr.assign({text:"Not Bolded",bold:!1})}></${kr}>
                    <${kr.assign({text:"Bolded",bold:!0})}></${kr}>
                `}})}}),YR=[{label:"basic",extraInputs:{}},{label:"with 24px icon",extraInputs:{icon:Hc}},{label:"with 16px icon",extraInputs:{icon:Kc}},{label:"only 24px icon",extraInputs:{icon:Hc,text:""}},{label:"only 16px icon",extraInputs:{icon:Kc,text:""}},{label:"disabled",extraInputs:{isDisabled:!0}},{label:"menu caret",extraInputs:{showMenuCaret:!0}}],JR=k`
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
`,XR=Ee({parent:wr,title:De.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],defineExamples({defineExample:e}){Qd.forEach(r=>{e({title:r,styles:JR,render(){return YR.map(({label:t,extraInputs:n})=>b`
                            <h3>${t}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${ia.map(o=>b`
                                                <th>${o}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${ef.map(o=>b`
                                            <tr>
                                                <th>${o}</th>
                                                ${ia.map(a=>b`
                                                        <td>
                                                            <${De.assign({text:"Button",...n,buttonSize:r,buttonEmphasis:o,colorVariant:a})}></${De}>
                                                        </td>
                                                    `)}
                                            </tr>
                                        `)}
                                </tbody>
                            </table>
                        `)}})}),e({title:"customized colors",styles:k`
                :host {
                    ${De.cssVars["vira-button-text-color"].name}: purple;
                    ${De.cssVars["vira-button-background-color"].name}: pink;
                    ${De.cssVars["vira-button-border-color"].name}: magenta;

                    ${De.cssVars["vira-button-hover-text-color"].name}: white;
                    ${De.cssVars["vira-button-hover-background-color"].name}: orange;
                    ${De.cssVars["vira-button-hover-border-color"].name}: red;

                    ${De.cssVars["vira-button-active-text-color"].name}: black;
                    ${De.cssVars["vira-button-active-background-color"].name}: yellow;
                    ${De.cssVars["vira-button-active-border-color"].name}: goldenrod;

                    ${De.cssVars["vira-button-disabled-text-color"].name}: gray;
                    ${De.cssVars["vira-button-disabled-background-color"].name}: lightgray;
                    ${De.cssVars["vira-button-disabled-border-color"].name}: darkgray;
                }
            `,render(){return b`
                    <${De.assign({text:"hello",colorVariant:se.None})}></${De}>
                `}}),e({title:"text wrapping",styles:k`
                ${De} {
                    max-width: 120px;
                }
            `,render(){return b`
                    <${De.assign({text:"This is a long button label that wraps"})}></${De}>
                `}})}}),QR=[{title:"basic"},{title:"success",inputs:{cardState:_g.Success}},{title:"error",inputs:{cardState:_g.Error}},{title:"long",content:b`
            <p
                style=${k`
                    ${Kp}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],eL=Ee({parent:wr,title:c0.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){QR.forEach(r=>{e({title:r.title,render(){return b`
                        <${c0.assign(r.inputs||{})}>
                            ${r.content||"Content"}
                        </${c0}>
                    `}})})}}),rL=Ee({parent:wr,title:fe.tagName,controls:{Checked:{controlType:ge.Checkbox,initValue:!1},Disabled:{controlType:ge.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:r,updateState:t}){return b`
                    <${fe.assign({value:r.checked})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:r,updateState:t}){return b`
                    <${fe.assign({value:r.checked})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:r,updateState:t}){return b`
                    <${fe.assign({value:r.checked,hasError:!0})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"disabled unchecked",render(){return b`
                    <${fe.assign({value:!1,disabled:!0})}></${fe}>
                `}}),e({title:"disabled checked",render(){return b`
                    <${fe.assign({value:!0,disabled:!0})}></${fe}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:r}){return b`
                    <${fe.assign({value:r.Checked,disabled:r.Disabled})}></${fe}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return b`
                    <${fe.assign({value:!0})}></${fe}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:r,updateState:t}){return b`
                    <${fe.assign({value:r.checked,label:"label goes here"})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:r,updateState:t}){return b`
                    <${fe.assign({value:r.checked,label:"label goes here",horizontal:!0})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:k`
                ${fe} {
                    max-width: 400px;
                }
            `,render({state:r,updateState:t}){return b`
                    <${fe.assign({value:r.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"fill when checked",state(){return{checked:!0}},render({state:r,updateState:t}){return b`
                    <${fe.assign({value:r.checked,fillWhenChecked:!0})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"fill when unchecked",state(){return{checked:!1}},render({state:r,updateState:t}){return b`
                    <${fe.assign({value:r.checked,fillWhenUnchecked:!0})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}}),e({title:"both fills",state(){return{checked:!1}},render({state:r,updateState:t}){return b`
                    <${fe.assign({value:r.checked,fillWhenUnchecked:!0,fillWhenChecked:!0})}
                        ${U(fe.events.valueChange,n=>{t({checked:n.detail})})}
                    ></${fe}>
                `}})}}),tL=Ee({title:Yr.tagName,parent:wr,descriptionParagraphs:["A collapsible card element with built-in header, caret icon, and card styling. Wraps ViraCollapsibleWrapper with opinionated styles."],defineExamples({defineExample:e}){e({title:"basic",styles:k`
                p {
                    ${Xr}
                }
            `,render(){return b`
                    <${Yr}>
                        <span slot=${Yr.slotNames.header}>Card Header</span>
                        <p>Card content goes here.</p>
                    </${Yr}>
                `}}),e({title:"start expanded",styles:k`
                p {
                    ${Xr}
                }
            `,render(){return b`
                    <${Yr.assign({startExpanded:!0})}>
                        <span slot=${Yr.slotNames.header}>
                            Expanded Card Header
                        </span>
                        <p>This card starts expanded.</p>
                    </${Yr}>
                `}}),e({title:"block expansion",styles:k`
                p {
                    ${Xr}
                }
            `,render(){return b`
                    <${Yr.assign({blockExpansion:!0})}>
                        <span slot=${Yr.slotNames.header}>Always Expanded</span>
                        <p>This card cannot be collapsed.</p>
                    </${Yr}>
                `}}),e({title:"raw collapsible",styles:k`
                p {
                    ${Xr}
                }
            `,render(){return b`
                    <${Yr.assign({rawCollapsible:!0,startExpanded:!0})}>
                        <span slot=${Yr.slotNames.header}>Raw Header</span>
                        <p>No card border or padding styles.</p>
                    </${Yr}>
                `}}),e({title:"hidden header",styles:k`
                p {
                    ${Xr}
                }
            `,render(){return b`
                    <${Yr.assign({hideHeader:!0,startExpanded:!0})}>
                        <p>Content with no header visible.</p>
                    </${Yr}>
                `}}),e({title:"wide",styles:k`
                div {
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                }
                p {
                    ${Xr}
                }
            `,render(){return b`
                    <div>
                        <${Yr}>
                            <span slot=${Yr.slotNames.header}>Wide</span>
                            <p>Content content content content content content content.</p>
                        </${Yr}>
                    </div>
                `}})}}),nL=Ee({title:yt.tagName,parent:wr,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:k`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:r,state:t}){return new Array(3).fill(0).map((n,o)=>b`
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
                            ${Vr(!!t.showMoreStates[o],b`
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
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:r,state:t}){return new Array(3).fill(0).map((n,o)=>b`
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
                            ${Vr(!!t.showMoreStates[o],b`
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
                    `)}})}}),gc=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Really really super duper long option",value:"4"},{label:"Really really super duper long option",value:"5"},{label:"Really really super duper long option",value:"6"},{label:"Really really super duper long option",value:"7"},{label:"Really really super duper long it just keeps going because it's so long option",value:"8"}],oL=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{value:"1",label:"1"},{value:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with disabled item",inputs:{selected:[],options:[...gc,{value:"42",label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:k`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:k`
            ${dl} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:br}}],iL=Ee({title:dl.tagName,parent:wr,controls:{Selected:{controlType:ge.Dropdown,initValue:"",options:["",...gc.map(e=>e.label)]},Prefix:{controlType:ge.Text,initValue:""},"Force State":{controlType:ge.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:ge.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:ge.Dropdown,initValue:"",options:["",...Object.keys(E1)]},Disabled:{controlType:ge.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:ge.Text,initValue:"Select something"}},defineExamples({defineExample:e}){oL.forEach(r=>{e({title:r.title,state(){return{selected:r.inputs?.selected||[]}},styles:r.customStyle,render({state:t,updateState:n,controls:o}){const a={...r.inputs,placeholder:r.inputs&&"placeholder"in r.inputs?r.inputs.placeholder:o.Placeholder,options:r.inputs?.options||gc,selected:o.Selected?[gc.find(s=>s.label===o.Selected)?.value].filter(S.isTruthy):t.selected,selectionPrefix:o.Prefix||r.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":r.inputs?.isDisabled,icon:o.Icon?E1[o.Icon]:r.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":r.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":r.inputs?.z_debug_forceOpenState};return b`
                        <${dl.assign(a)}
                            ${U(dl.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${dl}>
                    `}})})}}),aL=Ee({parent:wr,title:Gi.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return b`
                    <${Gi}>Error Content</${Gi}>
                `}})}}),q0=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],sL=Ee({parent:wr,title:Bt.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0,quantity:0}},styles:k`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Se.Text,label:"First Name",value:r.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:Se.Text,label:"Last Name",value:r.lastName,isRequired:!0},subscribe:{type:Se.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Se.Email,label:"Email Address",value:r.email},password:{type:Se.NewPassword,label:"Password",value:r.password},userRole:{type:Se.Select,label:"Role",options:q0,value:r.userRole,placeholder:"placeholder"},quantity:{type:Se.Number,label:"Quantity",value:r.quantity,min:0,max:100,step:2,placeholder:"Enter quantity"},disabledField:{type:Se.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:Se.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return b`
                    <${Bt.assign({fields:n})}
                        ${U(Bt.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${De.assign({text:"Cancel",buttonEmphasis:sr.Subtle,colorVariant:se.Neutral})}></${De}>
                            <${De.assign({text:"Submit"})}></${De}>
                        </div>
                    </${Bt}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:k`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Se.Text,label:"First Name",value:r.firstName},lastName:{type:Se.Text,label:"Last Name",value:r.lastName}};return b`
                    <${Bt.assign({fields:n})}
                        ${U(Bt.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <${Qe.assign({value:"",label:"More stuff"})}></${Qe}>
                        <div class="buttons">
                            <${De.assign({text:"Cancel",buttonEmphasis:sr.Subtle,colorVariant:se.Neutral})}></${De}>
                            <${De.assign({text:"Submit"})}></${De}>
                        </div>
                    </${Bt}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:k`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${Bt} {
                    width: 400px;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Se.Text,label:"First Name",value:r.firstName},lastName:{type:Se.Text,label:"Last Name",value:r.lastName},subscribe:{type:Se.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Se.Email,label:"Email Address",value:r.email},password:{type:Se.NewPassword,label:"Password",value:r.password},userRole:{type:Se.Select,label:"Role",options:q0,value:r.userRole}};return b`
                    <${Bt.assign({fields:n})}
                        ${U(Bt.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${De.assign({text:"Cancel",buttonEmphasis:sr.Subtle,colorVariant:se.Neutral})}></${De}>
                            <${De.assign({text:"Submit"})}></${De}>
                        </div>
                    </${Bt}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:k`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:r,updateState:t}){const n={firstName:{type:Se.Text,label:"First Name",value:r.firstName},lastName:{type:Se.Text,label:"Last Name",value:r.lastName},subscribe:{type:Se.Checkbox,label:"Subscribe to updates",value:r.subscribe},email:{type:Se.Email,label:"Email Address",value:r.email},password:{type:Se.NewPassword,label:"Password",value:r.password},userRole:{type:Se.Select,label:"Role",options:q0,value:r.userRole}};return b`
                    <${Bt.assign({fields:n,isDisabled:!0})}
                        ${U(Bt.events.valueChange,o=>{t({...r,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${De.assign({text:"Cancel",buttonEmphasis:sr.Subtle,colorVariant:se.Neutral})}></${De}>
                            <${De.assign({text:"Submit"})}></${De}>
                        </div>
                    </${Bt}>
                `}})}}),lL=Ee({title:B.tagName,parent:wr,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return b`
                    <${B.assign({icon:br})}></${B}>
                `}}),e({title:"using createColoredIcon",render(){return b`
                    <${B.assign({icon:Yt(br,{"vira-icon-stroke-color":"red"})})}></${B}>
                `}}),e({title:"using createSizedIcon",render(){return b`
                    <${B.assign({icon:Ug(br,32)})}></${B}>
                `}}),e({title:"using feather icon",render(){return b`
                    <${B.assign({icon:cl.anchor})}></${B}>
                `}}),e({title:"using customized feather icon",render(){return b`
                    <${B.assign({icon:cl.anchor({height:64,width:64})})}></${B}>
                `}}),e({title:"fit container",styles:k`
                ${B} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return b`
                    <${B.assign({icon:br,fitContainer:!0})}></${B}>
                `}}),e({title:"colored fit container",styles:k`
                ${B} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return b`
                    <${B.assign({icon:Yt(br,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${B}>
                `}}),e({title:"feather fit container",styles:k`
                ${B} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return b`
                    <${B.assign({icon:cl.anchor,fitContainer:!0})}></${B}>
                `}}),e({title:"customized feather fit container",styles:k`
                ${B} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return b`
                    <${B.assign({icon:cl.anchor({"stroke-width":4}),fitContainer:!0})}></${B}>
                `}})}}),uL=Ee({title:zo.tagName,parent:wr,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:k`
                    border-radius: 32px;
                `,loadingSlot:b`
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
                        <${B.assign({icon:hi,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:k`
                    border-radius: 32px;
                `,errorSlot:b`
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
                        <${B.assign({icon:Zl,fitContainer:!0})}
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
                `,allowReload:!0,loadingSlot:b`
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
                        <${B.assign({icon:hi,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `,errorSlot:b`
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
                        <${B.assign({icon:Zl,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${B}>
                    </div>
                `}].forEach(t=>{e({title:t.title,styles:k`
                    ${zo} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${t.styles||k``}
                    }

                    ${t.allowReload?k`
                              ${zo} {
                                  cursor: pointer;
                              }

                              ${zo}:hover {
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
                `,state(){return{imageUrl:t.inputs.imageUrl}},render({state:n,updateState:o}){return b`
                        <${zo.assign({...t.inputs,imageUrl:n.imageUrl})}
                            ${U("click",()=>{t.allowReload&&o({imageUrl:`${t.inputs.imageUrl}?di=${To()}`})})}
                        >
                            ${t.loadingSlot?b`
                                      <div class="slot-wrapper" slot=${zo.slotNames.loading}>
                                          ${t.loadingSlot}
                                      </div>
                                  `:ee}${t.errorSlot?b`
                                      <div class="slot-wrapper" slot=${zo.slotNames.error}>
                                          ${t.errorSlot}
                                      </div>
                                  `:ee}
                        </${zo}>
                    `}})})}}),cL=Ee({title:Qe.tagName,parent:wr,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:ge.Color,initValue:R["vira-form-foreground-color"].default},"Placeholder color":{controlType:ge.Color,initValue:R["vira-form-placeholder-color"].default},"Border color":{controlType:ge.Color,initValue:R["vira-form-border-color"].default},"Focus color":{controlType:ge.Color,initValue:R["vira-form-focus-outline-color"].default},"Selection color":{controlType:ge.Color,initValue:R["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function r({styles:n,title:o,inputs:a}){e({title:o,styles:k`
                    ${n||k``}
                `,state(){return{value:a.value}},render({state:s,updateState:l,controls:u}){const f={[String(R["vira-form-foreground-color"].name)]:u["Text color"],[String(R["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(R["vira-form-border-color"].name)]:u["Border color"],[String(R["vira-form-focus-outline-color"].name)]:u["Focus color"],[String(R["vira-form-text-selection-color"].name)]:u["Selection color"]},g=Ke(f,(p,m)=>m||"inherit"),h=Object.entries(g).map(([p,m])=>[p,m].join(": ")+";").join(`
`);return b`
                        <${Qe.assign({...a,value:s.value})}
                            style=${h}
                            ${U(Qe.events.valueChange,p=>{l({value:p.detail}),console.info("changed:",p.detail)})}
                        ></${Qe}>
                    `}})}i(r,"defineInputExample"),[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:br}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:k`
                    ${Qe} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:br}},{title:"taller height",styles:k`
                    ${Qe} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:br}},{title:"shorter height",styles:k`
                    ${Qe} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:br}},{title:"max width",styles:k`
                    ${Qe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:k`
                    ${Qe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:_i.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:_i.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:k`
                    ${Qe} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:k`
                    ${Qe} {
                        width: unset;
                    }
                `}].forEach(r)}}),dL=Ee({title:io.tagName,parent:wr,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:ge.Color,initValue:""},"Hover color":{controlType:ge.Color,initValue:""},"Active color":{controlType:ge.Color,initValue:""}},defineExamples({defineExample:e}){function r({title:t,inputs:n}){e({title:t,render({controls:o}){const a=k`
                        ${R["vira-form-accent-primary-color"].name}: ${Oe(o["Hover color"]||"inherit")};
                        ${R["vira-form-accent-primary-active-color"].name}: ${Oe(o["Active color"]||"inherit")};
                        color: ${Oe(o["CSS Color"]||"inherit")};
                    `;return b`
                        <${io.assign(n)} style=${a}>My Link</${io}>
                    `}})}i(r,"defineLinkExample"),r({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),r({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(t,n){return console.info(t,n),!1}}}}}),r({title:"disabled link styles",inputs:{disableLinkStyles:!0,link:{newTab:!0,url:"https://www.wikipedia.org"}}})}}),fL=Ee({title:qo.tagName,parent:wr,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:r,updateState:t}){return b`
                    <button
                        ${U("click",()=>{t({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${qo.assign({open:r.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${U(qo.events.modalClose,()=>{t({modalOpen:!1})})}
                    >
                        Modal Content
                    </${qo}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:k`
                ${qo} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${R["vira-form-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:r,updateState:t}){return b`
                    <button
                        ${U("click",()=>{t({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${qo.assign({open:r.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${U(qo.events.modalClose,()=>{t({modalOpen:!1})})}
                    >
                        Modal Content
                    </${qo}>
                `}})}}),hl=k`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,V0=b`
    <${ao.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${ao.slotNames.large}>Large</div>
        <div class="small" slot=${ao.slotNames.small}>Small</div>
    </${ao}>
`,_a={max:120,min:25,default:80},vy=cr()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":li(_a.default)},state(){return{intervalId:void 0,increment:1}},styles:i(({cssVars:e})=>k`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,"styles"),init({state:e,updateState:r,host:t,cssVars:n}){globalThis.clearInterval(e.intervalId),r({intervalId:globalThis.setInterval(()=>{const o=dd.isNumber(pD(c8({onElement:t,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||_a.default;(o>=_a.max||o<=_a.min)&&r({increment:e.increment*-1}),Ph({onElement:t,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:li(o+e.increment)})},10)})},cleanup({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:void 0})},render(){return b`
            <slot></slot>
        `}}),yy=cr()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":li(_a.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:k`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${hl}

        .large {
            white-space: nowrap;
        }
    `,init({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:globalThis.setInterval(()=>{r({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:r}){globalThis.clearInterval(e.intervalId),r({intervalId:void 0})},render({state:e}){return b`
            <${ao.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${ao.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${ao.slotNames.small}>Small</div>
            </${ao}>
        `}}),gL=Ee({title:ao.tagName,parent:wr,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:k`
                ${hl}
            `,render(){return V0}}),e({title:"overflowing",styles:k`
                ${hl}

                ${ao} {
                    max-width: 50px;
                }
            `,render(){return V0}}),e({title:"dynamic size",styles:k`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${hl}

                .wrapper {
                    width: ${_a.max+10}px;
                }
            `,render(){return b`
                    <div class="wrapper">
                        <${vy}>
                            ${V0}
                        </${vy}>
                    </div>
                `}}),e({title:"dynamic slot",styles:k`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${hl}
            `,render(){return b`
                    <${yy}></${yy}>
                `}})}}),hL=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:k`
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
        `,inputs:{value:100}}],pL=Ee({parent:wr,title:ko.tagName,defineExamples({defineExample:e}){hL.forEach(r=>{e({title:r.title,styles:k`
                    ${r.styles||k``}
                `,render(){return b`
                        <${ko.assign({value:50,...r.inputs})}></${ko}>
                    `}})})}}),_r=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],mL=[{title:"basic",inputs:{options:_r}},{title:"with really long option",inputs:{options:[..._r,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:_r,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:_r,disabled:!0}},{title:"error",inputs:{options:_r,hasError:!0}},{title:"with icon",inputs:{options:_r,icon:br}},{title:"custom width",inputs:{options:_r},styles:k`
            ${ur} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:_r,icon:br},styles:k`
            ${ur} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:_r,icon:br},styles:k`
            ${ur} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:_r,label:"Pick an option"}},{title:"with long label",inputs:{options:_r,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:_r,label:"Pick a really really really really long option"},styles:k`
            ${ur} {
                width: unset;
            }
        `},{title:"raw",inputs:{options:[..._r,{label:"really really really really really really really really long option",value:"something"}],rawSelect:!0,icon:br}}],bL=Ee({parent:wr,title:ur.tagName,defineExamples({defineExample:e}){mL.forEach(r=>{e({title:r.title,styles:k`
                    ${r.styles||k``}
                `,state(){return{selected:void 0}},render({state:t,updateState:n}){return b`
                        <${ur.assign({...r.inputs,value:t.selected??r.inputs.value})}
                            ${U(ur.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${ur}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return b`
                    <${ur.assign({options:_r,value:_r[0]?.value})}></${ur}>
                `}}),e({title:"force update",render(){return b`
                    <${wy}></${wy}>
                `}})}}),wy=cr()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:r}){e({intervalId:globalThis.setInterval(()=>{const t=_r.findIndex(o=>o.value===r.value),n=lr.isDefined(_r[(t+1)%_r.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return b`
            <${ur.assign({options:_r,value:e.value})}></${ur}>
        `}}),vL=[{label:"basic",isClickable:void 0},{label:"selectable",isClickable:{selected:!0}},{label:"cancellable",isClickable:{cancellable:!0}},{label:"disabled",disabled:!0,isClickable:{selected:!0}}],yL=Ee({parent:wr,title:el.tagName,descriptionParagraphs:["A tag element with selectable, cancellable, size, emphasis, and color variants."],defineExamples({defineExample:e}){Qd.forEach(r=>{e({title:r,styles:k`
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
                `,state(){return{clicked:{}}},render({state:t,updateState:n}){return vL.map(({label:o,...a})=>b`
                            <h3>${o}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${ia.map(s=>b`
                                                <th>${s}</th>
                                            `)}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${ef.map(s=>b`
                                            <tr>
                                                <th>${s}</th>
                                                ${ia.map(l=>{const u=[o,s,l].join("-"),f=S.isBoolean(a.isClickable?.selected)?{selected:!t.clicked[u]}:a.isClickable,g=b`
                                                        <${el.assign({text:"Label",...a,size:r,emphasis:s,color:l,isClickable:f})}
                                                            class=${ot({cancelled:!!a.isClickable?.cancellable&&!!t.clicked[u]})}
                                                            ${U(el.events.cancel,()=>{n({clicked:{...t.clicked,[u]:!0}})})}
                                                            ${U(el.events.toggle,h=>{n({clicked:{...t.clicked,[u]:!h.detail}})})}
                                                        ></${el}>
                                                    `;return b`
                                                        <td>${g}</td>
                                                    `})}
                                            </tr>
                                        `)}
                                </tbody>
                            </table>
                        `)}})})}});function pm(e,r){Qa(e).forEach(t=>{r({title:t.name,styles:k`
                button {
                    ${Xr}
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
                    ${y["vira-icon-stroke-width"].name}: ${Oe(n["Stroke Width"]?li(n["Stroke Width"]):"inherit")};
                `;return b`
                    <button>
                        <${B.assign({icon:t})}
                            style=${o}
                        ></${B}>
                    </button>
                `}})})}i(pm,"defineIconExamples");const wL=Ee({title:"16px Icons",parent:vf,defineExamples({defineExample:e}){pm(fB,e)}}),kL=Ee({title:"24px Icons",parent:vf,defineExamples({defineExample:e}){pm(dB,e)}}),$L=Ee({title:"Feather Icons",parent:vf,defineExamples({defineExample:e}){pm(cl,e)}}),xL=[wr,vf,hm,bf],DL=[ZR,XR,eL,rL,tL,nL,iL,aL,sL,lL,uL,cL,dL,_R,WR,qR,fL,gL,KR,pL,bL,yL].sort((e,r)=>e.title.localeCompare(r.title)),CL=[...DL,OR,LR,jR,$L,wL,kL,GR,...BR],EL=[...xL,...CL];Zn()({tagName:"vira-book-app",styles:k`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${tc} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return b`
            <${tc.assign({internalRouterConfig:{basePath:qp("vira"),useInternalRouter:!0},pages:EL,themeColor:"#33ccff"})}>
                <h1 slot=${tc.slotNames.navHeader}>Vira</h1>
            </${tc}>
        `}});export{Zn as d,b as h};
