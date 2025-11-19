(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var $t;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})($t||($t={}));function hp(e,t=n=>n){const n=new Map;return e.filter(r=>{const i=t(r);return n.get(i)?!1:(n.set(i,r),!0)})}class Df{diff(t,n,r={}){let i;typeof r=="function"?(i=r,r={}):"callback"in r&&(i=r.callback);const o=this.castInput(t,r),s=this.castInput(n,r),a=this.removeEmpty(this.tokenize(o,r)),u=this.removeEmpty(this.tokenize(s,r));return this.diffWithOptionsObj(a,u,r,i)}diffWithOptionsObj(t,n,r,i){var o;const s=N=>{if(N=this.postProcess(N,r),i){setTimeout(function(){i(N)},0);return}else return N},a=n.length,u=t.length;let l=1,c=a+u;r.maxEditLength!=null&&(c=Math.min(c,r.maxEditLength));const f=(o=r.timeout)!==null&&o!==void 0?o:1/0,d=Date.now()+f,y=[{oldPos:-1,lastComponent:void 0}];let C=this.extractCommon(y[0],n,t,0,r);if(y[0].oldPos+1>=u&&C+1>=a)return s(this.buildValues(y[0].lastComponent,n,t));let D=-1/0,S=1/0;const A=()=>{for(let N=Math.max(D,-l);N<=Math.min(S,l);N+=2){let j;const W=y[N-1],G=y[N+1];W&&(y[N-1]=void 0);let Le=!1;if(G){const ot=G.oldPos-N;Le=G&&0<=ot&&ot<a}const Ft=W&&W.oldPos+1<u;if(!Le&&!Ft){y[N]=void 0;continue}if(!Ft||Le&&W.oldPos<G.oldPos?j=this.addToPath(G,!0,!1,0,r):j=this.addToPath(W,!1,!0,1,r),C=this.extractCommon(j,n,t,N,r),j.oldPos+1>=u&&C+1>=a)return s(this.buildValues(j.lastComponent,n,t))||!0;y[N]=j,j.oldPos+1>=u&&(S=Math.min(S,N-1)),C+1>=a&&(D=Math.max(D,N+1))}l++};if(i)(function N(){setTimeout(function(){if(l>c||Date.now()>d)return i(void 0);A()||N()},0)})();else for(;l<=c&&Date.now()<=d;){const N=A();if(N)return N}}addToPath(t,n,r,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===n&&s.removed===r?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:n,removed:r,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:n,removed:r,previousComponent:s}}}extractCommon(t,n,r,i,o){const s=n.length,a=r.length;let u=t.oldPos,l=u-i,c=0;for(;l+1<s&&u+1<a&&this.equals(r[u+1],n[l+1],o);)l++,u++,c++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!o.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,n,r){return r.comparator?r.comparator(t,n):t===n||!!r.ignoreCase&&t.toLowerCase()===n.toLowerCase()}removeEmpty(t){const n=[];for(let r=0;r<t.length;r++)t[r]&&n.push(t[r]);return n}castInput(t,n){return t}tokenize(t,n){return Array.from(t)}join(t){return t.join("")}postProcess(t,n){return t}get useLongestToken(){return!1}buildValues(t,n,r){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let a=0,u=0,l=0;for(;a<s;a++){const c=i[a];if(c.removed)c.value=this.join(r.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let f=n.slice(u,u+c.count);f=f.map(function(d,y){const C=r[l+y];return C.length>d.length?C:d}),c.value=this.join(f)}else c.value=this.join(n.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return i}}function cm(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function fm(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function Ec(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function xc(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function ls(e,t){return Ec(e,t,"")}function Pa(e,t){return xc(e,t,"")}function dm(e,t){return t.slice(0,gb(e,t))}function gb(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);const i=Array(r);let o=0;i[0]=0;for(let s=1;s<r;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=n;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function cs(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function jr(e){const t=e.match(/^\s*/);return t?t[0]:""}const fu="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",yb=new RegExp(`[${fu}]+|\\s+|[^${fu}]`,"ug");class wb extends Df{equals(t,n,r){return r.ignoreCase&&(t=t.toLowerCase(),n=n.toLowerCase()),t.trim()===n.trim()}tokenize(t,n={}){let r;if(n.intlSegmenter){const s=n.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Array.from(s.segment(t),a=>a.segment)}else r=t.match(yb)||[];const i=[];let o=null;return r.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((n,r)=>r==0?n:n.replace(/^\s+/,"")).join("")}postProcess(t,n){if(!t||n.oneChangePerToken)return t;let r=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&mm(r,o,i,s),r=s,i=null,o=null)}),(i||o)&&mm(r,o,i,null),t}}const bb=new wb;function $b(e,t,n){return n?.ignoreWhitespace!=null&&!n.ignoreWhitespace?Eb(e,t,n):bb.diff(e,t,n)}function mm(e,t,n,r){if(t&&n){const i=jr(t.value),o=cs(t.value),s=jr(n.value),a=cs(n.value);if(e){const u=cm(i,s);e.value=xc(e.value,s,u),t.value=ls(t.value,u),n.value=ls(n.value,u)}if(r){const u=fm(o,a);r.value=Ec(r.value,a,u),t.value=Pa(t.value,u),n.value=Pa(n.value,u)}}else if(n){if(e){const i=jr(n.value);n.value=n.value.substring(i.length)}if(r){const i=jr(r.value);r.value=r.value.substring(i.length)}}else if(e&&r){const i=jr(r.value),o=jr(t.value),s=cs(t.value),a=cm(i,o);t.value=ls(t.value,a);const u=fm(ls(i,a),s);t.value=Pa(t.value,u),r.value=Ec(r.value,i,u),e.value=xc(e.value,i,i.slice(0,i.length-u.length))}else if(r){const i=jr(r.value),o=cs(t.value),s=dm(o,i);t.value=Pa(t.value,s)}else if(e){const i=cs(e.value),o=jr(t.value),s=dm(i,o);t.value=ls(t.value,s)}}class vb extends Df{tokenize(t){const n=new RegExp(`(\\r?\\n)|[${fu}]+|[^\\S\\n\\r]+|[^${fu}]`,"ug");return t.match(n)||[]}}const Db=new vb;function Eb(e,t,n){return Db.diff(e,t,n)}class xb extends Df{constructor(){super(...arguments),this.tokenize=Fb}equals(t,n,r){return r.ignoreWhitespace?((!r.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!r.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):r.ignoreNewlineAtEof&&!r.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(t,n,r)}}const Cb=new xb;function Ab(e,t,n){return Cb.diff(e,t,n)}function Fb(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let i=0;i<r.length;i++){const o=r[i];i%2&&!t.newlineIsToken?n[n.length-1]+=o:n.push(o)}return n}function hm(e){return pp(e,new Map)}function pp(e,t){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((r,i)=>r[0].localeCompare(i[0])).forEach(([r,i])=>{const o=pp(i,t);n[r]=o}),n}else return e}var kb=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,Sb=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,Nb=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Pl={Space_Separator:kb,ID_Start:Sb,ID_Continue:Nb},je={isSpaceSeparator(e){return typeof e=="string"&&Pl.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Pl.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Pl.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let Cc,Lt,vr,du,Qr,Zn,dt,Ef,Fs;var Ib=function(t,n){Cc=String(t),Lt="start",vr=[],du=0,Qr=1,Zn=0,dt=void 0,Ef=void 0,Fs=void 0;do dt=Pb(),Ob[Lt]();while(dt.type!=="eof");return typeof n=="function"?Ac({"":Fs},"",n):Fs};function Ac(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let i=0;i<r.length;i++){const o=String(i),s=Ac(r,o,n);s===void 0?delete r[o]:Object.defineProperty(r,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in r){const o=Ac(r,i,n);o===void 0?delete r[i]:Object.defineProperty(r,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let Q,Y,$s,gr,oe;function Pb(){for(Q="default",Y="",$s=!1,gr=1;;){oe=kr();const e=gp[Q]();if(e)return e}}function kr(){if(Cc[du])return String.fromCodePoint(Cc.codePointAt(du))}function k(){const e=kr();return e===`
`?(Qr++,Zn=0):e?Zn+=e.length:Zn++,e&&(du+=e.length),e}const gp={default(){switch(oe){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":k();return;case"/":k(),Q="comment";return;case void 0:return k(),xe("eof")}if(je.isSpaceSeparator(oe)){k();return}return gp[Lt]()},comment(){switch(oe){case"*":k(),Q="multiLineComment";return;case"/":k(),Q="singleLineComment";return}throw Ce(k())},multiLineComment(){switch(oe){case"*":k(),Q="multiLineCommentAsterisk";return;case void 0:throw Ce(k())}k()},multiLineCommentAsterisk(){switch(oe){case"*":k();return;case"/":k(),Q="default";return;case void 0:throw Ce(k())}k(),Q="multiLineComment"},singleLineComment(){switch(oe){case`
`:case"\r":case"\u2028":case"\u2029":k(),Q="default";return;case void 0:return k(),xe("eof")}k()},value(){switch(oe){case"{":case"[":return xe("punctuator",k());case"n":return k(),pi("ull"),xe("null",null);case"t":return k(),pi("rue"),xe("boolean",!0);case"f":return k(),pi("alse"),xe("boolean",!1);case"-":case"+":k()==="-"&&(gr=-1),Q="sign";return;case".":Y=k(),Q="decimalPointLeading";return;case"0":Y=k(),Q="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Y=k(),Q="decimalInteger";return;case"I":return k(),pi("nfinity"),xe("numeric",1/0);case"N":return k(),pi("aN"),xe("numeric",NaN);case'"':case"'":$s=k()==='"',Y="",Q="string";return}throw Ce(k())},identifierNameStartEscape(){if(oe!=="u")throw Ce(k());k();const e=Fc();switch(e){case"$":case"_":break;default:if(!je.isIdStartChar(e))throw pm();break}Y+=e,Q="identifierName"},identifierName(){switch(oe){case"$":case"_":case"‌":case"‍":Y+=k();return;case"\\":k(),Q="identifierNameEscape";return}if(je.isIdContinueChar(oe)){Y+=k();return}return xe("identifier",Y)},identifierNameEscape(){if(oe!=="u")throw Ce(k());k();const e=Fc();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!je.isIdContinueChar(e))throw pm();break}Y+=e,Q="identifierName"},sign(){switch(oe){case".":Y=k(),Q="decimalPointLeading";return;case"0":Y=k(),Q="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Y=k(),Q="decimalInteger";return;case"I":return k(),pi("nfinity"),xe("numeric",gr*(1/0));case"N":return k(),pi("aN"),xe("numeric",NaN)}throw Ce(k())},zero(){switch(oe){case".":Y+=k(),Q="decimalPoint";return;case"e":case"E":Y+=k(),Q="decimalExponent";return;case"x":case"X":Y+=k(),Q="hexadecimal";return}return xe("numeric",gr*0)},decimalInteger(){switch(oe){case".":Y+=k(),Q="decimalPoint";return;case"e":case"E":Y+=k(),Q="decimalExponent";return}if(je.isDigit(oe)){Y+=k();return}return xe("numeric",gr*Number(Y))},decimalPointLeading(){if(je.isDigit(oe)){Y+=k(),Q="decimalFraction";return}throw Ce(k())},decimalPoint(){switch(oe){case"e":case"E":Y+=k(),Q="decimalExponent";return}if(je.isDigit(oe)){Y+=k(),Q="decimalFraction";return}return xe("numeric",gr*Number(Y))},decimalFraction(){switch(oe){case"e":case"E":Y+=k(),Q="decimalExponent";return}if(je.isDigit(oe)){Y+=k();return}return xe("numeric",gr*Number(Y))},decimalExponent(){switch(oe){case"+":case"-":Y+=k(),Q="decimalExponentSign";return}if(je.isDigit(oe)){Y+=k(),Q="decimalExponentInteger";return}throw Ce(k())},decimalExponentSign(){if(je.isDigit(oe)){Y+=k(),Q="decimalExponentInteger";return}throw Ce(k())},decimalExponentInteger(){if(je.isDigit(oe)){Y+=k();return}return xe("numeric",gr*Number(Y))},hexadecimal(){if(je.isHexDigit(oe)){Y+=k(),Q="hexadecimalInteger";return}throw Ce(k())},hexadecimalInteger(){if(je.isHexDigit(oe)){Y+=k();return}return xe("numeric",gr*Number(Y))},string(){switch(oe){case"\\":k(),Y+=Tb();return;case'"':if($s)return k(),xe("string",Y);Y+=k();return;case"'":if(!$s)return k(),xe("string",Y);Y+=k();return;case`
`:case"\r":throw Ce(k());case"\u2028":case"\u2029":Bb(oe);break;case void 0:throw Ce(k())}Y+=k()},start(){switch(oe){case"{":case"[":return xe("punctuator",k())}Q="value"},beforePropertyName(){switch(oe){case"$":case"_":Y=k(),Q="identifierName";return;case"\\":k(),Q="identifierNameStartEscape";return;case"}":return xe("punctuator",k());case'"':case"'":$s=k()==='"',Q="string";return}if(je.isIdStartChar(oe)){Y+=k(),Q="identifierName";return}throw Ce(k())},afterPropertyName(){if(oe===":")return xe("punctuator",k());throw Ce(k())},beforePropertyValue(){Q="value"},afterPropertyValue(){switch(oe){case",":case"}":return xe("punctuator",k())}throw Ce(k())},beforeArrayValue(){if(oe==="]")return xe("punctuator",k());Q="value"},afterArrayValue(){switch(oe){case",":case"]":return xe("punctuator",k())}throw Ce(k())},end(){throw Ce(k())}};function xe(e,t){return{type:e,value:t,line:Qr,column:Zn}}function pi(e){for(const t of e){if(kr()!==t)throw Ce(k());k()}}function Tb(){switch(kr()){case"b":return k(),"\b";case"f":return k(),"\f";case"n":return k(),`
`;case"r":return k(),"\r";case"t":return k(),"	";case"v":return k(),"\v";case"0":if(k(),je.isDigit(kr()))throw Ce(k());return"\0";case"x":return k(),Mb();case"u":return k(),Fc();case`
`:case"\u2028":case"\u2029":return k(),"";case"\r":return k(),kr()===`
`&&k(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Ce(k());case void 0:throw Ce(k())}return k()}function Mb(){let e="",t=kr();if(!je.isHexDigit(t)||(e+=k(),t=kr(),!je.isHexDigit(t)))throw Ce(k());return e+=k(),String.fromCodePoint(parseInt(e,16))}function Fc(){let e="",t=4;for(;t-- >0;){const n=kr();if(!je.isHexDigit(n))throw Ce(k());e+=k()}return String.fromCodePoint(parseInt(e,16))}const Ob={start(){if(dt.type==="eof")throw gi();Tl()},beforePropertyName(){switch(dt.type){case"identifier":case"string":Ef=dt.value,Lt="afterPropertyName";return;case"punctuator":Ta();return;case"eof":throw gi()}},afterPropertyName(){if(dt.type==="eof")throw gi();Lt="beforePropertyValue"},beforePropertyValue(){if(dt.type==="eof")throw gi();Tl()},beforeArrayValue(){if(dt.type==="eof")throw gi();if(dt.type==="punctuator"&&dt.value==="]"){Ta();return}Tl()},afterPropertyValue(){if(dt.type==="eof")throw gi();switch(dt.value){case",":Lt="beforePropertyName";return;case"}":Ta()}},afterArrayValue(){if(dt.type==="eof")throw gi();switch(dt.value){case",":Lt="beforeArrayValue";return;case"]":Ta()}},end(){}};function Tl(){let e;switch(dt.type){case"punctuator":switch(dt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=dt.value;break}if(Fs===void 0)Fs=e;else{const t=vr[vr.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Ef,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")vr.push(e),Array.isArray(e)?Lt="beforeArrayValue":Lt="beforePropertyName";else{const t=vr[vr.length-1];t==null?Lt="end":Array.isArray(t)?Lt="afterArrayValue":Lt="afterPropertyValue"}}function Ta(){vr.pop();const e=vr[vr.length-1];e==null?Lt="end":Array.isArray(e)?Lt="afterArrayValue":Lt="afterPropertyValue"}function Ce(e){return mu(e===void 0?`JSON5: invalid end of input at ${Qr}:${Zn}`:`JSON5: invalid character '${yp(e)}' at ${Qr}:${Zn}`)}function gi(){return mu(`JSON5: invalid end of input at ${Qr}:${Zn}`)}function pm(){return Zn-=5,mu(`JSON5: invalid identifier character at ${Qr}:${Zn}`)}function Bb(e){console.warn(`JSON5: '${yp(e)}' in strings is not valid ECMAScript; consider escaping`)}function yp(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function mu(e){const t=new SyntaxError(e);return t.lineNumber=Qr,t.columnNumber=Zn,t}var Rb=function(t,n,r){const i=[];let o="",s,a,u="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")a=n;else if(Array.isArray(n)){s=[];for(const D of n){let S;typeof D=="string"?S=D:(typeof D=="number"||D instanceof String||D instanceof Number)&&(S=String(D)),S!==void 0&&s.indexOf(S)<0&&s.push(S)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),u="          ".substr(0,r)):typeof r=="string"&&(u=r.substr(0,10)),c("",{"":t});function c(D,S){let A=S[D];switch(A!=null&&(typeof A.toJSON5=="function"?A=A.toJSON5(D):typeof A.toJSON=="function"&&(A=A.toJSON(D))),a&&(A=a.call(S,D,A)),A instanceof Number?A=Number(A):A instanceof String?A=String(A):A instanceof Boolean&&(A=A.valueOf()),A){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof A=="string")return f(A);if(typeof A=="number")return String(A);if(typeof A=="object")return Array.isArray(A)?C(A):d(A)}function f(D){const S={"'":.1,'"':.2},A={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let N="";for(let W=0;W<D.length;W++){const G=D[W];switch(G){case"'":case'"':S[G]++,N+=G;continue;case"\0":if(je.isDigit(D[W+1])){N+="\\x00";continue}}if(A[G]){N+=A[G];continue}if(G<" "){let Le=G.charCodeAt(0).toString(16);N+="\\x"+("00"+Le).substring(Le.length);continue}N+=G}const j=l||Object.keys(S).reduce((W,G)=>S[W]<S[G]?W:G);return N=N.replace(new RegExp(j,"g"),A[j]),j+N+j}function d(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let S=o;o=o+u;let A=s||Object.keys(D),N=[];for(const W of A){const G=c(W,D);if(G!==void 0){let Le=y(W)+":";u!==""&&(Le+=" "),Le+=G,N.push(Le)}}let j;if(N.length===0)j="{}";else{let W;if(u==="")W=N.join(","),j="{"+W+"}";else{let G=`,
`+o;W=N.join(G),j=`{
`+o+W+`,
`+S+"}"}}return i.pop(),o=S,j}function y(D){if(D.length===0)return f(D);const S=String.fromCodePoint(D.codePointAt(0));if(!je.isIdStartChar(S))return f(D);for(let A=S.length;A<D.length;A++)if(!je.isIdContinueChar(String.fromCodePoint(D.codePointAt(A))))return f(D);return D}function C(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let S=o;o=o+u;let A=[];for(let j=0;j<D.length;j++){const W=c(String(j),D);A.push(W!==void 0?W:"null")}let N;if(A.length===0)N="[]";else if(u==="")N="["+A.join(",")+"]";else{let j=`,
`+o,W=A.join(j);N=`[
`+o+W+`,
`+S+"]"}return i.pop(),o=S,N}};const Lb={parse:Ib,stringify:Rb};var Ub=Lb;const wp="__@@augment-vir-undefined-sentinel@@__",jb=new RegExp(`['"]${wp}['"]`);function h(e,t){if(typeof e=="string")return e;try{return Ub.stringify(e,(r,i)=>i===void 0?wp:typeof i=="bigint"?Number(i):i,t||void 0).split(jb).join("undefined")}catch{return String(e)}}var _b=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Gn;(function(e){e.Node="node",e.Web="web"})(Gn||(Gn={}));function Vb(){return _b?Gn.Node:Gn.Web}const bp=Vb();function xf(e){return bp===e}function $p(e){return e[bp]()}function qb(e,t){const n=typeof t=="string"&&typeof e=="string",r=typeof t!="string"||typeof e!="string",i=r?Ab:$b,o=[n?"":`
`,h(t&&typeof t=="object"&&!Array.isArray(t)?hm(t):t,4),`
`].join(""),s=[n?"":`
`,h(e&&typeof e=="object"&&!Array.isArray(e)?hm(e):e,4),`
`].join(""),a=Wb(r,i(o,s)),u=xf(Gn.Node);return[[u?Cr.Green:""," +added (unexpected, added in actual)",u?Cr.Red:""," -missing (expected, missing from actual)",u?Cr.Reset:""].join(""),n?`

`:`
`,a].join("")}var Cr;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(Cr||(Cr={}));var hu;(function(e){e.Added="+",e.Removed="-"})(hu||(hu={}));function Wb(e,t){return e?t.flatMap(r=>r.value.split(`
`).map(i=>gm(i,r)).join(`
`)).join(""):t.map(r=>gm(void 0,r)).join("")}function gm(e,t){if(e!=null&&!e)return"";const n=xf(Gn.Node),r=t.added?hu.Added:t.removed?hu.Removed:e==null?"":" ",i=t.added?Cr.Green:t.removed?Cr.Red:Cr.Reset;return[n?i:"",r,e??t.value,Cr.Reset].join("")}function Ie(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function zb(e){return Ie(e).filter(t=>isNaN(Number(t)))}function qn(e){return zb(e).map(n=>e[n])}const Kb=[".",":",";",",","?","!"],Zb=new RegExp(`[${Kb.join("")}]+$`);function ym(e){return e.replace(Zb,"")}function It(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:h(e):""}function qo(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&ym(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:ym(r)).join(": "):""}function et(e){return e instanceof Error?e:new Error(It(e))}function Cf(e,t){const n=et(e),r=qo(t,n.message);try{return n.message=r,n}catch{return new Error(r,{cause:e})}}var v;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(v||(v={}));var R;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(R||(R={}));R.ClientError,R.ServerError;v.Continue+"",R.Information,v.SwitchingProtocols+"",R.Information,v.Processing+"",R.Information,v.EarlyHints+"",R.Information,v.Ok+"",R.Success,v.Created+"",R.Success,v.Accepted+"",R.Success,v.NonAuthoritativeInformation+"",R.Success,v.NoContent+"",R.Success,v.ResetContent+"",R.Success,v.PartialContent+"",R.Success,v.MultiStatus+"",R.Success,v.AlreadyReported+"",R.Success,v.ImUsed+"",R.Success,v.MultipleChoices+"",R.Redirect,v.MovedPermanently+"",R.Redirect,v.Found+"",R.Redirect,v.SeeOther+"",R.Redirect,v.NotModified+"",R.Redirect,v.UseProxy+"",R.Redirect,v.Unused+"",R.Redirect,v.TemporaryRedirect+"",R.Redirect,v.PermanentRedirect+"",R.Redirect,v.BadRequest+"",R.ClientError,v.Unauthorized+"",R.ClientError,v.PaymentRequired+"",R.ClientError,v.Forbidden+"",R.ClientError,v.NotFound+"",R.ClientError,v.MethodNotAllowed+"",R.ClientError,v.NotAcceptable+"",R.ClientError,v.ProxyAuthenticationRequired+"",R.ClientError,v.RequestTimeout+"",R.ClientError,v.Conflict+"",R.ClientError,v.Gone+"",R.ClientError,v.LengthRequired+"",R.ClientError,v.PreconditionFailed+"",R.ClientError,v.PayloadTooLarge+"",R.ClientError,v.UriTooLong+"",R.ClientError,v.UnsupportedMediaType+"",R.ClientError,v.RangeNotSatisfiable+"",R.ClientError,v.ExpectationFailed+"",R.ClientError,v.ImATeapot+"",R.ClientError,v.MisdirectedRequest+"",R.ClientError,v.UnprocessableContent+"",R.ClientError,v.Locked+"",R.ClientError,v.FailedDependency+"",R.ClientError,v.TooEarly+"",R.ClientError,v.UpgradeRequired+"",R.ClientError,v.PreconditionRequired+"",R.ClientError,v.TooManyRequests+"",R.ClientError,v.RequestHeaderFieldsTooLarge+"",R.ClientError,v.UnavailableForLegalReasons+"",R.ClientError,v.InternalServerError+"",R.ServerError,v.NotImplemented+"",R.ServerError,v.BadGateway+"",R.ServerError,v.ServiceUnavailable+"",R.ServerError,v.GatewayTimeout+"",R.ServerError,v.HttpVersionNotSupported+"",R.ServerError,v.VariantAlsoNegotiates+"",R.ServerError,v.InsufficientStorage+"",R.ServerError,v.LoopDetected+"",R.ServerError,v.NotExtended+"",R.ServerError,v.NetworkAuthenticationRequired+"",R.ServerError;const eu={[R.Information]:[v.Continue,v.SwitchingProtocols,v.Processing,v.EarlyHints],[R.Success]:[v.Ok,v.Created,v.Accepted,v.NonAuthoritativeInformation,v.NoContent,v.ResetContent,v.PartialContent,v.MultiStatus,v.AlreadyReported,v.ImUsed],[R.Redirect]:[v.MultipleChoices,v.MovedPermanently,v.Found,v.SeeOther,v.NotModified,v.UseProxy,v.Unused,v.TemporaryRedirect,v.PermanentRedirect],[R.ClientError]:[v.BadRequest,v.Unauthorized,v.PaymentRequired,v.Forbidden,v.NotFound,v.MethodNotAllowed,v.NotAcceptable,v.ProxyAuthenticationRequired,v.RequestTimeout,v.Conflict,v.Gone,v.LengthRequired,v.PreconditionFailed,v.PayloadTooLarge,v.UriTooLong,v.UnsupportedMediaType,v.RangeNotSatisfiable,v.ExpectationFailed,v.ImATeapot,v.MisdirectedRequest,v.UnprocessableContent,v.Locked,v.FailedDependency,v.TooEarly,v.UpgradeRequired,v.PreconditionRequired,v.TooManyRequests,v.RequestHeaderFieldsTooLarge,v.UnavailableForLegalReasons],[R.ServerError]:[v.InternalServerError,v.NotImplemented,v.BadGateway,v.ServiceUnavailable,v.GatewayTimeout,v.HttpVersionNotSupported,v.VariantAlsoNegotiates,v.InsufficientStorage,v.LoopDetected,v.NotExtended,v.NetworkAuthenticationRequired]};function vp({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class pu{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(et(r))}})}}class ji extends Error{}class Gb extends ji{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Yb extends ji{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Jb extends ji{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class co extends ji{}class Dp extends ji{constructor(t){super(`Invalid unit ${t}`)}}class kt extends ji{}class _r extends ji{constructor(){super("Zone is an abstract class")}}const O="numeric",Yn="short",cn="long",gu={year:O,month:O,day:O},Ep={year:O,month:Yn,day:O},Hb={year:O,month:Yn,day:O,weekday:Yn},xp={year:O,month:cn,day:O},Cp={year:O,month:cn,day:O,weekday:cn},Ap={hour:O,minute:O},Fp={hour:O,minute:O,second:O},kp={hour:O,minute:O,second:O,timeZoneName:Yn},Sp={hour:O,minute:O,second:O,timeZoneName:cn},Np={hour:O,minute:O,hourCycle:"h23"},Ip={hour:O,minute:O,second:O,hourCycle:"h23"},Pp={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:Yn},Tp={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:cn},Mp={year:O,month:O,day:O,hour:O,minute:O},Op={year:O,month:O,day:O,hour:O,minute:O,second:O},Bp={year:O,month:Yn,day:O,hour:O,minute:O},Rp={year:O,month:Yn,day:O,hour:O,minute:O,second:O},Xb={year:O,month:Yn,day:O,weekday:Yn,hour:O,minute:O},Lp={year:O,month:cn,day:O,hour:O,minute:O,timeZoneName:Yn},Up={year:O,month:cn,day:O,hour:O,minute:O,second:O,timeZoneName:Yn},jp={year:O,month:cn,day:O,weekday:cn,hour:O,minute:O,timeZoneName:cn},_p={year:O,month:cn,day:O,weekday:cn,hour:O,minute:O,second:O,timeZoneName:cn};class ra{get type(){throw new _r}get name(){throw new _r}get ianaName(){return this.name}get isUniversal(){throw new _r}offsetName(t,n){throw new _r}formatOffset(t,n){throw new _r}offset(t){throw new _r}equals(t){throw new _r}get isValid(){throw new _r}}let Ml=null;class qu extends ra{static get instance(){return Ml===null&&(Ml=new qu),Ml}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Xp(t,n,r)}formatOffset(t,n){return ks(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const kc=new Map;function Qb(e){let t=kc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),kc.set(e,t)),t}const e2={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function t2(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,o,s,a,u,l,c]=r;return[s,i,o,a,u,l,c]}function n2(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:o,value:s}=n[i],a=e2[o];o==="era"?r[a]=s:K(a)||(r[a]=parseInt(s,10))}return r}const Ol=new Map;class Ir extends ra{static create(t){let n=Ol.get(t);return n===void 0&&Ol.set(t,n=new Ir(t)),n}static resetCache(){Ol.clear(),kc.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Ir.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Xp(t,n,r,this.name)}formatOffset(t,n){return ks(this.offset(t),n)}offset(t){if(!this.valid)return NaN;const n=new Date(t);if(isNaN(n))return NaN;const r=Qb(this.name);let[i,o,s,a,u,l,c]=r.formatToParts?n2(r,n):t2(r,n);a==="BC"&&(i=-Math.abs(i)+1);const d=zu({year:i,month:o,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let y=+n;const C=y%1e3;return y-=C>=0?C:1e3+C,(d-y)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let wm={};function r2(e,t={}){const n=JSON.stringify([e,t]);let r=wm[n];return r||(r=new Intl.ListFormat(e,t),wm[n]=r),r}const Sc=new Map;function Nc(e,t={}){const n=JSON.stringify([e,t]);let r=Sc.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),Sc.set(n,r)),r}const Ic=new Map;function i2(e,t={}){const n=JSON.stringify([e,t]);let r=Ic.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),Ic.set(n,r)),r}const Pc=new Map;function o2(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let o=Pc.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),Pc.set(i,o)),o}let vs=null;function s2(){return vs||(vs=new Intl.DateTimeFormat().resolvedOptions().locale,vs)}const Tc=new Map;function Vp(e){let t=Tc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Tc.set(e,t)),t}const Mc=new Map;function a2(e){let t=Mc.get(e);if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,"minimalDays"in t||(t={...qp,...t}),Mc.set(e,t)}return t}function u2(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=Nc(e).resolvedOptions(),i=e}catch{const u=e.substring(0,n);r=Nc(u).resolvedOptions(),i=u}const{numberingSystem:o,calendar:s}=r;return[i,o,s]}}function l2(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function c2(e){const t=[];for(let n=1;n<=12;n++){const r=Z.utc(2009,n,1);t.push(e(r))}return t}function f2(e){const t=[];for(let n=1;n<=7;n++){const r=Z.utc(2016,11,13+n);t.push(e(r))}return t}function Ma(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function d2(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Vp(e.locale).numberingSystem==="latn"}class m2{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:o,...s}=r;if(!n||Object.keys(s).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=i2(t,a)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):Nf(t,3);return Ye(n,this.padTo)}}}class h2{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Ir.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=Nc(n,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class p2{constructor(t,n,r){this.opts={style:"long",...r},!n&&Jp()&&(this.rtf=o2(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):R2(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const qp={firstDay:1,minimalDays:4,weekend:[6,7]};class he{static fromOpts(t){return he.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,o=!1){const s=t||Re.defaultLocale,a=s||(o?"en-US":s2()),u=n||Re.defaultNumberingSystem,l=r||Re.defaultOutputCalendar,c=Bc(i)||Re.defaultWeekSettings;return new he(a,u,l,c,s)}static resetCache(){vs=null,Sc.clear(),Ic.clear(),Pc.clear(),Tc.clear(),Mc.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return he.create(t,n,r,i)}constructor(t,n,r,i,o){const[s,a,u]=u2(t);this.locale=s,this.numberingSystem=n||a||null,this.outputCalendar=r||u||null,this.weekSettings=i,this.intl=l2(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=d2(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:he.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Bc(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Ma(this,t,tg,()=>{const r=this.intl==="ja"||this.intl.startsWith("ja-");n&=!r;const i=n?{month:t,day:"numeric"}:{month:t},o=n?"format":"standalone";if(!this.monthsCache[o][t]){const s=r?a=>this.dtFormatter(a,i).format():a=>this.extract(a,i,"month");this.monthsCache[o][t]=c2(s)}return this.monthsCache[o][t]})}weekdays(t,n=!1){return Ma(this,t,ig,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=f2(o=>this.extract(o,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Ma(this,void 0,()=>og,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[Z.utc(2016,11,13,9),Z.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Ma(this,t,sg,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[Z.utc(-40,1,1),Z.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),o=i.formatToParts(),s=o.find(a=>a.type.toLowerCase()===r);return s?s.value:null}numberFormatter(t={}){return new m2(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new h2(t,this.intl,n)}relFormatter(t={}){return new p2(this.intl,this.isEnglish(),t)}listFormatter(t={}){return r2(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Vp(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Hp()?a2(this.locale):qp}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Bl=null;class Ut extends ra{static get utcInstance(){return Bl===null&&(Bl=new Ut(0)),Bl}static instance(t){return t===0?Ut.utcInstance:new Ut(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Ut(Ku(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${ks(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${ks(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return ks(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class g2 extends ra{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Zr(e,t){if(K(e)||e===null)return t;if(e instanceof ra)return e;if(D2(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?qu.instance:n==="utc"||n==="gmt"?Ut.utcInstance:Ut.parseSpecifier(n)||Ir.create(e)}else return Jr(e)?Ut.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new g2(e)}const Af={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},bm={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},y2=Af.hanidec.replace(/[\[|\]]/g,"").split("");function w2(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(Af.hanidec)!==-1)t+=y2.indexOf(e[n]);else for(const i in bm){const[o,s]=bm[i];r>=o&&r<=s&&(t+=r-o)}}return parseInt(t,10)}else return t}const Oc=new Map;function b2(){Oc.clear()}function jn({numberingSystem:e},t=""){const n=e||"latn";let r=Oc.get(n);r===void 0&&(r=new Map,Oc.set(n,r));let i=r.get(t);return i===void 0&&(i=new RegExp(`${Af[n]}${t}`),r.set(t,i)),i}let $m=()=>Date.now(),vm="system",Dm=null,Em=null,xm=null,Cm=60,Am,Fm=null;class Re{static get now(){return $m}static set now(t){$m=t}static set defaultZone(t){vm=t}static get defaultZone(){return Zr(vm,qu.instance)}static get defaultLocale(){return Dm}static set defaultLocale(t){Dm=t}static get defaultNumberingSystem(){return Em}static set defaultNumberingSystem(t){Em=t}static get defaultOutputCalendar(){return xm}static set defaultOutputCalendar(t){xm=t}static get defaultWeekSettings(){return Fm}static set defaultWeekSettings(t){Fm=Bc(t)}static get twoDigitCutoffYear(){return Cm}static set twoDigitCutoffYear(t){Cm=t%100}static get throwOnInvalid(){return Am}static set throwOnInvalid(t){Am=t}static resetCaches(){he.resetCache(),Ir.resetCache(),Z.resetCache(),b2()}}class zn{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Wp=[0,31,59,90,120,151,181,212,243,273,304,334],zp=[0,31,60,91,121,152,182,213,244,274,305,335];function Fn(e,t){return new zn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Ff(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function Kp(e,t,n){return n+(ia(e)?zp:Wp)[t-1]}function Zp(e,t){const n=ia(e)?zp:Wp,r=n.findIndex(o=>o<t),i=t-n[r];return{month:r+1,day:i}}function kf(e,t){return(e-t+7)%7+1}function yu(e,t=4,n=1){const{year:r,month:i,day:o}=e,s=Kp(r,i,o),a=kf(Ff(r,i,o),n);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=r-1,u=Ls(l,t,n)):u>Ls(r,t,n)?(l=r+1,u=1):l=r,{weekYear:l,weekNumber:u,weekday:a,...Zu(e)}}function km(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:o}=e,s=kf(Ff(r,1,t),n),a=po(r);let u=i*7+o-s-7+t,l;u<1?(l=r-1,u+=po(l)):u>a?(l=r+1,u-=po(r)):l=r;const{month:c,day:f}=Zp(l,u);return{year:l,month:c,day:f,...Zu(e)}}function Rl(e){const{year:t,month:n,day:r}=e,i=Kp(t,n,r);return{year:t,ordinal:i,...Zu(e)}}function Sm(e){const{year:t,ordinal:n}=e,{month:r,day:i}=Zp(t,n);return{year:t,month:r,day:i,...Zu(e)}}function Nm(e,t){if(!K(e.localWeekday)||!K(e.localWeekNumber)||!K(e.localWeekYear)){if(!K(e.weekday)||!K(e.weekNumber)||!K(e.weekYear))throw new co("Cannot mix locale-based week fields with ISO-based week fields");return K(e.localWeekday)||(e.weekday=e.localWeekday),K(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),K(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function $2(e,t=4,n=1){const r=Wu(e.weekYear),i=kn(e.weekNumber,1,Ls(e.weekYear,t,n)),o=kn(e.weekday,1,7);return r?i?o?!1:Fn("weekday",e.weekday):Fn("week",e.weekNumber):Fn("weekYear",e.weekYear)}function v2(e){const t=Wu(e.year),n=kn(e.ordinal,1,po(e.year));return t?n?!1:Fn("ordinal",e.ordinal):Fn("year",e.year)}function Gp(e){const t=Wu(e.year),n=kn(e.month,1,12),r=kn(e.day,1,wu(e.year,e.month));return t?n?r?!1:Fn("day",e.day):Fn("month",e.month):Fn("year",e.year)}function Yp(e){const{hour:t,minute:n,second:r,millisecond:i}=e,o=kn(t,0,23)||t===24&&n===0&&r===0&&i===0,s=kn(n,0,59),a=kn(r,0,59),u=kn(i,0,999);return o?s?a?u?!1:Fn("millisecond",i):Fn("second",r):Fn("minute",n):Fn("hour",t)}function K(e){return typeof e>"u"}function Jr(e){return typeof e=="number"}function Wu(e){return typeof e=="number"&&e%1===0}function D2(e){return typeof e=="string"}function E2(e){return Object.prototype.toString.call(e)==="[object Date]"}function Jp(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Hp(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function x2(e){return Array.isArray(e)?e:[e]}function Im(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const o=[t(i),i];return r&&n(r[0],o[0])===r[0]?r:o},null)[1]}function C2(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function xo(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Bc(e){if(e==null)return null;if(typeof e!="object")throw new kt("Week settings must be an object");if(!kn(e.firstDay,1,7)||!kn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!kn(t,1,7)))throw new kt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function kn(e,t,n){return Wu(e)&&e>=t&&e<=n}function A2(e,t){return e-t*Math.floor(e/t)}function Ye(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function Wr(e){if(!(K(e)||e===null||e===""))return parseInt(e,10)}function yi(e){if(!(K(e)||e===null||e===""))return parseFloat(e)}function Sf(e){if(!(K(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Nf(e,t,n="round"){const r=10**t;switch(n){case"expand":return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case"trunc":return Math.trunc(e*r)/r;case"round":return Math.round(e*r)/r;case"floor":return Math.floor(e*r)/r;case"ceil":return Math.ceil(e*r)/r;default:throw new RangeError(`Value rounding ${n} is out of range`)}}function ia(e){return e%4===0&&(e%100!==0||e%400===0)}function po(e){return ia(e)?366:365}function wu(e,t){const n=A2(t-1,12)+1,r=e+(t-n)/12;return n===2?ia(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function zu(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Pm(e,t,n){return-kf(Ff(e,1,t),n)+t-1}function Ls(e,t=4,n=1){const r=Pm(e,t,n),i=Pm(e+1,t,n);return(po(e)-r+i)/7}function Rc(e){return e>99?e:e>Re.twoDigitCutoffYear?1900+e:2e3+e}function Xp(e,t,n,r=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(o.timeZone=r);const s={timeZoneName:t,...o},a=new Intl.DateTimeFormat(n,s).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Ku(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function Qp(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new kt(`Invalid unit value ${e}`);return t}function bu(e,t){const n={};for(const r in e)if(xo(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=Qp(i)}return n}function ks(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${Ye(n,2)}:${Ye(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${Ye(n,2)}${Ye(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Zu(e){return C2(e,["hour","minute","second","millisecond"])}const F2=["January","February","March","April","May","June","July","August","September","October","November","December"],eg=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],k2=["J","F","M","A","M","J","J","A","S","O","N","D"];function tg(e){switch(e){case"narrow":return[...k2];case"short":return[...eg];case"long":return[...F2];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const ng=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],rg=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],S2=["M","T","W","T","F","S","S"];function ig(e){switch(e){case"narrow":return[...S2];case"short":return[...rg];case"long":return[...ng];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const og=["AM","PM"],N2=["Before Christ","Anno Domini"],I2=["BC","AD"],P2=["B","A"];function sg(e){switch(e){case"narrow":return[...P2];case"short":return[...I2];case"long":return[...N2];default:return null}}function T2(e){return og[e.hour<12?0:1]}function M2(e,t){return ig(t)[e.weekday-1]}function O2(e,t){return tg(t)[e.month-1]}function B2(e,t){return sg(t)[e.year<0?0:1]}function R2(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&o){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=r?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function Tm(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const L2={D:gu,DD:Ep,DDD:xp,DDDD:Cp,t:Ap,tt:Fp,ttt:kp,tttt:Sp,T:Np,TT:Ip,TTT:Pp,TTTT:Tp,f:Mp,ff:Bp,fff:Lp,ffff:jp,F:Op,FF:Rp,FFF:Up,FFFF:_p};class Nt{static create(t,n={}){return new Nt(t,n)}static parseFormat(t){let n=null,r="",i=!1;const o=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((r.length>0||i)&&o.push({literal:i||/^\s+$/.test(r),val:r===""?"'":r}),n=null,r="",i=!i):i||a===n?r+=a:(r.length>0&&o.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&o.push({literal:i||/^\s+$/.test(r),val:r}),o}static macroTokenToFormatOpts(t){return L2[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0,r=void 0){if(this.opts.forceSimple)return Ye(t,n);const i={...this.opts};return n>0&&(i.padTo=n),r&&(i.signDisplay=r),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(y,C)=>this.loc.extract(t,y,C),s=y=>t.isOffsetFixed&&t.offset===0&&y.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,y.format):"",a=()=>r?T2(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(y,C)=>r?O2(t,y):o(C?{month:y}:{month:y,day:"numeric"},"month"),l=(y,C)=>r?M2(t,y):o(C?{weekday:y}:{weekday:y,month:"long",day:"numeric"},"weekday"),c=y=>{const C=Nt.macroTokenToFormatOpts(y);return C?this.formatWithSystemDefault(t,C):y},f=y=>r?B2(t,y):o({era:y},"era"),d=y=>{switch(y){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(y)}};return Tm(Nt.parseFormat(n),d)}formatDurationFromString(t,n){const r=this.opts.signMode==="negativeLargestOnly"?-1:1,i=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(c,f)=>d=>{const y=i(d);if(y){const C=f.isNegativeDuration&&y!==f.largestUnit?r:1;let D;return this.opts.signMode==="negativeLargestOnly"&&y!==f.largestUnit?D="never":this.opts.signMode==="all"?D="always":D="auto",this.num(c.get(y)*C,d.length,D)}else return d},s=Nt.parseFormat(n),a=s.reduce((c,{literal:f,val:d})=>f?c:c.concat(d),[]),u=t.shiftTo(...a.map(i).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return Tm(s,o(u,l))}}const ag=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Wo(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function zo(...e){return t=>e.reduce(([n,r,i],o)=>{const[s,a,u]=o(t,i);return[{...n,...s},a||r,u]},[{},null,1]).slice(0,2)}function Ko(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function ug(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=Wr(t[n+i]);return[r,null,n+i]}}const lg=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,U2=`(?:${lg.source}?(?:\\[(${ag.source})\\])?)?`,If=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,cg=RegExp(`${If.source}${U2}`),Pf=RegExp(`(?:[Tt]${cg.source})?`),j2=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,_2=/(\d{4})-?W(\d\d)(?:-?(\d))?/,V2=/(\d{4})-?(\d{3})/,q2=ug("weekYear","weekNumber","weekDay"),W2=ug("year","ordinal"),z2=/(\d{4})-(\d\d)-(\d\d)/,fg=RegExp(`${If.source} ?(?:${lg.source}|(${ag.source}))?`),K2=RegExp(`(?: ${fg.source})?`);function go(e,t,n){const r=e[t];return K(r)?n:Wr(r)}function Z2(e,t){return[{year:go(e,t),month:go(e,t+1,1),day:go(e,t+2,1)},null,t+3]}function Zo(e,t){return[{hours:go(e,t,0),minutes:go(e,t+1,0),seconds:go(e,t+2,0),milliseconds:Sf(e[t+3])},null,t+4]}function oa(e,t){const n=!e[t]&&!e[t+1],r=Ku(e[t+1],e[t+2]),i=n?null:Ut.instance(r);return[{},i,t+3]}function sa(e,t){const n=e[t]?Ir.create(e[t]):null;return[{},n,t+1]}const G2=RegExp(`^T?${If.source}$`),Y2=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function J2(e){const[t,n,r,i,o,s,a,u,l]=e,c=t[0]==="-",f=u&&u[0]==="-",d=(y,C=!1)=>y!==void 0&&(C||y&&c)?-y:y;return[{years:d(yi(n)),months:d(yi(r)),weeks:d(yi(i)),days:d(yi(o)),hours:d(yi(s)),minutes:d(yi(a)),seconds:d(yi(u),u==="-0"),milliseconds:d(Sf(l),f)}]}const H2={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Tf(e,t,n,r,i,o,s){const a={year:t.length===2?Rc(Wr(t)):Wr(t),month:eg.indexOf(n)+1,day:Wr(r),hour:Wr(i),minute:Wr(o)};return s&&(a.second=Wr(s)),e&&(a.weekday=e.length>3?ng.indexOf(e)+1:rg.indexOf(e)+1),a}const X2=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Q2(e){const[,t,n,r,i,o,s,a,u,l,c,f]=e,d=Tf(t,i,r,n,o,s,a);let y;return u?y=H2[u]:l?y=0:y=Ku(c,f),[d,new Ut(y)]}function e$(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const t$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,n$=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,r$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Mm(e){const[,t,n,r,i,o,s,a]=e;return[Tf(t,i,r,n,o,s,a),Ut.utcInstance]}function i$(e){const[,t,n,r,i,o,s,a]=e;return[Tf(t,a,n,r,i,o,s),Ut.utcInstance]}const o$=Wo(j2,Pf),s$=Wo(_2,Pf),a$=Wo(V2,Pf),u$=Wo(cg),dg=zo(Z2,Zo,oa,sa),l$=zo(q2,Zo,oa,sa),c$=zo(W2,Zo,oa,sa),f$=zo(Zo,oa,sa);function d$(e){return Ko(e,[o$,dg],[s$,l$],[a$,c$],[u$,f$])}function m$(e){return Ko(e$(e),[X2,Q2])}function h$(e){return Ko(e,[t$,Mm],[n$,Mm],[r$,i$])}function p$(e){return Ko(e,[Y2,J2])}const g$=zo(Zo);function y$(e){return Ko(e,[G2,g$])}const w$=Wo(z2,K2),b$=Wo(fg),$$=zo(Zo,oa,sa);function v$(e){return Ko(e,[w$,dg],[b$,$$])}const Om="Invalid Duration",mg={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},D$={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...mg},En=146097/400,eo=146097/4800,E$={years:{quarters:4,months:12,weeks:En/7,days:En,hours:En*24,minutes:En*24*60,seconds:En*24*60*60,milliseconds:En*24*60*60*1e3},quarters:{months:3,weeks:En/28,days:En/4,hours:En*24/4,minutes:En*24*60/4,seconds:En*24*60*60/4,milliseconds:En*24*60*60*1e3/4},months:{weeks:eo/7,days:eo,hours:eo*24,minutes:eo*24*60,seconds:eo*24*60*60,milliseconds:eo*24*60*60*1e3},...mg},Ai=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],x$=Ai.slice(0).reverse();function dr(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new se(r)}function hg(e,t){let n=t.milliseconds??0;for(const r of x$.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Bm(e,t){const n=hg(e,t)<0?-1:1;Ai.reduceRight((r,i)=>{if(K(t[i]))return r;if(r){const o=t[r]*n,s=e[i][r],a=Math.floor(o/s);t[i]+=a*n,t[r]-=a*s*n}return i},null),Ai.reduce((r,i)=>{if(K(t[i]))return r;if(r){const o=t[r]%1;t[r]-=o,t[i]+=o*e[r][i]}return i},null)}function Rm(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class se{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?E$:D$;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||he.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return se.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new kt(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new se({values:bu(t,se.normalizeUnit),loc:he.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Jr(t))return se.fromMillis(t);if(se.isDuration(t))return t;if(typeof t=="object")return se.fromObject(t);throw new kt(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=p$(t);return r?se.fromObject(r,n):se.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=y$(t);return r?se.fromObject(r,n):se.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new kt("need to specify a reason the Duration is invalid");const r=t instanceof zn?t:new zn(t,n);if(Re.throwOnInvalid)throw new Jb(r);return new se({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new Dp(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?Nt.create(this.loc,r).formatDurationFromString(this,t):Om}toHuman(t={}){if(!this.isValid)return Om;const n=t.showZeros!==!1,r=Ai.map(i=>{const o=this.values[i];return K(o)||o===0&&!n?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Nf(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},Z.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?hg(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=se.fromDurationLike(t),r={};for(const i of Ai)(xo(n.values,i)||xo(this.values,i))&&(r[i]=n.get(i)+this.get(i));return dr(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=se.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=Qp(t(this.values[r],r));return dr(this,{values:n},!0)}get(t){return this[se.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...bu(t,se.normalizeUnit)};return dr(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return dr(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Bm(this.matrix,t),dr(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Rm(this.normalize().shiftToAll().toObject());return dr(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>se.normalizeUnit(s));const n={},r={},i=this.toObject();let o;for(const s of Ai)if(t.indexOf(s)>=0){o=s;let a=0;for(const l in r)a+=this.matrix[l][s]*r[l],r[l]=0;Jr(i[s])&&(a+=i[s]);const u=Math.trunc(a);n[s]=u,r[s]=(a*1e3-u*1e3)/1e3}else Jr(i[s])&&(r[s]=i[s]);for(const s in r)r[s]!==0&&(n[o]+=s===o?r[s]:r[s]/this.matrix[o][s]);return Bm(this.matrix,n),dr(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return dr(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=Rm(this.values);return dr(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of Ai)if(!n(this.values[r],t.values[r]))return!1;return!0}}const to="Invalid Interval";function C$(e,t){return!e||!e.isValid?Be.invalid("missing or invalid start"):!t||!t.isValid?Be.invalid("missing or invalid end"):t<e?Be.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class Be{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new kt("need to specify a reason the Interval is invalid");const r=t instanceof zn?t:new zn(t,n);if(Re.throwOnInvalid)throw new Yb(r);return new Be({invalid:r})}static fromDateTimes(t,n){const r=fs(t),i=fs(n),o=C$(r,i);return o??new Be({start:r,end:i})}static after(t,n){const r=se.fromDurationLike(n),i=fs(t);return Be.fromDateTimes(i,i.plus(r))}static before(t,n){const r=se.fromDurationLike(n),i=fs(t);return Be.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let o,s;try{o=Z.fromISO(r,n),s=o.isValid}catch{s=!1}let a,u;try{a=Z.fromISO(i,n),u=a.isValid}catch{u=!1}if(s&&u)return Be.fromDateTimes(o,a);if(s){const l=se.fromISO(i,n);if(l.isValid)return Be.after(o,l)}else if(u){const l=se.fromISO(r,n);if(l.isValid)return Be.before(a,l)}}return Be.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?Be.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(fs).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),r=[];let{s:i}=this,o=0;for(;i<this.e;){const s=n[o]||this.e,a=+s>+this.e?this.e:s;r.push(Be.fromDateTimes(i,a)),i=a,o+=1}return r}splitBy(t){const n=se.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,o;const s=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(u=>u*i));o=+a>+this.e?this.e:a,s.push(Be.fromDateTimes(r,o)),r=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:Be.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return Be.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],o=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...o),a=s.sort((u,l)=>u.time-l.time);for(const u of a)r+=u.type==="s"?1:-1,r===1?n=u.time:(n&&+n!=+u.time&&i.push(Be.fromDateTimes(n,u.time)),n=null);return Be.merge(i)}difference(...t){return Be.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:to}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=gu,n={}){return this.isValid?Nt.create(this.s.loc.clone(n),t).formatInterval(this):to}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:to}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:to}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:to}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:to}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):se.invalid(this.invalidReason)}mapEndpoints(t){return Be.fromDateTimes(t(this.s),t(this.e))}}class Oa{static hasDST(t=Re.defaultZone){const n=Z.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return Ir.isValidZone(t)}static normalizeZone(t){return Zr(t,Re.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||he.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||he.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||he.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||he.create(n,r,o)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||he.create(n,r,o)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||he.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||he.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return he.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return he.create(n,null,"gregory").eras(t)}static features(){return{relative:Jp(),localeWeek:Hp()}}}function Lm(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(se.fromMillis(r).as("days"))}function A$(e,t,n){const r=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Lm(u,l);return(c-c%7)/7}],["days",Lm]],i={},o=e;let s,a;for(const[u,l]of r)n.indexOf(u)>=0&&(s=u,i[u]=l(e,t),a=o.plus(i),a>t?(i[u]--,e=o.plus(i),e>t&&(a=e,i[u]--,e=o.plus(i))):e=a);return[e,i,a,s]}function F$(e,t,n,r){let[i,o,s,a]=A$(e,t,n);const u=t-i,l=n.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);l.length===0&&(s<t&&(s=i.plus({[a]:1})),s!==i&&(o[a]=(o[a]||0)+u/(s-i)));const c=se.fromObject(o,r);return l.length>0?se.fromMillis(u,r).shiftTo(...l).plus(c):c}const k$="missing Intl.DateTimeFormat.formatToParts support";function ce(e,t=n=>n){return{regex:e,deser:([n])=>t(w2(n))}}const S$=" ",pg=`[ ${S$}]`,gg=new RegExp(pg,"g");function N$(e){return e.replace(/\./g,"\\.?").replace(gg,pg)}function Um(e){return e.replace(/\./g,"").replace(gg," ").toLowerCase()}function _n(e,t){return e===null?null:{regex:RegExp(e.map(N$).join("|")),deser:([n])=>e.findIndex(r=>Um(n)===Um(r))+t}}function jm(e,t){return{regex:e,deser:([,n,r])=>Ku(n,r),groups:t}}function Ba(e){return{regex:e,deser:([t])=>t}}function I$(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function P$(e,t){const n=jn(t),r=jn(t,"{2}"),i=jn(t,"{3}"),o=jn(t,"{4}"),s=jn(t,"{6}"),a=jn(t,"{1,2}"),u=jn(t,"{1,3}"),l=jn(t,"{1,6}"),c=jn(t,"{1,9}"),f=jn(t,"{2,4}"),d=jn(t,"{4,6}"),y=S=>({regex:RegExp(I$(S.val)),deser:([A])=>A,literal:!0}),D=(S=>{if(e.literal)return y(S);switch(S.val){case"G":return _n(t.eras("short"),0);case"GG":return _n(t.eras("long"),0);case"y":return ce(l);case"yy":return ce(f,Rc);case"yyyy":return ce(o);case"yyyyy":return ce(d);case"yyyyyy":return ce(s);case"M":return ce(a);case"MM":return ce(r);case"MMM":return _n(t.months("short",!0),1);case"MMMM":return _n(t.months("long",!0),1);case"L":return ce(a);case"LL":return ce(r);case"LLL":return _n(t.months("short",!1),1);case"LLLL":return _n(t.months("long",!1),1);case"d":return ce(a);case"dd":return ce(r);case"o":return ce(u);case"ooo":return ce(i);case"HH":return ce(r);case"H":return ce(a);case"hh":return ce(r);case"h":return ce(a);case"mm":return ce(r);case"m":return ce(a);case"q":return ce(a);case"qq":return ce(r);case"s":return ce(a);case"ss":return ce(r);case"S":return ce(u);case"SSS":return ce(i);case"u":return Ba(c);case"uu":return Ba(a);case"uuu":return ce(n);case"a":return _n(t.meridiems(),0);case"kkkk":return ce(o);case"kk":return ce(f,Rc);case"W":return ce(a);case"WW":return ce(r);case"E":case"c":return ce(n);case"EEE":return _n(t.weekdays("short",!1),1);case"EEEE":return _n(t.weekdays("long",!1),1);case"ccc":return _n(t.weekdays("short",!0),1);case"cccc":return _n(t.weekdays("long",!0),1);case"Z":case"ZZ":return jm(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return jm(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return Ba(/[a-z_+-/]{1,256}?/i);case" ":return Ba(/[^\S\n\r]/);default:return y(S)}})(e)||{invalidReason:k$};return D.token=e,D}const T$={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function M$(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const o=t[r];let s=r;r==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=n.hour12?"hour12":"hour24");let a=T$[s];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function O$(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function B$(e,t,n){const r=e.match(t);if(r){const i={};let o=1;for(const s in n)if(xo(n,s)){const a=n[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(r.slice(o,o+u))),o+=u}return[r,i]}else return[r,{}]}function R$(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return K(e.z)||(n=Ir.create(e.z)),K(e.Z)||(n||(n=new Ut(e.Z)),r=e.Z),K(e.q)||(e.M=(e.q-1)*3+1),K(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),K(e.u)||(e.S=Sf(e.u)),[Object.keys(e).reduce((o,s)=>{const a=t(s);return a&&(o[a]=e[s]),o},{}),n,r]}let Ll=null;function L$(){return Ll||(Ll=Z.fromMillis(1555555555555)),Ll}function U$(e,t){if(e.literal)return e;const n=Nt.macroTokenToFormatOpts(e.val),r=$g(n,t);return r==null||r.includes(void 0)?e:r}function yg(e,t){return Array.prototype.concat(...e.map(n=>U$(n,t)))}class wg{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=yg(Nt.parseFormat(n),t),this.units=this.tokens.map(r=>P$(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=O$(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=B$(t,this.regex,this.handlers),[i,o,s]=r?R$(r):[null,null,void 0];if(xo(r,"a")&&xo(r,"H"))throw new co("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function bg(e,t,n){return new wg(e,n).explainFromTokens(t)}function j$(e,t,n){const{result:r,zone:i,specificOffset:o,invalidReason:s}=bg(e,t,n);return[r,i,o,s]}function $g(e,t){if(!e)return null;const r=Nt.create(t,e).dtFormatter(L$()),i=r.formatToParts(),o=r.resolvedOptions();return i.map(s=>M$(s,e,o))}const Ul="Invalid DateTime",_m=864e13;function Ds(e){return new zn("unsupported zone",`the zone "${e.name}" is not supported`)}function jl(e){return e.weekData===null&&(e.weekData=yu(e.c)),e.weekData}function _l(e){return e.localWeekData===null&&(e.localWeekData=yu(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function wi(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new Z({...n,...t,old:n})}function vg(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const o=n.offset(r);return i===o?[r,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function Ra(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function tu(e,t,n){return vg(zu(e),t,n)}function Vm(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:r,month:i,day:Math.min(e.c.day,wu(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=se.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=zu(o);let[u,l]=vg(a,n,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function no(e,t,n,r,i,o){const{setZone:s,zone:a}=n;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=Z.fromObject(e,{...n,zone:u,specificOffset:o});return s?l:l.setZone(a)}else return Z.invalid(new zn("unparsable",`the input "${i}" can't be parsed as ${r}`))}function La(e,t,n=!0){return e.isValid?Nt.create(he.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Vl(e,t,n){const r=e.c.year>9999||e.c.year<0;let i="";if(r&&e.c.year>=0&&(i+="+"),i+=Ye(e.c.year,r?6:4),n==="year")return i;if(t){if(i+="-",i+=Ye(e.c.month),n==="month")return i;i+="-"}else if(i+=Ye(e.c.month),n==="month")return i;return i+=Ye(e.c.day),i}function qm(e,t,n,r,i,o,s){let a=!n||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=Ye(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=Ye(e.c.minute),s==="minute")break;a&&(u+=":",u+=Ye(e.c.second))}else{if(u+=Ye(e.c.minute),s==="minute")break;a&&(u+=Ye(e.c.second))}if(s==="second")break;a&&(!r||e.c.millisecond!==0)&&(u+=".",u+=Ye(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?u+="Z":e.o<0?(u+="-",u+=Ye(Math.trunc(-e.o/60)),u+=":",u+=Ye(Math.trunc(-e.o%60))):(u+="+",u+=Ye(Math.trunc(e.o/60)),u+=":",u+=Ye(Math.trunc(e.o%60)))),o&&(u+="["+e.zone.ianaName+"]"),u}const Dg={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},_$={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},V$={ordinal:1,hour:0,minute:0,second:0,millisecond:0},nu=["year","month","day","hour","minute","second","millisecond"],q$=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],W$=["year","ordinal","hour","minute","second","millisecond"];function ru(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Dp(e);return t}function Wm(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return ru(e)}}function z$(e){if(Es===void 0&&(Es=Re.now()),e.type!=="iana")return e.offset(Es);const t=e.name;let n=Lc.get(t);return n===void 0&&(n=e.offset(Es),Lc.set(t,n)),n}function zm(e,t){const n=Zr(t.zone,Re.defaultZone);if(!n.isValid)return Z.invalid(Ds(n));const r=he.fromObject(t);let i,o;if(K(e.year))i=Re.now();else{for(const u of nu)K(e[u])&&(e[u]=Dg[u]);const s=Gp(e)||Yp(e);if(s)return Z.invalid(s);const a=z$(n);[i,o]=tu(e,a,n)}return new Z({ts:i,zone:n,loc:r,o})}function Km(e,t,n){const r=K(n.round)?!0:n.round,i=K(n.rounding)?"trunc":n.rounding,o=(a,u)=>(a=Nf(a,r||n.calendary?0:2,n.calendary?"round":i),t.loc.clone(n).relFormatter(n).format(a,u)),s=a=>n.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(n.unit)return o(s(n.unit),n.unit);for(const a of n.units){const u=s(a);if(Math.abs(u)>=1)return o(u,a)}return o(e>t?-0:0,n.units[n.units.length-1])}function Zm(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let Es;const Lc=new Map;class Z{constructor(t){const n=t.zone||Re.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new zn("invalid input"):null)||(n.isValid?null:Ds(n));this.ts=K(t.ts)?Re.now():t.ts;let i=null,o=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,o]=[t.old.c,t.old.o];else{const a=Jr(t.o)&&!t.old?t.o:n.offset(this.ts);i=Ra(this.ts,a),r=Number.isNaN(i.year)?new zn("invalid input"):null,i=r?null:i,o=r?null:a}this._zone=n,this.loc=t.loc||he.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new Z({})}static local(){const[t,n]=Zm(arguments),[r,i,o,s,a,u,l]=n;return zm({year:r,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,n]=Zm(arguments),[r,i,o,s,a,u,l]=n;return t.zone=Ut.utcInstance,zm({year:r,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,n={}){const r=E2(t)?t.valueOf():NaN;if(Number.isNaN(r))return Z.invalid("invalid input");const i=Zr(n.zone,Re.defaultZone);return i.isValid?new Z({ts:r,zone:i,loc:he.fromObject(n)}):Z.invalid(Ds(i))}static fromMillis(t,n={}){if(Jr(t))return t<-_m||t>_m?Z.invalid("Timestamp out of range"):new Z({ts:t,zone:Zr(n.zone,Re.defaultZone),loc:he.fromObject(n)});throw new kt(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(Jr(t))return new Z({ts:t*1e3,zone:Zr(n.zone,Re.defaultZone),loc:he.fromObject(n)});throw new kt("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=Zr(n.zone,Re.defaultZone);if(!r.isValid)return Z.invalid(Ds(r));const i=he.fromObject(n),o=bu(t,Wm),{minDaysInFirstWeek:s,startOfWeek:a}=Nm(o,i),u=Re.now(),l=K(n.specificOffset)?r.offset(u):n.specificOffset,c=!K(o.ordinal),f=!K(o.year),d=!K(o.month)||!K(o.day),y=f||d,C=o.weekYear||o.weekNumber;if((y||c)&&C)throw new co("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(d&&c)throw new co("Can't mix ordinal dates with month/day");const D=C||o.weekday&&!y;let S,A,N=Ra(u,l);D?(S=q$,A=_$,N=yu(N,s,a)):c?(S=W$,A=V$,N=Rl(N)):(S=nu,A=Dg);let j=!1;for(const vn of S){const Rn=o[vn];K(Rn)?j?o[vn]=A[vn]:o[vn]=N[vn]:j=!0}const W=D?$2(o,s,a):c?v2(o):Gp(o),G=W||Yp(o);if(G)return Z.invalid(G);const Le=D?km(o,s,a):c?Sm(o):o,[Ft,ot]=tu(Le,l,r),Mt=new Z({ts:Ft,zone:r,o:ot,loc:i});return o.weekday&&y&&t.weekday!==Mt.weekday?Z.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${Mt.toISO()}`):Mt.isValid?Mt:Z.invalid(Mt.invalid)}static fromISO(t,n={}){const[r,i]=d$(t);return no(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=m$(t);return no(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=h$(t);return no(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(K(t)||K(n))throw new kt("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=r,s=he.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[a,u,l,c]=j$(s,t,n);return c?Z.invalid(c):no(a,u,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return Z.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=v$(t);return no(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new kt("need to specify a reason the DateTime is invalid");const r=t instanceof zn?t:new zn(t,n);if(Re.throwOnInvalid)throw new Gb(r);return new Z({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=$g(t,he.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return yg(Nt.parseFormat(t),he.fromObject(n)).map(i=>i.val).join("")}static resetCache(){Es=void 0,Lc.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?jl(this).weekYear:NaN}get weekNumber(){return this.isValid?jl(this).weekNumber:NaN}get weekday(){return this.isValid?jl(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?_l(this).weekday:NaN}get localWeekNumber(){return this.isValid?_l(this).weekNumber:NaN}get localWeekYear(){return this.isValid?_l(this).weekYear:NaN}get ordinal(){return this.isValid?Rl(this.c).ordinal:NaN}get monthShort(){return this.isValid?Oa.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Oa.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Oa.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Oa.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=zu(this.c),i=this.zone.offset(r-t),o=this.zone.offset(r+t),s=this.zone.offset(r-i*n),a=this.zone.offset(r-o*n);if(s===a)return[this];const u=r-s*n,l=r-a*n,c=Ra(u,s),f=Ra(l,a);return c.hour===f.hour&&c.minute===f.minute&&c.second===f.second&&c.millisecond===f.millisecond?[wi(this,{ts:u}),wi(this,{ts:l})]:[this]}get isInLeapYear(){return ia(this.year)}get daysInMonth(){return wu(this.year,this.month)}get daysInYear(){return this.isValid?po(this.year):NaN}get weeksInWeekYear(){return this.isValid?Ls(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Ls(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=Nt.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(Ut.instance(t),n)}toLocal(){return this.setZone(Re.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=Zr(t,Re.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const o=t.offset(this.ts),s=this.toObject();[i]=tu(s,o,t)}return wi(this,{ts:i,zone:t})}else return Z.invalid(Ds(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return wi(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=bu(t,Wm),{minDaysInFirstWeek:r,startOfWeek:i}=Nm(n,this.loc),o=!K(n.weekYear)||!K(n.weekNumber)||!K(n.weekday),s=!K(n.ordinal),a=!K(n.year),u=!K(n.month)||!K(n.day),l=a||u,c=n.weekYear||n.weekNumber;if((l||s)&&c)throw new co("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new co("Can't mix ordinal dates with month/day");let f;o?f=km({...yu(this.c,r,i),...n},r,i):K(n.ordinal)?(f={...this.toObject(),...n},K(n.day)&&(f.day=Math.min(wu(f.year,f.month),f.day))):f=Sm({...Rl(this.c),...n});const[d,y]=tu(f,this.o,this.zone);return wi(this,{ts:d,o:y})}plus(t){if(!this.isValid)return this;const n=se.fromDurationLike(t);return wi(this,Vm(this,n))}minus(t){if(!this.isValid)return this;const n=se.fromDurationLike(t).negate();return wi(this,Vm(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=se.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(r.weekNumber=this.weekNumber-1),r.weekday=o}else r.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);r.month=(o-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?Nt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):Ul}toLocaleString(t=gu,n={}){return this.isValid?Nt.create(this.loc.clone(n),t).formatDateTime(this):Ul}toLocaleParts(t={}){return this.isValid?Nt.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=ru(s);const a=t==="extended";let u=Vl(this,a,s);return nu.indexOf(s)>=3&&(u+="T"),u+=qm(this,a,n,r,i,o,s),u}toISODate({format:t="extended",precision:n="day"}={}){return this.isValid?Vl(this,t==="extended",ru(n)):null}toISOWeekDate(){return La(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=ru(a),(i&&nu.indexOf(a)>=3?"T":"")+qm(this,s==="extended",n,t,r,o,a)):null}toRFC2822(){return La(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return La(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Vl(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),La(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Ul}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return se.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},o=x2(n).map(se.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=F$(a,u,o,i);return s?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(Z.now(),t,n)}until(t){return this.isValid?Be.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(n,r)<=i&&i<=o.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||Z.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),Km(n,this.plus(r),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?Km(t.base||Z.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(Z.isDateTime))throw new kt("min requires all arguments be DateTimes");return Im(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(Z.isDateTime))throw new kt("max requires all arguments be DateTimes");return Im(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:o=null}=r,s=he.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return bg(s,t,n)}static fromStringExplain(t,n,r={}){return Z.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,o=he.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new wg(o,t)}static fromFormatParser(t,n,r={}){if(K(t)||K(n))throw new kt("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=r,s=he.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(n.locale))throw new kt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${n.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=n.explainFromTokens(t);return c?Z.invalid(c):no(a,u,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return gu}static get DATE_MED(){return Ep}static get DATE_MED_WITH_WEEKDAY(){return Hb}static get DATE_FULL(){return xp}static get DATE_HUGE(){return Cp}static get TIME_SIMPLE(){return Ap}static get TIME_WITH_SECONDS(){return Fp}static get TIME_WITH_SHORT_OFFSET(){return kp}static get TIME_WITH_LONG_OFFSET(){return Sp}static get TIME_24_SIMPLE(){return Np}static get TIME_24_WITH_SECONDS(){return Ip}static get TIME_24_WITH_SHORT_OFFSET(){return Pp}static get TIME_24_WITH_LONG_OFFSET(){return Tp}static get DATETIME_SHORT(){return Mp}static get DATETIME_SHORT_WITH_SECONDS(){return Op}static get DATETIME_MED(){return Bp}static get DATETIME_MED_WITH_SECONDS(){return Rp}static get DATETIME_MED_WITH_WEEKDAY(){return Xb}static get DATETIME_FULL(){return Lp}static get DATETIME_FULL_WITH_SECONDS(){return Up}static get DATETIME_HUGE(){return jp}static get DATETIME_HUGE_WITH_SECONDS(){return _p}}function fs(e){if(Z.isDateTime(e))return e;if(e&&e.valueOf&&Jr(e.valueOf()))return Z.fromJSDate(e);if(e&&typeof e=="object")return Z.fromObject(e);throw new kt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var _e;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(_e||(_e={}));const K$=[_e.Milliseconds,_e.Seconds,_e.Minutes,_e.Hours,_e.Days,_e.Weeks,_e.Months,_e.Years];_e.Milliseconds+"",_e.Seconds+"",_e.Minutes+"",_e.Hours+"",_e.Days+"",_e.Weeks+"",_e.Months+"",_e.Years+"";function Z$(e){return K$.filter(t=>e[t])}function Uc(e,{decimalCount:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function G$(e){return Uc(Math.max(e-.4,0),{decimalCount:0})}function Gm(e){return e===0?0:Math.sign(e)}function Us(e,t,n={}){const r={},i={decimalCount:n.decimalCount==null?void 0:Math.round(Math.abs(n.decimalCount))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=Z$(t).reverse();if(o||s)return a.forEach(c=>{r[c]=o?1/0:-1/0}),r;let u=se.fromObject(e).as(_e.Milliseconds);const l=Gm(u);return a.forEach((c,f)=>{const d=f===a.length-1;if(c===_e.Milliseconds)r.milliseconds=Uc(u,i);else{const y=se.fromObject({milliseconds:u}).as(c),C=Math.sign(y),D=Math.abs(y),S=d?Uc(D,i):Math.floor(i.decimalCount==null?D:G$(D)),A=S===0?0:S*C;r[c]=A,u-=se.fromObject({[c]:A}).as(_e.Milliseconds),l!==Gm(u)&&(u=0)}}),r}Intl.DateTimeFormat().resolvedOptions().locale;var ht;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(ht||(ht={}));ht.Year,ht.Hour,ht.Minute,ht.Second,ht.Millisecond;ht.Month,ht.Week,ht.Day;ht.Millisecond,ht.Second,ht.Minute,ht.Hour,ht.Day,ht.Week,ht.Month,ht.Year;var St;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(St||(St={}));St.Sunday+"",St.Monday+"",St.Tuesday+"",St.Wednesday+"",St.Thursday+"",St.Friday+"",St.Saturday+"";St.Sunday,St.Monday,St.Tuesday,St.Wednesday,St.Thursday,St.Friday,St.Saturday;var zt;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(zt||(zt={}));zt.January,zt.February,zt.March,zt.April,zt.May,zt.June,zt.July,zt.August,zt.September,zt.October,zt.November,zt.December;function Mi(e){const t=new pu,r=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:Us(e,{milliseconds:!0}).milliseconds;return r!==1/0&&r!==-1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}function Eg(...e){const t=e.join(""),n=hp(Array.from(t));return Array.from(n).join("")}function xg(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Cg(e,t){const n=Eg([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Ag(e,n)}function Ag(e,t){const n=Eg(t);return typeof e=="string"?new RegExp(xg(e),n):new RegExp(e.source,n)}function Fg(e,{caseSensitive:t}){const r="".replaceAll("i","");return Ag(e,r)}function Mf(e,t=1){return e.split(`
`).map(n=>["    ".repeat(Math.round(t)),n].join("")).join(`
`)}function kg(e,t){return t?typeof t=="string"?!!new RegExp(xg(t),"i").exec(e):!!Cg(t,"i").exec(e):!1}class m extends Error{name="AssertionError";constructor(t,n){super(qo(n,t)||"Assertion failed.")}}const Ym={interval:{milliseconds:100},timeout:{seconds:10}},ql=Symbol("not set");async function Y$(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:o,options:s}=J$(t),a=Us(s.timeout,{milliseconds:!0}).milliseconds,u=Us(s.interval,{milliseconds:!0});let l=ql,c;async function f(){try{l=n?r():await r(),e(l,...i)}catch(y){l=ql,c=et(y)}}const d=Date.now();for(;l===ql;)if(await f(),await Mi(u),Date.now()-d>=a){const C=`${o?`${o}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Cf(c,C)}return l}function I(e,t=!1){return((...n)=>Y$(e,n,t))}function J$(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Sg(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Sg(e){return{interval:e?.interval||Ym.interval,timeout:e?.timeout||Ym.timeout}}const ds={isFalse(e,t){if(e!==!1)throw new m(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new m(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new m(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new m(`'${h(e)}' is not truthy.`,t)}},Ng={assert:ds,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new m(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new m(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new m(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new m(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:I(ds.isFalse),isFalsy:I(ds.isFalsy),isTrue:I(ds.isTrue),isTruthy:I(ds.isTruthy)}};function H$(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new m(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new m(`${h(e)} does not end with ${h(t)}}`,n)}function X$(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new m(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new m(`${h(e)} ends with ${h(t)}}`,n)}function Q$(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new m(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new m(`${h(e)} does not start with ${h(t)}}`,n)}function ev(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new m(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new m(`${h(e)} starts with ${h(t)}}`,n)}const ms={endsWith:H$,endsWithout:X$,startsWith:Q$,startsWithout:ev},Ig={assert:ms,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new m(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new m(`${h(e)} does not end with ${h(t)}}`,n);return e}),endsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new m(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new m(`${h(e)} ends with ${h(t)}}`,n);return e}),startsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new m(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new m(`${h(e)} does not start with ${h(t)}}`,n);return e}),startsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new m(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new m(`${h(e)} starts with ${h(t)}}`,n);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:I(ms.endsWith),endsWithout:I(ms.endsWithout),startsWith:I(ms.startsWith),startsWithout:I(ms.startsWithout)}};function tv(e,t,n){const r=qn(t);if(!r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function wr(e,t){return qn(t).includes(e)}const Wl={isEnumValue(e,t,n){tv(e,t,n)},isNotEnumValue(e,t,n){const r=qn(t);if(r.includes(e))throw new m(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},Pg={assert:Wl,check:{isEnumValue:wr,isNotEnumValue(e,t){return!qn(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=qn(t);if(!r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=qn(t);if(r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(qn(t).includes(e))return e},isNotEnumValue(e,t){if(!qn(t).includes(e))return e}},waitUntil:{isEnumValue:I(Wl.isEnumValue),isNotEnumValue:I(Wl.isNotEnumValue)}},zl={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new m(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new m(`${h(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new m(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))throw new m("Entries are equal.",n)}},Tg={assert:zl,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],o=t[r];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],o=t[r];return i!==o})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new m(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new m(`${h(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new m(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))return e;throw new m("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:I(zl.entriesEqual),notEntriesEqual:I(zl.notEntriesEqual)}};function $u(e,t){return JSON.stringify(e)===JSON.stringify(t)}function js(e,t){if(!(e===t||$u(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!$u(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{js(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${It(s)}`)}})}throw new Error("Values are not JSON equal.")}}function xs(e,t){if(e===t||$u(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!$u(n,r)?!1:Object.keys(e).every(o=>xs(e[o],t[o]))}return!1}const Kl={jsonEquals(e,t,n){try{js(e,t)}catch(r){throw new m(It(r),n)}},notJsonEquals(e,t,n){try{js(e,t)}catch{return}throw new m("Values are JSON equal.",n)}},Mg={assert:Kl,check:{jsonEquals(e,t){return xs(e,t)},notJsonEquals(e,t){return!xs(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return js(e,t),e}catch(r){throw new m(It(r),n)}},notJsonEquals(e,t,n){try{js(e,t)}catch{return e}throw new m("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(xs(e,t))return e},notJsonEquals(e,t){if(!xs(e,t))return e}},waitUntil:{jsonEquals:I(Kl.jsonEquals),notJsonEquals:I(Kl.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function Jm(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Og(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Og.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var Bg=typeof WeakMap=="function"?WeakMap:Og;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function Hm(e,t,n){if(!n||Co(e)||Co(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function Ua(e,t,n,r){if(!(!n||Co(e)||Co(t))){var i=n.get(e);i?i.set(t,r):(i=new Bg,i.set(t,r),n.set(e,i))}}function Vn(e,t,n){if(n&&n.comparator)return Xm(e,t,n);var r=Rg(e,t);return r!==null?r:Xm(e,t,n)}function Rg(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Co(e)||Co(t)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function Xm(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new Bg;var r=n&&n.comparator,i=Hm(e,t,n.memoize);if(i!==null)return i;var o=Hm(t,e,n.memoize);if(o!==null)return o;if(r){var s=r(e,t);if(s===!1||s===!0)return Ua(e,t,n.memoize,s),s;var a=Rg(e,t);if(a!==null)return a}var u=Jm(e);if(u!==Jm(t))return Ua(e,t,n.memoize,!1),!1;Ua(e,t,n.memoize,!0);var l=nv(e,t,u,n);return Ua(e,t,n.memoize,l),l}function nv(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return Vn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Lg(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Ni(e,t,r);case"RegExp":return rv(e,t);case"Generator":return iv(e,t,r);case"DataView":return Ni(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return Ni(new Uint8Array(e),new Uint8Array(t),r);case"Set":return Qm(e,t,r);case"Map":return Qm(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return sv(e,t,r)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function rv(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Qm(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(s,a){r.push([s,a])}),t.forEach(function(s,a){i.push([s,a])}),Ni(r.sort(),i.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ni(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Vn(e[i],t[i],n)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function iv(e,t,n){return Ni(jc(e),jc(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function ov(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function eh(e){if(ov(e))try{return jc(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function jc(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function th(e){var t=[];for(var n in e)t.push(n);return t}function nh(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Lg(e,t,n,r){var i=n.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(Vn(e[n[o]],t[n[o]],r)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function sv(e,t,n){var r=th(e),i=th(t),o=nh(e),s=nh(t);if(r=r.concat(o),i=i.concat(s),r.length&&r.length===i.length)return Ni(rh(r).sort(),rh(i).sort())===!1?!1:Lg(e,t,r,n);var a=eh(e),u=eh(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Ni(a,u,n)):r.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function Co(e){return e===null||typeof e!="object"}function rh(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}class yo extends m{name="DiffError";constructor(t,n,r,i){const o=qb(n,r);super([t,Mf(o)].join(`
`),i)}}function zr(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const qr={strictEquals(e,t,n){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Strict reference equality failed for 

${h(t)}

.`,n):new yo("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new m(`Strict reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

strictly equals

${h(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Loose reference equality failed for 

${h(t)}

.`,n):new yo("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new m(`Loose reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

loosely equals

${h(t)}

`,n)},deepEquals(e,t,n){if(!Vn(e,t,{comparator:zr}))throw new yo("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(Vn(e,t,{comparator:zr}))throw new m(`

${h(e)}

deeply equals

${h(t)}

`,n)}},Ug=qr.deepEquals,jg={assert:qr,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Vn(e,t,{comparator:zr})},notDeepEquals(e,t){return!Vn(e,t,{comparator:zr})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Strict reference equality failed for 

${h(t)}

.`,n):new yo("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new m(`Strict reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

strictly equals

${h(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Loose reference equality failed for 

${h(t)}

.`,n):new yo("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new m(`Loose reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

loosely equals

${h(t)}

`,n);return e},deepEquals(e,t,n){if(Vn(e,t,{comparator:zr}))return e;throw new yo("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(Vn(e,t,{comparator:zr}))throw new m(`

${h(e)}

deeply equals

${h(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Vn(e,t,{comparator:zr}))return e},notDeepEquals(e,t){if(!Vn(e,t,{comparator:zr}))return e}},waitUntil:{strictEquals:I(qr.strictEquals),notStrictEquals:I(qr.notStrictEquals),looseEquals:I(qr.looseEquals),notLooseEquals:I(qr.notLooseEquals),deepEquals:I(qr.deepEquals),notDeepEquals:I(qr.notDeepEquals)}};function sn(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function Cn(e,t){return typeof t=="string"?t.includes(e):sn(t,e)}const mr={hasValue(e,t,n){if(!sn(e,t))throw new m(`'${h(e)}' does not have value '${h(t)}'.`,n)},lacksValue(e,t,n){if(sn(e,t))throw new m(`'${h(e)}' has value '${h(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new m(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new m(`'${h(e)}' does not have values '${h(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new m(`'${h(e)}' has values '${h(r)}'.`,n)},isIn(e,t,n){if(!Cn(e,t))throw new m(`'${h(e)}'

is not in

${h(t)}.`,n)},isNotIn(e,t,n){if(Cn(e,t))throw new m(`'${h(e)}'

is in

${h(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new m(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new m(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new m(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new m(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new m(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new m(`'${h(e)}' is not empty.`,t)}}},_g={assert:mr,check:{hasValue(e,t){return sn(e,t)},lacksValue(e,t){return!sn(e,t)},hasValues(e,t){return t.every(n=>sn(e,n))},lacksValues(e,t){return t.every(n=>!sn(e,n))},isIn(e,t){return Cn(e,t)},isNotIn(e,t){return!Cn(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!sn(e,t))throw new m(`'${h(e)}' does not have value '${h(t)}'.`,n);return e},lacksValue(e,t,n){if(sn(e,t))throw new m(`'${h(e)}' has value '${h(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new m(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new m(`'${h(e)}' does not have values '${h(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new m(`'${h(e)}' has values '${h(r)}'.`,n);return e},isIn(e,t,n){if(!Cn(e,t))throw new m(`'${h(e)}'

is not in

${h(t)}.`,n);return e},isNotIn(e,t,n){if(Cn(e,t))throw new m(`'${h(e)}'

is in

${h(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new m(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new m(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new m(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new m(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new m(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new m(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(sn(e,t))return e},lacksValue(e,t){if(!sn(e,t))return e},hasValues(e,t){if(t.every(n=>sn(e,n)))return e},lacksValues(e,t){if(!t.every(n=>sn(e,n)))return e},isIn(e,t){if(Cn(e,t))return e},isNotIn(e,t){if(!Cn(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:I(mr.hasValue),lacksValue:I(mr.lacksValue),hasValues:I(mr.hasValues),lacksValues:I(mr.lacksValues),isIn:I(mr.isIn),isNotIn:I(mr.isNotIn),isEmpty:I(mr.isEmpty),isNotEmpty:I(mr.isNotEmpty)}},Zl={isHttpStatus(e,t){if(!wr(e,v))throw new m(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(wr(e,v)){if(!Cn(e,eu[t]))throw new m(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new m(`${h(e)} is not a valid HTTP status.`,n)}},Vg={assert:Zl,check:{isHttpStatus(e){return wr(e,v)},isHttpStatusCategory(e,t){return wr(e,v)&&Cn(e,eu[t])}},assertWrap:{isHttpStatus(e,t){if(!wr(e,v))throw new m(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(wr(e,v)){if(!Cn(e,eu[t]))throw new m(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new m(`${h(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(wr(e,v))return e},isHttpStatusCategory(e,t){if(wr(e,v)&&Cn(e,eu[t]))return e}},waitUntil:{isHttpStatus:I(Zl.isHttpStatus),isHttpStatusCategory:I(Zl.isHttpStatusCategory)}},Gl={instanceOf(e,t,n){if(!(e instanceof t))throw new m(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new m(`'${h(e)}' is an instance of '${t.name}'`,n)}},qg={assert:Gl,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new m(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new m(`'${h(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:I(Gl.instanceOf),notInstanceOf:I(Gl.notInstanceOf)}},av=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ae(e,t){return av.some(n=>{try{return n(e,t)}catch{return!1}})}const bi={isKeyOf(e,t,n){if(!Ae(t,e))throw new m(`'${String(e)}' is not a key of '${h(t)}'.`,n)},isNotKeyOf(e,t,n){if(Ae(t,e))throw new m(`'${String(e)}' is a key of '${h(t)}'.`,n)},hasKey(e,t,n){if(!Ae(e,t))throw new m(`'${h(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(Ae(e,t))throw new m(`'${h(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!Ae(e,i));if(r.length)throw new m(`'${h(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>Ae(e,i));if(r.length)throw new m(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n)}},Wg={assert:bi,check:{isKeyOf(e,t){return Ae(t,e)},isNotKeyOf(e,t){return!Ae(t,e)},hasKey:Ae,lacksKey(e,t){return!Ae(e,t)},hasKeys(e,t){return t.every(n=>Ae(e,n))},lacksKeys(e,t){return t.every(n=>!Ae(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!Ae(t,e))throw new m(`'${String(e)}' is not a key of '${h(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(Ae(t,e))throw new m(`'${String(e)}' is a key of '${h(t)}'.`,n);return e},hasKey(e,t,n){if(!Ae(e,t))throw new m(`'${h(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(Ae(e,t))throw new m(`'${h(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!Ae(e,i));if(r.length)throw new m(`'${h(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>Ae(e,i));if(r.length)throw new m(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(Ae(t,e))return e},isNotKeyOf(e,t){if(!Ae(t,e))return e},hasKey(e,t){if(Ae(e,t))return e},lacksKey(e,t){if(!Ae(e,t))return e},hasKeys(e,t){if(t.every(n=>Ae(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!Ae(e,n)))return e}},waitUntil:{isKeyOf:I(bi.isKeyOf),isNotKeyOf:I(bi.isNotKeyOf),hasKey:I(bi.hasKey),lacksKey:I(bi.lacksKey),hasKeys:I(bi.hasKeys),lacksKeys:I(bi.lacksKeys)}};function uv(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)<t)throw new m(`Length '${e.length}' is not at least '${t}'.`,n)}function lv(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)!==t)throw new m(`Length '${e.length}' is not exactly '${t}'.`,n)}const Yl={isLengthAtLeast:uv,isLengthExactly:lv},zg={assert:Yl,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)<t)throw new m(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)!==t)throw new m(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ie(e).length)===t)return e})},waitUntil:{isLengthAtLeast:I(Yl.isLengthAtLeast),isLengthExactly:I(Yl.isLengthExactly)}},cv={never(e){throw new m("This code should not have executed.",e)}},Kg={assert:cv,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Jl={isDefined(e,t){if(e==null)throw new m(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new m(`'${h(e)}' is not a nullish.`,t)}},Zg={assert:Jl,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new m(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new m(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:I(Jl.isDefined),isNullish:I(Jl.isNullish)}},qt={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new m(`${e} is not within the bounds ${h({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new m(`${e} is not outside the bounds ${h({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new m(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new m(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new m(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new m(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new m(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new m(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new m(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new m(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new m(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new m(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new m(`${e} is within ±${n} of ${t}`,r)}},Gg={assert:qt,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new m(`${e} is not within the bounds ${h({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new m(`${e} is not outside the bounds ${h({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new m(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new m(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new m(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new m(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new m(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new m(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new m(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new m(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new m(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new m(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new m(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:I(qt.isInBounds),isOutBounds:I(qt.isOutBounds),isInteger:I(qt.isInteger),isNotInteger:I(qt.isNotInteger),isAbove:I(qt.isAbove),isAtLeast:I(qt.isAtLeast),isBelow:I(qt.isBelow),isAtMost:I(qt.isAtMost),isNaN:I(qt.isNaN),isFinite:I(qt.isFinite),isInfinite:I(qt.isInfinite),isApproximately:I(qt.isApproximately),isNotApproximately:I(qt.isNotApproximately)}};function fv(e,t,n,r,i){return aa(...Gu(e,t,n,r,i),!1)}function Gu(e,t,n,r,i){const o=Array.isArray(n);return[o?e:Ug,o?t:e,o?n:t,o?r:n,o?i:r]}function aa(e,t,n,r,i,o){const s=t(...n);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,r),o?a(l):a()}catch(l){u(new m(`Output from '${t.name}' did not produce expected output. ${It(l)}`,i))}});try{return e(s,r),o?s:void 0}catch(a){throw new m(`Output from '${t.name}' did not produce expected output. ${It(a)}`,i)}}function dv(e,t,n,r,i){try{const o=aa(...Gu(e,t,n,r,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function mv(e,t,n,r,i){return aa(...Gu(e,t,n,r,i),!0)}function hv(e,t,n,r,i){try{const o=aa(...Gu(e,t,n,r,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const Hl=Symbol("not set");async function pv(e,t,n,r,i,o){const s=Array.isArray(n),a=s?e:Ug,u=s?t:e,l=s?n:t,c=s?r:n,f=Sg(s?i:r),d=s?o:i,y=Us(f.timeout,{milliseconds:!0}).milliseconds,C=Us(f.interval,{milliseconds:!0});let D=Hl,S;async function A(){try{D=await aa(a,u,l,c,void 0,!0)}catch(j){D=Hl,S=et(j)}}const N=Date.now();for(;D===Hl;)if(await A(),await Mi(C),Date.now()-N>=y)throw Cf(S,qo(d,`Timeout of '${y}' milliseconds exceeded waiting for callback value to match expectations`));return D}const gv={output:fv},Yg={assert:gv,check:{output:dv},assertWrap:{output:mv},checkWrap:{output:hv},waitUntil:{output:pv}},hs={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new m(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new m(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new m(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new m(`'${h(e)}' is not a Primitive.`,t)}},Jg={assert:hs,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new m(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new m(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new m(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new m(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:I(hs.isNotPrimitive),isNotPropertyKey:I(hs.isNotPropertyKey),isPrimitive:I(hs.isPrimitive),isPropertyKey:I(hs.isPropertyKey)}},ps={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new m(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new m(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new m(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new m(`'${h(e)}' is a Promise.`,t)}},Hg={assert:ps,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new m(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new m(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new m(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new m(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:I(ps.isPromiseLike,!0),isNotPromiseLike:I(ps.isNotPromiseLike,!0),isPromise:I(ps.isPromise,!0),isNotPromise:I(ps.isNotPromise,!0)}},Xl={matches(e,t,n){if(!t.test(e))throw new m(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new m(`'${e}' matches ${t}`,n)}},Xg={assert:Xl,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new m(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new m(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:I(Xl.matches,!0),mismatches:I(Xl.mismatches,!0)}},Ue={isArray(e,t){if(!Array.isArray(e))throw new m(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new m(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new m(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new m(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new m(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new m(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new m(`'${h(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new m(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new m(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new m(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new m(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new m(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new m(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new m(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new m(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new m(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new m(`'${h(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new m(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new m(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new m(`'${h(e)}' is a undefined.`,t)}},Qg={assert:Ue,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new m(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new m(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new m(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new m(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new m(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new m(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new m(`'${h(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new m(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new m(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new m(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new m(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new m(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new m(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new m(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new m(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new m(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new m(`'${h(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new m(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new m(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new m(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:I(Ue.isArray),isBigInt:I(Ue.isBigInt),isBoolean:I(Ue.isBoolean),isFunction:I(Ue.isFunction),isNull:I(Ue.isNull),isNumber:I(Ue.isNumber),isObject:I(Ue.isObject),isString:I(Ue.isString),isSymbol:I(Ue.isSymbol),isUndefined:I(Ue.isUndefined),isNotArray:I(Ue.isNotArray),isNotBigInt:I(Ue.isNotBigInt),isNotBoolean:I(Ue.isNotBoolean),isNotFunction:I(Ue.isNotFunction),isNotNull:I(Ue.isNotNull),isNotNumber:I(Ue.isNotNumber),isNotObject:I(Ue.isNotObject),isNotString:I(Ue.isNotString),isNotSymbol:I(Ue.isNotSymbol),isNotUndefined:I(Ue.isNotUndefined)}};var Kt;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Kt||(Kt={}));function Of(e,t,n){Bf(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n)}function ih(e,t,n){Bf(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,n)}function Bf(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new m(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=It(e);if(typeof n.matchMessage=="string"){if(!kg(i,n.matchMessage))throw new m(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new m(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new m(t.notInstance,r);else throw new m(t.noError,r)}function oh(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=It(e);if(typeof t.matchMessage=="string"){if(!kg(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Yu(e,t,n,r){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,a)=>{try{await o}catch(u){i=et(u)}try{ih(i,n,r),e===Kt.Assert?s():e===Kt.Check?s(!0):s(i)}catch(u){e===Kt.CheckWrap?s(void 0):e===Kt.Check?s(!1):a(et(u))}})}catch(o){i=et(o)}try{return ih(i,n,r),e===Kt.Check?!0:e!==Kt.Assert?i:void 0}catch(o){if(e===Kt.CheckWrap)return;if(e===Kt.Check)return!1;throw o}}function yv(e,t,n){return Yu(Kt.Assert,e,t,n)}function wv(e,t){return Yu(Kt.Check,e,t)}function bv(e,t,n){return Yu(Kt.AssertWrap,e,t,n)}function $v(e,t,n){return Yu(Kt.CheckWrap,e,t,n)}const vv=I(Of);function Dv(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${h(o)}'`);return vv(i,async()=>{try{await o();return}catch(u){return et(u)}},a,s)}const Ev={throws:yv,isError:Of},ey={assert:Ev,check:{throws:wv,isError(e,t){return oh(e,t)}},assertWrap:{throws:bv,isError(e,t,n){return Bf(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:$v,isError(e,t){if(oh(e,t))return e}},waitUntil:{throws:Dv,isError:I(Of)}},Kr=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Ql={isUuid(e,t){if(!String(e).match(Kr))throw new m(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Kr))throw new m(`'${String(e)}' is a UUID.`,t)}},ty={assert:Ql,check:{isUuid(e){return!!String(e).match(Kr)},isNotUuid(e){return!String(e).match(Kr)}},assertWrap:{isUuid(e,t){if(!String(e).match(Kr))throw new m(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Kr))throw new m(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Kr))return e},isNotUuid(e){if(!String(e).match(Kr))return e}},waitUntil:{isUuid:I(Ql.isUuid),isNotUuid:I(Ql.isNotUuid)}},xv={...Kg.assert,...Ng.assert,...Ig.assert,...Tg.assert,...Pg.assert,...Vg.assert,...qg.assert,...Mg.assert,...Wg.assert,...zg.assert,...Zg.assert,...Gg.assert,...Yg.assert,...Jg.assert,...Hg.assert,...Xg.assert,...Qg.assert,...jg.assert,...ey.assert,...ty.assert,..._g.assert},Rf=[Ng,Ig,Tg,Pg,Vg,qg,Mg,Wg,zg,Kg,Zg,Gg,Yg,Jg,Hg,Xg,Qg,jg,ey,ty,_g],Cv=Object.assign({},...Rf.map(e=>e.check)),F=Object.assign(function(t){return!!t},Cv);function Av(e,t,n){return iu(e,t,n,new Set)}function iu(e,t,n,r){if(e=sh(e),t=sh(t),F.isObject(e)&&F.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!iu(Ie(e).sort(),Ie(t).sort(),n,r))return!1;let i=!1;const o=Ie(e).map(s=>{const a=iu(e[s],t[s],n,r);return F.isPromise(a)&&(i=!0),a});return ah(i,o)}else if(F.isArray(e)&&F.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,a)=>{const u=iu(s,t[a],n,r);return F.isPromise(u)&&(i=!0),u});return ah(i,o)}else return n(e,t)}function sh(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function ah(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(F.isTrue))}catch(i){r(et(i))}}):t.every(F.isTrue)}const Fv=Object.assign({},...Rf.map(e=>e.assertWrap)),ei=Object.assign(function(t,n){if(!t)throw new m("Assertion failed.",n);return t},Fv);function kv(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const Sv={tsType:kv},Nv={assert:Sv},Iv={fail:e=>{throw new m("Failure triggered.",e)}},Pv={...Nv.assert,...xv,...Iv},In=Object.assign(function(t,n){if(!t)throw new m("Assertion failed.",n)},Pv),Tv=Object.assign({},...Rf.map(e=>e.checkWrap)),Mv=Object.assign(function(t){if(t)return t},Tv);function Ov(e,t){return F.hasKey(e,"entryType")&&e.entryType===t}function ro(e,t){return e.controlType===t}var H;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(H||(H={}));const ny=Symbol("any-type"),Bv={[H.Checkbox]:!1,[H.Color]:"",[H.Dropdown]:"",[H.Hidden]:ny,[H.Number]:0,[H.Text]:""};function Rv(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,i])=>{const o=Bv[i.controlType];o!==ny&&(typeof o!=typeof i.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function Lv(e,t,n){const r=t;if(e.has(r))return e.get(r);{const i=n();return F.isPromise(i)?new Promise(async(o,s)=>{try{const a=await i;e.set(r,a),o(a)}catch(a){s(et(a))}}):(e.set(r,i),i)}}function ua(e,t,n){if(t in e)return e[t];{const r=n();return F.isPromise(r)?new Promise(async(i,o)=>{try{const s=await r;e[t]=s,i(s)}catch(s){o(et(s))}}):(e[t]=r,r)}}function Ju(e){return Ie(e).map(t=>[t,e[t]])}function _s(e){return Object.fromEntries(e)}function _i(e,t,n){return e.reduce((r,i,o,s)=>{const a=t(i,o,s);return n(a,i,o,s)&&r.push(a),r},[])}function Uv(e,t,n={}){try{let r=!1;const i=e.map((o,s,a)=>{const u=t(o,s,a);return u instanceof Promise?(r=!0,u):u?[u.key,u.value]:void 0}).filter(F.isTruthy);return r?new Promise(async(o,s)=>{try{const a=_i(await Promise.all(i),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},F.isTruthy);o(_s(a))}catch(a){s(et(a))}}):_s(i)}catch(r){throw et(r)}}function jv(e){return Array.isArray(e)?e:[e]}function _v({min:e,max:t}){const{min:n,max:r}=vp({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const a=Math.floor(256**s/i)*i,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,f,d)=>c+f*256**d,0);while(l>=a);return n+l%i}const uh=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Ii(e=16){let t="";for(let n=0;n<e;n++){const r=_v({min:0,max:uh.length-1});t+=uh[r]}return t}function ry(e){if(F.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>It(t).trim()).join(`
`))}function Vv(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const qv="modulepreload",Wv=function(e){return"/vira/book/"+e},lh={},vu=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");i=u(n.map(l=>{if(l=Wv(l),l in lh)return;lh[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":qv,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((y,C)=>{d.addEventListener("load",y),d.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};var st;(function(e){e.Standard="stdout",e.Error="stderr"})(st||(st={}));var ne;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ne||(ne={}));async function zv(){return await $p({async[Gn.Node](){const e=(await vu(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[ne.Bold]:e.bold.open,[ne.Debug]:e.blueBright.open,[ne.Error]:e.red.open,[ne.Faint]:e.gray.open,[ne.Info]:e.cyan.open,[ne.Mutate]:e.magenta.open,[ne.NormalWeight]:"\x1B[22m",[ne.Plain]:"",[ne.Reset]:e.reset.open,[ne.Success]:e.green.open,[ne.Warning]:e.yellow.open}},[Gn.Web](){return Promise.resolve({[ne.Bold]:"font-weight: bold",[ne.Debug]:"color: blue",[ne.Error]:"color: red",[ne.Faint]:"color: grey",[ne.Info]:"color: teal",[ne.Mutate]:"color: magenta",[ne.NormalWeight]:"",[ne.Plain]:"",[ne.Reset]:"",[ne.Success]:"color: green",[ne.Warning]:"color: orange"})}})}const on=await zv(),Kv={[ne.Bold]:{colors:[on.bold],logType:st.Standard},[ne.Debug]:{colors:[on.debug],logType:st.Standard},[ne.Faint]:{colors:[on.faint],logType:st.Standard},[ne.Info]:{colors:[on.info],logType:st.Standard},[ne.Mutate]:{colors:[on.mutate,on.bold],logType:st.Standard},[ne.NormalWeight]:{colors:[on.normalWeight],logType:st.Standard},[ne.Plain]:{colors:[],logType:st.Standard},[ne.Reset]:{colors:[on.reset],logType:st.Standard},[ne.Success]:{colors:[on.success,on.bold],logType:st.Standard},[ne.Error]:{colors:[on.error,on.bold],logType:st.Error},[ne.Warning]:{colors:[on.warning],logType:st.Error}};function Ht({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function wo({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function Zv(e,t){try{let n=!1;const r=Ju(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(n=!0,s):s?[s.key,s.value]:void 0}).filter(F.isTruthy);return n?new Promise(async(i,o)=>{try{const s=_i(await Promise.all(r),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},F.isTruthy);i(_s(s))}catch(s){o(et(s))}}):_s(r)}catch(n){throw et(n)}}function Gv(e,t){return Zv(e,(n,r)=>{const i=r,o=t(r,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function iy(e,...t){const n={...e};return t.forEach(r=>{r&&Ju(r).forEach(([i,o])=>{o!=null&&(n[i]=o)})}),n}const Yv="px";function oy(e){return sy({value:e,suffix:Yv})}function sy({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Jv({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function Hv(){return await $p({async[Gn.Node](){const{inspect:e}=await vu(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[ne.Reset].colors.join("")].join(""),css:void 0}}},[Gn.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:_i(n.colorConfig[t].colors,s=>Jv({value:s,suffix:";"}),F.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?It(s):h(s)).join(`
`),n.omitColors?"":n.colorConfig[ne.Reset].colors.join("")].join(""),css:r}}}})}const Xv=await Hv(),Qv={colorConfig:Kv,omitColors:!1},eD=ay({[st.Error](){},[st.Standard](){}});function ay(e,t){const n=iy(Qv,t);function r(o){e[n.colorConfig[o.colorKey].logType](Xv({...o,options:n}))}const i=Gv(ne,o=>(...s)=>r({args:s,colorKey:o}));return{...i,if(o){return o?i:eD}}}const tD=xf(Gn.Node)?{[st.Error]({text:e}){process.stderr.write(e+`
`)},[st.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[st.Error]({text:e,css:t}){console.error(Ht({value:e,prefix:"%c"}),t)},[st.Standard]({text:e,css:t}){console.log(Ht({value:e,prefix:"%c"}),t)}},nD=ay(tD);function rD(e,{min:t,max:n}){return Math.min(Math.max(e,t),n)}function iD({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){const i=Cg(Fg(t,{caseSensitive:n}),"g"),o=[];return e.replace(i,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);o.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),o}function oD(e,t,{caseSensitive:n}){const r=iD({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=Fg(t,{caseSensitive:n});return e.split(i).reduce((s,a,u)=>{const l=r[u],c=s.concat(a);if(l){const f=e.slice(l.index,l.index+l.length);return c.concat(f)}else return c},[])}function sD(e,t){return e.split(t)}function ch(e,t){const{min:n,max:r}=vp(t);if(t.takeOverflow){const i=r-n+1,o=(e-n)%i;return o<0?n+i+o:n+o}else return e>r?n:e<n?r:e}function dn(e,t){let n=!1;const r=Ie(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(n=!0),i[o]=s,i},{});return n?new Promise(async(i,o)=>{try{await Promise.all(Ie(r).map(async s=>{const a=await r[s];r[s]=a})),i(r)}catch(s){o(et(s))}}):r}function Lf(e,t){const n=Ju(e).filter(([r,i])=>t(r,i,e));return _s(n)}function aD(e,t){return Lf(e,n=>!t.includes(n))}function fh(e){return Ie(e).map(t=>e[t])}function uy(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function uD(e,t){return t.capitalizeFirstLetter?lD(e):e}function lD(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const cD={capitalizeFirstLetter:!1};var Ao;(function(e){e.Upper="upper",e.Lower="lower"})(Ao||(Ao={}));function fD(e){return e.toLowerCase()!==e.toUpperCase()}function dh(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(fD(r)){if(t===Ao.Upper&&r!==r.toUpperCase()||t===Ao.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function dD(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const o=i[1];return o?o.toUpperCase():""});return uD(r,iy(cD,t))}function mD(e){return e.split("").reduce((n,r,i,o)=>{const s=i>0&&o[i-1]||"",a=i<o.length-1&&o[i+1]||"",u=dh(s,Ao.Lower,{rejectNoCaseCharacters:!0})||dh(a,Ao.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function hD(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function pD({value:e,wrapper:t}){return Ht({value:sy({value:e,suffix:t}),prefix:t})}function tr(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function Uf(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}class gD{listeners={};universalListeners=new Map;getListenerCount(){return fh(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)+this.universalListeners.size}listenToAll(t,n={}){const r=()=>this.universalListeners.delete(t)||!1;function i(o,s){n.once&&r(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:r}),r}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,n,r={}){const i=F.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(n)||!1;function s(a,u){r.once&&o(),n(a,u)}return ua(this.listeners,i,()=>new Map).set(n,{listener:s,removeListener:o}),o}removeListener(t,n){const r=F.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const o=i.get(n);return o?o.removeListener():!1}dispatch(t){const n=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),r+this.universalListeners.size}removeAllListeners(){const n=fh(this.listeners).reduce((r,i)=>{const o=i.size||0;return i.clear(),r+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),n}destroy(){this.removeAllListeners()}}class jf extends gD{}function ly(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _c(e,t,n){return ly(globalThis,e,t,n)}function _f(e,t){return Du(e.title),e.parent?[..._f(e.parent),Du(e.parent.title)].concat([]):[]}function Du(e){return uy(e).toLowerCase().replaceAll(/\s/g,"-")}function yD({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}const wD={[$t.ElementExample]:()=>[],[$t.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Rv(e.controls,e.title)].filter(F.isTruthy),[$t.Root]:()=>[]},Eu="_isBookTreeNode",cy=new Map;function bD(e){return cy.get(e)}function $D(e,t){Lv(cy,e,()=>t)}function bo(e,t){return fy(e)&&e.entry.entryType===t}function fy(e){return!!(F.hasKeys(e,[Eu,"entry"])&&e[Eu])}function vD(){return{[Eu]:!0,entry:{entryType:$t.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function DD({entries:e,debug:t}){const n=bD(e);if(n)return n;const r=vD();e.forEach(s=>Vf({tree:r,newEntry:s,debug:t,manuallyAdded:!0}));const i=dy(r),o={tree:r,flattenedNodes:i};return $D(e,o),t&&console.info("element-book tree:",r),o}function ED(e,t,n){if(!t.parent)return e;const r=Vc(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Vf({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const i=Vc(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${_f(t).join(" > ")}`);return i}function Vf({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const i=wD[t.entryType](t);t.errors.push(...i);const o=ED(e,t,n),s=Du(t.title),a=o.children[s];if(a){if(r){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[Eu]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:r};o.children[s]=u,Ov(t,$t.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Vf({tree:e,newEntry:l,debug:n,manuallyAdded:r}))}function Vc(e,t){const n=fy(e)?e.fullUrlBreadcrumbs.slice(0,-1):_f(e);return n.length?n.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function dy(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>dy(i));return[e,...n].flat()}function qf(e,t){return Wf(e,["",...t],void 0)}function Wf(e,t,n){const r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);const o=e.children[i||""],s=o&&Wf(o,r,n);return{...e.controls,...s}}function xD(e,t,n){const r={...e};return Wf(r,["",...t],n),r}function my(e,t){const n=t?.controls||(bo(e,$t.Page)?dn(e.entry.controls,(i,o)=>o.initValue):{});return{children:dn(e.children,(i,o)=>my(o,t?.children?.[o.urlBreadcrumb])),controls:n}}function Ee(e){const t={...e,entryType:$t.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const i={...r,isVertical:t.useVerticalExamples,entryType:$t.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(F.isTruthy)};n.add(r.title),t.elementExamples[Du(i.title)]=i}}),t}var Zt;(function(e){e.Search="search",e.Book="book"})(Zt||(Zt={}));function qc(e){return e[0]===Zt.Book?"":e[1]?decodeURIComponent(e[1]):""}const Fo={hash:void 0,paths:[Zt.Book],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ou=globalThis,zf=ou.ShadowRoot&&(ou.ShadyCSS===void 0||ou.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kf=Symbol(),mh=new WeakMap;let hy=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Kf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(zf&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=mh.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&mh.set(n,t))}return t}toString(){return this.cssText}};const Qe=e=>new hy(typeof e=="string"?e:e+"",void 0,Kf),su=(e,...t)=>{const n=e.length===1?e[0]:t.reduce(((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new hy(n,e,Kf)},CD=(e,t)=>{if(zf)e.adoptedStyleSheets=t.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of t){const r=document.createElement("style"),i=ou.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},hh=zf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Qe(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:AD,defineProperty:FD,getOwnPropertyDescriptor:kD,getOwnPropertyNames:SD,getOwnPropertySymbols:ND,getPrototypeOf:ID}=Object,Hu=globalThis,ph=Hu.trustedTypes,PD=ph?ph.emptyScript:"",TD=Hu.reactiveElementPolyfillSupport,Ss=(e,t)=>e,xu={toAttribute(e,t){switch(t){case Boolean:e=e?PD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Zf=(e,t)=>!AD(e,t),gh={attribute:!0,type:String,converter:xu,reflect:!1,useDefault:!1,hasChanged:Zf};Symbol.metadata??=Symbol("metadata"),Hu.litPropertyMetadata??=new WeakMap;let lo=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=gh){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&FD(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=kD(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get:i,set(s){const a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??gh}static _$Ei(){if(this.hasOwnProperty(Ss("elementProperties")))return;const t=ID(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ss("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ss("properties"))){const n=this.properties,r=[...SD(n),...ND(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(hh(i))}else t!==void 0&&n.push(hh(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return CD(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:xu).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:xu;this._$Em=i;const a=s.fromAttribute(n,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){const i=this.constructor,o=this[t];if(r??=i.getPropertyOptions(t),!((r.hasChanged??Zf)(o,n)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??n??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};lo.elementStyles=[],lo.shadowRootOptions={mode:"open"},lo[Ss("elementProperties")]=new Map,lo[Ss("finalized")]=new Map,TD?.({ReactiveElement:lo}),(Hu.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gf=globalThis,Cu=Gf.trustedTypes,yh=Cu?Cu.createPolicy("lit-html",{createHTML:e=>e}):void 0,py="$lit$",Gr=`lit$${Math.random().toFixed(9).slice(2)}$`,gy="?"+Gr,MD=`<${gy}>`,Oi=document,Vs=()=>Oi.createComment(""),qs=e=>e===null||typeof e!="object"&&typeof e!="function",Yf=Array.isArray,OD=e=>Yf(e)||typeof e?.[Symbol.iterator]=="function",ec=`[ 	
\f\r]`,gs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wh=/-->/g,bh=/>/g,$i=RegExp(`>|${ec}(?:([^\\s"'>=/]+)(${ec}*=${ec}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$h=/'/g,vh=/"/g,yy=/^(?:script|style|textarea|title)$/i,BD=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),RD=BD(1),mn=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),Dh=new WeakMap,Fi=Oi.createTreeWalker(Oi,129);function wy(e,t){if(!Yf(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return yh!==void 0?yh.createHTML(t):t}const LD=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=gs;for(let a=0;a<n;a++){const u=e[a];let l,c,f=-1,d=0;for(;d<u.length&&(s.lastIndex=d,c=s.exec(u),c!==null);)d=s.lastIndex,s===gs?c[1]==="!--"?s=wh:c[1]!==void 0?s=bh:c[2]!==void 0?(yy.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=$i):c[3]!==void 0&&(s=$i):s===$i?c[0]===">"?(s=i??gs,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?$i:c[3]==='"'?vh:$h):s===vh||s===$h?s=$i:s===wh||s===bh?s=gs:(s=$i,i=void 0);const y=s===$i&&e[a+1].startsWith("/>")?" ":"";o+=s===gs?u+MD:f>=0?(r.push(l),u.slice(0,f)+py+u.slice(f)+Gr+y):u+Gr+(f===-2?a:y)}return[wy(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Ws{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=t.length-1,u=this.parts,[l,c]=LD(t,n);if(this.el=Ws.createElement(l,r),Fi.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Fi.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(py)){const d=c[s++],y=i.getAttribute(f).split(Gr),C=/([.?@])?(.*)/.exec(d);u.push({type:1,index:o,name:C[2],strings:y,ctor:C[1]==="."?jD:C[1]==="?"?_D:C[1]==="@"?VD:Xu}),i.removeAttribute(f)}else f.startsWith(Gr)&&(u.push({type:6,index:o}),i.removeAttribute(f));if(yy.test(i.tagName)){const f=i.textContent.split(Gr),d=f.length-1;if(d>0){i.textContent=Cu?Cu.emptyScript:"";for(let y=0;y<d;y++)i.append(f[y],Vs()),Fi.nextNode(),u.push({type:2,index:++o});i.append(f[d],Vs())}}}else if(i.nodeType===8)if(i.data===gy)u.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(Gr,f+1))!==-1;)u.push({type:7,index:o}),f+=Gr.length-1}o++}}static createElement(t,n){const r=Oi.createElement("template");return r.innerHTML=t,r}}function ko(e,t,n=e,r){if(t===mn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const o=qs(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=ko(e,i._$AS(e,t.values),i,r)),t}let UD=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??Oi).importNode(n,!0);Fi.currentNode=i;let o=Fi.nextNode(),s=0,a=0,u=r[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new Go(o,o.nextSibling,this,t):u.type===1?l=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(l=new qD(o,this,t)),this._$AV.push(l),u=r[++a]}s!==u?.index&&(o=Fi.nextNode(),s++)}return Fi.currentNode=Oi,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class Go{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=ko(this,t,n),qs(t)?t===te||t==null||t===""?(this._$AH!==te&&this._$AR(),this._$AH=te):t!==this._$AH&&t!==mn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):OD(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==te&&qs(this._$AH)?this._$AA.nextSibling.data=t:this.T(Oi.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ws.createElement(wy(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const o=new UD(i,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(t){let n=Dh.get(t.strings);return n===void 0&&Dh.set(t.strings,n=new Ws(t)),n}k(t){Yf(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Go(this.O(Vs()),this.O(Vs()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Xu{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=te,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=te}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=ko(this,t,n,0),s=!qs(t)||t!==this._$AH&&t!==mn,s&&(this._$AH=t);else{const a=t;let u,l;for(t=o[0],u=0;u<o.length-1;u++)l=ko(this,a[r+u],n,u),l===mn&&(l=this._$AH[u]),s||=!qs(l)||l!==this._$AH[u],l===te?t=te:t!==te&&(t+=(l??"")+o[u+1]),this._$AH[u]=l}s&&!i&&this.j(t)}j(t){t===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class jD extends Xu{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===te?void 0:t}}class _D extends Xu{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==te)}}class VD extends Xu{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=ko(this,t,n,0)??te)===mn)return;const r=this._$AH,i=t===te&&r!==te||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==te&&(r===te||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class qD{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ko(this,t)}}const WD={I:Go},zD=Gf.litHtmlPolyfillSupport;zD?.(Ws,Go),(Gf.litHtmlVersions??=[]).push("3.3.1");const KD=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const o=n?.renderBefore??null;r._$litPart$=i=new Go(t.insertBefore(Vs(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jf=globalThis;let Ns=class extends lo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=KD(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return mn}};Ns._$litElement$=!0,Ns.finalized=!0,Jf.litElementHydrateSupport?.({LitElement:Ns});const ZD=Jf.litElementPolyfillSupport;ZD?.({LitElement:Ns});(Jf.litElementVersions??=[]).push("4.2.1");function Mr(e){if(F.isObject(e))return dn(e,(n,r)=>{if(!F.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(mD(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const o=r,s=n.startsWith("--")?Qe(n):n.startsWith("-")?su`-${Qe(n)}`:su`--${Qe(n)}`;return{name:s,value:su`var(${s}, ${Qe(o)})`,default:String(o)}});throw new TypeError(`Invalid setup input for '${Mr.name}' function.`)}function GD({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}const fe=Mr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),YD={nav:{hover:{background:fe["element-book-nav-hover-background-color"],foreground:fe["element-book-nav-hover-foreground-color"]},active:{background:fe["element-book-nav-active-background-color"],foreground:fe["element-book-nav-active-foreground-color"]},selected:{background:fe["element-book-nav-selected-background-color"],foreground:fe["element-book-nav-selected-foreground-color"]}},accent:{icon:fe["element-book-accent-icon-color"]},page:{background:fe["element-book-page-background-color"],backgroundFaint1:fe["element-book-page-background-faint-level-1-color"],backgroundFaint2:fe["element-book-page-background-faint-level-2-color"],foreground:fe["element-book-page-foreground-color"],foregroundFaint1:fe["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:fe["element-book-page-foreground-faint-level-2-color"]}};function JD(e,t){by(e,t,YD)}function Wc(e){return F.hasKey(e,"_$cssResult$")}function Eh(e){return F.hasKeys(e,["name","value","default"])&&F.isString(e.default)&&Wc(e.name)&&Wc(e.value)}function by(e,t,n){Object.entries(t).forEach(([r,i])=>{const o=n[r];if(!o)throw new Error(`no nestedCssVar at key '${r}'`);if(Wc(i)){if(!Eh(o))throw new Error(`got a CSS result at '${r}' but no CSS var`);GD({forCssVar:o,onElement:e,toValue:String(i)})}else{if(Eh(o))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);by(e,i,o)}})}function ke(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let r=t[0].length,i=t[0].map((s,a)=>t.map(u=>u[a])),o=e.map(s=>i.map(a=>{let u=0;if(!Array.isArray(s)){for(let l of a)u+=s*l;return u}for(let l=0;l<s.length;l++)u+=s[l]*(a[l]||0);return u}));return n===1&&(o=o[0]),r===1?o.map(s=>s[0]):o}function la(e){return Hr(e)==="string"}function Hr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Au(e,{precision:t,unit:n}){return ti(e)?"none":$y(e,t)+(n??"")}function ti(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function He(e){return ti(e)?0:e}function $y(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const i=10**(t-r);return Math.floor(e*i+.5)/i}const HD={deg:1,grad:.9,rad:180/Math.PI,turn:360};function vy(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let o=e.match(t);if(o){let s=[];return o[2].replace(i,(a,u)=>{let l=u.match(r),c=u;if(l){let f=l[0],d=c.slice(0,-f.length);f==="%"?(c=new Number(d/100),c.type="<percentage>"):(c=new Number(d*HD[f]),c.type="<angle>",c.unit=f)}else n.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),s.push(c)}),{name:o[1].toLowerCase(),rawName:o[1],rawArgs:o[2],args:s}}}function Dy(e){return e[e.length-1]}function zs(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function Ey(e,t,n){return(n-e)/(t-e)}function Hf(e,t,n){return zs(t[0],t[1],Ey(e[0],e[1],n))}function xy(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let i=new String(r[1]);return i.range=[+r[2],+r[3]],i}return n}))}function Cy(e,t,n){return Math.max(Math.min(n,t),e)}function Qu(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function or(e,t){return Qu(Math.abs(e)**t,e)}function Xf(e,t){return t===0?0:e/t}function Ay(e,t,n=0,r=e.length){for(;n<r;){const i=n+r>>1;e[i]<t?n=i+1:r=i}return n}var XD=Object.freeze({__proto__:null,bisectLeft:Ay,clamp:Cy,copySign:Qu,interpolate:zs,interpolateInv:Ey,isNone:ti,isString:la,last:Dy,mapRange:Hf,multiplyMatrices:ke,parseCoordGrammar:xy,parseFunction:vy,serializeNumber:Au,skipNone:He,spow:or,toPrecision:$y,type:Hr,zdiv:Xf});class QD{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],n&&this[i][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const ni=new QD;var hn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const jt={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function zc(e){return Array.isArray(e)?e:jt[e]}function Fu(e,t,n,r={}){if(e=zc(e),t=zc(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(ni.run("chromatic-adaptation-start",i),i.M||(i.W1===jt.D65&&i.W2===jt.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===jt.D50&&i.W2===jt.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ni.run("chromatic-adaptation-end",i),i.M)return ke(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const e5=new Set(["<number>","<percentage>","<angle>"]);function xh(e,t,n,r){return Object.entries(e.coords).map(([o,s],a)=>{let u=t.coordGrammar[a],l=r[a],c=l?.type,f;if(l.none?f=u.find(C=>e5.has(C)):f=u.find(C=>C==c),!f){let C=s.name||o;throw new TypeError(`${c??l.raw} not allowed for ${C} in ${n}()`)}let d=f.range;c==="<percentage>"&&(d||=[0,1]);let y=s.range||s.refRange;return d&&y&&(r[a]=Hf(d,y,r[a])),f})}function Fy(e,{meta:t}={}){let n={str:String(e)?.trim()};if(ni.run("parse-start",n),n.color)return n.color;if(n.parsed=vy(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let i=n.parsed.args.shift(),o=i.startsWith("--")?i.substring(2):`--${i}`,s=[i,o],a=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let c of U.all){let f=c.getFormat("color");if(f&&(s.includes(f.id)||f.ids?.filter(d=>s.includes(d)).length)){const d=Object.keys(c.coords).map((C,D)=>n.parsed.args[D]||0);let y;return f.coordGrammar&&(y=xh(c,f,"color",d)),t&&Object.assign(t,{formatId:"color",types:y}),f.id.startsWith("--")&&!i.startsWith("--")&&hn.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${i}).`),i.startsWith("--")&&!f.id.startsWith("--")&&hn.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:d,alpha:a}}}let u="",l=i in U.registry?i:o;if(l in U.registry){let c=U.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of U.all){let o=i.getFormat(r);if(o&&o.type==="function"){let s=1;(o.lastAlpha||Dy(n.parsed.args).alpha)&&(s=n.parsed.args.pop());let a=n.parsed.args,u;return o.coordGrammar&&(u=xh(i,o,r,a)),t&&Object.assign(t,{formatId:o.name,types:u}),{spaceId:i.id,coords:a,alpha:s}}}}else for(let r of U.all)for(let i in r.formats){let o=r.formats[i];if(o.type!=="custom"||o.test&&!o.test(n.str))continue;let s=o.parse(n.str);if(s)return s.alpha??=1,t&&(t.formatId=i),s}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function X(e){if(Array.isArray(e))return e.map(X);if(!e)throw new TypeError("Empty color reference");la(e)&&(e=Fy(e));let t=e.space||e.spaceId;return t instanceof U||(e.space=U.get(t)),e.alpha===void 0&&(e.alpha=1),e}const t5=75e-6;class U{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?U.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=t.white??this.base.white??"D65";this.white=zc(r),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:U.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:n5(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ni.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=t5}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((i,o)=>{let s=r[o];if(s.type!=="angle"&&s.range){if(Number.isNaN(i))return!0;let[a,u]=s.range;return(a===void 0||i>=a-n)&&(u===void 0||i<=u+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Ch(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=Ch(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const a=X(t);[t,n]=[a.space,a.coords]}if(t=U.get(t),this.equals(t))return n;n=n.map(a=>Number.isNaN(a)?0:a);let r=this.path,i=t.path,o,s;for(let a=0;a<r.length&&r[a].equals(i[a]);a++)o=r[a],s=a;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=r.length-1;a>s;a--)n=r[a].toBase(n);for(let a=s+1;a<i.length;a++)n=i[a].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=X(t);[t,n]=[r.space,r.coords]}return t=U.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],i=r.range||r.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(U.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof U)return t;if(Hr(t)==="string"){let i=U.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(n.length)return U.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=Hr(t),i,o;if(r==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=U.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Hr(o),r==="number"||r==="string"&&o>=0){let u=Object.entries(i.coords)[o];if(u)return{space:i,id:u[0],index:o,...u[1]}}i=U.get(i);let s=o.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function n5(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function Ch(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=xy(e.coords);let n=Object.entries(t).map(([r,i],o)=>{let s=e.coordGrammar[o][0],a=i.range||i.refRange,u=s.range,l="";return s=="<percentage>"?(u=[0,100],l="%"):s=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(r,i)=>r.map((o,s)=>{let{fromRange:a,toRange:u,suffix:l}=n[s];return a&&u&&(o=Hf(a,u,o)),o=Au(o,{precision:i,unit:l}),o})}return e}var vt=new U({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class tn extends U{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=vt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=ke(t.toXYZ_M,n);return this.white!==this.base.white&&(r=Fu(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=Fu(this.base.white,this.white,n),ke(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function ca(e,t){return e=X(e),!t||e.space.equals(t)?e.coords.slice():(t=U.get(t),t.from(e))}function un(e,t){e=X(e);let{space:n,index:r}=U.resolveCoord(t,e.space);return ca(e,n)[r]}function Qf(e,t,n){return e=X(e),t=U.get(t),e.coords=t.to(e.space,n),e}Qf.returns="color";function Pr(e,t,n){if(e=X(e),arguments.length===2&&Hr(arguments[1])==="object"){let r=arguments[1];for(let i in r)Pr(e,i,r[i])}else{typeof n=="function"&&(n=n(un(e,t)));let{space:r,index:i}=U.resolveCoord(t,e.space),o=ca(e,r);o[i]=n,Qf(e,r,o)}return e}Pr.returns="color";var ed=new U({id:"xyz-d50",name:"XYZ D50",white:"D50",base:vt,fromBase:e=>Fu(vt.white,"D50",e),toBase:e=>Fu("D50",vt.white,e)});const r5=216/24389,Ah=24/116,ja=24389/27;let tc=jt.D50;var ln=new U({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:tc,base:ed,fromBase(e){let n=e.map((r,i)=>r/tc[i]).map(r=>r>r5?Math.cbrt(r):(ja*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Ah?Math.pow(t[0],3):(116*t[0]-16)/ja,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ja,t[2]>Ah?Math.pow(t[2],3):(116*t[2]-16)/ja].map((r,i)=>r*tc[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function lr(e){return(e%360+360)%360}function i5(e,t){if(e==="raw")return t;let[n,r]=t.map(lr),i=r-n;return e==="increasing"?i<0&&(r+=360):e==="decreasing"?i>0&&(n+=360):e==="longer"?-180<i&&i<180&&(i>0?n+=360:r+=360):e==="shorter"&&(i>180?n+=360:i<-180&&(r+=360)),[n,r]}var Ks=new U({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ln,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),lr(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Fh=25**7,ku=Math.PI,kh=180/ku,io=ku/180;function Sh(e){const t=e*e;return t*t*t*e}function ky(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=X([e,t]);let[o,s,a]=ln.from(e),u=Ks.from(ln,[o,s,a])[1],[l,c,f]=ln.from(t),d=Ks.from(ln,[l,c,f])[1];u<0&&(u=0),d<0&&(d=0);let y=(u+d)/2,C=Sh(y),D=.5*(1-Math.sqrt(C/(C+Fh))),S=(1+D)*s,A=(1+D)*c,N=Math.sqrt(S**2+a**2),j=Math.sqrt(A**2+f**2),W=S===0&&a===0?0:Math.atan2(a,S),G=A===0&&f===0?0:Math.atan2(f,A);W<0&&(W+=2*ku),G<0&&(G+=2*ku),W*=kh,G*=kh;let Le=l-o,Ft=j-N,ot=G-W,Mt=W+G,vn=Math.abs(ot),Rn;N*j===0?Rn=0:vn<=180?Rn=ot:ot>180?Rn=ot-360:ot<-180?Rn=ot+360:hn.warn("the unthinkable has happened");let Xi=2*Math.sqrt(j*N)*Math.sin(Rn*io/2),Nl=(o+l)/2,us=(N+j)/2,Fa=Sh(us),Ln;N*j===0?Ln=Mt:vn<=180?Ln=Mt/2:Mt<360?Ln=(Mt+360)/2:Ln=(Mt-360)/2;let ka=(Nl-50)**2,Il=1+.015*ka/Math.sqrt(20+ka),Sa=1+.045*us,Dn=1;Dn-=.17*Math.cos((Ln-30)*io),Dn+=.24*Math.cos(2*Ln*io),Dn+=.32*Math.cos((3*Ln+6)*io),Dn-=.2*Math.cos((4*Ln-63)*io);let Ge=1+.015*us*Dn,rn=30*Math.exp(-1*((Ln-275)/25)**2),Qi=2*Math.sqrt(Fa/(Fa+Fh)),Ur=-1*Math.sin(2*rn*io)*Qi,hi=(Le/(n*Il))**2;return hi+=(Ft/(r*Sa))**2,hi+=(Xi/(i*Ge))**2,hi+=Ur*(Ft/(r*Sa))*(Xi/(i*Ge)),Math.sqrt(hi)}const o5=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],s5=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],a5=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],u5=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var So=new U({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:vt,fromBase(e){let n=ke(o5,e).map(r=>Math.cbrt(r));return ke(a5,n)},toBase(e){let n=ke(u5,e).map(r=>r**3);return ke(s5,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Kc(e,t){[e,t]=X([e,t]);let[n,r,i]=So.from(e),[o,s,a]=So.from(t),u=n-o,l=r-s,c=i-a;return Math.sqrt(u**2+l**2+c**2)}const l5=75e-6;function Pi(e,t,{epsilon:n=l5}={}){e=X(e),t||(t=e.space),t=U.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function No(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Sy(e,t,n="lab"){n=U.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((o,s,a)=>{let u=i[a];return isNaN(s)||isNaN(u)?o:o+(u-s)**2},0))}function c5(e,t){return Sy(e,t,"lab")}const f5=Math.PI,Nh=f5/180;function d5(e,t,{l:n=2,c:r=1}={}){[e,t]=X([e,t]);let[i,o,s]=ln.from(e),[,a,u]=Ks.from(ln,[i,o,s]),[l,c,f]=ln.from(t),d=Ks.from(ln,[l,c,f])[1];a<0&&(a=0),d<0&&(d=0);let y=i-l,C=a-d,D=o-c,S=s-f,A=D**2+S**2-C**2,N=.511;i>=16&&(N=.040975*i/(1+.01765*i));let j=.0638*a/(1+.0131*a)+.638,W;Number.isNaN(u)&&(u=0),u>=164&&u<=345?W=.56+Math.abs(.2*Math.cos((u+168)*Nh)):W=.36+Math.abs(.4*Math.cos((u+35)*Nh));let G=Math.pow(a,4),Le=Math.sqrt(G/(G+1900)),Ft=j*(Le*W+1-Le),ot=(y/(n*N))**2;return ot+=(C/(r*j))**2,ot+=A/Ft**2,Math.sqrt(ot)}const Ih=203;var td=new U({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:vt,fromBase(e){return e.map(t=>Math.max(t*Ih,0))},toBase(e){return e.map(t=>Math.max(t/Ih,0))}});const _a=1.15,Va=.66,Ph=2610/2**14,m5=2**14/2610,Th=3424/2**12,Mh=2413/2**7,Oh=2392/2**7,h5=1.7*2523/2**5,Bh=2**5/(1.7*2523),qa=-.56,nc=16295499532821565e-27,p5=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],g5=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],y5=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],w5=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Ny=new U({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:td,fromBase(e){let[t,n,r]=e,i=_a*t-(_a-1)*r,o=Va*n-(Va-1)*t,a=ke(p5,[i,o,r]).map(function(d){let y=Th+Mh*(d/1e4)**Ph,C=1+Oh*(d/1e4)**Ph;return(y/C)**h5}),[u,l,c]=ke(y5,a);return[(1+qa)*u/(1+qa*u)-nc,l,c]},toBase(e){let[t,n,r]=e,i=(t+nc)/(1+qa-qa*(t+nc)),s=ke(w5,[i,n,r]).map(function(d){let y=Th-d**Bh,C=Oh*d**Bh-Mh;return 1e4*(y/C)**m5}),[a,u,l]=ke(g5,s),c=(a+(_a-1)*l)/_a,f=(u+(Va-1)*c)/Va;return[c,f,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Zc=new U({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ny,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),lr(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function b5(e,t){[e,t]=X([e,t]);let[n,r,i]=Zc.from(e),[o,s,a]=Zc.from(t),u=n-o,l=r-s;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let c=i-a,f=2*Math.sqrt(r*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+f**2)}const Iy=3424/4096,Py=2413/128,Ty=2392/128,Rh=2610/16384,$5=2523/32,v5=16384/2610,Lh=32/2523,D5=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],E5=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],x5=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],C5=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Gc=new U({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:td,fromBase(e){let t=ke(D5,e);return A5(t)},toBase(e){let t=F5(e);return ke(C5,t)}});function A5(e){let t=e.map(function(n){let r=Iy+Py*(n/1e4)**Rh,i=1+Ty*(n/1e4)**Rh;return(r/i)**$5});return ke(E5,t)}function F5(e){return ke(x5,e).map(function(r){let i=Math.max(r**Lh-Iy,0),o=Py-Ty*r**Lh;return 1e4*(i/o)**v5})}function k5(e,t){[e,t]=X([e,t]);let[n,r,i]=Gc.from(e),[o,s,a]=Gc.from(t);return 720*Math.sqrt((n-o)**2+.25*(r-s)**2+(i-a)**2)}const S5=jt.D65,My=.42,Uh=1/My,rc=2*Math.PI,Oy=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],N5=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],I5=[[460,451,288],[460,-891,-261],[460,-220,-6300]],P5={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Ei={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},T5=180/Math.PI,jh=Math.PI/180;function By(e,t){return e.map(r=>{const i=or(t*Math.abs(r)*.01,My);return 400*Qu(i,r)/(i+27.13)})}function M5(e,t){const n=100/t*27.13**Uh;return e.map(r=>{const i=Math.abs(r);return Qu(n*or(i/(400-i),Uh),r)})}function O5(e){let t=lr(e);t<=Ei.h[0]&&(t+=360);const n=Ay(Ei.h,t)-1,[r,i]=Ei.h.slice(n,n+2),[o,s]=Ei.e.slice(n,n+2),a=Ei.H[n],u=(t-r)/o;return a+100*u/(u+(i-t)/s)}function B5(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,i]=Ei.h.slice(n,n+2),[o,s]=Ei.e.slice(n,n+2);return lr((t*(s*r-o*i)-100*r*s)/(t*(s-o)-100*s))}function Ry(e,t,n,r,i){const o={};o.discounting=i,o.refWhite=e,o.surround=r;const s=e.map(D=>D*100);o.la=t,o.yb=n;const a=s[1],u=ke(Oy,s);r=P5[o.surround];const l=r[0];o.c=r[1],o.nc=r[2];const f=(1/(5*o.la+1))**4;o.fl=f*o.la+.1*(1-f)*(1-f)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/a,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const d=Math.max(Math.min(l*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=u.map(D=>zs(1,a/D,d)),o.dRgbInv=o.dRgb.map(D=>1/D);const y=u.map((D,S)=>D*o.dRgb[S]),C=By(y,o.fl);return o.aW=o.nbb*(2*C[0]+C[1]+.05*C[2]),o}const _h=Ry(S5,64/Math.PI*.2,20,"average",!1);function Yc(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=lr(e.h)*jh:n=B5(e.H)*jh;const r=Math.cos(n),i=Math.sin(n);let o=0;e.J!==void 0?o=or(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=or(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(n+2)+3.8),l=t.aW*or(o,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,f=l/t.nbb,d=23*(f+.305)*Xf(a,23*c+a*(11*r+108*i)),y=d*r,C=d*i,D=M5(ke(I5,[f,y,C]).map(S=>S*1/1403),t.fl);return ke(N5,D.map((S,A)=>S*t.dRgbInv[A])).map(S=>S/100)}function Ly(e,t){const n=e.map(j=>j*100),r=By(ke(Oy,n).map((j,W)=>j*t.dRgb[W]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,o=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(o,i)%rc+rc)%rc,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*Xf(a*Math.sqrt(i**2+o**2),r[0]+r[1]+1.05*r[2]+.305),l=or(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*r[0]+r[1]+.05*r[2]),f=or(c/t.aW,.5*t.c*t.z),d=100*or(f,2),y=4/t.c*f*(t.aW+4)*t.flRoot,C=l*f,D=C*t.flRoot,S=lr(s*T5),A=O5(S),N=50*or(t.c*l/(t.aW+4),1/2);return{J:d,C,h:S,s:N,Q:y,M:D,H:A}}var R5=new U({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:vt,fromBase(e){const t=Ly(e,_h);return[t.J,t.M,t.h]},toBase(e){return Yc({J:e[0],M:e[1],h:e[2]},_h)}});const L5=jt.D65,U5=216/24389,Uy=24389/27;function j5(e){return 116*(e>U5?Math.cbrt(e):(Uy*e+16)/116)-16}function Jc(e){return e>8?Math.pow((e+16)/116,3):e/Uy}function _5(e,t){let[n,r,i]=e,o=[],s=0;if(i===0)return[0,0,0];let a=Jc(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let c=0,f=1/0;for(;c<=l;){o=Yc({J:s,C:r,h:n},t);const d=Math.abs(o[1]-a);if(d<f){if(d<=u)return o;f=d}s=s-(o[1]-a)*s/(2*o[1]),c+=1}return Yc({J:s,C:r,h:n},t)}function V5(e,t){const n=j5(e[1]);if(n===0)return[0,0,0];const r=Ly(e,nd);return[lr(r.h),r.C,n]}const nd=Ry(L5,200/Math.PI*Jc(50),Jc(50)*100,"average",!1);var Zs=new U({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:vt,fromBase(e){return V5(e)},toBase(e){return _5(e,nd)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const q5=Math.PI/180,Vh=[1,.007,.0228];function qh(e){e[1]<0&&(e=Zs.fromBase(Zs.toBase(e)));const t=Math.log(Math.max(1+Vh[2]*e[1]*nd.flRoot,1))/Vh[2],n=e[0]*q5,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function W5(e,t){[e,t]=X([e,t]);let[n,r,i]=qh(Zs.from(e)),[o,s,a]=qh(Zs.from(t));return Math.sqrt((n-o)**2+(r-s)**2+(i-a)**2)}var Io={deltaE76:c5,deltaECMC:d5,deltaE2000:ky,deltaEJz:b5,deltaEITP:k5,deltaEOK:Kc,deltaEHCT:W5};function z5(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Wh={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function ri(e,{method:t=hn.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:i=2,blackWhiteClamp:o={}}={}){if(e=X(e),la(arguments[1])?n=arguments[1]:n||(n=e.space),n=U.get(n),Pi(e,n,{epsilon:0}))return e;let s;if(t==="css")s=K5(e,{space:n});else{if(t!=="clip"&&!Pi(e,n)){Object.prototype.hasOwnProperty.call(Wh,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:o}=Wh[t]);let a=ky;if(r!==""){for(let l in Io)if("deltae"+r.toLowerCase()===l.toLowerCase()){a=Io[l];break}}let u=ri(Fe(e,n),{method:"clip",space:n});if(a(e,u)>i){if(Object.keys(o).length===3){let N=U.resolveCoord(o.channel),j=un(Fe(e,N.space),N.id);if(ti(j)&&(j=0),j>=o.max)return Fe({space:"xyz-d65",coords:jt.D65},e.space);if(j<=o.min)return Fe({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=U.resolveCoord(t),c=l.space,f=l.id,d=Fe(e,c);d.coords.forEach((N,j)=>{ti(N)&&(d.coords[j]=0)});let C=(l.range||l.refRange)[0],D=z5(i),S=C,A=un(d,f);for(;A-S>D;){let N=No(d);N=ri(N,{space:n,method:"clip"}),a(d,N)-i<D?S=un(d,f):A=un(d,f),Pr(d,f,(S+A)/2)}s=Fe(d,n)}else s=u}else s=Fe(e,n);if(t==="clip"||!Pi(s,n,{epsilon:0})){let a=Object.values(n.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,f]=a[l];return c!==void 0&&(u=Math.max(c,u)),f!==void 0&&(u=Math.min(u,f)),u})}}return n!==e.space&&(s=Fe(s,e.space)),e.coords=s.coords,e}ri.returns="color";const zh={WHITE:{space:So,coords:[1,0,0]},BLACK:{space:So,coords:[0,0,0]}};function K5(e,{space:t}={}){e=X(e),t||(t=e.space),t=U.get(t);const i=U.get("oklch");if(t.isUnbounded)return Fe(e,t);const o=Fe(e,i);let s=o.coords[0];if(s>=1){const C=Fe(zh.WHITE,t);return C.alpha=e.alpha,Fe(C,t)}if(s<=0){const C=Fe(zh.BLACK,t);return C.alpha=e.alpha,Fe(C,t)}if(Pi(o,t,{epsilon:0}))return Fe(o,t);function a(C){const D=Fe(C,t),S=Object.values(t.coords);return D.coords=D.coords.map((A,N)=>{if("range"in S[N]){const[j,W]=S[N].range;return Cy(j,A,W)}return A}),D}let u=0,l=o.coords[1],c=!0,f=No(o),d=a(f),y=Kc(d,f);if(y<.02)return d;for(;l-u>1e-4;){const C=(u+l)/2;if(f.coords[1]=C,c&&Pi(f,t,{epsilon:0}))u=C;else if(d=a(f),y=Kc(d,f),y<.02){if(.02-y<1e-4)break;c=!1,u=C}else l=C}return d}function Fe(e,t,{inGamut:n}={}){e=X(e),t=U.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=ri(i,n===!0?void 0:n)),i}Fe.returns="color";function Is(e,{precision:t=hn.precision,format:n="default",inGamut:r=!0,...i}={}){let o;e=X(e);let s=n;n=e.space.getFormat(n)??e.space.getFormat("default")??U.DEFAULT_FORMAT;let a=e.coords.slice();if(r||=n.toGamut,r&&!Pi(e)&&(a=ri(No(e),r===!0?void 0:r).coords),n.type==="custom")if(i.precision=t,n.serialize)o=n.serialize(a,e.alpha,i);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let u=n.name||"color";n.serializeCoords?a=n.serializeCoords(a,t):t!==null&&(a=a.map(d=>Au(d,{precision:t})));let l=[...a];if(u==="color"){let d=n.id||n.ids?.[0]||e.space.id;l.unshift(d)}let c=e.alpha;t!==null&&(c=Au(c,{precision:t}));let f=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${c}`;o=`${u}(${l.join(n.commas?", ":" ")}${f})`}return o}const Z5=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],G5=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var el=new tn({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Z5,fromXYZ_M:G5});const Wa=1.09929682680944,Kh=.018053968510807;var jy=new tn({id:"rec2020",name:"REC.2020",base:el,toBase(e){return e.map(function(t){return t<Kh*4.5?t/4.5:Math.pow((t+Wa-1)/Wa,1/.45)})},fromBase(e){return e.map(function(t){return t>=Kh?Wa*Math.pow(t,.45)-(Wa-1):4.5*t})}});const Y5=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],J5=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var _y=new tn({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Y5,fromXYZ_M:J5});const H5=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],ft=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Vy=new tn({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:H5,fromXYZ_M:ft}),Zh={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Gh=Array(3).fill("<percentage> | <number>[0, 255]"),Yh=Array(3).fill("<number>[0, 255]");var Po=new tn({id:"srgb",name:"sRGB",base:Vy,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:Gh},rgb_number:{name:"rgb",commas:!0,coords:Yh,noAlpha:!0},color:{},rgba:{coords:Gh,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Yh},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(o=>Math.round(o*255));let r=n&&e.every(o=>o%17===0);return"#"+e.map(o=>r?(o/17).toString(16):o.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Zh.black,t.alpha=0):t.coords=Zh[e],t.coords)return t}}}}),qy=new tn({id:"p3",cssId:"display-p3",name:"P3",base:_y,fromBase:Po.fromBase,toBase:Po.toBase});hn.display_space=Po;let X5;if(typeof CSS<"u"&&CSS.supports)for(let e of[ln,jy,qy]){let t=e.getMinCoords(),r=Is({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){hn.display_space=e;break}}function Q5(e,{space:t=hn.display_space,...n}={}){let r=Is(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!hn.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(ti)||ti(e.alpha))&&!(X5??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=No(e),i.coords=i.coords.map(He),i.alpha=He(i.alpha),r=Is(i,n),CSS.supports("color",r)))return r=new String(r),r.color=i,r;i=Fe(i,t),r=new String(Is(i,n)),r.color=i}return r}function eE(e,t){return e=X(e),t=X(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function ii(e){return un(e,[vt,"y"])}function Wy(e,t){Pr(e,[vt,"y"],t)}function tE(e){Object.defineProperty(e.prototype,"luminance",{get(){return ii(this)},set(t){Wy(this,t)}})}var nE=Object.freeze({__proto__:null,getLuminance:ii,register:tE,setLuminance:Wy});function rE(e,t){e=X(e),t=X(t);let n=Math.max(ii(e),0),r=Math.max(ii(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const iE=.56,oE=.57,sE=.62,aE=.65,Jh=.022,uE=1.414,lE=.1,cE=5e-4,fE=1.14,Hh=.027,dE=1.14;function Xh(e){return e>=Jh?e:e+(Jh-e)**uE}function oo(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function mE(e,t){t=X(t),e=X(e);let n,r,i,o,s,a;t=Fe(t,"srgb"),[o,s,a]=t.coords;let u=oo(o)*.2126729+oo(s)*.7151522+oo(a)*.072175;e=Fe(e,"srgb"),[o,s,a]=e.coords;let l=oo(o)*.2126729+oo(s)*.7151522+oo(a)*.072175,c=Xh(u),f=Xh(l),d=f>c;return Math.abs(f-c)<cE?r=0:d?(n=f**iE-c**oE,r=n*fE):(n=f**aE-c**sE,r=n*dE),Math.abs(r)<lE?i=0:r>0?i=r-Hh:i=r+Hh,i*100}function hE(e,t){e=X(e),t=X(t);let n=Math.max(ii(e),0),r=Math.max(ii(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}const pE=5e4;function gE(e,t){e=X(e),t=X(t);let n=Math.max(ii(e),0),r=Math.max(ii(t),0);return r>n&&([n,r]=[r,n]),r===0?pE:(n-r)/r}function yE(e,t){e=X(e),t=X(t);let n=un(e,[ln,"l"]),r=un(t,[ln,"l"]);return Math.abs(n-r)}const wE=216/24389,Qh=24/116,za=24389/27;let ic=jt.D65;var Hc=new U({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ic,base:vt,fromBase(e){let n=e.map((r,i)=>r/ic[i]).map(r=>r>wE?Math.cbrt(r):(za*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Qh?Math.pow(t[0],3):(116*t[0]-16)/za,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/za,t[2]>Qh?Math.pow(t[2],3):(116*t[2]-16)/za].map((r,i)=>r*ic[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const oc=Math.pow(5,.5)*.5+.5;function bE(e,t){e=X(e),t=X(t);let n=un(e,[Hc,"l"]),r=un(t,[Hc,"l"]),i=Math.abs(Math.pow(n,oc)-Math.pow(r,oc)),o=Math.pow(i,1/oc)*Math.SQRT2-40;return o<7.5?0:o}var au=Object.freeze({__proto__:null,contrastAPCA:mE,contrastDeltaPhi:bE,contrastLstar:yE,contrastMichelson:hE,contrastWCAG21:rE,contrastWeber:gE});function $E(e,t,n={}){la(n)&&(n={algorithm:n});let{algorithm:r,...i}=n;if(!r){let o=Object.keys(au).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=X(e),t=X(t);for(let o in au)if("contrast"+r.toLowerCase()===o.toLowerCase())return au[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function tl(e){let[t,n,r]=ca(e,vt),i=t+15*n+3*r;return[4*t/i,9*n/i]}function zy(e){let[t,n,r]=ca(e,vt),i=t+n+r;return[t/i,n/i]}function vE(e){Object.defineProperty(e.prototype,"uv",{get(){return tl(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return zy(this)}})}var DE=Object.freeze({__proto__:null,register:vE,uv:tl,xy:zy});function Cs(e,t,n={}){la(n)&&(n={method:n});let{method:r=hn.deltaE,...i}=n;for(let o in Io)if("deltae"+r.toLowerCase()===o.toLowerCase())return Io[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${r}`)}function EE(e,t=.25){let r=[U.get("oklch","lch"),"l"];return Pr(e,r,i=>i*(1+t))}function xE(e,t=.25){let r=[U.get("oklch","lch"),"l"];return Pr(e,r,i=>i*(1-t))}var CE=Object.freeze({__proto__:null,darken:xE,lighten:EE});function Ky(e,t,n=.5,r={}){return[e,t]=[X(e),X(t)],Hr(n)==="object"&&([n,r]=[.5,n]),fa(e,t,r)(n)}function Zy(e,t,n={}){let r;rd(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:a=1e3,...u}=n;r||([e,t]=[X(e),X(t)],r=fa(e,t,u));let l=Cs(e,t),c=i>0?Math.max(s,Math.ceil(l/i)+1):s,f=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)f=[{p:.5,color:r(.5)}];else{let d=1/(c-1);f=Array.from({length:c},(y,C)=>{let D=C*d;return{p:D,color:r(D)}})}if(i>0){let d=f.reduce((y,C,D)=>{if(D===0)return 0;let S=Cs(C.color,f[D-1].color,o);return Math.max(y,S)},0);for(;d>i;){d=0;for(let y=1;y<f.length&&f.length<a;y++){let C=f[y-1],D=f[y],S=(D.p+C.p)/2,A=r(S);d=Math.max(d,Cs(A,C.color),Cs(A,D.color)),f.splice(y,0,{p:S,color:r(S)}),y++}}}return f=f.map(d=>d.color),f}function fa(e,t,n={}){if(rd(e)){let[u,l]=[e,t];return fa(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:r,outputSpace:i,progression:o,premultiplied:s}=n;e=X(e),t=X(t),e=No(e),t=No(t);let a={colors:[e,t],options:n};if(r?r=U.get(r):r=U.registry[hn.interpolationSpace]||e.space,i=i?U.get(i):r,e=Fe(e,r),t=Fe(t,r),e=ri(e),t=ri(t),r.coords.h&&r.coords.h.type==="angle"){let u=n.hue=n.hue||"shorter",l=[r,"h"],[c,f]=[un(e,l),un(t,l)];isNaN(c)&&!isNaN(f)?c=f:isNaN(f)&&!isNaN(c)&&(f=c),[c,f]=i5(u,[c,f]),Pr(e,l,c),Pr(t,l,f)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=o?o(u):u;let l=e.coords.map((d,y)=>{let C=t.coords[y];return zs(d,C,u)}),c=zs(e.alpha,t.alpha,u),f={space:r,coords:l,alpha:c};return s&&(f.coords=f.coords.map(d=>d/c)),i!==r&&(f=Fe(f,i)),f},{rangeArgs:a})}function rd(e){return Hr(e)==="function"&&!!e.rangeArgs}hn.interpolationSpace="lab";function AE(e){e.defineFunction("mix",Ky,{returns:"color"}),e.defineFunction("range",fa,{returns:"function<color>"}),e.defineFunction("steps",Zy,{returns:"array<color>"})}var FE=Object.freeze({__proto__:null,isRange:rd,mix:Ky,range:fa,register:AE,steps:Zy}),Gy=new U({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Po,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,o]=e,[s,a,u]=[NaN,0,(n+t)/2],l=t-n;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case r:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-r)/l+2;break;case o:s=(r-i)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function i(o){let s=(o+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Yy=new U({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Gy,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r+n*Math.min(r,1-r);return[t,i===0?0:200*(1-r/i),100*i]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r*(1-n/2);return[t,i===0||i===1?0:(r-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),kE=new U({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Yy,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1){let a=n/i;return[t,0,a*100]}let o=1-r,s=o===0?0:1-n/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const SE=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],NE=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Jy=new tn({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:SE,fromXYZ_M:NE}),IE=new tn({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Jy,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const PE=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],TE=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Hy=new tn({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:ed,toXYZ_M:PE,fromXYZ_M:TE});const ME=1/512,OE=16/512;var BE=new tn({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Hy,toBase(e){return e.map(t=>t<OE?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=ME?t**(1/1.8):16*t)}}),RE=new U({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:So,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),lr(i)]},toBase(e){let[t,n,r]=e,i,o;return isNaN(r)?(i=0,o=0):(i=n*Math.cos(r*Math.PI/180),o=n*Math.sin(r*Math.PI/180)),[t,i,o]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Xy=jt.D65;const LE=216/24389,e0=24389/27,[t0,n0]=tl({space:vt,coords:Xy});var Qy=new U({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Xy,base:vt,fromBase(e){let t=[He(e[0]),He(e[1]),He(e[2])],n=t[1],[r,i]=tl({space:vt,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let o=n<=LE?e0*n:116*Math.cbrt(n)-16;return[o,13*o*(r-t0),13*o*(i-n0)]},toBase(e){let[t,n,r]=e;if(t===0||ti(t))return[0,0,0];n=He(n),r=He(r);let i=n/(13*t)+t0,o=r/(13*t)+n0,s=t<=8?t/e0:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),id=new U({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Qy,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),lr(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const UE=216/24389,jE=24389/27,r0=ft[0][0],i0=ft[0][1],sc=ft[0][2],o0=ft[1][0],s0=ft[1][1],ac=ft[1][2],a0=ft[2][0],u0=ft[2][1],uc=ft[2][2];function so(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function Su(e){const t=Math.pow(e+16,3)/1560896,n=t>UE?t:e/jE,r=n*(284517*r0-94839*sc),i=n*(838422*sc+769860*i0+731718*r0),o=n*(632260*sc-126452*i0),s=n*(284517*o0-94839*ac),a=n*(838422*ac+769860*s0+731718*o0),u=n*(632260*ac-126452*s0),l=n*(284517*a0-94839*uc),c=n*(838422*uc+769860*u0+731718*a0),f=n*(632260*uc-126452*u0);return{r0s:r/o,r0i:i*e/o,r1s:r/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/f,b0i:c*e/f,b1s:l/(f+126452),b1i:(c-769860)*e/(f+126452)}}function l0(e,t){const n=t/360*Math.PI*2,r=so(e.r0s,e.r0i,n),i=so(e.r1s,e.r1i,n),o=so(e.g0s,e.g0i,n),s=so(e.g1s,e.g1i,n),a=so(e.b0s,e.b0i,n),u=so(e.b1s,e.b1i,n);return Math.min(r,i,o,s,a,u)}var _E=new U({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:id,gamutSpace:Po,fromBase(e){let[t,n,r]=[He(e[0]),He(e[1]),He(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=Su(t),s=l0(o,r);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[He(e[0]),He(e[1]),He(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=Su(r);i=l0(o,t)/100*n}return[r,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});ft[0][0];ft[0][1];ft[0][2];ft[1][0];ft[1][1];ft[1][2];ft[2][0];ft[2][1];ft[2][2];function ao(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function c0(e){let t=ao(e.r0s,e.r0i),n=ao(e.r1s,e.r1i),r=ao(e.g0s,e.g0i),i=ao(e.g1s,e.g1i),o=ao(e.b0s,e.b0i),s=ao(e.b1s,e.b1i);return Math.min(t,n,r,i,o,s)}var VE=new U({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:id,gamutSpace:"self",fromBase(e){let[t,n,r]=[He(e[0]),He(e[1]),He(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=Su(t),s=c0(o);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[He(e[0]),He(e[1]),He(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=Su(r);i=c0(o)/100*n}return[r,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const f0=203,d0=2610/2**14,qE=2**14/2610,WE=2523/2**5,m0=2**5/2523,h0=3424/2**12,p0=2413/2**7,g0=2392/2**7;var zE=new tn({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:el,toBase(e){return e.map(function(t){return(Math.max(t**m0-h0,0)/(p0-g0*t**m0))**qE*1e4/f0})},fromBase(e){return e.map(function(t){let n=Math.max(t*f0/1e4,0),r=h0+p0*n**d0,i=1+g0*n**d0;return(r/i)**WE})}});const y0=.17883277,w0=.28466892,b0=.55991073,lc=3.7743;var KE=new tn({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:el,toBase(e){return e.map(function(t){return t<=.5?t**2/3*lc:(Math.exp((t-b0)/y0)+w0)/12*lc})},fromBase(e){return e.map(function(t){return t/=lc,t<=1/12?Math.sqrt(3*t):y0*Math.log(12*t-w0)+b0})}});const e1={};ni.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=t1(e.W1,e.W2,e.options.method))});ni.add("chromatic-adaptation-end",e=>{e.M||(e.M=t1(e.W1,e.W2,e.options.method))});function nl({id:e,toCone_M:t,fromCone_M:n}){e1[e]=arguments[0]}function t1(e,t,n="Bradford"){let r=e1[n],[i,o,s]=ke(r.toCone_M,e),[a,u,l]=ke(r.toCone_M,t),c=[[a/i,0,0],[0,u/o,0],[0,0,l/s]],f=ke(c,r.toCone_M);return ke(r.fromCone_M,f)}nl({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});nl({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});nl({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});nl({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(jt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});jt.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const ZE=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],GE=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var n1=new tn({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:jt.ACES,toXYZ_M:ZE,fromXYZ_M:GE});const Ka=2**-16,cc=-.35828683,Za=(Math.log2(65504)+9.72)/17.52;var YE=new tn({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[cc,Za],name:"Red"},g:{range:[cc,Za],name:"Green"},b:{range:[cc,Za],name:"Blue"}},referred:"scene",base:n1,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-Ka)*2:n<Za?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Ka)+9.72)/17.52:t<Ka?(Math.log2(Ka+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),$0=Object.freeze({__proto__:null,A98RGB:IE,A98RGB_Linear:Jy,ACEScc:YE,ACEScg:n1,CAM16_JMh:R5,HCT:Zs,HPLuv:VE,HSL:Gy,HSLuv:_E,HSV:Yy,HWB:kE,ICTCP:Gc,JzCzHz:Zc,Jzazbz:Ny,LCH:Ks,LCHuv:id,Lab:ln,Lab_D65:Hc,Luv:Qy,OKLCH:RE,OKLab:So,P3:qy,P3_Linear:_y,ProPhoto:BE,ProPhoto_Linear:Hy,REC_2020:jy,REC_2020_Linear:el,REC_2100_HLG:KE,REC_2100_PQ:zE,XYZ_ABS_D65:td,XYZ_D50:ed,XYZ_D65:vt,sRGB:Po,sRGB_Linear:Vy});let $e=class Wt{constructor(...t){let n;t.length===1&&(n=X(t[0]));let r,i,o;n?(r=n.space||n.spaceId,i=n.coords,o=n.alpha):[r,i,o]=t,Object.defineProperty(this,"space",{value:U.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=o>1||o===void 0?1:o<0?0:o;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new Wt(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=Q5(this,...t);return n.color=new Wt(n.color),n}static get(t,...n){return t instanceof Wt?t:new Wt(t,...n)}static defineFunction(t,n,r=n){let{instance:i=!0,returns:o}=r,s=function(...a){let u=n(...a);if(o==="color")u=Wt.get(u);else if(o==="function<color>"){let l=u;u=function(...c){let f=l(...c);return Wt.get(f)},Object.assign(u,l)}else o==="array<color>"&&(u=u.map(l=>Wt.get(l)));return u};t in Wt||(Wt[t]=s),i&&(Wt.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let n in t)Wt.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(Wt);else for(let n in t)Wt.defineFunction(n,t[n])}};$e.defineFunctions({get:un,getAll:ca,set:Pr,setAll:Qf,to:Fe,equals:eE,inGamut:Pi,toGamut:ri,distance:Sy,toString:Is});Object.assign($e,{util:XD,hooks:ni,WHITES:jt,Space:U,spaces:U.registry,parse:Fy,defaults:hn});for(let e of Object.keys($0))U.register($0[e]);for(let e in U.registry)Xc(e,U.registry[e]);ni.add("colorspace-init-end",e=>{Xc(e.id,e),e.aliases?.forEach(t=>{Xc(t,e)})});function Xc(e,t){let n=e.replace(/-/g,"_");Object.defineProperty($e.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(i,o)=>{try{return U.resolveCoord([t,o]),!0}catch{}return Reflect.has(i,o)},get:(i,o,s)=>{if(o&&typeof o!="symbol"&&!(o in i)){let{index:a}=U.resolveCoord([t,o]);if(a>=0)return i[a]}return Reflect.get(i,o,s)},set:(i,o,s,a)=>{if(o&&typeof o!="symbol"&&!(o in i)||o>=0){let{index:u}=U.resolveCoord([t,o]);if(u>=0)return i[u]=s,this.setAll(e,i),!0}return Reflect.set(i,o,s,a)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}$e.extend(Io);$e.extend({deltaE:Cs});Object.assign($e,{deltaEMethods:Io});$e.extend(CE);$e.extend({contrast:$E});$e.extend(DE);$e.extend(nE);$e.extend(FE);$e.extend(au);const r1=Symbol("no update");function v0(e){return e!==r1}class fc extends tr()("observable-value-update"){}class JE extends tr()("observable-value-resolve"){}class HE extends tr()("observable-value-error"){}class XE extends Uf("observable-destroy"){}class QE extends Uf("observable-callback-call"){}class ex extends tr()("observable-params-update"){}class i1{listenTarget=new jf;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];if(n===r1)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)){const i=this.value;return this.value=n,this.listenTarget.dispatch(new fc({detail:[n,i]})),!0}return!1}listen(t,n){const r=i=>n(...i.detail);return this.listenerMap.set(n,r),t&&n(this.value,void 0),this.listenTarget.listen(fc,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(fc,n)}destroy(){this.listenTarget.dispatch(new XE),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function od(e,t){return Av(e,t,(n,r)=>F.isFunction(n)&&F.isFunction(r)?!0:F.strictEquals(n,r))}class tx extends i1{equalityCheck;waitingForValueDeferredPromise=new pu;lastSetPromise;lastSetId=Ii();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||od,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const n=Ii();return this.lastSetId=n,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new pu,super.setValue(this.waitingForValueDeferredPromise.promise,F.strictEquals)),t.then(r=>{this.lastSetPromise!==t||this.lastSetId!==n||this.resolveValue(r)}).catch(r=>{if(this.lastSetPromise!==t||this.lastSetId!==n)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=et(r);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return v0(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,F.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Ii(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new JE({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,F.strictEquals),this.dispatch(new HE({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):v0(t)?this.resolveValue(t):!1}catch(n){return this.rejectValue(et(n)),!0}}listen(t,n){return super.listen(t,n)}}class fo extends tx{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==fo.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||od,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:fo.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===fo.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(et(t))}finally{this.dispatch(new QE)}}updateLastParams(t){try{return this.internalParams===fo.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new ex({detail:this.internalParams})),!0):!1}catch(n){return this.setValue(et(n)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return F.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function nx(e){return nt(e)&&!nn(e)&&!ma(e)&&Symbol.asyncIterator in e}function nn(e){return Array.isArray(e)}function o1(e){return typeof e=="bigint"}function da(e){return typeof e=="boolean"}function sd(e){return e instanceof globalThis.Date}function rx(e){return typeof e=="function"}function ix(e){return nt(e)&&!nn(e)&&!ma(e)&&Symbol.iterator in e}function ox(e){return e===null}function ur(e){return typeof e=="number"}function nt(e){return typeof e=="object"&&e!==null}function s1(e){return e instanceof globalThis.RegExp}function ze(e){return typeof e=="string"}function sx(e){return typeof e=="symbol"}function ma(e){return e instanceof globalThis.Uint8Array}function Xe(e){return e===void 0}function ax(e){return e.map(t=>Nu(t))}function ux(e){return new Date(e.getTime())}function lx(e){return new Uint8Array(e)}function cx(e){return new RegExp(e.source,e.flags)}function fx(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=Nu(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=Nu(e[n]);return t}function Nu(e){return nn(e)?ax(e):sd(e)?ux(e):ma(e)?lx(e):s1(e)?cx(e):nt(e)?fx(e):e}function pn(e){return Nu(e)}function ad(e,t){return pn(t===void 0?e:{...t,...e})}function a1(e){return cr(e)&&globalThis.Symbol.asyncIterator in e}function u1(e){return cr(e)&&globalThis.Symbol.iterator in e}function l1(e){return e instanceof globalThis.Promise}function ud(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function ld(e){return e instanceof globalThis.Uint8Array}function c1(e,t){return t in e}function cr(e){return e!==null&&typeof e=="object"}function gn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function si(e){return e===void 0}function rl(e){return e===null}function il(e){return typeof e=="boolean"}function ee(e){return typeof e=="number"}function f1(e){return globalThis.Number.isInteger(e)}function Dr(e){return typeof e=="bigint"}function fn(e){return typeof e=="string"}function d1(e){return typeof e=="function"}function ol(e){return typeof e=="symbol"}function m1(e){return Dr(e)||il(e)||rl(e)||ee(e)||fn(e)||ol(e)||si(e)}var qe;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function n(s){const a=cr(s);return e.AllowArrayObject?a:a&&!gn(s)}e.IsObjectLike=n;function r(s){return n(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=r;function i(s){return e.AllowNaN?ee(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const a=si(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=o})(qe||(qe={}));function dx(e){return globalThis.Object.freeze(e).map(t=>Iu(t))}function mx(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=Iu(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=Iu(e[n]);return globalThis.Object.freeze(t)}function Iu(e){return nn(e)?dx(e):sd(e)?e:ma(e)?e:s1(e)?e:nt(e)?mx(e):e}function T(e,t){const n=t!==void 0?{...t,...e}:e;switch(qe.InstanceMode){case"freeze":return Iu(n);case"clone":return pn(n);default:return n}}class xt extends Error{constructor(t){super(t)}}const Gt=Symbol.for("TypeBox.Transform"),ha=Symbol.for("TypeBox.Readonly"),Or=Symbol.for("TypeBox.Optional"),sl=Symbol.for("TypeBox.Hint"),P=Symbol.for("TypeBox.Kind");function cd(e){return nt(e)&&e[ha]==="Readonly"}function ai(e){return nt(e)&&e[Or]==="Optional"}function h1(e){return ae(e,"Any")}function p1(e){return ae(e,"Argument")}function Yo(e){return ae(e,"Array")}function al(e){return ae(e,"AsyncIterator")}function ul(e){return ae(e,"BigInt")}function pa(e){return ae(e,"Boolean")}function Jo(e){return ae(e,"Computed")}function Ho(e){return ae(e,"Constructor")}function hx(e){return ae(e,"Date")}function Xo(e){return ae(e,"Function")}function Qo(e){return ae(e,"Integer")}function Tn(e){return ae(e,"Intersect")}function ll(e){return ae(e,"Iterator")}function ae(e,t){return nt(e)&&P in e&&e[P]===t}function g1(e){return da(e)||ur(e)||ze(e)}function Vi(e){return ae(e,"Literal")}function qi(e){return ae(e,"MappedKey")}function $n(e){return ae(e,"MappedResult")}function ga(e){return ae(e,"Never")}function px(e){return ae(e,"Not")}function fd(e){return ae(e,"Null")}function es(e){return ae(e,"Number")}function nr(e){return ae(e,"Object")}function cl(e){return ae(e,"Promise")}function fl(e){return ae(e,"Record")}function Xt(e){return ae(e,"Ref")}function y1(e){return ae(e,"RegExp")}function ya(e){return ae(e,"String")}function dd(e){return ae(e,"Symbol")}function Wi(e){return ae(e,"TemplateLiteral")}function gx(e){return ae(e,"This")}function De(e){return nt(e)&&Gt in e}function zi(e){return ae(e,"Tuple")}function wa(e){return ae(e,"Undefined")}function wt(e){return ae(e,"Union")}function yx(e){return ae(e,"Uint8Array")}function wx(e){return ae(e,"Unknown")}function bx(e){return ae(e,"Unsafe")}function $x(e){return ae(e,"Void")}function vx(e){return nt(e)&&P in e&&ze(e[P])}function _t(e){return h1(e)||p1(e)||Yo(e)||pa(e)||ul(e)||al(e)||Jo(e)||Ho(e)||hx(e)||Xo(e)||Qo(e)||Tn(e)||ll(e)||Vi(e)||qi(e)||$n(e)||ga(e)||px(e)||fd(e)||es(e)||nr(e)||cl(e)||fl(e)||Xt(e)||y1(e)||ya(e)||dd(e)||Wi(e)||gx(e)||zi(e)||wa(e)||wt(e)||yx(e)||wx(e)||bx(e)||$x(e)||vx(e)}const Dx=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function w1(e){try{return new RegExp(e),!0}catch{return!1}}function md(e){if(!ze(e))return!1;for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function b1(e){return hd(e)||Pe(e)}function ys(e){return Xe(e)||o1(e)}function be(e){return Xe(e)||ur(e)}function hd(e){return Xe(e)||da(e)}function ge(e){return Xe(e)||ze(e)}function Ex(e){return Xe(e)||ze(e)&&md(e)&&w1(e)}function xx(e){return Xe(e)||ze(e)&&md(e)}function $1(e){return Xe(e)||Pe(e)}function Pu(e){return nt(e)&&e[Or]==="Optional"}function Jn(e){return ue(e,"Any")&&ge(e.$id)}function Cx(e){return ue(e,"Argument")&&ur(e.index)}function Ki(e){return ue(e,"Array")&&e.type==="array"&&ge(e.$id)&&Pe(e.items)&&be(e.minItems)&&be(e.maxItems)&&hd(e.uniqueItems)&&$1(e.contains)&&be(e.minContains)&&be(e.maxContains)}function pd(e){return ue(e,"AsyncIterator")&&e.type==="AsyncIterator"&&ge(e.$id)&&Pe(e.items)}function dl(e){return ue(e,"BigInt")&&e.type==="bigint"&&ge(e.$id)&&ys(e.exclusiveMaximum)&&ys(e.exclusiveMinimum)&&ys(e.maximum)&&ys(e.minimum)&&ys(e.multipleOf)}function Zi(e){return ue(e,"Boolean")&&e.type==="boolean"&&ge(e.$id)}function Ax(e){return ue(e,"Computed")&&ze(e.target)&&nn(e.parameters)&&e.parameters.every(t=>Pe(t))}function ml(e){return ue(e,"Constructor")&&e.type==="Constructor"&&ge(e.$id)&&nn(e.parameters)&&e.parameters.every(t=>Pe(t))&&Pe(e.returns)}function hl(e){return ue(e,"Date")&&e.type==="Date"&&ge(e.$id)&&be(e.exclusiveMaximumTimestamp)&&be(e.exclusiveMinimumTimestamp)&&be(e.maximumTimestamp)&&be(e.minimumTimestamp)&&be(e.multipleOfTimestamp)}function pl(e){return ue(e,"Function")&&e.type==="Function"&&ge(e.$id)&&nn(e.parameters)&&e.parameters.every(t=>Pe(t))&&Pe(e.returns)}function Br(e){return ue(e,"Integer")&&e.type==="integer"&&ge(e.$id)&&be(e.exclusiveMaximum)&&be(e.exclusiveMinimum)&&be(e.maximum)&&be(e.minimum)&&be(e.multipleOf)}function v1(e){return nt(e)&&Object.entries(e).every(([t,n])=>md(t)&&Pe(n))}function Gi(e){return ue(e,"Intersect")&&!(ze(e.type)&&e.type!=="object")&&nn(e.allOf)&&e.allOf.every(t=>Pe(t)&&!Px(t))&&ge(e.type)&&(hd(e.unevaluatedProperties)||$1(e.unevaluatedProperties))&&ge(e.$id)}function gd(e){return ue(e,"Iterator")&&e.type==="Iterator"&&ge(e.$id)&&Pe(e.items)}function ue(e,t){return nt(e)&&P in e&&e[P]===t}function D1(e){return ui(e)&&ze(e.const)}function E1(e){return ui(e)&&ur(e.const)}function x1(e){return ui(e)&&da(e.const)}function ui(e){return ue(e,"Literal")&&ge(e.$id)&&Fx(e.const)}function Fx(e){return da(e)||ur(e)||ze(e)}function kx(e){return ue(e,"MappedKey")&&nn(e.keys)&&e.keys.every(t=>ur(t)||ze(t))}function Sx(e){return ue(e,"MappedResult")&&v1(e.properties)}function li(e){return ue(e,"Never")&&nt(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function To(e){return ue(e,"Not")&&Pe(e.not)}function yd(e){return ue(e,"Null")&&e.type==="null"&&ge(e.$id)}function Yt(e){return ue(e,"Number")&&e.type==="number"&&ge(e.$id)&&be(e.exclusiveMaximum)&&be(e.exclusiveMinimum)&&be(e.maximum)&&be(e.minimum)&&be(e.multipleOf)}function Te(e){return ue(e,"Object")&&e.type==="object"&&ge(e.$id)&&v1(e.properties)&&b1(e.additionalProperties)&&be(e.minProperties)&&be(e.maxProperties)}function wd(e){return ue(e,"Promise")&&e.type==="Promise"&&ge(e.$id)&&Pe(e.item)}function Et(e){return ue(e,"Record")&&e.type==="object"&&ge(e.$id)&&b1(e.additionalProperties)&&nt(e.patternProperties)&&(t=>{const n=Object.getOwnPropertyNames(t.patternProperties);return n.length===1&&w1(n[0])&&nt(t.patternProperties)&&Pe(t.patternProperties[n[0]])})(e)}function Nx(e){return ue(e,"Ref")&&ge(e.$id)&&ze(e.$ref)}function Gs(e){return ue(e,"RegExp")&&ge(e.$id)&&ze(e.source)&&ze(e.flags)&&be(e.maxLength)&&be(e.minLength)}function Hn(e){return ue(e,"String")&&e.type==="string"&&ge(e.$id)&&be(e.minLength)&&be(e.maxLength)&&Ex(e.pattern)&&xx(e.format)}function Ys(e){return ue(e,"Symbol")&&e.type==="symbol"&&ge(e.$id)}function Js(e){return ue(e,"TemplateLiteral")&&e.type==="string"&&ze(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function Ix(e){return ue(e,"This")&&ge(e.$id)&&ze(e.$ref)}function Px(e){return nt(e)&&Gt in e}function gl(e){return ue(e,"Tuple")&&e.type==="array"&&ge(e.$id)&&ur(e.minItems)&&ur(e.maxItems)&&e.minItems===e.maxItems&&(Xe(e.items)&&Xe(e.additionalItems)&&e.minItems===0||nn(e.items)&&e.items.every(t=>Pe(t)))}function Bi(e){return ue(e,"Undefined")&&e.type==="undefined"&&ge(e.$id)}function Tr(e){return ue(e,"Union")&&ge(e.$id)&&nt(e)&&nn(e.anyOf)&&e.anyOf.every(t=>Pe(t))}function ba(e){return ue(e,"Uint8Array")&&e.type==="Uint8Array"&&ge(e.$id)&&be(e.minByteLength)&&be(e.maxByteLength)}function Xn(e){return ue(e,"Unknown")&&ge(e.$id)}function Tx(e){return ue(e,"Unsafe")}function yl(e){return ue(e,"Void")&&e.type==="void"&&ge(e.$id)}function Mx(e){return nt(e)&&P in e&&ze(e[P])&&!Dx.includes(e[P])}function Pe(e){return nt(e)&&(Jn(e)||Cx(e)||Ki(e)||Zi(e)||dl(e)||pd(e)||Ax(e)||ml(e)||hl(e)||pl(e)||Br(e)||Gi(e)||gd(e)||ui(e)||kx(e)||Sx(e)||li(e)||To(e)||yd(e)||Yt(e)||Te(e)||wd(e)||Et(e)||Nx(e)||Gs(e)||Hn(e)||Ys(e)||Js(e)||Ix(e)||gl(e)||Bi(e)||Tr(e)||ba(e)||Xn(e)||Tx(e)||yl(e)||Mx(e))}const Ox="(true|false)",uu="(0|[1-9][0-9]*)",C1="(.*)",Bx="(?!.*)",Mo=`^${uu}$`,Oo=`^${C1}$`,Rx=`^${Bx}$`,A1=new Map;function bd(e){return A1.has(e)}function $d(e){return A1.get(e)}const vd=new Map;function Ri(e){return vd.has(e)}function F1(e,t){vd.set(e,t)}function Dd(e){return vd.get(e)}function Lx(e,t){return e.includes(t)}function Ux(e){return[...new Set(e)]}function jx(e,t){return e.filter(n=>t.includes(n))}function _x(e,t){return e.reduce((n,r)=>jx(n,r),t)}function Vx(e){return e.length===1?e[0]:e.length>1?_x(e.slice(1),e[0]):[]}function qx(e){const t=[];for(const n of e)t.push(...n);return t}function Hs(e){return T({[P]:"Any"},e)}function Ed(e,t){return T({[P]:"Array",type:"array",items:e},t)}function Wx(e){return T({[P]:"Argument",index:e})}function xd(e,t){return T({[P]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function ut(e,t,n){return T({[P]:"Computed",target:e,parameters:t},n)}function zx(e,t){const{[t]:n,...r}=e;return r}function yn(e,t){return t.reduce((n,r)=>zx(n,r),e)}function Me(e){return T({[P]:"Never",not:{}},e)}function Ct(e){return T({[P]:"MappedResult",properties:e})}function Cd(e,t,n){return T({[P]:"Constructor",type:"Constructor",parameters:e,returns:t},n)}function $a(e,t,n){return T({[P]:"Function",type:"Function",parameters:e,returns:t},n)}function Qc(e,t){return T({[P]:"Union",anyOf:e},t)}function Kx(e){return e.some(t=>ai(t))}function D0(e){return e.map(t=>ai(t)?Zx(t):t)}function Zx(e){return yn(e,[Or])}function Gx(e,t){return Kx(e)?di(Qc(D0(e),t)):Qc(D0(e),t)}function ts(e,t){return e.length===1?T(e[0],t):e.length===0?Me(t):Gx(e,t)}function At(e,t){return e.length===0?Me(t):e.length===1?T(e[0],t):Qc(e,t)}class E0 extends xt{}function Yx(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function Ad(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function Ar(e,t){return Ad(e,t,"(")}function Xs(e,t){return Ad(e,t,")")}function k1(e,t){return Ad(e,t,"|")}function Jx(e){if(!(Ar(e,0)&&Xs(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(Ar(e,n)&&(t+=1),Xs(e,n)&&(t-=1),t===0&&n!==e.length-1)return!1;return!0}function Hx(e){return e.slice(1,e.length-1)}function Xx(e){let t=0;for(let n=0;n<e.length;n++)if(Ar(e,n)&&(t+=1),Xs(e,n)&&(t-=1),k1(e,n)&&t===0)return!0;return!1}function Qx(e){for(let t=0;t<e.length;t++)if(Ar(e,t))return!0;return!1}function eC(e){let[t,n]=[0,0];const r=[];for(let o=0;o<e.length;o++)if(Ar(e,o)&&(t+=1),Xs(e,o)&&(t-=1),k1(e,o)&&t===0){const s=e.slice(n,o);s.length>0&&r.push(Bo(s)),n=o+1}const i=e.slice(n);return i.length>0&&r.push(Bo(i)),r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"or",expr:r}}function tC(e){function t(i,o){if(!Ar(i,o))throw new E0("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=o;a<i.length;a++)if(Ar(i,a)&&(s+=1),Xs(i,a)&&(s-=1),s===0)return[o,a];throw new E0("TemplateLiteralParser: Unclosed group parens in expression")}function n(i,o){for(let s=o;s<i.length;s++)if(Ar(i,s))return[o,s];return[o,i.length]}const r=[];for(let i=0;i<e.length;i++)if(Ar(e,i)){const[o,s]=t(e,i),a=e.slice(o,s+1);r.push(Bo(a)),i=s}else{const[o,s]=n(e,i),a=e.slice(o,s);a.length>0&&r.push(Bo(a)),i=s-1}return r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"and",expr:r}}function Bo(e){return Jx(e)?Bo(Hx(e)):Xx(e)?eC(e):Qx(e)?tC(e):{type:"const",const:Yx(e)}}function Fd(e){return Bo(e.slice(1,e.length-1))}class nC extends xt{}function rC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function iC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function oC(e){return e.type==="const"&&e.const===".*"}function Qs(e){return rC(e)||oC(e)?!1:iC(e)?!0:e.type==="and"?e.expr.every(t=>Qs(t)):e.type==="or"?e.expr.every(t=>Qs(t)):e.type==="const"?!0:(()=>{throw new nC("Unknown expression type")})()}function sC(e){const t=Fd(e.pattern);return Qs(t)}class aC extends xt{}function*S1(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const n of S1(e.slice(1)))yield`${t}${n}`}function*uC(e){return yield*S1(e.expr.map(t=>[...wl(t)]))}function*lC(e){for(const t of e.expr)yield*wl(t)}function*cC(e){return yield e.const}function*wl(e){return e.type==="and"?yield*uC(e):e.type==="or"?yield*lC(e):e.type==="const"?yield*cC(e):(()=>{throw new aC("Unknown expression")})()}function N1(e){const t=Fd(e.pattern);return Qs(t)?[...wl(t)]:[]}function tt(e,t){return T({[P]:"Literal",const:e,type:typeof e},t)}function I1(e){return T({[P]:"Boolean",type:"boolean"},e)}function kd(e){return T({[P]:"BigInt",type:"bigint"},e)}function Yi(e){return T({[P]:"Number",type:"number"},e)}function Li(e){return T({[P]:"String",type:"string"},e)}function*fC(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield I1():t==="number"?yield Yi():t==="bigint"?yield kd():t==="string"?yield Li():yield(()=>{const n=t.split("|").map(r=>tt(r.trim()));return n.length===0?Me():n.length===1?n[0]:ts(n)})()}function*dC(e){if(e[1]!=="{"){const t=tt("$"),n=ef(e.slice(1));return yield*[t,...n]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const n=fC(e.slice(2,t)),r=ef(e.slice(t+1));return yield*[...n,...r]}yield tt(e)}function*ef(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const n=tt(e.slice(0,t)),r=dC(e.slice(t));return yield*[n,...r]}yield tt(e)}function mC(e){return[...ef(e)]}class hC extends xt{}function pC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function P1(e,t){return Wi(e)?e.pattern.slice(1,e.pattern.length-1):wt(e)?`(${e.anyOf.map(n=>P1(n,t)).join("|")})`:es(e)?`${t}${uu}`:Qo(e)?`${t}${uu}`:ul(e)?`${t}${uu}`:ya(e)?`${t}${C1}`:Vi(e)?`${t}${pC(e.const.toString())}`:pa(e)?`${t}${Ox}`:(()=>{throw new hC(`Unexpected Kind '${e[P]}'`)})()}function x0(e){return`^${e.map(t=>P1(t,"")).join("")}$`}function Tu(e){const n=N1(e).map(r=>tt(r));return ts(n)}function T1(e,t){const n=ze(e)?x0(mC(e)):x0(e);return T({[P]:"TemplateLiteral",type:"string",pattern:n},t)}function gC(e){return N1(e).map(n=>n.toString())}function yC(e){const t=[];for(const n of e)t.push(...ci(n));return t}function wC(e){return[e.toString()]}function ci(e){return[...new Set(Wi(e)?gC(e):wt(e)?yC(e.anyOf):Vi(e)?wC(e.const):es(e)?["[number]"]:Qo(e)?["[number]"]:[])]}function bC(e,t,n){const r={};for(const i of Object.getOwnPropertyNames(t))r[i]=bl(e,ci(t[i]),n);return r}function $C(e,t,n){return bC(e,t.properties,n)}function vC(e,t,n){const r=$C(e,t,n);return Ct(r)}function M1(e,t){return e.map(n=>O1(n,t))}function DC(e){return e.filter(t=>!ga(t))}function EC(e,t){return L1(DC(M1(e,t)))}function xC(e){return e.some(t=>ga(t))?[]:e}function CC(e,t){return ts(xC(M1(e,t)))}function AC(e,t){return t in e?e[t]:t==="[number]"?ts(e):Me()}function FC(e,t){return t==="[number]"?e:Me()}function kC(e,t){return t in e?e[t]:Me()}function O1(e,t){return Tn(e)?EC(e.allOf,t):wt(e)?CC(e.anyOf,t):zi(e)?AC(e.items??[],t):Yo(e)?FC(e.items,t):nr(e)?kC(e.properties,t):Me()}function Sd(e,t){return t.map(n=>O1(e,n))}function C0(e,t){return ts(Sd(e,t))}function bl(e,t,n){if(Xt(e)||Xt(t)){const r="Index types using Ref parameters require both Type and Key to be of TSchema";if(!_t(e)||!_t(t))throw new xt(r);return ut("Index",[e,t])}return $n(t)?vC(e,t,n):qi(t)?PC(e,t,n):T(_t(t)?C0(e,ci(t)):C0(e,t),n)}function SC(e,t,n){return{[t]:bl(e,[t],pn(n))}}function NC(e,t,n){return t.reduce((r,i)=>({...r,...SC(e,i,n)}),{})}function IC(e,t,n){return NC(e,t.keys,n)}function PC(e,t,n){const r=IC(e,t,n);return Ct(r)}function Nd(e,t){return T({[P]:"Iterator",type:"Iterator",items:e},t)}function TC(e){const t=[];for(let n in e)ai(e[n])||t.push(n);return t}function MC(e,t){const n=TC(e),r=n.length>0?{[P]:"Object",type:"object",properties:e,required:n}:{[P]:"Object",type:"object",properties:e};return T(r,t)}var yt=MC;function B1(e,t){return T({[P]:"Promise",type:"Promise",item:e},t)}function OC(e){return T(yn(e,[ha]))}function BC(e){return T({...e,[ha]:"Readonly"})}function RC(e,t){return t===!1?OC(e):BC(e)}function fi(e,t){const n=t??!0;return $n(e)?jC(e,n):RC(e,n)}function LC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=fi(e[r],t);return n}function UC(e,t){return LC(e.properties,t)}function jC(e,t){const n=UC(e,t);return Ct(n)}function ns(e,t){return T(e.length>0?{[P]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[P]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function R1(e,t){return e in t?xn(e,t[e]):Ct(t)}function _C(e){return{[e]:tt(e)}}function VC(e){const t={};for(const n of e)t[n]=tt(n);return t}function qC(e,t){return Lx(t,e)?_C(e):VC(t)}function WC(e,t){const n=qC(e,t);return R1(e,n)}function ws(e,t){return t.map(n=>xn(e,n))}function zC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(t))n[r]=xn(e,t[r]);return n}function xn(e,t){const n={...t};return ai(t)?di(xn(e,yn(t,[Or]))):cd(t)?fi(xn(e,yn(t,[ha]))):$n(t)?R1(e,t.properties):qi(t)?WC(e,t.keys):Ho(t)?Cd(ws(e,t.parameters),xn(e,t.returns),n):Xo(t)?$a(ws(e,t.parameters),xn(e,t.returns),n):al(t)?xd(xn(e,t.items),n):ll(t)?Nd(xn(e,t.items),n):Tn(t)?mi(ws(e,t.allOf),n):wt(t)?At(ws(e,t.anyOf),n):zi(t)?ns(ws(e,t.items??[]),n):nr(t)?yt(zC(e,t.properties),n):Yo(t)?Ed(xn(e,t.items),n):cl(t)?B1(xn(e,t.item),n):t}function KC(e,t){const n={};for(const r of e)n[r]=xn(r,t);return n}function ZC(e,t,n){const r=_t(e)?ci(e):e,i=t({[P]:"MappedKey",keys:r}),o=KC(r,i);return yt(o,n)}function GC(e){return T(yn(e,[Or]))}function YC(e){return T({...e,[Or]:"Optional"})}function JC(e,t){return t===!1?GC(e):YC(e)}function di(e,t){const n=t??!0;return $n(e)?QC(e,n):JC(e,n)}function HC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=di(e[r],t);return n}function XC(e,t){return HC(e.properties,t)}function QC(e,t){const n=XC(e,t);return Ct(n)}function tf(e,t={}){const n=e.every(i=>nr(i)),r=_t(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return T(t.unevaluatedProperties===!1||_t(t.unevaluatedProperties)||n?{...r,[P]:"Intersect",type:"object",allOf:e}:{...r,[P]:"Intersect",allOf:e},t)}function eA(e){return e.every(t=>ai(t))}function tA(e){return yn(e,[Or])}function A0(e){return e.map(t=>ai(t)?tA(t):t)}function nA(e,t){return eA(e)?di(tf(A0(e),t)):tf(A0(e),t)}function L1(e,t={}){if(e.length===1)return T(e[0],t);if(e.length===0)return Me(t);if(e.some(n=>De(n)))throw new Error("Cannot intersect transform types");return nA(e,t)}function mi(e,t){if(e.length===1)return T(e[0],t);if(e.length===0)return Me(t);if(e.some(n=>De(n)))throw new Error("Cannot intersect transform types");return tf(e,t)}function rs(...e){const[t,n]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new xt("Ref: $ref must be a string");return T({[P]:"Ref",$ref:t},n)}function rA(e,t){return ut("Awaited",[ut(e,t)])}function iA(e){return ut("Awaited",[rs(e)])}function oA(e){return mi(U1(e))}function sA(e){return At(U1(e))}function aA(e){return $l(e)}function U1(e){return e.map(t=>$l(t))}function $l(e,t){return T(Jo(e)?rA(e.target,e.parameters):Tn(e)?oA(e.allOf):wt(e)?sA(e.anyOf):cl(e)?aA(e.item):Xt(e)?iA(e.$ref):e,t)}function j1(e){const t=[];for(const n of e)t.push(Ji(n));return t}function uA(e){const t=j1(e);return qx(t)}function lA(e){const t=j1(e);return Vx(t)}function cA(e){return e.map((t,n)=>n.toString())}function fA(e){return["[number]"]}function dA(e){return globalThis.Object.getOwnPropertyNames(e)}function mA(e){return nf?globalThis.Object.getOwnPropertyNames(e).map(n=>n[0]==="^"&&n[n.length-1]==="$"?n.slice(1,n.length-1):n):[]}function Ji(e){return Tn(e)?uA(e.allOf):wt(e)?lA(e.anyOf):zi(e)?cA(e.items??[]):Yo(e)?fA(e.items):nr(e)?dA(e.properties):fl(e)?mA(e.patternProperties):[]}let nf=!1;function Ro(e){nf=!0;const t=Ji(e);return nf=!1,`^(${t.map(r=>`(${r})`).join("|")})$`}function hA(e,t){return ut("KeyOf",[ut(e,t)])}function pA(e){return ut("KeyOf",[rs(e)])}function gA(e,t){const n=Ji(e),r=yA(n),i=ts(r);return T(i,t)}function yA(e){return e.map(t=>t==="[number]"?Yi():tt(t))}function Id(e,t){return Jo(e)?hA(e.target,e.parameters):Xt(e)?pA(e.$ref):$n(e)?$A(e,t):gA(e,t)}function wA(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Id(e[r],pn(t));return n}function bA(e,t){return wA(e.properties,t)}function $A(e,t){const n=bA(e,t);return Ct(n)}function _1(e){const t=Ji(e),n=Sd(e,t);return t.map((r,i)=>[t[i],n[i]])}function vA(e){const t=[];for(const n of e)t.push(...Ji(n));return Ux(t)}function DA(e){return e.filter(t=>!ga(t))}function EA(e,t){const n=[];for(const r of e)n.push(...Sd(r,[t]));return DA(n)}function xA(e,t){const n={};for(const r of t)n[r]=L1(EA(e,r));return n}function CA(e,t){const n=vA(e),r=xA(e,n);return yt(r,t)}function V1(e){return T({[P]:"Date",type:"Date"},e)}function q1(e){return T({[P]:"Null",type:"null"},e)}function W1(e){return T({[P]:"Symbol",type:"symbol"},e)}function z1(e){return T({[P]:"Undefined",type:"undefined"},e)}function K1(e){return T({[P]:"Uint8Array",type:"Uint8Array"},e)}function vl(e){return T({[P]:"Unknown"},e)}function AA(e){return e.map(t=>Pd(t,!1))}function FA(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=fi(Pd(e[n],!1));return t}function Ga(e,t){return t===!0?e:fi(e)}function Pd(e,t){return nx(e)||ix(e)?Ga(Hs(),t):nn(e)?fi(ns(AA(e))):ma(e)?K1():sd(e)?V1():nt(e)?Ga(yt(FA(e)),t):rx(e)?Ga($a([],vl()),t):Xe(e)?z1():ox(e)?q1():sx(e)?W1():o1(e)?kd():ur(e)||da(e)||ze(e)?tt(e):yt({})}function kA(e,t){return T(Pd(e,!0),t)}function SA(e,t){return Ho(e)?ns(e.parameters,t):Me(t)}function NA(e,t){if(Xe(e))throw new Error("Enum undefined or empty");const n=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(n)].map(o=>tt(o));return At(i,{...t,[sl]:"Enum"})}class IA extends xt{}var E;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(E||(E={}));function Pn(e){return e===E.False?e:E.True}function is(e){throw new IA(e)}function rt(e){return li(e)||Gi(e)||Tr(e)||Xn(e)||Jn(e)}function it(e,t){return li(t)?Y1():Gi(t)?Dl(e,t):Tr(t)?Md(e,t):Xn(t)?Q1():Jn(t)?Td():is("StructuralRight")}function Td(e,t){return E.True}function PA(e,t){return Gi(t)?Dl(e,t):Tr(t)&&t.anyOf.some(n=>Jn(n)||Xn(n))?E.True:Tr(t)?E.Union:Xn(t)||Jn(t)?E.True:E.Union}function TA(e,t){return Xn(e)?E.False:Jn(e)?E.Union:li(e)?E.True:E.False}function MA(e,t){return Te(t)&&El(t)?E.True:rt(t)?it(e,t):Ki(t)?Pn(pe(e.items,t.items)):E.False}function OA(e,t){return rt(t)?it(e,t):pd(t)?Pn(pe(e.items,t.items)):E.False}function BA(e,t){return rt(t)?it(e,t):Te(t)?Tt(e,t):Et(t)?Mn(e,t):dl(t)?E.True:E.False}function Z1(e,t){return x1(e)||Zi(e)?E.True:E.False}function RA(e,t){return rt(t)?it(e,t):Te(t)?Tt(e,t):Et(t)?Mn(e,t):Zi(t)?E.True:E.False}function LA(e,t){return rt(t)?it(e,t):Te(t)?Tt(e,t):ml(t)?e.parameters.length>t.parameters.length?E.False:e.parameters.every((n,r)=>Pn(pe(t.parameters[r],n))===E.True)?Pn(pe(e.returns,t.returns)):E.False:E.False}function UA(e,t){return rt(t)?it(e,t):Te(t)?Tt(e,t):Et(t)?Mn(e,t):hl(t)?E.True:E.False}function jA(e,t){return rt(t)?it(e,t):Te(t)?Tt(e,t):pl(t)?e.parameters.length>t.parameters.length?E.False:e.parameters.every((n,r)=>Pn(pe(t.parameters[r],n))===E.True)?Pn(pe(e.returns,t.returns)):E.False:E.False}function G1(e,t){return ui(e)&&ur(e.const)||Yt(e)||Br(e)?E.True:E.False}function _A(e,t){return Br(t)||Yt(t)?E.True:rt(t)?it(e,t):Te(t)?Tt(e,t):Et(t)?Mn(e,t):E.False}function Dl(e,t){return t.allOf.every(n=>pe(e,n)===E.True)?E.True:E.False}function VA(e,t){return e.allOf.some(n=>pe(n,t)===E.True)?E.True:E.False}function qA(e,t){return rt(t)?it(e,t):gd(t)?Pn(pe(e.items,t.items)):E.False}function WA(e,t){return ui(t)&&t.const===e.const?E.True:rt(t)?it(e,t):Te(t)?Tt(e,t):Et(t)?Mn(e,t):Hn(t)?X1(e):Yt(t)?J1(e):Br(t)?G1(e):Zi(t)?Z1(e):E.False}function Y1(e,t){return E.False}function zA(e,t){return E.True}function F0(e){let[t,n]=[e,0];for(;To(t);)t=t.not,n+=1;return n%2===0?t:vl()}function KA(e,t){return To(e)?pe(F0(e),t):To(t)?pe(e,F0(t)):is("Invalid fallthrough for Not")}function ZA(e,t){return rt(t)?it(e,t):Te(t)?Tt(e,t):Et(t)?Mn(e,t):yd(t)?E.True:E.False}function J1(e,t){return E1(e)||Yt(e)||Br(e)?E.True:E.False}function GA(e,t){return rt(t)?it(e,t):Te(t)?Tt(e,t):Et(t)?Mn(e,t):Br(t)||Yt(t)?E.True:E.False}function Qt(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function k0(e){return El(e)}function S0(e){return Qt(e,0)||Qt(e,1)&&"description"in e.properties&&Tr(e.properties.description)&&e.properties.description.anyOf.length===2&&(Hn(e.properties.description.anyOf[0])&&Bi(e.properties.description.anyOf[1])||Hn(e.properties.description.anyOf[1])&&Bi(e.properties.description.anyOf[0]))}function dc(e){return Qt(e,0)}function N0(e){return Qt(e,0)}function YA(e){return Qt(e,0)}function JA(e){return Qt(e,0)}function HA(e){return El(e)}function XA(e){const t=Yi();return Qt(e,0)||Qt(e,1)&&"length"in e.properties&&Pn(pe(e.properties.length,t))===E.True}function QA(e){return Qt(e,0)}function El(e){const t=Yi();return Qt(e,0)||Qt(e,1)&&"length"in e.properties&&Pn(pe(e.properties.length,t))===E.True}function eF(e){const t=$a([Hs()],Hs());return Qt(e,0)||Qt(e,1)&&"then"in e.properties&&Pn(pe(e.properties.then,t))===E.True}function H1(e,t){return pe(e,t)===E.False||Pu(e)&&!Pu(t)?E.False:E.True}function Tt(e,t){return Xn(e)?E.False:Jn(e)?E.Union:li(e)||D1(e)&&k0(t)||E1(e)&&dc(t)||x1(e)&&N0(t)||Ys(e)&&S0(t)||dl(e)&&YA(t)||Hn(e)&&k0(t)||Ys(e)&&S0(t)||Yt(e)&&dc(t)||Br(e)&&dc(t)||Zi(e)&&N0(t)||ba(e)&&HA(t)||hl(e)&&JA(t)||ml(e)&&QA(t)||pl(e)&&XA(t)?E.True:Et(e)&&Hn(rf(e))?t[sl]==="Record"?E.True:E.False:Et(e)&&Yt(rf(e))?Qt(t,0)?E.True:E.False:E.False}function tF(e,t){return rt(t)?it(e,t):Et(t)?Mn(e,t):Te(t)?(()=>{for(const n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!Pu(t.properties[n]))return E.False;if(Pu(t.properties[n]))return E.True;if(H1(e.properties[n],t.properties[n])===E.False)return E.False}return E.True})():E.False}function nF(e,t){return rt(t)?it(e,t):Te(t)&&eF(t)?E.True:wd(t)?Pn(pe(e.item,t.item)):E.False}function rf(e){return Mo in e.patternProperties?Yi():Oo in e.patternProperties?Li():is("Unknown record key pattern")}function of(e){return Mo in e.patternProperties?e.patternProperties[Mo]:Oo in e.patternProperties?e.patternProperties[Oo]:is("Unable to get record value schema")}function Mn(e,t){const[n,r]=[rf(t),of(t)];return D1(e)&&Yt(n)&&Pn(pe(e,r))===E.True?E.True:ba(e)&&Yt(n)||Hn(e)&&Yt(n)||Ki(e)&&Yt(n)?pe(e,r):Te(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(H1(r,e.properties[i])===E.False)return E.False;return E.True})():E.False}function rF(e,t){return rt(t)?it(e,t):Te(t)?Tt(e,t):Et(t)?pe(of(e),of(t)):E.False}function iF(e,t){const n=Gs(e)?Li():e,r=Gs(t)?Li():t;return pe(n,r)}function X1(e,t){return ui(e)&&ze(e.const)||Hn(e)?E.True:E.False}function oF(e,t){return rt(t)?it(e,t):Te(t)?Tt(e,t):Et(t)?Mn(e,t):Hn(t)?E.True:E.False}function sF(e,t){return rt(t)?it(e,t):Te(t)?Tt(e,t):Et(t)?Mn(e,t):Ys(t)?E.True:E.False}function aF(e,t){return Js(e)?pe(Tu(e),t):Js(t)?pe(e,Tu(t)):is("Invalid fallthrough for TemplateLiteral")}function uF(e,t){return Ki(t)&&e.items!==void 0&&e.items.every(n=>pe(n,t.items)===E.True)}function lF(e,t){return li(e)?E.True:Xn(e)?E.False:Jn(e)?E.Union:E.False}function cF(e,t){return rt(t)?it(e,t):Te(t)&&El(t)||Ki(t)&&uF(e,t)?E.True:gl(t)?Xe(e.items)&&!Xe(t.items)||!Xe(e.items)&&Xe(t.items)?E.False:Xe(e.items)&&!Xe(t.items)||e.items.every((n,r)=>pe(n,t.items[r])===E.True)?E.True:E.False:E.False}function fF(e,t){return rt(t)?it(e,t):Te(t)?Tt(e,t):Et(t)?Mn(e,t):ba(t)?E.True:E.False}function dF(e,t){return rt(t)?it(e,t):Te(t)?Tt(e,t):Et(t)?Mn(e,t):yl(t)?pF(e):Bi(t)?E.True:E.False}function Md(e,t){return t.anyOf.some(n=>pe(e,n)===E.True)?E.True:E.False}function mF(e,t){return e.anyOf.every(n=>pe(n,t)===E.True)?E.True:E.False}function Q1(e,t){return E.True}function hF(e,t){return li(t)?Y1():Gi(t)?Dl(e,t):Tr(t)?Md(e,t):Jn(t)?Td():Hn(t)?X1(e):Yt(t)?J1(e):Br(t)?G1(e):Zi(t)?Z1(e):Ki(t)?TA(e):gl(t)?lF(e):Te(t)?Tt(e,t):Xn(t)?E.True:E.False}function pF(e,t){return Bi(e)||Bi(e)?E.True:E.False}function gF(e,t){return Gi(t)?Dl(e,t):Tr(t)?Md(e,t):Xn(t)?Q1():Jn(t)?Td():Te(t)?Tt(e,t):yl(t)?E.True:E.False}function pe(e,t){return Js(e)||Js(t)?aF(e,t):Gs(e)||Gs(t)?iF(e,t):To(e)||To(t)?KA(e,t):Jn(e)?PA(e,t):Ki(e)?MA(e,t):dl(e)?BA(e,t):Zi(e)?RA(e,t):pd(e)?OA(e,t):ml(e)?LA(e,t):hl(e)?UA(e,t):pl(e)?jA(e,t):Br(e)?_A(e,t):Gi(e)?VA(e,t):gd(e)?qA(e,t):ui(e)?WA(e,t):li(e)?zA():yd(e)?ZA(e,t):Yt(e)?GA(e,t):Te(e)?tF(e,t):Et(e)?rF(e,t):Hn(e)?oF(e,t):Ys(e)?sF(e,t):gl(e)?cF(e,t):wd(e)?nF(e,t):ba(e)?fF(e,t):Bi(e)?dF(e,t):Tr(e)?mF(e,t):Xn(e)?hF(e,t):yl(e)?gF(e,t):is(`Unknown left type operand '${e[P]}'`)}function va(e,t){return pe(e,t)}function yF(e,t,n,r,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=Od(e[s],t,n,r,pn(i));return o}function wF(e,t,n,r,i){return yF(e.properties,t,n,r,i)}function bF(e,t,n,r,i){const o=wF(e,t,n,r,i);return Ct(o)}function $F(e,t,n,r){const i=va(e,t);return i===E.Union?At([n,r]):i===E.True?n:r}function Od(e,t,n,r,i){return $n(e)?bF(e,t,n,r,i):qi(e)?T(xF(e,t,n,r,i)):T($F(e,t,n,r),i)}function vF(e,t,n,r,i){return{[e]:Od(tt(e),t,n,r,pn(i))}}function DF(e,t,n,r,i){return e.reduce((o,s)=>({...o,...vF(s,t,n,r,i)}),{})}function EF(e,t,n,r,i){return DF(e.keys,t,n,r,i)}function xF(e,t,n,r,i){const o=EF(e,t,n,r,i);return Ct(o)}function CF(e){return e.allOf.every(t=>os(t))}function AF(e){return e.anyOf.some(t=>os(t))}function FF(e){return!os(e.not)}function os(e){return e[P]==="Intersect"?CF(e):e[P]==="Union"?AF(e):e[P]==="Not"?FF(e):e[P]==="Undefined"}function kF(e,t){return Bd(Tu(e),t)}function SF(e,t){const n=e.filter(r=>va(r,t)===E.False);return n.length===1?n[0]:At(n)}function Bd(e,t,n={}){return Wi(e)?T(kF(e,t),n):$n(e)?T(PF(e,t),n):T(wt(e)?SF(e.anyOf,t):va(e,t)!==E.False?Me():e,n)}function NF(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Bd(e[r],t);return n}function IF(e,t){return NF(e.properties,t)}function PF(e,t){const n=IF(e,t);return Ct(n)}function TF(e,t){return Rd(Tu(e),t)}function MF(e,t){const n=e.filter(r=>va(r,t)!==E.False);return n.length===1?n[0]:At(n)}function Rd(e,t,n){return Wi(e)?T(TF(e,t),n):$n(e)?T(RF(e,t),n):T(wt(e)?MF(e.anyOf,t):va(e,t)!==E.False?e:Me(),n)}function OF(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Rd(e[r],t);return n}function BF(e,t){return OF(e.properties,t)}function RF(e,t){const n=BF(e,t);return Ct(n)}function LF(e,t){return Ho(e)?T(e.returns,t):Me(t)}function ew(e){return fi(di(e))}function Hi(e,t,n){return T({[P]:"Record",type:"object",patternProperties:{[e]:t}},n)}function Ld(e,t,n){const r={};for(const i of e)r[i]=t;return yt(r,{...n,[sl]:"Record"})}function UF(e,t,n){return sC(e)?Ld(ci(e),t,n):Hi(e.pattern,t,n)}function jF(e,t,n){return Ld(ci(At(e)),t,n)}function _F(e,t,n){return Ld([e.toString()],t,n)}function VF(e,t,n){return Hi(e.source,t,n)}function qF(e,t,n){const r=Xe(e.pattern)?Oo:e.pattern;return Hi(r,t,n)}function WF(e,t,n){return Hi(Oo,t,n)}function zF(e,t,n){return Hi(Rx,t,n)}function KF(e,t,n){return yt({true:t,false:t},n)}function ZF(e,t,n){return Hi(Mo,t,n)}function GF(e,t,n){return Hi(Mo,t,n)}function tw(e,t,n={}){return wt(e)?jF(e.anyOf,t,n):Wi(e)?UF(e,t,n):Vi(e)?_F(e.const,t,n):pa(e)?KF(e,t,n):Qo(e)?ZF(e,t,n):es(e)?GF(e,t,n):y1(e)?VF(e,t,n):ya(e)?qF(e,t,n):h1(e)?WF(e,t,n):ga(e)?zF(e,t,n):Me(n)}function Ud(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function YF(e){const t=Ud(e);return t===Oo?Li():t===Mo?Yi():Li({pattern:t})}function nw(e){return e.patternProperties[Ud(e)]}function JF(e,t){return t.parameters=Da(e,t.parameters),t.returns=Qn(e,t.returns),t}function HF(e,t){return t.parameters=Da(e,t.parameters),t.returns=Qn(e,t.returns),t}function XF(e,t){return t.allOf=Da(e,t.allOf),t}function QF(e,t){return t.anyOf=Da(e,t.anyOf),t}function ek(e,t){return Xe(t.items)||(t.items=Da(e,t.items)),t}function tk(e,t){return t.items=Qn(e,t.items),t}function nk(e,t){return t.items=Qn(e,t.items),t}function rk(e,t){return t.items=Qn(e,t.items),t}function ik(e,t){return t.item=Qn(e,t.item),t}function ok(e,t){const n=lk(e,t.properties);return{...t,...yt(n)}}function sk(e,t){const n=Qn(e,YF(t)),r=Qn(e,nw(t)),i=tw(n,r);return{...t,...i}}function ak(e,t){return t.index in e?e[t.index]:vl()}function uk(e,t){const n=cd(t),r=ai(t),i=Qn(e,t);return n&&r?ew(i):n&&!r?fi(i):!n&&r?di(i):i}function lk(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:uk(e,t[r])}),{})}function Da(e,t){return t.map(n=>Qn(e,n))}function Qn(e,t){return Ho(t)?JF(e,t):Xo(t)?HF(e,t):Tn(t)?XF(e,t):wt(t)?QF(e,t):zi(t)?ek(e,t):Yo(t)?tk(e,t):al(t)?nk(e,t):ll(t)?rk(e,t):cl(t)?ik(e,t):nr(t)?ok(e,t):fl(t)?sk(e,t):p1(t)?ak(e,t):t}function ck(e,t){return Qn(t,ad(e))}function fk(e){return T({[P]:"Integer",type:"integer"},e)}function dk(e,t,n){return{[e]:ss(tt(e),t,pn(n))}}function mk(e,t,n){return e.reduce((i,o)=>({...i,...dk(o,t,n)}),{})}function hk(e,t,n){return mk(e.keys,t,n)}function pk(e,t,n){const r=hk(e,t,n);return Ct(r)}function gk(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join("")}function yk(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join("")}function wk(e){return e.toUpperCase()}function bk(e){return e.toLowerCase()}function $k(e,t,n){const r=Fd(e.pattern);if(!Qs(r))return{...e,pattern:rw(e.pattern,t)};const s=[...wl(r)].map(l=>tt(l)),a=iw(s,t),u=At(a);return T1([u],n)}function rw(e,t){return typeof e=="string"?t==="Uncapitalize"?gk(e):t==="Capitalize"?yk(e):t==="Uppercase"?wk(e):t==="Lowercase"?bk(e):e:e.toString()}function iw(e,t){return e.map(n=>ss(n,t))}function ss(e,t,n={}){return qi(e)?pk(e,t,n):Wi(e)?$k(e,t,n):wt(e)?At(iw(e.anyOf,t),n):Vi(e)?tt(rw(e.const,t),n):T(e,n)}function vk(e,t={}){return ss(e,"Capitalize",t)}function Dk(e,t={}){return ss(e,"Lowercase",t)}function Ek(e,t={}){return ss(e,"Uncapitalize",t)}function xk(e,t={}){return ss(e,"Uppercase",t)}function Ck(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=xl(e[i],t,pn(n));return r}function Ak(e,t,n){return Ck(e.properties,t,n)}function Fk(e,t,n){const r=Ak(e,t,n);return Ct(r)}function kk(e,t){return e.map(n=>jd(n,t))}function Sk(e,t){return e.map(n=>jd(n,t))}function Nk(e,t){const{[t]:n,...r}=e;return r}function Ik(e,t){return t.reduce((n,r)=>Nk(n,r),e)}function Pk(e,t){const n=yn(e,[Gt,"$id","required","properties"]),r=Ik(e.properties,t);return yt(r,n)}function Tk(e){const t=e.reduce((n,r)=>g1(r)?[...n,tt(r)]:n,[]);return At(t)}function jd(e,t){return Tn(e)?mi(kk(e.allOf,t)):wt(e)?At(Sk(e.anyOf,t)):nr(e)?Pk(e,t):yt({})}function xl(e,t,n){const r=nn(t)?Tk(t):t,i=_t(t)?ci(t):t,o=Xt(e),s=Xt(t);return $n(e)?Fk(e,i,n):qi(t)?Rk(e,t,n):o&&s?ut("Omit",[e,r],n):!o&&s?ut("Omit",[e,r],n):o&&!s?ut("Omit",[e,r],n):T({...jd(e,i),...n})}function Mk(e,t,n){return{[t]:xl(e,[t],pn(n))}}function Ok(e,t,n){return t.reduce((r,i)=>({...r,...Mk(e,i,n)}),{})}function Bk(e,t,n){return Ok(e,t.keys,n)}function Rk(e,t,n){const r=Bk(e,t,n);return Ct(r)}function Lk(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=Cl(e[i],t,pn(n));return r}function Uk(e,t,n){return Lk(e.properties,t,n)}function jk(e,t,n){const r=Uk(e,t,n);return Ct(r)}function _k(e,t){return e.map(n=>_d(n,t))}function Vk(e,t){return e.map(n=>_d(n,t))}function qk(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Wk(e,t){const n=yn(e,[Gt,"$id","required","properties"]),r=qk(e.properties,t);return yt(r,n)}function zk(e){const t=e.reduce((n,r)=>g1(r)?[...n,tt(r)]:n,[]);return At(t)}function _d(e,t){return Tn(e)?mi(_k(e.allOf,t)):wt(e)?At(Vk(e.anyOf,t)):nr(e)?Wk(e,t):yt({})}function Cl(e,t,n){const r=nn(t)?zk(t):t,i=_t(t)?ci(t):t,o=Xt(e),s=Xt(t);return $n(e)?jk(e,i,n):qi(t)?Yk(e,t,n):o&&s?ut("Pick",[e,r],n):!o&&s?ut("Pick",[e,r],n):o&&!s?ut("Pick",[e,r],n):T({..._d(e,i),...n})}function Kk(e,t,n){return{[t]:Cl(e,[t],pn(n))}}function Zk(e,t,n){return t.reduce((r,i)=>({...r,...Kk(e,i,n)}),{})}function Gk(e,t,n){return Zk(e,t.keys,n)}function Yk(e,t,n){const r=Gk(e,t,n);return Ct(r)}function Jk(e,t){return ut("Partial",[ut(e,t)])}function Hk(e){return ut("Partial",[rs(e)])}function Xk(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=di(e[n]);return t}function Qk(e){const t=yn(e,[Gt,"$id","required","properties"]),n=Xk(e.properties);return yt(n,t)}function I0(e){return e.map(t=>ow(t))}function ow(e){return Jo(e)?Jk(e.target,e.parameters):Xt(e)?Hk(e.$ref):Tn(e)?mi(I0(e.allOf)):wt(e)?At(I0(e.anyOf)):nr(e)?Qk(e):ul(e)||pa(e)||Qo(e)||Vi(e)||fd(e)||es(e)||ya(e)||dd(e)||wa(e)?e:yt({})}function Vd(e,t){return $n(e)?n4(e,t):T({...ow(e),...t})}function e4(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Vd(e[r],pn(t));return n}function t4(e,t){return e4(e.properties,t)}function n4(e,t){const n=t4(e,t);return Ct(n)}function r4(e,t){return ut("Required",[ut(e,t)])}function i4(e){return ut("Required",[rs(e)])}function o4(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=yn(e[n],[Or]);return t}function s4(e){const t=yn(e,[Gt,"$id","required","properties"]),n=o4(e.properties);return yt(n,t)}function P0(e){return e.map(t=>sw(t))}function sw(e){return Jo(e)?r4(e.target,e.parameters):Xt(e)?i4(e.$ref):Tn(e)?mi(P0(e.allOf)):wt(e)?At(P0(e.anyOf)):nr(e)?s4(e):ul(e)||pa(e)||Qo(e)||Vi(e)||fd(e)||es(e)||ya(e)||dd(e)||wa(e)?e:yt({})}function qd(e,t){return $n(e)?l4(e,t):T({...sw(e),...t})}function a4(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=qd(e[r],t);return n}function u4(e,t){return a4(e.properties,t)}function l4(e,t){const n=u4(e,t);return Ct(n)}function c4(e,t){return t.map(n=>Xt(n)?Wd(e,n.$ref):wn(e,n))}function Wd(e,t){return t in e?Xt(e[t])?Wd(e,e[t].$ref):wn(e,e[t]):Me()}function f4(e){return $l(e[0])}function d4(e){return bl(e[0],e[1])}function m4(e){return Id(e[0])}function h4(e){return Vd(e[0])}function p4(e){return xl(e[0],e[1])}function g4(e){return Cl(e[0],e[1])}function y4(e){return qd(e[0])}function w4(e,t,n){const r=c4(e,n);return t==="Awaited"?f4(r):t==="Index"?d4(r):t==="KeyOf"?m4(r):t==="Partial"?h4(r):t==="Omit"?p4(r):t==="Pick"?g4(r):t==="Required"?y4(r):Me()}function b4(e,t){return Ed(wn(e,t))}function $4(e,t){return xd(wn(e,t))}function v4(e,t,n){return Cd(Ea(e,t),wn(e,n))}function D4(e,t,n){return $a(Ea(e,t),wn(e,n))}function E4(e,t){return mi(Ea(e,t))}function x4(e,t){return Nd(wn(e,t))}function C4(e,t){return yt(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:wn(e,t[r])}),{}))}function A4(e,t){const[n,r]=[wn(e,nw(t)),Ud(t)],i=ad(t);return i.patternProperties[r]=n,i}function F4(e,t){return Xt(t)?{...Wd(e,t.$ref),[Gt]:t[Gt]}:t}function k4(e,t){return ns(Ea(e,t))}function S4(e,t){return At(Ea(e,t))}function Ea(e,t){return t.map(n=>wn(e,n))}function wn(e,t){return ai(t)?T(wn(e,yn(t,[Or])),t):cd(t)?T(wn(e,yn(t,[ha])),t):De(t)?T(F4(e,t),t):Yo(t)?T(b4(e,t.items),t):al(t)?T($4(e,t.items),t):Jo(t)?T(w4(e,t.target,t.parameters)):Ho(t)?T(v4(e,t.parameters,t.returns),t):Xo(t)?T(D4(e,t.parameters,t.returns),t):Tn(t)?T(E4(e,t.allOf),t):ll(t)?T(x4(e,t.items),t):nr(t)?T(C4(e,t.properties),t):fl(t)?T(A4(e,t)):zi(t)?T(k4(e,t.items||[]),t):wt(t)?T(S4(e,t.anyOf),t):t}function N4(e,t){return t in e?wn(e,e[t]):Me()}function I4(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:N4(e,n)}),{})}class P4{constructor(t){const n=I4(t),r=this.WithIdentifiers(n);this.$defs=r}Import(t,n){const r={...this.$defs,[t]:T(this.$defs[t],n)};return T({[P]:"Import",$defs:r,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:{...t[r],$id:r}}),{})}}function T4(e){return new P4(e)}function M4(e,t){return T({[P]:"Not",not:e},t)}function O4(e,t){return Xo(e)?ns(e.parameters,t):Me()}let B4=0;function R4(e,t={}){Xe(t.$id)&&(t.$id=`T${B4++}`);const n=ad(e({[P]:"This",$ref:`${t.$id}`}));return n.$id=t.$id,T({[sl]:"Recursive",...n},t)}function L4(e,t){const n=ze(e)?new globalThis.RegExp(e):e;return T({[P]:"RegExp",type:"RegExp",source:n.source,flags:n.flags},t)}function U4(e){return Tn(e)?e.allOf:wt(e)?e.anyOf:zi(e)?e.items??[]:[]}function j4(e){return U4(e)}function _4(e,t){return Xo(e)?T(e.returns,t):Me(t)}class V4{constructor(t){this.schema=t}Decode(t){return new q4(this.schema,t)}}class q4{constructor(t,n){this.schema=t,this.decode=n}EncodeTransform(t,n){const o={Encode:s=>n[Gt].Encode(t(s)),Decode:s=>this.decode(n[Gt].Decode(s))};return{...n,[Gt]:o}}EncodeSchema(t,n){const r={Decode:this.decode,Encode:t};return{...n,[Gt]:r}}Encode(t){return De(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function W4(e){return new V4(e)}function z4(e={}){return T({[P]:e[P]??"Unsafe"},e)}function K4(e){return T({[P]:"Void",type:"void"},e)}const Z4=Object.freeze(Object.defineProperty({__proto__:null,Any:Hs,Argument:Wx,Array:Ed,AsyncIterator:xd,Awaited:$l,BigInt:kd,Boolean:I1,Capitalize:vk,Composite:CA,Const:kA,Constructor:Cd,ConstructorParameters:SA,Date:V1,Enum:NA,Exclude:Bd,Extends:Od,Extract:Rd,Function:$a,Index:bl,InstanceType:LF,Instantiate:ck,Integer:fk,Intersect:mi,Iterator:Nd,KeyOf:Id,Literal:tt,Lowercase:Dk,Mapped:ZC,Module:T4,Never:Me,Not:M4,Null:q1,Number:Yi,Object:yt,Omit:xl,Optional:di,Parameters:O4,Partial:Vd,Pick:Cl,Promise:B1,Readonly:fi,ReadonlyOptional:ew,Record:tw,Recursive:R4,Ref:rs,RegExp:L4,Required:qd,Rest:j4,ReturnType:_4,String:Li,Symbol:W1,TemplateLiteral:T1,Transform:W4,Tuple:ns,Uint8Array:K1,Uncapitalize:Ek,Undefined:z1,Union:At,Unknown:vl,Unsafe:z4,Uppercase:xk,Void:K4},Symbol.toStringTag,{value:"Module"})),Ne=Z4;function aw(e){switch(e.errorType){case $.ArrayContains:return"Expected array to contain at least one matching value";case $.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case $.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case $.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case $.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case $.ArrayUniqueItems:return"Expected array elements to be unique";case $.Array:return"Expected array";case $.AsyncIterator:return"Expected AsyncIterator";case $.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case $.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case $.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case $.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case $.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case $.BigInt:return"Expected bigint";case $.Boolean:return"Expected boolean";case $.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case $.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case $.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case $.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case $.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case $.Date:return"Expected Date";case $.Function:return"Expected function";case $.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case $.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case $.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case $.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case $.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case $.Integer:return"Expected integer";case $.IntersectUnevaluatedProperties:return"Unexpected property";case $.Intersect:return"Expected all values to match";case $.Iterator:return"Expected Iterator";case $.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case $.Never:return"Never";case $.Not:return"Value should not match";case $.Null:return"Expected null";case $.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case $.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case $.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case $.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case $.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case $.Number:return"Expected number";case $.Object:return"Expected object";case $.ObjectAdditionalProperties:return"Unexpected property";case $.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case $.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case $.ObjectRequiredProperty:return"Expected required property";case $.Promise:return"Expected Promise";case $.RegExp:return"Expected string to match regular expression";case $.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case $.StringFormat:return`Expected string to match '${e.schema.format}' format`;case $.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case $.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case $.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case $.String:return"Expected string";case $.Symbol:return"Expected symbol";case $.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case $.Tuple:return"Expected tuple";case $.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case $.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case $.Uint8Array:return"Expected Uint8Array";case $.Undefined:return"Expected undefined";case $.Union:return"Expected union value";case $.Void:return"Expected void";case $.Kind:return`Expected kind '${e.schema[P]}'`;default:return"Unknown error type"}}let uw=aw;function G4(e){uw=e}function Y4(){return uw}class J4 extends xt{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function H4(e,t){const n=t.find(r=>r.$id===e.$ref);if(n===void 0)throw new J4(e);return On(n,t)}function Al(e,t){return!fn(e.$id)||t.some(n=>n.$id===e.$id)||t.push(e),t}function On(e,t){return e[P]==="This"||e[P]==="Ref"?H4(e,t):e}class X4 extends xt{constructor(t){super("Unable to hash value"),this.value=t}}var bn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(bn||(bn={}));let mo=BigInt("14695981039346656037");const[Q4,e3]=[BigInt("1099511628211"),BigInt("18446744073709551616")],t3=Array.from({length:256}).map((e,t)=>BigInt(t)),lw=new Float64Array(1),cw=new DataView(lw.buffer),fw=new Uint8Array(lw.buffer);function*n3(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function r3(e){Pt(bn.Array);for(const t of e)Lo(t)}function i3(e){Pt(bn.Boolean),Pt(e?1:0)}function o3(e){Pt(bn.BigInt),cw.setBigInt64(0,e);for(const t of fw)Pt(t)}function s3(e){Pt(bn.Date),Lo(e.getTime())}function a3(e){Pt(bn.Null)}function u3(e){Pt(bn.Number),cw.setFloat64(0,e);for(const t of fw)Pt(t)}function l3(e){Pt(bn.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())Lo(t),Lo(e[t])}function c3(e){Pt(bn.String);for(let t=0;t<e.length;t++)for(const n of n3(e.charCodeAt(t)))Pt(n)}function f3(e){Pt(bn.Symbol),Lo(e.description)}function d3(e){Pt(bn.Uint8Array);for(let t=0;t<e.length;t++)Pt(e[t])}function m3(e){return Pt(bn.Undefined)}function Lo(e){if(gn(e))return r3(e);if(il(e))return i3(e);if(Dr(e))return o3(e);if(ud(e))return s3(e);if(rl(e))return a3();if(ee(e))return u3(e);if(cr(e))return l3(e);if(fn(e))return c3(e);if(ol(e))return f3(e);if(ld(e))return d3(e);if(si(e))return m3();throw new X4(e)}function Pt(e){mo=mo^t3[e],mo=mo*Q4%e3}function zd(e){return mo=BigInt("14695981039346656037"),Lo(e),mo}class h3 extends xt{constructor(t){super("Unknown type"),this.schema=t}}function p3(e){return e[P]==="Any"||e[P]==="Unknown"}function ie(e){return e!==void 0}function g3(e,t,n){return!0}function y3(e,t,n){return!0}function w3(e,t,n){if(!gn(n)||ie(e.minItems)&&!(n.length>=e.minItems)||ie(e.maxItems)&&!(n.length<=e.maxItems)||!n.every(o=>pt(e.items,t,o))||e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of n){const a=zd(s);if(o.has(a))return!1;o.add(a)}return!0})())return!1;if(!(ie(e.contains)||ee(e.minContains)||ee(e.maxContains)))return!0;const r=ie(e.contains)?e.contains:Me(),i=n.reduce((o,s)=>pt(r,t,s)?o+1:o,0);return!(i===0||ee(e.minContains)&&i<e.minContains||ee(e.maxContains)&&i>e.maxContains)}function b3(e,t,n){return a1(n)}function $3(e,t,n){return!(!Dr(n)||ie(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||ie(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||ie(e.maximum)&&!(n<=e.maximum)||ie(e.minimum)&&!(n>=e.minimum)||ie(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function v3(e,t,n){return il(n)}function D3(e,t,n){return pt(e.returns,t,n.prototype)}function E3(e,t,n){return!(!ud(n)||ie(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||ie(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||ie(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||ie(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||ie(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function x3(e,t,n){return d1(n)}function C3(e,t,n){const r=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return pt(i,[...t,...r],n)}function A3(e,t,n){return!(!f1(n)||ie(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||ie(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||ie(e.maximum)&&!(n<=e.maximum)||ie(e.minimum)&&!(n>=e.minimum)||ie(e.multipleOf)&&n%e.multipleOf!==0)}function F3(e,t,n){const r=e.allOf.every(i=>pt(i,t,n));if(e.unevaluatedProperties===!1){const i=new RegExp(Ro(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s));return r&&o}else if(_t(e.unevaluatedProperties)){const i=new RegExp(Ro(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s)||pt(e.unevaluatedProperties,t,n[s]));return r&&o}else return r}function k3(e,t,n){return u1(n)}function S3(e,t,n){return n===e.const}function N3(e,t,n){return!1}function I3(e,t,n){return!pt(e.not,t,n)}function P3(e,t,n){return rl(n)}function T3(e,t,n){return!(!qe.IsNumberLike(n)||ie(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||ie(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||ie(e.minimum)&&!(n>=e.minimum)||ie(e.maximum)&&!(n<=e.maximum)||ie(e.multipleOf)&&n%e.multipleOf!==0)}function M3(e,t,n){if(!qe.IsObjectLike(n)||ie(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||ie(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const r=Object.getOwnPropertyNames(e.properties);for(const i of r){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!pt(o,t,n[i])||(os(o)||p3(o))&&!(i in n))return!1}else if(qe.IsExactOptionalProperty(n,i)&&!pt(o,t,n[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&i.length===r.length?!0:i.every(o=>r.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(n).every(o=>r.includes(o)||pt(e.additionalProperties,t,n[o])):!0}function O3(e,t,n){return l1(n)}function B3(e,t,n){if(!qe.IsRecordLike(n)||ie(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||ie(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const[r,i]=Object.entries(e.patternProperties)[0],o=new RegExp(r),s=Object.entries(n).every(([l,c])=>o.test(l)?pt(i,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(n).every(([l,c])=>o.test(l)?!0:pt(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(n).every(l=>o.test(l)):!0;return s&&a&&u}function R3(e,t,n){return pt(On(e,t),t,n)}function L3(e,t,n){const r=new RegExp(e.source,e.flags);return ie(e.minLength)&&!(n.length>=e.minLength)||ie(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function U3(e,t,n){return!fn(n)||ie(e.minLength)&&!(n.length>=e.minLength)||ie(e.maxLength)&&!(n.length<=e.maxLength)||ie(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:ie(e.format)?bd(e.format)?$d(e.format)(n):!1:!0}function j3(e,t,n){return ol(n)}function _3(e,t,n){return fn(n)&&new RegExp(e.pattern).test(n)}function V3(e,t,n){return pt(On(e,t),t,n)}function q3(e,t,n){if(!gn(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!pt(e.items[r],t,n[r]))return!1;return!0}function W3(e,t,n){return si(n)}function z3(e,t,n){return e.anyOf.some(r=>pt(r,t,n))}function K3(e,t,n){return!(!ld(n)||ie(e.maxByteLength)&&!(n.length<=e.maxByteLength)||ie(e.minByteLength)&&!(n.length>=e.minByteLength))}function Z3(e,t,n){return!0}function G3(e,t,n){return qe.IsVoidLike(n)}function Y3(e,t,n){return Ri(e[P])?Dd(e[P])(e,n):!1}function pt(e,t,n){const r=ie(e.$id)?Al(e,t):t,i=e;switch(i[P]){case"Any":return g3();case"Argument":return y3();case"Array":return w3(i,r,n);case"AsyncIterator":return b3(i,r,n);case"BigInt":return $3(i,r,n);case"Boolean":return v3(i,r,n);case"Constructor":return D3(i,r,n);case"Date":return E3(i,r,n);case"Function":return x3(i,r,n);case"Import":return C3(i,r,n);case"Integer":return A3(i,r,n);case"Intersect":return F3(i,r,n);case"Iterator":return k3(i,r,n);case"Literal":return S3(i,r,n);case"Never":return N3();case"Not":return I3(i,r,n);case"Null":return P3(i,r,n);case"Number":return T3(i,r,n);case"Object":return M3(i,r,n);case"Promise":return O3(i,r,n);case"Record":return B3(i,r,n);case"Ref":return R3(i,r,n);case"RegExp":return L3(i,r,n);case"String":return U3(i,r,n);case"Symbol":return j3(i,r,n);case"TemplateLiteral":return _3(i,r,n);case"This":return V3(i,r,n);case"Tuple":return q3(i,r,n);case"Undefined":return W3(i,r,n);case"Union":return z3(i,r,n);case"Uint8Array":return K3(i,r,n);case"Unknown":return Z3();case"Void":return G3(i,r,n);default:if(!Ri(i[P]))throw new h3(i);return Y3(i,r,n)}}function Mu(...e){return e.length===3?pt(e[0],e[1],e[2]):pt(e[0],[],e[1])}var $;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})($||($={}));class J3 extends xt{constructor(t){super("Unknown type"),this.schema=t}}function br(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function re(e){return e!==void 0}class dw{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function M(e,t,n,r,i=[]){return{type:e,schema:t,path:n,value:r,message:Y4()({errorType:e,path:n,schema:t,value:r,errors:i}),errors:i}}function*H3(e,t,n,r){}function*X3(e,t,n,r){}function*Q3(e,t,n,r){if(!gn(r))return yield M($.Array,e,n,r);re(e.minItems)&&!(r.length>=e.minItems)&&(yield M($.ArrayMinItems,e,n,r)),re(e.maxItems)&&!(r.length<=e.maxItems)&&(yield M($.ArrayMaxItems,e,n,r));for(let s=0;s<r.length;s++)yield*gt(e.items,t,`${n}/${s}`,r[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of r){const u=zd(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield M($.ArrayUniqueItems,e,n,r)),!(re(e.contains)||re(e.minContains)||re(e.maxContains)))return;const i=re(e.contains)?e.contains:Me(),o=r.reduce((s,a,u)=>gt(i,t,`${n}${u}`,a).next().done===!0?s+1:s,0);o===0&&(yield M($.ArrayContains,e,n,r)),ee(e.minContains)&&o<e.minContains&&(yield M($.ArrayMinContains,e,n,r)),ee(e.maxContains)&&o>e.maxContains&&(yield M($.ArrayMaxContains,e,n,r))}function*e6(e,t,n,r){a1(r)||(yield M($.AsyncIterator,e,n,r))}function*t6(e,t,n,r){if(!Dr(r))return yield M($.BigInt,e,n,r);re(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield M($.BigIntExclusiveMaximum,e,n,r)),re(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield M($.BigIntExclusiveMinimum,e,n,r)),re(e.maximum)&&!(r<=e.maximum)&&(yield M($.BigIntMaximum,e,n,r)),re(e.minimum)&&!(r>=e.minimum)&&(yield M($.BigIntMinimum,e,n,r)),re(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield M($.BigIntMultipleOf,e,n,r))}function*n6(e,t,n,r){il(r)||(yield M($.Boolean,e,n,r))}function*r6(e,t,n,r){yield*gt(e.returns,t,n,r.prototype)}function*i6(e,t,n,r){if(!ud(r))return yield M($.Date,e,n,r);re(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield M($.DateExclusiveMaximumTimestamp,e,n,r)),re(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield M($.DateExclusiveMinimumTimestamp,e,n,r)),re(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield M($.DateMaximumTimestamp,e,n,r)),re(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield M($.DateMinimumTimestamp,e,n,r)),re(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield M($.DateMultipleOfTimestamp,e,n,r))}function*o6(e,t,n,r){d1(r)||(yield M($.Function,e,n,r))}function*s6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*gt(o,[...t,...i],n,r)}function*a6(e,t,n,r){if(!f1(r))return yield M($.Integer,e,n,r);re(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield M($.IntegerExclusiveMaximum,e,n,r)),re(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield M($.IntegerExclusiveMinimum,e,n,r)),re(e.maximum)&&!(r<=e.maximum)&&(yield M($.IntegerMaximum,e,n,r)),re(e.minimum)&&!(r>=e.minimum)&&(yield M($.IntegerMinimum,e,n,r)),re(e.multipleOf)&&r%e.multipleOf!==0&&(yield M($.IntegerMultipleOf,e,n,r))}function*u6(e,t,n,r){let i=!1;for(const o of e.allOf)for(const s of gt(o,t,n,r))i=!0,yield s;if(i)return yield M($.Intersect,e,n,r);if(e.unevaluatedProperties===!1){const o=new RegExp(Ro(e));for(const s of Object.getOwnPropertyNames(r))o.test(s)||(yield M($.IntersectUnevaluatedProperties,e,`${n}/${s}`,r))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp(Ro(e));for(const s of Object.getOwnPropertyNames(r))if(!o.test(s)){const a=gt(e.unevaluatedProperties,t,`${n}/${s}`,r[s]).next();a.done||(yield a.value)}}}function*l6(e,t,n,r){u1(r)||(yield M($.Iterator,e,n,r))}function*c6(e,t,n,r){r!==e.const&&(yield M($.Literal,e,n,r))}function*f6(e,t,n,r){yield M($.Never,e,n,r)}function*d6(e,t,n,r){gt(e.not,t,n,r).next().done===!0&&(yield M($.Not,e,n,r))}function*m6(e,t,n,r){rl(r)||(yield M($.Null,e,n,r))}function*h6(e,t,n,r){if(!qe.IsNumberLike(r))return yield M($.Number,e,n,r);re(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield M($.NumberExclusiveMaximum,e,n,r)),re(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield M($.NumberExclusiveMinimum,e,n,r)),re(e.maximum)&&!(r<=e.maximum)&&(yield M($.NumberMaximum,e,n,r)),re(e.minimum)&&!(r>=e.minimum)&&(yield M($.NumberMinimum,e,n,r)),re(e.multipleOf)&&r%e.multipleOf!==0&&(yield M($.NumberMultipleOf,e,n,r))}function*p6(e,t,n,r){if(!qe.IsObjectLike(r))return yield M($.Object,e,n,r);re(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield M($.ObjectMinProperties,e,n,r)),re(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield M($.ObjectMaxProperties,e,n,r));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(r);for(const a of i)s.includes(a)||(yield M($.ObjectRequiredProperty,e.properties[a],`${n}/${br(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)o.includes(a)||(yield M($.ObjectAdditionalProperties,e,`${n}/${br(a)}`,r[a]));if(typeof e.additionalProperties=="object")for(const a of s)o.includes(a)||(yield*gt(e.additionalProperties,t,`${n}/${br(a)}`,r[a]));for(const a of o){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*gt(u,t,`${n}/${br(a)}`,r[a]),os(e)&&!(a in r)&&(yield M($.ObjectRequiredProperty,u,`${n}/${br(a)}`,void 0))):qe.IsExactOptionalProperty(r,a)&&(yield*gt(u,t,`${n}/${br(a)}`,r[a]))}}function*g6(e,t,n,r){l1(r)||(yield M($.Promise,e,n,r))}function*y6(e,t,n,r){if(!qe.IsRecordLike(r))return yield M($.Object,e,n,r);re(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield M($.ObjectMinProperties,e,n,r)),re(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield M($.ObjectMaxProperties,e,n,r));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[a,u]of Object.entries(r))s.test(a)&&(yield*gt(o,t,`${n}/${br(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(r))s.test(a)||(yield*gt(e.additionalProperties,t,`${n}/${br(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(r))if(!s.test(a))return yield M($.ObjectAdditionalProperties,e,`${n}/${br(a)}`,u)}}function*w6(e,t,n,r){yield*gt(On(e,t),t,n,r)}function*b6(e,t,n,r){if(!fn(r))return yield M($.String,e,n,r);if(re(e.minLength)&&!(r.length>=e.minLength)&&(yield M($.StringMinLength,e,n,r)),re(e.maxLength)&&!(r.length<=e.maxLength)&&(yield M($.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield M($.RegExp,e,n,r)}function*$6(e,t,n,r){if(!fn(r))return yield M($.String,e,n,r);re(e.minLength)&&!(r.length>=e.minLength)&&(yield M($.StringMinLength,e,n,r)),re(e.maxLength)&&!(r.length<=e.maxLength)&&(yield M($.StringMaxLength,e,n,r)),fn(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield M($.StringPattern,e,n,r))),fn(e.format)&&(bd(e.format)?$d(e.format)(r)||(yield M($.StringFormat,e,n,r)):yield M($.StringFormatUnknown,e,n,r))}function*v6(e,t,n,r){ol(r)||(yield M($.Symbol,e,n,r))}function*D6(e,t,n,r){if(!fn(r))return yield M($.String,e,n,r);new RegExp(e.pattern).test(r)||(yield M($.StringPattern,e,n,r))}function*E6(e,t,n,r){yield*gt(On(e,t),t,n,r)}function*x6(e,t,n,r){if(!gn(r))return yield M($.Tuple,e,n,r);if(e.items===void 0&&r.length!==0)return yield M($.TupleLength,e,n,r);if(r.length!==e.maxItems)return yield M($.TupleLength,e,n,r);if(e.items)for(let i=0;i<e.items.length;i++)yield*gt(e.items[i],t,`${n}/${i}`,r[i])}function*C6(e,t,n,r){si(r)||(yield M($.Undefined,e,n,r))}function*A6(e,t,n,r){if(Mu(e,t,r))return;const i=e.anyOf.map(o=>new dw(gt(o,t,n,r)));yield M($.Union,e,n,r,i)}function*F6(e,t,n,r){if(!ld(r))return yield M($.Uint8Array,e,n,r);re(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield M($.Uint8ArrayMaxByteLength,e,n,r)),re(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield M($.Uint8ArrayMinByteLength,e,n,r))}function*k6(e,t,n,r){}function*S6(e,t,n,r){qe.IsVoidLike(r)||(yield M($.Void,e,n,r))}function*N6(e,t,n,r){Dd(e[P])(e,r)||(yield M($.Kind,e,n,r))}function*gt(e,t,n,r){const i=re(e.$id)?[...t,e]:t,o=e;switch(o[P]){case"Any":return yield*H3();case"Argument":return yield*X3();case"Array":return yield*Q3(o,i,n,r);case"AsyncIterator":return yield*e6(o,i,n,r);case"BigInt":return yield*t6(o,i,n,r);case"Boolean":return yield*n6(o,i,n,r);case"Constructor":return yield*r6(o,i,n,r);case"Date":return yield*i6(o,i,n,r);case"Function":return yield*o6(o,i,n,r);case"Import":return yield*s6(o,i,n,r);case"Integer":return yield*a6(o,i,n,r);case"Intersect":return yield*u6(o,i,n,r);case"Iterator":return yield*l6(o,i,n,r);case"Literal":return yield*c6(o,i,n,r);case"Never":return yield*f6(o,i,n,r);case"Not":return yield*d6(o,i,n,r);case"Null":return yield*m6(o,i,n,r);case"Number":return yield*h6(o,i,n,r);case"Object":return yield*p6(o,i,n,r);case"Promise":return yield*g6(o,i,n,r);case"Record":return yield*y6(o,i,n,r);case"Ref":return yield*w6(o,i,n,r);case"RegExp":return yield*b6(o,i,n,r);case"String":return yield*$6(o,i,n,r);case"Symbol":return yield*v6(o,i,n,r);case"TemplateLiteral":return yield*D6(o,i,n,r);case"This":return yield*E6(o,i,n,r);case"Tuple":return yield*x6(o,i,n,r);case"Undefined":return yield*C6(o,i,n,r);case"Union":return yield*A6(o,i,n,r);case"Uint8Array":return yield*F6(o,i,n,r);case"Unknown":return yield*k6();case"Void":return yield*S6(o,i,n,r);default:if(!Ri(o[P]))throw new J3(e);return yield*N6(o,i,n,r)}}function I6(...e){const t=e.length===3?gt(e[0],e[1],"",e[2]):gt(e[0],[],"",e[1]);return new dw(t)}class P6 extends xt{constructor(t,n,r){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class T6 extends xt{constructor(t,n,r,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=n,this.value=r,this.error=i}}function Se(e,t,n){try{return De(e)?e[Gt].Decode(n):n}catch(r){throw new T6(e,t,n,r)}}function M6(e,t,n,r){return gn(r)?Se(e,n,r.map((i,o)=>rr(e.items,t,`${n}/${o}`,i))):Se(e,n,r)}function O6(e,t,n,r){if(!cr(r)||m1(r))return Se(e,n,r);const i=_1(e),o=i.map(c=>c[0]),s={...r};for(const[c,f]of i)c in s&&(s[c]=rr(f,t,`${n}/${c}`,s[c]));if(!De(e.unevaluatedProperties))return Se(e,n,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Se(u,`${n}/${c}`,l[c]));return Se(e,n,l)}function B6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=rr(o,[...t,...i],n,r);return Se(e,n,s)}function R6(e,t,n,r){return Se(e,n,rr(e.not,t,n,r))}function L6(e,t,n,r){if(!cr(r))return Se(e,n,r);const i=Ji(e),o={...r};for(const l of i)c1(o,l)&&(si(o[l])&&(!wa(e.properties[l])||qe.IsExactOptionalProperty(o,l))||(o[l]=rr(e.properties[l],t,`${n}/${l}`,o[l])));if(!_t(e.additionalProperties))return Se(e,n,o);const s=Object.getOwnPropertyNames(o),a=e.additionalProperties,u={...o};for(const l of s)i.includes(l)||(u[l]=Se(a,`${n}/${l}`,u[l]));return Se(e,n,u)}function U6(e,t,n,r){if(!cr(r))return Se(e,n,r);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...r};for(const c of Object.getOwnPropertyNames(r))o.test(c)&&(s[c]=rr(e.patternProperties[i],t,`${n}/${c}`,s[c]));if(!_t(e.additionalProperties))return Se(e,n,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.test(c)||(l[c]=Se(u,`${n}/${c}`,l[c]));return Se(e,n,l)}function j6(e,t,n,r){const i=On(e,t);return Se(e,n,rr(i,t,n,r))}function _6(e,t,n,r){const i=On(e,t);return Se(e,n,rr(i,t,n,r))}function V6(e,t,n,r){return gn(r)&&gn(e.items)?Se(e,n,e.items.map((i,o)=>rr(i,t,`${n}/${o}`,r[o]))):Se(e,n,r)}function q6(e,t,n,r){for(const i of e.anyOf){if(!Mu(i,t,r))continue;const o=rr(i,t,n,r);return Se(e,n,o)}return Se(e,n,r)}function rr(e,t,n,r){const i=Al(e,t),o=e;switch(e[P]){case"Array":return M6(o,i,n,r);case"Import":return B6(o,i,n,r);case"Intersect":return O6(o,i,n,r);case"Not":return R6(o,i,n,r);case"Object":return L6(o,i,n,r);case"Record":return U6(o,i,n,r);case"Ref":return j6(o,i,n,r);case"Symbol":return Se(o,n,r);case"This":return _6(o,i,n,r);case"Tuple":return V6(o,i,n,r);case"Union":return q6(o,i,n,r);default:return Se(o,n,r)}}function W6(e,t,n){return rr(e,t,"",n)}class z6 extends xt{constructor(t,n,r){super("The encoded value does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class K6 extends xt{constructor(t,n,r,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=n,this.value=r,this.error=i}}function Dt(e,t,n){try{return De(e)?e[Gt].Encode(n):n}catch(r){throw new K6(e,t,n,r)}}function Z6(e,t,n,r){const i=Dt(e,n,r);return gn(i)?i.map((o,s)=>er(e.items,t,`${n}/${s}`,o)):i}function G6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=Dt(e,n,r);return er(o,[...t,...i],n,s)}function Y6(e,t,n,r){const i=Dt(e,n,r);if(!cr(r)||m1(r))return i;const o=_1(e),s=o.map(f=>f[0]),a={...i};for(const[f,d]of o)f in a&&(a[f]=er(d,t,`${n}/${f}`,a[f]));if(!De(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const f of u)s.includes(f)||(c[f]=Dt(l,`${n}/${f}`,c[f]));return c}function J6(e,t,n,r){return Dt(e.not,n,Dt(e,n,r))}function H6(e,t,n,r){const i=Dt(e,n,r);if(!cr(i))return i;const o=Ji(e),s={...i};for(const c of o)c1(s,c)&&(si(s[c])&&(!wa(e.properties[c])||qe.IsExactOptionalProperty(s,c))||(s[c]=er(e.properties[c],t,`${n}/${c}`,s[c])));if(!_t(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Dt(u,`${n}/${c}`,l[c]));return l}function X6(e,t,n,r){const i=Dt(e,n,r);if(!cr(r))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...i};for(const f of Object.getOwnPropertyNames(r))s.test(f)&&(a[f]=er(e.patternProperties[o],t,`${n}/${f}`,a[f]));if(!_t(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const f of u)s.test(f)||(c[f]=Dt(l,`${n}/${f}`,c[f]));return c}function Q6(e,t,n,r){const i=On(e,t),o=er(i,t,n,r);return Dt(e,n,o)}function e8(e,t,n,r){const i=On(e,t),o=er(i,t,n,r);return Dt(e,n,o)}function t8(e,t,n,r){const i=Dt(e,n,r);return gn(e.items)?e.items.map((o,s)=>er(o,t,`${n}/${s}`,i[s])):[]}function n8(e,t,n,r){for(const i of e.anyOf){if(!Mu(i,t,r))continue;const o=er(i,t,n,r);return Dt(e,n,o)}for(const i of e.anyOf){const o=er(i,t,n,r);if(Mu(e,t,o))return Dt(e,n,o)}return Dt(e,n,r)}function er(e,t,n,r){const i=Al(e,t),o=e;switch(e[P]){case"Array":return Z6(o,i,n,r);case"Import":return G6(o,i,n,r);case"Intersect":return Y6(o,i,n,r);case"Not":return J6(o,i,n,r);case"Object":return H6(o,i,n,r);case"Record":return X6(o,i,n,r);case"Ref":return Q6(o,i,n,r);case"This":return e8(o,i,n,r);case"Tuple":return t8(o,i,n,r);case"Union":return n8(o,i,n,r);default:return Dt(o,n,r)}}function r8(e,t,n){return er(e,t,"",n)}function i8(e,t){return De(e)||ct(e.items,t)}function o8(e,t){return De(e)||ct(e.items,t)}function s8(e,t){return De(e)||ct(e.returns,t)||e.parameters.some(n=>ct(n,t))}function a8(e,t){return De(e)||ct(e.returns,t)||e.parameters.some(n=>ct(n,t))}function u8(e,t){return De(e)||De(e.unevaluatedProperties)||e.allOf.some(n=>ct(n,t))}function l8(e,t){const n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),r=e.$defs[e.$ref];return De(e)||ct(r,[...n,...t])}function c8(e,t){return De(e)||ct(e.items,t)}function f8(e,t){return De(e)||ct(e.not,t)}function d8(e,t){return De(e)||Object.values(e.properties).some(n=>ct(n,t))||_t(e.additionalProperties)&&ct(e.additionalProperties,t)}function m8(e,t){return De(e)||ct(e.item,t)}function h8(e,t){const n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return De(e)||ct(r,t)||_t(e.additionalProperties)&&De(e.additionalProperties)}function p8(e,t){return De(e)?!0:ct(On(e,t),t)}function g8(e,t){return De(e)?!0:ct(On(e,t),t)}function y8(e,t){return De(e)||!si(e.items)&&e.items.some(n=>ct(n,t))}function w8(e,t){return De(e)||e.anyOf.some(n=>ct(n,t))}function ct(e,t){const n=Al(e,t),r=e;if(e.$id&&sf.has(e.$id))return!1;switch(e.$id&&sf.add(e.$id),e[P]){case"Array":return i8(r,n);case"AsyncIterator":return o8(r,n);case"Constructor":return s8(r,n);case"Function":return a8(r,n);case"Import":return l8(r,n);case"Intersect":return u8(r,n);case"Iterator":return c8(r,n);case"Not":return f8(r,n);case"Object":return d8(r,n);case"Promise":return m8(r,n);case"Record":return h8(r,n);case"Ref":return p8(r,n);case"This":return g8(r,n);case"Tuple":return y8(r,n);case"Union":return w8(r,n);default:return De(e)}}const sf=new Set;function b8(e,t){return sf.clear(),ct(e,t)}class $8{constructor(t,n,r,i){this.schema=t,this.references=n,this.checkFunc=r,this.code=i,this.hasTransform=b8(t,n)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return I6(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new P6(this.schema,t,this.Errors(t).First());return this.hasTransform?W6(this.schema,this.references,t):t}Encode(t){const n=this.hasTransform?r8(this.schema,this.references,t):t;if(!this.checkFunc(n))throw new z6(this.schema,t,this.Errors(t).First());return n}}var Er;(function(e){function t(o){return o===36}e.DollarSign=t;function n(o){return o===95}e.IsUnderscore=n;function r(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=r;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(Er||(Er={}));var Ou;(function(e){function t(o){return o.length===0?!1:Er.IsNumeric(o.charCodeAt(0))}function n(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const a=o.charCodeAt(s);if(!(Er.IsAlpha(a)||Er.IsNumeric(a)||Er.DollarSign(a)||Er.IsUnderscore(a)))return!1}return!0}function r(o){return o.replace(/'/g,"\\'")}function i(o,s){return n(s)?`${o}.${s}`:`${o}['${r(s)}']`}e.Encode=i})(Ou||(Ou={}));var af;(function(e){function t(n){const r=[];for(let i=0;i<n.length;i++){const o=n.charCodeAt(i);Er.IsNumeric(o)||Er.IsAlpha(o)?r.push(n.charAt(i)):r.push(`_${o}_`)}return r.join("").replace(/__/g,"_")}e.Encode=t})(af||(af={}));var uf;(function(e){function t(n){return n.replace(/'/g,"\\'")}e.Escape=t})(uf||(uf={}));class v8 extends xt{constructor(t){super("Unknown type"),this.schema=t}}class T0 extends xt{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var xi;(function(e){function t(s,a,u){return qe.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${Ou.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function n(s){return qe.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=n;function r(s){return qe.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=r;function i(s){return qe.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return qe.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(xi||(xi={}));var Ps;(function(e){function t(p){return p[P]==="Any"||p[P]==="Unknown"}function*n(p,B,w){yield"true"}function*r(p,B,w){yield"true"}function*i(p,B,w){yield`Array.isArray(${w})`;const[z,_]=[Na("value","any"),Na("acc","number")];ee(p.maxItems)&&(yield`${w}.length <= ${p.maxItems}`),ee(p.minItems)&&(yield`${w}.length >= ${p.minItems}`);const V=rn(p.items,B,"value");if(yield`${w}.every((${z}) => ${V})`,Pe(p.contains)||ee(p.minContains)||ee(p.maxContains)){const ve=Pe(p.contains)?p.contains:Me(),Vt=rn(ve,B,"value"),fr=ee(p.minContains)?[`(count >= ${p.minContains})`]:[],Un=ee(p.maxContains)?[`(count <= ${p.maxContains})`]:[],ir=`const count = value.reduce((${_}, ${z}) => ${Vt} ? acc + 1 : acc, 0)`,Ia=["(count > 0)",...fr,...Un].join(" && ");yield`((${z}) => { ${ir}; return ${Ia}})(${w})`}p.uniqueItems===!0&&(yield`((${z}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${w})`)}function*o(p,B,w){yield`(typeof value === 'object' && Symbol.asyncIterator in ${w})`}function*s(p,B,w){yield`(typeof ${w} === 'bigint')`,Dr(p.exclusiveMaximum)&&(yield`${w} < BigInt(${p.exclusiveMaximum})`),Dr(p.exclusiveMinimum)&&(yield`${w} > BigInt(${p.exclusiveMinimum})`),Dr(p.maximum)&&(yield`${w} <= BigInt(${p.maximum})`),Dr(p.minimum)&&(yield`${w} >= BigInt(${p.minimum})`),Dr(p.multipleOf)&&(yield`(${w} % BigInt(${p.multipleOf})) === 0`)}function*a(p,B,w){yield`(typeof ${w} === 'boolean')`}function*u(p,B,w){yield*Dn(p.returns,B,`${w}.prototype`)}function*l(p,B,w){yield`(${w} instanceof Date) && Number.isFinite(${w}.getTime())`,ee(p.exclusiveMaximumTimestamp)&&(yield`${w}.getTime() < ${p.exclusiveMaximumTimestamp}`),ee(p.exclusiveMinimumTimestamp)&&(yield`${w}.getTime() > ${p.exclusiveMinimumTimestamp}`),ee(p.maximumTimestamp)&&(yield`${w}.getTime() <= ${p.maximumTimestamp}`),ee(p.minimumTimestamp)&&(yield`${w}.getTime() >= ${p.minimumTimestamp}`),ee(p.multipleOfTimestamp)&&(yield`(${w}.getTime() % ${p.multipleOfTimestamp}) === 0`)}function*c(p,B,w){yield`(typeof ${w} === 'function')`}function*f(p,B,w){const z=globalThis.Object.getOwnPropertyNames(p.$defs).reduce((_,V)=>[..._,p.$defs[V]],[]);yield*Dn(rs(p.$ref),[...B,...z],w)}function*d(p,B,w){yield`Number.isInteger(${w})`,ee(p.exclusiveMaximum)&&(yield`${w} < ${p.exclusiveMaximum}`),ee(p.exclusiveMinimum)&&(yield`${w} > ${p.exclusiveMinimum}`),ee(p.maximum)&&(yield`${w} <= ${p.maximum}`),ee(p.minimum)&&(yield`${w} >= ${p.minimum}`),ee(p.multipleOf)&&(yield`(${w} % ${p.multipleOf}) === 0`)}function*y(p,B,w){const z=p.allOf.map(_=>rn(_,B,w)).join(" && ");if(p.unevaluatedProperties===!1){const _=Ur(`${new RegExp(Ro(p))};`),V=`Object.getOwnPropertyNames(${w}).every(key => ${_}.test(key))`;yield`(${z} && ${V})`}else if(Pe(p.unevaluatedProperties)){const _=Ur(`${new RegExp(Ro(p))};`),V=`Object.getOwnPropertyNames(${w}).every(key => ${_}.test(key) || ${rn(p.unevaluatedProperties,B,`${w}[key]`)})`;yield`(${z} && ${V})`}else yield`(${z})`}function*C(p,B,w){yield`(typeof value === 'object' && Symbol.iterator in ${w})`}function*D(p,B,w){typeof p.const=="number"||typeof p.const=="boolean"?yield`(${w} === ${p.const})`:yield`(${w} === '${uf.Escape(p.const)}')`}function*S(p,B,w){yield"false"}function*A(p,B,w){yield`(!${rn(p.not,B,w)})`}function*N(p,B,w){yield`(${w} === null)`}function*j(p,B,w){yield xi.IsNumberLike(w),ee(p.exclusiveMaximum)&&(yield`${w} < ${p.exclusiveMaximum}`),ee(p.exclusiveMinimum)&&(yield`${w} > ${p.exclusiveMinimum}`),ee(p.maximum)&&(yield`${w} <= ${p.maximum}`),ee(p.minimum)&&(yield`${w} >= ${p.minimum}`),ee(p.multipleOf)&&(yield`(${w} % ${p.multipleOf}) === 0`)}function*W(p,B,w){yield xi.IsObjectLike(w),ee(p.minProperties)&&(yield`Object.getOwnPropertyNames(${w}).length >= ${p.minProperties}`),ee(p.maxProperties)&&(yield`Object.getOwnPropertyNames(${w}).length <= ${p.maxProperties}`);const z=Object.getOwnPropertyNames(p.properties);for(const _ of z){const V=Ou.Encode(w,_),ve=p.properties[_];if(p.required&&p.required.includes(_))yield*Dn(ve,B,V),(os(ve)||t(ve))&&(yield`('${_}' in ${w})`);else{const Vt=rn(ve,B,V);yield xi.IsExactOptionalProperty(w,_,Vt)}}if(p.additionalProperties===!1)if(p.required&&p.required.length===z.length)yield`Object.getOwnPropertyNames(${w}).length === ${z.length}`;else{const _=`[${z.map(V=>`'${V}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${w}).every(key => ${_}.includes(key))`}if(typeof p.additionalProperties=="object"){const _=rn(p.additionalProperties,B,`${w}[key]`),V=`[${z.map(ve=>`'${ve}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${w}).every(key => ${V}.includes(key) || ${_}))`}}function*G(p,B,w){yield`${w} instanceof Promise`}function*Le(p,B,w){yield xi.IsRecordLike(w),ee(p.minProperties)&&(yield`Object.getOwnPropertyNames(${w}).length >= ${p.minProperties}`),ee(p.maxProperties)&&(yield`Object.getOwnPropertyNames(${w}).length <= ${p.maxProperties}`);const[z,_]=Object.entries(p.patternProperties)[0],V=Ur(`${new RegExp(z)}`),ve=rn(_,B,"value"),Vt=Pe(p.additionalProperties)?rn(p.additionalProperties,B,w):p.additionalProperties===!1?"false":"true",fr=`(${V}.test(key) ? ${ve} : ${Vt})`;yield`(Object.entries(${w}).every(([key, value]) => ${fr}))`}function*Ft(p,B,w){const z=On(p,B);if(Ge.functions.has(p.$ref))return yield`${Qi(p.$ref)}(${w})`;yield*Dn(z,B,w)}function*ot(p,B,w){const z=Ur(`${new RegExp(p.source,p.flags)};`);yield`(typeof ${w} === 'string')`,ee(p.maxLength)&&(yield`${w}.length <= ${p.maxLength}`),ee(p.minLength)&&(yield`${w}.length >= ${p.minLength}`),yield`${z}.test(${w})`}function*Mt(p,B,w){yield`(typeof ${w} === 'string')`,ee(p.maxLength)&&(yield`${w}.length <= ${p.maxLength}`),ee(p.minLength)&&(yield`${w}.length >= ${p.minLength}`),p.pattern!==void 0&&(yield`${Ur(`${new RegExp(p.pattern)};`)}.test(${w})`),p.format!==void 0&&(yield`format('${p.format}', ${w})`)}function*vn(p,B,w){yield`(typeof ${w} === 'symbol')`}function*Rn(p,B,w){yield`(typeof ${w} === 'string')`,yield`${Ur(`${new RegExp(p.pattern)};`)}.test(${w})`}function*Xi(p,B,w){yield`${Qi(p.$ref)}(${w})`}function*Nl(p,B,w){if(yield`Array.isArray(${w})`,p.items===void 0)return yield`${w}.length === 0`;yield`(${w}.length === ${p.maxItems})`;for(let z=0;z<p.items.length;z++)yield`${rn(p.items[z],B,`${w}[${z}]`)}`}function*us(p,B,w){yield`${w} === undefined`}function*Fa(p,B,w){yield`(${p.anyOf.map(_=>rn(_,B,w)).join(" || ")})`}function*Ln(p,B,w){yield`${w} instanceof Uint8Array`,ee(p.maxByteLength)&&(yield`(${w}.length <= ${p.maxByteLength})`),ee(p.minByteLength)&&(yield`(${w}.length >= ${p.minByteLength})`)}function*ka(p,B,w){yield"true"}function*Il(p,B,w){yield xi.IsVoidLike(w)}function*Sa(p,B,w){const z=Ge.instances.size;Ge.instances.set(z,p),yield`kind('${p[P]}', ${z}, ${w})`}function*Dn(p,B,w,z=!0){const _=fn(p.$id)?[...B,p]:B,V=p;if(z&&fn(p.$id)){const ve=Qi(p.$id);if(Ge.functions.has(ve))return yield`${ve}(${w})`;{Ge.functions.set(ve,"<deferred>");const Vt=hi(ve,p,B,"value",!1);return Ge.functions.set(ve,Vt),yield`${ve}(${w})`}}switch(V[P]){case"Any":return yield*n();case"Argument":return yield*r();case"Array":return yield*i(V,_,w);case"AsyncIterator":return yield*o(V,_,w);case"BigInt":return yield*s(V,_,w);case"Boolean":return yield*a(V,_,w);case"Constructor":return yield*u(V,_,w);case"Date":return yield*l(V,_,w);case"Function":return yield*c(V,_,w);case"Import":return yield*f(V,_,w);case"Integer":return yield*d(V,_,w);case"Intersect":return yield*y(V,_,w);case"Iterator":return yield*C(V,_,w);case"Literal":return yield*D(V,_,w);case"Never":return yield*S();case"Not":return yield*A(V,_,w);case"Null":return yield*N(V,_,w);case"Number":return yield*j(V,_,w);case"Object":return yield*W(V,_,w);case"Promise":return yield*G(V,_,w);case"Record":return yield*Le(V,_,w);case"Ref":return yield*Ft(V,_,w);case"RegExp":return yield*ot(V,_,w);case"String":return yield*Mt(V,_,w);case"Symbol":return yield*vn(V,_,w);case"TemplateLiteral":return yield*Rn(V,_,w);case"This":return yield*Xi(V,_,w);case"Tuple":return yield*Nl(V,_,w);case"Undefined":return yield*us(V,_,w);case"Union":return yield*Fa(V,_,w);case"Uint8Array":return yield*Ln(V,_,w);case"Unknown":return yield*ka();case"Void":return yield*Il(V,_,w);default:if(!Ri(V[P]))throw new v8(p);return yield*Sa(V,_,w)}}const Ge={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function rn(p,B,w,z=!0){return`(${[...Dn(p,B,w,z)].join(" && ")})`}function Qi(p){return`check_${af.Encode(p)}`}function Ur(p){const B=`local_${Ge.variables.size}`;return Ge.variables.set(B,`const ${B} = ${p}`),B}function hi(p,B,w,z,_=!0){const[V,ve]=[`
`,ir=>"".padStart(ir," ")],Vt=Na("value","any"),fr=um("boolean"),Un=[...Dn(B,w,z,_)].map(ir=>`${ve(4)}${ir}`).join(` &&${V}`);return`function ${p}(${Vt})${fr} {${V}${ve(2)}return (${V}${Un}${V}${ve(2)})
}`}function Na(p,B){const w=Ge.language==="typescript"?`: ${B}`:"";return`${p}${w}`}function um(p){return Ge.language==="typescript"?`: ${p}`:""}function db(p,B,w){const z=hi("check",p,B,"value"),_=Na("value","any"),V=um("boolean"),ve=[...Ge.functions.values()],Vt=[...Ge.variables.values()],fr=fn(p.$id)?`return function check(${_})${V} {
  return ${Qi(p.$id)}(value)
}`:`return ${z}`;return[...Vt,...ve,fr].join(`
`)}function lm(...p){const B={language:"javascript"},[w,z,_]=p.length===2&&gn(p[1])?[p[0],p[1],B]:p.length===2&&!gn(p[1])?[p[0],[],p[1]]:p.length===3?[p[0],p[1],p[2]]:p.length===1?[p[0],[],B]:[null,[],B];if(Ge.language=_.language,Ge.variables.clear(),Ge.functions.clear(),Ge.instances.clear(),!Pe(w))throw new T0(w);for(const V of z)if(!Pe(V))throw new T0(V);return db(w,z)}e.Code=lm;function mb(p,B=[]){const w=lm(p,B,{language:"javascript"}),z=globalThis.Function("kind","format","hash",w),_=new Map(Ge.instances);function V(Un,ir,Ia){if(!Ri(Un)||!_.has(ir))return!1;const hb=Dd(Un),pb=_.get(ir);return hb(pb,Ia)}function ve(Un,ir){return bd(Un)?$d(Un)(ir):!1}function Vt(Un){return zd(Un)}const fr=z(V,ve,Vt);return new $8(p,B,fr,w)}e.Compile=mb})(Ps||(Ps={}));const lf={};function mw(e,t){e in lf||(lf[e]=t)}let M0=!1;function D8(){M0||(M0=!0,G4(e=>(lf[e.schema[P]]||aw)(e)))}const cf=Symbol.for("object-shape-tester.shape-identifier");function We(e){if(D8(),Kd(e))return e;const t=ff(e),n=Ci(t,!1),r=Ci(t,!0),i={$_schema:t,$_schemaNoExtraKeys:n,$_schemaExtraKeys:r,default:t.default,$_compiledSchema:Ps.Compile(t),$_compiledSchemaNoExtraKeys:Ps.Compile(n),$_compiledSchemaExtraKeys:Ps.Compile(r)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[cf]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function Kd(e){return F.hasKey(e,cf)&&!!e[cf]}function Zd(e){return F.hasKey(e,P)}function Ci(e,t){const n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(r=>Ci(r,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(r=>Ci(r,t))),Zd(e.items)?n.items=Ci(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(r=>Ci(r,t))),F.isObject(e.properties)){const r={};Object.entries(e.properties).forEach(([i,o])=>{r[i]=Ci(o,t)}),n.properties=r}return n.additionalProperties=t,n}function ff(e){if(Zd(e))return e;if(Kd(e))return e.$_schema;if(F.isFunction(e))return Ne.Function([],Ne.Any(),{default:e});if(F.isObject(e)){const t={},n={};return Object.entries(e).forEach(([r,i])=>{const o=ff(i);n[r]=o,t[r]=o.default}),Ne.Object(n,{default:t})}else{if(F.isArray(e))return Ne.Array(Ne.Union(e.map(t=>ff(t))),{default:[]});if(F.isPrimitive(e)){if(F.isString(e))return Ne.String({default:e});if(F.isNumber(e))return Ne.Number({default:e});if(F.isBoolean(e))return Ne.Boolean({default:e});if(F.isSymbol(e))return Ne.Symbol({default:e});if(F.isNull(e))return Ne.Null({default:null});if(F.isUndefined(e))return Ne.Undefined({default:void 0});if(F.isBigInt(e))return Ne.BigInt({default:e});In.tsType(e).equals(),In.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${h(e)}`)}}function df(e,t){const n=qn(e);return We(Ne.Union(n.map(r=>Ne.Literal(r)),{default:n[0]}))}function E8(e){return F.isSymbol(e)?x8(e):We(Ne.Const(e,{default:e}))}const Ya="ExactSymbol";function x8(e){return Ri(Ya)||F1(Ya,(t,n)=>n===t.symbol),mw(Ya,({schema:t})=>`Expected symbol ${t.symbol?.description?pD({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),We(Ne.Unsafe({[P]:Ya,symbol:e,default:e}))}function bt(e,t={}){qe.ExactOptionalPropertyTypes=!0;const n=We(e).$_schema,r=t.alsoUndefined?Ne.Union([Ne.Undefined(),n]):n;return We(Ne.Optional(r))}function Bt(...e){let t;const n=e.map((r,i)=>{const o=We(r);return i||(t=o.default),o.$_schema});return We(Ne.Union(n,{default:t}))}class C8 extends TypeError{value;errors;failureMessage;name="ShapeMismatchError";constructor(t,n,r){const i=n.map(s=>hw(s)).join(`
`),o=qo(r,`Shape mismatch:
${Mf(i,1)}`);super(o),this.value=t,this.errors=n,this.failureMessage=r}}function A8(e){return e.errors.flatMap(t=>Array.from(t))}function hw(e,t=0){const n=A8(e).map(i=>hw(i,t+1)),r=[e.path,e.message].filter(F.isTruthy).join(": ")+(n.length?":":"");return[Mf(r,t),...n].join(`
`)}function ki(e,t,n={}){return pw(t,n).Check(e)}function F8(e,t,n={},r){if(ki(e,t,n))return;const i=Array.from(pw(t,n).Errors(e));if(i.length)throw new C8(e,i,r)}function pw(e,t){return e=k8(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function k8(e){return We(e)}const lu="recordShape";function Gd({keys:e,values:t,partial:n,additionalProperties:r}){S8();const i=gw(e),o=We(t);return Ne.Unsafe({[P]:lu,keysShape:i,valuesShape:o,isPartial:!!n,additionalProperties:!!r,default:N8({isPartial:!!n,keysShape:i,valuesShape:o})})}function S8(){Ri(lu)||F1(lu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const n=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:ki(i,e.keysShape),a=ki(o,e.valuesShape);return s&&a}),r=e.isPartial?!0:!O0(e.keysShape,t).length;return n&&r}),mw(lu,e=>{const n=e.schema,r=e.value;if(typeof r!="object"||!r||Array.isArray(r))return"Expected an object";const i=_i(Object.entries(r),([u])=>u,(u,[l,c])=>!ki(l,n.keysShape)||!ki(c,n.valuesShape)),o=O0(n.keysShape,r),s=i.length?["Failure at keys",i.join(",")].join(": "):"",a=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,a].filter(F.isTruthy).join(`
`)})}function O0(e,t){const n=Bu(e).filter(r=>F.isPropertyKey(r));return n.length?n.filter(r=>!F.hasKey(t,r)):[]}function N8({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{const r=Bu(e),i=t.default;return Object.fromEntries(r.map(o=>[o,i]))}}function gw(e){return Kd(e)?e:Zd(e)?We(e):F.isObject(e)?df(e):F.isArray(e)&&F.isLengthAtLeast(e,1)?Bt(...e.map(t=>E8(t))):F.isPropertyKey(e)?We(e):We(Ne.Undefined())}function Bu(e){const t=e.$_schema,n=t[P].toLowerCase();return["const","literal"].includes(n)?[t.const]:n==="union"?hp(t.anyOf.flatMap(r=>Bu(We(r)))):["undefined","number","string","symbol"].includes(n)?[]:Bu(gw(e.default))}function I8(e){return We(Ne.Unknown({default:e}))}const P8=We({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:I8()});function mc(e){return ki(e,P8,{allowExtraKeys:!0})}class yw extends i1{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||od}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:T8}=WD,B0=()=>document.createComment(""),bs=(e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=r.insertBefore(B0(),i),s=r.insertBefore(B0(),i);n=new T8(o,s,e,e.options)}else{const o=n._$AB.nextSibling,s=n._$AM,a=s!==e;if(a){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==s._$AU&&n._$AP(u)}if(o!==i||a){let u=n._$AA;for(;u!==o;){const l=u.nextSibling;r.insertBefore(u,i),u=l}}}return n},vi=(e,t,n=e)=>(e._$AI(t,n),e),M8={},O8=(e,t=M8)=>e._$AH=t,B8=e=>e._$AH,hc=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yd={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Rr=e=>(...t)=>({_$litDirective$:e,values:t});class Lr{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R8={attribute:!0,type:String,converter:xu,reflect:!1,hasChanged:Zf},L8=(e=R8,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(r==="setter"){const{name:s}=n;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e)}}throw Error("Unsupported decorator location: "+r)};function U8(e){return(t,n)=>typeof n=="object"?L8(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const en=Rr(class extends Lr{constructor(e){if(super(e),e.type!==Yd.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return mn}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=e=>e??te;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j8(e,t,n){return e?t(e):n?.(e)}class _8 extends Ns{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function V8(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(r||i)return[...e];const o=e.map(a=>[a]);return o.length||(o[0]=[]),n.forEach(a=>{a>=0&&a<e.length&&(o[a]=[])}),t.forEach(a=>{const u=o[a.index];u&&u.splice(0,0,...a.values)}),o.flat()}function mf(e){return F.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Jd(e){return F.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function ww(e){return _i(e,t=>{if(mf(t))return t.definition;if(Jd(t))return t.tagInterpolationKey||t},F.isTruthy)}const bw=new WeakMap;function q8(e,t){const n=ww(t);return $w(bw,[e,...n]).value?.template}function W8(e,t,n){const r=ww(t);return Dw(bw,[e,...r],n)}function $w(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=vw(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?$w(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function vw(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function Dw(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=vw(e,t,r);if(!o)return{result:!1,reason:s};const a=i??{nested:void 0,template:void 0};if(i||e.set(o,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),Dw(u,t,n,r+1)}function Ew(e,t,n){const r=q8(e,t),i=r??n();if(!r){const a=W8(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const o=i.valuesTransform(t),s=V8(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function xw(e,t,n,r){const i=[],o=[],s=[],a=[];return e.forEach((l,c)=>{const f=i.length-1,d=i[f],y=c-1,C=t[y];r&&r(l);let D,S=[];if(typeof d=="string"&&(D=n(d,l,C),D)){i[f]=[d,D.replacement].join(""),s.push(y);const N=D.getExtraValues;S=N?N(C):[],S.length&&N?(i[f]+=" ",S.forEach((j,W)=>{W&&i.push(" ")}),a.push(j=>{const W=j[y],G=N(W);return{index:y,values:G}}),i.push(l)):i[f]+=l}D||i.push(l);const A=e.raw[c];D?(o[f]=[o[f],D.replacement,A].join(""),S.length&&S.forEach(()=>{o.push("")})):o.push(A)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(l){const c=a.flatMap(f=>f(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function z8(...[e,t,n]){if(Jd(n))return{replacement:n.tagName,getExtraValues:void 0}}function K8(e,t){return xw(e,t,z8)}function x(e,...t){const n=Ew(e,t,()=>K8(e,t));return su(n.strings,...n.values)}const Z8={allowPolymorphicState:!1,errorHandler:void 0};function Cw(e,t){const n=e.instanceState;Ie(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&Ie(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)})}class G8 extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function Hd(){return e=>class extends G8{static type=e;_type=e;constructor(t){super(e,t)}}}function lt(){return Hd()}function Y8(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=Hd()([e,r].join("-"));return n[r]=i,n},{}):{}}function J8(e){return e?dn(e,t=>t):{}}function Aw(e,t){t in e||U8()(e,t)}function H8(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function R0(e,t){const n=e;function r(s){t?H8(s,e,e.tagName):Aw(e,s)}function i(s,a){return r(a),n[a]}return new Proxy({},{get:i,set(s,a,u){r(a);const l=n[a];function c(d){s[a]=d,n[a]=d}const f=e.observablePropertyListenerMap[a];if(l!==u&&mc(l)&&f&&l.removeListener(f),mc(u))if(f)u.listen(!1,f);else{let d=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=d,u.listen(!1,d)}else mc(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return i(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function L0(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid element string name '${r}' in '${e}': element string names must begin with the element's tag name.`)})}function U0(e,t,n){return n?Uv(n,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function X8({hostClassNames:e,cssVars:t}){return{hostClasses:dn(e,(n,r)=>({name:Qe(r),selector:Qe(`:host(.${r})`)})),cssVars:t}}function Q8({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&Ie(t).forEach(o=>{const s=t[o],a=n[o];typeof s=="function"&&(s({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function eS({element:e,eventsMap:t,cssVars:n,slotNamesMap:r,testIdsMap:i}){function o(a){Ie(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:n,slotNames:r,testIds:i,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function xa(...e){return In.isEmpty(e),t=>{const n=t;if(!F.isObject(n))throw new TypeError("Cannot define element with non-object init: ${init}");return tS({...n,options:{...n.options}})}}function tS(e){if(!F.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!F.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...Z8,...e.options},n=Y8(e.tagName,e.events),r=J8(e.hostClasses);e.hostClasses&&L0(e.tagName,e.hostClasses),e.cssVars&&L0(e.tagName,e.cssVars);const i=e.cssVars?Mr(e.cssVars):{},o=U0(e.tagName,"slot",e.slotNames),s=U0(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(X8({hostClassNames:r,cssVars:i})):e.styles||x``,u=e.render;function l(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:f}}const c=class extends _8{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return eS({element:this,eventsMap:n,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=l;static events=n;static render=u;static hostClasses=r;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const y=e.state(f);if(y instanceof Promise)throw new TypeError("init cannot be asynchronous");Ie(y).forEach(C=>{Aw(this,C),this.instanceState[C]=y[C]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=u(f);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return Q8({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},d}catch(f){const d=Cf(f,`Failed to render ${e.tagName}`);return console.error(d),this._lastRenderError=d,t.errorHandler?.(d),It(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{F.hasKey(f,"destroy")&&F.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){Cw(this,f)}observablePropertyListenerMap={};instanceInputs=R0(this,!1);instanceState=R0(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:dD(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}var Ts;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Ts||(Ts={}));class nS extends fo{get settledValue(){if(this.isSettled())return this.value}get promiseValue(){return this.isError()?Promise.reject(this.value):this.isWaiting()?this.value:Promise.resolve(this.value)}get state(){return this.isResolved()?Ts.Resolved:this.isError()?Ts.Rejected:Ts.Waiting}isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function rS(e){return new nS(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j0=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},iS=Rr(class extends Lr{constructor(e){if(super(e),e.type!==Yd.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],o=[];let s=0;for(const a of e)i[s]=r?r(a,s):s,o[s]=n(a,s),s++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=B8(e),{values:o,keys:s}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??=[],u=[];let l,c,f=0,d=i.length-1,y=0,C=o.length-1;for(;f<=d&&y<=C;)if(i[f]===null)f++;else if(i[d]===null)d--;else if(a[f]===s[y])u[y]=vi(i[f],o[y]),f++,y++;else if(a[d]===s[C])u[C]=vi(i[d],o[C]),d--,C--;else if(a[f]===s[C])u[C]=vi(i[f],o[C]),bs(e,u[C+1],i[f]),f++,C--;else if(a[d]===s[y])u[y]=vi(i[d],o[y]),bs(e,i[f],i[d]),d--,y++;else if(l===void 0&&(l=j0(s,y,C),c=j0(a,f,d)),l.has(a[f]))if(l.has(a[d])){const D=c.get(s[y]),S=D!==void 0?i[D]:null;if(S===null){const A=bs(e,i[f]);vi(A,o[y]),u[y]=A}else u[y]=vi(S,o[y]),bs(e,i[f],S),i[D]=null;y++}else hc(i[d]),d--;else hc(i[f]),f++;for(;y<=C;){const D=bs(e,u[C+1]);vi(D,o[y]),u[y++]=D}for(;f<=d;){const D=i[f++];D!==null&&hc(D)}return this.ut=s,O8(e,u),mn}}),oS=iS;function Ca(e,t){return ea(e,t),e.element}function sS(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ea(e,t){const n=sS(e),r=n?`: in ${n}`:"";if(e.type!==Yd.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function aS(e,t){return Rr(class extends Lr{element;constructor(n){super(n),this.element=ei.instanceOf(Ca(n,e),HTMLElement)}render(...n){return t({params:n,directive:this,element:this.element}),mn}})}const Fr=aS("attributes",({element:e,params:[t],directive:n})=>{if(!t)return;const i=ua(n,"allAttributesApplied",()=>new Set);Ie(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===te?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function uS(e){const t=Rr(class extends Lr{element;constructor(n){super(n),this.element=Ca(n,e)}render(n){return this.element.setAttribute(e,n),mn}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function q(e,t){return lS(e,t)}const lS=Rr(class extends Lr{element;lastListenerMetaData;constructor(e){super(e),this.element=Ca(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),mn}});function cS(e){return q("keydown",async t=>{const n=t.code.toLowerCase();(n.includes("enter")||n.includes("return")||n==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const _0="onDomCreated",Ru=Rr(class extends Lr{element;constructor(e){super(e),ea(e,_0)}update(e,[t]){ea(e,_0);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),V0="onResize",Fw=Rr(class extends Lr{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&fS(this.element,this.callback,e)});callback;constructor(e){super(e),ea(e,V0)}update(e,[t]){ea(e,V0),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function fS(e,t,n){const r=n[0];if(!r)throw console.error(n),new Error("Resize observation triggered but the first entry was empty.");t({target:r.target,contentRect:r.contentRect},e)}function Jt(e,t,n){return j8(e,()=>t,()=>n)}const{attributeDirective:dS}=uS("data-test-id"),Sr=dS;function kw(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return(...r)=>i=>(t(i),xa(...r)(n(i)))}function mS(e,t){return hS(void 0,e)}const hS=Rr(class extends Lr{element;constructor(e){super(e),this.element=Ca(e,"assign")}render(e,t){return Cw(this.element,t),mn}}),pS={};function gS(e,t){return t.map((n,r)=>{const i=e[r],o=e[r+1];if(i&&o){const{shouldHaveTagNameHere:s}=Sw(i,o);if(s&&F.isString(n))return{tagName:n,tagInterpolationKey:ua(pS,n,()=>({tagName:n}))}}return n})}function Sw(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function yS(...[e,t,n]){const r=mf(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:o}=Sw(e,t),s=Jd(r);if(s&&o&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);return!o||!s?void 0:{replacement:r.tagName,getExtraValues(u){const l=mf(u)?u.inputs:void 0;return[i&&l?mS(l):void 0].filter(F.isTruthy)}}}function wS(e){}function bS(e){return xw(e.strings,e.values,yS,wS)}function g(e,...t){const n=gS(e,t),r=RD(e,...n),i=Ew(e,n,()=>bS(r));return{...r,strings:i.strings,values:i.values}}function hf(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if(!t?.length&&!n?.length)return"";const r=[...n||[],""],o=(t??[""]).map((s,a)=>{const u=$S(s,r[a]);return`${s}${u}`});return uy(o.join(""))}function $S(e,t){return t._$litType$!=null||t._$litDirective$!=null?hf(t):Array.isArray(t)?t.map(r=>hf(r)).join(""):e.endsWith("=")?`"${t}"`:t}function Nw(e){return dn(e,(t,n)=>n instanceof $e?Qe(n.toString({format:"hex"})):Nw(n))}const vS="dodgerblue";function pf(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function pc({background:e,foreground:t}){return{background:e??new $e(pf(t)),foreground:t??new $e(pf(e))}}var Lu;(function(e){e.Dark="dark",e.Light="light"})(Lu||(Lu={}));function DS(e){return e==="black"?"white":"black"}const ES={black:{foregroundFaint1:new $e("#ccc"),foregroundFaint2:new $e("#eee")},white:{foregroundFaint1:new $e("#ccc"),foregroundFaint2:new $e("#eee")}},xS={black:{backgroundFaint1:new $e("#666"),backgroundFaint2:new $e("#444")},white:{backgroundFaint1:new $e("#ccc"),backgroundFaint2:new $e("#fafafa")}};function q0({themeColor:e=vS,themeStyle:t=Lu.Light}={}){const n=new $e(e),r=new $e(t===Lu.Dark?"black":"white"),i=pf(r),o=new $e(i),s={nav:{hover:pc({background:n.clone().set({"hsl.l":93})}),active:pc({background:n.clone().set({"hsl.l":90})}),selected:pc({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...xS[DS(i)],foreground:o,...ES[i]}};return Nw(s)}var sr;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(sr||(sr={}));async function gf(e=1){const t=new pu;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function CS(e,t){return{element:e,children:Iw(e)}}function Iw(e,t,n){return AS(e).map(r=>{const i=Iw(r);return{element:r,children:i}})}function AS(e){return[...e.children,...e.shadowRoot?.children??[]]}function gc(e){return e.matches(":focus")}function Xd(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:Xd(t)}function Pw(e,t){if(t(e))return e;const n=Xd(e);if(n)return Pw(n,t)}async function FS(e){return kS(e,1)}async function kS(e,t){return new Promise(n=>{new IntersectionObserver((i,o)=>{In.isLengthAtLeast(i,1),o.disconnect(),n(i[0].intersectionRatio>=t)}).observe(e)})}function Si(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,o=r?.constructor.name,s=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return r}function SS(e){const t=Xd(e);return t&&Pw(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}function NS({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,a=0;s<r;s++){const u=o.codePointAt(s);for(;a<n;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const IS=Ii(32);function cu(e){return e.join(IS)}function Tw(e){if(!e.length)return[];const t=cu(e),n=Tw(e.slice(0,-1));return[t,...n]}const PS=["error","errors"];function TS(e){return PS.includes(e)}function MS({flattenedNodes:e,searchQuery:t}){const n={};function r(i){Object.values(i.children).map(s=>(r(s),cu(s.fullUrlBreadcrumbs))).forEach(s=>n[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&TS(t),s=cu(i.fullUrlBreadcrumbs);if(NS({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(u=>F.isString(u)?u:hf(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||n[s]){const u=Tw(i.fullUrlBreadcrumbs);r(i),u.forEach(l=>n[l]=!0)}else n[s]=!1}),e.filter(i=>{const o=cu(i.fullUrlBreadcrumbs),s=n[o];if(!F.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Qd extends Error{name="SpaRouterError"}class W0 extends Qd{name="GlobalUrlEventsConsolidationError"}class OS extends Qd{name="SanitizationDepthMaxed"}We({paths:[""],search:bt(Bt(void 0,Gd({keys:"",values:[""]}))),hash:bt(Bt(void 0,""))});const BS=We({basePath:bt("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:bt(1,{alsoUndefined:!0}),disableWarnings:bt(!1,{alsoUndefined:!0}),isPaused:bt(!1,{alsoUndefined:!0})}),yc="://";function em(...e){const t=e.join("/"),[n,r=""]=t.includes(yc)?t.split(yc):["",t];let i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(i)return s;const c=l[u+1];let f=a;const d=c?.startsWith("?"),y=!a.includes("?")&&d,C=c==="?";if(d||y){i=!0;let D=!1;const S=l.slice(u+2).reduce((A,N)=>(N.includes("#")&&(D=!0),D?A.concat(N):[A,N].join("&")),"");f=[a,c,C?wo({value:S,prefix:"&"}):S].join("")}return s.concat(f)},[]);return[n,n?yc:"",o.join("/")].join("")}var Uo;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Uo||(Uo={}));var jo;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(jo||(jo={}));const RS=We({encoding:bt(Bt(void 0,df(Uo))),searchParamStrategy:bt(Bt(void 0,df(jo)))});function Ja(e,t){return e.map(n=>{if(n!=null)return $o(String(n),t)}).filter(n=>n!=null)}function $o(e,t){return t?.encoding===Uo.Decode?decodeURIComponent(e):t?.encoding===Uo.Encode?encodeURIComponent(e):e}const LS=We(Gd({keys:"",values:[""]}));function US(e,t,n){const r=n?.searchParamStrategy===jo.Clear?{}:dn(e,(s,a)=>jv(a)),i=dn(t,(s,a)=>{if(n?.searchParamStrategy===jo.Append){const u=r[s],l=F.isArray(u)?u:[u];if(a){const c=F.isArray(a)?a:[a];return Ja([...l,...c],n)}else return Ja(l,n)}else return F.isArray(a)?Ja(a,n):a?Ja([a],n):void 0});return Lf({...r,...i},(s,a)=>!!a)}function Mw(e,t){return F.isString(e)&&!e.includes("?")?{}:(F.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...a]=sD(o,"=");return[s,a.length?a.join("="):void 0]}).reduce((o,[s,a])=>{const u=Ow({options:t,key:s,value:a}),l=ua(o,u.key,()=>[]);return a!=null&&l.push(u.value),o},{})}function jS(e){if(e!=null)return F.isArray(e)?[...e]:e===""?[]:[e]}function _S(e,t){const n=_i(Object.entries(e),([r,i])=>{const o=jS(i);return o?.length?o.map(s=>{const a=Ow({options:t,key:r,value:s});return[a.key,a.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?Ht({value:n.join("&"),prefix:"?"}):""}function Ow({options:e,key:t,value:n}){return{key:$o(t,e),value:$o(String(n),e)}}function Bw({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:o,search:s,username:a}){return[o?o+"://":"",a?a+":":"",n?n+"@":"",Fl({hostname:t,port:i}),tm({hash:e,pathname:r,search:s})].join("")}function Rw({pathname:e}){const t=wo({value:e,prefix:"/"});return t?t.split("/"):[]}function tm({hash:e,pathname:t,search:n}){return[Ht({value:t,prefix:"/"}),n?Ht({value:n,prefix:"?"}):"",e?Ht({value:e,prefix:"#"}):""].join("")}function Fl({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function Lw({hostname:e,port:t,protocol:n}){return[n,Fl({hostname:e,port:t})].filter(F.isTruthy).join("://")}function vo(e,t){const n=F.isString(e)?wo({value:e,prefix:"."}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?Ht({value:$o(r,t),prefix:"#"}):"",o=n.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),a=s?Ht({value:$o(s,t),prefix:"?"}):"",u=o.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=c.replace(/@.*/,""),d=c.replace(/^[^@]*@/,""),y=f!==d,[C,...D]=y?f.split(":").reverse():[],S=D.toReversed().join("").replace(/[/:]/g,"")||"",A=C?.replace(/[/:]/g,"")||"",N=oD(d.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),j=N[0]?.endsWith("]")?"":N[1]===":"&&N[0]||"",G=d.replace(new RegExp(`:${j}($|/)`),"$1").replace(/\/.*/,""),Le=d.replace(/^[^/]*(\/|$)/,"$1"),Ft=$o(Le.replace(/^[^/]*(?:\/|$)/,"/"),t),ot=Fl({hostname:G,port:j}),Mt=Lw({hostname:G,port:j,protocol:l}),vn=Bw({hash:i,hostname:G,password:A,pathname:Ft,port:j,protocol:l,search:a,username:S}),Rn=Mw(a),Xi=Rw({pathname:Ft});return{fullPath:tm({hash:i,pathname:Ft,search:a}),hash:i,host:ot,hostname:G,href:vn,origin:Mt,password:A,pathname:Ft,paths:Xi,port:j,protocol:l,search:a,searchParams:Rn,username:S}}We({hash:bt(Bt(void 0,"")),search:bt(Bt(void 0,"",Gd({keys:"",values:Bt(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:bt(Bt(void 0,"")),pathname:bt(Bt(void 0,"")),paths:bt(Bt(void 0,[""])),protocol:bt(Bt(void 0,"")),username:bt(Bt(void 0,"")),password:bt(Bt(void 0,"")),port:bt(Bt(void 0,"",-1))});function VS(e,t,n){const r=!!n,i=t==null||ki(t,RS,{allowExtraKeys:!1}),o=i?vo(""):F.instanceOf(e,URL)||F.isString(e)?vo(e):e,s=i?e:t,a=F.isString(s)&&s.startsWith("."),u=F.isString(s)||F.instanceOf(s,URL)?Lf(vo(s),(D,S)=>F.isTruthy(S)):s,l=r?n:i?t:void 0,c=dn(o,(D,S)=>{if(!F.hasKey(u,D))return S;const A=u[D];return F.isNumber(A)?String(A):F.isString(A)?D==="hash"&&A?Ht({value:A,prefix:"#"}):D==="pathname"?Ht({value:A,prefix:"/"}):A:S});F.hasKey(u,"paths")&&u.paths&&(c.pathname=em(a?o.pathname:"",...u.paths));const f=F.isString(u.search)?Mw(Ht({value:u.search,prefix:"?"})):Vv(u.search||{}),d=US(c.searchParams,f,{...l,encoding:Uo.None}),y=_S(d,l);return{...c,searchParams:d,search:y,paths:Rw(c),fullPath:tm(c),host:Fl(c),origin:Lw(c),href:Bw({...c,search:y})}}const qS=We({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:LS,hash:"",fullPath:"/",href:"/"});({...qS.default});const WS=0;function Uw(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==WS)}const kl="locationchange",xr=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const z0=xr?.pushState;function K0(...e){if(!z0)return;const t=z0.apply(xr,e);return globalThis.dispatchEvent(new Event(kl)),t}const Z0=xr?.replaceState;function G0(...e){if(!Z0)return;const t=Z0.apply(xr,e);return globalThis.dispatchEvent(new Event(kl)),t}function zS(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!xr)){{if(xr.pushState===K0)throw new W0("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(xr.replaceState===G0)throw new W0("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,xr.pushState=K0,xr.replaceState=G0,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(kl))})}}function Ha(e,t){const n=vo(e),r=wo({value:wo({value:n.pathname,prefix:Ht({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],o=Object.keys(n.searchParams).length?n.searchParams:void 0,s=n.hash?wo({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class nm{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){F8(t,BS),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new yw({defaultValue:n,equalityCheck:()=>!1}),zS(),this.removeGlobalListener=ly(globalThis,kl,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new OS("Looping route sanitization detected; aborting window URL change listener.");const r=Ha(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);F.jsonEquals(r,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:em(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Ha(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n={...Ha(globalThis.location.href,this.params.basePath),...t},r=this.sanitizeRoute(n),o=this.routeIncludesBasePath(Ha(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(r)&&this.params.basePath?{...r,paths:[this.params.basePath,...r.paths]}:r;return VS(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Ht({value:o.hash,prefix:"#"}):""},{searchParamStrategy:jo.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=vo(r);return this.params.isPaused||!n.force&&F.jsonEquals(vo(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return Uw(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new Qd(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function KS(e){return new nm({basePath:e,sanitizeRoute(t){return{paths:ZS(t.paths),hash:void 0,search:void 0}}})}function ZS(e){const t=e[0];if(F.isEnumValue(t,Zt)){if(t===Zt.Book)return[Zt.Book,...e.slice(1)];if(t===Zt.Search)return e[1]?[t,e[1]]:[Zt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Fo.paths}const Uu=Hd()("element-book-change-route"),Y0="vira-",Ke=kw({assertInputs:e=>{if(!e.tagName.startsWith(Y0))throw new Error(`Tag name should start with '${Y0}' but got '${e.tagName}'`)}});function GS(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given: ${hD(n)}`)}function YS(e,t=[],n=!1){return n?t.includes(e.id)?t.filter(r=>r!==e.id):[...t,e.id]:[e.id]}function J0({open:e,callback:t,popUpManager:n,host:r}){if(e){const i=n.showPopUp(r);t?.(i)}else n.removePopUp(),t?.(void 0)}const b=Mr({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"}),JS=$e;function HS(e){try{if(!e)throw new Error("invalid empty color");return new JS(e)}catch{throw new Error(`Invalid color: ${h(e)}`)}}function le({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function H0(e,t){const n=Ie(t).map(r=>{const i=t[r],o=HS(i);return`${b[r].name}: ${o.toString()};`}).join(" ");return le({name:e.name,svgTemplate:g`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const rm=le({name:"Check24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Nn=Mr({"vira-form-input-radius":"8px"}),as=x`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Nr=Mr({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),_o=Mr({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":x`calc(${Nn["vira-form-input-radius"].value} + 2px)`});function Aa({elementBorderSize:e,outlineGap:t=2,outlineWidth:n=2,noNesting:r}){const i=Qe(oy(n+t+e)),o=x`
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
    `;return r?o:x`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const J=Mr({"vira-form-border-color":"#cccccc","vira-form-placeholder-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-text-selection-color":"#cfe9ff","vira-form-selection-hover-background-color":"#e6f9fe","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#e6f9fe","vira-form-selection-active-foreground-color":"black","vira-form-error-foreground-color":"red","vira-form-success-foreground-color":"green","vira-form-label-font-weight":"bold"}),im=x`
    padding: 0;
    margin: 0;
`,Wn=x`
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
`,wc=Mr({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Do={menuShadow:x`
        filter: drop-shadow(0px 5px 5px ${wc["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:x`
        filter: drop-shadow(0px -5px 5px ${wc["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:x`
        box-shadow: 0 5px 15px ${wc["modal-shadow-color"].value};
    `},Vo=x`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,L=Ke()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>x`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),an=Ke()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>x`
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
    `,render({inputs:e}){return g`
            <div class="item">
                <${L.assign({icon:rm})}></${L}>
                <slot>${e.label}</slot>
            </div>
        `}});function XS(e,t){return e>t}function QS(e,t){return e<t}function ta(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var ar;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(ar||(ar={}));var de;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(de||(de={}));function Sl(e){const t={x:-1,y:-1};let n;for(;t.y<e.length-1&&!n;){t.y++;const r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;const i=r[t.x];if(i)if(i.navEntry.navParams.group){const o=Sl(i.children);o&&(n=o.node)}else i.navEntry.navParams.disabled||(n=i)}}if(n)return{node:n,coords:t}}function X0(e,t,n,r){if(!t){const u=Sl(e.children);return u?(ta(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:n,navAction:de.Navigate}):{success:!1,reason:"no default element to focus",direction:n,navAction:de.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=jw(t.position,n),a=r?!0:!o;return i&&a?(ta(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:n,navAction:de.Navigate,coords:s}):i?a?{success:!1,reason:"no conditions matched",direction:n,navAction:de.Navigate}:{success:!1,reason:"wrapping blocked",direction:n,navAction:de.Navigate}:{success:!1,reason:"failed to find node to focus",direction:n,navAction:de.Navigate}}function jw(e,t){let n=!1,r,i=1;const o=Date.now();for(;!n||!r;)if(r=eN(e,t,i),n=!r.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return nD.warning("Failed to find next non-disabled node."),r;return r}function eN(e,t,n){const r=e.ancestorChain[e.ancestorChain.length-1]?.node;In.isDefined(r,"missing parent");const i=ei.isDefined(r.children[e.nodeCoords.y]),o=r.children.length>1&&(t===ar.Down||t===ar.Up),s=t===ar.Down||t===ar.Right?n:-1*n,a=s<0?XS:QS,u=o?ch(e.nodeCoords.y+s,{min:0,max:r.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=ei.isDefined(r.children[u]),c=o?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:ch(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),f=r.children[u]?.[c],d=o?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:f,requiresWrapping:d,coords:{x:c,y:u}}}function tN(e,t,n){const r=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!r)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:de.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=jw(r,t),a=i?.navEntry.navParams.group?Sl(i.children):{node:i,coords:s},u=n?!0:!o;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:de.Pibling}:u?(ta(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:o,coords:a.coords,direction:t,navAction:de.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:de.Pibling}}var Rt;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Rt||(Rt={}));const Kn={name:"data-nav",js(e){return e?`[${Kn.name}*="${e}"]`:`[${Kn.name}]`},css({baseSelector:e="",navValue:t}={}){return x`
            ${Qe(e)}${Qe(Kn.js(t))}
        `}},om="navEntry";function _w(e){return om in e}function Vw(e){if(_w(e)){const t=e[om];return ei.instanceOf(t,qw,"Invalid nav entry")}else return}function nN(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Rt.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class qw{element;navParams;navTreeNode;navValue;eventListener=nN(this);constructor(t,n,r){this.element=t,this.navParams=r,this.attachListeners(),this.navController=n}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return In.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Kn.name,""),gc(this.element)&&this.element.blur())}focus(t,n){const r=this.navValue,i=t===(r===Rt.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Rt.Focused),gc(this.element)||this.element.focus()):(this.removeNavValue(Rt.Focused),gc(this.element)&&this.element.blur()),n||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,de.Focus)}activate(t){const n=this.navValue,r=t===(n===Rt.Active);if(!(this.navParams.group||this.navController.locked||r))return this.focus(t,!0),t?this.setNavValue(Rt.Active):this.setNavValue(Rt.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,de.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(Kn.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(Kn.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function Ww(e,t){Object.entries(t).forEach(([n,r])=>{F.isBoolean(r)&&r?e.setAttribute(n,""):F.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const rN=Rr(class extends Lr{element;lastKey;constructor(e){super(e),this.element=Ca(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),mn}});function iN(e){return"group"in e?Rt.Group:e.disabled?Rt.Disabled:""}function Q0(e,t={}){return rN(h(t),n=>{e.needsUpdate=!0;const r=!t.group&&!t.disabled;In.instanceOf(n,HTMLElement);const i={[Kn.name]:iN(t),tabindex:r?0:-1};Ww(n,i);const o=Vw(n)||new qw(n,e,t);_w(n)?(o.navParams=t,o.navController=e):n[om]=o,r?n.style.setProperty("cursor","pointer"):n.style.removeProperty("cursor")})}function oN(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:de.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:de.Enter};const n=t.position.node.children[0]?.[0];return n?(ta(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:de.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:de.Enter}}function sN(e,t){return zw([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function zw(e,t,n){for(let r=0;r<t.length;r++){const i=t[r];for(let o=0;o<i.length;o++){const s=i[o],a={ancestorChain:e,nodeCoords:{x:o,y:r},node:s};if(n(a))return a;const u=zw(e.concat(a),s.children,n);if(u)return u}}}function Kw(e,t){const n=sN(e,({node:r})=>!r.root&&r.navEntry===t);if(!n)throw new Error("Failed to find NavEntry in NavTree.");return n}function aN(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:de.Exit};const n=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:de.Exit};const{nodeCoords:r}=Kw(e,n.navEntry);return ta(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:de.Exit,coords:r}}class uN extends tr()("nav-exit"){}class Zw extends tr()("nav-activate"){}class lN extends tr()("nav-focus"){}class cN extends tr()("nav-enter"){}class fN extends tr()("nav-navigate"){}class dN extends tr()("nav-navigate-pibling"){}function mN(e){return{root:!0,children:Gw(e)?.children||[]}}function Gw(e){const t=e.element;if(!(t instanceof HTMLElement))return;const n=Vw(t),r=hN(e);if((n?.navParams.group?!!r.length:!1)||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function hN(e){const t=[];function n(r){if(r.navEntry?.navParams.group&&!r.children.length)return;if(!r.navEntry){r.children.forEach(a=>a.forEach(u=>n(u)));return}const i=r.navEntry.navParams.x,o=r.navEntry.navParams.y||0,s=ua(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(r):s.withX.push({x:i,node:r})}return e.children.forEach(r=>{const i=Gw(r);i&&n(i)}),t.sort((r,i)=>r.y-i.y).map(r=>(r.withX.sort((i,o)=>i.x-o.x),r.withX.forEach(({x:i,node:o})=>{r.noX.splice(i,0,o)}),r.noX)).filter(F.isTruthy)}class Yw extends jf{rootElement;options;constructor(t,n={}){super(),this.rootElement=t,this.options=n}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Sl(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,n,r){if(this.locked)return{success:!1,direction:void 0,navAction:r,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:r,reason:"No nav entry to operate on."};const i=Kw(this.getNavTree(),t);n?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:r,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===r&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:r,coords:i.nodeCoords};return n&&(r===de.Activate?this.dispatch(new Zw({detail:o})):r===de.Focus&&this.dispatch(new lN({detail:o}))),o}navigate({direction:t,allowWrapping:n}){if(this.locked)return{success:!1,direction:t,navAction:de.Navigate,reason:"NavController is locked."};const r=X0(this.getNavTree(),this.currentNavEntry,t,n);return this.dispatch(new fN({detail:r})),r}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:de.Enter,reason:"NavController is locked."};const n=oN(this.getNavTree(),this.currentNavEntry);return!n.success&&t?this.activate():(this.dispatch(new cN({detail:n})),n)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:de.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:de.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return In.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:de.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===de.Activate&&this.currentNavEntry.entry.focus(!0);const t=aN(this.getNavTree(),this.currentNavEntry);return this.dispatch(new uN({detail:t})),t}navigatePibling({allowWrapping:t,direction:n}){if(this.locked)return{success:!1,direction:n,navAction:de.Pibling,reason:"NavController is locked."};const r=this.getNavTree(),o={...this.currentNavEntry?tN(this.currentNavEntry,n,t):X0(r,void 0,n,t),navAction:de.Pibling};return this.dispatch(new dN({detail:o})),o}buildNavTree(){const t=CS(this.rootElement),n=mN(t);return this.cachedNavTree=n,n}}const ho=Ke()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>x`
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
    `,render({inputs:e}){function t(n){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,n)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(e.link?.newTab)return g`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${Fr(e.attributePassthrough?.a)}
                    style=${Je(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return g`
                <a
                    href=${n}
                    rel="noopener noreferrer"
                    ${Fr(e.attributePassthrough?.a)}
                    style=${Je(e.stylePassthrough?.a)}
                    ${q("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),ep={item:"menu-item"},Ms=Ke()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new Yw(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>x`
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
            ${Wn};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${Kn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Rt.Focused})}, ${Kn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Rt.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${J["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${Kn.css({baseSelector:".menu-item:not(.disabled)",navValue:Rt.Focused})},
                ${Kn.css({baseSelector:".menu-item:not(.disabled)",navValue:Rt.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${J["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${an} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${as};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){GS(e.items);const n=e.items.map(r=>{const i=!!e.selected?.includes(r.id),o=F.isString(r.label)?g`
                      <${an.assign({label:r.label,selected:i,hideCheckIcon:e.hideCheckIcons})}></${an}>
                  `:r.label,s=r.disabled||!e.isMultiSelect&&i;return r.route?g`
                    <${ho.assign({route:r.route})}
                        class="menu-item ${en({disabled:!!r.disabled,selected:i})}"
                        ${Sr(ep.item)}
                        title=${Je(r.titleText||void 0)}
                        role="option"
                        ${Q0(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </${ho}>
                `:g`
                    <button
                        class="menu-item ${en({disabled:!!r.disabled,selected:i})}"
                        ${Sr(ep.item)}
                        title=${Je(r.titleText||void 0)}
                        role="option"
                        ${Q0(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </button>
                `});return g`
            ${n}
        `}});var sm=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(sm||{}),ju=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(ju||{});const Os=Ke()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>x`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${Nn["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${J["vira-form-background-color"].value};
            border: 1px solid ${J["vira-form-border-color"].value};
            color: ${J["vira-form-foreground-color"].value};
            ${Do.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${Do.menuShadowReversed}
            border-radius: ${Nn["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${Nn["vira-form-input-radius"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),Xa=globalThis.document;class pN extends yw{constructor(){if(super({defaultValue:!!Xa?.hidden,equalityCheck:F.strictEquals}),!Xa)return;globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n,Xa));const t=n=>this.updateVisibility(n,Xa);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,n){const r=yN.includes(t.type),i=gN.includes(t.type),o=r?!0:i?!1:n.hasFocus()||!n.hidden;this.setValue(o)}}const gN=["blur","focusout","pagehide"],yN=["focus","focusin","pageshow"],wN=new pN;function bN(e,t){return wN.listen(e,t)}const tp={top:0,left:0,right:0,bottom:0};class Jw extends Uf("hide-pop-up"){}class Hw extends tr()("nav-select"){}class $N{constructor(t,n){this.navController=t,this.options={...this.options,...n}}listenTarget=new jf;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(t){let n=!1;const r=new ResizeObserver(()=>{n?this.removePopUp():n=!0});r.observe(t),this.cleanupCallbacks=[()=>{r.disconnect()},bN(!1,i=>{i||this.removePopUp()}),this.navController.listen(Zw,i=>{i.detail.success&&(this.listenTarget.dispatch(new Hw({detail:i.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),i.stopImmediatePropagation(),i.preventDefault())}),_c("mousedown",i=>{this.lastRootElement&&i.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),_c("keydown",i=>{const o=i.code;o==="Escape"?this.removePopUp():this.options.supportNavigation&&(o==="ArrowDown"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:ar.Down,allowWrapping:!1})):o==="ArrowUp"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:ar.Up,allowWrapping:!1})):o==="ArrowLeft"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:ar.Left,allowWrapping:!1})):o==="ArrowRight"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:ar.Right,allowWrapping:!1})):(o==="Enter"||o==="Return"||o==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(i.stopImmediatePropagation(),i.preventDefault()))})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Jw)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=SS(t);In.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=dn(tp,y=>o[y]),f=dn(tp,y=>{const C=l[y],D=c[y];return Math.abs(C-D)}),d=f.top>f.bottom+r.verticalDiffThreshold&&f.bottom<r.minDownSpace;return this.attachGlobalListeners(i),{popDown:!d,positions:{container:l,root:c,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Xr=(e=>(e.Left="left",e.Right="right",e.Both="both",e))(Xr||{});const me=Ke()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new $N(new Yw(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>x`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Wn};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${Aa({elementBorderSize:1})}
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
    `,events:{navSelect:lt(),openChange:lt(),init:lt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:o}){e.popUpManager.listen(Jw,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!r.isDisabled){const s=n.shadowRoot.querySelector(".dropdown-wrapper");In.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(Hw,s=>{r.keepOpenAfterInteraction||J0({open:!1,callback(a){t({showPopUpResult:a})},host:n,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:o,slotNames:s}){function a({emitEvent:y,open:C},D){if(n.showPopUpResult&&r.keepOpenAfterInteraction&&D){const S=o.shadowRoot.querySelector(".dropdown-trigger");if(S&&!D.composedPath().includes(S))return}J0({open:C,callback(S){i({showPopUpResult:S}),y&&e(new t.openChange(S))},host:o,popUpManager:n.popUpManager})}r.isDisabled?a({open:!1,emitEvent:!1},void 0):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?a({emitEvent:!1,open:!1},void 0):r.z_debug_forceOpenState&&!n.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=r.horizontalAnchor==="right"&&n.showPopUpResult?x`
                      left: -${n.showPopUpResult.positions.diff.left}px;
                  `:x`
                      left: ${r.popUpOffset?.left||0}px;
                  `,l=n.showPopUpResult&&r.horizontalAnchor==="left"?x`
                      right: -${n.showPopUpResult.positions.diff.right}px;
                  `:x`
                      right: ${r.popUpOffset?.right||0}px;
                  `,c=x`
            ${u}
            ${l}
        `,f=n.showPopUpResult?n.showPopUpResult.popDown?x`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                      top: calc(100% + ${r.popUpOffset?.vertical||0}px);
                      ${c}
                  `:x`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                      bottom: calc(100% + ${r.popUpOffset?.vertical||0}px);
                      ${c}
                  `:void 0;function d(y){a({emitEvent:!0,open:!n.showPopUpResult},y)}return g`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${en({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
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
                    class="pop-up-positioner ${en({"right-aligned":r.horizontalAnchor==="right"})}"
                    style=${f}
                >
                    ${Jt(!!n.showPopUpResult,g`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),vN={menu:"menu-trigger-menu"},Yr=Ke()({tagName:"vira-menu-trigger",styles:x`
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
    `,events:{itemActivate:lt(),openChange:lt()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:n,dispatch:r,events:i}){return g`
            <${me.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||Xr.Left})}
                class=${en({open:!!t.showPopUpResult})}
                ${q(me.events.init,o=>{n({navController:o.detail.navController,popUpManager:o.detail.popUpManager})})}
                ${q(me.events.openChange,o=>{!!t.showPopUpResult!=!!o.detail&&r(new i.openChange(o.detail)),n({showPopUpResult:o.detail})})}
                ${q(me.events.navSelect,o=>{const s=o.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);r(new i.itemActivate(YS(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${me.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?g`
                          <${Os.assign({direction:t.showPopUpResult.popDown?ju.Downwards:ju.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${me.slotNames.popUp}
                              class=${en({"full-width-menu":e.horizontalAnchor===Xr.Both})}
                          >
                              <${Ms.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Sr(vN.menu)}
                              ></${Ms}>
                          </${Os}>
                      `:te}
            </${me}>
        `}}),Oe=Ke()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>x`
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
        `}});var _u=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(_u||{});const we=Ke()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>x`
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
            ${Wn};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Nn["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Nr["vira-interaction-animation-duration"].value},
                background-color
                    ${Nr["vira-interaction-animation-duration"].value},
                border-color ${Nr["vira-interaction-animation-duration"].value};

            ${Aa({elementBorderSize:2})}
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
    `,render:({inputs:e})=>{const t=e.icon?g`
                  <${L.assign({icon:e.icon})}></${L}>
              `:te,n=e.text?g`
                  <span class="text-template">${e.text}</span>
              `:g`
                  <span class="empty-text">&nbsp;</span>
              `;return g`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}});var yf=(e=>(e.Error="error",e.Success="success",e))(yf||{});const bc=Ke()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":"1px solid #d3d3d3","vira-card-border-radius":"16px","vira-card-padding":"16px"},styles:({hostClasses:e,cssVars:t})=>x`
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
    `,render(){return g`
            <slot></slot>
        `}}),DN=le({name:"Bell24Icon",svgTemplate:g`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),EN=le({name:"Chat24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),am=le({name:"ChevronUp24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${b["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Xw=le({name:"CloseX24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),xN=le({name:"Commit24Icon",svgTemplate:g`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),CN=le({name:"Document24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Qw=le({name:"Element16Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Sn=le({name:"Element24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),AN=le({name:"ExternalLink24Icon",svgTemplate:g`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),eb=le({name:"EyeClosed24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${b["vira-icon-fill-color"].value}
            stroke=${b["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),tb=le({name:"EyeOpen24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${b["vira-icon-fill-color"].value}
            stroke=${b["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),FN=le({name:"Link24Icon",svgTemplate:g`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />

            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),nb=le({name:"Loader24Icon",svgTemplate:g`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),kN=x`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Nr["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Ui=le({name:"LoaderAnimated24Icon",svgTemplate:g`
        <style>
            ${kN}
        </style>
        ${nb.svgTemplate}
    `}),SN=le({name:"Lock24Icon",svgTemplate:g`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width="calc(${b["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Bs=le({name:"Options24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),NN=le({name:"Pencil24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),IN=le({name:"Shield24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),PN=le({name:"SpeakerLoud24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),TN=le({name:"SpeakerMedium24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),MN=le({name:"SpeakerMuted24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),ON=le({name:"SpeakerQuiet24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),BN=le({name:"Star24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Vu=le({name:"StatusFailure24Icon",svgTemplate:g`
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
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),RN=le({name:"StatusInProgress24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width="calc(${b["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width="calc(${b["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width="calc(${b["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),LN=le({name:"StatusSuccess24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),UN=le({name:"StatusUnknown24Icon",svgTemplate:g`
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
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width="calc(${b["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),jN=le({name:"StatusWarning24Icon",svgTemplate:g`
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
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${b["vira-icon-stroke-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width="calc(${b["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),_N=le({name:"Upload24Icon",svgTemplate:g`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),rb=le({name:"X24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${b["vira-icon-fill-color"].value}
            stroke=${b["vira-icon-stroke-color"].value}
            stroke-width=${b["vira-icon-stroke-width"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
        >
            <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    `}),wf={Bell24Icon:DN,Chat24Icon:EN,Check24Icon:rm,ChevronUp24Icon:am,CloseX24Icon:Xw,Commit24Icon:xN,Document24Icon:CN,Element16Icon:Qw,Element24Icon:Sn,ExternalLink24Icon:AN,EyeClosed24Icon:eb,EyeOpen24Icon:tb,Link24Icon:FN,Loader24Icon:nb,LoaderAnimated24Icon:Ui,Lock24Icon:SN,Options24Icon:Bs,Pencil24Icon:NN,Shield24Icon:IN,SpeakerLoud24Icon:PN,SpeakerMedium24Icon:TN,SpeakerMuted24Icon:MN,SpeakerQuiet24Icon:ON,Star24Icon:BN,StatusFailure24Icon:Vu,StatusInProgress24Icon:RN,StatusSuccess24Icon:LN,StatusUnknown24Icon:UN,StatusWarning24Icon:jN,Upload24Icon:_N,X24Icon:rb},ye=Ke()({tagName:"vira-checkbox",styles:x`
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
        }

        ${L} {
            ${b["vira-icon-stroke-width"].name}: 2px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${J["vira-form-border-color"].value};
            color: ${J["vira-form-foreground-color"].value};
            border-radius: ${Nn["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${Aa({elementBorderSize:1})}

            &.checked {
                & ${L} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${J["vira-form-error-foreground-color"].value};
            }

            &:hover {
                background-color: ${J["vira-form-selection-hover-background-color"].value};
            }

            &:active {
                background-color: ${J["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${as};
            }
        }
    `,events:{valueChange:lt()},render({inputs:e,dispatch:t,events:n}){function r(){e.disabled||t(new n.valueChange(!e.value))}const i=e.label?g`
                  <span
                      class="label-text"
                      ${Fr(e.attributePassthrough?.text)}
                      style=${Je(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:te;return g`
            <label
                class=${en({disabled:!!e.disabled})}
                ${Fr(e.attributePassthrough?.label)}
                style=${Je(e.stylePassthrough?.label)}
                ${q("mousedown",r)}
            >
                ${i}
                <span
                    class="custom-checkbox ${en({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${Fr(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Je(e.stylePassthrough?.["custom-checkbox"])}
                    ${cS(r)}
                >
                    <${L.assign({icon:rm,fitContainer:!0})}
                        ${Fr(e.attributePassthrough?.[L.tagName])}
                        style=${Je(e.stylePassthrough?.[L.tagName])}
                    ></${L}>
                </span>
            </label>
        `}}),hr=Ke()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>x`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Wn};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Nr["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:lt()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:o}){const s=o.expanded?x`
                  height: ${e.contentHeight}px;
              `:x`
                  height: 0;
              `;return g`
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
        `}}),$c={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},As=Ke()({tagName:"vira-dropdown",styles:x`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${Yr} {
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
                ${Nr["vira-interaction-animation-duration"].value} linear;
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
            border-radius: ${Nn["vira-form-input-radius"].value};
            background-color: ${J["vira-form-background-color"].value};
            color: ${J["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:lt(),openChange:lt()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:n,events:r,updateState:i}){const o=_i(t.selected,c=>t.options.find(f=>f.id===c),F.isTruthy),s=t.icon?g`
                  <${L.assign({icon:t.icon})}
                      ${Sr($c.icon)}
                  ></${L}>
              `:te,a=!o.length,u=t.selectionPrefix&&!a?g`
                      <span class="selected-label-prefix" ${Sr($c.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:te,l=a?t.placeholder||"":t.isMultiSelect&&o.length>1?`${o.length} Selected`:o[0]?.label||"";return g`
            <${Yr.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||Xr.Both})}
                ${q(Yr.events.openChange,c=>{i({showPopUpResult:c.detail}),n(new r.openChange(c.detail))})}
                ${q(Yr.events.itemActivate,c=>{n(new r.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${en({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Sr($c.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${en({"using-placeholder":a})}"
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
            </${Yr}>
        `}}),Ti=Ke()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>x`
        :host {
            color: ${J["vira-form-error-foreground-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}});function bf({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(n=>bf({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function VN({value:e,allowed:t,blocked:n}){const r=t?bf({input:e,matcher:t}):!0,i=n?bf({input:e,matcher:n}):!1;return r&&!i}function $f(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(VN({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function qN({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){const o=Si(n,HTMLInputElement),s=F.hasKey(n,"data")&&Mv.isString(n.data)||"";if(s){const{blocked:u}=$f({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&r(u)}const a=$f({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==a&&(o.value=a),t!==a&&i(a)}var Eo=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(Eo||{});const at=Ke()({tagName:"vira-input",cssVars:{"vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>x`
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
                ${Wn};
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
                ${Wn};
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
                border-radius: ${Nn["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${J["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Wn};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Nn["vira-form-input-radius"].value};
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
                ${Wn};
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
                    ${Aa({elementBorderSize:0,noNesting:!0})}
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
                ${Wn};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Nr["vira-interaction-animation-duration"].value};
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
        `,events:{valueChange:lt(),inputBlocked:lt()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Ii(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i,host:o})=>{const{filtered:s}=$f({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?g`
                  <${L.assign({icon:e.icon})} class="left-side-icon"></${L}>
              `:te,u=e.fitText?x`
                  width: ${n.forcedInputWidth}px;
              `:te,l=q("mousedown",d=>{const y=Si(d,HTMLElement,{useOriginalTarget:!0}),C=ei.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);y!==C&&(d.preventDefault(),C.focus())}),c=e.disableBrowserHelps||e.type==="password",f=g`
            <span class="input-wrapper" ${e.label?te:l}>
                ${a}
                ${Jt(!!e.fitText,g`
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
                    type=${WN(e.type,n.showPassword)}
                    style=${u}
                    autocomplete=${Je(c?"off":void 0)}
                    autocorrect=${Je(c?"off":void 0)}
                    autocapitalize=${Je(c?"off":void 0)}
                    spellcheck=${Je(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${q("input",d=>{qN({inputs:e,previousValue:s,event:d,inputBlockedCallback(y){t(new i.inputBlocked(y))},newValueCallback(y){t(new i.valueChange(y))}})})}
                    placeholder=${Je(e.placeholder||void 0)}
                    ${Fr(e.attributePassthrough)}
                />

                ${Jt(!!(e.showClearButton&&e.value),g`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${q("mousedown",d=>{d.stopImmediatePropagation(),d.preventDefault()})}
                            ${q("click",()=>{t(new i.valueChange(""))})}
                        >
                            <${L.assign({icon:Xw})}></${L}>
                        </button>
                    `)}
                ${Jt(e.type==="password",g`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${q("mousedown",d=>{d.stopImmediatePropagation(),d.preventDefault()})}
                            ${q("click",()=>{r({showPassword:!n.showPassword})})}
                        >
                            <${L.assign({icon:n.showPassword?tb:eb})}></${L}>
                        </button>
                    `)}
                ${Jt(!!e.suffix,g`
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
                <label for=${n.randomId} ${l}>
                    <span class="input-label">${e.label}</span>
                    ${f}
                </label>
            `:f}});function WN(e,t){return e==="password"&&t?"text":e||"text"}const Ve=Ke()({tagName:"vira-select",state(){return{randomId:Ii(32)}},events:{valueChange:lt()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>x`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${J["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Wn};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${Nn["vira-form-input-radius"].value};
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
                    ${Aa({elementBorderSize:0,noNesting:!0})}
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
                border-radius: ${Nn["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${J["vira-form-border-color"].value};
                transition: border
                    ${Nr["vira-interaction-animation-duration"].value};
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
    `,render({inputs:e,state:t,dispatch:n,events:r}){const i=e.value||void 0,o=e.placeholder||i==null?g`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:te,s=g`
            <span class="select-wrapper">
                <select
                    .value=${Je(i)}
                    class=${en({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Je(e.label?t.randomId:void 0)}
                    aria-label=${Je(e.label||void 0)}
                    aria-disabled=${Je(e.disabled?"true":void 0)}
                    ${q("input",a=>{const u=Si(a,HTMLSelectElement),l=u.value;u.value!==i&&(u.selectedIndex=e.options.findIndex(c=>c.value===i)),n(new r.valueChange(l))})}
                    ${Fr(e.attributePassthrough?.select)}
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

                <${L.assign({icon:e.icon})} class="input-icon"></${L}>
                <${L.assign({icon:am})} class="trigger-icon"></${L}>
            </span>
        `;return e.label?g`
                <label for=${t.randomId} ${Fr(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}});var yr=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.Email="email",e.Select="select",e.Checkbox="checkbox",e))(yr||{});const Di=Ke()({tagName:"vira-form",events:{valueChange:lt()},styles:x`
        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    `,render({inputs:e,dispatch:t,events:n}){const r=Ju(e.fields).map(([i,o])=>o.type==="checkbox"?g`
                        <${ye.assign({value:o.value,disabled:o.disabled,hasError:o.hasError,label:o.label})}
                            ${o.testId?Sr(o.testId):te}
                            ${q(ye.events.valueChange,s=>{t(new n.valueChange({key:i,...o,value:s.detail}))})}
                        ></${ye}>
                    `:o.type==="select"?g`
                        <${Ve.assign({options:o.options,value:o.value,placeholder:o.placeholder,disabled:o.disabled,label:o.label,hasError:o.hasError,icon:o.icon})}
                            ${o.testId?Sr(o.testId):te}
                            ${q(Ve.events.valueChange,s=>{t(new n.valueChange({key:i,...o,value:s.detail}))})}
                        ></${Ve}>
                    `:g`
                        <${at.assign({value:o.value,disabled:o.disabled,hasError:o.hasError,icon:o.icon,label:o.label,placeholder:o.placeholder,showClearButton:e.showClearButtons,attributePassthrough:o.isUsername?{autocomplete:"username"}:o.type==="new-password"?{autocomplete:"new-password"}:o.type==="existing-password"?{autocomplete:"password"}:o.type==="email"?{autocomplete:"email"}:{},type:["new-password","existing-password"].includes(o.type)?Eo.Password:o.type==="email"?Eo.Email:Eo.Default})}
                            ${o.testId?Sr(o.testId):te}
                            ${q(at.events.valueChange,s=>{t(new n.valueChange({key:i,...o,value:s.detail}))})}
                        ></${at}>
                    `);return g`
            <form ${q("submit",i=>i.preventDefault())}>
                ${r}
                <slot></slot>
            </form>
        `}}),Vr=Ke()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:lt(),imageError:lt()},styles:({hostClasses:e})=>x`
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
    `,render({inputs:e,state:t,updateState:n,dispatch:r,events:i,slotNames:o}){const s=e.imageUrl,a=t.erroredUrls[s]?g`
                  <slot class="status-wrapper" name=${o.error}>
                      <${L.assign({icon:Vu})} class="error"></${L}>
                  </slot>
              `:t.loadedUrls[s]?void 0:g`
                    <slot class="status-wrapper" name=${o.loading}>
                        <${L.assign({icon:Ui})}></${L}>
                    </slot>
                `;return g`
            ${Jt(!!a,a)}
            <img
                class=${en({hidden:!!a})}
                ${q("load",async()=>{e._debugLoadDelay&&await Mi(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[s]:!0}}),r(new i.imageLoad)})}
                ${q("error",async u=>{e._debugLoadDelay&&await Mi(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[s]:!0}}),r(new i.imageError(u.error))})}
                src=${s}
            />
        `}}),zN=["pagehide","pageshow","popstate"],pr=Ke()({tagName:"vira-modal",events:{modalClose:lt()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-modal-backdrop-filter":"blur(3px)","vira-modal-subtitle-color":"#7E7E7E","vira-modal-close-button-hover-radius":"8px","vira-modal-close-button-hover-background-color":"#E4E4E4"},styles:({hostClasses:e,cssVars:t})=>x`
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
            ${Do.modal}

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
                        ${Wn};
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
    `,render({inputs:e,state:t,updateState:n,events:r,dispatch:i,slotNames:o}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),n({previousOpenValue:e.open}),e.open)){const a=zN.map(u=>_c(u,()=>{i(new r.modalClose)}));n({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),i(new r.modalClose))}return g`
            <dialog
                ${Ru(a=>{n({dialogElement:ei.instanceOf(a,HTMLDialogElement)})})}
                ${q("close",()=>{s()})}
                ${q("click",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Ru(a=>{n({contentElement:ei.instanceOf(a,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${o.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?g`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:te}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${q("click",()=>{t.dialogElement?.close()})}
                        >
                            <${L.assign({icon:rb})}></${L}>
                        </button>
                    </div>
                    ${e.open?g`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:te}
                </div>
            </dialog>
        `}}),Ot=Ke()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>x`
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
    `,render({inputs:e,host:t}){const n=e.min||0,i=(e.max||100)-n,o=e.value-n,s=rD(Math.round(o/i*100),{min:0,max:100});return Ww(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),g`
            <div
                class="progress-bar"
                style=${s?x`
                          width: ${s}%;
                      `:x`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function ib(e){return rS({async updateCallback(t,n){if(n&&t in n.cache)return{cache:n.cache,element:n.cache[t],key:t};const r=await e[t]();return{cache:{...n?.cache,[t]:r},element:r,key:t}}})}function ob(e,{ready:t,loading:n,error:r,key:i}){return i&&e.update(i),e.value instanceof Error?r(e.value):e.value instanceof Promise?n(e.value.then(o=>({[o.key]:o.element}))):t({[e.value.key]:e.value.element})}const Bn=kw(),An=Bn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>x`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const n=e.router?.createRouteUrl({...e.route})??"#";return g`
            <a
                href=${n}
                ${q("click",r=>{(!e.router||Uw(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new Uu(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function KN(e,t){return e.entry.entryType===$t.Root?!1:e.entry.entryType===$t.Page||F.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:F.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const $r=Bn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>x`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${fe["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${fe["element-book-nav-hover-background-color"].value};
            color: ${fe["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${fe["element-book-nav-active-background-color"].value};
            color: ${fe["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${An.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${fe["element-book-nav-selected-background-color"].value};
            color: ${fe["element-book-nav-selected-foreground-color"].value};
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
            color: ${fe["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!KN(n,e.selectedPath))return;const r=x`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return g`
                <li style=${r}>
                    <${An.assign({router:e.router,route:{paths:[Zt.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${en({"title-row":!0,selected:e.selectedPath?F.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Jt(bo(n,$t.ElementExample),g`
                                    <${L.assign({icon:Qw})}></${L}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${An}>
                </li>
            `});return g`
            <${An.assign({route:Fo,router:e.router})}>
                <slot name=${sr.NavHeader}>Book</slot>
            </${An}>
            <ul>
                ${t}
            </ul>
        `}});async function ZN(e){await gf(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await FS(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const oi=Bn()({tagName:"book-error",styles:x`
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
    `,render({inputs:e}){return(F.isArray(e.message)?e.message:[e.message]).map(n=>g`
                <p>${n}</p>
            `)}}),na=Bn()({tagName:"book-page-controls",events:{controlValueChange:lt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>x`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${fe["element-book-page-foreground-faint-level-1-color"].value};
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
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],o)=>{if(i.controlType===H.Hidden)return"";const s=GN(e.currentValues[r],i,a=>{const u=F.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[r]:a}}))});return g`
                    <div class="control-wrapper">
                        ${Jt(o===0,g`
                                <${L.assign({icon:Bs})}
                                    class="options-icon"
                                ></${L}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function GN(e,t,n){return ro(t,H.Hidden)?"":ro(t,H.Checkbox)?g`
            <input
                type="checkbox"
                ?checked=${e}
                ${q("input",r=>{const i=Si(r,HTMLInputElement);n(i.checked)})}
            />
        `:ro(t,H.Color)?g`
            <input
                type="color"
                .value=${e}
                ${q("input",r=>{const i=Si(r,HTMLInputElement);n(i.value)})}
            />
        `:ro(t,H.Text)?g`
            <${at.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${q(at.events.valueChange,r=>{n(r.detail)})}
            ></${at}>
        `:ro(t,H.Number)?g`
            <input
                type="number"
                .value=${e}
                ${q("input",r=>{const i=Si(r,HTMLInputElement);n(i.value)})}
            />
        `:ro(t,H.Dropdown)?g`
            <select
                .value=${e}
                ${q("input",r=>{const i=Si(r,HTMLSelectElement);n(i.value)})}
            >
                ${t.options.map(r=>g`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:g`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const np=Bn()({tagName:"book-breadcrumbs",styles:x`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,i)=>{const o=r>=i.length-1,s=i.slice(0,r+1),a=o?"":g`
                      <span class="spacer">&gt;</span>
                  `;return g`
                <${An.assign({route:{hash:void 0,search:void 0,paths:[Zt.Book,...s]},router:e.router})}>
                    ${n}
                </${An}>
                ${a}
            `}):g`
                &nbsp;
            `}}),vc=Bn()({tagName:"book-breadcrumbs-bar",styles:x`
        :host {
            border-bottom: 1px solid
                ${fe["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${fe["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return g`
            ${Jt(!!e.currentSearch,g`
                    &nbsp;
                `,g`
                    <${np.assign({currentRoute:e.currentRoute,router:e.router})}></${np}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${q("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=r.value;await Mi({milliseconds:200}),r.value===i&&(r.value?t(new Uu({paths:[Zt.Search,encodeURIComponent(r.value)]})):t(new Uu(Fo)))})}
            />
        `}}),rp=Bn()({tagName:"book-entry-description",styles:x`
        :host {
            color: ${fe["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${fe["element-book-page-foreground-color"].value};
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
            `)}}),ip=Bn()({tagName:"book-page-wrapper",styles:x`
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

        ${An} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?g`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:g`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[Zt.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?ry(e.pageNode.entry.errors):void 0;return r&&console.error(r),g`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${An.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${An}>
                    ${r?g`
                              <${oi.assign({message:r.message})}></${oi}>
                          `:g`
                              <${rp.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${rp}>
                              <${na.assign({config:e.pageNode.entry.controls,currentValues:qf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${na}>
                          `}
                </div>
            </div>
        `}}),Qa=Bn()({tagName:"book-element-example-controls",styles:x`
        :host {
            display: flex;
            color: ${fe["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[Zt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return g`
            <${An.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${An}>
        `}}),op=Symbol("unset-internal-state"),sp=Bn()({tagName:"book-element-example-viewer",state(){return{isUnset:op}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw ry(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===op&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return g`
                ${Jt(!!t.elementExampleNode.entry.styles,g`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",It(r)),console.error(r),g`
                <${oi.assign({message:`${t.elementExampleNode.entry.title} failed: ${It(r)}`})}></${oi}>
            `}},options:{allowPolymorphicState:!0}}),ap=Bn()({tagName:"book-element-example-wrapper",styles:x`
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

        ${Qa} {
            color: ${fe["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Qa} {
            color: ${fe["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return g`
            <div class="individual-example-wrapper">
                <${Qa.assign(aD(e,["currentPageControls"]))}></${Qa}>
                <${sp.assign(e)}></${sp}>
            </div>
        `}});function sb(e,t,n,r){const i=Vc(n,r),o=[];if(i){const s=sb(e,t,i,r);s&&o.push(s)}if(bo(n,$t.Page)&&!e.includes(n)){const s=qf(t,n.fullUrlBreadcrumbs);o.push({config:n.entry.controls,current:s,breadcrumbs:dn(s,()=>n.fullUrlBreadcrumbs)})}return o.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function YN({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:i,originalTree:o}){if(!e.length&&r)return[g`
                No results
            `];const s=F.isLengthAtLeast(e,1)?sb(e,i,e[0],o):void 0,a=s&&Object.values(s.config).length&&F.isLengthAtLeast(e,1)?g`
                  <${na.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${na}>
              `:te,u=oS(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(bo(l,$t.Page))return g`
                    <${ip.assign({isTopLevel:t,pageNode:l,controls:i,router:n})}
                        class="block-entry"
                    ></${ip}>
                `;if(bo(l,$t.ElementExample)){const c=qf(i,l.fullUrlBreadcrumbs.slice(0,-1));return g`
                    <${ap.assign({elementExampleNode:l,currentPageControls:c,router:n})}
                        class="inline-entry ${en({"block-entry":l.entry.isVertical})}"
                    ></${ap}>
                `}else return bo(l,$t.Root)?te:g`
                    <${oi.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${oi}>
                `});return[a,u]}const uo=Bn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:x`
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
                ${Nr["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:lt()},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{const o=qc(e.currentRoute.paths),s=YN({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return g`
            <${vc.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${vc}>

            ${Jt(e.showLoading,g`
                    <div
                        ${Ru(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${L.assign({icon:Ui})}></${L}>
                    </div>
                    ${Jt(!!r.lastElement,g`
                            ${r.lastElement}
                            <slot name=${sr.Footer}></slot>
                        `)}
                `,g`
                    <div
                        ${Ru(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${sr.Footer}></slot>
                `)}
        `}});function JN(e,t,n){const r=up(e,t);return r.length?r:(n(Fo),up(e,Fo.paths))}function up(e,t){return e.filter(n=>yD({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const Dc=xa()({tagName:"element-book-app",state(){return{currentRoute:Fo,router:void 0,loading:!0,colors:{config:void 0,theme:q0(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:lt()},styles:x`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${fe["element-book-page-background-color"].value};
            color: ${fe["element-book-page-foreground-color"].value};
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

        ${uo} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${$r} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await lp(e,qc(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:o})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const f=s(c);return!F.jsonEquals(e.currentRoute,f)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(F.isTruthy).join(" - "))}function l(c){if(!a(c))return;const f=s(c);e.router?e.router.setRoute(f):r({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(f.paths))}try{if(t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const A=KS(t.internalRouterConfig.basePath);r({router:A}),A.listen(!0,N=>{r({currentRoute:N})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!F.jsonEquals(c,e.colors.config)){const A=q0(c);r({colors:{config:c,theme:A}}),JD(n,A)}const f=t._debug??!1,d=DD({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:my(d.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const y=qc(e.currentRoute.paths),D=(y?MS({flattenedNodes:d.flattenedNodes,searchQuery:y}):void 0)??JN(d.flattenedNodes,e.currentRoute.paths,l);u(D[0]?.entry.title);const S=e.treeBasedControls?.controls;return S?(t._debug&&console.info({currentControls:S}),g`
                <div
                    class="root"
                    ${q(Uu,async A=>{const N=A.detail;if(!a(N))return;if(r({loading:!0}),l(N),!(n.shadowRoot.querySelector($r.tagName)instanceof $r))throw new TypeError(`Failed to find child '${$r.tagName}'`);await lp(n,y,e.currentRoute)})}
                    ${q(na.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const N=xD(S,A.detail.fullUrlBreadcrumbs,A.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:N}})})}
                >
                    <${$r.assign({flattenedNodes:d.flattenedNodes,router:e.router,selectedPath:y?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${sr.NavHeader}
                            slot=${sr.NavHeader}
                        ></slot>
                    </${$r}>
                    <${uo.assign({controls:S,currentNodes:D,currentRoute:e.currentRoute,debug:f,originalTree:d.tree,router:e.router,showLoading:e.loading})}
                        ${q(uo.events.loadingRender,async A=>{await gf();const N=n.shadowRoot.querySelector(uo.tagName);N?N.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${uo.tagName}' for scrolling.`),await gf(),r({loading:!A.detail})})}
                    >
                        <slot
                            name=${sr.Footer}
                            slot=${sr.Footer}
                        ></slot>
                    </${uo}>
                </div>
            `):g`
                    <${oi.assign({message:"Failed to generate page controls."})}></${oi}>
                `}catch(c){return console.error(c),g`
                <p class="error">${It(c)}</p>
            `}}});async function lp(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector($r.tagName);if(!(r instanceof $r))throw new TypeError(`Failed to find child '${$r.tagName}'`);await ZN(r)}const Ze=Ee({title:"Elements",parent:void 0}),ab=Ee({title:"Styles",parent:void 0}),ub=Ee({title:"Util",parent:void 0}),HN=Ee({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:H.Color,initValue:""},"Fill Color":{controlType:H.Color,initValue:""},"Stroke Width":{controlType:H.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(wf).forEach(t=>{e({title:t.name,styles:x`
                    :host(:hover) ${L} {
                        background-color: #f2f2f2;
                    }

                    ${L} {
                        padding: 8px;
                        border-radius: ${Nn["vira-form-input-radius"].value};
                    }
                `,render({controls:n}){const r=x`
                        ${b["vira-icon-fill-color"].name}: ${Qe(n["Fill Color"]||"inherit")};
                        ${b["vira-icon-stroke-color"].name}: ${Qe(n["Stroke Color"]||"inherit")};
                        ${b["vira-icon-stroke-width"].name}: ${Qe(n["Stroke Width"]?oy(n["Stroke Width"]):"inherit")};
                    `;return g`
                        <${L.assign({icon:t})} style=${r}></${L}>
                    `}})})}}),lb={async element1(){return await Mi({seconds:2}),(await vu(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-SydSui08.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await Mi({seconds:2}),(await vu(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-uTS2mwBr.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},cp=xa()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:ib(lb)}},render({state:e,inputs:t}){return ob(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(n){return g`
                    <${Ti}>
                        ${qo("Failed to import element",It(n))}
                    </${Ti}>
                `},loading(){return g`
                    <${L.assign({icon:Ui})}></${L}>
                `},ready(n){if(n.element1)return g`
                        <${n.element1}></${n.element1}>
                    `;if(n.element2)return g`
                        <${n.element2.assign({userName:"John"})}></${n.element2}>
                    `;In.never("The error element will always error")}})}}),fp=xa()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:ib(lb)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),ob(e.dynamicElements,{error(n){return g`
                    <${Ti}>
                        ${qo("Failed to import element",It(n))}
                    </${Ti}>
                `},loading(){return g`
                    <${L.assign({icon:Ui})}></${L}>
                `},ready(n){if(n.element1)return g`
                        <${n.element1}></${n.element1}>
                    `;if(n.element2)return g`
                        <${n.element2.assign({userName:"John"})}></${n.element2}>
                    `;In.never("The error element will always error")}})}}),dp=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],XN=Ee({parent:ub,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:x`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:n}){return g`
                    <${Ve.assign({value:String(t.value),options:dp})}
                        ${q(Ve.events.valueChange,r=>{const i=Number(r.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);n({value:i})})}
                    ></${Ve}>
                    <${cp.assign({numberValue:t.value})}></${cp}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:x`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:n}){return g`
                    <${Ve.assign({value:String(t.value),options:dp})}
                        ${q(Ve.events.valueChange,r=>{const i=Number(r.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);n({value:i})})}
                    ></${Ve}>
                    <${fp.assign({numberValue:t.value})}></${fp}>
                `}})}}),QN=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:g`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:x`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:x`
            ${an} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],eI=Ee({title:an.tagName,parent:Ze,controls:{Selected:{controlType:H.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:H.Text,initValue:""}},defineExamples({defineExample:e}){QN.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:n}){const r={label:n.Label||t.inputs.label,selected:n.Selected?n.Selected==="all":t.inputs.selected};return t.customTemplate?g`
                            <${an.assign(r)}>
                                ${t.customTemplate}
                            </${an}>
                        `:g`
                            <${an.assign(r)}></${an}>
                        `}})})}}),vf=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new nm({sanitizeRoute(e){return e}})}}],tI=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:sm.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...vf,{id:"long",label:g`
                        <${an.assign({selected:!1})}>
                            <div
                                style=${x`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${an}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:Xr.Both,items:[...vf,{id:"long",label:g`
                        <${an.assign({selected:!1})}>
                            <div
                                style=${x`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${an}>
                    `}]}}],nI=Ee({parent:Ze,title:Yr.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){tI.forEach(t=>{e({title:t.title,styles:x`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${Yr.assign({items:vf,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${Yr}>
                    `}})})}}),cb=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],rI=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...cb,{id:4,label:"link here",route:{route:{paths:["test"]},router:new nm({sanitizeRoute(e){return e}})}}]}}],iI=Ee({parent:Ze,title:Ms.tagName,defineExamples({defineExample:e}){rI.forEach(t=>{e({title:t.title,render(){return g`
                        <${Ms.assign({isMultiSelect:!1,navController:void 0,items:cb,selected:[],...t.inputs})}></${Ms}>
                    `}})})}}),fb=[];qn(ju).forEach(e=>{qn(sm).forEach(t=>{fb.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const oI=Ee({parent:Ze,title:Os.tagName,defineExamples({defineExample:e}){fb.forEach(t=>{e({title:t.title,styles:x`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${Os.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${Os}>
                    `}})})}}),sI=Ee({parent:Ze,title:me.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:x`
                ${me} {
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
            `,render(){return g`
                    <${me.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${me.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>Pop up!</div>
                    </${me}>
                `}}),e({title:"long clipped content",styles:x`
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
                    <${me.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${me.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${me}>
                `}}),e({title:"long right anchored content",styles:x`
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
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Xr.Right})}>
                        <div slot=${me.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${me}>
                `}}),e({title:"long left anchored content",styles:x`
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
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Xr.Left})}>
                        <div slot=${me.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${me}>
                `}}),e({title:"short right anchored content",styles:x`
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
                    <${me.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Xr.Right})}>
                        <div slot=${me.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${me.slotNames.popUp}>not long</div>
                    </${me}>
                `}})}}),aI=[{title:"menu shadow",styles:Do.menuShadow},{title:"menu shadow reversed",styles:Do.menuShadowReversed},{title:"modal",styles:Do.modal}],uI=Ee({parent:ab,title:"Shadows",defineExamples({defineExample:e}){aI.forEach(t=>{e({title:t.title,styles:x`
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
                    `}})})}}),lI=Ee({parent:Ze,title:Oe.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:H.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return g`
                    <${Oe.assign({text:"Text here",bold:!1})}></${Oe}>
                `}}),e({title:"Bold",render(){return g`
                    <${Oe.assign({text:"Text here",bold:!0})}></${Oe}>
                `}}),e({title:"Dynamic",render({controls:t}){return g`
                    <${Oe.assign({text:"Text here",bold:t.bolded})}></${Oe}>
                `}}),e({title:"Resized",styles:x`
                ${Oe} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return g`
                    <${Oe.assign({text:"Not Bolded",bold:!1})}></${Oe}>
                    <${Oe.assign({text:"Bolded",bold:!0})}></${Oe}>
                `}}),e({title:"Alignment",styles:x`
                ${Oe} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return g`
                    <${Oe.assign({text:"Not Bolded",bold:!1})}></${Oe}>
                    <${Oe.assign({text:"Bolded",bold:!0})}></${Oe}>
                `}}),e({title:"Stylized",styles:x`
                ${Oe} {
                    text-decoration: underline;
                }
            `,render(){return g`
                    <${Oe.assign({text:"Not Bolded",bold:!1})}></${Oe}>
                    <${Oe.assign({text:"Bolded",bold:!0})}></${Oe}>
                `}})}}),cI=Ee({parent:Ze,title:we.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:H.Color,initValue:we.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:H.Color,initValue:we.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:H.Color,initValue:we.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:H.Color,initValue:we.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:n,styles:r,inputs:i}){const o=r??x``;e({title:n,styles:o,render({controls:s}){const a=x`
                        ${we.cssVars["vira-button-primary-color"].name}: ${Qe(s["Primary color"]||"inherit")};
                        ${we.cssVars["vira-button-secondary-color"].name}: ${Qe(s["Secondary color"]||"inherit")};
                        ${we.cssVars["vira-button-primary-hover-color"].name}: ${Qe(s["Hover color"]||"inherit")};
                        ${we.cssVars["vira-button-primary-active-color"].name}: ${Qe(s["Active color"]||"inherit")};
                    `;return g`
                        <${we.assign({text:"hello",...i})}
                            style=${a}
                        ></${we}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Bs}}),t({title:"with expanding icon",inputs:{icon:Bs,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:_u.Outline}}),t({title:"only icon",inputs:{icon:Bs,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:x`
                ${we} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:x`
                ${we} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:x`
                :host {
                    ${we.cssVars["vira-button-primary-color"].name}: pink;
                    ${we.cssVars["vira-button-secondary-color"].name}: purple;
                    ${we.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${we.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return g`
                    <${we.assign({text:"hello"})}></${we}>
                `}})}}),fI=[{title:"basic"},{title:"success",inputs:{cardState:yf.Success}},{title:"error",inputs:{cardState:yf.Error}},{title:"long",content:g`
            <p
                style=${x`
                    ${im}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],dI=Ee({parent:Ze,title:bc.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){fI.forEach(t=>{e({title:t.title,render(){return g`
                        <${bc.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${bc}>
                    `}})})}}),mI=Ee({parent:Ze,title:ye.tagName,controls:{Checked:{controlType:H.Checkbox,initValue:!1},Disabled:{controlType:H.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:n}){return g`
                    <${ye.assign({value:t.checked})}
                        ${q(ye.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${ye}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:n}){return g`
                    <${ye.assign({value:t.checked})}
                        ${q(ye.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${ye}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:n}){return g`
                    <${ye.assign({value:t.checked,hasError:!0})}
                        ${q(ye.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${ye}>
                `}}),e({title:"disabled unchecked",render(){return g`
                    <${ye.assign({value:!1,disabled:!0})}></${ye}>
                `}}),e({title:"disabled checked",render(){return g`
                    <${ye.assign({value:!0,disabled:!0})}></${ye}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return g`
                    <${ye.assign({value:t.Checked,disabled:t.Disabled})}></${ye}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return g`
                    <${ye.assign({value:!0})}></${ye}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:n}){return g`
                    <${ye.assign({value:t.checked,label:"label goes here"})}
                        ${q(ye.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${ye}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:x`
                ${ye} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:n}){return g`
                    <${ye.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${q(ye.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${ye}>
                `}})}}),hI=Ee({title:hr.tagName,parent:Ze,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:x`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>g`
                        <${hr.assign({expanded:!!n.expandedStates[i]})}
                            ${q(hr.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${hr.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${q("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${Jt(!!n.showMoreStates[i],g`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${hr}>
                    `)}}),e({title:"wider examples",styles:x`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>g`
                        <${hr.assign({expanded:!!n.expandedStates[i]})}
                            ${q(hr.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${hr.slotNames.header}
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
                            ${Jt(!!n.showMoreStates[i],g`
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
                        </${hr}>
                    `)}})}}),Rs=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],pI=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Rs,{id:42,label:g`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Rs,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:x`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:x`
            ${As} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Sn}}],gI=Ee({title:As.tagName,parent:Ze,controls:{Selected:{controlType:H.Dropdown,initValue:"",options:["",...Rs.map(e=>e.label)]},Prefix:{controlType:H.Text,initValue:""},"Force State":{controlType:H.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:H.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:H.Dropdown,initValue:"",options:["",...Object.keys(wf)]},Disabled:{controlType:H.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:H.Text,initValue:"Select something"}},defineExamples({defineExample:e}){pI.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:n,updateState:r,controls:i}){const o={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||Rs,selected:i.Selected?[Rs.find(s=>s.label===i.Selected)?.id].filter(F.isTruthy):n.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?wf[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return g`
                        <${As.assign(o)}
                            ${q(As.events.selectedChange,s=>{r({selected:s.detail})})}
                        ></${As}>
                    `}})})}}),yI=Ee({parent:Ze,title:Ti.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${Ti}>Error Content</${Ti}>
                `}})}}),wI=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],bI=Ee({parent:Ze,title:Di.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:x`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:n}){const r={firstName:{type:yr.Text,label:"First Name",value:t.firstName},lastName:{type:yr.Text,label:"Last Name",value:t.lastName},subscribe:{type:yr.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:yr.Email,label:"Email Address",value:t.email},password:{type:yr.NewPassword,label:"Password",value:t.password},userRole:{type:yr.Select,label:"Role",options:wI,value:t.userRole}};return g`
                    <${Di.assign({fields:r})}
                        ${q(Di.events.valueChange,i=>{n({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${we.assign({text:"Cancel",buttonStyle:_u.Outline})}></${we}>
                            <${we.assign({text:"Submit"})}></${we}>
                        </div>
                    </${Di}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:x`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:n}){const r={firstName:{type:yr.Text,label:"First Name",value:t.firstName},lastName:{type:yr.Text,label:"Last Name",value:t.lastName}};return g`
                    <${Di.assign({fields:r})}
                        ${q(Di.events.valueChange,i=>{n({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <${at.assign({value:"",label:"More stuff"})}></${at}>
                        <div class="buttons">
                            <${we.assign({text:"Cancel",buttonStyle:_u.Outline})}></${we}>
                            <${we.assign({text:"Submit"})}></${we}>
                        </div>
                    </${Di}>
                `}})}}),$I=Ee({title:L.tagName,parent:Ze,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${L.assign({icon:Sn})}></${L}>
                `}}),e({title:"using createColoredIcon",render(){return g`
                    <${L.assign({icon:H0(Sn,{"vira-icon-stroke-color":"red"})})}></${L}>
                `}}),e({title:"fit container",styles:x`
                ${L} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return g`
                    <${L.assign({icon:H0(Sn,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${L}>
                `}})}}),vI=Ee({title:Vr.tagName,parent:Ze,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:x`
                    border-radius: 32px;
                `,loadingSlot:g`
                    <div
                        style=${x`
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
                            style=${x`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${L}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:x`
                    border-radius: 32px;
                `,errorSlot:g`
                    <div
                        style=${x`
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
                            style=${x`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${L}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:x`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:x`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:x`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:g`
                    <div
                        style=${x`
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
                            style=${x`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${L}>
                    </div>
                `,errorSlot:g`
                    <div
                        style=${x`
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
                            style=${x`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${L}>
                    </div>
                `}].forEach(n=>{e({title:n.title,styles:x`
                    ${Vr} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${n.styles||x``}
                    }

                    ${n.allowReload?x`
                              ${Vr} {
                                  cursor: pointer;
                              }

                              ${Vr}:hover {
                                  border-color: #0055ff;
                              }
                          `:x``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:n.inputs.imageUrl}},render({state:r,updateState:i}){return g`
                        <${Vr.assign({...n.inputs,imageUrl:r.imageUrl})}
                            ${q("click",()=>{n.allowReload&&i({imageUrl:`${n.inputs.imageUrl}?di=${Ii()}`})})}
                        >
                            ${n.loadingSlot?g`
                                      <div class="slot-wrapper" slot=${Vr.slotNames.loading}>
                                          ${n.loadingSlot}
                                      </div>
                                  `:te}${n.errorSlot?g`
                                      <div class="slot-wrapper" slot=${Vr.slotNames.error}>
                                          ${n.errorSlot}
                                      </div>
                                  `:te}
                        </${Vr}>
                    `}})})}}),DI=Ee({title:at.tagName,parent:Ze,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:H.Color,initValue:J["vira-form-foreground-color"].default},"Placeholder color":{controlType:H.Color,initValue:J["vira-form-placeholder-color"].default},"Border color":{controlType:H.Color,initValue:J["vira-form-border-color"].default},"Focus color":{controlType:H.Color,initValue:_o["vira-focus-outline-color"].default},"Selection color":{controlType:H.Color,initValue:J["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:r,title:i,inputs:o}){e({title:i,styles:x`
                    ${r||x``}
                `,state(){return{value:o.value}},render({state:s,updateState:a,controls:u}){const l={[String(J["vira-form-foreground-color"].name)]:u["Text color"],[String(J["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(J["vira-form-border-color"].name)]:u["Border color"],[String(_o["vira-focus-outline-color"].name)]:u["Focus color"],[String(J["vira-form-text-selection-color"].name)]:u["Selection color"]},c=dn(l,(d,y)=>y||"inherit"),f=Object.entries(c).map(([d,y])=>[d,y].join(": ")+";").join(`
`);return g`
                        <${at.assign({...o,value:s.value})}
                            style=${f}
                            ${q(at.events.valueChange,d=>{a({value:d.detail}),console.info("changed:",d.detail)})}
                        ></${at}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Sn}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:x`
                    ${at} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Sn}},{title:"taller height",styles:x`
                    ${at} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Sn}},{title:"shorter height",styles:x`
                    ${at} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Sn}},{title:"max width",styles:x`
                    ${at} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:x`
                    ${at} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Eo.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Eo.Email,attributePassthrough:{autocomplete:"username"}}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:x`
                    ${at} {
                        width: unset;
                    }
                `}].forEach(t)}}),EI=Ee({title:ho.tagName,parent:Ze,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:H.Color,initValue:""},"Hover color":{controlType:H.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:n,inputs:r}){e({title:n,render({controls:i}){const o=x`
                        ${ho.cssVars["vira-link-hover-color"].name}: ${Qe(i["Hover color"]||"inherit")};
                        color: ${Qe(i["CSS Color"]||"inherit")};
                    `;return g`
                        <${ho.assign(r)} style=${o}>My Link</${ho}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(n,r){return console.info(n,r),!1}}}}})}}),xI=Ee({title:pr.tagName,parent:Ze,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:n}){return g`
                    <button
                        ${q("click",()=>{n({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${pr.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${q(pr.events.modalClose,()=>{n({modalOpen:!1})})}
                    >
                        Modal Content
                    </${pr}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:x`
                ${pr} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${pr.cssVars["vira-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:n}){return g`
                    <button
                        ${q("click",()=>{n({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${pr.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${q(pr.events.modalClose,()=>{n({modalOpen:!1})})}
                    >
                        Modal Content
                    </${pr}>
                `}})}}),CI=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:x`
            :host {
                ${Ot.cssVars["vira-progress-background-color"].name}: red;
                ${Ot.cssVars["vira-progress-foreground-color"].name}: black;
                ${Ot.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Ot} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:x`
            :host {
                ${Ot.cssVars["vira-progress-background-color"].name}: red;
                ${Ot.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Ot.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Ot} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:x`
            :host {
                ${Ot.cssVars["vira-progress-background-color"].name}: red;
                ${Ot.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Ot.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Ot} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],AI=Ee({parent:Ze,title:Ot.tagName,defineExamples({defineExample:e}){CI.forEach(t=>{e({title:t.title,styles:x`
                    ${t.styles||x``}
                `,render(){return g`
                        <${Ot.assign({value:50,...t.inputs})}></${Ot}>
                    `}})})}}),mt=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],FI=[{title:"basic",inputs:{options:mt}},{title:"with really long option",inputs:{options:[...mt,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:mt,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:mt,disabled:!0}},{title:"error",inputs:{options:mt,hasError:!0}},{title:"with icon",inputs:{options:mt,icon:Sn}},{title:"custom width",inputs:{options:mt},styles:x`
            ${Ve} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:mt,icon:Sn},styles:x`
            ${Ve} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:mt,icon:Sn},styles:x`
            ${Ve} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:mt,label:"Pick an option"}},{title:"with long label",inputs:{options:mt,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:mt,label:"Pick a really really really really long option"},styles:x`
            ${Ve} {
                width: unset;
            }
        `}],kI=Ee({parent:Ze,title:Ve.tagName,defineExamples({defineExample:e}){FI.forEach(t=>{e({title:t.title,styles:x`
                    ${t.styles||x``}
                `,state(){return{selected:void 0}},render({state:n,updateState:r}){return g`
                        <${Ve.assign({...t.inputs,value:n.selected??t.inputs.value})}
                            ${q(Ve.events.valueChange,i=>{r({selected:i.detail})})}
                        ></${Ve}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return g`
                    <${Ve.assign({options:mt,value:mt[0]?.value})}></${Ve}>
                `}}),e({title:"force update",render(){return g`
                    <${mp}></${mp}>
                `}})}}),mp=Ke()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const n=mt.findIndex(i=>i.value===t.value),r=ei.isDefined(mt[(n+1)%mt.length]).value;e({value:r}),console.info(`Forcing select to ${r}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return g`
            <${Ve.assign({options:mt,value:e.value})}></${Ve}>
        `}}),SI=[Ze,HN,ab,ub],NI=[lI,cI,dI,mI,hI,gI,yI,bI,$I,vI,DI,EI,eI,iI,nI,xI,oI,sI,AI,kI,XN,uI].sort((e,t)=>e.title.localeCompare(t.title)),II=[...SI,...NI];xa()({tagName:"vira-book-app",styles:x`
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
    `,render(){return g`
            <${Dc.assign({internalRouterConfig:{basePath:em("vira"),useInternalRouter:!0},pages:II,themeColor:"#33ccff"})}>
                <h1 slot=${sr.NavHeader}>Vira</h1>
            </${Dc}>
        `}});export{xa as d,g as h};
