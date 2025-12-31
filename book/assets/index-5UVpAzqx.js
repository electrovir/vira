(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var Et;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(Et||(Et={}));function ig(e,t=r=>r){const r=new Map;return e.filter(n=>{const i=t(n);return r.get(i)?!1:(r.set(i,n),!0)})}class Zd{diff(t,r,n={}){let i;typeof n=="function"?(i=n,n={}):"callback"in n&&(i=n.callback);const o=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(o,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,u,n,i)}diffWithOptionsObj(t,r,n,i){var o;const s=N=>{if(N=this.postProcess(N,n),i){setTimeout(function(){i(N)},0);return}else return N},a=r.length,u=t.length;let l=1,c=a+u;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));const d=(o=n.timeout)!==null&&o!==void 0?o:1/0,f=Date.now()+d,m=[{oldPos:-1,lastComponent:void 0}];let D=this.extractCommon(m[0],r,t,0,n);if(m[0].oldPos+1>=u&&D+1>=a)return s(this.buildValues(m[0].lastComponent,r,t));let v=-1/0,C=1/0;const k=()=>{for(let N=Math.max(v,-l);N<=Math.min(C,l);N+=2){let j;const q=m[N-1],Z=m[N+1];q&&(m[N-1]=void 0);let Le=!1;if(Z){const dt=Z.oldPos-N;Le=Z&&0<=dt&&dt<a}const Pt=q&&q.oldPos+1<u;if(!Le&&!Pt){m[N]=void 0;continue}if(!Pt||Le&&q.oldPos<Z.oldPos?j=this.addToPath(Z,!0,!1,0,n):j=this.addToPath(q,!1,!0,1,n),D=this.extractCommon(j,r,t,N,n),j.oldPos+1>=u&&D+1>=a)return s(this.buildValues(j.lastComponent,r,t))||!0;m[N]=j,j.oldPos+1>=u&&(C=Math.min(C,N-1)),D+1>=a&&(v=Math.max(v,N+1))}l++};if(i)(function N(){setTimeout(function(){if(l>c||Date.now()>f)return i(void 0);k()||N()},0)})();else for(;l<=c&&Date.now()<=f;){const N=k();if(N)return N}}addToPath(t,r,n,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,i,o){const s=r.length,a=n.length;let u=t.oldPos,l=u-i,c=0;for(;l+1<s&&u+1<a&&this.equals(n[u+1],r[l+1],o);)l++,u++,c++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!o.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let a=0,u=0,l=0;for(;a<s;a++){const c=i[a];if(c.removed)c.value=this.join(n.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let d=r.slice(u,u+c.count);d=d.map(function(f,m){const D=n[l+m];return D.length>f.length?D:f}),c.value=this.join(d)}else c.value=this.join(r.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return i}}function jm(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function Um(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function Hc(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function Jc(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function xs(e,t){return Hc(e,t,"")}function Ga(e,t){return Jc(e,t,"")}function _m(e,t){return t.slice(0,a2(e,t))}function a2(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const i=Array(n);let o=0;i[0]=0;for(let s=1;s<n;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=r;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function As(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function Gn(e){const t=e.match(/^\s*/);return t?t[0]:""}const Su="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",u2=new RegExp(`[${Su}]+|\\s+|[^${Su}]`,"ug");class l2 extends Zd{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=Array.from(s.segment(t),a=>a.segment)}else n=t.match(u2)||[];const i=[];let o=null;return n.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&Vm(n,o,i,s),n=s,i=null,o=null)}),(i||o)&&Vm(n,o,i,null),t}}const c2=new l2;function d2(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?h2(e,t,r):c2.diff(e,t,r)}function Vm(e,t,r,n){if(t&&r){const i=Gn(t.value),o=As(t.value),s=Gn(r.value),a=As(r.value);if(e){const u=jm(i,s);e.value=Jc(e.value,s,u),t.value=xs(t.value,u),r.value=xs(r.value,u)}if(n){const u=Um(o,a);n.value=Hc(n.value,a,u),t.value=Ga(t.value,u),r.value=Ga(r.value,u)}}else if(r){if(e){const i=Gn(r.value);r.value=r.value.substring(i.length)}if(n){const i=Gn(n.value);n.value=n.value.substring(i.length)}}else if(e&&n){const i=Gn(n.value),o=Gn(t.value),s=As(t.value),a=jm(i,o);t.value=xs(t.value,a);const u=Um(xs(i,a),s);t.value=Ga(t.value,u),n.value=Hc(n.value,i,u),e.value=Jc(e.value,i,i.slice(0,i.length-u.length))}else if(n){const i=Gn(n.value),o=As(t.value),s=_m(o,i);t.value=Ga(t.value,s)}else if(e){const i=As(e.value),o=Gn(t.value),s=_m(i,o);t.value=xs(t.value,s)}}class f2 extends Zd{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Su}]+|[^\\S\\n\\r]+|[^${Su}]`,"ug");return t.match(r)||[]}}const m2=new f2;function h2(e,t,r){return m2.diff(e,t,r)}class p2 extends Zd{constructor(){super(...arguments),this.tokenize=b2}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const g2=new p2;function y2(e,t,r){return g2.diff(e,t,r)}function b2(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let i=0;i<n.length;i++){const o=n[i];i%2&&!t.newlineIsToken?r[r.length-1]+=o:r.push(o)}return r}function Wm(e){return og(e,new Map)}function og(e,t){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const r={};return t.set(e,r),Object.entries(e).sort((n,i)=>n[0].localeCompare(i[0])).forEach(([n,i])=>{const o=og(i,t);r[n]=o}),r}else return e}var w2=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,v2=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,$2=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Ql={Space_Separator:w2,ID_Start:v2,ID_Continue:$2},Je={isSpaceSeparator(e){return typeof e=="string"&&Ql.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Ql.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Ql.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let Yc,_t,Fn,Nu,si,Yr,yt,Hd,Ws;var D2=function(t,r){Yc=String(t),_t="start",Fn=[],Nu=0,si=1,Yr=0,yt=void 0,Hd=void 0,Ws=void 0;do yt=x2(),C2[_t]();while(yt.type!=="eof");return typeof r=="function"?Xc({"":Ws},"",r):Ws};function Xc(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const o=String(i),s=Xc(n,o,r);s===void 0?delete n[o]:Object.defineProperty(n,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const o=Xc(n,i,r);o===void 0?delete n[i]:Object.defineProperty(n,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let te,J,Ms,An,ae;function x2(){for(te="default",J="",Ms=!1,An=1;;){ae=On();const e=sg[te]();if(e)return e}}function On(){if(Yc[Nu])return String.fromCodePoint(Yc.codePointAt(Nu))}function S(){const e=On();return e===`
`?(si++,Yr=0):e?Yr+=e.length:Yr++,e&&(Nu+=e.length),e}const sg={default(){switch(ae){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":S();return;case"/":S(),te="comment";return;case void 0:return S(),Te("eof")}if(Je.isSpaceSeparator(ae)){S();return}return sg[_t]()},comment(){switch(ae){case"*":S(),te="multiLineComment";return;case"/":S(),te="singleLineComment";return}throw Pe(S())},multiLineComment(){switch(ae){case"*":S(),te="multiLineCommentAsterisk";return;case void 0:throw Pe(S())}S()},multiLineCommentAsterisk(){switch(ae){case"*":S();return;case"/":S(),te="default";return;case void 0:throw Pe(S())}S(),te="multiLineComment"},singleLineComment(){switch(ae){case`
`:case"\r":case"\u2028":case"\u2029":S(),te="default";return;case void 0:return S(),Te("eof")}S()},value(){switch(ae){case"{":case"[":return Te("punctuator",S());case"n":return S(),Di("ull"),Te("null",null);case"t":return S(),Di("rue"),Te("boolean",!0);case"f":return S(),Di("alse"),Te("boolean",!1);case"-":case"+":S()==="-"&&(An=-1),te="sign";return;case".":J=S(),te="decimalPointLeading";return;case"0":J=S(),te="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":J=S(),te="decimalInteger";return;case"I":return S(),Di("nfinity"),Te("numeric",1/0);case"N":return S(),Di("aN"),Te("numeric",NaN);case'"':case"'":Ms=S()==='"',J="",te="string";return}throw Pe(S())},identifierNameStartEscape(){if(ae!=="u")throw Pe(S());S();const e=Qc();switch(e){case"$":case"_":break;default:if(!Je.isIdStartChar(e))throw zm();break}J+=e,te="identifierName"},identifierName(){switch(ae){case"$":case"_":case"‌":case"‍":J+=S();return;case"\\":S(),te="identifierNameEscape";return}if(Je.isIdContinueChar(ae)){J+=S();return}return Te("identifier",J)},identifierNameEscape(){if(ae!=="u")throw Pe(S());S();const e=Qc();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!Je.isIdContinueChar(e))throw zm();break}J+=e,te="identifierName"},sign(){switch(ae){case".":J=S(),te="decimalPointLeading";return;case"0":J=S(),te="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":J=S(),te="decimalInteger";return;case"I":return S(),Di("nfinity"),Te("numeric",An*(1/0));case"N":return S(),Di("aN"),Te("numeric",NaN)}throw Pe(S())},zero(){switch(ae){case".":J+=S(),te="decimalPoint";return;case"e":case"E":J+=S(),te="decimalExponent";return;case"x":case"X":J+=S(),te="hexadecimal";return}return Te("numeric",An*0)},decimalInteger(){switch(ae){case".":J+=S(),te="decimalPoint";return;case"e":case"E":J+=S(),te="decimalExponent";return}if(Je.isDigit(ae)){J+=S();return}return Te("numeric",An*Number(J))},decimalPointLeading(){if(Je.isDigit(ae)){J+=S(),te="decimalFraction";return}throw Pe(S())},decimalPoint(){switch(ae){case"e":case"E":J+=S(),te="decimalExponent";return}if(Je.isDigit(ae)){J+=S(),te="decimalFraction";return}return Te("numeric",An*Number(J))},decimalFraction(){switch(ae){case"e":case"E":J+=S(),te="decimalExponent";return}if(Je.isDigit(ae)){J+=S();return}return Te("numeric",An*Number(J))},decimalExponent(){switch(ae){case"+":case"-":J+=S(),te="decimalExponentSign";return}if(Je.isDigit(ae)){J+=S(),te="decimalExponentInteger";return}throw Pe(S())},decimalExponentSign(){if(Je.isDigit(ae)){J+=S(),te="decimalExponentInteger";return}throw Pe(S())},decimalExponentInteger(){if(Je.isDigit(ae)){J+=S();return}return Te("numeric",An*Number(J))},hexadecimal(){if(Je.isHexDigit(ae)){J+=S(),te="hexadecimalInteger";return}throw Pe(S())},hexadecimalInteger(){if(Je.isHexDigit(ae)){J+=S();return}return Te("numeric",An*Number(J))},string(){switch(ae){case"\\":S(),J+=A2();return;case'"':if(Ms)return S(),Te("string",J);J+=S();return;case"'":if(!Ms)return S(),Te("string",J);J+=S();return;case`
`:case"\r":throw Pe(S());case"\u2028":case"\u2029":k2(ae);break;case void 0:throw Pe(S())}J+=S()},start(){switch(ae){case"{":case"[":return Te("punctuator",S())}te="value"},beforePropertyName(){switch(ae){case"$":case"_":J=S(),te="identifierName";return;case"\\":S(),te="identifierNameStartEscape";return;case"}":return Te("punctuator",S());case'"':case"'":Ms=S()==='"',te="string";return}if(Je.isIdStartChar(ae)){J+=S(),te="identifierName";return}throw Pe(S())},afterPropertyName(){if(ae===":")return Te("punctuator",S());throw Pe(S())},beforePropertyValue(){te="value"},afterPropertyValue(){switch(ae){case",":case"}":return Te("punctuator",S())}throw Pe(S())},beforeArrayValue(){if(ae==="]")return Te("punctuator",S());te="value"},afterArrayValue(){switch(ae){case",":case"]":return Te("punctuator",S())}throw Pe(S())},end(){throw Pe(S())}};function Te(e,t){return{type:e,value:t,line:si,column:Yr}}function Di(e){for(const t of e){if(On()!==t)throw Pe(S());S()}}function A2(){switch(On()){case"b":return S(),"\b";case"f":return S(),"\f";case"n":return S(),`
`;case"r":return S(),"\r";case"t":return S(),"	";case"v":return S(),"\v";case"0":if(S(),Je.isDigit(On()))throw Pe(S());return"\0";case"x":return S(),E2();case"u":return S(),Qc();case`
`:case"\u2028":case"\u2029":return S(),"";case"\r":return S(),On()===`
`&&S(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Pe(S());case void 0:throw Pe(S())}return S()}function E2(){let e="",t=On();if(!Je.isHexDigit(t)||(e+=S(),t=On(),!Je.isHexDigit(t)))throw Pe(S());return e+=S(),String.fromCodePoint(parseInt(e,16))}function Qc(){let e="",t=4;for(;t-- >0;){const r=On();if(!Je.isHexDigit(r))throw Pe(S());e+=S()}return String.fromCodePoint(parseInt(e,16))}const C2={start(){if(yt.type==="eof")throw xi();ec()},beforePropertyName(){switch(yt.type){case"identifier":case"string":Hd=yt.value,_t="afterPropertyName";return;case"punctuator":Za();return;case"eof":throw xi()}},afterPropertyName(){if(yt.type==="eof")throw xi();_t="beforePropertyValue"},beforePropertyValue(){if(yt.type==="eof")throw xi();ec()},beforeArrayValue(){if(yt.type==="eof")throw xi();if(yt.type==="punctuator"&&yt.value==="]"){Za();return}ec()},afterPropertyValue(){if(yt.type==="eof")throw xi();switch(yt.value){case",":_t="beforePropertyName";return;case"}":Za()}},afterArrayValue(){if(yt.type==="eof")throw xi();switch(yt.value){case",":_t="beforeArrayValue";return;case"]":Za()}},end(){}};function ec(){let e;switch(yt.type){case"punctuator":switch(yt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=yt.value;break}if(Ws===void 0)Ws=e;else{const t=Fn[Fn.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Hd,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Fn.push(e),Array.isArray(e)?_t="beforeArrayValue":_t="beforePropertyName";else{const t=Fn[Fn.length-1];t==null?_t="end":Array.isArray(t)?_t="afterArrayValue":_t="afterPropertyValue"}}function Za(){Fn.pop();const e=Fn[Fn.length-1];e==null?_t="end":Array.isArray(e)?_t="afterArrayValue":_t="afterPropertyValue"}function Pe(e){return Tu(e===void 0?`JSON5: invalid end of input at ${si}:${Yr}`:`JSON5: invalid character '${ag(e)}' at ${si}:${Yr}`)}function xi(){return Tu(`JSON5: invalid end of input at ${si}:${Yr}`)}function zm(){return Yr-=5,Tu(`JSON5: invalid identifier character at ${si}:${Yr}`)}function k2(e){console.warn(`JSON5: '${ag(e)}' in strings is not valid ECMAScript; consider escaping`)}function ag(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Tu(e){const t=new SyntaxError(e);return t.lineNumber=si,t.columnNumber=Yr,t}var F2=function(t,r,n){const i=[];let o="",s,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const v of r){let C;typeof v=="string"?C=v:(typeof v=="number"||v instanceof String||v instanceof Number)&&(C=String(v)),C!==void 0&&s.indexOf(C)<0&&s.push(C)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c(v,C){let k=C[v];switch(k!=null&&(typeof k.toJSON5=="function"?k=k.toJSON5(v):typeof k.toJSON=="function"&&(k=k.toJSON(v))),a&&(k=a.call(C,v,k)),k instanceof Number?k=Number(k):k instanceof String?k=String(k):k instanceof Boolean&&(k=k.valueOf()),k){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof k=="string")return d(k);if(typeof k=="number")return String(k);if(typeof k=="object")return Array.isArray(k)?D(k):f(k)}function d(v){const C={"'":.1,'"':.2},k={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let N="";for(let q=0;q<v.length;q++){const Z=v[q];switch(Z){case"'":case'"':C[Z]++,N+=Z;continue;case"\0":if(Je.isDigit(v[q+1])){N+="\\x00";continue}}if(k[Z]){N+=k[Z];continue}if(Z<" "){let Le=Z.charCodeAt(0).toString(16);N+="\\x"+("00"+Le).substring(Le.length);continue}N+=Z}const j=l||Object.keys(C).reduce((q,Z)=>C[q]<C[Z]?q:Z);return N=N.replace(new RegExp(j,"g"),k[j]),j+N+j}function f(v){if(i.indexOf(v)>=0)throw TypeError("Converting circular structure to JSON5");i.push(v);let C=o;o=o+u;let k=s||Object.keys(v),N=[];for(const q of k){const Z=c(q,v);if(Z!==void 0){let Le=m(q)+":";u!==""&&(Le+=" "),Le+=Z,N.push(Le)}}let j;if(N.length===0)j="{}";else{let q;if(u==="")q=N.join(","),j="{"+q+"}";else{let Z=`,
`+o;q=N.join(Z),j=`{
`+o+q+`,
`+C+"}"}}return i.pop(),o=C,j}function m(v){if(v.length===0)return d(v);const C=String.fromCodePoint(v.codePointAt(0));if(!Je.isIdStartChar(C))return d(v);for(let k=C.length;k<v.length;k++)if(!Je.isIdContinueChar(String.fromCodePoint(v.codePointAt(k))))return d(v);return v}function D(v){if(i.indexOf(v)>=0)throw TypeError("Converting circular structure to JSON5");i.push(v);let C=o;o=o+u;let k=[];for(let j=0;j<v.length;j++){const q=c(String(j),v);k.push(q!==void 0?q:"null")}let N;if(k.length===0)N="[]";else if(u==="")N="["+k.join(",")+"]";else{let j=`,
`+o,q=k.join(j);N=`[
`+o+q+`,
`+C+"]"}return i.pop(),o=C,N}};const S2={parse:D2,stringify:F2};var N2=S2;const ug="__@@augment-vir-undefined-sentinel@@__",T2=new RegExp(`['"]${ug}['"]`);function g(e,t){if(typeof e=="string")return e;try{return N2.stringify(e,(n,i)=>i===void 0?ug:typeof i=="bigint"?Number(i):i,t||void 0).split(T2).join("undefined")}catch{return String(e)}}var P2=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Xr;(function(e){e.Node="node",e.Web="web"})(Xr||(Xr={}));function I2(){return P2?Xr.Node:Xr.Web}const lg=I2();function Jd(e){return lg===e}function cg(e){return e[lg]()}function M2(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",i=n?y2:d2,o=[r?"":`
`,g(t&&typeof t=="object"&&!Array.isArray(t)?Wm(t):t,4),`
`].join(""),s=[r?"":`
`,g(e&&typeof e=="object"&&!Array.isArray(e)?Wm(e):e,4),`
`].join(""),a=O2(n,i(o,s)),u=Jd(Xr.Node);return[[u?Pn.Green:""," +added (unexpected, added in actual)",u?Pn.Red:""," -missing (expected, missing from actual)",u?Pn.Reset:""].join(""),r?`

`:`
`,a].join("")}var Pn;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(Pn||(Pn={}));var Pu;(function(e){e.Added="+",e.Removed="-"})(Pu||(Pu={}));function O2(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(i=>qm(i,n)).join(`
`)).join(""):t.map(n=>qm(void 0,n)).join("")}function qm(e,t){if(e!=null&&!e)return"";const r=Jd(Xr.Node),n=t.added?Pu.Added:t.removed?Pu.Removed:e==null?"":" ",i=t.added?Pn.Green:t.removed?Pn.Red:Pn.Reset;return[r?i:"",n,e??t.value,Pn.Reset].join("")}function Ve(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function B2(e){return Ve(e).filter(t=>isNaN(Number(t)))}function Tr(e){return B2(e).map(r=>e[r])}const R2=[".",":",";",",","?","!"],L2=new RegExp(`[${R2.join("")}]+$`);function Km(e){return e.replace(L2,"")}function $t(e){return e==null||e===""?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):g(e)}function ns(...e){const t=e.map(o=>$t(o)).filter(o=>!!Km(o)),r=t[t.length-1]?.endsWith("."),n=t.map(o=>Km($t(o)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function Ze(e){return e instanceof Error?e:new Error($t(e))}function ol(e,t){const r=Ze(e),n=ns(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var A;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(A||(A={}));var R;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(R||(R={}));R.ClientError,R.ServerError;A.Continue+"",R.Information,A.SwitchingProtocols+"",R.Information,A.Processing+"",R.Information,A.EarlyHints+"",R.Information,A.Ok+"",R.Success,A.Created+"",R.Success,A.Accepted+"",R.Success,A.NonAuthoritativeInformation+"",R.Success,A.NoContent+"",R.Success,A.ResetContent+"",R.Success,A.PartialContent+"",R.Success,A.MultiStatus+"",R.Success,A.AlreadyReported+"",R.Success,A.ImUsed+"",R.Success,A.MultipleChoices+"",R.Redirect,A.MovedPermanently+"",R.Redirect,A.Found+"",R.Redirect,A.SeeOther+"",R.Redirect,A.NotModified+"",R.Redirect,A.UseProxy+"",R.Redirect,A.Unused+"",R.Redirect,A.TemporaryRedirect+"",R.Redirect,A.PermanentRedirect+"",R.Redirect,A.BadRequest+"",R.ClientError,A.Unauthorized+"",R.ClientError,A.PaymentRequired+"",R.ClientError,A.Forbidden+"",R.ClientError,A.NotFound+"",R.ClientError,A.MethodNotAllowed+"",R.ClientError,A.NotAcceptable+"",R.ClientError,A.ProxyAuthenticationRequired+"",R.ClientError,A.RequestTimeout+"",R.ClientError,A.Conflict+"",R.ClientError,A.Gone+"",R.ClientError,A.LengthRequired+"",R.ClientError,A.PreconditionFailed+"",R.ClientError,A.PayloadTooLarge+"",R.ClientError,A.UriTooLong+"",R.ClientError,A.UnsupportedMediaType+"",R.ClientError,A.RangeNotSatisfiable+"",R.ClientError,A.ExpectationFailed+"",R.ClientError,A.ImATeapot+"",R.ClientError,A.MisdirectedRequest+"",R.ClientError,A.UnprocessableContent+"",R.ClientError,A.Locked+"",R.ClientError,A.FailedDependency+"",R.ClientError,A.TooEarly+"",R.ClientError,A.UpgradeRequired+"",R.ClientError,A.PreconditionRequired+"",R.ClientError,A.TooManyRequests+"",R.ClientError,A.RequestHeaderFieldsTooLarge+"",R.ClientError,A.UnavailableForLegalReasons+"",R.ClientError,A.InternalServerError+"",R.ServerError,A.NotImplemented+"",R.ServerError,A.BadGateway+"",R.ServerError,A.ServiceUnavailable+"",R.ServerError,A.GatewayTimeout+"",R.ServerError,A.HttpVersionNotSupported+"",R.ServerError,A.VariantAlsoNegotiates+"",R.ServerError,A.InsufficientStorage+"",R.ServerError,A.LoopDetected+"",R.ServerError,A.NotExtended+"",R.ServerError,A.NetworkAuthenticationRequired+"",R.ServerError;const yu={[R.Information]:[A.Continue,A.SwitchingProtocols,A.Processing,A.EarlyHints],[R.Success]:[A.Ok,A.Created,A.Accepted,A.NonAuthoritativeInformation,A.NoContent,A.ResetContent,A.PartialContent,A.MultiStatus,A.AlreadyReported,A.ImUsed],[R.Redirect]:[A.MultipleChoices,A.MovedPermanently,A.Found,A.SeeOther,A.NotModified,A.UseProxy,A.Unused,A.TemporaryRedirect,A.PermanentRedirect],[R.ClientError]:[A.BadRequest,A.Unauthorized,A.PaymentRequired,A.Forbidden,A.NotFound,A.MethodNotAllowed,A.NotAcceptable,A.ProxyAuthenticationRequired,A.RequestTimeout,A.Conflict,A.Gone,A.LengthRequired,A.PreconditionFailed,A.PayloadTooLarge,A.UriTooLong,A.UnsupportedMediaType,A.RangeNotSatisfiable,A.ExpectationFailed,A.ImATeapot,A.MisdirectedRequest,A.UnprocessableContent,A.Locked,A.FailedDependency,A.TooEarly,A.UpgradeRequired,A.PreconditionRequired,A.TooManyRequests,A.RequestHeaderFieldsTooLarge,A.UnavailableForLegalReasons],[R.ServerError]:[A.InternalServerError,A.NotImplemented,A.BadGateway,A.ServiceUnavailable,A.GatewayTimeout,A.HttpVersionNotSupported,A.VariantAlsoNegotiates,A.InsufficientStorage,A.LoopDetected,A.NotExtended,A.NetworkAuthenticationRequired]};function Yd({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Iu{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(Ze(n))}})}}class Zi extends Error{}class j2 extends Zi{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class U2 extends Zi{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class _2 extends Zi{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class vo extends Zi{}class dg extends Zi{constructor(t){super(`Invalid unit ${t}`)}}class It extends Zi{}class Zn extends Zi{constructor(){super("Zone is an abstract class")}}const O="numeric",Qr="short",mr="long",Mu={year:O,month:O,day:O},fg={year:O,month:Qr,day:O},V2={year:O,month:Qr,day:O,weekday:Qr},mg={year:O,month:mr,day:O},hg={year:O,month:mr,day:O,weekday:mr},pg={hour:O,minute:O},gg={hour:O,minute:O,second:O},yg={hour:O,minute:O,second:O,timeZoneName:Qr},bg={hour:O,minute:O,second:O,timeZoneName:mr},wg={hour:O,minute:O,hourCycle:"h23"},vg={hour:O,minute:O,second:O,hourCycle:"h23"},$g={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:Qr},Dg={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:mr},xg={year:O,month:O,day:O,hour:O,minute:O},Ag={year:O,month:O,day:O,hour:O,minute:O,second:O},Eg={year:O,month:Qr,day:O,hour:O,minute:O},Cg={year:O,month:Qr,day:O,hour:O,minute:O,second:O},W2={year:O,month:Qr,day:O,weekday:Qr,hour:O,minute:O},kg={year:O,month:mr,day:O,hour:O,minute:O,timeZoneName:Qr},Fg={year:O,month:mr,day:O,hour:O,minute:O,second:O,timeZoneName:Qr},Sg={year:O,month:mr,day:O,weekday:mr,hour:O,minute:O,timeZoneName:mr},Ng={year:O,month:mr,day:O,weekday:mr,hour:O,minute:O,second:O,timeZoneName:mr};class va{get type(){throw new Zn}get name(){throw new Zn}get ianaName(){return this.name}get isUniversal(){throw new Zn}offsetName(t,r){throw new Zn}formatOffset(t,r){throw new Zn}offset(t){throw new Zn}equals(t){throw new Zn}get isValid(){throw new Zn}}let tc=null;class sl extends va{static get instance(){return tc===null&&(tc=new sl),tc}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return _g(t,r,n)}formatOffset(t,r){return zs(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const ed=new Map;function z2(e){let t=ed.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),ed.set(e,t)),t}const q2={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function K2(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,o,s,a,u,l,c]=n;return[s,i,o,a,u,l,c]}function G2(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:o,value:s}=r[i],a=q2[o];o==="era"?n[a]=s:G(a)||(n[a]=parseInt(s,10))}return n}const rc=new Map;class Ln extends va{static create(t){let r=rc.get(t);return r===void 0&&rc.set(t,r=new Ln(t)),r}static resetCache(){rc.clear(),ed.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Ln.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return _g(t,r,n,this.name)}formatOffset(t,r){return zs(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=z2(this.name);let[i,o,s,a,u,l,c]=n.formatToParts?G2(n,r):K2(n,r);a==="BC"&&(i=-Math.abs(i)+1);const f=ul({year:i,month:o,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let m=+r;const D=m%1e3;return m-=D>=0?D:1e3+D,(f-m)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Gm={};function Z2(e,t={}){const r=JSON.stringify([e,t]);let n=Gm[r];return n||(n=new Intl.ListFormat(e,t),Gm[r]=n),n}const td=new Map;function rd(e,t={}){const r=JSON.stringify([e,t]);let n=td.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),td.set(r,n)),n}const nd=new Map;function H2(e,t={}){const r=JSON.stringify([e,t]);let n=nd.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),nd.set(r,n)),n}const id=new Map;function J2(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let o=id.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),id.set(i,o)),o}let Os=null;function Y2(){return Os||(Os=new Intl.DateTimeFormat().resolvedOptions().locale,Os)}const od=new Map;function Tg(e){let t=od.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),od.set(e,t)),t}const sd=new Map;function X2(e){let t=sd.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...Pg,...t}),sd.set(e,t)}return t}function Q2(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=rd(e).resolvedOptions(),i=e}catch{const u=e.substring(0,r);n=rd(u).resolvedOptions(),i=u}const{numberingSystem:o,calendar:s}=n;return[i,o,s]}}function ev(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function tv(e){const t=[];for(let r=1;r<=12;r++){const n=H.utc(2009,r,1);t.push(e(n))}return t}function rv(e){const t=[];for(let r=1;r<=7;r++){const n=H.utc(2016,11,13+r);t.push(e(n))}return t}function Ha(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function nv(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Tg(e.locale).numberingSystem==="latn"}class iv{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:o,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=H2(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):rf(t,3);return it(r,this.padTo)}}}class ov{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Ln.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=rd(r,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class sv{constructor(t,r,n){this.opts={style:"long",...n},!r&&jg()&&(this.rtf=J2(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Fv(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Pg={firstDay:1,minimalDays:4,weekend:[6,7]};class ve{static fromOpts(t){return ve.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,o=!1){const s=t||Ue.defaultLocale,a=s||(o?"en-US":Y2()),u=r||Ue.defaultNumberingSystem,l=n||Ue.defaultOutputCalendar,c=ud(i)||Ue.defaultWeekSettings;return new ve(a,u,l,c,s)}static resetCache(){Os=null,td.clear(),nd.clear(),id.clear(),od.clear(),sd.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return ve.create(t,r,n,i)}constructor(t,r,n,i,o){const[s,a,u]=Q2(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=i,this.intl=ev(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=nv(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:ve.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,ud(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return Ha(this,t,zg,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const i=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";if(!this.monthsCache[o][t]){const s=n?a=>this.dtFormatter(a,i).format():a=>this.extract(a,i,"month");this.monthsCache[o][t]=tv(s)}return this.monthsCache[o][t]})}weekdays(t,r=!1){return Ha(this,t,Gg,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=rv(o=>this.extract(o,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Ha(this,void 0,()=>Zg,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[H.utc(2016,11,13,9),H.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Ha(this,t,Hg,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[H.utc(-40,1,1),H.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),o=i.formatToParts(),s=o.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new iv(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new ov(t,this.intl,r)}relFormatter(t={}){return new sv(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Z2(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Tg(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Ug()?X2(this.locale):Pg}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let nc=null;class Vt extends va{static get utcInstance(){return nc===null&&(nc=new Vt(0)),nc}static instance(t){return t===0?Vt.utcInstance:new Vt(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new Vt(ll(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${zs(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${zs(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return zs(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class av extends va{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function ei(e,t){if(G(e)||e===null)return t;if(e instanceof va)return e;if(mv(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?sl.instance:r==="utc"||r==="gmt"?Vt.utcInstance:Vt.parseSpecifier(r)||Ln.create(e)}else return ni(e)?Vt.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new av(e)}const Xd={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Zm={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},uv=Xd.hanidec.replace(/[\[|\]]/g,"").split("");function lv(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Xd.hanidec)!==-1)t+=uv.indexOf(e[r]);else for(const i in Zm){const[o,s]=Zm[i];n>=o&&n<=s&&(t+=n-o)}}return parseInt(t,10)}else return t}const ad=new Map;function cv(){ad.clear()}function Kr({numberingSystem:e},t=""){const r=e||"latn";let n=ad.get(r);n===void 0&&(n=new Map,ad.set(r,n));let i=n.get(t);return i===void 0&&(i=new RegExp(`${Xd[r]}${t}`),n.set(t,i)),i}let Hm=()=>Date.now(),Jm="system",Ym=null,Xm=null,Qm=null,eh=60,th,rh=null;class Ue{static get now(){return Hm}static set now(t){Hm=t}static set defaultZone(t){Jm=t}static get defaultZone(){return ei(Jm,sl.instance)}static get defaultLocale(){return Ym}static set defaultLocale(t){Ym=t}static get defaultNumberingSystem(){return Xm}static set defaultNumberingSystem(t){Xm=t}static get defaultOutputCalendar(){return Qm}static set defaultOutputCalendar(t){Qm=t}static get defaultWeekSettings(){return rh}static set defaultWeekSettings(t){rh=ud(t)}static get twoDigitCutoffYear(){return eh}static set twoDigitCutoffYear(t){eh=t%100}static get throwOnInvalid(){return th}static set throwOnInvalid(t){th=t}static resetCaches(){ve.resetCache(),Ln.resetCache(),H.resetCache(),cv()}}class Hr{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Ig=[0,31,59,90,120,151,181,212,243,273,304,334],Mg=[0,31,60,91,121,152,182,213,244,274,305,335];function Mr(e,t){return new Hr("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Qd(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function Og(e,t,r){return r+($a(e)?Mg:Ig)[t-1]}function Bg(e,t){const r=$a(e)?Mg:Ig,n=r.findIndex(o=>o<t),i=t-r[n];return{month:n+1,day:i}}function ef(e,t){return(e-t+7)%7+1}function Ou(e,t=4,r=1){const{year:n,month:i,day:o}=e,s=Og(n,i,o),a=ef(Qd(n,i,o),r);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=n-1,u=ea(l,t,r)):u>ea(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...cl(e)}}function nh(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:o}=e,s=ef(Qd(n,1,t),r),a=ko(n);let u=i*7+o-s-7+t,l;u<1?(l=n-1,u+=ko(l)):u>a?(l=n+1,u-=ko(n)):l=n;const{month:c,day:d}=Bg(l,u);return{year:l,month:c,day:d,...cl(e)}}function ic(e){const{year:t,month:r,day:n}=e,i=Og(t,r,n);return{year:t,ordinal:i,...cl(e)}}function ih(e){const{year:t,ordinal:r}=e,{month:n,day:i}=Bg(t,r);return{year:t,month:n,day:i,...cl(e)}}function oh(e,t){if(!G(e.localWeekday)||!G(e.localWeekNumber)||!G(e.localWeekYear)){if(!G(e.weekday)||!G(e.weekNumber)||!G(e.weekYear))throw new vo("Cannot mix locale-based week fields with ISO-based week fields");return G(e.localWeekday)||(e.weekday=e.localWeekday),G(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),G(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function dv(e,t=4,r=1){const n=al(e.weekYear),i=Or(e.weekNumber,1,ea(e.weekYear,t,r)),o=Or(e.weekday,1,7);return n?i?o?!1:Mr("weekday",e.weekday):Mr("week",e.weekNumber):Mr("weekYear",e.weekYear)}function fv(e){const t=al(e.year),r=Or(e.ordinal,1,ko(e.year));return t?r?!1:Mr("ordinal",e.ordinal):Mr("year",e.year)}function Rg(e){const t=al(e.year),r=Or(e.month,1,12),n=Or(e.day,1,Bu(e.year,e.month));return t?r?n?!1:Mr("day",e.day):Mr("month",e.month):Mr("year",e.year)}function Lg(e){const{hour:t,minute:r,second:n,millisecond:i}=e,o=Or(t,0,23)||t===24&&r===0&&n===0&&i===0,s=Or(r,0,59),a=Or(n,0,59),u=Or(i,0,999);return o?s?a?u?!1:Mr("millisecond",i):Mr("second",n):Mr("minute",r):Mr("hour",t)}function G(e){return typeof e>"u"}function ni(e){return typeof e=="number"}function al(e){return typeof e=="number"&&e%1===0}function mv(e){return typeof e=="string"}function hv(e){return Object.prototype.toString.call(e)==="[object Date]"}function jg(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Ug(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function pv(e){return Array.isArray(e)?e:[e]}function sh(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const o=[t(i),i];return n&&r(n[0],o[0])===n[0]?n:o},null)[1]}function gv(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function Bo(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ud(e){if(e==null)return null;if(typeof e!="object")throw new It("Week settings must be an object");if(!Or(e.firstDay,1,7)||!Or(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Or(t,1,7)))throw new It("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Or(e,t,r){return al(e)&&e>=t&&e<=r}function yv(e,t){return e-t*Math.floor(e/t)}function it(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function Yn(e){if(!(G(e)||e===null||e===""))return parseInt(e,10)}function Ai(e){if(!(G(e)||e===null||e===""))return parseFloat(e)}function tf(e){if(!(G(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function rf(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function $a(e){return e%4===0&&(e%100!==0||e%400===0)}function ko(e){return $a(e)?366:365}function Bu(e,t){const r=yv(t-1,12)+1,n=e+(t-r)/12;return r===2?$a(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function ul(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function ah(e,t,r){return-ef(Qd(e,1,t),r)+t-1}function ea(e,t=4,r=1){const n=ah(e,t,r),i=ah(e+1,t,r);return(ko(e)-n+i)/7}function ld(e){return e>99?e:e>Ue.twoDigitCutoffYear?1900+e:2e3+e}function _g(e,t,r,n=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(o.timeZone=n);const s={timeZoneName:t,...o},a=new Intl.DateTimeFormat(r,s).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function ll(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function Vg(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new It(`Invalid unit value ${e}`);return t}function Ru(e,t){const r={};for(const n in e)if(Bo(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=Vg(i)}return r}function zs(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${it(r,2)}:${it(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${it(r,2)}${it(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function cl(e){return gv(e,["hour","minute","second","millisecond"])}const bv=["January","February","March","April","May","June","July","August","September","October","November","December"],Wg=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wv=["J","F","M","A","M","J","J","A","S","O","N","D"];function zg(e){switch(e){case"narrow":return[...wv];case"short":return[...Wg];case"long":return[...bv];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const qg=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Kg=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],vv=["M","T","W","T","F","S","S"];function Gg(e){switch(e){case"narrow":return[...vv];case"short":return[...Kg];case"long":return[...qg];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Zg=["AM","PM"],$v=["Before Christ","Anno Domini"],Dv=["BC","AD"],xv=["B","A"];function Hg(e){switch(e){case"narrow":return[...xv];case"short":return[...Dv];case"long":return[...$v];default:return null}}function Av(e){return Zg[e.hour<12?0:1]}function Ev(e,t){return Gg(t)[e.weekday-1]}function Cv(e,t){return zg(t)[e.month-1]}function kv(e,t){return Hg(t)[e.year<0?0:1]}function Fv(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&o){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${i[e][0]}`;case-1:return d?"yesterday":`last ${i[e][0]}`;case 0:return d?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=n?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function uh(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const Sv={D:Mu,DD:fg,DDD:mg,DDDD:hg,t:pg,tt:gg,ttt:yg,tttt:bg,T:wg,TT:vg,TTT:$g,TTTT:Dg,f:xg,ff:Eg,fff:kg,ffff:Sg,F:Ag,FF:Cg,FFF:Fg,FFFF:Ng};class Ot{static create(t,r={}){return new Ot(t,r)}static parseFormat(t){let r=null,n="",i=!1;const o=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||i)&&o.push({literal:i||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&o.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&o.push({literal:i||/^\s+$/.test(n),val:n}),o}static macroTokenToFormatOpts(t){return Sv[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return it(t,r);const i={...this.opts};return r>0&&(i.padTo=r),n&&(i.signDisplay=n),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(m,D)=>this.loc.extract(t,m,D),s=m=>t.isOffsetFixed&&t.offset===0&&m.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,m.format):"",a=()=>n?Av(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(m,D)=>n?Cv(t,m):o(D?{month:m}:{month:m,day:"numeric"},"month"),l=(m,D)=>n?Ev(t,m):o(D?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),c=m=>{const D=Ot.macroTokenToFormatOpts(m);return D?this.formatWithSystemDefault(t,D):m},d=m=>n?kv(t,m):o({era:m},"era"),f=m=>{switch(m){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(m)}};return uh(Ot.parseFormat(r),f)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,i=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(c,d)=>f=>{const m=i(f);if(m){const D=d.isNegativeDuration&&m!==d.largestUnit?n:1;let v;return this.opts.signMode==="negativeLargestOnly"&&m!==d.largestUnit?v="never":this.opts.signMode==="all"?v="always":v="auto",this.num(c.get(m)*D,f.length,v)}else return f},s=Ot.parseFormat(r),a=s.reduce((c,{literal:d,val:f})=>d?c:c.concat(f),[]),u=t.shiftTo(...a.map(i).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return uh(s,o(u,l))}}const Jg=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function is(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function os(...e){return t=>e.reduce(([r,n,i],o)=>{const[s,a,u]=o(t,i);return[{...r,...s},a||n,u]},[{},null,1]).slice(0,2)}function ss(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function Yg(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=Yn(t[r+i]);return[n,null,r+i]}}const Xg=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,Nv=`(?:${Xg.source}?(?:\\[(${Jg.source})\\])?)?`,nf=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Qg=RegExp(`${nf.source}${Nv}`),of=RegExp(`(?:[Tt]${Qg.source})?`),Tv=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Pv=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Iv=/(\d{4})-?(\d{3})/,Mv=Yg("weekYear","weekNumber","weekDay"),Ov=Yg("year","ordinal"),Bv=/(\d{4})-(\d\d)-(\d\d)/,ey=RegExp(`${nf.source} ?(?:${Xg.source}|(${Jg.source}))?`),Rv=RegExp(`(?: ${ey.source})?`);function Fo(e,t,r){const n=e[t];return G(n)?r:Yn(n)}function Lv(e,t){return[{year:Fo(e,t),month:Fo(e,t+1,1),day:Fo(e,t+2,1)},null,t+3]}function as(e,t){return[{hours:Fo(e,t,0),minutes:Fo(e,t+1,0),seconds:Fo(e,t+2,0),milliseconds:tf(e[t+3])},null,t+4]}function Da(e,t){const r=!e[t]&&!e[t+1],n=ll(e[t+1],e[t+2]),i=r?null:Vt.instance(n);return[{},i,t+3]}function xa(e,t){const r=e[t]?Ln.create(e[t]):null;return[{},r,t+1]}const jv=RegExp(`^T?${nf.source}$`),Uv=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function _v(e){const[t,r,n,i,o,s,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",f=(m,D=!1)=>m!==void 0&&(D||m&&c)?-m:m;return[{years:f(Ai(r)),months:f(Ai(n)),weeks:f(Ai(i)),days:f(Ai(o)),hours:f(Ai(s)),minutes:f(Ai(a)),seconds:f(Ai(u),u==="-0"),milliseconds:f(tf(l),d)}]}const Vv={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function sf(e,t,r,n,i,o,s){const a={year:t.length===2?ld(Yn(t)):Yn(t),month:Wg.indexOf(r)+1,day:Yn(n),hour:Yn(i),minute:Yn(o)};return s&&(a.second=Yn(s)),e&&(a.weekday=e.length>3?qg.indexOf(e)+1:Kg.indexOf(e)+1),a}const Wv=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function zv(e){const[,t,r,n,i,o,s,a,u,l,c,d]=e,f=sf(t,i,n,r,o,s,a);let m;return u?m=Vv[u]:l?m=0:m=ll(c,d),[f,new Vt(m)]}function qv(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Kv=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Gv=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Zv=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function lh(e){const[,t,r,n,i,o,s,a]=e;return[sf(t,i,n,r,o,s,a),Vt.utcInstance]}function Hv(e){const[,t,r,n,i,o,s,a]=e;return[sf(t,a,r,n,i,o,s),Vt.utcInstance]}const Jv=is(Tv,of),Yv=is(Pv,of),Xv=is(Iv,of),Qv=is(Qg),ty=os(Lv,as,Da,xa),e$=os(Mv,as,Da,xa),t$=os(Ov,as,Da,xa),r$=os(as,Da,xa);function n$(e){return ss(e,[Jv,ty],[Yv,e$],[Xv,t$],[Qv,r$])}function i$(e){return ss(qv(e),[Wv,zv])}function o$(e){return ss(e,[Kv,lh],[Gv,lh],[Zv,Hv])}function s$(e){return ss(e,[Uv,_v])}const a$=os(as);function u$(e){return ss(e,[jv,a$])}const l$=is(Bv,Rv),c$=is(ey),d$=os(as,Da,xa);function f$(e){return ss(e,[l$,ty],[c$,d$])}const ch="Invalid Duration",ry={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},m$={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...ry},kr=146097/400,lo=146097/4800,h$={years:{quarters:4,months:12,weeks:kr/7,days:kr,hours:kr*24,minutes:kr*24*60,seconds:kr*24*60*60,milliseconds:kr*24*60*60*1e3},quarters:{months:3,weeks:kr/28,days:kr/4,hours:kr*24/4,minutes:kr*24*60/4,seconds:kr*24*60*60/4,milliseconds:kr*24*60*60*1e3/4},months:{weeks:lo/7,days:lo,hours:lo*24,minutes:lo*24*60,seconds:lo*24*60*60,milliseconds:lo*24*60*60*1e3},...ry},Ii=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],p$=Ii.slice(0).reverse();function vn(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new le(n)}function ny(e,t){let r=t.milliseconds??0;for(const n of p$.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function dh(e,t){const r=ny(e,t)<0?-1:1;Ii.reduceRight((n,i)=>{if(G(t[i]))return n;if(n){const o=t[n]*r,s=e[i][n],a=Math.floor(o/s);t[i]+=a*r,t[n]-=a*s*r}return i},null),Ii.reduce((n,i)=>{if(G(t[i]))return n;if(n){const o=t[n]%1;t[n]-=o,t[i]+=o*e[n][i]}return i},null)}function fh(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class le{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?h$:m$;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||ve.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return le.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new It(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new le({values:Ru(t,le.normalizeUnit),loc:ve.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(ni(t))return le.fromMillis(t);if(le.isDuration(t))return t;if(typeof t=="object")return le.fromObject(t);throw new It(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=s$(t);return n?le.fromObject(n,r):le.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=u$(t);return n?le.fromObject(n,r):le.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new It("need to specify a reason the Duration is invalid");const n=t instanceof Hr?t:new Hr(t,r);if(Ue.throwOnInvalid)throw new _2(n);return new le({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new dg(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?Ot.create(this.loc,n).formatDurationFromString(this,t):ch}toHuman(t={}){if(!this.isValid)return ch;const r=t.showZeros!==!1,n=Ii.map(i=>{const o=this.values[i];return G(o)||o===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=rf(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},H.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?ny(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=le.fromDurationLike(t),n={};for(const i of Ii)(Bo(r.values,i)||Bo(this.values,i))&&(n[i]=r.get(i)+this.get(i));return vn(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=le.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Vg(t(this.values[n],n));return vn(this,{values:r},!0)}get(t){return this[le.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Ru(t,le.normalizeUnit)};return vn(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return vn(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return dh(this.matrix,t),vn(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=fh(this.normalize().shiftToAll().toObject());return vn(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>le.normalizeUnit(s));const r={},n={},i=this.toObject();let o;for(const s of Ii)if(t.indexOf(s)>=0){o=s;let a=0;for(const l in n)a+=this.matrix[l][s]*n[l],n[l]=0;ni(i[s])&&(a+=i[s]);const u=Math.trunc(a);r[s]=u,n[s]=(a*1e3-u*1e3)/1e3}else ni(i[s])&&(n[s]=i[s]);for(const s in n)n[s]!==0&&(r[o]+=s===o?n[s]:n[s]/this.matrix[o][s]);return dh(this.matrix,r),vn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return vn(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=fh(this.values);return vn(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of Ii)if(!r(this.values[n],t.values[n]))return!1;return!0}}const co="Invalid Interval";function g$(e,t){return!e||!e.isValid?Ge.invalid("missing or invalid start"):!t||!t.isValid?Ge.invalid("missing or invalid end"):t<e?Ge.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class Ge{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new It("need to specify a reason the Interval is invalid");const n=t instanceof Hr?t:new Hr(t,r);if(Ue.throwOnInvalid)throw new U2(n);return new Ge({invalid:n})}static fromDateTimes(t,r){const n=Es(t),i=Es(r),o=g$(n,i);return o??new Ge({start:n,end:i})}static after(t,r){const n=le.fromDurationLike(r),i=Es(t);return Ge.fromDateTimes(i,i.plus(n))}static before(t,r){const n=le.fromDurationLike(r),i=Es(t);return Ge.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let o,s;try{o=H.fromISO(n,r),s=o.isValid}catch{s=!1}let a,u;try{a=H.fromISO(i,r),u=a.isValid}catch{u=!1}if(s&&u)return Ge.fromDateTimes(o,a);if(s){const l=le.fromISO(i,r);if(l.isValid)return Ge.after(o,l)}else if(u){const l=le.fromISO(n,r);if(l.isValid)return Ge.before(a,l)}}return Ge.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?Ge.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Es).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:i}=this,o=0;for(;i<this.e;){const s=r[o]||this.e,a=+s>+this.e?this.e:s;n.push(Ge.fromDateTimes(i,a)),i=a,o+=1}return n}splitBy(t){const r=le.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,o;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*i));o=+a>+this.e?this.e:a,s.push(Ge.fromDateTimes(n,o)),n=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:Ge.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return Ge.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],o=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...o),a=s.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&i.push(Ge.fromDateTimes(r,u.time)),r=null);return Ge.merge(i)}difference(...t){return Ge.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:co}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Mu,r={}){return this.isValid?Ot.create(this.s.loc.clone(r),t).formatInterval(this):co}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:co}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:co}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:co}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:co}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):le.invalid(this.invalidReason)}mapEndpoints(t){return Ge.fromDateTimes(t(this.s),t(this.e))}}class Ja{static hasDST(t=Ue.defaultZone){const r=H.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Ln.isValidZone(t)}static normalizeZone(t){return ei(t,Ue.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||ve.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||ve.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||ve.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||ve.create(r,n,o)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||ve.create(r,n,o)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||ve.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||ve.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return ve.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return ve.create(r,null,"gregory").eras(t)}static features(){return{relative:jg(),localeWeek:Ug()}}}function mh(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(le.fromMillis(n).as("days"))}function y$(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=mh(u,l);return(c-c%7)/7}],["days",mh]],i={},o=e;let s,a;for(const[u,l]of n)r.indexOf(u)>=0&&(s=u,i[u]=l(e,t),a=o.plus(i),a>t?(i[u]--,e=o.plus(i),e>t&&(a=e,i[u]--,e=o.plus(i))):e=a);return[e,i,a,s]}function b$(e,t,r,n){let[i,o,s,a]=y$(e,t,r);const u=t-i,l=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(s<t&&(s=i.plus({[a]:1})),s!==i&&(o[a]=(o[a]||0)+u/(s-i)));const c=le.fromObject(o,n);return l.length>0?le.fromMillis(u,n).shiftTo(...l).plus(c):c}const w$="missing Intl.DateTimeFormat.formatToParts support";function he(e,t=r=>r){return{regex:e,deser:([r])=>t(lv(r))}}const v$=" ",iy=`[ ${v$}]`,oy=new RegExp(iy,"g");function $$(e){return e.replace(/\./g,"\\.?").replace(oy,iy)}function hh(e){return e.replace(/\./g,"").replace(oy," ").toLowerCase()}function Gr(e,t){return e===null?null:{regex:RegExp(e.map($$).join("|")),deser:([r])=>e.findIndex(n=>hh(r)===hh(n))+t}}function ph(e,t){return{regex:e,deser:([,r,n])=>ll(r,n),groups:t}}function Ya(e){return{regex:e,deser:([t])=>t}}function D$(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function x$(e,t){const r=Kr(t),n=Kr(t,"{2}"),i=Kr(t,"{3}"),o=Kr(t,"{4}"),s=Kr(t,"{6}"),a=Kr(t,"{1,2}"),u=Kr(t,"{1,3}"),l=Kr(t,"{1,6}"),c=Kr(t,"{1,9}"),d=Kr(t,"{2,4}"),f=Kr(t,"{4,6}"),m=C=>({regex:RegExp(D$(C.val)),deser:([k])=>k,literal:!0}),v=(C=>{if(e.literal)return m(C);switch(C.val){case"G":return Gr(t.eras("short"),0);case"GG":return Gr(t.eras("long"),0);case"y":return he(l);case"yy":return he(d,ld);case"yyyy":return he(o);case"yyyyy":return he(f);case"yyyyyy":return he(s);case"M":return he(a);case"MM":return he(n);case"MMM":return Gr(t.months("short",!0),1);case"MMMM":return Gr(t.months("long",!0),1);case"L":return he(a);case"LL":return he(n);case"LLL":return Gr(t.months("short",!1),1);case"LLLL":return Gr(t.months("long",!1),1);case"d":return he(a);case"dd":return he(n);case"o":return he(u);case"ooo":return he(i);case"HH":return he(n);case"H":return he(a);case"hh":return he(n);case"h":return he(a);case"mm":return he(n);case"m":return he(a);case"q":return he(a);case"qq":return he(n);case"s":return he(a);case"ss":return he(n);case"S":return he(u);case"SSS":return he(i);case"u":return Ya(c);case"uu":return Ya(a);case"uuu":return he(r);case"a":return Gr(t.meridiems(),0);case"kkkk":return he(o);case"kk":return he(d,ld);case"W":return he(a);case"WW":return he(n);case"E":case"c":return he(r);case"EEE":return Gr(t.weekdays("short",!1),1);case"EEEE":return Gr(t.weekdays("long",!1),1);case"ccc":return Gr(t.weekdays("short",!0),1);case"cccc":return Gr(t.weekdays("long",!0),1);case"Z":case"ZZ":return ph(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return ph(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return Ya(/[a-z_+-/]{1,256}?/i);case" ":return Ya(/[^\S\n\r]/);default:return m(C)}})(e)||{invalidReason:w$};return v.token=e,v}const A$={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function E$(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const o=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=A$[s];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function C$(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function k$(e,t,r){const n=e.match(t);if(n){const i={};let o=1;for(const s in r)if(Bo(r,s)){const a=r[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(o,o+u))),o+=u}return[n,i]}else return[n,{}]}function F$(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return G(e.z)||(r=Ln.create(e.z)),G(e.Z)||(r||(r=new Vt(e.Z)),n=e.Z),G(e.q)||(e.M=(e.q-1)*3+1),G(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),G(e.u)||(e.S=tf(e.u)),[Object.keys(e).reduce((o,s)=>{const a=t(s);return a&&(o[a]=e[s]),o},{}),r,n]}let oc=null;function S$(){return oc||(oc=H.fromMillis(1555555555555)),oc}function N$(e,t){if(e.literal)return e;const r=Ot.macroTokenToFormatOpts(e.val),n=ly(r,t);return n==null||n.includes(void 0)?e:n}function sy(e,t){return Array.prototype.concat(...e.map(r=>N$(r,t)))}class ay{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=sy(Ot.parseFormat(r),t),this.units=this.tokens.map(n=>x$(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=C$(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=k$(t,this.regex,this.handlers),[i,o,s]=n?F$(n):[null,null,void 0];if(Bo(n,"a")&&Bo(n,"H"))throw new vo("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function uy(e,t,r){return new ay(e,r).explainFromTokens(t)}function T$(e,t,r){const{result:n,zone:i,specificOffset:o,invalidReason:s}=uy(e,t,r);return[n,i,o,s]}function ly(e,t){if(!e)return null;const n=Ot.create(t,e).dtFormatter(S$()),i=n.formatToParts(),o=n.resolvedOptions();return i.map(s=>E$(s,e,o))}const sc="Invalid DateTime",gh=864e13;function Bs(e){return new Hr("unsupported zone",`the zone "${e.name}" is not supported`)}function ac(e){return e.weekData===null&&(e.weekData=Ou(e.c)),e.weekData}function uc(e){return e.localWeekData===null&&(e.localWeekData=Ou(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Ei(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new H({...r,...t,old:r})}function cy(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const o=r.offset(n);return i===o?[n,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function Xa(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function bu(e,t,r){return cy(ul(e),t,r)}function yh(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:n,month:i,day:Math.min(e.c.day,Bu(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=le.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=ul(o);let[u,l]=cy(a,r,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function fo(e,t,r,n,i,o){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=H.fromObject(e,{...r,zone:u,specificOffset:o});return s?l:l.setZone(a)}else return H.invalid(new Hr("unparsable",`the input "${i}" can't be parsed as ${n}`))}function Qa(e,t,r=!0){return e.isValid?Ot.create(ve.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function lc(e,t,r){const n=e.c.year>9999||e.c.year<0;let i="";if(n&&e.c.year>=0&&(i+="+"),i+=it(e.c.year,n?6:4),r==="year")return i;if(t){if(i+="-",i+=it(e.c.month),r==="month")return i;i+="-"}else if(i+=it(e.c.month),r==="month")return i;return i+=it(e.c.day),i}function bh(e,t,r,n,i,o,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=it(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=it(e.c.minute),s==="minute")break;a&&(u+=":",u+=it(e.c.second))}else{if(u+=it(e.c.minute),s==="minute")break;a&&(u+=it(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(u+=".",u+=it(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?u+="Z":e.o<0?(u+="-",u+=it(Math.trunc(-e.o/60)),u+=":",u+=it(Math.trunc(-e.o%60))):(u+="+",u+=it(Math.trunc(e.o/60)),u+=":",u+=it(Math.trunc(e.o%60)))),o&&(u+="["+e.zone.ianaName+"]"),u}const dy={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},P$={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},I$={ordinal:1,hour:0,minute:0,second:0,millisecond:0},wu=["year","month","day","hour","minute","second","millisecond"],M$=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],O$=["year","ordinal","hour","minute","second","millisecond"];function vu(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new dg(e);return t}function wh(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return vu(e)}}function B$(e){if(Rs===void 0&&(Rs=Ue.now()),e.type!=="iana")return e.offset(Rs);const t=e.name;let r=cd.get(t);return r===void 0&&(r=e.offset(Rs),cd.set(t,r)),r}function vh(e,t){const r=ei(t.zone,Ue.defaultZone);if(!r.isValid)return H.invalid(Bs(r));const n=ve.fromObject(t);let i,o;if(G(e.year))i=Ue.now();else{for(const u of wu)G(e[u])&&(e[u]=dy[u]);const s=Rg(e)||Lg(e);if(s)return H.invalid(s);const a=B$(r);[i,o]=bu(e,a,r)}return new H({ts:i,zone:r,loc:n,o})}function $h(e,t,r){const n=G(r.round)?!0:r.round,i=G(r.rounding)?"trunc":r.rounding,o=(a,u)=>(a=rf(a,n||r.calendary?0:2,r.calendary?"round":i),t.loc.clone(r).relFormatter(r).format(a,u)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(s(r.unit),r.unit);for(const a of r.units){const u=s(a);if(Math.abs(u)>=1)return o(u,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function Dh(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let Rs;const cd=new Map;class H{constructor(t){const r=t.zone||Ue.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Hr("invalid input"):null)||(r.isValid?null:Bs(r));this.ts=G(t.ts)?Ue.now():t.ts;let i=null,o=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,o]=[t.old.c,t.old.o];else{const a=ni(t.o)&&!t.old?t.o:r.offset(this.ts);i=Xa(this.ts,a),n=Number.isNaN(i.year)?new Hr("invalid input"):null,i=n?null:i,o=n?null:a}this._zone=r,this.loc=t.loc||ve.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new H({})}static local(){const[t,r]=Dh(arguments),[n,i,o,s,a,u,l]=r;return vh({year:n,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=Dh(arguments),[n,i,o,s,a,u,l]=r;return t.zone=Vt.utcInstance,vh({year:n,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=hv(t)?t.valueOf():NaN;if(Number.isNaN(n))return H.invalid("invalid input");const i=ei(r.zone,Ue.defaultZone);return i.isValid?new H({ts:n,zone:i,loc:ve.fromObject(r)}):H.invalid(Bs(i))}static fromMillis(t,r={}){if(ni(t))return t<-gh||t>gh?H.invalid("Timestamp out of range"):new H({ts:t,zone:ei(r.zone,Ue.defaultZone),loc:ve.fromObject(r)});throw new It(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(ni(t))return new H({ts:t*1e3,zone:ei(r.zone,Ue.defaultZone),loc:ve.fromObject(r)});throw new It("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=ei(r.zone,Ue.defaultZone);if(!n.isValid)return H.invalid(Bs(n));const i=ve.fromObject(r),o=Ru(t,wh),{minDaysInFirstWeek:s,startOfWeek:a}=oh(o,i),u=Ue.now(),l=G(r.specificOffset)?n.offset(u):r.specificOffset,c=!G(o.ordinal),d=!G(o.year),f=!G(o.month)||!G(o.day),m=d||f,D=o.weekYear||o.weekNumber;if((m||c)&&D)throw new vo("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&c)throw new vo("Can't mix ordinal dates with month/day");const v=D||o.weekday&&!m;let C,k,N=Xa(u,l);v?(C=M$,k=P$,N=Ou(N,s,a)):c?(C=O$,k=I$,N=ic(N)):(C=wu,k=dy);let j=!1;for(const Er of C){const Wr=o[Er];G(Wr)?j?o[Er]=k[Er]:o[Er]=N[Er]:j=!0}const q=v?dv(o,s,a):c?fv(o):Rg(o),Z=q||Lg(o);if(Z)return H.invalid(Z);const Le=v?nh(o,s,a):c?ih(o):o,[Pt,dt]=bu(Le,l,n),Lt=new H({ts:Pt,zone:n,o:dt,loc:i});return o.weekday&&m&&t.weekday!==Lt.weekday?H.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${Lt.toISO()}`):Lt.isValid?Lt:H.invalid(Lt.invalid)}static fromISO(t,r={}){const[n,i]=n$(t);return fo(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=i$(t);return fo(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=o$(t);return fo(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(G(t)||G(r))throw new It("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=n,s=ve.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[a,u,l,c]=T$(s,t,r);return c?H.invalid(c):fo(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return H.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=f$(t);return fo(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new It("need to specify a reason the DateTime is invalid");const n=t instanceof Hr?t:new Hr(t,r);if(Ue.throwOnInvalid)throw new j2(n);return new H({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=ly(t,ve.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return sy(Ot.parseFormat(t),ve.fromObject(r)).map(i=>i.val).join("")}static resetCache(){Rs=void 0,cd.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?ac(this).weekYear:NaN}get weekNumber(){return this.isValid?ac(this).weekNumber:NaN}get weekday(){return this.isValid?ac(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?uc(this).weekday:NaN}get localWeekNumber(){return this.isValid?uc(this).weekNumber:NaN}get localWeekYear(){return this.isValid?uc(this).weekYear:NaN}get ordinal(){return this.isValid?ic(this.c).ordinal:NaN}get monthShort(){return this.isValid?Ja.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Ja.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Ja.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Ja.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=ul(this.c),i=this.zone.offset(n-t),o=this.zone.offset(n+t),s=this.zone.offset(n-i*r),a=this.zone.offset(n-o*r);if(s===a)return[this];const u=n-s*r,l=n-a*r,c=Xa(u,s),d=Xa(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[Ei(this,{ts:u}),Ei(this,{ts:l})]:[this]}get isInLeapYear(){return $a(this.year)}get daysInMonth(){return Bu(this.year,this.month)}get daysInYear(){return this.isValid?ko(this.year):NaN}get weeksInWeekYear(){return this.isValid?ea(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?ea(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=Ot.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(Vt.instance(t),r)}toLocal(){return this.setZone(Ue.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=ei(t,Ue.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const o=t.offset(this.ts),s=this.toObject();[i]=bu(s,o,t)}return Ei(this,{ts:i,zone:t})}else return H.invalid(Bs(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Ei(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Ru(t,wh),{minDaysInFirstWeek:n,startOfWeek:i}=oh(r,this.loc),o=!G(r.weekYear)||!G(r.weekNumber)||!G(r.weekday),s=!G(r.ordinal),a=!G(r.year),u=!G(r.month)||!G(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||s)&&c)throw new vo("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new vo("Can't mix ordinal dates with month/day");let d;o?d=nh({...Ou(this.c,n,i),...r},n,i):G(r.ordinal)?(d={...this.toObject(),...r},G(r.day)&&(d.day=Math.min(Bu(d.year,d.month),d.day))):d=ih({...ic(this.c),...r});const[f,m]=bu(d,this.o,this.zone);return Ei(this,{ts:f,o:m})}plus(t){if(!this.isValid)return this;const r=le.fromDurationLike(t);return Ei(this,yh(this,r))}minus(t){if(!this.isValid)return this;const r=le.fromDurationLike(t).negate();return Ei(this,yh(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=le.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(n.weekNumber=this.weekNumber-1),n.weekday=o}else n.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);n.month=(o-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?Ot.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):sc}toLocaleString(t=Mu,r={}){return this.isValid?Ot.create(this.loc.clone(r),t).formatDateTime(this):sc}toLocaleParts(t={}){return this.isValid?Ot.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=vu(s);const a=t==="extended";let u=lc(this,a,s);return wu.indexOf(s)>=3&&(u+="T"),u+=bh(this,a,r,n,i,o,s),u}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?lc(this,t==="extended",vu(r)):null}toISOWeekDate(){return Qa(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=vu(a),(i&&wu.indexOf(a)>=3?"T":"")+bh(this,s==="extended",r,t,n,o,a)):null}toRFC2822(){return Qa(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Qa(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?lc(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),Qa(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():sc}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return le.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},o=pv(r).map(le.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=b$(a,u,o,i);return s?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(H.now(),t,r)}until(t){return this.isValid?Ge.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(r,n)<=i&&i<=o.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||H.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),$h(r,this.plus(n),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?$h(t.base||H.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(H.isDateTime))throw new It("min requires all arguments be DateTimes");return sh(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(H.isDateTime))throw new It("max requires all arguments be DateTimes");return sh(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:o=null}=n,s=ve.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return uy(s,t,r)}static fromStringExplain(t,r,n={}){return H.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,o=ve.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new ay(o,t)}static fromFormatParser(t,r,n={}){if(G(t)||G(r))throw new It("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=n,s=ve.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(r.locale))throw new It(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?H.invalid(c):fo(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return Mu}static get DATE_MED(){return fg}static get DATE_MED_WITH_WEEKDAY(){return V2}static get DATE_FULL(){return mg}static get DATE_HUGE(){return hg}static get TIME_SIMPLE(){return pg}static get TIME_WITH_SECONDS(){return gg}static get TIME_WITH_SHORT_OFFSET(){return yg}static get TIME_WITH_LONG_OFFSET(){return bg}static get TIME_24_SIMPLE(){return wg}static get TIME_24_WITH_SECONDS(){return vg}static get TIME_24_WITH_SHORT_OFFSET(){return $g}static get TIME_24_WITH_LONG_OFFSET(){return Dg}static get DATETIME_SHORT(){return xg}static get DATETIME_SHORT_WITH_SECONDS(){return Ag}static get DATETIME_MED(){return Eg}static get DATETIME_MED_WITH_SECONDS(){return Cg}static get DATETIME_MED_WITH_WEEKDAY(){return W2}static get DATETIME_FULL(){return kg}static get DATETIME_FULL_WITH_SECONDS(){return Fg}static get DATETIME_HUGE(){return Sg}static get DATETIME_HUGE_WITH_SECONDS(){return Ng}}function Es(e){if(H.isDateTime(e))return e;if(e&&e.valueOf&&ni(e.valueOf()))return H.fromJSDate(e);if(e&&typeof e=="object")return H.fromObject(e);throw new It(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var $e;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})($e||($e={}));const R$=[$e.Milliseconds,$e.Seconds,$e.Minutes,$e.Hours,$e.Days,$e.Weeks,$e.Months,$e.Years];$e.Milliseconds+"",$e.Seconds+"",$e.Minutes+"",$e.Hours+"",$e.Days+"",$e.Weeks+"",$e.Months+"",$e.Years+"";function L$(e){return R$.filter(t=>e[t])}function dd(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function j$(e){return dd(Math.max(e-.4,0),{decimalCount:0})}function xh(e){return e===0?0:Math.sign(e)}function Ro(e,t,r={}){const n={},i={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=L$(t).reverse();if(o||s)return a.forEach(c=>{n[c]=o?1/0:-1/0}),n;let u=le.fromObject(e).as($e.Milliseconds);const l=xh(u);return a.forEach((c,d)=>{const f=d===a.length-1;if(c===$e.Milliseconds)n.milliseconds=dd(u,i);else{const m=le.fromObject({milliseconds:u}).as(c),D=Math.sign(m),v=Math.abs(m),C=f?dd(v,i):Math.floor(i.decimalCount==null?v:j$(v)),k=C===0?0:C*D;n[c]=k,u-=le.fromObject({[c]:k}).as($e.Milliseconds),l!==xh(u)&&(u=0)}}),n}Intl.DateTimeFormat().resolvedOptions().locale;var z;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(z||(z={}));z.Year,z.Hour,z.Minute,z.Second,z.Millisecond;z.Month,z.Week,z.Day;z.Millisecond,z.Second,z.Minute,z.Hour,z.Day,z.Week,z.Month,z.Year;const Ah={min:0,max:23},Eh={min:0,max:59},Ch={min:0,max:59},kh={min:0,max:999};var Mt;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(Mt||(Mt={}));Mt.Sunday+"",Mt.Monday+"",Mt.Tuesday+"",Mt.Wednesday+"",Mt.Thursday+"",Mt.Friday+"",Mt.Saturday+"";Mt.Sunday,Mt.Monday,Mt.Tuesday,Mt.Wednesday,Mt.Thursday,Mt.Friday,Mt.Saturday;var Jt;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Jt||(Jt={}));Jt.January,Jt.February,Jt.March,Jt.April,Jt.May,Jt.June,Jt.July,Jt.August,Jt.September,Jt.October,Jt.November,Jt.December;const Fh={min:1,max:12},Sh={min:1,max:31};function _i(e){const t=new Iu,n=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:Ro(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function fy(...e){const t=e.join(""),r=ig(Array.from(t));return Array.from(r).join("")}function my(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function hy(e,t){const r=fy([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return py(e,r)}function py(e,t){const r=fy(t);return typeof e=="string"?new RegExp(my(e),r):new RegExp(e.source,r)}function gy(e,{caseSensitive:t}){const n="".replaceAll("i","");return py(e,n)}function af(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function yy(e,t){return t?typeof t=="string"?!!new RegExp(my(t),"i").exec(e):!!hy(t,"i").exec(e):!1}class p extends Error{name="AssertionError";constructor(t,r){super(ns(r,t)||"Assertion failed.")}}const Nh={interval:{milliseconds:100},timeout:{seconds:10}},cc=Symbol("not set");async function U$(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:o,options:s}=_$(t),a=Ro(s.timeout,{milliseconds:!0}).milliseconds,u=Ro(s.interval,{milliseconds:!0});let l=cc,c;async function d(){try{l=r?n():await n(),e(l,...i)}catch(m){l=cc,c=Ze(m)}}const f=Date.now();for(;l===cc;)if(await d(),await _i(u),Date.now()-f>=a){const D=`${o?`${o}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw ol(c,D)}return l}function T(e,t=!1){return((...r)=>U$(e,r,t))}function _$(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:by(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function by(e){return{interval:e?.interval||Nh.interval,timeout:e?.timeout||Nh.timeout}}const Cs={isFalse(e,t){if(e!==!1)throw new p(`'${g(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${g(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new p(`'${g(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new p(`'${g(e)}' is not truthy.`,t)}},wy={assert:Cs,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new p(`'${g(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${g(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new p(`'${g(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new p(`'${g(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:T(Cs.isFalse),isFalsy:T(Cs.isFalsy),isTrue:T(Cs.isTrue),isTruthy:T(Cs.isTruthy)}};function V$(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${g(e)} does not end with ${g(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${g(e)} does not end with ${g(t)}}`,r)}function W$(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new p(`${g(e)} ends with ${g(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${g(e)} ends with ${g(t)}}`,r)}function z$(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${g(e)} does not start with ${g(t)}}`,r)}else if(e[0]!==t)throw new p(`${g(e)} does not start with ${g(t)}}`,r)}function q$(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new p(`${g(e)} starts with ${g(t)}}`,r)}else if(e[0]===t)throw new p(`${g(e)} starts with ${g(t)}}`,r)}const ks={endsWith:V$,endsWithout:W$,startsWith:z$,startsWithout:q$},vy={assert:ks,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${g(e)} does not end with ${g(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${g(e)} does not end with ${g(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new p(`${g(e)} ends with ${g(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${g(e)} ends with ${g(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${g(e)} does not start with ${g(t)}}`,r)}else if(e[0]!==t)throw new p(`${g(e)} does not start with ${g(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new p(`${g(e)} starts with ${g(t)}}`,r)}else if(e[0]===t)throw new p(`${g(e)} starts with ${g(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:T(ks.endsWith),endsWithout:T(ks.endsWithout),startsWith:T(ks.startsWith),startsWithout:T(ks.startsWithout)}};function K$(e,t,r){const n=Tr(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function En(e,t){return Tr(t).includes(e)}const dc={isEnumValue(e,t,r){K$(e,t,r)},isNotEnumValue(e,t,r){const n=Tr(t);if(n.includes(e))throw new p(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},$y={assert:dc,check:{isEnumValue:En,isNotEnumValue(e,t){return!Tr(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=Tr(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=Tr(t);if(n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(Tr(t).includes(e))return e},isNotEnumValue(e,t){if(!Tr(t).includes(e))return e}},waitUntil:{isEnumValue:T(dc.isEnumValue),isNotEnumValue:T(dc.isNotEnumValue)}},fc={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${g(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${g(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new p(`Entries are not equal at key '${String(i)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))throw new p("Entries are equal.",r)}},Dy={assert:fc,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const i=e[n],o=t[n];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const i=e[n],o=t[n];return i!==o})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${g(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${g(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new p(`Entries are not equal at key '${String(i)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))return e;throw new p("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:T(fc.entriesEqual),notEntriesEqual:T(fc.notEntriesEqual)}};function Lu(e,t){return JSON.stringify(e)===JSON.stringify(t)}function ta(e,t){if(!(e===t||Lu(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Lu(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{ta(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${$t(s)}`)}})}throw new Error("Values are not JSON equal.")}}function Ls(e,t){if(e===t||Lu(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Lu(r,n)?!1:Object.keys(e).every(o=>Ls(e[o],t[o]))}return!1}const mc={jsonEquals(e,t,r){try{ta(e,t)}catch(n){throw new p($t(n),r)}},notJsonEquals(e,t,r){try{ta(e,t)}catch{return}throw new p("Values are JSON equal.",r)}},xy={assert:mc,check:{jsonEquals(e,t){return Ls(e,t)},notJsonEquals(e,t){return!Ls(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return ta(e,t),e}catch(n){throw new p($t(n),r)}},notJsonEquals(e,t,r){try{ta(e,t)}catch{return e}throw new p("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Ls(e,t))return e},notJsonEquals(e,t){if(!Ls(e,t))return e}},waitUntil:{jsonEquals:T(mc.jsonEquals),notJsonEquals:T(mc.notJsonEquals)}};function Th(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Ay(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Ay.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var Ey=typeof WeakMap=="function"?WeakMap:Ay;function Ph(e,t,r){if(!r||Lo(e)||Lo(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}function eu(e,t,r,n){if(!(!r||Lo(e)||Lo(t))){var i=r.get(e);i?i.set(t,n):(i=new Ey,i.set(t,n),r.set(e,i))}}function Zr(e,t,r){if(r&&r.comparator)return Ih(e,t,r);var n=Cy(e,t);return n!==null?n:Ih(e,t,r)}function Cy(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Lo(e)||Lo(t)?!1:null}function Ih(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new Ey;var n=r&&r.comparator,i=Ph(e,t,r.memoize);if(i!==null)return i;var o=Ph(t,e,r.memoize);if(o!==null)return o;if(n){var s=n(e,t);if(s===!1||s===!0)return eu(e,t,r.memoize,s),s;var a=Cy(e,t);if(a!==null)return a}var u=Th(e);if(u!==Th(t))return eu(e,t,r.memoize,!1),!1;eu(e,t,r.memoize,!0);var l=G$(e,t,u,r);return eu(e,t,r.memoize,l),l}function G$(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return Zr(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return ky(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Ri(e,t,n);case"RegExp":return Z$(e,t);case"Generator":return H$(e,t,n);case"DataView":return Ri(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Ri(new Uint8Array(e),new Uint8Array(t),n);case"Set":return Mh(e,t,n);case"Map":return Mh(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return Y$(e,t,n)}}function Z$(e,t){return e.toString()===t.toString()}function Mh(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){i.push([s,a])}),Ri(n.sort(),i.sort(),r)}function Ri(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(Zr(e[i],t[i],r)===!1)return!1;return!0}function H$(e,t,r){return Ri(fd(e),fd(t),r)}function J$(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function Oh(e){if(J$(e))try{return fd(e[Symbol.iterator]())}catch{return[]}return[]}function fd(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function Bh(e){var t=[];for(var r in e)t.push(r);return t}function Rh(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function ky(e,t,r,n){var i=r.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(Zr(e[r[o]],t[r[o]],n)===!1)return!1;return!0}function Y$(e,t,r){var n=Bh(e),i=Bh(t),o=Rh(e),s=Rh(t);if(n=n.concat(o),i=i.concat(s),n.length&&n.length===i.length)return Ri(Lh(n).sort(),Lh(i).sort())===!1?!1:ky(e,t,n,r);var a=Oh(e),u=Oh(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Ri(a,u,r)):n.length===0&&a.length===0&&i.length===0&&u.length===0}function Lo(e){return e===null||typeof e!="object"}function Lh(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class So extends p{name="DiffError";constructor(t,r,n,i){const o=M2(r,n);super([t,af(o)].join(`
`),i)}}function Xn(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const Jn={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${g(t)}

.`,r):new So("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${g(t)}

.`,r):new p(`

${g(e)}

strictly equals

${g(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${g(t)}

.`,r):new So("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${g(t)}

.`,r):new p(`

${g(e)}

loosely equals

${g(t)}

`,r)},deepEquals(e,t,r){if(!Zr(e,t,{comparator:Xn}))throw new So("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Zr(e,t,{comparator:Xn}))throw new p(`

${g(e)}

deeply equals

${g(t)}

`,r)}},Fy=Jn.deepEquals,Sy={assert:Jn,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Zr(e,t,{comparator:Xn})},notDeepEquals(e,t){return!Zr(e,t,{comparator:Xn})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${g(t)}

.`,r):new So("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${g(t)}

.`,r):new p(`

${g(e)}

strictly equals

${g(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${g(t)}

.`,r):new So("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${g(t)}

.`,r):new p(`

${g(e)}

loosely equals

${g(t)}

`,r);return e},deepEquals(e,t,r){if(Zr(e,t,{comparator:Xn}))return e;throw new So("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Zr(e,t,{comparator:Xn}))throw new p(`

${g(e)}

deeply equals

${g(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Zr(e,t,{comparator:Xn}))return e},notDeepEquals(e,t){if(!Zr(e,t,{comparator:Xn}))return e}},waitUntil:{strictEquals:T(Jn.strictEquals),notStrictEquals:T(Jn.notStrictEquals),looseEquals:T(Jn.looseEquals),notLooseEquals:T(Jn.notLooseEquals),deepEquals:T(Jn.deepEquals),notDeepEquals:T(Jn.notDeepEquals)}};function lr(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function Nr(e,t){return typeof t=="string"?t.includes(e):lr(t,e)}const $n={hasValue(e,t,r){if(!lr(e,t))throw new p(`'${g(e)}' does not have value '${g(t)}'.`,r)},lacksValue(e,t,r){if(lr(e,t))throw new p(`'${g(e)}' has value '${g(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new p(`'${g(e)}' does not have values '${g(t)}'.`,r)}if(n.length)throw new p(`'${g(e)}' does not have values '${g(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new p(`'${g(e)}' has values '${g(n)}'.`,r)},isIn(e,t,r){if(!Nr(e,t))throw new p(`'${g(e)}'

is not in

${g(t)}.`,r)},isNotIn(e,t,r){if(Nr(e,t))throw new p(`'${g(e)}'

is in

${g(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${g(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new p(`'${g(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new p(`'${g(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${g(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${g(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${g(e)}' is not empty.`,t)}}},Ny={assert:$n,check:{hasValue(e,t){return lr(e,t)},lacksValue(e,t){return!lr(e,t)},hasValues(e,t){return t.every(r=>lr(e,r))},lacksValues(e,t){return t.every(r=>!lr(e,r))},isIn(e,t){return Nr(e,t)},isNotIn(e,t){return!Nr(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!lr(e,t))throw new p(`'${g(e)}' does not have value '${g(t)}'.`,r);return e},lacksValue(e,t,r){if(lr(e,t))throw new p(`'${g(e)}' has value '${g(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new p(`'${g(e)}' does not have values '${g(t)}'.`,r)}if(n.length)throw new p(`'${g(e)}' does not have values '${g(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new p(`'${g(e)}' has values '${g(n)}'.`,r);return e},isIn(e,t,r){if(!Nr(e,t))throw new p(`'${g(e)}'

is not in

${g(t)}.`,r);return e},isNotIn(e,t,r){if(Nr(e,t))throw new p(`'${g(e)}'

is in

${g(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${g(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new p(`'${g(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new p(`'${g(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${g(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${g(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${g(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(lr(e,t))return e},lacksValue(e,t){if(!lr(e,t))return e},hasValues(e,t){if(t.every(r=>lr(e,r)))return e},lacksValues(e,t){if(!t.every(r=>lr(e,r)))return e},isIn(e,t){if(Nr(e,t))return e},isNotIn(e,t){if(!Nr(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:T($n.hasValue),lacksValue:T($n.lacksValue),hasValues:T($n.hasValues),lacksValues:T($n.lacksValues),isIn:T($n.isIn),isNotIn:T($n.isNotIn),isEmpty:T($n.isEmpty),isNotEmpty:T($n.isNotEmpty)}},hc={isHttpStatus(e,t){if(!En(e,A))throw new p(`${g(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(En(e,A)){if(!Nr(e,yu[t]))throw new p(`${g(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${g(e)} is not a valid HTTP status.`,r)}},Ty={assert:hc,check:{isHttpStatus(e){return En(e,A)},isHttpStatusCategory(e,t){return En(e,A)&&Nr(e,yu[t])}},assertWrap:{isHttpStatus(e,t){if(!En(e,A))throw new p(`${g(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(En(e,A)){if(!Nr(e,yu[t]))throw new p(`${g(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${g(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(En(e,A))return e},isHttpStatusCategory(e,t){if(En(e,A)&&Nr(e,yu[t]))return e}},waitUntil:{isHttpStatus:T(hc.isHttpStatus),isHttpStatusCategory:T(hc.isHttpStatusCategory)}},pc={instanceOf(e,t,r){if(!(e instanceof t))throw new p(`'${g(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${g(e)}' is an instance of '${t.name}'`,r)}},Py={assert:pc,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new p(`'${g(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${g(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:T(pc.instanceOf),notInstanceOf:T(pc.notInstanceOf)}},X$=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ie(e,t){return X$.some(r=>{try{return r(e,t)}catch{return!1}})}const Ci={isKeyOf(e,t,r){if(!Ie(t,e))throw new p(`'${String(e)}' is not a key of '${g(t)}'.`,r)},isNotKeyOf(e,t,r){if(Ie(t,e))throw new p(`'${String(e)}' is a key of '${g(t)}'.`,r)},hasKey(e,t,r){if(!Ie(e,t))throw new p(`'${g(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(Ie(e,t))throw new p(`'${g(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(i=>!Ie(e,i));if(n.length)throw new p(`'${g(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(i=>Ie(e,i));if(n.length)throw new p(`'${g(e)}' does not lack keys '${n.join(",")}'.`,r)}},Iy={assert:Ci,check:{isKeyOf(e,t){return Ie(t,e)},isNotKeyOf(e,t){return!Ie(t,e)},hasKey:Ie,lacksKey(e,t){return!Ie(e,t)},hasKeys(e,t){return t.every(r=>Ie(e,r))},lacksKeys(e,t){return t.every(r=>!Ie(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!Ie(t,e))throw new p(`'${String(e)}' is not a key of '${g(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(Ie(t,e))throw new p(`'${String(e)}' is a key of '${g(t)}'.`,r);return e},hasKey(e,t,r){if(!Ie(e,t))throw new p(`'${g(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(Ie(e,t))throw new p(`'${g(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(i=>!Ie(e,i));if(n.length)throw new p(`'${g(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(i=>Ie(e,i));if(n.length)throw new p(`'${g(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(Ie(t,e))return e},isNotKeyOf(e,t){if(!Ie(t,e))return e},hasKey(e,t){if(Ie(e,t))return e},lacksKey(e,t){if(!Ie(e,t))return e},hasKeys(e,t){if(t.every(r=>Ie(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!Ie(e,r)))return e}},waitUntil:{isKeyOf:T(Ci.isKeyOf),isNotKeyOf:T(Ci.isNotKeyOf),hasKey:T(Ci.hasKey),lacksKey:T(Ci.lacksKey),hasKeys:T(Ci.hasKeys),lacksKeys:T(Ci.lacksKeys)}};function Q$(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r)}function e5(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r)}const gc={isLengthAtLeast:Q$,isLengthExactly:e5},My={assert:gc,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)===t)return e})},waitUntil:{isLengthAtLeast:T(gc.isLengthAtLeast),isLengthExactly:T(gc.isLengthExactly)}},t5={never(e){throw new p("This code should not have executed.",e)}},Oy={assert:t5,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},yc={isDefined(e,t){if(e==null)throw new p(`'${g(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new p(`'${g(e)}' is not a nullish.`,t)}},By={assert:yc,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new p(`'${g(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new p(`'${g(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:T(yc.isDefined),isNullish:T(yc.isNullish)}},Gt={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${g({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${g({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n)}},Ry={assert:Gt,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${g({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${g({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:T(Gt.isInBounds),isOutBounds:T(Gt.isOutBounds),isInteger:T(Gt.isInteger),isNotInteger:T(Gt.isNotInteger),isAbove:T(Gt.isAbove),isAtLeast:T(Gt.isAtLeast),isBelow:T(Gt.isBelow),isAtMost:T(Gt.isAtMost),isNaN:T(Gt.isNaN),isFinite:T(Gt.isFinite),isInfinite:T(Gt.isInfinite),isApproximately:T(Gt.isApproximately),isNotApproximately:T(Gt.isNotApproximately)}};function r5(e,t,r,n,i){return Aa(...dl(e,t,r,n,i),!1)}function dl(e,t,r,n,i){const o=Array.isArray(r);return[o?e:Fy,o?t:e,o?r:t,o?n:r,o?i:n]}function Aa(e,t,r,n,i,o){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,n),o?a(l):a()}catch(l){u(new p(`Output from '${t.name}' did not produce expected output. ${$t(l)}`,i))}});try{return e(s,n),o?s:void 0}catch(a){throw new p(`Output from '${t.name}' did not produce expected output. ${$t(a)}`,i)}}function n5(e,t,r,n,i){try{const o=Aa(...dl(e,t,r,n,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function i5(e,t,r,n,i){return Aa(...dl(e,t,r,n,i),!0)}function o5(e,t,r,n,i){try{const o=Aa(...dl(e,t,r,n,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const bc=Symbol("not set");async function s5(e,t,r,n,i,o){const s=Array.isArray(r),a=s?e:Fy,u=s?t:e,l=s?r:t,c=s?n:r,d=by(s?i:n),f=s?o:i,m=Ro(d.timeout,{milliseconds:!0}).milliseconds,D=Ro(d.interval,{milliseconds:!0});let v=bc,C;async function k(){try{v=await Aa(a,u,l,c,void 0,!0)}catch(j){v=bc,C=Ze(j)}}const N=Date.now();for(;v===bc;)if(await k(),await _i(D),Date.now()-N>=m)throw ol(C,ns(f,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return v}const a5={output:r5},Ly={assert:a5,check:{output:n5},assertWrap:{output:i5},checkWrap:{output:o5},waitUntil:{output:s5}},Fs={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${g(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${g(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${g(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${g(e)}' is not a Primitive.`,t)}},jy={assert:Fs,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${g(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${g(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${g(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${g(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:T(Fs.isNotPrimitive),isNotPropertyKey:T(Fs.isNotPropertyKey),isPrimitive:T(Fs.isPrimitive),isPropertyKey:T(Fs.isPropertyKey)}},Ss={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${g(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${g(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${g(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${g(e)}' is a Promise.`,t)}},Uy={assert:Ss,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${g(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${g(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${g(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${g(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:T(Ss.isPromiseLike,!0),isNotPromiseLike:T(Ss.isNotPromiseLike,!0),isPromise:T(Ss.isPromise,!0),isNotPromise:T(Ss.isNotPromise,!0)}},wc={matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r)}},_y={assert:wc,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:T(wc.matches,!0),mismatches:T(wc.mismatches,!0)}},je={isArray(e,t){if(!Array.isArray(e))throw new p(`'${g(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${g(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${g(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new p(`'${g(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new p(`'${g(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${g(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${g(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${g(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new p(`'${g(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${g(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new p(`'${g(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${g(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${g(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${g(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${g(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new p(`'${g(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${g(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${g(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new p(`'${g(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${g(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${g(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${g(e)}' is a undefined.`,t)}},Vy={assert:je,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new p(`'${g(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${g(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${g(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new p(`'${g(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new p(`'${g(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${g(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${g(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${g(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new p(`'${g(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${g(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new p(`'${g(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${g(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${g(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${g(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${g(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new p(`'${g(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${g(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${g(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new p(`'${g(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${g(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${g(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${g(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:T(je.isArray),isBigInt:T(je.isBigInt),isBoolean:T(je.isBoolean),isFunction:T(je.isFunction),isNull:T(je.isNull),isNumber:T(je.isNumber),isObject:T(je.isObject),isPlainObject:T(je.isPlainObject),isString:T(je.isString),isSymbol:T(je.isSymbol),isUndefined:T(je.isUndefined),isNotArray:T(je.isNotArray),isNotBigInt:T(je.isNotBigInt),isNotBoolean:T(je.isNotBoolean),isNotFunction:T(je.isNotFunction),isNotNull:T(je.isNotNull),isNotNumber:T(je.isNotNumber),isNotObject:T(je.isNotObject),isNotPlainObject:T(je.isNotPlainObject),isNotString:T(je.isNotString),isNotSymbol:T(je.isNotSymbol),isNotUndefined:T(je.isNotUndefined)}};var Yt;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Yt||(Yt={}));function uf(e,t,r){lf(e,{noError:"No error.",notInstance:`'${g(e)}' is not an error instance.`},t,r)}function jh(e,t,r){lf(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${g(e)}' is not an error instance.`},t,r)}function lf(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new p(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=$t(e);if(typeof r.matchMessage=="string"){if(!yy(i,r.matchMessage))throw new p(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new p(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new p(t.notInstance,n);else throw new p(t.noError,n)}function Uh(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=$t(e);if(typeof t.matchMessage=="string"){if(!yy(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function fl(e,t,r,n){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,a)=>{try{await o}catch(u){i=Ze(u)}try{jh(i,r,n),e===Yt.Assert?s():e===Yt.Check?s(!0):s(i)}catch(u){e===Yt.CheckWrap?s(void 0):e===Yt.Check?s(!1):a(Ze(u))}})}catch(o){i=Ze(o)}try{return jh(i,r,n),e===Yt.Check?!0:e!==Yt.Assert?i:void 0}catch(o){if(e===Yt.CheckWrap)return;if(e===Yt.Check)return!1;throw o}}function u5(e,t,r){return fl(Yt.Assert,e,t,r)}function l5(e,t){return fl(Yt.Check,e,t)}function c5(e,t,r){return fl(Yt.AssertWrap,e,t,r)}function d5(e,t,r){return fl(Yt.CheckWrap,e,t,r)}const f5=T(uf);function m5(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${g(o)}'`);return f5(i,async()=>{try{await o();return}catch(u){return Ze(u)}},a,s)}const h5={throws:u5,isError:uf},Wy={assert:h5,check:{throws:l5,isError(e,t){return Uh(e,t)}},assertWrap:{throws:c5,isError(e,t,r){return lf(e,{noError:"No error.",notInstance:`'${g(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:d5,isError(e,t){if(Uh(e,t))return e}},waitUntil:{throws:m5,isError:T(uf)}},Qn=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,vc={isUuid(e,t){if(!String(e).match(Qn))throw new p(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Qn))throw new p(`'${String(e)}' is a UUID.`,t)}},zy={assert:vc,check:{isUuid(e){return!!String(e).match(Qn)},isNotUuid(e){return!String(e).match(Qn)}},assertWrap:{isUuid(e,t){if(!String(e).match(Qn))throw new p(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Qn))throw new p(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Qn))return e},isNotUuid(e){if(!String(e).match(Qn))return e}},waitUntil:{isUuid:T(vc.isUuid),isNotUuid:T(vc.isNotUuid)}},p5={...Oy.assert,...wy.assert,...vy.assert,...Dy.assert,...$y.assert,...Ty.assert,...Py.assert,...xy.assert,...Iy.assert,...My.assert,...By.assert,...Ry.assert,...Ly.assert,...jy.assert,...Uy.assert,..._y.assert,...Vy.assert,...Sy.assert,...Wy.assert,...zy.assert,...Ny.assert},cf=[wy,vy,Dy,$y,Ty,Py,xy,Iy,My,Oy,By,Ry,Ly,jy,Uy,_y,Vy,Sy,Wy,zy,Ny],g5=Object.assign({},...cf.map(e=>e.check)),F=Object.assign(function(t){return!!t},g5);function y5(e,t,r){return $u(e,t,r,new Set)}function $u(e,t,r,n){if(e=_h(e),t=_h(t),F.isObject(e)&&F.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!$u(Ve(e).sort(),Ve(t).sort(),r,n))return!1;let i=!1;const o=Ve(e).map(s=>{const a=$u(e[s],t[s],r,n);return F.isPromise(a)&&(i=!0),a});return Vh(i,o)}else if(F.isArray(e)&&F.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,a)=>{const u=$u(s,t[a],r,n);return F.isPromise(u)&&(i=!0),u});return Vh(i,o)}else return r(e,t)}function _h(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Vh(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(F.isTrue))}catch(i){n(Ze(i))}}):t.every(F.isTrue)}const b5=Object.assign({},...cf.map(e=>e.assertWrap)),hn=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r);return t},b5);function w5(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const v5={tsType:w5},$5={assert:v5},D5={fail:e=>{throw new p("Failure triggered.",e)}},x5={...$5.assert,...p5,...D5},Lr=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r)},x5),A5=Object.assign({},...cf.map(e=>e.checkWrap)),qy=Object.assign(function(t){if(t)return t},A5);function E5(e,t){return F.hasKey(e,"entryType")&&e.entryType===t}function mo(e,t){return e.controlType===t}var Q;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(Q||(Q={}));const Ky=Symbol("any-type"),C5={[Q.Checkbox]:!1,[Q.Color]:"",[Q.Dropdown]:"",[Q.Hidden]:Ky,[Q.Number]:0,[Q.Text]:""};function k5(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{const o=C5[i.controlType];o!==Ky&&(typeof o!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function F5(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return F.isPromise(i)?new Promise(async(o,s)=>{try{const a=await i;e.set(n,a),o(a)}catch(a){s(Ze(a))}}):(e.set(n,i),i)}}function us(e,t,r){if(t in e)return e[t];{const n=r();return F.isPromise(n)?new Promise(async(i,o)=>{try{const s=await n;e[t]=s,i(s)}catch(s){o(Ze(s))}}):(e[t]=n,n)}}function ml(e){return Ve(e).map(t=>[t,e[t]])}function ra(e){return Object.fromEntries(e)}function Hi(e,t,r){return e.reduce((n,i,o,s)=>{const a=t(i,o,s);return r(a,i,o,s)&&n.push(a),n},[])}function hl(e,t,r={}){try{let n=!1;const i=e.map((o,s,a)=>{const u=t(o,s,a);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(F.isTruthy);return n?new Promise(async(o,s)=>{try{const a=Hi(await Promise.all(i),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},F.isTruthy);o(ra(a))}catch(a){s(Ze(a))}}):ra(i)}catch(n){throw Ze(n)}}function S5(e){return Array.isArray(e)?e:[e]}function N5({min:e,max:t}){const{min:r,max:n}=Yd({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/i)*i,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,f)=>c+d*256**f,0);while(l>=a);return r+l%i}const Wh=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Li(e=16){let t="";for(let r=0;r<e;r++){const n=N5({min:0,max:Wh.length-1});t+=Wh[n]}return t}function Gy(e){if(F.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>$t(t).trim()).join(`
`))}function T5(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):F.hasKey(t,"fallbackValue")?t.fallbackValue:Ze(n)):r}catch(r){return t.handleError?t.handleError(r):F.hasKey(t,"fallbackValue")?t.fallbackValue:Ze(r)}}function P5(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const I5="modulepreload",M5=function(e){return"/vira/book/"+e},zh={},ju=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");i=u(r.map(l=>{if(l=M5(l),l in zh)return;zh[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":I5,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,D)=>{f.addEventListener("load",m),f.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};var ft;(function(e){e.Standard="stdout",e.Error="stderr"})(ft||(ft={}));var ne;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ne||(ne={}));async function O5(){return await cg({async[Xr.Node](){const e=(await ju(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[ne.Bold]:e.bold.open,[ne.Debug]:e.blueBright.open,[ne.Error]:e.red.open,[ne.Faint]:e.gray.open,[ne.Info]:e.cyan.open,[ne.Mutate]:e.magenta.open,[ne.NormalWeight]:"\x1B[22m",[ne.Plain]:"",[ne.Reset]:e.reset.open,[ne.Success]:e.green.open,[ne.Warning]:e.yellow.open}},[Xr.Web](){return Promise.resolve({[ne.Bold]:"font-weight: bold",[ne.Debug]:"color: blue",[ne.Error]:"color: red",[ne.Faint]:"color: grey",[ne.Info]:"color: teal",[ne.Mutate]:"color: magenta",[ne.NormalWeight]:"",[ne.Plain]:"",[ne.Reset]:"",[ne.Success]:"color: green",[ne.Warning]:"color: orange"})}})}const ur=await O5(),B5={[ne.Bold]:{colors:[ur.bold],logType:ft.Standard},[ne.Debug]:{colors:[ur.debug],logType:ft.Standard},[ne.Faint]:{colors:[ur.faint],logType:ft.Standard},[ne.Info]:{colors:[ur.info],logType:ft.Standard},[ne.Mutate]:{colors:[ur.mutate,ur.bold],logType:ft.Standard},[ne.NormalWeight]:{colors:[ur.normalWeight],logType:ft.Standard},[ne.Plain]:{colors:[],logType:ft.Standard},[ne.Reset]:{colors:[ur.reset],logType:ft.Standard},[ne.Success]:{colors:[ur.success,ur.bold],logType:ft.Standard},[ne.Error]:{colors:[ur.error,ur.bold],logType:ft.Error},[ne.Warning]:{colors:[ur.warning],logType:ft.Error}};function rr({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function No({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function R5(e,t){try{let r=!1;const n=ml(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(F.isTruthy);return r?new Promise(async(i,o)=>{try{const s=Hi(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},F.isTruthy);i(ra(s))}catch(s){o(Ze(s))}}):ra(n)}catch(r){throw Ze(r)}}function L5(e,t){return R5(e,(r,n)=>{const i=n,o=t(n,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function Zy(e,...t){const r={...e};return t.forEach(n=>{n&&ml(n).forEach(([i,o])=>{o!=null&&(r[i]=o)})}),r}function j5(e){return e.replace(/,/g,"")}function U5(e){return typeof e=="number"?e:Number(typeof e=="string"?j5(e):e)}function _5(e){const t=V5(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function V5(e){const t=U5(e);if(!isNaN(t))return t}const Hy="px";function na(e){return df({value:e,suffix:Hy})}function W5(e){return _5(Jy({value:e,suffix:Hy}))}function df({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Jy({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function z5(){return await cg({async[Xr.Node](){const{inspect:e}=await ju(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),i.join(`
`),n.omitColors?"":n.colorConfig[ne.Reset].colors.join("")].join(""),css:void 0}}},[Xr.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:Hi(r.colorConfig[t].colors,s=>Jy({value:s,suffix:";"}),F.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?$t(s):g(s)).join(`
`),r.omitColors?"":r.colorConfig[ne.Reset].colors.join("")].join(""),css:n}}}})}const q5=await z5(),K5={colorConfig:B5,omitColors:!1},G5=Yy({[ft.Error](){},[ft.Standard](){}});function Yy(e,t){const r=Zy(K5,t);function n(o){e[r.colorConfig[o.colorKey].logType](q5({...o,options:r}))}const i=L5(ne,o=>(...s)=>n({args:s,colorKey:o}));return{...i,if(o){return o?i:G5}}}const Z5=Jd(Xr.Node)?{[ft.Error]({text:e}){process.stderr.write(e+`
`)},[ft.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[ft.Error]({text:e,css:t}){console.error(rr({value:e,prefix:"%c"}),t)},[ft.Standard]({text:e,css:t}){console.log(rr({value:e,prefix:"%c"}),t)}},H5=Yy(Z5);function J5(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}function Y5(e,{digits:t}){const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function X5({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const i=hy(gy(t,{caseSensitive:r}),"g"),o=[];return e.replace(i,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);o.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),o}function Q5(e,t,{caseSensitive:r}){const n=X5({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),i=gy(t,{caseSensitive:r});return e.split(i).reduce((s,a,u)=>{const l=n[u],c=s.concat(a);if(l){const d=e.slice(l.index,l.index+l.length);return c.concat(d)}else return c},[])}function eD(e,t){return e.split(t)}function qh(e,t){const{min:r,max:n}=Yd(t);if(t.takeOverflow){const i=n-r+1,o=(e-r)%i;return o<0?r+i+o:r+o}else return e>n?r:e<r?n:e}function pr(e,t){let r=!1;const n=Ve(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(r=!0),i[o]=s,i},{});return r?new Promise(async(i,o)=>{try{await Promise.all(Ve(n).map(async s=>{const a=await n[s];n[s]=a})),i(n)}catch(s){o(Ze(s))}}):n}function pl(e,t){const r=ml(e).filter(([n,i])=>t(n,i,e));return ra(r)}function tD(e,t){return pl(e,r=>!t.includes(r))}function rD(e,t){return pl(e,r=>t.includes(r))}function md(e){return Ve(e).map(t=>e[t])}function Xy(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var jn;(function(e){e.Upper="upper",e.Lower="lower"})(jn||(jn={}));const nD={firstLetterCase:jn.Lower};function iD(e,t){if(!e.length)return"";const r=e[0];return(t===jn.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function oD(e){return e.toLowerCase()!==e.toUpperCase()}function Kh(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if(oD(n)){if(t===jn.Upper&&n!==n.toUpperCase()||t===jn.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}function sD(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""}),i=Zy(nD,t);return iD(n,i.firstLetterCase)}function aD(e){return e.split("").reduce((r,n,i,o)=>{const s=i>0&&o[i-1]||"",a=i<o.length-1&&o[i+1]||"",u=Kh(s,jn.Lower,{rejectNoCaseCharacters:!0})||Kh(a,jn.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!u?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function uD(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function lD({value:e,wrapper:t}){return rr({value:df({value:e,suffix:t}),prefix:t})}function sn(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function ff(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class cD{listeners={};universalListeners=new Map;getListenerCount(){return md(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function i(o,s){r.once&&n(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const i=F.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(r)||!1;function s(a,u){n.once&&o(),r(a,u)}return us(this.listeners,i,()=>new Map).set(r,{listener:s,removeListener:o}),o}removeListener(t,r){const n=F.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const o=i.get(r);return o?o.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=md(this.listeners).reduce((n,i)=>{const o=i.size||0;return i.clear(),n+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class mf extends cD{}function hf(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function hd(e,t,r){return hf(globalThis,e,t,r)}function pf(e,t){return ia(e.title),e.parent?[...pf(e.parent),ia(e.parent.title)].concat([]):[]}function ia(e){return Xy(e).toLowerCase().replaceAll(/\s/g,"-")}function dD({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const fD=/[/?#&=]/;function Qy(e){const t=e.match(fD);return e.trim()?ia(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const mD={[Et.ElementExample]:()=>[],[Et.Page]:e=>[Qy(e.title),...k5(e.controls,e.title)].filter(F.isTruthy),[Et.Root]:()=>[]},Uu="_isBookTreeNode",e1=new Map;function hD(e){return e1.get(e)}function pD(e,t){F5(e1,e,()=>t)}function To(e,t){return t1(e)&&e.entry.entryType===t}function t1(e){return!!(F.hasKeys(e,[Uu,"entry"])&&e[Uu])}function gD(){return{[Uu]:!0,entry:{entryType:Et.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function yD({entries:e,debug:t}){const r=hD(e);if(r)return r;const n=gD();e.forEach(s=>gf({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const i=r1(n),o={tree:n,flattenedNodes:i};return pD(e,o),t&&console.info("element-book tree:",n),o}function bD(e,t,r){if(!t.parent)return e;const n=pd(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),gf({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=pd(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${pf(t).join(" > ")}`);return i}function gf({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=mD[t.entryType](t);t.errors.push(...i);const o=bD(e,t,r),s=ia(t.title),a=o.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[Uu]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};o.children[s]=u,E5(t,Et.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>gf({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function pd(e,t){const r=t1(e)?e.fullUrlBreadcrumbs.slice(0,-1):pf(e);return r.length?r.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function r1(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>r1(i));return[e,...r].flat()}function yf(e,t){return bf(e,["",...t],void 0)}function bf(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const o=e.children[i||""],s=o&&bf(o,n,r);return{...e.controls,...s}}function wD(e,t,r){const n={...e};return bf(n,["",...t],r),n}function n1(e,t){const r=t?.controls||(To(e,Et.Page)?pr(e.entry.controls,(i,o)=>o.initValue):{});return{children:pr(e.children,(i,o)=>n1(o,t?.children?.[o.urlBreadcrumb])),controls:r}}function be(e){const t={...e,entryType:Et.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const i={...n,isVertical:t.useVerticalExamples,entryType:Et.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),Qy(n.title)].filter(F.isTruthy)};r.add(n.title),t.elementExamples[ia(i.title)]=i}}),t}var Xt;(function(e){e.Search="search",e.Book="book"})(Xt||(Xt={}));function gd(e){return e[0]===Xt.Book?"":e[1]?decodeURIComponent(e[1]):""}const jo={hash:void 0,paths:[Xt.Book],search:void 0};const Du=globalThis,wf=Du.ShadowRoot&&(Du.ShadyCSS===void 0||Du.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vf=Symbol(),Gh=new WeakMap;let i1=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==vf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(wf&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Gh.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Gh.set(r,t))}return t}toString(){return this.cssText}};const Ce=e=>new i1(typeof e=="string"?e:e+"",void 0,vf),xu=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new i1(r,e,vf)},vD=(e,t)=>{if(wf)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Du.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},Zh=wf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Ce(r)})(e):e;const{is:$D,defineProperty:DD,getOwnPropertyDescriptor:xD,getOwnPropertyNames:AD,getOwnPropertySymbols:ED,getPrototypeOf:CD}=Object,gl=globalThis,Hh=gl.trustedTypes,kD=Hh?Hh.emptyScript:"",FD=gl.reactiveElementPolyfillSupport,qs=(e,t)=>e,_u={toAttribute(e,t){switch(t){case Boolean:e=e?kD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},$f=(e,t)=>!$D(e,t),Jh={attribute:!0,type:String,converter:_u,reflect:!1,useDefault:!1,hasChanged:$f};Symbol.metadata??=Symbol("metadata"),gl.litPropertyMetadata??=new WeakMap;let wo=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Jh){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&DD(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:o}=xD(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Jh}static _$Ei(){if(this.hasOwnProperty(qs("elementProperties")))return;const t=CD(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(qs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qs("properties"))){const r=this.properties,n=[...AD(r),...ED(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(Zh(i))}else t!==void 0&&r.push(Zh(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vD(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const o=(n.converter?.toAttribute!==void 0?n.converter:_u).toAttribute(r,n.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:_u;this._$Em=i;const a=s.fromAttribute(r,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,r,n,i=!1,o){if(t!==void 0){const s=this.constructor;if(i===!1&&(o=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??$f)(o,r)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,o]of n){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};wo.elementStyles=[],wo.shadowRootOptions={mode:"open"},wo[qs("elementProperties")]=new Map,wo[qs("finalized")]=new Map,FD?.({ReactiveElement:wo}),(gl.reactiveElementVersions??=[]).push("2.1.2");const Df=globalThis,Yh=e=>e,Vu=Df.trustedTypes,Xh=Vu?Vu.createPolicy("lit-html",{createHTML:e=>e}):void 0,o1="$lit$",ti=`lit$${Math.random().toFixed(9).slice(2)}$`,s1="?"+ti,SD=`<${s1}>`,Vi=document,oa=()=>Vi.createComment(""),sa=e=>e===null||typeof e!="object"&&typeof e!="function",xf=Array.isArray,ND=e=>xf(e)||typeof e?.[Symbol.iterator]=="function",$c=`[ 	
\f\r]`,Ns=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qh=/-->/g,e0=/>/g,ki=RegExp(`>|${$c}(?:([^\\s"'>=/]+)(${$c}*=${$c}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),t0=/'/g,r0=/"/g,a1=/^(?:script|style|textarea|title)$/i,TD=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),PD=TD(1),gr=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),n0=new WeakMap,Mi=Vi.createTreeWalker(Vi,129);function u1(e,t){if(!xf(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xh!==void 0?Xh.createHTML(t):t}const ID=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=Ns;for(let a=0;a<r;a++){const u=e[a];let l,c,d=-1,f=0;for(;f<u.length&&(s.lastIndex=f,c=s.exec(u),c!==null);)f=s.lastIndex,s===Ns?c[1]==="!--"?s=Qh:c[1]!==void 0?s=e0:c[2]!==void 0?(a1.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=ki):c[3]!==void 0&&(s=ki):s===ki?c[0]===">"?(s=i??Ns,d=-1):c[1]===void 0?d=-2:(d=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?ki:c[3]==='"'?r0:t0):s===r0||s===t0?s=ki:s===Qh||s===e0?s=Ns:(s=ki,i=void 0);const m=s===ki&&e[a+1].startsWith("/>")?" ":"";o+=s===Ns?u+SD:d>=0?(n.push(l),u.slice(0,d)+o1+u.slice(d)+ti+m):u+ti+(d===-2?a:m)}return[u1(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class aa{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=t.length-1,u=this.parts,[l,c]=ID(t,r);if(this.el=aa.createElement(l,n),Mi.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Mi.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(o1)){const f=c[s++],m=i.getAttribute(d).split(ti),D=/([.?@])?(.*)/.exec(f);u.push({type:1,index:o,name:D[2],strings:m,ctor:D[1]==="."?OD:D[1]==="?"?BD:D[1]==="@"?RD:yl}),i.removeAttribute(d)}else d.startsWith(ti)&&(u.push({type:6,index:o}),i.removeAttribute(d));if(a1.test(i.tagName)){const d=i.textContent.split(ti),f=d.length-1;if(f>0){i.textContent=Vu?Vu.emptyScript:"";for(let m=0;m<f;m++)i.append(d[m],oa()),Mi.nextNode(),u.push({type:2,index:++o});i.append(d[f],oa())}}}else if(i.nodeType===8)if(i.data===s1)u.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(ti,d+1))!==-1;)u.push({type:7,index:o}),d+=ti.length-1}o++}}static createElement(t,r){const n=Vi.createElement("template");return n.innerHTML=t,n}}function Uo(e,t,r=e,n){if(t===gr)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const o=sa(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=Uo(e,i._$AS(e,t.values),i,n)),t}class MD{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??Vi).importNode(r,!0);Mi.currentNode=i;let o=Mi.nextNode(),s=0,a=0,u=n[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new ls(o,o.nextSibling,this,t):u.type===1?l=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(l=new LD(o,this,t)),this._$AV.push(l),u=n[++a]}s!==u?.index&&(o=Mi.nextNode(),s++)}return Mi.currentNode=Vi,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class ls{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Uo(this,t,r),sa(t)?t===Y||t==null||t===""?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==gr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ND(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&sa(this._$AH)?this._$AA.nextSibling.data=t:this.T(Vi.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=aa.createElement(u1(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const o=new MD(i,this),s=o.u(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(t){let r=n0.get(t.strings);return r===void 0&&n0.set(t.strings,r=new aa(t)),r}k(t){xf(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new ls(this.O(oa()),this.O(oa()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=Yh(t).nextSibling;Yh(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class yl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,o){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Y}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=Uo(this,t,r,0),s=!sa(t)||t!==this._$AH&&t!==gr,s&&(this._$AH=t);else{const a=t;let u,l;for(t=o[0],u=0;u<o.length-1;u++)l=Uo(this,a[n+u],r,u),l===gr&&(l=this._$AH[u]),s||=!sa(l)||l!==this._$AH[u],l===Y?t=Y:t!==Y&&(t+=(l??"")+o[u+1]),this._$AH[u]=l}s&&!i&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class OD extends yl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class BD extends yl{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class RD extends yl{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){if((t=Uo(this,t,r,0)??Y)===gr)return;const n=this._$AH,i=t===Y&&n!==Y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==Y&&(n===Y||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class LD{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Uo(this,t)}}const jD={I:ls},UD=Df.litHtmlPolyfillSupport;UD?.(aa,ls),(Df.litHtmlVersions??=[]).push("3.3.2");const _D=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const o=r?.renderBefore??null;n._$litPart$=i=new ls(t.insertBefore(oa(),o),o,void 0,r??{})}return i._$AI(e),i};const Af=globalThis;let Ks=class extends wo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_D(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return gr}};Ks._$litElement$=!0,Ks.finalized=!0,Af.litElementHydrateSupport?.({LitElement:Ks});const VD=Af.litElementPolyfillSupport;VD?.({LitElement:Ks});(Af.litElementVersions??=[]).push("4.2.2");function gn(e){if(F.isObject(e))return pr(e,(r,n)=>{if(!F.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(aD(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const o=n,s=r.startsWith("--")?Ce(r):r.startsWith("-")?xu`-${Ce(r)}`:xu`--${Ce(r)}`;return{name:s,value:xu`var(${s}, ${Ce(o)})`,default:String(o)}});throw new TypeError(`Invalid setup input for '${gn.name}' function.`)}function l1({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function WD({onElement:e,forCssVar:t,includeCascade:r}){return(r?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(t.name)).trim()}const ge=gn({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),zD={nav:{hover:{background:ge["element-book-nav-hover-background-color"],foreground:ge["element-book-nav-hover-foreground-color"]},active:{background:ge["element-book-nav-active-background-color"],foreground:ge["element-book-nav-active-foreground-color"]},selected:{background:ge["element-book-nav-selected-background-color"],foreground:ge["element-book-nav-selected-foreground-color"]}},accent:{icon:ge["element-book-accent-icon-color"]},page:{background:ge["element-book-page-background-color"],backgroundFaint1:ge["element-book-page-background-faint-level-1-color"],backgroundFaint2:ge["element-book-page-background-faint-level-2-color"],foreground:ge["element-book-page-foreground-color"],foregroundFaint1:ge["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:ge["element-book-page-foreground-faint-level-2-color"]}};function qD(e,t){c1(e,t,zD)}function yd(e){return F.hasKey(e,"_$cssResult$")}function i0(e){return F.hasKeys(e,["name","value","default"])&&F.isString(e.default)&&yd(e.name)&&yd(e.value)}function c1(e,t,r){Object.entries(t).forEach(([n,i])=>{const o=r[n];if(!o)throw new Error(`no nestedCssVar at key '${n}'`);if(yd(i)){if(!i0(o))throw new Error(`got a CSS result at '${n}' but no CSS var`);l1({forCssVar:o,onElement:e,toValue:String(i)})}else{if(i0(o))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);c1(e,i,o)}})}function Oe(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,i=t[0].map((s,a)=>t.map(u=>u[a])),o=e.map(s=>i.map(a=>{let u=0;if(!Array.isArray(s)){for(let l of a)u+=s*l;return u}for(let l=0;l<s.length;l++)u+=s[l]*(a[l]||0);return u}));return r===1&&(o=o[0]),n===1?o.map(s=>s[0]):o}function Ea(e){return ii(e)==="string"}function ii(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Wu(e,{precision:t,unit:r}){return ai(e)?"none":d1(e,t)+(r??"")}function ai(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function ot(e){return ai(e)?0:e}function d1(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}const KD={deg:1,grad:.9,rad:180/Math.PI,turn:360};function f1(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let o=e.match(t);if(o){let s=[];return o[2].replace(i,(a,u)=>{let l=u.match(n),c=u;if(l){let d=l[0],f=c.slice(0,-d.length);d==="%"?(c=new Number(f/100),c.type="<percentage>"):(c=new Number(f*KD[d]),c.type="<angle>",c.unit=d)}else r.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),s.push(c)}),{name:o[1].toLowerCase(),rawName:o[1],rawArgs:o[2],args:s}}}function m1(e){return e[e.length-1]}function ua(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function h1(e,t,r){return(r-e)/(t-e)}function Ef(e,t,r){return ua(t[0],t[1],h1(e[0],e[1],r))}function p1(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let i=new String(n[1]);return i.range=[+n[2],+n[3]],i}return r}))}function g1(e,t,r){return Math.max(Math.min(r,t),e)}function bl(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function cn(e,t){return bl(Math.abs(e)**t,e)}function Cf(e,t){return t===0?0:e/t}function y1(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}var GD=Object.freeze({__proto__:null,bisectLeft:y1,clamp:g1,copySign:bl,interpolate:ua,interpolateInv:h1,isNone:ai,isString:Ea,last:m1,mapRange:Ef,multiplyMatrices:Oe,parseCoordGrammar:p1,parseFunction:f1,serializeNumber:Wu,skipNone:ot,spow:cn,toPrecision:d1,type:ii,zdiv:Cf});class ZD{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ui=new ZD;var yr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const Wt={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function bd(e){return Array.isArray(e)?e:Wt[e]}function zu(e,t,r,n={}){if(e=bd(e),t=bd(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(ui.run("chromatic-adaptation-start",i),i.M||(i.W1===Wt.D65&&i.W2===Wt.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Wt.D50&&i.W2===Wt.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ui.run("chromatic-adaptation-end",i),i.M)return Oe(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const HD=new Set(["<number>","<percentage>","<angle>"]);function o0(e,t,r,n){return Object.entries(e.coords).map(([o,s],a)=>{let u=t.coordGrammar[a],l=n[a],c=l?.type,d;if(l.none?d=u.find(D=>HD.has(D)):d=u.find(D=>D==c),!d){let D=s.name||o;throw new TypeError(`${c??l.raw} not allowed for ${D} in ${r}()`)}let f=d.range;c==="<percentage>"&&(f||=[0,1]);let m=s.range||s.refRange;return f&&m&&(n[a]=Ef(f,m,n[a])),d})}function b1(e,{meta:t}={}){let r={str:String(e)?.trim()};if(ui.run("parse-start",r),r.color)return r.color;if(r.parsed=f1(r.str),r.parsed){let n=r.parsed.name;if(n==="color"){let i=r.parsed.args.shift(),o=i.startsWith("--")?i.substring(2):`--${i}`,s=[i,o],a=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let c of U.all){let d=c.getFormat("color");if(d&&(s.includes(d.id)||d.ids?.filter(f=>s.includes(f)).length)){const f=Object.keys(c.coords).map((D,v)=>r.parsed.args[v]||0);let m;return d.coordGrammar&&(m=o0(c,d,"color",f)),t&&Object.assign(t,{formatId:"color",types:m}),d.id.startsWith("--")&&!i.startsWith("--")&&yr.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${d.id}) instead of color(${i}).`),i.startsWith("--")&&!d.id.startsWith("--")&&yr.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${d.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:f,alpha:a}}}let u="",l=i in U.registry?i:o;if(l in U.registry){let c=U.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of U.all){let o=i.getFormat(n);if(o&&o.type==="function"){let s=1;(o.lastAlpha||m1(r.parsed.args).alpha)&&(s=r.parsed.args.pop());let a=r.parsed.args,u;return o.coordGrammar&&(u=o0(i,o,n,a)),t&&Object.assign(t,{formatId:o.name,types:u}),{spaceId:i.id,coords:a,alpha:s}}}}else for(let n of U.all)for(let i in n.formats){let o=n.formats[i];if(o.type!=="custom"||o.test&&!o.test(r.str))continue;let s=o.parse(r.str);if(s)return s.alpha??=1,t&&(t.formatId=i),s}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function ee(e){if(Array.isArray(e))return e.map(ee);if(!e)throw new TypeError("Empty color reference");Ea(e)&&(e=b1(e));let t=e.space||e.spaceId;return t instanceof U||(e.space=U.get(t)),e.alpha===void 0&&(e.alpha=1),e}const JD=75e-6;class U{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?U.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=bd(n),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:U.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:YD(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ui.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=JD}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,o)=>{let s=n[o];if(s.type!=="angle"&&s.range){if(Number.isNaN(i))return!0;let[a,u]=s.range;return(a===void 0||i>=a-r)&&(u===void 0||i<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=s0(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=s0(r,this),r):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=ee(t);[t,r]=[a.space,a.coords]}if(t=U.get(t),this.equals(t))return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=this.path,i=t.path,o,s;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)o=n[a],s=a;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=ee(t);[t,r]=[n.space,n.coords]}return t=U.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(U.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof U)return t;if(ii(t)==="string"){let i=U.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return U.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){let n=ii(t),i,o;if(n==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=U.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ii(o),n==="number"||n==="string"&&o>=0){let u=Object.entries(i.coords)[o];if(u)return{space:i,id:u[0],index:o,...u[1]}}i=U.get(i);let s=o.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function YD(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function s0(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=p1(e.coords);let r=Object.entries(t).map(([n,i],o)=>{let s=e.coordGrammar[o][0],a=i.range||i.refRange,u=s.range,l="";return s=="<percentage>"?(u=[0,100],l="%"):s=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(n,i)=>n.map((o,s)=>{let{fromRange:a,toRange:u,suffix:l}=r[s];return a&&u&&(o=Ef(a,u,o)),o=Wu(o,{precision:i,unit:l}),o})}return e}var Ct=new U({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class or extends U{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Ct),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=Oe(t.toXYZ_M,r);return this.white!==this.base.white&&(n=zu(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=zu(this.base.white,this.white,r),Oe(t.fromXYZ_M,r))),t.referred??="display",super(t)}}function Ca(e,t){return e=ee(e),!t||e.space.equals(t)?e.coords.slice():(t=U.get(t),t.from(e))}function dr(e,t){e=ee(e);let{space:r,index:n}=U.resolveCoord(t,e.space);return Ca(e,r)[n]}function kf(e,t,r){return e=ee(e),t=U.get(t),e.coords=t.to(e.space,r),e}kf.returns="color";function Un(e,t,r){if(e=ee(e),arguments.length===2&&ii(arguments[1])==="object"){let n=arguments[1];for(let i in n)Un(e,i,n[i])}else{typeof r=="function"&&(r=r(dr(e,t)));let{space:n,index:i}=U.resolveCoord(t,e.space),o=Ca(e,n);o[i]=r,kf(e,n,o)}return e}Un.returns="color";var Ff=new U({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Ct,fromBase:e=>zu(Ct.white,"D50",e),toBase:e=>zu("D50",Ct.white,e)});const XD=216/24389,a0=24/116,tu=24389/27;let Dc=Wt.D50;var fr=new U({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Dc,base:Ff,fromBase(e){let r=e.map((n,i)=>n/Dc[i]).map(n=>n>XD?Math.cbrt(n):(tu*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>a0?Math.pow(t[0],3):(116*t[0]-16)/tu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/tu,t[2]>a0?Math.pow(t[2],3):(116*t[2]-16)/tu].map((n,i)=>n*Dc[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function yn(e){return(e%360+360)%360}function QD(e,t){if(e==="raw")return t;let[r,n]=t.map(yn),i=n-r;return e==="increasing"?i<0&&(n+=360):e==="decreasing"?i>0&&(r+=360):e==="longer"?-180<i&&i<180&&(i>0?r+=360:n+=360):e==="shorter"&&(i>180?r+=360:i<-180&&(n+=360)),[r,n]}var la=new U({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:fr,fromBase(e){let[t,r,n]=e,i;const o=.02;return Math.abs(r)<o&&Math.abs(n)<o?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),yn(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const u0=25**7,qu=Math.PI,l0=180/qu,ho=qu/180;function c0(e){const t=e*e;return t*t*t*e}function w1(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=ee([e,t]);let[o,s,a]=fr.from(e),u=la.from(fr,[o,s,a])[1],[l,c,d]=fr.from(t),f=la.from(fr,[l,c,d])[1];u<0&&(u=0),f<0&&(f=0);let m=(u+f)/2,D=c0(m),v=.5*(1-Math.sqrt(D/(D+u0))),C=(1+v)*s,k=(1+v)*c,N=Math.sqrt(C**2+a**2),j=Math.sqrt(k**2+d**2),q=C===0&&a===0?0:Math.atan2(a,C),Z=k===0&&d===0?0:Math.atan2(d,k);q<0&&(q+=2*qu),Z<0&&(Z+=2*qu),q*=l0,Z*=l0;let Le=l-o,Pt=j-N,dt=Z-q,Lt=q+Z,Er=Math.abs(dt),Wr;N*j===0?Wr=0:Er<=180?Wr=dt:dt>180?Wr=dt-360:dt<-180?Wr=dt+360:yr.warn("the unthinkable has happened");let ao=2*Math.sqrt(j*N)*Math.sin(Wr*ho/2),Yl=(o+l)/2,Ds=(N+j)/2,Va=c0(Ds),zr;N*j===0?zr=Lt:Er<=180?zr=Lt/2:Lt<360?zr=(Lt+360)/2:zr=(Lt-360)/2;let Wa=(Yl-50)**2,Xl=1+.015*Wa/Math.sqrt(20+Wa),za=1+.045*Ds,Cr=1;Cr-=.17*Math.cos((zr-30)*ho),Cr+=.24*Math.cos(2*zr*ho),Cr+=.32*Math.cos((3*zr+6)*ho),Cr-=.2*Math.cos((4*zr-63)*ho);let rt=1+.015*Ds*Cr,ar=30*Math.exp(-1*((zr-275)/25)**2),uo=2*Math.sqrt(Va/(Va+u0)),Kn=-1*Math.sin(2*ar*ho)*uo,$i=(Le/(r*Xl))**2;return $i+=(Pt/(n*za))**2,$i+=(ao/(i*rt))**2,$i+=Kn*(Pt/(n*za))*(ao/(i*rt)),Math.sqrt($i)}const ex=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],tx=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],rx=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],nx=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var _o=new U({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Ct,fromBase(e){let r=Oe(ex,e).map(n=>Math.cbrt(n));return Oe(rx,r)},toBase(e){let r=Oe(nx,e).map(n=>n**3);return Oe(tx,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function wd(e,t){[e,t]=ee([e,t]);let[r,n,i]=_o.from(e),[o,s,a]=_o.from(t),u=r-o,l=n-s,c=i-a;return Math.sqrt(u**2+l**2+c**2)}const ix=75e-6;function ji(e,t,{epsilon:r=ix}={}){e=ee(e),t||(t=e.space),t=U.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Vo(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function v1(e,t,r="lab"){r=U.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((o,s,a)=>{let u=i[a];return isNaN(s)||isNaN(u)?o:o+(u-s)**2},0))}function ox(e,t){return v1(e,t,"lab")}const sx=Math.PI,d0=sx/180;function ax(e,t,{l:r=2,c:n=1}={}){[e,t]=ee([e,t]);let[i,o,s]=fr.from(e),[,a,u]=la.from(fr,[i,o,s]),[l,c,d]=fr.from(t),f=la.from(fr,[l,c,d])[1];a<0&&(a=0),f<0&&(f=0);let m=i-l,D=a-f,v=o-c,C=s-d,k=v**2+C**2-D**2,N=.511;i>=16&&(N=.040975*i/(1+.01765*i));let j=.0638*a/(1+.0131*a)+.638,q;Number.isNaN(u)&&(u=0),u>=164&&u<=345?q=.56+Math.abs(.2*Math.cos((u+168)*d0)):q=.36+Math.abs(.4*Math.cos((u+35)*d0));let Z=Math.pow(a,4),Le=Math.sqrt(Z/(Z+1900)),Pt=j*(Le*q+1-Le),dt=(m/(r*N))**2;return dt+=(D/(n*j))**2,dt+=k/Pt**2,Math.sqrt(dt)}const f0=203;var Sf=new U({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Ct,fromBase(e){return e.map(t=>Math.max(t*f0,0))},toBase(e){return e.map(t=>Math.max(t/f0,0))}});const ru=1.15,nu=.66,m0=2610/2**14,ux=2**14/2610,h0=3424/2**12,p0=2413/2**7,g0=2392/2**7,lx=1.7*2523/2**5,y0=2**5/(1.7*2523),iu=-.56,xc=16295499532821565e-27,cx=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],dx=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],fx=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],mx=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var $1=new U({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Sf,fromBase(e){let[t,r,n]=e,i=ru*t-(ru-1)*n,o=nu*r-(nu-1)*t,a=Oe(cx,[i,o,n]).map(function(f){let m=h0+p0*(f/1e4)**m0,D=1+g0*(f/1e4)**m0;return(m/D)**lx}),[u,l,c]=Oe(fx,a);return[(1+iu)*u/(1+iu*u)-xc,l,c]},toBase(e){let[t,r,n]=e,i=(t+xc)/(1+iu-iu*(t+xc)),s=Oe(mx,[i,r,n]).map(function(f){let m=h0-f**y0,D=g0*f**y0-p0;return 1e4*(m/D)**ux}),[a,u,l]=Oe(dx,s),c=(a+(ru-1)*l)/ru,d=(u+(nu-1)*c)/nu;return[c,d,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),vd=new U({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:$1,fromBase(e){let[t,r,n]=e,i;const o=2e-4;return Math.abs(r)<o&&Math.abs(n)<o?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),yn(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function hx(e,t){[e,t]=ee([e,t]);let[r,n,i]=vd.from(e),[o,s,a]=vd.from(t),u=r-o,l=n-s;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let c=i-a,d=2*Math.sqrt(n*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+d**2)}const D1=3424/4096,x1=2413/128,A1=2392/128,b0=2610/16384,px=2523/32,gx=16384/2610,w0=32/2523,yx=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],bx=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],wx=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],vx=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var $d=new U({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Sf,fromBase(e){let t=Oe(yx,e);return $x(t)},toBase(e){let t=Dx(e);return Oe(vx,t)}});function $x(e){let t=e.map(function(r){let n=D1+x1*(r/1e4)**b0,i=1+A1*(r/1e4)**b0;return(n/i)**px});return Oe(bx,t)}function Dx(e){return Oe(wx,e).map(function(n){let i=Math.max(n**w0-D1,0),o=x1-A1*n**w0;return 1e4*(i/o)**gx})}function xx(e,t){[e,t]=ee([e,t]);let[r,n,i]=$d.from(e),[o,s,a]=$d.from(t);return 720*Math.sqrt((r-o)**2+.25*(n-s)**2+(i-a)**2)}const Ax=Wt.D65,E1=.42,v0=1/E1,Ac=2*Math.PI,C1=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],Ex=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Cx=[[460,451,288],[460,-891,-261],[460,-220,-6300]],kx={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Si={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Fx=180/Math.PI,$0=Math.PI/180;function k1(e,t){return e.map(n=>{const i=cn(t*Math.abs(n)*.01,E1);return 400*bl(i,n)/(i+27.13)})}function Sx(e,t){const r=100/t*27.13**v0;return e.map(n=>{const i=Math.abs(n);return bl(r*cn(i/(400-i),v0),n)})}function Nx(e){let t=yn(e);t<=Si.h[0]&&(t+=360);const r=y1(Si.h,t)-1,[n,i]=Si.h.slice(r,r+2),[o,s]=Si.e.slice(r,r+2),a=Si.H[r],u=(t-n)/o;return a+100*u/(u+(i-t)/s)}function Tx(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=Si.h.slice(r,r+2),[o,s]=Si.e.slice(r,r+2);return yn((t*(s*n-o*i)-100*n*s)/(t*(s-o)-100*s))}function F1(e,t,r,n,i){const o={};o.discounting=i,o.refWhite=e,o.surround=n;const s=e.map(v=>v*100);o.la=t,o.yb=r;const a=s[1],u=Oe(C1,s);n=kx[o.surround];const l=n[0];o.c=n[1],o.nc=n[2];const d=(1/(5*o.la+1))**4;o.fl=d*o.la+.1*(1-d)*(1-d)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/a,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const f=Math.max(Math.min(l*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=u.map(v=>ua(1,a/v,f)),o.dRgbInv=o.dRgb.map(v=>1/v);const m=u.map((v,C)=>v*o.dRgb[C]),D=k1(m,o.fl);return o.aW=o.nbb*(2*D[0]+D[1]+.05*D[2]),o}const D0=F1(Ax,64/Math.PI*.2,20,"average",!1);function Dd(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=yn(e.h)*$0:r=Tx(e.H)*$0;const n=Math.cos(r),i=Math.sin(r);let o=0;e.J!==void 0?o=cn(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=cn(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*cn(o,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,d=l/t.nbb,f=23*(d+.305)*Cf(a,23*c+a*(11*n+108*i)),m=f*n,D=f*i,v=Sx(Oe(Cx,[d,m,D]).map(C=>C*1/1403),t.fl);return Oe(Ex,v.map((C,k)=>C*t.dRgbInv[k])).map(C=>C/100)}function S1(e,t){const r=e.map(j=>j*100),n=k1(Oe(C1,r).map((j,q)=>j*t.dRgb[q]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,o=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(o,i)%Ac+Ac)%Ac,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*Cf(a*Math.sqrt(i**2+o**2),n[0]+n[1]+1.05*n[2]+.305),l=cn(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),d=cn(c/t.aW,.5*t.c*t.z),f=100*cn(d,2),m=4/t.c*d*(t.aW+4)*t.flRoot,D=l*d,v=D*t.flRoot,C=yn(s*Fx),k=Nx(C),N=50*cn(t.c*l/(t.aW+4),1/2);return{J:f,C:D,h:C,s:N,Q:m,M:v,H:k}}var Px=new U({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ct,fromBase(e){const t=S1(e,D0);return[t.J,t.M,t.h]},toBase(e){return Dd({J:e[0],M:e[1],h:e[2]},D0)}});const Ix=Wt.D65,Mx=216/24389,N1=24389/27;function Ox(e){return 116*(e>Mx?Math.cbrt(e):(N1*e+16)/116)-16}function xd(e){return e>8?Math.pow((e+16)/116,3):e/N1}function Bx(e,t){let[r,n,i]=e,o=[],s=0;if(i===0)return[0,0,0];let a=xd(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let c=0,d=1/0;for(;c<=l;){o=Dd({J:s,C:n,h:r},t);const f=Math.abs(o[1]-a);if(f<d){if(f<=u)return o;d=f}s=s-(o[1]-a)*s/(2*o[1]),c+=1}return Dd({J:s,C:n,h:r},t)}function Rx(e,t){const r=Ox(e[1]);if(r===0)return[0,0,0];const n=S1(e,Nf);return[yn(n.h),n.C,r]}const Nf=F1(Ix,200/Math.PI*xd(50),xd(50)*100,"average",!1);var ca=new U({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Ct,fromBase(e){return Rx(e)},toBase(e){return Bx(e,Nf)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Lx=Math.PI/180,x0=[1,.007,.0228];function A0(e){e[1]<0&&(e=ca.fromBase(ca.toBase(e)));const t=Math.log(Math.max(1+x0[2]*e[1]*Nf.flRoot,1))/x0[2],r=e[0]*Lx,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function jx(e,t){[e,t]=ee([e,t]);let[r,n,i]=A0(ca.from(e)),[o,s,a]=A0(ca.from(t));return Math.sqrt((r-o)**2+(n-s)**2+(i-a)**2)}var Wo={deltaE76:ox,deltaECMC:ax,deltaE2000:w1,deltaEJz:hx,deltaEITP:xx,deltaEOK:wd,deltaEHCT:jx};function Ux(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const E0={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function li(e,{method:t=yr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:o={}}={}){if(e=ee(e),Ea(arguments[1])?r=arguments[1]:r||(r=e.space),r=U.get(r),ji(e,r,{epsilon:0}))return e;let s;if(t==="css")s=_x(e,{space:r});else{if(t!=="clip"&&!ji(e,r)){Object.prototype.hasOwnProperty.call(E0,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:o}=E0[t]);let a=w1;if(n!==""){for(let l in Wo)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=Wo[l];break}}let u=li(Me(e,r),{method:"clip",space:r});if(a(e,u)>i){if(Object.keys(o).length===3){let N=U.resolveCoord(o.channel),j=dr(Me(e,N.space),N.id);if(ai(j)&&(j=0),j>=o.max)return Me({space:"xyz-d65",coords:Wt.D65},e.space);if(j<=o.min)return Me({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=U.resolveCoord(t),c=l.space,d=l.id,f=Me(e,c);f.coords.forEach((N,j)=>{ai(N)&&(f.coords[j]=0)});let D=(l.range||l.refRange)[0],v=Ux(i),C=D,k=dr(f,d);for(;k-C>v;){let N=Vo(f);N=li(N,{space:r,method:"clip"}),a(f,N)-i<v?C=dr(f,d):k=dr(f,d),Un(f,d,(C+k)/2)}s=Me(f,r)}else s=u}else s=Me(e,r);if(t==="clip"||!ji(s,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,d]=a[l];return c!==void 0&&(u=Math.max(c,u)),d!==void 0&&(u=Math.min(u,d)),u})}}return r!==e.space&&(s=Me(s,e.space)),e.coords=s.coords,e}li.returns="color";const C0={WHITE:{space:_o,coords:[1,0,0]},BLACK:{space:_o,coords:[0,0,0]}};function _x(e,{space:t}={}){e=ee(e),t||(t=e.space),t=U.get(t);const i=U.get("oklch");if(t.isUnbounded)return Me(e,t);const o=Me(e,i);let s=o.coords[0];if(s>=1){const D=Me(C0.WHITE,t);return D.alpha=e.alpha,Me(D,t)}if(s<=0){const D=Me(C0.BLACK,t);return D.alpha=e.alpha,Me(D,t)}if(ji(o,t,{epsilon:0}))return Me(o,t);function a(D){const v=Me(D,t),C=Object.values(t.coords);return v.coords=v.coords.map((k,N)=>{if("range"in C[N]){const[j,q]=C[N].range;return g1(j,k,q)}return k}),v}let u=0,l=o.coords[1],c=!0,d=Vo(o),f=a(d),m=wd(f,d);if(m<.02)return f;for(;l-u>1e-4;){const D=(u+l)/2;if(d.coords[1]=D,c&&ji(d,t,{epsilon:0}))u=D;else if(f=a(d),m=wd(f,d),m<.02){if(.02-m<1e-4)break;c=!1,u=D}else l=D}return f}function Me(e,t,{inGamut:r}={}){e=ee(e),t=U.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=li(i,r===!0?void 0:r)),i}Me.returns="color";function Gs(e,{precision:t=yr.precision,format:r="default",inGamut:n=!0,...i}={}){let o;e=ee(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??U.DEFAULT_FORMAT;let a=e.coords.slice();if(n||=r.toGamut,n&&!ji(e)&&(a=li(Vo(e),n===!0?void 0:n).coords),r.type==="custom")if(i.precision=t,r.serialize)o=r.serialize(a,e.alpha,i);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let u=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(f=>Wu(f,{precision:t})));let l=[...a];if(u==="color"){let f=r.id||r.ids?.[0]||e.space.id;l.unshift(f)}let c=e.alpha;t!==null&&(c=Wu(c,{precision:t}));let d=e.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${c}`;o=`${u}(${l.join(r.commas?", ":" ")}${d})`}return o}const Vx=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Wx=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var wl=new or({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Vx,fromXYZ_M:Wx});const ou=1.09929682680944,k0=.018053968510807;var T1=new or({id:"rec2020",name:"REC.2020",base:wl,toBase(e){return e.map(function(t){return t<k0*4.5?t/4.5:Math.pow((t+ou-1)/ou,1/.45)})},fromBase(e){return e.map(function(t){return t>=k0?ou*Math.pow(t,.45)-(ou-1):4.5*t})}});const zx=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],qx=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var P1=new or({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:zx,fromXYZ_M:qx});const Kx=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],gt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var I1=new or({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Kx,fromXYZ_M:gt}),F0={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let S0=Array(3).fill("<percentage> | <number>[0, 255]"),N0=Array(3).fill("<number>[0, 255]");var zo=new or({id:"srgb",name:"sRGB",base:I1,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:S0},rgb_number:{name:"rgb",commas:!0,coords:N0,noAlpha:!0},color:{},rgba:{coords:S0,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:N0},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(o=>Math.round(o*255));let n=r&&e.every(o=>o%17===0);return"#"+e.map(o=>n?(o/17).toString(16):o.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=F0.black,t.alpha=0):t.coords=F0[e],t.coords)return t}}}}),M1=new or({id:"p3",cssId:"display-p3",name:"P3",base:P1,fromBase:zo.fromBase,toBase:zo.toBase});yr.display_space=zo;let Gx;if(typeof CSS<"u"&&CSS.supports)for(let e of[fr,T1,M1]){let t=e.getMinCoords(),n=Gs({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){yr.display_space=e;break}}function Zx(e,{space:t=yr.display_space,...r}={}){let n=Gs(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!yr.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(ai)||ai(e.alpha))&&!(Gx??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=Vo(e),i.coords=i.coords.map(ot),i.alpha=ot(i.alpha),n=Gs(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=Me(i,t),n=new String(Gs(i,r)),n.color=i}return n}function Hx(e,t){return e=ee(e),t=ee(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ci(e){return dr(e,[Ct,"y"])}function O1(e,t){Un(e,[Ct,"y"],t)}function Jx(e){Object.defineProperty(e.prototype,"luminance",{get(){return ci(this)},set(t){O1(this,t)}})}var Yx=Object.freeze({__proto__:null,getLuminance:ci,register:Jx,setLuminance:O1});function Xx(e,t){e=ee(e),t=ee(t);let r=Math.max(ci(e),0),n=Math.max(ci(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Qx=.56,eA=.57,tA=.62,rA=.65,T0=.022,nA=1.414,iA=.1,oA=5e-4,sA=1.14,P0=.027,aA=1.14;function I0(e){return e>=T0?e:e+(T0-e)**nA}function po(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function uA(e,t){t=ee(t),e=ee(e);let r,n,i,o,s,a;t=Me(t,"srgb"),[o,s,a]=t.coords;let u=po(o)*.2126729+po(s)*.7151522+po(a)*.072175;e=Me(e,"srgb"),[o,s,a]=e.coords;let l=po(o)*.2126729+po(s)*.7151522+po(a)*.072175,c=I0(u),d=I0(l),f=d>c;return Math.abs(d-c)<oA?n=0:f?(r=d**Qx-c**eA,n=r*sA):(r=d**rA-c**tA,n=r*aA),Math.abs(n)<iA?i=0:n>0?i=n-P0:i=n+P0,i*100}function lA(e,t){e=ee(e),t=ee(t);let r=Math.max(ci(e),0),n=Math.max(ci(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const cA=5e4;function dA(e,t){e=ee(e),t=ee(t);let r=Math.max(ci(e),0),n=Math.max(ci(t),0);return n>r&&([r,n]=[n,r]),n===0?cA:(r-n)/n}function fA(e,t){e=ee(e),t=ee(t);let r=dr(e,[fr,"l"]),n=dr(t,[fr,"l"]);return Math.abs(r-n)}const mA=216/24389,M0=24/116,su=24389/27;let Ec=Wt.D65;var Ad=new U({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ec,base:Ct,fromBase(e){let r=e.map((n,i)=>n/Ec[i]).map(n=>n>mA?Math.cbrt(n):(su*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>M0?Math.pow(t[0],3):(116*t[0]-16)/su,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/su,t[2]>M0?Math.pow(t[2],3):(116*t[2]-16)/su].map((n,i)=>n*Ec[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Cc=Math.pow(5,.5)*.5+.5;function hA(e,t){e=ee(e),t=ee(t);let r=dr(e,[Ad,"l"]),n=dr(t,[Ad,"l"]),i=Math.abs(Math.pow(r,Cc)-Math.pow(n,Cc)),o=Math.pow(i,1/Cc)*Math.SQRT2-40;return o<7.5?0:o}var Au=Object.freeze({__proto__:null,contrastAPCA:uA,contrastDeltaPhi:hA,contrastLstar:fA,contrastMichelson:lA,contrastWCAG21:Xx,contrastWeber:dA});function pA(e,t,r={}){Ea(r)&&(r={algorithm:r});let{algorithm:n,...i}=r;if(!n){let o=Object.keys(Au).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=ee(e),t=ee(t);for(let o in Au)if("contrast"+n.toLowerCase()===o.toLowerCase())return Au[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function vl(e){let[t,r,n]=Ca(e,Ct),i=t+15*r+3*n;return[4*t/i,9*r/i]}function B1(e){let[t,r,n]=Ca(e,Ct),i=t+r+n;return[t/i,r/i]}function gA(e){Object.defineProperty(e.prototype,"uv",{get(){return vl(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return B1(this)}})}var yA=Object.freeze({__proto__:null,register:gA,uv:vl,xy:B1});function js(e,t,r={}){Ea(r)&&(r={method:r});let{method:n=yr.deltaE,...i}=r;for(let o in Wo)if("deltae"+n.toLowerCase()===o.toLowerCase())return Wo[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function bA(e,t=.25){let n=[U.get("oklch","lch"),"l"];return Un(e,n,i=>i*(1+t))}function wA(e,t=.25){let n=[U.get("oklch","lch"),"l"];return Un(e,n,i=>i*(1-t))}var vA=Object.freeze({__proto__:null,darken:wA,lighten:bA});function R1(e,t,r=.5,n={}){return[e,t]=[ee(e),ee(t)],ii(r)==="object"&&([r,n]=[.5,r]),ka(e,t,n)(r)}function L1(e,t,r={}){let n;Tf(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[ee(e),ee(t)],n=ka(e,t,u));let l=js(e,t),c=i>0?Math.max(s,Math.ceil(l/i)+1):s,d=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)d=[{p:.5,color:n(.5)}];else{let f=1/(c-1);d=Array.from({length:c},(m,D)=>{let v=D*f;return{p:v,color:n(v)}})}if(i>0){let f=d.reduce((m,D,v)=>{if(v===0)return 0;let C=js(D.color,d[v-1].color,o);return Math.max(m,C)},0);for(;f>i;){f=0;for(let m=1;m<d.length&&d.length<a;m++){let D=d[m-1],v=d[m],C=(v.p+D.p)/2,k=n(C);f=Math.max(f,js(k,D.color),js(k,v.color)),d.splice(m,0,{p:C,color:n(C)}),m++}}}return d=d.map(f=>f.color),d}function ka(e,t,r={}){if(Tf(e)){let[u,l]=[e,t];return ka(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:i,progression:o,premultiplied:s}=r;e=ee(e),t=ee(t),e=Vo(e),t=Vo(t);let a={colors:[e,t],options:r};if(n?n=U.get(n):n=U.registry[yr.interpolationSpace]||e.space,i=i?U.get(i):n,e=Me(e,n),t=Me(t,n),e=li(e),t=li(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,d]=[dr(e,l),dr(t,l)];isNaN(c)&&!isNaN(d)?c=d:isNaN(d)&&!isNaN(c)&&(d=c),[c,d]=QD(u,[c,d]),Un(e,l,c),Un(t,l,d)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=o?o(u):u;let l=e.coords.map((f,m)=>{let D=t.coords[m];return ua(f,D,u)}),c=ua(e.alpha,t.alpha,u),d={space:n,coords:l,alpha:c};return s&&(d.coords=d.coords.map(f=>f/c)),i!==n&&(d=Me(d,i)),d},{rangeArgs:a})}function Tf(e){return ii(e)==="function"&&!!e.rangeArgs}yr.interpolationSpace="lab";function $A(e){e.defineFunction("mix",R1,{returns:"color"}),e.defineFunction("range",ka,{returns:"function<color>"}),e.defineFunction("steps",L1,{returns:"array<color>"})}var DA=Object.freeze({__proto__:null,isRange:Tf,mix:R1,range:ka,register:$A,steps:L1}),j1=new U({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:zo,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,u]=[NaN,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-n)/l+2;break;case o:s=(n-i)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),U1=new U({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:j1,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n+r*Math.min(n,1-n);return[t,i===0?0:200*(1-n/i),100*i]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n*(1-r/2);return[t,i===0||i===1?0:(n-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),xA=new U({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:U1,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[t,0,a*100]}let o=1-n,s=o===0?0:1-r/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const AA=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],EA=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var _1=new or({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:AA,fromXYZ_M:EA}),CA=new or({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:_1,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const kA=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],FA=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var V1=new or({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Ff,toXYZ_M:kA,fromXYZ_M:FA});const SA=1/512,NA=16/512;var TA=new or({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:V1,toBase(e){return e.map(t=>t<NA?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=SA?t**(1/1.8):16*t)}}),PA=new U({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:_o,fromBase(e){let[t,r,n]=e,i;const o=2e-4;return Math.abs(r)<o&&Math.abs(n)<o?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),yn(i)]},toBase(e){let[t,r,n]=e,i,o;return isNaN(n)?(i=0,o=0):(i=r*Math.cos(n*Math.PI/180),o=r*Math.sin(n*Math.PI/180)),[t,i,o]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let W1=Wt.D65;const IA=216/24389,O0=24389/27,[B0,R0]=vl({space:Ct,coords:W1});var z1=new U({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:W1,base:Ct,fromBase(e){let t=[ot(e[0]),ot(e[1]),ot(e[2])],r=t[1],[n,i]=vl({space:Ct,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let o=r<=IA?O0*r:116*Math.cbrt(r)-16;return[o,13*o*(n-B0),13*o*(i-R0)]},toBase(e){let[t,r,n]=e;if(t===0||ai(t))return[0,0,0];r=ot(r),n=ot(n);let i=r/(13*t)+B0,o=n/(13*t)+R0,s=t<=8?t/O0:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Pf=new U({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:z1,fromBase(e){let[t,r,n]=e,i;const o=.02;return Math.abs(r)<o&&Math.abs(n)<o?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),yn(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const MA=216/24389,OA=24389/27,L0=gt[0][0],j0=gt[0][1],kc=gt[0][2],U0=gt[1][0],_0=gt[1][1],Fc=gt[1][2],V0=gt[2][0],W0=gt[2][1],Sc=gt[2][2];function go(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function Ku(e){const t=Math.pow(e+16,3)/1560896,r=t>MA?t:e/OA,n=r*(284517*L0-94839*kc),i=r*(838422*kc+769860*j0+731718*L0),o=r*(632260*kc-126452*j0),s=r*(284517*U0-94839*Fc),a=r*(838422*Fc+769860*_0+731718*U0),u=r*(632260*Fc-126452*_0),l=r*(284517*V0-94839*Sc),c=r*(838422*Sc+769860*W0+731718*V0),d=r*(632260*Sc-126452*W0);return{r0s:n/o,r0i:i*e/o,r1s:n/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/d,b0i:c*e/d,b1s:l/(d+126452),b1i:(c-769860)*e/(d+126452)}}function z0(e,t){const r=t/360*Math.PI*2,n=go(e.r0s,e.r0i,r),i=go(e.r1s,e.r1i,r),o=go(e.g0s,e.g0i,r),s=go(e.g1s,e.g1i,r),a=go(e.b0s,e.b0i,r),u=go(e.b1s,e.b1i,r);return Math.min(n,i,o,s,a,u)}var BA=new U({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Pf,gamutSpace:zo,fromBase(e){let[t,r,n]=[ot(e[0]),ot(e[1]),ot(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=Ku(t),s=z0(o,n);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[ot(e[0]),ot(e[1]),ot(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=Ku(n);i=z0(o,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});gt[0][0];gt[0][1];gt[0][2];gt[1][0];gt[1][1];gt[1][2];gt[2][0];gt[2][1];gt[2][2];function yo(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function q0(e){let t=yo(e.r0s,e.r0i),r=yo(e.r1s,e.r1i),n=yo(e.g0s,e.g0i),i=yo(e.g1s,e.g1i),o=yo(e.b0s,e.b0i),s=yo(e.b1s,e.b1i);return Math.min(t,r,n,i,o,s)}var RA=new U({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Pf,gamutSpace:"self",fromBase(e){let[t,r,n]=[ot(e[0]),ot(e[1]),ot(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=Ku(t),s=q0(o);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[ot(e[0]),ot(e[1]),ot(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=Ku(n);i=q0(o)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const K0=203,G0=2610/2**14,LA=2**14/2610,jA=2523/2**5,Z0=2**5/2523,H0=3424/2**12,J0=2413/2**7,Y0=2392/2**7;var UA=new or({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:wl,toBase(e){return e.map(function(t){return(Math.max(t**Z0-H0,0)/(J0-Y0*t**Z0))**LA*1e4/K0})},fromBase(e){return e.map(function(t){let r=Math.max(t*K0/1e4,0),n=H0+J0*r**G0,i=1+Y0*r**G0;return(n/i)**jA})}});const X0=.17883277,Q0=.28466892,ep=.55991073,Nc=3.7743;var _A=new or({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:wl,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Nc:(Math.exp((t-ep)/X0)+Q0)/12*Nc})},fromBase(e){return e.map(function(t){return t/=Nc,t<=1/12?Math.sqrt(3*t):X0*Math.log(12*t-Q0)+ep})}});const q1={};ui.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=K1(e.W1,e.W2,e.options.method))});ui.add("chromatic-adaptation-end",e=>{e.M||(e.M=K1(e.W1,e.W2,e.options.method))});function $l({id:e,toCone_M:t,fromCone_M:r}){q1[e]=arguments[0]}function K1(e,t,r="Bradford"){let n=q1[r],[i,o,s]=Oe(n.toCone_M,e),[a,u,l]=Oe(n.toCone_M,t),c=[[a/i,0,0],[0,u/o,0],[0,0,l/s]],d=Oe(c,n.toCone_M);return Oe(n.fromCone_M,d)}$l({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});$l({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});$l({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});$l({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Wt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Wt.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const VA=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],WA=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var G1=new or({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Wt.ACES,toXYZ_M:VA,fromXYZ_M:WA});const au=2**-16,Tc=-.35828683,uu=(Math.log2(65504)+9.72)/17.52;var zA=new or({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Tc,uu],name:"Red"},g:{range:[Tc,uu],name:"Green"},b:{range:[Tc,uu],name:"Blue"}},referred:"scene",base:G1,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-au)*2:r<uu?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(au)+9.72)/17.52:t<au?(Math.log2(au+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),tp=Object.freeze({__proto__:null,A98RGB:CA,A98RGB_Linear:_1,ACEScc:zA,ACEScg:G1,CAM16_JMh:Px,HCT:ca,HPLuv:RA,HSL:j1,HSLuv:BA,HSV:U1,HWB:xA,ICTCP:$d,JzCzHz:vd,Jzazbz:$1,LCH:la,LCHuv:Pf,Lab:fr,Lab_D65:Ad,Luv:z1,OKLCH:PA,OKLab:_o,P3:M1,P3_Linear:P1,ProPhoto:TA,ProPhoto_Linear:V1,REC_2020:T1,REC_2020_Linear:wl,REC_2100_HLG:_A,REC_2100_PQ:UA,XYZ_ABS_D65:Sf,XYZ_D50:Ff,XYZ_D65:Ct,sRGB:zo,sRGB_Linear:I1});let ke=class Ht{constructor(...t){let r;t.length===1&&(r=ee(t[0]));let n,i,o;r?(n=r.space||r.spaceId,i=r.coords,o=r.alpha):[n,i,o]=t,Object.defineProperty(this,"space",{value:U.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=o>1||o===void 0?1:o<0?0:o;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new Ht(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Zx(this,...t);return r.color=new Ht(r.color),r}static get(t,...r){return t instanceof Ht?t:new Ht(t,...r)}static defineFunction(t,r,n=r){let{instance:i=!0,returns:o}=n,s=function(...a){let u=r(...a);if(o==="color")u=Ht.get(u);else if(o==="function<color>"){let l=u;u=function(...c){let d=l(...c);return Ht.get(d)},Object.assign(u,l)}else o==="array<color>"&&(u=u.map(l=>Ht.get(l)));return u};t in Ht||(Ht[t]=s),i&&(Ht.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)Ht.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Ht);else for(let r in t)Ht.defineFunction(r,t[r])}};ke.defineFunctions({get:dr,getAll:Ca,set:Un,setAll:kf,to:Me,equals:Hx,inGamut:ji,toGamut:li,distance:v1,toString:Gs});Object.assign(ke,{util:GD,hooks:ui,WHITES:Wt,Space:U,spaces:U.registry,parse:b1,defaults:yr});for(let e of Object.keys(tp))U.register(tp[e]);for(let e in U.registry)Ed(e,U.registry[e]);ui.add("colorspace-init-end",e=>{Ed(e.id,e),e.aliases?.forEach(t=>{Ed(t,e)})});function Ed(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(ke.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(i,o)=>{try{return U.resolveCoord([t,o]),!0}catch{}return Reflect.has(i,o)},get:(i,o,s)=>{if(o&&typeof o!="symbol"&&!(o in i)){let{index:a}=U.resolveCoord([t,o]);if(a>=0)return i[a]}return Reflect.get(i,o,s)},set:(i,o,s,a)=>{if(o&&typeof o!="symbol"&&!(o in i)||o>=0){let{index:u}=U.resolveCoord([t,o]);if(u>=0)return i[u]=s,this.setAll(e,i),!0}return Reflect.set(i,o,s,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}ke.extend(Wo);ke.extend({deltaE:js});Object.assign(ke,{deltaEMethods:Wo});ke.extend(vA);ke.extend({contrast:pA});ke.extend(yA);ke.extend(Yx);ke.extend(DA);ke.extend(Au);const Z1=Symbol("no update");function rp(e){return e!==Z1}class Pc extends sn()("observable-value-update"){}class qA extends sn()("observable-value-resolve"){}class KA extends sn()("observable-value-error"){}class GA extends ff("observable-destroy"){}class ZA extends ff("observable-callback-call"){}class HA extends sn()("observable-params-update"){}class H1{listenTarget=new mf;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===Z1)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const i=this.value;return this.value=r,this.listenTarget.dispatch(new Pc({detail:[r,i]})),!0}return!1}listen(t,r){const n=i=>r(...i.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(Pc,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(Pc,r)}destroy(){this.listenTarget.dispatch(new GA),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function If(e,t){return y5(e,t,(r,n)=>F.isFunction(r)&&F.isFunction(n)?!0:F.strictEquals(r,n))}var Zs;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Zs||(Zs={}));class JA extends H1{equalityCheck;waitingForValueDeferredPromise=new Iu;lastSetPromise;lastSetId=Li();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||If,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=Li();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Iu,super.setValue(this.waitingForValueDeferredPromise.promise,F.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=Ze(n);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return rp(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,F.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Li(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new qA({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,F.strictEquals),this.dispatch(new KA({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):rp(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(Ze(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?Zs.Rejected:this.value instanceof Promise?Zs.Waiting:Zs.Resolved}}class $o extends JA{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==$o.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||If,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:$o.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===$o.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(Ze(t))}finally{this.dispatch(new ZA)}}updateLastParams(t){try{return this.internalParams===$o.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new HA({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(Ze(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return F.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function YA(e){return ut(e)&&!sr(e)&&!Sa(e)&&Symbol.asyncIterator in e}function sr(e){return Array.isArray(e)}function J1(e){return typeof e=="bigint"}function Fa(e){return typeof e=="boolean"}function Mf(e){return e instanceof globalThis.Date}function XA(e){return typeof e=="function"}function QA(e){return ut(e)&&!sr(e)&&!Sa(e)&&Symbol.iterator in e}function eE(e){return e===null}function pn(e){return typeof e=="number"}function ut(e){return typeof e=="object"&&e!==null}function Y1(e){return e instanceof globalThis.RegExp}function tt(e){return typeof e=="string"}function tE(e){return typeof e=="symbol"}function Sa(e){return e instanceof globalThis.Uint8Array}function st(e){return e===void 0}function rE(e){return e.map(t=>Gu(t))}function nE(e){return new Date(e.getTime())}function iE(e){return new Uint8Array(e)}function oE(e){return new RegExp(e.source,e.flags)}function sE(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=Gu(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=Gu(e[r]);return t}function Gu(e){return sr(e)?rE(e):Mf(e)?nE(e):Sa(e)?iE(e):Y1(e)?oE(e):ut(e)?sE(e):e}function br(e){return Gu(e)}function Of(e,t){return br(t===void 0?e:{...t,...e})}function X1(e){return bn(e)&&globalThis.Symbol.asyncIterator in e}function Q1(e){return bn(e)&&globalThis.Symbol.iterator in e}function eb(e){return e instanceof globalThis.Promise}function Bf(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function Rf(e){return e instanceof globalThis.Uint8Array}function tb(e,t){return t in e}function bn(e){return e!==null&&typeof e=="object"}function wr(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function mi(e){return e===void 0}function Dl(e){return e===null}function xl(e){return typeof e=="boolean"}function re(e){return typeof e=="number"}function rb(e){return globalThis.Number.isInteger(e)}function Sn(e){return typeof e=="bigint"}function hr(e){return typeof e=="string"}function nb(e){return typeof e=="function"}function Al(e){return typeof e=="symbol"}function ib(e){return Sn(e)||xl(e)||Dl(e)||re(e)||hr(e)||Al(e)||mi(e)}var Qe;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=bn(s);return e.AllowArrayObject?a:a&&!wr(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function i(s){return e.AllowNaN?re(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const a=mi(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=o})(Qe||(Qe={}));function aE(e){return globalThis.Object.freeze(e).map(t=>Zu(t))}function uE(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=Zu(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=Zu(e[r]);return globalThis.Object.freeze(t)}function Zu(e){return sr(e)?aE(e):Mf(e)?e:Sa(e)?e:Y1(e)?e:ut(e)?uE(e):e}function I(e,t){const r=t!==void 0?{...t,...e}:e;switch(Qe.InstanceMode){case"freeze":return Zu(r);case"clone":return br(r);default:return r}}class St extends Error{constructor(t){super(t)}}const Qt=Symbol.for("TypeBox.Transform"),Na=Symbol.for("TypeBox.Readonly"),Vn=Symbol.for("TypeBox.Optional"),El=Symbol.for("TypeBox.Hint"),P=Symbol.for("TypeBox.Kind");function Lf(e){return ut(e)&&e[Na]==="Readonly"}function hi(e){return ut(e)&&e[Vn]==="Optional"}function ob(e){return ce(e,"Any")}function sb(e){return ce(e,"Argument")}function cs(e){return ce(e,"Array")}function Cl(e){return ce(e,"AsyncIterator")}function kl(e){return ce(e,"BigInt")}function Ta(e){return ce(e,"Boolean")}function ds(e){return ce(e,"Computed")}function fs(e){return ce(e,"Constructor")}function lE(e){return ce(e,"Date")}function ms(e){return ce(e,"Function")}function hs(e){return ce(e,"Integer")}function Ur(e){return ce(e,"Intersect")}function Fl(e){return ce(e,"Iterator")}function ce(e,t){return ut(e)&&P in e&&e[P]===t}function ab(e){return Fa(e)||pn(e)||tt(e)}function Ji(e){return ce(e,"Literal")}function Yi(e){return ce(e,"MappedKey")}function xr(e){return ce(e,"MappedResult")}function Pa(e){return ce(e,"Never")}function cE(e){return ce(e,"Not")}function jf(e){return ce(e,"Null")}function ps(e){return ce(e,"Number")}function an(e){return ce(e,"Object")}function Sl(e){return ce(e,"Promise")}function Nl(e){return ce(e,"Record")}function nr(e){return ce(e,"Ref")}function ub(e){return ce(e,"RegExp")}function Ia(e){return ce(e,"String")}function Uf(e){return ce(e,"Symbol")}function Xi(e){return ce(e,"TemplateLiteral")}function dE(e){return ce(e,"This")}function Ne(e){return ut(e)&&Qt in e}function Qi(e){return ce(e,"Tuple")}function Ma(e){return ce(e,"Undefined")}function xt(e){return ce(e,"Union")}function fE(e){return ce(e,"Uint8Array")}function mE(e){return ce(e,"Unknown")}function hE(e){return ce(e,"Unsafe")}function pE(e){return ce(e,"Void")}function gE(e){return ut(e)&&P in e&&tt(e[P])}function zt(e){return ob(e)||sb(e)||cs(e)||Ta(e)||kl(e)||Cl(e)||ds(e)||fs(e)||lE(e)||ms(e)||hs(e)||Ur(e)||Fl(e)||Ji(e)||Yi(e)||xr(e)||Pa(e)||cE(e)||jf(e)||ps(e)||an(e)||Sl(e)||Nl(e)||nr(e)||ub(e)||Ia(e)||Uf(e)||Xi(e)||dE(e)||Qi(e)||Ma(e)||xt(e)||fE(e)||mE(e)||hE(e)||pE(e)||gE(e)}const yE=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function lb(e){try{return new RegExp(e),!0}catch{return!1}}function _f(e){if(!tt(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function cb(e){return Vf(e)||We(e)}function Ts(e){return st(e)||J1(e)}function Ee(e){return st(e)||pn(e)}function Vf(e){return st(e)||Fa(e)}function Ae(e){return st(e)||tt(e)}function bE(e){return st(e)||tt(e)&&_f(e)&&lb(e)}function wE(e){return st(e)||tt(e)&&_f(e)}function db(e){return st(e)||We(e)}function Hu(e){return ut(e)&&e[Vn]==="Optional"}function en(e){return de(e,"Any")&&Ae(e.$id)}function vE(e){return de(e,"Argument")&&pn(e.index)}function eo(e){return de(e,"Array")&&e.type==="array"&&Ae(e.$id)&&We(e.items)&&Ee(e.minItems)&&Ee(e.maxItems)&&Vf(e.uniqueItems)&&db(e.contains)&&Ee(e.minContains)&&Ee(e.maxContains)}function Wf(e){return de(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Ae(e.$id)&&We(e.items)}function Tl(e){return de(e,"BigInt")&&e.type==="bigint"&&Ae(e.$id)&&Ts(e.exclusiveMaximum)&&Ts(e.exclusiveMinimum)&&Ts(e.maximum)&&Ts(e.minimum)&&Ts(e.multipleOf)}function to(e){return de(e,"Boolean")&&e.type==="boolean"&&Ae(e.$id)}function $E(e){return de(e,"Computed")&&tt(e.target)&&sr(e.parameters)&&e.parameters.every(t=>We(t))}function Pl(e){return de(e,"Constructor")&&e.type==="Constructor"&&Ae(e.$id)&&sr(e.parameters)&&e.parameters.every(t=>We(t))&&We(e.returns)}function Il(e){return de(e,"Date")&&e.type==="Date"&&Ae(e.$id)&&Ee(e.exclusiveMaximumTimestamp)&&Ee(e.exclusiveMinimumTimestamp)&&Ee(e.maximumTimestamp)&&Ee(e.minimumTimestamp)&&Ee(e.multipleOfTimestamp)}function Ml(e){return de(e,"Function")&&e.type==="Function"&&Ae(e.$id)&&sr(e.parameters)&&e.parameters.every(t=>We(t))&&We(e.returns)}function Wn(e){return de(e,"Integer")&&e.type==="integer"&&Ae(e.$id)&&Ee(e.exclusiveMaximum)&&Ee(e.exclusiveMinimum)&&Ee(e.maximum)&&Ee(e.minimum)&&Ee(e.multipleOf)}function fb(e){return ut(e)&&Object.entries(e).every(([t,r])=>_f(t)&&We(r))}function ro(e){return de(e,"Intersect")&&!(tt(e.type)&&e.type!=="object")&&sr(e.allOf)&&e.allOf.every(t=>We(t)&&!kE(t))&&Ae(e.type)&&(Vf(e.unevaluatedProperties)||db(e.unevaluatedProperties))&&Ae(e.$id)}function zf(e){return de(e,"Iterator")&&e.type==="Iterator"&&Ae(e.$id)&&We(e.items)}function de(e,t){return ut(e)&&P in e&&e[P]===t}function mb(e){return pi(e)&&tt(e.const)}function hb(e){return pi(e)&&pn(e.const)}function pb(e){return pi(e)&&Fa(e.const)}function pi(e){return de(e,"Literal")&&Ae(e.$id)&&DE(e.const)}function DE(e){return Fa(e)||pn(e)||tt(e)}function xE(e){return de(e,"MappedKey")&&sr(e.keys)&&e.keys.every(t=>pn(t)||tt(t))}function AE(e){return de(e,"MappedResult")&&fb(e.properties)}function gi(e){return de(e,"Never")&&ut(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function qo(e){return de(e,"Not")&&We(e.not)}function qf(e){return de(e,"Null")&&e.type==="null"&&Ae(e.$id)}function er(e){return de(e,"Number")&&e.type==="number"&&Ae(e.$id)&&Ee(e.exclusiveMaximum)&&Ee(e.exclusiveMinimum)&&Ee(e.maximum)&&Ee(e.minimum)&&Ee(e.multipleOf)}function ze(e){return de(e,"Object")&&e.type==="object"&&Ae(e.$id)&&fb(e.properties)&&cb(e.additionalProperties)&&Ee(e.minProperties)&&Ee(e.maxProperties)}function Kf(e){return de(e,"Promise")&&e.type==="Promise"&&Ae(e.$id)&&We(e.item)}function Ft(e){return de(e,"Record")&&e.type==="object"&&Ae(e.$id)&&cb(e.additionalProperties)&&ut(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&lb(r[0])&&ut(t.patternProperties)&&We(t.patternProperties[r[0]])})(e)}function EE(e){return de(e,"Ref")&&Ae(e.$id)&&tt(e.$ref)}function da(e){return de(e,"RegExp")&&Ae(e.$id)&&tt(e.source)&&tt(e.flags)&&Ee(e.maxLength)&&Ee(e.minLength)}function tn(e){return de(e,"String")&&e.type==="string"&&Ae(e.$id)&&Ee(e.minLength)&&Ee(e.maxLength)&&bE(e.pattern)&&wE(e.format)}function fa(e){return de(e,"Symbol")&&e.type==="symbol"&&Ae(e.$id)}function ma(e){return de(e,"TemplateLiteral")&&e.type==="string"&&tt(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function CE(e){return de(e,"This")&&Ae(e.$id)&&tt(e.$ref)}function kE(e){return ut(e)&&Qt in e}function Ol(e){return de(e,"Tuple")&&e.type==="array"&&Ae(e.$id)&&pn(e.minItems)&&pn(e.maxItems)&&e.minItems===e.maxItems&&(st(e.items)&&st(e.additionalItems)&&e.minItems===0||sr(e.items)&&e.items.every(t=>We(t)))}function Wi(e){return de(e,"Undefined")&&e.type==="undefined"&&Ae(e.$id)}function _n(e){return de(e,"Union")&&Ae(e.$id)&&ut(e)&&sr(e.anyOf)&&e.anyOf.every(t=>We(t))}function Oa(e){return de(e,"Uint8Array")&&e.type==="Uint8Array"&&Ae(e.$id)&&Ee(e.minByteLength)&&Ee(e.maxByteLength)}function rn(e){return de(e,"Unknown")&&Ae(e.$id)}function FE(e){return de(e,"Unsafe")}function Bl(e){return de(e,"Void")&&e.type==="void"&&Ae(e.$id)}function SE(e){return ut(e)&&P in e&&tt(e[P])&&!yE.includes(e[P])}function We(e){return ut(e)&&(en(e)||vE(e)||eo(e)||to(e)||Tl(e)||Wf(e)||$E(e)||Pl(e)||Il(e)||Ml(e)||Wn(e)||ro(e)||zf(e)||pi(e)||xE(e)||AE(e)||gi(e)||qo(e)||qf(e)||er(e)||ze(e)||Kf(e)||Ft(e)||EE(e)||da(e)||tn(e)||fa(e)||ma(e)||CE(e)||Ol(e)||Wi(e)||_n(e)||Oa(e)||rn(e)||FE(e)||Bl(e)||SE(e))}const NE="(true|false)",Eu="(0|[1-9][0-9]*)",gb="(.*)",TE="(?!.*)",Ko=`^${Eu}$`,Go=`^${gb}$`,PE=`^${TE}$`,yb=new Map;function Gf(e){return yb.has(e)}function Zf(e){return yb.get(e)}const Hf=new Map;function di(e){return Hf.has(e)}function Jf(e,t){Hf.set(e,t)}function Yf(e){return Hf.get(e)}function IE(e,t){return e.includes(t)}function ME(e){return[...new Set(e)]}function OE(e,t){return e.filter(r=>t.includes(r))}function BE(e,t){return e.reduce((r,n)=>OE(r,n),t)}function RE(e){return e.length===1?e[0]:e.length>1?BE(e.slice(1),e[0]):[]}function LE(e){const t=[];for(const r of e)t.push(...r);return t}function ha(e){return I({[P]:"Any"},e)}function Xf(e,t){return I({[P]:"Array",type:"array",items:e},t)}function jE(e){return I({[P]:"Argument",index:e})}function Qf(e,t){return I({[P]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function ht(e,t,r){return I({[P]:"Computed",target:e,parameters:t},r)}function UE(e,t){const{[t]:r,...n}=e;return n}function vr(e,t){return t.reduce((r,n)=>UE(r,n),e)}function qe(e){return I({[P]:"Never",not:{}},e)}function Nt(e){return I({[P]:"MappedResult",properties:e})}function em(e,t,r){return I({[P]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function Ba(e,t,r){return I({[P]:"Function",type:"Function",parameters:e,returns:t},r)}function Cd(e,t){return I({[P]:"Union",anyOf:e},t)}function _E(e){return e.some(t=>hi(t))}function np(e){return e.map(t=>hi(t)?VE(t):t)}function VE(e){return vr(e,[Vn])}function WE(e,t){return _E(e)?wi(Cd(np(e),t)):Cd(np(e),t)}function gs(e,t){return e.length===1?I(e[0],t):e.length===0?qe(t):WE(e,t)}function Tt(e,t){return e.length===0?qe(t):e.length===1?I(e[0],t):Cd(e,t)}class ip extends St{}function zE(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function tm(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function In(e,t){return tm(e,t,"(")}function pa(e,t){return tm(e,t,")")}function bb(e,t){return tm(e,t,"|")}function qE(e){if(!(In(e,0)&&pa(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(In(e,r)&&(t+=1),pa(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function KE(e){return e.slice(1,e.length-1)}function GE(e){let t=0;for(let r=0;r<e.length;r++)if(In(e,r)&&(t+=1),pa(e,r)&&(t-=1),bb(e,r)&&t===0)return!0;return!1}function ZE(e){for(let t=0;t<e.length;t++)if(In(e,t))return!0;return!1}function HE(e){let[t,r]=[0,0];const n=[];for(let o=0;o<e.length;o++)if(In(e,o)&&(t+=1),pa(e,o)&&(t-=1),bb(e,o)&&t===0){const s=e.slice(r,o);s.length>0&&n.push(Zo(s)),r=o+1}const i=e.slice(r);return i.length>0&&n.push(Zo(i)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function JE(e){function t(i,o){if(!In(i,o))throw new ip("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=o;a<i.length;a++)if(In(i,a)&&(s+=1),pa(i,a)&&(s-=1),s===0)return[o,a];throw new ip("TemplateLiteralParser: Unclosed group parens in expression")}function r(i,o){for(let s=o;s<i.length;s++)if(In(i,s))return[o,s];return[o,i.length]}const n=[];for(let i=0;i<e.length;i++)if(In(e,i)){const[o,s]=t(e,i),a=e.slice(o,s+1);n.push(Zo(a)),i=s}else{const[o,s]=r(e,i),a=e.slice(o,s);a.length>0&&n.push(Zo(a)),i=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function Zo(e){return qE(e)?Zo(KE(e)):GE(e)?HE(e):ZE(e)?JE(e):{type:"const",const:zE(e)}}function rm(e){return Zo(e.slice(1,e.length-1))}class YE extends St{}function XE(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function QE(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function eC(e){return e.type==="const"&&e.const===".*"}function ga(e){return XE(e)||eC(e)?!1:QE(e)?!0:e.type==="and"?e.expr.every(t=>ga(t)):e.type==="or"?e.expr.every(t=>ga(t)):e.type==="const"?!0:(()=>{throw new YE("Unknown expression type")})()}function tC(e){const t=rm(e.pattern);return ga(t)}class rC extends St{}function*wb(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of wb(e.slice(1)))yield`${t}${r}`}function*nC(e){return yield*wb(e.expr.map(t=>[...Rl(t)]))}function*iC(e){for(const t of e.expr)yield*Rl(t)}function*oC(e){return yield e.const}function*Rl(e){return e.type==="and"?yield*nC(e):e.type==="or"?yield*iC(e):e.type==="const"?yield*oC(e):(()=>{throw new rC("Unknown expression")})()}function vb(e){const t=rm(e.pattern);return ga(t)?[...Rl(t)]:[]}function at(e,t){return I({[P]:"Literal",const:e,type:typeof e},t)}function $b(e){return I({[P]:"Boolean",type:"boolean"},e)}function nm(e){return I({[P]:"BigInt",type:"bigint"},e)}function no(e){return I({[P]:"Number",type:"number"},e)}function zi(e){return I({[P]:"String",type:"string"},e)}function*sC(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield $b():t==="number"?yield no():t==="bigint"?yield nm():t==="string"?yield zi():yield(()=>{const r=t.split("|").map(n=>at(n.trim()));return r.length===0?qe():r.length===1?r[0]:gs(r)})()}function*aC(e){if(e[1]!=="{"){const t=at("$"),r=kd(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=sC(e.slice(2,t)),n=kd(e.slice(t+1));return yield*[...r,...n]}yield at(e)}function*kd(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=at(e.slice(0,t)),n=aC(e.slice(t));return yield*[r,...n]}yield at(e)}function uC(e){return[...kd(e)]}class lC extends St{}function cC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Db(e,t){return Xi(e)?e.pattern.slice(1,e.pattern.length-1):xt(e)?`(${e.anyOf.map(r=>Db(r,t)).join("|")})`:ps(e)?`${t}${Eu}`:hs(e)?`${t}${Eu}`:kl(e)?`${t}${Eu}`:Ia(e)?`${t}${gb}`:Ji(e)?`${t}${cC(e.const.toString())}`:Ta(e)?`${t}${NE}`:(()=>{throw new lC(`Unexpected Kind '${e[P]}'`)})()}function op(e){return`^${e.map(t=>Db(t,"")).join("")}$`}function Ju(e){const r=vb(e).map(n=>at(n));return gs(r)}function xb(e,t){const r=tt(e)?op(uC(e)):op(e);return I({[P]:"TemplateLiteral",type:"string",pattern:r},t)}function dC(e){return vb(e).map(r=>r.toString())}function fC(e){const t=[];for(const r of e)t.push(...yi(r));return t}function mC(e){return[e.toString()]}function yi(e){return[...new Set(Xi(e)?dC(e):xt(e)?fC(e.anyOf):Ji(e)?mC(e.const):ps(e)?["[number]"]:hs(e)?["[number]"]:[])]}function hC(e,t,r){const n={};for(const i of Object.getOwnPropertyNames(t))n[i]=Ll(e,yi(t[i]),r);return n}function pC(e,t,r){return hC(e,t.properties,r)}function gC(e,t,r){const n=pC(e,t,r);return Nt(n)}function Ab(e,t){return e.map(r=>Eb(r,t))}function yC(e){return e.filter(t=>!Pa(t))}function bC(e,t){return Fb(yC(Ab(e,t)))}function wC(e){return e.some(t=>Pa(t))?[]:e}function vC(e,t){return gs(wC(Ab(e,t)))}function $C(e,t){return t in e?e[t]:t==="[number]"?gs(e):qe()}function DC(e,t){return t==="[number]"?e:qe()}function xC(e,t){return t in e?e[t]:qe()}function Eb(e,t){return Ur(e)?bC(e.allOf,t):xt(e)?vC(e.anyOf,t):Qi(e)?$C(e.items??[],t):cs(e)?DC(e.items,t):an(e)?xC(e.properties,t):qe()}function im(e,t){return t.map(r=>Eb(e,r))}function sp(e,t){return gs(im(e,t))}function Ll(e,t,r){if(nr(e)||nr(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!zt(e)||!zt(t))throw new St(n);return ht("Index",[e,t])}return xr(t)?gC(e,t,r):Yi(t)?kC(e,t,r):I(zt(t)?sp(e,yi(t)):sp(e,t),r)}function AC(e,t,r){return{[t]:Ll(e,[t],br(r))}}function EC(e,t,r){return t.reduce((n,i)=>({...n,...AC(e,i,r)}),{})}function CC(e,t,r){return EC(e,t.keys,r)}function kC(e,t,r){const n=CC(e,t,r);return Nt(n)}function om(e,t){return I({[P]:"Iterator",type:"Iterator",items:e},t)}function FC(e){return globalThis.Object.keys(e).filter(t=>!hi(e[t]))}function SC(e,t){const r=FC(e),n=r.length>0?{[P]:"Object",type:"object",required:r,properties:e}:{[P]:"Object",type:"object",properties:e};return I(n,t)}var Dt=SC;function Cb(e,t){return I({[P]:"Promise",type:"Promise",item:e},t)}function NC(e){return I(vr(e,[Na]))}function TC(e){return I({...e,[Na]:"Readonly"})}function PC(e,t){return t===!1?NC(e):TC(e)}function bi(e,t){const r=t??!0;return xr(e)?OC(e,r):PC(e,r)}function IC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=bi(e[n],t);return r}function MC(e,t){return IC(e.properties,t)}function OC(e,t){const r=MC(e,t);return Nt(r)}function ys(e,t){return I(e.length>0?{[P]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[P]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function kb(e,t){return e in t?Fr(e,t[e]):Nt(t)}function BC(e){return{[e]:at(e)}}function RC(e){const t={};for(const r of e)t[r]=at(r);return t}function LC(e,t){return IE(t,e)?BC(e):RC(t)}function jC(e,t){const r=LC(e,t);return kb(e,r)}function Ps(e,t){return t.map(r=>Fr(e,r))}function UC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=Fr(e,t[n]);return r}function Fr(e,t){const r={...t};return hi(t)?wi(Fr(e,vr(t,[Vn]))):Lf(t)?bi(Fr(e,vr(t,[Na]))):xr(t)?kb(e,t.properties):Yi(t)?jC(e,t.keys):fs(t)?em(Ps(e,t.parameters),Fr(e,t.returns),r):ms(t)?Ba(Ps(e,t.parameters),Fr(e,t.returns),r):Cl(t)?Qf(Fr(e,t.items),r):Fl(t)?om(Fr(e,t.items),r):Ur(t)?vi(Ps(e,t.allOf),r):xt(t)?Tt(Ps(e,t.anyOf),r):Qi(t)?ys(Ps(e,t.items??[]),r):an(t)?Dt(UC(e,t.properties),r):cs(t)?Xf(Fr(e,t.items),r):Sl(t)?Cb(Fr(e,t.item),r):t}function _C(e,t){const r={};for(const n of e)r[n]=Fr(n,t);return r}function VC(e,t,r){const n=zt(e)?yi(e):e,i=t({[P]:"MappedKey",keys:n}),o=_C(n,i);return Dt(o,r)}function WC(e){return I(vr(e,[Vn]))}function zC(e){return I({...e,[Vn]:"Optional"})}function qC(e,t){return t===!1?WC(e):zC(e)}function wi(e,t){const r=t??!0;return xr(e)?ZC(e,r):qC(e,r)}function KC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=wi(e[n],t);return r}function GC(e,t){return KC(e.properties,t)}function ZC(e,t){const r=GC(e,t);return Nt(r)}function Fd(e,t={}){const r=e.every(i=>an(i)),n=zt(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return I(t.unevaluatedProperties===!1||zt(t.unevaluatedProperties)||r?{...n,[P]:"Intersect",type:"object",allOf:e}:{...n,[P]:"Intersect",allOf:e},t)}function HC(e){return e.every(t=>hi(t))}function JC(e){return vr(e,[Vn])}function ap(e){return e.map(t=>hi(t)?JC(t):t)}function YC(e,t){return HC(e)?wi(Fd(ap(e),t)):Fd(ap(e),t)}function Fb(e,t={}){if(e.length===1)return I(e[0],t);if(e.length===0)return qe(t);if(e.some(r=>Ne(r)))throw new Error("Cannot intersect transform types");return YC(e,t)}function vi(e,t){if(e.length===1)return I(e[0],t);if(e.length===0)return qe(t);if(e.some(r=>Ne(r)))throw new Error("Cannot intersect transform types");return Fd(e,t)}function bs(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new St("Ref: $ref must be a string");return I({[P]:"Ref",$ref:t},r)}function XC(e,t){return ht("Awaited",[ht(e,t)])}function QC(e){return ht("Awaited",[bs(e)])}function ek(e){return vi(Sb(e))}function tk(e){return Tt(Sb(e))}function rk(e){return jl(e)}function Sb(e){return e.map(t=>jl(t))}function jl(e,t){return I(ds(e)?XC(e.target,e.parameters):Ur(e)?ek(e.allOf):xt(e)?tk(e.anyOf):Sl(e)?rk(e.item):nr(e)?QC(e.$ref):e,t)}function Nb(e){const t=[];for(const r of e)t.push(io(r));return t}function nk(e){const t=Nb(e);return LE(t)}function ik(e){const t=Nb(e);return RE(t)}function ok(e){return e.map((t,r)=>r.toString())}function sk(e){return["[number]"]}function ak(e){return globalThis.Object.getOwnPropertyNames(e)}function uk(e){return Sd?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function io(e){return Ur(e)?nk(e.allOf):xt(e)?ik(e.anyOf):Qi(e)?ok(e.items??[]):cs(e)?sk(e.items):an(e)?ak(e.properties):Nl(e)?uk(e.patternProperties):[]}let Sd=!1;function Ho(e){Sd=!0;const t=io(e);return Sd=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function lk(e,t){return ht("KeyOf",[ht(e,t)])}function ck(e){return ht("KeyOf",[bs(e)])}function dk(e,t){const r=io(e),n=fk(r),i=gs(n);return I(i,t)}function fk(e){return e.map(t=>t==="[number]"?no():at(t))}function sm(e,t){return ds(e)?lk(e.target,e.parameters):nr(e)?ck(e.$ref):xr(e)?pk(e,t):dk(e,t)}function mk(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=sm(e[n],br(t));return r}function hk(e,t){return mk(e.properties,t)}function pk(e,t){const r=hk(e,t);return Nt(r)}function Tb(e){const t=io(e),r=im(e,t);return t.map((n,i)=>[t[i],r[i]])}function gk(e){const t=[];for(const r of e)t.push(...io(r));return ME(t)}function yk(e){return e.filter(t=>!Pa(t))}function bk(e,t){const r=[];for(const n of e)r.push(...im(n,[t]));return yk(r)}function wk(e,t){const r={};for(const n of t)r[n]=Fb(bk(e,n));return r}function vk(e,t){const r=gk(e),n=wk(e,r);return Dt(n,t)}function Pb(e){return I({[P]:"Date",type:"Date"},e)}function Ib(e){return I({[P]:"Null",type:"null"},e)}function Mb(e){return I({[P]:"Symbol",type:"symbol"},e)}function Ob(e){return I({[P]:"Undefined",type:"undefined"},e)}function Bb(e){return I({[P]:"Uint8Array",type:"Uint8Array"},e)}function Ul(e){return I({[P]:"Unknown"},e)}function $k(e){return e.map(t=>am(t,!1))}function Dk(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=bi(am(e[r],!1));return t}function lu(e,t){return t===!0?e:bi(e)}function am(e,t){return YA(e)||QA(e)?lu(ha(),t):sr(e)?bi(ys($k(e))):Sa(e)?Bb():Mf(e)?Pb():ut(e)?lu(Dt(Dk(e)),t):XA(e)?lu(Ba([],Ul()),t):st(e)?Ob():eE(e)?Ib():tE(e)?Mb():J1(e)?nm():pn(e)||Fa(e)||tt(e)?at(e):Dt({})}function xk(e,t){return I(am(e,!0),t)}function Ak(e,t){return fs(e)?ys(e.parameters,t):qe(t)}function Ek(e,t){if(st(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(r)].map(o=>at(o));return Tt(i,{...t,[El]:"Enum"})}class Ck extends St{}var E;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(E||(E={}));function jr(e){return e===E.False?e:E.True}function ws(e){throw new Ck(e)}function lt(e){return gi(e)||ro(e)||_n(e)||rn(e)||en(e)}function ct(e,t){return gi(t)?jb():ro(t)?_l(e,t):_n(t)?lm(e,t):rn(t)?Wb():en(t)?um():ws("StructuralRight")}function um(e,t){return E.True}function kk(e,t){return ro(t)?_l(e,t):_n(t)&&t.anyOf.some(r=>en(r)||rn(r))?E.True:_n(t)?E.Union:rn(t)||en(t)?E.True:E.Union}function Fk(e,t){return rn(e)?E.False:en(e)?E.Union:gi(e)?E.True:E.False}function Sk(e,t){return ze(t)&&Vl(t)?E.True:lt(t)?ct(e,t):eo(t)?jr(xe(e.items,t.items)):E.False}function Nk(e,t){return lt(t)?ct(e,t):Wf(t)?jr(xe(e.items,t.items)):E.False}function Tk(e,t){return lt(t)?ct(e,t):ze(t)?Rt(e,t):Ft(t)?_r(e,t):Tl(t)?E.True:E.False}function Rb(e,t){return pb(e)||to(e)?E.True:E.False}function Pk(e,t){return lt(t)?ct(e,t):ze(t)?Rt(e,t):Ft(t)?_r(e,t):to(t)?E.True:E.False}function Ik(e,t){return lt(t)?ct(e,t):ze(t)?Rt(e,t):Pl(t)?e.parameters.length>t.parameters.length?E.False:e.parameters.every((r,n)=>jr(xe(t.parameters[n],r))===E.True)?jr(xe(e.returns,t.returns)):E.False:E.False}function Mk(e,t){return lt(t)?ct(e,t):ze(t)?Rt(e,t):Ft(t)?_r(e,t):Il(t)?E.True:E.False}function Ok(e,t){return lt(t)?ct(e,t):ze(t)?Rt(e,t):Ml(t)?e.parameters.length>t.parameters.length?E.False:e.parameters.every((r,n)=>jr(xe(t.parameters[n],r))===E.True)?jr(xe(e.returns,t.returns)):E.False:E.False}function Lb(e,t){return pi(e)&&pn(e.const)||er(e)||Wn(e)?E.True:E.False}function Bk(e,t){return Wn(t)||er(t)?E.True:lt(t)?ct(e,t):ze(t)?Rt(e,t):Ft(t)?_r(e,t):E.False}function _l(e,t){return t.allOf.every(r=>xe(e,r)===E.True)?E.True:E.False}function Rk(e,t){return e.allOf.some(r=>xe(r,t)===E.True)?E.True:E.False}function Lk(e,t){return lt(t)?ct(e,t):zf(t)?jr(xe(e.items,t.items)):E.False}function jk(e,t){return pi(t)&&t.const===e.const?E.True:lt(t)?ct(e,t):ze(t)?Rt(e,t):Ft(t)?_r(e,t):tn(t)?Vb(e):er(t)?Ub(e):Wn(t)?Lb(e):to(t)?Rb(e):E.False}function jb(e,t){return E.False}function Uk(e,t){return E.True}function up(e){let[t,r]=[e,0];for(;qo(t);)t=t.not,r+=1;return r%2===0?t:Ul()}function _k(e,t){return qo(e)?xe(up(e),t):qo(t)?xe(e,up(t)):ws("Invalid fallthrough for Not")}function Vk(e,t){return lt(t)?ct(e,t):ze(t)?Rt(e,t):Ft(t)?_r(e,t):qf(t)?E.True:E.False}function Ub(e,t){return hb(e)||er(e)||Wn(e)?E.True:E.False}function Wk(e,t){return lt(t)?ct(e,t):ze(t)?Rt(e,t):Ft(t)?_r(e,t):Wn(t)||er(t)?E.True:E.False}function ir(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function lp(e){return Vl(e)}function cp(e){return ir(e,0)||ir(e,1)&&"description"in e.properties&&_n(e.properties.description)&&e.properties.description.anyOf.length===2&&(tn(e.properties.description.anyOf[0])&&Wi(e.properties.description.anyOf[1])||tn(e.properties.description.anyOf[1])&&Wi(e.properties.description.anyOf[0]))}function Ic(e){return ir(e,0)}function dp(e){return ir(e,0)}function zk(e){return ir(e,0)}function qk(e){return ir(e,0)}function Kk(e){return Vl(e)}function Gk(e){const t=no();return ir(e,0)||ir(e,1)&&"length"in e.properties&&jr(xe(e.properties.length,t))===E.True}function Zk(e){return ir(e,0)}function Vl(e){const t=no();return ir(e,0)||ir(e,1)&&"length"in e.properties&&jr(xe(e.properties.length,t))===E.True}function Hk(e){const t=Ba([ha()],ha());return ir(e,0)||ir(e,1)&&"then"in e.properties&&jr(xe(e.properties.then,t))===E.True}function _b(e,t){return xe(e,t)===E.False||Hu(e)&&!Hu(t)?E.False:E.True}function Rt(e,t){return rn(e)?E.False:en(e)?E.Union:gi(e)||mb(e)&&lp(t)||hb(e)&&Ic(t)||pb(e)&&dp(t)||fa(e)&&cp(t)||Tl(e)&&zk(t)||tn(e)&&lp(t)||fa(e)&&cp(t)||er(e)&&Ic(t)||Wn(e)&&Ic(t)||to(e)&&dp(t)||Oa(e)&&Kk(t)||Il(e)&&qk(t)||Pl(e)&&Zk(t)||Ml(e)&&Gk(t)?E.True:Ft(e)&&tn(Nd(e))?t[El]==="Record"?E.True:E.False:Ft(e)&&er(Nd(e))&&ir(t,0)?E.True:E.False}function Jk(e,t){return lt(t)?ct(e,t):Ft(t)?_r(e,t):ze(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!Hu(t.properties[r]))return E.False;if(Hu(t.properties[r]))return E.True;if(_b(e.properties[r],t.properties[r])===E.False)return E.False}return E.True})():E.False}function Yk(e,t){return lt(t)?ct(e,t):ze(t)&&Hk(t)?E.True:Kf(t)?jr(xe(e.item,t.item)):E.False}function Nd(e){return Ko in e.patternProperties?no():Go in e.patternProperties?zi():ws("Unknown record key pattern")}function Td(e){return Ko in e.patternProperties?e.patternProperties[Ko]:Go in e.patternProperties?e.patternProperties[Go]:ws("Unable to get record value schema")}function _r(e,t){const[r,n]=[Nd(t),Td(t)];return mb(e)&&er(r)&&jr(xe(e,n))===E.True?E.True:Oa(e)&&er(r)||tn(e)&&er(r)||eo(e)&&er(r)?xe(e,n):ze(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(_b(n,e.properties[i])===E.False)return E.False;return E.True})():E.False}function Xk(e,t){return lt(t)?ct(e,t):ze(t)?Rt(e,t):Ft(t)?xe(Td(e),Td(t)):E.False}function Qk(e,t){const r=da(e)?zi():e,n=da(t)?zi():t;return xe(r,n)}function Vb(e,t){return pi(e)&&tt(e.const)||tn(e)?E.True:E.False}function e4(e,t){return lt(t)?ct(e,t):ze(t)?Rt(e,t):Ft(t)?_r(e,t):tn(t)?E.True:E.False}function t4(e,t){return lt(t)?ct(e,t):ze(t)?Rt(e,t):Ft(t)?_r(e,t):fa(t)?E.True:E.False}function r4(e,t){return ma(e)?xe(Ju(e),t):ma(t)?xe(e,Ju(t)):ws("Invalid fallthrough for TemplateLiteral")}function n4(e,t){return eo(t)&&e.items!==void 0&&e.items.every(r=>xe(r,t.items)===E.True)}function i4(e,t){return gi(e)?E.True:rn(e)?E.False:en(e)?E.Union:E.False}function o4(e,t){return lt(t)?ct(e,t):ze(t)&&Vl(t)||eo(t)&&n4(e,t)?E.True:Ol(t)?st(e.items)&&!st(t.items)||!st(e.items)&&st(t.items)?E.False:st(e.items)&&!st(t.items)||e.items.every((r,n)=>xe(r,t.items[n])===E.True)?E.True:E.False:E.False}function s4(e,t){return lt(t)?ct(e,t):ze(t)?Rt(e,t):Ft(t)?_r(e,t):Oa(t)?E.True:E.False}function a4(e,t){return lt(t)?ct(e,t):ze(t)?Rt(e,t):Ft(t)?_r(e,t):Bl(t)?c4(e):Wi(t)?E.True:E.False}function lm(e,t){return t.anyOf.some(r=>xe(e,r)===E.True)?E.True:E.False}function u4(e,t){return e.anyOf.every(r=>xe(r,t)===E.True)?E.True:E.False}function Wb(e,t){return E.True}function l4(e,t){return gi(t)?jb():ro(t)?_l(e,t):_n(t)?lm(e,t):en(t)?um():tn(t)?Vb(e):er(t)?Ub(e):Wn(t)?Lb(e):to(t)?Rb(e):eo(t)?Fk(e):Ol(t)?i4(e):ze(t)?Rt(e,t):rn(t)?E.True:E.False}function c4(e,t){return Wi(e)||Wi(e)?E.True:E.False}function d4(e,t){return ro(t)?_l(e,t):_n(t)?lm(e,t):rn(t)?Wb():en(t)?um():ze(t)?Rt(e,t):Bl(t)?E.True:E.False}function xe(e,t){return ma(e)||ma(t)?r4(e,t):da(e)||da(t)?Qk(e,t):qo(e)||qo(t)?_k(e,t):en(e)?kk(e,t):eo(e)?Sk(e,t):Tl(e)?Tk(e,t):to(e)?Pk(e,t):Wf(e)?Nk(e,t):Pl(e)?Ik(e,t):Il(e)?Mk(e,t):Ml(e)?Ok(e,t):Wn(e)?Bk(e,t):ro(e)?Rk(e,t):zf(e)?Lk(e,t):pi(e)?jk(e,t):gi(e)?Uk():qf(e)?Vk(e,t):er(e)?Wk(e,t):ze(e)?Jk(e,t):Ft(e)?Xk(e,t):tn(e)?e4(e,t):fa(e)?t4(e,t):Ol(e)?o4(e,t):Kf(e)?Yk(e,t):Oa(e)?s4(e,t):Wi(e)?a4(e,t):_n(e)?u4(e,t):rn(e)?l4(e,t):Bl(e)?d4(e,t):ws(`Unknown left type operand '${e[P]}'`)}function Ra(e,t){return xe(e,t)}function f4(e,t,r,n,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=cm(e[s],t,r,n,br(i));return o}function m4(e,t,r,n,i){return f4(e.properties,t,r,n,i)}function h4(e,t,r,n,i){const o=m4(e,t,r,n,i);return Nt(o)}function p4(e,t,r,n){const i=Ra(e,t);return i===E.Union?Tt([r,n]):i===E.True?r:n}function cm(e,t,r,n,i){return xr(e)?h4(e,t,r,n,i):Yi(e)?I(w4(e,t,r,n,i)):I(p4(e,t,r,n),i)}function g4(e,t,r,n,i){return{[e]:cm(at(e),t,r,n,br(i))}}function y4(e,t,r,n,i){return e.reduce((o,s)=>({...o,...g4(s,t,r,n,i)}),{})}function b4(e,t,r,n,i){return y4(e.keys,t,r,n,i)}function w4(e,t,r,n,i){const o=b4(e,t,r,n,i);return Nt(o)}function v4(e){return e.allOf.every(t=>vs(t))}function $4(e){return e.anyOf.some(t=>vs(t))}function D4(e){return!vs(e.not)}function vs(e){return e[P]==="Intersect"?v4(e):e[P]==="Union"?$4(e):e[P]==="Not"?D4(e):e[P]==="Undefined"}function x4(e,t){return dm(Ju(e),t)}function A4(e,t){const r=e.filter(n=>Ra(n,t)===E.False);return r.length===1?r[0]:Tt(r)}function dm(e,t,r={}){return Xi(e)?I(x4(e,t),r):xr(e)?I(k4(e,t),r):I(xt(e)?A4(e.anyOf,t):Ra(e,t)!==E.False?qe():e,r)}function E4(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=dm(e[n],t);return r}function C4(e,t){return E4(e.properties,t)}function k4(e,t){const r=C4(e,t);return Nt(r)}function F4(e,t){return fm(Ju(e),t)}function S4(e,t){const r=e.filter(n=>Ra(n,t)!==E.False);return r.length===1?r[0]:Tt(r)}function fm(e,t,r){return Xi(e)?I(F4(e,t),r):xr(e)?I(P4(e,t),r):I(xt(e)?S4(e.anyOf,t):Ra(e,t)!==E.False?e:qe(),r)}function N4(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=fm(e[n],t);return r}function T4(e,t){return N4(e.properties,t)}function P4(e,t){const r=T4(e,t);return Nt(r)}function I4(e,t){return fs(e)?I(e.returns,t):qe(t)}function zb(e){return bi(wi(e))}function oo(e,t,r){return I({[P]:"Record",type:"object",patternProperties:{[e]:t}},r)}function mm(e,t,r){const n={};for(const i of e)n[i]=t;return Dt(n,{...r,[El]:"Record"})}function M4(e,t,r){return tC(e)?mm(yi(e),t,r):oo(e.pattern,t,r)}function O4(e,t,r){return mm(yi(Tt(e)),t,r)}function B4(e,t,r){return mm([e.toString()],t,r)}function R4(e,t,r){return oo(e.source,t,r)}function L4(e,t,r){const n=st(e.pattern)?Go:e.pattern;return oo(n,t,r)}function j4(e,t,r){return oo(Go,t,r)}function U4(e,t,r){return oo(PE,t,r)}function _4(e,t,r){return Dt({true:t,false:t},r)}function V4(e,t,r){return oo(Ko,t,r)}function W4(e,t,r){return oo(Ko,t,r)}function qb(e,t,r={}){return xt(e)?O4(e.anyOf,t,r):Xi(e)?M4(e,t,r):Ji(e)?B4(e.const,t,r):Ta(e)?_4(e,t,r):hs(e)?V4(e,t,r):ps(e)?W4(e,t,r):ub(e)?R4(e,t,r):Ia(e)?L4(e,t,r):ob(e)?j4(e,t,r):Pa(e)?U4(e,t,r):qe(r)}function hm(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function z4(e){const t=hm(e);return t===Go?zi():t===Ko?no():zi({pattern:t})}function Kb(e){return e.patternProperties[hm(e)]}function q4(e,t){return t.parameters=La(e,t.parameters),t.returns=nn(e,t.returns),t}function K4(e,t){return t.parameters=La(e,t.parameters),t.returns=nn(e,t.returns),t}function G4(e,t){return t.allOf=La(e,t.allOf),t}function Z4(e,t){return t.anyOf=La(e,t.anyOf),t}function H4(e,t){return st(t.items)||(t.items=La(e,t.items)),t}function J4(e,t){return t.items=nn(e,t.items),t}function Y4(e,t){return t.items=nn(e,t.items),t}function X4(e,t){return t.items=nn(e,t.items),t}function Q4(e,t){return t.item=nn(e,t.item),t}function e3(e,t){const r=i3(e,t.properties);return{...t,...Dt(r)}}function t3(e,t){const r=nn(e,z4(t)),n=nn(e,Kb(t)),i=qb(r,n);return{...t,...i}}function r3(e,t){return t.index in e?e[t.index]:Ul()}function n3(e,t){const r=Lf(t),n=hi(t),i=nn(e,t);return r&&n?zb(i):r&&!n?bi(i):!r&&n?wi(i):i}function i3(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:n3(e,t[n])}),{})}function La(e,t){return t.map(r=>nn(e,r))}function nn(e,t){return fs(t)?q4(e,t):ms(t)?K4(e,t):Ur(t)?G4(e,t):xt(t)?Z4(e,t):Qi(t)?H4(e,t):cs(t)?J4(e,t):Cl(t)?Y4(e,t):Fl(t)?X4(e,t):Sl(t)?Q4(e,t):an(t)?e3(e,t):Nl(t)?t3(e,t):sb(t)?r3(e,t):t}function o3(e,t){return nn(t,Of(e))}function s3(e){return I({[P]:"Integer",type:"integer"},e)}function a3(e,t,r){return{[e]:$s(at(e),t,br(r))}}function u3(e,t,r){return e.reduce((i,o)=>({...i,...a3(o,t,r)}),{})}function l3(e,t,r){return u3(e.keys,t,r)}function c3(e,t,r){const n=l3(e,t,r);return Nt(n)}function d3(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function f3(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function m3(e){return e.toUpperCase()}function h3(e){return e.toLowerCase()}function p3(e,t,r){const n=rm(e.pattern);if(!ga(n))return{...e,pattern:Gb(e.pattern,t)};const s=[...Rl(n)].map(l=>at(l)),a=Zb(s,t),u=Tt(a);return xb([u],r)}function Gb(e,t){return typeof e=="string"?t==="Uncapitalize"?d3(e):t==="Capitalize"?f3(e):t==="Uppercase"?m3(e):t==="Lowercase"?h3(e):e:e.toString()}function Zb(e,t){return e.map(r=>$s(r,t))}function $s(e,t,r={}){return Yi(e)?c3(e,t,r):Xi(e)?p3(e,t,r):xt(e)?Tt(Zb(e.anyOf,t),r):Ji(e)?at(Gb(e.const,t),r):I(e,r)}function g3(e,t={}){return $s(e,"Capitalize",t)}function y3(e,t={}){return $s(e,"Lowercase",t)}function b3(e,t={}){return $s(e,"Uncapitalize",t)}function w3(e,t={}){return $s(e,"Uppercase",t)}function v3(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=Wl(e[i],t,br(r));return n}function $3(e,t,r){return v3(e.properties,t,r)}function D3(e,t,r){const n=$3(e,t,r);return Nt(n)}function x3(e,t){return e.map(r=>pm(r,t))}function A3(e,t){return e.map(r=>pm(r,t))}function E3(e,t){const{[t]:r,...n}=e;return n}function C3(e,t){return t.reduce((r,n)=>E3(r,n),e)}function k3(e,t,r){const n=vr(e,[Qt,"$id","required","properties"]),i=C3(r,t);return Dt(i,n)}function F3(e){const t=e.reduce((r,n)=>ab(n)?[...r,at(n)]:r,[]);return Tt(t)}function pm(e,t){return Ur(e)?vi(x3(e.allOf,t)):xt(e)?Tt(A3(e.anyOf,t)):an(e)?k3(e,t,e.properties):Dt({})}function Wl(e,t,r){const n=sr(t)?F3(t):t,i=zt(t)?yi(t):t,o=nr(e),s=nr(t);return xr(e)?D3(e,i,r):Yi(t)?P3(e,t,r):o&&s?ht("Omit",[e,n],r):!o&&s?ht("Omit",[e,n],r):o&&!s?ht("Omit",[e,n],r):I({...pm(e,i),...r})}function S3(e,t,r){return{[t]:Wl(e,[t],br(r))}}function N3(e,t,r){return t.reduce((n,i)=>({...n,...S3(e,i,r)}),{})}function T3(e,t,r){return N3(e,t.keys,r)}function P3(e,t,r){const n=T3(e,t,r);return Nt(n)}function I3(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=zl(e[i],t,br(r));return n}function M3(e,t,r){return I3(e.properties,t,r)}function O3(e,t,r){const n=M3(e,t,r);return Nt(n)}function B3(e,t){return e.map(r=>gm(r,t))}function R3(e,t){return e.map(r=>gm(r,t))}function L3(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function j3(e,t,r){const n=vr(e,[Qt,"$id","required","properties"]),i=L3(r,t);return Dt(i,n)}function U3(e){const t=e.reduce((r,n)=>ab(n)?[...r,at(n)]:r,[]);return Tt(t)}function gm(e,t){return Ur(e)?vi(B3(e.allOf,t)):xt(e)?Tt(R3(e.anyOf,t)):an(e)?j3(e,t,e.properties):Dt({})}function zl(e,t,r){const n=sr(t)?U3(t):t,i=zt(t)?yi(t):t,o=nr(e),s=nr(t);return xr(e)?O3(e,i,r):Yi(t)?z3(e,t,r):o&&s?ht("Pick",[e,n],r):!o&&s?ht("Pick",[e,n],r):o&&!s?ht("Pick",[e,n],r):I({...gm(e,i),...r})}function _3(e,t,r){return{[t]:zl(e,[t],br(r))}}function V3(e,t,r){return t.reduce((n,i)=>({...n,..._3(e,i,r)}),{})}function W3(e,t,r){return V3(e,t.keys,r)}function z3(e,t,r){const n=W3(e,t,r);return Nt(n)}function q3(e,t){return ht("Partial",[ht(e,t)])}function K3(e){return ht("Partial",[bs(e)])}function G3(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=wi(e[r]);return t}function Z3(e,t){const r=vr(e,[Qt,"$id","required","properties"]),n=G3(t);return Dt(n,r)}function fp(e){return e.map(t=>Hb(t))}function Hb(e){return ds(e)?q3(e.target,e.parameters):nr(e)?K3(e.$ref):Ur(e)?vi(fp(e.allOf)):xt(e)?Tt(fp(e.anyOf)):an(e)?Z3(e,e.properties):kl(e)||Ta(e)||hs(e)||Ji(e)||jf(e)||ps(e)||Ia(e)||Uf(e)||Ma(e)?e:Dt({})}function ym(e,t){return xr(e)?Y3(e,t):I({...Hb(e),...t})}function H3(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=ym(e[n],br(t));return r}function J3(e,t){return H3(e.properties,t)}function Y3(e,t){const r=J3(e,t);return Nt(r)}function X3(e,t){return ht("Required",[ht(e,t)])}function Q3(e){return ht("Required",[bs(e)])}function eF(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=vr(e[r],[Vn]);return t}function tF(e,t){const r=vr(e,[Qt,"$id","required","properties"]),n=eF(t);return Dt(n,r)}function mp(e){return e.map(t=>Jb(t))}function Jb(e){return ds(e)?X3(e.target,e.parameters):nr(e)?Q3(e.$ref):Ur(e)?vi(mp(e.allOf)):xt(e)?Tt(mp(e.anyOf)):an(e)?tF(e,e.properties):kl(e)||Ta(e)||hs(e)||Ji(e)||jf(e)||ps(e)||Ia(e)||Uf(e)||Ma(e)?e:Dt({})}function bm(e,t){return xr(e)?iF(e,t):I({...Jb(e),...t})}function rF(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=bm(e[n],t);return r}function nF(e,t){return rF(e.properties,t)}function iF(e,t){const r=nF(e,t);return Nt(r)}function oF(e,t){return t.map(r=>nr(r)?wm(e,r.$ref):$r(e,r))}function wm(e,t){return t in e?nr(e[t])?wm(e,e[t].$ref):$r(e,e[t]):qe()}function sF(e){return jl(e[0])}function aF(e){return Ll(e[0],e[1])}function uF(e){return sm(e[0])}function lF(e){return ym(e[0])}function cF(e){return Wl(e[0],e[1])}function dF(e){return zl(e[0],e[1])}function fF(e){return bm(e[0])}function mF(e,t,r){const n=oF(e,r);return t==="Awaited"?sF(n):t==="Index"?aF(n):t==="KeyOf"?uF(n):t==="Partial"?lF(n):t==="Omit"?cF(n):t==="Pick"?dF(n):t==="Required"?fF(n):qe()}function hF(e,t){return Xf($r(e,t))}function pF(e,t){return Qf($r(e,t))}function gF(e,t,r){return em(ja(e,t),$r(e,r))}function yF(e,t,r){return Ba(ja(e,t),$r(e,r))}function bF(e,t){return vi(ja(e,t))}function wF(e,t){return om($r(e,t))}function vF(e,t){return Dt(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:$r(e,t[n])}),{}))}function $F(e,t){const[r,n]=[$r(e,Kb(t)),hm(t)],i=Of(t);return i.patternProperties[n]=r,i}function DF(e,t){return nr(t)?{...wm(e,t.$ref),[Qt]:t[Qt]}:t}function xF(e,t){return ys(ja(e,t))}function AF(e,t){return Tt(ja(e,t))}function ja(e,t){return t.map(r=>$r(e,r))}function $r(e,t){return hi(t)?I($r(e,vr(t,[Vn])),t):Lf(t)?I($r(e,vr(t,[Na])),t):Ne(t)?I(DF(e,t),t):cs(t)?I(hF(e,t.items),t):Cl(t)?I(pF(e,t.items),t):ds(t)?I(mF(e,t.target,t.parameters)):fs(t)?I(gF(e,t.parameters,t.returns),t):ms(t)?I(yF(e,t.parameters,t.returns),t):Ur(t)?I(bF(e,t.allOf),t):Fl(t)?I(wF(e,t.items),t):an(t)?I(vF(e,t.properties),t):Nl(t)?I($F(e,t)):Qi(t)?I(xF(e,t.items||[]),t):xt(t)?I(AF(e,t.anyOf),t):t}function EF(e,t){return t in e?$r(e,e[t]):qe()}function CF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:EF(e,r)}),{})}class kF{constructor(t){const r=CF(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:I(this.$defs[t],r)};return I({[P]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function FF(e){return new kF(e)}function SF(e,t){return I({[P]:"Not",not:e},t)}function NF(e,t){return ms(e)?ys(e.parameters,t):qe()}let TF=0;function PF(e,t={}){st(t.$id)&&(t.$id=`T${TF++}`);const r=Of(e({[P]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,I({[El]:"Recursive",...r},t)}function IF(e,t){const r=tt(e)?new globalThis.RegExp(e):e;return I({[P]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function MF(e){return Ur(e)?e.allOf:xt(e)?e.anyOf:Qi(e)?e.items??[]:[]}function OF(e){return MF(e)}function BF(e,t){return ms(e)?I(e.returns,t):qe(t)}class RF{constructor(t){this.schema=t}Decode(t){return new LF(this.schema,t)}}class LF{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const o={Encode:s=>r[Qt].Encode(t(s)),Decode:s=>this.decode(r[Qt].Decode(s))};return{...r,[Qt]:o}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[Qt]:n}}Encode(t){return Ne(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function jF(e){return new RF(e)}function UF(e={}){return I({[P]:e[P]??"Unsafe"},e)}function _F(e){return I({[P]:"Void",type:"void"},e)}const VF=Object.freeze(Object.defineProperty({__proto__:null,Any:ha,Argument:jE,Array:Xf,AsyncIterator:Qf,Awaited:jl,BigInt:nm,Boolean:$b,Capitalize:g3,Composite:vk,Const:xk,Constructor:em,ConstructorParameters:Ak,Date:Pb,Enum:Ek,Exclude:dm,Extends:cm,Extract:fm,Function:Ba,Index:Ll,InstanceType:I4,Instantiate:o3,Integer:s3,Intersect:vi,Iterator:om,KeyOf:sm,Literal:at,Lowercase:y3,Mapped:VC,Module:FF,Never:qe,Not:SF,Null:Ib,Number:no,Object:Dt,Omit:Wl,Optional:wi,Parameters:NF,Partial:ym,Pick:zl,Promise:Cb,Readonly:bi,ReadonlyOptional:zb,Record:qb,Recursive:PF,Ref:bs,RegExp:IF,Required:bm,Rest:OF,ReturnType:BF,String:zi,Symbol:Mb,TemplateLiteral:xb,Transform:jF,Tuple:ys,Uint8Array:Bb,Uncapitalize:b3,Undefined:Ob,Union:Tt,Unknown:Ul,Unsafe:UF,Uppercase:w3,Void:_F},Symbol.toStringTag,{value:"Module"})),Se=VF;function Yb(e){switch(e.errorType){case x.ArrayContains:return"Expected array to contain at least one matching value";case x.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case x.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case x.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case x.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case x.ArrayUniqueItems:return"Expected array elements to be unique";case x.Array:return"Expected array";case x.AsyncIterator:return"Expected AsyncIterator";case x.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case x.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case x.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case x.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case x.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case x.BigInt:return"Expected bigint";case x.Boolean:return"Expected boolean";case x.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case x.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case x.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case x.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case x.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case x.Date:return"Expected Date";case x.Function:return"Expected function";case x.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case x.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case x.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case x.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case x.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case x.Integer:return"Expected integer";case x.IntersectUnevaluatedProperties:return"Unexpected property";case x.Intersect:return"Expected all values to match";case x.Iterator:return"Expected Iterator";case x.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case x.Never:return"Never";case x.Not:return"Value should not match";case x.Null:return"Expected null";case x.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case x.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case x.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case x.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case x.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case x.Number:return"Expected number";case x.Object:return"Expected object";case x.ObjectAdditionalProperties:return"Unexpected property";case x.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case x.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case x.ObjectRequiredProperty:return"Expected required property";case x.Promise:return"Expected Promise";case x.RegExp:return"Expected string to match regular expression";case x.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case x.StringFormat:return`Expected string to match '${e.schema.format}' format`;case x.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case x.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case x.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case x.String:return"Expected string";case x.Symbol:return"Expected symbol";case x.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case x.Tuple:return"Expected tuple";case x.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case x.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case x.Uint8Array:return"Expected Uint8Array";case x.Undefined:return"Expected undefined";case x.Union:return"Expected union value";case x.Void:return"Expected void";case x.Kind:return`Expected kind '${e.schema[P]}'`;default:return"Unknown error type"}}let Xb=Yb;function WF(e){Xb=e}function zF(){return Xb}class qF extends St{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function KF(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new qF(e);return Vr(r,t)}function ql(e,t){return!hr(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function Vr(e,t){return e[P]==="This"||e[P]==="Ref"?KF(e,t):e}class GF extends St{constructor(t){super("Unable to hash value"),this.value=t}}var Dr;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(Dr||(Dr={}));let Do=BigInt("14695981039346656037");const[ZF,HF]=[BigInt("1099511628211"),BigInt("18446744073709551616")],JF=Array.from({length:256}).map((e,t)=>BigInt(t)),Qb=new Float64Array(1),ew=new DataView(Qb.buffer),tw=new Uint8Array(Qb.buffer);function*YF(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function XF(e){Bt(Dr.Array);for(const t of e)Jo(t)}function QF(e){Bt(Dr.Boolean),Bt(e?1:0)}function e6(e){Bt(Dr.BigInt),ew.setBigInt64(0,e);for(const t of tw)Bt(t)}function t6(e){Bt(Dr.Date),Jo(e.getTime())}function r6(e){Bt(Dr.Null)}function n6(e){Bt(Dr.Number),ew.setFloat64(0,e);for(const t of tw)Bt(t)}function i6(e){Bt(Dr.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())Jo(t),Jo(e[t])}function o6(e){Bt(Dr.String);for(let t=0;t<e.length;t++)for(const r of YF(e.charCodeAt(t)))Bt(r)}function s6(e){Bt(Dr.Symbol),Jo(e.description)}function a6(e){Bt(Dr.Uint8Array);for(let t=0;t<e.length;t++)Bt(e[t])}function u6(e){return Bt(Dr.Undefined)}function Jo(e){if(wr(e))return XF(e);if(xl(e))return QF(e);if(Sn(e))return e6(e);if(Bf(e))return t6(e);if(Dl(e))return r6();if(re(e))return n6(e);if(bn(e))return i6(e);if(hr(e))return o6(e);if(Al(e))return s6(e);if(Rf(e))return a6(e);if(mi(e))return u6();throw new GF(e)}function Bt(e){Do=Do^JF[e],Do=Do*ZF%HF}function vm(e){return Do=BigInt("14695981039346656037"),Jo(e),Do}class l6 extends St{constructor(t){super("Unknown type"),this.schema=t}}function c6(e){return e[P]==="Any"||e[P]==="Unknown"}function se(e){return e!==void 0}function d6(e,t,r){return!0}function f6(e,t,r){return!0}function m6(e,t,r){if(!wr(r)||se(e.minItems)&&!(r.length>=e.minItems)||se(e.maxItems)&&!(r.length<=e.maxItems)||!r.every(o=>wt(e.items,t,o))||e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of r){const a=vm(s);if(o.has(a))return!1;o.add(a)}return!0})())return!1;if(!(se(e.contains)||re(e.minContains)||re(e.maxContains)))return!0;const n=se(e.contains)?e.contains:qe(),i=r.reduce((o,s)=>wt(n,t,s)?o+1:o,0);return!(i===0||re(e.minContains)&&i<e.minContains||re(e.maxContains)&&i>e.maxContains)}function h6(e,t,r){return X1(r)}function p6(e,t,r){return!(!Sn(r)||se(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||se(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||se(e.maximum)&&!(r<=e.maximum)||se(e.minimum)&&!(r>=e.minimum)||se(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function g6(e,t,r){return xl(r)}function y6(e,t,r){return wt(e.returns,t,r.prototype)}function b6(e,t,r){return!(!Bf(r)||se(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||se(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||se(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||se(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||se(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function w6(e,t,r){return nb(r)}function v6(e,t,r){const n=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return wt(i,[...t,...n],r)}function $6(e,t,r){return!(!rb(r)||se(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||se(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||se(e.maximum)&&!(r<=e.maximum)||se(e.minimum)&&!(r>=e.minimum)||se(e.multipleOf)&&r%e.multipleOf!==0)}function D6(e,t,r){const n=e.allOf.every(i=>wt(i,t,r));if(e.unevaluatedProperties===!1){const i=new RegExp(Ho(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s));return n&&o}else if(zt(e.unevaluatedProperties)){const i=new RegExp(Ho(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s)||wt(e.unevaluatedProperties,t,r[s]));return n&&o}else return n}function x6(e,t,r){return Q1(r)}function A6(e,t,r){return r===e.const}function E6(e,t,r){return!1}function C6(e,t,r){return!wt(e.not,t,r)}function k6(e,t,r){return Dl(r)}function F6(e,t,r){return!(!Qe.IsNumberLike(r)||se(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||se(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||se(e.minimum)&&!(r>=e.minimum)||se(e.maximum)&&!(r<=e.maximum)||se(e.multipleOf)&&r%e.multipleOf!==0)}function S6(e,t,r){if(!Qe.IsObjectLike(r)||se(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||se(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const i of n){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!wt(o,t,r[i])||(vs(o)||c6(o))&&!(i in r))return!1}else if(Qe.IsExactOptionalProperty(r,i)&&!wt(o,t,r[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&i.length===n.length?!0:i.every(o=>n.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(o=>n.includes(o)||wt(e.additionalProperties,t,r[o])):!0}function N6(e,t,r){return eb(r)}function T6(e,t,r){if(!Qe.IsRecordLike(r)||se(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||se(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,i]=Object.entries(e.patternProperties)[0],o=new RegExp(n),s=Object.entries(r).every(([l,c])=>o.test(l)?wt(i,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([l,c])=>o.test(l)?!0:wt(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(l=>o.test(l)):!0;return s&&a&&u}function P6(e,t,r){return wt(Vr(e,t),t,r)}function I6(e,t,r){const n=new RegExp(e.source,e.flags);return se(e.minLength)&&!(r.length>=e.minLength)||se(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function M6(e,t,r){return!hr(r)||se(e.minLength)&&!(r.length>=e.minLength)||se(e.maxLength)&&!(r.length<=e.maxLength)||se(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:se(e.format)?Gf(e.format)?Zf(e.format)(r):!1:!0}function O6(e,t,r){return Al(r)}function B6(e,t,r){return hr(r)&&new RegExp(e.pattern).test(r)}function R6(e,t,r){return wt(Vr(e,t),t,r)}function L6(e,t,r){if(!wr(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!wt(e.items[n],t,r[n]))return!1;return!0}function j6(e,t,r){return mi(r)}function U6(e,t,r){return e.anyOf.some(n=>wt(n,t,r))}function _6(e,t,r){return!(!Rf(r)||se(e.maxByteLength)&&!(r.length<=e.maxByteLength)||se(e.minByteLength)&&!(r.length>=e.minByteLength))}function V6(e,t,r){return!0}function W6(e,t,r){return Qe.IsVoidLike(r)}function z6(e,t,r){return di(e[P])?Yf(e[P])(e,r):!1}function wt(e,t,r){const n=se(e.$id)?ql(e,t):t,i=e;switch(i[P]){case"Any":return d6();case"Argument":return f6();case"Array":return m6(i,n,r);case"AsyncIterator":return h6(i,n,r);case"BigInt":return p6(i,n,r);case"Boolean":return g6(i,n,r);case"Constructor":return y6(i,n,r);case"Date":return b6(i,n,r);case"Function":return w6(i,n,r);case"Import":return v6(i,n,r);case"Integer":return $6(i,n,r);case"Intersect":return D6(i,n,r);case"Iterator":return x6(i,n,r);case"Literal":return A6(i,n,r);case"Never":return E6();case"Not":return C6(i,n,r);case"Null":return k6(i,n,r);case"Number":return F6(i,n,r);case"Object":return S6(i,n,r);case"Promise":return N6(i,n,r);case"Record":return T6(i,n,r);case"Ref":return P6(i,n,r);case"RegExp":return I6(i,n,r);case"String":return M6(i,n,r);case"Symbol":return O6(i,n,r);case"TemplateLiteral":return B6(i,n,r);case"This":return R6(i,n,r);case"Tuple":return L6(i,n,r);case"Undefined":return j6(i,n,r);case"Union":return U6(i,n,r);case"Uint8Array":return _6(i,n,r);case"Unknown":return V6();case"Void":return W6(i,n,r);default:if(!di(i[P]))throw new l6(i);return z6(i,n,r)}}function Yu(...e){return e.length===3?wt(e[0],e[1],e[2]):wt(e[0],[],e[1])}var x;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(x||(x={}));class q6 extends St{constructor(t){super("Unknown type"),this.schema=t}}function Cn(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function oe(e){return e!==void 0}class rw{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function M(e,t,r,n,i=[]){return{type:e,schema:t,path:r,value:n,message:zF()({errorType:e,path:r,schema:t,value:n,errors:i}),errors:i}}function*K6(e,t,r,n){}function*G6(e,t,r,n){}function*Z6(e,t,r,n){if(!wr(n))return yield M(x.Array,e,r,n);oe(e.minItems)&&!(n.length>=e.minItems)&&(yield M(x.ArrayMinItems,e,r,n)),oe(e.maxItems)&&!(n.length<=e.maxItems)&&(yield M(x.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*vt(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const u=vm(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield M(x.ArrayUniqueItems,e,r,n)),!(oe(e.contains)||oe(e.minContains)||oe(e.maxContains)))return;const i=oe(e.contains)?e.contains:qe(),o=n.reduce((s,a,u)=>vt(i,t,`${r}${u}`,a).next().done===!0?s+1:s,0);o===0&&(yield M(x.ArrayContains,e,r,n)),re(e.minContains)&&o<e.minContains&&(yield M(x.ArrayMinContains,e,r,n)),re(e.maxContains)&&o>e.maxContains&&(yield M(x.ArrayMaxContains,e,r,n))}function*H6(e,t,r,n){X1(n)||(yield M(x.AsyncIterator,e,r,n))}function*J6(e,t,r,n){if(!Sn(n))return yield M(x.BigInt,e,r,n);oe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield M(x.BigIntExclusiveMaximum,e,r,n)),oe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield M(x.BigIntExclusiveMinimum,e,r,n)),oe(e.maximum)&&!(n<=e.maximum)&&(yield M(x.BigIntMaximum,e,r,n)),oe(e.minimum)&&!(n>=e.minimum)&&(yield M(x.BigIntMinimum,e,r,n)),oe(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield M(x.BigIntMultipleOf,e,r,n))}function*Y6(e,t,r,n){xl(n)||(yield M(x.Boolean,e,r,n))}function*X6(e,t,r,n){yield*vt(e.returns,t,r,n.prototype)}function*Q6(e,t,r,n){if(!Bf(n))return yield M(x.Date,e,r,n);oe(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield M(x.DateExclusiveMaximumTimestamp,e,r,n)),oe(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield M(x.DateExclusiveMinimumTimestamp,e,r,n)),oe(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield M(x.DateMaximumTimestamp,e,r,n)),oe(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield M(x.DateMinimumTimestamp,e,r,n)),oe(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield M(x.DateMultipleOfTimestamp,e,r,n))}function*e8(e,t,r,n){nb(n)||(yield M(x.Function,e,r,n))}function*t8(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*vt(o,[...t,...i],r,n)}function*r8(e,t,r,n){if(!rb(n))return yield M(x.Integer,e,r,n);oe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield M(x.IntegerExclusiveMaximum,e,r,n)),oe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield M(x.IntegerExclusiveMinimum,e,r,n)),oe(e.maximum)&&!(n<=e.maximum)&&(yield M(x.IntegerMaximum,e,r,n)),oe(e.minimum)&&!(n>=e.minimum)&&(yield M(x.IntegerMinimum,e,r,n)),oe(e.multipleOf)&&n%e.multipleOf!==0&&(yield M(x.IntegerMultipleOf,e,r,n))}function*n8(e,t,r,n){let i=!1;for(const o of e.allOf)for(const s of vt(o,t,r,n))i=!0,yield s;if(i)return yield M(x.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const o=new RegExp(Ho(e));for(const s of Object.getOwnPropertyNames(n))o.test(s)||(yield M(x.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp(Ho(e));for(const s of Object.getOwnPropertyNames(n))if(!o.test(s)){const a=vt(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*i8(e,t,r,n){Q1(n)||(yield M(x.Iterator,e,r,n))}function*o8(e,t,r,n){n!==e.const&&(yield M(x.Literal,e,r,n))}function*s8(e,t,r,n){yield M(x.Never,e,r,n)}function*a8(e,t,r,n){vt(e.not,t,r,n).next().done===!0&&(yield M(x.Not,e,r,n))}function*u8(e,t,r,n){Dl(n)||(yield M(x.Null,e,r,n))}function*l8(e,t,r,n){if(!Qe.IsNumberLike(n))return yield M(x.Number,e,r,n);oe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield M(x.NumberExclusiveMaximum,e,r,n)),oe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield M(x.NumberExclusiveMinimum,e,r,n)),oe(e.maximum)&&!(n<=e.maximum)&&(yield M(x.NumberMaximum,e,r,n)),oe(e.minimum)&&!(n>=e.minimum)&&(yield M(x.NumberMinimum,e,r,n)),oe(e.multipleOf)&&n%e.multipleOf!==0&&(yield M(x.NumberMultipleOf,e,r,n))}function*c8(e,t,r,n){if(!Qe.IsObjectLike(n))return yield M(x.Object,e,r,n);oe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield M(x.ObjectMinProperties,e,r,n)),oe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield M(x.ObjectMaxProperties,e,r,n));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of i)s.includes(a)||(yield M(x.ObjectRequiredProperty,e.properties[a],`${r}/${Cn(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)o.includes(a)||(yield M(x.ObjectAdditionalProperties,e,`${r}/${Cn(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)o.includes(a)||(yield*vt(e.additionalProperties,t,`${r}/${Cn(a)}`,n[a]));for(const a of o){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*vt(u,t,`${r}/${Cn(a)}`,n[a]),vs(e)&&!(a in n)&&(yield M(x.ObjectRequiredProperty,u,`${r}/${Cn(a)}`,void 0))):Qe.IsExactOptionalProperty(n,a)&&(yield*vt(u,t,`${r}/${Cn(a)}`,n[a]))}}function*d8(e,t,r,n){eb(n)||(yield M(x.Promise,e,r,n))}function*f8(e,t,r,n){if(!Qe.IsRecordLike(n))return yield M(x.Object,e,r,n);oe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield M(x.ObjectMinProperties,e,r,n)),oe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield M(x.ObjectMaxProperties,e,r,n));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[a,u]of Object.entries(n))s.test(a)&&(yield*vt(o,t,`${r}/${Cn(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(n))s.test(a)||(yield*vt(e.additionalProperties,t,`${r}/${Cn(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(n))if(!s.test(a))return yield M(x.ObjectAdditionalProperties,e,`${r}/${Cn(a)}`,u)}}function*m8(e,t,r,n){yield*vt(Vr(e,t),t,r,n)}function*h8(e,t,r,n){if(!hr(n))return yield M(x.String,e,r,n);if(oe(e.minLength)&&!(n.length>=e.minLength)&&(yield M(x.StringMinLength,e,r,n)),oe(e.maxLength)&&!(n.length<=e.maxLength)&&(yield M(x.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield M(x.RegExp,e,r,n)}function*p8(e,t,r,n){if(!hr(n))return yield M(x.String,e,r,n);oe(e.minLength)&&!(n.length>=e.minLength)&&(yield M(x.StringMinLength,e,r,n)),oe(e.maxLength)&&!(n.length<=e.maxLength)&&(yield M(x.StringMaxLength,e,r,n)),hr(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield M(x.StringPattern,e,r,n))),hr(e.format)&&(Gf(e.format)?Zf(e.format)(n)||(yield M(x.StringFormat,e,r,n)):yield M(x.StringFormatUnknown,e,r,n))}function*g8(e,t,r,n){Al(n)||(yield M(x.Symbol,e,r,n))}function*y8(e,t,r,n){if(!hr(n))return yield M(x.String,e,r,n);new RegExp(e.pattern).test(n)||(yield M(x.StringPattern,e,r,n))}function*b8(e,t,r,n){yield*vt(Vr(e,t),t,r,n)}function*w8(e,t,r,n){if(!wr(n))return yield M(x.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield M(x.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield M(x.TupleLength,e,r,n);if(e.items)for(let i=0;i<e.items.length;i++)yield*vt(e.items[i],t,`${r}/${i}`,n[i])}function*v8(e,t,r,n){mi(n)||(yield M(x.Undefined,e,r,n))}function*$8(e,t,r,n){if(Yu(e,t,n))return;const i=e.anyOf.map(o=>new rw(vt(o,t,r,n)));yield M(x.Union,e,r,n,i)}function*D8(e,t,r,n){if(!Rf(n))return yield M(x.Uint8Array,e,r,n);oe(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield M(x.Uint8ArrayMaxByteLength,e,r,n)),oe(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield M(x.Uint8ArrayMinByteLength,e,r,n))}function*x8(e,t,r,n){}function*A8(e,t,r,n){Qe.IsVoidLike(n)||(yield M(x.Void,e,r,n))}function*E8(e,t,r,n){Yf(e[P])(e,n)||(yield M(x.Kind,e,r,n))}function*vt(e,t,r,n){const i=oe(e.$id)?[...t,e]:t,o=e;switch(o[P]){case"Any":return yield*K6();case"Argument":return yield*G6();case"Array":return yield*Z6(o,i,r,n);case"AsyncIterator":return yield*H6(o,i,r,n);case"BigInt":return yield*J6(o,i,r,n);case"Boolean":return yield*Y6(o,i,r,n);case"Constructor":return yield*X6(o,i,r,n);case"Date":return yield*Q6(o,i,r,n);case"Function":return yield*e8(o,i,r,n);case"Import":return yield*t8(o,i,r,n);case"Integer":return yield*r8(o,i,r,n);case"Intersect":return yield*n8(o,i,r,n);case"Iterator":return yield*i8(o,i,r,n);case"Literal":return yield*o8(o,i,r,n);case"Never":return yield*s8(o,i,r,n);case"Not":return yield*a8(o,i,r,n);case"Null":return yield*u8(o,i,r,n);case"Number":return yield*l8(o,i,r,n);case"Object":return yield*c8(o,i,r,n);case"Promise":return yield*d8(o,i,r,n);case"Record":return yield*f8(o,i,r,n);case"Ref":return yield*m8(o,i,r,n);case"RegExp":return yield*h8(o,i,r,n);case"String":return yield*p8(o,i,r,n);case"Symbol":return yield*g8(o,i,r,n);case"TemplateLiteral":return yield*y8(o,i,r,n);case"This":return yield*b8(o,i,r,n);case"Tuple":return yield*w8(o,i,r,n);case"Undefined":return yield*v8(o,i,r,n);case"Union":return yield*$8(o,i,r,n);case"Uint8Array":return yield*D8(o,i,r,n);case"Unknown":return yield*x8();case"Void":return yield*A8(o,i,r,n);default:if(!di(o[P]))throw new q6(e);return yield*E8(o,i,r,n)}}function C8(...e){const t=e.length===3?vt(e[0],e[1],"",e[2]):vt(e[0],[],"",e[1]);return new rw(t)}class k8 extends St{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class F8 extends St{constructor(t,r,n,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=i}}function Be(e,t,r){try{return Ne(e)?e[Qt].Decode(r):r}catch(n){throw new F8(e,t,r,n)}}function S8(e,t,r,n){return wr(n)?Be(e,r,n.map((i,o)=>un(e.items,t,`${r}/${o}`,i))):Be(e,r,n)}function N8(e,t,r,n){if(!bn(n)||ib(n))return Be(e,r,n);const i=Tb(e),o=i.map(c=>c[0]),s={...n};for(const[c,d]of i)c in s&&(s[c]=un(d,t,`${r}/${c}`,s[c]));if(!Ne(e.unevaluatedProperties))return Be(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Be(u,`${r}/${c}`,l[c]));return Be(e,r,l)}function T8(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=un(o,[...t,...i],r,n);return Be(e,r,s)}function P8(e,t,r,n){return Be(e,r,un(e.not,t,r,n))}function I8(e,t,r,n){if(!bn(n))return Be(e,r,n);const i=io(e),o={...n};for(const l of i)tb(o,l)&&(mi(o[l])&&(!Ma(e.properties[l])||Qe.IsExactOptionalProperty(o,l))||(o[l]=un(e.properties[l],t,`${r}/${l}`,o[l])));if(!zt(e.additionalProperties))return Be(e,r,o);const s=Object.getOwnPropertyNames(o),a=e.additionalProperties,u={...o};for(const l of s)i.includes(l)||(u[l]=Be(a,`${r}/${l}`,u[l]));return Be(e,r,u)}function M8(e,t,r,n){if(!bn(n))return Be(e,r,n);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...n};for(const c of Object.getOwnPropertyNames(n))o.test(c)&&(s[c]=un(e.patternProperties[i],t,`${r}/${c}`,s[c]));if(!zt(e.additionalProperties))return Be(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.test(c)||(l[c]=Be(u,`${r}/${c}`,l[c]));return Be(e,r,l)}function O8(e,t,r,n){const i=Vr(e,t);return Be(e,r,un(i,t,r,n))}function B8(e,t,r,n){const i=Vr(e,t);return Be(e,r,un(i,t,r,n))}function R8(e,t,r,n){return wr(n)&&wr(e.items)?Be(e,r,e.items.map((i,o)=>un(i,t,`${r}/${o}`,n[o]))):Be(e,r,n)}function L8(e,t,r,n){for(const i of e.anyOf){if(!Yu(i,t,n))continue;const o=un(i,t,r,n);return Be(e,r,o)}return Be(e,r,n)}function un(e,t,r,n){const i=ql(e,t),o=e;switch(e[P]){case"Array":return S8(o,i,r,n);case"Import":return T8(o,i,r,n);case"Intersect":return N8(o,i,r,n);case"Not":return P8(o,i,r,n);case"Object":return I8(o,i,r,n);case"Record":return M8(o,i,r,n);case"Ref":return O8(o,i,r,n);case"Symbol":return Be(o,r,n);case"This":return B8(o,i,r,n);case"Tuple":return R8(o,i,r,n);case"Union":return L8(o,i,r,n);default:return Be(o,r,n)}}function j8(e,t,r){return un(e,t,"",r)}class U8 extends St{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class _8 extends St{constructor(t,r,n,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=i}}function kt(e,t,r){try{return Ne(e)?e[Qt].Encode(r):r}catch(n){throw new _8(e,t,r,n)}}function V8(e,t,r,n){const i=kt(e,r,n);return wr(i)?i.map((o,s)=>on(e.items,t,`${r}/${s}`,o)):i}function W8(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=kt(e,r,n);return on(o,[...t,...i],r,s)}function z8(e,t,r,n){const i=kt(e,r,n);if(!bn(n)||ib(n))return i;const o=Tb(e),s=o.map(d=>d[0]),a={...i};for(const[d,f]of o)d in a&&(a[d]=on(f,t,`${r}/${d}`,a[d]));if(!Ne(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const d of u)s.includes(d)||(c[d]=kt(l,`${r}/${d}`,c[d]));return c}function q8(e,t,r,n){return kt(e.not,r,kt(e,r,n))}function K8(e,t,r,n){const i=kt(e,r,n);if(!bn(i))return i;const o=io(e),s={...i};for(const c of o)tb(s,c)&&(mi(s[c])&&(!Ma(e.properties[c])||Qe.IsExactOptionalProperty(s,c))||(s[c]=on(e.properties[c],t,`${r}/${c}`,s[c])));if(!zt(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=kt(u,`${r}/${c}`,l[c]));return l}function G8(e,t,r,n){const i=kt(e,r,n);if(!bn(n))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...i};for(const d of Object.getOwnPropertyNames(n))s.test(d)&&(a[d]=on(e.patternProperties[o],t,`${r}/${d}`,a[d]));if(!zt(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const d of u)s.test(d)||(c[d]=kt(l,`${r}/${d}`,c[d]));return c}function Z8(e,t,r,n){const i=Vr(e,t),o=on(i,t,r,n);return kt(e,r,o)}function H8(e,t,r,n){const i=Vr(e,t),o=on(i,t,r,n);return kt(e,r,o)}function J8(e,t,r,n){const i=kt(e,r,n);return wr(e.items)?e.items.map((o,s)=>on(o,t,`${r}/${s}`,i[s])):[]}function Y8(e,t,r,n){for(const i of e.anyOf){if(!Yu(i,t,n))continue;const o=on(i,t,r,n);return kt(e,r,o)}for(const i of e.anyOf){const o=on(i,t,r,n);if(Yu(e,t,o))return kt(e,r,o)}return kt(e,r,n)}function on(e,t,r,n){const i=ql(e,t),o=e;switch(e[P]){case"Array":return V8(o,i,r,n);case"Import":return W8(o,i,r,n);case"Intersect":return z8(o,i,r,n);case"Not":return q8(o,i,r,n);case"Object":return K8(o,i,r,n);case"Record":return G8(o,i,r,n);case"Ref":return Z8(o,i,r,n);case"This":return H8(o,i,r,n);case"Tuple":return J8(o,i,r,n);case"Union":return Y8(o,i,r,n);default:return kt(o,r,n)}}function X8(e,t,r){return on(e,t,"",r)}function Q8(e,t){return Ne(e)||pt(e.items,t)}function eS(e,t){return Ne(e)||pt(e.items,t)}function tS(e,t){return Ne(e)||pt(e.returns,t)||e.parameters.some(r=>pt(r,t))}function rS(e,t){return Ne(e)||pt(e.returns,t)||e.parameters.some(r=>pt(r,t))}function nS(e,t){return Ne(e)||Ne(e.unevaluatedProperties)||e.allOf.some(r=>pt(r,t))}function iS(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),n=e.$defs[e.$ref];return Ne(e)||pt(n,[...r,...t])}function oS(e,t){return Ne(e)||pt(e.items,t)}function sS(e,t){return Ne(e)||pt(e.not,t)}function aS(e,t){return Ne(e)||Object.values(e.properties).some(r=>pt(r,t))||zt(e.additionalProperties)&&pt(e.additionalProperties,t)}function uS(e,t){return Ne(e)||pt(e.item,t)}function lS(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return Ne(e)||pt(n,t)||zt(e.additionalProperties)&&Ne(e.additionalProperties)}function cS(e,t){return Ne(e)?!0:pt(Vr(e,t),t)}function dS(e,t){return Ne(e)?!0:pt(Vr(e,t),t)}function fS(e,t){return Ne(e)||!mi(e.items)&&e.items.some(r=>pt(r,t))}function mS(e,t){return Ne(e)||e.anyOf.some(r=>pt(r,t))}function pt(e,t){const r=ql(e,t),n=e;if(e.$id&&Pd.has(e.$id))return!1;switch(e.$id&&Pd.add(e.$id),e[P]){case"Array":return Q8(n,r);case"AsyncIterator":return eS(n,r);case"Constructor":return tS(n,r);case"Function":return rS(n,r);case"Import":return iS(n,r);case"Intersect":return nS(n,r);case"Iterator":return oS(n,r);case"Not":return sS(n,r);case"Object":return aS(n,r);case"Promise":return uS(n,r);case"Record":return lS(n,r);case"Ref":return cS(n,r);case"This":return dS(n,r);case"Tuple":return fS(n,r);case"Union":return mS(n,r);default:return Ne(e)}}const Pd=new Set;function hS(e,t){return Pd.clear(),pt(e,t)}class pS{constructor(t,r,n,i){this.schema=t,this.references=r,this.checkFunc=n,this.code=i,this.hasTransform=hS(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return C8(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new k8(this.schema,t,this.Errors(t).First());return this.hasTransform?j8(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?X8(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new U8(this.schema,t,this.Errors(t).First());return r}}var Nn;(function(e){function t(o){return o===36}e.DollarSign=t;function r(o){return o===95}e.IsUnderscore=r;function n(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=n;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(Nn||(Nn={}));var Xu;(function(e){function t(o){return o.length===0?!1:Nn.IsNumeric(o.charCodeAt(0))}function r(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const a=o.charCodeAt(s);if(!(Nn.IsAlpha(a)||Nn.IsNumeric(a)||Nn.DollarSign(a)||Nn.IsUnderscore(a)))return!1}return!0}function n(o){return o.replace(/'/g,"\\'")}function i(o,s){return r(s)?`${o}.${s}`:`${o}['${n(s)}']`}e.Encode=i})(Xu||(Xu={}));var Id;(function(e){function t(r){const n=[];for(let i=0;i<r.length;i++){const o=r.charCodeAt(i);Nn.IsNumeric(o)||Nn.IsAlpha(o)?n.push(r.charAt(i)):n.push(`_${o}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(Id||(Id={}));var Md;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(Md||(Md={}));class gS extends St{constructor(t){super("Unknown type"),this.schema=t}}class hp extends St{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Ni;(function(e){function t(s,a,u){return Qe.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${Xu.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function r(s){return Qe.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return Qe.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function i(s){return Qe.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return Qe.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(Ni||(Ni={}));var Hs;(function(e){function t(y){return y[P]==="Any"||y[P]==="Unknown"}function*r(y,B,w){yield"true"}function*n(y,B,w){yield"true"}function*i(y,B,w){yield`Array.isArray(${w})`;const[K,_]=[qa("value","any"),qa("acc","number")];re(y.maxItems)&&(yield`${w}.length <= ${y.maxItems}`),re(y.minItems)&&(yield`${w}.length >= ${y.minItems}`);const W=ar(y.items,B,"value");if(yield`${w}.every((${K}) => ${W})`,We(y.contains)||re(y.minContains)||re(y.maxContains)){const Fe=We(y.contains)?y.contains:qe(),Kt=ar(Fe,B,"value"),wn=re(y.minContains)?[`(count >= ${y.minContains})`]:[],qr=re(y.maxContains)?[`(count <= ${y.maxContains})`]:[],ln=`const count = value.reduce((${_}, ${K}) => ${Kt} ? acc + 1 : acc, 0)`,Ka=["(count > 0)",...wn,...qr].join(" && ");yield`((${K}) => { ${ln}; return ${Ka}})(${w})`}y.uniqueItems===!0&&(yield`((${K}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${w})`)}function*o(y,B,w){yield`(typeof value === 'object' && Symbol.asyncIterator in ${w})`}function*s(y,B,w){yield`(typeof ${w} === 'bigint')`,Sn(y.exclusiveMaximum)&&(yield`${w} < BigInt(${y.exclusiveMaximum})`),Sn(y.exclusiveMinimum)&&(yield`${w} > BigInt(${y.exclusiveMinimum})`),Sn(y.maximum)&&(yield`${w} <= BigInt(${y.maximum})`),Sn(y.minimum)&&(yield`${w} >= BigInt(${y.minimum})`),Sn(y.multipleOf)&&(yield`(${w} % BigInt(${y.multipleOf})) === 0`)}function*a(y,B,w){yield`(typeof ${w} === 'boolean')`}function*u(y,B,w){yield*Cr(y.returns,B,`${w}.prototype`)}function*l(y,B,w){yield`(${w} instanceof Date) && Number.isFinite(${w}.getTime())`,re(y.exclusiveMaximumTimestamp)&&(yield`${w}.getTime() < ${y.exclusiveMaximumTimestamp}`),re(y.exclusiveMinimumTimestamp)&&(yield`${w}.getTime() > ${y.exclusiveMinimumTimestamp}`),re(y.maximumTimestamp)&&(yield`${w}.getTime() <= ${y.maximumTimestamp}`),re(y.minimumTimestamp)&&(yield`${w}.getTime() >= ${y.minimumTimestamp}`),re(y.multipleOfTimestamp)&&(yield`(${w}.getTime() % ${y.multipleOfTimestamp}) === 0`)}function*c(y,B,w){yield`(typeof ${w} === 'function')`}function*d(y,B,w){const K=globalThis.Object.getOwnPropertyNames(y.$defs).reduce((_,W)=>[..._,y.$defs[W]],[]);yield*Cr(bs(y.$ref),[...B,...K],w)}function*f(y,B,w){yield`Number.isInteger(${w})`,re(y.exclusiveMaximum)&&(yield`${w} < ${y.exclusiveMaximum}`),re(y.exclusiveMinimum)&&(yield`${w} > ${y.exclusiveMinimum}`),re(y.maximum)&&(yield`${w} <= ${y.maximum}`),re(y.minimum)&&(yield`${w} >= ${y.minimum}`),re(y.multipleOf)&&(yield`(${w} % ${y.multipleOf}) === 0`)}function*m(y,B,w){const K=y.allOf.map(_=>ar(_,B,w)).join(" && ");if(y.unevaluatedProperties===!1){const _=Kn(`${new RegExp(Ho(y))};`),W=`Object.getOwnPropertyNames(${w}).every(key => ${_}.test(key))`;yield`(${K} && ${W})`}else if(We(y.unevaluatedProperties)){const _=Kn(`${new RegExp(Ho(y))};`),W=`Object.getOwnPropertyNames(${w}).every(key => ${_}.test(key) || ${ar(y.unevaluatedProperties,B,`${w}[key]`)})`;yield`(${K} && ${W})`}else yield`(${K})`}function*D(y,B,w){yield`(typeof value === 'object' && Symbol.iterator in ${w})`}function*v(y,B,w){typeof y.const=="number"||typeof y.const=="boolean"?yield`(${w} === ${y.const})`:yield`(${w} === '${Md.Escape(y.const)}')`}function*C(y,B,w){yield"false"}function*k(y,B,w){yield`(!${ar(y.not,B,w)})`}function*N(y,B,w){yield`(${w} === null)`}function*j(y,B,w){yield Ni.IsNumberLike(w),re(y.exclusiveMaximum)&&(yield`${w} < ${y.exclusiveMaximum}`),re(y.exclusiveMinimum)&&(yield`${w} > ${y.exclusiveMinimum}`),re(y.maximum)&&(yield`${w} <= ${y.maximum}`),re(y.minimum)&&(yield`${w} >= ${y.minimum}`),re(y.multipleOf)&&(yield`(${w} % ${y.multipleOf}) === 0`)}function*q(y,B,w){yield Ni.IsObjectLike(w),re(y.minProperties)&&(yield`Object.getOwnPropertyNames(${w}).length >= ${y.minProperties}`),re(y.maxProperties)&&(yield`Object.getOwnPropertyNames(${w}).length <= ${y.maxProperties}`);const K=Object.getOwnPropertyNames(y.properties);for(const _ of K){const W=Xu.Encode(w,_),Fe=y.properties[_];if(y.required&&y.required.includes(_))yield*Cr(Fe,B,W),(vs(Fe)||t(Fe))&&(yield`('${_}' in ${w})`);else{const Kt=ar(Fe,B,W);yield Ni.IsExactOptionalProperty(w,_,Kt)}}if(y.additionalProperties===!1)if(y.required&&y.required.length===K.length)yield`Object.getOwnPropertyNames(${w}).length === ${K.length}`;else{const _=`[${K.map(W=>`'${W}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${w}).every(key => ${_}.includes(key))`}if(typeof y.additionalProperties=="object"){const _=ar(y.additionalProperties,B,`${w}[key]`),W=`[${K.map(Fe=>`'${Fe}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${w}).every(key => ${W}.includes(key) || ${_}))`}}function*Z(y,B,w){yield`${w} instanceof Promise`}function*Le(y,B,w){yield Ni.IsRecordLike(w),re(y.minProperties)&&(yield`Object.getOwnPropertyNames(${w}).length >= ${y.minProperties}`),re(y.maxProperties)&&(yield`Object.getOwnPropertyNames(${w}).length <= ${y.maxProperties}`);const[K,_]=Object.entries(y.patternProperties)[0],W=Kn(`${new RegExp(K)}`),Fe=ar(_,B,"value"),Kt=We(y.additionalProperties)?ar(y.additionalProperties,B,w):y.additionalProperties===!1?"false":"true",wn=`(${W}.test(key) ? ${Fe} : ${Kt})`;yield`(Object.entries(${w}).every(([key, value]) => ${wn}))`}function*Pt(y,B,w){const K=Vr(y,B);if(rt.functions.has(y.$ref))return yield`${uo(y.$ref)}(${w})`;yield*Cr(K,B,w)}function*dt(y,B,w){const K=Kn(`${new RegExp(y.source,y.flags)};`);yield`(typeof ${w} === 'string')`,re(y.maxLength)&&(yield`${w}.length <= ${y.maxLength}`),re(y.minLength)&&(yield`${w}.length >= ${y.minLength}`),yield`${K}.test(${w})`}function*Lt(y,B,w){yield`(typeof ${w} === 'string')`,re(y.maxLength)&&(yield`${w}.length <= ${y.maxLength}`),re(y.minLength)&&(yield`${w}.length >= ${y.minLength}`),y.pattern!==void 0&&(yield`${Kn(`${new RegExp(y.pattern)};`)}.test(${w})`),y.format!==void 0&&(yield`format('${y.format}', ${w})`)}function*Er(y,B,w){yield`(typeof ${w} === 'symbol')`}function*Wr(y,B,w){yield`(typeof ${w} === 'string')`,yield`${Kn(`${new RegExp(y.pattern)};`)}.test(${w})`}function*ao(y,B,w){yield`${uo(y.$ref)}(${w})`}function*Yl(y,B,w){if(yield`Array.isArray(${w})`,y.items===void 0)return yield`${w}.length === 0`;yield`(${w}.length === ${y.maxItems})`;for(let K=0;K<y.items.length;K++)yield`${ar(y.items[K],B,`${w}[${K}]`)}`}function*Ds(y,B,w){yield`${w} === undefined`}function*Va(y,B,w){yield`(${y.anyOf.map(_=>ar(_,B,w)).join(" || ")})`}function*zr(y,B,w){yield`${w} instanceof Uint8Array`,re(y.maxByteLength)&&(yield`(${w}.length <= ${y.maxByteLength})`),re(y.minByteLength)&&(yield`(${w}.length >= ${y.minByteLength})`)}function*Wa(y,B,w){yield"true"}function*Xl(y,B,w){yield Ni.IsVoidLike(w)}function*za(y,B,w){const K=rt.instances.size;rt.instances.set(K,y),yield`kind('${y[P]}', ${K}, ${w})`}function*Cr(y,B,w,K=!0){const _=hr(y.$id)?[...B,y]:B,W=y;if(K&&hr(y.$id)){const Fe=uo(y.$id);if(rt.functions.has(Fe))return yield`${Fe}(${w})`;{rt.functions.set(Fe,"<deferred>");const Kt=$i(Fe,y,B,"value",!1);return rt.functions.set(Fe,Kt),yield`${Fe}(${w})`}}switch(W[P]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*i(W,_,w);case"AsyncIterator":return yield*o(W,_,w);case"BigInt":return yield*s(W,_,w);case"Boolean":return yield*a(W,_,w);case"Constructor":return yield*u(W,_,w);case"Date":return yield*l(W,_,w);case"Function":return yield*c(W,_,w);case"Import":return yield*d(W,_,w);case"Integer":return yield*f(W,_,w);case"Intersect":return yield*m(W,_,w);case"Iterator":return yield*D(W,_,w);case"Literal":return yield*v(W,_,w);case"Never":return yield*C();case"Not":return yield*k(W,_,w);case"Null":return yield*N(W,_,w);case"Number":return yield*j(W,_,w);case"Object":return yield*q(W,_,w);case"Promise":return yield*Z(W,_,w);case"Record":return yield*Le(W,_,w);case"Ref":return yield*Pt(W,_,w);case"RegExp":return yield*dt(W,_,w);case"String":return yield*Lt(W,_,w);case"Symbol":return yield*Er(W,_,w);case"TemplateLiteral":return yield*Wr(W,_,w);case"This":return yield*ao(W,_,w);case"Tuple":return yield*Yl(W,_,w);case"Undefined":return yield*Ds(W,_,w);case"Union":return yield*Va(W,_,w);case"Uint8Array":return yield*zr(W,_,w);case"Unknown":return yield*Wa();case"Void":return yield*Xl(W,_,w);default:if(!di(W[P]))throw new gS(y);return yield*za(W,_,w)}}const rt={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function ar(y,B,w,K=!0){return`(${[...Cr(y,B,w,K)].join(" && ")})`}function uo(y){return`check_${Id.Encode(y)}`}function Kn(y){const B=`local_${rt.variables.size}`;return rt.variables.set(B,`const ${B} = ${y}`),B}function $i(y,B,w,K,_=!0){const[W,Fe]=[`
`,ln=>"".padStart(ln," ")],Kt=qa("value","any"),wn=Rm("boolean"),qr=[...Cr(B,w,K,_)].map(ln=>`${Fe(4)}${ln}`).join(` &&${W}`);return`function ${y}(${Kt})${wn} {${W}${Fe(2)}return (${W}${qr}${W}${Fe(2)})
}`}function qa(y,B){const w=rt.language==="typescript"?`: ${B}`:"";return`${y}${w}`}function Rm(y){return rt.language==="typescript"?`: ${y}`:""}function n2(y,B,w){const K=$i("check",y,B,"value"),_=qa("value","any"),W=Rm("boolean"),Fe=[...rt.functions.values()],Kt=[...rt.variables.values()],wn=hr(y.$id)?`return function check(${_})${W} {
  return ${uo(y.$id)}(value)
}`:`return ${K}`;return[...Kt,...Fe,wn].join(`
`)}function Lm(...y){const B={language:"javascript"},[w,K,_]=y.length===2&&wr(y[1])?[y[0],y[1],B]:y.length===2&&!wr(y[1])?[y[0],[],y[1]]:y.length===3?[y[0],y[1],y[2]]:y.length===1?[y[0],[],B]:[null,[],B];if(rt.language=_.language,rt.variables.clear(),rt.functions.clear(),rt.instances.clear(),!We(w))throw new hp(w);for(const W of K)if(!We(W))throw new hp(W);return n2(w,K)}e.Code=Lm;function i2(y,B=[]){const w=Lm(y,B,{language:"javascript"}),K=globalThis.Function("kind","format","hash",w),_=new Map(rt.instances);function W(qr,ln,Ka){if(!di(qr)||!_.has(ln))return!1;const o2=Yf(qr),s2=_.get(ln);return o2(s2,Ka)}function Fe(qr,ln){return Gf(qr)?Zf(qr)(ln):!1}function Kt(qr){return vm(qr)}const wn=K(W,Fe,Kt);return new pS(y,B,wn,w)}e.Compile=i2})(Hs||(Hs={}));const Od={};function nw(e,t){e in Od||(Od[e]=t)}let pp=!1;function yS(){pp||(pp=!0,WF(e=>(Od[e.schema[P]]||Yb)(e)))}const Bd=Symbol.for("object-shape-tester.shape-identifier");function De(e){if(yS(),$m(e))return e;const t=Rd(e),r=Ti(t,!1),n=Ti(t,!0),i={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:Hs.Compile(t),$_compiledSchemaNoExtraKeys:Hs.Compile(r),$_compiledSchemaExtraKeys:Hs.Compile(n)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[Bd]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function $m(e){return F.hasKey(e,Bd)&&!!e[Bd]}function Dm(e){return F.hasKey(e,P)}function Ti(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>Ti(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>Ti(n,t))),Dm(e.items)?r.items=Ti(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>Ti(n,t))),F.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([i,o])=>{n[i]=Ti(o,t)}),r.properties=n}return r.additionalProperties=t,r}function Rd(e){if(Dm(e))return e;if($m(e))return e.$_schema;if(F.isFunction(e))return Se.Function([],Se.Any(),{default:e});if(F.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,i])=>{const o=Rd(i);r[n]=o,t[n]=o.default}),Se.Object(r,{default:t})}else{if(F.isArray(e))return Se.Array(Se.Union(e.map(t=>Rd(t))),{default:[]});if(F.isPrimitive(e)){if(F.isString(e))return Se.String({default:e});if(F.isNumber(e))return Se.Number({default:e});if(F.isBoolean(e))return Se.Boolean({default:e});if(F.isSymbol(e))return Se.Symbol({default:e});if(F.isNull(e))return Se.Null({default:null});if(F.isUndefined(e))return Se.Undefined({default:void 0});if(F.isBigInt(e))return Se.BigInt({default:e});Lr.tsType(e).equals(),Lr.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${g(e)}`)}}function bS({checkValue:e,default:t,name:r}){return di(r)||Jf(r,(n,i)=>e(i)),(n=t)=>De(Se.Unsafe({[P]:r,default:n}))}function Yo(e,t){const r=Tr(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return De(Se.Union(r.map(n=>Se.Literal(n)),{default:t??r[0]}))}function ue(e){return F.isSymbol(e)?wS(e):De(Se.Const(e,{default:e}))}const cu="ExactSymbol";function wS(e){return di(cu)||Jf(cu,(t,r)=>r===t.symbol),nw(cu,({schema:t})=>`Expected symbol ${t.symbol?.description?lD({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),De(Se.Unsafe({[P]:cu,symbol:e,default:e}))}function vS(...e){const t={},r=e.map(n=>{const i=De(n);return Object.assign(t,i.default),i.$_schema});return De(Se.Composite(r,{default:t}))}function At(e,t={}){Qe.ExactOptionalPropertyTypes=!0;const r=De(e).$_schema,n=t.alsoUndefined?Se.Union([Se.Undefined(),r]):r;return De(Se.Optional(n))}function _e(...e){let t;const r=e.map((n,i)=>{const o=De(n);return i||(t=o.default),o.$_schema});return De(Se.Union(r,{default:t}))}class $S extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(o=>iw(o)).join(`
`),i=ns(r,`Shape mismatch:
${af(n,1)}`);super(i),this.errors=t,this.failureMessage=r}}function DS(e){return e.errors.flatMap(t=>Array.from(t))}function iw(e,t=0){const r=DS(e).map(i=>iw(i,t+1)),n=[e.path,e.message].filter(F.isTruthy).join(": ")+(r.length?":":"");return[af(n,t),...r].join(`
`)}function Oi(e,t,r={}){return sw(t,r).Check(e)}function ow(e,t,r={},n){if(Oi(e,t,r))return;const i=Array.from(sw(t,r).Errors(e));if(i.length)throw new $S(i,n)}function sw(e,t){return e=xS(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function xS(e){return De(e)}function xo({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:i}=Yd(r),o=r.default??(i-n)/2+n,s=De(Se.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:i}:{maximum:i},default:o})),a=T5(()=>ow(o,s));if(a)throw ol(a,"Default range value is not within range.");return s}const Cu="recordShape";function Kl({keys:e,values:t,partial:r,additionalProperties:n}){AS();const i=aw(e),o=De(t);return De(Se.Unsafe({[P]:Cu,keysShape:i,valuesShape:o,isPartial:!!r,additionalProperties:!!n,default:ES({isPartial:!!r,keysShape:i,valuesShape:o})}))}function AS(){di(Cu)||Jf(Cu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:Oi(i,e.keysShape),a=Oi(o,e.valuesShape);return s&&a}),n=e.isPartial?!0:!gp(e.keysShape,t).length;return r&&n}),nw(Cu,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const i=Hi(Object.entries(n),([u])=>u,(u,[l,c])=>!Oi(l,r.keysShape)||!Oi(c,r.valuesShape)),o=gp(r.keysShape,n),s=i.length?["Failure at keys",i.join(",")].join(": "):"",a=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,a].filter(F.isTruthy).join(`
`)})}function gp(e,t){const r=Qu(e).filter(n=>F.isPropertyKey(n));return r.length?r.filter(n=>!F.hasKey(t,n)):[]}function ES({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=Qu(e),i=t.default;return Object.fromEntries(n.map(o=>[o,i]))}}function aw(e){return $m(e)?e:Dm(e)?De(e):F.isObject(e)?Yo(e):F.isArray(e)&&F.isLengthAtLeast(e,1)?_e(...e.map(t=>ue(t))):F.isPropertyKey(e)?De(e):De(Se.Undefined())}function Qu(e){const t=e.$_schema,r=t[P].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?ig(t.anyOf.flatMap(n=>Qu(De(n)))):["undefined","number","string","symbol"].includes(r)?[]:Qu(aw(e.default))}function CS(e){return De(Se.Unknown({default:e}))}const kS=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],xm=kS.reduce((e,t)=>(e[t]=t,e),{});Ue.defaultZone.name;const uw=xm.UTC,FS=De({hour:xo({...Ah,default:Ah.min}),minute:xo({...Eh,default:Eh.min}),second:xo({...Ch,default:Ch.min}),millisecond:xo({...kh,default:kh.min}),timezone:Yo(xm,uw)}),SS=De({year:2023,month:xo({...Fh,default:Fh.min}),day:xo({...Sh,default:Sh.min}),timezone:Yo(xm,uw)});De(vS(SS,FS));$e.Years+"",$e.Months+"",$e.Weeks+"",$e.Days+"",$e.Hours+"",$e.Minutes+"",$e.Seconds+"",$e.Milliseconds+"";De(_e({get:ue(z.Month),in:_e(ue(z.Year))},{get:ue(z.Week),in:_e(ue(z.Year),ue(z.Month))},{get:ue(z.Day),in:_e(ue(z.Year),ue(z.Month),ue(z.Week))},{get:ue(z.Hour),in:_e(ue(z.Year),ue(z.Month),ue(z.Week),ue(z.Day))},{get:ue(z.Minute),in:_e(ue(z.Year),ue(z.Month),ue(z.Week),ue(z.Day),ue(z.Hour))},{get:ue(z.Second),in:_e(ue(z.Year),ue(z.Month),ue(z.Week),ue(z.Day),ue(z.Hour),ue(z.Minute))},{get:ue(z.Millisecond),in:_e(ue(z.Year),ue(z.Month),ue(z.Week),ue(z.Day),ue(z.Hour),ue(z.Minute),ue(z.Second))}));Kl({keys:Yo($e),values:-1,partial:!0});var yp;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(yp||(yp={}));var Ld;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Ld||(Ld={}));var bp;(function(e){e.Year="year",e.Month="month",e.Day="day"})(bp||(bp={}));const NS={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};rD(NS,Tr(Ld));bS({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return TS(e)}});function TS(e){return H.fromISO(e).toUTC().toISO()===e}const PS=De({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:CS()});function Mc(e){return Oi(e,PS,{allowExtraKeys:!0})}class lw extends H1{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||If}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:IS}=jD,wp=e=>e,vp=()=>document.createComment(""),Is=(e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const o=n.insertBefore(vp(),i),s=n.insertBefore(vp(),i);r=new IS(o,s,e,e.options)}else{const o=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==s._$AU&&r._$AP(u)}if(o!==i||a){let u=r._$AA;for(;u!==o;){const l=wp(u).nextSibling;wp(n).insertBefore(u,i),u=l}}}return r},Fi=(e,t,r=e)=>(e._$AI(t,r),e),MS={},OS=(e,t=MS)=>e._$AH=t,BS=e=>e._$AH,Oc=e=>{e._$AR(),e._$AA.remove()};const Am={ATTRIBUTE:1,CHILD:2,ELEMENT:6},zn=e=>(...t)=>({_$litDirective$:e,values:t});class qn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const RS={attribute:!0,type:String,converter:_u,reflect:!1,hasChanged:$f},LS=(e=RS,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function jS(e){return(t,r)=>typeof r=="object"?LS(e,t,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}const qt=zn(class extends qn{constructor(e){if(super(e),e.type!==Am.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return gr}});const Ye=e=>e??Y;function US(e,t,r){return e?t(e):r?.(e)}class _S extends Ks{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function VS(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const o=e.map(a=>[a]);return o.length||(o[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(o[a]=[])}),t.forEach(a=>{const u=o[a.index];u&&u.splice(0,0,...a.values)}),o.flat()}function jd(e){return F.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Em(e){return F.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function cw(e){return Hi(e,t=>{if(jd(t))return t.definition;if(Em(t))return t.tagInterpolationKey||t},F.isTruthy)}const dw=new WeakMap;function WS(e,t){const r=cw(t);return fw(dw,[e,...r]).value?.template}function zS(e,t,r){const n=cw(t);return hw(dw,[e,...n],r)}function fw(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=mw(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?fw(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function mw(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function hw(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=mw(e,t,n);if(!o)return{result:!1,reason:s};const a=i??{nested:void 0,template:void 0};if(i||e.set(o,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),hw(u,t,r,n+1)}function pw(e,t,r){const n=WS(e,t),i=n??r();if(!n){const a=zS(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const o=i.valuesTransform(t),s=VS(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function gw(e,t,r,n){const i=[],o=[],s=[],a=[];return e.forEach((l,c)=>{const d=i.length-1,f=i[d],m=c-1,D=t[m];n&&n(l);let v,C=[];if(typeof f=="string"&&(v=r(f,l,D),v)){i[d]=[f,v.replacement].join(""),s.push(m);const N=v.getExtraValues;C=N?N(D):[],C.length&&N?(i[d]+=" ",C.forEach((j,q)=>{q&&i.push(" ")}),a.push(j=>{const q=j[m],Z=N(q);return{index:m,values:Z}}),i.push(l)):i[d]+=l}v||i.push(l);const k=e.raw[c];v?(o[d]=[o[d],v.replacement,k].join(""),C.length&&C.forEach(()=>{o.push("")})):o.push(k)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function qS(...[e,t,r]){if(Em(r))return{replacement:r.tagName,getExtraValues:void 0}}function KS(e,t){return gw(e,t,qS)}function $(e,...t){const r=pw(e,t,()=>KS(e,t));return xu(r.strings,...r.values)}const GS={allowPolymorphicState:!1,errorHandler:void 0};function yw(e,t){const r=e.instanceState;Ve(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Ve(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class ZS extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function Cm(){return e=>class extends ZS{static type=e;_type=e;constructor(t){super(e,t)}}}function et(){return Cm()}function HS(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=Cm()([e,n].join("-"));return r[n]=i,r},{}):{}}function JS(e){return e?pr(e,t=>t):{}}function bw(e,t){t in e||jS()(e,t)}function YS(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function $p(e,t){const r=e;function n(s){t?YS(s,e,e.tagName):bw(e,s)}function i(s,a){return n(a),r[a]}return new Proxy({},{get:i,set(s,a,u){n(a);const l=r[a];function c(f){s[a]=f,r[a]=f}const d=e.observablePropertyListenerMap[a];if(l!==u&&Mc(l)&&d&&l.removeListener(d),Mc(u))if(d)u.listen(!1,d);else{let f=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=f,u.listen(!1,f)}else Mc(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return i(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function Dp(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function xp(e,t,r){return r?hl(r,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function XS({hostClassNames:e,cssVars:t}){return{hostClasses:pr(e,(r,n)=>({name:Ce(n),selector:Ce(`:host(.${n})`)})),cssVars:t}}function QS({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&Ve(t).forEach(o=>{const s=t[o],a=r[o];typeof s=="function"&&(s({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function e9({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:i}){function o(a){Ve(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:r,slotNames:n,testIds:i,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function so(...e){return Lr.isEmpty(e),t=>{const r=t;if(!F.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return t9({...r,options:{...r.options}})}}function t9(e){if(!F.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!F.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...GS,...e.options},r=HS(e.tagName,e.events),n=JS(e.hostClasses);e.hostClasses&&Dp(e.tagName,e.hostClasses),e.cssVars&&Dp(e.tagName,e.cssVars);const i=e.cssVars?gn(e.cssVars):{},o=xp(e.tagName,"slot",e.slotNames),s=xp(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(XS({hostClassNames:n,cssVars:i})):e.styles||$``,u=e.render;function l(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:d}}const c=class extends _S{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return e9({element:this,eventsMap:r,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=l;static events=r;static render=u;static hostClasses=n;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const d=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(d);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");Ve(m).forEach(D=>{bw(this,D),this.instanceState[D]=m[D]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(d)instanceof Promise))throw new TypeError("init cannot be asynchronous");const f=u(d);if(f instanceof Promise)throw new TypeError("render cannot be asynchronous");return QS({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},f}catch(d){const f=ol(d,`Failed to render ${e.tagName}`);return console.error(f),this._lastRenderError=f,t.errorHandler?.(f),$t(f)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const d=this.createRenderParams();if(e.init(d)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(d=>{F.hasKey(d,"destroy")&&F.isFunction(d.destroy)&&d.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const d=this.createRenderParams();if(e.cleanup(d)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(d){yw(this,d)}observablePropertyListenerMap={};instanceInputs=$p(this,!1);instanceState=$p(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:sD(e.tagName,{firstLetterCase:jn.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}class r9 extends $o{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function n9(e){return new r9(e)}const Ap=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},i9=zn(class extends qn{constructor(e){if(super(e),e.type!==Am.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],o=[];let s=0;for(const a of e)i[s]=n?n(a,s):s,o[s]=r(a,s),s++;return{values:o,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=BS(e),{values:o,keys:s}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??=[],u=[];let l,c,d=0,f=i.length-1,m=0,D=o.length-1;for(;d<=f&&m<=D;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(a[d]===s[m])u[m]=Fi(i[d],o[m]),d++,m++;else if(a[f]===s[D])u[D]=Fi(i[f],o[D]),f--,D--;else if(a[d]===s[D])u[D]=Fi(i[d],o[D]),Is(e,u[D+1],i[d]),d++,D--;else if(a[f]===s[m])u[m]=Fi(i[f],o[m]),Is(e,i[d],i[f]),f--,m++;else if(l===void 0&&(l=Ap(s,m,D),c=Ap(a,d,f)),l.has(a[d]))if(l.has(a[f])){const v=c.get(s[m]),C=v!==void 0?i[v]:null;if(C===null){const k=Is(e,i[d]);Fi(k,o[m]),u[m]=k}else u[m]=Fi(C,o[m]),Is(e,i[d],C),i[v]=null;m++}else Oc(i[f]),f--;else Oc(i[d]),d++;for(;m<=D;){const v=Is(e,u[D+1]);Fi(v,o[m]),u[m++]=v}for(;d<=f;){const v=i[d++];v!==null&&Oc(v)}return this.ut=s,OS(e,u),gr}}),o9=i9;function Ua(e,t){return ya(e,t),e.element}function s9(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ya(e,t){const r=s9(e),n=r?`: in ${r}`:"";if(e.type!==Am.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function a9(e,t){return zn(class extends qn{element;constructor(r){super(r),this.element=hn.instanceOf(Ua(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),gr}})}const Mn=a9("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const i=us(r,"allAttributesApplied",()=>new Set);Ve(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===Y?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function u9(e){const t=zn(class extends qn{element;constructor(r){super(r),this.element=Ua(r,e)}render(r){return this.element.setAttribute(e,r),gr}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function V(e,t){return l9(e,t)}const l9=zn(class extends qn{element;lastListenerMetaData;constructor(e){super(e),this.element=Ua(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),gr}});function c9(e){return V("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const Ep="onDomCreated",qi=zn(class extends qn{element;constructor(e){super(e),ya(e,Ep)}update(e,[t]){ya(e,Ep);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Cp="onResize",ww=zn(class extends qn{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&d9(this.element,this.callback,e)});callback;constructor(e){super(e),ya(e,Cp)}update(e,[t]){ya(e,Cp),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function d9(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function tr(e,t,r){return US(e,()=>t,()=>r)}const{attributeDirective:f9}=u9("data-test-id"),Bn=f9;function vw(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>i=>(t(i),so(...n)(r(i)))}function m9(e,t){return h9(void 0,e)}const h9=zn(class extends qn{element;constructor(e){super(e),this.element=Ua(e,"assign")}render(e,t){return yw(this.element,t),gr}}),p9={};function g9(e,t){return t.map((r,n)=>{const i=e[n],o=e[n+1];if(i&&o){const{shouldHaveTagNameHere:s}=$w(i,o);if(s&&F.isString(r))return{tagName:r,tagInterpolationKey:us(p9,r,()=>({tagName:r}))}}return r})}function $w(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function y9(...[e,t,r]){const n=jd(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:o}=$w(e,t),s=Em(n);if(s&&o&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!o||!s?void 0:{replacement:n.tagName,getExtraValues(u){const l=jd(u)?u.inputs:void 0;return[i&&l?m9(l):void 0].filter(F.isTruthy)}}}function b9(e){}function w9(e){return gw(e.strings,e.values,y9,b9)}function h(e,...t){const r=g9(e,t),n=PD(e,...r),i=pw(e,r,()=>w9(n));return{...n,strings:i.strings,values:i.values}}function Ud(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],o=(t??[""]).map((s,a)=>{const u=v9(s,n[a]);return`${s}${u}`});return Xy(o.join(""))}function v9(e,t){return t._$litType$!=null||t._$litDirective$!=null?Ud(t):Array.isArray(t)?t.map(n=>Ud(n)).join(""):e.endsWith("=")?`"${t}"`:t}function Dw(e){return pr(e,(t,r)=>r instanceof ke?Ce(r.toString({format:"hex"})):Dw(r))}const $9="dodgerblue";function _d(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Bc({background:e,foreground:t}){return{background:e??new ke(_d(t)),foreground:t??new ke(_d(e))}}var el;(function(e){e.Dark="dark",e.Light="light"})(el||(el={}));function D9(e){return e==="black"?"white":"black"}const x9={black:{foregroundFaint1:new ke("#ccc"),foregroundFaint2:new ke("#eee")},white:{foregroundFaint1:new ke("#ccc"),foregroundFaint2:new ke("#eee")}},A9={black:{backgroundFaint1:new ke("#666"),backgroundFaint2:new ke("#444")},white:{backgroundFaint1:new ke("#ccc"),backgroundFaint2:new ke("#fafafa")}};function kp({themeColor:e=$9,themeStyle:t=el.Light}={}){const r=new ke(e),n=new ke(t===el.Dark?"black":"white"),i=_d(n),o=new ke(i),s={nav:{hover:Bc({background:r.clone().set({"hsl.l":93})}),active:Bc({background:r.clone().set({"hsl.l":90})}),selected:Bc({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...A9[D9(i)],foreground:o,...x9[i]}};return Dw(s)}var dn;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(dn||(dn={}));async function Vd(e=1){const t=new Iu;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function E9(e,t){return{element:e,children:xw(e)}}function xw(e,t,r){return C9(e).map(n=>{const i=xw(n);return{element:n,children:i}})}function C9(e){return[...e.children,...e.shadowRoot?.children??[]]}function Rc(e){return e.matches(":focus")}function km(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:km(t)}function Aw(e,t){if(t(e))return e;const r=km(e);if(r)return Aw(r,t)}async function k9(e){return F9(e,1)}async function F9(e,t){return new Promise(r=>{new IntersectionObserver((i,o)=>{Lr.isLengthAtLeast(i,1),o.disconnect(),r(i[0].intersectionRatio>=t)}).observe(e)})}function Bi(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,o=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return n}function S9(e){const t=km(e);return t&&Aw(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function N9({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const u=o.codePointAt(s);for(;a<r;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const T9=Li(32);function ku(e){return e.join(T9)}function Ew(e){if(!e.length)return[];const t=ku(e),r=Ew(e.slice(0,-1));return[t,...r]}const P9=["error","errors"];function I9(e){return P9.includes(e)}function M9({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(s=>(n(s),ku(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&I9(t),s=ku(i.fullUrlBreadcrumbs);if(N9({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(u=>F.isString(u)?u:Ud(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||r[s]){const u=Ew(i.fullUrlBreadcrumbs);n(i),u.forEach(l=>r[l]=!0)}else r[s]=!1}),e.filter(i=>{const o=ku(i.fullUrlBreadcrumbs),s=r[o];if(!F.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Fm extends Error{name="SpaRouterError"}class Fp extends Fm{name="GlobalUrlEventsConsolidationError"}class O9 extends Fm{name="SanitizationDepthMaxed"}De({paths:[""],search:At(_e(void 0,Kl({keys:"",values:[""]}))),hash:At(_e(void 0,""))});const B9=De({basePath:At("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:At(1,{alsoUndefined:!0}),disableWarnings:At(!1,{alsoUndefined:!0}),isPaused:At(!1,{alsoUndefined:!0})}),Lc="://";function Sm(...e){const t=e.join("/"),[r,n=""]=t.includes(Lc)?t.split(Lc):["",t];let i=!1;const o=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(i)return s;const c=l[u+1];let d=a;const f=c?.startsWith("?"),m=!a.includes("?")&&f,D=c==="?";if(f||m){i=!0;let v=!1;const C=l.slice(u+2).reduce((k,N)=>(N.includes("#")&&(v=!0),v?k.concat(N):[k,N].join("&")),"");d=[a,c,D?No({value:C,prefix:"&"}):C].join("")}return s.concat(d)},[]);return[r,r?Lc:"",o.join("/")].join("")}var Xo;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Xo||(Xo={}));var Qo;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Qo||(Qo={}));const R9=De({encoding:At(_e(void 0,Yo(Xo))),searchParamStrategy:At(_e(void 0,Yo(Qo)))});function du(e,t){return e.map(r=>{if(r!=null)return Po(String(r),t)}).filter(r=>r!=null)}function Po(e,t){return t?.encoding===Xo.Decode?decodeURIComponent(e):t?.encoding===Xo.Encode?encodeURIComponent(e):e}const L9=De(Kl({keys:"",values:[""]}));function j9(e,t,r){const n=r?.searchParamStrategy===Qo.Clear?{}:pr(e,(s,a)=>S5(a)),i=pr(t,(s,a)=>{if(r?.searchParamStrategy===Qo.Append){const u=n[s],l=F.isArray(u)?u:[u];if(a){const c=F.isArray(a)?a:[a];return du([...l,...c],r)}else return du(l,r)}else return F.isArray(a)?du(a,r):a?du([a],r):void 0});return pl({...n,...i},(s,a)=>!!a)}function Cw(e,t){return F.isString(e)&&!e.includes("?")?{}:(F.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...a]=eD(o,"=");return[s,a.length?a.join("="):void 0]}).reduce((o,[s,a])=>{const u=kw({options:t,key:s,value:a}),l=us(o,u.key,()=>[]);return a!=null&&l.push(u.value),o},{})}function U9(e){if(e!=null)return F.isArray(e)?[...e]:e===""?[]:[e]}function _9(e,t){const r=Hi(Object.entries(e),([n,i])=>{const o=U9(i);return o?.length?o.map(s=>{const a=kw({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?rr({value:r.join("&"),prefix:"?"}):""}function kw({options:e,key:t,value:r}){return{key:Po(t,e),value:Po(String(r),e)}}function Fw({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:o,search:s,username:a}){return[o?o+"://":"",a?a+":":"",r?r+"@":"",Gl({hostname:t,port:i}),Nm({hash:e,pathname:n,search:s})].join("")}function Sw({pathname:e}){const t=No({value:e,prefix:"/"});return t?t.split("/"):[]}function Nm({hash:e,pathname:t,search:r}){return[rr({value:t,prefix:"/"}),r?rr({value:r,prefix:"?"}):"",e?rr({value:e,prefix:"#"}):""].join("")}function Gl({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function Nw({hostname:e,port:t,protocol:r}){return[r,Gl({hostname:e,port:t})].filter(F.isTruthy).join("://")}function Io(e,t){const r=F.isString(e)?No({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?rr({value:Po(n,t),prefix:"#"}):"",o=r.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),a=s?rr({value:Po(s,t),prefix:"?"}):"",u=o.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=c.replace(/@.*/,""),f=c.replace(/^[^@]*@/,""),m=d!==f,[D,...v]=m?d.split(":").reverse():[],C=v.toReversed().join("").replace(/[/:]/g,"")||"",k=D?.replace(/[/:]/g,"")||"",N=Q5(f.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),j=N[0]?.endsWith("]")?"":N[1]===":"&&N[0]||"",Z=f.replace(new RegExp(`:${j}($|/)`),"$1").replace(/\/.*/,""),Le=f.replace(/^[^/]*(\/|$)/,"$1"),Pt=Po(Le.replace(/^[^/]*(?:\/|$)/,"/"),t),dt=Gl({hostname:Z,port:j}),Lt=Nw({hostname:Z,port:j,protocol:l}),Er=Fw({hash:i,hostname:Z,password:k,pathname:Pt,port:j,protocol:l,search:a,username:C}),Wr=Cw(a),ao=Sw({pathname:Pt});return{fullPath:Nm({hash:i,pathname:Pt,search:a}),hash:i,host:dt,hostname:Z,href:Er,origin:Lt,password:k,pathname:Pt,paths:ao,port:j,protocol:l,search:a,searchParams:Wr,username:C}}De({hash:At(_e(void 0,"")),search:At(_e(void 0,"",Kl({keys:"",values:_e(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:At(_e(void 0,"")),pathname:At(_e(void 0,"")),paths:At(_e(void 0,[""])),protocol:At(_e(void 0,"")),username:At(_e(void 0,"")),password:At(_e(void 0,"")),port:At(_e(void 0,"",-1))});function V9(e,t,r){const n=!!r,i=t==null||Oi(t,R9,{allowExtraKeys:!1}),o=i?Io(""):F.instanceOf(e,URL)||F.isString(e)?Io(e):e,s=i?e:t,a=F.isString(s)&&s.startsWith("."),u=F.isString(s)||F.instanceOf(s,URL)?pl(Io(s),(v,C)=>F.isTruthy(C)):s,l=n?r:i?t:void 0,c=pr(o,(v,C)=>{if(!F.hasKey(u,v))return C;const k=u[v];return F.isNumber(k)?String(k):F.isString(k)?v==="hash"&&k?rr({value:k,prefix:"#"}):v==="pathname"?rr({value:k,prefix:"/"}):k:C});F.hasKey(u,"paths")&&u.paths&&(c.pathname=Sm(a?o.pathname:"",...u.paths));const d=F.isString(u.search)?Cw(rr({value:u.search,prefix:"?"})):P5(u.search||{}),f=j9(c.searchParams,d,{...l,encoding:Xo.None}),m=_9(f,l);return{...c,searchParams:f,search:m,paths:Sw(c),fullPath:Nm(c),host:Gl(c),origin:Nw(c),href:Fw({...c,search:m})}}const W9=De({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:L9,hash:"",fullPath:"/",href:"/"});({...W9.default});const z9=0;function Tw(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==z9)}const Zl="locationchange",Tn=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Sp=Tn?.pushState;function Np(...e){if(!Sp)return;const t=Sp.apply(Tn,e);return globalThis.dispatchEvent(new Event(Zl)),t}const Tp=Tn?.replaceState;function Pp(...e){if(!Tp)return;const t=Tp.apply(Tn,e);return globalThis.dispatchEvent(new Event(Zl)),t}function q9(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Tn)){{if(Tn.pushState===Np)throw new Fp("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Tn.replaceState===Pp)throw new Fp("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Tn.pushState=Np,Tn.replaceState=Pp,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Zl))})}}function fu(e,t){const r=Io(e),n=No({value:No({value:r.pathname,prefix:rr({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],o=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?No({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class Tm{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){ow(t,B9),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new lw({defaultValue:r,equalityCheck:()=>!1}),q9(),this.removeGlobalListener=hf(globalThis,Zl,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new O9("Looping route sanitization detected; aborting window URL change listener.");const n=fu(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);F.jsonEquals(n,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Sm(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(fu(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...fu(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),o=this.routeIncludesBasePath(fu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return V9(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?rr({value:o.hash,prefix:"#"}):""},{searchParamStrategy:Qo.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=Io(n);return this.params.isPaused||!r.force&&F.jsonEquals(Io(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return Tw(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new Fm(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function K9(e){return new Tm({basePath:e,sanitizeRoute(t){return{paths:G9(t.paths),hash:void 0,search:void 0}}})}function G9(e){const t=e[0];if(F.isEnumValue(t,Xt)){if(t===Xt.Book)return[Xt.Book,...e.slice(1)];if(t===Xt.Search)return e[1]?[t,e[1]]:[Xt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return jo.paths}const tl=Cm()("element-book-change-route"),Ip="vira-",Re=vw({assertInputs:e=>{if(!e.tagName.startsWith(Ip))throw new Error(`Tag name should start with '${Ip}' but got '${e.tagName}'`)}});var me=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Select="select",e.Checkbox="checkbox",e))(me||{});function jc(e,t){if(e)return t?df({value:e,suffix:"*"}):e}function Z9(e){return md(e).every(t=>t.isHidden||!t.isRequired?!0:F.isString(t.value)?!!t.value:t.value!=null)}const b=gn({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"}),H9=ke;function J9(e){try{if(!e)throw new Error("invalid empty color");return new H9(e)}catch{throw new Error(`Invalid color: ${g(e)}`)}}function ie({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Mp(e,t){const r=Ve(t).map(n=>{const i=t[n],o=J9(i);return`${b[n].name}: ${o.toString()};`}).join(" ");return ie({name:e.name,svgTemplate:h`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const Y9=ie({name:"Bell24Icon",svgTemplate:h`
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
    `}),X9=ie({name:"Chat24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Pm=ie({name:"Check24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Q9=ie({name:"ChevronDown24Icon",svgTemplate:h`
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
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),Im=ie({name:"ChevronUp24Icon",svgTemplate:h`
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
    `}),Pw=ie({name:"CloseX24Icon",svgTemplate:h`
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
    `}),eN=ie({name:"Commit24Icon",svgTemplate:h`
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
    `}),tN=ie({name:"Document24Icon",svgTemplate:h`
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
    `}),rN=ie({name:"DocumentSearch24Icon",svgTemplate:h`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),nN=ie({name:"DoubleChevron24Icon",svgTemplate:h`
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
                fill=${b["vira-icon-fill-color"].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Iw=ie({name:"Element16Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Br=ie({name:"Element24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),iN=ie({name:"ExternalLink24Icon",svgTemplate:h`
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
    `}),Mw=ie({name:"EyeClosed24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${b["vira-icon-fill-color"].value}
            stroke=${b["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Ow=ie({name:"EyeOpen24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${b["vira-icon-fill-color"].value}
            stroke=${b["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),oN=ie({name:"Filter24Icon",svgTemplate:h`
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
                fill=${b["vira-icon-fill-color"].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),sN=ie({name:"Link24Icon",svgTemplate:h`
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
    `}),Bw=ie({name:"Loader24Icon",svgTemplate:h`
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
    `}),Rn=gn({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),aN=$`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Rn["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Ki=ie({name:"LoaderAnimated24Icon",svgTemplate:h`
        <style>
            ${aN}
        </style>
        ${Bw.svgTemplate}
    `}),uN=ie({name:"Lock24Icon",svgTemplate:h`
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
    `}),Js=ie({name:"Options24Icon",svgTemplate:h`
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
    `}),lN=ie({name:"Pencil24Icon",svgTemplate:h`
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
    `}),cN=ie({name:"Shield24Icon",svgTemplate:h`
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
    `}),dN=ie({name:"SortAscending24Icon",svgTemplate:h`
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
                fill=${b["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),fN=ie({name:"SortDescending24Icon",svgTemplate:h`
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
                fill=${b["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),mN=ie({name:"SpeakerLoud24Icon",svgTemplate:h`
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
    `}),hN=ie({name:"SpeakerMedium24Icon",svgTemplate:h`
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
    `}),pN=ie({name:"SpeakerMuted24Icon",svgTemplate:h`
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
    `}),gN=ie({name:"SpeakerQuiet24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),yN=ie({name:"Star24Icon",svgTemplate:h`
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
    `}),rl=ie({name:"StatusFailure24Icon",svgTemplate:h`
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
    `}),bN=ie({name:"StatusInProgress24Icon",svgTemplate:h`
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
    `}),wN=ie({name:"StatusSuccess24Icon",svgTemplate:h`
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
    `}),vN=ie({name:"StatusUnknown24Icon",svgTemplate:h`
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
    `}),$N=ie({name:"StatusWarning24Icon",svgTemplate:h`
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
    `}),DN=ie({name:"Upload24Icon",svgTemplate:h`
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
    `}),Rw=ie({name:"X24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Wd={Bell24Icon:Y9,Chat24Icon:X9,Check24Icon:Pm,ChevronDown24Icon:Q9,ChevronUp24Icon:Im,CloseX24Icon:Pw,Commit24Icon:eN,Document24Icon:tN,DocumentSearch24Icon:rN,DoubleChevron24Icon:nN,Element16Icon:Iw,Element24Icon:Br,ExternalLink24Icon:iN,EyeClosed24Icon:Mw,EyeOpen24Icon:Ow,Filter24Icon:oN,Link24Icon:sN,Loader24Icon:Bw,LoaderAnimated24Icon:Ki,Lock24Icon:uN,Options24Icon:Js,Pencil24Icon:lN,Shield24Icon:cN,SortAscending24Icon:dN,SortDescending24Icon:fN,SpeakerLoud24Icon:mN,SpeakerMedium24Icon:hN,SpeakerMuted24Icon:pN,SpeakerQuiet24Icon:gN,Star24Icon:yN,StatusFailure24Icon:rl,StatusInProgress24Icon:bN,StatusSuccess24Icon:wN,StatusUnknown24Icon:vN,StatusWarning24Icon:$N,Upload24Icon:DN,X24Icon:Rw},Rr=gn({"vira-form-input-radius":"8px"}),Gi=$`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,es=gn({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":$`calc(${Rr["vira-form-input-radius"].value} + 2px)`});function _a({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const i=Ce(na(r+t+e)),o=$`
        content: '';
        top: calc(${i} * -1);
        left: calc(${i} * -1);
        position: absolute;
        width: calc(100% + calc(${i} * 2));
        height: calc(100% + calc(${i} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${r}px solid ${es["vira-focus-outline-color"].value};
        border-radius: ${es["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return n?o:$`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const X=gn({"vira-form-border-color":"#cccccc","vira-form-placeholder-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-text-selection-color":"#cfe9ff","vira-form-selection-hover-background-color":"#e6f9fe","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#e6f9fe","vira-form-selection-active-foreground-color":"black","vira-form-error-foreground-color":"red","vira-form-success-foreground-color":"green","vira-form-label-font-weight":"bold"}),L=Re()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>$`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),pe=Re()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal},styles:({hostClasses:e})=>$`
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
                font-weight: ${X["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${X["vira-form-selection-hover-background-color"].value};
            }
        }

        ${L} {
            ${b["vira-icon-stroke-width"].name}: 2px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${X["vira-form-border-color"].value};
            color: ${X["vira-form-foreground-color"].value};
            border-radius: ${Rr["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${_a({elementBorderSize:1})}

            &.checked {
                & ${L} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${X["vira-form-error-foreground-color"].value};
            }

            &:active {
                background-color: ${X["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${Gi};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:et()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}const i=e.label?h`
                  <span
                      class="label-text"
                      ${Mn(e.attributePassthrough?.text)}
                      style=${Ye(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:Y;return h`
            <label
                class=${qt({disabled:!!e.disabled})}
                ${Mn(e.attributePassthrough?.label)}
                style=${Ye(e.stylePassthrough?.label)}
                ${V("mousedown",n)}
            >
                ${i}
                <span
                    class="custom-checkbox ${qt({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${Ye(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${Mn(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Ye(e.stylePassthrough?.["custom-checkbox"])}
                    ${c9(n)}
                >
                    <${L.assign({icon:Pm,fitContainer:!0})}
                        ${Mn(e.attributePassthrough?.[L.tagName])}
                        style=${Ye(e.stylePassthrough?.[L.tagName])}
                    ></${L}>
                </span>
            </label>
        `}}),ts=$`
    padding: 0;
    margin: 0;
`,Pr=$`
    ${ts};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Uc=gn({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Mo={menuShadow:$`
        filter: drop-shadow(0px 5px 5px ${Uc["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:$`
        filter: drop-shadow(0px -5px 5px ${Uc["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:$`
        box-shadow: 0 5px 15px ${Uc["modal-shadow-color"].value};
    `},rs=$`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,Sr=gn({"vira-white":"#ffffff","vira-black":"#000000","vira-teal-10":"#c9f6ee","vira-teal-20":"#89ebda","vira-teal-30":"#3fddc3","vira-teal-40":"#23c9ad","vira-teal-50":"#1fb59b","vira-teal-60":"#1a9681","vira-teal-70":"#147464","vira-teal-80":"#0d4c42","vira-teal-90":"#09362f","vira-blue-10":"#ddf0f9","vira-blue-20":"#b9e0f3","vira-blue-30":"#95d0ec","vira-blue-40":"#6dbee5","vira-blue-50":"#44acde","vira-blue-60":"#228ec4","vira-blue-70":"#1a6e98","vira-blue-80":"#114864","vira-blue-90":"#092736","vira-purple-10":"#f0eafb","vira-purple-20":"#e0d4f8","vira-purple-30":"#d1bff4","vira-purple-40":"#c0a9f0","vira-purple-50":"#b093ec","vira-purple-60":"#9770e6","vira-purple-70":"#7745de","vira-purple-80":"#4c1ea9","vira-purple-90":"#31136d","vira-pink-10":"#fbe7f9","vira-pink-20":"#f6cdf3","vira-pink-30":"#f2b3ed","vira-pink-40":"#ed96e6","vira-pink-50":"#e778df","vira-pink-60":"#dd3bd0","vira-pink-70":"#b01fa4","vira-pink-80":"#74146c","vira-pink-90":"#360933","vira-red-10":"#fbe8ec","vira-red-20":"#f7d0d7","vira-red-30":"#f3b8c2","vira-red-40":"#ee9eac","vira-red-50":"#e98495","vira-red-60":"#e1546b","vira-red-70":"#c1223c","vira-red-80":"#7f1628","vira-red-90":"#6d1322","vira-orange-10":"#f8ebd9","vira-orange-20":"#f1d6af","vira-orange-30":"#eac186","vira-orange-40":"#e2aa5c","vira-orange-50":"#da932d","vira-orange-60":"#b77920","vira-orange-70":"#8e5e19","vira-orange-80":"#5e3d10","vira-orange-90":"#362409","vira-green-10":"#e2f4bd","vira-green-20":"#c1e776","vira-green-30":"#9fd927","vira-green-40":"#8fc422","vira-green-50":"#80b11f","vira-green-60":"#6a931a","vira-green-70":"#527214","vira-green-80":"#364b0d","vira-green-90":"#273609","vira-yellow-10":"#f3f199","vira-yellow-20":"#e4e01a","vira-yellow-30":"#d0cd18","vira-yellow-40":"#bdb915","vira-yellow-50":"#aaa613","vira-yellow-60":"#8d8a10","vira-yellow-70":"#6d6b0c","vira-yellow-80":"#484608","vira-yellow-90":"#393807","vira-grey-10":"#ededed","vira-grey-20":"#dadada","vira-grey-30":"#c7c7c7","vira-grey-40":"#b4b4b4","vira-grey-50":"#a2a2a2","vira-grey-60":"#878787","vira-grey-70":"#686868","vira-grey-80":"#444444","vira-grey-90":"#202020"});function zd({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>zd({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function xN({value:e,allowed:t,blocked:r}){const n=t?zd({input:e,matcher:t}):!0,i=r?zd({input:e,matcher:r}):!1;return n&&!i}function qd(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(xN({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function AN({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){const o=Bi(r,HTMLInputElement),s=F.hasKey(r,"data")&&qy.isString(r.data)||"";if(s){const{blocked:u}=qd({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=qd({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==a&&(o.value=a),t!==a&&i(a)}var Oo=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(Oo||{});const mt=Re()({tagName:"vira-input",cssVars:{"vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>$`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${X["vira-form-foreground-color"].value};
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
                    font-weight: ${X["vira-form-label-font-weight"].value};
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
                ${Pr};
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
                ${rs};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Pr};
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
                border-radius: ${Rr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${X["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Pr};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Rr["vira-form-input-radius"].value};
                background-color: ${X["vira-form-background-color"].value};
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
                ${Pr};
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
                    ${_a({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${X["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${X["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${X["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${rs};
            }

            button {
                ${Pr};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Rn["vira-interaction-animation-duration"].value};
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
                    border-color: ${X["vira-form-error-foreground-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${Gi};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:et(),inputBlocked:et()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Li(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:i,host:o})=>{const{filtered:s}=qd({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?h`
                  <${L.assign({icon:e.icon})} class="left-side-icon"></${L}>
              `:Y,u=e.fitText?$`
                  width: ${r.forcedInputWidth}px;
              `:Y,l=V("mousedown",f=>{const m=Bi(f,HTMLElement,{useOriginalTarget:!0}),D=hn.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);m!==D&&(f.preventDefault(),D.focus())}),c=e.disableBrowserHelps||e.type==="password",d=h`
            <span class="input-wrapper" ${e.label?Y:l}>
                ${a}
                ${tr(!!e.fitText,h`
                        <span
                            class="size-span"
                            ${ww(({contentRect:f})=>{n({forcedInputWidth:f.width})})}
                        >
                            <pre>${s||e.placeholder||Y}</pre>
                        </span>
                    `)}

                <input
                    id=${Ye(e.label?r.randomId:void 0)}
                    aria-label=${Ye(e.label||void 0)}
                    autofocus=${!1}
                    type=${EN(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${Ye(c?"off":void 0)}
                    autocorrect=${Ye(c?"off":void 0)}
                    autocapitalize=${Ye(c?"off":void 0)}
                    spellcheck=${Ye(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${V("input",f=>{AN({inputs:e,previousValue:s,event:f,inputBlockedCallback(m){t(new i.inputBlocked(m))},newValueCallback(m){t(new i.valueChange(m))}})})}
                    placeholder=${Ye(e.placeholder||void 0)}
                    ${Mn(e.attributePassthrough)}
                />

                ${tr(!!(e.showClearButton&&e.value),h`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${V("mousedown",f=>{f.stopImmediatePropagation(),f.preventDefault()})}
                            ${V("click",()=>{e.disabled||t(new i.valueChange(""))})}
                        >
                            <${L.assign({icon:Pw})}></${L}>
                        </button>
                    `)}
                ${tr(e.type==="password",h`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${V("mousedown",f=>{f.stopImmediatePropagation(),f.preventDefault()})}
                            ${V("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${L.assign({icon:r.showPassword?Ow:Mw})}></${L}>
                        </button>
                    `)}
                ${tr(!!e.suffix,h`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?h`
                <label for=${r.randomId} ${l}>
                    <span class="input-label">${e.label}</span>
                    ${d}
                </label>
            `:d}});function EN(e,t){return e==="password"&&t?"text":e||"text"}const Xe=Re()({tagName:"vira-select",state(){return{randomId:Li(32)}},events:{valueChange:et()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>$`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${X["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Pr};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${Rr["vira-form-input-radius"].value};
            background-color: ${X["vira-form-background-color"].value};
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
                    ${_a({elementBorderSize:0,noNesting:!0})}
                }

                &.placeholder {
                    color: ${X["vira-form-placeholder-color"].value};
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
                border-radius: ${Rr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${X["vira-form-border-color"].value};
                transition: border
                    ${Rn["vira-interaction-animation-duration"].value};
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
                font-weight: ${X["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${Gi}
            }
            ${L} {
                ${Gi}
            }
            & * {
                cursor: not-allowed;
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${X["vira-form-error-foreground-color"].value};
            }
        }
    `,render({inputs:e,state:t,dispatch:r,events:n}){const i=e.value||void 0,o=e.placeholder||i==null?h`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:Y,s=h`
            <span class="select-wrapper">
                <select
                    .value=${Ye(i)}
                    class=${qt({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Ye(e.label?t.randomId:void 0)}
                    aria-label=${Ye(e.label||void 0)}
                    aria-disabled=${Ye(e.disabled?"true":void 0)}
                    ${V("input",a=>{const u=Bi(a,HTMLSelectElement),l=u.value;u.value!==i&&(u.selectedIndex=e.options.findIndex(c=>c.value===i)),r(new n.valueChange(l))})}
                    ${Mn(e.attributePassthrough?.select)}
                >
                    ${o}
                    ${e.options.map(a=>h`
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
                <${L.assign({icon:Im})} class="trigger-icon"></${L}>
            </span>
        `;return e.label?h`
                <label for=${t.randomId} ${Mn(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),Zt=Re()({tagName:"vira-form",events:{valueChange:et(),validChange:et()},styles:$`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:r,state:n,updateState:i}){const o=Z9(e.fields);o!==n.lastIsValid&&(i({lastIsValid:o}),t(new r.validChange({allFieldsAreValid:o})));const s=ml(e.fields).map(([a,u])=>u.isHidden?Y:u.type===me.Checkbox?h`
                        <${pe.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:jc(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?Bn(u.testId):Y}
                            ${V(pe.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${pe}>
                    `:u.type===me.Select?h`
                        <${Xe.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:jc(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?Bn(u.testId):Y}
                            ${V(Xe.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${Xe}>
                    `:h`
                        <${mt.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:jc(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===me.NewPassword?{autocomplete:"new-password"}:u.type===me.ExistingPassword?{autocomplete:"password"}:u.type===me.Email?{autocomplete:"email"}:{},type:[me.NewPassword,me.ExistingPassword,me.PlainPassword].includes(u.type)?Oo.Password:u.type===me.Email?Oo.Email:Oo.Default})}
                            ${u.testId?Bn(u.testId):Y}
                            ${V(mt.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${mt}>
                    `);return h`
            <form ${V("submit",a=>a.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}});function CN(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given: ${uD(r)}`)}function kN(e,t=[],r=!1){return r?t.includes(e.id)?t.filter(n=>n!==e.id):[...t,e.id]:[e.id]}function Op({open:e,callback:t,popUpManager:r,host:n}){if(e){const i=r.showPopUp(n);t?.(i)}else r.removePopUp(),t?.(void 0)}const cr=Re()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>$`
        :host {
            display: flex;
            ${rs};
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
    `,render({inputs:e}){return h`
            <div class="item">
                <${L.assign({icon:Pm})}></${L}>
                <slot>${e.label}</slot>
            </div>
        `}});function FN(e,t){return e>t}function SN(e,t){return e<t}function ba(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var fn;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(fn||(fn={}));var ye;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(ye||(ye={}));function Hl(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const i=n[t.x];if(i)if(i.navEntry.navParams.group){const o=Hl(i.children);o&&(r=o.node)}else i.navEntry.navParams.disabled||(r=i)}}if(r)return{node:r,coords:t}}function Bp(e,t,r,n){if(!t){const u=Hl(e.children);return u?(ba(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:ye.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:ye.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=Lw(t.position,r),a=n?!0:!o;return i&&a?(ba(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:r,navAction:ye.Navigate,coords:s}):i?a?{success:!1,reason:"no conditions matched",direction:r,navAction:ye.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:ye.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:ye.Navigate}}function Lw(e,t){let r=!1,n,i=1;const o=Date.now();for(;!r||!n;)if(n=NN(e,t,i),r=!n.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return H5.warning("Failed to find next non-disabled node."),n;return n}function NN(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Lr.isDefined(n,"missing parent");const i=hn.isDefined(n.children[e.nodeCoords.y]),o=n.children.length>1&&(t===fn.Down||t===fn.Up),s=t===fn.Down||t===fn.Right?r:-1*r,a=s<0?FN:SN,u=o?qh(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=hn.isDefined(n.children[u]),c=o?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:qh(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),d=n.children[u]?.[c],f=o?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:d,requiresWrapping:f,coords:{x:c,y:u}}}function TN(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:ye.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=Lw(n,t),a=i?.navEntry.navParams.group?Hl(i.children):{node:i,coords:s},u=r?!0:!o;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:ye.Pibling}:u?(ba(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:o,coords:a.coords,direction:t,navAction:ye.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:ye.Pibling}}var Ut;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Ut||(Ut={}));const Jr={name:"data-nav",js(e){return e?`[${Jr.name}*="${e}"]`:`[${Jr.name}]`},css({baseSelector:e="",navValue:t}={}){return $`
            ${Ce(e)}${Ce(Jr.js(t))}
        `}},Mm="navEntry";function jw(e){return Mm in e}function Uw(e){if(jw(e)){const t=e[Mm];return hn.instanceOf(t,_w,"Invalid nav entry")}else return}function PN(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Ut.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class _w{element;navParams;navTreeNode;navValue;eventListener=PN(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Lr.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Jr.name,""),Rc(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,i=t===(n===Ut.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Ut.Focused),Rc(this.element)||this.element.focus()):(this.removeNavValue(Ut.Focused),Rc(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,ye.Focus)}activate(t){const r=this.navValue,n=t===(r===Ut.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(Ut.Active):this.setNavValue(Ut.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,ye.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(Jr.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(Jr.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function Vw(e,t){Object.entries(t).forEach(([r,n])=>{F.isBoolean(n)&&n?e.setAttribute(r,""):F.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const IN=zn(class extends qn{element;lastKey;constructor(e){super(e),this.element=Ua(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),gr}});function MN(e){return"group"in e?Ut.Group:e.disabled?Ut.Disabled:""}function Rp(e,t={}){return IN(g(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;Lr.instanceOf(r,HTMLElement);const i={[Jr.name]:MN(t),tabindex:n?0:-1};Vw(r,i);const o=Uw(r)||new _w(r,e,t);jw(r)?(o.navParams=t,o.navController=e):r[Mm]=o,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function ON(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:ye.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:ye.Enter};const r=t.position.node.children[0]?.[0];return r?(ba(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:ye.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:ye.Enter}}function BN(e,t){return Ww([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function Ww(e,t,r){for(let n=0;n<t.length;n++){const i=t[n];for(let o=0;o<i.length;o++){const s=i[o],a={ancestorChain:e,nodeCoords:{x:o,y:n},node:s};if(r(a))return a;const u=Ww(e.concat(a),s.children,r);if(u)return u}}}function zw(e,t){const r=BN(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function RN(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:ye.Exit};const r=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:ye.Exit};const{nodeCoords:n}=zw(e,r.navEntry);return ba(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:ye.Exit,coords:n}}class LN extends sn()("nav-exit"){}class qw extends sn()("nav-activate"){}class jN extends sn()("nav-focus"){}class UN extends sn()("nav-enter"){}class _N extends sn()("nav-navigate"){}class VN extends sn()("nav-navigate-pibling"){}function WN(e){return{root:!0,children:Kw(e)?.children||[]}}function Kw(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=Uw(t),n=zN(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function zN(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const i=n.navEntry.navParams.x,o=n.navEntry.navParams.y||0,s=us(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(n):s.withX.push({x:i,node:n})}return e.children.forEach(n=>{const i=Kw(n);i&&r(i)}),t.sort((n,i)=>n.y-i.y).map(n=>(n.withX.sort((i,o)=>i.x-o.x),n.withX.forEach(({x:i,node:o})=>{n.noX.splice(i,0,o)}),n.noX)).filter(F.isTruthy)}class Gw extends mf{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Hl(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const i=zw(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:i.nodeCoords};return r&&(n===ye.Activate?this.dispatch(new qw({detail:o})):n===ye.Focus&&this.dispatch(new jN({detail:o}))),o}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:ye.Navigate,reason:"NavController is locked."};const n=Bp(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new _N({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:ye.Enter,reason:"NavController is locked."};const r=ON(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new UN({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:ye.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:ye.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Lr.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:ye.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===ye.Activate&&this.currentNavEntry.entry.focus(!0);const t=RN(this.getNavTree(),this.currentNavEntry);return this.dispatch(new LN({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:ye.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),o={...this.currentNavEntry?TN(this.currentNavEntry,r,t):Bp(n,void 0,r,t),navAction:ye.Pibling};return this.dispatch(new VN({detail:o})),o}buildNavTree(){const t=E9(this.rootElement),r=WN(t);return this.cachedNavTree=r,r}}const Ao=Re()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>$`
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
    `,render({inputs:e}){function t(r){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,r)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(e.link?.newTab)return h`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${Mn(e.attributePassthrough?.a)}
                    style=${Ye(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return h`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${Mn(e.attributePassthrough?.a)}
                    style=${Ye(e.stylePassthrough?.a)}
                    ${V("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),Lp={item:"menu-item"},Ys=Re()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new Gw(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>$`
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
            background-color: ${X["vira-form-background-color"].value};
            color: ${X["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Pr};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${Jr.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Ut.Focused})}, ${Jr.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Ut.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${X["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${Jr.css({baseSelector:".menu-item:not(.disabled)",navValue:Ut.Focused})},
                ${Jr.css({baseSelector:".menu-item:not(.disabled)",navValue:Ut.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${X["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${cr} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${Gi};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){CN(e.items);const r=e.items.map(n=>{const i=!!e.selected?.includes(n.id),o=F.isString(n.label)?h`
                      <${cr.assign({label:n.label,selected:i,hideCheckIcon:e.hideCheckIcons})}></${cr}>
                  `:n.label,s=n.disabled||!e.isMultiSelect&&i;return n.route?h`
                    <${Ao.assign({route:n.route})}
                        class="menu-item ${qt({disabled:!!n.disabled,selected:i})}"
                        ${Bn(Lp.item)}
                        title=${Ye(n.titleText||void 0)}
                        role="option"
                        ${Rp(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </${Ao}>
                `:h`
                    <button
                        class="menu-item ${qt({disabled:!!n.disabled,selected:i})}"
                        ${Bn(Lp.item)}
                        title=${Ye(n.titleText||void 0)}
                        role="option"
                        ${Rp(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </button>
                `});return h`
            ${r}
        `}});var Om=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(Om||{}),nl=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(nl||{});const Xs=Re()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>$`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${Rr["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${X["vira-form-background-color"].value};
            border: 1px solid ${X["vira-form-border-color"].value};
            color: ${X["vira-form-foreground-color"].value};
            ${Mo.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${Mo.menuShadowReversed}
            border-radius: ${Rr["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${Rr["vira-form-input-radius"].value};
        }
    `,render(){return h`
            <slot></slot>
        `}}),mu=globalThis.document;class qN extends lw{constructor(){if(super({defaultValue:!!mu?.hidden,equalityCheck:F.strictEquals}),!mu)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,mu));const t=r=>this.updateVisibility(r,mu);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=GN.includes(t.type),i=KN.includes(t.type),o=n?!0:i?!1:r.hasFocus()||!r.hidden;this.setValue(o)}}const KN=["blur","focusout","pagehide"],GN=["focus","focusin","pageshow"],ZN=new qN;function HN(e,t){return ZN.listen(e,t)}const jp={top:0,left:0,right:0,bottom:0};class Zw extends ff("hide-pop-up"){}class Hw extends sn()("nav-select"){}class JN{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new mf;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(t){let r=!1;const n=new ResizeObserver(()=>{r?this.removePopUp():r=!0});n.observe(t),this.cleanupCallbacks=[()=>{n.disconnect()},HN(!1,i=>{i||this.removePopUp()}),this.navController.listen(qw,i=>{i.detail.success&&(this.listenTarget.dispatch(new Hw({detail:i.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),i.stopImmediatePropagation(),i.preventDefault())}),hd("mousedown",i=>{this.lastRootElement&&i.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),hd("keydown",i=>{const o=i.code;o==="Escape"?this.removePopUp():this.options.supportNavigation&&(o==="ArrowDown"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:fn.Down,allowWrapping:!1})):o==="ArrowUp"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:fn.Up,allowWrapping:!1})):o==="ArrowLeft"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:fn.Left,allowWrapping:!1})):o==="ArrowRight"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:fn.Right,allowWrapping:!1})):(o==="Enter"||o==="Return"||o==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(i.stopImmediatePropagation(),i.preventDefault()))})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Zw)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=S9(t);Lr.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=pr(jp,m=>o[m]),d=pr(jp,m=>{const D=l[m],v=c[m];return Math.abs(D-v)}),f=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace;return this.attachGlobalListeners(i),{popDown:!f,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var oi=(e=>(e.Left="left",e.Right="right",e.Both="both",e))(oi||{});const we=Re()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new JN(new Gw(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>$`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Pr};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${_a({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${rs};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Gi}
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
    `,events:{navSelect:et(),openChange:et(),init:et()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:o}){e.popUpManager.listen(Zw,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");Lr.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(Hw,s=>{n.keepOpenAfterInteraction||Op({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:o,slotNames:s}){function a({emitEvent:m,open:D},v){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&v){const C=o.shadowRoot.querySelector(".dropdown-trigger");if(C&&!v.composedPath().includes(C))return}Op({open:D,callback(C){i({showPopUpResult:C}),m&&e(new t.openChange(C))},host:o,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="right"&&r.showPopUpResult?$`
                      left: -${r.showPopUpResult.positions.diff.left}px;
                  `:$`
                      left: ${n.popUpOffset?.left||0}px;
                  `,l=r.showPopUpResult&&n.horizontalAnchor==="left"?$`
                      right: -${r.showPopUpResult.positions.diff.right}px;
                  `:$`
                      right: ${n.popUpOffset?.right||0}px;
                  `,c=$`
            ${u}
            ${l}
        `,d=r.showPopUpResult?r.showPopUpResult.popDown?$`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                      top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                      ${c}
                  `:$`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                      bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                      ${c}
                  `:void 0;function f(m){a({emitEvent:!0,open:!r.showPopUpResult},m)}return h`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${qt({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${V("keydown",m=>{!r.showPopUpResult&&m.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},m)})}
                ${V("click",m=>{m.detail===0&&f(m)})}
                ${V("mousedown",m=>{m.button===0&&f(m)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${qt({"right-aligned":n.horizontalAnchor==="right"})}"
                    style=${d}
                >
                    ${tr(!!r.showPopUpResult,h`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),YN={menu:"menu-trigger-menu"},ri=Re()({tagName:"vira-menu-trigger",styles:$`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${we} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{itemActivate:et(),openChange:et()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:i}){return h`
            <${we.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||oi.Left})}
                class=${qt({open:!!t.showPopUpResult})}
                ${V(we.events.init,o=>{r({navController:o.detail.navController,popUpManager:o.detail.popUpManager})})}
                ${V(we.events.openChange,o=>{!!t.showPopUpResult!=!!o.detail&&n(new i.openChange(o.detail)),r({showPopUpResult:o.detail})})}
                ${V(we.events.navSelect,o=>{const s=o.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);n(new i.itemActivate(kN(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${we.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?h`
                          <${Xs.assign({direction:t.showPopUpResult.popDown?nl.Downwards:nl.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${we.slotNames.popUp}
                              class=${qt({"full-width-menu":e.horizontalAnchor===oi.Both})}
                          >
                              <${Ys.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Bn(YN.menu)}
                              ></${Ys}>
                          </${Xs}>
                      `:Y}
            </${we}>
        `}}),Ke=Re()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>$`
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
    `,render({inputs:e}){return h`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var Eo=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Eo||{});const fe=Re()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>$`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${rs};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${es["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Gi};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Pr};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Rr["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Rn["vira-interaction-animation-duration"].value},
                background-color
                    ${Rn["vira-interaction-animation-duration"].value},
                border-color ${Rn["vira-interaction-animation-duration"].value};

            ${_a({elementBorderSize:2})}
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
    `,render:({inputs:e})=>{const t=e.icon?h`
                  <${L.assign({icon:e.icon})}></${L}>
              `:Y,r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:h`
                  <span class="empty-text">&nbsp;</span>
              `;return h`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Kd=(e=>(e.Error="error",e.Success="success",e))(Kd||{});const _c=Re()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":"1px solid #d3d3d3","vira-card-border-radius":"16px","vira-card-padding":"16px"},styles:({hostClasses:e,cssVars:t})=>$`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${t["vira-card-border-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${X["vira-form-error-foreground-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${X["vira-form-success-foreground-color"].value};
        }
    `,render(){return h`
            <slot></slot>
        `}}),Dn=Re()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>$`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Pr};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Rn["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:et()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:o}){const s=o.expanded?$`
                  height: ${e.contentHeight}px;
              `:$`
                  height: 0;
              `;return h`
            <button
                class="header-wrapper"
                ${V("click",()=>{n(new i.expandChange(!o.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${ww(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Vc={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},Us=Re()({tagName:"vira-dropdown",styles:$`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${ri} {
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
                ${Rn["vira-interaction-animation-duration"].value} linear;
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
            ${rs};
            border: 1px solid ${X["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${Rr["vira-form-input-radius"].value};
            background-color: ${X["vira-form-background-color"].value};
            color: ${X["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:et(),openChange:et()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:i}){const o=Hi(t.selected,c=>t.options.find(d=>d.id===c),F.isTruthy),s=t.icon?h`
                  <${L.assign({icon:t.icon})}
                      ${Bn(Vc.icon)}
                  ></${L}>
              `:Y,a=!o.length,u=t.selectionPrefix&&!a?h`
                      <span class="selected-label-prefix" ${Bn(Vc.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:Y,l=a?t.placeholder||"":t.isMultiSelect&&o.length>1?`${o.length} Selected`:o[0]?.label||"";return h`
            <${ri.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||oi.Both})}
                ${V(ri.events.openChange,c=>{i({showPopUpResult:c.detail}),r(new n.openChange(c.detail))})}
                ${V(ri.events.itemActivate,c=>{r(new n.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${qt({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Bn(Vc.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${qt({"using-placeholder":a})}"
                        title=${Ye(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${L.assign({icon:Im})}
                            class="trigger-icon"
                        ></${L}>
                    </span>
                </div>
            </${ri}>
        `}}),Ui=Re()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>$`
        :host {
            color: ${X["vira-form-error-foreground-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return h`
            <slot></slot>
        `}}),Hn=Re()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:et(),imageError:et()},styles:({hostClasses:e})=>$`
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
    `,render({inputs:e,state:t,updateState:r,dispatch:n,events:i,slotNames:o}){const s=e.imageUrl,a=t.erroredUrls[s]?h`
                  <slot class="status-wrapper" name=${o.error}>
                      <${L.assign({icon:rl})} class="error"></${L}>
                  </slot>
              `:t.loadedUrls[s]?void 0:h`
                    <slot class="status-wrapper" name=${o.loading}>
                        <${L.assign({icon:Ki})}></${L}>
                    </slot>
                `;return h`
            ${tr(!!a,a)}
            <img
                class=${qt({hidden:!!a})}
                ${V("load",async()=>{e._debugLoadDelay&&await _i(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new i.imageLoad)})}
                ${V("error",async u=>{e._debugLoadDelay&&await _i(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new i.imageError(u.error))})}
                src=${s}
            />
        `}}),XN=["pagehide","pageshow","popstate"],xn=Re()({tagName:"vira-modal",events:{modalClose:et()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-modal-backdrop-filter":"blur(3px)","vira-modal-subtitle-color":"#7E7E7E","vira-modal-close-button-hover-radius":"8px","vira-modal-close-button-hover-background-color":"#E4E4E4"},styles:({hostClasses:e,cssVars:t})=>$`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${ts};
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
            ${Mo.modal}

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
                        ${Pr};
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
    `,render({inputs:e,state:t,updateState:r,events:n,dispatch:i,slotNames:o}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),r({previousOpenValue:e.open}),e.open)){const a=XN.map(u=>hd(u,()=>{i(new n.modalClose)}));r({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),i(new n.modalClose))}return h`
            <dialog
                ${qi(a=>{r({dialogElement:hn.instanceOf(a,HTMLDialogElement)})})}
                ${V("close",()=>{s()})}
                ${V("click",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${qi(a=>{r({contentElement:hn.instanceOf(a,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${o.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?h`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:Y}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${V("click",()=>{t.dialogElement?.close()})}
                        >
                            <${L.assign({icon:Rw})}></${L}>
                        </button>
                    </div>
                    ${e.open?h`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:Y}
                </div>
            </dialog>
        `}}),mn=Re()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":({state:e,inputs:t})=>e.isOverflowing||!!t.useSmall},styles:({hostClasses:e})=>$`
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
    `,cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({slotNames:e,updateState:t,inputs:r,host:n,state:i}){return h`
            <div
                class="large"
                ${qi(o=>{if(!r.automaticallySwitch)return;const s={elementToTest:o,host:n,updateState:t},a=new ResizeObserver(()=>{Wc(s)});a.observe(n),a.observe(o);const u=hf(o,"slotchange",()=>{Wc(s)});Wc(s),i.cleanup?.(),t({cleanup(){a.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function Wc({elementToTest:e,host:t,updateState:r}){const n=e.scrollWidth>t.clientWidth;r({isOverflowing:n})}const jt=Re()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>$`
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
    `,render({inputs:e,host:t}){const r=e.min||0,i=(e.max||100)-r,o=e.value-r,s=J5(Math.round(o/i*100),{min:0,max:100});return Vw(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),h`
            <div
                class="progress-bar"
                style=${s?$`
                          width: ${s}%;
                      `:$`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function Jw(e){return n9({async updateCallback(t,r){if(r&&t in r.cache)return{cache:r.cache,element:r.cache[t],key:t};const n=await e[t]();return{cache:{...r?.cache,[t]:n},element:n,key:t}}})}function Yw(e,{ready:t,loading:r,error:n,key:i}){return i&&e.update(i),e.value instanceof Error?n(e.value):e.value instanceof Promise?r(e.value.then(o=>({[o.key]:o.element}))):t({[e.value.key]:e.value.element})}const Ar=vw(),Ir=Ar()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>$`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return h`
            <a
                href=${r}
                ${V("click",n=>{(!e.router||Tw(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new tl(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function QN(e,t){return e.entry.entryType===Et.Root?!1:e.entry.entryType===Et.Page||F.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:F.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const kn=Ar()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>$`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${ge["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${ge["element-book-nav-hover-background-color"].value};
            color: ${ge["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${ge["element-book-nav-active-background-color"].value};
            color: ${ge["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Ir.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${ge["element-book-nav-selected-background-color"].value};
            color: ${ge["element-book-nav-selected-foreground-color"].value};
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
            color: ${ge["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!QN(r,e.selectedPath))return;const n=$`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return h`
                <li style=${n}>
                    <${Ir.assign({router:e.router,route:{paths:[Xt.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${qt({"title-row":!0,selected:e.selectedPath?F.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${tr(To(r,Et.ElementExample),h`
                                    <${L.assign({icon:Iw})}></${L}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Ir}>
                </li>
            `});return h`
            <${Ir.assign({route:jo,router:e.router})}>
                <slot name=${dn.NavHeader}>Book</slot>
            </${Ir}>
            <ul>
                ${t}
            </ul>
        `}});async function eT(e){await Vd(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await k9(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const fi=Ar()({tagName:"book-error",styles:$`
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
    `,render({inputs:e}){return(F.isArray(e.message)?e.message:[e.message]).map(r=>h`
                <p>${r}</p>
            `)}}),wa=Ar()({tagName:"book-page-controls",events:{controlValueChange:et()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>$`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${ge["element-book-page-foreground-faint-level-1-color"].value};
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

        ${mt} {
            height: 24px;
            max-width: 128px;
        }

        ${L}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],o)=>{if(i.controlType===Q.Hidden)return"";const s=tT(e.currentValues[n],i,a=>{const u=F.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[n]:a}}))});return h`
                    <div class="control-wrapper">
                        ${tr(o===0,h`
                                <${L.assign({icon:Js})}
                                    class="options-icon"
                                ></${L}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function tT(e,t,r){return mo(t,Q.Hidden)?"":mo(t,Q.Checkbox)?h`
            <input
                type="checkbox"
                ?checked=${e}
                ${V("input",n=>{const i=Bi(n,HTMLInputElement);r(i.checked)})}
            />
        `:mo(t,Q.Color)?h`
            <input
                type="color"
                .value=${e}
                ${V("input",n=>{const i=Bi(n,HTMLInputElement);r(i.value)})}
            />
        `:mo(t,Q.Text)?h`
            <${mt.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${V(mt.events.valueChange,n=>{r(n.detail)})}
            ></${mt}>
        `:mo(t,Q.Number)?h`
            <input
                type="number"
                .value=${e}
                ${V("input",n=>{const i=Bi(n,HTMLInputElement);r(i.value)})}
            />
        `:mo(t,Q.Dropdown)?h`
            <select
                .value=${e}
                ${V("input",n=>{const i=Bi(n,HTMLSelectElement);r(i.value)})}
            >
                ${t.options.map(n=>h`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:h`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Up=Ar()({tagName:"book-breadcrumbs",styles:$`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,i)=>{const o=n>=i.length-1,s=i.slice(0,n+1),a=o?"":h`
                      <span class="spacer">&gt;</span>
                  `;return h`
                <${Ir.assign({route:{hash:void 0,search:void 0,paths:[Xt.Book,...s]},router:e.router})}>
                    ${r}
                </${Ir}>
                ${a}
            `}):h`
                &nbsp;
            `}}),zc=Ar()({tagName:"book-breadcrumbs-bar",styles:$`
        :host {
            border-bottom: 1px solid
                ${ge["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${ge["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return h`
            ${tr(!!e.currentSearch,h`
                    &nbsp;
                `,h`
                    <${Up.assign({currentRoute:e.currentRoute,router:e.router})}></${Up}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${V("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=n.value;await _i({milliseconds:200}),n.value===i&&(n.value?t(new tl({paths:[Xt.Search,encodeURIComponent(n.value)]})):t(new tl(jo)))})}
            />
        `}}),_p=Ar()({tagName:"book-entry-description",styles:$`
        :host {
            color: ${ge["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${ge["element-book-page-foreground-color"].value};
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>h`
                <p>${t}</p>
            `)}}),Vp=Ar()({tagName:"book-page-wrapper",styles:$`
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

        ${Ir} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?h`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:h`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Xt.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?Gy(e.pageNode.entry.errors):void 0;return n&&console.error(n),h`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Ir.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Ir}>
                    ${n?h`
                              <${fi.assign({message:n.message})}></${fi}>
                          `:h`
                              <${_p.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${_p}>
                              <${wa.assign({config:e.pageNode.entry.controls,currentValues:yf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${wa}>
                          `}
                </div>
            </div>
        `}}),hu=Ar()({tagName:"book-element-example-controls",styles:$`
        :host {
            display: flex;
            color: ${ge["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[Xt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return h`
            <${Ir.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Ir}>
        `}}),Wp=Symbol("unset-internal-state"),zp=Ar()({tagName:"book-element-example-viewer",state(){return{isUnset:Wp}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Gy(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Wp&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return h`
                ${tr(!!t.elementExampleNode.entry.styles,h`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",$t(n)),console.error(n),h`
                <${fi.assign({message:`${t.elementExampleNode.entry.title} failed: ${$t(n)}`})}></${fi}>
            `}},options:{allowPolymorphicState:!0}}),qp=Ar()({tagName:"book-element-example-wrapper",styles:$`
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

        ${hu} {
            color: ${ge["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${hu} {
            color: ${ge["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return h`
            <div class="individual-example-wrapper">
                <${hu.assign(tD(e,["currentPageControls"]))}></${hu}>
                <${zp.assign(e)}></${zp}>
            </div>
        `}}),rT={milliseconds:10};let _s;const il=new Map,Pi=new Map;function nT(){return _s||(_s=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=il.get(r);if(n)if(t.isIntersecting){if(!Pi.has(r)){const i=globalThis.setTimeout(()=>{Pi.delete(r),n(),_s?.unobserve(r),il.delete(r)},Ro(rT,{milliseconds:!0}).milliseconds);Pi.set(r,i)}}else{const i=Pi.get(r);i&&(clearTimeout(i),Pi.delete(r))}}},{rootMargin:"100px"})),_s}function Kp(e){const t=Pi.get(e);t&&(clearTimeout(t),Pi.delete(e)),il.delete(e),_s?.unobserve(e)}const pu=Ar()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:$`
        :host {
            display: contents;
        }

        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&Kp(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:h`
            <div
                class="placeholder"
                ${qi(n=>{t.placeholderElement&&Kp(t.placeholderElement),r({placeholderElement:n}),il.set(n,()=>{r({hasRendered:!0})}),nT().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function Xw(e,t,r,n){const i=pd(r,n),o=[];if(i){const s=Xw(e,t,i,n);s&&o.push(s)}if(To(r,Et.Page)&&!e.includes(r)){const s=yf(t,r.fullUrlBreadcrumbs);o.push({config:r.entry.controls,current:s,breadcrumbs:pr(s,()=>r.fullUrlBreadcrumbs)})}return o.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function iT({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:i,originalTree:o}){if(!e.length&&n)return[h`
                No results
            `];const s=F.isLengthAtLeast(e,1)?Xw(e,i,e[0],o):void 0,a=s&&Object.values(s.config).length&&F.isLengthAtLeast(e,1)?h`
                  <${wa.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${wa}>
              `:Y,u=o9(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(To(l,Et.Page))return h`
                    <${Vp.assign({isTopLevel:t,pageNode:l,controls:i,router:r})}
                        class="block-entry"
                    ></${Vp}>
                `;if(To(l,Et.ElementExample)){const c=yf(i,l.fullUrlBreadcrumbs.slice(0,-1)),d=h`
                    <${qp.assign({elementExampleNode:l,currentPageControls:c,router:r})}
                        class="inline-entry ${qt({"block-entry":l.entry.isVertical})}"
                    ></${qp}>
                `;return h`
                    <${pu.assign({content:d})}></${pu}>
                `}else{if(To(l,Et.Root))return Y;{const c=h`
                    <${fi.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${fi}>
                `;return h`
                    <${pu.assign({content:c})}></${pu}>
                `}}});return[a,u]}const bo=Ar()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:$`
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

        ${zc} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Rn["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:et()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const o=gd(e.currentRoute.paths),s=iT({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return h`
            <${zc.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${zc}>

            ${tr(e.showLoading,h`
                    <div
                        ${qi(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${L.assign({icon:Ki})}></${L}>
                    </div>
                    ${tr(!!n.lastElement,h`
                            ${n.lastElement}
                            <slot name=${dn.Footer}></slot>
                        `)}
                `,h`
                    <div
                        ${qi(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${dn.Footer}></slot>
                `)}
        `}});function oT(e,t,r){const n=Gp(e,t);return n.length?n:(r(jo),Gp(e,jo.paths))}function Gp(e,t){return e.filter(r=>dD({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const qc=so()({tagName:"element-book-app",state(){return{currentRoute:jo,router:void 0,loading:!0,colors:{config:void 0,theme:kp(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:et()},styles:$`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${ge["element-book-page-background-color"].value};
            color: ${ge["element-book-page-foreground-color"].value};
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

        ${bo} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${kn} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await Zp(e,gd(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:o})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const d=s(c);return!F.jsonEquals(e.currentRoute,d)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(F.isTruthy).join(" - "))}function l(c){if(!a(c))return;const d=s(c);e.router?e.router.setRoute(d):n({currentRoute:{...e.currentRoute,...d}}),t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(d.paths))}try{if(t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const k=K9(t.internalRouterConfig.basePath);n({router:k}),k.listen(!0,N=>{n({currentRoute:N})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!F.jsonEquals(c,e.colors.config)){const k=kp(c);n({colors:{config:c,theme:k}}),qD(r,k)}const d=t._debug??!1,f=yD({entries:t.pages,debug:d});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:n1(f.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=gd(e.currentRoute.paths),v=(m?M9({flattenedNodes:f.flattenedNodes,searchQuery:m}):void 0)??oT(f.flattenedNodes,e.currentRoute.paths,l);u(v[0]?.entry.title);const C=e.treeBasedControls?.controls;return C?(t._debug&&console.info({currentControls:C}),h`
                <div
                    class="root"
                    ${V(tl,async k=>{const N=k.detail;if(!a(N))return;if(n({loading:!0}),l(N),!(r.shadowRoot.querySelector(kn.tagName)instanceof kn))throw new TypeError(`Failed to find child '${kn.tagName}'`);await Zp(r,m,e.currentRoute)})}
                    ${V(wa.events.controlValueChange,k=>{if(!e.treeBasedControls)return;const N=wD(C,k.detail.fullUrlBreadcrumbs,k.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:N}})})}
                >
                    <${kn.assign({flattenedNodes:f.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${dn.NavHeader}
                            slot=${dn.NavHeader}
                        ></slot>
                    </${kn}>
                    <${bo.assign({controls:C,currentNodes:v,currentRoute:e.currentRoute,debug:d,originalTree:f.tree,router:e.router,showLoading:e.loading})}
                        ${V(bo.events.loadingRender,async k=>{await Vd();const N=r.shadowRoot.querySelector(bo.tagName);N?N.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${bo.tagName}' for scrolling.`),await Vd(),n({loading:!k.detail})})}
                    >
                        <slot
                            name=${dn.Footer}
                            slot=${dn.Footer}
                        ></slot>
                    </${bo}>
                </div>
            `):h`
                    <${fi.assign({message:"Failed to generate page controls."})}></${fi}>
                `}catch(c){return console.error(c),h`
                <p class="error">${$t(c)}</p>
            `}}});async function Zp(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(kn.tagName);if(!(n instanceof kn))throw new TypeError(`Failed to find child '${kn.tagName}'`);await eT(n)}function Hp(e){if(typeof e=="string")return sT(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let t=[0,0,0,0,!1,"unknown"];return t[0]=e.r?e.r:e.red?e.red:!1,t[1]=e.g?e.g:e.green?e.green:!1,t[2]=e.b?e.b:e.blue?e.blue:!1,t[3]=e.a?e.a:e.alpha?e.alpha:1,t[4]=!!(t[0]&&t[1]&&t[2]),t[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",t}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}function sT(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let t=!1,n=[0,0,0,0,t,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let a in s)if(e==a){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:function(c){for(let d=0;d<3;d++)n[d]=parseInt(c[d+1],16);return n[3]=1,!0}},l=u.rex.exec(s[a]);return n[4]=t=u.sprig(l),n}}let i={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:function(s){let a=0,u=0,l=10,c=100,d=2.55,f="1";s[23]&&(f=s[23],delete s[23]),n[3]=f.match(/%/g)?parseFloat(f)/c:parseFloat(f);for(let m=1;m<s.length;m++)s[m]&&(a=a||m,u=m);switch(u){case 4:l=16,c=15,n[3]=parseInt(s[u],l)/c;case 3:l=16;for(let m=0;m<3;m++)n[m]=parseInt(s[a+m]+s[a+m],l);break;case 5:l=16;case 9:n[0]=n[1]=n[2]=l==10?parseFloat(s[u]):parseInt(s[u],l);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[u])*d;break;case 8:l=16,c=255,n[3]=parseInt(s[8],l)/c;case 7:l=16;case 11:for(let m=0;m<3;m++)n[m]=l==10?parseFloat(s[a+m]):parseInt(s[a+m],l);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(s[a+m])*d;break;case 18:n[5]=s[15];for(let m=0;m<3;m++)a++,n[m]=s[a].match(/%/g)?parseFloat(s[a])*2.55:parseFloat(s[a])*255;break;case 22:n[5]=s[a];for(let m=0;m<3;m++)a++,n[m]=s[a]?s[a].match(/%/g)?parseFloat(s[a])/c:parseFloat(s[a]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let j=function(q){let Z=(q+N/30)%12,Le=m*Math.min(D,1-D);return D-Le*Math.max(-1,Math.min(Z-3,9-Z,1))},m,D,v,C,k,N=n[0]%360;if(N<0&&(N+=360),n[5].match(/^hsla?/i))m=n[1],D=n[2],v=0,k=1;else if(n[5].match(/^hwba?/i)){if(v=n[1],C=n[2],v+C>=1){n[0]=n[1]=n[2]=v/(v+C),n[5]="sRGB";break}m=1,D=.5,k=1-v-C}n[0]=Math.round(255*(j(0)*k+v)),n[1]=Math.round(255*(j(8)*k+v)),n[2]=Math.round(255*(j(4)*k+v)),n[5]="sRGB"}break}return!0}},o=i.rex.exec(e);return o?(n[4]=t=i.parsley(o),n):(t=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,t,"parsleyError"])}const nt={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function aT(e,t,r=-1){const n=[0,1.1];if(isNaN(e)||isNaN(t)||Math.min(e,t)<n[0]||Math.max(e,t)>n[1])return 0;let i=0,o=0,s="BoW";return e=e>nt.blkThrs?e:e+Math.pow(nt.blkThrs-e,nt.blkClmp),t=t>nt.blkThrs?t:t+Math.pow(nt.blkThrs-t,nt.blkClmp),Math.abs(t-e)<nt.deltaYmin?0:(t>e?(i=(Math.pow(t,nt.normBG)-Math.pow(e,nt.normTXT))*nt.scaleBoW,o=i<nt.loClip?0:i-nt.loBoWoffset):(s="WoB",i=(Math.pow(t,nt.revBG)-Math.pow(e,nt.revTXT))*nt.scaleWoB,o=i>-.1?0:i+nt.loWoBoffset),r<0?o*100:r==0?Math.round(Math.abs(o)*100)+"<sub>"+s+"</sub>":Number.isInteger(r)?(o*100).toFixed(r):0)}function uT(e,t,r=-1,n=!0){let i=Hp(t),o=Hp(e);return!(o[3]==""||o[3]==1)&&(o=cT(o,i,n)),aT(Jp(o),Jp(i),r)}function lT(e,t=2){const r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],o=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(t),0,0,0,0,0,0,0,0,0];s.length;let a=777;e=Math.abs(e);const u=.2,l=e==0?1:e*u|0;let c=0,d=(e-r[l][c])*u;for(c++;c<o;c++)a=r[l][c],a>400?s[c]=a:e<14.5?s[c]=999:e<29.5?s[c]=777:a>24?s[c]=Math.round(a-n[l][c]*d):s[c]=a-(2*n[l][c]*d|0)*.5;return s}function Jp(e=[0,0,0]){function t(r){return Math.pow(r/255,nt.mainTRC)}return nt.sRco*t(e[0])+nt.sGco*t(e[1])+nt.sBco*t(e[2])}function cT(e=[0,0,0,1],t=[0,0,0],r=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],i=[0,0,0,1,!0];for(let o=0;o<3;o++)i[o]=t[o]*n+e[o]*e[3],r&&(i[o]=Math.min(Math.round(i[o]),255));return i}function dT({background:e,foreground:t}){const r=Y5(Number(uT(t,e)),{digits:1});return{contrast:r,fontSizes:fT(r),contrastLevel:mT(r)}}function fT(e){const t=lT(e).slice(1);return hl(t,(n,i)=>({key:(i+1)*100,value:n}))}function mT(e){return hn.isDefined(Jl.find(t=>t.min<=Math.abs(e)))}var Fu=(e=>(e.SmallBodyText="small-body-text",e.BodyText="body-text",e.NonBodyText="non-body-text",e.LargeText="large-text",e.SpotText="spot-text",e.Decoration="decoration",e.Invisible="invisible",e))(Fu||{});const hT={"small-body-text":"Small Text","body-text":"Body Text","non-body-text":"Non-body Text","large-text":"Headers","spot-text":"Placeholders",decoration:"Decorations",invisible:"Invisible "},Jl=[{min:90,name:"small-body-text",description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:"body-text",description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:"non-body-text",description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:"large-text",description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:"spot-text",description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:"decoration",description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:"invisible",description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];hl(Jl,e=>({key:e.min,value:e}));hl(Jl,e=>({key:e.name,value:e}));const Kc=so()({tagName:"theme-vir-contrast-indicator",styles:$`
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

        .${Ce(Fu.Invisible)} {
            color: red;
        }
        .${Ce(Fu.Decoration)} {
            color: #ff6600;
        }
        .${Ce(Fu.SpotText)} {
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
    `,render({inputs:e}){const t=Jl.toReversed().slice(1).map(i=>h`
                    <div
                        class="gauge-level ${qt({active:i.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),r=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return h`
            <div title=${r} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${t}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${hT[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),gu=so()({tagName:"theme-vir-color-example",state(){return{previewElement:void 0}},events:{toggleShowVars:et()},hostClasses:{"theme-vir-color-example-no-contrast-tips":({inputs:e})=>!e.showContrast},styles:({hostClasses:e})=>$`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Pr};
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
            ${ts};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${Kc} {
            margin-top: 1px;
        }
    `,render({state:e,updateState:t,inputs:r,dispatch:n,events:i}){const o=["foreground","background"].map(l=>{const c=[r.color[l].name,r.showVarValues?":":""].filter(F.isTruthy).join(""),d=r.showVarValues?h`
                      <span>${r.color[l].default}</span>
                  `:Y;return h`
                <p>
                    <span>${c}</span>
                    ${d}
                </p>
            `}),s=r.showVarNames?h`
                  <div class="css-var-names">${o}</div>
              `:Y,a=e.previewElement?dT({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,u=a&&r.showContrast?h`
                      <${Kc.assign({contrast:a,fontWeight:r.fontWeight})}></${Kc}>
                  `:Y;return h`
            <button
                ${V("click",()=>{n(new i.toggleShowVars)})}
                ${qi(l=>{t({previewElement:hn.instanceOf(l,HTMLElement)})})}
                class="color-preview"
                style=${$`
                    color: ${Ce(r.color.foreground.default)};
                    background: ${Ce(r.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${$`
                                visibility: ${Ce((a?.fontSizes[400]||1/0)>150?"hidden":"visible")};
                                font-weight: ${r.fontWeight};
                                font-size: ${a?a.fontSizes[400]:14}px;
                            `}
                        >
                            Min
                        </span>
                    </span>
                </div>
            </button>
            ${u} ${s}
        `}}),Yp=[{title:"Black",fontWeight:400,foreground:Sr["vira-black"]},{title:"Black",fontWeight:700,foreground:Sr["vira-black"]},{title:"White",fontWeight:400,foreground:Sr["vira-white"]},{title:"White",fontWeight:700,foreground:Sr["vira-white"]},{title:"Black",fontWeight:400,background:Sr["vira-black"]},{title:"Black",fontWeight:700,background:Sr["vira-black"]},{title:"White",fontWeight:400,background:Sr["vira-white"]},{title:"White",fontWeight:700,background:Sr["vira-white"]}],pT=["#000000","#ffffff","#000","#fff","white","black"];function gT({colors:e,parent:t,title:r,includeContrast:n}){const i={};Object.entries(e).forEach(([l,c])=>{if(pT.includes(c.default))return;const d=l.replace(/-[\d-]+$/,""),f=l.replace(d,"").replace(/^-+/,"");us(i,d,()=>[]).push({key:l,suffix:f,value:c.default,definition:c,varName:String(c.name)})});const o=be({parent:t,title:r}),s=be({parent:o,title:`${r} Palette`,defineExamples({defineExample:l}){Object.entries(i).forEach(([c,d])=>{l({title:c,styles:$`
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
                                    color: ${Sr["vira-grey-50"].value};
                                }

                                & .color-value {
                                    margin-left: 1ch;
                                }
                            }
                        `,render(){return d.map(f=>h`
                                    <div class="swatch-wrapper">
                                        <div
                                            class="swatch"
                                            style=${$`
                                                background-color: ${Ce(f.value)};
                                            `}
                                        ></div>
                                        <p class="color-details">
                                            <span>${f.varName}</span>
                                            <br />
                                            <span class="color-value">${f.value}</span>
                                        </p>
                                    </div>
                                `)}})})}}),a=be({parent:o,title:`${r} Contrast Black White`,defineExamples({defineExample:l}){Object.entries(i).forEach(([c,d])=>{l({title:c,styles:$`
                            :host {
                                display: flex;
                                flex-direction: column;
                                gap: 24px;
                            }

                            p {
                                ${ts}
                            }

                            .darkness-level {
                                text-align: center;
                                font-size: 12px;
                                color: ${Sr["vira-grey-50"].value};
                            }

                            td {
                                padding: 4px 0;
                            }
                        `,render(){const f=d.map(D=>{const v=Yp.map(C=>h`
                                        <td>
                                            <p class="darkness-level">${D.suffix}</p>
                                            <${gu.assign({color:{background:C.background||D.definition,foreground:C.foreground||D.definition},showVarValues:!0,showVarNames:!1,showContrast:!0,fontWeight:C.fontWeight})}></${gu}>
                                        </td>
                                    `);return h`
                                    <tr>${v}</tr>
                                `}),m=Yp.map(D=>{const v=D.background?"in back":"in front",C=[D.title,`(${v})`,`(${D.fontWeight})`].join(" ");return h`
                                    <th>${C}</th>
                                `});return h`
                                <table cellspacing="0" cellpadding="0">
                                    <thead><tr>${m}</tr></thead>
                                    <tbody>${f}</tbody>
                                </table>
                            `}})})}});function u(l){return be({parent:o,title:`${r} Contrast Self ${l}`,defineExamples({defineExample:c}){Object.entries(i).forEach(([d,f])=>{const m=f.map(D=>({fontWeight:l,title:D.suffix,foreground:D.definition}));c({title:d,styles:$`
                                :host {
                                    display: flex;
                                    flex-direction: column;
                                    gap: 24px;
                                }

                                p {
                                    ${ts}
                                }

                                .darkness-level {
                                    text-align: center;
                                    font-size: 12px;
                                    color: ${Sr["vira-grey-50"].value};
                                }

                                td {
                                    padding: 4px 0;
                                }
                            `,render(){const D=f.map(C=>{const k=m.map(N=>h`
                                            <td>
                                                <p class="darkness-level">${C.suffix}</p>
                                                <${gu.assign({color:{background:N.background||C.definition,foreground:N.foreground||C.definition},showVarValues:!0,showVarNames:!1,showContrast:!0,fontWeight:N.fontWeight})}></${gu}>
                                            </td>
                                        `);return h`
                                        <tr>${k}</tr>
                                    `}),v=m.map(C=>{const k=C.background?"in back":"in front",N=[C.title,`(${k})`,`(${C.fontWeight})`].join(" ");return h`
                                        <th>${N}</th>
                                    `});return h`
                                    <table cellspacing="0" cellpadding="0">
                                        <thead><tr>${v}</tr></thead>
                                        <tbody>${D}</tbody>
                                    </table>
                                `}})})}})}return[o,s,a,u(400),u(700)].filter(F.isTruthy)}const He=be({title:"Elements",parent:void 0}),Bm=be({title:"Styles",parent:void 0}),Qw=be({title:"Util",parent:void 0}),yT=be({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:Q.Color,initValue:""},"Fill Color":{controlType:Q.Color,initValue:""},"Stroke Width":{controlType:Q.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(Wd).forEach(t=>{e({title:t.name,styles:$`
                    :host(:hover) ${L} {
                        background-color: #f2f2f2;
                    }

                    ${L} {
                        padding: 8px;
                        border-radius: ${Rr["vira-form-input-radius"].value};
                    }
                `,render({controls:r}){const n=$`
                        ${b["vira-icon-fill-color"].name}: ${Ce(r["Fill Color"]||"inherit")};
                        ${b["vira-icon-stroke-color"].name}: ${Ce(r["Stroke Color"]||"inherit")};
                        ${b["vira-icon-stroke-width"].name}: ${Ce(r["Stroke Width"]?na(r["Stroke Width"]):"inherit")};
                    `;return h`
                        <${L.assign({icon:t})} style=${n}></${L}>
                    `}})})}}),bT=gT({colors:Sr,parent:Bm,title:"Vira Color",includeContrast:!0}),e2={async element1(){return await _i({seconds:2}),(await ju(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-s3x7ZU2v.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await _i({seconds:2}),(await ju(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-Bzp4jQoO.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},Xp=so()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:Jw(e2)}},render({state:e,inputs:t}){return Yw(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(r){return h`
                    <${Ui}>
                        ${ns("Failed to import element",$t(r))}
                    </${Ui}>
                `},loading(){return h`
                    <${L.assign({icon:Ki})}></${L}>
                `},ready(r){if(r.element1)return h`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return h`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Lr.never("The error element will always error")}})}}),Qp=so()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:Jw(e2)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),Yw(e.dynamicElements,{error(r){return h`
                    <${Ui}>
                        ${ns("Failed to import element",$t(r))}
                    </${Ui}>
                `},loading(){return h`
                    <${L.assign({icon:Ki})}></${L}>
                `},ready(r){if(r.element1)return h`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return h`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Lr.never("The error element will always error")}})}}),eg=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],wT=be({parent:Qw,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:$`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return h`
                    <${Xe.assign({value:String(t.value),options:eg})}
                        ${V(Xe.events.valueChange,n=>{const i=Number(n.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);r({value:i})})}
                    ></${Xe}>
                    <${Xp.assign({numberValue:t.value})}></${Xp}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:$`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return h`
                    <${Xe.assign({value:String(t.value),options:eg})}
                        ${V(Xe.events.valueChange,n=>{const i=Number(n.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);r({value:i})})}
                    ></${Xe}>
                    <${Qp.assign({numberValue:t.value})}></${Qp}>
                `}})}}),vT=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:h`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:$`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:$`
            ${cr} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],$T=be({title:cr.tagName,parent:He,controls:{Selected:{controlType:Q.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:Q.Text,initValue:""}},defineExamples({defineExample:e}){vT.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?h`
                            <${cr.assign(n)}>
                                ${t.customTemplate}
                            </${cr}>
                        `:h`
                            <${cr.assign(n)}></${cr}>
                        `}})})}}),Gd=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new Tm({sanitizeRoute(e){return e}})}}],DT=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:Om.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...Gd,{id:"long",label:h`
                        <${cr.assign({selected:!1})}>
                            <div
                                style=${$`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${cr}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:oi.Both,items:[...Gd,{id:"long",label:h`
                        <${cr.assign({selected:!1})}>
                            <div
                                style=${$`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${cr}>
                    `}]}}],xT=be({parent:He,title:ri.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){DT.forEach(t=>{e({title:t.title,styles:$`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return h`
                        <${ri.assign({items:Gd,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${ri}>
                    `}})})}}),t2=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],AT=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...t2,{id:4,label:"link here",route:{route:{paths:["test"]},router:new Tm({sanitizeRoute(e){return e}})}}]}}],ET=be({parent:He,title:Ys.tagName,defineExamples({defineExample:e}){AT.forEach(t=>{e({title:t.title,render(){return h`
                        <${Ys.assign({isMultiSelect:!1,navController:void 0,items:t2,selected:[],...t.inputs})}></${Ys}>
                    `}})})}}),r2=[];Tr(nl).forEach(e=>{Tr(Om).forEach(t=>{r2.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const CT=be({parent:He,title:Xs.tagName,defineExamples({defineExample:e}){r2.forEach(t=>{e({title:t.title,styles:$`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return h`
                        <${Xs.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${Xs}>
                    `}})})}}),kT=be({parent:He,title:we.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:$`
                ${we} {
                    ${es["vira-focus-outline-border-radius"].name}: 0;
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
            `,render(){return h`
                    <${we.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${we.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${we.slotNames.popUp}>Pop up!</div>
                    </${we}>
                `}}),e({title:"long clipped content",styles:$`
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
            `,render(){return h`
                    <${we.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${we.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${we.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${we}>
                `}}),e({title:"long right anchored content",styles:$`
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
            `,render(){return h`
                    <${we.assign({keepOpenAfterInteraction:!0,horizontalAnchor:oi.Right})}>
                        <div slot=${we.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${we.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${we}>
                `}}),e({title:"long left anchored content",styles:$`
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
            `,render(){return h`
                    <${we.assign({keepOpenAfterInteraction:!0,horizontalAnchor:oi.Left})}>
                        <div slot=${we.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${we.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${we}>
                `}}),e({title:"short right anchored content",styles:$`
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
            `,render(){return h`
                    <${we.assign({keepOpenAfterInteraction:!0,horizontalAnchor:oi.Right})}>
                        <div slot=${we.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${we.slotNames.popUp}>not long</div>
                    </${we}>
                `}})}}),FT=[{title:"menu shadow",styles:Mo.menuShadow},{title:"menu shadow reversed",styles:Mo.menuShadowReversed},{title:"modal",styles:Mo.modal}],ST=be({parent:Bm,title:"Shadows",defineExamples({defineExample:e}){FT.forEach(t=>{e({title:t.title,styles:$`
                    .shadow-block {
                        height: 100px;
                        width: 256px;
                        margin: 32px;
                        ${t.styles}
                        border-radius: 8px;
                        background-color: white;
                    }
                `,render(){return h`
                        <div class="shadow-block"></div>
                    `}})})}}),NT=be({parent:He,title:Ke.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:Q.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return h`
                    <${Ke.assign({text:"Text here",bold:!1})}></${Ke}>
                `}}),e({title:"Bold",render(){return h`
                    <${Ke.assign({text:"Text here",bold:!0})}></${Ke}>
                `}}),e({title:"Dynamic",render({controls:t}){return h`
                    <${Ke.assign({text:"Text here",bold:t.bolded})}></${Ke}>
                `}}),e({title:"Resized",styles:$`
                ${Ke} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return h`
                    <${Ke.assign({text:"Not Bolded",bold:!1})}></${Ke}>
                    <${Ke.assign({text:"Bolded",bold:!0})}></${Ke}>
                `}}),e({title:"Alignment",styles:$`
                ${Ke} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return h`
                    <${Ke.assign({text:"Not Bolded",bold:!1})}></${Ke}>
                    <${Ke.assign({text:"Bolded",bold:!0})}></${Ke}>
                `}}),e({title:"Stylized",styles:$`
                ${Ke} {
                    text-decoration: underline;
                }
            `,render(){return h`
                    <${Ke.assign({text:"Not Bolded",bold:!1})}></${Ke}>
                    <${Ke.assign({text:"Bolded",bold:!0})}></${Ke}>
                `}})}}),TT=be({parent:He,title:fe.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:Q.Color,initValue:fe.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:Q.Color,initValue:fe.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:Q.Color,initValue:fe.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:Q.Color,initValue:fe.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:i}){const o=n??$``;e({title:r,styles:o,render({controls:s}){const a=$`
                        ${fe.cssVars["vira-button-primary-color"].name}: ${Ce(s["Primary color"]||"inherit")};
                        ${fe.cssVars["vira-button-secondary-color"].name}: ${Ce(s["Secondary color"]||"inherit")};
                        ${fe.cssVars["vira-button-primary-hover-color"].name}: ${Ce(s["Hover color"]||"inherit")};
                        ${fe.cssVars["vira-button-primary-active-color"].name}: ${Ce(s["Active color"]||"inherit")};
                    `;return h`
                        <${fe.assign({text:"hello",...i})}
                            style=${a}
                        ></${fe}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Js}}),t({title:"with expanding icon",inputs:{icon:Js,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:Eo.Outline}}),t({title:"only icon",inputs:{icon:Js,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:$`
                ${fe} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:$`
                ${fe} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:$`
                :host {
                    ${fe.cssVars["vira-button-primary-color"].name}: pink;
                    ${fe.cssVars["vira-button-secondary-color"].name}: purple;
                    ${fe.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${fe.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return h`
                    <${fe.assign({text:"hello"})}></${fe}>
                `}})}}),PT=[{title:"basic"},{title:"success",inputs:{cardState:Kd.Success}},{title:"error",inputs:{cardState:Kd.Error}},{title:"long",content:h`
            <p
                style=${$`
                    ${ts}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],IT=be({parent:He,title:_c.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){PT.forEach(t=>{e({title:t.title,render(){return h`
                        <${_c.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${_c}>
                    `}})})}}),MT=be({parent:He,title:pe.tagName,controls:{Checked:{controlType:Q.Checkbox,initValue:!1},Disabled:{controlType:Q.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:r}){return h`
                    <${pe.assign({value:t.checked})}
                        ${V(pe.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${pe}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return h`
                    <${pe.assign({value:t.checked})}
                        ${V(pe.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${pe}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:r}){return h`
                    <${pe.assign({value:t.checked,hasError:!0})}
                        ${V(pe.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${pe}>
                `}}),e({title:"disabled unchecked",render(){return h`
                    <${pe.assign({value:!1,disabled:!0})}></${pe}>
                `}}),e({title:"disabled checked",render(){return h`
                    <${pe.assign({value:!0,disabled:!0})}></${pe}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return h`
                    <${pe.assign({value:t.Checked,disabled:t.Disabled})}></${pe}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return h`
                    <${pe.assign({value:!0})}></${pe}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:r}){return h`
                    <${pe.assign({value:t.checked,label:"label goes here"})}
                        ${V(pe.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${pe}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:r}){return h`
                    <${pe.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${V(pe.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${pe}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:$`
                ${pe} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:r}){return h`
                    <${pe.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${V(pe.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${pe}>
                `}})}}),OT=be({title:Dn.tagName,parent:He,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:$`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>h`
                        <${Dn.assign({expanded:!!r.expandedStates[i]})}
                            ${V(Dn.events.expandChange,o=>{const s=[...r.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${Dn.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${V("click",()=>{const o=[...r.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${tr(!!r.showMoreStates[i],h`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${Dn}>
                    `)}}),e({title:"wider examples",styles:$`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>h`
                        <${Dn.assign({expanded:!!r.expandedStates[i]})}
                            ${V(Dn.events.expandChange,o=>{const s=[...r.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${Dn.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${V("click",()=>{const o=[...r.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${tr(!!r.showMoreStates[i],h`
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
                        </${Dn}>
                    `)}})}}),Qs=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],BT=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Qs,{id:42,label:h`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Qs,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:$`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:$`
            ${Us} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Br}}],RT=be({title:Us.tagName,parent:He,controls:{Selected:{controlType:Q.Dropdown,initValue:"",options:["",...Qs.map(e=>e.label)]},Prefix:{controlType:Q.Text,initValue:""},"Force State":{controlType:Q.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:Q.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:Q.Dropdown,initValue:"",options:["",...Object.keys(Wd)]},Disabled:{controlType:Q.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:Q.Text,initValue:"Select something"}},defineExamples({defineExample:e}){BT.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:i}){const o={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||Qs,selected:i.Selected?[Qs.find(s=>s.label===i.Selected)?.id].filter(F.isTruthy):r.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?Wd[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return h`
                        <${Us.assign(o)}
                            ${V(Us.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${Us}>
                    `}})})}}),LT=be({parent:He,title:Ui.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return h`
                    <${Ui}>Error Content</${Ui}>
                `}})}}),Gc=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],jT=be({parent:He,title:Zt.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:$`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:me.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:me.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:me.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:me.Email,label:"Email Address",value:t.email},password:{type:me.NewPassword,label:"Password",value:t.password},userRole:{type:me.Select,label:"Role",options:Gc,value:t.userRole,placeholder:"placeholder"},disabledField:{type:me.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:me.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return h`
                    <${Zt.assign({fields:n})}
                        ${V(Zt.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${fe.assign({text:"Cancel",buttonStyle:Eo.Outline})}></${fe}>
                            <${fe.assign({text:"Submit"})}></${fe}>
                        </div>
                    </${Zt}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:$`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:me.Text,label:"First Name",value:t.firstName},lastName:{type:me.Text,label:"Last Name",value:t.lastName}};return h`
                    <${Zt.assign({fields:n})}
                        ${V(Zt.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <${mt.assign({value:"",label:"More stuff"})}></${mt}>
                        <div class="buttons">
                            <${fe.assign({text:"Cancel",buttonStyle:Eo.Outline})}></${fe}>
                            <${fe.assign({text:"Submit"})}></${fe}>
                        </div>
                    </${Zt}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:$`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${Zt} {
                    width: 400px;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:me.Text,label:"First Name",value:t.firstName},lastName:{type:me.Text,label:"Last Name",value:t.lastName},subscribe:{type:me.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:me.Email,label:"Email Address",value:t.email},password:{type:me.NewPassword,label:"Password",value:t.password},userRole:{type:me.Select,label:"Role",options:Gc,value:t.userRole}};return h`
                    <${Zt.assign({fields:n})}
                        ${V(Zt.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${fe.assign({text:"Cancel",buttonStyle:Eo.Outline})}></${fe}>
                            <${fe.assign({text:"Submit"})}></${fe}>
                        </div>
                    </${Zt}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:$`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:me.Text,label:"First Name",value:t.firstName},lastName:{type:me.Text,label:"Last Name",value:t.lastName},subscribe:{type:me.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:me.Email,label:"Email Address",value:t.email},password:{type:me.NewPassword,label:"Password",value:t.password},userRole:{type:me.Select,label:"Role",options:Gc,value:t.userRole}};return h`
                    <${Zt.assign({fields:n,isDisabled:!0})}
                        ${V(Zt.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${fe.assign({text:"Cancel",buttonStyle:Eo.Outline})}></${fe}>
                            <${fe.assign({text:"Submit"})}></${fe}>
                        </div>
                    </${Zt}>
                `}})}}),UT=be({title:L.tagName,parent:He,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return h`
                    <${L.assign({icon:Br})}></${L}>
                `}}),e({title:"using createColoredIcon",render(){return h`
                    <${L.assign({icon:Mp(Br,{"vira-icon-stroke-color":"red"})})}></${L}>
                `}}),e({title:"fit container",styles:$`
                ${L} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return h`
                    <${L.assign({icon:Mp(Br,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${L}>
                `}})}}),_T=be({title:Hn.tagName,parent:He,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:$`
                    border-radius: 32px;
                `,loadingSlot:h`
                    <div
                        style=${$`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${L.assign({icon:Ki,fitContainer:!0})}
                            style=${$`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${L}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:$`
                    border-radius: 32px;
                `,errorSlot:h`
                    <div
                        style=${$`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${L.assign({icon:rl,fitContainer:!0})}
                            style=${$`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${L}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:$`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:$`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:$`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:h`
                    <div
                        style=${$`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${L.assign({icon:Ki,fitContainer:!0})}
                            style=${$`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${L}>
                    </div>
                `,errorSlot:h`
                    <div
                        style=${$`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${L.assign({icon:rl,fitContainer:!0})}
                            style=${$`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${L}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:$`
                    ${Hn} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||$``}
                    }

                    ${r.allowReload?$`
                              ${Hn} {
                                  cursor: pointer;
                              }

                              ${Hn}:hover {
                                  border-color: #0055ff;
                              }
                          `:$``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:i}){return h`
                        <${Hn.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${V("click",()=>{r.allowReload&&i({imageUrl:`${r.inputs.imageUrl}?di=${Li()}`})})}
                        >
                            ${r.loadingSlot?h`
                                      <div class="slot-wrapper" slot=${Hn.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:Y}${r.errorSlot?h`
                                      <div class="slot-wrapper" slot=${Hn.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:Y}
                        </${Hn}>
                    `}})})}}),VT=be({title:mt.tagName,parent:He,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:Q.Color,initValue:X["vira-form-foreground-color"].default},"Placeholder color":{controlType:Q.Color,initValue:X["vira-form-placeholder-color"].default},"Border color":{controlType:Q.Color,initValue:X["vira-form-border-color"].default},"Focus color":{controlType:Q.Color,initValue:es["vira-focus-outline-color"].default},"Selection color":{controlType:Q.Color,initValue:X["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:i,inputs:o}){e({title:i,styles:$`
                    ${n||$``}
                `,state(){return{value:o.value}},render({state:s,updateState:a,controls:u}){const l={[String(X["vira-form-foreground-color"].name)]:u["Text color"],[String(X["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(X["vira-form-border-color"].name)]:u["Border color"],[String(es["vira-focus-outline-color"].name)]:u["Focus color"],[String(X["vira-form-text-selection-color"].name)]:u["Selection color"]},c=pr(l,(f,m)=>m||"inherit"),d=Object.entries(c).map(([f,m])=>[f,m].join(": ")+";").join(`
`);return h`
                        <${mt.assign({...o,value:s.value})}
                            style=${d}
                            ${V(mt.events.valueChange,f=>{a({value:f.detail}),console.info("changed:",f.detail)})}
                        ></${mt}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Br}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:$`
                    ${mt} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Br}},{title:"taller height",styles:$`
                    ${mt} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Br}},{title:"shorter height",styles:$`
                    ${mt} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Br}},{title:"max width",styles:$`
                    ${mt} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:$`
                    ${mt} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Oo.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Oo.Email,attributePassthrough:{autocomplete:"username"}}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:$`
                    ${mt} {
                        width: unset;
                    }
                `}].forEach(t)}}),WT=be({title:Ao.tagName,parent:He,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:Q.Color,initValue:""},"Hover color":{controlType:Q.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:i}){const o=$`
                        ${Ao.cssVars["vira-link-hover-color"].name}: ${Ce(i["Hover color"]||"inherit")};
                        color: ${Ce(i["CSS Color"]||"inherit")};
                    `;return h`
                        <${Ao.assign(n)} style=${o}>My Link</${Ao}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),zT=be({title:xn.tagName,parent:He,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:r}){return h`
                    <button
                        ${V("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${xn.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${V(xn.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${xn}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:$`
                ${xn} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${xn.cssVars["vira-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:r}){return h`
                    <button
                        ${V("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${xn.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${V(xn.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${xn}>
                `}})}}),Vs=$`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,Zc=h`
    <${mn.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${mn.slotNames.large}>Large</div>
        <div class="small" slot=${mn.slotNames.small}>Small</div>
    </${mn}>
`,Co={max:120,min:25,default:80},tg=Re()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":na(Co.default)},state(){return{intervalId:void 0,increment:1}},styles:({cssVars:e})=>$`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,init({state:e,updateState:t,host:r,cssVars:n}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{const i=qy.isNumber(W5(WD({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||Co.default;(i>=Co.max||i<=Co.min)&&t({increment:e.increment*-1}),l1({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:na(i+e.increment)})},10)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render(){return h`
            <slot></slot>
        `}}),rg=Re()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":na(Co.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:$`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${Vs}

        .large {
            white-space: nowrap;
        }
    `,init({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{t({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render({state:e}){return h`
            <${mn.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${mn.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${mn.slotNames.small}>Small</div>
            </${mn}>
        `}}),qT=be({title:mn.tagName,parent:He,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:$`
                ${Vs}
            `,render(){return Zc}}),e({title:"overflowing",styles:$`
                ${Vs}

                ${mn} {
                    max-width: 50px;
                }
            `,render(){return Zc}}),e({title:"dynamic size",styles:$`
                ${Vs}

                .wrapper {
                    width: ${Co.max+10}px;
                }
            `,render(){return h`
                    <div class="wrapper">
                        <${tg}>
                            ${Zc}
                        </${tg}>
                    </div>
                `}}),e({title:"dynamic slot",styles:$`
                ${Vs}
            `,render(){return h`
                    <${rg}></${rg}>
                `}})}}),KT=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:$`
            :host {
                ${jt.cssVars["vira-progress-background-color"].name}: red;
                ${jt.cssVars["vira-progress-foreground-color"].name}: black;
                ${jt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${jt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:$`
            :host {
                ${jt.cssVars["vira-progress-background-color"].name}: red;
                ${jt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${jt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${jt} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:$`
            :host {
                ${jt.cssVars["vira-progress-background-color"].name}: red;
                ${jt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${jt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${jt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],GT=be({parent:He,title:jt.tagName,defineExamples({defineExample:e}){KT.forEach(t=>{e({title:t.title,styles:$`
                    ${t.styles||$``}
                `,render(){return h`
                        <${jt.assign({value:50,...t.inputs})}></${jt}>
                    `}})})}}),bt=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],ZT=[{title:"basic",inputs:{options:bt}},{title:"with really long option",inputs:{options:[...bt,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:bt,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:bt,disabled:!0}},{title:"error",inputs:{options:bt,hasError:!0}},{title:"with icon",inputs:{options:bt,icon:Br}},{title:"custom width",inputs:{options:bt},styles:$`
            ${Xe} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:bt,icon:Br},styles:$`
            ${Xe} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:bt,icon:Br},styles:$`
            ${Xe} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:bt,label:"Pick an option"}},{title:"with long label",inputs:{options:bt,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:bt,label:"Pick a really really really really long option"},styles:$`
            ${Xe} {
                width: unset;
            }
        `}],HT=be({parent:He,title:Xe.tagName,defineExamples({defineExample:e}){ZT.forEach(t=>{e({title:t.title,styles:$`
                    ${t.styles||$``}
                `,state(){return{selected:void 0}},render({state:r,updateState:n}){return h`
                        <${Xe.assign({...t.inputs,value:r.selected??t.inputs.value})}
                            ${V(Xe.events.valueChange,i=>{n({selected:i.detail})})}
                        ></${Xe}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return h`
                    <${Xe.assign({options:bt,value:bt[0]?.value})}></${Xe}>
                `}}),e({title:"force update",render(){return h`
                    <${ng}></${ng}>
                `}})}}),ng=Re()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const r=bt.findIndex(i=>i.value===t.value),n=hn.isDefined(bt[(r+1)%bt.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return h`
            <${Xe.assign({options:bt,value:e.value})}></${Xe}>
        `}}),JT=[He,yT,Bm,Qw],YT=[NT,TT,IT,MT,OT,RT,LT,jT,UT,_T,VT,WT,$T,ET,xT,zT,qT,CT,kT,GT,HT,wT,ST,...bT].sort((e,t)=>e.title.localeCompare(t.title)),XT=[...JT,...YT];so()({tagName:"vira-book-app",styles:$`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${qc} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return h`
            <${qc.assign({internalRouterConfig:{basePath:Sm("vira"),useInternalRouter:!0},pages:XT,themeColor:"#33ccff"})}>
                <h1 slot=${dn.NavHeader}>Vira</h1>
            </${qc}>
        `}});export{so as d,h};
