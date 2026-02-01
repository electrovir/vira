(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Jt;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(Jt||(Jt={}));function uy(e,t=r=>r){const r=new Map;return e.filter(n=>{const o=t(n);return r.get(o)?!1:(r.set(o,n),!0)})}class uh{diff(t,r,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const i=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(i,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,u,n,o)}diffWithOptionsObj(t,r,n,o){var i;const s=A=>{if(A=this.postProcess(A,n),o){setTimeout(function(){o(A)},0);return}else return A},a=r.length,u=t.length;let l=1,c=a+u;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));const d=(i=n.timeout)!==null&&i!==void 0?i:1/0,h=Date.now()+d,m=[{oldPos:-1,lastComponent:void 0}];let y=this.extractCommon(m[0],r,t,0,n);if(m[0].oldPos+1>=u&&y+1>=a)return s(this.buildValues(m[0].lastComponent,r,t));let w=-1/0,$=1/0;const k=()=>{for(let A=Math.max(w,-l);A<=Math.min($,l);A+=2){let T;const B=m[A-1],q=m[A+1];B&&(m[A-1]=void 0);let oe=!1;if(q){const de=q.oldPos-A;oe=q&&0<=de&&de<a}const De=B&&B.oldPos+1<u;if(!oe&&!De){m[A]=void 0;continue}if(!De||oe&&B.oldPos<q.oldPos?T=this.addToPath(q,!0,!1,0,n):T=this.addToPath(B,!1,!0,1,n),y=this.extractCommon(T,r,t,A,n),T.oldPos+1>=u&&y+1>=a)return s(this.buildValues(T.lastComponent,r,t))||!0;m[A]=T,T.oldPos+1>=u&&($=Math.min($,A-1)),y+1>=a&&(w=Math.max(w,A+1))}l++};if(o)(function A(){setTimeout(function(){if(l>c||Date.now()>h)return o(void 0);k()||A()},0)})();else for(;l<=c&&Date.now()<=h;){const A=k();if(A)return A}}addToPath(t,r,n,o,i){const s=t.lastComponent;return s&&!i.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+o,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,o,i){const s=r.length,a=n.length;let u=t.oldPos,l=u-o,c=0;for(;l+1<s&&u+1<a&&this.equals(n[u+1],r[l+1],i);)l++,u++,c++,i.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!i.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const o=[];let i;for(;t;)o.push(t),i=t.previousComponent,delete t.previousComponent,t=i;o.reverse();const s=o.length;let a=0,u=0,l=0;for(;a<s;a++){const c=o[a];if(c.removed)c.value=this.join(n.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let d=r.slice(u,u+c.count);d=d.map(function(h,m){const y=n[l+m];return y.length>h.length?y:h}),c.value=this.join(d)}else c.value=this.join(r.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return o}}function hg(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function mg(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function Xf(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function Qf(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function ma(e,t){return Xf(e,t,"")}function Yu(e,t){return Qf(e,t,"")}function gg(e,t){return t.slice(0,G$(e,t))}function G$(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const o=Array(n);let i=0;o[0]=0;for(let s=1;s<n;s++){for(t[s]==t[i]?o[s]=o[i]:o[s]=i;i>0&&t[s]!=t[i];)i=o[i];t[s]==t[i]&&i++}i=0;for(let s=r;s<e.length;s++){for(;i>0&&e[s]!=t[i];)i=o[i];e[s]==t[i]&&i++}return i}function ga(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function Co(e){const t=e.match(/^\s*/);return t?t[0]:""}const Il="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",H$=new RegExp(`[${Il}]+|\\s+|[^${Il}]`,"ug");class Z$ extends uh{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const a of Array.from(s.segment(t))){const u=a.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(u)?n[n.length-1]+=u:n.push(u)}}else n=t.match(H$)||[];const o=[];let i=null;return n.forEach(s=>{/\s/.test(s)?i==null?o.push(s):o.push(o.pop()+s):i!=null&&/\s/.test(i)?o[o.length-1]==i?o.push(o.pop()+s):o.push(i+s):o.push(s),i=s}),o}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,o=null,i=null;return t.forEach(s=>{s.added?o=s:s.removed?i=s:((o||i)&&pg(n,i,o,s),n=s,o=null,i=null)}),(o||i)&&pg(n,i,o,null),t}}const J$=new Z$;function Y$(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?ek(e,t,r):J$.diff(e,t,r)}function pg(e,t,r,n){if(t&&r){const o=Co(t.value),i=ga(t.value),s=Co(r.value),a=ga(r.value);if(e){const u=hg(o,s);e.value=Qf(e.value,s,u),t.value=ma(t.value,u),r.value=ma(r.value,u)}if(n){const u=mg(i,a);n.value=Xf(n.value,a,u),t.value=Yu(t.value,u),r.value=Yu(r.value,u)}}else if(r){if(e){const o=Co(r.value);r.value=r.value.substring(o.length)}if(n){const o=Co(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=Co(n.value),i=Co(t.value),s=ga(t.value),a=hg(o,i);t.value=ma(t.value,a);const u=mg(ma(o,a),s);t.value=Yu(t.value,u),n.value=Xf(n.value,o,u),e.value=Qf(e.value,o,o.slice(0,o.length-u.length))}else if(n){const o=Co(n.value),i=ga(t.value),s=gg(i,o);t.value=Yu(t.value,s)}else if(e){const o=ga(e.value),i=Co(t.value),s=gg(o,i);t.value=ma(t.value,s)}}class X$ extends uh{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Il}]+|[^\\S\\n\\r]+|[^${Il}]`,"ug");return t.match(r)||[]}}const Q$=new X$;function ek(e,t,r){return Q$.diff(e,t,r)}class tk extends uh{constructor(){super(...arguments),this.tokenize=ok}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const rk=new tk;function nk(e,t,r){return rk.diff(e,t,r)}function ok(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const i=n[o];o%2&&!t.newlineIsToken?r[r.length-1]+=i:r.push(i)}return r}function bg(e,t){return ly(e,new Map)}function ly(e,t,r){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((o,i)=>o[0].localeCompare(i[0])).forEach(([o,i])=>{const s=ly(i,t);n[o]=s}),n}else return e}var ik=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,sk=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ak=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Ad={Space_Separator:ik,ID_Start:sk,ID_Continue:ak},gt={isSpaceSeparator(e){return typeof e=="string"&&Ad.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Ad.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Ad.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let e0,hr,so,Ol,Ko,kn,Lt,lh,La;var uk=function(t,r){e0=String(t),hr="start",so=[],Ol=0,Ko=1,kn=0,Lt=void 0,lh=void 0,La=void 0;do Lt=lk(),fk[hr]();while(Lt.type!=="eof");return typeof r=="function"?t0({"":La},"",r):La};function t0(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const i=String(o),s=t0(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const i=t0(n,o,r);i===void 0?delete n[o]:Object.defineProperty(n,o,{value:i,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let ae,ie,Ca,ro,pe;function lk(){for(ae="default",ie="",Ca=!1,ro=1;;){pe=po();const e=cy[ae]();if(e)return e}}function po(){if(e0[Ol])return String.fromCodePoint(e0.codePointAt(Ol))}function P(){const e=po();return e===`
`?(Ko++,kn=0):e?kn+=e.length:kn++,e&&(Ol+=e.length),e}const cy={default(){switch(pe){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":P();return;case"/":P(),ae="comment";return;case void 0:return P(),Ze("eof")}if(gt.isSpaceSeparator(pe)){P();return}return cy[hr]()},comment(){switch(pe){case"*":P(),ae="multiLineComment";return;case"/":P(),ae="singleLineComment";return}throw Je(P())},multiLineComment(){switch(pe){case"*":P(),ae="multiLineCommentAsterisk";return;case void 0:throw Je(P())}P()},multiLineCommentAsterisk(){switch(pe){case"*":P();return;case"/":P(),ae="default";return;case void 0:throw Je(P())}P(),ae="multiLineComment"},singleLineComment(){switch(pe){case`
`:case"\r":case"\u2028":case"\u2029":P(),ae="default";return;case void 0:return P(),Ze("eof")}P()},value(){switch(pe){case"{":case"[":return Ze("punctuator",P());case"n":return P(),li("ull"),Ze("null",null);case"t":return P(),li("rue"),Ze("boolean",!0);case"f":return P(),li("alse"),Ze("boolean",!1);case"-":case"+":P()==="-"&&(ro=-1),ae="sign";return;case".":ie=P(),ae="decimalPointLeading";return;case"0":ie=P(),ae="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":ie=P(),ae="decimalInteger";return;case"I":return P(),li("nfinity"),Ze("numeric",1/0);case"N":return P(),li("aN"),Ze("numeric",NaN);case'"':case"'":Ca=P()==='"',ie="",ae="string";return}throw Je(P())},identifierNameStartEscape(){if(pe!=="u")throw Je(P());P();const e=r0();switch(e){case"$":case"_":break;default:if(!gt.isIdStartChar(e))throw yg();break}ie+=e,ae="identifierName"},identifierName(){switch(pe){case"$":case"_":case"‌":case"‍":ie+=P();return;case"\\":P(),ae="identifierNameEscape";return}if(gt.isIdContinueChar(pe)){ie+=P();return}return Ze("identifier",ie)},identifierNameEscape(){if(pe!=="u")throw Je(P());P();const e=r0();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!gt.isIdContinueChar(e))throw yg();break}ie+=e,ae="identifierName"},sign(){switch(pe){case".":ie=P(),ae="decimalPointLeading";return;case"0":ie=P(),ae="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":ie=P(),ae="decimalInteger";return;case"I":return P(),li("nfinity"),Ze("numeric",ro*(1/0));case"N":return P(),li("aN"),Ze("numeric",NaN)}throw Je(P())},zero(){switch(pe){case".":ie+=P(),ae="decimalPoint";return;case"e":case"E":ie+=P(),ae="decimalExponent";return;case"x":case"X":ie+=P(),ae="hexadecimal";return}return Ze("numeric",ro*0)},decimalInteger(){switch(pe){case".":ie+=P(),ae="decimalPoint";return;case"e":case"E":ie+=P(),ae="decimalExponent";return}if(gt.isDigit(pe)){ie+=P();return}return Ze("numeric",ro*Number(ie))},decimalPointLeading(){if(gt.isDigit(pe)){ie+=P(),ae="decimalFraction";return}throw Je(P())},decimalPoint(){switch(pe){case"e":case"E":ie+=P(),ae="decimalExponent";return}if(gt.isDigit(pe)){ie+=P(),ae="decimalFraction";return}return Ze("numeric",ro*Number(ie))},decimalFraction(){switch(pe){case"e":case"E":ie+=P(),ae="decimalExponent";return}if(gt.isDigit(pe)){ie+=P();return}return Ze("numeric",ro*Number(ie))},decimalExponent(){switch(pe){case"+":case"-":ie+=P(),ae="decimalExponentSign";return}if(gt.isDigit(pe)){ie+=P(),ae="decimalExponentInteger";return}throw Je(P())},decimalExponentSign(){if(gt.isDigit(pe)){ie+=P(),ae="decimalExponentInteger";return}throw Je(P())},decimalExponentInteger(){if(gt.isDigit(pe)){ie+=P();return}return Ze("numeric",ro*Number(ie))},hexadecimal(){if(gt.isHexDigit(pe)){ie+=P(),ae="hexadecimalInteger";return}throw Je(P())},hexadecimalInteger(){if(gt.isHexDigit(pe)){ie+=P();return}return Ze("numeric",ro*Number(ie))},string(){switch(pe){case"\\":P(),ie+=ck();return;case'"':if(Ca)return P(),Ze("string",ie);ie+=P();return;case"'":if(!Ca)return P(),Ze("string",ie);ie+=P();return;case`
`:case"\r":throw Je(P());case"\u2028":case"\u2029":hk(pe);break;case void 0:throw Je(P())}ie+=P()},start(){switch(pe){case"{":case"[":return Ze("punctuator",P())}ae="value"},beforePropertyName(){switch(pe){case"$":case"_":ie=P(),ae="identifierName";return;case"\\":P(),ae="identifierNameStartEscape";return;case"}":return Ze("punctuator",P());case'"':case"'":Ca=P()==='"',ae="string";return}if(gt.isIdStartChar(pe)){ie+=P(),ae="identifierName";return}throw Je(P())},afterPropertyName(){if(pe===":")return Ze("punctuator",P());throw Je(P())},beforePropertyValue(){ae="value"},afterPropertyValue(){switch(pe){case",":case"}":return Ze("punctuator",P())}throw Je(P())},beforeArrayValue(){if(pe==="]")return Ze("punctuator",P());ae="value"},afterArrayValue(){switch(pe){case",":case"]":return Ze("punctuator",P())}throw Je(P())},end(){throw Je(P())}};function Ze(e,t){return{type:e,value:t,line:Ko,column:kn}}function li(e){for(const t of e){if(po()!==t)throw Je(P());P()}}function ck(){switch(po()){case"b":return P(),"\b";case"f":return P(),"\f";case"n":return P(),`
`;case"r":return P(),"\r";case"t":return P(),"	";case"v":return P(),"\v";case"0":if(P(),gt.isDigit(po()))throw Je(P());return"\0";case"x":return P(),dk();case"u":return P(),r0();case`
`:case"\u2028":case"\u2029":return P(),"";case"\r":return P(),po()===`
`&&P(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Je(P());case void 0:throw Je(P())}return P()}function dk(){let e="",t=po();if(!gt.isHexDigit(t)||(e+=P(),t=po(),!gt.isHexDigit(t)))throw Je(P());return e+=P(),String.fromCodePoint(parseInt(e,16))}function r0(){let e="",t=4;for(;t-- >0;){const r=po();if(!gt.isHexDigit(r))throw Je(P());e+=P()}return String.fromCodePoint(parseInt(e,16))}const fk={start(){if(Lt.type==="eof")throw ci();Ed()},beforePropertyName(){switch(Lt.type){case"identifier":case"string":lh=Lt.value,hr="afterPropertyName";return;case"punctuator":Xu();return;case"eof":throw ci()}},afterPropertyName(){if(Lt.type==="eof")throw ci();hr="beforePropertyValue"},beforePropertyValue(){if(Lt.type==="eof")throw ci();Ed()},beforeArrayValue(){if(Lt.type==="eof")throw ci();if(Lt.type==="punctuator"&&Lt.value==="]"){Xu();return}Ed()},afterPropertyValue(){if(Lt.type==="eof")throw ci();switch(Lt.value){case",":hr="beforePropertyName";return;case"}":Xu()}},afterArrayValue(){if(Lt.type==="eof")throw ci();switch(Lt.value){case",":hr="beforeArrayValue";return;case"]":Xu()}},end(){}};function Ed(){let e;switch(Lt.type){case"punctuator":switch(Lt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Lt.value;break}if(La===void 0)La=e;else{const t=so[so.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,lh,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")so.push(e),Array.isArray(e)?hr="beforeArrayValue":hr="beforePropertyName";else{const t=so[so.length-1];t==null?hr="end":Array.isArray(t)?hr="afterArrayValue":hr="afterPropertyValue"}}function Xu(){so.pop();const e=so[so.length-1];e==null?hr="end":Array.isArray(e)?hr="afterArrayValue":hr="afterPropertyValue"}function Je(e){return Bl(e===void 0?`JSON5: invalid end of input at ${Ko}:${kn}`:`JSON5: invalid character '${dy(e)}' at ${Ko}:${kn}`)}function ci(){return Bl(`JSON5: invalid end of input at ${Ko}:${kn}`)}function yg(){return kn-=5,Bl(`JSON5: invalid identifier character at ${Ko}:${kn}`)}function hk(e){console.warn(`JSON5: '${dy(e)}' in strings is not valid ECMAScript; consider escaping`)}function dy(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Bl(e){const t=new SyntaxError(e);return t.lineNumber=Ko,t.columnNumber=kn,t}var mk=function(t,r,n){const o=[];let i="",s,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const w of r){let $;typeof w=="string"?$=w:(typeof w=="number"||w instanceof String||w instanceof Number)&&($=String(w)),$!==void 0&&s.indexOf($)<0&&s.push($)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c(w,$){let k=$[w];switch(k!=null&&(typeof k.toJSON5=="function"?k=k.toJSON5(w):typeof k.toJSON=="function"&&(k=k.toJSON(w))),a&&(k=a.call($,w,k)),k instanceof Number?k=Number(k):k instanceof String?k=String(k):k instanceof Boolean&&(k=k.valueOf()),k){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof k=="string")return d(k);if(typeof k=="number")return String(k);if(typeof k=="object")return Array.isArray(k)?y(k):h(k)}function d(w){const $={"'":.1,'"':.2},k={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let A="";for(let B=0;B<w.length;B++){const q=w[B];switch(q){case"'":case'"':$[q]++,A+=q;continue;case"\0":if(gt.isDigit(w[B+1])){A+="\\x00";continue}}if(k[q]){A+=k[q];continue}if(q<" "){let oe=q.charCodeAt(0).toString(16);A+="\\x"+("00"+oe).substring(oe.length);continue}A+=q}const T=l||Object.keys($).reduce((B,q)=>$[B]<$[q]?B:q);return A=A.replace(new RegExp(T,"g"),k[T]),T+A+T}function h(w){if(o.indexOf(w)>=0)throw TypeError("Converting circular structure to JSON5");o.push(w);let $=i;i=i+u;let k=s||Object.keys(w),A=[];for(const B of k){const q=c(B,w);if(q!==void 0){let oe=m(B)+":";u!==""&&(oe+=" "),oe+=q,A.push(oe)}}let T;if(A.length===0)T="{}";else{let B;if(u==="")B=A.join(","),T="{"+B+"}";else{let q=`,
`+i;B=A.join(q),T=`{
`+i+B+`,
`+$+"}"}}return o.pop(),i=$,T}function m(w){if(w.length===0)return d(w);const $=String.fromCodePoint(w.codePointAt(0));if(!gt.isIdStartChar($))return d(w);for(let k=$.length;k<w.length;k++)if(!gt.isIdContinueChar(String.fromCodePoint(w.codePointAt(k))))return d(w);return w}function y(w){if(o.indexOf(w)>=0)throw TypeError("Converting circular structure to JSON5");o.push(w);let $=i;i=i+u;let k=[];for(let T=0;T<w.length;T++){const B=c(String(T),w);k.push(B!==void 0?B:"null")}let A;if(k.length===0)A="[]";else if(u==="")A="["+k.join(",")+"]";else{let T=`,
`+i,B=k.join(T);A=`[
`+i+B+`,
`+$+"]"}return o.pop(),i=$,A}};const gk={parse:uk,stringify:mk};var pk=gk;const fy="__@@augment-vir-undefined-sentinel@@__",bk=new RegExp(`['"]${fy}['"]`);function b(e,t){if(typeof e=="string")return e;try{return pk.stringify(e,(n,o)=>o===void 0?fy:typeof o=="bigint"?Number(o):o,t||void 0).split(bk).join("undefined")}catch{return String(e)}}var yk=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var xn;(function(e){e.Node="node",e.Web="web"})(xn||(xn={}));function vk(){return yk?xn.Node:xn.Web}const hy=vk();function ch(e){return hy===e}function my(e){return e[hy]()}function wk(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",o=n?nk:Y$,i=[r?"":`
`,b(t&&typeof t=="object"&&!Array.isArray(t)?bg(t):t,4),`
`].join(""),s=[r?"":`
`,b(e&&typeof e=="object"&&!Array.isArray(e)?bg(e):e,4),`
`].join(""),a=$k(n,o(i,s)),u=ch(xn.Node);return[[u?co.Green:""," +added (unexpected, added in actual)",u?co.Red:""," -missing (expected, missing from actual)",u?co.Reset:""].join(""),r?`

`:`
`,a].join("")}var co;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(co||(co={}));var Rl;(function(e){e.Added="+",e.Removed="-"})(Rl||(Rl={}));function $k(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(o=>vg(o,n)).join(`
`)).join(""):t.map(n=>vg(void 0,n)).join("")}function vg(e,t){if(e!=null&&!e)return"";const r=ch(xn.Node),n=t.added?Rl.Added:t.removed?Rl.Removed:e==null?"":" ",o=t.added?co.Green:t.removed?co.Red:co.Reset;return[r?o:"",n,e??t.value,co.Reset].join("")}function je(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function kk(e){return je(e).filter(t=>isNaN(Number(t)))}function Or(e){return kk(e).map(r=>e[r])}const xk=[".",":",";",",","?","!"],Dk=new RegExp(`[${xk.join("")}]+$`);function wg(e){return e.replace(Dk,"")}function qt(e){return e==null||e===""?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):b(e)}function Ui(...e){const t=e.map(i=>qt(i)).filter(i=>!!wg(i)),r=t[t.length-1]?.endsWith("."),n=t.map(i=>wg(qt(i)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function ht(e){return e instanceof Error?e:new Error(qt(e))}function Gs(e,t){const r=ht(e),n=Ui(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var M;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(M||(M={}));var K;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(K||(K={}));K.ClientError,K.ServerError;M.Continue+"",K.Information,M.SwitchingProtocols+"",K.Information,M.Processing+"",K.Information,M.EarlyHints+"",K.Information,M.Ok+"",K.Success,M.Created+"",K.Success,M.Accepted+"",K.Success,M.NonAuthoritativeInformation+"",K.Success,M.NoContent+"",K.Success,M.ResetContent+"",K.Success,M.PartialContent+"",K.Success,M.MultiStatus+"",K.Success,M.AlreadyReported+"",K.Success,M.ImUsed+"",K.Success,M.MultipleChoices+"",K.Redirect,M.MovedPermanently+"",K.Redirect,M.Found+"",K.Redirect,M.SeeOther+"",K.Redirect,M.NotModified+"",K.Redirect,M.UseProxy+"",K.Redirect,M.Unused+"",K.Redirect,M.TemporaryRedirect+"",K.Redirect,M.PermanentRedirect+"",K.Redirect,M.BadRequest+"",K.ClientError,M.Unauthorized+"",K.ClientError,M.PaymentRequired+"",K.ClientError,M.Forbidden+"",K.ClientError,M.NotFound+"",K.ClientError,M.MethodNotAllowed+"",K.ClientError,M.NotAcceptable+"",K.ClientError,M.ProxyAuthenticationRequired+"",K.ClientError,M.RequestTimeout+"",K.ClientError,M.Conflict+"",K.ClientError,M.Gone+"",K.ClientError,M.LengthRequired+"",K.ClientError,M.PreconditionFailed+"",K.ClientError,M.PayloadTooLarge+"",K.ClientError,M.UriTooLong+"",K.ClientError,M.UnsupportedMediaType+"",K.ClientError,M.RangeNotSatisfiable+"",K.ClientError,M.ExpectationFailed+"",K.ClientError,M.ImATeapot+"",K.ClientError,M.MisdirectedRequest+"",K.ClientError,M.UnprocessableContent+"",K.ClientError,M.Locked+"",K.ClientError,M.FailedDependency+"",K.ClientError,M.TooEarly+"",K.ClientError,M.UpgradeRequired+"",K.ClientError,M.PreconditionRequired+"",K.ClientError,M.TooManyRequests+"",K.ClientError,M.RequestHeaderFieldsTooLarge+"",K.ClientError,M.UnavailableForLegalReasons+"",K.ClientError,M.InternalServerError+"",K.ServerError,M.NotImplemented+"",K.ServerError,M.BadGateway+"",K.ServerError,M.ServiceUnavailable+"",K.ServerError,M.GatewayTimeout+"",K.ServerError,M.HttpVersionNotSupported+"",K.ServerError,M.VariantAlsoNegotiates+"",K.ServerError,M.InsufficientStorage+"",K.ServerError,M.LoopDetected+"",K.ServerError,M.NotExtended+"",K.ServerError,M.NetworkAuthenticationRequired+"",K.ServerError;const Dl={[K.Information]:[M.Continue,M.SwitchingProtocols,M.Processing,M.EarlyHints],[K.Success]:[M.Ok,M.Created,M.Accepted,M.NonAuthoritativeInformation,M.NoContent,M.ResetContent,M.PartialContent,M.MultiStatus,M.AlreadyReported,M.ImUsed],[K.Redirect]:[M.MultipleChoices,M.MovedPermanently,M.Found,M.SeeOther,M.NotModified,M.UseProxy,M.Unused,M.TemporaryRedirect,M.PermanentRedirect],[K.ClientError]:[M.BadRequest,M.Unauthorized,M.PaymentRequired,M.Forbidden,M.NotFound,M.MethodNotAllowed,M.NotAcceptable,M.ProxyAuthenticationRequired,M.RequestTimeout,M.Conflict,M.Gone,M.LengthRequired,M.PreconditionFailed,M.PayloadTooLarge,M.UriTooLong,M.UnsupportedMediaType,M.RangeNotSatisfiable,M.ExpectationFailed,M.ImATeapot,M.MisdirectedRequest,M.UnprocessableContent,M.Locked,M.FailedDependency,M.TooEarly,M.UpgradeRequired,M.PreconditionRequired,M.TooManyRequests,M.RequestHeaderFieldsTooLarge,M.UnavailableForLegalReasons],[K.ServerError]:[M.InternalServerError,M.NotImplemented,M.BadGateway,M.ServiceUnavailable,M.GatewayTimeout,M.HttpVersionNotSupported,M.VariantAlsoNegotiates,M.InsufficientStorage,M.LoopDetected,M.NotExtended,M.NetworkAuthenticationRequired]};function dh({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Ll{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(ht(n))}})}}class zi extends Error{}class Ak extends zi{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Ek extends zi{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Ck extends zi{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class hs extends zi{}class gy extends zi{constructor(t){super(`Invalid unit ${t}`)}}class ir extends zi{}class Fo extends zi{constructor(){super("Zone is an abstract class")}}const z="numeric",Dn="short",_r="long",jl={year:z,month:z,day:z},py={year:z,month:Dn,day:z},Fk={year:z,month:Dn,day:z,weekday:Dn},by={year:z,month:_r,day:z},yy={year:z,month:_r,day:z,weekday:_r},vy={hour:z,minute:z},wy={hour:z,minute:z,second:z},$y={hour:z,minute:z,second:z,timeZoneName:Dn},ky={hour:z,minute:z,second:z,timeZoneName:_r},xy={hour:z,minute:z,hourCycle:"h23"},Dy={hour:z,minute:z,second:z,hourCycle:"h23"},Ay={hour:z,minute:z,second:z,hourCycle:"h23",timeZoneName:Dn},Ey={hour:z,minute:z,second:z,hourCycle:"h23",timeZoneName:_r},Cy={year:z,month:z,day:z,hour:z,minute:z},Fy={year:z,month:z,day:z,hour:z,minute:z,second:z},My={year:z,month:Dn,day:z,hour:z,minute:z},Sy={year:z,month:Dn,day:z,hour:z,minute:z,second:z},Mk={year:z,month:Dn,day:z,weekday:Dn,hour:z,minute:z},Ty={year:z,month:_r,day:z,hour:z,minute:z,timeZoneName:Dn},Ny={year:z,month:_r,day:z,hour:z,minute:z,second:z,timeZoneName:Dn},Py={year:z,month:_r,day:z,weekday:_r,hour:z,minute:z,timeZoneName:_r},Iy={year:z,month:_r,day:z,weekday:_r,hour:z,minute:z,second:z,timeZoneName:_r};class xu{get type(){throw new Fo}get name(){throw new Fo}get ianaName(){return this.name}get isUniversal(){throw new Fo}offsetName(t,r){throw new Fo}formatOffset(t,r){throw new Fo}offset(t){throw new Fo}equals(t){throw new Fo}get isValid(){throw new Fo}}let Cd=null;class $c extends xu{static get instance(){return Cd===null&&(Cd=new $c),Cd}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Wy(t,r,n)}formatOffset(t,r){return ja(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const n0=new Map;function Sk(e){let t=n0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),n0.set(e,t)),t}const Tk={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Nk(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,s,a,u,l,c]=n;return[s,o,i,a,u,l,c]}function Pk(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:s}=r[o],a=Tk[i];i==="era"?n[a]=s:te(a)||(n[a]=parseInt(s,10))}return n}const Fd=new Map;class yo extends xu{static create(t){let r=Fd.get(t);return r===void 0&&Fd.set(t,r=new yo(t)),r}static resetCache(){Fd.clear(),n0.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=yo.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Wy(t,r,n,this.name)}formatOffset(t,r){return ja(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=Sk(this.name);let[o,i,s,a,u,l,c]=n.formatToParts?Pk(n,r):Nk(n,r);a==="BC"&&(o=-Math.abs(o)+1);const h=xc({year:o,month:i,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let m=+r;const y=m%1e3;return m-=y>=0?y:1e3+y,(h-m)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let $g={};function Ik(e,t={}){const r=JSON.stringify([e,t]);let n=$g[r];return n||(n=new Intl.ListFormat(e,t),$g[r]=n),n}const o0=new Map;function i0(e,t={}){const r=JSON.stringify([e,t]);let n=o0.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),o0.set(r,n)),n}const s0=new Map;function Ok(e,t={}){const r=JSON.stringify([e,t]);let n=s0.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),s0.set(r,n)),n}const a0=new Map;function Bk(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=a0.get(o);return i===void 0&&(i=new Intl.RelativeTimeFormat(e,t),a0.set(o,i)),i}let Fa=null;function Rk(){return Fa||(Fa=new Intl.DateTimeFormat().resolvedOptions().locale,Fa)}const u0=new Map;function Oy(e){let t=u0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),u0.set(e,t)),t}const l0=new Map;function Lk(e){let t=l0.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...By,...t}),l0.set(e,t)}return t}function jk(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=i0(e).resolvedOptions(),o=e}catch{const u=e.substring(0,r);n=i0(u).resolvedOptions(),o=u}const{numberingSystem:i,calendar:s}=n;return[o,i,s]}}function _k(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function Uk(e){const t=[];for(let r=1;r<=12;r++){const n=re.utc(2009,r,1);t.push(e(n))}return t}function zk(e){const t=[];for(let r=1;r<=7;r++){const n=re.utc(2016,11,13+r);t.push(e(n))}return t}function Qu(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function Vk(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Oy(e.locale).numberingSystem==="latn"}class qk{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=Ok(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):ph(t,3);return wt(r,this.padTo)}}}class Wk{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&yo.create(a).valid?(o=a,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=i0(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Kk{constructor(t,r,n){this.opts={style:"long",...n},!r&&Vy()&&(this.rtf=Bk(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):mx(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const By={firstDay:1,minimalDays:4,weekend:[6,7]};class Me{static fromOpts(t){return Me.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,i=!1){const s=t||ot.defaultLocale,a=s||(i?"en-US":Rk()),u=r||ot.defaultNumberingSystem,l=n||ot.defaultOutputCalendar,c=d0(o)||ot.defaultWeekSettings;return new Me(a,u,l,c,s)}static resetCache(){Fa=null,o0.clear(),s0.clear(),a0.clear(),u0.clear(),l0.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return Me.create(t,r,n,o)}constructor(t,r,n,o,i){const[s,a,u]=jk(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=o,this.intl=_k(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Vk(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Me.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,d0(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return Qu(this,t,Hy,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const o=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";if(!this.monthsCache[i][t]){const s=n?a=>this.dtFormatter(a,o).format():a=>this.extract(a,o,"month");this.monthsCache[i][t]=Uk(s)}return this.monthsCache[i][t]})}weekdays(t,r=!1){return Qu(this,t,Yy,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=zk(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return Qu(this,void 0,()=>Xy,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[re.utc(2016,11,13,9),re.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Qu(this,t,Qy,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[re.utc(-40,1,1),re.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),s=i.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new qk(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Wk(t,this.intl,r)}relFormatter(t={}){return new Kk(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Ik(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Oy(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:qy()?Lk(this.locale):By}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Md=null;class mr extends xu{static get utcInstance(){return Md===null&&(Md=new mr(0)),Md}static instance(t){return t===0?mr.utcInstance:new mr(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new mr(Dc(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${ja(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${ja(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return ja(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Gk extends xu{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Oo(e,t){if(te(e)||e===null)return t;if(e instanceof xu)return e;if(Qk(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?$c.instance:r==="utc"||r==="gmt"?mr.utcInstance:mr.parseSpecifier(r)||yo.create(e)}else return Uo(e)?mr.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Gk(e)}const fh={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},kg={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Hk=fh.hanidec.replace(/[\[|\]]/g,"").split("");function Zk(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(fh.hanidec)!==-1)t+=Hk.indexOf(e[r]);else for(const o in kg){const[i,s]=kg[o];n>=i&&n<=s&&(t+=n-i)}}return parseInt(t,10)}else return t}const c0=new Map;function Jk(){c0.clear()}function pn({numberingSystem:e},t=""){const r=e||"latn";let n=c0.get(r);n===void 0&&(n=new Map,c0.set(r,n));let o=n.get(t);return o===void 0&&(o=new RegExp(`${fh[r]}${t}`),n.set(t,o)),o}let xg=()=>Date.now(),Dg="system",Ag=null,Eg=null,Cg=null,Fg=60,Mg,Sg=null;class ot{static get now(){return xg}static set now(t){xg=t}static set defaultZone(t){Dg=t}static get defaultZone(){return Oo(Dg,$c.instance)}static get defaultLocale(){return Ag}static set defaultLocale(t){Ag=t}static get defaultNumberingSystem(){return Eg}static set defaultNumberingSystem(t){Eg=t}static get defaultOutputCalendar(){return Cg}static set defaultOutputCalendar(t){Cg=t}static get defaultWeekSettings(){return Sg}static set defaultWeekSettings(t){Sg=d0(t)}static get twoDigitCutoffYear(){return Fg}static set twoDigitCutoffYear(t){Fg=t%100}static get throwOnInvalid(){return Mg}static set throwOnInvalid(t){Mg=t}static resetCaches(){Me.resetCache(),yo.resetCache(),re.resetCache(),Jk()}}class wn{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Ry=[0,31,59,90,120,151,181,212,243,273,304,334],Ly=[0,31,60,91,121,152,182,213,244,274,305,335];function sn(e,t){return new wn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function hh(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function jy(e,t,r){return r+(Du(e)?Ly:Ry)[t-1]}function _y(e,t){const r=Du(e)?Ly:Ry,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function mh(e,t){return(e-t+7)%7+1}function _l(e,t=4,r=1){const{year:n,month:o,day:i}=e,s=jy(n,o,i),a=mh(hh(n,o,i),r);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=n-1,u=Qa(l,t,r)):u>Qa(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...Ac(e)}}function Tg(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:i}=e,s=mh(hh(n,1,t),r),a=ys(n);let u=o*7+i-s-7+t,l;u<1?(l=n-1,u+=ys(l)):u>a?(l=n+1,u-=ys(n)):l=n;const{month:c,day:d}=_y(l,u);return{year:l,month:c,day:d,...Ac(e)}}function Sd(e){const{year:t,month:r,day:n}=e,o=jy(t,r,n);return{year:t,ordinal:o,...Ac(e)}}function Ng(e){const{year:t,ordinal:r}=e,{month:n,day:o}=_y(t,r);return{year:t,month:n,day:o,...Ac(e)}}function Pg(e,t){if(!te(e.localWeekday)||!te(e.localWeekNumber)||!te(e.localWeekYear)){if(!te(e.weekday)||!te(e.weekNumber)||!te(e.weekYear))throw new hs("Cannot mix locale-based week fields with ISO-based week fields");return te(e.localWeekday)||(e.weekday=e.localWeekday),te(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),te(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Yk(e,t=4,r=1){const n=kc(e.weekYear),o=an(e.weekNumber,1,Qa(e.weekYear,t,r)),i=an(e.weekday,1,7);return n?o?i?!1:sn("weekday",e.weekday):sn("week",e.weekNumber):sn("weekYear",e.weekYear)}function Xk(e){const t=kc(e.year),r=an(e.ordinal,1,ys(e.year));return t?r?!1:sn("ordinal",e.ordinal):sn("year",e.year)}function Uy(e){const t=kc(e.year),r=an(e.month,1,12),n=an(e.day,1,Ul(e.year,e.month));return t?r?n?!1:sn("day",e.day):sn("month",e.month):sn("year",e.year)}function zy(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=an(t,0,23)||t===24&&r===0&&n===0&&o===0,s=an(r,0,59),a=an(n,0,59),u=an(o,0,999);return i?s?a?u?!1:sn("millisecond",o):sn("second",n):sn("minute",r):sn("hour",t)}function te(e){return typeof e>"u"}function Uo(e){return typeof e=="number"}function kc(e){return typeof e=="number"&&e%1===0}function Qk(e){return typeof e=="string"}function ex(e){return Object.prototype.toString.call(e)==="[object Date]"}function Vy(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function qy(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function tx(e){return Array.isArray(e)?e:[e]}function Ig(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function rx(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function Cs(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function d0(e){if(e==null)return null;if(typeof e!="object")throw new ir("Week settings must be an object");if(!an(e.firstDay,1,7)||!an(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!an(t,1,7)))throw new ir("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function an(e,t,r){return kc(e)&&e>=t&&e<=r}function nx(e,t){return e-t*Math.floor(e/t)}function wt(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function No(e){if(!(te(e)||e===null||e===""))return parseInt(e,10)}function di(e){if(!(te(e)||e===null||e===""))return parseFloat(e)}function gh(e){if(!(te(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function ph(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function Du(e){return e%4===0&&(e%100!==0||e%400===0)}function ys(e){return Du(e)?366:365}function Ul(e,t){const r=nx(t-1,12)+1,n=e+(t-r)/12;return r===2?Du(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function xc(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Og(e,t,r){return-mh(hh(e,1,t),r)+t-1}function Qa(e,t=4,r=1){const n=Og(e,t,r),o=Og(e+1,t,r);return(ys(e)-n+o)/7}function f0(e){return e>99?e:e>ot.twoDigitCutoffYear?1900+e:2e3+e}function Wy(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const s={timeZoneName:t,...i},a=new Intl.DateTimeFormat(r,s).formatToParts(o).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Dc(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function Ky(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new ir(`Invalid unit value ${e}`);return t}function zl(e,t){const r={};for(const n in e)if(Cs(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=Ky(o)}return r}function ja(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${wt(r,2)}:${wt(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${wt(r,2)}${wt(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Ac(e){return rx(e,["hour","minute","second","millisecond"])}const ox=["January","February","March","April","May","June","July","August","September","October","November","December"],Gy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ix=["J","F","M","A","M","J","J","A","S","O","N","D"];function Hy(e){switch(e){case"narrow":return[...ix];case"short":return[...Gy];case"long":return[...ox];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Zy=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Jy=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],sx=["M","T","W","T","F","S","S"];function Yy(e){switch(e){case"narrow":return[...sx];case"short":return[...Jy];case"long":return[...Zy];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Xy=["AM","PM"],ax=["Before Christ","Anno Domini"],ux=["BC","AD"],lx=["B","A"];function Qy(e){switch(e){case"narrow":return[...lx];case"short":return[...ux];case"long":return[...ax];default:return null}}function cx(e){return Xy[e.hour<12?0:1]}function dx(e,t){return Yy(t)[e.weekday-1]}function fx(e,t){return Hy(t)[e.month-1]}function hx(e,t){return Qy(t)[e.year<0?0:1]}function mx(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${o[e][0]}`;case-1:return d?"yesterday":`last ${o[e][0]}`;case 0:return d?"today":`this ${o[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=o[e],c=n?u?l[1]:l[2]||l[1]:u?o[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function Bg(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const gx={D:jl,DD:py,DDD:by,DDDD:yy,t:vy,tt:wy,ttt:$y,tttt:ky,T:xy,TT:Dy,TTT:Ay,TTTT:Ey,f:Cy,ff:My,fff:Ty,ffff:Py,F:Fy,FF:Sy,FFF:Ny,FFFF:Iy};class ar{static create(t,r={}){return new ar(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||o)&&i.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",o=!o):o||a===r?n+=a:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return gx[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return wt(t,r);const o={...this.opts};return r>0&&(o.padTo=r),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(m,y)=>this.loc.extract(t,m,y),s=m=>t.isOffsetFixed&&t.offset===0&&m.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,m.format):"",a=()=>n?cx(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(m,y)=>n?fx(t,m):i(y?{month:m}:{month:m,day:"numeric"},"month"),l=(m,y)=>n?dx(t,m):i(y?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),c=m=>{const y=ar.macroTokenToFormatOpts(m);return y?this.formatWithSystemDefault(t,y):m},d=m=>n?hx(t,m):i({era:m},"era"),h=m=>{switch(m){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(m)}};return Bg(ar.parseFormat(r),h)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},i=(c,d)=>h=>{const m=o(h);if(m){const y=d.isNegativeDuration&&m!==d.largestUnit?n:1;let w;return this.opts.signMode==="negativeLargestOnly"&&m!==d.largestUnit?w="never":this.opts.signMode==="all"?w="always":w="auto",this.num(c.get(m)*y,h.length,w)}else return h},s=ar.parseFormat(r),a=s.reduce((c,{literal:d,val:h})=>d?c:c.concat(h),[]),u=t.shiftTo(...a.map(o).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return Bg(s,i(u,l))}}const e2=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Hs(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Zs(...e){return t=>e.reduce(([r,n,o],i)=>{const[s,a,u]=i(t,o);return[{...r,...s},a||n,u]},[{},null,1]).slice(0,2)}function Js(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function t2(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=No(t[r+o]);return[n,null,r+o]}}const r2=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,px=`(?:${r2.source}?(?:\\[(${e2.source})\\])?)?`,bh=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,n2=RegExp(`${bh.source}${px}`),yh=RegExp(`(?:[Tt]${n2.source})?`),bx=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,yx=/(\d{4})-?W(\d\d)(?:-?(\d))?/,vx=/(\d{4})-?(\d{3})/,wx=t2("weekYear","weekNumber","weekDay"),$x=t2("year","ordinal"),kx=/(\d{4})-(\d\d)-(\d\d)/,o2=RegExp(`${bh.source} ?(?:${r2.source}|(${e2.source}))?`),xx=RegExp(`(?: ${o2.source})?`);function vs(e,t,r){const n=e[t];return te(n)?r:No(n)}function Dx(e,t){return[{year:vs(e,t),month:vs(e,t+1,1),day:vs(e,t+2,1)},null,t+3]}function Ys(e,t){return[{hours:vs(e,t,0),minutes:vs(e,t+1,0),seconds:vs(e,t+2,0),milliseconds:gh(e[t+3])},null,t+4]}function Au(e,t){const r=!e[t]&&!e[t+1],n=Dc(e[t+1],e[t+2]),o=r?null:mr.instance(n);return[{},o,t+3]}function Eu(e,t){const r=e[t]?yo.create(e[t]):null;return[{},r,t+1]}const Ax=RegExp(`^T?${bh.source}$`),Ex=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Cx(e){const[t,r,n,o,i,s,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",h=(m,y=!1)=>m!==void 0&&(y||m&&c)?-m:m;return[{years:h(di(r)),months:h(di(n)),weeks:h(di(o)),days:h(di(i)),hours:h(di(s)),minutes:h(di(a)),seconds:h(di(u),u==="-0"),milliseconds:h(gh(l),d)}]}const Fx={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function vh(e,t,r,n,o,i,s){const a={year:t.length===2?f0(No(t)):No(t),month:Gy.indexOf(r)+1,day:No(n),hour:No(o),minute:No(i)};return s&&(a.second=No(s)),e&&(a.weekday=e.length>3?Zy.indexOf(e)+1:Jy.indexOf(e)+1),a}const Mx=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Sx(e){const[,t,r,n,o,i,s,a,u,l,c,d]=e,h=vh(t,o,n,r,i,s,a);let m;return u?m=Fx[u]:l?m=0:m=Dc(c,d),[h,new mr(m)]}function Tx(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Nx=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Px=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Ix=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Rg(e){const[,t,r,n,o,i,s,a]=e;return[vh(t,o,n,r,i,s,a),mr.utcInstance]}function Ox(e){const[,t,r,n,o,i,s,a]=e;return[vh(t,a,r,n,o,i,s),mr.utcInstance]}const Bx=Hs(bx,yh),Rx=Hs(yx,yh),Lx=Hs(vx,yh),jx=Hs(n2),i2=Zs(Dx,Ys,Au,Eu),_x=Zs(wx,Ys,Au,Eu),Ux=Zs($x,Ys,Au,Eu),zx=Zs(Ys,Au,Eu);function Vx(e){return Js(e,[Bx,i2],[Rx,_x],[Lx,Ux],[jx,zx])}function qx(e){return Js(Tx(e),[Mx,Sx])}function Wx(e){return Js(e,[Nx,Rg],[Px,Rg],[Ix,Ox])}function Kx(e){return Js(e,[Ex,Cx])}const Gx=Zs(Ys);function Hx(e){return Js(e,[Ax,Gx])}const Zx=Hs(kx,xx),Jx=Hs(o2),Yx=Zs(Ys,Au,Eu);function Xx(e){return Js(e,[Zx,i2],[Jx,Yx])}const Lg="Invalid Duration",s2={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Qx={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...s2},tn=146097/400,ns=146097/4800,e4={years:{quarters:4,months:12,weeks:tn/7,days:tn,hours:tn*24,minutes:tn*24*60,seconds:tn*24*60*60,milliseconds:tn*24*60*60*1e3},quarters:{months:3,weeks:tn/28,days:tn/4,hours:tn*24/4,minutes:tn*24*60/4,seconds:tn*24*60*60/4,milliseconds:tn*24*60*60*1e3/4},months:{weeks:ns/7,days:ns,hours:ns*24,minutes:ns*24*60,seconds:ns*24*60*60,milliseconds:ns*24*60*60*1e3},...s2},$i=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],t4=$i.slice(0).reverse();function Qn(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new ye(n)}function a2(e,t){let r=t.milliseconds??0;for(const n of t4.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function jg(e,t){const r=a2(e,t)<0?-1:1;$i.reduceRight((n,o)=>{if(te(t[o]))return n;if(n){const i=t[n]*r,s=e[o][n],a=Math.floor(i/s);t[o]+=a*r,t[n]-=a*s*r}return o},null),$i.reduce((n,o)=>{if(te(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function _g(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class ye{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?e4:Qx;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Me.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return ye.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new ir(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new ye({values:zl(t,ye.normalizeUnit),loc:Me.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Uo(t))return ye.fromMillis(t);if(ye.isDuration(t))return t;if(typeof t=="object")return ye.fromObject(t);throw new ir(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Kx(t);return n?ye.fromObject(n,r):ye.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Hx(t);return n?ye.fromObject(n,r):ye.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new ir("need to specify a reason the Duration is invalid");const n=t instanceof wn?t:new wn(t,r);if(ot.throwOnInvalid)throw new Ck(n);return new ye({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new gy(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?ar.create(this.loc,n).formatDurationFromString(this,t):Lg}toHuman(t={}){if(!this.isValid)return Lg;const r=t.showZeros!==!1,n=$i.map(o=>{const i=this.values[o];return te(i)||i===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:o.slice(0,-1)}).format(i)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=ph(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},re.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?a2(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=ye.fromDurationLike(t),n={};for(const o of $i)(Cs(r.values,o)||Cs(this.values,o))&&(n[o]=r.get(o)+this.get(o));return Qn(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=ye.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Ky(t(this.values[n],n));return Qn(this,{values:r},!0)}get(t){return this[ye.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...zl(t,ye.normalizeUnit)};return Qn(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return Qn(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return jg(this.matrix,t),Qn(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=_g(this.normalize().shiftToAll().toObject());return Qn(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>ye.normalizeUnit(s));const r={},n={},o=this.toObject();let i;for(const s of $i)if(t.indexOf(s)>=0){i=s;let a=0;for(const l in n)a+=this.matrix[l][s]*n[l],n[l]=0;Uo(o[s])&&(a+=o[s]);const u=Math.trunc(a);r[s]=u,n[s]=(a*1e3-u*1e3)/1e3}else Uo(o[s])&&(n[s]=o[s]);for(const s in n)n[s]!==0&&(r[i]+=s===i?n[s]:n[s]/this.matrix[i][s]);return jg(this.matrix,r),Qn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return Qn(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=_g(this.values);return Qn(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of $i)if(!r(this.values[n],t.values[n]))return!1;return!0}}const os="Invalid Interval";function r4(e,t){return!e||!e.isValid?dt.invalid("missing or invalid start"):!t||!t.isValid?dt.invalid("missing or invalid end"):t<e?dt.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class dt{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new ir("need to specify a reason the Interval is invalid");const n=t instanceof wn?t:new wn(t,r);if(ot.throwOnInvalid)throw new Ek(n);return new dt({invalid:n})}static fromDateTimes(t,r){const n=pa(t),o=pa(r),i=r4(n,o);return i??new dt({start:n,end:o})}static after(t,r){const n=ye.fromDurationLike(r),o=pa(t);return dt.fromDateTimes(o,o.plus(n))}static before(t,r){const n=ye.fromDurationLike(r),o=pa(t);return dt.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,s;try{i=re.fromISO(n,r),s=i.isValid}catch{s=!1}let a,u;try{a=re.fromISO(o,r),u=a.isValid}catch{u=!1}if(s&&u)return dt.fromDateTimes(i,a);if(s){const l=ye.fromISO(o,r);if(l.isValid)return dt.after(i,l)}else if(u){const l=ye.fromISO(n,r);if(l.isValid)return dt.before(a,l)}}return dt.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?dt.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(pa).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:o}=this,i=0;for(;o<this.e;){const s=r[i]||this.e,a=+s>+this.e?this.e:s;n.push(dt.fromDateTimes(o,a)),o=a,i+=1}return n}splitBy(t){const r=ye.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*o));i=+a>+this.e?this.e:a,s.push(dt.fromDateTimes(n,i)),n=i,o+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:dt.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return dt.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],s)=>i?i.overlaps(s)||i.abutsStart(s)?[o,i.union(s)]:[o.concat([i]),s]:[o,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...i),a=s.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&o.push(dt.fromDateTimes(r,u.time)),r=null);return dt.merge(o)}difference(...t){return dt.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:os}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=jl,r={}){return this.isValid?ar.create(this.s.loc.clone(r),t).formatInterval(this):os}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:os}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:os}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:os}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:os}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):ye.invalid(this.invalidReason)}mapEndpoints(t){return dt.fromDateTimes(t(this.s),t(this.e))}}class el{static hasDST(t=ot.defaultZone){const r=re.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return yo.isValidZone(t)}static normalizeZone(t){return Oo(t,ot.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Me.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Me.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Me.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Me.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Me.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Me.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Me.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Me.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Me.create(r,null,"gregory").eras(t)}static features(){return{relative:Vy(),localeWeek:qy()}}}function Ug(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(ye.fromMillis(n).as("days"))}function n4(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Ug(u,l);return(c-c%7)/7}],["days",Ug]],o={},i=e;let s,a;for(const[u,l]of n)r.indexOf(u)>=0&&(s=u,o[u]=l(e,t),a=i.plus(o),a>t?(o[u]--,e=i.plus(o),e>t&&(a=e,o[u]--,e=i.plus(o))):e=a);return[e,o,a,s]}function o4(e,t,r,n){let[o,i,s,a]=n4(e,t,r);const u=t-o,l=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(s<t&&(s=o.plus({[a]:1})),s!==o&&(i[a]=(i[a]||0)+u/(s-o)));const c=ye.fromObject(i,n);return l.length>0?ye.fromMillis(u,n).shiftTo(...l).plus(c):c}const i4="missing Intl.DateTimeFormat.formatToParts support";function Ae(e,t=r=>r){return{regex:e,deser:([r])=>t(Zk(r))}}const s4=" ",u2=`[ ${s4}]`,l2=new RegExp(u2,"g");function a4(e){return e.replace(/\./g,"\\.?").replace(l2,u2)}function zg(e){return e.replace(/\./g,"").replace(l2," ").toLowerCase()}function bn(e,t){return e===null?null:{regex:RegExp(e.map(a4).join("|")),deser:([r])=>e.findIndex(n=>zg(r)===zg(n))+t}}function Vg(e,t){return{regex:e,deser:([,r,n])=>Dc(r,n),groups:t}}function tl(e){return{regex:e,deser:([t])=>t}}function u4(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function l4(e,t){const r=pn(t),n=pn(t,"{2}"),o=pn(t,"{3}"),i=pn(t,"{4}"),s=pn(t,"{6}"),a=pn(t,"{1,2}"),u=pn(t,"{1,3}"),l=pn(t,"{1,6}"),c=pn(t,"{1,9}"),d=pn(t,"{2,4}"),h=pn(t,"{4,6}"),m=$=>({regex:RegExp(u4($.val)),deser:([k])=>k,literal:!0}),w=($=>{if(e.literal)return m($);switch($.val){case"G":return bn(t.eras("short"),0);case"GG":return bn(t.eras("long"),0);case"y":return Ae(l);case"yy":return Ae(d,f0);case"yyyy":return Ae(i);case"yyyyy":return Ae(h);case"yyyyyy":return Ae(s);case"M":return Ae(a);case"MM":return Ae(n);case"MMM":return bn(t.months("short",!0),1);case"MMMM":return bn(t.months("long",!0),1);case"L":return Ae(a);case"LL":return Ae(n);case"LLL":return bn(t.months("short",!1),1);case"LLLL":return bn(t.months("long",!1),1);case"d":return Ae(a);case"dd":return Ae(n);case"o":return Ae(u);case"ooo":return Ae(o);case"HH":return Ae(n);case"H":return Ae(a);case"hh":return Ae(n);case"h":return Ae(a);case"mm":return Ae(n);case"m":return Ae(a);case"q":return Ae(a);case"qq":return Ae(n);case"s":return Ae(a);case"ss":return Ae(n);case"S":return Ae(u);case"SSS":return Ae(o);case"u":return tl(c);case"uu":return tl(a);case"uuu":return Ae(r);case"a":return bn(t.meridiems(),0);case"kkkk":return Ae(i);case"kk":return Ae(d,f0);case"W":return Ae(a);case"WW":return Ae(n);case"E":case"c":return Ae(r);case"EEE":return bn(t.weekdays("short",!1),1);case"EEEE":return bn(t.weekdays("long",!1),1);case"ccc":return bn(t.weekdays("short",!0),1);case"cccc":return bn(t.weekdays("long",!0),1);case"Z":case"ZZ":return Vg(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return Vg(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return tl(/[a-z_+-/]{1,256}?/i);case" ":return tl(/[^\S\n\r]/);default:return m($)}})(e)||{invalidReason:i4};return w.token=e,w}const c4={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function d4(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const u=/^\s+$/.test(o);return{literal:!u,val:u?" ":o}}const i=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=c4[s];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function f4(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function h4(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const s in r)if(Cs(r,s)){const a=r[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(o[a.token.val[0]]=a.deser(n.slice(i,i+u))),i+=u}return[n,o]}else return[n,{}]}function m4(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return te(e.z)||(r=yo.create(e.z)),te(e.Z)||(r||(r=new mr(e.Z)),n=e.Z),te(e.q)||(e.M=(e.q-1)*3+1),te(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),te(e.u)||(e.S=gh(e.u)),[Object.keys(e).reduce((i,s)=>{const a=t(s);return a&&(i[a]=e[s]),i},{}),r,n]}let Td=null;function g4(){return Td||(Td=re.fromMillis(1555555555555)),Td}function p4(e,t){if(e.literal)return e;const r=ar.macroTokenToFormatOpts(e.val),n=h2(r,t);return n==null||n.includes(void 0)?e:n}function c2(e,t){return Array.prototype.concat(...e.map(r=>p4(r,t)))}class d2{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=c2(ar.parseFormat(r),t),this.units=this.tokens.map(n=>l4(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=f4(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(t){if(this.isValid){const[r,n]=h4(t,this.regex,this.handlers),[o,i,s]=n?m4(n):[null,null,void 0];if(Cs(n,"a")&&Cs(n,"H"))throw new hs("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:o,zone:i,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function f2(e,t,r){return new d2(e,r).explainFromTokens(t)}function b4(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:s}=f2(e,t,r);return[n,o,i,s]}function h2(e,t){if(!e)return null;const n=ar.create(t,e).dtFormatter(g4()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(s=>d4(s,e,i))}const Nd="Invalid DateTime",qg=864e13;function Ma(e){return new wn("unsupported zone",`the zone "${e.name}" is not supported`)}function Pd(e){return e.weekData===null&&(e.weekData=_l(e.c)),e.weekData}function Id(e){return e.localWeekData===null&&(e.localWeekData=_l(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function fi(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new re({...r,...t,old:r})}function m2(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function rl(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Al(e,t,r){return m2(xc(e),t,r)}function Wg(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,Ul(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=ye.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=xc(i);let[u,l]=m2(a,r,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function is(e,t,r,n,o,i){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=re.fromObject(e,{...r,zone:u,specificOffset:i});return s?l:l.setZone(a)}else return re.invalid(new wn("unparsable",`the input "${o}" can't be parsed as ${n}`))}function nl(e,t,r=!0){return e.isValid?ar.create(Me.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Od(e,t,r){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=wt(e.c.year,n?6:4),r==="year")return o;if(t){if(o+="-",o+=wt(e.c.month),r==="month")return o;o+="-"}else if(o+=wt(e.c.month),r==="month")return o;return o+=wt(e.c.day),o}function Kg(e,t,r,n,o,i,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=wt(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=wt(e.c.minute),s==="minute")break;a&&(u+=":",u+=wt(e.c.second))}else{if(u+=wt(e.c.minute),s==="minute")break;a&&(u+=wt(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(u+=".",u+=wt(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!i?u+="Z":e.o<0?(u+="-",u+=wt(Math.trunc(-e.o/60)),u+=":",u+=wt(Math.trunc(-e.o%60))):(u+="+",u+=wt(Math.trunc(e.o/60)),u+=":",u+=wt(Math.trunc(e.o%60)))),i&&(u+="["+e.zone.ianaName+"]"),u}const g2={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},y4={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},v4={ordinal:1,hour:0,minute:0,second:0,millisecond:0},El=["year","month","day","hour","minute","second","millisecond"],w4=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],$4=["year","ordinal","hour","minute","second","millisecond"];function Cl(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new gy(e);return t}function Gg(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Cl(e)}}function k4(e){if(Sa===void 0&&(Sa=ot.now()),e.type!=="iana")return e.offset(Sa);const t=e.name;let r=h0.get(t);return r===void 0&&(r=e.offset(Sa),h0.set(t,r)),r}function Hg(e,t){const r=Oo(t.zone,ot.defaultZone);if(!r.isValid)return re.invalid(Ma(r));const n=Me.fromObject(t);let o,i;if(te(e.year))o=ot.now();else{for(const u of El)te(e[u])&&(e[u]=g2[u]);const s=Uy(e)||zy(e);if(s)return re.invalid(s);const a=k4(r);[o,i]=Al(e,a,r)}return new re({ts:o,zone:r,loc:n,o:i})}function Zg(e,t,r){const n=te(r.round)?!0:r.round,o=te(r.rounding)?"trunc":r.rounding,i=(a,u)=>(a=ph(a,n||r.calendary?0:2,r.calendary?"round":o),t.loc.clone(r).relFormatter(r).format(a,u)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return i(s(r.unit),r.unit);for(const a of r.units){const u=s(a);if(Math.abs(u)>=1)return i(u,a)}return i(e>t?-0:0,r.units[r.units.length-1])}function Jg(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let Sa;const h0=new Map;class re{constructor(t){const r=t.zone||ot.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new wn("invalid input"):null)||(r.isValid?null:Ma(r));this.ts=te(t.ts)?ot.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const a=Uo(t.o)&&!t.old?t.o:r.offset(this.ts);o=rl(this.ts,a),n=Number.isNaN(o.year)?new wn("invalid input"):null,o=n?null:o,i=n?null:a}this._zone=r,this.loc=t.loc||Me.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new re({})}static local(){const[t,r]=Jg(arguments),[n,o,i,s,a,u,l]=r;return Hg({year:n,month:o,day:i,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=Jg(arguments),[n,o,i,s,a,u,l]=r;return t.zone=mr.utcInstance,Hg({year:n,month:o,day:i,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=ex(t)?t.valueOf():NaN;if(Number.isNaN(n))return re.invalid("invalid input");const o=Oo(r.zone,ot.defaultZone);return o.isValid?new re({ts:n,zone:o,loc:Me.fromObject(r)}):re.invalid(Ma(o))}static fromMillis(t,r={}){if(Uo(t))return t<-qg||t>qg?re.invalid("Timestamp out of range"):new re({ts:t,zone:Oo(r.zone,ot.defaultZone),loc:Me.fromObject(r)});throw new ir(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Uo(t))return new re({ts:t*1e3,zone:Oo(r.zone,ot.defaultZone),loc:Me.fromObject(r)});throw new ir("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=Oo(r.zone,ot.defaultZone);if(!n.isValid)return re.invalid(Ma(n));const o=Me.fromObject(r),i=zl(t,Gg),{minDaysInFirstWeek:s,startOfWeek:a}=Pg(i,o),u=ot.now(),l=te(r.specificOffset)?n.offset(u):r.specificOffset,c=!te(i.ordinal),d=!te(i.year),h=!te(i.month)||!te(i.day),m=d||h,y=i.weekYear||i.weekNumber;if((m||c)&&y)throw new hs("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(h&&c)throw new hs("Can't mix ordinal dates with month/day");const w=y||i.weekday&&!m;let $,k,A=rl(u,l);w?($=w4,k=y4,A=_l(A,s,a)):c?($=$4,k=v4,A=Sd(A)):($=El,k=g2);let T=!1;for(const Ge of $){const He=i[Ge];te(He)?T?i[Ge]=k[Ge]:i[Ge]=A[Ge]:T=!0}const B=w?Yk(i,s,a):c?Xk(i):Uy(i),q=B||zy(i);if(q)return re.invalid(q);const oe=w?Tg(i,s,a):c?Ng(i):i,[De,de]=Al(oe,l,n),$e=new re({ts:De,zone:n,o:de,loc:o});return i.weekday&&m&&t.weekday!==$e.weekday?re.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${$e.toISO()}`):$e.isValid?$e:re.invalid($e.invalid)}static fromISO(t,r={}){const[n,o]=Vx(t);return is(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=qx(t);return is(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=Wx(t);return is(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(te(t)||te(r))throw new ir("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,s=Me.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[a,u,l,c]=b4(s,t,r);return c?re.invalid(c):is(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return re.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=Xx(t);return is(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new ir("need to specify a reason the DateTime is invalid");const n=t instanceof wn?t:new wn(t,r);if(ot.throwOnInvalid)throw new Ak(n);return new re({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=h2(t,Me.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return c2(ar.parseFormat(t),Me.fromObject(r)).map(o=>o.val).join("")}static resetCache(){Sa=void 0,h0.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Pd(this).weekYear:NaN}get weekNumber(){return this.isValid?Pd(this).weekNumber:NaN}get weekday(){return this.isValid?Pd(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Id(this).weekday:NaN}get localWeekNumber(){return this.isValid?Id(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Id(this).weekYear:NaN}get ordinal(){return this.isValid?Sd(this.c).ordinal:NaN}get monthShort(){return this.isValid?el.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?el.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?el.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?el.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=xc(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),s=this.zone.offset(n-o*r),a=this.zone.offset(n-i*r);if(s===a)return[this];const u=n-s*r,l=n-a*r,c=rl(u,s),d=rl(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[fi(this,{ts:u}),fi(this,{ts:l})]:[this]}get isInLeapYear(){return Du(this.year)}get daysInMonth(){return Ul(this.year,this.month)}get daysInYear(){return this.isValid?ys(this.year):NaN}get weeksInWeekYear(){return this.isValid?Qa(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Qa(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=ar.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(mr.instance(t),r)}toLocal(){return this.setZone(ot.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=Oo(t,ot.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),s=this.toObject();[o]=Al(s,i,t)}return fi(this,{ts:o,zone:t})}else return re.invalid(Ma(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return fi(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=zl(t,Gg),{minDaysInFirstWeek:n,startOfWeek:o}=Pg(r,this.loc),i=!te(r.weekYear)||!te(r.weekNumber)||!te(r.weekday),s=!te(r.ordinal),a=!te(r.year),u=!te(r.month)||!te(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||s)&&c)throw new hs("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new hs("Can't mix ordinal dates with month/day");let d;i?d=Tg({..._l(this.c,n,o),...r},n,o):te(r.ordinal)?(d={...this.toObject(),...r},te(r.day)&&(d.day=Math.min(Ul(d.year,d.month),d.day))):d=Ng({...Sd(this.c),...r});const[h,m]=Al(d,this.o,this.zone);return fi(this,{ts:h,o:m})}plus(t){if(!this.isValid)return this;const r=ye.fromDurationLike(t);return fi(this,Wg(this,r))}minus(t){if(!this.isValid)return this;const r=ye.fromDurationLike(t).negate();return fi(this,Wg(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=ye.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:s}=this;s<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?ar.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Nd}toLocaleString(t=jl,r={}){return this.isValid?ar.create(this.loc.clone(r),t).formatDateTime(this):Nd}toLocaleParts(t={}){return this.isValid?ar.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=Cl(s);const a=t==="extended";let u=Od(this,a,s);return El.indexOf(s)>=3&&(u+="T"),u+=Kg(this,a,r,n,o,i,s),u}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?Od(this,t==="extended",Cl(r)):null}toISOWeekDate(){return nl(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=Cl(a),(o&&El.indexOf(a)>=3?"T":"")+Kg(this,s==="extended",r,t,n,i,a)):null}toRFC2822(){return nl(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return nl(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Od(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),nl(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Nd}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return ye.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=tx(r).map(ye.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=o4(a,u,i,o);return s?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(re.now(),t,r)}until(t){return this.isValid?dt.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=o&&o<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||re.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),Zg(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?Zg(t.base||re.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(re.isDateTime))throw new ir("min requires all arguments be DateTimes");return Ig(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(re.isDateTime))throw new ir("max requires all arguments be DateTimes");return Ig(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,s=Me.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return f2(s,t,r)}static fromStringExplain(t,r,n={}){return re.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:o=null}=r,i=Me.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new d2(i,t)}static fromFormatParser(t,r,n={}){if(te(t)||te(r))throw new ir("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:i=null}=n,s=Me.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});if(!s.equals(r.locale))throw new ir(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?re.invalid(c):is(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return jl}static get DATE_MED(){return py}static get DATE_MED_WITH_WEEKDAY(){return Fk}static get DATE_FULL(){return by}static get DATE_HUGE(){return yy}static get TIME_SIMPLE(){return vy}static get TIME_WITH_SECONDS(){return wy}static get TIME_WITH_SHORT_OFFSET(){return $y}static get TIME_WITH_LONG_OFFSET(){return ky}static get TIME_24_SIMPLE(){return xy}static get TIME_24_WITH_SECONDS(){return Dy}static get TIME_24_WITH_SHORT_OFFSET(){return Ay}static get TIME_24_WITH_LONG_OFFSET(){return Ey}static get DATETIME_SHORT(){return Cy}static get DATETIME_SHORT_WITH_SECONDS(){return Fy}static get DATETIME_MED(){return My}static get DATETIME_MED_WITH_SECONDS(){return Sy}static get DATETIME_MED_WITH_WEEKDAY(){return Mk}static get DATETIME_FULL(){return Ty}static get DATETIME_FULL_WITH_SECONDS(){return Ny}static get DATETIME_HUGE(){return Py}static get DATETIME_HUGE_WITH_SECONDS(){return Iy}}function pa(e){if(re.isDateTime(e))return e;if(e&&e.valueOf&&Uo(e.valueOf()))return re.fromJSDate(e);if(e&&typeof e=="object")return re.fromObject(e);throw new ir(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var Se;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Se||(Se={}));const x4=[Se.Milliseconds,Se.Seconds,Se.Minutes,Se.Hours,Se.Days,Se.Weeks,Se.Months,Se.Years];Se.Milliseconds+"",Se.Seconds+"",Se.Minutes+"",Se.Hours+"",Se.Days+"",Se.Weeks+"",Se.Months+"",Se.Years+"";function D4(e){return x4.filter(t=>e[t])}function m0(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function A4(e){return m0(Math.max(e-.4,0),{decimalCount:0})}function Yg(e){return e===0?0:Math.sign(e)}function Fs(e,t,r={}){const n={},o={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},i=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=D4(t).reverse();if(i||s)return a.forEach(c=>{n[c]=i?1/0:-1/0}),n;let u=ye.fromObject(e).as(Se.Milliseconds);const l=Yg(u);return a.forEach((c,d)=>{const h=d===a.length-1;if(c===Se.Milliseconds)n.milliseconds=m0(u,o);else{const m=ye.fromObject({milliseconds:u}).as(c),y=Math.sign(m),w=Math.abs(m),$=h?m0(w,o):Math.floor(o.decimalCount==null?w:A4(w)),k=$===0?0:$*y;n[c]=k,u-=ye.fromObject({[c]:k}).as(Se.Milliseconds),l!==Yg(u)&&(u=0)}}),n}Intl.DateTimeFormat().resolvedOptions().locale;var J;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(J||(J={}));J.Year,J.Hour,J.Minute,J.Second,J.Millisecond;J.Month,J.Week,J.Day;J.Millisecond,J.Second,J.Minute,J.Hour,J.Day,J.Week,J.Month,J.Year;const Xg={min:0,max:23},Qg={min:0,max:59},ep={min:0,max:59},tp={min:0,max:999};var sr;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(sr||(sr={}));sr.Sunday+"",sr.Monday+"",sr.Tuesday+"",sr.Wednesday+"",sr.Thursday+"",sr.Friday+"",sr.Saturday+"";sr.Sunday,sr.Monday,sr.Tuesday,sr.Wednesday,sr.Thursday,sr.Friday,sr.Saturday;var xr;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(xr||(xr={}));xr.January,xr.February,xr.March,xr.April,xr.May,xr.June,xr.July,xr.August,xr.September,xr.October,xr.November,xr.December;const rp={min:1,max:12},np={min:1,max:31};function Si(e){const t=new Ll,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:Fs(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function p2(...e){const t=e.join(""),r=uy(Array.from(t));return Array.from(r).join("")}function b2(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function y2(e,t){const r=p2([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return v2(e,r)}function v2(e,t){const r=p2(t);return typeof e=="string"?new RegExp(b2(e),r):new RegExp(e.source,r)}function w2(e,{caseSensitive:t}){const n="".replaceAll("i","");return v2(e,n)}function wh(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function $2(e,t){return t?typeof t=="string"?!!new RegExp(b2(t),"i").exec(e):!!y2(t,"i").exec(e):!1}class p extends Error{name="AssertionError";constructor(t,r){super(Ui(r,t)||"Assertion failed.")}}const op={interval:{milliseconds:100},timeout:{seconds:10}},Bd=Symbol("not set");async function E4(e,t,r){const{callback:n,extraAssertionArgs:o,failureMessage:i,options:s}=C4(t),a=Fs(s.timeout,{milliseconds:!0}).milliseconds,u=Fs(s.interval,{milliseconds:!0});let l=Bd,c;async function d(){try{l=r?n():await n(),e(l,...o)}catch(m){l=Bd,c=ht(m)}}const h=Date.now();for(;l===Bd;)if(await d(),await Si(u),Date.now()-h>=a){const y=`${i?`${i}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Gs(c,y)}return l}function I(e,t=!1){return((...r)=>E4(e,r,t))}function C4(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:k2(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function k2(e){return{interval:e?.interval||op.interval,timeout:e?.timeout||op.timeout}}const ba={isFalse(e,t){if(e!==!1)throw new p(`'${b(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${b(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new p(`'${b(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new p(`'${b(e)}' is not truthy.`,t)}},x2={assert:ba,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new p(`'${b(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${b(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new p(`'${b(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new p(`'${b(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:I(ba.isFalse),isFalsy:I(ba.isFalsy),isTrue:I(ba.isTrue),isTruthy:I(ba.isTruthy)}};function F4(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${b(e)} does not end with ${b(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${b(e)} does not end with ${b(t)}}`,r)}function M4(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new p(`${b(e)} ends with ${b(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${b(e)} ends with ${b(t)}}`,r)}function S4(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${b(e)} does not start with ${b(t)}}`,r)}else if(e[0]!==t)throw new p(`${b(e)} does not start with ${b(t)}}`,r)}function T4(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new p(`${b(e)} starts with ${b(t)}}`,r)}else if(e[0]===t)throw new p(`${b(e)} starts with ${b(t)}}`,r)}const ya={endsWith:F4,endsWithout:M4,startsWith:S4,startsWithout:T4},D2={assert:ya,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${b(e)} does not end with ${b(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${b(e)} does not end with ${b(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new p(`${b(e)} ends with ${b(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${b(e)} ends with ${b(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${b(e)} does not start with ${b(t)}}`,r)}else if(e[0]!==t)throw new p(`${b(e)} does not start with ${b(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new p(`${b(e)} starts with ${b(t)}}`,r)}else if(e[0]===t)throw new p(`${b(e)} starts with ${b(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:I(ya.endsWith),endsWithout:I(ya.endsWithout),startsWith:I(ya.startsWith),startsWithout:I(ya.startsWithout)}};function N4(e,t,r){const n=Or(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function no(e,t){return Or(t).includes(e)}const Rd={isEnumValue(e,t,r){N4(e,t,r)},isNotEnumValue(e,t,r){const n=Or(t);if(n.includes(e))throw new p(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},A2={assert:Rd,check:{isEnumValue:no,isNotEnumValue(e,t){return!Or(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=Or(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=Or(t);if(n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(Or(t).includes(e))return e},isNotEnumValue(e,t){if(!Or(t).includes(e))return e}},waitUntil:{isEnumValue:I(Rd.isEnumValue),isNotEnumValue:I(Rd.isNotEnumValue)}},Ld={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${b(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${b(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new p(`Entries are not equal at key '${String(o)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))throw new p("Entries are equal.",r)}},E2={assert:Ld,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const o=e[n],i=t[n];return o===i})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const o=e[n],i=t[n];return o!==i})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${b(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${b(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new p(`Entries are not equal at key '${String(o)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))return e;throw new p("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(o=>{const i=e[o],s=t[o];return i===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const i=e[o],s=t[o];return i!==s}))return e}},waitUntil:{entriesEqual:I(Ld.entriesEqual),notEntriesEqual:I(Ld.notEntriesEqual)}};function Vl(e,t){return JSON.stringify(e)===JSON.stringify(t)}function eu(e,t){if(!(e===t||Vl(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Vl(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(i=>{try{eu(e[i],t[i])}catch(s){throw new Error(`JSON objects are not equal at key '${i}': ${qt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function Ta(e,t){if(e===t||Vl(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Vl(r,n)?!1:Object.keys(e).every(i=>Ta(e[i],t[i]))}return!1}const jd={jsonEquals(e,t,r){try{eu(e,t)}catch(n){throw new p(qt(n),r)}},notJsonEquals(e,t,r){try{eu(e,t)}catch{return}throw new p("Values are JSON equal.",r)}},C2={assert:jd,check:{jsonEquals(e,t){return Ta(e,t)},notJsonEquals(e,t){return!Ta(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return eu(e,t),e}catch(n){throw new p(qt(n),r)}},notJsonEquals(e,t,r){try{eu(e,t)}catch{return e}throw new p("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Ta(e,t))return e},notJsonEquals(e,t){if(!Ta(e,t))return e}},waitUntil:{jsonEquals:I(jd.jsonEquals),notJsonEquals:I(jd.notJsonEquals)}};function ip(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function F2(){this._key="chai/deep-eql__"+Math.random()+Date.now()}F2.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var M2=typeof WeakMap=="function"?WeakMap:F2;function sp(e,t,r){if(!r||Ms(e)||Ms(t))return null;var n=r.get(e);if(n){var o=n.get(t);if(typeof o=="boolean")return o}return null}function ol(e,t,r,n){if(!(!r||Ms(e)||Ms(t))){var o=r.get(e);o?o.set(t,n):(o=new M2,o.set(t,n),r.set(e,o))}}function vn(e,t,r){if(r&&r.comparator)return ap(e,t,r);var n=S2(e,t);return n!==null?n:ap(e,t,r)}function S2(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Ms(e)||Ms(t)?!1:null}function ap(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new M2;var n=r&&r.comparator,o=sp(e,t,r.memoize);if(o!==null)return o;var i=sp(t,e,r.memoize);if(i!==null)return i;if(n){var s=n(e,t);if(s===!1||s===!0)return ol(e,t,r.memoize,s),s;var a=S2(e,t);if(a!==null)return a}var u=ip(e);if(u!==ip(t))return ol(e,t,r.memoize,!1),!1;ol(e,t,r.memoize,!0);var l=P4(e,t,u,r);return ol(e,t,r.memoize,l),l}function P4(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return vn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return T2(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Di(e,t,n);case"RegExp":return I4(e,t);case"Generator":return O4(e,t,n);case"DataView":return Di(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Di(new Uint8Array(e),new Uint8Array(t),n);case"Set":return up(e,t,n);case"Map":return up(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return R4(e,t,n)}}function I4(e,t){return e.toString()===t.toString()}function up(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){o.push([s,a])}),Di(n.sort(),o.sort(),r)}function Di(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(vn(e[o],t[o],r)===!1)return!1;return!0}function O4(e,t,r){return Di(g0(e),g0(t),r)}function B4(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function lp(e){if(B4(e))try{return g0(e[Symbol.iterator]())}catch{return[]}return[]}function g0(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function cp(e){var t=[];for(var r in e)t.push(r);return t}function dp(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var o=r[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&t.push(o)}return t}function T2(e,t,r,n){var o=r.length;if(o===0)return!0;for(var i=0;i<o;i+=1)if(vn(e[r[i]],t[r[i]],n)===!1)return!1;return!0}function R4(e,t,r){var n=cp(e),o=cp(t),i=dp(e),s=dp(t);if(n=n.concat(i),o=o.concat(s),n.length&&n.length===o.length)return Di(fp(n).sort(),fp(o).sort())===!1?!1:T2(e,t,n,r);var a=lp(e),u=lp(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Di(a,u,r)):n.length===0&&a.length===0&&o.length===0&&u.length===0}function Ms(e){return e===null||typeof e!="object"}function fp(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class ws extends p{name="DiffError";constructor(t,r,n,o){const i=wk(r,n);super([t,wh(i)].join(`
`),o)}}function Po(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const To={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${b(t)}

.`,r):new ws("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${b(t)}

.`,r):new p(`

${b(e)}

strictly equals

${b(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${b(t)}

.`,r):new ws("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${b(t)}

.`,r):new p(`

${b(e)}

loosely equals

${b(t)}

`,r)},deepEquals(e,t,r){if(!vn(e,t,{comparator:Po}))throw new ws("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(vn(e,t,{comparator:Po}))throw new p(`

${b(e)}

deeply equals

${b(t)}

`,r)}},N2=To.deepEquals,P2={assert:To,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return vn(e,t,{comparator:Po})},notDeepEquals(e,t){return!vn(e,t,{comparator:Po})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${b(t)}

.`,r):new ws("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${b(t)}

.`,r):new p(`

${b(e)}

strictly equals

${b(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${b(t)}

.`,r):new ws("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${b(t)}

.`,r):new p(`

${b(e)}

loosely equals

${b(t)}

`,r);return e},deepEquals(e,t,r){if(vn(e,t,{comparator:Po}))return e;throw new ws("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(vn(e,t,{comparator:Po}))throw new p(`

${b(e)}

deeply equals

${b(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(vn(e,t,{comparator:Po}))return e},notDeepEquals(e,t){if(!vn(e,t,{comparator:Po}))return e}},waitUntil:{strictEquals:I(To.strictEquals),notStrictEquals:I(To.notStrictEquals),looseEquals:I(To.looseEquals),notLooseEquals:I(To.notLooseEquals),deepEquals:I(To.deepEquals),notDeepEquals:I(To.notDeepEquals)}};function Ir(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function nn(e,t){return typeof t=="string"?t.includes(e):Ir(t,e)}const eo={hasValue(e,t,r){if(!Ir(e,t))throw new p(`'${b(e)}' does not have value '${b(t)}'.`,r)},lacksValue(e,t,r){if(Ir(e,t))throw new p(`'${b(e)}' has value '${b(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new p(`'${b(e)}' does not have values '${b(t)}'.`,r)}if(n.length)throw new p(`'${b(e)}' does not have values '${b(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new p(`'${b(e)}' has values '${b(n)}'.`,r)},isIn(e,t,r){if(!nn(e,t))throw new p(`'${b(e)}'

is not in

${b(t)}.`,r)},isNotIn(e,t,r){if(nn(e,t))throw new p(`'${b(e)}'

is in

${b(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${b(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new p(`'${b(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new p(`'${b(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${b(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${b(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${b(e)}' is not empty.`,t)}}},I2={assert:eo,check:{hasValue(e,t){return Ir(e,t)},lacksValue(e,t){return!Ir(e,t)},hasValues(e,t){return t.every(r=>Ir(e,r))},lacksValues(e,t){return t.every(r=>!Ir(e,r))},isIn(e,t){return nn(e,t)},isNotIn(e,t){return!nn(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!Ir(e,t))throw new p(`'${b(e)}' does not have value '${b(t)}'.`,r);return e},lacksValue(e,t,r){if(Ir(e,t))throw new p(`'${b(e)}' has value '${b(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new p(`'${b(e)}' does not have values '${b(t)}'.`,r)}if(n.length)throw new p(`'${b(e)}' does not have values '${b(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new p(`'${b(e)}' has values '${b(n)}'.`,r);return e},isIn(e,t,r){if(!nn(e,t))throw new p(`'${b(e)}'

is not in

${b(t)}.`,r);return e},isNotIn(e,t,r){if(nn(e,t))throw new p(`'${b(e)}'

is in

${b(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${b(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new p(`'${b(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new p(`'${b(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${b(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${b(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${b(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(Ir(e,t))return e},lacksValue(e,t){if(!Ir(e,t))return e},hasValues(e,t){if(t.every(r=>Ir(e,r)))return e},lacksValues(e,t){if(!t.every(r=>Ir(e,r)))return e},isIn(e,t){if(nn(e,t))return e},isNotIn(e,t){if(!nn(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:I(eo.hasValue),lacksValue:I(eo.lacksValue),hasValues:I(eo.hasValues),lacksValues:I(eo.lacksValues),isIn:I(eo.isIn),isNotIn:I(eo.isNotIn),isEmpty:I(eo.isEmpty),isNotEmpty:I(eo.isNotEmpty)}},_d={isHttpStatus(e,t){if(!no(e,M))throw new p(`${b(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(no(e,M)){if(!nn(e,Dl[t]))throw new p(`${b(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${b(e)} is not a valid HTTP status.`,r)}},O2={assert:_d,check:{isHttpStatus(e){return no(e,M)},isHttpStatusCategory(e,t){return no(e,M)&&nn(e,Dl[t])}},assertWrap:{isHttpStatus(e,t){if(!no(e,M))throw new p(`${b(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(no(e,M)){if(!nn(e,Dl[t]))throw new p(`${b(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${b(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(no(e,M))return e},isHttpStatusCategory(e,t){if(no(e,M)&&nn(e,Dl[t]))return e}},waitUntil:{isHttpStatus:I(_d.isHttpStatus),isHttpStatusCategory:I(_d.isHttpStatusCategory)}},Ud={instanceOf(e,t,r){if(!(e instanceof t))throw new p(`'${b(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${b(e)}' is an instance of '${t.name}'`,r)}},B2={assert:Ud,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new p(`'${b(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${b(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:I(Ud.instanceOf),notInstanceOf:I(Ud.notInstanceOf)}},L4=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ye(e,t){return L4.some(r=>{try{return r(e,t)}catch{return!1}})}const hi={isKeyOf(e,t,r){if(!Ye(t,e))throw new p(`'${String(e)}' is not a key of '${b(t)}'.`,r)},isNotKeyOf(e,t,r){if(Ye(t,e))throw new p(`'${String(e)}' is a key of '${b(t)}'.`,r)},hasKey(e,t,r){if(!Ye(e,t))throw new p(`'${b(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(Ye(e,t))throw new p(`'${b(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(o=>!Ye(e,o));if(n.length)throw new p(`'${b(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(o=>Ye(e,o));if(n.length)throw new p(`'${b(e)}' does not lack keys '${n.join(",")}'.`,r)}},R2={assert:hi,check:{isKeyOf(e,t){return Ye(t,e)},isNotKeyOf(e,t){return!Ye(t,e)},hasKey:Ye,lacksKey(e,t){return!Ye(e,t)},hasKeys(e,t){return t.every(r=>Ye(e,r))},lacksKeys(e,t){return t.every(r=>!Ye(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!Ye(t,e))throw new p(`'${String(e)}' is not a key of '${b(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(Ye(t,e))throw new p(`'${String(e)}' is a key of '${b(t)}'.`,r);return e},hasKey(e,t,r){if(!Ye(e,t))throw new p(`'${b(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(Ye(e,t))throw new p(`'${b(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(o=>!Ye(e,o));if(n.length)throw new p(`'${b(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(o=>Ye(e,o));if(n.length)throw new p(`'${b(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(Ye(t,e))return e},isNotKeyOf(e,t){if(!Ye(t,e))return e},hasKey(e,t){if(Ye(e,t))return e},lacksKey(e,t){if(!Ye(e,t))return e},hasKeys(e,t){if(t.every(r=>Ye(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!Ye(e,r)))return e}},waitUntil:{isKeyOf:I(hi.isKeyOf),isNotKeyOf:I(hi.isNotKeyOf),hasKey:I(hi.hasKey),lacksKey:I(hi.lacksKey),hasKeys:I(hi.hasKeys),lacksKeys:I(hi.lacksKeys)}};function j4(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r)}function _4(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r)}const zd={isLengthAtLeast:j4,isLengthExactly:_4},L2={assert:zd,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:je(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:je(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)===t)return e})},waitUntil:{isLengthAtLeast:I(zd.isLengthAtLeast),isLengthExactly:I(zd.isLengthExactly)}},U4={never(e){throw new p("This code should not have executed.",e)}},j2={assert:U4,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Vd={isDefined(e,t){if(e==null)throw new p(`'${b(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new p(`'${b(e)}' is not a nullish.`,t)}},_2={assert:Vd,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new p(`'${b(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new p(`'${b(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:I(Vd.isDefined),isNullish:I(Vd.isNullish)}},wr={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${b({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${b({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n)}},U2={assert:wr,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${b({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${b({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:I(wr.isInBounds),isOutBounds:I(wr.isOutBounds),isInteger:I(wr.isInteger),isNotInteger:I(wr.isNotInteger),isAbove:I(wr.isAbove),isAtLeast:I(wr.isAtLeast),isBelow:I(wr.isBelow),isAtMost:I(wr.isAtMost),isNaN:I(wr.isNaN),isFinite:I(wr.isFinite),isInfinite:I(wr.isInfinite),isApproximately:I(wr.isApproximately),isNotApproximately:I(wr.isNotApproximately)}};function z4(e,t,r,n,o){return Cu(...Ec(e,t,r,n,o),!1)}function Ec(e,t,r,n,o){const i=Array.isArray(r);return[i?e:N2,i?t:e,i?r:t,i?n:r,i?o:n]}function Cu(e,t,r,n,o,i){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,n),i?a(l):a()}catch(l){u(new p(`Output from '${t.name}' did not produce expected output. ${qt(l)}`,o))}});try{return e(s,n),i?s:void 0}catch(a){throw new p(`Output from '${t.name}' did not produce expected output. ${qt(a)}`,o)}}function V4(e,t,r,n,o){try{const i=Cu(...Ec(e,t,r,n,o),!1);return i instanceof Promise?new Promise(async s=>{try{await i,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function q4(e,t,r,n,o){return Cu(...Ec(e,t,r,n,o),!0)}function W4(e,t,r,n,o){try{const i=Cu(...Ec(e,t,r,n,o),!0);return i instanceof Promise?new Promise(async s=>{try{s(await i)}catch{s(void 0)}}):i}catch{return}}const qd=Symbol("not set");async function K4(e,t,r,n,o,i){const s=Array.isArray(r),a=s?e:N2,u=s?t:e,l=s?r:t,c=s?n:r,d=k2(s?o:n),h=s?i:o,m=Fs(d.timeout,{milliseconds:!0}).milliseconds,y=Fs(d.interval,{milliseconds:!0});let w=qd,$;async function k(){try{w=await Cu(a,u,l,c,void 0,!0)}catch(T){w=qd,$=ht(T)}}const A=Date.now();for(;w===qd;)if(await k(),await Si(y),Date.now()-A>=m)throw Gs($,Ui(h,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return w}const G4={output:z4},z2={assert:G4,check:{output:V4},assertWrap:{output:q4},checkWrap:{output:W4},waitUntil:{output:K4}},va={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${b(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${b(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${b(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${b(e)}' is not a Primitive.`,t)}},V2={assert:va,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${b(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${b(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${b(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${b(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:I(va.isNotPrimitive),isNotPropertyKey:I(va.isNotPropertyKey),isPrimitive:I(va.isPrimitive),isPropertyKey:I(va.isPropertyKey)}},wa={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${b(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${b(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${b(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${b(e)}' is a Promise.`,t)}},q2={assert:wa,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${b(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${b(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${b(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${b(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:I(wa.isPromiseLike,!0),isNotPromiseLike:I(wa.isNotPromiseLike,!0),isPromise:I(wa.isPromise,!0),isNotPromise:I(wa.isNotPromise,!0)}},Wd={matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r)}},W2={assert:Wd,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:I(Wd.matches,!0),mismatches:I(Wd.mismatches,!0)}},tt={isArray(e,t){if(!Array.isArray(e))throw new p(`'${b(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${b(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${b(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new p(`'${b(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new p(`'${b(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${b(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${b(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${b(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new p(`'${b(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${b(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new p(`'${b(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${b(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${b(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${b(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${b(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new p(`'${b(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${b(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${b(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new p(`'${b(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${b(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${b(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${b(e)}' is a undefined.`,t)}},K2={assert:tt,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new p(`'${b(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${b(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${b(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new p(`'${b(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new p(`'${b(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${b(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${b(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${b(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new p(`'${b(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${b(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new p(`'${b(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${b(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${b(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${b(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${b(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new p(`'${b(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${b(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${b(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new p(`'${b(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${b(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${b(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${b(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:I(tt.isArray),isBigInt:I(tt.isBigInt),isBoolean:I(tt.isBoolean),isFunction:I(tt.isFunction),isNull:I(tt.isNull),isNumber:I(tt.isNumber),isObject:I(tt.isObject),isPlainObject:I(tt.isPlainObject),isString:I(tt.isString),isSymbol:I(tt.isSymbol),isUndefined:I(tt.isUndefined),isNotArray:I(tt.isNotArray),isNotBigInt:I(tt.isNotBigInt),isNotBoolean:I(tt.isNotBoolean),isNotFunction:I(tt.isNotFunction),isNotNull:I(tt.isNotNull),isNotNumber:I(tt.isNotNumber),isNotObject:I(tt.isNotObject),isNotPlainObject:I(tt.isNotPlainObject),isNotString:I(tt.isNotString),isNotSymbol:I(tt.isNotSymbol),isNotUndefined:I(tt.isNotUndefined)}};var Dr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Dr||(Dr={}));function $h(e,t,r){kh(e,{noError:"No error.",notInstance:`'${b(e)}' is not an error instance.`},t,r)}function hp(e,t,r){kh(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${b(e)}' is not an error instance.`},t,r)}function kh(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const o=e.constructor.name;throw new p(`Error constructor '${o}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const o=qt(e);if(typeof r.matchMessage=="string"){if(!$2(o,r.matchMessage))throw new p(`Error message

'${o}'

does not contain

'${r.matchMessage}'.`,n)}else if(!o.match(r.matchMessage))throw new p(`Error message

'${o}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new p(t.notInstance,n);else throw new p(t.noError,n)}function mp(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=qt(e);if(typeof t.matchMessage=="string"){if(!$2(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Cc(e,t,r,n){let o;try{const i=t instanceof Promise?t:t();if(i instanceof Promise)return new Promise(async(s,a)=>{try{await i}catch(u){o=ht(u)}try{hp(o,r,n),e===Dr.Assert?s():e===Dr.Check?s(!0):s(o)}catch(u){e===Dr.CheckWrap?s(void 0):e===Dr.Check?s(!1):a(ht(u))}})}catch(i){o=ht(i)}try{return hp(o,r,n),e===Dr.Check?!0:e!==Dr.Assert?o:void 0}catch(i){if(e===Dr.CheckWrap)return;if(e===Dr.Check)return!1;throw i}}function H4(e,t,r){return Cc(Dr.Assert,e,t,r)}function Z4(e,t){return Cc(Dr.Check,e,t)}function J4(e,t,r){return Cc(Dr.AssertWrap,e,t,r)}function Y4(e,t,r){return Cc(Dr.CheckWrap,e,t,r)}const X4=I($h);function Q4(e,t,r,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,i=o?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof i!="function")throw new TypeError(`Callback is not a function, got '${b(i)}'`);return X4(o,async()=>{try{await i();return}catch(u){return ht(u)}},a,s)}const e3={throws:H4,isError:$h},G2={assert:e3,check:{throws:Z4,isError(e,t){return mp(e,t)}},assertWrap:{throws:J4,isError(e,t,r){return kh(e,{noError:"No error.",notInstance:`'${b(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:Y4,isError(e,t){if(mp(e,t))return e}},waitUntil:{throws:Q4,isError:I($h)}},Io=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Kd={isUuid(e,t){if(!String(e).match(Io))throw new p(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Io))throw new p(`'${String(e)}' is a UUID.`,t)}},H2={assert:Kd,check:{isUuid(e){return!!String(e).match(Io)},isNotUuid(e){return!String(e).match(Io)}},assertWrap:{isUuid(e,t){if(!String(e).match(Io))throw new p(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Io))throw new p(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Io))return e},isNotUuid(e){if(!String(e).match(Io))return e}},waitUntil:{isUuid:I(Kd.isUuid),isNotUuid:I(Kd.isNotUuid)}},t3={...j2.assert,...x2.assert,...D2.assert,...E2.assert,...A2.assert,...O2.assert,...B2.assert,...C2.assert,...R2.assert,...L2.assert,..._2.assert,...U2.assert,...z2.assert,...V2.assert,...q2.assert,...W2.assert,...K2.assert,...P2.assert,...G2.assert,...H2.assert,...I2.assert},xh=[x2,D2,E2,A2,O2,B2,C2,R2,L2,j2,_2,U2,z2,V2,q2,W2,K2,P2,G2,H2,I2],r3=Object.assign({},...xh.map(e=>e.check)),F=Object.assign(function(t){return!!t},r3);function n3(e,t,r){return Fl(e,t,r,new Set)}function Fl(e,t,r,n){if(e=gp(e),t=gp(t),F.isObject(e)&&F.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Fl(je(e).sort(),je(t).sort(),r,n))return!1;let o=!1;const i=je(e).map(s=>{const a=Fl(e[s],t[s],r,n);return F.isPromise(a)&&(o=!0),a});return pp(o,i)}else if(F.isArray(e)&&F.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let o=!1;const i=e.map((s,a)=>{const u=Fl(s,t[a],r,n);return F.isPromise(u)&&(o=!0),u});return pp(o,i)}else return r(e,t)}function gp(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function pp(e,t){return e?new Promise(async(r,n)=>{try{const o=await Promise.all(t);r(o.every(F.isTrue))}catch(o){n(ht(o))}}):t.every(F.isTrue)}const o3=Object.assign({},...xh.map(e=>e.assertWrap)),_t=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r);return t},o3);function i3(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const s3={tsType:i3},a3={assert:s3},u3={fail:e=>{throw new p("Failure triggered.",e)}},l3={...a3.assert,...t3,...u3},Dt=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r)},l3),c3=Object.assign({},...xh.map(e=>e.checkWrap)),Dh=Object.assign(function(t){if(t)return t},c3);function d3(e,t){return F.hasKey(e,"entryType")&&e.entryType===t}function mi(e,t){return e.controlType===t}var X;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(X||(X={}));const Z2=Symbol("any-type"),f3={[X.Checkbox]:!1,[X.Color]:"",[X.Custom]:void 0,[X.Dropdown]:"",[X.Hidden]:Z2,[X.Number]:0,[X.Text]:""};function h3(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===X.Custom)return;const i=f3[o.controlType];i!==Z2&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function m3(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return F.isPromise(o)?new Promise(async(i,s)=>{try{const a=await o;e.set(n,a),i(a)}catch(a){s(ht(a))}}):(e.set(n,o),o)}}function Vi(e,t,r){if(t in e)return e[t];{const n=r();return F.isPromise(n)?new Promise(async(o,i)=>{try{const s=await n;e[t]=s,o(s)}catch(s){i(ht(s))}}):(e[t]=n,n)}}function An(e){return je(e).map(t=>[t,e[t]])}function tu(e){return Object.fromEntries(e)}function $o(e,t,r){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return r(a,o,i,s)&&n.push(a),n},[])}function g3(e,t,r={}){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return Vi(n,a,()=>[]).push(o),n},{})}function Fu(e,t,r={}){try{let n=!1;const o=e.map((i,s,a)=>{const u=t(i,s,a);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(F.isTruthy);return n?new Promise(async(i,s)=>{try{const a=$o(await Promise.all(o),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},F.isTruthy);i(tu(a))}catch(a){s(ht(a))}}):tu(o)}catch(n){throw ht(n)}}function p3(e,t){const r=[];let n=!1;for(let o=0;o<e;o++){const i=t(o);F.isPromise(i)&&(n=!0),r.push(i)}return n?Promise.all(r):r}function b3(e){return Array.isArray(e)?e:[e]}function y3({min:e,max:t}){const{min:r,max:n}=dh({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)),s=Math.ceil(i/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/o)*o,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,h)=>c+d*256**h,0);while(l>=a);return r+l%o}const bp=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Ai(e=16){let t="";for(let r=0;r<e;r++){const n=y3({min:0,max:bp.length-1});t+=bp[n]}return t}function J2(e){if(F.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>qt(t).trim()).join(`
`))}function Y2(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):F.hasKey(t,"fallbackValue")?t.fallbackValue:ht(n)):r}catch(r){return t.handleError?t.handleError(r):F.hasKey(t,"fallbackValue")?t.fallbackValue:ht(r)}}function yn(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const v3="modulepreload",w3=function(e){return"/vira/book/"+e},yp={},ql=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=u(r.map(l=>{if(l=w3(l),l in yp)return;yp[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":v3,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((m,y)=>{h.addEventListener("load",m),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var Nt;(function(e){e.Standard="stdout",e.Error="stderr"})(Nt||(Nt={}));var fe;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(fe||(fe={}));async function $3(){return await my({async[xn.Node](){const e=(await ql(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[fe.Bold]:e.bold.open,[fe.Debug]:e.blueBright.open,[fe.Error]:e.red.open,[fe.Faint]:e.gray.open,[fe.Info]:e.cyan.open,[fe.Mutate]:e.magenta.open,[fe.NormalWeight]:"\x1B[22m",[fe.Plain]:"",[fe.Reset]:e.reset.open,[fe.Success]:e.green.open,[fe.Warning]:e.yellow.open}},[xn.Web](){return Promise.resolve({[fe.Bold]:"font-weight: bold",[fe.Debug]:"color: blue",[fe.Error]:"color: red",[fe.Faint]:"color: grey",[fe.Info]:"color: teal",[fe.Mutate]:"color: magenta",[fe.NormalWeight]:"",[fe.Plain]:"",[fe.Reset]:"",[fe.Success]:"color: green",[fe.Warning]:"color: orange"})}})}const Pr=await $3(),k3={[fe.Bold]:{colors:[Pr.bold],logType:Nt.Standard},[fe.Debug]:{colors:[Pr.debug],logType:Nt.Standard},[fe.Faint]:{colors:[Pr.faint],logType:Nt.Standard},[fe.Info]:{colors:[Pr.info],logType:Nt.Standard},[fe.Mutate]:{colors:[Pr.mutate,Pr.bold],logType:Nt.Standard},[fe.NormalWeight]:{colors:[Pr.normalWeight],logType:Nt.Standard},[fe.Plain]:{colors:[],logType:Nt.Standard},[fe.Reset]:{colors:[Pr.reset],logType:Nt.Standard},[fe.Success]:{colors:[Pr.success,Pr.bold],logType:Nt.Standard},[fe.Error]:{colors:[Pr.error,Pr.bold],logType:Nt.Error},[fe.Warning]:{colors:[Pr.warning],logType:Nt.Error}};function pr({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function $s({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function X2(e,t){try{let r=!1;const n=An(e).map(([o,i])=>{const s=t(o,i,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(F.isTruthy);return r?new Promise(async(o,i)=>{try{const s=$o(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},F.isTruthy);o(tu(s))}catch(s){i(ht(s))}}):tu(n)}catch(r){throw ht(r)}}function x3(e,t){return X2(e,(r,n)=>{const o=n,i=t(n,e);return i instanceof Promise?i.then(s=>({key:o,value:s})):{key:o,value:i}})}function Q2(e,...t){const r={...e};return t.forEach(n=>{n&&An(n).forEach(([o,i])=>{i!=null&&(r[o]=i)})}),r}function D3(e){return e.replace(/,/g,"")}function A3(e){return typeof e=="number"?e:Number(typeof e=="string"?D3(e):e)}function E3(e){const t=C3(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function C3(e){const t=A3(e);if(!isNaN(t))return t}const ev="px";function ru(e){return Ah({value:e,suffix:ev})}function F3(e){return E3(tv({value:e,suffix:ev}))}function Ah({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function tv({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function M3(){return await my({async[xn.Node](){const{inspect:e}=await ql(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const o=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[fe.Reset].colors.join("")].join(""),css:void 0}}},[xn.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:$o(r.colorConfig[t].colors,s=>tv({value:s,suffix:";"}),F.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?qt(s):b(s)).join(`
`),r.omitColors?"":r.colorConfig[fe.Reset].colors.join("")].join(""),css:n}}}})}const S3=await M3(),T3={colorConfig:k3,omitColors:!1},N3=rv({[Nt.Error](){},[Nt.Standard](){}});function rv(e,t){const r=Q2(T3,t);function n(i){e[r.colorConfig[i.colorKey].logType](S3({...i,options:r}))}const o=x3(fe,i=>(...s)=>n({args:s,colorKey:i}));return{...o,if(i){return i?o:N3}}}const P3=ch(xn.Node)?{[Nt.Error]({text:e}){process.stderr.write(e+`
`)},[Nt.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[Nt.Error]({text:e,css:t}){console.error(pr({value:e,prefix:"%c"}),t)},[Nt.Standard]({text:e,css:t}){console.log(pr({value:e,prefix:"%c"}),t)}},nv=rv(P3);function I3(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}function ov(e,{digits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function O3({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const o=y2(w2(t,{caseSensitive:r}),"g"),i=[];return e.replace(o,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);i.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),i}function B3(e,t,{caseSensitive:r}){const n=O3({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),o=w2(t,{caseSensitive:r});return e.split(o).reduce((s,a,u)=>{const l=n[u],c=s.concat(a);if(l){const d=e.slice(l.index,l.index+l.length);return c.concat(d)}else return c},[])}function R3(e,t){return e.split(t)}function vp(e,t){const{min:r,max:n}=dh(t);if(t.takeOverflow){const o=n-r+1,i=(e-r)%o;return i<0?r+o+i:r+i}else return e>n?r:e<r?n:e}function Qe(e,t){let r=!1;const n=je(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),o[i]=s,o},{});return r?new Promise(async(o,i)=>{try{await Promise.all(je(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(ht(s))}}):n}function Fc(e,t){const r=An(e).filter(([n,o])=>t(n,o,e));return tu(r)}function L3(e,t){return Fc(e,r=>t.includes(r))}function nu(e){return je(e).map(t=>e[t])}function iv(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var ou;(function(e){e.Upper="upper",e.Lower="lower"})(ou||(ou={}));const j3={firstLetterCase:ou.Lower};function _3(e,t){if(!e.length)return"";const r=e[0];return(t===ou.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function U3(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""}),o=Q2(j3,t);return _3(n,o.firstLetterCase)}function sv(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function z3({value:e,wrapper:t}){return pr({value:Ah({value:e,suffix:t}),prefix:t})}function Nn(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function Eh(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class V3{listeners={};universalListeners=new Map;getListenerCount(){return nu(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function o(i,s){r.once&&n(),t(i,s)}return this.universalListeners.set(t,{listener:o,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const o=F.isString(t)?t:t.type,i=()=>this.listeners[o]?.delete(r)||!1;function s(a,u){n.once&&i(),r(a,u)}return Vi(this.listeners,o,()=>new Map).set(r,{listener:s,removeListener:i}),i}removeListener(t,r){const n=F.isString(t)?t:t.type,o=this.listeners[n];if(!o)return!1;const i=o.get(r);return i?i.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(o=>{o.listener(t,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(t,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=nu(this.listeners).reduce((n,o)=>{const i=o.size||0;return o.clear(),n+i},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class Ch extends V3{}function Fh(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function p0(e,t,r){return Fh(globalThis,e,t,r)}function Mh(e,t){return iu(e.title),e.parent?[...Mh(e.parent),iu(e.parent.title)].concat([]):[]}function iu(e){return iv(e).toLowerCase().replaceAll(/\s/g,"-")}function q3({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const W3=/[/?#&=]/;function av(e){const t=e.match(W3);return e.trim()?iu(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const K3={[Jt.ElementExample]:()=>[],[Jt.Page]:e=>[av(e.title),...h3(e.controls,e.title)].filter(F.isTruthy),[Jt.Root]:()=>[]},Wl="_isBookTreeNode",uv=new Map;function G3(e){return uv.get(e)}function H3(e,t){m3(uv,e,()=>t)}function ks(e,t){return lv(e)&&e.entry.entryType===t}function lv(e){return!!(F.hasKeys(e,[Wl,"entry"])&&e[Wl])}function Z3(){return{[Wl]:!0,entry:{entryType:Jt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function J3({entries:e,debug:t}){const r=G3(e);if(r)return r;const n=Z3();e.forEach(s=>Sh({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=cv(n),i={tree:n,flattenedNodes:o};return H3(e,i),t&&console.info("element-book tree:",n),i}function Y3(e,t,r){if(!t.parent)return e;const n=b0(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Sh({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=b0(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Mh(t).join(" > ")}`);return o}function Sh({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=K3[t.entryType](t);t.errors.push(...o);const i=Y3(e,t,r),s=iu(t.title),a=i.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[Wl]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};i.children[s]=u,d3(t,Jt.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Sh({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function b0(e,t){const r=lv(e)?e.fullUrlBreadcrumbs.slice(0,-1):Mh(e);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function cv(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>cv(o));return[e,...r].flat()}function Th(e,t){return Nh(e,["",...t],void 0)}function Nh(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],s=i&&Nh(i,n,r);return{...e.controls,...s}}function X3(e,t,r){const n={...e};return Nh(n,["",...t],r),n}function dv(e,t){const r=t?.controls||(ks(e,Jt.Page)?Qe(e.entry.controls,(o,i)=>i.initValue):{});return{children:Qe(e.children,(o,i)=>dv(i,t?.children?.[i.urlBreadcrumb])),controls:r}}function Te(e){const t={...e,entryType:Jt.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:t.useVerticalExamples,entryType:Jt.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),av(n.title)].filter(F.isTruthy)};r.add(n.title),t.elementExamples[iu(o.title)]=o}}),t}var Ar;(function(e){e.Search="search",e.Book="book"})(Ar||(Ar={}));function fv(e){return e[0]===Ar.Book?"":e[1]?decodeURIComponent(e[1]):""}const Ss={hash:void 0,paths:[Ar.Book],search:void 0};class Kl{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const t=Kl.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=r=>(hv.registry.set(r.name,r),t(r)))}canRegisterCssProperty(t){return Kl.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(t){if(!this.canRegisterCssProperty(t.name))return!1;try{return globalThis.CSS.registerProperty(t),!0}catch(r){throw Gs(r,`Failed to define CSS var: ${b(t,4)}

`)}}}const hv=new Kl;const Ml=globalThis,Ph=Ml.ShadowRoot&&(Ml.ShadyCSS===void 0||Ml.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ih=Symbol(),wp=new WeakMap;let jo=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ih)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ph&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=wp.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&wp.set(r,t))}return t}toString(){return this.cssText}};const Re=e=>new jo(typeof e=="string"?e:e+"",void 0,Ih),mv=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new jo(r,e,Ih)},Q3=(e,t)=>{if(Ph)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Ml.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},$p=Ph?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Re(r)})(e):e;const{is:e6,defineProperty:t6,getOwnPropertyDescriptor:r6,getOwnPropertyNames:n6,getOwnPropertySymbols:o6,getPrototypeOf:i6}=Object,Mc=globalThis,kp=Mc.trustedTypes,s6=kp?kp.emptyScript:"",a6=Mc.reactiveElementPolyfillSupport,_a=(e,t)=>e,Gl={toAttribute(e,t){switch(t){case Boolean:e=e?s6:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Oh=(e,t)=>!e6(e,t),xp={attribute:!0,type:String,converter:Gl,reflect:!1,useDefault:!1,hasChanged:Oh};Symbol.metadata??=Symbol("metadata"),Mc.litPropertyMetadata??=new WeakMap;let fs=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=xp){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&t6(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=r6(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:o,set(s){const a=o?.call(this);i?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??xp}static _$Ei(){if(this.hasOwnProperty(_a("elementProperties")))return;const t=i6(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_a("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_a("properties"))){const r=this.properties,n=[...n6(r),...o6(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift($p(o))}else t!==void 0&&r.push($p(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Q3(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:Gl).toAttribute(r,n.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,r){const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Gl;this._$Em=o;const a=s.fromAttribute(r,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,r,n,o=!1,i){if(t!==void 0){const s=this.constructor;if(o===!1&&(i=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Oh)(i,r)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,i]of n){const{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};fs.elementStyles=[],fs.shadowRootOptions={mode:"open"},fs[_a("elementProperties")]=new Map,fs[_a("finalized")]=new Map,a6?.({ReactiveElement:fs}),(Mc.reactiveElementVersions??=[]).push("2.1.2");const Bh=globalThis,Dp=e=>e,Hl=Bh.trustedTypes,Ap=Hl?Hl.createPolicy("lit-html",{createHTML:e=>e}):void 0,gv="$lit$",Bo=`lit$${Math.random().toFixed(9).slice(2)}$`,pv="?"+Bo,u6=`<${pv}>`,Ti=document,su=()=>Ti.createComment(""),au=e=>e===null||typeof e!="object"&&typeof e!="function",Rh=Array.isArray,l6=e=>Rh(e)||typeof e?.[Symbol.iterator]=="function",Gd=`[ 	
\f\r]`,$a=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ep=/-->/g,Cp=/>/g,gi=RegExp(`>|${Gd}(?:([^\\s"'>=/]+)(${Gd}*=${Gd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fp=/'/g,Mp=/"/g,bv=/^(?:script|style|textarea|title)$/i,c6=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),d6=c6(1),zr=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),Sp=new WeakMap,ki=Ti.createTreeWalker(Ti,129);function yv(e,t){if(!Rh(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ap!==void 0?Ap.createHTML(t):t}const f6=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=$a;for(let a=0;a<r;a++){const u=e[a];let l,c,d=-1,h=0;for(;h<u.length&&(s.lastIndex=h,c=s.exec(u),c!==null);)h=s.lastIndex,s===$a?c[1]==="!--"?s=Ep:c[1]!==void 0?s=Cp:c[2]!==void 0?(bv.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=gi):c[3]!==void 0&&(s=gi):s===gi?c[0]===">"?(s=o??$a,d=-1):c[1]===void 0?d=-2:(d=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?gi:c[3]==='"'?Mp:Fp):s===Mp||s===Fp?s=gi:s===Ep||s===Cp?s=$a:(s=gi,o=void 0);const m=s===gi&&e[a+1].startsWith("/>")?" ":"";i+=s===$a?u+u6:d>=0?(n.push(l),u.slice(0,d)+gv+u.slice(d)+Bo+m):u+Bo+(d===-2?a:m)}return[yv(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class uu{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const a=t.length-1,u=this.parts,[l,c]=f6(t,r);if(this.el=uu.createElement(l,n),ki.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=ki.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(gv)){const h=c[s++],m=o.getAttribute(d).split(Bo),y=/([.?@])?(.*)/.exec(h);u.push({type:1,index:i,name:y[2],strings:m,ctor:y[1]==="."?m6:y[1]==="?"?g6:y[1]==="@"?p6:Tc}),o.removeAttribute(d)}else d.startsWith(Bo)&&(u.push({type:6,index:i}),o.removeAttribute(d));if(bv.test(o.tagName)){const d=o.textContent.split(Bo),h=d.length-1;if(h>0){o.textContent=Hl?Hl.emptyScript:"";for(let m=0;m<h;m++)o.append(d[m],su()),ki.nextNode(),u.push({type:2,index:++i});o.append(d[h],su())}}}else if(o.nodeType===8)if(o.data===pv)u.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Bo,d+1))!==-1;)u.push({type:7,index:i}),d+=Bo.length-1}i++}}static createElement(t,r){const n=Ti.createElement("template");return n.innerHTML=t,n}}function Ts(e,t,r=e,n){if(t===zr)return t;let o=n!==void 0?r._$Co?.[n]:r._$Cl;const i=au(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=o:r._$Cl=o),o!==void 0&&(t=Ts(e,o._$AS(e,t.values),o,n)),t}class h6{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=(t?.creationScope??Ti).importNode(r,!0);ki.currentNode=o;let i=ki.nextNode(),s=0,a=0,u=n[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new Sc(i,i.nextSibling,this,t):u.type===1?l=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(l=new b6(i,this,t)),this._$AV.push(l),u=n[++a]}s!==u?.index&&(i=ki.nextNode(),s++)}return ki.currentNode=Ti,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}let Sc=class vv{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ts(this,t,r),au(t)?t===Q||t==null||t===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==zr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):l6(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&au(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ti.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=uu.createElement(yv(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{const i=new h6(o,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(t){let r=Sp.get(t.strings);return r===void 0&&Sp.set(t.strings,r=new uu(t)),r}k(t){Rh(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new vv(this.O(su()),this.O(su()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=Dp(t).nextSibling;Dp(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class Tc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Q}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=Ts(this,t,r,0),s=!au(t)||t!==this._$AH&&t!==zr,s&&(this._$AH=t);else{const a=t;let u,l;for(t=i[0],u=0;u<i.length-1;u++)l=Ts(this,a[n+u],r,u),l===zr&&(l=this._$AH[u]),s||=!au(l)||l!==this._$AH[u],l===Q?t=Q:t!==Q&&(t+=(l??"")+i[u+1]),this._$AH[u]=l}s&&!o&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class m6 extends Tc{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class g6 extends Tc{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class p6 extends Tc{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=Ts(this,t,r,0)??Q)===zr)return;const n=this._$AH,o=t===Q&&n!==Q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==Q&&(n===Q||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class b6{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ts(this,t)}}const y6={I:Sc},v6=Bh.litHtmlPolyfillSupport;v6?.(uu,Sc),(Bh.litHtmlVersions??=[]).push("3.3.2");const w6=(e,t,r)=>{const n=r?.renderBefore??t;let o=n._$litPart$;if(o===void 0){const i=r?.renderBefore??null;n._$litPart$=o=new Sc(t.insertBefore(su(),i),i,void 0,r??{})}return o._$AI(e),o};const Lh=globalThis;let Ua=class extends fs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=w6(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return zr}};Ua._$litElement$=!0,Ua.finalized=!0,Lh.litElementHydrateSupport?.({LitElement:Ua});const $6=Lh.litElementPolyfillSupport;$6?.({LitElement:Ua});(Lh.litElementVersions??=[]).push("4.2.2");function jh({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function k6({onElement:e,forCssVar:t,includeCascade:r}){return(r?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(t.name)).trim()}var Ns;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(Ns||(Ns={}));var Tp;(function(e){e.Space="+",e.Comma="#"})(Tp||(Tp={}));function Wn(e,t={}){return Qe(e,(n,o)=>{x6(n);const i=o,s=F.isObject(i)&&!(i instanceof jo),a=F.isString(i)||F.isNumber(i)||i instanceof jo?String(i):String(i.default),u=F.isString(i)||F.isNumber(i)||i instanceof jo?String(i):String(i.initialValue||i.default),l=Re(pr({value:n.replace(/^-+/,""),prefix:"--"})),c={name:l,value:mv`var(${l}, ${Re(a)})`,syntax:F.isString(i)||F.isNumber(i)||i instanceof jo?Ns.Any:y0(i.syntax),default:a},d=String(c.name);if(!u)throw new Error(`Initial value for CSS var ${d} cannot be empty.`);return s&&!t.skipRegistration&&hv.registerProperty({inherits:!0,name:d,initialValue:u,syntax:c.syntax})&&globalThis.document?.documentElement&&jh({forCssVar:c,onElement:globalThis.document.documentElement,toValue:a}),c})}function x6(e){try{if(F.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(t){throw new Error(Ui("Invalid CSS var name.",t,`Got '${b(e)}'`))}}function y0(e){return e?F.isString(e)?e:e.union?e.union.map(t=>y0(t)).join(" | "):e.list?`${y0(e.list.values)}${e.list.separator}`:e.raw:Ns.Any}const Ee=Wn({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),D6={nav:{hover:{background:Ee["element-book-nav-hover-background-color"],foreground:Ee["element-book-nav-hover-foreground-color"]},active:{background:Ee["element-book-nav-active-background-color"],foreground:Ee["element-book-nav-active-foreground-color"]},selected:{background:Ee["element-book-nav-selected-background-color"],foreground:Ee["element-book-nav-selected-foreground-color"]}},accent:{icon:Ee["element-book-accent-icon-color"]},page:{background:Ee["element-book-page-background-color"],backgroundFaint1:Ee["element-book-page-background-faint-level-1-color"],backgroundFaint2:Ee["element-book-page-background-faint-level-2-color"],foreground:Ee["element-book-page-foreground-color"],foregroundFaint1:Ee["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Ee["element-book-page-foreground-faint-level-2-color"]}};function A6(e,t){wv(e,t,D6)}function v0(e){return F.hasKey(e,"_$cssResult$")}function Np(e){return F.hasKeys(e,["name","value","default"])&&F.isString(e.default)&&v0(e.name)&&v0(e.value)}function wv(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(v0(o)){if(!Np(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);jh({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Np(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);wv(e,o,i)}})}function Na(e,t){let r=e.length,n,o,i=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,i=!0),Array.isArray(t[0])?o=t:(o=t.length>0?t.map(c=>[c]):[[]],s=!0);let a=o[0].length,u=o[0].map((c,d)=>o.map(h=>h[d])),l=n.map(c=>u.map(d=>{let h=0;if(!Array.isArray(c)){for(let m of d)h+=c*m;return h}for(let m=0;m<c.length;m++)h+=c[m]*(d[m]||0);return h}));return r===1&&i&&(l=l[0]),a===1&&s?r===1&&i?l[0]:l.map(c=>c[0]):l}function Hd(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function ft(e,t,r=[0,0,0]){const n=Hd(e,t[0]),o=Hd(e,t[1]),i=Hd(e,t[2]);return r[0]=n,r[1]=o,r[2]=i,r}function Xs(e){return zo(e)==="string"}function zo(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function _h(e,{precision:t=16,unit:r}){return Fe(e)?"none":(e=+Uh(e,t),e+(r??""))}function Fe(e){return e===null}function $t(e){return Fe(e)?0:e}function Uh(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const o=10**(t-n);return Math.floor(e*o+.5)/o}function lu(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function $v(e,t,r){return(r-e)/(t-e)}function w0(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:lu(t[0],t[1],$v(e[0],e[1],r))}function Nc(e,t,r){return Math.max(Math.min(r,t),e)}function Pc(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function kt(e,t){return Pc(Math.abs(e)**t,e)}function zh(e,t){return t===0?0:e/t}function kv(e,t,r=0,n=e.length){for(;r<n;){const o=r+n>>1;e[o]<t?r=o+1:n=o}return r}function Ps(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===r)return!0;if(!o||o==="Object")return!1;e=n}return!1}var E6=Object.freeze({__proto__:null,bisectLeft:kv,clamp:Nc,copySign:Pc,interpolate:lu,interpolateInv:$v,isInstance:Ps,isNone:Fe,isString:Xs,mapRange:w0,multiplyMatrices:Na,multiply_v3_m3x3:ft,serializeNumber:_h,skipNone:$t,spow:kt,toPrecision:Uh,type:zo,zdiv:zh});class C6{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Go=new C6;var Vr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};let Pp=class{type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:o,max:i}=n.groups;(o||i)&&(this.range=[+o,+i])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),w0(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return t=w0(this.coordRange,n,t),_h(t,{unit:o,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return Ps(t,this)?t:new this(t,r)}};const Zd=Symbol("instance");class Zl{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Zd]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let i=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>Pp.get(s,i))}))}serializeCoords(t,r,n){return n=t.map((o,i)=>Pp.get(n?.[i]??this.coords[i][0],this.spaceCoords[i])),t.map((o,i)=>n[i].serialize(o,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,o],i)=>{let s=t[i];if(Fe(s)||isNaN(s))return s;let a=r[i],u=this.coords[i].find(l=>l.type==a);if(!u){let l=o.name||n;throw new TypeError(`${a??s?.raw??s} not allowed for ${l} in ${this.name}()`)}return s=u.resolve(s),u.range&&(r[i]=u.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||Ps(t,this)?t:t[Zd]?t[Zd]:new Zl(t,...r)}}const gr={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function $0(e){return Array.isArray(e)?e:gr[e]}function Jl(e,t,r,n={}){if(e=$0(e),t=$0(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Go.run("chromatic-adaptation-start",o),o.M||(o.W1===gr.D65&&o.W2===gr.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===gr.D50&&o.W2===gr.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Go.run("chromatic-adaptation-end",o),o.M)return ft(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function xv(e,t){let r={str:String(e)?.trim(),options:t};if(Go.run("parse-start",r),r.color)return r.color;r.parsed=M6(r.str);let n,o=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let i=r.parsed.name,s,a,u=r.parsed.args,l=u.map((h,m)=>r.parsed.argMeta[m]?.type);if(i==="color"){let h=u.shift();l.shift();let m=h.startsWith("--")?h.substring(2):`--${h}`,y=[h,m];if(s=G.findFormat({name:i,id:y,type:"function"}),!s){let w,$=h in G.registry?h:m;if($ in G.registry){let k=G.registry[$].formats?.color?.id;k&&(w=`Did you mean ${e.replace("color("+h,"color("+k)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(w??"Missing a plugin?"))}a=s.space,s.id.startsWith("--")&&!h.startsWith("--")&&Vr.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${h}).`),h.startsWith("--")&&!s.id.startsWith("--")&&Vr.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${h}).`)}else s=G.findFormat({name:i,type:"function"}),a=s.space;o&&Object.assign(o,{format:s,formatId:s.name,types:l,commas:r.parsed.commas});let c=1;r.parsed.lastAlpha&&(c=r.parsed.args.pop(),o&&(o.alphaType=l.pop()));let d=s.coords.length;if(u.length!==d)throw new TypeError(`Expected ${d} coordinates for ${a.id} in ${r.str}), got ${u.length}`);u=s.coerceCoords(u,l),n={spaceId:a.id,coords:u,alpha:c}}else e:for(let i of G.all)for(let s in i.formats){let a=i.formats[s];if(a.type!=="custom"||a.test&&!a.test(r.str))continue;let u=i.getFormat(a),l=u.parse(r.str);if(l){o&&Object.assign(o,{format:u,formatId:s}),n=l;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=Fe(n.alpha)?n.alpha:n.alpha===void 0?1:Nc(0,n.alpha,1),n}const Dv={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Yl={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Dv).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function F6(e){let t={},r=e.match(Yl.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*Dv[r]):Yl.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}function M6(e){if(!e)return;e=e.trim();let t=e.match(Yl.function);if(t){let r=[],n=[],o=!1,i=t[1].toLowerCase(),s=t[2].replace(Yl.singleArgument,(a,u)=>{let{value:l,meta:c}=F6(u);return(a.startsWith("/")||i!=="color"&&r.length===3)&&(o=!0),r.push(l),n.push(c),""});return{name:i,args:r,argMeta:n,lastAlpha:o,commas:s.includes(","),rawName:t[1],rawArgs:t[2]}}}function ne(e,t){if(Array.isArray(e))return e.map(n=>ne(n,t));if(!e)throw new TypeError("Empty color reference");Xs(e)&&(e=xv(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=G.get(r)),e.alpha===void 0&&(e.alpha=1),e}const S6=75e-6;class G{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?G.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let o in r)"name"in r[o]||(r[o].name=o);this.coords=r;let n=t.white??this.base.white??"D65";this.white=$0(n),this.formats=t.formats??{};for(let o in this.formats){let i=this.formats[o];i.type||="function",i.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:G.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,i)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:T6(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Go.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=S6}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let s=n[i];if(s.type!=="angle"&&s.range){if(Fe(o))return!0;let[a,u]=s.range;return(a===void 0||o>=a-r)&&(u===void 0||o<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=Zl.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=ne(t);[t,r]=[a.space,a.coords]}if(t=G.get(t),this.equals(t))return r;r=r.map(a=>Fe(a)?0:a);let n=this.path,o=t.path,i,s;for(let a=0;a<n.length&&n[a].equals(o[a]);a++)i=n[a],s=a;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<o.length;a++)r=o[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=ne(t);[t,r]=[n.space,n.coords]}return t=G.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push(o?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(G.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||Ps(t,this))return t;if(zo(t)==="string"){let o=G.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return G.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=G.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[o,i]of Object.entries(n.formats)){i.name??=o,i.type??="function";let s=(!t.name||i.name===t.name)&&(!t.type||i.type===t.type);if(t.id){let a=i.ids||[i.id],u=Array.isArray(t.id)?t.id:[t.id];s&&=u.some(l=>a.includes(l))}if(s){let a=Zl.get(i,n);return a!==i&&(n.formats[i.name]=a),a}}return null}static resolveCoord(t,r){let n=zo(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=G.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=zo(i),n==="number"||n==="string"&&i>=0){let u=Object.entries(o.coords)[i];if(u)return{space:o,id:u[0],index:i,...u[1]}}o=G.get(o);let s=i.toLowerCase(),a=0;for(let u in o.coords){let l=o.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:o,id:u,index:a,...l};a++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function T6(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Yt=new G({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class lr extends G{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Yt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=ft(r,t.toXYZ_M);return this.white!==this.base.white&&(n=Jl(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=Jl(this.base.white,this.white,r),ft(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function Av(e,t={}){if(Array.isArray(e))return e.map(u=>Av(u,t));let{cssProperty:r="background-color",element:n,...o}=t,i=null;try{return ne(e,o)}catch(u){i=u}let{CSS:s,getComputedStyle:a}=globalThis;if(Xs(e)&&n&&s&&a&&s.supports(r,e)){let u=n.style[r];e!==u&&(n.style[r]=e);let l=a(n).getPropertyValue(r);if(e!==u&&(n.style[r]=u),l!==e)try{return ne(l,o)}catch(c){i=c}else i={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=i),null}function Mu(e,t){e=ne(e);let r=G.get(t,t?.space),n=t?.precision,o;return!r||e.space.equals(r)?o=e.coords.slice():o=r.from(e),n===void 0?o:o.map(i=>Uh(i,n))}function Lr(e,t){if(e=ne(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=G.resolveCoord(t,e.space);return Mu(e,r)[n]}function Vh(e,t,r,n){return e=ne(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=G.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}Vh.returns="color";function vo(e,t,r){if(e=ne(e),arguments.length===2&&zo(arguments[1])==="object"){let n=arguments[1];for(let o in n)vo(e,o,n[o])}else if(typeof r=="function"&&(r=r(Lr(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:o}=G.resolveCoord(t,e.space),i=Mu(e,n);i[o]=r,Vh(e,n,i)}return e}vo.returns="color";var qh=new G({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Yt,fromBase:e=>Jl(Yt.white,"D50",e),toBase:e=>Jl("D50",Yt.white,e)});const N6=216/24389,Ip=24/116,il=24389/27;let Jd=gr.D50;var jr=new G({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Jd,base:qh,fromBase(e){let r=e.map((s,a)=>s/Jd[a]).map(s=>s>N6?Math.cbrt(s):(il*s+16)/116),n=116*r[1]-16,o=500*(r[0]-r[1]),i=200*(r[1]-r[2]);return[n,o,i]},toBase(e){let[t,r,n]=e,o=[];return o[1]=(t+16)/116,o[0]=r/500+o[1],o[2]=o[1]-n/200,[o[0]>Ip?Math.pow(o[0],3):(116*o[0]-16)/il,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/il,o[2]>Ip?Math.pow(o[2],3):(116*o[2]-16)/il].map((s,a)=>s*Jd[a])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function ln(e){return typeof e!="number"?e:(e%360+360)%360}function Ev(e,t){let[r,n]=t,o=Fe(r),i=Fe(n);if(o&&i)return[r,n];if(o?r=n:i&&(n=r),e==="raw")return t;r=ln(r),n=ln(n);let s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var qr=new G({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:jr,fromBase(e){if(this.ε===void 0){let a=Object.values(this.base.coords)[1].refRange,u=a[1]-a[0];this.ε=u/1e5}let[t,r,n]=e,o=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,i=o?null:ln(Math.atan2(n,r)*180/Math.PI),s=o?0:Math.sqrt(r**2+n**2);return[t,s,i]},toBase(e){let[t,r,n]=e,o=null,i=null;return Fe(n)||(r=r<0?0:r,o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Op=25**7,Xl=Math.PI,Bp=180/Xl,ss=Xl/180;function Rp(e){const t=e*e;return t*t*t*e}function Cv(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){[e,t]=ne([e,t]);let[i,s,a]=jr.from(e),u=qr.from(jr,[i,s,a])[1],[l,c,d]=jr.from(t),h=qr.from(jr,[l,c,d])[1];u<0&&(u=0),h<0&&(h=0);let m=(u+h)/2,y=Rp(m),w=.5*(1-Math.sqrt(y/(y+Op))),$=(1+w)*s,k=(1+w)*c,A=Math.sqrt($**2+a**2),T=Math.sqrt(k**2+d**2),B=$===0&&a===0?0:Math.atan2(a,$),q=k===0&&d===0?0:Math.atan2(d,k);B<0&&(B+=2*Xl),q<0&&(q+=2*Xl),B*=Bp,q*=Bp;let oe=l-i,De=T-A,de=q-B,$e=B+q,Ge=Math.abs(de),He;A*T===0?He=0:Ge<=180?He=de:de>180?He=de-360:de<-180?He=de+360:Vr.warn("the unthinkable has happened");let St=2*Math.sqrt(T*A)*Math.sin(He*ss/2),Nr=(i+l)/2,dr=(A+T)/2,Jn=Rp(dr),Rt;A*T===0?Rt=$e:Ge<=180?Rt=$e/2:$e<360?Rt=($e+360)/2:Rt=($e-360)/2;let Bn=(Nr-50)**2,Yn=1+.015*Bn/Math.sqrt(20+Bn),Xr=1+.045*dr,Gt=1;Gt-=.17*Math.cos((Rt-30)*ss),Gt+=.24*Math.cos(2*Rt*ss),Gt+=.32*Math.cos((3*Rt+6)*ss),Gt-=.2*Math.cos((4*Rt-63)*ss);let Le=1+.015*dr*Gt,Tt=30*Math.exp(-1*((Rt-275)/25)**2),Qr=2*Math.sqrt(Jn/(Jn+Op)),or=-1*Math.sin(2*Tt*ss)*Qr,en=(oe/(r*Yn))**2;return en+=(De/(n*Xr))**2,en+=(St/(o*Le))**2,en+=or*(De/(n*Xr))*(St/(o*Le)),Math.sqrt(en)}const P6=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],I6=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],O6=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Vo=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var En=new G({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Yt,fromBase(e){let t=ft(e,P6);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),ft(t,O6,t)},toBase(e){let t=ft(e,Vo);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,ft(t,I6,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function k0(e,t){[e,t]=ne([e,t]);let[r,n,o]=En.from(e),[i,s,a]=En.from(t),u=r-i,l=n-s,c=o-a;return Math.sqrt(u**2+l**2+c**2)}const B6=75e-6;function Ei(e,t,{epsilon:r=B6}={}){e=ne(e),t||(t=e.space),t=G.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Is(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Fv(e,t,r="lab"){r=G.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,s,a)=>{let u=o[a];return Fe(s)||Fe(u)?i:i+(u-s)**2},0))}function R6(e,t){return Fv(e,t,"lab")}const L6=Math.PI,Lp=L6/180;function j6(e,t,{l:r=2,c:n=1}={}){[e,t]=ne([e,t]);let[o,i,s]=jr.from(e),[,a,u]=qr.from(jr,[o,i,s]),[l,c,d]=jr.from(t),h=qr.from(jr,[l,c,d])[1];a<0&&(a=0),h<0&&(h=0);let m=o-l,y=a-h,w=i-c,$=s-d,k=w**2+$**2-y**2,A=.511;o>=16&&(A=.040975*o/(1+.01765*o));let T=.0638*a/(1+.0131*a)+.638,B;Fe(u)&&(u=0),u>=164&&u<=345?B=.56+Math.abs(.2*Math.cos((u+168)*Lp)):B=.36+Math.abs(.4*Math.cos((u+35)*Lp));let q=Math.pow(a,4),oe=Math.sqrt(q/(q+1900)),De=T*(oe*B+1-oe),de=(m/(r*A))**2;return de+=(y/(n*T))**2,de+=k/De**2,Math.sqrt(de)}const jp=203;var Wh=new G({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Yt,fromBase(e){return e.map(t=>t*jp)},toBase(e){return e.map(t=>t/jp)}});const sl=1.15,al=.66,_p=2610/2**14,_6=2**14/2610,Up=3424/2**12,zp=2413/2**7,Vp=2392/2**7,U6=1.7*2523/2**5,qp=2**5/(1.7*2523),ul=-.56,Yd=16295499532821565e-27,z6=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],V6=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],q6=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],W6=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var Mv=new G({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Wh,fromBase(e){let[t,r,n]=e,o=sl*t-(sl-1)*n,i=al*r-(al-1)*t,a=ft([o,i,n],z6).map(function(h){let m=Up+zp*kt(h/1e4,_p),y=1+Vp*kt(h/1e4,_p);return kt(m/y,U6)}),[u,l,c]=ft(a,q6);return[(1+ul)*u/(1+ul*u)-Yd,l,c]},toBase(e){let[t,r,n]=e,o=(t+Yd)/(1+ul-ul*(t+Yd)),s=ft([o,r,n],W6).map(function(h){let m=Up-kt(h,qp),y=Vp*kt(h,qp)-zp;return 1e4*kt(m/y,_6)}),[a,u,l]=ft(s,V6),c=(a+(sl-1)*l)/sl,d=(u+(al-1)*c)/al;return[c,d,l]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),x0=new G({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Mv,fromBase:qr.fromBase,toBase:qr.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function K6(e,t){[e,t]=ne([e,t]);let[r,n,o]=x0.from(e),[i,s,a]=x0.from(t),u=r-i,l=n-s;Fe(o)&&Fe(a)?(o=0,a=0):Fe(o)?o=a:Fe(a)&&(a=o);let c=o-a,d=2*Math.sqrt(n*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+d**2)}const Sv=3424/4096,Tv=2413/128,Nv=2392/128,Wp=2610/16384,G6=2523/32,H6=16384/2610,Kp=32/2523,Z6=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],J6=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Y6=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],X6=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var D0=new G({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Wh,fromBase(e){let t=ft(e,Z6);return Q6(t)},toBase(e){let t=eD(e);return ft(t,X6)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Q6(e){let t=e.map(function(r){let n=Sv+Tv*(r/1e4)**Wp,o=1+Nv*(r/1e4)**Wp;return(n/o)**G6});return ft(t,J6)}function eD(e){return ft(e,Y6).map(function(n){let o=Math.max(n**Kp-Sv,0),i=Tv-Nv*n**Kp;return 1e4*(o/i)**H6})}function tD(e,t){[e,t]=ne([e,t]);let[r,n,o]=D0.from(e),[i,s,a]=D0.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-s)**2+(o-a)**2)}function rD(e,t){[e,t]=ne([e,t]);let r=2,[n,o,i]=En.from(e),[s,a,u]=En.from(t),l=n-s,c=r*(o-a),d=r*(i-u);return Math.sqrt(l**2+c**2+d**2)}const nD=gr.D65,Pv=.42,Gp=1/Pv,Xd=2*Math.PI,Iv=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],oD=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],iD=[[460,451,288],[460,-891,-261],[460,-220,-6300]],sD={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},bi={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},aD=180/Math.PI,Hp=Math.PI/180;function Ov(e,t){return e.map(n=>{const o=kt(t*Math.abs(n)*.01,Pv);return 400*Pc(o,n)/(o+27.13)})}function uD(e,t){const r=100/t*27.13**Gp;return e.map(n=>{const o=Math.abs(n);return Pc(r*kt(o/(400-o),Gp),n)})}function lD(e){let t=ln(e);t<=bi.h[0]&&(t+=360);const r=kv(bi.h,t)-1,[n,o]=bi.h.slice(r,r+2),[i,s]=bi.e.slice(r,r+2),a=bi.H[r],u=(t-n)/i;return a+100*u/(u+(o-t)/s)}function cD(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,o]=bi.h.slice(r,r+2),[i,s]=bi.e.slice(r,r+2);return ln((t*(s*n-i*o)-100*n*s)/(t*(s-i)-100*s))}function Bv(e,t,r,n,o){const i={};i.discounting=o,i.refWhite=e,i.surround=n;const s=e.map($=>$*100);i.la=t,i.yb=r;const a=s[1],u=ft(s,Iv);let l=sD[i.surround];const c=l[0];i.c=l[1],i.nc=l[2];const h=(1/(5*i.la+1))**4;i.fl=h*i.la+.1*(1-h)*(1-h)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/a,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const m=Math.max(Math.min(c*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=u.map($=>lu(1,a/$,m)),i.dRgbInv=i.dRgb.map($=>1/$);const y=u.map(($,k)=>$*i.dRgb[k]),w=Ov(y,i.fl);return i.aW=i.nbb*(2*w[0]+w[1]+.05*w[2]),i}const Zp=Bv(nD,64/Math.PI*.2,20,"average",!1);function A0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=ln(e.h)*Hp:r=cD(e.H)*Hp;const n=Math.cos(r),o=Math.sin(r);let i=0;e.J!==void 0?i=kt(e.J,1/2)*.1:e.Q!==void 0&&(i=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/i:e.M!==void 0?s=e.M/t.flRoot/i:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=kt(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*kt(i,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,d=l/t.nbb,h=23*(d+.305)*zh(a,23*c+a*(11*n+108*o)),m=h*n,y=h*o,w=uD(ft([d,m,y],iD).map($=>$*1/1403),t.fl);return ft(w.map(($,k)=>$*t.dRgbInv[k]),oD).map($=>$/100)}function Rv(e,t){const r=e.map(T=>T*100),n=Ov(ft(r,Iv).map((T,B)=>T*t.dRgb[B]),t.fl),o=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(i,o)%Xd+Xd)%Xd,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*zh(a*Math.sqrt(o**2+i**2),n[0]+n[1]+1.05*n[2]+.305),l=kt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),d=kt(c/t.aW,.5*t.c*t.z),h=100*kt(d,2),m=4/t.c*d*(t.aW+4)*t.flRoot,y=l*d,w=y*t.flRoot,$=ln(s*aD),k=lD($),A=50*kt(t.c*l/(t.aW+4),1/2);return{J:h,C:y,h:$,s:A,Q:m,M:w,H:k}}var dD=new G({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Yt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=Rv(e,Zp),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return A0({J:e[0],M:e[1],h:e[2]},Zp)}});const fD=gr.D65,hD=216/24389,Lv=24389/27;function mD(e){return 116*(e>hD?Math.cbrt(e):(Lv*e+16)/116)-16}function E0(e){return e>8?Math.pow((e+16)/116,3):e/Lv}function gD(e,t){let[r,n,o]=e,i=[],s=0;if(o===0)return[0,0,0];let a=E0(o);o>0?s=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:s=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const u=2e-12,l=15;let c=0,d=1/0;for(;c<=l;){i=A0({J:s,C:n,h:r},t);const h=Math.abs(i[1]-a);if(h<d){if(h<=u)return i;d=h}s=s-(i[1]-a)*s/(2*i[1]),c+=1}return A0({J:s,C:n,h:r},t)}function pD(e,t){const r=mD(e[1]);if(r===0)return[0,0,0];const n=Rv(e,Kh);return[ln(n.h),n.C,r]}const Kh=Bv(fD,200/Math.PI*E0(50),E0(50)*100,"average",!1);var cu=new G({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Yt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=pD(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return gD(e,Kh)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const bD=Math.PI/180,Jp=[1,.007,.0228];function Yp(e){e[1]<0&&(e=cu.fromBase(cu.toBase(e)));const t=Math.log(Math.max(1+Jp[2]*e[1]*Kh.flRoot,1))/Jp[2],r=e[0]*bD,n=t*Math.cos(r),o=t*Math.sin(r);return[e[2],n,o]}function yD(e,t){[e,t]=ne([e,t]);let[r,n,o]=Yp(cu.from(e)),[i,s,a]=Yp(cu.from(t));return Math.sqrt((r-i)**2+(n-s)**2+(o-a)**2)}var Os={deltaE76:R6,deltaECMC:j6,deltaE2000:Cv,deltaEJz:K6,deltaEITP:tD,deltaEOK:k0,deltaEOK2:rD,deltaEHCT:yD};function vD(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Xp={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Ho(e,{method:t=Vr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:i=void 0}={}){if(e=ne(e),Xs(arguments[1])?r=arguments[1]:r||(r=e.space),r=G.get(r),Ei(e,r,{epsilon:0}))return e;let s;if(t==="css")s=wD(e,{space:r});else{if(t!=="clip"&&!Ei(e,r)){Object.prototype.hasOwnProperty.call(Xp,t)&&({method:t,jnd:o,deltaEMethod:n,blackWhiteClamp:i}=Xp[t]);let a=Cv;if(n!==""){for(let l in Os)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=Os[l];break}}o===0&&(o=1e-16);let u=Ho(qe(e,r),{method:"clip",space:r});if(a(e,u)>o){if(i&&Object.keys(i).length===3){let A=G.resolveCoord(i.channel),T=Lr(qe(e,A.space),A.id);if(Fe(T)&&(T=0),T>=i.max)return qe({space:"xyz-d65",coords:gr.D65},e.space);if(T<=i.min)return qe({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=G.resolveCoord(t),c=l.space,d=l.id,h=qe(e,c);h.coords.forEach((A,T)=>{Fe(A)&&(h.coords[T]=0)});let y=(l.range||l.refRange)[0],w=vD(o),$=y,k=Lr(h,d);for(;k-$>w;){let A=Is(h);A=Ho(A,{space:r,method:"clip"}),a(h,A)-o<w?$=Lr(h,d):k=Lr(h,d),vo(h,d,($+k)/2)}s=qe(h,r)}else s=u}else s=qe(e,r);if(t==="clip"||!Ei(s,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,d]=a[l];return c!==void 0&&(u=Math.max(c,u)),d!==void 0&&(u=Math.min(u,d)),u})}}return r!==e.space&&(s=qe(s,e.space)),e.coords=s.coords,e}Ho.returns="color";const Qp={WHITE:{space:En,coords:[1,0,0],alpha:1},BLACK:{space:En,coords:[0,0,0],alpha:1}};function wD(e,{space:t}={}){e=ne(e),t||(t=e.space),t=G.get(t);const o=G.get("oklch");if(t.isUnbounded)return qe(e,t);const i=qe(e,o);let s=i.coords[0];if(s>=1){const y=qe(Qp.WHITE,t);return y.alpha=e.alpha,qe(y,t)}if(s<=0){const y=qe(Qp.BLACK,t);return y.alpha=e.alpha,qe(y,t)}if(Ei(i,t,{epsilon:0}))return qe(i,t);function a(y){const w=qe(y,t),$=Object.values(t.coords);return w.coords=w.coords.map((k,A)=>{if("range"in $[A]){const[T,B]=$[A].range;return Nc(T,k,B)}return k}),w}let u=0,l=i.coords[1],c=!0,d=Is(i),h=a(d),m=k0(h,d);if(m<.02)return h;for(;l-u>1e-4;){const y=(u+l)/2;if(d.coords[1]=y,c&&Ei(d,t,{epsilon:0}))u=y;else if(h=a(d),m=k0(h,d),m<.02){if(.02-m<1e-4)break;c=!1,u=y}else l=y}return h}function qe(e,t,{inGamut:r}={}){e=ne(e),t=G.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Ho(o,r===!0?void 0:r)),o}qe.returns="color";function za(e,t={}){let{precision:r=Vr.precision,format:n,inGamut:o=!0,coords:i,alpha:s,commas:a}=t,u,l=ne(e),c=n,d=l.parseMeta;d&&!n&&(d.format.canSerialize()&&(n=d.format,c=d.formatId),i??=d.types,s??=d.alphaType,a??=d.commas),c&&(n=l.space.getFormat(n)??G.findFormat(c)),n||(n=l.space.getFormat("default")??G.DEFAULT_FORMAT,c=n.name),n&&n.space&&n.space!==l.space&&(l=qe(l,n.space));let h=l.coords.slice();if(o||=n.toGamut,o&&!Ei(l)&&(h=Ho(Is(l),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)u=n.serialize(h,l.alpha,t);else throw new TypeError(`format ${c} can only be used to parse colors, not for serialization`);else{let m=n.name||"color",y=n.serializeCoords(h,r,i);if(m==="color"){let T=n.id||n.ids?.[0]||l.space.cssId||l.space.id;y.unshift(T)}let w=l.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let $=s?.type??"<number>",k=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&w<1,A="";if(a??=n.commas,k){if(r!==null){let T;$==="<percentage>"&&(T="%",w*=100),w=_h(w,{precision:r,unit:T})}A=`${a?",":" /"} ${w}`}u=`${m}(${y.join(a?", ":" ")}${A})`}return u}const $D=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],kD=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var du=new lr({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:$D,fromXYZ_M:kD}),jv=new lr({id:"rec2020",name:"REC.2020",base:du,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const xD=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],DD=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var _v=new lr({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:xD,fromXYZ_M:DD});const AD=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Ot=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Uv=new lr({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:AD,fromXYZ_M:Ot}),e1={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let t1=Array(3).fill("<percentage> | <number>[0, 255]"),r1=Array(3).fill("<number>[0, 255]");var Ni=new lr({id:"srgb",name:"sRGB",base:Uv,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:t1},rgb_number:{name:"rgb",commas:!0,coords:r1,alpha:!1},color:{},rgba:{coords:t1,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:r1},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let o=r&&e.every(s=>s%17===0);return"#"+e.map(s=>o?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=e1.black,t.alpha=0):t.coords=e1[e],t.coords)return t}}}}),zv=new lr({id:"p3",cssId:"display-p3",name:"P3",base:_v,fromBase:Ni.fromBase,toBase:Ni.toBase});Vr.display_space=Ni;let ED;if(typeof CSS<"u"&&CSS.supports)for(let e of[jr,jv,zv]){let t=e.getMinCoords(),n=za({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Vr.display_space=e;break}}function CD(e,{space:t=Vr.display_space,...r}={}){e=ne(e);let n=za(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Vr.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(Fe)||Fe(e.alpha))&&!(ED??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=Is(e),o.coords=o.coords.map($t),o.alpha=$t(o.alpha),n=za(o,r),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=qe(o,t),n=new String(za(o,r)),n.color=o}return n}function FD(e,t,{space:r,hue:n="shorter"}={}){e=ne(e),r||=e.space,r=G.get(r);let o=Object.values(r.coords);[e,t]=[e,t].map(l=>qe(l,r));let[i,s]=[e,t].map(l=>l.coords),a=i.map((l,c)=>{let d=o[c],h=s[c];return d.type==="angle"&&([l,h]=Ev(n,[l,h])),n1(l,h)}),u=n1(e.alpha,t.alpha);return{space:r,coords:a,alpha:u}}function n1(e,t){return Fe(e)||Fe(t)?e===t?null:0:e-t}function MD(e,t){return e=ne(e),t=ne(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Zo(e){return Lr(e,[Yt,"y"])}function Vv(e,t){vo(e,[Yt,"y"],t)}function SD(e){Object.defineProperty(e.prototype,"luminance",{get(){return Zo(this)},set(t){Vv(this,t)}})}var TD=Object.freeze({__proto__:null,getLuminance:Zo,register:SD,setLuminance:Vv});function ND(e,t){e=ne(e),t=ne(t);let r=Math.max(Zo(e),0),n=Math.max(Zo(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const PD=.56,ID=.57,OD=.62,BD=.65,o1=.022,RD=1.414,LD=.1,jD=5e-4,_D=1.14,i1=.027,UD=1.14;function s1(e){return e>=o1?e:e+(o1-e)**RD}function as(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function zD(e,t){t=ne(t),e=ne(e);let r,n,o,i,s,a;t=qe(t,"srgb"),[i,s,a]=t.coords.map(m=>Fe(m)?0:m);let u=as(i)*.2126729+as(s)*.7151522+as(a)*.072175;e=qe(e,"srgb"),[i,s,a]=e.coords.map(m=>Fe(m)?0:m);let l=as(i)*.2126729+as(s)*.7151522+as(a)*.072175,c=s1(u),d=s1(l),h=d>c;return Math.abs(d-c)<jD?n=0:h?(r=d**PD-c**ID,n=r*_D):(r=d**BD-c**OD,n=r*UD),Math.abs(n)<LD?o=0:n>0?o=n-i1:o=n+i1,o*100}function VD(e,t){e=ne(e),t=ne(t);let r=Math.max(Zo(e),0),n=Math.max(Zo(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const qD=5e4;function WD(e,t){e=ne(e),t=ne(t);let r=Math.max(Zo(e),0),n=Math.max(Zo(t),0);return n>r&&([r,n]=[n,r]),n===0?qD:(r-n)/n}function KD(e,t){e=ne(e),t=ne(t);let r=Lr(e,[jr,"l"]),n=Lr(t,[jr,"l"]);return Math.abs(r-n)}const GD=216/24389,a1=24/116,ll=24389/27;let Qd=gr.D65;var C0=new G({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Qd,base:Yt,fromBase(e){let r=e.map((n,o)=>n/Qd[o]).map(n=>n>GD?Math.cbrt(n):(ll*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>a1?Math.pow(t[0],3):(116*t[0]-16)/ll,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ll,t[2]>a1?Math.pow(t[2],3):(116*t[2]-16)/ll].map((n,o)=>n*Qd[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const ef=Math.pow(5,.5)*.5+.5;function HD(e,t){e=ne(e),t=ne(t);let r=Lr(e,[C0,"l"]),n=Lr(t,[C0,"l"]),o=Math.abs(Math.pow(r,ef)-Math.pow(n,ef)),i=Math.pow(o,1/ef)*Math.SQRT2-40;return i<7.5?0:i}var Sl=Object.freeze({__proto__:null,contrastAPCA:zD,contrastDeltaPhi:HD,contrastLstar:KD,contrastMichelson:VD,contrastWCAG21:ND,contrastWeber:WD});function ZD(e,t,r){Xs(r)&&(r={algorithm:r});let{algorithm:n,...o}=r||{};if(!n){let i=Object.keys(Sl).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=ne(e),t=ne(t);for(let i in Sl)if("contrast"+n.toLowerCase()===i.toLowerCase())return Sl[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Ic(e){let[t,r,n]=Mu(e,Yt),o=t+15*r+3*n;return[4*t/o,9*r/o]}function qv(e){let[t,r,n]=Mu(e,Yt),o=t+r+n;return[t/o,r/o]}function JD(e){Object.defineProperty(e.prototype,"uv",{get(){return Ic(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return qv(this)}})}var YD=Object.freeze({__proto__:null,register:JD,uv:Ic,xy:qv});function Pa(e,t,r={}){Xs(r)&&(r={method:r});let{method:n=Vr.deltaE,...o}=r;for(let i in Os)if("deltae"+n.toLowerCase()===i.toLowerCase())return Os[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Wv(e,t=.25){let n=[G.get("oklch","lch"),"l"];return vo(e,n,o=>o*(1+t))}function Kv(e,t=.25){let n=[G.get("oklch","lch"),"l"];return vo(e,n,o=>o*(1-t))}Wv.returns="color";Kv.returns="color";var XD=Object.freeze({__proto__:null,darken:Kv,lighten:Wv});function Gv(e,t,r,n={}){return[e,t]=[ne(e),ne(t)],zo(r)==="object"&&([r,n]=[.5,r]),Su(e,t,n)(r??.5)}function Hv(e,t,r={}){let n;Gh(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:s=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[ne(e),ne(t)],n=Su(e,t,u));let l=Pa(e,t),c=o>0?Math.max(s,Math.ceil(l/o)+1):s,d=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)d=[{p:.5,color:n(.5)}];else{let h=1/(c-1);d=Array.from({length:c},(m,y)=>{let w=y*h;return{p:w,color:n(w)}})}if(o>0){let h=d.reduce((m,y,w)=>{if(w===0)return 0;let $=Pa(y.color,d[w-1].color,i);return Math.max(m,$)},0);for(;h>o;){h=0;for(let m=1;m<d.length&&d.length<a;m++){let y=d[m-1],w=d[m],$=(w.p+y.p)/2,k=n($);h=Math.max(h,Pa(k,y.color),Pa(k,w.color)),d.splice(m,0,{p:$,color:n($)}),m++}}}return d=d.map(h=>h.color),d}function Su(e,t,r={}){if(Gh(e)){let[u,l]=[e,t];return Su(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:o,progression:i,premultiplied:s}=r;e=ne(e),t=ne(t),e=Is(e),t=Is(t);let a={colors:[e,t],options:r};if(n?n=G.get(n):n=G.registry[Vr.interpolationSpace]||e.space,o=o?G.get(o):n,e=qe(e,n),t=qe(t,n),e=Ho(e),t=Ho(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,d]=[Lr(e,l),Lr(t,l)];Fe(c)&&!Fe(d)?c=d:Fe(d)&&!Fe(c)&&(d=c),[c,d]=Ev(u,[c,d]),vo(e,l,c),vo(t,l,d)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=i?i(u):u;let l=e.coords.map((h,m)=>{let y=t.coords[m];return lu(h,y,u)}),c=lu(e.alpha,t.alpha,u),d={space:n,coords:l,alpha:c};return s&&(d.coords=d.coords.map(h=>h/c)),o!==n&&(d=qe(d,o)),d},{rangeArgs:a})}function Gh(e){return zo(e)==="function"&&!!e.rangeArgs}Vr.interpolationSpace="lab";function QD(e){e.defineFunction("mix",Gv,{returns:"color"}),e.defineFunction("range",Su,{returns:"function<color>"}),e.defineFunction("steps",Hv,{returns:"array<color>"})}var e8=Object.freeze({__proto__:null,isRange:Gh,mix:Gv,range:Su,register:QD,steps:Hv}),t8=new G({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ni,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,u]=[null,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:s=(o-i)/l+(o<i?6:0);break;case o:s=(i-n)/l+2;break;case i:s=(n-o)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Zv=new G({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ni,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,u]=[null,0,t],l=t-r;if(l!==0){switch(t){case n:s=(o-i)/l+(o<i?6:0);break;case o:s=(i-n)/l+2;break;case i:s=(n-o)/l+4}s=s*60}return u&&(a=l/u),s>=360&&(s-=360),[s,a*100,u*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/60)%6;return n-n*r*Math.max(0,Math.min(s,4-s,1))}return[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),r8=new G({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Zv,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let a=r/o;return[t,0,a*100]}let i=1-n,s=i===0?0:1-r/i;return[t,s*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const n8=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],o8=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Jv=new lr({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:n8,fromXYZ_M:o8}),i8=new lr({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Jv,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const s8=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],a8=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Yv=new lr({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:qh,toXYZ_M:s8,fromXYZ_M:a8});const u8=1/512,l8=16/512;var c8=new lr({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Yv,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<l8?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=u8?r*n**(1/1.8):16*t})}});const cl=1.09929682680944,u1=.018053968510807;var d8=new lr({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:du,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<u1*4.5?t/4.5:r*Math.pow((n+cl-1)/cl,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=u1?r*(cl*Math.pow(n,.45)-(cl-1)):4.5*t})}}),f8=new G({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:En,fromBase:qr.fromBase,toBase:qr.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Bs=2*Math.PI,Ql=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],ec=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],tf=Number.MAX_VALUE,Va=.206,Hh=.03,Ia=(1+Va)/(1+Hh);function Ht(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((o,i)=>{n+=o*t[i]}),n}function qa(e){return .5*(Ia*e-Va+Math.sqrt((Ia*e-Va)*(Ia*e-Va)+4*Hh*Ia*e))}function xs(e){return(e**2+Va*e)/(Ia*(e+Hh))}function Zh(e){let[t,r]=e;return[r/t,r/(1-t)]}function h8(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}function Jh(e,t){let r=ft(e,Vo);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,ft(r,t,r)}function Oc(e,t,r,n){let o=g8(e,t,r,n),i=Jh([1,o*e,o*t],r),s=kt(1/Math.max(...i),1/3),a=s*o;return[s,a]}function m8(e,t,r,n,o,i,s,a){let u;if(a===void 0&&(a=Oc(e,t,i,s)),(r-o)*a[1]-(a[0]-o)*n<=0)u=a[1]*o/(n*a[0]+a[1]*(o-r));else{u=a[1]*(o-1)/(n*(a[0]-1)+a[1]*(o-r));let l=r-o,c=n,d=Ht(Vo[0].slice(1),[e,t]),h=Ht(Vo[1].slice(1),[e,t]),m=Ht(Vo[2].slice(1),[e,t]),y=l+c*d,w=l+c*h,$=l+c*m,k=o*(1-u)+u*r,A=u*n,T=k+A*d,B=k+A*h,q=k+A*m,oe=T**3,De=B**3,de=q**3,$e=3*y*T**2,Ge=3*w*B**2,He=3*$*q**2,St=6*y**2*T,Nr=6*w**2*B,dr=6*$**2*q,Jn=Ht(i[0],[oe,De,de])-1,Rt=Ht(i[0],[$e,Ge,He]),Bn=Ht(i[0],[St,Nr,dr]),Yn=Rt/(Rt*Rt-.5*Jn*Bn),Xr=-Jn*Yn,Gt=Ht(i[1],[oe,De,de])-1,Le=Ht(i[1],[$e,Ge,He]),Tt=Ht(i[1],[St,Nr,dr]),Qr=Le/(Le*Le-.5*Gt*Tt),or=-Gt*Qr,en=Ht(i[2],[oe,De,de])-1,mn=Ht(i[2],[$e,Ge,He]),Eo=Ht(i[2],[St,Nr,dr]),Zu=mn/(mn*mn-.5*en*Eo),rs=-en*Zu;Xr=Yn>=0?Xr:tf,or=Qr>=0?or:tf,rs=Zu>=0?rs:tf,u+=Math.min(Xr,Math.min(or,rs))}return u}function Xv(e,t,r){let[n,o,i]=e,s=Oc(o,i,t,r),a=m8(o,i,n,1,n,t,r,s),u=Zh(s),l=a/Math.min(n*u[0],(1-n)*u[1]),c=h8(o,i),d=n*c[0],h=(1-n)*c[1],m=.9*l*Math.sqrt(Math.sqrt(1/(1/d**4+1/h**4)));return d=n*.4,h=(1-n)*.8,[Math.sqrt(1/(1/d**2+1/h**2)),m,a]}function g8(e,t,r,n){let o,i,s,a,u,l,c,d;Ht(n[0][0],[e,t])>1?([o,i,s,a,u]=n[0][1],[l,c,d]=r[0]):Ht(n[1][0],[e,t])>1?([o,i,s,a,u]=n[1][1],[l,c,d]=r[1]):([o,i,s,a,u]=n[2][1],[l,c,d]=r[2]);let h=o+i*e+s*t+a*e**2+u*e*t,m=Ht(Vo[0].slice(1),[e,t]),y=Ht(Vo[1].slice(1),[e,t]),w=Ht(Vo[2].slice(1),[e,t]),$=1+h*m,k=1+h*y,A=1+h*w,T=$**3,B=k**3,q=A**3,oe=3*m*$**2,De=3*y*k**2,de=3*w*A**2,$e=6*m**2*$,Ge=6*y**2*k,He=6*w**2*A,St=l*T+c*B+d*q,Nr=l*oe+c*De+d*de,dr=l*$e+c*Ge+d*He;return h=h-St*Nr/(Nr**2-.5*St*dr),h}function p8(e,t,r){let[n,o,i]=e,s=xs(i),a=null,u=null;if(n=ln(n)/360,s!==0&&s!==1&&o!==0){let l=Math.cos(Bs*n),c=Math.sin(Bs*n),[d,h,m]=Xv([s,l,c],t,r),y=.8,w=1.25,$,k,A,T;o<y?($=w*o,k=0,A=y*d,T=1-A/h):($=5*(o-.8),k=h,A=.2*h**2*1.25**2/d,T=1-A/(m-h));let B=k+$*A/(1-T*$);a=B*l,u=B*c}return[s,a,u]}function b8(e,t,r){let n=1e-7,o=1e-4,i=e[0],s=0,a=qa(i),u=Math.sqrt(e[1]**2+e[2]**2),l=.5+Math.atan2(-e[2],-e[1])/Bs;if(a!==0&&a!==1&&u!==0){let d=e[1]/u,h=e[2]/u,[m,y,w]=Xv([i,d,h],t,r),$=.8,k=1.25,A,T,B,q;u<y?(T=$*m,B=1-T/y,q=u/(T+B*u),s=q*$):(A=y,T=.2*y**2*k**2/m,B=1-T/(w-y),q=(u-A)/(T+B*(u-A)),s=$+.2*q)}const c=Math.abs(s)<o;return c||a===0||Math.abs(1-a)<n?(l=null,c||(s=0)):l=ln(l*360),[l,s,a]}var y8=new G({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:En,gamutSpace:"self",fromBase(e){return b8(e,Ql,ec)},toBase(e){return p8(e,Ql,ec)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Qv=new G({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:En,fromBase(e){return[qa(e[0]),e[1],e[2]]},toBase(e){return[xs(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),v8=new G({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Qv,fromBase:qr.fromBase,toBase:qr.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function w8(e,t,r){let[n,o,i]=e;n=ln(n)/360;let s=xs(i),a=null,u=null;if(s!==0&&o!==0){let l=Math.cos(Bs*n),c=Math.sin(Bs*n),d=Oc(l,c,t,r),[h,m]=Zh(d),y=.5,w=1-y/h,$=1-o*y/(y+m-m*w*o),k=o*m*y/(y+m-m*w*o);s=i*$;let A=i*k,T=xs($),B=k*T/$,q=xs(s);A=A*q/s,s=q;let[oe,De,de]=Jh([T,l*B,c*B],t),$e=kt(1/Math.max(Math.max(oe,De),Math.max(de,0)),1/3);s=s*$e,A=A*$e,a=A*l,u=A*c}return[s,a,u]}function $8(e,t,r){let n=1e-4,o=e[0],i=0,s=qa(o),a=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/Bs;if(o!==0&&o!==1&&a!==0){let l=e[1]/a,c=e[2]/a,d=Oc(l,c,t,r),[h,m]=Zh(d),y=.5,w=1-y/h,$=m/(a+o*m),k=$*o,A=$*a,T=xs(k),B=A*T/k,[q,oe,De]=Jh([T,l*B,c*B],t),de=kt(1/Math.max(Math.max(q,oe),Math.max(De,0)),1/3);o=o/de,a=a/de,a=a*qa(o)/o,o=qa(o),s=o/k,i=(y+m)*A/(m*y+m*w*A)}return Math.abs(i)<n||s===0?u=null:u=ln(u*360),[u,i,s]}var k8=new G({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:En,gamutSpace:"self",fromBase(e){return $8(e,Ql,ec)},toBase(e){return w8(e,Ql,ec)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let ew=gr.D65;const x8=216/24389,l1=24389/27,[c1,d1]=Ic({space:Yt,coords:ew});var tw=new G({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:ew,base:Yt,fromBase(e){let t=[$t(e[0]),$t(e[1]),$t(e[2])],r=t[1],[n,o]=Ic({space:Yt,coords:t});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let i=r<=x8?l1*r:116*Math.cbrt(r)-16;return[i,13*i*(n-c1),13*i*(o-d1)]},toBase(e){let[t,r,n]=e;if(t===0||Fe(t))return[0,0,0];r=$t(r),n=$t(n);let o=r/(13*t)+c1,i=n/(13*t)+d1,s=t<=8?t/l1:Math.pow((t+16)/116,3);return[s*(9*o/(4*i)),s,s*((12-3*o-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),Yh=new G({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:tw,fromBase:qr.fromBase,toBase:qr.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const D8=216/24389,A8=24389/27,f1=Ot[0][0],h1=Ot[0][1],rf=Ot[0][2],m1=Ot[1][0],g1=Ot[1][1],nf=Ot[1][2],p1=Ot[2][0],b1=Ot[2][1],of=Ot[2][2];function us(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function tc(e){const t=Math.pow(e+16,3)/1560896,r=t>D8?t:e/A8,n=r*(284517*f1-94839*rf),o=r*(838422*rf+769860*h1+731718*f1),i=r*(632260*rf-126452*h1),s=r*(284517*m1-94839*nf),a=r*(838422*nf+769860*g1+731718*m1),u=r*(632260*nf-126452*g1),l=r*(284517*p1-94839*of),c=r*(838422*of+769860*b1+731718*p1),d=r*(632260*of-126452*b1);return{r0s:n/i,r0i:o*e/i,r1s:n/(i+126452),r1i:(o-769860)*e/(i+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/d,b0i:c*e/d,b1s:l/(d+126452),b1i:(c-769860)*e/(d+126452)}}function y1(e,t){const r=t/360*Math.PI*2,n=us(e.r0s,e.r0i,r),o=us(e.r1s,e.r1i,r),i=us(e.g0s,e.g0i,r),s=us(e.g1s,e.g1i,r),a=us(e.b0s,e.b0i,r),u=us(e.b1s,e.b1i,r);return Math.min(n,o,i,s,a,u)}var E8=new G({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Yh,gamutSpace:Ni,fromBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=tc(t),s=y1(i,n);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=tc(n);o=y1(i,t)/100*r}return[n,o,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Ot[0][0];Ot[0][1];Ot[0][2];Ot[1][0];Ot[1][1];Ot[1][2];Ot[2][0];Ot[2][1];Ot[2][2];function ls(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function v1(e){let t=ls(e.r0s,e.r0i),r=ls(e.r1s,e.r1i),n=ls(e.g0s,e.g0i),o=ls(e.g1s,e.g1i),i=ls(e.b0s,e.b0i),s=ls(e.b1s,e.b1i);return Math.min(t,r,n,o,i,s)}var C8=new G({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Yh,gamutSpace:"self",fromBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=tc(t),s=v1(i);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=tc(n);o=v1(i)/100*r}return[n,o,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Xh=new lr({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:du.toBase,fromBase:du.fromBase});const w1=203,$1=2610/2**14,F8=2**14/2610,M8=2523/2**5,k1=2**5/2523,x1=3424/2**12,D1=2413/2**7,A1=2392/2**7;var S8=new lr({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Xh,toBase(e){return e.map(function(t){return(Math.max(t**k1-x1,0)/(D1-A1*t**k1))**F8*1e4/w1})},fromBase(e){return e.map(function(t){let r=Math.max(t*w1/1e4,0),n=x1+D1*r**$1,o=1+A1*r**$1;return(n/o)**M8})}});const E1=.17883277,C1=.28466892,F1=.55991073,sf=3.7743;var T8=new lr({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Xh,toBase(e){return e.map(function(t){return t<=.5?t**2/3*sf:(Math.exp((t-F1)/E1)+C1)/12*sf})},fromBase(e){return e.map(function(t){return t/=sf,t<=1/12?kt(3*t,.5):E1*Math.log(12*t-C1)+F1})}});const rw={};Go.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=nw(e.W1,e.W2,e.options.method))});Go.add("chromatic-adaptation-end",e=>{e.M||(e.M=nw(e.W1,e.W2,e.options.method))});function Bc({id:e,toCone_M:t,fromCone_M:r}){rw[e]=arguments[0]}function nw(e,t,r="Bradford"){let n=rw[r],[o,i,s]=Na(n.toCone_M,e),[a,u,l]=Na(n.toCone_M,t),c=[[a/o,0,0],[0,u/i,0],[0,0,l/s]],d=Na(c,n.toCone_M);return Na(n.fromCone_M,d)}Bc({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Bc({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Bc({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Bc({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(gr,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});gr.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const N8=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],P8=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ow=new lr({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:gr.ACES,toXYZ_M:N8,fromXYZ_M:P8});const dl=2**-16,af=-.35828683,fl=(Math.log2(65504)+9.72)/17.52;var I8=new lr({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[af,fl],name:"Red"},g:{range:[af,fl],name:"Green"},b:{range:[af,fl],name:"Blue"}},referred:"scene",base:ow,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-dl)*2:r<fl?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(dl)+9.72)/17.52:t<dl?(Math.log2(dl+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),M1=Object.freeze({__proto__:null,A98RGB:i8,A98RGB_Linear:Jv,ACEScc:I8,ACEScg:ow,CAM16_JMh:dD,HCT:cu,HPLuv:C8,HSL:t8,HSLuv:E8,HSV:Zv,HWB:r8,ICTCP:D0,JzCzHz:x0,Jzazbz:Mv,LCH:qr,LCHuv:Yh,Lab:jr,Lab_D65:C0,Luv:tw,OKLCH:f8,OKLab:En,OKLrCH:v8,OKLrab:Qv,Okhsl:y8,Okhsv:k8,P3:zv,P3_Linear:_v,ProPhoto:c8,ProPhoto_Linear:Yv,REC_2020:jv,REC_2020_Linear:du,REC_2020_Scene_Referred:d8,REC_2100_HLG:T8,REC_2100_Linear:Xh,REC_2100_PQ:S8,XYZ_ABS_D65:Wh,XYZ_D50:qh,XYZ_D65:Yt,sRGB:Ni,sRGB_Linear:Uv});let Ue=class kr{constructor(...t){let r;if(t.length===1){let s={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=ne(t[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:G.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=Fe(i)?i:i===void 0?1:Nc(0,i,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new kr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=CD(this,...t);return r.color=new kr(r.color),r}static get(t,...r){return Ps(t,this)?t:new kr(t,...r)}static try(t,r){if(Ps(t,this))return t;let n=Av(t,r);return n?new kr(n):null}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,s=function(...a){let u=r(...a);if(i==="color")u=kr.get(u);else if(i==="function<color>"){let l=u;u=function(...c){let d=l(...c);return kr.get(d)},Object.assign(u,l)}else i==="array<color>"&&(u=u.map(l=>kr.get(l)));return u};t in kr||(kr[t]=s),o&&(kr.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)kr.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(kr);else for(let r in t)kr.defineFunction(r,t[r])}};Ue.defineFunctions({get:Lr,getAll:Mu,set:vo,setAll:Vh,to:qe,equals:MD,inGamut:Ei,toGamut:Ho,distance:Fv,deltas:FD,toString:za});Object.assign(Ue,{util:E6,hooks:Go,WHITES:gr,Space:G,spaces:G.registry,parse:xv,defaults:Vr});for(let e of Object.keys(M1))G.register(M1[e]);for(let e in G.registry)F0(e,G.registry[e]);Go.add("colorspace-init-end",e=>{F0(e.id,e),e.aliases?.forEach(t=>{F0(t,e)})});function F0(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(Ue.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:((i,s)=>{try{return G.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)}),get:(i,s,a)=>{if(s&&typeof s!="symbol"&&!(s in i)&&s in o){let{index:u}=G.resolveCoord([t,s]);if(u>=0)return i[u]}return Reflect.get(i,s,a)},set:(i,s,a,u)=>{if(s&&typeof s!="symbol"&&!(s in i)||Number(s)>=0){let{index:l}=G.resolveCoord([t,s]);if(l>=0)return i[l]=a,this.setAll(e,i),!0}return Reflect.set(i,s,a,u)}});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}Ue.extend(Os);Ue.extend({deltaE:Pa});Object.assign(Ue,{deltaEMethods:Os});Ue.extend(XD);Ue.extend({contrast:ZD});Ue.extend(YD);Ue.extend(TD);Ue.extend(e8);Ue.extend(Sl);const iw=Symbol("no update");function S1(e){return e!==iw}class uf extends Nn()("observable-value-update"){}class O8 extends Nn()("observable-value-resolve"){}class B8 extends Nn()("observable-value-error"){}class R8 extends Eh("observable-destroy"){}class L8 extends Eh("observable-callback-call"){}class j8 extends Nn()("observable-params-update"){}class sw{listenTarget=new Ch;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===iw)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const o=this.value;return this.value=r,this.listenTarget.dispatch(new uf({detail:[r,o]})),!0}return!1}listen(t,r){const n=o=>r(...o.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(uf,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(uf,r)}destroy(){this.listenTarget.dispatch(new R8),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function Qh(e,t){return n3(e,t,(r,n)=>F.isFunction(r)&&F.isFunction(n)?!0:F.strictEquals(r,n))}var Wa;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Wa||(Wa={}));class _8 extends sw{equalityCheck;waitingForValueDeferredPromise=new Ll;lastSetPromise;lastSetId=Ai();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||Qh,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=Ai();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Ll,super.setValue(this.waitingForValueDeferredPromise.promise,F.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=ht(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(t){return S1(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,F.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Ai(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new O8({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,F.strictEquals),this.dispatch(new B8({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):S1(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(ht(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?Wa.Rejected:this.value instanceof Promise?Wa.Waiting:Wa.Resolved}}class ms extends _8{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==ms.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||Qh,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:ms.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===ms.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(ht(t))}finally{this.dispatch(new L8)}}updateLastParams(t){try{return this.internalParams===ms.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new j8({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(ht(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return F.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function U8(e){return Ct(e)&&!Tr(e)&&!Nu(e)&&Symbol.asyncIterator in e}function Tr(e){return Array.isArray(e)}function aw(e){return typeof e=="bigint"}function Tu(e){return typeof e=="boolean"}function em(e){return e instanceof globalThis.Date}function z8(e){return typeof e=="function"}function V8(e){return Ct(e)&&!Tr(e)&&!Nu(e)&&Symbol.iterator in e}function q8(e){return e===null}function Kn(e){return typeof e=="number"}function Ct(e){return typeof e=="object"&&e!==null}function uw(e){return e instanceof globalThis.RegExp}function yt(e){return typeof e=="string"}function W8(e){return typeof e=="symbol"}function Nu(e){return e instanceof globalThis.Uint8Array}function xt(e){return e===void 0}function K8(e){return e.map(t=>rc(t))}function G8(e){return new Date(e.getTime())}function H8(e){return new Uint8Array(e)}function Z8(e){return new RegExp(e.source,e.flags)}function J8(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=rc(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=rc(e[r]);return t}function rc(e){return Tr(e)?K8(e):em(e)?G8(e):Nu(e)?H8(e):uw(e)?Z8(e):Ct(e)?J8(e):e}function Wr(e){return rc(e)}function tm(e,t){return Wr(t===void 0?e:{...t,...e})}function lw(e){return Gn(e)&&globalThis.Symbol.asyncIterator in e}function cw(e){return Gn(e)&&globalThis.Symbol.iterator in e}function dw(e){return e instanceof globalThis.Promise}function rm(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function nm(e){return e instanceof globalThis.Uint8Array}function fw(e,t){return t in e}function Gn(e){return e!==null&&typeof e=="object"}function Kr(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function ti(e){return e===void 0}function Rc(e){return e===null}function Lc(e){return typeof e=="boolean"}function ue(e){return typeof e=="number"}function hw(e){return globalThis.Number.isInteger(e)}function ao(e){return typeof e=="bigint"}function Ur(e){return typeof e=="string"}function mw(e){return typeof e=="function"}function jc(e){return typeof e=="symbol"}function gw(e){return ao(e)||Lc(e)||Rc(e)||ue(e)||Ur(e)||jc(e)||ti(e)}var bt;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=Gn(s);return e.AllowArrayObject?a:a&&!Kr(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function o(s){return e.AllowNaN?ue(s):Number.isFinite(s)}e.IsNumberLike=o;function i(s){const a=ti(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=i})(bt||(bt={}));function Y8(e){return globalThis.Object.freeze(e).map(t=>nc(t))}function X8(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=nc(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=nc(e[r]);return globalThis.Object.freeze(t)}function nc(e){return Tr(e)?Y8(e):em(e)?e:Nu(e)?e:uw(e)?e:Ct(e)?X8(e):e}function L(e,t){const r=t!==void 0?{...t,...e}:e;switch(bt.InstanceMode){case"freeze":return nc(r);case"clone":return Wr(r);default:return r}}class tr extends Error{constructor(t){super(t)}}const Er=Symbol.for("TypeBox.Transform"),Pu=Symbol.for("TypeBox.Readonly"),ko=Symbol.for("TypeBox.Optional"),_c=Symbol.for("TypeBox.Hint"),R=Symbol.for("TypeBox.Kind");function om(e){return Ct(e)&&e[Pu]==="Readonly"}function ri(e){return Ct(e)&&e[ko]==="Optional"}function pw(e){return ve(e,"Any")}function bw(e){return ve(e,"Argument")}function Qs(e){return ve(e,"Array")}function Uc(e){return ve(e,"AsyncIterator")}function zc(e){return ve(e,"BigInt")}function Iu(e){return ve(e,"Boolean")}function ea(e){return ve(e,"Computed")}function ta(e){return ve(e,"Constructor")}function Q8(e){return ve(e,"Date")}function ra(e){return ve(e,"Function")}function na(e){return ve(e,"Integer")}function dn(e){return ve(e,"Intersect")}function Vc(e){return ve(e,"Iterator")}function ve(e,t){return Ct(e)&&R in e&&e[R]===t}function yw(e){return Tu(e)||Kn(e)||yt(e)}function qi(e){return ve(e,"Literal")}function Wi(e){return ve(e,"MappedKey")}function Jr(e){return ve(e,"MappedResult")}function Ou(e){return ve(e,"Never")}function eA(e){return ve(e,"Not")}function im(e){return ve(e,"Null")}function oa(e){return ve(e,"Number")}function Pn(e){return ve(e,"Object")}function qc(e){return ve(e,"Promise")}function Wc(e){return ve(e,"Record")}function Mr(e){return ve(e,"Ref")}function vw(e){return ve(e,"RegExp")}function Bu(e){return ve(e,"String")}function sm(e){return ve(e,"Symbol")}function Ki(e){return ve(e,"TemplateLiteral")}function tA(e){return ve(e,"This")}function Ke(e){return Ct(e)&&Er in e}function Gi(e){return ve(e,"Tuple")}function Ru(e){return ve(e,"Undefined")}function Kt(e){return ve(e,"Union")}function rA(e){return ve(e,"Uint8Array")}function nA(e){return ve(e,"Unknown")}function oA(e){return ve(e,"Unsafe")}function iA(e){return ve(e,"Void")}function sA(e){return Ct(e)&&R in e&&yt(e[R])}function br(e){return pw(e)||bw(e)||Qs(e)||Iu(e)||zc(e)||Uc(e)||ea(e)||ta(e)||Q8(e)||ra(e)||na(e)||dn(e)||Vc(e)||qi(e)||Wi(e)||Jr(e)||Ou(e)||eA(e)||im(e)||oa(e)||Pn(e)||qc(e)||Wc(e)||Mr(e)||vw(e)||Bu(e)||sm(e)||Ki(e)||tA(e)||Gi(e)||Ru(e)||Kt(e)||rA(e)||nA(e)||oA(e)||iA(e)||sA(e)}const aA=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function ww(e){try{return new RegExp(e),!0}catch{return!1}}function am(e){if(!yt(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function $w(e){return um(e)||st(e)}function ka(e){return xt(e)||aw(e)}function _e(e){return xt(e)||Kn(e)}function um(e){return xt(e)||Tu(e)}function Oe(e){return xt(e)||yt(e)}function uA(e){return xt(e)||yt(e)&&am(e)&&ww(e)}function lA(e){return xt(e)||yt(e)&&am(e)}function kw(e){return xt(e)||st(e)}function oc(e){return Ct(e)&&e[ko]==="Optional"}function Cn(e){return we(e,"Any")&&Oe(e.$id)}function cA(e){return we(e,"Argument")&&Kn(e.index)}function Hi(e){return we(e,"Array")&&e.type==="array"&&Oe(e.$id)&&st(e.items)&&_e(e.minItems)&&_e(e.maxItems)&&um(e.uniqueItems)&&kw(e.contains)&&_e(e.minContains)&&_e(e.maxContains)}function lm(e){return we(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Oe(e.$id)&&st(e.items)}function Kc(e){return we(e,"BigInt")&&e.type==="bigint"&&Oe(e.$id)&&ka(e.exclusiveMaximum)&&ka(e.exclusiveMinimum)&&ka(e.maximum)&&ka(e.minimum)&&ka(e.multipleOf)}function Zi(e){return we(e,"Boolean")&&e.type==="boolean"&&Oe(e.$id)}function dA(e){return we(e,"Computed")&&yt(e.target)&&Tr(e.parameters)&&e.parameters.every(t=>st(t))}function Gc(e){return we(e,"Constructor")&&e.type==="Constructor"&&Oe(e.$id)&&Tr(e.parameters)&&e.parameters.every(t=>st(t))&&st(e.returns)}function Hc(e){return we(e,"Date")&&e.type==="Date"&&Oe(e.$id)&&_e(e.exclusiveMaximumTimestamp)&&_e(e.exclusiveMinimumTimestamp)&&_e(e.maximumTimestamp)&&_e(e.minimumTimestamp)&&_e(e.multipleOfTimestamp)}function Zc(e){return we(e,"Function")&&e.type==="Function"&&Oe(e.$id)&&Tr(e.parameters)&&e.parameters.every(t=>st(t))&&st(e.returns)}function xo(e){return we(e,"Integer")&&e.type==="integer"&&Oe(e.$id)&&_e(e.exclusiveMaximum)&&_e(e.exclusiveMinimum)&&_e(e.maximum)&&_e(e.minimum)&&_e(e.multipleOf)}function xw(e){return Ct(e)&&Object.entries(e).every(([t,r])=>am(t)&&st(r))}function Ji(e){return we(e,"Intersect")&&!(yt(e.type)&&e.type!=="object")&&Tr(e.allOf)&&e.allOf.every(t=>st(t)&&!bA(t))&&Oe(e.type)&&(um(e.unevaluatedProperties)||kw(e.unevaluatedProperties))&&Oe(e.$id)}function cm(e){return we(e,"Iterator")&&e.type==="Iterator"&&Oe(e.$id)&&st(e.items)}function we(e,t){return Ct(e)&&R in e&&e[R]===t}function Dw(e){return ni(e)&&yt(e.const)}function Aw(e){return ni(e)&&Kn(e.const)}function Ew(e){return ni(e)&&Tu(e.const)}function ni(e){return we(e,"Literal")&&Oe(e.$id)&&fA(e.const)}function fA(e){return Tu(e)||Kn(e)||yt(e)}function hA(e){return we(e,"MappedKey")&&Tr(e.keys)&&e.keys.every(t=>Kn(t)||yt(t))}function mA(e){return we(e,"MappedResult")&&xw(e.properties)}function oi(e){return we(e,"Never")&&Ct(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function Rs(e){return we(e,"Not")&&st(e.not)}function dm(e){return we(e,"Null")&&e.type==="null"&&Oe(e.$id)}function Cr(e){return we(e,"Number")&&e.type==="number"&&Oe(e.$id)&&_e(e.exclusiveMaximum)&&_e(e.exclusiveMinimum)&&_e(e.maximum)&&_e(e.minimum)&&_e(e.multipleOf)}function ut(e){return we(e,"Object")&&e.type==="object"&&Oe(e.$id)&&xw(e.properties)&&$w(e.additionalProperties)&&_e(e.minProperties)&&_e(e.maxProperties)}function fm(e){return we(e,"Promise")&&e.type==="Promise"&&Oe(e.$id)&&st(e.item)}function Qt(e){return we(e,"Record")&&e.type==="object"&&Oe(e.$id)&&$w(e.additionalProperties)&&Ct(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&ww(r[0])&&Ct(t.patternProperties)&&st(t.patternProperties[r[0]])})(e)}function gA(e){return we(e,"Ref")&&Oe(e.$id)&&yt(e.$ref)}function fu(e){return we(e,"RegExp")&&Oe(e.$id)&&yt(e.source)&&yt(e.flags)&&_e(e.maxLength)&&_e(e.minLength)}function Fn(e){return we(e,"String")&&e.type==="string"&&Oe(e.$id)&&_e(e.minLength)&&_e(e.maxLength)&&uA(e.pattern)&&lA(e.format)}function hu(e){return we(e,"Symbol")&&e.type==="symbol"&&Oe(e.$id)}function mu(e){return we(e,"TemplateLiteral")&&e.type==="string"&&yt(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function pA(e){return we(e,"This")&&Oe(e.$id)&&yt(e.$ref)}function bA(e){return Ct(e)&&Er in e}function Jc(e){return we(e,"Tuple")&&e.type==="array"&&Oe(e.$id)&&Kn(e.minItems)&&Kn(e.maxItems)&&e.minItems===e.maxItems&&(xt(e.items)&&xt(e.additionalItems)&&e.minItems===0||Tr(e.items)&&e.items.every(t=>st(t)))}function Pi(e){return we(e,"Undefined")&&e.type==="undefined"&&Oe(e.$id)}function wo(e){return we(e,"Union")&&Oe(e.$id)&&Ct(e)&&Tr(e.anyOf)&&e.anyOf.every(t=>st(t))}function Lu(e){return we(e,"Uint8Array")&&e.type==="Uint8Array"&&Oe(e.$id)&&_e(e.minByteLength)&&_e(e.maxByteLength)}function Mn(e){return we(e,"Unknown")&&Oe(e.$id)}function yA(e){return we(e,"Unsafe")}function Yc(e){return we(e,"Void")&&e.type==="void"&&Oe(e.$id)}function vA(e){return Ct(e)&&R in e&&yt(e[R])&&!aA.includes(e[R])}function st(e){return Ct(e)&&(Cn(e)||cA(e)||Hi(e)||Zi(e)||Kc(e)||lm(e)||dA(e)||Gc(e)||Hc(e)||Zc(e)||xo(e)||Ji(e)||cm(e)||ni(e)||hA(e)||mA(e)||oi(e)||Rs(e)||dm(e)||Cr(e)||ut(e)||fm(e)||Qt(e)||gA(e)||fu(e)||Fn(e)||hu(e)||mu(e)||pA(e)||Jc(e)||Pi(e)||wo(e)||Lu(e)||Mn(e)||yA(e)||Yc(e)||vA(e))}const wA="(true|false)",Tl="(0|[1-9][0-9]*)",Cw="(.*)",$A="(?!.*)",Ls=`^${Tl}$`,js=`^${Cw}$`,kA=`^${$A}$`,Fw=new Map;function hm(e){return Fw.has(e)}function mm(e){return Fw.get(e)}const gm=new Map;function Jo(e){return gm.has(e)}function pm(e,t){gm.set(e,t)}function bm(e){return gm.get(e)}function xA(e,t){return e.includes(t)}function DA(e){return[...new Set(e)]}function AA(e,t){return e.filter(r=>t.includes(r))}function EA(e,t){return e.reduce((r,n)=>AA(r,n),t)}function CA(e){return e.length===1?e[0]:e.length>1?EA(e.slice(1),e[0]):[]}function FA(e){const t=[];for(const r of e)t.push(...r);return t}function gu(e){return L({[R]:"Any"},e)}function ym(e,t){return L({[R]:"Array",type:"array",items:e},t)}function MA(e){return L({[R]:"Argument",index:e})}function vm(e,t){return L({[R]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function Pt(e,t,r){return L({[R]:"Computed",target:e,parameters:t},r)}function SA(e,t){const{[t]:r,...n}=e;return n}function Gr(e,t){return t.reduce((r,n)=>SA(r,n),e)}function lt(e){return L({[R]:"Never",not:{}},e)}function rr(e){return L({[R]:"MappedResult",properties:e})}function wm(e,t,r){return L({[R]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function ju(e,t,r){return L({[R]:"Function",type:"Function",parameters:e,returns:t},r)}function M0(e,t){return L({[R]:"Union",anyOf:e},t)}function TA(e){return e.some(t=>ri(t))}function T1(e){return e.map(t=>ri(t)?NA(t):t)}function NA(e){return Gr(e,[ko])}function PA(e,t){return TA(e)?ai(M0(T1(e),t)):M0(T1(e),t)}function ia(e,t){return e.length===1?L(e[0],t):e.length===0?lt(t):PA(e,t)}function nr(e,t){return e.length===0?lt(t):e.length===1?L(e[0],t):M0(e,t)}class N1 extends tr{}function IA(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function $m(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function fo(e,t){return $m(e,t,"(")}function pu(e,t){return $m(e,t,")")}function Mw(e,t){return $m(e,t,"|")}function OA(e){if(!(fo(e,0)&&pu(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(fo(e,r)&&(t+=1),pu(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function BA(e){return e.slice(1,e.length-1)}function RA(e){let t=0;for(let r=0;r<e.length;r++)if(fo(e,r)&&(t+=1),pu(e,r)&&(t-=1),Mw(e,r)&&t===0)return!0;return!1}function LA(e){for(let t=0;t<e.length;t++)if(fo(e,t))return!0;return!1}function jA(e){let[t,r]=[0,0];const n=[];for(let i=0;i<e.length;i++)if(fo(e,i)&&(t+=1),pu(e,i)&&(t-=1),Mw(e,i)&&t===0){const s=e.slice(r,i);s.length>0&&n.push(_s(s)),r=i+1}const o=e.slice(r);return o.length>0&&n.push(_s(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function _A(e){function t(o,i){if(!fo(o,i))throw new N1("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=i;a<o.length;a++)if(fo(o,a)&&(s+=1),pu(o,a)&&(s-=1),s===0)return[i,a];throw new N1("TemplateLiteralParser: Unclosed group parens in expression")}function r(o,i){for(let s=i;s<o.length;s++)if(fo(o,s))return[i,s];return[i,o.length]}const n=[];for(let o=0;o<e.length;o++)if(fo(e,o)){const[i,s]=t(e,o),a=e.slice(i,s+1);n.push(_s(a)),o=s}else{const[i,s]=r(e,o),a=e.slice(i,s);a.length>0&&n.push(_s(a)),o=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function _s(e){return OA(e)?_s(BA(e)):RA(e)?jA(e):LA(e)?_A(e):{type:"const",const:IA(e)}}function km(e){return _s(e.slice(1,e.length-1))}class UA extends tr{}function zA(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function VA(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function qA(e){return e.type==="const"&&e.const===".*"}function bu(e){return zA(e)||qA(e)?!1:VA(e)?!0:e.type==="and"?e.expr.every(t=>bu(t)):e.type==="or"?e.expr.every(t=>bu(t)):e.type==="const"?!0:(()=>{throw new UA("Unknown expression type")})()}function WA(e){const t=km(e.pattern);return bu(t)}class KA extends tr{}function*Sw(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of Sw(e.slice(1)))yield`${t}${r}`}function*GA(e){return yield*Sw(e.expr.map(t=>[...Xc(t)]))}function*HA(e){for(const t of e.expr)yield*Xc(t)}function*ZA(e){return yield e.const}function*Xc(e){return e.type==="and"?yield*GA(e):e.type==="or"?yield*HA(e):e.type==="const"?yield*ZA(e):(()=>{throw new KA("Unknown expression")})()}function Tw(e){const t=km(e.pattern);return bu(t)?[...Xc(t)]:[]}function At(e,t){return L({[R]:"Literal",const:e,type:typeof e},t)}function Nw(e){return L({[R]:"Boolean",type:"boolean"},e)}function xm(e){return L({[R]:"BigInt",type:"bigint"},e)}function Yi(e){return L({[R]:"Number",type:"number"},e)}function Ii(e){return L({[R]:"String",type:"string"},e)}function*JA(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield Nw():t==="number"?yield Yi():t==="bigint"?yield xm():t==="string"?yield Ii():yield(()=>{const r=t.split("|").map(n=>At(n.trim()));return r.length===0?lt():r.length===1?r[0]:ia(r)})()}function*YA(e){if(e[1]!=="{"){const t=At("$"),r=S0(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=JA(e.slice(2,t)),n=S0(e.slice(t+1));return yield*[...r,...n]}yield At(e)}function*S0(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=At(e.slice(0,t)),n=YA(e.slice(t));return yield*[r,...n]}yield At(e)}function XA(e){return[...S0(e)]}class QA extends tr{}function eE(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Pw(e,t){return Ki(e)?e.pattern.slice(1,e.pattern.length-1):Kt(e)?`(${e.anyOf.map(r=>Pw(r,t)).join("|")})`:oa(e)?`${t}${Tl}`:na(e)?`${t}${Tl}`:zc(e)?`${t}${Tl}`:Bu(e)?`${t}${Cw}`:qi(e)?`${t}${eE(e.const.toString())}`:Iu(e)?`${t}${wA}`:(()=>{throw new QA(`Unexpected Kind '${e[R]}'`)})()}function P1(e){return`^${e.map(t=>Pw(t,"")).join("")}$`}function ic(e){const r=Tw(e).map(n=>At(n));return ia(r)}function Iw(e,t){const r=yt(e)?P1(XA(e)):P1(e);return L({[R]:"TemplateLiteral",type:"string",pattern:r},t)}function tE(e){return Tw(e).map(r=>r.toString())}function rE(e){const t=[];for(const r of e)t.push(...ii(r));return t}function nE(e){return[e.toString()]}function ii(e){return[...new Set(Ki(e)?tE(e):Kt(e)?rE(e.anyOf):qi(e)?nE(e.const):oa(e)?["[number]"]:na(e)?["[number]"]:[])]}function oE(e,t,r){const n={};for(const o of Object.getOwnPropertyNames(t))n[o]=Qc(e,ii(t[o]),r);return n}function iE(e,t,r){return oE(e,t.properties,r)}function sE(e,t,r){const n=iE(e,t,r);return rr(n)}function Ow(e,t){return e.map(r=>Bw(r,t))}function aE(e){return e.filter(t=>!Ou(t))}function uE(e,t){return jw(aE(Ow(e,t)))}function lE(e){return e.some(t=>Ou(t))?[]:e}function cE(e,t){return ia(lE(Ow(e,t)))}function dE(e,t){return t in e?e[t]:t==="[number]"?ia(e):lt()}function fE(e,t){return t==="[number]"?e:lt()}function hE(e,t){return t in e?e[t]:lt()}function Bw(e,t){return dn(e)?uE(e.allOf,t):Kt(e)?cE(e.anyOf,t):Gi(e)?dE(e.items??[],t):Qs(e)?fE(e.items,t):Pn(e)?hE(e.properties,t):lt()}function Dm(e,t){return t.map(r=>Bw(e,r))}function I1(e,t){return ia(Dm(e,t))}function Qc(e,t,r){if(Mr(e)||Mr(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!br(e)||!br(t))throw new tr(n);return Pt("Index",[e,t])}return Jr(t)?sE(e,t,r):Wi(t)?bE(e,t,r):L(br(t)?I1(e,ii(t)):I1(e,t),r)}function mE(e,t,r){return{[t]:Qc(e,[t],Wr(r))}}function gE(e,t,r){return t.reduce((n,o)=>({...n,...mE(e,o,r)}),{})}function pE(e,t,r){return gE(e,t.keys,r)}function bE(e,t,r){const n=pE(e,t,r);return rr(n)}function Am(e,t){return L({[R]:"Iterator",type:"Iterator",items:e},t)}function yE(e){return globalThis.Object.keys(e).filter(t=>!ri(e[t]))}function vE(e,t){const r=yE(e),n=r.length>0?{[R]:"Object",type:"object",required:r,properties:e}:{[R]:"Object",type:"object",properties:e};return L(n,t)}var Wt=vE;function Rw(e,t){return L({[R]:"Promise",type:"Promise",item:e},t)}function wE(e){return L(Gr(e,[Pu]))}function $E(e){return L({...e,[Pu]:"Readonly"})}function kE(e,t){return t===!1?wE(e):$E(e)}function si(e,t){const r=t??!0;return Jr(e)?AE(e,r):kE(e,r)}function xE(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=si(e[n],t);return r}function DE(e,t){return xE(e.properties,t)}function AE(e,t){const r=DE(e,t);return rr(r)}function sa(e,t){return L(e.length>0?{[R]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[R]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function Lw(e,t){return e in t?rn(e,t[e]):rr(t)}function EE(e){return{[e]:At(e)}}function CE(e){const t={};for(const r of e)t[r]=At(r);return t}function FE(e,t){return xA(t,e)?EE(e):CE(t)}function ME(e,t){const r=FE(e,t);return Lw(e,r)}function xa(e,t){return t.map(r=>rn(e,r))}function SE(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=rn(e,t[n]);return r}function rn(e,t){const r={...t};return ri(t)?ai(rn(e,Gr(t,[ko]))):om(t)?si(rn(e,Gr(t,[Pu]))):Jr(t)?Lw(e,t.properties):Wi(t)?ME(e,t.keys):ta(t)?wm(xa(e,t.parameters),rn(e,t.returns),r):ra(t)?ju(xa(e,t.parameters),rn(e,t.returns),r):Uc(t)?vm(rn(e,t.items),r):Vc(t)?Am(rn(e,t.items),r):dn(t)?ui(xa(e,t.allOf),r):Kt(t)?nr(xa(e,t.anyOf),r):Gi(t)?sa(xa(e,t.items??[]),r):Pn(t)?Wt(SE(e,t.properties),r):Qs(t)?ym(rn(e,t.items),r):qc(t)?Rw(rn(e,t.item),r):t}function TE(e,t){const r={};for(const n of e)r[n]=rn(n,t);return r}function NE(e,t,r){const n=br(e)?ii(e):e,o=t({[R]:"MappedKey",keys:n}),i=TE(n,o);return Wt(i,r)}function PE(e){return L(Gr(e,[ko]))}function IE(e){return L({...e,[ko]:"Optional"})}function OE(e,t){return t===!1?PE(e):IE(e)}function ai(e,t){const r=t??!0;return Jr(e)?LE(e,r):OE(e,r)}function BE(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=ai(e[n],t);return r}function RE(e,t){return BE(e.properties,t)}function LE(e,t){const r=RE(e,t);return rr(r)}function T0(e,t={}){const r=e.every(o=>Pn(o)),n=br(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return L(t.unevaluatedProperties===!1||br(t.unevaluatedProperties)||r?{...n,[R]:"Intersect",type:"object",allOf:e}:{...n,[R]:"Intersect",allOf:e},t)}function jE(e){return e.every(t=>ri(t))}function _E(e){return Gr(e,[ko])}function O1(e){return e.map(t=>ri(t)?_E(t):t)}function UE(e,t){return jE(e)?ai(T0(O1(e),t)):T0(O1(e),t)}function jw(e,t={}){if(e.length===1)return L(e[0],t);if(e.length===0)return lt(t);if(e.some(r=>Ke(r)))throw new Error("Cannot intersect transform types");return UE(e,t)}function ui(e,t){if(e.length===1)return L(e[0],t);if(e.length===0)return lt(t);if(e.some(r=>Ke(r)))throw new Error("Cannot intersect transform types");return T0(e,t)}function aa(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new tr("Ref: $ref must be a string");return L({[R]:"Ref",$ref:t},r)}function zE(e,t){return Pt("Awaited",[Pt(e,t)])}function VE(e){return Pt("Awaited",[aa(e)])}function qE(e){return ui(_w(e))}function WE(e){return nr(_w(e))}function KE(e){return ed(e)}function _w(e){return e.map(t=>ed(t))}function ed(e,t){return L(ea(e)?zE(e.target,e.parameters):dn(e)?qE(e.allOf):Kt(e)?WE(e.anyOf):qc(e)?KE(e.item):Mr(e)?VE(e.$ref):e,t)}function Uw(e){const t=[];for(const r of e)t.push(Xi(r));return t}function GE(e){const t=Uw(e);return FA(t)}function HE(e){const t=Uw(e);return CA(t)}function ZE(e){return e.map((t,r)=>r.toString())}function JE(e){return["[number]"]}function YE(e){return globalThis.Object.getOwnPropertyNames(e)}function XE(e){return N0?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function Xi(e){return dn(e)?GE(e.allOf):Kt(e)?HE(e.anyOf):Gi(e)?ZE(e.items??[]):Qs(e)?JE(e.items):Pn(e)?YE(e.properties):Wc(e)?XE(e.patternProperties):[]}let N0=!1;function Us(e){N0=!0;const t=Xi(e);return N0=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function QE(e,t){return Pt("KeyOf",[Pt(e,t)])}function e9(e){return Pt("KeyOf",[aa(e)])}function t9(e,t){const r=Xi(e),n=r9(r),o=ia(n);return L(o,t)}function r9(e){return e.map(t=>t==="[number]"?Yi():At(t))}function Em(e,t){return ea(e)?QE(e.target,e.parameters):Mr(e)?e9(e.$ref):Jr(e)?i9(e,t):t9(e,t)}function n9(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Em(e[n],Wr(t));return r}function o9(e,t){return n9(e.properties,t)}function i9(e,t){const r=o9(e,t);return rr(r)}function zw(e){const t=Xi(e),r=Dm(e,t);return t.map((n,o)=>[t[o],r[o]])}function s9(e){const t=[];for(const r of e)t.push(...Xi(r));return DA(t)}function a9(e){return e.filter(t=>!Ou(t))}function u9(e,t){const r=[];for(const n of e)r.push(...Dm(n,[t]));return a9(r)}function l9(e,t){const r={};for(const n of t)r[n]=jw(u9(e,n));return r}function c9(e,t){const r=s9(e),n=l9(e,r);return Wt(n,t)}function Vw(e){return L({[R]:"Date",type:"Date"},e)}function qw(e){return L({[R]:"Null",type:"null"},e)}function Ww(e){return L({[R]:"Symbol",type:"symbol"},e)}function Kw(e){return L({[R]:"Undefined",type:"undefined"},e)}function Gw(e){return L({[R]:"Uint8Array",type:"Uint8Array"},e)}function td(e){return L({[R]:"Unknown"},e)}function d9(e){return e.map(t=>Cm(t,!1))}function f9(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=si(Cm(e[r],!1));return t}function hl(e,t){return t===!0?e:si(e)}function Cm(e,t){return U8(e)||V8(e)?hl(gu(),t):Tr(e)?si(sa(d9(e))):Nu(e)?Gw():em(e)?Vw():Ct(e)?hl(Wt(f9(e)),t):z8(e)?hl(ju([],td()),t):xt(e)?Kw():q8(e)?qw():W8(e)?Ww():aw(e)?xm():Kn(e)||Tu(e)||yt(e)?At(e):Wt({})}function h9(e,t){return L(Cm(e,!0),t)}function m9(e,t){return ta(e)?sa(e.parameters,t):lt(t)}function g9(e,t){if(xt(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(i=>isNaN(i)).map(i=>e[i]),o=[...new Set(r)].map(i=>At(i));return nr(o,{...t,[_c]:"Enum"})}class p9 extends tr{}var S;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(S||(S={}));function cn(e){return e===S.False?e:S.True}function ua(e){throw new p9(e)}function Ft(e){return oi(e)||Ji(e)||wo(e)||Mn(e)||Cn(e)}function Mt(e,t){return oi(t)?Jw():Ji(t)?rd(e,t):wo(t)?Mm(e,t):Mn(t)?e5():Cn(t)?Fm():ua("StructuralRight")}function Fm(e,t){return S.True}function b9(e,t){return Ji(t)?rd(e,t):wo(t)&&t.anyOf.some(r=>Cn(r)||Mn(r))?S.True:wo(t)?S.Union:Mn(t)||Cn(t)?S.True:S.Union}function y9(e,t){return Mn(e)?S.False:Cn(e)?S.Union:oi(e)?S.True:S.False}function v9(e,t){return ut(t)&&nd(t)?S.True:Ft(t)?Mt(e,t):Hi(t)?cn(Ie(e.items,t.items)):S.False}function w9(e,t){return Ft(t)?Mt(e,t):lm(t)?cn(Ie(e.items,t.items)):S.False}function $9(e,t){return Ft(t)?Mt(e,t):ut(t)?cr(e,t):Qt(t)?fn(e,t):Kc(t)?S.True:S.False}function Hw(e,t){return Ew(e)||Zi(e)?S.True:S.False}function k9(e,t){return Ft(t)?Mt(e,t):ut(t)?cr(e,t):Qt(t)?fn(e,t):Zi(t)?S.True:S.False}function x9(e,t){return Ft(t)?Mt(e,t):ut(t)?cr(e,t):Gc(t)?e.parameters.length>t.parameters.length?S.False:e.parameters.every((r,n)=>cn(Ie(t.parameters[n],r))===S.True)?cn(Ie(e.returns,t.returns)):S.False:S.False}function D9(e,t){return Ft(t)?Mt(e,t):ut(t)?cr(e,t):Qt(t)?fn(e,t):Hc(t)?S.True:S.False}function A9(e,t){return Ft(t)?Mt(e,t):ut(t)?cr(e,t):Zc(t)?e.parameters.length>t.parameters.length?S.False:e.parameters.every((r,n)=>cn(Ie(t.parameters[n],r))===S.True)?cn(Ie(e.returns,t.returns)):S.False:S.False}function Zw(e,t){return ni(e)&&Kn(e.const)||Cr(e)||xo(e)?S.True:S.False}function E9(e,t){return xo(t)||Cr(t)?S.True:Ft(t)?Mt(e,t):ut(t)?cr(e,t):Qt(t)?fn(e,t):S.False}function rd(e,t){return t.allOf.every(r=>Ie(e,r)===S.True)?S.True:S.False}function C9(e,t){return e.allOf.some(r=>Ie(r,t)===S.True)?S.True:S.False}function F9(e,t){return Ft(t)?Mt(e,t):cm(t)?cn(Ie(e.items,t.items)):S.False}function M9(e,t){return ni(t)&&t.const===e.const?S.True:Ft(t)?Mt(e,t):ut(t)?cr(e,t):Qt(t)?fn(e,t):Fn(t)?Qw(e):Cr(t)?Yw(e):xo(t)?Zw(e):Zi(t)?Hw(e):S.False}function Jw(e,t){return S.False}function S9(e,t){return S.True}function B1(e){let[t,r]=[e,0];for(;Rs(t);)t=t.not,r+=1;return r%2===0?t:td()}function T9(e,t){return Rs(e)?Ie(B1(e),t):Rs(t)?Ie(e,B1(t)):ua("Invalid fallthrough for Not")}function N9(e,t){return Ft(t)?Mt(e,t):ut(t)?cr(e,t):Qt(t)?fn(e,t):dm(t)?S.True:S.False}function Yw(e,t){return Aw(e)||Cr(e)||xo(e)?S.True:S.False}function P9(e,t){return Ft(t)?Mt(e,t):ut(t)?cr(e,t):Qt(t)?fn(e,t):xo(t)||Cr(t)?S.True:S.False}function Sr(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function R1(e){return nd(e)}function L1(e){return Sr(e,0)||Sr(e,1)&&"description"in e.properties&&wo(e.properties.description)&&e.properties.description.anyOf.length===2&&(Fn(e.properties.description.anyOf[0])&&Pi(e.properties.description.anyOf[1])||Fn(e.properties.description.anyOf[1])&&Pi(e.properties.description.anyOf[0]))}function lf(e){return Sr(e,0)}function j1(e){return Sr(e,0)}function I9(e){return Sr(e,0)}function O9(e){return Sr(e,0)}function B9(e){return nd(e)}function R9(e){const t=Yi();return Sr(e,0)||Sr(e,1)&&"length"in e.properties&&cn(Ie(e.properties.length,t))===S.True}function L9(e){return Sr(e,0)}function nd(e){const t=Yi();return Sr(e,0)||Sr(e,1)&&"length"in e.properties&&cn(Ie(e.properties.length,t))===S.True}function j9(e){const t=ju([gu()],gu());return Sr(e,0)||Sr(e,1)&&"then"in e.properties&&cn(Ie(e.properties.then,t))===S.True}function Xw(e,t){return Ie(e,t)===S.False||oc(e)&&!oc(t)?S.False:S.True}function cr(e,t){return Mn(e)?S.False:Cn(e)?S.Union:oi(e)||Dw(e)&&R1(t)||Aw(e)&&lf(t)||Ew(e)&&j1(t)||hu(e)&&L1(t)||Kc(e)&&I9(t)||Fn(e)&&R1(t)||hu(e)&&L1(t)||Cr(e)&&lf(t)||xo(e)&&lf(t)||Zi(e)&&j1(t)||Lu(e)&&B9(t)||Hc(e)&&O9(t)||Gc(e)&&L9(t)||Zc(e)&&R9(t)?S.True:Qt(e)&&Fn(P0(e))?t[_c]==="Record"?S.True:S.False:Qt(e)&&Cr(P0(e))&&Sr(t,0)?S.True:S.False}function _9(e,t){return Ft(t)?Mt(e,t):Qt(t)?fn(e,t):ut(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!oc(t.properties[r]))return S.False;if(oc(t.properties[r]))return S.True;if(Xw(e.properties[r],t.properties[r])===S.False)return S.False}return S.True})():S.False}function U9(e,t){return Ft(t)?Mt(e,t):ut(t)&&j9(t)?S.True:fm(t)?cn(Ie(e.item,t.item)):S.False}function P0(e){return Ls in e.patternProperties?Yi():js in e.patternProperties?Ii():ua("Unknown record key pattern")}function I0(e){return Ls in e.patternProperties?e.patternProperties[Ls]:js in e.patternProperties?e.patternProperties[js]:ua("Unable to get record value schema")}function fn(e,t){const[r,n]=[P0(t),I0(t)];return Dw(e)&&Cr(r)&&cn(Ie(e,n))===S.True?S.True:Lu(e)&&Cr(r)||Fn(e)&&Cr(r)||Hi(e)&&Cr(r)?Ie(e,n):ut(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(Xw(n,e.properties[o])===S.False)return S.False;return S.True})():S.False}function z9(e,t){return Ft(t)?Mt(e,t):ut(t)?cr(e,t):Qt(t)?Ie(I0(e),I0(t)):S.False}function V9(e,t){const r=fu(e)?Ii():e,n=fu(t)?Ii():t;return Ie(r,n)}function Qw(e,t){return ni(e)&&yt(e.const)||Fn(e)?S.True:S.False}function q9(e,t){return Ft(t)?Mt(e,t):ut(t)?cr(e,t):Qt(t)?fn(e,t):Fn(t)?S.True:S.False}function W9(e,t){return Ft(t)?Mt(e,t):ut(t)?cr(e,t):Qt(t)?fn(e,t):hu(t)?S.True:S.False}function K9(e,t){return mu(e)?Ie(ic(e),t):mu(t)?Ie(e,ic(t)):ua("Invalid fallthrough for TemplateLiteral")}function G9(e,t){return Hi(t)&&e.items!==void 0&&e.items.every(r=>Ie(r,t.items)===S.True)}function H9(e,t){return oi(e)?S.True:Mn(e)?S.False:Cn(e)?S.Union:S.False}function Z9(e,t){return Ft(t)?Mt(e,t):ut(t)&&nd(t)||Hi(t)&&G9(e,t)?S.True:Jc(t)?xt(e.items)&&!xt(t.items)||!xt(e.items)&&xt(t.items)?S.False:xt(e.items)&&!xt(t.items)||e.items.every((r,n)=>Ie(r,t.items[n])===S.True)?S.True:S.False:S.False}function J9(e,t){return Ft(t)?Mt(e,t):ut(t)?cr(e,t):Qt(t)?fn(e,t):Lu(t)?S.True:S.False}function Y9(e,t){return Ft(t)?Mt(e,t):ut(t)?cr(e,t):Qt(t)?fn(e,t):Yc(t)?eC(e):Pi(t)?S.True:S.False}function Mm(e,t){return t.anyOf.some(r=>Ie(e,r)===S.True)?S.True:S.False}function X9(e,t){return e.anyOf.every(r=>Ie(r,t)===S.True)?S.True:S.False}function e5(e,t){return S.True}function Q9(e,t){return oi(t)?Jw():Ji(t)?rd(e,t):wo(t)?Mm(e,t):Cn(t)?Fm():Fn(t)?Qw(e):Cr(t)?Yw(e):xo(t)?Zw(e):Zi(t)?Hw(e):Hi(t)?y9(e):Jc(t)?H9(e):ut(t)?cr(e,t):Mn(t)?S.True:S.False}function eC(e,t){return Pi(e)||Pi(e)?S.True:S.False}function tC(e,t){return Ji(t)?rd(e,t):wo(t)?Mm(e,t):Mn(t)?e5():Cn(t)?Fm():ut(t)?cr(e,t):Yc(t)?S.True:S.False}function Ie(e,t){return mu(e)||mu(t)?K9(e,t):fu(e)||fu(t)?V9(e,t):Rs(e)||Rs(t)?T9(e,t):Cn(e)?b9(e,t):Hi(e)?v9(e,t):Kc(e)?$9(e,t):Zi(e)?k9(e,t):lm(e)?w9(e,t):Gc(e)?x9(e,t):Hc(e)?D9(e,t):Zc(e)?A9(e,t):xo(e)?E9(e,t):Ji(e)?C9(e,t):cm(e)?F9(e,t):ni(e)?M9(e,t):oi(e)?S9():dm(e)?N9(e,t):Cr(e)?P9(e,t):ut(e)?_9(e,t):Qt(e)?z9(e,t):Fn(e)?q9(e,t):hu(e)?W9(e,t):Jc(e)?Z9(e,t):fm(e)?U9(e,t):Lu(e)?J9(e,t):Pi(e)?Y9(e,t):wo(e)?X9(e,t):Mn(e)?Q9(e,t):Yc(e)?tC(e,t):ua(`Unknown left type operand '${e[R]}'`)}function _u(e,t){return Ie(e,t)}function rC(e,t,r,n,o){const i={};for(const s of globalThis.Object.getOwnPropertyNames(e))i[s]=Sm(e[s],t,r,n,Wr(o));return i}function nC(e,t,r,n,o){return rC(e.properties,t,r,n,o)}function oC(e,t,r,n,o){const i=nC(e,t,r,n,o);return rr(i)}function iC(e,t,r,n){const o=_u(e,t);return o===S.Union?nr([r,n]):o===S.True?r:n}function Sm(e,t,r,n,o){return Jr(e)?oC(e,t,r,n,o):Wi(e)?L(lC(e,t,r,n,o)):L(iC(e,t,r,n),o)}function sC(e,t,r,n,o){return{[e]:Sm(At(e),t,r,n,Wr(o))}}function aC(e,t,r,n,o){return e.reduce((i,s)=>({...i,...sC(s,t,r,n,o)}),{})}function uC(e,t,r,n,o){return aC(e.keys,t,r,n,o)}function lC(e,t,r,n,o){const i=uC(e,t,r,n,o);return rr(i)}function cC(e){return e.allOf.every(t=>la(t))}function dC(e){return e.anyOf.some(t=>la(t))}function fC(e){return!la(e.not)}function la(e){return e[R]==="Intersect"?cC(e):e[R]==="Union"?dC(e):e[R]==="Not"?fC(e):e[R]==="Undefined"}function hC(e,t){return Tm(ic(e),t)}function mC(e,t){const r=e.filter(n=>_u(n,t)===S.False);return r.length===1?r[0]:nr(r)}function Tm(e,t,r={}){return Ki(e)?L(hC(e,t),r):Jr(e)?L(bC(e,t),r):L(Kt(e)?mC(e.anyOf,t):_u(e,t)!==S.False?lt():e,r)}function gC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Tm(e[n],t);return r}function pC(e,t){return gC(e.properties,t)}function bC(e,t){const r=pC(e,t);return rr(r)}function yC(e,t){return Nm(ic(e),t)}function vC(e,t){const r=e.filter(n=>_u(n,t)!==S.False);return r.length===1?r[0]:nr(r)}function Nm(e,t,r){return Ki(e)?L(yC(e,t),r):Jr(e)?L(kC(e,t),r):L(Kt(e)?vC(e.anyOf,t):_u(e,t)!==S.False?e:lt(),r)}function wC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Nm(e[n],t);return r}function $C(e,t){return wC(e.properties,t)}function kC(e,t){const r=$C(e,t);return rr(r)}function xC(e,t){return ta(e)?L(e.returns,t):lt(t)}function t5(e){return si(ai(e))}function Qi(e,t,r){return L({[R]:"Record",type:"object",patternProperties:{[e]:t}},r)}function Pm(e,t,r){const n={};for(const o of e)n[o]=t;return Wt(n,{...r,[_c]:"Record"})}function DC(e,t,r){return WA(e)?Pm(ii(e),t,r):Qi(e.pattern,t,r)}function AC(e,t,r){return Pm(ii(nr(e)),t,r)}function EC(e,t,r){return Pm([e.toString()],t,r)}function CC(e,t,r){return Qi(e.source,t,r)}function FC(e,t,r){const n=xt(e.pattern)?js:e.pattern;return Qi(n,t,r)}function MC(e,t,r){return Qi(js,t,r)}function SC(e,t,r){return Qi(kA,t,r)}function TC(e,t,r){return Wt({true:t,false:t},r)}function NC(e,t,r){return Qi(Ls,t,r)}function PC(e,t,r){return Qi(Ls,t,r)}function r5(e,t,r={}){return Kt(e)?AC(e.anyOf,t,r):Ki(e)?DC(e,t,r):qi(e)?EC(e.const,t,r):Iu(e)?TC(e,t,r):na(e)?NC(e,t,r):oa(e)?PC(e,t,r):vw(e)?CC(e,t,r):Bu(e)?FC(e,t,r):pw(e)?MC(e,t,r):Ou(e)?SC(e,t,r):lt(r)}function Im(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function IC(e){const t=Im(e);return t===js?Ii():t===Ls?Yi():Ii({pattern:t})}function n5(e){return e.patternProperties[Im(e)]}function OC(e,t){return t.parameters=Uu(e,t.parameters),t.returns=Sn(e,t.returns),t}function BC(e,t){return t.parameters=Uu(e,t.parameters),t.returns=Sn(e,t.returns),t}function RC(e,t){return t.allOf=Uu(e,t.allOf),t}function LC(e,t){return t.anyOf=Uu(e,t.anyOf),t}function jC(e,t){return xt(t.items)||(t.items=Uu(e,t.items)),t}function _C(e,t){return t.items=Sn(e,t.items),t}function UC(e,t){return t.items=Sn(e,t.items),t}function zC(e,t){return t.items=Sn(e,t.items),t}function VC(e,t){return t.item=Sn(e,t.item),t}function qC(e,t){const r=HC(e,t.properties);return{...t,...Wt(r)}}function WC(e,t){const r=Sn(e,IC(t)),n=Sn(e,n5(t)),o=r5(r,n);return{...t,...o}}function KC(e,t){return t.index in e?e[t.index]:td()}function GC(e,t){const r=om(t),n=ri(t),o=Sn(e,t);return r&&n?t5(o):r&&!n?si(o):!r&&n?ai(o):o}function HC(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:GC(e,t[n])}),{})}function Uu(e,t){return t.map(r=>Sn(e,r))}function Sn(e,t){return ta(t)?OC(e,t):ra(t)?BC(e,t):dn(t)?RC(e,t):Kt(t)?LC(e,t):Gi(t)?jC(e,t):Qs(t)?_C(e,t):Uc(t)?UC(e,t):Vc(t)?zC(e,t):qc(t)?VC(e,t):Pn(t)?qC(e,t):Wc(t)?WC(e,t):bw(t)?KC(e,t):t}function ZC(e,t){return Sn(t,tm(e))}function JC(e){return L({[R]:"Integer",type:"integer"},e)}function YC(e,t,r){return{[e]:ca(At(e),t,Wr(r))}}function XC(e,t,r){return e.reduce((o,i)=>({...o,...YC(i,t,r)}),{})}function QC(e,t,r){return XC(e.keys,t,r)}function e7(e,t,r){const n=QC(e,t,r);return rr(n)}function t7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function r7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function n7(e){return e.toUpperCase()}function o7(e){return e.toLowerCase()}function i7(e,t,r){const n=km(e.pattern);if(!bu(n))return{...e,pattern:o5(e.pattern,t)};const s=[...Xc(n)].map(l=>At(l)),a=i5(s,t),u=nr(a);return Iw([u],r)}function o5(e,t){return typeof e=="string"?t==="Uncapitalize"?t7(e):t==="Capitalize"?r7(e):t==="Uppercase"?n7(e):t==="Lowercase"?o7(e):e:e.toString()}function i5(e,t){return e.map(r=>ca(r,t))}function ca(e,t,r={}){return Wi(e)?e7(e,t,r):Ki(e)?i7(e,t,r):Kt(e)?nr(i5(e.anyOf,t),r):qi(e)?At(o5(e.const,t),r):L(e,r)}function s7(e,t={}){return ca(e,"Capitalize",t)}function a7(e,t={}){return ca(e,"Lowercase",t)}function u7(e,t={}){return ca(e,"Uncapitalize",t)}function l7(e,t={}){return ca(e,"Uppercase",t)}function c7(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=od(e[o],t,Wr(r));return n}function d7(e,t,r){return c7(e.properties,t,r)}function f7(e,t,r){const n=d7(e,t,r);return rr(n)}function h7(e,t){return e.map(r=>Om(r,t))}function m7(e,t){return e.map(r=>Om(r,t))}function g7(e,t){const{[t]:r,...n}=e;return n}function p7(e,t){return t.reduce((r,n)=>g7(r,n),e)}function b7(e,t,r){const n=Gr(e,[Er,"$id","required","properties"]),o=p7(r,t);return Wt(o,n)}function y7(e){const t=e.reduce((r,n)=>yw(n)?[...r,At(n)]:r,[]);return nr(t)}function Om(e,t){return dn(e)?ui(h7(e.allOf,t)):Kt(e)?nr(m7(e.anyOf,t)):Pn(e)?b7(e,t,e.properties):Wt({})}function od(e,t,r){const n=Tr(t)?y7(t):t,o=br(t)?ii(t):t,i=Mr(e),s=Mr(t);return Jr(e)?f7(e,o,r):Wi(t)?k7(e,t,r):i&&s?Pt("Omit",[e,n],r):!i&&s?Pt("Omit",[e,n],r):i&&!s?Pt("Omit",[e,n],r):L({...Om(e,o),...r})}function v7(e,t,r){return{[t]:od(e,[t],Wr(r))}}function w7(e,t,r){return t.reduce((n,o)=>({...n,...v7(e,o,r)}),{})}function $7(e,t,r){return w7(e,t.keys,r)}function k7(e,t,r){const n=$7(e,t,r);return rr(n)}function x7(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=id(e[o],t,Wr(r));return n}function D7(e,t,r){return x7(e.properties,t,r)}function A7(e,t,r){const n=D7(e,t,r);return rr(n)}function E7(e,t){return e.map(r=>Bm(r,t))}function C7(e,t){return e.map(r=>Bm(r,t))}function F7(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function M7(e,t,r){const n=Gr(e,[Er,"$id","required","properties"]),o=F7(r,t);return Wt(o,n)}function S7(e){const t=e.reduce((r,n)=>yw(n)?[...r,At(n)]:r,[]);return nr(t)}function Bm(e,t){return dn(e)?ui(E7(e.allOf,t)):Kt(e)?nr(C7(e.anyOf,t)):Pn(e)?M7(e,t,e.properties):Wt({})}function id(e,t,r){const n=Tr(t)?S7(t):t,o=br(t)?ii(t):t,i=Mr(e),s=Mr(t);return Jr(e)?A7(e,o,r):Wi(t)?I7(e,t,r):i&&s?Pt("Pick",[e,n],r):!i&&s?Pt("Pick",[e,n],r):i&&!s?Pt("Pick",[e,n],r):L({...Bm(e,o),...r})}function T7(e,t,r){return{[t]:id(e,[t],Wr(r))}}function N7(e,t,r){return t.reduce((n,o)=>({...n,...T7(e,o,r)}),{})}function P7(e,t,r){return N7(e,t.keys,r)}function I7(e,t,r){const n=P7(e,t,r);return rr(n)}function O7(e,t){return Pt("Partial",[Pt(e,t)])}function B7(e){return Pt("Partial",[aa(e)])}function R7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=ai(e[r]);return t}function L7(e,t){const r=Gr(e,[Er,"$id","required","properties"]),n=R7(t);return Wt(n,r)}function _1(e){return e.map(t=>s5(t))}function s5(e){return ea(e)?O7(e.target,e.parameters):Mr(e)?B7(e.$ref):dn(e)?ui(_1(e.allOf)):Kt(e)?nr(_1(e.anyOf)):Pn(e)?L7(e,e.properties):zc(e)||Iu(e)||na(e)||qi(e)||im(e)||oa(e)||Bu(e)||sm(e)||Ru(e)?e:Wt({})}function Rm(e,t){return Jr(e)?U7(e,t):L({...s5(e),...t})}function j7(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Rm(e[n],Wr(t));return r}function _7(e,t){return j7(e.properties,t)}function U7(e,t){const r=_7(e,t);return rr(r)}function z7(e,t){return Pt("Required",[Pt(e,t)])}function V7(e){return Pt("Required",[aa(e)])}function q7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Gr(e[r],[ko]);return t}function W7(e,t){const r=Gr(e,[Er,"$id","required","properties"]),n=q7(t);return Wt(n,r)}function U1(e){return e.map(t=>a5(t))}function a5(e){return ea(e)?z7(e.target,e.parameters):Mr(e)?V7(e.$ref):dn(e)?ui(U1(e.allOf)):Kt(e)?nr(U1(e.anyOf)):Pn(e)?W7(e,e.properties):zc(e)||Iu(e)||na(e)||qi(e)||im(e)||oa(e)||Bu(e)||sm(e)||Ru(e)?e:Wt({})}function Lm(e,t){return Jr(e)?H7(e,t):L({...a5(e),...t})}function K7(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Lm(e[n],t);return r}function G7(e,t){return K7(e.properties,t)}function H7(e,t){const r=G7(e,t);return rr(r)}function Z7(e,t){return t.map(r=>Mr(r)?jm(e,r.$ref):Hr(e,r))}function jm(e,t){return t in e?Mr(e[t])?jm(e,e[t].$ref):Hr(e,e[t]):lt()}function J7(e){return ed(e[0])}function Y7(e){return Qc(e[0],e[1])}function X7(e){return Em(e[0])}function Q7(e){return Rm(e[0])}function eF(e){return od(e[0],e[1])}function tF(e){return id(e[0],e[1])}function rF(e){return Lm(e[0])}function nF(e,t,r){const n=Z7(e,r);return t==="Awaited"?J7(n):t==="Index"?Y7(n):t==="KeyOf"?X7(n):t==="Partial"?Q7(n):t==="Omit"?eF(n):t==="Pick"?tF(n):t==="Required"?rF(n):lt()}function oF(e,t){return ym(Hr(e,t))}function iF(e,t){return vm(Hr(e,t))}function sF(e,t,r){return wm(zu(e,t),Hr(e,r))}function aF(e,t,r){return ju(zu(e,t),Hr(e,r))}function uF(e,t){return ui(zu(e,t))}function lF(e,t){return Am(Hr(e,t))}function cF(e,t){return Wt(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:Hr(e,t[n])}),{}))}function dF(e,t){const[r,n]=[Hr(e,n5(t)),Im(t)],o=tm(t);return o.patternProperties[n]=r,o}function fF(e,t){return Mr(t)?{...jm(e,t.$ref),[Er]:t[Er]}:t}function hF(e,t){return sa(zu(e,t))}function mF(e,t){return nr(zu(e,t))}function zu(e,t){return t.map(r=>Hr(e,r))}function Hr(e,t){return ri(t)?L(Hr(e,Gr(t,[ko])),t):om(t)?L(Hr(e,Gr(t,[Pu])),t):Ke(t)?L(fF(e,t),t):Qs(t)?L(oF(e,t.items),t):Uc(t)?L(iF(e,t.items),t):ea(t)?L(nF(e,t.target,t.parameters)):ta(t)?L(sF(e,t.parameters,t.returns),t):ra(t)?L(aF(e,t.parameters,t.returns),t):dn(t)?L(uF(e,t.allOf),t):Vc(t)?L(lF(e,t.items),t):Pn(t)?L(cF(e,t.properties),t):Wc(t)?L(dF(e,t)):Gi(t)?L(hF(e,t.items||[]),t):Kt(t)?L(mF(e,t.anyOf),t):t}function gF(e,t){return t in e?Hr(e,e[t]):lt()}function pF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:gF(e,r)}),{})}class bF{constructor(t){const r=pF(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:L(this.$defs[t],r)};return L({[R]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function yF(e){return new bF(e)}function vF(e,t){return L({[R]:"Not",not:e},t)}function wF(e,t){return ra(e)?sa(e.parameters,t):lt()}let $F=0;function kF(e,t={}){xt(t.$id)&&(t.$id=`T${$F++}`);const r=tm(e({[R]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,L({[_c]:"Recursive",...r},t)}function xF(e,t){const r=yt(e)?new globalThis.RegExp(e):e;return L({[R]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function DF(e){return dn(e)?e.allOf:Kt(e)?e.anyOf:Gi(e)?e.items??[]:[]}function AF(e){return DF(e)}function EF(e,t){return ra(e)?L(e.returns,t):lt(t)}class CF{constructor(t){this.schema=t}Decode(t){return new FF(this.schema,t)}}class FF{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const i={Encode:s=>r[Er].Encode(t(s)),Decode:s=>this.decode(r[Er].Decode(s))};return{...r,[Er]:i}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[Er]:n}}Encode(t){return Ke(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function MF(e){return new CF(e)}function SF(e={}){return L({[R]:e[R]??"Unsafe"},e)}function TF(e){return L({[R]:"Void",type:"void"},e)}const NF=Object.freeze(Object.defineProperty({__proto__:null,Any:gu,Argument:MA,Array:ym,AsyncIterator:vm,Awaited:ed,BigInt:xm,Boolean:Nw,Capitalize:s7,Composite:c9,Const:h9,Constructor:wm,ConstructorParameters:m9,Date:Vw,Enum:g9,Exclude:Tm,Extends:Sm,Extract:Nm,Function:ju,Index:Qc,InstanceType:xC,Instantiate:ZC,Integer:JC,Intersect:ui,Iterator:Am,KeyOf:Em,Literal:At,Lowercase:a7,Mapped:NE,Module:yF,Never:lt,Not:vF,Null:qw,Number:Yi,Object:Wt,Omit:od,Optional:ai,Parameters:wF,Partial:Rm,Pick:id,Promise:Rw,Readonly:si,ReadonlyOptional:t5,Record:r5,Recursive:kF,Ref:aa,RegExp:xF,Required:Lm,Rest:AF,ReturnType:EF,String:Ii,Symbol:Ww,TemplateLiteral:Iw,Transform:MF,Tuple:sa,Uint8Array:Gw,Uncapitalize:u7,Undefined:Kw,Union:nr,Unknown:td,Unsafe:SF,Uppercase:l7,Void:TF},Symbol.toStringTag,{value:"Module"})),Ve=NF;function u5(e){switch(e.errorType){case C.ArrayContains:return"Expected array to contain at least one matching value";case C.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case C.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case C.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case C.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case C.ArrayUniqueItems:return"Expected array elements to be unique";case C.Array:return"Expected array";case C.AsyncIterator:return"Expected AsyncIterator";case C.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case C.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case C.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case C.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case C.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case C.BigInt:return"Expected bigint";case C.Boolean:return"Expected boolean";case C.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case C.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case C.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case C.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case C.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case C.Date:return"Expected Date";case C.Function:return"Expected function";case C.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case C.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case C.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case C.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case C.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case C.Integer:return"Expected integer";case C.IntersectUnevaluatedProperties:return"Unexpected property";case C.Intersect:return"Expected all values to match";case C.Iterator:return"Expected Iterator";case C.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case C.Never:return"Never";case C.Not:return"Value should not match";case C.Null:return"Expected null";case C.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case C.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case C.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case C.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case C.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case C.Number:return"Expected number";case C.Object:return"Expected object";case C.ObjectAdditionalProperties:return"Unexpected property";case C.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case C.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case C.ObjectRequiredProperty:return"Expected required property";case C.Promise:return"Expected Promise";case C.RegExp:return"Expected string to match regular expression";case C.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case C.StringFormat:return`Expected string to match '${e.schema.format}' format`;case C.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case C.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case C.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case C.String:return"Expected string";case C.Symbol:return"Expected symbol";case C.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case C.Tuple:return"Expected tuple";case C.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case C.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case C.Uint8Array:return"Expected Uint8Array";case C.Undefined:return"Expected undefined";case C.Union:return"Expected union value";case C.Void:return"Expected void";case C.Kind:return`Expected kind '${e.schema[R]}'`;default:return"Unknown error type"}}let l5=u5;function PF(e){l5=e}function IF(){return l5}class OF extends tr{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function BF(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new OF(e);return hn(r,t)}function sd(e,t){return!Ur(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function hn(e,t){return e[R]==="This"||e[R]==="Ref"?BF(e,t):e}class RF extends tr{constructor(t){super("Unable to hash value"),this.value=t}}var Zr;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(Zr||(Zr={}));let gs=BigInt("14695981039346656037");const[LF,jF]=[BigInt("1099511628211"),BigInt("18446744073709551616")],_F=Array.from({length:256}).map((e,t)=>BigInt(t)),c5=new Float64Array(1),d5=new DataView(c5.buffer),f5=new Uint8Array(c5.buffer);function*UF(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function zF(e){ur(Zr.Array);for(const t of e)zs(t)}function VF(e){ur(Zr.Boolean),ur(e?1:0)}function qF(e){ur(Zr.BigInt),d5.setBigInt64(0,e);for(const t of f5)ur(t)}function WF(e){ur(Zr.Date),zs(e.getTime())}function KF(e){ur(Zr.Null)}function GF(e){ur(Zr.Number),d5.setFloat64(0,e);for(const t of f5)ur(t)}function HF(e){ur(Zr.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())zs(t),zs(e[t])}function ZF(e){ur(Zr.String);for(let t=0;t<e.length;t++)for(const r of UF(e.charCodeAt(t)))ur(r)}function JF(e){ur(Zr.Symbol),zs(e.description)}function YF(e){ur(Zr.Uint8Array);for(let t=0;t<e.length;t++)ur(e[t])}function XF(e){return ur(Zr.Undefined)}function zs(e){if(Kr(e))return zF(e);if(Lc(e))return VF(e);if(ao(e))return qF(e);if(rm(e))return WF(e);if(Rc(e))return KF();if(ue(e))return GF(e);if(Gn(e))return HF(e);if(Ur(e))return ZF(e);if(jc(e))return JF(e);if(nm(e))return YF(e);if(ti(e))return XF();throw new RF(e)}function ur(e){gs=gs^_F[e],gs=gs*LF%jF}function _m(e){return gs=BigInt("14695981039346656037"),zs(e),gs}class QF extends tr{constructor(t){super("Unknown type"),this.schema=t}}function eM(e){return e[R]==="Any"||e[R]==="Unknown"}function ge(e){return e!==void 0}function tM(e,t,r){return!0}function rM(e,t,r){return!0}function nM(e,t,r){if(!Kr(r)||ge(e.minItems)&&!(r.length>=e.minItems)||ge(e.maxItems)&&!(r.length<=e.maxItems))return!1;for(const i of r)if(!zt(e.items,t,i))return!1;if(e.uniqueItems===!0&&!(function(){const i=new Set;for(const s of r){const a=_m(s);if(i.has(a))return!1;i.add(a)}return!0})())return!1;if(!(ge(e.contains)||ue(e.minContains)||ue(e.maxContains)))return!0;const n=ge(e.contains)?e.contains:lt(),o=r.reduce((i,s)=>zt(n,t,s)?i+1:i,0);return!(o===0||ue(e.minContains)&&o<e.minContains||ue(e.maxContains)&&o>e.maxContains)}function oM(e,t,r){return lw(r)}function iM(e,t,r){return!(!ao(r)||ge(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ge(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ge(e.maximum)&&!(r<=e.maximum)||ge(e.minimum)&&!(r>=e.minimum)||ge(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function sM(e,t,r){return Lc(r)}function aM(e,t,r){return zt(e.returns,t,r.prototype)}function uM(e,t,r){return!(!rm(r)||ge(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||ge(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||ge(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||ge(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||ge(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function lM(e,t,r){return mw(r)}function cM(e,t,r){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return zt(o,[...t,...n],r)}function dM(e,t,r){return!(!hw(r)||ge(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ge(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ge(e.maximum)&&!(r<=e.maximum)||ge(e.minimum)&&!(r>=e.minimum)||ge(e.multipleOf)&&r%e.multipleOf!==0)}function fM(e,t,r){const n=e.allOf.every(o=>zt(o,t,r));if(e.unevaluatedProperties===!1){const o=new RegExp(Us(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s));return n&&i}else if(br(e.unevaluatedProperties)){const o=new RegExp(Us(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s)||zt(e.unevaluatedProperties,t,r[s]));return n&&i}else return n}function hM(e,t,r){return cw(r)}function mM(e,t,r){return r===e.const}function gM(e,t,r){return!1}function pM(e,t,r){return!zt(e.not,t,r)}function bM(e,t,r){return Rc(r)}function yM(e,t,r){return!(!bt.IsNumberLike(r)||ge(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ge(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ge(e.minimum)&&!(r>=e.minimum)||ge(e.maximum)&&!(r<=e.maximum)||ge(e.multipleOf)&&r%e.multipleOf!==0)}function vM(e,t,r){if(!bt.IsObjectLike(r)||ge(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||ge(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const i=e.properties[o];if(e.required&&e.required.includes(o)){if(!zt(i,t,r[o])||(la(i)||eM(i))&&!(o in r))return!1}else if(bt.IsExactOptionalProperty(r,o)&&!zt(i,t,r[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(i=>n.includes(i))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(i=>n.includes(i)||zt(e.additionalProperties,t,r[i])):!0}function wM(e,t,r){return dw(r)}function $M(e,t,r){if(!bt.IsRecordLike(r)||ge(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||ge(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],i=new RegExp(n),s=Object.entries(r).every(([l,c])=>i.test(l)?zt(o,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([l,c])=>i.test(l)?!0:zt(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(l=>i.test(l)):!0;return s&&a&&u}function kM(e,t,r){return zt(hn(e,t),t,r)}function xM(e,t,r){const n=new RegExp(e.source,e.flags);return ge(e.minLength)&&!(r.length>=e.minLength)||ge(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function DM(e,t,r){return!Ur(r)||ge(e.minLength)&&!(r.length>=e.minLength)||ge(e.maxLength)&&!(r.length<=e.maxLength)||ge(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:ge(e.format)?hm(e.format)?mm(e.format)(r):!1:!0}function AM(e,t,r){return jc(r)}function EM(e,t,r){return Ur(r)&&new RegExp(e.pattern).test(r)}function CM(e,t,r){return zt(hn(e,t),t,r)}function FM(e,t,r){if(!Kr(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!zt(e.items[n],t,r[n]))return!1;return!0}function MM(e,t,r){return ti(r)}function SM(e,t,r){return e.anyOf.some(n=>zt(n,t,r))}function TM(e,t,r){return!(!nm(r)||ge(e.maxByteLength)&&!(r.length<=e.maxByteLength)||ge(e.minByteLength)&&!(r.length>=e.minByteLength))}function NM(e,t,r){return!0}function PM(e,t,r){return bt.IsVoidLike(r)}function IM(e,t,r){return Jo(e[R])?bm(e[R])(e,r):!1}function zt(e,t,r){const n=ge(e.$id)?sd(e,t):t,o=e;switch(o[R]){case"Any":return tM();case"Argument":return rM();case"Array":return nM(o,n,r);case"AsyncIterator":return oM(o,n,r);case"BigInt":return iM(o,n,r);case"Boolean":return sM(o,n,r);case"Constructor":return aM(o,n,r);case"Date":return uM(o,n,r);case"Function":return lM(o,n,r);case"Import":return cM(o,n,r);case"Integer":return dM(o,n,r);case"Intersect":return fM(o,n,r);case"Iterator":return hM(o,n,r);case"Literal":return mM(o,n,r);case"Never":return gM();case"Not":return pM(o,n,r);case"Null":return bM(o,n,r);case"Number":return yM(o,n,r);case"Object":return vM(o,n,r);case"Promise":return wM(o,n,r);case"Record":return $M(o,n,r);case"Ref":return kM(o,n,r);case"RegExp":return xM(o,n,r);case"String":return DM(o,n,r);case"Symbol":return AM(o,n,r);case"TemplateLiteral":return EM(o,n,r);case"This":return CM(o,n,r);case"Tuple":return FM(o,n,r);case"Undefined":return MM(o,n,r);case"Union":return SM(o,n,r);case"Uint8Array":return TM(o,n,r);case"Unknown":return NM();case"Void":return PM(o,n,r);default:if(!Jo(o[R]))throw new QF(o);return IM(o,n,r)}}function sc(...e){return e.length===3?zt(e[0],e[1],e[2]):zt(e[0],[],e[1])}var C;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(C||(C={}));class OM extends tr{constructor(t){super("Unknown type"),this.schema=t}}function oo(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function me(e){return e!==void 0}class h5{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function U(e,t,r,n,o=[]){return{type:e,schema:t,path:r,value:n,message:IF()({errorType:e,path:r,schema:t,value:n,errors:o}),errors:o}}function*BM(e,t,r,n){}function*RM(e,t,r,n){}function*LM(e,t,r,n){if(!Kr(n))return yield U(C.Array,e,r,n);me(e.minItems)&&!(n.length>=e.minItems)&&(yield U(C.ArrayMinItems,e,r,n)),me(e.maxItems)&&!(n.length<=e.maxItems)&&(yield U(C.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*Vt(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const u=_m(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield U(C.ArrayUniqueItems,e,r,n)),!(me(e.contains)||me(e.minContains)||me(e.maxContains)))return;const o=me(e.contains)?e.contains:lt(),i=n.reduce((s,a,u)=>Vt(o,t,`${r}${u}`,a).next().done===!0?s+1:s,0);i===0&&(yield U(C.ArrayContains,e,r,n)),ue(e.minContains)&&i<e.minContains&&(yield U(C.ArrayMinContains,e,r,n)),ue(e.maxContains)&&i>e.maxContains&&(yield U(C.ArrayMaxContains,e,r,n))}function*jM(e,t,r,n){lw(n)||(yield U(C.AsyncIterator,e,r,n))}function*_M(e,t,r,n){if(!ao(n))return yield U(C.BigInt,e,r,n);me(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield U(C.BigIntExclusiveMaximum,e,r,n)),me(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield U(C.BigIntExclusiveMinimum,e,r,n)),me(e.maximum)&&!(n<=e.maximum)&&(yield U(C.BigIntMaximum,e,r,n)),me(e.minimum)&&!(n>=e.minimum)&&(yield U(C.BigIntMinimum,e,r,n)),me(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield U(C.BigIntMultipleOf,e,r,n))}function*UM(e,t,r,n){Lc(n)||(yield U(C.Boolean,e,r,n))}function*zM(e,t,r,n){yield*Vt(e.returns,t,r,n.prototype)}function*VM(e,t,r,n){if(!rm(n))return yield U(C.Date,e,r,n);me(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield U(C.DateExclusiveMaximumTimestamp,e,r,n)),me(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield U(C.DateExclusiveMinimumTimestamp,e,r,n)),me(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield U(C.DateMaximumTimestamp,e,r,n)),me(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield U(C.DateMinimumTimestamp,e,r,n)),me(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield U(C.DateMultipleOfTimestamp,e,r,n))}function*qM(e,t,r,n){mw(n)||(yield U(C.Function,e,r,n))}function*WM(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];yield*Vt(i,[...t,...o],r,n)}function*KM(e,t,r,n){if(!hw(n))return yield U(C.Integer,e,r,n);me(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield U(C.IntegerExclusiveMaximum,e,r,n)),me(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield U(C.IntegerExclusiveMinimum,e,r,n)),me(e.maximum)&&!(n<=e.maximum)&&(yield U(C.IntegerMaximum,e,r,n)),me(e.minimum)&&!(n>=e.minimum)&&(yield U(C.IntegerMinimum,e,r,n)),me(e.multipleOf)&&n%e.multipleOf!==0&&(yield U(C.IntegerMultipleOf,e,r,n))}function*GM(e,t,r,n){let o=!1;for(const i of e.allOf)for(const s of Vt(i,t,r,n))o=!0,yield s;if(o)return yield U(C.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const i=new RegExp(Us(e));for(const s of Object.getOwnPropertyNames(n))i.test(s)||(yield U(C.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const i=new RegExp(Us(e));for(const s of Object.getOwnPropertyNames(n))if(!i.test(s)){const a=Vt(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*HM(e,t,r,n){cw(n)||(yield U(C.Iterator,e,r,n))}function*ZM(e,t,r,n){n!==e.const&&(yield U(C.Literal,e,r,n))}function*JM(e,t,r,n){yield U(C.Never,e,r,n)}function*YM(e,t,r,n){Vt(e.not,t,r,n).next().done===!0&&(yield U(C.Not,e,r,n))}function*XM(e,t,r,n){Rc(n)||(yield U(C.Null,e,r,n))}function*QM(e,t,r,n){if(!bt.IsNumberLike(n))return yield U(C.Number,e,r,n);me(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield U(C.NumberExclusiveMaximum,e,r,n)),me(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield U(C.NumberExclusiveMinimum,e,r,n)),me(e.maximum)&&!(n<=e.maximum)&&(yield U(C.NumberMaximum,e,r,n)),me(e.minimum)&&!(n>=e.minimum)&&(yield U(C.NumberMinimum,e,r,n)),me(e.multipleOf)&&n%e.multipleOf!==0&&(yield U(C.NumberMultipleOf,e,r,n))}function*eS(e,t,r,n){if(!bt.IsObjectLike(n))return yield U(C.Object,e,r,n);me(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield U(C.ObjectMinProperties,e,r,n)),me(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield U(C.ObjectMaxProperties,e,r,n));const o=Array.isArray(e.required)?e.required:[],i=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of o)s.includes(a)||(yield U(C.ObjectRequiredProperty,e.properties[a],`${r}/${oo(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)i.includes(a)||(yield U(C.ObjectAdditionalProperties,e,`${r}/${oo(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)i.includes(a)||(yield*Vt(e.additionalProperties,t,`${r}/${oo(a)}`,n[a]));for(const a of i){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*Vt(u,t,`${r}/${oo(a)}`,n[a]),la(e)&&!(a in n)&&(yield U(C.ObjectRequiredProperty,u,`${r}/${oo(a)}`,void 0))):bt.IsExactOptionalProperty(n,a)&&(yield*Vt(u,t,`${r}/${oo(a)}`,n[a]))}}function*tS(e,t,r,n){dw(n)||(yield U(C.Promise,e,r,n))}function*rS(e,t,r,n){if(!bt.IsRecordLike(n))return yield U(C.Object,e,r,n);me(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield U(C.ObjectMinProperties,e,r,n)),me(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield U(C.ObjectMaxProperties,e,r,n));const[o,i]=Object.entries(e.patternProperties)[0],s=new RegExp(o);for(const[a,u]of Object.entries(n))s.test(a)&&(yield*Vt(i,t,`${r}/${oo(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(n))s.test(a)||(yield*Vt(e.additionalProperties,t,`${r}/${oo(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(n))if(!s.test(a))return yield U(C.ObjectAdditionalProperties,e,`${r}/${oo(a)}`,u)}}function*nS(e,t,r,n){yield*Vt(hn(e,t),t,r,n)}function*oS(e,t,r,n){if(!Ur(n))return yield U(C.String,e,r,n);if(me(e.minLength)&&!(n.length>=e.minLength)&&(yield U(C.StringMinLength,e,r,n)),me(e.maxLength)&&!(n.length<=e.maxLength)&&(yield U(C.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield U(C.RegExp,e,r,n)}function*iS(e,t,r,n){if(!Ur(n))return yield U(C.String,e,r,n);me(e.minLength)&&!(n.length>=e.minLength)&&(yield U(C.StringMinLength,e,r,n)),me(e.maxLength)&&!(n.length<=e.maxLength)&&(yield U(C.StringMaxLength,e,r,n)),Ur(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield U(C.StringPattern,e,r,n))),Ur(e.format)&&(hm(e.format)?mm(e.format)(n)||(yield U(C.StringFormat,e,r,n)):yield U(C.StringFormatUnknown,e,r,n))}function*sS(e,t,r,n){jc(n)||(yield U(C.Symbol,e,r,n))}function*aS(e,t,r,n){if(!Ur(n))return yield U(C.String,e,r,n);new RegExp(e.pattern).test(n)||(yield U(C.StringPattern,e,r,n))}function*uS(e,t,r,n){yield*Vt(hn(e,t),t,r,n)}function*lS(e,t,r,n){if(!Kr(n))return yield U(C.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield U(C.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield U(C.TupleLength,e,r,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*Vt(e.items[o],t,`${r}/${o}`,n[o])}function*cS(e,t,r,n){ti(n)||(yield U(C.Undefined,e,r,n))}function*dS(e,t,r,n){if(sc(e,t,n))return;const o=e.anyOf.map(i=>new h5(Vt(i,t,r,n)));yield U(C.Union,e,r,n,o)}function*fS(e,t,r,n){if(!nm(n))return yield U(C.Uint8Array,e,r,n);me(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield U(C.Uint8ArrayMaxByteLength,e,r,n)),me(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield U(C.Uint8ArrayMinByteLength,e,r,n))}function*hS(e,t,r,n){}function*mS(e,t,r,n){bt.IsVoidLike(n)||(yield U(C.Void,e,r,n))}function*gS(e,t,r,n){bm(e[R])(e,n)||(yield U(C.Kind,e,r,n))}function*Vt(e,t,r,n){const o=me(e.$id)?[...t,e]:t,i=e;switch(i[R]){case"Any":return yield*BM();case"Argument":return yield*RM();case"Array":return yield*LM(i,o,r,n);case"AsyncIterator":return yield*jM(i,o,r,n);case"BigInt":return yield*_M(i,o,r,n);case"Boolean":return yield*UM(i,o,r,n);case"Constructor":return yield*zM(i,o,r,n);case"Date":return yield*VM(i,o,r,n);case"Function":return yield*qM(i,o,r,n);case"Import":return yield*WM(i,o,r,n);case"Integer":return yield*KM(i,o,r,n);case"Intersect":return yield*GM(i,o,r,n);case"Iterator":return yield*HM(i,o,r,n);case"Literal":return yield*ZM(i,o,r,n);case"Never":return yield*JM(i,o,r,n);case"Not":return yield*YM(i,o,r,n);case"Null":return yield*XM(i,o,r,n);case"Number":return yield*QM(i,o,r,n);case"Object":return yield*eS(i,o,r,n);case"Promise":return yield*tS(i,o,r,n);case"Record":return yield*rS(i,o,r,n);case"Ref":return yield*nS(i,o,r,n);case"RegExp":return yield*oS(i,o,r,n);case"String":return yield*iS(i,o,r,n);case"Symbol":return yield*sS(i,o,r,n);case"TemplateLiteral":return yield*aS(i,o,r,n);case"This":return yield*uS(i,o,r,n);case"Tuple":return yield*lS(i,o,r,n);case"Undefined":return yield*cS(i,o,r,n);case"Union":return yield*dS(i,o,r,n);case"Uint8Array":return yield*fS(i,o,r,n);case"Unknown":return yield*hS();case"Void":return yield*mS(i,o,r,n);default:if(!Jo(i[R]))throw new OM(e);return yield*gS(i,o,r,n)}}function pS(...e){const t=e.length===3?Vt(e[0],e[1],"",e[2]):Vt(e[0],[],"",e[1]);return new h5(t)}class bS extends tr{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class yS extends tr{constructor(t,r,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=o}}function Xe(e,t,r){try{return Ke(e)?e[Er].Decode(r):r}catch(n){throw new yS(e,t,r,n)}}function vS(e,t,r,n){return Kr(n)?Xe(e,r,n.map((o,i)=>In(e.items,t,`${r}/${i}`,o))):Xe(e,r,n)}function wS(e,t,r,n){if(!Gn(n)||gw(n))return Xe(e,r,n);const o=zw(e),i=o.map(c=>c[0]),s={...n};for(const[c,d]of o)c in s&&(s[c]=In(d,t,`${r}/${c}`,s[c]));if(!Ke(e.unevaluatedProperties))return Xe(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)i.includes(c)||(l[c]=Xe(u,`${r}/${c}`,l[c]));return Xe(e,r,l)}function $S(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=In(i,[...t,...o],r,n);return Xe(e,r,s)}function kS(e,t,r,n){return Xe(e,r,In(e.not,t,r,n))}function xS(e,t,r,n){if(!Gn(n))return Xe(e,r,n);const o=Xi(e),i={...n};for(const l of o)fw(i,l)&&(ti(i[l])&&(!Ru(e.properties[l])||bt.IsExactOptionalProperty(i,l))||(i[l]=In(e.properties[l],t,`${r}/${l}`,i[l])));if(!br(e.additionalProperties))return Xe(e,r,i);const s=Object.getOwnPropertyNames(i),a=e.additionalProperties,u={...i};for(const l of s)o.includes(l)||(u[l]=Xe(a,`${r}/${l}`,u[l]));return Xe(e,r,u)}function DS(e,t,r,n){if(!Gn(n))return Xe(e,r,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],i=new RegExp(o),s={...n};for(const c of Object.getOwnPropertyNames(n))i.test(c)&&(s[c]=In(e.patternProperties[o],t,`${r}/${c}`,s[c]));if(!br(e.additionalProperties))return Xe(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)i.test(c)||(l[c]=Xe(u,`${r}/${c}`,l[c]));return Xe(e,r,l)}function AS(e,t,r,n){const o=hn(e,t);return Xe(e,r,In(o,t,r,n))}function ES(e,t,r,n){const o=hn(e,t);return Xe(e,r,In(o,t,r,n))}function CS(e,t,r,n){return Kr(n)&&Kr(e.items)?Xe(e,r,e.items.map((o,i)=>In(o,t,`${r}/${i}`,n[i]))):Xe(e,r,n)}function FS(e,t,r,n){for(const o of e.anyOf){if(!sc(o,t,n))continue;const i=In(o,t,r,n);return Xe(e,r,i)}return Xe(e,r,n)}function In(e,t,r,n){const o=sd(e,t),i=e;switch(e[R]){case"Array":return vS(i,o,r,n);case"Import":return $S(i,o,r,n);case"Intersect":return wS(i,o,r,n);case"Not":return kS(i,o,r,n);case"Object":return xS(i,o,r,n);case"Record":return DS(i,o,r,n);case"Ref":return AS(i,o,r,n);case"Symbol":return Xe(i,r,n);case"This":return ES(i,o,r,n);case"Tuple":return CS(i,o,r,n);case"Union":return FS(i,o,r,n);default:return Xe(i,r,n)}}function MS(e,t,r){return In(e,t,"",r)}class SS extends tr{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class TS extends tr{constructor(t,r,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=o}}function Xt(e,t,r){try{return Ke(e)?e[Er].Encode(r):r}catch(n){throw new TS(e,t,r,n)}}function NS(e,t,r,n){const o=Xt(e,r,n);return Kr(o)?o.map((i,s)=>Tn(e.items,t,`${r}/${s}`,i)):o}function PS(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=Xt(e,r,n);return Tn(i,[...t,...o],r,s)}function IS(e,t,r,n){const o=Xt(e,r,n);if(!Gn(n)||gw(n))return o;const i=zw(e),s=i.map(d=>d[0]),a={...o};for(const[d,h]of i)d in a&&(a[d]=Tn(h,t,`${r}/${d}`,a[d]));if(!Ke(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const d of u)s.includes(d)||(c[d]=Xt(l,`${r}/${d}`,c[d]));return c}function OS(e,t,r,n){return Xt(e.not,r,Xt(e,r,n))}function BS(e,t,r,n){const o=Xt(e,r,n);if(!Gn(o))return o;const i=Xi(e),s={...o};for(const c of i)fw(s,c)&&(ti(s[c])&&(!Ru(e.properties[c])||bt.IsExactOptionalProperty(s,c))||(s[c]=Tn(e.properties[c],t,`${r}/${c}`,s[c])));if(!br(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)i.includes(c)||(l[c]=Xt(u,`${r}/${c}`,l[c]));return l}function RS(e,t,r,n){const o=Xt(e,r,n);if(!Gn(n))return o;const i=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(i),a={...o};for(const d of Object.getOwnPropertyNames(n))s.test(d)&&(a[d]=Tn(e.patternProperties[i],t,`${r}/${d}`,a[d]));if(!br(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const d of u)s.test(d)||(c[d]=Xt(l,`${r}/${d}`,c[d]));return c}function LS(e,t,r,n){const o=hn(e,t),i=Tn(o,t,r,n);return Xt(e,r,i)}function jS(e,t,r,n){const o=hn(e,t),i=Tn(o,t,r,n);return Xt(e,r,i)}function _S(e,t,r,n){const o=Xt(e,r,n);return Kr(e.items)?e.items.map((i,s)=>Tn(i,t,`${r}/${s}`,o[s])):[]}function US(e,t,r,n){for(const o of e.anyOf){if(!sc(o,t,n))continue;const i=Tn(o,t,r,n);return Xt(e,r,i)}for(const o of e.anyOf){const i=Tn(o,t,r,n);if(sc(e,t,i))return Xt(e,r,i)}return Xt(e,r,n)}function Tn(e,t,r,n){const o=sd(e,t),i=e;switch(e[R]){case"Array":return NS(i,o,r,n);case"Import":return PS(i,o,r,n);case"Intersect":return IS(i,o,r,n);case"Not":return OS(i,o,r,n);case"Object":return BS(i,o,r,n);case"Record":return RS(i,o,r,n);case"Ref":return LS(i,o,r,n);case"This":return jS(i,o,r,n);case"Tuple":return _S(i,o,r,n);case"Union":return US(i,o,r,n);default:return Xt(i,r,n)}}function zS(e,t,r){return Tn(e,t,"",r)}function VS(e,t){return Ke(e)||It(e.items,t)}function qS(e,t){return Ke(e)||It(e.items,t)}function WS(e,t){return Ke(e)||It(e.returns,t)||e.parameters.some(r=>It(r,t))}function KS(e,t){return Ke(e)||It(e.returns,t)||e.parameters.some(r=>It(r,t))}function GS(e,t){return Ke(e)||Ke(e.unevaluatedProperties)||e.allOf.some(r=>It(r,t))}function HS(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,i)=>[...o,e.$defs[i]],[]),n=e.$defs[e.$ref];return Ke(e)||It(n,[...r,...t])}function ZS(e,t){return Ke(e)||It(e.items,t)}function JS(e,t){return Ke(e)||It(e.not,t)}function YS(e,t){return Ke(e)||Object.values(e.properties).some(r=>It(r,t))||br(e.additionalProperties)&&It(e.additionalProperties,t)}function XS(e,t){return Ke(e)||It(e.item,t)}function QS(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return Ke(e)||It(n,t)||br(e.additionalProperties)&&Ke(e.additionalProperties)}function eT(e,t){return Ke(e)?!0:It(hn(e,t),t)}function tT(e,t){return Ke(e)?!0:It(hn(e,t),t)}function rT(e,t){return Ke(e)||!ti(e.items)&&e.items.some(r=>It(r,t))}function nT(e,t){return Ke(e)||e.anyOf.some(r=>It(r,t))}function It(e,t){const r=sd(e,t),n=e;if(e.$id&&O0.has(e.$id))return!1;switch(e.$id&&O0.add(e.$id),e[R]){case"Array":return VS(n,r);case"AsyncIterator":return qS(n,r);case"Constructor":return WS(n,r);case"Function":return KS(n,r);case"Import":return HS(n,r);case"Intersect":return GS(n,r);case"Iterator":return ZS(n,r);case"Not":return JS(n,r);case"Object":return YS(n,r);case"Promise":return XS(n,r);case"Record":return QS(n,r);case"Ref":return eT(n,r);case"This":return tT(n,r);case"Tuple":return rT(n,r);case"Union":return nT(n,r);default:return Ke(e)}}const O0=new Set;function oT(e,t){return O0.clear(),It(e,t)}class iT{constructor(t,r,n,o){this.schema=t,this.references=r,this.checkFunc=n,this.code=o,this.hasTransform=oT(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return pS(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new bS(this.schema,t,this.Errors(t).First());return this.hasTransform?MS(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?zS(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new SS(this.schema,t,this.Errors(t).First());return r}}var uo;(function(e){function t(i){return i===36}e.DollarSign=t;function r(i){return i===95}e.IsUnderscore=r;function n(i){return i>=65&&i<=90||i>=97&&i<=122}e.IsAlpha=n;function o(i){return i>=48&&i<=57}e.IsNumeric=o})(uo||(uo={}));var ac;(function(e){function t(i){return i.length===0?!1:uo.IsNumeric(i.charCodeAt(0))}function r(i){if(t(i))return!1;for(let s=0;s<i.length;s++){const a=i.charCodeAt(s);if(!(uo.IsAlpha(a)||uo.IsNumeric(a)||uo.DollarSign(a)||uo.IsUnderscore(a)))return!1}return!0}function n(i){return i.replace(/'/g,"\\'")}function o(i,s){return r(s)?`${i}.${s}`:`${i}['${n(s)}']`}e.Encode=o})(ac||(ac={}));var B0;(function(e){function t(r){const n=[];for(let o=0;o<r.length;o++){const i=r.charCodeAt(o);uo.IsNumeric(i)||uo.IsAlpha(i)?n.push(r.charAt(o)):n.push(`_${i}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(B0||(B0={}));var R0;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(R0||(R0={}));class sT extends tr{constructor(t){super("Unknown type"),this.schema=t}}class z1 extends tr{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var yi;(function(e){function t(s,a,u){return bt.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${ac.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function r(s){return bt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return bt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function o(s){return bt.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=o;function i(s){return bt.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=i})(yi||(yi={}));var Ka;(function(e){function t(v){return v[R]==="Any"||v[R]==="Unknown"}function*r(v,W,D){yield"true"}function*n(v,W,D){yield"true"}function*o(v,W,D){yield`Array.isArray(${D})`;const[ee,H]=[mn("value","any"),mn("acc","number")];ue(v.maxItems)&&(yield`${D}.length <= ${v.maxItems}`),ue(v.minItems)&&(yield`${D}.length >= ${v.minItems}`);const Z=Tt(v.items,W,"value");if(yield`((array) => { for(const ${ee} of array) if(!(${Z})) { return false }; return true; })(${D})`,st(v.contains)||ue(v.minContains)||ue(v.maxContains)){const ze=st(v.contains)?v.contains:lt(),vr=Tt(ze,W,"value"),Xn=ue(v.minContains)?[`(count >= ${v.minContains})`]:[],gn=ue(v.maxContains)?[`(count <= ${v.maxContains})`]:[],Rn=`const count = value.reduce((${H}, ${ee}) => ${vr} ? acc + 1 : acc, 0)`,Ju=["(count > 0)",...Xn,...gn].join(" && ");yield`((${ee}) => { ${Rn}; return ${Ju}})(${D})`}v.uniqueItems===!0&&(yield`((${ee}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${D})`)}function*i(v,W,D){yield`(typeof value === 'object' && Symbol.asyncIterator in ${D})`}function*s(v,W,D){yield`(typeof ${D} === 'bigint')`,ao(v.exclusiveMaximum)&&(yield`${D} < BigInt(${v.exclusiveMaximum})`),ao(v.exclusiveMinimum)&&(yield`${D} > BigInt(${v.exclusiveMinimum})`),ao(v.maximum)&&(yield`${D} <= BigInt(${v.maximum})`),ao(v.minimum)&&(yield`${D} >= BigInt(${v.minimum})`),ao(v.multipleOf)&&(yield`(${D} % BigInt(${v.multipleOf})) === 0`)}function*a(v,W,D){yield`(typeof ${D} === 'boolean')`}function*u(v,W,D){yield*Gt(v.returns,W,`${D}.prototype`)}function*l(v,W,D){yield`(${D} instanceof Date) && Number.isFinite(${D}.getTime())`,ue(v.exclusiveMaximumTimestamp)&&(yield`${D}.getTime() < ${v.exclusiveMaximumTimestamp}`),ue(v.exclusiveMinimumTimestamp)&&(yield`${D}.getTime() > ${v.exclusiveMinimumTimestamp}`),ue(v.maximumTimestamp)&&(yield`${D}.getTime() <= ${v.maximumTimestamp}`),ue(v.minimumTimestamp)&&(yield`${D}.getTime() >= ${v.minimumTimestamp}`),ue(v.multipleOfTimestamp)&&(yield`(${D}.getTime() % ${v.multipleOfTimestamp}) === 0`)}function*c(v,W,D){yield`(typeof ${D} === 'function')`}function*d(v,W,D){const ee=globalThis.Object.getOwnPropertyNames(v.$defs).reduce((H,Z)=>[...H,v.$defs[Z]],[]);yield*Gt(aa(v.$ref),[...W,...ee],D)}function*h(v,W,D){yield`Number.isInteger(${D})`,ue(v.exclusiveMaximum)&&(yield`${D} < ${v.exclusiveMaximum}`),ue(v.exclusiveMinimum)&&(yield`${D} > ${v.exclusiveMinimum}`),ue(v.maximum)&&(yield`${D} <= ${v.maximum}`),ue(v.minimum)&&(yield`${D} >= ${v.minimum}`),ue(v.multipleOf)&&(yield`(${D} % ${v.multipleOf}) === 0`)}function*m(v,W,D){const ee=v.allOf.map(H=>Tt(H,W,D)).join(" && ");if(v.unevaluatedProperties===!1){const H=or(`${new RegExp(Us(v))};`),Z=`Object.getOwnPropertyNames(${D}).every(key => ${H}.test(key))`;yield`(${ee} && ${Z})`}else if(st(v.unevaluatedProperties)){const H=or(`${new RegExp(Us(v))};`),Z=`Object.getOwnPropertyNames(${D}).every(key => ${H}.test(key) || ${Tt(v.unevaluatedProperties,W,`${D}[key]`)})`;yield`(${ee} && ${Z})`}else yield`(${ee})`}function*y(v,W,D){yield`(typeof value === 'object' && Symbol.iterator in ${D})`}function*w(v,W,D){typeof v.const=="number"||typeof v.const=="boolean"?yield`(${D} === ${v.const})`:yield`(${D} === '${R0.Escape(v.const)}')`}function*$(v,W,D){yield"false"}function*k(v,W,D){yield`(!${Tt(v.not,W,D)})`}function*A(v,W,D){yield`(${D} === null)`}function*T(v,W,D){yield yi.IsNumberLike(D),ue(v.exclusiveMaximum)&&(yield`${D} < ${v.exclusiveMaximum}`),ue(v.exclusiveMinimum)&&(yield`${D} > ${v.exclusiveMinimum}`),ue(v.maximum)&&(yield`${D} <= ${v.maximum}`),ue(v.minimum)&&(yield`${D} >= ${v.minimum}`),ue(v.multipleOf)&&(yield`(${D} % ${v.multipleOf}) === 0`)}function*B(v,W,D){yield yi.IsObjectLike(D),ue(v.minProperties)&&(yield`Object.getOwnPropertyNames(${D}).length >= ${v.minProperties}`),ue(v.maxProperties)&&(yield`Object.getOwnPropertyNames(${D}).length <= ${v.maxProperties}`);const ee=Object.getOwnPropertyNames(v.properties);for(const H of ee){const Z=ac.Encode(D,H),ze=v.properties[H];if(v.required&&v.required.includes(H))yield*Gt(ze,W,Z),(la(ze)||t(ze))&&(yield`('${H}' in ${D})`);else{const vr=Tt(ze,W,Z);yield yi.IsExactOptionalProperty(D,H,vr)}}if(v.additionalProperties===!1)if(v.required&&v.required.length===ee.length)yield`Object.getOwnPropertyNames(${D}).length === ${ee.length}`;else{const H=`[${ee.map(Z=>`'${Z}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${D}).every(key => ${H}.includes(key))`}if(typeof v.additionalProperties=="object"){const H=Tt(v.additionalProperties,W,`${D}[key]`),Z=`[${ee.map(ze=>`'${ze}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${D}).every(key => ${Z}.includes(key) || ${H}))`}}function*q(v,W,D){yield`${D} instanceof Promise`}function*oe(v,W,D){yield yi.IsRecordLike(D),ue(v.minProperties)&&(yield`Object.getOwnPropertyNames(${D}).length >= ${v.minProperties}`),ue(v.maxProperties)&&(yield`Object.getOwnPropertyNames(${D}).length <= ${v.maxProperties}`);const[ee,H]=Object.entries(v.patternProperties)[0],Z=or(`${new RegExp(ee)}`),ze=Tt(H,W,"value"),vr=st(v.additionalProperties)?Tt(v.additionalProperties,W,D):v.additionalProperties===!1?"false":"true",Xn=`(${Z}.test(key) ? ${ze} : ${vr})`;yield`(Object.entries(${D}).every(([key, value]) => ${Xn}))`}function*De(v,W,D){const ee=hn(v,W);if(Le.functions.has(v.$ref))return yield`${Qr(v.$ref)}(${D})`;yield*Gt(ee,W,D)}function*de(v,W,D){const ee=or(`${new RegExp(v.source,v.flags)};`);yield`(typeof ${D} === 'string')`,ue(v.maxLength)&&(yield`${D}.length <= ${v.maxLength}`),ue(v.minLength)&&(yield`${D}.length >= ${v.minLength}`),yield`${ee}.test(${D})`}function*$e(v,W,D){yield`(typeof ${D} === 'string')`,ue(v.maxLength)&&(yield`${D}.length <= ${v.maxLength}`),ue(v.minLength)&&(yield`${D}.length >= ${v.minLength}`),v.pattern!==void 0&&(yield`${or(`${new RegExp(v.pattern)};`)}.test(${D})`),v.format!==void 0&&(yield`format('${v.format}', ${D})`)}function*Ge(v,W,D){yield`(typeof ${D} === 'symbol')`}function*He(v,W,D){yield`(typeof ${D} === 'string')`,yield`${or(`${new RegExp(v.pattern)};`)}.test(${D})`}function*St(v,W,D){yield`${Qr(v.$ref)}(${D})`}function*Nr(v,W,D){if(yield`Array.isArray(${D})`,v.items===void 0)return yield`${D}.length === 0`;yield`(${D}.length === ${v.maxItems})`;for(let ee=0;ee<v.items.length;ee++)yield`${Tt(v.items[ee],W,`${D}[${ee}]`)}`}function*dr(v,W,D){yield`${D} === undefined`}function*Jn(v,W,D){yield`(${v.anyOf.map(H=>Tt(H,W,D)).join(" || ")})`}function*Rt(v,W,D){yield`${D} instanceof Uint8Array`,ue(v.maxByteLength)&&(yield`(${D}.length <= ${v.maxByteLength})`),ue(v.minByteLength)&&(yield`(${D}.length >= ${v.minByteLength})`)}function*Bn(v,W,D){yield"true"}function*Yn(v,W,D){yield yi.IsVoidLike(D)}function*Xr(v,W,D){const ee=Le.instances.size;Le.instances.set(ee,v),yield`kind('${v[R]}', ${ee}, ${D})`}function*Gt(v,W,D,ee=!0){const H=Ur(v.$id)?[...W,v]:W,Z=v;if(ee&&Ur(v.$id)){const ze=Qr(v.$id);if(Le.functions.has(ze))return yield`${ze}(${D})`;{Le.functions.set(ze,"<deferred>");const vr=en(ze,v,W,"value",!1);return Le.functions.set(ze,vr),yield`${ze}(${D})`}}switch(Z[R]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*o(Z,H,D);case"AsyncIterator":return yield*i(Z,H,D);case"BigInt":return yield*s(Z,H,D);case"Boolean":return yield*a(Z,H,D);case"Constructor":return yield*u(Z,H,D);case"Date":return yield*l(Z,H,D);case"Function":return yield*c(Z,H,D);case"Import":return yield*d(Z,H,D);case"Integer":return yield*h(Z,H,D);case"Intersect":return yield*m(Z,H,D);case"Iterator":return yield*y(Z,H,D);case"Literal":return yield*w(Z,H,D);case"Never":return yield*$();case"Not":return yield*k(Z,H,D);case"Null":return yield*A(Z,H,D);case"Number":return yield*T(Z,H,D);case"Object":return yield*B(Z,H,D);case"Promise":return yield*q(Z,H,D);case"Record":return yield*oe(Z,H,D);case"Ref":return yield*De(Z,H,D);case"RegExp":return yield*de(Z,H,D);case"String":return yield*$e(Z,H,D);case"Symbol":return yield*Ge(Z,H,D);case"TemplateLiteral":return yield*He(Z,H,D);case"This":return yield*St(Z,H,D);case"Tuple":return yield*Nr(Z,H,D);case"Undefined":return yield*dr(Z,H,D);case"Union":return yield*Jn(Z,H,D);case"Uint8Array":return yield*Rt(Z,H,D);case"Unknown":return yield*Bn();case"Void":return yield*Yn(Z,H,D);default:if(!Jo(Z[R]))throw new sT(v);return yield*Xr(Z,H,D)}}const Le={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Tt(v,W,D,ee=!0){return`(${[...Gt(v,W,D,ee)].join(" && ")})`}function Qr(v){return`check_${B0.Encode(v)}`}function or(v){const W=`local_${Le.variables.size}`;return Le.variables.set(W,`const ${W} = ${v}`),W}function en(v,W,D,ee,H=!0){const[Z,ze]=[`
`,Rn=>"".padStart(Rn," ")],vr=mn("value","any"),Xn=Eo("boolean"),gn=[...Gt(W,D,ee,H)].map(Rn=>`${ze(4)}${Rn}`).join(` &&${Z}`);return`function ${v}(${vr})${Xn} {${Z}${ze(2)}return (${Z}${gn}${Z}${ze(2)})
}`}function mn(v,W){const D=Le.language==="typescript"?`: ${W}`:"";return`${v}${D}`}function Eo(v){return Le.language==="typescript"?`: ${v}`:""}function Zu(v,W,D){const ee=en("check",v,W,"value"),H=mn("value","any"),Z=Eo("boolean"),ze=[...Le.functions.values()],vr=[...Le.variables.values()],Xn=Ur(v.$id)?`return function check(${H})${Z} {
  return ${Qr(v.$id)}(value)
}`:`return ${ee}`;return[...vr,...ze,Xn].join(`
`)}function rs(...v){const W={language:"javascript"},[D,ee,H]=v.length===2&&Kr(v[1])?[v[0],v[1],W]:v.length===2&&!Kr(v[1])?[v[0],[],v[1]]:v.length===3?[v[0],v[1],v[2]]:v.length===1?[v[0],[],W]:[null,[],W];if(Le.language=H.language,Le.variables.clear(),Le.functions.clear(),Le.instances.clear(),!st(D))throw new z1(D);for(const Z of ee)if(!st(Z))throw new z1(Z);return Zu(D,ee)}e.Code=rs;function q$(v,W=[]){const D=rs(v,W,{language:"javascript"}),ee=globalThis.Function("kind","format","hash",D),H=new Map(Le.instances);function Z(gn,Rn,Ju){if(!Jo(gn)||!H.has(Rn))return!1;const W$=bm(gn),K$=H.get(Rn);return W$(K$,Ju)}function ze(gn,Rn){return hm(gn)?mm(gn)(Rn):!1}function vr(gn){return _m(gn)}const Xn=ee(Z,ze,vr);return new iT(v,W,Xn,D)}e.Compile=q$})(Ka||(Ka={}));const L0={};function m5(e,t){e in L0||(L0[e]=t)}let V1=!1;function aT(){V1||(V1=!0,PF(e=>(L0[e.schema[R]]||u5)(e)))}const j0=Symbol.for("object-shape-tester.shape-identifier");function Ne(e){if(aT(),Um(e))return e;const t=_0(e),r=vi(t,!1),n=vi(t,!0),o={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:Ka.Compile(t),$_compiledSchemaNoExtraKeys:Ka.Compile(r),$_compiledSchemaExtraKeys:Ka.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[j0]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}function Um(e){return F.hasKey(e,j0)&&!!e[j0]}function zm(e){return F.hasKey(e,R)}function vi(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>vi(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>vi(n,t))),zm(e.items)?r.items=vi(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>vi(n,t))),F.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,i])=>{n[o]=vi(i,t)}),r.properties=n}return r.additionalProperties=t,r}function _0(e){if(zm(e))return e;if(Um(e))return e.$_schema;if(F.isFunction(e))return Ve.Function([],Ve.Any(),{default:e});if(F.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,o])=>{const i=_0(o);r[n]=i,t[n]=i.default}),Ve.Object(r,{default:t})}else{if(F.isArray(e))return Ve.Array(Ve.Union(e.map(t=>_0(t))),{default:[]});if(F.isPrimitive(e)){if(F.isString(e))return Ve.String({default:e});if(F.isNumber(e))return Ve.Number({default:e});if(F.isBoolean(e))return Ve.Boolean({default:e});if(F.isSymbol(e))return Ve.Symbol({default:e});if(F.isNull(e))return Ve.Null({default:null});if(F.isUndefined(e))return Ve.Undefined({default:void 0});if(F.isBigInt(e))return Ve.BigInt({default:e});Dt.tsType(e).equals(),Dt.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${b(e)}`)}}function uT({checkValue:e,default:t,name:r}){return Jo(r)||pm(r,(n,o)=>e(o)),(n=t)=>Ne(Ve.Unsafe({[R]:r,default:n}))}function Oi(e,t){const r=Or(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return Ne(Ve.Union(r.map(n=>Ve.Literal(n)),{default:t??r[0]}))}function be(e){return F.isSymbol(e)?lT(e):Ne(Ve.Const(e,{default:e}))}const ml="ExactSymbol";function lT(e){return Jo(ml)||pm(ml,(t,r)=>r===t.symbol),m5(ml,({schema:t})=>`Expected symbol ${t.symbol?.description?z3({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Ne(Ve.Unsafe({[R]:ml,symbol:e,default:e}))}function cT(...e){const t={},r=e.map(n=>{const o=Ne(n);return Object.assign(t,o.default),o.$_schema});return Ne(Ve.Composite(r,{default:t}))}function Zt(e,t={}){bt.ExactOptionalPropertyTypes=!0;const r=Ne(e).$_schema,n=t.alsoUndefined?Ve.Union([Ve.Undefined(),r]):r;return Ne(Ve.Optional(n))}function it(...e){let t;const r=e.map((n,o)=>{const i=Ne(n);return o||(t=i.default),i.$_schema});return Ne(Ve.Union(r,{default:t}))}class dT extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(i=>g5(i)).join(`
`),o=Ui(r,`Shape mismatch:
${wh(n,1)}`);super(o),this.errors=t,this.failureMessage=r}}function fT(e){return e.errors.flatMap(t=>Array.from(t))}function g5(e,t=0){const r=fT(e).map(o=>g5(o,t+1)),n=[e.path,e.message].filter(F.isTruthy).join(": ")+(r.length?":":"");return[wh(n,t),...r].join(`
`)}function _o(e,t,r={}){return p5(t,r).Check(e)}function uc(e,t,r={},n){if(_o(e,t,r))return;const o=Array.from(p5(t,r).Errors(e));if(o.length)throw new dT(o,n)}function p5(e,t){return e=hT(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function hT(e){return Ne(e)}function ps({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:o}=dh(r),i=r.default??(o-n)/2+n,s=Ne(Ve.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:i})),a=Y2(()=>uc(i,s));if(a)throw Gs(a,"Default range value is not within range.");return s}const Nl="recordShape";function ad({keys:e,values:t,partial:r,additionalProperties:n}){mT();const o=b5(e),i=Ne(t);return Ne(Ve.Unsafe({[R]:Nl,keysShape:o,valuesShape:i,isPartial:!!r,additionalProperties:!!n,default:gT({isPartial:!!r,keysShape:o,valuesShape:i})}))}function mT(){Jo(Nl)||pm(Nl,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([o,i])=>{const s=e.additionalProperties?!0:_o(o,e.keysShape),a=_o(i,e.valuesShape);return s&&a}),n=e.isPartial?!0:!q1(e.keysShape,t).length;return r&&n}),m5(Nl,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=$o(Object.entries(n),([u])=>u,(u,[l,c])=>!_o(l,r.keysShape)||!_o(c,r.valuesShape)),i=q1(r.keysShape,n),s=o.length?["Failure at keys",o.join(",")].join(": "):"",a=i.length?["Missing keys",i.join(",")].join(": "):"";return[s,a].filter(F.isTruthy).join(`
`)})}function q1(e,t){const r=lc(e).filter(n=>F.isPropertyKey(n));return r.length?r.filter(n=>!F.hasKey(t,n)):[]}function gT({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=lc(e),o=t.default;return Object.fromEntries(n.map(i=>[i,o]))}}function b5(e){return Um(e)?e:zm(e)?Ne(e):F.isObject(e)?Oi(e):F.isArray(e)&&F.isLengthAtLeast(e,1)?it(...e.map(t=>be(t))):F.isPropertyKey(e)?Ne(e):Ne(Ve.Undefined())}function lc(e){const t=e.$_schema,r=t[R].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?uy(t.anyOf.flatMap(n=>lc(Ne(n)))):["undefined","number","string","symbol"].includes(r)?[]:lc(b5(e.default))}function pT(e){return Ne(Ve.Unknown({default:e}))}const bT=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Vm=bT.reduce((e,t)=>(e[t]=t,e),{});ot.defaultZone.name;const y5=Vm.UTC,yT=Ne({hour:ps({...Xg,default:Xg.min}),minute:ps({...Qg,default:Qg.min}),second:ps({...ep,default:ep.min}),millisecond:ps({...tp,default:tp.min}),timezone:Oi(Vm,y5)}),vT=Ne({year:2023,month:ps({...rp,default:rp.min}),day:ps({...np,default:np.min}),timezone:Oi(Vm,y5)});Ne(cT(vT,yT));Se.Years+"",Se.Months+"",Se.Weeks+"",Se.Days+"",Se.Hours+"",Se.Minutes+"",Se.Seconds+"",Se.Milliseconds+"";Ne(it({get:be(J.Month),in:it(be(J.Year))},{get:be(J.Week),in:it(be(J.Year),be(J.Month))},{get:be(J.Day),in:it(be(J.Year),be(J.Month),be(J.Week))},{get:be(J.Hour),in:it(be(J.Year),be(J.Month),be(J.Week),be(J.Day))},{get:be(J.Minute),in:it(be(J.Year),be(J.Month),be(J.Week),be(J.Day),be(J.Hour))},{get:be(J.Second),in:it(be(J.Year),be(J.Month),be(J.Week),be(J.Day),be(J.Hour),be(J.Minute))},{get:be(J.Millisecond),in:it(be(J.Year),be(J.Month),be(J.Week),be(J.Day),be(J.Hour),be(J.Minute),be(J.Second))}));ad({keys:Oi(Se),values:-1,partial:!0});var W1;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(W1||(W1={}));var U0;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(U0||(U0={}));var K1;(function(e){e.Year="year",e.Month="month",e.Day="day"})(K1||(K1={}));const wT={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};L3(wT,Or(U0));uT({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return $T(e)}});function $T(e){return re.fromISO(e).toUTC().toISO()===e}const kT=Ne({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:pT()});function cf(e){return _o(e,kT,{allowExtraKeys:!0})}class v5 extends sw{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||Qh}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:xT}=y6,G1=e=>e,H1=()=>document.createComment(""),Da=(e,t,r)=>{const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=n.insertBefore(H1(),o),s=n.insertBefore(H1(),o);r=new xT(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==s._$AU&&r._$AP(u)}if(i!==o||a){let u=r._$AA;for(;u!==i;){const l=G1(u).nextSibling;G1(n).insertBefore(u,o),u=l}}}return r},pi=(e,t,r=e)=>(e._$AI(t,r),e),DT={},AT=(e,t=DT)=>e._$AH=t,ET=e=>e._$AH,df=e=>{e._$AR(),e._$AA.remove()};const qm={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Hn=e=>(...t)=>({_$litDirective$:e,values:t});class Zn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const CT={attribute:!0,type:String,converter:Gl,reflect:!1,hasChanged:Oh},FT=(e=CT,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function MT(e){return(t,r)=>typeof r=="object"?FT(e,t,r):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}const yr=Hn(class extends Zn{constructor(e){if(super(e),e.type!==qm.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return zr}});const pt=e=>e??Q;function ST(e,t,r){return e?t(e):r?.(e)}class TT extends Ua{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function NT(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(a=>!!a.index).length;if(n||o)return[...e];const i=e.map(a=>[a]);return i.length||(i[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(i[a]=[])}),t.forEach(a=>{const u=i[a.index];u&&u.splice(0,0,...a.values)}),i.flat()}function z0(e){return F.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Wm(e){return F.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function w5(e){return $o(e,t=>{if(z0(t))return t.definition;if(Wm(t))return t.tagInterpolationKey||t},F.isTruthy)}const $5=new WeakMap;function PT(e,t){const r=w5(t);return k5($5,[e,...r]).value?.template}function IT(e,t,r){const n=w5(t);return D5($5,[e,...n],r)}function k5(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=x5(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?k5(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function x5(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function D5(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:s}=x5(e,t,n);if(!i)return{result:!1,reason:s};const a=o??{nested:void 0,template:void 0};if(o||e.set(i,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),D5(u,t,r,n+1)}function A5(e,t,r){const n=PT(e,t),o=n??r();if(!n){const a=IT(e,t,o);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const i=o.valuesTransform(t),s=NT(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function E5(e,t,r,n){const o=[],i=[],s=[],a=[];return e.forEach((l,c)=>{const d=o.length-1,h=o[d],m=c-1,y=t[m];n&&n(l);let w,$=[];if(typeof h=="string"&&(w=r(h,l,y),w)){o[d]=[h,w.replacement].join(""),s.push(m);const A=w.getExtraValues;$=A?A(y):[],$.length&&A?(o[d]+=" ",$.forEach((T,B)=>{B&&o.push(" ")}),a.push(T=>{const B=T[m],q=A(B);return{index:m,values:q}}),o.push(l)):o[d]+=l}w||o.push(l);const k=e.raw[c];w?(i[d]=[i[d],w.replacement,k].join(""),$.length&&$.forEach(()=>{i.push("")})):i.push(k)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function OT(...[e,t,r]){if(Wm(r))return{replacement:r.tagName,getExtraValues:void 0}}function BT(e,t){return E5(e,t,OT)}function E(e,...t){const r=A5(e,t,()=>BT(e,t));return mv(r.strings,...r.values)}const RT={allowPolymorphicState:!1,errorHandler:void 0};function C5(e,t){const r=e.instanceState;je(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&je(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class LT extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function Km(){return e=>class extends LT{static type=e;_type=e;constructor(t){super(e,t)}}}function at(){return Km()}function jT(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=Km()([e,n].join("-"));return r[n]=o,r},{}):{}}function _T(e){return e?Qe(e,t=>t):{}}function F5(e,t){t in e||MT()(e,t)}function UT(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Z1(e,t){const r=e;function n(s){t?UT(s,e,e.tagName):F5(e,s)}function o(s,a){return n(a),r[a]}return new Proxy({},{get:o,set(s,a,u){n(a);const l=r[a];function c(h){s[a]=h,r[a]=h}const d=e.observablePropertyListenerMap[a];if(l!==u&&cf(l)&&d&&l.removeListener(d),cf(u))if(d)u.listen(!1,d);else{let h=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=h,u.listen(!1,h)}else cf(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return o(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function J1(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function Y1(e,t,r){return r?Fu(r,o=>({key:o,value:[e,t,o].join("-")}),{}):{}}function zT({hostClassNames:e,cssVars:t}){return{hostClasses:Qe(e,(r,n)=>({name:Re(n),selector:Re(`:host(.${n})`)})),cssVars:t}}function VT({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&je(t).forEach(i=>{const s=t[i],a=r[i];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(a):e.classList.remove(a))})}function qT({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:o}){function i(a){je(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:r,slotNames:n,testIds:o,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function On(...e){return Dt.isEmpty(e),t=>{const r=t;if(!F.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return WT({...r,options:{...r.options}})}}function WT(e){if(!F.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!F.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...RT,...e.options},r=jT(e.tagName,e.events),n=_T(e.hostClasses);e.hostClasses&&J1(e.tagName,e.hostClasses),e.cssVars&&J1(e.tagName,e.cssVars);const o=e.cssVars?Wn(e.cssVars):{},i=Y1(e.tagName,"slot",e.slotNames),s=Y1(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(zT({hostClassNames:n,cssVars:o})):e.styles||E``,u=e.render;function l(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:d}}const c=class extends TT{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return qT({element:this,eventsMap:r,cssVars:o,slotNamesMap:i,testIdsMap:s})}static assign=l;static events=r;static render=u;static hostClasses=n;static cssVars=o;static init=e;static slotNames=i;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const d=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(d);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");je(m).forEach(y=>{F5(this,y),this.instanceState[y]=m[y]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(d)instanceof Promise))throw new TypeError("init cannot be asynchronous");const h=u(d);if(h instanceof Promise)throw new TypeError("render cannot be asynchronous");return VT({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},h}catch(d){const h=Gs(d,`Failed to render ${e.tagName}`);return console.error(h),this._lastRenderError=h,t.errorHandler?.(h),qt(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const d=this.createRenderParams();if(e.init(d)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(d=>{F.hasKey(d,"destroy")&&F.isFunction(d.destroy)&&d.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const d=this.createRenderParams();if(e.cleanup(d)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(d){C5(this,d)}observablePropertyListenerMap={};instanceInputs=Z1(this,!1);instanceState=Z1(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:U3(e.tagName,{firstLetterCase:ou.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}class KT extends ms{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function GT(e){return new KT(e)}const X1=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},HT=Hn(class extends Zn{constructor(e){if(super(e),e.type!==qm.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let s=0;for(const a of e)o[s]=n?n(a,s):s,i[s]=r(a,s),s++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const o=ET(e),{values:i,keys:s}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=s,i;const a=this.ut??=[],u=[];let l,c,d=0,h=o.length-1,m=0,y=i.length-1;for(;d<=h&&m<=y;)if(o[d]===null)d++;else if(o[h]===null)h--;else if(a[d]===s[m])u[m]=pi(o[d],i[m]),d++,m++;else if(a[h]===s[y])u[y]=pi(o[h],i[y]),h--,y--;else if(a[d]===s[y])u[y]=pi(o[d],i[y]),Da(e,u[y+1],o[d]),d++,y--;else if(a[h]===s[m])u[m]=pi(o[h],i[m]),Da(e,o[d],o[h]),h--,m++;else if(l===void 0&&(l=X1(s,m,y),c=X1(a,d,h)),l.has(a[d]))if(l.has(a[h])){const w=c.get(s[m]),$=w!==void 0?o[w]:null;if($===null){const k=Da(e,o[d]);pi(k,i[m]),u[m]=k}else u[m]=pi($,i[m]),Da(e,o[d],$),o[w]=null;m++}else df(o[h]),h--;else df(o[d]),d++;for(;m<=y;){const w=Da(e,u[y+1]);pi(w,i[m]),u[m++]=w}for(;d<=h;){const w=o[d++];w!==null&&df(w)}return this.ut=s,AT(e,u),zr}}),ZT=HT;function Vu(e,t){return Bi(e,t),e.element}function JT(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Bi(e,t){const r=JT(e),n=r?`: in ${r}`:"";if(e.type!==qm.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function YT(e,t){return Hn(class extends Zn{element;constructor(r){super(r),this.element=_t.instanceOf(Vu(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),zr}})}const ho=YT("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const o=Vi(r,"allAttributesApplied",()=>new Set);je(t).forEach(i=>{if(i.toLowerCase()!==i)throw new Error(`Cannot assign attribute name with uppercase letters: ${i}`);o.add(i)}),o.forEach(i=>{const s=t[i];s==null||s===!1||s===Q?e.removeAttribute(i):s===""||s===!0?e.setAttribute(i,""):e.setAttribute(i,String(s))})});function XT(e){const t=Hn(class extends Zn{element;constructor(r){super(r),this.element=Vu(r,e)}render(r){return this.element.setAttribute(e,r),zr}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function j(e,t){return QT(e,t)}const QT=Hn(class extends Zn{element;lastListenerMetaData;constructor(e){super(e),this.element=Vu(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),zr}});function eN(e){return j("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const Q1="onDomCreated",Ri=Hn(class extends Zn{element;constructor(e){super(e),Bi(e,Q1)}update(e,[t]){Bi(e,Q1);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),eb="onDomRendered",tN=Hn(class extends Zn{constructor(e){super(e),Bi(e,eb)}update(e,[t]){Bi(e,eb);const r=e.element;return window.requestAnimationFrame(()=>t(r)),this.render(t)}render(e){}}),tb="onResize",M5=Hn(class extends Zn{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&rN(this.element,this.callback,e)});callback;constructor(e){super(e),Bi(e,tb)}update(e,[t]){Bi(e,tb),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function rN(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function Fr(e,t,r){return ST(e,()=>t,()=>r)}const{attributeDirective:nN}=XT("data-test-id"),Un=nN;function S5(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(t(o),On(...n)(r(o)))}function oN(e,t){return iN(void 0,e)}const iN=Hn(class extends Zn{element;constructor(e){super(e),this.element=Vu(e,"assign")}render(e,t){return C5(this.element,t),zr}}),sN={};function aN(e,t){return t.map((r,n)=>{const o=e[n],i=e[n+1];if(o&&i){const{shouldHaveTagNameHere:s}=T5(o,i);if(s&&F.isString(r))return{tagName:r,tagInterpolationKey:Vi(sN,r,()=>({tagName:r}))}}return r})}function T5(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function uN(...[e,t,r]){const n=z0(r)?r.definition:r,{isOpeningTag:o,shouldHaveTagNameHere:i}=T5(e,t),s=Wm(n);if(s&&i&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(i&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!i||!s?void 0:{replacement:n.tagName,getExtraValues(u){const l=z0(u)?u.inputs:void 0;return[o&&l?oN(l):void 0].filter(F.isTruthy)}}}function lN(e){}function cN(e){return E5(e.strings,e.values,uN,lN)}function g(e,...t){const r=aN(e,t),n=d6(e,...r),o=A5(e,r,()=>cN(n));return{...n,strings:o.strings,values:o.values}}function V0(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],i=(t??[""]).map((s,a)=>{const u=dN(s,n[a]);return`${s}${u}`});return iv(i.join(""))}function dN(e,t){return t._$litType$!=null||t._$litDirective$!=null?V0(t):Array.isArray(t)?t.map(n=>V0(n)).join(""):e.endsWith("=")?`"${t}"`:t}function N5(e){return Qe(e,(t,r)=>r instanceof Ue?Re(r.toString({format:"hex"})):N5(r))}const fN="dodgerblue";function q0(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function ff({background:e,foreground:t}){return{background:e??new Ue(q0(t)),foreground:t??new Ue(q0(e))}}var cc;(function(e){e.Dark="dark",e.Light="light"})(cc||(cc={}));function hN(e){return e==="black"?"white":"black"}const mN={black:{foregroundFaint1:new Ue("#ccc"),foregroundFaint2:new Ue("#eee")},white:{foregroundFaint1:new Ue("#ccc"),foregroundFaint2:new Ue("#eee")}},gN={black:{backgroundFaint1:new Ue("#666"),backgroundFaint2:new Ue("#444")},white:{backgroundFaint1:new Ue("#ccc"),backgroundFaint2:new Ue("#fafafa")}};function rb({themeColor:e=fN,themeStyle:t=cc.Light}={}){const r=new Ue(e),n=new Ue(t===cc.Dark?"black":"white"),o=q0(n),i=new Ue(o),s={nav:{hover:ff({background:r.clone().set({"hsl.l":93})}),active:ff({background:r.clone().set({"hsl.l":90})}),selected:ff({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...gN[hN(o)],foreground:i,...mN[o]}};return N5(s)}var zn;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(zn||(zn={}));async function nb(e=1){const t=new Ll;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function pN(e,t){return{element:e,children:P5(e)}}function P5(e,t,r){return bN(e).map(n=>{const o=P5(n);return{element:n,children:o}})}function bN(e){return[...e.children,...e.shadowRoot?.children??[]]}function hf(e){return e.matches(":focus")}function Gm(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:Gm(t)}function I5(e,t){if(t(e))return e;const r=Gm(e);if(r)return I5(r,t)}function ud(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const o=t.name,i=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${i}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${i}'.`;throw new Error(s)}return n}function yN(e){const t=Gm(e);return t&&I5(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function vN(e){let t=0,r=document.activeElement||void 0;for(;r;){if(e({depth:t,element:r}))return t;r=r.shadowRoot?.activeElement||void 0,r&&++t}return t}function wN({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const u=i.codePointAt(s);for(;a<r;)if(o.codePointAt(a++)===u)continue e;return!1}return!0}const $N=Ai(32);function Pl(e){return e.join($N)}function O5(e){if(!e.length)return[];const t=Pl(e),r=O5(e.slice(0,-1));return[t,...r]}const kN=["error","errors"];function xN(e){return kN.includes(e)}function DN({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Pl(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&xN(t),s=Pl(o.fullUrlBreadcrumbs);if(wN({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(u=>F.isString(u)?u:V0(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[s]){const u=O5(o.fullUrlBreadcrumbs);n(o),u.forEach(l=>r[l]=!0)}else r[s]=!1}),e.filter(o=>{const i=Pl(o.fullUrlBreadcrumbs),s=r[i];if(!F.isBoolean(s))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Hm extends Error{name="SpaRouterError"}class ob extends Hm{name="GlobalUrlEventsConsolidationError"}class AN extends Hm{name="SanitizationDepthMaxed"}Ne({paths:[""],search:Zt(it(void 0,ad({keys:"",values:[""]}))),hash:Zt(it(void 0,""))});const EN=Ne({basePath:Zt("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Zt(1,{alsoUndefined:!0}),disableWarnings:Zt(!1,{alsoUndefined:!0}),isPaused:Zt(!1,{alsoUndefined:!0})}),mf="://";function Zm(...e){const t=e.join("/"),[r,n=""]=t.includes(mf)?t.split(mf):["",t];let o=!1;const i=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(o)return s;const c=l[u+1];let d=a;const h=c?.startsWith("?"),m=!a.includes("?")&&h,y=c==="?";if(h||m){o=!0;let w=!1;const $=l.slice(u+2).reduce((k,A)=>(A.includes("#")&&(w=!0),w?k.concat(A):[k,A].join("&")),"");d=[a,c,y?$s({value:$,prefix:"&"}):$].join("")}return s.concat(d)},[]);return[r,r?mf:"",i.join("/")].join("")}var Vs;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Vs||(Vs={}));var qs;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(qs||(qs={}));const CN=Ne({encoding:Zt(it(void 0,Oi(Vs))),searchParamStrategy:Zt(it(void 0,Oi(qs)))});function gl(e,t){return e.map(r=>{if(r!=null)return Ds(String(r),t)}).filter(r=>r!=null)}function Ds(e,t){return t?.encoding===Vs.Decode?decodeURIComponent(e):t?.encoding===Vs.Encode?encodeURIComponent(e):e}const FN=Ne(ad({keys:"",values:[""]}));function MN(e,t,r){const n=r?.searchParamStrategy===qs.Clear?{}:Qe(e,(s,a)=>b3(a)),o=Qe(t,(s,a)=>{if(r?.searchParamStrategy===qs.Append){const u=n[s],l=F.isArray(u)?u:[u];if(a){const c=F.isArray(a)?a:[a];return gl([...l,...c],r)}else return gl(l,r)}else return F.isArray(a)?gl(a,r):a?gl([a],r):void 0});return Fc({...n,...o},(s,a)=>!!a)}function B5(e,t){return F.isString(e)&&!e.includes("?")?{}:(F.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(i=>{const[s,...a]=R3(i,"=");return[s,a.length?a.join("="):void 0]}).reduce((i,[s,a])=>{const u=R5({options:t,key:s,value:a}),l=Vi(i,u.key,()=>[]);return a!=null&&l.push(u.value),i},{})}function SN(e){if(e!=null)return F.isArray(e)?[...e]:e===""?[]:[e]}function TN(e,t){const r=$o(Object.entries(e),([n,o])=>{const i=SN(o);return i?.length?i.map(s=>{const a=R5({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return r.length?pr({value:r.join("&"),prefix:"?"}):""}function R5({options:e,key:t,value:r}){return{key:Ds(t,e),value:Ds(String(r),e)}}function L5({hash:e,hostname:t,password:r,pathname:n,port:o,protocol:i,search:s,username:a}){return[i?i+"://":"",a?a+":":"",r?r+"@":"",ld({hostname:t,port:o}),Jm({hash:e,pathname:n,search:s})].join("")}function j5({pathname:e}){const t=$s({value:e,prefix:"/"});return t?t.split("/"):[]}function Jm({hash:e,pathname:t,search:r}){return[pr({value:t,prefix:"/"}),r?pr({value:r,prefix:"?"}):"",e?pr({value:e,prefix:"#"}):""].join("")}function ld({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function _5({hostname:e,port:t,protocol:r}){return[r,ld({hostname:e,port:t})].filter(F.isTruthy).join("://")}function As(e,t){const r=F.isString(e)?$s({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),o=n?pr({value:Ds(n,t),prefix:"#"}):"",i=r.replace(/#[^#]*$/,""),s=i.replace(/^[^?]*(?:\?|$)/,""),a=s?pr({value:Ds(s,t),prefix:"?"}):"",u=i.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=c.replace(/@.*/,""),h=c.replace(/^[^@]*@/,""),m=d!==h,[y,...w]=m?d.split(":").reverse():[],$=w.toReversed().join("").replace(/[/:]/g,"")||"",k=y?.replace(/[/:]/g,"")||"",A=B3(h.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),T=A[0]?.endsWith("]")?"":A[1]===":"&&A[0]||"",q=h.replace(new RegExp(`:${T}($|/)`),"$1").replace(/\/.*/,""),oe=h.replace(/^[^/]*(\/|$)/,"$1"),De=Ds(oe.replace(/^[^/]*(?:\/|$)/,"/"),t),de=ld({hostname:q,port:T}),$e=_5({hostname:q,port:T,protocol:l}),Ge=L5({hash:o,hostname:q,password:k,pathname:De,port:T,protocol:l,search:a,username:$}),He=B5(a),St=j5({pathname:De});return{fullPath:Jm({hash:o,pathname:De,search:a}),hash:o,host:de,hostname:q,href:Ge,origin:$e,password:k,pathname:De,paths:St,port:T,protocol:l,search:a,searchParams:He,username:$}}Ne({hash:Zt(it(void 0,"")),search:Zt(it(void 0,"",ad({keys:"",values:it(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:Zt(it(void 0,"")),pathname:Zt(it(void 0,"")),paths:Zt(it(void 0,[""])),protocol:Zt(it(void 0,"")),username:Zt(it(void 0,"")),password:Zt(it(void 0,"")),port:Zt(it(void 0,"",-1))});function NN(e,t,r){const n=!!r,o=t==null||_o(t,CN,{allowExtraKeys:!1}),i=o?As(""):F.instanceOf(e,URL)||F.isString(e)?As(e):e,s=o?e:t,a=F.isString(s)&&s.startsWith("."),u=F.isString(s)||F.instanceOf(s,URL)?Fc(As(s),(w,$)=>F.isTruthy($)):s,l=n?r:o?t:void 0,c=Qe(i,(w,$)=>{if(!F.hasKey(u,w))return $;const k=u[w];return F.isNumber(k)?String(k):F.isString(k)?w==="hash"&&k?pr({value:k,prefix:"#"}):w==="pathname"?pr({value:k,prefix:"/"}):k:$});F.hasKey(u,"paths")&&u.paths&&(c.pathname=Zm(a?i.pathname:"",...u.paths));const d=F.isString(u.search)?B5(pr({value:u.search,prefix:"?"})):yn(u.search||{}),h=MN(c.searchParams,d,{...l,encoding:Vs.None}),m=TN(h,l);return{...c,searchParams:h,search:m,paths:j5(c),fullPath:Jm(c),host:ld(c),origin:_5(c),href:L5({...c,search:m})}}const PN=Ne({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:FN,hash:"",fullPath:"/",href:"/"});({...PN.default});const IN=0;function U5(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==IN)}const cd="locationchange",lo=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const ib=lo?.pushState;function sb(...e){if(!ib)return;const t=ib.apply(lo,e);return globalThis.dispatchEvent(new Event(cd)),t}const ab=lo?.replaceState;function ub(...e){if(!ab)return;const t=ab.apply(lo,e);return globalThis.dispatchEvent(new Event(cd)),t}function ON(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!lo)){{if(lo.pushState===sb)throw new ob("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(lo.replaceState===ub)throw new ob("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,lo.pushState=sb,lo.replaceState=ub,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(cd))})}}function pl(e,t){const r=As(e),n=$s({value:$s({value:r.pathname,prefix:pr({value:t||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],i=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?$s({value:r.hash,prefix:"#"}):void 0;return{paths:o,search:i,hash:s}}class Ym{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){uc(t,EN),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new v5({defaultValue:r,equalityCheck:()=>!1}),ON(),this.removeGlobalListener=Fh(globalThis,cd,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new AN("Looping route sanitization detected; aborting window URL change listener.");const n=pl(globalThis.location.href,this.params.basePath),o=t.sanitizeRoute(n);F.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Zm(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(pl(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...pl(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),i=this.routeIncludesBasePath(pl(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return NN(globalThis.location.href,{paths:i.paths,search:i.search,hash:i.hash?pr({value:i.hash,prefix:"#"}):""},{searchParamStrategy:qs.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:o}=As(n);return this.params.isPaused||!r.force&&F.jsonEquals(As(globalThis.location.href).fullPath,o)?!1:r.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(t,r){return U5(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new Hm(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function BN(e){return new Ym({basePath:e,sanitizeRoute(t){return{paths:RN(t.paths),hash:void 0,search:void 0}}})}function RN(e){const t=e[0];if(F.isEnumValue(t,Ar)){if(t===Ar.Book)return[Ar.Book,...e.slice(1)];if(t===Ar.Search)return e[1]?[t,e[1]]:[Ar.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Ss.paths}const dc=Km()("element-book-change-route"),lb="vira-",et=S5({assertInputs:e=>{if(!e.tagName.startsWith(lb))throw new Error(`Tag name should start with '${lb}' but got '${e.tagName}'`)}});var ke=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Number="number",e.Select="select",e.Checkbox="checkbox",e))(ke||{});function bl(e,t){if(e)return t?Ah({value:e,suffix:"*"}):e}function LN(e){return nu(e).every(t=>t.isHidden||!t.isRequired?!0:F.isString(t.value)?!!t.value:t.value!=null)}const x=Wn({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function ce({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function jN(e){try{if(!e)throw new Error("invalid empty color");return new Ue(e)}catch{throw new Error(`Invalid color: ${b(e)}`)}}function cb(e,t){const r=je(t).map(n=>{const o=t[n],i=jN(o);return`${x[n].name}: ${i.toString()};`}).join(" ");return ce({name:e.name,svgTemplate:g`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const _N=ce({name:"Bell24Icon",svgTemplate:g`
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
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
        </svg>
    `}),UN=ce({name:"Chat24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Xm=ce({name:"Check24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),zN=ce({name:"ChevronDown24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${x["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${x["vira-icon-stroke-width"].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),Qm=ce({name:"ChevronUp24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${x["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${x["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),z5=ce({name:"CloseX24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${x["vira-icon-fill-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),VN=ce({name:"Commit24Icon",svgTemplate:g`
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
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),W0=ce({name:"Copy24Icon",svgTemplate:g`
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
                fill=${x["vira-icon-fill-color"].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),qN=ce({name:"Document24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),WN=ce({name:"DocumentSearch24Icon",svgTemplate:g`
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
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
        </svg>
    `}),KN=ce({name:"DoubleChevron24Icon",svgTemplate:g`
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
                fill=${x["vira-icon-fill-color"].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),V5=ce({name:"Element16Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),un=ce({name:"Element24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),GN=ce({name:"ExternalLink24Icon",svgTemplate:g`
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
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),q5=ce({name:"EyeClosed24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${x["vira-icon-fill-color"].value}
            stroke=${x["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${x["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),W5=ce({name:"EyeOpen24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${x["vira-icon-fill-color"].value}
            stroke=${x["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${x["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),HN=ce({name:"Filter24Icon",svgTemplate:g`
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
                fill=${x["vira-icon-fill-color"].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),ZN=ce({name:"Link24Icon",svgTemplate:g`
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
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />

            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
        </svg>
    `}),K5=ce({name:"Loader24Icon",svgTemplate:g`
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
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),bo=Wn({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),JN=E`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${bo["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Li=ce({name:"LoaderAnimated24Icon",svgTemplate:g`
        <style>
            ${JN}
        </style>
        ${K5.svgTemplate}
    `}),YN=ce({name:"Lock24Icon",svgTemplate:g`
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
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${x["vira-icon-stroke-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width="calc(${x["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${x["vira-icon-stroke-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Ga=ce({name:"Options24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${x["vira-icon-fill-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),XN=ce({name:"Pencil24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),QN=ce({name:"Shield24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
        </svg>
    `}),eP=ce({name:"SortAscending24Icon",svgTemplate:g`
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
                fill=${x["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),tP=ce({name:"SortDescending24Icon",svgTemplate:g`
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
                fill=${x["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),rP=ce({name:"SpeakerLoud24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
        </svg>
    `}),nP=ce({name:"SpeakerMedium24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
        </svg>
    `}),oP=ce({name:"SpeakerMuted24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
        </svg>
    `}),iP=ce({name:"SpeakerQuiet24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
        </svg>
    `}),sP=ce({name:"Star24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
        </svg>
    `}),fc=ce({name:"StatusFailure24Icon",svgTemplate:g`
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
                fill=${x["vira-icon-fill-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),aP=ce({name:"StatusInProgress24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${x["vira-icon-fill-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${x["vira-icon-stroke-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width="calc(${x["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${x["vira-icon-stroke-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width="calc(${x["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${x["vira-icon-stroke-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width="calc(${x["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),uP=ce({name:"StatusSuccess24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${x["vira-icon-fill-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),lP=ce({name:"StatusUnknown24Icon",svgTemplate:g`
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
                fill=${x["vira-icon-fill-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${x["vira-icon-stroke-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width="calc(${x["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),cP=ce({name:"StatusWarning24Icon",svgTemplate:g`
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
                fill=${x["vira-icon-fill-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${x["vira-icon-stroke-color"].value}
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width="calc(${x["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),dP=ce({name:"Upload24Icon",svgTemplate:g`
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
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
                fill=${x["vira-icon-fill-color"].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),G5=ce({name:"X24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${x["vira-icon-stroke-color"].value}
                stroke-width=${x["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),K0={Bell24Icon:_N,Chat24Icon:UN,Check24Icon:Xm,ChevronDown24Icon:zN,ChevronUp24Icon:Qm,CloseX24Icon:z5,Commit24Icon:VN,Copy24Icon:W0,Document24Icon:qN,DocumentSearch24Icon:WN,DoubleChevron24Icon:KN,Element16Icon:V5,Element24Icon:un,ExternalLink24Icon:GN,EyeClosed24Icon:q5,EyeOpen24Icon:W5,Filter24Icon:HN,Link24Icon:ZN,Loader24Icon:K5,LoaderAnimated24Icon:Li,Lock24Icon:YN,Options24Icon:Ga,Pencil24Icon:XN,Shield24Icon:QN,SortAscending24Icon:eP,SortDescending24Icon:tP,SpeakerLoud24Icon:rP,SpeakerMedium24Icon:nP,SpeakerMuted24Icon:oP,SpeakerQuiet24Icon:iP,Star24Icon:sP,StatusFailure24Icon:fc,StatusInProgress24Icon:aP,StatusSuccess24Icon:uP,StatusUnknown24Icon:lP,StatusWarning24Icon:cP,Upload24Icon:dP,X24Icon:G5},ji=E`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`;function db(e){return F.isPrimitive(e)||e instanceof jo?String(e):e.default}function Ln(e,t,r,n){const o=`${r.prefix}-default-fg`,i=`${r.prefix}-default-bg`;if(F.isPrimitive(t)||t instanceof jo)return t;if("refDefaultBackground"in t)return`var(--${i}, ${db(r.background)})`;if("refDefaultForeground"in t)return`var(--${o}, ${db(r.foreground)})`;if("refBackground"in t||"refForeground"in t){const s=F.hasKey(t,"refBackground")?"refBackground":F.hasKey(t,"refForeground")?"refForeground":void 0,a=s&&F.hasKey(t,s)?t[s]:void 0,u=s==="refBackground"?"background":"foreground",l=a&&n[a];if(!l)throw new Error(`Color theme ${s} reference '${a}' does not exist. (Referenced from '${e}'.)`);const c=l[u]||(u==="foreground"?Ln(o,r.foreground,r,n):Ln(i,r.background,r,n));return`var(--${a}-${u==="foreground"?"fg":"bg"}, ${Ln(a,c,r,n)})`}else return t.value}const Ro="theme-default";function H5(e,t){try{if(Ro in t)throw new Error(`Cannot define theme color by name '${Ro}', it is used internally.`);const r=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,o=`${e.prefix}-default-inverse-fg`,i=`${e.prefix}-default-inverse-bg`,s={[r]:Ln(r,e.foreground,e,t),[n]:Ln(n,e.background,e,t),[o]:Ln(o,e.background,e,t),[i]:Ln(i,e.foreground,e,t)},a=Wn(s),u=An(t).reduce((y,[w,$])=>{const k=fb(w),A=$.foreground?Ln([w,"foreground"].join(" "),$.foreground,e,t):`var(${a[r].name}, ${a[r].default})`,T=$.background?Ln([w,"background"].join(" "),$.background,e,t):`var(${a[n].name}, ${a[n].default})`;return y[k.foreground]=A,y[k.background]=T,y[k.foregroundInverse]=`var(--${k.background}, ${T})`,y[k.backgroundInverse]=`var(--${k.foreground}, ${A})`,y},{}),l=Wn(u),c={},d={};An(t).forEach(([y,w])=>{Dt.isString(y);const $=fb(y),k=l[$.foreground],A=l[$.background],T=l[$.foregroundInverse],B=l[$.backgroundInverse];Dt.isDefined(k),Dt.isDefined(A),Dt.isDefined(T),Dt.isDefined(B),c[y]={foreground:k,background:A,init:w,name:y},d[y]={foreground:T,background:B,init:w,name:y}});const h={foreground:a[r],background:a[n],init:e,name:Ro},m={...h,foreground:a[o],background:a[i]};return{colors:{[Ro]:h,...c},inverse:{[Ro]:m,...d},init:{colors:t,default:e}}}catch(r){throw globalThis.setTimeout(()=>nv.error(r)),r}}function fb(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}function gf({originalTheme:e,layerKey:t,themeColor:r,override:n,overrideValues:o}){const i=n?.[t];i&&(o[String(r[t].name)]=String(Ln(t,i,e.init.default,e.init.colors)))}function fP(e,t,{defaultOverride:r,colorOverrides:n}){const o={};r&&je(r).forEach(u=>{gf({originalTheme:e,layerKey:u,override:r,themeColor:e.colors[Ro],overrideValues:o})});const i={};n&&An(n).forEach(([u,l])=>{const c=e.colors[u];if(!c)throw new Error(`Override color name '${u}' does not exist in the theme being overridden.`);gf({originalTheme:e,layerKey:"foreground",override:l,themeColor:c,overrideValues:i}),gf({originalTheme:e,layerKey:"background",override:l,themeColor:c,overrideValues:i})});const s=Qe(e.init.colors,(u,l)=>{const c=n?.[u];return{...l,...c}}),a=H5({...e.init.default,...r},s);return{name:t,overrides:{...o,...i},originalTheme:e,asTheme:a}}const f=Wn({"vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d5","vira-red-20":"#ffc1bc","vira-red-30":"#ffa7a2","vira-red-40":"#ff8886","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001d","vira-red-80":"#a60012","vira-red-90":"#760003","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdda3","vira-orange-20":"#ffc66c","vira-orange-30":"#ffac36","vira-orange-40":"#f79300","vira-orange-50":"#e17e00","vira-orange-60":"#c96900","vira-orange-70":"#ab5600","vira-orange-80":"#8b4100","vira-orange-90":"#6a2500","vira-yellow-5":"#f7eeca","vira-yellow-10":"#f6e192","vira-yellow-20":"#f2cd20","vira-yellow-30":"#dfbb00","vira-yellow-40":"#cca800","vira-yellow-50":"#b59500","vira-yellow-60":"#9d8100","vira-yellow-70":"#856b00","vira-yellow-80":"#6a5400","vira-yellow-90":"#4c3b00","vira-green-5":"#d3f8cf","vira-green-10":"#a3f59b","vira-green-20":"#4fed46","vira-green-30":"#36d92e","vira-green-40":"#0dc501","vira-green-50":"#00af00","vira-green-60":"#009800","vira-green-70":"#007f00","vira-green-80":"#006400","vira-green-90":"#004700","vira-teal-5":"#d4f5f3","vira-teal-10":"#a1efeb","vira-teal-20":"#45e5de","vira-teal-30":"#2ad2cc","vira-teal-40":"#04beb8","vira-teal-50":"#00a9a3","vira-teal-60":"#00928d","vira-teal-70":"#007a77","vira-teal-80":"#00615e","vira-teal-90":"#004442","vira-blue-5":"#daf2ff","vira-blue-10":"#bde8ff","vira-blue-20":"#98d8ff","vira-blue-30":"#77c6ff","vira-blue-40":"#4cb2ff","vira-blue-50":"#299cf9","vira-blue-60":"#0086e0","vira-blue-70":"#006ec7","vira-blue-80":"#0054aa","vira-blue-90":"#00358a","vira-purple-5":"#f6eaff","vira-purple-10":"#eddaff","vira-purple-20":"#e6c3ff","vira-purple-30":"#d7adff","vira-purple-40":"#c795ff","vira-purple-50":"#b77aff","vira-purple-60":"#a55aff","vira-purple-70":"#8f3de9","vira-purple-80":"#7514cb","vira-purple-90":"#500095","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5fa","vira-pink-20":"#ffbaf4","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb7","vira-pink-60":"#cc59a2","vira-pink-70":"#b2418b","vira-pink-80":"#962471","vira-pink-90":"#6e004f","vira-grey-5":"#eceff0","vira-grey-10":"#dce2e6","vira-grey-20":"#c7d2d7","vira-grey-30":"#b6c0c5","vira-grey-40":"#a4adb2","vira-grey-50":"#909a9f","vira-grey-60":"#7c868a","vira-grey-70":"#677074","vira-grey-80":"#50595d","vira-grey-90":"#363f43"}),rt=H5({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:f["vira-red-90"]},"vira-red-foreground-body":{foreground:f["vira-red-80"]},"vira-red-foreground-non-body":{foreground:f["vira-red-60"]},"vira-red-foreground-header":{foreground:f["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:f["vira-red-30"]},"vira-red-foreground-decoration":{foreground:f["vira-red-20"]},"vira-red-foreground-invisible":{foreground:f["vira-red-10"]},"vira-red-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-red-90"]},"vira-red-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-red-80"]},"vira-red-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-red-60"]},"vira-red-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-red-40"]},"vira-red-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-red-30"]},"vira-red-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-red-20"]},"vira-red-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-red-5"]},"vira-red-on-self-body":{foreground:f["vira-red-90"],background:"#ffe9e6"},"vira-red-on-self-non-body":{foreground:f["vira-red-80"],background:"#ffe9e6"},"vira-red-on-self-header":{foreground:f["vira-red-60"],background:"#ffe9e6"},"vira-red-on-self-placeholder":{foreground:f["vira-red-50"],background:"#ffe9e6"},"vira-red-on-self-decoration":{foreground:f["vira-red-30"],background:"#ffe9e6"},"vira-red-on-self-invisible":{foreground:f["vira-red-20"],background:"#ffe9e6"},"vira-orange-foreground-small-body":{foreground:f["vira-orange-90"]},"vira-orange-foreground-body":{foreground:f["vira-orange-80"]},"vira-orange-foreground-non-body":{foreground:f["vira-orange-60"]},"vira-orange-foreground-header":{foreground:f["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:f["vira-orange-40"]},"vira-orange-foreground-decoration":{foreground:f["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:f["vira-orange-10"]},"vira-orange-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-orange-90"]},"vira-orange-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-orange-80"]},"vira-orange-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-orange-60"]},"vira-orange-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-orange-40"]},"vira-orange-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-orange-30"]},"vira-orange-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-orange-20"]},"vira-orange-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-orange-5"]},"vira-orange-on-self-body":{foreground:f["vira-orange-90"],background:"#ffebd1"},"vira-orange-on-self-non-body":{foreground:f["vira-orange-80"],background:"#ffebd1"},"vira-orange-on-self-header":{foreground:f["vira-orange-60"],background:"#ffebd1"},"vira-orange-on-self-placeholder":{foreground:f["vira-orange-50"],background:"#ffebd1"},"vira-orange-on-self-decoration":{foreground:f["vira-orange-30"],background:"#ffebd1"},"vira-orange-on-self-invisible":{foreground:f["vira-orange-20"],background:"#ffebd1"},"vira-yellow-foreground-small-body":{foreground:f["vira-yellow-90"]},"vira-yellow-foreground-body":{foreground:f["vira-yellow-80"]},"vira-yellow-foreground-non-body":{foreground:f["vira-yellow-60"]},"vira-yellow-foreground-header":{foreground:f["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:f["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:f["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:f["vira-yellow-5"]},"vira-yellow-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-90"]},"vira-yellow-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-70"]},"vira-yellow-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-60"]},"vira-yellow-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-40"]},"vira-yellow-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-30"]},"vira-yellow-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-20"]},"vira-yellow-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:f["vira-yellow-90"],background:"#f7eeca"},"vira-yellow-on-self-non-body":{foreground:f["vira-yellow-80"],background:"#f7eeca"},"vira-yellow-on-self-header":{foreground:f["vira-yellow-60"],background:"#f7eeca"},"vira-yellow-on-self-placeholder":{foreground:f["vira-yellow-50"],background:"#f7eeca"},"vira-yellow-on-self-decoration":{foreground:f["vira-yellow-30"],background:"#f7eeca"},"vira-yellow-on-self-invisible":{foreground:f["vira-yellow-20"],background:"#f7eeca"},"vira-green-foreground-small-body":{foreground:f["vira-green-90"]},"vira-green-foreground-body":{foreground:f["vira-green-80"]},"vira-green-foreground-non-body":{foreground:f["vira-green-60"]},"vira-green-foreground-header":{foreground:f["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:f["vira-green-30"]},"vira-green-foreground-decoration":{foreground:f["vira-green-20"]},"vira-green-foreground-invisible":{foreground:f["vira-green-5"]},"vira-green-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-green-90"]},"vira-green-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-green-70"]},"vira-green-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-green-60"]},"vira-green-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-green-40"]},"vira-green-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-green-30"]},"vira-green-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-green-20"]},"vira-green-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-green-5"]},"vira-green-on-self-body":{foreground:f["vira-green-90"],background:"#d3f8cf"},"vira-green-on-self-non-body":{foreground:f["vira-green-70"],background:"#d3f8cf"},"vira-green-on-self-header":{foreground:f["vira-green-60"],background:"#d3f8cf"},"vira-green-on-self-placeholder":{foreground:f["vira-green-40"],background:"#d3f8cf"},"vira-green-on-self-decoration":{foreground:f["vira-green-30"],background:"#d3f8cf"},"vira-green-on-self-invisible":{foreground:f["vira-green-20"],background:"#d3f8cf"},"vira-teal-foreground-small-body":{foreground:f["vira-teal-90"]},"vira-teal-foreground-body":{foreground:f["vira-teal-80"]},"vira-teal-foreground-non-body":{foreground:f["vira-teal-60"]},"vira-teal-foreground-header":{foreground:f["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:f["vira-teal-30"]},"vira-teal-foreground-decoration":{foreground:f["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:f["vira-teal-5"]},"vira-teal-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-teal-90"]},"vira-teal-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-teal-80"]},"vira-teal-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-teal-60"]},"vira-teal-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-teal-40"]},"vira-teal-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-teal-30"]},"vira-teal-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-teal-20"]},"vira-teal-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-teal-5"]},"vira-teal-on-self-body":{foreground:f["vira-teal-90"],background:"#d4f5f3"},"vira-teal-on-self-non-body":{foreground:f["vira-teal-70"],background:"#d4f5f3"},"vira-teal-on-self-header":{foreground:f["vira-teal-60"],background:"#d4f5f3"},"vira-teal-on-self-placeholder":{foreground:f["vira-teal-40"],background:"#d4f5f3"},"vira-teal-on-self-decoration":{foreground:f["vira-teal-30"],background:"#d4f5f3"},"vira-teal-on-self-invisible":{foreground:f["vira-teal-10"],background:"#d4f5f3"},"vira-blue-foreground-small-body":{foreground:f["vira-blue-90"]},"vira-blue-foreground-body":{foreground:f["vira-blue-80"]},"vira-blue-foreground-non-body":{foreground:f["vira-blue-70"]},"vira-blue-foreground-header":{foreground:f["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:f["vira-blue-30"]},"vira-blue-foreground-decoration":{foreground:f["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:f["vira-blue-10"]},"vira-blue-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-blue-90"]},"vira-blue-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-blue-80"]},"vira-blue-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-blue-60"]},"vira-blue-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-blue-40"]},"vira-blue-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-blue-30"]},"vira-blue-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-blue-20"]},"vira-blue-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-blue-5"]},"vira-blue-on-self-body":{foreground:f["vira-blue-90"],background:"#daf2ff"},"vira-blue-on-self-non-body":{foreground:f["vira-blue-80"],background:"#daf2ff"},"vira-blue-on-self-header":{foreground:f["vira-blue-60"],background:"#daf2ff"},"vira-blue-on-self-placeholder":{foreground:f["vira-blue-50"],background:"#daf2ff"},"vira-blue-on-self-decoration":{foreground:f["vira-blue-30"],background:"#daf2ff"},"vira-blue-on-self-invisible":{foreground:f["vira-blue-10"],background:"#daf2ff"},"vira-purple-foreground-small-body":{foreground:f["vira-purple-90"]},"vira-purple-foreground-body":{foreground:f["vira-purple-80"]},"vira-purple-foreground-non-body":{foreground:f["vira-purple-60"]},"vira-purple-foreground-header":{foreground:f["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:f["vira-purple-30"]},"vira-purple-foreground-decoration":{foreground:f["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:f["vira-purple-5"]},"vira-purple-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-purple-90"]},"vira-purple-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-purple-80"]},"vira-purple-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-purple-60"]},"vira-purple-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-purple-40"]},"vira-purple-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-purple-30"]},"vira-purple-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-purple-20"]},"vira-purple-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-purple-5"]},"vira-purple-on-self-body":{foreground:f["vira-purple-90"],background:"#f6eaff"},"vira-purple-on-self-non-body":{foreground:f["vira-purple-70"],background:"#f6eaff"},"vira-purple-on-self-header":{foreground:f["vira-purple-60"],background:"#f6eaff"},"vira-purple-on-self-placeholder":{foreground:f["vira-purple-40"],background:"#f6eaff"},"vira-purple-on-self-decoration":{foreground:f["vira-purple-30"],background:"#f6eaff"},"vira-purple-on-self-invisible":{foreground:f["vira-purple-10"],background:"#f6eaff"},"vira-pink-foreground-small-body":{foreground:f["vira-pink-90"]},"vira-pink-foreground-body":{foreground:f["vira-pink-80"]},"vira-pink-foreground-non-body":{foreground:f["vira-pink-60"]},"vira-pink-foreground-header":{foreground:f["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:f["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:f["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:f["vira-pink-10"]},"vira-pink-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-pink-90"]},"vira-pink-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-pink-80"]},"vira-pink-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-pink-60"]},"vira-pink-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-pink-40"]},"vira-pink-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-pink-30"]},"vira-pink-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-pink-20"]},"vira-pink-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-pink-5"]},"vira-pink-on-self-body":{foreground:f["vira-pink-90"],background:"#ffe7fb"},"vira-pink-on-self-non-body":{foreground:f["vira-pink-80"],background:"#ffe7fb"},"vira-pink-on-self-header":{foreground:f["vira-pink-60"],background:"#ffe7fb"},"vira-pink-on-self-placeholder":{foreground:f["vira-pink-50"],background:"#ffe7fb"},"vira-pink-on-self-decoration":{foreground:f["vira-pink-30"],background:"#ffe7fb"},"vira-pink-on-self-invisible":{foreground:f["vira-pink-20"],background:"#ffe7fb"},"vira-grey-foreground-small-body":{foreground:f["vira-grey-90"]},"vira-grey-foreground-body":{foreground:f["vira-grey-80"]},"vira-grey-foreground-non-body":{foreground:f["vira-grey-60"]},"vira-grey-foreground-header":{foreground:f["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:f["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:f["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:f["vira-grey-5"]},"vira-grey-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-grey-90"]},"vira-grey-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-grey-80"]},"vira-grey-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-grey-60"]},"vira-grey-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-grey-40"]},"vira-grey-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-grey-30"]},"vira-grey-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-grey-20"]},"vira-grey-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-grey-5"]},"vira-grey-on-self-body":{foreground:f["vira-grey-90"],background:"#eceff0"},"vira-grey-on-self-non-body":{foreground:f["vira-grey-70"],background:"#eceff0"},"vira-grey-on-self-header":{foreground:f["vira-grey-60"],background:"#eceff0"},"vira-grey-on-self-placeholder":{foreground:f["vira-grey-40"],background:"#eceff0"},"vira-grey-on-self-decoration":{foreground:f["vira-grey-30"],background:"#eceff0"},"vira-grey-on-self-invisible":{foreground:f["vira-grey-10"],background:"#eceff0"}}),hP=fP(rt,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:f["vira-red-5"],background:"black"},"vira-red-foreground-body":{foreground:f["vira-red-20"],background:"black"},"vira-red-foreground-non-body":{foreground:f["vira-red-30"],background:"black"},"vira-red-foreground-header":{background:"black"},"vira-red-foreground-placeholder":{foreground:f["vira-red-60"],background:"black"},"vira-red-foreground-decoration":{foreground:f["vira-red-80"],background:"black"},"vira-red-foreground-invisible":{foreground:f["vira-red-90"],background:"black"},"vira-red-background-small-body":{foreground:"black",background:f["vira-red-5"]},"vira-red-background-body":{foreground:"black",background:f["vira-red-20"]},"vira-red-background-non-body":{foreground:"black",background:f["vira-red-30"]},"vira-red-background-header":{foreground:"black",background:f["vira-red-50"]},"vira-red-background-placeholder":{foreground:"black",background:f["vira-red-60"]},"vira-red-background-decoration":{foreground:"black",background:f["vira-red-80"]},"vira-red-background-invisible":{foreground:"black",background:f["vira-red-90"]},"vira-red-on-self-body":{foreground:f["vira-red-10"],background:"#760003"},"vira-red-on-self-non-body":{foreground:f["vira-red-20"],background:"#760003"},"vira-red-on-self-header":{foreground:f["vira-red-40"],background:"#760003"},"vira-red-on-self-placeholder":{background:"#760003"},"vira-red-on-self-decoration":{foreground:f["vira-red-70"],background:"#760003"},"vira-red-on-self-invisible":{foreground:f["vira-red-80"],background:"#760003"},"vira-orange-foreground-small-body":{foreground:f["vira-orange-5"],background:"black"},"vira-orange-foreground-body":{foreground:f["vira-orange-20"],background:"black"},"vira-orange-foreground-non-body":{foreground:f["vira-orange-30"],background:"black"},"vira-orange-foreground-header":{background:"black"},"vira-orange-foreground-placeholder":{foreground:f["vira-orange-60"],background:"black"},"vira-orange-foreground-decoration":{foreground:f["vira-orange-80"],background:"black"},"vira-orange-foreground-invisible":{foreground:f["vira-orange-90"],background:"black"},"vira-orange-background-small-body":{foreground:"black",background:f["vira-orange-5"]},"vira-orange-background-body":{foreground:"black",background:f["vira-orange-20"]},"vira-orange-background-non-body":{foreground:"black",background:f["vira-orange-30"]},"vira-orange-background-header":{foreground:"black",background:f["vira-orange-50"]},"vira-orange-background-placeholder":{foreground:"black",background:f["vira-orange-60"]},"vira-orange-background-decoration":{foreground:"black",background:f["vira-orange-80"]},"vira-orange-background-invisible":{foreground:"black",background:f["vira-orange-90"]},"vira-orange-on-self-body":{foreground:f["vira-orange-10"],background:"#6a2500"},"vira-orange-on-self-non-body":{foreground:f["vira-orange-20"],background:"#6a2500"},"vira-orange-on-self-header":{foreground:f["vira-orange-40"],background:"#6a2500"},"vira-orange-on-self-placeholder":{background:"#6a2500"},"vira-orange-on-self-decoration":{foreground:f["vira-orange-70"],background:"#6a2500"},"vira-orange-on-self-invisible":{foreground:f["vira-orange-80"],background:"#6a2500"},"vira-yellow-foreground-small-body":{foreground:f["vira-yellow-5"],background:"black"},"vira-yellow-foreground-body":{foreground:f["vira-yellow-20"],background:"black"},"vira-yellow-foreground-non-body":{foreground:f["vira-yellow-30"],background:"black"},"vira-yellow-foreground-header":{background:"black"},"vira-yellow-foreground-placeholder":{foreground:f["vira-yellow-60"],background:"black"},"vira-yellow-foreground-decoration":{foreground:f["vira-yellow-80"],background:"black"},"vira-yellow-foreground-invisible":{foreground:f["vira-yellow-90"],background:"black"},"vira-yellow-background-small-body":{foreground:"black",background:f["vira-yellow-5"]},"vira-yellow-background-body":{foreground:"black",background:f["vira-yellow-20"]},"vira-yellow-background-non-body":{foreground:"black",background:f["vira-yellow-30"]},"vira-yellow-background-header":{foreground:"black",background:f["vira-yellow-50"]},"vira-yellow-background-placeholder":{foreground:"black",background:f["vira-yellow-60"]},"vira-yellow-background-decoration":{foreground:"black",background:f["vira-yellow-80"]},"vira-yellow-background-invisible":{foreground:"black",background:f["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:f["vira-yellow-10"],background:"#4c3b00"},"vira-yellow-on-self-non-body":{foreground:f["vira-yellow-20"],background:"#4c3b00"},"vira-yellow-on-self-header":{foreground:f["vira-yellow-40"],background:"#4c3b00"},"vira-yellow-on-self-placeholder":{background:"#4c3b00"},"vira-yellow-on-self-decoration":{foreground:f["vira-yellow-70"],background:"#4c3b00"},"vira-yellow-on-self-invisible":{foreground:f["vira-yellow-80"],background:"#4c3b00"},"vira-green-foreground-small-body":{foreground:f["vira-green-5"],background:"black"},"vira-green-foreground-body":{foreground:f["vira-green-20"],background:"black"},"vira-green-foreground-non-body":{foreground:f["vira-green-30"],background:"black"},"vira-green-foreground-header":{background:"black"},"vira-green-foreground-placeholder":{foreground:f["vira-green-60"],background:"black"},"vira-green-foreground-decoration":{foreground:f["vira-green-80"],background:"black"},"vira-green-foreground-invisible":{foreground:f["vira-green-90"],background:"black"},"vira-green-background-small-body":{foreground:"black",background:f["vira-green-5"]},"vira-green-background-body":{foreground:"black",background:f["vira-green-20"]},"vira-green-background-non-body":{foreground:"black",background:f["vira-green-30"]},"vira-green-background-header":{foreground:"black",background:f["vira-green-50"]},"vira-green-background-placeholder":{foreground:"black",background:f["vira-green-60"]},"vira-green-background-decoration":{foreground:"black",background:f["vira-green-80"]},"vira-green-background-invisible":{foreground:"black",background:f["vira-green-90"]},"vira-green-on-self-body":{foreground:f["vira-green-10"],background:"#004700"},"vira-green-on-self-non-body":{foreground:f["vira-green-20"],background:"#004700"},"vira-green-on-self-header":{foreground:f["vira-green-40"],background:"#004700"},"vira-green-on-self-placeholder":{foreground:f["vira-green-50"],background:"#004700"},"vira-green-on-self-decoration":{foreground:f["vira-green-70"],background:"#004700"},"vira-green-on-self-invisible":{foreground:f["vira-green-80"],background:"#004700"},"vira-teal-foreground-small-body":{foreground:f["vira-teal-5"],background:"black"},"vira-teal-foreground-body":{foreground:f["vira-teal-20"],background:"black"},"vira-teal-foreground-non-body":{foreground:f["vira-teal-30"],background:"black"},"vira-teal-foreground-header":{background:"black"},"vira-teal-foreground-placeholder":{foreground:f["vira-teal-60"],background:"black"},"vira-teal-foreground-decoration":{foreground:f["vira-teal-80"],background:"black"},"vira-teal-foreground-invisible":{foreground:f["vira-teal-90"],background:"black"},"vira-teal-background-small-body":{foreground:"black",background:f["vira-teal-5"]},"vira-teal-background-body":{foreground:"black",background:f["vira-teal-20"]},"vira-teal-background-non-body":{foreground:"black",background:f["vira-teal-30"]},"vira-teal-background-header":{foreground:"black",background:f["vira-teal-50"]},"vira-teal-background-placeholder":{foreground:"black",background:f["vira-teal-60"]},"vira-teal-background-decoration":{foreground:"black",background:f["vira-teal-80"]},"vira-teal-background-invisible":{foreground:"black",background:f["vira-teal-90"]},"vira-teal-on-self-body":{foreground:f["vira-teal-10"],background:"#004442"},"vira-teal-on-self-non-body":{foreground:f["vira-teal-20"],background:"#004442"},"vira-teal-on-self-header":{foreground:f["vira-teal-40"],background:"#004442"},"vira-teal-on-self-placeholder":{foreground:f["vira-teal-50"],background:"#004442"},"vira-teal-on-self-decoration":{foreground:f["vira-teal-70"],background:"#004442"},"vira-teal-on-self-invisible":{foreground:f["vira-teal-80"],background:"#004442"},"vira-blue-foreground-small-body":{foreground:f["vira-blue-5"],background:"black"},"vira-blue-foreground-body":{foreground:f["vira-blue-20"],background:"black"},"vira-blue-foreground-non-body":{foreground:f["vira-blue-30"],background:"black"},"vira-blue-foreground-header":{background:"black"},"vira-blue-foreground-placeholder":{foreground:f["vira-blue-60"],background:"black"},"vira-blue-foreground-decoration":{foreground:f["vira-blue-80"],background:"black"},"vira-blue-foreground-invisible":{foreground:f["vira-blue-90"],background:"black"},"vira-blue-background-small-body":{foreground:"black",background:f["vira-blue-5"]},"vira-blue-background-body":{foreground:"black",background:f["vira-blue-20"]},"vira-blue-background-non-body":{foreground:"black",background:f["vira-blue-30"]},"vira-blue-background-header":{foreground:"black",background:f["vira-blue-50"]},"vira-blue-background-placeholder":{foreground:"black",background:f["vira-blue-60"]},"vira-blue-background-decoration":{foreground:"black",background:f["vira-blue-80"]},"vira-blue-background-invisible":{foreground:"black",background:f["vira-blue-90"]},"vira-blue-on-self-body":{foreground:f["vira-blue-10"],background:"#00358a"},"vira-blue-on-self-non-body":{foreground:f["vira-blue-20"],background:"#00358a"},"vira-blue-on-self-header":{foreground:f["vira-blue-40"],background:"#00358a"},"vira-blue-on-self-placeholder":{background:"#00358a"},"vira-blue-on-self-decoration":{foreground:f["vira-blue-70"],background:"#00358a"},"vira-blue-on-self-invisible":{foreground:f["vira-blue-80"],background:"#00358a"},"vira-purple-foreground-small-body":{foreground:f["vira-purple-5"],background:"black"},"vira-purple-foreground-body":{foreground:f["vira-purple-20"],background:"black"},"vira-purple-foreground-non-body":{foreground:f["vira-purple-30"],background:"black"},"vira-purple-foreground-header":{background:"black"},"vira-purple-foreground-placeholder":{foreground:f["vira-purple-60"],background:"black"},"vira-purple-foreground-decoration":{foreground:f["vira-purple-80"],background:"black"},"vira-purple-foreground-invisible":{foreground:f["vira-purple-90"],background:"black"},"vira-purple-background-small-body":{foreground:"black",background:f["vira-purple-5"]},"vira-purple-background-body":{foreground:"black",background:f["vira-purple-20"]},"vira-purple-background-non-body":{foreground:"black",background:f["vira-purple-30"]},"vira-purple-background-header":{foreground:"black",background:f["vira-purple-50"]},"vira-purple-background-placeholder":{foreground:"black",background:f["vira-purple-60"]},"vira-purple-background-decoration":{foreground:"black",background:f["vira-purple-80"]},"vira-purple-background-invisible":{foreground:"black",background:f["vira-purple-90"]},"vira-purple-on-self-body":{foreground:f["vira-purple-10"],background:"#500095"},"vira-purple-on-self-non-body":{foreground:f["vira-purple-20"],background:"#500095"},"vira-purple-on-self-header":{foreground:f["vira-purple-40"],background:"#500095"},"vira-purple-on-self-placeholder":{foreground:f["vira-purple-50"],background:"#500095"},"vira-purple-on-self-decoration":{foreground:f["vira-purple-70"],background:"#500095"},"vira-purple-on-self-invisible":{foreground:f["vira-purple-80"],background:"#500095"},"vira-pink-foreground-small-body":{foreground:f["vira-pink-5"],background:"black"},"vira-pink-foreground-body":{foreground:f["vira-pink-20"],background:"black"},"vira-pink-foreground-non-body":{foreground:f["vira-pink-30"],background:"black"},"vira-pink-foreground-header":{background:"black"},"vira-pink-foreground-placeholder":{foreground:f["vira-pink-60"],background:"black"},"vira-pink-foreground-decoration":{foreground:f["vira-pink-80"],background:"black"},"vira-pink-foreground-invisible":{foreground:f["vira-pink-90"],background:"black"},"vira-pink-background-small-body":{foreground:"black",background:f["vira-pink-5"]},"vira-pink-background-body":{foreground:"black",background:f["vira-pink-20"]},"vira-pink-background-non-body":{foreground:"black",background:f["vira-pink-30"]},"vira-pink-background-header":{foreground:"black",background:f["vira-pink-50"]},"vira-pink-background-placeholder":{foreground:"black",background:f["vira-pink-60"]},"vira-pink-background-decoration":{foreground:"black",background:f["vira-pink-80"]},"vira-pink-background-invisible":{foreground:"black",background:f["vira-pink-90"]},"vira-pink-on-self-body":{foreground:f["vira-pink-10"],background:"#6e004f"},"vira-pink-on-self-non-body":{foreground:f["vira-pink-20"],background:"#6e004f"},"vira-pink-on-self-header":{foreground:f["vira-pink-40"],background:"#6e004f"},"vira-pink-on-self-placeholder":{background:"#6e004f"},"vira-pink-on-self-decoration":{foreground:f["vira-pink-70"],background:"#6e004f"},"vira-pink-on-self-invisible":{foreground:f["vira-pink-80"],background:"#6e004f"},"vira-grey-foreground-small-body":{foreground:f["vira-grey-5"],background:"black"},"vira-grey-foreground-body":{foreground:f["vira-grey-20"],background:"black"},"vira-grey-foreground-non-body":{foreground:f["vira-grey-30"],background:"black"},"vira-grey-foreground-header":{background:"black"},"vira-grey-foreground-placeholder":{foreground:f["vira-grey-60"],background:"black"},"vira-grey-foreground-decoration":{foreground:f["vira-grey-80"],background:"black"},"vira-grey-foreground-invisible":{foreground:f["vira-grey-90"],background:"black"},"vira-grey-background-small-body":{foreground:"black",background:f["vira-grey-5"]},"vira-grey-background-body":{foreground:"black",background:f["vira-grey-20"]},"vira-grey-background-non-body":{foreground:"black",background:f["vira-grey-30"]},"vira-grey-background-header":{foreground:"black",background:f["vira-grey-50"]},"vira-grey-background-placeholder":{foreground:"black",background:f["vira-grey-60"]},"vira-grey-background-decoration":{foreground:"black",background:f["vira-grey-80"]},"vira-grey-background-invisible":{foreground:"black",background:f["vira-grey-90"]},"vira-grey-on-self-body":{foreground:f["vira-grey-10"],background:"#363f43"},"vira-grey-on-self-non-body":{foreground:f["vira-grey-20"],background:"#363f43"},"vira-grey-on-self-header":{foreground:f["vira-grey-40"],background:"#363f43"},"vira-grey-on-self-placeholder":{foreground:f["vira-grey-50"],background:"#363f43"},"vira-grey-on-self-decoration":{foreground:f["vira-grey-70"],background:"#363f43"},"vira-grey-on-self-invisible":{foreground:f["vira-grey-80"],background:"#363f43"}}}),N=Wn({"vira-form-border-color":rt.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":rt.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":rt.colors[Ro].background.value,"vira-form-foreground-color":rt.colors[Ro].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":rt.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":rt.colors["vira-blue-background-decoration"].background.value,"vira-form-selection-hover-color":rt.colors["vira-blue-background-invisible"].background.value,"vira-form-selection-active-color":rt.colors["vira-blue-background-decoration"].background.value,"vira-form-error-color":rt.colors["vira-red-background-non-body"].background.value,"vira-form-error-hover-color":rt.colors["vira-red-background-header"].background.value,"vira-form-error-active-color":rt.colors["vira-red-background-body"].background.value,"vira-form-success-color":rt.colors["vira-green-background-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-radius":"8px","vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":rt.colors["vira-blue-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":E`calc(var(--vira-form-input-radius) + 2px)`,"vira-form-accent-primary-color":rt.colors["vira-blue-background-non-body"].background.value,"vira-form-accent-primary-hover-color":rt.colors["vira-blue-background-header"].background.value,"vira-form-accent-primary-active-color":rt.colors["vira-blue-background-body"].background.value,"vira-form-danger-color":rt.colors["vira-red-background-non-body"].background.value,"vira-form-danger-hover-color":rt.colors["vira-red-background-header"].background.value,"vira-form-danger-active-color":rt.colors["vira-red-background-body"].background.value,"vira-form-filled-background-color":rt.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":rt.colors["vira-grey-foreground-decoration"].foreground.value});function qu({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const o=Re(ru(r+t+e)),i=E`
        content: '';
        top: calc(${o} * -1);
        left: calc(${o} * -1);
        position: absolute;
        width: calc(100% + calc(${o} * 2));
        height: calc(100% + calc(${o} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${r}px solid ${N["vira-form-focus-outline-color"].value};
        border-radius: ${N["vira-form-focus-outline-border-radius"].value};
        z-index: 100;
    `;return n?i:E`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${i}
        }
    `}const V=et()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>E`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),se=et()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal,"vira-checkbox-filled-checked":({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-unchecked":({inputs:e})=>!!e.fillWhenUnchecked},styles:({hostClasses:e})=>E`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${V} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            ${x["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        ${e["vira-checkbox-filled-checked"].selector} {
            & .custom-checkbox.checked {
                color: ${N["vira-form-background-color"].value};
                background-color: ${N["vira-form-accent-primary-color"].value};
            }

            label {
                &:hover .custom-checkbox.checked {
                    background-color: ${N["vira-form-accent-primary-hover-color"].value};
                }

                &:active .custom-checkbox.checked {
                    background-color: ${N["vira-form-accent-primary-active-color"].value};
                }
            }
        }
        ${e["vira-checkbox-filled-unchecked"].selector} {
            & .custom-checkbox:not(.checked) {
                color: ${N["vira-form-background-color"].value};
                background-color: ${N["vira-form-error-color"].value};
            }

            label {
                &:hover .custom-checkbox:not(.checked) {
                    background-color: ${N["vira-form-error-hover-color"].value};
                }

                &:active .custom-checkbox:not(.checked) {
                    background-color: ${N["vira-form-error-active-color"].value};
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
                font-weight: ${N["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${N["vira-form-selection-hover-color"].value};
            }
            &:active .custom-checkbox {
                background-color: ${N["vira-form-selection-active-color"].value};
            }
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${N["vira-form-border-color"].value};
            color: ${N["vira-form-foreground-color"].value};
            border-radius: ${N["vira-form-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${qu({elementBorderSize:1})}

            &.checked {
                & ${V} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${N["vira-form-error-color"].value};
            }

            &.disabled {
                ${ji};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:at()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}const o=e.label?g`
                  <span
                      class="label-text"
                      ${ho(e.attributePassthrough?.text)}
                      style=${pt(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:Q;return g`
            <label
                class=${yr({disabled:!!e.disabled})}
                ${ho(e.attributePassthrough?.label)}
                style=${pt(e.stylePassthrough?.label)}
                ${j("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${yr({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${pt(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${ho(e.attributePassthrough?.["custom-checkbox"])}
                    style=${pt(e.stylePassthrough?.["custom-checkbox"])}
                    ${eN(n)}
                >
                    <${V.assign({icon:Xm,fitContainer:!0})}
                        ${ho(e.attributePassthrough?.[V.tagName])}
                        style=${pt(e.stylePassthrough?.[V.tagName])}
                    ></${V}>
                </span>
            </label>
        `}}),eg=Wn({"vira-monospace":"monospace"}),Wu=E`
    padding: 0;
    margin: 0;
`,Br=E`
    ${Wu};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,pf=Wn({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Ci={menuShadow:E`
        filter: drop-shadow(0px 5px 5px ${pf["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:E`
        filter: drop-shadow(0px -5px 5px ${pf["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:E`
        box-shadow: 0 5px 15px ${pf["modal-shadow-color"].value};
    `},Ws=E`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`;function G0({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>G0({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function mP({value:e,allowed:t,blocked:r}){const n=t?G0({input:e,matcher:t}):!0,o=r?G0({input:e,matcher:r}):!1;return n&&!o}function H0(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(mP({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function gP({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){const i=ud(r,HTMLInputElement),s=F.hasKey(r,"data")&&Dh.isString(r.data)||"";if(s){const{blocked:u}=H0({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=H0({value:i.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;i.value!==a&&(i.value=a),t!==a&&o(a)}var xi=(e=>(e.Default="text",e.Password="password",e.Email="email",e.Number="number",e))(xi||{});const xe=et()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>E`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${N["vira-form-foreground-color"].value};
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
                    font-weight: ${N["vira-form-label-font-weight"].value};
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
                ${Br};
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
                ${Ws};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Br};
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
                border-radius: ${N["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${N["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Br};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${N["vira-form-radius"].value};
                background-color: ${N["vira-form-background-color"].value};
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
                ${Br};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
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
                    ${qu({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${N["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${N["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${N["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Ws};
            }

            button {
                ${Br};
                cursor: pointer;
                display: flex;
                transition: color
                    ${bo["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${N["vira-form-placeholder-color"].value};
            }

            .clear-x-button:hover {
                color: ${N["vira-form-error-color"].value};
            }

            .clear-x-button:active {
                color: ${N["vira-form-error-active-color"].value};
            }

            .show-password-button:hover {
                color: ${N["vira-form-accent-primary-color"].value};
            }

            .show-password-button:active {
                color: ${N["vira-form-accent-primary-active-color"].value};
            }

            ${e["vira-input-error"].selector} {
                & .wrapper-border {
                    border-color: ${N["vira-form-error-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${ji};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:at(),inputBlocked:at()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Ai(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:o,host:i})=>{const{filtered:s}=H0({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?g`
                  <${V.assign({icon:e.icon})} class="left-side-icon"></${V}>
              `:Q,u=e.fitText?E`
                  width: ${r.forcedInputWidth}px;
              `:Q,l=j("mousedown",h=>{const m=ud(h,HTMLElement,{useOriginalTarget:!0}),y=_t.instanceOf(i.shadowRoot.querySelector("input"),HTMLInputElement);m!==y&&(h.preventDefault(),y.focus())}),c=e.disableBrowserHelps||e.type==="password",d=g`
            <span class="input-wrapper" ${e.label?Q:l}>
                ${a}
                ${Fr(!!e.fitText,g`
                        <span
                            class="size-span"
                            ${M5(({contentRect:h})=>{n({forcedInputWidth:h.width})})}
                        >
                            <pre>${s||e.placeholder||Q}</pre>
                        </span>
                    `)}

                <input
                    id=${pt(e.label?r.randomId:void 0)}
                    aria-label=${pt(e.label||void 0)}
                    autofocus=${!1}
                    type=${pP(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${pt(c?"off":void 0)}
                    autocorrect=${pt(c?"off":void 0)}
                    autocapitalize=${pt(c?"off":void 0)}
                    spellcheck=${pt(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${j("input",h=>{gP({inputs:e,previousValue:s,event:h,inputBlockedCallback(m){t(new o.inputBlocked(m))},newValueCallback(m){t(new o.valueChange(m))}})})}
                    placeholder=${pt(e.placeholder||void 0)}
                    ${ho(e.attributePassthrough)}
                />

                ${Fr(!!(e.showClearButton&&e.value),g`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${j("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${j("click",()=>{e.disabled||t(new o.valueChange(""))})}
                        >
                            <${V.assign({icon:z5})}></${V}>
                        </button>
                    `)}
                ${Fr(e.type==="password",g`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${j("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${j("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${V.assign({icon:r.showPassword?W5:q5})}></${V}>
                        </button>
                    `)}
                ${Fr(!!e.suffix,g`
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
                    ${d}
                </label>
            `:d}});function pP(e,t){return e==="password"&&t?"text":e||"text"}const Be=et()({tagName:"vira-select",state(){return{randomId:Ai(32)}},events:{valueChange:at()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${N["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Br};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${N["vira-form-radius"].value};
            color: ${N["vira-form-foreground-color"].value};
            background-color: ${N["vira-form-background-color"].value};
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
                    ${qu({elementBorderSize:0,noNesting:!0})}
                }

                &.placeholder {
                    color: ${N["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${t["vira-select-icon-padding"].value};
                }
            }

            & ${V} {
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
                border-radius: ${N["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${N["vira-form-border-color"].value};
                transition: border
                    ${bo["vira-interaction-animation-duration"].value};
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
                font-weight: ${N["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${ji}
            }
            ${V} {
                ${ji}
            }
            & * {
                cursor: not-allowed;
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${N["vira-form-error-color"].value};
            }
        }
    `,render({inputs:e,state:t,dispatch:r,events:n}){const o=e.value||void 0,i=e.placeholder||o==null?g`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:Q,s=g`
            <span class="select-wrapper">
                <select
                    .value=${pt(o)}
                    class=${yr({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${pt(e.label?t.randomId:void 0)}
                    aria-label=${pt(e.label||void 0)}
                    aria-disabled=${pt(e.disabled?"true":void 0)}
                    ${j("input",a=>{const u=ud(a,HTMLSelectElement),l=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(c=>c.value===o)),r(new n.valueChange(l))})}
                    ${ho(e.attributePassthrough?.select)}
                >
                    ${i}
                    ${e.options.map(a=>g`
                            <option
                                ?selected=${a.value===o}
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

                <${V.assign({icon:e.icon})} class="input-icon"></${V}>
                <${V.assign({icon:Qm})} class="trigger-icon"></${V}>
            </span>
        `;return e.label?g`
                <label for=${t.randomId} ${ho(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),$r=et()({tagName:"vira-form",events:{valueChange:at(),validChange:at()},styles:E`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const i=LN(e.fields);i!==n.lastIsValid&&(o({lastIsValid:i}),t(new r.validChange({allFieldsAreValid:i})));const s=An(e.fields).map(([a,u])=>u.isHidden?Q:u.type===ke.Checkbox?g`
                        <${se.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:bl(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?Un(u.testId):Q}
                            ${j(se.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${se}>
                    `:u.type===ke.Select?g`
                        <${Be.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:bl(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?Un(u.testId):Q}
                            ${j(Be.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${Be}>
                    `:u.type===ke.Number?g`
                        <${xe.assign({value:u.value?.toString()||"",disabled:e.isDisabled||u.isDisabled,allowedInputs:/\d/,hasError:u.hasError,icon:u.icon,label:bl(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,type:xi.Number,attributePassthrough:{...u.min===void 0?{}:{min:String(u.min)},...u.max===void 0?{}:{max:String(u.max)},...u.step===void 0?{}:{step:String(u.step)}}})}
                            ${u.testId?Un(u.testId):Q}
                            ${j(xe.events.valueChange,l=>{const c=l.detail===""?void 0:Number(l.detail);t(new r.valueChange({key:a,...u,value:c}))})}
                        ></${xe}>
                    `:g`
                        <${xe.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:bl(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===ke.NewPassword?{autocomplete:"new-password"}:u.type===ke.ExistingPassword?{autocomplete:"password"}:u.type===ke.Email?{autocomplete:"email"}:{},type:[ke.NewPassword,ke.ExistingPassword,ke.PlainPassword].includes(u.type)?xi.Password:u.type===ke.Email?xi.Email:xi.Default})}
                            ${u.testId?Un(u.testId):Q}
                            ${j(xe.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${xe}>
                    `);return g`
            <form ${j("submit",a=>a.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}});function bP(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given: ${sv(r)}`)}function yP(e,t=[],r=!1){return r?t.includes(e.id)?t.filter(n=>n!==e.id):[...t,e.id]:[e.id]}function hb({open:e,callback:t,popUpManager:r,host:n,options:o}){if(e){const i=r.showPopUp(n,o);t?.(i)}else r.removePopUp(),t?.(void 0)}const Rr=et()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            ${Ws};
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

        ${e["vira-menu-item-selected"].selector} ${V} {
            opacity: 1;
            visibility: visible;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${V} {
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
            visibility: hidden;
        }
    `,render({inputs:e}){return g`
            <div class="item">
                <${V.assign({icon:Xm})}></${V}>
                <slot>${e.label}</slot>
            </div>
        `}});function vP(e,t){return e>t}function wP(e,t){return e<t}function yu(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var Vn;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Vn||(Vn={}));var Ce;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Ce||(Ce={}));function dd(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const o=n[t.x];if(o)if(o.navEntry.navParams.group){const i=dd(o.children);i&&(r=i.node)}else o.navEntry.navParams.disabled||(r=o)}}if(r)return{node:r,coords:t}}function mb(e,t,r,n){if(!t){const u=dd(e.children);return u?(yu(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:Ce.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:Ce.Navigate}}const{nextNode:o,requiresWrapping:i,coords:s}=Z5(t.position,r),a=n?!0:!i;return o&&a?(yu(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:i,direction:r,navAction:Ce.Navigate,coords:s}):o?a?{success:!1,reason:"no conditions matched",direction:r,navAction:Ce.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:Ce.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:Ce.Navigate}}function Z5(e,t){let r=!1,n,o=1;const i=Date.now();for(;!r||!n;)if(n=$P(e,t,o),r=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-i>1e3)return nv.warning("Failed to find next non-disabled node."),n;return n}function $P(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Dt.isDefined(n,"missing parent");const o=_t.isDefined(n.children[e.nodeCoords.y]),i=n.children.length>1&&(t===Vn.Down||t===Vn.Up),s=t===Vn.Down||t===Vn.Right?r:-1*r,a=s<0?vP:wP,u=i?vp(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=_t.isDefined(n.children[u]),c=i?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:vp(e.nodeCoords.x+s,{min:0,max:o.length-1,takeOverflow:!0}),d=n.children[u]?.[c],h=i?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:d,requiresWrapping:h,coords:{x:c,y:u}}}function kP(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:Ce.Pibling};const{nextNode:o,requiresWrapping:i,coords:s}=Z5(n,t),a=o?.navEntry.navParams.group?dd(o.children):{node:o,coords:s},u=r?!0:!i;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:Ce.Pibling}:u?(yu(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:i,coords:a.coords,direction:t,navAction:Ce.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:Ce.Pibling}}var fr;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(fr||(fr={}));const $n={name:"data-nav",js(e){return e?`[${$n.name}*="${e}"]`:`[${$n.name}]`},css({baseSelector:e="",navValue:t}={}){return E`
            ${Re(e)}${Re($n.js(t))}
        `}},tg="navEntry";function J5(e){return tg in e}function Y5(e){if(J5(e)){const t=e[tg];return _t.instanceOf(t,X5,"Invalid nav entry")}else return}function xP(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==fr.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class X5{element;navParams;navTreeNode;navValue;eventListener=xP(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Dt.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute($n.name,""),hf(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,o=t===(n===fr.Focused);if(!(this.navParams.group||this.navController.locked||o||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(fr.Focused),hf(this.element)||this.element.focus()):(this.removeNavValue(fr.Focused),hf(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,Ce.Focus)}activate(t){const r=this.navValue,n=t===(r===fr.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(fr.Active):this.setNavValue(fr.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,Ce.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute($n.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute($n.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function Q5(e,t){Object.entries(t).forEach(([r,n])=>{F.isBoolean(n)&&n?e.setAttribute(r,""):F.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const DP=Hn(class extends Zn{element;lastKey;constructor(e){super(e),this.element=Vu(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),zr}});function AP(e){return"group"in e?fr.Group:e.disabled?fr.Disabled:""}function gb(e,t={}){return DP(b(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;Dt.instanceOf(r,HTMLElement);const o={[$n.name]:AP(t),tabindex:n?0:-1};Q5(r,o);const i=Y5(r)||new X5(r,e,t);J5(r)?(i.navParams=t,i.navController=e):r[tg]=i,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function EP(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Ce.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Ce.Enter};const r=t.position.node.children[0]?.[0];return r?(yu(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ce.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Ce.Enter}}function CP(e,t){return e$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function e$(e,t,r){for(let n=0;n<t.length;n++){const o=t[n];for(let i=0;i<o.length;i++){const s=o[i],a={ancestorChain:e,nodeCoords:{x:i,y:n},node:s};if(r(a))return a;const u=e$(e.concat(a),s.children,r);if(u)return u}}}function t$(e,t){const r=CP(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function FP(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Ce.Exit};const r=t.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Ce.Exit};const{nodeCoords:n}=t$(e,r.navEntry);return yu(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ce.Exit,coords:n}}class MP extends Nn()("nav-exit"){}class r$ extends Nn()("nav-activate"){}class SP extends Nn()("nav-focus"){}class TP extends Nn()("nav-enter"){}class NP extends Nn()("nav-navigate"){}class PP extends Nn()("nav-navigate-pibling"){}function IP(e){return{root:!0,children:n$(e)?.children||[]}}function n$(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=Y5(t),n=OP(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function OP(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const o=n.navEntry.navParams.x,i=n.navEntry.navParams.y||0,s=Vi(t,i,()=>({noX:[],withX:[],y:i}));o==null?s.noX.push(n):s.withX.push({x:o,node:n})}return e.children.forEach(n=>{const o=n$(n);o&&r(o)}),t.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,i)=>o.x-i.x),n.withX.forEach(({x:o,node:i})=>{n.noX.splice(o,0,i)}),n.noX)).filter(F.isTruthy)}class o$ extends Ch{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){dd(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=t$(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:o}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const i={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return r&&(n===Ce.Activate?this.dispatch(new r$({detail:i})):n===Ce.Focus&&this.dispatch(new SP({detail:i}))),i}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:Ce.Navigate,reason:"NavController is locked."};const n=mb(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new NP({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Ce.Enter,reason:"NavController is locked."};const r=EP(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new TP({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Ce.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Ce.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Dt.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Ce.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Ce.Activate&&this.currentNavEntry.entry.focus(!0);const t=FP(this.getNavTree(),this.currentNavEntry);return this.dispatch(new MP({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:Ce.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),i={...this.currentNavEntry?kP(this.currentNavEntry,r,t):mb(n,void 0,r,t),navAction:Ce.Pibling};return this.dispatch(new PP({detail:i})),i}buildNavTree(){const t=pN(this.rootElement),r=IP(t);return this.cachedNavTree=r,r}}const Ha=et()({tagName:"vira-link",styles:E`
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
        a:hover {
            color: ${N["vira-form-accent-primary-color"].value};
        }

        :host(:active) a,
        a:active {
            color: ${N["vira-form-accent-primary-active-color"].value};
        }
    `,render({inputs:e}){function t(r){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,r)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(e.link?.newTab)return g`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${ho(e.attributePassthrough?.a)}
                    style=${pt(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return g`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${ho(e.attributePassthrough?.a)}
                    style=${pt(e.stylePassthrough?.a)}
                    ${j("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),pb={item:"menu-item"},Za=et()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new o$(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>E`
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
            background-color: ${N["vira-form-background-color"].value};
            color: ${N["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Br};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${$n.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:fr.Focused})}, ${$n.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:fr.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${N["vira-form-selection-hover-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${$n.css({baseSelector:".menu-item:not(.disabled)",navValue:fr.Focused})},
                ${$n.css({baseSelector:".menu-item:not(.disabled)",navValue:fr.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${N["vira-form-selection-hover-color"].value};
                outline: none;
            }
        }

        ${Rr} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${ji};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){bP(e.items);const r=e.items.map(n=>{const o=!!e.selected?.includes(n.id),i=F.isString(n.label)?g`
                      <${Rr.assign({label:n.label,selected:o,hideCheckIcon:e.hideCheckIcons})}></${Rr}>
                  `:n.label,s=n.disabled||!e.isMultiSelect&&o;return n.route?g`
                    <${Ha.assign({route:n.route})}
                        class="menu-item ${yr({disabled:!!n.disabled,selected:o})}"
                        ${Un(pb.item)}
                        title=${pt(n.titleText||void 0)}
                        role="option"
                        ${gb(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </${Ha}>
                `:g`
                    <button
                        class="menu-item ${yr({disabled:!!n.disabled,selected:o})}"
                        ${Un(pb.item)}
                        title=${pt(n.titleText||void 0)}
                        role="option"
                        ${gb(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </button>
                `});return g`
            ${r}
        `}});var rg=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(rg||{}),hc=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(hc||{});const Ja=et()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${N["vira-form-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${N["vira-form-background-color"].value};
            border: 1px solid ${N["vira-form-border-color"].value};
            color: ${N["vira-form-foreground-color"].value};
            ${Ci.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${Ci.menuShadowReversed}
            border-radius: ${N["vira-form-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${N["vira-form-radius"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),yl=globalThis.document;class BP extends v5{constructor(){if(super({defaultValue:!!yl?.hidden,equalityCheck:F.strictEquals}),!yl)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,yl));const t=r=>this.updateVisibility(r,yl);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=LP.includes(t.type),o=RP.includes(t.type),i=n?!0:o?!1:r.hasFocus()||!r.hidden;this.setValue(i)}}const RP=["blur","focusout","pagehide"],LP=["focus","focusin","pageshow"],jP=new BP;function _P(e,t){return jP.listen(e,t)}function Z0(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}const bb={top:0,left:0,right:0,bottom:0};class i$ extends Eh("hide-pop-up"){}class s$ extends Nn()("nav-select"){}class UP{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new Ch;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[_P(!1,t=>{t||this.removePopUp()}),this.navController.listen(r$,t=>{const r=t.composedPath()[0];r instanceof Element&&Z0(r)||t.detail.success&&(this.listenTarget.dispatch(new s$({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),p0("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),p0("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=t.composedPath()[0];if(n instanceof Element&&Z0(n))return;r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Vn.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Vn.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Vn.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Vn.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault())}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new i$)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},o=yN(t);Dt.instanceOf(o,HTMLElement);const i=t.getBoundingClientRect(),s=o.getBoundingClientRect(),a=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,l=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=Qe(bb,y=>i[y]),d=Qe(bb,y=>{const w=l[y],$=c[y];return Math.abs(w-$)}),h=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace,m=d.left>d.right+n.horizontalDiffThreshold&&d.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!h,popRight:!m,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var qo=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(qo||{});const le=et()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new UP(new o$(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>E`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Br};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${qu({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${Ws};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${ji}
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
    `,events:{navSelect:at(),openChange:at(),init:at()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:o,events:i}){e.popUpManager.listen(i$,()=>{if(t({showPopUpResult:void 0}),o(new i.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");Dt.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(s$,s=>{n.keepOpenAfterInteraction||hb({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),o(new i.navSelect(s.detail))}),o(new i.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:o,host:i,slotNames:s}){function a({emitEvent:y,open:w},$){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&$){const k=i.shadowRoot.querySelector(".dropdown-trigger");if(k&&!$.composedPath().includes(k))return}hb({open:w,callback(k){o({showPopUpResult:k}),y&&e(new t.openChange(k))},host:i,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,l=u==="right"&&r.showPopUpResult?n.ignoreMaxWidth?E`
                          left: unset;
                      `:E`
                          left: -${r.showPopUpResult.positions.diff.left}px;
                      `:E`
                      left: ${n.popUpOffset?.left||0}px;
                  `,c=r.showPopUpResult&&u==="left"?n.ignoreMaxWidth?E`
                          right: unset;
                      `:E`
                          right: -${r.showPopUpResult.positions.diff.right}px;
                      `:E`
                      right: ${n.popUpOffset?.right||0}px;
                  `,d=E`
            ${l}
            ${c}
        `,h=r.showPopUpResult?r.showPopUpResult.popDown?n.ignoreMaxHeight?E`
                          bottom: unset;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${d}
                      `:E`
                          bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${d}
                      `:n.ignoreMaxHeight?E`
                        top: unset;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${d}
                    `:E`
                        top: -${r.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${d}
                    `:void 0;function m(y){a({emitEvent:!0,open:!r.showPopUpResult},y)}return g`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${yr({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${j("keydown",y=>{!r.showPopUpResult&&y.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},y)})}
                ${j("click",y=>{if(y.detail===0){let w=!1;if(vN(({element:$})=>Z0($)?(w=!0,!0):!1),w)return;m(y)}})}
                ${j("mousedown",y=>{y.button===0&&m(y)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${yr({"right-aligned":u==="right"})}"
                    style=${h}
                >
                    ${Fr(!!r.showPopUpResult,g`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),zP={menu:"menu-trigger-menu"},Lo=et()({tagName:"vira-menu-trigger",styles:E`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${le} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{itemActivate:at(),openChange:at()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:o}){return g`
            <${le.assign({...e,keepOpenAfterInteraction:!0,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||qo.Left})}
                class=${yr({open:!!t.showPopUpResult})}
                ${j(le.events.init,i=>{r({navController:i.detail.navController,popUpManager:i.detail.popUpManager})})}
                ${j(le.events.openChange,i=>{!!t.showPopUpResult!=!!i.detail&&n(new o.openChange(i.detail)),r({showPopUpResult:i.detail})})}
                ${j(le.events.navSelect,i=>{const s=i.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);n(new o.itemActivate(yP(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${le.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?g`
                          <${Ja.assign({direction:t.showPopUpResult.popDown?hc.Downwards:hc.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${le.slotNames.popUp}
                              class=${yr({"full-width-menu":e.horizontalAnchor===qo.Both})}
                          >
                              <${Za.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Un(zP.menu)}
                              ></${Za}>
                          </${Ja}>
                      `:Q}
            </${le}>
        `}}),ct=et()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>E`
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
        `}});var mo=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e.Danger="vira-button-danger",e.DangerOutline="vira-button-danger-outline",e.Ghost="vira-button-ghost",e))(mo||{});const nt=et()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline"||e.buttonStyle==="vira-button-danger-outline","vira-button-danger-style":({inputs:e})=>e.buttonStyle==="vira-button-danger"||e.buttonStyle==="vira-button-danger-outline","vira-button-ghost-style":({inputs:e})=>e.buttonStyle==="vira-button-ghost","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon,"vira-button-icon-only":({inputs:e})=>!!e.icon&&!e.text,"vira-button-default-style":({inputs:e})=>!e.buttonStyle||e.buttonStyle==="vira-button-default"},cssVars:{"vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"transparent","vira-button-internal-background-color":"transparent"},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ws};
            ${t["vira-button-internal-background-color"].name}: ${N["vira-form-accent-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${N["vira-form-background-color"].value};
            ${N["vira-form-focus-outline-color"].name}: ${N["vira-form-accent-primary-hover-color"].value}
        }

        ${e["vira-button-icon-only"].selector} {
            ${t["vira-button-padding"].name}: 5px;
        }

        ${e["vira-button-disabled"].selector} {
            ${ji};
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${N["vira-form-accent-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${N["vira-form-accent-primary-active-color"].value};
        }

        ${e["vira-button-danger-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: ${N["vira-form-error-color"].value};
            }

            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${N["vira-form-error-hover-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${N["vira-form-error-active-color"].value};
            }
        }

        ${e["vira-button-ghost-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: transparent;
                ${t["vira-button-internal-foreground-color"].name}: currentColor;
            }

            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${N["vira-form-filled-background-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${N["vira-form-filled-active-background-color"].value};
            }
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: ${t["vira-button-internal-foreground-color"].value};
            border-color: currentColor;
        }

        button {
            ${Br};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${N["vira-form-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${bo["vira-interaction-animation-duration"].value},
                background-color
                    ${bo["vira-interaction-animation-duration"].value},
                border-color ${bo["vira-interaction-animation-duration"].value};

            ${qu({elementBorderSize:2})}
        }

        .empty-text {
            width: 0;
        }

        button ${V} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${V} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?g`
                  <${V.assign({icon:e.icon})}></${V}>
              `:Q,r=e.text?g`
                  <span class="text-template">${e.text}</span>
              `:g`
                  <span class="empty-text">&nbsp;</span>
              `;return g`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var J0=(e=>(e.Error="error",e.Success="success",e))(J0||{});const bf=et()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":E`1px solid ${N["vira-form-border-color"].value}`,"vira-card-padding":N["vira-form-wrapper-radius"].value},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${N["vira-form-wrapper-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${N["vira-form-error-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${N["vira-form-success-color"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),to=et()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded,"vira-collapsible-wrapper-expand-on-print":({inputs:e})=>!!e.expandOnPrint},slotNames:["header"],styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Br};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${bo["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }

        @media print {
            :host(.${e["vira-collapsible-wrapper-expand-on-print"].name})
                .collapsing-element {
                height: auto !important;
                overflow: visible !important;
                transition: none !important;
            }
        }
    `,events:{expandChange:at()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:o,inputs:i}){const s=i.expanded?E`
                  height: ${e.contentHeight}px;
              `:E`
                  height: 0;
              `;return g`
            <button
                class="header-wrapper"
                ${j("click",()=>{n(new o.expandChange(!i.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${M5(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),yf={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},Oa=et()({tagName:"vira-dropdown",styles:E`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${Lo} {
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
                ${bo["vira-interaction-animation-duration"].value} linear;
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
            ${Ws};
            border: 1px solid ${N["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${N["vira-form-radius"].value};
            background-color: ${N["vira-form-background-color"].value};
            color: ${N["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:at(),openChange:at()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:o}){const i=$o(t.selected,c=>t.options.find(d=>d.id===c),F.isTruthy),s=t.icon?g`
                  <${V.assign({icon:t.icon})}
                      ${Un(yf.icon)}
                  ></${V}>
              `:Q,a=!i.length,u=t.selectionPrefix&&!a?g`
                      <span class="selected-label-prefix" ${Un(yf.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:Q,l=a?t.placeholder||"":t.isMultiSelect&&i.length>1?`${i.length} Selected`:i[0]?.label||"";return g`
            <${Lo.assign({...t,items:t.options,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||qo.Both})}
                ${j(Lo.events.openChange,c=>{o({showPopUpResult:c.detail}),r(new n.openChange(c.detail))})}
                ${j(Lo.events.itemActivate,c=>{r(new n.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${yr({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Un(yf.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${yr({"using-placeholder":a})}"
                        title=${pt(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${V.assign({icon:Qm})}
                            class="trigger-icon"
                        ></${V}>
                    </span>
                </div>
            </${Lo}>
        `}}),Fi=et()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>E`
        :host {
            color: ${N["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),Mo=et()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:at(),imageError:at()},styles:({hostClasses:e})=>E`
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
    `,render({inputs:e,state:t,updateState:r,dispatch:n,events:o,slotNames:i}){const s=e.imageUrl,a=t.erroredUrls[s]?g`
                  <slot class="status-wrapper" name=${i.error}>
                      <${V.assign({icon:fc})} class="error"></${V}>
                  </slot>
              `:t.loadedUrls[s]?void 0:g`
                    <slot class="status-wrapper" name=${i.loading}>
                        <${V.assign({icon:Li})}></${V}>
                    </slot>
                `;return g`
            ${Fr(!!a,a)}
            <img
                class=${yr({hidden:!!a})}
                ${j("load",async()=>{e._debugLoadDelay&&await Si(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new o.imageLoad)})}
                ${j("error",async u=>{e._debugLoadDelay&&await Si(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new o.imageError(u.error))})}
                src=${s}
            />
        `}}),VP=["pagehide","pageshow","popstate"],So=et()({tagName:"vira-modal",events:{modalClose:at()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-filter":"blur(3px)"},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${Wu};
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
            ${Ci.modal}

            &[open] {
                display: flex;
            }
            &::backdrop {
                background: ${N["vira-form-modal-backdrop-color"].value};
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
                            color: ${N["vira-form-secondary-body-foreground"].value};
                        }
                    }

                    & button.close {
                        ${Br};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${N["vira-form-radius"].value};

                        &:hover {
                            background-color: ${N["vira-form-selection-hover-color"].value};
                        }

                        & ${V} {
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
    `,render({inputs:e,state:t,updateState:r,events:n,dispatch:o,slotNames:i}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),r({previousOpenValue:e.open}),e.open)){const a=VP.map(u=>p0(u,()=>{o(new n.modalClose)}));r({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),o(new n.modalClose))}return g`
            <dialog
                ${Ri(a=>{r({dialogElement:_t.instanceOf(a,HTMLDialogElement)})})}
                ${j("close",()=>{s()})}
                ${j("mousedown",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Ri(a=>{r({contentElement:_t.instanceOf(a,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${i.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?g`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:Q}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${j("click",()=>{t.dialogElement?.close()})}
                        >
                            <${V.assign({icon:G5})}></${V}>
                        </button>
                    </div>
                    ${e.open?g`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:Q}
                </div>
            </dialog>
        `}}),qn=et()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":({state:e,inputs:t})=>e.isOverflowing||!!t.useSmall},styles:({hostClasses:e})=>E`
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
    `,cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({slotNames:e,updateState:t,inputs:r,host:n,state:o}){return g`
            <div
                class="large"
                ${Ri(i=>{if(!r.automaticallySwitch)return;const s={elementToTest:i,host:n,updateState:t},a=new ResizeObserver(()=>{vf(s)});a.observe(n),a.observe(i);const u=Fh(i,"slotchange",()=>{vf(s)});vf(s),o.cleanup?.(),t({cleanup(){a.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function vf({elementToTest:e,host:t,updateState:r}){const n=e.scrollWidth>t.clientWidth;r({isOverflowing:n})}const io=et()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px"},styles:({cssVars:e})=>E`
        :host {
            /* Default width that can easily be overridden because it's applied on the host. */
            width: 100px;
            /* Default height that can easily be overridden because it's applied on the host. */
            height: 10px;
            display: inline-flex;
            align-items: center;
            border-radius: ${e["vira-progress-border-radius"].value};
            color: ${N["vira-form-accent-primary-color"].value};
            overflow: hidden;
        }

        .progress-bar {
            background-color: currentColor;
            height: 100%;
        }

        .background-bar {
            background-color: ${N["vira-form-filled-background-color"].value};
            height: 100%;
            flex-grow: 1;
        }
    `,render({inputs:e,host:t}){const r=e.min||0,o=(e.max||100)-r,i=e.value-r,s=I3(Math.round(i/o*100),{min:0,max:100});return Q5(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),g`
            <div
                class="progress-bar"
                style=${s?E`
                          width: ${s}%;
                      `:E`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function a$(e){return GT({async updateCallback(t,r){if(r&&t in r.cache)return{cache:r.cache,element:r.cache[t],key:t};const n=await e[t]();return{cache:{...r?.cache,[t]:n},element:n,key:t}}})}function u$(e,{ready:t,loading:r,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?r(e.value.then(i=>({[i.key]:i.element}))):t({[e.value.key]:e.value.element})}const Yr=S5(),on=Yr()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:({cssVars:e})=>E`
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
                ${j("click",n=>{(!e.router||U5(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new dc(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function qP(e,t){return e.entry.entryType===Jt.Root?!1:e.entry.entryType===Jt.Page||F.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:F.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const cs=Yr()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Ee["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Ee["element-book-nav-hover-background-color"].value};
            color: ${Ee["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Ee["element-book-nav-active-background-color"].value};
            color: ${Ee["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${on.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Ee["element-book-nav-selected-background-color"].value};
            color: ${Ee["element-book-nav-selected-foreground-color"].value};
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

        ${V} {
            display: inline-flex;
            color: ${Ee["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!qP(r,e.selectedPath))return;const n=E`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return g`
                <li style=${n}>
                    <${on.assign({router:e.router,route:{paths:[Ar.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${yr({"title-row":!0,selected:e.selectedPath?F.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Fr(ks(r,Jt.ElementExample),g`
                                    <${V.assign({icon:V5})}></${V}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${on}>
                </li>
            `});return g`
            <${on.assign({route:Ss,router:e.router})}>
                <slot name=${zn.NavHeader}>Book</slot>
            </${on}>
            <ul>
                ${t}
            </ul>
        `}}),Yo=Yr()({tagName:"book-error",styles:E`
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
            `)}});var vu;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})(vu||(vu={}));const ng={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:vu.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},Xo=Qe(ng,e=>e),he={...Xo,name:"name",hexString:"hexString"},jn=Qe(ng,(e,t)=>{const r=F.isEnumValue(e,vu)&&F.isEnumValue(e,Xo)?e:"conversionFormat"in t&&t.conversionFormat&&F.isEnumValue(t.conversionFormat,vu)&&F.isEnumValue(t.conversionFormat,Xo)?t.conversionFormat:void 0;return Dt.isTruthy(r,`Invalid conversion format for color format '${e}' ${b(t)}.`),{...t,colorFormat:e,conversionFormat:r,rawSyntax:_t.isEnumValue("rawSyntax"in t&&t.rawSyntax?t.rawSyntax:e,he)}});Fu(nu(ng),e=>({key:e.colorSpace,value:e.colorSpace}),{});An(jn).reduce((e,[t,r])=>(Vi(e,r.colorSpace,()=>({}))[t]=r,e),{});function WP(e){return e.startsWith("rgb")?he.rgb:e.startsWith("hsl")?he.hsl:e.startsWith("hwb")?he.hwb:e.startsWith("oklab")?he.oklab:e.startsWith("oklch")?he.oklch:e.startsWith("lab")?he.lab:e.startsWith("lch")?he.lch:e.startsWith("#")?he.hexString:he.name}const Y0={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in Y0)Object.freeze(Y0[e]);const wu=Object.freeze(Y0),KP=Object.keys(wu).reduce((e,t)=>t.length>e.length?t:e),GP=Fc(Qe(wu,(e,t)=>$o(Object.entries(wu),([n])=>n,(n,[,o])=>n===e?!1:F.deepEquals(o,t))),(e,t)=>!!t.length),yb=Object.entries(GP).reduce((e,t)=>{const r=[e[0],...e[1]].join(", ");return[t[0],...t[1]].join(", ").length>r.length?t:e}).reduce((e,t)=>F.isArray(t)?[...e,...t]:[...e,t],[]),vb=Math.max(KP.length,yb.length+(yb.length-1)*2),l$=(e,t)=>{if(typeof e=="number"){if(t===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},HP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ZP=e=>l$(HP[e.toLowerCase()],6),JP=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,YP=e=>{let t;return(t=e.match(JP))?l$(parseInt(t[1],16),t[1].length):void 0},Wo="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",Ya=`${Wo}%`,og=`(?:${Wo}%|${Wo})`,XP=`(?:${Wo}(deg|grad|rad|turn)|${Wo})`,Ks="\\s*,\\s*",QP=new RegExp(`^rgba?\\(\\s*${Wo}${Ks}${Wo}${Ks}${Wo}\\s*(?:,\\s*${og}\\s*)?\\)$`),eI=new RegExp(`^rgba?\\(\\s*${Ya}${Ks}${Ya}${Ks}${Ya}\\s*(?:,\\s*${og}\\s*)?\\)$`),tI=e=>{let t={mode:"rgb"},r;if(r=e.match(QP))r[1]!==void 0&&(t.r=r[1]/255),r[2]!==void 0&&(t.g=r[2]/255),r[3]!==void 0&&(t.b=r[3]/255);else if(r=e.match(eI))r[1]!==void 0&&(t.r=r[1]/100),r[2]!==void 0&&(t.g=r[2]/100),r[3]!==void 0&&(t.b=r[3]/100);else return;return r[4]!==void 0?t.alpha=Math.max(0,Math.min(1,r[4]/100)):r[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[5]))),t},X0=(e,t)=>e===void 0?void 0:typeof e!="object"?th(e):e.mode!==void 0?e:t?{...e,mode:t}:void 0,_i=(e="rgb")=>t=>(t=X0(t,e))!==void 0?t.mode===e?t:_n[t.mode][e]?_n[t.mode][e](t):e==="rgb"?_n[t.mode].rgb(t):_n.rgb[e](_n[t.mode].rgb(t)):void 0,_n={},c$={},mc=[],d$={},rI=e=>e,Pe=e=>(_n[e.mode]={..._n[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{_n[t]||(_n[t]={}),_n[t][e.mode]=e.fromMode[t]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]=="function"&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=rI)}),c$[e.mode]=e,(e.parse||[]).forEach(t=>{nI(t,e.mode)}),_i(e.mode)),fd=e=>c$[e],nI=(e,t)=>{if(typeof e=="string"){if(!t)throw new Error("'mode' required when 'parser' is a string");d$[e]=t}else typeof e=="function"&&mc.indexOf(e)<0&&mc.push(e)},Q0=/[^\x00-\x7F]|[a-zA-Z_]/,oI=/[^\x00-\x7F]|[-\w]/,O={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let Y=0;function vl(e){let t=e[Y],r=e[Y+1];return t==="-"||t==="+"?/\d/.test(r)||r==="."&&/\d/.test(e[Y+2]):t==="."?/\d/.test(r):/\d/.test(t)}function eh(e){if(Y>=e.length)return!1;let t=e[Y];if(Q0.test(t))return!0;if(t==="-"){if(e.length-Y<2)return!1;let r=e[Y+1];return!!(r==="-"||Q0.test(r))}return!1}const iI={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function Aa(e){let t="";if((e[Y]==="-"||e[Y]==="+")&&(t+=e[Y++]),t+=wl(e),e[Y]==="."&&/\d/.test(e[Y+1])&&(t+=e[Y++]+wl(e)),(e[Y]==="e"||e[Y]==="E")&&((e[Y+1]==="-"||e[Y+1]==="+")&&/\d/.test(e[Y+2])?t+=e[Y++]+e[Y++]+wl(e):/\d/.test(e[Y+1])&&(t+=e[Y++]+wl(e))),eh(e)){let r=gc(e);return r==="deg"||r==="rad"||r==="turn"||r==="grad"?{type:O.Hue,value:t*iI[r]}:void 0}return e[Y]==="%"?(Y++,{type:O.Percentage,value:+t}):{type:O.Number,value:+t}}function wl(e){let t="";for(;/\d/.test(e[Y]);)t+=e[Y++];return t}function gc(e){let t="";for(;Y<e.length&&oI.test(e[Y]);)t+=e[Y++];return t}function sI(e){let t=gc(e);return e[Y]==="("?(Y++,{type:O.Function,value:t}):t==="none"?{type:O.None,value:void 0}:{type:O.Ident,value:t}}function aI(e=""){let t=e.trim(),r=[],n;for(Y=0;Y<t.length;){if(n=t[Y++],n===`
`||n==="	"||n===" "){for(;Y<t.length&&(t[Y]===`
`||t[Y]==="	"||t[Y]===" ");)Y++;continue}if(n===",")return;if(n===")"){r.push({type:O.ParenClose});continue}if(n==="+"){if(Y--,vl(t)){r.push(Aa(t));continue}return}if(n==="-"){if(Y--,vl(t)){r.push(Aa(t));continue}if(eh(t)){r.push({type:O.Ident,value:gc(t)});continue}return}if(n==="."){if(Y--,vl(t)){r.push(Aa(t));continue}return}if(n==="/"){for(;Y<t.length&&(t[Y]===`
`||t[Y]==="	"||t[Y]===" ");)Y++;let o;if(vl(t)&&(o=Aa(t),o.type!==O.Hue)){r.push({type:O.Alpha,value:o});continue}if(eh(t)&&gc(t)==="none"){r.push({type:O.Alpha,value:{type:O.None,value:void 0}});continue}return}if(/\d/.test(n)){Y--,r.push(Aa(t));continue}if(Q0.test(n)){Y--,r.push(sI(t));continue}return}return r}function uI(e){e._i=0;let t=e[e._i++];if(!t||t.type!==O.Function||t.value!=="color"||(t=e[e._i++],t.type!==O.Ident))return;const r=d$[t.value];if(!r)return;const n={mode:r},o=f$(e,!1);if(!o)return;const i=fd(r).channels;for(let s=0,a,u;s<i.length;s++)a=o[s],u=i[s],a.type!==O.None&&(n[u]=a.type===O.Number?a.value:a.value/100,u==="alpha"&&(n[u]=Math.max(0,Math.min(1,n[u]))));return n}function f$(e,t){const r=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===O.None||n.type===O.Number||n.type===O.Alpha||n.type===O.Percentage||t&&n.type===O.Hue){r.push(n);continue}if(n.type===O.ParenClose){if(e._i<e.length)return;continue}return}if(!(r.length<3||r.length>4)){if(r.length===4){if(r[3].type!==O.Alpha)return;r[3]=r[3].value}return r.length===3&&r.push({type:O.None,value:void 0}),r.every(o=>o.type!==O.Alpha)?r:void 0}}function lI(e,t){e._i=0;let r=e[e._i++];if(!r||r.type!==O.Function)return;let n=f$(e,t);if(n)return n.unshift(r.value),n}const th=e=>{if(typeof e!="string")return;const t=aI(e),r=t?lI(t,!0):void 0;let n,o=0,i=mc.length;for(;o<i;)if((n=mc[o++](e,r))!==void 0)return n;return t?uI(t):void 0};function cI(e,t){if(!t||t[0]!=="rgb"&&t[0]!=="rgba")return;const r={mode:"rgb"},[,n,o,i,s]=t;if(!(n.type===O.Hue||o.type===O.Hue||i.type===O.Hue))return n.type!==O.None&&(r.r=n.type===O.Number?n.value/255:n.value/100),o.type!==O.None&&(r.g=o.type===O.Number?o.value/255:o.value/100),i.type!==O.None&&(r.b=i.type===O.Number?i.value/255:i.value/100),s.type!==O.None&&(r.alpha=Math.min(1,Math.max(0,s.type===O.Number?s.value:s.value/100))),r}const dI=e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,fI=(e,t,r)=>e+r*(t-e),hI=e=>{let t=[];for(let r=0;r<e.length-1;r++){let n=e[r],o=e[r+1];n===void 0&&o===void 0?t.push(void 0):n!==void 0&&o!==void 0?t.push([n,o]):t.push(n!==void 0?[n,n]:[o,o])}return t},mI=e=>t=>{let r=hI(t);return n=>{let o=n*r.length,i=n>=1?r.length-1:Math.max(Math.floor(o),0),s=r[i];return s===void 0?void 0:e(s[0],s[1],o-i)}},_=mI(fI),Bt=e=>{let t=!1,r=e.map(n=>n!==void 0?(t=!0,n):1);return t?r:e},da={mode:"rgb",channels:["r","g","b","alpha"],parse:[cI,YP,tI,ZP,dI,"srgb"],serialize:"srgb",interpolate:{r:_,g:_,b:_,alpha:{use:_,fixup:Bt}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},wf=(e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),wb=e=>{let t=wf(e.r),r=wf(e.g),n=wf(e.b),o={mode:"xyz65",x:.5766690429101305*t+.1855582379065463*r+.1882286462349947*n,y:.297344975250536*t+.6273635662554661*r+.0752914584939979*n,z:.0270313613864123*t+.0706888525358272*r+.9913375368376386*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},$f=e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),$b=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"a98",r:$f(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*r),g:$f(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*r),b:$f(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*r)};return n!==void 0&&(o.alpha=n),o},kf=(e=0)=>{const t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},fa=({r:e,g:t,b:r,alpha:n})=>{let o={mode:"lrgb",r:kf(e),g:kf(t),b:kf(r)};return n!==void 0&&(o.alpha=n),o},es=e=>{let{r:t,g:r,b:n,alpha:o}=fa(e),i={mode:"xyz65",x:.4123907992659593*t+.357584339383878*r+.1804807884018343*n,y:.2126390058715102*t+.715168678767756*r+.0721923153607337*n,z:.0193308187155918*t+.119194779794626*r+.9505321522496607*n};return o!==void 0&&(i.alpha=o),i},xf=(e=0)=>{const t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,1/2.4)-.055):e*12.92},ha=({r:e,g:t,b:r,alpha:n},o="rgb")=>{let i={mode:o,r:xf(e),g:xf(t),b:xf(r)};return n!==void 0&&(i.alpha=n),i},ts=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=ha({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*r,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*r,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*r});return n!==void 0&&(o.alpha=n),o},gI={...da,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:e=>$b(es(e)),xyz65:$b},toMode:{rgb:e=>ts(wb(e)),xyz65:wb}},er=e=>(e=e%360)<0?e+360:e,pI=(e,t)=>e.map((r,n,o)=>{if(r===void 0)return r;let i=er(r);return n===0||e[n-1]===void 0?i:t(i-er(o[n-1]))}).reduce((r,n)=>!r.length||n===void 0||r[r.length-1]===void 0?(r.push(n),r):(r.push(n+r[r.length-1]),r),[]),Do=e=>pI(e,t=>Math.abs(t)<=180?t:t-360*Math.sign(t)),Ut=[-.14861,1.78277,-.29227,-.90649,1.97294,0],bI=Math.PI/180,yI=180/Math.PI;let kb=Ut[3]*Ut[4],xb=Ut[1]*Ut[4],Db=Ut[1]*Ut[2]-Ut[0]*Ut[3];const vI=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(Db*r+e*kb-t*xb)/(Db+kb-xb),i=r-o,s=(Ut[4]*(t-o)-Ut[2]*i)/Ut[3],a={mode:"cubehelix",l:o,s:o===0||o===1?void 0:Math.sqrt(i*i+s*s)/(Ut[4]*o*(1-o))};return a.s&&(a.h=Math.atan2(s,i)*yI-120),n!==void 0&&(a.alpha=n),a},wI=({h:e,s:t,l:r,alpha:n})=>{let o={mode:"rgb"};e=(e===void 0?0:e+120)*bI,r===void 0&&(r=0);let i=t===void 0?0:t*r*(1-r),s=Math.cos(e),a=Math.sin(e);return o.r=r+i*(Ut[0]*s+Ut[1]*a),o.g=r+i*(Ut[2]*s+Ut[3]*a),o.b=r+i*(Ut[4]*s+Ut[5]*a),n!==void 0&&(o.alpha=n),o},hd=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let r=er(e.h),n=er(t.h),o=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*o},$I=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let r=er(e.h),n=er(t.h);return Math.abs(n-r)>180?r-(n-360*Math.sign(n-r)):n-r},md=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let r=er(e.h),n=er(t.h),o=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*o},kI=(e="rgb",t=[1,1,1,0])=>{let r=fd(e),n=r.channels,o=r.difference,i=_i(e);return(s,a)=>{let u=i(s),l=i(a);return Math.sqrt(n.reduce((c,d,h)=>{let m=o[d]?o[d](u,l):u[d]-l[d];return c+(t[h]||0)*Math.pow(isNaN(m)?0:m,2)},0))}},Ao=e=>{let t=e.reduce((n,o)=>{if(o!==void 0){let i=o*Math.PI/180;n.sin+=Math.sin(i),n.cos+=Math.cos(i)}return n},{sin:0,cos:0}),r=Math.atan2(t.sin,t.cos)*180/Math.PI;return r<0?360+r:r},xI={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:vI},toMode:{rgb:wI},interpolate:{h:{use:_,fixup:Do},s:_,l:_,alpha:{use:_,fixup:Bt}},difference:{h:hd},average:{h:Ao}},Qo=({l:e,a:t,b:r,alpha:n},o="lch")=>{t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.sqrt(t*t+r*r),s={mode:o,l:e,c:i};return i&&(s.h=er(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},ei=({l:e,c:t,h:r,alpha:n},o="lab")=>{r===void 0&&(r=0);let i={mode:o,l:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(i.alpha=n),i},h$=Math.pow(29,3)/Math.pow(3,3),m$=Math.pow(6,3)/Math.pow(29,3),Et={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},Es={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let Df=e=>Math.pow(e,3)>m$?Math.pow(e,3):(116*e-16)/h$;const g$=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+16)/116,i=t/500+o,s=o-r/200,a={mode:"xyz65",x:Df(i)*Es.X,y:Df(o)*Es.Y,z:Df(s)*Es.Z};return n!==void 0&&(a.alpha=n),a},gd=e=>ts(g$(e)),Af=e=>e>m$?Math.cbrt(e):(h$*e+16)/116,p$=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Af(e/Es.X),i=Af(t/Es.Y),s=Af(r/Es.Z),a={mode:"lab65",l:116*i-16,a:500*(o-i),b:200*(i-s)};return n!==void 0&&(a.alpha=n),a},pd=e=>{let t=p$(es(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},pc=1,b$=1,$u=26/180*Math.PI,bc=Math.cos($u),yc=Math.sin($u),y$=100/Math.log(139/100),rh=({l:e,c:t,h:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"lab65",l:(Math.exp(e*pc/y$)-1)/.0039},i=(Math.exp(.0435*t*b$*pc)-1)/.075,s=i*Math.cos(r/180*Math.PI-$u),a=i*Math.sin(r/180*Math.PI-$u);return o.a=s*bc-a/.83*yc,o.b=s*yc+a/.83*bc,n!==void 0&&(o.alpha=n),o},nh=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=t*bc+r*yc,i=.83*(r*bc-t*yc),s=Math.sqrt(o*o+i*i),a={mode:"dlch",l:y$/pc*Math.log(1+.0039*e),c:Math.log(1+.075*s)/(.0435*b$*pc)};return a.c&&(a.h=er((Math.atan2(i,o)+$u)/Math.PI*180)),n!==void 0&&(a.alpha=n),a},Ab=e=>rh(Qo(e,"dlch")),Eb=e=>ei(nh(e),"dlab"),DI={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:Ab,rgb:e=>gd(Ab(e))},fromMode:{lab65:Eb,rgb:e=>Eb(pd(e))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:_,a:_,b:_,alpha:{use:_,fixup:Bt}}},AI={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:rh,dlab:e=>ei(e,"dlab"),rgb:e=>gd(rh(e))},fromMode:{lab65:nh,dlab:e=>Qo(e,"dlch"),rgb:e=>nh(pd(e))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:_,c:_,h:{use:_,fixup:Do},alpha:{use:_,fixup:Bt}},difference:{h:md},average:{h:Ao}};function EI({h:e,s:t,i:r,alpha:n}){e=er(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.abs(e/60%2-1),i;switch(Math.floor(e/60)){case 0:i={r:r*(1+t*(3/(2-o)-1)),g:r*(1+t*(3*(1-o)/(2-o)-1)),b:r*(1-t)};break;case 1:i={r:r*(1+t*(3*(1-o)/(2-o)-1)),g:r*(1+t*(3/(2-o)-1)),b:r*(1-t)};break;case 2:i={r:r*(1-t),g:r*(1+t*(3/(2-o)-1)),b:r*(1+t*(3*(1-o)/(2-o)-1))};break;case 3:i={r:r*(1-t),g:r*(1+t*(3*(1-o)/(2-o)-1)),b:r*(1+t*(3/(2-o)-1))};break;case 4:i={r:r*(1+t*(3*(1-o)/(2-o)-1)),g:r*(1-t),b:r*(1+t*(3/(2-o)-1))};break;case 5:i={r:r*(1+t*(3/(2-o)-1)),g:r*(1-t),b:r*(1+t*(3*(1-o)/(2-o)-1))};break;default:i={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return i.mode="rgb",n!==void 0&&(i.alpha=n),i}function CI({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),i=Math.min(e,t,r),s={mode:"hsi",s:e+t+r===0?0:1-3*i/(e+t+r),i:(e+t+r)/3};return o-i!==0&&(s.h=(o===e?(t-r)/(o-i)+(t<r)*6:o===t?(r-e)/(o-i)+2:(e-t)/(o-i)+4)*60),n!==void 0&&(s.alpha=n),s}const FI={mode:"hsi",toMode:{rgb:EI},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:CI},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:_,fixup:Do},s:_,i:_,alpha:{use:_,fixup:Bt}},difference:{h:hd},average:{h:Ao}};function MI({h:e,s:t,l:r,alpha:n}){e=er(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=r+t*(r<.5?r:1-r),i=o-(o-r)*2*Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:o,g:i,b:2*r-o};break;case 1:s={r:i,g:o,b:2*r-o};break;case 2:s={r:2*r-o,g:o,b:i};break;case 3:s={r:2*r-o,g:i,b:o};break;case 4:s={r:i,g:2*r-o,b:o};break;case 5:s={r:o,g:2*r-o,b:i};break;default:s={r:2*r-o,g:2*r-o,b:2*r-o}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}function SI({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),i=Math.min(e,t,r),s={mode:"hsl",s:o===i?0:(o-i)/(1-Math.abs(o+i-1)),l:.5*(o+i)};return o-i!==0&&(s.h=(o===e?(t-r)/(o-i)+(t<r)*6:o===t?(r-e)/(o-i)+2:(e-t)/(o-i)+4)*60),n!==void 0&&(s.alpha=n),s}const TI=(e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},NI=new RegExp(`^hsla?\\(\\s*${XP}${Ks}${Ya}${Ks}${Ya}\\s*(?:,\\s*${og}\\s*)?\\)$`),PI=e=>{let t=e.match(NI);if(!t)return;let r={mode:"hsl"};return t[3]!==void 0?r.h=+t[3]:t[1]!==void 0&&t[2]!==void 0&&(r.h=TI(t[1],t[2])),t[4]!==void 0&&(r.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(r.l=Math.min(Math.max(0,t[5]/100),1)),t[6]!==void 0?r.alpha=Math.max(0,Math.min(1,t[6]/100)):t[7]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[7]))),r};function II(e,t){if(!t||t[0]!=="hsl"&&t[0]!=="hsla")return;const r={mode:"hsl"},[,n,o,i,s]=t;if(n.type!==O.None){if(n.type===O.Percentage)return;r.h=n.value}if(o.type!==O.None){if(o.type===O.Hue)return;r.s=o.value/100}if(i.type!==O.None){if(i.type===O.Hue)return;r.l=i.value/100}return s.type!==O.None&&(r.alpha=Math.min(1,Math.max(0,s.type===O.Number?s.value:s.value/100))),r}const v$={mode:"hsl",toMode:{rgb:MI},fromMode:{rgb:SI},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[II,PI],serialize:e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:_,fixup:Do},s:_,l:_,alpha:{use:_,fixup:Bt}},difference:{h:hd},average:{h:Ao}};function w$({h:e,s:t,v:r,alpha:n}){e=er(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.abs(e/60%2-1),i;switch(Math.floor(e/60)){case 0:i={r,g:r*(1-t*o),b:r*(1-t)};break;case 1:i={r:r*(1-t*o),g:r,b:r*(1-t)};break;case 2:i={r:r*(1-t),g:r,b:r*(1-t*o)};break;case 3:i={r:r*(1-t),g:r*(1-t*o),b:r};break;case 4:i={r:r*(1-t*o),g:r*(1-t),b:r};break;case 5:i={r,g:r*(1-t),b:r*(1-t*o)};break;default:i={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return i.mode="rgb",n!==void 0&&(i.alpha=n),i}function $$({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),i=Math.min(e,t,r),s={mode:"hsv",s:o===0?0:1-i/o,v:o};return o-i!==0&&(s.h=(o===e?(t-r)/(o-i)+(t<r)*6:o===t?(r-e)/(o-i)+2:(e-t)/(o-i)+4)*60),n!==void 0&&(s.alpha=n),s}const k$={mode:"hsv",toMode:{rgb:w$},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:$$},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:_,fixup:Do},s:_,v:_,alpha:{use:_,fixup:Bt}},difference:{h:hd},average:{h:Ao}};function OI({h:e,w:t,b:r,alpha:n}){if(t===void 0&&(t=0),r===void 0&&(r=0),t+r>1){let o=t+r;t/=o,r/=o}return w$({h:e,s:r===1?1:1-t/(1-r),v:1-r,alpha:n})}function BI(e){let t=$$(e);if(t===void 0)return;let r=t.s!==void 0?t.s:0,n=t.v!==void 0?t.v:0,o={mode:"hwb",w:(1-r)*n,b:1-n};return t.h!==void 0&&(o.h=t.h),t.alpha!==void 0&&(o.alpha=t.alpha),o}function RI(e,t){if(!t||t[0]!=="hwb")return;const r={mode:"hwb"},[,n,o,i,s]=t;if(n.type!==O.None){if(n.type===O.Percentage)return;r.h=n.value}if(o.type!==O.None){if(o.type===O.Hue)return;r.w=o.value/100}if(i.type!==O.None){if(i.type===O.Hue)return;r.b=i.value/100}return s.type!==O.None&&(r.alpha=Math.min(1,Math.max(0,s.type===O.Number?s.value:s.value/100))),r}const LI={mode:"hwb",toMode:{rgb:OI},fromMode:{rgb:BI},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[RI],serialize:e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:_,fixup:Do},w:_,b:_,alpha:{use:_,fixup:Bt}},difference:{h:$I},average:{h:Ao}},x$=203,bd=.1593017578125,D$=78.84375,yd=.8359375,vd=18.8515625,wd=18.6875;function Ef(e){if(e<0)return 0;const t=Math.pow(e,1/D$);return 1e4*Math.pow(Math.max(0,t-yd)/(vd-wd*t),1/bd)}function Cf(e){if(e<0)return 0;const t=Math.pow(e/1e4,bd);return Math.pow((yd+vd*t)/(1+wd*t),D$)}const Ff=e=>Math.max(e/x$,0),Cb=({i:e,t,p:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o=Ef(e+.008609037037932761*t+.11102962500302593*r),i=Ef(e-.00860903703793275*t-.11102962500302599*r),s=Ef(e+.5600313357106791*t-.32062717498731885*r),a={mode:"xyz65",x:Ff(2.070152218389422*o-1.3263473389671556*i+.2066510476294051*s),y:Ff(.3647385209748074*o+.680566024947227*i-.0453045459220346*s),z:Ff(-.049747207535812*o-.0492609666966138*i+1.1880659249923042*s)};return n!==void 0&&(a.alpha=n),a},Mf=(e=0)=>Math.max(e*x$,0),Fb=({x:e,y:t,z:r,alpha:n})=>{const o=Mf(e),i=Mf(t),s=Mf(r),a=Cf(.3592832590121217*o+.6976051147779502*i-.0358915932320289*s),u=Cf(-.1920808463704995*o+1.1004767970374323*i+.0753748658519118*s),l=Cf(.0070797844607477*o+.0748396662186366*i+.8433265453898765*s),c=.5*a+.5*u,d=1.61376953125*a-3.323486328125*u+1.709716796875*l,h=4.378173828125*a-4.24560546875*u-.132568359375*l,m={mode:"itp",i:c,t:d,p:h};return n!==void 0&&(m.alpha=n),m},jI={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:Cb,rgb:e=>ts(Cb(e))},fromMode:{xyz65:Fb,rgb:e=>Fb(es(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:_,t:_,p:_,alpha:{use:_,fixup:Bt}}},_I=134.03437499999998,UI=16295499532821565e-27,Sf=e=>{if(e<0)return 0;let t=Math.pow(e/1e4,bd);return Math.pow((yd+vd*t)/(1+wd*t),_I)},Tf=(e=0)=>Math.max(e*203,0),A$=({x:e,y:t,z:r,alpha:n})=>{e=Tf(e),t=Tf(t),r=Tf(r);let o=1.15*e-.15*r,i=.66*t+.34*e,s=Sf(.41478972*o+.579999*i+.014648*r),a=Sf(-.20151*o+1.120649*i+.0531008*r),u=Sf(-.0166008*o+.2648*i+.6684799*r),l=(s+a)/2,c={mode:"jab",j:.44*l/(1-.56*l)-UI,a:3.524*s-4.066708*a+.542708*u,b:.199076*s+1.096799*a-1.295875*u};return n!==void 0&&(c.alpha=n),c},zI=134.03437499999998,Mb=16295499532821565e-27,Nf=e=>{if(e<0)return 0;let t=Math.pow(e,1/zI);return 1e4*Math.pow((yd-t)/(wd*t-vd),1/bd)},Pf=e=>e/203,E$=({j:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+Mb)/(.44+.56*(e+Mb)),i=Nf(o+.13860504*t+.058047316*r),s=Nf(o-.13860504*t-.058047316*r),a=Nf(o-.096019242*t-.8118919*r),u={mode:"xyz65",x:Pf(1.661373024652174*i-.914523081304348*s+.23136208173913045*a),y:Pf(-.3250758611844533*i+1.571847026732543*s-.21825383453227928*a),z:Pf(-.090982811*i-.31272829*s+1.5227666*a)};return n!==void 0&&(u.alpha=n),u},C$=e=>{let t=A$(es(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},F$=e=>ts(E$(e)),VI={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:C$,xyz65:A$},toMode:{rgb:F$,xyz65:E$},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:_,a:_,b:_,alpha:{use:_,fixup:Bt}}},Sb=({j:e,a:t,b:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),i={mode:"jch",j:e,c:o};return o&&(i.h=er(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(i.alpha=n),i},Tb=({j:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let o={mode:"jab",j:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},qI={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:Tb,rgb:e=>F$(Tb(e))},fromMode:{rgb:e=>Sb(C$(e)),jab:Sb},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:_,fixup:Do},c:_,j:_,alpha:{use:_,fixup:Bt}},difference:{h:md},average:{h:Ao}},$d=Math.pow(29,3)/Math.pow(3,3),ig=Math.pow(6,3)/Math.pow(29,3);let If=e=>Math.pow(e,3)>ig?Math.pow(e,3):(116*e-16)/$d;const sg=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+16)/116,i=t/500+o,s=o-r/200,a={mode:"xyz50",x:If(i)*Et.X,y:If(o)*Et.Y,z:If(s)*Et.Z};return n!==void 0&&(a.alpha=n),a},Ku=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=ha({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*r,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*r,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*r});return n!==void 0&&(o.alpha=n),o},M$=e=>Ku(sg(e)),Gu=e=>{let{r:t,g:r,b:n,alpha:o}=fa(e),i={mode:"xyz50",x:.436065742824811*t+.3851514688337912*r+.14307845442264197*n,y:.22249319175623702*t+.7168870538238823*r+.06061979053616537*n,z:.013923904500943465*t+.09708128566574634*r+.7140993584005155*n};return o!==void 0&&(i.alpha=o),i},Of=e=>e>ig?Math.cbrt(e):($d*e+16)/116,ag=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Of(e/Et.X),i=Of(t/Et.Y),s=Of(r/Et.Z),a={mode:"lab",l:116*i-16,a:500*(o-i),b:200*(i-s)};return n!==void 0&&(a.alpha=n),a},S$=e=>{let t=ag(Gu(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function WI(e,t){if(!t||t[0]!=="lab")return;const r={mode:"lab"},[,n,o,i,s]=t;if(!(n.type===O.Hue||o.type===O.Hue||i.type===O.Hue))return n.type!==O.None&&(r.l=Math.min(Math.max(0,n.value),100)),o.type!==O.None&&(r.a=o.type===O.Number?o.value:o.value*125/100),i.type!==O.None&&(r.b=i.type===O.Number?i.value:i.value*125/100),s.type!==O.None&&(r.alpha=Math.min(1,Math.max(0,s.type===O.Number?s.value:s.value/100))),r}const ug={mode:"lab",toMode:{xyz50:sg,rgb:M$},fromMode:{xyz50:ag,rgb:S$},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[WI],serialize:e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{l:_,a:_,b:_,alpha:{use:_,fixup:Bt}}},KI={...ug,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:g$,rgb:gd},fromMode:{xyz65:p$,rgb:pd},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function GI(e,t){if(!t||t[0]!=="lch")return;const r={mode:"lch"},[,n,o,i,s]=t;if(n.type!==O.None){if(n.type===O.Hue)return;r.l=Math.min(Math.max(0,n.value),100)}if(o.type!==O.None&&(r.c=Math.max(0,o.type===O.Number?o.value:o.value*150/100)),i.type!==O.None){if(i.type===O.Percentage)return;r.h=i.value}return s.type!==O.None&&(r.alpha=Math.min(1,Math.max(0,s.type===O.Number?s.value:s.value/100))),r}const lg={mode:"lch",toMode:{lab:ei,rgb:e=>M$(ei(e))},fromMode:{rgb:e=>Qo(S$(e)),lab:Qo},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[GI],serialize:e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:_,fixup:Do},c:_,l:_,alpha:{use:_,fixup:Bt}},difference:{h:md},average:{h:Ao}},HI={...lg,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:e=>ei(e,"lab65"),rgb:e=>gd(ei(e,"lab65"))},fromMode:{rgb:e=>Qo(pd(e),"lch65"),lab65:e=>Qo(e,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},T$=({l:e,u:t,v:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),i={mode:"lchuv",l:e,c:o};return o&&(i.h=er(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(i.alpha=n),i},N$=({l:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let o={mode:"luv",l:e,u:t?t*Math.cos(r/180*Math.PI):0,v:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},P$=(e,t,r)=>4*e/(e+15*t+3*r),I$=(e,t,r)=>9*t/(e+15*t+3*r),ZI=P$(Et.X,Et.Y,Et.Z),JI=I$(Et.X,Et.Y,Et.Z),YI=e=>e<=ig?$d*e:116*Math.cbrt(e)-16,oh=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=YI(t/Et.Y),i=P$(e,t,r),s=I$(e,t,r);!isFinite(i)||!isFinite(s)?o=i=s=0:(i=13*o*(i-ZI),s=13*o*(s-JI));let a={mode:"luv",l:o,u:i,v:s};return n!==void 0&&(a.alpha=n),a},XI=(e,t,r)=>4*e/(e+15*t+3*r),QI=(e,t,r)=>9*t/(e+15*t+3*r),eO=XI(Et.X,Et.Y,Et.Z),tO=QI(Et.X,Et.Y,Et.Z),ih=({l:e,u:t,v:r,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};t===void 0&&(t=0),r===void 0&&(r=0);let o=t/(13*e)+eO,i=r/(13*e)+tO,s=Et.Y*(e<=8?e/$d:Math.pow((e+16)/116,3)),a=s*(9*o)/(4*i),u=s*(12-3*o-20*i)/(4*i),l={mode:"xyz50",x:a,y:s,z:u};return n!==void 0&&(l.alpha=n),l},rO=e=>T$(oh(Gu(e))),nO=e=>Ku(ih(N$(e))),oO={mode:"lchuv",toMode:{luv:N$,rgb:nO},fromMode:{rgb:rO,luv:T$},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:_,fixup:Do},c:_,l:_,alpha:{use:_,fixup:Bt}},difference:{h:md},average:{h:Ao}},iO={...da,mode:"lrgb",toMode:{rgb:ha},fromMode:{rgb:fa},parse:["srgb-linear"],serialize:"srgb-linear"},sO={mode:"luv",toMode:{xyz50:ih,rgb:e=>Ku(ih(e))},fromMode:{xyz50:oh,rgb:e=>oh(Gu(e))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:_,u:_,v:_,alpha:{use:_,fixup:Bt}}},O$=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*r),i=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*r),s=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*r),a={mode:"oklab",l:.210454268309314*o+.7936177747023054*i-.0040720430116193*s,a:1.9779985324311684*o-2.42859224204858*i+.450593709617411*s,b:.0259040424655478*o+.7827717124575296*i-.8086757549230774*s};return n!==void 0&&(a.alpha=n),a},kd=e=>{let t=O$(fa(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Hu=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.pow(e+.3963377773761749*t+.2158037573099136*r,3),i=Math.pow(e-.1055613458156586*t-.0638541728258133*r,3),s=Math.pow(e-.0894841775298119*t-1.2914855480194092*r,3),a={mode:"lrgb",r:4.076741636075957*o-3.3077115392580616*i+.2309699031821044*s,g:-1.2684379732850317*o+2.6097573492876887*i-.3413193760026573*s,b:-.0041960761386756*o-.7034186179359362*i+1.7076146940746117*s};return n!==void 0&&(a.alpha=n),a},xd=e=>ha(Hu(e));function sh(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}function vc(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function aO(e,t){let r,n,o,i,s,a,u,l;-1.88170328*e-.80936493*t>1?(r=1.19086277,n=1.76576728,o=.59662641,i=.75515197,s=.56771245,a=4.0767416621,u=-3.3077115913,l=.2309699292):1.81444104*e-1.19445276*t>1?(r=.73956515,n=-.45954404,o=.08285427,i=.1254107,s=.14503204,a=-1.2684380046,u=2.6097574011,l=-.3413193965):(r=1.35733652,n=-.00915799,o=-1.1513021,i=-.50559606,s=.00692167,a=-.0041960863,u=-.7034186147,l=1.707614701);let c=r+n*e+o*t+i*e*e+s*e*t,d=.3963377774*e+.2158037573*t,h=-.1055613458*e-.0638541728*t,m=-.0894841775*e-1.291485548*t;{let y=1+c*d,w=1+c*h,$=1+c*m,k=y*y*y,A=w*w*w,T=$*$*$,B=3*d*y*y,q=3*h*w*w,oe=3*m*$*$,De=6*d*d*y,de=6*h*h*w,$e=6*m*m*$,Ge=a*k+u*A+l*T,He=a*B+u*q+l*oe,St=a*De+u*de+l*$e;c=c-Ge*He/(He*He-.5*Ge*St)}return c}function cg(e,t){let r=aO(e,t),n=Hu({l:1,a:r*e,b:r*t}),o=Math.cbrt(1/Math.max(n.r,n.g,n.b)),i=o*r;return[o,i]}function uO(e,t,r,n,o,i=null){i||(i=cg(e,t));let s;if((r-o)*i[1]-(i[0]-o)*n<=0)s=i[1]*o/(n*i[0]+i[1]*(o-r));else{s=i[1]*(o-1)/(n*(i[0]-1)+i[1]*(o-r));{let a=r-o,u=n,l=.3963377774*e+.2158037573*t,c=-.1055613458*e-.0638541728*t,d=-.0894841775*e-1.291485548*t,h=a+u*l,m=a+u*c,y=a+u*d;{let w=o*(1-s)+s*r,$=s*n,k=w+$*l,A=w+$*c,T=w+$*d,B=k*k*k,q=A*A*A,oe=T*T*T,De=3*h*k*k,de=3*m*A*A,$e=3*y*T*T,Ge=6*h*h*k,He=6*m*m*A,St=6*y*y*T,Nr=4.0767416621*B-3.3077115913*q+.2309699292*oe-1,dr=4.0767416621*De-3.3077115913*de+.2309699292*$e,Jn=4.0767416621*Ge-3.3077115913*He+.2309699292*St,Rt=dr/(dr*dr-.5*Nr*Jn),Bn=-Nr*Rt,Yn=-1.2684380046*B+2.6097574011*q-.3413193965*oe-1,Xr=-1.2684380046*De+2.6097574011*de-.3413193965*$e,Gt=-1.2684380046*Ge+2.6097574011*He-.3413193965*St,Le=Xr/(Xr*Xr-.5*Yn*Gt),Tt=-Yn*Le,Qr=-.0041960863*B-.7034186147*q+1.707614701*oe-1,or=-.0041960863*De-.7034186147*de+1.707614701*$e,en=-.0041960863*Ge-.7034186147*He+1.707614701*St,mn=or/(or*or-.5*Qr*en),Eo=-Qr*mn;Bn=Rt>=0?Bn:1e6,Tt=Le>=0?Tt:1e6,Eo=mn>=0?Eo:1e6,s+=Math.min(Bn,Math.min(Tt,Eo))}}}return s}function dg(e,t,r=null){r||(r=cg(e,t));let n=r[0],o=r[1];return[o/n,o/(1-n)]}function B$(e,t,r){let n=cg(t,r),o=uO(t,r,e,1,e,n),i=dg(t,r,n),s=.11516993+1/(7.4477897+4.1590124*r+t*(-2.19557347+1.75198401*r+t*(-2.13704948-10.02301043*r+t*(-4.24894561+5.38770819*r+4.69891013*t)))),a=.11239642+1/(1.6132032-.68124379*r+t*(.40370612+.90148123*r+t*(-.27087943+.6122399*r+t*(.00299215-.45399568*r-.14661872*t)))),u=o/Math.min(e*i[0],(1-e)*i[1]),l=e*s,c=(1-e)*a,d=.9*u*Math.sqrt(Math.sqrt(1/(1/(l*l*l*l)+1/(c*c*c*c))));return l=e*.4,c=(1-e)*.8,[Math.sqrt(1/(1/(l*l)+1/(c*c))),d,o]}function Nb(e){const t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o={mode:"okhsl",l:sh(t)};e.alpha!==void 0&&(o.alpha=e.alpha);let i=Math.sqrt(r*r+n*n);if(!i)return o.s=0,o;let[s,a,u]=B$(t,r/i,n/i),l;if(i<a){let c=0,d=.8*s,h=1-d/a;l=(i-c)/(d+h*(i-c))*.8}else{let c=a,d=.2*a*a*1.25*1.25/s,h=1-d/(u-a);l=.8+.2*((i-c)/(d+h*(i-c)))}return l&&(o.s=l,o.h=er(Math.atan2(n,r)*180/Math.PI)),o}function Pb(e){let t=e.h!==void 0?e.h:0,r=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const o={mode:"oklab",l:vc(n)};if(e.alpha!==void 0&&(o.alpha=e.alpha),!r||n===1)return o.a=o.b=0,o;let i=Math.cos(t/180*Math.PI),s=Math.sin(t/180*Math.PI),[a,u,l]=B$(o.l,i,s),c,d,h,m;r<.8?(c=1.25*r,d=0,h=.8*a,m=1-h/u):(c=5*(r-.8),d=u,h=.2*u*u*1.25*1.25/a,m=1-h/(l-u));let y=d+c*h/(1-m*c);return o.a=y*i,o.b=y*s,o}const lO={...v$,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:Nb,rgb:e=>Nb(kd(e))},toMode:{oklab:Pb,rgb:e=>xd(Pb(e))}};function Ib(e){let t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o=Math.sqrt(r*r+n*n),i=o?r/o:1,s=o?n/o:1,[a,u]=dg(i,s),l=.5,c=1-l/a,d=u/(o+t*u),h=d*t,m=d*o,y=vc(h),w=m*y/h,$=Hu({l:y,a:i*w,b:s*w}),k=Math.cbrt(1/Math.max($.r,$.g,$.b,0));t=t/k,o=o/k*sh(t)/t,t=sh(t);const A={mode:"okhsv",s:o?(l+u)*m/(u*l+u*c*m):0,v:t?t/h:0};return A.s&&(A.h=er(Math.atan2(n,r)*180/Math.PI)),e.alpha!==void 0&&(A.alpha=e.alpha),A}function Ob(e){const t={mode:"oklab"};e.alpha!==void 0&&(t.alpha=e.alpha);const r=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,o=e.v!==void 0?e.v:0,i=Math.cos(r/180*Math.PI),s=Math.sin(r/180*Math.PI),[a,u]=dg(i,s),l=.5,c=1-l/a,d=1-n*l/(l+u-u*c*n),h=n*u*l/(l+u-u*c*n),m=vc(d),y=h*m/d,w=Hu({l:m,a:i*y,b:s*y}),$=Math.cbrt(1/Math.max(w.r,w.g,w.b,0)),k=vc(o*d),A=h*k/d;return t.l=k*$,t.a=A*i*$,t.b=A*s*$,t}const cO={...k$,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:Ib,rgb:e=>Ib(kd(e))},toMode:{oklab:Ob,rgb:e=>xd(Ob(e))}};function dO(e,t){if(!t||t[0]!=="oklab")return;const r={mode:"oklab"},[,n,o,i,s]=t;if(!(n.type===O.Hue||o.type===O.Hue||i.type===O.Hue))return n.type!==O.None&&(r.l=Math.min(Math.max(0,n.type===O.Number?n.value:n.value/100),1)),o.type!==O.None&&(r.a=o.type===O.Number?o.value:o.value*.4/100),i.type!==O.None&&(r.b=i.type===O.Number?i.value:i.value*.4/100),s.type!==O.None&&(r.alpha=Math.min(1,Math.max(0,s.type===O.Number?s.value:s.value/100))),r}const fO={...ug,mode:"oklab",toMode:{lrgb:Hu,rgb:xd},fromMode:{lrgb:O$,rgb:kd},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[dO],serialize:e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`};function hO(e,t){if(!t||t[0]!=="oklch")return;const r={mode:"oklch"},[,n,o,i,s]=t;if(n.type!==O.None){if(n.type===O.Hue)return;r.l=Math.min(Math.max(0,n.type===O.Number?n.value:n.value/100),1)}if(o.type!==O.None&&(r.c=Math.max(0,o.type===O.Number?o.value:o.value*.4/100)),i.type!==O.None){if(i.type===O.Percentage)return;r.h=i.value}return s.type!==O.None&&(r.alpha=Math.min(1,Math.max(0,s.type===O.Number?s.value:s.value/100))),r}const mO={...lg,mode:"oklch",toMode:{oklab:e=>ei(e,"oklab"),rgb:e=>xd(ei(e,"oklab"))},fromMode:{rgb:e=>Qo(kd(e),"oklch"),oklab:e=>Qo(e,"oklch")},parse:[hO],serialize:e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},Bb=e=>{let{r:t,g:r,b:n,alpha:o}=fa(e),i={mode:"xyz65",x:.486570948648216*t+.265667693169093*r+.1982172852343625*n,y:.2289745640697487*t+.6917385218365062*r+.079286914093745*n,z:0*t+.0451133818589026*r+1.043944368900976*n};return o!==void 0&&(i.alpha=o),i},Rb=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=ha({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*r,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*r,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*r},"p3");return n!==void 0&&(o.alpha=n),o},gO={...da,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:e=>Rb(es(e)),xyz65:Rb},toMode:{rgb:e=>ts(Bb(e)),xyz65:Bb}},Bf=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*Math.pow(t,1/1.8):16*e},Lb=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"prophoto",r:Bf(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*r),g:Bf(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*r),b:Bf(e*0+t*0+1.2119675456389452*r)};return n!==void 0&&(o.alpha=n),o},Rf=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*Math.pow(t,1.8):e/16},jb=e=>{let t=Rf(e.r),r=Rf(e.g),n=Rf(e.b),o={mode:"xyz50",x:.7977666449006423*t+.1351812974005331*r+.0313477341283922*n,y:.2880748288194013*t+.7118352342418731*r+899369387256e-16*n,z:0*t+0*r+.8251046025104602*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},pO={...da,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:Lb,rgb:e=>Lb(Gu(e))},toMode:{xyz50:jb,rgb:e=>Ku(jb(e))}},_b=1.09929682680944,bO=.018053968510807,Lf=e=>{const t=Math.abs(e);return t>bO?(Math.sign(e)||1)*(_b*Math.pow(t,.45)-(_b-1)):4.5*e},Ub=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"rec2020",r:Lf(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*r),g:Lf(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*r),b:Lf(e*.0176398574453108-t*.0427706132578085+.9421031212354739*r)};return n!==void 0&&(o.alpha=n),o},zb=1.09929682680944,yO=.018053968510807,jf=(e=0)=>{let t=Math.abs(e);return t<yO*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((t+zb-1)/zb,1/.45)},Vb=e=>{let t=jf(e.r),r=jf(e.g),n=jf(e.b),o={mode:"xyz65",x:.6369580483012911*t+.1446169035862083*r+.1688809751641721*n,y:.262700212011267*t+.6779980715188708*r+.059301716469862*n,z:0*t+.0280726930490874*r+1.0609850577107909*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},vO={...da,mode:"rec2020",fromMode:{xyz65:Ub,rgb:e=>Ub(es(e))},toMode:{xyz65:Vb,rgb:e=>ts(Vb(e))},parse:["rec2020"],serialize:"rec2020"},Mi=.0037930732552754493,R$=Math.cbrt(Mi),_f=e=>Math.cbrt(e)-R$,wO=e=>{const{r:t,g:r,b:n,alpha:o}=fa(e),i=_f(.3*t+.622*r+.078*n+Mi),s=_f(.23*t+.692*r+.078*n+Mi),a=_f(.2434226892454782*t+.2047674442449682*r+.5518098665095535*n+Mi),u={mode:"xyb",x:(i-s)/2,y:(i+s)/2,b:a-(i+s)/2};return o!==void 0&&(u.alpha=o),u},Uf=e=>Math.pow(e+R$,3),$O=({x:e,y:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o=Uf(e+t)-Mi,i=Uf(t-e)-Mi,s=Uf(r+t)-Mi,a=ha({r:11.031566904639861*o-9.866943908131562*i-.16462299650829934*s,g:-3.2541473810744237*o+4.418770377582723*i-.16462299650829934*s,b:-3.6588512867136815*o+2.7129230459360922*i+1.9459282407775895*s});return n!==void 0&&(a.alpha=n),a},kO={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:$O},fromMode:{rgb:wO},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:_,y:_,b:_,alpha:{use:_,fixup:Bt}}},xO={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:Ku,lab:ag},fromMode:{rgb:Gu,lab:sg},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:_,y:_,z:_,alpha:{use:_,fixup:Bt}}},DO=e=>{let{x:t,y:r,z:n,alpha:o}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let i={mode:"xyz50",x:1.0479298208405488*t+.0229467933410191*r-.0501922295431356*n,y:.0296278156881593*t+.990434484573249*r-.0170738250293851*n,z:-.0092430581525912*t+.0150551448965779*r+.7518742899580008*n};return o!==void 0&&(i.alpha=o),i},AO=e=>{let{x:t,y:r,z:n,alpha:o}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let i={mode:"xyz65",x:.9554734527042182*t-.0230985368742614*r+.0632593086610217*n,y:-.0283697069632081*t+1.0099954580058226*r+.021041398966943*n,z:.0123140016883199*t-.0205076964334779*r+1.3303659366080753*n};return o!==void 0&&(i.alpha=o),i},EO={mode:"xyz65",toMode:{rgb:ts,xyz50:DO},fromMode:{rgb:es,xyz50:AO},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:_,y:_,z:_,alpha:{use:_,fixup:Bt}}},CO=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o={mode:"yiq",y:.29889531*e+.58662247*t+.11448223*r,i:.59597799*e-.2741761*t-.32180189*r,q:.21147017*e-.52261711*t+.31114694*r};return n!==void 0&&(o.alpha=n),o},FO=({y:e,i:t,q:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o={mode:"rgb",r:e+.95608445*t+.6208885*r,g:e-.27137664*t-.6486059*r,b:e-1.10561724*t+1.70250126*r};return n!==void 0&&(o.alpha=n),o},MO={mode:"yiq",toMode:{rgb:FO},fromMode:{rgb:CO},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:_,i:_,q:_,alpha:{use:_,fixup:Bt}}},SO=e=>Math.max(0,Math.min(1,e||0)),zf=e=>Math.round(SO(e)*255),TO=_i("rgb"),NO=e=>{if(e===void 0)return;let t=zf(e.r),r=zf(e.g),n=zf(e.b);return"#"+(1<<24|t<<16|r<<8|n).toString(16).slice(1)},PO=e=>NO(TO(e)),IO=e=>{const t={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},OO=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1);function BO(e="rgb"){const{gamut:t}=fd(e);if(!t)return n=>!0;const r=_i(typeof t=="string"?t:e);return n=>OO(r(n))}function RO(e="rgb"){const{gamut:t}=fd(e);if(!t)return i=>X0(i);const r=typeof t=="string"?t:e,n=_i(r),o=BO(r);return i=>{const s=X0(i);if(!s)return;const a=n(s);if(o(a))return s;const u=IO(a);return s.mode===u.mode?u:_i(s.mode)(u)}}Pe(gI);Pe(xI);Pe(DI);Pe(AI);Pe(FI);Pe(v$);Pe(k$);Pe(LI);Pe(jI);Pe(VI);Pe(qI);Pe(ug);Pe(KI);Pe(lg);Pe(HI);Pe(oO);Pe(iO);Pe(sO);Pe(lO);Pe(cO);Pe(fO);Pe(mO);Pe(gO);Pe(pO);Pe(vO);Pe(da);Pe(kO);Pe(xO);Pe(EO);Pe(MO);const LO=kI("rgb");class go{constructor(t){this.set(t)}static isValidColorString(t){try{return new go(t),!0}catch{return!1}}static isColor(t){return t instanceof go}static deserialize(t){const r=JSON.parse(t),n=new go("black");return An(r).forEach(([o,i])=>{o==="originalColorSyntax"?n.originalColorSyntax=_t.isEnumValue(i,he,"Cannot deserialize: invalid color syntax."):n._allColors[o]=i}),n}getRgbDistance(t){return LO(this.#e,t)}getClosestNamedColor(){return je(wu).reduce((t,r)=>{const n=this.getRgbDistance(r);return n<t.distance?{distance:n,name:r}:t},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=he.hex;#e=_t.isDefined(th("black"));_allColors={names:["black"],[he.name]:"black",hexString:"#000000",[he.hex]:{r:0,g:0,b:0},[he.rgb]:{r:0,g:0,b:0},[he.hsl]:{h:0,s:0,l:0},[he.hwb]:{h:0,w:0,b:0},[he.lab]:{l:0,a:0,b:0},[he.lch]:{l:0,c:0,h:0},[he.oklab]:{l:0,a:0,b:0},[he.oklch]:{l:0,c:0,h:0}};clone(){return go.deserialize(this.serialize())}setByString(t){const r=th(t);if(!r)throw new Error(`Unable to parse invalid color string: '${t}'`);this.originalColorSyntax=WP(t),this.#e=r,this.pullFromInternalColor()}set(t){if(F.isString(t))return this.setByString(t);if(Dt.isLengthExactly(Object.keys(t),1,`Cannot set multiple color formats at once: got '${sv(Object.keys(t))}'`),t.hexString||t.name)this.setByString(t.hexString||t.name);else{const[r,n]=_t.isDefined(An(t)[0]),o=jn[r],i=Object.values(Qe(o.coords,s=>{const a=n[s],u=o.coords[_t.isKeyOf(s,o.coords)],l=a!=null&&a>=u.min&&a<=u.max?n[s]:this[r][s];return _t.isDefined(l)}));this.setByString(`${o.conversionFormat}(${i.join(" ")})`)}}pullFromInternalColor(){Or(Xo).forEach(t=>{const r=jn[t],n=r.conversionFormat,o=F.isKeyOf(this.#e.mode,jn)?jn[this.#e.mode]:void 0,i=RO(r.colorSpace===o?.colorSpace?n:"rgb")(_i(n)(this.#e));i||Dt.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${t}'.`),je(this[t]).forEach(s=>{const a=i[s],u=r.coords[_t.isKeyOf(s,r.coords)];a!=null&&(this._allColors[t][s]=ov((a||0)*(u.factor||1),{digits:u.digits||0}))})}),this._allColors.hexString=PO(this.#e),this._allColors.names=jO(this.rgb),this._allColors[he.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return yn(this._allColors)}toFormattedStrings(){return{...Qe(jn,r=>Object.values(this[r]).map(o=>String(o).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(vb," "),[he.name]:(this.names[0]||"").padEnd(vb," "),[he.hexString]:this[he.hexString]}}toCss(){return{...Qe(jn,r=>{const n=Object.values(this[r]);return`${r}(${n.join(" ")})`}),[he.hexString]:this[he.hexString],[he.name]:this.names[0]||""}}get names(){return yn(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[he.hexString]}get hex(){return yn(this._allColors[he.hex])}get rgb(){return yn(this._allColors[he.rgb])}get hsl(){return yn(this._allColors[he.hsl])}get hwb(){return yn(this._allColors[he.hwb])}get lab(){return yn(this._allColors[he.lab])}get lch(){return yn(this._allColors[he.lch])}get oklab(){return yn(this._allColors[he.oklab])}get oklch(){return yn(this._allColors[he.oklch])}}function jO(e){return $o(An(wu),([t])=>t,(t,[,r])=>F.deepEquals(r,[e.r,e.g,e.b]))}function qb(e){if(typeof e=="string")return _O(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let t=[0,0,0,0,!1,"unknown"];return t[0]=e.r?e.r:e.red?e.red:!1,t[1]=e.g?e.g:e.green?e.green:!1,t[2]=e.b?e.b:e.blue?e.blue:!1,t[3]=e.a?e.a:e.alpha?e.alpha:1,t[4]=!!(t[0]&&t[1]&&t[2]),t[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",t}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}function _O(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let t=!1,n=[0,0,0,0,t,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let a in s)if(e==a){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:function(c){for(let d=0;d<3;d++)n[d]=parseInt(c[d+1],16);return n[3]=1,!0}},l=u.rex.exec(s[a]);return n[4]=t=u.sprig(l),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:function(s){let a=0,u=0,l=10,c=100,d=2.55,h="1";s[23]&&(h=s[23],delete s[23]),n[3]=h.match(/%/g)?parseFloat(h)/c:parseFloat(h);for(let m=1;m<s.length;m++)s[m]&&(a=a||m,u=m);switch(u){case 4:l=16,c=15,n[3]=parseInt(s[u],l)/c;case 3:l=16;for(let m=0;m<3;m++)n[m]=parseInt(s[a+m]+s[a+m],l);break;case 5:l=16;case 9:n[0]=n[1]=n[2]=l==10?parseFloat(s[u]):parseInt(s[u],l);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[u])*d;break;case 8:l=16,c=255,n[3]=parseInt(s[8],l)/c;case 7:l=16;case 11:for(let m=0;m<3;m++)n[m]=l==10?parseFloat(s[a+m]):parseInt(s[a+m],l);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(s[a+m])*d;break;case 18:n[5]=s[15];for(let m=0;m<3;m++)a++,n[m]=s[a].match(/%/g)?parseFloat(s[a])*2.55:parseFloat(s[a])*255;break;case 22:n[5]=s[a];for(let m=0;m<3;m++)a++,n[m]=s[a]?s[a].match(/%/g)?parseFloat(s[a])/c:parseFloat(s[a]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let T=function(B){let q=(B+A/30)%12,oe=m*Math.min(y,1-y);return y-oe*Math.max(-1,Math.min(q-3,9-q,1))},m,y,w,$,k,A=n[0]%360;if(A<0&&(A+=360),n[5].match(/^hsla?/i))m=n[1],y=n[2],w=0,k=1;else if(n[5].match(/^hwba?/i)){if(w=n[1],$=n[2],w+$>=1){n[0]=n[1]=n[2]=w/(w+$),n[5]="sRGB";break}m=1,y=.5,k=1-w-$}n[0]=Math.round(255*(T(0)*k+w)),n[1]=Math.round(255*(T(8)*k+w)),n[2]=Math.round(255*(T(4)*k+w)),n[5]="sRGB"}break}return!0}},i=o.rex.exec(e);return i?(n[4]=t=o.parsley(i),n):(t=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,t,"parsleyError"])}const vt={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function UO(e,t,r=-1){const n=[0,1.1];if(isNaN(e)||isNaN(t)||Math.min(e,t)<n[0]||Math.max(e,t)>n[1])return 0;let o=0,i=0,s="BoW";return e=e>vt.blkThrs?e:e+Math.pow(vt.blkThrs-e,vt.blkClmp),t=t>vt.blkThrs?t:t+Math.pow(vt.blkThrs-t,vt.blkClmp),Math.abs(t-e)<vt.deltaYmin?0:(t>e?(o=(Math.pow(t,vt.normBG)-Math.pow(e,vt.normTXT))*vt.scaleBoW,i=o<vt.loClip?0:o-vt.loBoWoffset):(s="WoB",o=(Math.pow(t,vt.revBG)-Math.pow(e,vt.revTXT))*vt.scaleWoB,i=o>-.1?0:o+vt.loWoBoffset),r<0?i*100:r==0?Math.round(Math.abs(i)*100)+"<sub>"+s+"</sub>":Number.isInteger(r)?(i*100).toFixed(r):0)}function zO(e,t,r=-1,n=!0){let o=qb(t),i=qb(e);return!(i[3]==""||i[3]==1)&&(i=qO(i,o,n)),UO(Wb(i),Wb(o),r)}function VO(e,t=2){const r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],i=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(t),0,0,0,0,0,0,0,0,0];s.length;let a=777;e=Math.abs(e);const u=.2,l=e==0?1:e*u|0;let c=0,d=(e-r[l][c])*u;for(c++;c<i;c++)a=r[l][c],a>400?s[c]=a:e<14.5?s[c]=999:e<29.5?s[c]=777:a>24?s[c]=Math.round(a-n[l][c]*d):s[c]=a-(2*n[l][c]*d|0)*.5;return s}function Wb(e=[0,0,0]){function t(r){return Math.pow(r/255,vt.mainTRC)}return vt.sRco*t(e[0])+vt.sGco*t(e[1])+vt.sBco*t(e[2])}function qO(e=[0,0,0,1],t=[0,0,0],r=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let i=0;i<3;i++)o[i]=t[i]*n+e[i]*e[3],r&&(o[i]=Math.min(Math.round(o[i]),255));return o}const L$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};Qe(L$,e=>e);Object.fromEntries(Object.entries(L$).map(([e,t])=>[t,e]));const Kb=new Map;function WO({background:e,foreground:t}){const r=`${t}|${e}`,n=Kb.get(r);if(n)return n;const o=ov(Number(zO(t,e)),{digits:1}),i={contrast:o,fontSizes:KO(o),contrastLevel:GO(o)};return Kb.set(r,i),i}function KO(e){const t=VO(e).slice(1);return Fu(t,(n,o)=>({key:(o+1)*100,value:n}))}function GO(e){return _t.isDefined(Dd.find(t=>t.min<=Math.abs(e)))}var We;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(We||(We={}));const HO={[We.SmallBodyText]:"Small Text",[We.BodyText]:"Body Text",[We.NonBodyText]:"Non-body Text",[We.Header]:"Header",[We.Placeholder]:"Placeholder",[We.Decoration]:"Decoration",[We.Invisible]:"Invisible"};We.SmallBodyText,We.BodyText,We.NonBodyText,We.Header,We.Placeholder,We.Decoration,We.Invisible;const Dd=[{min:90,name:We.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:We.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:We.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:We.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:We.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:We.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:We.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];Fu(Dd,e=>({key:e.min,value:e}));Fu(Dd,e=>({key:e.name,value:e}));const Vf=On()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:({cssVars:e})=>E`
        :host {
            display: flex;
            align-items: center;
            font-family: ${eg["vira-monospace"].value};
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

        ${xe} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,events:{valueChange:at()},render({inputs:e,events:t,dispatch:r,cssVars:n}){const o=jn[e.colorFormatName],i=o.coords[e.colorCoordinateName];if(!i)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const s=10,a=p3(s,d=>{const h=i.min+(i.max-i.min)*(d/s);return new go({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:h}}).toCss()[o.conversionFormat]}),u=E`linear-gradient(to right, ${Re(a.join(","))})`,l=_t.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),c=i.radix?Math.round(l).toString(i.radix).toUpperCase().padStart(i.radixPad||0,"0"):String(l);return g`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${E`
                    ${n["vir-color-slider-gradient"].name}: ${u};
                `}
                step=${Math.pow(10,i.digits?-i.digits:0)}
                ${tN(d=>{Dt.instanceOf(d,HTMLInputElement),d.min=String(i.min),d.max=String(i.max),d.value=String(l)})}
                ${j("input",d=>{const h=ud(d,HTMLInputElement),m=Number(h.value);isNaN(m)||r(new t.valueChange(m))})}
            />
            <${xe.assign({value:c})}
                ${j(xe.events.valueChange,d=>{const h=i.radix?parseInt(d.detail,i.radix):Number(d.detail);isNaN(h)||r(new t.valueChange(h))})}
            ></${xe}>
        `}}),qf=On()({tagName:"vir-color-format-sliders",styles:E`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${Wu};
        }
    `,events:{colorChange:at()},render({inputs:e,dispatch:t,events:r}){const n=jn[e.colorFormatName],o=je(n.coords).map(i=>g`
                    <${Vf.assign({color:e.color,colorCoordinateName:i,colorFormatName:e.colorFormatName})}
                        ${j(Vf.events.valueChange,s=>{const a=e.color.clone();a.set({[e.colorFormatName]:{[i]:s.detail}});const u=a.toCss()[n.conversionFormat];t(new r.colorChange(u))})}
                    ></${Vf}>
                `);return g`
            ${e.showFormatName?g`
                      <h3>${e.colorFormatName}</h3>
                  `:Q}
            ${o}
        `}}),Wf=On()({tagName:"vir-color-swatch",styles:E`
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
    `,render({inputs:e}){const t=e.backgroundColor||e.foregroundColor,r=e.foregroundColor||"transparent";return g`
            <div
                style=${E`
                    background-color: ${Re(t)};
                    color: ${Re(r)};
                `}
            >
                <slot></slot>
            </div>
        `}}),Kf=On()({tagName:"vir-contrast-indicator",styles:E`
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

        .${Re(We.Invisible)} {
            color: red;
        }
        .${Re(We.Decoration)} {
            color: #ff6600;
        }
        .${Re(We.Placeholder)} {
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
    `,render({inputs:e}){const t=Dd.toReversed().slice(1).map(o=>g`
                    <div
                        class="gauge-level ${yr({active:o.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),r=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return g`
            <div title=${r} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${t}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${HO[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),Gb=On()({tagName:"vir-color-pair",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"vir-color-pair-no-contrast-tips":({inputs:e,state:t})=>!e.showContrast&&!t.forceShowEverything},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Br};
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
            font-family: ${eg["vira-monospace"].value};
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${Wu};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${Kf} {
            margin-top: 1px;
        }
    `,render({state:e,updateState:t,inputs:r}){const n=["foreground","background"].map(a=>{const u=[r.color[a].name,r.showVarValues||e.forceShowEverything?":":""].filter(F.isTruthy).join(""),l=r.showVarValues||e.forceShowEverything?g`
                          <span>${r.color[a].default}</span>
                      `:Q;return g`
                <p>
                    <span>${u}</span>
                    ${l}
                </p>
            `}),o=r.showVarNames||e.forceShowEverything?g`
                      <div class="css-var-names">${n}</div>
                  `:Q,i=e.previewElement?WO({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,s=i&&(r.showContrast||e.forceShowEverything)?g`
                      <${Kf.assign({contrast:i,fontWeight:r.fontWeight})}></${Kf}>
                  `:Q;return g`
            <button
                ${j("click",()=>{t({forceShowEverything:!e.forceShowEverything})})}
                ${Ri(a=>{t({previewElement:_t.instanceOf(a,HTMLElement)})})}
                class="color-preview"
                style=${E`
                    color: ${Re(r.color.foreground.default)};
                    background: ${Re(r.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${E`
                                visibility: ${Re((i?.fontSizes[400]||1/0)>150?"hidden":"visible")};
                                font-weight: ${r.fontWeight};
                                font-size: ${i?i.fontSizes[400]:14}px;
                            `}
                        >
                            Min
                        </span>
                    </span>
                </div>
            </button>
            ${s} ${o}
        `}});class ZO{shapes;options;constructor(t,r={}){this.shapes=t,this.options=r,this.storeName=r.storeName||"local-storage-client",this.get=Qe(this.shapes,n=>(o={})=>this.getAllValues(o)[n]),this.set=Qe(this.shapes,n=>o=>{uc(o,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const i=this.getAllValues();return i[n]=o,globalThis.localStorage.setItem(this.storeName,JSON.stringify(i)),o}),this.delete=Qe(this.shapes,n=>()=>{const o=this.getAllValues();delete o[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(o))})}storeName;getAllValues({throwErrorOnFailure:t=!1}={}){return Y2(()=>{const r=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return X2(r,(n,o)=>{const i=this.shapes[n];if(i){if(t)uc(o,i,{allowExtraKeys:!0});else if(!_o(o,i,{allowExtraKeys:!0}))return;return{key:n,value:o}}})},{handleError:r=>{if(t)throw Gs(r,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}}})}get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}}const Gf=new ZO({lastFormat:Oi(Xo)}),JO=nu(Xo).map(e=>({value:e,label:e.toUpperCase()})),Ea=On()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:Ns.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:Ns.Length}},state(){return{selectedFormatName:Gf.get.lastFormat()||Xo.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":({inputs:e})=>!!e.alwaysShowPicker},styles:({cssVars:e,hostClasses:t})=>E`
        :host {
            display: inline-flex;
        }

        ${t["vir-color-picker-always-show"].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${Br}
            cursor: pointer;
            display: flex;
        }

        ${le} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${Wf} {
                width: ${e["vir-color-picker-swatch-width"].value};
                height: ${e["vir-color-picker-swatch-height"].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${eg["vira-monospace"].value};
            font-size: 12px;
            color: #666;
            display: flex;
            justify-content: center;
            gap: 2px;
            align-items: center;

            & ${V} {
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
            ${Ci.menuShadow}
        }

        .raw-input-wrapper {
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 12px;
            ${N["vira-form-border-color"].name}: #ddd;
            color: #666;

            & ${xe} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,events:{colorChange:at()},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const i=go.isColor(e.color)?e.color:new go(e.color||"black"),s=jn[n.selectedFormatName],a=n.rawInput??i.toCss()[s.rawSyntax],u=g`
            <div class="raw-input-wrapper">
                <${xe.assign({value:a})}
                    ${j(xe.events.valueChange,h=>{const m=h.detail;o({rawInput:m}),go.isValidColorString(m)&&t(new r.colorChange(m))})}
                ></${xe}>
                <button
                    class="code-button"
                    ${j("click",async()=>{await globalThis.navigator.clipboard.writeText(a)})}
                >
                    <${V.assign({icon:W0,fitContainer:!0})}></${V}>
                </button>
            </div>
        `,l=g`
            <button
                class="code-button"
                ${j("click",async()=>{await globalThis.navigator.clipboard.writeText(i.hexString)})}
            >
                <span>${i.hexString}</span>
                <${V.assign({icon:W0,fitContainer:!0})}></${V}>
            </button>
        `,c=g`
            <div class="swatch-wrapper">
                <${Wf.assign({backgroundColor:i})}></${Wf}>
                ${e.showHexValue?l:Q}
            </div>
        `,d=g`
            <div class="picker">
                <${Be.assign({options:JO,value:n.selectedFormatName})}
                    ${j(Be.events.valueChange,h=>{const m=Dh.isEnumValue(h.detail,Xo);m&&(o({selectedFormatName:m}),Gf.set.lastFormat(m))})}
                ></${Be}>
                ${u}
                <${qf.assign({color:i,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${j(qf.events.colorChange,h=>{t(new r.colorChange(h.detail)),o({rawInput:void 0})})}
                ></${qf}>
            </div>
        `;return e.alwaysShowPicker?g`
                ${c} ${d}
            `:g`
                <${le.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${le.slotNames.trigger}
                        ${j("mousedown",()=>{const h=Gf.get.lastFormat();h&&o({selectedFormatName:h})})}
                    >
                        ${c}
                    </button>
                    <div class="pop-up" slot=${le.slotNames.popUp}>
                        ${d}
                    </div>
                </${le}>
            `}}),ku=Yr()({tagName:"book-page-controls",events:{controlValueChange:at()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Ee["element-book-page-foreground-faint-level-1-color"].value};
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

        ${xe}, ${Be} {
            height: 24px;
            max-width: 128px;
        }

        ${V}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===X.Hidden)return"";const s=YO(e.currentValues[n],o,a=>{const u=F.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...Object.fromEntries(Object.keys(e.config).map(l=>[l,e.currentValues[l]])),[n]:a}}))});return g`
                    <div class="control-wrapper">
                        ${Fr(i===0,g`
                                <${V.assign({icon:Ga})}
                                    class="options-icon"
                                ></${V}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${o.controlType===X.Custom?g`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function YO(e,t,r){return mi(t,X.Hidden)?"":mi(t,X.Checkbox)?g`
            <${se.assign({value:!!e})}
                ${j(se.events.valueChange,n=>{r(n.detail)})}
            ></${se}>
        `:mi(t,X.Color)?g`
            <${Ea.assign({color:e})}
                style=${E`
                    ${Ea.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${Ea.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${j(Ea.events.colorChange,n=>{r(n.detail)})}
            ></${Ea}>
        `:mi(t,X.Text)?g`
            <${xe.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${j(xe.events.valueChange,n=>{r(n.detail)})}
            ></${xe}>
        `:mi(t,X.Number)?g`
            <${xe.assign({value:e,allowedInputs:/\d/})}
                ${j(xe.events.valueChange,n=>{r(n.detail)})}
            ></${xe}>
        `:mi(t,X.Dropdown)?g`
            <${Be.assign({value:e,options:t.options.map(n=>({label:n,value:n}))})}
                ${j(Be.events.valueChange,n=>{r(n.detail)})}
            ></${Be}>
        `:mi(t,X.Custom)?t.content:g`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const Hb=Yr()({tagName:"book-breadcrumbs",styles:E`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const i=n>=o.length-1,s=o.slice(0,n+1),a=i?"":g`
                      <span class="spacer">&gt;</span>
                  `;return g`
                <${on.assign({route:{hash:void 0,search:void 0,paths:[Ar.Book,...s]},router:e.router})}>
                    ${r}
                </${on}>
                ${a}
            `}):g`
                &nbsp;
            `}}),Hf=Yr()({tagName:"book-breadcrumbs-bar",styles:E`
        :host {
            border-bottom: 1px solid
                ${Ee["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Ee["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return g`
            ${Fr(!!e.currentSearch,g`
                    &nbsp;
                `,g`
                    <${Hb.assign({currentRoute:e.currentRoute,router:e.router})}></${Hb}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${j("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await Si({milliseconds:200}),n.value===o&&(n.value?t(new dc({paths:[Ar.Search,encodeURIComponent(n.value)]})):t(new dc(Ss)))})}
            />
        `}}),Zb=Yr()({tagName:"book-entry-description",styles:E`
        :host {
            color: ${Ee["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Ee["element-book-page-foreground-color"].value};
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
            `)}}),Jb=Yr()({tagName:"book-page-wrapper",styles:E`
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

        ${on} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?g`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:g`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Ar.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?J2(e.pageNode.entry.errors):void 0;n&&console.error(n);const o=e.blockNavigation?t:g`
                  <${on.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${on}>
              `;return g`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${o}
                    ${n?g`
                              <${Yo.assign({message:n.message})}></${Yo}>
                          `:g`
                              <${Zb.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${Zb}>
                              <${ku.assign({config:e.pageNode.entry.controls,currentValues:Th(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ku}>
                          `}
                </div>
            </div>
        `}}),$l=Yr()({tagName:"book-element-example-title",styles:E`
        :host {
            display: flex;
            color: ${Ee["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const t=[Ar.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return g`
            <${on.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${on}>
        `}}),Yb=Symbol("unset-internal-state"),Xb=Yr()({tagName:"book-element-example-viewer",state(){return{isUnset:Yb}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw J2(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Yb&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return g`
                ${Fr(!!t.elementExampleNode.entry.styles,g`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",qt(n)),console.error(n),g`
                <${Yo.assign({message:`${t.elementExampleNode.entry.title} failed: ${qt(n)}`})}></${Yo}>
            `}},options:{allowPolymorphicState:!0}}),Qb=Yr()({tagName:"book-element-example-wrapper",styles:E`
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

        ${$l} {
            color: ${Ee["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${$l} {
            color: ${Ee["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return g`
            <div class="individual-example-wrapper">
                <${$l.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${$l}>
                <${Xb.assign(e)}></${Xb}>
            </div>
        `}}),XO={milliseconds:10};let Ba;const wc=new Map,wi=new Map;function QO(){return Ba||(Ba=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=wc.get(r);if(n)if(t.isIntersecting){if(!wi.has(r)){const o=globalThis.setTimeout(()=>{wi.delete(r),n(),Ba?.unobserve(r),wc.delete(r)},Fs(XO,{milliseconds:!0}).milliseconds);wi.set(r,o)}}else{const o=wi.get(r);o&&(clearTimeout(o),wi.delete(r))}}},{rootMargin:"100px"})),Ba}function ey(e){const t=wi.get(e);t&&(clearTimeout(t),wi.delete(e)),wc.delete(e),Ba?.unobserve(e)}const kl=Yr()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:E`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&ey(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:g`
            <div
                class="placeholder"
                ${Ri(n=>{t.placeholderElement&&ey(t.placeholderElement),r({placeholderElement:n}),wc.set(n,()=>{r({hasRendered:!0})}),QO().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function j$(e,t,r,n){const o=b0(r,n),i=[];if(o){const s=j$(e,t,o,n);s&&i.push(s)}if(ks(r,Jt.Page)&&!e.includes(r)){const s=Th(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:s,breadcrumbs:Qe(s,()=>r.fullUrlBreadcrumbs)})}return i.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function eB({blockNavigation:e,currentNodes:t,isTopLevel:r,router:n,isSearching:o,controls:i,originalTree:s}){if(!t.length&&o)return[g`
                No results
            `];const a=F.isLengthAtLeast(t,1)?j$(t,i,t[0],s):void 0,u=a&&Object.values(a.config).length&&F.isLengthAtLeast(t,1)?g`
                  <${ku.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${ku}>
              `:Q,l=ZT(t,c=>c.fullUrlBreadcrumbs.join(">"),c=>{if(ks(c,Jt.Page))return g`
                    <${Jb.assign({blockNavigation:e,isTopLevel:r,pageNode:c,controls:i,router:n})}
                        class="block-entry"
                    ></${Jb}>
                `;if(ks(c,Jt.ElementExample)){const d=Th(i,c.fullUrlBreadcrumbs.slice(0,-1)),h=g`
                    <${Qb.assign({blockNavigation:e,elementExampleNode:c,currentPageControls:d,router:n})}></${Qb}>
                `;return g`
                    <${kl.assign({content:h})}
                        class="inline-entry ${yr({"block-entry":c.entry.isVertical})}"
                    ></${kl}>
                `}else{if(ks(c,Jt.Root))return Q;{const d=g`
                    <${Yo.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}></${Yo}>
                `;return g`
                    <${kl.assign({content:d})}
                        class="block-entry"
                    ></${kl}>
                `}}});return[u,l]}const ds=Yr()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:E`
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

        ${Hf} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${bo["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:at()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=fv(e.currentRoute.paths),s=eB({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return g`
            <${Hf.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${Hf}>

            ${Fr(e.showLoading,g`
                    <div
                        ${Ri(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${V.assign({icon:Li})}></${V}>
                    </div>
                    ${Fr(!!n.lastElement,g`
                            ${n.lastElement}
                            <slot name=${zn.Footer}></slot>
                        `)}
                `,g`
                    <div
                        ${Ri(a=>{o({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${zn.Footer}></slot>
                `)}
        `}});function tB(e,t,r){const n=ty(e,t);return n.length?n:(r(Ss),ty(e,Ss.paths))}function ty(e,t){return e.filter(r=>q3({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Zf=On()({tagName:"element-book-app",state(){return{currentRoute:Ss,router:void 0,loading:!0,colors:{config:void 0,theme:rb(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:at()},styles:E`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Ee["element-book-page-background-color"].value};
            color: ${Ee["element-book-page-foreground-color"].value};
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

        ${ds} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${cs} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const d=s(c);return!F.jsonEquals(e.currentRoute,d)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(F.isTruthy).join(" - "))}function l(c){if(!a(c))return;const d=s(c);e.router?e.router.setRoute(d):n({currentRoute:{...e.currentRoute,...d}}),t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(d.paths))}try{if(t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const k=BN(t.internalRouterConfig.basePath);n({router:k}),k.listen(!0,A=>{n({currentRoute:A})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!F.jsonEquals(c,e.colors.config)){const k=rb(c);n({colors:{config:c,theme:k}}),A6(r,k)}const d=t._debug??!1,h=J3({entries:t.pages,debug:d});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:dv(h.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=fv(e.currentRoute.paths),w=(m?DN({flattenedNodes:h.flattenedNodes,searchQuery:m}):void 0)??tB(h.flattenedNodes,e.currentRoute.paths,l);u(w[0]?.entry.title);const $=e.treeBasedControls?.controls;return $?(t._debug&&console.info({currentControls:$}),g`
                <div
                    class="root"
                    ${j(dc,k=>{const A=k.detail;if(!a(A))return;if(n({loading:!0}),l(A),!(r.shadowRoot.querySelector(cs.tagName)instanceof cs))throw new TypeError(`Failed to find child '${cs.tagName}'`)})}
                    ${j(ku.events.controlValueChange,k=>{if(!e.treeBasedControls)return;const A=X3($,k.detail.fullUrlBreadcrumbs,k.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:A}})})}
                >
                    ${t.blockNavigation?Q:g`
                              <${cs.assign({flattenedNodes:h.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot
                                      name=${zn.NavHeader}
                                      slot=${zn.NavHeader}
                                  ></slot>
                              </${cs}>
                          `}
                    <${ds.assign({blockNavigation:!!t.blockNavigation,controls:$,currentNodes:w,currentRoute:e.currentRoute,debug:d,originalTree:h.tree,router:e.router,showLoading:e.loading})}
                        ${j(ds.events.loadingRender,async k=>{await nb();const A=r.shadowRoot.querySelector(ds.tagName);A?A.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${ds.tagName}' for scrolling.`),await nb(),n({loading:!k.detail})})}
                    >
                        <slot
                            name=${zn.Footer}
                            slot=${zn.Footer}
                        ></slot>
                    </${ds}>
                </div>
            `):g`
                    <${Yo.assign({message:"Failed to generate page controls."})}></${Yo}>
                `}catch(c){return console.error(c),g`
                <p class="error">${qt(c)}</p>
            `}}}),xl="None";function rB({parent:e,title:t,theme:r,hideInverseColors:n,overrides:o,useVerticalLayout:i,prefixGroupByCount:s=2,hideCopyCode:a}){const u={"Show Var Names":{controlType:X.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:X.Checkbox,initValue:!0}},l={"Theme Override":{controlType:X.Dropdown,initValue:xl,options:[xl,...(o||[]).map($=>{if($.name===xl)throw new Error(`Cannot have theme override named '${xl}'`);return $.name})]}},c=Te({parent:e,title:t,controls:u});function d({controls:$,theme:k,themeColorName:A}){const T=F.isKeyOf(A,k.colors)?k.colors[A]:void 0,B=F.isKeyOf(A,k.inverse)?k.inverse[A]:void 0;if(!T||!B)throw new Error(`No theme color found by name '${A}'`);const q=g`
            <${Gb.assign({color:T,showVarValues:!0,showVarNames:$["Show Var Names"],showContrast:$["Show Contrast Tips"],fontWeight:400})}></${Gb}>
        `;return g`
            <div class="with-inverse">${q}${Q}</div>
        `}function h($,k,A){const T=g3(Object.keys(k.colors),B=>s?B.split("-").slice(0,s).join("-"):B);Object.entries(T).forEach(([B,q])=>{q&&$({title:B,styles:E`
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
                    `,render({controls:oe}){const de=("Theme Override"in oe&&oe["Theme Override"]&&A?.find($e=>$e.name===oe["Theme Override"])||void 0)?.asTheme||k;return g`
                            <div class="theme-wrapper">
                                ${q.map($e=>d({controls:oe,theme:de,themeColorName:$e}))}
                            </div>
                        `}})})}const m=["Click a color preview to show CSS var names and values."],y=Te({parent:c,title:"Default",descriptionParagraphs:m,useVerticalExamples:i,controls:{...l},defineExamples({defineExample:$}){h($,r,o)}}),w=(o||[]).map($=>Te({parent:c,title:$.name,useVerticalExamples:i,descriptionParagraphs:m,defineExamples({defineExample:k}){h(k,$.asTheme,void 0)}}));return[c,y,...w]}const mt=Te({title:"Elements",parent:void 0}),fg=Te({title:"Styles",parent:void 0}),_$=Te({title:"Util",parent:void 0}),nB=Te({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:X.Color,initValue:""},"Fill Color":{controlType:X.Color,initValue:""},"Stroke Width":{controlType:X.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(K0).forEach(t=>{e({title:t.name,styles:E`
                    :host(:hover) ${V} {
                        background-color: #f2f2f2;
                    }

                    ${V} {
                        padding: 8px;
                        border-radius: ${N["vira-form-radius"].value};
                    }
                `,render({controls:r}){const n=E`
                        ${x["vira-icon-fill-color"].name}: ${Re(r["Fill Color"]||"inherit")};
                        ${x["vira-icon-stroke-color"].name}: ${Re(r["Stroke Color"]||"inherit")};
                        ${x["vira-icon-stroke-width"].name}: ${Re(r["Stroke Width"]?ru(r["Stroke Width"]):"inherit")};
                    `;return g`
                        <${V.assign({icon:t})} style=${n}></${V}>
                    `}})})}}),oB=rB({parent:fg,theme:rt,title:"Vira Theme",hideInverseColors:!0,overrides:[hP],hideCopyCode:!0}),U$={async element1(){return await Si({seconds:2}),(await ql(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-d1_75xdz.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await Si({seconds:2}),(await ql(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-DquQ_lFr.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},ry=On()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:a$(U$)}},render({state:e,inputs:t}){return u$(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(r){return g`
                    <${Fi}>
                        ${Ui("Failed to import element",qt(r))}
                    </${Fi}>
                `},loading(){return g`
                    <${V.assign({icon:Li})}></${V}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Dt.never("The error element will always error")}})}}),ny=On()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:a$(U$)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),u$(e.dynamicElements,{error(r){return g`
                    <${Fi}>
                        ${Ui("Failed to import element",qt(r))}
                    </${Fi}>
                `},loading(){return g`
                    <${V.assign({icon:Li})}></${V}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Dt.never("The error element will always error")}})}}),oy=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],iB=Te({parent:_$,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:E`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${Be.assign({value:String(t.value),options:oy})}
                        ${j(Be.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${Be}>
                    <${ry.assign({numberValue:t.value})}></${ry}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:E`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${Be.assign({value:String(t.value),options:oy})}
                        ${j(Be.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${Be}>
                    <${ny.assign({numberValue:t.value})}></${ny}>
                `}})}}),sB=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:g`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:E`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:E`
            ${Rr} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],aB=Te({title:Rr.tagName,parent:mt,controls:{Selected:{controlType:X.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:X.Text,initValue:""}},defineExamples({defineExample:e}){sB.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?g`
                            <${Rr.assign(n)}>
                                ${t.customTemplate}
                            </${Rr}>
                        `:g`
                            <${Rr.assign(n)}></${Rr}>
                        `}})})}}),ah=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new Ym({sanitizeRoute(e){return e}})}}],uB=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:rg.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...ah,{id:"long",label:g`
                        <${Rr.assign({selected:!1})}>
                            <div
                                style=${E`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${Rr}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:qo.Both,items:[...ah,{id:"long",label:g`
                        <${Rr.assign({selected:!1})}>
                            <div
                                style=${E`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${Rr}>
                    `}]}}],lB=Te({parent:mt,title:Lo.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){uB.forEach(t=>{e({title:t.title,styles:E`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${Lo.assign({items:ah,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${Lo}>
                    `}})})}}),z$=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],cB=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...z$,{id:4,label:"link here",route:{route:{paths:["test"]},router:new Ym({sanitizeRoute(e){return e}})}}]}}],dB=Te({parent:mt,title:Za.tagName,defineExamples({defineExample:e}){cB.forEach(t=>{e({title:t.title,render(){return g`
                        <${Za.assign({isMultiSelect:!1,navController:void 0,items:z$,selected:[],...t.inputs})}></${Za}>
                    `}})})}}),V$=[];Or(hc).forEach(e=>{Or(rg).forEach(t=>{V$.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const fB=Te({parent:mt,title:Ja.tagName,defineExamples({defineExample:e}){V$.forEach(t=>{e({title:t.title,styles:E`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${Ja.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${Ja}>
                    `}})})}}),hB=Te({parent:mt,title:le.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:E`
                ${le} {
                    ${N["vira-form-focus-outline-border-radius"].name}: 0;
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
                    <${le.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${le.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${le.slotNames.popUp}>Pop up!</div>
                    </${le}>
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
                    <${le.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${le.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${le.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${le}>
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
                    <${le.assign({keepOpenAfterInteraction:!0,horizontalAnchor:qo.Right})}>
                        <div slot=${le.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${le.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${le}>
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
                    <${le.assign({keepOpenAfterInteraction:!0,horizontalAnchor:qo.Left})}>
                        <div slot=${le.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${le.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${le}>
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
                    <${le.assign({keepOpenAfterInteraction:!0,horizontalAnchor:qo.Right})}>
                        <div slot=${le.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${le.slotNames.popUp}>not long</div>
                    </${le}>
                `}}),e({title:"ignoreMaxWidth wide content",styles:E`
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
                    <div class="container">
                        <${le.assign({keepOpenAfterInteraction:!0})}>
                            <div class="trigger" slot=${le.slotNames.trigger}>
                                Trigger
                            </div>
                            <div class="pop-up" slot=${le.slotNames.popUp}>
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
                        </${le}>
                    </div>
                `}})}}),mB=[{title:"menu shadow",styles:Ci.menuShadow},{title:"menu shadow reversed",styles:Ci.menuShadowReversed},{title:"modal",styles:Ci.modal}],gB=Te({parent:fg,title:"Shadows",defineExamples({defineExample:e}){mB.forEach(t=>{e({title:t.title,styles:E`
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
                    `}})})}}),pB=Te({parent:mt,title:ct.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:X.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return g`
                    <${ct.assign({text:"Text here",bold:!1})}></${ct}>
                `}}),e({title:"Bold",render(){return g`
                    <${ct.assign({text:"Text here",bold:!0})}></${ct}>
                `}}),e({title:"Dynamic",render({controls:t}){return g`
                    <${ct.assign({text:"Text here",bold:t.bolded})}></${ct}>
                `}}),e({title:"Resized",styles:E`
                ${ct} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return g`
                    <${ct.assign({text:"Not Bolded",bold:!1})}></${ct}>
                    <${ct.assign({text:"Bolded",bold:!0})}></${ct}>
                `}}),e({title:"Alignment",styles:E`
                ${ct} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return g`
                    <${ct.assign({text:"Not Bolded",bold:!1})}></${ct}>
                    <${ct.assign({text:"Bolded",bold:!0})}></${ct}>
                `}}),e({title:"Stylized",styles:E`
                ${ct} {
                    text-decoration: underline;
                }
            `,render(){return g`
                    <${ct.assign({text:"Not Bolded",bold:!1})}></${ct}>
                    <${ct.assign({text:"Bolded",bold:!0})}></${ct}>
                `}})}}),bB=Te({parent:mt,title:nt.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:X.Color,initValue:""},"Secondary color":{controlType:X.Color,initValue:""},"Hover color":{controlType:X.Color,initValue:""},"Active color":{controlType:X.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:o}){const i=n??E``;e({title:r,styles:i,render({controls:s}){const a=E`
                        ${N["vira-form-accent-primary-color"].name}: ${Re(s["Primary color"]||"inherit")};
                        ${N["vira-form-background-color"].name}: ${Re(s["Secondary color"]||"inherit")};
                        ${N["vira-form-accent-primary-hover-color"].name}: ${Re(s["Hover color"]||"inherit")};
                        ${N["vira-form-accent-primary-active-color"].name}: ${Re(s["Active color"]||"inherit")};
                    `;return g`
                        <${nt.assign({text:"hello",...o})}
                            style=${a}
                        ></${nt}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Ga}}),t({title:"with expanding icon",inputs:{icon:Ga,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:mo.Outline}}),t({title:"ghost",inputs:{buttonStyle:mo.Ghost}}),t({title:"danger",inputs:{buttonStyle:mo.Danger}}),t({title:"danger outline",inputs:{buttonStyle:mo.DangerOutline}}),t({title:"only icon",inputs:{icon:Ga,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:E`
                ${nt} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:E`
                ${nt} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:E`
                :host {
                    ${N["vira-form-accent-primary-color"].name}: pink;
                    ${N["vira-form-background-color"].name}: purple;
                    ${N["vira-form-accent-primary-hover-color"].name}: orange;
                    ${N["vira-form-accent-primary-active-color"].name}: yellow;
                }
            `,render(){return g`
                    <${nt.assign({text:"hello"})}></${nt}>
                `}})}}),yB=[{title:"basic"},{title:"success",inputs:{cardState:J0.Success}},{title:"error",inputs:{cardState:J0.Error}},{title:"long",content:g`
            <p
                style=${E`
                    ${Wu}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],vB=Te({parent:mt,title:bf.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){yB.forEach(t=>{e({title:t.title,render(){return g`
                        <${bf.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${bf}>
                    `}})})}}),wB=Te({parent:mt,title:se.tagName,controls:{Checked:{controlType:X.Checkbox,initValue:!1},Disabled:{controlType:X.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${se.assign({value:t.checked})}
                        ${j(se.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${se}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${se.assign({value:t.checked})}
                        ${j(se.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${se}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${se.assign({value:t.checked,hasError:!0})}
                        ${j(se.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${se}>
                `}}),e({title:"disabled unchecked",render(){return g`
                    <${se.assign({value:!1,disabled:!0})}></${se}>
                `}}),e({title:"disabled checked",render(){return g`
                    <${se.assign({value:!0,disabled:!0})}></${se}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return g`
                    <${se.assign({value:t.Checked,disabled:t.Disabled})}></${se}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return g`
                    <${se.assign({value:!0})}></${se}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${se.assign({value:t.checked,label:"label goes here"})}
                        ${j(se.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${se}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${se.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${j(se.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${se}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:E`
                ${se} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${se.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${j(se.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${se}>
                `}}),e({title:"fill when checked",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${se.assign({value:t.checked,fillWhenChecked:!0})}
                        ${j(se.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${se}>
                `}}),e({title:"fill when unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${se.assign({value:t.checked,fillWhenUnchecked:!0})}
                        ${j(se.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${se}>
                `}}),e({title:"both fills",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${se.assign({value:t.checked,fillWhenUnchecked:!0,fillWhenChecked:!0})}
                        ${j(se.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${se}>
                `}})}}),$B=Te({title:to.tagName,parent:mt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:E`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>g`
                        <${to.assign({expanded:!!r.expandedStates[o]})}
                            ${j(to.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${to.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${j("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${Fr(!!r.showMoreStates[o],g`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${to}>
                    `)}}),e({title:"wider examples",styles:E`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>g`
                        <${to.assign({expanded:!!r.expandedStates[o]})}
                            ${j(to.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${to.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${j("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${Fr(!!r.showMoreStates[o],g`
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
                        </${to}>
                    `)}})}}),Xa=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],kB=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Xa,{id:42,label:g`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Xa,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:E`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:E`
            ${Oa} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:un}}],xB=Te({title:Oa.tagName,parent:mt,controls:{Selected:{controlType:X.Dropdown,initValue:"",options:["",...Xa.map(e=>e.label)]},Prefix:{controlType:X.Text,initValue:""},"Force State":{controlType:X.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:X.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:X.Dropdown,initValue:"",options:["",...Object.keys(K0)]},Disabled:{controlType:X.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:X.Text,initValue:"Select something"}},defineExamples({defineExample:e}){kB.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:o}){const i={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:o.Placeholder,options:t.inputs?.options||Xa,selected:o.Selected?[Xa.find(s=>s.label===o.Selected)?.id].filter(F.isTruthy):r.selected,selectionPrefix:o.Prefix||t.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":t.inputs?.isDisabled,icon:o.Icon?K0[o.Icon]:t.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return g`
                        <${Oa.assign(i)}
                            ${j(Oa.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${Oa}>
                    `}})})}}),DB=Te({parent:mt,title:Fi.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${Fi}>Error Content</${Fi}>
                `}})}}),Jf=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],AB=Te({parent:mt,title:$r.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0,quantity:0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:ke.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:ke.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:ke.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:ke.Email,label:"Email Address",value:t.email},password:{type:ke.NewPassword,label:"Password",value:t.password},userRole:{type:ke.Select,label:"Role",options:Jf,value:t.userRole,placeholder:"placeholder"},quantity:{type:ke.Number,label:"Quantity",value:t.quantity,min:0,max:100,step:2,placeholder:"Enter quantity"},disabledField:{type:ke.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:ke.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return g`
                    <${$r.assign({fields:n})}
                        ${j($r.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${nt.assign({text:"Cancel",buttonStyle:mo.Outline})}></${nt}>
                            <${nt.assign({text:"Submit"})}></${nt}>
                        </div>
                    </${$r}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:ke.Text,label:"First Name",value:t.firstName},lastName:{type:ke.Text,label:"Last Name",value:t.lastName}};return g`
                    <${$r.assign({fields:n})}
                        ${j($r.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <${xe.assign({value:"",label:"More stuff"})}></${xe}>
                        <div class="buttons">
                            <${nt.assign({text:"Cancel",buttonStyle:mo.Outline})}></${nt}>
                            <${nt.assign({text:"Submit"})}></${nt}>
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
            `,render({state:t,updateState:r}){const n={firstName:{type:ke.Text,label:"First Name",value:t.firstName},lastName:{type:ke.Text,label:"Last Name",value:t.lastName},subscribe:{type:ke.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:ke.Email,label:"Email Address",value:t.email},password:{type:ke.NewPassword,label:"Password",value:t.password},userRole:{type:ke.Select,label:"Role",options:Jf,value:t.userRole}};return g`
                    <${$r.assign({fields:n})}
                        ${j($r.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${nt.assign({text:"Cancel",buttonStyle:mo.Outline})}></${nt}>
                            <${nt.assign({text:"Submit"})}></${nt}>
                        </div>
                    </${$r}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:E`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:ke.Text,label:"First Name",value:t.firstName},lastName:{type:ke.Text,label:"Last Name",value:t.lastName},subscribe:{type:ke.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:ke.Email,label:"Email Address",value:t.email},password:{type:ke.NewPassword,label:"Password",value:t.password},userRole:{type:ke.Select,label:"Role",options:Jf,value:t.userRole}};return g`
                    <${$r.assign({fields:n,isDisabled:!0})}
                        ${j($r.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${nt.assign({text:"Cancel",buttonStyle:mo.Outline})}></${nt}>
                            <${nt.assign({text:"Submit"})}></${nt}>
                        </div>
                    </${$r}>
                `}})}}),EB=Te({title:V.tagName,parent:mt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${V.assign({icon:un})}></${V}>
                `}}),e({title:"using createColoredIcon",render(){return g`
                    <${V.assign({icon:cb(un,{"vira-icon-stroke-color":"red"})})}></${V}>
                `}}),e({title:"fit container",styles:E`
                ${V} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return g`
                    <${V.assign({icon:cb(un,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${V}>
                `}})}}),CB=Te({title:Mo.tagName,parent:mt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:E`
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
                        <${V.assign({icon:Li,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
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
                        <${V.assign({icon:fc,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
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
                        <${V.assign({icon:Li,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
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
                        <${V.assign({icon:fc,fitContainer:!0})}
                            style=${E`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:E`
                    ${Mo} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||E``}
                    }

                    ${r.allowReload?E`
                              ${Mo} {
                                  cursor: pointer;
                              }

                              ${Mo}:hover {
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
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:o}){return g`
                        <${Mo.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${j("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${Ai()}`})})}
                        >
                            ${r.loadingSlot?g`
                                      <div class="slot-wrapper" slot=${Mo.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:Q}${r.errorSlot?g`
                                      <div class="slot-wrapper" slot=${Mo.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:Q}
                        </${Mo}>
                    `}})})}}),FB=Te({title:xe.tagName,parent:mt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:X.Color,initValue:N["vira-form-foreground-color"].default},"Placeholder color":{controlType:X.Color,initValue:N["vira-form-placeholder-color"].default},"Border color":{controlType:X.Color,initValue:N["vira-form-border-color"].default},"Focus color":{controlType:X.Color,initValue:N["vira-form-focus-outline-color"].default},"Selection color":{controlType:X.Color,initValue:N["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:o,inputs:i}){e({title:o,styles:E`
                    ${n||E``}
                `,state(){return{value:i.value}},render({state:s,updateState:a,controls:u}){const l={[String(N["vira-form-foreground-color"].name)]:u["Text color"],[String(N["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(N["vira-form-border-color"].name)]:u["Border color"],[String(N["vira-form-focus-outline-color"].name)]:u["Focus color"],[String(N["vira-form-text-selection-color"].name)]:u["Selection color"]},c=Qe(l,(h,m)=>m||"inherit"),d=Object.entries(c).map(([h,m])=>[h,m].join(": ")+";").join(`
`);return g`
                        <${xe.assign({...i,value:s.value})}
                            style=${d}
                            ${j(xe.events.valueChange,h=>{a({value:h.detail}),console.info("changed:",h.detail)})}
                        ></${xe}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:un}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:E`
                    ${xe} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:un}},{title:"taller height",styles:E`
                    ${xe} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:un}},{title:"shorter height",styles:E`
                    ${xe} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:un}},{title:"max width",styles:E`
                    ${xe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:E`
                    ${xe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:xi.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:xi.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:E`
                    ${xe} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:E`
                    ${xe} {
                        width: unset;
                    }
                `}].forEach(t)}}),MB=Te({title:Ha.tagName,parent:mt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:X.Color,initValue:""},"Hover color":{controlType:X.Color,initValue:N["vira-form-accent-primary-color"].default},"Active color":{controlType:X.Color,initValue:N["vira-form-accent-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:o}){const i=E`
                        ${N["vira-form-accent-primary-color"].name}: ${Re(o["Hover color"]||"inherit")};
                        ${N["vira-form-accent-primary-active-color"].name}: ${Re(o["Active color"]||"inherit")};
                        color: ${Re(o["CSS Color"]||"inherit")};
                    `;return g`
                        <${Ha.assign(n)} style=${i}>My Link</${Ha}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),SB=Te({title:So.tagName,parent:mt,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:r}){return g`
                    <button
                        ${j("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${So.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${j(So.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${So}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:E`
                ${So} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${N["vira-form-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:r}){return g`
                    <button
                        ${j("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${So.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${j(So.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${So}>
                `}})}}),Ra=E`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,Yf=g`
    <${qn.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${qn.slotNames.large}>Large</div>
        <div class="small" slot=${qn.slotNames.small}>Small</div>
    </${qn}>
`,bs={max:120,min:25,default:80},iy=et()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":ru(bs.default)},state(){return{intervalId:void 0,increment:1}},styles:({cssVars:e})=>E`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,init({state:e,updateState:t,host:r,cssVars:n}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{const o=Dh.isNumber(F3(k6({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||bs.default;(o>=bs.max||o<=bs.min)&&t({increment:e.increment*-1}),jh({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:ru(o+e.increment)})},10)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render(){return g`
            <slot></slot>
        `}}),sy=et()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":ru(bs.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:E`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${Ra}

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
        `}}),TB=Te({title:qn.tagName,parent:mt,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:E`
                ${Ra}
            `,render(){return Yf}}),e({title:"overflowing",styles:E`
                ${Ra}

                ${qn} {
                    max-width: 50px;
                }
            `,render(){return Yf}}),e({title:"dynamic size",styles:E`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${Ra}

                .wrapper {
                    width: ${bs.max+10}px;
                }
            `,render(){return g`
                    <div class="wrapper">
                        <${iy}>
                            ${Yf}
                        </${iy}>
                    </div>
                `}}),e({title:"dynamic slot",styles:E`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${Ra}
            `,render(){return g`
                    <${sy}></${sy}>
                `}})}}),NB=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:E`
            :host {
                ${N["vira-form-filled-background-color"].name}: red;
                ${N["vira-form-accent-primary-color"].name}: black;
                ${io.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${io} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:E`
            :host {
                ${N["vira-form-filled-background-color"].name}: red;
                ${N["vira-form-accent-primary-color"].name}: yellow;
                ${io.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${io} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:E`
            :host {
                ${N["vira-form-filled-background-color"].name}: red;
                ${N["vira-form-accent-primary-color"].name}: yellow;
                ${io.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${io} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],PB=Te({parent:mt,title:io.tagName,defineExamples({defineExample:e}){NB.forEach(t=>{e({title:t.title,styles:E`
                    ${t.styles||E``}
                `,render(){return g`
                        <${io.assign({value:50,...t.inputs})}></${io}>
                    `}})})}}),jt=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],IB=[{title:"basic",inputs:{options:jt}},{title:"with really long option",inputs:{options:[...jt,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:jt,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:jt,disabled:!0}},{title:"error",inputs:{options:jt,hasError:!0}},{title:"with icon",inputs:{options:jt,icon:un}},{title:"custom width",inputs:{options:jt},styles:E`
            ${Be} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:jt,icon:un},styles:E`
            ${Be} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:jt,icon:un},styles:E`
            ${Be} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:jt,label:"Pick an option"}},{title:"with long label",inputs:{options:jt,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:jt,label:"Pick a really really really really long option"},styles:E`
            ${Be} {
                width: unset;
            }
        `}],OB=Te({parent:mt,title:Be.tagName,defineExamples({defineExample:e}){IB.forEach(t=>{e({title:t.title,styles:E`
                    ${t.styles||E``}
                `,state(){return{selected:void 0}},render({state:r,updateState:n}){return g`
                        <${Be.assign({...t.inputs,value:r.selected??t.inputs.value})}
                            ${j(Be.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${Be}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return g`
                    <${Be.assign({options:jt,value:jt[0]?.value})}></${Be}>
                `}}),e({title:"force update",render(){return g`
                    <${ay}></${ay}>
                `}})}}),ay=et()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const r=jt.findIndex(o=>o.value===t.value),n=_t.isDefined(jt[(r+1)%jt.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return g`
            <${Be.assign({options:jt,value:e.value})}></${Be}>
        `}}),BB=[mt,nB,fg,_$],RB=[pB,bB,vB,wB,$B,xB,DB,AB,EB,CB,FB,MB,aB,dB,lB,SB,TB,fB,hB,PB,OB].sort((e,t)=>e.title.localeCompare(t.title)),LB=[...RB,iB,gB,...oB],jB=[...BB,...LB];On()({tagName:"vira-book-app",styles:E`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Zf} {
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
            <${Zf.assign({internalRouterConfig:{basePath:Zm("vira"),useInternalRouter:!0},pages:jB,themeColor:"#33ccff"})}>
                <h1 slot=${zn.NavHeader}>Vira</h1>
            </${Zf}>
        `}});export{On as d,g as h};
