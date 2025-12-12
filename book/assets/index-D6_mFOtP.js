(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Dt;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(Dt||(Dt={}));function y0(e,t=n=>n){const n=new Map;return e.filter(r=>{const i=t(r);return n.get(i)?!1:(n.set(i,r),!0)})}class xd{diff(t,n,r={}){let i;typeof r=="function"?(i=r,r={}):"callback"in r&&(i=r.callback);const o=this.castInput(t,r),s=this.castInput(n,r),a=this.removeEmpty(this.tokenize(o,r)),u=this.removeEmpty(this.tokenize(s,r));return this.diffWithOptionsObj(a,u,r,i)}diffWithOptionsObj(t,n,r,i){var o;const s=N=>{if(N=this.postProcess(N,r),i){setTimeout(function(){i(N)},0);return}else return N},a=n.length,u=t.length;let l=1,c=a+u;r.maxEditLength!=null&&(c=Math.min(c,r.maxEditLength));const d=(o=r.timeout)!==null&&o!==void 0?o:1/0,f=Date.now()+d,y=[{oldPos:-1,lastComponent:void 0}];let C=this.extractCommon(y[0],n,t,0,r);if(y[0].oldPos+1>=u&&C+1>=a)return s(this.buildValues(y[0].lastComponent,n,t));let D=-1/0,S=1/0;const A=()=>{for(let N=Math.max(D,-l);N<=Math.min(S,l);N+=2){let U;const W=y[N-1],G=y[N+1];W&&(y[N-1]=void 0);let Ue=!1;if(G){const at=G.oldPos-N;Ue=G&&0<=at&&at<a}const St=W&&W.oldPos+1<u;if(!Ue&&!St){y[N]=void 0;continue}if(!St||Ue&&W.oldPos<G.oldPos?U=this.addToPath(G,!0,!1,0,r):U=this.addToPath(W,!1,!0,1,r),C=this.extractCommon(U,n,t,N,r),U.oldPos+1>=u&&C+1>=a)return s(this.buildValues(U.lastComponent,n,t))||!0;y[N]=U,U.oldPos+1>=u&&(S=Math.min(S,N-1)),C+1>=a&&(D=Math.max(D,N+1))}l++};if(i)(function N(){setTimeout(function(){if(l>c||Date.now()>f)return i(void 0);A()||N()},0)})();else for(;l<=c&&Date.now()<=f;){const N=A();if(N)return N}}addToPath(t,n,r,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===n&&s.removed===r?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:n,removed:r,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:n,removed:r,previousComponent:s}}}extractCommon(t,n,r,i,o){const s=n.length,a=r.length;let u=t.oldPos,l=u-i,c=0;for(;l+1<s&&u+1<a&&this.equals(r[u+1],n[l+1],o);)l++,u++,c++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!o.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,n,r){return r.comparator?r.comparator(t,n):t===n||!!r.ignoreCase&&t.toLowerCase()===n.toLowerCase()}removeEmpty(t){const n=[];for(let r=0;r<t.length;r++)t[r]&&n.push(t[r]);return n}castInput(t,n){return t}tokenize(t,n){return Array.from(t)}join(t){return t.join("")}postProcess(t,n){return t}get useLongestToken(){return!1}buildValues(t,n,r){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let a=0,u=0,l=0;for(;a<s;a++){const c=i[a];if(c.removed)c.value=this.join(r.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let d=n.slice(u,u+c.count);d=d.map(function(f,y){const C=r[l+y];return C.length>f.length?C:f}),c.value=this.join(d)}else c.value=this.join(n.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return i}}function hm(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function pm(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function Cc(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function Ac(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function cs(e,t){return Cc(e,t,"")}function Ta(e,t){return Ac(e,t,"")}function gm(e,t){return t.slice(0,wb(e,t))}function wb(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);const i=Array(r);let o=0;i[0]=0;for(let s=1;s<r;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=n;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function ds(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function _r(e){const t=e.match(/^\s*/);return t?t[0]:""}const fu="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",bb=new RegExp(`[${fu}]+|\\s+|[^${fu}]`,"ug");class $b extends xd{equals(t,n,r){return r.ignoreCase&&(t=t.toLowerCase(),n=n.toLowerCase()),t.trim()===n.trim()}tokenize(t,n={}){let r;if(n.intlSegmenter){const s=n.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Array.from(s.segment(t),a=>a.segment)}else r=t.match(bb)||[];const i=[];let o=null;return r.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((n,r)=>r==0?n:n.replace(/^\s+/,"")).join("")}postProcess(t,n){if(!t||n.oneChangePerToken)return t;let r=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&ym(r,o,i,s),r=s,i=null,o=null)}),(i||o)&&ym(r,o,i,null),t}}const vb=new $b;function Db(e,t,n){return n?.ignoreWhitespace!=null&&!n.ignoreWhitespace?Cb(e,t,n):vb.diff(e,t,n)}function ym(e,t,n,r){if(t&&n){const i=_r(t.value),o=ds(t.value),s=_r(n.value),a=ds(n.value);if(e){const u=hm(i,s);e.value=Ac(e.value,s,u),t.value=cs(t.value,u),n.value=cs(n.value,u)}if(r){const u=pm(o,a);r.value=Cc(r.value,a,u),t.value=Ta(t.value,u),n.value=Ta(n.value,u)}}else if(n){if(e){const i=_r(n.value);n.value=n.value.substring(i.length)}if(r){const i=_r(r.value);r.value=r.value.substring(i.length)}}else if(e&&r){const i=_r(r.value),o=_r(t.value),s=ds(t.value),a=hm(i,o);t.value=cs(t.value,a);const u=pm(cs(i,a),s);t.value=Ta(t.value,u),r.value=Cc(r.value,i,u),e.value=Ac(e.value,i,i.slice(0,i.length-u.length))}else if(r){const i=_r(r.value),o=ds(t.value),s=gm(o,i);t.value=Ta(t.value,s)}else if(e){const i=ds(e.value),o=_r(t.value),s=gm(i,o);t.value=cs(t.value,s)}}class Eb extends xd{tokenize(t){const n=new RegExp(`(\\r?\\n)|[${fu}]+|[^\\S\\n\\r]+|[^${fu}]`,"ug");return t.match(n)||[]}}const xb=new Eb;function Cb(e,t,n){return xb.diff(e,t,n)}class Ab extends xd{constructor(){super(...arguments),this.tokenize=Sb}equals(t,n,r){return r.ignoreWhitespace?((!r.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!r.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):r.ignoreNewlineAtEof&&!r.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(t,n,r)}}const kb=new Ab;function Fb(e,t,n){return kb.diff(e,t,n)}function Sb(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let i=0;i<r.length;i++){const o=r[i];i%2&&!t.newlineIsToken?n[n.length-1]+=o:n.push(o)}return n}function wm(e){return w0(e,new Map)}function w0(e,t){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((r,i)=>r[0].localeCompare(i[0])).forEach(([r,i])=>{const o=w0(i,t);n[r]=o}),n}else return e}var Nb=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,Ib=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,Pb=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Pl={Space_Separator:Nb,ID_Start:Ib,ID_Continue:Pb},_e={isSpaceSeparator(e){return typeof e=="string"&&Pl.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Pl.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Pl.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let kc,jt,Dr,mu,ei,Yn,mt,Cd,Fs;var Tb=function(t,n){kc=String(t),jt="start",Dr=[],mu=0,ei=1,Yn=0,mt=void 0,Cd=void 0,Fs=void 0;do mt=Mb(),Rb[jt]();while(mt.type!=="eof");return typeof n=="function"?Fc({"":Fs},"",n):Fs};function Fc(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let i=0;i<r.length;i++){const o=String(i),s=Fc(r,o,n);s===void 0?delete r[o]:Object.defineProperty(r,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in r){const o=Fc(r,i,n);o===void 0?delete r[i]:Object.defineProperty(r,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let Q,Y,vs,wr,se;function Mb(){for(Q="default",Y="",vs=!1,wr=1;;){se=Sr();const e=b0[Q]();if(e)return e}}function Sr(){if(kc[mu])return String.fromCodePoint(kc.codePointAt(mu))}function F(){const e=Sr();return e===`
`?(ei++,Yn=0):e?Yn+=e.length:Yn++,e&&(mu+=e.length),e}const b0={default(){switch(se){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":F();return;case"/":F(),Q="comment";return;case void 0:return F(),Ce("eof")}if(_e.isSpaceSeparator(se)){F();return}return b0[jt]()},comment(){switch(se){case"*":F(),Q="multiLineComment";return;case"/":F(),Q="singleLineComment";return}throw Ae(F())},multiLineComment(){switch(se){case"*":F(),Q="multiLineCommentAsterisk";return;case void 0:throw Ae(F())}F()},multiLineCommentAsterisk(){switch(se){case"*":F();return;case"/":F(),Q="default";return;case void 0:throw Ae(F())}F(),Q="multiLineComment"},singleLineComment(){switch(se){case`
`:case"\r":case"\u2028":case"\u2029":F(),Q="default";return;case void 0:return F(),Ce("eof")}F()},value(){switch(se){case"{":case"[":return Ce("punctuator",F());case"n":return F(),yi("ull"),Ce("null",null);case"t":return F(),yi("rue"),Ce("boolean",!0);case"f":return F(),yi("alse"),Ce("boolean",!1);case"-":case"+":F()==="-"&&(wr=-1),Q="sign";return;case".":Y=F(),Q="decimalPointLeading";return;case"0":Y=F(),Q="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Y=F(),Q="decimalInteger";return;case"I":return F(),yi("nfinity"),Ce("numeric",1/0);case"N":return F(),yi("aN"),Ce("numeric",NaN);case'"':case"'":vs=F()==='"',Y="",Q="string";return}throw Ae(F())},identifierNameStartEscape(){if(se!=="u")throw Ae(F());F();const e=Sc();switch(e){case"$":case"_":break;default:if(!_e.isIdStartChar(e))throw bm();break}Y+=e,Q="identifierName"},identifierName(){switch(se){case"$":case"_":case"‌":case"‍":Y+=F();return;case"\\":F(),Q="identifierNameEscape";return}if(_e.isIdContinueChar(se)){Y+=F();return}return Ce("identifier",Y)},identifierNameEscape(){if(se!=="u")throw Ae(F());F();const e=Sc();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!_e.isIdContinueChar(e))throw bm();break}Y+=e,Q="identifierName"},sign(){switch(se){case".":Y=F(),Q="decimalPointLeading";return;case"0":Y=F(),Q="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Y=F(),Q="decimalInteger";return;case"I":return F(),yi("nfinity"),Ce("numeric",wr*(1/0));case"N":return F(),yi("aN"),Ce("numeric",NaN)}throw Ae(F())},zero(){switch(se){case".":Y+=F(),Q="decimalPoint";return;case"e":case"E":Y+=F(),Q="decimalExponent";return;case"x":case"X":Y+=F(),Q="hexadecimal";return}return Ce("numeric",wr*0)},decimalInteger(){switch(se){case".":Y+=F(),Q="decimalPoint";return;case"e":case"E":Y+=F(),Q="decimalExponent";return}if(_e.isDigit(se)){Y+=F();return}return Ce("numeric",wr*Number(Y))},decimalPointLeading(){if(_e.isDigit(se)){Y+=F(),Q="decimalFraction";return}throw Ae(F())},decimalPoint(){switch(se){case"e":case"E":Y+=F(),Q="decimalExponent";return}if(_e.isDigit(se)){Y+=F(),Q="decimalFraction";return}return Ce("numeric",wr*Number(Y))},decimalFraction(){switch(se){case"e":case"E":Y+=F(),Q="decimalExponent";return}if(_e.isDigit(se)){Y+=F();return}return Ce("numeric",wr*Number(Y))},decimalExponent(){switch(se){case"+":case"-":Y+=F(),Q="decimalExponentSign";return}if(_e.isDigit(se)){Y+=F(),Q="decimalExponentInteger";return}throw Ae(F())},decimalExponentSign(){if(_e.isDigit(se)){Y+=F(),Q="decimalExponentInteger";return}throw Ae(F())},decimalExponentInteger(){if(_e.isDigit(se)){Y+=F();return}return Ce("numeric",wr*Number(Y))},hexadecimal(){if(_e.isHexDigit(se)){Y+=F(),Q="hexadecimalInteger";return}throw Ae(F())},hexadecimalInteger(){if(_e.isHexDigit(se)){Y+=F();return}return Ce("numeric",wr*Number(Y))},string(){switch(se){case"\\":F(),Y+=Ob();return;case'"':if(vs)return F(),Ce("string",Y);Y+=F();return;case"'":if(!vs)return F(),Ce("string",Y);Y+=F();return;case`
`:case"\r":throw Ae(F());case"\u2028":case"\u2029":Lb(se);break;case void 0:throw Ae(F())}Y+=F()},start(){switch(se){case"{":case"[":return Ce("punctuator",F())}Q="value"},beforePropertyName(){switch(se){case"$":case"_":Y=F(),Q="identifierName";return;case"\\":F(),Q="identifierNameStartEscape";return;case"}":return Ce("punctuator",F());case'"':case"'":vs=F()==='"',Q="string";return}if(_e.isIdStartChar(se)){Y+=F(),Q="identifierName";return}throw Ae(F())},afterPropertyName(){if(se===":")return Ce("punctuator",F());throw Ae(F())},beforePropertyValue(){Q="value"},afterPropertyValue(){switch(se){case",":case"}":return Ce("punctuator",F())}throw Ae(F())},beforeArrayValue(){if(se==="]")return Ce("punctuator",F());Q="value"},afterArrayValue(){switch(se){case",":case"]":return Ce("punctuator",F())}throw Ae(F())},end(){throw Ae(F())}};function Ce(e,t){return{type:e,value:t,line:ei,column:Yn}}function yi(e){for(const t of e){if(Sr()!==t)throw Ae(F());F()}}function Ob(){switch(Sr()){case"b":return F(),"\b";case"f":return F(),"\f";case"n":return F(),`
`;case"r":return F(),"\r";case"t":return F(),"	";case"v":return F(),"\v";case"0":if(F(),_e.isDigit(Sr()))throw Ae(F());return"\0";case"x":return F(),Bb();case"u":return F(),Sc();case`
`:case"\u2028":case"\u2029":return F(),"";case"\r":return F(),Sr()===`
`&&F(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Ae(F());case void 0:throw Ae(F())}return F()}function Bb(){let e="",t=Sr();if(!_e.isHexDigit(t)||(e+=F(),t=Sr(),!_e.isHexDigit(t)))throw Ae(F());return e+=F(),String.fromCodePoint(parseInt(e,16))}function Sc(){let e="",t=4;for(;t-- >0;){const n=Sr();if(!_e.isHexDigit(n))throw Ae(F());e+=F()}return String.fromCodePoint(parseInt(e,16))}const Rb={start(){if(mt.type==="eof")throw wi();Tl()},beforePropertyName(){switch(mt.type){case"identifier":case"string":Cd=mt.value,jt="afterPropertyName";return;case"punctuator":Ma();return;case"eof":throw wi()}},afterPropertyName(){if(mt.type==="eof")throw wi();jt="beforePropertyValue"},beforePropertyValue(){if(mt.type==="eof")throw wi();Tl()},beforeArrayValue(){if(mt.type==="eof")throw wi();if(mt.type==="punctuator"&&mt.value==="]"){Ma();return}Tl()},afterPropertyValue(){if(mt.type==="eof")throw wi();switch(mt.value){case",":jt="beforePropertyName";return;case"}":Ma()}},afterArrayValue(){if(mt.type==="eof")throw wi();switch(mt.value){case",":jt="beforeArrayValue";return;case"]":Ma()}},end(){}};function Tl(){let e;switch(mt.type){case"punctuator":switch(mt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=mt.value;break}if(Fs===void 0)Fs=e;else{const t=Dr[Dr.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Cd,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Dr.push(e),Array.isArray(e)?jt="beforeArrayValue":jt="beforePropertyName";else{const t=Dr[Dr.length-1];t==null?jt="end":Array.isArray(t)?jt="afterArrayValue":jt="afterPropertyValue"}}function Ma(){Dr.pop();const e=Dr[Dr.length-1];e==null?jt="end":Array.isArray(e)?jt="afterArrayValue":jt="afterPropertyValue"}function Ae(e){return hu(e===void 0?`JSON5: invalid end of input at ${ei}:${Yn}`:`JSON5: invalid character '${$0(e)}' at ${ei}:${Yn}`)}function wi(){return hu(`JSON5: invalid end of input at ${ei}:${Yn}`)}function bm(){return Yn-=5,hu(`JSON5: invalid identifier character at ${ei}:${Yn}`)}function Lb(e){console.warn(`JSON5: '${$0(e)}' in strings is not valid ECMAScript; consider escaping`)}function $0(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function hu(e){const t=new SyntaxError(e);return t.lineNumber=ei,t.columnNumber=Yn,t}var jb=function(t,n,r){const i=[];let o="",s,a,u="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")a=n;else if(Array.isArray(n)){s=[];for(const D of n){let S;typeof D=="string"?S=D:(typeof D=="number"||D instanceof String||D instanceof Number)&&(S=String(D)),S!==void 0&&s.indexOf(S)<0&&s.push(S)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),u="          ".substr(0,r)):typeof r=="string"&&(u=r.substr(0,10)),c("",{"":t});function c(D,S){let A=S[D];switch(A!=null&&(typeof A.toJSON5=="function"?A=A.toJSON5(D):typeof A.toJSON=="function"&&(A=A.toJSON(D))),a&&(A=a.call(S,D,A)),A instanceof Number?A=Number(A):A instanceof String?A=String(A):A instanceof Boolean&&(A=A.valueOf()),A){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof A=="string")return d(A);if(typeof A=="number")return String(A);if(typeof A=="object")return Array.isArray(A)?C(A):f(A)}function d(D){const S={"'":.1,'"':.2},A={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let N="";for(let W=0;W<D.length;W++){const G=D[W];switch(G){case"'":case'"':S[G]++,N+=G;continue;case"\0":if(_e.isDigit(D[W+1])){N+="\\x00";continue}}if(A[G]){N+=A[G];continue}if(G<" "){let Ue=G.charCodeAt(0).toString(16);N+="\\x"+("00"+Ue).substring(Ue.length);continue}N+=G}const U=l||Object.keys(S).reduce((W,G)=>S[W]<S[G]?W:G);return N=N.replace(new RegExp(U,"g"),A[U]),U+N+U}function f(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let S=o;o=o+u;let A=s||Object.keys(D),N=[];for(const W of A){const G=c(W,D);if(G!==void 0){let Ue=y(W)+":";u!==""&&(Ue+=" "),Ue+=G,N.push(Ue)}}let U;if(N.length===0)U="{}";else{let W;if(u==="")W=N.join(","),U="{"+W+"}";else{let G=`,
`+o;W=N.join(G),U=`{
`+o+W+`,
`+S+"}"}}return i.pop(),o=S,U}function y(D){if(D.length===0)return d(D);const S=String.fromCodePoint(D.codePointAt(0));if(!_e.isIdStartChar(S))return d(D);for(let A=S.length;A<D.length;A++)if(!_e.isIdContinueChar(String.fromCodePoint(D.codePointAt(A))))return d(D);return D}function C(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let S=o;o=o+u;let A=[];for(let U=0;U<D.length;U++){const W=c(String(U),D);A.push(W!==void 0?W:"null")}let N;if(A.length===0)N="[]";else if(u==="")N="["+A.join(",")+"]";else{let U=`,
`+o,W=A.join(U);N=`[
`+o+W+`,
`+S+"]"}return i.pop(),o=S,N}};const Ub={parse:Tb,stringify:jb};var _b=Ub;const v0="__@@augment-vir-undefined-sentinel@@__",Vb=new RegExp(`['"]${v0}['"]`);function h(e,t){if(typeof e=="string")return e;try{return _b.stringify(e,(r,i)=>i===void 0?v0:typeof i=="bigint"?Number(i):i,t||void 0).split(Vb).join("undefined")}catch{return String(e)}}var qb=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Hn;(function(e){e.Node="node",e.Web="web"})(Hn||(Hn={}));function Wb(){return qb?Hn.Node:Hn.Web}const D0=Wb();function Ad(e){return D0===e}function E0(e){return e[D0]()}function zb(e,t){const n=typeof t=="string"&&typeof e=="string",r=typeof t!="string"||typeof e!="string",i=r?Fb:Db,o=[n?"":`
`,h(t&&typeof t=="object"&&!Array.isArray(t)?wm(t):t,4),`
`].join(""),s=[n?"":`
`,h(e&&typeof e=="object"&&!Array.isArray(e)?wm(e):e,4),`
`].join(""),a=Kb(r,i(o,s)),u=Ad(Hn.Node);return[[u?Ar.Green:""," +added (unexpected, added in actual)",u?Ar.Red:""," -missing (expected, missing from actual)",u?Ar.Reset:""].join(""),n?`

`:`
`,a].join("")}var Ar;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(Ar||(Ar={}));var pu;(function(e){e.Added="+",e.Removed="-"})(pu||(pu={}));function Kb(e,t){return e?t.flatMap(r=>r.value.split(`
`).map(i=>$m(i,r)).join(`
`)).join(""):t.map(r=>$m(void 0,r)).join("")}function $m(e,t){if(e!=null&&!e)return"";const n=Ad(Hn.Node),r=t.added?pu.Added:t.removed?pu.Removed:e==null?"":" ",i=t.added?Ar.Green:t.removed?Ar.Red:Ar.Reset;return[n?i:"",r,e??t.value,Ar.Reset].join("")}function Te(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Zb(e){return Te(e).filter(t=>isNaN(Number(t)))}function zn(e){return Zb(e).map(n=>e[n])}const Gb=[".",":",";",",","?","!"],Yb=new RegExp(`[${Gb.join("")}]+$`);function vm(e){return e.replace(Yb,"")}function wt(e){return e==null||e===""?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):h(e)}function zo(...e){const t=e.map(o=>wt(o)).filter(o=>!!vm(o)),n=t[t.length-1]?.endsWith("."),r=t.map(o=>vm(wt(o)));return(r.length<2?r[0]||"":r.join(": "))+(n?".":"")}function tt(e){return e instanceof Error?e:new Error(wt(e))}function kd(e,t){const n=tt(e),r=zo(t,n.message);try{return n.message=r,n}catch{return new Error(r,{cause:e})}}var v;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(v||(v={}));var R;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(R||(R={}));R.ClientError,R.ServerError;v.Continue+"",R.Information,v.SwitchingProtocols+"",R.Information,v.Processing+"",R.Information,v.EarlyHints+"",R.Information,v.Ok+"",R.Success,v.Created+"",R.Success,v.Accepted+"",R.Success,v.NonAuthoritativeInformation+"",R.Success,v.NoContent+"",R.Success,v.ResetContent+"",R.Success,v.PartialContent+"",R.Success,v.MultiStatus+"",R.Success,v.AlreadyReported+"",R.Success,v.ImUsed+"",R.Success,v.MultipleChoices+"",R.Redirect,v.MovedPermanently+"",R.Redirect,v.Found+"",R.Redirect,v.SeeOther+"",R.Redirect,v.NotModified+"",R.Redirect,v.UseProxy+"",R.Redirect,v.Unused+"",R.Redirect,v.TemporaryRedirect+"",R.Redirect,v.PermanentRedirect+"",R.Redirect,v.BadRequest+"",R.ClientError,v.Unauthorized+"",R.ClientError,v.PaymentRequired+"",R.ClientError,v.Forbidden+"",R.ClientError,v.NotFound+"",R.ClientError,v.MethodNotAllowed+"",R.ClientError,v.NotAcceptable+"",R.ClientError,v.ProxyAuthenticationRequired+"",R.ClientError,v.RequestTimeout+"",R.ClientError,v.Conflict+"",R.ClientError,v.Gone+"",R.ClientError,v.LengthRequired+"",R.ClientError,v.PreconditionFailed+"",R.ClientError,v.PayloadTooLarge+"",R.ClientError,v.UriTooLong+"",R.ClientError,v.UnsupportedMediaType+"",R.ClientError,v.RangeNotSatisfiable+"",R.ClientError,v.ExpectationFailed+"",R.ClientError,v.ImATeapot+"",R.ClientError,v.MisdirectedRequest+"",R.ClientError,v.UnprocessableContent+"",R.ClientError,v.Locked+"",R.ClientError,v.FailedDependency+"",R.ClientError,v.TooEarly+"",R.ClientError,v.UpgradeRequired+"",R.ClientError,v.PreconditionRequired+"",R.ClientError,v.TooManyRequests+"",R.ClientError,v.RequestHeaderFieldsTooLarge+"",R.ClientError,v.UnavailableForLegalReasons+"",R.ClientError,v.InternalServerError+"",R.ServerError,v.NotImplemented+"",R.ServerError,v.BadGateway+"",R.ServerError,v.ServiceUnavailable+"",R.ServerError,v.GatewayTimeout+"",R.ServerError,v.HttpVersionNotSupported+"",R.ServerError,v.VariantAlsoNegotiates+"",R.ServerError,v.InsufficientStorage+"",R.ServerError,v.LoopDetected+"",R.ServerError,v.NotExtended+"",R.ServerError,v.NetworkAuthenticationRequired+"",R.ServerError;const tu={[R.Information]:[v.Continue,v.SwitchingProtocols,v.Processing,v.EarlyHints],[R.Success]:[v.Ok,v.Created,v.Accepted,v.NonAuthoritativeInformation,v.NoContent,v.ResetContent,v.PartialContent,v.MultiStatus,v.AlreadyReported,v.ImUsed],[R.Redirect]:[v.MultipleChoices,v.MovedPermanently,v.Found,v.SeeOther,v.NotModified,v.UseProxy,v.Unused,v.TemporaryRedirect,v.PermanentRedirect],[R.ClientError]:[v.BadRequest,v.Unauthorized,v.PaymentRequired,v.Forbidden,v.NotFound,v.MethodNotAllowed,v.NotAcceptable,v.ProxyAuthenticationRequired,v.RequestTimeout,v.Conflict,v.Gone,v.LengthRequired,v.PreconditionFailed,v.PayloadTooLarge,v.UriTooLong,v.UnsupportedMediaType,v.RangeNotSatisfiable,v.ExpectationFailed,v.ImATeapot,v.MisdirectedRequest,v.UnprocessableContent,v.Locked,v.FailedDependency,v.TooEarly,v.UpgradeRequired,v.PreconditionRequired,v.TooManyRequests,v.RequestHeaderFieldsTooLarge,v.UnavailableForLegalReasons],[R.ServerError]:[v.InternalServerError,v.NotImplemented,v.BadGateway,v.ServiceUnavailable,v.GatewayTimeout,v.HttpVersionNotSupported,v.VariantAlsoNegotiates,v.InsufficientStorage,v.LoopDetected,v.NotExtended,v.NetworkAuthenticationRequired]};function x0({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class gu{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(tt(r))}})}}class Vi extends Error{}class Hb extends Vi{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Jb extends Vi{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Xb extends Vi{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class mo extends Vi{}class C0 extends Vi{constructor(t){super(`Invalid unit ${t}`)}}class Nt extends Vi{}class Vr extends Vi{constructor(){super("Zone is an abstract class")}}const O="numeric",Jn="short",fn="long",yu={year:O,month:O,day:O},A0={year:O,month:Jn,day:O},Qb={year:O,month:Jn,day:O,weekday:Jn},k0={year:O,month:fn,day:O},F0={year:O,month:fn,day:O,weekday:fn},S0={hour:O,minute:O},N0={hour:O,minute:O,second:O},I0={hour:O,minute:O,second:O,timeZoneName:Jn},P0={hour:O,minute:O,second:O,timeZoneName:fn},T0={hour:O,minute:O,hourCycle:"h23"},M0={hour:O,minute:O,second:O,hourCycle:"h23"},O0={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:Jn},B0={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:fn},R0={year:O,month:O,day:O,hour:O,minute:O},L0={year:O,month:O,day:O,hour:O,minute:O,second:O},j0={year:O,month:Jn,day:O,hour:O,minute:O},U0={year:O,month:Jn,day:O,hour:O,minute:O,second:O},e2={year:O,month:Jn,day:O,weekday:Jn,hour:O,minute:O},_0={year:O,month:fn,day:O,hour:O,minute:O,timeZoneName:Jn},V0={year:O,month:fn,day:O,hour:O,minute:O,second:O,timeZoneName:Jn},q0={year:O,month:fn,day:O,weekday:fn,hour:O,minute:O,timeZoneName:fn},W0={year:O,month:fn,day:O,weekday:fn,hour:O,minute:O,second:O,timeZoneName:fn};class ia{get type(){throw new Vr}get name(){throw new Vr}get ianaName(){return this.name}get isUniversal(){throw new Vr}offsetName(t,n){throw new Vr}formatOffset(t,n){throw new Vr}offset(t){throw new Vr}equals(t){throw new Vr}get isValid(){throw new Vr}}let Ml=null;class qu extends ia{static get instance(){return Ml===null&&(Ml=new qu),Ml}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return tg(t,n,r)}formatOffset(t,n){return Ss(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Nc=new Map;function t2(e){let t=Nc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Nc.set(e,t)),t}const n2={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function r2(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,o,s,a,u,l,c]=r;return[s,i,o,a,u,l,c]}function i2(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:o,value:s}=n[i],a=n2[o];o==="era"?r[a]=s:K(a)||(r[a]=parseInt(s,10))}return r}const Ol=new Map;class Pr extends ia{static create(t){let n=Ol.get(t);return n===void 0&&Ol.set(t,n=new Pr(t)),n}static resetCache(){Ol.clear(),Nc.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Pr.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return tg(t,n,r,this.name)}formatOffset(t,n){return Ss(this.offset(t),n)}offset(t){if(!this.valid)return NaN;const n=new Date(t);if(isNaN(n))return NaN;const r=t2(this.name);let[i,o,s,a,u,l,c]=r.formatToParts?i2(r,n):r2(r,n);a==="BC"&&(i=-Math.abs(i)+1);const f=zu({year:i,month:o,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let y=+n;const C=y%1e3;return y-=C>=0?C:1e3+C,(f-y)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Dm={};function o2(e,t={}){const n=JSON.stringify([e,t]);let r=Dm[n];return r||(r=new Intl.ListFormat(e,t),Dm[n]=r),r}const Ic=new Map;function Pc(e,t={}){const n=JSON.stringify([e,t]);let r=Ic.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),Ic.set(n,r)),r}const Tc=new Map;function s2(e,t={}){const n=JSON.stringify([e,t]);let r=Tc.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),Tc.set(n,r)),r}const Mc=new Map;function a2(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let o=Mc.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),Mc.set(i,o)),o}let Ds=null;function u2(){return Ds||(Ds=new Intl.DateTimeFormat().resolvedOptions().locale,Ds)}const Oc=new Map;function z0(e){let t=Oc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Oc.set(e,t)),t}const Bc=new Map;function l2(e){let t=Bc.get(e);if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,"minimalDays"in t||(t={...K0,...t}),Bc.set(e,t)}return t}function c2(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=Pc(e).resolvedOptions(),i=e}catch{const u=e.substring(0,n);r=Pc(u).resolvedOptions(),i=u}const{numberingSystem:o,calendar:s}=r;return[i,o,s]}}function d2(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function f2(e){const t=[];for(let n=1;n<=12;n++){const r=Z.utc(2009,n,1);t.push(e(r))}return t}function m2(e){const t=[];for(let n=1;n<=7;n++){const r=Z.utc(2016,11,13+n);t.push(e(r))}return t}function Oa(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function h2(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||z0(e.locale).numberingSystem==="latn"}class p2{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:o,...s}=r;if(!n||Object.keys(s).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=s2(t,a)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):Pd(t,3);return He(n,this.padTo)}}}class g2{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Pr.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=Pc(n,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class y2{constructor(t,n,r){this.opts={style:"long",...r},!n&&Q0()&&(this.rtf=a2(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):j2(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const K0={firstDay:1,minimalDays:4,weekend:[6,7]};class ye{static fromOpts(t){return ye.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,o=!1){const s=t||je.defaultLocale,a=s||(o?"en-US":u2()),u=n||je.defaultNumberingSystem,l=r||je.defaultOutputCalendar,c=Lc(i)||je.defaultWeekSettings;return new ye(a,u,l,c,s)}static resetCache(){Ds=null,Ic.clear(),Tc.clear(),Mc.clear(),Oc.clear(),Bc.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return ye.create(t,n,r,i)}constructor(t,n,r,i,o){const[s,a,u]=c2(t);this.locale=s,this.numberingSystem=n||a||null,this.outputCalendar=r||u||null,this.weekSettings=i,this.intl=d2(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=h2(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:ye.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Lc(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Oa(this,t,ig,()=>{const r=this.intl==="ja"||this.intl.startsWith("ja-");n&=!r;const i=n?{month:t,day:"numeric"}:{month:t},o=n?"format":"standalone";if(!this.monthsCache[o][t]){const s=r?a=>this.dtFormatter(a,i).format():a=>this.extract(a,i,"month");this.monthsCache[o][t]=f2(s)}return this.monthsCache[o][t]})}weekdays(t,n=!1){return Oa(this,t,ag,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=m2(o=>this.extract(o,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Oa(this,void 0,()=>ug,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[Z.utc(2016,11,13,9),Z.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Oa(this,t,lg,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[Z.utc(-40,1,1),Z.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),o=i.formatToParts(),s=o.find(a=>a.type.toLowerCase()===r);return s?s.value:null}numberFormatter(t={}){return new p2(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new g2(t,this.intl,n)}relFormatter(t={}){return new y2(this.intl,this.isEnglish(),t)}listFormatter(t={}){return o2(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||z0(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:eg()?l2(this.locale):K0}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Bl=null;class Ut extends ia{static get utcInstance(){return Bl===null&&(Bl=new Ut(0)),Bl}static instance(t){return t===0?Ut.utcInstance:new Ut(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Ut(Ku(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Ss(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Ss(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return Ss(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class w2 extends ia{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Gr(e,t){if(K(e)||e===null)return t;if(e instanceof ia)return e;if(x2(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?qu.instance:n==="utc"||n==="gmt"?Ut.utcInstance:Ut.parseSpecifier(n)||Pr.create(e)}else return Jr(e)?Ut.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new w2(e)}const Fd={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Em={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},b2=Fd.hanidec.replace(/[\[|\]]/g,"").split("");function $2(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(Fd.hanidec)!==-1)t+=b2.indexOf(e[n]);else for(const i in Em){const[o,s]=Em[i];r>=o&&r<=s&&(t+=r-o)}}return parseInt(t,10)}else return t}const Rc=new Map;function v2(){Rc.clear()}function Vn({numberingSystem:e},t=""){const n=e||"latn";let r=Rc.get(n);r===void 0&&(r=new Map,Rc.set(n,r));let i=r.get(t);return i===void 0&&(i=new RegExp(`${Fd[n]}${t}`),r.set(t,i)),i}let xm=()=>Date.now(),Cm="system",Am=null,km=null,Fm=null,Sm=60,Nm,Im=null;class je{static get now(){return xm}static set now(t){xm=t}static set defaultZone(t){Cm=t}static get defaultZone(){return Gr(Cm,qu.instance)}static get defaultLocale(){return Am}static set defaultLocale(t){Am=t}static get defaultNumberingSystem(){return km}static set defaultNumberingSystem(t){km=t}static get defaultOutputCalendar(){return Fm}static set defaultOutputCalendar(t){Fm=t}static get defaultWeekSettings(){return Im}static set defaultWeekSettings(t){Im=Lc(t)}static get twoDigitCutoffYear(){return Sm}static set twoDigitCutoffYear(t){Sm=t%100}static get throwOnInvalid(){return Nm}static set throwOnInvalid(t){Nm=t}static resetCaches(){ye.resetCache(),Pr.resetCache(),Z.resetCache(),v2()}}class Zn{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Z0=[0,31,59,90,120,151,181,212,243,273,304,334],G0=[0,31,60,91,121,152,182,213,244,274,305,335];function Sn(e,t){return new Zn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Sd(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function Y0(e,t,n){return n+(oa(e)?G0:Z0)[t-1]}function H0(e,t){const n=oa(e)?G0:Z0,r=n.findIndex(o=>o<t),i=t-n[r];return{month:r+1,day:i}}function Nd(e,t){return(e-t+7)%7+1}function wu(e,t=4,n=1){const{year:r,month:i,day:o}=e,s=Y0(r,i,o),a=Nd(Sd(r,i,o),n);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=r-1,u=js(l,t,n)):u>js(r,t,n)?(l=r+1,u=1):l=r,{weekYear:l,weekNumber:u,weekday:a,...Zu(e)}}function Pm(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:o}=e,s=Nd(Sd(r,1,t),n),a=wo(r);let u=i*7+o-s-7+t,l;u<1?(l=r-1,u+=wo(l)):u>a?(l=r+1,u-=wo(r)):l=r;const{month:c,day:d}=H0(l,u);return{year:l,month:c,day:d,...Zu(e)}}function Rl(e){const{year:t,month:n,day:r}=e,i=Y0(t,n,r);return{year:t,ordinal:i,...Zu(e)}}function Tm(e){const{year:t,ordinal:n}=e,{month:r,day:i}=H0(t,n);return{year:t,month:r,day:i,...Zu(e)}}function Mm(e,t){if(!K(e.localWeekday)||!K(e.localWeekNumber)||!K(e.localWeekYear)){if(!K(e.weekday)||!K(e.weekNumber)||!K(e.weekYear))throw new mo("Cannot mix locale-based week fields with ISO-based week fields");return K(e.localWeekday)||(e.weekday=e.localWeekday),K(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),K(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function D2(e,t=4,n=1){const r=Wu(e.weekYear),i=Nn(e.weekNumber,1,js(e.weekYear,t,n)),o=Nn(e.weekday,1,7);return r?i?o?!1:Sn("weekday",e.weekday):Sn("week",e.weekNumber):Sn("weekYear",e.weekYear)}function E2(e){const t=Wu(e.year),n=Nn(e.ordinal,1,wo(e.year));return t?n?!1:Sn("ordinal",e.ordinal):Sn("year",e.year)}function J0(e){const t=Wu(e.year),n=Nn(e.month,1,12),r=Nn(e.day,1,bu(e.year,e.month));return t?n?r?!1:Sn("day",e.day):Sn("month",e.month):Sn("year",e.year)}function X0(e){const{hour:t,minute:n,second:r,millisecond:i}=e,o=Nn(t,0,23)||t===24&&n===0&&r===0&&i===0,s=Nn(n,0,59),a=Nn(r,0,59),u=Nn(i,0,999);return o?s?a?u?!1:Sn("millisecond",i):Sn("second",r):Sn("minute",n):Sn("hour",t)}function K(e){return typeof e>"u"}function Jr(e){return typeof e=="number"}function Wu(e){return typeof e=="number"&&e%1===0}function x2(e){return typeof e=="string"}function C2(e){return Object.prototype.toString.call(e)==="[object Date]"}function Q0(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function eg(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function A2(e){return Array.isArray(e)?e:[e]}function Om(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const o=[t(i),i];return r&&n(r[0],o[0])===r[0]?r:o},null)[1]}function k2(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function ko(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Lc(e){if(e==null)return null;if(typeof e!="object")throw new Nt("Week settings must be an object");if(!Nn(e.firstDay,1,7)||!Nn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Nn(t,1,7)))throw new Nt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Nn(e,t,n){return Wu(e)&&e>=t&&e<=n}function F2(e,t){return e-t*Math.floor(e/t)}function He(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function zr(e){if(!(K(e)||e===null||e===""))return parseInt(e,10)}function bi(e){if(!(K(e)||e===null||e===""))return parseFloat(e)}function Id(e){if(!(K(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Pd(e,t,n="round"){const r=10**t;switch(n){case"expand":return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case"trunc":return Math.trunc(e*r)/r;case"round":return Math.round(e*r)/r;case"floor":return Math.floor(e*r)/r;case"ceil":return Math.ceil(e*r)/r;default:throw new RangeError(`Value rounding ${n} is out of range`)}}function oa(e){return e%4===0&&(e%100!==0||e%400===0)}function wo(e){return oa(e)?366:365}function bu(e,t){const n=F2(t-1,12)+1,r=e+(t-n)/12;return n===2?oa(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function zu(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Bm(e,t,n){return-Nd(Sd(e,1,t),n)+t-1}function js(e,t=4,n=1){const r=Bm(e,t,n),i=Bm(e+1,t,n);return(wo(e)-r+i)/7}function jc(e){return e>99?e:e>je.twoDigitCutoffYear?1900+e:2e3+e}function tg(e,t,n,r=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(o.timeZone=r);const s={timeZoneName:t,...o},a=new Intl.DateTimeFormat(n,s).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Ku(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function ng(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new Nt(`Invalid unit value ${e}`);return t}function $u(e,t){const n={};for(const r in e)if(ko(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=ng(i)}return n}function Ss(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${He(n,2)}:${He(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${He(n,2)}${He(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Zu(e){return k2(e,["hour","minute","second","millisecond"])}const S2=["January","February","March","April","May","June","July","August","September","October","November","December"],rg=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],N2=["J","F","M","A","M","J","J","A","S","O","N","D"];function ig(e){switch(e){case"narrow":return[...N2];case"short":return[...rg];case"long":return[...S2];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const og=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],sg=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],I2=["M","T","W","T","F","S","S"];function ag(e){switch(e){case"narrow":return[...I2];case"short":return[...sg];case"long":return[...og];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const ug=["AM","PM"],P2=["Before Christ","Anno Domini"],T2=["BC","AD"],M2=["B","A"];function lg(e){switch(e){case"narrow":return[...M2];case"short":return[...T2];case"long":return[...P2];default:return null}}function O2(e){return ug[e.hour<12?0:1]}function B2(e,t){return ag(t)[e.weekday-1]}function R2(e,t){return ig(t)[e.month-1]}function L2(e,t){return lg(t)[e.year<0?0:1]}function j2(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&o){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${i[e][0]}`;case-1:return d?"yesterday":`last ${i[e][0]}`;case 0:return d?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=r?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function Rm(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const U2={D:yu,DD:A0,DDD:k0,DDDD:F0,t:S0,tt:N0,ttt:I0,tttt:P0,T:T0,TT:M0,TTT:O0,TTTT:B0,f:R0,ff:j0,fff:_0,ffff:q0,F:L0,FF:U0,FFF:V0,FFFF:W0};class Pt{static create(t,n={}){return new Pt(t,n)}static parseFormat(t){let n=null,r="",i=!1;const o=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((r.length>0||i)&&o.push({literal:i||/^\s+$/.test(r),val:r===""?"'":r}),n=null,r="",i=!i):i||a===n?r+=a:(r.length>0&&o.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&o.push({literal:i||/^\s+$/.test(r),val:r}),o}static macroTokenToFormatOpts(t){return U2[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0,r=void 0){if(this.opts.forceSimple)return He(t,n);const i={...this.opts};return n>0&&(i.padTo=n),r&&(i.signDisplay=r),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(y,C)=>this.loc.extract(t,y,C),s=y=>t.isOffsetFixed&&t.offset===0&&y.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,y.format):"",a=()=>r?O2(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(y,C)=>r?R2(t,y):o(C?{month:y}:{month:y,day:"numeric"},"month"),l=(y,C)=>r?B2(t,y):o(C?{weekday:y}:{weekday:y,month:"long",day:"numeric"},"weekday"),c=y=>{const C=Pt.macroTokenToFormatOpts(y);return C?this.formatWithSystemDefault(t,C):y},d=y=>r?L2(t,y):o({era:y},"era"),f=y=>{switch(y){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(y)}};return Rm(Pt.parseFormat(n),f)}formatDurationFromString(t,n){const r=this.opts.signMode==="negativeLargestOnly"?-1:1,i=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(c,d)=>f=>{const y=i(f);if(y){const C=d.isNegativeDuration&&y!==d.largestUnit?r:1;let D;return this.opts.signMode==="negativeLargestOnly"&&y!==d.largestUnit?D="never":this.opts.signMode==="all"?D="always":D="auto",this.num(c.get(y)*C,f.length,D)}else return f},s=Pt.parseFormat(n),a=s.reduce((c,{literal:d,val:f})=>d?c:c.concat(f),[]),u=t.shiftTo(...a.map(i).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return Rm(s,o(u,l))}}const cg=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Ko(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function Zo(...e){return t=>e.reduce(([n,r,i],o)=>{const[s,a,u]=o(t,i);return[{...n,...s},a||r,u]},[{},null,1]).slice(0,2)}function Go(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function dg(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=zr(t[n+i]);return[r,null,n+i]}}const fg=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,_2=`(?:${fg.source}?(?:\\[(${cg.source})\\])?)?`,Td=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,mg=RegExp(`${Td.source}${_2}`),Md=RegExp(`(?:[Tt]${mg.source})?`),V2=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,q2=/(\d{4})-?W(\d\d)(?:-?(\d))?/,W2=/(\d{4})-?(\d{3})/,z2=dg("weekYear","weekNumber","weekDay"),K2=dg("year","ordinal"),Z2=/(\d{4})-(\d\d)-(\d\d)/,hg=RegExp(`${Td.source} ?(?:${fg.source}|(${cg.source}))?`),G2=RegExp(`(?: ${hg.source})?`);function bo(e,t,n){const r=e[t];return K(r)?n:zr(r)}function Y2(e,t){return[{year:bo(e,t),month:bo(e,t+1,1),day:bo(e,t+2,1)},null,t+3]}function Yo(e,t){return[{hours:bo(e,t,0),minutes:bo(e,t+1,0),seconds:bo(e,t+2,0),milliseconds:Id(e[t+3])},null,t+4]}function sa(e,t){const n=!e[t]&&!e[t+1],r=Ku(e[t+1],e[t+2]),i=n?null:Ut.instance(r);return[{},i,t+3]}function aa(e,t){const n=e[t]?Pr.create(e[t]):null;return[{},n,t+1]}const H2=RegExp(`^T?${Td.source}$`),J2=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function X2(e){const[t,n,r,i,o,s,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",f=(y,C=!1)=>y!==void 0&&(C||y&&c)?-y:y;return[{years:f(bi(n)),months:f(bi(r)),weeks:f(bi(i)),days:f(bi(o)),hours:f(bi(s)),minutes:f(bi(a)),seconds:f(bi(u),u==="-0"),milliseconds:f(Id(l),d)}]}const Q2={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Od(e,t,n,r,i,o,s){const a={year:t.length===2?jc(zr(t)):zr(t),month:rg.indexOf(n)+1,day:zr(r),hour:zr(i),minute:zr(o)};return s&&(a.second=zr(s)),e&&(a.weekday=e.length>3?og.indexOf(e)+1:sg.indexOf(e)+1),a}const e$=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function t$(e){const[,t,n,r,i,o,s,a,u,l,c,d]=e,f=Od(t,i,r,n,o,s,a);let y;return u?y=Q2[u]:l?y=0:y=Ku(c,d),[f,new Ut(y)]}function n$(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const r$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,i$=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,o$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Lm(e){const[,t,n,r,i,o,s,a]=e;return[Od(t,i,r,n,o,s,a),Ut.utcInstance]}function s$(e){const[,t,n,r,i,o,s,a]=e;return[Od(t,a,n,r,i,o,s),Ut.utcInstance]}const a$=Ko(V2,Md),u$=Ko(q2,Md),l$=Ko(W2,Md),c$=Ko(mg),pg=Zo(Y2,Yo,sa,aa),d$=Zo(z2,Yo,sa,aa),f$=Zo(K2,Yo,sa,aa),m$=Zo(Yo,sa,aa);function h$(e){return Go(e,[a$,pg],[u$,d$],[l$,f$],[c$,m$])}function p$(e){return Go(n$(e),[e$,t$])}function g$(e){return Go(e,[r$,Lm],[i$,Lm],[o$,s$])}function y$(e){return Go(e,[J2,X2])}const w$=Zo(Yo);function b$(e){return Go(e,[H2,w$])}const $$=Ko(Z2,G2),v$=Ko(hg),D$=Zo(Yo,sa,aa);function E$(e){return Go(e,[$$,pg],[v$,D$])}const jm="Invalid Duration",gg={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},x$={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...gg},Cn=146097/400,no=146097/4800,C$={years:{quarters:4,months:12,weeks:Cn/7,days:Cn,hours:Cn*24,minutes:Cn*24*60,seconds:Cn*24*60*60,milliseconds:Cn*24*60*60*1e3},quarters:{months:3,weeks:Cn/28,days:Cn/4,hours:Cn*24/4,minutes:Cn*24*60/4,seconds:Cn*24*60*60/4,milliseconds:Cn*24*60*60*1e3/4},months:{weeks:no/7,days:no,hours:no*24,minutes:no*24*60,seconds:no*24*60*60,milliseconds:no*24*60*60*1e3},...gg},ki=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],A$=ki.slice(0).reverse();function hr(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new ae(r)}function yg(e,t){let n=t.milliseconds??0;for(const r of A$.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Um(e,t){const n=yg(e,t)<0?-1:1;ki.reduceRight((r,i)=>{if(K(t[i]))return r;if(r){const o=t[r]*n,s=e[i][r],a=Math.floor(o/s);t[i]+=a*n,t[r]-=a*s*n}return i},null),ki.reduce((r,i)=>{if(K(t[i]))return r;if(r){const o=t[r]%1;t[r]-=o,t[i]+=o*e[r][i]}return i},null)}function _m(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class ae{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?C$:x$;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||ye.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return ae.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new Nt(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new ae({values:$u(t,ae.normalizeUnit),loc:ye.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Jr(t))return ae.fromMillis(t);if(ae.isDuration(t))return t;if(typeof t=="object")return ae.fromObject(t);throw new Nt(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=y$(t);return r?ae.fromObject(r,n):ae.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=b$(t);return r?ae.fromObject(r,n):ae.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new Nt("need to specify a reason the Duration is invalid");const r=t instanceof Zn?t:new Zn(t,n);if(je.throwOnInvalid)throw new Xb(r);return new ae({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new C0(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?Pt.create(this.loc,r).formatDurationFromString(this,t):jm}toHuman(t={}){if(!this.isValid)return jm;const n=t.showZeros!==!1,r=ki.map(i=>{const o=this.values[i];return K(o)||o===0&&!n?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Pd(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},Z.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?yg(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=ae.fromDurationLike(t),r={};for(const i of ki)(ko(n.values,i)||ko(this.values,i))&&(r[i]=n.get(i)+this.get(i));return hr(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=ae.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=ng(t(this.values[r],r));return hr(this,{values:n},!0)}get(t){return this[ae.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...$u(t,ae.normalizeUnit)};return hr(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return hr(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Um(this.matrix,t),hr(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=_m(this.normalize().shiftToAll().toObject());return hr(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>ae.normalizeUnit(s));const n={},r={},i=this.toObject();let o;for(const s of ki)if(t.indexOf(s)>=0){o=s;let a=0;for(const l in r)a+=this.matrix[l][s]*r[l],r[l]=0;Jr(i[s])&&(a+=i[s]);const u=Math.trunc(a);n[s]=u,r[s]=(a*1e3-u*1e3)/1e3}else Jr(i[s])&&(r[s]=i[s]);for(const s in r)r[s]!==0&&(n[o]+=s===o?r[s]:r[s]/this.matrix[o][s]);return Um(this.matrix,n),hr(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return hr(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=_m(this.values);return hr(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of ki)if(!n(this.values[r],t.values[r]))return!1;return!0}}const ro="Invalid Interval";function k$(e,t){return!e||!e.isValid?Le.invalid("missing or invalid start"):!t||!t.isValid?Le.invalid("missing or invalid end"):t<e?Le.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class Le{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new Nt("need to specify a reason the Interval is invalid");const r=t instanceof Zn?t:new Zn(t,n);if(je.throwOnInvalid)throw new Jb(r);return new Le({invalid:r})}static fromDateTimes(t,n){const r=fs(t),i=fs(n),o=k$(r,i);return o??new Le({start:r,end:i})}static after(t,n){const r=ae.fromDurationLike(n),i=fs(t);return Le.fromDateTimes(i,i.plus(r))}static before(t,n){const r=ae.fromDurationLike(n),i=fs(t);return Le.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let o,s;try{o=Z.fromISO(r,n),s=o.isValid}catch{s=!1}let a,u;try{a=Z.fromISO(i,n),u=a.isValid}catch{u=!1}if(s&&u)return Le.fromDateTimes(o,a);if(s){const l=ae.fromISO(i,n);if(l.isValid)return Le.after(o,l)}else if(u){const l=ae.fromISO(r,n);if(l.isValid)return Le.before(a,l)}}return Le.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?Le.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(fs).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),r=[];let{s:i}=this,o=0;for(;i<this.e;){const s=n[o]||this.e,a=+s>+this.e?this.e:s;r.push(Le.fromDateTimes(i,a)),i=a,o+=1}return r}splitBy(t){const n=ae.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,o;const s=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(u=>u*i));o=+a>+this.e?this.e:a,s.push(Le.fromDateTimes(r,o)),r=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:Le.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return Le.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],o=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...o),a=s.sort((u,l)=>u.time-l.time);for(const u of a)r+=u.type==="s"?1:-1,r===1?n=u.time:(n&&+n!=+u.time&&i.push(Le.fromDateTimes(n,u.time)),n=null);return Le.merge(i)}difference(...t){return Le.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:ro}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=yu,n={}){return this.isValid?Pt.create(this.s.loc.clone(n),t).formatInterval(this):ro}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:ro}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ro}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:ro}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:ro}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):ae.invalid(this.invalidReason)}mapEndpoints(t){return Le.fromDateTimes(t(this.s),t(this.e))}}class Ba{static hasDST(t=je.defaultZone){const n=Z.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return Pr.isValidZone(t)}static normalizeZone(t){return Gr(t,je.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||ye.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||ye.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||ye.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||ye.create(n,r,o)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||ye.create(n,r,o)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||ye.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||ye.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return ye.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return ye.create(n,null,"gregory").eras(t)}static features(){return{relative:Q0(),localeWeek:eg()}}}function Vm(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(ae.fromMillis(r).as("days"))}function F$(e,t,n){const r=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Vm(u,l);return(c-c%7)/7}],["days",Vm]],i={},o=e;let s,a;for(const[u,l]of r)n.indexOf(u)>=0&&(s=u,i[u]=l(e,t),a=o.plus(i),a>t?(i[u]--,e=o.plus(i),e>t&&(a=e,i[u]--,e=o.plus(i))):e=a);return[e,i,a,s]}function S$(e,t,n,r){let[i,o,s,a]=F$(e,t,n);const u=t-i,l=n.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(s<t&&(s=i.plus({[a]:1})),s!==i&&(o[a]=(o[a]||0)+u/(s-i)));const c=ae.fromObject(o,r);return l.length>0?ae.fromMillis(u,r).shiftTo(...l).plus(c):c}const N$="missing Intl.DateTimeFormat.formatToParts support";function fe(e,t=n=>n){return{regex:e,deser:([n])=>t($2(n))}}const I$=" ",wg=`[ ${I$}]`,bg=new RegExp(wg,"g");function P$(e){return e.replace(/\./g,"\\.?").replace(bg,wg)}function qm(e){return e.replace(/\./g,"").replace(bg," ").toLowerCase()}function qn(e,t){return e===null?null:{regex:RegExp(e.map(P$).join("|")),deser:([n])=>e.findIndex(r=>qm(n)===qm(r))+t}}function Wm(e,t){return{regex:e,deser:([,n,r])=>Ku(n,r),groups:t}}function Ra(e){return{regex:e,deser:([t])=>t}}function T$(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function M$(e,t){const n=Vn(t),r=Vn(t,"{2}"),i=Vn(t,"{3}"),o=Vn(t,"{4}"),s=Vn(t,"{6}"),a=Vn(t,"{1,2}"),u=Vn(t,"{1,3}"),l=Vn(t,"{1,6}"),c=Vn(t,"{1,9}"),d=Vn(t,"{2,4}"),f=Vn(t,"{4,6}"),y=S=>({regex:RegExp(T$(S.val)),deser:([A])=>A,literal:!0}),D=(S=>{if(e.literal)return y(S);switch(S.val){case"G":return qn(t.eras("short"),0);case"GG":return qn(t.eras("long"),0);case"y":return fe(l);case"yy":return fe(d,jc);case"yyyy":return fe(o);case"yyyyy":return fe(f);case"yyyyyy":return fe(s);case"M":return fe(a);case"MM":return fe(r);case"MMM":return qn(t.months("short",!0),1);case"MMMM":return qn(t.months("long",!0),1);case"L":return fe(a);case"LL":return fe(r);case"LLL":return qn(t.months("short",!1),1);case"LLLL":return qn(t.months("long",!1),1);case"d":return fe(a);case"dd":return fe(r);case"o":return fe(u);case"ooo":return fe(i);case"HH":return fe(r);case"H":return fe(a);case"hh":return fe(r);case"h":return fe(a);case"mm":return fe(r);case"m":return fe(a);case"q":return fe(a);case"qq":return fe(r);case"s":return fe(a);case"ss":return fe(r);case"S":return fe(u);case"SSS":return fe(i);case"u":return Ra(c);case"uu":return Ra(a);case"uuu":return fe(n);case"a":return qn(t.meridiems(),0);case"kkkk":return fe(o);case"kk":return fe(d,jc);case"W":return fe(a);case"WW":return fe(r);case"E":case"c":return fe(n);case"EEE":return qn(t.weekdays("short",!1),1);case"EEEE":return qn(t.weekdays("long",!1),1);case"ccc":return qn(t.weekdays("short",!0),1);case"cccc":return qn(t.weekdays("long",!0),1);case"Z":case"ZZ":return Wm(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return Wm(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return Ra(/[a-z_+-/]{1,256}?/i);case" ":return Ra(/[^\S\n\r]/);default:return y(S)}})(e)||{invalidReason:N$};return D.token=e,D}const O$={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function B$(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const o=t[r];let s=r;r==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=n.hour12?"hour12":"hour24");let a=O$[s];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function R$(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function L$(e,t,n){const r=e.match(t);if(r){const i={};let o=1;for(const s in n)if(ko(n,s)){const a=n[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(r.slice(o,o+u))),o+=u}return[r,i]}else return[r,{}]}function j$(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return K(e.z)||(n=Pr.create(e.z)),K(e.Z)||(n||(n=new Ut(e.Z)),r=e.Z),K(e.q)||(e.M=(e.q-1)*3+1),K(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),K(e.u)||(e.S=Id(e.u)),[Object.keys(e).reduce((o,s)=>{const a=t(s);return a&&(o[a]=e[s]),o},{}),n,r]}let Ll=null;function U$(){return Ll||(Ll=Z.fromMillis(1555555555555)),Ll}function _$(e,t){if(e.literal)return e;const n=Pt.macroTokenToFormatOpts(e.val),r=Eg(n,t);return r==null||r.includes(void 0)?e:r}function $g(e,t){return Array.prototype.concat(...e.map(n=>_$(n,t)))}class vg{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=$g(Pt.parseFormat(n),t),this.units=this.tokens.map(r=>M$(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=R$(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=L$(t,this.regex,this.handlers),[i,o,s]=r?j$(r):[null,null,void 0];if(ko(r,"a")&&ko(r,"H"))throw new mo("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Dg(e,t,n){return new vg(e,n).explainFromTokens(t)}function V$(e,t,n){const{result:r,zone:i,specificOffset:o,invalidReason:s}=Dg(e,t,n);return[r,i,o,s]}function Eg(e,t){if(!e)return null;const r=Pt.create(t,e).dtFormatter(U$()),i=r.formatToParts(),o=r.resolvedOptions();return i.map(s=>B$(s,e,o))}const jl="Invalid DateTime",zm=864e13;function Es(e){return new Zn("unsupported zone",`the zone "${e.name}" is not supported`)}function Ul(e){return e.weekData===null&&(e.weekData=wu(e.c)),e.weekData}function _l(e){return e.localWeekData===null&&(e.localWeekData=wu(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function $i(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new Z({...n,...t,old:n})}function xg(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const o=n.offset(r);return i===o?[r,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function La(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function nu(e,t,n){return xg(zu(e),t,n)}function Km(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:r,month:i,day:Math.min(e.c.day,bu(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=ae.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=zu(o);let[u,l]=xg(a,n,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function io(e,t,n,r,i,o){const{setZone:s,zone:a}=n;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=Z.fromObject(e,{...n,zone:u,specificOffset:o});return s?l:l.setZone(a)}else return Z.invalid(new Zn("unparsable",`the input "${i}" can't be parsed as ${r}`))}function ja(e,t,n=!0){return e.isValid?Pt.create(ye.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Vl(e,t,n){const r=e.c.year>9999||e.c.year<0;let i="";if(r&&e.c.year>=0&&(i+="+"),i+=He(e.c.year,r?6:4),n==="year")return i;if(t){if(i+="-",i+=He(e.c.month),n==="month")return i;i+="-"}else if(i+=He(e.c.month),n==="month")return i;return i+=He(e.c.day),i}function Zm(e,t,n,r,i,o,s){let a=!n||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=He(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=He(e.c.minute),s==="minute")break;a&&(u+=":",u+=He(e.c.second))}else{if(u+=He(e.c.minute),s==="minute")break;a&&(u+=He(e.c.second))}if(s==="second")break;a&&(!r||e.c.millisecond!==0)&&(u+=".",u+=He(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?u+="Z":e.o<0?(u+="-",u+=He(Math.trunc(-e.o/60)),u+=":",u+=He(Math.trunc(-e.o%60))):(u+="+",u+=He(Math.trunc(e.o/60)),u+=":",u+=He(Math.trunc(e.o%60)))),o&&(u+="["+e.zone.ianaName+"]"),u}const Cg={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},q$={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},W$={ordinal:1,hour:0,minute:0,second:0,millisecond:0},ru=["year","month","day","hour","minute","second","millisecond"],z$=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],K$=["year","ordinal","hour","minute","second","millisecond"];function iu(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new C0(e);return t}function Gm(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return iu(e)}}function Z$(e){if(xs===void 0&&(xs=je.now()),e.type!=="iana")return e.offset(xs);const t=e.name;let n=Uc.get(t);return n===void 0&&(n=e.offset(xs),Uc.set(t,n)),n}function Ym(e,t){const n=Gr(t.zone,je.defaultZone);if(!n.isValid)return Z.invalid(Es(n));const r=ye.fromObject(t);let i,o;if(K(e.year))i=je.now();else{for(const u of ru)K(e[u])&&(e[u]=Cg[u]);const s=J0(e)||X0(e);if(s)return Z.invalid(s);const a=Z$(n);[i,o]=nu(e,a,n)}return new Z({ts:i,zone:n,loc:r,o})}function Hm(e,t,n){const r=K(n.round)?!0:n.round,i=K(n.rounding)?"trunc":n.rounding,o=(a,u)=>(a=Pd(a,r||n.calendary?0:2,n.calendary?"round":i),t.loc.clone(n).relFormatter(n).format(a,u)),s=a=>n.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(n.unit)return o(s(n.unit),n.unit);for(const a of n.units){const u=s(a);if(Math.abs(u)>=1)return o(u,a)}return o(e>t?-0:0,n.units[n.units.length-1])}function Jm(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let xs;const Uc=new Map;class Z{constructor(t){const n=t.zone||je.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new Zn("invalid input"):null)||(n.isValid?null:Es(n));this.ts=K(t.ts)?je.now():t.ts;let i=null,o=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,o]=[t.old.c,t.old.o];else{const a=Jr(t.o)&&!t.old?t.o:n.offset(this.ts);i=La(this.ts,a),r=Number.isNaN(i.year)?new Zn("invalid input"):null,i=r?null:i,o=r?null:a}this._zone=n,this.loc=t.loc||ye.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new Z({})}static local(){const[t,n]=Jm(arguments),[r,i,o,s,a,u,l]=n;return Ym({year:r,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,n]=Jm(arguments),[r,i,o,s,a,u,l]=n;return t.zone=Ut.utcInstance,Ym({year:r,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,n={}){const r=C2(t)?t.valueOf():NaN;if(Number.isNaN(r))return Z.invalid("invalid input");const i=Gr(n.zone,je.defaultZone);return i.isValid?new Z({ts:r,zone:i,loc:ye.fromObject(n)}):Z.invalid(Es(i))}static fromMillis(t,n={}){if(Jr(t))return t<-zm||t>zm?Z.invalid("Timestamp out of range"):new Z({ts:t,zone:Gr(n.zone,je.defaultZone),loc:ye.fromObject(n)});throw new Nt(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(Jr(t))return new Z({ts:t*1e3,zone:Gr(n.zone,je.defaultZone),loc:ye.fromObject(n)});throw new Nt("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=Gr(n.zone,je.defaultZone);if(!r.isValid)return Z.invalid(Es(r));const i=ye.fromObject(n),o=$u(t,Gm),{minDaysInFirstWeek:s,startOfWeek:a}=Mm(o,i),u=je.now(),l=K(n.specificOffset)?r.offset(u):n.specificOffset,c=!K(o.ordinal),d=!K(o.year),f=!K(o.month)||!K(o.day),y=d||f,C=o.weekYear||o.weekNumber;if((y||c)&&C)throw new mo("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&c)throw new mo("Can't mix ordinal dates with month/day");const D=C||o.weekday&&!y;let S,A,N=La(u,l);D?(S=z$,A=q$,N=wu(N,s,a)):c?(S=K$,A=W$,N=Rl(N)):(S=ru,A=Cg);let U=!1;for(const En of S){const jn=o[En];K(jn)?U?o[En]=A[En]:o[En]=N[En]:U=!0}const W=D?D2(o,s,a):c?E2(o):J0(o),G=W||X0(o);if(G)return Z.invalid(G);const Ue=D?Pm(o,s,a):c?Tm(o):o,[St,at]=nu(Ue,l,r),Ot=new Z({ts:St,zone:r,o:at,loc:i});return o.weekday&&y&&t.weekday!==Ot.weekday?Z.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${Ot.toISO()}`):Ot.isValid?Ot:Z.invalid(Ot.invalid)}static fromISO(t,n={}){const[r,i]=h$(t);return io(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=p$(t);return io(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=g$(t);return io(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(K(t)||K(n))throw new Nt("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=r,s=ye.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[a,u,l,c]=V$(s,t,n);return c?Z.invalid(c):io(a,u,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return Z.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=E$(t);return io(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new Nt("need to specify a reason the DateTime is invalid");const r=t instanceof Zn?t:new Zn(t,n);if(je.throwOnInvalid)throw new Hb(r);return new Z({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=Eg(t,ye.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return $g(Pt.parseFormat(t),ye.fromObject(n)).map(i=>i.val).join("")}static resetCache(){xs=void 0,Uc.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Ul(this).weekYear:NaN}get weekNumber(){return this.isValid?Ul(this).weekNumber:NaN}get weekday(){return this.isValid?Ul(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?_l(this).weekday:NaN}get localWeekNumber(){return this.isValid?_l(this).weekNumber:NaN}get localWeekYear(){return this.isValid?_l(this).weekYear:NaN}get ordinal(){return this.isValid?Rl(this.c).ordinal:NaN}get monthShort(){return this.isValid?Ba.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Ba.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Ba.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Ba.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=zu(this.c),i=this.zone.offset(r-t),o=this.zone.offset(r+t),s=this.zone.offset(r-i*n),a=this.zone.offset(r-o*n);if(s===a)return[this];const u=r-s*n,l=r-a*n,c=La(u,s),d=La(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[$i(this,{ts:u}),$i(this,{ts:l})]:[this]}get isInLeapYear(){return oa(this.year)}get daysInMonth(){return bu(this.year,this.month)}get daysInYear(){return this.isValid?wo(this.year):NaN}get weeksInWeekYear(){return this.isValid?js(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?js(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=Pt.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(Ut.instance(t),n)}toLocal(){return this.setZone(je.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=Gr(t,je.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const o=t.offset(this.ts),s=this.toObject();[i]=nu(s,o,t)}return $i(this,{ts:i,zone:t})}else return Z.invalid(Es(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return $i(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=$u(t,Gm),{minDaysInFirstWeek:r,startOfWeek:i}=Mm(n,this.loc),o=!K(n.weekYear)||!K(n.weekNumber)||!K(n.weekday),s=!K(n.ordinal),a=!K(n.year),u=!K(n.month)||!K(n.day),l=a||u,c=n.weekYear||n.weekNumber;if((l||s)&&c)throw new mo("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new mo("Can't mix ordinal dates with month/day");let d;o?d=Pm({...wu(this.c,r,i),...n},r,i):K(n.ordinal)?(d={...this.toObject(),...n},K(n.day)&&(d.day=Math.min(bu(d.year,d.month),d.day))):d=Tm({...Rl(this.c),...n});const[f,y]=nu(d,this.o,this.zone);return $i(this,{ts:f,o:y})}plus(t){if(!this.isValid)return this;const n=ae.fromDurationLike(t);return $i(this,Km(this,n))}minus(t){if(!this.isValid)return this;const n=ae.fromDurationLike(t).negate();return $i(this,Km(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=ae.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(r.weekNumber=this.weekNumber-1),r.weekday=o}else r.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);r.month=(o-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?Pt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):jl}toLocaleString(t=yu,n={}){return this.isValid?Pt.create(this.loc.clone(n),t).formatDateTime(this):jl}toLocaleParts(t={}){return this.isValid?Pt.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=iu(s);const a=t==="extended";let u=Vl(this,a,s);return ru.indexOf(s)>=3&&(u+="T"),u+=Zm(this,a,n,r,i,o,s),u}toISODate({format:t="extended",precision:n="day"}={}){return this.isValid?Vl(this,t==="extended",iu(n)):null}toISOWeekDate(){return ja(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=iu(a),(i&&ru.indexOf(a)>=3?"T":"")+Zm(this,s==="extended",n,t,r,o,a)):null}toRFC2822(){return ja(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return ja(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Vl(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),ja(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():jl}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return ae.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},o=A2(n).map(ae.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=S$(a,u,o,i);return s?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(Z.now(),t,n)}until(t){return this.isValid?Le.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(n,r)<=i&&i<=o.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||Z.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),Hm(n,this.plus(r),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?Hm(t.base||Z.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(Z.isDateTime))throw new Nt("min requires all arguments be DateTimes");return Om(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(Z.isDateTime))throw new Nt("max requires all arguments be DateTimes");return Om(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:o=null}=r,s=ye.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return Dg(s,t,n)}static fromStringExplain(t,n,r={}){return Z.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,o=ye.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new vg(o,t)}static fromFormatParser(t,n,r={}){if(K(t)||K(n))throw new Nt("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=r,s=ye.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(n.locale))throw new Nt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${n.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=n.explainFromTokens(t);return c?Z.invalid(c):io(a,u,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return yu}static get DATE_MED(){return A0}static get DATE_MED_WITH_WEEKDAY(){return Qb}static get DATE_FULL(){return k0}static get DATE_HUGE(){return F0}static get TIME_SIMPLE(){return S0}static get TIME_WITH_SECONDS(){return N0}static get TIME_WITH_SHORT_OFFSET(){return I0}static get TIME_WITH_LONG_OFFSET(){return P0}static get TIME_24_SIMPLE(){return T0}static get TIME_24_WITH_SECONDS(){return M0}static get TIME_24_WITH_SHORT_OFFSET(){return O0}static get TIME_24_WITH_LONG_OFFSET(){return B0}static get DATETIME_SHORT(){return R0}static get DATETIME_SHORT_WITH_SECONDS(){return L0}static get DATETIME_MED(){return j0}static get DATETIME_MED_WITH_SECONDS(){return U0}static get DATETIME_MED_WITH_WEEKDAY(){return e2}static get DATETIME_FULL(){return _0}static get DATETIME_FULL_WITH_SECONDS(){return V0}static get DATETIME_HUGE(){return q0}static get DATETIME_HUGE_WITH_SECONDS(){return W0}}function fs(e){if(Z.isDateTime(e))return e;if(e&&e.valueOf&&Jr(e.valueOf()))return Z.fromJSDate(e);if(e&&typeof e=="object")return Z.fromObject(e);throw new Nt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var Ve;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Ve||(Ve={}));const G$=[Ve.Milliseconds,Ve.Seconds,Ve.Minutes,Ve.Hours,Ve.Days,Ve.Weeks,Ve.Months,Ve.Years];Ve.Milliseconds+"",Ve.Seconds+"",Ve.Minutes+"",Ve.Hours+"",Ve.Days+"",Ve.Weeks+"",Ve.Months+"",Ve.Years+"";function Y$(e){return G$.filter(t=>e[t])}function _c(e,{decimalCount:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function H$(e){return _c(Math.max(e-.4,0),{decimalCount:0})}function Xm(e){return e===0?0:Math.sign(e)}function Us(e,t,n={}){const r={},i={decimalCount:n.decimalCount==null?void 0:Math.round(Math.abs(n.decimalCount))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=Y$(t).reverse();if(o||s)return a.forEach(c=>{r[c]=o?1/0:-1/0}),r;let u=ae.fromObject(e).as(Ve.Milliseconds);const l=Xm(u);return a.forEach((c,d)=>{const f=d===a.length-1;if(c===Ve.Milliseconds)r.milliseconds=_c(u,i);else{const y=ae.fromObject({milliseconds:u}).as(c),C=Math.sign(y),D=Math.abs(y),S=f?_c(D,i):Math.floor(i.decimalCount==null?D:H$(D)),A=S===0?0:S*C;r[c]=A,u-=ae.fromObject({[c]:A}).as(Ve.Milliseconds),l!==Xm(u)&&(u=0)}}),r}Intl.DateTimeFormat().resolvedOptions().locale;var pt;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(pt||(pt={}));pt.Year,pt.Hour,pt.Minute,pt.Second,pt.Millisecond;pt.Month,pt.Week,pt.Day;pt.Millisecond,pt.Second,pt.Minute,pt.Hour,pt.Day,pt.Week,pt.Month,pt.Year;var It;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(It||(It={}));It.Sunday+"",It.Monday+"",It.Tuesday+"",It.Wednesday+"",It.Thursday+"",It.Friday+"",It.Saturday+"";It.Sunday,It.Monday,It.Tuesday,It.Wednesday,It.Thursday,It.Friday,It.Saturday;var Zt;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Zt||(Zt={}));Zt.January,Zt.February,Zt.March,Zt.April,Zt.May,Zt.June,Zt.July,Zt.August,Zt.September,Zt.October,Zt.November,Zt.December;function Oi(e){const t=new gu,r=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:Us(e,{milliseconds:!0}).milliseconds;return r!==1/0&&r!==-1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}function Ag(...e){const t=e.join(""),n=y0(Array.from(t));return Array.from(n).join("")}function kg(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Fg(e,t){const n=Ag([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Sg(e,n)}function Sg(e,t){const n=Ag(t);return typeof e=="string"?new RegExp(kg(e),n):new RegExp(e.source,n)}function Ng(e,{caseSensitive:t}){const r="".replaceAll("i","");return Sg(e,r)}function Bd(e,t=1){return e.split(`
`).map(n=>["    ".repeat(Math.round(t)),n].join("")).join(`
`)}function Ig(e,t){return t?typeof t=="string"?!!new RegExp(kg(t),"i").exec(e):!!Fg(t,"i").exec(e):!1}class m extends Error{name="AssertionError";constructor(t,n){super(zo(n,t)||"Assertion failed.")}}const Qm={interval:{milliseconds:100},timeout:{seconds:10}},ql=Symbol("not set");async function J$(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:o,options:s}=X$(t),a=Us(s.timeout,{milliseconds:!0}).milliseconds,u=Us(s.interval,{milliseconds:!0});let l=ql,c;async function d(){try{l=n?r():await r(),e(l,...i)}catch(y){l=ql,c=tt(y)}}const f=Date.now();for(;l===ql;)if(await d(),await Oi(u),Date.now()-f>=a){const C=`${o?`${o}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw kd(c,C)}return l}function I(e,t=!1){return((...n)=>J$(e,n,t))}function X$(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Pg(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Pg(e){return{interval:e?.interval||Qm.interval,timeout:e?.timeout||Qm.timeout}}const ms={isFalse(e,t){if(e!==!1)throw new m(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new m(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new m(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new m(`'${h(e)}' is not truthy.`,t)}},Tg={assert:ms,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new m(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new m(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new m(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new m(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:I(ms.isFalse),isFalsy:I(ms.isFalsy),isTrue:I(ms.isTrue),isTruthy:I(ms.isTruthy)}};function Q$(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new m(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new m(`${h(e)} does not end with ${h(t)}}`,n)}function ev(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new m(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new m(`${h(e)} ends with ${h(t)}}`,n)}function tv(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new m(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new m(`${h(e)} does not start with ${h(t)}}`,n)}function nv(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new m(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new m(`${h(e)} starts with ${h(t)}}`,n)}const hs={endsWith:Q$,endsWithout:ev,startsWith:tv,startsWithout:nv},Mg={assert:hs,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new m(`${h(e)} does not end with ${h(t)}}`,n)}else if(e[e.length-1]!==t)throw new m(`${h(e)} does not end with ${h(t)}}`,n);return e}),endsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new m(`${h(e)} ends with ${h(t)}}`,n)}else if(e[e.length-1]===t)throw new m(`${h(e)} ends with ${h(t)}}`,n);return e}),startsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new m(`${h(e)} does not start with ${h(t)}}`,n)}else if(e[0]!==t)throw new m(`${h(e)} does not start with ${h(t)}}`,n);return e}),startsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new m(`${h(e)} starts with ${h(t)}}`,n)}else if(e[0]===t)throw new m(`${h(e)} starts with ${h(t)}}`,n);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:I(hs.endsWith),endsWithout:I(hs.endsWithout),startsWith:I(hs.startsWith),startsWithout:I(hs.startsWithout)}};function rv(e,t,n){const r=zn(t);if(!r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function br(e,t){return zn(t).includes(e)}const Wl={isEnumValue(e,t,n){rv(e,t,n)},isNotEnumValue(e,t,n){const r=zn(t);if(r.includes(e))throw new m(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},Og={assert:Wl,check:{isEnumValue:br,isNotEnumValue(e,t){return!zn(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=zn(t);if(!r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=zn(t);if(r.includes(e))throw new m(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(zn(t).includes(e))return e},isNotEnumValue(e,t){if(!zn(t).includes(e))return e}},waitUntil:{isEnumValue:I(Wl.isEnumValue),isNotEnumValue:I(Wl.isNotEnumValue)}},zl={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new m(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new m(`${h(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new m(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))throw new m("Entries are equal.",n)}},Bg={assert:zl,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],o=t[r];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],o=t[r];return i!==o})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new m(`${h(e)} is not an object.`,n);if(!t||typeof t!="object")throw new m(`${h(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new m(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))return e;throw new m("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:I(zl.entriesEqual),notEntriesEqual:I(zl.notEntriesEqual)}};function vu(e,t){return JSON.stringify(e)===JSON.stringify(t)}function _s(e,t){if(!(e===t||vu(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!vu(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{_s(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${wt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function Cs(e,t){if(e===t||vu(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!vu(n,r)?!1:Object.keys(e).every(o=>Cs(e[o],t[o]))}return!1}const Kl={jsonEquals(e,t,n){try{_s(e,t)}catch(r){throw new m(wt(r),n)}},notJsonEquals(e,t,n){try{_s(e,t)}catch{return}throw new m("Values are JSON equal.",n)}},Rg={assert:Kl,check:{jsonEquals(e,t){return Cs(e,t)},notJsonEquals(e,t){return!Cs(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return _s(e,t),e}catch(r){throw new m(wt(r),n)}},notJsonEquals(e,t,n){try{_s(e,t)}catch{return e}throw new m("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(Cs(e,t))return e},notJsonEquals(e,t){if(!Cs(e,t))return e}},waitUntil:{jsonEquals:I(Kl.jsonEquals),notJsonEquals:I(Kl.notJsonEquals)}};function eh(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Lg(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Lg.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var jg=typeof WeakMap=="function"?WeakMap:Lg;function th(e,t,n){if(!n||Fo(e)||Fo(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}function Ua(e,t,n,r){if(!(!n||Fo(e)||Fo(t))){var i=n.get(e);i?i.set(t,r):(i=new jg,i.set(t,r),n.set(e,i))}}function Wn(e,t,n){if(n&&n.comparator)return nh(e,t,n);var r=Ug(e,t);return r!==null?r:nh(e,t,n)}function Ug(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Fo(e)||Fo(t)?!1:null}function nh(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new jg;var r=n&&n.comparator,i=th(e,t,n.memoize);if(i!==null)return i;var o=th(t,e,n.memoize);if(o!==null)return o;if(r){var s=r(e,t);if(s===!1||s===!0)return Ua(e,t,n.memoize,s),s;var a=Ug(e,t);if(a!==null)return a}var u=eh(e);if(u!==eh(t))return Ua(e,t,n.memoize,!1),!1;Ua(e,t,n.memoize,!0);var l=iv(e,t,u,n);return Ua(e,t,n.memoize,l),l}function iv(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return Wn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return _g(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Ii(e,t,r);case"RegExp":return ov(e,t);case"Generator":return sv(e,t,r);case"DataView":return Ii(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return Ii(new Uint8Array(e),new Uint8Array(t),r);case"Set":return rh(e,t,r);case"Map":return rh(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return uv(e,t,r)}}function ov(e,t){return e.toString()===t.toString()}function rh(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(s,a){r.push([s,a])}),t.forEach(function(s,a){i.push([s,a])}),Ii(r.sort(),i.sort(),n)}function Ii(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Wn(e[i],t[i],n)===!1)return!1;return!0}function sv(e,t,n){return Ii(Vc(e),Vc(t),n)}function av(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function ih(e){if(av(e))try{return Vc(e[Symbol.iterator]())}catch{return[]}return[]}function Vc(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}function oh(e){var t=[];for(var n in e)t.push(n);return t}function sh(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function _g(e,t,n,r){var i=n.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(Wn(e[n[o]],t[n[o]],r)===!1)return!1;return!0}function uv(e,t,n){var r=oh(e),i=oh(t),o=sh(e),s=sh(t);if(r=r.concat(o),i=i.concat(s),r.length&&r.length===i.length)return Ii(ah(r).sort(),ah(i).sort())===!1?!1:_g(e,t,r,n);var a=ih(e),u=ih(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Ii(a,u,n)):r.length===0&&a.length===0&&i.length===0&&u.length===0}function Fo(e){return e===null||typeof e!="object"}function ah(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}class $o extends m{name="DiffError";constructor(t,n,r,i){const o=zb(n,r);super([t,Bd(o)].join(`
`),i)}}function Kr(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const Wr={strictEquals(e,t,n){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Strict reference equality failed for 

${h(t)}

.`,n):new $o("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new m(`Strict reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

strictly equals

${h(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Loose reference equality failed for 

${h(t)}

.`,n):new $o("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new m(`Loose reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

loosely equals

${h(t)}

`,n)},deepEquals(e,t,n){if(!Wn(e,t,{comparator:Kr}))throw new $o("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(Wn(e,t,{comparator:Kr}))throw new m(`

${h(e)}

deeply equals

${h(t)}

`,n)}},Vg=Wr.deepEquals,qg={assert:Wr,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Wn(e,t,{comparator:Kr})},notDeepEquals(e,t){return!Wn(e,t,{comparator:Kr})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Strict reference equality failed for 

${h(t)}

.`,n):new $o("Not strictly equal.",e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e=="object"&&e?new m(`Strict reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

strictly equals

${h(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new m(`Loose reference equality failed for 

${h(t)}

.`,n):new $o("Not loosely equal.",e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e=="object"&&e?new m(`Loose reference INequality failed for 

${h(t)}

.`,n):new m(`

${h(e)}

loosely equals

${h(t)}

`,n);return e},deepEquals(e,t,n){if(Wn(e,t,{comparator:Kr}))return e;throw new $o("Not deeply equal.",e,t,n)},notDeepEquals(e,t,n){if(Wn(e,t,{comparator:Kr}))throw new m(`

${h(e)}

deeply equals

${h(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Wn(e,t,{comparator:Kr}))return e},notDeepEquals(e,t){if(!Wn(e,t,{comparator:Kr}))return e}},waitUntil:{strictEquals:I(Wr.strictEquals),notStrictEquals:I(Wr.notStrictEquals),looseEquals:I(Wr.looseEquals),notLooseEquals:I(Wr.notLooseEquals),deepEquals:I(Wr.deepEquals),notDeepEquals:I(Wr.notDeepEquals)}};function un(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function kn(e,t){return typeof t=="string"?t.includes(e):un(t,e)}const pr={hasValue(e,t,n){if(!un(e,t))throw new m(`'${h(e)}' does not have value '${h(t)}'.`,n)},lacksValue(e,t,n){if(un(e,t))throw new m(`'${h(e)}' has value '${h(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new m(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new m(`'${h(e)}' does not have values '${h(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new m(`'${h(e)}' has values '${h(r)}'.`,n)},isIn(e,t,n){if(!kn(e,t))throw new m(`'${h(e)}'

is not in

${h(t)}.`,n)},isNotIn(e,t,n){if(kn(e,t))throw new m(`'${h(e)}'

is in

${h(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new m(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new m(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new m(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new m(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new m(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new m(`'${h(e)}' is not empty.`,t)}}},Wg={assert:pr,check:{hasValue(e,t){return un(e,t)},lacksValue(e,t){return!un(e,t)},hasValues(e,t){return t.every(n=>un(e,n))},lacksValues(e,t){return t.every(n=>!un(e,n))},isIn(e,t){return kn(e,t)},isNotIn(e,t){return!kn(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!un(e,t))throw new m(`'${h(e)}' does not have value '${h(t)}'.`,n);return e},lacksValue(e,t,n){if(un(e,t))throw new m(`'${h(e)}' has value '${h(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new m(`'${h(e)}' does not have values '${h(t)}'.`,n)}if(r.length)throw new m(`'${h(e)}' does not have values '${h(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new m(`'${h(e)}' has values '${h(r)}'.`,n);return e},isIn(e,t,n){if(!kn(e,t))throw new m(`'${h(e)}'

is not in

${h(t)}.`,n);return e},isNotIn(e,t,n){if(kn(e,t))throw new m(`'${h(e)}'

is in

${h(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new m(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new m(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new m(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new m(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new m(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new m(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(un(e,t))return e},lacksValue(e,t){if(!un(e,t))return e},hasValues(e,t){if(t.every(n=>un(e,n)))return e},lacksValues(e,t){if(!t.every(n=>un(e,n)))return e},isIn(e,t){if(kn(e,t))return e},isNotIn(e,t){if(!kn(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:I(pr.hasValue),lacksValue:I(pr.lacksValue),hasValues:I(pr.hasValues),lacksValues:I(pr.lacksValues),isIn:I(pr.isIn),isNotIn:I(pr.isNotIn),isEmpty:I(pr.isEmpty),isNotEmpty:I(pr.isNotEmpty)}},Zl={isHttpStatus(e,t){if(!br(e,v))throw new m(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(br(e,v)){if(!kn(e,tu[t]))throw new m(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new m(`${h(e)} is not a valid HTTP status.`,n)}},zg={assert:Zl,check:{isHttpStatus(e){return br(e,v)},isHttpStatusCategory(e,t){return br(e,v)&&kn(e,tu[t])}},assertWrap:{isHttpStatus(e,t){if(!br(e,v))throw new m(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(br(e,v)){if(!kn(e,tu[t]))throw new m(`${h(e)} is not a '${t}' HTTP status.`,n)}else throw new m(`${h(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(br(e,v))return e},isHttpStatusCategory(e,t){if(br(e,v)&&kn(e,tu[t]))return e}},waitUntil:{isHttpStatus:I(Zl.isHttpStatus),isHttpStatusCategory:I(Zl.isHttpStatusCategory)}},Gl={instanceOf(e,t,n){if(!(e instanceof t))throw new m(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new m(`'${h(e)}' is an instance of '${t.name}'`,n)}},Kg={assert:Gl,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new m(`'${h(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new m(`'${h(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:I(Gl.instanceOf),notInstanceOf:I(Gl.notInstanceOf)}},lv=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ke(e,t){return lv.some(n=>{try{return n(e,t)}catch{return!1}})}const vi={isKeyOf(e,t,n){if(!ke(t,e))throw new m(`'${String(e)}' is not a key of '${h(t)}'.`,n)},isNotKeyOf(e,t,n){if(ke(t,e))throw new m(`'${String(e)}' is a key of '${h(t)}'.`,n)},hasKey(e,t,n){if(!ke(e,t))throw new m(`'${h(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(ke(e,t))throw new m(`'${h(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!ke(e,i));if(r.length)throw new m(`'${h(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>ke(e,i));if(r.length)throw new m(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n)}},Zg={assert:vi,check:{isKeyOf(e,t){return ke(t,e)},isNotKeyOf(e,t){return!ke(t,e)},hasKey:ke,lacksKey(e,t){return!ke(e,t)},hasKeys(e,t){return t.every(n=>ke(e,n))},lacksKeys(e,t){return t.every(n=>!ke(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!ke(t,e))throw new m(`'${String(e)}' is not a key of '${h(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(ke(t,e))throw new m(`'${String(e)}' is a key of '${h(t)}'.`,n);return e},hasKey(e,t,n){if(!ke(e,t))throw new m(`'${h(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(ke(e,t))throw new m(`'${h(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!ke(e,i));if(r.length)throw new m(`'${h(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>ke(e,i));if(r.length)throw new m(`'${h(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(ke(t,e))return e},isNotKeyOf(e,t){if(!ke(t,e))return e},hasKey(e,t){if(ke(e,t))return e},lacksKey(e,t){if(!ke(e,t))return e},hasKeys(e,t){if(t.every(n=>ke(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!ke(e,n)))return e}},waitUntil:{isKeyOf:I(vi.isKeyOf),isNotKeyOf:I(vi.isNotKeyOf),hasKey:I(vi.hasKey),lacksKey:I(vi.lacksKey),hasKeys:I(vi.hasKeys),lacksKeys:I(vi.lacksKeys)}};function cv(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Te(e).length)<t)throw new m(`Length '${e.length}' is not at least '${t}'.`,n)}function dv(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Te(e).length)!==t)throw new m(`Length '${e.length}' is not exactly '${t}'.`,n)}const Yl={isLengthAtLeast:cv,isLengthExactly:dv},Gg={assert:Yl,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Te(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Te(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Te(e).length)<t)throw new m(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Te(e).length)!==t)throw new m(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Te(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Te(e).length)===t)return e})},waitUntil:{isLengthAtLeast:I(Yl.isLengthAtLeast),isLengthExactly:I(Yl.isLengthExactly)}},fv={never(e){throw new m("This code should not have executed.",e)}},Yg={assert:fv,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Hl={isDefined(e,t){if(e==null)throw new m(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new m(`'${h(e)}' is not a nullish.`,t)}},Hg={assert:Hl,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new m(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new m(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:I(Hl.isDefined),isNullish:I(Hl.isNullish)}},Wt={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new m(`${e} is not within the bounds ${h({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new m(`${e} is not outside the bounds ${h({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new m(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new m(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new m(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new m(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new m(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new m(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new m(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new m(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new m(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new m(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new m(`${e} is within ±${n} of ${t}`,r)}},Jg={assert:Wt,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new m(`${e} is not within the bounds ${h({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new m(`${e} is not outside the bounds ${h({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new m(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new m(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new m(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new m(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new m(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new m(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new m(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new m(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new m(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new m(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new m(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:I(Wt.isInBounds),isOutBounds:I(Wt.isOutBounds),isInteger:I(Wt.isInteger),isNotInteger:I(Wt.isNotInteger),isAbove:I(Wt.isAbove),isAtLeast:I(Wt.isAtLeast),isBelow:I(Wt.isBelow),isAtMost:I(Wt.isAtMost),isNaN:I(Wt.isNaN),isFinite:I(Wt.isFinite),isInfinite:I(Wt.isInfinite),isApproximately:I(Wt.isApproximately),isNotApproximately:I(Wt.isNotApproximately)}};function mv(e,t,n,r,i){return ua(...Gu(e,t,n,r,i),!1)}function Gu(e,t,n,r,i){const o=Array.isArray(n);return[o?e:Vg,o?t:e,o?n:t,o?r:n,o?i:r]}function ua(e,t,n,r,i,o){const s=t(...n);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,r),o?a(l):a()}catch(l){u(new m(`Output from '${t.name}' did not produce expected output. ${wt(l)}`,i))}});try{return e(s,r),o?s:void 0}catch(a){throw new m(`Output from '${t.name}' did not produce expected output. ${wt(a)}`,i)}}function hv(e,t,n,r,i){try{const o=ua(...Gu(e,t,n,r,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function pv(e,t,n,r,i){return ua(...Gu(e,t,n,r,i),!0)}function gv(e,t,n,r,i){try{const o=ua(...Gu(e,t,n,r,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const Jl=Symbol("not set");async function yv(e,t,n,r,i,o){const s=Array.isArray(n),a=s?e:Vg,u=s?t:e,l=s?n:t,c=s?r:n,d=Pg(s?i:r),f=s?o:i,y=Us(d.timeout,{milliseconds:!0}).milliseconds,C=Us(d.interval,{milliseconds:!0});let D=Jl,S;async function A(){try{D=await ua(a,u,l,c,void 0,!0)}catch(U){D=Jl,S=tt(U)}}const N=Date.now();for(;D===Jl;)if(await A(),await Oi(C),Date.now()-N>=y)throw kd(S,zo(f,`Timeout of '${y}' milliseconds exceeded waiting for callback value to match expectations`));return D}const wv={output:mv},Xg={assert:wv,check:{output:hv},assertWrap:{output:pv},checkWrap:{output:gv},waitUntil:{output:yv}},ps={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new m(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new m(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new m(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new m(`'${h(e)}' is not a Primitive.`,t)}},Qg={assert:ps,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new m(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new m(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new m(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new m(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:I(ps.isNotPrimitive),isNotPropertyKey:I(ps.isNotPropertyKey),isPrimitive:I(ps.isPrimitive),isPropertyKey:I(ps.isPropertyKey)}},gs={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new m(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new m(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new m(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new m(`'${h(e)}' is a Promise.`,t)}},ey={assert:gs,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new m(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new m(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new m(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new m(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:I(gs.isPromiseLike,!0),isNotPromiseLike:I(gs.isNotPromiseLike,!0),isPromise:I(gs.isPromise,!0),isNotPromise:I(gs.isNotPromise,!0)}},Xl={matches(e,t,n){if(!t.test(e))throw new m(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new m(`'${e}' matches ${t}`,n)}},ty={assert:Xl,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new m(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new m(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:I(Xl.matches,!0),mismatches:I(Xl.mismatches,!0)}},Ie={isArray(e,t){if(!Array.isArray(e))throw new m(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new m(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new m(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new m(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new m(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new m(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new m(`'${h(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const n=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new m(`'${h(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new m(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new m(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new m(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new m(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new m(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new m(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new m(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new m(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new m(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new m(`'${h(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const n=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new m(`'${h(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new m(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new m(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new m(`'${h(e)}' is a undefined.`,t)}},ny={assert:Ie,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new m(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new m(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new m(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new m(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new m(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new m(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new m(`'${h(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const n=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new m(`'${h(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new m(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new m(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new m(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new m(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new m(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new m(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new m(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new m(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new m(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new m(`'${h(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const n=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new m(`'${h(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new m(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new m(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new m(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:I(Ie.isArray),isBigInt:I(Ie.isBigInt),isBoolean:I(Ie.isBoolean),isFunction:I(Ie.isFunction),isNull:I(Ie.isNull),isNumber:I(Ie.isNumber),isObject:I(Ie.isObject),isPlainObject:I(Ie.isPlainObject),isString:I(Ie.isString),isSymbol:I(Ie.isSymbol),isUndefined:I(Ie.isUndefined),isNotArray:I(Ie.isNotArray),isNotBigInt:I(Ie.isNotBigInt),isNotBoolean:I(Ie.isNotBoolean),isNotFunction:I(Ie.isNotFunction),isNotNull:I(Ie.isNotNull),isNotNumber:I(Ie.isNotNumber),isNotObject:I(Ie.isNotObject),isNotPlainObject:I(Ie.isNotPlainObject),isNotString:I(Ie.isNotString),isNotSymbol:I(Ie.isNotSymbol),isNotUndefined:I(Ie.isNotUndefined)}};var Gt;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Gt||(Gt={}));function Rd(e,t,n){Ld(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n)}function uh(e,t,n){Ld(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,n)}function Ld(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new m(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=wt(e);if(typeof n.matchMessage=="string"){if(!Ig(i,n.matchMessage))throw new m(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new m(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new m(t.notInstance,r);else throw new m(t.noError,r)}function lh(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=wt(e);if(typeof t.matchMessage=="string"){if(!Ig(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Yu(e,t,n,r){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,a)=>{try{await o}catch(u){i=tt(u)}try{uh(i,n,r),e===Gt.Assert?s():e===Gt.Check?s(!0):s(i)}catch(u){e===Gt.CheckWrap?s(void 0):e===Gt.Check?s(!1):a(tt(u))}})}catch(o){i=tt(o)}try{return uh(i,n,r),e===Gt.Check?!0:e!==Gt.Assert?i:void 0}catch(o){if(e===Gt.CheckWrap)return;if(e===Gt.Check)return!1;throw o}}function bv(e,t,n){return Yu(Gt.Assert,e,t,n)}function $v(e,t){return Yu(Gt.Check,e,t)}function vv(e,t,n){return Yu(Gt.AssertWrap,e,t,n)}function Dv(e,t,n){return Yu(Gt.CheckWrap,e,t,n)}const Ev=I(Rd);function xv(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${h(o)}'`);return Ev(i,async()=>{try{await o();return}catch(u){return tt(u)}},a,s)}const Cv={throws:bv,isError:Rd},ry={assert:Cv,check:{throws:$v,isError(e,t){return lh(e,t)}},assertWrap:{throws:vv,isError(e,t,n){return Ld(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:Dv,isError(e,t){if(lh(e,t))return e}},waitUntil:{throws:xv,isError:I(Rd)}},Zr=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Ql={isUuid(e,t){if(!String(e).match(Zr))throw new m(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Zr))throw new m(`'${String(e)}' is a UUID.`,t)}},iy={assert:Ql,check:{isUuid(e){return!!String(e).match(Zr)},isNotUuid(e){return!String(e).match(Zr)}},assertWrap:{isUuid(e,t){if(!String(e).match(Zr))throw new m(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Zr))throw new m(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Zr))return e},isNotUuid(e){if(!String(e).match(Zr))return e}},waitUntil:{isUuid:I(Ql.isUuid),isNotUuid:I(Ql.isNotUuid)}},Av={...Yg.assert,...Tg.assert,...Mg.assert,...Bg.assert,...Og.assert,...zg.assert,...Kg.assert,...Rg.assert,...Zg.assert,...Gg.assert,...Hg.assert,...Jg.assert,...Xg.assert,...Qg.assert,...ey.assert,...ty.assert,...ny.assert,...qg.assert,...ry.assert,...iy.assert,...Wg.assert},jd=[Tg,Mg,Bg,Og,zg,Kg,Rg,Zg,Gg,Yg,Hg,Jg,Xg,Qg,ey,ty,ny,qg,ry,iy,Wg],kv=Object.assign({},...jd.map(e=>e.check)),k=Object.assign(function(t){return!!t},kv);function Fv(e,t,n){return ou(e,t,n,new Set)}function ou(e,t,n,r){if(e=ch(e),t=ch(t),k.isObject(e)&&k.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!ou(Te(e).sort(),Te(t).sort(),n,r))return!1;let i=!1;const o=Te(e).map(s=>{const a=ou(e[s],t[s],n,r);return k.isPromise(a)&&(i=!0),a});return dh(i,o)}else if(k.isArray(e)&&k.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,a)=>{const u=ou(s,t[a],n,r);return k.isPromise(u)&&(i=!0),u});return dh(i,o)}else return n(e,t)}function ch(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function dh(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(k.isTrue))}catch(i){r(tt(i))}}):t.every(k.isTrue)}const Sv=Object.assign({},...jd.map(e=>e.assertWrap)),ti=Object.assign(function(t,n){if(!t)throw new m("Assertion failed.",n);return t},Sv);function Nv(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const Iv={tsType:Nv},Pv={assert:Iv},Tv={fail:e=>{throw new m("Failure triggered.",e)}},Mv={...Pv.assert,...Av,...Tv},Tn=Object.assign(function(t,n){if(!t)throw new m("Assertion failed.",n)},Mv),Ov=Object.assign({},...jd.map(e=>e.checkWrap)),Bv=Object.assign(function(t){if(t)return t},Ov);function Rv(e,t){return k.hasKey(e,"entryType")&&e.entryType===t}function oo(e,t){return e.controlType===t}var J;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(J||(J={}));const oy=Symbol("any-type"),Lv={[J.Checkbox]:!1,[J.Color]:"",[J.Dropdown]:"",[J.Hidden]:oy,[J.Number]:0,[J.Text]:""};function jv(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,i])=>{const o=Lv[i.controlType];o!==oy&&(typeof o!=typeof i.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function Uv(e,t,n){const r=t;if(e.has(r))return e.get(r);{const i=n();return k.isPromise(i)?new Promise(async(o,s)=>{try{const a=await i;e.set(r,a),o(a)}catch(a){s(tt(a))}}):(e.set(r,i),i)}}function la(e,t,n){if(t in e)return e[t];{const r=n();return k.isPromise(r)?new Promise(async(i,o)=>{try{const s=await r;e[t]=s,i(s)}catch(s){o(tt(s))}}):(e[t]=r,r)}}function Hu(e){return Te(e).map(t=>[t,e[t]])}function Vs(e){return Object.fromEntries(e)}function qi(e,t,n){return e.reduce((r,i,o,s)=>{const a=t(i,o,s);return n(a,i,o,s)&&r.push(a),r},[])}function _v(e,t,n={}){try{let r=!1;const i=e.map((o,s,a)=>{const u=t(o,s,a);return u instanceof Promise?(r=!0,u):u?[u.key,u.value]:void 0}).filter(k.isTruthy);return r?new Promise(async(o,s)=>{try{const a=qi(await Promise.all(i),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},k.isTruthy);o(Vs(a))}catch(a){s(tt(a))}}):Vs(i)}catch(r){throw tt(r)}}function Vv(e){return Array.isArray(e)?e:[e]}function qv({min:e,max:t}){const{min:n,max:r}=x0({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const a=Math.floor(256**s/i)*i,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,f)=>c+d*256**f,0);while(l>=a);return n+l%i}const fh=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Pi(e=16){let t="";for(let n=0;n<e;n++){const r=qv({min:0,max:fh.length-1});t+=fh[r]}return t}function sy(e){if(k.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>wt(t).trim()).join(`
`))}function Wv(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const zv="modulepreload",Kv=function(e){return"/vira/book/"+e},mh={},Du=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");i=u(n.map(l=>{if(l=Kv(l),l in mh)return;mh[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":zv,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((y,C)=>{f.addEventListener("load",y),f.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};var ut;(function(e){e.Standard="stdout",e.Error="stderr"})(ut||(ut={}));var ne;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ne||(ne={}));async function Zv(){return await E0({async[Hn.Node](){const e=(await Du(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[ne.Bold]:e.bold.open,[ne.Debug]:e.blueBright.open,[ne.Error]:e.red.open,[ne.Faint]:e.gray.open,[ne.Info]:e.cyan.open,[ne.Mutate]:e.magenta.open,[ne.NormalWeight]:"\x1B[22m",[ne.Plain]:"",[ne.Reset]:e.reset.open,[ne.Success]:e.green.open,[ne.Warning]:e.yellow.open}},[Hn.Web](){return Promise.resolve({[ne.Bold]:"font-weight: bold",[ne.Debug]:"color: blue",[ne.Error]:"color: red",[ne.Faint]:"color: grey",[ne.Info]:"color: teal",[ne.Mutate]:"color: magenta",[ne.NormalWeight]:"",[ne.Plain]:"",[ne.Reset]:"",[ne.Success]:"color: green",[ne.Warning]:"color: orange"})}})}const an=await Zv(),Gv={[ne.Bold]:{colors:[an.bold],logType:ut.Standard},[ne.Debug]:{colors:[an.debug],logType:ut.Standard},[ne.Faint]:{colors:[an.faint],logType:ut.Standard},[ne.Info]:{colors:[an.info],logType:ut.Standard},[ne.Mutate]:{colors:[an.mutate,an.bold],logType:ut.Standard},[ne.NormalWeight]:{colors:[an.normalWeight],logType:ut.Standard},[ne.Plain]:{colors:[],logType:ut.Standard},[ne.Reset]:{colors:[an.reset],logType:ut.Standard},[ne.Success]:{colors:[an.success,an.bold],logType:ut.Standard},[ne.Error]:{colors:[an.error,an.bold],logType:ut.Error},[ne.Warning]:{colors:[an.warning],logType:ut.Error}};function Qt({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function vo({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function Yv(e,t){try{let n=!1;const r=Hu(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(n=!0,s):s?[s.key,s.value]:void 0}).filter(k.isTruthy);return n?new Promise(async(i,o)=>{try{const s=qi(await Promise.all(r),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},k.isTruthy);i(Vs(s))}catch(s){o(tt(s))}}):Vs(r)}catch(n){throw tt(n)}}function Hv(e,t){return Yv(e,(n,r)=>{const i=r,o=t(r,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function ay(e,...t){const n={...e};return t.forEach(r=>{r&&Hu(r).forEach(([i,o])=>{o!=null&&(n[i]=o)})}),n}const Jv="px";function uy(e){return Ud({value:e,suffix:Jv})}function Ud({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Xv({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function Qv(){return await E0({async[Hn.Node](){const{inspect:e}=await Du(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[ne.Reset].colors.join("")].join(""),css:void 0}}},[Hn.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:qi(n.colorConfig[t].colors,s=>Xv({value:s,suffix:";"}),k.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?wt(s):h(s)).join(`
`),n.omitColors?"":n.colorConfig[ne.Reset].colors.join("")].join(""),css:r}}}})}const eD=await Qv(),tD={colorConfig:Gv,omitColors:!1},nD=ly({[ut.Error](){},[ut.Standard](){}});function ly(e,t){const n=ay(tD,t);function r(o){e[n.colorConfig[o.colorKey].logType](eD({...o,options:n}))}const i=Hv(ne,o=>(...s)=>r({args:s,colorKey:o}));return{...i,if(o){return o?i:nD}}}const rD=Ad(Hn.Node)?{[ut.Error]({text:e}){process.stderr.write(e+`
`)},[ut.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[ut.Error]({text:e,css:t}){console.error(Qt({value:e,prefix:"%c"}),t)},[ut.Standard]({text:e,css:t}){console.log(Qt({value:e,prefix:"%c"}),t)}},iD=ly(rD);function oD(e,{min:t,max:n}){return Math.min(Math.max(e,t),n)}function sD({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){const i=Fg(Ng(t,{caseSensitive:n}),"g"),o=[];return e.replace(i,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);o.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),o}function aD(e,t,{caseSensitive:n}){const r=sD({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=Ng(t,{caseSensitive:n});return e.split(i).reduce((s,a,u)=>{const l=r[u],c=s.concat(a);if(l){const d=e.slice(l.index,l.index+l.length);return c.concat(d)}else return c},[])}function uD(e,t){return e.split(t)}function hh(e,t){const{min:n,max:r}=x0(t);if(t.takeOverflow){const i=r-n+1,o=(e-n)%i;return o<0?n+i+o:n+o}else return e>r?n:e<n?r:e}function hn(e,t){let n=!1;const r=Te(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(n=!0),i[o]=s,i},{});return n?new Promise(async(i,o)=>{try{await Promise.all(Te(r).map(async s=>{const a=await r[s];r[s]=a})),i(r)}catch(s){o(tt(s))}}):r}function _d(e,t){const n=Hu(e).filter(([r,i])=>t(r,i,e));return Vs(n)}function lD(e,t){return _d(e,n=>!t.includes(n))}function qc(e){return Te(e).map(t=>e[t])}function cy(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var ni;(function(e){e.Upper="upper",e.Lower="lower"})(ni||(ni={}));const cD={firstLetterCase:ni.Lower};function dD(e,t){if(!e.length)return"";const n=e[0];return(t===ni.Upper?n.toUpperCase():n.toLowerCase())+e.slice(1)}function fD(e){return e.toLowerCase()!==e.toUpperCase()}function ph(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(fD(r)){if(t===ni.Upper&&r!==r.toUpperCase()||t===ni.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function mD(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""}),i=ay(cD,t);return dD(r,i.firstLetterCase)}function hD(e){return e.split("").reduce((n,r,i,o)=>{const s=i>0&&o[i-1]||"",a=i<o.length-1&&o[i+1]||"",u=ph(s,ni.Lower,{rejectNoCaseCharacters:!0})||ph(a,ni.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function pD(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function gD({value:e,wrapper:t}){return Qt({value:Ud({value:e,suffix:t}),prefix:t})}function rr(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function Vd(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}class yD{listeners={};universalListeners=new Map;getListenerCount(){return qc(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)+this.universalListeners.size}listenToAll(t,n={}){const r=()=>this.universalListeners.delete(t)||!1;function i(o,s){n.once&&r(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:r}),r}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,n,r={}){const i=k.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(n)||!1;function s(a,u){r.once&&o(),n(a,u)}return la(this.listeners,i,()=>new Map).set(n,{listener:s,removeListener:o}),o}removeListener(t,n){const r=k.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const o=i.get(n);return o?o.removeListener():!1}dispatch(t){const n=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),r+this.universalListeners.size}removeAllListeners(){const n=qc(this.listeners).reduce((r,i)=>{const o=i.size||0;return i.clear(),r+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),n}destroy(){this.removeAllListeners()}}class qd extends yD{}function dy(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Wc(e,t,n){return dy(globalThis,e,t,n)}function Wd(e,t){return Eu(e.title),e.parent?[...Wd(e.parent),Eu(e.parent.title)].concat([]):[]}function Eu(e){return cy(e).toLowerCase().replaceAll(/\s/g,"-")}function wD({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}const bD={[Dt.ElementExample]:()=>[],[Dt.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...jv(e.controls,e.title)].filter(k.isTruthy),[Dt.Root]:()=>[]},xu="_isBookTreeNode",fy=new Map;function $D(e){return fy.get(e)}function vD(e,t){Uv(fy,e,()=>t)}function Do(e,t){return my(e)&&e.entry.entryType===t}function my(e){return!!(k.hasKeys(e,[xu,"entry"])&&e[xu])}function DD(){return{[xu]:!0,entry:{entryType:Dt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function ED({entries:e,debug:t}){const n=$D(e);if(n)return n;const r=DD();e.forEach(s=>zd({tree:r,newEntry:s,debug:t,manuallyAdded:!0}));const i=hy(r),o={tree:r,flattenedNodes:i};return vD(e,o),t&&console.info("element-book tree:",r),o}function xD(e,t,n){if(!t.parent)return e;const r=zc(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),zd({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const i=zc(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${Wd(t).join(" > ")}`);return i}function zd({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const i=bD[t.entryType](t);t.errors.push(...i);const o=xD(e,t,n),s=Eu(t.title),a=o.children[s];if(a){if(r){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[xu]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:r};o.children[s]=u,Rv(t,Dt.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>zd({tree:e,newEntry:l,debug:n,manuallyAdded:r}))}function zc(e,t){const n=my(e)?e.fullUrlBreadcrumbs.slice(0,-1):Wd(e);return n.length?n.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function hy(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>hy(i));return[e,...n].flat()}function Kd(e,t){return Zd(e,["",...t],void 0)}function Zd(e,t,n){const r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);const o=e.children[i||""],s=o&&Zd(o,r,n);return{...e.controls,...s}}function CD(e,t,n){const r={...e};return Zd(r,["",...t],n),r}function py(e,t){const n=t?.controls||(Do(e,Dt.Page)?hn(e.entry.controls,(i,o)=>o.initValue):{});return{children:hn(e.children,(i,o)=>py(o,t?.children?.[o.urlBreadcrumb])),controls:n}}function xe(e){const t={...e,entryType:Dt.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const i={...r,isVertical:t.useVerticalExamples,entryType:Dt.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(k.isTruthy)};n.add(r.title),t.elementExamples[Eu(i.title)]=i}}),t}var Yt;(function(e){e.Search="search",e.Book="book"})(Yt||(Yt={}));function Kc(e){return e[0]===Yt.Book?"":e[1]?decodeURIComponent(e[1]):""}const So={hash:void 0,paths:[Yt.Book],search:void 0};const su=globalThis,Gd=su.ShadowRoot&&(su.ShadyCSS===void 0||su.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yd=Symbol(),gh=new WeakMap;let gy=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Yd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Gd&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=gh.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&gh.set(n,t))}return t}toString(){return this.cssText}};const et=e=>new gy(typeof e=="string"?e:e+"",void 0,Yd),au=(e,...t)=>{const n=e.length===1?e[0]:t.reduce(((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new gy(n,e,Yd)},AD=(e,t)=>{if(Gd)e.adoptedStyleSheets=t.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of t){const r=document.createElement("style"),i=su.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},yh=Gd?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return et(n)})(e):e;const{is:kD,defineProperty:FD,getOwnPropertyDescriptor:SD,getOwnPropertyNames:ND,getOwnPropertySymbols:ID,getPrototypeOf:PD}=Object,Ju=globalThis,wh=Ju.trustedTypes,TD=wh?wh.emptyScript:"",MD=Ju.reactiveElementPolyfillSupport,Ns=(e,t)=>e,Cu={toAttribute(e,t){switch(t){case Boolean:e=e?TD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Hd=(e,t)=>!kD(e,t),bh={attribute:!0,type:String,converter:Cu,reflect:!1,useDefault:!1,hasChanged:Hd};Symbol.metadata??=Symbol("metadata"),Ju.litPropertyMetadata??=new WeakMap;let fo=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=bh){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&FD(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=SD(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get:i,set(s){const a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??bh}static _$Ei(){if(this.hasOwnProperty(Ns("elementProperties")))return;const t=PD(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ns("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ns("properties"))){const n=this.properties,r=[...ND(n),...ID(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(yh(i))}else t!==void 0&&n.push(yh(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return AD(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:Cu).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Cu;this._$Em=i;const a=s.fromAttribute(n,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){const i=this.constructor,o=this[t];if(r??=i.getPropertyOptions(t),!((r.hasChanged??Hd)(o,n)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??n??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};fo.elementStyles=[],fo.shadowRootOptions={mode:"open"},fo[Ns("elementProperties")]=new Map,fo[Ns("finalized")]=new Map,MD?.({ReactiveElement:fo}),(Ju.reactiveElementVersions??=[]).push("2.1.1");const Jd=globalThis,Au=Jd.trustedTypes,$h=Au?Au.createPolicy("lit-html",{createHTML:e=>e}):void 0,yy="$lit$",Yr=`lit$${Math.random().toFixed(9).slice(2)}$`,wy="?"+Yr,OD=`<${wy}>`,Bi=document,qs=()=>Bi.createComment(""),Ws=e=>e===null||typeof e!="object"&&typeof e!="function",Xd=Array.isArray,BD=e=>Xd(e)||typeof e?.[Symbol.iterator]=="function",ec=`[ 	
\f\r]`,ys=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vh=/-->/g,Dh=/>/g,Di=RegExp(`>|${ec}(?:([^\\s"'>=/]+)(${ec}*=${ec}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Eh=/'/g,xh=/"/g,by=/^(?:script|style|textarea|title)$/i,RD=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),LD=RD(1),pn=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),Ch=new WeakMap,Fi=Bi.createTreeWalker(Bi,129);function $y(e,t){if(!Xd(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return $h!==void 0?$h.createHTML(t):t}const jD=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=ys;for(let a=0;a<n;a++){const u=e[a];let l,c,d=-1,f=0;for(;f<u.length&&(s.lastIndex=f,c=s.exec(u),c!==null);)f=s.lastIndex,s===ys?c[1]==="!--"?s=vh:c[1]!==void 0?s=Dh:c[2]!==void 0?(by.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Di):c[3]!==void 0&&(s=Di):s===Di?c[0]===">"?(s=i??ys,d=-1):c[1]===void 0?d=-2:(d=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?Di:c[3]==='"'?xh:Eh):s===xh||s===Eh?s=Di:s===vh||s===Dh?s=ys:(s=Di,i=void 0);const y=s===Di&&e[a+1].startsWith("/>")?" ":"";o+=s===ys?u+OD:d>=0?(r.push(l),u.slice(0,d)+yy+u.slice(d)+Yr+y):u+Yr+(d===-2?a:y)}return[$y(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class zs{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=t.length-1,u=this.parts,[l,c]=jD(t,n);if(this.el=zs.createElement(l,r),Fi.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Fi.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(yy)){const f=c[s++],y=i.getAttribute(d).split(Yr),C=/([.?@])?(.*)/.exec(f);u.push({type:1,index:o,name:C[2],strings:y,ctor:C[1]==="."?_D:C[1]==="?"?VD:C[1]==="@"?qD:Xu}),i.removeAttribute(d)}else d.startsWith(Yr)&&(u.push({type:6,index:o}),i.removeAttribute(d));if(by.test(i.tagName)){const d=i.textContent.split(Yr),f=d.length-1;if(f>0){i.textContent=Au?Au.emptyScript:"";for(let y=0;y<f;y++)i.append(d[y],qs()),Fi.nextNode(),u.push({type:2,index:++o});i.append(d[f],qs())}}}else if(i.nodeType===8)if(i.data===wy)u.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(Yr,d+1))!==-1;)u.push({type:7,index:o}),d+=Yr.length-1}o++}}static createElement(t,n){const r=Bi.createElement("template");return r.innerHTML=t,r}}function No(e,t,n=e,r){if(t===pn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const o=Ws(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=No(e,i._$AS(e,t.values),i,r)),t}let UD=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??Bi).importNode(n,!0);Fi.currentNode=i;let o=Fi.nextNode(),s=0,a=0,u=r[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new Ho(o,o.nextSibling,this,t):u.type===1?l=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(l=new WD(o,this,t)),this._$AV.push(l),u=r[++a]}s!==u?.index&&(o=Fi.nextNode(),s++)}return Fi.currentNode=Bi,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class Ho{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=No(this,t,n),Ws(t)?t===te||t==null||t===""?(this._$AH!==te&&this._$AR(),this._$AH=te):t!==this._$AH&&t!==pn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):BD(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==te&&Ws(this._$AH)?this._$AA.nextSibling.data=t:this.T(Bi.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=zs.createElement($y(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const o=new UD(i,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(t){let n=Ch.get(t.strings);return n===void 0&&Ch.set(t.strings,n=new zs(t)),n}k(t){Xd(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Ho(this.O(qs()),this.O(qs()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Xu{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=te,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=te}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=No(this,t,n,0),s=!Ws(t)||t!==this._$AH&&t!==pn,s&&(this._$AH=t);else{const a=t;let u,l;for(t=o[0],u=0;u<o.length-1;u++)l=No(this,a[r+u],n,u),l===pn&&(l=this._$AH[u]),s||=!Ws(l)||l!==this._$AH[u],l===te?t=te:t!==te&&(t+=(l??"")+o[u+1]),this._$AH[u]=l}s&&!i&&this.j(t)}j(t){t===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _D extends Xu{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===te?void 0:t}}class VD extends Xu{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==te)}}class qD extends Xu{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=No(this,t,n,0)??te)===pn)return;const r=this._$AH,i=t===te&&r!==te||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==te&&(r===te||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class WD{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){No(this,t)}}const zD={I:Ho},KD=Jd.litHtmlPolyfillSupport;KD?.(zs,Ho),(Jd.litHtmlVersions??=[]).push("3.3.1");const ZD=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const o=n?.renderBefore??null;r._$litPart$=i=new Ho(t.insertBefore(qs(),o),o,void 0,n??{})}return i._$AI(e),i};const Qd=globalThis;let Is=class extends fo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ZD(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return pn}};Is._$litElement$=!0,Is.finalized=!0,Qd.litElementHydrateSupport?.({LitElement:Is});const GD=Qd.litElementPolyfillSupport;GD?.({LitElement:Is});(Qd.litElementVersions??=[]).push("4.2.1");function Or(e){if(k.isObject(e))return hn(e,(n,r)=>{if(!k.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(hD(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const o=r,s=n.startsWith("--")?et(n):n.startsWith("-")?au`-${et(n)}`:au`--${et(n)}`;return{name:s,value:au`var(${s}, ${et(o)})`,default:String(o)}});throw new TypeError(`Invalid setup input for '${Or.name}' function.`)}function YD({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}const he=Or({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),HD={nav:{hover:{background:he["element-book-nav-hover-background-color"],foreground:he["element-book-nav-hover-foreground-color"]},active:{background:he["element-book-nav-active-background-color"],foreground:he["element-book-nav-active-foreground-color"]},selected:{background:he["element-book-nav-selected-background-color"],foreground:he["element-book-nav-selected-foreground-color"]}},accent:{icon:he["element-book-accent-icon-color"]},page:{background:he["element-book-page-background-color"],backgroundFaint1:he["element-book-page-background-faint-level-1-color"],backgroundFaint2:he["element-book-page-background-faint-level-2-color"],foreground:he["element-book-page-foreground-color"],foregroundFaint1:he["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:he["element-book-page-foreground-faint-level-2-color"]}};function JD(e,t){vy(e,t,HD)}function Zc(e){return k.hasKey(e,"_$cssResult$")}function Ah(e){return k.hasKeys(e,["name","value","default"])&&k.isString(e.default)&&Zc(e.name)&&Zc(e.value)}function vy(e,t,n){Object.entries(t).forEach(([r,i])=>{const o=n[r];if(!o)throw new Error(`no nestedCssVar at key '${r}'`);if(Zc(i)){if(!Ah(o))throw new Error(`got a CSS result at '${r}' but no CSS var`);YD({forCssVar:o,onElement:e,toValue:String(i)})}else{if(Ah(o))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);vy(e,i,o)}})}function Se(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let r=t[0].length,i=t[0].map((s,a)=>t.map(u=>u[a])),o=e.map(s=>i.map(a=>{let u=0;if(!Array.isArray(s)){for(let l of a)u+=s*l;return u}for(let l=0;l<s.length;l++)u+=s[l]*(a[l]||0);return u}));return n===1&&(o=o[0]),r===1?o.map(s=>s[0]):o}function ca(e){return Xr(e)==="string"}function Xr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function ku(e,{precision:t,unit:n}){return ri(e)?"none":Dy(e,t)+(n??"")}function ri(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function Xe(e){return ri(e)?0:e}function Dy(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const i=10**(t-r);return Math.floor(e*i+.5)/i}const XD={deg:1,grad:.9,rad:180/Math.PI,turn:360};function Ey(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let o=e.match(t);if(o){let s=[];return o[2].replace(i,(a,u)=>{let l=u.match(r),c=u;if(l){let d=l[0],f=c.slice(0,-d.length);d==="%"?(c=new Number(f/100),c.type="<percentage>"):(c=new Number(f*XD[d]),c.type="<angle>",c.unit=d)}else n.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),s.push(c)}),{name:o[1].toLowerCase(),rawName:o[1],rawArgs:o[2],args:s}}}function xy(e){return e[e.length-1]}function Ks(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function Cy(e,t,n){return(n-e)/(t-e)}function ef(e,t,n){return Ks(t[0],t[1],Cy(e[0],e[1],n))}function Ay(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let i=new String(r[1]);return i.range=[+r[2],+r[3]],i}return n}))}function ky(e,t,n){return Math.max(Math.min(n,t),e)}function Qu(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function ar(e,t){return Qu(Math.abs(e)**t,e)}function tf(e,t){return t===0?0:e/t}function Fy(e,t,n=0,r=e.length){for(;n<r;){const i=n+r>>1;e[i]<t?n=i+1:r=i}return n}var QD=Object.freeze({__proto__:null,bisectLeft:Fy,clamp:ky,copySign:Qu,interpolate:Ks,interpolateInv:Cy,isNone:ri,isString:ca,last:xy,mapRange:ef,multiplyMatrices:Se,parseCoordGrammar:Ay,parseFunction:Ey,serializeNumber:ku,skipNone:Xe,spow:ar,toPrecision:Dy,type:Xr,zdiv:tf});class e5{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],n&&this[i][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const ii=new e5;var gn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const _t={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Gc(e){return Array.isArray(e)?e:_t[e]}function Fu(e,t,n,r={}){if(e=Gc(e),t=Gc(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(ii.run("chromatic-adaptation-start",i),i.M||(i.W1===_t.D65&&i.W2===_t.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===_t.D50&&i.W2===_t.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ii.run("chromatic-adaptation-end",i),i.M)return Se(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const t5=new Set(["<number>","<percentage>","<angle>"]);function kh(e,t,n,r){return Object.entries(e.coords).map(([o,s],a)=>{let u=t.coordGrammar[a],l=r[a],c=l?.type,d;if(l.none?d=u.find(C=>t5.has(C)):d=u.find(C=>C==c),!d){let C=s.name||o;throw new TypeError(`${c??l.raw} not allowed for ${C} in ${n}()`)}let f=d.range;c==="<percentage>"&&(f||=[0,1]);let y=s.range||s.refRange;return f&&y&&(r[a]=ef(f,y,r[a])),d})}function Sy(e,{meta:t}={}){let n={str:String(e)?.trim()};if(ii.run("parse-start",n),n.color)return n.color;if(n.parsed=Ey(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let i=n.parsed.args.shift(),o=i.startsWith("--")?i.substring(2):`--${i}`,s=[i,o],a=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let c of j.all){let d=c.getFormat("color");if(d&&(s.includes(d.id)||d.ids?.filter(f=>s.includes(f)).length)){const f=Object.keys(c.coords).map((C,D)=>n.parsed.args[D]||0);let y;return d.coordGrammar&&(y=kh(c,d,"color",f)),t&&Object.assign(t,{formatId:"color",types:y}),d.id.startsWith("--")&&!i.startsWith("--")&&gn.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${d.id}) instead of color(${i}).`),i.startsWith("--")&&!d.id.startsWith("--")&&gn.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${d.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:f,alpha:a}}}let u="",l=i in j.registry?i:o;if(l in j.registry){let c=j.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of j.all){let o=i.getFormat(r);if(o&&o.type==="function"){let s=1;(o.lastAlpha||xy(n.parsed.args).alpha)&&(s=n.parsed.args.pop());let a=n.parsed.args,u;return o.coordGrammar&&(u=kh(i,o,r,a)),t&&Object.assign(t,{formatId:o.name,types:u}),{spaceId:i.id,coords:a,alpha:s}}}}else for(let r of j.all)for(let i in r.formats){let o=r.formats[i];if(o.type!=="custom"||o.test&&!o.test(n.str))continue;let s=o.parse(n.str);if(s)return s.alpha??=1,t&&(t.formatId=i),s}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function X(e){if(Array.isArray(e))return e.map(X);if(!e)throw new TypeError("Empty color reference");ca(e)&&(e=Sy(e));let t=e.space||e.spaceId;return t instanceof j||(e.space=j.get(t)),e.alpha===void 0&&(e.alpha=1),e}const n5=75e-6;class j{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?j.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=t.white??this.base.white??"D65";this.white=Gc(r),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:j.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:r5(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ii.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=n5}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((i,o)=>{let s=r[o];if(s.type!=="angle"&&s.range){if(Number.isNaN(i))return!0;let[a,u]=s.range;return(a===void 0||i>=a-n)&&(u===void 0||i<=u+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Fh(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=Fh(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const a=X(t);[t,n]=[a.space,a.coords]}if(t=j.get(t),this.equals(t))return n;n=n.map(a=>Number.isNaN(a)?0:a);let r=this.path,i=t.path,o,s;for(let a=0;a<r.length&&r[a].equals(i[a]);a++)o=r[a],s=a;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=r.length-1;a>s;a--)n=r[a].toBase(n);for(let a=s+1;a<i.length;a++)n=i[a].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=X(t);[t,n]=[r.space,r.coords]}return t=j.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],i=r.range||r.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(j.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof j)return t;if(Xr(t)==="string"){let i=j.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(n.length)return j.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=Xr(t),i,o;if(r==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=j.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Xr(o),r==="number"||r==="string"&&o>=0){let u=Object.entries(i.coords)[o];if(u)return{space:i,id:u[0],index:o,...u[1]}}i=j.get(i);let s=o.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function r5(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function Fh(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=Ay(e.coords);let n=Object.entries(t).map(([r,i],o)=>{let s=e.coordGrammar[o][0],a=i.range||i.refRange,u=s.range,l="";return s=="<percentage>"?(u=[0,100],l="%"):s=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(r,i)=>r.map((o,s)=>{let{fromRange:a,toRange:u,suffix:l}=n[s];return a&&u&&(o=ef(a,u,o)),o=ku(o,{precision:i,unit:l}),o})}return e}var Et=new j({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class rn extends j{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Et),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=Se(t.toXYZ_M,n);return this.white!==this.base.white&&(r=Fu(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=Fu(this.base.white,this.white,n),Se(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function da(e,t){return e=X(e),!t||e.space.equals(t)?e.coords.slice():(t=j.get(t),t.from(e))}function cn(e,t){e=X(e);let{space:n,index:r}=j.resolveCoord(t,e.space);return da(e,n)[r]}function nf(e,t,n){return e=X(e),t=j.get(t),e.coords=t.to(e.space,n),e}nf.returns="color";function Tr(e,t,n){if(e=X(e),arguments.length===2&&Xr(arguments[1])==="object"){let r=arguments[1];for(let i in r)Tr(e,i,r[i])}else{typeof n=="function"&&(n=n(cn(e,t)));let{space:r,index:i}=j.resolveCoord(t,e.space),o=da(e,r);o[i]=n,nf(e,r,o)}return e}Tr.returns="color";var rf=new j({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Et,fromBase:e=>Fu(Et.white,"D50",e),toBase:e=>Fu("D50",Et.white,e)});const i5=216/24389,Sh=24/116,_a=24389/27;let tc=_t.D50;var dn=new j({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:tc,base:rf,fromBase(e){let n=e.map((r,i)=>r/tc[i]).map(r=>r>i5?Math.cbrt(r):(_a*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Sh?Math.pow(t[0],3):(116*t[0]-16)/_a,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/_a,t[2]>Sh?Math.pow(t[2],3):(116*t[2]-16)/_a].map((r,i)=>r*tc[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function dr(e){return(e%360+360)%360}function o5(e,t){if(e==="raw")return t;let[n,r]=t.map(dr),i=r-n;return e==="increasing"?i<0&&(r+=360):e==="decreasing"?i>0&&(n+=360):e==="longer"?-180<i&&i<180&&(i>0?n+=360:r+=360):e==="shorter"&&(i>180?n+=360:i<-180&&(r+=360)),[n,r]}var Zs=new j({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:dn,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),dr(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Nh=25**7,Su=Math.PI,Ih=180/Su,so=Su/180;function Ph(e){const t=e*e;return t*t*t*e}function Ny(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=X([e,t]);let[o,s,a]=dn.from(e),u=Zs.from(dn,[o,s,a])[1],[l,c,d]=dn.from(t),f=Zs.from(dn,[l,c,d])[1];u<0&&(u=0),f<0&&(f=0);let y=(u+f)/2,C=Ph(y),D=.5*(1-Math.sqrt(C/(C+Nh))),S=(1+D)*s,A=(1+D)*c,N=Math.sqrt(S**2+a**2),U=Math.sqrt(A**2+d**2),W=S===0&&a===0?0:Math.atan2(a,S),G=A===0&&d===0?0:Math.atan2(d,A);W<0&&(W+=2*Su),G<0&&(G+=2*Su),W*=Ih,G*=Ih;let Ue=l-o,St=U-N,at=G-W,Ot=W+G,En=Math.abs(at),jn;N*U===0?jn=0:En<=180?jn=at:at>180?jn=at-360:at<-180?jn=at+360:gn.warn("the unthinkable has happened");let eo=2*Math.sqrt(U*N)*Math.sin(jn*so/2),Nl=(o+l)/2,ls=(N+U)/2,Fa=Ph(ls),Un;N*U===0?Un=Ot:En<=180?Un=Ot/2:Ot<360?Un=(Ot+360)/2:Un=(Ot-360)/2;let Sa=(Nl-50)**2,Il=1+.015*Sa/Math.sqrt(20+Sa),Na=1+.045*ls,xn=1;xn-=.17*Math.cos((Un-30)*so),xn+=.24*Math.cos(2*Un*so),xn+=.32*Math.cos((3*Un+6)*so),xn-=.2*Math.cos((4*Un-63)*so);let Ye=1+.015*ls*xn,sn=30*Math.exp(-1*((Un-275)/25)**2),to=2*Math.sqrt(Fa/(Fa+Nh)),Ur=-1*Math.sin(2*sn*so)*to,gi=(Ue/(n*Il))**2;return gi+=(St/(r*Na))**2,gi+=(eo/(i*Ye))**2,gi+=Ur*(St/(r*Na))*(eo/(i*Ye)),Math.sqrt(gi)}const s5=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],a5=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],u5=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],l5=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Io=new j({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Et,fromBase(e){let n=Se(s5,e).map(r=>Math.cbrt(r));return Se(u5,n)},toBase(e){let n=Se(l5,e).map(r=>r**3);return Se(a5,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Yc(e,t){[e,t]=X([e,t]);let[n,r,i]=Io.from(e),[o,s,a]=Io.from(t),u=n-o,l=r-s,c=i-a;return Math.sqrt(u**2+l**2+c**2)}const c5=75e-6;function Ti(e,t,{epsilon:n=c5}={}){e=X(e),t||(t=e.space),t=j.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function Po(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Iy(e,t,n="lab"){n=j.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((o,s,a)=>{let u=i[a];return isNaN(s)||isNaN(u)?o:o+(u-s)**2},0))}function d5(e,t){return Iy(e,t,"lab")}const f5=Math.PI,Th=f5/180;function m5(e,t,{l:n=2,c:r=1}={}){[e,t]=X([e,t]);let[i,o,s]=dn.from(e),[,a,u]=Zs.from(dn,[i,o,s]),[l,c,d]=dn.from(t),f=Zs.from(dn,[l,c,d])[1];a<0&&(a=0),f<0&&(f=0);let y=i-l,C=a-f,D=o-c,S=s-d,A=D**2+S**2-C**2,N=.511;i>=16&&(N=.040975*i/(1+.01765*i));let U=.0638*a/(1+.0131*a)+.638,W;Number.isNaN(u)&&(u=0),u>=164&&u<=345?W=.56+Math.abs(.2*Math.cos((u+168)*Th)):W=.36+Math.abs(.4*Math.cos((u+35)*Th));let G=Math.pow(a,4),Ue=Math.sqrt(G/(G+1900)),St=U*(Ue*W+1-Ue),at=(y/(n*N))**2;return at+=(C/(r*U))**2,at+=A/St**2,Math.sqrt(at)}const Mh=203;var of=new j({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Et,fromBase(e){return e.map(t=>Math.max(t*Mh,0))},toBase(e){return e.map(t=>Math.max(t/Mh,0))}});const Va=1.15,qa=.66,Oh=2610/2**14,h5=2**14/2610,Bh=3424/2**12,Rh=2413/2**7,Lh=2392/2**7,p5=1.7*2523/2**5,jh=2**5/(1.7*2523),Wa=-.56,nc=16295499532821565e-27,g5=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],y5=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],w5=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],b5=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Py=new j({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:of,fromBase(e){let[t,n,r]=e,i=Va*t-(Va-1)*r,o=qa*n-(qa-1)*t,a=Se(g5,[i,o,r]).map(function(f){let y=Bh+Rh*(f/1e4)**Oh,C=1+Lh*(f/1e4)**Oh;return(y/C)**p5}),[u,l,c]=Se(w5,a);return[(1+Wa)*u/(1+Wa*u)-nc,l,c]},toBase(e){let[t,n,r]=e,i=(t+nc)/(1+Wa-Wa*(t+nc)),s=Se(b5,[i,n,r]).map(function(f){let y=Bh-f**jh,C=Lh*f**jh-Rh;return 1e4*(y/C)**h5}),[a,u,l]=Se(y5,s),c=(a+(Va-1)*l)/Va,d=(u+(qa-1)*c)/qa;return[c,d,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Hc=new j({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Py,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),dr(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function $5(e,t){[e,t]=X([e,t]);let[n,r,i]=Hc.from(e),[o,s,a]=Hc.from(t),u=n-o,l=r-s;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let c=i-a,d=2*Math.sqrt(r*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+d**2)}const Ty=3424/4096,My=2413/128,Oy=2392/128,Uh=2610/16384,v5=2523/32,D5=16384/2610,_h=32/2523,E5=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],x5=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],C5=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],A5=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Jc=new j({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:of,fromBase(e){let t=Se(E5,e);return k5(t)},toBase(e){let t=F5(e);return Se(A5,t)}});function k5(e){let t=e.map(function(n){let r=Ty+My*(n/1e4)**Uh,i=1+Oy*(n/1e4)**Uh;return(r/i)**v5});return Se(x5,t)}function F5(e){return Se(C5,e).map(function(r){let i=Math.max(r**_h-Ty,0),o=My-Oy*r**_h;return 1e4*(i/o)**D5})}function S5(e,t){[e,t]=X([e,t]);let[n,r,i]=Jc.from(e),[o,s,a]=Jc.from(t);return 720*Math.sqrt((n-o)**2+.25*(r-s)**2+(i-a)**2)}const N5=_t.D65,By=.42,Vh=1/By,rc=2*Math.PI,Ry=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],I5=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],P5=[[460,451,288],[460,-891,-261],[460,-220,-6300]],T5={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},xi={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},M5=180/Math.PI,qh=Math.PI/180;function Ly(e,t){return e.map(r=>{const i=ar(t*Math.abs(r)*.01,By);return 400*Qu(i,r)/(i+27.13)})}function O5(e,t){const n=100/t*27.13**Vh;return e.map(r=>{const i=Math.abs(r);return Qu(n*ar(i/(400-i),Vh),r)})}function B5(e){let t=dr(e);t<=xi.h[0]&&(t+=360);const n=Fy(xi.h,t)-1,[r,i]=xi.h.slice(n,n+2),[o,s]=xi.e.slice(n,n+2),a=xi.H[n],u=(t-r)/o;return a+100*u/(u+(i-t)/s)}function R5(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,i]=xi.h.slice(n,n+2),[o,s]=xi.e.slice(n,n+2);return dr((t*(s*r-o*i)-100*r*s)/(t*(s-o)-100*s))}function jy(e,t,n,r,i){const o={};o.discounting=i,o.refWhite=e,o.surround=r;const s=e.map(D=>D*100);o.la=t,o.yb=n;const a=s[1],u=Se(Ry,s);r=T5[o.surround];const l=r[0];o.c=r[1],o.nc=r[2];const d=(1/(5*o.la+1))**4;o.fl=d*o.la+.1*(1-d)*(1-d)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/a,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const f=Math.max(Math.min(l*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=u.map(D=>Ks(1,a/D,f)),o.dRgbInv=o.dRgb.map(D=>1/D);const y=u.map((D,S)=>D*o.dRgb[S]),C=Ly(y,o.fl);return o.aW=o.nbb*(2*C[0]+C[1]+.05*C[2]),o}const Wh=jy(N5,64/Math.PI*.2,20,"average",!1);function Xc(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=dr(e.h)*qh:n=R5(e.H)*qh;const r=Math.cos(n),i=Math.sin(n);let o=0;e.J!==void 0?o=ar(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=ar(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(n+2)+3.8),l=t.aW*ar(o,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,d=l/t.nbb,f=23*(d+.305)*tf(a,23*c+a*(11*r+108*i)),y=f*r,C=f*i,D=O5(Se(P5,[d,y,C]).map(S=>S*1/1403),t.fl);return Se(I5,D.map((S,A)=>S*t.dRgbInv[A])).map(S=>S/100)}function Uy(e,t){const n=e.map(U=>U*100),r=Ly(Se(Ry,n).map((U,W)=>U*t.dRgb[W]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,o=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(o,i)%rc+rc)%rc,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*tf(a*Math.sqrt(i**2+o**2),r[0]+r[1]+1.05*r[2]+.305),l=ar(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*r[0]+r[1]+.05*r[2]),d=ar(c/t.aW,.5*t.c*t.z),f=100*ar(d,2),y=4/t.c*d*(t.aW+4)*t.flRoot,C=l*d,D=C*t.flRoot,S=dr(s*M5),A=B5(S),N=50*ar(t.c*l/(t.aW+4),1/2);return{J:f,C,h:S,s:N,Q:y,M:D,H:A}}var L5=new j({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Et,fromBase(e){const t=Uy(e,Wh);return[t.J,t.M,t.h]},toBase(e){return Xc({J:e[0],M:e[1],h:e[2]},Wh)}});const j5=_t.D65,U5=216/24389,_y=24389/27;function _5(e){return 116*(e>U5?Math.cbrt(e):(_y*e+16)/116)-16}function Qc(e){return e>8?Math.pow((e+16)/116,3):e/_y}function V5(e,t){let[n,r,i]=e,o=[],s=0;if(i===0)return[0,0,0];let a=Qc(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let c=0,d=1/0;for(;c<=l;){o=Xc({J:s,C:r,h:n},t);const f=Math.abs(o[1]-a);if(f<d){if(f<=u)return o;d=f}s=s-(o[1]-a)*s/(2*o[1]),c+=1}return Xc({J:s,C:r,h:n},t)}function q5(e,t){const n=_5(e[1]);if(n===0)return[0,0,0];const r=Uy(e,sf);return[dr(r.h),r.C,n]}const sf=jy(j5,200/Math.PI*Qc(50),Qc(50)*100,"average",!1);var Gs=new j({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Et,fromBase(e){return q5(e)},toBase(e){return V5(e,sf)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const W5=Math.PI/180,zh=[1,.007,.0228];function Kh(e){e[1]<0&&(e=Gs.fromBase(Gs.toBase(e)));const t=Math.log(Math.max(1+zh[2]*e[1]*sf.flRoot,1))/zh[2],n=e[0]*W5,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function z5(e,t){[e,t]=X([e,t]);let[n,r,i]=Kh(Gs.from(e)),[o,s,a]=Kh(Gs.from(t));return Math.sqrt((n-o)**2+(r-s)**2+(i-a)**2)}var To={deltaE76:d5,deltaECMC:m5,deltaE2000:Ny,deltaEJz:$5,deltaEITP:S5,deltaEOK:Yc,deltaEHCT:z5};function K5(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Zh={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function oi(e,{method:t=gn.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:i=2,blackWhiteClamp:o={}}={}){if(e=X(e),ca(arguments[1])?n=arguments[1]:n||(n=e.space),n=j.get(n),Ti(e,n,{epsilon:0}))return e;let s;if(t==="css")s=Z5(e,{space:n});else{if(t!=="clip"&&!Ti(e,n)){Object.prototype.hasOwnProperty.call(Zh,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:o}=Zh[t]);let a=Ny;if(r!==""){for(let l in To)if("deltae"+r.toLowerCase()===l.toLowerCase()){a=To[l];break}}let u=oi(Fe(e,n),{method:"clip",space:n});if(a(e,u)>i){if(Object.keys(o).length===3){let N=j.resolveCoord(o.channel),U=cn(Fe(e,N.space),N.id);if(ri(U)&&(U=0),U>=o.max)return Fe({space:"xyz-d65",coords:_t.D65},e.space);if(U<=o.min)return Fe({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=j.resolveCoord(t),c=l.space,d=l.id,f=Fe(e,c);f.coords.forEach((N,U)=>{ri(N)&&(f.coords[U]=0)});let C=(l.range||l.refRange)[0],D=K5(i),S=C,A=cn(f,d);for(;A-S>D;){let N=Po(f);N=oi(N,{space:n,method:"clip"}),a(f,N)-i<D?S=cn(f,d):A=cn(f,d),Tr(f,d,(S+A)/2)}s=Fe(f,n)}else s=u}else s=Fe(e,n);if(t==="clip"||!Ti(s,n,{epsilon:0})){let a=Object.values(n.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,d]=a[l];return c!==void 0&&(u=Math.max(c,u)),d!==void 0&&(u=Math.min(u,d)),u})}}return n!==e.space&&(s=Fe(s,e.space)),e.coords=s.coords,e}oi.returns="color";const Gh={WHITE:{space:Io,coords:[1,0,0]},BLACK:{space:Io,coords:[0,0,0]}};function Z5(e,{space:t}={}){e=X(e),t||(t=e.space),t=j.get(t);const i=j.get("oklch");if(t.isUnbounded)return Fe(e,t);const o=Fe(e,i);let s=o.coords[0];if(s>=1){const C=Fe(Gh.WHITE,t);return C.alpha=e.alpha,Fe(C,t)}if(s<=0){const C=Fe(Gh.BLACK,t);return C.alpha=e.alpha,Fe(C,t)}if(Ti(o,t,{epsilon:0}))return Fe(o,t);function a(C){const D=Fe(C,t),S=Object.values(t.coords);return D.coords=D.coords.map((A,N)=>{if("range"in S[N]){const[U,W]=S[N].range;return ky(U,A,W)}return A}),D}let u=0,l=o.coords[1],c=!0,d=Po(o),f=a(d),y=Yc(f,d);if(y<.02)return f;for(;l-u>1e-4;){const C=(u+l)/2;if(d.coords[1]=C,c&&Ti(d,t,{epsilon:0}))u=C;else if(f=a(d),y=Yc(f,d),y<.02){if(.02-y<1e-4)break;c=!1,u=C}else l=C}return f}function Fe(e,t,{inGamut:n}={}){e=X(e),t=j.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=oi(i,n===!0?void 0:n)),i}Fe.returns="color";function Ps(e,{precision:t=gn.precision,format:n="default",inGamut:r=!0,...i}={}){let o;e=X(e);let s=n;n=e.space.getFormat(n)??e.space.getFormat("default")??j.DEFAULT_FORMAT;let a=e.coords.slice();if(r||=n.toGamut,r&&!Ti(e)&&(a=oi(Po(e),r===!0?void 0:r).coords),n.type==="custom")if(i.precision=t,n.serialize)o=n.serialize(a,e.alpha,i);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let u=n.name||"color";n.serializeCoords?a=n.serializeCoords(a,t):t!==null&&(a=a.map(f=>ku(f,{precision:t})));let l=[...a];if(u==="color"){let f=n.id||n.ids?.[0]||e.space.id;l.unshift(f)}let c=e.alpha;t!==null&&(c=ku(c,{precision:t}));let d=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${c}`;o=`${u}(${l.join(n.commas?", ":" ")}${d})`}return o}const G5=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Y5=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var el=new rn({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:G5,fromXYZ_M:Y5});const za=1.09929682680944,Yh=.018053968510807;var Vy=new rn({id:"rec2020",name:"REC.2020",base:el,toBase(e){return e.map(function(t){return t<Yh*4.5?t/4.5:Math.pow((t+za-1)/za,1/.45)})},fromBase(e){return e.map(function(t){return t>=Yh?za*Math.pow(t,.45)-(za-1):4.5*t})}});const H5=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],J5=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var qy=new rn({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:H5,fromXYZ_M:J5});const X5=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],ft=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Wy=new rn({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:X5,fromXYZ_M:ft}),Hh={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Jh=Array(3).fill("<percentage> | <number>[0, 255]"),Xh=Array(3).fill("<number>[0, 255]");var Mo=new rn({id:"srgb",name:"sRGB",base:Wy,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:Jh},rgb_number:{name:"rgb",commas:!0,coords:Xh,noAlpha:!0},color:{},rgba:{coords:Jh,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Xh},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(o=>Math.round(o*255));let r=n&&e.every(o=>o%17===0);return"#"+e.map(o=>r?(o/17).toString(16):o.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Hh.black,t.alpha=0):t.coords=Hh[e],t.coords)return t}}}}),zy=new rn({id:"p3",cssId:"display-p3",name:"P3",base:qy,fromBase:Mo.fromBase,toBase:Mo.toBase});gn.display_space=Mo;let Q5;if(typeof CSS<"u"&&CSS.supports)for(let e of[dn,Vy,zy]){let t=e.getMinCoords(),r=Ps({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){gn.display_space=e;break}}function eE(e,{space:t=gn.display_space,...n}={}){let r=Ps(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!gn.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(ri)||ri(e.alpha))&&!(Q5??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=Po(e),i.coords=i.coords.map(Xe),i.alpha=Xe(i.alpha),r=Ps(i,n),CSS.supports("color",r)))return r=new String(r),r.color=i,r;i=Fe(i,t),r=new String(Ps(i,n)),r.color=i}return r}function tE(e,t){return e=X(e),t=X(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function si(e){return cn(e,[Et,"y"])}function Ky(e,t){Tr(e,[Et,"y"],t)}function nE(e){Object.defineProperty(e.prototype,"luminance",{get(){return si(this)},set(t){Ky(this,t)}})}var rE=Object.freeze({__proto__:null,getLuminance:si,register:nE,setLuminance:Ky});function iE(e,t){e=X(e),t=X(t);let n=Math.max(si(e),0),r=Math.max(si(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const oE=.56,sE=.57,aE=.62,uE=.65,Qh=.022,lE=1.414,cE=.1,dE=5e-4,fE=1.14,ep=.027,mE=1.14;function tp(e){return e>=Qh?e:e+(Qh-e)**lE}function ao(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function hE(e,t){t=X(t),e=X(e);let n,r,i,o,s,a;t=Fe(t,"srgb"),[o,s,a]=t.coords;let u=ao(o)*.2126729+ao(s)*.7151522+ao(a)*.072175;e=Fe(e,"srgb"),[o,s,a]=e.coords;let l=ao(o)*.2126729+ao(s)*.7151522+ao(a)*.072175,c=tp(u),d=tp(l),f=d>c;return Math.abs(d-c)<dE?r=0:f?(n=d**oE-c**sE,r=n*fE):(n=d**uE-c**aE,r=n*mE),Math.abs(r)<cE?i=0:r>0?i=r-ep:i=r+ep,i*100}function pE(e,t){e=X(e),t=X(t);let n=Math.max(si(e),0),r=Math.max(si(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}const gE=5e4;function yE(e,t){e=X(e),t=X(t);let n=Math.max(si(e),0),r=Math.max(si(t),0);return r>n&&([n,r]=[r,n]),r===0?gE:(n-r)/r}function wE(e,t){e=X(e),t=X(t);let n=cn(e,[dn,"l"]),r=cn(t,[dn,"l"]);return Math.abs(n-r)}const bE=216/24389,np=24/116,Ka=24389/27;let ic=_t.D65;var ed=new j({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ic,base:Et,fromBase(e){let n=e.map((r,i)=>r/ic[i]).map(r=>r>bE?Math.cbrt(r):(Ka*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>np?Math.pow(t[0],3):(116*t[0]-16)/Ka,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ka,t[2]>np?Math.pow(t[2],3):(116*t[2]-16)/Ka].map((r,i)=>r*ic[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const oc=Math.pow(5,.5)*.5+.5;function $E(e,t){e=X(e),t=X(t);let n=cn(e,[ed,"l"]),r=cn(t,[ed,"l"]),i=Math.abs(Math.pow(n,oc)-Math.pow(r,oc)),o=Math.pow(i,1/oc)*Math.SQRT2-40;return o<7.5?0:o}var uu=Object.freeze({__proto__:null,contrastAPCA:hE,contrastDeltaPhi:$E,contrastLstar:wE,contrastMichelson:pE,contrastWCAG21:iE,contrastWeber:yE});function vE(e,t,n={}){ca(n)&&(n={algorithm:n});let{algorithm:r,...i}=n;if(!r){let o=Object.keys(uu).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=X(e),t=X(t);for(let o in uu)if("contrast"+r.toLowerCase()===o.toLowerCase())return uu[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function tl(e){let[t,n,r]=da(e,Et),i=t+15*n+3*r;return[4*t/i,9*n/i]}function Zy(e){let[t,n,r]=da(e,Et),i=t+n+r;return[t/i,n/i]}function DE(e){Object.defineProperty(e.prototype,"uv",{get(){return tl(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Zy(this)}})}var EE=Object.freeze({__proto__:null,register:DE,uv:tl,xy:Zy});function As(e,t,n={}){ca(n)&&(n={method:n});let{method:r=gn.deltaE,...i}=n;for(let o in To)if("deltae"+r.toLowerCase()===o.toLowerCase())return To[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${r}`)}function xE(e,t=.25){let r=[j.get("oklch","lch"),"l"];return Tr(e,r,i=>i*(1+t))}function CE(e,t=.25){let r=[j.get("oklch","lch"),"l"];return Tr(e,r,i=>i*(1-t))}var AE=Object.freeze({__proto__:null,darken:CE,lighten:xE});function Gy(e,t,n=.5,r={}){return[e,t]=[X(e),X(t)],Xr(n)==="object"&&([n,r]=[.5,n]),fa(e,t,r)(n)}function Yy(e,t,n={}){let r;af(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:a=1e3,...u}=n;r||([e,t]=[X(e),X(t)],r=fa(e,t,u));let l=As(e,t),c=i>0?Math.max(s,Math.ceil(l/i)+1):s,d=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)d=[{p:.5,color:r(.5)}];else{let f=1/(c-1);d=Array.from({length:c},(y,C)=>{let D=C*f;return{p:D,color:r(D)}})}if(i>0){let f=d.reduce((y,C,D)=>{if(D===0)return 0;let S=As(C.color,d[D-1].color,o);return Math.max(y,S)},0);for(;f>i;){f=0;for(let y=1;y<d.length&&d.length<a;y++){let C=d[y-1],D=d[y],S=(D.p+C.p)/2,A=r(S);f=Math.max(f,As(A,C.color),As(A,D.color)),d.splice(y,0,{p:S,color:r(S)}),y++}}}return d=d.map(f=>f.color),d}function fa(e,t,n={}){if(af(e)){let[u,l]=[e,t];return fa(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:r,outputSpace:i,progression:o,premultiplied:s}=n;e=X(e),t=X(t),e=Po(e),t=Po(t);let a={colors:[e,t],options:n};if(r?r=j.get(r):r=j.registry[gn.interpolationSpace]||e.space,i=i?j.get(i):r,e=Fe(e,r),t=Fe(t,r),e=oi(e),t=oi(t),r.coords.h&&r.coords.h.type==="angle"){let u=n.hue=n.hue||"shorter",l=[r,"h"],[c,d]=[cn(e,l),cn(t,l)];isNaN(c)&&!isNaN(d)?c=d:isNaN(d)&&!isNaN(c)&&(d=c),[c,d]=o5(u,[c,d]),Tr(e,l,c),Tr(t,l,d)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=o?o(u):u;let l=e.coords.map((f,y)=>{let C=t.coords[y];return Ks(f,C,u)}),c=Ks(e.alpha,t.alpha,u),d={space:r,coords:l,alpha:c};return s&&(d.coords=d.coords.map(f=>f/c)),i!==r&&(d=Fe(d,i)),d},{rangeArgs:a})}function af(e){return Xr(e)==="function"&&!!e.rangeArgs}gn.interpolationSpace="lab";function kE(e){e.defineFunction("mix",Gy,{returns:"color"}),e.defineFunction("range",fa,{returns:"function<color>"}),e.defineFunction("steps",Yy,{returns:"array<color>"})}var FE=Object.freeze({__proto__:null,isRange:af,mix:Gy,range:fa,register:kE,steps:Yy}),Hy=new j({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Mo,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,o]=e,[s,a,u]=[NaN,0,(n+t)/2],l=t-n;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case r:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-r)/l+2;break;case o:s=(r-i)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function i(o){let s=(o+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Jy=new j({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Hy,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r+n*Math.min(r,1-r);return[t,i===0?0:200*(1-r/i),100*i]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r*(1-n/2);return[t,i===0||i===1?0:(r-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),SE=new j({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Jy,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1){let a=n/i;return[t,0,a*100]}let o=1-r,s=o===0?0:1-n/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const NE=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],IE=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Xy=new rn({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:NE,fromXYZ_M:IE}),PE=new rn({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Xy,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const TE=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],ME=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Qy=new rn({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:rf,toXYZ_M:TE,fromXYZ_M:ME});const OE=1/512,BE=16/512;var RE=new rn({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Qy,toBase(e){return e.map(t=>t<BE?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=OE?t**(1/1.8):16*t)}}),LE=new j({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Io,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),dr(i)]},toBase(e){let[t,n,r]=e,i,o;return isNaN(r)?(i=0,o=0):(i=n*Math.cos(r*Math.PI/180),o=n*Math.sin(r*Math.PI/180)),[t,i,o]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let e1=_t.D65;const jE=216/24389,rp=24389/27,[ip,op]=tl({space:Et,coords:e1});var t1=new j({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:e1,base:Et,fromBase(e){let t=[Xe(e[0]),Xe(e[1]),Xe(e[2])],n=t[1],[r,i]=tl({space:Et,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let o=n<=jE?rp*n:116*Math.cbrt(n)-16;return[o,13*o*(r-ip),13*o*(i-op)]},toBase(e){let[t,n,r]=e;if(t===0||ri(t))return[0,0,0];n=Xe(n),r=Xe(r);let i=n/(13*t)+ip,o=r/(13*t)+op,s=t<=8?t/rp:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),uf=new j({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:t1,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),dr(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const UE=216/24389,_E=24389/27,sp=ft[0][0],ap=ft[0][1],sc=ft[0][2],up=ft[1][0],lp=ft[1][1],ac=ft[1][2],cp=ft[2][0],dp=ft[2][1],uc=ft[2][2];function uo(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function Nu(e){const t=Math.pow(e+16,3)/1560896,n=t>UE?t:e/_E,r=n*(284517*sp-94839*sc),i=n*(838422*sc+769860*ap+731718*sp),o=n*(632260*sc-126452*ap),s=n*(284517*up-94839*ac),a=n*(838422*ac+769860*lp+731718*up),u=n*(632260*ac-126452*lp),l=n*(284517*cp-94839*uc),c=n*(838422*uc+769860*dp+731718*cp),d=n*(632260*uc-126452*dp);return{r0s:r/o,r0i:i*e/o,r1s:r/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/d,b0i:c*e/d,b1s:l/(d+126452),b1i:(c-769860)*e/(d+126452)}}function fp(e,t){const n=t/360*Math.PI*2,r=uo(e.r0s,e.r0i,n),i=uo(e.r1s,e.r1i,n),o=uo(e.g0s,e.g0i,n),s=uo(e.g1s,e.g1i,n),a=uo(e.b0s,e.b0i,n),u=uo(e.b1s,e.b1i,n);return Math.min(r,i,o,s,a,u)}var VE=new j({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:uf,gamutSpace:Mo,fromBase(e){let[t,n,r]=[Xe(e[0]),Xe(e[1]),Xe(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=Nu(t),s=fp(o,r);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[Xe(e[0]),Xe(e[1]),Xe(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=Nu(r);i=fp(o,t)/100*n}return[r,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});ft[0][0];ft[0][1];ft[0][2];ft[1][0];ft[1][1];ft[1][2];ft[2][0];ft[2][1];ft[2][2];function lo(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function mp(e){let t=lo(e.r0s,e.r0i),n=lo(e.r1s,e.r1i),r=lo(e.g0s,e.g0i),i=lo(e.g1s,e.g1i),o=lo(e.b0s,e.b0i),s=lo(e.b1s,e.b1i);return Math.min(t,n,r,i,o,s)}var qE=new j({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:uf,gamutSpace:"self",fromBase(e){let[t,n,r]=[Xe(e[0]),Xe(e[1]),Xe(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=Nu(t),s=mp(o);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[Xe(e[0]),Xe(e[1]),Xe(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=Nu(r);i=mp(o)/100*n}return[r,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const hp=203,pp=2610/2**14,WE=2**14/2610,zE=2523/2**5,gp=2**5/2523,yp=3424/2**12,wp=2413/2**7,bp=2392/2**7;var KE=new rn({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:el,toBase(e){return e.map(function(t){return(Math.max(t**gp-yp,0)/(wp-bp*t**gp))**WE*1e4/hp})},fromBase(e){return e.map(function(t){let n=Math.max(t*hp/1e4,0),r=yp+wp*n**pp,i=1+bp*n**pp;return(r/i)**zE})}});const $p=.17883277,vp=.28466892,Dp=.55991073,lc=3.7743;var ZE=new rn({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:el,toBase(e){return e.map(function(t){return t<=.5?t**2/3*lc:(Math.exp((t-Dp)/$p)+vp)/12*lc})},fromBase(e){return e.map(function(t){return t/=lc,t<=1/12?Math.sqrt(3*t):$p*Math.log(12*t-vp)+Dp})}});const n1={};ii.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=r1(e.W1,e.W2,e.options.method))});ii.add("chromatic-adaptation-end",e=>{e.M||(e.M=r1(e.W1,e.W2,e.options.method))});function nl({id:e,toCone_M:t,fromCone_M:n}){n1[e]=arguments[0]}function r1(e,t,n="Bradford"){let r=n1[n],[i,o,s]=Se(r.toCone_M,e),[a,u,l]=Se(r.toCone_M,t),c=[[a/i,0,0],[0,u/o,0],[0,0,l/s]],d=Se(c,r.toCone_M);return Se(r.fromCone_M,d)}nl({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});nl({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});nl({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});nl({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(_t,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});_t.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const GE=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],YE=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var i1=new rn({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:_t.ACES,toXYZ_M:GE,fromXYZ_M:YE});const Za=2**-16,cc=-.35828683,Ga=(Math.log2(65504)+9.72)/17.52;var HE=new rn({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[cc,Ga],name:"Red"},g:{range:[cc,Ga],name:"Green"},b:{range:[cc,Ga],name:"Blue"}},referred:"scene",base:i1,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-Za)*2:n<Ga?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Za)+9.72)/17.52:t<Za?(Math.log2(Za+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Ep=Object.freeze({__proto__:null,A98RGB:PE,A98RGB_Linear:Xy,ACEScc:HE,ACEScg:i1,CAM16_JMh:L5,HCT:Gs,HPLuv:qE,HSL:Hy,HSLuv:VE,HSV:Jy,HWB:SE,ICTCP:Jc,JzCzHz:Hc,Jzazbz:Py,LCH:Zs,LCHuv:uf,Lab:dn,Lab_D65:ed,Luv:t1,OKLCH:LE,OKLab:Io,P3:zy,P3_Linear:qy,ProPhoto:RE,ProPhoto_Linear:Qy,REC_2020:Vy,REC_2020_Linear:el,REC_2100_HLG:ZE,REC_2100_PQ:KE,XYZ_ABS_D65:of,XYZ_D50:rf,XYZ_D65:Et,sRGB:Mo,sRGB_Linear:Wy});let ve=class Kt{constructor(...t){let n;t.length===1&&(n=X(t[0]));let r,i,o;n?(r=n.space||n.spaceId,i=n.coords,o=n.alpha):[r,i,o]=t,Object.defineProperty(this,"space",{value:j.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=o>1||o===void 0?1:o<0?0:o;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new Kt(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=eE(this,...t);return n.color=new Kt(n.color),n}static get(t,...n){return t instanceof Kt?t:new Kt(t,...n)}static defineFunction(t,n,r=n){let{instance:i=!0,returns:o}=r,s=function(...a){let u=n(...a);if(o==="color")u=Kt.get(u);else if(o==="function<color>"){let l=u;u=function(...c){let d=l(...c);return Kt.get(d)},Object.assign(u,l)}else o==="array<color>"&&(u=u.map(l=>Kt.get(l)));return u};t in Kt||(Kt[t]=s),i&&(Kt.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let n in t)Kt.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(Kt);else for(let n in t)Kt.defineFunction(n,t[n])}};ve.defineFunctions({get:cn,getAll:da,set:Tr,setAll:nf,to:Fe,equals:tE,inGamut:Ti,toGamut:oi,distance:Iy,toString:Ps});Object.assign(ve,{util:QD,hooks:ii,WHITES:_t,Space:j,spaces:j.registry,parse:Sy,defaults:gn});for(let e of Object.keys(Ep))j.register(Ep[e]);for(let e in j.registry)td(e,j.registry[e]);ii.add("colorspace-init-end",e=>{td(e.id,e),e.aliases?.forEach(t=>{td(t,e)})});function td(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(ve.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(i,o)=>{try{return j.resolveCoord([t,o]),!0}catch{}return Reflect.has(i,o)},get:(i,o,s)=>{if(o&&typeof o!="symbol"&&!(o in i)){let{index:a}=j.resolveCoord([t,o]);if(a>=0)return i[a]}return Reflect.get(i,o,s)},set:(i,o,s,a)=>{if(o&&typeof o!="symbol"&&!(o in i)||o>=0){let{index:u}=j.resolveCoord([t,o]);if(u>=0)return i[u]=s,this.setAll(e,i),!0}return Reflect.set(i,o,s,a)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}ve.extend(To);ve.extend({deltaE:As});Object.assign(ve,{deltaEMethods:To});ve.extend(AE);ve.extend({contrast:vE});ve.extend(EE);ve.extend(rE);ve.extend(FE);ve.extend(uu);const o1=Symbol("no update");function xp(e){return e!==o1}class dc extends rr()("observable-value-update"){}class JE extends rr()("observable-value-resolve"){}class XE extends rr()("observable-value-error"){}class QE extends Vd("observable-destroy"){}class ex extends Vd("observable-callback-call"){}class tx extends rr()("observable-params-update"){}class s1{listenTarget=new qd;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];if(n===o1)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)){const i=this.value;return this.value=n,this.listenTarget.dispatch(new dc({detail:[n,i]})),!0}return!1}listen(t,n){const r=i=>n(...i.detail);return this.listenerMap.set(n,r),t&&n(this.value,void 0),this.listenTarget.listen(dc,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(dc,n)}destroy(){this.listenTarget.dispatch(new QE),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function lf(e,t){return Fv(e,t,(n,r)=>k.isFunction(n)&&k.isFunction(r)?!0:k.strictEquals(n,r))}var Ts;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Ts||(Ts={}));class nx extends s1{equalityCheck;waitingForValueDeferredPromise=new gu;lastSetPromise;lastSetId=Pi();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||lf,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const n=Pi();return this.lastSetId=n,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new gu,super.setValue(this.waitingForValueDeferredPromise.promise,k.strictEquals)),t.then(r=>{this.lastSetPromise!==t||this.lastSetId!==n||this.resolveValue(r)}).catch(r=>{if(this.lastSetPromise!==t||this.lastSetId!==n)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=tt(r);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return xp(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,k.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Pi(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new JE({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,k.strictEquals),this.dispatch(new XE({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):xp(t)?this.resolveValue(t):!1}catch(n){return this.rejectValue(tt(n)),!0}}listen(t,n){return super.listen(t,n)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?Ts.Rejected:this.value instanceof Promise?Ts.Waiting:Ts.Resolved}}class ho extends nx{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==ho.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||lf,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:ho.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===ho.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(tt(t))}finally{this.dispatch(new ex)}}updateLastParams(t){try{return this.internalParams===ho.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new tx({detail:this.internalParams})),!0):!1}catch(n){return this.setValue(tt(n)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return k.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function rx(e){return it(e)&&!on(e)&&!ha(e)&&Symbol.asyncIterator in e}function on(e){return Array.isArray(e)}function a1(e){return typeof e=="bigint"}function ma(e){return typeof e=="boolean"}function cf(e){return e instanceof globalThis.Date}function ix(e){return typeof e=="function"}function ox(e){return it(e)&&!on(e)&&!ha(e)&&Symbol.iterator in e}function sx(e){return e===null}function cr(e){return typeof e=="number"}function it(e){return typeof e=="object"&&e!==null}function u1(e){return e instanceof globalThis.RegExp}function Ke(e){return typeof e=="string"}function ax(e){return typeof e=="symbol"}function ha(e){return e instanceof globalThis.Uint8Array}function Qe(e){return e===void 0}function ux(e){return e.map(t=>Iu(t))}function lx(e){return new Date(e.getTime())}function cx(e){return new Uint8Array(e)}function dx(e){return new RegExp(e.source,e.flags)}function fx(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=Iu(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=Iu(e[n]);return t}function Iu(e){return on(e)?ux(e):cf(e)?lx(e):ha(e)?cx(e):u1(e)?dx(e):it(e)?fx(e):e}function yn(e){return Iu(e)}function df(e,t){return yn(t===void 0?e:{...t,...e})}function l1(e){return fr(e)&&globalThis.Symbol.asyncIterator in e}function c1(e){return fr(e)&&globalThis.Symbol.iterator in e}function d1(e){return e instanceof globalThis.Promise}function ff(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function mf(e){return e instanceof globalThis.Uint8Array}function f1(e,t){return t in e}function fr(e){return e!==null&&typeof e=="object"}function wn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function ui(e){return e===void 0}function rl(e){return e===null}function il(e){return typeof e=="boolean"}function ee(e){return typeof e=="number"}function m1(e){return globalThis.Number.isInteger(e)}function Er(e){return typeof e=="bigint"}function mn(e){return typeof e=="string"}function h1(e){return typeof e=="function"}function ol(e){return typeof e=="symbol"}function p1(e){return Er(e)||il(e)||rl(e)||ee(e)||mn(e)||ol(e)||ui(e)}var We;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function n(s){const a=fr(s);return e.AllowArrayObject?a:a&&!wn(s)}e.IsObjectLike=n;function r(s){return n(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=r;function i(s){return e.AllowNaN?ee(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const a=ui(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=o})(We||(We={}));function mx(e){return globalThis.Object.freeze(e).map(t=>Pu(t))}function hx(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=Pu(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=Pu(e[n]);return globalThis.Object.freeze(t)}function Pu(e){return on(e)?mx(e):cf(e)?e:ha(e)?e:u1(e)?e:it(e)?hx(e):e}function T(e,t){const n=t!==void 0?{...t,...e}:e;switch(We.InstanceMode){case"freeze":return Pu(n);case"clone":return yn(n);default:return n}}class At extends Error{constructor(t){super(t)}}const Ht=Symbol.for("TypeBox.Transform"),pa=Symbol.for("TypeBox.Readonly"),Br=Symbol.for("TypeBox.Optional"),sl=Symbol.for("TypeBox.Hint"),P=Symbol.for("TypeBox.Kind");function hf(e){return it(e)&&e[pa]==="Readonly"}function li(e){return it(e)&&e[Br]==="Optional"}function g1(e){return ue(e,"Any")}function y1(e){return ue(e,"Argument")}function Jo(e){return ue(e,"Array")}function al(e){return ue(e,"AsyncIterator")}function ul(e){return ue(e,"BigInt")}function ga(e){return ue(e,"Boolean")}function Xo(e){return ue(e,"Computed")}function Qo(e){return ue(e,"Constructor")}function px(e){return ue(e,"Date")}function es(e){return ue(e,"Function")}function ts(e){return ue(e,"Integer")}function On(e){return ue(e,"Intersect")}function ll(e){return ue(e,"Iterator")}function ue(e,t){return it(e)&&P in e&&e[P]===t}function w1(e){return ma(e)||cr(e)||Ke(e)}function Wi(e){return ue(e,"Literal")}function zi(e){return ue(e,"MappedKey")}function Dn(e){return ue(e,"MappedResult")}function ya(e){return ue(e,"Never")}function gx(e){return ue(e,"Not")}function pf(e){return ue(e,"Null")}function ns(e){return ue(e,"Number")}function ir(e){return ue(e,"Object")}function cl(e){return ue(e,"Promise")}function dl(e){return ue(e,"Record")}function en(e){return ue(e,"Ref")}function b1(e){return ue(e,"RegExp")}function wa(e){return ue(e,"String")}function gf(e){return ue(e,"Symbol")}function Ki(e){return ue(e,"TemplateLiteral")}function yx(e){return ue(e,"This")}function Ee(e){return it(e)&&Ht in e}function Zi(e){return ue(e,"Tuple")}function ba(e){return ue(e,"Undefined")}function $t(e){return ue(e,"Union")}function wx(e){return ue(e,"Uint8Array")}function bx(e){return ue(e,"Unknown")}function $x(e){return ue(e,"Unsafe")}function vx(e){return ue(e,"Void")}function Dx(e){return it(e)&&P in e&&Ke(e[P])}function Vt(e){return g1(e)||y1(e)||Jo(e)||ga(e)||ul(e)||al(e)||Xo(e)||Qo(e)||px(e)||es(e)||ts(e)||On(e)||ll(e)||Wi(e)||zi(e)||Dn(e)||ya(e)||gx(e)||pf(e)||ns(e)||ir(e)||cl(e)||dl(e)||en(e)||b1(e)||wa(e)||gf(e)||Ki(e)||yx(e)||Zi(e)||ba(e)||$t(e)||wx(e)||bx(e)||$x(e)||vx(e)||Dx(e)}const Ex=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function $1(e){try{return new RegExp(e),!0}catch{return!1}}function yf(e){if(!Ke(e))return!1;for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function v1(e){return wf(e)||Me(e)}function ws(e){return Qe(e)||a1(e)}function $e(e){return Qe(e)||cr(e)}function wf(e){return Qe(e)||ma(e)}function be(e){return Qe(e)||Ke(e)}function xx(e){return Qe(e)||Ke(e)&&yf(e)&&$1(e)}function Cx(e){return Qe(e)||Ke(e)&&yf(e)}function D1(e){return Qe(e)||Me(e)}function Tu(e){return it(e)&&e[Br]==="Optional"}function Xn(e){return le(e,"Any")&&be(e.$id)}function Ax(e){return le(e,"Argument")&&cr(e.index)}function Gi(e){return le(e,"Array")&&e.type==="array"&&be(e.$id)&&Me(e.items)&&$e(e.minItems)&&$e(e.maxItems)&&wf(e.uniqueItems)&&D1(e.contains)&&$e(e.minContains)&&$e(e.maxContains)}function bf(e){return le(e,"AsyncIterator")&&e.type==="AsyncIterator"&&be(e.$id)&&Me(e.items)}function fl(e){return le(e,"BigInt")&&e.type==="bigint"&&be(e.$id)&&ws(e.exclusiveMaximum)&&ws(e.exclusiveMinimum)&&ws(e.maximum)&&ws(e.minimum)&&ws(e.multipleOf)}function Yi(e){return le(e,"Boolean")&&e.type==="boolean"&&be(e.$id)}function kx(e){return le(e,"Computed")&&Ke(e.target)&&on(e.parameters)&&e.parameters.every(t=>Me(t))}function ml(e){return le(e,"Constructor")&&e.type==="Constructor"&&be(e.$id)&&on(e.parameters)&&e.parameters.every(t=>Me(t))&&Me(e.returns)}function hl(e){return le(e,"Date")&&e.type==="Date"&&be(e.$id)&&$e(e.exclusiveMaximumTimestamp)&&$e(e.exclusiveMinimumTimestamp)&&$e(e.maximumTimestamp)&&$e(e.minimumTimestamp)&&$e(e.multipleOfTimestamp)}function pl(e){return le(e,"Function")&&e.type==="Function"&&be(e.$id)&&on(e.parameters)&&e.parameters.every(t=>Me(t))&&Me(e.returns)}function Rr(e){return le(e,"Integer")&&e.type==="integer"&&be(e.$id)&&$e(e.exclusiveMaximum)&&$e(e.exclusiveMinimum)&&$e(e.maximum)&&$e(e.minimum)&&$e(e.multipleOf)}function E1(e){return it(e)&&Object.entries(e).every(([t,n])=>yf(t)&&Me(n))}function Hi(e){return le(e,"Intersect")&&!(Ke(e.type)&&e.type!=="object")&&on(e.allOf)&&e.allOf.every(t=>Me(t)&&!Tx(t))&&be(e.type)&&(wf(e.unevaluatedProperties)||D1(e.unevaluatedProperties))&&be(e.$id)}function $f(e){return le(e,"Iterator")&&e.type==="Iterator"&&be(e.$id)&&Me(e.items)}function le(e,t){return it(e)&&P in e&&e[P]===t}function x1(e){return ci(e)&&Ke(e.const)}function C1(e){return ci(e)&&cr(e.const)}function A1(e){return ci(e)&&ma(e.const)}function ci(e){return le(e,"Literal")&&be(e.$id)&&Fx(e.const)}function Fx(e){return ma(e)||cr(e)||Ke(e)}function Sx(e){return le(e,"MappedKey")&&on(e.keys)&&e.keys.every(t=>cr(t)||Ke(t))}function Nx(e){return le(e,"MappedResult")&&E1(e.properties)}function di(e){return le(e,"Never")&&it(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function Oo(e){return le(e,"Not")&&Me(e.not)}function vf(e){return le(e,"Null")&&e.type==="null"&&be(e.$id)}function Jt(e){return le(e,"Number")&&e.type==="number"&&be(e.$id)&&$e(e.exclusiveMaximum)&&$e(e.exclusiveMinimum)&&$e(e.maximum)&&$e(e.minimum)&&$e(e.multipleOf)}function Oe(e){return le(e,"Object")&&e.type==="object"&&be(e.$id)&&E1(e.properties)&&v1(e.additionalProperties)&&$e(e.minProperties)&&$e(e.maxProperties)}function Df(e){return le(e,"Promise")&&e.type==="Promise"&&be(e.$id)&&Me(e.item)}function Ct(e){return le(e,"Record")&&e.type==="object"&&be(e.$id)&&v1(e.additionalProperties)&&it(e.patternProperties)&&(t=>{const n=Object.getOwnPropertyNames(t.patternProperties);return n.length===1&&$1(n[0])&&it(t.patternProperties)&&Me(t.patternProperties[n[0]])})(e)}function Ix(e){return le(e,"Ref")&&be(e.$id)&&Ke(e.$ref)}function Ys(e){return le(e,"RegExp")&&be(e.$id)&&Ke(e.source)&&Ke(e.flags)&&$e(e.maxLength)&&$e(e.minLength)}function Qn(e){return le(e,"String")&&e.type==="string"&&be(e.$id)&&$e(e.minLength)&&$e(e.maxLength)&&xx(e.pattern)&&Cx(e.format)}function Hs(e){return le(e,"Symbol")&&e.type==="symbol"&&be(e.$id)}function Js(e){return le(e,"TemplateLiteral")&&e.type==="string"&&Ke(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function Px(e){return le(e,"This")&&be(e.$id)&&Ke(e.$ref)}function Tx(e){return it(e)&&Ht in e}function gl(e){return le(e,"Tuple")&&e.type==="array"&&be(e.$id)&&cr(e.minItems)&&cr(e.maxItems)&&e.minItems===e.maxItems&&(Qe(e.items)&&Qe(e.additionalItems)&&e.minItems===0||on(e.items)&&e.items.every(t=>Me(t)))}function Ri(e){return le(e,"Undefined")&&e.type==="undefined"&&be(e.$id)}function Mr(e){return le(e,"Union")&&be(e.$id)&&it(e)&&on(e.anyOf)&&e.anyOf.every(t=>Me(t))}function $a(e){return le(e,"Uint8Array")&&e.type==="Uint8Array"&&be(e.$id)&&$e(e.minByteLength)&&$e(e.maxByteLength)}function er(e){return le(e,"Unknown")&&be(e.$id)}function Mx(e){return le(e,"Unsafe")}function yl(e){return le(e,"Void")&&e.type==="void"&&be(e.$id)}function Ox(e){return it(e)&&P in e&&Ke(e[P])&&!Ex.includes(e[P])}function Me(e){return it(e)&&(Xn(e)||Ax(e)||Gi(e)||Yi(e)||fl(e)||bf(e)||kx(e)||ml(e)||hl(e)||pl(e)||Rr(e)||Hi(e)||$f(e)||ci(e)||Sx(e)||Nx(e)||di(e)||Oo(e)||vf(e)||Jt(e)||Oe(e)||Df(e)||Ct(e)||Ix(e)||Ys(e)||Qn(e)||Hs(e)||Js(e)||Px(e)||gl(e)||Ri(e)||Mr(e)||$a(e)||er(e)||Mx(e)||yl(e)||Ox(e))}const Bx="(true|false)",lu="(0|[1-9][0-9]*)",k1="(.*)",Rx="(?!.*)",Bo=`^${lu}$`,Ro=`^${k1}$`,Lx=`^${Rx}$`,F1=new Map;function Ef(e){return F1.has(e)}function xf(e){return F1.get(e)}const Cf=new Map;function Li(e){return Cf.has(e)}function S1(e,t){Cf.set(e,t)}function Af(e){return Cf.get(e)}function jx(e,t){return e.includes(t)}function Ux(e){return[...new Set(e)]}function _x(e,t){return e.filter(n=>t.includes(n))}function Vx(e,t){return e.reduce((n,r)=>_x(n,r),t)}function qx(e){return e.length===1?e[0]:e.length>1?Vx(e.slice(1),e[0]):[]}function Wx(e){const t=[];for(const n of e)t.push(...n);return t}function Xs(e){return T({[P]:"Any"},e)}function kf(e,t){return T({[P]:"Array",type:"array",items:e},t)}function zx(e){return T({[P]:"Argument",index:e})}function Ff(e,t){return T({[P]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function ct(e,t,n){return T({[P]:"Computed",target:e,parameters:t},n)}function Kx(e,t){const{[t]:n,...r}=e;return r}function bn(e,t){return t.reduce((n,r)=>Kx(n,r),e)}function Be(e){return T({[P]:"Never",not:{}},e)}function kt(e){return T({[P]:"MappedResult",properties:e})}function Sf(e,t,n){return T({[P]:"Constructor",type:"Constructor",parameters:e,returns:t},n)}function va(e,t,n){return T({[P]:"Function",type:"Function",parameters:e,returns:t},n)}function nd(e,t){return T({[P]:"Union",anyOf:e},t)}function Zx(e){return e.some(t=>li(t))}function Cp(e){return e.map(t=>li(t)?Gx(t):t)}function Gx(e){return bn(e,[Br])}function Yx(e,t){return Zx(e)?hi(nd(Cp(e),t)):nd(Cp(e),t)}function rs(e,t){return e.length===1?T(e[0],t):e.length===0?Be(t):Yx(e,t)}function Ft(e,t){return e.length===0?Be(t):e.length===1?T(e[0],t):nd(e,t)}class Ap extends At{}function Hx(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function Nf(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function kr(e,t){return Nf(e,t,"(")}function Qs(e,t){return Nf(e,t,")")}function N1(e,t){return Nf(e,t,"|")}function Jx(e){if(!(kr(e,0)&&Qs(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(kr(e,n)&&(t+=1),Qs(e,n)&&(t-=1),t===0&&n!==e.length-1)return!1;return!0}function Xx(e){return e.slice(1,e.length-1)}function Qx(e){let t=0;for(let n=0;n<e.length;n++)if(kr(e,n)&&(t+=1),Qs(e,n)&&(t-=1),N1(e,n)&&t===0)return!0;return!1}function eC(e){for(let t=0;t<e.length;t++)if(kr(e,t))return!0;return!1}function tC(e){let[t,n]=[0,0];const r=[];for(let o=0;o<e.length;o++)if(kr(e,o)&&(t+=1),Qs(e,o)&&(t-=1),N1(e,o)&&t===0){const s=e.slice(n,o);s.length>0&&r.push(Lo(s)),n=o+1}const i=e.slice(n);return i.length>0&&r.push(Lo(i)),r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"or",expr:r}}function nC(e){function t(i,o){if(!kr(i,o))throw new Ap("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=o;a<i.length;a++)if(kr(i,a)&&(s+=1),Qs(i,a)&&(s-=1),s===0)return[o,a];throw new Ap("TemplateLiteralParser: Unclosed group parens in expression")}function n(i,o){for(let s=o;s<i.length;s++)if(kr(i,s))return[o,s];return[o,i.length]}const r=[];for(let i=0;i<e.length;i++)if(kr(e,i)){const[o,s]=t(e,i),a=e.slice(o,s+1);r.push(Lo(a)),i=s}else{const[o,s]=n(e,i),a=e.slice(o,s);a.length>0&&r.push(Lo(a)),i=s-1}return r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"and",expr:r}}function Lo(e){return Jx(e)?Lo(Xx(e)):Qx(e)?tC(e):eC(e)?nC(e):{type:"const",const:Hx(e)}}function If(e){return Lo(e.slice(1,e.length-1))}class rC extends At{}function iC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function oC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function sC(e){return e.type==="const"&&e.const===".*"}function ea(e){return iC(e)||sC(e)?!1:oC(e)?!0:e.type==="and"?e.expr.every(t=>ea(t)):e.type==="or"?e.expr.every(t=>ea(t)):e.type==="const"?!0:(()=>{throw new rC("Unknown expression type")})()}function aC(e){const t=If(e.pattern);return ea(t)}class uC extends At{}function*I1(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const n of I1(e.slice(1)))yield`${t}${n}`}function*lC(e){return yield*I1(e.expr.map(t=>[...wl(t)]))}function*cC(e){for(const t of e.expr)yield*wl(t)}function*dC(e){return yield e.const}function*wl(e){return e.type==="and"?yield*lC(e):e.type==="or"?yield*cC(e):e.type==="const"?yield*dC(e):(()=>{throw new uC("Unknown expression")})()}function P1(e){const t=If(e.pattern);return ea(t)?[...wl(t)]:[]}function nt(e,t){return T({[P]:"Literal",const:e,type:typeof e},t)}function T1(e){return T({[P]:"Boolean",type:"boolean"},e)}function Pf(e){return T({[P]:"BigInt",type:"bigint"},e)}function Ji(e){return T({[P]:"Number",type:"number"},e)}function ji(e){return T({[P]:"String",type:"string"},e)}function*fC(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield T1():t==="number"?yield Ji():t==="bigint"?yield Pf():t==="string"?yield ji():yield(()=>{const n=t.split("|").map(r=>nt(r.trim()));return n.length===0?Be():n.length===1?n[0]:rs(n)})()}function*mC(e){if(e[1]!=="{"){const t=nt("$"),n=rd(e.slice(1));return yield*[t,...n]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const n=fC(e.slice(2,t)),r=rd(e.slice(t+1));return yield*[...n,...r]}yield nt(e)}function*rd(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const n=nt(e.slice(0,t)),r=mC(e.slice(t));return yield*[n,...r]}yield nt(e)}function hC(e){return[...rd(e)]}class pC extends At{}function gC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function M1(e,t){return Ki(e)?e.pattern.slice(1,e.pattern.length-1):$t(e)?`(${e.anyOf.map(n=>M1(n,t)).join("|")})`:ns(e)?`${t}${lu}`:ts(e)?`${t}${lu}`:ul(e)?`${t}${lu}`:wa(e)?`${t}${k1}`:Wi(e)?`${t}${gC(e.const.toString())}`:ga(e)?`${t}${Bx}`:(()=>{throw new pC(`Unexpected Kind '${e[P]}'`)})()}function kp(e){return`^${e.map(t=>M1(t,"")).join("")}$`}function Mu(e){const n=P1(e).map(r=>nt(r));return rs(n)}function O1(e,t){const n=Ke(e)?kp(hC(e)):kp(e);return T({[P]:"TemplateLiteral",type:"string",pattern:n},t)}function yC(e){return P1(e).map(n=>n.toString())}function wC(e){const t=[];for(const n of e)t.push(...fi(n));return t}function bC(e){return[e.toString()]}function fi(e){return[...new Set(Ki(e)?yC(e):$t(e)?wC(e.anyOf):Wi(e)?bC(e.const):ns(e)?["[number]"]:ts(e)?["[number]"]:[])]}function $C(e,t,n){const r={};for(const i of Object.getOwnPropertyNames(t))r[i]=bl(e,fi(t[i]),n);return r}function vC(e,t,n){return $C(e,t.properties,n)}function DC(e,t,n){const r=vC(e,t,n);return kt(r)}function B1(e,t){return e.map(n=>R1(n,t))}function EC(e){return e.filter(t=>!ya(t))}function xC(e,t){return U1(EC(B1(e,t)))}function CC(e){return e.some(t=>ya(t))?[]:e}function AC(e,t){return rs(CC(B1(e,t)))}function kC(e,t){return t in e?e[t]:t==="[number]"?rs(e):Be()}function FC(e,t){return t==="[number]"?e:Be()}function SC(e,t){return t in e?e[t]:Be()}function R1(e,t){return On(e)?xC(e.allOf,t):$t(e)?AC(e.anyOf,t):Zi(e)?kC(e.items??[],t):Jo(e)?FC(e.items,t):ir(e)?SC(e.properties,t):Be()}function Tf(e,t){return t.map(n=>R1(e,n))}function Fp(e,t){return rs(Tf(e,t))}function bl(e,t,n){if(en(e)||en(t)){const r="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Vt(e)||!Vt(t))throw new At(r);return ct("Index",[e,t])}return Dn(t)?DC(e,t,n):zi(t)?TC(e,t,n):T(Vt(t)?Fp(e,fi(t)):Fp(e,t),n)}function NC(e,t,n){return{[t]:bl(e,[t],yn(n))}}function IC(e,t,n){return t.reduce((r,i)=>({...r,...NC(e,i,n)}),{})}function PC(e,t,n){return IC(e,t.keys,n)}function TC(e,t,n){const r=PC(e,t,n);return kt(r)}function Mf(e,t){return T({[P]:"Iterator",type:"Iterator",items:e},t)}function MC(e){const t=[];for(let n in e)li(e[n])||t.push(n);return t}function OC(e,t){const n=MC(e),r=n.length>0?{[P]:"Object",type:"object",properties:e,required:n}:{[P]:"Object",type:"object",properties:e};return T(r,t)}var bt=OC;function L1(e,t){return T({[P]:"Promise",type:"Promise",item:e},t)}function BC(e){return T(bn(e,[pa]))}function RC(e){return T({...e,[pa]:"Readonly"})}function LC(e,t){return t===!1?BC(e):RC(e)}function mi(e,t){const n=t??!0;return Dn(e)?_C(e,n):LC(e,n)}function jC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=mi(e[r],t);return n}function UC(e,t){return jC(e.properties,t)}function _C(e,t){const n=UC(e,t);return kt(n)}function is(e,t){return T(e.length>0?{[P]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[P]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function j1(e,t){return e in t?An(e,t[e]):kt(t)}function VC(e){return{[e]:nt(e)}}function qC(e){const t={};for(const n of e)t[n]=nt(n);return t}function WC(e,t){return jx(t,e)?VC(e):qC(t)}function zC(e,t){const n=WC(e,t);return j1(e,n)}function bs(e,t){return t.map(n=>An(e,n))}function KC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(t))n[r]=An(e,t[r]);return n}function An(e,t){const n={...t};return li(t)?hi(An(e,bn(t,[Br]))):hf(t)?mi(An(e,bn(t,[pa]))):Dn(t)?j1(e,t.properties):zi(t)?zC(e,t.keys):Qo(t)?Sf(bs(e,t.parameters),An(e,t.returns),n):es(t)?va(bs(e,t.parameters),An(e,t.returns),n):al(t)?Ff(An(e,t.items),n):ll(t)?Mf(An(e,t.items),n):On(t)?pi(bs(e,t.allOf),n):$t(t)?Ft(bs(e,t.anyOf),n):Zi(t)?is(bs(e,t.items??[]),n):ir(t)?bt(KC(e,t.properties),n):Jo(t)?kf(An(e,t.items),n):cl(t)?L1(An(e,t.item),n):t}function ZC(e,t){const n={};for(const r of e)n[r]=An(r,t);return n}function GC(e,t,n){const r=Vt(e)?fi(e):e,i=t({[P]:"MappedKey",keys:r}),o=ZC(r,i);return bt(o,n)}function YC(e){return T(bn(e,[Br]))}function HC(e){return T({...e,[Br]:"Optional"})}function JC(e,t){return t===!1?YC(e):HC(e)}function hi(e,t){const n=t??!0;return Dn(e)?eA(e,n):JC(e,n)}function XC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=hi(e[r],t);return n}function QC(e,t){return XC(e.properties,t)}function eA(e,t){const n=QC(e,t);return kt(n)}function id(e,t={}){const n=e.every(i=>ir(i)),r=Vt(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return T(t.unevaluatedProperties===!1||Vt(t.unevaluatedProperties)||n?{...r,[P]:"Intersect",type:"object",allOf:e}:{...r,[P]:"Intersect",allOf:e},t)}function tA(e){return e.every(t=>li(t))}function nA(e){return bn(e,[Br])}function Sp(e){return e.map(t=>li(t)?nA(t):t)}function rA(e,t){return tA(e)?hi(id(Sp(e),t)):id(Sp(e),t)}function U1(e,t={}){if(e.length===1)return T(e[0],t);if(e.length===0)return Be(t);if(e.some(n=>Ee(n)))throw new Error("Cannot intersect transform types");return rA(e,t)}function pi(e,t){if(e.length===1)return T(e[0],t);if(e.length===0)return Be(t);if(e.some(n=>Ee(n)))throw new Error("Cannot intersect transform types");return id(e,t)}function os(...e){const[t,n]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new At("Ref: $ref must be a string");return T({[P]:"Ref",$ref:t},n)}function iA(e,t){return ct("Awaited",[ct(e,t)])}function oA(e){return ct("Awaited",[os(e)])}function sA(e){return pi(_1(e))}function aA(e){return Ft(_1(e))}function uA(e){return $l(e)}function _1(e){return e.map(t=>$l(t))}function $l(e,t){return T(Xo(e)?iA(e.target,e.parameters):On(e)?sA(e.allOf):$t(e)?aA(e.anyOf):cl(e)?uA(e.item):en(e)?oA(e.$ref):e,t)}function V1(e){const t=[];for(const n of e)t.push(Xi(n));return t}function lA(e){const t=V1(e);return Wx(t)}function cA(e){const t=V1(e);return qx(t)}function dA(e){return e.map((t,n)=>n.toString())}function fA(e){return["[number]"]}function mA(e){return globalThis.Object.getOwnPropertyNames(e)}function hA(e){return od?globalThis.Object.getOwnPropertyNames(e).map(n=>n[0]==="^"&&n[n.length-1]==="$"?n.slice(1,n.length-1):n):[]}function Xi(e){return On(e)?lA(e.allOf):$t(e)?cA(e.anyOf):Zi(e)?dA(e.items??[]):Jo(e)?fA(e.items):ir(e)?mA(e.properties):dl(e)?hA(e.patternProperties):[]}let od=!1;function jo(e){od=!0;const t=Xi(e);return od=!1,`^(${t.map(r=>`(${r})`).join("|")})$`}function pA(e,t){return ct("KeyOf",[ct(e,t)])}function gA(e){return ct("KeyOf",[os(e)])}function yA(e,t){const n=Xi(e),r=wA(n),i=rs(r);return T(i,t)}function wA(e){return e.map(t=>t==="[number]"?Ji():nt(t))}function Of(e,t){return Xo(e)?pA(e.target,e.parameters):en(e)?gA(e.$ref):Dn(e)?vA(e,t):yA(e,t)}function bA(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Of(e[r],yn(t));return n}function $A(e,t){return bA(e.properties,t)}function vA(e,t){const n=$A(e,t);return kt(n)}function q1(e){const t=Xi(e),n=Tf(e,t);return t.map((r,i)=>[t[i],n[i]])}function DA(e){const t=[];for(const n of e)t.push(...Xi(n));return Ux(t)}function EA(e){return e.filter(t=>!ya(t))}function xA(e,t){const n=[];for(const r of e)n.push(...Tf(r,[t]));return EA(n)}function CA(e,t){const n={};for(const r of t)n[r]=U1(xA(e,r));return n}function AA(e,t){const n=DA(e),r=CA(e,n);return bt(r,t)}function W1(e){return T({[P]:"Date",type:"Date"},e)}function z1(e){return T({[P]:"Null",type:"null"},e)}function K1(e){return T({[P]:"Symbol",type:"symbol"},e)}function Z1(e){return T({[P]:"Undefined",type:"undefined"},e)}function G1(e){return T({[P]:"Uint8Array",type:"Uint8Array"},e)}function vl(e){return T({[P]:"Unknown"},e)}function kA(e){return e.map(t=>Bf(t,!1))}function FA(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=mi(Bf(e[n],!1));return t}function Ya(e,t){return t===!0?e:mi(e)}function Bf(e,t){return rx(e)||ox(e)?Ya(Xs(),t):on(e)?mi(is(kA(e))):ha(e)?G1():cf(e)?W1():it(e)?Ya(bt(FA(e)),t):ix(e)?Ya(va([],vl()),t):Qe(e)?Z1():sx(e)?z1():ax(e)?K1():a1(e)?Pf():cr(e)||ma(e)||Ke(e)?nt(e):bt({})}function SA(e,t){return T(Bf(e,!0),t)}function NA(e,t){return Qo(e)?is(e.parameters,t):Be(t)}function IA(e,t){if(Qe(e))throw new Error("Enum undefined or empty");const n=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(n)].map(o=>nt(o));return Ft(i,{...t,[sl]:"Enum"})}class PA extends At{}var x;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(x||(x={}));function Mn(e){return e===x.False?e:x.True}function ss(e){throw new PA(e)}function ot(e){return di(e)||Hi(e)||Mr(e)||er(e)||Xn(e)}function st(e,t){return di(t)?J1():Hi(t)?Dl(e,t):Mr(t)?Lf(e,t):er(t)?tw():Xn(t)?Rf():ss("StructuralRight")}function Rf(e,t){return x.True}function TA(e,t){return Hi(t)?Dl(e,t):Mr(t)&&t.anyOf.some(n=>Xn(n)||er(n))?x.True:Mr(t)?x.Union:er(t)||Xn(t)?x.True:x.Union}function MA(e,t){return er(e)?x.False:Xn(e)?x.Union:di(e)?x.True:x.False}function OA(e,t){return Oe(t)&&El(t)?x.True:ot(t)?st(e,t):Gi(t)?Mn(we(e.items,t.items)):x.False}function BA(e,t){return ot(t)?st(e,t):bf(t)?Mn(we(e.items,t.items)):x.False}function RA(e,t){return ot(t)?st(e,t):Oe(t)?Mt(e,t):Ct(t)?Bn(e,t):fl(t)?x.True:x.False}function Y1(e,t){return A1(e)||Yi(e)?x.True:x.False}function LA(e,t){return ot(t)?st(e,t):Oe(t)?Mt(e,t):Ct(t)?Bn(e,t):Yi(t)?x.True:x.False}function jA(e,t){return ot(t)?st(e,t):Oe(t)?Mt(e,t):ml(t)?e.parameters.length>t.parameters.length?x.False:e.parameters.every((n,r)=>Mn(we(t.parameters[r],n))===x.True)?Mn(we(e.returns,t.returns)):x.False:x.False}function UA(e,t){return ot(t)?st(e,t):Oe(t)?Mt(e,t):Ct(t)?Bn(e,t):hl(t)?x.True:x.False}function _A(e,t){return ot(t)?st(e,t):Oe(t)?Mt(e,t):pl(t)?e.parameters.length>t.parameters.length?x.False:e.parameters.every((n,r)=>Mn(we(t.parameters[r],n))===x.True)?Mn(we(e.returns,t.returns)):x.False:x.False}function H1(e,t){return ci(e)&&cr(e.const)||Jt(e)||Rr(e)?x.True:x.False}function VA(e,t){return Rr(t)||Jt(t)?x.True:ot(t)?st(e,t):Oe(t)?Mt(e,t):Ct(t)?Bn(e,t):x.False}function Dl(e,t){return t.allOf.every(n=>we(e,n)===x.True)?x.True:x.False}function qA(e,t){return e.allOf.some(n=>we(n,t)===x.True)?x.True:x.False}function WA(e,t){return ot(t)?st(e,t):$f(t)?Mn(we(e.items,t.items)):x.False}function zA(e,t){return ci(t)&&t.const===e.const?x.True:ot(t)?st(e,t):Oe(t)?Mt(e,t):Ct(t)?Bn(e,t):Qn(t)?ew(e):Jt(t)?X1(e):Rr(t)?H1(e):Yi(t)?Y1(e):x.False}function J1(e,t){return x.False}function KA(e,t){return x.True}function Np(e){let[t,n]=[e,0];for(;Oo(t);)t=t.not,n+=1;return n%2===0?t:vl()}function ZA(e,t){return Oo(e)?we(Np(e),t):Oo(t)?we(e,Np(t)):ss("Invalid fallthrough for Not")}function GA(e,t){return ot(t)?st(e,t):Oe(t)?Mt(e,t):Ct(t)?Bn(e,t):vf(t)?x.True:x.False}function X1(e,t){return C1(e)||Jt(e)||Rr(e)?x.True:x.False}function YA(e,t){return ot(t)?st(e,t):Oe(t)?Mt(e,t):Ct(t)?Bn(e,t):Rr(t)||Jt(t)?x.True:x.False}function tn(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function Ip(e){return El(e)}function Pp(e){return tn(e,0)||tn(e,1)&&"description"in e.properties&&Mr(e.properties.description)&&e.properties.description.anyOf.length===2&&(Qn(e.properties.description.anyOf[0])&&Ri(e.properties.description.anyOf[1])||Qn(e.properties.description.anyOf[1])&&Ri(e.properties.description.anyOf[0]))}function fc(e){return tn(e,0)}function Tp(e){return tn(e,0)}function HA(e){return tn(e,0)}function JA(e){return tn(e,0)}function XA(e){return El(e)}function QA(e){const t=Ji();return tn(e,0)||tn(e,1)&&"length"in e.properties&&Mn(we(e.properties.length,t))===x.True}function ek(e){return tn(e,0)}function El(e){const t=Ji();return tn(e,0)||tn(e,1)&&"length"in e.properties&&Mn(we(e.properties.length,t))===x.True}function tk(e){const t=va([Xs()],Xs());return tn(e,0)||tn(e,1)&&"then"in e.properties&&Mn(we(e.properties.then,t))===x.True}function Q1(e,t){return we(e,t)===x.False||Tu(e)&&!Tu(t)?x.False:x.True}function Mt(e,t){return er(e)?x.False:Xn(e)?x.Union:di(e)||x1(e)&&Ip(t)||C1(e)&&fc(t)||A1(e)&&Tp(t)||Hs(e)&&Pp(t)||fl(e)&&HA(t)||Qn(e)&&Ip(t)||Hs(e)&&Pp(t)||Jt(e)&&fc(t)||Rr(e)&&fc(t)||Yi(e)&&Tp(t)||$a(e)&&XA(t)||hl(e)&&JA(t)||ml(e)&&ek(t)||pl(e)&&QA(t)?x.True:Ct(e)&&Qn(sd(e))?t[sl]==="Record"?x.True:x.False:Ct(e)&&Jt(sd(e))?tn(t,0)?x.True:x.False:x.False}function nk(e,t){return ot(t)?st(e,t):Ct(t)?Bn(e,t):Oe(t)?(()=>{for(const n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!Tu(t.properties[n]))return x.False;if(Tu(t.properties[n]))return x.True;if(Q1(e.properties[n],t.properties[n])===x.False)return x.False}return x.True})():x.False}function rk(e,t){return ot(t)?st(e,t):Oe(t)&&tk(t)?x.True:Df(t)?Mn(we(e.item,t.item)):x.False}function sd(e){return Bo in e.patternProperties?Ji():Ro in e.patternProperties?ji():ss("Unknown record key pattern")}function ad(e){return Bo in e.patternProperties?e.patternProperties[Bo]:Ro in e.patternProperties?e.patternProperties[Ro]:ss("Unable to get record value schema")}function Bn(e,t){const[n,r]=[sd(t),ad(t)];return x1(e)&&Jt(n)&&Mn(we(e,r))===x.True?x.True:$a(e)&&Jt(n)||Qn(e)&&Jt(n)||Gi(e)&&Jt(n)?we(e,r):Oe(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(Q1(r,e.properties[i])===x.False)return x.False;return x.True})():x.False}function ik(e,t){return ot(t)?st(e,t):Oe(t)?Mt(e,t):Ct(t)?we(ad(e),ad(t)):x.False}function ok(e,t){const n=Ys(e)?ji():e,r=Ys(t)?ji():t;return we(n,r)}function ew(e,t){return ci(e)&&Ke(e.const)||Qn(e)?x.True:x.False}function sk(e,t){return ot(t)?st(e,t):Oe(t)?Mt(e,t):Ct(t)?Bn(e,t):Qn(t)?x.True:x.False}function ak(e,t){return ot(t)?st(e,t):Oe(t)?Mt(e,t):Ct(t)?Bn(e,t):Hs(t)?x.True:x.False}function uk(e,t){return Js(e)?we(Mu(e),t):Js(t)?we(e,Mu(t)):ss("Invalid fallthrough for TemplateLiteral")}function lk(e,t){return Gi(t)&&e.items!==void 0&&e.items.every(n=>we(n,t.items)===x.True)}function ck(e,t){return di(e)?x.True:er(e)?x.False:Xn(e)?x.Union:x.False}function dk(e,t){return ot(t)?st(e,t):Oe(t)&&El(t)||Gi(t)&&lk(e,t)?x.True:gl(t)?Qe(e.items)&&!Qe(t.items)||!Qe(e.items)&&Qe(t.items)?x.False:Qe(e.items)&&!Qe(t.items)||e.items.every((n,r)=>we(n,t.items[r])===x.True)?x.True:x.False:x.False}function fk(e,t){return ot(t)?st(e,t):Oe(t)?Mt(e,t):Ct(t)?Bn(e,t):$a(t)?x.True:x.False}function mk(e,t){return ot(t)?st(e,t):Oe(t)?Mt(e,t):Ct(t)?Bn(e,t):yl(t)?gk(e):Ri(t)?x.True:x.False}function Lf(e,t){return t.anyOf.some(n=>we(e,n)===x.True)?x.True:x.False}function hk(e,t){return e.anyOf.every(n=>we(n,t)===x.True)?x.True:x.False}function tw(e,t){return x.True}function pk(e,t){return di(t)?J1():Hi(t)?Dl(e,t):Mr(t)?Lf(e,t):Xn(t)?Rf():Qn(t)?ew(e):Jt(t)?X1(e):Rr(t)?H1(e):Yi(t)?Y1(e):Gi(t)?MA(e):gl(t)?ck(e):Oe(t)?Mt(e,t):er(t)?x.True:x.False}function gk(e,t){return Ri(e)||Ri(e)?x.True:x.False}function yk(e,t){return Hi(t)?Dl(e,t):Mr(t)?Lf(e,t):er(t)?tw():Xn(t)?Rf():Oe(t)?Mt(e,t):yl(t)?x.True:x.False}function we(e,t){return Js(e)||Js(t)?uk(e,t):Ys(e)||Ys(t)?ok(e,t):Oo(e)||Oo(t)?ZA(e,t):Xn(e)?TA(e,t):Gi(e)?OA(e,t):fl(e)?RA(e,t):Yi(e)?LA(e,t):bf(e)?BA(e,t):ml(e)?jA(e,t):hl(e)?UA(e,t):pl(e)?_A(e,t):Rr(e)?VA(e,t):Hi(e)?qA(e,t):$f(e)?WA(e,t):ci(e)?zA(e,t):di(e)?KA():vf(e)?GA(e,t):Jt(e)?YA(e,t):Oe(e)?nk(e,t):Ct(e)?ik(e,t):Qn(e)?sk(e,t):Hs(e)?ak(e,t):gl(e)?dk(e,t):Df(e)?rk(e,t):$a(e)?fk(e,t):Ri(e)?mk(e,t):Mr(e)?hk(e,t):er(e)?pk(e,t):yl(e)?yk(e,t):ss(`Unknown left type operand '${e[P]}'`)}function Da(e,t){return we(e,t)}function wk(e,t,n,r,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=jf(e[s],t,n,r,yn(i));return o}function bk(e,t,n,r,i){return wk(e.properties,t,n,r,i)}function $k(e,t,n,r,i){const o=bk(e,t,n,r,i);return kt(o)}function vk(e,t,n,r){const i=Da(e,t);return i===x.Union?Ft([n,r]):i===x.True?n:r}function jf(e,t,n,r,i){return Dn(e)?$k(e,t,n,r,i):zi(e)?T(Ck(e,t,n,r,i)):T(vk(e,t,n,r),i)}function Dk(e,t,n,r,i){return{[e]:jf(nt(e),t,n,r,yn(i))}}function Ek(e,t,n,r,i){return e.reduce((o,s)=>({...o,...Dk(s,t,n,r,i)}),{})}function xk(e,t,n,r,i){return Ek(e.keys,t,n,r,i)}function Ck(e,t,n,r,i){const o=xk(e,t,n,r,i);return kt(o)}function Ak(e){return e.allOf.every(t=>as(t))}function kk(e){return e.anyOf.some(t=>as(t))}function Fk(e){return!as(e.not)}function as(e){return e[P]==="Intersect"?Ak(e):e[P]==="Union"?kk(e):e[P]==="Not"?Fk(e):e[P]==="Undefined"}function Sk(e,t){return Uf(Mu(e),t)}function Nk(e,t){const n=e.filter(r=>Da(r,t)===x.False);return n.length===1?n[0]:Ft(n)}function Uf(e,t,n={}){return Ki(e)?T(Sk(e,t),n):Dn(e)?T(Tk(e,t),n):T($t(e)?Nk(e.anyOf,t):Da(e,t)!==x.False?Be():e,n)}function Ik(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Uf(e[r],t);return n}function Pk(e,t){return Ik(e.properties,t)}function Tk(e,t){const n=Pk(e,t);return kt(n)}function Mk(e,t){return _f(Mu(e),t)}function Ok(e,t){const n=e.filter(r=>Da(r,t)!==x.False);return n.length===1?n[0]:Ft(n)}function _f(e,t,n){return Ki(e)?T(Mk(e,t),n):Dn(e)?T(Lk(e,t),n):T($t(e)?Ok(e.anyOf,t):Da(e,t)!==x.False?e:Be(),n)}function Bk(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=_f(e[r],t);return n}function Rk(e,t){return Bk(e.properties,t)}function Lk(e,t){const n=Rk(e,t);return kt(n)}function jk(e,t){return Qo(e)?T(e.returns,t):Be(t)}function nw(e){return mi(hi(e))}function Qi(e,t,n){return T({[P]:"Record",type:"object",patternProperties:{[e]:t}},n)}function Vf(e,t,n){const r={};for(const i of e)r[i]=t;return bt(r,{...n,[sl]:"Record"})}function Uk(e,t,n){return aC(e)?Vf(fi(e),t,n):Qi(e.pattern,t,n)}function _k(e,t,n){return Vf(fi(Ft(e)),t,n)}function Vk(e,t,n){return Vf([e.toString()],t,n)}function qk(e,t,n){return Qi(e.source,t,n)}function Wk(e,t,n){const r=Qe(e.pattern)?Ro:e.pattern;return Qi(r,t,n)}function zk(e,t,n){return Qi(Ro,t,n)}function Kk(e,t,n){return Qi(Lx,t,n)}function Zk(e,t,n){return bt({true:t,false:t},n)}function Gk(e,t,n){return Qi(Bo,t,n)}function Yk(e,t,n){return Qi(Bo,t,n)}function rw(e,t,n={}){return $t(e)?_k(e.anyOf,t,n):Ki(e)?Uk(e,t,n):Wi(e)?Vk(e.const,t,n):ga(e)?Zk(e,t,n):ts(e)?Gk(e,t,n):ns(e)?Yk(e,t,n):b1(e)?qk(e,t,n):wa(e)?Wk(e,t,n):g1(e)?zk(e,t,n):ya(e)?Kk(e,t,n):Be(n)}function qf(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function Hk(e){const t=qf(e);return t===Ro?ji():t===Bo?Ji():ji({pattern:t})}function iw(e){return e.patternProperties[qf(e)]}function Jk(e,t){return t.parameters=Ea(e,t.parameters),t.returns=tr(e,t.returns),t}function Xk(e,t){return t.parameters=Ea(e,t.parameters),t.returns=tr(e,t.returns),t}function Qk(e,t){return t.allOf=Ea(e,t.allOf),t}function eF(e,t){return t.anyOf=Ea(e,t.anyOf),t}function tF(e,t){return Qe(t.items)||(t.items=Ea(e,t.items)),t}function nF(e,t){return t.items=tr(e,t.items),t}function rF(e,t){return t.items=tr(e,t.items),t}function iF(e,t){return t.items=tr(e,t.items),t}function oF(e,t){return t.item=tr(e,t.item),t}function sF(e,t){const n=cF(e,t.properties);return{...t,...bt(n)}}function aF(e,t){const n=tr(e,Hk(t)),r=tr(e,iw(t)),i=rw(n,r);return{...t,...i}}function uF(e,t){return t.index in e?e[t.index]:vl()}function lF(e,t){const n=hf(t),r=li(t),i=tr(e,t);return n&&r?nw(i):n&&!r?mi(i):!n&&r?hi(i):i}function cF(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:lF(e,t[r])}),{})}function Ea(e,t){return t.map(n=>tr(e,n))}function tr(e,t){return Qo(t)?Jk(e,t):es(t)?Xk(e,t):On(t)?Qk(e,t):$t(t)?eF(e,t):Zi(t)?tF(e,t):Jo(t)?nF(e,t):al(t)?rF(e,t):ll(t)?iF(e,t):cl(t)?oF(e,t):ir(t)?sF(e,t):dl(t)?aF(e,t):y1(t)?uF(e,t):t}function dF(e,t){return tr(t,df(e))}function fF(e){return T({[P]:"Integer",type:"integer"},e)}function mF(e,t,n){return{[e]:us(nt(e),t,yn(n))}}function hF(e,t,n){return e.reduce((i,o)=>({...i,...mF(o,t,n)}),{})}function pF(e,t,n){return hF(e.keys,t,n)}function gF(e,t,n){const r=pF(e,t,n);return kt(r)}function yF(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join("")}function wF(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join("")}function bF(e){return e.toUpperCase()}function $F(e){return e.toLowerCase()}function vF(e,t,n){const r=If(e.pattern);if(!ea(r))return{...e,pattern:ow(e.pattern,t)};const s=[...wl(r)].map(l=>nt(l)),a=sw(s,t),u=Ft(a);return O1([u],n)}function ow(e,t){return typeof e=="string"?t==="Uncapitalize"?yF(e):t==="Capitalize"?wF(e):t==="Uppercase"?bF(e):t==="Lowercase"?$F(e):e:e.toString()}function sw(e,t){return e.map(n=>us(n,t))}function us(e,t,n={}){return zi(e)?gF(e,t,n):Ki(e)?vF(e,t,n):$t(e)?Ft(sw(e.anyOf,t),n):Wi(e)?nt(ow(e.const,t),n):T(e,n)}function DF(e,t={}){return us(e,"Capitalize",t)}function EF(e,t={}){return us(e,"Lowercase",t)}function xF(e,t={}){return us(e,"Uncapitalize",t)}function CF(e,t={}){return us(e,"Uppercase",t)}function AF(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=xl(e[i],t,yn(n));return r}function kF(e,t,n){return AF(e.properties,t,n)}function FF(e,t,n){const r=kF(e,t,n);return kt(r)}function SF(e,t){return e.map(n=>Wf(n,t))}function NF(e,t){return e.map(n=>Wf(n,t))}function IF(e,t){const{[t]:n,...r}=e;return r}function PF(e,t){return t.reduce((n,r)=>IF(n,r),e)}function TF(e,t){const n=bn(e,[Ht,"$id","required","properties"]),r=PF(e.properties,t);return bt(r,n)}function MF(e){const t=e.reduce((n,r)=>w1(r)?[...n,nt(r)]:n,[]);return Ft(t)}function Wf(e,t){return On(e)?pi(SF(e.allOf,t)):$t(e)?Ft(NF(e.anyOf,t)):ir(e)?TF(e,t):bt({})}function xl(e,t,n){const r=on(t)?MF(t):t,i=Vt(t)?fi(t):t,o=en(e),s=en(t);return Dn(e)?FF(e,i,n):zi(t)?LF(e,t,n):o&&s?ct("Omit",[e,r],n):!o&&s?ct("Omit",[e,r],n):o&&!s?ct("Omit",[e,r],n):T({...Wf(e,i),...n})}function OF(e,t,n){return{[t]:xl(e,[t],yn(n))}}function BF(e,t,n){return t.reduce((r,i)=>({...r,...OF(e,i,n)}),{})}function RF(e,t,n){return BF(e,t.keys,n)}function LF(e,t,n){const r=RF(e,t,n);return kt(r)}function jF(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=Cl(e[i],t,yn(n));return r}function UF(e,t,n){return jF(e.properties,t,n)}function _F(e,t,n){const r=UF(e,t,n);return kt(r)}function VF(e,t){return e.map(n=>zf(n,t))}function qF(e,t){return e.map(n=>zf(n,t))}function WF(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function zF(e,t){const n=bn(e,[Ht,"$id","required","properties"]),r=WF(e.properties,t);return bt(r,n)}function KF(e){const t=e.reduce((n,r)=>w1(r)?[...n,nt(r)]:n,[]);return Ft(t)}function zf(e,t){return On(e)?pi(VF(e.allOf,t)):$t(e)?Ft(qF(e.anyOf,t)):ir(e)?zF(e,t):bt({})}function Cl(e,t,n){const r=on(t)?KF(t):t,i=Vt(t)?fi(t):t,o=en(e),s=en(t);return Dn(e)?_F(e,i,n):zi(t)?HF(e,t,n):o&&s?ct("Pick",[e,r],n):!o&&s?ct("Pick",[e,r],n):o&&!s?ct("Pick",[e,r],n):T({...zf(e,i),...n})}function ZF(e,t,n){return{[t]:Cl(e,[t],yn(n))}}function GF(e,t,n){return t.reduce((r,i)=>({...r,...ZF(e,i,n)}),{})}function YF(e,t,n){return GF(e,t.keys,n)}function HF(e,t,n){const r=YF(e,t,n);return kt(r)}function JF(e,t){return ct("Partial",[ct(e,t)])}function XF(e){return ct("Partial",[os(e)])}function QF(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=hi(e[n]);return t}function e4(e){const t=bn(e,[Ht,"$id","required","properties"]),n=QF(e.properties);return bt(n,t)}function Mp(e){return e.map(t=>aw(t))}function aw(e){return Xo(e)?JF(e.target,e.parameters):en(e)?XF(e.$ref):On(e)?pi(Mp(e.allOf)):$t(e)?Ft(Mp(e.anyOf)):ir(e)?e4(e):ul(e)||ga(e)||ts(e)||Wi(e)||pf(e)||ns(e)||wa(e)||gf(e)||ba(e)?e:bt({})}function Kf(e,t){return Dn(e)?r4(e,t):T({...aw(e),...t})}function t4(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Kf(e[r],yn(t));return n}function n4(e,t){return t4(e.properties,t)}function r4(e,t){const n=n4(e,t);return kt(n)}function i4(e,t){return ct("Required",[ct(e,t)])}function o4(e){return ct("Required",[os(e)])}function s4(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=bn(e[n],[Br]);return t}function a4(e){const t=bn(e,[Ht,"$id","required","properties"]),n=s4(e.properties);return bt(n,t)}function Op(e){return e.map(t=>uw(t))}function uw(e){return Xo(e)?i4(e.target,e.parameters):en(e)?o4(e.$ref):On(e)?pi(Op(e.allOf)):$t(e)?Ft(Op(e.anyOf)):ir(e)?a4(e):ul(e)||ga(e)||ts(e)||Wi(e)||pf(e)||ns(e)||wa(e)||gf(e)||ba(e)?e:bt({})}function Zf(e,t){return Dn(e)?c4(e,t):T({...uw(e),...t})}function u4(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Zf(e[r],t);return n}function l4(e,t){return u4(e.properties,t)}function c4(e,t){const n=l4(e,t);return kt(n)}function d4(e,t){return t.map(n=>en(n)?Gf(e,n.$ref):$n(e,n))}function Gf(e,t){return t in e?en(e[t])?Gf(e,e[t].$ref):$n(e,e[t]):Be()}function f4(e){return $l(e[0])}function m4(e){return bl(e[0],e[1])}function h4(e){return Of(e[0])}function p4(e){return Kf(e[0])}function g4(e){return xl(e[0],e[1])}function y4(e){return Cl(e[0],e[1])}function w4(e){return Zf(e[0])}function b4(e,t,n){const r=d4(e,n);return t==="Awaited"?f4(r):t==="Index"?m4(r):t==="KeyOf"?h4(r):t==="Partial"?p4(r):t==="Omit"?g4(r):t==="Pick"?y4(r):t==="Required"?w4(r):Be()}function $4(e,t){return kf($n(e,t))}function v4(e,t){return Ff($n(e,t))}function D4(e,t,n){return Sf(xa(e,t),$n(e,n))}function E4(e,t,n){return va(xa(e,t),$n(e,n))}function x4(e,t){return pi(xa(e,t))}function C4(e,t){return Mf($n(e,t))}function A4(e,t){return bt(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:$n(e,t[r])}),{}))}function k4(e,t){const[n,r]=[$n(e,iw(t)),qf(t)],i=df(t);return i.patternProperties[r]=n,i}function F4(e,t){return en(t)?{...Gf(e,t.$ref),[Ht]:t[Ht]}:t}function S4(e,t){return is(xa(e,t))}function N4(e,t){return Ft(xa(e,t))}function xa(e,t){return t.map(n=>$n(e,n))}function $n(e,t){return li(t)?T($n(e,bn(t,[Br])),t):hf(t)?T($n(e,bn(t,[pa])),t):Ee(t)?T(F4(e,t),t):Jo(t)?T($4(e,t.items),t):al(t)?T(v4(e,t.items),t):Xo(t)?T(b4(e,t.target,t.parameters)):Qo(t)?T(D4(e,t.parameters,t.returns),t):es(t)?T(E4(e,t.parameters,t.returns),t):On(t)?T(x4(e,t.allOf),t):ll(t)?T(C4(e,t.items),t):ir(t)?T(A4(e,t.properties),t):dl(t)?T(k4(e,t)):Zi(t)?T(S4(e,t.items||[]),t):$t(t)?T(N4(e,t.anyOf),t):t}function I4(e,t){return t in e?$n(e,e[t]):Be()}function P4(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:I4(e,n)}),{})}class T4{constructor(t){const n=P4(t),r=this.WithIdentifiers(n);this.$defs=r}Import(t,n){const r={...this.$defs,[t]:T(this.$defs[t],n)};return T({[P]:"Import",$defs:r,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:{...t[r],$id:r}}),{})}}function M4(e){return new T4(e)}function O4(e,t){return T({[P]:"Not",not:e},t)}function B4(e,t){return es(e)?is(e.parameters,t):Be()}let R4=0;function L4(e,t={}){Qe(t.$id)&&(t.$id=`T${R4++}`);const n=df(e({[P]:"This",$ref:`${t.$id}`}));return n.$id=t.$id,T({[sl]:"Recursive",...n},t)}function j4(e,t){const n=Ke(e)?new globalThis.RegExp(e):e;return T({[P]:"RegExp",type:"RegExp",source:n.source,flags:n.flags},t)}function U4(e){return On(e)?e.allOf:$t(e)?e.anyOf:Zi(e)?e.items??[]:[]}function _4(e){return U4(e)}function V4(e,t){return es(e)?T(e.returns,t):Be(t)}class q4{constructor(t){this.schema=t}Decode(t){return new W4(this.schema,t)}}class W4{constructor(t,n){this.schema=t,this.decode=n}EncodeTransform(t,n){const o={Encode:s=>n[Ht].Encode(t(s)),Decode:s=>this.decode(n[Ht].Decode(s))};return{...n,[Ht]:o}}EncodeSchema(t,n){const r={Decode:this.decode,Encode:t};return{...n,[Ht]:r}}Encode(t){return Ee(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function z4(e){return new q4(e)}function K4(e={}){return T({[P]:e[P]??"Unsafe"},e)}function Z4(e){return T({[P]:"Void",type:"void"},e)}const G4=Object.freeze(Object.defineProperty({__proto__:null,Any:Xs,Argument:zx,Array:kf,AsyncIterator:Ff,Awaited:$l,BigInt:Pf,Boolean:T1,Capitalize:DF,Composite:AA,Const:SA,Constructor:Sf,ConstructorParameters:NA,Date:W1,Enum:IA,Exclude:Uf,Extends:jf,Extract:_f,Function:va,Index:bl,InstanceType:jk,Instantiate:dF,Integer:fF,Intersect:pi,Iterator:Mf,KeyOf:Of,Literal:nt,Lowercase:EF,Mapped:GC,Module:M4,Never:Be,Not:O4,Null:z1,Number:Ji,Object:bt,Omit:xl,Optional:hi,Parameters:B4,Partial:Kf,Pick:Cl,Promise:L1,Readonly:mi,ReadonlyOptional:nw,Record:rw,Recursive:L4,Ref:os,RegExp:j4,Required:Zf,Rest:_4,ReturnType:V4,String:ji,Symbol:K1,TemplateLiteral:O1,Transform:z4,Tuple:is,Uint8Array:G1,Uncapitalize:xF,Undefined:Z1,Union:Ft,Unknown:vl,Unsafe:K4,Uppercase:CF,Void:Z4},Symbol.toStringTag,{value:"Module"})),Pe=G4;function lw(e){switch(e.errorType){case $.ArrayContains:return"Expected array to contain at least one matching value";case $.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case $.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case $.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case $.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case $.ArrayUniqueItems:return"Expected array elements to be unique";case $.Array:return"Expected array";case $.AsyncIterator:return"Expected AsyncIterator";case $.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case $.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case $.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case $.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case $.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case $.BigInt:return"Expected bigint";case $.Boolean:return"Expected boolean";case $.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case $.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case $.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case $.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case $.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case $.Date:return"Expected Date";case $.Function:return"Expected function";case $.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case $.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case $.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case $.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case $.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case $.Integer:return"Expected integer";case $.IntersectUnevaluatedProperties:return"Unexpected property";case $.Intersect:return"Expected all values to match";case $.Iterator:return"Expected Iterator";case $.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case $.Never:return"Never";case $.Not:return"Value should not match";case $.Null:return"Expected null";case $.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case $.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case $.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case $.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case $.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case $.Number:return"Expected number";case $.Object:return"Expected object";case $.ObjectAdditionalProperties:return"Unexpected property";case $.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case $.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case $.ObjectRequiredProperty:return"Expected required property";case $.Promise:return"Expected Promise";case $.RegExp:return"Expected string to match regular expression";case $.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case $.StringFormat:return`Expected string to match '${e.schema.format}' format`;case $.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case $.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case $.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case $.String:return"Expected string";case $.Symbol:return"Expected symbol";case $.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case $.Tuple:return"Expected tuple";case $.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case $.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case $.Uint8Array:return"Expected Uint8Array";case $.Undefined:return"Expected undefined";case $.Union:return"Expected union value";case $.Void:return"Expected void";case $.Kind:return`Expected kind '${e.schema[P]}'`;default:return"Unknown error type"}}let cw=lw;function Y4(e){cw=e}function H4(){return cw}class J4 extends At{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function X4(e,t){const n=t.find(r=>r.$id===e.$ref);if(n===void 0)throw new J4(e);return Rn(n,t)}function Al(e,t){return!mn(e.$id)||t.some(n=>n.$id===e.$id)||t.push(e),t}function Rn(e,t){return e[P]==="This"||e[P]==="Ref"?X4(e,t):e}class Q4 extends At{constructor(t){super("Unable to hash value"),this.value=t}}var vn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(vn||(vn={}));let po=BigInt("14695981039346656037");const[e3,t3]=[BigInt("1099511628211"),BigInt("18446744073709551616")],n3=Array.from({length:256}).map((e,t)=>BigInt(t)),dw=new Float64Array(1),fw=new DataView(dw.buffer),mw=new Uint8Array(dw.buffer);function*r3(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function i3(e){Tt(vn.Array);for(const t of e)Uo(t)}function o3(e){Tt(vn.Boolean),Tt(e?1:0)}function s3(e){Tt(vn.BigInt),fw.setBigInt64(0,e);for(const t of mw)Tt(t)}function a3(e){Tt(vn.Date),Uo(e.getTime())}function u3(e){Tt(vn.Null)}function l3(e){Tt(vn.Number),fw.setFloat64(0,e);for(const t of mw)Tt(t)}function c3(e){Tt(vn.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())Uo(t),Uo(e[t])}function d3(e){Tt(vn.String);for(let t=0;t<e.length;t++)for(const n of r3(e.charCodeAt(t)))Tt(n)}function f3(e){Tt(vn.Symbol),Uo(e.description)}function m3(e){Tt(vn.Uint8Array);for(let t=0;t<e.length;t++)Tt(e[t])}function h3(e){return Tt(vn.Undefined)}function Uo(e){if(wn(e))return i3(e);if(il(e))return o3(e);if(Er(e))return s3(e);if(ff(e))return a3(e);if(rl(e))return u3();if(ee(e))return l3(e);if(fr(e))return c3(e);if(mn(e))return d3(e);if(ol(e))return f3(e);if(mf(e))return m3(e);if(ui(e))return h3();throw new Q4(e)}function Tt(e){po=po^n3[e],po=po*e3%t3}function Yf(e){return po=BigInt("14695981039346656037"),Uo(e),po}class p3 extends At{constructor(t){super("Unknown type"),this.schema=t}}function g3(e){return e[P]==="Any"||e[P]==="Unknown"}function oe(e){return e!==void 0}function y3(e,t,n){return!0}function w3(e,t,n){return!0}function b3(e,t,n){if(!wn(n)||oe(e.minItems)&&!(n.length>=e.minItems)||oe(e.maxItems)&&!(n.length<=e.maxItems)||!n.every(o=>gt(e.items,t,o))||e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of n){const a=Yf(s);if(o.has(a))return!1;o.add(a)}return!0})())return!1;if(!(oe(e.contains)||ee(e.minContains)||ee(e.maxContains)))return!0;const r=oe(e.contains)?e.contains:Be(),i=n.reduce((o,s)=>gt(r,t,s)?o+1:o,0);return!(i===0||ee(e.minContains)&&i<e.minContains||ee(e.maxContains)&&i>e.maxContains)}function $3(e,t,n){return l1(n)}function v3(e,t,n){return!(!Er(n)||oe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||oe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||oe(e.maximum)&&!(n<=e.maximum)||oe(e.minimum)&&!(n>=e.minimum)||oe(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function D3(e,t,n){return il(n)}function E3(e,t,n){return gt(e.returns,t,n.prototype)}function x3(e,t,n){return!(!ff(n)||oe(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||oe(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||oe(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||oe(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||oe(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function C3(e,t,n){return h1(n)}function A3(e,t,n){const r=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return gt(i,[...t,...r],n)}function k3(e,t,n){return!(!m1(n)||oe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||oe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||oe(e.maximum)&&!(n<=e.maximum)||oe(e.minimum)&&!(n>=e.minimum)||oe(e.multipleOf)&&n%e.multipleOf!==0)}function F3(e,t,n){const r=e.allOf.every(i=>gt(i,t,n));if(e.unevaluatedProperties===!1){const i=new RegExp(jo(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s));return r&&o}else if(Vt(e.unevaluatedProperties)){const i=new RegExp(jo(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s)||gt(e.unevaluatedProperties,t,n[s]));return r&&o}else return r}function S3(e,t,n){return c1(n)}function N3(e,t,n){return n===e.const}function I3(e,t,n){return!1}function P3(e,t,n){return!gt(e.not,t,n)}function T3(e,t,n){return rl(n)}function M3(e,t,n){return!(!We.IsNumberLike(n)||oe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||oe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||oe(e.minimum)&&!(n>=e.minimum)||oe(e.maximum)&&!(n<=e.maximum)||oe(e.multipleOf)&&n%e.multipleOf!==0)}function O3(e,t,n){if(!We.IsObjectLike(n)||oe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||oe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const r=Object.getOwnPropertyNames(e.properties);for(const i of r){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!gt(o,t,n[i])||(as(o)||g3(o))&&!(i in n))return!1}else if(We.IsExactOptionalProperty(n,i)&&!gt(o,t,n[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&i.length===r.length?!0:i.every(o=>r.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(n).every(o=>r.includes(o)||gt(e.additionalProperties,t,n[o])):!0}function B3(e,t,n){return d1(n)}function R3(e,t,n){if(!We.IsRecordLike(n)||oe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||oe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const[r,i]=Object.entries(e.patternProperties)[0],o=new RegExp(r),s=Object.entries(n).every(([l,c])=>o.test(l)?gt(i,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(n).every(([l,c])=>o.test(l)?!0:gt(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(n).every(l=>o.test(l)):!0;return s&&a&&u}function L3(e,t,n){return gt(Rn(e,t),t,n)}function j3(e,t,n){const r=new RegExp(e.source,e.flags);return oe(e.minLength)&&!(n.length>=e.minLength)||oe(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function U3(e,t,n){return!mn(n)||oe(e.minLength)&&!(n.length>=e.minLength)||oe(e.maxLength)&&!(n.length<=e.maxLength)||oe(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:oe(e.format)?Ef(e.format)?xf(e.format)(n):!1:!0}function _3(e,t,n){return ol(n)}function V3(e,t,n){return mn(n)&&new RegExp(e.pattern).test(n)}function q3(e,t,n){return gt(Rn(e,t),t,n)}function W3(e,t,n){if(!wn(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!gt(e.items[r],t,n[r]))return!1;return!0}function z3(e,t,n){return ui(n)}function K3(e,t,n){return e.anyOf.some(r=>gt(r,t,n))}function Z3(e,t,n){return!(!mf(n)||oe(e.maxByteLength)&&!(n.length<=e.maxByteLength)||oe(e.minByteLength)&&!(n.length>=e.minByteLength))}function G3(e,t,n){return!0}function Y3(e,t,n){return We.IsVoidLike(n)}function H3(e,t,n){return Li(e[P])?Af(e[P])(e,n):!1}function gt(e,t,n){const r=oe(e.$id)?Al(e,t):t,i=e;switch(i[P]){case"Any":return y3();case"Argument":return w3();case"Array":return b3(i,r,n);case"AsyncIterator":return $3(i,r,n);case"BigInt":return v3(i,r,n);case"Boolean":return D3(i,r,n);case"Constructor":return E3(i,r,n);case"Date":return x3(i,r,n);case"Function":return C3(i,r,n);case"Import":return A3(i,r,n);case"Integer":return k3(i,r,n);case"Intersect":return F3(i,r,n);case"Iterator":return S3(i,r,n);case"Literal":return N3(i,r,n);case"Never":return I3();case"Not":return P3(i,r,n);case"Null":return T3(i,r,n);case"Number":return M3(i,r,n);case"Object":return O3(i,r,n);case"Promise":return B3(i,r,n);case"Record":return R3(i,r,n);case"Ref":return L3(i,r,n);case"RegExp":return j3(i,r,n);case"String":return U3(i,r,n);case"Symbol":return _3(i,r,n);case"TemplateLiteral":return V3(i,r,n);case"This":return q3(i,r,n);case"Tuple":return W3(i,r,n);case"Undefined":return z3(i,r,n);case"Union":return K3(i,r,n);case"Uint8Array":return Z3(i,r,n);case"Unknown":return G3();case"Void":return Y3(i,r,n);default:if(!Li(i[P]))throw new p3(i);return H3(i,r,n)}}function Ou(...e){return e.length===3?gt(e[0],e[1],e[2]):gt(e[0],[],e[1])}var $;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})($||($={}));class J3 extends At{constructor(t){super("Unknown type"),this.schema=t}}function $r(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function ie(e){return e!==void 0}class hw{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function M(e,t,n,r,i=[]){return{type:e,schema:t,path:n,value:r,message:H4()({errorType:e,path:n,schema:t,value:r,errors:i}),errors:i}}function*X3(e,t,n,r){}function*Q3(e,t,n,r){}function*e6(e,t,n,r){if(!wn(r))return yield M($.Array,e,n,r);ie(e.minItems)&&!(r.length>=e.minItems)&&(yield M($.ArrayMinItems,e,n,r)),ie(e.maxItems)&&!(r.length<=e.maxItems)&&(yield M($.ArrayMaxItems,e,n,r));for(let s=0;s<r.length;s++)yield*yt(e.items,t,`${n}/${s}`,r[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of r){const u=Yf(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield M($.ArrayUniqueItems,e,n,r)),!(ie(e.contains)||ie(e.minContains)||ie(e.maxContains)))return;const i=ie(e.contains)?e.contains:Be(),o=r.reduce((s,a,u)=>yt(i,t,`${n}${u}`,a).next().done===!0?s+1:s,0);o===0&&(yield M($.ArrayContains,e,n,r)),ee(e.minContains)&&o<e.minContains&&(yield M($.ArrayMinContains,e,n,r)),ee(e.maxContains)&&o>e.maxContains&&(yield M($.ArrayMaxContains,e,n,r))}function*t6(e,t,n,r){l1(r)||(yield M($.AsyncIterator,e,n,r))}function*n6(e,t,n,r){if(!Er(r))return yield M($.BigInt,e,n,r);ie(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield M($.BigIntExclusiveMaximum,e,n,r)),ie(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield M($.BigIntExclusiveMinimum,e,n,r)),ie(e.maximum)&&!(r<=e.maximum)&&(yield M($.BigIntMaximum,e,n,r)),ie(e.minimum)&&!(r>=e.minimum)&&(yield M($.BigIntMinimum,e,n,r)),ie(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield M($.BigIntMultipleOf,e,n,r))}function*r6(e,t,n,r){il(r)||(yield M($.Boolean,e,n,r))}function*i6(e,t,n,r){yield*yt(e.returns,t,n,r.prototype)}function*o6(e,t,n,r){if(!ff(r))return yield M($.Date,e,n,r);ie(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield M($.DateExclusiveMaximumTimestamp,e,n,r)),ie(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield M($.DateExclusiveMinimumTimestamp,e,n,r)),ie(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield M($.DateMaximumTimestamp,e,n,r)),ie(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield M($.DateMinimumTimestamp,e,n,r)),ie(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield M($.DateMultipleOfTimestamp,e,n,r))}function*s6(e,t,n,r){h1(r)||(yield M($.Function,e,n,r))}function*a6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*yt(o,[...t,...i],n,r)}function*u6(e,t,n,r){if(!m1(r))return yield M($.Integer,e,n,r);ie(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield M($.IntegerExclusiveMaximum,e,n,r)),ie(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield M($.IntegerExclusiveMinimum,e,n,r)),ie(e.maximum)&&!(r<=e.maximum)&&(yield M($.IntegerMaximum,e,n,r)),ie(e.minimum)&&!(r>=e.minimum)&&(yield M($.IntegerMinimum,e,n,r)),ie(e.multipleOf)&&r%e.multipleOf!==0&&(yield M($.IntegerMultipleOf,e,n,r))}function*l6(e,t,n,r){let i=!1;for(const o of e.allOf)for(const s of yt(o,t,n,r))i=!0,yield s;if(i)return yield M($.Intersect,e,n,r);if(e.unevaluatedProperties===!1){const o=new RegExp(jo(e));for(const s of Object.getOwnPropertyNames(r))o.test(s)||(yield M($.IntersectUnevaluatedProperties,e,`${n}/${s}`,r))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp(jo(e));for(const s of Object.getOwnPropertyNames(r))if(!o.test(s)){const a=yt(e.unevaluatedProperties,t,`${n}/${s}`,r[s]).next();a.done||(yield a.value)}}}function*c6(e,t,n,r){c1(r)||(yield M($.Iterator,e,n,r))}function*d6(e,t,n,r){r!==e.const&&(yield M($.Literal,e,n,r))}function*f6(e,t,n,r){yield M($.Never,e,n,r)}function*m6(e,t,n,r){yt(e.not,t,n,r).next().done===!0&&(yield M($.Not,e,n,r))}function*h6(e,t,n,r){rl(r)||(yield M($.Null,e,n,r))}function*p6(e,t,n,r){if(!We.IsNumberLike(r))return yield M($.Number,e,n,r);ie(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield M($.NumberExclusiveMaximum,e,n,r)),ie(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield M($.NumberExclusiveMinimum,e,n,r)),ie(e.maximum)&&!(r<=e.maximum)&&(yield M($.NumberMaximum,e,n,r)),ie(e.minimum)&&!(r>=e.minimum)&&(yield M($.NumberMinimum,e,n,r)),ie(e.multipleOf)&&r%e.multipleOf!==0&&(yield M($.NumberMultipleOf,e,n,r))}function*g6(e,t,n,r){if(!We.IsObjectLike(r))return yield M($.Object,e,n,r);ie(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield M($.ObjectMinProperties,e,n,r)),ie(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield M($.ObjectMaxProperties,e,n,r));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(r);for(const a of i)s.includes(a)||(yield M($.ObjectRequiredProperty,e.properties[a],`${n}/${$r(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)o.includes(a)||(yield M($.ObjectAdditionalProperties,e,`${n}/${$r(a)}`,r[a]));if(typeof e.additionalProperties=="object")for(const a of s)o.includes(a)||(yield*yt(e.additionalProperties,t,`${n}/${$r(a)}`,r[a]));for(const a of o){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*yt(u,t,`${n}/${$r(a)}`,r[a]),as(e)&&!(a in r)&&(yield M($.ObjectRequiredProperty,u,`${n}/${$r(a)}`,void 0))):We.IsExactOptionalProperty(r,a)&&(yield*yt(u,t,`${n}/${$r(a)}`,r[a]))}}function*y6(e,t,n,r){d1(r)||(yield M($.Promise,e,n,r))}function*w6(e,t,n,r){if(!We.IsRecordLike(r))return yield M($.Object,e,n,r);ie(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield M($.ObjectMinProperties,e,n,r)),ie(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield M($.ObjectMaxProperties,e,n,r));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[a,u]of Object.entries(r))s.test(a)&&(yield*yt(o,t,`${n}/${$r(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(r))s.test(a)||(yield*yt(e.additionalProperties,t,`${n}/${$r(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(r))if(!s.test(a))return yield M($.ObjectAdditionalProperties,e,`${n}/${$r(a)}`,u)}}function*b6(e,t,n,r){yield*yt(Rn(e,t),t,n,r)}function*$6(e,t,n,r){if(!mn(r))return yield M($.String,e,n,r);if(ie(e.minLength)&&!(r.length>=e.minLength)&&(yield M($.StringMinLength,e,n,r)),ie(e.maxLength)&&!(r.length<=e.maxLength)&&(yield M($.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield M($.RegExp,e,n,r)}function*v6(e,t,n,r){if(!mn(r))return yield M($.String,e,n,r);ie(e.minLength)&&!(r.length>=e.minLength)&&(yield M($.StringMinLength,e,n,r)),ie(e.maxLength)&&!(r.length<=e.maxLength)&&(yield M($.StringMaxLength,e,n,r)),mn(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield M($.StringPattern,e,n,r))),mn(e.format)&&(Ef(e.format)?xf(e.format)(r)||(yield M($.StringFormat,e,n,r)):yield M($.StringFormatUnknown,e,n,r))}function*D6(e,t,n,r){ol(r)||(yield M($.Symbol,e,n,r))}function*E6(e,t,n,r){if(!mn(r))return yield M($.String,e,n,r);new RegExp(e.pattern).test(r)||(yield M($.StringPattern,e,n,r))}function*x6(e,t,n,r){yield*yt(Rn(e,t),t,n,r)}function*C6(e,t,n,r){if(!wn(r))return yield M($.Tuple,e,n,r);if(e.items===void 0&&r.length!==0)return yield M($.TupleLength,e,n,r);if(r.length!==e.maxItems)return yield M($.TupleLength,e,n,r);if(e.items)for(let i=0;i<e.items.length;i++)yield*yt(e.items[i],t,`${n}/${i}`,r[i])}function*A6(e,t,n,r){ui(r)||(yield M($.Undefined,e,n,r))}function*k6(e,t,n,r){if(Ou(e,t,r))return;const i=e.anyOf.map(o=>new hw(yt(o,t,n,r)));yield M($.Union,e,n,r,i)}function*F6(e,t,n,r){if(!mf(r))return yield M($.Uint8Array,e,n,r);ie(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield M($.Uint8ArrayMaxByteLength,e,n,r)),ie(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield M($.Uint8ArrayMinByteLength,e,n,r))}function*S6(e,t,n,r){}function*N6(e,t,n,r){We.IsVoidLike(r)||(yield M($.Void,e,n,r))}function*I6(e,t,n,r){Af(e[P])(e,r)||(yield M($.Kind,e,n,r))}function*yt(e,t,n,r){const i=ie(e.$id)?[...t,e]:t,o=e;switch(o[P]){case"Any":return yield*X3();case"Argument":return yield*Q3();case"Array":return yield*e6(o,i,n,r);case"AsyncIterator":return yield*t6(o,i,n,r);case"BigInt":return yield*n6(o,i,n,r);case"Boolean":return yield*r6(o,i,n,r);case"Constructor":return yield*i6(o,i,n,r);case"Date":return yield*o6(o,i,n,r);case"Function":return yield*s6(o,i,n,r);case"Import":return yield*a6(o,i,n,r);case"Integer":return yield*u6(o,i,n,r);case"Intersect":return yield*l6(o,i,n,r);case"Iterator":return yield*c6(o,i,n,r);case"Literal":return yield*d6(o,i,n,r);case"Never":return yield*f6(o,i,n,r);case"Not":return yield*m6(o,i,n,r);case"Null":return yield*h6(o,i,n,r);case"Number":return yield*p6(o,i,n,r);case"Object":return yield*g6(o,i,n,r);case"Promise":return yield*y6(o,i,n,r);case"Record":return yield*w6(o,i,n,r);case"Ref":return yield*b6(o,i,n,r);case"RegExp":return yield*$6(o,i,n,r);case"String":return yield*v6(o,i,n,r);case"Symbol":return yield*D6(o,i,n,r);case"TemplateLiteral":return yield*E6(o,i,n,r);case"This":return yield*x6(o,i,n,r);case"Tuple":return yield*C6(o,i,n,r);case"Undefined":return yield*A6(o,i,n,r);case"Union":return yield*k6(o,i,n,r);case"Uint8Array":return yield*F6(o,i,n,r);case"Unknown":return yield*S6();case"Void":return yield*N6(o,i,n,r);default:if(!Li(o[P]))throw new J3(e);return yield*I6(o,i,n,r)}}function P6(...e){const t=e.length===3?yt(e[0],e[1],"",e[2]):yt(e[0],[],"",e[1]);return new hw(t)}class T6 extends At{constructor(t,n,r){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class M6 extends At{constructor(t,n,r,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=n,this.value=r,this.error=i}}function Ne(e,t,n){try{return Ee(e)?e[Ht].Decode(n):n}catch(r){throw new M6(e,t,n,r)}}function O6(e,t,n,r){return wn(r)?Ne(e,n,r.map((i,o)=>or(e.items,t,`${n}/${o}`,i))):Ne(e,n,r)}function B6(e,t,n,r){if(!fr(r)||p1(r))return Ne(e,n,r);const i=q1(e),o=i.map(c=>c[0]),s={...r};for(const[c,d]of i)c in s&&(s[c]=or(d,t,`${n}/${c}`,s[c]));if(!Ee(e.unevaluatedProperties))return Ne(e,n,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Ne(u,`${n}/${c}`,l[c]));return Ne(e,n,l)}function R6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=or(o,[...t,...i],n,r);return Ne(e,n,s)}function L6(e,t,n,r){return Ne(e,n,or(e.not,t,n,r))}function j6(e,t,n,r){if(!fr(r))return Ne(e,n,r);const i=Xi(e),o={...r};for(const l of i)f1(o,l)&&(ui(o[l])&&(!ba(e.properties[l])||We.IsExactOptionalProperty(o,l))||(o[l]=or(e.properties[l],t,`${n}/${l}`,o[l])));if(!Vt(e.additionalProperties))return Ne(e,n,o);const s=Object.getOwnPropertyNames(o),a=e.additionalProperties,u={...o};for(const l of s)i.includes(l)||(u[l]=Ne(a,`${n}/${l}`,u[l]));return Ne(e,n,u)}function U6(e,t,n,r){if(!fr(r))return Ne(e,n,r);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...r};for(const c of Object.getOwnPropertyNames(r))o.test(c)&&(s[c]=or(e.patternProperties[i],t,`${n}/${c}`,s[c]));if(!Vt(e.additionalProperties))return Ne(e,n,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.test(c)||(l[c]=Ne(u,`${n}/${c}`,l[c]));return Ne(e,n,l)}function _6(e,t,n,r){const i=Rn(e,t);return Ne(e,n,or(i,t,n,r))}function V6(e,t,n,r){const i=Rn(e,t);return Ne(e,n,or(i,t,n,r))}function q6(e,t,n,r){return wn(r)&&wn(e.items)?Ne(e,n,e.items.map((i,o)=>or(i,t,`${n}/${o}`,r[o]))):Ne(e,n,r)}function W6(e,t,n,r){for(const i of e.anyOf){if(!Ou(i,t,r))continue;const o=or(i,t,n,r);return Ne(e,n,o)}return Ne(e,n,r)}function or(e,t,n,r){const i=Al(e,t),o=e;switch(e[P]){case"Array":return O6(o,i,n,r);case"Import":return R6(o,i,n,r);case"Intersect":return B6(o,i,n,r);case"Not":return L6(o,i,n,r);case"Object":return j6(o,i,n,r);case"Record":return U6(o,i,n,r);case"Ref":return _6(o,i,n,r);case"Symbol":return Ne(o,n,r);case"This":return V6(o,i,n,r);case"Tuple":return q6(o,i,n,r);case"Union":return W6(o,i,n,r);default:return Ne(o,n,r)}}function z6(e,t,n){return or(e,t,"",n)}class K6 extends At{constructor(t,n,r){super("The encoded value does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class Z6 extends At{constructor(t,n,r,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=n,this.value=r,this.error=i}}function xt(e,t,n){try{return Ee(e)?e[Ht].Encode(n):n}catch(r){throw new Z6(e,t,n,r)}}function G6(e,t,n,r){const i=xt(e,n,r);return wn(i)?i.map((o,s)=>nr(e.items,t,`${n}/${s}`,o)):i}function Y6(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=xt(e,n,r);return nr(o,[...t,...i],n,s)}function H6(e,t,n,r){const i=xt(e,n,r);if(!fr(r)||p1(r))return i;const o=q1(e),s=o.map(d=>d[0]),a={...i};for(const[d,f]of o)d in a&&(a[d]=nr(f,t,`${n}/${d}`,a[d]));if(!Ee(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const d of u)s.includes(d)||(c[d]=xt(l,`${n}/${d}`,c[d]));return c}function J6(e,t,n,r){return xt(e.not,n,xt(e,n,r))}function X6(e,t,n,r){const i=xt(e,n,r);if(!fr(i))return i;const o=Xi(e),s={...i};for(const c of o)f1(s,c)&&(ui(s[c])&&(!ba(e.properties[c])||We.IsExactOptionalProperty(s,c))||(s[c]=nr(e.properties[c],t,`${n}/${c}`,s[c])));if(!Vt(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=xt(u,`${n}/${c}`,l[c]));return l}function Q6(e,t,n,r){const i=xt(e,n,r);if(!fr(r))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...i};for(const d of Object.getOwnPropertyNames(r))s.test(d)&&(a[d]=nr(e.patternProperties[o],t,`${n}/${d}`,a[d]));if(!Vt(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const d of u)s.test(d)||(c[d]=xt(l,`${n}/${d}`,c[d]));return c}function eS(e,t,n,r){const i=Rn(e,t),o=nr(i,t,n,r);return xt(e,n,o)}function tS(e,t,n,r){const i=Rn(e,t),o=nr(i,t,n,r);return xt(e,n,o)}function nS(e,t,n,r){const i=xt(e,n,r);return wn(e.items)?e.items.map((o,s)=>nr(o,t,`${n}/${s}`,i[s])):[]}function rS(e,t,n,r){for(const i of e.anyOf){if(!Ou(i,t,r))continue;const o=nr(i,t,n,r);return xt(e,n,o)}for(const i of e.anyOf){const o=nr(i,t,n,r);if(Ou(e,t,o))return xt(e,n,o)}return xt(e,n,r)}function nr(e,t,n,r){const i=Al(e,t),o=e;switch(e[P]){case"Array":return G6(o,i,n,r);case"Import":return Y6(o,i,n,r);case"Intersect":return H6(o,i,n,r);case"Not":return J6(o,i,n,r);case"Object":return X6(o,i,n,r);case"Record":return Q6(o,i,n,r);case"Ref":return eS(o,i,n,r);case"This":return tS(o,i,n,r);case"Tuple":return nS(o,i,n,r);case"Union":return rS(o,i,n,r);default:return xt(o,n,r)}}function iS(e,t,n){return nr(e,t,"",n)}function oS(e,t){return Ee(e)||dt(e.items,t)}function sS(e,t){return Ee(e)||dt(e.items,t)}function aS(e,t){return Ee(e)||dt(e.returns,t)||e.parameters.some(n=>dt(n,t))}function uS(e,t){return Ee(e)||dt(e.returns,t)||e.parameters.some(n=>dt(n,t))}function lS(e,t){return Ee(e)||Ee(e.unevaluatedProperties)||e.allOf.some(n=>dt(n,t))}function cS(e,t){const n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),r=e.$defs[e.$ref];return Ee(e)||dt(r,[...n,...t])}function dS(e,t){return Ee(e)||dt(e.items,t)}function fS(e,t){return Ee(e)||dt(e.not,t)}function mS(e,t){return Ee(e)||Object.values(e.properties).some(n=>dt(n,t))||Vt(e.additionalProperties)&&dt(e.additionalProperties,t)}function hS(e,t){return Ee(e)||dt(e.item,t)}function pS(e,t){const n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return Ee(e)||dt(r,t)||Vt(e.additionalProperties)&&Ee(e.additionalProperties)}function gS(e,t){return Ee(e)?!0:dt(Rn(e,t),t)}function yS(e,t){return Ee(e)?!0:dt(Rn(e,t),t)}function wS(e,t){return Ee(e)||!ui(e.items)&&e.items.some(n=>dt(n,t))}function bS(e,t){return Ee(e)||e.anyOf.some(n=>dt(n,t))}function dt(e,t){const n=Al(e,t),r=e;if(e.$id&&ud.has(e.$id))return!1;switch(e.$id&&ud.add(e.$id),e[P]){case"Array":return oS(r,n);case"AsyncIterator":return sS(r,n);case"Constructor":return aS(r,n);case"Function":return uS(r,n);case"Import":return cS(r,n);case"Intersect":return lS(r,n);case"Iterator":return dS(r,n);case"Not":return fS(r,n);case"Object":return mS(r,n);case"Promise":return hS(r,n);case"Record":return pS(r,n);case"Ref":return gS(r,n);case"This":return yS(r,n);case"Tuple":return wS(r,n);case"Union":return bS(r,n);default:return Ee(e)}}const ud=new Set;function $S(e,t){return ud.clear(),dt(e,t)}class vS{constructor(t,n,r,i){this.schema=t,this.references=n,this.checkFunc=r,this.code=i,this.hasTransform=$S(t,n)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return P6(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new T6(this.schema,t,this.Errors(t).First());return this.hasTransform?z6(this.schema,this.references,t):t}Encode(t){const n=this.hasTransform?iS(this.schema,this.references,t):t;if(!this.checkFunc(n))throw new K6(this.schema,t,this.Errors(t).First());return n}}var xr;(function(e){function t(o){return o===36}e.DollarSign=t;function n(o){return o===95}e.IsUnderscore=n;function r(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=r;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(xr||(xr={}));var Bu;(function(e){function t(o){return o.length===0?!1:xr.IsNumeric(o.charCodeAt(0))}function n(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const a=o.charCodeAt(s);if(!(xr.IsAlpha(a)||xr.IsNumeric(a)||xr.DollarSign(a)||xr.IsUnderscore(a)))return!1}return!0}function r(o){return o.replace(/'/g,"\\'")}function i(o,s){return n(s)?`${o}.${s}`:`${o}['${r(s)}']`}e.Encode=i})(Bu||(Bu={}));var ld;(function(e){function t(n){const r=[];for(let i=0;i<n.length;i++){const o=n.charCodeAt(i);xr.IsNumeric(o)||xr.IsAlpha(o)?r.push(n.charAt(i)):r.push(`_${o}_`)}return r.join("").replace(/__/g,"_")}e.Encode=t})(ld||(ld={}));var cd;(function(e){function t(n){return n.replace(/'/g,"\\'")}e.Escape=t})(cd||(cd={}));class DS extends At{constructor(t){super("Unknown type"),this.schema=t}}class Bp extends At{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Ci;(function(e){function t(s,a,u){return We.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${Bu.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function n(s){return We.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=n;function r(s){return We.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=r;function i(s){return We.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return We.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(Ci||(Ci={}));var Ms;(function(e){function t(g){return g[P]==="Any"||g[P]==="Unknown"}function*n(g,B,b){yield"true"}function*r(g,B,b){yield"true"}function*i(g,B,b){yield`Array.isArray(${b})`;const[z,_]=[Ia("value","any"),Ia("acc","number")];ee(g.maxItems)&&(yield`${b}.length <= ${g.maxItems}`),ee(g.minItems)&&(yield`${b}.length >= ${g.minItems}`);const q=sn(g.items,B,"value");if(yield`${b}.every((${z}) => ${q})`,Me(g.contains)||ee(g.minContains)||ee(g.maxContains)){const De=Me(g.contains)?g.contains:Be(),qt=sn(De,B,"value"),mr=ee(g.minContains)?[`(count >= ${g.minContains})`]:[],_n=ee(g.maxContains)?[`(count <= ${g.maxContains})`]:[],sr=`const count = value.reduce((${_}, ${z}) => ${qt} ? acc + 1 : acc, 0)`,Pa=["(count > 0)",...mr,..._n].join(" && ");yield`((${z}) => { ${sr}; return ${Pa}})(${b})`}g.uniqueItems===!0&&(yield`((${z}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${b})`)}function*o(g,B,b){yield`(typeof value === 'object' && Symbol.asyncIterator in ${b})`}function*s(g,B,b){yield`(typeof ${b} === 'bigint')`,Er(g.exclusiveMaximum)&&(yield`${b} < BigInt(${g.exclusiveMaximum})`),Er(g.exclusiveMinimum)&&(yield`${b} > BigInt(${g.exclusiveMinimum})`),Er(g.maximum)&&(yield`${b} <= BigInt(${g.maximum})`),Er(g.minimum)&&(yield`${b} >= BigInt(${g.minimum})`),Er(g.multipleOf)&&(yield`(${b} % BigInt(${g.multipleOf})) === 0`)}function*a(g,B,b){yield`(typeof ${b} === 'boolean')`}function*u(g,B,b){yield*xn(g.returns,B,`${b}.prototype`)}function*l(g,B,b){yield`(${b} instanceof Date) && Number.isFinite(${b}.getTime())`,ee(g.exclusiveMaximumTimestamp)&&(yield`${b}.getTime() < ${g.exclusiveMaximumTimestamp}`),ee(g.exclusiveMinimumTimestamp)&&(yield`${b}.getTime() > ${g.exclusiveMinimumTimestamp}`),ee(g.maximumTimestamp)&&(yield`${b}.getTime() <= ${g.maximumTimestamp}`),ee(g.minimumTimestamp)&&(yield`${b}.getTime() >= ${g.minimumTimestamp}`),ee(g.multipleOfTimestamp)&&(yield`(${b}.getTime() % ${g.multipleOfTimestamp}) === 0`)}function*c(g,B,b){yield`(typeof ${b} === 'function')`}function*d(g,B,b){const z=globalThis.Object.getOwnPropertyNames(g.$defs).reduce((_,q)=>[..._,g.$defs[q]],[]);yield*xn(os(g.$ref),[...B,...z],b)}function*f(g,B,b){yield`Number.isInteger(${b})`,ee(g.exclusiveMaximum)&&(yield`${b} < ${g.exclusiveMaximum}`),ee(g.exclusiveMinimum)&&(yield`${b} > ${g.exclusiveMinimum}`),ee(g.maximum)&&(yield`${b} <= ${g.maximum}`),ee(g.minimum)&&(yield`${b} >= ${g.minimum}`),ee(g.multipleOf)&&(yield`(${b} % ${g.multipleOf}) === 0`)}function*y(g,B,b){const z=g.allOf.map(_=>sn(_,B,b)).join(" && ");if(g.unevaluatedProperties===!1){const _=Ur(`${new RegExp(jo(g))};`),q=`Object.getOwnPropertyNames(${b}).every(key => ${_}.test(key))`;yield`(${z} && ${q})`}else if(Me(g.unevaluatedProperties)){const _=Ur(`${new RegExp(jo(g))};`),q=`Object.getOwnPropertyNames(${b}).every(key => ${_}.test(key) || ${sn(g.unevaluatedProperties,B,`${b}[key]`)})`;yield`(${z} && ${q})`}else yield`(${z})`}function*C(g,B,b){yield`(typeof value === 'object' && Symbol.iterator in ${b})`}function*D(g,B,b){typeof g.const=="number"||typeof g.const=="boolean"?yield`(${b} === ${g.const})`:yield`(${b} === '${cd.Escape(g.const)}')`}function*S(g,B,b){yield"false"}function*A(g,B,b){yield`(!${sn(g.not,B,b)})`}function*N(g,B,b){yield`(${b} === null)`}function*U(g,B,b){yield Ci.IsNumberLike(b),ee(g.exclusiveMaximum)&&(yield`${b} < ${g.exclusiveMaximum}`),ee(g.exclusiveMinimum)&&(yield`${b} > ${g.exclusiveMinimum}`),ee(g.maximum)&&(yield`${b} <= ${g.maximum}`),ee(g.minimum)&&(yield`${b} >= ${g.minimum}`),ee(g.multipleOf)&&(yield`(${b} % ${g.multipleOf}) === 0`)}function*W(g,B,b){yield Ci.IsObjectLike(b),ee(g.minProperties)&&(yield`Object.getOwnPropertyNames(${b}).length >= ${g.minProperties}`),ee(g.maxProperties)&&(yield`Object.getOwnPropertyNames(${b}).length <= ${g.maxProperties}`);const z=Object.getOwnPropertyNames(g.properties);for(const _ of z){const q=Bu.Encode(b,_),De=g.properties[_];if(g.required&&g.required.includes(_))yield*xn(De,B,q),(as(De)||t(De))&&(yield`('${_}' in ${b})`);else{const qt=sn(De,B,q);yield Ci.IsExactOptionalProperty(b,_,qt)}}if(g.additionalProperties===!1)if(g.required&&g.required.length===z.length)yield`Object.getOwnPropertyNames(${b}).length === ${z.length}`;else{const _=`[${z.map(q=>`'${q}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${b}).every(key => ${_}.includes(key))`}if(typeof g.additionalProperties=="object"){const _=sn(g.additionalProperties,B,`${b}[key]`),q=`[${z.map(De=>`'${De}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${b}).every(key => ${q}.includes(key) || ${_}))`}}function*G(g,B,b){yield`${b} instanceof Promise`}function*Ue(g,B,b){yield Ci.IsRecordLike(b),ee(g.minProperties)&&(yield`Object.getOwnPropertyNames(${b}).length >= ${g.minProperties}`),ee(g.maxProperties)&&(yield`Object.getOwnPropertyNames(${b}).length <= ${g.maxProperties}`);const[z,_]=Object.entries(g.patternProperties)[0],q=Ur(`${new RegExp(z)}`),De=sn(_,B,"value"),qt=Me(g.additionalProperties)?sn(g.additionalProperties,B,b):g.additionalProperties===!1?"false":"true",mr=`(${q}.test(key) ? ${De} : ${qt})`;yield`(Object.entries(${b}).every(([key, value]) => ${mr}))`}function*St(g,B,b){const z=Rn(g,B);if(Ye.functions.has(g.$ref))return yield`${to(g.$ref)}(${b})`;yield*xn(z,B,b)}function*at(g,B,b){const z=Ur(`${new RegExp(g.source,g.flags)};`);yield`(typeof ${b} === 'string')`,ee(g.maxLength)&&(yield`${b}.length <= ${g.maxLength}`),ee(g.minLength)&&(yield`${b}.length >= ${g.minLength}`),yield`${z}.test(${b})`}function*Ot(g,B,b){yield`(typeof ${b} === 'string')`,ee(g.maxLength)&&(yield`${b}.length <= ${g.maxLength}`),ee(g.minLength)&&(yield`${b}.length >= ${g.minLength}`),g.pattern!==void 0&&(yield`${Ur(`${new RegExp(g.pattern)};`)}.test(${b})`),g.format!==void 0&&(yield`format('${g.format}', ${b})`)}function*En(g,B,b){yield`(typeof ${b} === 'symbol')`}function*jn(g,B,b){yield`(typeof ${b} === 'string')`,yield`${Ur(`${new RegExp(g.pattern)};`)}.test(${b})`}function*eo(g,B,b){yield`${to(g.$ref)}(${b})`}function*Nl(g,B,b){if(yield`Array.isArray(${b})`,g.items===void 0)return yield`${b}.length === 0`;yield`(${b}.length === ${g.maxItems})`;for(let z=0;z<g.items.length;z++)yield`${sn(g.items[z],B,`${b}[${z}]`)}`}function*ls(g,B,b){yield`${b} === undefined`}function*Fa(g,B,b){yield`(${g.anyOf.map(_=>sn(_,B,b)).join(" || ")})`}function*Un(g,B,b){yield`${b} instanceof Uint8Array`,ee(g.maxByteLength)&&(yield`(${b}.length <= ${g.maxByteLength})`),ee(g.minByteLength)&&(yield`(${b}.length >= ${g.minByteLength})`)}function*Sa(g,B,b){yield"true"}function*Il(g,B,b){yield Ci.IsVoidLike(b)}function*Na(g,B,b){const z=Ye.instances.size;Ye.instances.set(z,g),yield`kind('${g[P]}', ${z}, ${b})`}function*xn(g,B,b,z=!0){const _=mn(g.$id)?[...B,g]:B,q=g;if(z&&mn(g.$id)){const De=to(g.$id);if(Ye.functions.has(De))return yield`${De}(${b})`;{Ye.functions.set(De,"<deferred>");const qt=gi(De,g,B,"value",!1);return Ye.functions.set(De,qt),yield`${De}(${b})`}}switch(q[P]){case"Any":return yield*n();case"Argument":return yield*r();case"Array":return yield*i(q,_,b);case"AsyncIterator":return yield*o(q,_,b);case"BigInt":return yield*s(q,_,b);case"Boolean":return yield*a(q,_,b);case"Constructor":return yield*u(q,_,b);case"Date":return yield*l(q,_,b);case"Function":return yield*c(q,_,b);case"Import":return yield*d(q,_,b);case"Integer":return yield*f(q,_,b);case"Intersect":return yield*y(q,_,b);case"Iterator":return yield*C(q,_,b);case"Literal":return yield*D(q,_,b);case"Never":return yield*S();case"Not":return yield*A(q,_,b);case"Null":return yield*N(q,_,b);case"Number":return yield*U(q,_,b);case"Object":return yield*W(q,_,b);case"Promise":return yield*G(q,_,b);case"Record":return yield*Ue(q,_,b);case"Ref":return yield*St(q,_,b);case"RegExp":return yield*at(q,_,b);case"String":return yield*Ot(q,_,b);case"Symbol":return yield*En(q,_,b);case"TemplateLiteral":return yield*jn(q,_,b);case"This":return yield*eo(q,_,b);case"Tuple":return yield*Nl(q,_,b);case"Undefined":return yield*ls(q,_,b);case"Union":return yield*Fa(q,_,b);case"Uint8Array":return yield*Un(q,_,b);case"Unknown":return yield*Sa();case"Void":return yield*Il(q,_,b);default:if(!Li(q[P]))throw new DS(g);return yield*Na(q,_,b)}}const Ye={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function sn(g,B,b,z=!0){return`(${[...xn(g,B,b,z)].join(" && ")})`}function to(g){return`check_${ld.Encode(g)}`}function Ur(g){const B=`local_${Ye.variables.size}`;return Ye.variables.set(B,`const ${B} = ${g}`),B}function gi(g,B,b,z,_=!0){const[q,De]=[`
`,sr=>"".padStart(sr," ")],qt=Ia("value","any"),mr=fm("boolean"),_n=[...xn(B,b,z,_)].map(sr=>`${De(4)}${sr}`).join(` &&${q}`);return`function ${g}(${qt})${mr} {${q}${De(2)}return (${q}${_n}${q}${De(2)})
}`}function Ia(g,B){const b=Ye.language==="typescript"?`: ${B}`:"";return`${g}${b}`}function fm(g){return Ye.language==="typescript"?`: ${g}`:""}function hb(g,B,b){const z=gi("check",g,B,"value"),_=Ia("value","any"),q=fm("boolean"),De=[...Ye.functions.values()],qt=[...Ye.variables.values()],mr=mn(g.$id)?`return function check(${_})${q} {
  return ${to(g.$id)}(value)
}`:`return ${z}`;return[...qt,...De,mr].join(`
`)}function mm(...g){const B={language:"javascript"},[b,z,_]=g.length===2&&wn(g[1])?[g[0],g[1],B]:g.length===2&&!wn(g[1])?[g[0],[],g[1]]:g.length===3?[g[0],g[1],g[2]]:g.length===1?[g[0],[],B]:[null,[],B];if(Ye.language=_.language,Ye.variables.clear(),Ye.functions.clear(),Ye.instances.clear(),!Me(b))throw new Bp(b);for(const q of z)if(!Me(q))throw new Bp(q);return hb(b,z)}e.Code=mm;function pb(g,B=[]){const b=mm(g,B,{language:"javascript"}),z=globalThis.Function("kind","format","hash",b),_=new Map(Ye.instances);function q(_n,sr,Pa){if(!Li(_n)||!_.has(sr))return!1;const gb=Af(_n),yb=_.get(sr);return gb(yb,Pa)}function De(_n,sr){return Ef(_n)?xf(_n)(sr):!1}function qt(_n){return Yf(_n)}const mr=z(q,De,qt);return new vS(g,B,mr,b)}e.Compile=pb})(Ms||(Ms={}));const dd={};function pw(e,t){e in dd||(dd[e]=t)}let Rp=!1;function ES(){Rp||(Rp=!0,Y4(e=>(dd[e.schema[P]]||lw)(e)))}const fd=Symbol.for("object-shape-tester.shape-identifier");function ze(e){if(ES(),Hf(e))return e;const t=md(e),n=Ai(t,!1),r=Ai(t,!0),i={$_schema:t,$_schemaNoExtraKeys:n,$_schemaExtraKeys:r,default:t.default,$_compiledSchema:Ms.Compile(t),$_compiledSchemaNoExtraKeys:Ms.Compile(n),$_compiledSchemaExtraKeys:Ms.Compile(r)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[fd]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function Hf(e){return k.hasKey(e,fd)&&!!e[fd]}function Jf(e){return k.hasKey(e,P)}function Ai(e,t){const n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(r=>Ai(r,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(r=>Ai(r,t))),Jf(e.items)?n.items=Ai(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(r=>Ai(r,t))),k.isObject(e.properties)){const r={};Object.entries(e.properties).forEach(([i,o])=>{r[i]=Ai(o,t)}),n.properties=r}return n.additionalProperties=t,n}function md(e){if(Jf(e))return e;if(Hf(e))return e.$_schema;if(k.isFunction(e))return Pe.Function([],Pe.Any(),{default:e});if(k.isObject(e)){const t={},n={};return Object.entries(e).forEach(([r,i])=>{const o=md(i);n[r]=o,t[r]=o.default}),Pe.Object(n,{default:t})}else{if(k.isArray(e))return Pe.Array(Pe.Union(e.map(t=>md(t))),{default:[]});if(k.isPrimitive(e)){if(k.isString(e))return Pe.String({default:e});if(k.isNumber(e))return Pe.Number({default:e});if(k.isBoolean(e))return Pe.Boolean({default:e});if(k.isSymbol(e))return Pe.Symbol({default:e});if(k.isNull(e))return Pe.Null({default:null});if(k.isUndefined(e))return Pe.Undefined({default:void 0});if(k.isBigInt(e))return Pe.BigInt({default:e});Tn.tsType(e).equals(),Tn.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${h(e)}`)}}function hd(e,t){const n=zn(e);return ze(Pe.Union(n.map(r=>Pe.Literal(r)),{default:n[0]}))}function xS(e){return k.isSymbol(e)?CS(e):ze(Pe.Const(e,{default:e}))}const Ha="ExactSymbol";function CS(e){return Li(Ha)||S1(Ha,(t,n)=>n===t.symbol),pw(Ha,({schema:t})=>`Expected symbol ${t.symbol?.description?gD({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),ze(Pe.Unsafe({[P]:Ha,symbol:e,default:e}))}function vt(e,t={}){We.ExactOptionalPropertyTypes=!0;const n=ze(e).$_schema,r=t.alsoUndefined?Pe.Union([Pe.Undefined(),n]):n;return ze(Pe.Optional(r))}function Rt(...e){let t;const n=e.map((r,i)=>{const o=ze(r);return i||(t=o.default),o.$_schema});return ze(Pe.Union(n,{default:t}))}class AS extends TypeError{value;errors;failureMessage;name="ShapeMismatchError";constructor(t,n,r){const i=n.map(s=>gw(s)).join(`
`),o=zo(r,`Shape mismatch:
${Bd(i,1)}`);super(o),this.value=t,this.errors=n,this.failureMessage=r}}function kS(e){return e.errors.flatMap(t=>Array.from(t))}function gw(e,t=0){const n=kS(e).map(i=>gw(i,t+1)),r=[e.path,e.message].filter(k.isTruthy).join(": ")+(n.length?":":"");return[Bd(r,t),...n].join(`
`)}function Si(e,t,n={}){return yw(t,n).Check(e)}function FS(e,t,n={},r){if(Si(e,t,n))return;const i=Array.from(yw(t,n).Errors(e));if(i.length)throw new AS(e,i,r)}function yw(e,t){return e=SS(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function SS(e){return ze(e)}const cu="recordShape";function Xf({keys:e,values:t,partial:n,additionalProperties:r}){NS();const i=ww(e),o=ze(t);return Pe.Unsafe({[P]:cu,keysShape:i,valuesShape:o,isPartial:!!n,additionalProperties:!!r,default:IS({isPartial:!!n,keysShape:i,valuesShape:o})})}function NS(){Li(cu)||S1(cu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const n=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:Si(i,e.keysShape),a=Si(o,e.valuesShape);return s&&a}),r=e.isPartial?!0:!Lp(e.keysShape,t).length;return n&&r}),pw(cu,e=>{const n=e.schema,r=e.value;if(typeof r!="object"||!r||Array.isArray(r))return"Expected an object";const i=qi(Object.entries(r),([u])=>u,(u,[l,c])=>!Si(l,n.keysShape)||!Si(c,n.valuesShape)),o=Lp(n.keysShape,r),s=i.length?["Failure at keys",i.join(",")].join(": "):"",a=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,a].filter(k.isTruthy).join(`
`)})}function Lp(e,t){const n=Ru(e).filter(r=>k.isPropertyKey(r));return n.length?n.filter(r=>!k.hasKey(t,r)):[]}function IS({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{const r=Ru(e),i=t.default;return Object.fromEntries(r.map(o=>[o,i]))}}function ww(e){return Hf(e)?e:Jf(e)?ze(e):k.isObject(e)?hd(e):k.isArray(e)&&k.isLengthAtLeast(e,1)?Rt(...e.map(t=>xS(t))):k.isPropertyKey(e)?ze(e):ze(Pe.Undefined())}function Ru(e){const t=e.$_schema,n=t[P].toLowerCase();return["const","literal"].includes(n)?[t.const]:n==="union"?y0(t.anyOf.flatMap(r=>Ru(ze(r)))):["undefined","number","string","symbol"].includes(n)?[]:Ru(ww(e.default))}function PS(e){return ze(Pe.Unknown({default:e}))}const TS=ze({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:PS()});function mc(e){return Si(e,TS,{allowExtraKeys:!0})}class bw extends s1{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||lf}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}const{I:MS}=zD,jp=()=>document.createComment(""),$s=(e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=r.insertBefore(jp(),i),s=r.insertBefore(jp(),i);n=new MS(o,s,e,e.options)}else{const o=n._$AB.nextSibling,s=n._$AM,a=s!==e;if(a){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==s._$AU&&n._$AP(u)}if(o!==i||a){let u=n._$AA;for(;u!==o;){const l=u.nextSibling;r.insertBefore(u,i),u=l}}}return n},Ei=(e,t,n=e)=>(e._$AI(t,n),e),OS={},BS=(e,t=OS)=>e._$AH=t,RS=e=>e._$AH,hc=e=>{e._$AR(),e._$AA.remove()};const Qf={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Lr=e=>(...t)=>({_$litDirective$:e,values:t});class jr{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}const LS={attribute:!0,type:String,converter:Cu,reflect:!1,hasChanged:Hd},jS=(e=LS,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(r==="setter"){const{name:s}=n;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e)}}throw Error("Unsupported decorator location: "+r)};function US(e){return(t,n)=>typeof n=="object"?jS(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}const nn=Lr(class extends jr{constructor(e){if(super(e),e.type!==Qf.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return pn}});const Je=e=>e??te;function _S(e,t,n){return e?t(e):n?.(e)}class VS extends Is{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function qS(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(r||i)return[...e];const o=e.map(a=>[a]);return o.length||(o[0]=[]),n.forEach(a=>{a>=0&&a<e.length&&(o[a]=[])}),t.forEach(a=>{const u=o[a.index];u&&u.splice(0,0,...a.values)}),o.flat()}function pd(e){return k.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function em(e){return k.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function $w(e){return qi(e,t=>{if(pd(t))return t.definition;if(em(t))return t.tagInterpolationKey||t},k.isTruthy)}const vw=new WeakMap;function WS(e,t){const n=$w(t);return Dw(vw,[e,...n]).value?.template}function zS(e,t,n){const r=$w(t);return xw(vw,[e,...r],n)}function Dw(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=Ew(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Dw(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function Ew(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function xw(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=Ew(e,t,r);if(!o)return{result:!1,reason:s};const a=i??{nested:void 0,template:void 0};if(i||e.set(o,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),xw(u,t,n,r+1)}function Cw(e,t,n){const r=WS(e,t),i=r??n();if(!r){const a=zS(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const o=i.valuesTransform(t),s=qS(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function Aw(e,t,n,r){const i=[],o=[],s=[],a=[];return e.forEach((l,c)=>{const d=i.length-1,f=i[d],y=c-1,C=t[y];r&&r(l);let D,S=[];if(typeof f=="string"&&(D=n(f,l,C),D)){i[d]=[f,D.replacement].join(""),s.push(y);const N=D.getExtraValues;S=N?N(C):[],S.length&&N?(i[d]+=" ",S.forEach((U,W)=>{W&&i.push(" ")}),a.push(U=>{const W=U[y],G=N(W);return{index:y,values:G}}),i.push(l)):i[d]+=l}D||i.push(l);const A=e.raw[c];D?(o[d]=[o[d],D.replacement,A].join(""),S.length&&S.forEach(()=>{o.push("")})):o.push(A)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function KS(...[e,t,n]){if(em(n))return{replacement:n.tagName,getExtraValues:void 0}}function ZS(e,t){return Aw(e,t,KS)}function E(e,...t){const n=Cw(e,t,()=>ZS(e,t));return au(n.strings,...n.values)}const GS={allowPolymorphicState:!1,errorHandler:void 0};function kw(e,t){const n=e.instanceState;Te(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&Te(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)})}class YS extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function tm(){return e=>class extends YS{static type=e;_type=e;constructor(t){super(e,t)}}}function rt(){return tm()}function HS(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=tm()([e,r].join("-"));return n[r]=i,n},{}):{}}function JS(e){return e?hn(e,t=>t):{}}function Fw(e,t){t in e||US()(e,t)}function XS(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function Up(e,t){const n=e;function r(s){t?XS(s,e,e.tagName):Fw(e,s)}function i(s,a){return r(a),n[a]}return new Proxy({},{get:i,set(s,a,u){r(a);const l=n[a];function c(f){s[a]=f,n[a]=f}const d=e.observablePropertyListenerMap[a];if(l!==u&&mc(l)&&d&&l.removeListener(d),mc(u))if(d)u.listen(!1,d);else{let f=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=f,u.listen(!1,f)}else mc(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return i(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function _p(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid element string name '${r}' in '${e}': element string names must begin with the element's tag name.`)})}function Vp(e,t,n){return n?_v(n,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function QS({hostClassNames:e,cssVars:t}){return{hostClasses:hn(e,(n,r)=>({name:et(r),selector:et(`:host(.${r})`)})),cssVars:t}}function e8({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&Te(t).forEach(o=>{const s=t[o],a=n[o];typeof s=="function"&&(s({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function t8({element:e,eventsMap:t,cssVars:n,slotNamesMap:r,testIdsMap:i}){function o(a){Te(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:n,slotNames:r,testIds:i,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function Ca(...e){return Tn.isEmpty(e),t=>{const n=t;if(!k.isObject(n))throw new TypeError("Cannot define element with non-object init: ${init}");return n8({...n,options:{...n.options}})}}function n8(e){if(!k.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!k.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...GS,...e.options},n=HS(e.tagName,e.events),r=JS(e.hostClasses);e.hostClasses&&_p(e.tagName,e.hostClasses),e.cssVars&&_p(e.tagName,e.cssVars);const i=e.cssVars?Or(e.cssVars):{},o=Vp(e.tagName,"slot",e.slotNames),s=Vp(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(QS({hostClassNames:r,cssVars:i})):e.styles||E``,u=e.render;function l(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:d}}const c=class extends VS{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return t8({element:this,eventsMap:n,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=l;static events=n;static render=u;static hostClasses=r;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const d=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const y=e.state(d);if(y instanceof Promise)throw new TypeError("init cannot be asynchronous");Te(y).forEach(C=>{Fw(this,C),this.instanceState[C]=y[C]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(d)instanceof Promise))throw new TypeError("init cannot be asynchronous");const f=u(d);if(f instanceof Promise)throw new TypeError("render cannot be asynchronous");return e8({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},f}catch(d){const f=kd(d,`Failed to render ${e.tagName}`);return console.error(f),this._lastRenderError=f,t.errorHandler?.(f),wt(f)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const d=this.createRenderParams();if(e.init(d)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(d=>{k.hasKey(d,"destroy")&&k.isFunction(d.destroy)&&d.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const d=this.createRenderParams();if(e.cleanup(d)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(d){kw(this,d)}observablePropertyListenerMap={};instanceInputs=Up(this,!1);instanceState=Up(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:mD(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}class r8 extends ho{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function i8(e){return new r8(e)}const qp=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},o8=Lr(class extends jr{constructor(e){if(super(e),e.type!==Qf.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],o=[];let s=0;for(const a of e)i[s]=r?r(a,s):s,o[s]=n(a,s),s++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=RS(e),{values:o,keys:s}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??=[],u=[];let l,c,d=0,f=i.length-1,y=0,C=o.length-1;for(;d<=f&&y<=C;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(a[d]===s[y])u[y]=Ei(i[d],o[y]),d++,y++;else if(a[f]===s[C])u[C]=Ei(i[f],o[C]),f--,C--;else if(a[d]===s[C])u[C]=Ei(i[d],o[C]),$s(e,u[C+1],i[d]),d++,C--;else if(a[f]===s[y])u[y]=Ei(i[f],o[y]),$s(e,i[d],i[f]),f--,y++;else if(l===void 0&&(l=qp(s,y,C),c=qp(a,d,f)),l.has(a[d]))if(l.has(a[f])){const D=c.get(s[y]),S=D!==void 0?i[D]:null;if(S===null){const A=$s(e,i[d]);Ei(A,o[y]),u[y]=A}else u[y]=Ei(S,o[y]),$s(e,i[d],S),i[D]=null;y++}else hc(i[f]),f--;else hc(i[d]),d++;for(;y<=C;){const D=$s(e,u[C+1]);Ei(D,o[y]),u[y++]=D}for(;d<=f;){const D=i[d++];D!==null&&hc(D)}return this.ut=s,BS(e,u),pn}}),s8=o8;function Aa(e,t){return ta(e,t),e.element}function a8(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ta(e,t){const n=a8(e),r=n?`: in ${n}`:"";if(e.type!==Qf.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function u8(e,t){return Lr(class extends jr{element;constructor(n){super(n),this.element=ti.instanceOf(Aa(n,e),HTMLElement)}render(...n){return t({params:n,directive:this,element:this.element}),pn}})}const Fr=u8("attributes",({element:e,params:[t],directive:n})=>{if(!t)return;const i=la(n,"allAttributesApplied",()=>new Set);Te(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===te?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function l8(e){const t=Lr(class extends jr{element;constructor(n){super(n),this.element=Aa(n,e)}render(n){return this.element.setAttribute(e,n),pn}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function V(e,t){return c8(e,t)}const c8=Lr(class extends jr{element;lastListenerMetaData;constructor(e){super(e),this.element=Aa(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),pn}});function d8(e){return V("keydown",async t=>{const n=t.code.toLowerCase();(n.includes("enter")||n.includes("return")||n==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const Wp="onDomCreated",Lu=Lr(class extends jr{element;constructor(e){super(e),ta(e,Wp)}update(e,[t]){ta(e,Wp);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),zp="onResize",Sw=Lr(class extends jr{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&f8(this.element,this.callback,e)});callback;constructor(e){super(e),ta(e,zp)}update(e,[t]){ta(e,zp),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function f8(e,t,n){const r=n[0];if(!r)throw console.error(n),new Error("Resize observation triggered but the first entry was empty.");t({target:r.target,contentRect:r.contentRect},e)}function Xt(e,t,n){return _S(e,()=>t,()=>n)}const{attributeDirective:m8}=l8("data-test-id"),Nr=m8;function Nw(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return(...r)=>i=>(t(i),Ca(...r)(n(i)))}function h8(e,t){return p8(void 0,e)}const p8=Lr(class extends jr{element;constructor(e){super(e),this.element=Aa(e,"assign")}render(e,t){return kw(this.element,t),pn}}),g8={};function y8(e,t){return t.map((n,r)=>{const i=e[r],o=e[r+1];if(i&&o){const{shouldHaveTagNameHere:s}=Iw(i,o);if(s&&k.isString(n))return{tagName:n,tagInterpolationKey:la(g8,n,()=>({tagName:n}))}}return n})}function Iw(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function w8(...[e,t,n]){const r=pd(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:o}=Iw(e,t),s=em(r);if(s&&o&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);return!o||!s?void 0:{replacement:r.tagName,getExtraValues(u){const l=pd(u)?u.inputs:void 0;return[i&&l?h8(l):void 0].filter(k.isTruthy)}}}function b8(e){}function $8(e){return Aw(e.strings,e.values,w8,b8)}function p(e,...t){const n=y8(e,t),r=LD(e,...n),i=Cw(e,n,()=>$8(r));return{...r,strings:i.strings,values:i.values}}function gd(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if(!t?.length&&!n?.length)return"";const r=[...n||[],""],o=(t??[""]).map((s,a)=>{const u=v8(s,r[a]);return`${s}${u}`});return cy(o.join(""))}function v8(e,t){return t._$litType$!=null||t._$litDirective$!=null?gd(t):Array.isArray(t)?t.map(r=>gd(r)).join(""):e.endsWith("=")?`"${t}"`:t}function Pw(e){return hn(e,(t,n)=>n instanceof ve?et(n.toString({format:"hex"})):Pw(n))}const D8="dodgerblue";function yd(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function pc({background:e,foreground:t}){return{background:e??new ve(yd(t)),foreground:t??new ve(yd(e))}}var ju;(function(e){e.Dark="dark",e.Light="light"})(ju||(ju={}));function E8(e){return e==="black"?"white":"black"}const x8={black:{foregroundFaint1:new ve("#ccc"),foregroundFaint2:new ve("#eee")},white:{foregroundFaint1:new ve("#ccc"),foregroundFaint2:new ve("#eee")}},C8={black:{backgroundFaint1:new ve("#666"),backgroundFaint2:new ve("#444")},white:{backgroundFaint1:new ve("#ccc"),backgroundFaint2:new ve("#fafafa")}};function Kp({themeColor:e=D8,themeStyle:t=ju.Light}={}){const n=new ve(e),r=new ve(t===ju.Dark?"black":"white"),i=yd(r),o=new ve(i),s={nav:{hover:pc({background:n.clone().set({"hsl.l":93})}),active:pc({background:n.clone().set({"hsl.l":90})}),selected:pc({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...C8[E8(i)],foreground:o,...x8[i]}};return Pw(s)}var ur;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ur||(ur={}));async function wd(e=1){const t=new gu;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function A8(e,t){return{element:e,children:Tw(e)}}function Tw(e,t,n){return k8(e).map(r=>{const i=Tw(r);return{element:r,children:i}})}function k8(e){return[...e.children,...e.shadowRoot?.children??[]]}function gc(e){return e.matches(":focus")}function nm(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:nm(t)}function Mw(e,t){if(t(e))return e;const n=nm(e);if(n)return Mw(n,t)}async function F8(e){return S8(e,1)}async function S8(e,t){return new Promise(n=>{new IntersectionObserver((i,o)=>{Tn.isLengthAtLeast(i,1),o.disconnect(),n(i[0].intersectionRatio>=t)}).observe(e)})}function Ni(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,o=r?.constructor.name,s=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return r}function N8(e){const t=nm(e);return t&&Mw(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}function I8({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,a=0;s<r;s++){const u=o.codePointAt(s);for(;a<n;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const P8=Pi(32);function du(e){return e.join(P8)}function Ow(e){if(!e.length)return[];const t=du(e),n=Ow(e.slice(0,-1));return[t,...n]}const T8=["error","errors"];function M8(e){return T8.includes(e)}function O8({flattenedNodes:e,searchQuery:t}){const n={};function r(i){Object.values(i.children).map(s=>(r(s),du(s.fullUrlBreadcrumbs))).forEach(s=>n[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&M8(t),s=du(i.fullUrlBreadcrumbs);if(I8({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(u=>k.isString(u)?u:gd(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||n[s]){const u=Ow(i.fullUrlBreadcrumbs);r(i),u.forEach(l=>n[l]=!0)}else n[s]=!1}),e.filter(i=>{const o=du(i.fullUrlBreadcrumbs),s=n[o];if(!k.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class rm extends Error{name="SpaRouterError"}class Zp extends rm{name="GlobalUrlEventsConsolidationError"}class B8 extends rm{name="SanitizationDepthMaxed"}ze({paths:[""],search:vt(Rt(void 0,Xf({keys:"",values:[""]}))),hash:vt(Rt(void 0,""))});const R8=ze({basePath:vt("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:vt(1,{alsoUndefined:!0}),disableWarnings:vt(!1,{alsoUndefined:!0}),isPaused:vt(!1,{alsoUndefined:!0})}),yc="://";function im(...e){const t=e.join("/"),[n,r=""]=t.includes(yc)?t.split(yc):["",t];let i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(i)return s;const c=l[u+1];let d=a;const f=c?.startsWith("?"),y=!a.includes("?")&&f,C=c==="?";if(f||y){i=!0;let D=!1;const S=l.slice(u+2).reduce((A,N)=>(N.includes("#")&&(D=!0),D?A.concat(N):[A,N].join("&")),"");d=[a,c,C?vo({value:S,prefix:"&"}):S].join("")}return s.concat(d)},[]);return[n,n?yc:"",o.join("/")].join("")}var _o;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(_o||(_o={}));var Vo;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Vo||(Vo={}));const L8=ze({encoding:vt(Rt(void 0,hd(_o))),searchParamStrategy:vt(Rt(void 0,hd(Vo)))});function Ja(e,t){return e.map(n=>{if(n!=null)return Eo(String(n),t)}).filter(n=>n!=null)}function Eo(e,t){return t?.encoding===_o.Decode?decodeURIComponent(e):t?.encoding===_o.Encode?encodeURIComponent(e):e}const j8=ze(Xf({keys:"",values:[""]}));function U8(e,t,n){const r=n?.searchParamStrategy===Vo.Clear?{}:hn(e,(s,a)=>Vv(a)),i=hn(t,(s,a)=>{if(n?.searchParamStrategy===Vo.Append){const u=r[s],l=k.isArray(u)?u:[u];if(a){const c=k.isArray(a)?a:[a];return Ja([...l,...c],n)}else return Ja(l,n)}else return k.isArray(a)?Ja(a,n):a?Ja([a],n):void 0});return _d({...r,...i},(s,a)=>!!a)}function Bw(e,t){return k.isString(e)&&!e.includes("?")?{}:(k.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...a]=uD(o,"=");return[s,a.length?a.join("="):void 0]}).reduce((o,[s,a])=>{const u=Rw({options:t,key:s,value:a}),l=la(o,u.key,()=>[]);return a!=null&&l.push(u.value),o},{})}function _8(e){if(e!=null)return k.isArray(e)?[...e]:e===""?[]:[e]}function V8(e,t){const n=qi(Object.entries(e),([r,i])=>{const o=_8(i);return o?.length?o.map(s=>{const a=Rw({options:t,key:r,value:s});return[a.key,a.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?Qt({value:n.join("&"),prefix:"?"}):""}function Rw({options:e,key:t,value:n}){return{key:Eo(t,e),value:Eo(String(n),e)}}function Lw({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:o,search:s,username:a}){return[o?o+"://":"",a?a+":":"",n?n+"@":"",kl({hostname:t,port:i}),om({hash:e,pathname:r,search:s})].join("")}function jw({pathname:e}){const t=vo({value:e,prefix:"/"});return t?t.split("/"):[]}function om({hash:e,pathname:t,search:n}){return[Qt({value:t,prefix:"/"}),n?Qt({value:n,prefix:"?"}):"",e?Qt({value:e,prefix:"#"}):""].join("")}function kl({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function Uw({hostname:e,port:t,protocol:n}){return[n,kl({hostname:e,port:t})].filter(k.isTruthy).join("://")}function xo(e,t){const n=k.isString(e)?vo({value:e,prefix:"."}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?Qt({value:Eo(r,t),prefix:"#"}):"",o=n.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),a=s?Qt({value:Eo(s,t),prefix:"?"}):"",u=o.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=c.replace(/@.*/,""),f=c.replace(/^[^@]*@/,""),y=d!==f,[C,...D]=y?d.split(":").reverse():[],S=D.toReversed().join("").replace(/[/:]/g,"")||"",A=C?.replace(/[/:]/g,"")||"",N=aD(f.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),U=N[0]?.endsWith("]")?"":N[1]===":"&&N[0]||"",G=f.replace(new RegExp(`:${U}($|/)`),"$1").replace(/\/.*/,""),Ue=f.replace(/^[^/]*(\/|$)/,"$1"),St=Eo(Ue.replace(/^[^/]*(?:\/|$)/,"/"),t),at=kl({hostname:G,port:U}),Ot=Uw({hostname:G,port:U,protocol:l}),En=Lw({hash:i,hostname:G,password:A,pathname:St,port:U,protocol:l,search:a,username:S}),jn=Bw(a),eo=jw({pathname:St});return{fullPath:om({hash:i,pathname:St,search:a}),hash:i,host:at,hostname:G,href:En,origin:Ot,password:A,pathname:St,paths:eo,port:U,protocol:l,search:a,searchParams:jn,username:S}}ze({hash:vt(Rt(void 0,"")),search:vt(Rt(void 0,"",Xf({keys:"",values:Rt(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:vt(Rt(void 0,"")),pathname:vt(Rt(void 0,"")),paths:vt(Rt(void 0,[""])),protocol:vt(Rt(void 0,"")),username:vt(Rt(void 0,"")),password:vt(Rt(void 0,"")),port:vt(Rt(void 0,"",-1))});function q8(e,t,n){const r=!!n,i=t==null||Si(t,L8,{allowExtraKeys:!1}),o=i?xo(""):k.instanceOf(e,URL)||k.isString(e)?xo(e):e,s=i?e:t,a=k.isString(s)&&s.startsWith("."),u=k.isString(s)||k.instanceOf(s,URL)?_d(xo(s),(D,S)=>k.isTruthy(S)):s,l=r?n:i?t:void 0,c=hn(o,(D,S)=>{if(!k.hasKey(u,D))return S;const A=u[D];return k.isNumber(A)?String(A):k.isString(A)?D==="hash"&&A?Qt({value:A,prefix:"#"}):D==="pathname"?Qt({value:A,prefix:"/"}):A:S});k.hasKey(u,"paths")&&u.paths&&(c.pathname=im(a?o.pathname:"",...u.paths));const d=k.isString(u.search)?Bw(Qt({value:u.search,prefix:"?"})):Wv(u.search||{}),f=U8(c.searchParams,d,{...l,encoding:_o.None}),y=V8(f,l);return{...c,searchParams:f,search:y,paths:jw(c),fullPath:om(c),host:kl(c),origin:Uw(c),href:Lw({...c,search:y})}}const W8=ze({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:j8,hash:"",fullPath:"/",href:"/"});({...W8.default});const z8=0;function _w(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==z8)}const Fl="locationchange",Cr=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Gp=Cr?.pushState;function Yp(...e){if(!Gp)return;const t=Gp.apply(Cr,e);return globalThis.dispatchEvent(new Event(Fl)),t}const Hp=Cr?.replaceState;function Jp(...e){if(!Hp)return;const t=Hp.apply(Cr,e);return globalThis.dispatchEvent(new Event(Fl)),t}function K8(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Cr)){{if(Cr.pushState===Yp)throw new Zp("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Cr.replaceState===Jp)throw new Zp("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Cr.pushState=Yp,Cr.replaceState=Jp,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Fl))})}}function Xa(e,t){const n=xo(e),r=vo({value:vo({value:n.pathname,prefix:Qt({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],o=Object.keys(n.searchParams).length?n.searchParams:void 0,s=n.hash?vo({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class sm{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){FS(t,R8),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new bw({defaultValue:n,equalityCheck:()=>!1}),K8(),this.removeGlobalListener=dy(globalThis,Fl,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new B8("Looping route sanitization detected; aborting window URL change listener.");const r=Xa(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);k.jsonEquals(r,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:im(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Xa(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n={...Xa(globalThis.location.href,this.params.basePath),...t},r=this.sanitizeRoute(n),o=this.routeIncludesBasePath(Xa(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(r)&&this.params.basePath?{...r,paths:[this.params.basePath,...r.paths]}:r;return q8(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Qt({value:o.hash,prefix:"#"}):""},{searchParamStrategy:Vo.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=xo(r);return this.params.isPaused||!n.force&&k.jsonEquals(xo(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return _w(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new rm(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function Z8(e){return new sm({basePath:e,sanitizeRoute(t){return{paths:G8(t.paths),hash:void 0,search:void 0}}})}function G8(e){const t=e[0];if(k.isEnumValue(t,Yt)){if(t===Yt.Book)return[Yt.Book,...e.slice(1)];if(t===Yt.Search)return e[1]?[t,e[1]]:[Yt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return So.paths}const Uu=tm()("element-book-change-route"),Xp="vira-",Ze=Nw({assertInputs:e=>{if(!e.tagName.startsWith(Xp))throw new Error(`Tag name should start with '${Xp}' but got '${e.tagName}'`)}});var de=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Select="select",e.Checkbox="checkbox",e))(de||{});function wc(e,t){if(e)return t?Ud({value:e,suffix:"*"}):e}function Y8(e){return qc(e).every(t=>t.isHidden||!t.isRequired?!0:k.isString(t.value)?!!t.value:t.value!=null)}const w=Or({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"}),H8=ve;function J8(e){try{if(!e)throw new Error("invalid empty color");return new H8(e)}catch{throw new Error(`Invalid color: ${h(e)}`)}}function re({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Qp(e,t){const n=Te(t).map(r=>{const i=t[r],o=J8(i);return`${w[r].name}: ${o.toString()};`}).join(" ");return re({name:e.name,svgTemplate:p`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const X8=re({name:"Bell24Icon",svgTemplate:p`
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
    `}),Q8=re({name:"Chat24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),am=re({name:"Check24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),eN=re({name:"ChevronDown24Icon",svgTemplate:p`
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
    `}),um=re({name:"ChevronUp24Icon",svgTemplate:p`
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
    `}),Vw=re({name:"CloseX24Icon",svgTemplate:p`
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
    `}),tN=re({name:"Commit24Icon",svgTemplate:p`
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
    `}),nN=re({name:"Document24Icon",svgTemplate:p`
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
    `}),rN=re({name:"DocumentSearch24Icon",svgTemplate:p`
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
    `}),iN=re({name:"DoubleChevron24Icon",svgTemplate:p`
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
    `}),qw=re({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),In=re({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),oN=re({name:"ExternalLink24Icon",svgTemplate:p`
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
    `}),Ww=re({name:"EyeClosed24Icon",svgTemplate:p`
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
    `}),zw=re({name:"EyeOpen24Icon",svgTemplate:p`
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
    `}),sN=re({name:"Filter24Icon",svgTemplate:p`
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
    `}),aN=re({name:"Link24Icon",svgTemplate:p`
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
    `}),Kw=re({name:"Loader24Icon",svgTemplate:p`
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
    `}),Ir=Or({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),uN=E`
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
            ${uN}
        </style>
        ${Kw.svgTemplate}
    `}),lN=re({name:"Lock24Icon",svgTemplate:p`
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
    `}),Os=re({name:"Options24Icon",svgTemplate:p`
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
    `}),cN=re({name:"Pencil24Icon",svgTemplate:p`
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
    `}),dN=re({name:"Shield24Icon",svgTemplate:p`
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
    `}),fN=re({name:"SortAscending24Icon",svgTemplate:p`
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
    `}),mN=re({name:"SortDescending24Icon",svgTemplate:p`
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
    `}),hN=re({name:"SpeakerLoud24Icon",svgTemplate:p`
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
    `}),pN=re({name:"SpeakerMedium24Icon",svgTemplate:p`
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
    `}),gN=re({name:"SpeakerMuted24Icon",svgTemplate:p`
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
    `}),yN=re({name:"SpeakerQuiet24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),wN=re({name:"Star24Icon",svgTemplate:p`
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
    `}),_u=re({name:"StatusFailure24Icon",svgTemplate:p`
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
    `}),bN=re({name:"StatusInProgress24Icon",svgTemplate:p`
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
    `}),$N=re({name:"StatusSuccess24Icon",svgTemplate:p`
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
    `}),vN=re({name:"StatusUnknown24Icon",svgTemplate:p`
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
    `}),DN=re({name:"StatusWarning24Icon",svgTemplate:p`
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
    `}),EN=re({name:"Upload24Icon",svgTemplate:p`
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
    `}),Zw=re({name:"X24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),bd={Bell24Icon:X8,Chat24Icon:Q8,Check24Icon:am,ChevronDown24Icon:eN,ChevronUp24Icon:um,CloseX24Icon:Vw,Commit24Icon:tN,Document24Icon:nN,DocumentSearch24Icon:rN,DoubleChevron24Icon:iN,Element16Icon:qw,Element24Icon:In,ExternalLink24Icon:oN,EyeClosed24Icon:Ww,EyeOpen24Icon:zw,Filter24Icon:sN,Link24Icon:aN,Loader24Icon:Kw,LoaderAnimated24Icon:Ui,Lock24Icon:lN,Options24Icon:Os,Pencil24Icon:cN,Shield24Icon:dN,SortAscending24Icon:fN,SortDescending24Icon:mN,SpeakerLoud24Icon:hN,SpeakerMedium24Icon:pN,SpeakerMuted24Icon:gN,SpeakerQuiet24Icon:yN,Star24Icon:wN,StatusFailure24Icon:_u,StatusInProgress24Icon:bN,StatusSuccess24Icon:$N,StatusUnknown24Icon:vN,StatusWarning24Icon:DN,Upload24Icon:EN,X24Icon:Zw},Pn=Or({"vira-form-input-radius":"8px"}),_i=E`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,qo=Or({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":E`calc(${Pn["vira-form-input-radius"].value} + 2px)`});function ka({elementBorderSize:e,outlineGap:t=2,outlineWidth:n=2,noNesting:r}){const i=et(uy(n+t+e)),o=E`
        content: '';
        top: calc(${i} * -1);
        left: calc(${i} * -1);
        position: absolute;
        width: calc(100% + calc(${i} * 2));
        height: calc(100% + calc(${i} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${n}px solid ${qo["vira-focus-outline-color"].value};
        border-radius: ${qo["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return r?o:E`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const H=Or({"vira-form-border-color":"#cccccc","vira-form-placeholder-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-text-selection-color":"#cfe9ff","vira-form-selection-hover-background-color":"#e6f9fe","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#e6f9fe","vira-form-selection-active-foreground-color":"black","vira-form-error-foreground-color":"red","vira-form-success-foreground-color":"green","vira-form-label-font-weight":"bold"}),L=Ze()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>E`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),me=Ze()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal},styles:({hostClasses:e})=>E`
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
                font-weight: ${H["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${H["vira-form-selection-hover-background-color"].value};
            }
        }

        ${L} {
            ${w["vira-icon-stroke-width"].name}: 2px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${H["vira-form-border-color"].value};
            color: ${H["vira-form-foreground-color"].value};
            border-radius: ${Pn["vira-form-input-radius"].value};
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
                border-color: ${H["vira-form-error-foreground-color"].value};
            }

            &:active {
                background-color: ${H["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${_i};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:rt()},render({inputs:e,dispatch:t,events:n}){function r(){e.disabled||t(new n.valueChange(!e.value))}const i=e.label?p`
                  <span
                      class="label-text"
                      ${Fr(e.attributePassthrough?.text)}
                      style=${Je(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:te;return p`
            <label
                class=${nn({disabled:!!e.disabled})}
                ${Fr(e.attributePassthrough?.label)}
                style=${Je(e.stylePassthrough?.label)}
                ${V("mousedown",r)}
            >
                ${i}
                <span
                    class="custom-checkbox ${nn({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${Fr(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Je(e.stylePassthrough?.["custom-checkbox"])}
                    ${d8(r)}
                >
                    <${L.assign({icon:am,fitContainer:!0})}
                        ${Fr(e.attributePassthrough?.[L.tagName])}
                        style=${Je(e.stylePassthrough?.[L.tagName])}
                    ></${L}>
                </span>
            </label>
        `}}),lm=E`
    padding: 0;
    margin: 0;
`,Kn=E`
    ${lm};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,bc=Or({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Co={menuShadow:E`
        filter: drop-shadow(0px 5px 5px ${bc["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:E`
        filter: drop-shadow(0px -5px 5px ${bc["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:E`
        box-shadow: 0 5px 15px ${bc["modal-shadow-color"].value};
    `},Wo=E`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`;function $d({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(n=>$d({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function xN({value:e,allowed:t,blocked:n}){const r=t?$d({input:e,matcher:t}):!0,i=n?$d({input:e,matcher:n}):!1;return r&&!i}function vd(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(xN({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function CN({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){const o=Ni(n,HTMLInputElement),s=k.hasKey(n,"data")&&Bv.isString(n.data)||"";if(s){const{blocked:u}=vd({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&r(u)}const a=vd({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==a&&(o.value=a),t!==a&&i(a)}var Ao=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(Ao||{});const lt=Ze()({tagName:"vira-input",cssVars:{"vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>E`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${H["vira-form-foreground-color"].value};
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
                    font-weight: ${H["vira-form-label-font-weight"].value};
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
                ${Wo};
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
                border-radius: ${Pn["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${H["vira-form-border-color"].value};
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
                border-radius: ${Pn["vira-form-input-radius"].value};
                background-color: ${H["vira-form-background-color"].value};
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
                background: ${H["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${H["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${H["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Wo};
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
                    border-color: ${H["vira-form-error-foreground-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${_i};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:rt(),inputBlocked:rt()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Pi(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i,host:o})=>{const{filtered:s}=vd({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?p`
                  <${L.assign({icon:e.icon})} class="left-side-icon"></${L}>
              `:te,u=e.fitText?E`
                  width: ${n.forcedInputWidth}px;
              `:te,l=V("mousedown",f=>{const y=Ni(f,HTMLElement,{useOriginalTarget:!0}),C=ti.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);y!==C&&(f.preventDefault(),C.focus())}),c=e.disableBrowserHelps||e.type==="password",d=p`
            <span class="input-wrapper" ${e.label?te:l}>
                ${a}
                ${Xt(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${Sw(({contentRect:f})=>{r({forcedInputWidth:f.width})})}
                        >
                            <pre>${s||e.placeholder||te}</pre>
                        </span>
                    `)}

                <input
                    id=${Je(e.label?n.randomId:void 0)}
                    aria-label=${Je(e.label||void 0)}
                    autofocus=${!1}
                    type=${AN(e.type,n.showPassword)}
                    style=${u}
                    autocomplete=${Je(c?"off":void 0)}
                    autocorrect=${Je(c?"off":void 0)}
                    autocapitalize=${Je(c?"off":void 0)}
                    spellcheck=${Je(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${V("input",f=>{CN({inputs:e,previousValue:s,event:f,inputBlockedCallback(y){t(new i.inputBlocked(y))},newValueCallback(y){t(new i.valueChange(y))}})})}
                    placeholder=${Je(e.placeholder||void 0)}
                    ${Fr(e.attributePassthrough)}
                />

                ${Xt(!!(e.showClearButton&&e.value),p`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${V("mousedown",f=>{f.stopImmediatePropagation(),f.preventDefault()})}
                            ${V("click",()=>{e.disabled||t(new i.valueChange(""))})}
                        >
                            <${L.assign({icon:Vw})}></${L}>
                        </button>
                    `)}
                ${Xt(e.type==="password",p`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${V("mousedown",f=>{f.stopImmediatePropagation(),f.preventDefault()})}
                            ${V("click",()=>{r({showPassword:!n.showPassword})})}
                        >
                            <${L.assign({icon:n.showPassword?zw:Ww})}></${L}>
                        </button>
                    `)}
                ${Xt(!!e.suffix,p`
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
                    ${d}
                </label>
            `:d}});function AN(e,t){return e==="password"&&t?"text":e||"text"}const qe=Ze()({tagName:"vira-select",state(){return{randomId:Pi(32)}},events:{valueChange:rt()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${H["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Kn};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${Pn["vira-form-input-radius"].value};
            background-color: ${H["vira-form-background-color"].value};
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
                    color: ${H["vira-form-placeholder-color"].value};
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
                border-radius: ${Pn["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${H["vira-form-border-color"].value};
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
                font-weight: ${H["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${_i}
            }
            ${L} {
                ${_i}
            }
            & * {
                cursor: not-allowed;
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${H["vira-form-error-foreground-color"].value};
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
                    class=${nn({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Je(e.label?t.randomId:void 0)}
                    aria-label=${Je(e.label||void 0)}
                    aria-disabled=${Je(e.disabled?"true":void 0)}
                    ${V("input",a=>{const u=Ni(a,HTMLSelectElement),l=u.value;u.value!==i&&(u.selectedIndex=e.options.findIndex(c=>c.value===i)),n(new r.valueChange(l))})}
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
                <${L.assign({icon:um})} class="trigger-icon"></${L}>
            </span>
        `;return e.label?p`
                <label for=${t.randomId} ${Fr(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),zt=Ze()({tagName:"vira-form",events:{valueChange:rt(),validChange:rt()},styles:E`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:n,state:r,updateState:i}){const o=Y8(e.fields);o!==r.lastIsValid&&(i({lastIsValid:o}),t(new n.validChange({allFieldsAreValid:o})));const s=Hu(e.fields).map(([a,u])=>u.isHidden?te:u.type===de.Checkbox?p`
                        <${me.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:wc(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?Nr(u.testId):te}
                            ${V(me.events.valueChange,l=>{t(new n.valueChange({key:a,...u,value:l.detail}))})}
                        ></${me}>
                    `:u.type===de.Select?p`
                        <${qe.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:wc(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?Nr(u.testId):te}
                            ${V(qe.events.valueChange,l=>{t(new n.valueChange({key:a,...u,value:l.detail}))})}
                        ></${qe}>
                    `:p`
                        <${lt.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:wc(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===de.NewPassword?{autocomplete:"new-password"}:u.type===de.ExistingPassword?{autocomplete:"password"}:u.type===de.Email?{autocomplete:"email"}:{},type:[de.NewPassword,de.ExistingPassword,de.PlainPassword].includes(u.type)?Ao.Password:u.type===de.Email?Ao.Email:Ao.Default})}
                            ${u.testId?Nr(u.testId):te}
                            ${V(lt.events.valueChange,l=>{t(new n.valueChange({key:a,...u,value:l.detail}))})}
                        ></${lt}>
                    `);return p`
            <form ${V("submit",a=>a.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}});function kN(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given: ${pD(n)}`)}function FN(e,t=[],n=!1){return n?t.includes(e.id)?t.filter(r=>r!==e.id):[...t,e.id]:[e.id]}function e0({open:e,callback:t,popUpManager:n,host:r}){if(e){const i=n.showPopUp(r);t?.(i)}else n.removePopUp(),t?.(void 0)}const ln=Ze()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            ${Wo};
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
                <${L.assign({icon:am})}></${L}>
                <slot>${e.label}</slot>
            </div>
        `}});function SN(e,t){return e>t}function NN(e,t){return e<t}function na(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var lr;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(lr||(lr={}));var pe;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(pe||(pe={}));function Sl(e){const t={x:-1,y:-1};let n;for(;t.y<e.length-1&&!n;){t.y++;const r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;const i=r[t.x];if(i)if(i.navEntry.navParams.group){const o=Sl(i.children);o&&(n=o.node)}else i.navEntry.navParams.disabled||(n=i)}}if(n)return{node:n,coords:t}}function t0(e,t,n,r){if(!t){const u=Sl(e.children);return u?(na(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:n,navAction:pe.Navigate}):{success:!1,reason:"no default element to focus",direction:n,navAction:pe.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=Gw(t.position,n),a=r?!0:!o;return i&&a?(na(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:n,navAction:pe.Navigate,coords:s}):i?a?{success:!1,reason:"no conditions matched",direction:n,navAction:pe.Navigate}:{success:!1,reason:"wrapping blocked",direction:n,navAction:pe.Navigate}:{success:!1,reason:"failed to find node to focus",direction:n,navAction:pe.Navigate}}function Gw(e,t){let n=!1,r,i=1;const o=Date.now();for(;!n||!r;)if(r=IN(e,t,i),n=!r.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return iD.warning("Failed to find next non-disabled node."),r;return r}function IN(e,t,n){const r=e.ancestorChain[e.ancestorChain.length-1]?.node;Tn.isDefined(r,"missing parent");const i=ti.isDefined(r.children[e.nodeCoords.y]),o=r.children.length>1&&(t===lr.Down||t===lr.Up),s=t===lr.Down||t===lr.Right?n:-1*n,a=s<0?SN:NN,u=o?hh(e.nodeCoords.y+s,{min:0,max:r.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=ti.isDefined(r.children[u]),c=o?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:hh(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),d=r.children[u]?.[c],f=o?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:d,requiresWrapping:f,coords:{x:c,y:u}}}function PN(e,t,n){const r=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!r)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:pe.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=Gw(r,t),a=i?.navEntry.navParams.group?Sl(i.children):{node:i,coords:s},u=n?!0:!o;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:pe.Pibling}:u?(na(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:o,coords:a.coords,direction:t,navAction:pe.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:pe.Pibling}}var Lt;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Lt||(Lt={}));const Gn={name:"data-nav",js(e){return e?`[${Gn.name}*="${e}"]`:`[${Gn.name}]`},css({baseSelector:e="",navValue:t}={}){return E`
            ${et(e)}${et(Gn.js(t))}
        `}},cm="navEntry";function Yw(e){return cm in e}function Hw(e){if(Yw(e)){const t=e[cm];return ti.instanceOf(t,Jw,"Invalid nav entry")}else return}function TN(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Lt.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class Jw{element;navParams;navTreeNode;navValue;eventListener=TN(this);constructor(t,n,r){this.element=t,this.navParams=r,this.attachListeners(),this.navController=n}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Tn.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Gn.name,""),gc(this.element)&&this.element.blur())}focus(t,n){const r=this.navValue,i=t===(r===Lt.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Lt.Focused),gc(this.element)||this.element.focus()):(this.removeNavValue(Lt.Focused),gc(this.element)&&this.element.blur()),n||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,pe.Focus)}activate(t){const n=this.navValue,r=t===(n===Lt.Active);if(!(this.navParams.group||this.navController.locked||r))return this.focus(t,!0),t?this.setNavValue(Lt.Active):this.setNavValue(Lt.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,pe.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(Gn.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(Gn.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function Xw(e,t){Object.entries(t).forEach(([n,r])=>{k.isBoolean(r)&&r?e.setAttribute(n,""):k.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const MN=Lr(class extends jr{element;lastKey;constructor(e){super(e),this.element=Aa(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),pn}});function ON(e){return"group"in e?Lt.Group:e.disabled?Lt.Disabled:""}function n0(e,t={}){return MN(h(t),n=>{e.needsUpdate=!0;const r=!t.group&&!t.disabled;Tn.instanceOf(n,HTMLElement);const i={[Gn.name]:ON(t),tabindex:r?0:-1};Xw(n,i);const o=Hw(n)||new Jw(n,e,t);Yw(n)?(o.navParams=t,o.navController=e):n[cm]=o,r?n.style.setProperty("cursor","pointer"):n.style.removeProperty("cursor")})}function BN(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:pe.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:pe.Enter};const n=t.position.node.children[0]?.[0];return n?(na(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:pe.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:pe.Enter}}function RN(e,t){return Qw([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function Qw(e,t,n){for(let r=0;r<t.length;r++){const i=t[r];for(let o=0;o<i.length;o++){const s=i[o],a={ancestorChain:e,nodeCoords:{x:o,y:r},node:s};if(n(a))return a;const u=Qw(e.concat(a),s.children,n);if(u)return u}}}function eb(e,t){const n=RN(e,({node:r})=>!r.root&&r.navEntry===t);if(!n)throw new Error("Failed to find NavEntry in NavTree.");return n}function LN(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:pe.Exit};const n=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:pe.Exit};const{nodeCoords:r}=eb(e,n.navEntry);return na(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:pe.Exit,coords:r}}class jN extends rr()("nav-exit"){}class tb extends rr()("nav-activate"){}class UN extends rr()("nav-focus"){}class _N extends rr()("nav-enter"){}class VN extends rr()("nav-navigate"){}class qN extends rr()("nav-navigate-pibling"){}function WN(e){return{root:!0,children:nb(e)?.children||[]}}function nb(e){const t=e.element;if(!(t instanceof HTMLElement))return;const n=Hw(t),r=zN(e);if((n?.navParams.group?!!r.length:!1)||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function zN(e){const t=[];function n(r){if(r.navEntry?.navParams.group&&!r.children.length)return;if(!r.navEntry){r.children.forEach(a=>a.forEach(u=>n(u)));return}const i=r.navEntry.navParams.x,o=r.navEntry.navParams.y||0,s=la(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(r):s.withX.push({x:i,node:r})}return e.children.forEach(r=>{const i=nb(r);i&&n(i)}),t.sort((r,i)=>r.y-i.y).map(r=>(r.withX.sort((i,o)=>i.x-o.x),r.withX.forEach(({x:i,node:o})=>{r.noX.splice(i,0,o)}),r.noX)).filter(k.isTruthy)}class rb extends qd{rootElement;options;constructor(t,n={}){super(),this.rootElement=t,this.options=n}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Sl(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,n,r){if(this.locked)return{success:!1,direction:void 0,navAction:r,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:r,reason:"No nav entry to operate on."};const i=eb(this.getNavTree(),t);n?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:r,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===r&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:r,coords:i.nodeCoords};return n&&(r===pe.Activate?this.dispatch(new tb({detail:o})):r===pe.Focus&&this.dispatch(new UN({detail:o}))),o}navigate({direction:t,allowWrapping:n}){if(this.locked)return{success:!1,direction:t,navAction:pe.Navigate,reason:"NavController is locked."};const r=t0(this.getNavTree(),this.currentNavEntry,t,n);return this.dispatch(new VN({detail:r})),r}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:pe.Enter,reason:"NavController is locked."};const n=BN(this.getNavTree(),this.currentNavEntry);return!n.success&&t?this.activate():(this.dispatch(new _N({detail:n})),n)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:pe.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:pe.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Tn.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:pe.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===pe.Activate&&this.currentNavEntry.entry.focus(!0);const t=LN(this.getNavTree(),this.currentNavEntry);return this.dispatch(new jN({detail:t})),t}navigatePibling({allowWrapping:t,direction:n}){if(this.locked)return{success:!1,direction:n,navAction:pe.Pibling,reason:"NavController is locked."};const r=this.getNavTree(),o={...this.currentNavEntry?PN(this.currentNavEntry,n,t):t0(r,void 0,n,t),navAction:pe.Pibling};return this.dispatch(new qN({detail:o})),o}buildNavTree(){const t=A8(this.rootElement),n=WN(t);return this.cachedNavTree=n,n}}const go=Ze()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>E`
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
                    ${V("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),r0={item:"menu-item"},Bs=Ze()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new rb(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>E`
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
            background-color: ${H["vira-form-background-color"].value};
            color: ${H["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Kn};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${Gn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Lt.Focused})}, ${Gn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Lt.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${H["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${Gn.css({baseSelector:".menu-item:not(.disabled)",navValue:Lt.Focused})},
                ${Gn.css({baseSelector:".menu-item:not(.disabled)",navValue:Lt.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${H["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${ln} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${_i};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){kN(e.items);const n=e.items.map(r=>{const i=!!e.selected?.includes(r.id),o=k.isString(r.label)?p`
                      <${ln.assign({label:r.label,selected:i,hideCheckIcon:e.hideCheckIcons})}></${ln}>
                  `:r.label,s=r.disabled||!e.isMultiSelect&&i;return r.route?p`
                    <${go.assign({route:r.route})}
                        class="menu-item ${nn({disabled:!!r.disabled,selected:i})}"
                        ${Nr(r0.item)}
                        title=${Je(r.titleText||void 0)}
                        role="option"
                        ${n0(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </${go}>
                `:p`
                    <button
                        class="menu-item ${nn({disabled:!!r.disabled,selected:i})}"
                        ${Nr(r0.item)}
                        title=${Je(r.titleText||void 0)}
                        role="option"
                        ${n0(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </button>
                `});return p`
            ${n}
        `}});var dm=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(dm||{}),Vu=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Vu||{});const Rs=Ze()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${Pn["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${H["vira-form-background-color"].value};
            border: 1px solid ${H["vira-form-border-color"].value};
            color: ${H["vira-form-foreground-color"].value};
            ${Co.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${Co.menuShadowReversed}
            border-radius: ${Pn["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${Pn["vira-form-input-radius"].value};
        }
    `,render(){return p`
            <slot></slot>
        `}}),Qa=globalThis.document;class KN extends bw{constructor(){if(super({defaultValue:!!Qa?.hidden,equalityCheck:k.strictEquals}),!Qa)return;globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n,Qa));const t=n=>this.updateVisibility(n,Qa);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,n){const r=GN.includes(t.type),i=ZN.includes(t.type),o=r?!0:i?!1:n.hasFocus()||!n.hidden;this.setValue(o)}}const ZN=["blur","focusout","pagehide"],GN=["focus","focusin","pageshow"],YN=new KN;function HN(e,t){return YN.listen(e,t)}const i0={top:0,left:0,right:0,bottom:0};class ib extends Vd("hide-pop-up"){}class ob extends rr()("nav-select"){}class JN{constructor(t,n){this.navController=t,this.options={...this.options,...n}}listenTarget=new qd;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(t){let n=!1;const r=new ResizeObserver(()=>{n?this.removePopUp():n=!0});r.observe(t),this.cleanupCallbacks=[()=>{r.disconnect()},HN(!1,i=>{i||this.removePopUp()}),this.navController.listen(tb,i=>{i.detail.success&&(this.listenTarget.dispatch(new ob({detail:i.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),i.stopImmediatePropagation(),i.preventDefault())}),Wc("mousedown",i=>{this.lastRootElement&&i.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Wc("keydown",i=>{const o=i.code;o==="Escape"?this.removePopUp():this.options.supportNavigation&&(o==="ArrowDown"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:lr.Down,allowWrapping:!1})):o==="ArrowUp"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:lr.Up,allowWrapping:!1})):o==="ArrowLeft"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:lr.Left,allowWrapping:!1})):o==="ArrowRight"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:lr.Right,allowWrapping:!1})):(o==="Enter"||o==="Return"||o==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(i.stopImmediatePropagation(),i.preventDefault()))})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new ib)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=N8(t);Tn.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=hn(i0,y=>o[y]),d=hn(i0,y=>{const C=l[y],D=c[y];return Math.abs(C-D)}),f=d.top>d.bottom+r.verticalDiffThreshold&&d.bottom<r.minDownSpace;return this.attachGlobalListeners(i),{popDown:!f,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Qr=(e=>(e.Left="left",e.Right="right",e.Both="both",e))(Qr||{});const ge=Ze()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new JN(new rb(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>E`
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
            ${Wo};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${_i}
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
    `,events:{navSelect:rt(),openChange:rt(),init:rt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:o}){e.popUpManager.listen(ib,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!r.isDisabled){const s=n.shadowRoot.querySelector(".dropdown-wrapper");Tn.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(ob,s=>{r.keepOpenAfterInteraction||e0({open:!1,callback(a){t({showPopUpResult:a})},host:n,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:o,slotNames:s}){function a({emitEvent:y,open:C},D){if(n.showPopUpResult&&r.keepOpenAfterInteraction&&D){const S=o.shadowRoot.querySelector(".dropdown-trigger");if(S&&!D.composedPath().includes(S))return}e0({open:C,callback(S){i({showPopUpResult:S}),y&&e(new t.openChange(S))},host:o,popUpManager:n.popUpManager})}r.isDisabled?a({open:!1,emitEvent:!1},void 0):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?a({emitEvent:!1,open:!1},void 0):r.z_debug_forceOpenState&&!n.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=r.horizontalAnchor==="right"&&n.showPopUpResult?E`
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
        `,d=n.showPopUpResult?n.showPopUpResult.popDown?E`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                      top: calc(100% + ${r.popUpOffset?.vertical||0}px);
                      ${c}
                  `:E`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                      bottom: calc(100% + ${r.popUpOffset?.vertical||0}px);
                      ${c}
                  `:void 0;function f(y){a({emitEvent:!0,open:!n.showPopUpResult},y)}return p`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${nn({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${V("keydown",y=>{!n.showPopUpResult&&y.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},y)})}
                ${V("click",y=>{y.detail===0&&f(y)})}
                ${V("mousedown",y=>{y.button===0&&f(y)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${nn({"right-aligned":r.horizontalAnchor==="right"})}"
                    style=${d}
                >
                    ${Xt(!!n.showPopUpResult,p`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),XN={menu:"menu-trigger-menu"},Hr=Ze()({tagName:"vira-menu-trigger",styles:E`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${ge} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{itemActivate:rt(),openChange:rt()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:n,dispatch:r,events:i}){return p`
            <${ge.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||Qr.Left})}
                class=${nn({open:!!t.showPopUpResult})}
                ${V(ge.events.init,o=>{n({navController:o.detail.navController,popUpManager:o.detail.popUpManager})})}
                ${V(ge.events.openChange,o=>{!!t.showPopUpResult!=!!o.detail&&r(new i.openChange(o.detail)),n({showPopUpResult:o.detail})})}
                ${V(ge.events.navSelect,o=>{const s=o.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);r(new i.itemActivate(FN(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${ge.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?p`
                          <${Rs.assign({direction:t.showPopUpResult.popDown?Vu.Downwards:Vu.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${ge.slotNames.popUp}
                              class=${nn({"full-width-menu":e.horizontalAnchor===Qr.Both})}
                          >
                              <${Bs.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Nr(XN.menu)}
                              ></${Bs}>
                          </${Rs}>
                      `:te}
            </${ge}>
        `}}),Re=Ze()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>E`
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
        `}});var yo=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(yo||{});const ce=Ze()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Wo};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${qo["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${_i};
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
            border-radius: ${Pn["vira-form-input-radius"].value};
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
        `}});var Dd=(e=>(e.Error="error",e.Success="success",e))(Dd||{});const $c=Ze()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":"1px solid #d3d3d3","vira-card-border-radius":"16px","vira-card-padding":"16px"},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${t["vira-card-border-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${H["vira-form-error-foreground-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${H["vira-form-success-foreground-color"].value};
        }
    `,render(){return p`
            <slot></slot>
        `}}),gr=Ze()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>E`
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
    `,events:{expandChange:rt()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:o}){const s=o.expanded?E`
                  height: ${e.contentHeight}px;
              `:E`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${V("click",()=>{r(new i.expandChange(!o.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${Sw(({contentRect:a})=>{n({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),vc={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},ks=Ze()({tagName:"vira-dropdown",styles:E`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${Hr} {
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
            ${Wo};
            border: 1px solid ${H["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${Pn["vira-form-input-radius"].value};
            background-color: ${H["vira-form-background-color"].value};
            color: ${H["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:rt(),openChange:rt()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:n,events:r,updateState:i}){const o=qi(t.selected,c=>t.options.find(d=>d.id===c),k.isTruthy),s=t.icon?p`
                  <${L.assign({icon:t.icon})}
                      ${Nr(vc.icon)}
                  ></${L}>
              `:te,a=!o.length,u=t.selectionPrefix&&!a?p`
                      <span class="selected-label-prefix" ${Nr(vc.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:te,l=a?t.placeholder||"":t.isMultiSelect&&o.length>1?`${o.length} Selected`:o[0]?.label||"";return p`
            <${Hr.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||Qr.Both})}
                ${V(Hr.events.openChange,c=>{i({showPopUpResult:c.detail}),n(new r.openChange(c.detail))})}
                ${V(Hr.events.itemActivate,c=>{n(new r.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${nn({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Nr(vc.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${nn({"using-placeholder":a})}"
                        title=${Je(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${L.assign({icon:um})}
                            class="trigger-icon"
                        ></${L}>
                    </span>
                </div>
            </${Hr}>
        `}}),Mi=Ze()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>E`
        :host {
            color: ${H["vira-form-error-foreground-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return p`
            <slot></slot>
        `}}),qr=Ze()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:rt(),imageError:rt()},styles:({hostClasses:e})=>E`
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
                      <${L.assign({icon:_u})} class="error"></${L}>
                  </slot>
              `:t.loadedUrls[s]?void 0:p`
                    <slot class="status-wrapper" name=${o.loading}>
                        <${L.assign({icon:Ui})}></${L}>
                    </slot>
                `;return p`
            ${Xt(!!a,a)}
            <img
                class=${nn({hidden:!!a})}
                ${V("load",async()=>{e._debugLoadDelay&&await Oi(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[s]:!0}}),r(new i.imageLoad)})}
                ${V("error",async u=>{e._debugLoadDelay&&await Oi(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[s]:!0}}),r(new i.imageError(u.error))})}
                src=${s}
            />
        `}}),QN=["pagehide","pageshow","popstate"],yr=Ze()({tagName:"vira-modal",events:{modalClose:rt()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-modal-backdrop-filter":"blur(3px)","vira-modal-subtitle-color":"#7E7E7E","vira-modal-close-button-hover-radius":"8px","vira-modal-close-button-hover-background-color":"#E4E4E4"},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${lm};
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
            ${Co.modal}

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
    `,render({inputs:e,state:t,updateState:n,events:r,dispatch:i,slotNames:o}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),n({previousOpenValue:e.open}),e.open)){const a=QN.map(u=>Wc(u,()=>{i(new r.modalClose)}));n({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),i(new r.modalClose))}return p`
            <dialog
                ${Lu(a=>{n({dialogElement:ti.instanceOf(a,HTMLDialogElement)})})}
                ${V("close",()=>{s()})}
                ${V("click",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
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
                            ${V("click",()=>{t.dialogElement?.close()})}
                        >
                            <${L.assign({icon:Zw})}></${L}>
                        </button>
                    </div>
                    ${e.open?p`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:te}
                </div>
            </dialog>
        `}}),Bt=Ze()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>E`
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
    `,render({inputs:e,host:t}){const n=e.min||0,i=(e.max||100)-n,o=e.value-n,s=oD(Math.round(o/i*100),{min:0,max:100});return Xw(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),p`
            <div
                class="progress-bar"
                style=${s?E`
                          width: ${s}%;
                      `:E`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function sb(e){return i8({async updateCallback(t,n){if(n&&t in n.cache)return{cache:n.cache,element:n.cache[t],key:t};const r=await e[t]();return{cache:{...n?.cache,[t]:r},element:r,key:t}}})}function ab(e,{ready:t,loading:n,error:r,key:i}){return i&&e.update(i),e.value instanceof Error?r(e.value):e.value instanceof Promise?n(e.value.then(o=>({[o.key]:o.element}))):t({[e.value.key]:e.value.element})}const Ln=Nw(),Fn=Ln()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>E`
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
                ${V("click",r=>{(!e.router||_w(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new Uu(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function eI(e,t){return e.entry.entryType===Dt.Root?!1:e.entry.entryType===Dt.Page||k.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:k.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const vr=Ln()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${he["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${he["element-book-nav-hover-background-color"].value};
            color: ${he["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${he["element-book-nav-active-background-color"].value};
            color: ${he["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Fn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${he["element-book-nav-selected-background-color"].value};
            color: ${he["element-book-nav-selected-foreground-color"].value};
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
            color: ${he["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!eI(n,e.selectedPath))return;const r=E`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${r}>
                    <${Fn.assign({router:e.router,route:{paths:[Yt.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${nn({"title-row":!0,selected:e.selectedPath?k.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Xt(Do(n,Dt.ElementExample),p`
                                    <${L.assign({icon:qw})}></${L}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${Fn}>
                </li>
            `});return p`
            <${Fn.assign({route:So,router:e.router})}>
                <slot name=${ur.NavHeader}>Book</slot>
            </${Fn}>
            <ul>
                ${t}
            </ul>
        `}});async function tI(e){await wd(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await F8(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ai=Ln()({tagName:"book-error",styles:E`
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
            `)}}),ra=Ln()({tagName:"book-page-controls",events:{controlValueChange:rt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${he["element-book-page-foreground-faint-level-1-color"].value};
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

        ${lt} {
            height: 24px;
            max-width: 128px;
        }

        ${L}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],o)=>{if(i.controlType===J.Hidden)return"";const s=nI(e.currentValues[r],i,a=>{const u=k.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[r]:a}}))});return p`
                    <div class="control-wrapper">
                        ${Xt(o===0,p`
                                <${L.assign({icon:Os})}
                                    class="options-icon"
                                ></${L}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function nI(e,t,n){return oo(t,J.Hidden)?"":oo(t,J.Checkbox)?p`
            <input
                type="checkbox"
                ?checked=${e}
                ${V("input",r=>{const i=Ni(r,HTMLInputElement);n(i.checked)})}
            />
        `:oo(t,J.Color)?p`
            <input
                type="color"
                .value=${e}
                ${V("input",r=>{const i=Ni(r,HTMLInputElement);n(i.value)})}
            />
        `:oo(t,J.Text)?p`
            <${lt.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${V(lt.events.valueChange,r=>{n(r.detail)})}
            ></${lt}>
        `:oo(t,J.Number)?p`
            <input
                type="number"
                .value=${e}
                ${V("input",r=>{const i=Ni(r,HTMLInputElement);n(i.value)})}
            />
        `:oo(t,J.Dropdown)?p`
            <select
                .value=${e}
                ${V("input",r=>{const i=Ni(r,HTMLSelectElement);n(i.value)})}
            >
                ${t.options.map(r=>p`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const o0=Ln()({tagName:"book-breadcrumbs",styles:E`
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
                <${Fn.assign({route:{hash:void 0,search:void 0,paths:[Yt.Book,...s]},router:e.router})}>
                    ${n}
                </${Fn}>
                ${a}
            `}):p`
                &nbsp;
            `}}),Dc=Ln()({tagName:"book-breadcrumbs-bar",styles:E`
        :host {
            border-bottom: 1px solid
                ${he["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${he["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return p`
            ${Xt(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${o0.assign({currentRoute:e.currentRoute,router:e.router})}></${o0}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${V("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=r.value;await Oi({milliseconds:200}),r.value===i&&(r.value?t(new Uu({paths:[Yt.Search,encodeURIComponent(r.value)]})):t(new Uu(So)))})}
            />
        `}}),s0=Ln()({tagName:"book-entry-description",styles:E`
        :host {
            color: ${he["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${he["element-book-page-foreground-color"].value};
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
            `)}}),a0=Ln()({tagName:"book-page-wrapper",styles:E`
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

        ${Fn} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[Yt.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?sy(e.pageNode.entry.errors):void 0;return r&&console.error(r),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Fn.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Fn}>
                    ${r?p`
                              <${ai.assign({message:r.message})}></${ai}>
                          `:p`
                              <${s0.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${s0}>
                              <${ra.assign({config:e.pageNode.entry.controls,currentValues:Kd(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ra}>
                          `}
                </div>
            </div>
        `}}),eu=Ln()({tagName:"book-element-example-controls",styles:E`
        :host {
            display: flex;
            color: ${he["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[Yt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${Fn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Fn}>
        `}}),u0=Symbol("unset-internal-state"),l0=Ln()({tagName:"book-element-example-viewer",state(){return{isUnset:u0}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw sy(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===u0&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return p`
                ${Xt(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",wt(r)),console.error(r),p`
                <${ai.assign({message:`${t.elementExampleNode.entry.title} failed: ${wt(r)}`})}></${ai}>
            `}},options:{allowPolymorphicState:!0}}),c0=Ln()({tagName:"book-element-example-wrapper",styles:E`
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
            color: ${he["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${eu} {
            color: ${he["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${eu.assign(lD(e,["currentPageControls"]))}></${eu}>
                <${l0.assign(e)}></${l0}>
            </div>
        `}});function ub(e,t,n,r){const i=zc(n,r),o=[];if(i){const s=ub(e,t,i,r);s&&o.push(s)}if(Do(n,Dt.Page)&&!e.includes(n)){const s=Kd(t,n.fullUrlBreadcrumbs);o.push({config:n.entry.controls,current:s,breadcrumbs:hn(s,()=>n.fullUrlBreadcrumbs)})}return o.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function rI({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:i,originalTree:o}){if(!e.length&&r)return[p`
                No results
            `];const s=k.isLengthAtLeast(e,1)?ub(e,i,e[0],o):void 0,a=s&&Object.values(s.config).length&&k.isLengthAtLeast(e,1)?p`
                  <${ra.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${ra}>
              `:te,u=s8(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(Do(l,Dt.Page))return p`
                    <${a0.assign({isTopLevel:t,pageNode:l,controls:i,router:n})}
                        class="block-entry"
                    ></${a0}>
                `;if(Do(l,Dt.ElementExample)){const c=Kd(i,l.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${c0.assign({elementExampleNode:l,currentPageControls:c,router:n})}
                        class="inline-entry ${nn({"block-entry":l.entry.isVertical})}"
                    ></${c0}>
                `}else return Do(l,Dt.Root)?te:p`
                    <${ai.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${ai}>
                `});return[a,u]}const co=Ln()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:E`
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

        ${Dc} {
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
    `,events:{loadingRender:rt()},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{const o=Kc(e.currentRoute.paths),s=rI({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return p`
            <${Dc.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${Dc}>

            ${Xt(e.showLoading,p`
                    <div
                        ${Lu(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${L.assign({icon:Ui})}></${L}>
                    </div>
                    ${Xt(!!r.lastElement,p`
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
        `}});function iI(e,t,n){const r=d0(e,t);return r.length?r:(n(So),d0(e,So.paths))}function d0(e,t){return e.filter(n=>wD({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const Ec=Ca()({tagName:"element-book-app",state(){return{currentRoute:So,router:void 0,loading:!0,colors:{config:void 0,theme:Kp(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:rt()},styles:E`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${he["element-book-page-background-color"].value};
            color: ${he["element-book-page-foreground-color"].value};
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

        ${co} {
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
    `,init({host:e,state:t}){setTimeout(async()=>{await f0(e,Kc(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:o})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const d=s(c);return!k.jsonEquals(e.currentRoute,d)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(k.isTruthy).join(" - "))}function l(c){if(!a(c))return;const d=s(c);e.router?e.router.setRoute(d):r({currentRoute:{...e.currentRoute,...d}}),t.elementBookRoutePaths&&!k.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(d.paths))}try{if(t.elementBookRoutePaths&&!k.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const A=Z8(t.internalRouterConfig.basePath);r({router:A}),A.listen(!0,N=>{r({currentRoute:N})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!k.jsonEquals(c,e.colors.config)){const A=Kp(c);r({colors:{config:c,theme:A}}),JD(n,A)}const d=t._debug??!1,f=ED({entries:t.pages,debug:d});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:py(f.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const y=Kc(e.currentRoute.paths),D=(y?O8({flattenedNodes:f.flattenedNodes,searchQuery:y}):void 0)??iI(f.flattenedNodes,e.currentRoute.paths,l);u(D[0]?.entry.title);const S=e.treeBasedControls?.controls;return S?(t._debug&&console.info({currentControls:S}),p`
                <div
                    class="root"
                    ${V(Uu,async A=>{const N=A.detail;if(!a(N))return;if(r({loading:!0}),l(N),!(n.shadowRoot.querySelector(vr.tagName)instanceof vr))throw new TypeError(`Failed to find child '${vr.tagName}'`);await f0(n,y,e.currentRoute)})}
                    ${V(ra.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const N=CD(S,A.detail.fullUrlBreadcrumbs,A.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:N}})})}
                >
                    <${vr.assign({flattenedNodes:f.flattenedNodes,router:e.router,selectedPath:y?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${ur.NavHeader}
                            slot=${ur.NavHeader}
                        ></slot>
                    </${vr}>
                    <${co.assign({controls:S,currentNodes:D,currentRoute:e.currentRoute,debug:d,originalTree:f.tree,router:e.router,showLoading:e.loading})}
                        ${V(co.events.loadingRender,async A=>{await wd();const N=n.shadowRoot.querySelector(co.tagName);N?N.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${co.tagName}' for scrolling.`),await wd(),r({loading:!A.detail})})}
                    >
                        <slot
                            name=${ur.Footer}
                            slot=${ur.Footer}
                        ></slot>
                    </${co}>
                </div>
            `):p`
                    <${ai.assign({message:"Failed to generate page controls."})}></${ai}>
                `}catch(c){return console.error(c),p`
                <p class="error">${wt(c)}</p>
            `}}});async function f0(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(vr.tagName);if(!(r instanceof vr))throw new TypeError(`Failed to find child '${vr.tagName}'`);await tI(r)}const Ge=xe({title:"Elements",parent:void 0}),lb=xe({title:"Styles",parent:void 0}),cb=xe({title:"Util",parent:void 0}),oI=xe({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:J.Color,initValue:""},"Fill Color":{controlType:J.Color,initValue:""},"Stroke Width":{controlType:J.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(bd).forEach(t=>{e({title:t.name,styles:E`
                    :host(:hover) ${L} {
                        background-color: #f2f2f2;
                    }

                    ${L} {
                        padding: 8px;
                        border-radius: ${Pn["vira-form-input-radius"].value};
                    }
                `,render({controls:n}){const r=E`
                        ${w["vira-icon-fill-color"].name}: ${et(n["Fill Color"]||"inherit")};
                        ${w["vira-icon-stroke-color"].name}: ${et(n["Stroke Color"]||"inherit")};
                        ${w["vira-icon-stroke-width"].name}: ${et(n["Stroke Width"]?uy(n["Stroke Width"]):"inherit")};
                    `;return p`
                        <${L.assign({icon:t})} style=${r}></${L}>
                    `}})})}}),db={async element1(){return await Oi({seconds:2}),(await Du(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-vxSBnyoP.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await Oi({seconds:2}),(await Du(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-DnX8-lnn.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},m0=Ca()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:sb(db)}},render({state:e,inputs:t}){return ab(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(n){return p`
                    <${Mi}>
                        ${zo("Failed to import element",wt(n))}
                    </${Mi}>
                `},loading(){return p`
                    <${L.assign({icon:Ui})}></${L}>
                `},ready(n){if(n.element1)return p`
                        <${n.element1}></${n.element1}>
                    `;if(n.element2)return p`
                        <${n.element2.assign({userName:"John"})}></${n.element2}>
                    `;Tn.never("The error element will always error")}})}}),h0=Ca()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:sb(db)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),ab(e.dynamicElements,{error(n){return p`
                    <${Mi}>
                        ${zo("Failed to import element",wt(n))}
                    </${Mi}>
                `},loading(){return p`
                    <${L.assign({icon:Ui})}></${L}>
                `},ready(n){if(n.element1)return p`
                        <${n.element1}></${n.element1}>
                    `;if(n.element2)return p`
                        <${n.element2.assign({userName:"John"})}></${n.element2}>
                    `;Tn.never("The error element will always error")}})}}),p0=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],sI=xe({parent:cb,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:E`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:n}){return p`
                    <${qe.assign({value:String(t.value),options:p0})}
                        ${V(qe.events.valueChange,r=>{const i=Number(r.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);n({value:i})})}
                    ></${qe}>
                    <${m0.assign({numberValue:t.value})}></${m0}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:E`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:n}){return p`
                    <${qe.assign({value:String(t.value),options:p0})}
                        ${V(qe.events.valueChange,r=>{const i=Number(r.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);n({value:i})})}
                    ></${qe}>
                    <${h0.assign({numberValue:t.value})}></${h0}>
                `}})}}),aI=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:p`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:E`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:E`
            ${ln} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],uI=xe({title:ln.tagName,parent:Ge,controls:{Selected:{controlType:J.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:J.Text,initValue:""}},defineExamples({defineExample:e}){aI.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:n}){const r={label:n.Label||t.inputs.label,selected:n.Selected?n.Selected==="all":t.inputs.selected};return t.customTemplate?p`
                            <${ln.assign(r)}>
                                ${t.customTemplate}
                            </${ln}>
                        `:p`
                            <${ln.assign(r)}></${ln}>
                        `}})})}}),Ed=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new sm({sanitizeRoute(e){return e}})}}],lI=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:dm.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...Ed,{id:"long",label:p`
                        <${ln.assign({selected:!1})}>
                            <div
                                style=${E`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${ln}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:Qr.Both,items:[...Ed,{id:"long",label:p`
                        <${ln.assign({selected:!1})}>
                            <div
                                style=${E`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${ln}>
                    `}]}}],cI=xe({parent:Ge,title:Hr.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){lI.forEach(t=>{e({title:t.title,styles:E`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return p`
                        <${Hr.assign({items:Ed,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${Hr}>
                    `}})})}}),fb=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],dI=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...fb,{id:4,label:"link here",route:{route:{paths:["test"]},router:new sm({sanitizeRoute(e){return e}})}}]}}],fI=xe({parent:Ge,title:Bs.tagName,defineExamples({defineExample:e}){dI.forEach(t=>{e({title:t.title,render(){return p`
                        <${Bs.assign({isMultiSelect:!1,navController:void 0,items:fb,selected:[],...t.inputs})}></${Bs}>
                    `}})})}}),mb=[];zn(Vu).forEach(e=>{zn(dm).forEach(t=>{mb.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const mI=xe({parent:Ge,title:Rs.tagName,defineExamples({defineExample:e}){mb.forEach(t=>{e({title:t.title,styles:E`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return p`
                        <${Rs.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${Rs}>
                    `}})})}}),hI=xe({parent:Ge,title:ge.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:E`
                ${ge} {
                    ${qo["vira-focus-outline-border-radius"].name}: 0;
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
                    <${ge.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${ge.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${ge.slotNames.popUp}>Pop up!</div>
                    </${ge}>
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
                    <${ge.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${ge.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${ge.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ge}>
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
                    <${ge.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Qr.Right})}>
                        <div slot=${ge.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ge.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ge}>
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
                    <${ge.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Qr.Left})}>
                        <div slot=${ge.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ge.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ge}>
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
                    <${ge.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Qr.Right})}>
                        <div slot=${ge.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ge.slotNames.popUp}>not long</div>
                    </${ge}>
                `}})}}),pI=[{title:"menu shadow",styles:Co.menuShadow},{title:"menu shadow reversed",styles:Co.menuShadowReversed},{title:"modal",styles:Co.modal}],gI=xe({parent:lb,title:"Shadows",defineExamples({defineExample:e}){pI.forEach(t=>{e({title:t.title,styles:E`
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
                    `}})})}}),yI=xe({parent:Ge,title:Re.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:J.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return p`
                    <${Re.assign({text:"Text here",bold:!1})}></${Re}>
                `}}),e({title:"Bold",render(){return p`
                    <${Re.assign({text:"Text here",bold:!0})}></${Re}>
                `}}),e({title:"Dynamic",render({controls:t}){return p`
                    <${Re.assign({text:"Text here",bold:t.bolded})}></${Re}>
                `}}),e({title:"Resized",styles:E`
                ${Re} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return p`
                    <${Re.assign({text:"Not Bolded",bold:!1})}></${Re}>
                    <${Re.assign({text:"Bolded",bold:!0})}></${Re}>
                `}}),e({title:"Alignment",styles:E`
                ${Re} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return p`
                    <${Re.assign({text:"Not Bolded",bold:!1})}></${Re}>
                    <${Re.assign({text:"Bolded",bold:!0})}></${Re}>
                `}}),e({title:"Stylized",styles:E`
                ${Re} {
                    text-decoration: underline;
                }
            `,render(){return p`
                    <${Re.assign({text:"Not Bolded",bold:!1})}></${Re}>
                    <${Re.assign({text:"Bolded",bold:!0})}></${Re}>
                `}})}}),wI=xe({parent:Ge,title:ce.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:J.Color,initValue:ce.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:J.Color,initValue:ce.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:J.Color,initValue:ce.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:J.Color,initValue:ce.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:n,styles:r,inputs:i}){const o=r??E``;e({title:n,styles:o,render({controls:s}){const a=E`
                        ${ce.cssVars["vira-button-primary-color"].name}: ${et(s["Primary color"]||"inherit")};
                        ${ce.cssVars["vira-button-secondary-color"].name}: ${et(s["Secondary color"]||"inherit")};
                        ${ce.cssVars["vira-button-primary-hover-color"].name}: ${et(s["Hover color"]||"inherit")};
                        ${ce.cssVars["vira-button-primary-active-color"].name}: ${et(s["Active color"]||"inherit")};
                    `;return p`
                        <${ce.assign({text:"hello",...i})}
                            style=${a}
                        ></${ce}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Os}}),t({title:"with expanding icon",inputs:{icon:Os,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:yo.Outline}}),t({title:"only icon",inputs:{icon:Os,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:E`
                ${ce} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:E`
                ${ce} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:E`
                :host {
                    ${ce.cssVars["vira-button-primary-color"].name}: pink;
                    ${ce.cssVars["vira-button-secondary-color"].name}: purple;
                    ${ce.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${ce.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return p`
                    <${ce.assign({text:"hello"})}></${ce}>
                `}})}}),bI=[{title:"basic"},{title:"success",inputs:{cardState:Dd.Success}},{title:"error",inputs:{cardState:Dd.Error}},{title:"long",content:p`
            <p
                style=${E`
                    ${lm}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],$I=xe({parent:Ge,title:$c.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){bI.forEach(t=>{e({title:t.title,render(){return p`
                        <${$c.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${$c}>
                    `}})})}}),vI=xe({parent:Ge,title:me.tagName,controls:{Checked:{controlType:J.Checkbox,initValue:!1},Disabled:{controlType:J.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:n}){return p`
                    <${me.assign({value:t.checked})}
                        ${V(me.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${me}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:n}){return p`
                    <${me.assign({value:t.checked})}
                        ${V(me.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${me}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:n}){return p`
                    <${me.assign({value:t.checked,hasError:!0})}
                        ${V(me.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${me}>
                `}}),e({title:"disabled unchecked",render(){return p`
                    <${me.assign({value:!1,disabled:!0})}></${me}>
                `}}),e({title:"disabled checked",render(){return p`
                    <${me.assign({value:!0,disabled:!0})}></${me}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return p`
                    <${me.assign({value:t.Checked,disabled:t.Disabled})}></${me}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return p`
                    <${me.assign({value:!0})}></${me}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:n}){return p`
                    <${me.assign({value:t.checked,label:"label goes here"})}
                        ${V(me.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${me}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:n}){return p`
                    <${me.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${V(me.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${me}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:E`
                ${me} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:n}){return p`
                    <${me.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${V(me.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${me}>
                `}})}}),DI=xe({title:gr.tagName,parent:Ge,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:E`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>p`
                        <${gr.assign({expanded:!!n.expandedStates[i]})}
                            ${V(gr.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${gr.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${V("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${Xt(!!n.showMoreStates[i],p`
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
                            ${V(gr.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
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
                                ${V("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${Xt(!!n.showMoreStates[i],p`
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
                    `)}})}}),Ls=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],EI=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Ls,{id:42,label:p`
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
            ${ks} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:In}}],xI=xe({title:ks.tagName,parent:Ge,controls:{Selected:{controlType:J.Dropdown,initValue:"",options:["",...Ls.map(e=>e.label)]},Prefix:{controlType:J.Text,initValue:""},"Force State":{controlType:J.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:J.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:J.Dropdown,initValue:"",options:["",...Object.keys(bd)]},Disabled:{controlType:J.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:J.Text,initValue:"Select something"}},defineExamples({defineExample:e}){EI.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:n,updateState:r,controls:i}){const o={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||Ls,selected:i.Selected?[Ls.find(s=>s.label===i.Selected)?.id].filter(k.isTruthy):n.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?bd[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return p`
                        <${ks.assign(o)}
                            ${V(ks.events.selectedChange,s=>{r({selected:s.detail})})}
                        ></${ks}>
                    `}})})}}),CI=xe({parent:Ge,title:Mi.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return p`
                    <${Mi}>Error Content</${Mi}>
                `}})}}),xc=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],AI=xe({parent:Ge,title:zt.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:n}){const r={firstName:{type:de.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:de.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:de.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:de.Email,label:"Email Address",value:t.email},password:{type:de.NewPassword,label:"Password",value:t.password},userRole:{type:de.Select,label:"Role",options:xc,value:t.userRole,placeholder:"placeholder"},disabledField:{type:de.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:de.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return p`
                    <${zt.assign({fields:r})}
                        ${V(zt.events.valueChange,i=>{n({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${ce.assign({text:"Cancel",buttonStyle:yo.Outline})}></${ce}>
                            <${ce.assign({text:"Submit"})}></${ce}>
                        </div>
                    </${zt}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:n}){const r={firstName:{type:de.Text,label:"First Name",value:t.firstName},lastName:{type:de.Text,label:"Last Name",value:t.lastName}};return p`
                    <${zt.assign({fields:r})}
                        ${V(zt.events.valueChange,i=>{n({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <${lt.assign({value:"",label:"More stuff"})}></${lt}>
                        <div class="buttons">
                            <${ce.assign({text:"Cancel",buttonStyle:yo.Outline})}></${ce}>
                            <${ce.assign({text:"Submit"})}></${ce}>
                        </div>
                    </${zt}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${zt} {
                    width: 400px;
                }
            `,render({state:t,updateState:n}){const r={firstName:{type:de.Text,label:"First Name",value:t.firstName},lastName:{type:de.Text,label:"Last Name",value:t.lastName},subscribe:{type:de.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:de.Email,label:"Email Address",value:t.email},password:{type:de.NewPassword,label:"Password",value:t.password},userRole:{type:de.Select,label:"Role",options:xc,value:t.userRole}};return p`
                    <${zt.assign({fields:r})}
                        ${V(zt.events.valueChange,i=>{n({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${ce.assign({text:"Cancel",buttonStyle:yo.Outline})}></${ce}>
                            <${ce.assign({text:"Submit"})}></${ce}>
                        </div>
                    </${zt}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:n}){const r={firstName:{type:de.Text,label:"First Name",value:t.firstName},lastName:{type:de.Text,label:"Last Name",value:t.lastName},subscribe:{type:de.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:de.Email,label:"Email Address",value:t.email},password:{type:de.NewPassword,label:"Password",value:t.password},userRole:{type:de.Select,label:"Role",options:xc,value:t.userRole}};return p`
                    <${zt.assign({fields:r,isDisabled:!0})}
                        ${V(zt.events.valueChange,i=>{n({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${ce.assign({text:"Cancel",buttonStyle:yo.Outline})}></${ce}>
                            <${ce.assign({text:"Submit"})}></${ce}>
                        </div>
                    </${zt}>
                `}})}}),kI=xe({title:L.tagName,parent:Ge,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return p`
                    <${L.assign({icon:In})}></${L}>
                `}}),e({title:"using createColoredIcon",render(){return p`
                    <${L.assign({icon:Qp(In,{"vira-icon-stroke-color":"red"})})}></${L}>
                `}}),e({title:"fit container",styles:E`
                ${L} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return p`
                    <${L.assign({icon:Qp(In,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${L}>
                `}})}}),FI=xe({title:qr.tagName,parent:Ge,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:E`
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
                        <${L.assign({icon:_u,fitContainer:!0})}
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
                        <${L.assign({icon:_u,fitContainer:!0})}
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
                            ${V("click",()=>{n.allowReload&&i({imageUrl:`${n.inputs.imageUrl}?di=${Pi()}`})})}
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
                    `}})})}}),SI=xe({title:lt.tagName,parent:Ge,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:J.Color,initValue:H["vira-form-foreground-color"].default},"Placeholder color":{controlType:J.Color,initValue:H["vira-form-placeholder-color"].default},"Border color":{controlType:J.Color,initValue:H["vira-form-border-color"].default},"Focus color":{controlType:J.Color,initValue:qo["vira-focus-outline-color"].default},"Selection color":{controlType:J.Color,initValue:H["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:r,title:i,inputs:o}){e({title:i,styles:E`
                    ${r||E``}
                `,state(){return{value:o.value}},render({state:s,updateState:a,controls:u}){const l={[String(H["vira-form-foreground-color"].name)]:u["Text color"],[String(H["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(H["vira-form-border-color"].name)]:u["Border color"],[String(qo["vira-focus-outline-color"].name)]:u["Focus color"],[String(H["vira-form-text-selection-color"].name)]:u["Selection color"]},c=hn(l,(f,y)=>y||"inherit"),d=Object.entries(c).map(([f,y])=>[f,y].join(": ")+";").join(`
`);return p`
                        <${lt.assign({...o,value:s.value})}
                            style=${d}
                            ${V(lt.events.valueChange,f=>{a({value:f.detail}),console.info("changed:",f.detail)})}
                        ></${lt}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:In}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:E`
                    ${lt} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:In}},{title:"taller height",styles:E`
                    ${lt} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:In}},{title:"shorter height",styles:E`
                    ${lt} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:In}},{title:"max width",styles:E`
                    ${lt} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:E`
                    ${lt} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Ao.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Ao.Email,attributePassthrough:{autocomplete:"username"}}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:E`
                    ${lt} {
                        width: unset;
                    }
                `}].forEach(t)}}),NI=xe({title:go.tagName,parent:Ge,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:J.Color,initValue:""},"Hover color":{controlType:J.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:n,inputs:r}){e({title:n,render({controls:i}){const o=E`
                        ${go.cssVars["vira-link-hover-color"].name}: ${et(i["Hover color"]||"inherit")};
                        color: ${et(i["CSS Color"]||"inherit")};
                    `;return p`
                        <${go.assign(r)} style=${o}>My Link</${go}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(n,r){return console.info(n,r),!1}}}}})}}),II=xe({title:yr.tagName,parent:Ge,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:n}){return p`
                    <button
                        ${V("click",()=>{n({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${yr.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${V(yr.events.modalClose,()=>{n({modalOpen:!1})})}
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
                        ${V("click",()=>{n({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${yr.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${V(yr.events.modalClose,()=>{n({modalOpen:!1})})}
                    >
                        Modal Content
                    </${yr}>
                `}})}}),PI=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:E`
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
        `,inputs:{value:100}}],TI=xe({parent:Ge,title:Bt.tagName,defineExamples({defineExample:e}){PI.forEach(t=>{e({title:t.title,styles:E`
                    ${t.styles||E``}
                `,render(){return p`
                        <${Bt.assign({value:50,...t.inputs})}></${Bt}>
                    `}})})}}),ht=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],MI=[{title:"basic",inputs:{options:ht}},{title:"with really long option",inputs:{options:[...ht,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:ht,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:ht,disabled:!0}},{title:"error",inputs:{options:ht,hasError:!0}},{title:"with icon",inputs:{options:ht,icon:In}},{title:"custom width",inputs:{options:ht},styles:E`
            ${qe} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:ht,icon:In},styles:E`
            ${qe} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:ht,icon:In},styles:E`
            ${qe} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:ht,label:"Pick an option"}},{title:"with long label",inputs:{options:ht,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:ht,label:"Pick a really really really really long option"},styles:E`
            ${qe} {
                width: unset;
            }
        `}],OI=xe({parent:Ge,title:qe.tagName,defineExamples({defineExample:e}){MI.forEach(t=>{e({title:t.title,styles:E`
                    ${t.styles||E``}
                `,state(){return{selected:void 0}},render({state:n,updateState:r}){return p`
                        <${qe.assign({...t.inputs,value:n.selected??t.inputs.value})}
                            ${V(qe.events.valueChange,i=>{r({selected:i.detail})})}
                        ></${qe}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return p`
                    <${qe.assign({options:ht,value:ht[0]?.value})}></${qe}>
                `}}),e({title:"force update",render(){return p`
                    <${g0}></${g0}>
                `}})}}),g0=Ze()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const n=ht.findIndex(i=>i.value===t.value),r=ti.isDefined(ht[(n+1)%ht.length]).value;e({value:r}),console.info(`Forcing select to ${r}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return p`
            <${qe.assign({options:ht,value:e.value})}></${qe}>
        `}}),BI=[Ge,oI,lb,cb],RI=[yI,wI,$I,vI,DI,xI,CI,AI,kI,FI,SI,NI,uI,fI,cI,II,mI,hI,TI,OI,sI,gI].sort((e,t)=>e.title.localeCompare(t.title)),LI=[...BI,...RI];Ca()({tagName:"vira-book-app",styles:E`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Ec} {
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
            <${Ec.assign({internalRouterConfig:{basePath:im("vira"),useInternalRouter:!0},pages:LI,themeColor:"#33ccff"})}>
                <h1 slot=${ur.NavHeader}>Vira</h1>
            </${Ec}>
        `}});export{Ca as d,p as h};
