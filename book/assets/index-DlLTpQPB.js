(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var vt;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(vt||(vt={}));function p0(e,t=n=>n){const n=new Map;return e.filter(r=>{const i=t(r);return n.get(i)?!1:(n.set(i,r),!0)})}class Df{diff(t,n,r={}){let i;typeof r=="function"?(i=r,r={}):"callback"in r&&(i=r.callback);const o=this.castInput(t,r),s=this.castInput(n,r),a=this.removeEmpty(this.tokenize(o,r)),u=this.removeEmpty(this.tokenize(s,r));return this.diffWithOptionsObj(a,u,r,i)}diffWithOptionsObj(t,n,r,i){var o;const s=N=>{if(N=this.postProcess(N,r),i){setTimeout(function(){i(N)},0);return}else return N},a=n.length,u=t.length;let l=1,c=a+u;r.maxEditLength!=null&&(c=Math.min(c,r.maxEditLength));const f=(o=r.timeout)!==null&&o!==void 0?o:1/0,d=Date.now()+f,y=[{oldPos:-1,lastComponent:void 0}];let C=this.extractCommon(y[0],n,t,0,r);if(y[0].oldPos+1>=u&&C+1>=a)return s(this.buildValues(y[0].lastComponent,n,t));let D=-1/0,S=1/0;const A=()=>{for(let N=Math.max(D,-l);N<=Math.min(S,l);N+=2){let U;const W=y[N-1],G=y[N+1];W&&(y[N-1]=void 0);let je=!1;if(G){const ot=G.oldPos-N;je=G&&0<=ot&&ot<a}const Ft=W&&W.oldPos+1<u;if(!je&&!Ft){y[N]=void 0;continue}if(!Ft||je&&W.oldPos<G.oldPos?U=this.addToPath(G,!0,!1,0,r):U=this.addToPath(W,!1,!0,1,r),C=this.extractCommon(U,n,t,N,r),U.oldPos+1>=u&&C+1>=a)return s(this.buildValues(U.lastComponent,n,t))||!0;y[N]=U,U.oldPos+1>=u&&(S=Math.min(S,N-1)),C+1>=a&&(D=Math.max(D,N+1))}l++};if(i)(function N(){setTimeout(function(){if(l>c||Date.now()>d)return i(void 0);A()||N()},0)})();else for(;l<=c&&Date.now()<=d;){const N=A();if(N)return N}}addToPath(t,n,r,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===n&&s.removed===r?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:n,removed:r,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:n,removed:r,previousComponent:s}}}extractCommon(t,n,r,i,o){const s=n.length,a=r.length;let u=t.oldPos,l=u-i,c=0;for(;l+1<s&&u+1<a&&this.equals(r[u+1],n[l+1],o);)l++,u++,c++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!o.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,n,r){return r.comparator?r.comparator(t,n):t===n||!!r.ignoreCase&&t.toLowerCase()===n.toLowerCase()}removeEmpty(t){const n=[];for(let r=0;r<t.length;r++)t[r]&&n.push(t[r]);return n}castInput(t,n){return t}tokenize(t,n){return Array.from(t)}join(t){return t.join("")}postProcess(t,n){return t}get useLongestToken(){return!1}buildValues(t,n,r){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let a=0,u=0,l=0;for(;a<s;a++){const c=i[a];if(c.removed)c.value=this.join(r.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let f=n.slice(u,u+c.count);f=f.map(function(d,y){const C=r[l+y];return C.length>d.length?C:d}),c.value=this.join(f)}else c.value=this.join(n.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return i}}function cm(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function fm(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function Ec(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function xc(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function ls(e,t){return Ec(e,t,"")}function Ta(e,t){return xc(e,t,"")}function dm(e,t){return t.slice(0,yb(e,t))}function yb(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);const i=Array(r);let o=0;i[0]=0;for(let s=1;s<r;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=n;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function cs(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function _r(e){const t=e.match(/^\s*/);return t?t[0]:""}const du="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",wb=new RegExp(`[${du}]+|\\s+|[^${du}]`,"ug");class bb extends Df{equals(t,n,r){return r.ignoreCase&&(t=t.toLowerCase(),n=n.toLowerCase()),t.trim()===n.trim()}tokenize(t,n={}){let r;if(n.intlSegmenter){const s=n.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Array.from(s.segment(t),a=>a.segment)}else r=t.match(wb)||[];const i=[];let o=null;return r.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((n,r)=>r==0?n:n.replace(/^\s+/,"")).join("")}postProcess(t,n){if(!t||n.oneChangePerToken)return t;let r=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&mm(r,o,i,s),r=s,i=null,o=null)}),(i||o)&&mm(r,o,i,null),t}}const $b=new bb;function vb(e,t,n){return n?.ignoreWhitespace!=null&&!n.ignoreWhitespace?xb(e,t,n):$b.diff(e,t,n)}function mm(e,t,n,r){if(t&&n){const i=_r(t.value),o=cs(t.value),s=_r(n.value),a=cs(n.value);if(e){const u=cm(i,s);e.value=xc(e.value,s,u),t.value=ls(t.value,u),n.value=ls(n.value,u)}if(r){const u=fm(o,a);r.value=Ec(r.value,a,u),t.value=Ta(t.value,u),n.value=Ta(n.value,u)}}else if(n){if(e){const i=_r(n.value);n.value=n.value.substring(i.length)}if(r){const i=_r(r.value);r.value=r.value.substring(i.length)}}else if(e&&r){const i=_r(r.value),o=_r(t.value),s=cs(t.value),a=cm(i,o);t.value=ls(t.value,a);const u=fm(ls(i,a),s);t.value=Ta(t.value,u),r.value=Ec(r.value,i,u),e.value=xc(e.value,i,i.slice(0,i.length-u.length))}else if(r){const i=_r(r.value),o=cs(t.value),s=dm(o,i);t.value=Ta(t.value,s)}else if(e){const i=cs(e.value),o=_r(t.value),s=dm(i,o);t.value=ls(t.value,s)}}class Db extends Df{tokenize(t){const n=new RegExp(`(\\r?\\n)|[${du}]+|[^\\S\\n\\r]+|[^${du}]`,"ug");return t.match(n)||[]}}const Eb=new Db;function xb(e,t,n){return Eb.diff(e,t,n)}class Cb extends Df{constructor(){super(...arguments),this.tokenize=Fb}equals(t,n,r){return r.ignoreWhitespace?((!r.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!r.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):r.ignoreNewlineAtEof&&!r.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(t,n,r)}}const Ab=new Cb;function kb(e,t,n){return Ab.diff(e,t,n)}function Fb(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let i=0;i<r.length;i++){const o=r[i];i%2&&!t.newlineIsToken?n[n.length-1]+=o:n.push(o)}return n}function hm(e){return g0(e,new Map)}function g0(e,t){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((r,i)=>r[0].localeCompare(i[0])).forEach(([r,i])=>{const o=g0(i,t);n[r]=o}),n}else return e}var Sb=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,Nb=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,Ib=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Pl={Space_Separator:Sb,ID_Start:Nb,ID_Continue:Ib},Ue={isSpaceSeparator(e){return typeof e=="string"&&Pl.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Pl.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Pl.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let Cc,jt,Dr,mu,ei,Yn,dt,Ef,ks;var Pb=function(t,n){Cc=String(t),jt="start",Dr=[],mu=0,ei=1,Yn=0,dt=void 0,Ef=void 0,ks=void 0;do dt=Tb(),Bb[jt]();while(dt.type!=="eof");return typeof n=="function"?Ac({"":ks},"",n):ks};function Ac(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let i=0;i<r.length;i++){const o=String(i),s=Ac(r,o,n);s===void 0?delete r[o]:Object.defineProperty(r,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in r){const o=Ac(r,i,n);o===void 0?delete r[i]:Object.defineProperty(r,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let Q,Y,$s,wr,se;function Tb(){for(Q="default",Y="",$s=!1,wr=1;;){se=Sr();const e=y0[Q]();if(e)return e}}function Sr(){if(Cc[mu])return String.fromCodePoint(Cc.codePointAt(mu))}function F(){const e=Sr();return e===`
`?(ei++,Yn=0):e?Yn+=e.length:Yn++,e&&(mu+=e.length),e}const y0={default(){switch(se){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":F();return;case"/":F(),Q="comment";return;case void 0:return F(),xe("eof")}if(Ue.isSpaceSeparator(se)){F();return}return y0[jt]()},comment(){switch(se){case"*":F(),Q="multiLineComment";return;case"/":F(),Q="singleLineComment";return}throw Ce(F())},multiLineComment(){switch(se){case"*":F(),Q="multiLineCommentAsterisk";return;case void 0:throw Ce(F())}F()},multiLineCommentAsterisk(){switch(se){case"*":F();return;case"/":F(),Q="default";return;case void 0:throw Ce(F())}F(),Q="multiLineComment"},singleLineComment(){switch(se){case`
`:case"\r":case"\u2028":case"\u2029":F(),Q="default";return;case void 0:return F(),xe("eof")}F()},value(){switch(se){case"{":case"[":return xe("punctuator",F());case"n":return F(),yi("ull"),xe("null",null);case"t":return F(),yi("rue"),xe("boolean",!0);case"f":return F(),yi("alse"),xe("boolean",!1);case"-":case"+":F()==="-"&&(wr=-1),Q="sign";return;case".":Y=F(),Q="decimalPointLeading";return;case"0":Y=F(),Q="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Y=F(),Q="decimalInteger";return;case"I":return F(),yi("nfinity"),xe("numeric",1/0);case"N":return F(),yi("aN"),xe("numeric",NaN);case'"':case"'":$s=F()==='"',Y="",Q="string";return}throw Ce(F())},identifierNameStartEscape(){if(se!=="u")throw Ce(F());F();const e=kc();switch(e){case"$":case"_":break;default:if(!Ue.isIdStartChar(e))throw pm();break}Y+=e,Q="identifierName"},identifierName(){switch(se){case"$":case"_":case"‌":case"‍":Y+=F();return;case"\\":F(),Q="identifierNameEscape";return}if(Ue.isIdContinueChar(se)){Y+=F();return}return xe("identifier",Y)},identifierNameEscape(){if(se!=="u")throw Ce(F());F();const e=kc();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!Ue.isIdContinueChar(e))throw pm();break}Y+=e,Q="identifierName"},sign(){switch(se){case".":Y=F(),Q="decimalPointLeading";return;case"0":Y=F(),Q="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Y=F(),Q="decimalInteger";return;case"I":return F(),yi("nfinity"),xe("numeric",wr*(1/0));case"N":return F(),yi("aN"),xe("numeric",NaN)}throw Ce(F())},zero(){switch(se){case".":Y+=F(),Q="decimalPoint";return;case"e":case"E":Y+=F(),Q="decimalExponent";return;case"x":case"X":Y+=F(),Q="hexadecimal";return}return xe("numeric",wr*0)},decimalInteger(){switch(se){case".":Y+=F(),Q="decimalPoint";return;case"e":case"E":Y+=F(),Q="decimalExponent";return}if(Ue.isDigit(se)){Y+=F();return}return xe("numeric",wr*Number(Y))},decimalPointLeading(){if(Ue.isDigit(se)){Y+=F(),Q="decimalFraction";return}throw Ce(F())},decimalPoint(){switch(se){case"e":case"E":Y+=F(),Q="decimalExponent";return}if(Ue.isDigit(se)){Y+=F(),Q="decimalFraction";return}return xe("numeric",wr*Number(Y))},decimalFraction(){switch(se){case"e":case"E":Y+=F(),Q="decimalExponent";return}if(Ue.isDigit(se)){Y+=F();return}return xe("numeric",wr*Number(Y))},decimalExponent(){switch(se){case"+":case"-":Y+=F(),Q="decimalExponentSign";return}if(Ue.isDigit(se)){Y+=F(),Q="decimalExponentInteger";return}throw Ce(F())},decimalExponentSign(){if(Ue.isDigit(se)){Y+=F(),Q="decimalExponentInteger";return}throw Ce(F())},decimalExponentInteger(){if(Ue.isDigit(se)){Y+=F();return}return xe("numeric",wr*Number(Y))},hexadecimal(){if(Ue.isHexDigit(se)){Y+=F(),Q="hexadecimalInteger";return}throw Ce(F())},hexadecimalInteger(){if(Ue.isHexDigit(se)){Y+=F();return}return xe("numeric",wr*Number(Y))},string(){switch(se){case"\\":F(),Y+=Mb();return;case'"':if($s)return F(),xe("string",Y);Y+=F();return;case"'":if(!$s)return F(),xe("string",Y);Y+=F();return;case`
`:case"\r":throw Ce(F());case"\u2028":case"\u2029":Rb(se);break;case void 0:throw Ce(F())}Y+=F()},start(){switch(se){case"{":case"[":return xe("punctuator",F())}Q="value"},beforePropertyName(){switch(se){case"$":case"_":Y=F(),Q="identifierName";return;case"\\":F(),Q="identifierNameStartEscape";return;case"}":return xe("punctuator",F());case'"':case"'":$s=F()==='"',Q="string";return}if(Ue.isIdStartChar(se)){Y+=F(),Q="identifierName";return}throw Ce(F())},afterPropertyName(){if(se===":")return xe("punctuator",F());throw Ce(F())},beforePropertyValue(){Q="value"},afterPropertyValue(){switch(se){case",":case"}":return xe("punctuator",F())}throw Ce(F())},beforeArrayValue(){if(se==="]")return xe("punctuator",F());Q="value"},afterArrayValue(){switch(se){case",":case"]":return xe("punctuator",F())}throw Ce(F())},end(){throw Ce(F())}};function xe(e,t){return{type:e,value:t,line:ei,column:Yn}}function yi(e){for(const t of e){if(Sr()!==t)throw Ce(F());F()}}function Mb(){switch(Sr()){case"b":return F(),"\b";case"f":return F(),"\f";case"n":return F(),`
`;case"r":return F(),"\r";case"t":return F(),"	";case"v":return F(),"\v";case"0":if(F(),Ue.isDigit(Sr()))throw Ce(F());return"\0";case"x":return F(),Ob();case"u":return F(),kc();case`
`:case"\u2028":case"\u2029":return F(),"";case"\r":return F(),Sr()===`
`&&F(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Ce(F());case void 0:throw Ce(F())}return F()}function Ob(){let e="",t=Sr();if(!Ue.isHexDigit(t)||(e+=F(),t=Sr(),!Ue.isHexDigit(t)))throw Ce(F());return e+=F(),String.fromCodePoint(parseInt(e,16))}function kc(){let e="",t=4;for(;t-- >0;){const n=Sr();if(!Ue.isHexDigit(n))throw Ce(F());e+=F()}return String.fromCodePoint(parseInt(e,16))}const Bb={start(){if(dt.type==="eof")throw wi();Tl()},beforePropertyName(){switch(dt.type){case"identifier":case"string":Ef=dt.value,jt="afterPropertyName";return;case"punctuator":Ma();return;case"eof":throw wi()}},afterPropertyName(){if(dt.type==="eof")throw wi();jt="beforePropertyValue"},beforePropertyValue(){if(dt.type==="eof")throw wi();Tl()},beforeArrayValue(){if(dt.type==="eof")throw wi();if(dt.type==="punctuator"&&dt.value==="]"){Ma();return}Tl()},afterPropertyValue(){if(dt.type==="eof")throw wi();switch(dt.value){case",":jt="beforePropertyName";return;case"}":Ma()}},afterArrayValue(){if(dt.type==="eof")throw wi();switch(dt.value){case",":jt="beforeArrayValue";return;case"]":Ma()}},end(){}};function Tl(){let e;switch(dt.type){case"punctuator":switch(dt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=dt.value;break}if(ks===void 0)ks=e;else{const t=Dr[Dr.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Ef,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Dr.push(e),Array.isArray(e)?jt="beforeArrayValue":jt="beforePropertyName";else{const t=Dr[Dr.length-1];t==null?jt="end":Array.isArray(t)?jt="afterArrayValue":jt="afterPropertyValue"}}function Ma(){Dr.pop();const e=Dr[Dr.length-1];e==null?jt="end":Array.isArray(e)?jt="afterArrayValue":jt="afterPropertyValue"}function Ce(e){return hu(e===void 0?`JSON5: invalid end of input at ${ei}:${Yn}`:`JSON5: invalid character '${w0(e)}' at ${ei}:${Yn}`)}function wi(){return hu(`JSON5: invalid end of input at ${ei}:${Yn}`)}function pm(){return Yn-=5,hu(`JSON5: invalid identifier character at ${ei}:${Yn}`)}function Rb(e){console.warn(`JSON5: '${w0(e)}' in strings is not valid ECMAScript; consider escaping`)}function w0(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function hu(e){const t=new SyntaxError(e);return t.lineNumber=ei,t.columnNumber=Yn,t}var Lb=function(t,n,r){const i=[];let o="",s,a,u="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")a=n;else if(Array.isArray(n)){s=[];for(const D of n){let S;typeof D=="string"?S=D:(typeof D=="number"||D instanceof String||D instanceof Number)&&(S=String(D)),S!==void 0&&s.indexOf(S)<0&&s.push(S)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),u="          ".substr(0,r)):typeof r=="string"&&(u=r.substr(0,10)),c("",{"":t});function c(D,S){let A=S[D];switch(A!=null&&(typeof A.toJSON5=="function"?A=A.toJSON5(D):typeof A.toJSON=="function"&&(A=A.toJSON(D))),a&&(A=a.call(S,D,A)),A instanceof Number?A=Number(A):A instanceof String?A=String(A):A instanceof Boolean&&(A=A.valueOf()),A){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof A=="string")return f(A);if(typeof A=="number")return String(A);if(typeof A=="object")return Array.isArray(A)?C(A):d(A)}function f(D){const S={"'":.1,'"':.2},A={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let N="";for(let W=0;W<D.length;W++){const G=D[W];switch(G){case"'":case'"':S[G]++,N+=G;continue;case"\0":if(Ue.isDigit(D[W+1])){N+="\\x00";continue}}if(A[G]){N+=A[G];continue}if(G<" "){let je=G.charCodeAt(0).toString(16);N+="\\x"+("00"+je).substring(je.length);continue}N+=G}const U=l||Object.keys(S).reduce((W,G)=>S[W]<S[G]?W:G);return N=N.replace(new RegExp(U,"g"),A[U]),U+N+U}function d(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let S=o;o=o+u;let A=s||Object.keys(D),N=[];for(const W of A){const G=c(W,D);if(G!==void 0){let je=y(W)+":";u!==""&&(je+=" "),je+=G,N.push(je)}}let U;if(N.length===0)U="{}";else{let W;if(u==="")W=N.join(","),U="{"+W+"}";else{let G=`,
`+o;W=N.join(G),U=`{
`+o+W+`,
`+S+"}"}}return i.pop(),o=S,U}function y(D){if(D.length===0)return f(D);const S=String.fromCodePoint(D.codePointAt(0));if(!Ue.isIdStartChar(S))return f(D);for(let A=S.length;A<D.length;A++)if(!Ue.isIdContinueChar(String.fromCodePoint(D.codePointAt(A))))return f(D);return D}function C(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let S=o;o=o+u;let A=[];for(let U=0;U<D.length;U++){const W=c(String(U),D);A.push(W!==void 0?W:"null")}let N;if(A.length===0)N="[]";else if(u==="")N="["+A.join(",")+"]";else{let U=`,
`+o,W=A.join(U);N=`[
`+o+W+`,
`+S+"]"}return i.pop(),o=S,N}};const jb={parse:Pb,stringify:Lb};var Ub=jb;const b0="__@@augment-vir-undefined-sentinel@@__",_b=new RegExp(`['"]${b0}['"]`);function h(e,t){if(typeof e=="string")return e;try{return Ub.stringify(e,(r,i)=>i===void 0?b0:typeof i=="bigint"?Number(i):i,t||void 0).split(_b).join("undefined")}catch{return String(e)}}var Vb=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Jn;(function(e){e.Node="node",e.Web="web"})(Jn||(Jn={}));function qb(){return Vb?Jn.Node:Jn.Web}const $0=qb();function xf(e){return $0===e}function v0(e){return e[$0]()}function Wb(e,t){const n=typeof t=="string"&&typeof e=="string",r=typeof t!="string"||typeof e!="string",i=r?kb:vb,o=[n?"":`
`,h(t&&typeof t=="object"&&!Array.isArray(t)?hm(t):t,4),`
`].join(""),s=[n?"":`
`,h(e&&typeof e=="object"&&!Array.isArray(e)?hm(e):e,4),`
`].join(""),a=zb(r,i(o,s)),u=xf(Jn.Node);return[[u?Ar.Green:""," +added (unexpected, added in actual)",u?Ar.Red:""," -missing (expected, missing from actual)",u?Ar.Reset:""].join(""),n?`

`:`
`,a].join("")}var Ar;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(Ar||(Ar={}));var pu;(function(e){e.Added="+",e.Removed="-"})(pu||(pu={}));function zb(e,t){return e?t.flatMap(r=>r.value.split(`
`).map(i=>gm(i,r)).join(`
`)).join(""):t.map(r=>gm(void 0,r)).join("")}function gm(e,t){if(e!=null&&!e)return"";const n=xf(Jn.Node),r=t.added?pu.Added:t.removed?pu.Removed:e==null?"":" ",i=t.added?Ar.Green:t.removed?Ar.Red:Ar.Reset;return[n?i:"",r,e??t.value,Ar.Reset].join("")}function Pe(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Kb(e){return Pe(e).filter(t=>isNaN(Number(t)))}function zn(e){return Kb(e).map(n=>e[n])}const Zb=[".",":",";",",","?","!"],Gb=new RegExp(`[${Zb.join("")}]+$`);function ym(e){return e.replace(Gb,"")}function yt(e){return e==null||e===""?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):h(e)}function qo(...e){const t=e.map(o=>yt(o)).filter(o=>!!ym(o)),n=t[t.length-1]?.endsWith("."),r=t.map(o=>ym(yt(o)));return(r.length<2?r[0]||"":r.join(": "))+(n?".":"")}function et(e){return e instanceof Error?e:new Error(yt(e))}function Cf(e,t){const n=et(e),r=qo(t,n.message);try{return n.message=r,n}catch{return new Error(r,{cause:e})}}var v;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(v||(v={}));var R;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(R||(R={}));R.ClientError,R.ServerError;v.Continue+"",R.Information,v.SwitchingProtocols+"",R.Information,v.Processing+"",R.Information,v.EarlyHints+"",R.Information,v.Ok+"",R.Success,v.Created+"",R.Success,v.Accepted+"",R.Success,v.NonAuthoritativeInformation+"",R.Success,v.NoContent+"",R.Success,v.ResetContent+"",R.Success,v.PartialContent+"",R.Success,v.MultiStatus+"",R.Success,v.AlreadyReported+"",R.Success,v.ImUsed+"",R.Success,v.MultipleChoices+"",R.Redirect,v.MovedPermanently+"",R.Redirect,v.Found+"",R.Redirect,v.SeeOther+"",R.Redirect,v.NotModified+"",R.Redirect,v.UseProxy+"",R.Redirect,v.Unused+"",R.Redirect,v.TemporaryRedirect+"",R.Redirect,v.PermanentRedirect+"",R.Redirect,v.BadRequest+"",R.ClientError,v.Unauthorized+"",R.ClientError,v.PaymentRequired+"",R.ClientError,v.Forbidden+"",R.ClientError,v.NotFound+"",R.ClientError,v.MethodNotAllowed+"",R.ClientError,v.NotAcceptable+"",R.ClientError,v.ProxyAuthenticationRequired+"",R.ClientError,v.RequestTimeout+"",R.ClientError,v.Conflict+"",R.ClientError,v.Gone+"",R.ClientError,v.LengthRequired+"",R.ClientError,v.PreconditionFailed+"",R.ClientError,v.PayloadTooLarge+"",R.ClientError,v.UriTooLong+"",R.ClientError,v.UnsupportedMediaType+"",R.ClientError,v.RangeNotSatisfiable+"",R.ClientError,v.ExpectationFailed+"",R.ClientError,v.ImATeapot+"",R.ClientError,v.MisdirectedRequest+"",R.ClientError,v.UnprocessableContent+"",R.ClientError,v.Locked+"",R.ClientError,v.FailedDependency+"",R.ClientError,v.TooEarly+"",R.ClientError,v.UpgradeRequired+"",R.ClientError,v.PreconditionRequired+"",R.ClientError,v.TooManyRequests+"",R.ClientError,v.RequestHeaderFieldsTooLarge+"",R.ClientError,v.UnavailableForLegalReasons+"",R.ClientError,v.InternalServerError+"",R.ServerError,v.NotImplemented+"",R.ServerError,v.BadGateway+"",R.ServerError,v.ServiceUnavailable+"",R.ServerError,v.GatewayTimeout+"",R.ServerError,v.HttpVersionNotSupported+"",R.ServerError,v.VariantAlsoNegotiates+"",R.ServerError,v.InsufficientStorage+"",R.ServerError,v.LoopDetected+"",R.ServerError,v.NotExtended+"",R.ServerError,v.NetworkAuthenticationRequired+"",R.ServerError;const tu={[R.Information]:[v.Continue,v.SwitchingProtocols,v.Processing,v.EarlyHints],[R.Success]:[v.Ok,v.Created,v.Accepted,v.NonAuthoritativeInformation,v.NoContent,v.ResetContent,v.PartialContent,v.MultiStatus,v.AlreadyReported,v.ImUsed],[R.Redirect]:[v.MultipleChoices,v.MovedPermanently,v.Found,v.SeeOther,v.NotModified,v.UseProxy,v.Unused,v.TemporaryRedirect,v.PermanentRedirect],[R.ClientError]:[v.BadRequest,v.Unauthorized,v.PaymentRequired,v.Forbidden,v.NotFound,v.MethodNotAllowed,v.NotAcceptable,v.ProxyAuthenticationRequired,v.RequestTimeout,v.Conflict,v.Gone,v.LengthRequired,v.PreconditionFailed,v.PayloadTooLarge,v.UriTooLong,v.UnsupportedMediaType,v.RangeNotSatisfiable,v.ExpectationFailed,v.ImATeapot,v.MisdirectedRequest,v.UnprocessableContent,v.Locked,v.FailedDependency,v.TooEarly,v.UpgradeRequired,v.PreconditionRequired,v.TooManyRequests,v.RequestHeaderFieldsTooLarge,v.UnavailableForLegalReasons],[R.ServerError]:[v.InternalServerError,v.NotImplemented,v.BadGateway,v.ServiceUnavailable,v.GatewayTimeout,v.HttpVersionNotSupported,v.VariantAlsoNegotiates,v.InsufficientStorage,v.LoopDetected,v.NotExtended,v.NetworkAuthenticationRequired]};function D0({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class gu{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(et(r))}})}}class _i extends Error{}class Yb extends _i{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Jb extends _i{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Hb extends _i{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class fo extends _i{}class E0 extends _i{constructor(t){super(`Invalid unit ${t}`)}}class St extends _i{}class Vr extends _i{constructor(){super("Zone is an abstract class")}}const O="numeric",Hn="short",fn="long",yu={year:O,month:O,day:O},x0={year:O,month:Hn,day:O},Xb={year:O,month:Hn,day:O,weekday:Hn},C0={year:O,month:fn,day:O},A0={year:O,month:fn,day:O,weekday:fn},k0={hour:O,minute:O},F0={hour:O,minute:O,second:O},S0={hour:O,minute:O,second:O,timeZoneName:Hn},N0={hour:O,minute:O,second:O,timeZoneName:fn},I0={hour:O,minute:O,hourCycle:"h23"},P0={hour:O,minute:O,second:O,hourCycle:"h23"},T0={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:Hn},M0={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:fn},O0={year:O,month:O,day:O,hour:O,minute:O},B0={year:O,month:O,day:O,hour:O,minute:O,second:O},R0={year:O,month:Hn,day:O,hour:O,minute:O},L0={year:O,month:Hn,day:O,hour:O,minute:O,second:O},Qb={year:O,month:Hn,day:O,weekday:Hn,hour:O,minute:O},j0={year:O,month:fn,day:O,hour:O,minute:O,timeZoneName:Hn},U0={year:O,month:fn,day:O,hour:O,minute:O,second:O,timeZoneName:Hn},_0={year:O,month:fn,day:O,weekday:fn,hour:O,minute:O,timeZoneName:fn},V0={year:O,month:fn,day:O,weekday:fn,hour:O,minute:O,second:O,timeZoneName:fn};class ia{get type(){throw new Vr}get name(){throw new Vr}get ianaName(){return this.name}get isUniversal(){throw new Vr}offsetName(t,n){throw new Vr}formatOffset(t,n){throw new Vr}offset(t){throw new Vr}equals(t){throw new Vr}get isValid(){throw new Vr}}let Ml=null;class qu extends ia{static get instance(){return Ml===null&&(Ml=new qu),Ml}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Q0(t,n,r)}formatOffset(t,n){return Fs(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Fc=new Map;function e2(e){let t=Fc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Fc.set(e,t)),t}const t2={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function n2(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,o,s,a,u,l,c]=r;return[s,i,o,a,u,l,c]}function r2(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:o,value:s}=n[i],a=t2[o];o==="era"?r[a]=s:K(a)||(r[a]=parseInt(s,10))}return r}const Ol=new Map;class Pr extends ia{static create(t){let n=Ol.get(t);return n===void 0&&Ol.set(t,n=new Pr(t)),n}static resetCache(){Ol.clear(),Fc.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Pr.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Q0(t,n,r,this.name)}formatOffset(t,n){return Fs(this.offset(t),n)}offset(t){if(!this.valid)return NaN;const n=new Date(t);if(isNaN(n))return NaN;const r=e2(this.name);let[i,o,s,a,u,l,c]=r.formatToParts?r2(r,n):n2(r,n);a==="BC"&&(i=-Math.abs(i)+1);const d=zu({year:i,month:o,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let y=+n;const C=y%1e3;return y-=C>=0?C:1e3+C,(d-y)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let wm={};function i2(e,t={}){const n=JSON.stringify([e,t]);let r=wm[n];return r||(r=new Intl.ListFormat(e,t),wm[n]=r),r}const Sc=new Map;function Nc(e,t={}){const n=JSON.stringify([e,t]);let r=Sc.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),Sc.set(n,r)),r}const Ic=new Map;function o2(e,t={}){const n=JSON.stringify([e,t]);let r=Ic.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),Ic.set(n,r)),r}const Pc=new Map;function s2(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let o=Pc.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),Pc.set(i,o)),o}let vs=null;function a2(){return vs||(vs=new Intl.DateTimeFormat().resolvedOptions().locale,vs)}const Tc=new Map;function q0(e){let t=Tc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Tc.set(e,t)),t}const Mc=new Map;function u2(e){let t=Mc.get(e);if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,"minimalDays"in t||(t={...W0,...t}),Mc.set(e,t)}return t}function l2(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=Nc(e).resolvedOptions(),i=e}catch{const u=e.substring(0,n);r=Nc(u).resolvedOptions(),i=u}const{numberingSystem:o,calendar:s}=r;return[i,o,s]}}function c2(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function f2(e){const t=[];for(let n=1;n<=12;n++){const r=Z.utc(2009,n,1);t.push(e(r))}return t}function d2(e){const t=[];for(let n=1;n<=7;n++){const r=Z.utc(2016,11,13+n);t.push(e(r))}return t}function Oa(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function m2(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||q0(e.locale).numberingSystem==="latn"}class h2{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:o,...s}=r;if(!n||Object.keys(s).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=o2(t,a)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):Nf(t,3);return Ye(n,this.padTo)}}}class p2{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Pr.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=Nc(n,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class g2{constructor(t,n,r){this.opts={style:"long",...r},!n&&H0()&&(this.rtf=s2(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):L2(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const W0={firstDay:1,minimalDays:4,weekend:[6,7]};class ge{static fromOpts(t){return ge.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,o=!1){const s=t||Le.defaultLocale,a=s||(o?"en-US":a2()),u=n||Le.defaultNumberingSystem,l=r||Le.defaultOutputCalendar,c=Bc(i)||Le.defaultWeekSettings;return new ge(a,u,l,c,s)}static resetCache(){vs=null,Sc.clear(),Ic.clear(),Pc.clear(),Tc.clear(),Mc.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return ge.create(t,n,r,i)}constructor(t,n,r,i,o){const[s,a,u]=l2(t);this.locale=s,this.numberingSystem=n||a||null,this.outputCalendar=r||u||null,this.weekSettings=i,this.intl=c2(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=m2(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:ge.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Bc(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Oa(this,t,ng,()=>{const r=this.intl==="ja"||this.intl.startsWith("ja-");n&=!r;const i=n?{month:t,day:"numeric"}:{month:t},o=n?"format":"standalone";if(!this.monthsCache[o][t]){const s=r?a=>this.dtFormatter(a,i).format():a=>this.extract(a,i,"month");this.monthsCache[o][t]=f2(s)}return this.monthsCache[o][t]})}weekdays(t,n=!1){return Oa(this,t,og,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=d2(o=>this.extract(o,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Oa(this,void 0,()=>sg,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[Z.utc(2016,11,13,9),Z.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Oa(this,t,ag,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[Z.utc(-40,1,1),Z.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),o=i.formatToParts(),s=o.find(a=>a.type.toLowerCase()===r);return s?s.value:null}numberFormatter(t={}){return new h2(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new p2(t,this.intl,n)}relFormatter(t={}){return new g2(this.intl,this.isEnglish(),t)}listFormatter(t={}){return i2(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||q0(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:X0()?u2(this.locale):W0}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Bl=null;class Ut extends ia{static get utcInstance(){return Bl===null&&(Bl=new Ut(0)),Bl}static instance(t){return t===0?Ut.utcInstance:new Ut(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Ut(Ku(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Fs(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Fs(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return Fs(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class y2 extends ia{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Gr(e,t){if(K(e)||e===null)return t;if(e instanceof ia)return e;if(E2(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?qu.instance:n==="utc"||n==="gmt"?Ut.utcInstance:Ut.parseSpecifier(n)||Pr.create(e)}else return Hr(e)?Ut.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new y2(e)}const Af={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},bm={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},w2=Af.hanidec.replace(/[\[|\]]/g,"").split("");function b2(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(Af.hanidec)!==-1)t+=w2.indexOf(e[n]);else for(const i in bm){const[o,s]=bm[i];r>=o&&r<=s&&(t+=r-o)}}return parseInt(t,10)}else return t}const Oc=new Map;function $2(){Oc.clear()}function _n({numberingSystem:e},t=""){const n=e||"latn";let r=Oc.get(n);r===void 0&&(r=new Map,Oc.set(n,r));let i=r.get(t);return i===void 0&&(i=new RegExp(`${Af[n]}${t}`),r.set(t,i)),i}let $m=()=>Date.now(),vm="system",Dm=null,Em=null,xm=null,Cm=60,Am,km=null;class Le{static get now(){return $m}static set now(t){$m=t}static set defaultZone(t){vm=t}static get defaultZone(){return Gr(vm,qu.instance)}static get defaultLocale(){return Dm}static set defaultLocale(t){Dm=t}static get defaultNumberingSystem(){return Em}static set defaultNumberingSystem(t){Em=t}static get defaultOutputCalendar(){return xm}static set defaultOutputCalendar(t){xm=t}static get defaultWeekSettings(){return km}static set defaultWeekSettings(t){km=Bc(t)}static get twoDigitCutoffYear(){return Cm}static set twoDigitCutoffYear(t){Cm=t%100}static get throwOnInvalid(){return Am}static set throwOnInvalid(t){Am=t}static resetCaches(){ge.resetCache(),Pr.resetCache(),Z.resetCache(),$2()}}class Zn{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const z0=[0,31,59,90,120,151,181,212,243,273,304,334],K0=[0,31,60,91,121,152,182,213,244,274,305,335];function Fn(e,t){return new Zn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function kf(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function Z0(e,t,n){return n+(oa(e)?K0:z0)[t-1]}function G0(e,t){const n=oa(e)?K0:z0,r=n.findIndex(o=>o<t),i=t-n[r];return{month:r+1,day:i}}function Ff(e,t){return(e-t+7)%7+1}function wu(e,t=4,n=1){const{year:r,month:i,day:o}=e,s=Z0(r,i,o),a=Ff(kf(r,i,o),n);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=r-1,u=js(l,t,n)):u>js(r,t,n)?(l=r+1,u=1):l=r,{weekYear:l,weekNumber:u,weekday:a,...Zu(e)}}function Fm(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:o}=e,s=Ff(kf(r,1,t),n),a=go(r);let u=i*7+o-s-7+t,l;u<1?(l=r-1,u+=go(l)):u>a?(l=r+1,u-=go(r)):l=r;const{month:c,day:f}=G0(l,u);return{year:l,month:c,day:f,...Zu(e)}}function Rl(e){const{year:t,month:n,day:r}=e,i=Z0(t,n,r);return{year:t,ordinal:i,...Zu(e)}}function Sm(e){const{year:t,ordinal:n}=e,{month:r,day:i}=G0(t,n);return{year:t,month:r,day:i,...Zu(e)}}function Nm(e,t){if(!K(e.localWeekday)||!K(e.localWeekNumber)||!K(e.localWeekYear)){if(!K(e.weekday)||!K(e.weekNumber)||!K(e.weekYear))throw new fo("Cannot mix locale-based week fields with ISO-based week fields");return K(e.localWeekday)||(e.weekday=e.localWeekday),K(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),K(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function v2(e,t=4,n=1){const r=Wu(e.weekYear),i=Sn(e.weekNumber,1,js(e.weekYear,t,n)),o=Sn(e.weekday,1,7);return r?i?o?!1:Fn("weekday",e.weekday):Fn("week",e.weekNumber):Fn("weekYear",e.weekYear)}function D2(e){const t=Wu(e.year),n=Sn(e.ordinal,1,go(e.year));return t?n?!1:Fn("ordinal",e.ordinal):Fn("year",e.year)}function Y0(e){const t=Wu(e.year),n=Sn(e.month,1,12),r=Sn(e.day,1,bu(e.year,e.month));return t?n?r?!1:Fn("day",e.day):Fn("month",e.month):Fn("year",e.year)}function J0(e){const{hour:t,minute:n,second:r,millisecond:i}=e,o=Sn(t,0,23)||t===24&&n===0&&r===0&&i===0,s=Sn(n,0,59),a=Sn(r,0,59),u=Sn(i,0,999);return o?s?a?u?!1:Fn("millisecond",i):Fn("second",r):Fn("minute",n):Fn("hour",t)}function K(e){return typeof e>"u"}function Hr(e){return typeof e=="number"}function Wu(e){return typeof e=="number"&&e%1===0}function E2(e){return typeof e=="string"}function x2(e){return Object.prototype.toString.call(e)==="[object Date]"}function H0(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function X0(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function C2(e){return Array.isArray(e)?e:[e]}function Im(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const o=[t(i),i];return r&&n(r[0],o[0])===r[0]?r:o},null)[1]}function A2(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function Co(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Bc(e){if(e==null)return null;if(typeof e!="object")throw new St("Week settings must be an object");if(!Sn(e.firstDay,1,7)||!Sn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Sn(t,1,7)))throw new St("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Sn(e,t,n){return Wu(e)&&e>=t&&e<=n}function k2(e,t){return e-t*Math.floor(e/t)}function Ye(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function zr(e){if(!(K(e)||e===null||e===""))return parseInt(e,10)}function bi(e){if(!(K(e)||e===null||e===""))return parseFloat(e)}function Sf(e){if(!(K(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Nf(e,t,n="round"){const r=10**t;switch(n){case"expand":return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case"trunc":return Math.trunc(e*r)/r;case"round":return Math.round(e*r)/r;case"floor":return Math.floor(e*r)/r;case"ceil":return Math.ceil(e*r)/r;default:throw new RangeError(`Value rounding ${n} is out of range`)}}function oa(e){return e%4===0&&(e%100!==0||e%400===0)}function go(e){return oa(e)?366:365}function bu(e,t){const n=k2(t-1,12)+1,r=e+(t-n)/12;return n===2?oa(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function zu(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Pm(e,t,n){return-Ff(kf(e,1,t),n)+t-1}function js(e,t=4,n=1){const r=Pm(e,t,n),i=Pm(e+1,t,n);return(go(e)-r+i)/7}function Rc(e){return e>99?e:e>Le.twoDigitCutoffYear?1900+e:2e3+e}function Q0(e,t,n,r=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(o.timeZone=r);const s={timeZoneName:t,...o},a=new Intl.DateTimeFormat(n,s).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Ku(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function eg(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new St(`Invalid unit value ${e}`);return t}function $u(e,t){const n={};for(const r in e)if(Co(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=eg(i)}return n}function Fs(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${Ye(n,2)}:${Ye(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${Ye(n,2)}${Ye(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Zu(e){return A2(e,["hour","minute","second","millisecond"])}const F2=["January","February","March","April","May","June","July","August","September","October","November","December"],tg=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],S2=["J","F","M","A","M","J","J","A","S","O","N","D"];function ng(e){switch(e){case"narrow":return[...S2];case"short":return[...tg];case"long":return[...F2];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const rg=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ig=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],N2=["M","T","W","T","F","S","S"];function og(e){switch(e){case"narrow":return[...N2];case"short":return[...ig];case"long":return[...rg];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const sg=["AM","PM"],I2=["Before Christ","Anno Domini"],P2=["BC","AD"],T2=["B","A"];function ag(e){switch(e){case"narrow":return[...T2];case"short":return[...P2];case"long":return[...I2];default:return null}}function M2(e){return sg[e.hour<12?0:1]}function O2(e,t){return og(t)[e.weekday-1]}function B2(e,t){return ng(t)[e.month-1]}function R2(e,t){return ag(t)[e.year<0?0:1]}function L2(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&o){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=r?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function Tm(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const j2={D:yu,DD:x0,DDD:C0,DDDD:A0,t:k0,tt:F0,ttt:S0,tttt:N0,T:I0,TT:P0,TTT:T0,TTTT:M0,f:O0,ff:R0,fff:j0,ffff:_0,F:B0,FF:L0,FFF:U0,FFFF:V0};class It{static create(t,n={}){return new It(t,n)}static parseFormat(t){let n=null,r="",i=!1;const o=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((r.length>0||i)&&o.push({literal:i||/^\s+$/.test(r),val:r===""?"'":r}),n=null,r="",i=!i):i||a===n?r+=a:(r.length>0&&o.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&o.push({literal:i||/^\s+$/.test(r),val:r}),o}static macroTokenToFormatOpts(t){return j2[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0,r=void 0){if(this.opts.forceSimple)return Ye(t,n);const i={...this.opts};return n>0&&(i.padTo=n),r&&(i.signDisplay=r),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(y,C)=>this.loc.extract(t,y,C),s=y=>t.isOffsetFixed&&t.offset===0&&y.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,y.format):"",a=()=>r?M2(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(y,C)=>r?B2(t,y):o(C?{month:y}:{month:y,day:"numeric"},"month"),l=(y,C)=>r?O2(t,y):o(C?{weekday:y}:{weekday:y,month:"long",day:"numeric"},"weekday"),c=y=>{const C=It.macroTokenToFormatOpts(y);return C?this.formatWithSystemDefault(t,C):y},f=y=>r?R2(t,y):o({era:y},"era"),d=y=>{switch(y){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(y)}};return Tm(It.parseFormat(n),d)}formatDurationFromString(t,n){const r=this.opts.signMode==="negativeLargestOnly"?-1:1,i=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(c,f)=>d=>{const y=i(d);if(y){const C=f.isNegativeDuration&&y!==f.largestUnit?r:1;let D;return this.opts.signMode==="negativeLargestOnly"&&y!==f.largestUnit?D="never":this.opts.signMode==="all"?D="always":D="auto",this.num(c.get(y)*C,d.length,D)}else return d},s=It.parseFormat(n),a=s.reduce((c,{literal:f,val:d})=>f?c:c.concat(d),[]),u=t.shiftTo(...a.map(i).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return Tm(s,o(u,l))}}const ug=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Wo(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function zo(...e){return t=>e.reduce(([n,r,i],o)=>{const[s,a,u]=o(t,i);return[{...n,...s},a||r,u]},[{},null,1]).slice(0,2)}function Ko(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function lg(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=zr(t[n+i]);return[r,null,n+i]}}const cg=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,U2=`(?:${cg.source}?(?:\\[(${ug.source})\\])?)?`,If=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,fg=RegExp(`${If.source}${U2}`),Pf=RegExp(`(?:[Tt]${fg.source})?`),_2=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,V2=/(\d{4})-?W(\d\d)(?:-?(\d))?/,q2=/(\d{4})-?(\d{3})/,W2=lg("weekYear","weekNumber","weekDay"),z2=lg("year","ordinal"),K2=/(\d{4})-(\d\d)-(\d\d)/,dg=RegExp(`${If.source} ?(?:${cg.source}|(${ug.source}))?`),Z2=RegExp(`(?: ${dg.source})?`);function yo(e,t,n){const r=e[t];return K(r)?n:zr(r)}function G2(e,t){return[{year:yo(e,t),month:yo(e,t+1,1),day:yo(e,t+2,1)},null,t+3]}function Zo(e,t){return[{hours:yo(e,t,0),minutes:yo(e,t+1,0),seconds:yo(e,t+2,0),milliseconds:Sf(e[t+3])},null,t+4]}function sa(e,t){const n=!e[t]&&!e[t+1],r=Ku(e[t+1],e[t+2]),i=n?null:Ut.instance(r);return[{},i,t+3]}function aa(e,t){const n=e[t]?Pr.create(e[t]):null;return[{},n,t+1]}const Y2=RegExp(`^T?${If.source}$`),J2=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function H2(e){const[t,n,r,i,o,s,a,u,l]=e,c=t[0]==="-",f=u&&u[0]==="-",d=(y,C=!1)=>y!==void 0&&(C||y&&c)?-y:y;return[{years:d(bi(n)),months:d(bi(r)),weeks:d(bi(i)),days:d(bi(o)),hours:d(bi(s)),minutes:d(bi(a)),seconds:d(bi(u),u==="-0"),milliseconds:d(Sf(l),f)}]}const X2={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Tf(e,t,n,r,i,o,s){const a={year:t.length===2?Rc(zr(t)):zr(t),month:tg.indexOf(n)+1,day:zr(r),hour:zr(i),minute:zr(o)};return s&&(a.second=zr(s)),e&&(a.weekday=e.length>3?rg.indexOf(e)+1:ig.indexOf(e)+1),a}const Q2=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function e$(e){const[,t,n,r,i,o,s,a,u,l,c,f]=e,d=Tf(t,i,r,n,o,s,a);let y;return u?y=X2[u]:l?y=0:y=Ku(c,f),[d,new Ut(y)]}function t$(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const n$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,r$=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,i$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Mm(e){const[,t,n,r,i,o,s,a]=e;return[Tf(t,i,r,n,o,s,a),Ut.utcInstance]}function o$(e){const[,t,n,r,i,o,s,a]=e;return[Tf(t,a,n,r,i,o,s),Ut.utcInstance]}const s$=Wo(_2,Pf),a$=Wo(V2,Pf),u$=Wo(q2,Pf),l$=Wo(fg),mg=zo(G2,Zo,sa,aa),c$=zo(W2,Zo,sa,aa),f$=zo(z2,Zo,sa,aa),d$=zo(Zo,sa,aa);function m$(e){return Ko(e,[s$,mg],[a$,c$],[u$,f$],[l$,d$])}function h$(e){return Ko(t$(e),[Q2,e$])}function p$(e){return Ko(e,[n$,Mm],[r$,Mm],[i$,o$])}function g$(e){return Ko(e,[J2,H2])}const y$=zo(Zo);function w$(e){return Ko(e,[Y2,y$])}const b$=Wo(K2,Z2),$$=Wo(dg),v$=zo(Zo,sa,aa);function D$(e){return Ko(e,[b$,mg],[$$,v$])}const Om="Invalid Duration",hg={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},E$={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...hg},xn=146097/400,to=146097/4800,x$={years:{quarters:4,months:12,weeks:xn/7,days:xn,hours:xn*24,minutes:xn*24*60,seconds:xn*24*60*60,milliseconds:xn*24*60*60*1e3},quarters:{months:3,weeks:xn/28,days:xn/4,hours:xn*24/4,minutes:xn*24*60/4,seconds:xn*24*60*60/4,milliseconds:xn*24*60*60*1e3/4},months:{weeks:to/7,days:to,hours:to*24,minutes:to*24*60,seconds:to*24*60*60,milliseconds:to*24*60*60*1e3},...hg},ki=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],C$=ki.slice(0).reverse();function hr(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new ae(r)}function pg(e,t){let n=t.milliseconds??0;for(const r of C$.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Bm(e,t){const n=pg(e,t)<0?-1:1;ki.reduceRight((r,i)=>{if(K(t[i]))return r;if(r){const o=t[r]*n,s=e[i][r],a=Math.floor(o/s);t[i]+=a*n,t[r]-=a*s*n}return i},null),ki.reduce((r,i)=>{if(K(t[i]))return r;if(r){const o=t[r]%1;t[r]-=o,t[i]+=o*e[r][i]}return i},null)}function Rm(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class ae{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?x$:E$;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||ge.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return ae.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new St(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new ae({values:$u(t,ae.normalizeUnit),loc:ge.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Hr(t))return ae.fromMillis(t);if(ae.isDuration(t))return t;if(typeof t=="object")return ae.fromObject(t);throw new St(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=g$(t);return r?ae.fromObject(r,n):ae.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=w$(t);return r?ae.fromObject(r,n):ae.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new St("need to specify a reason the Duration is invalid");const r=t instanceof Zn?t:new Zn(t,n);if(Le.throwOnInvalid)throw new Hb(r);return new ae({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new E0(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?It.create(this.loc,r).formatDurationFromString(this,t):Om}toHuman(t={}){if(!this.isValid)return Om;const n=t.showZeros!==!1,r=ki.map(i=>{const o=this.values[i];return K(o)||o===0&&!n?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Nf(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},Z.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?pg(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=ae.fromDurationLike(t),r={};for(const i of ki)(Co(n.values,i)||Co(this.values,i))&&(r[i]=n.get(i)+this.get(i));return hr(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=ae.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=eg(t(this.values[r],r));return hr(this,{values:n},!0)}get(t){return this[ae.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...$u(t,ae.normalizeUnit)};return hr(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return hr(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Bm(this.matrix,t),hr(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Rm(this.normalize().shiftToAll().toObject());return hr(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>ae.normalizeUnit(s));const n={},r={},i=this.toObject();let o;for(const s of ki)if(t.indexOf(s)>=0){o=s;let a=0;for(const l in r)a+=this.matrix[l][s]*r[l],r[l]=0;Hr(i[s])&&(a+=i[s]);const u=Math.trunc(a);n[s]=u,r[s]=(a*1e3-u*1e3)/1e3}else Hr(i[s])&&(r[s]=i[s]);for(const s in r)r[s]!==0&&(n[o]+=s===o?r[s]:r[s]/this.matrix[o][s]);return Bm(this.matrix,n),hr(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return hr(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=Rm(this.values);return hr(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of ki)if(!n(this.values[r],t.values[r]))return!1;return!0}}const no="Invalid Interval";function A$(e,t){return!e||!e.isValid?Re.invalid("missing or invalid start"):!t||!t.isValid?Re.invalid("missing or invalid end"):t<e?Re.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class Re{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new St("need to specify a reason the Interval is invalid");const r=t instanceof Zn?t:new Zn(t,n);if(Le.throwOnInvalid)throw new Jb(r);return new Re({invalid:r})}static fromDateTimes(t,n){const r=fs(t),i=fs(n),o=A$(r,i);return o??new Re({start:r,end:i})}static after(t,n){const r=ae.fromDurationLike(n),i=fs(t);return Re.fromDateTimes(i,i.plus(r))}static before(t,n){const r=ae.fromDurationLike(n),i=fs(t);return Re.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let o,s;try{o=Z.fromISO(r,n),s=o.isValid}catch{s=!1}let a,u;try{a=Z.fromISO(i,n),u=a.isValid}catch{u=!1}if(s&&u)return Re.fromDateTimes(o,a);if(s){const l=ae.fromISO(i,n);if(l.isValid)return Re.after(o,l)}else if(u){const l=ae.fromISO(r,n);if(l.isValid)return Re.before(a,l)}}return Re.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?Re.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(fs).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),r=[];let{s:i}=this,o=0;for(;i<this.e;){const s=n[o]||this.e,a=+s>+this.e?this.e:s;r.push(Re.fromDateTimes(i,a)),i=a,o+=1}return r}splitBy(t){const n=ae.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,o;const s=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(u=>u*i));o=+a>+this.e?this.e:a,s.push(Re.fromDateTimes(r,o)),r=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:Re.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return Re.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],o=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...o),a=s.sort((u,l)=>u.time-l.time);for(const u of a)r+=u.type==="s"?1:-1,r===1?n=u.time:(n&&+n!=+u.time&&i.push(Re.fromDateTimes(n,u.time)),n=null);return Re.merge(i)}difference(...t){return Re.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:no}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=yu,n={}){return this.isValid?It.create(this.s.loc.clone(n),t).formatInterval(this):no}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:no}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:no}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:no}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:no}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):ae.invalid(this.invalidReason)}mapEndpoints(t){return Re.fromDateTimes(t(this.s),t(this.e))}}class Ba{static hasDST(t=Le.defaultZone){const n=Z.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return Pr.isValidZone(t)}static normalizeZone(t){return Gr(t,Le.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||ge.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||ge.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||ge.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||ge.create(n,r,o)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||ge.create(n,r,o)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||ge.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||ge.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return ge.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return ge.create(n,null,"gregory").eras(t)}static features(){return{relative:H0(),localeWeek:X0()}}}function Lm(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(ae.fromMillis(r).as("days"))}function k$(e,t,n){const r=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Lm(u,l);return(c-c%7)/7}],["days",Lm]],i={},o=e;let s,a;for(const[u,l]of r)n.indexOf(u)>=0&&(s=u,i[u]=l(e,t),a=o.plus(i),a>t?(i[u]--,e=o.plus(i),e>t&&(a=e,i[u]--,e=o.plus(i))):e=a);return[e,i,a,s]}function F$(e,t,n,r){let[i,o,s,a]=k$(e,t,n);const u=t-i,l=n.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);l.length===0&&(s<t&&(s=i.plus({[a]:1})),s!==i&&(o[a]=(o[a]||0)+u/(s-i)));const c=ae.fromObject(o,r);return l.length>0?ae.fromMillis(u,r).shiftTo(...l).plus(c):c}const S$="missing Intl.DateTimeFormat.formatToParts support";function ce(e,t=n=>n){return{regex:e,deser:([n])=>t(b2(n))}}const N$=" ",gg=`[ ${N$}]`,yg=new RegExp(gg,"g");function I$(e){return e.replace(/\./g,"\\.?").replace(yg,gg)}function jm(e){return e.replace(/\./g,"").replace(yg," ").toLowerCase()}function Vn(e,t){return e===null?null:{regex:RegExp(e.map(I$).join("|")),deser:([n])=>e.findIndex(r=>jm(n)===jm(r))+t}}function Um(e,t){return{regex:e,deser:([,n,r])=>Ku(n,r),groups:t}}function Ra(e){return{regex:e,deser:([t])=>t}}function P$(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function T$(e,t){const n=_n(t),r=_n(t,"{2}"),i=_n(t,"{3}"),o=_n(t,"{4}"),s=_n(t,"{6}"),a=_n(t,"{1,2}"),u=_n(t,"{1,3}"),l=_n(t,"{1,6}"),c=_n(t,"{1,9}"),f=_n(t,"{2,4}"),d=_n(t,"{4,6}"),y=S=>({regex:RegExp(P$(S.val)),deser:([A])=>A,literal:!0}),D=(S=>{if(e.literal)return y(S);switch(S.val){case"G":return Vn(t.eras("short"),0);case"GG":return Vn(t.eras("long"),0);case"y":return ce(l);case"yy":return ce(f,Rc);case"yyyy":return ce(o);case"yyyyy":return ce(d);case"yyyyyy":return ce(s);case"M":return ce(a);case"MM":return ce(r);case"MMM":return Vn(t.months("short",!0),1);case"MMMM":return Vn(t.months("long",!0),1);case"L":return ce(a);case"LL":return ce(r);case"LLL":return Vn(t.months("short",!1),1);case"LLLL":return Vn(t.months("long",!1),1);case"d":return ce(a);case"dd":return ce(r);case"o":return ce(u);case"ooo":return ce(i);case"HH":return ce(r);case"H":return ce(a);case"hh":return ce(r);case"h":return ce(a);case"mm":return ce(r);case"m":return ce(a);case"q":return ce(a);case"qq":return ce(r);case"s":return ce(a);case"ss":return ce(r);case"S":return ce(u);case"SSS":return ce(i);case"u":return Ra(c);case"uu":return Ra(a);case"uuu":return ce(n);case"a":return Vn(t.meridiems(),0);case"kkkk":return ce(o);case"kk":return ce(f,Rc);case"W":return ce(a);case"WW":return ce(r);case"E":case"c":return ce(n);case"EEE":return Vn(t.weekdays("short",!1),1);case"EEEE":return Vn(t.weekdays("long",!1),1);case"ccc":return Vn(t.weekdays("short",!0),1);case"cccc":return Vn(t.weekdays("long",!0),1);case"Z":case"ZZ":return Um(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return Um(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return Ra(/[a-z_+-/]{1,256}?/i);case" ":return Ra(/[^\S\n\r]/);default:return y(S)}})(e)||{invalidReason:S$};return D.token=e,D}const M$={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function O$(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const o=t[r];let s=r;r==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=n.hour12?"hour12":"hour24");let a=M$[s];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function B$(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function R$(e,t,n){const r=e.match(t);if(r){const i={};let o=1;for(const s in n)if(Co(n,s)){const a=n[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(r.slice(o,o+u))),o+=u}return[r,i]}else return[r,{}]}function L$(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return K(e.z)||(n=Pr.create(e.z)),K(e.Z)||(n||(n=new Ut(e.Z)),r=e.Z),K(e.q)||(e.M=(e.q-1)*3+1),K(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),K(e.u)||(e.S=Sf(e.u)),[Object.keys(e).reduce((o,s)=>{const a=t(s);return a&&(o[a]=e[s]),o},{}),n,r]}let Ll=null;function j$(){return Ll||(Ll=Z.fromMillis(1555555555555)),Ll}function U$(e,t){if(e.literal)return e;const n=It.macroTokenToFormatOpts(e.val),r=vg(n,t);return r==null||r.includes(void 0)?e:r}function wg(e,t){return Array.prototype.concat(...e.map(n=>U$(n,t)))}class bg{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=wg(It.parseFormat(n),t),this.units=this.tokens.map(r=>T$(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=B$(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=R$(t,this.regex,this.handlers),[i,o,s]=r?L$(r):[null,null,void 0];if(Co(r,"a")&&Co(r,"H"))throw new fo("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function $g(e,t,n){return new bg(e,n).explainFromTokens(t)}function _$(e,t,n){const{result:r,zone:i,specificOffset:o,invalidReason:s}=$g(e,t,n);return[r,i,o,s]}function vg(e,t){if(!e)return null;const r=It.create(t,e).dtFormatter(j$()),i=r.formatToParts(),o=r.resolvedOptions();return i.map(s=>O$(s,e,o))}const jl="Invalid DateTime",_m=864e13;function Ds(e){return new Zn("unsupported zone",`the zone "${e.name}" is not supported`)}function Ul(e){return e.weekData===null&&(e.weekData=wu(e.c)),e.weekData}function _l(e){return e.localWeekData===null&&(e.localWeekData=wu(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function $i(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new Z({...n,...t,old:n})}function Dg(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const o=n.offset(r);return i===o?[r,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function La(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function nu(e,t,n){return Dg(zu(e),t,n)}function Vm(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:r,month:i,day:Math.min(e.c.day,bu(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=ae.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=zu(o);let[u,l]=Dg(a,n,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function ro(e,t,n,r,i,o){const{setZone:s,zone:a}=n;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=Z.fromObject(e,{...n,zone:u,specificOffset:o});return s?l:l.setZone(a)}else return Z.invalid(new Zn("unparsable",`the input "${i}" can't be parsed as ${r}`))}function ja(e,t,n=!0){return e.isValid?It.create(ge.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Vl(e,t,n){const r=e.c.year>9999||e.c.year<0;let i="";if(r&&e.c.year>=0&&(i+="+"),i+=Ye(e.c.year,r?6:4),n==="year")return i;if(t){if(i+="-",i+=Ye(e.c.month),n==="month")return i;i+="-"}else if(i+=Ye(e.c.month),n==="month")return i;return i+=Ye(e.c.day),i}function qm(e,t,n,r,i,o,s){let a=!n||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=Ye(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=Ye(e.c.minute),s==="minute")break;a&&(u+=":",u+=Ye(e.c.second))}else{if(u+=Ye(e.c.minute),s==="minute")break;a&&(u+=Ye(e.c.second))}if(s==="second")break;a&&(!r||e.c.millisecond!==0)&&(u+=".",u+=Ye(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?u+="Z":e.o<0?(u+="-",u+=Ye(Math.trunc(-e.o/60)),u+=":",u+=Ye(Math.trunc(-e.o%60))):(u+="+",u+=Ye(Math.trunc(e.o/60)),u+=":",u+=Ye(Math.trunc(e.o%60)))),o&&(u+="["+e.zone.ianaName+"]"),u}const Eg={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},V$={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},q$={ordinal:1,hour:0,minute:0,second:0,millisecond:0},ru=["year","month","day","hour","minute","second","millisecond"],W$=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],z$=["year","ordinal","hour","minute","second","millisecond"];function iu(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new E0(e);return t}function Wm(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return iu(e)}}function K$(e){if(Es===void 0&&(Es=Le.now()),e.type!=="iana")return e.offset(Es);const t=e.name;let n=Lc.get(t);return n===void 0&&(n=e.offset(Es),Lc.set(t,n)),n}function zm(e,t){const n=Gr(t.zone,Le.defaultZone);if(!n.isValid)return Z.invalid(Ds(n));const r=ge.fromObject(t);let i,o;if(K(e.year))i=Le.now();else{for(const u of ru)K(e[u])&&(e[u]=Eg[u]);const s=Y0(e)||J0(e);if(s)return Z.invalid(s);const a=K$(n);[i,o]=nu(e,a,n)}return new Z({ts:i,zone:n,loc:r,o})}function Km(e,t,n){const r=K(n.round)?!0:n.round,i=K(n.rounding)?"trunc":n.rounding,o=(a,u)=>(a=Nf(a,r||n.calendary?0:2,n.calendary?"round":i),t.loc.clone(n).relFormatter(n).format(a,u)),s=a=>n.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(n.unit)return o(s(n.unit),n.unit);for(const a of n.units){const u=s(a);if(Math.abs(u)>=1)return o(u,a)}return o(e>t?-0:0,n.units[n.units.length-1])}function Zm(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let Es;const Lc=new Map;class Z{constructor(t){const n=t.zone||Le.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new Zn("invalid input"):null)||(n.isValid?null:Ds(n));this.ts=K(t.ts)?Le.now():t.ts;let i=null,o=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,o]=[t.old.c,t.old.o];else{const a=Hr(t.o)&&!t.old?t.o:n.offset(this.ts);i=La(this.ts,a),r=Number.isNaN(i.year)?new Zn("invalid input"):null,i=r?null:i,o=r?null:a}this._zone=n,this.loc=t.loc||ge.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new Z({})}static local(){const[t,n]=Zm(arguments),[r,i,o,s,a,u,l]=n;return zm({year:r,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,n]=Zm(arguments),[r,i,o,s,a,u,l]=n;return t.zone=Ut.utcInstance,zm({year:r,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,n={}){const r=x2(t)?t.valueOf():NaN;if(Number.isNaN(r))return Z.invalid("invalid input");const i=Gr(n.zone,Le.defaultZone);return i.isValid?new Z({ts:r,zone:i,loc:ge.fromObject(n)}):Z.invalid(Ds(i))}static fromMillis(t,n={}){if(Hr(t))return t<-_m||t>_m?Z.invalid("Timestamp out of range"):new Z({ts:t,zone:Gr(n.zone,Le.defaultZone),loc:ge.fromObject(n)});throw new St(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(Hr(t))return new Z({ts:t*1e3,zone:Gr(n.zone,Le.defaultZone),loc:ge.fromObject(n)});throw new St("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=Gr(n.zone,Le.defaultZone);if(!r.isValid)return Z.invalid(Ds(r));const i=ge.fromObject(n),o=$u(t,Wm),{minDaysInFirstWeek:s,startOfWeek:a}=Nm(o,i),u=Le.now(),l=K(n.specificOffset)?r.offset(u):n.specificOffset,c=!K(o.ordinal),f=!K(o.year),d=!K(o.month)||!K(o.day),y=f||d,C=o.weekYear||o.weekNumber;if((y||c)&&C)throw new fo("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(d&&c)throw new fo("Can't mix ordinal dates with month/day");const D=C||o.weekday&&!y;let S,A,N=La(u,l);D?(S=W$,A=V$,N=wu(N,s,a)):c?(S=z$,A=q$,N=Rl(N)):(S=ru,A=Eg);let U=!1;for(const Dn of S){const Ln=o[Dn];K(Ln)?U?o[Dn]=A[Dn]:o[Dn]=N[Dn]:U=!0}const W=D?v2(o,s,a):c?D2(o):Y0(o),G=W||J0(o);if(G)return Z.invalid(G);const je=D?Fm(o,s,a):c?Sm(o):o,[Ft,ot]=nu(je,l,r),Mt=new Z({ts:Ft,zone:r,o:ot,loc:i});return o.weekday&&y&&t.weekday!==Mt.weekday?Z.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${Mt.toISO()}`):Mt.isValid?Mt:Z.invalid(Mt.invalid)}static fromISO(t,n={}){const[r,i]=m$(t);return ro(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=h$(t);return ro(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=p$(t);return ro(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(K(t)||K(n))throw new St("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=r,s=ge.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[a,u,l,c]=_$(s,t,n);return c?Z.invalid(c):ro(a,u,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return Z.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=D$(t);return ro(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new St("need to specify a reason the DateTime is invalid");const r=t instanceof Zn?t:new Zn(t,n);if(Le.throwOnInvalid)throw new Yb(r);return new Z({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=vg(t,ge.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return wg(It.parseFormat(t),ge.fromObject(n)).map(i=>i.val).join("")}static resetCache(){Es=void 0,Lc.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Ul(this).weekYear:NaN}get weekNumber(){return this.isValid?Ul(this).weekNumber:NaN}get weekday(){return this.isValid?Ul(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?_l(this).weekday:NaN}get localWeekNumber(){return this.isValid?_l(this).weekNumber:NaN}get localWeekYear(){return this.isValid?_l(this).weekYear:NaN}get ordinal(){return this.isValid?Rl(this.c).ordinal:NaN}get monthShort(){return this.isValid?Ba.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Ba.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Ba.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Ba.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=zu(this.c),i=this.zone.offset(r-t),o=this.zone.offset(r+t),s=this.zone.offset(r-i*n),a=this.zone.offset(r-o*n);if(s===a)return[this];const u=r-s*n,l=r-a*n,c=La(u,s),f=La(l,a);return c.hour===f.hour&&c.minute===f.minute&&c.second===f.second&&c.millisecond===f.millisecond?[$i(this,{ts:u}),$i(this,{ts:l})]:[this]}get isInLeapYear(){return oa(this.year)}get daysInMonth(){return bu(this.year,this.month)}get daysInYear(){return this.isValid?go(this.year):NaN}get weeksInWeekYear(){return this.isValid?js(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?js(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=It.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(Ut.instance(t),n)}toLocal(){return this.setZone(Le.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=Gr(t,Le.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const o=t.offset(this.ts),s=this.toObject();[i]=nu(s,o,t)}return $i(this,{ts:i,zone:t})}else return Z.invalid(Ds(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return $i(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=$u(t,Wm),{minDaysInFirstWeek:r,startOfWeek:i}=Nm(n,this.loc),o=!K(n.weekYear)||!K(n.weekNumber)||!K(n.weekday),s=!K(n.ordinal),a=!K(n.year),u=!K(n.month)||!K(n.day),l=a||u,c=n.weekYear||n.weekNumber;if((l||s)&&c)throw new fo("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new fo("Can't mix ordinal dates with month/day");let f;o?f=Fm({...wu(this.c,r,i),...n},r,i):K(n.ordinal)?(f={...this.toObject(),...n},K(n.day)&&(f.day=Math.min(bu(f.year,f.month),f.day))):f=Sm({...Rl(this.c),...n});const[d,y]=nu(f,this.o,this.zone);return $i(this,{ts:d,o:y})}plus(t){if(!this.isValid)return this;const n=ae.fromDurationLike(t);return $i(this,Vm(this,n))}minus(t){if(!this.isValid)return this;const n=ae.fromDurationLike(t).negate();return $i(this,Vm(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=ae.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(r.weekNumber=this.weekNumber-1),r.weekday=o}else r.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);r.month=(o-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?It.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):jl}toLocaleString(t=yu,n={}){return this.isValid?It.create(this.loc.clone(n),t).formatDateTime(this):jl}toLocaleParts(t={}){return this.isValid?It.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=iu(s);const a=t==="extended";let u=Vl(this,a,s);return ru.indexOf(s)>=3&&(u+="T"),u+=qm(this,a,n,r,i,o,s),u}toISODate({format:t="extended",precision:n="day"}={}){return this.isValid?Vl(this,t==="extended",iu(n)):null}toISOWeekDate(){return ja(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=iu(a),(i&&ru.indexOf(a)>=3?"T":"")+qm(this,s==="extended",n,t,r,o,a)):null}toRFC2822(){return ja(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return ja(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Vl(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),ja(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():jl}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return ae.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},o=C2(n).map(ae.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=F$(a,u,o,i);return s?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(Z.now(),t,n)}until(t){return this.isValid?Re.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(n,r)<=i&&i<=o.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||Z.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),Km(n,this.plus(r),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?Km(t.base||Z.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(Z.isDateTime))throw new St("min requires all arguments be DateTimes");return Im(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(Z.isDateTime))throw new St("max requires all arguments be DateTimes");return Im(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:o=null}=r,s=ge.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return $g(s,t,n)}static fromStringExplain(t,n,r={}){return Z.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,o=ge.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new bg(o,t)}static fromFormatParser(t,n,r={}){if(K(t)||K(n))throw new St("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=r,s=ge.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(n.locale))throw new St(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${n.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=n.explainFromTokens(t);return c?Z.invalid(c):ro(a,u,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return yu}static get DATE_MED(){return x0}static get DATE_MED_WITH_WEEKDAY(){return Xb}static get DATE_FULL(){return C0}static get DATE_HUGE(){return A0}static get TIME_SIMPLE(){return k0}static get TIME_WITH_SECONDS(){return F0}static get TIME_WITH_SHORT_OFFSET(){return S0}static get TIME_WITH_LONG_OFFSET(){return N0}static get TIME_24_SIMPLE(){return I0}static get TIME_24_WITH_SECONDS(){return P0}static get TIME_24_WITH_SHORT_OFFSET(){return T0}static get TIME_24_WITH_LONG_OFFSET(){return M0}static get DATETIME_SHORT(){return O0}static get DATETIME_SHORT_WITH_SECONDS(){return B0}static get DATETIME_MED(){return R0}static get DATETIME_MED_WITH_SECONDS(){return L0}static get DATETIME_MED_WITH_WEEKDAY(){return Qb}static get DATETIME_FULL(){return j0}static get DATETIME_FULL_WITH_SECONDS(){return U0}static get DATETIME_HUGE(){return _0}static get DATETIME_HUGE_WITH_SECONDS(){return V0}}function fs(e){if(Z.isDateTime(e))return e;if(e&&e.valueOf&&Hr(e.valueOf()))return Z.fromJSDate(e);if(e&&typeof e=="object")return Z.fromObject(e);throw new St(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var _e;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(_e||(_e={}));const Z$=[_e.Milliseconds,_e.Seconds,_e.Minutes,_e.Hours,_e.Days,_e.Weeks,_e.Months,_e.Years];_e.Milliseconds+"",_e.Seconds+"",_e.Minutes+"",_e.Hours+"",_e.Days+"",_e.Weeks+"",_e.Months+"",_e.Years+"";function G$(e){return Z$.filter(t=>e[t])}function jc(e,{decimalCount:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function Y$(e){return jc(Math.max(e-.4,0),{decimalCount:0})}function Gm(e){return e===0?0:Math.sign(e)}function Us(e,t,n={}){const r={},i={decimalCount:n.decimalCount==null?void 0:Math.round(Math.abs(n.decimalCount))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=G$(t).reverse();if(o||s)return a.forEach(c=>{r[c]=o?1/0:-1/0}),r;let u=ae.fromObject(e).as(_e.Milliseconds);const l=Gm(u);return a.forEach((c,f)=>{const d=f===a.length-1;if(c===_e.Milliseconds)r.milliseconds=jc(u,i);else{const y=ae.fromObject({milliseconds:u}).as(c),C=Math.sign(y),D=Math.abs(y),S=d?jc(D,i):Math.floor(i.decimalCount==null?D:Y$(D)),A=S===0?0:S*C;r[c]=A,u-=ae.fromObject({[c]:A}).as(_e.Milliseconds),l!==Gm(u)&&(u=0)}}),r}Intl.DateTimeFormat().resolvedOptions().locale;var ht;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(ht||(ht={}));ht.Year,ht.Hour,ht.Minute,ht.Second,ht.Millisecond;ht.Month,ht.Week,ht.Day;ht.Millisecond,ht.Second,ht.Minute,ht.Hour,ht.Day,ht.Week,ht.Month,ht.Year;var Nt;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(Nt||(Nt={}));Nt.Sunday+"",Nt.Monday+"",Nt.Tuesday+"",Nt.Wednesday+"",Nt.Thursday+"",Nt.Friday+"",Nt.Saturday+"";Nt.Sunday,Nt.Monday,Nt.Tuesday,Nt.Wednesday,Nt.Thursday,Nt.Friday,Nt.Saturday;var Kt;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Kt||(Kt={}));Kt.January,Kt.February,Kt.March,Kt.April,Kt.May,Kt.June,Kt.July,Kt.August,Kt.September,Kt.October,Kt.November,Kt.December;function Oi(e){const t=new gu,r=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:Us(e,{milliseconds:!0}).milliseconds;return r!==1/0&&r!==-1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}function xg(...e){const t=e.join(""),n=p0(Array.from(t));return Array.from(n).join("")}function Cg(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Ag(e,t){const n=xg([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return kg(e,n)}function kg(e,t){const n=xg(t);return typeof e=="string"?new RegExp(Cg(e),n):new RegExp(e.source,n)}function Fg(e,{caseSensitive:t}){const r="".replaceAll("i","");return kg(e,r)}function Mf(e,t=1){return e.split(`
`).map(n=>["    ".repeat(Math.round(t)),n].join("")).join(`
`)}function Sg(e,t){return t?typeof t=="string"?!!new RegExp(Cg(t),"i").exec(e):!!Ag(t,"i").exec(e):!1}class m extends Error{name="AssertionError";constructor(t,n){super(qo(n,t)||"Assertion failed.")}}const Ym={interval:{milliseconds:100},timeout:{seconds:10}},ql=Symbol("not set");async function J$(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:o,options:s}=H$(t),a=Us(s.timeout,{milliseconds:!0}).milliseconds,u=Us(s.interval,{milliseconds:!0});let l=ql,c;async function f(){try{l=n?r():await r(),e(l,...i)}catch(y){l=ql,c=et(y)}}const d=Date.now();for(;l===ql;)if(await f(),await Oi(u),Date.now()-d>=a){const C=`${o?`${o}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Cf(c,C)}return l}function I(e,t=!1){return((...n)=>J$(e,n,t))}function H$(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Ng(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Ng(e){return{interval:e?.interval||Ym.interval,timeout:e?.timeout||Ym.timeout}}const ds={isFalse(e,t){if(e!==!1)throw new m(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new m(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new m(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new m(`'${h(e)}' is not truthy.`,t)}},Ig={assert:ds,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new m(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new m(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new m(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new m(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:I(ds.isFalse),isFalsy:I(ds.isFalsy),isTrue:I(ds.isTrue),isTruthy:I(ds.isTruthy)}};function X$(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new m(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new m(`${h(e)} does not end with ${h(t)}}`,n)}function Q$(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new m(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new m(`${h(e)} ends with ${h(t)}}`,n)}function ev(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new m(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new m(`${h(e)} does not start with ${h(t)}}`,n)}function tv(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new m(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new m(`${h(e)} starts with ${h(t)}}`,n)}const ms={endsWith:X$,endsWithout:Q$,startsWith:ev,startsWithout:tv},Pg={assert:ms,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new m(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new m(`${h(e)} does not end with ${h(t)}}`,n);return e}),endsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new m(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new m(`${h(e)} ends with ${h(t)}}`,n);return e}),startsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new m(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new m(`${h(e)} does not start with ${h(t)}}`,n);return e}),startsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new m(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new m(`${h(e)} starts with ${h(t)}}`,n);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:I(ms.endsWith),endsWithout:I(ms.endsWithout),startsWith:I(ms.startsWith),startsWithout:I(ms.startsWithout)}};function nv(e,t,n){const r=zn(t);if(!r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function br(e,t){return zn(t).includes(e)}const Wl={isEnumValue(e,t,n){nv(e,t,n)},isNotEnumValue(e,t,n){const r=zn(t);if(r.includes(e))throw new m(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},Tg={assert:Wl,check:{isEnumValue:br,isNotEnumValue(e,t){return!zn(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=zn(t);if(!r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=zn(t);if(r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(zn(t).includes(e))return e},isNotEnumValue(e,t){if(!zn(t).includes(e))return e}},waitUntil:{isEnumValue:I(Wl.isEnumValue),isNotEnumValue:I(Wl.isNotEnumValue)}},zl={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new m(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new m(`${h(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new m(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))throw new m("Entries are equal.",n)}},Mg={assert:zl,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],o=t[r];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],o=t[r];return i!==o})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new m(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new m(`${h(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new m(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))return e;throw new m("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:I(zl.entriesEqual),notEntriesEqual:I(zl.notEntriesEqual)}};function vu(e,t){return JSON.stringify(e)===JSON.stringify(t)}function _s(e,t){if(!(e===t||vu(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!vu(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{_s(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${yt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function xs(e,t){if(e===t||vu(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!vu(n,r)?!1:Object.keys(e).every(o=>xs(e[o],t[o]))}return!1}const Kl={jsonEquals(e,t,n){try{_s(e,t)}catch(r){throw new m(yt(r),n)}},notJsonEquals(e,t,n){try{_s(e,t)}catch{return}throw new m("Values are JSON equal.",n)}},Og={assert:Kl,check:{jsonEquals(e,t){return xs(e,t)},notJsonEquals(e,t){return!xs(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return _s(e,t),e}catch(r){throw new m(yt(r),n)}},notJsonEquals(e,t,n){try{_s(e,t)}catch{return e}throw new m("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(xs(e,t))return e},notJsonEquals(e,t){if(!xs(e,t))return e}},waitUntil:{jsonEquals:I(Kl.jsonEquals),notJsonEquals:I(Kl.notJsonEquals)}};function Jm(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Bg(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Bg.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var Rg=typeof WeakMap=="function"?WeakMap:Bg;function Hm(e,t,n){if(!n||Ao(e)||Ao(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}function Ua(e,t,n,r){if(!(!n||Ao(e)||Ao(t))){var i=n.get(e);i?i.set(t,r):(i=new Rg,i.set(t,r),n.set(e,i))}}function Wn(e,t,n){if(n&&n.comparator)return Xm(e,t,n);var r=Lg(e,t);return r!==null?r:Xm(e,t,n)}function Lg(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Ao(e)||Ao(t)?!1:null}function Xm(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new Rg;var r=n&&n.comparator,i=Hm(e,t,n.memoize);if(i!==null)return i;var o=Hm(t,e,n.memoize);if(o!==null)return o;if(r){var s=r(e,t);if(s===!1||s===!0)return Ua(e,t,n.memoize,s),s;var a=Lg(e,t);if(a!==null)return a}var u=Jm(e);if(u!==Jm(t))return Ua(e,t,n.memoize,!1),!1;Ua(e,t,n.memoize,!0);var l=rv(e,t,u,n);return Ua(e,t,n.memoize,l),l}function rv(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return Wn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return jg(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Ii(e,t,r);case"RegExp":return iv(e,t);case"Generator":return ov(e,t,r);case"DataView":return Ii(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return Ii(new Uint8Array(e),new Uint8Array(t),r);case"Set":return Qm(e,t,r);case"Map":return Qm(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return av(e,t,r)}}function iv(e,t){return e.toString()===t.toString()}function Qm(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(s,a){r.push([s,a])}),t.forEach(function(s,a){i.push([s,a])}),Ii(r.sort(),i.sort(),n)}function Ii(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Wn(e[i],t[i],n)===!1)return!1;return!0}function ov(e,t,n){return Ii(Uc(e),Uc(t),n)}function sv(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function eh(e){if(sv(e))try{return Uc(e[Symbol.iterator]())}catch{return[]}return[]}function Uc(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}function th(e){var t=[];for(var n in e)t.push(n);return t}function nh(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function jg(e,t,n,r){var i=n.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(Wn(e[n[o]],t[n[o]],r)===!1)return!1;return!0}function av(e,t,n){var r=th(e),i=th(t),o=nh(e),s=nh(t);if(r=r.concat(o),i=i.concat(s),r.length&&r.length===i.length)return Ii(rh(r).sort(),rh(i).sort())===!1?!1:jg(e,t,r,n);var a=eh(e),u=eh(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Ii(a,u,n)):r.length===0&&a.length===0&&i.length===0&&u.length===0}function Ao(e){return e===null||typeof e!="object"}function rh(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}class wo extends m{name="DiffError";constructor(t,n,r,i){const o=Wb(n,r);super([t,Mf(o)].join(`
`),i)}}function Kr(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const Wr={strictEquals(e,t,n){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Strict reference equality failed for 

${h(t)}

.`,n):new wo("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new m(`Strict reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

strictly equals

${h(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Loose reference equality failed for 

${h(t)}

.`,n):new wo("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new m(`Loose reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

loosely equals

${h(t)}

`,n)},deepEquals(e,t,n){if(!Wn(e,t,{comparator:Kr}))throw new wo("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(Wn(e,t,{comparator:Kr}))throw new m(`

${h(e)}

deeply equals

${h(t)}

`,n)}},Ug=Wr.deepEquals,_g={assert:Wr,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Wn(e,t,{comparator:Kr})},notDeepEquals(e,t){return!Wn(e,t,{comparator:Kr})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Strict reference equality failed for 

${h(t)}

.`,n):new wo("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new m(`Strict reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

strictly equals

${h(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Loose reference equality failed for 

${h(t)}

.`,n):new wo("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new m(`Loose reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

loosely equals

${h(t)}

`,n);return e},deepEquals(e,t,n){if(Wn(e,t,{comparator:Kr}))return e;throw new wo("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(Wn(e,t,{comparator:Kr}))throw new m(`

${h(e)}

deeply equals

${h(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Wn(e,t,{comparator:Kr}))return e},notDeepEquals(e,t){if(!Wn(e,t,{comparator:Kr}))return e}},waitUntil:{strictEquals:I(Wr.strictEquals),notStrictEquals:I(Wr.notStrictEquals),looseEquals:I(Wr.looseEquals),notLooseEquals:I(Wr.notLooseEquals),deepEquals:I(Wr.deepEquals),notDeepEquals:I(Wr.notDeepEquals)}};function an(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function An(e,t){return typeof t=="string"?t.includes(e):an(t,e)}const pr={hasValue(e,t,n){if(!an(e,t))throw new m(`'${h(e)}' does not have value '${h(t)}'.`,n)},lacksValue(e,t,n){if(an(e,t))throw new m(`'${h(e)}' has value '${h(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new m(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new m(`'${h(e)}' does not have values '${h(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new m(`'${h(e)}' has values '${h(r)}'.`,n)},isIn(e,t,n){if(!An(e,t))throw new m(`'${h(e)}'

is not in

${h(t)}.`,n)},isNotIn(e,t,n){if(An(e,t))throw new m(`'${h(e)}'

is in

${h(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new m(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new m(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new m(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new m(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new m(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new m(`'${h(e)}' is not empty.`,t)}}},Vg={assert:pr,check:{hasValue(e,t){return an(e,t)},lacksValue(e,t){return!an(e,t)},hasValues(e,t){return t.every(n=>an(e,n))},lacksValues(e,t){return t.every(n=>!an(e,n))},isIn(e,t){return An(e,t)},isNotIn(e,t){return!An(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!an(e,t))throw new m(`'${h(e)}' does not have value '${h(t)}'.`,n);return e},lacksValue(e,t,n){if(an(e,t))throw new m(`'${h(e)}' has value '${h(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new m(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new m(`'${h(e)}' does not have values '${h(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new m(`'${h(e)}' has values '${h(r)}'.`,n);return e},isIn(e,t,n){if(!An(e,t))throw new m(`'${h(e)}'

is not in

${h(t)}.`,n);return e},isNotIn(e,t,n){if(An(e,t))throw new m(`'${h(e)}'

is in

${h(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new m(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new m(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new m(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new m(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new m(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new m(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(an(e,t))return e},lacksValue(e,t){if(!an(e,t))return e},hasValues(e,t){if(t.every(n=>an(e,n)))return e},lacksValues(e,t){if(!t.every(n=>an(e,n)))return e},isIn(e,t){if(An(e,t))return e},isNotIn(e,t){if(!An(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:I(pr.hasValue),lacksValue:I(pr.lacksValue),hasValues:I(pr.hasValues),lacksValues:I(pr.lacksValues),isIn:I(pr.isIn),isNotIn:I(pr.isNotIn),isEmpty:I(pr.isEmpty),isNotEmpty:I(pr.isNotEmpty)}},Zl={isHttpStatus(e,t){if(!br(e,v))throw new m(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(br(e,v)){if(!An(e,tu[t]))throw new m(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new m(`${h(e)} is not a valid HTTP status.`,n)}},qg={assert:Zl,check:{isHttpStatus(e){return br(e,v)},isHttpStatusCategory(e,t){return br(e,v)&&An(e,tu[t])}},assertWrap:{isHttpStatus(e,t){if(!br(e,v))throw new m(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(br(e,v)){if(!An(e,tu[t]))throw new m(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new m(`${h(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(br(e,v))return e},isHttpStatusCategory(e,t){if(br(e,v)&&An(e,tu[t]))return e}},waitUntil:{isHttpStatus:I(Zl.isHttpStatus),isHttpStatusCategory:I(Zl.isHttpStatusCategory)}},Gl={instanceOf(e,t,n){if(!(e instanceof t))throw new m(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new m(`'${h(e)}' is an instance of '${t.name}'`,n)}},Wg={assert:Gl,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new m(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new m(`'${h(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:I(Gl.instanceOf),notInstanceOf:I(Gl.notInstanceOf)}},uv=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ae(e,t){return uv.some(n=>{try{return n(e,t)}catch{return!1}})}const vi={isKeyOf(e,t,n){if(!Ae(t,e))throw new m(`'${String(e)}' is not a key of '${h(t)}'.`,n)},isNotKeyOf(e,t,n){if(Ae(t,e))throw new m(`'${String(e)}' is a key of '${h(t)}'.`,n)},hasKey(e,t,n){if(!Ae(e,t))throw new m(`'${h(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(Ae(e,t))throw new m(`'${h(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!Ae(e,i));if(r.length)throw new m(`'${h(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>Ae(e,i));if(r.length)throw new m(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n)}},zg={assert:vi,check:{isKeyOf(e,t){return Ae(t,e)},isNotKeyOf(e,t){return!Ae(t,e)},hasKey:Ae,lacksKey(e,t){return!Ae(e,t)},hasKeys(e,t){return t.every(n=>Ae(e,n))},lacksKeys(e,t){return t.every(n=>!Ae(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!Ae(t,e))throw new m(`'${String(e)}' is not a key of '${h(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(Ae(t,e))throw new m(`'${String(e)}' is a key of '${h(t)}'.`,n);return e},hasKey(e,t,n){if(!Ae(e,t))throw new m(`'${h(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(Ae(e,t))throw new m(`'${h(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!Ae(e,i));if(r.length)throw new m(`'${h(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>Ae(e,i));if(r.length)throw new m(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(Ae(t,e))return e},isNotKeyOf(e,t){if(!Ae(t,e))return e},hasKey(e,t){if(Ae(e,t))return e},lacksKey(e,t){if(!Ae(e,t))return e},hasKeys(e,t){if(t.every(n=>Ae(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!Ae(e,n)))return e}},waitUntil:{isKeyOf:I(vi.isKeyOf),isNotKeyOf:I(vi.isNotKeyOf),hasKey:I(vi.hasKey),lacksKey:I(vi.lacksKey),hasKeys:I(vi.hasKeys),lacksKeys:I(vi.lacksKeys)}};function lv(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Pe(e).length)<t)throw new m(`Length '${e.length}' is not at least '${t}'.`,n)}function cv(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Pe(e).length)!==t)throw new m(`Length '${e.length}' is not exactly '${t}'.`,n)}const Yl={isLengthAtLeast:lv,isLengthExactly:cv},Kg={assert:Yl,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Pe(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Pe(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Pe(e).length)<t)throw new m(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Pe(e).length)!==t)throw new m(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Pe(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Pe(e).length)===t)return e})},waitUntil:{isLengthAtLeast:I(Yl.isLengthAtLeast),isLengthExactly:I(Yl.isLengthExactly)}},fv={never(e){throw new m("This code should not have executed.",e)}},Zg={assert:fv,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Jl={isDefined(e,t){if(e==null)throw new m(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new m(`'${h(e)}' is not a nullish.`,t)}},Gg={assert:Jl,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new m(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new m(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:I(Jl.isDefined),isNullish:I(Jl.isNullish)}},Wt={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new m(`${e} is not within the bounds ${h({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new m(`${e} is not outside the bounds ${h({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new m(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new m(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new m(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new m(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new m(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new m(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new m(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new m(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new m(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new m(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new m(`${e} is within ±${n} of ${t}`,r)}},Yg={assert:Wt,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new m(`${e} is not within the bounds ${h({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new m(`${e} is not outside the bounds ${h({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new m(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new m(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new m(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new m(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new m(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new m(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new m(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new m(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new m(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new m(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new m(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:I(Wt.isInBounds),isOutBounds:I(Wt.isOutBounds),isInteger:I(Wt.isInteger),isNotInteger:I(Wt.isNotInteger),isAbove:I(Wt.isAbove),isAtLeast:I(Wt.isAtLeast),isBelow:I(Wt.isBelow),isAtMost:I(Wt.isAtMost),isNaN:I(Wt.isNaN),isFinite:I(Wt.isFinite),isInfinite:I(Wt.isInfinite),isApproximately:I(Wt.isApproximately),isNotApproximately:I(Wt.isNotApproximately)}};function dv(e,t,n,r,i){return ua(...Gu(e,t,n,r,i),!1)}function Gu(e,t,n,r,i){const o=Array.isArray(n);return[o?e:Ug,o?t:e,o?n:t,o?r:n,o?i:r]}function ua(e,t,n,r,i,o){const s=t(...n);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,r),o?a(l):a()}catch(l){u(new m(`Output from '${t.name}' did not produce expected output. ${yt(l)}`,i))}});try{return e(s,r),o?s:void 0}catch(a){throw new m(`Output from '${t.name}' did not produce expected output. ${yt(a)}`,i)}}function mv(e,t,n,r,i){try{const o=ua(...Gu(e,t,n,r,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function hv(e,t,n,r,i){return ua(...Gu(e,t,n,r,i),!0)}function pv(e,t,n,r,i){try{const o=ua(...Gu(e,t,n,r,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const Hl=Symbol("not set");async function gv(e,t,n,r,i,o){const s=Array.isArray(n),a=s?e:Ug,u=s?t:e,l=s?n:t,c=s?r:n,f=Ng(s?i:r),d=s?o:i,y=Us(f.timeout,{milliseconds:!0}).milliseconds,C=Us(f.interval,{milliseconds:!0});let D=Hl,S;async function A(){try{D=await ua(a,u,l,c,void 0,!0)}catch(U){D=Hl,S=et(U)}}const N=Date.now();for(;D===Hl;)if(await A(),await Oi(C),Date.now()-N>=y)throw Cf(S,qo(d,`Timeout of '${y}' milliseconds exceeded waiting for callback value to match expectations`));return D}const yv={output:dv},Jg={assert:yv,check:{output:mv},assertWrap:{output:hv},checkWrap:{output:pv},waitUntil:{output:gv}},hs={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new m(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new m(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new m(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new m(`'${h(e)}' is not a Primitive.`,t)}},Hg={assert:hs,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new m(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new m(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new m(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new m(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:I(hs.isNotPrimitive),isNotPropertyKey:I(hs.isNotPropertyKey),isPrimitive:I(hs.isPrimitive),isPropertyKey:I(hs.isPropertyKey)}},ps={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new m(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new m(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new m(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new m(`'${h(e)}' is a Promise.`,t)}},Xg={assert:ps,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new m(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new m(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new m(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new m(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:I(ps.isPromiseLike,!0),isNotPromiseLike:I(ps.isNotPromiseLike,!0),isPromise:I(ps.isPromise,!0),isNotPromise:I(ps.isNotPromise,!0)}},Xl={matches(e,t,n){if(!t.test(e))throw new m(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new m(`'${e}' matches ${t}`,n)}},Qg={assert:Xl,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new m(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new m(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:I(Xl.matches,!0),mismatches:I(Xl.mismatches,!0)}},Ne={isArray(e,t){if(!Array.isArray(e))throw new m(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new m(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new m(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new m(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new m(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new m(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new m(`'${h(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const n=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new m(`'${h(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new m(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new m(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new m(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new m(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new m(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new m(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new m(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new m(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new m(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new m(`'${h(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const n=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new m(`'${h(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new m(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new m(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new m(`'${h(e)}' is a undefined.`,t)}},ey={assert:Ne,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new m(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new m(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new m(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new m(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new m(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new m(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new m(`'${h(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const n=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new m(`'${h(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new m(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new m(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new m(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new m(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new m(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new m(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new m(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new m(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new m(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new m(`'${h(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const n=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new m(`'${h(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new m(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new m(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new m(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:I(Ne.isArray),isBigInt:I(Ne.isBigInt),isBoolean:I(Ne.isBoolean),isFunction:I(Ne.isFunction),isNull:I(Ne.isNull),isNumber:I(Ne.isNumber),isObject:I(Ne.isObject),isPlainObject:I(Ne.isPlainObject),isString:I(Ne.isString),isSymbol:I(Ne.isSymbol),isUndefined:I(Ne.isUndefined),isNotArray:I(Ne.isNotArray),isNotBigInt:I(Ne.isNotBigInt),isNotBoolean:I(Ne.isNotBoolean),isNotFunction:I(Ne.isNotFunction),isNotNull:I(Ne.isNotNull),isNotNumber:I(Ne.isNotNumber),isNotObject:I(Ne.isNotObject),isNotPlainObject:I(Ne.isNotPlainObject),isNotString:I(Ne.isNotString),isNotSymbol:I(Ne.isNotSymbol),isNotUndefined:I(Ne.isNotUndefined)}};var Zt;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Zt||(Zt={}));function Of(e,t,n){Bf(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n)}function ih(e,t,n){Bf(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,n)}function Bf(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new m(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=yt(e);if(typeof n.matchMessage=="string"){if(!Sg(i,n.matchMessage))throw new m(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new m(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new m(t.notInstance,r);else throw new m(t.noError,r)}function oh(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=yt(e);if(typeof t.matchMessage=="string"){if(!Sg(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Yu(e,t,n,r){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,a)=>{try{await o}catch(u){i=et(u)}try{ih(i,n,r),e===Zt.Assert?s():e===Zt.Check?s(!0):s(i)}catch(u){e===Zt.CheckWrap?s(void 0):e===Zt.Check?s(!1):a(et(u))}})}catch(o){i=et(o)}try{return ih(i,n,r),e===Zt.Check?!0:e!==Zt.Assert?i:void 0}catch(o){if(e===Zt.CheckWrap)return;if(e===Zt.Check)return!1;throw o}}function wv(e,t,n){return Yu(Zt.Assert,e,t,n)}function bv(e,t){return Yu(Zt.Check,e,t)}function $v(e,t,n){return Yu(Zt.AssertWrap,e,t,n)}function vv(e,t,n){return Yu(Zt.CheckWrap,e,t,n)}const Dv=I(Of);function Ev(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${h(o)}'`);return Dv(i,async()=>{try{await o();return}catch(u){return et(u)}},a,s)}const xv={throws:wv,isError:Of},ty={assert:xv,check:{throws:bv,isError(e,t){return oh(e,t)}},assertWrap:{throws:$v,isError(e,t,n){return Bf(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:vv,isError(e,t){if(oh(e,t))return e}},waitUntil:{throws:Ev,isError:I(Of)}},Zr=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Ql={isUuid(e,t){if(!String(e).match(Zr))throw new m(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Zr))throw new m(`'${String(e)}' is a UUID.`,t)}},ny={assert:Ql,check:{isUuid(e){return!!String(e).match(Zr)},isNotUuid(e){return!String(e).match(Zr)}},assertWrap:{isUuid(e,t){if(!String(e).match(Zr))throw new m(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Zr))throw new m(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Zr))return e},isNotUuid(e){if(!String(e).match(Zr))return e}},waitUntil:{isUuid:I(Ql.isUuid),isNotUuid:I(Ql.isNotUuid)}},Cv={...Zg.assert,...Ig.assert,...Pg.assert,...Mg.assert,...Tg.assert,...qg.assert,...Wg.assert,...Og.assert,...zg.assert,...Kg.assert,...Gg.assert,...Yg.assert,...Jg.assert,...Hg.assert,...Xg.assert,...Qg.assert,...ey.assert,..._g.assert,...ty.assert,...ny.assert,...Vg.assert},Rf=[Ig,Pg,Mg,Tg,qg,Wg,Og,zg,Kg,Zg,Gg,Yg,Jg,Hg,Xg,Qg,ey,_g,ty,ny,Vg],Av=Object.assign({},...Rf.map(e=>e.check)),k=Object.assign(function(t){return!!t},Av);function kv(e,t,n){return ou(e,t,n,new Set)}function ou(e,t,n,r){if(e=sh(e),t=sh(t),k.isObject(e)&&k.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!ou(Pe(e).sort(),Pe(t).sort(),n,r))return!1;let i=!1;const o=Pe(e).map(s=>{const a=ou(e[s],t[s],n,r);return k.isPromise(a)&&(i=!0),a});return ah(i,o)}else if(k.isArray(e)&&k.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,a)=>{const u=ou(s,t[a],n,r);return k.isPromise(u)&&(i=!0),u});return ah(i,o)}else return n(e,t)}function sh(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function ah(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(k.isTrue))}catch(i){r(et(i))}}):t.every(k.isTrue)}const Fv=Object.assign({},...Rf.map(e=>e.assertWrap)),ti=Object.assign(function(t,n){if(!t)throw new m("Assertion failed.",n);return t},Fv);function Sv(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const Nv={tsType:Sv},Iv={assert:Nv},Pv={fail:e=>{throw new m("Failure triggered.",e)}},Tv={...Iv.assert,...Cv,...Pv},Pn=Object.assign(function(t,n){if(!t)throw new m("Assertion failed.",n)},Tv),Mv=Object.assign({},...Rf.map(e=>e.checkWrap)),Ov=Object.assign(function(t){if(t)return t},Mv);function Bv(e,t){return k.hasKey(e,"entryType")&&e.entryType===t}function io(e,t){return e.controlType===t}var H;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(H||(H={}));const ry=Symbol("any-type"),Rv={[H.Checkbox]:!1,[H.Color]:"",[H.Dropdown]:"",[H.Hidden]:ry,[H.Number]:0,[H.Text]:""};function Lv(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,i])=>{const o=Rv[i.controlType];o!==ry&&(typeof o!=typeof i.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function jv(e,t,n){const r=t;if(e.has(r))return e.get(r);{const i=n();return k.isPromise(i)?new Promise(async(o,s)=>{try{const a=await i;e.set(r,a),o(a)}catch(a){s(et(a))}}):(e.set(r,i),i)}}function la(e,t,n){if(t in e)return e[t];{const r=n();return k.isPromise(r)?new Promise(async(i,o)=>{try{const s=await r;e[t]=s,i(s)}catch(s){o(et(s))}}):(e[t]=r,r)}}function Ju(e){return Pe(e).map(t=>[t,e[t]])}function Vs(e){return Object.fromEntries(e)}function Vi(e,t,n){return e.reduce((r,i,o,s)=>{const a=t(i,o,s);return n(a,i,o,s)&&r.push(a),r},[])}function Uv(e,t,n={}){try{let r=!1;const i=e.map((o,s,a)=>{const u=t(o,s,a);return u instanceof Promise?(r=!0,u):u?[u.key,u.value]:void 0}).filter(k.isTruthy);return r?new Promise(async(o,s)=>{try{const a=Vi(await Promise.all(i),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},k.isTruthy);o(Vs(a))}catch(a){s(et(a))}}):Vs(i)}catch(r){throw et(r)}}function _v(e){return Array.isArray(e)?e:[e]}function Vv({min:e,max:t}){const{min:n,max:r}=D0({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const a=Math.floor(256**s/i)*i,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,f,d)=>c+f*256**d,0);while(l>=a);return n+l%i}const uh=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Pi(e=16){let t="";for(let n=0;n<e;n++){const r=Vv({min:0,max:uh.length-1});t+=uh[r]}return t}function iy(e){if(k.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>yt(t).trim()).join(`
`))}function qv(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Wv="modulepreload",zv=function(e){return"/vira/book/"+e},lh={},Du=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");i=u(n.map(l=>{if(l=zv(l),l in lh)return;lh[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Wv,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((y,C)=>{d.addEventListener("load",y),d.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};var st;(function(e){e.Standard="stdout",e.Error="stderr"})(st||(st={}));var ne;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ne||(ne={}));async function Kv(){return await v0({async[Jn.Node](){const e=(await Du(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[ne.Bold]:e.bold.open,[ne.Debug]:e.blueBright.open,[ne.Error]:e.red.open,[ne.Faint]:e.gray.open,[ne.Info]:e.cyan.open,[ne.Mutate]:e.magenta.open,[ne.NormalWeight]:"\x1B[22m",[ne.Plain]:"",[ne.Reset]:e.reset.open,[ne.Success]:e.green.open,[ne.Warning]:e.yellow.open}},[Jn.Web](){return Promise.resolve({[ne.Bold]:"font-weight: bold",[ne.Debug]:"color: blue",[ne.Error]:"color: red",[ne.Faint]:"color: grey",[ne.Info]:"color: teal",[ne.Mutate]:"color: magenta",[ne.NormalWeight]:"",[ne.Plain]:"",[ne.Reset]:"",[ne.Success]:"color: green",[ne.Warning]:"color: orange"})}})}const sn=await Kv(),Zv={[ne.Bold]:{colors:[sn.bold],logType:st.Standard},[ne.Debug]:{colors:[sn.debug],logType:st.Standard},[ne.Faint]:{colors:[sn.faint],logType:st.Standard},[ne.Info]:{colors:[sn.info],logType:st.Standard},[ne.Mutate]:{colors:[sn.mutate,sn.bold],logType:st.Standard},[ne.NormalWeight]:{colors:[sn.normalWeight],logType:st.Standard},[ne.Plain]:{colors:[],logType:st.Standard},[ne.Reset]:{colors:[sn.reset],logType:st.Standard},[ne.Success]:{colors:[sn.success,sn.bold],logType:st.Standard},[ne.Error]:{colors:[sn.error,sn.bold],logType:st.Error},[ne.Warning]:{colors:[sn.warning],logType:st.Error}};function Xt({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function bo({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function Gv(e,t){try{let n=!1;const r=Ju(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(n=!0,s):s?[s.key,s.value]:void 0}).filter(k.isTruthy);return n?new Promise(async(i,o)=>{try{const s=Vi(await Promise.all(r),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},k.isTruthy);i(Vs(s))}catch(s){o(et(s))}}):Vs(r)}catch(n){throw et(n)}}function Yv(e,t){return Gv(e,(n,r)=>{const i=r,o=t(r,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function oy(e,...t){const n={...e};return t.forEach(r=>{r&&Ju(r).forEach(([i,o])=>{o!=null&&(n[i]=o)})}),n}const Jv="px";function sy(e){return ay({value:e,suffix:Jv})}function ay({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Hv({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function Xv(){return await v0({async[Jn.Node](){const{inspect:e}=await Du(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[ne.Reset].colors.join("")].join(""),css:void 0}}},[Jn.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:Vi(n.colorConfig[t].colors,s=>Hv({value:s,suffix:";"}),k.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?yt(s):h(s)).join(`
`),n.omitColors?"":n.colorConfig[ne.Reset].colors.join("")].join(""),css:r}}}})}const Qv=await Xv(),eD={colorConfig:Zv,omitColors:!1},tD=uy({[st.Error](){},[st.Standard](){}});function uy(e,t){const n=oy(eD,t);function r(o){e[n.colorConfig[o.colorKey].logType](Qv({...o,options:n}))}const i=Yv(ne,o=>(...s)=>r({args:s,colorKey:o}));return{...i,if(o){return o?i:tD}}}const nD=xf(Jn.Node)?{[st.Error]({text:e}){process.stderr.write(e+`
`)},[st.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[st.Error]({text:e,css:t}){console.error(Xt({value:e,prefix:"%c"}),t)},[st.Standard]({text:e,css:t}){console.log(Xt({value:e,prefix:"%c"}),t)}},rD=uy(nD);function iD(e,{min:t,max:n}){return Math.min(Math.max(e,t),n)}function oD({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){const i=Ag(Fg(t,{caseSensitive:n}),"g"),o=[];return e.replace(i,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);o.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),o}function sD(e,t,{caseSensitive:n}){const r=oD({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=Fg(t,{caseSensitive:n});return e.split(i).reduce((s,a,u)=>{const l=r[u],c=s.concat(a);if(l){const f=e.slice(l.index,l.index+l.length);return c.concat(f)}else return c},[])}function aD(e,t){return e.split(t)}function ch(e,t){const{min:n,max:r}=D0(t);if(t.takeOverflow){const i=r-n+1,o=(e-n)%i;return o<0?n+i+o:n+o}else return e>r?n:e<n?r:e}function mn(e,t){let n=!1;const r=Pe(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(n=!0),i[o]=s,i},{});return n?new Promise(async(i,o)=>{try{await Promise.all(Pe(r).map(async s=>{const a=await r[s];r[s]=a})),i(r)}catch(s){o(et(s))}}):r}function Lf(e,t){const n=Ju(e).filter(([r,i])=>t(r,i,e));return Vs(n)}function uD(e,t){return Lf(e,n=>!t.includes(n))}function fh(e){return Pe(e).map(t=>e[t])}function ly(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var ni;(function(e){e.Upper="upper",e.Lower="lower"})(ni||(ni={}));const lD={firstLetterCase:ni.Lower};function cD(e,t){if(!e.length)return"";const n=e[0];return(t===ni.Upper?n.toUpperCase():n.toLowerCase())+e.slice(1)}function fD(e){return e.toLowerCase()!==e.toUpperCase()}function dh(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(fD(r)){if(t===ni.Upper&&r!==r.toUpperCase()||t===ni.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function dD(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""}),i=oy(lD,t);return cD(r,i.firstLetterCase)}function mD(e){return e.split("").reduce((n,r,i,o)=>{const s=i>0&&o[i-1]||"",a=i<o.length-1&&o[i+1]||"",u=dh(s,ni.Lower,{rejectNoCaseCharacters:!0})||dh(a,ni.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function hD(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function pD({value:e,wrapper:t}){return Xt({value:ay({value:e,suffix:t}),prefix:t})}function rr(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function jf(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}class gD{listeners={};universalListeners=new Map;getListenerCount(){return fh(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)+this.universalListeners.size}listenToAll(t,n={}){const r=()=>this.universalListeners.delete(t)||!1;function i(o,s){n.once&&r(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:r}),r}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,n,r={}){const i=k.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(n)||!1;function s(a,u){r.once&&o(),n(a,u)}return la(this.listeners,i,()=>new Map).set(n,{listener:s,removeListener:o}),o}removeListener(t,n){const r=k.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const o=i.get(n);return o?o.removeListener():!1}dispatch(t){const n=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),r+this.universalListeners.size}removeAllListeners(){const n=fh(this.listeners).reduce((r,i)=>{const o=i.size||0;return i.clear(),r+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),n}destroy(){this.removeAllListeners()}}class Uf extends gD{}function cy(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _c(e,t,n){return cy(globalThis,e,t,n)}function _f(e,t){return Eu(e.title),e.parent?[..._f(e.parent),Eu(e.parent.title)].concat([]):[]}function Eu(e){return ly(e).toLowerCase().replaceAll(/\s/g,"-")}function yD({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}const wD={[vt.ElementExample]:()=>[],[vt.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Lv(e.controls,e.title)].filter(k.isTruthy),[vt.Root]:()=>[]},xu="_isBookTreeNode",fy=new Map;function bD(e){return fy.get(e)}function $D(e,t){jv(fy,e,()=>t)}function $o(e,t){return dy(e)&&e.entry.entryType===t}function dy(e){return!!(k.hasKeys(e,[xu,"entry"])&&e[xu])}function vD(){return{[xu]:!0,entry:{entryType:vt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function DD({entries:e,debug:t}){const n=bD(e);if(n)return n;const r=vD();e.forEach(s=>Vf({tree:r,newEntry:s,debug:t,manuallyAdded:!0}));const i=my(r),o={tree:r,flattenedNodes:i};return $D(e,o),t&&console.info("element-book tree:",r),o}function ED(e,t,n){if(!t.parent)return e;const r=Vc(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Vf({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const i=Vc(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${_f(t).join(" > ")}`);return i}function Vf({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const i=wD[t.entryType](t);t.errors.push(...i);const o=ED(e,t,n),s=Eu(t.title),a=o.children[s];if(a){if(r){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[xu]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:r};o.children[s]=u,Bv(t,vt.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Vf({tree:e,newEntry:l,debug:n,manuallyAdded:r}))}function Vc(e,t){const n=dy(e)?e.fullUrlBreadcrumbs.slice(0,-1):_f(e);return n.length?n.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function my(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>my(i));return[e,...n].flat()}function qf(e,t){return Wf(e,["",...t],void 0)}function Wf(e,t,n){const r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);const o=e.children[i||""],s=o&&Wf(o,r,n);return{...e.controls,...s}}function xD(e,t,n){const r={...e};return Wf(r,["",...t],n),r}function hy(e,t){const n=t?.controls||($o(e,vt.Page)?mn(e.entry.controls,(i,o)=>o.initValue):{});return{children:mn(e.children,(i,o)=>hy(o,t?.children?.[o.urlBreadcrumb])),controls:n}}function Ee(e){const t={...e,entryType:vt.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const i={...r,isVertical:t.useVerticalExamples,entryType:vt.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(k.isTruthy)};n.add(r.title),t.elementExamples[Eu(i.title)]=i}}),t}var Gt;(function(e){e.Search="search",e.Book="book"})(Gt||(Gt={}));function qc(e){return e[0]===Gt.Book?"":e[1]?decodeURIComponent(e[1]):""}const ko={hash:void 0,paths:[Gt.Book],search:void 0};const su=globalThis,zf=su.ShadowRoot&&(su.ShadyCSS===void 0||su.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kf=Symbol(),mh=new WeakMap;let py=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Kf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(zf&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=mh.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&mh.set(n,t))}return t}toString(){return this.cssText}};const Qe=e=>new py(typeof e=="string"?e:e+"",void 0,Kf),au=(e,...t)=>{const n=e.length===1?e[0]:t.reduce(((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new py(n,e,Kf)},CD=(e,t)=>{if(zf)e.adoptedStyleSheets=t.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of t){const r=document.createElement("style"),i=su.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},hh=zf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Qe(n)})(e):e;const{is:AD,defineProperty:kD,getOwnPropertyDescriptor:FD,getOwnPropertyNames:SD,getOwnPropertySymbols:ND,getPrototypeOf:ID}=Object,Hu=globalThis,ph=Hu.trustedTypes,PD=ph?ph.emptyScript:"",TD=Hu.reactiveElementPolyfillSupport,Ss=(e,t)=>e,Cu={toAttribute(e,t){switch(t){case Boolean:e=e?PD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Zf=(e,t)=>!AD(e,t),gh={attribute:!0,type:String,converter:Cu,reflect:!1,useDefault:!1,hasChanged:Zf};Symbol.metadata??=Symbol("metadata"),Hu.litPropertyMetadata??=new WeakMap;let co=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=gh){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&kD(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=FD(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get:i,set(s){const a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??gh}static _$Ei(){if(this.hasOwnProperty(Ss("elementProperties")))return;const t=ID(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ss("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ss("properties"))){const n=this.properties,r=[...SD(n),...ND(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(hh(i))}else t!==void 0&&n.push(hh(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return CD(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:Cu).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Cu;this._$Em=i;const a=s.fromAttribute(n,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){const i=this.constructor,o=this[t];if(r??=i.getPropertyOptions(t),!((r.hasChanged??Zf)(o,n)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??n??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};co.elementStyles=[],co.shadowRootOptions={mode:"open"},co[Ss("elementProperties")]=new Map,co[Ss("finalized")]=new Map,TD?.({ReactiveElement:co}),(Hu.reactiveElementVersions??=[]).push("2.1.1");const Gf=globalThis,Au=Gf.trustedTypes,yh=Au?Au.createPolicy("lit-html",{createHTML:e=>e}):void 0,gy="$lit$",Yr=`lit$${Math.random().toFixed(9).slice(2)}$`,yy="?"+Yr,MD=`<${yy}>`,Bi=document,qs=()=>Bi.createComment(""),Ws=e=>e===null||typeof e!="object"&&typeof e!="function",Yf=Array.isArray,OD=e=>Yf(e)||typeof e?.[Symbol.iterator]=="function",ec=`[ 	
\f\r]`,gs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wh=/-->/g,bh=/>/g,Di=RegExp(`>|${ec}(?:([^\\s"'>=/]+)(${ec}*=${ec}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$h=/'/g,vh=/"/g,wy=/^(?:script|style|textarea|title)$/i,BD=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),RD=BD(1),hn=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),Dh=new WeakMap,Fi=Bi.createTreeWalker(Bi,129);function by(e,t){if(!Yf(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return yh!==void 0?yh.createHTML(t):t}const LD=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=gs;for(let a=0;a<n;a++){const u=e[a];let l,c,f=-1,d=0;for(;d<u.length&&(s.lastIndex=d,c=s.exec(u),c!==null);)d=s.lastIndex,s===gs?c[1]==="!--"?s=wh:c[1]!==void 0?s=bh:c[2]!==void 0?(wy.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Di):c[3]!==void 0&&(s=Di):s===Di?c[0]===">"?(s=i??gs,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?Di:c[3]==='"'?vh:$h):s===vh||s===$h?s=Di:s===wh||s===bh?s=gs:(s=Di,i=void 0);const y=s===Di&&e[a+1].startsWith("/>")?" ":"";o+=s===gs?u+MD:f>=0?(r.push(l),u.slice(0,f)+gy+u.slice(f)+Yr+y):u+Yr+(f===-2?a:y)}return[by(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class zs{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=t.length-1,u=this.parts,[l,c]=LD(t,n);if(this.el=zs.createElement(l,r),Fi.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Fi.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(gy)){const d=c[s++],y=i.getAttribute(f).split(Yr),C=/([.?@])?(.*)/.exec(d);u.push({type:1,index:o,name:C[2],strings:y,ctor:C[1]==="."?UD:C[1]==="?"?_D:C[1]==="@"?VD:Xu}),i.removeAttribute(f)}else f.startsWith(Yr)&&(u.push({type:6,index:o}),i.removeAttribute(f));if(wy.test(i.tagName)){const f=i.textContent.split(Yr),d=f.length-1;if(d>0){i.textContent=Au?Au.emptyScript:"";for(let y=0;y<d;y++)i.append(f[y],qs()),Fi.nextNode(),u.push({type:2,index:++o});i.append(f[d],qs())}}}else if(i.nodeType===8)if(i.data===yy)u.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(Yr,f+1))!==-1;)u.push({type:7,index:o}),f+=Yr.length-1}o++}}static createElement(t,n){const r=Bi.createElement("template");return r.innerHTML=t,r}}function Fo(e,t,n=e,r){if(t===hn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const o=Ws(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=Fo(e,i._$AS(e,t.values),i,r)),t}let jD=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??Bi).importNode(n,!0);Fi.currentNode=i;let o=Fi.nextNode(),s=0,a=0,u=r[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new Go(o,o.nextSibling,this,t):u.type===1?l=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(l=new qD(o,this,t)),this._$AV.push(l),u=r[++a]}s!==u?.index&&(o=Fi.nextNode(),s++)}return Fi.currentNode=Bi,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class Go{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Fo(this,t,n),Ws(t)?t===te||t==null||t===""?(this._$AH!==te&&this._$AR(),this._$AH=te):t!==this._$AH&&t!==hn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):OD(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==te&&Ws(this._$AH)?this._$AA.nextSibling.data=t:this.T(Bi.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=zs.createElement(by(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const o=new jD(i,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(t){let n=Dh.get(t.strings);return n===void 0&&Dh.set(t.strings,n=new zs(t)),n}k(t){Yf(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Go(this.O(qs()),this.O(qs()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Xu{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=te,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=te}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=Fo(this,t,n,0),s=!Ws(t)||t!==this._$AH&&t!==hn,s&&(this._$AH=t);else{const a=t;let u,l;for(t=o[0],u=0;u<o.length-1;u++)l=Fo(this,a[r+u],n,u),l===hn&&(l=this._$AH[u]),s||=!Ws(l)||l!==this._$AH[u],l===te?t=te:t!==te&&(t+=(l??"")+o[u+1]),this._$AH[u]=l}s&&!i&&this.j(t)}j(t){t===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class UD extends Xu{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===te?void 0:t}}class _D extends Xu{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==te)}}class VD extends Xu{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=Fo(this,t,n,0)??te)===hn)return;const r=this._$AH,i=t===te&&r!==te||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==te&&(r===te||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class qD{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Fo(this,t)}}const WD={I:Go},zD=Gf.litHtmlPolyfillSupport;zD?.(zs,Go),(Gf.litHtmlVersions??=[]).push("3.3.1");const KD=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const o=n?.renderBefore??null;r._$litPart$=i=new Go(t.insertBefore(qs(),o),o,void 0,n??{})}return i._$AI(e),i};const Jf=globalThis;let Ns=class extends co{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=KD(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return hn}};Ns._$litElement$=!0,Ns.finalized=!0,Jf.litElementHydrateSupport?.({LitElement:Ns});const ZD=Jf.litElementPolyfillSupport;ZD?.({LitElement:Ns});(Jf.litElementVersions??=[]).push("4.2.1");function Or(e){if(k.isObject(e))return mn(e,(n,r)=>{if(!k.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(mD(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const o=r,s=n.startsWith("--")?Qe(n):n.startsWith("-")?au`-${Qe(n)}`:au`--${Qe(n)}`;return{name:s,value:au`var(${s}, ${Qe(o)})`,default:String(o)}});throw new TypeError(`Invalid setup input for '${Or.name}' function.`)}function GD({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}const me=Or({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),YD={nav:{hover:{background:me["element-book-nav-hover-background-color"],foreground:me["element-book-nav-hover-foreground-color"]},active:{background:me["element-book-nav-active-background-color"],foreground:me["element-book-nav-active-foreground-color"]},selected:{background:me["element-book-nav-selected-background-color"],foreground:me["element-book-nav-selected-foreground-color"]}},accent:{icon:me["element-book-accent-icon-color"]},page:{background:me["element-book-page-background-color"],backgroundFaint1:me["element-book-page-background-faint-level-1-color"],backgroundFaint2:me["element-book-page-background-faint-level-2-color"],foreground:me["element-book-page-foreground-color"],foregroundFaint1:me["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:me["element-book-page-foreground-faint-level-2-color"]}};function JD(e,t){$y(e,t,YD)}function Wc(e){return k.hasKey(e,"_$cssResult$")}function Eh(e){return k.hasKeys(e,["name","value","default"])&&k.isString(e.default)&&Wc(e.name)&&Wc(e.value)}function $y(e,t,n){Object.entries(t).forEach(([r,i])=>{const o=n[r];if(!o)throw new Error(`no nestedCssVar at key '${r}'`);if(Wc(i)){if(!Eh(o))throw new Error(`got a CSS result at '${r}' but no CSS var`);GD({forCssVar:o,onElement:e,toValue:String(i)})}else{if(Eh(o))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);$y(e,i,o)}})}function Fe(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let r=t[0].length,i=t[0].map((s,a)=>t.map(u=>u[a])),o=e.map(s=>i.map(a=>{let u=0;if(!Array.isArray(s)){for(let l of a)u+=s*l;return u}for(let l=0;l<s.length;l++)u+=s[l]*(a[l]||0);return u}));return n===1&&(o=o[0]),r===1?o.map(s=>s[0]):o}function ca(e){return Xr(e)==="string"}function Xr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function ku(e,{precision:t,unit:n}){return ri(e)?"none":vy(e,t)+(n??"")}function ri(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function He(e){return ri(e)?0:e}function vy(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const i=10**(t-r);return Math.floor(e*i+.5)/i}const HD={deg:1,grad:.9,rad:180/Math.PI,turn:360};function Dy(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let o=e.match(t);if(o){let s=[];return o[2].replace(i,(a,u)=>{let l=u.match(r),c=u;if(l){let f=l[0],d=c.slice(0,-f.length);f==="%"?(c=new Number(d/100),c.type="<percentage>"):(c=new Number(d*HD[f]),c.type="<angle>",c.unit=f)}else n.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),s.push(c)}),{name:o[1].toLowerCase(),rawName:o[1],rawArgs:o[2],args:s}}}function Ey(e){return e[e.length-1]}function Ks(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function xy(e,t,n){return(n-e)/(t-e)}function Hf(e,t,n){return Ks(t[0],t[1],xy(e[0],e[1],n))}function Cy(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let i=new String(r[1]);return i.range=[+r[2],+r[3]],i}return n}))}function Ay(e,t,n){return Math.max(Math.min(n,t),e)}function Qu(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function ar(e,t){return Qu(Math.abs(e)**t,e)}function Xf(e,t){return t===0?0:e/t}function ky(e,t,n=0,r=e.length){for(;n<r;){const i=n+r>>1;e[i]<t?n=i+1:r=i}return n}var XD=Object.freeze({__proto__:null,bisectLeft:ky,clamp:Ay,copySign:Qu,interpolate:Ks,interpolateInv:xy,isNone:ri,isString:ca,last:Ey,mapRange:Hf,multiplyMatrices:Fe,parseCoordGrammar:Cy,parseFunction:Dy,serializeNumber:ku,skipNone:He,spow:ar,toPrecision:vy,type:Xr,zdiv:Xf});class QD{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],n&&this[i][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const ii=new QD;var pn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const _t={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function zc(e){return Array.isArray(e)?e:_t[e]}function Fu(e,t,n,r={}){if(e=zc(e),t=zc(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(ii.run("chromatic-adaptation-start",i),i.M||(i.W1===_t.D65&&i.W2===_t.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===_t.D50&&i.W2===_t.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ii.run("chromatic-adaptation-end",i),i.M)return Fe(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const e5=new Set(["<number>","<percentage>","<angle>"]);function xh(e,t,n,r){return Object.entries(e.coords).map(([o,s],a)=>{let u=t.coordGrammar[a],l=r[a],c=l?.type,f;if(l.none?f=u.find(C=>e5.has(C)):f=u.find(C=>C==c),!f){let C=s.name||o;throw new TypeError(`${c??l.raw} not allowed for ${C} in ${n}()`)}let d=f.range;c==="<percentage>"&&(d||=[0,1]);let y=s.range||s.refRange;return d&&y&&(r[a]=Hf(d,y,r[a])),f})}function Fy(e,{meta:t}={}){let n={str:String(e)?.trim()};if(ii.run("parse-start",n),n.color)return n.color;if(n.parsed=Dy(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let i=n.parsed.args.shift(),o=i.startsWith("--")?i.substring(2):`--${i}`,s=[i,o],a=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let c of j.all){let f=c.getFormat("color");if(f&&(s.includes(f.id)||f.ids?.filter(d=>s.includes(d)).length)){const d=Object.keys(c.coords).map((C,D)=>n.parsed.args[D]||0);let y;return f.coordGrammar&&(y=xh(c,f,"color",d)),t&&Object.assign(t,{formatId:"color",types:y}),f.id.startsWith("--")&&!i.startsWith("--")&&pn.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${i}).`),i.startsWith("--")&&!f.id.startsWith("--")&&pn.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:d,alpha:a}}}let u="",l=i in j.registry?i:o;if(l in j.registry){let c=j.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of j.all){let o=i.getFormat(r);if(o&&o.type==="function"){let s=1;(o.lastAlpha||Ey(n.parsed.args).alpha)&&(s=n.parsed.args.pop());let a=n.parsed.args,u;return o.coordGrammar&&(u=xh(i,o,r,a)),t&&Object.assign(t,{formatId:o.name,types:u}),{spaceId:i.id,coords:a,alpha:s}}}}else for(let r of j.all)for(let i in r.formats){let o=r.formats[i];if(o.type!=="custom"||o.test&&!o.test(n.str))continue;let s=o.parse(n.str);if(s)return s.alpha??=1,t&&(t.formatId=i),s}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function X(e){if(Array.isArray(e))return e.map(X);if(!e)throw new TypeError("Empty color reference");ca(e)&&(e=Fy(e));let t=e.space||e.spaceId;return t instanceof j||(e.space=j.get(t)),e.alpha===void 0&&(e.alpha=1),e}const t5=75e-6;class j{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?j.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=t.white??this.base.white??"D65";this.white=zc(r),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:j.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:n5(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ii.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=t5}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((i,o)=>{let s=r[o];if(s.type!=="angle"&&s.range){if(Number.isNaN(i))return!0;let[a,u]=s.range;return(a===void 0||i>=a-n)&&(u===void 0||i<=u+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Ch(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=Ch(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const a=X(t);[t,n]=[a.space,a.coords]}if(t=j.get(t),this.equals(t))return n;n=n.map(a=>Number.isNaN(a)?0:a);let r=this.path,i=t.path,o,s;for(let a=0;a<r.length&&r[a].equals(i[a]);a++)o=r[a],s=a;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=r.length-1;a>s;a--)n=r[a].toBase(n);for(let a=s+1;a<i.length;a++)n=i[a].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=X(t);[t,n]=[r.space,r.coords]}return t=j.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],i=r.range||r.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(j.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof j)return t;if(Xr(t)==="string"){let i=j.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(n.length)return j.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=Xr(t),i,o;if(r==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=j.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Xr(o),r==="number"||r==="string"&&o>=0){let u=Object.entries(i.coords)[o];if(u)return{space:i,id:u[0],index:o,...u[1]}}i=j.get(i);let s=o.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function n5(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function Ch(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=Cy(e.coords);let n=Object.entries(t).map(([r,i],o)=>{let s=e.coordGrammar[o][0],a=i.range||i.refRange,u=s.range,l="";return s=="<percentage>"?(u=[0,100],l="%"):s=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(r,i)=>r.map((o,s)=>{let{fromRange:a,toRange:u,suffix:l}=n[s];return a&&u&&(o=Hf(a,u,o)),o=ku(o,{precision:i,unit:l}),o})}return e}var Dt=new j({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class nn extends j{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Dt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=Fe(t.toXYZ_M,n);return this.white!==this.base.white&&(r=Fu(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=Fu(this.base.white,this.white,n),Fe(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function fa(e,t){return e=X(e),!t||e.space.equals(t)?e.coords.slice():(t=j.get(t),t.from(e))}function ln(e,t){e=X(e);let{space:n,index:r}=j.resolveCoord(t,e.space);return fa(e,n)[r]}function Qf(e,t,n){return e=X(e),t=j.get(t),e.coords=t.to(e.space,n),e}Qf.returns="color";function Tr(e,t,n){if(e=X(e),arguments.length===2&&Xr(arguments[1])==="object"){let r=arguments[1];for(let i in r)Tr(e,i,r[i])}else{typeof n=="function"&&(n=n(ln(e,t)));let{space:r,index:i}=j.resolveCoord(t,e.space),o=fa(e,r);o[i]=n,Qf(e,r,o)}return e}Tr.returns="color";var ed=new j({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Dt,fromBase:e=>Fu(Dt.white,"D50",e),toBase:e=>Fu("D50",Dt.white,e)});const r5=216/24389,Ah=24/116,_a=24389/27;let tc=_t.D50;var cn=new j({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:tc,base:ed,fromBase(e){let n=e.map((r,i)=>r/tc[i]).map(r=>r>r5?Math.cbrt(r):(_a*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Ah?Math.pow(t[0],3):(116*t[0]-16)/_a,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/_a,t[2]>Ah?Math.pow(t[2],3):(116*t[2]-16)/_a].map((r,i)=>r*tc[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function fr(e){return(e%360+360)%360}function i5(e,t){if(e==="raw")return t;let[n,r]=t.map(fr),i=r-n;return e==="increasing"?i<0&&(r+=360):e==="decreasing"?i>0&&(n+=360):e==="longer"?-180<i&&i<180&&(i>0?n+=360:r+=360):e==="shorter"&&(i>180?n+=360:i<-180&&(r+=360)),[n,r]}var Zs=new j({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:cn,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),fr(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const kh=25**7,Su=Math.PI,Fh=180/Su,oo=Su/180;function Sh(e){const t=e*e;return t*t*t*e}function Sy(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=X([e,t]);let[o,s,a]=cn.from(e),u=Zs.from(cn,[o,s,a])[1],[l,c,f]=cn.from(t),d=Zs.from(cn,[l,c,f])[1];u<0&&(u=0),d<0&&(d=0);let y=(u+d)/2,C=Sh(y),D=.5*(1-Math.sqrt(C/(C+kh))),S=(1+D)*s,A=(1+D)*c,N=Math.sqrt(S**2+a**2),U=Math.sqrt(A**2+f**2),W=S===0&&a===0?0:Math.atan2(a,S),G=A===0&&f===0?0:Math.atan2(f,A);W<0&&(W+=2*Su),G<0&&(G+=2*Su),W*=Fh,G*=Fh;let je=l-o,Ft=U-N,ot=G-W,Mt=W+G,Dn=Math.abs(ot),Ln;N*U===0?Ln=0:Dn<=180?Ln=ot:ot>180?Ln=ot-360:ot<-180?Ln=ot+360:pn.warn("the unthinkable has happened");let Qi=2*Math.sqrt(U*N)*Math.sin(Ln*oo/2),Nl=(o+l)/2,us=(N+U)/2,Fa=Sh(us),jn;N*U===0?jn=Mt:Dn<=180?jn=Mt/2:Mt<360?jn=(Mt+360)/2:jn=(Mt-360)/2;let Sa=(Nl-50)**2,Il=1+.015*Sa/Math.sqrt(20+Sa),Na=1+.045*us,En=1;En-=.17*Math.cos((jn-30)*oo),En+=.24*Math.cos(2*jn*oo),En+=.32*Math.cos((3*jn+6)*oo),En-=.2*Math.cos((4*jn-63)*oo);let Ge=1+.015*us*En,on=30*Math.exp(-1*((jn-275)/25)**2),eo=2*Math.sqrt(Fa/(Fa+kh)),Ur=-1*Math.sin(2*on*oo)*eo,gi=(je/(n*Il))**2;return gi+=(Ft/(r*Na))**2,gi+=(Qi/(i*Ge))**2,gi+=Ur*(Ft/(r*Na))*(Qi/(i*Ge)),Math.sqrt(gi)}const o5=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],s5=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],a5=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],u5=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var So=new j({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Dt,fromBase(e){let n=Fe(o5,e).map(r=>Math.cbrt(r));return Fe(a5,n)},toBase(e){let n=Fe(u5,e).map(r=>r**3);return Fe(s5,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Kc(e,t){[e,t]=X([e,t]);let[n,r,i]=So.from(e),[o,s,a]=So.from(t),u=n-o,l=r-s,c=i-a;return Math.sqrt(u**2+l**2+c**2)}const l5=75e-6;function Ti(e,t,{epsilon:n=l5}={}){e=X(e),t||(t=e.space),t=j.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function No(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Ny(e,t,n="lab"){n=j.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((o,s,a)=>{let u=i[a];return isNaN(s)||isNaN(u)?o:o+(u-s)**2},0))}function c5(e,t){return Ny(e,t,"lab")}const f5=Math.PI,Nh=f5/180;function d5(e,t,{l:n=2,c:r=1}={}){[e,t]=X([e,t]);let[i,o,s]=cn.from(e),[,a,u]=Zs.from(cn,[i,o,s]),[l,c,f]=cn.from(t),d=Zs.from(cn,[l,c,f])[1];a<0&&(a=0),d<0&&(d=0);let y=i-l,C=a-d,D=o-c,S=s-f,A=D**2+S**2-C**2,N=.511;i>=16&&(N=.040975*i/(1+.01765*i));let U=.0638*a/(1+.0131*a)+.638,W;Number.isNaN(u)&&(u=0),u>=164&&u<=345?W=.56+Math.abs(.2*Math.cos((u+168)*Nh)):W=.36+Math.abs(.4*Math.cos((u+35)*Nh));let G=Math.pow(a,4),je=Math.sqrt(G/(G+1900)),Ft=U*(je*W+1-je),ot=(y/(n*N))**2;return ot+=(C/(r*U))**2,ot+=A/Ft**2,Math.sqrt(ot)}const Ih=203;var td=new j({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Dt,fromBase(e){return e.map(t=>Math.max(t*Ih,0))},toBase(e){return e.map(t=>Math.max(t/Ih,0))}});const Va=1.15,qa=.66,Ph=2610/2**14,m5=2**14/2610,Th=3424/2**12,Mh=2413/2**7,Oh=2392/2**7,h5=1.7*2523/2**5,Bh=2**5/(1.7*2523),Wa=-.56,nc=16295499532821565e-27,p5=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],g5=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],y5=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],w5=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Iy=new j({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:td,fromBase(e){let[t,n,r]=e,i=Va*t-(Va-1)*r,o=qa*n-(qa-1)*t,a=Fe(p5,[i,o,r]).map(function(d){let y=Th+Mh*(d/1e4)**Ph,C=1+Oh*(d/1e4)**Ph;return(y/C)**h5}),[u,l,c]=Fe(y5,a);return[(1+Wa)*u/(1+Wa*u)-nc,l,c]},toBase(e){let[t,n,r]=e,i=(t+nc)/(1+Wa-Wa*(t+nc)),s=Fe(w5,[i,n,r]).map(function(d){let y=Th-d**Bh,C=Oh*d**Bh-Mh;return 1e4*(y/C)**m5}),[a,u,l]=Fe(g5,s),c=(a+(Va-1)*l)/Va,f=(u+(qa-1)*c)/qa;return[c,f,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Zc=new j({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Iy,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),fr(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function b5(e,t){[e,t]=X([e,t]);let[n,r,i]=Zc.from(e),[o,s,a]=Zc.from(t),u=n-o,l=r-s;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let c=i-a,f=2*Math.sqrt(r*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+f**2)}const Py=3424/4096,Ty=2413/128,My=2392/128,Rh=2610/16384,$5=2523/32,v5=16384/2610,Lh=32/2523,D5=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],E5=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],x5=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],C5=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Gc=new j({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:td,fromBase(e){let t=Fe(D5,e);return A5(t)},toBase(e){let t=k5(e);return Fe(C5,t)}});function A5(e){let t=e.map(function(n){let r=Py+Ty*(n/1e4)**Rh,i=1+My*(n/1e4)**Rh;return(r/i)**$5});return Fe(E5,t)}function k5(e){return Fe(x5,e).map(function(r){let i=Math.max(r**Lh-Py,0),o=Ty-My*r**Lh;return 1e4*(i/o)**v5})}function F5(e,t){[e,t]=X([e,t]);let[n,r,i]=Gc.from(e),[o,s,a]=Gc.from(t);return 720*Math.sqrt((n-o)**2+.25*(r-s)**2+(i-a)**2)}const S5=_t.D65,Oy=.42,jh=1/Oy,rc=2*Math.PI,By=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],N5=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],I5=[[460,451,288],[460,-891,-261],[460,-220,-6300]],P5={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},xi={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},T5=180/Math.PI,Uh=Math.PI/180;function Ry(e,t){return e.map(r=>{const i=ar(t*Math.abs(r)*.01,Oy);return 400*Qu(i,r)/(i+27.13)})}function M5(e,t){const n=100/t*27.13**jh;return e.map(r=>{const i=Math.abs(r);return Qu(n*ar(i/(400-i),jh),r)})}function O5(e){let t=fr(e);t<=xi.h[0]&&(t+=360);const n=ky(xi.h,t)-1,[r,i]=xi.h.slice(n,n+2),[o,s]=xi.e.slice(n,n+2),a=xi.H[n],u=(t-r)/o;return a+100*u/(u+(i-t)/s)}function B5(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,i]=xi.h.slice(n,n+2),[o,s]=xi.e.slice(n,n+2);return fr((t*(s*r-o*i)-100*r*s)/(t*(s-o)-100*s))}function Ly(e,t,n,r,i){const o={};o.discounting=i,o.refWhite=e,o.surround=r;const s=e.map(D=>D*100);o.la=t,o.yb=n;const a=s[1],u=Fe(By,s);r=P5[o.surround];const l=r[0];o.c=r[1],o.nc=r[2];const f=(1/(5*o.la+1))**4;o.fl=f*o.la+.1*(1-f)*(1-f)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/a,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const d=Math.max(Math.min(l*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=u.map(D=>Ks(1,a/D,d)),o.dRgbInv=o.dRgb.map(D=>1/D);const y=u.map((D,S)=>D*o.dRgb[S]),C=Ry(y,o.fl);return o.aW=o.nbb*(2*C[0]+C[1]+.05*C[2]),o}const _h=Ly(S5,64/Math.PI*.2,20,"average",!1);function Yc(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=fr(e.h)*Uh:n=B5(e.H)*Uh;const r=Math.cos(n),i=Math.sin(n);let o=0;e.J!==void 0?o=ar(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=ar(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(n+2)+3.8),l=t.aW*ar(o,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,f=l/t.nbb,d=23*(f+.305)*Xf(a,23*c+a*(11*r+108*i)),y=d*r,C=d*i,D=M5(Fe(I5,[f,y,C]).map(S=>S*1/1403),t.fl);return Fe(N5,D.map((S,A)=>S*t.dRgbInv[A])).map(S=>S/100)}function jy(e,t){const n=e.map(U=>U*100),r=Ry(Fe(By,n).map((U,W)=>U*t.dRgb[W]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,o=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(o,i)%rc+rc)%rc,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*Xf(a*Math.sqrt(i**2+o**2),r[0]+r[1]+1.05*r[2]+.305),l=ar(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*r[0]+r[1]+.05*r[2]),f=ar(c/t.aW,.5*t.c*t.z),d=100*ar(f,2),y=4/t.c*f*(t.aW+4)*t.flRoot,C=l*f,D=C*t.flRoot,S=fr(s*T5),A=O5(S),N=50*ar(t.c*l/(t.aW+4),1/2);return{J:d,C,h:S,s:N,Q:y,M:D,H:A}}var R5=new j({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Dt,fromBase(e){const t=jy(e,_h);return[t.J,t.M,t.h]},toBase(e){return Yc({J:e[0],M:e[1],h:e[2]},_h)}});const L5=_t.D65,j5=216/24389,Uy=24389/27;function U5(e){return 116*(e>j5?Math.cbrt(e):(Uy*e+16)/116)-16}function Jc(e){return e>8?Math.pow((e+16)/116,3):e/Uy}function _5(e,t){let[n,r,i]=e,o=[],s=0;if(i===0)return[0,0,0];let a=Jc(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let c=0,f=1/0;for(;c<=l;){o=Yc({J:s,C:r,h:n},t);const d=Math.abs(o[1]-a);if(d<f){if(d<=u)return o;f=d}s=s-(o[1]-a)*s/(2*o[1]),c+=1}return Yc({J:s,C:r,h:n},t)}function V5(e,t){const n=U5(e[1]);if(n===0)return[0,0,0];const r=jy(e,nd);return[fr(r.h),r.C,n]}const nd=Ly(L5,200/Math.PI*Jc(50),Jc(50)*100,"average",!1);var Gs=new j({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Dt,fromBase(e){return V5(e)},toBase(e){return _5(e,nd)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const q5=Math.PI/180,Vh=[1,.007,.0228];function qh(e){e[1]<0&&(e=Gs.fromBase(Gs.toBase(e)));const t=Math.log(Math.max(1+Vh[2]*e[1]*nd.flRoot,1))/Vh[2],n=e[0]*q5,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function W5(e,t){[e,t]=X([e,t]);let[n,r,i]=qh(Gs.from(e)),[o,s,a]=qh(Gs.from(t));return Math.sqrt((n-o)**2+(r-s)**2+(i-a)**2)}var Io={deltaE76:c5,deltaECMC:d5,deltaE2000:Sy,deltaEJz:b5,deltaEITP:F5,deltaEOK:Kc,deltaEHCT:W5};function z5(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Wh={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function oi(e,{method:t=pn.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:i=2,blackWhiteClamp:o={}}={}){if(e=X(e),ca(arguments[1])?n=arguments[1]:n||(n=e.space),n=j.get(n),Ti(e,n,{epsilon:0}))return e;let s;if(t==="css")s=K5(e,{space:n});else{if(t!=="clip"&&!Ti(e,n)){Object.prototype.hasOwnProperty.call(Wh,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:o}=Wh[t]);let a=Sy;if(r!==""){for(let l in Io)if("deltae"+r.toLowerCase()===l.toLowerCase()){a=Io[l];break}}let u=oi(ke(e,n),{method:"clip",space:n});if(a(e,u)>i){if(Object.keys(o).length===3){let N=j.resolveCoord(o.channel),U=ln(ke(e,N.space),N.id);if(ri(U)&&(U=0),U>=o.max)return ke({space:"xyz-d65",coords:_t.D65},e.space);if(U<=o.min)return ke({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=j.resolveCoord(t),c=l.space,f=l.id,d=ke(e,c);d.coords.forEach((N,U)=>{ri(N)&&(d.coords[U]=0)});let C=(l.range||l.refRange)[0],D=z5(i),S=C,A=ln(d,f);for(;A-S>D;){let N=No(d);N=oi(N,{space:n,method:"clip"}),a(d,N)-i<D?S=ln(d,f):A=ln(d,f),Tr(d,f,(S+A)/2)}s=ke(d,n)}else s=u}else s=ke(e,n);if(t==="clip"||!Ti(s,n,{epsilon:0})){let a=Object.values(n.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,f]=a[l];return c!==void 0&&(u=Math.max(c,u)),f!==void 0&&(u=Math.min(u,f)),u})}}return n!==e.space&&(s=ke(s,e.space)),e.coords=s.coords,e}oi.returns="color";const zh={WHITE:{space:So,coords:[1,0,0]},BLACK:{space:So,coords:[0,0,0]}};function K5(e,{space:t}={}){e=X(e),t||(t=e.space),t=j.get(t);const i=j.get("oklch");if(t.isUnbounded)return ke(e,t);const o=ke(e,i);let s=o.coords[0];if(s>=1){const C=ke(zh.WHITE,t);return C.alpha=e.alpha,ke(C,t)}if(s<=0){const C=ke(zh.BLACK,t);return C.alpha=e.alpha,ke(C,t)}if(Ti(o,t,{epsilon:0}))return ke(o,t);function a(C){const D=ke(C,t),S=Object.values(t.coords);return D.coords=D.coords.map((A,N)=>{if("range"in S[N]){const[U,W]=S[N].range;return Ay(U,A,W)}return A}),D}let u=0,l=o.coords[1],c=!0,f=No(o),d=a(f),y=Kc(d,f);if(y<.02)return d;for(;l-u>1e-4;){const C=(u+l)/2;if(f.coords[1]=C,c&&Ti(f,t,{epsilon:0}))u=C;else if(d=a(f),y=Kc(d,f),y<.02){if(.02-y<1e-4)break;c=!1,u=C}else l=C}return d}function ke(e,t,{inGamut:n}={}){e=X(e),t=j.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=oi(i,n===!0?void 0:n)),i}ke.returns="color";function Is(e,{precision:t=pn.precision,format:n="default",inGamut:r=!0,...i}={}){let o;e=X(e);let s=n;n=e.space.getFormat(n)??e.space.getFormat("default")??j.DEFAULT_FORMAT;let a=e.coords.slice();if(r||=n.toGamut,r&&!Ti(e)&&(a=oi(No(e),r===!0?void 0:r).coords),n.type==="custom")if(i.precision=t,n.serialize)o=n.serialize(a,e.alpha,i);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let u=n.name||"color";n.serializeCoords?a=n.serializeCoords(a,t):t!==null&&(a=a.map(d=>ku(d,{precision:t})));let l=[...a];if(u==="color"){let d=n.id||n.ids?.[0]||e.space.id;l.unshift(d)}let c=e.alpha;t!==null&&(c=ku(c,{precision:t}));let f=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${c}`;o=`${u}(${l.join(n.commas?", ":" ")}${f})`}return o}const Z5=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],G5=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var el=new nn({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Z5,fromXYZ_M:G5});const za=1.09929682680944,Kh=.018053968510807;var _y=new nn({id:"rec2020",name:"REC.2020",base:el,toBase(e){return e.map(function(t){return t<Kh*4.5?t/4.5:Math.pow((t+za-1)/za,1/.45)})},fromBase(e){return e.map(function(t){return t>=Kh?za*Math.pow(t,.45)-(za-1):4.5*t})}});const Y5=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],J5=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Vy=new nn({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Y5,fromXYZ_M:J5});const H5=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],ft=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var qy=new nn({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:H5,fromXYZ_M:ft}),Zh={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Gh=Array(3).fill("<percentage> | <number>[0, 255]"),Yh=Array(3).fill("<number>[0, 255]");var Po=new nn({id:"srgb",name:"sRGB",base:qy,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:Gh},rgb_number:{name:"rgb",commas:!0,coords:Yh,noAlpha:!0},color:{},rgba:{coords:Gh,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Yh},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(o=>Math.round(o*255));let r=n&&e.every(o=>o%17===0);return"#"+e.map(o=>r?(o/17).toString(16):o.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Zh.black,t.alpha=0):t.coords=Zh[e],t.coords)return t}}}}),Wy=new nn({id:"p3",cssId:"display-p3",name:"P3",base:Vy,fromBase:Po.fromBase,toBase:Po.toBase});pn.display_space=Po;let X5;if(typeof CSS<"u"&&CSS.supports)for(let e of[cn,_y,Wy]){let t=e.getMinCoords(),r=Is({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){pn.display_space=e;break}}function Q5(e,{space:t=pn.display_space,...n}={}){let r=Is(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!pn.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(ri)||ri(e.alpha))&&!(X5??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=No(e),i.coords=i.coords.map(He),i.alpha=He(i.alpha),r=Is(i,n),CSS.supports("color",r)))return r=new String(r),r.color=i,r;i=ke(i,t),r=new String(Is(i,n)),r.color=i}return r}function eE(e,t){return e=X(e),t=X(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function si(e){return ln(e,[Dt,"y"])}function zy(e,t){Tr(e,[Dt,"y"],t)}function tE(e){Object.defineProperty(e.prototype,"luminance",{get(){return si(this)},set(t){zy(this,t)}})}var nE=Object.freeze({__proto__:null,getLuminance:si,register:tE,setLuminance:zy});function rE(e,t){e=X(e),t=X(t);let n=Math.max(si(e),0),r=Math.max(si(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const iE=.56,oE=.57,sE=.62,aE=.65,Jh=.022,uE=1.414,lE=.1,cE=5e-4,fE=1.14,Hh=.027,dE=1.14;function Xh(e){return e>=Jh?e:e+(Jh-e)**uE}function so(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function mE(e,t){t=X(t),e=X(e);let n,r,i,o,s,a;t=ke(t,"srgb"),[o,s,a]=t.coords;let u=so(o)*.2126729+so(s)*.7151522+so(a)*.072175;e=ke(e,"srgb"),[o,s,a]=e.coords;let l=so(o)*.2126729+so(s)*.7151522+so(a)*.072175,c=Xh(u),f=Xh(l),d=f>c;return Math.abs(f-c)<cE?r=0:d?(n=f**iE-c**oE,r=n*fE):(n=f**aE-c**sE,r=n*dE),Math.abs(r)<lE?i=0:r>0?i=r-Hh:i=r+Hh,i*100}function hE(e,t){e=X(e),t=X(t);let n=Math.max(si(e),0),r=Math.max(si(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}const pE=5e4;function gE(e,t){e=X(e),t=X(t);let n=Math.max(si(e),0),r=Math.max(si(t),0);return r>n&&([n,r]=[r,n]),r===0?pE:(n-r)/r}function yE(e,t){e=X(e),t=X(t);let n=ln(e,[cn,"l"]),r=ln(t,[cn,"l"]);return Math.abs(n-r)}const wE=216/24389,Qh=24/116,Ka=24389/27;let ic=_t.D65;var Hc=new j({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ic,base:Dt,fromBase(e){let n=e.map((r,i)=>r/ic[i]).map(r=>r>wE?Math.cbrt(r):(Ka*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Qh?Math.pow(t[0],3):(116*t[0]-16)/Ka,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ka,t[2]>Qh?Math.pow(t[2],3):(116*t[2]-16)/Ka].map((r,i)=>r*ic[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const oc=Math.pow(5,.5)*.5+.5;function bE(e,t){e=X(e),t=X(t);let n=ln(e,[Hc,"l"]),r=ln(t,[Hc,"l"]),i=Math.abs(Math.pow(n,oc)-Math.pow(r,oc)),o=Math.pow(i,1/oc)*Math.SQRT2-40;return o<7.5?0:o}var uu=Object.freeze({__proto__:null,contrastAPCA:mE,contrastDeltaPhi:bE,contrastLstar:yE,contrastMichelson:hE,contrastWCAG21:rE,contrastWeber:gE});function $E(e,t,n={}){ca(n)&&(n={algorithm:n});let{algorithm:r,...i}=n;if(!r){let o=Object.keys(uu).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=X(e),t=X(t);for(let o in uu)if("contrast"+r.toLowerCase()===o.toLowerCase())return uu[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function tl(e){let[t,n,r]=fa(e,Dt),i=t+15*n+3*r;return[4*t/i,9*n/i]}function Ky(e){let[t,n,r]=fa(e,Dt),i=t+n+r;return[t/i,n/i]}function vE(e){Object.defineProperty(e.prototype,"uv",{get(){return tl(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ky(this)}})}var DE=Object.freeze({__proto__:null,register:vE,uv:tl,xy:Ky});function Cs(e,t,n={}){ca(n)&&(n={method:n});let{method:r=pn.deltaE,...i}=n;for(let o in Io)if("deltae"+r.toLowerCase()===o.toLowerCase())return Io[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${r}`)}function EE(e,t=.25){let r=[j.get("oklch","lch"),"l"];return Tr(e,r,i=>i*(1+t))}function xE(e,t=.25){let r=[j.get("oklch","lch"),"l"];return Tr(e,r,i=>i*(1-t))}var CE=Object.freeze({__proto__:null,darken:xE,lighten:EE});function Zy(e,t,n=.5,r={}){return[e,t]=[X(e),X(t)],Xr(n)==="object"&&([n,r]=[.5,n]),da(e,t,r)(n)}function Gy(e,t,n={}){let r;rd(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:a=1e3,...u}=n;r||([e,t]=[X(e),X(t)],r=da(e,t,u));let l=Cs(e,t),c=i>0?Math.max(s,Math.ceil(l/i)+1):s,f=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)f=[{p:.5,color:r(.5)}];else{let d=1/(c-1);f=Array.from({length:c},(y,C)=>{let D=C*d;return{p:D,color:r(D)}})}if(i>0){let d=f.reduce((y,C,D)=>{if(D===0)return 0;let S=Cs(C.color,f[D-1].color,o);return Math.max(y,S)},0);for(;d>i;){d=0;for(let y=1;y<f.length&&f.length<a;y++){let C=f[y-1],D=f[y],S=(D.p+C.p)/2,A=r(S);d=Math.max(d,Cs(A,C.color),Cs(A,D.color)),f.splice(y,0,{p:S,color:r(S)}),y++}}}return f=f.map(d=>d.color),f}function da(e,t,n={}){if(rd(e)){let[u,l]=[e,t];return da(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:r,outputSpace:i,progression:o,premultiplied:s}=n;e=X(e),t=X(t),e=No(e),t=No(t);let a={colors:[e,t],options:n};if(r?r=j.get(r):r=j.registry[pn.interpolationSpace]||e.space,i=i?j.get(i):r,e=ke(e,r),t=ke(t,r),e=oi(e),t=oi(t),r.coords.h&&r.coords.h.type==="angle"){let u=n.hue=n.hue||"shorter",l=[r,"h"],[c,f]=[ln(e,l),ln(t,l)];isNaN(c)&&!isNaN(f)?c=f:isNaN(f)&&!isNaN(c)&&(f=c),[c,f]=i5(u,[c,f]),Tr(e,l,c),Tr(t,l,f)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=o?o(u):u;let l=e.coords.map((d,y)=>{let C=t.coords[y];return Ks(d,C,u)}),c=Ks(e.alpha,t.alpha,u),f={space:r,coords:l,alpha:c};return s&&(f.coords=f.coords.map(d=>d/c)),i!==r&&(f=ke(f,i)),f},{rangeArgs:a})}function rd(e){return Xr(e)==="function"&&!!e.rangeArgs}pn.interpolationSpace="lab";function AE(e){e.defineFunction("mix",Zy,{returns:"color"}),e.defineFunction("range",da,{returns:"function<color>"}),e.defineFunction("steps",Gy,{returns:"array<color>"})}var kE=Object.freeze({__proto__:null,isRange:rd,mix:Zy,range:da,register:AE,steps:Gy}),Yy=new j({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Po,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,o]=e,[s,a,u]=[NaN,0,(n+t)/2],l=t-n;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case r:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-r)/l+2;break;case o:s=(r-i)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function i(o){let s=(o+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Jy=new j({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Yy,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r+n*Math.min(r,1-r);return[t,i===0?0:200*(1-r/i),100*i]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r*(1-n/2);return[t,i===0||i===1?0:(r-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),FE=new j({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Jy,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1){let a=n/i;return[t,0,a*100]}let o=1-r,s=o===0?0:1-n/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const SE=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],NE=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Hy=new nn({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:SE,fromXYZ_M:NE}),IE=new nn({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Hy,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const PE=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],TE=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Xy=new nn({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:ed,toXYZ_M:PE,fromXYZ_M:TE});const ME=1/512,OE=16/512;var BE=new nn({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Xy,toBase(e){return e.map(t=>t<OE?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=ME?t**(1/1.8):16*t)}}),RE=new j({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:So,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),fr(i)]},toBase(e){let[t,n,r]=e,i,o;return isNaN(r)?(i=0,o=0):(i=n*Math.cos(r*Math.PI/180),o=n*Math.sin(r*Math.PI/180)),[t,i,o]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Qy=_t.D65;const LE=216/24389,ep=24389/27,[tp,np]=tl({space:Dt,coords:Qy});var e1=new j({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Qy,base:Dt,fromBase(e){let t=[He(e[0]),He(e[1]),He(e[2])],n=t[1],[r,i]=tl({space:Dt,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let o=n<=LE?ep*n:116*Math.cbrt(n)-16;return[o,13*o*(r-tp),13*o*(i-np)]},toBase(e){let[t,n,r]=e;if(t===0||ri(t))return[0,0,0];n=He(n),r=He(r);let i=n/(13*t)+tp,o=r/(13*t)+np,s=t<=8?t/ep:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),id=new j({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:e1,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),fr(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const jE=216/24389,UE=24389/27,rp=ft[0][0],ip=ft[0][1],sc=ft[0][2],op=ft[1][0],sp=ft[1][1],ac=ft[1][2],ap=ft[2][0],up=ft[2][1],uc=ft[2][2];function ao(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function Nu(e){const t=Math.pow(e+16,3)/1560896,n=t>jE?t:e/UE,r=n*(284517*rp-94839*sc),i=n*(838422*sc+769860*ip+731718*rp),o=n*(632260*sc-126452*ip),s=n*(284517*op-94839*ac),a=n*(838422*ac+769860*sp+731718*op),u=n*(632260*ac-126452*sp),l=n*(284517*ap-94839*uc),c=n*(838422*uc+769860*up+731718*ap),f=n*(632260*uc-126452*up);return{r0s:r/o,r0i:i*e/o,r1s:r/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/f,b0i:c*e/f,b1s:l/(f+126452),b1i:(c-769860)*e/(f+126452)}}function lp(e,t){const n=t/360*Math.PI*2,r=ao(e.r0s,e.r0i,n),i=ao(e.r1s,e.r1i,n),o=ao(e.g0s,e.g0i,n),s=ao(e.g1s,e.g1i,n),a=ao(e.b0s,e.b0i,n),u=ao(e.b1s,e.b1i,n);return Math.min(r,i,o,s,a,u)}var _E=new j({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:id,gamutSpace:Po,fromBase(e){let[t,n,r]=[He(e[0]),He(e[1]),He(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=Nu(t),s=lp(o,r);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[He(e[0]),He(e[1]),He(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=Nu(r);i=lp(o,t)/100*n}return[r,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});ft[0][0];ft[0][1];ft[0][2];ft[1][0];ft[1][1];ft[1][2];ft[2][0];ft[2][1];ft[2][2];function uo(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function cp(e){let t=uo(e.r0s,e.r0i),n=uo(e.r1s,e.r1i),r=uo(e.g0s,e.g0i),i=uo(e.g1s,e.g1i),o=uo(e.b0s,e.b0i),s=uo(e.b1s,e.b1i);return Math.min(t,n,r,i,o,s)}var VE=new j({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:id,gamutSpace:"self",fromBase(e){let[t,n,r]=[He(e[0]),He(e[1]),He(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=Nu(t),s=cp(o);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[He(e[0]),He(e[1]),He(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=Nu(r);i=cp(o)/100*n}return[r,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const fp=203,dp=2610/2**14,qE=2**14/2610,WE=2523/2**5,mp=2**5/2523,hp=3424/2**12,pp=2413/2**7,gp=2392/2**7;var zE=new nn({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:el,toBase(e){return e.map(function(t){return(Math.max(t**mp-hp,0)/(pp-gp*t**mp))**qE*1e4/fp})},fromBase(e){return e.map(function(t){let n=Math.max(t*fp/1e4,0),r=hp+pp*n**dp,i=1+gp*n**dp;return(r/i)**WE})}});const yp=.17883277,wp=.28466892,bp=.55991073,lc=3.7743;var KE=new nn({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:el,toBase(e){return e.map(function(t){return t<=.5?t**2/3*lc:(Math.exp((t-bp)/yp)+wp)/12*lc})},fromBase(e){return e.map(function(t){return t/=lc,t<=1/12?Math.sqrt(3*t):yp*Math.log(12*t-wp)+bp})}});const t1={};ii.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=n1(e.W1,e.W2,e.options.method))});ii.add("chromatic-adaptation-end",e=>{e.M||(e.M=n1(e.W1,e.W2,e.options.method))});function nl({id:e,toCone_M:t,fromCone_M:n}){t1[e]=arguments[0]}function n1(e,t,n="Bradford"){let r=t1[n],[i,o,s]=Fe(r.toCone_M,e),[a,u,l]=Fe(r.toCone_M,t),c=[[a/i,0,0],[0,u/o,0],[0,0,l/s]],f=Fe(c,r.toCone_M);return Fe(r.fromCone_M,f)}nl({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});nl({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});nl({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});nl({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(_t,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});_t.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const ZE=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],GE=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var r1=new nn({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:_t.ACES,toXYZ_M:ZE,fromXYZ_M:GE});const Za=2**-16,cc=-.35828683,Ga=(Math.log2(65504)+9.72)/17.52;var YE=new nn({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[cc,Ga],name:"Red"},g:{range:[cc,Ga],name:"Green"},b:{range:[cc,Ga],name:"Blue"}},referred:"scene",base:r1,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-Za)*2:n<Ga?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Za)+9.72)/17.52:t<Za?(Math.log2(Za+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),$p=Object.freeze({__proto__:null,A98RGB:IE,A98RGB_Linear:Hy,ACEScc:YE,ACEScg:r1,CAM16_JMh:R5,HCT:Gs,HPLuv:VE,HSL:Yy,HSLuv:_E,HSV:Jy,HWB:FE,ICTCP:Gc,JzCzHz:Zc,Jzazbz:Iy,LCH:Zs,LCHuv:id,Lab:cn,Lab_D65:Hc,Luv:e1,OKLCH:RE,OKLab:So,P3:Wy,P3_Linear:Vy,ProPhoto:BE,ProPhoto_Linear:Xy,REC_2020:_y,REC_2020_Linear:el,REC_2100_HLG:KE,REC_2100_PQ:zE,XYZ_ABS_D65:td,XYZ_D50:ed,XYZ_D65:Dt,sRGB:Po,sRGB_Linear:qy});let $e=class zt{constructor(...t){let n;t.length===1&&(n=X(t[0]));let r,i,o;n?(r=n.space||n.spaceId,i=n.coords,o=n.alpha):[r,i,o]=t,Object.defineProperty(this,"space",{value:j.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=o>1||o===void 0?1:o<0?0:o;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new zt(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=Q5(this,...t);return n.color=new zt(n.color),n}static get(t,...n){return t instanceof zt?t:new zt(t,...n)}static defineFunction(t,n,r=n){let{instance:i=!0,returns:o}=r,s=function(...a){let u=n(...a);if(o==="color")u=zt.get(u);else if(o==="function<color>"){let l=u;u=function(...c){let f=l(...c);return zt.get(f)},Object.assign(u,l)}else o==="array<color>"&&(u=u.map(l=>zt.get(l)));return u};t in zt||(zt[t]=s),i&&(zt.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let n in t)zt.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(zt);else for(let n in t)zt.defineFunction(n,t[n])}};$e.defineFunctions({get:ln,getAll:fa,set:Tr,setAll:Qf,to:ke,equals:eE,inGamut:Ti,toGamut:oi,distance:Ny,toString:Is});Object.assign($e,{util:XD,hooks:ii,WHITES:_t,Space:j,spaces:j.registry,parse:Fy,defaults:pn});for(let e of Object.keys($p))j.register($p[e]);for(let e in j.registry)Xc(e,j.registry[e]);ii.add("colorspace-init-end",e=>{Xc(e.id,e),e.aliases?.forEach(t=>{Xc(t,e)})});function Xc(e,t){let n=e.replace(/-/g,"_");Object.defineProperty($e.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(i,o)=>{try{return j.resolveCoord([t,o]),!0}catch{}return Reflect.has(i,o)},get:(i,o,s)=>{if(o&&typeof o!="symbol"&&!(o in i)){let{index:a}=j.resolveCoord([t,o]);if(a>=0)return i[a]}return Reflect.get(i,o,s)},set:(i,o,s,a)=>{if(o&&typeof o!="symbol"&&!(o in i)||o>=0){let{index:u}=j.resolveCoord([t,o]);if(u>=0)return i[u]=s,this.setAll(e,i),!0}return Reflect.set(i,o,s,a)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}$e.extend(Io);$e.extend({deltaE:Cs});Object.assign($e,{deltaEMethods:Io});$e.extend(CE);$e.extend({contrast:$E});$e.extend(DE);$e.extend(nE);$e.extend(kE);$e.extend(uu);const i1=Symbol("no update");function vp(e){return e!==i1}class fc extends rr()("observable-value-update"){}class JE extends rr()("observable-value-resolve"){}class HE extends rr()("observable-value-error"){}class XE extends jf("observable-destroy"){}class QE extends jf("observable-callback-call"){}class ex extends rr()("observable-params-update"){}class o1{listenTarget=new Uf;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];if(n===i1)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)){const i=this.value;return this.value=n,this.listenTarget.dispatch(new fc({detail:[n,i]})),!0}return!1}listen(t,n){const r=i=>n(...i.detail);return this.listenerMap.set(n,r),t&&n(this.value,void 0),this.listenTarget.listen(fc,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(fc,n)}destroy(){this.listenTarget.dispatch(new XE),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function od(e,t){return kv(e,t,(n,r)=>k.isFunction(n)&&k.isFunction(r)?!0:k.strictEquals(n,r))}var Ps;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Ps||(Ps={}));class tx extends o1{equalityCheck;waitingForValueDeferredPromise=new gu;lastSetPromise;lastSetId=Pi();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||od,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const n=Pi();return this.lastSetId=n,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new gu,super.setValue(this.waitingForValueDeferredPromise.promise,k.strictEquals)),t.then(r=>{this.lastSetPromise!==t||this.lastSetId!==n||this.resolveValue(r)}).catch(r=>{if(this.lastSetPromise!==t||this.lastSetId!==n)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=et(r);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return vp(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,k.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Pi(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new JE({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,k.strictEquals),this.dispatch(new HE({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):vp(t)?this.resolveValue(t):!1}catch(n){return this.rejectValue(et(n)),!0}}listen(t,n){return super.listen(t,n)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?Ps.Rejected:this.value instanceof Promise?Ps.Waiting:Ps.Resolved}}class mo extends tx{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==mo.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||od,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:mo.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===mo.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(et(t))}finally{this.dispatch(new QE)}}updateLastParams(t){try{return this.internalParams===mo.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new ex({detail:this.internalParams})),!0):!1}catch(n){return this.setValue(et(n)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return k.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function nx(e){return nt(e)&&!rn(e)&&!ha(e)&&Symbol.asyncIterator in e}function rn(e){return Array.isArray(e)}function s1(e){return typeof e=="bigint"}function ma(e){return typeof e=="boolean"}function sd(e){return e instanceof globalThis.Date}function rx(e){return typeof e=="function"}function ix(e){return nt(e)&&!rn(e)&&!ha(e)&&Symbol.iterator in e}function ox(e){return e===null}function cr(e){return typeof e=="number"}function nt(e){return typeof e=="object"&&e!==null}function a1(e){return e instanceof globalThis.RegExp}function ze(e){return typeof e=="string"}function sx(e){return typeof e=="symbol"}function ha(e){return e instanceof globalThis.Uint8Array}function Xe(e){return e===void 0}function ax(e){return e.map(t=>Iu(t))}function ux(e){return new Date(e.getTime())}function lx(e){return new Uint8Array(e)}function cx(e){return new RegExp(e.source,e.flags)}function fx(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=Iu(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=Iu(e[n]);return t}function Iu(e){return rn(e)?ax(e):sd(e)?ux(e):ha(e)?lx(e):a1(e)?cx(e):nt(e)?fx(e):e}function gn(e){return Iu(e)}function ad(e,t){return gn(t===void 0?e:{...t,...e})}function u1(e){return dr(e)&&globalThis.Symbol.asyncIterator in e}function l1(e){return dr(e)&&globalThis.Symbol.iterator in e}function c1(e){return e instanceof globalThis.Promise}function ud(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function ld(e){return e instanceof globalThis.Uint8Array}function f1(e,t){return t in e}function dr(e){return e!==null&&typeof e=="object"}function yn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function ui(e){return e===void 0}function rl(e){return e===null}function il(e){return typeof e=="boolean"}function ee(e){return typeof e=="number"}function d1(e){return globalThis.Number.isInteger(e)}function Er(e){return typeof e=="bigint"}function dn(e){return typeof e=="string"}function m1(e){return typeof e=="function"}function ol(e){return typeof e=="symbol"}function h1(e){return Er(e)||il(e)||rl(e)||ee(e)||dn(e)||ol(e)||ui(e)}var qe;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function n(s){const a=dr(s);return e.AllowArrayObject?a:a&&!yn(s)}e.IsObjectLike=n;function r(s){return n(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=r;function i(s){return e.AllowNaN?ee(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const a=ui(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=o})(qe||(qe={}));function dx(e){return globalThis.Object.freeze(e).map(t=>Pu(t))}function mx(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=Pu(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=Pu(e[n]);return globalThis.Object.freeze(t)}function Pu(e){return rn(e)?dx(e):sd(e)?e:ha(e)?e:a1(e)?e:nt(e)?mx(e):e}function T(e,t){const n=t!==void 0?{...t,...e}:e;switch(qe.InstanceMode){case"freeze":return Pu(n);case"clone":return gn(n);default:return n}}class Ct extends Error{constructor(t){super(t)}}const Yt=Symbol.for("TypeBox.Transform"),pa=Symbol.for("TypeBox.Readonly"),Br=Symbol.for("TypeBox.Optional"),sl=Symbol.for("TypeBox.Hint"),P=Symbol.for("TypeBox.Kind");function cd(e){return nt(e)&&e[pa]==="Readonly"}function li(e){return nt(e)&&e[Br]==="Optional"}function p1(e){return ue(e,"Any")}function g1(e){return ue(e,"Argument")}function Yo(e){return ue(e,"Array")}function al(e){return ue(e,"AsyncIterator")}function ul(e){return ue(e,"BigInt")}function ga(e){return ue(e,"Boolean")}function Jo(e){return ue(e,"Computed")}function Ho(e){return ue(e,"Constructor")}function hx(e){return ue(e,"Date")}function Xo(e){return ue(e,"Function")}function Qo(e){return ue(e,"Integer")}function Mn(e){return ue(e,"Intersect")}function ll(e){return ue(e,"Iterator")}function ue(e,t){return nt(e)&&P in e&&e[P]===t}function y1(e){return ma(e)||cr(e)||ze(e)}function qi(e){return ue(e,"Literal")}function Wi(e){return ue(e,"MappedKey")}function vn(e){return ue(e,"MappedResult")}function ya(e){return ue(e,"Never")}function px(e){return ue(e,"Not")}function fd(e){return ue(e,"Null")}function es(e){return ue(e,"Number")}function ir(e){return ue(e,"Object")}function cl(e){return ue(e,"Promise")}function fl(e){return ue(e,"Record")}function Qt(e){return ue(e,"Ref")}function w1(e){return ue(e,"RegExp")}function wa(e){return ue(e,"String")}function dd(e){return ue(e,"Symbol")}function zi(e){return ue(e,"TemplateLiteral")}function gx(e){return ue(e,"This")}function De(e){return nt(e)&&Yt in e}function Ki(e){return ue(e,"Tuple")}function ba(e){return ue(e,"Undefined")}function bt(e){return ue(e,"Union")}function yx(e){return ue(e,"Uint8Array")}function wx(e){return ue(e,"Unknown")}function bx(e){return ue(e,"Unsafe")}function $x(e){return ue(e,"Void")}function vx(e){return nt(e)&&P in e&&ze(e[P])}function Vt(e){return p1(e)||g1(e)||Yo(e)||ga(e)||ul(e)||al(e)||Jo(e)||Ho(e)||hx(e)||Xo(e)||Qo(e)||Mn(e)||ll(e)||qi(e)||Wi(e)||vn(e)||ya(e)||px(e)||fd(e)||es(e)||ir(e)||cl(e)||fl(e)||Qt(e)||w1(e)||wa(e)||dd(e)||zi(e)||gx(e)||Ki(e)||ba(e)||bt(e)||yx(e)||wx(e)||bx(e)||$x(e)||vx(e)}const Dx=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function b1(e){try{return new RegExp(e),!0}catch{return!1}}function md(e){if(!ze(e))return!1;for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function $1(e){return hd(e)||Te(e)}function ys(e){return Xe(e)||s1(e)}function be(e){return Xe(e)||cr(e)}function hd(e){return Xe(e)||ma(e)}function we(e){return Xe(e)||ze(e)}function Ex(e){return Xe(e)||ze(e)&&md(e)&&b1(e)}function xx(e){return Xe(e)||ze(e)&&md(e)}function v1(e){return Xe(e)||Te(e)}function Tu(e){return nt(e)&&e[Br]==="Optional"}function Xn(e){return le(e,"Any")&&we(e.$id)}function Cx(e){return le(e,"Argument")&&cr(e.index)}function Zi(e){return le(e,"Array")&&e.type==="array"&&we(e.$id)&&Te(e.items)&&be(e.minItems)&&be(e.maxItems)&&hd(e.uniqueItems)&&v1(e.contains)&&be(e.minContains)&&be(e.maxContains)}function pd(e){return le(e,"AsyncIterator")&&e.type==="AsyncIterator"&&we(e.$id)&&Te(e.items)}function dl(e){return le(e,"BigInt")&&e.type==="bigint"&&we(e.$id)&&ys(e.exclusiveMaximum)&&ys(e.exclusiveMinimum)&&ys(e.maximum)&&ys(e.minimum)&&ys(e.multipleOf)}function Gi(e){return le(e,"Boolean")&&e.type==="boolean"&&we(e.$id)}function Ax(e){return le(e,"Computed")&&ze(e.target)&&rn(e.parameters)&&e.parameters.every(t=>Te(t))}function ml(e){return le(e,"Constructor")&&e.type==="Constructor"&&we(e.$id)&&rn(e.parameters)&&e.parameters.every(t=>Te(t))&&Te(e.returns)}function hl(e){return le(e,"Date")&&e.type==="Date"&&we(e.$id)&&be(e.exclusiveMaximumTimestamp)&&be(e.exclusiveMinimumTimestamp)&&be(e.maximumTimestamp)&&be(e.minimumTimestamp)&&be(e.multipleOfTimestamp)}function pl(e){return le(e,"Function")&&e.type==="Function"&&we(e.$id)&&rn(e.parameters)&&e.parameters.every(t=>Te(t))&&Te(e.returns)}function Rr(e){return le(e,"Integer")&&e.type==="integer"&&we(e.$id)&&be(e.exclusiveMaximum)&&be(e.exclusiveMinimum)&&be(e.maximum)&&be(e.minimum)&&be(e.multipleOf)}function D1(e){return nt(e)&&Object.entries(e).every(([t,n])=>md(t)&&Te(n))}function Yi(e){return le(e,"Intersect")&&!(ze(e.type)&&e.type!=="object")&&rn(e.allOf)&&e.allOf.every(t=>Te(t)&&!Px(t))&&we(e.type)&&(hd(e.unevaluatedProperties)||v1(e.unevaluatedProperties))&&we(e.$id)}function gd(e){return le(e,"Iterator")&&e.type==="Iterator"&&we(e.$id)&&Te(e.items)}function le(e,t){return nt(e)&&P in e&&e[P]===t}function E1(e){return ci(e)&&ze(e.const)}function x1(e){return ci(e)&&cr(e.const)}function C1(e){return ci(e)&&ma(e.const)}function ci(e){return le(e,"Literal")&&we(e.$id)&&kx(e.const)}function kx(e){return ma(e)||cr(e)||ze(e)}function Fx(e){return le(e,"MappedKey")&&rn(e.keys)&&e.keys.every(t=>cr(t)||ze(t))}function Sx(e){return le(e,"MappedResult")&&D1(e.properties)}function fi(e){return le(e,"Never")&&nt(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function To(e){return le(e,"Not")&&Te(e.not)}function yd(e){return le(e,"Null")&&e.type==="null"&&we(e.$id)}function Jt(e){return le(e,"Number")&&e.type==="number"&&we(e.$id)&&be(e.exclusiveMaximum)&&be(e.exclusiveMinimum)&&be(e.maximum)&&be(e.minimum)&&be(e.multipleOf)}function Me(e){return le(e,"Object")&&e.type==="object"&&we(e.$id)&&D1(e.properties)&&$1(e.additionalProperties)&&be(e.minProperties)&&be(e.maxProperties)}function wd(e){return le(e,"Promise")&&e.type==="Promise"&&we(e.$id)&&Te(e.item)}function xt(e){return le(e,"Record")&&e.type==="object"&&we(e.$id)&&$1(e.additionalProperties)&&nt(e.patternProperties)&&(t=>{const n=Object.getOwnPropertyNames(t.patternProperties);return n.length===1&&b1(n[0])&&nt(t.patternProperties)&&Te(t.patternProperties[n[0]])})(e)}function Nx(e){return le(e,"Ref")&&we(e.$id)&&ze(e.$ref)}function Ys(e){return le(e,"RegExp")&&we(e.$id)&&ze(e.source)&&ze(e.flags)&&be(e.maxLength)&&be(e.minLength)}function Qn(e){return le(e,"String")&&e.type==="string"&&we(e.$id)&&be(e.minLength)&&be(e.maxLength)&&Ex(e.pattern)&&xx(e.format)}function Js(e){return le(e,"Symbol")&&e.type==="symbol"&&we(e.$id)}function Hs(e){return le(e,"TemplateLiteral")&&e.type==="string"&&ze(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function Ix(e){return le(e,"This")&&we(e.$id)&&ze(e.$ref)}function Px(e){return nt(e)&&Yt in e}function gl(e){return le(e,"Tuple")&&e.type==="array"&&we(e.$id)&&cr(e.minItems)&&cr(e.maxItems)&&e.minItems===e.maxItems&&(Xe(e.items)&&Xe(e.additionalItems)&&e.minItems===0||rn(e.items)&&e.items.every(t=>Te(t)))}function Ri(e){return le(e,"Undefined")&&e.type==="undefined"&&we(e.$id)}function Mr(e){return le(e,"Union")&&we(e.$id)&&nt(e)&&rn(e.anyOf)&&e.anyOf.every(t=>Te(t))}function $a(e){return le(e,"Uint8Array")&&e.type==="Uint8Array"&&we(e.$id)&&be(e.minByteLength)&&be(e.maxByteLength)}function er(e){return le(e,"Unknown")&&we(e.$id)}function Tx(e){return le(e,"Unsafe")}function yl(e){return le(e,"Void")&&e.type==="void"&&we(e.$id)}function Mx(e){return nt(e)&&P in e&&ze(e[P])&&!Dx.includes(e[P])}function Te(e){return nt(e)&&(Xn(e)||Cx(e)||Zi(e)||Gi(e)||dl(e)||pd(e)||Ax(e)||ml(e)||hl(e)||pl(e)||Rr(e)||Yi(e)||gd(e)||ci(e)||Fx(e)||Sx(e)||fi(e)||To(e)||yd(e)||Jt(e)||Me(e)||wd(e)||xt(e)||Nx(e)||Ys(e)||Qn(e)||Js(e)||Hs(e)||Ix(e)||gl(e)||Ri(e)||Mr(e)||$a(e)||er(e)||Tx(e)||yl(e)||Mx(e))}const Ox="(true|false)",lu="(0|[1-9][0-9]*)",A1="(.*)",Bx="(?!.*)",Mo=`^${lu}$`,Oo=`^${A1}$`,Rx=`^${Bx}$`,k1=new Map;function bd(e){return k1.has(e)}function $d(e){return k1.get(e)}const vd=new Map;function Li(e){return vd.has(e)}function F1(e,t){vd.set(e,t)}function Dd(e){return vd.get(e)}function Lx(e,t){return e.includes(t)}function jx(e){return[...new Set(e)]}function Ux(e,t){return e.filter(n=>t.includes(n))}function _x(e,t){return e.reduce((n,r)=>Ux(n,r),t)}function Vx(e){return e.length===1?e[0]:e.length>1?_x(e.slice(1),e[0]):[]}function qx(e){const t=[];for(const n of e)t.push(...n);return t}function Xs(e){return T({[P]:"Any"},e)}function Ed(e,t){return T({[P]:"Array",type:"array",items:e},t)}function Wx(e){return T({[P]:"Argument",index:e})}function xd(e,t){return T({[P]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function ut(e,t,n){return T({[P]:"Computed",target:e,parameters:t},n)}function zx(e,t){const{[t]:n,...r}=e;return r}function wn(e,t){return t.reduce((n,r)=>zx(n,r),e)}function Oe(e){return T({[P]:"Never",not:{}},e)}function At(e){return T({[P]:"MappedResult",properties:e})}function Cd(e,t,n){return T({[P]:"Constructor",type:"Constructor",parameters:e,returns:t},n)}function va(e,t,n){return T({[P]:"Function",type:"Function",parameters:e,returns:t},n)}function Qc(e,t){return T({[P]:"Union",anyOf:e},t)}function Kx(e){return e.some(t=>li(t))}function Dp(e){return e.map(t=>li(t)?Zx(t):t)}function Zx(e){return wn(e,[Br])}function Gx(e,t){return Kx(e)?hi(Qc(Dp(e),t)):Qc(Dp(e),t)}function ts(e,t){return e.length===1?T(e[0],t):e.length===0?Oe(t):Gx(e,t)}function kt(e,t){return e.length===0?Oe(t):e.length===1?T(e[0],t):Qc(e,t)}class Ep extends Ct{}function Yx(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function Ad(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function kr(e,t){return Ad(e,t,"(")}function Qs(e,t){return Ad(e,t,")")}function S1(e,t){return Ad(e,t,"|")}function Jx(e){if(!(kr(e,0)&&Qs(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(kr(e,n)&&(t+=1),Qs(e,n)&&(t-=1),t===0&&n!==e.length-1)return!1;return!0}function Hx(e){return e.slice(1,e.length-1)}function Xx(e){let t=0;for(let n=0;n<e.length;n++)if(kr(e,n)&&(t+=1),Qs(e,n)&&(t-=1),S1(e,n)&&t===0)return!0;return!1}function Qx(e){for(let t=0;t<e.length;t++)if(kr(e,t))return!0;return!1}function eC(e){let[t,n]=[0,0];const r=[];for(let o=0;o<e.length;o++)if(kr(e,o)&&(t+=1),Qs(e,o)&&(t-=1),S1(e,o)&&t===0){const s=e.slice(n,o);s.length>0&&r.push(Bo(s)),n=o+1}const i=e.slice(n);return i.length>0&&r.push(Bo(i)),r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"or",expr:r}}function tC(e){function t(i,o){if(!kr(i,o))throw new Ep("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=o;a<i.length;a++)if(kr(i,a)&&(s+=1),Qs(i,a)&&(s-=1),s===0)return[o,a];throw new Ep("TemplateLiteralParser: Unclosed group parens in expression")}function n(i,o){for(let s=o;s<i.length;s++)if(kr(i,s))return[o,s];return[o,i.length]}const r=[];for(let i=0;i<e.length;i++)if(kr(e,i)){const[o,s]=t(e,i),a=e.slice(o,s+1);r.push(Bo(a)),i=s}else{const[o,s]=n(e,i),a=e.slice(o,s);a.length>0&&r.push(Bo(a)),i=s-1}return r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"and",expr:r}}function Bo(e){return Jx(e)?Bo(Hx(e)):Xx(e)?eC(e):Qx(e)?tC(e):{type:"const",const:Yx(e)}}function kd(e){return Bo(e.slice(1,e.length-1))}class nC extends Ct{}function rC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function iC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function oC(e){return e.type==="const"&&e.const===".*"}function ea(e){return rC(e)||oC(e)?!1:iC(e)?!0:e.type==="and"?e.expr.every(t=>ea(t)):e.type==="or"?e.expr.every(t=>ea(t)):e.type==="const"?!0:(()=>{throw new nC("Unknown expression type")})()}function sC(e){const t=kd(e.pattern);return ea(t)}class aC extends Ct{}function*N1(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const n of N1(e.slice(1)))yield`${t}${n}`}function*uC(e){return yield*N1(e.expr.map(t=>[...wl(t)]))}function*lC(e){for(const t of e.expr)yield*wl(t)}function*cC(e){return yield e.const}function*wl(e){return e.type==="and"?yield*uC(e):e.type==="or"?yield*lC(e):e.type==="const"?yield*cC(e):(()=>{throw new aC("Unknown expression")})()}function I1(e){const t=kd(e.pattern);return ea(t)?[...wl(t)]:[]}function tt(e,t){return T({[P]:"Literal",const:e,type:typeof e},t)}function P1(e){return T({[P]:"Boolean",type:"boolean"},e)}function Fd(e){return T({[P]:"BigInt",type:"bigint"},e)}function Ji(e){return T({[P]:"Number",type:"number"},e)}function ji(e){return T({[P]:"String",type:"string"},e)}function*fC(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield P1():t==="number"?yield Ji():t==="bigint"?yield Fd():t==="string"?yield ji():yield(()=>{const n=t.split("|").map(r=>tt(r.trim()));return n.length===0?Oe():n.length===1?n[0]:ts(n)})()}function*dC(e){if(e[1]!=="{"){const t=tt("$"),n=ef(e.slice(1));return yield*[t,...n]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const n=fC(e.slice(2,t)),r=ef(e.slice(t+1));return yield*[...n,...r]}yield tt(e)}function*ef(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const n=tt(e.slice(0,t)),r=dC(e.slice(t));return yield*[n,...r]}yield tt(e)}function mC(e){return[...ef(e)]}class hC extends Ct{}function pC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function T1(e,t){return zi(e)?e.pattern.slice(1,e.pattern.length-1):bt(e)?`(${e.anyOf.map(n=>T1(n,t)).join("|")})`:es(e)?`${t}${lu}`:Qo(e)?`${t}${lu}`:ul(e)?`${t}${lu}`:wa(e)?`${t}${A1}`:qi(e)?`${t}${pC(e.const.toString())}`:ga(e)?`${t}${Ox}`:(()=>{throw new hC(`Unexpected Kind '${e[P]}'`)})()}function xp(e){return`^${e.map(t=>T1(t,"")).join("")}$`}function Mu(e){const n=I1(e).map(r=>tt(r));return ts(n)}function M1(e,t){const n=ze(e)?xp(mC(e)):xp(e);return T({[P]:"TemplateLiteral",type:"string",pattern:n},t)}function gC(e){return I1(e).map(n=>n.toString())}function yC(e){const t=[];for(const n of e)t.push(...di(n));return t}function wC(e){return[e.toString()]}function di(e){return[...new Set(zi(e)?gC(e):bt(e)?yC(e.anyOf):qi(e)?wC(e.const):es(e)?["[number]"]:Qo(e)?["[number]"]:[])]}function bC(e,t,n){const r={};for(const i of Object.getOwnPropertyNames(t))r[i]=bl(e,di(t[i]),n);return r}function $C(e,t,n){return bC(e,t.properties,n)}function vC(e,t,n){const r=$C(e,t,n);return At(r)}function O1(e,t){return e.map(n=>B1(n,t))}function DC(e){return e.filter(t=>!ya(t))}function EC(e,t){return j1(DC(O1(e,t)))}function xC(e){return e.some(t=>ya(t))?[]:e}function CC(e,t){return ts(xC(O1(e,t)))}function AC(e,t){return t in e?e[t]:t==="[number]"?ts(e):Oe()}function kC(e,t){return t==="[number]"?e:Oe()}function FC(e,t){return t in e?e[t]:Oe()}function B1(e,t){return Mn(e)?EC(e.allOf,t):bt(e)?CC(e.anyOf,t):Ki(e)?AC(e.items??[],t):Yo(e)?kC(e.items,t):ir(e)?FC(e.properties,t):Oe()}function Sd(e,t){return t.map(n=>B1(e,n))}function Cp(e,t){return ts(Sd(e,t))}function bl(e,t,n){if(Qt(e)||Qt(t)){const r="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Vt(e)||!Vt(t))throw new Ct(r);return ut("Index",[e,t])}return vn(t)?vC(e,t,n):Wi(t)?PC(e,t,n):T(Vt(t)?Cp(e,di(t)):Cp(e,t),n)}function SC(e,t,n){return{[t]:bl(e,[t],gn(n))}}function NC(e,t,n){return t.reduce((r,i)=>({...r,...SC(e,i,n)}),{})}function IC(e,t,n){return NC(e,t.keys,n)}function PC(e,t,n){const r=IC(e,t,n);return At(r)}function Nd(e,t){return T({[P]:"Iterator",type:"Iterator",items:e},t)}function TC(e){const t=[];for(let n in e)li(e[n])||t.push(n);return t}function MC(e,t){const n=TC(e),r=n.length>0?{[P]:"Object",type:"object",properties:e,required:n}:{[P]:"Object",type:"object",properties:e};return T(r,t)}var wt=MC;function R1(e,t){return T({[P]:"Promise",type:"Promise",item:e},t)}function OC(e){return T(wn(e,[pa]))}function BC(e){return T({...e,[pa]:"Readonly"})}function RC(e,t){return t===!1?OC(e):BC(e)}function mi(e,t){const n=t??!0;return vn(e)?UC(e,n):RC(e,n)}function LC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=mi(e[r],t);return n}function jC(e,t){return LC(e.properties,t)}function UC(e,t){const n=jC(e,t);return At(n)}function ns(e,t){return T(e.length>0?{[P]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[P]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function L1(e,t){return e in t?Cn(e,t[e]):At(t)}function _C(e){return{[e]:tt(e)}}function VC(e){const t={};for(const n of e)t[n]=tt(n);return t}function qC(e,t){return Lx(t,e)?_C(e):VC(t)}function WC(e,t){const n=qC(e,t);return L1(e,n)}function ws(e,t){return t.map(n=>Cn(e,n))}function zC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(t))n[r]=Cn(e,t[r]);return n}function Cn(e,t){const n={...t};return li(t)?hi(Cn(e,wn(t,[Br]))):cd(t)?mi(Cn(e,wn(t,[pa]))):vn(t)?L1(e,t.properties):Wi(t)?WC(e,t.keys):Ho(t)?Cd(ws(e,t.parameters),Cn(e,t.returns),n):Xo(t)?va(ws(e,t.parameters),Cn(e,t.returns),n):al(t)?xd(Cn(e,t.items),n):ll(t)?Nd(Cn(e,t.items),n):Mn(t)?pi(ws(e,t.allOf),n):bt(t)?kt(ws(e,t.anyOf),n):Ki(t)?ns(ws(e,t.items??[]),n):ir(t)?wt(zC(e,t.properties),n):Yo(t)?Ed(Cn(e,t.items),n):cl(t)?R1(Cn(e,t.item),n):t}function KC(e,t){const n={};for(const r of e)n[r]=Cn(r,t);return n}function ZC(e,t,n){const r=Vt(e)?di(e):e,i=t({[P]:"MappedKey",keys:r}),o=KC(r,i);return wt(o,n)}function GC(e){return T(wn(e,[Br]))}function YC(e){return T({...e,[Br]:"Optional"})}function JC(e,t){return t===!1?GC(e):YC(e)}function hi(e,t){const n=t??!0;return vn(e)?QC(e,n):JC(e,n)}function HC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=hi(e[r],t);return n}function XC(e,t){return HC(e.properties,t)}function QC(e,t){const n=XC(e,t);return At(n)}function tf(e,t={}){const n=e.every(i=>ir(i)),r=Vt(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return T(t.unevaluatedProperties===!1||Vt(t.unevaluatedProperties)||n?{...r,[P]:"Intersect",type:"object",allOf:e}:{...r,[P]:"Intersect",allOf:e},t)}function eA(e){return e.every(t=>li(t))}function tA(e){return wn(e,[Br])}function Ap(e){return e.map(t=>li(t)?tA(t):t)}function nA(e,t){return eA(e)?hi(tf(Ap(e),t)):tf(Ap(e),t)}function j1(e,t={}){if(e.length===1)return T(e[0],t);if(e.length===0)return Oe(t);if(e.some(n=>De(n)))throw new Error("Cannot intersect transform types");return nA(e,t)}function pi(e,t){if(e.length===1)return T(e[0],t);if(e.length===0)return Oe(t);if(e.some(n=>De(n)))throw new Error("Cannot intersect transform types");return tf(e,t)}function rs(...e){const[t,n]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new Ct("Ref: $ref must be a string");return T({[P]:"Ref",$ref:t},n)}function rA(e,t){return ut("Awaited",[ut(e,t)])}function iA(e){return ut("Awaited",[rs(e)])}function oA(e){return pi(U1(e))}function sA(e){return kt(U1(e))}function aA(e){return $l(e)}function U1(e){return e.map(t=>$l(t))}function $l(e,t){return T(Jo(e)?rA(e.target,e.parameters):Mn(e)?oA(e.allOf):bt(e)?sA(e.anyOf):cl(e)?aA(e.item):Qt(e)?iA(e.$ref):e,t)}function _1(e){const t=[];for(const n of e)t.push(Hi(n));return t}function uA(e){const t=_1(e);return qx(t)}function lA(e){const t=_1(e);return Vx(t)}function cA(e){return e.map((t,n)=>n.toString())}function fA(e){return["[number]"]}function dA(e){return globalThis.Object.getOwnPropertyNames(e)}function mA(e){return nf?globalThis.Object.getOwnPropertyNames(e).map(n=>n[0]==="^"&&n[n.length-1]==="$"?n.slice(1,n.length-1):n):[]}function Hi(e){return Mn(e)?uA(e.allOf):bt(e)?lA(e.anyOf):Ki(e)?cA(e.items??[]):Yo(e)?fA(e.items):ir(e)?dA(e.properties):fl(e)?mA(e.patternProperties):[]}let nf=!1;function Ro(e){nf=!0;const t=Hi(e);return nf=!1,`^(${t.map(r=>`(${r})`).join("|")})$`}function hA(e,t){return ut("KeyOf",[ut(e,t)])}function pA(e){return ut("KeyOf",[rs(e)])}function gA(e,t){const n=Hi(e),r=yA(n),i=ts(r);return T(i,t)}function yA(e){return e.map(t=>t==="[number]"?Ji():tt(t))}function Id(e,t){return Jo(e)?hA(e.target,e.parameters):Qt(e)?pA(e.$ref):vn(e)?$A(e,t):gA(e,t)}function wA(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Id(e[r],gn(t));return n}function bA(e,t){return wA(e.properties,t)}function $A(e,t){const n=bA(e,t);return At(n)}function V1(e){const t=Hi(e),n=Sd(e,t);return t.map((r,i)=>[t[i],n[i]])}function vA(e){const t=[];for(const n of e)t.push(...Hi(n));return jx(t)}function DA(e){return e.filter(t=>!ya(t))}function EA(e,t){const n=[];for(const r of e)n.push(...Sd(r,[t]));return DA(n)}function xA(e,t){const n={};for(const r of t)n[r]=j1(EA(e,r));return n}function CA(e,t){const n=vA(e),r=xA(e,n);return wt(r,t)}function q1(e){return T({[P]:"Date",type:"Date"},e)}function W1(e){return T({[P]:"Null",type:"null"},e)}function z1(e){return T({[P]:"Symbol",type:"symbol"},e)}function K1(e){return T({[P]:"Undefined",type:"undefined"},e)}function Z1(e){return T({[P]:"Uint8Array",type:"Uint8Array"},e)}function vl(e){return T({[P]:"Unknown"},e)}function AA(e){return e.map(t=>Pd(t,!1))}function kA(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=mi(Pd(e[n],!1));return t}function Ya(e,t){return t===!0?e:mi(e)}function Pd(e,t){return nx(e)||ix(e)?Ya(Xs(),t):rn(e)?mi(ns(AA(e))):ha(e)?Z1():sd(e)?q1():nt(e)?Ya(wt(kA(e)),t):rx(e)?Ya(va([],vl()),t):Xe(e)?K1():ox(e)?W1():sx(e)?z1():s1(e)?Fd():cr(e)||ma(e)||ze(e)?tt(e):wt({})}function FA(e,t){return T(Pd(e,!0),t)}function SA(e,t){return Ho(e)?ns(e.parameters,t):Oe(t)}function NA(e,t){if(Xe(e))throw new Error("Enum undefined or empty");const n=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(n)].map(o=>tt(o));return kt(i,{...t,[sl]:"Enum"})}class IA extends Ct{}var x;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(x||(x={}));function Tn(e){return e===x.False?e:x.True}function is(e){throw new IA(e)}function rt(e){return fi(e)||Yi(e)||Mr(e)||er(e)||Xn(e)}function it(e,t){return fi(t)?J1():Yi(t)?Dl(e,t):Mr(t)?Md(e,t):er(t)?ew():Xn(t)?Td():is("StructuralRight")}function Td(e,t){return x.True}function PA(e,t){return Yi(t)?Dl(e,t):Mr(t)&&t.anyOf.some(n=>Xn(n)||er(n))?x.True:Mr(t)?x.Union:er(t)||Xn(t)?x.True:x.Union}function TA(e,t){return er(e)?x.False:Xn(e)?x.Union:fi(e)?x.True:x.False}function MA(e,t){return Me(t)&&El(t)?x.True:rt(t)?it(e,t):Zi(t)?Tn(ye(e.items,t.items)):x.False}function OA(e,t){return rt(t)?it(e,t):pd(t)?Tn(ye(e.items,t.items)):x.False}function BA(e,t){return rt(t)?it(e,t):Me(t)?Tt(e,t):xt(t)?On(e,t):dl(t)?x.True:x.False}function G1(e,t){return C1(e)||Gi(e)?x.True:x.False}function RA(e,t){return rt(t)?it(e,t):Me(t)?Tt(e,t):xt(t)?On(e,t):Gi(t)?x.True:x.False}function LA(e,t){return rt(t)?it(e,t):Me(t)?Tt(e,t):ml(t)?e.parameters.length>t.parameters.length?x.False:e.parameters.every((n,r)=>Tn(ye(t.parameters[r],n))===x.True)?Tn(ye(e.returns,t.returns)):x.False:x.False}function jA(e,t){return rt(t)?it(e,t):Me(t)?Tt(e,t):xt(t)?On(e,t):hl(t)?x.True:x.False}function UA(e,t){return rt(t)?it(e,t):Me(t)?Tt(e,t):pl(t)?e.parameters.length>t.parameters.length?x.False:e.parameters.every((n,r)=>Tn(ye(t.parameters[r],n))===x.True)?Tn(ye(e.returns,t.returns)):x.False:x.False}function Y1(e,t){return ci(e)&&cr(e.const)||Jt(e)||Rr(e)?x.True:x.False}function _A(e,t){return Rr(t)||Jt(t)?x.True:rt(t)?it(e,t):Me(t)?Tt(e,t):xt(t)?On(e,t):x.False}function Dl(e,t){return t.allOf.every(n=>ye(e,n)===x.True)?x.True:x.False}function VA(e,t){return e.allOf.some(n=>ye(n,t)===x.True)?x.True:x.False}function qA(e,t){return rt(t)?it(e,t):gd(t)?Tn(ye(e.items,t.items)):x.False}function WA(e,t){return ci(t)&&t.const===e.const?x.True:rt(t)?it(e,t):Me(t)?Tt(e,t):xt(t)?On(e,t):Qn(t)?Q1(e):Jt(t)?H1(e):Rr(t)?Y1(e):Gi(t)?G1(e):x.False}function J1(e,t){return x.False}function zA(e,t){return x.True}function kp(e){let[t,n]=[e,0];for(;To(t);)t=t.not,n+=1;return n%2===0?t:vl()}function KA(e,t){return To(e)?ye(kp(e),t):To(t)?ye(e,kp(t)):is("Invalid fallthrough for Not")}function ZA(e,t){return rt(t)?it(e,t):Me(t)?Tt(e,t):xt(t)?On(e,t):yd(t)?x.True:x.False}function H1(e,t){return x1(e)||Jt(e)||Rr(e)?x.True:x.False}function GA(e,t){return rt(t)?it(e,t):Me(t)?Tt(e,t):xt(t)?On(e,t):Rr(t)||Jt(t)?x.True:x.False}function en(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function Fp(e){return El(e)}function Sp(e){return en(e,0)||en(e,1)&&"description"in e.properties&&Mr(e.properties.description)&&e.properties.description.anyOf.length===2&&(Qn(e.properties.description.anyOf[0])&&Ri(e.properties.description.anyOf[1])||Qn(e.properties.description.anyOf[1])&&Ri(e.properties.description.anyOf[0]))}function dc(e){return en(e,0)}function Np(e){return en(e,0)}function YA(e){return en(e,0)}function JA(e){return en(e,0)}function HA(e){return El(e)}function XA(e){const t=Ji();return en(e,0)||en(e,1)&&"length"in e.properties&&Tn(ye(e.properties.length,t))===x.True}function QA(e){return en(e,0)}function El(e){const t=Ji();return en(e,0)||en(e,1)&&"length"in e.properties&&Tn(ye(e.properties.length,t))===x.True}function ek(e){const t=va([Xs()],Xs());return en(e,0)||en(e,1)&&"then"in e.properties&&Tn(ye(e.properties.then,t))===x.True}function X1(e,t){return ye(e,t)===x.False||Tu(e)&&!Tu(t)?x.False:x.True}function Tt(e,t){return er(e)?x.False:Xn(e)?x.Union:fi(e)||E1(e)&&Fp(t)||x1(e)&&dc(t)||C1(e)&&Np(t)||Js(e)&&Sp(t)||dl(e)&&YA(t)||Qn(e)&&Fp(t)||Js(e)&&Sp(t)||Jt(e)&&dc(t)||Rr(e)&&dc(t)||Gi(e)&&Np(t)||$a(e)&&HA(t)||hl(e)&&JA(t)||ml(e)&&QA(t)||pl(e)&&XA(t)?x.True:xt(e)&&Qn(rf(e))?t[sl]==="Record"?x.True:x.False:xt(e)&&Jt(rf(e))?en(t,0)?x.True:x.False:x.False}function tk(e,t){return rt(t)?it(e,t):xt(t)?On(e,t):Me(t)?(()=>{for(const n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!Tu(t.properties[n]))return x.False;if(Tu(t.properties[n]))return x.True;if(X1(e.properties[n],t.properties[n])===x.False)return x.False}return x.True})():x.False}function nk(e,t){return rt(t)?it(e,t):Me(t)&&ek(t)?x.True:wd(t)?Tn(ye(e.item,t.item)):x.False}function rf(e){return Mo in e.patternProperties?Ji():Oo in e.patternProperties?ji():is("Unknown record key pattern")}function of(e){return Mo in e.patternProperties?e.patternProperties[Mo]:Oo in e.patternProperties?e.patternProperties[Oo]:is("Unable to get record value schema")}function On(e,t){const[n,r]=[rf(t),of(t)];return E1(e)&&Jt(n)&&Tn(ye(e,r))===x.True?x.True:$a(e)&&Jt(n)||Qn(e)&&Jt(n)||Zi(e)&&Jt(n)?ye(e,r):Me(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(X1(r,e.properties[i])===x.False)return x.False;return x.True})():x.False}function rk(e,t){return rt(t)?it(e,t):Me(t)?Tt(e,t):xt(t)?ye(of(e),of(t)):x.False}function ik(e,t){const n=Ys(e)?ji():e,r=Ys(t)?ji():t;return ye(n,r)}function Q1(e,t){return ci(e)&&ze(e.const)||Qn(e)?x.True:x.False}function ok(e,t){return rt(t)?it(e,t):Me(t)?Tt(e,t):xt(t)?On(e,t):Qn(t)?x.True:x.False}function sk(e,t){return rt(t)?it(e,t):Me(t)?Tt(e,t):xt(t)?On(e,t):Js(t)?x.True:x.False}function ak(e,t){return Hs(e)?ye(Mu(e),t):Hs(t)?ye(e,Mu(t)):is("Invalid fallthrough for TemplateLiteral")}function uk(e,t){return Zi(t)&&e.items!==void 0&&e.items.every(n=>ye(n,t.items)===x.True)}function lk(e,t){return fi(e)?x.True:er(e)?x.False:Xn(e)?x.Union:x.False}function ck(e,t){return rt(t)?it(e,t):Me(t)&&El(t)||Zi(t)&&uk(e,t)?x.True:gl(t)?Xe(e.items)&&!Xe(t.items)||!Xe(e.items)&&Xe(t.items)?x.False:Xe(e.items)&&!Xe(t.items)||e.items.every((n,r)=>ye(n,t.items[r])===x.True)?x.True:x.False:x.False}function fk(e,t){return rt(t)?it(e,t):Me(t)?Tt(e,t):xt(t)?On(e,t):$a(t)?x.True:x.False}function dk(e,t){return rt(t)?it(e,t):Me(t)?Tt(e,t):xt(t)?On(e,t):yl(t)?pk(e):Ri(t)?x.True:x.False}function Md(e,t){return t.anyOf.some(n=>ye(e,n)===x.True)?x.True:x.False}function mk(e,t){return e.anyOf.every(n=>ye(n,t)===x.True)?x.True:x.False}function ew(e,t){return x.True}function hk(e,t){return fi(t)?J1():Yi(t)?Dl(e,t):Mr(t)?Md(e,t):Xn(t)?Td():Qn(t)?Q1(e):Jt(t)?H1(e):Rr(t)?Y1(e):Gi(t)?G1(e):Zi(t)?TA(e):gl(t)?lk(e):Me(t)?Tt(e,t):er(t)?x.True:x.False}function pk(e,t){return Ri(e)||Ri(e)?x.True:x.False}function gk(e,t){return Yi(t)?Dl(e,t):Mr(t)?Md(e,t):er(t)?ew():Xn(t)?Td():Me(t)?Tt(e,t):yl(t)?x.True:x.False}function ye(e,t){return Hs(e)||Hs(t)?ak(e,t):Ys(e)||Ys(t)?ik(e,t):To(e)||To(t)?KA(e,t):Xn(e)?PA(e,t):Zi(e)?MA(e,t):dl(e)?BA(e,t):Gi(e)?RA(e,t):pd(e)?OA(e,t):ml(e)?LA(e,t):hl(e)?jA(e,t):pl(e)?UA(e,t):Rr(e)?_A(e,t):Yi(e)?VA(e,t):gd(e)?qA(e,t):ci(e)?WA(e,t):fi(e)?zA():yd(e)?ZA(e,t):Jt(e)?GA(e,t):Me(e)?tk(e,t):xt(e)?rk(e,t):Qn(e)?ok(e,t):Js(e)?sk(e,t):gl(e)?ck(e,t):wd(e)?nk(e,t):$a(e)?fk(e,t):Ri(e)?dk(e,t):Mr(e)?mk(e,t):er(e)?hk(e,t):yl(e)?gk(e,t):is(`Unknown left type operand '${e[P]}'`)}function Da(e,t){return ye(e,t)}function yk(e,t,n,r,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=Od(e[s],t,n,r,gn(i));return o}function wk(e,t,n,r,i){return yk(e.properties,t,n,r,i)}function bk(e,t,n,r,i){const o=wk(e,t,n,r,i);return At(o)}function $k(e,t,n,r){const i=Da(e,t);return i===x.Union?kt([n,r]):i===x.True?n:r}function Od(e,t,n,r,i){return vn(e)?bk(e,t,n,r,i):Wi(e)?T(xk(e,t,n,r,i)):T($k(e,t,n,r),i)}function vk(e,t,n,r,i){return{[e]:Od(tt(e),t,n,r,gn(i))}}function Dk(e,t,n,r,i){return e.reduce((o,s)=>({...o,...vk(s,t,n,r,i)}),{})}function Ek(e,t,n,r,i){return Dk(e.keys,t,n,r,i)}function xk(e,t,n,r,i){const o=Ek(e,t,n,r,i);return At(o)}function Ck(e){return e.allOf.every(t=>os(t))}function Ak(e){return e.anyOf.some(t=>os(t))}function kk(e){return!os(e.not)}function os(e){return e[P]==="Intersect"?Ck(e):e[P]==="Union"?Ak(e):e[P]==="Not"?kk(e):e[P]==="Undefined"}function Fk(e,t){return Bd(Mu(e),t)}function Sk(e,t){const n=e.filter(r=>Da(r,t)===x.False);return n.length===1?n[0]:kt(n)}function Bd(e,t,n={}){return zi(e)?T(Fk(e,t),n):vn(e)?T(Pk(e,t),n):T(bt(e)?Sk(e.anyOf,t):Da(e,t)!==x.False?Oe():e,n)}function Nk(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Bd(e[r],t);return n}function Ik(e,t){return Nk(e.properties,t)}function Pk(e,t){const n=Ik(e,t);return At(n)}function Tk(e,t){return Rd(Mu(e),t)}function Mk(e,t){const n=e.filter(r=>Da(r,t)!==x.False);return n.length===1?n[0]:kt(n)}function Rd(e,t,n){return zi(e)?T(Tk(e,t),n):vn(e)?T(Rk(e,t),n):T(bt(e)?Mk(e.anyOf,t):Da(e,t)!==x.False?e:Oe(),n)}function Ok(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Rd(e[r],t);return n}function Bk(e,t){return Ok(e.properties,t)}function Rk(e,t){const n=Bk(e,t);return At(n)}function Lk(e,t){return Ho(e)?T(e.returns,t):Oe(t)}function tw(e){return mi(hi(e))}function Xi(e,t,n){return T({[P]:"Record",type:"object",patternProperties:{[e]:t}},n)}function Ld(e,t,n){const r={};for(const i of e)r[i]=t;return wt(r,{...n,[sl]:"Record"})}function jk(e,t,n){return sC(e)?Ld(di(e),t,n):Xi(e.pattern,t,n)}function Uk(e,t,n){return Ld(di(kt(e)),t,n)}function _k(e,t,n){return Ld([e.toString()],t,n)}function Vk(e,t,n){return Xi(e.source,t,n)}function qk(e,t,n){const r=Xe(e.pattern)?Oo:e.pattern;return Xi(r,t,n)}function Wk(e,t,n){return Xi(Oo,t,n)}function zk(e,t,n){return Xi(Rx,t,n)}function Kk(e,t,n){return wt({true:t,false:t},n)}function Zk(e,t,n){return Xi(Mo,t,n)}function Gk(e,t,n){return Xi(Mo,t,n)}function nw(e,t,n={}){return bt(e)?Uk(e.anyOf,t,n):zi(e)?jk(e,t,n):qi(e)?_k(e.const,t,n):ga(e)?Kk(e,t,n):Qo(e)?Zk(e,t,n):es(e)?Gk(e,t,n):w1(e)?Vk(e,t,n):wa(e)?qk(e,t,n):p1(e)?Wk(e,t,n):ya(e)?zk(e,t,n):Oe(n)}function jd(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function Yk(e){const t=jd(e);return t===Oo?ji():t===Mo?Ji():ji({pattern:t})}function rw(e){return e.patternProperties[jd(e)]}function Jk(e,t){return t.parameters=Ea(e,t.parameters),t.returns=tr(e,t.returns),t}function Hk(e,t){return t.parameters=Ea(e,t.parameters),t.returns=tr(e,t.returns),t}function Xk(e,t){return t.allOf=Ea(e,t.allOf),t}function Qk(e,t){return t.anyOf=Ea(e,t.anyOf),t}function eF(e,t){return Xe(t.items)||(t.items=Ea(e,t.items)),t}function tF(e,t){return t.items=tr(e,t.items),t}function nF(e,t){return t.items=tr(e,t.items),t}function rF(e,t){return t.items=tr(e,t.items),t}function iF(e,t){return t.item=tr(e,t.item),t}function oF(e,t){const n=lF(e,t.properties);return{...t,...wt(n)}}function sF(e,t){const n=tr(e,Yk(t)),r=tr(e,rw(t)),i=nw(n,r);return{...t,...i}}function aF(e,t){return t.index in e?e[t.index]:vl()}function uF(e,t){const n=cd(t),r=li(t),i=tr(e,t);return n&&r?tw(i):n&&!r?mi(i):!n&&r?hi(i):i}function lF(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:uF(e,t[r])}),{})}function Ea(e,t){return t.map(n=>tr(e,n))}function tr(e,t){return Ho(t)?Jk(e,t):Xo(t)?Hk(e,t):Mn(t)?Xk(e,t):bt(t)?Qk(e,t):Ki(t)?eF(e,t):Yo(t)?tF(e,t):al(t)?nF(e,t):ll(t)?rF(e,t):cl(t)?iF(e,t):ir(t)?oF(e,t):fl(t)?sF(e,t):g1(t)?aF(e,t):t}function cF(e,t){return tr(t,ad(e))}function fF(e){return T({[P]:"Integer",type:"integer"},e)}function dF(e,t,n){return{[e]:ss(tt(e),t,gn(n))}}function mF(e,t,n){return e.reduce((i,o)=>({...i,...dF(o,t,n)}),{})}function hF(e,t,n){return mF(e.keys,t,n)}function pF(e,t,n){const r=hF(e,t,n);return At(r)}function gF(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join("")}function yF(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join("")}function wF(e){return e.toUpperCase()}function bF(e){return e.toLowerCase()}function $F(e,t,n){const r=kd(e.pattern);if(!ea(r))return{...e,pattern:iw(e.pattern,t)};const s=[...wl(r)].map(l=>tt(l)),a=ow(s,t),u=kt(a);return M1([u],n)}function iw(e,t){return typeof e=="string"?t==="Uncapitalize"?gF(e):t==="Capitalize"?yF(e):t==="Uppercase"?wF(e):t==="Lowercase"?bF(e):e:e.toString()}function ow(e,t){return e.map(n=>ss(n,t))}function ss(e,t,n={}){return Wi(e)?pF(e,t,n):zi(e)?$F(e,t,n):bt(e)?kt(ow(e.anyOf,t),n):qi(e)?tt(iw(e.const,t),n):T(e,n)}function vF(e,t={}){return ss(e,"Capitalize",t)}function DF(e,t={}){return ss(e,"Lowercase",t)}function EF(e,t={}){return ss(e,"Uncapitalize",t)}function xF(e,t={}){return ss(e,"Uppercase",t)}function CF(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=xl(e[i],t,gn(n));return r}function AF(e,t,n){return CF(e.properties,t,n)}function kF(e,t,n){const r=AF(e,t,n);return At(r)}function FF(e,t){return e.map(n=>Ud(n,t))}function SF(e,t){return e.map(n=>Ud(n,t))}function NF(e,t){const{[t]:n,...r}=e;return r}function IF(e,t){return t.reduce((n,r)=>NF(n,r),e)}function PF(e,t){const n=wn(e,[Yt,"$id","required","properties"]),r=IF(e.properties,t);return wt(r,n)}function TF(e){const t=e.reduce((n,r)=>y1(r)?[...n,tt(r)]:n,[]);return kt(t)}function Ud(e,t){return Mn(e)?pi(FF(e.allOf,t)):bt(e)?kt(SF(e.anyOf,t)):ir(e)?PF(e,t):wt({})}function xl(e,t,n){const r=rn(t)?TF(t):t,i=Vt(t)?di(t):t,o=Qt(e),s=Qt(t);return vn(e)?kF(e,i,n):Wi(t)?RF(e,t,n):o&&s?ut("Omit",[e,r],n):!o&&s?ut("Omit",[e,r],n):o&&!s?ut("Omit",[e,r],n):T({...Ud(e,i),...n})}function MF(e,t,n){return{[t]:xl(e,[t],gn(n))}}function OF(e,t,n){return t.reduce((r,i)=>({...r,...MF(e,i,n)}),{})}function BF(e,t,n){return OF(e,t.keys,n)}function RF(e,t,n){const r=BF(e,t,n);return At(r)}function LF(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=Cl(e[i],t,gn(n));return r}function jF(e,t,n){return LF(e.properties,t,n)}function UF(e,t,n){const r=jF(e,t,n);return At(r)}function _F(e,t){return e.map(n=>_d(n,t))}function VF(e,t){return e.map(n=>_d(n,t))}function qF(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function WF(e,t){const n=wn(e,[Yt,"$id","required","properties"]),r=qF(e.properties,t);return wt(r,n)}function zF(e){const t=e.reduce((n,r)=>y1(r)?[...n,tt(r)]:n,[]);return kt(t)}function _d(e,t){return Mn(e)?pi(_F(e.allOf,t)):bt(e)?kt(VF(e.anyOf,t)):ir(e)?WF(e,t):wt({})}function Cl(e,t,n){const r=rn(t)?zF(t):t,i=Vt(t)?di(t):t,o=Qt(e),s=Qt(t);return vn(e)?UF(e,i,n):Wi(t)?YF(e,t,n):o&&s?ut("Pick",[e,r],n):!o&&s?ut("Pick",[e,r],n):o&&!s?ut("Pick",[e,r],n):T({..._d(e,i),...n})}function KF(e,t,n){return{[t]:Cl(e,[t],gn(n))}}function ZF(e,t,n){return t.reduce((r,i)=>({...r,...KF(e,i,n)}),{})}function GF(e,t,n){return ZF(e,t.keys,n)}function YF(e,t,n){const r=GF(e,t,n);return At(r)}function JF(e,t){return ut("Partial",[ut(e,t)])}function HF(e){return ut("Partial",[rs(e)])}function XF(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=hi(e[n]);return t}function QF(e){const t=wn(e,[Yt,"$id","required","properties"]),n=XF(e.properties);return wt(n,t)}function Ip(e){return e.map(t=>sw(t))}function sw(e){return Jo(e)?JF(e.target,e.parameters):Qt(e)?HF(e.$ref):Mn(e)?pi(Ip(e.allOf)):bt(e)?kt(Ip(e.anyOf)):ir(e)?QF(e):ul(e)||ga(e)||Qo(e)||qi(e)||fd(e)||es(e)||wa(e)||dd(e)||ba(e)?e:wt({})}function Vd(e,t){return vn(e)?n4(e,t):T({...sw(e),...t})}function e4(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Vd(e[r],gn(t));return n}function t4(e,t){return e4(e.properties,t)}function n4(e,t){const n=t4(e,t);return At(n)}function r4(e,t){return ut("Required",[ut(e,t)])}function i4(e){return ut("Required",[rs(e)])}function o4(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=wn(e[n],[Br]);return t}function s4(e){const t=wn(e,[Yt,"$id","required","properties"]),n=o4(e.properties);return wt(n,t)}function Pp(e){return e.map(t=>aw(t))}function aw(e){return Jo(e)?r4(e.target,e.parameters):Qt(e)?i4(e.$ref):Mn(e)?pi(Pp(e.allOf)):bt(e)?kt(Pp(e.anyOf)):ir(e)?s4(e):ul(e)||ga(e)||Qo(e)||qi(e)||fd(e)||es(e)||wa(e)||dd(e)||ba(e)?e:wt({})}function qd(e,t){return vn(e)?l4(e,t):T({...aw(e),...t})}function a4(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=qd(e[r],t);return n}function u4(e,t){return a4(e.properties,t)}function l4(e,t){const n=u4(e,t);return At(n)}function c4(e,t){return t.map(n=>Qt(n)?Wd(e,n.$ref):bn(e,n))}function Wd(e,t){return t in e?Qt(e[t])?Wd(e,e[t].$ref):bn(e,e[t]):Oe()}function f4(e){return $l(e[0])}function d4(e){return bl(e[0],e[1])}function m4(e){return Id(e[0])}function h4(e){return Vd(e[0])}function p4(e){return xl(e[0],e[1])}function g4(e){return Cl(e[0],e[1])}function y4(e){return qd(e[0])}function w4(e,t,n){const r=c4(e,n);return t==="Awaited"?f4(r):t==="Index"?d4(r):t==="KeyOf"?m4(r):t==="Partial"?h4(r):t==="Omit"?p4(r):t==="Pick"?g4(r):t==="Required"?y4(r):Oe()}function b4(e,t){return Ed(bn(e,t))}function $4(e,t){return xd(bn(e,t))}function v4(e,t,n){return Cd(xa(e,t),bn(e,n))}function D4(e,t,n){return va(xa(e,t),bn(e,n))}function E4(e,t){return pi(xa(e,t))}function x4(e,t){return Nd(bn(e,t))}function C4(e,t){return wt(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:bn(e,t[r])}),{}))}function A4(e,t){const[n,r]=[bn(e,rw(t)),jd(t)],i=ad(t);return i.patternProperties[r]=n,i}function k4(e,t){return Qt(t)?{...Wd(e,t.$ref),[Yt]:t[Yt]}:t}function F4(e,t){return ns(xa(e,t))}function S4(e,t){return kt(xa(e,t))}function xa(e,t){return t.map(n=>bn(e,n))}function bn(e,t){return li(t)?T(bn(e,wn(t,[Br])),t):cd(t)?T(bn(e,wn(t,[pa])),t):De(t)?T(k4(e,t),t):Yo(t)?T(b4(e,t.items),t):al(t)?T($4(e,t.items),t):Jo(t)?T(w4(e,t.target,t.parameters)):Ho(t)?T(v4(e,t.parameters,t.returns),t):Xo(t)?T(D4(e,t.parameters,t.returns),t):Mn(t)?T(E4(e,t.allOf),t):ll(t)?T(x4(e,t.items),t):ir(t)?T(C4(e,t.properties),t):fl(t)?T(A4(e,t)):Ki(t)?T(F4(e,t.items||[]),t):bt(t)?T(S4(e,t.anyOf),t):t}function N4(e,t){return t in e?bn(e,e[t]):Oe()}function I4(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:N4(e,n)}),{})}class P4{constructor(t){const n=I4(t),r=this.WithIdentifiers(n);this.$defs=r}Import(t,n){const r={...this.$defs,[t]:T(this.$defs[t],n)};return T({[P]:"Import",$defs:r,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:{...t[r],$id:r}}),{})}}function T4(e){return new P4(e)}function M4(e,t){return T({[P]:"Not",not:e},t)}function O4(e,t){return Xo(e)?ns(e.parameters,t):Oe()}let B4=0;function R4(e,t={}){Xe(t.$id)&&(t.$id=`T${B4++}`);const n=ad(e({[P]:"This",$ref:`${t.$id}`}));return n.$id=t.$id,T({[sl]:"Recursive",...n},t)}function L4(e,t){const n=ze(e)?new globalThis.RegExp(e):e;return T({[P]:"RegExp",type:"RegExp",source:n.source,flags:n.flags},t)}function j4(e){return Mn(e)?e.allOf:bt(e)?e.anyOf:Ki(e)?e.items??[]:[]}function U4(e){return j4(e)}function _4(e,t){return Xo(e)?T(e.returns,t):Oe(t)}class V4{constructor(t){this.schema=t}Decode(t){return new q4(this.schema,t)}}class q4{constructor(t,n){this.schema=t,this.decode=n}EncodeTransform(t,n){const o={Encode:s=>n[Yt].Encode(t(s)),Decode:s=>this.decode(n[Yt].Decode(s))};return{...n,[Yt]:o}}EncodeSchema(t,n){const r={Decode:this.decode,Encode:t};return{...n,[Yt]:r}}Encode(t){return De(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function W4(e){return new V4(e)}function z4(e={}){return T({[P]:e[P]??"Unsafe"},e)}function K4(e){return T({[P]:"Void",type:"void"},e)}const Z4=Object.freeze(Object.defineProperty({__proto__:null,Any:Xs,Argument:Wx,Array:Ed,AsyncIterator:xd,Awaited:$l,BigInt:Fd,Boolean:P1,Capitalize:vF,Composite:CA,Const:FA,Constructor:Cd,ConstructorParameters:SA,Date:q1,Enum:NA,Exclude:Bd,Extends:Od,Extract:Rd,Function:va,Index:bl,InstanceType:Lk,Instantiate:cF,Integer:fF,Intersect:pi,Iterator:Nd,KeyOf:Id,Literal:tt,Lowercase:DF,Mapped:ZC,Module:T4,Never:Oe,Not:M4,Null:W1,Number:Ji,Object:wt,Omit:xl,Optional:hi,Parameters:O4,Partial:Vd,Pick:Cl,Promise:R1,Readonly:mi,ReadonlyOptional:tw,Record:nw,Recursive:R4,Ref:rs,RegExp:L4,Required:qd,Rest:U4,ReturnType:_4,String:ji,Symbol:z1,TemplateLiteral:M1,Transform:W4,Tuple:ns,Uint8Array:Z1,Uncapitalize:EF,Undefined:K1,Union:kt,Unknown:vl,Unsafe:z4,Uppercase:xF,Void:K4},Symbol.toStringTag,{value:"Module"})),Ie=Z4;function uw(e){switch(e.errorType){case $.ArrayContains:return"Expected array to contain at least one matching value";case $.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case $.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case $.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case $.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case $.ArrayUniqueItems:return"Expected array elements to be unique";case $.Array:return"Expected array";case $.AsyncIterator:return"Expected AsyncIterator";case $.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case $.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case $.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case $.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case $.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case $.BigInt:return"Expected bigint";case $.Boolean:return"Expected boolean";case $.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case $.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case $.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case $.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case $.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case $.Date:return"Expected Date";case $.Function:return"Expected function";case $.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case $.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case $.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case $.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case $.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case $.Integer:return"Expected integer";case $.IntersectUnevaluatedProperties:return"Unexpected property";case $.Intersect:return"Expected all values to match";case $.Iterator:return"Expected Iterator";case $.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case $.Never:return"Never";case $.Not:return"Value should not match";case $.Null:return"Expected null";case $.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case $.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case $.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case $.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case $.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case $.Number:return"Expected number";case $.Object:return"Expected object";case $.ObjectAdditionalProperties:return"Unexpected property";case $.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case $.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case $.ObjectRequiredProperty:return"Expected required property";case $.Promise:return"Expected Promise";case $.RegExp:return"Expected string to match regular expression";case $.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case $.StringFormat:return`Expected string to match '${e.schema.format}' format`;case $.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case $.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case $.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case $.String:return"Expected string";case $.Symbol:return"Expected symbol";case $.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case $.Tuple:return"Expected tuple";case $.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case $.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case $.Uint8Array:return"Expected Uint8Array";case $.Undefined:return"Expected undefined";case $.Union:return"Expected union value";case $.Void:return"Expected void";case $.Kind:return`Expected kind '${e.schema[P]}'`;default:return"Unknown error type"}}let lw=uw;function G4(e){lw=e}function Y4(){return lw}class J4 extends Ct{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function H4(e,t){const n=t.find(r=>r.$id===e.$ref);if(n===void 0)throw new J4(e);return Bn(n,t)}function Al(e,t){return!dn(e.$id)||t.some(n=>n.$id===e.$id)||t.push(e),t}function Bn(e,t){return e[P]==="This"||e[P]==="Ref"?H4(e,t):e}class X4 extends Ct{constructor(t){super("Unable to hash value"),this.value=t}}var $n;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})($n||($n={}));let ho=BigInt("14695981039346656037");const[Q4,e3]=[BigInt("1099511628211"),BigInt("18446744073709551616")],t3=Array.from({length:256}).map((e,t)=>BigInt(t)),cw=new Float64Array(1),fw=new DataView(cw.buffer),dw=new Uint8Array(cw.buffer);function*n3(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function r3(e){Pt($n.Array);for(const t of e)Lo(t)}function i3(e){Pt($n.Boolean),Pt(e?1:0)}function o3(e){Pt($n.BigInt),fw.setBigInt64(0,e);for(const t of dw)Pt(t)}function s3(e){Pt($n.Date),Lo(e.getTime())}function a3(e){Pt($n.Null)}function u3(e){Pt($n.Number),fw.setFloat64(0,e);for(const t of dw)Pt(t)}function l3(e){Pt($n.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())Lo(t),Lo(e[t])}function c3(e){Pt($n.String);for(let t=0;t<e.length;t++)for(const n of n3(e.charCodeAt(t)))Pt(n)}function f3(e){Pt($n.Symbol),Lo(e.description)}function d3(e){Pt($n.Uint8Array);for(let t=0;t<e.length;t++)Pt(e[t])}function m3(e){return Pt($n.Undefined)}function Lo(e){if(yn(e))return r3(e);if(il(e))return i3(e);if(Er(e))return o3(e);if(ud(e))return s3(e);if(rl(e))return a3();if(ee(e))return u3(e);if(dr(e))return l3(e);if(dn(e))return c3(e);if(ol(e))return f3(e);if(ld(e))return d3(e);if(ui(e))return m3();throw new X4(e)}function Pt(e){ho=ho^t3[e],ho=ho*Q4%e3}function zd(e){return ho=BigInt("14695981039346656037"),Lo(e),ho}class h3 extends Ct{constructor(t){super("Unknown type"),this.schema=t}}function p3(e){return e[P]==="Any"||e[P]==="Unknown"}function oe(e){return e!==void 0}function g3(e,t,n){return!0}function y3(e,t,n){return!0}function w3(e,t,n){if(!yn(n)||oe(e.minItems)&&!(n.length>=e.minItems)||oe(e.maxItems)&&!(n.length<=e.maxItems)||!n.every(o=>pt(e.items,t,o))||e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of n){const a=zd(s);if(o.has(a))return!1;o.add(a)}return!0})())return!1;if(!(oe(e.contains)||ee(e.minContains)||ee(e.maxContains)))return!0;const r=oe(e.contains)?e.contains:Oe(),i=n.reduce((o,s)=>pt(r,t,s)?o+1:o,0);return!(i===0||ee(e.minContains)&&i<e.minContains||ee(e.maxContains)&&i>e.maxContains)}function b3(e,t,n){return u1(n)}function $3(e,t,n){return!(!Er(n)||oe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||oe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||oe(e.maximum)&&!(n<=e.maximum)||oe(e.minimum)&&!(n>=e.minimum)||oe(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function v3(e,t,n){return il(n)}function D3(e,t,n){return pt(e.returns,t,n.prototype)}function E3(e,t,n){return!(!ud(n)||oe(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||oe(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||oe(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||oe(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||oe(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function x3(e,t,n){return m1(n)}function C3(e,t,n){const r=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return pt(i,[...t,...r],n)}function A3(e,t,n){return!(!d1(n)||oe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||oe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||oe(e.maximum)&&!(n<=e.maximum)||oe(e.minimum)&&!(n>=e.minimum)||oe(e.multipleOf)&&n%e.multipleOf!==0)}function k3(e,t,n){const r=e.allOf.every(i=>pt(i,t,n));if(e.unevaluatedProperties===!1){const i=new RegExp(Ro(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s));return r&&o}else if(Vt(e.unevaluatedProperties)){const i=new RegExp(Ro(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s)||pt(e.unevaluatedProperties,t,n[s]));return r&&o}else return r}function F3(e,t,n){return l1(n)}function S3(e,t,n){return n===e.const}function N3(e,t,n){return!1}function I3(e,t,n){return!pt(e.not,t,n)}function P3(e,t,n){return rl(n)}function T3(e,t,n){return!(!qe.IsNumberLike(n)||oe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||oe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||oe(e.minimum)&&!(n>=e.minimum)||oe(e.maximum)&&!(n<=e.maximum)||oe(e.multipleOf)&&n%e.multipleOf!==0)}function M3(e,t,n){if(!qe.IsObjectLike(n)||oe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||oe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const r=Object.getOwnPropertyNames(e.properties);for(const i of r){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!pt(o,t,n[i])||(os(o)||p3(o))&&!(i in n))return!1}else if(qe.IsExactOptionalProperty(n,i)&&!pt(o,t,n[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&i.length===r.length?!0:i.every(o=>r.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(n).every(o=>r.includes(o)||pt(e.additionalProperties,t,n[o])):!0}function O3(e,t,n){return c1(n)}function B3(e,t,n){if(!qe.IsRecordLike(n)||oe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||oe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const[r,i]=Object.entries(e.patternProperties)[0],o=new RegExp(r),s=Object.entries(n).every(([l,c])=>o.test(l)?pt(i,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(n).every(([l,c])=>o.test(l)?!0:pt(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(n).every(l=>o.test(l)):!0;return s&&a&&u}function R3(e,t,n){return pt(Bn(e,t),t,n)}function L3(e,t,n){const r=new RegExp(e.source,e.flags);return oe(e.minLength)&&!(n.length>=e.minLength)||oe(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function j3(e,t,n){return!dn(n)||oe(e.minLength)&&!(n.length>=e.minLength)||oe(e.maxLength)&&!(n.length<=e.maxLength)||oe(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:oe(e.format)?bd(e.format)?$d(e.format)(n):!1:!0}function U3(e,t,n){return ol(n)}function _3(e,t,n){return dn(n)&&new RegExp(e.pattern).test(n)}function V3(e,t,n){return pt(Bn(e,t),t,n)}function q3(e,t,n){if(!yn(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!pt(e.items[r],t,n[r]))return!1;return!0}function W3(e,t,n){return ui(n)}function z3(e,t,n){return e.anyOf.some(r=>pt(r,t,n))}function K3(e,t,n){return!(!ld(n)||oe(e.maxByteLength)&&!(n.length<=e.maxByteLength)||oe(e.minByteLength)&&!(n.length>=e.minByteLength))}function Z3(e,t,n){return!0}function G3(e,t,n){return qe.IsVoidLike(n)}function Y3(e,t,n){return Li(e[P])?Dd(e[P])(e,n):!1}function pt(e,t,n){const r=oe(e.$id)?Al(e,t):t,i=e;switch(i[P]){case"Any":return g3();case"Argument":return y3();case"Array":return w3(i,r,n);case"AsyncIterator":return b3(i,r,n);case"BigInt":return $3(i,r,n);case"Boolean":return v3(i,r,n);case"Constructor":return D3(i,r,n);case"Date":return E3(i,r,n);case"Function":return x3(i,r,n);case"Import":return C3(i,r,n);case"Integer":return A3(i,r,n);case"Intersect":return k3(i,r,n);case"Iterator":return F3(i,r,n);case"Literal":return S3(i,r,n);case"Never":return N3();case"Not":return I3(i,r,n);case"Null":return P3(i,r,n);case"Number":return T3(i,r,n);case"Object":return M3(i,r,n);case"Promise":return O3(i,r,n);case"Record":return B3(i,r,n);case"Ref":return R3(i,r,n);case"RegExp":return L3(i,r,n);case"String":return j3(i,r,n);case"Symbol":return U3(i,r,n);case"TemplateLiteral":return _3(i,r,n);case"This":return V3(i,r,n);case"Tuple":return q3(i,r,n);case"Undefined":return W3(i,r,n);case"Union":return z3(i,r,n);case"Uint8Array":return K3(i,r,n);case"Unknown":return Z3();case"Void":return G3(i,r,n);default:if(!Li(i[P]))throw new h3(i);return Y3(i,r,n)}}function Ou(...e){return e.length===3?pt(e[0],e[1],e[2]):pt(e[0],[],e[1])}var $;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})($||($={}));class J3 extends Ct{constructor(t){super("Unknown type"),this.schema=t}}function $r(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function ie(e){return e!==void 0}class mw{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function M(e,t,n,r,i=[]){return{type:e,schema:t,path:n,value:r,message:Y4()({errorType:e,path:n,schema:t,value:r,errors:i}),errors:i}}function*H3(e,t,n,r){}function*X3(e,t,n,r){}function*Q3(e,t,n,r){if(!yn(r))return yield M($.Array,e,n,r);ie(e.minItems)&&!(r.length>=e.minItems)&&(yield M($.ArrayMinItems,e,n,r)),ie(e.maxItems)&&!(r.length<=e.maxItems)&&(yield M($.ArrayMaxItems,e,n,r));for(let s=0;s<r.length;s++)yield*gt(e.items,t,`${n}/${s}`,r[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of r){const u=zd(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield M($.ArrayUniqueItems,e,n,r)),!(ie(e.contains)||ie(e.minContains)||ie(e.maxContains)))return;const i=ie(e.contains)?e.contains:Oe(),o=r.reduce((s,a,u)=>gt(i,t,`${n}${u}`,a).next().done===!0?s+1:s,0);o===0&&(yield M($.ArrayContains,e,n,r)),ee(e.minContains)&&o<e.minContains&&(yield M($.ArrayMinContains,e,n,r)),ee(e.maxContains)&&o>e.maxContains&&(yield M($.ArrayMaxContains,e,n,r))}function*e6(e,t,n,r){u1(r)||(yield M($.AsyncIterator,e,n,r))}function*t6(e,t,n,r){if(!Er(r))return yield M($.BigInt,e,n,r);ie(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield M($.BigIntExclusiveMaximum,e,n,r)),ie(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield M($.BigIntExclusiveMinimum,e,n,r)),ie(e.maximum)&&!(r<=e.maximum)&&(yield M($.BigIntMaximum,e,n,r)),ie(e.minimum)&&!(r>=e.minimum)&&(yield M($.BigIntMinimum,e,n,r)),ie(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield M($.BigIntMultipleOf,e,n,r))}function*n6(e,t,n,r){il(r)||(yield M($.Boolean,e,n,r))}function*r6(e,t,n,r){yield*gt(e.returns,t,n,r.prototype)}function*i6(e,t,n,r){if(!ud(r))return yield M($.Date,e,n,r);ie(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield M($.DateExclusiveMaximumTimestamp,e,n,r)),ie(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield M($.DateExclusiveMinimumTimestamp,e,n,r)),ie(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield M($.DateMaximumTimestamp,e,n,r)),ie(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield M($.DateMinimumTimestamp,e,n,r)),ie(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield M($.DateMultipleOfTimestamp,e,n,r))}function*o6(e,t,n,r){m1(r)||(yield M($.Function,e,n,r))}function*s6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*gt(o,[...t,...i],n,r)}function*a6(e,t,n,r){if(!d1(r))return yield M($.Integer,e,n,r);ie(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield M($.IntegerExclusiveMaximum,e,n,r)),ie(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield M($.IntegerExclusiveMinimum,e,n,r)),ie(e.maximum)&&!(r<=e.maximum)&&(yield M($.IntegerMaximum,e,n,r)),ie(e.minimum)&&!(r>=e.minimum)&&(yield M($.IntegerMinimum,e,n,r)),ie(e.multipleOf)&&r%e.multipleOf!==0&&(yield M($.IntegerMultipleOf,e,n,r))}function*u6(e,t,n,r){let i=!1;for(const o of e.allOf)for(const s of gt(o,t,n,r))i=!0,yield s;if(i)return yield M($.Intersect,e,n,r);if(e.unevaluatedProperties===!1){const o=new RegExp(Ro(e));for(const s of Object.getOwnPropertyNames(r))o.test(s)||(yield M($.IntersectUnevaluatedProperties,e,`${n}/${s}`,r))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp(Ro(e));for(const s of Object.getOwnPropertyNames(r))if(!o.test(s)){const a=gt(e.unevaluatedProperties,t,`${n}/${s}`,r[s]).next();a.done||(yield a.value)}}}function*l6(e,t,n,r){l1(r)||(yield M($.Iterator,e,n,r))}function*c6(e,t,n,r){r!==e.const&&(yield M($.Literal,e,n,r))}function*f6(e,t,n,r){yield M($.Never,e,n,r)}function*d6(e,t,n,r){gt(e.not,t,n,r).next().done===!0&&(yield M($.Not,e,n,r))}function*m6(e,t,n,r){rl(r)||(yield M($.Null,e,n,r))}function*h6(e,t,n,r){if(!qe.IsNumberLike(r))return yield M($.Number,e,n,r);ie(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield M($.NumberExclusiveMaximum,e,n,r)),ie(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield M($.NumberExclusiveMinimum,e,n,r)),ie(e.maximum)&&!(r<=e.maximum)&&(yield M($.NumberMaximum,e,n,r)),ie(e.minimum)&&!(r>=e.minimum)&&(yield M($.NumberMinimum,e,n,r)),ie(e.multipleOf)&&r%e.multipleOf!==0&&(yield M($.NumberMultipleOf,e,n,r))}function*p6(e,t,n,r){if(!qe.IsObjectLike(r))return yield M($.Object,e,n,r);ie(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield M($.ObjectMinProperties,e,n,r)),ie(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield M($.ObjectMaxProperties,e,n,r));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(r);for(const a of i)s.includes(a)||(yield M($.ObjectRequiredProperty,e.properties[a],`${n}/${$r(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)o.includes(a)||(yield M($.ObjectAdditionalProperties,e,`${n}/${$r(a)}`,r[a]));if(typeof e.additionalProperties=="object")for(const a of s)o.includes(a)||(yield*gt(e.additionalProperties,t,`${n}/${$r(a)}`,r[a]));for(const a of o){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*gt(u,t,`${n}/${$r(a)}`,r[a]),os(e)&&!(a in r)&&(yield M($.ObjectRequiredProperty,u,`${n}/${$r(a)}`,void 0))):qe.IsExactOptionalProperty(r,a)&&(yield*gt(u,t,`${n}/${$r(a)}`,r[a]))}}function*g6(e,t,n,r){c1(r)||(yield M($.Promise,e,n,r))}function*y6(e,t,n,r){if(!qe.IsRecordLike(r))return yield M($.Object,e,n,r);ie(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield M($.ObjectMinProperties,e,n,r)),ie(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield M($.ObjectMaxProperties,e,n,r));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[a,u]of Object.entries(r))s.test(a)&&(yield*gt(o,t,`${n}/${$r(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(r))s.test(a)||(yield*gt(e.additionalProperties,t,`${n}/${$r(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(r))if(!s.test(a))return yield M($.ObjectAdditionalProperties,e,`${n}/${$r(a)}`,u)}}function*w6(e,t,n,r){yield*gt(Bn(e,t),t,n,r)}function*b6(e,t,n,r){if(!dn(r))return yield M($.String,e,n,r);if(ie(e.minLength)&&!(r.length>=e.minLength)&&(yield M($.StringMinLength,e,n,r)),ie(e.maxLength)&&!(r.length<=e.maxLength)&&(yield M($.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield M($.RegExp,e,n,r)}function*$6(e,t,n,r){if(!dn(r))return yield M($.String,e,n,r);ie(e.minLength)&&!(r.length>=e.minLength)&&(yield M($.StringMinLength,e,n,r)),ie(e.maxLength)&&!(r.length<=e.maxLength)&&(yield M($.StringMaxLength,e,n,r)),dn(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield M($.StringPattern,e,n,r))),dn(e.format)&&(bd(e.format)?$d(e.format)(r)||(yield M($.StringFormat,e,n,r)):yield M($.StringFormatUnknown,e,n,r))}function*v6(e,t,n,r){ol(r)||(yield M($.Symbol,e,n,r))}function*D6(e,t,n,r){if(!dn(r))return yield M($.String,e,n,r);new RegExp(e.pattern).test(r)||(yield M($.StringPattern,e,n,r))}function*E6(e,t,n,r){yield*gt(Bn(e,t),t,n,r)}function*x6(e,t,n,r){if(!yn(r))return yield M($.Tuple,e,n,r);if(e.items===void 0&&r.length!==0)return yield M($.TupleLength,e,n,r);if(r.length!==e.maxItems)return yield M($.TupleLength,e,n,r);if(e.items)for(let i=0;i<e.items.length;i++)yield*gt(e.items[i],t,`${n}/${i}`,r[i])}function*C6(e,t,n,r){ui(r)||(yield M($.Undefined,e,n,r))}function*A6(e,t,n,r){if(Ou(e,t,r))return;const i=e.anyOf.map(o=>new mw(gt(o,t,n,r)));yield M($.Union,e,n,r,i)}function*k6(e,t,n,r){if(!ld(r))return yield M($.Uint8Array,e,n,r);ie(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield M($.Uint8ArrayMaxByteLength,e,n,r)),ie(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield M($.Uint8ArrayMinByteLength,e,n,r))}function*F6(e,t,n,r){}function*S6(e,t,n,r){qe.IsVoidLike(r)||(yield M($.Void,e,n,r))}function*N6(e,t,n,r){Dd(e[P])(e,r)||(yield M($.Kind,e,n,r))}function*gt(e,t,n,r){const i=ie(e.$id)?[...t,e]:t,o=e;switch(o[P]){case"Any":return yield*H3();case"Argument":return yield*X3();case"Array":return yield*Q3(o,i,n,r);case"AsyncIterator":return yield*e6(o,i,n,r);case"BigInt":return yield*t6(o,i,n,r);case"Boolean":return yield*n6(o,i,n,r);case"Constructor":return yield*r6(o,i,n,r);case"Date":return yield*i6(o,i,n,r);case"Function":return yield*o6(o,i,n,r);case"Import":return yield*s6(o,i,n,r);case"Integer":return yield*a6(o,i,n,r);case"Intersect":return yield*u6(o,i,n,r);case"Iterator":return yield*l6(o,i,n,r);case"Literal":return yield*c6(o,i,n,r);case"Never":return yield*f6(o,i,n,r);case"Not":return yield*d6(o,i,n,r);case"Null":return yield*m6(o,i,n,r);case"Number":return yield*h6(o,i,n,r);case"Object":return yield*p6(o,i,n,r);case"Promise":return yield*g6(o,i,n,r);case"Record":return yield*y6(o,i,n,r);case"Ref":return yield*w6(o,i,n,r);case"RegExp":return yield*b6(o,i,n,r);case"String":return yield*$6(o,i,n,r);case"Symbol":return yield*v6(o,i,n,r);case"TemplateLiteral":return yield*D6(o,i,n,r);case"This":return yield*E6(o,i,n,r);case"Tuple":return yield*x6(o,i,n,r);case"Undefined":return yield*C6(o,i,n,r);case"Union":return yield*A6(o,i,n,r);case"Uint8Array":return yield*k6(o,i,n,r);case"Unknown":return yield*F6();case"Void":return yield*S6(o,i,n,r);default:if(!Li(o[P]))throw new J3(e);return yield*N6(o,i,n,r)}}function I6(...e){const t=e.length===3?gt(e[0],e[1],"",e[2]):gt(e[0],[],"",e[1]);return new mw(t)}class P6 extends Ct{constructor(t,n,r){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class T6 extends Ct{constructor(t,n,r,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=n,this.value=r,this.error=i}}function Se(e,t,n){try{return De(e)?e[Yt].Decode(n):n}catch(r){throw new T6(e,t,n,r)}}function M6(e,t,n,r){return yn(r)?Se(e,n,r.map((i,o)=>or(e.items,t,`${n}/${o}`,i))):Se(e,n,r)}function O6(e,t,n,r){if(!dr(r)||h1(r))return Se(e,n,r);const i=V1(e),o=i.map(c=>c[0]),s={...r};for(const[c,f]of i)c in s&&(s[c]=or(f,t,`${n}/${c}`,s[c]));if(!De(e.unevaluatedProperties))return Se(e,n,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Se(u,`${n}/${c}`,l[c]));return Se(e,n,l)}function B6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=or(o,[...t,...i],n,r);return Se(e,n,s)}function R6(e,t,n,r){return Se(e,n,or(e.not,t,n,r))}function L6(e,t,n,r){if(!dr(r))return Se(e,n,r);const i=Hi(e),o={...r};for(const l of i)f1(o,l)&&(ui(o[l])&&(!ba(e.properties[l])||qe.IsExactOptionalProperty(o,l))||(o[l]=or(e.properties[l],t,`${n}/${l}`,o[l])));if(!Vt(e.additionalProperties))return Se(e,n,o);const s=Object.getOwnPropertyNames(o),a=e.additionalProperties,u={...o};for(const l of s)i.includes(l)||(u[l]=Se(a,`${n}/${l}`,u[l]));return Se(e,n,u)}function j6(e,t,n,r){if(!dr(r))return Se(e,n,r);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...r};for(const c of Object.getOwnPropertyNames(r))o.test(c)&&(s[c]=or(e.patternProperties[i],t,`${n}/${c}`,s[c]));if(!Vt(e.additionalProperties))return Se(e,n,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.test(c)||(l[c]=Se(u,`${n}/${c}`,l[c]));return Se(e,n,l)}function U6(e,t,n,r){const i=Bn(e,t);return Se(e,n,or(i,t,n,r))}function _6(e,t,n,r){const i=Bn(e,t);return Se(e,n,or(i,t,n,r))}function V6(e,t,n,r){return yn(r)&&yn(e.items)?Se(e,n,e.items.map((i,o)=>or(i,t,`${n}/${o}`,r[o]))):Se(e,n,r)}function q6(e,t,n,r){for(const i of e.anyOf){if(!Ou(i,t,r))continue;const o=or(i,t,n,r);return Se(e,n,o)}return Se(e,n,r)}function or(e,t,n,r){const i=Al(e,t),o=e;switch(e[P]){case"Array":return M6(o,i,n,r);case"Import":return B6(o,i,n,r);case"Intersect":return O6(o,i,n,r);case"Not":return R6(o,i,n,r);case"Object":return L6(o,i,n,r);case"Record":return j6(o,i,n,r);case"Ref":return U6(o,i,n,r);case"Symbol":return Se(o,n,r);case"This":return _6(o,i,n,r);case"Tuple":return V6(o,i,n,r);case"Union":return q6(o,i,n,r);default:return Se(o,n,r)}}function W6(e,t,n){return or(e,t,"",n)}class z6 extends Ct{constructor(t,n,r){super("The encoded value does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class K6 extends Ct{constructor(t,n,r,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=n,this.value=r,this.error=i}}function Et(e,t,n){try{return De(e)?e[Yt].Encode(n):n}catch(r){throw new K6(e,t,n,r)}}function Z6(e,t,n,r){const i=Et(e,n,r);return yn(i)?i.map((o,s)=>nr(e.items,t,`${n}/${s}`,o)):i}function G6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=Et(e,n,r);return nr(o,[...t,...i],n,s)}function Y6(e,t,n,r){const i=Et(e,n,r);if(!dr(r)||h1(r))return i;const o=V1(e),s=o.map(f=>f[0]),a={...i};for(const[f,d]of o)f in a&&(a[f]=nr(d,t,`${n}/${f}`,a[f]));if(!De(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const f of u)s.includes(f)||(c[f]=Et(l,`${n}/${f}`,c[f]));return c}function J6(e,t,n,r){return Et(e.not,n,Et(e,n,r))}function H6(e,t,n,r){const i=Et(e,n,r);if(!dr(i))return i;const o=Hi(e),s={...i};for(const c of o)f1(s,c)&&(ui(s[c])&&(!ba(e.properties[c])||qe.IsExactOptionalProperty(s,c))||(s[c]=nr(e.properties[c],t,`${n}/${c}`,s[c])));if(!Vt(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Et(u,`${n}/${c}`,l[c]));return l}function X6(e,t,n,r){const i=Et(e,n,r);if(!dr(r))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...i};for(const f of Object.getOwnPropertyNames(r))s.test(f)&&(a[f]=nr(e.patternProperties[o],t,`${n}/${f}`,a[f]));if(!Vt(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const f of u)s.test(f)||(c[f]=Et(l,`${n}/${f}`,c[f]));return c}function Q6(e,t,n,r){const i=Bn(e,t),o=nr(i,t,n,r);return Et(e,n,o)}function eS(e,t,n,r){const i=Bn(e,t),o=nr(i,t,n,r);return Et(e,n,o)}function tS(e,t,n,r){const i=Et(e,n,r);return yn(e.items)?e.items.map((o,s)=>nr(o,t,`${n}/${s}`,i[s])):[]}function nS(e,t,n,r){for(const i of e.anyOf){if(!Ou(i,t,r))continue;const o=nr(i,t,n,r);return Et(e,n,o)}for(const i of e.anyOf){const o=nr(i,t,n,r);if(Ou(e,t,o))return Et(e,n,o)}return Et(e,n,r)}function nr(e,t,n,r){const i=Al(e,t),o=e;switch(e[P]){case"Array":return Z6(o,i,n,r);case"Import":return G6(o,i,n,r);case"Intersect":return Y6(o,i,n,r);case"Not":return J6(o,i,n,r);case"Object":return H6(o,i,n,r);case"Record":return X6(o,i,n,r);case"Ref":return Q6(o,i,n,r);case"This":return eS(o,i,n,r);case"Tuple":return tS(o,i,n,r);case"Union":return nS(o,i,n,r);default:return Et(o,n,r)}}function rS(e,t,n){return nr(e,t,"",n)}function iS(e,t){return De(e)||ct(e.items,t)}function oS(e,t){return De(e)||ct(e.items,t)}function sS(e,t){return De(e)||ct(e.returns,t)||e.parameters.some(n=>ct(n,t))}function aS(e,t){return De(e)||ct(e.returns,t)||e.parameters.some(n=>ct(n,t))}function uS(e,t){return De(e)||De(e.unevaluatedProperties)||e.allOf.some(n=>ct(n,t))}function lS(e,t){const n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),r=e.$defs[e.$ref];return De(e)||ct(r,[...n,...t])}function cS(e,t){return De(e)||ct(e.items,t)}function fS(e,t){return De(e)||ct(e.not,t)}function dS(e,t){return De(e)||Object.values(e.properties).some(n=>ct(n,t))||Vt(e.additionalProperties)&&ct(e.additionalProperties,t)}function mS(e,t){return De(e)||ct(e.item,t)}function hS(e,t){const n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return De(e)||ct(r,t)||Vt(e.additionalProperties)&&De(e.additionalProperties)}function pS(e,t){return De(e)?!0:ct(Bn(e,t),t)}function gS(e,t){return De(e)?!0:ct(Bn(e,t),t)}function yS(e,t){return De(e)||!ui(e.items)&&e.items.some(n=>ct(n,t))}function wS(e,t){return De(e)||e.anyOf.some(n=>ct(n,t))}function ct(e,t){const n=Al(e,t),r=e;if(e.$id&&sf.has(e.$id))return!1;switch(e.$id&&sf.add(e.$id),e[P]){case"Array":return iS(r,n);case"AsyncIterator":return oS(r,n);case"Constructor":return sS(r,n);case"Function":return aS(r,n);case"Import":return lS(r,n);case"Intersect":return uS(r,n);case"Iterator":return cS(r,n);case"Not":return fS(r,n);case"Object":return dS(r,n);case"Promise":return mS(r,n);case"Record":return hS(r,n);case"Ref":return pS(r,n);case"This":return gS(r,n);case"Tuple":return yS(r,n);case"Union":return wS(r,n);default:return De(e)}}const sf=new Set;function bS(e,t){return sf.clear(),ct(e,t)}class $S{constructor(t,n,r,i){this.schema=t,this.references=n,this.checkFunc=r,this.code=i,this.hasTransform=bS(t,n)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return I6(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new P6(this.schema,t,this.Errors(t).First());return this.hasTransform?W6(this.schema,this.references,t):t}Encode(t){const n=this.hasTransform?rS(this.schema,this.references,t):t;if(!this.checkFunc(n))throw new z6(this.schema,t,this.Errors(t).First());return n}}var xr;(function(e){function t(o){return o===36}e.DollarSign=t;function n(o){return o===95}e.IsUnderscore=n;function r(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=r;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(xr||(xr={}));var Bu;(function(e){function t(o){return o.length===0?!1:xr.IsNumeric(o.charCodeAt(0))}function n(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const a=o.charCodeAt(s);if(!(xr.IsAlpha(a)||xr.IsNumeric(a)||xr.DollarSign(a)||xr.IsUnderscore(a)))return!1}return!0}function r(o){return o.replace(/'/g,"\\'")}function i(o,s){return n(s)?`${o}.${s}`:`${o}['${r(s)}']`}e.Encode=i})(Bu||(Bu={}));var af;(function(e){function t(n){const r=[];for(let i=0;i<n.length;i++){const o=n.charCodeAt(i);xr.IsNumeric(o)||xr.IsAlpha(o)?r.push(n.charAt(i)):r.push(`_${o}_`)}return r.join("").replace(/__/g,"_")}e.Encode=t})(af||(af={}));var uf;(function(e){function t(n){return n.replace(/'/g,"\\'")}e.Escape=t})(uf||(uf={}));class vS extends Ct{constructor(t){super("Unknown type"),this.schema=t}}class Tp extends Ct{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Ci;(function(e){function t(s,a,u){return qe.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${Bu.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function n(s){return qe.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=n;function r(s){return qe.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=r;function i(s){return qe.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return qe.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(Ci||(Ci={}));var Ts;(function(e){function t(g){return g[P]==="Any"||g[P]==="Unknown"}function*n(g,B,b){yield"true"}function*r(g,B,b){yield"true"}function*i(g,B,b){yield`Array.isArray(${b})`;const[z,_]=[Ia("value","any"),Ia("acc","number")];ee(g.maxItems)&&(yield`${b}.length <= ${g.maxItems}`),ee(g.minItems)&&(yield`${b}.length >= ${g.minItems}`);const V=on(g.items,B,"value");if(yield`${b}.every((${z}) => ${V})`,Te(g.contains)||ee(g.minContains)||ee(g.maxContains)){const ve=Te(g.contains)?g.contains:Oe(),qt=on(ve,B,"value"),mr=ee(g.minContains)?[`(count >= ${g.minContains})`]:[],Un=ee(g.maxContains)?[`(count <= ${g.maxContains})`]:[],sr=`const count = value.reduce((${_}, ${z}) => ${qt} ? acc + 1 : acc, 0)`,Pa=["(count > 0)",...mr,...Un].join(" && ");yield`((${z}) => { ${sr}; return ${Pa}})(${b})`}g.uniqueItems===!0&&(yield`((${z}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${b})`)}function*o(g,B,b){yield`(typeof value === 'object' && Symbol.asyncIterator in ${b})`}function*s(g,B,b){yield`(typeof ${b} === 'bigint')`,Er(g.exclusiveMaximum)&&(yield`${b} < BigInt(${g.exclusiveMaximum})`),Er(g.exclusiveMinimum)&&(yield`${b} > BigInt(${g.exclusiveMinimum})`),Er(g.maximum)&&(yield`${b} <= BigInt(${g.maximum})`),Er(g.minimum)&&(yield`${b} >= BigInt(${g.minimum})`),Er(g.multipleOf)&&(yield`(${b} % BigInt(${g.multipleOf})) === 0`)}function*a(g,B,b){yield`(typeof ${b} === 'boolean')`}function*u(g,B,b){yield*En(g.returns,B,`${b}.prototype`)}function*l(g,B,b){yield`(${b} instanceof Date) && Number.isFinite(${b}.getTime())`,ee(g.exclusiveMaximumTimestamp)&&(yield`${b}.getTime() < ${g.exclusiveMaximumTimestamp}`),ee(g.exclusiveMinimumTimestamp)&&(yield`${b}.getTime() > ${g.exclusiveMinimumTimestamp}`),ee(g.maximumTimestamp)&&(yield`${b}.getTime() <= ${g.maximumTimestamp}`),ee(g.minimumTimestamp)&&(yield`${b}.getTime() >= ${g.minimumTimestamp}`),ee(g.multipleOfTimestamp)&&(yield`(${b}.getTime() % ${g.multipleOfTimestamp}) === 0`)}function*c(g,B,b){yield`(typeof ${b} === 'function')`}function*f(g,B,b){const z=globalThis.Object.getOwnPropertyNames(g.$defs).reduce((_,V)=>[..._,g.$defs[V]],[]);yield*En(rs(g.$ref),[...B,...z],b)}function*d(g,B,b){yield`Number.isInteger(${b})`,ee(g.exclusiveMaximum)&&(yield`${b} < ${g.exclusiveMaximum}`),ee(g.exclusiveMinimum)&&(yield`${b} > ${g.exclusiveMinimum}`),ee(g.maximum)&&(yield`${b} <= ${g.maximum}`),ee(g.minimum)&&(yield`${b} >= ${g.minimum}`),ee(g.multipleOf)&&(yield`(${b} % ${g.multipleOf}) === 0`)}function*y(g,B,b){const z=g.allOf.map(_=>on(_,B,b)).join(" && ");if(g.unevaluatedProperties===!1){const _=Ur(`${new RegExp(Ro(g))};`),V=`Object.getOwnPropertyNames(${b}).every(key => ${_}.test(key))`;yield`(${z} && ${V})`}else if(Te(g.unevaluatedProperties)){const _=Ur(`${new RegExp(Ro(g))};`),V=`Object.getOwnPropertyNames(${b}).every(key => ${_}.test(key) || ${on(g.unevaluatedProperties,B,`${b}[key]`)})`;yield`(${z} && ${V})`}else yield`(${z})`}function*C(g,B,b){yield`(typeof value === 'object' && Symbol.iterator in ${b})`}function*D(g,B,b){typeof g.const=="number"||typeof g.const=="boolean"?yield`(${b} === ${g.const})`:yield`(${b} === '${uf.Escape(g.const)}')`}function*S(g,B,b){yield"false"}function*A(g,B,b){yield`(!${on(g.not,B,b)})`}function*N(g,B,b){yield`(${b} === null)`}function*U(g,B,b){yield Ci.IsNumberLike(b),ee(g.exclusiveMaximum)&&(yield`${b} < ${g.exclusiveMaximum}`),ee(g.exclusiveMinimum)&&(yield`${b} > ${g.exclusiveMinimum}`),ee(g.maximum)&&(yield`${b} <= ${g.maximum}`),ee(g.minimum)&&(yield`${b} >= ${g.minimum}`),ee(g.multipleOf)&&(yield`(${b} % ${g.multipleOf}) === 0`)}function*W(g,B,b){yield Ci.IsObjectLike(b),ee(g.minProperties)&&(yield`Object.getOwnPropertyNames(${b}).length >= ${g.minProperties}`),ee(g.maxProperties)&&(yield`Object.getOwnPropertyNames(${b}).length <= ${g.maxProperties}`);const z=Object.getOwnPropertyNames(g.properties);for(const _ of z){const V=Bu.Encode(b,_),ve=g.properties[_];if(g.required&&g.required.includes(_))yield*En(ve,B,V),(os(ve)||t(ve))&&(yield`('${_}' in ${b})`);else{const qt=on(ve,B,V);yield Ci.IsExactOptionalProperty(b,_,qt)}}if(g.additionalProperties===!1)if(g.required&&g.required.length===z.length)yield`Object.getOwnPropertyNames(${b}).length === ${z.length}`;else{const _=`[${z.map(V=>`'${V}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${b}).every(key => ${_}.includes(key))`}if(typeof g.additionalProperties=="object"){const _=on(g.additionalProperties,B,`${b}[key]`),V=`[${z.map(ve=>`'${ve}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${b}).every(key => ${V}.includes(key) || ${_}))`}}function*G(g,B,b){yield`${b} instanceof Promise`}function*je(g,B,b){yield Ci.IsRecordLike(b),ee(g.minProperties)&&(yield`Object.getOwnPropertyNames(${b}).length >= ${g.minProperties}`),ee(g.maxProperties)&&(yield`Object.getOwnPropertyNames(${b}).length <= ${g.maxProperties}`);const[z,_]=Object.entries(g.patternProperties)[0],V=Ur(`${new RegExp(z)}`),ve=on(_,B,"value"),qt=Te(g.additionalProperties)?on(g.additionalProperties,B,b):g.additionalProperties===!1?"false":"true",mr=`(${V}.test(key) ? ${ve} : ${qt})`;yield`(Object.entries(${b}).every(([key, value]) => ${mr}))`}function*Ft(g,B,b){const z=Bn(g,B);if(Ge.functions.has(g.$ref))return yield`${eo(g.$ref)}(${b})`;yield*En(z,B,b)}function*ot(g,B,b){const z=Ur(`${new RegExp(g.source,g.flags)};`);yield`(typeof ${b} === 'string')`,ee(g.maxLength)&&(yield`${b}.length <= ${g.maxLength}`),ee(g.minLength)&&(yield`${b}.length >= ${g.minLength}`),yield`${z}.test(${b})`}function*Mt(g,B,b){yield`(typeof ${b} === 'string')`,ee(g.maxLength)&&(yield`${b}.length <= ${g.maxLength}`),ee(g.minLength)&&(yield`${b}.length >= ${g.minLength}`),g.pattern!==void 0&&(yield`${Ur(`${new RegExp(g.pattern)};`)}.test(${b})`),g.format!==void 0&&(yield`format('${g.format}', ${b})`)}function*Dn(g,B,b){yield`(typeof ${b} === 'symbol')`}function*Ln(g,B,b){yield`(typeof ${b} === 'string')`,yield`${Ur(`${new RegExp(g.pattern)};`)}.test(${b})`}function*Qi(g,B,b){yield`${eo(g.$ref)}(${b})`}function*Nl(g,B,b){if(yield`Array.isArray(${b})`,g.items===void 0)return yield`${b}.length === 0`;yield`(${b}.length === ${g.maxItems})`;for(let z=0;z<g.items.length;z++)yield`${on(g.items[z],B,`${b}[${z}]`)}`}function*us(g,B,b){yield`${b} === undefined`}function*Fa(g,B,b){yield`(${g.anyOf.map(_=>on(_,B,b)).join(" || ")})`}function*jn(g,B,b){yield`${b} instanceof Uint8Array`,ee(g.maxByteLength)&&(yield`(${b}.length <= ${g.maxByteLength})`),ee(g.minByteLength)&&(yield`(${b}.length >= ${g.minByteLength})`)}function*Sa(g,B,b){yield"true"}function*Il(g,B,b){yield Ci.IsVoidLike(b)}function*Na(g,B,b){const z=Ge.instances.size;Ge.instances.set(z,g),yield`kind('${g[P]}', ${z}, ${b})`}function*En(g,B,b,z=!0){const _=dn(g.$id)?[...B,g]:B,V=g;if(z&&dn(g.$id)){const ve=eo(g.$id);if(Ge.functions.has(ve))return yield`${ve}(${b})`;{Ge.functions.set(ve,"<deferred>");const qt=gi(ve,g,B,"value",!1);return Ge.functions.set(ve,qt),yield`${ve}(${b})`}}switch(V[P]){case"Any":return yield*n();case"Argument":return yield*r();case"Array":return yield*i(V,_,b);case"AsyncIterator":return yield*o(V,_,b);case"BigInt":return yield*s(V,_,b);case"Boolean":return yield*a(V,_,b);case"Constructor":return yield*u(V,_,b);case"Date":return yield*l(V,_,b);case"Function":return yield*c(V,_,b);case"Import":return yield*f(V,_,b);case"Integer":return yield*d(V,_,b);case"Intersect":return yield*y(V,_,b);case"Iterator":return yield*C(V,_,b);case"Literal":return yield*D(V,_,b);case"Never":return yield*S();case"Not":return yield*A(V,_,b);case"Null":return yield*N(V,_,b);case"Number":return yield*U(V,_,b);case"Object":return yield*W(V,_,b);case"Promise":return yield*G(V,_,b);case"Record":return yield*je(V,_,b);case"Ref":return yield*Ft(V,_,b);case"RegExp":return yield*ot(V,_,b);case"String":return yield*Mt(V,_,b);case"Symbol":return yield*Dn(V,_,b);case"TemplateLiteral":return yield*Ln(V,_,b);case"This":return yield*Qi(V,_,b);case"Tuple":return yield*Nl(V,_,b);case"Undefined":return yield*us(V,_,b);case"Union":return yield*Fa(V,_,b);case"Uint8Array":return yield*jn(V,_,b);case"Unknown":return yield*Sa();case"Void":return yield*Il(V,_,b);default:if(!Li(V[P]))throw new vS(g);return yield*Na(V,_,b)}}const Ge={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function on(g,B,b,z=!0){return`(${[...En(g,B,b,z)].join(" && ")})`}function eo(g){return`check_${af.Encode(g)}`}function Ur(g){const B=`local_${Ge.variables.size}`;return Ge.variables.set(B,`const ${B} = ${g}`),B}function gi(g,B,b,z,_=!0){const[V,ve]=[`
`,sr=>"".padStart(sr," ")],qt=Ia("value","any"),mr=um("boolean"),Un=[...En(B,b,z,_)].map(sr=>`${ve(4)}${sr}`).join(` &&${V}`);return`function ${g}(${qt})${mr} {${V}${ve(2)}return (${V}${Un}${V}${ve(2)})
}`}function Ia(g,B){const b=Ge.language==="typescript"?`: ${B}`:"";return`${g}${b}`}function um(g){return Ge.language==="typescript"?`: ${g}`:""}function mb(g,B,b){const z=gi("check",g,B,"value"),_=Ia("value","any"),V=um("boolean"),ve=[...Ge.functions.values()],qt=[...Ge.variables.values()],mr=dn(g.$id)?`return function check(${_})${V} {
  return ${eo(g.$id)}(value)
}`:`return ${z}`;return[...qt,...ve,mr].join(`
`)}function lm(...g){const B={language:"javascript"},[b,z,_]=g.length===2&&yn(g[1])?[g[0],g[1],B]:g.length===2&&!yn(g[1])?[g[0],[],g[1]]:g.length===3?[g[0],g[1],g[2]]:g.length===1?[g[0],[],B]:[null,[],B];if(Ge.language=_.language,Ge.variables.clear(),Ge.functions.clear(),Ge.instances.clear(),!Te(b))throw new Tp(b);for(const V of z)if(!Te(V))throw new Tp(V);return mb(b,z)}e.Code=lm;function hb(g,B=[]){const b=lm(g,B,{language:"javascript"}),z=globalThis.Function("kind","format","hash",b),_=new Map(Ge.instances);function V(Un,sr,Pa){if(!Li(Un)||!_.has(sr))return!1;const pb=Dd(Un),gb=_.get(sr);return pb(gb,Pa)}function ve(Un,sr){return bd(Un)?$d(Un)(sr):!1}function qt(Un){return zd(Un)}const mr=z(V,ve,qt);return new $S(g,B,mr,b)}e.Compile=hb})(Ts||(Ts={}));const lf={};function hw(e,t){e in lf||(lf[e]=t)}let Mp=!1;function DS(){Mp||(Mp=!0,G4(e=>(lf[e.schema[P]]||uw)(e)))}const cf=Symbol.for("object-shape-tester.shape-identifier");function We(e){if(DS(),Kd(e))return e;const t=ff(e),n=Ai(t,!1),r=Ai(t,!0),i={$_schema:t,$_schemaNoExtraKeys:n,$_schemaExtraKeys:r,default:t.default,$_compiledSchema:Ts.Compile(t),$_compiledSchemaNoExtraKeys:Ts.Compile(n),$_compiledSchemaExtraKeys:Ts.Compile(r)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[cf]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function Kd(e){return k.hasKey(e,cf)&&!!e[cf]}function Zd(e){return k.hasKey(e,P)}function Ai(e,t){const n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(r=>Ai(r,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(r=>Ai(r,t))),Zd(e.items)?n.items=Ai(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(r=>Ai(r,t))),k.isObject(e.properties)){const r={};Object.entries(e.properties).forEach(([i,o])=>{r[i]=Ai(o,t)}),n.properties=r}return n.additionalProperties=t,n}function ff(e){if(Zd(e))return e;if(Kd(e))return e.$_schema;if(k.isFunction(e))return Ie.Function([],Ie.Any(),{default:e});if(k.isObject(e)){const t={},n={};return Object.entries(e).forEach(([r,i])=>{const o=ff(i);n[r]=o,t[r]=o.default}),Ie.Object(n,{default:t})}else{if(k.isArray(e))return Ie.Array(Ie.Union(e.map(t=>ff(t))),{default:[]});if(k.isPrimitive(e)){if(k.isString(e))return Ie.String({default:e});if(k.isNumber(e))return Ie.Number({default:e});if(k.isBoolean(e))return Ie.Boolean({default:e});if(k.isSymbol(e))return Ie.Symbol({default:e});if(k.isNull(e))return Ie.Null({default:null});if(k.isUndefined(e))return Ie.Undefined({default:void 0});if(k.isBigInt(e))return Ie.BigInt({default:e});Pn.tsType(e).equals(),Pn.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${h(e)}`)}}function df(e,t){const n=zn(e);return We(Ie.Union(n.map(r=>Ie.Literal(r)),{default:n[0]}))}function ES(e){return k.isSymbol(e)?xS(e):We(Ie.Const(e,{default:e}))}const Ja="ExactSymbol";function xS(e){return Li(Ja)||F1(Ja,(t,n)=>n===t.symbol),hw(Ja,({schema:t})=>`Expected symbol ${t.symbol?.description?pD({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),We(Ie.Unsafe({[P]:Ja,symbol:e,default:e}))}function $t(e,t={}){qe.ExactOptionalPropertyTypes=!0;const n=We(e).$_schema,r=t.alsoUndefined?Ie.Union([Ie.Undefined(),n]):n;return We(Ie.Optional(r))}function Rt(...e){let t;const n=e.map((r,i)=>{const o=We(r);return i||(t=o.default),o.$_schema});return We(Ie.Union(n,{default:t}))}class CS extends TypeError{value;errors;failureMessage;name="ShapeMismatchError";constructor(t,n,r){const i=n.map(s=>pw(s)).join(`
`),o=qo(r,`Shape mismatch:
${Mf(i,1)}`);super(o),this.value=t,this.errors=n,this.failureMessage=r}}function AS(e){return e.errors.flatMap(t=>Array.from(t))}function pw(e,t=0){const n=AS(e).map(i=>pw(i,t+1)),r=[e.path,e.message].filter(k.isTruthy).join(": ")+(n.length?":":"");return[Mf(r,t),...n].join(`
`)}function Si(e,t,n={}){return gw(t,n).Check(e)}function kS(e,t,n={},r){if(Si(e,t,n))return;const i=Array.from(gw(t,n).Errors(e));if(i.length)throw new CS(e,i,r)}function gw(e,t){return e=FS(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function FS(e){return We(e)}const cu="recordShape";function Gd({keys:e,values:t,partial:n,additionalProperties:r}){SS();const i=yw(e),o=We(t);return Ie.Unsafe({[P]:cu,keysShape:i,valuesShape:o,isPartial:!!n,additionalProperties:!!r,default:NS({isPartial:!!n,keysShape:i,valuesShape:o})})}function SS(){Li(cu)||F1(cu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const n=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:Si(i,e.keysShape),a=Si(o,e.valuesShape);return s&&a}),r=e.isPartial?!0:!Op(e.keysShape,t).length;return n&&r}),hw(cu,e=>{const n=e.schema,r=e.value;if(typeof r!="object"||!r||Array.isArray(r))return"Expected an object";const i=Vi(Object.entries(r),([u])=>u,(u,[l,c])=>!Si(l,n.keysShape)||!Si(c,n.valuesShape)),o=Op(n.keysShape,r),s=i.length?["Failure at keys",i.join(",")].join(": "):"",a=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,a].filter(k.isTruthy).join(`
`)})}function Op(e,t){const n=Ru(e).filter(r=>k.isPropertyKey(r));return n.length?n.filter(r=>!k.hasKey(t,r)):[]}function NS({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{const r=Ru(e),i=t.default;return Object.fromEntries(r.map(o=>[o,i]))}}function yw(e){return Kd(e)?e:Zd(e)?We(e):k.isObject(e)?df(e):k.isArray(e)&&k.isLengthAtLeast(e,1)?Rt(...e.map(t=>ES(t))):k.isPropertyKey(e)?We(e):We(Ie.Undefined())}function Ru(e){const t=e.$_schema,n=t[P].toLowerCase();return["const","literal"].includes(n)?[t.const]:n==="union"?p0(t.anyOf.flatMap(r=>Ru(We(r)))):["undefined","number","string","symbol"].includes(n)?[]:Ru(yw(e.default))}function IS(e){return We(Ie.Unknown({default:e}))}const PS=We({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:IS()});function mc(e){return Si(e,PS,{allowExtraKeys:!0})}class ww extends o1{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||od}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}const{I:TS}=WD,Bp=()=>document.createComment(""),bs=(e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=r.insertBefore(Bp(),i),s=r.insertBefore(Bp(),i);n=new TS(o,s,e,e.options)}else{const o=n._$AB.nextSibling,s=n._$AM,a=s!==e;if(a){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==s._$AU&&n._$AP(u)}if(o!==i||a){let u=n._$AA;for(;u!==o;){const l=u.nextSibling;r.insertBefore(u,i),u=l}}}return n},Ei=(e,t,n=e)=>(e._$AI(t,n),e),MS={},OS=(e,t=MS)=>e._$AH=t,BS=e=>e._$AH,hc=e=>{e._$AR(),e._$AA.remove()};const Yd={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Lr=e=>(...t)=>({_$litDirective$:e,values:t});class jr{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}const RS={attribute:!0,type:String,converter:Cu,reflect:!1,hasChanged:Zf},LS=(e=RS,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(r==="setter"){const{name:s}=n;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e)}}throw Error("Unsupported decorator location: "+r)};function jS(e){return(t,n)=>typeof n=="object"?LS(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}const tn=Lr(class extends jr{constructor(e){if(super(e),e.type!==Yd.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return hn}});const Je=e=>e??te;function US(e,t,n){return e?t(e):n?.(e)}class _S extends Ns{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function VS(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(r||i)return[...e];const o=e.map(a=>[a]);return o.length||(o[0]=[]),n.forEach(a=>{a>=0&&a<e.length&&(o[a]=[])}),t.forEach(a=>{const u=o[a.index];u&&u.splice(0,0,...a.values)}),o.flat()}function mf(e){return k.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Jd(e){return k.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function bw(e){return Vi(e,t=>{if(mf(t))return t.definition;if(Jd(t))return t.tagInterpolationKey||t},k.isTruthy)}const $w=new WeakMap;function qS(e,t){const n=bw(t);return vw($w,[e,...n]).value?.template}function WS(e,t,n){const r=bw(t);return Ew($w,[e,...r],n)}function vw(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=Dw(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?vw(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function Dw(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function Ew(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=Dw(e,t,r);if(!o)return{result:!1,reason:s};const a=i??{nested:void 0,template:void 0};if(i||e.set(o,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),Ew(u,t,n,r+1)}function xw(e,t,n){const r=qS(e,t),i=r??n();if(!r){const a=WS(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const o=i.valuesTransform(t),s=VS(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function Cw(e,t,n,r){const i=[],o=[],s=[],a=[];return e.forEach((l,c)=>{const f=i.length-1,d=i[f],y=c-1,C=t[y];r&&r(l);let D,S=[];if(typeof d=="string"&&(D=n(d,l,C),D)){i[f]=[d,D.replacement].join(""),s.push(y);const N=D.getExtraValues;S=N?N(C):[],S.length&&N?(i[f]+=" ",S.forEach((U,W)=>{W&&i.push(" ")}),a.push(U=>{const W=U[y],G=N(W);return{index:y,values:G}}),i.push(l)):i[f]+=l}D||i.push(l);const A=e.raw[c];D?(o[f]=[o[f],D.replacement,A].join(""),S.length&&S.forEach(()=>{o.push("")})):o.push(A)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(l){const c=a.flatMap(f=>f(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function zS(...[e,t,n]){if(Jd(n))return{replacement:n.tagName,getExtraValues:void 0}}function KS(e,t){return Cw(e,t,zS)}function E(e,...t){const n=xw(e,t,()=>KS(e,t));return au(n.strings,...n.values)}const ZS={allowPolymorphicState:!1,errorHandler:void 0};function Aw(e,t){const n=e.instanceState;Pe(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&Pe(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)})}class GS extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function Hd(){return e=>class extends GS{static type=e;_type=e;constructor(t){super(e,t)}}}function lt(){return Hd()}function YS(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=Hd()([e,r].join("-"));return n[r]=i,n},{}):{}}function JS(e){return e?mn(e,t=>t):{}}function kw(e,t){t in e||jS()(e,t)}function HS(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function Rp(e,t){const n=e;function r(s){t?HS(s,e,e.tagName):kw(e,s)}function i(s,a){return r(a),n[a]}return new Proxy({},{get:i,set(s,a,u){r(a);const l=n[a];function c(d){s[a]=d,n[a]=d}const f=e.observablePropertyListenerMap[a];if(l!==u&&mc(l)&&f&&l.removeListener(f),mc(u))if(f)u.listen(!1,f);else{let d=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=d,u.listen(!1,d)}else mc(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return i(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function Lp(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid element string name '${r}' in '${e}': element string names must begin with the element's tag name.`)})}function jp(e,t,n){return n?Uv(n,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function XS({hostClassNames:e,cssVars:t}){return{hostClasses:mn(e,(n,r)=>({name:Qe(r),selector:Qe(`:host(.${r})`)})),cssVars:t}}function QS({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&Pe(t).forEach(o=>{const s=t[o],a=n[o];typeof s=="function"&&(s({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function e8({element:e,eventsMap:t,cssVars:n,slotNamesMap:r,testIdsMap:i}){function o(a){Pe(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:n,slotNames:r,testIds:i,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function Ca(...e){return Pn.isEmpty(e),t=>{const n=t;if(!k.isObject(n))throw new TypeError("Cannot define element with non-object init: ${init}");return t8({...n,options:{...n.options}})}}function t8(e){if(!k.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!k.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...ZS,...e.options},n=YS(e.tagName,e.events),r=JS(e.hostClasses);e.hostClasses&&Lp(e.tagName,e.hostClasses),e.cssVars&&Lp(e.tagName,e.cssVars);const i=e.cssVars?Or(e.cssVars):{},o=jp(e.tagName,"slot",e.slotNames),s=jp(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(XS({hostClassNames:r,cssVars:i})):e.styles||E``,u=e.render;function l(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:f}}const c=class extends _S{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return e8({element:this,eventsMap:n,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=l;static events=n;static render=u;static hostClasses=r;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const y=e.state(f);if(y instanceof Promise)throw new TypeError("init cannot be asynchronous");Pe(y).forEach(C=>{kw(this,C),this.instanceState[C]=y[C]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=u(f);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return QS({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},d}catch(f){const d=Cf(f,`Failed to render ${e.tagName}`);return console.error(d),this._lastRenderError=d,t.errorHandler?.(d),yt(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{k.hasKey(f,"destroy")&&k.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){Aw(this,f)}observablePropertyListenerMap={};instanceInputs=Rp(this,!1);instanceState=Rp(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:dD(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}class n8 extends mo{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function r8(e){return new n8(e)}const Up=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},i8=Lr(class extends jr{constructor(e){if(super(e),e.type!==Yd.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],o=[];let s=0;for(const a of e)i[s]=r?r(a,s):s,o[s]=n(a,s),s++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=BS(e),{values:o,keys:s}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??=[],u=[];let l,c,f=0,d=i.length-1,y=0,C=o.length-1;for(;f<=d&&y<=C;)if(i[f]===null)f++;else if(i[d]===null)d--;else if(a[f]===s[y])u[y]=Ei(i[f],o[y]),f++,y++;else if(a[d]===s[C])u[C]=Ei(i[d],o[C]),d--,C--;else if(a[f]===s[C])u[C]=Ei(i[f],o[C]),bs(e,u[C+1],i[f]),f++,C--;else if(a[d]===s[y])u[y]=Ei(i[d],o[y]),bs(e,i[f],i[d]),d--,y++;else if(l===void 0&&(l=Up(s,y,C),c=Up(a,f,d)),l.has(a[f]))if(l.has(a[d])){const D=c.get(s[y]),S=D!==void 0?i[D]:null;if(S===null){const A=bs(e,i[f]);Ei(A,o[y]),u[y]=A}else u[y]=Ei(S,o[y]),bs(e,i[f],S),i[D]=null;y++}else hc(i[d]),d--;else hc(i[f]),f++;for(;y<=C;){const D=bs(e,u[C+1]);Ei(D,o[y]),u[y++]=D}for(;f<=d;){const D=i[f++];D!==null&&hc(D)}return this.ut=s,OS(e,u),hn}}),o8=i8;function Aa(e,t){return ta(e,t),e.element}function s8(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ta(e,t){const n=s8(e),r=n?`: in ${n}`:"";if(e.type!==Yd.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function a8(e,t){return Lr(class extends jr{element;constructor(n){super(n),this.element=ti.instanceOf(Aa(n,e),HTMLElement)}render(...n){return t({params:n,directive:this,element:this.element}),hn}})}const Fr=a8("attributes",({element:e,params:[t],directive:n})=>{if(!t)return;const i=la(n,"allAttributesApplied",()=>new Set);Pe(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===te?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function u8(e){const t=Lr(class extends jr{element;constructor(n){super(n),this.element=Aa(n,e)}render(n){return this.element.setAttribute(e,n),hn}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function q(e,t){return l8(e,t)}const l8=Lr(class extends jr{element;lastListenerMetaData;constructor(e){super(e),this.element=Aa(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),hn}});function c8(e){return q("keydown",async t=>{const n=t.code.toLowerCase();(n.includes("enter")||n.includes("return")||n==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const _p="onDomCreated",Lu=Lr(class extends jr{element;constructor(e){super(e),ta(e,_p)}update(e,[t]){ta(e,_p);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),Vp="onResize",Fw=Lr(class extends jr{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&f8(this.element,this.callback,e)});callback;constructor(e){super(e),ta(e,Vp)}update(e,[t]){ta(e,Vp),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function f8(e,t,n){const r=n[0];if(!r)throw console.error(n),new Error("Resize observation triggered but the first entry was empty.");t({target:r.target,contentRect:r.contentRect},e)}function Ht(e,t,n){return US(e,()=>t,()=>n)}const{attributeDirective:d8}=u8("data-test-id"),Nr=d8;function Sw(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return(...r)=>i=>(t(i),Ca(...r)(n(i)))}function m8(e,t){return h8(void 0,e)}const h8=Lr(class extends jr{element;constructor(e){super(e),this.element=Aa(e,"assign")}render(e,t){return Aw(this.element,t),hn}}),p8={};function g8(e,t){return t.map((n,r)=>{const i=e[r],o=e[r+1];if(i&&o){const{shouldHaveTagNameHere:s}=Nw(i,o);if(s&&k.isString(n))return{tagName:n,tagInterpolationKey:la(p8,n,()=>({tagName:n}))}}return n})}function Nw(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function y8(...[e,t,n]){const r=mf(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:o}=Nw(e,t),s=Jd(r);if(s&&o&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);return!o||!s?void 0:{replacement:r.tagName,getExtraValues(u){const l=mf(u)?u.inputs:void 0;return[i&&l?m8(l):void 0].filter(k.isTruthy)}}}function w8(e){}function b8(e){return Cw(e.strings,e.values,y8,w8)}function p(e,...t){const n=g8(e,t),r=RD(e,...n),i=xw(e,n,()=>b8(r));return{...r,strings:i.strings,values:i.values}}function hf(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if(!t?.length&&!n?.length)return"";const r=[...n||[],""],o=(t??[""]).map((s,a)=>{const u=$8(s,r[a]);return`${s}${u}`});return ly(o.join(""))}function $8(e,t){return t._$litType$!=null||t._$litDirective$!=null?hf(t):Array.isArray(t)?t.map(r=>hf(r)).join(""):e.endsWith("=")?`"${t}"`:t}function Iw(e){return mn(e,(t,n)=>n instanceof $e?Qe(n.toString({format:"hex"})):Iw(n))}const v8="dodgerblue";function pf(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function pc({background:e,foreground:t}){return{background:e??new $e(pf(t)),foreground:t??new $e(pf(e))}}var ju;(function(e){e.Dark="dark",e.Light="light"})(ju||(ju={}));function D8(e){return e==="black"?"white":"black"}const E8={black:{foregroundFaint1:new $e("#ccc"),foregroundFaint2:new $e("#eee")},white:{foregroundFaint1:new $e("#ccc"),foregroundFaint2:new $e("#eee")}},x8={black:{backgroundFaint1:new $e("#666"),backgroundFaint2:new $e("#444")},white:{backgroundFaint1:new $e("#ccc"),backgroundFaint2:new $e("#fafafa")}};function qp({themeColor:e=v8,themeStyle:t=ju.Light}={}){const n=new $e(e),r=new $e(t===ju.Dark?"black":"white"),i=pf(r),o=new $e(i),s={nav:{hover:pc({background:n.clone().set({"hsl.l":93})}),active:pc({background:n.clone().set({"hsl.l":90})}),selected:pc({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...x8[D8(i)],foreground:o,...E8[i]}};return Iw(s)}var ur;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ur||(ur={}));async function gf(e=1){const t=new gu;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function C8(e,t){return{element:e,children:Pw(e)}}function Pw(e,t,n){return A8(e).map(r=>{const i=Pw(r);return{element:r,children:i}})}function A8(e){return[...e.children,...e.shadowRoot?.children??[]]}function gc(e){return e.matches(":focus")}function Xd(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:Xd(t)}function Tw(e,t){if(t(e))return e;const n=Xd(e);if(n)return Tw(n,t)}async function k8(e){return F8(e,1)}async function F8(e,t){return new Promise(n=>{new IntersectionObserver((i,o)=>{Pn.isLengthAtLeast(i,1),o.disconnect(),n(i[0].intersectionRatio>=t)}).observe(e)})}function Ni(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,o=r?.constructor.name,s=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return r}function S8(e){const t=Xd(e);return t&&Tw(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}function N8({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,a=0;s<r;s++){const u=o.codePointAt(s);for(;a<n;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const I8=Pi(32);function fu(e){return e.join(I8)}function Mw(e){if(!e.length)return[];const t=fu(e),n=Mw(e.slice(0,-1));return[t,...n]}const P8=["error","errors"];function T8(e){return P8.includes(e)}function M8({flattenedNodes:e,searchQuery:t}){const n={};function r(i){Object.values(i.children).map(s=>(r(s),fu(s.fullUrlBreadcrumbs))).forEach(s=>n[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&T8(t),s=fu(i.fullUrlBreadcrumbs);if(N8({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(u=>k.isString(u)?u:hf(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||n[s]){const u=Mw(i.fullUrlBreadcrumbs);r(i),u.forEach(l=>n[l]=!0)}else n[s]=!1}),e.filter(i=>{const o=fu(i.fullUrlBreadcrumbs),s=n[o];if(!k.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Qd extends Error{name="SpaRouterError"}class Wp extends Qd{name="GlobalUrlEventsConsolidationError"}class O8 extends Qd{name="SanitizationDepthMaxed"}We({paths:[""],search:$t(Rt(void 0,Gd({keys:"",values:[""]}))),hash:$t(Rt(void 0,""))});const B8=We({basePath:$t("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:$t(1,{alsoUndefined:!0}),disableWarnings:$t(!1,{alsoUndefined:!0}),isPaused:$t(!1,{alsoUndefined:!0})}),yc="://";function em(...e){const t=e.join("/"),[n,r=""]=t.includes(yc)?t.split(yc):["",t];let i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(i)return s;const c=l[u+1];let f=a;const d=c?.startsWith("?"),y=!a.includes("?")&&d,C=c==="?";if(d||y){i=!0;let D=!1;const S=l.slice(u+2).reduce((A,N)=>(N.includes("#")&&(D=!0),D?A.concat(N):[A,N].join("&")),"");f=[a,c,C?bo({value:S,prefix:"&"}):S].join("")}return s.concat(f)},[]);return[n,n?yc:"",o.join("/")].join("")}var jo;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(jo||(jo={}));var Uo;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Uo||(Uo={}));const R8=We({encoding:$t(Rt(void 0,df(jo))),searchParamStrategy:$t(Rt(void 0,df(Uo)))});function Ha(e,t){return e.map(n=>{if(n!=null)return vo(String(n),t)}).filter(n=>n!=null)}function vo(e,t){return t?.encoding===jo.Decode?decodeURIComponent(e):t?.encoding===jo.Encode?encodeURIComponent(e):e}const L8=We(Gd({keys:"",values:[""]}));function j8(e,t,n){const r=n?.searchParamStrategy===Uo.Clear?{}:mn(e,(s,a)=>_v(a)),i=mn(t,(s,a)=>{if(n?.searchParamStrategy===Uo.Append){const u=r[s],l=k.isArray(u)?u:[u];if(a){const c=k.isArray(a)?a:[a];return Ha([...l,...c],n)}else return Ha(l,n)}else return k.isArray(a)?Ha(a,n):a?Ha([a],n):void 0});return Lf({...r,...i},(s,a)=>!!a)}function Ow(e,t){return k.isString(e)&&!e.includes("?")?{}:(k.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...a]=aD(o,"=");return[s,a.length?a.join("="):void 0]}).reduce((o,[s,a])=>{const u=Bw({options:t,key:s,value:a}),l=la(o,u.key,()=>[]);return a!=null&&l.push(u.value),o},{})}function U8(e){if(e!=null)return k.isArray(e)?[...e]:e===""?[]:[e]}function _8(e,t){const n=Vi(Object.entries(e),([r,i])=>{const o=U8(i);return o?.length?o.map(s=>{const a=Bw({options:t,key:r,value:s});return[a.key,a.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?Xt({value:n.join("&"),prefix:"?"}):""}function Bw({options:e,key:t,value:n}){return{key:vo(t,e),value:vo(String(n),e)}}function Rw({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:o,search:s,username:a}){return[o?o+"://":"",a?a+":":"",n?n+"@":"",kl({hostname:t,port:i}),tm({hash:e,pathname:r,search:s})].join("")}function Lw({pathname:e}){const t=bo({value:e,prefix:"/"});return t?t.split("/"):[]}function tm({hash:e,pathname:t,search:n}){return[Xt({value:t,prefix:"/"}),n?Xt({value:n,prefix:"?"}):"",e?Xt({value:e,prefix:"#"}):""].join("")}function kl({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function jw({hostname:e,port:t,protocol:n}){return[n,kl({hostname:e,port:t})].filter(k.isTruthy).join("://")}function Do(e,t){const n=k.isString(e)?bo({value:e,prefix:"."}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?Xt({value:vo(r,t),prefix:"#"}):"",o=n.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),a=s?Xt({value:vo(s,t),prefix:"?"}):"",u=o.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=c.replace(/@.*/,""),d=c.replace(/^[^@]*@/,""),y=f!==d,[C,...D]=y?f.split(":").reverse():[],S=D.toReversed().join("").replace(/[/:]/g,"")||"",A=C?.replace(/[/:]/g,"")||"",N=sD(d.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),U=N[0]?.endsWith("]")?"":N[1]===":"&&N[0]||"",G=d.replace(new RegExp(`:${U}($|/)`),"$1").replace(/\/.*/,""),je=d.replace(/^[^/]*(\/|$)/,"$1"),Ft=vo(je.replace(/^[^/]*(?:\/|$)/,"/"),t),ot=kl({hostname:G,port:U}),Mt=jw({hostname:G,port:U,protocol:l}),Dn=Rw({hash:i,hostname:G,password:A,pathname:Ft,port:U,protocol:l,search:a,username:S}),Ln=Ow(a),Qi=Lw({pathname:Ft});return{fullPath:tm({hash:i,pathname:Ft,search:a}),hash:i,host:ot,hostname:G,href:Dn,origin:Mt,password:A,pathname:Ft,paths:Qi,port:U,protocol:l,search:a,searchParams:Ln,username:S}}We({hash:$t(Rt(void 0,"")),search:$t(Rt(void 0,"",Gd({keys:"",values:Rt(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:$t(Rt(void 0,"")),pathname:$t(Rt(void 0,"")),paths:$t(Rt(void 0,[""])),protocol:$t(Rt(void 0,"")),username:$t(Rt(void 0,"")),password:$t(Rt(void 0,"")),port:$t(Rt(void 0,"",-1))});function V8(e,t,n){const r=!!n,i=t==null||Si(t,R8,{allowExtraKeys:!1}),o=i?Do(""):k.instanceOf(e,URL)||k.isString(e)?Do(e):e,s=i?e:t,a=k.isString(s)&&s.startsWith("."),u=k.isString(s)||k.instanceOf(s,URL)?Lf(Do(s),(D,S)=>k.isTruthy(S)):s,l=r?n:i?t:void 0,c=mn(o,(D,S)=>{if(!k.hasKey(u,D))return S;const A=u[D];return k.isNumber(A)?String(A):k.isString(A)?D==="hash"&&A?Xt({value:A,prefix:"#"}):D==="pathname"?Xt({value:A,prefix:"/"}):A:S});k.hasKey(u,"paths")&&u.paths&&(c.pathname=em(a?o.pathname:"",...u.paths));const f=k.isString(u.search)?Ow(Xt({value:u.search,prefix:"?"})):qv(u.search||{}),d=j8(c.searchParams,f,{...l,encoding:jo.None}),y=_8(d,l);return{...c,searchParams:d,search:y,paths:Lw(c),fullPath:tm(c),host:kl(c),origin:jw(c),href:Rw({...c,search:y})}}const q8=We({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:L8,hash:"",fullPath:"/",href:"/"});({...q8.default});const W8=0;function Uw(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==W8)}const Fl="locationchange",Cr=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const zp=Cr?.pushState;function Kp(...e){if(!zp)return;const t=zp.apply(Cr,e);return globalThis.dispatchEvent(new Event(Fl)),t}const Zp=Cr?.replaceState;function Gp(...e){if(!Zp)return;const t=Zp.apply(Cr,e);return globalThis.dispatchEvent(new Event(Fl)),t}function z8(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Cr)){{if(Cr.pushState===Kp)throw new Wp("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Cr.replaceState===Gp)throw new Wp("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Cr.pushState=Kp,Cr.replaceState=Gp,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Fl))})}}function Xa(e,t){const n=Do(e),r=bo({value:bo({value:n.pathname,prefix:Xt({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],o=Object.keys(n.searchParams).length?n.searchParams:void 0,s=n.hash?bo({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class nm{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){kS(t,B8),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new ww({defaultValue:n,equalityCheck:()=>!1}),z8(),this.removeGlobalListener=cy(globalThis,Fl,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new O8("Looping route sanitization detected; aborting window URL change listener.");const r=Xa(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);k.jsonEquals(r,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:em(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Xa(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n={...Xa(globalThis.location.href,this.params.basePath),...t},r=this.sanitizeRoute(n),o=this.routeIncludesBasePath(Xa(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(r)&&this.params.basePath?{...r,paths:[this.params.basePath,...r.paths]}:r;return V8(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Xt({value:o.hash,prefix:"#"}):""},{searchParamStrategy:Uo.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=Do(r);return this.params.isPaused||!n.force&&k.jsonEquals(Do(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return Uw(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new Qd(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function K8(e){return new nm({basePath:e,sanitizeRoute(t){return{paths:Z8(t.paths),hash:void 0,search:void 0}}})}function Z8(e){const t=e[0];if(k.isEnumValue(t,Gt)){if(t===Gt.Book)return[Gt.Book,...e.slice(1)];if(t===Gt.Search)return e[1]?[t,e[1]]:[Gt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return ko.paths}const Uu=Hd()("element-book-change-route"),Yp="vira-",Ke=Sw({assertInputs:e=>{if(!e.tagName.startsWith(Yp))throw new Error(`Tag name should start with '${Yp}' but got '${e.tagName}'`)}});function G8(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given: ${hD(n)}`)}function Y8(e,t=[],n=!1){return n?t.includes(e.id)?t.filter(r=>r!==e.id):[...t,e.id]:[e.id]}function Jp({open:e,callback:t,popUpManager:n,host:r}){if(e){const i=n.showPopUp(r);t?.(i)}else n.removePopUp(),t?.(void 0)}const w=Or({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"}),J8=$e;function H8(e){try{if(!e)throw new Error("invalid empty color");return new J8(e)}catch{throw new Error(`Invalid color: ${h(e)}`)}}function re({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Hp(e,t){const n=Pe(t).map(r=>{const i=t[r],o=H8(i);return`${w[r].name}: ${o.toString()};`}).join(" ");return re({name:e.name,svgTemplate:p`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const rm=re({name:"Check24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),In=Or({"vira-form-input-radius":"8px"}),as=E`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Ir=Or({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),_o=Or({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":E`calc(${In["vira-form-input-radius"].value} + 2px)`});function ka({elementBorderSize:e,outlineGap:t=2,outlineWidth:n=2,noNesting:r}){const i=Qe(sy(n+t+e)),o=E`
        content: '';
        top: calc(${i} * -1);
        left: calc(${i} * -1);
        position: absolute;
        width: calc(100% + calc(${i} * 2));
        height: calc(100% + calc(${i} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${n}px solid ${_o["vira-focus-outline-color"].value};
        border-radius: ${_o["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return r?o:E`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const J=Or({"vira-form-border-color":"#cccccc","vira-form-placeholder-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-text-selection-color":"#cfe9ff","vira-form-selection-hover-background-color":"#e6f9fe","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#e6f9fe","vira-form-selection-active-foreground-color":"black","vira-form-error-foreground-color":"red","vira-form-success-foreground-color":"green","vira-form-label-font-weight":"bold"}),im=E`
    padding: 0;
    margin: 0;
`,Kn=E`
    ${im};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,wc=Or({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Eo={menuShadow:E`
        filter: drop-shadow(0px 5px 5px ${wc["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:E`
        filter: drop-shadow(0px -5px 5px ${wc["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:E`
        box-shadow: 0 5px 15px ${wc["modal-shadow-color"].value};
    `},Vo=E`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,L=Ke()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>E`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),un=Ke()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            ${Vo};
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

        ${e["vira-menu-item-selected"].selector} ${L} {
            opacity: 1;
            visibility: visible;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${L} {
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
            visibility: hidden;
        }
    `,render({inputs:e}){return p`
            <div class="item">
                <${L.assign({icon:rm})}></${L}>
                <slot>${e.label}</slot>
            </div>
        `}});function X8(e,t){return e>t}function Q8(e,t){return e<t}function na(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var lr;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(lr||(lr={}));var he;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(he||(he={}));function Sl(e){const t={x:-1,y:-1};let n;for(;t.y<e.length-1&&!n;){t.y++;const r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;const i=r[t.x];if(i)if(i.navEntry.navParams.group){const o=Sl(i.children);o&&(n=o.node)}else i.navEntry.navParams.disabled||(n=i)}}if(n)return{node:n,coords:t}}function Xp(e,t,n,r){if(!t){const u=Sl(e.children);return u?(na(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:n,navAction:he.Navigate}):{success:!1,reason:"no default element to focus",direction:n,navAction:he.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=_w(t.position,n),a=r?!0:!o;return i&&a?(na(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:n,navAction:he.Navigate,coords:s}):i?a?{success:!1,reason:"no conditions matched",direction:n,navAction:he.Navigate}:{success:!1,reason:"wrapping blocked",direction:n,navAction:he.Navigate}:{success:!1,reason:"failed to find node to focus",direction:n,navAction:he.Navigate}}function _w(e,t){let n=!1,r,i=1;const o=Date.now();for(;!n||!r;)if(r=eN(e,t,i),n=!r.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return rD.warning("Failed to find next non-disabled node."),r;return r}function eN(e,t,n){const r=e.ancestorChain[e.ancestorChain.length-1]?.node;Pn.isDefined(r,"missing parent");const i=ti.isDefined(r.children[e.nodeCoords.y]),o=r.children.length>1&&(t===lr.Down||t===lr.Up),s=t===lr.Down||t===lr.Right?n:-1*n,a=s<0?X8:Q8,u=o?ch(e.nodeCoords.y+s,{min:0,max:r.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=ti.isDefined(r.children[u]),c=o?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:ch(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),f=r.children[u]?.[c],d=o?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:f,requiresWrapping:d,coords:{x:c,y:u}}}function tN(e,t,n){const r=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!r)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:he.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=_w(r,t),a=i?.navEntry.navParams.group?Sl(i.children):{node:i,coords:s},u=n?!0:!o;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:he.Pibling}:u?(na(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:o,coords:a.coords,direction:t,navAction:he.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:he.Pibling}}var Lt;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Lt||(Lt={}));const Gn={name:"data-nav",js(e){return e?`[${Gn.name}*="${e}"]`:`[${Gn.name}]`},css({baseSelector:e="",navValue:t}={}){return E`
            ${Qe(e)}${Qe(Gn.js(t))}
        `}},om="navEntry";function Vw(e){return om in e}function qw(e){if(Vw(e)){const t=e[om];return ti.instanceOf(t,Ww,"Invalid nav entry")}else return}function nN(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Lt.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class Ww{element;navParams;navTreeNode;navValue;eventListener=nN(this);constructor(t,n,r){this.element=t,this.navParams=r,this.attachListeners(),this.navController=n}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Pn.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Gn.name,""),gc(this.element)&&this.element.blur())}focus(t,n){const r=this.navValue,i=t===(r===Lt.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Lt.Focused),gc(this.element)||this.element.focus()):(this.removeNavValue(Lt.Focused),gc(this.element)&&this.element.blur()),n||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,he.Focus)}activate(t){const n=this.navValue,r=t===(n===Lt.Active);if(!(this.navParams.group||this.navController.locked||r))return this.focus(t,!0),t?this.setNavValue(Lt.Active):this.setNavValue(Lt.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,he.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(Gn.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(Gn.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function zw(e,t){Object.entries(t).forEach(([n,r])=>{k.isBoolean(r)&&r?e.setAttribute(n,""):k.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const rN=Lr(class extends jr{element;lastKey;constructor(e){super(e),this.element=Aa(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),hn}});function iN(e){return"group"in e?Lt.Group:e.disabled?Lt.Disabled:""}function Qp(e,t={}){return rN(h(t),n=>{e.needsUpdate=!0;const r=!t.group&&!t.disabled;Pn.instanceOf(n,HTMLElement);const i={[Gn.name]:iN(t),tabindex:r?0:-1};zw(n,i);const o=qw(n)||new Ww(n,e,t);Vw(n)?(o.navParams=t,o.navController=e):n[om]=o,r?n.style.setProperty("cursor","pointer"):n.style.removeProperty("cursor")})}function oN(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:he.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:he.Enter};const n=t.position.node.children[0]?.[0];return n?(na(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:he.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:he.Enter}}function sN(e,t){return Kw([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function Kw(e,t,n){for(let r=0;r<t.length;r++){const i=t[r];for(let o=0;o<i.length;o++){const s=i[o],a={ancestorChain:e,nodeCoords:{x:o,y:r},node:s};if(n(a))return a;const u=Kw(e.concat(a),s.children,n);if(u)return u}}}function Zw(e,t){const n=sN(e,({node:r})=>!r.root&&r.navEntry===t);if(!n)throw new Error("Failed to find NavEntry in NavTree.");return n}function aN(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:he.Exit};const n=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:he.Exit};const{nodeCoords:r}=Zw(e,n.navEntry);return na(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:he.Exit,coords:r}}class uN extends rr()("nav-exit"){}class Gw extends rr()("nav-activate"){}class lN extends rr()("nav-focus"){}class cN extends rr()("nav-enter"){}class fN extends rr()("nav-navigate"){}class dN extends rr()("nav-navigate-pibling"){}function mN(e){return{root:!0,children:Yw(e)?.children||[]}}function Yw(e){const t=e.element;if(!(t instanceof HTMLElement))return;const n=qw(t),r=hN(e);if((n?.navParams.group?!!r.length:!1)||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function hN(e){const t=[];function n(r){if(r.navEntry?.navParams.group&&!r.children.length)return;if(!r.navEntry){r.children.forEach(a=>a.forEach(u=>n(u)));return}const i=r.navEntry.navParams.x,o=r.navEntry.navParams.y||0,s=la(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(r):s.withX.push({x:i,node:r})}return e.children.forEach(r=>{const i=Yw(r);i&&n(i)}),t.sort((r,i)=>r.y-i.y).map(r=>(r.withX.sort((i,o)=>i.x-o.x),r.withX.forEach(({x:i,node:o})=>{r.noX.splice(i,0,o)}),r.noX)).filter(k.isTruthy)}class Jw extends Uf{rootElement;options;constructor(t,n={}){super(),this.rootElement=t,this.options=n}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Sl(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,n,r){if(this.locked)return{success:!1,direction:void 0,navAction:r,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:r,reason:"No nav entry to operate on."};const i=Zw(this.getNavTree(),t);n?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:r,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===r&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:r,coords:i.nodeCoords};return n&&(r===he.Activate?this.dispatch(new Gw({detail:o})):r===he.Focus&&this.dispatch(new lN({detail:o}))),o}navigate({direction:t,allowWrapping:n}){if(this.locked)return{success:!1,direction:t,navAction:he.Navigate,reason:"NavController is locked."};const r=Xp(this.getNavTree(),this.currentNavEntry,t,n);return this.dispatch(new fN({detail:r})),r}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:he.Enter,reason:"NavController is locked."};const n=oN(this.getNavTree(),this.currentNavEntry);return!n.success&&t?this.activate():(this.dispatch(new cN({detail:n})),n)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:he.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:he.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Pn.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:he.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===he.Activate&&this.currentNavEntry.entry.focus(!0);const t=aN(this.getNavTree(),this.currentNavEntry);return this.dispatch(new uN({detail:t})),t}navigatePibling({allowWrapping:t,direction:n}){if(this.locked)return{success:!1,direction:n,navAction:he.Pibling,reason:"NavController is locked."};const r=this.getNavTree(),o={...this.currentNavEntry?tN(this.currentNavEntry,n,t):Xp(r,void 0,n,t),navAction:he.Pibling};return this.dispatch(new dN({detail:o})),o}buildNavTree(){const t=C8(this.rootElement),n=mN(t);return this.cachedNavTree=n,n}}const po=Ke()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>E`
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
    `,render({inputs:e}){function t(n){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,n)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(e.link?.newTab)return p`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${Fr(e.attributePassthrough?.a)}
                    style=${Je(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return p`
                <a
                    href=${n}
                    rel="noopener noreferrer"
                    ${Fr(e.attributePassthrough?.a)}
                    style=${Je(e.stylePassthrough?.a)}
                    ${q("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),e0={item:"menu-item"},Ms=Ke()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new Jw(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>E`
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
            background-color: ${J["vira-form-background-color"].value};
            color: ${J["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Kn};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${Gn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Lt.Focused})}, ${Gn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Lt.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${J["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${Gn.css({baseSelector:".menu-item:not(.disabled)",navValue:Lt.Focused})},
                ${Gn.css({baseSelector:".menu-item:not(.disabled)",navValue:Lt.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${J["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${un} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${as};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){G8(e.items);const n=e.items.map(r=>{const i=!!e.selected?.includes(r.id),o=k.isString(r.label)?p`
                      <${un.assign({label:r.label,selected:i,hideCheckIcon:e.hideCheckIcons})}></${un}>
                  `:r.label,s=r.disabled||!e.isMultiSelect&&i;return r.route?p`
                    <${po.assign({route:r.route})}
                        class="menu-item ${tn({disabled:!!r.disabled,selected:i})}"
                        ${Nr(e0.item)}
                        title=${Je(r.titleText||void 0)}
                        role="option"
                        ${Qp(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </${po}>
                `:p`
                    <button
                        class="menu-item ${tn({disabled:!!r.disabled,selected:i})}"
                        ${Nr(e0.item)}
                        title=${Je(r.titleText||void 0)}
                        role="option"
                        ${Qp(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </button>
                `});return p`
            ${n}
        `}});var sm=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(sm||{}),_u=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(_u||{});const Os=Ke()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${In["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${J["vira-form-background-color"].value};
            border: 1px solid ${J["vira-form-border-color"].value};
            color: ${J["vira-form-foreground-color"].value};
            ${Eo.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${Eo.menuShadowReversed}
            border-radius: ${In["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${In["vira-form-input-radius"].value};
        }
    `,render(){return p`
            <slot></slot>
        `}}),Qa=globalThis.document;class pN extends ww{constructor(){if(super({defaultValue:!!Qa?.hidden,equalityCheck:k.strictEquals}),!Qa)return;globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n,Qa));const t=n=>this.updateVisibility(n,Qa);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,n){const r=yN.includes(t.type),i=gN.includes(t.type),o=r?!0:i?!1:n.hasFocus()||!n.hidden;this.setValue(o)}}const gN=["blur","focusout","pagehide"],yN=["focus","focusin","pageshow"],wN=new pN;function bN(e,t){return wN.listen(e,t)}const t0={top:0,left:0,right:0,bottom:0};class Hw extends jf("hide-pop-up"){}class Xw extends rr()("nav-select"){}class $N{constructor(t,n){this.navController=t,this.options={...this.options,...n}}listenTarget=new Uf;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(t){let n=!1;const r=new ResizeObserver(()=>{n?this.removePopUp():n=!0});r.observe(t),this.cleanupCallbacks=[()=>{r.disconnect()},bN(!1,i=>{i||this.removePopUp()}),this.navController.listen(Gw,i=>{i.detail.success&&(this.listenTarget.dispatch(new Xw({detail:i.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),i.stopImmediatePropagation(),i.preventDefault())}),_c("mousedown",i=>{this.lastRootElement&&i.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),_c("keydown",i=>{const o=i.code;o==="Escape"?this.removePopUp():this.options.supportNavigation&&(o==="ArrowDown"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:lr.Down,allowWrapping:!1})):o==="ArrowUp"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:lr.Up,allowWrapping:!1})):o==="ArrowLeft"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:lr.Left,allowWrapping:!1})):o==="ArrowRight"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:lr.Right,allowWrapping:!1})):(o==="Enter"||o==="Return"||o==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(i.stopImmediatePropagation(),i.preventDefault()))})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Hw)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=S8(t);Pn.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=mn(t0,y=>o[y]),f=mn(t0,y=>{const C=l[y],D=c[y];return Math.abs(C-D)}),d=f.top>f.bottom+r.verticalDiffThreshold&&f.bottom<r.minDownSpace;return this.attachGlobalListeners(i),{popDown:!d,positions:{container:l,root:c,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Qr=(e=>(e.Left="left",e.Right="right",e.Both="both",e))(Qr||{});const pe=Ke()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new $N(new Jw(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>E`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Kn};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${ka({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${Vo};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${as}
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
    `,events:{navSelect:lt(),openChange:lt(),init:lt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:o}){e.popUpManager.listen(Hw,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!r.isDisabled){const s=n.shadowRoot.querySelector(".dropdown-wrapper");Pn.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(Xw,s=>{r.keepOpenAfterInteraction||Jp({open:!1,callback(a){t({showPopUpResult:a})},host:n,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:o,slotNames:s}){function a({emitEvent:y,open:C},D){if(n.showPopUpResult&&r.keepOpenAfterInteraction&&D){const S=o.shadowRoot.querySelector(".dropdown-trigger");if(S&&!D.composedPath().includes(S))return}Jp({open:C,callback(S){i({showPopUpResult:S}),y&&e(new t.openChange(S))},host:o,popUpManager:n.popUpManager})}r.isDisabled?a({open:!1,emitEvent:!1},void 0):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?a({emitEvent:!1,open:!1},void 0):r.z_debug_forceOpenState&&!n.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=r.horizontalAnchor==="right"&&n.showPopUpResult?E`
                      left: -${n.showPopUpResult.positions.diff.left}px;
                  `:E`
                      left: ${r.popUpOffset?.left||0}px;
                  `,l=n.showPopUpResult&&r.horizontalAnchor==="left"?E`
                      right: -${n.showPopUpResult.positions.diff.right}px;
                  `:E`
                      right: ${r.popUpOffset?.right||0}px;
                  `,c=E`
            ${u}
            ${l}
        `,f=n.showPopUpResult?n.showPopUpResult.popDown?E`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                      top: calc(100% + ${r.popUpOffset?.vertical||0}px);
                      ${c}
                  `:E`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                      bottom: calc(100% + ${r.popUpOffset?.vertical||0}px);
                      ${c}
                  `:void 0;function d(y){a({emitEvent:!0,open:!n.showPopUpResult},y)}return p`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${tn({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${q("keydown",y=>{!n.showPopUpResult&&y.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},y)})}
                ${q("click",y=>{y.detail===0&&d(y)})}
                ${q("mousedown",y=>{y.button===0&&d(y)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${tn({"right-aligned":r.horizontalAnchor==="right"})}"
                    style=${f}
                >
                    ${Ht(!!n.showPopUpResult,p`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),vN={menu:"menu-trigger-menu"},Jr=Ke()({tagName:"vira-menu-trigger",styles:E`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${pe} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{itemActivate:lt(),openChange:lt()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:n,dispatch:r,events:i}){return p`
            <${pe.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||Qr.Left})}
                class=${tn({open:!!t.showPopUpResult})}
                ${q(pe.events.init,o=>{n({navController:o.detail.navController,popUpManager:o.detail.popUpManager})})}
                ${q(pe.events.openChange,o=>{!!t.showPopUpResult!=!!o.detail&&r(new i.openChange(o.detail)),n({showPopUpResult:o.detail})})}
                ${q(pe.events.navSelect,o=>{const s=o.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);r(new i.itemActivate(Y8(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${pe.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?p`
                          <${Os.assign({direction:t.showPopUpResult.popDown?_u.Downwards:_u.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${pe.slotNames.popUp}
                              class=${tn({"full-width-menu":e.horizontalAnchor===Qr.Both})}
                          >
                              <${Ms.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Nr(vN.menu)}
                              ></${Ms}>
                          </${Os}>
                      `:te}
            </${pe}>
        `}}),Be=Ke()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>E`
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
    `,render({inputs:e}){return p`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var Bs=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Bs||{});const de=Ke()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Vo};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${_o["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${as};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Kn};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${In["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Ir["vira-interaction-animation-duration"].value},
                background-color
                    ${Ir["vira-interaction-animation-duration"].value},
                border-color ${Ir["vira-interaction-animation-duration"].value};

            ${ka({elementBorderSize:2})}
        }

        .empty-text {
            width: 0;
        }

        button ${L} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${L} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?p`
                  <${L.assign({icon:e.icon})}></${L}>
              `:te,n=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:p`
                  <span class="empty-text">&nbsp;</span>
              `;return p`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}});var yf=(e=>(e.Error="error",e.Success="success",e))(yf||{});const bc=Ke()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":"1px solid #d3d3d3","vira-card-border-radius":"16px","vira-card-padding":"16px"},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${t["vira-card-border-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${J["vira-form-error-foreground-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${J["vira-form-success-foreground-color"].value};
        }
    `,render(){return p`
            <slot></slot>
        `}}),DN=re({name:"Bell24Icon",svgTemplate:p`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),EN=re({name:"Chat24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),xN=re({name:"ChevronDown24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${w["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),am=re({name:"ChevronUp24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${w["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Qw=re({name:"CloseX24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),CN=re({name:"Commit24Icon",svgTemplate:p`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),AN=re({name:"Document24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),kN=re({name:"DocumentSearch24Icon",svgTemplate:p`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),FN=re({name:"DoubleChevron24Icon",svgTemplate:p`
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
                fill=${w["vira-icon-fill-color"].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),eb=re({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Nn=re({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),SN=re({name:"ExternalLink24Icon",svgTemplate:p`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),tb=re({name:"EyeClosed24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${w["vira-icon-fill-color"].value}
            stroke=${w["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),nb=re({name:"EyeOpen24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${w["vira-icon-fill-color"].value}
            stroke=${w["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),NN=re({name:"Filter24Icon",svgTemplate:p`
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
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),IN=re({name:"Link24Icon",svgTemplate:p`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />

            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),rb=re({name:"Loader24Icon",svgTemplate:p`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),PN=E`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Ir["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Ui=re({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${PN}
        </style>
        ${rb.svgTemplate}
    `}),TN=re({name:"Lock24Icon",svgTemplate:p`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Rs=re({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),MN=re({name:"Pencil24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),ON=re({name:"Shield24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),BN=re({name:"SortAscending24Icon",svgTemplate:p`
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
                fill=${w["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),RN=re({name:"SortDescending24Icon",svgTemplate:p`
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
                fill=${w["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),LN=re({name:"SpeakerLoud24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),jN=re({name:"SpeakerMedium24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),UN=re({name:"SpeakerMuted24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),_N=re({name:"SpeakerQuiet24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),VN=re({name:"Star24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Vu=re({name:"StatusFailure24Icon",svgTemplate:p`
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
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),qN=re({name:"StatusInProgress24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),WN=re({name:"StatusSuccess24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),zN=re({name:"StatusUnknown24Icon",svgTemplate:p`
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
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),KN=re({name:"StatusWarning24Icon",svgTemplate:p`
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
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),ZN=re({name:"Upload24Icon",svgTemplate:p`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ib=re({name:"X24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),wf={Bell24Icon:DN,Chat24Icon:EN,Check24Icon:rm,ChevronDown24Icon:xN,ChevronUp24Icon:am,CloseX24Icon:Qw,Commit24Icon:CN,Document24Icon:AN,DocumentSearch24Icon:kN,DoubleChevron24Icon:FN,Element16Icon:eb,Element24Icon:Nn,ExternalLink24Icon:SN,EyeClosed24Icon:tb,EyeOpen24Icon:nb,Filter24Icon:NN,Link24Icon:IN,Loader24Icon:rb,LoaderAnimated24Icon:Ui,Lock24Icon:TN,Options24Icon:Rs,Pencil24Icon:MN,Shield24Icon:ON,SortAscending24Icon:BN,SortDescending24Icon:RN,SpeakerLoud24Icon:LN,SpeakerMedium24Icon:jN,SpeakerMuted24Icon:UN,SpeakerQuiet24Icon:_N,Star24Icon:VN,StatusFailure24Icon:Vu,StatusInProgress24Icon:qN,StatusSuccess24Icon:WN,StatusUnknown24Icon:zN,StatusWarning24Icon:KN,Upload24Icon:ZN,X24Icon:ib},fe=Ke()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal},styles:({hostClasses:e})=>E`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${L} {
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
                font-weight: ${J["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${J["vira-form-selection-hover-background-color"].value};
            }
        }

        ${L} {
            ${w["vira-icon-stroke-width"].name}: 2px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${J["vira-form-border-color"].value};
            color: ${J["vira-form-foreground-color"].value};
            border-radius: ${In["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${ka({elementBorderSize:1})}

            &.checked {
                & ${L} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${J["vira-form-error-foreground-color"].value};
            }

            &:active {
                background-color: ${J["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${as};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:lt()},render({inputs:e,dispatch:t,events:n}){function r(){e.disabled||t(new n.valueChange(!e.value))}const i=e.label?p`
                  <span
                      class="label-text"
                      ${Fr(e.attributePassthrough?.text)}
                      style=${Je(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:te;return p`
            <label
                class=${tn({disabled:!!e.disabled})}
                ${Fr(e.attributePassthrough?.label)}
                style=${Je(e.stylePassthrough?.label)}
                ${q("mousedown",r)}
            >
                ${i}
                <span
                    class="custom-checkbox ${tn({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${Fr(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Je(e.stylePassthrough?.["custom-checkbox"])}
                    ${c8(r)}
                >
                    <${L.assign({icon:rm,fitContainer:!0})}
                        ${Fr(e.attributePassthrough?.[L.tagName])}
                        style=${Je(e.stylePassthrough?.[L.tagName])}
                    ></${L}>
                </span>
            </label>
        `}}),gr=Ke()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Kn};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Ir["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:lt()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:o}){const s=o.expanded?E`
                  height: ${e.contentHeight}px;
              `:E`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${q("click",()=>{r(new i.expandChange(!o.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${Fw(({contentRect:a})=>{n({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),$c={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},As=Ke()({tagName:"vira-dropdown",styles:E`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${Jr} {
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
                ${Ir["vira-interaction-animation-duration"].value} linear;
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
            ${Vo};
            border: 1px solid ${J["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${In["vira-form-input-radius"].value};
            background-color: ${J["vira-form-background-color"].value};
            color: ${J["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:lt(),openChange:lt()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:n,events:r,updateState:i}){const o=Vi(t.selected,c=>t.options.find(f=>f.id===c),k.isTruthy),s=t.icon?p`
                  <${L.assign({icon:t.icon})}
                      ${Nr($c.icon)}
                  ></${L}>
              `:te,a=!o.length,u=t.selectionPrefix&&!a?p`
                      <span class="selected-label-prefix" ${Nr($c.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:te,l=a?t.placeholder||"":t.isMultiSelect&&o.length>1?`${o.length} Selected`:o[0]?.label||"";return p`
            <${Jr.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||Qr.Both})}
                ${q(Jr.events.openChange,c=>{i({showPopUpResult:c.detail}),n(new r.openChange(c.detail))})}
                ${q(Jr.events.itemActivate,c=>{n(new r.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${tn({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Nr($c.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${tn({"using-placeholder":a})}"
                        title=${Je(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${L.assign({icon:am})}
                            class="trigger-icon"
                        ></${L}>
                    </span>
                </div>
            </${Jr}>
        `}}),Mi=Ke()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>E`
        :host {
            color: ${J["vira-form-error-foreground-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return p`
            <slot></slot>
        `}});function bf({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(n=>bf({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function GN({value:e,allowed:t,blocked:n}){const r=t?bf({input:e,matcher:t}):!0,i=n?bf({input:e,matcher:n}):!1;return r&&!i}function $f(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(GN({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function YN({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){const o=Ni(n,HTMLInputElement),s=k.hasKey(n,"data")&&Ov.isString(n.data)||"";if(s){const{blocked:u}=$f({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&r(u)}const a=$f({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==a&&(o.value=a),t!==a&&i(a)}var xo=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(xo||{});const at=Ke()({tagName:"vira-input",cssVars:{"vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>E`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${J["vira-form-foreground-color"].value};
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
                    font-weight: ${J["vira-form-label-font-weight"].value};
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
                ${Kn};
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
                ${Vo};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Kn};
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
                border-radius: ${In["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${J["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Kn};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${In["vira-form-input-radius"].value};
                background-color: ${J["vira-form-background-color"].value};
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
                ${Kn};
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
                    ${ka({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${J["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${J["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${J["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Vo};
            }

            button {
                ${Kn};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Ir["vira-interaction-animation-duration"].value};
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
                    border-color: ${J["vira-form-error-foreground-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & label,
                & .input-wrapper {
                    cursor: not-allowed;
                }

                & input,
                & .wrapper-border,
                & input::placeholder {
                    ${as};
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:lt(),inputBlocked:lt()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Pi(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i,host:o})=>{const{filtered:s}=$f({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?p`
                  <${L.assign({icon:e.icon})} class="left-side-icon"></${L}>
              `:te,u=e.fitText?E`
                  width: ${n.forcedInputWidth}px;
              `:te,l=q("mousedown",d=>{const y=Ni(d,HTMLElement,{useOriginalTarget:!0}),C=ti.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);y!==C&&(d.preventDefault(),C.focus())}),c=e.disableBrowserHelps||e.type==="password",f=p`
            <span class="input-wrapper" ${e.label?te:l}>
                ${a}
                ${Ht(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${Fw(({contentRect:d})=>{r({forcedInputWidth:d.width})})}
                        >
                            <pre>${s||e.placeholder||te}</pre>
                        </span>
                    `)}

                <input
                    id=${Je(e.label?n.randomId:void 0)}
                    aria-label=${Je(e.label||void 0)}
                    autofocus=${!1}
                    type=${JN(e.type,n.showPassword)}
                    style=${u}
                    autocomplete=${Je(c?"off":void 0)}
                    autocorrect=${Je(c?"off":void 0)}
                    autocapitalize=${Je(c?"off":void 0)}
                    spellcheck=${Je(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${q("input",d=>{YN({inputs:e,previousValue:s,event:d,inputBlockedCallback(y){t(new i.inputBlocked(y))},newValueCallback(y){t(new i.valueChange(y))}})})}
                    placeholder=${Je(e.placeholder||void 0)}
                    ${Fr(e.attributePassthrough)}
                />

                ${Ht(!!(e.showClearButton&&e.value),p`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${q("mousedown",d=>{d.stopImmediatePropagation(),d.preventDefault()})}
                            ${q("click",()=>{t(new i.valueChange(""))})}
                        >
                            <${L.assign({icon:Qw})}></${L}>
                        </button>
                    `)}
                ${Ht(e.type==="password",p`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${q("mousedown",d=>{d.stopImmediatePropagation(),d.preventDefault()})}
                            ${q("click",()=>{r({showPassword:!n.showPassword})})}
                        >
                            <${L.assign({icon:n.showPassword?nb:tb})}></${L}>
                        </button>
                    `)}
                ${Ht(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?p`
                <label for=${n.randomId} ${l}>
                    <span class="input-label">${e.label}</span>
                    ${f}
                </label>
            `:f}});function JN(e,t){return e==="password"&&t?"text":e||"text"}const Ve=Ke()({tagName:"vira-select",state(){return{randomId:Pi(32)}},events:{valueChange:lt()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${J["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Kn};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${In["vira-form-input-radius"].value};
            background-color: ${J["vira-form-background-color"].value};
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
                    ${ka({elementBorderSize:0,noNesting:!0})}
                }

                &.placeholder {
                    color: ${J["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${t["vira-select-icon-padding"].value};
                }
            }

            & ${L} {
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
                border-radius: ${In["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${J["vira-form-border-color"].value};
                transition: border
                    ${Ir["vira-interaction-animation-duration"].value};
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
                font-weight: ${J["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & label {
                cursor: not-allowed;
            }

            & select,
            & .wrapper-border {
                ${as}
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${J["vira-form-error-foreground-color"].value};
            }
        }
    `,render({inputs:e,state:t,dispatch:n,events:r}){const i=e.value||void 0,o=e.placeholder||i==null?p`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:te,s=p`
            <span class="select-wrapper">
                <select
                    .value=${Je(i)}
                    class=${tn({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Je(e.label?t.randomId:void 0)}
                    aria-label=${Je(e.label||void 0)}
                    aria-disabled=${Je(e.disabled?"true":void 0)}
                    ${q("input",a=>{const u=Ni(a,HTMLSelectElement),l=u.value;u.value!==i&&(u.selectedIndex=e.options.findIndex(c=>c.value===i)),n(new r.valueChange(l))})}
                    ${Fr(e.attributePassthrough?.select)}
                >
                    ${o}
                    ${e.options.map(a=>p`
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

                <${L.assign({icon:e.icon})} class="input-icon"></${L}>
                <${L.assign({icon:am})} class="trigger-icon"></${L}>
            </span>
        `;return e.label?p`
                <label for=${t.randomId} ${Fr(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}});var Ot=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.Email="email",e.Select="select",e.Checkbox="checkbox",e))(Ot||{});const qn=Ke()({tagName:"vira-form",events:{valueChange:lt()},styles:E`
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
    `,render({inputs:e,dispatch:t,events:n}){const r=Ju(e.fields).map(([i,o])=>o.type==="checkbox"?p`
                        <${fe.assign({value:o.value,disabled:o.disabled,hasError:o.hasError,label:o.label})}
                            ${o.testId?Nr(o.testId):te}
                            ${q(fe.events.valueChange,s=>{t(new n.valueChange({key:i,...o,value:s.detail}))})}
                        ></${fe}>
                    `:o.type==="select"?p`
                        <${Ve.assign({options:o.options,value:o.value,placeholder:o.placeholder,disabled:o.disabled,label:o.label,hasError:o.hasError,icon:o.icon})}
                            ${o.testId?Nr(o.testId):te}
                            ${q(Ve.events.valueChange,s=>{t(new n.valueChange({key:i,...o,value:s.detail}))})}
                        ></${Ve}>
                    `:p`
                        <${at.assign({value:o.value,disabled:o.disabled,hasError:o.hasError,icon:o.icon,label:o.label,placeholder:o.placeholder,showClearButton:e.showClearButtons,attributePassthrough:o.isUsername?{autocomplete:"username"}:o.type==="new-password"?{autocomplete:"new-password"}:o.type==="existing-password"?{autocomplete:"password"}:o.type==="email"?{autocomplete:"email"}:{},type:["new-password","existing-password"].includes(o.type)?xo.Password:o.type==="email"?xo.Email:xo.Default})}
                            ${o.testId?Nr(o.testId):te}
                            ${q(at.events.valueChange,s=>{t(new n.valueChange({key:i,...o,value:s.detail}))})}
                        ></${at}>
                    `);return p`
            <form ${q("submit",i=>i.preventDefault())}>
                ${r}
                <slot></slot>
            </form>
        `}}),qr=Ke()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:lt(),imageError:lt()},styles:({hostClasses:e})=>E`
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
    `,render({inputs:e,state:t,updateState:n,dispatch:r,events:i,slotNames:o}){const s=e.imageUrl,a=t.erroredUrls[s]?p`
                  <slot class="status-wrapper" name=${o.error}>
                      <${L.assign({icon:Vu})} class="error"></${L}>
                  </slot>
              `:t.loadedUrls[s]?void 0:p`
                    <slot class="status-wrapper" name=${o.loading}>
                        <${L.assign({icon:Ui})}></${L}>
                    </slot>
                `;return p`
            ${Ht(!!a,a)}
            <img
                class=${tn({hidden:!!a})}
                ${q("load",async()=>{e._debugLoadDelay&&await Oi(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[s]:!0}}),r(new i.imageLoad)})}
                ${q("error",async u=>{e._debugLoadDelay&&await Oi(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[s]:!0}}),r(new i.imageError(u.error))})}
                src=${s}
            />
        `}}),HN=["pagehide","pageshow","popstate"],yr=Ke()({tagName:"vira-modal",events:{modalClose:lt()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-modal-backdrop-filter":"blur(3px)","vira-modal-subtitle-color":"#7E7E7E","vira-modal-close-button-hover-radius":"8px","vira-modal-close-button-hover-background-color":"#E4E4E4"},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${im};
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
            ${Eo.modal}

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
                        ${Kn};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${t["vira-modal-close-button-hover-radius"].value};

                        &:hover {
                            background-color: ${t["vira-modal-close-button-hover-background-color"].value};
                        }

                        & ${L} {
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
    `,render({inputs:e,state:t,updateState:n,events:r,dispatch:i,slotNames:o}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),n({previousOpenValue:e.open}),e.open)){const a=HN.map(u=>_c(u,()=>{i(new r.modalClose)}));n({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),i(new r.modalClose))}return p`
            <dialog
                ${Lu(a=>{n({dialogElement:ti.instanceOf(a,HTMLDialogElement)})})}
                ${q("close",()=>{s()})}
                ${q("click",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Lu(a=>{n({contentElement:ti.instanceOf(a,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${o.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?p`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:te}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${q("click",()=>{t.dialogElement?.close()})}
                        >
                            <${L.assign({icon:ib})}></${L}>
                        </button>
                    </div>
                    ${e.open?p`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:te}
                </div>
            </dialog>
        `}}),Bt=Ke()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>E`
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
    `,render({inputs:e,host:t}){const n=e.min||0,i=(e.max||100)-n,o=e.value-n,s=iD(Math.round(o/i*100),{min:0,max:100});return zw(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),p`
            <div
                class="progress-bar"
                style=${s?E`
                          width: ${s}%;
                      `:E`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function ob(e){return r8({async updateCallback(t,n){if(n&&t in n.cache)return{cache:n.cache,element:n.cache[t],key:t};const r=await e[t]();return{cache:{...n?.cache,[t]:r},element:r,key:t}}})}function sb(e,{ready:t,loading:n,error:r,key:i}){return i&&e.update(i),e.value instanceof Error?r(e.value):e.value instanceof Promise?n(e.value.then(o=>({[o.key]:o.element}))):t({[e.value.key]:e.value.element})}const Rn=Sw(),kn=Rn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>E`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const n=e.router?.createRouteUrl({...e.route})??"#";return p`
            <a
                href=${n}
                ${q("click",r=>{(!e.router||Uw(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new Uu(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function XN(e,t){return e.entry.entryType===vt.Root?!1:e.entry.entryType===vt.Page||k.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:k.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const vr=Rn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${me["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${me["element-book-nav-hover-background-color"].value};
            color: ${me["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${me["element-book-nav-active-background-color"].value};
            color: ${me["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${kn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${me["element-book-nav-selected-background-color"].value};
            color: ${me["element-book-nav-selected-foreground-color"].value};
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

        ${L} {
            display: inline-flex;
            color: ${me["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!XN(n,e.selectedPath))return;const r=E`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${r}>
                    <${kn.assign({router:e.router,route:{paths:[Gt.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${tn({"title-row":!0,selected:e.selectedPath?k.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Ht($o(n,vt.ElementExample),p`
                                    <${L.assign({icon:eb})}></${L}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${kn}>
                </li>
            `});return p`
            <${kn.assign({route:ko,router:e.router})}>
                <slot name=${ur.NavHeader}>Book</slot>
            </${kn}>
            <ul>
                ${t}
            </ul>
        `}});async function QN(e){await gf(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await k8(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ai=Rn()({tagName:"book-error",styles:E`
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
    `,render({inputs:e}){return(k.isArray(e.message)?e.message:[e.message]).map(n=>p`
                <p>${n}</p>
            `)}}),ra=Rn()({tagName:"book-page-controls",events:{controlValueChange:lt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${me["element-book-page-foreground-faint-level-1-color"].value};
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

        ${at} {
            height: 24px;
            max-width: 128px;
        }

        ${L}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],o)=>{if(i.controlType===H.Hidden)return"";const s=eI(e.currentValues[r],i,a=>{const u=k.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[r]:a}}))});return p`
                    <div class="control-wrapper">
                        ${Ht(o===0,p`
                                <${L.assign({icon:Rs})}
                                    class="options-icon"
                                ></${L}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function eI(e,t,n){return io(t,H.Hidden)?"":io(t,H.Checkbox)?p`
            <input
                type="checkbox"
                ?checked=${e}
                ${q("input",r=>{const i=Ni(r,HTMLInputElement);n(i.checked)})}
            />
        `:io(t,H.Color)?p`
            <input
                type="color"
                .value=${e}
                ${q("input",r=>{const i=Ni(r,HTMLInputElement);n(i.value)})}
            />
        `:io(t,H.Text)?p`
            <${at.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${q(at.events.valueChange,r=>{n(r.detail)})}
            ></${at}>
        `:io(t,H.Number)?p`
            <input
                type="number"
                .value=${e}
                ${q("input",r=>{const i=Ni(r,HTMLInputElement);n(i.value)})}
            />
        `:io(t,H.Dropdown)?p`
            <select
                .value=${e}
                ${q("input",r=>{const i=Ni(r,HTMLSelectElement);n(i.value)})}
            >
                ${t.options.map(r=>p`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const n0=Rn()({tagName:"book-breadcrumbs",styles:E`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,i)=>{const o=r>=i.length-1,s=i.slice(0,r+1),a=o?"":p`
                      <span class="spacer">&gt;</span>
                  `;return p`
                <${kn.assign({route:{hash:void 0,search:void 0,paths:[Gt.Book,...s]},router:e.router})}>
                    ${n}
                </${kn}>
                ${a}
            `}):p`
                &nbsp;
            `}}),vc=Rn()({tagName:"book-breadcrumbs-bar",styles:E`
        :host {
            border-bottom: 1px solid
                ${me["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${me["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return p`
            ${Ht(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${n0.assign({currentRoute:e.currentRoute,router:e.router})}></${n0}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${q("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=r.value;await Oi({milliseconds:200}),r.value===i&&(r.value?t(new Uu({paths:[Gt.Search,encodeURIComponent(r.value)]})):t(new Uu(ko)))})}
            />
        `}}),r0=Rn()({tagName:"book-entry-description",styles:E`
        :host {
            color: ${me["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${me["element-book-page-foreground-color"].value};
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>p`
                <p>${t}</p>
            `)}}),i0=Rn()({tagName:"book-page-wrapper",styles:E`
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

        ${kn} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[Gt.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?iy(e.pageNode.entry.errors):void 0;return r&&console.error(r),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${kn.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${kn}>
                    ${r?p`
                              <${ai.assign({message:r.message})}></${ai}>
                          `:p`
                              <${r0.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${r0}>
                              <${ra.assign({config:e.pageNode.entry.controls,currentValues:qf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ra}>
                          `}
                </div>
            </div>
        `}}),eu=Rn()({tagName:"book-element-example-controls",styles:E`
        :host {
            display: flex;
            color: ${me["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[Gt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${kn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${kn}>
        `}}),o0=Symbol("unset-internal-state"),s0=Rn()({tagName:"book-element-example-viewer",state(){return{isUnset:o0}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw iy(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===o0&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return p`
                ${Ht(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",yt(r)),console.error(r),p`
                <${ai.assign({message:`${t.elementExampleNode.entry.title} failed: ${yt(r)}`})}></${ai}>
            `}},options:{allowPolymorphicState:!0}}),a0=Rn()({tagName:"book-element-example-wrapper",styles:E`
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

        ${eu} {
            color: ${me["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${eu} {
            color: ${me["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${eu.assign(uD(e,["currentPageControls"]))}></${eu}>
                <${s0.assign(e)}></${s0}>
            </div>
        `}});function ab(e,t,n,r){const i=Vc(n,r),o=[];if(i){const s=ab(e,t,i,r);s&&o.push(s)}if($o(n,vt.Page)&&!e.includes(n)){const s=qf(t,n.fullUrlBreadcrumbs);o.push({config:n.entry.controls,current:s,breadcrumbs:mn(s,()=>n.fullUrlBreadcrumbs)})}return o.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function tI({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:i,originalTree:o}){if(!e.length&&r)return[p`
                No results
            `];const s=k.isLengthAtLeast(e,1)?ab(e,i,e[0],o):void 0,a=s&&Object.values(s.config).length&&k.isLengthAtLeast(e,1)?p`
                  <${ra.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${ra}>
              `:te,u=o8(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if($o(l,vt.Page))return p`
                    <${i0.assign({isTopLevel:t,pageNode:l,controls:i,router:n})}
                        class="block-entry"
                    ></${i0}>
                `;if($o(l,vt.ElementExample)){const c=qf(i,l.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${a0.assign({elementExampleNode:l,currentPageControls:c,router:n})}
                        class="inline-entry ${tn({"block-entry":l.entry.isVertical})}"
                    ></${a0}>
                `}else return $o(l,vt.Root)?te:p`
                    <${ai.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${ai}>
                `});return[a,u]}const lo=Rn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:E`
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

        ${vc} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Ir["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:lt()},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{const o=qc(e.currentRoute.paths),s=tI({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return p`
            <${vc.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${vc}>

            ${Ht(e.showLoading,p`
                    <div
                        ${Lu(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${L.assign({icon:Ui})}></${L}>
                    </div>
                    ${Ht(!!r.lastElement,p`
                            ${r.lastElement}
                            <slot name=${ur.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${Lu(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${ur.Footer}></slot>
                `)}
        `}});function nI(e,t,n){const r=u0(e,t);return r.length?r:(n(ko),u0(e,ko.paths))}function u0(e,t){return e.filter(n=>yD({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const Dc=Ca()({tagName:"element-book-app",state(){return{currentRoute:ko,router:void 0,loading:!0,colors:{config:void 0,theme:qp(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:lt()},styles:E`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${me["element-book-page-background-color"].value};
            color: ${me["element-book-page-foreground-color"].value};
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

        ${lo} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${vr} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await l0(e,qc(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:o})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const f=s(c);return!k.jsonEquals(e.currentRoute,f)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(k.isTruthy).join(" - "))}function l(c){if(!a(c))return;const f=s(c);e.router?e.router.setRoute(f):r({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!k.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(f.paths))}try{if(t.elementBookRoutePaths&&!k.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const A=K8(t.internalRouterConfig.basePath);r({router:A}),A.listen(!0,N=>{r({currentRoute:N})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!k.jsonEquals(c,e.colors.config)){const A=qp(c);r({colors:{config:c,theme:A}}),JD(n,A)}const f=t._debug??!1,d=DD({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:hy(d.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const y=qc(e.currentRoute.paths),D=(y?M8({flattenedNodes:d.flattenedNodes,searchQuery:y}):void 0)??nI(d.flattenedNodes,e.currentRoute.paths,l);u(D[0]?.entry.title);const S=e.treeBasedControls?.controls;return S?(t._debug&&console.info({currentControls:S}),p`
                <div
                    class="root"
                    ${q(Uu,async A=>{const N=A.detail;if(!a(N))return;if(r({loading:!0}),l(N),!(n.shadowRoot.querySelector(vr.tagName)instanceof vr))throw new TypeError(`Failed to find child '${vr.tagName}'`);await l0(n,y,e.currentRoute)})}
                    ${q(ra.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const N=xD(S,A.detail.fullUrlBreadcrumbs,A.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:N}})})}
                >
                    <${vr.assign({flattenedNodes:d.flattenedNodes,router:e.router,selectedPath:y?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${ur.NavHeader}
                            slot=${ur.NavHeader}
                        ></slot>
                    </${vr}>
                    <${lo.assign({controls:S,currentNodes:D,currentRoute:e.currentRoute,debug:f,originalTree:d.tree,router:e.router,showLoading:e.loading})}
                        ${q(lo.events.loadingRender,async A=>{await gf();const N=n.shadowRoot.querySelector(lo.tagName);N?N.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${lo.tagName}' for scrolling.`),await gf(),r({loading:!A.detail})})}
                    >
                        <slot
                            name=${ur.Footer}
                            slot=${ur.Footer}
                        ></slot>
                    </${lo}>
                </div>
            `):p`
                    <${ai.assign({message:"Failed to generate page controls."})}></${ai}>
                `}catch(c){return console.error(c),p`
                <p class="error">${yt(c)}</p>
            `}}});async function l0(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(vr.tagName);if(!(r instanceof vr))throw new TypeError(`Failed to find child '${vr.tagName}'`);await QN(r)}const Ze=Ee({title:"Elements",parent:void 0}),ub=Ee({title:"Styles",parent:void 0}),lb=Ee({title:"Util",parent:void 0}),rI=Ee({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:H.Color,initValue:""},"Fill Color":{controlType:H.Color,initValue:""},"Stroke Width":{controlType:H.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(wf).forEach(t=>{e({title:t.name,styles:E`
                    :host(:hover) ${L} {
                        background-color: #f2f2f2;
                    }

                    ${L} {
                        padding: 8px;
                        border-radius: ${In["vira-form-input-radius"].value};
                    }
                `,render({controls:n}){const r=E`
                        ${w["vira-icon-fill-color"].name}: ${Qe(n["Fill Color"]||"inherit")};
                        ${w["vira-icon-stroke-color"].name}: ${Qe(n["Stroke Color"]||"inherit")};
                        ${w["vira-icon-stroke-width"].name}: ${Qe(n["Stroke Width"]?sy(n["Stroke Width"]):"inherit")};
                    `;return p`
                        <${L.assign({icon:t})} style=${r}></${L}>
                    `}})})}}),cb={async element1(){return await Oi({seconds:2}),(await Du(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-BbmUOCmF.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await Oi({seconds:2}),(await Du(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-BaKTXi-z.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},c0=Ca()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:ob(cb)}},render({state:e,inputs:t}){return sb(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(n){return p`
                    <${Mi}>
                        ${qo("Failed to import element",yt(n))}
                    </${Mi}>
                `},loading(){return p`
                    <${L.assign({icon:Ui})}></${L}>
                `},ready(n){if(n.element1)return p`
                        <${n.element1}></${n.element1}>
                    `;if(n.element2)return p`
                        <${n.element2.assign({userName:"John"})}></${n.element2}>
                    `;Pn.never("The error element will always error")}})}}),f0=Ca()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:ob(cb)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),sb(e.dynamicElements,{error(n){return p`
                    <${Mi}>
                        ${qo("Failed to import element",yt(n))}
                    </${Mi}>
                `},loading(){return p`
                    <${L.assign({icon:Ui})}></${L}>
                `},ready(n){if(n.element1)return p`
                        <${n.element1}></${n.element1}>
                    `;if(n.element2)return p`
                        <${n.element2.assign({userName:"John"})}></${n.element2}>
                    `;Pn.never("The error element will always error")}})}}),d0=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],iI=Ee({parent:lb,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:E`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:n}){return p`
                    <${Ve.assign({value:String(t.value),options:d0})}
                        ${q(Ve.events.valueChange,r=>{const i=Number(r.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);n({value:i})})}
                    ></${Ve}>
                    <${c0.assign({numberValue:t.value})}></${c0}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:E`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:n}){return p`
                    <${Ve.assign({value:String(t.value),options:d0})}
                        ${q(Ve.events.valueChange,r=>{const i=Number(r.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);n({value:i})})}
                    ></${Ve}>
                    <${f0.assign({numberValue:t.value})}></${f0}>
                `}})}}),oI=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:p`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:E`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:E`
            ${un} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],sI=Ee({title:un.tagName,parent:Ze,controls:{Selected:{controlType:H.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:H.Text,initValue:""}},defineExamples({defineExample:e}){oI.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:n}){const r={label:n.Label||t.inputs.label,selected:n.Selected?n.Selected==="all":t.inputs.selected};return t.customTemplate?p`
                            <${un.assign(r)}>
                                ${t.customTemplate}
                            </${un}>
                        `:p`
                            <${un.assign(r)}></${un}>
                        `}})})}}),vf=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new nm({sanitizeRoute(e){return e}})}}],aI=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:sm.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...vf,{id:"long",label:p`
                        <${un.assign({selected:!1})}>
                            <div
                                style=${E`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${un}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:Qr.Both,items:[...vf,{id:"long",label:p`
                        <${un.assign({selected:!1})}>
                            <div
                                style=${E`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${un}>
                    `}]}}],uI=Ee({parent:Ze,title:Jr.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){aI.forEach(t=>{e({title:t.title,styles:E`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return p`
                        <${Jr.assign({items:vf,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${Jr}>
                    `}})})}}),fb=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],lI=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...fb,{id:4,label:"link here",route:{route:{paths:["test"]},router:new nm({sanitizeRoute(e){return e}})}}]}}],cI=Ee({parent:Ze,title:Ms.tagName,defineExamples({defineExample:e}){lI.forEach(t=>{e({title:t.title,render(){return p`
                        <${Ms.assign({isMultiSelect:!1,navController:void 0,items:fb,selected:[],...t.inputs})}></${Ms}>
                    `}})})}}),db=[];zn(_u).forEach(e=>{zn(sm).forEach(t=>{db.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const fI=Ee({parent:Ze,title:Os.tagName,defineExamples({defineExample:e}){db.forEach(t=>{e({title:t.title,styles:E`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return p`
                        <${Os.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${Os}>
                    `}})})}}),dI=Ee({parent:Ze,title:pe.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:E`
                ${pe} {
                    ${_o["vira-focus-outline-border-radius"].name}: 0;
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
            `,render(){return p`
                    <${pe.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${pe.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${pe.slotNames.popUp}>Pop up!</div>
                    </${pe}>
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
            `,render(){return p`
                    <${pe.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${pe.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${pe.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${pe}>
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
            `,render(){return p`
                    <${pe.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Qr.Right})}>
                        <div slot=${pe.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${pe.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${pe}>
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
            `,render(){return p`
                    <${pe.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Qr.Left})}>
                        <div slot=${pe.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${pe.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${pe}>
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
            `,render(){return p`
                    <${pe.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Qr.Right})}>
                        <div slot=${pe.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${pe.slotNames.popUp}>not long</div>
                    </${pe}>
                `}})}}),mI=[{title:"menu shadow",styles:Eo.menuShadow},{title:"menu shadow reversed",styles:Eo.menuShadowReversed},{title:"modal",styles:Eo.modal}],hI=Ee({parent:ub,title:"Shadows",defineExamples({defineExample:e}){mI.forEach(t=>{e({title:t.title,styles:E`
                    .shadow-block {
                        height: 100px;
                        width: 256px;
                        margin: 32px;
                        ${t.styles}
                        border-radius: 8px;
                        background-color: white;
                    }
                `,render(){return p`
                        <div class="shadow-block"></div>
                    `}})})}}),pI=Ee({parent:Ze,title:Be.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:H.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return p`
                    <${Be.assign({text:"Text here",bold:!1})}></${Be}>
                `}}),e({title:"Bold",render(){return p`
                    <${Be.assign({text:"Text here",bold:!0})}></${Be}>
                `}}),e({title:"Dynamic",render({controls:t}){return p`
                    <${Be.assign({text:"Text here",bold:t.bolded})}></${Be}>
                `}}),e({title:"Resized",styles:E`
                ${Be} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return p`
                    <${Be.assign({text:"Not Bolded",bold:!1})}></${Be}>
                    <${Be.assign({text:"Bolded",bold:!0})}></${Be}>
                `}}),e({title:"Alignment",styles:E`
                ${Be} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return p`
                    <${Be.assign({text:"Not Bolded",bold:!1})}></${Be}>
                    <${Be.assign({text:"Bolded",bold:!0})}></${Be}>
                `}}),e({title:"Stylized",styles:E`
                ${Be} {
                    text-decoration: underline;
                }
            `,render(){return p`
                    <${Be.assign({text:"Not Bolded",bold:!1})}></${Be}>
                    <${Be.assign({text:"Bolded",bold:!0})}></${Be}>
                `}})}}),gI=Ee({parent:Ze,title:de.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:H.Color,initValue:de.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:H.Color,initValue:de.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:H.Color,initValue:de.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:H.Color,initValue:de.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:n,styles:r,inputs:i}){const o=r??E``;e({title:n,styles:o,render({controls:s}){const a=E`
                        ${de.cssVars["vira-button-primary-color"].name}: ${Qe(s["Primary color"]||"inherit")};
                        ${de.cssVars["vira-button-secondary-color"].name}: ${Qe(s["Secondary color"]||"inherit")};
                        ${de.cssVars["vira-button-primary-hover-color"].name}: ${Qe(s["Hover color"]||"inherit")};
                        ${de.cssVars["vira-button-primary-active-color"].name}: ${Qe(s["Active color"]||"inherit")};
                    `;return p`
                        <${de.assign({text:"hello",...i})}
                            style=${a}
                        ></${de}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Rs}}),t({title:"with expanding icon",inputs:{icon:Rs,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:Bs.Outline}}),t({title:"only icon",inputs:{icon:Rs,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:E`
                ${de} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:E`
                ${de} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:E`
                :host {
                    ${de.cssVars["vira-button-primary-color"].name}: pink;
                    ${de.cssVars["vira-button-secondary-color"].name}: purple;
                    ${de.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${de.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return p`
                    <${de.assign({text:"hello"})}></${de}>
                `}})}}),yI=[{title:"basic"},{title:"success",inputs:{cardState:yf.Success}},{title:"error",inputs:{cardState:yf.Error}},{title:"long",content:p`
            <p
                style=${E`
                    ${im}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],wI=Ee({parent:Ze,title:bc.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){yI.forEach(t=>{e({title:t.title,render(){return p`
                        <${bc.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${bc}>
                    `}})})}}),bI=Ee({parent:Ze,title:fe.tagName,controls:{Checked:{controlType:H.Checkbox,initValue:!1},Disabled:{controlType:H.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:n}){return p`
                    <${fe.assign({value:t.checked})}
                        ${q(fe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${fe}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:n}){return p`
                    <${fe.assign({value:t.checked})}
                        ${q(fe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${fe}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:n}){return p`
                    <${fe.assign({value:t.checked,hasError:!0})}
                        ${q(fe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${fe}>
                `}}),e({title:"disabled unchecked",render(){return p`
                    <${fe.assign({value:!1,disabled:!0})}></${fe}>
                `}}),e({title:"disabled checked",render(){return p`
                    <${fe.assign({value:!0,disabled:!0})}></${fe}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return p`
                    <${fe.assign({value:t.Checked,disabled:t.Disabled})}></${fe}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return p`
                    <${fe.assign({value:!0})}></${fe}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:n}){return p`
                    <${fe.assign({value:t.checked,label:"label goes here"})}
                        ${q(fe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${fe}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:n}){return p`
                    <${fe.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${q(fe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${fe}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:E`
                ${fe} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:n}){return p`
                    <${fe.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${q(fe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${fe}>
                `}})}}),$I=Ee({title:gr.tagName,parent:Ze,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:E`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>p`
                        <${gr.assign({expanded:!!n.expandedStates[i]})}
                            ${q(gr.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${gr.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${q("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${Ht(!!n.showMoreStates[i],p`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${gr}>
                    `)}}),e({title:"wider examples",styles:E`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>p`
                        <${gr.assign({expanded:!!n.expandedStates[i]})}
                            ${q(gr.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${gr.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${q("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${Ht(!!n.showMoreStates[i],p`
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
                        </${gr}>
                    `)}})}}),Ls=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],vI=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Ls,{id:42,label:p`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Ls,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:E`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:E`
            ${As} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Nn}}],DI=Ee({title:As.tagName,parent:Ze,controls:{Selected:{controlType:H.Dropdown,initValue:"",options:["",...Ls.map(e=>e.label)]},Prefix:{controlType:H.Text,initValue:""},"Force State":{controlType:H.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:H.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:H.Dropdown,initValue:"",options:["",...Object.keys(wf)]},Disabled:{controlType:H.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:H.Text,initValue:"Select something"}},defineExamples({defineExample:e}){vI.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:n,updateState:r,controls:i}){const o={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||Ls,selected:i.Selected?[Ls.find(s=>s.label===i.Selected)?.id].filter(k.isTruthy):n.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?wf[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return p`
                        <${As.assign(o)}
                            ${q(As.events.selectedChange,s=>{r({selected:s.detail})})}
                        ></${As}>
                    `}})})}}),EI=Ee({parent:Ze,title:Mi.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return p`
                    <${Mi}>Error Content</${Mi}>
                `}})}}),m0=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],xI=Ee({parent:Ze,title:qn.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:n}){const r={firstName:{type:Ot.Text,label:"First Name",value:t.firstName},lastName:{type:Ot.Text,label:"Last Name",value:t.lastName},subscribe:{type:Ot.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:Ot.Email,label:"Email Address",value:t.email},password:{type:Ot.NewPassword,label:"Password",value:t.password},userRole:{type:Ot.Select,label:"Role",options:m0,value:t.userRole}};return p`
                    <${qn.assign({fields:r})}
                        ${q(qn.events.valueChange,i=>{n({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${de.assign({text:"Cancel",buttonStyle:Bs.Outline})}></${de}>
                            <${de.assign({text:"Submit"})}></${de}>
                        </div>
                    </${qn}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:n}){const r={firstName:{type:Ot.Text,label:"First Name",value:t.firstName},lastName:{type:Ot.Text,label:"Last Name",value:t.lastName}};return p`
                    <${qn.assign({fields:r})}
                        ${q(qn.events.valueChange,i=>{n({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <${at.assign({value:"",label:"More stuff"})}></${at}>
                        <div class="buttons">
                            <${de.assign({text:"Cancel",buttonStyle:Bs.Outline})}></${de}>
                            <${de.assign({text:"Submit"})}></${de}>
                        </div>
                    </${qn}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${qn} {
                    width: 400px;
                }
            `,render({state:t,updateState:n}){const r={firstName:{type:Ot.Text,label:"First Name",value:t.firstName},lastName:{type:Ot.Text,label:"Last Name",value:t.lastName},subscribe:{type:Ot.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:Ot.Email,label:"Email Address",value:t.email},password:{type:Ot.NewPassword,label:"Password",value:t.password},userRole:{type:Ot.Select,label:"Role",options:m0,value:t.userRole}};return p`
                    <${qn.assign({fields:r})}
                        ${q(qn.events.valueChange,i=>{n({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${de.assign({text:"Cancel",buttonStyle:Bs.Outline})}></${de}>
                            <${de.assign({text:"Submit"})}></${de}>
                        </div>
                    </${qn}>
                `}})}}),CI=Ee({title:L.tagName,parent:Ze,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return p`
                    <${L.assign({icon:Nn})}></${L}>
                `}}),e({title:"using createColoredIcon",render(){return p`
                    <${L.assign({icon:Hp(Nn,{"vira-icon-stroke-color":"red"})})}></${L}>
                `}}),e({title:"fit container",styles:E`
                ${L} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return p`
                    <${L.assign({icon:Hp(Nn,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${L}>
                `}})}}),AI=Ee({title:qr.tagName,parent:Ze,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:E`
                    border-radius: 32px;
                `,loadingSlot:p`
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
                        <${L.assign({icon:Ui,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${L}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:E`
                    border-radius: 32px;
                `,errorSlot:p`
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
                        <${L.assign({icon:Vu,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${L}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:E`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:E`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:E`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:p`
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
                        <${L.assign({icon:Ui,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${L}>
                    </div>
                `,errorSlot:p`
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
                        <${L.assign({icon:Vu,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${L}>
                    </div>
                `}].forEach(n=>{e({title:n.title,styles:E`
                    ${qr} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${n.styles||E``}
                    }

                    ${n.allowReload?E`
                              ${qr} {
                                  cursor: pointer;
                              }

                              ${qr}:hover {
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
                `,state(){return{imageUrl:n.inputs.imageUrl}},render({state:r,updateState:i}){return p`
                        <${qr.assign({...n.inputs,imageUrl:r.imageUrl})}
                            ${q("click",()=>{n.allowReload&&i({imageUrl:`${n.inputs.imageUrl}?di=${Pi()}`})})}
                        >
                            ${n.loadingSlot?p`
                                      <div class="slot-wrapper" slot=${qr.slotNames.loading}>
                                          ${n.loadingSlot}
                                      </div>
                                  `:te}${n.errorSlot?p`
                                      <div class="slot-wrapper" slot=${qr.slotNames.error}>
                                          ${n.errorSlot}
                                      </div>
                                  `:te}
                        </${qr}>
                    `}})})}}),kI=Ee({title:at.tagName,parent:Ze,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:H.Color,initValue:J["vira-form-foreground-color"].default},"Placeholder color":{controlType:H.Color,initValue:J["vira-form-placeholder-color"].default},"Border color":{controlType:H.Color,initValue:J["vira-form-border-color"].default},"Focus color":{controlType:H.Color,initValue:_o["vira-focus-outline-color"].default},"Selection color":{controlType:H.Color,initValue:J["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:r,title:i,inputs:o}){e({title:i,styles:E`
                    ${r||E``}
                `,state(){return{value:o.value}},render({state:s,updateState:a,controls:u}){const l={[String(J["vira-form-foreground-color"].name)]:u["Text color"],[String(J["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(J["vira-form-border-color"].name)]:u["Border color"],[String(_o["vira-focus-outline-color"].name)]:u["Focus color"],[String(J["vira-form-text-selection-color"].name)]:u["Selection color"]},c=mn(l,(d,y)=>y||"inherit"),f=Object.entries(c).map(([d,y])=>[d,y].join(": ")+";").join(`
`);return p`
                        <${at.assign({...o,value:s.value})}
                            style=${f}
                            ${q(at.events.valueChange,d=>{a({value:d.detail}),console.info("changed:",d.detail)})}
                        ></${at}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Nn}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:E`
                    ${at} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Nn}},{title:"taller height",styles:E`
                    ${at} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Nn}},{title:"shorter height",styles:E`
                    ${at} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Nn}},{title:"max width",styles:E`
                    ${at} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:E`
                    ${at} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:xo.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:xo.Email,attributePassthrough:{autocomplete:"username"}}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:E`
                    ${at} {
                        width: unset;
                    }
                `}].forEach(t)}}),FI=Ee({title:po.tagName,parent:Ze,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:H.Color,initValue:""},"Hover color":{controlType:H.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:n,inputs:r}){e({title:n,render({controls:i}){const o=E`
                        ${po.cssVars["vira-link-hover-color"].name}: ${Qe(i["Hover color"]||"inherit")};
                        color: ${Qe(i["CSS Color"]||"inherit")};
                    `;return p`
                        <${po.assign(r)} style=${o}>My Link</${po}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(n,r){return console.info(n,r),!1}}}}})}}),SI=Ee({title:yr.tagName,parent:Ze,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:n}){return p`
                    <button
                        ${q("click",()=>{n({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${yr.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${q(yr.events.modalClose,()=>{n({modalOpen:!1})})}
                    >
                        Modal Content
                    </${yr}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:E`
                ${yr} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${yr.cssVars["vira-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:n}){return p`
                    <button
                        ${q("click",()=>{n({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${yr.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${q(yr.events.modalClose,()=>{n({modalOpen:!1})})}
                    >
                        Modal Content
                    </${yr}>
                `}})}}),NI=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:E`
            :host {
                ${Bt.cssVars["vira-progress-background-color"].name}: red;
                ${Bt.cssVars["vira-progress-foreground-color"].name}: black;
                ${Bt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Bt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:E`
            :host {
                ${Bt.cssVars["vira-progress-background-color"].name}: red;
                ${Bt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Bt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Bt} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:E`
            :host {
                ${Bt.cssVars["vira-progress-background-color"].name}: red;
                ${Bt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Bt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Bt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],II=Ee({parent:Ze,title:Bt.tagName,defineExamples({defineExample:e}){NI.forEach(t=>{e({title:t.title,styles:E`
                    ${t.styles||E``}
                `,render(){return p`
                        <${Bt.assign({value:50,...t.inputs})}></${Bt}>
                    `}})})}}),mt=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],PI=[{title:"basic",inputs:{options:mt}},{title:"with really long option",inputs:{options:[...mt,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:mt,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:mt,disabled:!0}},{title:"error",inputs:{options:mt,hasError:!0}},{title:"with icon",inputs:{options:mt,icon:Nn}},{title:"custom width",inputs:{options:mt},styles:E`
            ${Ve} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:mt,icon:Nn},styles:E`
            ${Ve} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:mt,icon:Nn},styles:E`
            ${Ve} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:mt,label:"Pick an option"}},{title:"with long label",inputs:{options:mt,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:mt,label:"Pick a really really really really long option"},styles:E`
            ${Ve} {
                width: unset;
            }
        `}],TI=Ee({parent:Ze,title:Ve.tagName,defineExamples({defineExample:e}){PI.forEach(t=>{e({title:t.title,styles:E`
                    ${t.styles||E``}
                `,state(){return{selected:void 0}},render({state:n,updateState:r}){return p`
                        <${Ve.assign({...t.inputs,value:n.selected??t.inputs.value})}
                            ${q(Ve.events.valueChange,i=>{r({selected:i.detail})})}
                        ></${Ve}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return p`
                    <${Ve.assign({options:mt,value:mt[0]?.value})}></${Ve}>
                `}}),e({title:"force update",render(){return p`
                    <${h0}></${h0}>
                `}})}}),h0=Ke()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const n=mt.findIndex(i=>i.value===t.value),r=ti.isDefined(mt[(n+1)%mt.length]).value;e({value:r}),console.info(`Forcing select to ${r}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return p`
            <${Ve.assign({options:mt,value:e.value})}></${Ve}>
        `}}),MI=[Ze,rI,ub,lb],OI=[pI,gI,wI,bI,$I,DI,EI,xI,CI,AI,kI,FI,sI,cI,uI,SI,fI,dI,II,TI,iI,hI].sort((e,t)=>e.title.localeCompare(t.title)),BI=[...MI,...OI];Ca()({tagName:"vira-book-app",styles:E`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Dc} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return p`
            <${Dc.assign({internalRouterConfig:{basePath:em("vira"),useInternalRouter:!0},pages:BI,themeColor:"#33ccff"})}>
                <h1 slot=${ur.NavHeader}>Vira</h1>
            </${Dc}>
        `}});export{Ca as d,p as h};
