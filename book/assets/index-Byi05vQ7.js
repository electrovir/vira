(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Yt;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(Yt||(Yt={}));function hy(e,t=r=>r){const r=new Map;return e.filter(n=>{const o=t(n);return r.get(o)?!1:(r.set(o,n),!0)})}class fh{diff(t,r,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const i=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(i,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,u,n,o)}diffWithOptionsObj(t,r,n,o){var i;const s=E=>{if(E=this.postProcess(E,n),o){setTimeout(function(){o(E)},0);return}else return E},a=r.length,u=t.length;let c=1,d=a+u;n.maxEditLength!=null&&(d=Math.min(d,n.maxEditLength));const f=(i=n.timeout)!==null&&i!==void 0?i:1/0,h=Date.now()+f,m=[{oldPos:-1,lastComponent:void 0}];let y=this.extractCommon(m[0],r,t,0,n);if(m[0].oldPos+1>=u&&y+1>=a)return s(this.buildValues(m[0].lastComponent,r,t));let $=-1/0,k=1/0;const x=()=>{for(let E=Math.max($,-c);E<=Math.min(k,c);E+=2){let N;const R=m[E-1],q=m[E+1];R&&(m[E-1]=void 0);let ie=!1;if(q){const de=q.oldPos-E;ie=q&&0<=de&&de<a}const De=R&&R.oldPos+1<u;if(!ie&&!De){m[E]=void 0;continue}if(!De||ie&&R.oldPos<q.oldPos?N=this.addToPath(q,!0,!1,0,n):N=this.addToPath(R,!1,!0,1,n),y=this.extractCommon(N,r,t,E,n),N.oldPos+1>=u&&y+1>=a)return s(this.buildValues(N.lastComponent,r,t))||!0;m[E]=N,N.oldPos+1>=u&&(k=Math.min(k,E-1)),y+1>=a&&($=Math.max($,E+1))}c++};if(o)(function E(){setTimeout(function(){if(c>d||Date.now()>h)return o(void 0);x()||E()},0)})();else for(;c<=d&&Date.now()<=h;){const E=x();if(E)return E}}addToPath(t,r,n,o,i){const s=t.lastComponent;return s&&!i.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+o,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,o,i){const s=r.length,a=n.length;let u=t.oldPos,c=u-o,d=0;for(;c+1<s&&u+1<a&&this.equals(n[u+1],r[c+1],i);)c++,u++,d++,i.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return d&&!i.oneChangePerToken&&(t.lastComponent={count:d,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,c}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const o=[];let i;for(;t;)o.push(t),i=t.previousComponent,delete t.previousComponent,t=i;o.reverse();const s=o.length;let a=0,u=0,c=0;for(;a<s;a++){const d=o[a];if(d.removed)d.value=this.join(n.slice(c,c+d.count)),c+=d.count;else{if(!d.added&&this.useLongestToken){let f=r.slice(u,u+d.count);f=f.map(function(h,m){const y=n[c+m];return y.length>h.length?y:h}),d.value=this.join(f)}else d.value=this.join(r.slice(u,u+d.count));u+=d.count,d.added||(c+=d.count)}}return o}}function yg(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function vg(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function e0(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function t0(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function ga(e,t){return e0(e,t,"")}function Qu(e,t){return t0(e,t,"")}function wg(e,t){return t.slice(0,J$(e,t))}function J$(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const o=Array(n);let i=0;o[0]=0;for(let s=1;s<n;s++){for(t[s]==t[i]?o[s]=o[i]:o[s]=i;i>0&&t[s]!=t[i];)i=o[i];t[s]==t[i]&&i++}i=0;for(let s=r;s<e.length;s++){for(;i>0&&e[s]!=t[i];)i=o[i];e[s]==t[i]&&i++}return i}function pa(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function Fo(e){const t=e.match(/^\s*/);return t?t[0]:""}const Bl="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Y$=new RegExp(`[${Bl}]+|\\s+|[^${Bl}]`,"ug");class X$ extends fh{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const a of Array.from(s.segment(t))){const u=a.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(u)?n[n.length-1]+=u:n.push(u)}}else n=t.match(Y$)||[];const o=[];let i=null;return n.forEach(s=>{/\s/.test(s)?i==null?o.push(s):o.push(o.pop()+s):i!=null&&/\s/.test(i)?o[o.length-1]==i?o.push(o.pop()+s):o.push(i+s):o.push(s),i=s}),o}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,o=null,i=null;return t.forEach(s=>{s.added?o=s:s.removed?i=s:((o||i)&&$g(n,i,o,s),n=s,o=null,i=null)}),(o||i)&&$g(n,i,o,null),t}}const Q$=new X$;function ek(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?nk(e,t,r):Q$.diff(e,t,r)}function $g(e,t,r,n){if(t&&r){const o=Fo(t.value),i=pa(t.value),s=Fo(r.value),a=pa(r.value);if(e){const u=yg(o,s);e.value=t0(e.value,s,u),t.value=ga(t.value,u),r.value=ga(r.value,u)}if(n){const u=vg(i,a);n.value=e0(n.value,a,u),t.value=Qu(t.value,u),r.value=Qu(r.value,u)}}else if(r){if(e){const o=Fo(r.value);r.value=r.value.substring(o.length)}if(n){const o=Fo(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=Fo(n.value),i=Fo(t.value),s=pa(t.value),a=yg(o,i);t.value=ga(t.value,a);const u=vg(ga(o,a),s);t.value=Qu(t.value,u),n.value=e0(n.value,o,u),e.value=t0(e.value,o,o.slice(0,o.length-u.length))}else if(n){const o=Fo(n.value),i=pa(t.value),s=wg(i,o);t.value=Qu(t.value,s)}else if(e){const o=pa(e.value),i=Fo(t.value),s=wg(o,i);t.value=ga(t.value,s)}}class tk extends fh{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Bl}]+|[^\\S\\n\\r]+|[^${Bl}]`,"ug");return t.match(r)||[]}}const rk=new tk;function nk(e,t,r){return rk.diff(e,t,r)}class ok extends fh{constructor(){super(...arguments),this.tokenize=ak}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const ik=new ok;function sk(e,t,r){return ik.diff(e,t,r)}function ak(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const i=n[o];o%2&&!t.newlineIsToken?r[r.length-1]+=i:r.push(i)}return r}function kg(e,t){return my(e,new Map)}function my(e,t,r){if(e&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((o,i)=>o[0].localeCompare(i[0])).forEach(([o,i])=>{const s=my(i,t);n[o]=s}),n}else return e}var uk=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,lk=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ck=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Cd={Space_Separator:uk,ID_Start:lk,ID_Continue:ck},gt={isSpaceSeparator(e){return typeof e=="string"&&Cd.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Cd.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Cd.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let r0,gr,uo,Rl,Go,xn,Lt,hh,_a;var dk=function(t,r){r0=String(t),gr="start",uo=[],Rl=0,Go=1,xn=0,Lt=void 0,hh=void 0,_a=void 0;do Lt=fk(),gk[gr]();while(Lt.type!=="eof");return typeof r=="function"?n0({"":_a},"",r):_a};function n0(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const i=String(o),s=n0(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const i=n0(n,o,r);i===void 0?delete n[o]:Object.defineProperty(n,o,{value:i,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let ue,se,Fa,oo,pe;function fk(){for(ue="default",se="",Fa=!1,oo=1;;){pe=bo();const e=gy[ue]();if(e)return e}}function bo(){if(r0[Rl])return String.fromCodePoint(r0.codePointAt(Rl))}function P(){const e=bo();return e===`
`?(Go++,xn=0):e?xn+=e.length:xn++,e&&(Rl+=e.length),e}const gy={default(){switch(pe){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":P();return;case"/":P(),ue="comment";return;case void 0:return P(),Ze("eof")}if(gt.isSpaceSeparator(pe)){P();return}return gy[gr]()},comment(){switch(pe){case"*":P(),ue="multiLineComment";return;case"/":P(),ue="singleLineComment";return}throw Ye(P())},multiLineComment(){switch(pe){case"*":P(),ue="multiLineCommentAsterisk";return;case void 0:throw Ye(P())}P()},multiLineCommentAsterisk(){switch(pe){case"*":P();return;case"/":P(),ue="default";return;case void 0:throw Ye(P())}P(),ue="multiLineComment"},singleLineComment(){switch(pe){case`
`:case"\r":case"\u2028":case"\u2029":P(),ue="default";return;case void 0:return P(),Ze("eof")}P()},value(){switch(pe){case"{":case"[":return Ze("punctuator",P());case"n":return P(),ci("ull"),Ze("null",null);case"t":return P(),ci("rue"),Ze("boolean",!0);case"f":return P(),ci("alse"),Ze("boolean",!1);case"-":case"+":P()==="-"&&(oo=-1),ue="sign";return;case".":se=P(),ue="decimalPointLeading";return;case"0":se=P(),ue="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":se=P(),ue="decimalInteger";return;case"I":return P(),ci("nfinity"),Ze("numeric",1/0);case"N":return P(),ci("aN"),Ze("numeric",NaN);case'"':case"'":Fa=P()==='"',se="",ue="string";return}throw Ye(P())},identifierNameStartEscape(){if(pe!=="u")throw Ye(P());P();const e=o0();switch(e){case"$":case"_":break;default:if(!gt.isIdStartChar(e))throw xg();break}se+=e,ue="identifierName"},identifierName(){switch(pe){case"$":case"_":case"‌":case"‍":se+=P();return;case"\\":P(),ue="identifierNameEscape";return}if(gt.isIdContinueChar(pe)){se+=P();return}return Ze("identifier",se)},identifierNameEscape(){if(pe!=="u")throw Ye(P());P();const e=o0();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!gt.isIdContinueChar(e))throw xg();break}se+=e,ue="identifierName"},sign(){switch(pe){case".":se=P(),ue="decimalPointLeading";return;case"0":se=P(),ue="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":se=P(),ue="decimalInteger";return;case"I":return P(),ci("nfinity"),Ze("numeric",oo*(1/0));case"N":return P(),ci("aN"),Ze("numeric",NaN)}throw Ye(P())},zero(){switch(pe){case".":se+=P(),ue="decimalPoint";return;case"e":case"E":se+=P(),ue="decimalExponent";return;case"x":case"X":se+=P(),ue="hexadecimal";return}return Ze("numeric",oo*0)},decimalInteger(){switch(pe){case".":se+=P(),ue="decimalPoint";return;case"e":case"E":se+=P(),ue="decimalExponent";return}if(gt.isDigit(pe)){se+=P();return}return Ze("numeric",oo*Number(se))},decimalPointLeading(){if(gt.isDigit(pe)){se+=P(),ue="decimalFraction";return}throw Ye(P())},decimalPoint(){switch(pe){case"e":case"E":se+=P(),ue="decimalExponent";return}if(gt.isDigit(pe)){se+=P(),ue="decimalFraction";return}return Ze("numeric",oo*Number(se))},decimalFraction(){switch(pe){case"e":case"E":se+=P(),ue="decimalExponent";return}if(gt.isDigit(pe)){se+=P();return}return Ze("numeric",oo*Number(se))},decimalExponent(){switch(pe){case"+":case"-":se+=P(),ue="decimalExponentSign";return}if(gt.isDigit(pe)){se+=P(),ue="decimalExponentInteger";return}throw Ye(P())},decimalExponentSign(){if(gt.isDigit(pe)){se+=P(),ue="decimalExponentInteger";return}throw Ye(P())},decimalExponentInteger(){if(gt.isDigit(pe)){se+=P();return}return Ze("numeric",oo*Number(se))},hexadecimal(){if(gt.isHexDigit(pe)){se+=P(),ue="hexadecimalInteger";return}throw Ye(P())},hexadecimalInteger(){if(gt.isHexDigit(pe)){se+=P();return}return Ze("numeric",oo*Number(se))},string(){switch(pe){case"\\":P(),se+=hk();return;case'"':if(Fa)return P(),Ze("string",se);se+=P();return;case"'":if(!Fa)return P(),Ze("string",se);se+=P();return;case`
`:case"\r":throw Ye(P());case"\u2028":case"\u2029":pk(pe);break;case void 0:throw Ye(P())}se+=P()},start(){switch(pe){case"{":case"[":return Ze("punctuator",P())}ue="value"},beforePropertyName(){switch(pe){case"$":case"_":se=P(),ue="identifierName";return;case"\\":P(),ue="identifierNameStartEscape";return;case"}":return Ze("punctuator",P());case'"':case"'":Fa=P()==='"',ue="string";return}if(gt.isIdStartChar(pe)){se+=P(),ue="identifierName";return}throw Ye(P())},afterPropertyName(){if(pe===":")return Ze("punctuator",P());throw Ye(P())},beforePropertyValue(){ue="value"},afterPropertyValue(){switch(pe){case",":case"}":return Ze("punctuator",P())}throw Ye(P())},beforeArrayValue(){if(pe==="]")return Ze("punctuator",P());ue="value"},afterArrayValue(){switch(pe){case",":case"]":return Ze("punctuator",P())}throw Ye(P())},end(){throw Ye(P())}};function Ze(e,t){return{type:e,value:t,line:Go,column:xn}}function ci(e){for(const t of e){if(bo()!==t)throw Ye(P());P()}}function hk(){switch(bo()){case"b":return P(),"\b";case"f":return P(),"\f";case"n":return P(),`
`;case"r":return P(),"\r";case"t":return P(),"	";case"v":return P(),"\v";case"0":if(P(),gt.isDigit(bo()))throw Ye(P());return"\0";case"x":return P(),mk();case"u":return P(),o0();case`
`:case"\u2028":case"\u2029":return P(),"";case"\r":return P(),bo()===`
`&&P(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Ye(P());case void 0:throw Ye(P())}return P()}function mk(){let e="",t=bo();if(!gt.isHexDigit(t)||(e+=P(),t=bo(),!gt.isHexDigit(t)))throw Ye(P());return e+=P(),String.fromCodePoint(parseInt(e,16))}function o0(){let e="",t=4;for(;t-- >0;){const r=bo();if(!gt.isHexDigit(r))throw Ye(P());e+=P()}return String.fromCodePoint(parseInt(e,16))}const gk={start(){if(Lt.type==="eof")throw di();Fd()},beforePropertyName(){switch(Lt.type){case"identifier":case"string":hh=Lt.value,gr="afterPropertyName";return;case"punctuator":el();return;case"eof":throw di()}},afterPropertyName(){if(Lt.type==="eof")throw di();gr="beforePropertyValue"},beforePropertyValue(){if(Lt.type==="eof")throw di();Fd()},beforeArrayValue(){if(Lt.type==="eof")throw di();if(Lt.type==="punctuator"&&Lt.value==="]"){el();return}Fd()},afterPropertyValue(){if(Lt.type==="eof")throw di();switch(Lt.value){case",":gr="beforePropertyName";return;case"}":el()}},afterArrayValue(){if(Lt.type==="eof")throw di();switch(Lt.value){case",":gr="beforeArrayValue";return;case"]":el()}},end(){}};function Fd(){let e;switch(Lt.type){case"punctuator":switch(Lt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Lt.value;break}if(_a===void 0)_a=e;else{const t=uo[uo.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,hh,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")uo.push(e),Array.isArray(e)?gr="beforeArrayValue":gr="beforePropertyName";else{const t=uo[uo.length-1];t==null?gr="end":Array.isArray(t)?gr="afterArrayValue":gr="afterPropertyValue"}}function el(){uo.pop();const e=uo[uo.length-1];e==null?gr="end":Array.isArray(e)?gr="afterArrayValue":gr="afterPropertyValue"}function Ye(e){return Ll(e===void 0?`JSON5: invalid end of input at ${Go}:${xn}`:`JSON5: invalid character '${py(e)}' at ${Go}:${xn}`)}function di(){return Ll(`JSON5: invalid end of input at ${Go}:${xn}`)}function xg(){return xn-=5,Ll(`JSON5: invalid identifier character at ${Go}:${xn}`)}function pk(e){console.warn(`JSON5: '${py(e)}' in strings is not valid ECMAScript; consider escaping`)}function py(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Ll(e){const t=new SyntaxError(e);return t.lineNumber=Go,t.columnNumber=xn,t}var bk=function(t,r,n){const o=[];let i="",s,a,u="",c;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,c=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const $ of r){let k;typeof $=="string"?k=$:(typeof $=="number"||$ instanceof String||$ instanceof Number)&&(k=String($)),k!==void 0&&s.indexOf(k)<0&&s.push(k)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),d("",{"":t});function d($,k){let x=k[$];switch(x!=null&&(typeof x.toJSON5=="function"?x=x.toJSON5($):typeof x.toJSON=="function"&&(x=x.toJSON($))),a&&(x=a.call(k,$,x)),x instanceof Number?x=Number(x):x instanceof String?x=String(x):x instanceof Boolean&&(x=x.valueOf()),x){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof x=="string")return f(x);if(typeof x=="number")return String(x);if(typeof x=="object")return Array.isArray(x)?y(x):h(x)}function f($){const k={"'":.1,'"':.2},x={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let E="";for(let R=0;R<$.length;R++){const q=$[R];switch(q){case"'":case'"':k[q]++,E+=q;continue;case"\0":if(gt.isDigit($[R+1])){E+="\\x00";continue}}if(x[q]){E+=x[q];continue}if(q<" "){let ie=q.charCodeAt(0).toString(16);E+="\\x"+("00"+ie).substring(ie.length);continue}E+=q}const N=c||Object.keys(k).reduce((R,q)=>k[R]<k[q]?R:q);return E=E.replace(new RegExp(N,"g"),x[N]),N+E+N}function h($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let k=i;i=i+u;let x=s||Object.keys($),E=[];for(const R of x){const q=d(R,$);if(q!==void 0){let ie=m(R)+":";u!==""&&(ie+=" "),ie+=q,E.push(ie)}}let N;if(E.length===0)N="{}";else{let R;if(u==="")R=E.join(","),N="{"+R+"}";else{let q=`,
`+i;R=E.join(q),N=`{
`+i+R+`,
`+k+"}"}}return o.pop(),i=k,N}function m($){if($.length===0)return f($);const k=String.fromCodePoint($.codePointAt(0));if(!gt.isIdStartChar(k))return f($);for(let x=k.length;x<$.length;x++)if(!gt.isIdContinueChar(String.fromCodePoint($.codePointAt(x))))return f($);return $}function y($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let k=i;i=i+u;let x=[];for(let N=0;N<$.length;N++){const R=d(String(N),$);x.push(R!==void 0?R:"null")}let E;if(x.length===0)E="[]";else if(u==="")E="["+x.join(",")+"]";else{let N=`,
`+i,R=x.join(N);E=`[
`+i+R+`,
`+k+"]"}return o.pop(),i=k,E}};const yk={parse:dk,stringify:bk};var vk=yk;const by="__@@augment-vir-undefined-sentinel@@__",wk=new RegExp(`['"]${by}['"]`);function v(e,t){if(typeof e=="string")return e;try{return vk.stringify(e,(n,o)=>o===void 0?by:typeof o=="bigint"?Number(o):o,t||void 0).split(wk).join("undefined")}catch{return String(e)}}var $k=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Dn;(function(e){e.Node="node",e.Web="web"})(Dn||(Dn={}));function kk(){return $k?Dn.Node:Dn.Web}const yy=kk();function mh(e){return yy===e}function vy(e){return e[yy]()}function xk(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",o=n?sk:ek,i=[r?"":`
`,v(t&&typeof t=="object"&&!Array.isArray(t)?kg(t):t,4),`
`].join(""),s=[r?"":`
`,v(e&&typeof e=="object"&&!Array.isArray(e)?kg(e):e,4),`
`].join(""),a=Dk(n,o(i,s)),u=mh(Dn.Node);return[[u?ho.Green:""," +added (unexpected, added in actual)",u?ho.Red:""," -missing (expected, missing from actual)",u?ho.Reset:""].join(""),r?`

`:`
`,a].join("")}var ho;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(ho||(ho={}));var jl;(function(e){e.Added="+",e.Removed="-"})(jl||(jl={}));function Dk(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(o=>Dg(o,n)).join(`
`)).join(""):t.map(n=>Dg(void 0,n)).join("")}function Dg(e,t){if(e!=null&&!e)return"";const r=mh(Dn.Node),n=t.added?jl.Added:t.removed?jl.Removed:e==null?"":" ",o=t.added?ho.Green:t.removed?ho.Red:ho.Reset;return[r?o:"",n,e??t.value,ho.Reset].join("")}function je(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ak(e){return je(e).filter(t=>isNaN(Number(t)))}function Br(e){return Ak(e).map(r=>e[r])}const Ek=[".",":",";",",","?","!"],Ck=new RegExp(`[${Ek.join("")}]+$`);function Ag(e){return e.replace(Ck,"")}function Wt(e){return e==null||e===""||e==="undefined"||e==="null"?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):v(e)}function Vi(...e){const t=e.map(i=>Wt(i)).filter(i=>!!Ag(i)),r=t[t.length-1]?.endsWith("."),n=t.map(i=>Ag(Wt(i)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function ht(e){return e instanceof Error?e:new Error(Wt(e))}function Hs(e,t){const r=ht(e),n=Vi(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var M;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(M||(M={}));var K;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(K||(K={}));K.ClientError,K.ServerError;M.Continue+"",K.Information,M.SwitchingProtocols+"",K.Information,M.Processing+"",K.Information,M.EarlyHints+"",K.Information,M.Ok+"",K.Success,M.Created+"",K.Success,M.Accepted+"",K.Success,M.NonAuthoritativeInformation+"",K.Success,M.NoContent+"",K.Success,M.ResetContent+"",K.Success,M.PartialContent+"",K.Success,M.MultiStatus+"",K.Success,M.AlreadyReported+"",K.Success,M.ImUsed+"",K.Success,M.MultipleChoices+"",K.Redirect,M.MovedPermanently+"",K.Redirect,M.Found+"",K.Redirect,M.SeeOther+"",K.Redirect,M.NotModified+"",K.Redirect,M.UseProxy+"",K.Redirect,M.Unused+"",K.Redirect,M.TemporaryRedirect+"",K.Redirect,M.PermanentRedirect+"",K.Redirect,M.BadRequest+"",K.ClientError,M.Unauthorized+"",K.ClientError,M.PaymentRequired+"",K.ClientError,M.Forbidden+"",K.ClientError,M.NotFound+"",K.ClientError,M.MethodNotAllowed+"",K.ClientError,M.NotAcceptable+"",K.ClientError,M.ProxyAuthenticationRequired+"",K.ClientError,M.RequestTimeout+"",K.ClientError,M.Conflict+"",K.ClientError,M.Gone+"",K.ClientError,M.LengthRequired+"",K.ClientError,M.PreconditionFailed+"",K.ClientError,M.PayloadTooLarge+"",K.ClientError,M.UriTooLong+"",K.ClientError,M.UnsupportedMediaType+"",K.ClientError,M.RangeNotSatisfiable+"",K.ClientError,M.ExpectationFailed+"",K.ClientError,M.ImATeapot+"",K.ClientError,M.MisdirectedRequest+"",K.ClientError,M.UnprocessableContent+"",K.ClientError,M.Locked+"",K.ClientError,M.FailedDependency+"",K.ClientError,M.TooEarly+"",K.ClientError,M.UpgradeRequired+"",K.ClientError,M.PreconditionRequired+"",K.ClientError,M.TooManyRequests+"",K.ClientError,M.RequestHeaderFieldsTooLarge+"",K.ClientError,M.UnavailableForLegalReasons+"",K.ClientError,M.InternalServerError+"",K.ServerError,M.NotImplemented+"",K.ServerError,M.BadGateway+"",K.ServerError,M.ServiceUnavailable+"",K.ServerError,M.GatewayTimeout+"",K.ServerError,M.HttpVersionNotSupported+"",K.ServerError,M.VariantAlsoNegotiates+"",K.ServerError,M.InsufficientStorage+"",K.ServerError,M.LoopDetected+"",K.ServerError,M.NotExtended+"",K.ServerError,M.NetworkAuthenticationRequired+"",K.ServerError;const El={[K.Information]:[M.Continue,M.SwitchingProtocols,M.Processing,M.EarlyHints],[K.Success]:[M.Ok,M.Created,M.Accepted,M.NonAuthoritativeInformation,M.NoContent,M.ResetContent,M.PartialContent,M.MultiStatus,M.AlreadyReported,M.ImUsed],[K.Redirect]:[M.MultipleChoices,M.MovedPermanently,M.Found,M.SeeOther,M.NotModified,M.UseProxy,M.Unused,M.TemporaryRedirect,M.PermanentRedirect],[K.ClientError]:[M.BadRequest,M.Unauthorized,M.PaymentRequired,M.Forbidden,M.NotFound,M.MethodNotAllowed,M.NotAcceptable,M.ProxyAuthenticationRequired,M.RequestTimeout,M.Conflict,M.Gone,M.LengthRequired,M.PreconditionFailed,M.PayloadTooLarge,M.UriTooLong,M.UnsupportedMediaType,M.RangeNotSatisfiable,M.ExpectationFailed,M.ImATeapot,M.MisdirectedRequest,M.UnprocessableContent,M.Locked,M.FailedDependency,M.TooEarly,M.UpgradeRequired,M.PreconditionRequired,M.TooManyRequests,M.RequestHeaderFieldsTooLarge,M.UnavailableForLegalReasons],[K.ServerError]:[M.InternalServerError,M.NotImplemented,M.BadGateway,M.ServiceUnavailable,M.GatewayTimeout,M.HttpVersionNotSupported,M.VariantAlsoNegotiates,M.InsufficientStorage,M.LoopDetected,M.NotExtended,M.NetworkAuthenticationRequired]};function gh({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class _l{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(ht(n))}})}}class qi extends Error{}class Fk extends qi{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Mk extends qi{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Sk extends qi{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class gs extends qi{}class wy extends qi{constructor(t){super(`Invalid unit ${t}`)}}class sr extends qi{}class Mo extends qi{constructor(){super("Zone is an abstract class")}}const V="numeric",An="short",Ur="long",Ul={year:V,month:V,day:V},$y={year:V,month:An,day:V},Tk={year:V,month:An,day:V,weekday:An},ky={year:V,month:Ur,day:V},xy={year:V,month:Ur,day:V,weekday:Ur},Dy={hour:V,minute:V},Ay={hour:V,minute:V,second:V},Ey={hour:V,minute:V,second:V,timeZoneName:An},Cy={hour:V,minute:V,second:V,timeZoneName:Ur},Fy={hour:V,minute:V,hourCycle:"h23"},My={hour:V,minute:V,second:V,hourCycle:"h23"},Sy={hour:V,minute:V,second:V,hourCycle:"h23",timeZoneName:An},Ty={hour:V,minute:V,second:V,hourCycle:"h23",timeZoneName:Ur},Ny={year:V,month:V,day:V,hour:V,minute:V},Py={year:V,month:V,day:V,hour:V,minute:V,second:V},Iy={year:V,month:An,day:V,hour:V,minute:V},Oy={year:V,month:An,day:V,hour:V,minute:V,second:V},Nk={year:V,month:An,day:V,weekday:An,hour:V,minute:V},By={year:V,month:Ur,day:V,hour:V,minute:V,timeZoneName:An},Ry={year:V,month:Ur,day:V,hour:V,minute:V,second:V,timeZoneName:An},Ly={year:V,month:Ur,day:V,weekday:Ur,hour:V,minute:V,timeZoneName:Ur},jy={year:V,month:Ur,day:V,weekday:Ur,hour:V,minute:V,second:V,timeZoneName:Ur};class Au{get type(){throw new Mo}get name(){throw new Mo}get ianaName(){return this.name}get isUniversal(){throw new Mo}offsetName(t,r){throw new Mo}formatOffset(t,r){throw new Mo}offset(t){throw new Mo}equals(t){throw new Mo}get isValid(){throw new Mo}}let Md=null;class xc extends Au{static get instance(){return Md===null&&(Md=new xc),Md}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Jy(t,r,n)}formatOffset(t,r){return Ua(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const i0=new Map;function Pk(e){let t=i0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),i0.set(e,t)),t}const Ik={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Ok(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,s,a,u,c,d]=n;return[s,o,i,a,u,c,d]}function Bk(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:s}=r[o],a=Ik[i];i==="era"?n[a]=s:te(a)||(n[a]=parseInt(s,10))}return n}const Sd=new Map;class vo extends Au{static create(t){let r=Sd.get(t);return r===void 0&&Sd.set(t,r=new vo(t)),r}static resetCache(){Sd.clear(),i0.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=vo.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Jy(t,r,n,this.name)}formatOffset(t,r){return Ua(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=Pk(this.name);let[o,i,s,a,u,c,d]=n.formatToParts?Bk(n,r):Ok(n,r);a==="BC"&&(o=-Math.abs(o)+1);const h=Ac({year:o,month:i,day:s,hour:u===24?0:u,minute:c,second:d,millisecond:0});let m=+r;const y=m%1e3;return m-=y>=0?y:1e3+y,(h-m)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Eg={};function Rk(e,t={}){const r=JSON.stringify([e,t]);let n=Eg[r];return n||(n=new Intl.ListFormat(e,t),Eg[r]=n),n}const s0=new Map;function a0(e,t={}){const r=JSON.stringify([e,t]);let n=s0.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),s0.set(r,n)),n}const u0=new Map;function Lk(e,t={}){const r=JSON.stringify([e,t]);let n=u0.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),u0.set(r,n)),n}const l0=new Map;function jk(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=l0.get(o);return i===void 0&&(i=new Intl.RelativeTimeFormat(e,t),l0.set(o,i)),i}let Ma=null;function _k(){return Ma||(Ma=new Intl.DateTimeFormat().resolvedOptions().locale,Ma)}const c0=new Map;function _y(e){let t=c0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),c0.set(e,t)),t}const d0=new Map;function Uk(e){let t=d0.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...Uy,...t}),d0.set(e,t)}return t}function zk(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=a0(e).resolvedOptions(),o=e}catch{const u=e.substring(0,r);n=a0(u).resolvedOptions(),o=u}const{numberingSystem:i,calendar:s}=n;return[o,i,s]}}function Vk(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function qk(e){const t=[];for(let r=1;r<=12;r++){const n=ne.utc(2009,r,1);t.push(e(n))}return t}function Wk(e){const t=[];for(let r=1;r<=7;r++){const n=ne.utc(2016,11,13+r);t.push(e(n))}return t}function tl(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function Kk(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||_y(e.locale).numberingSystem==="latn"}class Gk{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=Lk(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):wh(t,3);return wt(r,this.padTo)}}}class Hk{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&vo.create(a).valid?(o=a,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=a0(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Zk{constructor(t,r,n){this.opts={style:"long",...n},!r&&Hy()&&(this.rtf=jk(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):b4(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Uy={firstDay:1,minimalDays:4,weekend:[6,7]};class Se{static fromOpts(t){return Se.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,i=!1){const s=t||ot.defaultLocale,a=s||(i?"en-US":_k()),u=r||ot.defaultNumberingSystem,c=n||ot.defaultOutputCalendar,d=h0(o)||ot.defaultWeekSettings;return new Se(a,u,c,d,s)}static resetCache(){Ma=null,s0.clear(),u0.clear(),l0.clear(),c0.clear(),d0.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return Se.create(t,r,n,o)}constructor(t,r,n,o,i){const[s,a,u]=zk(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=o,this.intl=Vk(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Kk(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Se.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,h0(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return tl(this,t,Qy,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const o=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";if(!this.monthsCache[i][t]){const s=n?a=>this.dtFormatter(a,o).format():a=>this.extract(a,o,"month");this.monthsCache[i][t]=qk(s)}return this.monthsCache[i][t]})}weekdays(t,r=!1){return tl(this,t,rv,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=Wk(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return tl(this,void 0,()=>nv,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[ne.utc(2016,11,13,9),ne.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return tl(this,t,ov,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[ne.utc(-40,1,1),ne.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),s=i.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new Gk(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Hk(t,this.intl,r)}relFormatter(t={}){return new Zk(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Rk(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||_y(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Zy()?Uk(this.locale):Uy}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Td=null;class pr extends Au{static get utcInstance(){return Td===null&&(Td=new pr(0)),Td}static instance(t){return t===0?pr.utcInstance:new pr(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new pr(Ec(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Ua(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Ua(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Ua(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Jk extends Au{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Bo(e,t){if(te(e)||e===null)return t;if(e instanceof Au)return e;if(r4(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?xc.instance:r==="utc"||r==="gmt"?pr.utcInstance:pr.parseSpecifier(r)||vo.create(e)}else return zo(e)?pr.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Jk(e)}const ph={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Cg={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Yk=ph.hanidec.replace(/[\[|\]]/g,"").split("");function Xk(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(ph.hanidec)!==-1)t+=Yk.indexOf(e[r]);else for(const o in Cg){const[i,s]=Cg[o];n>=i&&n<=s&&(t+=n-i)}}return parseInt(t,10)}else return t}const f0=new Map;function Qk(){f0.clear()}function pn({numberingSystem:e},t=""){const r=e||"latn";let n=f0.get(r);n===void 0&&(n=new Map,f0.set(r,n));let o=n.get(t);return o===void 0&&(o=new RegExp(`${ph[r]}${t}`),n.set(t,o)),o}let Fg=()=>Date.now(),Mg="system",Sg=null,Tg=null,Ng=null,Pg=60,Ig,Og=null;class ot{static get now(){return Fg}static set now(t){Fg=t}static set defaultZone(t){Mg=t}static get defaultZone(){return Bo(Mg,xc.instance)}static get defaultLocale(){return Sg}static set defaultLocale(t){Sg=t}static get defaultNumberingSystem(){return Tg}static set defaultNumberingSystem(t){Tg=t}static get defaultOutputCalendar(){return Ng}static set defaultOutputCalendar(t){Ng=t}static get defaultWeekSettings(){return Og}static set defaultWeekSettings(t){Og=h0(t)}static get twoDigitCutoffYear(){return Pg}static set twoDigitCutoffYear(t){Pg=t%100}static get throwOnInvalid(){return Ig}static set throwOnInvalid(t){Ig=t}static resetCaches(){Se.resetCache(),vo.resetCache(),ne.resetCache(),Qk()}}class $n{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const zy=[0,31,59,90,120,151,181,212,243,273,304,334],Vy=[0,31,60,91,121,152,182,213,244,274,305,335];function an(e,t){return new $n("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function bh(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function qy(e,t,r){return r+(Eu(e)?Vy:zy)[t-1]}function Wy(e,t){const r=Eu(e)?Vy:zy,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function yh(e,t){return(e-t+7)%7+1}function zl(e,t=4,r=1){const{year:n,month:o,day:i}=e,s=qy(n,o,i),a=yh(bh(n,o,i),r);let u=Math.floor((s-a+14-t)/7),c;return u<1?(c=n-1,u=tu(c,t,r)):u>tu(n,t,r)?(c=n+1,u=1):c=n,{weekYear:c,weekNumber:u,weekday:a,...Cc(e)}}function Bg(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:i}=e,s=yh(bh(n,1,t),r),a=ws(n);let u=o*7+i-s-7+t,c;u<1?(c=n-1,u+=ws(c)):u>a?(c=n+1,u-=ws(n)):c=n;const{month:d,day:f}=Wy(c,u);return{year:c,month:d,day:f,...Cc(e)}}function Nd(e){const{year:t,month:r,day:n}=e,o=qy(t,r,n);return{year:t,ordinal:o,...Cc(e)}}function Rg(e){const{year:t,ordinal:r}=e,{month:n,day:o}=Wy(t,r);return{year:t,month:n,day:o,...Cc(e)}}function Lg(e,t){if(!te(e.localWeekday)||!te(e.localWeekNumber)||!te(e.localWeekYear)){if(!te(e.weekday)||!te(e.weekNumber)||!te(e.weekYear))throw new gs("Cannot mix locale-based week fields with ISO-based week fields");return te(e.localWeekday)||(e.weekday=e.localWeekday),te(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),te(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function e4(e,t=4,r=1){const n=Dc(e.weekYear),o=un(e.weekNumber,1,tu(e.weekYear,t,r)),i=un(e.weekday,1,7);return n?o?i?!1:an("weekday",e.weekday):an("week",e.weekNumber):an("weekYear",e.weekYear)}function t4(e){const t=Dc(e.year),r=un(e.ordinal,1,ws(e.year));return t?r?!1:an("ordinal",e.ordinal):an("year",e.year)}function Ky(e){const t=Dc(e.year),r=un(e.month,1,12),n=un(e.day,1,Vl(e.year,e.month));return t?r?n?!1:an("day",e.day):an("month",e.month):an("year",e.year)}function Gy(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=un(t,0,23)||t===24&&r===0&&n===0&&o===0,s=un(r,0,59),a=un(n,0,59),u=un(o,0,999);return i?s?a?u?!1:an("millisecond",o):an("second",n):an("minute",r):an("hour",t)}function te(e){return typeof e>"u"}function zo(e){return typeof e=="number"}function Dc(e){return typeof e=="number"&&e%1===0}function r4(e){return typeof e=="string"}function n4(e){return Object.prototype.toString.call(e)==="[object Date]"}function Hy(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Zy(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function o4(e){return Array.isArray(e)?e:[e]}function jg(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function i4(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function Ms(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function h0(e){if(e==null)return null;if(typeof e!="object")throw new sr("Week settings must be an object");if(!un(e.firstDay,1,7)||!un(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!un(t,1,7)))throw new sr("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function un(e,t,r){return Dc(e)&&e>=t&&e<=r}function s4(e,t){return e-t*Math.floor(e/t)}function wt(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function Po(e){if(!(te(e)||e===null||e===""))return parseInt(e,10)}function fi(e){if(!(te(e)||e===null||e===""))return parseFloat(e)}function vh(e){if(!(te(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function wh(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function Eu(e){return e%4===0&&(e%100!==0||e%400===0)}function ws(e){return Eu(e)?366:365}function Vl(e,t){const r=s4(t-1,12)+1,n=e+(t-r)/12;return r===2?Eu(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Ac(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function _g(e,t,r){return-yh(bh(e,1,t),r)+t-1}function tu(e,t=4,r=1){const n=_g(e,t,r),o=_g(e+1,t,r);return(ws(e)-n+o)/7}function m0(e){return e>99?e:e>ot.twoDigitCutoffYear?1900+e:2e3+e}function Jy(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const s={timeZoneName:t,...i},a=new Intl.DateTimeFormat(r,s).formatToParts(o).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Ec(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function Yy(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new sr(`Invalid unit value ${e}`);return t}function ql(e,t){const r={};for(const n in e)if(Ms(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=Yy(o)}return r}function Ua(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${wt(r,2)}:${wt(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${wt(r,2)}${wt(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Cc(e){return i4(e,["hour","minute","second","millisecond"])}const a4=["January","February","March","April","May","June","July","August","September","October","November","December"],Xy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u4=["J","F","M","A","M","J","J","A","S","O","N","D"];function Qy(e){switch(e){case"narrow":return[...u4];case"short":return[...Xy];case"long":return[...a4];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const ev=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],tv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],l4=["M","T","W","T","F","S","S"];function rv(e){switch(e){case"narrow":return[...l4];case"short":return[...tv];case"long":return[...ev];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const nv=["AM","PM"],c4=["Before Christ","Anno Domini"],d4=["BC","AD"],f4=["B","A"];function ov(e){switch(e){case"narrow":return[...f4];case"short":return[...d4];case"long":return[...c4];default:return null}}function h4(e){return nv[e.hour<12?0:1]}function m4(e,t){return rv(t)[e.weekday-1]}function g4(e,t){return Qy(t)[e.month-1]}function p4(e,t){return ov(t)[e.year<0?0:1]}function b4(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${o[e][0]}`;case-1:return f?"yesterday":`last ${o[e][0]}`;case 0:return f?"today":`this ${o[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,c=o[e],d=n?u?c[1]:c[2]||c[1]:u?o[e][0]:e;return s?`${a} ${d} ago`:`in ${a} ${d}`}function Ug(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const y4={D:Ul,DD:$y,DDD:ky,DDDD:xy,t:Dy,tt:Ay,ttt:Ey,tttt:Cy,T:Fy,TT:My,TTT:Sy,TTTT:Ty,f:Ny,ff:Iy,fff:By,ffff:Ly,F:Py,FF:Oy,FFF:Ry,FFFF:jy};class ur{static create(t,r={}){return new ur(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||o)&&i.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",o=!o):o||a===r?n+=a:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return y4[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return wt(t,r);const o={...this.opts};return r>0&&(o.padTo=r),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(m,y)=>this.loc.extract(t,m,y),s=m=>t.isOffsetFixed&&t.offset===0&&m.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,m.format):"",a=()=>n?h4(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(m,y)=>n?g4(t,m):i(y?{month:m}:{month:m,day:"numeric"},"month"),c=(m,y)=>n?m4(t,m):i(y?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),d=m=>{const y=ur.macroTokenToFormatOpts(m);return y?this.formatWithSystemDefault(t,y):m},f=m=>n?p4(t,m):i({era:m},"era"),h=m=>{switch(m){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(m)}};return Ug(ur.parseFormat(r),h)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=d=>{switch(d[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},i=(d,f)=>h=>{const m=o(h);if(m){const y=f.isNegativeDuration&&m!==f.largestUnit?n:1;let $;return this.opts.signMode==="negativeLargestOnly"&&m!==f.largestUnit?$="never":this.opts.signMode==="all"?$="always":$="auto",this.num(d.get(m)*y,h.length,$)}else return h},s=ur.parseFormat(r),a=s.reduce((d,{literal:f,val:h})=>f?d:d.concat(h),[]),u=t.shiftTo(...a.map(o).filter(d=>d)),c={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return Ug(s,i(u,c))}}const iv=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Zs(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Js(...e){return t=>e.reduce(([r,n,o],i)=>{const[s,a,u]=i(t,o);return[{...r,...s},a||n,u]},[{},null,1]).slice(0,2)}function Ys(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function sv(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=Po(t[r+o]);return[n,null,r+o]}}const av=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,v4=`(?:${av.source}?(?:\\[(${iv.source})\\])?)?`,$h=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,uv=RegExp(`${$h.source}${v4}`),kh=RegExp(`(?:[Tt]${uv.source})?`),w4=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,$4=/(\d{4})-?W(\d\d)(?:-?(\d))?/,k4=/(\d{4})-?(\d{3})/,x4=sv("weekYear","weekNumber","weekDay"),D4=sv("year","ordinal"),A4=/(\d{4})-(\d\d)-(\d\d)/,lv=RegExp(`${$h.source} ?(?:${av.source}|(${iv.source}))?`),E4=RegExp(`(?: ${lv.source})?`);function $s(e,t,r){const n=e[t];return te(n)?r:Po(n)}function C4(e,t){return[{year:$s(e,t),month:$s(e,t+1,1),day:$s(e,t+2,1)},null,t+3]}function Xs(e,t){return[{hours:$s(e,t,0),minutes:$s(e,t+1,0),seconds:$s(e,t+2,0),milliseconds:vh(e[t+3])},null,t+4]}function Cu(e,t){const r=!e[t]&&!e[t+1],n=Ec(e[t+1],e[t+2]),o=r?null:pr.instance(n);return[{},o,t+3]}function Fu(e,t){const r=e[t]?vo.create(e[t]):null;return[{},r,t+1]}const F4=RegExp(`^T?${$h.source}$`),M4=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function S4(e){const[t,r,n,o,i,s,a,u,c]=e,d=t[0]==="-",f=u&&u[0]==="-",h=(m,y=!1)=>m!==void 0&&(y||m&&d)?-m:m;return[{years:h(fi(r)),months:h(fi(n)),weeks:h(fi(o)),days:h(fi(i)),hours:h(fi(s)),minutes:h(fi(a)),seconds:h(fi(u),u==="-0"),milliseconds:h(vh(c),f)}]}const T4={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function xh(e,t,r,n,o,i,s){const a={year:t.length===2?m0(Po(t)):Po(t),month:Xy.indexOf(r)+1,day:Po(n),hour:Po(o),minute:Po(i)};return s&&(a.second=Po(s)),e&&(a.weekday=e.length>3?ev.indexOf(e)+1:tv.indexOf(e)+1),a}const N4=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function P4(e){const[,t,r,n,o,i,s,a,u,c,d,f]=e,h=xh(t,o,n,r,i,s,a);let m;return u?m=T4[u]:c?m=0:m=Ec(d,f),[h,new pr(m)]}function I4(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const O4=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,B4=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,R4=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function zg(e){const[,t,r,n,o,i,s,a]=e;return[xh(t,o,n,r,i,s,a),pr.utcInstance]}function L4(e){const[,t,r,n,o,i,s,a]=e;return[xh(t,a,r,n,o,i,s),pr.utcInstance]}const j4=Zs(w4,kh),_4=Zs($4,kh),U4=Zs(k4,kh),z4=Zs(uv),cv=Js(C4,Xs,Cu,Fu),V4=Js(x4,Xs,Cu,Fu),q4=Js(D4,Xs,Cu,Fu),W4=Js(Xs,Cu,Fu);function K4(e){return Ys(e,[j4,cv],[_4,V4],[U4,q4],[z4,W4])}function G4(e){return Ys(I4(e),[N4,P4])}function H4(e){return Ys(e,[O4,zg],[B4,zg],[R4,L4])}function Z4(e){return Ys(e,[M4,S4])}const J4=Js(Xs);function Y4(e){return Ys(e,[F4,J4])}const X4=Zs(A4,E4),Q4=Zs(lv),ex=Js(Xs,Cu,Fu);function tx(e){return Ys(e,[X4,cv],[Q4,ex])}const Vg="Invalid Duration",dv={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},rx={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...dv},rn=146097/400,is=146097/4800,nx={years:{quarters:4,months:12,weeks:rn/7,days:rn,hours:rn*24,minutes:rn*24*60,seconds:rn*24*60*60,milliseconds:rn*24*60*60*1e3},quarters:{months:3,weeks:rn/28,days:rn/4,hours:rn*24/4,minutes:rn*24*60/4,seconds:rn*24*60*60/4,milliseconds:rn*24*60*60*1e3/4},months:{weeks:is/7,days:is,hours:is*24,minutes:is*24*60,seconds:is*24*60*60,milliseconds:is*24*60*60*1e3},...dv},ki=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],ox=ki.slice(0).reverse();function to(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new ye(n)}function fv(e,t){let r=t.milliseconds??0;for(const n of ox.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function qg(e,t){const r=fv(e,t)<0?-1:1;ki.reduceRight((n,o)=>{if(te(t[o]))return n;if(n){const i=t[n]*r,s=e[o][n],a=Math.floor(i/s);t[o]+=a*r,t[n]-=a*s*r}return o},null),ki.reduce((n,o)=>{if(te(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function Wg(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class ye{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?nx:rx;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Se.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return ye.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new sr(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new ye({values:ql(t,ye.normalizeUnit),loc:Se.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(zo(t))return ye.fromMillis(t);if(ye.isDuration(t))return t;if(typeof t=="object")return ye.fromObject(t);throw new sr(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Z4(t);return n?ye.fromObject(n,r):ye.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Y4(t);return n?ye.fromObject(n,r):ye.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new sr("need to specify a reason the Duration is invalid");const n=t instanceof $n?t:new $n(t,r);if(ot.throwOnInvalid)throw new Sk(n);return new ye({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new wy(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?ur.create(this.loc,n).formatDurationFromString(this,t):Vg}toHuman(t={}){if(!this.isValid)return Vg;const r=t.showZeros!==!1,n=ki.map(o=>{const i=this.values[o];return te(i)||i===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:o.slice(0,-1)}).format(i)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=wh(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},ne.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?fv(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=ye.fromDurationLike(t),n={};for(const o of ki)(Ms(r.values,o)||Ms(this.values,o))&&(n[o]=r.get(o)+this.get(o));return to(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=ye.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Yy(t(this.values[n],n));return to(this,{values:r},!0)}get(t){return this[ye.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...ql(t,ye.normalizeUnit)};return to(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return to(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return qg(this.matrix,t),to(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Wg(this.normalize().shiftToAll().toObject());return to(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>ye.normalizeUnit(s));const r={},n={},o=this.toObject();let i;for(const s of ki)if(t.indexOf(s)>=0){i=s;let a=0;for(const c in n)a+=this.matrix[c][s]*n[c],n[c]=0;zo(o[s])&&(a+=o[s]);const u=Math.trunc(a);r[s]=u,n[s]=(a*1e3-u*1e3)/1e3}else zo(o[s])&&(n[s]=o[s]);for(const s in n)n[s]!==0&&(r[i]+=s===i?n[s]:n[s]/this.matrix[i][s]);return qg(this.matrix,r),to(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return to(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=Wg(this.values);return to(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of ki)if(!r(this.values[n],t.values[n]))return!1;return!0}}const ss="Invalid Interval";function ix(e,t){return!e||!e.isValid?dt.invalid("missing or invalid start"):!t||!t.isValid?dt.invalid("missing or invalid end"):t<e?dt.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class dt{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new sr("need to specify a reason the Interval is invalid");const n=t instanceof $n?t:new $n(t,r);if(ot.throwOnInvalid)throw new Mk(n);return new dt({invalid:n})}static fromDateTimes(t,r){const n=ba(t),o=ba(r),i=ix(n,o);return i??new dt({start:n,end:o})}static after(t,r){const n=ye.fromDurationLike(r),o=ba(t);return dt.fromDateTimes(o,o.plus(n))}static before(t,r){const n=ye.fromDurationLike(r),o=ba(t);return dt.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,s;try{i=ne.fromISO(n,r),s=i.isValid}catch{s=!1}let a,u;try{a=ne.fromISO(o,r),u=a.isValid}catch{u=!1}if(s&&u)return dt.fromDateTimes(i,a);if(s){const c=ye.fromISO(o,r);if(c.isValid)return dt.after(i,c)}else if(u){const c=ye.fromISO(n,r);if(c.isValid)return dt.before(a,c)}}return dt.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?dt.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(ba).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:o}=this,i=0;for(;o<this.e;){const s=r[i]||this.e,a=+s>+this.e?this.e:s;n.push(dt.fromDateTimes(o,a)),o=a,i+=1}return n}splitBy(t){const r=ye.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*o));i=+a>+this.e?this.e:a,s.push(dt.fromDateTimes(n,i)),n=i,o+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:dt.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return dt.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],s)=>i?i.overlaps(s)||i.abutsStart(s)?[o,i.union(s)]:[o.concat([i]),s]:[o,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...i),a=s.sort((u,c)=>u.time-c.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&o.push(dt.fromDateTimes(r,u.time)),r=null);return dt.merge(o)}difference(...t){return dt.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:ss}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Ul,r={}){return this.isValid?ur.create(this.s.loc.clone(r),t).formatInterval(this):ss}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:ss}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ss}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:ss}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:ss}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):ye.invalid(this.invalidReason)}mapEndpoints(t){return dt.fromDateTimes(t(this.s),t(this.e))}}class rl{static hasDST(t=ot.defaultZone){const r=ne.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return vo.isValidZone(t)}static normalizeZone(t){return Bo(t,ot.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Se.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Se.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Se.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Se.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Se.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Se.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Se.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Se.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Se.create(r,null,"gregory").eras(t)}static features(){return{relative:Hy(),localeWeek:Zy()}}}function Kg(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(ye.fromMillis(n).as("days"))}function sx(e,t,r){const n=[["years",(u,c)=>c.year-u.year],["quarters",(u,c)=>c.quarter-u.quarter+(c.year-u.year)*4],["months",(u,c)=>c.month-u.month+(c.year-u.year)*12],["weeks",(u,c)=>{const d=Kg(u,c);return(d-d%7)/7}],["days",Kg]],o={},i=e;let s,a;for(const[u,c]of n)r.indexOf(u)>=0&&(s=u,o[u]=c(e,t),a=i.plus(o),a>t?(o[u]--,e=i.plus(o),e>t&&(a=e,o[u]--,e=i.plus(o))):e=a);return[e,o,a,s]}function ax(e,t,r,n){let[o,i,s,a]=sx(e,t,r);const u=t-o,c=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);c.length===0&&(s<t&&(s=o.plus({[a]:1})),s!==o&&(i[a]=(i[a]||0)+u/(s-o)));const d=ye.fromObject(i,n);return c.length>0?ye.fromMillis(u,n).shiftTo(...c).plus(d):d}const ux="missing Intl.DateTimeFormat.formatToParts support";function Ae(e,t=r=>r){return{regex:e,deser:([r])=>t(Xk(r))}}const lx=" ",hv=`[ ${lx}]`,mv=new RegExp(hv,"g");function cx(e){return e.replace(/\./g,"\\.?").replace(mv,hv)}function Gg(e){return e.replace(/\./g,"").replace(mv," ").toLowerCase()}function bn(e,t){return e===null?null:{regex:RegExp(e.map(cx).join("|")),deser:([r])=>e.findIndex(n=>Gg(r)===Gg(n))+t}}function Hg(e,t){return{regex:e,deser:([,r,n])=>Ec(r,n),groups:t}}function nl(e){return{regex:e,deser:([t])=>t}}function dx(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function fx(e,t){const r=pn(t),n=pn(t,"{2}"),o=pn(t,"{3}"),i=pn(t,"{4}"),s=pn(t,"{6}"),a=pn(t,"{1,2}"),u=pn(t,"{1,3}"),c=pn(t,"{1,6}"),d=pn(t,"{1,9}"),f=pn(t,"{2,4}"),h=pn(t,"{4,6}"),m=k=>({regex:RegExp(dx(k.val)),deser:([x])=>x,literal:!0}),$=(k=>{if(e.literal)return m(k);switch(k.val){case"G":return bn(t.eras("short"),0);case"GG":return bn(t.eras("long"),0);case"y":return Ae(c);case"yy":return Ae(f,m0);case"yyyy":return Ae(i);case"yyyyy":return Ae(h);case"yyyyyy":return Ae(s);case"M":return Ae(a);case"MM":return Ae(n);case"MMM":return bn(t.months("short",!0),1);case"MMMM":return bn(t.months("long",!0),1);case"L":return Ae(a);case"LL":return Ae(n);case"LLL":return bn(t.months("short",!1),1);case"LLLL":return bn(t.months("long",!1),1);case"d":return Ae(a);case"dd":return Ae(n);case"o":return Ae(u);case"ooo":return Ae(o);case"HH":return Ae(n);case"H":return Ae(a);case"hh":return Ae(n);case"h":return Ae(a);case"mm":return Ae(n);case"m":return Ae(a);case"q":return Ae(a);case"qq":return Ae(n);case"s":return Ae(a);case"ss":return Ae(n);case"S":return Ae(u);case"SSS":return Ae(o);case"u":return nl(d);case"uu":return nl(a);case"uuu":return Ae(r);case"a":return bn(t.meridiems(),0);case"kkkk":return Ae(i);case"kk":return Ae(f,m0);case"W":return Ae(a);case"WW":return Ae(n);case"E":case"c":return Ae(r);case"EEE":return bn(t.weekdays("short",!1),1);case"EEEE":return bn(t.weekdays("long",!1),1);case"ccc":return bn(t.weekdays("short",!0),1);case"cccc":return bn(t.weekdays("long",!0),1);case"Z":case"ZZ":return Hg(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return Hg(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return nl(/[a-z_+-/]{1,256}?/i);case" ":return nl(/[^\S\n\r]/);default:return m(k)}})(e)||{invalidReason:ux};return $.token=e,$}const hx={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function mx(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const u=/^\s+$/.test(o);return{literal:!u,val:u?" ":o}}const i=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=hx[s];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function gx(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function px(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const s in r)if(Ms(r,s)){const a=r[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(o[a.token.val[0]]=a.deser(n.slice(i,i+u))),i+=u}return[n,o]}else return[n,{}]}function bx(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return te(e.z)||(r=vo.create(e.z)),te(e.Z)||(r||(r=new pr(e.Z)),n=e.Z),te(e.q)||(e.M=(e.q-1)*3+1),te(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),te(e.u)||(e.S=vh(e.u)),[Object.keys(e).reduce((i,s)=>{const a=t(s);return a&&(i[a]=e[s]),i},{}),r,n]}let Pd=null;function yx(){return Pd||(Pd=ne.fromMillis(1555555555555)),Pd}function vx(e,t){if(e.literal)return e;const r=ur.macroTokenToFormatOpts(e.val),n=yv(r,t);return n==null||n.includes(void 0)?e:n}function gv(e,t){return Array.prototype.concat(...e.map(r=>vx(r,t)))}class pv{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=gv(ur.parseFormat(r),t),this.units=this.tokens.map(n=>fx(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=gx(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(t){if(this.isValid){const[r,n]=px(t,this.regex,this.handlers),[o,i,s]=n?bx(n):[null,null,void 0];if(Ms(n,"a")&&Ms(n,"H"))throw new gs("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:o,zone:i,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function bv(e,t,r){return new pv(e,r).explainFromTokens(t)}function wx(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:s}=bv(e,t,r);return[n,o,i,s]}function yv(e,t){if(!e)return null;const n=ur.create(t,e).dtFormatter(yx()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(s=>mx(s,e,i))}const Id="Invalid DateTime",Zg=864e13;function Sa(e){return new $n("unsupported zone",`the zone "${e.name}" is not supported`)}function Od(e){return e.weekData===null&&(e.weekData=zl(e.c)),e.weekData}function Bd(e){return e.localWeekData===null&&(e.localWeekData=zl(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function hi(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new ne({...r,...t,old:r})}function vv(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function ol(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Cl(e,t,r){return vv(Ac(e),t,r)}function Jg(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,Vl(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=ye.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Ac(i);let[u,c]=vv(a,r,e.zone);return s!==0&&(u+=s,c=e.zone.offset(u)),{ts:u,o:c}}function as(e,t,r,n,o,i){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,c=ne.fromObject(e,{...r,zone:u,specificOffset:i});return s?c:c.setZone(a)}else return ne.invalid(new $n("unparsable",`the input "${o}" can't be parsed as ${n}`))}function il(e,t,r=!0){return e.isValid?ur.create(Se.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Rd(e,t,r){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=wt(e.c.year,n?6:4),r==="year")return o;if(t){if(o+="-",o+=wt(e.c.month),r==="month")return o;o+="-"}else if(o+=wt(e.c.month),r==="month")return o;return o+=wt(e.c.day),o}function Yg(e,t,r,n,o,i,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=wt(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=wt(e.c.minute),s==="minute")break;a&&(u+=":",u+=wt(e.c.second))}else{if(u+=wt(e.c.minute),s==="minute")break;a&&(u+=wt(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(u+=".",u+=wt(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!i?u+="Z":e.o<0?(u+="-",u+=wt(Math.trunc(-e.o/60)),u+=":",u+=wt(Math.trunc(-e.o%60))):(u+="+",u+=wt(Math.trunc(e.o/60)),u+=":",u+=wt(Math.trunc(e.o%60)))),i&&(u+="["+e.zone.ianaName+"]"),u}const wv={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},$x={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},kx={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Fl=["year","month","day","hour","minute","second","millisecond"],xx=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Dx=["year","ordinal","hour","minute","second","millisecond"];function Ml(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new wy(e);return t}function Xg(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Ml(e)}}function Ax(e){if(Ta===void 0&&(Ta=ot.now()),e.type!=="iana")return e.offset(Ta);const t=e.name;let r=g0.get(t);return r===void 0&&(r=e.offset(Ta),g0.set(t,r)),r}function Qg(e,t){const r=Bo(t.zone,ot.defaultZone);if(!r.isValid)return ne.invalid(Sa(r));const n=Se.fromObject(t);let o,i;if(te(e.year))o=ot.now();else{for(const u of Fl)te(e[u])&&(e[u]=wv[u]);const s=Ky(e)||Gy(e);if(s)return ne.invalid(s);const a=Ax(r);[o,i]=Cl(e,a,r)}return new ne({ts:o,zone:r,loc:n,o:i})}function ep(e,t,r){const n=te(r.round)?!0:r.round,o=te(r.rounding)?"trunc":r.rounding,i=(a,u)=>(a=wh(a,n||r.calendary?0:2,r.calendary?"round":o),t.loc.clone(r).relFormatter(r).format(a,u)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return i(s(r.unit),r.unit);for(const a of r.units){const u=s(a);if(Math.abs(u)>=1)return i(u,a)}return i(e>t?-0:0,r.units[r.units.length-1])}function tp(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let Ta;const g0=new Map;class ne{constructor(t){const r=t.zone||ot.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new $n("invalid input"):null)||(r.isValid?null:Sa(r));this.ts=te(t.ts)?ot.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const a=zo(t.o)&&!t.old?t.o:r.offset(this.ts);o=ol(this.ts,a),n=Number.isNaN(o.year)?new $n("invalid input"):null,o=n?null:o,i=n?null:a}this._zone=r,this.loc=t.loc||Se.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new ne({})}static local(){const[t,r]=tp(arguments),[n,o,i,s,a,u,c]=r;return Qg({year:n,month:o,day:i,hour:s,minute:a,second:u,millisecond:c},t)}static utc(){const[t,r]=tp(arguments),[n,o,i,s,a,u,c]=r;return t.zone=pr.utcInstance,Qg({year:n,month:o,day:i,hour:s,minute:a,second:u,millisecond:c},t)}static fromJSDate(t,r={}){const n=n4(t)?t.valueOf():NaN;if(Number.isNaN(n))return ne.invalid("invalid input");const o=Bo(r.zone,ot.defaultZone);return o.isValid?new ne({ts:n,zone:o,loc:Se.fromObject(r)}):ne.invalid(Sa(o))}static fromMillis(t,r={}){if(zo(t))return t<-Zg||t>Zg?ne.invalid("Timestamp out of range"):new ne({ts:t,zone:Bo(r.zone,ot.defaultZone),loc:Se.fromObject(r)});throw new sr(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(zo(t))return new ne({ts:t*1e3,zone:Bo(r.zone,ot.defaultZone),loc:Se.fromObject(r)});throw new sr("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=Bo(r.zone,ot.defaultZone);if(!n.isValid)return ne.invalid(Sa(n));const o=Se.fromObject(r),i=ql(t,Xg),{minDaysInFirstWeek:s,startOfWeek:a}=Lg(i,o),u=ot.now(),c=te(r.specificOffset)?n.offset(u):r.specificOffset,d=!te(i.ordinal),f=!te(i.year),h=!te(i.month)||!te(i.day),m=f||h,y=i.weekYear||i.weekNumber;if((m||d)&&y)throw new gs("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(h&&d)throw new gs("Can't mix ordinal dates with month/day");const $=y||i.weekday&&!m;let k,x,E=ol(u,c);$?(k=xx,x=$x,E=zl(E,s,a)):d?(k=Dx,x=kx,E=Nd(E)):(k=Fl,x=wv);let N=!1;for(const Ge of k){const He=i[Ge];te(He)?N?i[Ge]=x[Ge]:i[Ge]=E[Ge]:N=!0}const R=$?e4(i,s,a):d?t4(i):Ky(i),q=R||Gy(i);if(q)return ne.invalid(q);const ie=$?Bg(i,s,a):d?Rg(i):i,[De,de]=Cl(ie,c,n),$e=new ne({ts:De,zone:n,o:de,loc:o});return i.weekday&&m&&t.weekday!==$e.weekday?ne.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${$e.toISO()}`):$e.isValid?$e:ne.invalid($e.invalid)}static fromISO(t,r={}){const[n,o]=K4(t);return as(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=G4(t);return as(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=H4(t);return as(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(te(t)||te(r))throw new sr("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,s=Se.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[a,u,c,d]=wx(s,t,r);return d?ne.invalid(d):as(a,u,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return ne.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=tx(t);return as(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new sr("need to specify a reason the DateTime is invalid");const n=t instanceof $n?t:new $n(t,r);if(ot.throwOnInvalid)throw new Fk(n);return new ne({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=yv(t,Se.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return gv(ur.parseFormat(t),Se.fromObject(r)).map(o=>o.val).join("")}static resetCache(){Ta=void 0,g0.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Od(this).weekYear:NaN}get weekNumber(){return this.isValid?Od(this).weekNumber:NaN}get weekday(){return this.isValid?Od(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Bd(this).weekday:NaN}get localWeekNumber(){return this.isValid?Bd(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Bd(this).weekYear:NaN}get ordinal(){return this.isValid?Nd(this.c).ordinal:NaN}get monthShort(){return this.isValid?rl.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?rl.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?rl.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?rl.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Ac(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),s=this.zone.offset(n-o*r),a=this.zone.offset(n-i*r);if(s===a)return[this];const u=n-s*r,c=n-a*r,d=ol(u,s),f=ol(c,a);return d.hour===f.hour&&d.minute===f.minute&&d.second===f.second&&d.millisecond===f.millisecond?[hi(this,{ts:u}),hi(this,{ts:c})]:[this]}get isInLeapYear(){return Eu(this.year)}get daysInMonth(){return Vl(this.year,this.month)}get daysInYear(){return this.isValid?ws(this.year):NaN}get weeksInWeekYear(){return this.isValid?tu(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?tu(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=ur.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(pr.instance(t),r)}toLocal(){return this.setZone(ot.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=Bo(t,ot.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),s=this.toObject();[o]=Cl(s,i,t)}return hi(this,{ts:o,zone:t})}else return ne.invalid(Sa(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return hi(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=ql(t,Xg),{minDaysInFirstWeek:n,startOfWeek:o}=Lg(r,this.loc),i=!te(r.weekYear)||!te(r.weekNumber)||!te(r.weekday),s=!te(r.ordinal),a=!te(r.year),u=!te(r.month)||!te(r.day),c=a||u,d=r.weekYear||r.weekNumber;if((c||s)&&d)throw new gs("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new gs("Can't mix ordinal dates with month/day");let f;i?f=Bg({...zl(this.c,n,o),...r},n,o):te(r.ordinal)?(f={...this.toObject(),...r},te(r.day)&&(f.day=Math.min(Vl(f.year,f.month),f.day))):f=Rg({...Nd(this.c),...r});const[h,m]=Cl(f,this.o,this.zone);return hi(this,{ts:h,o:m})}plus(t){if(!this.isValid)return this;const r=ye.fromDurationLike(t);return hi(this,Jg(this,r))}minus(t){if(!this.isValid)return this;const r=ye.fromDurationLike(t).negate();return hi(this,Jg(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=ye.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:s}=this;s<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?ur.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Id}toLocaleString(t=Ul,r={}){return this.isValid?ur.create(this.loc.clone(r),t).formatDateTime(this):Id}toLocaleParts(t={}){return this.isValid?ur.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=Ml(s);const a=t==="extended";let u=Rd(this,a,s);return Fl.indexOf(s)>=3&&(u+="T"),u+=Yg(this,a,r,n,o,i,s),u}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?Rd(this,t==="extended",Ml(r)):null}toISOWeekDate(){return il(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=Ml(a),(o&&Fl.indexOf(a)>=3?"T":"")+Yg(this,s==="extended",r,t,n,i,a)):null}toRFC2822(){return il(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return il(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Rd(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),il(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Id}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return ye.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=o4(r).map(ye.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,c=ax(a,u,i,o);return s?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(ne.now(),t,r)}until(t){return this.isValid?dt.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=o&&o<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||ne.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),ep(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?ep(t.base||ne.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(ne.isDateTime))throw new sr("min requires all arguments be DateTimes");return jg(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(ne.isDateTime))throw new sr("max requires all arguments be DateTimes");return jg(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,s=Se.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return bv(s,t,r)}static fromStringExplain(t,r,n={}){return ne.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:o=null}=r,i=Se.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new pv(i,t)}static fromFormatParser(t,r,n={}){if(te(t)||te(r))throw new sr("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:i=null}=n,s=Se.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});if(!s.equals(r.locale))throw new sr(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:c,invalidReason:d}=r.explainFromTokens(t);return d?ne.invalid(d):as(a,u,n,`format ${r.format}`,t,c)}static get DATE_SHORT(){return Ul}static get DATE_MED(){return $y}static get DATE_MED_WITH_WEEKDAY(){return Tk}static get DATE_FULL(){return ky}static get DATE_HUGE(){return xy}static get TIME_SIMPLE(){return Dy}static get TIME_WITH_SECONDS(){return Ay}static get TIME_WITH_SHORT_OFFSET(){return Ey}static get TIME_WITH_LONG_OFFSET(){return Cy}static get TIME_24_SIMPLE(){return Fy}static get TIME_24_WITH_SECONDS(){return My}static get TIME_24_WITH_SHORT_OFFSET(){return Sy}static get TIME_24_WITH_LONG_OFFSET(){return Ty}static get DATETIME_SHORT(){return Ny}static get DATETIME_SHORT_WITH_SECONDS(){return Py}static get DATETIME_MED(){return Iy}static get DATETIME_MED_WITH_SECONDS(){return Oy}static get DATETIME_MED_WITH_WEEKDAY(){return Nk}static get DATETIME_FULL(){return By}static get DATETIME_FULL_WITH_SECONDS(){return Ry}static get DATETIME_HUGE(){return Ly}static get DATETIME_HUGE_WITH_SECONDS(){return jy}}function ba(e){if(ne.isDateTime(e))return e;if(e&&e.valueOf&&zo(e.valueOf()))return ne.fromJSDate(e);if(e&&typeof e=="object")return ne.fromObject(e);throw new sr(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var Te;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Te||(Te={}));const Ex=[Te.Milliseconds,Te.Seconds,Te.Minutes,Te.Hours,Te.Days,Te.Weeks,Te.Months,Te.Years];Te.Milliseconds+"",Te.Seconds+"",Te.Minutes+"",Te.Hours+"",Te.Days+"",Te.Weeks+"",Te.Months+"",Te.Years+"";function Cx(e){return Ex.filter(t=>e[t])}function p0(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function Fx(e){return p0(Math.max(e-.4,0),{decimalCount:0})}function rp(e){return e===0?0:Math.sign(e)}function Ss(e,t,r={}){const n={},o={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},i=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=Cx(t).reverse();if(i||s)return a.forEach(d=>{n[d]=i?1/0:-1/0}),n;let u=ye.fromObject(e).as(Te.Milliseconds);const c=rp(u);return a.forEach((d,f)=>{const h=f===a.length-1;if(d===Te.Milliseconds)n.milliseconds=p0(u,o);else{const m=ye.fromObject({milliseconds:u}).as(d),y=Math.sign(m),$=Math.abs(m),k=h?p0($,o):Math.floor(o.decimalCount==null?$:Fx($)),x=k===0?0:k*y;n[d]=x,u-=ye.fromObject({[d]:x}).as(Te.Milliseconds),c!==rp(u)&&(u=0)}}),n}Intl.DateTimeFormat().resolvedOptions().locale;var J;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(J||(J={}));J.Year,J.Hour,J.Minute,J.Second,J.Millisecond;J.Month,J.Week,J.Day;J.Millisecond,J.Second,J.Minute,J.Hour,J.Day,J.Week,J.Month,J.Year;const np={min:0,max:23},op={min:0,max:59},ip={min:0,max:59},sp={min:0,max:999};var ar;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(ar||(ar={}));ar.Sunday+"",ar.Monday+"",ar.Tuesday+"",ar.Wednesday+"",ar.Thursday+"",ar.Friday+"",ar.Saturday+"";ar.Sunday,ar.Monday,ar.Tuesday,ar.Wednesday,ar.Thursday,ar.Friday,ar.Saturday;var Dr;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Dr||(Dr={}));Dr.January,Dr.February,Dr.March,Dr.April,Dr.May,Dr.June,Dr.July,Dr.August,Dr.September,Dr.October,Dr.November,Dr.December;const ap={min:1,max:12},up={min:1,max:31};function Ti(e){const t=new _l,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:Ss(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function $v(...e){const t=e.join(""),r=hy(Array.from(t));return Array.from(r).join("")}function kv(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function xv(e,t){const r=$v([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Dv(e,r)}function Dv(e,t){const r=$v(t);return typeof e=="string"?new RegExp(kv(e),r):new RegExp(e.source,r)}function Av(e,{caseSensitive:t}){const n="".replaceAll("i","");return Dv(e,n)}function Dh(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function Ev(e,t){return t?typeof t=="string"?!!new RegExp(kv(t),"i").exec(e):!!xv(t,"i").exec(e):!1}class p extends Error{name="AssertionError";constructor(t,r){super(Vi(r,t)||"Assertion failed.")}}const lp={interval:{milliseconds:100},timeout:{seconds:10}},Ld=Symbol("not set");async function Mx(e,t,r){const{callback:n,extraAssertionArgs:o,failureMessage:i,options:s}=Sx(t),a=Ss(s.timeout,{milliseconds:!0}).milliseconds,u=Ss(s.interval,{milliseconds:!0});let c=Ld,d;async function f(){try{c=r?n():await n(),e(c,...o)}catch(m){c=Ld,d=ht(m)}}const h=Date.now();for(;c===Ld;)if(await f(),await Ti(u),Date.now()-h>=a){const y=`${i?`${i}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Hs(d,y)}return c}function O(e,t=!1){return((...r)=>Mx(e,r,t))}function Sx(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Cv(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Cv(e){return{interval:e?.interval||lp.interval,timeout:e?.timeout||lp.timeout}}const ya={isFalse(e,t){if(e!==!1)throw new p(`'${v(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${v(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new p(`'${v(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new p(`'${v(e)}' is not truthy.`,t)}},Fv={assert:ya,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new p(`'${v(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${v(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new p(`'${v(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new p(`'${v(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:O(ya.isFalse),isFalsy:O(ya.isFalsy),isTrue:O(ya.isTrue),isTruthy:O(ya.isTruthy)}};function Tx(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${v(e)} does not end with ${v(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${v(e)} does not end with ${v(t)}}`,r)}function Nx(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new p(`${v(e)} ends with ${v(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${v(e)} ends with ${v(t)}}`,r)}function Px(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${v(e)} does not start with ${v(t)}}`,r)}else if(e[0]!==t)throw new p(`${v(e)} does not start with ${v(t)}}`,r)}function Ix(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new p(`${v(e)} starts with ${v(t)}}`,r)}else if(e[0]===t)throw new p(`${v(e)} starts with ${v(t)}}`,r)}const va={endsWith:Tx,endsWithout:Nx,startsWith:Px,startsWithout:Ix},Mv={assert:va,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${v(e)} does not end with ${v(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${v(e)} does not end with ${v(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new p(`${v(e)} ends with ${v(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${v(e)} ends with ${v(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${v(e)} does not start with ${v(t)}}`,r)}else if(e[0]!==t)throw new p(`${v(e)} does not start with ${v(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new p(`${v(e)} starts with ${v(t)}}`,r)}else if(e[0]===t)throw new p(`${v(e)} starts with ${v(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:O(va.endsWith),endsWithout:O(va.endsWithout),startsWith:O(va.startsWith),startsWithout:O(va.startsWithout)}};function Ox(e,t,r){const n=Br(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function io(e,t){return Br(t).includes(e)}const jd={isEnumValue(e,t,r){Ox(e,t,r)},isNotEnumValue(e,t,r){const n=Br(t);if(n.includes(e))throw new p(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},Sv={assert:jd,check:{isEnumValue:io,isNotEnumValue(e,t){return!Br(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=Br(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=Br(t);if(n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(Br(t).includes(e))return e},isNotEnumValue(e,t){if(!Br(t).includes(e))return e}},waitUntil:{isEnumValue:O(jd.isEnumValue),isNotEnumValue:O(jd.isNotEnumValue)}},_d={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${v(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${v(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new p(`Entries are not equal at key '${String(o)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))throw new p("Entries are equal.",r)}},Tv={assert:_d,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const o=e[n],i=t[n];return o===i})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const o=e[n],i=t[n];return o!==i})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${v(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${v(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new p(`Entries are not equal at key '${String(o)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))return e;throw new p("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(o=>{const i=e[o],s=t[o];return i===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const i=e[o],s=t[o];return i!==s}))return e}},waitUntil:{entriesEqual:O(_d.entriesEqual),notEntriesEqual:O(_d.notEntriesEqual)}};function Wl(e,t){return JSON.stringify(e)===JSON.stringify(t)}function ru(e,t){if(!(e===t||Wl(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Wl(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(i=>{try{ru(e[i],t[i])}catch(s){throw new Error(`JSON objects are not equal at key '${i}': ${Wt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function Na(e,t){if(e===t||Wl(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Wl(r,n)?!1:Object.keys(e).every(i=>Na(e[i],t[i]))}return!1}const Ud={jsonEquals(e,t,r){try{ru(e,t)}catch(n){throw new p(Wt(n),r)}},notJsonEquals(e,t,r){try{ru(e,t)}catch{return}throw new p("Values are JSON equal.",r)}},Nv={assert:Ud,check:{jsonEquals(e,t){return Na(e,t)},notJsonEquals(e,t){return!Na(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return ru(e,t),e}catch(n){throw new p(Wt(n),r)}},notJsonEquals(e,t,r){try{ru(e,t)}catch{return e}throw new p("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Na(e,t))return e},notJsonEquals(e,t){if(!Na(e,t))return e}},waitUntil:{jsonEquals:O(Ud.jsonEquals),notJsonEquals:O(Ud.notJsonEquals)}};function cp(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Pv(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Pv.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var Iv=typeof WeakMap=="function"?WeakMap:Pv;function dp(e,t,r){if(!r||Ts(e)||Ts(t))return null;var n=r.get(e);if(n){var o=n.get(t);if(typeof o=="boolean")return o}return null}function sl(e,t,r,n){if(!(!r||Ts(e)||Ts(t))){var o=r.get(e);o?o.set(t,n):(o=new Iv,o.set(t,n),r.set(e,o))}}function wn(e,t,r){if(r&&r.comparator)return fp(e,t,r);var n=Ov(e,t);return n!==null?n:fp(e,t,r)}function Ov(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Ts(e)||Ts(t)?!1:null}function fp(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new Iv;var n=r&&r.comparator,o=dp(e,t,r.memoize);if(o!==null)return o;var i=dp(t,e,r.memoize);if(i!==null)return i;if(n){var s=n(e,t);if(s===!1||s===!0)return sl(e,t,r.memoize,s),s;var a=Ov(e,t);if(a!==null)return a}var u=cp(e);if(u!==cp(t))return sl(e,t,r.memoize,!1),!1;sl(e,t,r.memoize,!0);var c=Bx(e,t,u,r);return sl(e,t,r.memoize,c),c}function Bx(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return wn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Bv(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Ai(e,t,n);case"RegExp":return Rx(e,t);case"Generator":return Lx(e,t,n);case"DataView":return Ai(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Ai(new Uint8Array(e),new Uint8Array(t),n);case"Set":return hp(e,t,n);case"Map":return hp(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return _x(e,t,n)}}function Rx(e,t){return e.toString()===t.toString()}function hp(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){o.push([s,a])}),Ai(n.sort(),o.sort(),r)}function Ai(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(wn(e[o],t[o],r)===!1)return!1;return!0}function Lx(e,t,r){return Ai(b0(e),b0(t),r)}function jx(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function mp(e){if(jx(e))try{return b0(e[Symbol.iterator]())}catch{return[]}return[]}function b0(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function gp(e){var t=[];for(var r in e)t.push(r);return t}function pp(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var o=r[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&t.push(o)}return t}function Bv(e,t,r,n){var o=r.length;if(o===0)return!0;for(var i=0;i<o;i+=1)if(wn(e[r[i]],t[r[i]],n)===!1)return!1;return!0}function _x(e,t,r){var n=gp(e),o=gp(t),i=pp(e),s=pp(t);if(n=n.concat(i),o=o.concat(s),n.length&&n.length===o.length)return Ai(bp(n).sort(),bp(o).sort())===!1?!1:Bv(e,t,n,r);var a=mp(e),u=mp(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Ai(a,u,r)):n.length===0&&a.length===0&&o.length===0&&u.length===0}function Ts(e){return e===null||typeof e!="object"}function bp(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class ks extends p{name="DiffError";constructor(t,r,n,o){const i=xk(r,n);super([t,Dh(i)].join(`
`),o)}}function Io(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const No={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${v(t)}

.`,r):new ks("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${v(t)}

.`,r):new p(`

${v(e)}

strictly equals

${v(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${v(t)}

.`,r):new ks("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${v(t)}

.`,r):new p(`

${v(e)}

loosely equals

${v(t)}

`,r)},deepEquals(e,t,r){if(!wn(e,t,{comparator:Io}))throw new ks("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(wn(e,t,{comparator:Io}))throw new p(`

${v(e)}

deeply equals

${v(t)}

`,r)}},Rv=No.deepEquals,Lv={assert:No,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return wn(e,t,{comparator:Io})},notDeepEquals(e,t){return!wn(e,t,{comparator:Io})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${v(t)}

.`,r):new ks("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${v(t)}

.`,r):new p(`

${v(e)}

strictly equals

${v(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${v(t)}

.`,r):new ks("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${v(t)}

.`,r):new p(`

${v(e)}

loosely equals

${v(t)}

`,r);return e},deepEquals(e,t,r){if(wn(e,t,{comparator:Io}))return e;throw new ks("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(wn(e,t,{comparator:Io}))throw new p(`

${v(e)}

deeply equals

${v(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(wn(e,t,{comparator:Io}))return e},notDeepEquals(e,t){if(!wn(e,t,{comparator:Io}))return e}},waitUntil:{strictEquals:O(No.strictEquals),notStrictEquals:O(No.notStrictEquals),looseEquals:O(No.looseEquals),notLooseEquals:O(No.notLooseEquals),deepEquals:O(No.deepEquals),notDeepEquals:O(No.notDeepEquals)}};function Or(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function on(e,t){return typeof t=="string"?t.includes(e):Or(t,e)}const ro={hasValue(e,t,r){if(!Or(e,t))throw new p(`'${v(e)}' does not have value '${v(t)}'.`,r)},lacksValue(e,t,r){if(Or(e,t))throw new p(`'${v(e)}' has value '${v(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new p(`'${v(e)}' does not have values '${v(t)}'.`,r)}if(n.length)throw new p(`'${v(e)}' does not have values '${v(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new p(`'${v(e)}' has values '${v(n)}'.`,r)},isIn(e,t,r){if(!on(e,t))throw new p(`'${v(e)}'

is not in

${v(t)}.`,r)},isNotIn(e,t,r){if(on(e,t))throw new p(`'${v(e)}'

is in

${v(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${v(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new p(`'${v(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new p(`'${v(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${v(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${v(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${v(e)}' is not empty.`,t)}}},jv={assert:ro,check:{hasValue(e,t){return Or(e,t)},lacksValue(e,t){return!Or(e,t)},hasValues(e,t){return t.every(r=>Or(e,r))},lacksValues(e,t){return t.every(r=>!Or(e,r))},isIn(e,t){return on(e,t)},isNotIn(e,t){return!on(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!Or(e,t))throw new p(`'${v(e)}' does not have value '${v(t)}'.`,r);return e},lacksValue(e,t,r){if(Or(e,t))throw new p(`'${v(e)}' has value '${v(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new p(`'${v(e)}' does not have values '${v(t)}'.`,r)}if(n.length)throw new p(`'${v(e)}' does not have values '${v(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new p(`'${v(e)}' has values '${v(n)}'.`,r);return e},isIn(e,t,r){if(!on(e,t))throw new p(`'${v(e)}'

is not in

${v(t)}.`,r);return e},isNotIn(e,t,r){if(on(e,t))throw new p(`'${v(e)}'

is in

${v(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${v(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new p(`'${v(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new p(`'${v(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${v(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${v(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${v(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(Or(e,t))return e},lacksValue(e,t){if(!Or(e,t))return e},hasValues(e,t){if(t.every(r=>Or(e,r)))return e},lacksValues(e,t){if(!t.every(r=>Or(e,r)))return e},isIn(e,t){if(on(e,t))return e},isNotIn(e,t){if(!on(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:O(ro.hasValue),lacksValue:O(ro.lacksValue),hasValues:O(ro.hasValues),lacksValues:O(ro.lacksValues),isIn:O(ro.isIn),isNotIn:O(ro.isNotIn),isEmpty:O(ro.isEmpty),isNotEmpty:O(ro.isNotEmpty)}},zd={isHttpStatus(e,t){if(!io(e,M))throw new p(`${v(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(io(e,M)){if(!on(e,El[t]))throw new p(`${v(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${v(e)} is not a valid HTTP status.`,r)}},_v={assert:zd,check:{isHttpStatus(e){return io(e,M)},isHttpStatusCategory(e,t){return io(e,M)&&on(e,El[t])}},assertWrap:{isHttpStatus(e,t){if(!io(e,M))throw new p(`${v(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(io(e,M)){if(!on(e,El[t]))throw new p(`${v(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${v(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(io(e,M))return e},isHttpStatusCategory(e,t){if(io(e,M)&&on(e,El[t]))return e}},waitUntil:{isHttpStatus:O(zd.isHttpStatus),isHttpStatusCategory:O(zd.isHttpStatusCategory)}},Vd={instanceOf(e,t,r){if(!(e instanceof t))throw new p(`'${v(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${v(e)}' is an instance of '${t.name}'`,r)}},Uv={assert:Vd,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new p(`'${v(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${v(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:O(Vd.instanceOf),notInstanceOf:O(Vd.notInstanceOf)}},Ux=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Xe(e,t){return Ux.some(r=>{try{return r(e,t)}catch{return!1}})}const mi={isKeyOf(e,t,r){if(!Xe(t,e))throw new p(`'${String(e)}' is not a key of '${v(t)}'.`,r)},isNotKeyOf(e,t,r){if(Xe(t,e))throw new p(`'${String(e)}' is a key of '${v(t)}'.`,r)},hasKey(e,t,r){if(!Xe(e,t))throw new p(`'${v(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(Xe(e,t))throw new p(`'${v(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(o=>!Xe(e,o));if(n.length)throw new p(`'${v(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(o=>Xe(e,o));if(n.length)throw new p(`'${v(e)}' does not lack keys '${n.join(",")}'.`,r)}},zv={assert:mi,check:{isKeyOf(e,t){return Xe(t,e)},isNotKeyOf(e,t){return!Xe(t,e)},hasKey:Xe,lacksKey(e,t){return!Xe(e,t)},hasKeys(e,t){return t.every(r=>Xe(e,r))},lacksKeys(e,t){return t.every(r=>!Xe(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!Xe(t,e))throw new p(`'${String(e)}' is not a key of '${v(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(Xe(t,e))throw new p(`'${String(e)}' is a key of '${v(t)}'.`,r);return e},hasKey(e,t,r){if(!Xe(e,t))throw new p(`'${v(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(Xe(e,t))throw new p(`'${v(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(o=>!Xe(e,o));if(n.length)throw new p(`'${v(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(o=>Xe(e,o));if(n.length)throw new p(`'${v(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(Xe(t,e))return e},isNotKeyOf(e,t){if(!Xe(t,e))return e},hasKey(e,t){if(Xe(e,t))return e},lacksKey(e,t){if(!Xe(e,t))return e},hasKeys(e,t){if(t.every(r=>Xe(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!Xe(e,r)))return e}},waitUntil:{isKeyOf:O(mi.isKeyOf),isNotKeyOf:O(mi.isNotKeyOf),hasKey:O(mi.hasKey),lacksKey:O(mi.lacksKey),hasKeys:O(mi.hasKeys),lacksKeys:O(mi.lacksKeys)}};function zx(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r)}function Vx(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r)}const qd={isLengthAtLeast:zx,isLengthExactly:Vx},Vv={assert:qd,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:je(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:je(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:je(e).length)===t)return e})},waitUntil:{isLengthAtLeast:O(qd.isLengthAtLeast),isLengthExactly:O(qd.isLengthExactly)}},qx={never(e){throw new p("This code should not have executed.",e)}},qv={assert:qx,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Wd={isDefined(e,t){if(e==null)throw new p(`'${v(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new p(`'${v(e)}' is not a nullish.`,t)}},Wv={assert:Wd,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new p(`'${v(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new p(`'${v(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:O(Wd.isDefined),isNullish:O(Wd.isNullish)}},$r={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${v({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${v({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n)}},Kv={assert:$r,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${v({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${v({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:O($r.isInBounds),isOutBounds:O($r.isOutBounds),isInteger:O($r.isInteger),isNotInteger:O($r.isNotInteger),isAbove:O($r.isAbove),isAtLeast:O($r.isAtLeast),isBelow:O($r.isBelow),isAtMost:O($r.isAtMost),isNaN:O($r.isNaN),isFinite:O($r.isFinite),isInfinite:O($r.isInfinite),isApproximately:O($r.isApproximately),isNotApproximately:O($r.isNotApproximately)}};function Wx(e,t,r,n,o){return Mu(...Fc(e,t,r,n,o),!1)}function Fc(e,t,r,n,o){const i=Array.isArray(r);return[i?e:Rv,i?t:e,i?r:t,i?n:r,i?o:n]}function Mu(e,t,r,n,o,i){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const c=await s;e(c,n),i?a(c):a()}catch(c){u(new p(`Output from '${t.name}' did not produce expected output. ${Wt(c)}`,o))}});try{return e(s,n),i?s:void 0}catch(a){throw new p(`Output from '${t.name}' did not produce expected output. ${Wt(a)}`,o)}}function Kx(e,t,r,n,o){try{const i=Mu(...Fc(e,t,r,n,o),!1);return i instanceof Promise?new Promise(async s=>{try{await i,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function Gx(e,t,r,n,o){return Mu(...Fc(e,t,r,n,o),!0)}function Hx(e,t,r,n,o){try{const i=Mu(...Fc(e,t,r,n,o),!0);return i instanceof Promise?new Promise(async s=>{try{s(await i)}catch{s(void 0)}}):i}catch{return}}const Kd=Symbol("not set");async function Zx(e,t,r,n,o,i){const s=Array.isArray(r),a=s?e:Rv,u=s?t:e,c=s?r:t,d=s?n:r,f=Cv(s?o:n),h=s?i:o,m=Ss(f.timeout,{milliseconds:!0}).milliseconds,y=Ss(f.interval,{milliseconds:!0});let $=Kd,k;async function x(){try{$=await Mu(a,u,c,d,void 0,!0)}catch(N){$=Kd,k=ht(N)}}const E=Date.now();for(;$===Kd;)if(await x(),await Ti(y),Date.now()-E>=m)throw Hs(k,Vi(h,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return $}const Jx={output:Wx},Gv={assert:Jx,check:{output:Kx},assertWrap:{output:Gx},checkWrap:{output:Hx},waitUntil:{output:Zx}},wa={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${v(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${v(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${v(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${v(e)}' is not a Primitive.`,t)}},Hv={assert:wa,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${v(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${v(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${v(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${v(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:O(wa.isNotPrimitive),isNotPropertyKey:O(wa.isNotPropertyKey),isPrimitive:O(wa.isPrimitive),isPropertyKey:O(wa.isPropertyKey)}},$a={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${v(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${v(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${v(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${v(e)}' is a Promise.`,t)}},Zv={assert:$a,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${v(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${v(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${v(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${v(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:O($a.isPromiseLike,!0),isNotPromiseLike:O($a.isNotPromiseLike,!0),isPromise:O($a.isPromise,!0),isNotPromise:O($a.isNotPromise,!0)}},Gd={matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r)}},Jv={assert:Gd,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:O(Gd.matches,!0),mismatches:O(Gd.mismatches,!0)}},rt={isArray(e,t){if(!Array.isArray(e))throw new p(`'${v(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${v(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${v(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new p(`'${v(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new p(`'${v(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${v(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${v(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${v(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new p(`'${v(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${v(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new p(`'${v(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${v(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${v(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${v(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${v(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new p(`'${v(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${v(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${v(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new p(`'${v(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${v(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${v(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${v(e)}' is a undefined.`,t)}},Yv={assert:rt,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new p(`'${v(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${v(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${v(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new p(`'${v(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new p(`'${v(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${v(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${v(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${v(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new p(`'${v(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${v(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new p(`'${v(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${v(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${v(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${v(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${v(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new p(`'${v(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${v(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${v(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new p(`'${v(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${v(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${v(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${v(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:O(rt.isArray),isBigInt:O(rt.isBigInt),isBoolean:O(rt.isBoolean),isFunction:O(rt.isFunction),isNull:O(rt.isNull),isNumber:O(rt.isNumber),isObject:O(rt.isObject),isPlainObject:O(rt.isPlainObject),isString:O(rt.isString),isSymbol:O(rt.isSymbol),isUndefined:O(rt.isUndefined),isNotArray:O(rt.isNotArray),isNotBigInt:O(rt.isNotBigInt),isNotBoolean:O(rt.isNotBoolean),isNotFunction:O(rt.isNotFunction),isNotNull:O(rt.isNotNull),isNotNumber:O(rt.isNotNumber),isNotObject:O(rt.isNotObject),isNotPlainObject:O(rt.isNotPlainObject),isNotString:O(rt.isNotString),isNotSymbol:O(rt.isNotSymbol),isNotUndefined:O(rt.isNotUndefined)}};var Ar;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Ar||(Ar={}));function Ah(e,t,r){Eh(e,{noError:"No error.",notInstance:`'${v(e)}' is not an error instance.`},t,r)}function yp(e,t,r){Eh(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${v(e)}' is not an error instance.`},t,r)}function Eh(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const o=e.constructor.name;throw new p(`Error constructor '${o}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const o=Wt(e);if(typeof r.matchMessage=="string"){if(!Ev(o,r.matchMessage))throw new p(`Error message

'${o}'

does not contain

'${r.matchMessage}'.`,n)}else if(!o.match(r.matchMessage))throw new p(`Error message

'${o}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new p(t.notInstance,n);else throw new p(t.noError,n)}function vp(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=Wt(e);if(typeof t.matchMessage=="string"){if(!Ev(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Mc(e,t,r,n){let o;try{const i=t instanceof Promise?t:t();if(i instanceof Promise)return new Promise(async(s,a)=>{try{await i}catch(u){o=ht(u)}try{yp(o,r,n),e===Ar.Assert?s():e===Ar.Check?s(!0):s(o)}catch(u){e===Ar.CheckWrap?s(void 0):e===Ar.Check?s(!1):a(ht(u))}})}catch(i){o=ht(i)}try{return yp(o,r,n),e===Ar.Check?!0:e!==Ar.Assert?o:void 0}catch(i){if(e===Ar.CheckWrap)return;if(e===Ar.Check)return!1;throw i}}function Yx(e,t,r){return Mc(Ar.Assert,e,t,r)}function Xx(e,t){return Mc(Ar.Check,e,t)}function Qx(e,t,r){return Mc(Ar.AssertWrap,e,t,r)}function e3(e,t,r){return Mc(Ar.CheckWrap,e,t,r)}const t3=O(Ah);function r3(e,t,r,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,i=o?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof i!="function")throw new TypeError(`Callback is not a function, got '${v(i)}'`);return t3(o,async()=>{try{await i();return}catch(u){return ht(u)}},a,s)}const n3={throws:Yx,isError:Ah},Xv={assert:n3,check:{throws:Xx,isError(e,t){return vp(e,t)}},assertWrap:{throws:Qx,isError(e,t,r){return Eh(e,{noError:"No error.",notInstance:`'${v(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:e3,isError(e,t){if(vp(e,t))return e}},waitUntil:{throws:r3,isError:O(Ah)}},Oo=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Hd={isUuid(e,t){if(!String(e).match(Oo))throw new p(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Oo))throw new p(`'${String(e)}' is a UUID.`,t)}},Qv={assert:Hd,check:{isUuid(e){return!!String(e).match(Oo)},isNotUuid(e){return!String(e).match(Oo)}},assertWrap:{isUuid(e,t){if(!String(e).match(Oo))throw new p(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Oo))throw new p(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Oo))return e},isNotUuid(e){if(!String(e).match(Oo))return e}},waitUntil:{isUuid:O(Hd.isUuid),isNotUuid:O(Hd.isNotUuid)}},o3={...qv.assert,...Fv.assert,...Mv.assert,...Tv.assert,...Sv.assert,..._v.assert,...Uv.assert,...Nv.assert,...zv.assert,...Vv.assert,...Wv.assert,...Kv.assert,...Gv.assert,...Hv.assert,...Zv.assert,...Jv.assert,...Yv.assert,...Lv.assert,...Xv.assert,...Qv.assert,...jv.assert},Ch=[Fv,Mv,Tv,Sv,_v,Uv,Nv,zv,Vv,qv,Wv,Kv,Gv,Hv,Zv,Jv,Yv,Lv,Xv,Qv,jv],i3=Object.assign({},...Ch.map(e=>e.check)),F=Object.assign(function(t){return!!t},i3);function s3(e,t,r){return Sl(e,t,r,new Set)}function Sl(e,t,r,n){if(e=wp(e),t=wp(t),F.isObject(e)&&F.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Sl(je(e).sort(),je(t).sort(),r,n))return!1;let o=!1;const i=je(e).map(s=>{const a=Sl(e[s],t[s],r,n);return F.isPromise(a)&&(o=!0),a});return $p(o,i)}else if(F.isArray(e)&&F.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let o=!1;const i=e.map((s,a)=>{const u=Sl(s,t[a],r,n);return F.isPromise(u)&&(o=!0),u});return $p(o,i)}else return r(e,t)}function wp(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function $p(e,t){return e?new Promise(async(r,n)=>{try{const o=await Promise.all(t);r(o.every(F.isTrue))}catch(o){n(ht(o))}}):t.every(F.isTrue)}const a3=Object.assign({},...Ch.map(e=>e.assertWrap)),_t=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r);return t},a3);function u3(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const l3={tsType:u3},c3={assert:l3},d3={fail:e=>{throw new p("Failure triggered.",e)}},f3={...c3.assert,...o3,...d3},Dt=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r)},f3),h3=Object.assign({},...Ch.map(e=>e.checkWrap)),Fh=Object.assign(function(t){if(t)return t},h3);function m3(e,t){return F.hasKey(e,"entryType")&&e.entryType===t}function gi(e,t){return e.controlType===t}var X;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(X||(X={}));const e2=Symbol("any-type"),g3={[X.Checkbox]:!1,[X.Color]:"",[X.Custom]:void 0,[X.Dropdown]:"",[X.Hidden]:e2,[X.Number]:0,[X.Text]:""};function p3(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===X.Custom)return;const i=g3[o.controlType];i!==e2&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function b3(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return F.isPromise(o)?new Promise(async(i,s)=>{try{const a=await o;e.set(n,a),i(a)}catch(a){s(ht(a))}}):(e.set(n,o),o)}}function Wi(e,t,r){if(t in e)return e[t];{const n=r();return F.isPromise(n)?new Promise(async(o,i)=>{try{const s=await n;e[t]=s,o(s)}catch(s){i(ht(s))}}):(e[t]=n,n)}}function En(e){return je(e).map(t=>[t,e[t]])}function nu(e){return Object.fromEntries(e)}function ko(e,t,r){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return r(a,o,i,s)&&n.push(a),n},[])}function y3(e,t,r={}){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return Wi(n,a,()=>[]).push(o),n},{})}function Su(e,t,r={}){try{let n=!1;const o=e.map((i,s,a)=>{const u=t(i,s,a);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(F.isTruthy);return n?new Promise(async(i,s)=>{try{const a=ko(await Promise.all(o),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},F.isTruthy);i(nu(a))}catch(a){s(ht(a))}}):nu(o)}catch(n){throw ht(n)}}function v3(e,t){const r=[];let n=!1;for(let o=0;o<e;o++){const i=t(o);F.isPromise(i)&&(n=!0),r.push(i)}return n?Promise.all(r):r}function w3(e){return Array.isArray(e)?e:[e]}function $3({min:e,max:t}){const{min:r,max:n}=gh({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)),s=Math.ceil(i/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/o)*o,u=new Uint8Array(s);let c;do crypto.getRandomValues(u),c=u.reduce((d,f,h)=>d+f*256**h,0);while(c>=a);return r+c%o}const kp=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];function Ei(e=16){let t="";for(let r=0;r<e;r++){const n=$3({min:0,max:kp.length-1});t+=kp[n]}return t}function t2(e){if(F.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Wt(t).trim()).join(`
`))}function r2(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):F.hasKey(t,"fallbackValue")?t.fallbackValue:ht(n)):r}catch(r){return t.handleError?t.handleError(r):F.hasKey(t,"fallbackValue")?t.fallbackValue:ht(r)}}function yn(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const k3="modulepreload",x3=function(e){return"/vira/book/"+e},xp={},Kl=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let u=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=u(r.map(c=>{if(c=x3(c),c in xp)return;xp[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":k3,d||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),d)return new Promise((m,y)=>{h.addEventListener("load",m),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var Nt;(function(e){e.Standard="stdout",e.Error="stderr"})(Nt||(Nt={}));var fe;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(fe||(fe={}));async function D3(){return await vy({async[Dn.Node](){const e=(await Kl(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[fe.Bold]:e.bold.open,[fe.Debug]:e.blueBright.open,[fe.Error]:e.red.open,[fe.Faint]:e.gray.open,[fe.Info]:e.cyan.open,[fe.Mutate]:e.magenta.open,[fe.NormalWeight]:"\x1B[22m",[fe.Plain]:"",[fe.Reset]:e.reset.open,[fe.Success]:e.green.open,[fe.Warning]:e.yellow.open}},[Dn.Web](){return Promise.resolve({[fe.Bold]:"font-weight: bold",[fe.Debug]:"color: blue",[fe.Error]:"color: red",[fe.Faint]:"color: grey",[fe.Info]:"color: teal",[fe.Mutate]:"color: magenta",[fe.NormalWeight]:"",[fe.Plain]:"",[fe.Reset]:"",[fe.Success]:"color: green",[fe.Warning]:"color: orange"})}})}const Ir=await D3(),A3={[fe.Bold]:{colors:[Ir.bold],logType:Nt.Standard},[fe.Debug]:{colors:[Ir.debug],logType:Nt.Standard},[fe.Faint]:{colors:[Ir.faint],logType:Nt.Standard},[fe.Info]:{colors:[Ir.info],logType:Nt.Standard},[fe.Mutate]:{colors:[Ir.mutate,Ir.bold],logType:Nt.Standard},[fe.NormalWeight]:{colors:[Ir.normalWeight],logType:Nt.Standard},[fe.Plain]:{colors:[],logType:Nt.Standard},[fe.Reset]:{colors:[Ir.reset],logType:Nt.Standard},[fe.Success]:{colors:[Ir.success,Ir.bold],logType:Nt.Standard},[fe.Error]:{colors:[Ir.error,Ir.bold],logType:Nt.Error},[fe.Warning]:{colors:[Ir.warning],logType:Nt.Error}};function yr({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function xs({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function n2(e,t){try{let r=!1;const n=En(e).map(([o,i])=>{const s=t(o,i,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(F.isTruthy);return r?new Promise(async(o,i)=>{try{const s=ko(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},F.isTruthy);o(nu(s))}catch(s){i(ht(s))}}):nu(n)}catch(r){throw ht(r)}}function E3(e,t){return n2(e,(r,n)=>{const o=n,i=t(n,e);return i instanceof Promise?i.then(s=>({key:o,value:s})):{key:o,value:i}})}function o2(e,...t){const r={...e};return t.forEach(n=>{n&&En(n).forEach(([o,i])=>{i!=null&&(r[o]=i)})}),r}function C3(e){return e.replace(/,/g,"")}function F3(e){return typeof e=="number"?e:Number(typeof e=="string"?C3(e):e)}function M3(e){const t=S3(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function S3(e){const t=F3(e);if(!isNaN(t))return t}const i2="px";function ou(e){return Mh({value:e,suffix:i2})}function T3(e){return M3(s2({value:e,suffix:i2}))}function Mh({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function s2({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function N3(){return await vy({async[Dn.Node](){const{inspect:e}=await Kl(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const o=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[fe.Reset].colors.join("")].join(""),css:void 0}}},[Dn.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:ko(r.colorConfig[t].colors,s=>s2({value:s,suffix:";"}),F.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?Wt(s):v(s)).join(`
`),r.omitColors?"":r.colorConfig[fe.Reset].colors.join("")].join(""),css:n}}}})}const P3=await N3(),I3={colorConfig:A3,omitColors:!1},O3=a2({[Nt.Error](){},[Nt.Standard](){}});function a2(e,t){const r=o2(I3,t);function n(i){e[r.colorConfig[i.colorKey].logType](P3({...i,options:r}))}const o=E3(fe,i=>(...s)=>n({args:s,colorKey:i}));return{...o,if(i){return i?o:O3}}}const B3=mh(Dn.Node)?{[Nt.Error]({text:e}){process.stderr.write(e+`
`)},[Nt.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[Nt.Error]({text:e,css:t}){console.error(yr({value:e,prefix:"%c"}),t)},[Nt.Standard]({text:e,css:t}){console.log(yr({value:e,prefix:"%c"}),t)}},u2=a2(B3);function R3(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}function l2(e,{digits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function L3({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const o=xv(Av(t,{caseSensitive:r}),"g"),i=[];return e.replace(o,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);i.push({index:a,length:u.length});const c=s[0];if(typeof c!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return c}),i}function j3(e,t,{caseSensitive:r}){const n=L3({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),o=Av(t,{caseSensitive:r});return e.split(o).reduce((s,a,u)=>{const c=n[u],d=s.concat(a);if(c){const f=e.slice(c.index,c.index+c.length);return d.concat(f)}else return d},[])}function _3(e,t){return e.split(t)}function Dp(e,t){const{min:r,max:n}=gh(t);if(t.takeOverflow){const o=n-r+1,i=(e-r)%o;return i<0?r+o+i:r+i}else return e>n?r:e<r?n:e}function et(e,t){let r=!1;const n=je(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),o[i]=s,o},{});return r?new Promise(async(o,i)=>{try{await Promise.all(je(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(ht(s))}}):n}function Sc(e,t){const r=En(e).filter(([n,o])=>t(n,o,e));return nu(r)}function U3(e,t){return Sc(e,r=>t.includes(r))}function iu(e){return je(e).map(t=>e[t])}function c2(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var su;(function(e){e.Upper="upper",e.Lower="lower"})(su||(su={}));const z3={firstLetterCase:su.Lower};function V3(e,t){if(!e.length)return"";const r=e[0];return(t===su.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function q3(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""}),o=o2(z3,t);return V3(n,o.firstLetterCase)}function d2(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function W3({value:e,wrapper:t}){return yr({value:Mh({value:e,suffix:t}),prefix:t})}function Pn(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function Sh(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class K3{listeners={};universalListeners=new Map;getListenerCount(){return iu(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function o(i,s){r.once&&n(),t(i,s)}return this.universalListeners.set(t,{listener:o,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const o=F.isString(t)?t:t.type,i=()=>this.listeners[o]?.delete(r)||!1;function s(a,u){n.once&&i(),r(a,u)}return Wi(this.listeners,o,()=>new Map).set(r,{listener:s,removeListener:i}),i}removeListener(t,r){const n=F.isString(t)?t:t.type,o=this.listeners[n];if(!o)return!1;const i=o.get(r);return i?i.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(o=>{o.listener(t,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(t,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=iu(this.listeners).reduce((n,o)=>{const i=o.size||0;return o.clear(),n+i},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class Th extends K3{}function Nh(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function y0(e,t,r){return Nh(globalThis,e,t,r)}function Ph(e,t){return au(e.title),e.parent?[...Ph(e.parent),au(e.parent.title)].concat([]):[]}function au(e){return c2(e).toLowerCase().replaceAll(/\s/g,"-")}function G3({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const H3=/[/?#&=]/;function f2(e){const t=e.match(H3);return e.trim()?au(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const Z3={[Yt.ElementExample]:()=>[],[Yt.Page]:e=>[f2(e.title),...p3(e.controls,e.title)].filter(F.isTruthy),[Yt.Root]:()=>[]},Gl="_isBookTreeNode",h2=new Map;function J3(e){return h2.get(e)}function Y3(e,t){b3(h2,e,()=>t)}function Ds(e,t){return m2(e)&&e.entry.entryType===t}function m2(e){return!!(F.hasKeys(e,[Gl,"entry"])&&e[Gl])}function X3(){return{[Gl]:!0,entry:{entryType:Yt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Q3({entries:e,debug:t}){const r=J3(e);if(r)return r;const n=X3();e.forEach(s=>Ih({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=g2(n),i={tree:n,flattenedNodes:o};return Y3(e,i),t&&console.info("element-book tree:",n),i}function e6(e,t,r){if(!t.parent)return e;const n=v0(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Ih({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=v0(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Ph(t).join(" > ")}`);return o}function Ih({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Z3[t.entryType](t);t.errors.push(...o);const i=e6(e,t,r),s=au(t.title),a=i.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[Gl]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};i.children[s]=u,m3(t,Yt.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(c=>Ih({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function v0(e,t){const r=m2(e)?e.fullUrlBreadcrumbs.slice(0,-1):Ph(e);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function g2(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>g2(o));return[e,...r].flat()}function Oh(e,t){return Bh(e,["",...t],void 0)}function Bh(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],s=i&&Bh(i,n,r);return{...e.controls,...s}}function t6(e,t,r){const n={...e};return Bh(n,["",...t],r),n}function p2(e,t){const r=t?.controls||(Ds(e,Yt.Page)?et(e.entry.controls,(o,i)=>i.initValue):{});return{children:et(e.children,(o,i)=>p2(i,t?.children?.[i.urlBreadcrumb])),controls:r}}function Me(e){const t={...e,entryType:Yt.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:t.useVerticalExamples,entryType:Yt.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),f2(n.title)].filter(F.isTruthy)};r.add(n.title),t.elementExamples[au(o.title)]=o}}),t}var Er;(function(e){e.Search="search",e.Book="book"})(Er||(Er={}));function b2(e){return e[0]===Er.Book?"":e[1]?decodeURIComponent(e[1]):""}const Ns={hash:void 0,paths:[Er.Book],search:void 0};class Hl{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const t=Hl.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=r=>(y2.registry.set(r.name,r),t(r)))}canRegisterCssProperty(t){return Hl.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(t){if(!this.canRegisterCssProperty(t.name))return!1;try{return globalThis.CSS.registerProperty(t),!0}catch(r){throw Hs(r,`Failed to define CSS var: ${v(t,4)}

`)}}}const y2=new Hl;const Tl=globalThis,Rh=Tl.ShadowRoot&&(Tl.ShadyCSS===void 0||Tl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Lh=Symbol(),Ap=new WeakMap;let _o=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Lh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Rh&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Ap.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ap.set(r,t))}return t}toString(){return this.cssText}};const Ie=e=>new _o(typeof e=="string"?e:e+"",void 0,Lh),v2=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new _o(r,e,Lh)},r6=(e,t)=>{if(Rh)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Tl.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},Ep=Rh?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Ie(r)})(e):e;const{is:n6,defineProperty:o6,getOwnPropertyDescriptor:i6,getOwnPropertyNames:s6,getOwnPropertySymbols:a6,getPrototypeOf:u6}=Object,Tc=globalThis,Cp=Tc.trustedTypes,l6=Cp?Cp.emptyScript:"",c6=Tc.reactiveElementPolyfillSupport,za=(e,t)=>e,Zl={toAttribute(e,t){switch(t){case Boolean:e=e?l6:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},jh=(e,t)=>!n6(e,t),Fp={attribute:!0,type:String,converter:Zl,reflect:!1,useDefault:!1,hasChanged:jh};Symbol.metadata??=Symbol("metadata"),Tc.litPropertyMetadata??=new WeakMap;let ms=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Fp){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&o6(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=i6(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:o,set(s){const a=o?.call(this);i?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Fp}static _$Ei(){if(this.hasOwnProperty(za("elementProperties")))return;const t=u6(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(za("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(za("properties"))){const r=this.properties,n=[...s6(r),...a6(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Ep(o))}else t!==void 0&&r.push(Ep(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r6(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:Zl).toAttribute(r,n.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,r){const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Zl;this._$Em=o;const a=s.fromAttribute(r,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,r,n,o=!1,i){if(t!==void 0){const s=this.constructor;if(o===!1&&(i=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??jh)(i,r)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,i]of n){const{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};ms.elementStyles=[],ms.shadowRootOptions={mode:"open"},ms[za("elementProperties")]=new Map,ms[za("finalized")]=new Map,c6?.({ReactiveElement:ms}),(Tc.reactiveElementVersions??=[]).push("2.1.2");const _h=globalThis,Mp=e=>e,Jl=_h.trustedTypes,Sp=Jl?Jl.createPolicy("lit-html",{createHTML:e=>e}):void 0,w2="$lit$",Ro=`lit$${Math.random().toFixed(9).slice(2)}$`,$2="?"+Ro,d6=`<${$2}>`,Ni=document,uu=()=>Ni.createComment(""),lu=e=>e===null||typeof e!="object"&&typeof e!="function",Uh=Array.isArray,f6=e=>Uh(e)||typeof e?.[Symbol.iterator]=="function",Zd=`[ 	
\f\r]`,ka=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tp=/-->/g,Np=/>/g,pi=RegExp(`>|${Zd}(?:([^\\s"'>=/]+)(${Zd}*=${Zd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pp=/'/g,Ip=/"/g,k2=/^(?:script|style|textarea|title)$/i,h6=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),m6=h6(1),Vr=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),Op=new WeakMap,xi=Ni.createTreeWalker(Ni,129);function x2(e,t){if(!Uh(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Sp!==void 0?Sp.createHTML(t):t}const g6=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=ka;for(let a=0;a<r;a++){const u=e[a];let c,d,f=-1,h=0;for(;h<u.length&&(s.lastIndex=h,d=s.exec(u),d!==null);)h=s.lastIndex,s===ka?d[1]==="!--"?s=Tp:d[1]!==void 0?s=Np:d[2]!==void 0?(k2.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=pi):d[3]!==void 0&&(s=pi):s===pi?d[0]===">"?(s=o??ka,f=-1):d[1]===void 0?f=-2:(f=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?pi:d[3]==='"'?Ip:Pp):s===Ip||s===Pp?s=pi:s===Tp||s===Np?s=ka:(s=pi,o=void 0);const m=s===pi&&e[a+1].startsWith("/>")?" ":"";i+=s===ka?u+d6:f>=0?(n.push(c),u.slice(0,f)+w2+u.slice(f)+Ro+m):u+Ro+(f===-2?a:m)}return[x2(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class cu{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const a=t.length-1,u=this.parts,[c,d]=g6(t,r);if(this.el=cu.createElement(c,n),xi.currentNode=this.el.content,r===2||r===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=xi.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(w2)){const h=d[s++],m=o.getAttribute(f).split(Ro),y=/([.?@])?(.*)/.exec(h);u.push({type:1,index:i,name:y[2],strings:m,ctor:y[1]==="."?b6:y[1]==="?"?y6:y[1]==="@"?v6:Pc}),o.removeAttribute(f)}else f.startsWith(Ro)&&(u.push({type:6,index:i}),o.removeAttribute(f));if(k2.test(o.tagName)){const f=o.textContent.split(Ro),h=f.length-1;if(h>0){o.textContent=Jl?Jl.emptyScript:"";for(let m=0;m<h;m++)o.append(f[m],uu()),xi.nextNode(),u.push({type:2,index:++i});o.append(f[h],uu())}}}else if(o.nodeType===8)if(o.data===$2)u.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(Ro,f+1))!==-1;)u.push({type:7,index:i}),f+=Ro.length-1}i++}}static createElement(t,r){const n=Ni.createElement("template");return n.innerHTML=t,n}}function Ps(e,t,r=e,n){if(t===Vr)return t;let o=n!==void 0?r._$Co?.[n]:r._$Cl;const i=lu(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=o:r._$Cl=o),o!==void 0&&(t=Ps(e,o._$AS(e,t.values),o,n)),t}class p6{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=(t?.creationScope??Ni).importNode(r,!0);xi.currentNode=o;let i=xi.nextNode(),s=0,a=0,u=n[0];for(;u!==void 0;){if(s===u.index){let c;u.type===2?c=new Nc(i,i.nextSibling,this,t):u.type===1?c=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(c=new w6(i,this,t)),this._$AV.push(c),u=n[++a]}s!==u?.index&&(i=xi.nextNode(),s++)}return xi.currentNode=Ni,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}let Nc=class D2{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ps(this,t,r),lu(t)?t===Q||t==null||t===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==Vr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):f6(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&lu(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ni.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=cu.createElement(x2(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{const i=new p6(o,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(t){let r=Op.get(t.strings);return r===void 0&&Op.set(t.strings,r=new cu(t)),r}k(t){Uh(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new D2(this.O(uu()),this.O(uu()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=Mp(t).nextSibling;Mp(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class Pc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Q}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=Ps(this,t,r,0),s=!lu(t)||t!==this._$AH&&t!==Vr,s&&(this._$AH=t);else{const a=t;let u,c;for(t=i[0],u=0;u<i.length-1;u++)c=Ps(this,a[n+u],r,u),c===Vr&&(c=this._$AH[u]),s||=!lu(c)||c!==this._$AH[u],c===Q?t=Q:t!==Q&&(t+=(c??"")+i[u+1]),this._$AH[u]=c}s&&!o&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class b6 extends Pc{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class y6 extends Pc{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class v6 extends Pc{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=Ps(this,t,r,0)??Q)===Vr)return;const n=this._$AH,o=t===Q&&n!==Q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==Q&&(n===Q||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class w6{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ps(this,t)}}const $6={I:Nc},k6=_h.litHtmlPolyfillSupport;k6?.(cu,Nc),(_h.litHtmlVersions??=[]).push("3.3.2");const x6=(e,t,r)=>{const n=r?.renderBefore??t;let o=n._$litPart$;if(o===void 0){const i=r?.renderBefore??null;n._$litPart$=o=new Nc(t.insertBefore(uu(),i),i,void 0,r??{})}return o._$AI(e),o};const zh=globalThis;let Va=class extends ms{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=x6(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Vr}};Va._$litElement$=!0,Va.finalized=!0,zh.litElementHydrateSupport?.({LitElement:Va});const D6=zh.litElementPolyfillSupport;D6?.({LitElement:Va});(zh.litElementVersions??=[]).push("4.2.2");function Vh({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function A6({onElement:e,forCssVar:t,includeCascade:r}){return(r?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(t.name)).trim()}var Is;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(Is||(Is={}));var Bp;(function(e){e.Space="+",e.Comma="#"})(Bp||(Bp={}));function Gn(e,t={}){return et(e,(n,o)=>{E6(n);const i=o,s=F.isObject(i)&&!(i instanceof _o),a=F.isString(i)||F.isNumber(i)||i instanceof _o?String(i):String(i.default),u=F.isString(i)||F.isNumber(i)||i instanceof _o?String(i):String(i.initialValue||i.default),c=Ie(yr({value:n.replace(/^-+/,""),prefix:"--"})),d={name:c,value:v2`var(${c}, ${Ie(a)})`,syntax:F.isString(i)||F.isNumber(i)||i instanceof _o?Is.Any:w0(i.syntax),default:a},f=String(d.name);if(!u)throw new Error(`Initial value for CSS var ${f} cannot be empty.`);return s&&!t.skipRegistration&&y2.registerProperty({inherits:!0,name:f,initialValue:u,syntax:d.syntax})&&globalThis.document?.documentElement&&Vh({forCssVar:d,onElement:globalThis.document.documentElement,toValue:a}),d})}function E6(e){try{if(F.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(t){throw new Error(Vi("Invalid CSS var name.",t,`Got '${v(e)}'`))}}function w0(e){return e?F.isString(e)?e:e.union?e.union.map(t=>w0(t)).join(" | "):e.list?`${w0(e.list.values)}${e.list.separator}`:e.raw:Is.Any}const Ee=Gn({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),C6={nav:{hover:{background:Ee["element-book-nav-hover-background-color"],foreground:Ee["element-book-nav-hover-foreground-color"]},active:{background:Ee["element-book-nav-active-background-color"],foreground:Ee["element-book-nav-active-foreground-color"]},selected:{background:Ee["element-book-nav-selected-background-color"],foreground:Ee["element-book-nav-selected-foreground-color"]}},accent:{icon:Ee["element-book-accent-icon-color"]},page:{background:Ee["element-book-page-background-color"],backgroundFaint1:Ee["element-book-page-background-faint-level-1-color"],backgroundFaint2:Ee["element-book-page-background-faint-level-2-color"],foreground:Ee["element-book-page-foreground-color"],foregroundFaint1:Ee["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Ee["element-book-page-foreground-faint-level-2-color"]}};function F6(e,t){A2(e,t,C6)}function $0(e){return F.hasKey(e,"_$cssResult$")}function Rp(e){return F.hasKeys(e,["name","value","default"])&&F.isString(e.default)&&$0(e.name)&&$0(e.value)}function A2(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if($0(o)){if(!Rp(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Vh({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Rp(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);A2(e,o,i)}})}function Pa(e,t){let r=e.length,n,o,i=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,i=!0),Array.isArray(t[0])?o=t:(o=t.length>0?t.map(d=>[d]):[[]],s=!0);let a=o[0].length,u=o[0].map((d,f)=>o.map(h=>h[f])),c=n.map(d=>u.map(f=>{let h=0;if(!Array.isArray(d)){for(let m of f)h+=d*m;return h}for(let m=0;m<d.length;m++)h+=d[m]*(f[m]||0);return h}));return r===1&&i&&(c=c[0]),a===1&&s?r===1&&i?c[0]:c.map(d=>d[0]):c}function Jd(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function ft(e,t,r=[0,0,0]){const n=Jd(e,t[0]),o=Jd(e,t[1]),i=Jd(e,t[2]);return r[0]=n,r[1]=o,r[2]=i,r}function Qs(e){return Vo(e)==="string"}function Vo(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function qh(e,{precision:t=16,unit:r}){return Fe(e)?"none":(e=+Wh(e,t),e+(r??""))}function Fe(e){return e===null}function $t(e){return Fe(e)?0:e}function Wh(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const o=10**(t-n);return Math.floor(e*o+.5)/o}function du(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function E2(e,t,r){return(r-e)/(t-e)}function k0(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:du(t[0],t[1],E2(e[0],e[1],r))}function Ic(e,t,r){return Math.max(Math.min(r,t),e)}function Oc(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function kt(e,t){return Oc(Math.abs(e)**t,e)}function Kh(e,t){return t===0?0:e/t}function C2(e,t,r=0,n=e.length){for(;r<n;){const o=r+n>>1;e[o]<t?r=o+1:n=o}return r}function Os(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===r)return!0;if(!o||o==="Object")return!1;e=n}return!1}var M6=Object.freeze({__proto__:null,bisectLeft:C2,clamp:Ic,copySign:Oc,interpolate:du,interpolateInv:E2,isInstance:Os,isNone:Fe,isString:Qs,mapRange:k0,multiplyMatrices:Pa,multiply_v3_m3x3:ft,serializeNumber:qh,skipNone:$t,spow:kt,toPrecision:Wh,type:Vo,zdiv:Kh});class S6{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Ho=new S6;var qr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};let Lp=class{type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:o,max:i}=n.groups;(o||i)&&(this.range=[+o,+i])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),k0(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return t=k0(this.coordRange,n,t),qh(t,{unit:o,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return Os(t,this)?t:new this(t,r)}};const Yd=Symbol("instance");class Yl{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Yd]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let i=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>Lp.get(s,i))}))}serializeCoords(t,r,n){return n=t.map((o,i)=>Lp.get(n?.[i]??this.coords[i][0],this.spaceCoords[i])),t.map((o,i)=>n[i].serialize(o,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,o],i)=>{let s=t[i];if(Fe(s)||isNaN(s))return s;let a=r[i],u=this.coords[i].find(c=>c.type==a);if(!u){let c=o.name||n;throw new TypeError(`${a??s?.raw??s} not allowed for ${c} in ${this.name}()`)}return s=u.resolve(s),u.range&&(r[i]=u.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||Os(t,this)?t:t[Yd]?t[Yd]:new Yl(t,...r)}}const br={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function x0(e){return Array.isArray(e)?e:br[e]}function Xl(e,t,r,n={}){if(e=x0(e),t=x0(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Ho.run("chromatic-adaptation-start",o),o.M||(o.W1===br.D65&&o.W2===br.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===br.D50&&o.W2===br.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Ho.run("chromatic-adaptation-end",o),o.M)return ft(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function F2(e,t){let r={str:String(e)?.trim(),options:t};if(Ho.run("parse-start",r),r.color)return r.color;r.parsed=N6(r.str);let n,o=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let i=r.parsed.name,s,a,u=r.parsed.args,c=u.map((h,m)=>r.parsed.argMeta[m]?.type);if(i==="color"){let h=u.shift();c.shift();let m=h.startsWith("--")?h.substring(2):`--${h}`,y=[h,m];if(s=G.findFormat({name:i,id:y,type:"function"}),!s){let $,k=h in G.registry?h:m;if(k in G.registry){let x=G.registry[k].formats?.color?.id;x&&($=`Did you mean ${e.replace("color("+h,"color("+x)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+($??"Missing a plugin?"))}a=s.space,s.id.startsWith("--")&&!h.startsWith("--")&&qr.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${h}).`),h.startsWith("--")&&!s.id.startsWith("--")&&qr.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${h}).`)}else s=G.findFormat({name:i,type:"function"}),a=s.space;o&&Object.assign(o,{format:s,formatId:s.name,types:c,commas:r.parsed.commas});let d=1;r.parsed.lastAlpha&&(d=r.parsed.args.pop(),o&&(o.alphaType=c.pop()));let f=s.coords.length;if(u.length!==f)throw new TypeError(`Expected ${f} coordinates for ${a.id} in ${r.str}), got ${u.length}`);u=s.coerceCoords(u,c),n={spaceId:a.id,coords:u,alpha:d}}else e:for(let i of G.all)for(let s in i.formats){let a=i.formats[s];if(a.type!=="custom"||a.test&&!a.test(r.str))continue;let u=i.getFormat(a),c=u.parse(r.str);if(c){o&&Object.assign(o,{format:u,formatId:s}),n=c;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=Fe(n.alpha)?n.alpha:n.alpha===void 0?1:Ic(0,n.alpha,1),n}const M2={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Ql={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(M2).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function T6(e){let t={},r=e.match(Ql.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*M2[r]):Ql.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}function N6(e){if(!e)return;e=e.trim();let t=e.match(Ql.function);if(t){let r=[],n=[],o=!1,i=t[1].toLowerCase(),s=t[2].replace(Ql.singleArgument,(a,u)=>{let{value:c,meta:d}=T6(u);return(a.startsWith("/")||i!=="color"&&r.length===3)&&(o=!0),r.push(c),n.push(d),""});return{name:i,args:r,argMeta:n,lastAlpha:o,commas:s.includes(","),rawName:t[1],rawArgs:t[2]}}}function oe(e,t){if(Array.isArray(e))return e.map(n=>oe(n,t));if(!e)throw new TypeError("Empty color reference");Qs(e)&&(e=F2(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=G.get(r)),e.alpha===void 0&&(e.alpha=1),e}const P6=75e-6;class G{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?G.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let o in r)"name"in r[o]||(r[o].name=o);this.coords=r;let n=t.white??this.base.white??"D65";this.white=x0(n),this.formats=t.formats??{};for(let o in this.formats){let i=this.formats[o];i.type||="function",i.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:G.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,i)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:I6(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Ho.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=P6}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let s=n[i];if(s.type!=="angle"&&s.range){if(Fe(o))return!0;let[a,u]=s.range;return(a===void 0||o>=a-r)&&(u===void 0||o<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=Yl.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=oe(t);[t,r]=[a.space,a.coords]}if(t=G.get(t),this.equals(t))return r;r=r.map(a=>Fe(a)?0:a);let n=this.path,o=t.path,i,s;for(let a=0;a<n.length&&n[a].equals(o[a]);a++)i=n[a],s=a;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<o.length;a++)r=o[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=oe(t);[t,r]=[n.space,n.coords]}return t=G.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push(o?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(G.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||Os(t,this))return t;if(Vo(t)==="string"){let o=G.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return G.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=G.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[o,i]of Object.entries(n.formats)){i.name??=o,i.type??="function";let s=(!t.name||i.name===t.name)&&(!t.type||i.type===t.type);if(t.id){let a=i.ids||[i.id],u=Array.isArray(t.id)?t.id:[t.id];s&&=u.some(c=>a.includes(c))}if(s){let a=Yl.get(i,n);return a!==i&&(n.formats[i.name]=a),a}}return null}static resolveCoord(t,r){let n=Vo(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=G.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Vo(i),n==="number"||n==="string"&&i>=0){let u=Object.entries(o.coords)[i];if(u)return{space:o,id:u[0],index:i,...u[1]}}o=G.get(o);let s=i.toLowerCase(),a=0;for(let u in o.coords){let c=o.coords[u];if(u.toLowerCase()===s||c.name?.toLowerCase()===s)return{space:o,id:u,index:a,...c};a++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function I6(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Xt=new G({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class dr extends G{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Xt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=ft(r,t.toXYZ_M);return this.white!==this.base.white&&(n=Xl(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=Xl(this.base.white,this.white,r),ft(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function S2(e,t={}){if(Array.isArray(e))return e.map(u=>S2(u,t));let{cssProperty:r="background-color",element:n,...o}=t,i=null;try{return oe(e,o)}catch(u){i=u}let{CSS:s,getComputedStyle:a}=globalThis;if(Qs(e)&&n&&s&&a&&s.supports(r,e)){let u=n.style[r];e!==u&&(n.style[r]=e);let c=a(n).getPropertyValue(r);if(e!==u&&(n.style[r]=u),c!==e)try{return oe(c,o)}catch(d){i=d}else i={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=i),null}function Tu(e,t){e=oe(e);let r=G.get(t,t?.space),n=t?.precision,o;return!r||e.space.equals(r)?o=e.coords.slice():o=r.from(e),n===void 0?o:o.map(i=>Wh(i,n))}function jr(e,t){if(e=oe(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=G.resolveCoord(t,e.space);return Tu(e,r)[n]}function Gh(e,t,r,n){return e=oe(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=G.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}Gh.returns="color";function wo(e,t,r){if(e=oe(e),arguments.length===2&&Vo(arguments[1])==="object"){let n=arguments[1];for(let o in n)wo(e,o,n[o])}else if(typeof r=="function"&&(r=r(jr(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:o}=G.resolveCoord(t,e.space),i=Tu(e,n);i[o]=r,Gh(e,n,i)}return e}wo.returns="color";var Hh=new G({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Xt,fromBase:e=>Xl(Xt.white,"D50",e),toBase:e=>Xl("D50",Xt.white,e)});const O6=216/24389,jp=24/116,al=24389/27;let Xd=br.D50;var _r=new G({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Xd,base:Hh,fromBase(e){let r=e.map((s,a)=>s/Xd[a]).map(s=>s>O6?Math.cbrt(s):(al*s+16)/116),n=116*r[1]-16,o=500*(r[0]-r[1]),i=200*(r[1]-r[2]);return[n,o,i]},toBase(e){let[t,r,n]=e,o=[];return o[1]=(t+16)/116,o[0]=r/500+o[1],o[2]=o[1]-n/200,[o[0]>jp?Math.pow(o[0],3):(116*o[0]-16)/al,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/al,o[2]>jp?Math.pow(o[2],3):(116*o[2]-16)/al].map((s,a)=>s*Xd[a])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function ln(e){return typeof e!="number"?e:(e%360+360)%360}function T2(e,t){let[r,n]=t,o=Fe(r),i=Fe(n);if(o&&i)return[r,n];if(o?r=n:i&&(n=r),e==="raw")return t;r=ln(r),n=ln(n);let s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var Wr=new G({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:_r,fromBase(e){if(this.ε===void 0){let a=Object.values(this.base.coords)[1].refRange,u=a[1]-a[0];this.ε=u/1e5}let[t,r,n]=e,o=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,i=o?null:ln(Math.atan2(n,r)*180/Math.PI),s=o?0:Math.sqrt(r**2+n**2);return[t,s,i]},toBase(e){let[t,r,n]=e,o=null,i=null;return Fe(n)||(r=r<0?0:r,o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const _p=25**7,ec=Math.PI,Up=180/ec,us=ec/180;function zp(e){const t=e*e;return t*t*t*e}function N2(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){[e,t]=oe([e,t]);let[i,s,a]=_r.from(e),u=Wr.from(_r,[i,s,a])[1],[c,d,f]=_r.from(t),h=Wr.from(_r,[c,d,f])[1];u<0&&(u=0),h<0&&(h=0);let m=(u+h)/2,y=zp(m),$=.5*(1-Math.sqrt(y/(y+_p))),k=(1+$)*s,x=(1+$)*d,E=Math.sqrt(k**2+a**2),N=Math.sqrt(x**2+f**2),R=k===0&&a===0?0:Math.atan2(a,k),q=x===0&&f===0?0:Math.atan2(f,x);R<0&&(R+=2*ec),q<0&&(q+=2*ec),R*=Up,q*=Up;let ie=c-i,De=N-E,de=q-R,$e=R+q,Ge=Math.abs(de),He;E*N===0?He=0:Ge<=180?He=de:de>180?He=de-360:de<-180?He=de+360:qr.warn("the unthinkable has happened");let St=2*Math.sqrt(N*E)*Math.sin(He*us/2),Pr=(i+c)/2,hr=(E+N)/2,Xn=zp(hr),Rt;E*N===0?Rt=$e:Ge<=180?Rt=$e/2:$e<360?Rt=($e+360)/2:Rt=($e-360)/2;let Rn=(Pr-50)**2,Qn=1+.015*Rn/Math.sqrt(20+Rn),Qr=1+.045*hr,Ht=1;Ht-=.17*Math.cos((Rt-30)*us),Ht+=.24*Math.cos(2*Rt*us),Ht+=.32*Math.cos((3*Rt+6)*us),Ht-=.2*Math.cos((4*Rt-63)*us);let Le=1+.015*hr*Ht,Tt=30*Math.exp(-1*((Rt-275)/25)**2),en=2*Math.sqrt(Xn/(Xn+_p)),ir=-1*Math.sin(2*Tt*us)*en,tn=(ie/(r*Qn))**2;return tn+=(De/(n*Qr))**2,tn+=(St/(o*Le))**2,tn+=ir*(De/(n*Qr))*(St/(o*Le)),Math.sqrt(tn)}const B6=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],R6=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],L6=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],qo=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Cn=new G({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Xt,fromBase(e){let t=ft(e,B6);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),ft(t,L6,t)},toBase(e){let t=ft(e,qo);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,ft(t,R6,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function D0(e,t){[e,t]=oe([e,t]);let[r,n,o]=Cn.from(e),[i,s,a]=Cn.from(t),u=r-i,c=n-s,d=o-a;return Math.sqrt(u**2+c**2+d**2)}const j6=75e-6;function Ci(e,t,{epsilon:r=j6}={}){e=oe(e),t||(t=e.space),t=G.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Bs(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function P2(e,t,r="lab"){r=G.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,s,a)=>{let u=o[a];return Fe(s)||Fe(u)?i:i+(u-s)**2},0))}function _6(e,t){return P2(e,t,"lab")}const U6=Math.PI,Vp=U6/180;function z6(e,t,{l:r=2,c:n=1}={}){[e,t]=oe([e,t]);let[o,i,s]=_r.from(e),[,a,u]=Wr.from(_r,[o,i,s]),[c,d,f]=_r.from(t),h=Wr.from(_r,[c,d,f])[1];a<0&&(a=0),h<0&&(h=0);let m=o-c,y=a-h,$=i-d,k=s-f,x=$**2+k**2-y**2,E=.511;o>=16&&(E=.040975*o/(1+.01765*o));let N=.0638*a/(1+.0131*a)+.638,R;Fe(u)&&(u=0),u>=164&&u<=345?R=.56+Math.abs(.2*Math.cos((u+168)*Vp)):R=.36+Math.abs(.4*Math.cos((u+35)*Vp));let q=Math.pow(a,4),ie=Math.sqrt(q/(q+1900)),De=N*(ie*R+1-ie),de=(m/(r*E))**2;return de+=(y/(n*N))**2,de+=x/De**2,Math.sqrt(de)}const qp=203;var Zh=new G({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Xt,fromBase(e){return e.map(t=>t*qp)},toBase(e){return e.map(t=>t/qp)}});const ul=1.15,ll=.66,Wp=2610/2**14,V6=2**14/2610,Kp=3424/2**12,Gp=2413/2**7,Hp=2392/2**7,q6=1.7*2523/2**5,Zp=2**5/(1.7*2523),cl=-.56,Qd=16295499532821565e-27,W6=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],K6=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],G6=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],H6=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var I2=new G({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Zh,fromBase(e){let[t,r,n]=e,o=ul*t-(ul-1)*n,i=ll*r-(ll-1)*t,a=ft([o,i,n],W6).map(function(h){let m=Kp+Gp*kt(h/1e4,Wp),y=1+Hp*kt(h/1e4,Wp);return kt(m/y,q6)}),[u,c,d]=ft(a,G6);return[(1+cl)*u/(1+cl*u)-Qd,c,d]},toBase(e){let[t,r,n]=e,o=(t+Qd)/(1+cl-cl*(t+Qd)),s=ft([o,r,n],H6).map(function(h){let m=Kp-kt(h,Zp),y=Hp*kt(h,Zp)-Gp;return 1e4*kt(m/y,V6)}),[a,u,c]=ft(s,K6),d=(a+(ul-1)*c)/ul,f=(u+(ll-1)*d)/ll;return[d,f,c]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),A0=new G({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:I2,fromBase:Wr.fromBase,toBase:Wr.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function Z6(e,t){[e,t]=oe([e,t]);let[r,n,o]=A0.from(e),[i,s,a]=A0.from(t),u=r-i,c=n-s;Fe(o)&&Fe(a)?(o=0,a=0):Fe(o)?o=a:Fe(a)&&(a=o);let d=o-a,f=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(u**2+c**2+f**2)}const O2=3424/4096,B2=2413/128,R2=2392/128,Jp=2610/16384,J6=2523/32,Y6=16384/2610,Yp=32/2523,X6=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Q6=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],eD=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],tD=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var E0=new G({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Zh,fromBase(e){let t=ft(e,X6);return rD(t)},toBase(e){let t=nD(e);return ft(t,tD)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function rD(e){let t=e.map(function(r){let n=O2+B2*(r/1e4)**Jp,o=1+R2*(r/1e4)**Jp;return(n/o)**J6});return ft(t,Q6)}function nD(e){return ft(e,eD).map(function(n){let o=Math.max(n**Yp-O2,0),i=B2-R2*n**Yp;return 1e4*(o/i)**Y6})}function oD(e,t){[e,t]=oe([e,t]);let[r,n,o]=E0.from(e),[i,s,a]=E0.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-s)**2+(o-a)**2)}function iD(e,t){[e,t]=oe([e,t]);let r=2,[n,o,i]=Cn.from(e),[s,a,u]=Cn.from(t),c=n-s,d=r*(o-a),f=r*(i-u);return Math.sqrt(c**2+d**2+f**2)}const sD=br.D65,L2=.42,Xp=1/L2,ef=2*Math.PI,j2=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],aD=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],uD=[[460,451,288],[460,-891,-261],[460,-220,-6300]],lD={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},yi={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},cD=180/Math.PI,Qp=Math.PI/180;function _2(e,t){return e.map(n=>{const o=kt(t*Math.abs(n)*.01,L2);return 400*Oc(o,n)/(o+27.13)})}function dD(e,t){const r=100/t*27.13**Xp;return e.map(n=>{const o=Math.abs(n);return Oc(r*kt(o/(400-o),Xp),n)})}function fD(e){let t=ln(e);t<=yi.h[0]&&(t+=360);const r=C2(yi.h,t)-1,[n,o]=yi.h.slice(r,r+2),[i,s]=yi.e.slice(r,r+2),a=yi.H[r],u=(t-n)/i;return a+100*u/(u+(o-t)/s)}function hD(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,o]=yi.h.slice(r,r+2),[i,s]=yi.e.slice(r,r+2);return ln((t*(s*n-i*o)-100*n*s)/(t*(s-i)-100*s))}function U2(e,t,r,n,o){const i={};i.discounting=o,i.refWhite=e,i.surround=n;const s=e.map(k=>k*100);i.la=t,i.yb=r;const a=s[1],u=ft(s,j2);let c=lD[i.surround];const d=c[0];i.c=c[1],i.nc=c[2];const h=(1/(5*i.la+1))**4;i.fl=h*i.la+.1*(1-h)*(1-h)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/a,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const m=Math.max(Math.min(d*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=u.map(k=>du(1,a/k,m)),i.dRgbInv=i.dRgb.map(k=>1/k);const y=u.map((k,x)=>k*i.dRgb[x]),$=_2(y,i.fl);return i.aW=i.nbb*(2*$[0]+$[1]+.05*$[2]),i}const eb=U2(sD,64/Math.PI*.2,20,"average",!1);function C0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=ln(e.h)*Qp:r=hD(e.H)*Qp;const n=Math.cos(r),o=Math.sin(r);let i=0;e.J!==void 0?i=kt(e.J,1/2)*.1:e.Q!==void 0&&(i=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/i:e.M!==void 0?s=e.M/t.flRoot/i:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=kt(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),c=t.aW*kt(i,2/t.c/t.z),d=5e4/13*t.nc*t.ncb*u,f=c/t.nbb,h=23*(f+.305)*Kh(a,23*d+a*(11*n+108*o)),m=h*n,y=h*o,$=dD(ft([f,m,y],uD).map(k=>k*1/1403),t.fl);return ft($.map((k,x)=>k*t.dRgbInv[x]),aD).map(k=>k/100)}function z2(e,t){const r=e.map(N=>N*100),n=_2(ft(r,j2).map((N,R)=>N*t.dRgb[R]),t.fl),o=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(i,o)%ef+ef)%ef,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*Kh(a*Math.sqrt(o**2+i**2),n[0]+n[1]+1.05*n[2]+.305),c=kt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=t.nbb*(2*n[0]+n[1]+.05*n[2]),f=kt(d/t.aW,.5*t.c*t.z),h=100*kt(f,2),m=4/t.c*f*(t.aW+4)*t.flRoot,y=c*f,$=y*t.flRoot,k=ln(s*cD),x=fD(k),E=50*kt(t.c*c/(t.aW+4),1/2);return{J:h,C:y,h:k,s:E,Q:m,M:$,H:x}}var mD=new G({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Xt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=z2(e,eb),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return C0({J:e[0],M:e[1],h:e[2]},eb)}});const gD=br.D65,pD=216/24389,V2=24389/27;function bD(e){return 116*(e>pD?Math.cbrt(e):(V2*e+16)/116)-16}function F0(e){return e>8?Math.pow((e+16)/116,3):e/V2}function yD(e,t){let[r,n,o]=e,i=[],s=0;if(o===0)return[0,0,0];let a=F0(o);o>0?s=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:s=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const u=2e-12,c=15;let d=0,f=1/0;for(;d<=c;){i=C0({J:s,C:n,h:r},t);const h=Math.abs(i[1]-a);if(h<f){if(h<=u)return i;f=h}s=s-(i[1]-a)*s/(2*i[1]),d+=1}return C0({J:s,C:n,h:r},t)}function vD(e,t){const r=bD(e[1]);if(r===0)return[0,0,0];const n=z2(e,Jh);return[ln(n.h),n.C,r]}const Jh=U2(gD,200/Math.PI*F0(50),F0(50)*100,"average",!1);var fu=new G({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Xt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=vD(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return yD(e,Jh)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const wD=Math.PI/180,tb=[1,.007,.0228];function rb(e){e[1]<0&&(e=fu.fromBase(fu.toBase(e)));const t=Math.log(Math.max(1+tb[2]*e[1]*Jh.flRoot,1))/tb[2],r=e[0]*wD,n=t*Math.cos(r),o=t*Math.sin(r);return[e[2],n,o]}function $D(e,t){[e,t]=oe([e,t]);let[r,n,o]=rb(fu.from(e)),[i,s,a]=rb(fu.from(t));return Math.sqrt((r-i)**2+(n-s)**2+(o-a)**2)}var Rs={deltaE76:_6,deltaECMC:z6,deltaE2000:N2,deltaEJz:Z6,deltaEITP:oD,deltaEOK:D0,deltaEOK2:iD,deltaEHCT:$D};function kD(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const nb={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Zo(e,{method:t=qr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:i=void 0}={}){if(e=oe(e),Qs(arguments[1])?r=arguments[1]:r||(r=e.space),r=G.get(r),Ci(e,r,{epsilon:0}))return e;let s;if(t==="css")s=xD(e,{space:r});else{if(t!=="clip"&&!Ci(e,r)){Object.prototype.hasOwnProperty.call(nb,t)&&({method:t,jnd:o,deltaEMethod:n,blackWhiteClamp:i}=nb[t]);let a=N2;if(n!==""){for(let c in Rs)if("deltae"+n.toLowerCase()===c.toLowerCase()){a=Rs[c];break}}o===0&&(o=1e-16);let u=Zo(Ve(e,r),{method:"clip",space:r});if(a(e,u)>o){if(i&&Object.keys(i).length===3){let E=G.resolveCoord(i.channel),N=jr(Ve(e,E.space),E.id);if(Fe(N)&&(N=0),N>=i.max)return Ve({space:"xyz-d65",coords:br.D65},e.space);if(N<=i.min)return Ve({space:"xyz-d65",coords:[0,0,0]},e.space)}let c=G.resolveCoord(t),d=c.space,f=c.id,h=Ve(e,d);h.coords.forEach((E,N)=>{Fe(E)&&(h.coords[N]=0)});let y=(c.range||c.refRange)[0],$=kD(o),k=y,x=jr(h,f);for(;x-k>$;){let E=Bs(h);E=Zo(E,{space:r,method:"clip"}),a(h,E)-o<$?k=jr(h,f):x=jr(h,f),wo(h,f,(k+x)/2)}s=Ve(h,r)}else s=u}else s=Ve(e,r);if(t==="clip"||!Ci(s,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,c)=>{let[d,f]=a[c];return d!==void 0&&(u=Math.max(d,u)),f!==void 0&&(u=Math.min(u,f)),u})}}return r!==e.space&&(s=Ve(s,e.space)),e.coords=s.coords,e}Zo.returns="color";const ob={WHITE:{space:Cn,coords:[1,0,0],alpha:1},BLACK:{space:Cn,coords:[0,0,0],alpha:1}};function xD(e,{space:t}={}){e=oe(e),t||(t=e.space),t=G.get(t);const o=G.get("oklch");if(t.isUnbounded)return Ve(e,t);const i=Ve(e,o);let s=i.coords[0];if(s>=1){const y=Ve(ob.WHITE,t);return y.alpha=e.alpha,Ve(y,t)}if(s<=0){const y=Ve(ob.BLACK,t);return y.alpha=e.alpha,Ve(y,t)}if(Ci(i,t,{epsilon:0}))return Ve(i,t);function a(y){const $=Ve(y,t),k=Object.values(t.coords);return $.coords=$.coords.map((x,E)=>{if("range"in k[E]){const[N,R]=k[E].range;return Ic(N,x,R)}return x}),$}let u=0,c=i.coords[1],d=!0,f=Bs(i),h=a(f),m=D0(h,f);if(m<.02)return h;for(;c-u>1e-4;){const y=(u+c)/2;if(f.coords[1]=y,d&&Ci(f,t,{epsilon:0}))u=y;else if(h=a(f),m=D0(h,f),m<.02){if(.02-m<1e-4)break;d=!1,u=y}else c=y}return h}function Ve(e,t,{inGamut:r}={}){e=oe(e),t=G.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Zo(o,r===!0?void 0:r)),o}Ve.returns="color";function qa(e,t={}){let{precision:r=qr.precision,format:n,inGamut:o=!0,coords:i,alpha:s,commas:a}=t,u,c=oe(e),d=n,f=c.parseMeta;f&&!n&&(f.format.canSerialize()&&(n=f.format,d=f.formatId),i??=f.types,s??=f.alphaType,a??=f.commas),d&&(n=c.space.getFormat(n)??G.findFormat(d)),n||(n=c.space.getFormat("default")??G.DEFAULT_FORMAT,d=n.name),n&&n.space&&n.space!==c.space&&(c=Ve(c,n.space));let h=c.coords.slice();if(o||=n.toGamut,o&&!Ci(c)&&(h=Zo(Bs(c),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)u=n.serialize(h,c.alpha,t);else throw new TypeError(`format ${d} can only be used to parse colors, not for serialization`);else{let m=n.name||"color",y=n.serializeCoords(h,r,i);if(m==="color"){let N=n.id||n.ids?.[0]||c.space.cssId||c.space.id;y.unshift(N)}let $=c.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let k=s?.type??"<number>",x=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&$<1,E="";if(a??=n.commas,x){if(r!==null){let N;k==="<percentage>"&&(N="%",$*=100),$=qh($,{precision:r,unit:N})}E=`${a?",":" /"} ${$}`}u=`${m}(${y.join(a?", ":" ")}${E})`}return u}const DD=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],AD=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var hu=new dr({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:DD,fromXYZ_M:AD}),q2=new dr({id:"rec2020",name:"REC.2020",base:hu,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const ED=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],CD=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var W2=new dr({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:ED,fromXYZ_M:CD});const FD=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Ot=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var K2=new dr({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:FD,fromXYZ_M:Ot}),ib={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let sb=Array(3).fill("<percentage> | <number>[0, 255]"),ab=Array(3).fill("<number>[0, 255]");var Pi=new dr({id:"srgb",name:"sRGB",base:K2,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:sb},rgb_number:{name:"rgb",commas:!0,coords:ab,alpha:!1},color:{},rgba:{coords:sb,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:ab},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let o=r&&e.every(s=>s%17===0);return"#"+e.map(s=>o?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=ib.black,t.alpha=0):t.coords=ib[e],t.coords)return t}}}}),G2=new dr({id:"p3",cssId:"display-p3",name:"P3",base:W2,fromBase:Pi.fromBase,toBase:Pi.toBase});qr.display_space=Pi;let MD;if(typeof CSS<"u"&&CSS.supports)for(let e of[_r,q2,G2]){let t=e.getMinCoords(),n=qa({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){qr.display_space=e;break}}function SD(e,{space:t=qr.display_space,...r}={}){e=oe(e);let n=qa(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!qr.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(Fe)||Fe(e.alpha))&&!(MD??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=Bs(e),o.coords=o.coords.map($t),o.alpha=$t(o.alpha),n=qa(o,r),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=Ve(o,t),n=new String(qa(o,r)),n.color=o}return n}function TD(e,t,{space:r,hue:n="shorter"}={}){e=oe(e),r||=e.space,r=G.get(r);let o=Object.values(r.coords);[e,t]=[e,t].map(c=>Ve(c,r));let[i,s]=[e,t].map(c=>c.coords),a=i.map((c,d)=>{let f=o[d],h=s[d];return f.type==="angle"&&([c,h]=T2(n,[c,h])),ub(c,h)}),u=ub(e.alpha,t.alpha);return{space:r,coords:a,alpha:u}}function ub(e,t){return Fe(e)||Fe(t)?e===t?null:0:e-t}function ND(e,t){return e=oe(e),t=oe(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Jo(e){return jr(e,[Xt,"y"])}function H2(e,t){wo(e,[Xt,"y"],t)}function PD(e){Object.defineProperty(e.prototype,"luminance",{get(){return Jo(this)},set(t){H2(this,t)}})}var ID=Object.freeze({__proto__:null,getLuminance:Jo,register:PD,setLuminance:H2});function OD(e,t){e=oe(e),t=oe(t);let r=Math.max(Jo(e),0),n=Math.max(Jo(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const BD=.56,RD=.57,LD=.62,jD=.65,lb=.022,_D=1.414,UD=.1,zD=5e-4,VD=1.14,cb=.027,qD=1.14;function db(e){return e>=lb?e:e+(lb-e)**_D}function ls(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function WD(e,t){t=oe(t),e=oe(e);let r,n,o,i,s,a;t=Ve(t,"srgb"),[i,s,a]=t.coords.map(m=>Fe(m)?0:m);let u=ls(i)*.2126729+ls(s)*.7151522+ls(a)*.072175;e=Ve(e,"srgb"),[i,s,a]=e.coords.map(m=>Fe(m)?0:m);let c=ls(i)*.2126729+ls(s)*.7151522+ls(a)*.072175,d=db(u),f=db(c),h=f>d;return Math.abs(f-d)<zD?n=0:h?(r=f**BD-d**RD,n=r*VD):(r=f**jD-d**LD,n=r*qD),Math.abs(n)<UD?o=0:n>0?o=n-cb:o=n+cb,o*100}function KD(e,t){e=oe(e),t=oe(t);let r=Math.max(Jo(e),0),n=Math.max(Jo(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const GD=5e4;function HD(e,t){e=oe(e),t=oe(t);let r=Math.max(Jo(e),0),n=Math.max(Jo(t),0);return n>r&&([r,n]=[n,r]),n===0?GD:(r-n)/n}function ZD(e,t){e=oe(e),t=oe(t);let r=jr(e,[_r,"l"]),n=jr(t,[_r,"l"]);return Math.abs(r-n)}const JD=216/24389,fb=24/116,dl=24389/27;let tf=br.D65;var M0=new G({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:tf,base:Xt,fromBase(e){let r=e.map((n,o)=>n/tf[o]).map(n=>n>JD?Math.cbrt(n):(dl*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>fb?Math.pow(t[0],3):(116*t[0]-16)/dl,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/dl,t[2]>fb?Math.pow(t[2],3):(116*t[2]-16)/dl].map((n,o)=>n*tf[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const rf=Math.pow(5,.5)*.5+.5;function YD(e,t){e=oe(e),t=oe(t);let r=jr(e,[M0,"l"]),n=jr(t,[M0,"l"]),o=Math.abs(Math.pow(r,rf)-Math.pow(n,rf)),i=Math.pow(o,1/rf)*Math.SQRT2-40;return i<7.5?0:i}var Nl=Object.freeze({__proto__:null,contrastAPCA:WD,contrastDeltaPhi:YD,contrastLstar:ZD,contrastMichelson:KD,contrastWCAG21:OD,contrastWeber:HD});function XD(e,t,r){Qs(r)&&(r={algorithm:r});let{algorithm:n,...o}=r||{};if(!n){let i=Object.keys(Nl).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=oe(e),t=oe(t);for(let i in Nl)if("contrast"+n.toLowerCase()===i.toLowerCase())return Nl[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Bc(e){let[t,r,n]=Tu(e,Xt),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Z2(e){let[t,r,n]=Tu(e,Xt),o=t+r+n;return[t/o,r/o]}function QD(e){Object.defineProperty(e.prototype,"uv",{get(){return Bc(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Z2(this)}})}var e8=Object.freeze({__proto__:null,register:QD,uv:Bc,xy:Z2});function Ia(e,t,r={}){Qs(r)&&(r={method:r});let{method:n=qr.deltaE,...o}=r;for(let i in Rs)if("deltae"+n.toLowerCase()===i.toLowerCase())return Rs[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function J2(e,t=.25){let n=[G.get("oklch","lch"),"l"];return wo(e,n,o=>o*(1+t))}function Y2(e,t=.25){let n=[G.get("oklch","lch"),"l"];return wo(e,n,o=>o*(1-t))}J2.returns="color";Y2.returns="color";var t8=Object.freeze({__proto__:null,darken:Y2,lighten:J2});function X2(e,t,r,n={}){return[e,t]=[oe(e),oe(t)],Vo(r)==="object"&&([r,n]=[.5,r]),Nu(e,t,n)(r??.5)}function Q2(e,t,r={}){let n;Yh(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:s=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[oe(e),oe(t)],n=Nu(e,t,u));let c=Ia(e,t),d=o>0?Math.max(s,Math.ceil(c/o)+1):s,f=[];if(a!==void 0&&(d=Math.min(d,a)),d===1)f=[{p:.5,color:n(.5)}];else{let h=1/(d-1);f=Array.from({length:d},(m,y)=>{let $=y*h;return{p:$,color:n($)}})}if(o>0){let h=f.reduce((m,y,$)=>{if($===0)return 0;let k=Ia(y.color,f[$-1].color,i);return Math.max(m,k)},0);for(;h>o;){h=0;for(let m=1;m<f.length&&f.length<a;m++){let y=f[m-1],$=f[m],k=($.p+y.p)/2,x=n(k);h=Math.max(h,Ia(x,y.color),Ia(x,$.color)),f.splice(m,0,{p:k,color:n(k)}),m++}}}return f=f.map(h=>h.color),f}function Nu(e,t,r={}){if(Yh(e)){let[u,c]=[e,t];return Nu(...u.rangeArgs.colors,{...u.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:s}=r;e=oe(e),t=oe(t),e=Bs(e),t=Bs(t);let a={colors:[e,t],options:r};if(n?n=G.get(n):n=G.registry[qr.interpolationSpace]||e.space,o=o?G.get(o):n,e=Ve(e,n),t=Ve(t,n),e=Zo(e),t=Zo(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",c=[n,"h"],[d,f]=[jr(e,c),jr(t,c)];Fe(d)&&!Fe(f)?d=f:Fe(f)&&!Fe(d)&&(f=d),[d,f]=T2(u,[d,f]),wo(e,c,d),wo(t,c,f)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=i?i(u):u;let c=e.coords.map((h,m)=>{let y=t.coords[m];return du(h,y,u)}),d=du(e.alpha,t.alpha,u),f={space:n,coords:c,alpha:d};return s&&(f.coords=f.coords.map(h=>h/d)),o!==n&&(f=Ve(f,o)),f},{rangeArgs:a})}function Yh(e){return Vo(e)==="function"&&!!e.rangeArgs}qr.interpolationSpace="lab";function r8(e){e.defineFunction("mix",X2,{returns:"color"}),e.defineFunction("range",Nu,{returns:"function<color>"}),e.defineFunction("steps",Q2,{returns:"array<color>"})}var n8=Object.freeze({__proto__:null,isRange:Yh,mix:X2,range:Nu,register:r8,steps:Q2}),o8=new G({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Pi,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,u]=[null,0,(r+t)/2],c=t-r;if(c!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:s=(o-i)/c+(o<i?6:0);break;case o:s=(i-n)/c+2;break;case i:s=(n-o)/c+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),ew=new G({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Pi,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,u]=[null,0,t],c=t-r;if(c!==0){switch(t){case n:s=(o-i)/c+(o<i?6:0);break;case o:s=(i-n)/c+2;break;case i:s=(n-o)/c+4}s=s*60}return u&&(a=c/u),s>=360&&(s-=360),[s,a*100,u*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/60)%6;return n-n*r*Math.max(0,Math.min(s,4-s,1))}return[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),i8=new G({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ew,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let a=r/o;return[t,0,a*100]}let i=1-n,s=i===0?0:1-r/i;return[t,s*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const s8=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],a8=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var tw=new dr({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:s8,fromXYZ_M:a8}),u8=new dr({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:tw,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const l8=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],c8=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var rw=new dr({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Hh,toXYZ_M:l8,fromXYZ_M:c8});const d8=1/512,f8=16/512;var h8=new dr({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:rw,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<f8?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=d8?r*n**(1/1.8):16*t})}});const fl=1.09929682680944,hb=.018053968510807;var m8=new dr({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:hu,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<hb*4.5?t/4.5:r*Math.pow((n+fl-1)/fl,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=hb?r*(fl*Math.pow(n,.45)-(fl-1)):4.5*t})}}),g8=new G({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Cn,fromBase:Wr.fromBase,toBase:Wr.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Ls=2*Math.PI,tc=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],rc=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],nf=Number.MAX_VALUE,Wa=.206,Xh=.03,Oa=(1+Wa)/(1+Xh);function Zt(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((o,i)=>{n+=o*t[i]}),n}function Ka(e){return .5*(Oa*e-Wa+Math.sqrt((Oa*e-Wa)*(Oa*e-Wa)+4*Xh*Oa*e))}function As(e){return(e**2+Wa*e)/(Oa*(e+Xh))}function Qh(e){let[t,r]=e;return[r/t,r/(1-t)]}function p8(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}function em(e,t){let r=ft(e,qo);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,ft(r,t,r)}function Rc(e,t,r,n){let o=y8(e,t,r,n),i=em([1,o*e,o*t],r),s=kt(1/Math.max(...i),1/3),a=s*o;return[s,a]}function b8(e,t,r,n,o,i,s,a){let u;if(a===void 0&&(a=Rc(e,t,i,s)),(r-o)*a[1]-(a[0]-o)*n<=0)u=a[1]*o/(n*a[0]+a[1]*(o-r));else{u=a[1]*(o-1)/(n*(a[0]-1)+a[1]*(o-r));let c=r-o,d=n,f=Zt(qo[0].slice(1),[e,t]),h=Zt(qo[1].slice(1),[e,t]),m=Zt(qo[2].slice(1),[e,t]),y=c+d*f,$=c+d*h,k=c+d*m,x=o*(1-u)+u*r,E=u*n,N=x+E*f,R=x+E*h,q=x+E*m,ie=N**3,De=R**3,de=q**3,$e=3*y*N**2,Ge=3*$*R**2,He=3*k*q**2,St=6*y**2*N,Pr=6*$**2*R,hr=6*k**2*q,Xn=Zt(i[0],[ie,De,de])-1,Rt=Zt(i[0],[$e,Ge,He]),Rn=Zt(i[0],[St,Pr,hr]),Qn=Rt/(Rt*Rt-.5*Xn*Rn),Qr=-Xn*Qn,Ht=Zt(i[1],[ie,De,de])-1,Le=Zt(i[1],[$e,Ge,He]),Tt=Zt(i[1],[St,Pr,hr]),en=Le/(Le*Le-.5*Ht*Tt),ir=-Ht*en,tn=Zt(i[2],[ie,De,de])-1,mn=Zt(i[2],[$e,Ge,He]),Co=Zt(i[2],[St,Pr,hr]),Yu=mn/(mn*mn-.5*tn*Co),os=-tn*Yu;Qr=Qn>=0?Qr:nf,ir=en>=0?ir:nf,os=Yu>=0?os:nf,u+=Math.min(Qr,Math.min(ir,os))}return u}function nw(e,t,r){let[n,o,i]=e,s=Rc(o,i,t,r),a=b8(o,i,n,1,n,t,r,s),u=Qh(s),c=a/Math.min(n*u[0],(1-n)*u[1]),d=p8(o,i),f=n*d[0],h=(1-n)*d[1],m=.9*c*Math.sqrt(Math.sqrt(1/(1/f**4+1/h**4)));return f=n*.4,h=(1-n)*.8,[Math.sqrt(1/(1/f**2+1/h**2)),m,a]}function y8(e,t,r,n){let o,i,s,a,u,c,d,f;Zt(n[0][0],[e,t])>1?([o,i,s,a,u]=n[0][1],[c,d,f]=r[0]):Zt(n[1][0],[e,t])>1?([o,i,s,a,u]=n[1][1],[c,d,f]=r[1]):([o,i,s,a,u]=n[2][1],[c,d,f]=r[2]);let h=o+i*e+s*t+a*e**2+u*e*t,m=Zt(qo[0].slice(1),[e,t]),y=Zt(qo[1].slice(1),[e,t]),$=Zt(qo[2].slice(1),[e,t]),k=1+h*m,x=1+h*y,E=1+h*$,N=k**3,R=x**3,q=E**3,ie=3*m*k**2,De=3*y*x**2,de=3*$*E**2,$e=6*m**2*k,Ge=6*y**2*x,He=6*$**2*E,St=c*N+d*R+f*q,Pr=c*ie+d*De+f*de,hr=c*$e+d*Ge+f*He;return h=h-St*Pr/(Pr**2-.5*St*hr),h}function v8(e,t,r){let[n,o,i]=e,s=As(i),a=null,u=null;if(n=ln(n)/360,s!==0&&s!==1&&o!==0){let c=Math.cos(Ls*n),d=Math.sin(Ls*n),[f,h,m]=nw([s,c,d],t,r),y=.8,$=1.25,k,x,E,N;o<y?(k=$*o,x=0,E=y*f,N=1-E/h):(k=5*(o-.8),x=h,E=.2*h**2*1.25**2/f,N=1-E/(m-h));let R=x+k*E/(1-N*k);a=R*c,u=R*d}return[s,a,u]}function w8(e,t,r){let n=1e-7,o=1e-4,i=e[0],s=0,a=Ka(i),u=Math.sqrt(e[1]**2+e[2]**2),c=.5+Math.atan2(-e[2],-e[1])/Ls;if(a!==0&&a!==1&&u!==0){let f=e[1]/u,h=e[2]/u,[m,y,$]=nw([i,f,h],t,r),k=.8,x=1.25,E,N,R,q;u<y?(N=k*m,R=1-N/y,q=u/(N+R*u),s=q*k):(E=y,N=.2*y**2*x**2/m,R=1-N/($-y),q=(u-E)/(N+R*(u-E)),s=k+.2*q)}const d=Math.abs(s)<o;return d||a===0||Math.abs(1-a)<n?(c=null,d||(s=0)):c=ln(c*360),[c,s,a]}var $8=new G({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Cn,gamutSpace:"self",fromBase(e){return w8(e,tc,rc)},toBase(e){return v8(e,tc,rc)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),ow=new G({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Cn,fromBase(e){return[Ka(e[0]),e[1],e[2]]},toBase(e){return[As(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),k8=new G({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:ow,fromBase:Wr.fromBase,toBase:Wr.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function x8(e,t,r){let[n,o,i]=e;n=ln(n)/360;let s=As(i),a=null,u=null;if(s!==0&&o!==0){let c=Math.cos(Ls*n),d=Math.sin(Ls*n),f=Rc(c,d,t,r),[h,m]=Qh(f),y=.5,$=1-y/h,k=1-o*y/(y+m-m*$*o),x=o*m*y/(y+m-m*$*o);s=i*k;let E=i*x,N=As(k),R=x*N/k,q=As(s);E=E*q/s,s=q;let[ie,De,de]=em([N,c*R,d*R],t),$e=kt(1/Math.max(Math.max(ie,De),Math.max(de,0)),1/3);s=s*$e,E=E*$e,a=E*c,u=E*d}return[s,a,u]}function D8(e,t,r){let n=1e-4,o=e[0],i=0,s=Ka(o),a=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/Ls;if(o!==0&&o!==1&&a!==0){let c=e[1]/a,d=e[2]/a,f=Rc(c,d,t,r),[h,m]=Qh(f),y=.5,$=1-y/h,k=m/(a+o*m),x=k*o,E=k*a,N=As(x),R=E*N/x,[q,ie,De]=em([N,c*R,d*R],t),de=kt(1/Math.max(Math.max(q,ie),Math.max(De,0)),1/3);o=o/de,a=a/de,a=a*Ka(o)/o,o=Ka(o),s=o/x,i=(y+m)*E/(m*y+m*$*E)}return Math.abs(i)<n||s===0?u=null:u=ln(u*360),[u,i,s]}var A8=new G({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Cn,gamutSpace:"self",fromBase(e){return D8(e,tc,rc)},toBase(e){return x8(e,tc,rc)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let iw=br.D65;const E8=216/24389,mb=24389/27,[gb,pb]=Bc({space:Xt,coords:iw});var sw=new G({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:iw,base:Xt,fromBase(e){let t=[$t(e[0]),$t(e[1]),$t(e[2])],r=t[1],[n,o]=Bc({space:Xt,coords:t});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let i=r<=E8?mb*r:116*Math.cbrt(r)-16;return[i,13*i*(n-gb),13*i*(o-pb)]},toBase(e){let[t,r,n]=e;if(t===0||Fe(t))return[0,0,0];r=$t(r),n=$t(n);let o=r/(13*t)+gb,i=n/(13*t)+pb,s=t<=8?t/mb:Math.pow((t+16)/116,3);return[s*(9*o/(4*i)),s,s*((12-3*o-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),tm=new G({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:sw,fromBase:Wr.fromBase,toBase:Wr.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const C8=216/24389,F8=24389/27,bb=Ot[0][0],yb=Ot[0][1],of=Ot[0][2],vb=Ot[1][0],wb=Ot[1][1],sf=Ot[1][2],$b=Ot[2][0],kb=Ot[2][1],af=Ot[2][2];function cs(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function nc(e){const t=Math.pow(e+16,3)/1560896,r=t>C8?t:e/F8,n=r*(284517*bb-94839*of),o=r*(838422*of+769860*yb+731718*bb),i=r*(632260*of-126452*yb),s=r*(284517*vb-94839*sf),a=r*(838422*sf+769860*wb+731718*vb),u=r*(632260*sf-126452*wb),c=r*(284517*$b-94839*af),d=r*(838422*af+769860*kb+731718*$b),f=r*(632260*af-126452*kb);return{r0s:n/i,r0i:o*e/i,r1s:n/(i+126452),r1i:(o-769860)*e/(i+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:c/f,b0i:d*e/f,b1s:c/(f+126452),b1i:(d-769860)*e/(f+126452)}}function xb(e,t){const r=t/360*Math.PI*2,n=cs(e.r0s,e.r0i,r),o=cs(e.r1s,e.r1i,r),i=cs(e.g0s,e.g0i,r),s=cs(e.g1s,e.g1i,r),a=cs(e.b0s,e.b0i,r),u=cs(e.b1s,e.b1i,r);return Math.min(n,o,i,s,a,u)}var M8=new G({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:tm,gamutSpace:Pi,fromBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=nc(t),s=xb(i,n);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=nc(n);o=xb(i,t)/100*r}return[n,o,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Ot[0][0];Ot[0][1];Ot[0][2];Ot[1][0];Ot[1][1];Ot[1][2];Ot[2][0];Ot[2][1];Ot[2][2];function ds(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Db(e){let t=ds(e.r0s,e.r0i),r=ds(e.r1s,e.r1i),n=ds(e.g0s,e.g0i),o=ds(e.g1s,e.g1i),i=ds(e.b0s,e.b0i),s=ds(e.b1s,e.b1i);return Math.min(t,r,n,o,i,s)}var S8=new G({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:tm,gamutSpace:"self",fromBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=nc(t),s=Db(i);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[$t(e[0]),$t(e[1]),$t(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=nc(n);o=Db(i)/100*r}return[n,o,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),rm=new dr({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:hu.toBase,fromBase:hu.fromBase});const Ab=203,Eb=2610/2**14,T8=2**14/2610,N8=2523/2**5,Cb=2**5/2523,Fb=3424/2**12,Mb=2413/2**7,Sb=2392/2**7;var P8=new dr({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:rm,toBase(e){return e.map(function(t){return(Math.max(t**Cb-Fb,0)/(Mb-Sb*t**Cb))**T8*1e4/Ab})},fromBase(e){return e.map(function(t){let r=Math.max(t*Ab/1e4,0),n=Fb+Mb*r**Eb,o=1+Sb*r**Eb;return(n/o)**N8})}});const Tb=.17883277,Nb=.28466892,Pb=.55991073,uf=3.7743;var I8=new dr({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:rm,toBase(e){return e.map(function(t){return t<=.5?t**2/3*uf:(Math.exp((t-Pb)/Tb)+Nb)/12*uf})},fromBase(e){return e.map(function(t){return t/=uf,t<=1/12?kt(3*t,.5):Tb*Math.log(12*t-Nb)+Pb})}});const aw={};Ho.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=uw(e.W1,e.W2,e.options.method))});Ho.add("chromatic-adaptation-end",e=>{e.M||(e.M=uw(e.W1,e.W2,e.options.method))});function Lc({id:e,toCone_M:t,fromCone_M:r}){aw[e]=arguments[0]}function uw(e,t,r="Bradford"){let n=aw[r],[o,i,s]=Pa(n.toCone_M,e),[a,u,c]=Pa(n.toCone_M,t),d=[[a/o,0,0],[0,u/i,0],[0,0,c/s]],f=Pa(d,n.toCone_M);return Pa(n.fromCone_M,f)}Lc({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Lc({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Lc({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Lc({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(br,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});br.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const O8=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],B8=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var lw=new dr({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:br.ACES,toXYZ_M:O8,fromXYZ_M:B8});const hl=2**-16,lf=-.35828683,ml=(Math.log2(65504)+9.72)/17.52;var R8=new dr({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[lf,ml],name:"Red"},g:{range:[lf,ml],name:"Green"},b:{range:[lf,ml],name:"Blue"}},referred:"scene",base:lw,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-hl)*2:r<ml?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(hl)+9.72)/17.52:t<hl?(Math.log2(hl+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Ib=Object.freeze({__proto__:null,A98RGB:u8,A98RGB_Linear:tw,ACEScc:R8,ACEScg:lw,CAM16_JMh:mD,HCT:fu,HPLuv:S8,HSL:o8,HSLuv:M8,HSV:ew,HWB:i8,ICTCP:E0,JzCzHz:A0,Jzazbz:I2,LCH:Wr,LCHuv:tm,Lab:_r,Lab_D65:M0,Luv:sw,OKLCH:g8,OKLab:Cn,OKLrCH:k8,OKLrab:ow,Okhsl:$8,Okhsv:A8,P3:G2,P3_Linear:W2,ProPhoto:h8,ProPhoto_Linear:rw,REC_2020:q2,REC_2020_Linear:hu,REC_2020_Scene_Referred:m8,REC_2100_HLG:I8,REC_2100_Linear:rm,REC_2100_PQ:P8,XYZ_ABS_D65:Zh,XYZ_D50:Hh,XYZ_D65:Xt,sRGB:Pi,sRGB_Linear:K2});let We=class xr{constructor(...t){let r;if(t.length===1){let s={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=oe(t[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:G.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=Fe(i)?i:i===void 0?1:Ic(0,i,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new xr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=SD(this,...t);return r.color=new xr(r.color),r}static get(t,...r){return Os(t,this)?t:new xr(t,...r)}static try(t,r){if(Os(t,this))return t;let n=S2(t,r);return n?new xr(n):null}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,s=function(...a){let u=r(...a);if(i==="color")u=xr.get(u);else if(i==="function<color>"){let c=u;u=function(...d){let f=c(...d);return xr.get(f)},Object.assign(u,c)}else i==="array<color>"&&(u=u.map(c=>xr.get(c)));return u};t in xr||(xr[t]=s),o&&(xr.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)xr.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(xr);else for(let r in t)xr.defineFunction(r,t[r])}};We.defineFunctions({get:jr,getAll:Tu,set:wo,setAll:Gh,to:Ve,equals:ND,inGamut:Ci,toGamut:Zo,distance:P2,deltas:TD,toString:qa});Object.assign(We,{util:M6,hooks:Ho,WHITES:br,Space:G,spaces:G.registry,parse:F2,defaults:qr});for(let e of Object.keys(Ib))G.register(Ib[e]);for(let e in G.registry)S0(e,G.registry[e]);Ho.add("colorspace-init-end",e=>{S0(e.id,e),e.aliases?.forEach(t=>{S0(t,e)})});function S0(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(We.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:((i,s)=>{try{return G.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)}),get:(i,s,a)=>{if(s&&typeof s!="symbol"&&!(s in i)&&s in o){let{index:u}=G.resolveCoord([t,s]);if(u>=0)return i[u]}return Reflect.get(i,s,a)},set:(i,s,a,u)=>{if(s&&typeof s!="symbol"&&!(s in i)||Number(s)>=0){let{index:c}=G.resolveCoord([t,s]);if(c>=0)return i[c]=a,this.setAll(e,i),!0}return Reflect.set(i,s,a,u)}});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}We.extend(Rs);We.extend({deltaE:Ia});Object.assign(We,{deltaEMethods:Rs});We.extend(t8);We.extend({contrast:XD});We.extend(e8);We.extend(ID);We.extend(n8);We.extend(Nl);const cw=Symbol("no update");function Ob(e){return e!==cw}class cf extends Pn()("observable-value-update"){}class L8 extends Pn()("observable-value-resolve"){}class j8 extends Pn()("observable-value-error"){}class _8 extends Sh("observable-destroy"){}class U8 extends Sh("observable-callback-call"){}class z8 extends Pn()("observable-params-update"){}class dw{listenTarget=new Th;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===cw)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const o=this.value;return this.value=r,this.listenTarget.dispatch(new cf({detail:[r,o]})),!0}return!1}listen(t,r){const n=o=>r(...o.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(cf,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(cf,r)}destroy(){this.listenTarget.dispatch(new _8),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function nm(e,t){return s3(e,t,(r,n)=>F.isFunction(r)&&F.isFunction(n)?!0:F.strictEquals(r,n))}var Ga;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Ga||(Ga={}));class V8 extends dw{equalityCheck;waitingForValueDeferredPromise=new _l;lastSetPromise;lastSetId=Ei();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||nm,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=Ei();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new _l,super.setValue(this.waitingForValueDeferredPromise.promise,F.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=ht(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(t){return Ob(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,F.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Ei(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new L8({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,F.strictEquals),this.dispatch(new j8({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):Ob(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(ht(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?Ga.Rejected:this.value instanceof Promise?Ga.Waiting:Ga.Resolved}}class ps extends V8{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==ps.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||nm,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:ps.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===ps.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(ht(t))}finally{this.dispatch(new U8)}}updateLastParams(t){try{return this.internalParams===ps.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new z8({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(ht(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return F.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function q8(e){return Ct(e)&&!Nr(e)&&!Iu(e)&&Symbol.asyncIterator in e}function Nr(e){return Array.isArray(e)}function fw(e){return typeof e=="bigint"}function Pu(e){return typeof e=="boolean"}function om(e){return e instanceof globalThis.Date}function W8(e){return typeof e=="function"}function K8(e){return Ct(e)&&!Nr(e)&&!Iu(e)&&Symbol.iterator in e}function G8(e){return e===null}function Hn(e){return typeof e=="number"}function Ct(e){return typeof e=="object"&&e!==null}function hw(e){return e instanceof globalThis.RegExp}function yt(e){return typeof e=="string"}function H8(e){return typeof e=="symbol"}function Iu(e){return e instanceof globalThis.Uint8Array}function xt(e){return e===void 0}function Z8(e){return e.map(t=>oc(t))}function J8(e){return new Date(e.getTime())}function Y8(e){return new Uint8Array(e)}function X8(e){return new RegExp(e.source,e.flags)}function Q8(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=oc(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=oc(e[r]);return t}function oc(e){return Nr(e)?Z8(e):om(e)?J8(e):Iu(e)?Y8(e):hw(e)?X8(e):Ct(e)?Q8(e):e}function Kr(e){return oc(e)}function im(e,t){return Kr(t===void 0?e:{...t,...e})}function mw(e){return Zn(e)&&globalThis.Symbol.asyncIterator in e}function gw(e){return Zn(e)&&globalThis.Symbol.iterator in e}function pw(e){return e instanceof globalThis.Promise}function sm(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function am(e){return e instanceof globalThis.Uint8Array}function bw(e,t){return t in e}function Zn(e){return e!==null&&typeof e=="object"}function Gr(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function ri(e){return e===void 0}function jc(e){return e===null}function _c(e){return typeof e=="boolean"}function le(e){return typeof e=="number"}function yw(e){return globalThis.Number.isInteger(e)}function lo(e){return typeof e=="bigint"}function zr(e){return typeof e=="string"}function vw(e){return typeof e=="function"}function Uc(e){return typeof e=="symbol"}function ww(e){return lo(e)||_c(e)||jc(e)||le(e)||zr(e)||Uc(e)||ri(e)}var bt;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=Zn(s);return e.AllowArrayObject?a:a&&!Gr(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function o(s){return e.AllowNaN?le(s):Number.isFinite(s)}e.IsNumberLike=o;function i(s){const a=ri(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=i})(bt||(bt={}));function e9(e){return globalThis.Object.freeze(e).map(t=>ic(t))}function t9(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=ic(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=ic(e[r]);return globalThis.Object.freeze(t)}function ic(e){return Nr(e)?e9(e):om(e)?e:Iu(e)?e:hw(e)?e:Ct(e)?t9(e):e}function j(e,t){const r=t!==void 0?{...t,...e}:e;switch(bt.InstanceMode){case"freeze":return ic(r);case"clone":return Kr(r);default:return r}}class rr extends Error{constructor(t){super(t)}}const Cr=Symbol.for("TypeBox.Transform"),Ou=Symbol.for("TypeBox.Readonly"),xo=Symbol.for("TypeBox.Optional"),zc=Symbol.for("TypeBox.Hint"),L=Symbol.for("TypeBox.Kind");function um(e){return Ct(e)&&e[Ou]==="Readonly"}function ni(e){return Ct(e)&&e[xo]==="Optional"}function $w(e){return ve(e,"Any")}function kw(e){return ve(e,"Argument")}function ea(e){return ve(e,"Array")}function Vc(e){return ve(e,"AsyncIterator")}function qc(e){return ve(e,"BigInt")}function Bu(e){return ve(e,"Boolean")}function ta(e){return ve(e,"Computed")}function ra(e){return ve(e,"Constructor")}function r9(e){return ve(e,"Date")}function na(e){return ve(e,"Function")}function oa(e){return ve(e,"Integer")}function dn(e){return ve(e,"Intersect")}function Wc(e){return ve(e,"Iterator")}function ve(e,t){return Ct(e)&&L in e&&e[L]===t}function xw(e){return Pu(e)||Hn(e)||yt(e)}function Ki(e){return ve(e,"Literal")}function Gi(e){return ve(e,"MappedKey")}function Yr(e){return ve(e,"MappedResult")}function Ru(e){return ve(e,"Never")}function n9(e){return ve(e,"Not")}function lm(e){return ve(e,"Null")}function ia(e){return ve(e,"Number")}function In(e){return ve(e,"Object")}function Kc(e){return ve(e,"Promise")}function Gc(e){return ve(e,"Record")}function Sr(e){return ve(e,"Ref")}function Dw(e){return ve(e,"RegExp")}function Lu(e){return ve(e,"String")}function cm(e){return ve(e,"Symbol")}function Hi(e){return ve(e,"TemplateLiteral")}function o9(e){return ve(e,"This")}function Ke(e){return Ct(e)&&Cr in e}function Zi(e){return ve(e,"Tuple")}function ju(e){return ve(e,"Undefined")}function Gt(e){return ve(e,"Union")}function i9(e){return ve(e,"Uint8Array")}function s9(e){return ve(e,"Unknown")}function a9(e){return ve(e,"Unsafe")}function u9(e){return ve(e,"Void")}function l9(e){return Ct(e)&&L in e&&yt(e[L])}function vr(e){return $w(e)||kw(e)||ea(e)||Bu(e)||qc(e)||Vc(e)||ta(e)||ra(e)||r9(e)||na(e)||oa(e)||dn(e)||Wc(e)||Ki(e)||Gi(e)||Yr(e)||Ru(e)||n9(e)||lm(e)||ia(e)||In(e)||Kc(e)||Gc(e)||Sr(e)||Dw(e)||Lu(e)||cm(e)||Hi(e)||o9(e)||Zi(e)||ju(e)||Gt(e)||i9(e)||s9(e)||a9(e)||u9(e)||l9(e)}const c9=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function Aw(e){try{return new RegExp(e),!0}catch{return!1}}function dm(e){if(!yt(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function Ew(e){return fm(e)||st(e)}function xa(e){return xt(e)||fw(e)}function _e(e){return xt(e)||Hn(e)}function fm(e){return xt(e)||Pu(e)}function Be(e){return xt(e)||yt(e)}function d9(e){return xt(e)||yt(e)&&dm(e)&&Aw(e)}function f9(e){return xt(e)||yt(e)&&dm(e)}function Cw(e){return xt(e)||st(e)}function sc(e){return Ct(e)&&e[xo]==="Optional"}function Fn(e){return we(e,"Any")&&Be(e.$id)}function h9(e){return we(e,"Argument")&&Hn(e.index)}function Ji(e){return we(e,"Array")&&e.type==="array"&&Be(e.$id)&&st(e.items)&&_e(e.minItems)&&_e(e.maxItems)&&fm(e.uniqueItems)&&Cw(e.contains)&&_e(e.minContains)&&_e(e.maxContains)}function hm(e){return we(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Be(e.$id)&&st(e.items)}function Hc(e){return we(e,"BigInt")&&e.type==="bigint"&&Be(e.$id)&&xa(e.exclusiveMaximum)&&xa(e.exclusiveMinimum)&&xa(e.maximum)&&xa(e.minimum)&&xa(e.multipleOf)}function Yi(e){return we(e,"Boolean")&&e.type==="boolean"&&Be(e.$id)}function m9(e){return we(e,"Computed")&&yt(e.target)&&Nr(e.parameters)&&e.parameters.every(t=>st(t))}function Zc(e){return we(e,"Constructor")&&e.type==="Constructor"&&Be(e.$id)&&Nr(e.parameters)&&e.parameters.every(t=>st(t))&&st(e.returns)}function Jc(e){return we(e,"Date")&&e.type==="Date"&&Be(e.$id)&&_e(e.exclusiveMaximumTimestamp)&&_e(e.exclusiveMinimumTimestamp)&&_e(e.maximumTimestamp)&&_e(e.minimumTimestamp)&&_e(e.multipleOfTimestamp)}function Yc(e){return we(e,"Function")&&e.type==="Function"&&Be(e.$id)&&Nr(e.parameters)&&e.parameters.every(t=>st(t))&&st(e.returns)}function Do(e){return we(e,"Integer")&&e.type==="integer"&&Be(e.$id)&&_e(e.exclusiveMaximum)&&_e(e.exclusiveMinimum)&&_e(e.maximum)&&_e(e.minimum)&&_e(e.multipleOf)}function Fw(e){return Ct(e)&&Object.entries(e).every(([t,r])=>dm(t)&&st(r))}function Xi(e){return we(e,"Intersect")&&!(yt(e.type)&&e.type!=="object")&&Nr(e.allOf)&&e.allOf.every(t=>st(t)&&!w9(t))&&Be(e.type)&&(fm(e.unevaluatedProperties)||Cw(e.unevaluatedProperties))&&Be(e.$id)}function mm(e){return we(e,"Iterator")&&e.type==="Iterator"&&Be(e.$id)&&st(e.items)}function we(e,t){return Ct(e)&&L in e&&e[L]===t}function Mw(e){return oi(e)&&yt(e.const)}function Sw(e){return oi(e)&&Hn(e.const)}function Tw(e){return oi(e)&&Pu(e.const)}function oi(e){return we(e,"Literal")&&Be(e.$id)&&g9(e.const)}function g9(e){return Pu(e)||Hn(e)||yt(e)}function p9(e){return we(e,"MappedKey")&&Nr(e.keys)&&e.keys.every(t=>Hn(t)||yt(t))}function b9(e){return we(e,"MappedResult")&&Fw(e.properties)}function ii(e){return we(e,"Never")&&Ct(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function js(e){return we(e,"Not")&&st(e.not)}function gm(e){return we(e,"Null")&&e.type==="null"&&Be(e.$id)}function Fr(e){return we(e,"Number")&&e.type==="number"&&Be(e.$id)&&_e(e.exclusiveMaximum)&&_e(e.exclusiveMinimum)&&_e(e.maximum)&&_e(e.minimum)&&_e(e.multipleOf)}function ut(e){return we(e,"Object")&&e.type==="object"&&Be(e.$id)&&Fw(e.properties)&&Ew(e.additionalProperties)&&_e(e.minProperties)&&_e(e.maxProperties)}function pm(e){return we(e,"Promise")&&e.type==="Promise"&&Be(e.$id)&&st(e.item)}function er(e){return we(e,"Record")&&e.type==="object"&&Be(e.$id)&&Ew(e.additionalProperties)&&Ct(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&Aw(r[0])&&Ct(t.patternProperties)&&st(t.patternProperties[r[0]])})(e)}function y9(e){return we(e,"Ref")&&Be(e.$id)&&yt(e.$ref)}function mu(e){return we(e,"RegExp")&&Be(e.$id)&&yt(e.source)&&yt(e.flags)&&_e(e.maxLength)&&_e(e.minLength)}function Mn(e){return we(e,"String")&&e.type==="string"&&Be(e.$id)&&_e(e.minLength)&&_e(e.maxLength)&&d9(e.pattern)&&f9(e.format)}function gu(e){return we(e,"Symbol")&&e.type==="symbol"&&Be(e.$id)}function pu(e){return we(e,"TemplateLiteral")&&e.type==="string"&&yt(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function v9(e){return we(e,"This")&&Be(e.$id)&&yt(e.$ref)}function w9(e){return Ct(e)&&Cr in e}function Xc(e){return we(e,"Tuple")&&e.type==="array"&&Be(e.$id)&&Hn(e.minItems)&&Hn(e.maxItems)&&e.minItems===e.maxItems&&(xt(e.items)&&xt(e.additionalItems)&&e.minItems===0||Nr(e.items)&&e.items.every(t=>st(t)))}function Ii(e){return we(e,"Undefined")&&e.type==="undefined"&&Be(e.$id)}function $o(e){return we(e,"Union")&&Be(e.$id)&&Ct(e)&&Nr(e.anyOf)&&e.anyOf.every(t=>st(t))}function _u(e){return we(e,"Uint8Array")&&e.type==="Uint8Array"&&Be(e.$id)&&_e(e.minByteLength)&&_e(e.maxByteLength)}function Sn(e){return we(e,"Unknown")&&Be(e.$id)}function $9(e){return we(e,"Unsafe")}function Qc(e){return we(e,"Void")&&e.type==="void"&&Be(e.$id)}function k9(e){return Ct(e)&&L in e&&yt(e[L])&&!c9.includes(e[L])}function st(e){return Ct(e)&&(Fn(e)||h9(e)||Ji(e)||Yi(e)||Hc(e)||hm(e)||m9(e)||Zc(e)||Jc(e)||Yc(e)||Do(e)||Xi(e)||mm(e)||oi(e)||p9(e)||b9(e)||ii(e)||js(e)||gm(e)||Fr(e)||ut(e)||pm(e)||er(e)||y9(e)||mu(e)||Mn(e)||gu(e)||pu(e)||v9(e)||Xc(e)||Ii(e)||$o(e)||_u(e)||Sn(e)||$9(e)||Qc(e)||k9(e))}const x9="(true|false)",Pl="(0|[1-9][0-9]*)",Nw="(.*)",D9="(?!.*)",_s=`^${Pl}$`,Us=`^${Nw}$`,A9=`^${D9}$`,Pw=new Map;function bm(e){return Pw.has(e)}function ym(e){return Pw.get(e)}const vm=new Map;function Yo(e){return vm.has(e)}function wm(e,t){vm.set(e,t)}function $m(e){return vm.get(e)}function E9(e,t){return e.includes(t)}function C9(e){return[...new Set(e)]}function F9(e,t){return e.filter(r=>t.includes(r))}function M9(e,t){return e.reduce((r,n)=>F9(r,n),t)}function S9(e){return e.length===1?e[0]:e.length>1?M9(e.slice(1),e[0]):[]}function T9(e){const t=[];for(const r of e)t.push(...r);return t}function bu(e){return j({[L]:"Any"},e)}function km(e,t){return j({[L]:"Array",type:"array",items:e},t)}function N9(e){return j({[L]:"Argument",index:e})}function xm(e,t){return j({[L]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function Pt(e,t,r){return j({[L]:"Computed",target:e,parameters:t},r)}function P9(e,t){const{[t]:r,...n}=e;return n}function Hr(e,t){return t.reduce((r,n)=>P9(r,n),e)}function lt(e){return j({[L]:"Never",not:{}},e)}function nr(e){return j({[L]:"MappedResult",properties:e})}function Dm(e,t,r){return j({[L]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function Uu(e,t,r){return j({[L]:"Function",type:"Function",parameters:e,returns:t},r)}function T0(e,t){return j({[L]:"Union",anyOf:e},t)}function I9(e){return e.some(t=>ni(t))}function Bb(e){return e.map(t=>ni(t)?O9(t):t)}function O9(e){return Hr(e,[xo])}function B9(e,t){return I9(e)?ui(T0(Bb(e),t)):T0(Bb(e),t)}function sa(e,t){return e.length===1?j(e[0],t):e.length===0?lt(t):B9(e,t)}function or(e,t){return e.length===0?lt(t):e.length===1?j(e[0],t):T0(e,t)}class Rb extends rr{}function R9(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function Am(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function mo(e,t){return Am(e,t,"(")}function yu(e,t){return Am(e,t,")")}function Iw(e,t){return Am(e,t,"|")}function L9(e){if(!(mo(e,0)&&yu(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(mo(e,r)&&(t+=1),yu(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function j9(e){return e.slice(1,e.length-1)}function _9(e){let t=0;for(let r=0;r<e.length;r++)if(mo(e,r)&&(t+=1),yu(e,r)&&(t-=1),Iw(e,r)&&t===0)return!0;return!1}function U9(e){for(let t=0;t<e.length;t++)if(mo(e,t))return!0;return!1}function z9(e){let[t,r]=[0,0];const n=[];for(let i=0;i<e.length;i++)if(mo(e,i)&&(t+=1),yu(e,i)&&(t-=1),Iw(e,i)&&t===0){const s=e.slice(r,i);s.length>0&&n.push(zs(s)),r=i+1}const o=e.slice(r);return o.length>0&&n.push(zs(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function V9(e){function t(o,i){if(!mo(o,i))throw new Rb("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=i;a<o.length;a++)if(mo(o,a)&&(s+=1),yu(o,a)&&(s-=1),s===0)return[i,a];throw new Rb("TemplateLiteralParser: Unclosed group parens in expression")}function r(o,i){for(let s=i;s<o.length;s++)if(mo(o,s))return[i,s];return[i,o.length]}const n=[];for(let o=0;o<e.length;o++)if(mo(e,o)){const[i,s]=t(e,o),a=e.slice(i,s+1);n.push(zs(a)),o=s}else{const[i,s]=r(e,o),a=e.slice(i,s);a.length>0&&n.push(zs(a)),o=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function zs(e){return L9(e)?zs(j9(e)):_9(e)?z9(e):U9(e)?V9(e):{type:"const",const:R9(e)}}function Em(e){return zs(e.slice(1,e.length-1))}class q9 extends rr{}function W9(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function K9(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function G9(e){return e.type==="const"&&e.const===".*"}function vu(e){return W9(e)||G9(e)?!1:K9(e)?!0:e.type==="and"?e.expr.every(t=>vu(t)):e.type==="or"?e.expr.every(t=>vu(t)):e.type==="const"?!0:(()=>{throw new q9("Unknown expression type")})()}function H9(e){const t=Em(e.pattern);return vu(t)}class Z9 extends rr{}function*Ow(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of Ow(e.slice(1)))yield`${t}${r}`}function*J9(e){return yield*Ow(e.expr.map(t=>[...ed(t)]))}function*Y9(e){for(const t of e.expr)yield*ed(t)}function*X9(e){return yield e.const}function*ed(e){return e.type==="and"?yield*J9(e):e.type==="or"?yield*Y9(e):e.type==="const"?yield*X9(e):(()=>{throw new Z9("Unknown expression")})()}function Bw(e){const t=Em(e.pattern);return vu(t)?[...ed(t)]:[]}function At(e,t){return j({[L]:"Literal",const:e,type:typeof e},t)}function Rw(e){return j({[L]:"Boolean",type:"boolean"},e)}function Cm(e){return j({[L]:"BigInt",type:"bigint"},e)}function Qi(e){return j({[L]:"Number",type:"number"},e)}function Oi(e){return j({[L]:"String",type:"string"},e)}function*Q9(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield Rw():t==="number"?yield Qi():t==="bigint"?yield Cm():t==="string"?yield Oi():yield(()=>{const r=t.split("|").map(n=>At(n.trim()));return r.length===0?lt():r.length===1?r[0]:sa(r)})()}function*eA(e){if(e[1]!=="{"){const t=At("$"),r=N0(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=Q9(e.slice(2,t)),n=N0(e.slice(t+1));return yield*[...r,...n]}yield At(e)}function*N0(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=At(e.slice(0,t)),n=eA(e.slice(t));return yield*[r,...n]}yield At(e)}function tA(e){return[...N0(e)]}class rA extends rr{}function nA(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Lw(e,t){return Hi(e)?e.pattern.slice(1,e.pattern.length-1):Gt(e)?`(${e.anyOf.map(r=>Lw(r,t)).join("|")})`:ia(e)?`${t}${Pl}`:oa(e)?`${t}${Pl}`:qc(e)?`${t}${Pl}`:Lu(e)?`${t}${Nw}`:Ki(e)?`${t}${nA(e.const.toString())}`:Bu(e)?`${t}${x9}`:(()=>{throw new rA(`Unexpected Kind '${e[L]}'`)})()}function Lb(e){return`^${e.map(t=>Lw(t,"")).join("")}$`}function ac(e){const r=Bw(e).map(n=>At(n));return sa(r)}function jw(e,t){const r=yt(e)?Lb(tA(e)):Lb(e);return j({[L]:"TemplateLiteral",type:"string",pattern:r},t)}function oA(e){return Bw(e).map(r=>r.toString())}function iA(e){const t=[];for(const r of e)t.push(...si(r));return t}function sA(e){return[e.toString()]}function si(e){return[...new Set(Hi(e)?oA(e):Gt(e)?iA(e.anyOf):Ki(e)?sA(e.const):ia(e)?["[number]"]:oa(e)?["[number]"]:[])]}function aA(e,t,r){const n={};for(const o of Object.getOwnPropertyNames(t))n[o]=td(e,si(t[o]),r);return n}function uA(e,t,r){return aA(e,t.properties,r)}function lA(e,t,r){const n=uA(e,t,r);return nr(n)}function _w(e,t){return e.map(r=>Uw(r,t))}function cA(e){return e.filter(t=>!Ru(t))}function dA(e,t){return qw(cA(_w(e,t)))}function fA(e){return e.some(t=>Ru(t))?[]:e}function hA(e,t){return sa(fA(_w(e,t)))}function mA(e,t){return t in e?e[t]:t==="[number]"?sa(e):lt()}function gA(e,t){return t==="[number]"?e:lt()}function pA(e,t){return t in e?e[t]:lt()}function Uw(e,t){return dn(e)?dA(e.allOf,t):Gt(e)?hA(e.anyOf,t):Zi(e)?mA(e.items??[],t):ea(e)?gA(e.items,t):In(e)?pA(e.properties,t):lt()}function Fm(e,t){return t.map(r=>Uw(e,r))}function jb(e,t){return sa(Fm(e,t))}function td(e,t,r){if(Sr(e)||Sr(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!vr(e)||!vr(t))throw new rr(n);return Pt("Index",[e,t])}return Yr(t)?lA(e,t,r):Gi(t)?wA(e,t,r):j(vr(t)?jb(e,si(t)):jb(e,t),r)}function bA(e,t,r){return{[t]:td(e,[t],Kr(r))}}function yA(e,t,r){return t.reduce((n,o)=>({...n,...bA(e,o,r)}),{})}function vA(e,t,r){return yA(e,t.keys,r)}function wA(e,t,r){const n=vA(e,t,r);return nr(n)}function Mm(e,t){return j({[L]:"Iterator",type:"Iterator",items:e},t)}function $A(e){return globalThis.Object.keys(e).filter(t=>!ni(e[t]))}function kA(e,t){const r=$A(e),n=r.length>0?{[L]:"Object",type:"object",required:r,properties:e}:{[L]:"Object",type:"object",properties:e};return j(n,t)}var Kt=kA;function zw(e,t){return j({[L]:"Promise",type:"Promise",item:e},t)}function xA(e){return j(Hr(e,[Ou]))}function DA(e){return j({...e,[Ou]:"Readonly"})}function AA(e,t){return t===!1?xA(e):DA(e)}function ai(e,t){const r=t??!0;return Yr(e)?FA(e,r):AA(e,r)}function EA(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=ai(e[n],t);return r}function CA(e,t){return EA(e.properties,t)}function FA(e,t){const r=CA(e,t);return nr(r)}function aa(e,t){return j(e.length>0?{[L]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[L]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function Vw(e,t){return e in t?nn(e,t[e]):nr(t)}function MA(e){return{[e]:At(e)}}function SA(e){const t={};for(const r of e)t[r]=At(r);return t}function TA(e,t){return E9(t,e)?MA(e):SA(t)}function NA(e,t){const r=TA(e,t);return Vw(e,r)}function Da(e,t){return t.map(r=>nn(e,r))}function PA(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=nn(e,t[n]);return r}function nn(e,t){const r={...t};return ni(t)?ui(nn(e,Hr(t,[xo]))):um(t)?ai(nn(e,Hr(t,[Ou]))):Yr(t)?Vw(e,t.properties):Gi(t)?NA(e,t.keys):ra(t)?Dm(Da(e,t.parameters),nn(e,t.returns),r):na(t)?Uu(Da(e,t.parameters),nn(e,t.returns),r):Vc(t)?xm(nn(e,t.items),r):Wc(t)?Mm(nn(e,t.items),r):dn(t)?li(Da(e,t.allOf),r):Gt(t)?or(Da(e,t.anyOf),r):Zi(t)?aa(Da(e,t.items??[]),r):In(t)?Kt(PA(e,t.properties),r):ea(t)?km(nn(e,t.items),r):Kc(t)?zw(nn(e,t.item),r):t}function IA(e,t){const r={};for(const n of e)r[n]=nn(n,t);return r}function OA(e,t,r){const n=vr(e)?si(e):e,o=t({[L]:"MappedKey",keys:n}),i=IA(n,o);return Kt(i,r)}function BA(e){return j(Hr(e,[xo]))}function RA(e){return j({...e,[xo]:"Optional"})}function LA(e,t){return t===!1?BA(e):RA(e)}function ui(e,t){const r=t??!0;return Yr(e)?UA(e,r):LA(e,r)}function jA(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=ui(e[n],t);return r}function _A(e,t){return jA(e.properties,t)}function UA(e,t){const r=_A(e,t);return nr(r)}function P0(e,t={}){const r=e.every(o=>In(o)),n=vr(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return j(t.unevaluatedProperties===!1||vr(t.unevaluatedProperties)||r?{...n,[L]:"Intersect",type:"object",allOf:e}:{...n,[L]:"Intersect",allOf:e},t)}function zA(e){return e.every(t=>ni(t))}function VA(e){return Hr(e,[xo])}function _b(e){return e.map(t=>ni(t)?VA(t):t)}function qA(e,t){return zA(e)?ui(P0(_b(e),t)):P0(_b(e),t)}function qw(e,t={}){if(e.length===1)return j(e[0],t);if(e.length===0)return lt(t);if(e.some(r=>Ke(r)))throw new Error("Cannot intersect transform types");return qA(e,t)}function li(e,t){if(e.length===1)return j(e[0],t);if(e.length===0)return lt(t);if(e.some(r=>Ke(r)))throw new Error("Cannot intersect transform types");return P0(e,t)}function ua(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new rr("Ref: $ref must be a string");return j({[L]:"Ref",$ref:t},r)}function WA(e,t){return Pt("Awaited",[Pt(e,t)])}function KA(e){return Pt("Awaited",[ua(e)])}function GA(e){return li(Ww(e))}function HA(e){return or(Ww(e))}function ZA(e){return rd(e)}function Ww(e){return e.map(t=>rd(t))}function rd(e,t){return j(ta(e)?WA(e.target,e.parameters):dn(e)?GA(e.allOf):Gt(e)?HA(e.anyOf):Kc(e)?ZA(e.item):Sr(e)?KA(e.$ref):e,t)}function Kw(e){const t=[];for(const r of e)t.push(es(r));return t}function JA(e){const t=Kw(e);return T9(t)}function YA(e){const t=Kw(e);return S9(t)}function XA(e){return e.map((t,r)=>r.toString())}function QA(e){return["[number]"]}function eE(e){return globalThis.Object.getOwnPropertyNames(e)}function tE(e){return I0?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function es(e){return dn(e)?JA(e.allOf):Gt(e)?YA(e.anyOf):Zi(e)?XA(e.items??[]):ea(e)?QA(e.items):In(e)?eE(e.properties):Gc(e)?tE(e.patternProperties):[]}let I0=!1;function Vs(e){I0=!0;const t=es(e);return I0=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function rE(e,t){return Pt("KeyOf",[Pt(e,t)])}function nE(e){return Pt("KeyOf",[ua(e)])}function oE(e,t){const r=es(e),n=iE(r),o=sa(n);return j(o,t)}function iE(e){return e.map(t=>t==="[number]"?Qi():At(t))}function Sm(e,t){return ta(e)?rE(e.target,e.parameters):Sr(e)?nE(e.$ref):Yr(e)?uE(e,t):oE(e,t)}function sE(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Sm(e[n],Kr(t));return r}function aE(e,t){return sE(e.properties,t)}function uE(e,t){const r=aE(e,t);return nr(r)}function Gw(e){const t=es(e),r=Fm(e,t);return t.map((n,o)=>[t[o],r[o]])}function lE(e){const t=[];for(const r of e)t.push(...es(r));return C9(t)}function cE(e){return e.filter(t=>!Ru(t))}function dE(e,t){const r=[];for(const n of e)r.push(...Fm(n,[t]));return cE(r)}function fE(e,t){const r={};for(const n of t)r[n]=qw(dE(e,n));return r}function hE(e,t){const r=lE(e),n=fE(e,r);return Kt(n,t)}function Hw(e){return j({[L]:"Date",type:"Date"},e)}function Zw(e){return j({[L]:"Null",type:"null"},e)}function Jw(e){return j({[L]:"Symbol",type:"symbol"},e)}function Yw(e){return j({[L]:"Undefined",type:"undefined"},e)}function Xw(e){return j({[L]:"Uint8Array",type:"Uint8Array"},e)}function nd(e){return j({[L]:"Unknown"},e)}function mE(e){return e.map(t=>Tm(t,!1))}function gE(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=ai(Tm(e[r],!1));return t}function gl(e,t){return t===!0?e:ai(e)}function Tm(e,t){return q8(e)||K8(e)?gl(bu(),t):Nr(e)?ai(aa(mE(e))):Iu(e)?Xw():om(e)?Hw():Ct(e)?gl(Kt(gE(e)),t):W8(e)?gl(Uu([],nd()),t):xt(e)?Yw():G8(e)?Zw():H8(e)?Jw():fw(e)?Cm():Hn(e)||Pu(e)||yt(e)?At(e):Kt({})}function pE(e,t){return j(Tm(e,!0),t)}function bE(e,t){return ra(e)?aa(e.parameters,t):lt(t)}function yE(e,t){if(xt(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(i=>isNaN(i)).map(i=>e[i]),o=[...new Set(r)].map(i=>At(i));return or(o,{...t,[zc]:"Enum"})}class vE extends rr{}var S;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(S||(S={}));function cn(e){return e===S.False?e:S.True}function la(e){throw new vE(e)}function Ft(e){return ii(e)||Xi(e)||$o(e)||Sn(e)||Fn(e)}function Mt(e,t){return ii(t)?t5():Xi(t)?od(e,t):$o(t)?Pm(e,t):Sn(t)?i5():Fn(t)?Nm():la("StructuralRight")}function Nm(e,t){return S.True}function wE(e,t){return Xi(t)?od(e,t):$o(t)&&t.anyOf.some(r=>Fn(r)||Sn(r))?S.True:$o(t)?S.Union:Sn(t)||Fn(t)?S.True:S.Union}function $E(e,t){return Sn(e)?S.False:Fn(e)?S.Union:ii(e)?S.True:S.False}function kE(e,t){return ut(t)&&id(t)?S.True:Ft(t)?Mt(e,t):Ji(t)?cn(Oe(e.items,t.items)):S.False}function xE(e,t){return Ft(t)?Mt(e,t):hm(t)?cn(Oe(e.items,t.items)):S.False}function DE(e,t){return Ft(t)?Mt(e,t):ut(t)?fr(e,t):er(t)?fn(e,t):Hc(t)?S.True:S.False}function Qw(e,t){return Tw(e)||Yi(e)?S.True:S.False}function AE(e,t){return Ft(t)?Mt(e,t):ut(t)?fr(e,t):er(t)?fn(e,t):Yi(t)?S.True:S.False}function EE(e,t){return Ft(t)?Mt(e,t):ut(t)?fr(e,t):Zc(t)?e.parameters.length>t.parameters.length?S.False:e.parameters.every((r,n)=>cn(Oe(t.parameters[n],r))===S.True)?cn(Oe(e.returns,t.returns)):S.False:S.False}function CE(e,t){return Ft(t)?Mt(e,t):ut(t)?fr(e,t):er(t)?fn(e,t):Jc(t)?S.True:S.False}function FE(e,t){return Ft(t)?Mt(e,t):ut(t)?fr(e,t):Yc(t)?e.parameters.length>t.parameters.length?S.False:e.parameters.every((r,n)=>cn(Oe(t.parameters[n],r))===S.True)?cn(Oe(e.returns,t.returns)):S.False:S.False}function e5(e,t){return oi(e)&&Hn(e.const)||Fr(e)||Do(e)?S.True:S.False}function ME(e,t){return Do(t)||Fr(t)?S.True:Ft(t)?Mt(e,t):ut(t)?fr(e,t):er(t)?fn(e,t):S.False}function od(e,t){return t.allOf.every(r=>Oe(e,r)===S.True)?S.True:S.False}function SE(e,t){return e.allOf.some(r=>Oe(r,t)===S.True)?S.True:S.False}function TE(e,t){return Ft(t)?Mt(e,t):mm(t)?cn(Oe(e.items,t.items)):S.False}function NE(e,t){return oi(t)&&t.const===e.const?S.True:Ft(t)?Mt(e,t):ut(t)?fr(e,t):er(t)?fn(e,t):Mn(t)?o5(e):Fr(t)?r5(e):Do(t)?e5(e):Yi(t)?Qw(e):S.False}function t5(e,t){return S.False}function PE(e,t){return S.True}function Ub(e){let[t,r]=[e,0];for(;js(t);)t=t.not,r+=1;return r%2===0?t:nd()}function IE(e,t){return js(e)?Oe(Ub(e),t):js(t)?Oe(e,Ub(t)):la("Invalid fallthrough for Not")}function OE(e,t){return Ft(t)?Mt(e,t):ut(t)?fr(e,t):er(t)?fn(e,t):gm(t)?S.True:S.False}function r5(e,t){return Sw(e)||Fr(e)||Do(e)?S.True:S.False}function BE(e,t){return Ft(t)?Mt(e,t):ut(t)?fr(e,t):er(t)?fn(e,t):Do(t)||Fr(t)?S.True:S.False}function Tr(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function zb(e){return id(e)}function Vb(e){return Tr(e,0)||Tr(e,1)&&"description"in e.properties&&$o(e.properties.description)&&e.properties.description.anyOf.length===2&&(Mn(e.properties.description.anyOf[0])&&Ii(e.properties.description.anyOf[1])||Mn(e.properties.description.anyOf[1])&&Ii(e.properties.description.anyOf[0]))}function df(e){return Tr(e,0)}function qb(e){return Tr(e,0)}function RE(e){return Tr(e,0)}function LE(e){return Tr(e,0)}function jE(e){return id(e)}function _E(e){const t=Qi();return Tr(e,0)||Tr(e,1)&&"length"in e.properties&&cn(Oe(e.properties.length,t))===S.True}function UE(e){return Tr(e,0)}function id(e){const t=Qi();return Tr(e,0)||Tr(e,1)&&"length"in e.properties&&cn(Oe(e.properties.length,t))===S.True}function zE(e){const t=Uu([bu()],bu());return Tr(e,0)||Tr(e,1)&&"then"in e.properties&&cn(Oe(e.properties.then,t))===S.True}function n5(e,t){return Oe(e,t)===S.False||sc(e)&&!sc(t)?S.False:S.True}function fr(e,t){return Sn(e)?S.False:Fn(e)?S.Union:ii(e)||Mw(e)&&zb(t)||Sw(e)&&df(t)||Tw(e)&&qb(t)||gu(e)&&Vb(t)||Hc(e)&&RE(t)||Mn(e)&&zb(t)||gu(e)&&Vb(t)||Fr(e)&&df(t)||Do(e)&&df(t)||Yi(e)&&qb(t)||_u(e)&&jE(t)||Jc(e)&&LE(t)||Zc(e)&&UE(t)||Yc(e)&&_E(t)?S.True:er(e)&&Mn(O0(e))?t[zc]==="Record"?S.True:S.False:er(e)&&Fr(O0(e))&&Tr(t,0)?S.True:S.False}function VE(e,t){return Ft(t)?Mt(e,t):er(t)?fn(e,t):ut(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!sc(t.properties[r]))return S.False;if(sc(t.properties[r]))return S.True;if(n5(e.properties[r],t.properties[r])===S.False)return S.False}return S.True})():S.False}function qE(e,t){return Ft(t)?Mt(e,t):ut(t)&&zE(t)?S.True:pm(t)?cn(Oe(e.item,t.item)):S.False}function O0(e){return _s in e.patternProperties?Qi():Us in e.patternProperties?Oi():la("Unknown record key pattern")}function B0(e){return _s in e.patternProperties?e.patternProperties[_s]:Us in e.patternProperties?e.patternProperties[Us]:la("Unable to get record value schema")}function fn(e,t){const[r,n]=[O0(t),B0(t)];return Mw(e)&&Fr(r)&&cn(Oe(e,n))===S.True?S.True:_u(e)&&Fr(r)||Mn(e)&&Fr(r)||Ji(e)&&Fr(r)?Oe(e,n):ut(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(n5(n,e.properties[o])===S.False)return S.False;return S.True})():S.False}function WE(e,t){return Ft(t)?Mt(e,t):ut(t)?fr(e,t):er(t)?Oe(B0(e),B0(t)):S.False}function KE(e,t){const r=mu(e)?Oi():e,n=mu(t)?Oi():t;return Oe(r,n)}function o5(e,t){return oi(e)&&yt(e.const)||Mn(e)?S.True:S.False}function GE(e,t){return Ft(t)?Mt(e,t):ut(t)?fr(e,t):er(t)?fn(e,t):Mn(t)?S.True:S.False}function HE(e,t){return Ft(t)?Mt(e,t):ut(t)?fr(e,t):er(t)?fn(e,t):gu(t)?S.True:S.False}function ZE(e,t){return pu(e)?Oe(ac(e),t):pu(t)?Oe(e,ac(t)):la("Invalid fallthrough for TemplateLiteral")}function JE(e,t){return Ji(t)&&e.items!==void 0&&e.items.every(r=>Oe(r,t.items)===S.True)}function YE(e,t){return ii(e)?S.True:Sn(e)?S.False:Fn(e)?S.Union:S.False}function XE(e,t){return Ft(t)?Mt(e,t):ut(t)&&id(t)||Ji(t)&&JE(e,t)?S.True:Xc(t)?xt(e.items)&&!xt(t.items)||!xt(e.items)&&xt(t.items)?S.False:xt(e.items)&&!xt(t.items)||e.items.every((r,n)=>Oe(r,t.items[n])===S.True)?S.True:S.False:S.False}function QE(e,t){return Ft(t)?Mt(e,t):ut(t)?fr(e,t):er(t)?fn(e,t):_u(t)?S.True:S.False}function eC(e,t){return Ft(t)?Mt(e,t):ut(t)?fr(e,t):er(t)?fn(e,t):Qc(t)?nC(e):Ii(t)?S.True:S.False}function Pm(e,t){return t.anyOf.some(r=>Oe(e,r)===S.True)?S.True:S.False}function tC(e,t){return e.anyOf.every(r=>Oe(r,t)===S.True)?S.True:S.False}function i5(e,t){return S.True}function rC(e,t){return ii(t)?t5():Xi(t)?od(e,t):$o(t)?Pm(e,t):Fn(t)?Nm():Mn(t)?o5(e):Fr(t)?r5(e):Do(t)?e5(e):Yi(t)?Qw(e):Ji(t)?$E(e):Xc(t)?YE(e):ut(t)?fr(e,t):Sn(t)?S.True:S.False}function nC(e,t){return Ii(e)||Ii(e)?S.True:S.False}function oC(e,t){return Xi(t)?od(e,t):$o(t)?Pm(e,t):Sn(t)?i5():Fn(t)?Nm():ut(t)?fr(e,t):Qc(t)?S.True:S.False}function Oe(e,t){return pu(e)||pu(t)?ZE(e,t):mu(e)||mu(t)?KE(e,t):js(e)||js(t)?IE(e,t):Fn(e)?wE(e,t):Ji(e)?kE(e,t):Hc(e)?DE(e,t):Yi(e)?AE(e,t):hm(e)?xE(e,t):Zc(e)?EE(e,t):Jc(e)?CE(e,t):Yc(e)?FE(e,t):Do(e)?ME(e,t):Xi(e)?SE(e,t):mm(e)?TE(e,t):oi(e)?NE(e,t):ii(e)?PE():gm(e)?OE(e,t):Fr(e)?BE(e,t):ut(e)?VE(e,t):er(e)?WE(e,t):Mn(e)?GE(e,t):gu(e)?HE(e,t):Xc(e)?XE(e,t):pm(e)?qE(e,t):_u(e)?QE(e,t):Ii(e)?eC(e,t):$o(e)?tC(e,t):Sn(e)?rC(e,t):Qc(e)?oC(e,t):la(`Unknown left type operand '${e[L]}'`)}function zu(e,t){return Oe(e,t)}function iC(e,t,r,n,o){const i={};for(const s of globalThis.Object.getOwnPropertyNames(e))i[s]=Im(e[s],t,r,n,Kr(o));return i}function sC(e,t,r,n,o){return iC(e.properties,t,r,n,o)}function aC(e,t,r,n,o){const i=sC(e,t,r,n,o);return nr(i)}function uC(e,t,r,n){const o=zu(e,t);return o===S.Union?or([r,n]):o===S.True?r:n}function Im(e,t,r,n,o){return Yr(e)?aC(e,t,r,n,o):Gi(e)?j(fC(e,t,r,n,o)):j(uC(e,t,r,n),o)}function lC(e,t,r,n,o){return{[e]:Im(At(e),t,r,n,Kr(o))}}function cC(e,t,r,n,o){return e.reduce((i,s)=>({...i,...lC(s,t,r,n,o)}),{})}function dC(e,t,r,n,o){return cC(e.keys,t,r,n,o)}function fC(e,t,r,n,o){const i=dC(e,t,r,n,o);return nr(i)}function hC(e){return e.allOf.every(t=>ca(t))}function mC(e){return e.anyOf.some(t=>ca(t))}function gC(e){return!ca(e.not)}function ca(e){return e[L]==="Intersect"?hC(e):e[L]==="Union"?mC(e):e[L]==="Not"?gC(e):e[L]==="Undefined"}function pC(e,t){return Om(ac(e),t)}function bC(e,t){const r=e.filter(n=>zu(n,t)===S.False);return r.length===1?r[0]:or(r)}function Om(e,t,r={}){return Hi(e)?j(pC(e,t),r):Yr(e)?j(wC(e,t),r):j(Gt(e)?bC(e.anyOf,t):zu(e,t)!==S.False?lt():e,r)}function yC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Om(e[n],t);return r}function vC(e,t){return yC(e.properties,t)}function wC(e,t){const r=vC(e,t);return nr(r)}function $C(e,t){return Bm(ac(e),t)}function kC(e,t){const r=e.filter(n=>zu(n,t)!==S.False);return r.length===1?r[0]:or(r)}function Bm(e,t,r){return Hi(e)?j($C(e,t),r):Yr(e)?j(AC(e,t),r):j(Gt(e)?kC(e.anyOf,t):zu(e,t)!==S.False?e:lt(),r)}function xC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Bm(e[n],t);return r}function DC(e,t){return xC(e.properties,t)}function AC(e,t){const r=DC(e,t);return nr(r)}function EC(e,t){return ra(e)?j(e.returns,t):lt(t)}function s5(e){return ai(ui(e))}function ts(e,t,r){return j({[L]:"Record",type:"object",patternProperties:{[e]:t}},r)}function Rm(e,t,r){const n={};for(const o of e)n[o]=t;return Kt(n,{...r,[zc]:"Record"})}function CC(e,t,r){return H9(e)?Rm(si(e),t,r):ts(e.pattern,t,r)}function FC(e,t,r){return Rm(si(or(e)),t,r)}function MC(e,t,r){return Rm([e.toString()],t,r)}function SC(e,t,r){return ts(e.source,t,r)}function TC(e,t,r){const n=xt(e.pattern)?Us:e.pattern;return ts(n,t,r)}function NC(e,t,r){return ts(Us,t,r)}function PC(e,t,r){return ts(A9,t,r)}function IC(e,t,r){return Kt({true:t,false:t},r)}function OC(e,t,r){return ts(_s,t,r)}function BC(e,t,r){return ts(_s,t,r)}function a5(e,t,r={}){return Gt(e)?FC(e.anyOf,t,r):Hi(e)?CC(e,t,r):Ki(e)?MC(e.const,t,r):Bu(e)?IC(e,t,r):oa(e)?OC(e,t,r):ia(e)?BC(e,t,r):Dw(e)?SC(e,t,r):Lu(e)?TC(e,t,r):$w(e)?NC(e,t,r):Ru(e)?PC(e,t,r):lt(r)}function Lm(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function RC(e){const t=Lm(e);return t===Us?Oi():t===_s?Qi():Oi({pattern:t})}function u5(e){return e.patternProperties[Lm(e)]}function LC(e,t){return t.parameters=Vu(e,t.parameters),t.returns=Tn(e,t.returns),t}function jC(e,t){return t.parameters=Vu(e,t.parameters),t.returns=Tn(e,t.returns),t}function _C(e,t){return t.allOf=Vu(e,t.allOf),t}function UC(e,t){return t.anyOf=Vu(e,t.anyOf),t}function zC(e,t){return xt(t.items)||(t.items=Vu(e,t.items)),t}function VC(e,t){return t.items=Tn(e,t.items),t}function qC(e,t){return t.items=Tn(e,t.items),t}function WC(e,t){return t.items=Tn(e,t.items),t}function KC(e,t){return t.item=Tn(e,t.item),t}function GC(e,t){const r=YC(e,t.properties);return{...t,...Kt(r)}}function HC(e,t){const r=Tn(e,RC(t)),n=Tn(e,u5(t)),o=a5(r,n);return{...t,...o}}function ZC(e,t){return t.index in e?e[t.index]:nd()}function JC(e,t){const r=um(t),n=ni(t),o=Tn(e,t);return r&&n?s5(o):r&&!n?ai(o):!r&&n?ui(o):o}function YC(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:JC(e,t[n])}),{})}function Vu(e,t){return t.map(r=>Tn(e,r))}function Tn(e,t){return ra(t)?LC(e,t):na(t)?jC(e,t):dn(t)?_C(e,t):Gt(t)?UC(e,t):Zi(t)?zC(e,t):ea(t)?VC(e,t):Vc(t)?qC(e,t):Wc(t)?WC(e,t):Kc(t)?KC(e,t):In(t)?GC(e,t):Gc(t)?HC(e,t):kw(t)?ZC(e,t):t}function XC(e,t){return Tn(t,im(e))}function QC(e){return j({[L]:"Integer",type:"integer"},e)}function e7(e,t,r){return{[e]:da(At(e),t,Kr(r))}}function t7(e,t,r){return e.reduce((o,i)=>({...o,...e7(i,t,r)}),{})}function r7(e,t,r){return t7(e.keys,t,r)}function n7(e,t,r){const n=r7(e,t,r);return nr(n)}function o7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function i7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function s7(e){return e.toUpperCase()}function a7(e){return e.toLowerCase()}function u7(e,t,r){const n=Em(e.pattern);if(!vu(n))return{...e,pattern:l5(e.pattern,t)};const s=[...ed(n)].map(c=>At(c)),a=c5(s,t),u=or(a);return jw([u],r)}function l5(e,t){return typeof e=="string"?t==="Uncapitalize"?o7(e):t==="Capitalize"?i7(e):t==="Uppercase"?s7(e):t==="Lowercase"?a7(e):e:e.toString()}function c5(e,t){return e.map(r=>da(r,t))}function da(e,t,r={}){return Gi(e)?n7(e,t,r):Hi(e)?u7(e,t,r):Gt(e)?or(c5(e.anyOf,t),r):Ki(e)?At(l5(e.const,t),r):j(e,r)}function l7(e,t={}){return da(e,"Capitalize",t)}function c7(e,t={}){return da(e,"Lowercase",t)}function d7(e,t={}){return da(e,"Uncapitalize",t)}function f7(e,t={}){return da(e,"Uppercase",t)}function h7(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=sd(e[o],t,Kr(r));return n}function m7(e,t,r){return h7(e.properties,t,r)}function g7(e,t,r){const n=m7(e,t,r);return nr(n)}function p7(e,t){return e.map(r=>jm(r,t))}function b7(e,t){return e.map(r=>jm(r,t))}function y7(e,t){const{[t]:r,...n}=e;return n}function v7(e,t){return t.reduce((r,n)=>y7(r,n),e)}function w7(e,t,r){const n=Hr(e,[Cr,"$id","required","properties"]),o=v7(r,t);return Kt(o,n)}function $7(e){const t=e.reduce((r,n)=>xw(n)?[...r,At(n)]:r,[]);return or(t)}function jm(e,t){return dn(e)?li(p7(e.allOf,t)):Gt(e)?or(b7(e.anyOf,t)):In(e)?w7(e,t,e.properties):Kt({})}function sd(e,t,r){const n=Nr(t)?$7(t):t,o=vr(t)?si(t):t,i=Sr(e),s=Sr(t);return Yr(e)?g7(e,o,r):Gi(t)?A7(e,t,r):i&&s?Pt("Omit",[e,n],r):!i&&s?Pt("Omit",[e,n],r):i&&!s?Pt("Omit",[e,n],r):j({...jm(e,o),...r})}function k7(e,t,r){return{[t]:sd(e,[t],Kr(r))}}function x7(e,t,r){return t.reduce((n,o)=>({...n,...k7(e,o,r)}),{})}function D7(e,t,r){return x7(e,t.keys,r)}function A7(e,t,r){const n=D7(e,t,r);return nr(n)}function E7(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=ad(e[o],t,Kr(r));return n}function C7(e,t,r){return E7(e.properties,t,r)}function F7(e,t,r){const n=C7(e,t,r);return nr(n)}function M7(e,t){return e.map(r=>_m(r,t))}function S7(e,t){return e.map(r=>_m(r,t))}function T7(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function N7(e,t,r){const n=Hr(e,[Cr,"$id","required","properties"]),o=T7(r,t);return Kt(o,n)}function P7(e){const t=e.reduce((r,n)=>xw(n)?[...r,At(n)]:r,[]);return or(t)}function _m(e,t){return dn(e)?li(M7(e.allOf,t)):Gt(e)?or(S7(e.anyOf,t)):In(e)?N7(e,t,e.properties):Kt({})}function ad(e,t,r){const n=Nr(t)?P7(t):t,o=vr(t)?si(t):t,i=Sr(e),s=Sr(t);return Yr(e)?F7(e,o,r):Gi(t)?R7(e,t,r):i&&s?Pt("Pick",[e,n],r):!i&&s?Pt("Pick",[e,n],r):i&&!s?Pt("Pick",[e,n],r):j({..._m(e,o),...r})}function I7(e,t,r){return{[t]:ad(e,[t],Kr(r))}}function O7(e,t,r){return t.reduce((n,o)=>({...n,...I7(e,o,r)}),{})}function B7(e,t,r){return O7(e,t.keys,r)}function R7(e,t,r){const n=B7(e,t,r);return nr(n)}function L7(e,t){return Pt("Partial",[Pt(e,t)])}function j7(e){return Pt("Partial",[ua(e)])}function _7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=ui(e[r]);return t}function U7(e,t){const r=Hr(e,[Cr,"$id","required","properties"]),n=_7(t);return Kt(n,r)}function Wb(e){return e.map(t=>d5(t))}function d5(e){return ta(e)?L7(e.target,e.parameters):Sr(e)?j7(e.$ref):dn(e)?li(Wb(e.allOf)):Gt(e)?or(Wb(e.anyOf)):In(e)?U7(e,e.properties):qc(e)||Bu(e)||oa(e)||Ki(e)||lm(e)||ia(e)||Lu(e)||cm(e)||ju(e)?e:Kt({})}function Um(e,t){return Yr(e)?q7(e,t):j({...d5(e),...t})}function z7(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Um(e[n],Kr(t));return r}function V7(e,t){return z7(e.properties,t)}function q7(e,t){const r=V7(e,t);return nr(r)}function W7(e,t){return Pt("Required",[Pt(e,t)])}function K7(e){return Pt("Required",[ua(e)])}function G7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Hr(e[r],[xo]);return t}function H7(e,t){const r=Hr(e,[Cr,"$id","required","properties"]),n=G7(t);return Kt(n,r)}function Kb(e){return e.map(t=>f5(t))}function f5(e){return ta(e)?W7(e.target,e.parameters):Sr(e)?K7(e.$ref):dn(e)?li(Kb(e.allOf)):Gt(e)?or(Kb(e.anyOf)):In(e)?H7(e,e.properties):qc(e)||Bu(e)||oa(e)||Ki(e)||lm(e)||ia(e)||Lu(e)||cm(e)||ju(e)?e:Kt({})}function zm(e,t){return Yr(e)?Y7(e,t):j({...f5(e),...t})}function Z7(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=zm(e[n],t);return r}function J7(e,t){return Z7(e.properties,t)}function Y7(e,t){const r=J7(e,t);return nr(r)}function X7(e,t){return t.map(r=>Sr(r)?Vm(e,r.$ref):Zr(e,r))}function Vm(e,t){return t in e?Sr(e[t])?Vm(e,e[t].$ref):Zr(e,e[t]):lt()}function Q7(e){return rd(e[0])}function eF(e){return td(e[0],e[1])}function tF(e){return Sm(e[0])}function rF(e){return Um(e[0])}function nF(e){return sd(e[0],e[1])}function oF(e){return ad(e[0],e[1])}function iF(e){return zm(e[0])}function sF(e,t,r){const n=X7(e,r);return t==="Awaited"?Q7(n):t==="Index"?eF(n):t==="KeyOf"?tF(n):t==="Partial"?rF(n):t==="Omit"?nF(n):t==="Pick"?oF(n):t==="Required"?iF(n):lt()}function aF(e,t){return km(Zr(e,t))}function uF(e,t){return xm(Zr(e,t))}function lF(e,t,r){return Dm(qu(e,t),Zr(e,r))}function cF(e,t,r){return Uu(qu(e,t),Zr(e,r))}function dF(e,t){return li(qu(e,t))}function fF(e,t){return Mm(Zr(e,t))}function hF(e,t){return Kt(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:Zr(e,t[n])}),{}))}function mF(e,t){const[r,n]=[Zr(e,u5(t)),Lm(t)],o=im(t);return o.patternProperties[n]=r,o}function gF(e,t){return Sr(t)?{...Vm(e,t.$ref),[Cr]:t[Cr]}:t}function pF(e,t){return aa(qu(e,t))}function bF(e,t){return or(qu(e,t))}function qu(e,t){return t.map(r=>Zr(e,r))}function Zr(e,t){return ni(t)?j(Zr(e,Hr(t,[xo])),t):um(t)?j(Zr(e,Hr(t,[Ou])),t):Ke(t)?j(gF(e,t),t):ea(t)?j(aF(e,t.items),t):Vc(t)?j(uF(e,t.items),t):ta(t)?j(sF(e,t.target,t.parameters)):ra(t)?j(lF(e,t.parameters,t.returns),t):na(t)?j(cF(e,t.parameters,t.returns),t):dn(t)?j(dF(e,t.allOf),t):Wc(t)?j(fF(e,t.items),t):In(t)?j(hF(e,t.properties),t):Gc(t)?j(mF(e,t)):Zi(t)?j(pF(e,t.items||[]),t):Gt(t)?j(bF(e,t.anyOf),t):t}function yF(e,t){return t in e?Zr(e,e[t]):lt()}function vF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:yF(e,r)}),{})}class wF{constructor(t){const r=vF(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:j(this.$defs[t],r)};return j({[L]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function $F(e){return new wF(e)}function kF(e,t){return j({[L]:"Not",not:e},t)}function xF(e,t){return na(e)?aa(e.parameters,t):lt()}let DF=0;function AF(e,t={}){xt(t.$id)&&(t.$id=`T${DF++}`);const r=im(e({[L]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,j({[zc]:"Recursive",...r},t)}function EF(e,t){const r=yt(e)?new globalThis.RegExp(e):e;return j({[L]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function CF(e){return dn(e)?e.allOf:Gt(e)?e.anyOf:Zi(e)?e.items??[]:[]}function FF(e){return CF(e)}function MF(e,t){return na(e)?j(e.returns,t):lt(t)}class SF{constructor(t){this.schema=t}Decode(t){return new TF(this.schema,t)}}class TF{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const i={Encode:s=>r[Cr].Encode(t(s)),Decode:s=>this.decode(r[Cr].Decode(s))};return{...r,[Cr]:i}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[Cr]:n}}Encode(t){return Ke(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function NF(e){return new SF(e)}function PF(e={}){return j({[L]:e[L]??"Unsafe"},e)}function IF(e){return j({[L]:"Void",type:"void"},e)}const OF=Object.freeze(Object.defineProperty({__proto__:null,Any:bu,Argument:N9,Array:km,AsyncIterator:xm,Awaited:rd,BigInt:Cm,Boolean:Rw,Capitalize:l7,Composite:hE,Const:pE,Constructor:Dm,ConstructorParameters:bE,Date:Hw,Enum:yE,Exclude:Om,Extends:Im,Extract:Bm,Function:Uu,Index:td,InstanceType:EC,Instantiate:XC,Integer:QC,Intersect:li,Iterator:Mm,KeyOf:Sm,Literal:At,Lowercase:c7,Mapped:OA,Module:$F,Never:lt,Not:kF,Null:Zw,Number:Qi,Object:Kt,Omit:sd,Optional:ui,Parameters:xF,Partial:Um,Pick:ad,Promise:zw,Readonly:ai,ReadonlyOptional:s5,Record:a5,Recursive:AF,Ref:ua,RegExp:EF,Required:zm,Rest:FF,ReturnType:MF,String:Oi,Symbol:Jw,TemplateLiteral:jw,Transform:NF,Tuple:aa,Uint8Array:Xw,Uncapitalize:d7,Undefined:Yw,Union:or,Unknown:nd,Unsafe:PF,Uppercase:f7,Void:IF},Symbol.toStringTag,{value:"Module"})),ze=OF;function h5(e){switch(e.errorType){case C.ArrayContains:return"Expected array to contain at least one matching value";case C.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case C.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case C.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case C.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case C.ArrayUniqueItems:return"Expected array elements to be unique";case C.Array:return"Expected array";case C.AsyncIterator:return"Expected AsyncIterator";case C.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case C.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case C.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case C.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case C.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case C.BigInt:return"Expected bigint";case C.Boolean:return"Expected boolean";case C.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case C.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case C.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case C.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case C.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case C.Date:return"Expected Date";case C.Function:return"Expected function";case C.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case C.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case C.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case C.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case C.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case C.Integer:return"Expected integer";case C.IntersectUnevaluatedProperties:return"Unexpected property";case C.Intersect:return"Expected all values to match";case C.Iterator:return"Expected Iterator";case C.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case C.Never:return"Never";case C.Not:return"Value should not match";case C.Null:return"Expected null";case C.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case C.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case C.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case C.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case C.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case C.Number:return"Expected number";case C.Object:return"Expected object";case C.ObjectAdditionalProperties:return"Unexpected property";case C.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case C.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case C.ObjectRequiredProperty:return"Expected required property";case C.Promise:return"Expected Promise";case C.RegExp:return"Expected string to match regular expression";case C.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case C.StringFormat:return`Expected string to match '${e.schema.format}' format`;case C.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case C.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case C.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case C.String:return"Expected string";case C.Symbol:return"Expected symbol";case C.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case C.Tuple:return"Expected tuple";case C.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case C.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case C.Uint8Array:return"Expected Uint8Array";case C.Undefined:return"Expected undefined";case C.Union:return"Expected union value";case C.Void:return"Expected void";case C.Kind:return`Expected kind '${e.schema[L]}'`;default:return"Unknown error type"}}let m5=h5;function BF(e){m5=e}function RF(){return m5}class LF extends rr{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function jF(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new LF(e);return hn(r,t)}function ud(e,t){return!zr(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function hn(e,t){return e[L]==="This"||e[L]==="Ref"?jF(e,t):e}class _F extends rr{constructor(t){super("Unable to hash value"),this.value=t}}var Jr;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(Jr||(Jr={}));let bs=BigInt("14695981039346656037");const[UF,zF]=[BigInt("1099511628211"),BigInt("18446744073709551616")],VF=Array.from({length:256}).map((e,t)=>BigInt(t)),g5=new Float64Array(1),p5=new DataView(g5.buffer),b5=new Uint8Array(g5.buffer);function*qF(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function WF(e){lr(Jr.Array);for(const t of e)qs(t)}function KF(e){lr(Jr.Boolean),lr(e?1:0)}function GF(e){lr(Jr.BigInt),p5.setBigInt64(0,e);for(const t of b5)lr(t)}function HF(e){lr(Jr.Date),qs(e.getTime())}function ZF(e){lr(Jr.Null)}function JF(e){lr(Jr.Number),p5.setFloat64(0,e);for(const t of b5)lr(t)}function YF(e){lr(Jr.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())qs(t),qs(e[t])}function XF(e){lr(Jr.String);for(let t=0;t<e.length;t++)for(const r of qF(e.charCodeAt(t)))lr(r)}function QF(e){lr(Jr.Symbol),qs(e.description)}function eM(e){lr(Jr.Uint8Array);for(let t=0;t<e.length;t++)lr(e[t])}function tM(e){return lr(Jr.Undefined)}function qs(e){if(Gr(e))return WF(e);if(_c(e))return KF(e);if(lo(e))return GF(e);if(sm(e))return HF(e);if(jc(e))return ZF();if(le(e))return JF(e);if(Zn(e))return YF(e);if(zr(e))return XF(e);if(Uc(e))return QF(e);if(am(e))return eM(e);if(ri(e))return tM();throw new _F(e)}function lr(e){bs=bs^VF[e],bs=bs*UF%zF}function qm(e){return bs=BigInt("14695981039346656037"),qs(e),bs}class rM extends rr{constructor(t){super("Unknown type"),this.schema=t}}function nM(e){return e[L]==="Any"||e[L]==="Unknown"}function ge(e){return e!==void 0}function oM(e,t,r){return!0}function iM(e,t,r){return!0}function sM(e,t,r){if(!Gr(r)||ge(e.minItems)&&!(r.length>=e.minItems)||ge(e.maxItems)&&!(r.length<=e.maxItems))return!1;for(const i of r)if(!Vt(e.items,t,i))return!1;if(e.uniqueItems===!0&&!(function(){const i=new Set;for(const s of r){const a=qm(s);if(i.has(a))return!1;i.add(a)}return!0})())return!1;if(!(ge(e.contains)||le(e.minContains)||le(e.maxContains)))return!0;const n=ge(e.contains)?e.contains:lt(),o=r.reduce((i,s)=>Vt(n,t,s)?i+1:i,0);return!(o===0||le(e.minContains)&&o<e.minContains||le(e.maxContains)&&o>e.maxContains)}function aM(e,t,r){return mw(r)}function uM(e,t,r){return!(!lo(r)||ge(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ge(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ge(e.maximum)&&!(r<=e.maximum)||ge(e.minimum)&&!(r>=e.minimum)||ge(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function lM(e,t,r){return _c(r)}function cM(e,t,r){return Vt(e.returns,t,r.prototype)}function dM(e,t,r){return!(!sm(r)||ge(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||ge(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||ge(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||ge(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||ge(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function fM(e,t,r){return vw(r)}function hM(e,t,r){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return Vt(o,[...t,...n],r)}function mM(e,t,r){return!(!yw(r)||ge(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ge(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ge(e.maximum)&&!(r<=e.maximum)||ge(e.minimum)&&!(r>=e.minimum)||ge(e.multipleOf)&&r%e.multipleOf!==0)}function gM(e,t,r){const n=e.allOf.every(o=>Vt(o,t,r));if(e.unevaluatedProperties===!1){const o=new RegExp(Vs(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s));return n&&i}else if(vr(e.unevaluatedProperties)){const o=new RegExp(Vs(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s)||Vt(e.unevaluatedProperties,t,r[s]));return n&&i}else return n}function pM(e,t,r){return gw(r)}function bM(e,t,r){return r===e.const}function yM(e,t,r){return!1}function vM(e,t,r){return!Vt(e.not,t,r)}function wM(e,t,r){return jc(r)}function $M(e,t,r){return!(!bt.IsNumberLike(r)||ge(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ge(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ge(e.minimum)&&!(r>=e.minimum)||ge(e.maximum)&&!(r<=e.maximum)||ge(e.multipleOf)&&r%e.multipleOf!==0)}function kM(e,t,r){if(!bt.IsObjectLike(r)||ge(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||ge(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const i=e.properties[o];if(e.required&&e.required.includes(o)){if(!Vt(i,t,r[o])||(ca(i)||nM(i))&&!(o in r))return!1}else if(bt.IsExactOptionalProperty(r,o)&&!Vt(i,t,r[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(i=>n.includes(i))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(i=>n.includes(i)||Vt(e.additionalProperties,t,r[i])):!0}function xM(e,t,r){return pw(r)}function DM(e,t,r){if(!bt.IsRecordLike(r)||ge(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||ge(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],i=new RegExp(n),s=Object.entries(r).every(([c,d])=>i.test(c)?Vt(o,t,d):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([c,d])=>i.test(c)?!0:Vt(e.additionalProperties,t,d)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(c=>i.test(c)):!0;return s&&a&&u}function AM(e,t,r){return Vt(hn(e,t),t,r)}function EM(e,t,r){const n=new RegExp(e.source,e.flags);return ge(e.minLength)&&!(r.length>=e.minLength)||ge(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function CM(e,t,r){return!zr(r)||ge(e.minLength)&&!(r.length>=e.minLength)||ge(e.maxLength)&&!(r.length<=e.maxLength)||ge(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:ge(e.format)?bm(e.format)?ym(e.format)(r):!1:!0}function FM(e,t,r){return Uc(r)}function MM(e,t,r){return zr(r)&&new RegExp(e.pattern).test(r)}function SM(e,t,r){return Vt(hn(e,t),t,r)}function TM(e,t,r){if(!Gr(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!Vt(e.items[n],t,r[n]))return!1;return!0}function NM(e,t,r){return ri(r)}function PM(e,t,r){return e.anyOf.some(n=>Vt(n,t,r))}function IM(e,t,r){return!(!am(r)||ge(e.maxByteLength)&&!(r.length<=e.maxByteLength)||ge(e.minByteLength)&&!(r.length>=e.minByteLength))}function OM(e,t,r){return!0}function BM(e,t,r){return bt.IsVoidLike(r)}function RM(e,t,r){return Yo(e[L])?$m(e[L])(e,r):!1}function Vt(e,t,r){const n=ge(e.$id)?ud(e,t):t,o=e;switch(o[L]){case"Any":return oM();case"Argument":return iM();case"Array":return sM(o,n,r);case"AsyncIterator":return aM(o,n,r);case"BigInt":return uM(o,n,r);case"Boolean":return lM(o,n,r);case"Constructor":return cM(o,n,r);case"Date":return dM(o,n,r);case"Function":return fM(o,n,r);case"Import":return hM(o,n,r);case"Integer":return mM(o,n,r);case"Intersect":return gM(o,n,r);case"Iterator":return pM(o,n,r);case"Literal":return bM(o,n,r);case"Never":return yM();case"Not":return vM(o,n,r);case"Null":return wM(o,n,r);case"Number":return $M(o,n,r);case"Object":return kM(o,n,r);case"Promise":return xM(o,n,r);case"Record":return DM(o,n,r);case"Ref":return AM(o,n,r);case"RegExp":return EM(o,n,r);case"String":return CM(o,n,r);case"Symbol":return FM(o,n,r);case"TemplateLiteral":return MM(o,n,r);case"This":return SM(o,n,r);case"Tuple":return TM(o,n,r);case"Undefined":return NM(o,n,r);case"Union":return PM(o,n,r);case"Uint8Array":return IM(o,n,r);case"Unknown":return OM();case"Void":return BM(o,n,r);default:if(!Yo(o[L]))throw new rM(o);return RM(o,n,r)}}function uc(...e){return e.length===3?Vt(e[0],e[1],e[2]):Vt(e[0],[],e[1])}var C;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(C||(C={}));class LM extends rr{constructor(t){super("Unknown type"),this.schema=t}}function so(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function me(e){return e!==void 0}class y5{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function z(e,t,r,n,o=[]){return{type:e,schema:t,path:r,value:n,message:RF()({errorType:e,path:r,schema:t,value:n,errors:o}),errors:o}}function*jM(e,t,r,n){}function*_M(e,t,r,n){}function*UM(e,t,r,n){if(!Gr(n))return yield z(C.Array,e,r,n);me(e.minItems)&&!(n.length>=e.minItems)&&(yield z(C.ArrayMinItems,e,r,n)),me(e.maxItems)&&!(n.length<=e.maxItems)&&(yield z(C.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*qt(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const u=qm(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield z(C.ArrayUniqueItems,e,r,n)),!(me(e.contains)||me(e.minContains)||me(e.maxContains)))return;const o=me(e.contains)?e.contains:lt(),i=n.reduce((s,a,u)=>qt(o,t,`${r}${u}`,a).next().done===!0?s+1:s,0);i===0&&(yield z(C.ArrayContains,e,r,n)),le(e.minContains)&&i<e.minContains&&(yield z(C.ArrayMinContains,e,r,n)),le(e.maxContains)&&i>e.maxContains&&(yield z(C.ArrayMaxContains,e,r,n))}function*zM(e,t,r,n){mw(n)||(yield z(C.AsyncIterator,e,r,n))}function*VM(e,t,r,n){if(!lo(n))return yield z(C.BigInt,e,r,n);me(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield z(C.BigIntExclusiveMaximum,e,r,n)),me(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield z(C.BigIntExclusiveMinimum,e,r,n)),me(e.maximum)&&!(n<=e.maximum)&&(yield z(C.BigIntMaximum,e,r,n)),me(e.minimum)&&!(n>=e.minimum)&&(yield z(C.BigIntMinimum,e,r,n)),me(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield z(C.BigIntMultipleOf,e,r,n))}function*qM(e,t,r,n){_c(n)||(yield z(C.Boolean,e,r,n))}function*WM(e,t,r,n){yield*qt(e.returns,t,r,n.prototype)}function*KM(e,t,r,n){if(!sm(n))return yield z(C.Date,e,r,n);me(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield z(C.DateExclusiveMaximumTimestamp,e,r,n)),me(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield z(C.DateExclusiveMinimumTimestamp,e,r,n)),me(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield z(C.DateMaximumTimestamp,e,r,n)),me(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield z(C.DateMinimumTimestamp,e,r,n)),me(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield z(C.DateMultipleOfTimestamp,e,r,n))}function*GM(e,t,r,n){vw(n)||(yield z(C.Function,e,r,n))}function*HM(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];yield*qt(i,[...t,...o],r,n)}function*ZM(e,t,r,n){if(!yw(n))return yield z(C.Integer,e,r,n);me(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield z(C.IntegerExclusiveMaximum,e,r,n)),me(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield z(C.IntegerExclusiveMinimum,e,r,n)),me(e.maximum)&&!(n<=e.maximum)&&(yield z(C.IntegerMaximum,e,r,n)),me(e.minimum)&&!(n>=e.minimum)&&(yield z(C.IntegerMinimum,e,r,n)),me(e.multipleOf)&&n%e.multipleOf!==0&&(yield z(C.IntegerMultipleOf,e,r,n))}function*JM(e,t,r,n){let o=!1;for(const i of e.allOf)for(const s of qt(i,t,r,n))o=!0,yield s;if(o)return yield z(C.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const i=new RegExp(Vs(e));for(const s of Object.getOwnPropertyNames(n))i.test(s)||(yield z(C.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const i=new RegExp(Vs(e));for(const s of Object.getOwnPropertyNames(n))if(!i.test(s)){const a=qt(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*YM(e,t,r,n){gw(n)||(yield z(C.Iterator,e,r,n))}function*XM(e,t,r,n){n!==e.const&&(yield z(C.Literal,e,r,n))}function*QM(e,t,r,n){yield z(C.Never,e,r,n)}function*eS(e,t,r,n){qt(e.not,t,r,n).next().done===!0&&(yield z(C.Not,e,r,n))}function*tS(e,t,r,n){jc(n)||(yield z(C.Null,e,r,n))}function*rS(e,t,r,n){if(!bt.IsNumberLike(n))return yield z(C.Number,e,r,n);me(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield z(C.NumberExclusiveMaximum,e,r,n)),me(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield z(C.NumberExclusiveMinimum,e,r,n)),me(e.maximum)&&!(n<=e.maximum)&&(yield z(C.NumberMaximum,e,r,n)),me(e.minimum)&&!(n>=e.minimum)&&(yield z(C.NumberMinimum,e,r,n)),me(e.multipleOf)&&n%e.multipleOf!==0&&(yield z(C.NumberMultipleOf,e,r,n))}function*nS(e,t,r,n){if(!bt.IsObjectLike(n))return yield z(C.Object,e,r,n);me(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield z(C.ObjectMinProperties,e,r,n)),me(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield z(C.ObjectMaxProperties,e,r,n));const o=Array.isArray(e.required)?e.required:[],i=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of o)s.includes(a)||(yield z(C.ObjectRequiredProperty,e.properties[a],`${r}/${so(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)i.includes(a)||(yield z(C.ObjectAdditionalProperties,e,`${r}/${so(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)i.includes(a)||(yield*qt(e.additionalProperties,t,`${r}/${so(a)}`,n[a]));for(const a of i){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*qt(u,t,`${r}/${so(a)}`,n[a]),ca(e)&&!(a in n)&&(yield z(C.ObjectRequiredProperty,u,`${r}/${so(a)}`,void 0))):bt.IsExactOptionalProperty(n,a)&&(yield*qt(u,t,`${r}/${so(a)}`,n[a]))}}function*oS(e,t,r,n){pw(n)||(yield z(C.Promise,e,r,n))}function*iS(e,t,r,n){if(!bt.IsRecordLike(n))return yield z(C.Object,e,r,n);me(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield z(C.ObjectMinProperties,e,r,n)),me(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield z(C.ObjectMaxProperties,e,r,n));const[o,i]=Object.entries(e.patternProperties)[0],s=new RegExp(o);for(const[a,u]of Object.entries(n))s.test(a)&&(yield*qt(i,t,`${r}/${so(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(n))s.test(a)||(yield*qt(e.additionalProperties,t,`${r}/${so(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(n))if(!s.test(a))return yield z(C.ObjectAdditionalProperties,e,`${r}/${so(a)}`,u)}}function*sS(e,t,r,n){yield*qt(hn(e,t),t,r,n)}function*aS(e,t,r,n){if(!zr(n))return yield z(C.String,e,r,n);if(me(e.minLength)&&!(n.length>=e.minLength)&&(yield z(C.StringMinLength,e,r,n)),me(e.maxLength)&&!(n.length<=e.maxLength)&&(yield z(C.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield z(C.RegExp,e,r,n)}function*uS(e,t,r,n){if(!zr(n))return yield z(C.String,e,r,n);me(e.minLength)&&!(n.length>=e.minLength)&&(yield z(C.StringMinLength,e,r,n)),me(e.maxLength)&&!(n.length<=e.maxLength)&&(yield z(C.StringMaxLength,e,r,n)),zr(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield z(C.StringPattern,e,r,n))),zr(e.format)&&(bm(e.format)?ym(e.format)(n)||(yield z(C.StringFormat,e,r,n)):yield z(C.StringFormatUnknown,e,r,n))}function*lS(e,t,r,n){Uc(n)||(yield z(C.Symbol,e,r,n))}function*cS(e,t,r,n){if(!zr(n))return yield z(C.String,e,r,n);new RegExp(e.pattern).test(n)||(yield z(C.StringPattern,e,r,n))}function*dS(e,t,r,n){yield*qt(hn(e,t),t,r,n)}function*fS(e,t,r,n){if(!Gr(n))return yield z(C.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield z(C.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield z(C.TupleLength,e,r,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*qt(e.items[o],t,`${r}/${o}`,n[o])}function*hS(e,t,r,n){ri(n)||(yield z(C.Undefined,e,r,n))}function*mS(e,t,r,n){if(uc(e,t,n))return;const o=e.anyOf.map(i=>new y5(qt(i,t,r,n)));yield z(C.Union,e,r,n,o)}function*gS(e,t,r,n){if(!am(n))return yield z(C.Uint8Array,e,r,n);me(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield z(C.Uint8ArrayMaxByteLength,e,r,n)),me(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield z(C.Uint8ArrayMinByteLength,e,r,n))}function*pS(e,t,r,n){}function*bS(e,t,r,n){bt.IsVoidLike(n)||(yield z(C.Void,e,r,n))}function*yS(e,t,r,n){$m(e[L])(e,n)||(yield z(C.Kind,e,r,n))}function*qt(e,t,r,n){const o=me(e.$id)?[...t,e]:t,i=e;switch(i[L]){case"Any":return yield*jM();case"Argument":return yield*_M();case"Array":return yield*UM(i,o,r,n);case"AsyncIterator":return yield*zM(i,o,r,n);case"BigInt":return yield*VM(i,o,r,n);case"Boolean":return yield*qM(i,o,r,n);case"Constructor":return yield*WM(i,o,r,n);case"Date":return yield*KM(i,o,r,n);case"Function":return yield*GM(i,o,r,n);case"Import":return yield*HM(i,o,r,n);case"Integer":return yield*ZM(i,o,r,n);case"Intersect":return yield*JM(i,o,r,n);case"Iterator":return yield*YM(i,o,r,n);case"Literal":return yield*XM(i,o,r,n);case"Never":return yield*QM(i,o,r,n);case"Not":return yield*eS(i,o,r,n);case"Null":return yield*tS(i,o,r,n);case"Number":return yield*rS(i,o,r,n);case"Object":return yield*nS(i,o,r,n);case"Promise":return yield*oS(i,o,r,n);case"Record":return yield*iS(i,o,r,n);case"Ref":return yield*sS(i,o,r,n);case"RegExp":return yield*aS(i,o,r,n);case"String":return yield*uS(i,o,r,n);case"Symbol":return yield*lS(i,o,r,n);case"TemplateLiteral":return yield*cS(i,o,r,n);case"This":return yield*dS(i,o,r,n);case"Tuple":return yield*fS(i,o,r,n);case"Undefined":return yield*hS(i,o,r,n);case"Union":return yield*mS(i,o,r,n);case"Uint8Array":return yield*gS(i,o,r,n);case"Unknown":return yield*pS();case"Void":return yield*bS(i,o,r,n);default:if(!Yo(i[L]))throw new LM(e);return yield*yS(i,o,r,n)}}function vS(...e){const t=e.length===3?qt(e[0],e[1],"",e[2]):qt(e[0],[],"",e[1]);return new y5(t)}class wS extends rr{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class $S extends rr{constructor(t,r,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=o}}function Qe(e,t,r){try{return Ke(e)?e[Cr].Decode(r):r}catch(n){throw new $S(e,t,r,n)}}function kS(e,t,r,n){return Gr(n)?Qe(e,r,n.map((o,i)=>On(e.items,t,`${r}/${i}`,o))):Qe(e,r,n)}function xS(e,t,r,n){if(!Zn(n)||ww(n))return Qe(e,r,n);const o=Gw(e),i=o.map(d=>d[0]),s={...n};for(const[d,f]of o)d in s&&(s[d]=On(f,t,`${r}/${d}`,s[d]));if(!Ke(e.unevaluatedProperties))return Qe(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,c={...s};for(const d of a)i.includes(d)||(c[d]=Qe(u,`${r}/${d}`,c[d]));return Qe(e,r,c)}function DS(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=On(i,[...t,...o],r,n);return Qe(e,r,s)}function AS(e,t,r,n){return Qe(e,r,On(e.not,t,r,n))}function ES(e,t,r,n){if(!Zn(n))return Qe(e,r,n);const o=es(e),i={...n};for(const c of o)bw(i,c)&&(ri(i[c])&&(!ju(e.properties[c])||bt.IsExactOptionalProperty(i,c))||(i[c]=On(e.properties[c],t,`${r}/${c}`,i[c])));if(!vr(e.additionalProperties))return Qe(e,r,i);const s=Object.getOwnPropertyNames(i),a=e.additionalProperties,u={...i};for(const c of s)o.includes(c)||(u[c]=Qe(a,`${r}/${c}`,u[c]));return Qe(e,r,u)}function CS(e,t,r,n){if(!Zn(n))return Qe(e,r,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],i=new RegExp(o),s={...n};for(const d of Object.getOwnPropertyNames(n))i.test(d)&&(s[d]=On(e.patternProperties[o],t,`${r}/${d}`,s[d]));if(!vr(e.additionalProperties))return Qe(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,c={...s};for(const d of a)i.test(d)||(c[d]=Qe(u,`${r}/${d}`,c[d]));return Qe(e,r,c)}function FS(e,t,r,n){const o=hn(e,t);return Qe(e,r,On(o,t,r,n))}function MS(e,t,r,n){const o=hn(e,t);return Qe(e,r,On(o,t,r,n))}function SS(e,t,r,n){return Gr(n)&&Gr(e.items)?Qe(e,r,e.items.map((o,i)=>On(o,t,`${r}/${i}`,n[i]))):Qe(e,r,n)}function TS(e,t,r,n){for(const o of e.anyOf){if(!uc(o,t,n))continue;const i=On(o,t,r,n);return Qe(e,r,i)}return Qe(e,r,n)}function On(e,t,r,n){const o=ud(e,t),i=e;switch(e[L]){case"Array":return kS(i,o,r,n);case"Import":return DS(i,o,r,n);case"Intersect":return xS(i,o,r,n);case"Not":return AS(i,o,r,n);case"Object":return ES(i,o,r,n);case"Record":return CS(i,o,r,n);case"Ref":return FS(i,o,r,n);case"Symbol":return Qe(i,r,n);case"This":return MS(i,o,r,n);case"Tuple":return SS(i,o,r,n);case"Union":return TS(i,o,r,n);default:return Qe(i,r,n)}}function NS(e,t,r){return On(e,t,"",r)}class PS extends rr{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class IS extends rr{constructor(t,r,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=o}}function Qt(e,t,r){try{return Ke(e)?e[Cr].Encode(r):r}catch(n){throw new IS(e,t,r,n)}}function OS(e,t,r,n){const o=Qt(e,r,n);return Gr(o)?o.map((i,s)=>Nn(e.items,t,`${r}/${s}`,i)):o}function BS(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=Qt(e,r,n);return Nn(i,[...t,...o],r,s)}function RS(e,t,r,n){const o=Qt(e,r,n);if(!Zn(n)||ww(n))return o;const i=Gw(e),s=i.map(f=>f[0]),a={...o};for(const[f,h]of i)f in a&&(a[f]=Nn(h,t,`${r}/${f}`,a[f]));if(!Ke(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),c=e.unevaluatedProperties,d={...a};for(const f of u)s.includes(f)||(d[f]=Qt(c,`${r}/${f}`,d[f]));return d}function LS(e,t,r,n){return Qt(e.not,r,Qt(e,r,n))}function jS(e,t,r,n){const o=Qt(e,r,n);if(!Zn(o))return o;const i=es(e),s={...o};for(const d of i)bw(s,d)&&(ri(s[d])&&(!ju(e.properties[d])||bt.IsExactOptionalProperty(s,d))||(s[d]=Nn(e.properties[d],t,`${r}/${d}`,s[d])));if(!vr(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,c={...s};for(const d of a)i.includes(d)||(c[d]=Qt(u,`${r}/${d}`,c[d]));return c}function _S(e,t,r,n){const o=Qt(e,r,n);if(!Zn(n))return o;const i=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(i),a={...o};for(const f of Object.getOwnPropertyNames(n))s.test(f)&&(a[f]=Nn(e.patternProperties[i],t,`${r}/${f}`,a[f]));if(!vr(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),c=e.additionalProperties,d={...a};for(const f of u)s.test(f)||(d[f]=Qt(c,`${r}/${f}`,d[f]));return d}function US(e,t,r,n){const o=hn(e,t),i=Nn(o,t,r,n);return Qt(e,r,i)}function zS(e,t,r,n){const o=hn(e,t),i=Nn(o,t,r,n);return Qt(e,r,i)}function VS(e,t,r,n){const o=Qt(e,r,n);return Gr(e.items)?e.items.map((i,s)=>Nn(i,t,`${r}/${s}`,o[s])):[]}function qS(e,t,r,n){for(const o of e.anyOf){if(!uc(o,t,n))continue;const i=Nn(o,t,r,n);return Qt(e,r,i)}for(const o of e.anyOf){const i=Nn(o,t,r,n);if(uc(e,t,i))return Qt(e,r,i)}return Qt(e,r,n)}function Nn(e,t,r,n){const o=ud(e,t),i=e;switch(e[L]){case"Array":return OS(i,o,r,n);case"Import":return BS(i,o,r,n);case"Intersect":return RS(i,o,r,n);case"Not":return LS(i,o,r,n);case"Object":return jS(i,o,r,n);case"Record":return _S(i,o,r,n);case"Ref":return US(i,o,r,n);case"This":return zS(i,o,r,n);case"Tuple":return VS(i,o,r,n);case"Union":return qS(i,o,r,n);default:return Qt(i,r,n)}}function WS(e,t,r){return Nn(e,t,"",r)}function KS(e,t){return Ke(e)||It(e.items,t)}function GS(e,t){return Ke(e)||It(e.items,t)}function HS(e,t){return Ke(e)||It(e.returns,t)||e.parameters.some(r=>It(r,t))}function ZS(e,t){return Ke(e)||It(e.returns,t)||e.parameters.some(r=>It(r,t))}function JS(e,t){return Ke(e)||Ke(e.unevaluatedProperties)||e.allOf.some(r=>It(r,t))}function YS(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,i)=>[...o,e.$defs[i]],[]),n=e.$defs[e.$ref];return Ke(e)||It(n,[...r,...t])}function XS(e,t){return Ke(e)||It(e.items,t)}function QS(e,t){return Ke(e)||It(e.not,t)}function eT(e,t){return Ke(e)||Object.values(e.properties).some(r=>It(r,t))||vr(e.additionalProperties)&&It(e.additionalProperties,t)}function tT(e,t){return Ke(e)||It(e.item,t)}function rT(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return Ke(e)||It(n,t)||vr(e.additionalProperties)&&Ke(e.additionalProperties)}function nT(e,t){return Ke(e)?!0:It(hn(e,t),t)}function oT(e,t){return Ke(e)?!0:It(hn(e,t),t)}function iT(e,t){return Ke(e)||!ri(e.items)&&e.items.some(r=>It(r,t))}function sT(e,t){return Ke(e)||e.anyOf.some(r=>It(r,t))}function It(e,t){const r=ud(e,t),n=e;if(e.$id&&R0.has(e.$id))return!1;switch(e.$id&&R0.add(e.$id),e[L]){case"Array":return KS(n,r);case"AsyncIterator":return GS(n,r);case"Constructor":return HS(n,r);case"Function":return ZS(n,r);case"Import":return YS(n,r);case"Intersect":return JS(n,r);case"Iterator":return XS(n,r);case"Not":return QS(n,r);case"Object":return eT(n,r);case"Promise":return tT(n,r);case"Record":return rT(n,r);case"Ref":return nT(n,r);case"This":return oT(n,r);case"Tuple":return iT(n,r);case"Union":return sT(n,r);default:return Ke(e)}}const R0=new Set;function aT(e,t){return R0.clear(),It(e,t)}class uT{constructor(t,r,n,o){this.schema=t,this.references=r,this.checkFunc=n,this.code=o,this.hasTransform=aT(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return vS(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new wS(this.schema,t,this.Errors(t).First());return this.hasTransform?NS(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?WS(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new PS(this.schema,t,this.Errors(t).First());return r}}var co;(function(e){function t(i){return i===36}e.DollarSign=t;function r(i){return i===95}e.IsUnderscore=r;function n(i){return i>=65&&i<=90||i>=97&&i<=122}e.IsAlpha=n;function o(i){return i>=48&&i<=57}e.IsNumeric=o})(co||(co={}));var lc;(function(e){function t(i){return i.length===0?!1:co.IsNumeric(i.charCodeAt(0))}function r(i){if(t(i))return!1;for(let s=0;s<i.length;s++){const a=i.charCodeAt(s);if(!(co.IsAlpha(a)||co.IsNumeric(a)||co.DollarSign(a)||co.IsUnderscore(a)))return!1}return!0}function n(i){return i.replace(/'/g,"\\'")}function o(i,s){return r(s)?`${i}.${s}`:`${i}['${n(s)}']`}e.Encode=o})(lc||(lc={}));var L0;(function(e){function t(r){const n=[];for(let o=0;o<r.length;o++){const i=r.charCodeAt(o);co.IsNumeric(i)||co.IsAlpha(i)?n.push(r.charAt(o)):n.push(`_${i}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(L0||(L0={}));var j0;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(j0||(j0={}));class lT extends rr{constructor(t){super("Unknown type"),this.schema=t}}class Gb extends rr{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var vi;(function(e){function t(s,a,u){return bt.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${lc.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function r(s){return bt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return bt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function o(s){return bt.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=o;function i(s){return bt.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=i})(vi||(vi={}));var Ha;(function(e){function t(w){return w[L]==="Any"||w[L]==="Unknown"}function*r(w,W,D){yield"true"}function*n(w,W,D){yield"true"}function*o(w,W,D){yield`Array.isArray(${D})`;const[ee,H]=[mn("value","any"),mn("acc","number")];le(w.maxItems)&&(yield`${D}.length <= ${w.maxItems}`),le(w.minItems)&&(yield`${D}.length >= ${w.minItems}`);const Z=Tt(w.items,W,"value");if(yield`((array) => { for(const ${ee} of array) if(!(${Z})) { return false }; return true; })(${D})`,st(w.contains)||le(w.minContains)||le(w.maxContains)){const Ue=st(w.contains)?w.contains:lt(),wr=Tt(Ue,W,"value"),eo=le(w.minContains)?[`(count >= ${w.minContains})`]:[],gn=le(w.maxContains)?[`(count <= ${w.maxContains})`]:[],Ln=`const count = value.reduce((${H}, ${ee}) => ${wr} ? acc + 1 : acc, 0)`,Xu=["(count > 0)",...eo,...gn].join(" && ");yield`((${ee}) => { ${Ln}; return ${Xu}})(${D})`}w.uniqueItems===!0&&(yield`((${ee}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${D})`)}function*i(w,W,D){yield`(typeof value === 'object' && Symbol.asyncIterator in ${D})`}function*s(w,W,D){yield`(typeof ${D} === 'bigint')`,lo(w.exclusiveMaximum)&&(yield`${D} < BigInt(${w.exclusiveMaximum})`),lo(w.exclusiveMinimum)&&(yield`${D} > BigInt(${w.exclusiveMinimum})`),lo(w.maximum)&&(yield`${D} <= BigInt(${w.maximum})`),lo(w.minimum)&&(yield`${D} >= BigInt(${w.minimum})`),lo(w.multipleOf)&&(yield`(${D} % BigInt(${w.multipleOf})) === 0`)}function*a(w,W,D){yield`(typeof ${D} === 'boolean')`}function*u(w,W,D){yield*Ht(w.returns,W,`${D}.prototype`)}function*c(w,W,D){yield`(${D} instanceof Date) && Number.isFinite(${D}.getTime())`,le(w.exclusiveMaximumTimestamp)&&(yield`${D}.getTime() < ${w.exclusiveMaximumTimestamp}`),le(w.exclusiveMinimumTimestamp)&&(yield`${D}.getTime() > ${w.exclusiveMinimumTimestamp}`),le(w.maximumTimestamp)&&(yield`${D}.getTime() <= ${w.maximumTimestamp}`),le(w.minimumTimestamp)&&(yield`${D}.getTime() >= ${w.minimumTimestamp}`),le(w.multipleOfTimestamp)&&(yield`(${D}.getTime() % ${w.multipleOfTimestamp}) === 0`)}function*d(w,W,D){yield`(typeof ${D} === 'function')`}function*f(w,W,D){const ee=globalThis.Object.getOwnPropertyNames(w.$defs).reduce((H,Z)=>[...H,w.$defs[Z]],[]);yield*Ht(ua(w.$ref),[...W,...ee],D)}function*h(w,W,D){yield`Number.isInteger(${D})`,le(w.exclusiveMaximum)&&(yield`${D} < ${w.exclusiveMaximum}`),le(w.exclusiveMinimum)&&(yield`${D} > ${w.exclusiveMinimum}`),le(w.maximum)&&(yield`${D} <= ${w.maximum}`),le(w.minimum)&&(yield`${D} >= ${w.minimum}`),le(w.multipleOf)&&(yield`(${D} % ${w.multipleOf}) === 0`)}function*m(w,W,D){const ee=w.allOf.map(H=>Tt(H,W,D)).join(" && ");if(w.unevaluatedProperties===!1){const H=ir(`${new RegExp(Vs(w))};`),Z=`Object.getOwnPropertyNames(${D}).every(key => ${H}.test(key))`;yield`(${ee} && ${Z})`}else if(st(w.unevaluatedProperties)){const H=ir(`${new RegExp(Vs(w))};`),Z=`Object.getOwnPropertyNames(${D}).every(key => ${H}.test(key) || ${Tt(w.unevaluatedProperties,W,`${D}[key]`)})`;yield`(${ee} && ${Z})`}else yield`(${ee})`}function*y(w,W,D){yield`(typeof value === 'object' && Symbol.iterator in ${D})`}function*$(w,W,D){typeof w.const=="number"||typeof w.const=="boolean"?yield`(${D} === ${w.const})`:yield`(${D} === '${j0.Escape(w.const)}')`}function*k(w,W,D){yield"false"}function*x(w,W,D){yield`(!${Tt(w.not,W,D)})`}function*E(w,W,D){yield`(${D} === null)`}function*N(w,W,D){yield vi.IsNumberLike(D),le(w.exclusiveMaximum)&&(yield`${D} < ${w.exclusiveMaximum}`),le(w.exclusiveMinimum)&&(yield`${D} > ${w.exclusiveMinimum}`),le(w.maximum)&&(yield`${D} <= ${w.maximum}`),le(w.minimum)&&(yield`${D} >= ${w.minimum}`),le(w.multipleOf)&&(yield`(${D} % ${w.multipleOf}) === 0`)}function*R(w,W,D){yield vi.IsObjectLike(D),le(w.minProperties)&&(yield`Object.getOwnPropertyNames(${D}).length >= ${w.minProperties}`),le(w.maxProperties)&&(yield`Object.getOwnPropertyNames(${D}).length <= ${w.maxProperties}`);const ee=Object.getOwnPropertyNames(w.properties);for(const H of ee){const Z=lc.Encode(D,H),Ue=w.properties[H];if(w.required&&w.required.includes(H))yield*Ht(Ue,W,Z),(ca(Ue)||t(Ue))&&(yield`('${H}' in ${D})`);else{const wr=Tt(Ue,W,Z);yield vi.IsExactOptionalProperty(D,H,wr)}}if(w.additionalProperties===!1)if(w.required&&w.required.length===ee.length)yield`Object.getOwnPropertyNames(${D}).length === ${ee.length}`;else{const H=`[${ee.map(Z=>`'${Z}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${D}).every(key => ${H}.includes(key))`}if(typeof w.additionalProperties=="object"){const H=Tt(w.additionalProperties,W,`${D}[key]`),Z=`[${ee.map(Ue=>`'${Ue}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${D}).every(key => ${Z}.includes(key) || ${H}))`}}function*q(w,W,D){yield`${D} instanceof Promise`}function*ie(w,W,D){yield vi.IsRecordLike(D),le(w.minProperties)&&(yield`Object.getOwnPropertyNames(${D}).length >= ${w.minProperties}`),le(w.maxProperties)&&(yield`Object.getOwnPropertyNames(${D}).length <= ${w.maxProperties}`);const[ee,H]=Object.entries(w.patternProperties)[0],Z=ir(`${new RegExp(ee)}`),Ue=Tt(H,W,"value"),wr=st(w.additionalProperties)?Tt(w.additionalProperties,W,D):w.additionalProperties===!1?"false":"true",eo=`(${Z}.test(key) ? ${Ue} : ${wr})`;yield`(Object.entries(${D}).every(([key, value]) => ${eo}))`}function*De(w,W,D){const ee=hn(w,W);if(Le.functions.has(w.$ref))return yield`${en(w.$ref)}(${D})`;yield*Ht(ee,W,D)}function*de(w,W,D){const ee=ir(`${new RegExp(w.source,w.flags)};`);yield`(typeof ${D} === 'string')`,le(w.maxLength)&&(yield`${D}.length <= ${w.maxLength}`),le(w.minLength)&&(yield`${D}.length >= ${w.minLength}`),yield`${ee}.test(${D})`}function*$e(w,W,D){yield`(typeof ${D} === 'string')`,le(w.maxLength)&&(yield`${D}.length <= ${w.maxLength}`),le(w.minLength)&&(yield`${D}.length >= ${w.minLength}`),w.pattern!==void 0&&(yield`${ir(`${new RegExp(w.pattern)};`)}.test(${D})`),w.format!==void 0&&(yield`format('${w.format}', ${D})`)}function*Ge(w,W,D){yield`(typeof ${D} === 'symbol')`}function*He(w,W,D){yield`(typeof ${D} === 'string')`,yield`${ir(`${new RegExp(w.pattern)};`)}.test(${D})`}function*St(w,W,D){yield`${en(w.$ref)}(${D})`}function*Pr(w,W,D){if(yield`Array.isArray(${D})`,w.items===void 0)return yield`${D}.length === 0`;yield`(${D}.length === ${w.maxItems})`;for(let ee=0;ee<w.items.length;ee++)yield`${Tt(w.items[ee],W,`${D}[${ee}]`)}`}function*hr(w,W,D){yield`${D} === undefined`}function*Xn(w,W,D){yield`(${w.anyOf.map(H=>Tt(H,W,D)).join(" || ")})`}function*Rt(w,W,D){yield`${D} instanceof Uint8Array`,le(w.maxByteLength)&&(yield`(${D}.length <= ${w.maxByteLength})`),le(w.minByteLength)&&(yield`(${D}.length >= ${w.minByteLength})`)}function*Rn(w,W,D){yield"true"}function*Qn(w,W,D){yield vi.IsVoidLike(D)}function*Qr(w,W,D){const ee=Le.instances.size;Le.instances.set(ee,w),yield`kind('${w[L]}', ${ee}, ${D})`}function*Ht(w,W,D,ee=!0){const H=zr(w.$id)?[...W,w]:W,Z=w;if(ee&&zr(w.$id)){const Ue=en(w.$id);if(Le.functions.has(Ue))return yield`${Ue}(${D})`;{Le.functions.set(Ue,"<deferred>");const wr=tn(Ue,w,W,"value",!1);return Le.functions.set(Ue,wr),yield`${Ue}(${D})`}}switch(Z[L]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*o(Z,H,D);case"AsyncIterator":return yield*i(Z,H,D);case"BigInt":return yield*s(Z,H,D);case"Boolean":return yield*a(Z,H,D);case"Constructor":return yield*u(Z,H,D);case"Date":return yield*c(Z,H,D);case"Function":return yield*d(Z,H,D);case"Import":return yield*f(Z,H,D);case"Integer":return yield*h(Z,H,D);case"Intersect":return yield*m(Z,H,D);case"Iterator":return yield*y(Z,H,D);case"Literal":return yield*$(Z,H,D);case"Never":return yield*k();case"Not":return yield*x(Z,H,D);case"Null":return yield*E(Z,H,D);case"Number":return yield*N(Z,H,D);case"Object":return yield*R(Z,H,D);case"Promise":return yield*q(Z,H,D);case"Record":return yield*ie(Z,H,D);case"Ref":return yield*De(Z,H,D);case"RegExp":return yield*de(Z,H,D);case"String":return yield*$e(Z,H,D);case"Symbol":return yield*Ge(Z,H,D);case"TemplateLiteral":return yield*He(Z,H,D);case"This":return yield*St(Z,H,D);case"Tuple":return yield*Pr(Z,H,D);case"Undefined":return yield*hr(Z,H,D);case"Union":return yield*Xn(Z,H,D);case"Uint8Array":return yield*Rt(Z,H,D);case"Unknown":return yield*Rn();case"Void":return yield*Qn(Z,H,D);default:if(!Yo(Z[L]))throw new lT(w);return yield*Qr(Z,H,D)}}const Le={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Tt(w,W,D,ee=!0){return`(${[...Ht(w,W,D,ee)].join(" && ")})`}function en(w){return`check_${L0.Encode(w)}`}function ir(w){const W=`local_${Le.variables.size}`;return Le.variables.set(W,`const ${W} = ${w}`),W}function tn(w,W,D,ee,H=!0){const[Z,Ue]=[`
`,Ln=>"".padStart(Ln," ")],wr=mn("value","any"),eo=Co("boolean"),gn=[...Ht(W,D,ee,H)].map(Ln=>`${Ue(4)}${Ln}`).join(` &&${Z}`);return`function ${w}(${wr})${eo} {${Z}${Ue(2)}return (${Z}${gn}${Z}${Ue(2)})
}`}function mn(w,W){const D=Le.language==="typescript"?`: ${W}`:"";return`${w}${D}`}function Co(w){return Le.language==="typescript"?`: ${w}`:""}function Yu(w,W,D){const ee=tn("check",w,W,"value"),H=mn("value","any"),Z=Co("boolean"),Ue=[...Le.functions.values()],wr=[...Le.variables.values()],eo=zr(w.$id)?`return function check(${H})${Z} {
  return ${en(w.$id)}(value)
}`:`return ${ee}`;return[...wr,...Ue,eo].join(`
`)}function os(...w){const W={language:"javascript"},[D,ee,H]=w.length===2&&Gr(w[1])?[w[0],w[1],W]:w.length===2&&!Gr(w[1])?[w[0],[],w[1]]:w.length===3?[w[0],w[1],w[2]]:w.length===1?[w[0],[],W]:[null,[],W];if(Le.language=H.language,Le.variables.clear(),Le.functions.clear(),Le.instances.clear(),!st(D))throw new Gb(D);for(const Z of ee)if(!st(Z))throw new Gb(Z);return Yu(D,ee)}e.Code=os;function G$(w,W=[]){const D=os(w,W,{language:"javascript"}),ee=globalThis.Function("kind","format","hash",D),H=new Map(Le.instances);function Z(gn,Ln,Xu){if(!Yo(gn)||!H.has(Ln))return!1;const H$=$m(gn),Z$=H.get(Ln);return H$(Z$,Xu)}function Ue(gn,Ln){return bm(gn)?ym(gn)(Ln):!1}function wr(gn){return qm(gn)}const eo=ee(Z,Ue,wr);return new uT(w,W,eo,D)}e.Compile=G$})(Ha||(Ha={}));const _0={};function v5(e,t){e in _0||(_0[e]=t)}let Hb=!1;function cT(){Hb||(Hb=!0,BF(e=>(_0[e.schema[L]]||h5)(e)))}const U0=Symbol.for("object-shape-tester.shape-identifier");function Ne(e){if(cT(),Wm(e))return e;const t=z0(e),r=wi(t,!1),n=wi(t,!0),o={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:Ha.Compile(t),$_compiledSchemaNoExtraKeys:Ha.Compile(r),$_compiledSchemaExtraKeys:Ha.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[U0]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}function Wm(e){return F.hasKey(e,U0)&&!!e[U0]}function Km(e){return F.hasKey(e,L)}function wi(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>wi(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>wi(n,t))),Km(e.items)?r.items=wi(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>wi(n,t))),F.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,i])=>{n[o]=wi(i,t)}),r.properties=n}return r.additionalProperties=t,r}function z0(e){if(Km(e))return e;if(Wm(e))return e.$_schema;if(F.isFunction(e))return ze.Function([],ze.Any(),{default:e});if(F.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,o])=>{const i=z0(o);r[n]=i,t[n]=i.default}),ze.Object(r,{default:t})}else{if(F.isArray(e))return ze.Array(ze.Union(e.map(t=>z0(t))),{default:[]});if(F.isPrimitive(e)){if(F.isString(e))return ze.String({default:e});if(F.isNumber(e))return ze.Number({default:e});if(F.isBoolean(e))return ze.Boolean({default:e});if(F.isSymbol(e))return ze.Symbol({default:e});if(F.isNull(e))return ze.Null({default:null});if(F.isUndefined(e))return ze.Undefined({default:void 0});if(F.isBigInt(e))return ze.BigInt({default:e});Dt.tsType(e).equals(),Dt.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${v(e)}`)}}function dT({checkValue:e,default:t,name:r}){return Yo(r)||wm(r,(n,o)=>e(o)),(n=t)=>Ne(ze.Unsafe({[L]:r,default:n}))}function Bi(e,t){const r=Br(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return Ne(ze.Union(r.map(n=>ze.Literal(n)),{default:t??r[0]}))}function be(e){return F.isSymbol(e)?fT(e):Ne(ze.Const(e,{default:e}))}const pl="ExactSymbol";function fT(e){return Yo(pl)||wm(pl,(t,r)=>r===t.symbol),v5(pl,({schema:t})=>`Expected symbol ${t.symbol?.description?W3({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Ne(ze.Unsafe({[L]:pl,symbol:e,default:e}))}function hT(...e){const t={},r=e.map(n=>{const o=Ne(n);return Object.assign(t,o.default),o.$_schema});return Ne(ze.Composite(r,{default:t}))}function Jt(e,t={}){bt.ExactOptionalPropertyTypes=!0;const r=Ne(e).$_schema,n=t.alsoUndefined?ze.Union([ze.Undefined(),r]):r;return Ne(ze.Optional(n))}function it(...e){let t;const r=e.map((n,o)=>{const i=Ne(n);return o||(t=i.default),i.$_schema});return Ne(ze.Union(r,{default:t}))}class mT extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(i=>w5(i)).join(`
`),o=Vi(r,`Shape mismatch:
${Dh(n,1)}`);super(o),this.errors=t,this.failureMessage=r}}function gT(e){return e.errors.flatMap(t=>Array.from(t))}function w5(e,t=0){const r=gT(e).map(o=>w5(o,t+1)),n=[e.path,e.message].filter(F.isTruthy).join(": ")+(r.length?":":"");return[Dh(n,t),...r].join(`
`)}function Uo(e,t,r={}){return $5(t,r).Check(e)}function cc(e,t,r={},n){if(Uo(e,t,r))return;const o=Array.from($5(t,r).Errors(e));if(o.length)throw new mT(o,n)}function $5(e,t){return e=pT(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function pT(e){return Ne(e)}function ys({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:o}=gh(r),i=r.default??(o-n)/2+n,s=Ne(ze.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:i})),a=r2(()=>cc(i,s));if(a)throw Hs(a,"Default range value is not within range.");return s}const Il="recordShape";function ld({keys:e,values:t,partial:r,additionalProperties:n}){bT();const o=k5(e),i=Ne(t);return Ne(ze.Unsafe({[L]:Il,keysShape:o,valuesShape:i,isPartial:!!r,additionalProperties:!!n,default:yT({isPartial:!!r,keysShape:o,valuesShape:i})}))}function bT(){Yo(Il)||wm(Il,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([o,i])=>{const s=e.additionalProperties?!0:Uo(o,e.keysShape),a=Uo(i,e.valuesShape);return s&&a}),n=e.isPartial?!0:!Zb(e.keysShape,t).length;return r&&n}),v5(Il,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=ko(Object.entries(n),([u])=>u,(u,[c,d])=>!Uo(c,r.keysShape)||!Uo(d,r.valuesShape)),i=Zb(r.keysShape,n),s=o.length?["Failure at keys",o.join(",")].join(": "):"",a=i.length?["Missing keys",i.join(",")].join(": "):"";return[s,a].filter(F.isTruthy).join(`
`)})}function Zb(e,t){const r=dc(e).filter(n=>F.isPropertyKey(n));return r.length?r.filter(n=>!F.hasKey(t,n)):[]}function yT({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=dc(e),o=t.default;return Object.fromEntries(n.map(i=>[i,o]))}}function k5(e){return Wm(e)?e:Km(e)?Ne(e):F.isObject(e)?Bi(e):F.isArray(e)&&F.isLengthAtLeast(e,1)?it(...e.map(t=>be(t))):F.isPropertyKey(e)?Ne(e):Ne(ze.Undefined())}function dc(e){const t=e.$_schema,r=t[L].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?hy(t.anyOf.flatMap(n=>dc(Ne(n)))):["undefined","number","string","symbol"].includes(r)?[]:dc(k5(e.default))}function vT(e){return Ne(ze.Unknown({default:e}))}const wT=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Gm=wT.reduce((e,t)=>(e[t]=t,e),{});ot.defaultZone.name;const x5=Gm.UTC,$T=Ne({hour:ys({...np,default:np.min}),minute:ys({...op,default:op.min}),second:ys({...ip,default:ip.min}),millisecond:ys({...sp,default:sp.min}),timezone:Bi(Gm,x5)}),kT=Ne({year:2023,month:ys({...ap,default:ap.min}),day:ys({...up,default:up.min}),timezone:Bi(Gm,x5)});Ne(hT(kT,$T));Te.Years+"",Te.Months+"",Te.Weeks+"",Te.Days+"",Te.Hours+"",Te.Minutes+"",Te.Seconds+"",Te.Milliseconds+"";Ne(it({get:be(J.Month),in:it(be(J.Year))},{get:be(J.Week),in:it(be(J.Year),be(J.Month))},{get:be(J.Day),in:it(be(J.Year),be(J.Month),be(J.Week))},{get:be(J.Hour),in:it(be(J.Year),be(J.Month),be(J.Week),be(J.Day))},{get:be(J.Minute),in:it(be(J.Year),be(J.Month),be(J.Week),be(J.Day),be(J.Hour))},{get:be(J.Second),in:it(be(J.Year),be(J.Month),be(J.Week),be(J.Day),be(J.Hour),be(J.Minute))},{get:be(J.Millisecond),in:it(be(J.Year),be(J.Month),be(J.Week),be(J.Day),be(J.Hour),be(J.Minute),be(J.Second))}));ld({keys:Bi(Te),values:-1,partial:!0});var Jb;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Jb||(Jb={}));var V0;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(V0||(V0={}));var Yb;(function(e){e.Year="year",e.Month="month",e.Day="day"})(Yb||(Yb={}));const xT={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};U3(xT,Br(V0));dT({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return DT(e)}});function DT(e){return ne.fromISO(e).toUTC().toISO()===e}const AT=Ne({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:vT()});function ff(e){return Uo(e,AT,{allowExtraKeys:!0})}class D5 extends dw{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||nm}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:ET}=$6,Xb=e=>e,Qb=()=>document.createComment(""),Aa=(e,t,r)=>{const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=n.insertBefore(Qb(),o),s=n.insertBefore(Qb(),o);r=new ET(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==s._$AU&&r._$AP(u)}if(i!==o||a){let u=r._$AA;for(;u!==i;){const c=Xb(u).nextSibling;Xb(n).insertBefore(u,o),u=c}}}return r},bi=(e,t,r=e)=>(e._$AI(t,r),e),CT={},FT=(e,t=CT)=>e._$AH=t,MT=e=>e._$AH,hf=e=>{e._$AR(),e._$AA.remove()};const Hm={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Jn=e=>(...t)=>({_$litDirective$:e,values:t});class Yn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const ST={attribute:!0,type:String,converter:Zl,reflect:!1,hasChanged:jh},TT=(e=ST,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function NT(e){return(t,r)=>typeof r=="object"?TT(e,t,r):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}const cr=Jn(class extends Yn{constructor(e){if(super(e),e.type!==Hm.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Vr}});const pt=e=>e??Q;function PT(e,t,r){return e?t(e):r?.(e)}class IT extends Va{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function OT(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(a=>!!a.index).length;if(n||o)return[...e];const i=e.map(a=>[a]);return i.length||(i[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(i[a]=[])}),t.forEach(a=>{const u=i[a.index];u&&u.splice(0,0,...a.values)}),i.flat()}function q0(e){return F.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Zm(e){return F.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function A5(e){return ko(e,t=>{if(q0(t))return t.definition;if(Zm(t))return t.tagInterpolationKey||t},F.isTruthy)}const E5=new WeakMap;function BT(e,t){const r=A5(t);return C5(E5,[e,...r]).value?.template}function RT(e,t,r){const n=A5(t);return M5(E5,[e,...n],r)}function C5(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=F5(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?C5(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function F5(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function M5(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:s}=F5(e,t,n);if(!i)return{result:!1,reason:s};const a=o??{nested:void 0,template:void 0};if(o||e.set(i,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),M5(u,t,r,n+1)}function S5(e,t,r){const n=BT(e,t),o=n??r();if(!n){const a=RT(e,t,o);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const i=o.valuesTransform(t),s=OT(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function T5(e,t,r,n){const o=[],i=[],s=[],a=[];return e.forEach((c,d)=>{const f=o.length-1,h=o[f],m=d-1,y=t[m];n&&n(c);let $,k=[];if(typeof h=="string"&&($=r(h,c,y),$)){o[f]=[h,$.replacement].join(""),s.push(m);const E=$.getExtraValues;k=E?E(y):[],k.length&&E?(o[f]+=" ",k.forEach((N,R)=>{R&&o.push(" ")}),a.push(N=>{const R=N[m],q=E(R);return{index:m,values:q}}),o.push(c)):o[f]+=c}$||o.push(c);const x=e.raw[d];$?(i[f]=[i[f],$.replacement,x].join(""),k.length&&k.forEach(()=>{i.push("")})):i.push(x)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const d=a.flatMap(f=>f(c));return{valueIndexDeletions:s,valueInsertions:d}}}}function LT(...[e,t,r]){if(Zm(r))return{replacement:r.tagName,getExtraValues:void 0}}function jT(e,t){return T5(e,t,LT)}function A(e,...t){const r=S5(e,t,()=>jT(e,t));return v2(r.strings,...r.values)}const _T={allowPolymorphicState:!1,errorHandler:void 0};function N5(e,t){const r=e.instanceState;je(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&je(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class UT extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function Jm(){return e=>class extends UT{static type=e;_type=e;constructor(t){super(e,t)}}}function at(){return Jm()}function zT(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=Jm()([e,n].join("-"));return r[n]=o,r},{}):{}}function VT(e){return e?et(e,t=>t):{}}function P5(e,t){t in e||NT()(e,t)}function qT(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function e1(e,t){const r=e;function n(s){t?qT(s,e,e.tagName):P5(e,s)}function o(s,a){return n(a),r[a]}return new Proxy({},{get:o,set(s,a,u){n(a);const c=r[a];function d(h){s[a]=h,r[a]=h}const f=e.observablePropertyListenerMap[a];if(c!==u&&ff(c)&&f&&c.removeListener(f),ff(u))if(f)u.listen(!1,f);else{let h=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=h,u.listen(!1,h)}else ff(c)&&(e.observablePropertyListenerMap[a]=void 0);return d(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return o(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function t1(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function r1(e,t,r){return r?Su(r,o=>({key:o,value:[e,t,o].join("-")}),{}):{}}function WT({hostClassNames:e,cssVars:t}){return{hostClasses:et(e,(r,n)=>({name:Ie(n),selector:Ie(`:host(.${n})`)})),cssVars:t}}function KT({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&je(t).forEach(i=>{const s=t[i],a=r[i];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(a):e.classList.remove(a))})}function GT({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:o}){function i(a){je(a).forEach(u=>{const c=a[u];e.instanceState[u]=c})}return{cssVars:r,slotNames:n,testIds:o,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function Bn(...e){return Dt.isEmpty(e),t=>{const r=t;if(!F.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return HT({...r,options:{...r.options}})}}function HT(e){if(!F.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!F.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={..._T,...e.options},r=zT(e.tagName,e.events),n=VT(e.hostClasses);e.hostClasses&&t1(e.tagName,e.hostClasses),e.cssVars&&t1(e.tagName,e.cssVars);const o=e.cssVars?Gn(e.cssVars):{},i=r1(e.tagName,"slot",e.slotNames),s=r1(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(WT({hostClassNames:n,cssVars:o})):e.styles||A``,u=e.render;function c(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=class extends IT{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return GT({element:this,eventsMap:r,cssVars:o,slotNamesMap:i,testIdsMap:s})}static assign=c;static events=r;static render=u;static hostClasses=n;static cssVars=o;static init=e;static slotNames=i;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(f);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");je(m).forEach(y=>{P5(this,y),this.instanceState[y]=m[y]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const h=u(f);if(h instanceof Promise)throw new TypeError("render cannot be asynchronous");return KT({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=Hs(f,`Failed to render ${e.tagName}`);return console.error(h),this._lastRenderError=h,t.errorHandler?.(h),Wt(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{F.hasKey(f,"destroy")&&F.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){N5(this,f)}observablePropertyListenerMap={};instanceInputs=e1(this,!1);instanceState=e1(this,!t.allowPolymorphicState);constructor(){super(),this.definition=d}};return Object.defineProperties(d,{name:{value:q3(e.tagName,{firstLetterCase:su.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,d)),d}class ZT extends ps{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function JT(e){return new ZT(e)}const n1=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},YT=Jn(class extends Yn{constructor(e){if(super(e),e.type!==Hm.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let s=0;for(const a of e)o[s]=n?n(a,s):s,i[s]=r(a,s),s++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const o=MT(e),{values:i,keys:s}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=s,i;const a=this.ut??=[],u=[];let c,d,f=0,h=o.length-1,m=0,y=i.length-1;for(;f<=h&&m<=y;)if(o[f]===null)f++;else if(o[h]===null)h--;else if(a[f]===s[m])u[m]=bi(o[f],i[m]),f++,m++;else if(a[h]===s[y])u[y]=bi(o[h],i[y]),h--,y--;else if(a[f]===s[y])u[y]=bi(o[f],i[y]),Aa(e,u[y+1],o[f]),f++,y--;else if(a[h]===s[m])u[m]=bi(o[h],i[m]),Aa(e,o[f],o[h]),h--,m++;else if(c===void 0&&(c=n1(s,m,y),d=n1(a,f,h)),c.has(a[f]))if(c.has(a[h])){const $=d.get(s[m]),k=$!==void 0?o[$]:null;if(k===null){const x=Aa(e,o[f]);bi(x,i[m]),u[m]=x}else u[m]=bi(k,i[m]),Aa(e,o[f],k),o[$]=null;m++}else hf(o[h]),h--;else hf(o[f]),f++;for(;m<=y;){const $=Aa(e,u[y+1]);bi($,i[m]),u[m++]=$}for(;f<=h;){const $=o[f++];$!==null&&hf($)}return this.ut=s,FT(e,u),Vr}}),XT=YT;function Wu(e,t){return Ri(e,t),e.element}function QT(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Ri(e,t){const r=QT(e),n=r?`: in ${r}`:"";if(e.type!==Hm.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function eN(e,t){return Jn(class extends Yn{element;constructor(r){super(r),this.element=_t.instanceOf(Wu(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),Vr}})}const go=eN("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const o=Wi(r,"allAttributesApplied",()=>new Set);je(t).forEach(i=>{if(i.toLowerCase()!==i)throw new Error(`Cannot assign attribute name with uppercase letters: ${i}`);o.add(i)}),o.forEach(i=>{const s=t[i];s==null||s===!1||s===Q?e.removeAttribute(i):s===""||s===!0?e.setAttribute(i,""):e.setAttribute(i,String(s))})});function tN(e){const t=Jn(class extends Yn{element;constructor(r){super(r),this.element=Wu(r,e)}render(r){return this.element.setAttribute(e,r),Vr}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function _(e,t){return rN(e,t)}const rN=Jn(class extends Yn{element;lastListenerMetaData;constructor(e){super(e),this.element=Wu(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Vr}});function nN(e){return _("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const o1="onDomCreated",Li=Jn(class extends Yn{element;constructor(e){super(e),Ri(e,o1)}update(e,[t]){Ri(e,o1);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),i1="onDomRendered",oN=Jn(class extends Yn{constructor(e){super(e),Ri(e,i1)}update(e,[t]){Ri(e,i1);const r=e.element;return window.requestAnimationFrame(()=>t(r)),this.render(t)}render(e){}}),s1="onResize",I5=Jn(class extends Yn{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&iN(this.element,this.callback,e)});callback;constructor(e){super(e),Ri(e,s1)}update(e,[t]){Ri(e,s1),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function iN(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function Mr(e,t,r){return PT(e,()=>t,()=>r)}const{attributeDirective:sN}=tN("data-test-id"),Vn=sN;function O5(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(t(o),Bn(...n)(r(o)))}function aN(e,t){return uN(void 0,e)}const uN=Jn(class extends Yn{element;constructor(e){super(e),this.element=Wu(e,"assign")}render(e,t){return N5(this.element,t),Vr}}),lN={};function cN(e,t){return t.map((r,n)=>{const o=e[n],i=e[n+1];if(o&&i){const{shouldHaveTagNameHere:s}=B5(o,i);if(s&&F.isString(r))return{tagName:r,tagInterpolationKey:Wi(lN,r,()=>({tagName:r}))}}return r})}function B5(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function dN(...[e,t,r]){const n=q0(r)?r.definition:r,{isOpeningTag:o,shouldHaveTagNameHere:i}=B5(e,t),s=Zm(n);if(s&&i&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(i&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!i||!s?void 0:{replacement:n.tagName,getExtraValues(u){const c=q0(u)?u.inputs:void 0;return[o&&c?aN(c):void 0].filter(F.isTruthy)}}}function fN(e){}function hN(e){return T5(e.strings,e.values,dN,fN)}function g(e,...t){const r=cN(e,t),n=m6(e,...r),o=S5(e,r,()=>hN(n));return{...n,strings:o.strings,values:o.values}}function W0(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],i=(t??[""]).map((s,a)=>{const u=mN(s,n[a]);return`${s}${u}`});return c2(i.join(""))}function mN(e,t){return t._$litType$!=null||t._$litDirective$!=null?W0(t):Array.isArray(t)?t.map(n=>W0(n)).join(""):e.endsWith("=")?`"${t}"`:t}function R5(e){return et(e,(t,r)=>r instanceof We?Ie(r.toString({format:"hex"})):R5(r))}const gN="dodgerblue";function K0(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function mf({background:e,foreground:t}){return{background:e??new We(K0(t)),foreground:t??new We(K0(e))}}var fc;(function(e){e.Dark="dark",e.Light="light"})(fc||(fc={}));function pN(e){return e==="black"?"white":"black"}const bN={black:{foregroundFaint1:new We("#ccc"),foregroundFaint2:new We("#eee")},white:{foregroundFaint1:new We("#ccc"),foregroundFaint2:new We("#eee")}},yN={black:{backgroundFaint1:new We("#666"),backgroundFaint2:new We("#444")},white:{backgroundFaint1:new We("#ccc"),backgroundFaint2:new We("#fafafa")}};function a1({themeColor:e=gN,themeStyle:t=fc.Light}={}){const r=new We(e),n=new We(t===fc.Dark?"black":"white"),o=K0(n),i=new We(o),s={nav:{hover:mf({background:r.clone().set({"hsl.l":93})}),active:mf({background:r.clone().set({"hsl.l":90})}),selected:mf({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...yN[pN(o)],foreground:i,...bN[o]}};return R5(s)}var qn;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(qn||(qn={}));async function u1(e=1){const t=new _l;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function vN(e,t){return{element:e,children:L5(e)}}function L5(e,t,r){return wN(e).map(n=>{const o=L5(n);return{element:n,children:o}})}function wN(e){return[...e.children,...e.shadowRoot?.children??[]]}function gf(e){return e.matches(":focus")}function Ym(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:Ym(t)}function j5(e,t){if(t(e))return e;const r=Ym(e);if(r)return j5(r,t)}function cd(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const o=t.name,i=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${i}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${i}'.`;throw new Error(s)}return n}function $N(e){const t=Ym(e);return t&&j5(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function kN(e){let t=0,r=document.activeElement||void 0;for(;r;){if(e({depth:t,element:r}))return t;r=r.shadowRoot?.activeElement||void 0,r&&++t}return t}function xN({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const u=i.codePointAt(s);for(;a<r;)if(o.codePointAt(a++)===u)continue e;return!1}return!0}const DN=Ei(32);function Ol(e){return e.join(DN)}function _5(e){if(!e.length)return[];const t=Ol(e),r=_5(e.slice(0,-1));return[t,...r]}const AN=["error","errors"];function EN(e){return AN.includes(e)}function CN({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Ol(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&EN(t),s=Ol(o.fullUrlBreadcrumbs);if(xN({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(u=>F.isString(u)?u:W0(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[s]){const u=_5(o.fullUrlBreadcrumbs);n(o),u.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const i=Ol(o.fullUrlBreadcrumbs),s=r[i];if(!F.isBoolean(s))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Xm extends Error{name="SpaRouterError"}class l1 extends Xm{name="GlobalUrlEventsConsolidationError"}class FN extends Xm{name="SanitizationDepthMaxed"}Ne({paths:[""],search:Jt(it(void 0,ld({keys:"",values:[""]}))),hash:Jt(it(void 0,""))});const MN=Ne({basePath:Jt("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Jt(1,{alsoUndefined:!0}),disableWarnings:Jt(!1,{alsoUndefined:!0}),isPaused:Jt(!1,{alsoUndefined:!0})}),pf="://";function Qm(...e){const t=e.join("/"),[r,n=""]=t.includes(pf)?t.split(pf):["",t];let o=!1;const i=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,c)=>{if(o)return s;const d=c[u+1];let f=a;const h=d?.startsWith("?"),m=!a.includes("?")&&h,y=d==="?";if(h||m){o=!0;let $=!1;const k=c.slice(u+2).reduce((x,E)=>(E.includes("#")&&($=!0),$?x.concat(E):[x,E].join("&")),"");f=[a,d,y?xs({value:k,prefix:"&"}):k].join("")}return s.concat(f)},[]);return[r,r?pf:"",i.join("/")].join("")}var Ws;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Ws||(Ws={}));var Ks;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Ks||(Ks={}));const SN=Ne({encoding:Jt(it(void 0,Bi(Ws))),searchParamStrategy:Jt(it(void 0,Bi(Ks)))});function bl(e,t){return e.map(r=>{if(r!=null)return Es(String(r),t)}).filter(r=>r!=null)}function Es(e,t){return t?.encoding===Ws.Decode?decodeURIComponent(e):t?.encoding===Ws.Encode?encodeURIComponent(e):e}const TN=Ne(ld({keys:"",values:[""]}));function NN(e,t,r){const n=r?.searchParamStrategy===Ks.Clear?{}:et(e,(s,a)=>w3(a)),o=et(t,(s,a)=>{if(r?.searchParamStrategy===Ks.Append){const u=n[s],c=F.isArray(u)?u:[u];if(a){const d=F.isArray(a)?a:[a];return bl([...c,...d],r)}else return bl(c,r)}else return F.isArray(a)?bl(a,r):a?bl([a],r):void 0});return Sc({...n,...o},(s,a)=>!!a)}function U5(e,t){return F.isString(e)&&!e.includes("?")?{}:(F.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(i=>{const[s,...a]=_3(i,"=");return[s,a.length?a.join("="):void 0]}).reduce((i,[s,a])=>{const u=z5({options:t,key:s,value:a}),c=Wi(i,u.key,()=>[]);return a!=null&&c.push(u.value),i},{})}function PN(e){if(e!=null)return F.isArray(e)?[...e]:e===""?[]:[e]}function IN(e,t){const r=ko(Object.entries(e),([n,o])=>{const i=PN(o);return i?.length?i.map(s=>{const a=z5({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return r.length?yr({value:r.join("&"),prefix:"?"}):""}function z5({options:e,key:t,value:r}){return{key:Es(t,e),value:Es(String(r),e)}}function V5({hash:e,hostname:t,password:r,pathname:n,port:o,protocol:i,search:s,username:a}){return[i?i+"://":"",a?a+":":"",r?r+"@":"",dd({hostname:t,port:o}),eg({hash:e,pathname:n,search:s})].join("")}function q5({pathname:e}){const t=xs({value:e,prefix:"/"});return t?t.split("/"):[]}function eg({hash:e,pathname:t,search:r}){return[yr({value:t,prefix:"/"}),r?yr({value:r,prefix:"?"}):"",e?yr({value:e,prefix:"#"}):""].join("")}function dd({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function W5({hostname:e,port:t,protocol:r}){return[r,dd({hostname:e,port:t})].filter(F.isTruthy).join("://")}function Cs(e,t){const r=F.isString(e)?xs({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),o=n?yr({value:Es(n,t),prefix:"#"}):"",i=r.replace(/#[^#]*$/,""),s=i.replace(/^[^?]*(?:\?|$)/,""),a=s?yr({value:Es(s,t),prefix:"?"}):"",u=i.replace(/\?[^?]*$/,""),c=u.includes("://")?u.replace(/:\/\/.*$/,""):"",d=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=d.replace(/@.*/,""),h=d.replace(/^[^@]*@/,""),m=f!==h,[y,...$]=m?f.split(":").reverse():[],k=$.toReversed().join("").replace(/[/:]/g,"")||"",x=y?.replace(/[/:]/g,"")||"",E=j3(h.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),N=E[0]?.endsWith("]")?"":E[1]===":"&&E[0]||"",q=h.replace(new RegExp(`:${N}($|/)`),"$1").replace(/\/.*/,""),ie=h.replace(/^[^/]*(\/|$)/,"$1"),De=Es(ie.replace(/^[^/]*(?:\/|$)/,"/"),t),de=dd({hostname:q,port:N}),$e=W5({hostname:q,port:N,protocol:c}),Ge=V5({hash:o,hostname:q,password:x,pathname:De,port:N,protocol:c,search:a,username:k}),He=U5(a),St=q5({pathname:De});return{fullPath:eg({hash:o,pathname:De,search:a}),hash:o,host:de,hostname:q,href:Ge,origin:$e,password:x,pathname:De,paths:St,port:N,protocol:c,search:a,searchParams:He,username:k}}Ne({hash:Jt(it(void 0,"")),search:Jt(it(void 0,"",ld({keys:"",values:it(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:Jt(it(void 0,"")),pathname:Jt(it(void 0,"")),paths:Jt(it(void 0,[""])),protocol:Jt(it(void 0,"")),username:Jt(it(void 0,"")),password:Jt(it(void 0,"")),port:Jt(it(void 0,"",-1))});function ON(e,t,r){const n=!!r,o=t==null||Uo(t,SN,{allowExtraKeys:!1}),i=o?Cs(""):F.instanceOf(e,URL)||F.isString(e)?Cs(e):e,s=o?e:t,a=F.isString(s)&&s.startsWith("."),u=F.isString(s)||F.instanceOf(s,URL)?Sc(Cs(s),($,k)=>F.isTruthy(k)):s,c=n?r:o?t:void 0,d=et(i,($,k)=>{if(!F.hasKey(u,$))return k;const x=u[$];return F.isNumber(x)?String(x):F.isString(x)?$==="hash"&&x?yr({value:x,prefix:"#"}):$==="pathname"?yr({value:x,prefix:"/"}):x:k});F.hasKey(u,"paths")&&u.paths&&(d.pathname=Qm(a?i.pathname:"",...u.paths));const f=F.isString(u.search)?U5(yr({value:u.search,prefix:"?"})):yn(u.search||{}),h=NN(d.searchParams,f,{...c,encoding:Ws.None}),m=IN(h,c);return{...d,searchParams:h,search:m,paths:q5(d),fullPath:eg(d),host:dd(d),origin:W5(d),href:V5({...d,search:m})}}const BN=Ne({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:TN,hash:"",fullPath:"/",href:"/"});({...BN.default});const RN=0;function K5(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==RN)}const fd="locationchange",fo=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const c1=fo?.pushState;function d1(...e){if(!c1)return;const t=c1.apply(fo,e);return globalThis.dispatchEvent(new Event(fd)),t}const f1=fo?.replaceState;function h1(...e){if(!f1)return;const t=f1.apply(fo,e);return globalThis.dispatchEvent(new Event(fd)),t}function LN(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!fo)){{if(fo.pushState===d1)throw new l1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(fo.replaceState===h1)throw new l1("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,fo.pushState=d1,fo.replaceState=h1,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(fd))})}}function yl(e,t){const r=Cs(e),n=xs({value:xs({value:r.pathname,prefix:yr({value:t||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],i=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?xs({value:r.hash,prefix:"#"}):void 0;return{paths:o,search:i,hash:s}}class tg{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){cc(t,MN),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new D5({defaultValue:r,equalityCheck:()=>!1}),LN(),this.removeGlobalListener=Nh(globalThis,fd,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new FN("Looping route sanitization detected; aborting window URL change listener.");const n=yl(globalThis.location.href,this.params.basePath),o=t.sanitizeRoute(n);F.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Qm(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(yl(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...yl(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),i=this.routeIncludesBasePath(yl(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return ON(globalThis.location.href,{paths:i.paths,search:i.search,hash:i.hash?yr({value:i.hash,prefix:"#"}):""},{searchParamStrategy:Ks.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:o}=Cs(n);return this.params.isPaused||!r.force&&F.jsonEquals(Cs(globalThis.location.href).fullPath,o)?!1:r.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(t,r){return K5(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new Xm(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function jN(e){return new tg({basePath:e,sanitizeRoute(t){return{paths:_N(t.paths),hash:void 0,search:void 0}}})}function _N(e){const t=e[0];if(F.isEnumValue(t,Er)){if(t===Er.Book)return[Er.Book,...e.slice(1)];if(t===Er.Search)return e[1]?[t,e[1]]:[Er.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Ns.paths}const hc=Jm()("element-book-change-route"),m1="vira-",tt=O5({assertInputs:e=>{if(!e.tagName.startsWith(m1))throw new Error(`Tag name should start with '${m1}' but got '${e.tagName}'`)}});var ke=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Number="number",e.Select="select",e.Checkbox="checkbox",e))(ke||{});function vl(e,t){if(e)return t?Mh({value:e,suffix:"*"}):e}function UN(e){return iu(e).every(t=>t.isHidden||!t.isRequired?!0:F.isString(t.value)?!!t.value:t.value!=null)}const b=Gn({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function re({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function vn(e,t){const r=je(t).map(n=>{if(t[n])return`${b[n].name}: ${String(t[n])};`}).filter(F.isTruthy).join(" ");return re({name:e.name,svgTemplate:g`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const zN=re({name:"ArrowUp24Icon",svgTemplate:g`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),VN=re({name:"AutoTheme24Icon",svgTemplate:g`
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
                fill=${b["vira-icon-stroke-color"].value}
                stroke="none"
                style="fill-rule:nonzero"
            />
            <path
                d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 0v16"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),qN=re({name:"Bell24Icon",svgTemplate:g`
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
    `}),WN=re({name:"Chat24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),rg=re({name:"Check24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),KN=re({name:"ChevronDown24Icon",svgTemplate:g`
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
    `}),ng=re({name:"ChevronUp24Icon",svgTemplate:g`
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
    `}),G5=re({name:"CloseX24Icon",svgTemplate:g`
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
    `}),GN=re({name:"Commit24Icon",svgTemplate:g`
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
    `}),G0=re({name:"Copy24Icon",svgTemplate:g`
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
                fill=${b["vira-icon-fill-color"].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),HN=re({name:"Document24Icon",svgTemplate:g`
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
    `}),ZN=re({name:"DocumentSearch24Icon",svgTemplate:g`
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
    `}),JN=re({name:"DoubleChevron24Icon",svgTemplate:g`
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
    `}),H5=re({name:"Element16Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ut=re({name:"Element24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),YN=re({name:"ExternalLink24Icon",svgTemplate:g`
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
    `}),Z5=re({name:"EyeClosed24Icon",svgTemplate:g`
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
    `}),J5=re({name:"EyeOpen24Icon",svgTemplate:g`
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
    `}),XN=re({name:"Filter24Icon",svgTemplate:g`
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
    `}),QN=re({name:"Globe24Icon",svgTemplate:g`
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
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
            <path
                d="M21 12c0 5-4 9-9 9m9-9c0-5-4-9-9-9m9 9H3m9 9c-5 0-9-4-9-9m9 9q3.5-3.9 3.6-9 0-5.1-3.6-9m0 18a14 14 0 0 1-3.6-9q0-5.1 3.6-9m-9 9c0-5 4-9 9-9"
                style="fill-rule:nonzero;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),eP=re({name:"Link24Icon",svgTemplate:g`
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
            <path
                d="M11.6 14.4a4 4 0 0 1-1.5-6.6l4.2-4.2A4 4 0 0 1 20 9.3l-3 2.9"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Y5=re({name:"Loader24Icon",svgTemplate:g`
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
    `}),yo=Gn({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),tP=A`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${yo["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,ji=re({name:"LoaderAnimated24Icon",svgTemplate:g`
        <style>
            ${tP}
        </style>
        ${Y5.svgTemplate}
    `}),rP=re({name:"Lock24Icon",svgTemplate:g`
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
    `}),nP=re({name:"MagnifyingGlass24Icon",svgTemplate:g`
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
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),oP=re({name:"Moon24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke=${b["vira-icon-stroke-color"].value}
            stroke-width=${b["vira-icon-stroke-width"].value}
            fill=${b["vira-icon-fill-color"].value}
            stroke-linejoin="round"
        >
            <path d="M18.6 17.72A8 8 0 1 1 15 4.26a8 8 0 0 0 3.6 13.46Z" />
        </svg>
    `}),Za=re({name:"Options24Icon",svgTemplate:g`
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
    `}),iP=re({name:"Pencil24Icon",svgTemplate:g`
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
    `}),sP=re({name:"Printer24Icon",svgTemplate:g`
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
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),aP=re({name:"Shield24Icon",svgTemplate:g`
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
    `}),uP=re({name:"SortAscending24Icon",svgTemplate:g`
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
    `}),lP=re({name:"SortDescending24Icon",svgTemplate:g`
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
    `}),cP=re({name:"Sparkle24Icon",svgTemplate:g`
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
                fill=${b["vira-icon-fill-color"].value}
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),dP=re({name:"SpeakerLoud24Icon",svgTemplate:g`
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
    `}),fP=re({name:"SpeakerMedium24Icon",svgTemplate:g`
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
    `}),hP=re({name:"SpeakerMuted24Icon",svgTemplate:g`
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
    `}),mP=re({name:"SpeakerQuiet24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
        </svg>
    `}),H0=re({name:"Star24Icon",svgTemplate:g`
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
    `}),mc=re({name:"StatusFailure24Icon",svgTemplate:g`
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
    `}),gP=re({name:"StatusInProgress24Icon",svgTemplate:g`
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
    `}),Ba=re({name:"StatusSuccess24Icon",svgTemplate:g`
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
    `}),pP=re({name:"StatusUnknown24Icon",svgTemplate:g`
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
    `}),bP=re({name:"StatusWarning24Icon",svgTemplate:g`
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
    `}),yP=re({name:"Sun24Icon",svgTemplate:g`
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
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill=${b["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),vP=re({name:"Upload24Icon",svgTemplate:g`
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
    `}),X5=re({name:"X24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${b["vira-icon-stroke-color"].value}
                stroke-width=${b["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Z0={ArrowUp24Icon:zN,AutoTheme24Icon:VN,Bell24Icon:qN,Chat24Icon:WN,Check24Icon:rg,ChevronDown24Icon:KN,ChevronUp24Icon:ng,CloseX24Icon:G5,Commit24Icon:GN,Copy24Icon:G0,Document24Icon:HN,DocumentSearch24Icon:ZN,DoubleChevron24Icon:JN,Element16Icon:H5,Element24Icon:Ut,ExternalLink24Icon:YN,EyeClosed24Icon:Z5,EyeOpen24Icon:J5,Filter24Icon:XN,Globe24Icon:QN,Link24Icon:eP,Loader24Icon:Y5,LoaderAnimated24Icon:ji,Lock24Icon:rP,MagnifyingGlass24Icon:nP,Moon24Icon:oP,Options24Icon:Za,Pencil24Icon:iP,Printer24Icon:sP,Shield24Icon:aP,SortAscending24Icon:uP,SortDescending24Icon:lP,Sparkle24Icon:cP,SpeakerLoud24Icon:dP,SpeakerMedium24Icon:fP,SpeakerMuted24Icon:hP,SpeakerQuiet24Icon:mP,Star24Icon:H0,StatusFailure24Icon:mc,StatusInProgress24Icon:gP,StatusSuccess24Icon:Ba,StatusUnknown24Icon:pP,StatusWarning24Icon:bP,Sun24Icon:yP,Upload24Icon:vP,X24Icon:X5},_i=A`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`;function g1(e){return F.isPrimitive(e)||e instanceof _o?String(e):e.default}function jn(e,t,r,n){const o=`${r.prefix}-default-fg`,i=`${r.prefix}-default-bg`;if(F.isPrimitive(t)||t instanceof _o)return t;if("refDefaultBackground"in t)return`var(--${i}, ${g1(r.background)})`;if("refDefaultForeground"in t)return`var(--${o}, ${g1(r.foreground)})`;if("refBackground"in t||"refForeground"in t){const s=F.hasKey(t,"refBackground")?"refBackground":F.hasKey(t,"refForeground")?"refForeground":void 0,a=s&&F.hasKey(t,s)?t[s]:void 0,u=s==="refBackground"?"background":"foreground",c=a&&n[a];if(!c)throw new Error(`Color theme ${s} reference '${a}' does not exist. (Referenced from '${e}'.)`);const d=c[u]||(u==="foreground"?jn(o,r.foreground,r,n):jn(i,r.background,r,n));return`var(--${a}-${u==="foreground"?"fg":"bg"}, ${jn(a,d,r,n)})`}else return t.value}const Lo="theme-default";function Q5(e,t){try{if(Lo in t)throw new Error(`Cannot define theme color by name '${Lo}', it is used internally.`);const r=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,o=`${e.prefix}-default-inverse-fg`,i=`${e.prefix}-default-inverse-bg`,s={[r]:jn(r,e.foreground,e,t),[n]:jn(n,e.background,e,t),[o]:jn(o,e.background,e,t),[i]:jn(i,e.foreground,e,t)},a=Gn(s),u=En(t).reduce((y,[$,k])=>{const x=p1($),E=k.foreground?jn([$,"foreground"].join(" "),k.foreground,e,t):`var(${a[r].name}, ${a[r].default})`,N=k.background?jn([$,"background"].join(" "),k.background,e,t):`var(${a[n].name}, ${a[n].default})`;return y[x.foreground]=E,y[x.background]=N,y[x.foregroundInverse]=`var(--${x.background}, ${N})`,y[x.backgroundInverse]=`var(--${x.foreground}, ${E})`,y},{}),c=Gn(u),d={},f={};En(t).forEach(([y,$])=>{Dt.isString(y);const k=p1(y),x=c[k.foreground],E=c[k.background],N=c[k.foregroundInverse],R=c[k.backgroundInverse];Dt.isDefined(x),Dt.isDefined(E),Dt.isDefined(N),Dt.isDefined(R),d[y]={foreground:x,background:E,init:$,name:y},f[y]={foreground:N,background:R,init:$,name:y}});const h={foreground:a[r],background:a[n],init:e,name:Lo},m={...h,foreground:a[o],background:a[i]};return{colors:{[Lo]:h,...d},inverse:{[Lo]:m,...f},init:{colors:t,default:e},prefix:e.prefix}}catch(r){throw globalThis.setTimeout(()=>u2.error(r)),r}}function p1(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}const l=Gn({"vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d5","vira-red-20":"#ffc1bc","vira-red-30":"#ffa7a2","vira-red-40":"#ff8886","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001d","vira-red-80":"#a60012","vira-red-90":"#760003","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdda3","vira-orange-20":"#ffc66c","vira-orange-30":"#ffac36","vira-orange-40":"#f79300","vira-orange-50":"#e17e00","vira-orange-60":"#c96900","vira-orange-70":"#ab5600","vira-orange-80":"#8b4100","vira-orange-90":"#6a2500","vira-yellow-5":"#f7eeca","vira-yellow-10":"#f6e192","vira-yellow-20":"#f2cd20","vira-yellow-30":"#dfbb00","vira-yellow-40":"#cca800","vira-yellow-50":"#b59500","vira-yellow-60":"#9d8100","vira-yellow-70":"#856b00","vira-yellow-80":"#6a5400","vira-yellow-90":"#4c3b00","vira-green-5":"#d3f8cf","vira-green-10":"#a3f59b","vira-green-20":"#4fed46","vira-green-30":"#36d92e","vira-green-40":"#0dc501","vira-green-50":"#00af00","vira-green-60":"#009800","vira-green-70":"#007f00","vira-green-80":"#006400","vira-green-90":"#004700","vira-teal-5":"#d4f5f3","vira-teal-10":"#a1efeb","vira-teal-20":"#45e5de","vira-teal-30":"#2ad2cc","vira-teal-40":"#04beb8","vira-teal-50":"#00a9a3","vira-teal-60":"#00928d","vira-teal-70":"#007a77","vira-teal-80":"#00615e","vira-teal-90":"#004442","vira-blue-5":"#daf2ff","vira-blue-10":"#bde8ff","vira-blue-20":"#98d8ff","vira-blue-30":"#77c6ff","vira-blue-40":"#4cb2ff","vira-blue-50":"#299cf9","vira-blue-60":"#0086e0","vira-blue-70":"#006ec7","vira-blue-80":"#0054aa","vira-blue-90":"#00358a","vira-purple-5":"#f6eaff","vira-purple-10":"#eddaff","vira-purple-20":"#e6c3ff","vira-purple-30":"#d7adff","vira-purple-40":"#c795ff","vira-purple-50":"#b77aff","vira-purple-60":"#a55aff","vira-purple-70":"#8f3de9","vira-purple-80":"#7514cb","vira-purple-90":"#500095","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5fa","vira-pink-20":"#ffbaf4","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb7","vira-pink-60":"#cc59a2","vira-pink-70":"#b2418b","vira-pink-80":"#962471","vira-pink-90":"#6e004f","vira-grey-0":"#f3f6f6","vira-grey-5":"#eceff0","vira-grey-10":"#dce2e6","vira-grey-20":"#c7d2d7","vira-grey-30":"#b6c0c5","vira-grey-40":"#a4adb2","vira-grey-50":"#909a9f","vira-grey-60":"#7c868a","vira-grey-70":"#677074","vira-grey-80":"#50595d","vira-grey-90":"#363f43"});function bf({originalTheme:e,layerKey:t,themeColor:r,override:n,overrideValues:o}){const i=n?.[t];i&&(o[String(r[t].name)]=String(jn(t,i,e.init.default,e.init.colors)))}function wP(e,t,{defaultOverride:r,colorOverrides:n}){const o={};r&&je(r).forEach(u=>{bf({originalTheme:e,layerKey:u,override:r,themeColor:e.colors[Lo],overrideValues:o})});const i={};n&&En(n).forEach(([u,c])=>{const d=e.colors[u];if(!d)throw new Error(`Override color name '${u}' does not exist in the theme being overridden.`);bf({originalTheme:e,layerKey:"foreground",override:c,themeColor:d,overrideValues:i}),bf({originalTheme:e,layerKey:"background",override:c,themeColor:d,overrideValues:i})});const s=et(e.init.colors,(u,c)=>{const d=n?.[u];return{...c,...d}}),a=Q5({...e.init.default,...r},s);return{name:t,overrides:{...o,...i},originalTheme:e,asTheme:a}}const Je=Q5({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:l["vira-red-90"]},"vira-red-foreground-body":{foreground:l["vira-red-80"]},"vira-red-foreground-non-body":{foreground:l["vira-red-60"]},"vira-red-foreground-header":{foreground:l["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:l["vira-red-30"]},"vira-red-foreground-decoration":{foreground:l["vira-red-20"]},"vira-red-foreground-invisible":{foreground:l["vira-red-10"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:l["vira-red-90"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:l["vira-red-80"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:l["vira-red-60"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:l["vira-red-40"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:l["vira-red-30"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:l["vira-red-20"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:l["vira-red-5"]},"vira-red-behind-fg-small-body":{background:l["vira-red-5"]},"vira-red-behind-fg-body":{background:l["vira-red-20"]},"vira-red-behind-fg-non-body":{background:l["vira-red-30"]},"vira-red-behind-fg-header":{background:l["vira-red-50"]},"vira-red-behind-fg-placeholder":{background:l["vira-red-60"]},"vira-red-behind-fg-decoration":{background:l["vira-red-80"]},"vira-red-behind-fg-invisible":{background:l["vira-red-90"]},"vira-red-on-self-body":{foreground:l["vira-red-90"],background:l["vira-red-5"]},"vira-red-on-self-non-body":{foreground:l["vira-red-80"],background:l["vira-red-5"]},"vira-red-on-self-header":{foreground:l["vira-red-60"],background:l["vira-red-5"]},"vira-red-on-self-placeholder":{foreground:l["vira-red-50"],background:l["vira-red-5"]},"vira-red-on-self-decoration":{foreground:l["vira-red-30"],background:l["vira-red-5"]},"vira-red-on-self-invisible":{foreground:l["vira-red-20"],background:l["vira-red-5"]},"vira-orange-foreground-small-body":{foreground:l["vira-orange-90"]},"vira-orange-foreground-body":{foreground:l["vira-orange-80"]},"vira-orange-foreground-non-body":{foreground:l["vira-orange-60"]},"vira-orange-foreground-header":{foreground:l["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:l["vira-orange-40"]},"vira-orange-foreground-decoration":{foreground:l["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:l["vira-orange-10"]},"vira-orange-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:l["vira-orange-90"]},"vira-orange-behind-bg-body":{foreground:{refDefaultBackground:!0},background:l["vira-orange-80"]},"vira-orange-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:l["vira-orange-60"]},"vira-orange-behind-bg-header":{foreground:{refDefaultBackground:!0},background:l["vira-orange-40"]},"vira-orange-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:l["vira-orange-30"]},"vira-orange-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:l["vira-orange-20"]},"vira-orange-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:l["vira-orange-5"]},"vira-orange-behind-fg-small-body":{background:l["vira-orange-5"]},"vira-orange-behind-fg-body":{background:l["vira-orange-20"]},"vira-orange-behind-fg-non-body":{background:l["vira-orange-30"]},"vira-orange-behind-fg-header":{background:l["vira-orange-50"]},"vira-orange-behind-fg-placeholder":{background:l["vira-orange-60"]},"vira-orange-behind-fg-decoration":{background:l["vira-orange-80"]},"vira-orange-behind-fg-invisible":{background:l["vira-orange-90"]},"vira-orange-on-self-body":{foreground:l["vira-orange-90"],background:l["vira-orange-5"]},"vira-orange-on-self-non-body":{foreground:l["vira-orange-80"],background:l["vira-orange-5"]},"vira-orange-on-self-header":{foreground:l["vira-orange-60"],background:l["vira-orange-5"]},"vira-orange-on-self-placeholder":{foreground:l["vira-orange-50"],background:l["vira-orange-5"]},"vira-orange-on-self-decoration":{foreground:l["vira-orange-30"],background:l["vira-orange-5"]},"vira-orange-on-self-invisible":{foreground:l["vira-orange-20"],background:l["vira-orange-5"]},"vira-yellow-foreground-small-body":{foreground:l["vira-yellow-90"]},"vira-yellow-foreground-body":{foreground:l["vira-yellow-80"]},"vira-yellow-foreground-non-body":{foreground:l["vira-yellow-60"]},"vira-yellow-foreground-header":{foreground:l["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:l["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:l["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:l["vira-yellow-5"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:l["vira-yellow-90"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:l["vira-yellow-70"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:l["vira-yellow-60"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:l["vira-yellow-40"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:l["vira-yellow-30"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:l["vira-yellow-20"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:l["vira-yellow-5"]},"vira-yellow-behind-fg-small-body":{background:l["vira-yellow-5"]},"vira-yellow-behind-fg-body":{background:l["vira-yellow-20"]},"vira-yellow-behind-fg-non-body":{background:l["vira-yellow-30"]},"vira-yellow-behind-fg-header":{background:l["vira-yellow-50"]},"vira-yellow-behind-fg-placeholder":{background:l["vira-yellow-60"]},"vira-yellow-behind-fg-decoration":{background:l["vira-yellow-80"]},"vira-yellow-behind-fg-invisible":{background:l["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:l["vira-yellow-90"],background:l["vira-yellow-5"]},"vira-yellow-on-self-non-body":{foreground:l["vira-yellow-80"],background:l["vira-yellow-5"]},"vira-yellow-on-self-header":{foreground:l["vira-yellow-60"],background:l["vira-yellow-5"]},"vira-yellow-on-self-placeholder":{foreground:l["vira-yellow-50"],background:l["vira-yellow-5"]},"vira-yellow-on-self-decoration":{foreground:l["vira-yellow-30"],background:l["vira-yellow-5"]},"vira-yellow-on-self-invisible":{foreground:l["vira-yellow-20"],background:l["vira-yellow-5"]},"vira-green-foreground-small-body":{foreground:l["vira-green-90"]},"vira-green-foreground-body":{foreground:l["vira-green-80"]},"vira-green-foreground-non-body":{foreground:l["vira-green-60"]},"vira-green-foreground-header":{foreground:l["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:l["vira-green-30"]},"vira-green-foreground-decoration":{foreground:l["vira-green-20"]},"vira-green-foreground-invisible":{foreground:l["vira-green-5"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:l["vira-green-90"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:l["vira-green-70"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:l["vira-green-60"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:l["vira-green-40"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:l["vira-green-30"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:l["vira-green-20"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:l["vira-green-5"]},"vira-green-behind-fg-small-body":{background:l["vira-green-5"]},"vira-green-behind-fg-body":{background:l["vira-green-20"]},"vira-green-behind-fg-non-body":{background:l["vira-green-30"]},"vira-green-behind-fg-header":{background:l["vira-green-50"]},"vira-green-behind-fg-placeholder":{background:l["vira-green-60"]},"vira-green-behind-fg-decoration":{background:l["vira-green-80"]},"vira-green-behind-fg-invisible":{background:l["vira-green-90"]},"vira-green-on-self-body":{foreground:l["vira-green-90"],background:l["vira-green-5"]},"vira-green-on-self-non-body":{foreground:l["vira-green-70"],background:l["vira-green-5"]},"vira-green-on-self-header":{foreground:l["vira-green-60"],background:l["vira-green-5"]},"vira-green-on-self-placeholder":{foreground:l["vira-green-40"],background:l["vira-green-5"]},"vira-green-on-self-decoration":{foreground:l["vira-green-30"],background:l["vira-green-5"]},"vira-green-on-self-invisible":{foreground:l["vira-green-20"],background:l["vira-green-5"]},"vira-teal-foreground-small-body":{foreground:l["vira-teal-90"]},"vira-teal-foreground-body":{foreground:l["vira-teal-80"]},"vira-teal-foreground-non-body":{foreground:l["vira-teal-60"]},"vira-teal-foreground-header":{foreground:l["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:l["vira-teal-30"]},"vira-teal-foreground-decoration":{foreground:l["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:l["vira-teal-5"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:l["vira-teal-90"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:l["vira-teal-80"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:l["vira-teal-60"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:l["vira-teal-40"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:l["vira-teal-30"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:l["vira-teal-20"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:l["vira-teal-5"]},"vira-teal-behind-fg-small-body":{background:l["vira-teal-5"]},"vira-teal-behind-fg-body":{background:l["vira-teal-20"]},"vira-teal-behind-fg-non-body":{background:l["vira-teal-30"]},"vira-teal-behind-fg-header":{background:l["vira-teal-50"]},"vira-teal-behind-fg-placeholder":{background:l["vira-teal-60"]},"vira-teal-behind-fg-decoration":{background:l["vira-teal-80"]},"vira-teal-behind-fg-invisible":{background:l["vira-teal-90"]},"vira-teal-on-self-body":{foreground:l["vira-teal-90"],background:l["vira-teal-5"]},"vira-teal-on-self-non-body":{foreground:l["vira-teal-70"],background:l["vira-teal-5"]},"vira-teal-on-self-header":{foreground:l["vira-teal-60"],background:l["vira-teal-5"]},"vira-teal-on-self-placeholder":{foreground:l["vira-teal-40"],background:l["vira-teal-5"]},"vira-teal-on-self-decoration":{foreground:l["vira-teal-30"],background:l["vira-teal-5"]},"vira-teal-on-self-invisible":{foreground:l["vira-teal-10"],background:l["vira-teal-5"]},"vira-blue-foreground-small-body":{foreground:l["vira-blue-90"]},"vira-blue-foreground-body":{foreground:l["vira-blue-80"]},"vira-blue-foreground-non-body":{foreground:l["vira-blue-70"]},"vira-blue-foreground-header":{foreground:l["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:l["vira-blue-30"]},"vira-blue-foreground-decoration":{foreground:l["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:l["vira-blue-10"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:l["vira-blue-90"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:l["vira-blue-80"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:l["vira-blue-60"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:l["vira-blue-40"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:l["vira-blue-30"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:l["vira-blue-20"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:l["vira-blue-5"]},"vira-blue-behind-fg-small-body":{background:l["vira-blue-5"]},"vira-blue-behind-fg-body":{background:l["vira-blue-20"]},"vira-blue-behind-fg-non-body":{background:l["vira-blue-30"]},"vira-blue-behind-fg-header":{background:l["vira-blue-50"]},"vira-blue-behind-fg-placeholder":{background:l["vira-blue-60"]},"vira-blue-behind-fg-decoration":{background:l["vira-blue-80"]},"vira-blue-behind-fg-invisible":{background:l["vira-blue-90"]},"vira-blue-on-self-body":{foreground:l["vira-blue-90"],background:l["vira-blue-5"]},"vira-blue-on-self-non-body":{foreground:l["vira-blue-80"],background:l["vira-blue-5"]},"vira-blue-on-self-header":{foreground:l["vira-blue-60"],background:l["vira-blue-5"]},"vira-blue-on-self-placeholder":{foreground:l["vira-blue-50"],background:l["vira-blue-5"]},"vira-blue-on-self-decoration":{foreground:l["vira-blue-30"],background:l["vira-blue-5"]},"vira-blue-on-self-invisible":{foreground:l["vira-blue-10"],background:l["vira-blue-5"]},"vira-purple-foreground-small-body":{foreground:l["vira-purple-90"]},"vira-purple-foreground-body":{foreground:l["vira-purple-80"]},"vira-purple-foreground-non-body":{foreground:l["vira-purple-60"]},"vira-purple-foreground-header":{foreground:l["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:l["vira-purple-30"]},"vira-purple-foreground-decoration":{foreground:l["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:l["vira-purple-5"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:l["vira-purple-90"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:l["vira-purple-80"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:l["vira-purple-60"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:l["vira-purple-40"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:l["vira-purple-30"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:l["vira-purple-20"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:l["vira-purple-5"]},"vira-purple-behind-fg-small-body":{background:l["vira-purple-5"]},"vira-purple-behind-fg-body":{background:l["vira-purple-20"]},"vira-purple-behind-fg-non-body":{background:l["vira-purple-30"]},"vira-purple-behind-fg-header":{background:l["vira-purple-50"]},"vira-purple-behind-fg-placeholder":{background:l["vira-purple-60"]},"vira-purple-behind-fg-decoration":{background:l["vira-purple-80"]},"vira-purple-behind-fg-invisible":{background:l["vira-purple-90"]},"vira-purple-on-self-body":{foreground:l["vira-purple-90"],background:l["vira-purple-5"]},"vira-purple-on-self-non-body":{foreground:l["vira-purple-70"],background:l["vira-purple-5"]},"vira-purple-on-self-header":{foreground:l["vira-purple-60"],background:l["vira-purple-5"]},"vira-purple-on-self-placeholder":{foreground:l["vira-purple-40"],background:l["vira-purple-5"]},"vira-purple-on-self-decoration":{foreground:l["vira-purple-30"],background:l["vira-purple-5"]},"vira-purple-on-self-invisible":{foreground:l["vira-purple-10"],background:l["vira-purple-5"]},"vira-pink-foreground-small-body":{foreground:l["vira-pink-90"]},"vira-pink-foreground-body":{foreground:l["vira-pink-80"]},"vira-pink-foreground-non-body":{foreground:l["vira-pink-60"]},"vira-pink-foreground-header":{foreground:l["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:l["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:l["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:l["vira-pink-10"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:l["vira-pink-90"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:l["vira-pink-80"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:l["vira-pink-60"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:l["vira-pink-40"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:l["vira-pink-30"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:l["vira-pink-20"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:l["vira-pink-5"]},"vira-pink-behind-fg-small-body":{background:l["vira-pink-5"]},"vira-pink-behind-fg-body":{background:l["vira-pink-20"]},"vira-pink-behind-fg-non-body":{background:l["vira-pink-30"]},"vira-pink-behind-fg-header":{background:l["vira-pink-50"]},"vira-pink-behind-fg-placeholder":{background:l["vira-pink-60"]},"vira-pink-behind-fg-decoration":{background:l["vira-pink-80"]},"vira-pink-behind-fg-invisible":{background:l["vira-pink-90"]},"vira-pink-on-self-body":{foreground:l["vira-pink-90"],background:l["vira-pink-5"]},"vira-pink-on-self-non-body":{foreground:l["vira-pink-80"],background:l["vira-pink-5"]},"vira-pink-on-self-header":{foreground:l["vira-pink-60"],background:l["vira-pink-5"]},"vira-pink-on-self-placeholder":{foreground:l["vira-pink-50"],background:l["vira-pink-5"]},"vira-pink-on-self-decoration":{foreground:l["vira-pink-30"],background:l["vira-pink-5"]},"vira-pink-on-self-invisible":{foreground:l["vira-pink-20"],background:l["vira-pink-5"]},"vira-grey-foreground-small-body":{foreground:l["vira-grey-90"]},"vira-grey-foreground-body":{foreground:l["vira-grey-80"]},"vira-grey-foreground-non-body":{foreground:l["vira-grey-60"]},"vira-grey-foreground-header":{foreground:l["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:l["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:l["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:l["vira-grey-5"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:l["vira-grey-90"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:l["vira-grey-80"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:l["vira-grey-60"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:l["vira-grey-40"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:l["vira-grey-30"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:l["vira-grey-20"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:l["vira-grey-5"]},"vira-grey-behind-fg-small-body":{background:l["vira-grey-5"]},"vira-grey-behind-fg-body":{background:l["vira-grey-20"]},"vira-grey-behind-fg-non-body":{background:l["vira-grey-30"]},"vira-grey-behind-fg-header":{background:l["vira-grey-50"]},"vira-grey-behind-fg-placeholder":{background:l["vira-grey-60"]},"vira-grey-behind-fg-decoration":{background:l["vira-grey-80"]},"vira-grey-behind-fg-invisible":{background:l["vira-grey-90"]},"vira-grey-on-self-body":{foreground:l["vira-grey-90"],background:l["vira-grey-5"]},"vira-grey-on-self-non-body":{foreground:l["vira-grey-70"],background:l["vira-grey-5"]},"vira-grey-on-self-header":{foreground:l["vira-grey-60"],background:l["vira-grey-5"]},"vira-grey-on-self-placeholder":{foreground:l["vira-grey-40"],background:l["vira-grey-5"]},"vira-grey-on-self-decoration":{foreground:l["vira-grey-30"],background:l["vira-grey-5"]},"vira-grey-on-self-invisible":{foreground:l["vira-grey-10"],background:l["vira-grey-5"]}}),$P=wP(Je,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:l["vira-red-5"]},"vira-red-foreground-body":{foreground:l["vira-red-20"]},"vira-red-foreground-non-body":{foreground:l["vira-red-30"]},"vira-red-foreground-placeholder":{foreground:l["vira-red-60"]},"vira-red-foreground-decoration":{foreground:l["vira-red-80"]},"vira-red-foreground-invisible":{foreground:l["vira-red-90"]},"vira-red-behind-bg-small-body":{background:l["vira-red-5"]},"vira-red-behind-bg-body":{background:l["vira-red-20"]},"vira-red-behind-bg-non-body":{background:l["vira-red-30"]},"vira-red-behind-bg-header":{background:l["vira-red-50"]},"vira-red-behind-bg-placeholder":{background:l["vira-red-60"]},"vira-red-behind-bg-decoration":{background:l["vira-red-80"]},"vira-red-behind-bg-invisible":{background:l["vira-red-90"]},"vira-red-behind-fg-small-body":{background:l["vira-red-90"]},"vira-red-behind-fg-body":{background:l["vira-red-80"]},"vira-red-behind-fg-non-body":{background:l["vira-red-60"]},"vira-red-behind-fg-header":{background:l["vira-red-40"]},"vira-red-behind-fg-placeholder":{background:l["vira-red-30"]},"vira-red-behind-fg-decoration":{background:l["vira-red-20"]},"vira-red-behind-fg-invisible":{background:l["vira-red-5"]},"vira-red-on-self-body":{foreground:l["vira-red-10"],background:l["vira-red-90"]},"vira-red-on-self-non-body":{foreground:l["vira-red-20"],background:l["vira-red-90"]},"vira-red-on-self-header":{foreground:l["vira-red-40"],background:l["vira-red-90"]},"vira-red-on-self-placeholder":{background:l["vira-red-90"]},"vira-red-on-self-decoration":{foreground:l["vira-red-70"],background:l["vira-red-90"]},"vira-red-on-self-invisible":{foreground:l["vira-red-80"],background:l["vira-red-90"]},"vira-orange-foreground-small-body":{foreground:l["vira-orange-5"]},"vira-orange-foreground-body":{foreground:l["vira-orange-20"]},"vira-orange-foreground-non-body":{foreground:l["vira-orange-30"]},"vira-orange-foreground-placeholder":{foreground:l["vira-orange-60"]},"vira-orange-foreground-decoration":{foreground:l["vira-orange-80"]},"vira-orange-foreground-invisible":{foreground:l["vira-orange-90"]},"vira-orange-behind-bg-small-body":{background:l["vira-orange-5"]},"vira-orange-behind-bg-body":{background:l["vira-orange-20"]},"vira-orange-behind-bg-non-body":{background:l["vira-orange-30"]},"vira-orange-behind-bg-header":{background:l["vira-orange-50"]},"vira-orange-behind-bg-placeholder":{background:l["vira-orange-60"]},"vira-orange-behind-bg-decoration":{background:l["vira-orange-80"]},"vira-orange-behind-bg-invisible":{background:l["vira-orange-90"]},"vira-orange-behind-fg-small-body":{background:l["vira-orange-90"]},"vira-orange-behind-fg-body":{background:l["vira-orange-80"]},"vira-orange-behind-fg-non-body":{background:l["vira-orange-60"]},"vira-orange-behind-fg-header":{background:l["vira-orange-40"]},"vira-orange-behind-fg-placeholder":{background:l["vira-orange-30"]},"vira-orange-behind-fg-decoration":{background:l["vira-orange-20"]},"vira-orange-behind-fg-invisible":{background:l["vira-orange-5"]},"vira-orange-on-self-body":{foreground:l["vira-orange-10"],background:l["vira-orange-90"]},"vira-orange-on-self-non-body":{foreground:l["vira-orange-20"],background:l["vira-orange-90"]},"vira-orange-on-self-header":{foreground:l["vira-orange-40"],background:l["vira-orange-90"]},"vira-orange-on-self-placeholder":{background:l["vira-orange-90"]},"vira-orange-on-self-decoration":{foreground:l["vira-orange-70"],background:l["vira-orange-90"]},"vira-orange-on-self-invisible":{foreground:l["vira-orange-80"],background:l["vira-orange-90"]},"vira-yellow-foreground-small-body":{foreground:l["vira-yellow-5"]},"vira-yellow-foreground-body":{foreground:l["vira-yellow-20"]},"vira-yellow-foreground-non-body":{foreground:l["vira-yellow-30"]},"vira-yellow-foreground-placeholder":{foreground:l["vira-yellow-60"]},"vira-yellow-foreground-decoration":{foreground:l["vira-yellow-80"]},"vira-yellow-foreground-invisible":{foreground:l["vira-yellow-90"]},"vira-yellow-behind-bg-small-body":{background:l["vira-yellow-5"]},"vira-yellow-behind-bg-body":{background:l["vira-yellow-20"]},"vira-yellow-behind-bg-non-body":{background:l["vira-yellow-30"]},"vira-yellow-behind-bg-header":{background:l["vira-yellow-50"]},"vira-yellow-behind-bg-placeholder":{background:l["vira-yellow-60"]},"vira-yellow-behind-bg-decoration":{background:l["vira-yellow-80"]},"vira-yellow-behind-bg-invisible":{background:l["vira-yellow-90"]},"vira-yellow-behind-fg-small-body":{background:l["vira-yellow-90"]},"vira-yellow-behind-fg-body":{background:l["vira-yellow-70"]},"vira-yellow-behind-fg-non-body":{background:l["vira-yellow-60"]},"vira-yellow-behind-fg-header":{background:l["vira-yellow-40"]},"vira-yellow-behind-fg-placeholder":{background:l["vira-yellow-30"]},"vira-yellow-behind-fg-decoration":{background:l["vira-yellow-20"]},"vira-yellow-behind-fg-invisible":{background:l["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:l["vira-yellow-10"],background:l["vira-yellow-90"]},"vira-yellow-on-self-non-body":{foreground:l["vira-yellow-20"],background:l["vira-yellow-90"]},"vira-yellow-on-self-header":{foreground:l["vira-yellow-40"],background:l["vira-yellow-90"]},"vira-yellow-on-self-placeholder":{background:l["vira-yellow-90"]},"vira-yellow-on-self-decoration":{foreground:l["vira-yellow-70"],background:l["vira-yellow-90"]},"vira-yellow-on-self-invisible":{foreground:l["vira-yellow-80"],background:l["vira-yellow-90"]},"vira-green-foreground-small-body":{foreground:l["vira-green-5"]},"vira-green-foreground-body":{foreground:l["vira-green-20"]},"vira-green-foreground-non-body":{foreground:l["vira-green-30"]},"vira-green-foreground-placeholder":{foreground:l["vira-green-60"]},"vira-green-foreground-decoration":{foreground:l["vira-green-80"]},"vira-green-foreground-invisible":{foreground:l["vira-green-90"]},"vira-green-behind-bg-small-body":{background:l["vira-green-5"]},"vira-green-behind-bg-body":{background:l["vira-green-20"]},"vira-green-behind-bg-non-body":{background:l["vira-green-30"]},"vira-green-behind-bg-header":{background:l["vira-green-50"]},"vira-green-behind-bg-placeholder":{background:l["vira-green-60"]},"vira-green-behind-bg-decoration":{background:l["vira-green-80"]},"vira-green-behind-bg-invisible":{background:l["vira-green-90"]},"vira-green-behind-fg-small-body":{background:l["vira-green-90"]},"vira-green-behind-fg-body":{background:l["vira-green-70"]},"vira-green-behind-fg-non-body":{background:l["vira-green-60"]},"vira-green-behind-fg-header":{background:l["vira-green-40"]},"vira-green-behind-fg-placeholder":{background:l["vira-green-30"]},"vira-green-behind-fg-decoration":{background:l["vira-green-20"]},"vira-green-behind-fg-invisible":{background:l["vira-green-5"]},"vira-green-on-self-body":{foreground:l["vira-green-10"],background:l["vira-green-90"]},"vira-green-on-self-non-body":{foreground:l["vira-green-20"],background:l["vira-green-90"]},"vira-green-on-self-header":{foreground:l["vira-green-40"],background:l["vira-green-90"]},"vira-green-on-self-placeholder":{foreground:l["vira-green-50"],background:l["vira-green-90"]},"vira-green-on-self-decoration":{foreground:l["vira-green-70"],background:l["vira-green-90"]},"vira-green-on-self-invisible":{foreground:l["vira-green-80"],background:l["vira-green-90"]},"vira-teal-foreground-small-body":{foreground:l["vira-teal-5"]},"vira-teal-foreground-body":{foreground:l["vira-teal-20"]},"vira-teal-foreground-non-body":{foreground:l["vira-teal-30"]},"vira-teal-foreground-placeholder":{foreground:l["vira-teal-60"]},"vira-teal-foreground-decoration":{foreground:l["vira-teal-80"]},"vira-teal-foreground-invisible":{foreground:l["vira-teal-90"]},"vira-teal-behind-bg-small-body":{background:l["vira-teal-5"]},"vira-teal-behind-bg-body":{background:l["vira-teal-20"]},"vira-teal-behind-bg-non-body":{background:l["vira-teal-30"]},"vira-teal-behind-bg-header":{background:l["vira-teal-50"]},"vira-teal-behind-bg-placeholder":{background:l["vira-teal-60"]},"vira-teal-behind-bg-decoration":{background:l["vira-teal-80"]},"vira-teal-behind-bg-invisible":{background:l["vira-teal-90"]},"vira-teal-behind-fg-small-body":{background:l["vira-teal-90"]},"vira-teal-behind-fg-body":{background:l["vira-teal-80"]},"vira-teal-behind-fg-non-body":{background:l["vira-teal-60"]},"vira-teal-behind-fg-header":{background:l["vira-teal-40"]},"vira-teal-behind-fg-placeholder":{background:l["vira-teal-30"]},"vira-teal-behind-fg-decoration":{background:l["vira-teal-20"]},"vira-teal-behind-fg-invisible":{background:l["vira-teal-5"]},"vira-teal-on-self-body":{foreground:l["vira-teal-10"],background:l["vira-teal-90"]},"vira-teal-on-self-non-body":{foreground:l["vira-teal-20"],background:l["vira-teal-90"]},"vira-teal-on-self-header":{foreground:l["vira-teal-40"],background:l["vira-teal-90"]},"vira-teal-on-self-placeholder":{foreground:l["vira-teal-50"],background:l["vira-teal-90"]},"vira-teal-on-self-decoration":{foreground:l["vira-teal-70"],background:l["vira-teal-90"]},"vira-teal-on-self-invisible":{foreground:l["vira-teal-80"],background:l["vira-teal-90"]},"vira-blue-foreground-small-body":{foreground:l["vira-blue-5"]},"vira-blue-foreground-body":{foreground:l["vira-blue-20"]},"vira-blue-foreground-non-body":{foreground:l["vira-blue-30"]},"vira-blue-foreground-placeholder":{foreground:l["vira-blue-60"]},"vira-blue-foreground-decoration":{foreground:l["vira-blue-80"]},"vira-blue-foreground-invisible":{foreground:l["vira-blue-90"]},"vira-blue-behind-bg-small-body":{background:l["vira-blue-5"]},"vira-blue-behind-bg-body":{background:l["vira-blue-20"]},"vira-blue-behind-bg-non-body":{background:l["vira-blue-30"]},"vira-blue-behind-bg-header":{background:l["vira-blue-50"]},"vira-blue-behind-bg-placeholder":{background:l["vira-blue-60"]},"vira-blue-behind-bg-decoration":{background:l["vira-blue-80"]},"vira-blue-behind-bg-invisible":{background:l["vira-blue-90"]},"vira-blue-behind-fg-small-body":{background:l["vira-blue-90"]},"vira-blue-behind-fg-body":{background:l["vira-blue-80"]},"vira-blue-behind-fg-non-body":{background:l["vira-blue-60"]},"vira-blue-behind-fg-header":{background:l["vira-blue-40"]},"vira-blue-behind-fg-placeholder":{background:l["vira-blue-30"]},"vira-blue-behind-fg-decoration":{background:l["vira-blue-20"]},"vira-blue-behind-fg-invisible":{background:l["vira-blue-5"]},"vira-blue-on-self-body":{foreground:l["vira-blue-10"],background:l["vira-blue-90"]},"vira-blue-on-self-non-body":{foreground:l["vira-blue-20"],background:l["vira-blue-90"]},"vira-blue-on-self-header":{foreground:l["vira-blue-40"],background:l["vira-blue-90"]},"vira-blue-on-self-placeholder":{background:l["vira-blue-90"]},"vira-blue-on-self-decoration":{foreground:l["vira-blue-70"],background:l["vira-blue-90"]},"vira-blue-on-self-invisible":{foreground:l["vira-blue-80"],background:l["vira-blue-90"]},"vira-purple-foreground-small-body":{foreground:l["vira-purple-5"]},"vira-purple-foreground-body":{foreground:l["vira-purple-20"]},"vira-purple-foreground-non-body":{foreground:l["vira-purple-30"]},"vira-purple-foreground-placeholder":{foreground:l["vira-purple-60"]},"vira-purple-foreground-decoration":{foreground:l["vira-purple-80"]},"vira-purple-foreground-invisible":{foreground:l["vira-purple-90"]},"vira-purple-behind-bg-small-body":{background:l["vira-purple-5"]},"vira-purple-behind-bg-body":{background:l["vira-purple-20"]},"vira-purple-behind-bg-non-body":{background:l["vira-purple-30"]},"vira-purple-behind-bg-header":{background:l["vira-purple-50"]},"vira-purple-behind-bg-placeholder":{background:l["vira-purple-60"]},"vira-purple-behind-bg-decoration":{background:l["vira-purple-80"]},"vira-purple-behind-bg-invisible":{background:l["vira-purple-90"]},"vira-purple-behind-fg-small-body":{background:l["vira-purple-90"]},"vira-purple-behind-fg-body":{background:l["vira-purple-80"]},"vira-purple-behind-fg-non-body":{background:l["vira-purple-60"]},"vira-purple-behind-fg-header":{background:l["vira-purple-40"]},"vira-purple-behind-fg-placeholder":{background:l["vira-purple-30"]},"vira-purple-behind-fg-decoration":{background:l["vira-purple-20"]},"vira-purple-behind-fg-invisible":{background:l["vira-purple-5"]},"vira-purple-on-self-body":{foreground:l["vira-purple-10"],background:l["vira-purple-90"]},"vira-purple-on-self-non-body":{foreground:l["vira-purple-20"],background:l["vira-purple-90"]},"vira-purple-on-self-header":{foreground:l["vira-purple-40"],background:l["vira-purple-90"]},"vira-purple-on-self-placeholder":{foreground:l["vira-purple-50"],background:l["vira-purple-90"]},"vira-purple-on-self-decoration":{foreground:l["vira-purple-70"],background:l["vira-purple-90"]},"vira-purple-on-self-invisible":{foreground:l["vira-purple-80"],background:l["vira-purple-90"]},"vira-pink-foreground-small-body":{foreground:l["vira-pink-5"]},"vira-pink-foreground-body":{foreground:l["vira-pink-20"]},"vira-pink-foreground-non-body":{foreground:l["vira-pink-30"]},"vira-pink-foreground-placeholder":{foreground:l["vira-pink-60"]},"vira-pink-foreground-decoration":{foreground:l["vira-pink-80"]},"vira-pink-foreground-invisible":{foreground:l["vira-pink-90"]},"vira-pink-behind-bg-small-body":{background:l["vira-pink-5"]},"vira-pink-behind-bg-body":{background:l["vira-pink-20"]},"vira-pink-behind-bg-non-body":{background:l["vira-pink-30"]},"vira-pink-behind-bg-header":{background:l["vira-pink-50"]},"vira-pink-behind-bg-placeholder":{background:l["vira-pink-60"]},"vira-pink-behind-bg-decoration":{background:l["vira-pink-80"]},"vira-pink-behind-bg-invisible":{background:l["vira-pink-90"]},"vira-pink-behind-fg-small-body":{background:l["vira-pink-90"]},"vira-pink-behind-fg-body":{background:l["vira-pink-80"]},"vira-pink-behind-fg-non-body":{background:l["vira-pink-60"]},"vira-pink-behind-fg-header":{background:l["vira-pink-40"]},"vira-pink-behind-fg-placeholder":{background:l["vira-pink-30"]},"vira-pink-behind-fg-decoration":{background:l["vira-pink-20"]},"vira-pink-behind-fg-invisible":{background:l["vira-pink-5"]},"vira-pink-on-self-body":{foreground:l["vira-pink-10"],background:l["vira-pink-90"]},"vira-pink-on-self-non-body":{foreground:l["vira-pink-20"],background:l["vira-pink-90"]},"vira-pink-on-self-header":{foreground:l["vira-pink-40"],background:l["vira-pink-90"]},"vira-pink-on-self-placeholder":{background:l["vira-pink-90"]},"vira-pink-on-self-decoration":{foreground:l["vira-pink-70"],background:l["vira-pink-90"]},"vira-pink-on-self-invisible":{foreground:l["vira-pink-80"],background:l["vira-pink-90"]},"vira-grey-foreground-small-body":{foreground:l["vira-grey-5"]},"vira-grey-foreground-body":{foreground:l["vira-grey-20"]},"vira-grey-foreground-non-body":{foreground:l["vira-grey-30"]},"vira-grey-foreground-placeholder":{foreground:l["vira-grey-60"]},"vira-grey-foreground-decoration":{foreground:l["vira-grey-80"]},"vira-grey-foreground-invisible":{foreground:l["vira-grey-90"]},"vira-grey-behind-bg-small-body":{background:l["vira-grey-5"]},"vira-grey-behind-bg-body":{background:l["vira-grey-20"]},"vira-grey-behind-bg-non-body":{background:l["vira-grey-30"]},"vira-grey-behind-bg-header":{background:l["vira-grey-50"]},"vira-grey-behind-bg-placeholder":{background:l["vira-grey-60"]},"vira-grey-behind-bg-decoration":{background:l["vira-grey-80"]},"vira-grey-behind-bg-invisible":{background:l["vira-grey-90"]},"vira-grey-behind-fg-small-body":{background:l["vira-grey-90"]},"vira-grey-behind-fg-body":{background:l["vira-grey-80"]},"vira-grey-behind-fg-non-body":{background:l["vira-grey-60"]},"vira-grey-behind-fg-header":{background:l["vira-grey-40"]},"vira-grey-behind-fg-placeholder":{background:l["vira-grey-30"]},"vira-grey-behind-fg-decoration":{background:l["vira-grey-20"]},"vira-grey-behind-fg-invisible":{background:l["vira-grey-5"]},"vira-grey-on-self-body":{foreground:l["vira-grey-10"],background:l["vira-grey-90"]},"vira-grey-on-self-non-body":{foreground:l["vira-grey-20"],background:l["vira-grey-90"]},"vira-grey-on-self-header":{foreground:l["vira-grey-40"],background:l["vira-grey-90"]},"vira-grey-on-self-placeholder":{foreground:l["vira-grey-50"],background:l["vira-grey-90"]},"vira-grey-on-self-decoration":{foreground:l["vira-grey-70"],background:l["vira-grey-90"]},"vira-grey-on-self-invisible":{foreground:l["vira-grey-80"],background:l["vira-grey-90"]}}}),b1="8px",T=Gn({"vira-form-border-color":Je.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":Je.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":Je.colors[Lo].background.value,"vira-form-foreground-color":Je.colors[Lo].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":Je.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":Je.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":Je.colors["vira-blue-behind-bg-invisible"].background.value,"vira-form-selection-active-color":Je.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-error-color":Je.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":Je.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":Je.colors["vira-red-behind-bg-body"].background.value,"vira-form-success-color":Je.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-radius":b1,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":Je.colors["vira-blue-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":A`calc(var(--vira-form-radius, ${Ie(b1)}) + 2px)`,"vira-form-plain-color":l["vira-grey-0"].value,"vira-form-plain-hover-color":Je.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":Je.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":Je.colors["vira-blue-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":Je.colors["vira-blue-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":Je.colors["vira-blue-behind-bg-body"].background.value,"vira-form-danger-color":Je.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":Je.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":Je.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":Je.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":Je.colors["vira-grey-foreground-decoration"].foreground.value});function Ku({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const o=Ie(ou(r+t+e)),i=A`
        content: '';
        top: calc(${o} * -1);
        left: calc(${o} * -1);
        position: absolute;
        width: calc(100% + calc(${o} * 2));
        height: calc(100% + calc(${o} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${r}px solid ${T["vira-form-focus-outline-color"].value};
        border-radius: ${T["vira-form-focus-outline-border-radius"].value};
        z-index: 100;
    `;return n?i:A`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${i}
        }
    `}const I=tt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>A`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),ae=tt()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal,"vira-checkbox-filled-checked":({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-unchecked":({inputs:e})=>!!e.fillWhenUnchecked},styles:({hostClasses:e})=>A`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${I} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            ${b["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        ${e["vira-checkbox-filled-checked"].selector} {
            & .custom-checkbox.checked {
                color: ${T["vira-form-background-color"].value};
                background-color: ${T["vira-form-accent-primary-color"].value};
            }

            label {
                &:hover .custom-checkbox.checked {
                    background-color: ${T["vira-form-accent-primary-hover-color"].value};
                }

                &:active .custom-checkbox.checked {
                    background-color: ${T["vira-form-accent-primary-active-color"].value};
                }
            }
        }
        ${e["vira-checkbox-filled-unchecked"].selector} {
            & .custom-checkbox:not(.checked) {
                color: ${T["vira-form-background-color"].value};
                background-color: ${T["vira-form-error-color"].value};
            }

            label {
                &:hover .custom-checkbox:not(.checked) {
                    background-color: ${T["vira-form-error-hover-color"].value};
                }

                &:active .custom-checkbox:not(.checked) {
                    background-color: ${T["vira-form-error-active-color"].value};
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
                font-weight: ${T["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${T["vira-form-selection-hover-color"].value};
            }
            &:active .custom-checkbox {
                background-color: ${T["vira-form-selection-active-color"].value};
            }
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${T["vira-form-border-color"].value};
            color: ${T["vira-form-foreground-color"].value};
            border-radius: ${T["vira-form-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${Ku({elementBorderSize:1})}

            &.checked {
                & ${I} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${T["vira-form-error-color"].value};
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
    `,events:{valueChange:at()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}const o=e.label?g`
                  <span
                      class="label-text"
                      ${go(e.attributePassthrough?.text)}
                      style=${pt(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:Q;return g`
            <label
                class=${cr({disabled:!!e.disabled})}
                ${go(e.attributePassthrough?.label)}
                style=${pt(e.stylePassthrough?.label)}
                ${_("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${cr({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${pt(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${go(e.attributePassthrough?.["custom-checkbox"])}
                    style=${pt(e.stylePassthrough?.["custom-checkbox"])}
                    ${nN(n)}
                >
                    <${I.assign({icon:rg,fitContainer:!0})}
                        ${go(e.attributePassthrough?.[I.tagName])}
                        style=${pt(e.stylePassthrough?.[I.tagName])}
                    ></${I}>
                </span>
            </label>
        `}}),og=Gn({"vira-monospace":"monospace"}),Gu=A`
    padding: 0;
    margin: 0;
`,Rr=A`
    ${Gu};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,yf=Gn({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),Fi={menuShadow:A`
        filter: drop-shadow(0px 5px 5px ${yf["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:A`
        filter: drop-shadow(0px -5px 5px ${yf["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:A`
        box-shadow: 0 5px 15px ${yf["modal-shadow-color"].value};
    `},Ui=A`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`;function J0({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>J0({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function kP({value:e,allowed:t,blocked:r}){const n=String(e),o=t?J0({input:n,matcher:t}):!0,i=r?J0({input:n,matcher:r}):!1;return o&&!i}function Y0(e){const t=String(e.value);if(!e.value)return{filtered:t,blocked:""};const{filtered:r,blocked:n}=t.split("").reduce((o,i)=>(kP({...e,value:i})?o.filtered.push(i):o.blocked.push(i),o),{filtered:[],blocked:[]});return{filtered:r.join(""),blocked:n.join("")}}function xP({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){const i=cd(r,HTMLInputElement),s=F.hasKey(r,"data")&&Fh.isString(r.data)||"";if(s){const{blocked:u}=Y0({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=Y0({value:i.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;i.value!==a&&(i.value=a),t!==a&&o(a)}var Di=(e=>(e.Default="text",e.Password="password",e.Email="email",e.Number="number",e))(Di||{});const xe=tt()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>A`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${T["vira-form-foreground-color"].value};
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
                    font-weight: ${T["vira-form-label-font-weight"].value};
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
                ${Rr};
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
                ${Ui};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Rr};
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
                border-radius: ${T["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${T["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Rr};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${T["vira-form-radius"].value};
                background-color: ${T["vira-form-background-color"].value};
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
                ${Rr};
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
                    ${Ku({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${T["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${T["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${T["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Ui};
            }

            button {
                ${Rr};
                cursor: pointer;
                display: flex;
                transition: color
                    ${yo["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${T["vira-form-placeholder-color"].value};
            }

            .clear-x-button:hover {
                color: ${T["vira-form-error-color"].value};
            }

            .clear-x-button:active {
                color: ${T["vira-form-error-active-color"].value};
            }

            .show-password-button:hover {
                color: ${T["vira-form-accent-primary-color"].value};
            }

            .show-password-button:active {
                color: ${T["vira-form-accent-primary-active-color"].value};
            }

            ${e["vira-input-error"].selector} {
                & .wrapper-border {
                    border-color: ${T["vira-form-error-color"].value};
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
        `,events:{valueChange:at(),inputBlocked:at()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Ei(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:o,host:i})=>{const{filtered:s}=Y0({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?g`
                  <${I.assign({icon:e.icon})} class="left-side-icon"></${I}>
              `:Q,u=e.fitText?A`
                  width: ${r.forcedInputWidth}px;
              `:Q,c=_("mousedown",h=>{const m=cd(h,HTMLElement,{useOriginalTarget:!0}),y=_t.instanceOf(i.shadowRoot.querySelector("input"),HTMLInputElement);m!==y&&(h.preventDefault(),y.focus())}),d=e.disableBrowserHelps||e.type==="password",f=g`
            <span class="input-wrapper" ${e.label?Q:c}>
                ${a}
                ${Mr(!!e.fitText,g`
                        <span
                            class="size-span"
                            ${I5(({contentRect:h})=>{n({forcedInputWidth:h.width})})}
                        >
                            <pre>${s||e.placeholder||Q}</pre>
                        </span>
                    `)}

                <input
                    id=${pt(e.label?r.randomId:void 0)}
                    aria-label=${pt(e.label||void 0)}
                    autofocus=${!1}
                    type=${DP(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${pt(d?"off":void 0)}
                    autocorrect=${pt(d?"off":void 0)}
                    autocapitalize=${pt(d?"off":void 0)}
                    spellcheck=${pt(d?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${_("input",h=>{xP({inputs:e,previousValue:s,event:h,inputBlockedCallback(m){t(new o.inputBlocked(m))},newValueCallback(m){t(new o.valueChange(m))}})})}
                    placeholder=${pt(e.placeholder||void 0)}
                    ${go(e.attributePassthrough)}
                />

                ${Mr(!!(e.showClearButton&&e.value),g`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${_("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${_("click",()=>{e.disabled||t(new o.valueChange(""))})}
                        >
                            <${I.assign({icon:G5})}></${I}>
                        </button>
                    `)}
                ${Mr(e.type==="password",g`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${_("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${_("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${I.assign({icon:r.showPassword?J5:Z5})}></${I}>
                        </button>
                    `)}
                ${Mr(!!e.suffix,g`
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
                <label for=${r.randomId} ${c}>
                    <span class="input-label">${e.label}</span>
                    ${f}
                </label>
            `:f}});function DP(e,t){return e==="password"&&t?"text":e||"text"}const Re=tt()({tagName:"vira-select",state(){return{randomId:Ei(32)}},events:{valueChange:at()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${T["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Rr};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${T["vira-form-radius"].value};
            color: ${T["vira-form-foreground-color"].value};
            background-color: ${T["vira-form-background-color"].value};
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
                    ${Ku({elementBorderSize:0,noNesting:!0})}
                }

                &.placeholder {
                    color: ${T["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${t["vira-select-icon-padding"].value};
                }
            }

            & ${I} {
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
                border-radius: ${T["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${T["vira-form-border-color"].value};
                transition: border
                    ${yo["vira-interaction-animation-duration"].value};
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
                font-weight: ${T["vira-form-label-font-weight"].value};
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
            ${I} {
                ${_i}
            }
            & * {
                cursor: not-allowed;
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${T["vira-form-error-color"].value};
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
                    class=${cr({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${pt(e.label?t.randomId:void 0)}
                    aria-label=${pt(e.label||void 0)}
                    aria-disabled=${pt(e.disabled?"true":void 0)}
                    ${_("input",a=>{const u=cd(a,HTMLSelectElement),c=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(d=>d.value===o)),r(new n.valueChange(c))})}
                    ${go(e.attributePassthrough?.select)}
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

                <${I.assign({icon:e.icon})} class="input-icon"></${I}>
                <${I.assign({icon:ng})} class="trigger-icon"></${I}>
            </span>
        `;return e.label?g`
                <label for=${t.randomId} ${go(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),kr=tt()({tagName:"vira-form",events:{valueChange:at(),validChange:at()},styles:A`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const i=UN(e.fields);i!==n.lastIsValid&&(o({lastIsValid:i}),t(new r.validChange({allFieldsAreValid:i})));const s=En(e.fields).map(([a,u])=>u.isHidden?Q:u.type===ke.Checkbox?g`
                        <${ae.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:vl(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?Vn(u.testId):Q}
                            ${_(ae.events.valueChange,c=>{t(new r.valueChange({key:a,...u,value:c.detail}))})}
                        ></${ae}>
                    `:u.type===ke.Select?g`
                        <${Re.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:vl(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?Vn(u.testId):Q}
                            ${_(Re.events.valueChange,c=>{t(new r.valueChange({key:a,...u,value:c.detail}))})}
                        ></${Re}>
                    `:u.type===ke.Number?g`
                        <${xe.assign({value:u.value?.toString()||"",disabled:e.isDisabled||u.isDisabled,allowedInputs:/\d/,hasError:u.hasError,icon:u.icon,label:vl(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,type:Di.Number,attributePassthrough:{...u.min===void 0?{}:{min:String(u.min)},...u.max===void 0?{}:{max:String(u.max)},...u.step===void 0?{}:{step:String(u.step)}}})}
                            ${u.testId?Vn(u.testId):Q}
                            ${_(xe.events.valueChange,c=>{const d=c.detail===""?void 0:Number(c.detail);t(new r.valueChange({key:a,...u,value:d}))})}
                        ></${xe}>
                    `:g`
                        <${xe.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:vl(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===ke.NewPassword?{autocomplete:"new-password"}:u.type===ke.ExistingPassword?{autocomplete:"password"}:u.type===ke.Email?{autocomplete:"email"}:{},type:[ke.NewPassword,ke.ExistingPassword,ke.PlainPassword].includes(u.type)?Di.Password:u.type===ke.Email?Di.Email:Di.Default})}
                            ${u.testId?Vn(u.testId):Q}
                            ${_(xe.events.valueChange,c=>{t(new r.valueChange({key:a,...u,value:c.detail}))})}
                        ></${xe}>
                    `);return g`
            <form ${_("submit",a=>a.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}});function AP(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given: ${d2(r)}`)}function EP(e,t=[],r=!1){return r?t.includes(e.id)?t.filter(n=>n!==e.id):[...t,e.id]:[e.id]}function y1({open:e,callback:t,popUpManager:r,host:n,options:o}){if(e){const i=r.showPopUp(n,o);t?.(i)}else r.removePopUp(),t?.(void 0)}const Lr=tt()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            ${Ui};
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

        ${e["vira-menu-item-selected"].selector} ${I} {
            opacity: 1;
            visibility: visible;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${I} {
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
            visibility: hidden;
        }
    `,render({inputs:e}){return g`
            <div class="item">
                <${I.assign({icon:rg})}></${I}>
                <slot>${e.label}</slot>
            </div>
        `}});function CP(e,t){return e>t}function FP(e,t){return e<t}function wu(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var Wn;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Wn||(Wn={}));var Ce;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Ce||(Ce={}));function hd(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const o=n[t.x];if(o)if(o.navEntry.navParams.group){const i=hd(o.children);i&&(r=i.node)}else o.navEntry.navParams.disabled||(r=o)}}if(r)return{node:r,coords:t}}function v1(e,t,r,n){if(!t){const u=hd(e.children);return u?(wu(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:Ce.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:Ce.Navigate}}const{nextNode:o,requiresWrapping:i,coords:s}=e$(t.position,r),a=n?!0:!i;return o&&a?(wu(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:i,direction:r,navAction:Ce.Navigate,coords:s}):o?a?{success:!1,reason:"no conditions matched",direction:r,navAction:Ce.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:Ce.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:Ce.Navigate}}function e$(e,t){let r=!1,n,o=1;const i=Date.now();for(;!r||!n;)if(n=MP(e,t,o),r=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-i>1e3)return u2.warning("Failed to find next non-disabled node."),n;return n}function MP(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Dt.isDefined(n,"missing parent");const o=_t.isDefined(n.children[e.nodeCoords.y]),i=n.children.length>1&&(t===Wn.Down||t===Wn.Up),s=t===Wn.Down||t===Wn.Right?r:-1*r,a=s<0?CP:FP,u=i?Dp(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,c=_t.isDefined(n.children[u]),d=i?e.nodeCoords.x>=c.length?c.length-1:e.nodeCoords.x:Dp(e.nodeCoords.x+s,{min:0,max:o.length-1,takeOverflow:!0}),f=n.children[u]?.[d],h=i?a(u,e.nodeCoords.y):a(d,e.nodeCoords.x);return{nextNode:f,requiresWrapping:h,coords:{x:d,y:u}}}function SP(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:Ce.Pibling};const{nextNode:o,requiresWrapping:i,coords:s}=e$(n,t),a=o?.navEntry.navParams.group?hd(o.children):{node:o,coords:s},u=r?!0:!i;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:Ce.Pibling}:u?(wu(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:i,coords:a.coords,direction:t,navAction:Ce.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:Ce.Pibling}}var mr;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(mr||(mr={}));const kn={name:"data-nav",js(e){return e?`[${kn.name}*="${e}"]`:`[${kn.name}]`},css({baseSelector:e="",navValue:t}={}){return A`
            ${Ie(e)}${Ie(kn.js(t))}
        `}},ig="navEntry";function t$(e){return ig in e}function r$(e){if(t$(e)){const t=e[ig];return _t.instanceOf(t,n$,"Invalid nav entry")}else return}function TP(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==mr.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class n${element;navParams;navTreeNode;navValue;eventListener=TP(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Dt.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(kn.name,""),gf(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,o=t===(n===mr.Focused);if(!(this.navParams.group||this.navController.locked||o||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(mr.Focused),gf(this.element)||this.element.focus()):(this.removeNavValue(mr.Focused),gf(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,Ce.Focus)}activate(t){const r=this.navValue,n=t===(r===mr.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(mr.Active):this.setNavValue(mr.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,Ce.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(kn.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(kn.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function o$(e,t){Object.entries(t).forEach(([r,n])=>{F.isBoolean(n)&&n?e.setAttribute(r,""):F.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const NP=Jn(class extends Yn{element;lastKey;constructor(e){super(e),this.element=Wu(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Vr}});function PP(e){return"group"in e?mr.Group:e.disabled?mr.Disabled:""}function w1(e,t={}){return NP(v(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;Dt.instanceOf(r,HTMLElement);const o={[kn.name]:PP(t),tabindex:n?0:-1};o$(r,o);const i=r$(r)||new n$(r,e,t);t$(r)?(i.navParams=t,i.navController=e):r[ig]=i,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function IP(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Ce.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Ce.Enter};const r=t.position.node.children[0]?.[0];return r?(wu(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ce.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Ce.Enter}}function OP(e,t){return i$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function i$(e,t,r){for(let n=0;n<t.length;n++){const o=t[n];for(let i=0;i<o.length;i++){const s=o[i],a={ancestorChain:e,nodeCoords:{x:i,y:n},node:s};if(r(a))return a;const u=i$(e.concat(a),s.children,r);if(u)return u}}}function s$(e,t){const r=OP(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function BP(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Ce.Exit};const r=t.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Ce.Exit};const{nodeCoords:n}=s$(e,r.navEntry);return wu(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ce.Exit,coords:n}}class RP extends Pn()("nav-exit"){}class a$ extends Pn()("nav-activate"){}class LP extends Pn()("nav-focus"){}class jP extends Pn()("nav-enter"){}class _P extends Pn()("nav-navigate"){}class UP extends Pn()("nav-navigate-pibling"){}function zP(e){return{root:!0,children:u$(e)?.children||[]}}function u$(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=r$(t),n=VP(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function VP(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const o=n.navEntry.navParams.x,i=n.navEntry.navParams.y||0,s=Wi(t,i,()=>({noX:[],withX:[],y:i}));o==null?s.noX.push(n):s.withX.push({x:o,node:n})}return e.children.forEach(n=>{const o=u$(n);o&&r(o)}),t.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,i)=>o.x-i.x),n.withX.forEach(({x:o,node:i})=>{n.noX.splice(o,0,i)}),n.noX)).filter(F.isTruthy)}class l$ extends Th{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){hd(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=s$(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:o}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const i={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return r&&(n===Ce.Activate?this.dispatch(new a$({detail:i})):n===Ce.Focus&&this.dispatch(new LP({detail:i}))),i}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:Ce.Navigate,reason:"NavController is locked."};const n=v1(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new _P({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Ce.Enter,reason:"NavController is locked."};const r=IP(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new jP({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Ce.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Ce.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Dt.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Ce.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Ce.Activate&&this.currentNavEntry.entry.focus(!0);const t=BP(this.getNavTree(),this.currentNavEntry);return this.dispatch(new RP({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:Ce.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),i={...this.currentNavEntry?SP(this.currentNavEntry,r,t):v1(n,void 0,r,t),navAction:Ce.Pibling};return this.dispatch(new UP({detail:i})),i}buildNavTree(){const t=vN(this.rootElement),r=zP(t);return this.cachedNavTree=r,r}}const Ja=tt()({tagName:"vira-link",hostClasses:{"vira-link-link-styles":({inputs:e})=>!e.disableLinkStyles},styles:({hostClasses:e})=>A`
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
                color: ${T["vira-form-accent-primary-color"].value};
            }

            &:active a,
            & a:active {
                color: ${T["vira-form-accent-primary-active-color"].value};
            }
        }
    `,render({inputs:e}){function t(r){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,r)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(e.link?.newTab)return g`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${go(e.attributePassthrough?.a)}
                    style=${pt(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return g`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${go(e.attributePassthrough?.a)}
                    style=${pt(e.stylePassthrough?.a)}
                    ${_("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),$1={item:"menu-item"},Ya=tt()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new l$(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>A`
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
            background-color: ${T["vira-form-background-color"].value};
            color: ${T["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Rr};
            will-change: background-color;
            background-color: inherit;
            outline: none;

            &.default-pointer-styles {
                cursor: pointer;
            }
            &.no-default-pointer-styles {
                cursor: auto !important;
            }
        }

        ${kn.css({baseSelector:".menu-item.default-pointer-styles:not(.disabled):not(.selected)",navValue:mr.Focused})}, .menu-item.default-pointer-styles:not(.disabled):not(.selected):hover {
            background-color: ${T["vira-form-selection-hover-color"].value};
            outline: none;
        }
        ${kn.css({baseSelector:".menu-item.default-pointer-styles:not(.disabled):not(.selected)",navValue:mr.Active})}, .menu-item.default-pointer-styles:not(.disabled):not(.selected):active {
            background-color: ${T["vira-form-selection-active-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${kn.css({baseSelector:".menu-item:not(.disabled)",navValue:mr.Focused})},
                .menu-item:not(.disabled):hover {
                background-color: ${T["vira-form-selection-hover-color"].value};
                outline: none;
            }

            &
                ${kn.css({baseSelector:".menu-item:not(.disabled)",navValue:mr.Active})},
                .menu-item:not(.disabled):active {
                background-color: ${T["vira-form-selection-active-color"].value};
                outline: none;
            }
        }

        ${Lr} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${_i};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){AP(e.items);const r=e.items.map(n=>{const o=!!e.selected?.includes(n.id),i=F.isString(n.label)?g`
                      <${Lr.assign({label:n.label,selected:o,hideCheckIcon:e.hideCheckIcons})}></${Lr}>
                  `:n.label,s=n.disabled||!e.isMultiSelect&&o;return n.route?g`
                    <${Ja.assign({route:n.route,disableLinkStyles:!0})}
                        class="menu-item ${cr({disabled:!!n.disabled,selected:o,"default-pointer-styles":!n.disableDefaultPointerStyles,"no-default-pointer-styles":!!n.disableDefaultPointerStyles})}"
                        ${Vn($1.item)}
                        title=${pt(n.titleText||void 0)}
                        role="option"
                        ${w1(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </${Ja}>
                `:g`
                    <button
                        class="menu-item ${cr({disabled:!!n.disabled,selected:o,"default-pointer-styles":!n.disableDefaultPointerStyles,"no-default-pointer-styles":!!n.disableDefaultPointerStyles})}"
                        ${Vn($1.item)}
                        title=${pt(n.titleText||void 0)}
                        role="option"
                        ${w1(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </button>
                `});return g`
            ${r}
        `}});var sg=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(sg||{}),gc=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(gc||{});const Xa=tt()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${T["vira-form-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${T["vira-form-background-color"].value};
            border: 1px solid ${T["vira-form-border-color"].value};
            color: ${T["vira-form-foreground-color"].value};
            ${Fi.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${Fi.menuShadowReversed}
            border-radius: ${T["vira-form-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${T["vira-form-radius"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),wl=globalThis.document;class qP extends D5{constructor(){if(super({defaultValue:!!wl?.hidden,equalityCheck:F.strictEquals}),!wl)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,wl));const t=r=>this.updateVisibility(r,wl);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=KP.includes(t.type),o=WP.includes(t.type),i=n?!0:o?!1:r.hasFocus()||!r.hidden;this.setValue(i)}}const WP=["blur","focusout","pagehide"],KP=["focus","focusin","pageshow"],GP=new qP;function HP(e,t){return GP.listen(e,t)}function X0(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}const k1={top:0,left:0,right:0,bottom:0};class c$ extends Sh("hide-pop-up"){}class d$ extends Pn()("nav-select"){}class ZP{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new Th;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[HP(!1,t=>{t||this.removePopUp()}),this.navController.listen(a$,t=>{const r=t.composedPath()[0];r instanceof Element&&X0(r)||t.detail.success&&(this.listenTarget.dispatch(new d$({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),y0("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),y0("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=t.composedPath()[0];if(n instanceof Element&&X0(n))return;r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Wn.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Wn.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Wn.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:Wn.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault())}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new c$)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},o=$N(t);Dt.instanceOf(o,HTMLElement);const i=t.getBoundingClientRect(),s=o.getBoundingClientRect(),a=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,c=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},d=et(k1,y=>i[y]),f=et(k1,y=>{const $=c[y],k=d[y];return Math.abs($-k)}),h=f.top>f.bottom+n.verticalDiffThreshold&&f.bottom<n.minDownSpace,m=f.left>f.right+n.horizontalDiffThreshold&&f.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!h,popRight:!m,positions:{container:c,root:d,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Wo=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(Wo||{});const ce=tt()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new ZP(new l$(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>A`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Rr};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${Ku({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${Ui};
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
    `,events:{navSelect:at(),openChange:at(),init:at()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:o,events:i}){e.popUpManager.listen(c$,()=>{if(t({showPopUpResult:void 0}),o(new i.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");Dt.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(d$,s=>{n.keepOpenAfterInteraction||y1({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),o(new i.navSelect(s.detail))}),o(new i.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:o,host:i,slotNames:s}){function a({emitEvent:y,open:$},k){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&k){const x=i.shadowRoot.querySelector(".dropdown-trigger");if(x&&!k.composedPath().includes(x))return}y1({open:$,callback(x){o({showPopUpResult:x}),y&&e(new t.openChange(x))},host:i,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,c=u==="right"&&r.showPopUpResult?n.ignoreMaxWidth?A`
                          left: unset;
                      `:A`
                          left: -${r.showPopUpResult.positions.diff.left}px;
                      `:A`
                      left: ${n.popUpOffset?.left||0}px;
                  `,d=r.showPopUpResult&&u==="left"?n.ignoreMaxWidth?A`
                          right: unset;
                      `:A`
                          right: -${r.showPopUpResult.positions.diff.right}px;
                      `:A`
                      right: ${n.popUpOffset?.right||0}px;
                  `,f=A`
            ${c}
            ${d}
        `,h=r.showPopUpResult?r.showPopUpResult.popDown?n.ignoreMaxHeight?A`
                          bottom: unset;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${f}
                      `:A`
                          bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${f}
                      `:n.ignoreMaxHeight?A`
                        top: unset;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${f}
                    `:A`
                        top: -${r.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${f}
                    `:void 0;function m(y){a({emitEvent:!0,open:!r.showPopUpResult},y)}return g`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${cr({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${_("keydown",y=>{!r.showPopUpResult&&y.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},y)})}
                ${_("click",y=>{if(y.detail===0){let $=!1;if(kN(({element:k})=>X0(k)?($=!0,!0):!1),$)return;m(y)}})}
                ${_("mousedown",y=>{y.button===0&&m(y)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${cr({"right-aligned":u==="right"})}"
                    style=${h}
                >
                    ${Mr(!!r.showPopUpResult,g`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),JP={menu:"menu-trigger-menu"},jo=tt()({tagName:"vira-menu-trigger",styles:A`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${ce} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{itemActivate:at(),openChange:at()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:o}){return g`
            <${ce.assign({...e,keepOpenAfterInteraction:!0,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||Wo.Left})}
                class=${cr({open:!!t.showPopUpResult})}
                ${_(ce.events.init,i=>{r({navController:i.detail.navController,popUpManager:i.detail.popUpManager})})}
                ${_(ce.events.openChange,i=>{!!t.showPopUpResult!=!!i.detail&&n(new o.openChange(i.detail)),r({showPopUpResult:i.detail})})}
                ${_(ce.events.navSelect,i=>{const s=i.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);n(new o.itemActivate(EP(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${ce.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?g`
                          <${Xa.assign({direction:t.showPopUpResult.popDown?gc.Downwards:gc.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${ce.slotNames.popUp}
                              class=${cr({"full-width-menu":e.horizontalAnchor===Wo.Both})}
                          >
                              <${Ya.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Vn(JP.menu)}
                              ></${Ya}>
                          </${Xa}>
                      `:Q}
            </${ce}>
        `}}),ct=tt()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>A`
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
        `}});var Un=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e.Danger="vira-button-danger",e.DangerOutline="vira-button-danger-outline",e.Ghost="vira-button-ghost",e.Plain="vira-button-plain",e))(Un||{});const nt=tt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline"||e.buttonStyle==="vira-button-danger-outline","vira-button-danger-style":({inputs:e})=>e.buttonStyle==="vira-button-danger"||e.buttonStyle==="vira-button-danger-outline","vira-button-ghost-style":({inputs:e})=>e.buttonStyle==="vira-button-ghost","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon,"vira-button-icon-only":({inputs:e})=>!!e.icon&&!e.text,"vira-button-plain-style":({inputs:e})=>e.buttonStyle==="vira-button-plain","vira-button-default-style":({inputs:e})=>!e.buttonStyle||e.buttonStyle==="vira-button-default"},cssVars:{"vira-button-padding":"5px 10px","vira-button-internal-foreground-color":T["vira-form-background-color"].value,"vira-button-internal-background-color":T["vira-form-accent-primary-color"].value,"vira-button-border-color":"transparent"},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ui};
            ${T["vira-form-focus-outline-color"].name}: ${T["vira-form-accent-primary-hover-color"].value}
        }

        ${e["vira-button-icon-only"].selector} {
            ${t["vira-button-padding"].name}: 5px;
        }

        ${e["vira-button-disabled"].selector} {
            ${_i};
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${T["vira-form-accent-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${T["vira-form-accent-primary-active-color"].value};
        }

        ${e["vira-button-danger-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: ${T["vira-form-error-color"].value};
            }

            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${T["vira-form-error-hover-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${T["vira-form-error-active-color"].value};
            }
        }

        ${e["vira-button-ghost-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: transparent;
                ${t["vira-button-internal-foreground-color"].name}: currentColor;
            }

            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${T["vira-form-filled-background-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${T["vira-form-filled-active-background-color"].value};
            }
        }

        ${e["vira-button-plain-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: ${T["vira-form-plain-color"].value};
                color: currentColor;
                ${t["vira-button-border-color"].name}: ${T["vira-form-plain-active-color"].value};
                border-width: 1px;
            }
            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${T["vira-form-plain-hover-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${T["vira-form-plain-active-color"].value};
            }
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: ${t["vira-button-internal-foreground-color"].value};
            ${t["vira-button-border-color"].name}: currentColor;
        }

        button {
            ${Rr};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid ${t["vira-button-border-color"].value};
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${T["vira-form-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${yo["vira-interaction-animation-duration"].value},
                background-color
                    ${yo["vira-interaction-animation-duration"].value},
                border-color ${yo["vira-interaction-animation-duration"].value};

            ${Ku({elementBorderSize:2})}
        }

        .empty-text {
            width: 0;
        }

        button ${I} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${I} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?g`
                  <${I.assign({icon:e.icon})}></${I}>
              `:Q,r=e.text?g`
                  <span class="text-template">${e.text}</span>
              `:g`
                  <span class="empty-text">&nbsp;</span>
              `;return g`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Q0=(e=>(e.Error="error",e.Success="success",e))(Q0||{});const vf=tt()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":A`1px solid ${T["vira-form-border-color"].value}`,"vira-card-padding":T["vira-form-wrapper-radius"].value},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${T["vira-form-wrapper-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${T["vira-form-error-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${T["vira-form-success-color"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),no=tt()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":({inputs:e})=>!!e.expandOnPrint},slotNames:["header"],styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Rr};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${yo["vira-pretty-animation-duration"].value};
            overflow: hidden;

            &.collapsed {
                ${Ui}
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
    `,events:{expandChange:at()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:o,inputs:i}){const s=i.expanded?A`
                  height: ${e.contentHeight}px;
              `:A`
                  height: 0;
              `;return g`
            <button
                class="header-wrapper"
                ${_("click",()=>{n(new o.expandChange(!i.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${cr({collapsed:!i.expanded})}"
                style=${s}
                disabled="disabled"
            >
                <div
                    ${I5(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),wf={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},Ra=tt()({tagName:"vira-dropdown",styles:A`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${jo} {
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
                ${yo["vira-interaction-animation-duration"].value} linear;
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
            ${Ui};
            border: 1px solid ${T["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${T["vira-form-radius"].value};
            background-color: ${T["vira-form-background-color"].value};
            color: ${T["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:at(),openChange:at()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:o}){const i=ko(t.selected,d=>t.options.find(f=>f.id===d),F.isTruthy),s=t.icon?g`
                  <${I.assign({icon:t.icon})}
                      ${Vn(wf.icon)}
                  ></${I}>
              `:Q,a=!i.length,u=t.selectionPrefix&&!a?g`
                      <span class="selected-label-prefix" ${Vn(wf.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:Q,c=a?t.placeholder||"":t.isMultiSelect&&i.length>1?`${i.length} Selected`:i[0]?.label||"";return g`
            <${jo.assign({...t,items:t.options,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||Wo.Both})}
                ${_(jo.events.openChange,d=>{o({showPopUpResult:d.detail}),r(new n.openChange(d.detail))})}
                ${_(jo.events.itemActivate,d=>{r(new n.selectedChange(d.detail))})}
            >
                <div
                    class="dropdown-trigger ${cr({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Vn(wf.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${cr({"using-placeholder":a})}"
                        title=${pt(a?void 0:c)}
                    >
                        ${u} ${c}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${I.assign({icon:ng})}
                            class="trigger-icon"
                        ></${I}>
                    </span>
                </div>
            </${jo}>
        `}}),Mi=tt()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>A`
        :host {
            color: ${T["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),So=tt()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:at(),imageError:at()},styles:({hostClasses:e})=>A`
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
                      <${I.assign({icon:mc})} class="error"></${I}>
                  </slot>
              `:t.loadedUrls[s]?void 0:g`
                    <slot class="status-wrapper" name=${i.loading}>
                        <${I.assign({icon:ji})}></${I}>
                    </slot>
                `;return g`
            ${Mr(!!a,a)}
            <img
                class=${cr({hidden:!!a})}
                ${_("load",async()=>{e._debugLoadDelay&&await Ti(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new o.imageLoad)})}
                ${_("error",async u=>{e._debugLoadDelay&&await Ti(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new o.imageError(u.error))})}
                src=${s}
            />
        `}}),YP=["pagehide","pageshow","popstate"],To=tt()({tagName:"vira-modal",events:{modalClose:at()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-filter":"blur(3px)"},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${Gu};
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
            ${Fi.modal}

            &[open] {
                display: flex;
            }
            &::backdrop {
                background: ${T["vira-form-modal-backdrop-color"].value};
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
                            color: ${T["vira-form-secondary-body-foreground"].value};
                        }
                    }

                    & button.close {
                        ${Rr};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${T["vira-form-radius"].value};

                        &:hover {
                            background-color: ${T["vira-form-selection-hover-color"].value};
                        }

                        & ${I} {
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
    `,render({inputs:e,state:t,updateState:r,events:n,dispatch:o,slotNames:i}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),r({previousOpenValue:e.open}),e.open)){const a=YP.map(u=>y0(u,()=>{o(new n.modalClose)}));r({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),o(new n.modalClose))}return g`
            <dialog
                ${Li(a=>{r({dialogElement:_t.instanceOf(a,HTMLDialogElement)})})}
                ${_("close",()=>{s()})}
                ${_("mousedown",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Li(a=>{r({contentElement:_t.instanceOf(a,HTMLDivElement)})})}
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
                            ${_("click",()=>{t.dialogElement?.close()})}
                        >
                            <${I.assign({icon:X5})}></${I}>
                        </button>
                    </div>
                    ${e.open?g`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:Q}
                </div>
            </dialog>
        `}}),Kn=tt()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":({state:e,inputs:t})=>e.isOverflowing||!!t.useSmall},styles:({hostClasses:e})=>A`
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
                ${Li(i=>{if(!r.automaticallySwitch)return;const s={elementToTest:i,host:n,updateState:t},a=new ResizeObserver(()=>{$f(s)});a.observe(n),a.observe(i);const u=Nh(i,"slotchange",()=>{$f(s)});$f(s),o.cleanup?.(),t({cleanup(){a.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function $f({elementToTest:e,host:t,updateState:r}){const n=e.scrollWidth>t.clientWidth;r({isOverflowing:n})}const ao=tt()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px"},styles:({cssVars:e})=>A`
        :host {
            /* Default width that can easily be overridden because it's applied on the host. */
            width: 100px;
            /* Default height that can easily be overridden because it's applied on the host. */
            height: 10px;
            display: inline-flex;
            align-items: center;
            border-radius: ${e["vira-progress-border-radius"].value};
            color: ${T["vira-form-accent-primary-color"].value};
            overflow: hidden;
        }

        .progress-bar {
            background-color: currentColor;
            height: 100%;
        }

        .background-bar {
            background-color: ${T["vira-form-filled-background-color"].value};
            height: 100%;
            flex-grow: 1;
        }
    `,render({inputs:e,host:t}){const r=e.min||0,o=(e.max||100)-r,i=e.value-r,s=R3(Math.round(i/o*100),{min:0,max:100});return o$(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),g`
            <div
                class="progress-bar"
                style=${s?A`
                          width: ${s}%;
                      `:A`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function f$(e){return JT({async updateCallback(t,r){if(r&&t in r.cache)return{cache:r.cache,element:r.cache[t],key:t};const n=await e[t]();return{cache:{...r?.cache,[t]:n},element:n,key:t}}})}function h$(e,{ready:t,loading:r,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?r(e.value.then(i=>({[i.key]:i.element}))):t({[e.value.key]:e.value.element})}const Xr=O5(),sn=Xr()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:({cssVars:e})=>A`
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
                ${_("click",n=>{(!e.router||K5(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new hc(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function XP(e,t){return e.entry.entryType===Yt.Root?!1:e.entry.entryType===Yt.Page||F.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:F.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const fs=Xr()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>A`
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
            ${sn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${I} {
            display: inline-flex;
            color: ${Ee["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!XP(r,e.selectedPath))return;const n=A`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return g`
                <li style=${n}>
                    <${sn.assign({router:e.router,route:{paths:[Er.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${cr({"title-row":!0,selected:e.selectedPath?F.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Mr(Ds(r,Yt.ElementExample),g`
                                    <${I.assign({icon:H5})}></${I}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${sn}>
                </li>
            `});return g`
            <${sn.assign({route:Ns,router:e.router})}>
                <slot name=${qn.NavHeader}>Book</slot>
            </${sn}>
            <ul>
                ${t}
            </ul>
        `}}),Xo=Xr()({tagName:"book-error",styles:A`
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
            `)}});var $u;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})($u||($u={}));const ag={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:$u.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},Qo=et(ag,e=>e),he={...Qo,name:"name",hexString:"hexString"},_n=et(ag,(e,t)=>{const r=F.isEnumValue(e,$u)&&F.isEnumValue(e,Qo)?e:"conversionFormat"in t&&t.conversionFormat&&F.isEnumValue(t.conversionFormat,$u)&&F.isEnumValue(t.conversionFormat,Qo)?t.conversionFormat:void 0;return Dt.isTruthy(r,`Invalid conversion format for color format '${e}' ${v(t)}.`),{...t,colorFormat:e,conversionFormat:r,rawSyntax:_t.isEnumValue("rawSyntax"in t&&t.rawSyntax?t.rawSyntax:e,he)}});Su(iu(ag),e=>({key:e.colorSpace,value:e.colorSpace}),{});En(_n).reduce((e,[t,r])=>(Wi(e,r.colorSpace,()=>({}))[t]=r,e),{});function QP(e){return e.startsWith("rgb")?he.rgb:e.startsWith("hsl")?he.hsl:e.startsWith("hwb")?he.hwb:e.startsWith("oklab")?he.oklab:e.startsWith("oklch")?he.oklch:e.startsWith("lab")?he.lab:e.startsWith("lch")?he.lch:e.startsWith("#")?he.hexString:he.name}const eh={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in eh)Object.freeze(eh[e]);const ku=Object.freeze(eh),eI=Object.keys(ku).reduce((e,t)=>t.length>e.length?t:e),tI=Sc(et(ku,(e,t)=>ko(Object.entries(ku),([n])=>n,(n,[,o])=>n===e?!1:F.deepEquals(o,t))),(e,t)=>!!t.length),x1=Object.entries(tI).reduce((e,t)=>{const r=[e[0],...e[1]].join(", ");return[t[0],...t[1]].join(", ").length>r.length?t:e}).reduce((e,t)=>F.isArray(t)?[...e,...t]:[...e,t],[]),D1=Math.max(eI.length,x1.length+(x1.length-1)*2),m$=(e,t)=>{if(typeof e=="number"){if(t===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},rI={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nI=e=>m$(rI[e.toLowerCase()],6),oI=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,iI=e=>{let t;return(t=e.match(oI))?m$(parseInt(t[1],16),t[1].length):void 0},Ko="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",Qa=`${Ko}%`,ug=`(?:${Ko}%|${Ko})`,sI=`(?:${Ko}(deg|grad|rad|turn)|${Ko})`,Gs="\\s*,\\s*",aI=new RegExp(`^rgba?\\(\\s*${Ko}${Gs}${Ko}${Gs}${Ko}\\s*(?:,\\s*${ug}\\s*)?\\)$`),uI=new RegExp(`^rgba?\\(\\s*${Qa}${Gs}${Qa}${Gs}${Qa}\\s*(?:,\\s*${ug}\\s*)?\\)$`),lI=e=>{let t={mode:"rgb"},r;if(r=e.match(aI))r[1]!==void 0&&(t.r=r[1]/255),r[2]!==void 0&&(t.g=r[2]/255),r[3]!==void 0&&(t.b=r[3]/255);else if(r=e.match(uI))r[1]!==void 0&&(t.r=r[1]/100),r[2]!==void 0&&(t.g=r[2]/100),r[3]!==void 0&&(t.b=r[3]/100);else return;return r[4]!==void 0?t.alpha=Math.max(0,Math.min(1,r[4]/100)):r[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[5]))),t},th=(e,t)=>e===void 0?void 0:typeof e!="object"?oh(e):e.mode!==void 0?e:t?{...e,mode:t}:void 0,zi=(e="rgb")=>t=>(t=th(t,e))!==void 0?t.mode===e?t:zn[t.mode][e]?zn[t.mode][e](t):e==="rgb"?zn[t.mode].rgb(t):zn.rgb[e](zn[t.mode].rgb(t)):void 0,zn={},g$={},pc=[],p$={},cI=e=>e,Pe=e=>(zn[e.mode]={...zn[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{zn[t]||(zn[t]={}),zn[t][e.mode]=e.fromMode[t]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]=="function"&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=cI)}),g$[e.mode]=e,(e.parse||[]).forEach(t=>{dI(t,e.mode)}),zi(e.mode)),md=e=>g$[e],dI=(e,t)=>{if(typeof e=="string"){if(!t)throw new Error("'mode' required when 'parser' is a string");p$[e]=t}else typeof e=="function"&&pc.indexOf(e)<0&&pc.push(e)},rh=/[^\x00-\x7F]|[a-zA-Z_]/,fI=/[^\x00-\x7F]|[-\w]/,B={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let Y=0;function $l(e){let t=e[Y],r=e[Y+1];return t==="-"||t==="+"?/\d/.test(r)||r==="."&&/\d/.test(e[Y+2]):t==="."?/\d/.test(r):/\d/.test(t)}function nh(e){if(Y>=e.length)return!1;let t=e[Y];if(rh.test(t))return!0;if(t==="-"){if(e.length-Y<2)return!1;let r=e[Y+1];return!!(r==="-"||rh.test(r))}return!1}const hI={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function Ea(e){let t="";if((e[Y]==="-"||e[Y]==="+")&&(t+=e[Y++]),t+=kl(e),e[Y]==="."&&/\d/.test(e[Y+1])&&(t+=e[Y++]+kl(e)),(e[Y]==="e"||e[Y]==="E")&&((e[Y+1]==="-"||e[Y+1]==="+")&&/\d/.test(e[Y+2])?t+=e[Y++]+e[Y++]+kl(e):/\d/.test(e[Y+1])&&(t+=e[Y++]+kl(e))),nh(e)){let r=bc(e);return r==="deg"||r==="rad"||r==="turn"||r==="grad"?{type:B.Hue,value:t*hI[r]}:void 0}return e[Y]==="%"?(Y++,{type:B.Percentage,value:+t}):{type:B.Number,value:+t}}function kl(e){let t="";for(;/\d/.test(e[Y]);)t+=e[Y++];return t}function bc(e){let t="";for(;Y<e.length&&fI.test(e[Y]);)t+=e[Y++];return t}function mI(e){let t=bc(e);return e[Y]==="("?(Y++,{type:B.Function,value:t}):t==="none"?{type:B.None,value:void 0}:{type:B.Ident,value:t}}function gI(e=""){let t=e.trim(),r=[],n;for(Y=0;Y<t.length;){if(n=t[Y++],n===`
`||n==="	"||n===" "){for(;Y<t.length&&(t[Y]===`
`||t[Y]==="	"||t[Y]===" ");)Y++;continue}if(n===",")return;if(n===")"){r.push({type:B.ParenClose});continue}if(n==="+"){if(Y--,$l(t)){r.push(Ea(t));continue}return}if(n==="-"){if(Y--,$l(t)){r.push(Ea(t));continue}if(nh(t)){r.push({type:B.Ident,value:bc(t)});continue}return}if(n==="."){if(Y--,$l(t)){r.push(Ea(t));continue}return}if(n==="/"){for(;Y<t.length&&(t[Y]===`
`||t[Y]==="	"||t[Y]===" ");)Y++;let o;if($l(t)&&(o=Ea(t),o.type!==B.Hue)){r.push({type:B.Alpha,value:o});continue}if(nh(t)&&bc(t)==="none"){r.push({type:B.Alpha,value:{type:B.None,value:void 0}});continue}return}if(/\d/.test(n)){Y--,r.push(Ea(t));continue}if(rh.test(n)){Y--,r.push(mI(t));continue}return}return r}function pI(e){e._i=0;let t=e[e._i++];if(!t||t.type!==B.Function||t.value!=="color"||(t=e[e._i++],t.type!==B.Ident))return;const r=p$[t.value];if(!r)return;const n={mode:r},o=b$(e,!1);if(!o)return;const i=md(r).channels;for(let s=0,a,u;s<i.length;s++)a=o[s],u=i[s],a.type!==B.None&&(n[u]=a.type===B.Number?a.value:a.value/100,u==="alpha"&&(n[u]=Math.max(0,Math.min(1,n[u]))));return n}function b$(e,t){const r=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===B.None||n.type===B.Number||n.type===B.Alpha||n.type===B.Percentage||t&&n.type===B.Hue){r.push(n);continue}if(n.type===B.ParenClose){if(e._i<e.length)return;continue}return}if(!(r.length<3||r.length>4)){if(r.length===4){if(r[3].type!==B.Alpha)return;r[3]=r[3].value}return r.length===3&&r.push({type:B.None,value:void 0}),r.every(o=>o.type!==B.Alpha)?r:void 0}}function bI(e,t){e._i=0;let r=e[e._i++];if(!r||r.type!==B.Function)return;let n=b$(e,t);if(n)return n.unshift(r.value),n}const oh=e=>{if(typeof e!="string")return;const t=gI(e),r=t?bI(t,!0):void 0;let n,o=0,i=pc.length;for(;o<i;)if((n=pc[o++](e,r))!==void 0)return n;return t?pI(t):void 0};function yI(e,t){if(!t||t[0]!=="rgb"&&t[0]!=="rgba")return;const r={mode:"rgb"},[,n,o,i,s]=t;if(!(n.type===B.Hue||o.type===B.Hue||i.type===B.Hue))return n.type!==B.None&&(r.r=n.type===B.Number?n.value/255:n.value/100),o.type!==B.None&&(r.g=o.type===B.Number?o.value/255:o.value/100),i.type!==B.None&&(r.b=i.type===B.Number?i.value/255:i.value/100),s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const vI=e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,wI=(e,t,r)=>e+r*(t-e),$I=e=>{let t=[];for(let r=0;r<e.length-1;r++){let n=e[r],o=e[r+1];n===void 0&&o===void 0?t.push(void 0):n!==void 0&&o!==void 0?t.push([n,o]):t.push(n!==void 0?[n,n]:[o,o])}return t},kI=e=>t=>{let r=$I(t);return n=>{let o=n*r.length,i=n>=1?r.length-1:Math.max(Math.floor(o),0),s=r[i];return s===void 0?void 0:e(s[0],s[1],o-i)}},U=kI(wI),Bt=e=>{let t=!1,r=e.map(n=>n!==void 0?(t=!0,n):1);return t?r:e},fa={mode:"rgb",channels:["r","g","b","alpha"],parse:[yI,iI,lI,nI,vI,"srgb"],serialize:"srgb",interpolate:{r:U,g:U,b:U,alpha:{use:U,fixup:Bt}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},kf=(e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),A1=e=>{let t=kf(e.r),r=kf(e.g),n=kf(e.b),o={mode:"xyz65",x:.5766690429101305*t+.1855582379065463*r+.1882286462349947*n,y:.297344975250536*t+.6273635662554661*r+.0752914584939979*n,z:.0270313613864123*t+.0706888525358272*r+.9913375368376386*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},xf=e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),E1=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"a98",r:xf(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*r),g:xf(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*r),b:xf(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*r)};return n!==void 0&&(o.alpha=n),o},Df=(e=0)=>{const t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},ha=({r:e,g:t,b:r,alpha:n})=>{let o={mode:"lrgb",r:Df(e),g:Df(t),b:Df(r)};return n!==void 0&&(o.alpha=n),o},rs=e=>{let{r:t,g:r,b:n,alpha:o}=ha(e),i={mode:"xyz65",x:.4123907992659593*t+.357584339383878*r+.1804807884018343*n,y:.2126390058715102*t+.715168678767756*r+.0721923153607337*n,z:.0193308187155918*t+.119194779794626*r+.9505321522496607*n};return o!==void 0&&(i.alpha=o),i},Af=(e=0)=>{const t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,1/2.4)-.055):e*12.92},ma=({r:e,g:t,b:r,alpha:n},o="rgb")=>{let i={mode:o,r:Af(e),g:Af(t),b:Af(r)};return n!==void 0&&(i.alpha=n),i},ns=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=ma({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*r,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*r,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*r});return n!==void 0&&(o.alpha=n),o},xI={...fa,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:e=>E1(rs(e)),xyz65:E1},toMode:{rgb:e=>ns(A1(e)),xyz65:A1}},tr=e=>(e=e%360)<0?e+360:e,DI=(e,t)=>e.map((r,n,o)=>{if(r===void 0)return r;let i=tr(r);return n===0||e[n-1]===void 0?i:t(i-tr(o[n-1]))}).reduce((r,n)=>!r.length||n===void 0||r[r.length-1]===void 0?(r.push(n),r):(r.push(n+r[r.length-1]),r),[]),Ao=e=>DI(e,t=>Math.abs(t)<=180?t:t-360*Math.sign(t)),zt=[-.14861,1.78277,-.29227,-.90649,1.97294,0],AI=Math.PI/180,EI=180/Math.PI;let C1=zt[3]*zt[4],F1=zt[1]*zt[4],M1=zt[1]*zt[2]-zt[0]*zt[3];const CI=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(M1*r+e*C1-t*F1)/(M1+C1-F1),i=r-o,s=(zt[4]*(t-o)-zt[2]*i)/zt[3],a={mode:"cubehelix",l:o,s:o===0||o===1?void 0:Math.sqrt(i*i+s*s)/(zt[4]*o*(1-o))};return a.s&&(a.h=Math.atan2(s,i)*EI-120),n!==void 0&&(a.alpha=n),a},FI=({h:e,s:t,l:r,alpha:n})=>{let o={mode:"rgb"};e=(e===void 0?0:e+120)*AI,r===void 0&&(r=0);let i=t===void 0?0:t*r*(1-r),s=Math.cos(e),a=Math.sin(e);return o.r=r+i*(zt[0]*s+zt[1]*a),o.g=r+i*(zt[2]*s+zt[3]*a),o.b=r+i*(zt[4]*s+zt[5]*a),n!==void 0&&(o.alpha=n),o},gd=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let r=tr(e.h),n=tr(t.h),o=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*o},MI=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let r=tr(e.h),n=tr(t.h);return Math.abs(n-r)>180?r-(n-360*Math.sign(n-r)):n-r},pd=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let r=tr(e.h),n=tr(t.h),o=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*o},SI=(e="rgb",t=[1,1,1,0])=>{let r=md(e),n=r.channels,o=r.difference,i=zi(e);return(s,a)=>{let u=i(s),c=i(a);return Math.sqrt(n.reduce((d,f,h)=>{let m=o[f]?o[f](u,c):u[f]-c[f];return d+(t[h]||0)*Math.pow(isNaN(m)?0:m,2)},0))}},Eo=e=>{let t=e.reduce((n,o)=>{if(o!==void 0){let i=o*Math.PI/180;n.sin+=Math.sin(i),n.cos+=Math.cos(i)}return n},{sin:0,cos:0}),r=Math.atan2(t.sin,t.cos)*180/Math.PI;return r<0?360+r:r},TI={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:CI},toMode:{rgb:FI},interpolate:{h:{use:U,fixup:Ao},s:U,l:U,alpha:{use:U,fixup:Bt}},difference:{h:gd},average:{h:Eo}},ei=({l:e,a:t,b:r,alpha:n},o="lch")=>{t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.sqrt(t*t+r*r),s={mode:o,l:e,c:i};return i&&(s.h=tr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},ti=({l:e,c:t,h:r,alpha:n},o="lab")=>{r===void 0&&(r=0);let i={mode:o,l:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(i.alpha=n),i},y$=Math.pow(29,3)/Math.pow(3,3),v$=Math.pow(6,3)/Math.pow(29,3),Et={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},Fs={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let Ef=e=>Math.pow(e,3)>v$?Math.pow(e,3):(116*e-16)/y$;const w$=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+16)/116,i=t/500+o,s=o-r/200,a={mode:"xyz65",x:Ef(i)*Fs.X,y:Ef(o)*Fs.Y,z:Ef(s)*Fs.Z};return n!==void 0&&(a.alpha=n),a},bd=e=>ns(w$(e)),Cf=e=>e>v$?Math.cbrt(e):(y$*e+16)/116,$$=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Cf(e/Fs.X),i=Cf(t/Fs.Y),s=Cf(r/Fs.Z),a={mode:"lab65",l:116*i-16,a:500*(o-i),b:200*(i-s)};return n!==void 0&&(a.alpha=n),a},yd=e=>{let t=$$(rs(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},yc=1,k$=1,xu=26/180*Math.PI,vc=Math.cos(xu),wc=Math.sin(xu),x$=100/Math.log(139/100),ih=({l:e,c:t,h:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"lab65",l:(Math.exp(e*yc/x$)-1)/.0039},i=(Math.exp(.0435*t*k$*yc)-1)/.075,s=i*Math.cos(r/180*Math.PI-xu),a=i*Math.sin(r/180*Math.PI-xu);return o.a=s*vc-a/.83*wc,o.b=s*wc+a/.83*vc,n!==void 0&&(o.alpha=n),o},sh=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=t*vc+r*wc,i=.83*(r*vc-t*wc),s=Math.sqrt(o*o+i*i),a={mode:"dlch",l:x$/yc*Math.log(1+.0039*e),c:Math.log(1+.075*s)/(.0435*k$*yc)};return a.c&&(a.h=tr((Math.atan2(i,o)+xu)/Math.PI*180)),n!==void 0&&(a.alpha=n),a},S1=e=>ih(ei(e,"dlch")),T1=e=>ti(sh(e),"dlab"),NI={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:S1,rgb:e=>bd(S1(e))},fromMode:{lab65:T1,rgb:e=>T1(yd(e))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:U,a:U,b:U,alpha:{use:U,fixup:Bt}}},PI={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:ih,dlab:e=>ti(e,"dlab"),rgb:e=>bd(ih(e))},fromMode:{lab65:sh,dlab:e=>ei(e,"dlch"),rgb:e=>sh(yd(e))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:U,c:U,h:{use:U,fixup:Ao},alpha:{use:U,fixup:Bt}},difference:{h:pd},average:{h:Eo}};function II({h:e,s:t,i:r,alpha:n}){e=tr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.abs(e/60%2-1),i;switch(Math.floor(e/60)){case 0:i={r:r*(1+t*(3/(2-o)-1)),g:r*(1+t*(3*(1-o)/(2-o)-1)),b:r*(1-t)};break;case 1:i={r:r*(1+t*(3*(1-o)/(2-o)-1)),g:r*(1+t*(3/(2-o)-1)),b:r*(1-t)};break;case 2:i={r:r*(1-t),g:r*(1+t*(3/(2-o)-1)),b:r*(1+t*(3*(1-o)/(2-o)-1))};break;case 3:i={r:r*(1-t),g:r*(1+t*(3*(1-o)/(2-o)-1)),b:r*(1+t*(3/(2-o)-1))};break;case 4:i={r:r*(1+t*(3*(1-o)/(2-o)-1)),g:r*(1-t),b:r*(1+t*(3/(2-o)-1))};break;case 5:i={r:r*(1+t*(3/(2-o)-1)),g:r*(1-t),b:r*(1+t*(3*(1-o)/(2-o)-1))};break;default:i={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return i.mode="rgb",n!==void 0&&(i.alpha=n),i}function OI({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),i=Math.min(e,t,r),s={mode:"hsi",s:e+t+r===0?0:1-3*i/(e+t+r),i:(e+t+r)/3};return o-i!==0&&(s.h=(o===e?(t-r)/(o-i)+(t<r)*6:o===t?(r-e)/(o-i)+2:(e-t)/(o-i)+4)*60),n!==void 0&&(s.alpha=n),s}const BI={mode:"hsi",toMode:{rgb:II},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:OI},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:U,fixup:Ao},s:U,i:U,alpha:{use:U,fixup:Bt}},difference:{h:gd},average:{h:Eo}};function RI({h:e,s:t,l:r,alpha:n}){e=tr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=r+t*(r<.5?r:1-r),i=o-(o-r)*2*Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:o,g:i,b:2*r-o};break;case 1:s={r:i,g:o,b:2*r-o};break;case 2:s={r:2*r-o,g:o,b:i};break;case 3:s={r:2*r-o,g:i,b:o};break;case 4:s={r:i,g:2*r-o,b:o};break;case 5:s={r:o,g:2*r-o,b:i};break;default:s={r:2*r-o,g:2*r-o,b:2*r-o}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}function LI({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),i=Math.min(e,t,r),s={mode:"hsl",s:o===i?0:(o-i)/(1-Math.abs(o+i-1)),l:.5*(o+i)};return o-i!==0&&(s.h=(o===e?(t-r)/(o-i)+(t<r)*6:o===t?(r-e)/(o-i)+2:(e-t)/(o-i)+4)*60),n!==void 0&&(s.alpha=n),s}const jI=(e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},_I=new RegExp(`^hsla?\\(\\s*${sI}${Gs}${Qa}${Gs}${Qa}\\s*(?:,\\s*${ug}\\s*)?\\)$`),UI=e=>{let t=e.match(_I);if(!t)return;let r={mode:"hsl"};return t[3]!==void 0?r.h=+t[3]:t[1]!==void 0&&t[2]!==void 0&&(r.h=jI(t[1],t[2])),t[4]!==void 0&&(r.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(r.l=Math.min(Math.max(0,t[5]/100),1)),t[6]!==void 0?r.alpha=Math.max(0,Math.min(1,t[6]/100)):t[7]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[7]))),r};function zI(e,t){if(!t||t[0]!=="hsl"&&t[0]!=="hsla")return;const r={mode:"hsl"},[,n,o,i,s]=t;if(n.type!==B.None){if(n.type===B.Percentage)return;r.h=n.value}if(o.type!==B.None){if(o.type===B.Hue)return;r.s=o.value/100}if(i.type!==B.None){if(i.type===B.Hue)return;r.l=i.value/100}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const D$={mode:"hsl",toMode:{rgb:RI},fromMode:{rgb:LI},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[zI,UI],serialize:e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Ao},s:U,l:U,alpha:{use:U,fixup:Bt}},difference:{h:gd},average:{h:Eo}};function A$({h:e,s:t,v:r,alpha:n}){e=tr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.abs(e/60%2-1),i;switch(Math.floor(e/60)){case 0:i={r,g:r*(1-t*o),b:r*(1-t)};break;case 1:i={r:r*(1-t*o),g:r,b:r*(1-t)};break;case 2:i={r:r*(1-t),g:r,b:r*(1-t*o)};break;case 3:i={r:r*(1-t),g:r*(1-t*o),b:r};break;case 4:i={r:r*(1-t*o),g:r*(1-t),b:r};break;case 5:i={r,g:r*(1-t),b:r*(1-t*o)};break;default:i={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return i.mode="rgb",n!==void 0&&(i.alpha=n),i}function E$({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.max(e,t,r),i=Math.min(e,t,r),s={mode:"hsv",s:o===0?0:1-i/o,v:o};return o-i!==0&&(s.h=(o===e?(t-r)/(o-i)+(t<r)*6:o===t?(r-e)/(o-i)+2:(e-t)/(o-i)+4)*60),n!==void 0&&(s.alpha=n),s}const C$={mode:"hsv",toMode:{rgb:A$},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:E$},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:U,fixup:Ao},s:U,v:U,alpha:{use:U,fixup:Bt}},difference:{h:gd},average:{h:Eo}};function VI({h:e,w:t,b:r,alpha:n}){if(t===void 0&&(t=0),r===void 0&&(r=0),t+r>1){let o=t+r;t/=o,r/=o}return A$({h:e,s:r===1?1:1-t/(1-r),v:1-r,alpha:n})}function qI(e){let t=E$(e);if(t===void 0)return;let r=t.s!==void 0?t.s:0,n=t.v!==void 0?t.v:0,o={mode:"hwb",w:(1-r)*n,b:1-n};return t.h!==void 0&&(o.h=t.h),t.alpha!==void 0&&(o.alpha=t.alpha),o}function WI(e,t){if(!t||t[0]!=="hwb")return;const r={mode:"hwb"},[,n,o,i,s]=t;if(n.type!==B.None){if(n.type===B.Percentage)return;r.h=n.value}if(o.type!==B.None){if(o.type===B.Hue)return;r.w=o.value/100}if(i.type!==B.None){if(i.type===B.Hue)return;r.b=i.value/100}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const KI={mode:"hwb",toMode:{rgb:VI},fromMode:{rgb:qI},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[WI],serialize:e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Ao},w:U,b:U,alpha:{use:U,fixup:Bt}},difference:{h:MI},average:{h:Eo}},F$=203,vd=.1593017578125,M$=78.84375,wd=.8359375,$d=18.8515625,kd=18.6875;function Ff(e){if(e<0)return 0;const t=Math.pow(e,1/M$);return 1e4*Math.pow(Math.max(0,t-wd)/($d-kd*t),1/vd)}function Mf(e){if(e<0)return 0;const t=Math.pow(e/1e4,vd);return Math.pow((wd+$d*t)/(1+kd*t),M$)}const Sf=e=>Math.max(e/F$,0),N1=({i:e,t,p:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o=Ff(e+.008609037037932761*t+.11102962500302593*r),i=Ff(e-.00860903703793275*t-.11102962500302599*r),s=Ff(e+.5600313357106791*t-.32062717498731885*r),a={mode:"xyz65",x:Sf(2.070152218389422*o-1.3263473389671556*i+.2066510476294051*s),y:Sf(.3647385209748074*o+.680566024947227*i-.0453045459220346*s),z:Sf(-.049747207535812*o-.0492609666966138*i+1.1880659249923042*s)};return n!==void 0&&(a.alpha=n),a},Tf=(e=0)=>Math.max(e*F$,0),P1=({x:e,y:t,z:r,alpha:n})=>{const o=Tf(e),i=Tf(t),s=Tf(r),a=Mf(.3592832590121217*o+.6976051147779502*i-.0358915932320289*s),u=Mf(-.1920808463704995*o+1.1004767970374323*i+.0753748658519118*s),c=Mf(.0070797844607477*o+.0748396662186366*i+.8433265453898765*s),d=.5*a+.5*u,f=1.61376953125*a-3.323486328125*u+1.709716796875*c,h=4.378173828125*a-4.24560546875*u-.132568359375*c,m={mode:"itp",i:d,t:f,p:h};return n!==void 0&&(m.alpha=n),m},GI={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:N1,rgb:e=>ns(N1(e))},fromMode:{xyz65:P1,rgb:e=>P1(rs(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:U,t:U,p:U,alpha:{use:U,fixup:Bt}}},HI=134.03437499999998,ZI=16295499532821565e-27,Nf=e=>{if(e<0)return 0;let t=Math.pow(e/1e4,vd);return Math.pow((wd+$d*t)/(1+kd*t),HI)},Pf=(e=0)=>Math.max(e*203,0),S$=({x:e,y:t,z:r,alpha:n})=>{e=Pf(e),t=Pf(t),r=Pf(r);let o=1.15*e-.15*r,i=.66*t+.34*e,s=Nf(.41478972*o+.579999*i+.014648*r),a=Nf(-.20151*o+1.120649*i+.0531008*r),u=Nf(-.0166008*o+.2648*i+.6684799*r),c=(s+a)/2,d={mode:"jab",j:.44*c/(1-.56*c)-ZI,a:3.524*s-4.066708*a+.542708*u,b:.199076*s+1.096799*a-1.295875*u};return n!==void 0&&(d.alpha=n),d},JI=134.03437499999998,I1=16295499532821565e-27,If=e=>{if(e<0)return 0;let t=Math.pow(e,1/JI);return 1e4*Math.pow((wd-t)/(kd*t-$d),1/vd)},Of=e=>e/203,T$=({j:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+I1)/(.44+.56*(e+I1)),i=If(o+.13860504*t+.058047316*r),s=If(o-.13860504*t-.058047316*r),a=If(o-.096019242*t-.8118919*r),u={mode:"xyz65",x:Of(1.661373024652174*i-.914523081304348*s+.23136208173913045*a),y:Of(-.3250758611844533*i+1.571847026732543*s-.21825383453227928*a),z:Of(-.090982811*i-.31272829*s+1.5227666*a)};return n!==void 0&&(u.alpha=n),u},N$=e=>{let t=S$(rs(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},P$=e=>ns(T$(e)),YI={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:N$,xyz65:S$},toMode:{rgb:P$,xyz65:T$},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:U,a:U,b:U,alpha:{use:U,fixup:Bt}}},O1=({j:e,a:t,b:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),i={mode:"jch",j:e,c:o};return o&&(i.h=tr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(i.alpha=n),i},B1=({j:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let o={mode:"jab",j:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},XI={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:B1,rgb:e=>P$(B1(e))},fromMode:{rgb:e=>O1(N$(e)),jab:O1},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:U,fixup:Ao},c:U,j:U,alpha:{use:U,fixup:Bt}},difference:{h:pd},average:{h:Eo}},xd=Math.pow(29,3)/Math.pow(3,3),lg=Math.pow(6,3)/Math.pow(29,3);let Bf=e=>Math.pow(e,3)>lg?Math.pow(e,3):(116*e-16)/xd;const cg=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=(e+16)/116,i=t/500+o,s=o-r/200,a={mode:"xyz50",x:Bf(i)*Et.X,y:Bf(o)*Et.Y,z:Bf(s)*Et.Z};return n!==void 0&&(a.alpha=n),a},Hu=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=ma({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*r,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*r,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*r});return n!==void 0&&(o.alpha=n),o},I$=e=>Hu(cg(e)),Zu=e=>{let{r:t,g:r,b:n,alpha:o}=ha(e),i={mode:"xyz50",x:.436065742824811*t+.3851514688337912*r+.14307845442264197*n,y:.22249319175623702*t+.7168870538238823*r+.06061979053616537*n,z:.013923904500943465*t+.09708128566574634*r+.7140993584005155*n};return o!==void 0&&(i.alpha=o),i},Rf=e=>e>lg?Math.cbrt(e):(xd*e+16)/116,dg=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Rf(e/Et.X),i=Rf(t/Et.Y),s=Rf(r/Et.Z),a={mode:"lab",l:116*i-16,a:500*(o-i),b:200*(i-s)};return n!==void 0&&(a.alpha=n),a},O$=e=>{let t=dg(Zu(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function QI(e,t){if(!t||t[0]!=="lab")return;const r={mode:"lab"},[,n,o,i,s]=t;if(!(n.type===B.Hue||o.type===B.Hue||i.type===B.Hue))return n.type!==B.None&&(r.l=Math.min(Math.max(0,n.value),100)),o.type!==B.None&&(r.a=o.type===B.Number?o.value:o.value*125/100),i.type!==B.None&&(r.b=i.type===B.Number?i.value:i.value*125/100),s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const fg={mode:"lab",toMode:{xyz50:cg,rgb:I$},fromMode:{xyz50:dg,rgb:O$},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[QI],serialize:e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{l:U,a:U,b:U,alpha:{use:U,fixup:Bt}}},eO={...fg,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:w$,rgb:bd},fromMode:{xyz65:$$,rgb:yd},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function tO(e,t){if(!t||t[0]!=="lch")return;const r={mode:"lch"},[,n,o,i,s]=t;if(n.type!==B.None){if(n.type===B.Hue)return;r.l=Math.min(Math.max(0,n.value),100)}if(o.type!==B.None&&(r.c=Math.max(0,o.type===B.Number?o.value:o.value*150/100)),i.type!==B.None){if(i.type===B.Percentage)return;r.h=i.value}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const hg={mode:"lch",toMode:{lab:ti,rgb:e=>I$(ti(e))},fromMode:{rgb:e=>ei(O$(e)),lab:ei},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[tO],serialize:e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Ao},c:U,l:U,alpha:{use:U,fixup:Bt}},difference:{h:pd},average:{h:Eo}},rO={...hg,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:e=>ti(e,"lab65"),rgb:e=>bd(ti(e,"lab65"))},fromMode:{rgb:e=>ei(yd(e),"lch65"),lab65:e=>ei(e,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},B$=({l:e,u:t,v:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),i={mode:"lchuv",l:e,c:o};return o&&(i.h=tr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(i.alpha=n),i},R$=({l:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let o={mode:"luv",l:e,u:t?t*Math.cos(r/180*Math.PI):0,v:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},L$=(e,t,r)=>4*e/(e+15*t+3*r),j$=(e,t,r)=>9*t/(e+15*t+3*r),nO=L$(Et.X,Et.Y,Et.Z),oO=j$(Et.X,Et.Y,Et.Z),iO=e=>e<=lg?xd*e:116*Math.cbrt(e)-16,ah=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=iO(t/Et.Y),i=L$(e,t,r),s=j$(e,t,r);!isFinite(i)||!isFinite(s)?o=i=s=0:(i=13*o*(i-nO),s=13*o*(s-oO));let a={mode:"luv",l:o,u:i,v:s};return n!==void 0&&(a.alpha=n),a},sO=(e,t,r)=>4*e/(e+15*t+3*r),aO=(e,t,r)=>9*t/(e+15*t+3*r),uO=sO(Et.X,Et.Y,Et.Z),lO=aO(Et.X,Et.Y,Et.Z),uh=({l:e,u:t,v:r,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};t===void 0&&(t=0),r===void 0&&(r=0);let o=t/(13*e)+uO,i=r/(13*e)+lO,s=Et.Y*(e<=8?e/xd:Math.pow((e+16)/116,3)),a=s*(9*o)/(4*i),u=s*(12-3*o-20*i)/(4*i),c={mode:"xyz50",x:a,y:s,z:u};return n!==void 0&&(c.alpha=n),c},cO=e=>B$(ah(Zu(e))),dO=e=>Hu(uh(R$(e))),fO={mode:"lchuv",toMode:{luv:R$,rgb:dO},fromMode:{rgb:cO,luv:B$},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:U,fixup:Ao},c:U,l:U,alpha:{use:U,fixup:Bt}},difference:{h:pd},average:{h:Eo}},hO={...fa,mode:"lrgb",toMode:{rgb:ma},fromMode:{rgb:ha},parse:["srgb-linear"],serialize:"srgb-linear"},mO={mode:"luv",toMode:{xyz50:uh,rgb:e=>Hu(uh(e))},fromMode:{xyz50:ah,rgb:e=>ah(Zu(e))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:U,u:U,v:U,alpha:{use:U,fixup:Bt}}},_$=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*r),i=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*r),s=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*r),a={mode:"oklab",l:.210454268309314*o+.7936177747023054*i-.0040720430116193*s,a:1.9779985324311684*o-2.42859224204858*i+.450593709617411*s,b:.0259040424655478*o+.7827717124575296*i-.8086757549230774*s};return n!==void 0&&(a.alpha=n),a},Dd=e=>{let t=_$(ha(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Ju=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.pow(e+.3963377773761749*t+.2158037573099136*r,3),i=Math.pow(e-.1055613458156586*t-.0638541728258133*r,3),s=Math.pow(e-.0894841775298119*t-1.2914855480194092*r,3),a={mode:"lrgb",r:4.076741636075957*o-3.3077115392580616*i+.2309699031821044*s,g:-1.2684379732850317*o+2.6097573492876887*i-.3413193760026573*s,b:-.0041960761386756*o-.7034186179359362*i+1.7076146940746117*s};return n!==void 0&&(a.alpha=n),a},Ad=e=>ma(Ju(e));function lh(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}function $c(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function gO(e,t){let r,n,o,i,s,a,u,c;-1.88170328*e-.80936493*t>1?(r=1.19086277,n=1.76576728,o=.59662641,i=.75515197,s=.56771245,a=4.0767416621,u=-3.3077115913,c=.2309699292):1.81444104*e-1.19445276*t>1?(r=.73956515,n=-.45954404,o=.08285427,i=.1254107,s=.14503204,a=-1.2684380046,u=2.6097574011,c=-.3413193965):(r=1.35733652,n=-.00915799,o=-1.1513021,i=-.50559606,s=.00692167,a=-.0041960863,u=-.7034186147,c=1.707614701);let d=r+n*e+o*t+i*e*e+s*e*t,f=.3963377774*e+.2158037573*t,h=-.1055613458*e-.0638541728*t,m=-.0894841775*e-1.291485548*t;{let y=1+d*f,$=1+d*h,k=1+d*m,x=y*y*y,E=$*$*$,N=k*k*k,R=3*f*y*y,q=3*h*$*$,ie=3*m*k*k,De=6*f*f*y,de=6*h*h*$,$e=6*m*m*k,Ge=a*x+u*E+c*N,He=a*R+u*q+c*ie,St=a*De+u*de+c*$e;d=d-Ge*He/(He*He-.5*Ge*St)}return d}function mg(e,t){let r=gO(e,t),n=Ju({l:1,a:r*e,b:r*t}),o=Math.cbrt(1/Math.max(n.r,n.g,n.b)),i=o*r;return[o,i]}function pO(e,t,r,n,o,i=null){i||(i=mg(e,t));let s;if((r-o)*i[1]-(i[0]-o)*n<=0)s=i[1]*o/(n*i[0]+i[1]*(o-r));else{s=i[1]*(o-1)/(n*(i[0]-1)+i[1]*(o-r));{let a=r-o,u=n,c=.3963377774*e+.2158037573*t,d=-.1055613458*e-.0638541728*t,f=-.0894841775*e-1.291485548*t,h=a+u*c,m=a+u*d,y=a+u*f;{let $=o*(1-s)+s*r,k=s*n,x=$+k*c,E=$+k*d,N=$+k*f,R=x*x*x,q=E*E*E,ie=N*N*N,De=3*h*x*x,de=3*m*E*E,$e=3*y*N*N,Ge=6*h*h*x,He=6*m*m*E,St=6*y*y*N,Pr=4.0767416621*R-3.3077115913*q+.2309699292*ie-1,hr=4.0767416621*De-3.3077115913*de+.2309699292*$e,Xn=4.0767416621*Ge-3.3077115913*He+.2309699292*St,Rt=hr/(hr*hr-.5*Pr*Xn),Rn=-Pr*Rt,Qn=-1.2684380046*R+2.6097574011*q-.3413193965*ie-1,Qr=-1.2684380046*De+2.6097574011*de-.3413193965*$e,Ht=-1.2684380046*Ge+2.6097574011*He-.3413193965*St,Le=Qr/(Qr*Qr-.5*Qn*Ht),Tt=-Qn*Le,en=-.0041960863*R-.7034186147*q+1.707614701*ie-1,ir=-.0041960863*De-.7034186147*de+1.707614701*$e,tn=-.0041960863*Ge-.7034186147*He+1.707614701*St,mn=ir/(ir*ir-.5*en*tn),Co=-en*mn;Rn=Rt>=0?Rn:1e6,Tt=Le>=0?Tt:1e6,Co=mn>=0?Co:1e6,s+=Math.min(Rn,Math.min(Tt,Co))}}}return s}function gg(e,t,r=null){r||(r=mg(e,t));let n=r[0],o=r[1];return[o/n,o/(1-n)]}function U$(e,t,r){let n=mg(t,r),o=pO(t,r,e,1,e,n),i=gg(t,r,n),s=.11516993+1/(7.4477897+4.1590124*r+t*(-2.19557347+1.75198401*r+t*(-2.13704948-10.02301043*r+t*(-4.24894561+5.38770819*r+4.69891013*t)))),a=.11239642+1/(1.6132032-.68124379*r+t*(.40370612+.90148123*r+t*(-.27087943+.6122399*r+t*(.00299215-.45399568*r-.14661872*t)))),u=o/Math.min(e*i[0],(1-e)*i[1]),c=e*s,d=(1-e)*a,f=.9*u*Math.sqrt(Math.sqrt(1/(1/(c*c*c*c)+1/(d*d*d*d))));return c=e*.4,d=(1-e)*.8,[Math.sqrt(1/(1/(c*c)+1/(d*d))),f,o]}function R1(e){const t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o={mode:"okhsl",l:lh(t)};e.alpha!==void 0&&(o.alpha=e.alpha);let i=Math.sqrt(r*r+n*n);if(!i)return o.s=0,o;let[s,a,u]=U$(t,r/i,n/i),c;if(i<a){let d=0,f=.8*s,h=1-f/a;c=(i-d)/(f+h*(i-d))*.8}else{let d=a,f=.2*a*a*1.25*1.25/s,h=1-f/(u-a);c=.8+.2*((i-d)/(f+h*(i-d)))}return c&&(o.s=c,o.h=tr(Math.atan2(n,r)*180/Math.PI)),o}function L1(e){let t=e.h!==void 0?e.h:0,r=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const o={mode:"oklab",l:$c(n)};if(e.alpha!==void 0&&(o.alpha=e.alpha),!r||n===1)return o.a=o.b=0,o;let i=Math.cos(t/180*Math.PI),s=Math.sin(t/180*Math.PI),[a,u,c]=U$(o.l,i,s),d,f,h,m;r<.8?(d=1.25*r,f=0,h=.8*a,m=1-h/u):(d=5*(r-.8),f=u,h=.2*u*u*1.25*1.25/a,m=1-h/(c-u));let y=f+d*h/(1-m*d);return o.a=y*i,o.b=y*s,o}const bO={...D$,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:R1,rgb:e=>R1(Dd(e))},toMode:{oklab:L1,rgb:e=>Ad(L1(e))}};function j1(e){let t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,o=Math.sqrt(r*r+n*n),i=o?r/o:1,s=o?n/o:1,[a,u]=gg(i,s),c=.5,d=1-c/a,f=u/(o+t*u),h=f*t,m=f*o,y=$c(h),$=m*y/h,k=Ju({l:y,a:i*$,b:s*$}),x=Math.cbrt(1/Math.max(k.r,k.g,k.b,0));t=t/x,o=o/x*lh(t)/t,t=lh(t);const E={mode:"okhsv",s:o?(c+u)*m/(u*c+u*d*m):0,v:t?t/h:0};return E.s&&(E.h=tr(Math.atan2(n,r)*180/Math.PI)),e.alpha!==void 0&&(E.alpha=e.alpha),E}function _1(e){const t={mode:"oklab"};e.alpha!==void 0&&(t.alpha=e.alpha);const r=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,o=e.v!==void 0?e.v:0,i=Math.cos(r/180*Math.PI),s=Math.sin(r/180*Math.PI),[a,u]=gg(i,s),c=.5,d=1-c/a,f=1-n*c/(c+u-u*d*n),h=n*u*c/(c+u-u*d*n),m=$c(f),y=h*m/f,$=Ju({l:m,a:i*y,b:s*y}),k=Math.cbrt(1/Math.max($.r,$.g,$.b,0)),x=$c(o*f),E=h*x/f;return t.l=x*k,t.a=E*i*k,t.b=E*s*k,t}const yO={...C$,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:j1,rgb:e=>j1(Dd(e))},toMode:{oklab:_1,rgb:e=>Ad(_1(e))}};function vO(e,t){if(!t||t[0]!=="oklab")return;const r={mode:"oklab"},[,n,o,i,s]=t;if(!(n.type===B.Hue||o.type===B.Hue||i.type===B.Hue))return n.type!==B.None&&(r.l=Math.min(Math.max(0,n.type===B.Number?n.value:n.value/100),1)),o.type!==B.None&&(r.a=o.type===B.Number?o.value:o.value*.4/100),i.type!==B.None&&(r.b=i.type===B.Number?i.value:i.value*.4/100),s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const wO={...fg,mode:"oklab",toMode:{lrgb:Ju,rgb:Ad},fromMode:{lrgb:_$,rgb:Dd},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[vO],serialize:e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`};function $O(e,t){if(!t||t[0]!=="oklch")return;const r={mode:"oklch"},[,n,o,i,s]=t;if(n.type!==B.None){if(n.type===B.Hue)return;r.l=Math.min(Math.max(0,n.type===B.Number?n.value:n.value/100),1)}if(o.type!==B.None&&(r.c=Math.max(0,o.type===B.Number?o.value:o.value*.4/100)),i.type!==B.None){if(i.type===B.Percentage)return;r.h=i.value}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const kO={...hg,mode:"oklch",toMode:{oklab:e=>ti(e,"oklab"),rgb:e=>Ad(ti(e,"oklab"))},fromMode:{rgb:e=>ei(Dd(e),"oklch"),oklab:e=>ei(e,"oklch")},parse:[$O],serialize:e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},U1=e=>{let{r:t,g:r,b:n,alpha:o}=ha(e),i={mode:"xyz65",x:.486570948648216*t+.265667693169093*r+.1982172852343625*n,y:.2289745640697487*t+.6917385218365062*r+.079286914093745*n,z:0*t+.0451133818589026*r+1.043944368900976*n};return o!==void 0&&(i.alpha=o),i},z1=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o=ma({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*r,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*r,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*r},"p3");return n!==void 0&&(o.alpha=n),o},xO={...fa,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:e=>z1(rs(e)),xyz65:z1},toMode:{rgb:e=>ns(U1(e)),xyz65:U1}},Lf=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*Math.pow(t,1/1.8):16*e},V1=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"prophoto",r:Lf(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*r),g:Lf(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*r),b:Lf(e*0+t*0+1.2119675456389452*r)};return n!==void 0&&(o.alpha=n),o},jf=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*Math.pow(t,1.8):e/16},q1=e=>{let t=jf(e.r),r=jf(e.g),n=jf(e.b),o={mode:"xyz50",x:.7977666449006423*t+.1351812974005331*r+.0313477341283922*n,y:.2880748288194013*t+.7118352342418731*r+899369387256e-16*n,z:0*t+0*r+.8251046025104602*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},DO={...fa,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:V1,rgb:e=>V1(Zu(e))},toMode:{xyz50:q1,rgb:e=>Hu(q1(e))}},W1=1.09929682680944,AO=.018053968510807,_f=e=>{const t=Math.abs(e);return t>AO?(Math.sign(e)||1)*(W1*Math.pow(t,.45)-(W1-1)):4.5*e},K1=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let o={mode:"rec2020",r:_f(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*r),g:_f(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*r),b:_f(e*.0176398574453108-t*.0427706132578085+.9421031212354739*r)};return n!==void 0&&(o.alpha=n),o},G1=1.09929682680944,EO=.018053968510807,Uf=(e=0)=>{let t=Math.abs(e);return t<EO*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((t+G1-1)/G1,1/.45)},H1=e=>{let t=Uf(e.r),r=Uf(e.g),n=Uf(e.b),o={mode:"xyz65",x:.6369580483012911*t+.1446169035862083*r+.1688809751641721*n,y:.262700212011267*t+.6779980715188708*r+.059301716469862*n,z:0*t+.0280726930490874*r+1.0609850577107909*n};return e.alpha!==void 0&&(o.alpha=e.alpha),o},CO={...fa,mode:"rec2020",fromMode:{xyz65:K1,rgb:e=>K1(rs(e))},toMode:{xyz65:H1,rgb:e=>ns(H1(e))},parse:["rec2020"],serialize:"rec2020"},Si=.0037930732552754493,z$=Math.cbrt(Si),zf=e=>Math.cbrt(e)-z$,FO=e=>{const{r:t,g:r,b:n,alpha:o}=ha(e),i=zf(.3*t+.622*r+.078*n+Si),s=zf(.23*t+.692*r+.078*n+Si),a=zf(.2434226892454782*t+.2047674442449682*r+.5518098665095535*n+Si),u={mode:"xyb",x:(i-s)/2,y:(i+s)/2,b:a-(i+s)/2};return o!==void 0&&(u.alpha=o),u},Vf=e=>Math.pow(e+z$,3),MO=({x:e,y:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o=Vf(e+t)-Si,i=Vf(t-e)-Si,s=Vf(r+t)-Si,a=ma({r:11.031566904639861*o-9.866943908131562*i-.16462299650829934*s,g:-3.2541473810744237*o+4.418770377582723*i-.16462299650829934*s,b:-3.6588512867136815*o+2.7129230459360922*i+1.9459282407775895*s});return n!==void 0&&(a.alpha=n),a},SO={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:MO},fromMode:{rgb:FO},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:U,y:U,b:U,alpha:{use:U,fixup:Bt}}},TO={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:Hu,lab:dg},fromMode:{rgb:Zu,lab:cg},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:U,y:U,z:U,alpha:{use:U,fixup:Bt}}},NO=e=>{let{x:t,y:r,z:n,alpha:o}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let i={mode:"xyz50",x:1.0479298208405488*t+.0229467933410191*r-.0501922295431356*n,y:.0296278156881593*t+.990434484573249*r-.0170738250293851*n,z:-.0092430581525912*t+.0150551448965779*r+.7518742899580008*n};return o!==void 0&&(i.alpha=o),i},PO=e=>{let{x:t,y:r,z:n,alpha:o}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let i={mode:"xyz65",x:.9554734527042182*t-.0230985368742614*r+.0632593086610217*n,y:-.0283697069632081*t+1.0099954580058226*r+.021041398966943*n,z:.0123140016883199*t-.0205076964334779*r+1.3303659366080753*n};return o!==void 0&&(i.alpha=o),i},IO={mode:"xyz65",toMode:{rgb:ns,xyz50:NO},fromMode:{rgb:rs,xyz50:PO},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:U,y:U,z:U,alpha:{use:U,fixup:Bt}}},OO=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o={mode:"yiq",y:.29889531*e+.58662247*t+.11448223*r,i:.59597799*e-.2741761*t-.32180189*r,q:.21147017*e-.52261711*t+.31114694*r};return n!==void 0&&(o.alpha=n),o},BO=({y:e,i:t,q:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const o={mode:"rgb",r:e+.95608445*t+.6208885*r,g:e-.27137664*t-.6486059*r,b:e-1.10561724*t+1.70250126*r};return n!==void 0&&(o.alpha=n),o},RO={mode:"yiq",toMode:{rgb:BO},fromMode:{rgb:OO},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:U,i:U,q:U,alpha:{use:U,fixup:Bt}}},LO=e=>Math.max(0,Math.min(1,e||0)),qf=e=>Math.round(LO(e)*255),jO=zi("rgb"),_O=e=>{if(e===void 0)return;let t=qf(e.r),r=qf(e.g),n=qf(e.b);return"#"+(1<<24|t<<16|r<<8|n).toString(16).slice(1)},UO=e=>_O(jO(e)),zO=e=>{const t={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},VO=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1);function qO(e="rgb"){const{gamut:t}=md(e);if(!t)return n=>!0;const r=zi(typeof t=="string"?t:e);return n=>VO(r(n))}function WO(e="rgb"){const{gamut:t}=md(e);if(!t)return i=>th(i);const r=typeof t=="string"?t:e,n=zi(r),o=qO(r);return i=>{const s=th(i);if(!s)return;const a=n(s);if(o(a))return s;const u=zO(a);return s.mode===u.mode?u:zi(s.mode)(u)}}Pe(xI);Pe(TI);Pe(NI);Pe(PI);Pe(BI);Pe(D$);Pe(C$);Pe(KI);Pe(GI);Pe(YI);Pe(XI);Pe(fg);Pe(eO);Pe(hg);Pe(rO);Pe(fO);Pe(hO);Pe(mO);Pe(bO);Pe(yO);Pe(wO);Pe(kO);Pe(xO);Pe(DO);Pe(CO);Pe(fa);Pe(SO);Pe(TO);Pe(IO);Pe(RO);const KO=SI("rgb");class po{constructor(t){this.set(t)}static isValidColorString(t){try{return new po(t),!0}catch{return!1}}static isColor(t){return t instanceof po}static deserialize(t){const r=JSON.parse(t),n=new po("black");return En(r).forEach(([o,i])=>{o==="originalColorSyntax"?n.originalColorSyntax=_t.isEnumValue(i,he,"Cannot deserialize: invalid color syntax."):n._allColors[o]=i}),n}getRgbDistance(t){return KO(this.#e,t)}getClosestNamedColor(){return je(ku).reduce((t,r)=>{const n=this.getRgbDistance(r);return n<t.distance?{distance:n,name:r}:t},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=he.hex;#e=_t.isDefined(oh("black"));_allColors={names:["black"],[he.name]:"black",hexString:"#000000",[he.hex]:{r:0,g:0,b:0},[he.rgb]:{r:0,g:0,b:0},[he.hsl]:{h:0,s:0,l:0},[he.hwb]:{h:0,w:0,b:0},[he.lab]:{l:0,a:0,b:0},[he.lch]:{l:0,c:0,h:0},[he.oklab]:{l:0,a:0,b:0},[he.oklch]:{l:0,c:0,h:0}};clone(){return po.deserialize(this.serialize())}setByString(t){const r=oh(t);if(!r)throw new Error(`Unable to parse invalid color string: '${t}'`);this.originalColorSyntax=QP(t),this.#e=r,this.pullFromInternalColor()}set(t){if(F.isString(t))return this.setByString(t);if(Dt.isLengthExactly(Object.keys(t),1,`Cannot set multiple color formats at once: got '${d2(Object.keys(t))}'`),t.hexString||t.name)this.setByString(t.hexString||t.name);else{const[r,n]=_t.isDefined(En(t)[0]),o=_n[r],i=Object.values(et(o.coords,s=>{const a=n[s],u=o.coords[_t.isKeyOf(s,o.coords)],c=a!=null&&a>=u.min&&a<=u.max?n[s]:this[r][s];return _t.isDefined(c)}));this.setByString(`${o.conversionFormat}(${i.join(" ")})`)}}pullFromInternalColor(){Br(Qo).forEach(t=>{const r=_n[t],n=r.conversionFormat,o=F.isKeyOf(this.#e.mode,_n)?_n[this.#e.mode]:void 0,i=WO(r.colorSpace===o?.colorSpace?n:"rgb")(zi(n)(this.#e));i||Dt.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${t}'.`),je(this[t]).forEach(s=>{const a=i[s],u=r.coords[_t.isKeyOf(s,r.coords)];a!=null&&(this._allColors[t][s]=l2((a||0)*(u.factor||1),{digits:u.digits||0}))})}),this._allColors.hexString=UO(this.#e),this._allColors.names=GO(this.rgb),this._allColors[he.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return yn(this._allColors)}toFormattedStrings(){return{...et(_n,r=>Object.values(this[r]).map(o=>String(o).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(D1," "),[he.name]:(this.names[0]||"").padEnd(D1," "),[he.hexString]:this[he.hexString]}}toCss(){return{...et(_n,r=>{const n=Object.values(this[r]);return`${r}(${n.join(" ")})`}),[he.hexString]:this[he.hexString],[he.name]:this.names[0]||""}}get names(){return yn(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[he.hexString]}get hex(){return yn(this._allColors[he.hex])}get rgb(){return yn(this._allColors[he.rgb])}get hsl(){return yn(this._allColors[he.hsl])}get hwb(){return yn(this._allColors[he.hwb])}get lab(){return yn(this._allColors[he.lab])}get lch(){return yn(this._allColors[he.lch])}get oklab(){return yn(this._allColors[he.oklab])}get oklch(){return yn(this._allColors[he.oklch])}}function GO(e){return ko(En(ku),([t])=>t,(t,[,r])=>F.deepEquals(r,[e.r,e.g,e.b]))}function Z1(e){if(typeof e=="string")return HO(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let t=[0,0,0,0,!1,"unknown"];return t[0]=e.r?e.r:e.red?e.red:!1,t[1]=e.g?e.g:e.green?e.green:!1,t[2]=e.b?e.b:e.blue?e.blue:!1,t[3]=e.a?e.a:e.alpha?e.alpha:1,t[4]=!!(t[0]&&t[1]&&t[2]),t[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",t}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}function HO(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let t=!1,n=[0,0,0,0,t,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let a in s)if(e==a){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:function(d){for(let f=0;f<3;f++)n[f]=parseInt(d[f+1],16);return n[3]=1,!0}},c=u.rex.exec(s[a]);return n[4]=t=u.sprig(c),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:function(s){let a=0,u=0,c=10,d=100,f=2.55,h="1";s[23]&&(h=s[23],delete s[23]),n[3]=h.match(/%/g)?parseFloat(h)/d:parseFloat(h);for(let m=1;m<s.length;m++)s[m]&&(a=a||m,u=m);switch(u){case 4:c=16,d=15,n[3]=parseInt(s[u],c)/d;case 3:c=16;for(let m=0;m<3;m++)n[m]=parseInt(s[a+m]+s[a+m],c);break;case 5:c=16;case 9:n[0]=n[1]=n[2]=c==10?parseFloat(s[u]):parseInt(s[u],c);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[u])*f;break;case 8:c=16,d=255,n[3]=parseInt(s[8],c)/d;case 7:c=16;case 11:for(let m=0;m<3;m++)n[m]=c==10?parseFloat(s[a+m]):parseInt(s[a+m],c);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(s[a+m])*f;break;case 18:n[5]=s[15];for(let m=0;m<3;m++)a++,n[m]=s[a].match(/%/g)?parseFloat(s[a])*2.55:parseFloat(s[a])*255;break;case 22:n[5]=s[a];for(let m=0;m<3;m++)a++,n[m]=s[a]?s[a].match(/%/g)?parseFloat(s[a])/d:parseFloat(s[a]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let N=function(R){let q=(R+E/30)%12,ie=m*Math.min(y,1-y);return y-ie*Math.max(-1,Math.min(q-3,9-q,1))},m,y,$,k,x,E=n[0]%360;if(E<0&&(E+=360),n[5].match(/^hsla?/i))m=n[1],y=n[2],$=0,x=1;else if(n[5].match(/^hwba?/i)){if($=n[1],k=n[2],$+k>=1){n[0]=n[1]=n[2]=$/($+k),n[5]="sRGB";break}m=1,y=.5,x=1-$-k}n[0]=Math.round(255*(N(0)*x+$)),n[1]=Math.round(255*(N(8)*x+$)),n[2]=Math.round(255*(N(4)*x+$)),n[5]="sRGB"}break}return!0}},i=o.rex.exec(e);return i?(n[4]=t=o.parsley(i),n):(t=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,t,"parsleyError"])}const vt={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function ZO(e,t,r=-1){const n=[0,1.1];if(isNaN(e)||isNaN(t)||Math.min(e,t)<n[0]||Math.max(e,t)>n[1])return 0;let o=0,i=0,s="BoW";return e=e>vt.blkThrs?e:e+Math.pow(vt.blkThrs-e,vt.blkClmp),t=t>vt.blkThrs?t:t+Math.pow(vt.blkThrs-t,vt.blkClmp),Math.abs(t-e)<vt.deltaYmin?0:(t>e?(o=(Math.pow(t,vt.normBG)-Math.pow(e,vt.normTXT))*vt.scaleBoW,i=o<vt.loClip?0:o-vt.loBoWoffset):(s="WoB",o=(Math.pow(t,vt.revBG)-Math.pow(e,vt.revTXT))*vt.scaleWoB,i=o>-.1?0:o+vt.loWoBoffset),r<0?i*100:r==0?Math.round(Math.abs(i)*100)+"<sub>"+s+"</sub>":Number.isInteger(r)?(i*100).toFixed(r):0)}function JO(e,t,r=-1,n=!0){let o=Z1(t),i=Z1(e);return!(i[3]==""||i[3]==1)&&(i=XO(i,o,n)),ZO(J1(i),J1(o),r)}function YO(e,t=2){const r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],i=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(t),0,0,0,0,0,0,0,0,0];s.length;let a=777;e=Math.abs(e);const u=.2,c=e==0?1:e*u|0;let d=0,f=(e-r[c][d])*u;for(d++;d<i;d++)a=r[c][d],a>400?s[d]=a:e<14.5?s[d]=999:e<29.5?s[d]=777:a>24?s[d]=Math.round(a-n[c][d]*f):s[d]=a-(2*n[c][d]*f|0)*.5;return s}function J1(e=[0,0,0]){function t(r){return Math.pow(r/255,vt.mainTRC)}return vt.sRco*t(e[0])+vt.sGco*t(e[1])+vt.sBco*t(e[2])}function XO(e=[0,0,0,1],t=[0,0,0],r=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let i=0;i<3;i++)o[i]=t[i]*n+e[i]*e[3],r&&(o[i]=Math.min(Math.round(o[i]),255));return o}const V$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};et(V$,e=>e);Object.fromEntries(Object.entries(V$).map(([e,t])=>[t,e]));const Y1=new Map;function QO({background:e,foreground:t}){const r=`${t}|${e}`,n=Y1.get(r);if(n)return n;const o=l2(Number(JO(t,e)),{digits:1}),i={contrast:o,fontSizes:eB(o),contrastLevel:tB(o)};return Y1.set(r,i),i}function eB(e){const t=YO(e).slice(1);return Su(t,(n,o)=>({key:(o+1)*100,value:n}))}function tB(e){return _t.isDefined(Ed.find(t=>t.min<=Math.abs(e)))}var qe;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(qe||(qe={}));const rB={[qe.SmallBodyText]:"Small Text",[qe.BodyText]:"Body Text",[qe.NonBodyText]:"Non-body Text",[qe.Header]:"Header",[qe.Placeholder]:"Placeholder",[qe.Decoration]:"Decoration",[qe.Invisible]:"Invisible"};qe.SmallBodyText,qe.BodyText,qe.NonBodyText,qe.Header,qe.Placeholder,qe.Decoration,qe.Invisible;const Ed=[{min:90,name:qe.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:qe.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:qe.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:qe.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:qe.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:qe.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:qe.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];Su(Ed,e=>({key:e.min,value:e}));Su(Ed,e=>({key:e.name,value:e}));const Wf=Bn()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:({cssVars:e})=>A`
        :host {
            display: flex;
            align-items: center;
            font-family: ${og["vira-monospace"].value};
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
    `,events:{valueChange:at()},render({inputs:e,events:t,dispatch:r,cssVars:n}){const o=_n[e.colorFormatName],i=o.coords[e.colorCoordinateName];if(!i)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const s=10,a=v3(s,f=>{const h=i.min+(i.max-i.min)*(f/s);return new po({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:h}}).toCss()[o.conversionFormat]}),u=A`linear-gradient(to right, ${Ie(a.join(","))})`,c=_t.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),d=i.radix?Math.round(c).toString(i.radix).toUpperCase().padStart(i.radixPad||0,"0"):String(c);return g`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${A`
                    ${n["vir-color-slider-gradient"].name}: ${u};
                `}
                step=${Math.pow(10,i.digits?-i.digits:0)}
                ${oN(f=>{Dt.instanceOf(f,HTMLInputElement),f.min=String(i.min),f.max=String(i.max),f.value=String(c)})}
                ${_("input",f=>{const h=cd(f,HTMLInputElement),m=Number(h.value);isNaN(m)||r(new t.valueChange(m))})}
            />
            <${xe.assign({value:d})}
                ${_(xe.events.valueChange,f=>{const h=i.radix?parseInt(f.detail,i.radix):Number(f.detail);isNaN(h)||r(new t.valueChange(h))})}
            ></${xe}>
        `}}),Kf=Bn()({tagName:"vir-color-format-sliders",styles:A`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${Gu};
        }
    `,events:{colorChange:at()},render({inputs:e,dispatch:t,events:r}){const n=_n[e.colorFormatName],o=je(n.coords).map(i=>g`
                    <${Wf.assign({color:e.color,colorCoordinateName:i,colorFormatName:e.colorFormatName})}
                        ${_(Wf.events.valueChange,s=>{const a=e.color.clone();a.set({[e.colorFormatName]:{[i]:s.detail}});const u=a.toCss()[n.conversionFormat];t(new r.colorChange(u))})}
                    ></${Wf}>
                `);return g`
            ${e.showFormatName?g`
                      <h3>${e.colorFormatName}</h3>
                  `:Q}
            ${o}
        `}}),Gf=Bn()({tagName:"vir-color-swatch",styles:A`
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
                style=${A`
                    background-color: ${Ie(t)};
                    color: ${Ie(r)};
                `}
            >
                <slot></slot>
            </div>
        `}}),Hf=Bn()({tagName:"vir-contrast-indicator",styles:A`
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

        .${Ie(qe.Invisible)} {
            color: red;
        }
        .${Ie(qe.Decoration)} {
            color: #ff6600;
        }
        .${Ie(qe.Placeholder)} {
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
    `,render({inputs:e}){const t=Ed.toReversed().slice(1).map(o=>g`
                    <div
                        class="gauge-level ${cr({active:o.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),r=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return g`
            <div title=${r} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${t}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${rB[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),X1=Bn()({tagName:"vir-color-pair",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"vir-color-pair-no-contrast-tips":({inputs:e,state:t})=>!e.showContrast&&!t.forceShowEverything},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Rr};
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
            font-family: ${og["vira-monospace"].value};
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${Gu};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${Hf} {
            margin-top: 1px;
        }
    `,render({state:e,updateState:t,inputs:r}){const n=["foreground","background"].map(a=>{const u=[r.color[a].name,r.showVarValues||e.forceShowEverything?":":""].filter(F.isTruthy).join(""),c=r.showVarValues||e.forceShowEverything?g`
                          <span>${r.color[a].default}</span>
                      `:Q;return g`
                <p>
                    <span>${u}</span>
                    ${c}
                </p>
            `}),o=r.showVarNames||e.forceShowEverything?g`
                      <div class="css-var-names">${n}</div>
                  `:Q,i=e.previewElement?QO({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,s=i&&(r.showContrast||e.forceShowEverything)?g`
                      <${Hf.assign({contrast:i,fontWeight:r.fontWeight})}></${Hf}>
                  `:Q;return g`
            <button
                ${_("click",()=>{t({forceShowEverything:!e.forceShowEverything})})}
                ${Li(a=>{t({previewElement:_t.instanceOf(a,HTMLElement)})})}
                class="color-preview"
                style=${A`
                    color: ${Ie(r.color.foreground.default)};
                    background: ${Ie(r.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${A`
                                visibility: ${Ie((i?.fontSizes[400]||1/0)>150?"hidden":"visible")};
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
        `}});class nB{shapes;options;constructor(t,r={}){this.shapes=t,this.options=r,this.storeName=r.storeName||"local-storage-client",this.get=et(this.shapes,n=>(o={})=>this.getAllValues(o)[n]),this.set=et(this.shapes,n=>o=>{cc(o,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const i=this.getAllValues();return i[n]=o,globalThis.localStorage.setItem(this.storeName,JSON.stringify(i)),o}),this.delete=et(this.shapes,n=>()=>{const o=this.getAllValues();delete o[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(o))})}storeName;getAllValues({throwErrorOnFailure:t=!1}={}){return r2(()=>{const r=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return n2(r,(n,o)=>{const i=this.shapes[n];if(i){if(t)cc(o,i,{allowExtraKeys:!0});else if(!Uo(o,i,{allowExtraKeys:!0}))return;return{key:n,value:o}}})},{handleError:r=>{if(t)throw Hs(r,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}}})}get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}}const Zf=new nB({lastFormat:Bi(Qo)}),oB=iu(Qo).map(e=>({value:e,label:e.toUpperCase()})),Ca=Bn()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:Is.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:Is.Length}},state(){return{selectedFormatName:Zf.get.lastFormat()||Qo.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":({inputs:e})=>!!e.alwaysShowPicker},styles:({cssVars:e,hostClasses:t})=>A`
        :host {
            display: inline-flex;
        }

        ${t["vir-color-picker-always-show"].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${Rr}
            cursor: pointer;
            display: flex;
        }

        ${ce} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${Gf} {
                width: ${e["vir-color-picker-swatch-width"].value};
                height: ${e["vir-color-picker-swatch-height"].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${og["vira-monospace"].value};
            font-size: 12px;
            color: #666;
            display: flex;
            justify-content: center;
            gap: 2px;
            align-items: center;

            & ${I} {
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
            ${Fi.menuShadow}
        }

        .raw-input-wrapper {
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 12px;
            ${T["vira-form-border-color"].name}: #ddd;
            color: #666;

            & ${xe} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,events:{colorChange:at()},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const i=po.isColor(e.color)?e.color:new po(e.color||"black"),s=_n[n.selectedFormatName],a=n.rawInput??i.toCss()[s.rawSyntax],u=g`
            <div class="raw-input-wrapper">
                <${xe.assign({value:a})}
                    ${_(xe.events.valueChange,h=>{const m=h.detail;o({rawInput:m}),po.isValidColorString(m)&&t(new r.colorChange(m))})}
                ></${xe}>
                <button
                    class="code-button"
                    ${_("click",async()=>{await globalThis.navigator.clipboard.writeText(a)})}
                >
                    <${I.assign({icon:G0,fitContainer:!0})}></${I}>
                </button>
            </div>
        `,c=g`
            <button
                class="code-button"
                ${_("click",async()=>{await globalThis.navigator.clipboard.writeText(i.hexString)})}
            >
                <span>${i.hexString}</span>
                <${I.assign({icon:G0,fitContainer:!0})}></${I}>
            </button>
        `,d=g`
            <div class="swatch-wrapper">
                <${Gf.assign({backgroundColor:i})}></${Gf}>
                ${e.showHexValue?c:Q}
            </div>
        `,f=g`
            <div class="picker">
                <${Re.assign({options:oB,value:n.selectedFormatName})}
                    ${_(Re.events.valueChange,h=>{const m=Fh.isEnumValue(h.detail,Qo);m&&(o({selectedFormatName:m}),Zf.set.lastFormat(m))})}
                ></${Re}>
                ${u}
                <${Kf.assign({color:i,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${_(Kf.events.colorChange,h=>{t(new r.colorChange(h.detail)),o({rawInput:void 0})})}
                ></${Kf}>
            </div>
        `;return e.alwaysShowPicker?g`
                ${d} ${f}
            `:g`
                <${ce.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${ce.slotNames.trigger}
                        ${_("mousedown",()=>{const h=Zf.get.lastFormat();h&&o({selectedFormatName:h})})}
                    >
                        ${d}
                    </button>
                    <div class="pop-up" slot=${ce.slotNames.popUp}>
                        ${f}
                    </div>
                </${ce}>
            `}}),Du=Xr()({tagName:"book-page-controls",events:{controlValueChange:at()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>A`
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

        ${xe}, ${Re} {
            height: 24px;
            max-width: 128px;
        }

        ${I}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===X.Hidden)return"";const s=iB(e.currentValues[n],o,a=>{const u=F.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...Object.fromEntries(Object.keys(e.config).map(c=>[c,e.currentValues[c]])),[n]:a}}))});return g`
                    <div class="control-wrapper">
                        ${Mr(i===0,g`
                                <${I.assign({icon:Za})}
                                    class="options-icon"
                                ></${I}>
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
                `}):""}});function iB(e,t,r){return gi(t,X.Hidden)?"":gi(t,X.Checkbox)?g`
            <${ae.assign({value:!!e})}
                ${_(ae.events.valueChange,n=>{r(n.detail)})}
            ></${ae}>
        `:gi(t,X.Color)?g`
            <${Ca.assign({color:e})}
                style=${A`
                    ${Ca.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${Ca.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${_(Ca.events.colorChange,n=>{r(n.detail)})}
            ></${Ca}>
        `:gi(t,X.Text)?g`
            <${xe.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${_(xe.events.valueChange,n=>{r(n.detail)})}
            ></${xe}>
        `:gi(t,X.Number)?g`
            <${xe.assign({value:e,allowedInputs:/[\d.]/})}
                ${_(xe.events.valueChange,n=>{r(n.detail)})}
            ></${xe}>
        `:gi(t,X.Dropdown)?g`
            <${Re.assign({value:e,options:t.options.map(n=>({label:n,value:n}))})}
                ${_(Re.events.valueChange,n=>{r(n.detail)})}
            ></${Re}>
        `:gi(t,X.Custom)?t.content:g`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const Q1=Xr()({tagName:"book-breadcrumbs",styles:A`
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
                <${sn.assign({route:{hash:void 0,search:void 0,paths:[Er.Book,...s]},router:e.router})}>
                    ${r}
                </${sn}>
                ${a}
            `}):g`
                &nbsp;
            `}}),Jf=Xr()({tagName:"book-breadcrumbs-bar",styles:A`
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
            ${Mr(!!e.currentSearch,g`
                    &nbsp;
                `,g`
                    <${Q1.assign({currentRoute:e.currentRoute,router:e.router})}></${Q1}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${_("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await Ti({milliseconds:200}),n.value===o&&(n.value?t(new hc({paths:[Er.Search,encodeURIComponent(n.value)]})):t(new hc(Ns)))})}
            />
        `}}),ey=Xr()({tagName:"book-entry-description",styles:A`
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
            `)}}),ty=Xr()({tagName:"book-page-wrapper",styles:A`
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
              `,r=[Er.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?t2(e.pageNode.entry.errors):void 0;n&&console.error(n);const o=e.blockNavigation?t:g`
                  <${sn.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${sn}>
              `;return g`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${o}
                    ${n?g`
                              <${Xo.assign({message:n.message})}></${Xo}>
                          `:g`
                              <${ey.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${ey}>
                              <${Du.assign({config:e.pageNode.entry.controls,currentValues:Oh(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Du}>
                          `}
                </div>
            </div>
        `}}),xl=Xr()({tagName:"book-element-example-title",styles:A`
        :host {
            display: flex;
            color: ${Ee["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const t=[Er.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return g`
            <${sn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${sn}>
        `}}),ry=Symbol("unset-internal-state"),ny=Xr()({tagName:"book-element-example-viewer",state(){return{isUnset:ry}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw t2(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===ry&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return g`
                ${Mr(!!t.elementExampleNode.entry.styles,g`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Wt(n)),console.error(n),g`
                <${Xo.assign({message:`${t.elementExampleNode.entry.title} failed: ${Wt(n)}`})}></${Xo}>
            `}},options:{allowPolymorphicState:!0}}),oy=Xr()({tagName:"book-element-example-wrapper",styles:A`
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

        ${xl} {
            color: ${Ee["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${xl} {
            color: ${Ee["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return g`
            <div class="individual-example-wrapper">
                <${xl.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${xl}>
                <${ny.assign(e)}></${ny}>
            </div>
        `}}),sB={milliseconds:10};let La;const kc=new Map,$i=new Map;function aB(){return La||(La=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=kc.get(r);if(n)if(t.isIntersecting){if(!$i.has(r)){const o=globalThis.setTimeout(()=>{$i.delete(r),n(),La?.unobserve(r),kc.delete(r)},Ss(sB,{milliseconds:!0}).milliseconds);$i.set(r,o)}}else{const o=$i.get(r);o&&(clearTimeout(o),$i.delete(r))}}},{rootMargin:"100px"})),La}function iy(e){const t=$i.get(e);t&&(clearTimeout(t),$i.delete(e)),kc.delete(e),La?.unobserve(e)}const Dl=Xr()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:A`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&iy(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:g`
            <div
                class="placeholder"
                ${Li(n=>{t.placeholderElement&&iy(t.placeholderElement),r({placeholderElement:n}),kc.set(n,()=>{r({hasRendered:!0})}),aB().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function q$(e,t,r,n){const o=v0(r,n),i=[];if(o){const s=q$(e,t,o,n);s&&i.push(s)}if(Ds(r,Yt.Page)&&!e.includes(r)){const s=Oh(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:s,breadcrumbs:et(s,()=>r.fullUrlBreadcrumbs)})}return i.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function uB({blockNavigation:e,currentNodes:t,isTopLevel:r,router:n,isSearching:o,controls:i,originalTree:s}){if(!t.length&&o)return[g`
                No results
            `];const a=F.isLengthAtLeast(t,1)?q$(t,i,t[0],s):void 0,u=a&&Object.values(a.config).length&&F.isLengthAtLeast(t,1)?g`
                  <${Du.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${Du}>
              `:Q,c=XT(t,d=>d.fullUrlBreadcrumbs.join(">"),d=>{if(Ds(d,Yt.Page))return g`
                    <${ty.assign({blockNavigation:e,isTopLevel:r,pageNode:d,controls:i,router:n})}
                        class="block-entry"
                    ></${ty}>
                `;if(Ds(d,Yt.ElementExample)){const f=Oh(i,d.fullUrlBreadcrumbs.slice(0,-1)),h=g`
                    <${oy.assign({blockNavigation:e,elementExampleNode:d,currentPageControls:f,router:n})}></${oy}>
                `;return g`
                    <${Dl.assign({content:h})}
                        class="inline-entry ${cr({"block-entry":d.entry.isVertical})}"
                    ></${Dl}>
                `}else{if(Ds(d,Yt.Root))return Q;{const f=g`
                    <${Xo.assign({message:`Unknown entry type for rendering: '${d.entry.entryType}'`})}></${Xo}>
                `;return g`
                    <${Dl.assign({content:f})}
                        class="block-entry"
                    ></${Dl}>
                `}}});return[u,c]}const hs=Xr()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:A`
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

        ${Jf} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${yo["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:at()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=b2(e.currentRoute.paths),s=uB({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return g`
            <${Jf.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${Jf}>

            ${Mr(e.showLoading,g`
                    <div
                        ${Li(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${I.assign({icon:ji})}></${I}>
                    </div>
                    ${Mr(!!n.lastElement,g`
                            ${n.lastElement}
                            <slot name=${qn.Footer}></slot>
                        `)}
                `,g`
                    <div
                        ${Li(a=>{o({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${qn.Footer}></slot>
                `)}
        `}});function lB(e,t,r){const n=sy(e,t);return n.length?n:(r(Ns),sy(e,Ns.paths))}function sy(e,t){return e.filter(r=>G3({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Yf=Bn()({tagName:"element-book-app",state(){return{currentRoute:Ns,router:void 0,loading:!0,colors:{config:void 0,theme:a1(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:at()},styles:A`
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

        ${hs} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${fs} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{t._debug&&console.info("rendering element-book app");function s(d){return{...e.currentRoute,...d}}function a(d){const f=s(d);return!F.jsonEquals(e.currentRoute,f)}function u(d){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,d].filter(F.isTruthy).join(" - "))}function c(d){if(!a(d))return;const f=s(d);e.router?e.router.setRoute(f):n({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(f.paths))}try{if(t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const x=jN(t.internalRouterConfig.basePath);n({router:x}),x.listen(!0,E=>{n({currentRoute:E})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const d={themeColor:t.themeColor};if(!F.jsonEquals(d,e.colors.config)){const x=a1(d);n({colors:{config:d,theme:x}}),F6(r,x)}const f=t._debug??!1,h=Q3({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:p2(h.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=b2(e.currentRoute.paths),$=(m?CN({flattenedNodes:h.flattenedNodes,searchQuery:m}):void 0)??lB(h.flattenedNodes,e.currentRoute.paths,c);u($[0]?.entry.title);const k=e.treeBasedControls?.controls;return k?(t._debug&&console.info({currentControls:k}),g`
                <div
                    class="root"
                    ${_(hc,x=>{const E=x.detail;if(!a(E))return;if(n({loading:!0}),c(E),!(r.shadowRoot.querySelector(fs.tagName)instanceof fs))throw new TypeError(`Failed to find child '${fs.tagName}'`)})}
                    ${_(Du.events.controlValueChange,x=>{if(!e.treeBasedControls)return;const E=t6(k,x.detail.fullUrlBreadcrumbs,x.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:E}})})}
                >
                    ${t.blockNavigation?Q:g`
                              <${fs.assign({flattenedNodes:h.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot
                                      name=${qn.NavHeader}
                                      slot=${qn.NavHeader}
                                  ></slot>
                              </${fs}>
                          `}
                    <${hs.assign({blockNavigation:!!t.blockNavigation,controls:k,currentNodes:$,currentRoute:e.currentRoute,debug:f,originalTree:h.tree,router:e.router,showLoading:e.loading})}
                        ${_(hs.events.loadingRender,async x=>{await u1();const E=r.shadowRoot.querySelector(hs.tagName);E?E.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${hs.tagName}' for scrolling.`),await u1(),n({loading:!x.detail})})}
                    >
                        <slot
                            name=${qn.Footer}
                            slot=${qn.Footer}
                        ></slot>
                    </${hs}>
                </div>
            `):g`
                    <${Xo.assign({message:"Failed to generate page controls."})}></${Xo}>
                `}catch(d){return console.error(d),g`
                <p class="error">${Wt(d)}</p>
            `}}}),Al="None";function cB({parent:e,title:t,theme:r,hideInverseColors:n,overrides:o,useVerticalLayout:i,prefixGroupByCount:s=2,hideCopyCode:a}){const u={"Show Var Names":{controlType:X.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:X.Checkbox,initValue:!0}},c={"Theme Override":{controlType:X.Dropdown,initValue:Al,options:[Al,...(o||[]).map(k=>{if(k.name===Al)throw new Error(`Cannot have theme override named '${Al}'`);return k.name})]}},d=Me({parent:e,title:t,controls:u});function f({controls:k,theme:x,themeColorName:E}){const N=F.isKeyOf(E,x.colors)?x.colors[E]:void 0,R=F.isKeyOf(E,x.inverse)?x.inverse[E]:void 0;if(!N||!R)throw new Error(`No theme color found by name '${E}'`);const q=g`
            <${X1.assign({color:N,showVarValues:!0,showVarNames:k["Show Var Names"],showContrast:k["Show Contrast Tips"],fontWeight:400})}></${X1}>
        `;return g`
            <div class="with-inverse">${q}${Q}</div>
        `}function h(k,x,E){const N=y3(Object.keys(x.colors),R=>s?R.split("-").slice(0,s).join("-"):R);Object.entries(N).forEach(([R,q])=>{q&&k({title:R,styles:A`
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
                    `,render({controls:ie}){const de=("Theme Override"in ie&&ie["Theme Override"]&&E?.find($e=>$e.name===ie["Theme Override"])||void 0)?.asTheme||x;return g`
                            <div class="theme-wrapper">
                                ${q.map($e=>f({controls:ie,theme:de,themeColorName:$e}))}
                            </div>
                        `}})})}const m=["Click a color preview to show CSS var names and values."],y=Me({parent:d,title:"Default",descriptionParagraphs:m,useVerticalExamples:i,controls:{...c},defineExamples({defineExample:k}){h(k,r,o)}}),$=(o||[]).map(k=>Me({parent:d,title:k.name,useVerticalExamples:i,descriptionParagraphs:m,defineExamples({defineExample:x}){h(x,k.asTheme,void 0)}}));return[d,y,...$]}const mt=Me({title:"Elements",parent:void 0}),pg=Me({title:"Styles",parent:void 0}),bg=Me({title:"Util",parent:void 0}),dB=Me({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:X.Color,initValue:""},"Fill Color":{controlType:X.Color,initValue:""},"Stroke Width":{controlType:X.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(Z0).forEach(t=>{e({title:t.name,styles:A`
                    :host(:hover) ${I} {
                        background-color: #f2f2f2;
                    }

                    ${I} {
                        padding: 8px;
                        border-radius: ${T["vira-form-radius"].value};
                    }
                `,render({controls:r}){const n=A`
                        ${b["vira-icon-fill-color"].name}: ${Ie(r["Fill Color"]||"inherit")};
                        ${b["vira-icon-stroke-color"].name}: ${Ie(r["Stroke Color"]||"inherit")};
                        ${b["vira-icon-stroke-width"].name}: ${Ie(r["Stroke Width"]?ou(r["Stroke Width"]):"inherit")};
                    `;return g`
                        <${I.assign({icon:t})} style=${n}></${I}>
                    `}})})}}),fB=cB({parent:pg,theme:Je,title:"Vira Theme",hideInverseColors:!0,overrides:[$P],hideCopyCode:!0}),hB=Me({title:"createColoredIcon",parent:bg,descriptionParagraphs:["Wraps an existing icon with specific colors to create a new icon that can be used anywhere the original icon can be used."],defineExamples({defineExample:e}){e({title:"stroke color",styles:A`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=vn(Ut,{"vira-icon-stroke-color":"red"});return g`
                    <${I.assign({icon:Ut})}></${I}>
                    <span>→</span>
                    <${I.assign({icon:t})}></${I}>
                `}}),e({title:"fill color",styles:A`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=vn(H0,{"vira-icon-fill-color":"gold","vira-icon-stroke-color":"orange"});return g`
                    <${I.assign({icon:H0})}></${I}>
                    <span>→</span>
                    <${I.assign({icon:t})}></${I}>
                `}}),e({title:"stroke width",styles:A`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=vn(Ba,{"vira-icon-stroke-color":"green","vira-icon-stroke-width":"3px"});return g`
                    <${I.assign({icon:Ba})}></${I}>
                    <span>→</span>
                    <${I.assign({icon:t})}></${I}>
                `}}),e({title:"with CSS var values",styles:A`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,render(){const t=vn(Ba,{"vira-icon-stroke-color":`${T["vira-form-error-color"].value}`}),r=vn(Ba,{"vira-icon-stroke-color":`${T["vira-form-success-color"].value}`});return g`
                    <${I.assign({icon:t})}></${I}>
                    <${I.assign({icon:r})}></${I}>
                `}}),e({title:"multiple icons with different colors",styles:A`
                :host {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
            `,render(){const t=vn(Ut,{"vira-icon-stroke-color":"red"}),r=vn(Ut,{"vira-icon-stroke-color":"dodgerblue"}),n=vn(Ut,{"vira-icon-stroke-color":"green"}),o=vn(Ut,{"vira-icon-stroke-color":"purple"});return g`
                    <${I.assign({icon:t})}></${I}>
                    <${I.assign({icon:r})}></${I}>
                    <${I.assign({icon:n})}></${I}>
                    <${I.assign({icon:o})}></${I}>
                `}})}}),W$={async element1(){return await Ti({seconds:2}),(await Kl(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-BqpMCSfh.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await Ti({seconds:2}),(await Kl(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-CoEMhipG.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},ay=Bn()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:f$(W$)}},render({state:e,inputs:t}){return h$(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(r){return g`
                    <${Mi}>
                        ${Vi("Failed to import element",Wt(r))}
                    </${Mi}>
                `},loading(){return g`
                    <${I.assign({icon:ji})}></${I}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Dt.never("The error element will always error")}})}}),uy=Bn()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:f$(W$)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),h$(e.dynamicElements,{error(r){return g`
                    <${Mi}>
                        ${Vi("Failed to import element",Wt(r))}
                    </${Mi}>
                `},loading(){return g`
                    <${I.assign({icon:ji})}></${I}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Dt.never("The error element will always error")}})}}),ly=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],mB=Me({parent:bg,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:A`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${Re.assign({value:String(t.value),options:ly})}
                        ${_(Re.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${Re}>
                    <${ay.assign({numberValue:t.value})}></${ay}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:A`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${Re.assign({value:String(t.value),options:ly})}
                        ${_(Re.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${Re}>
                    <${uy.assign({numberValue:t.value})}></${uy}>
                `}})}}),gB=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:g`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:A`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:A`
            ${Lr} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],pB=Me({title:Lr.tagName,parent:mt,controls:{Selected:{controlType:X.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:X.Text,initValue:""}},defineExamples({defineExample:e}){gB.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?g`
                            <${Lr.assign(n)}>
                                ${t.customTemplate}
                            </${Lr}>
                        `:g`
                            <${Lr.assign(n)}></${Lr}>
                        `}})})}}),ch=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new tg({sanitizeRoute(e){return e}})}}],bB=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:sg.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...ch,{id:"long",label:g`
                        <${Lr.assign({selected:!1})}>
                            <div
                                style=${A`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${Lr}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:Wo.Both,items:[...ch,{id:"long",label:g`
                        <${Lr.assign({selected:!1})}>
                            <div
                                style=${A`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${Lr}>
                    `}]}}],yB=Me({parent:mt,title:jo.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){bB.forEach(t=>{e({title:t.title,styles:A`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${jo.assign({items:ch,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${jo}>
                    `}})})}}),dh=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],vB=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...dh,{id:4,label:"link here",route:{route:{paths:["test"]},router:new tg({sanitizeRoute(e){return e}})}}]}},{title:"with multi selection",inputs:{isMultiSelect:!0,selected:[2]}},{title:"with custom template",inputs:{items:[...dh,{id:4,disableDefaultPointerStyles:!0,label:g`
                        <span
                            style=${A`
                                color: blue;
                            `}
                        >
                            Custom Item
                        </span>
                    `}]}}],wB=Me({parent:mt,title:Ya.tagName,defineExamples({defineExample:e}){vB.forEach(t=>{e({title:t.title,render(){return g`
                        <${Ya.assign({isMultiSelect:!1,navController:void 0,items:dh,selected:[],...t.inputs})}></${Ya}>
                    `}})})}}),K$=[];Br(gc).forEach(e=>{Br(sg).forEach(t=>{K$.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const $B=Me({parent:mt,title:Xa.tagName,defineExamples({defineExample:e}){K$.forEach(t=>{e({title:t.title,styles:A`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${Xa.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${Xa}>
                    `}})})}}),kB=Me({parent:mt,title:ce.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:A`
                ${ce} {
                    ${T["vira-form-focus-outline-border-radius"].name}: 0;
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
                    <${ce.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${ce.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${ce.slotNames.popUp}>Pop up!</div>
                    </${ce}>
                `}}),e({title:"long clipped content",styles:A`
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
                    <${ce.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${ce.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${ce.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ce}>
                `}}),e({title:"long right anchored content",styles:A`
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
                    <${ce.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Wo.Right})}>
                        <div slot=${ce.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ce.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ce}>
                `}}),e({title:"long left anchored content",styles:A`
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
                    <${ce.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Wo.Left})}>
                        <div slot=${ce.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ce.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ce}>
                `}}),e({title:"short right anchored content",styles:A`
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
                    <${ce.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Wo.Right})}>
                        <div slot=${ce.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ce.slotNames.popUp}>not long</div>
                    </${ce}>
                `}}),e({title:"ignoreMaxWidth wide content",styles:A`
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
                        <${ce.assign({keepOpenAfterInteraction:!0})}>
                            <div class="trigger" slot=${ce.slotNames.trigger}>
                                Trigger
                            </div>
                            <div class="pop-up" slot=${ce.slotNames.popUp}>
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
                        </${ce}>
                    </div>
                `}})}}),xB=[{title:"menu shadow",styles:Fi.menuShadow},{title:"menu shadow reversed",styles:Fi.menuShadowReversed},{title:"modal",styles:Fi.modal}],DB=Me({parent:pg,title:"Shadows",defineExamples({defineExample:e}){xB.forEach(t=>{e({title:t.title,styles:A`
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
                    `}})})}}),AB=Me({parent:mt,title:ct.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:X.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return g`
                    <${ct.assign({text:"Text here",bold:!1})}></${ct}>
                `}}),e({title:"Bold",render(){return g`
                    <${ct.assign({text:"Text here",bold:!0})}></${ct}>
                `}}),e({title:"Dynamic",render({controls:t}){return g`
                    <${ct.assign({text:"Text here",bold:t.bolded})}></${ct}>
                `}}),e({title:"Resized",styles:A`
                ${ct} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return g`
                    <${ct.assign({text:"Not Bolded",bold:!1})}></${ct}>
                    <${ct.assign({text:"Bolded",bold:!0})}></${ct}>
                `}}),e({title:"Alignment",styles:A`
                ${ct} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return g`
                    <${ct.assign({text:"Not Bolded",bold:!1})}></${ct}>
                    <${ct.assign({text:"Bolded",bold:!0})}></${ct}>
                `}}),e({title:"Stylized",styles:A`
                ${ct} {
                    text-decoration: underline;
                }
            `,render(){return g`
                    <${ct.assign({text:"Not Bolded",bold:!1})}></${ct}>
                    <${ct.assign({text:"Bolded",bold:!0})}></${ct}>
                `}})}}),EB=Me({parent:mt,title:nt.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:X.Color,initValue:""},"Secondary color":{controlType:X.Color,initValue:""},"Hover color":{controlType:X.Color,initValue:""},"Active color":{controlType:X.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:o}){const i=n??A``;e({title:r,styles:i,render({controls:s}){const a=A`
                        ${T["vira-form-accent-primary-color"].name}: ${Ie(s["Primary color"]||"inherit")};
                        ${T["vira-form-background-color"].name}: ${Ie(s["Secondary color"]||"inherit")};
                        ${T["vira-form-accent-primary-hover-color"].name}: ${Ie(s["Hover color"]||"inherit")};
                        ${T["vira-form-accent-primary-active-color"].name}: ${Ie(s["Active color"]||"inherit")};
                    `;return g`
                        <${nt.assign({text:"hello",...o})}
                            style=${a}
                        ></${nt}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Za}}),t({title:"with expanding icon",inputs:{icon:Za,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:Un.Outline}}),t({title:"ghost",inputs:{buttonStyle:Un.Ghost}}),t({title:"plain",inputs:{buttonStyle:Un.Plain}}),t({title:"danger",inputs:{buttonStyle:Un.Danger}}),t({title:"danger outline",inputs:{buttonStyle:Un.DangerOutline}}),t({title:"only icon",inputs:{icon:Za,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:A`
                ${nt} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:A`
                ${nt} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:A`
                :host {
                    ${T["vira-form-accent-primary-color"].name}: pink;
                    ${T["vira-form-background-color"].name}: purple;
                    ${T["vira-form-accent-primary-hover-color"].name}: orange;
                    ${T["vira-form-accent-primary-active-color"].name}: yellow;
                }
            `,render(){return g`
                    <${nt.assign({text:"hello"})}></${nt}>
                `}})}}),CB=[{title:"basic"},{title:"success",inputs:{cardState:Q0.Success}},{title:"error",inputs:{cardState:Q0.Error}},{title:"long",content:g`
            <p
                style=${A`
                    ${Gu}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],FB=Me({parent:mt,title:vf.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){CB.forEach(t=>{e({title:t.title,render(){return g`
                        <${vf.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${vf}>
                    `}})})}}),MB=Me({parent:mt,title:ae.tagName,controls:{Checked:{controlType:X.Checkbox,initValue:!1},Disabled:{controlType:X.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${ae.assign({value:t.checked})}
                        ${_(ae.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ae}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${ae.assign({value:t.checked})}
                        ${_(ae.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ae}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${ae.assign({value:t.checked,hasError:!0})}
                        ${_(ae.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ae}>
                `}}),e({title:"disabled unchecked",render(){return g`
                    <${ae.assign({value:!1,disabled:!0})}></${ae}>
                `}}),e({title:"disabled checked",render(){return g`
                    <${ae.assign({value:!0,disabled:!0})}></${ae}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return g`
                    <${ae.assign({value:t.Checked,disabled:t.Disabled})}></${ae}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return g`
                    <${ae.assign({value:!0})}></${ae}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${ae.assign({value:t.checked,label:"label goes here"})}
                        ${_(ae.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ae}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${ae.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${_(ae.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ae}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:A`
                ${ae} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${ae.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${_(ae.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ae}>
                `}}),e({title:"fill when checked",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${ae.assign({value:t.checked,fillWhenChecked:!0})}
                        ${_(ae.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ae}>
                `}}),e({title:"fill when unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${ae.assign({value:t.checked,fillWhenUnchecked:!0})}
                        ${_(ae.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ae}>
                `}}),e({title:"both fills",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${ae.assign({value:t.checked,fillWhenUnchecked:!0,fillWhenChecked:!0})}
                        ${_(ae.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ae}>
                `}})}}),SB=Me({title:no.tagName,parent:mt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:A`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>g`
                        <${no.assign({expanded:!!r.expandedStates[o]})}
                            ${_(no.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${no.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${_("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${Mr(!!r.showMoreStates[o],g`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${no}>
                    `)}}),e({title:"wider examples",styles:A`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>g`
                        <${no.assign({expanded:!!r.expandedStates[o]})}
                            ${_(no.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${no.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${_("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${Mr(!!r.showMoreStates[o],g`
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
                        </${no}>
                    `)}})}}),eu=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],TB=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...eu,{id:42,label:g`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...eu,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:A`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:A`
            ${Ra} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Ut}}],NB=Me({title:Ra.tagName,parent:mt,controls:{Selected:{controlType:X.Dropdown,initValue:"",options:["",...eu.map(e=>e.label)]},Prefix:{controlType:X.Text,initValue:""},"Force State":{controlType:X.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:X.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:X.Dropdown,initValue:"",options:["",...Object.keys(Z0)]},Disabled:{controlType:X.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:X.Text,initValue:"Select something"}},defineExamples({defineExample:e}){TB.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:o}){const i={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:o.Placeholder,options:t.inputs?.options||eu,selected:o.Selected?[eu.find(s=>s.label===o.Selected)?.id].filter(F.isTruthy):r.selected,selectionPrefix:o.Prefix||t.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":t.inputs?.isDisabled,icon:o.Icon?Z0[o.Icon]:t.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return g`
                        <${Ra.assign(i)}
                            ${_(Ra.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${Ra}>
                    `}})})}}),PB=Me({parent:mt,title:Mi.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${Mi}>Error Content</${Mi}>
                `}})}}),Xf=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],IB=Me({parent:mt,title:kr.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0,quantity:0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:ke.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:ke.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:ke.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:ke.Email,label:"Email Address",value:t.email},password:{type:ke.NewPassword,label:"Password",value:t.password},userRole:{type:ke.Select,label:"Role",options:Xf,value:t.userRole,placeholder:"placeholder"},quantity:{type:ke.Number,label:"Quantity",value:t.quantity,min:0,max:100,step:2,placeholder:"Enter quantity"},disabledField:{type:ke.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:ke.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return g`
                    <${kr.assign({fields:n})}
                        ${_(kr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${nt.assign({text:"Cancel",buttonStyle:Un.Outline})}></${nt}>
                            <${nt.assign({text:"Submit"})}></${nt}>
                        </div>
                    </${kr}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:ke.Text,label:"First Name",value:t.firstName},lastName:{type:ke.Text,label:"Last Name",value:t.lastName}};return g`
                    <${kr.assign({fields:n})}
                        ${_(kr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <${xe.assign({value:"",label:"More stuff"})}></${xe}>
                        <div class="buttons">
                            <${nt.assign({text:"Cancel",buttonStyle:Un.Outline})}></${nt}>
                            <${nt.assign({text:"Submit"})}></${nt}>
                        </div>
                    </${kr}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${kr} {
                    width: 400px;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:ke.Text,label:"First Name",value:t.firstName},lastName:{type:ke.Text,label:"Last Name",value:t.lastName},subscribe:{type:ke.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:ke.Email,label:"Email Address",value:t.email},password:{type:ke.NewPassword,label:"Password",value:t.password},userRole:{type:ke.Select,label:"Role",options:Xf,value:t.userRole}};return g`
                    <${kr.assign({fields:n})}
                        ${_(kr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${nt.assign({text:"Cancel",buttonStyle:Un.Outline})}></${nt}>
                            <${nt.assign({text:"Submit"})}></${nt}>
                        </div>
                    </${kr}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:ke.Text,label:"First Name",value:t.firstName},lastName:{type:ke.Text,label:"Last Name",value:t.lastName},subscribe:{type:ke.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:ke.Email,label:"Email Address",value:t.email},password:{type:ke.NewPassword,label:"Password",value:t.password},userRole:{type:ke.Select,label:"Role",options:Xf,value:t.userRole}};return g`
                    <${kr.assign({fields:n,isDisabled:!0})}
                        ${_(kr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${nt.assign({text:"Cancel",buttonStyle:Un.Outline})}></${nt}>
                            <${nt.assign({text:"Submit"})}></${nt}>
                        </div>
                    </${kr}>
                `}})}}),OB=Me({title:I.tagName,parent:mt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${I.assign({icon:Ut})}></${I}>
                `}}),e({title:"using createColoredIcon",render(){return g`
                    <${I.assign({icon:vn(Ut,{"vira-icon-stroke-color":"red"})})}></${I}>
                `}}),e({title:"fit container",styles:A`
                ${I} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return g`
                    <${I.assign({icon:vn(Ut,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${I}>
                `}})}}),BB=Me({title:So.tagName,parent:mt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:A`
                    border-radius: 32px;
                `,loadingSlot:g`
                    <div
                        style=${A`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${I.assign({icon:ji,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${I}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:A`
                    border-radius: 32px;
                `,errorSlot:g`
                    <div
                        style=${A`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${I.assign({icon:mc,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${I}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:A`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:A`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:A`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:g`
                    <div
                        style=${A`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${I.assign({icon:ji,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${I}>
                    </div>
                `,errorSlot:g`
                    <div
                        style=${A`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${I.assign({icon:mc,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${I}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:A`
                    ${So} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||A``}
                    }

                    ${r.allowReload?A`
                              ${So} {
                                  cursor: pointer;
                              }

                              ${So}:hover {
                                  border-color: #0055ff;
                              }
                          `:A``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:o}){return g`
                        <${So.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${_("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${Ei()}`})})}
                        >
                            ${r.loadingSlot?g`
                                      <div class="slot-wrapper" slot=${So.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:Q}${r.errorSlot?g`
                                      <div class="slot-wrapper" slot=${So.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:Q}
                        </${So}>
                    `}})})}}),RB=Me({title:xe.tagName,parent:mt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:X.Color,initValue:T["vira-form-foreground-color"].default},"Placeholder color":{controlType:X.Color,initValue:T["vira-form-placeholder-color"].default},"Border color":{controlType:X.Color,initValue:T["vira-form-border-color"].default},"Focus color":{controlType:X.Color,initValue:T["vira-form-focus-outline-color"].default},"Selection color":{controlType:X.Color,initValue:T["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:o,inputs:i}){e({title:o,styles:A`
                    ${n||A``}
                `,state(){return{value:i.value}},render({state:s,updateState:a,controls:u}){const c={[String(T["vira-form-foreground-color"].name)]:u["Text color"],[String(T["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(T["vira-form-border-color"].name)]:u["Border color"],[String(T["vira-form-focus-outline-color"].name)]:u["Focus color"],[String(T["vira-form-text-selection-color"].name)]:u["Selection color"]},d=et(c,(h,m)=>m||"inherit"),f=Object.entries(d).map(([h,m])=>[h,m].join(": ")+";").join(`
`);return g`
                        <${xe.assign({...i,value:s.value})}
                            style=${f}
                            ${_(xe.events.valueChange,h=>{a({value:h.detail}),console.info("changed:",h.detail)})}
                        ></${xe}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Ut}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:A`
                    ${xe} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Ut}},{title:"taller height",styles:A`
                    ${xe} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Ut}},{title:"shorter height",styles:A`
                    ${xe} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Ut}},{title:"max width",styles:A`
                    ${xe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:A`
                    ${xe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Di.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Di.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:A`
                    ${xe} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:A`
                    ${xe} {
                        width: unset;
                    }
                `}].forEach(t)}}),LB=Me({title:Ja.tagName,parent:mt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:X.Color,initValue:""},"Hover color":{controlType:X.Color,initValue:""},"Active color":{controlType:X.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:o}){const i=A`
                        ${T["vira-form-accent-primary-color"].name}: ${Ie(o["Hover color"]||"inherit")};
                        ${T["vira-form-accent-primary-active-color"].name}: ${Ie(o["Active color"]||"inherit")};
                        color: ${Ie(o["CSS Color"]||"inherit")};
                    `;return g`
                        <${Ja.assign(n)} style=${i}>My Link</${Ja}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}}),t({title:"disabled link styles",inputs:{disableLinkStyles:!0,link:{newTab:!0,url:"https://www.wikipedia.org"}}})}}),jB=Me({title:To.tagName,parent:mt,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:r}){return g`
                    <button
                        ${_("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${To.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${_(To.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${To}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:A`
                ${To} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${T["vira-form-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:r}){return g`
                    <button
                        ${_("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${To.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${_(To.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${To}>
                `}})}}),ja=A`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,Qf=g`
    <${Kn.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${Kn.slotNames.large}>Large</div>
        <div class="small" slot=${Kn.slotNames.small}>Small</div>
    </${Kn}>
`,vs={max:120,min:25,default:80},cy=tt()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":ou(vs.default)},state(){return{intervalId:void 0,increment:1}},styles:({cssVars:e})=>A`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,init({state:e,updateState:t,host:r,cssVars:n}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{const o=Fh.isNumber(T3(A6({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||vs.default;(o>=vs.max||o<=vs.min)&&t({increment:e.increment*-1}),Vh({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:ou(o+e.increment)})},10)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render(){return g`
            <slot></slot>
        `}}),dy=tt()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":ou(vs.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:A`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${ja}

        .large {
            white-space: nowrap;
        }
    `,init({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{t({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render({state:e}){return g`
            <${Kn.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${Kn.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${Kn.slotNames.small}>Small</div>
            </${Kn}>
        `}}),_B=Me({title:Kn.tagName,parent:mt,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:A`
                ${ja}
            `,render(){return Qf}}),e({title:"overflowing",styles:A`
                ${ja}

                ${Kn} {
                    max-width: 50px;
                }
            `,render(){return Qf}}),e({title:"dynamic size",styles:A`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${ja}

                .wrapper {
                    width: ${vs.max+10}px;
                }
            `,render(){return g`
                    <div class="wrapper">
                        <${cy}>
                            ${Qf}
                        </${cy}>
                    </div>
                `}}),e({title:"dynamic slot",styles:A`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${ja}
            `,render(){return g`
                    <${dy}></${dy}>
                `}})}}),UB=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:A`
            :host {
                ${T["vira-form-filled-background-color"].name}: red;
                ${T["vira-form-accent-primary-color"].name}: black;
                ${ao.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${ao} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:A`
            :host {
                ${T["vira-form-filled-background-color"].name}: red;
                ${T["vira-form-accent-primary-color"].name}: yellow;
                ${ao.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${ao} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:A`
            :host {
                ${T["vira-form-filled-background-color"].name}: red;
                ${T["vira-form-accent-primary-color"].name}: yellow;
                ${ao.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${ao} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],zB=Me({parent:mt,title:ao.tagName,defineExamples({defineExample:e}){UB.forEach(t=>{e({title:t.title,styles:A`
                    ${t.styles||A``}
                `,render(){return g`
                        <${ao.assign({value:50,...t.inputs})}></${ao}>
                    `}})})}}),jt=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],VB=[{title:"basic",inputs:{options:jt}},{title:"with really long option",inputs:{options:[...jt,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:jt,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:jt,disabled:!0}},{title:"error",inputs:{options:jt,hasError:!0}},{title:"with icon",inputs:{options:jt,icon:Ut}},{title:"custom width",inputs:{options:jt},styles:A`
            ${Re} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:jt,icon:Ut},styles:A`
            ${Re} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:jt,icon:Ut},styles:A`
            ${Re} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:jt,label:"Pick an option"}},{title:"with long label",inputs:{options:jt,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:jt,label:"Pick a really really really really long option"},styles:A`
            ${Re} {
                width: unset;
            }
        `}],qB=Me({parent:mt,title:Re.tagName,defineExamples({defineExample:e}){VB.forEach(t=>{e({title:t.title,styles:A`
                    ${t.styles||A``}
                `,state(){return{selected:void 0}},render({state:r,updateState:n}){return g`
                        <${Re.assign({...t.inputs,value:r.selected??t.inputs.value})}
                            ${_(Re.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${Re}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return g`
                    <${Re.assign({options:jt,value:jt[0]?.value})}></${Re}>
                `}}),e({title:"force update",render(){return g`
                    <${fy}></${fy}>
                `}})}}),fy=tt()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const r=jt.findIndex(o=>o.value===t.value),n=_t.isDefined(jt[(r+1)%jt.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return g`
            <${Re.assign({options:jt,value:e.value})}></${Re}>
        `}}),WB=[mt,dB,pg,bg],KB=[AB,EB,FB,MB,SB,NB,PB,IB,OB,BB,RB,LB,pB,wB,yB,jB,_B,$B,kB,zB,qB].sort((e,t)=>e.title.localeCompare(t.title)),GB=[...KB,hB,mB,DB,...fB],HB=[...WB,...GB];Bn()({tagName:"vira-book-app",styles:A`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Yf} {
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
            <${Yf.assign({internalRouterConfig:{basePath:Qm("vira"),useInternalRouter:!0},pages:HB,themeColor:"#33ccff"})}>
                <h1 slot=${qn.NavHeader}>Vira</h1>
            </${Yf}>
        `}});export{Bn as d,g as h};
