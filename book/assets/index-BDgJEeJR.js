(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Bt;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(Bt||(Bt={}));function Bp(e,t=r=>r){const r=new Map;return e.filter(n=>{const o=t(n);return r.get(o)?!1:(r.set(o,n),!0)})}class vf{diff(t,r,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const i=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(i,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,u,n,o)}diffWithOptionsObj(t,r,n,o){var i;const s=E=>{if(E=this.postProcess(E,n),o){setTimeout(function(){o(E)},0);return}else return E},a=r.length,u=t.length;let l=1,c=a+u;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));const d=(i=n.timeout)!==null&&i!==void 0?i:1/0,m=Date.now()+d,h=[{oldPos:-1,lastComponent:void 0}];let v=this.extractCommon(h[0],r,t,0,n);if(h[0].oldPos+1>=u&&v+1>=a)return s(this.buildValues(h[0].lastComponent,r,t));let $=-1/0,D=1/0;const k=()=>{for(let E=Math.max($,-l);E<=Math.min(D,l);E+=2){let N;const B=h[E-1],q=h[E+1];B&&(h[E-1]=void 0);let ne=!1;if(q){const pe=q.oldPos-E;ne=q&&0<=pe&&pe<a}const xe=B&&B.oldPos+1<u;if(!ne&&!xe){h[E]=void 0;continue}if(!xe||ne&&B.oldPos<q.oldPos?N=this.addToPath(q,!0,!1,0,n):N=this.addToPath(B,!1,!0,1,n),v=this.extractCommon(N,r,t,E,n),N.oldPos+1>=u&&v+1>=a)return s(this.buildValues(N.lastComponent,r,t))||!0;h[E]=N,N.oldPos+1>=u&&(D=Math.min(D,E-1)),v+1>=a&&($=Math.max($,E+1))}l++};if(o)(function E(){setTimeout(function(){if(l>c||Date.now()>m)return o(void 0);k()||E()},0)})();else for(;l<=c&&Date.now()<=m;){const E=k();if(E)return E}}addToPath(t,r,n,o,i){const s=t.lastComponent;return s&&!i.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+o,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,o,i){const s=r.length,a=n.length;let u=t.oldPos,l=u-o,c=0;for(;l+1<s&&u+1<a&&this.equals(n[u+1],r[l+1],i);)l++,u++,c++,i.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!i.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const o=[];let i;for(;t;)o.push(t),i=t.previousComponent,delete t.previousComponent,t=i;o.reverse();const s=o.length;let a=0,u=0,l=0;for(;a<s;a++){const c=o[a];if(c.removed)c.value=this.join(n.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let d=r.slice(u,u+c.count);d=d.map(function(m,h){const v=n[l+h];return v.length>m.length?v:m}),c.value=this.join(d)}else c.value=this.join(r.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return o}}function mh(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function hh(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function vd(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function wd(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function Us(e,t){return vd(e,t,"")}function mu(e,t){return wd(e,t,"")}function gh(e,t){return t.slice(0,zw(e,t))}function zw(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const o=Array(n);let i=0;o[0]=0;for(let s=1;s<n;s++){for(t[s]==t[i]?o[s]=o[i]:o[s]=i;i>0&&t[s]!=t[i];)i=o[i];t[s]==t[i]&&i++}i=0;for(let s=r;s<e.length;s++){for(;i>0&&e[s]!=t[i];)i=o[i];e[s]==t[i]&&i++}return i}function _s(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function oo(e){const t=e.match(/^\s*/);return t?t[0]:""}const Zu="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",qw=new RegExp(`[${Zu}]+|\\s+|[^${Zu}]`,"ug");class Ww extends vf{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const a of Array.from(s.segment(t))){const u=a.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(u)?n[n.length-1]+=u:n.push(u)}}else n=t.match(qw)||[];const o=[];let i=null;return n.forEach(s=>{/\s/.test(s)?i==null?o.push(s):o.push(o.pop()+s):i!=null&&/\s/.test(i)?o[o.length-1]==i?o.push(o.pop()+s):o.push(i+s):o.push(s),i=s}),o}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,o=null,i=null;return t.forEach(s=>{s.added?o=s:s.removed?i=s:((o||i)&&ph(n,i,o,s),n=s,o=null,i=null)}),(o||i)&&ph(n,i,o,null),t}}const Kw=new Ww;function Gw(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?Jw(e,t,r):Kw.diff(e,t,r)}function ph(e,t,r,n){if(t&&r){const o=oo(t.value),i=_s(t.value),s=oo(r.value),a=_s(r.value);if(e){const u=mh(o,s);e.value=wd(e.value,s,u),t.value=Us(t.value,u),r.value=Us(r.value,u)}if(n){const u=hh(i,a);n.value=vd(n.value,a,u),t.value=mu(t.value,u),r.value=mu(r.value,u)}}else if(r){if(e){const o=oo(r.value);r.value=r.value.substring(o.length)}if(n){const o=oo(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=oo(n.value),i=oo(t.value),s=_s(t.value),a=mh(o,i);t.value=Us(t.value,a);const u=hh(Us(o,a),s);t.value=mu(t.value,u),n.value=vd(n.value,o,u),e.value=wd(e.value,o,o.slice(0,o.length-u.length))}else if(n){const o=oo(n.value),i=_s(t.value),s=gh(i,o);t.value=mu(t.value,s)}else if(e){const o=_s(e.value),i=oo(t.value),s=gh(o,i);t.value=Us(t.value,s)}}class Zw extends vf{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Zu}]+|[^\\S\\n\\r]+|[^${Zu}]`,"ug");return t.match(r)||[]}}const Hw=new Zw;function Jw(e,t,r){return Hw.diff(e,t,r)}class Yw extends vf{constructor(){super(...arguments),this.tokenize=e2}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const Xw=new Yw;function Qw(e,t,r){return Xw.diff(e,t,r)}function e2(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const i=n[o];o%2&&!t.newlineIsToken?r[r.length-1]+=i:r.push(i)}return r}function bh(e,t){return Rp(e,new Map)}function Rp(e,t,r){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((o,i)=>o[0].localeCompare(i[0])).forEach(([o,i])=>{const s=Rp(i,t);n[o]=s}),n}else return e}var t2=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,r2=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,n2=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,wc={Space_Separator:t2,ID_Start:r2,ID_Continue:n2},st={isSpaceSeparator(e){return typeof e=="string"&&wc.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||wc.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||wc.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let $d,tr,_n,Hu,$o,sn,Et,wf,ua;var o2=function(t,r){$d=String(t),tr="start",_n=[],Hu=0,$o=1,sn=0,Et=void 0,wf=void 0,ua=void 0;do Et=i2(),u2[tr]();while(Et.type!=="eof");return typeof r=="function"?kd({"":ua},"",r):ua};function kd(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const i=String(o),s=kd(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const i=kd(n,o,r);i===void 0?delete n[o]:Object.defineProperty(n,o,{value:i,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let oe,te,Ys,Rn,de;function i2(){for(oe="default",te="",Ys=!1,Rn=1;;){de=Hn();const e=Lp[oe]();if(e)return e}}function Hn(){if($d[Hu])return String.fromCodePoint($d.codePointAt(Hu))}function P(){const e=Hn();return e===`
`?($o++,sn=0):e?sn+=e.length:sn++,e&&(Hu+=e.length),e}const Lp={default(){switch(de){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":P();return;case"/":P(),oe="comment";return;case void 0:return P(),Re("eof")}if(st.isSpaceSeparator(de)){P();return}return Lp[tr]()},comment(){switch(de){case"*":P(),oe="multiLineComment";return;case"/":P(),oe="singleLineComment";return}throw Le(P())},multiLineComment(){switch(de){case"*":P(),oe="multiLineCommentAsterisk";return;case void 0:throw Le(P())}P()},multiLineCommentAsterisk(){switch(de){case"*":P();return;case"/":P(),oe="default";return;case void 0:throw Le(P())}P(),oe="multiLineComment"},singleLineComment(){switch(de){case`
`:case"\r":case"\u2028":case"\u2029":P(),oe="default";return;case void 0:return P(),Re("eof")}P()},value(){switch(de){case"{":case"[":return Re("punctuator",P());case"n":return P(),Bo("ull"),Re("null",null);case"t":return P(),Bo("rue"),Re("boolean",!0);case"f":return P(),Bo("alse"),Re("boolean",!1);case"-":case"+":P()==="-"&&(Rn=-1),oe="sign";return;case".":te=P(),oe="decimalPointLeading";return;case"0":te=P(),oe="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":te=P(),oe="decimalInteger";return;case"I":return P(),Bo("nfinity"),Re("numeric",1/0);case"N":return P(),Bo("aN"),Re("numeric",NaN);case'"':case"'":Ys=P()==='"',te="",oe="string";return}throw Le(P())},identifierNameStartEscape(){if(de!=="u")throw Le(P());P();const e=Dd();switch(e){case"$":case"_":break;default:if(!st.isIdStartChar(e))throw yh();break}te+=e,oe="identifierName"},identifierName(){switch(de){case"$":case"_":case"‌":case"‍":te+=P();return;case"\\":P(),oe="identifierNameEscape";return}if(st.isIdContinueChar(de)){te+=P();return}return Re("identifier",te)},identifierNameEscape(){if(de!=="u")throw Le(P());P();const e=Dd();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!st.isIdContinueChar(e))throw yh();break}te+=e,oe="identifierName"},sign(){switch(de){case".":te=P(),oe="decimalPointLeading";return;case"0":te=P(),oe="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":te=P(),oe="decimalInteger";return;case"I":return P(),Bo("nfinity"),Re("numeric",Rn*(1/0));case"N":return P(),Bo("aN"),Re("numeric",NaN)}throw Le(P())},zero(){switch(de){case".":te+=P(),oe="decimalPoint";return;case"e":case"E":te+=P(),oe="decimalExponent";return;case"x":case"X":te+=P(),oe="hexadecimal";return}return Re("numeric",Rn*0)},decimalInteger(){switch(de){case".":te+=P(),oe="decimalPoint";return;case"e":case"E":te+=P(),oe="decimalExponent";return}if(st.isDigit(de)){te+=P();return}return Re("numeric",Rn*Number(te))},decimalPointLeading(){if(st.isDigit(de)){te+=P(),oe="decimalFraction";return}throw Le(P())},decimalPoint(){switch(de){case"e":case"E":te+=P(),oe="decimalExponent";return}if(st.isDigit(de)){te+=P(),oe="decimalFraction";return}return Re("numeric",Rn*Number(te))},decimalFraction(){switch(de){case"e":case"E":te+=P(),oe="decimalExponent";return}if(st.isDigit(de)){te+=P();return}return Re("numeric",Rn*Number(te))},decimalExponent(){switch(de){case"+":case"-":te+=P(),oe="decimalExponentSign";return}if(st.isDigit(de)){te+=P(),oe="decimalExponentInteger";return}throw Le(P())},decimalExponentSign(){if(st.isDigit(de)){te+=P(),oe="decimalExponentInteger";return}throw Le(P())},decimalExponentInteger(){if(st.isDigit(de)){te+=P();return}return Re("numeric",Rn*Number(te))},hexadecimal(){if(st.isHexDigit(de)){te+=P(),oe="hexadecimalInteger";return}throw Le(P())},hexadecimalInteger(){if(st.isHexDigit(de)){te+=P();return}return Re("numeric",Rn*Number(te))},string(){switch(de){case"\\":P(),te+=s2();return;case'"':if(Ys)return P(),Re("string",te);te+=P();return;case"'":if(!Ys)return P(),Re("string",te);te+=P();return;case`
`:case"\r":throw Le(P());case"\u2028":case"\u2029":l2(de);break;case void 0:throw Le(P())}te+=P()},start(){switch(de){case"{":case"[":return Re("punctuator",P())}oe="value"},beforePropertyName(){switch(de){case"$":case"_":te=P(),oe="identifierName";return;case"\\":P(),oe="identifierNameStartEscape";return;case"}":return Re("punctuator",P());case'"':case"'":Ys=P()==='"',oe="string";return}if(st.isIdStartChar(de)){te+=P(),oe="identifierName";return}throw Le(P())},afterPropertyName(){if(de===":")return Re("punctuator",P());throw Le(P())},beforePropertyValue(){oe="value"},afterPropertyValue(){switch(de){case",":case"}":return Re("punctuator",P())}throw Le(P())},beforeArrayValue(){if(de==="]")return Re("punctuator",P());oe="value"},afterArrayValue(){switch(de){case",":case"]":return Re("punctuator",P())}throw Le(P())},end(){throw Le(P())}};function Re(e,t){return{type:e,value:t,line:$o,column:sn}}function Bo(e){for(const t of e){if(Hn()!==t)throw Le(P());P()}}function s2(){switch(Hn()){case"b":return P(),"\b";case"f":return P(),"\f";case"n":return P(),`
`;case"r":return P(),"\r";case"t":return P(),"	";case"v":return P(),"\v";case"0":if(P(),st.isDigit(Hn()))throw Le(P());return"\0";case"x":return P(),a2();case"u":return P(),Dd();case`
`:case"\u2028":case"\u2029":return P(),"";case"\r":return P(),Hn()===`
`&&P(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Le(P());case void 0:throw Le(P())}return P()}function a2(){let e="",t=Hn();if(!st.isHexDigit(t)||(e+=P(),t=Hn(),!st.isHexDigit(t)))throw Le(P());return e+=P(),String.fromCodePoint(parseInt(e,16))}function Dd(){let e="",t=4;for(;t-- >0;){const r=Hn();if(!st.isHexDigit(r))throw Le(P());e+=P()}return String.fromCodePoint(parseInt(e,16))}const u2={start(){if(Et.type==="eof")throw Ro();$c()},beforePropertyName(){switch(Et.type){case"identifier":case"string":wf=Et.value,tr="afterPropertyName";return;case"punctuator":hu();return;case"eof":throw Ro()}},afterPropertyName(){if(Et.type==="eof")throw Ro();tr="beforePropertyValue"},beforePropertyValue(){if(Et.type==="eof")throw Ro();$c()},beforeArrayValue(){if(Et.type==="eof")throw Ro();if(Et.type==="punctuator"&&Et.value==="]"){hu();return}$c()},afterPropertyValue(){if(Et.type==="eof")throw Ro();switch(Et.value){case",":tr="beforePropertyName";return;case"}":hu()}},afterArrayValue(){if(Et.type==="eof")throw Ro();switch(Et.value){case",":tr="beforeArrayValue";return;case"]":hu()}},end(){}};function $c(){let e;switch(Et.type){case"punctuator":switch(Et.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Et.value;break}if(ua===void 0)ua=e;else{const t=_n[_n.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,wf,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")_n.push(e),Array.isArray(e)?tr="beforeArrayValue":tr="beforePropertyName";else{const t=_n[_n.length-1];t==null?tr="end":Array.isArray(t)?tr="afterArrayValue":tr="afterPropertyValue"}}function hu(){_n.pop();const e=_n[_n.length-1];e==null?tr="end":Array.isArray(e)?tr="afterArrayValue":tr="afterPropertyValue"}function Le(e){return Ju(e===void 0?`JSON5: invalid end of input at ${$o}:${sn}`:`JSON5: invalid character '${jp(e)}' at ${$o}:${sn}`)}function Ro(){return Ju(`JSON5: invalid end of input at ${$o}:${sn}`)}function yh(){return sn-=5,Ju(`JSON5: invalid identifier character at ${$o}:${sn}`)}function l2(e){console.warn(`JSON5: '${jp(e)}' in strings is not valid ECMAScript; consider escaping`)}function jp(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Ju(e){const t=new SyntaxError(e);return t.lineNumber=$o,t.columnNumber=sn,t}var c2=function(t,r,n){const o=[];let i="",s,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const $ of r){let D;typeof $=="string"?D=$:(typeof $=="number"||$ instanceof String||$ instanceof Number)&&(D=String($)),D!==void 0&&s.indexOf(D)<0&&s.push(D)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c($,D){let k=D[$];switch(k!=null&&(typeof k.toJSON5=="function"?k=k.toJSON5($):typeof k.toJSON=="function"&&(k=k.toJSON($))),a&&(k=a.call(D,$,k)),k instanceof Number?k=Number(k):k instanceof String?k=String(k):k instanceof Boolean&&(k=k.valueOf()),k){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof k=="string")return d(k);if(typeof k=="number")return String(k);if(typeof k=="object")return Array.isArray(k)?v(k):m(k)}function d($){const D={"'":.1,'"':.2},k={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let E="";for(let B=0;B<$.length;B++){const q=$[B];switch(q){case"'":case'"':D[q]++,E+=q;continue;case"\0":if(st.isDigit($[B+1])){E+="\\x00";continue}}if(k[q]){E+=k[q];continue}if(q<" "){let ne=q.charCodeAt(0).toString(16);E+="\\x"+("00"+ne).substring(ne.length);continue}E+=q}const N=l||Object.keys(D).reduce((B,q)=>D[B]<D[q]?B:q);return E=E.replace(new RegExp(N,"g"),k[N]),N+E+N}function m($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let D=i;i=i+u;let k=s||Object.keys($),E=[];for(const B of k){const q=c(B,$);if(q!==void 0){let ne=h(B)+":";u!==""&&(ne+=" "),ne+=q,E.push(ne)}}let N;if(E.length===0)N="{}";else{let B;if(u==="")B=E.join(","),N="{"+B+"}";else{let q=`,
`+i;B=E.join(q),N=`{
`+i+B+`,
`+D+"}"}}return o.pop(),i=D,N}function h($){if($.length===0)return d($);const D=String.fromCodePoint($.codePointAt(0));if(!st.isIdStartChar(D))return d($);for(let k=D.length;k<$.length;k++)if(!st.isIdContinueChar(String.fromCodePoint($.codePointAt(k))))return d($);return $}function v($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let D=i;i=i+u;let k=[];for(let N=0;N<$.length;N++){const B=c(String(N),$);k.push(B!==void 0?B:"null")}let E;if(k.length===0)E="[]";else if(u==="")E="["+k.join(",")+"]";else{let N=`,
`+i,B=k.join(N);E=`[
`+i+B+`,
`+D+"]"}return o.pop(),i=D,E}};const d2={parse:o2,stringify:c2};var f2=d2;const Up="__@@augment-vir-undefined-sentinel@@__",m2=new RegExp(`['"]${Up}['"]`);function b(e,t){if(typeof e=="string")return e;try{return f2.stringify(e,(n,o)=>o===void 0?Up:typeof o=="bigint"?Number(o):o,t||void 0).split(m2).join("undefined")}catch{return String(e)}}var h2=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var an;(function(e){e.Node="node",e.Web="web"})(an||(an={}));function g2(){return h2?an.Node:an.Web}const _p=g2();function $f(e){return _p===e}function Vp(e){return e[_p]()}function p2(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",o=n?Qw:Gw,i=[r?"":`
`,b(t&&typeof t=="object"&&!Array.isArray(t)?bh(t):t,4),`
`].join(""),s=[r?"":`
`,b(e&&typeof e=="object"&&!Array.isArray(e)?bh(e):e,4),`
`].join(""),a=b2(n,o(i,s)),u=$f(an.Node);return[[u?Wn.Green:""," +added (unexpected, added in actual)",u?Wn.Red:""," -missing (expected, missing from actual)",u?Wn.Reset:""].join(""),r?`

`:`
`,a].join("")}var Wn;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(Wn||(Wn={}));var Yu;(function(e){e.Added="+",e.Removed="-"})(Yu||(Yu={}));function b2(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(o=>vh(o,n)).join(`
`)).join(""):t.map(n=>vh(void 0,n)).join("")}function vh(e,t){if(e!=null&&!e)return"";const r=$f(an.Node),n=t.added?Yu.Added:t.removed?Yu.Removed:e==null?"":" ",o=t.added?Wn.Green:t.removed?Wn.Red:Wn.Reset;return[r?o:"",n,e??t.value,Wn.Reset].join("")}function Ve(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function y2(e){return Ve(e).filter(t=>isNaN(Number(t)))}function _r(e){return y2(e).map(r=>e[r])}const v2=[".",":",";",",","?","!"],w2=new RegExp(`[${v2.join("")}]+$`);function wh(e){return e.replace(w2,"")}function Tt(e){return e==null||e===""?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):b(e)}function hi(...e){const t=e.map(i=>Tt(i)).filter(i=>!!wh(i)),r=t[t.length-1]?.endsWith("."),n=t.map(i=>wh(Tt(i)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function ot(e){return e instanceof Error?e:new Error(Tt(e))}function Va(e,t){const r=ot(e),n=hi(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var F;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(F||(F={}));var _;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(_||(_={}));_.ClientError,_.ServerError;F.Continue+"",_.Information,F.SwitchingProtocols+"",_.Information,F.Processing+"",_.Information,F.EarlyHints+"",_.Information,F.Ok+"",_.Success,F.Created+"",_.Success,F.Accepted+"",_.Success,F.NonAuthoritativeInformation+"",_.Success,F.NoContent+"",_.Success,F.ResetContent+"",_.Success,F.PartialContent+"",_.Success,F.MultiStatus+"",_.Success,F.AlreadyReported+"",_.Success,F.ImUsed+"",_.Success,F.MultipleChoices+"",_.Redirect,F.MovedPermanently+"",_.Redirect,F.Found+"",_.Redirect,F.SeeOther+"",_.Redirect,F.NotModified+"",_.Redirect,F.UseProxy+"",_.Redirect,F.Unused+"",_.Redirect,F.TemporaryRedirect+"",_.Redirect,F.PermanentRedirect+"",_.Redirect,F.BadRequest+"",_.ClientError,F.Unauthorized+"",_.ClientError,F.PaymentRequired+"",_.ClientError,F.Forbidden+"",_.ClientError,F.NotFound+"",_.ClientError,F.MethodNotAllowed+"",_.ClientError,F.NotAcceptable+"",_.ClientError,F.ProxyAuthenticationRequired+"",_.ClientError,F.RequestTimeout+"",_.ClientError,F.Conflict+"",_.ClientError,F.Gone+"",_.ClientError,F.LengthRequired+"",_.ClientError,F.PreconditionFailed+"",_.ClientError,F.PayloadTooLarge+"",_.ClientError,F.UriTooLong+"",_.ClientError,F.UnsupportedMediaType+"",_.ClientError,F.RangeNotSatisfiable+"",_.ClientError,F.ExpectationFailed+"",_.ClientError,F.ImATeapot+"",_.ClientError,F.MisdirectedRequest+"",_.ClientError,F.UnprocessableContent+"",_.ClientError,F.Locked+"",_.ClientError,F.FailedDependency+"",_.ClientError,F.TooEarly+"",_.ClientError,F.UpgradeRequired+"",_.ClientError,F.PreconditionRequired+"",_.ClientError,F.TooManyRequests+"",_.ClientError,F.RequestHeaderFieldsTooLarge+"",_.ClientError,F.UnavailableForLegalReasons+"",_.ClientError,F.InternalServerError+"",_.ServerError,F.NotImplemented+"",_.ServerError,F.BadGateway+"",_.ServerError,F.ServiceUnavailable+"",_.ServerError,F.GatewayTimeout+"",_.ServerError,F.HttpVersionNotSupported+"",_.ServerError,F.VariantAlsoNegotiates+"",_.ServerError,F.InsufficientStorage+"",_.ServerError,F.LoopDetected+"",_.ServerError,F.NotExtended+"",_.ServerError,F.NetworkAuthenticationRequired+"",_.ServerError;const Lu={[_.Information]:[F.Continue,F.SwitchingProtocols,F.Processing,F.EarlyHints],[_.Success]:[F.Ok,F.Created,F.Accepted,F.NonAuthoritativeInformation,F.NoContent,F.ResetContent,F.PartialContent,F.MultiStatus,F.AlreadyReported,F.ImUsed],[_.Redirect]:[F.MultipleChoices,F.MovedPermanently,F.Found,F.SeeOther,F.NotModified,F.UseProxy,F.Unused,F.TemporaryRedirect,F.PermanentRedirect],[_.ClientError]:[F.BadRequest,F.Unauthorized,F.PaymentRequired,F.Forbidden,F.NotFound,F.MethodNotAllowed,F.NotAcceptable,F.ProxyAuthenticationRequired,F.RequestTimeout,F.Conflict,F.Gone,F.LengthRequired,F.PreconditionFailed,F.PayloadTooLarge,F.UriTooLong,F.UnsupportedMediaType,F.RangeNotSatisfiable,F.ExpectationFailed,F.ImATeapot,F.MisdirectedRequest,F.UnprocessableContent,F.Locked,F.FailedDependency,F.TooEarly,F.UpgradeRequired,F.PreconditionRequired,F.TooManyRequests,F.RequestHeaderFieldsTooLarge,F.UnavailableForLegalReasons],[_.ServerError]:[F.InternalServerError,F.NotImplemented,F.BadGateway,F.ServiceUnavailable,F.GatewayTimeout,F.HttpVersionNotSupported,F.VariantAlsoNegotiates,F.InsufficientStorage,F.LoopDetected,F.NotExtended,F.NetworkAuthenticationRequired]};function kf({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Xu{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(ot(n))}})}}class gi extends Error{}class $2 extends gi{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class k2 extends gi{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class D2 extends gi{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class _i extends gi{}class zp extends gi{constructor(t){super(`Invalid unit ${t}`)}}class zt extends gi{}class io extends gi{constructor(){super("Zone is an abstract class")}}const j="numeric",un="short",Ar="long",Qu={year:j,month:j,day:j},qp={year:j,month:un,day:j},x2={year:j,month:un,day:j,weekday:un},Wp={year:j,month:Ar,day:j},Kp={year:j,month:Ar,day:j,weekday:Ar},Gp={hour:j,minute:j},Zp={hour:j,minute:j,second:j},Hp={hour:j,minute:j,second:j,timeZoneName:un},Jp={hour:j,minute:j,second:j,timeZoneName:Ar},Yp={hour:j,minute:j,hourCycle:"h23"},Xp={hour:j,minute:j,second:j,hourCycle:"h23"},Qp={hour:j,minute:j,second:j,hourCycle:"h23",timeZoneName:un},eb={hour:j,minute:j,second:j,hourCycle:"h23",timeZoneName:Ar},tb={year:j,month:j,day:j,hour:j,minute:j},rb={year:j,month:j,day:j,hour:j,minute:j,second:j},nb={year:j,month:un,day:j,hour:j,minute:j},ob={year:j,month:un,day:j,hour:j,minute:j,second:j},A2={year:j,month:un,day:j,weekday:un,hour:j,minute:j},ib={year:j,month:Ar,day:j,hour:j,minute:j,timeZoneName:un},sb={year:j,month:Ar,day:j,hour:j,minute:j,second:j,timeZoneName:un},ab={year:j,month:Ar,day:j,weekday:Ar,hour:j,minute:j,timeZoneName:Ar},ub={year:j,month:Ar,day:j,weekday:Ar,hour:j,minute:j,second:j,timeZoneName:Ar};class za{get type(){throw new io}get name(){throw new io}get ianaName(){return this.name}get isUniversal(){throw new io}offsetName(t,r){throw new io}formatOffset(t,r){throw new io}offset(t){throw new io}equals(t){throw new io}get isValid(){throw new io}}let kc=null;class Sl extends za{static get instance(){return kc===null&&(kc=new Sl),kc}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return vb(t,r,n)}formatOffset(t,r){return la(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const xd=new Map;function E2(e){let t=xd.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),xd.set(e,t)),t}const C2={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function F2(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,s,a,u,l,c]=n;return[s,o,i,a,u,l,c]}function S2(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:s}=r[o],a=C2[i];i==="era"?n[a]=s:Y(a)||(n[a]=parseInt(s,10))}return n}const Dc=new Map;class Yn extends za{static create(t){let r=Dc.get(t);return r===void 0&&Dc.set(t,r=new Yn(t)),r}static resetCache(){Dc.clear(),xd.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Yn.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return vb(t,r,n,this.name)}formatOffset(t,r){return la(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=E2(this.name);let[o,i,s,a,u,l,c]=n.formatToParts?S2(n,r):F2(n,r);a==="BC"&&(o=-Math.abs(o)+1);const m=Ml({year:o,month:i,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let h=+r;const v=h%1e3;return h-=v>=0?v:1e3+v,(m-h)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let $h={};function T2(e,t={}){const r=JSON.stringify([e,t]);let n=$h[r];return n||(n=new Intl.ListFormat(e,t),$h[r]=n),n}const Ad=new Map;function Ed(e,t={}){const r=JSON.stringify([e,t]);let n=Ad.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),Ad.set(r,n)),n}const Cd=new Map;function M2(e,t={}){const r=JSON.stringify([e,t]);let n=Cd.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),Cd.set(r,n)),n}const Fd=new Map;function P2(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=Fd.get(o);return i===void 0&&(i=new Intl.RelativeTimeFormat(e,t),Fd.set(o,i)),i}let Xs=null;function N2(){return Xs||(Xs=new Intl.DateTimeFormat().resolvedOptions().locale,Xs)}const Sd=new Map;function lb(e){let t=Sd.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Sd.set(e,t)),t}const Td=new Map;function I2(e){let t=Td.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...cb,...t}),Td.set(e,t)}return t}function O2(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=Ed(e).resolvedOptions(),o=e}catch{const u=e.substring(0,r);n=Ed(u).resolvedOptions(),o=u}const{numberingSystem:i,calendar:s}=n;return[o,i,s]}}function B2(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function R2(e){const t=[];for(let r=1;r<=12;r++){const n=X.utc(2009,r,1);t.push(e(n))}return t}function L2(e){const t=[];for(let r=1;r<=7;r++){const n=X.utc(2016,11,13+r);t.push(e(n))}return t}function gu(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function j2(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||lb(e.locale).numberingSystem==="latn"}class U2{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=M2(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Cf(t,3);return ft(r,this.padTo)}}}class _2{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Yn.create(a).valid?(o=a,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=Ed(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class V2{constructor(t,r,n){this.opts={style:"long",...n},!r&&bb()&&(this.rtf=P2(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):c$(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const cb={firstDay:1,minimalDays:4,weekend:[6,7]};class Ae{static fromOpts(t){return Ae.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,i=!1){const s=t||He.defaultLocale,a=s||(i?"en-US":N2()),u=r||He.defaultNumberingSystem,l=n||He.defaultOutputCalendar,c=Pd(o)||He.defaultWeekSettings;return new Ae(a,u,l,c,s)}static resetCache(){Xs=null,Ad.clear(),Cd.clear(),Fd.clear(),Sd.clear(),Td.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return Ae.create(t,r,n,o)}constructor(t,r,n,o,i){const[s,a,u]=O2(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=o,this.intl=B2(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=j2(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Ae.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Pd(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return gu(this,t,kb,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const o=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";if(!this.monthsCache[i][t]){const s=n?a=>this.dtFormatter(a,o).format():a=>this.extract(a,o,"month");this.monthsCache[i][t]=R2(s)}return this.monthsCache[i][t]})}weekdays(t,r=!1){return gu(this,t,Ab,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=L2(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return gu(this,void 0,()=>Eb,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[X.utc(2016,11,13,9),X.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return gu(this,t,Cb,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[X.utc(-40,1,1),X.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),s=i.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new U2(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new _2(t,this.intl,r)}relFormatter(t={}){return new V2(this.intl,this.isEnglish(),t)}listFormatter(t={}){return T2(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||lb(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:yb()?I2(this.locale):cb}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let xc=null;class rr extends za{static get utcInstance(){return xc===null&&(xc=new rr(0)),xc}static instance(t){return t===0?rr.utcInstance:new rr(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new rr(Pl(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${la(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${la(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return la(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class z2 extends za{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function mo(e,t){if(Y(e)||e===null)return t;if(e instanceof za)return e;if(H2(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Sl.instance:r==="utc"||r==="gmt"?rr.utcInstance:rr.parseSpecifier(r)||Yn.create(e)}else return bo(e)?rr.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new z2(e)}const Df={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},kh={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},q2=Df.hanidec.replace(/[\[|\]]/g,"").split("");function W2(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Df.hanidec)!==-1)t+=q2.indexOf(e[r]);else for(const o in kh){const[i,s]=kh[o];n>=i&&n<=s&&(t+=n-i)}}return parseInt(t,10)}else return t}const Md=new Map;function K2(){Md.clear()}function en({numberingSystem:e},t=""){const r=e||"latn";let n=Md.get(r);n===void 0&&(n=new Map,Md.set(r,n));let o=n.get(t);return o===void 0&&(o=new RegExp(`${Df[r]}${t}`),n.set(t,o)),o}let Dh=()=>Date.now(),xh="system",Ah=null,Eh=null,Ch=null,Fh=60,Sh,Th=null;class He{static get now(){return Dh}static set now(t){Dh=t}static set defaultZone(t){xh=t}static get defaultZone(){return mo(xh,Sl.instance)}static get defaultLocale(){return Ah}static set defaultLocale(t){Ah=t}static get defaultNumberingSystem(){return Eh}static set defaultNumberingSystem(t){Eh=t}static get defaultOutputCalendar(){return Ch}static set defaultOutputCalendar(t){Ch=t}static get defaultWeekSettings(){return Th}static set defaultWeekSettings(t){Th=Pd(t)}static get twoDigitCutoffYear(){return Fh}static set twoDigitCutoffYear(t){Fh=t%100}static get throwOnInvalid(){return Sh}static set throwOnInvalid(t){Sh=t}static resetCaches(){Ae.resetCache(),Yn.resetCache(),X.resetCache(),K2()}}class nn{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const db=[0,31,59,90,120,151,181,212,243,273,304,334],fb=[0,31,60,91,121,152,182,213,244,274,305,335];function qr(e,t){return new nn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function xf(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function mb(e,t,r){return r+(qa(e)?fb:db)[t-1]}function hb(e,t){const r=qa(e)?fb:db,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function Af(e,t){return(e-t+7)%7+1}function el(e,t=4,r=1){const{year:n,month:o,day:i}=e,s=mb(n,o,i),a=Af(xf(n,o,i),r);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=n-1,u=ka(l,t,r)):u>ka(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...Nl(e)}}function Mh(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:i}=e,s=Af(xf(n,1,t),r),a=Ki(n);let u=o*7+i-s-7+t,l;u<1?(l=n-1,u+=Ki(l)):u>a?(l=n+1,u-=Ki(n)):l=n;const{month:c,day:d}=hb(l,u);return{year:l,month:c,day:d,...Nl(e)}}function Ac(e){const{year:t,month:r,day:n}=e,o=mb(t,r,n);return{year:t,ordinal:o,...Nl(e)}}function Ph(e){const{year:t,ordinal:r}=e,{month:n,day:o}=hb(t,r);return{year:t,month:n,day:o,...Nl(e)}}function Nh(e,t){if(!Y(e.localWeekday)||!Y(e.localWeekNumber)||!Y(e.localWeekYear)){if(!Y(e.weekday)||!Y(e.weekNumber)||!Y(e.weekYear))throw new _i("Cannot mix locale-based week fields with ISO-based week fields");return Y(e.localWeekday)||(e.weekday=e.localWeekday),Y(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),Y(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function G2(e,t=4,r=1){const n=Tl(e.weekYear),o=Wr(e.weekNumber,1,ka(e.weekYear,t,r)),i=Wr(e.weekday,1,7);return n?o?i?!1:qr("weekday",e.weekday):qr("week",e.weekNumber):qr("weekYear",e.weekYear)}function Z2(e){const t=Tl(e.year),r=Wr(e.ordinal,1,Ki(e.year));return t?r?!1:qr("ordinal",e.ordinal):qr("year",e.year)}function gb(e){const t=Tl(e.year),r=Wr(e.month,1,12),n=Wr(e.day,1,tl(e.year,e.month));return t?r?n?!1:qr("day",e.day):qr("month",e.month):qr("year",e.year)}function pb(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=Wr(t,0,23)||t===24&&r===0&&n===0&&o===0,s=Wr(r,0,59),a=Wr(n,0,59),u=Wr(o,0,999);return i?s?a?u?!1:qr("millisecond",o):qr("second",n):qr("minute",r):qr("hour",t)}function Y(e){return typeof e>"u"}function bo(e){return typeof e=="number"}function Tl(e){return typeof e=="number"&&e%1===0}function H2(e){return typeof e=="string"}function J2(e){return Object.prototype.toString.call(e)==="[object Date]"}function bb(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function yb(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Y2(e){return Array.isArray(e)?e:[e]}function Ih(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function X2(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function ts(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Pd(e){if(e==null)return null;if(typeof e!="object")throw new zt("Week settings must be an object");if(!Wr(e.firstDay,1,7)||!Wr(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Wr(t,1,7)))throw new zt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Wr(e,t,r){return Tl(e)&&e>=t&&e<=r}function Q2(e,t){return e-t*Math.floor(e/t)}function ft(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function lo(e){if(!(Y(e)||e===null||e===""))return parseInt(e,10)}function Lo(e){if(!(Y(e)||e===null||e===""))return parseFloat(e)}function Ef(e){if(!(Y(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Cf(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function qa(e){return e%4===0&&(e%100!==0||e%400===0)}function Ki(e){return qa(e)?366:365}function tl(e,t){const r=Q2(t-1,12)+1,n=e+(t-r)/12;return r===2?qa(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Ml(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Oh(e,t,r){return-Af(xf(e,1,t),r)+t-1}function ka(e,t=4,r=1){const n=Oh(e,t,r),o=Oh(e+1,t,r);return(Ki(e)-n+o)/7}function Nd(e){return e>99?e:e>He.twoDigitCutoffYear?1900+e:2e3+e}function vb(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const s={timeZoneName:t,...i},a=new Intl.DateTimeFormat(r,s).formatToParts(o).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Pl(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function wb(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new zt(`Invalid unit value ${e}`);return t}function rl(e,t){const r={};for(const n in e)if(ts(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=wb(o)}return r}function la(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${ft(r,2)}:${ft(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${ft(r,2)}${ft(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Nl(e){return X2(e,["hour","minute","second","millisecond"])}const e$=["January","February","March","April","May","June","July","August","September","October","November","December"],$b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t$=["J","F","M","A","M","J","J","A","S","O","N","D"];function kb(e){switch(e){case"narrow":return[...t$];case"short":return[...$b];case"long":return[...e$];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Db=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],xb=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],r$=["M","T","W","T","F","S","S"];function Ab(e){switch(e){case"narrow":return[...r$];case"short":return[...xb];case"long":return[...Db];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Eb=["AM","PM"],n$=["Before Christ","Anno Domini"],o$=["BC","AD"],i$=["B","A"];function Cb(e){switch(e){case"narrow":return[...i$];case"short":return[...o$];case"long":return[...n$];default:return null}}function s$(e){return Eb[e.hour<12?0:1]}function a$(e,t){return Ab(t)[e.weekday-1]}function u$(e,t){return kb(t)[e.month-1]}function l$(e,t){return Cb(t)[e.year<0?0:1]}function c$(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${o[e][0]}`;case-1:return d?"yesterday":`last ${o[e][0]}`;case 0:return d?"today":`this ${o[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=o[e],c=n?u?l[1]:l[2]||l[1]:u?o[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function Bh(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const d$={D:Qu,DD:qp,DDD:Wp,DDDD:Kp,t:Gp,tt:Zp,ttt:Hp,tttt:Jp,T:Yp,TT:Xp,TTT:Qp,TTTT:eb,f:tb,ff:nb,fff:ib,ffff:ab,F:rb,FF:ob,FFF:sb,FFFF:ub};class Wt{static create(t,r={}){return new Wt(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||o)&&i.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",o=!o):o||a===r?n+=a:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return d$[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return ft(t,r);const o={...this.opts};return r>0&&(o.padTo=r),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(h,v)=>this.loc.extract(t,h,v),s=h=>t.isOffsetFixed&&t.offset===0&&h.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,h.format):"",a=()=>n?s$(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(h,v)=>n?u$(t,h):i(v?{month:h}:{month:h,day:"numeric"},"month"),l=(h,v)=>n?a$(t,h):i(v?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),c=h=>{const v=Wt.macroTokenToFormatOpts(h);return v?this.formatWithSystemDefault(t,v):h},d=h=>n?l$(t,h):i({era:h},"era"),m=h=>{switch(h){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(h)}};return Bh(Wt.parseFormat(r),m)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},i=(c,d)=>m=>{const h=o(m);if(h){const v=d.isNegativeDuration&&h!==d.largestUnit?n:1;let $;return this.opts.signMode==="negativeLargestOnly"&&h!==d.largestUnit?$="never":this.opts.signMode==="all"?$="always":$="auto",this.num(c.get(h)*v,m.length,$)}else return m},s=Wt.parseFormat(r),a=s.reduce((c,{literal:d,val:m})=>d?c:c.concat(m),[]),u=t.shiftTo(...a.map(o).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return Bh(s,i(u,l))}}const Fb=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function $s(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function ks(...e){return t=>e.reduce(([r,n,o],i)=>{const[s,a,u]=i(t,o);return[{...r,...s},a||n,u]},[{},null,1]).slice(0,2)}function Ds(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function Sb(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=lo(t[r+o]);return[n,null,r+o]}}const Tb=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,f$=`(?:${Tb.source}?(?:\\[(${Fb.source})\\])?)?`,Ff=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Mb=RegExp(`${Ff.source}${f$}`),Sf=RegExp(`(?:[Tt]${Mb.source})?`),m$=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,h$=/(\d{4})-?W(\d\d)(?:-?(\d))?/,g$=/(\d{4})-?(\d{3})/,p$=Sb("weekYear","weekNumber","weekDay"),b$=Sb("year","ordinal"),y$=/(\d{4})-(\d\d)-(\d\d)/,Pb=RegExp(`${Ff.source} ?(?:${Tb.source}|(${Fb.source}))?`),v$=RegExp(`(?: ${Pb.source})?`);function Gi(e,t,r){const n=e[t];return Y(n)?r:lo(n)}function w$(e,t){return[{year:Gi(e,t),month:Gi(e,t+1,1),day:Gi(e,t+2,1)},null,t+3]}function xs(e,t){return[{hours:Gi(e,t,0),minutes:Gi(e,t+1,0),seconds:Gi(e,t+2,0),milliseconds:Ef(e[t+3])},null,t+4]}function Wa(e,t){const r=!e[t]&&!e[t+1],n=Pl(e[t+1],e[t+2]),o=r?null:rr.instance(n);return[{},o,t+3]}function Ka(e,t){const r=e[t]?Yn.create(e[t]):null;return[{},r,t+1]}const $$=RegExp(`^T?${Ff.source}$`),k$=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function D$(e){const[t,r,n,o,i,s,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",m=(h,v=!1)=>h!==void 0&&(v||h&&c)?-h:h;return[{years:m(Lo(r)),months:m(Lo(n)),weeks:m(Lo(o)),days:m(Lo(i)),hours:m(Lo(s)),minutes:m(Lo(a)),seconds:m(Lo(u),u==="-0"),milliseconds:m(Ef(l),d)}]}const x$={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Tf(e,t,r,n,o,i,s){const a={year:t.length===2?Nd(lo(t)):lo(t),month:$b.indexOf(r)+1,day:lo(n),hour:lo(o),minute:lo(i)};return s&&(a.second=lo(s)),e&&(a.weekday=e.length>3?Db.indexOf(e)+1:xb.indexOf(e)+1),a}const A$=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function E$(e){const[,t,r,n,o,i,s,a,u,l,c,d]=e,m=Tf(t,o,n,r,i,s,a);let h;return u?h=x$[u]:l?h=0:h=Pl(c,d),[m,new rr(h)]}function C$(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const F$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,S$=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,T$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Rh(e){const[,t,r,n,o,i,s,a]=e;return[Tf(t,o,n,r,i,s,a),rr.utcInstance]}function M$(e){const[,t,r,n,o,i,s,a]=e;return[Tf(t,a,r,n,o,i,s),rr.utcInstance]}const P$=$s(m$,Sf),N$=$s(h$,Sf),I$=$s(g$,Sf),O$=$s(Mb),Nb=ks(w$,xs,Wa,Ka),B$=ks(p$,xs,Wa,Ka),R$=ks(b$,xs,Wa,Ka),L$=ks(xs,Wa,Ka);function j$(e){return Ds(e,[P$,Nb],[N$,B$],[I$,R$],[O$,L$])}function U$(e){return Ds(C$(e),[A$,E$])}function _$(e){return Ds(e,[F$,Rh],[S$,Rh],[T$,M$])}function V$(e){return Ds(e,[k$,D$])}const z$=ks(xs);function q$(e){return Ds(e,[$$,z$])}const W$=$s(y$,v$),K$=$s(Pb),G$=ks(xs,Wa,Ka);function Z$(e){return Ds(e,[W$,Nb],[K$,G$])}const Lh="Invalid Duration",Ib={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},H$={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...Ib},Lr=146097/400,Mi=146097/4800,J$={years:{quarters:4,months:12,weeks:Lr/7,days:Lr,hours:Lr*24,minutes:Lr*24*60,seconds:Lr*24*60*60,milliseconds:Lr*24*60*60*1e3},quarters:{months:3,weeks:Lr/28,days:Lr/4,hours:Lr*24/4,minutes:Lr*24*60/4,seconds:Lr*24*60*60/4,milliseconds:Lr*24*60*60*1e3/4},months:{weeks:Mi/7,days:Mi,hours:Mi*24,minutes:Mi*24*60,seconds:Mi*24*60*60,milliseconds:Mi*24*60*60*1e3},...Ib},Zo=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Y$=Zo.slice(0).reverse();function In(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new me(n)}function Ob(e,t){let r=t.milliseconds??0;for(const n of Y$.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function jh(e,t){const r=Ob(e,t)<0?-1:1;Zo.reduceRight((n,o)=>{if(Y(t[o]))return n;if(n){const i=t[n]*r,s=e[o][n],a=Math.floor(i/s);t[o]+=a*r,t[n]-=a*s*r}return o},null),Zo.reduce((n,o)=>{if(Y(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function Uh(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class me{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?J$:H$;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Ae.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return me.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new zt(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new me({values:rl(t,me.normalizeUnit),loc:Ae.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(bo(t))return me.fromMillis(t);if(me.isDuration(t))return t;if(typeof t=="object")return me.fromObject(t);throw new zt(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=V$(t);return n?me.fromObject(n,r):me.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=q$(t);return n?me.fromObject(n,r):me.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new zt("need to specify a reason the Duration is invalid");const n=t instanceof nn?t:new nn(t,r);if(He.throwOnInvalid)throw new D2(n);return new me({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new zp(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?Wt.create(this.loc,n).formatDurationFromString(this,t):Lh}toHuman(t={}){if(!this.isValid)return Lh;const r=t.showZeros!==!1,n=Zo.map(o=>{const i=this.values[o];return Y(i)||i===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:o.slice(0,-1)}).format(i)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Cf(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},X.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Ob(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=me.fromDurationLike(t),n={};for(const o of Zo)(ts(r.values,o)||ts(this.values,o))&&(n[o]=r.get(o)+this.get(o));return In(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=me.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=wb(t(this.values[n],n));return In(this,{values:r},!0)}get(t){return this[me.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...rl(t,me.normalizeUnit)};return In(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return In(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return jh(this.matrix,t),In(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Uh(this.normalize().shiftToAll().toObject());return In(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>me.normalizeUnit(s));const r={},n={},o=this.toObject();let i;for(const s of Zo)if(t.indexOf(s)>=0){i=s;let a=0;for(const l in n)a+=this.matrix[l][s]*n[l],n[l]=0;bo(o[s])&&(a+=o[s]);const u=Math.trunc(a);r[s]=u,n[s]=(a*1e3-u*1e3)/1e3}else bo(o[s])&&(n[s]=o[s]);for(const s in n)n[s]!==0&&(r[i]+=s===i?n[s]:n[s]/this.matrix[i][s]);return jh(this.matrix,r),In(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return In(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=Uh(this.values);return In(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of Zo)if(!r(this.values[n],t.values[n]))return!1;return!0}}const Pi="Invalid Interval";function X$(e,t){return!e||!e.isValid?tt.invalid("missing or invalid start"):!t||!t.isValid?tt.invalid("missing or invalid end"):t<e?tt.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class tt{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new zt("need to specify a reason the Interval is invalid");const n=t instanceof nn?t:new nn(t,r);if(He.throwOnInvalid)throw new k2(n);return new tt({invalid:n})}static fromDateTimes(t,r){const n=Vs(t),o=Vs(r),i=X$(n,o);return i??new tt({start:n,end:o})}static after(t,r){const n=me.fromDurationLike(r),o=Vs(t);return tt.fromDateTimes(o,o.plus(n))}static before(t,r){const n=me.fromDurationLike(r),o=Vs(t);return tt.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,s;try{i=X.fromISO(n,r),s=i.isValid}catch{s=!1}let a,u;try{a=X.fromISO(o,r),u=a.isValid}catch{u=!1}if(s&&u)return tt.fromDateTimes(i,a);if(s){const l=me.fromISO(o,r);if(l.isValid)return tt.after(i,l)}else if(u){const l=me.fromISO(n,r);if(l.isValid)return tt.before(a,l)}}return tt.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?tt.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Vs).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:o}=this,i=0;for(;o<this.e;){const s=r[i]||this.e,a=+s>+this.e?this.e:s;n.push(tt.fromDateTimes(o,a)),o=a,i+=1}return n}splitBy(t){const r=me.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*o));i=+a>+this.e?this.e:a,s.push(tt.fromDateTimes(n,i)),n=i,o+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:tt.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return tt.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],s)=>i?i.overlaps(s)||i.abutsStart(s)?[o,i.union(s)]:[o.concat([i]),s]:[o,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...i),a=s.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&o.push(tt.fromDateTimes(r,u.time)),r=null);return tt.merge(o)}difference(...t){return tt.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Pi}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Qu,r={}){return this.isValid?Wt.create(this.s.loc.clone(r),t).formatInterval(this):Pi}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Pi}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Pi}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Pi}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:Pi}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):me.invalid(this.invalidReason)}mapEndpoints(t){return tt.fromDateTimes(t(this.s),t(this.e))}}class pu{static hasDST(t=He.defaultZone){const r=X.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Yn.isValidZone(t)}static normalizeZone(t){return mo(t,He.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Ae.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Ae.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Ae.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Ae.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Ae.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Ae.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Ae.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Ae.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Ae.create(r,null,"gregory").eras(t)}static features(){return{relative:bb(),localeWeek:yb()}}}function _h(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(me.fromMillis(n).as("days"))}function Q$(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=_h(u,l);return(c-c%7)/7}],["days",_h]],o={},i=e;let s,a;for(const[u,l]of n)r.indexOf(u)>=0&&(s=u,o[u]=l(e,t),a=i.plus(o),a>t?(o[u]--,e=i.plus(o),e>t&&(a=e,o[u]--,e=i.plus(o))):e=a);return[e,o,a,s]}function ek(e,t,r,n){let[o,i,s,a]=Q$(e,t,r);const u=t-o,l=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(s<t&&(s=o.plus({[a]:1})),s!==o&&(i[a]=(i[a]||0)+u/(s-o)));const c=me.fromObject(i,n);return l.length>0?me.fromMillis(u,n).shiftTo(...l).plus(c):c}const tk="missing Intl.DateTimeFormat.formatToParts support";function we(e,t=r=>r){return{regex:e,deser:([r])=>t(W2(r))}}const rk=" ",Bb=`[ ${rk}]`,Rb=new RegExp(Bb,"g");function nk(e){return e.replace(/\./g,"\\.?").replace(Rb,Bb)}function Vh(e){return e.replace(/\./g,"").replace(Rb," ").toLowerCase()}function tn(e,t){return e===null?null:{regex:RegExp(e.map(nk).join("|")),deser:([r])=>e.findIndex(n=>Vh(r)===Vh(n))+t}}function zh(e,t){return{regex:e,deser:([,r,n])=>Pl(r,n),groups:t}}function bu(e){return{regex:e,deser:([t])=>t}}function ok(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function ik(e,t){const r=en(t),n=en(t,"{2}"),o=en(t,"{3}"),i=en(t,"{4}"),s=en(t,"{6}"),a=en(t,"{1,2}"),u=en(t,"{1,3}"),l=en(t,"{1,6}"),c=en(t,"{1,9}"),d=en(t,"{2,4}"),m=en(t,"{4,6}"),h=D=>({regex:RegExp(ok(D.val)),deser:([k])=>k,literal:!0}),$=(D=>{if(e.literal)return h(D);switch(D.val){case"G":return tn(t.eras("short"),0);case"GG":return tn(t.eras("long"),0);case"y":return we(l);case"yy":return we(d,Nd);case"yyyy":return we(i);case"yyyyy":return we(m);case"yyyyyy":return we(s);case"M":return we(a);case"MM":return we(n);case"MMM":return tn(t.months("short",!0),1);case"MMMM":return tn(t.months("long",!0),1);case"L":return we(a);case"LL":return we(n);case"LLL":return tn(t.months("short",!1),1);case"LLLL":return tn(t.months("long",!1),1);case"d":return we(a);case"dd":return we(n);case"o":return we(u);case"ooo":return we(o);case"HH":return we(n);case"H":return we(a);case"hh":return we(n);case"h":return we(a);case"mm":return we(n);case"m":return we(a);case"q":return we(a);case"qq":return we(n);case"s":return we(a);case"ss":return we(n);case"S":return we(u);case"SSS":return we(o);case"u":return bu(c);case"uu":return bu(a);case"uuu":return we(r);case"a":return tn(t.meridiems(),0);case"kkkk":return we(i);case"kk":return we(d,Nd);case"W":return we(a);case"WW":return we(n);case"E":case"c":return we(r);case"EEE":return tn(t.weekdays("short",!1),1);case"EEEE":return tn(t.weekdays("long",!1),1);case"ccc":return tn(t.weekdays("short",!0),1);case"cccc":return tn(t.weekdays("long",!0),1);case"Z":case"ZZ":return zh(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return zh(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return bu(/[a-z_+-/]{1,256}?/i);case" ":return bu(/[^\S\n\r]/);default:return h(D)}})(e)||{invalidReason:tk};return $.token=e,$}const sk={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function ak(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const u=/^\s+$/.test(o);return{literal:!u,val:u?" ":o}}const i=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=sk[s];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function uk(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function lk(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const s in r)if(ts(r,s)){const a=r[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(o[a.token.val[0]]=a.deser(n.slice(i,i+u))),i+=u}return[n,o]}else return[n,{}]}function ck(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return Y(e.z)||(r=Yn.create(e.z)),Y(e.Z)||(r||(r=new rr(e.Z)),n=e.Z),Y(e.q)||(e.M=(e.q-1)*3+1),Y(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),Y(e.u)||(e.S=Ef(e.u)),[Object.keys(e).reduce((i,s)=>{const a=t(s);return a&&(i[a]=e[s]),i},{}),r,n]}let Ec=null;function dk(){return Ec||(Ec=X.fromMillis(1555555555555)),Ec}function fk(e,t){if(e.literal)return e;const r=Wt.macroTokenToFormatOpts(e.val),n=_b(r,t);return n==null||n.includes(void 0)?e:n}function Lb(e,t){return Array.prototype.concat(...e.map(r=>fk(r,t)))}class jb{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Lb(Wt.parseFormat(r),t),this.units=this.tokens.map(n=>ik(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=uk(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(t){if(this.isValid){const[r,n]=lk(t,this.regex,this.handlers),[o,i,s]=n?ck(n):[null,null,void 0];if(ts(n,"a")&&ts(n,"H"))throw new _i("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:o,zone:i,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Ub(e,t,r){return new jb(e,r).explainFromTokens(t)}function mk(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:s}=Ub(e,t,r);return[n,o,i,s]}function _b(e,t){if(!e)return null;const n=Wt.create(t,e).dtFormatter(dk()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(s=>ak(s,e,i))}const Cc="Invalid DateTime",qh=864e13;function Qs(e){return new nn("unsupported zone",`the zone "${e.name}" is not supported`)}function Fc(e){return e.weekData===null&&(e.weekData=el(e.c)),e.weekData}function Sc(e){return e.localWeekData===null&&(e.localWeekData=el(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function jo(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new X({...r,...t,old:r})}function Vb(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function yu(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function ju(e,t,r){return Vb(Ml(e),t,r)}function Wh(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,tl(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=me.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Ml(i);let[u,l]=Vb(a,r,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function Ni(e,t,r,n,o,i){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=X.fromObject(e,{...r,zone:u,specificOffset:i});return s?l:l.setZone(a)}else return X.invalid(new nn("unparsable",`the input "${o}" can't be parsed as ${n}`))}function vu(e,t,r=!0){return e.isValid?Wt.create(Ae.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Tc(e,t,r){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=ft(e.c.year,n?6:4),r==="year")return o;if(t){if(o+="-",o+=ft(e.c.month),r==="month")return o;o+="-"}else if(o+=ft(e.c.month),r==="month")return o;return o+=ft(e.c.day),o}function Kh(e,t,r,n,o,i,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=ft(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=ft(e.c.minute),s==="minute")break;a&&(u+=":",u+=ft(e.c.second))}else{if(u+=ft(e.c.minute),s==="minute")break;a&&(u+=ft(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(u+=".",u+=ft(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!i?u+="Z":e.o<0?(u+="-",u+=ft(Math.trunc(-e.o/60)),u+=":",u+=ft(Math.trunc(-e.o%60))):(u+="+",u+=ft(Math.trunc(e.o/60)),u+=":",u+=ft(Math.trunc(e.o%60)))),i&&(u+="["+e.zone.ianaName+"]"),u}const zb={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},hk={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},gk={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Uu=["year","month","day","hour","minute","second","millisecond"],pk=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],bk=["year","ordinal","hour","minute","second","millisecond"];function _u(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new zp(e);return t}function Gh(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return _u(e)}}function yk(e){if(ea===void 0&&(ea=He.now()),e.type!=="iana")return e.offset(ea);const t=e.name;let r=Id.get(t);return r===void 0&&(r=e.offset(ea),Id.set(t,r)),r}function Zh(e,t){const r=mo(t.zone,He.defaultZone);if(!r.isValid)return X.invalid(Qs(r));const n=Ae.fromObject(t);let o,i;if(Y(e.year))o=He.now();else{for(const u of Uu)Y(e[u])&&(e[u]=zb[u]);const s=gb(e)||pb(e);if(s)return X.invalid(s);const a=yk(r);[o,i]=ju(e,a,r)}return new X({ts:o,zone:r,loc:n,o:i})}function Hh(e,t,r){const n=Y(r.round)?!0:r.round,o=Y(r.rounding)?"trunc":r.rounding,i=(a,u)=>(a=Cf(a,n||r.calendary?0:2,r.calendary?"round":o),t.loc.clone(r).relFormatter(r).format(a,u)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return i(s(r.unit),r.unit);for(const a of r.units){const u=s(a);if(Math.abs(u)>=1)return i(u,a)}return i(e>t?-0:0,r.units[r.units.length-1])}function Jh(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let ea;const Id=new Map;class X{constructor(t){const r=t.zone||He.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new nn("invalid input"):null)||(r.isValid?null:Qs(r));this.ts=Y(t.ts)?He.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const a=bo(t.o)&&!t.old?t.o:r.offset(this.ts);o=yu(this.ts,a),n=Number.isNaN(o.year)?new nn("invalid input"):null,o=n?null:o,i=n?null:a}this._zone=r,this.loc=t.loc||Ae.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new X({})}static local(){const[t,r]=Jh(arguments),[n,o,i,s,a,u,l]=r;return Zh({year:n,month:o,day:i,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=Jh(arguments),[n,o,i,s,a,u,l]=r;return t.zone=rr.utcInstance,Zh({year:n,month:o,day:i,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=J2(t)?t.valueOf():NaN;if(Number.isNaN(n))return X.invalid("invalid input");const o=mo(r.zone,He.defaultZone);return o.isValid?new X({ts:n,zone:o,loc:Ae.fromObject(r)}):X.invalid(Qs(o))}static fromMillis(t,r={}){if(bo(t))return t<-qh||t>qh?X.invalid("Timestamp out of range"):new X({ts:t,zone:mo(r.zone,He.defaultZone),loc:Ae.fromObject(r)});throw new zt(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(bo(t))return new X({ts:t*1e3,zone:mo(r.zone,He.defaultZone),loc:Ae.fromObject(r)});throw new zt("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=mo(r.zone,He.defaultZone);if(!n.isValid)return X.invalid(Qs(n));const o=Ae.fromObject(r),i=rl(t,Gh),{minDaysInFirstWeek:s,startOfWeek:a}=Nh(i,o),u=He.now(),l=Y(r.specificOffset)?n.offset(u):r.specificOffset,c=!Y(i.ordinal),d=!Y(i.year),m=!Y(i.month)||!Y(i.day),h=d||m,v=i.weekYear||i.weekNumber;if((h||c)&&v)throw new _i("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&c)throw new _i("Can't mix ordinal dates with month/day");const $=v||i.weekday&&!h;let D,k,E=yu(u,l);$?(D=pk,k=hk,E=el(E,s,a)):c?(D=bk,k=gk,E=Ac(E)):(D=Uu,k=zb);let N=!1;for(const At of D){const Nt=i[At];Y(Nt)?N?i[At]=k[At]:i[At]=E[At]:N=!0}const B=$?G2(i,s,a):c?Z2(i):gb(i),q=B||pb(i);if(q)return X.invalid(q);const ne=$?Mh(i,s,a):c?Ph(i):i,[xe,pe]=ju(ne,l,n),je=new X({ts:xe,zone:n,o:pe,loc:o});return i.weekday&&h&&t.weekday!==je.weekday?X.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${je.toISO()}`):je.isValid?je:X.invalid(je.invalid)}static fromISO(t,r={}){const[n,o]=j$(t);return Ni(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=U$(t);return Ni(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=_$(t);return Ni(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(Y(t)||Y(r))throw new zt("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,s=Ae.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[a,u,l,c]=mk(s,t,r);return c?X.invalid(c):Ni(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return X.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=Z$(t);return Ni(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new zt("need to specify a reason the DateTime is invalid");const n=t instanceof nn?t:new nn(t,r);if(He.throwOnInvalid)throw new $2(n);return new X({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=_b(t,Ae.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return Lb(Wt.parseFormat(t),Ae.fromObject(r)).map(o=>o.val).join("")}static resetCache(){ea=void 0,Id.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Fc(this).weekYear:NaN}get weekNumber(){return this.isValid?Fc(this).weekNumber:NaN}get weekday(){return this.isValid?Fc(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Sc(this).weekday:NaN}get localWeekNumber(){return this.isValid?Sc(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Sc(this).weekYear:NaN}get ordinal(){return this.isValid?Ac(this.c).ordinal:NaN}get monthShort(){return this.isValid?pu.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?pu.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?pu.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?pu.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Ml(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),s=this.zone.offset(n-o*r),a=this.zone.offset(n-i*r);if(s===a)return[this];const u=n-s*r,l=n-a*r,c=yu(u,s),d=yu(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[jo(this,{ts:u}),jo(this,{ts:l})]:[this]}get isInLeapYear(){return qa(this.year)}get daysInMonth(){return tl(this.year,this.month)}get daysInYear(){return this.isValid?Ki(this.year):NaN}get weeksInWeekYear(){return this.isValid?ka(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?ka(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=Wt.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(rr.instance(t),r)}toLocal(){return this.setZone(He.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=mo(t,He.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),s=this.toObject();[o]=ju(s,i,t)}return jo(this,{ts:o,zone:t})}else return X.invalid(Qs(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return jo(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=rl(t,Gh),{minDaysInFirstWeek:n,startOfWeek:o}=Nh(r,this.loc),i=!Y(r.weekYear)||!Y(r.weekNumber)||!Y(r.weekday),s=!Y(r.ordinal),a=!Y(r.year),u=!Y(r.month)||!Y(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||s)&&c)throw new _i("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new _i("Can't mix ordinal dates with month/day");let d;i?d=Mh({...el(this.c,n,o),...r},n,o):Y(r.ordinal)?(d={...this.toObject(),...r},Y(r.day)&&(d.day=Math.min(tl(d.year,d.month),d.day))):d=Ph({...Ac(this.c),...r});const[m,h]=ju(d,this.o,this.zone);return jo(this,{ts:m,o:h})}plus(t){if(!this.isValid)return this;const r=me.fromDurationLike(t);return jo(this,Wh(this,r))}minus(t){if(!this.isValid)return this;const r=me.fromDurationLike(t).negate();return jo(this,Wh(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=me.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:s}=this;s<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?Wt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Cc}toLocaleString(t=Qu,r={}){return this.isValid?Wt.create(this.loc.clone(r),t).formatDateTime(this):Cc}toLocaleParts(t={}){return this.isValid?Wt.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=_u(s);const a=t==="extended";let u=Tc(this,a,s);return Uu.indexOf(s)>=3&&(u+="T"),u+=Kh(this,a,r,n,o,i,s),u}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?Tc(this,t==="extended",_u(r)):null}toISOWeekDate(){return vu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=_u(a),(o&&Uu.indexOf(a)>=3?"T":"")+Kh(this,s==="extended",r,t,n,i,a)):null}toRFC2822(){return vu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return vu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Tc(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),vu(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Cc}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return me.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=Y2(r).map(me.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=ek(a,u,i,o);return s?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(X.now(),t,r)}until(t){return this.isValid?tt.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=o&&o<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||X.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),Hh(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?Hh(t.base||X.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(X.isDateTime))throw new zt("min requires all arguments be DateTimes");return Ih(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(X.isDateTime))throw new zt("max requires all arguments be DateTimes");return Ih(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,s=Ae.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return Ub(s,t,r)}static fromStringExplain(t,r,n={}){return X.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:o=null}=r,i=Ae.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new jb(i,t)}static fromFormatParser(t,r,n={}){if(Y(t)||Y(r))throw new zt("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:i=null}=n,s=Ae.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});if(!s.equals(r.locale))throw new zt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?X.invalid(c):Ni(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return Qu}static get DATE_MED(){return qp}static get DATE_MED_WITH_WEEKDAY(){return x2}static get DATE_FULL(){return Wp}static get DATE_HUGE(){return Kp}static get TIME_SIMPLE(){return Gp}static get TIME_WITH_SECONDS(){return Zp}static get TIME_WITH_SHORT_OFFSET(){return Hp}static get TIME_WITH_LONG_OFFSET(){return Jp}static get TIME_24_SIMPLE(){return Yp}static get TIME_24_WITH_SECONDS(){return Xp}static get TIME_24_WITH_SHORT_OFFSET(){return Qp}static get TIME_24_WITH_LONG_OFFSET(){return eb}static get DATETIME_SHORT(){return tb}static get DATETIME_SHORT_WITH_SECONDS(){return rb}static get DATETIME_MED(){return nb}static get DATETIME_MED_WITH_SECONDS(){return ob}static get DATETIME_MED_WITH_WEEKDAY(){return A2}static get DATETIME_FULL(){return ib}static get DATETIME_FULL_WITH_SECONDS(){return sb}static get DATETIME_HUGE(){return ab}static get DATETIME_HUGE_WITH_SECONDS(){return ub}}function Vs(e){if(X.isDateTime(e))return e;if(e&&e.valueOf&&bo(e.valueOf()))return X.fromJSDate(e);if(e&&typeof e=="object")return X.fromObject(e);throw new zt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var Ee;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Ee||(Ee={}));const vk=[Ee.Milliseconds,Ee.Seconds,Ee.Minutes,Ee.Hours,Ee.Days,Ee.Weeks,Ee.Months,Ee.Years];Ee.Milliseconds+"",Ee.Seconds+"",Ee.Minutes+"",Ee.Hours+"",Ee.Days+"",Ee.Weeks+"",Ee.Months+"",Ee.Years+"";function wk(e){return vk.filter(t=>e[t])}function Od(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function $k(e){return Od(Math.max(e-.4,0),{decimalCount:0})}function Yh(e){return e===0?0:Math.sign(e)}function rs(e,t,r={}){const n={},o={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},i=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=wk(t).reverse();if(i||s)return a.forEach(c=>{n[c]=i?1/0:-1/0}),n;let u=me.fromObject(e).as(Ee.Milliseconds);const l=Yh(u);return a.forEach((c,d)=>{const m=d===a.length-1;if(c===Ee.Milliseconds)n.milliseconds=Od(u,o);else{const h=me.fromObject({milliseconds:u}).as(c),v=Math.sign(h),$=Math.abs(h),D=m?Od($,o):Math.floor(o.decimalCount==null?$:$k($)),k=D===0?0:D*v;n[c]=k,u-=me.fromObject({[c]:k}).as(Ee.Milliseconds),l!==Yh(u)&&(u=0)}}),n}Intl.DateTimeFormat().resolvedOptions().locale;var Z;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Z||(Z={}));Z.Year,Z.Hour,Z.Minute,Z.Second,Z.Millisecond;Z.Month,Z.Week,Z.Day;Z.Millisecond,Z.Second,Z.Minute,Z.Hour,Z.Day,Z.Week,Z.Month,Z.Year;const Xh={min:0,max:23},Qh={min:0,max:59},e0={min:0,max:59},t0={min:0,max:999};var qt;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(qt||(qt={}));qt.Sunday+"",qt.Monday+"",qt.Tuesday+"",qt.Wednesday+"",qt.Thursday+"",qt.Friday+"",qt.Saturday+"";qt.Sunday,qt.Monday,qt.Tuesday,qt.Wednesday,qt.Thursday,qt.Friday,qt.Saturday;var cr;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(cr||(cr={}));cr.January,cr.February,cr.March,cr.April,cr.May,cr.June,cr.July,cr.August,cr.September,cr.October,cr.November,cr.December;const r0={min:1,max:12},n0={min:1,max:31};function oi(e){const t=new Xu,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:rs(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function qb(...e){const t=e.join(""),r=Bp(Array.from(t));return Array.from(r).join("")}function Wb(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Kb(e,t){const r=qb([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Gb(e,r)}function Gb(e,t){const r=qb(t);return typeof e=="string"?new RegExp(Wb(e),r):new RegExp(e.source,r)}function Zb(e,{caseSensitive:t}){const n="".replaceAll("i","");return Gb(e,n)}function Mf(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function Hb(e,t){return t?typeof t=="string"?!!new RegExp(Wb(t),"i").exec(e):!!Kb(t,"i").exec(e):!1}class p extends Error{name="AssertionError";constructor(t,r){super(hi(r,t)||"Assertion failed.")}}const o0={interval:{milliseconds:100},timeout:{seconds:10}},Mc=Symbol("not set");async function kk(e,t,r){const{callback:n,extraAssertionArgs:o,failureMessage:i,options:s}=Dk(t),a=rs(s.timeout,{milliseconds:!0}).milliseconds,u=rs(s.interval,{milliseconds:!0});let l=Mc,c;async function d(){try{l=r?n():await n(),e(l,...o)}catch(h){l=Mc,c=ot(h)}}const m=Date.now();for(;l===Mc;)if(await d(),await oi(u),Date.now()-m>=a){const v=`${i?`${i}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Va(c,v)}return l}function I(e,t=!1){return((...r)=>kk(e,r,t))}function Dk(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Jb(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Jb(e){return{interval:e?.interval||o0.interval,timeout:e?.timeout||o0.timeout}}const zs={isFalse(e,t){if(e!==!1)throw new p(`'${b(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${b(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new p(`'${b(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new p(`'${b(e)}' is not truthy.`,t)}},Yb={assert:zs,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new p(`'${b(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${b(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new p(`'${b(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new p(`'${b(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:I(zs.isFalse),isFalsy:I(zs.isFalsy),isTrue:I(zs.isTrue),isTruthy:I(zs.isTruthy)}};function xk(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${b(e)} does not end with ${b(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${b(e)} does not end with ${b(t)}}`,r)}function Ak(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new p(`${b(e)} ends with ${b(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${b(e)} ends with ${b(t)}}`,r)}function Ek(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${b(e)} does not start with ${b(t)}}`,r)}else if(e[0]!==t)throw new p(`${b(e)} does not start with ${b(t)}}`,r)}function Ck(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new p(`${b(e)} starts with ${b(t)}}`,r)}else if(e[0]===t)throw new p(`${b(e)} starts with ${b(t)}}`,r)}const qs={endsWith:xk,endsWithout:Ak,startsWith:Ek,startsWithout:Ck},Xb={assert:qs,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${b(e)} does not end with ${b(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${b(e)} does not end with ${b(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new p(`${b(e)} ends with ${b(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${b(e)} ends with ${b(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${b(e)} does not start with ${b(t)}}`,r)}else if(e[0]!==t)throw new p(`${b(e)} does not start with ${b(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new p(`${b(e)} starts with ${b(t)}}`,r)}else if(e[0]===t)throw new p(`${b(e)} starts with ${b(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:I(qs.endsWith),endsWithout:I(qs.endsWithout),startsWith:I(qs.startsWith),startsWithout:I(qs.startsWithout)}};function Fk(e,t,r){const n=_r(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function Ln(e,t){return _r(t).includes(e)}const Pc={isEnumValue(e,t,r){Fk(e,t,r)},isNotEnumValue(e,t,r){const n=_r(t);if(n.includes(e))throw new p(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},Qb={assert:Pc,check:{isEnumValue:Ln,isNotEnumValue(e,t){return!_r(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=_r(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=_r(t);if(n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(_r(t).includes(e))return e},isNotEnumValue(e,t){if(!_r(t).includes(e))return e}},waitUntil:{isEnumValue:I(Pc.isEnumValue),isNotEnumValue:I(Pc.isNotEnumValue)}},Nc={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${b(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${b(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new p(`Entries are not equal at key '${String(o)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))throw new p("Entries are equal.",r)}},ey={assert:Nc,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const o=e[n],i=t[n];return o===i})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const o=e[n],i=t[n];return o!==i})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${b(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${b(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new p(`Entries are not equal at key '${String(o)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))return e;throw new p("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(o=>{const i=e[o],s=t[o];return i===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const i=e[o],s=t[o];return i!==s}))return e}},waitUntil:{entriesEqual:I(Nc.entriesEqual),notEntriesEqual:I(Nc.notEntriesEqual)}};function nl(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Da(e,t){if(!(e===t||nl(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!nl(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(i=>{try{Da(e[i],t[i])}catch(s){throw new Error(`JSON objects are not equal at key '${i}': ${Tt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function ta(e,t){if(e===t||nl(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!nl(r,n)?!1:Object.keys(e).every(i=>ta(e[i],t[i]))}return!1}const Ic={jsonEquals(e,t,r){try{Da(e,t)}catch(n){throw new p(Tt(n),r)}},notJsonEquals(e,t,r){try{Da(e,t)}catch{return}throw new p("Values are JSON equal.",r)}},ty={assert:Ic,check:{jsonEquals(e,t){return ta(e,t)},notJsonEquals(e,t){return!ta(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return Da(e,t),e}catch(n){throw new p(Tt(n),r)}},notJsonEquals(e,t,r){try{Da(e,t)}catch{return e}throw new p("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(ta(e,t))return e},notJsonEquals(e,t){if(!ta(e,t))return e}},waitUntil:{jsonEquals:I(Ic.jsonEquals),notJsonEquals:I(Ic.notJsonEquals)}};function i0(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function ry(){this._key="chai/deep-eql__"+Math.random()+Date.now()}ry.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var ny=typeof WeakMap=="function"?WeakMap:ry;function s0(e,t,r){if(!r||ns(e)||ns(t))return null;var n=r.get(e);if(n){var o=n.get(t);if(typeof o=="boolean")return o}return null}function wu(e,t,r,n){if(!(!r||ns(e)||ns(t))){var o=r.get(e);o?o.set(t,n):(o=new ny,o.set(t,n),r.set(e,o))}}function rn(e,t,r){if(r&&r.comparator)return a0(e,t,r);var n=oy(e,t);return n!==null?n:a0(e,t,r)}function oy(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:ns(e)||ns(t)?!1:null}function a0(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new ny;var n=r&&r.comparator,o=s0(e,t,r.memoize);if(o!==null)return o;var i=s0(t,e,r.memoize);if(i!==null)return i;if(n){var s=n(e,t);if(s===!1||s===!0)return wu(e,t,r.memoize,s),s;var a=oy(e,t);if(a!==null)return a}var u=i0(e);if(u!==i0(t))return wu(e,t,r.memoize,!1),!1;wu(e,t,r.memoize,!0);var l=Sk(e,t,u,r);return wu(e,t,r.memoize,l),l}function Sk(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return rn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return iy(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Qo(e,t,n);case"RegExp":return Tk(e,t);case"Generator":return Mk(e,t,n);case"DataView":return Qo(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Qo(new Uint8Array(e),new Uint8Array(t),n);case"Set":return u0(e,t,n);case"Map":return u0(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return Nk(e,t,n)}}function Tk(e,t){return e.toString()===t.toString()}function u0(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){o.push([s,a])}),Qo(n.sort(),o.sort(),r)}function Qo(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(rn(e[o],t[o],r)===!1)return!1;return!0}function Mk(e,t,r){return Qo(Bd(e),Bd(t),r)}function Pk(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function l0(e){if(Pk(e))try{return Bd(e[Symbol.iterator]())}catch{return[]}return[]}function Bd(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function c0(e){var t=[];for(var r in e)t.push(r);return t}function d0(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var o=r[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&t.push(o)}return t}function iy(e,t,r,n){var o=r.length;if(o===0)return!0;for(var i=0;i<o;i+=1)if(rn(e[r[i]],t[r[i]],n)===!1)return!1;return!0}function Nk(e,t,r){var n=c0(e),o=c0(t),i=d0(e),s=d0(t);if(n=n.concat(i),o=o.concat(s),n.length&&n.length===o.length)return Qo(f0(n).sort(),f0(o).sort())===!1?!1:iy(e,t,n,r);var a=l0(e),u=l0(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Qo(a,u,r)):n.length===0&&a.length===0&&o.length===0&&u.length===0}function ns(e){return e===null||typeof e!="object"}function f0(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class Zi extends p{name="DiffError";constructor(t,r,n,o){const i=p2(r,n);super([t,Mf(i)].join(`
`),o)}}function co(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const uo={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${b(t)}

.`,r):new Zi("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${b(t)}

.`,r):new p(`

${b(e)}

strictly equals

${b(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${b(t)}

.`,r):new Zi("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${b(t)}

.`,r):new p(`

${b(e)}

loosely equals

${b(t)}

`,r)},deepEquals(e,t,r){if(!rn(e,t,{comparator:co}))throw new Zi("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(rn(e,t,{comparator:co}))throw new p(`

${b(e)}

deeply equals

${b(t)}

`,r)}},sy=uo.deepEquals,ay={assert:uo,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return rn(e,t,{comparator:co})},notDeepEquals(e,t){return!rn(e,t,{comparator:co})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${b(t)}

.`,r):new Zi("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${b(t)}

.`,r):new p(`

${b(e)}

strictly equals

${b(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${b(t)}

.`,r):new Zi("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${b(t)}

.`,r):new p(`

${b(e)}

loosely equals

${b(t)}

`,r);return e},deepEquals(e,t,r){if(rn(e,t,{comparator:co}))return e;throw new Zi("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(rn(e,t,{comparator:co}))throw new p(`

${b(e)}

deeply equals

${b(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(rn(e,t,{comparator:co}))return e},notDeepEquals(e,t){if(!rn(e,t,{comparator:co}))return e}},waitUntil:{strictEquals:I(uo.strictEquals),notStrictEquals:I(uo.notStrictEquals),looseEquals:I(uo.looseEquals),notLooseEquals:I(uo.notLooseEquals),deepEquals:I(uo.deepEquals),notDeepEquals:I(uo.notDeepEquals)}};function $r(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function Ur(e,t){return typeof t=="string"?t.includes(e):$r(t,e)}const On={hasValue(e,t,r){if(!$r(e,t))throw new p(`'${b(e)}' does not have value '${b(t)}'.`,r)},lacksValue(e,t,r){if($r(e,t))throw new p(`'${b(e)}' has value '${b(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new p(`'${b(e)}' does not have values '${b(t)}'.`,r)}if(n.length)throw new p(`'${b(e)}' does not have values '${b(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new p(`'${b(e)}' has values '${b(n)}'.`,r)},isIn(e,t,r){if(!Ur(e,t))throw new p(`'${b(e)}'

is not in

${b(t)}.`,r)},isNotIn(e,t,r){if(Ur(e,t))throw new p(`'${b(e)}'

is in

${b(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${b(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new p(`'${b(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new p(`'${b(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${b(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${b(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${b(e)}' is not empty.`,t)}}},uy={assert:On,check:{hasValue(e,t){return $r(e,t)},lacksValue(e,t){return!$r(e,t)},hasValues(e,t){return t.every(r=>$r(e,r))},lacksValues(e,t){return t.every(r=>!$r(e,r))},isIn(e,t){return Ur(e,t)},isNotIn(e,t){return!Ur(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!$r(e,t))throw new p(`'${b(e)}' does not have value '${b(t)}'.`,r);return e},lacksValue(e,t,r){if($r(e,t))throw new p(`'${b(e)}' has value '${b(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new p(`'${b(e)}' does not have values '${b(t)}'.`,r)}if(n.length)throw new p(`'${b(e)}' does not have values '${b(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new p(`'${b(e)}' has values '${b(n)}'.`,r);return e},isIn(e,t,r){if(!Ur(e,t))throw new p(`'${b(e)}'

is not in

${b(t)}.`,r);return e},isNotIn(e,t,r){if(Ur(e,t))throw new p(`'${b(e)}'

is in

${b(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${b(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new p(`'${b(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new p(`'${b(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${b(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${b(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${b(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if($r(e,t))return e},lacksValue(e,t){if(!$r(e,t))return e},hasValues(e,t){if(t.every(r=>$r(e,r)))return e},lacksValues(e,t){if(!t.every(r=>$r(e,r)))return e},isIn(e,t){if(Ur(e,t))return e},isNotIn(e,t){if(!Ur(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:I(On.hasValue),lacksValue:I(On.lacksValue),hasValues:I(On.hasValues),lacksValues:I(On.lacksValues),isIn:I(On.isIn),isNotIn:I(On.isNotIn),isEmpty:I(On.isEmpty),isNotEmpty:I(On.isNotEmpty)}},Oc={isHttpStatus(e,t){if(!Ln(e,F))throw new p(`${b(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(Ln(e,F)){if(!Ur(e,Lu[t]))throw new p(`${b(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${b(e)} is not a valid HTTP status.`,r)}},ly={assert:Oc,check:{isHttpStatus(e){return Ln(e,F)},isHttpStatusCategory(e,t){return Ln(e,F)&&Ur(e,Lu[t])}},assertWrap:{isHttpStatus(e,t){if(!Ln(e,F))throw new p(`${b(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(Ln(e,F)){if(!Ur(e,Lu[t]))throw new p(`${b(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${b(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(Ln(e,F))return e},isHttpStatusCategory(e,t){if(Ln(e,F)&&Ur(e,Lu[t]))return e}},waitUntil:{isHttpStatus:I(Oc.isHttpStatus),isHttpStatusCategory:I(Oc.isHttpStatusCategory)}},Bc={instanceOf(e,t,r){if(!(e instanceof t))throw new p(`'${b(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${b(e)}' is an instance of '${t.name}'`,r)}},cy={assert:Bc,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new p(`'${b(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${b(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:I(Bc.instanceOf),notInstanceOf:I(Bc.notInstanceOf)}},Ik=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function _e(e,t){return Ik.some(r=>{try{return r(e,t)}catch{return!1}})}const Uo={isKeyOf(e,t,r){if(!_e(t,e))throw new p(`'${String(e)}' is not a key of '${b(t)}'.`,r)},isNotKeyOf(e,t,r){if(_e(t,e))throw new p(`'${String(e)}' is a key of '${b(t)}'.`,r)},hasKey(e,t,r){if(!_e(e,t))throw new p(`'${b(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(_e(e,t))throw new p(`'${b(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(o=>!_e(e,o));if(n.length)throw new p(`'${b(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(o=>_e(e,o));if(n.length)throw new p(`'${b(e)}' does not lack keys '${n.join(",")}'.`,r)}},dy={assert:Uo,check:{isKeyOf(e,t){return _e(t,e)},isNotKeyOf(e,t){return!_e(t,e)},hasKey:_e,lacksKey(e,t){return!_e(e,t)},hasKeys(e,t){return t.every(r=>_e(e,r))},lacksKeys(e,t){return t.every(r=>!_e(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!_e(t,e))throw new p(`'${String(e)}' is not a key of '${b(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(_e(t,e))throw new p(`'${String(e)}' is a key of '${b(t)}'.`,r);return e},hasKey(e,t,r){if(!_e(e,t))throw new p(`'${b(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(_e(e,t))throw new p(`'${b(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(o=>!_e(e,o));if(n.length)throw new p(`'${b(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(o=>_e(e,o));if(n.length)throw new p(`'${b(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(_e(t,e))return e},isNotKeyOf(e,t){if(!_e(t,e))return e},hasKey(e,t){if(_e(e,t))return e},lacksKey(e,t){if(!_e(e,t))return e},hasKeys(e,t){if(t.every(r=>_e(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!_e(e,r)))return e}},waitUntil:{isKeyOf:I(Uo.isKeyOf),isNotKeyOf:I(Uo.isNotKeyOf),hasKey:I(Uo.hasKey),lacksKey:I(Uo.lacksKey),hasKeys:I(Uo.hasKeys),lacksKeys:I(Uo.lacksKeys)}};function Ok(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r)}function Bk(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r)}const Rc={isLengthAtLeast:Ok,isLengthExactly:Bk},fy={assert:Rc,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Ve(e).length)===t)return e})},waitUntil:{isLengthAtLeast:I(Rc.isLengthAtLeast),isLengthExactly:I(Rc.isLengthExactly)}},Rk={never(e){throw new p("This code should not have executed.",e)}},my={assert:Rk,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Lc={isDefined(e,t){if(e==null)throw new p(`'${b(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new p(`'${b(e)}' is not a nullish.`,t)}},hy={assert:Lc,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new p(`'${b(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new p(`'${b(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:I(Lc.isDefined),isNullish:I(Lc.isNullish)}},ur={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${b({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${b({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n)}},gy={assert:ur,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${b({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${b({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:I(ur.isInBounds),isOutBounds:I(ur.isOutBounds),isInteger:I(ur.isInteger),isNotInteger:I(ur.isNotInteger),isAbove:I(ur.isAbove),isAtLeast:I(ur.isAtLeast),isBelow:I(ur.isBelow),isAtMost:I(ur.isAtMost),isNaN:I(ur.isNaN),isFinite:I(ur.isFinite),isInfinite:I(ur.isInfinite),isApproximately:I(ur.isApproximately),isNotApproximately:I(ur.isNotApproximately)}};function Lk(e,t,r,n,o){return Ga(...Il(e,t,r,n,o),!1)}function Il(e,t,r,n,o){const i=Array.isArray(r);return[i?e:sy,i?t:e,i?r:t,i?n:r,i?o:n]}function Ga(e,t,r,n,o,i){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,n),i?a(l):a()}catch(l){u(new p(`Output from '${t.name}' did not produce expected output. ${Tt(l)}`,o))}});try{return e(s,n),i?s:void 0}catch(a){throw new p(`Output from '${t.name}' did not produce expected output. ${Tt(a)}`,o)}}function jk(e,t,r,n,o){try{const i=Ga(...Il(e,t,r,n,o),!1);return i instanceof Promise?new Promise(async s=>{try{await i,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function Uk(e,t,r,n,o){return Ga(...Il(e,t,r,n,o),!0)}function _k(e,t,r,n,o){try{const i=Ga(...Il(e,t,r,n,o),!0);return i instanceof Promise?new Promise(async s=>{try{s(await i)}catch{s(void 0)}}):i}catch{return}}const jc=Symbol("not set");async function Vk(e,t,r,n,o,i){const s=Array.isArray(r),a=s?e:sy,u=s?t:e,l=s?r:t,c=s?n:r,d=Jb(s?o:n),m=s?i:o,h=rs(d.timeout,{milliseconds:!0}).milliseconds,v=rs(d.interval,{milliseconds:!0});let $=jc,D;async function k(){try{$=await Ga(a,u,l,c,void 0,!0)}catch(N){$=jc,D=ot(N)}}const E=Date.now();for(;$===jc;)if(await k(),await oi(v),Date.now()-E>=h)throw Va(D,hi(m,`Timeout of '${h}' milliseconds exceeded waiting for callback value to match expectations`));return $}const zk={output:Lk},py={assert:zk,check:{output:jk},assertWrap:{output:Uk},checkWrap:{output:_k},waitUntil:{output:Vk}},Ws={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${b(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${b(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${b(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${b(e)}' is not a Primitive.`,t)}},by={assert:Ws,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${b(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${b(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${b(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${b(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:I(Ws.isNotPrimitive),isNotPropertyKey:I(Ws.isNotPropertyKey),isPrimitive:I(Ws.isPrimitive),isPropertyKey:I(Ws.isPropertyKey)}},Ks={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${b(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${b(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${b(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${b(e)}' is a Promise.`,t)}},yy={assert:Ks,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${b(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${b(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${b(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${b(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:I(Ks.isPromiseLike,!0),isNotPromiseLike:I(Ks.isNotPromiseLike,!0),isPromise:I(Ks.isPromise,!0),isNotPromise:I(Ks.isNotPromise,!0)}},Uc={matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r)}},vy={assert:Uc,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:I(Uc.matches,!0),mismatches:I(Uc.mismatches,!0)}},We={isArray(e,t){if(!Array.isArray(e))throw new p(`'${b(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${b(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${b(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new p(`'${b(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new p(`'${b(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${b(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${b(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${b(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new p(`'${b(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${b(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new p(`'${b(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${b(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${b(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${b(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${b(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new p(`'${b(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${b(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${b(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new p(`'${b(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${b(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${b(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${b(e)}' is a undefined.`,t)}},wy={assert:We,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new p(`'${b(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${b(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${b(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new p(`'${b(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new p(`'${b(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${b(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${b(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${b(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new p(`'${b(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${b(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new p(`'${b(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${b(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${b(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${b(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${b(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new p(`'${b(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${b(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${b(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new p(`'${b(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${b(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${b(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${b(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:I(We.isArray),isBigInt:I(We.isBigInt),isBoolean:I(We.isBoolean),isFunction:I(We.isFunction),isNull:I(We.isNull),isNumber:I(We.isNumber),isObject:I(We.isObject),isPlainObject:I(We.isPlainObject),isString:I(We.isString),isSymbol:I(We.isSymbol),isUndefined:I(We.isUndefined),isNotArray:I(We.isNotArray),isNotBigInt:I(We.isNotBigInt),isNotBoolean:I(We.isNotBoolean),isNotFunction:I(We.isNotFunction),isNotNull:I(We.isNotNull),isNotNumber:I(We.isNotNumber),isNotObject:I(We.isNotObject),isNotPlainObject:I(We.isNotPlainObject),isNotString:I(We.isNotString),isNotSymbol:I(We.isNotSymbol),isNotUndefined:I(We.isNotUndefined)}};var dr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(dr||(dr={}));function Pf(e,t,r){Nf(e,{noError:"No error.",notInstance:`'${b(e)}' is not an error instance.`},t,r)}function m0(e,t,r){Nf(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${b(e)}' is not an error instance.`},t,r)}function Nf(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const o=e.constructor.name;throw new p(`Error constructor '${o}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const o=Tt(e);if(typeof r.matchMessage=="string"){if(!Hb(o,r.matchMessage))throw new p(`Error message

'${o}'

does not contain

'${r.matchMessage}'.`,n)}else if(!o.match(r.matchMessage))throw new p(`Error message

'${o}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new p(t.notInstance,n);else throw new p(t.noError,n)}function h0(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=Tt(e);if(typeof t.matchMessage=="string"){if(!Hb(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Ol(e,t,r,n){let o;try{const i=t instanceof Promise?t:t();if(i instanceof Promise)return new Promise(async(s,a)=>{try{await i}catch(u){o=ot(u)}try{m0(o,r,n),e===dr.Assert?s():e===dr.Check?s(!0):s(o)}catch(u){e===dr.CheckWrap?s(void 0):e===dr.Check?s(!1):a(ot(u))}})}catch(i){o=ot(i)}try{return m0(o,r,n),e===dr.Check?!0:e!==dr.Assert?o:void 0}catch(i){if(e===dr.CheckWrap)return;if(e===dr.Check)return!1;throw i}}function qk(e,t,r){return Ol(dr.Assert,e,t,r)}function Wk(e,t){return Ol(dr.Check,e,t)}function Kk(e,t,r){return Ol(dr.AssertWrap,e,t,r)}function Gk(e,t,r){return Ol(dr.CheckWrap,e,t,r)}const Zk=I(Pf);function Hk(e,t,r,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,i=o?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof i!="function")throw new TypeError(`Callback is not a function, got '${b(i)}'`);return Zk(o,async()=>{try{await i();return}catch(u){return ot(u)}},a,s)}const Jk={throws:qk,isError:Pf},$y={assert:Jk,check:{throws:Wk,isError(e,t){return h0(e,t)}},assertWrap:{throws:Kk,isError(e,t,r){return Nf(e,{noError:"No error.",notInstance:`'${b(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:Gk,isError(e,t){if(h0(e,t))return e}},waitUntil:{throws:Hk,isError:I(Pf)}},fo=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,_c={isUuid(e,t){if(!String(e).match(fo))throw new p(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(fo))throw new p(`'${String(e)}' is a UUID.`,t)}},ky={assert:_c,check:{isUuid(e){return!!String(e).match(fo)},isNotUuid(e){return!String(e).match(fo)}},assertWrap:{isUuid(e,t){if(!String(e).match(fo))throw new p(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(fo))throw new p(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(fo))return e},isNotUuid(e){if(!String(e).match(fo))return e}},waitUntil:{isUuid:I(_c.isUuid),isNotUuid:I(_c.isNotUuid)}},Yk={...my.assert,...Yb.assert,...Xb.assert,...ey.assert,...Qb.assert,...ly.assert,...cy.assert,...ty.assert,...dy.assert,...fy.assert,...hy.assert,...gy.assert,...py.assert,...by.assert,...yy.assert,...vy.assert,...wy.assert,...ay.assert,...$y.assert,...ky.assert,...uy.assert},If=[Yb,Xb,ey,Qb,ly,cy,ty,dy,fy,my,hy,gy,py,by,yy,vy,wy,ay,$y,ky,uy],Xk=Object.assign({},...If.map(e=>e.check)),T=Object.assign(function(t){return!!t},Xk);function Qk(e,t,r){return Vu(e,t,r,new Set)}function Vu(e,t,r,n){if(e=g0(e),t=g0(t),T.isObject(e)&&T.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Vu(Ve(e).sort(),Ve(t).sort(),r,n))return!1;let o=!1;const i=Ve(e).map(s=>{const a=Vu(e[s],t[s],r,n);return T.isPromise(a)&&(o=!0),a});return p0(o,i)}else if(T.isArray(e)&&T.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let o=!1;const i=e.map((s,a)=>{const u=Vu(s,t[a],r,n);return T.isPromise(u)&&(o=!0),u});return p0(o,i)}else return r(e,t)}function g0(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function p0(e,t){return e?new Promise(async(r,n)=>{try{const o=await Promise.all(t);r(o.every(T.isTrue))}catch(o){n(ot(o))}}):t.every(T.isTrue)}const e5=Object.assign({},...If.map(e=>e.assertWrap)),ln=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r);return t},e5);function t5(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const r5={tsType:t5},n5={assert:r5},o5={fail:e=>{throw new p("Failure triggered.",e)}},i5={...n5.assert,...Yk,...o5},Kt=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r)},i5),s5=Object.assign({},...If.map(e=>e.checkWrap)),Dy=Object.assign(function(t){if(t)return t},s5);function a5(e,t){return T.hasKey(e,"entryType")&&e.entryType===t}function _o(e,t){return e.controlType===t}var H;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(H||(H={}));const xy=Symbol("any-type"),u5={[H.Checkbox]:!1,[H.Color]:"",[H.Custom]:void 0,[H.Dropdown]:"",[H.Hidden]:xy,[H.Number]:0,[H.Text]:""};function l5(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===H.Custom)return;const i=u5[o.controlType];i!==xy&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function c5(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return T.isPromise(o)?new Promise(async(i,s)=>{try{const a=await o;e.set(n,a),i(a)}catch(a){s(ot(a))}}):(e.set(n,o),o)}}function As(e,t,r){if(t in e)return e[t];{const n=r();return T.isPromise(n)?new Promise(async(o,i)=>{try{const s=await n;e[t]=s,o(s)}catch(s){i(ot(s))}}):(e[t]=n,n)}}function ii(e){return Ve(e).map(t=>[t,e[t]])}function xa(e){return Object.fromEntries(e)}function pi(e,t,r){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return r(a,o,i,s)&&n.push(a),n},[])}function d5(e,t,r={}){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return As(n,a,()=>[]).push(o),n},{})}function Bl(e,t,r={}){try{let n=!1;const o=e.map((i,s,a)=>{const u=t(i,s,a);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(T.isTruthy);return n?new Promise(async(i,s)=>{try{const a=pi(await Promise.all(o),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},T.isTruthy);i(xa(a))}catch(a){s(ot(a))}}):xa(o)}catch(n){throw ot(n)}}function f5(e){return Array.isArray(e)?e:[e]}function m5({min:e,max:t}){const{min:r,max:n}=kf({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)),s=Math.ceil(i/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/o)*o,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,m)=>c+d*256**m,0);while(l>=a);return r+l%o}const b0=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function ei(e=16){let t="";for(let r=0;r<e;r++){const n=m5({min:0,max:b0.length-1});t+=b0[n]}return t}function Ay(e){if(T.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Tt(t).trim()).join(`
`))}function h5(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):T.hasKey(t,"fallbackValue")?t.fallbackValue:ot(n)):r}catch(r){return t.handleError?t.handleError(r):T.hasKey(t,"fallbackValue")?t.fallbackValue:ot(r)}}function g5(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const p5="modulepreload",b5=function(e){return"/vira/book/"+e},y0={},ol=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=u(r.map(l=>{if(l=b5(l),l in y0)return;y0[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":p5,c||(m.as="script"),m.crossOrigin="",m.href=l,a&&m.setAttribute("nonce",a),document.head.appendChild(m),c)return new Promise((h,v)=>{m.addEventListener("load",h),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var $t;(function(e){e.Standard="stdout",e.Error="stderr"})($t||($t={}));var ue;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ue||(ue={}));async function y5(){return await Vp({async[an.Node](){const e=(await ol(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[ue.Bold]:e.bold.open,[ue.Debug]:e.blueBright.open,[ue.Error]:e.red.open,[ue.Faint]:e.gray.open,[ue.Info]:e.cyan.open,[ue.Mutate]:e.magenta.open,[ue.NormalWeight]:"\x1B[22m",[ue.Plain]:"",[ue.Reset]:e.reset.open,[ue.Success]:e.green.open,[ue.Warning]:e.yellow.open}},[an.Web](){return Promise.resolve({[ue.Bold]:"font-weight: bold",[ue.Debug]:"color: blue",[ue.Error]:"color: red",[ue.Faint]:"color: grey",[ue.Info]:"color: teal",[ue.Mutate]:"color: magenta",[ue.NormalWeight]:"",[ue.Plain]:"",[ue.Reset]:"",[ue.Success]:"color: green",[ue.Warning]:"color: orange"})}})}const wr=await y5(),v5={[ue.Bold]:{colors:[wr.bold],logType:$t.Standard},[ue.Debug]:{colors:[wr.debug],logType:$t.Standard},[ue.Faint]:{colors:[wr.faint],logType:$t.Standard},[ue.Info]:{colors:[wr.info],logType:$t.Standard},[ue.Mutate]:{colors:[wr.mutate,wr.bold],logType:$t.Standard},[ue.NormalWeight]:{colors:[wr.normalWeight],logType:$t.Standard},[ue.Plain]:{colors:[],logType:$t.Standard},[ue.Reset]:{colors:[wr.reset],logType:$t.Standard},[ue.Success]:{colors:[wr.success,wr.bold],logType:$t.Standard},[ue.Error]:{colors:[wr.error,wr.bold],logType:$t.Error},[ue.Warning]:{colors:[wr.warning],logType:$t.Error}};function or({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Hi({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function w5(e,t){try{let r=!1;const n=ii(e).map(([o,i])=>{const s=t(o,i,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(T.isTruthy);return r?new Promise(async(o,i)=>{try{const s=pi(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},T.isTruthy);o(xa(s))}catch(s){i(ot(s))}}):xa(n)}catch(r){throw ot(r)}}function $5(e,t){return w5(e,(r,n)=>{const o=n,i=t(n,e);return i instanceof Promise?i.then(s=>({key:o,value:s})):{key:o,value:i}})}function Ey(e,...t){const r={...e};return t.forEach(n=>{n&&ii(n).forEach(([o,i])=>{i!=null&&(r[o]=i)})}),r}function k5(e){return e.replace(/,/g,"")}function D5(e){return typeof e=="number"?e:Number(typeof e=="string"?k5(e):e)}function x5(e){const t=A5(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function A5(e){const t=D5(e);if(!isNaN(t))return t}const Cy="px";function Aa(e){return Of({value:e,suffix:Cy})}function E5(e){return x5(Fy({value:e,suffix:Cy}))}function Of({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Fy({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function C5(){return await Vp({async[an.Node](){const{inspect:e}=await ol(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const o=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[ue.Reset].colors.join("")].join(""),css:void 0}}},[an.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:pi(r.colorConfig[t].colors,s=>Fy({value:s,suffix:";"}),T.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?Tt(s):b(s)).join(`
`),r.omitColors?"":r.colorConfig[ue.Reset].colors.join("")].join(""),css:n}}}})}const F5=await C5(),S5={colorConfig:v5,omitColors:!1},T5=Sy({[$t.Error](){},[$t.Standard](){}});function Sy(e,t){const r=Ey(S5,t);function n(i){e[r.colorConfig[i.colorKey].logType](F5({...i,options:r}))}const o=$5(ue,i=>(...s)=>n({args:s,colorKey:i}));return{...o,if(i){return i?o:T5}}}const M5=$f(an.Node)?{[$t.Error]({text:e}){process.stderr.write(e+`
`)},[$t.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[$t.Error]({text:e,css:t}){console.error(or({value:e,prefix:"%c"}),t)},[$t.Standard]({text:e,css:t}){console.log(or({value:e,prefix:"%c"}),t)}},Ty=Sy(M5);function P5(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}function N5(e,{digits:t}){const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function I5({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const o=Kb(Zb(t,{caseSensitive:r}),"g"),i=[];return e.replace(o,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);i.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),i}function O5(e,t,{caseSensitive:r}){const n=I5({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),o=Zb(t,{caseSensitive:r});return e.split(o).reduce((s,a,u)=>{const l=n[u],c=s.concat(a);if(l){const d=e.slice(l.index,l.index+l.length);return c.concat(d)}else return c},[])}function B5(e,t){return e.split(t)}function v0(e,t){const{min:r,max:n}=kf(t);if(t.takeOverflow){const o=n-r+1,i=(e-r)%o;return i<0?r+o+i:r+i}else return e>n?r:e<r?n:e}function Gt(e,t){let r=!1;const n=Ve(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),o[i]=s,o},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ve(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(ot(s))}}):n}function Bf(e,t){const r=ii(e).filter(([n,o])=>t(n,o,e));return xa(r)}function R5(e,t){return Bf(e,r=>t.includes(r))}function il(e){return Ve(e).map(t=>e[t])}function My(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var Ea;(function(e){e.Upper="upper",e.Lower="lower"})(Ea||(Ea={}));const L5={firstLetterCase:Ea.Lower};function j5(e,t){if(!e.length)return"";const r=e[0];return(t===Ea.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function U5(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""}),o=Ey(L5,t);return j5(n,o.firstLetterCase)}function _5(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function V5({value:e,wrapper:t}){return or({value:Of({value:e,suffix:t}),prefix:t})}function pn(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function Rf(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class z5{listeners={};universalListeners=new Map;getListenerCount(){return il(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function o(i,s){r.once&&n(),t(i,s)}return this.universalListeners.set(t,{listener:o,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const o=T.isString(t)?t:t.type,i=()=>this.listeners[o]?.delete(r)||!1;function s(a,u){n.once&&i(),r(a,u)}return As(this.listeners,o,()=>new Map).set(r,{listener:s,removeListener:i}),i}removeListener(t,r){const n=T.isString(t)?t:t.type,o=this.listeners[n];if(!o)return!1;const i=o.get(r);return i?i.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(o=>{o.listener(t,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(t,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=il(this.listeners).reduce((n,o)=>{const i=o.size||0;return o.clear(),n+i},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class Lf extends z5{}function jf(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function Rd(e,t,r){return jf(globalThis,e,t,r)}function Uf(e,t){return Ca(e.title),e.parent?[...Uf(e.parent),Ca(e.parent.title)].concat([]):[]}function Ca(e){return My(e).toLowerCase().replaceAll(/\s/g,"-")}function q5({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const W5=/[/?#&=]/;function Py(e){const t=e.match(W5);return e.trim()?Ca(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const K5={[Bt.ElementExample]:()=>[],[Bt.Page]:e=>[Py(e.title),...l5(e.controls,e.title)].filter(T.isTruthy),[Bt.Root]:()=>[]},sl="_isBookTreeNode",Ny=new Map;function G5(e){return Ny.get(e)}function Z5(e,t){c5(Ny,e,()=>t)}function Ji(e,t){return Iy(e)&&e.entry.entryType===t}function Iy(e){return!!(T.hasKeys(e,[sl,"entry"])&&e[sl])}function H5(){return{[sl]:!0,entry:{entryType:Bt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function J5({entries:e,debug:t}){const r=G5(e);if(r)return r;const n=H5();e.forEach(s=>_f({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=Oy(n),i={tree:n,flattenedNodes:o};return Z5(e,i),t&&console.info("element-book tree:",n),i}function Y5(e,t,r){if(!t.parent)return e;const n=Ld(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),_f({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Ld(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Uf(t).join(" > ")}`);return o}function _f({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=K5[t.entryType](t);t.errors.push(...o);const i=Y5(e,t,r),s=Ca(t.title),a=i.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[sl]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};i.children[s]=u,a5(t,Bt.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>_f({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function Ld(e,t){const r=Iy(e)?e.fullUrlBreadcrumbs.slice(0,-1):Uf(e);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Oy(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Oy(o));return[e,...r].flat()}function Vf(e,t){return zf(e,["",...t],void 0)}function zf(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],s=i&&zf(i,n,r);return{...e.controls,...s}}function X5(e,t,r){const n={...e};return zf(n,["",...t],r),n}function By(e,t){const r=t?.controls||(Ji(e,Bt.Page)?Gt(e.entry.controls,(o,i)=>i.initValue):{});return{children:Gt(e.children,(o,i)=>By(i,t?.children?.[i.urlBreadcrumb])),controls:r}}function Ce(e){const t={...e,entryType:Bt.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:t.useVerticalExamples,entryType:Bt.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),Py(n.title)].filter(T.isTruthy)};r.add(n.title),t.elementExamples[Ca(o.title)]=o}}),t}var fr;(function(e){e.Search="search",e.Book="book"})(fr||(fr={}));function Ry(e){return e[0]===fr.Book?"":e[1]?decodeURIComponent(e[1]):""}const os={hash:void 0,paths:[fr.Book],search:void 0};class al{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const t=al.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=r=>(Ly.registry.set(r.name,r),t(r)))}canRegisterCssProperty(t){return al.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(t){if(!this.canRegisterCssProperty(t.name))return!1;try{return globalThis.CSS.registerProperty(t),!0}catch(r){throw Va(r,`Failed to define CSS var: ${b(t,4)}

`)}}}const Ly=new al;const zu=globalThis,qf=zu.ShadowRoot&&(zu.ShadyCSS===void 0||zu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wf=Symbol(),w0=new WeakMap;let ti=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Wf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(qf&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=w0.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&w0.set(r,t))}return t}toString(){return this.cssText}};const rt=e=>new ti(typeof e=="string"?e:e+"",void 0,Wf),jy=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new ti(r,e,Wf)},Q5=(e,t)=>{if(qf)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=zu.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},$0=qf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return rt(r)})(e):e;const{is:eD,defineProperty:tD,getOwnPropertyDescriptor:rD,getOwnPropertyNames:nD,getOwnPropertySymbols:oD,getPrototypeOf:iD}=Object,Rl=globalThis,k0=Rl.trustedTypes,sD=k0?k0.emptyScript:"",aD=Rl.reactiveElementPolyfillSupport,ca=(e,t)=>e,ul={toAttribute(e,t){switch(t){case Boolean:e=e?sD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Kf=(e,t)=>!eD(e,t),D0={attribute:!0,type:String,converter:ul,reflect:!1,useDefault:!1,hasChanged:Kf};Symbol.metadata??=Symbol("metadata"),Rl.litPropertyMetadata??=new WeakMap;let Ui=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=D0){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&tD(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=rD(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:o,set(s){const a=o?.call(this);i?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??D0}static _$Ei(){if(this.hasOwnProperty(ca("elementProperties")))return;const t=iD(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ca("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ca("properties"))){const r=this.properties,n=[...nD(r),...oD(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift($0(o))}else t!==void 0&&r.push($0(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Q5(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:ul).toAttribute(r,n.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,r){const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:ul;this._$Em=o;const a=s.fromAttribute(r,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,r,n,o=!1,i){if(t!==void 0){const s=this.constructor;if(o===!1&&(i=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Kf)(i,r)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,i]of n){const{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Ui.elementStyles=[],Ui.shadowRootOptions={mode:"open"},Ui[ca("elementProperties")]=new Map,Ui[ca("finalized")]=new Map,aD?.({ReactiveElement:Ui}),(Rl.reactiveElementVersions??=[]).push("2.1.2");const Gf=globalThis,x0=e=>e,ll=Gf.trustedTypes,A0=ll?ll.createPolicy("lit-html",{createHTML:e=>e}):void 0,Uy="$lit$",ho=`lit$${Math.random().toFixed(9).slice(2)}$`,_y="?"+ho,uD=`<${_y}>`,si=document,Fa=()=>si.createComment(""),Sa=e=>e===null||typeof e!="object"&&typeof e!="function",Zf=Array.isArray,lD=e=>Zf(e)||typeof e?.[Symbol.iterator]=="function",Vc=`[ 	
\f\r]`,Gs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E0=/-->/g,C0=/>/g,Vo=RegExp(`>|${Vc}(?:([^\\s"'>=/]+)(${Vc}*=${Vc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),F0=/'/g,S0=/"/g,Vy=/^(?:script|style|textarea|title)$/i,cD=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),dD=cD(1),Cr=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),T0=new WeakMap,Ho=si.createTreeWalker(si,129);function zy(e,t){if(!Zf(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return A0!==void 0?A0.createHTML(t):t}const fD=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=Gs;for(let a=0;a<r;a++){const u=e[a];let l,c,d=-1,m=0;for(;m<u.length&&(s.lastIndex=m,c=s.exec(u),c!==null);)m=s.lastIndex,s===Gs?c[1]==="!--"?s=E0:c[1]!==void 0?s=C0:c[2]!==void 0?(Vy.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=Vo):c[3]!==void 0&&(s=Vo):s===Vo?c[0]===">"?(s=o??Gs,d=-1):c[1]===void 0?d=-2:(d=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?Vo:c[3]==='"'?S0:F0):s===S0||s===F0?s=Vo:s===E0||s===C0?s=Gs:(s=Vo,o=void 0);const h=s===Vo&&e[a+1].startsWith("/>")?" ":"";i+=s===Gs?u+uD:d>=0?(n.push(l),u.slice(0,d)+Uy+u.slice(d)+ho+h):u+ho+(d===-2?a:h)}return[zy(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Ta{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const a=t.length-1,u=this.parts,[l,c]=fD(t,r);if(this.el=Ta.createElement(l,n),Ho.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Ho.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Uy)){const m=c[s++],h=o.getAttribute(d).split(ho),v=/([.?@])?(.*)/.exec(m);u.push({type:1,index:i,name:v[2],strings:h,ctor:v[1]==="."?hD:v[1]==="?"?gD:v[1]==="@"?pD:Ll}),o.removeAttribute(d)}else d.startsWith(ho)&&(u.push({type:6,index:i}),o.removeAttribute(d));if(Vy.test(o.tagName)){const d=o.textContent.split(ho),m=d.length-1;if(m>0){o.textContent=ll?ll.emptyScript:"";for(let h=0;h<m;h++)o.append(d[h],Fa()),Ho.nextNode(),u.push({type:2,index:++i});o.append(d[m],Fa())}}}else if(o.nodeType===8)if(o.data===_y)u.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(ho,d+1))!==-1;)u.push({type:7,index:i}),d+=ho.length-1}i++}}static createElement(t,r){const n=si.createElement("template");return n.innerHTML=t,n}}function is(e,t,r=e,n){if(t===Cr)return t;let o=n!==void 0?r._$Co?.[n]:r._$Cl;const i=Sa(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=o:r._$Cl=o),o!==void 0&&(t=is(e,o._$AS(e,t.values),o,n)),t}class mD{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=(t?.creationScope??si).importNode(r,!0);Ho.currentNode=o;let i=Ho.nextNode(),s=0,a=0,u=n[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new Es(i,i.nextSibling,this,t):u.type===1?l=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(l=new bD(i,this,t)),this._$AV.push(l),u=n[++a]}s!==u?.index&&(i=Ho.nextNode(),s++)}return Ho.currentNode=si,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Es{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=is(this,t,r),Sa(t)?t===Q||t==null||t===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==Cr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):lD(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&Sa(this._$AH)?this._$AA.nextSibling.data=t:this.T(si.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ta.createElement(zy(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{const i=new mD(o,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(t){let r=T0.get(t.strings);return r===void 0&&T0.set(t.strings,r=new Ta(t)),r}k(t){Zf(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Es(this.O(Fa()),this.O(Fa()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=x0(t).nextSibling;x0(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ll{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Q}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=is(this,t,r,0),s=!Sa(t)||t!==this._$AH&&t!==Cr,s&&(this._$AH=t);else{const a=t;let u,l;for(t=i[0],u=0;u<i.length-1;u++)l=is(this,a[n+u],r,u),l===Cr&&(l=this._$AH[u]),s||=!Sa(l)||l!==this._$AH[u],l===Q?t=Q:t!==Q&&(t+=(l??"")+i[u+1]),this._$AH[u]=l}s&&!o&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class hD extends Ll{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class gD extends Ll{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class pD extends Ll{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=is(this,t,r,0)??Q)===Cr)return;const n=this._$AH,o=t===Q&&n!==Q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==Q&&(n===Q||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class bD{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){is(this,t)}}const yD={I:Es},vD=Gf.litHtmlPolyfillSupport;vD?.(Ta,Es),(Gf.litHtmlVersions??=[]).push("3.3.2");const wD=(e,t,r)=>{const n=r?.renderBefore??t;let o=n._$litPart$;if(o===void 0){const i=r?.renderBefore??null;n._$litPart$=o=new Es(t.insertBefore(Fa(),i),i,void 0,r??{})}return o._$AI(e),o};const Hf=globalThis;let da=class extends Ui{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wD(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Cr}};da._$litElement$=!0,da.finalized=!0,Hf.litElementHydrateSupport?.({LitElement:da});const $D=Hf.litElementPolyfillSupport;$D?.({LitElement:da});(Hf.litElementVersions??=[]).push("4.2.2");function ss({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function kD({onElement:e,forCssVar:t,includeCascade:r}){return(r?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(t.name)).trim()}var ve;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(ve||(ve={}));var M0;(function(e){e.Space="+",e.Comma="#"})(M0||(M0={}));function Cn(e,t={}){return Gt(e,(n,o)=>{DD(n);const i=o,s=T.isString(i)||T.isNumber(i)||i instanceof ti?String(i):String(i.default),a=T.isString(i)||T.isNumber(i)||i instanceof ti?String(i):String(i.initialValue||i.default),u=rt(or({value:n.replace(/^-+/,""),prefix:"--"})),l={name:u,value:jy`var(${u})`,syntax:T.isString(i)||T.isNumber(i)||i instanceof ti?ve.Any:jd(i.syntax),default:s},c=String(l.name);if(!a)throw new Error(`Initial value for CSS var ${c} cannot be empty.`);return!t.skipRegistration&&Ly.registerProperty({inherits:!0,name:c,initialValue:a,syntax:l.syntax})&&globalThis.document?.documentElement&&ss({forCssVar:l,onElement:globalThis.document.documentElement,toValue:s}),l})}function DD(e){try{if(T.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(t){throw new Error(hi("Invalid CSS var name.",t,`Got '${b(e)}'`))}}function jd(e){return e?T.isString(e)?e:e.union?e.union.map(t=>jd(t)).join(" | "):e.list?`${jd(e.list.values)}${e.list.separator}`:e.raw:ve.Any}const $e=Cn({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),xD={nav:{hover:{background:$e["element-book-nav-hover-background-color"],foreground:$e["element-book-nav-hover-foreground-color"]},active:{background:$e["element-book-nav-active-background-color"],foreground:$e["element-book-nav-active-foreground-color"]},selected:{background:$e["element-book-nav-selected-background-color"],foreground:$e["element-book-nav-selected-foreground-color"]}},accent:{icon:$e["element-book-accent-icon-color"]},page:{background:$e["element-book-page-background-color"],backgroundFaint1:$e["element-book-page-background-faint-level-1-color"],backgroundFaint2:$e["element-book-page-background-faint-level-2-color"],foreground:$e["element-book-page-foreground-color"],foregroundFaint1:$e["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:$e["element-book-page-foreground-faint-level-2-color"]}};function AD(e,t){qy(e,t,xD)}function Ud(e){return T.hasKey(e,"_$cssResult$")}function P0(e){return T.hasKeys(e,["name","value","default"])&&T.isString(e.default)&&Ud(e.name)&&Ud(e.value)}function qy(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Ud(o)){if(!P0(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);ss({forCssVar:i,onElement:e,toValue:String(o)})}else{if(P0(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);qy(e,o,i)}})}function ra(e,t){let r=e.length,n,o,i=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,i=!0),Array.isArray(t[0])?o=t:(o=t.length>0?t.map(c=>[c]):[[]],s=!0);let a=o[0].length,u=o[0].map((c,d)=>o.map(m=>m[d])),l=n.map(c=>u.map(d=>{let m=0;if(!Array.isArray(c)){for(let h of d)m+=c*h;return m}for(let h=0;h<c.length;h++)m+=c[h]*(d[h]||0);return m}));return r===1&&i&&(l=l[0]),a===1&&s?r===1&&i?l[0]:l.map(c=>c[0]):l}function zc(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function nt(e,t,r=[0,0,0]){const n=zc(e,t[0]),o=zc(e,t[1]),i=zc(e,t[2]);return r[0]=n,r[1]=o,r[2]=i,r}function Cs(e){return yo(e)==="string"}function yo(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Jf(e,{precision:t=16,unit:r}){return De(e)?"none":(e=+Yf(e,t),e+(r??""))}function De(e){return e===null}function mt(e){return De(e)?0:e}function Yf(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const o=10**(t-n);return Math.floor(e*o+.5)/o}function Ma(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Wy(e,t,r){return(r-e)/(t-e)}function _d(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:Ma(t[0],t[1],Wy(e[0],e[1],r))}function jl(e,t,r){return Math.max(Math.min(r,t),e)}function Ul(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function ht(e,t){return Ul(Math.abs(e)**t,e)}function Xf(e,t){return t===0?0:e/t}function Ky(e,t,r=0,n=e.length){for(;r<n;){const o=r+n>>1;e[o]<t?r=o+1:n=o}return r}function as(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===r)return!0;if(!o||o==="Object")return!1;e=n}return!1}var ED=Object.freeze({__proto__:null,bisectLeft:Ky,clamp:jl,copySign:Ul,interpolate:Ma,interpolateInv:Wy,isInstance:as,isNone:De,isString:Cs,mapRange:_d,multiplyMatrices:ra,multiply_v3_m3x3:nt,serializeNumber:Jf,skipNone:mt,spow:ht,toPrecision:Yf,type:yo,zdiv:Xf});class CD{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ko=new CD;var Fr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};let N0=class{type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:o,max:i}=n.groups;(o||i)&&(this.range=[+o,+i])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),_d(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return t=_d(this.coordRange,n,t),Jf(t,{unit:o,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return as(t,this)?t:new this(t,r)}};const qc=Symbol("instance");class cl{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[qc]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let i=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>N0.get(s,i))}))}serializeCoords(t,r,n){return n=t.map((o,i)=>N0.get(n?.[i]??this.coords[i][0],this.spaceCoords[i])),t.map((o,i)=>n[i].serialize(o,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,o],i)=>{let s=t[i];if(De(s)||isNaN(s))return s;let a=r[i],u=this.coords[i].find(l=>l.type==a);if(!u){let l=o.name||n;throw new TypeError(`${a??s?.raw??s} not allowed for ${l} in ${this.name}()`)}return s=u.resolve(s),u.range&&(r[i]=u.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||as(t,this)?t:t[qc]?t[qc]:new cl(t,...r)}}const nr={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Vd(e){return Array.isArray(e)?e:nr[e]}function dl(e,t,r,n={}){if(e=Vd(e),t=Vd(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ko.run("chromatic-adaptation-start",o),o.M||(o.W1===nr.D65&&o.W2===nr.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===nr.D50&&o.W2===nr.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ko.run("chromatic-adaptation-end",o),o.M)return nt(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Gy(e,t){let r={str:String(e)?.trim(),options:t};if(ko.run("parse-start",r),r.color)return r.color;r.parsed=SD(r.str);let n,o=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let i=r.parsed.name,s,a,u=r.parsed.args,l=u.map((m,h)=>r.parsed.argMeta[h]?.type);if(i==="color"){let m=u.shift();l.shift();let h=m.startsWith("--")?m.substring(2):`--${m}`,v=[m,h];if(s=V.findFormat({name:i,id:v,type:"function"}),!s){let $,D=m in V.registry?m:h;if(D in V.registry){let k=V.registry[D].formats?.color?.id;k&&($=`Did you mean ${e.replace("color("+m,"color("+k)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+($??"Missing a plugin?"))}a=s.space,s.id.startsWith("--")&&!m.startsWith("--")&&Fr.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${m}).`),m.startsWith("--")&&!s.id.startsWith("--")&&Fr.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${m}).`)}else s=V.findFormat({name:i,type:"function"}),a=s.space;o&&Object.assign(o,{format:s,formatId:s.name,types:l,commas:r.parsed.commas});let c=1;r.parsed.lastAlpha&&(c=r.parsed.args.pop(),o&&(o.alphaType=l.pop()));let d=s.coords.length;if(u.length!==d)throw new TypeError(`Expected ${d} coordinates for ${a.id} in ${r.str}), got ${u.length}`);u=s.coerceCoords(u,l),n={spaceId:a.id,coords:u,alpha:c}}else e:for(let i of V.all)for(let s in i.formats){let a=i.formats[s];if(a.type!=="custom"||a.test&&!a.test(r.str))continue;let u=i.getFormat(a),l=u.parse(r.str);if(l){o&&Object.assign(o,{format:u,formatId:s}),n=l;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=De(n.alpha)?n.alpha:n.alpha===void 0?1:jl(0,n.alpha,1),n}const Zy={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},fl={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Zy).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function FD(e){let t={},r=e.match(fl.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*Zy[r]):fl.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}function SD(e){if(!e)return;e=e.trim();let t=e.match(fl.function);if(t){let r=[],n=[],o=!1,i=t[1].toLowerCase(),s=t[2].replace(fl.singleArgument,(a,u)=>{let{value:l,meta:c}=FD(u);return(a.startsWith("/")||i!=="color"&&r.length===3)&&(o=!0),r.push(l),n.push(c),""});return{name:i,args:r,argMeta:n,lastAlpha:o,commas:s.includes(","),rawName:t[1],rawArgs:t[2]}}}function ee(e,t){if(Array.isArray(e))return e.map(n=>ee(n,t));if(!e)throw new TypeError("Empty color reference");Cs(e)&&(e=Gy(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=V.get(r)),e.alpha===void 0&&(e.alpha=1),e}const TD=75e-6;class V{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?V.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let o in r)"name"in r[o]||(r[o].name=o);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Vd(n),this.formats=t.formats??{};for(let o in this.formats){let i=this.formats[o];i.type||="function",i.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:V.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,i)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:MD(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ko.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=TD}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let s=n[i];if(s.type!=="angle"&&s.range){if(De(o))return!0;let[a,u]=s.range;return(a===void 0||o>=a-r)&&(u===void 0||o<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=cl.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=ee(t);[t,r]=[a.space,a.coords]}if(t=V.get(t),this.equals(t))return r;r=r.map(a=>De(a)?0:a);let n=this.path,o=t.path,i,s;for(let a=0;a<n.length&&n[a].equals(o[a]);a++)i=n[a],s=a;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<o.length;a++)r=o[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=ee(t);[t,r]=[n.space,n.coords]}return t=V.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push(o?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(V.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||as(t,this))return t;if(yo(t)==="string"){let o=V.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return V.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=V.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[o,i]of Object.entries(n.formats)){i.name??=o,i.type??="function";let s=(!t.name||i.name===t.name)&&(!t.type||i.type===t.type);if(t.id){let a=i.ids||[i.id],u=Array.isArray(t.id)?t.id:[t.id];s&&=u.some(l=>a.includes(l))}if(s){let a=cl.get(i,n);return a!==i&&(n.formats[i.name]=a),a}}return null}static resolveCoord(t,r){let n=yo(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=V.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=yo(i),n==="number"||n==="string"&&i>=0){let u=Object.entries(o.coords)[i];if(u)return{space:o,id:u[0],index:i,...u[1]}}o=V.get(o);let s=i.toLowerCase(),a=0;for(let u in o.coords){let l=o.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:o,id:u,index:a,...l};a++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function MD(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Rt=new V({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Ht extends V{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Rt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=nt(r,t.toXYZ_M);return this.white!==this.base.white&&(n=dl(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=dl(this.base.white,this.white,r),nt(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function Hy(e,t={}){if(Array.isArray(e))return e.map(u=>Hy(u,t));let{cssProperty:r="background-color",element:n,...o}=t,i=null;try{return ee(e,o)}catch(u){i=u}let{CSS:s,getComputedStyle:a}=globalThis;if(Cs(e)&&n&&s&&a&&s.supports(r,e)){let u=n.style[r];e!==u&&(n.style[r]=e);let l=a(n).getPropertyValue(r);if(e!==u&&(n.style[r]=u),l!==e)try{return ee(l,o)}catch(c){i=c}else i={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=i),null}function Za(e,t){e=ee(e);let r=V.get(t,t?.space),n=t?.precision,o;return!r||e.space.equals(r)?o=e.coords.slice():o=r.from(e),n===void 0?o:o.map(i=>Yf(i,n))}function Dr(e,t){if(e=ee(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=V.resolveCoord(t,e.space);return Za(e,r)[n]}function Qf(e,t,r,n){return e=ee(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=V.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}Qf.returns="color";function Xn(e,t,r){if(e=ee(e),arguments.length===2&&yo(arguments[1])==="object"){let n=arguments[1];for(let o in n)Xn(e,o,n[o])}else if(typeof r=="function"&&(r=r(Dr(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:o}=V.resolveCoord(t,e.space),i=Za(e,n);i[o]=r,Qf(e,n,i)}return e}Xn.returns="color";var em=new V({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Rt,fromBase:e=>dl(Rt.white,"D50",e),toBase:e=>dl("D50",Rt.white,e)});const PD=216/24389,I0=24/116,$u=24389/27;let Wc=nr.D50;var xr=new V({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Wc,base:em,fromBase(e){let r=e.map((s,a)=>s/Wc[a]).map(s=>s>PD?Math.cbrt(s):($u*s+16)/116),n=116*r[1]-16,o=500*(r[0]-r[1]),i=200*(r[1]-r[2]);return[n,o,i]},toBase(e){let[t,r,n]=e,o=[];return o[1]=(t+16)/116,o[0]=r/500+o[1],o[2]=o[1]-n/200,[o[0]>I0?Math.pow(o[0],3):(116*o[0]-16)/$u,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/$u,o[2]>I0?Math.pow(o[2],3):(116*o[2]-16)/$u].map((s,a)=>s*Wc[a])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Gr(e){return typeof e!="number"?e:(e%360+360)%360}function Jy(e,t){let[r,n]=t,o=De(r),i=De(n);if(o&&i)return[r,n];if(o?r=n:i&&(n=r),e==="raw")return t;r=Gr(r),n=Gr(n);let s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var Sr=new V({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:xr,fromBase(e){if(this.ε===void 0){let a=Object.values(this.base.coords)[1].refRange,u=a[1]-a[0];this.ε=u/1e5}let[t,r,n]=e,o=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,i=o?null:Gr(Math.atan2(n,r)*180/Math.PI),s=o?0:Math.sqrt(r**2+n**2);return[t,s,i]},toBase(e){let[t,r,n]=e,o=null,i=null;return De(n)||(r=r<0?0:r,o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const O0=25**7,ml=Math.PI,B0=180/ml,Ii=ml/180;function R0(e){const t=e*e;return t*t*t*e}function Yy(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){[e,t]=ee([e,t]);let[i,s,a]=xr.from(e),u=Sr.from(xr,[i,s,a])[1],[l,c,d]=xr.from(t),m=Sr.from(xr,[l,c,d])[1];u<0&&(u=0),m<0&&(m=0);let h=(u+m)/2,v=R0(h),$=.5*(1-Math.sqrt(v/(v+O0))),D=(1+$)*s,k=(1+$)*c,E=Math.sqrt(D**2+a**2),N=Math.sqrt(k**2+d**2),B=D===0&&a===0?0:Math.atan2(a,D),q=k===0&&d===0?0:Math.atan2(d,k);B<0&&(B+=2*ml),q<0&&(q+=2*ml),B*=B0,q*=B0;let ne=l-i,xe=N-E,pe=q-B,je=B+q,At=Math.abs(pe),Nt;E*N===0?Nt=0:At<=180?Nt=pe:pe>180?Nt=pe-360:pe<-180?Nt=pe+360:Fr.warn("the unthinkable has happened");let vr=2*Math.sqrt(N*E)*Math.sin(Nt*Ii/2),vn=(i+l)/2,Xr=(E+N)/2,Oo=R0(Xr),Yt;E*N===0?Yt=je:At<=180?Yt=je/2:je<360?Yt=(je+360)/2:Yt=(je-360)/2;let Fi=(vn-50)**2,Si=1+.015*Fi/Math.sqrt(20+Fi),ro=1+.045*Xr,Xt=1;Xt-=.17*Math.cos((Yt-30)*Ii),Xt+=.24*Math.cos(2*Yt*Ii),Xt+=.32*Math.cos((3*Yt+6)*Ii),Xt-=.2*Math.cos((4*Yt-63)*Ii);let Ue=1+.015*Xr*Xt,Qt=30*Math.exp(-1*((Yt-275)/25)**2),Pn=2*Math.sqrt(Oo/(Oo+O0)),Rr=-1*Math.sin(2*Qt*Ii)*Pn,wn=(ne/(r*Si))**2;return wn+=(xe/(n*ro))**2,wn+=(vr/(o*Ue))**2,wn+=Rr*(xe/(n*ro))*(vr/(o*Ue)),Math.sqrt(wn)}const ND=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],ID=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],OD=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],vo=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var cn=new V({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Rt,fromBase(e){let t=nt(e,ND);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),nt(t,OD,t)},toBase(e){let t=nt(e,vo);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,nt(t,ID,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function zd(e,t){[e,t]=ee([e,t]);let[r,n,o]=cn.from(e),[i,s,a]=cn.from(t),u=r-i,l=n-s,c=o-a;return Math.sqrt(u**2+l**2+c**2)}const BD=75e-6;function ri(e,t,{epsilon:r=BD}={}){e=ee(e),t||(t=e.space),t=V.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function us(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Xy(e,t,r="lab"){r=V.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,s,a)=>{let u=o[a];return De(s)||De(u)?i:i+(u-s)**2},0))}function RD(e,t){return Xy(e,t,"lab")}const LD=Math.PI,L0=LD/180;function jD(e,t,{l:r=2,c:n=1}={}){[e,t]=ee([e,t]);let[o,i,s]=xr.from(e),[,a,u]=Sr.from(xr,[o,i,s]),[l,c,d]=xr.from(t),m=Sr.from(xr,[l,c,d])[1];a<0&&(a=0),m<0&&(m=0);let h=o-l,v=a-m,$=i-c,D=s-d,k=$**2+D**2-v**2,E=.511;o>=16&&(E=.040975*o/(1+.01765*o));let N=.0638*a/(1+.0131*a)+.638,B;De(u)&&(u=0),u>=164&&u<=345?B=.56+Math.abs(.2*Math.cos((u+168)*L0)):B=.36+Math.abs(.4*Math.cos((u+35)*L0));let q=Math.pow(a,4),ne=Math.sqrt(q/(q+1900)),xe=N*(ne*B+1-ne),pe=(h/(r*E))**2;return pe+=(v/(n*N))**2,pe+=k/xe**2,Math.sqrt(pe)}const j0=203;var tm=new V({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Rt,fromBase(e){return e.map(t=>t*j0)},toBase(e){return e.map(t=>t/j0)}});const ku=1.15,Du=.66,U0=2610/2**14,UD=2**14/2610,_0=3424/2**12,V0=2413/2**7,z0=2392/2**7,_D=1.7*2523/2**5,q0=2**5/(1.7*2523),xu=-.56,Kc=16295499532821565e-27,VD=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],zD=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],qD=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],WD=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var Qy=new V({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:tm,fromBase(e){let[t,r,n]=e,o=ku*t-(ku-1)*n,i=Du*r-(Du-1)*t,a=nt([o,i,n],VD).map(function(m){let h=_0+V0*ht(m/1e4,U0),v=1+z0*ht(m/1e4,U0);return ht(h/v,_D)}),[u,l,c]=nt(a,qD);return[(1+xu)*u/(1+xu*u)-Kc,l,c]},toBase(e){let[t,r,n]=e,o=(t+Kc)/(1+xu-xu*(t+Kc)),s=nt([o,r,n],WD).map(function(m){let h=_0-ht(m,q0),v=z0*ht(m,q0)-V0;return 1e4*ht(h/v,UD)}),[a,u,l]=nt(s,zD),c=(a+(ku-1)*l)/ku,d=(u+(Du-1)*c)/Du;return[c,d,l]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),qd=new V({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Qy,fromBase:Sr.fromBase,toBase:Sr.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function KD(e,t){[e,t]=ee([e,t]);let[r,n,o]=qd.from(e),[i,s,a]=qd.from(t),u=r-i,l=n-s;De(o)&&De(a)?(o=0,a=0):De(o)?o=a:De(a)&&(a=o);let c=o-a,d=2*Math.sqrt(n*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+d**2)}const e1=3424/4096,t1=2413/128,r1=2392/128,W0=2610/16384,GD=2523/32,ZD=16384/2610,K0=32/2523,HD=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],JD=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],YD=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],XD=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Wd=new V({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:tm,fromBase(e){let t=nt(e,HD);return QD(t)},toBase(e){let t=ex(e);return nt(t,XD)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function QD(e){let t=e.map(function(r){let n=e1+t1*(r/1e4)**W0,o=1+r1*(r/1e4)**W0;return(n/o)**GD});return nt(t,JD)}function ex(e){return nt(e,YD).map(function(n){let o=Math.max(n**K0-e1,0),i=t1-r1*n**K0;return 1e4*(o/i)**ZD})}function tx(e,t){[e,t]=ee([e,t]);let[r,n,o]=Wd.from(e),[i,s,a]=Wd.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-s)**2+(o-a)**2)}function rx(e,t){[e,t]=ee([e,t]);let r=2,[n,o,i]=cn.from(e),[s,a,u]=cn.from(t),l=n-s,c=r*(o-a),d=r*(i-u);return Math.sqrt(l**2+c**2+d**2)}const nx=nr.D65,n1=.42,G0=1/n1,Gc=2*Math.PI,o1=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],ox=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],ix=[[460,451,288],[460,-891,-261],[460,-220,-6300]],sx={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},qo={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},ax=180/Math.PI,Z0=Math.PI/180;function i1(e,t){return e.map(n=>{const o=ht(t*Math.abs(n)*.01,n1);return 400*Ul(o,n)/(o+27.13)})}function ux(e,t){const r=100/t*27.13**G0;return e.map(n=>{const o=Math.abs(n);return Ul(r*ht(o/(400-o),G0),n)})}function lx(e){let t=Gr(e);t<=qo.h[0]&&(t+=360);const r=Ky(qo.h,t)-1,[n,o]=qo.h.slice(r,r+2),[i,s]=qo.e.slice(r,r+2),a=qo.H[r],u=(t-n)/i;return a+100*u/(u+(o-t)/s)}function cx(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,o]=qo.h.slice(r,r+2),[i,s]=qo.e.slice(r,r+2);return Gr((t*(s*n-i*o)-100*n*s)/(t*(s-i)-100*s))}function s1(e,t,r,n,o){const i={};i.discounting=o,i.refWhite=e,i.surround=n;const s=e.map(D=>D*100);i.la=t,i.yb=r;const a=s[1],u=nt(s,o1);let l=sx[i.surround];const c=l[0];i.c=l[1],i.nc=l[2];const m=(1/(5*i.la+1))**4;i.fl=m*i.la+.1*(1-m)*(1-m)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/a,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const h=Math.max(Math.min(c*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=u.map(D=>Ma(1,a/D,h)),i.dRgbInv=i.dRgb.map(D=>1/D);const v=u.map((D,k)=>D*i.dRgb[k]),$=i1(v,i.fl);return i.aW=i.nbb*(2*$[0]+$[1]+.05*$[2]),i}const H0=s1(nx,64/Math.PI*.2,20,"average",!1);function Kd(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Gr(e.h)*Z0:r=cx(e.H)*Z0;const n=Math.cos(r),o=Math.sin(r);let i=0;e.J!==void 0?i=ht(e.J,1/2)*.1:e.Q!==void 0&&(i=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/i:e.M!==void 0?s=e.M/t.flRoot/i:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=ht(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*ht(i,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,d=l/t.nbb,m=23*(d+.305)*Xf(a,23*c+a*(11*n+108*o)),h=m*n,v=m*o,$=ux(nt([d,h,v],ix).map(D=>D*1/1403),t.fl);return nt($.map((D,k)=>D*t.dRgbInv[k]),ox).map(D=>D/100)}function a1(e,t){const r=e.map(N=>N*100),n=i1(nt(r,o1).map((N,B)=>N*t.dRgb[B]),t.fl),o=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(i,o)%Gc+Gc)%Gc,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*Xf(a*Math.sqrt(o**2+i**2),n[0]+n[1]+1.05*n[2]+.305),l=ht(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),d=ht(c/t.aW,.5*t.c*t.z),m=100*ht(d,2),h=4/t.c*d*(t.aW+4)*t.flRoot,v=l*d,$=v*t.flRoot,D=Gr(s*ax),k=lx(D),E=50*ht(t.c*l/(t.aW+4),1/2);return{J:m,C:v,h:D,s:E,Q:h,M:$,H:k}}var dx=new V({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Rt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=a1(e,H0),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return Kd({J:e[0],M:e[1],h:e[2]},H0)}});const fx=nr.D65,mx=216/24389,u1=24389/27;function hx(e){return 116*(e>mx?Math.cbrt(e):(u1*e+16)/116)-16}function Gd(e){return e>8?Math.pow((e+16)/116,3):e/u1}function gx(e,t){let[r,n,o]=e,i=[],s=0;if(o===0)return[0,0,0];let a=Gd(o);o>0?s=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:s=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const u=2e-12,l=15;let c=0,d=1/0;for(;c<=l;){i=Kd({J:s,C:n,h:r},t);const m=Math.abs(i[1]-a);if(m<d){if(m<=u)return i;d=m}s=s-(i[1]-a)*s/(2*i[1]),c+=1}return Kd({J:s,C:n,h:r},t)}function px(e,t){const r=hx(e[1]);if(r===0)return[0,0,0];const n=a1(e,rm);return[Gr(n.h),n.C,r]}const rm=s1(fx,200/Math.PI*Gd(50),Gd(50)*100,"average",!1);var Pa=new V({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Rt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=px(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return gx(e,rm)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const bx=Math.PI/180,J0=[1,.007,.0228];function Y0(e){e[1]<0&&(e=Pa.fromBase(Pa.toBase(e)));const t=Math.log(Math.max(1+J0[2]*e[1]*rm.flRoot,1))/J0[2],r=e[0]*bx,n=t*Math.cos(r),o=t*Math.sin(r);return[e[2],n,o]}function yx(e,t){[e,t]=ee([e,t]);let[r,n,o]=Y0(Pa.from(e)),[i,s,a]=Y0(Pa.from(t));return Math.sqrt((r-i)**2+(n-s)**2+(o-a)**2)}var ls={deltaE76:RD,deltaECMC:jD,deltaE2000:Yy,deltaEJz:KD,deltaEITP:tx,deltaEOK:zd,deltaEOK2:rx,deltaEHCT:yx};function vx(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const X0={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Do(e,{method:t=Fr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:i=void 0}={}){if(e=ee(e),Cs(arguments[1])?r=arguments[1]:r||(r=e.space),r=V.get(r),ri(e,r,{epsilon:0}))return e;let s;if(t==="css")s=wx(e,{space:r});else{if(t!=="clip"&&!ri(e,r)){Object.prototype.hasOwnProperty.call(X0,t)&&({method:t,jnd:o,deltaEMethod:n,blackWhiteClamp:i}=X0[t]);let a=Yy;if(n!==""){for(let l in ls)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=ls[l];break}}o===0&&(o=1e-16);let u=Do(Ie(e,r),{method:"clip",space:r});if(a(e,u)>o){if(i&&Object.keys(i).length===3){let E=V.resolveCoord(i.channel),N=Dr(Ie(e,E.space),E.id);if(De(N)&&(N=0),N>=i.max)return Ie({space:"xyz-d65",coords:nr.D65},e.space);if(N<=i.min)return Ie({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=V.resolveCoord(t),c=l.space,d=l.id,m=Ie(e,c);m.coords.forEach((E,N)=>{De(E)&&(m.coords[N]=0)});let v=(l.range||l.refRange)[0],$=vx(o),D=v,k=Dr(m,d);for(;k-D>$;){let E=us(m);E=Do(E,{space:r,method:"clip"}),a(m,E)-o<$?D=Dr(m,d):k=Dr(m,d),Xn(m,d,(D+k)/2)}s=Ie(m,r)}else s=u}else s=Ie(e,r);if(t==="clip"||!ri(s,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,d]=a[l];return c!==void 0&&(u=Math.max(c,u)),d!==void 0&&(u=Math.min(u,d)),u})}}return r!==e.space&&(s=Ie(s,e.space)),e.coords=s.coords,e}Do.returns="color";const Q0={WHITE:{space:cn,coords:[1,0,0],alpha:1},BLACK:{space:cn,coords:[0,0,0],alpha:1}};function wx(e,{space:t}={}){e=ee(e),t||(t=e.space),t=V.get(t);const o=V.get("oklch");if(t.isUnbounded)return Ie(e,t);const i=Ie(e,o);let s=i.coords[0];if(s>=1){const v=Ie(Q0.WHITE,t);return v.alpha=e.alpha,Ie(v,t)}if(s<=0){const v=Ie(Q0.BLACK,t);return v.alpha=e.alpha,Ie(v,t)}if(ri(i,t,{epsilon:0}))return Ie(i,t);function a(v){const $=Ie(v,t),D=Object.values(t.coords);return $.coords=$.coords.map((k,E)=>{if("range"in D[E]){const[N,B]=D[E].range;return jl(N,k,B)}return k}),$}let u=0,l=i.coords[1],c=!0,d=us(i),m=a(d),h=zd(m,d);if(h<.02)return m;for(;l-u>1e-4;){const v=(u+l)/2;if(d.coords[1]=v,c&&ri(d,t,{epsilon:0}))u=v;else if(m=a(d),h=zd(m,d),h<.02){if(.02-h<1e-4)break;c=!1,u=v}else l=v}return m}function Ie(e,t,{inGamut:r}={}){e=ee(e),t=V.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Do(o,r===!0?void 0:r)),o}Ie.returns="color";function fa(e,t={}){let{precision:r=Fr.precision,format:n,inGamut:o=!0,coords:i,alpha:s,commas:a}=t,u,l=ee(e),c=n,d=l.parseMeta;d&&!n&&(d.format.canSerialize()&&(n=d.format,c=d.formatId),i??=d.types,s??=d.alphaType,a??=d.commas),c&&(n=l.space.getFormat(n)??V.findFormat(c)),n||(n=l.space.getFormat("default")??V.DEFAULT_FORMAT,c=n.name),n&&n.space&&n.space!==l.space&&(l=Ie(l,n.space));let m=l.coords.slice();if(o||=n.toGamut,o&&!ri(l)&&(m=Do(us(l),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)u=n.serialize(m,l.alpha,t);else throw new TypeError(`format ${c} can only be used to parse colors, not for serialization`);else{let h=n.name||"color",v=n.serializeCoords(m,r,i);if(h==="color"){let N=n.id||n.ids?.[0]||l.space.cssId||l.space.id;v.unshift(N)}let $=l.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let D=s?.type??"<number>",k=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&$<1,E="";if(a??=n.commas,k){if(r!==null){let N;D==="<percentage>"&&(N="%",$*=100),$=Jf($,{precision:r,unit:N})}E=`${a?",":" /"} ${$}`}u=`${h}(${v.join(a?", ":" ")}${E})`}return u}const $x=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],kx=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Na=new Ht({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:$x,fromXYZ_M:kx}),l1=new Ht({id:"rec2020",name:"REC.2020",base:Na,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const Dx=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],xx=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var c1=new Ht({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Dx,fromXYZ_M:xx});const Ax=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],xt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var d1=new Ht({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Ax,fromXYZ_M:xt}),eg={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let tg=Array(3).fill("<percentage> | <number>[0, 255]"),rg=Array(3).fill("<number>[0, 255]");var ai=new Ht({id:"srgb",name:"sRGB",base:d1,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:tg},rgb_number:{name:"rgb",commas:!0,coords:rg,alpha:!1},color:{},rgba:{coords:tg,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:rg},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let o=r&&e.every(s=>s%17===0);return"#"+e.map(s=>o?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=eg.black,t.alpha=0):t.coords=eg[e],t.coords)return t}}}}),f1=new Ht({id:"p3",cssId:"display-p3",name:"P3",base:c1,fromBase:ai.fromBase,toBase:ai.toBase});Fr.display_space=ai;let Ex;if(typeof CSS<"u"&&CSS.supports)for(let e of[xr,l1,f1]){let t=e.getMinCoords(),n=fa({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Fr.display_space=e;break}}function Cx(e,{space:t=Fr.display_space,...r}={}){e=ee(e);let n=fa(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Fr.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(De)||De(e.alpha))&&!(Ex??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=us(e),o.coords=o.coords.map(mt),o.alpha=mt(o.alpha),n=fa(o,r),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=Ie(o,t),n=new String(fa(o,r)),n.color=o}return n}function Fx(e,t,{space:r,hue:n="shorter"}={}){e=ee(e),r||=e.space,r=V.get(r);let o=Object.values(r.coords);[e,t]=[e,t].map(l=>Ie(l,r));let[i,s]=[e,t].map(l=>l.coords),a=i.map((l,c)=>{let d=o[c],m=s[c];return d.type==="angle"&&([l,m]=Jy(n,[l,m])),ng(l,m)}),u=ng(e.alpha,t.alpha);return{space:r,coords:a,alpha:u}}function ng(e,t){return De(e)||De(t)?e===t?null:0:e-t}function Sx(e,t){return e=ee(e),t=ee(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function xo(e){return Dr(e,[Rt,"y"])}function m1(e,t){Xn(e,[Rt,"y"],t)}function Tx(e){Object.defineProperty(e.prototype,"luminance",{get(){return xo(this)},set(t){m1(this,t)}})}var Mx=Object.freeze({__proto__:null,getLuminance:xo,register:Tx,setLuminance:m1});function Px(e,t){e=ee(e),t=ee(t);let r=Math.max(xo(e),0),n=Math.max(xo(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Nx=.56,Ix=.57,Ox=.62,Bx=.65,og=.022,Rx=1.414,Lx=.1,jx=5e-4,Ux=1.14,ig=.027,_x=1.14;function sg(e){return e>=og?e:e+(og-e)**Rx}function Oi(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Vx(e,t){t=ee(t),e=ee(e);let r,n,o,i,s,a;t=Ie(t,"srgb"),[i,s,a]=t.coords.map(h=>De(h)?0:h);let u=Oi(i)*.2126729+Oi(s)*.7151522+Oi(a)*.072175;e=Ie(e,"srgb"),[i,s,a]=e.coords.map(h=>De(h)?0:h);let l=Oi(i)*.2126729+Oi(s)*.7151522+Oi(a)*.072175,c=sg(u),d=sg(l),m=d>c;return Math.abs(d-c)<jx?n=0:m?(r=d**Nx-c**Ix,n=r*Ux):(r=d**Bx-c**Ox,n=r*_x),Math.abs(n)<Lx?o=0:n>0?o=n-ig:o=n+ig,o*100}function zx(e,t){e=ee(e),t=ee(t);let r=Math.max(xo(e),0),n=Math.max(xo(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const qx=5e4;function Wx(e,t){e=ee(e),t=ee(t);let r=Math.max(xo(e),0),n=Math.max(xo(t),0);return n>r&&([r,n]=[n,r]),n===0?qx:(r-n)/n}function Kx(e,t){e=ee(e),t=ee(t);let r=Dr(e,[xr,"l"]),n=Dr(t,[xr,"l"]);return Math.abs(r-n)}const Gx=216/24389,ag=24/116,Au=24389/27;let Zc=nr.D65;var Zd=new V({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Zc,base:Rt,fromBase(e){let r=e.map((n,o)=>n/Zc[o]).map(n=>n>Gx?Math.cbrt(n):(Au*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ag?Math.pow(t[0],3):(116*t[0]-16)/Au,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Au,t[2]>ag?Math.pow(t[2],3):(116*t[2]-16)/Au].map((n,o)=>n*Zc[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const Hc=Math.pow(5,.5)*.5+.5;function Zx(e,t){e=ee(e),t=ee(t);let r=Dr(e,[Zd,"l"]),n=Dr(t,[Zd,"l"]),o=Math.abs(Math.pow(r,Hc)-Math.pow(n,Hc)),i=Math.pow(o,1/Hc)*Math.SQRT2-40;return i<7.5?0:i}var qu=Object.freeze({__proto__:null,contrastAPCA:Vx,contrastDeltaPhi:Zx,contrastLstar:Kx,contrastMichelson:zx,contrastWCAG21:Px,contrastWeber:Wx});function Hx(e,t,r){Cs(r)&&(r={algorithm:r});let{algorithm:n,...o}=r||{};if(!n){let i=Object.keys(qu).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=ee(e),t=ee(t);for(let i in qu)if("contrast"+n.toLowerCase()===i.toLowerCase())return qu[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function _l(e){let[t,r,n]=Za(e,Rt),o=t+15*r+3*n;return[4*t/o,9*r/o]}function h1(e){let[t,r,n]=Za(e,Rt),o=t+r+n;return[t/o,r/o]}function Jx(e){Object.defineProperty(e.prototype,"uv",{get(){return _l(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return h1(this)}})}var Yx=Object.freeze({__proto__:null,register:Jx,uv:_l,xy:h1});function na(e,t,r={}){Cs(r)&&(r={method:r});let{method:n=Fr.deltaE,...o}=r;for(let i in ls)if("deltae"+n.toLowerCase()===i.toLowerCase())return ls[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function g1(e,t=.25){let n=[V.get("oklch","lch"),"l"];return Xn(e,n,o=>o*(1+t))}function p1(e,t=.25){let n=[V.get("oklch","lch"),"l"];return Xn(e,n,o=>o*(1-t))}g1.returns="color";p1.returns="color";var Xx=Object.freeze({__proto__:null,darken:p1,lighten:g1});function b1(e,t,r,n={}){return[e,t]=[ee(e),ee(t)],yo(r)==="object"&&([r,n]=[.5,r]),Ha(e,t,n)(r??.5)}function y1(e,t,r={}){let n;nm(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:s=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[ee(e),ee(t)],n=Ha(e,t,u));let l=na(e,t),c=o>0?Math.max(s,Math.ceil(l/o)+1):s,d=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)d=[{p:.5,color:n(.5)}];else{let m=1/(c-1);d=Array.from({length:c},(h,v)=>{let $=v*m;return{p:$,color:n($)}})}if(o>0){let m=d.reduce((h,v,$)=>{if($===0)return 0;let D=na(v.color,d[$-1].color,i);return Math.max(h,D)},0);for(;m>o;){m=0;for(let h=1;h<d.length&&d.length<a;h++){let v=d[h-1],$=d[h],D=($.p+v.p)/2,k=n(D);m=Math.max(m,na(k,v.color),na(k,$.color)),d.splice(h,0,{p:D,color:n(D)}),h++}}}return d=d.map(m=>m.color),d}function Ha(e,t,r={}){if(nm(e)){let[u,l]=[e,t];return Ha(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:o,progression:i,premultiplied:s}=r;e=ee(e),t=ee(t),e=us(e),t=us(t);let a={colors:[e,t],options:r};if(n?n=V.get(n):n=V.registry[Fr.interpolationSpace]||e.space,o=o?V.get(o):n,e=Ie(e,n),t=Ie(t,n),e=Do(e),t=Do(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,d]=[Dr(e,l),Dr(t,l)];De(c)&&!De(d)?c=d:De(d)&&!De(c)&&(d=c),[c,d]=Jy(u,[c,d]),Xn(e,l,c),Xn(t,l,d)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=i?i(u):u;let l=e.coords.map((m,h)=>{let v=t.coords[h];return Ma(m,v,u)}),c=Ma(e.alpha,t.alpha,u),d={space:n,coords:l,alpha:c};return s&&(d.coords=d.coords.map(m=>m/c)),o!==n&&(d=Ie(d,o)),d},{rangeArgs:a})}function nm(e){return yo(e)==="function"&&!!e.rangeArgs}Fr.interpolationSpace="lab";function Qx(e){e.defineFunction("mix",b1,{returns:"color"}),e.defineFunction("range",Ha,{returns:"function<color>"}),e.defineFunction("steps",y1,{returns:"array<color>"})}var eA=Object.freeze({__proto__:null,isRange:nm,mix:b1,range:Ha,register:Qx,steps:y1}),tA=new V({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ai,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,u]=[null,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:s=(o-i)/l+(o<i?6:0);break;case o:s=(i-n)/l+2;break;case i:s=(n-o)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),v1=new V({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:ai,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,u]=[null,0,t],l=t-r;if(l!==0){switch(t){case n:s=(o-i)/l+(o<i?6:0);break;case o:s=(i-n)/l+2;break;case i:s=(n-o)/l+4}s=s*60}return u&&(a=l/u),s>=360&&(s-=360),[s,a*100,u*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/60)%6;return n-n*r*Math.max(0,Math.min(s,4-s,1))}return[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),rA=new V({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:v1,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let a=r/o;return[t,0,a*100]}let i=1-n,s=i===0?0:1-r/i;return[t,s*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const nA=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],oA=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var w1=new Ht({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:nA,fromXYZ_M:oA}),iA=new Ht({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:w1,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const sA=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],aA=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var $1=new Ht({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:em,toXYZ_M:sA,fromXYZ_M:aA});const uA=1/512,lA=16/512;var cA=new Ht({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:$1,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<lA?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=uA?r*n**(1/1.8):16*t})}});const Eu=1.09929682680944,ug=.018053968510807;var dA=new Ht({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Na,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<ug*4.5?t/4.5:r*Math.pow((n+Eu-1)/Eu,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=ug?r*(Eu*Math.pow(n,.45)-(Eu-1)):4.5*t})}}),fA=new V({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:cn,fromBase:Sr.fromBase,toBase:Sr.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const cs=2*Math.PI,hl=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],gl=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Jc=Number.MAX_VALUE,ma=.206,om=.03,oa=(1+ma)/(1+om);function It(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((o,i)=>{n+=o*t[i]}),n}function ha(e){return .5*(oa*e-ma+Math.sqrt((oa*e-ma)*(oa*e-ma)+4*om*oa*e))}function Yi(e){return(e**2+ma*e)/(oa*(e+om))}function im(e){let[t,r]=e;return[r/t,r/(1-t)]}function mA(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}function sm(e,t){let r=nt(e,vo);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,nt(r,t,r)}function Vl(e,t,r,n){let o=gA(e,t,r,n),i=sm([1,o*e,o*t],r),s=ht(1/Math.max(...i),1/3),a=s*o;return[s,a]}function hA(e,t,r,n,o,i,s,a){let u;if(a===void 0&&(a=Vl(e,t,i,s)),(r-o)*a[1]-(a[0]-o)*n<=0)u=a[1]*o/(n*a[0]+a[1]*(o-r));else{u=a[1]*(o-1)/(n*(a[0]-1)+a[1]*(o-r));let l=r-o,c=n,d=It(vo[0].slice(1),[e,t]),m=It(vo[1].slice(1),[e,t]),h=It(vo[2].slice(1),[e,t]),v=l+c*d,$=l+c*m,D=l+c*h,k=o*(1-u)+u*r,E=u*n,N=k+E*d,B=k+E*m,q=k+E*h,ne=N**3,xe=B**3,pe=q**3,je=3*v*N**2,At=3*$*B**2,Nt=3*D*q**2,vr=6*v**2*N,vn=6*$**2*B,Xr=6*D**2*q,Oo=It(i[0],[ne,xe,pe])-1,Yt=It(i[0],[je,At,Nt]),Fi=It(i[0],[vr,vn,Xr]),Si=Yt/(Yt*Yt-.5*Oo*Fi),ro=-Oo*Si,Xt=It(i[1],[ne,xe,pe])-1,Ue=It(i[1],[je,At,Nt]),Qt=It(i[1],[vr,vn,Xr]),Pn=Ue/(Ue*Ue-.5*Xt*Qt),Rr=-Xt*Pn,wn=It(i[2],[ne,xe,pe])-1,no=It(i[2],[je,At,Nt]),cu=It(i[2],[vr,vn,Xr]),du=no/(no*no-.5*wn*cu),Ti=-wn*du;ro=Si>=0?ro:Jc,Rr=Pn>=0?Rr:Jc,Ti=du>=0?Ti:Jc,u+=Math.min(ro,Math.min(Rr,Ti))}return u}function k1(e,t,r){let[n,o,i]=e,s=Vl(o,i,t,r),a=hA(o,i,n,1,n,t,r,s),u=im(s),l=a/Math.min(n*u[0],(1-n)*u[1]),c=mA(o,i),d=n*c[0],m=(1-n)*c[1],h=.9*l*Math.sqrt(Math.sqrt(1/(1/d**4+1/m**4)));return d=n*.4,m=(1-n)*.8,[Math.sqrt(1/(1/d**2+1/m**2)),h,a]}function gA(e,t,r,n){let o,i,s,a,u,l,c,d;It(n[0][0],[e,t])>1?([o,i,s,a,u]=n[0][1],[l,c,d]=r[0]):It(n[1][0],[e,t])>1?([o,i,s,a,u]=n[1][1],[l,c,d]=r[1]):([o,i,s,a,u]=n[2][1],[l,c,d]=r[2]);let m=o+i*e+s*t+a*e**2+u*e*t,h=It(vo[0].slice(1),[e,t]),v=It(vo[1].slice(1),[e,t]),$=It(vo[2].slice(1),[e,t]),D=1+m*h,k=1+m*v,E=1+m*$,N=D**3,B=k**3,q=E**3,ne=3*h*D**2,xe=3*v*k**2,pe=3*$*E**2,je=6*h**2*D,At=6*v**2*k,Nt=6*$**2*E,vr=l*N+c*B+d*q,vn=l*ne+c*xe+d*pe,Xr=l*je+c*At+d*Nt;return m=m-vr*vn/(vn**2-.5*vr*Xr),m}function pA(e,t,r){let[n,o,i]=e,s=Yi(i),a=null,u=null;if(n=Gr(n)/360,s!==0&&s!==1&&o!==0){let l=Math.cos(cs*n),c=Math.sin(cs*n),[d,m,h]=k1([s,l,c],t,r),v=.8,$=1.25,D,k,E,N;o<v?(D=$*o,k=0,E=v*d,N=1-E/m):(D=5*(o-.8),k=m,E=.2*m**2*1.25**2/d,N=1-E/(h-m));let B=k+D*E/(1-N*D);a=B*l,u=B*c}return[s,a,u]}function bA(e,t,r){let n=1e-7,o=1e-4,i=e[0],s=0,a=ha(i),u=Math.sqrt(e[1]**2+e[2]**2),l=.5+Math.atan2(-e[2],-e[1])/cs;if(a!==0&&a!==1&&u!==0){let d=e[1]/u,m=e[2]/u,[h,v,$]=k1([i,d,m],t,r),D=.8,k=1.25,E,N,B,q;u<v?(N=D*h,B=1-N/v,q=u/(N+B*u),s=q*D):(E=v,N=.2*v**2*k**2/h,B=1-N/($-v),q=(u-E)/(N+B*(u-E)),s=D+.2*q)}const c=Math.abs(s)<o;return c||a===0||Math.abs(1-a)<n?(l=null,c||(s=0)):l=Gr(l*360),[l,s,a]}var yA=new V({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:cn,gamutSpace:"self",fromBase(e){return bA(e,hl,gl)},toBase(e){return pA(e,hl,gl)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),D1=new V({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:cn,fromBase(e){return[ha(e[0]),e[1],e[2]]},toBase(e){return[Yi(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),vA=new V({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:D1,fromBase:Sr.fromBase,toBase:Sr.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function wA(e,t,r){let[n,o,i]=e;n=Gr(n)/360;let s=Yi(i),a=null,u=null;if(s!==0&&o!==0){let l=Math.cos(cs*n),c=Math.sin(cs*n),d=Vl(l,c,t,r),[m,h]=im(d),v=.5,$=1-v/m,D=1-o*v/(v+h-h*$*o),k=o*h*v/(v+h-h*$*o);s=i*D;let E=i*k,N=Yi(D),B=k*N/D,q=Yi(s);E=E*q/s,s=q;let[ne,xe,pe]=sm([N,l*B,c*B],t),je=ht(1/Math.max(Math.max(ne,xe),Math.max(pe,0)),1/3);s=s*je,E=E*je,a=E*l,u=E*c}return[s,a,u]}function $A(e,t,r){let n=1e-4,o=e[0],i=0,s=ha(o),a=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/cs;if(o!==0&&o!==1&&a!==0){let l=e[1]/a,c=e[2]/a,d=Vl(l,c,t,r),[m,h]=im(d),v=.5,$=1-v/m,D=h/(a+o*h),k=D*o,E=D*a,N=Yi(k),B=E*N/k,[q,ne,xe]=sm([N,l*B,c*B],t),pe=ht(1/Math.max(Math.max(q,ne),Math.max(xe,0)),1/3);o=o/pe,a=a/pe,a=a*ha(o)/o,o=ha(o),s=o/k,i=(v+h)*E/(h*v+h*$*E)}return Math.abs(i)<n||s===0?u=null:u=Gr(u*360),[u,i,s]}var kA=new V({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:cn,gamutSpace:"self",fromBase(e){return $A(e,hl,gl)},toBase(e){return wA(e,hl,gl)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let x1=nr.D65;const DA=216/24389,lg=24389/27,[cg,dg]=_l({space:Rt,coords:x1});var A1=new V({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:x1,base:Rt,fromBase(e){let t=[mt(e[0]),mt(e[1]),mt(e[2])],r=t[1],[n,o]=_l({space:Rt,coords:t});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let i=r<=DA?lg*r:116*Math.cbrt(r)-16;return[i,13*i*(n-cg),13*i*(o-dg)]},toBase(e){let[t,r,n]=e;if(t===0||De(t))return[0,0,0];r=mt(r),n=mt(n);let o=r/(13*t)+cg,i=n/(13*t)+dg,s=t<=8?t/lg:Math.pow((t+16)/116,3);return[s*(9*o/(4*i)),s,s*((12-3*o-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),am=new V({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:A1,fromBase:Sr.fromBase,toBase:Sr.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const xA=216/24389,AA=24389/27,fg=xt[0][0],mg=xt[0][1],Yc=xt[0][2],hg=xt[1][0],gg=xt[1][1],Xc=xt[1][2],pg=xt[2][0],bg=xt[2][1],Qc=xt[2][2];function Bi(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function pl(e){const t=Math.pow(e+16,3)/1560896,r=t>xA?t:e/AA,n=r*(284517*fg-94839*Yc),o=r*(838422*Yc+769860*mg+731718*fg),i=r*(632260*Yc-126452*mg),s=r*(284517*hg-94839*Xc),a=r*(838422*Xc+769860*gg+731718*hg),u=r*(632260*Xc-126452*gg),l=r*(284517*pg-94839*Qc),c=r*(838422*Qc+769860*bg+731718*pg),d=r*(632260*Qc-126452*bg);return{r0s:n/i,r0i:o*e/i,r1s:n/(i+126452),r1i:(o-769860)*e/(i+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/d,b0i:c*e/d,b1s:l/(d+126452),b1i:(c-769860)*e/(d+126452)}}function yg(e,t){const r=t/360*Math.PI*2,n=Bi(e.r0s,e.r0i,r),o=Bi(e.r1s,e.r1i,r),i=Bi(e.g0s,e.g0i,r),s=Bi(e.g1s,e.g1i,r),a=Bi(e.b0s,e.b0i,r),u=Bi(e.b1s,e.b1i,r);return Math.min(n,o,i,s,a,u)}var EA=new V({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:am,gamutSpace:ai,fromBase(e){let[t,r,n]=[mt(e[0]),mt(e[1]),mt(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=pl(t),s=yg(i,n);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[mt(e[0]),mt(e[1]),mt(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=pl(n);o=yg(i,t)/100*r}return[n,o,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});xt[0][0];xt[0][1];xt[0][2];xt[1][0];xt[1][1];xt[1][2];xt[2][0];xt[2][1];xt[2][2];function Ri(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function vg(e){let t=Ri(e.r0s,e.r0i),r=Ri(e.r1s,e.r1i),n=Ri(e.g0s,e.g0i),o=Ri(e.g1s,e.g1i),i=Ri(e.b0s,e.b0i),s=Ri(e.b1s,e.b1i);return Math.min(t,r,n,o,i,s)}var CA=new V({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:am,gamutSpace:"self",fromBase(e){let[t,r,n]=[mt(e[0]),mt(e[1]),mt(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=pl(t),s=vg(i);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[mt(e[0]),mt(e[1]),mt(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=pl(n);o=vg(i)/100*r}return[n,o,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),um=new Ht({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:Na.toBase,fromBase:Na.fromBase});const wg=203,$g=2610/2**14,FA=2**14/2610,SA=2523/2**5,kg=2**5/2523,Dg=3424/2**12,xg=2413/2**7,Ag=2392/2**7;var TA=new Ht({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:um,toBase(e){return e.map(function(t){return(Math.max(t**kg-Dg,0)/(xg-Ag*t**kg))**FA*1e4/wg})},fromBase(e){return e.map(function(t){let r=Math.max(t*wg/1e4,0),n=Dg+xg*r**$g,o=1+Ag*r**$g;return(n/o)**SA})}});const Eg=.17883277,Cg=.28466892,Fg=.55991073,ed=3.7743;var MA=new Ht({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:um,toBase(e){return e.map(function(t){return t<=.5?t**2/3*ed:(Math.exp((t-Fg)/Eg)+Cg)/12*ed})},fromBase(e){return e.map(function(t){return t/=ed,t<=1/12?ht(3*t,.5):Eg*Math.log(12*t-Cg)+Fg})}});const E1={};ko.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=C1(e.W1,e.W2,e.options.method))});ko.add("chromatic-adaptation-end",e=>{e.M||(e.M=C1(e.W1,e.W2,e.options.method))});function zl({id:e,toCone_M:t,fromCone_M:r}){E1[e]=arguments[0]}function C1(e,t,r="Bradford"){let n=E1[r],[o,i,s]=ra(n.toCone_M,e),[a,u,l]=ra(n.toCone_M,t),c=[[a/o,0,0],[0,u/i,0],[0,0,l/s]],d=ra(c,n.toCone_M);return ra(n.fromCone_M,d)}zl({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});zl({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});zl({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});zl({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(nr,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});nr.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const PA=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],NA=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var F1=new Ht({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:nr.ACES,toXYZ_M:PA,fromXYZ_M:NA});const Cu=2**-16,td=-.35828683,Fu=(Math.log2(65504)+9.72)/17.52;var IA=new Ht({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[td,Fu],name:"Red"},g:{range:[td,Fu],name:"Green"},b:{range:[td,Fu],name:"Blue"}},referred:"scene",base:F1,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Cu)*2:r<Fu?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Cu)+9.72)/17.52:t<Cu?(Math.log2(Cu+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Sg=Object.freeze({__proto__:null,A98RGB:iA,A98RGB_Linear:w1,ACEScc:IA,ACEScg:F1,CAM16_JMh:dx,HCT:Pa,HPLuv:CA,HSL:tA,HSLuv:EA,HSV:v1,HWB:rA,ICTCP:Wd,JzCzHz:qd,Jzazbz:Qy,LCH:Sr,LCHuv:am,Lab:xr,Lab_D65:Zd,Luv:A1,OKLCH:fA,OKLab:cn,OKLrCH:vA,OKLrab:D1,Okhsl:yA,Okhsv:kA,P3:f1,P3_Linear:c1,ProPhoto:cA,ProPhoto_Linear:$1,REC_2020:l1,REC_2020_Linear:Na,REC_2020_Scene_Referred:dA,REC_2100_HLG:MA,REC_2100_Linear:um,REC_2100_PQ:TA,XYZ_ABS_D65:tm,XYZ_D50:em,XYZ_D65:Rt,sRGB:ai,sRGB_Linear:d1});class re{constructor(...t){let r;if(t.length===1){let s={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=ee(t[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:V.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=De(i)?i:i===void 0?1:jl(0,i,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new re(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Cx(this,...t);return r.color=new re(r.color),r}static get(t,...r){return as(t,this)?t:new re(t,...r)}static try(t,r){if(as(t,this))return t;let n=Hy(t,r);return n?new re(n):null}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,s=function(...a){let u=r(...a);if(i==="color")u=re.get(u);else if(i==="function<color>"){let l=u;u=function(...c){let d=l(...c);return re.get(d)},Object.assign(u,l)}else i==="array<color>"&&(u=u.map(l=>re.get(l)));return u};t in re||(re[t]=s),o&&(re.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)re.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(re);else for(let r in t)re.defineFunction(r,t[r])}}re.defineFunctions({get:Dr,getAll:Za,set:Xn,setAll:Qf,to:Ie,equals:Sx,inGamut:ri,toGamut:Do,distance:Xy,deltas:Fx,toString:fa});Object.assign(re,{util:ED,hooks:ko,WHITES:nr,Space:V,spaces:V.registry,parse:Gy,defaults:Fr});for(let e of Object.keys(Sg))V.register(Sg[e]);for(let e in V.registry)Hd(e,V.registry[e]);ko.add("colorspace-init-end",e=>{Hd(e.id,e),e.aliases?.forEach(t=>{Hd(t,e)})});function Hd(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(re.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:((i,s)=>{try{return V.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)}),get:(i,s,a)=>{if(s&&typeof s!="symbol"&&!(s in i)&&s in o){let{index:u}=V.resolveCoord([t,s]);if(u>=0)return i[u]}return Reflect.get(i,s,a)},set:(i,s,a,u)=>{if(s&&typeof s!="symbol"&&!(s in i)||Number(s)>=0){let{index:l}=V.resolveCoord([t,s]);if(l>=0)return i[l]=a,this.setAll(e,i),!0}return Reflect.set(i,s,a,u)}});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}re.extend(ls);re.extend({deltaE:na});Object.assign(re,{deltaEMethods:ls});re.extend(Xx);re.extend({contrast:Hx});re.extend(Yx);re.extend(Mx);re.extend(eA);re.extend(qu);const S1=Symbol("no update");function Tg(e){return e!==S1}class rd extends pn()("observable-value-update"){}class OA extends pn()("observable-value-resolve"){}class BA extends pn()("observable-value-error"){}class RA extends Rf("observable-destroy"){}class LA extends Rf("observable-callback-call"){}class jA extends pn()("observable-params-update"){}class T1{listenTarget=new Lf;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===S1)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const o=this.value;return this.value=r,this.listenTarget.dispatch(new rd({detail:[r,o]})),!0}return!1}listen(t,r){const n=o=>r(...o.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(rd,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(rd,r)}destroy(){this.listenTarget.dispatch(new RA),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function lm(e,t){return Qk(e,t,(r,n)=>T.isFunction(r)&&T.isFunction(n)?!0:T.strictEquals(r,n))}var ga;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(ga||(ga={}));class UA extends T1{equalityCheck;waitingForValueDeferredPromise=new Xu;lastSetPromise;lastSetId=ei();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||lm,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=ei();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Xu,super.setValue(this.waitingForValueDeferredPromise.promise,T.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=ot(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(t){return Tg(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,T.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=ei(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new OA({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,T.strictEquals),this.dispatch(new BA({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):Tg(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(ot(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?ga.Rejected:this.value instanceof Promise?ga.Waiting:ga.Resolved}}class Vi extends UA{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==Vi.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||lm,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:Vi.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===Vi.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(ot(t))}finally{this.dispatch(new LA)}}updateLastParams(t){try{return this.internalParams===Vi.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new jA({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(ot(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return T.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function _A(e){return yt(e)&&!yr(e)&&!Ya(e)&&Symbol.asyncIterator in e}function yr(e){return Array.isArray(e)}function M1(e){return typeof e=="bigint"}function Ja(e){return typeof e=="boolean"}function cm(e){return e instanceof globalThis.Date}function VA(e){return typeof e=="function"}function zA(e){return yt(e)&&!yr(e)&&!Ya(e)&&Symbol.iterator in e}function qA(e){return e===null}function Fn(e){return typeof e=="number"}function yt(e){return typeof e=="object"&&e!==null}function P1(e){return e instanceof globalThis.RegExp}function ct(e){return typeof e=="string"}function WA(e){return typeof e=="symbol"}function Ya(e){return e instanceof globalThis.Uint8Array}function gt(e){return e===void 0}function KA(e){return e.map(t=>bl(t))}function GA(e){return new Date(e.getTime())}function ZA(e){return new Uint8Array(e)}function HA(e){return new RegExp(e.source,e.flags)}function JA(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=bl(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=bl(e[r]);return t}function bl(e){return yr(e)?KA(e):cm(e)?GA(e):Ya(e)?ZA(e):P1(e)?HA(e):yt(e)?JA(e):e}function Tr(e){return bl(e)}function dm(e,t){return Tr(t===void 0?e:{...t,...e})}function N1(e){return Sn(e)&&globalThis.Symbol.asyncIterator in e}function I1(e){return Sn(e)&&globalThis.Symbol.iterator in e}function O1(e){return e instanceof globalThis.Promise}function fm(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function mm(e){return e instanceof globalThis.Uint8Array}function B1(e,t){return t in e}function Sn(e){return e!==null&&typeof e=="object"}function Mr(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function Co(e){return e===void 0}function ql(e){return e===null}function Wl(e){return typeof e=="boolean"}function se(e){return typeof e=="number"}function R1(e){return globalThis.Number.isInteger(e)}function Vn(e){return typeof e=="bigint"}function Er(e){return typeof e=="string"}function L1(e){return typeof e=="function"}function Kl(e){return typeof e=="symbol"}function j1(e){return Vn(e)||Wl(e)||ql(e)||se(e)||Er(e)||Kl(e)||Co(e)}var lt;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=Sn(s);return e.AllowArrayObject?a:a&&!Mr(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function o(s){return e.AllowNaN?se(s):Number.isFinite(s)}e.IsNumberLike=o;function i(s){const a=Co(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=i})(lt||(lt={}));function YA(e){return globalThis.Object.freeze(e).map(t=>yl(t))}function XA(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=yl(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=yl(e[r]);return globalThis.Object.freeze(t)}function yl(e){return yr(e)?YA(e):cm(e)?e:Ya(e)?e:P1(e)?e:yt(e)?XA(e):e}function R(e,t){const r=t!==void 0?{...t,...e}:e;switch(lt.InstanceMode){case"freeze":return yl(r);case"clone":return Tr(r);default:return r}}class Ut extends Error{constructor(t){super(t)}}const mr=Symbol.for("TypeBox.Transform"),Xa=Symbol.for("TypeBox.Readonly"),eo=Symbol.for("TypeBox.Optional"),Gl=Symbol.for("TypeBox.Hint"),O=Symbol.for("TypeBox.Kind");function hm(e){return yt(e)&&e[Xa]==="Readonly"}function Fo(e){return yt(e)&&e[eo]==="Optional"}function U1(e){return he(e,"Any")}function _1(e){return he(e,"Argument")}function Fs(e){return he(e,"Array")}function Zl(e){return he(e,"AsyncIterator")}function Hl(e){return he(e,"BigInt")}function Qa(e){return he(e,"Boolean")}function Ss(e){return he(e,"Computed")}function Ts(e){return he(e,"Constructor")}function QA(e){return he(e,"Date")}function Ms(e){return he(e,"Function")}function Ps(e){return he(e,"Integer")}function Hr(e){return he(e,"Intersect")}function Jl(e){return he(e,"Iterator")}function he(e,t){return yt(e)&&O in e&&e[O]===t}function V1(e){return Ja(e)||Fn(e)||ct(e)}function bi(e){return he(e,"Literal")}function yi(e){return he(e,"MappedKey")}function Or(e){return he(e,"MappedResult")}function eu(e){return he(e,"Never")}function eE(e){return he(e,"Not")}function gm(e){return he(e,"Null")}function Ns(e){return he(e,"Number")}function bn(e){return he(e,"Object")}function Yl(e){return he(e,"Promise")}function Xl(e){return he(e,"Record")}function pr(e){return he(e,"Ref")}function z1(e){return he(e,"RegExp")}function tu(e){return he(e,"String")}function pm(e){return he(e,"Symbol")}function vi(e){return he(e,"TemplateLiteral")}function tE(e){return he(e,"This")}function Be(e){return yt(e)&&mr in e}function wi(e){return he(e,"Tuple")}function ru(e){return he(e,"Undefined")}function Pt(e){return he(e,"Union")}function rE(e){return he(e,"Uint8Array")}function nE(e){return he(e,"Unknown")}function oE(e){return he(e,"Unsafe")}function iE(e){return he(e,"Void")}function sE(e){return yt(e)&&O in e&&ct(e[O])}function ir(e){return U1(e)||_1(e)||Fs(e)||Qa(e)||Hl(e)||Zl(e)||Ss(e)||Ts(e)||QA(e)||Ms(e)||Ps(e)||Hr(e)||Jl(e)||bi(e)||yi(e)||Or(e)||eu(e)||eE(e)||gm(e)||Ns(e)||bn(e)||Yl(e)||Xl(e)||pr(e)||z1(e)||tu(e)||pm(e)||vi(e)||tE(e)||wi(e)||ru(e)||Pt(e)||rE(e)||nE(e)||oE(e)||iE(e)||sE(e)}const aE=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function q1(e){try{return new RegExp(e),!0}catch{return!1}}function bm(e){if(!ct(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function W1(e){return ym(e)||Ye(e)}function Zs(e){return gt(e)||M1(e)}function Me(e){return gt(e)||Fn(e)}function ym(e){return gt(e)||Ja(e)}function Te(e){return gt(e)||ct(e)}function uE(e){return gt(e)||ct(e)&&bm(e)&&q1(e)}function lE(e){return gt(e)||ct(e)&&bm(e)}function K1(e){return gt(e)||Ye(e)}function vl(e){return yt(e)&&e[eo]==="Optional"}function dn(e){return ge(e,"Any")&&Te(e.$id)}function cE(e){return ge(e,"Argument")&&Fn(e.index)}function $i(e){return ge(e,"Array")&&e.type==="array"&&Te(e.$id)&&Ye(e.items)&&Me(e.minItems)&&Me(e.maxItems)&&ym(e.uniqueItems)&&K1(e.contains)&&Me(e.minContains)&&Me(e.maxContains)}function vm(e){return ge(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Te(e.$id)&&Ye(e.items)}function Ql(e){return ge(e,"BigInt")&&e.type==="bigint"&&Te(e.$id)&&Zs(e.exclusiveMaximum)&&Zs(e.exclusiveMinimum)&&Zs(e.maximum)&&Zs(e.minimum)&&Zs(e.multipleOf)}function ki(e){return ge(e,"Boolean")&&e.type==="boolean"&&Te(e.$id)}function dE(e){return ge(e,"Computed")&&ct(e.target)&&yr(e.parameters)&&e.parameters.every(t=>Ye(t))}function ec(e){return ge(e,"Constructor")&&e.type==="Constructor"&&Te(e.$id)&&yr(e.parameters)&&e.parameters.every(t=>Ye(t))&&Ye(e.returns)}function tc(e){return ge(e,"Date")&&e.type==="Date"&&Te(e.$id)&&Me(e.exclusiveMaximumTimestamp)&&Me(e.exclusiveMinimumTimestamp)&&Me(e.maximumTimestamp)&&Me(e.minimumTimestamp)&&Me(e.multipleOfTimestamp)}function rc(e){return ge(e,"Function")&&e.type==="Function"&&Te(e.$id)&&yr(e.parameters)&&e.parameters.every(t=>Ye(t))&&Ye(e.returns)}function to(e){return ge(e,"Integer")&&e.type==="integer"&&Te(e.$id)&&Me(e.exclusiveMaximum)&&Me(e.exclusiveMinimum)&&Me(e.maximum)&&Me(e.minimum)&&Me(e.multipleOf)}function G1(e){return yt(e)&&Object.entries(e).every(([t,r])=>bm(t)&&Ye(r))}function Di(e){return ge(e,"Intersect")&&!(ct(e.type)&&e.type!=="object")&&yr(e.allOf)&&e.allOf.every(t=>Ye(t)&&!bE(t))&&Te(e.type)&&(ym(e.unevaluatedProperties)||K1(e.unevaluatedProperties))&&Te(e.$id)}function wm(e){return ge(e,"Iterator")&&e.type==="Iterator"&&Te(e.$id)&&Ye(e.items)}function ge(e,t){return yt(e)&&O in e&&e[O]===t}function Z1(e){return So(e)&&ct(e.const)}function H1(e){return So(e)&&Fn(e.const)}function J1(e){return So(e)&&Ja(e.const)}function So(e){return ge(e,"Literal")&&Te(e.$id)&&fE(e.const)}function fE(e){return Ja(e)||Fn(e)||ct(e)}function mE(e){return ge(e,"MappedKey")&&yr(e.keys)&&e.keys.every(t=>Fn(t)||ct(t))}function hE(e){return ge(e,"MappedResult")&&G1(e.properties)}function To(e){return ge(e,"Never")&&yt(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function ds(e){return ge(e,"Not")&&Ye(e.not)}function $m(e){return ge(e,"Null")&&e.type==="null"&&Te(e.$id)}function hr(e){return ge(e,"Number")&&e.type==="number"&&Te(e.$id)&&Me(e.exclusiveMaximum)&&Me(e.exclusiveMinimum)&&Me(e.maximum)&&Me(e.minimum)&&Me(e.multipleOf)}function Xe(e){return ge(e,"Object")&&e.type==="object"&&Te(e.$id)&&G1(e.properties)&&W1(e.additionalProperties)&&Me(e.minProperties)&&Me(e.maxProperties)}function km(e){return ge(e,"Promise")&&e.type==="Promise"&&Te(e.$id)&&Ye(e.item)}function jt(e){return ge(e,"Record")&&e.type==="object"&&Te(e.$id)&&W1(e.additionalProperties)&&yt(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&q1(r[0])&&yt(t.patternProperties)&&Ye(t.patternProperties[r[0]])})(e)}function gE(e){return ge(e,"Ref")&&Te(e.$id)&&ct(e.$ref)}function Ia(e){return ge(e,"RegExp")&&Te(e.$id)&&ct(e.source)&&ct(e.flags)&&Me(e.maxLength)&&Me(e.minLength)}function fn(e){return ge(e,"String")&&e.type==="string"&&Te(e.$id)&&Me(e.minLength)&&Me(e.maxLength)&&uE(e.pattern)&&lE(e.format)}function Oa(e){return ge(e,"Symbol")&&e.type==="symbol"&&Te(e.$id)}function Ba(e){return ge(e,"TemplateLiteral")&&e.type==="string"&&ct(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function pE(e){return ge(e,"This")&&Te(e.$id)&&ct(e.$ref)}function bE(e){return yt(e)&&mr in e}function nc(e){return ge(e,"Tuple")&&e.type==="array"&&Te(e.$id)&&Fn(e.minItems)&&Fn(e.maxItems)&&e.minItems===e.maxItems&&(gt(e.items)&&gt(e.additionalItems)&&e.minItems===0||yr(e.items)&&e.items.every(t=>Ye(t)))}function ui(e){return ge(e,"Undefined")&&e.type==="undefined"&&Te(e.$id)}function Qn(e){return ge(e,"Union")&&Te(e.$id)&&yt(e)&&yr(e.anyOf)&&e.anyOf.every(t=>Ye(t))}function nu(e){return ge(e,"Uint8Array")&&e.type==="Uint8Array"&&Te(e.$id)&&Me(e.minByteLength)&&Me(e.maxByteLength)}function mn(e){return ge(e,"Unknown")&&Te(e.$id)}function yE(e){return ge(e,"Unsafe")}function oc(e){return ge(e,"Void")&&e.type==="void"&&Te(e.$id)}function vE(e){return yt(e)&&O in e&&ct(e[O])&&!aE.includes(e[O])}function Ye(e){return yt(e)&&(dn(e)||cE(e)||$i(e)||ki(e)||Ql(e)||vm(e)||dE(e)||ec(e)||tc(e)||rc(e)||to(e)||Di(e)||wm(e)||So(e)||mE(e)||hE(e)||To(e)||ds(e)||$m(e)||hr(e)||Xe(e)||km(e)||jt(e)||gE(e)||Ia(e)||fn(e)||Oa(e)||Ba(e)||pE(e)||nc(e)||ui(e)||Qn(e)||nu(e)||mn(e)||yE(e)||oc(e)||vE(e))}const wE="(true|false)",Wu="(0|[1-9][0-9]*)",Y1="(.*)",$E="(?!.*)",fs=`^${Wu}$`,ms=`^${Y1}$`,kE=`^${$E}$`,X1=new Map;function Dm(e){return X1.has(e)}function xm(e){return X1.get(e)}const Am=new Map;function Ao(e){return Am.has(e)}function Em(e,t){Am.set(e,t)}function Cm(e){return Am.get(e)}function DE(e,t){return e.includes(t)}function xE(e){return[...new Set(e)]}function AE(e,t){return e.filter(r=>t.includes(r))}function EE(e,t){return e.reduce((r,n)=>AE(r,n),t)}function CE(e){return e.length===1?e[0]:e.length>1?EE(e.slice(1),e[0]):[]}function FE(e){const t=[];for(const r of e)t.push(...r);return t}function Ra(e){return R({[O]:"Any"},e)}function Fm(e,t){return R({[O]:"Array",type:"array",items:e},t)}function SE(e){return R({[O]:"Argument",index:e})}function Sm(e,t){return R({[O]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function kt(e,t,r){return R({[O]:"Computed",target:e,parameters:t},r)}function TE(e,t){const{[t]:r,...n}=e;return n}function Pr(e,t){return t.reduce((r,n)=>TE(r,n),e)}function Qe(e){return R({[O]:"Never",not:{}},e)}function _t(e){return R({[O]:"MappedResult",properties:e})}function Tm(e,t,r){return R({[O]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function ou(e,t,r){return R({[O]:"Function",type:"Function",parameters:e,returns:t},r)}function Jd(e,t){return R({[O]:"Union",anyOf:e},t)}function ME(e){return e.some(t=>Fo(t))}function Mg(e){return e.map(t=>Fo(t)?PE(t):t)}function PE(e){return Pr(e,[eo])}function NE(e,t){return ME(e)?No(Jd(Mg(e),t)):Jd(Mg(e),t)}function Is(e,t){return e.length===1?R(e[0],t):e.length===0?Qe(t):NE(e,t)}function Vt(e,t){return e.length===0?Qe(t):e.length===1?R(e[0],t):Jd(e,t)}class Pg extends Ut{}function IE(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function Mm(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function Kn(e,t){return Mm(e,t,"(")}function La(e,t){return Mm(e,t,")")}function Q1(e,t){return Mm(e,t,"|")}function OE(e){if(!(Kn(e,0)&&La(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(Kn(e,r)&&(t+=1),La(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function BE(e){return e.slice(1,e.length-1)}function RE(e){let t=0;for(let r=0;r<e.length;r++)if(Kn(e,r)&&(t+=1),La(e,r)&&(t-=1),Q1(e,r)&&t===0)return!0;return!1}function LE(e){for(let t=0;t<e.length;t++)if(Kn(e,t))return!0;return!1}function jE(e){let[t,r]=[0,0];const n=[];for(let i=0;i<e.length;i++)if(Kn(e,i)&&(t+=1),La(e,i)&&(t-=1),Q1(e,i)&&t===0){const s=e.slice(r,i);s.length>0&&n.push(hs(s)),r=i+1}const o=e.slice(r);return o.length>0&&n.push(hs(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function UE(e){function t(o,i){if(!Kn(o,i))throw new Pg("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=i;a<o.length;a++)if(Kn(o,a)&&(s+=1),La(o,a)&&(s-=1),s===0)return[i,a];throw new Pg("TemplateLiteralParser: Unclosed group parens in expression")}function r(o,i){for(let s=i;s<o.length;s++)if(Kn(o,s))return[i,s];return[i,o.length]}const n=[];for(let o=0;o<e.length;o++)if(Kn(e,o)){const[i,s]=t(e,o),a=e.slice(i,s+1);n.push(hs(a)),o=s}else{const[i,s]=r(e,o),a=e.slice(i,s);a.length>0&&n.push(hs(a)),o=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function hs(e){return OE(e)?hs(BE(e)):RE(e)?jE(e):LE(e)?UE(e):{type:"const",const:IE(e)}}function Pm(e){return hs(e.slice(1,e.length-1))}class _E extends Ut{}function VE(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function zE(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function qE(e){return e.type==="const"&&e.const===".*"}function ja(e){return VE(e)||qE(e)?!1:zE(e)?!0:e.type==="and"?e.expr.every(t=>ja(t)):e.type==="or"?e.expr.every(t=>ja(t)):e.type==="const"?!0:(()=>{throw new _E("Unknown expression type")})()}function WE(e){const t=Pm(e.pattern);return ja(t)}class KE extends Ut{}function*ev(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of ev(e.slice(1)))yield`${t}${r}`}function*GE(e){return yield*ev(e.expr.map(t=>[...ic(t)]))}function*ZE(e){for(const t of e.expr)yield*ic(t)}function*HE(e){return yield e.const}function*ic(e){return e.type==="and"?yield*GE(e):e.type==="or"?yield*ZE(e):e.type==="const"?yield*HE(e):(()=>{throw new KE("Unknown expression")})()}function tv(e){const t=Pm(e.pattern);return ja(t)?[...ic(t)]:[]}function pt(e,t){return R({[O]:"Literal",const:e,type:typeof e},t)}function rv(e){return R({[O]:"Boolean",type:"boolean"},e)}function Nm(e){return R({[O]:"BigInt",type:"bigint"},e)}function xi(e){return R({[O]:"Number",type:"number"},e)}function li(e){return R({[O]:"String",type:"string"},e)}function*JE(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield rv():t==="number"?yield xi():t==="bigint"?yield Nm():t==="string"?yield li():yield(()=>{const r=t.split("|").map(n=>pt(n.trim()));return r.length===0?Qe():r.length===1?r[0]:Is(r)})()}function*YE(e){if(e[1]!=="{"){const t=pt("$"),r=Yd(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=JE(e.slice(2,t)),n=Yd(e.slice(t+1));return yield*[...r,...n]}yield pt(e)}function*Yd(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=pt(e.slice(0,t)),n=YE(e.slice(t));return yield*[r,...n]}yield pt(e)}function XE(e){return[...Yd(e)]}class QE extends Ut{}function eC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function nv(e,t){return vi(e)?e.pattern.slice(1,e.pattern.length-1):Pt(e)?`(${e.anyOf.map(r=>nv(r,t)).join("|")})`:Ns(e)?`${t}${Wu}`:Ps(e)?`${t}${Wu}`:Hl(e)?`${t}${Wu}`:tu(e)?`${t}${Y1}`:bi(e)?`${t}${eC(e.const.toString())}`:Qa(e)?`${t}${wE}`:(()=>{throw new QE(`Unexpected Kind '${e[O]}'`)})()}function Ng(e){return`^${e.map(t=>nv(t,"")).join("")}$`}function wl(e){const r=tv(e).map(n=>pt(n));return Is(r)}function ov(e,t){const r=ct(e)?Ng(XE(e)):Ng(e);return R({[O]:"TemplateLiteral",type:"string",pattern:r},t)}function tC(e){return tv(e).map(r=>r.toString())}function rC(e){const t=[];for(const r of e)t.push(...Mo(r));return t}function nC(e){return[e.toString()]}function Mo(e){return[...new Set(vi(e)?tC(e):Pt(e)?rC(e.anyOf):bi(e)?nC(e.const):Ns(e)?["[number]"]:Ps(e)?["[number]"]:[])]}function oC(e,t,r){const n={};for(const o of Object.getOwnPropertyNames(t))n[o]=sc(e,Mo(t[o]),r);return n}function iC(e,t,r){return oC(e,t.properties,r)}function sC(e,t,r){const n=iC(e,t,r);return _t(n)}function iv(e,t){return e.map(r=>sv(r,t))}function aC(e){return e.filter(t=>!eu(t))}function uC(e,t){return lv(aC(iv(e,t)))}function lC(e){return e.some(t=>eu(t))?[]:e}function cC(e,t){return Is(lC(iv(e,t)))}function dC(e,t){return t in e?e[t]:t==="[number]"?Is(e):Qe()}function fC(e,t){return t==="[number]"?e:Qe()}function mC(e,t){return t in e?e[t]:Qe()}function sv(e,t){return Hr(e)?uC(e.allOf,t):Pt(e)?cC(e.anyOf,t):wi(e)?dC(e.items??[],t):Fs(e)?fC(e.items,t):bn(e)?mC(e.properties,t):Qe()}function Im(e,t){return t.map(r=>sv(e,r))}function Ig(e,t){return Is(Im(e,t))}function sc(e,t,r){if(pr(e)||pr(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!ir(e)||!ir(t))throw new Ut(n);return kt("Index",[e,t])}return Or(t)?sC(e,t,r):yi(t)?bC(e,t,r):R(ir(t)?Ig(e,Mo(t)):Ig(e,t),r)}function hC(e,t,r){return{[t]:sc(e,[t],Tr(r))}}function gC(e,t,r){return t.reduce((n,o)=>({...n,...hC(e,o,r)}),{})}function pC(e,t,r){return gC(e,t.keys,r)}function bC(e,t,r){const n=pC(e,t,r);return _t(n)}function Om(e,t){return R({[O]:"Iterator",type:"Iterator",items:e},t)}function yC(e){return globalThis.Object.keys(e).filter(t=>!Fo(e[t]))}function vC(e,t){const r=yC(e),n=r.length>0?{[O]:"Object",type:"object",required:r,properties:e}:{[O]:"Object",type:"object",properties:e};return R(n,t)}var Mt=vC;function av(e,t){return R({[O]:"Promise",type:"Promise",item:e},t)}function wC(e){return R(Pr(e,[Xa]))}function $C(e){return R({...e,[Xa]:"Readonly"})}function kC(e,t){return t===!1?wC(e):$C(e)}function Po(e,t){const r=t??!0;return Or(e)?AC(e,r):kC(e,r)}function DC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Po(e[n],t);return r}function xC(e,t){return DC(e.properties,t)}function AC(e,t){const r=xC(e,t);return _t(r)}function Os(e,t){return R(e.length>0?{[O]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[O]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function uv(e,t){return e in t?jr(e,t[e]):_t(t)}function EC(e){return{[e]:pt(e)}}function CC(e){const t={};for(const r of e)t[r]=pt(r);return t}function FC(e,t){return DE(t,e)?EC(e):CC(t)}function SC(e,t){const r=FC(e,t);return uv(e,r)}function Hs(e,t){return t.map(r=>jr(e,r))}function TC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=jr(e,t[n]);return r}function jr(e,t){const r={...t};return Fo(t)?No(jr(e,Pr(t,[eo]))):hm(t)?Po(jr(e,Pr(t,[Xa]))):Or(t)?uv(e,t.properties):yi(t)?SC(e,t.keys):Ts(t)?Tm(Hs(e,t.parameters),jr(e,t.returns),r):Ms(t)?ou(Hs(e,t.parameters),jr(e,t.returns),r):Zl(t)?Sm(jr(e,t.items),r):Jl(t)?Om(jr(e,t.items),r):Hr(t)?Io(Hs(e,t.allOf),r):Pt(t)?Vt(Hs(e,t.anyOf),r):wi(t)?Os(Hs(e,t.items??[]),r):bn(t)?Mt(TC(e,t.properties),r):Fs(t)?Fm(jr(e,t.items),r):Yl(t)?av(jr(e,t.item),r):t}function MC(e,t){const r={};for(const n of e)r[n]=jr(n,t);return r}function PC(e,t,r){const n=ir(e)?Mo(e):e,o=t({[O]:"MappedKey",keys:n}),i=MC(n,o);return Mt(i,r)}function NC(e){return R(Pr(e,[eo]))}function IC(e){return R({...e,[eo]:"Optional"})}function OC(e,t){return t===!1?NC(e):IC(e)}function No(e,t){const r=t??!0;return Or(e)?LC(e,r):OC(e,r)}function BC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=No(e[n],t);return r}function RC(e,t){return BC(e.properties,t)}function LC(e,t){const r=RC(e,t);return _t(r)}function Xd(e,t={}){const r=e.every(o=>bn(o)),n=ir(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return R(t.unevaluatedProperties===!1||ir(t.unevaluatedProperties)||r?{...n,[O]:"Intersect",type:"object",allOf:e}:{...n,[O]:"Intersect",allOf:e},t)}function jC(e){return e.every(t=>Fo(t))}function UC(e){return Pr(e,[eo])}function Og(e){return e.map(t=>Fo(t)?UC(t):t)}function _C(e,t){return jC(e)?No(Xd(Og(e),t)):Xd(Og(e),t)}function lv(e,t={}){if(e.length===1)return R(e[0],t);if(e.length===0)return Qe(t);if(e.some(r=>Be(r)))throw new Error("Cannot intersect transform types");return _C(e,t)}function Io(e,t){if(e.length===1)return R(e[0],t);if(e.length===0)return Qe(t);if(e.some(r=>Be(r)))throw new Error("Cannot intersect transform types");return Xd(e,t)}function Bs(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new Ut("Ref: $ref must be a string");return R({[O]:"Ref",$ref:t},r)}function VC(e,t){return kt("Awaited",[kt(e,t)])}function zC(e){return kt("Awaited",[Bs(e)])}function qC(e){return Io(cv(e))}function WC(e){return Vt(cv(e))}function KC(e){return ac(e)}function cv(e){return e.map(t=>ac(t))}function ac(e,t){return R(Ss(e)?VC(e.target,e.parameters):Hr(e)?qC(e.allOf):Pt(e)?WC(e.anyOf):Yl(e)?KC(e.item):pr(e)?zC(e.$ref):e,t)}function dv(e){const t=[];for(const r of e)t.push(Ai(r));return t}function GC(e){const t=dv(e);return FE(t)}function ZC(e){const t=dv(e);return CE(t)}function HC(e){return e.map((t,r)=>r.toString())}function JC(e){return["[number]"]}function YC(e){return globalThis.Object.getOwnPropertyNames(e)}function XC(e){return Qd?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function Ai(e){return Hr(e)?GC(e.allOf):Pt(e)?ZC(e.anyOf):wi(e)?HC(e.items??[]):Fs(e)?JC(e.items):bn(e)?YC(e.properties):Xl(e)?XC(e.patternProperties):[]}let Qd=!1;function gs(e){Qd=!0;const t=Ai(e);return Qd=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function QC(e,t){return kt("KeyOf",[kt(e,t)])}function e4(e){return kt("KeyOf",[Bs(e)])}function t4(e,t){const r=Ai(e),n=r4(r),o=Is(n);return R(o,t)}function r4(e){return e.map(t=>t==="[number]"?xi():pt(t))}function Bm(e,t){return Ss(e)?QC(e.target,e.parameters):pr(e)?e4(e.$ref):Or(e)?i4(e,t):t4(e,t)}function n4(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Bm(e[n],Tr(t));return r}function o4(e,t){return n4(e.properties,t)}function i4(e,t){const r=o4(e,t);return _t(r)}function fv(e){const t=Ai(e),r=Im(e,t);return t.map((n,o)=>[t[o],r[o]])}function s4(e){const t=[];for(const r of e)t.push(...Ai(r));return xE(t)}function a4(e){return e.filter(t=>!eu(t))}function u4(e,t){const r=[];for(const n of e)r.push(...Im(n,[t]));return a4(r)}function l4(e,t){const r={};for(const n of t)r[n]=lv(u4(e,n));return r}function c4(e,t){const r=s4(e),n=l4(e,r);return Mt(n,t)}function mv(e){return R({[O]:"Date",type:"Date"},e)}function hv(e){return R({[O]:"Null",type:"null"},e)}function gv(e){return R({[O]:"Symbol",type:"symbol"},e)}function pv(e){return R({[O]:"Undefined",type:"undefined"},e)}function bv(e){return R({[O]:"Uint8Array",type:"Uint8Array"},e)}function uc(e){return R({[O]:"Unknown"},e)}function d4(e){return e.map(t=>Rm(t,!1))}function f4(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Po(Rm(e[r],!1));return t}function Su(e,t){return t===!0?e:Po(e)}function Rm(e,t){return _A(e)||zA(e)?Su(Ra(),t):yr(e)?Po(Os(d4(e))):Ya(e)?bv():cm(e)?mv():yt(e)?Su(Mt(f4(e)),t):VA(e)?Su(ou([],uc()),t):gt(e)?pv():qA(e)?hv():WA(e)?gv():M1(e)?Nm():Fn(e)||Ja(e)||ct(e)?pt(e):Mt({})}function m4(e,t){return R(Rm(e,!0),t)}function h4(e,t){return Ts(e)?Os(e.parameters,t):Qe(t)}function g4(e,t){if(gt(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(i=>isNaN(i)).map(i=>e[i]),o=[...new Set(r)].map(i=>pt(i));return Vt(o,{...t,[Gl]:"Enum"})}class p4 extends Ut{}var S;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(S||(S={}));function Zr(e){return e===S.False?e:S.True}function Rs(e){throw new p4(e)}function vt(e){return To(e)||Di(e)||Qn(e)||mn(e)||dn(e)}function wt(e,t){return To(t)?wv():Di(t)?lc(e,t):Qn(t)?jm(e,t):mn(t)?xv():dn(t)?Lm():Rs("StructuralRight")}function Lm(e,t){return S.True}function b4(e,t){return Di(t)?lc(e,t):Qn(t)&&t.anyOf.some(r=>dn(r)||mn(r))?S.True:Qn(t)?S.Union:mn(t)||dn(t)?S.True:S.Union}function y4(e,t){return mn(e)?S.False:dn(e)?S.Union:To(e)?S.True:S.False}function v4(e,t){return Xe(t)&&cc(t)?S.True:vt(t)?wt(e,t):$i(t)?Zr(Se(e.items,t.items)):S.False}function w4(e,t){return vt(t)?wt(e,t):vm(t)?Zr(Se(e.items,t.items)):S.False}function $4(e,t){return vt(t)?wt(e,t):Xe(t)?Jt(e,t):jt(t)?Jr(e,t):Ql(t)?S.True:S.False}function yv(e,t){return J1(e)||ki(e)?S.True:S.False}function k4(e,t){return vt(t)?wt(e,t):Xe(t)?Jt(e,t):jt(t)?Jr(e,t):ki(t)?S.True:S.False}function D4(e,t){return vt(t)?wt(e,t):Xe(t)?Jt(e,t):ec(t)?e.parameters.length>t.parameters.length?S.False:e.parameters.every((r,n)=>Zr(Se(t.parameters[n],r))===S.True)?Zr(Se(e.returns,t.returns)):S.False:S.False}function x4(e,t){return vt(t)?wt(e,t):Xe(t)?Jt(e,t):jt(t)?Jr(e,t):tc(t)?S.True:S.False}function A4(e,t){return vt(t)?wt(e,t):Xe(t)?Jt(e,t):rc(t)?e.parameters.length>t.parameters.length?S.False:e.parameters.every((r,n)=>Zr(Se(t.parameters[n],r))===S.True)?Zr(Se(e.returns,t.returns)):S.False:S.False}function vv(e,t){return So(e)&&Fn(e.const)||hr(e)||to(e)?S.True:S.False}function E4(e,t){return to(t)||hr(t)?S.True:vt(t)?wt(e,t):Xe(t)?Jt(e,t):jt(t)?Jr(e,t):S.False}function lc(e,t){return t.allOf.every(r=>Se(e,r)===S.True)?S.True:S.False}function C4(e,t){return e.allOf.some(r=>Se(r,t)===S.True)?S.True:S.False}function F4(e,t){return vt(t)?wt(e,t):wm(t)?Zr(Se(e.items,t.items)):S.False}function S4(e,t){return So(t)&&t.const===e.const?S.True:vt(t)?wt(e,t):Xe(t)?Jt(e,t):jt(t)?Jr(e,t):fn(t)?Dv(e):hr(t)?$v(e):to(t)?vv(e):ki(t)?yv(e):S.False}function wv(e,t){return S.False}function T4(e,t){return S.True}function Bg(e){let[t,r]=[e,0];for(;ds(t);)t=t.not,r+=1;return r%2===0?t:uc()}function M4(e,t){return ds(e)?Se(Bg(e),t):ds(t)?Se(e,Bg(t)):Rs("Invalid fallthrough for Not")}function P4(e,t){return vt(t)?wt(e,t):Xe(t)?Jt(e,t):jt(t)?Jr(e,t):$m(t)?S.True:S.False}function $v(e,t){return H1(e)||hr(e)||to(e)?S.True:S.False}function N4(e,t){return vt(t)?wt(e,t):Xe(t)?Jt(e,t):jt(t)?Jr(e,t):to(t)||hr(t)?S.True:S.False}function br(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function Rg(e){return cc(e)}function Lg(e){return br(e,0)||br(e,1)&&"description"in e.properties&&Qn(e.properties.description)&&e.properties.description.anyOf.length===2&&(fn(e.properties.description.anyOf[0])&&ui(e.properties.description.anyOf[1])||fn(e.properties.description.anyOf[1])&&ui(e.properties.description.anyOf[0]))}function nd(e){return br(e,0)}function jg(e){return br(e,0)}function I4(e){return br(e,0)}function O4(e){return br(e,0)}function B4(e){return cc(e)}function R4(e){const t=xi();return br(e,0)||br(e,1)&&"length"in e.properties&&Zr(Se(e.properties.length,t))===S.True}function L4(e){return br(e,0)}function cc(e){const t=xi();return br(e,0)||br(e,1)&&"length"in e.properties&&Zr(Se(e.properties.length,t))===S.True}function j4(e){const t=ou([Ra()],Ra());return br(e,0)||br(e,1)&&"then"in e.properties&&Zr(Se(e.properties.then,t))===S.True}function kv(e,t){return Se(e,t)===S.False||vl(e)&&!vl(t)?S.False:S.True}function Jt(e,t){return mn(e)?S.False:dn(e)?S.Union:To(e)||Z1(e)&&Rg(t)||H1(e)&&nd(t)||J1(e)&&jg(t)||Oa(e)&&Lg(t)||Ql(e)&&I4(t)||fn(e)&&Rg(t)||Oa(e)&&Lg(t)||hr(e)&&nd(t)||to(e)&&nd(t)||ki(e)&&jg(t)||nu(e)&&B4(t)||tc(e)&&O4(t)||ec(e)&&L4(t)||rc(e)&&R4(t)?S.True:jt(e)&&fn(ef(e))?t[Gl]==="Record"?S.True:S.False:jt(e)&&hr(ef(e))&&br(t,0)?S.True:S.False}function U4(e,t){return vt(t)?wt(e,t):jt(t)?Jr(e,t):Xe(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!vl(t.properties[r]))return S.False;if(vl(t.properties[r]))return S.True;if(kv(e.properties[r],t.properties[r])===S.False)return S.False}return S.True})():S.False}function _4(e,t){return vt(t)?wt(e,t):Xe(t)&&j4(t)?S.True:km(t)?Zr(Se(e.item,t.item)):S.False}function ef(e){return fs in e.patternProperties?xi():ms in e.patternProperties?li():Rs("Unknown record key pattern")}function tf(e){return fs in e.patternProperties?e.patternProperties[fs]:ms in e.patternProperties?e.patternProperties[ms]:Rs("Unable to get record value schema")}function Jr(e,t){const[r,n]=[ef(t),tf(t)];return Z1(e)&&hr(r)&&Zr(Se(e,n))===S.True?S.True:nu(e)&&hr(r)||fn(e)&&hr(r)||$i(e)&&hr(r)?Se(e,n):Xe(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(kv(n,e.properties[o])===S.False)return S.False;return S.True})():S.False}function V4(e,t){return vt(t)?wt(e,t):Xe(t)?Jt(e,t):jt(t)?Se(tf(e),tf(t)):S.False}function z4(e,t){const r=Ia(e)?li():e,n=Ia(t)?li():t;return Se(r,n)}function Dv(e,t){return So(e)&&ct(e.const)||fn(e)?S.True:S.False}function q4(e,t){return vt(t)?wt(e,t):Xe(t)?Jt(e,t):jt(t)?Jr(e,t):fn(t)?S.True:S.False}function W4(e,t){return vt(t)?wt(e,t):Xe(t)?Jt(e,t):jt(t)?Jr(e,t):Oa(t)?S.True:S.False}function K4(e,t){return Ba(e)?Se(wl(e),t):Ba(t)?Se(e,wl(t)):Rs("Invalid fallthrough for TemplateLiteral")}function G4(e,t){return $i(t)&&e.items!==void 0&&e.items.every(r=>Se(r,t.items)===S.True)}function Z4(e,t){return To(e)?S.True:mn(e)?S.False:dn(e)?S.Union:S.False}function H4(e,t){return vt(t)?wt(e,t):Xe(t)&&cc(t)||$i(t)&&G4(e,t)?S.True:nc(t)?gt(e.items)&&!gt(t.items)||!gt(e.items)&&gt(t.items)?S.False:gt(e.items)&&!gt(t.items)||e.items.every((r,n)=>Se(r,t.items[n])===S.True)?S.True:S.False:S.False}function J4(e,t){return vt(t)?wt(e,t):Xe(t)?Jt(e,t):jt(t)?Jr(e,t):nu(t)?S.True:S.False}function Y4(e,t){return vt(t)?wt(e,t):Xe(t)?Jt(e,t):jt(t)?Jr(e,t):oc(t)?e3(e):ui(t)?S.True:S.False}function jm(e,t){return t.anyOf.some(r=>Se(e,r)===S.True)?S.True:S.False}function X4(e,t){return e.anyOf.every(r=>Se(r,t)===S.True)?S.True:S.False}function xv(e,t){return S.True}function Q4(e,t){return To(t)?wv():Di(t)?lc(e,t):Qn(t)?jm(e,t):dn(t)?Lm():fn(t)?Dv(e):hr(t)?$v(e):to(t)?vv(e):ki(t)?yv(e):$i(t)?y4(e):nc(t)?Z4(e):Xe(t)?Jt(e,t):mn(t)?S.True:S.False}function e3(e,t){return ui(e)||ui(e)?S.True:S.False}function t3(e,t){return Di(t)?lc(e,t):Qn(t)?jm(e,t):mn(t)?xv():dn(t)?Lm():Xe(t)?Jt(e,t):oc(t)?S.True:S.False}function Se(e,t){return Ba(e)||Ba(t)?K4(e,t):Ia(e)||Ia(t)?z4(e,t):ds(e)||ds(t)?M4(e,t):dn(e)?b4(e,t):$i(e)?v4(e,t):Ql(e)?$4(e,t):ki(e)?k4(e,t):vm(e)?w4(e,t):ec(e)?D4(e,t):tc(e)?x4(e,t):rc(e)?A4(e,t):to(e)?E4(e,t):Di(e)?C4(e,t):wm(e)?F4(e,t):So(e)?S4(e,t):To(e)?T4():$m(e)?P4(e,t):hr(e)?N4(e,t):Xe(e)?U4(e,t):jt(e)?V4(e,t):fn(e)?q4(e,t):Oa(e)?W4(e,t):nc(e)?H4(e,t):km(e)?_4(e,t):nu(e)?J4(e,t):ui(e)?Y4(e,t):Qn(e)?X4(e,t):mn(e)?Q4(e,t):oc(e)?t3(e,t):Rs(`Unknown left type operand '${e[O]}'`)}function iu(e,t){return Se(e,t)}function r3(e,t,r,n,o){const i={};for(const s of globalThis.Object.getOwnPropertyNames(e))i[s]=Um(e[s],t,r,n,Tr(o));return i}function n3(e,t,r,n,o){return r3(e.properties,t,r,n,o)}function o3(e,t,r,n,o){const i=n3(e,t,r,n,o);return _t(i)}function i3(e,t,r,n){const o=iu(e,t);return o===S.Union?Vt([r,n]):o===S.True?r:n}function Um(e,t,r,n,o){return Or(e)?o3(e,t,r,n,o):yi(e)?R(l3(e,t,r,n,o)):R(i3(e,t,r,n),o)}function s3(e,t,r,n,o){return{[e]:Um(pt(e),t,r,n,Tr(o))}}function a3(e,t,r,n,o){return e.reduce((i,s)=>({...i,...s3(s,t,r,n,o)}),{})}function u3(e,t,r,n,o){return a3(e.keys,t,r,n,o)}function l3(e,t,r,n,o){const i=u3(e,t,r,n,o);return _t(i)}function c3(e){return e.allOf.every(t=>Ls(t))}function d3(e){return e.anyOf.some(t=>Ls(t))}function f3(e){return!Ls(e.not)}function Ls(e){return e[O]==="Intersect"?c3(e):e[O]==="Union"?d3(e):e[O]==="Not"?f3(e):e[O]==="Undefined"}function m3(e,t){return _m(wl(e),t)}function h3(e,t){const r=e.filter(n=>iu(n,t)===S.False);return r.length===1?r[0]:Vt(r)}function _m(e,t,r={}){return vi(e)?R(m3(e,t),r):Or(e)?R(b3(e,t),r):R(Pt(e)?h3(e.anyOf,t):iu(e,t)!==S.False?Qe():e,r)}function g3(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=_m(e[n],t);return r}function p3(e,t){return g3(e.properties,t)}function b3(e,t){const r=p3(e,t);return _t(r)}function y3(e,t){return Vm(wl(e),t)}function v3(e,t){const r=e.filter(n=>iu(n,t)!==S.False);return r.length===1?r[0]:Vt(r)}function Vm(e,t,r){return vi(e)?R(y3(e,t),r):Or(e)?R(k3(e,t),r):R(Pt(e)?v3(e.anyOf,t):iu(e,t)!==S.False?e:Qe(),r)}function w3(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Vm(e[n],t);return r}function $3(e,t){return w3(e.properties,t)}function k3(e,t){const r=$3(e,t);return _t(r)}function D3(e,t){return Ts(e)?R(e.returns,t):Qe(t)}function Av(e){return Po(No(e))}function Ei(e,t,r){return R({[O]:"Record",type:"object",patternProperties:{[e]:t}},r)}function zm(e,t,r){const n={};for(const o of e)n[o]=t;return Mt(n,{...r,[Gl]:"Record"})}function x3(e,t,r){return WE(e)?zm(Mo(e),t,r):Ei(e.pattern,t,r)}function A3(e,t,r){return zm(Mo(Vt(e)),t,r)}function E3(e,t,r){return zm([e.toString()],t,r)}function C3(e,t,r){return Ei(e.source,t,r)}function F3(e,t,r){const n=gt(e.pattern)?ms:e.pattern;return Ei(n,t,r)}function S3(e,t,r){return Ei(ms,t,r)}function T3(e,t,r){return Ei(kE,t,r)}function M3(e,t,r){return Mt({true:t,false:t},r)}function P3(e,t,r){return Ei(fs,t,r)}function N3(e,t,r){return Ei(fs,t,r)}function Ev(e,t,r={}){return Pt(e)?A3(e.anyOf,t,r):vi(e)?x3(e,t,r):bi(e)?E3(e.const,t,r):Qa(e)?M3(e,t,r):Ps(e)?P3(e,t,r):Ns(e)?N3(e,t,r):z1(e)?C3(e,t,r):tu(e)?F3(e,t,r):U1(e)?S3(e,t,r):eu(e)?T3(e,t,r):Qe(r)}function qm(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function I3(e){const t=qm(e);return t===ms?li():t===fs?xi():li({pattern:t})}function Cv(e){return e.patternProperties[qm(e)]}function O3(e,t){return t.parameters=su(e,t.parameters),t.returns=hn(e,t.returns),t}function B3(e,t){return t.parameters=su(e,t.parameters),t.returns=hn(e,t.returns),t}function R3(e,t){return t.allOf=su(e,t.allOf),t}function L3(e,t){return t.anyOf=su(e,t.anyOf),t}function j3(e,t){return gt(t.items)||(t.items=su(e,t.items)),t}function U3(e,t){return t.items=hn(e,t.items),t}function _3(e,t){return t.items=hn(e,t.items),t}function V3(e,t){return t.items=hn(e,t.items),t}function z3(e,t){return t.item=hn(e,t.item),t}function q3(e,t){const r=Z3(e,t.properties);return{...t,...Mt(r)}}function W3(e,t){const r=hn(e,I3(t)),n=hn(e,Cv(t)),o=Ev(r,n);return{...t,...o}}function K3(e,t){return t.index in e?e[t.index]:uc()}function G3(e,t){const r=hm(t),n=Fo(t),o=hn(e,t);return r&&n?Av(o):r&&!n?Po(o):!r&&n?No(o):o}function Z3(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:G3(e,t[n])}),{})}function su(e,t){return t.map(r=>hn(e,r))}function hn(e,t){return Ts(t)?O3(e,t):Ms(t)?B3(e,t):Hr(t)?R3(e,t):Pt(t)?L3(e,t):wi(t)?j3(e,t):Fs(t)?U3(e,t):Zl(t)?_3(e,t):Jl(t)?V3(e,t):Yl(t)?z3(e,t):bn(t)?q3(e,t):Xl(t)?W3(e,t):_1(t)?K3(e,t):t}function H3(e,t){return hn(t,dm(e))}function J3(e){return R({[O]:"Integer",type:"integer"},e)}function Y3(e,t,r){return{[e]:js(pt(e),t,Tr(r))}}function X3(e,t,r){return e.reduce((o,i)=>({...o,...Y3(i,t,r)}),{})}function Q3(e,t,r){return X3(e.keys,t,r)}function e6(e,t,r){const n=Q3(e,t,r);return _t(n)}function t6(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function r6(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function n6(e){return e.toUpperCase()}function o6(e){return e.toLowerCase()}function i6(e,t,r){const n=Pm(e.pattern);if(!ja(n))return{...e,pattern:Fv(e.pattern,t)};const s=[...ic(n)].map(l=>pt(l)),a=Sv(s,t),u=Vt(a);return ov([u],r)}function Fv(e,t){return typeof e=="string"?t==="Uncapitalize"?t6(e):t==="Capitalize"?r6(e):t==="Uppercase"?n6(e):t==="Lowercase"?o6(e):e:e.toString()}function Sv(e,t){return e.map(r=>js(r,t))}function js(e,t,r={}){return yi(e)?e6(e,t,r):vi(e)?i6(e,t,r):Pt(e)?Vt(Sv(e.anyOf,t),r):bi(e)?pt(Fv(e.const,t),r):R(e,r)}function s6(e,t={}){return js(e,"Capitalize",t)}function a6(e,t={}){return js(e,"Lowercase",t)}function u6(e,t={}){return js(e,"Uncapitalize",t)}function l6(e,t={}){return js(e,"Uppercase",t)}function c6(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=dc(e[o],t,Tr(r));return n}function d6(e,t,r){return c6(e.properties,t,r)}function f6(e,t,r){const n=d6(e,t,r);return _t(n)}function m6(e,t){return e.map(r=>Wm(r,t))}function h6(e,t){return e.map(r=>Wm(r,t))}function g6(e,t){const{[t]:r,...n}=e;return n}function p6(e,t){return t.reduce((r,n)=>g6(r,n),e)}function b6(e,t,r){const n=Pr(e,[mr,"$id","required","properties"]),o=p6(r,t);return Mt(o,n)}function y6(e){const t=e.reduce((r,n)=>V1(n)?[...r,pt(n)]:r,[]);return Vt(t)}function Wm(e,t){return Hr(e)?Io(m6(e.allOf,t)):Pt(e)?Vt(h6(e.anyOf,t)):bn(e)?b6(e,t,e.properties):Mt({})}function dc(e,t,r){const n=yr(t)?y6(t):t,o=ir(t)?Mo(t):t,i=pr(e),s=pr(t);return Or(e)?f6(e,o,r):yi(t)?k6(e,t,r):i&&s?kt("Omit",[e,n],r):!i&&s?kt("Omit",[e,n],r):i&&!s?kt("Omit",[e,n],r):R({...Wm(e,o),...r})}function v6(e,t,r){return{[t]:dc(e,[t],Tr(r))}}function w6(e,t,r){return t.reduce((n,o)=>({...n,...v6(e,o,r)}),{})}function $6(e,t,r){return w6(e,t.keys,r)}function k6(e,t,r){const n=$6(e,t,r);return _t(n)}function D6(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=fc(e[o],t,Tr(r));return n}function x6(e,t,r){return D6(e.properties,t,r)}function A6(e,t,r){const n=x6(e,t,r);return _t(n)}function E6(e,t){return e.map(r=>Km(r,t))}function C6(e,t){return e.map(r=>Km(r,t))}function F6(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function S6(e,t,r){const n=Pr(e,[mr,"$id","required","properties"]),o=F6(r,t);return Mt(o,n)}function T6(e){const t=e.reduce((r,n)=>V1(n)?[...r,pt(n)]:r,[]);return Vt(t)}function Km(e,t){return Hr(e)?Io(E6(e.allOf,t)):Pt(e)?Vt(C6(e.anyOf,t)):bn(e)?S6(e,t,e.properties):Mt({})}function fc(e,t,r){const n=yr(t)?T6(t):t,o=ir(t)?Mo(t):t,i=pr(e),s=pr(t);return Or(e)?A6(e,o,r):yi(t)?I6(e,t,r):i&&s?kt("Pick",[e,n],r):!i&&s?kt("Pick",[e,n],r):i&&!s?kt("Pick",[e,n],r):R({...Km(e,o),...r})}function M6(e,t,r){return{[t]:fc(e,[t],Tr(r))}}function P6(e,t,r){return t.reduce((n,o)=>({...n,...M6(e,o,r)}),{})}function N6(e,t,r){return P6(e,t.keys,r)}function I6(e,t,r){const n=N6(e,t,r);return _t(n)}function O6(e,t){return kt("Partial",[kt(e,t)])}function B6(e){return kt("Partial",[Bs(e)])}function R6(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=No(e[r]);return t}function L6(e,t){const r=Pr(e,[mr,"$id","required","properties"]),n=R6(t);return Mt(n,r)}function Ug(e){return e.map(t=>Tv(t))}function Tv(e){return Ss(e)?O6(e.target,e.parameters):pr(e)?B6(e.$ref):Hr(e)?Io(Ug(e.allOf)):Pt(e)?Vt(Ug(e.anyOf)):bn(e)?L6(e,e.properties):Hl(e)||Qa(e)||Ps(e)||bi(e)||gm(e)||Ns(e)||tu(e)||pm(e)||ru(e)?e:Mt({})}function Gm(e,t){return Or(e)?_6(e,t):R({...Tv(e),...t})}function j6(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Gm(e[n],Tr(t));return r}function U6(e,t){return j6(e.properties,t)}function _6(e,t){const r=U6(e,t);return _t(r)}function V6(e,t){return kt("Required",[kt(e,t)])}function z6(e){return kt("Required",[Bs(e)])}function q6(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Pr(e[r],[eo]);return t}function W6(e,t){const r=Pr(e,[mr,"$id","required","properties"]),n=q6(t);return Mt(n,r)}function _g(e){return e.map(t=>Mv(t))}function Mv(e){return Ss(e)?V6(e.target,e.parameters):pr(e)?z6(e.$ref):Hr(e)?Io(_g(e.allOf)):Pt(e)?Vt(_g(e.anyOf)):bn(e)?W6(e,e.properties):Hl(e)||Qa(e)||Ps(e)||bi(e)||gm(e)||Ns(e)||tu(e)||pm(e)||ru(e)?e:Mt({})}function Zm(e,t){return Or(e)?Z6(e,t):R({...Mv(e),...t})}function K6(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Zm(e[n],t);return r}function G6(e,t){return K6(e.properties,t)}function Z6(e,t){const r=G6(e,t);return _t(r)}function H6(e,t){return t.map(r=>pr(r)?Hm(e,r.$ref):Nr(e,r))}function Hm(e,t){return t in e?pr(e[t])?Hm(e,e[t].$ref):Nr(e,e[t]):Qe()}function J6(e){return ac(e[0])}function Y6(e){return sc(e[0],e[1])}function X6(e){return Bm(e[0])}function Q6(e){return Gm(e[0])}function eF(e){return dc(e[0],e[1])}function tF(e){return fc(e[0],e[1])}function rF(e){return Zm(e[0])}function nF(e,t,r){const n=H6(e,r);return t==="Awaited"?J6(n):t==="Index"?Y6(n):t==="KeyOf"?X6(n):t==="Partial"?Q6(n):t==="Omit"?eF(n):t==="Pick"?tF(n):t==="Required"?rF(n):Qe()}function oF(e,t){return Fm(Nr(e,t))}function iF(e,t){return Sm(Nr(e,t))}function sF(e,t,r){return Tm(au(e,t),Nr(e,r))}function aF(e,t,r){return ou(au(e,t),Nr(e,r))}function uF(e,t){return Io(au(e,t))}function lF(e,t){return Om(Nr(e,t))}function cF(e,t){return Mt(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:Nr(e,t[n])}),{}))}function dF(e,t){const[r,n]=[Nr(e,Cv(t)),qm(t)],o=dm(t);return o.patternProperties[n]=r,o}function fF(e,t){return pr(t)?{...Hm(e,t.$ref),[mr]:t[mr]}:t}function mF(e,t){return Os(au(e,t))}function hF(e,t){return Vt(au(e,t))}function au(e,t){return t.map(r=>Nr(e,r))}function Nr(e,t){return Fo(t)?R(Nr(e,Pr(t,[eo])),t):hm(t)?R(Nr(e,Pr(t,[Xa])),t):Be(t)?R(fF(e,t),t):Fs(t)?R(oF(e,t.items),t):Zl(t)?R(iF(e,t.items),t):Ss(t)?R(nF(e,t.target,t.parameters)):Ts(t)?R(sF(e,t.parameters,t.returns),t):Ms(t)?R(aF(e,t.parameters,t.returns),t):Hr(t)?R(uF(e,t.allOf),t):Jl(t)?R(lF(e,t.items),t):bn(t)?R(cF(e,t.properties),t):Xl(t)?R(dF(e,t)):wi(t)?R(mF(e,t.items||[]),t):Pt(t)?R(hF(e,t.anyOf),t):t}function gF(e,t){return t in e?Nr(e,e[t]):Qe()}function pF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:gF(e,r)}),{})}class bF{constructor(t){const r=pF(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:R(this.$defs[t],r)};return R({[O]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function yF(e){return new bF(e)}function vF(e,t){return R({[O]:"Not",not:e},t)}function wF(e,t){return Ms(e)?Os(e.parameters,t):Qe()}let $F=0;function kF(e,t={}){gt(t.$id)&&(t.$id=`T${$F++}`);const r=dm(e({[O]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,R({[Gl]:"Recursive",...r},t)}function DF(e,t){const r=ct(e)?new globalThis.RegExp(e):e;return R({[O]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function xF(e){return Hr(e)?e.allOf:Pt(e)?e.anyOf:wi(e)?e.items??[]:[]}function AF(e){return xF(e)}function EF(e,t){return Ms(e)?R(e.returns,t):Qe(t)}class CF{constructor(t){this.schema=t}Decode(t){return new FF(this.schema,t)}}class FF{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const i={Encode:s=>r[mr].Encode(t(s)),Decode:s=>this.decode(r[mr].Decode(s))};return{...r,[mr]:i}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[mr]:n}}Encode(t){return Be(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function SF(e){return new CF(e)}function TF(e={}){return R({[O]:e[O]??"Unsafe"},e)}function MF(e){return R({[O]:"Void",type:"void"},e)}const PF=Object.freeze(Object.defineProperty({__proto__:null,Any:Ra,Argument:SE,Array:Fm,AsyncIterator:Sm,Awaited:ac,BigInt:Nm,Boolean:rv,Capitalize:s6,Composite:c4,Const:m4,Constructor:Tm,ConstructorParameters:h4,Date:mv,Enum:g4,Exclude:_m,Extends:Um,Extract:Vm,Function:ou,Index:sc,InstanceType:D3,Instantiate:H3,Integer:J3,Intersect:Io,Iterator:Om,KeyOf:Bm,Literal:pt,Lowercase:a6,Mapped:PC,Module:yF,Never:Qe,Not:vF,Null:hv,Number:xi,Object:Mt,Omit:dc,Optional:No,Parameters:wF,Partial:Gm,Pick:fc,Promise:av,Readonly:Po,ReadonlyOptional:Av,Record:Ev,Recursive:kF,Ref:Bs,RegExp:DF,Required:Zm,Rest:AF,ReturnType:EF,String:li,Symbol:gv,TemplateLiteral:ov,Transform:SF,Tuple:Os,Uint8Array:bv,Uncapitalize:u6,Undefined:pv,Union:Vt,Unknown:uc,Unsafe:TF,Uppercase:l6,Void:MF},Symbol.toStringTag,{value:"Module"})),Ne=PF;function Pv(e){switch(e.errorType){case C.ArrayContains:return"Expected array to contain at least one matching value";case C.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case C.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case C.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case C.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case C.ArrayUniqueItems:return"Expected array elements to be unique";case C.Array:return"Expected array";case C.AsyncIterator:return"Expected AsyncIterator";case C.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case C.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case C.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case C.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case C.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case C.BigInt:return"Expected bigint";case C.Boolean:return"Expected boolean";case C.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case C.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case C.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case C.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case C.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case C.Date:return"Expected Date";case C.Function:return"Expected function";case C.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case C.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case C.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case C.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case C.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case C.Integer:return"Expected integer";case C.IntersectUnevaluatedProperties:return"Unexpected property";case C.Intersect:return"Expected all values to match";case C.Iterator:return"Expected Iterator";case C.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case C.Never:return"Never";case C.Not:return"Value should not match";case C.Null:return"Expected null";case C.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case C.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case C.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case C.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case C.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case C.Number:return"Expected number";case C.Object:return"Expected object";case C.ObjectAdditionalProperties:return"Unexpected property";case C.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case C.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case C.ObjectRequiredProperty:return"Expected required property";case C.Promise:return"Expected Promise";case C.RegExp:return"Expected string to match regular expression";case C.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case C.StringFormat:return`Expected string to match '${e.schema.format}' format`;case C.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case C.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case C.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case C.String:return"Expected string";case C.Symbol:return"Expected symbol";case C.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case C.Tuple:return"Expected tuple";case C.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case C.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case C.Uint8Array:return"Expected Uint8Array";case C.Undefined:return"Expected undefined";case C.Union:return"Expected union value";case C.Void:return"Expected void";case C.Kind:return`Expected kind '${e.schema[O]}'`;default:return"Unknown error type"}}let Nv=Pv;function NF(e){Nv=e}function IF(){return Nv}class OF extends Ut{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function BF(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new OF(e);return Yr(r,t)}function mc(e,t){return!Er(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function Yr(e,t){return e[O]==="This"||e[O]==="Ref"?BF(e,t):e}class RF extends Ut{constructor(t){super("Unable to hash value"),this.value=t}}var Ir;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(Ir||(Ir={}));let zi=BigInt("14695981039346656037");const[LF,jF]=[BigInt("1099511628211"),BigInt("18446744073709551616")],UF=Array.from({length:256}).map((e,t)=>BigInt(t)),Iv=new Float64Array(1),Ov=new DataView(Iv.buffer),Bv=new Uint8Array(Iv.buffer);function*_F(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function VF(e){Zt(Ir.Array);for(const t of e)ps(t)}function zF(e){Zt(Ir.Boolean),Zt(e?1:0)}function qF(e){Zt(Ir.BigInt),Ov.setBigInt64(0,e);for(const t of Bv)Zt(t)}function WF(e){Zt(Ir.Date),ps(e.getTime())}function KF(e){Zt(Ir.Null)}function GF(e){Zt(Ir.Number),Ov.setFloat64(0,e);for(const t of Bv)Zt(t)}function ZF(e){Zt(Ir.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())ps(t),ps(e[t])}function HF(e){Zt(Ir.String);for(let t=0;t<e.length;t++)for(const r of _F(e.charCodeAt(t)))Zt(r)}function JF(e){Zt(Ir.Symbol),ps(e.description)}function YF(e){Zt(Ir.Uint8Array);for(let t=0;t<e.length;t++)Zt(e[t])}function XF(e){return Zt(Ir.Undefined)}function ps(e){if(Mr(e))return VF(e);if(Wl(e))return zF(e);if(Vn(e))return qF(e);if(fm(e))return WF(e);if(ql(e))return KF();if(se(e))return GF(e);if(Sn(e))return ZF(e);if(Er(e))return HF(e);if(Kl(e))return JF(e);if(mm(e))return YF(e);if(Co(e))return XF();throw new RF(e)}function Zt(e){zi=zi^UF[e],zi=zi*LF%jF}function Jm(e){return zi=BigInt("14695981039346656037"),ps(e),zi}class QF extends Ut{constructor(t){super("Unknown type"),this.schema=t}}function e8(e){return e[O]==="Any"||e[O]==="Unknown"}function ce(e){return e!==void 0}function t8(e,t,r){return!0}function r8(e,t,r){return!0}function n8(e,t,r){if(!Mr(r)||ce(e.minItems)&&!(r.length>=e.minItems)||ce(e.maxItems)&&!(r.length<=e.maxItems)||!r.every(i=>Ft(e.items,t,i))||e.uniqueItems===!0&&!(function(){const i=new Set;for(const s of r){const a=Jm(s);if(i.has(a))return!1;i.add(a)}return!0})())return!1;if(!(ce(e.contains)||se(e.minContains)||se(e.maxContains)))return!0;const n=ce(e.contains)?e.contains:Qe(),o=r.reduce((i,s)=>Ft(n,t,s)?i+1:i,0);return!(o===0||se(e.minContains)&&o<e.minContains||se(e.maxContains)&&o>e.maxContains)}function o8(e,t,r){return N1(r)}function i8(e,t,r){return!(!Vn(r)||ce(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ce(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ce(e.maximum)&&!(r<=e.maximum)||ce(e.minimum)&&!(r>=e.minimum)||ce(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function s8(e,t,r){return Wl(r)}function a8(e,t,r){return Ft(e.returns,t,r.prototype)}function u8(e,t,r){return!(!fm(r)||ce(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||ce(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||ce(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||ce(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||ce(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function l8(e,t,r){return L1(r)}function c8(e,t,r){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return Ft(o,[...t,...n],r)}function d8(e,t,r){return!(!R1(r)||ce(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ce(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ce(e.maximum)&&!(r<=e.maximum)||ce(e.minimum)&&!(r>=e.minimum)||ce(e.multipleOf)&&r%e.multipleOf!==0)}function f8(e,t,r){const n=e.allOf.every(o=>Ft(o,t,r));if(e.unevaluatedProperties===!1){const o=new RegExp(gs(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s));return n&&i}else if(ir(e.unevaluatedProperties)){const o=new RegExp(gs(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s)||Ft(e.unevaluatedProperties,t,r[s]));return n&&i}else return n}function m8(e,t,r){return I1(r)}function h8(e,t,r){return r===e.const}function g8(e,t,r){return!1}function p8(e,t,r){return!Ft(e.not,t,r)}function b8(e,t,r){return ql(r)}function y8(e,t,r){return!(!lt.IsNumberLike(r)||ce(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||ce(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||ce(e.minimum)&&!(r>=e.minimum)||ce(e.maximum)&&!(r<=e.maximum)||ce(e.multipleOf)&&r%e.multipleOf!==0)}function v8(e,t,r){if(!lt.IsObjectLike(r)||ce(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||ce(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const i=e.properties[o];if(e.required&&e.required.includes(o)){if(!Ft(i,t,r[o])||(Ls(i)||e8(i))&&!(o in r))return!1}else if(lt.IsExactOptionalProperty(r,o)&&!Ft(i,t,r[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(i=>n.includes(i))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(i=>n.includes(i)||Ft(e.additionalProperties,t,r[i])):!0}function w8(e,t,r){return O1(r)}function $8(e,t,r){if(!lt.IsRecordLike(r)||ce(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||ce(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],i=new RegExp(n),s=Object.entries(r).every(([l,c])=>i.test(l)?Ft(o,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([l,c])=>i.test(l)?!0:Ft(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(l=>i.test(l)):!0;return s&&a&&u}function k8(e,t,r){return Ft(Yr(e,t),t,r)}function D8(e,t,r){const n=new RegExp(e.source,e.flags);return ce(e.minLength)&&!(r.length>=e.minLength)||ce(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function x8(e,t,r){return!Er(r)||ce(e.minLength)&&!(r.length>=e.minLength)||ce(e.maxLength)&&!(r.length<=e.maxLength)||ce(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:ce(e.format)?Dm(e.format)?xm(e.format)(r):!1:!0}function A8(e,t,r){return Kl(r)}function E8(e,t,r){return Er(r)&&new RegExp(e.pattern).test(r)}function C8(e,t,r){return Ft(Yr(e,t),t,r)}function F8(e,t,r){if(!Mr(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!Ft(e.items[n],t,r[n]))return!1;return!0}function S8(e,t,r){return Co(r)}function T8(e,t,r){return e.anyOf.some(n=>Ft(n,t,r))}function M8(e,t,r){return!(!mm(r)||ce(e.maxByteLength)&&!(r.length<=e.maxByteLength)||ce(e.minByteLength)&&!(r.length>=e.minByteLength))}function P8(e,t,r){return!0}function N8(e,t,r){return lt.IsVoidLike(r)}function I8(e,t,r){return Ao(e[O])?Cm(e[O])(e,r):!1}function Ft(e,t,r){const n=ce(e.$id)?mc(e,t):t,o=e;switch(o[O]){case"Any":return t8();case"Argument":return r8();case"Array":return n8(o,n,r);case"AsyncIterator":return o8(o,n,r);case"BigInt":return i8(o,n,r);case"Boolean":return s8(o,n,r);case"Constructor":return a8(o,n,r);case"Date":return u8(o,n,r);case"Function":return l8(o,n,r);case"Import":return c8(o,n,r);case"Integer":return d8(o,n,r);case"Intersect":return f8(o,n,r);case"Iterator":return m8(o,n,r);case"Literal":return h8(o,n,r);case"Never":return g8();case"Not":return p8(o,n,r);case"Null":return b8(o,n,r);case"Number":return y8(o,n,r);case"Object":return v8(o,n,r);case"Promise":return w8(o,n,r);case"Record":return $8(o,n,r);case"Ref":return k8(o,n,r);case"RegExp":return D8(o,n,r);case"String":return x8(o,n,r);case"Symbol":return A8(o,n,r);case"TemplateLiteral":return E8(o,n,r);case"This":return C8(o,n,r);case"Tuple":return F8(o,n,r);case"Undefined":return S8(o,n,r);case"Union":return T8(o,n,r);case"Uint8Array":return M8(o,n,r);case"Unknown":return P8();case"Void":return N8(o,n,r);default:if(!Ao(o[O]))throw new QF(o);return I8(o,n,r)}}function $l(...e){return e.length===3?Ft(e[0],e[1],e[2]):Ft(e[0],[],e[1])}var C;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(C||(C={}));class O8 extends Ut{constructor(t){super("Unknown type"),this.schema=t}}function jn(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function le(e){return e!==void 0}class Rv{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function L(e,t,r,n,o=[]){return{type:e,schema:t,path:r,value:n,message:IF()({errorType:e,path:r,schema:t,value:n,errors:o}),errors:o}}function*B8(e,t,r,n){}function*R8(e,t,r,n){}function*L8(e,t,r,n){if(!Mr(n))return yield L(C.Array,e,r,n);le(e.minItems)&&!(n.length>=e.minItems)&&(yield L(C.ArrayMinItems,e,r,n)),le(e.maxItems)&&!(n.length<=e.maxItems)&&(yield L(C.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*St(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const u=Jm(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield L(C.ArrayUniqueItems,e,r,n)),!(le(e.contains)||le(e.minContains)||le(e.maxContains)))return;const o=le(e.contains)?e.contains:Qe(),i=n.reduce((s,a,u)=>St(o,t,`${r}${u}`,a).next().done===!0?s+1:s,0);i===0&&(yield L(C.ArrayContains,e,r,n)),se(e.minContains)&&i<e.minContains&&(yield L(C.ArrayMinContains,e,r,n)),se(e.maxContains)&&i>e.maxContains&&(yield L(C.ArrayMaxContains,e,r,n))}function*j8(e,t,r,n){N1(n)||(yield L(C.AsyncIterator,e,r,n))}function*U8(e,t,r,n){if(!Vn(n))return yield L(C.BigInt,e,r,n);le(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield L(C.BigIntExclusiveMaximum,e,r,n)),le(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield L(C.BigIntExclusiveMinimum,e,r,n)),le(e.maximum)&&!(n<=e.maximum)&&(yield L(C.BigIntMaximum,e,r,n)),le(e.minimum)&&!(n>=e.minimum)&&(yield L(C.BigIntMinimum,e,r,n)),le(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield L(C.BigIntMultipleOf,e,r,n))}function*_8(e,t,r,n){Wl(n)||(yield L(C.Boolean,e,r,n))}function*V8(e,t,r,n){yield*St(e.returns,t,r,n.prototype)}function*z8(e,t,r,n){if(!fm(n))return yield L(C.Date,e,r,n);le(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield L(C.DateExclusiveMaximumTimestamp,e,r,n)),le(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield L(C.DateExclusiveMinimumTimestamp,e,r,n)),le(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield L(C.DateMaximumTimestamp,e,r,n)),le(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield L(C.DateMinimumTimestamp,e,r,n)),le(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield L(C.DateMultipleOfTimestamp,e,r,n))}function*q8(e,t,r,n){L1(n)||(yield L(C.Function,e,r,n))}function*W8(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];yield*St(i,[...t,...o],r,n)}function*K8(e,t,r,n){if(!R1(n))return yield L(C.Integer,e,r,n);le(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield L(C.IntegerExclusiveMaximum,e,r,n)),le(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield L(C.IntegerExclusiveMinimum,e,r,n)),le(e.maximum)&&!(n<=e.maximum)&&(yield L(C.IntegerMaximum,e,r,n)),le(e.minimum)&&!(n>=e.minimum)&&(yield L(C.IntegerMinimum,e,r,n)),le(e.multipleOf)&&n%e.multipleOf!==0&&(yield L(C.IntegerMultipleOf,e,r,n))}function*G8(e,t,r,n){let o=!1;for(const i of e.allOf)for(const s of St(i,t,r,n))o=!0,yield s;if(o)return yield L(C.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const i=new RegExp(gs(e));for(const s of Object.getOwnPropertyNames(n))i.test(s)||(yield L(C.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const i=new RegExp(gs(e));for(const s of Object.getOwnPropertyNames(n))if(!i.test(s)){const a=St(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*Z8(e,t,r,n){I1(n)||(yield L(C.Iterator,e,r,n))}function*H8(e,t,r,n){n!==e.const&&(yield L(C.Literal,e,r,n))}function*J8(e,t,r,n){yield L(C.Never,e,r,n)}function*Y8(e,t,r,n){St(e.not,t,r,n).next().done===!0&&(yield L(C.Not,e,r,n))}function*X8(e,t,r,n){ql(n)||(yield L(C.Null,e,r,n))}function*Q8(e,t,r,n){if(!lt.IsNumberLike(n))return yield L(C.Number,e,r,n);le(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield L(C.NumberExclusiveMaximum,e,r,n)),le(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield L(C.NumberExclusiveMinimum,e,r,n)),le(e.maximum)&&!(n<=e.maximum)&&(yield L(C.NumberMaximum,e,r,n)),le(e.minimum)&&!(n>=e.minimum)&&(yield L(C.NumberMinimum,e,r,n)),le(e.multipleOf)&&n%e.multipleOf!==0&&(yield L(C.NumberMultipleOf,e,r,n))}function*eS(e,t,r,n){if(!lt.IsObjectLike(n))return yield L(C.Object,e,r,n);le(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield L(C.ObjectMinProperties,e,r,n)),le(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield L(C.ObjectMaxProperties,e,r,n));const o=Array.isArray(e.required)?e.required:[],i=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of o)s.includes(a)||(yield L(C.ObjectRequiredProperty,e.properties[a],`${r}/${jn(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)i.includes(a)||(yield L(C.ObjectAdditionalProperties,e,`${r}/${jn(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)i.includes(a)||(yield*St(e.additionalProperties,t,`${r}/${jn(a)}`,n[a]));for(const a of i){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*St(u,t,`${r}/${jn(a)}`,n[a]),Ls(e)&&!(a in n)&&(yield L(C.ObjectRequiredProperty,u,`${r}/${jn(a)}`,void 0))):lt.IsExactOptionalProperty(n,a)&&(yield*St(u,t,`${r}/${jn(a)}`,n[a]))}}function*tS(e,t,r,n){O1(n)||(yield L(C.Promise,e,r,n))}function*rS(e,t,r,n){if(!lt.IsRecordLike(n))return yield L(C.Object,e,r,n);le(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield L(C.ObjectMinProperties,e,r,n)),le(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield L(C.ObjectMaxProperties,e,r,n));const[o,i]=Object.entries(e.patternProperties)[0],s=new RegExp(o);for(const[a,u]of Object.entries(n))s.test(a)&&(yield*St(i,t,`${r}/${jn(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(n))s.test(a)||(yield*St(e.additionalProperties,t,`${r}/${jn(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(n))if(!s.test(a))return yield L(C.ObjectAdditionalProperties,e,`${r}/${jn(a)}`,u)}}function*nS(e,t,r,n){yield*St(Yr(e,t),t,r,n)}function*oS(e,t,r,n){if(!Er(n))return yield L(C.String,e,r,n);if(le(e.minLength)&&!(n.length>=e.minLength)&&(yield L(C.StringMinLength,e,r,n)),le(e.maxLength)&&!(n.length<=e.maxLength)&&(yield L(C.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield L(C.RegExp,e,r,n)}function*iS(e,t,r,n){if(!Er(n))return yield L(C.String,e,r,n);le(e.minLength)&&!(n.length>=e.minLength)&&(yield L(C.StringMinLength,e,r,n)),le(e.maxLength)&&!(n.length<=e.maxLength)&&(yield L(C.StringMaxLength,e,r,n)),Er(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield L(C.StringPattern,e,r,n))),Er(e.format)&&(Dm(e.format)?xm(e.format)(n)||(yield L(C.StringFormat,e,r,n)):yield L(C.StringFormatUnknown,e,r,n))}function*sS(e,t,r,n){Kl(n)||(yield L(C.Symbol,e,r,n))}function*aS(e,t,r,n){if(!Er(n))return yield L(C.String,e,r,n);new RegExp(e.pattern).test(n)||(yield L(C.StringPattern,e,r,n))}function*uS(e,t,r,n){yield*St(Yr(e,t),t,r,n)}function*lS(e,t,r,n){if(!Mr(n))return yield L(C.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield L(C.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield L(C.TupleLength,e,r,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*St(e.items[o],t,`${r}/${o}`,n[o])}function*cS(e,t,r,n){Co(n)||(yield L(C.Undefined,e,r,n))}function*dS(e,t,r,n){if($l(e,t,n))return;const o=e.anyOf.map(i=>new Rv(St(i,t,r,n)));yield L(C.Union,e,r,n,o)}function*fS(e,t,r,n){if(!mm(n))return yield L(C.Uint8Array,e,r,n);le(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield L(C.Uint8ArrayMaxByteLength,e,r,n)),le(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield L(C.Uint8ArrayMinByteLength,e,r,n))}function*mS(e,t,r,n){}function*hS(e,t,r,n){lt.IsVoidLike(n)||(yield L(C.Void,e,r,n))}function*gS(e,t,r,n){Cm(e[O])(e,n)||(yield L(C.Kind,e,r,n))}function*St(e,t,r,n){const o=le(e.$id)?[...t,e]:t,i=e;switch(i[O]){case"Any":return yield*B8();case"Argument":return yield*R8();case"Array":return yield*L8(i,o,r,n);case"AsyncIterator":return yield*j8(i,o,r,n);case"BigInt":return yield*U8(i,o,r,n);case"Boolean":return yield*_8(i,o,r,n);case"Constructor":return yield*V8(i,o,r,n);case"Date":return yield*z8(i,o,r,n);case"Function":return yield*q8(i,o,r,n);case"Import":return yield*W8(i,o,r,n);case"Integer":return yield*K8(i,o,r,n);case"Intersect":return yield*G8(i,o,r,n);case"Iterator":return yield*Z8(i,o,r,n);case"Literal":return yield*H8(i,o,r,n);case"Never":return yield*J8(i,o,r,n);case"Not":return yield*Y8(i,o,r,n);case"Null":return yield*X8(i,o,r,n);case"Number":return yield*Q8(i,o,r,n);case"Object":return yield*eS(i,o,r,n);case"Promise":return yield*tS(i,o,r,n);case"Record":return yield*rS(i,o,r,n);case"Ref":return yield*nS(i,o,r,n);case"RegExp":return yield*oS(i,o,r,n);case"String":return yield*iS(i,o,r,n);case"Symbol":return yield*sS(i,o,r,n);case"TemplateLiteral":return yield*aS(i,o,r,n);case"This":return yield*uS(i,o,r,n);case"Tuple":return yield*lS(i,o,r,n);case"Undefined":return yield*cS(i,o,r,n);case"Union":return yield*dS(i,o,r,n);case"Uint8Array":return yield*fS(i,o,r,n);case"Unknown":return yield*mS();case"Void":return yield*hS(i,o,r,n);default:if(!Ao(i[O]))throw new O8(e);return yield*gS(i,o,r,n)}}function pS(...e){const t=e.length===3?St(e[0],e[1],"",e[2]):St(e[0],[],"",e[1]);return new Rv(t)}class bS extends Ut{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class yS extends Ut{constructor(t,r,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=o}}function ze(e,t,r){try{return Be(e)?e[mr].Decode(r):r}catch(n){throw new yS(e,t,r,n)}}function vS(e,t,r,n){return Mr(n)?ze(e,r,n.map((o,i)=>yn(e.items,t,`${r}/${i}`,o))):ze(e,r,n)}function wS(e,t,r,n){if(!Sn(n)||j1(n))return ze(e,r,n);const o=fv(e),i=o.map(c=>c[0]),s={...n};for(const[c,d]of o)c in s&&(s[c]=yn(d,t,`${r}/${c}`,s[c]));if(!Be(e.unevaluatedProperties))return ze(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)i.includes(c)||(l[c]=ze(u,`${r}/${c}`,l[c]));return ze(e,r,l)}function $S(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=yn(i,[...t,...o],r,n);return ze(e,r,s)}function kS(e,t,r,n){return ze(e,r,yn(e.not,t,r,n))}function DS(e,t,r,n){if(!Sn(n))return ze(e,r,n);const o=Ai(e),i={...n};for(const l of o)B1(i,l)&&(Co(i[l])&&(!ru(e.properties[l])||lt.IsExactOptionalProperty(i,l))||(i[l]=yn(e.properties[l],t,`${r}/${l}`,i[l])));if(!ir(e.additionalProperties))return ze(e,r,i);const s=Object.getOwnPropertyNames(i),a=e.additionalProperties,u={...i};for(const l of s)o.includes(l)||(u[l]=ze(a,`${r}/${l}`,u[l]));return ze(e,r,u)}function xS(e,t,r,n){if(!Sn(n))return ze(e,r,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],i=new RegExp(o),s={...n};for(const c of Object.getOwnPropertyNames(n))i.test(c)&&(s[c]=yn(e.patternProperties[o],t,`${r}/${c}`,s[c]));if(!ir(e.additionalProperties))return ze(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)i.test(c)||(l[c]=ze(u,`${r}/${c}`,l[c]));return ze(e,r,l)}function AS(e,t,r,n){const o=Yr(e,t);return ze(e,r,yn(o,t,r,n))}function ES(e,t,r,n){const o=Yr(e,t);return ze(e,r,yn(o,t,r,n))}function CS(e,t,r,n){return Mr(n)&&Mr(e.items)?ze(e,r,e.items.map((o,i)=>yn(o,t,`${r}/${i}`,n[i]))):ze(e,r,n)}function FS(e,t,r,n){for(const o of e.anyOf){if(!$l(o,t,n))continue;const i=yn(o,t,r,n);return ze(e,r,i)}return ze(e,r,n)}function yn(e,t,r,n){const o=mc(e,t),i=e;switch(e[O]){case"Array":return vS(i,o,r,n);case"Import":return $S(i,o,r,n);case"Intersect":return wS(i,o,r,n);case"Not":return kS(i,o,r,n);case"Object":return DS(i,o,r,n);case"Record":return xS(i,o,r,n);case"Ref":return AS(i,o,r,n);case"Symbol":return ze(i,r,n);case"This":return ES(i,o,r,n);case"Tuple":return CS(i,o,r,n);case"Union":return FS(i,o,r,n);default:return ze(i,r,n)}}function SS(e,t,r){return yn(e,t,"",r)}class TS extends Ut{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class MS extends Ut{constructor(t,r,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=o}}function Lt(e,t,r){try{return Be(e)?e[mr].Encode(r):r}catch(n){throw new MS(e,t,r,n)}}function PS(e,t,r,n){const o=Lt(e,r,n);return Mr(o)?o.map((i,s)=>gn(e.items,t,`${r}/${s}`,i)):o}function NS(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=Lt(e,r,n);return gn(i,[...t,...o],r,s)}function IS(e,t,r,n){const o=Lt(e,r,n);if(!Sn(n)||j1(n))return o;const i=fv(e),s=i.map(d=>d[0]),a={...o};for(const[d,m]of i)d in a&&(a[d]=gn(m,t,`${r}/${d}`,a[d]));if(!Be(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const d of u)s.includes(d)||(c[d]=Lt(l,`${r}/${d}`,c[d]));return c}function OS(e,t,r,n){return Lt(e.not,r,Lt(e,r,n))}function BS(e,t,r,n){const o=Lt(e,r,n);if(!Sn(o))return o;const i=Ai(e),s={...o};for(const c of i)B1(s,c)&&(Co(s[c])&&(!ru(e.properties[c])||lt.IsExactOptionalProperty(s,c))||(s[c]=gn(e.properties[c],t,`${r}/${c}`,s[c])));if(!ir(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)i.includes(c)||(l[c]=Lt(u,`${r}/${c}`,l[c]));return l}function RS(e,t,r,n){const o=Lt(e,r,n);if(!Sn(n))return o;const i=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(i),a={...o};for(const d of Object.getOwnPropertyNames(n))s.test(d)&&(a[d]=gn(e.patternProperties[i],t,`${r}/${d}`,a[d]));if(!ir(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const d of u)s.test(d)||(c[d]=Lt(l,`${r}/${d}`,c[d]));return c}function LS(e,t,r,n){const o=Yr(e,t),i=gn(o,t,r,n);return Lt(e,r,i)}function jS(e,t,r,n){const o=Yr(e,t),i=gn(o,t,r,n);return Lt(e,r,i)}function US(e,t,r,n){const o=Lt(e,r,n);return Mr(e.items)?e.items.map((i,s)=>gn(i,t,`${r}/${s}`,o[s])):[]}function _S(e,t,r,n){for(const o of e.anyOf){if(!$l(o,t,n))continue;const i=gn(o,t,r,n);return Lt(e,r,i)}for(const o of e.anyOf){const i=gn(o,t,r,n);if($l(e,t,i))return Lt(e,r,i)}return Lt(e,r,n)}function gn(e,t,r,n){const o=mc(e,t),i=e;switch(e[O]){case"Array":return PS(i,o,r,n);case"Import":return NS(i,o,r,n);case"Intersect":return IS(i,o,r,n);case"Not":return OS(i,o,r,n);case"Object":return BS(i,o,r,n);case"Record":return RS(i,o,r,n);case"Ref":return LS(i,o,r,n);case"This":return jS(i,o,r,n);case"Tuple":return US(i,o,r,n);case"Union":return _S(i,o,r,n);default:return Lt(i,r,n)}}function VS(e,t,r){return gn(e,t,"",r)}function zS(e,t){return Be(e)||Dt(e.items,t)}function qS(e,t){return Be(e)||Dt(e.items,t)}function WS(e,t){return Be(e)||Dt(e.returns,t)||e.parameters.some(r=>Dt(r,t))}function KS(e,t){return Be(e)||Dt(e.returns,t)||e.parameters.some(r=>Dt(r,t))}function GS(e,t){return Be(e)||Be(e.unevaluatedProperties)||e.allOf.some(r=>Dt(r,t))}function ZS(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,i)=>[...o,e.$defs[i]],[]),n=e.$defs[e.$ref];return Be(e)||Dt(n,[...r,...t])}function HS(e,t){return Be(e)||Dt(e.items,t)}function JS(e,t){return Be(e)||Dt(e.not,t)}function YS(e,t){return Be(e)||Object.values(e.properties).some(r=>Dt(r,t))||ir(e.additionalProperties)&&Dt(e.additionalProperties,t)}function XS(e,t){return Be(e)||Dt(e.item,t)}function QS(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return Be(e)||Dt(n,t)||ir(e.additionalProperties)&&Be(e.additionalProperties)}function e9(e,t){return Be(e)?!0:Dt(Yr(e,t),t)}function t9(e,t){return Be(e)?!0:Dt(Yr(e,t),t)}function r9(e,t){return Be(e)||!Co(e.items)&&e.items.some(r=>Dt(r,t))}function n9(e,t){return Be(e)||e.anyOf.some(r=>Dt(r,t))}function Dt(e,t){const r=mc(e,t),n=e;if(e.$id&&rf.has(e.$id))return!1;switch(e.$id&&rf.add(e.$id),e[O]){case"Array":return zS(n,r);case"AsyncIterator":return qS(n,r);case"Constructor":return WS(n,r);case"Function":return KS(n,r);case"Import":return ZS(n,r);case"Intersect":return GS(n,r);case"Iterator":return HS(n,r);case"Not":return JS(n,r);case"Object":return YS(n,r);case"Promise":return XS(n,r);case"Record":return QS(n,r);case"Ref":return e9(n,r);case"This":return t9(n,r);case"Tuple":return r9(n,r);case"Union":return n9(n,r);default:return Be(e)}}const rf=new Set;function o9(e,t){return rf.clear(),Dt(e,t)}class i9{constructor(t,r,n,o){this.schema=t,this.references=r,this.checkFunc=n,this.code=o,this.hasTransform=o9(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return pS(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new bS(this.schema,t,this.Errors(t).First());return this.hasTransform?SS(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?VS(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new TS(this.schema,t,this.Errors(t).First());return r}}var zn;(function(e){function t(i){return i===36}e.DollarSign=t;function r(i){return i===95}e.IsUnderscore=r;function n(i){return i>=65&&i<=90||i>=97&&i<=122}e.IsAlpha=n;function o(i){return i>=48&&i<=57}e.IsNumeric=o})(zn||(zn={}));var kl;(function(e){function t(i){return i.length===0?!1:zn.IsNumeric(i.charCodeAt(0))}function r(i){if(t(i))return!1;for(let s=0;s<i.length;s++){const a=i.charCodeAt(s);if(!(zn.IsAlpha(a)||zn.IsNumeric(a)||zn.DollarSign(a)||zn.IsUnderscore(a)))return!1}return!0}function n(i){return i.replace(/'/g,"\\'")}function o(i,s){return r(s)?`${i}.${s}`:`${i}['${n(s)}']`}e.Encode=o})(kl||(kl={}));var nf;(function(e){function t(r){const n=[];for(let o=0;o<r.length;o++){const i=r.charCodeAt(o);zn.IsNumeric(i)||zn.IsAlpha(i)?n.push(r.charAt(o)):n.push(`_${i}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(nf||(nf={}));var of;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(of||(of={}));class s9 extends Ut{constructor(t){super("Unknown type"),this.schema=t}}class Vg extends Ut{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Wo;(function(e){function t(s,a,u){return lt.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${kl.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function r(s){return lt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return lt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function o(s){return lt.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=o;function i(s){return lt.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=i})(Wo||(Wo={}));var pa;(function(e){function t(y){return y[O]==="Any"||y[O]==="Unknown"}function*r(y,U,x){yield"true"}function*n(y,U,x){yield"true"}function*o(y,U,x){yield`Array.isArray(${x})`;const[J,K]=[no("value","any"),no("acc","number")];se(y.maxItems)&&(yield`${x}.length <= ${y.maxItems}`),se(y.minItems)&&(yield`${x}.length >= ${y.minItems}`);const G=Qt(y.items,U,"value");if(yield`${x}.every((${J}) => ${G})`,Ye(y.contains)||se(y.minContains)||se(y.maxContains)){const Pe=Ye(y.contains)?y.contains:Qe(),ar=Qt(Pe,U,"value"),Nn=se(y.minContains)?[`(count >= ${y.minContains})`]:[],Qr=se(y.maxContains)?[`(count <= ${y.maxContains})`]:[],$n=`const count = value.reduce((${K}, ${J}) => ${ar} ? acc + 1 : acc, 0)`,fu=["(count > 0)",...Nn,...Qr].join(" && ");yield`((${J}) => { ${$n}; return ${fu}})(${x})`}y.uniqueItems===!0&&(yield`((${J}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${x})`)}function*i(y,U,x){yield`(typeof value === 'object' && Symbol.asyncIterator in ${x})`}function*s(y,U,x){yield`(typeof ${x} === 'bigint')`,Vn(y.exclusiveMaximum)&&(yield`${x} < BigInt(${y.exclusiveMaximum})`),Vn(y.exclusiveMinimum)&&(yield`${x} > BigInt(${y.exclusiveMinimum})`),Vn(y.maximum)&&(yield`${x} <= BigInt(${y.maximum})`),Vn(y.minimum)&&(yield`${x} >= BigInt(${y.minimum})`),Vn(y.multipleOf)&&(yield`(${x} % BigInt(${y.multipleOf})) === 0`)}function*a(y,U,x){yield`(typeof ${x} === 'boolean')`}function*u(y,U,x){yield*Xt(y.returns,U,`${x}.prototype`)}function*l(y,U,x){yield`(${x} instanceof Date) && Number.isFinite(${x}.getTime())`,se(y.exclusiveMaximumTimestamp)&&(yield`${x}.getTime() < ${y.exclusiveMaximumTimestamp}`),se(y.exclusiveMinimumTimestamp)&&(yield`${x}.getTime() > ${y.exclusiveMinimumTimestamp}`),se(y.maximumTimestamp)&&(yield`${x}.getTime() <= ${y.maximumTimestamp}`),se(y.minimumTimestamp)&&(yield`${x}.getTime() >= ${y.minimumTimestamp}`),se(y.multipleOfTimestamp)&&(yield`(${x}.getTime() % ${y.multipleOfTimestamp}) === 0`)}function*c(y,U,x){yield`(typeof ${x} === 'function')`}function*d(y,U,x){const J=globalThis.Object.getOwnPropertyNames(y.$defs).reduce((K,G)=>[...K,y.$defs[G]],[]);yield*Xt(Bs(y.$ref),[...U,...J],x)}function*m(y,U,x){yield`Number.isInteger(${x})`,se(y.exclusiveMaximum)&&(yield`${x} < ${y.exclusiveMaximum}`),se(y.exclusiveMinimum)&&(yield`${x} > ${y.exclusiveMinimum}`),se(y.maximum)&&(yield`${x} <= ${y.maximum}`),se(y.minimum)&&(yield`${x} >= ${y.minimum}`),se(y.multipleOf)&&(yield`(${x} % ${y.multipleOf}) === 0`)}function*h(y,U,x){const J=y.allOf.map(K=>Qt(K,U,x)).join(" && ");if(y.unevaluatedProperties===!1){const K=Rr(`${new RegExp(gs(y))};`),G=`Object.getOwnPropertyNames(${x}).every(key => ${K}.test(key))`;yield`(${J} && ${G})`}else if(Ye(y.unevaluatedProperties)){const K=Rr(`${new RegExp(gs(y))};`),G=`Object.getOwnPropertyNames(${x}).every(key => ${K}.test(key) || ${Qt(y.unevaluatedProperties,U,`${x}[key]`)})`;yield`(${J} && ${G})`}else yield`(${J})`}function*v(y,U,x){yield`(typeof value === 'object' && Symbol.iterator in ${x})`}function*$(y,U,x){typeof y.const=="number"||typeof y.const=="boolean"?yield`(${x} === ${y.const})`:yield`(${x} === '${of.Escape(y.const)}')`}function*D(y,U,x){yield"false"}function*k(y,U,x){yield`(!${Qt(y.not,U,x)})`}function*E(y,U,x){yield`(${x} === null)`}function*N(y,U,x){yield Wo.IsNumberLike(x),se(y.exclusiveMaximum)&&(yield`${x} < ${y.exclusiveMaximum}`),se(y.exclusiveMinimum)&&(yield`${x} > ${y.exclusiveMinimum}`),se(y.maximum)&&(yield`${x} <= ${y.maximum}`),se(y.minimum)&&(yield`${x} >= ${y.minimum}`),se(y.multipleOf)&&(yield`(${x} % ${y.multipleOf}) === 0`)}function*B(y,U,x){yield Wo.IsObjectLike(x),se(y.minProperties)&&(yield`Object.getOwnPropertyNames(${x}).length >= ${y.minProperties}`),se(y.maxProperties)&&(yield`Object.getOwnPropertyNames(${x}).length <= ${y.maxProperties}`);const J=Object.getOwnPropertyNames(y.properties);for(const K of J){const G=kl.Encode(x,K),Pe=y.properties[K];if(y.required&&y.required.includes(K))yield*Xt(Pe,U,G),(Ls(Pe)||t(Pe))&&(yield`('${K}' in ${x})`);else{const ar=Qt(Pe,U,G);yield Wo.IsExactOptionalProperty(x,K,ar)}}if(y.additionalProperties===!1)if(y.required&&y.required.length===J.length)yield`Object.getOwnPropertyNames(${x}).length === ${J.length}`;else{const K=`[${J.map(G=>`'${G}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${x}).every(key => ${K}.includes(key))`}if(typeof y.additionalProperties=="object"){const K=Qt(y.additionalProperties,U,`${x}[key]`),G=`[${J.map(Pe=>`'${Pe}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${x}).every(key => ${G}.includes(key) || ${K}))`}}function*q(y,U,x){yield`${x} instanceof Promise`}function*ne(y,U,x){yield Wo.IsRecordLike(x),se(y.minProperties)&&(yield`Object.getOwnPropertyNames(${x}).length >= ${y.minProperties}`),se(y.maxProperties)&&(yield`Object.getOwnPropertyNames(${x}).length <= ${y.maxProperties}`);const[J,K]=Object.entries(y.patternProperties)[0],G=Rr(`${new RegExp(J)}`),Pe=Qt(K,U,"value"),ar=Ye(y.additionalProperties)?Qt(y.additionalProperties,U,x):y.additionalProperties===!1?"false":"true",Nn=`(${G}.test(key) ? ${Pe} : ${ar})`;yield`(Object.entries(${x}).every(([key, value]) => ${Nn}))`}function*xe(y,U,x){const J=Yr(y,U);if(Ue.functions.has(y.$ref))return yield`${Pn(y.$ref)}(${x})`;yield*Xt(J,U,x)}function*pe(y,U,x){const J=Rr(`${new RegExp(y.source,y.flags)};`);yield`(typeof ${x} === 'string')`,se(y.maxLength)&&(yield`${x}.length <= ${y.maxLength}`),se(y.minLength)&&(yield`${x}.length >= ${y.minLength}`),yield`${J}.test(${x})`}function*je(y,U,x){yield`(typeof ${x} === 'string')`,se(y.maxLength)&&(yield`${x}.length <= ${y.maxLength}`),se(y.minLength)&&(yield`${x}.length >= ${y.minLength}`),y.pattern!==void 0&&(yield`${Rr(`${new RegExp(y.pattern)};`)}.test(${x})`),y.format!==void 0&&(yield`format('${y.format}', ${x})`)}function*At(y,U,x){yield`(typeof ${x} === 'symbol')`}function*Nt(y,U,x){yield`(typeof ${x} === 'string')`,yield`${Rr(`${new RegExp(y.pattern)};`)}.test(${x})`}function*vr(y,U,x){yield`${Pn(y.$ref)}(${x})`}function*vn(y,U,x){if(yield`Array.isArray(${x})`,y.items===void 0)return yield`${x}.length === 0`;yield`(${x}.length === ${y.maxItems})`;for(let J=0;J<y.items.length;J++)yield`${Qt(y.items[J],U,`${x}[${J}]`)}`}function*Xr(y,U,x){yield`${x} === undefined`}function*Oo(y,U,x){yield`(${y.anyOf.map(K=>Qt(K,U,x)).join(" || ")})`}function*Yt(y,U,x){yield`${x} instanceof Uint8Array`,se(y.maxByteLength)&&(yield`(${x}.length <= ${y.maxByteLength})`),se(y.minByteLength)&&(yield`(${x}.length >= ${y.minByteLength})`)}function*Fi(y,U,x){yield"true"}function*Si(y,U,x){yield Wo.IsVoidLike(x)}function*ro(y,U,x){const J=Ue.instances.size;Ue.instances.set(J,y),yield`kind('${y[O]}', ${J}, ${x})`}function*Xt(y,U,x,J=!0){const K=Er(y.$id)?[...U,y]:U,G=y;if(J&&Er(y.$id)){const Pe=Pn(y.$id);if(Ue.functions.has(Pe))return yield`${Pe}(${x})`;{Ue.functions.set(Pe,"<deferred>");const ar=wn(Pe,y,U,"value",!1);return Ue.functions.set(Pe,ar),yield`${Pe}(${x})`}}switch(G[O]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*o(G,K,x);case"AsyncIterator":return yield*i(G,K,x);case"BigInt":return yield*s(G,K,x);case"Boolean":return yield*a(G,K,x);case"Constructor":return yield*u(G,K,x);case"Date":return yield*l(G,K,x);case"Function":return yield*c(G,K,x);case"Import":return yield*d(G,K,x);case"Integer":return yield*m(G,K,x);case"Intersect":return yield*h(G,K,x);case"Iterator":return yield*v(G,K,x);case"Literal":return yield*$(G,K,x);case"Never":return yield*D();case"Not":return yield*k(G,K,x);case"Null":return yield*E(G,K,x);case"Number":return yield*N(G,K,x);case"Object":return yield*B(G,K,x);case"Promise":return yield*q(G,K,x);case"Record":return yield*ne(G,K,x);case"Ref":return yield*xe(G,K,x);case"RegExp":return yield*pe(G,K,x);case"String":return yield*je(G,K,x);case"Symbol":return yield*At(G,K,x);case"TemplateLiteral":return yield*Nt(G,K,x);case"This":return yield*vr(G,K,x);case"Tuple":return yield*vn(G,K,x);case"Undefined":return yield*Xr(G,K,x);case"Union":return yield*Oo(G,K,x);case"Uint8Array":return yield*Yt(G,K,x);case"Unknown":return yield*Fi();case"Void":return yield*Si(G,K,x);default:if(!Ao(G[O]))throw new s9(y);return yield*ro(G,K,x)}}const Ue={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Qt(y,U,x,J=!0){return`(${[...Xt(y,U,x,J)].join(" && ")})`}function Pn(y){return`check_${nf.Encode(y)}`}function Rr(y){const U=`local_${Ue.variables.size}`;return Ue.variables.set(U,`const ${U} = ${y}`),U}function wn(y,U,x,J,K=!0){const[G,Pe]=[`
`,$n=>"".padStart($n," ")],ar=no("value","any"),Nn=cu("boolean"),Qr=[...Xt(U,x,J,K)].map($n=>`${Pe(4)}${$n}`).join(` &&${G}`);return`function ${y}(${ar})${Nn} {${G}${Pe(2)}return (${G}${Qr}${G}${Pe(2)})
}`}function no(y,U){const x=Ue.language==="typescript"?`: ${U}`:"";return`${y}${x}`}function cu(y){return Ue.language==="typescript"?`: ${y}`:""}function du(y,U,x){const J=wn("check",y,U,"value"),K=no("value","any"),G=cu("boolean"),Pe=[...Ue.functions.values()],ar=[...Ue.variables.values()],Nn=Er(y.$id)?`return function check(${K})${G} {
  return ${Pn(y.$id)}(value)
}`:`return ${J}`;return[...ar,...Pe,Nn].join(`
`)}function Ti(...y){const U={language:"javascript"},[x,J,K]=y.length===2&&Mr(y[1])?[y[0],y[1],U]:y.length===2&&!Mr(y[1])?[y[0],[],y[1]]:y.length===3?[y[0],y[1],y[2]]:y.length===1?[y[0],[],U]:[null,[],U];if(Ue.language=K.language,Ue.variables.clear(),Ue.functions.clear(),Ue.instances.clear(),!Ye(x))throw new Vg(x);for(const G of J)if(!Ye(G))throw new Vg(G);return du(x,J)}e.Code=Ti;function Uw(y,U=[]){const x=Ti(y,U,{language:"javascript"}),J=globalThis.Function("kind","format","hash",x),K=new Map(Ue.instances);function G(Qr,$n,fu){if(!Ao(Qr)||!K.has($n))return!1;const _w=Cm(Qr),Vw=K.get($n);return _w(Vw,fu)}function Pe(Qr,$n){return Dm(Qr)?xm(Qr)($n):!1}function ar(Qr){return Jm(Qr)}const Nn=J(G,Pe,ar);return new i9(y,U,Nn,x)}e.Compile=Uw})(pa||(pa={}));const sf={};function Lv(e,t){e in sf||(sf[e]=t)}let zg=!1;function a9(){zg||(zg=!0,NF(e=>(sf[e.schema[O]]||Pv)(e)))}const af=Symbol.for("object-shape-tester.shape-identifier");function Fe(e){if(a9(),Ym(e))return e;const t=uf(e),r=Ko(t,!1),n=Ko(t,!0),o={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:pa.Compile(t),$_compiledSchemaNoExtraKeys:pa.Compile(r),$_compiledSchemaExtraKeys:pa.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[af]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}function Ym(e){return T.hasKey(e,af)&&!!e[af]}function Xm(e){return T.hasKey(e,O)}function Ko(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>Ko(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>Ko(n,t))),Xm(e.items)?r.items=Ko(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>Ko(n,t))),T.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,i])=>{n[o]=Ko(i,t)}),r.properties=n}return r.additionalProperties=t,r}function uf(e){if(Xm(e))return e;if(Ym(e))return e.$_schema;if(T.isFunction(e))return Ne.Function([],Ne.Any(),{default:e});if(T.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,o])=>{const i=uf(o);r[n]=i,t[n]=i.default}),Ne.Object(r,{default:t})}else{if(T.isArray(e))return Ne.Array(Ne.Union(e.map(t=>uf(t))),{default:[]});if(T.isPrimitive(e)){if(T.isString(e))return Ne.String({default:e});if(T.isNumber(e))return Ne.Number({default:e});if(T.isBoolean(e))return Ne.Boolean({default:e});if(T.isSymbol(e))return Ne.Symbol({default:e});if(T.isNull(e))return Ne.Null({default:null});if(T.isUndefined(e))return Ne.Undefined({default:void 0});if(T.isBigInt(e))return Ne.BigInt({default:e});Kt.tsType(e).equals(),Kt.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${b(e)}`)}}function u9({checkValue:e,default:t,name:r}){return Ao(r)||Em(r,(n,o)=>e(o)),(n=t)=>Fe(Ne.Unsafe({[O]:r,default:n}))}function bs(e,t){const r=_r(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return Fe(Ne.Union(r.map(n=>Ne.Literal(n)),{default:t??r[0]}))}function fe(e){return T.isSymbol(e)?l9(e):Fe(Ne.Const(e,{default:e}))}const Tu="ExactSymbol";function l9(e){return Ao(Tu)||Em(Tu,(t,r)=>r===t.symbol),Lv(Tu,({schema:t})=>`Expected symbol ${t.symbol?.description?V5({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Fe(Ne.Unsafe({[O]:Tu,symbol:e,default:e}))}function c9(...e){const t={},r=e.map(n=>{const o=Fe(n);return Object.assign(t,o.default),o.$_schema});return Fe(Ne.Composite(r,{default:t}))}function Ot(e,t={}){lt.ExactOptionalPropertyTypes=!0;const r=Fe(e).$_schema,n=t.alsoUndefined?Ne.Union([Ne.Undefined(),r]):r;return Fe(Ne.Optional(n))}function Je(...e){let t;const r=e.map((n,o)=>{const i=Fe(n);return o||(t=i.default),i.$_schema});return Fe(Ne.Union(r,{default:t}))}class d9 extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(i=>jv(i)).join(`
`),o=hi(r,`Shape mismatch:
${Mf(n,1)}`);super(o),this.errors=t,this.failureMessage=r}}function f9(e){return e.errors.flatMap(t=>Array.from(t))}function jv(e,t=0){const r=f9(e).map(o=>jv(o,t+1)),n=[e.path,e.message].filter(T.isTruthy).join(": ")+(r.length?":":"");return[Mf(n,t),...r].join(`
`)}function Jo(e,t,r={}){return _v(t,r).Check(e)}function Uv(e,t,r={},n){if(Jo(e,t,r))return;const o=Array.from(_v(t,r).Errors(e));if(o.length)throw new d9(o,n)}function _v(e,t){return e=m9(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function m9(e){return Fe(e)}function qi({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:o}=kf(r),i=r.default??(o-n)/2+n,s=Fe(Ne.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:i})),a=h5(()=>Uv(i,s));if(a)throw Va(a,"Default range value is not within range.");return s}const Ku="recordShape";function hc({keys:e,values:t,partial:r,additionalProperties:n}){h9();const o=Vv(e),i=Fe(t);return Fe(Ne.Unsafe({[O]:Ku,keysShape:o,valuesShape:i,isPartial:!!r,additionalProperties:!!n,default:g9({isPartial:!!r,keysShape:o,valuesShape:i})}))}function h9(){Ao(Ku)||Em(Ku,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([o,i])=>{const s=e.additionalProperties?!0:Jo(o,e.keysShape),a=Jo(i,e.valuesShape);return s&&a}),n=e.isPartial?!0:!qg(e.keysShape,t).length;return r&&n}),Lv(Ku,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=pi(Object.entries(n),([u])=>u,(u,[l,c])=>!Jo(l,r.keysShape)||!Jo(c,r.valuesShape)),i=qg(r.keysShape,n),s=o.length?["Failure at keys",o.join(",")].join(": "):"",a=i.length?["Missing keys",i.join(",")].join(": "):"";return[s,a].filter(T.isTruthy).join(`
`)})}function qg(e,t){const r=Dl(e).filter(n=>T.isPropertyKey(n));return r.length?r.filter(n=>!T.hasKey(t,n)):[]}function g9({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=Dl(e),o=t.default;return Object.fromEntries(n.map(i=>[i,o]))}}function Vv(e){return Ym(e)?e:Xm(e)?Fe(e):T.isObject(e)?bs(e):T.isArray(e)&&T.isLengthAtLeast(e,1)?Je(...e.map(t=>fe(t))):T.isPropertyKey(e)?Fe(e):Fe(Ne.Undefined())}function Dl(e){const t=e.$_schema,r=t[O].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?Bp(t.anyOf.flatMap(n=>Dl(Fe(n)))):["undefined","number","string","symbol"].includes(r)?[]:Dl(Vv(e.default))}function p9(e){return Fe(Ne.Unknown({default:e}))}const b9=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Qm=b9.reduce((e,t)=>(e[t]=t,e),{});He.defaultZone.name;const zv=Qm.UTC,y9=Fe({hour:qi({...Xh,default:Xh.min}),minute:qi({...Qh,default:Qh.min}),second:qi({...e0,default:e0.min}),millisecond:qi({...t0,default:t0.min}),timezone:bs(Qm,zv)}),v9=Fe({year:2023,month:qi({...r0,default:r0.min}),day:qi({...n0,default:n0.min}),timezone:bs(Qm,zv)});Fe(c9(v9,y9));Ee.Years+"",Ee.Months+"",Ee.Weeks+"",Ee.Days+"",Ee.Hours+"",Ee.Minutes+"",Ee.Seconds+"",Ee.Milliseconds+"";Fe(Je({get:fe(Z.Month),in:Je(fe(Z.Year))},{get:fe(Z.Week),in:Je(fe(Z.Year),fe(Z.Month))},{get:fe(Z.Day),in:Je(fe(Z.Year),fe(Z.Month),fe(Z.Week))},{get:fe(Z.Hour),in:Je(fe(Z.Year),fe(Z.Month),fe(Z.Week),fe(Z.Day))},{get:fe(Z.Minute),in:Je(fe(Z.Year),fe(Z.Month),fe(Z.Week),fe(Z.Day),fe(Z.Hour))},{get:fe(Z.Second),in:Je(fe(Z.Year),fe(Z.Month),fe(Z.Week),fe(Z.Day),fe(Z.Hour),fe(Z.Minute))},{get:fe(Z.Millisecond),in:Je(fe(Z.Year),fe(Z.Month),fe(Z.Week),fe(Z.Day),fe(Z.Hour),fe(Z.Minute),fe(Z.Second))}));hc({keys:bs(Ee),values:-1,partial:!0});var Wg;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Wg||(Wg={}));var lf;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(lf||(lf={}));var Kg;(function(e){e.Year="year",e.Month="month",e.Day="day"})(Kg||(Kg={}));const w9={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};R5(w9,_r(lf));u9({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return $9(e)}});function $9(e){return X.fromISO(e).toUTC().toISO()===e}const k9=Fe({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:p9()});function od(e){return Jo(e,k9,{allowExtraKeys:!0})}class qv extends T1{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||lm}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:D9}=yD,Gg=e=>e,Zg=()=>document.createComment(""),Js=(e,t,r)=>{const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=n.insertBefore(Zg(),o),s=n.insertBefore(Zg(),o);r=new D9(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==s._$AU&&r._$AP(u)}if(i!==o||a){let u=r._$AA;for(;u!==i;){const l=Gg(u).nextSibling;Gg(n).insertBefore(u,o),u=l}}}return r},zo=(e,t,r=e)=>(e._$AI(t,r),e),x9={},A9=(e,t=x9)=>e._$AH=t,E9=e=>e._$AH,id=e=>{e._$AR(),e._$AA.remove()};const eh={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Tn=e=>(...t)=>({_$litDirective$:e,values:t});class Mn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const C9={attribute:!0,type:String,converter:ul,reflect:!1,hasChanged:Kf},F9=(e=C9,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function S9(e){return(t,r)=>typeof r=="object"?F9(e,t,r):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}const sr=Tn(class extends Mn{constructor(e){if(super(e),e.type!==eh.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Cr}});const at=e=>e??Q;function T9(e,t,r){return e?t(e):r?.(e)}class M9 extends da{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function P9(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(a=>!!a.index).length;if(n||o)return[...e];const i=e.map(a=>[a]);return i.length||(i[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(i[a]=[])}),t.forEach(a=>{const u=i[a.index];u&&u.splice(0,0,...a.values)}),i.flat()}function cf(e){return T.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function th(e){return T.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Wv(e){return pi(e,t=>{if(cf(t))return t.definition;if(th(t))return t.tagInterpolationKey||t},T.isTruthy)}const Kv=new WeakMap;function N9(e,t){const r=Wv(t);return Gv(Kv,[e,...r]).value?.template}function I9(e,t,r){const n=Wv(t);return Hv(Kv,[e,...n],r)}function Gv(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Zv(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Gv(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Zv(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Hv(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:s}=Zv(e,t,n);if(!i)return{result:!1,reason:s};const a=o??{nested:void 0,template:void 0};if(o||e.set(i,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),Hv(u,t,r,n+1)}function Jv(e,t,r){const n=N9(e,t),o=n??r();if(!n){const a=I9(e,t,o);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const i=o.valuesTransform(t),s=P9(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Yv(e,t,r,n){const o=[],i=[],s=[],a=[];return e.forEach((l,c)=>{const d=o.length-1,m=o[d],h=c-1,v=t[h];n&&n(l);let $,D=[];if(typeof m=="string"&&($=r(m,l,v),$)){o[d]=[m,$.replacement].join(""),s.push(h);const E=$.getExtraValues;D=E?E(v):[],D.length&&E?(o[d]+=" ",D.forEach((N,B)=>{B&&o.push(" ")}),a.push(N=>{const B=N[h],q=E(B);return{index:h,values:q}}),o.push(l)):o[d]+=l}$||o.push(l);const k=e.raw[c];$?(i[d]=[i[d],$.replacement,k].join(""),D.length&&D.forEach(()=>{i.push("")})):i.push(k)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function O9(...[e,t,r]){if(th(r))return{replacement:r.tagName,getExtraValues:void 0}}function B9(e,t){return Yv(e,t,O9)}function A(e,...t){const r=Jv(e,t,()=>B9(e,t));return jy(r.strings,...r.values)}const R9={allowPolymorphicState:!1,errorHandler:void 0};function Xv(e,t){const r=e.instanceState;Ve(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Ve(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class L9 extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function rh(){return e=>class extends L9{static type=e;_type=e;constructor(t){super(e,t)}}}function bt(){return rh()}function j9(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=rh()([e,n].join("-"));return r[n]=o,r},{}):{}}function U9(e){return e?Gt(e,t=>t):{}}function Qv(e,t){t in e||S9()(e,t)}function _9(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Hg(e,t){const r=e;function n(s){t?_9(s,e,e.tagName):Qv(e,s)}function o(s,a){return n(a),r[a]}return new Proxy({},{get:o,set(s,a,u){n(a);const l=r[a];function c(m){s[a]=m,r[a]=m}const d=e.observablePropertyListenerMap[a];if(l!==u&&od(l)&&d&&l.removeListener(d),od(u))if(d)u.listen(!1,d);else{let m=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=m,u.listen(!1,m)}else od(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return o(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function Jg(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function Yg(e,t,r){return r?Bl(r,o=>({key:o,value:[e,t,o].join("-")}),{}):{}}function V9({hostClassNames:e,cssVars:t}){return{hostClasses:Gt(e,(r,n)=>({name:rt(n),selector:rt(`:host(.${n})`)})),cssVars:t}}function z9({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Ve(t).forEach(i=>{const s=t[i],a=r[i];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(a):e.classList.remove(a))})}function q9({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:o}){function i(a){Ve(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:r,slotNames:n,testIds:o,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function Ci(...e){return Kt.isEmpty(e),t=>{const r=t;if(!T.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return W9({...r,options:{...r.options}})}}function W9(e){if(!T.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!T.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...R9,...e.options},r=j9(e.tagName,e.events),n=U9(e.hostClasses);e.hostClasses&&Jg(e.tagName,e.hostClasses),e.cssVars&&Jg(e.tagName,e.cssVars);const o=e.cssVars?Cn(e.cssVars):{},i=Yg(e.tagName,"slot",e.slotNames),s=Yg(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(V9({hostClassNames:n,cssVars:o})):e.styles||A``,u=e.render;function l(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:d}}const c=class extends M9{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return q9({element:this,eventsMap:r,cssVars:o,slotNamesMap:i,testIdsMap:s})}static assign=l;static events=r;static render=u;static hostClasses=n;static cssVars=o;static init=e;static slotNames=i;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const d=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const h=e.state(d);if(h instanceof Promise)throw new TypeError("init cannot be asynchronous");Ve(h).forEach(v=>{Qv(this,v),this.instanceState[v]=h[v]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(d)instanceof Promise))throw new TypeError("init cannot be asynchronous");const m=u(d);if(m instanceof Promise)throw new TypeError("render cannot be asynchronous");return z9({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},m}catch(d){const m=Va(d,`Failed to render ${e.tagName}`);return console.error(m),this._lastRenderError=m,t.errorHandler?.(m),Tt(m)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const d=this.createRenderParams();if(e.init(d)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(d=>{T.hasKey(d,"destroy")&&T.isFunction(d.destroy)&&d.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const d=this.createRenderParams();if(e.cleanup(d)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(d){Xv(this,d)}observablePropertyListenerMap={};instanceInputs=Hg(this,!1);instanceState=Hg(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:U5(e.tagName,{firstLetterCase:Ea.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}class K9 extends Vi{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function G9(e){return new K9(e)}const Xg=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Z9=Tn(class extends Mn{constructor(e){if(super(e),e.type!==eh.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let s=0;for(const a of e)o[s]=n?n(a,s):s,i[s]=r(a,s),s++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const o=E9(e),{values:i,keys:s}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=s,i;const a=this.ut??=[],u=[];let l,c,d=0,m=o.length-1,h=0,v=i.length-1;for(;d<=m&&h<=v;)if(o[d]===null)d++;else if(o[m]===null)m--;else if(a[d]===s[h])u[h]=zo(o[d],i[h]),d++,h++;else if(a[m]===s[v])u[v]=zo(o[m],i[v]),m--,v--;else if(a[d]===s[v])u[v]=zo(o[d],i[v]),Js(e,u[v+1],o[d]),d++,v--;else if(a[m]===s[h])u[h]=zo(o[m],i[h]),Js(e,o[d],o[m]),m--,h++;else if(l===void 0&&(l=Xg(s,h,v),c=Xg(a,d,m)),l.has(a[d]))if(l.has(a[m])){const $=c.get(s[h]),D=$!==void 0?o[$]:null;if(D===null){const k=Js(e,o[d]);zo(k,i[h]),u[h]=k}else u[h]=zo(D,i[h]),Js(e,o[d],D),o[$]=null;h++}else id(o[m]),m--;else id(o[d]),d++;for(;h<=v;){const $=Js(e,u[v+1]);zo($,i[h]),u[h++]=$}for(;d<=m;){const $=o[d++];$!==null&&id($)}return this.ut=s,A9(e,u),Cr}}),H9=Z9;function uu(e,t){return ci(e,t),e.element}function J9(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ci(e,t){const r=J9(e),n=r?`: in ${r}`:"";if(e.type!==eh.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Y9(e,t){return Tn(class extends Mn{element;constructor(r){super(r),this.element=ln.instanceOf(uu(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),Cr}})}const Gn=Y9("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const o=As(r,"allAttributesApplied",()=>new Set);Ve(t).forEach(i=>{if(i.toLowerCase()!==i)throw new Error(`Cannot assign attribute name with uppercase letters: ${i}`);o.add(i)}),o.forEach(i=>{const s=t[i];s==null||s===!1||s===Q?e.removeAttribute(i):s===""||s===!0?e.setAttribute(i,""):e.setAttribute(i,String(s))})});function X9(e){const t=Tn(class extends Mn{element;constructor(r){super(r),this.element=uu(r,e)}render(r){return this.element.setAttribute(e,r),Cr}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function W(e,t){return Q9(e,t)}const Q9=Tn(class extends Mn{element;lastListenerMetaData;constructor(e){super(e),this.element=uu(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Cr}});function eT(e){return W("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const Qg="onDomCreated",di=Tn(class extends Mn{element;constructor(e){super(e),ci(e,Qg)}update(e,[t]){ci(e,Qg);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),ep="onDomRendered",tT=Tn(class extends Mn{constructor(e){super(e),ci(e,ep)}update(e,[t]){ci(e,ep);const r=e.element;return window.requestAnimationFrame(()=>t(r)),this.render(t)}render(e){}}),tp="onResize",ew=Tn(class extends Mn{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&rT(this.element,this.callback,e)});callback;constructor(e){super(e),ci(e,tp)}update(e,[t]){ci(e,tp),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function rT(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function gr(e,t,r){return T9(e,()=>t,()=>r)}const{attributeDirective:nT}=X9("data-test-id"),Dn=nT;function tw(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(t(o),Ci(...n)(r(o)))}function oT(e,t){return iT(void 0,e)}const iT=Tn(class extends Mn{element;constructor(e){super(e),this.element=uu(e,"assign")}render(e,t){return Xv(this.element,t),Cr}}),sT={};function aT(e,t){return t.map((r,n)=>{const o=e[n],i=e[n+1];if(o&&i){const{shouldHaveTagNameHere:s}=rw(o,i);if(s&&T.isString(r))return{tagName:r,tagInterpolationKey:As(sT,r,()=>({tagName:r}))}}return r})}function rw(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function uT(...[e,t,r]){const n=cf(r)?r.definition:r,{isOpeningTag:o,shouldHaveTagNameHere:i}=rw(e,t),s=th(n);if(s&&i&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(i&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!i||!s?void 0:{replacement:n.tagName,getExtraValues(u){const l=cf(u)?u.inputs:void 0;return[o&&l?oT(l):void 0].filter(T.isTruthy)}}}function lT(e){}function cT(e){return Yv(e.strings,e.values,uT,lT)}function g(e,...t){const r=aT(e,t),n=dD(e,...r),o=Jv(e,r,()=>cT(n));return{...n,strings:o.strings,values:o.values}}function df(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],i=(t??[""]).map((s,a)=>{const u=dT(s,n[a]);return`${s}${u}`});return My(i.join(""))}function dT(e,t){return t._$litType$!=null||t._$litDirective$!=null?df(t):Array.isArray(t)?t.map(n=>df(n)).join(""):e.endsWith("=")?`"${t}"`:t}function nw(e){return Gt(e,(t,r)=>r instanceof re?rt(r.toString({format:"hex"})):nw(r))}const fT="dodgerblue";function ff(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function sd({background:e,foreground:t}){return{background:e??new re(ff(t)),foreground:t??new re(ff(e))}}var xl;(function(e){e.Dark="dark",e.Light="light"})(xl||(xl={}));function mT(e){return e==="black"?"white":"black"}const hT={black:{foregroundFaint1:new re("#ccc"),foregroundFaint2:new re("#eee")},white:{foregroundFaint1:new re("#ccc"),foregroundFaint2:new re("#eee")}},gT={black:{backgroundFaint1:new re("#666"),backgroundFaint2:new re("#444")},white:{backgroundFaint1:new re("#ccc"),backgroundFaint2:new re("#fafafa")}};function rp({themeColor:e=fT,themeStyle:t=xl.Light}={}){const r=new re(e),n=new re(t===xl.Dark?"black":"white"),o=ff(n),i=new re(o),s={nav:{hover:sd({background:r.clone().set({"hsl.l":93})}),active:sd({background:r.clone().set({"hsl.l":90})}),selected:sd({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...gT[mT(o)],foreground:i,...hT[o]}};return nw(s)}var xn;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(xn||(xn={}));async function np(e=1){const t=new Xu;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function pT(e,t){return{element:e,children:ow(e)}}function ow(e,t,r){return bT(e).map(n=>{const o=ow(n);return{element:n,children:o}})}function bT(e){return[...e.children,...e.shadowRoot?.children??[]]}function ad(e){return e.matches(":focus")}function nh(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:nh(t)}function iw(e,t){if(t(e))return e;const r=nh(e);if(r)return iw(r,t)}function Yo(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const o=t.name,i=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${i}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${i}'.`;throw new Error(s)}return n}function yT(e){const t=nh(e);return t&&iw(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function vT(e){let t=0,r=document.activeElement||void 0;for(;r;){if(e({depth:t,element:r}))return t;r=r.shadowRoot?.activeElement||void 0,r&&++t}return t}function wT({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const u=i.codePointAt(s);for(;a<r;)if(o.codePointAt(a++)===u)continue e;return!1}return!0}const $T=ei(32);function Gu(e){return e.join($T)}function sw(e){if(!e.length)return[];const t=Gu(e),r=sw(e.slice(0,-1));return[t,...r]}const kT=["error","errors"];function DT(e){return kT.includes(e)}function xT({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Gu(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&DT(t),s=Gu(o.fullUrlBreadcrumbs);if(wT({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(u=>T.isString(u)?u:df(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[s]){const u=sw(o.fullUrlBreadcrumbs);n(o),u.forEach(l=>r[l]=!0)}else r[s]=!1}),e.filter(o=>{const i=Gu(o.fullUrlBreadcrumbs),s=r[i];if(!T.isBoolean(s))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class oh extends Error{name="SpaRouterError"}class op extends oh{name="GlobalUrlEventsConsolidationError"}class AT extends oh{name="SanitizationDepthMaxed"}Fe({paths:[""],search:Ot(Je(void 0,hc({keys:"",values:[""]}))),hash:Ot(Je(void 0,""))});const ET=Fe({basePath:Ot("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Ot(1,{alsoUndefined:!0}),disableWarnings:Ot(!1,{alsoUndefined:!0}),isPaused:Ot(!1,{alsoUndefined:!0})}),ud="://";function ih(...e){const t=e.join("/"),[r,n=""]=t.includes(ud)?t.split(ud):["",t];let o=!1;const i=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(o)return s;const c=l[u+1];let d=a;const m=c?.startsWith("?"),h=!a.includes("?")&&m,v=c==="?";if(m||h){o=!0;let $=!1;const D=l.slice(u+2).reduce((k,E)=>(E.includes("#")&&($=!0),$?k.concat(E):[k,E].join("&")),"");d=[a,c,v?Hi({value:D,prefix:"&"}):D].join("")}return s.concat(d)},[]);return[r,r?ud:"",i.join("/")].join("")}var ys;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(ys||(ys={}));var vs;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(vs||(vs={}));const CT=Fe({encoding:Ot(Je(void 0,bs(ys))),searchParamStrategy:Ot(Je(void 0,bs(vs)))});function Mu(e,t){return e.map(r=>{if(r!=null)return Xi(String(r),t)}).filter(r=>r!=null)}function Xi(e,t){return t?.encoding===ys.Decode?decodeURIComponent(e):t?.encoding===ys.Encode?encodeURIComponent(e):e}const FT=Fe(hc({keys:"",values:[""]}));function ST(e,t,r){const n=r?.searchParamStrategy===vs.Clear?{}:Gt(e,(s,a)=>f5(a)),o=Gt(t,(s,a)=>{if(r?.searchParamStrategy===vs.Append){const u=n[s],l=T.isArray(u)?u:[u];if(a){const c=T.isArray(a)?a:[a];return Mu([...l,...c],r)}else return Mu(l,r)}else return T.isArray(a)?Mu(a,r):a?Mu([a],r):void 0});return Bf({...n,...o},(s,a)=>!!a)}function aw(e,t){return T.isString(e)&&!e.includes("?")?{}:(T.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(i=>{const[s,...a]=B5(i,"=");return[s,a.length?a.join("="):void 0]}).reduce((i,[s,a])=>{const u=uw({options:t,key:s,value:a}),l=As(i,u.key,()=>[]);return a!=null&&l.push(u.value),i},{})}function TT(e){if(e!=null)return T.isArray(e)?[...e]:e===""?[]:[e]}function MT(e,t){const r=pi(Object.entries(e),([n,o])=>{const i=TT(o);return i?.length?i.map(s=>{const a=uw({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return r.length?or({value:r.join("&"),prefix:"?"}):""}function uw({options:e,key:t,value:r}){return{key:Xi(t,e),value:Xi(String(r),e)}}function lw({hash:e,hostname:t,password:r,pathname:n,port:o,protocol:i,search:s,username:a}){return[i?i+"://":"",a?a+":":"",r?r+"@":"",gc({hostname:t,port:o}),sh({hash:e,pathname:n,search:s})].join("")}function cw({pathname:e}){const t=Hi({value:e,prefix:"/"});return t?t.split("/"):[]}function sh({hash:e,pathname:t,search:r}){return[or({value:t,prefix:"/"}),r?or({value:r,prefix:"?"}):"",e?or({value:e,prefix:"#"}):""].join("")}function gc({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function dw({hostname:e,port:t,protocol:r}){return[r,gc({hostname:e,port:t})].filter(T.isTruthy).join("://")}function Qi(e,t){const r=T.isString(e)?Hi({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),o=n?or({value:Xi(n,t),prefix:"#"}):"",i=r.replace(/#[^#]*$/,""),s=i.replace(/^[^?]*(?:\?|$)/,""),a=s?or({value:Xi(s,t),prefix:"?"}):"",u=i.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=c.replace(/@.*/,""),m=c.replace(/^[^@]*@/,""),h=d!==m,[v,...$]=h?d.split(":").reverse():[],D=$.toReversed().join("").replace(/[/:]/g,"")||"",k=v?.replace(/[/:]/g,"")||"",E=O5(m.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),N=E[0]?.endsWith("]")?"":E[1]===":"&&E[0]||"",q=m.replace(new RegExp(`:${N}($|/)`),"$1").replace(/\/.*/,""),ne=m.replace(/^[^/]*(\/|$)/,"$1"),xe=Xi(ne.replace(/^[^/]*(?:\/|$)/,"/"),t),pe=gc({hostname:q,port:N}),je=dw({hostname:q,port:N,protocol:l}),At=lw({hash:o,hostname:q,password:k,pathname:xe,port:N,protocol:l,search:a,username:D}),Nt=aw(a),vr=cw({pathname:xe});return{fullPath:sh({hash:o,pathname:xe,search:a}),hash:o,host:pe,hostname:q,href:At,origin:je,password:k,pathname:xe,paths:vr,port:N,protocol:l,search:a,searchParams:Nt,username:D}}Fe({hash:Ot(Je(void 0,"")),search:Ot(Je(void 0,"",hc({keys:"",values:Je(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:Ot(Je(void 0,"")),pathname:Ot(Je(void 0,"")),paths:Ot(Je(void 0,[""])),protocol:Ot(Je(void 0,"")),username:Ot(Je(void 0,"")),password:Ot(Je(void 0,"")),port:Ot(Je(void 0,"",-1))});function PT(e,t,r){const n=!!r,o=t==null||Jo(t,CT,{allowExtraKeys:!1}),i=o?Qi(""):T.instanceOf(e,URL)||T.isString(e)?Qi(e):e,s=o?e:t,a=T.isString(s)&&s.startsWith("."),u=T.isString(s)||T.instanceOf(s,URL)?Bf(Qi(s),($,D)=>T.isTruthy(D)):s,l=n?r:o?t:void 0,c=Gt(i,($,D)=>{if(!T.hasKey(u,$))return D;const k=u[$];return T.isNumber(k)?String(k):T.isString(k)?$==="hash"&&k?or({value:k,prefix:"#"}):$==="pathname"?or({value:k,prefix:"/"}):k:D});T.hasKey(u,"paths")&&u.paths&&(c.pathname=ih(a?i.pathname:"",...u.paths));const d=T.isString(u.search)?aw(or({value:u.search,prefix:"?"})):g5(u.search||{}),m=ST(c.searchParams,d,{...l,encoding:ys.None}),h=MT(m,l);return{...c,searchParams:m,search:h,paths:cw(c),fullPath:sh(c),host:gc(c),origin:dw(c),href:lw({...c,search:h})}}const NT=Fe({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:FT,hash:"",fullPath:"/",href:"/"});({...NT.default});const IT=0;function fw(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==IT)}const pc="locationchange",qn=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const ip=qn?.pushState;function sp(...e){if(!ip)return;const t=ip.apply(qn,e);return globalThis.dispatchEvent(new Event(pc)),t}const ap=qn?.replaceState;function up(...e){if(!ap)return;const t=ap.apply(qn,e);return globalThis.dispatchEvent(new Event(pc)),t}function OT(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!qn)){{if(qn.pushState===sp)throw new op("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(qn.replaceState===up)throw new op("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,qn.pushState=sp,qn.replaceState=up,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(pc))})}}function Pu(e,t){const r=Qi(e),n=Hi({value:Hi({value:r.pathname,prefix:or({value:t||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],i=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?Hi({value:r.hash,prefix:"#"}):void 0;return{paths:o,search:i,hash:s}}class ah{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){Uv(t,ET),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new qv({defaultValue:r,equalityCheck:()=>!1}),OT(),this.removeGlobalListener=jf(globalThis,pc,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new AT("Looping route sanitization detected; aborting window URL change listener.");const n=Pu(globalThis.location.href,this.params.basePath),o=t.sanitizeRoute(n);T.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:ih(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Pu(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...Pu(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),i=this.routeIncludesBasePath(Pu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return PT(globalThis.location.href,{paths:i.paths,search:i.search,hash:i.hash?or({value:i.hash,prefix:"#"}):""},{searchParamStrategy:vs.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:o}=Qi(n);return this.params.isPaused||!r.force&&T.jsonEquals(Qi(globalThis.location.href).fullPath,o)?!1:r.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(t,r){return fw(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new oh(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function BT(e){return new ah({basePath:e,sanitizeRoute(t){return{paths:RT(t.paths),hash:void 0,search:void 0}}})}function RT(e){const t=e[0];if(T.isEnumValue(t,fr)){if(t===fr.Book)return[fr.Book,...e.slice(1)];if(t===fr.Search)return e[1]?[t,e[1]]:[fr.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return os.paths}const Al=rh()("element-book-change-route"),lp="vira-",qe=tw({assertInputs:e=>{if(!e.tagName.startsWith(lp))throw new Error(`Tag name should start with '${lp}' but got '${e.tagName}'`)}});var ye=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Number="number",e.Select="select",e.Checkbox="checkbox",e))(ye||{});function Nu(e,t){if(e)return t?Of({value:e,suffix:"*"}):e}function LT(e){return il(e).every(t=>t.isHidden||!t.isRequired?!0:T.isString(t.value)?!!t.value:t.value!=null)}const w=Cn({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function ae({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function jT(e){try{if(!e)throw new Error("invalid empty color");return new re(e)}catch{throw new Error(`Invalid color: ${b(e)}`)}}function cp(e,t){const r=Ve(t).map(n=>{const o=t[n],i=jT(o);return`${w[n].name}: ${i.toString()};`}).join(" ");return ae({name:e.name,svgTemplate:g`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const UT=ae({name:"Bell24Icon",svgTemplate:g`
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
    `}),_T=ae({name:"Chat24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),uh=ae({name:"Check24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),VT=ae({name:"ChevronDown24Icon",svgTemplate:g`
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
    `}),lh=ae({name:"ChevronUp24Icon",svgTemplate:g`
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
    `}),mw=ae({name:"CloseX24Icon",svgTemplate:g`
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
    `}),zT=ae({name:"Commit24Icon",svgTemplate:g`
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
    `}),qT=ae({name:"Copy24Icon",svgTemplate:g`
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
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),WT=ae({name:"Document24Icon",svgTemplate:g`
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
    `}),KT=ae({name:"DocumentSearch24Icon",svgTemplate:g`
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
    `}),GT=ae({name:"DoubleChevron24Icon",svgTemplate:g`
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
    `}),hw=ae({name:"Element16Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Kr=ae({name:"Element24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ZT=ae({name:"ExternalLink24Icon",svgTemplate:g`
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
    `}),gw=ae({name:"EyeClosed24Icon",svgTemplate:g`
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
    `}),pw=ae({name:"EyeOpen24Icon",svgTemplate:g`
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
    `}),HT=ae({name:"Filter24Icon",svgTemplate:g`
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
    `}),JT=ae({name:"Link24Icon",svgTemplate:g`
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
    `}),bw=ae({name:"Loader24Icon",svgTemplate:g`
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
    `}),Jn=Cn({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),YT=A`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Jn["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,fi=ae({name:"LoaderAnimated24Icon",svgTemplate:g`
        <style>
            ${YT}
        </style>
        ${bw.svgTemplate}
    `}),XT=ae({name:"Lock24Icon",svgTemplate:g`
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
    `}),ba=ae({name:"Options24Icon",svgTemplate:g`
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
    `}),QT=ae({name:"Pencil24Icon",svgTemplate:g`
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
    `}),eM=ae({name:"Shield24Icon",svgTemplate:g`
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
    `}),tM=ae({name:"SortAscending24Icon",svgTemplate:g`
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
    `}),rM=ae({name:"SortDescending24Icon",svgTemplate:g`
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
    `}),nM=ae({name:"SpeakerLoud24Icon",svgTemplate:g`
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
    `}),oM=ae({name:"SpeakerMedium24Icon",svgTemplate:g`
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
    `}),iM=ae({name:"SpeakerMuted24Icon",svgTemplate:g`
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
    `}),sM=ae({name:"SpeakerQuiet24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),aM=ae({name:"Star24Icon",svgTemplate:g`
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
    `}),El=ae({name:"StatusFailure24Icon",svgTemplate:g`
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
    `}),uM=ae({name:"StatusInProgress24Icon",svgTemplate:g`
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
    `}),lM=ae({name:"StatusSuccess24Icon",svgTemplate:g`
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
    `}),cM=ae({name:"StatusUnknown24Icon",svgTemplate:g`
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
    `}),dM=ae({name:"StatusWarning24Icon",svgTemplate:g`
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
    `}),fM=ae({name:"Upload24Icon",svgTemplate:g`
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
    `}),yw=ae({name:"X24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),mf={Bell24Icon:UT,Chat24Icon:_T,Check24Icon:uh,ChevronDown24Icon:VT,ChevronUp24Icon:lh,CloseX24Icon:mw,Commit24Icon:zT,Copy24Icon:qT,Document24Icon:WT,DocumentSearch24Icon:KT,DoubleChevron24Icon:GT,Element16Icon:hw,Element24Icon:Kr,ExternalLink24Icon:ZT,EyeClosed24Icon:gw,EyeOpen24Icon:pw,Filter24Icon:HT,Link24Icon:JT,Loader24Icon:bw,LoaderAnimated24Icon:fi,Lock24Icon:XT,Options24Icon:ba,Pencil24Icon:QT,Shield24Icon:eM,SortAscending24Icon:tM,SortDescending24Icon:rM,SpeakerLoud24Icon:nM,SpeakerMedium24Icon:oM,SpeakerMuted24Icon:iM,SpeakerQuiet24Icon:sM,Star24Icon:aM,StatusFailure24Icon:El,StatusInProgress24Icon:uM,StatusSuccess24Icon:lM,StatusUnknown24Icon:cM,StatusWarning24Icon:dM,Upload24Icon:fM,X24Icon:yw},mi=A`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`;function dp(e){return T.isPrimitive(e)||e instanceof ti?String(e):e.default}function kn(e,t,r,n){const o=`${r.prefix}-default-fg`,i=`${r.prefix}-default-bg`;if(T.isPrimitive(t)||t instanceof ti)return t;if("refDefaultBackground"in t)return`var(--${i}, ${dp(r.background)})`;if("refDefaultForeground"in t)return`var(--${o}, ${dp(r.foreground)})`;if("refBackground"in t||"refForeground"in t){const s=T.hasKey(t,"refBackground")?"refBackground":T.hasKey(t,"refForeground")?"refForeground":void 0,a=s&&T.hasKey(t,s)?t[s]:void 0,u=s==="refBackground"?"background":"foreground",l=a&&n[a];if(!l)throw new Error(`Color theme ${s} reference '${a}' does not exist. (Referenced from '${e}'.)`);const c=l[u]||(u==="foreground"?kn(o,r.foreground,r,n):kn(i,r.background,r,n));return`var(--${a}-${u==="foreground"?"fg":"bg"}, ${kn(a,c,r,n)})`}else return t.value}const go="theme-default";function mM(e,t,r){il(t.colors).forEach(n=>{fp({element:e,layerKey:"background",themeColor:n,themeOverride:r}),fp({element:e,layerKey:"foreground",themeColor:n,themeOverride:r})})}function fp({element:e,layerKey:t,themeOverride:r,themeColor:n}){const o=n[t].default;ss({forCssVar:n[t],onElement:e,toValue:o})}function vw(e,t){try{if(go in t)throw new Error(`Cannot define theme color by name '${go}', it is used internally.`);const r=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,o=`${e.prefix}-default-inverse-fg`,i=`${e.prefix}-default-inverse-bg`,s=Gt({[r]:kn(r,e.foreground,e,t),[n]:kn(n,e.background,e,t),[o]:kn(o,e.background,e,t),[i]:kn(i,e.foreground,e,t)},(v,$)=>({default:$,initialValue:"transparent",syntax:ve.Color})),a=Cn(s),u=ii(t).reduce((v,[$,D])=>{const k=mp($),E=D.foreground?kn([$,"foreground"].join(" "),D.foreground,e,t):`var(${a[r].name}, ${a[r].default})`,N=D.background?kn([$,"background"].join(" "),D.background,e,t):`var(${a[n].name}, ${a[n].default})`;return v[k.foreground]={default:E,initialValue:"transparent",syntax:ve.Color},v[k.background]={default:N,initialValue:"transparent",syntax:ve.Color},v[k.foregroundInverse]={default:`var(--${k.background})`,initialValue:"transparent",syntax:ve.Color},v[k.backgroundInverse]={default:`var(--${k.foreground})`,initialValue:"transparent",syntax:ve.Color},v},{}),l=Cn(u),c={},d={};ii(t).forEach(([v,$])=>{Kt.isString(v);const D=mp(v),k=l[D.foreground],E=l[D.background],N=l[D.foregroundInverse],B=l[D.backgroundInverse];Kt.isDefined(k),Kt.isDefined(E),Kt.isDefined(N),Kt.isDefined(B),c[v]={foreground:k,background:E,init:$,name:v},d[v]={foreground:N,background:B,init:$,name:v}});const m={foreground:a[r],background:a[n],init:e,name:go},h={...m,foreground:a[o],background:a[i]};return{colors:{[go]:m,...c},inverse:{[go]:h,...d},init:{colors:t,default:e}}}catch(r){throw globalThis.setTimeout(()=>Ty.error(r)),r}}function mp(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}function ld({originalTheme:e,layerKey:t,themeColor:r,override:n,overrideValues:o}){const i=n?.[t];i&&(o[String(r[t].name)]=String(kn(t,i,e.init.default,e.init.colors)))}function hM(e,t,{defaultOverride:r,colorOverrides:n}){const o={};r&&Ve(r).forEach(u=>{ld({originalTheme:e,layerKey:u,override:r,themeColor:e.colors[go],overrideValues:o})});const i={};n&&ii(n).forEach(([u,l])=>{const c=e.colors[u];if(!c)throw new Error(`Override color name '${u}' does not exist in the theme being overridden.`);ld({originalTheme:e,layerKey:"foreground",override:l,themeColor:c,overrideValues:i}),ld({originalTheme:e,layerKey:"background",override:l,themeColor:c,overrideValues:i})});const s=Gt(e.init.colors,(u,l)=>{const c=n?.[u];return{...l,...c}}),a=vw({...e.init.default,...r},s);return{name:t,overrides:{...o,...i},originalTheme:e,asTheme:a}}const f=Cn({"vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d5","vira-red-20":"#ffc1bc","vira-red-30":"#ffa7a2","vira-red-40":"#ff8886","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001d","vira-red-80":"#a60012","vira-red-90":"#760003","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdda3","vira-orange-20":"#ffc66c","vira-orange-30":"#ffac36","vira-orange-40":"#f79300","vira-orange-50":"#e17e00","vira-orange-60":"#c96900","vira-orange-70":"#ab5600","vira-orange-80":"#8b4100","vira-orange-90":"#6a2500","vira-yellow-5":"#f7eeca","vira-yellow-10":"#f6e192","vira-yellow-20":"#f2cd20","vira-yellow-30":"#dfbb00","vira-yellow-40":"#cca800","vira-yellow-50":"#b59500","vira-yellow-60":"#9d8100","vira-yellow-70":"#856b00","vira-yellow-80":"#6a5400","vira-yellow-90":"#4c3b00","vira-green-5":"#d3f8cf","vira-green-10":"#a3f59b","vira-green-20":"#4fed46","vira-green-30":"#36d92e","vira-green-40":"#0dc501","vira-green-50":"#00af00","vira-green-60":"#009800","vira-green-70":"#007f00","vira-green-80":"#006400","vira-green-90":"#004700","vira-teal-5":"#d4f5f3","vira-teal-10":"#a1efeb","vira-teal-20":"#45e5de","vira-teal-30":"#2ad2cc","vira-teal-40":"#04beb8","vira-teal-50":"#00a9a3","vira-teal-60":"#00928d","vira-teal-70":"#007a77","vira-teal-80":"#00615e","vira-teal-90":"#004442","vira-blue-5":"#daf2ff","vira-blue-10":"#bde8ff","vira-blue-20":"#98d8ff","vira-blue-30":"#77c6ff","vira-blue-40":"#4cb2ff","vira-blue-50":"#299cf9","vira-blue-60":"#0086e0","vira-blue-70":"#006ec7","vira-blue-80":"#0054aa","vira-blue-90":"#00358a","vira-purple-5":"#f6eaff","vira-purple-10":"#eddaff","vira-purple-20":"#e6c3ff","vira-purple-30":"#d7adff","vira-purple-40":"#c795ff","vira-purple-50":"#b77aff","vira-purple-60":"#a55aff","vira-purple-70":"#8f3de9","vira-purple-80":"#7514cb","vira-purple-90":"#500095","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5fa","vira-pink-20":"#ffbaf4","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb7","vira-pink-60":"#cc59a2","vira-pink-70":"#b2418b","vira-pink-80":"#962471","vira-pink-90":"#6e004f","vira-grey-5":"#eceff0","vira-grey-10":"#dce2e6","vira-grey-20":"#c7d2d7","vira-grey-30":"#b6c0c5","vira-grey-40":"#a4adb2","vira-grey-50":"#909a9f","vira-grey-60":"#7c868a","vira-grey-70":"#677074","vira-grey-80":"#50595d","vira-grey-90":"#363f43"}),Ke=vw({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:f["vira-red-90"]},"vira-red-foreground-body":{foreground:f["vira-red-80"]},"vira-red-foreground-non-body":{foreground:f["vira-red-60"]},"vira-red-foreground-header":{foreground:f["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:f["vira-red-30"]},"vira-red-foreground-decoration":{foreground:f["vira-red-20"]},"vira-red-foreground-invisible":{foreground:f["vira-red-10"]},"vira-red-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-red-90"]},"vira-red-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-red-80"]},"vira-red-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-red-60"]},"vira-red-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-red-40"]},"vira-red-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-red-30"]},"vira-red-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-red-20"]},"vira-red-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-red-5"]},"vira-red-on-self-body":{foreground:f["vira-red-90"],background:"#ffe9e6"},"vira-red-on-self-non-body":{foreground:f["vira-red-80"],background:"#ffe9e6"},"vira-red-on-self-header":{foreground:f["vira-red-60"],background:"#ffe9e6"},"vira-red-on-self-placeholder":{foreground:f["vira-red-50"],background:"#ffe9e6"},"vira-red-on-self-decoration":{foreground:f["vira-red-30"],background:"#ffe9e6"},"vira-red-on-self-invisible":{foreground:f["vira-red-20"],background:"#ffe9e6"},"vira-orange-foreground-small-body":{foreground:f["vira-orange-90"]},"vira-orange-foreground-body":{foreground:f["vira-orange-80"]},"vira-orange-foreground-non-body":{foreground:f["vira-orange-60"]},"vira-orange-foreground-header":{foreground:f["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:f["vira-orange-40"]},"vira-orange-foreground-decoration":{foreground:f["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:f["vira-orange-10"]},"vira-orange-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-orange-90"]},"vira-orange-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-orange-80"]},"vira-orange-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-orange-60"]},"vira-orange-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-orange-40"]},"vira-orange-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-orange-30"]},"vira-orange-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-orange-20"]},"vira-orange-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-orange-5"]},"vira-orange-on-self-body":{foreground:f["vira-orange-90"],background:"#ffebd1"},"vira-orange-on-self-non-body":{foreground:f["vira-orange-80"],background:"#ffebd1"},"vira-orange-on-self-header":{foreground:f["vira-orange-60"],background:"#ffebd1"},"vira-orange-on-self-placeholder":{foreground:f["vira-orange-50"],background:"#ffebd1"},"vira-orange-on-self-decoration":{foreground:f["vira-orange-30"],background:"#ffebd1"},"vira-orange-on-self-invisible":{foreground:f["vira-orange-20"],background:"#ffebd1"},"vira-yellow-foreground-small-body":{foreground:f["vira-yellow-90"]},"vira-yellow-foreground-body":{foreground:f["vira-yellow-80"]},"vira-yellow-foreground-non-body":{foreground:f["vira-yellow-60"]},"vira-yellow-foreground-header":{foreground:f["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:f["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:f["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:f["vira-yellow-5"]},"vira-yellow-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-90"]},"vira-yellow-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-70"]},"vira-yellow-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-60"]},"vira-yellow-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-40"]},"vira-yellow-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-30"]},"vira-yellow-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-20"]},"vira-yellow-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:f["vira-yellow-90"],background:"#f7eeca"},"vira-yellow-on-self-non-body":{foreground:f["vira-yellow-80"],background:"#f7eeca"},"vira-yellow-on-self-header":{foreground:f["vira-yellow-60"],background:"#f7eeca"},"vira-yellow-on-self-placeholder":{foreground:f["vira-yellow-50"],background:"#f7eeca"},"vira-yellow-on-self-decoration":{foreground:f["vira-yellow-30"],background:"#f7eeca"},"vira-yellow-on-self-invisible":{foreground:f["vira-yellow-20"],background:"#f7eeca"},"vira-green-foreground-small-body":{foreground:f["vira-green-90"]},"vira-green-foreground-body":{foreground:f["vira-green-80"]},"vira-green-foreground-non-body":{foreground:f["vira-green-60"]},"vira-green-foreground-header":{foreground:f["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:f["vira-green-30"]},"vira-green-foreground-decoration":{foreground:f["vira-green-20"]},"vira-green-foreground-invisible":{foreground:f["vira-green-5"]},"vira-green-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-green-90"]},"vira-green-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-green-70"]},"vira-green-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-green-60"]},"vira-green-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-green-40"]},"vira-green-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-green-30"]},"vira-green-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-green-20"]},"vira-green-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-green-5"]},"vira-green-on-self-body":{foreground:f["vira-green-90"],background:"#d3f8cf"},"vira-green-on-self-non-body":{foreground:f["vira-green-70"],background:"#d3f8cf"},"vira-green-on-self-header":{foreground:f["vira-green-60"],background:"#d3f8cf"},"vira-green-on-self-placeholder":{foreground:f["vira-green-40"],background:"#d3f8cf"},"vira-green-on-self-decoration":{foreground:f["vira-green-30"],background:"#d3f8cf"},"vira-green-on-self-invisible":{foreground:f["vira-green-20"],background:"#d3f8cf"},"vira-teal-foreground-small-body":{foreground:f["vira-teal-90"]},"vira-teal-foreground-body":{foreground:f["vira-teal-80"]},"vira-teal-foreground-non-body":{foreground:f["vira-teal-60"]},"vira-teal-foreground-header":{foreground:f["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:f["vira-teal-30"]},"vira-teal-foreground-decoration":{foreground:f["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:f["vira-teal-5"]},"vira-teal-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-teal-90"]},"vira-teal-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-teal-80"]},"vira-teal-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-teal-60"]},"vira-teal-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-teal-40"]},"vira-teal-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-teal-30"]},"vira-teal-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-teal-20"]},"vira-teal-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-teal-5"]},"vira-teal-on-self-body":{foreground:f["vira-teal-90"],background:"#d4f5f3"},"vira-teal-on-self-non-body":{foreground:f["vira-teal-70"],background:"#d4f5f3"},"vira-teal-on-self-header":{foreground:f["vira-teal-60"],background:"#d4f5f3"},"vira-teal-on-self-placeholder":{foreground:f["vira-teal-40"],background:"#d4f5f3"},"vira-teal-on-self-decoration":{foreground:f["vira-teal-30"],background:"#d4f5f3"},"vira-teal-on-self-invisible":{foreground:f["vira-teal-10"],background:"#d4f5f3"},"vira-blue-foreground-small-body":{foreground:f["vira-blue-90"]},"vira-blue-foreground-body":{foreground:f["vira-blue-80"]},"vira-blue-foreground-non-body":{foreground:f["vira-blue-70"]},"vira-blue-foreground-header":{foreground:f["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:f["vira-blue-30"]},"vira-blue-foreground-decoration":{foreground:f["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:f["vira-blue-10"]},"vira-blue-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-blue-90"]},"vira-blue-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-blue-80"]},"vira-blue-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-blue-60"]},"vira-blue-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-blue-40"]},"vira-blue-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-blue-30"]},"vira-blue-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-blue-20"]},"vira-blue-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-blue-5"]},"vira-blue-on-self-body":{foreground:f["vira-blue-90"],background:"#daf2ff"},"vira-blue-on-self-non-body":{foreground:f["vira-blue-80"],background:"#daf2ff"},"vira-blue-on-self-header":{foreground:f["vira-blue-60"],background:"#daf2ff"},"vira-blue-on-self-placeholder":{foreground:f["vira-blue-50"],background:"#daf2ff"},"vira-blue-on-self-decoration":{foreground:f["vira-blue-30"],background:"#daf2ff"},"vira-blue-on-self-invisible":{foreground:f["vira-blue-10"],background:"#daf2ff"},"vira-purple-foreground-small-body":{foreground:f["vira-purple-90"]},"vira-purple-foreground-body":{foreground:f["vira-purple-80"]},"vira-purple-foreground-non-body":{foreground:f["vira-purple-60"]},"vira-purple-foreground-header":{foreground:f["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:f["vira-purple-30"]},"vira-purple-foreground-decoration":{foreground:f["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:f["vira-purple-5"]},"vira-purple-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-purple-90"]},"vira-purple-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-purple-80"]},"vira-purple-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-purple-60"]},"vira-purple-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-purple-40"]},"vira-purple-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-purple-30"]},"vira-purple-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-purple-20"]},"vira-purple-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-purple-5"]},"vira-purple-on-self-body":{foreground:f["vira-purple-90"],background:"#f6eaff"},"vira-purple-on-self-non-body":{foreground:f["vira-purple-70"],background:"#f6eaff"},"vira-purple-on-self-header":{foreground:f["vira-purple-60"],background:"#f6eaff"},"vira-purple-on-self-placeholder":{foreground:f["vira-purple-40"],background:"#f6eaff"},"vira-purple-on-self-decoration":{foreground:f["vira-purple-30"],background:"#f6eaff"},"vira-purple-on-self-invisible":{foreground:f["vira-purple-10"],background:"#f6eaff"},"vira-pink-foreground-small-body":{foreground:f["vira-pink-90"]},"vira-pink-foreground-body":{foreground:f["vira-pink-80"]},"vira-pink-foreground-non-body":{foreground:f["vira-pink-60"]},"vira-pink-foreground-header":{foreground:f["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:f["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:f["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:f["vira-pink-10"]},"vira-pink-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-pink-90"]},"vira-pink-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-pink-80"]},"vira-pink-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-pink-60"]},"vira-pink-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-pink-40"]},"vira-pink-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-pink-30"]},"vira-pink-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-pink-20"]},"vira-pink-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-pink-5"]},"vira-pink-on-self-body":{foreground:f["vira-pink-90"],background:"#ffe7fb"},"vira-pink-on-self-non-body":{foreground:f["vira-pink-80"],background:"#ffe7fb"},"vira-pink-on-self-header":{foreground:f["vira-pink-60"],background:"#ffe7fb"},"vira-pink-on-self-placeholder":{foreground:f["vira-pink-50"],background:"#ffe7fb"},"vira-pink-on-self-decoration":{foreground:f["vira-pink-30"],background:"#ffe7fb"},"vira-pink-on-self-invisible":{foreground:f["vira-pink-20"],background:"#ffe7fb"},"vira-grey-foreground-small-body":{foreground:f["vira-grey-90"]},"vira-grey-foreground-body":{foreground:f["vira-grey-80"]},"vira-grey-foreground-non-body":{foreground:f["vira-grey-60"]},"vira-grey-foreground-header":{foreground:f["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:f["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:f["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:f["vira-grey-5"]},"vira-grey-background-small-body":{foreground:{refDefaultBackground:!0},background:f["vira-grey-90"]},"vira-grey-background-body":{foreground:{refDefaultBackground:!0},background:f["vira-grey-80"]},"vira-grey-background-non-body":{foreground:{refDefaultBackground:!0},background:f["vira-grey-60"]},"vira-grey-background-header":{foreground:{refDefaultBackground:!0},background:f["vira-grey-40"]},"vira-grey-background-placeholder":{foreground:{refDefaultBackground:!0},background:f["vira-grey-30"]},"vira-grey-background-decoration":{foreground:{refDefaultBackground:!0},background:f["vira-grey-20"]},"vira-grey-background-invisible":{foreground:{refDefaultBackground:!0},background:f["vira-grey-5"]},"vira-grey-on-self-body":{foreground:f["vira-grey-90"],background:"#eceff0"},"vira-grey-on-self-non-body":{foreground:f["vira-grey-70"],background:"#eceff0"},"vira-grey-on-self-header":{foreground:f["vira-grey-60"],background:"#eceff0"},"vira-grey-on-self-placeholder":{foreground:f["vira-grey-40"],background:"#eceff0"},"vira-grey-on-self-decoration":{foreground:f["vira-grey-30"],background:"#eceff0"},"vira-grey-on-self-invisible":{foreground:f["vira-grey-10"],background:"#eceff0"}}),gM=hM(Ke,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:f["vira-red-5"],background:"black"},"vira-red-foreground-body":{foreground:f["vira-red-20"],background:"black"},"vira-red-foreground-non-body":{foreground:f["vira-red-30"],background:"black"},"vira-red-foreground-header":{background:"black"},"vira-red-foreground-placeholder":{foreground:f["vira-red-60"],background:"black"},"vira-red-foreground-decoration":{foreground:f["vira-red-80"],background:"black"},"vira-red-foreground-invisible":{foreground:f["vira-red-90"],background:"black"},"vira-red-background-small-body":{foreground:"black",background:f["vira-red-5"]},"vira-red-background-body":{foreground:"black",background:f["vira-red-20"]},"vira-red-background-non-body":{foreground:"black",background:f["vira-red-30"]},"vira-red-background-header":{foreground:"black",background:f["vira-red-50"]},"vira-red-background-placeholder":{foreground:"black",background:f["vira-red-60"]},"vira-red-background-decoration":{foreground:"black",background:f["vira-red-80"]},"vira-red-background-invisible":{foreground:"black",background:f["vira-red-90"]},"vira-red-on-self-body":{foreground:f["vira-red-10"],background:"#760003"},"vira-red-on-self-non-body":{foreground:f["vira-red-20"],background:"#760003"},"vira-red-on-self-header":{foreground:f["vira-red-40"],background:"#760003"},"vira-red-on-self-placeholder":{background:"#760003"},"vira-red-on-self-decoration":{foreground:f["vira-red-70"],background:"#760003"},"vira-red-on-self-invisible":{foreground:f["vira-red-80"],background:"#760003"},"vira-orange-foreground-small-body":{foreground:f["vira-orange-5"],background:"black"},"vira-orange-foreground-body":{foreground:f["vira-orange-20"],background:"black"},"vira-orange-foreground-non-body":{foreground:f["vira-orange-30"],background:"black"},"vira-orange-foreground-header":{background:"black"},"vira-orange-foreground-placeholder":{foreground:f["vira-orange-60"],background:"black"},"vira-orange-foreground-decoration":{foreground:f["vira-orange-80"],background:"black"},"vira-orange-foreground-invisible":{foreground:f["vira-orange-90"],background:"black"},"vira-orange-background-small-body":{foreground:"black",background:f["vira-orange-5"]},"vira-orange-background-body":{foreground:"black",background:f["vira-orange-20"]},"vira-orange-background-non-body":{foreground:"black",background:f["vira-orange-30"]},"vira-orange-background-header":{foreground:"black",background:f["vira-orange-50"]},"vira-orange-background-placeholder":{foreground:"black",background:f["vira-orange-60"]},"vira-orange-background-decoration":{foreground:"black",background:f["vira-orange-80"]},"vira-orange-background-invisible":{foreground:"black",background:f["vira-orange-90"]},"vira-orange-on-self-body":{foreground:f["vira-orange-10"],background:"#6a2500"},"vira-orange-on-self-non-body":{foreground:f["vira-orange-20"],background:"#6a2500"},"vira-orange-on-self-header":{foreground:f["vira-orange-40"],background:"#6a2500"},"vira-orange-on-self-placeholder":{background:"#6a2500"},"vira-orange-on-self-decoration":{foreground:f["vira-orange-70"],background:"#6a2500"},"vira-orange-on-self-invisible":{foreground:f["vira-orange-80"],background:"#6a2500"},"vira-yellow-foreground-small-body":{foreground:f["vira-yellow-5"],background:"black"},"vira-yellow-foreground-body":{foreground:f["vira-yellow-20"],background:"black"},"vira-yellow-foreground-non-body":{foreground:f["vira-yellow-30"],background:"black"},"vira-yellow-foreground-header":{background:"black"},"vira-yellow-foreground-placeholder":{foreground:f["vira-yellow-60"],background:"black"},"vira-yellow-foreground-decoration":{foreground:f["vira-yellow-80"],background:"black"},"vira-yellow-foreground-invisible":{foreground:f["vira-yellow-90"],background:"black"},"vira-yellow-background-small-body":{foreground:"black",background:f["vira-yellow-5"]},"vira-yellow-background-body":{foreground:"black",background:f["vira-yellow-20"]},"vira-yellow-background-non-body":{foreground:"black",background:f["vira-yellow-30"]},"vira-yellow-background-header":{foreground:"black",background:f["vira-yellow-50"]},"vira-yellow-background-placeholder":{foreground:"black",background:f["vira-yellow-60"]},"vira-yellow-background-decoration":{foreground:"black",background:f["vira-yellow-80"]},"vira-yellow-background-invisible":{foreground:"black",background:f["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:f["vira-yellow-10"],background:"#4c3b00"},"vira-yellow-on-self-non-body":{foreground:f["vira-yellow-20"],background:"#4c3b00"},"vira-yellow-on-self-header":{foreground:f["vira-yellow-40"],background:"#4c3b00"},"vira-yellow-on-self-placeholder":{background:"#4c3b00"},"vira-yellow-on-self-decoration":{foreground:f["vira-yellow-70"],background:"#4c3b00"},"vira-yellow-on-self-invisible":{foreground:f["vira-yellow-80"],background:"#4c3b00"},"vira-green-foreground-small-body":{foreground:f["vira-green-5"],background:"black"},"vira-green-foreground-body":{foreground:f["vira-green-20"],background:"black"},"vira-green-foreground-non-body":{foreground:f["vira-green-30"],background:"black"},"vira-green-foreground-header":{background:"black"},"vira-green-foreground-placeholder":{foreground:f["vira-green-60"],background:"black"},"vira-green-foreground-decoration":{foreground:f["vira-green-80"],background:"black"},"vira-green-foreground-invisible":{foreground:f["vira-green-90"],background:"black"},"vira-green-background-small-body":{foreground:"black",background:f["vira-green-5"]},"vira-green-background-body":{foreground:"black",background:f["vira-green-20"]},"vira-green-background-non-body":{foreground:"black",background:f["vira-green-30"]},"vira-green-background-header":{foreground:"black",background:f["vira-green-50"]},"vira-green-background-placeholder":{foreground:"black",background:f["vira-green-60"]},"vira-green-background-decoration":{foreground:"black",background:f["vira-green-80"]},"vira-green-background-invisible":{foreground:"black",background:f["vira-green-90"]},"vira-green-on-self-body":{foreground:f["vira-green-10"],background:"#004700"},"vira-green-on-self-non-body":{foreground:f["vira-green-20"],background:"#004700"},"vira-green-on-self-header":{foreground:f["vira-green-40"],background:"#004700"},"vira-green-on-self-placeholder":{foreground:f["vira-green-50"],background:"#004700"},"vira-green-on-self-decoration":{foreground:f["vira-green-70"],background:"#004700"},"vira-green-on-self-invisible":{foreground:f["vira-green-80"],background:"#004700"},"vira-teal-foreground-small-body":{foreground:f["vira-teal-5"],background:"black"},"vira-teal-foreground-body":{foreground:f["vira-teal-20"],background:"black"},"vira-teal-foreground-non-body":{foreground:f["vira-teal-30"],background:"black"},"vira-teal-foreground-header":{background:"black"},"vira-teal-foreground-placeholder":{foreground:f["vira-teal-60"],background:"black"},"vira-teal-foreground-decoration":{foreground:f["vira-teal-80"],background:"black"},"vira-teal-foreground-invisible":{foreground:f["vira-teal-90"],background:"black"},"vira-teal-background-small-body":{foreground:"black",background:f["vira-teal-5"]},"vira-teal-background-body":{foreground:"black",background:f["vira-teal-20"]},"vira-teal-background-non-body":{foreground:"black",background:f["vira-teal-30"]},"vira-teal-background-header":{foreground:"black",background:f["vira-teal-50"]},"vira-teal-background-placeholder":{foreground:"black",background:f["vira-teal-60"]},"vira-teal-background-decoration":{foreground:"black",background:f["vira-teal-80"]},"vira-teal-background-invisible":{foreground:"black",background:f["vira-teal-90"]},"vira-teal-on-self-body":{foreground:f["vira-teal-10"],background:"#004442"},"vira-teal-on-self-non-body":{foreground:f["vira-teal-20"],background:"#004442"},"vira-teal-on-self-header":{foreground:f["vira-teal-40"],background:"#004442"},"vira-teal-on-self-placeholder":{foreground:f["vira-teal-50"],background:"#004442"},"vira-teal-on-self-decoration":{foreground:f["vira-teal-70"],background:"#004442"},"vira-teal-on-self-invisible":{foreground:f["vira-teal-80"],background:"#004442"},"vira-blue-foreground-small-body":{foreground:f["vira-blue-5"],background:"black"},"vira-blue-foreground-body":{foreground:f["vira-blue-20"],background:"black"},"vira-blue-foreground-non-body":{foreground:f["vira-blue-30"],background:"black"},"vira-blue-foreground-header":{background:"black"},"vira-blue-foreground-placeholder":{foreground:f["vira-blue-60"],background:"black"},"vira-blue-foreground-decoration":{foreground:f["vira-blue-80"],background:"black"},"vira-blue-foreground-invisible":{foreground:f["vira-blue-90"],background:"black"},"vira-blue-background-small-body":{foreground:"black",background:f["vira-blue-5"]},"vira-blue-background-body":{foreground:"black",background:f["vira-blue-20"]},"vira-blue-background-non-body":{foreground:"black",background:f["vira-blue-30"]},"vira-blue-background-header":{foreground:"black",background:f["vira-blue-50"]},"vira-blue-background-placeholder":{foreground:"black",background:f["vira-blue-60"]},"vira-blue-background-decoration":{foreground:"black",background:f["vira-blue-80"]},"vira-blue-background-invisible":{foreground:"black",background:f["vira-blue-90"]},"vira-blue-on-self-body":{foreground:f["vira-blue-10"],background:"#00358a"},"vira-blue-on-self-non-body":{foreground:f["vira-blue-20"],background:"#00358a"},"vira-blue-on-self-header":{foreground:f["vira-blue-40"],background:"#00358a"},"vira-blue-on-self-placeholder":{background:"#00358a"},"vira-blue-on-self-decoration":{foreground:f["vira-blue-70"],background:"#00358a"},"vira-blue-on-self-invisible":{foreground:f["vira-blue-80"],background:"#00358a"},"vira-purple-foreground-small-body":{foreground:f["vira-purple-5"],background:"black"},"vira-purple-foreground-body":{foreground:f["vira-purple-20"],background:"black"},"vira-purple-foreground-non-body":{foreground:f["vira-purple-30"],background:"black"},"vira-purple-foreground-header":{background:"black"},"vira-purple-foreground-placeholder":{foreground:f["vira-purple-60"],background:"black"},"vira-purple-foreground-decoration":{foreground:f["vira-purple-80"],background:"black"},"vira-purple-foreground-invisible":{foreground:f["vira-purple-90"],background:"black"},"vira-purple-background-small-body":{foreground:"black",background:f["vira-purple-5"]},"vira-purple-background-body":{foreground:"black",background:f["vira-purple-20"]},"vira-purple-background-non-body":{foreground:"black",background:f["vira-purple-30"]},"vira-purple-background-header":{foreground:"black",background:f["vira-purple-50"]},"vira-purple-background-placeholder":{foreground:"black",background:f["vira-purple-60"]},"vira-purple-background-decoration":{foreground:"black",background:f["vira-purple-80"]},"vira-purple-background-invisible":{foreground:"black",background:f["vira-purple-90"]},"vira-purple-on-self-body":{foreground:f["vira-purple-10"],background:"#500095"},"vira-purple-on-self-non-body":{foreground:f["vira-purple-20"],background:"#500095"},"vira-purple-on-self-header":{foreground:f["vira-purple-40"],background:"#500095"},"vira-purple-on-self-placeholder":{foreground:f["vira-purple-50"],background:"#500095"},"vira-purple-on-self-decoration":{foreground:f["vira-purple-70"],background:"#500095"},"vira-purple-on-self-invisible":{foreground:f["vira-purple-80"],background:"#500095"},"vira-pink-foreground-small-body":{foreground:f["vira-pink-5"],background:"black"},"vira-pink-foreground-body":{foreground:f["vira-pink-20"],background:"black"},"vira-pink-foreground-non-body":{foreground:f["vira-pink-30"],background:"black"},"vira-pink-foreground-header":{background:"black"},"vira-pink-foreground-placeholder":{foreground:f["vira-pink-60"],background:"black"},"vira-pink-foreground-decoration":{foreground:f["vira-pink-80"],background:"black"},"vira-pink-foreground-invisible":{foreground:f["vira-pink-90"],background:"black"},"vira-pink-background-small-body":{foreground:"black",background:f["vira-pink-5"]},"vira-pink-background-body":{foreground:"black",background:f["vira-pink-20"]},"vira-pink-background-non-body":{foreground:"black",background:f["vira-pink-30"]},"vira-pink-background-header":{foreground:"black",background:f["vira-pink-50"]},"vira-pink-background-placeholder":{foreground:"black",background:f["vira-pink-60"]},"vira-pink-background-decoration":{foreground:"black",background:f["vira-pink-80"]},"vira-pink-background-invisible":{foreground:"black",background:f["vira-pink-90"]},"vira-pink-on-self-body":{foreground:f["vira-pink-10"],background:"#6e004f"},"vira-pink-on-self-non-body":{foreground:f["vira-pink-20"],background:"#6e004f"},"vira-pink-on-self-header":{foreground:f["vira-pink-40"],background:"#6e004f"},"vira-pink-on-self-placeholder":{background:"#6e004f"},"vira-pink-on-self-decoration":{foreground:f["vira-pink-70"],background:"#6e004f"},"vira-pink-on-self-invisible":{foreground:f["vira-pink-80"],background:"#6e004f"},"vira-grey-foreground-small-body":{foreground:f["vira-grey-5"],background:"black"},"vira-grey-foreground-body":{foreground:f["vira-grey-20"],background:"black"},"vira-grey-foreground-non-body":{foreground:f["vira-grey-30"],background:"black"},"vira-grey-foreground-header":{background:"black"},"vira-grey-foreground-placeholder":{foreground:f["vira-grey-60"],background:"black"},"vira-grey-foreground-decoration":{foreground:f["vira-grey-80"],background:"black"},"vira-grey-foreground-invisible":{foreground:f["vira-grey-90"],background:"black"},"vira-grey-background-small-body":{foreground:"black",background:f["vira-grey-5"]},"vira-grey-background-body":{foreground:"black",background:f["vira-grey-20"]},"vira-grey-background-non-body":{foreground:"black",background:f["vira-grey-30"]},"vira-grey-background-header":{foreground:"black",background:f["vira-grey-50"]},"vira-grey-background-placeholder":{foreground:"black",background:f["vira-grey-60"]},"vira-grey-background-decoration":{foreground:"black",background:f["vira-grey-80"]},"vira-grey-background-invisible":{foreground:"black",background:f["vira-grey-90"]},"vira-grey-on-self-body":{foreground:f["vira-grey-10"],background:"#363f43"},"vira-grey-on-self-non-body":{foreground:f["vira-grey-20"],background:"#363f43"},"vira-grey-on-self-header":{foreground:f["vira-grey-40"],background:"#363f43"},"vira-grey-on-self-placeholder":{foreground:f["vira-grey-50"],background:"#363f43"},"vira-grey-on-self-decoration":{foreground:f["vira-grey-70"],background:"#363f43"},"vira-grey-on-self-invisible":{foreground:f["vira-grey-80"],background:"#363f43"}}}),M=Cn({"vira-form-border-color":{default:Ke.colors["vira-grey-foreground-decoration"].foreground.value,initialValue:"transparent",syntax:ve.Color},"vira-form-placeholder-color":{default:Ke.colors["vira-grey-foreground-placeholder"].foreground.value,initialValue:"transparent",syntax:ve.Color},"vira-form-background-color":{default:Ke.colors[go].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-foreground-color":{default:Ke.colors[go].foreground.value,initialValue:"transparent",syntax:ve.Color},"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":{syntax:ve.Color,default:Ke.colors["vira-grey-foreground-header"].foreground.value,initialValue:"transparent"},"vira-form-text-selection-color":{default:Ke.colors["vira-blue-background-decoration"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-selection-hover-color":{default:Ke.colors["vira-blue-background-invisible"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-selection-active-color":{default:Ke.colors["vira-blue-background-decoration"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-error-color":{default:Ke.colors["vira-red-background-non-body"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-error-hover-color":{default:Ke.colors["vira-red-background-header"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-error-active-color":{default:Ke.colors["vira-red-background-body"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-success-color":{default:Ke.colors["vira-green-background-non-body"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-label-font-weight":"bold","vira-form-radius":"8px","vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":{default:Ke.colors["vira-blue-foreground-header"].foreground.value,initialValue:"transparent",syntax:ve.Color},"vira-form-focus-outline-border-radius":{initialValue:"10px",default:A`calc(var(--vira-form-input-radius) + 2px)`,syntax:ve.Length},"vira-form-accent-primary-color":{default:Ke.colors["vira-blue-background-non-body"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-accent-primary-hover-color":{default:Ke.colors["vira-blue-background-header"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-accent-primary-active-color":{default:Ke.colors["vira-blue-background-body"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-danger-color":{default:Ke.colors["vira-red-background-non-body"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-danger-hover-color":{default:Ke.colors["vira-red-background-header"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-danger-active-color":{default:Ke.colors["vira-red-background-body"].background.value,initialValue:"transparent",syntax:ve.Color},"vira-form-filled-background-color":{default:Ke.colors["vira-grey-foreground-invisible"].foreground.value,initialValue:"transparent",syntax:ve.Color},"vira-form-filled-active-background-color":{default:Ke.colors["vira-grey-foreground-decoration"].foreground.value,initialValue:"transparent",syntax:ve.Color}});function lu({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const o=rt(Aa(r+t+e)),i=A`
        content: '';
        top: calc(${o} * -1);
        left: calc(${o} * -1);
        position: absolute;
        width: calc(100% + calc(${o} * 2));
        height: calc(100% + calc(${o} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${r}px solid ${M["vira-form-focus-outline-color"].value};
        border-radius: ${M["vira-form-focus-outline-border-radius"].value};
        z-index: 100;
    `;return n?i:A`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${i}
        }
    `}const z=qe()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>A`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),ie=qe()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal,"vira-checkbox-filled-checked":({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-unchecked":({inputs:e})=>!!e.fillWhenUnchecked},styles:({hostClasses:e})=>A`
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
            ${w["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        ${e["vira-checkbox-filled-checked"].selector} {
            & .custom-checkbox.checked {
                color: ${M["vira-form-background-color"].value};
                background-color: ${M["vira-form-accent-primary-color"].value};
            }

            label {
                &:hover .custom-checkbox.checked {
                    background-color: ${M["vira-form-accent-primary-hover-color"].value};
                }

                &:active .custom-checkbox.checked {
                    background-color: ${M["vira-form-accent-primary-active-color"].value};
                }
            }
        }
        ${e["vira-checkbox-filled-unchecked"].selector} {
            & .custom-checkbox:not(.checked) {
                color: ${M["vira-form-background-color"].value};
                background-color: ${M["vira-form-error-color"].value};
            }

            label {
                &:hover .custom-checkbox:not(.checked) {
                    background-color: ${M["vira-form-error-hover-color"].value};
                }

                &:active .custom-checkbox:not(.checked) {
                    background-color: ${M["vira-form-error-active-color"].value};
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
                font-weight: ${M["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${M["vira-form-selection-hover-color"].value};
            }
            &:active .custom-checkbox {
                background-color: ${M["vira-form-selection-active-color"].value};
            }
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${M["vira-form-border-color"].value};
            color: ${M["vira-form-foreground-color"].value};
            border-radius: ${M["vira-form-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${lu({elementBorderSize:1})}

            &.checked {
                & ${z} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${M["vira-form-error-color"].value};
            }

            &.disabled {
                ${mi};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:bt()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}const o=e.label?g`
                  <span
                      class="label-text"
                      ${Gn(e.attributePassthrough?.text)}
                      style=${at(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:Q;return g`
            <label
                class=${sr({disabled:!!e.disabled})}
                ${Gn(e.attributePassthrough?.label)}
                style=${at(e.stylePassthrough?.label)}
                ${W("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${sr({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${at(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${Gn(e.attributePassthrough?.["custom-checkbox"])}
                    style=${at(e.stylePassthrough?.["custom-checkbox"])}
                    ${eT(n)}
                >
                    <${z.assign({icon:uh,fitContainer:!0})}
                        ${Gn(e.attributePassthrough?.[z.tagName])}
                        style=${at(e.stylePassthrough?.[z.tagName])}
                    ></${z}>
                </span>
            </label>
        `}}),pM=Cn({"vira-monospace":"monospace"}),bc=A`
    padding: 0;
    margin: 0;
`,Vr=A`
    ${bc};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,cd=Cn({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),es={menuShadow:A`
        filter: drop-shadow(0px 5px 5px ${cd["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:A`
        filter: drop-shadow(0px -5px 5px ${cd["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:A`
        box-shadow: 0 5px 15px ${cd["modal-shadow-color"].value};
    `},ws=A`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`;function hf({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>hf({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function bM({value:e,allowed:t,blocked:r}){const n=t?hf({input:e,matcher:t}):!0,o=r?hf({input:e,matcher:r}):!1;return n&&!o}function gf(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(bM({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function yM({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){const i=Yo(r,HTMLInputElement),s=T.hasKey(r,"data")&&Dy.isString(r.data)||"";if(s){const{blocked:u}=gf({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=gf({value:i.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;i.value!==a&&(i.value=a),t!==a&&o(a)}var Xo=(e=>(e.Default="text",e.Password="password",e.Email="email",e.Number="number",e))(Xo||{});const Ze=qe()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>A`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${M["vira-form-foreground-color"].value};
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
                    font-weight: ${M["vira-form-label-font-weight"].value};
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
                ${Vr};
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
                ${ws};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Vr};
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
                border-radius: ${M["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${M["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Vr};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${M["vira-form-radius"].value};
                background-color: ${M["vira-form-background-color"].value};
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
                ${Vr};
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
                    ${lu({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${M["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${M["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${M["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${ws};
            }

            button {
                ${Vr};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Jn["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${M["vira-form-placeholder-color"].value};
            }

            .clear-x-button:hover {
                color: ${M["vira-form-error-color"].value};
            }

            .clear-x-button:active {
                color: ${M["vira-form-error-active-color"].value};
            }

            .show-password-button:hover {
                color: ${M["vira-form-accent-primary-color"].value};
            }

            .show-password-button:active {
                color: ${M["vira-form-accent-primary-active-color"].value};
            }

            ${e["vira-input-error"].selector} {
                & .wrapper-border {
                    border-color: ${M["vira-form-error-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${mi};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:bt(),inputBlocked:bt()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:ei(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:o,host:i})=>{const{filtered:s}=gf({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?g`
                  <${z.assign({icon:e.icon})} class="left-side-icon"></${z}>
              `:Q,u=e.fitText?A`
                  width: ${r.forcedInputWidth}px;
              `:Q,l=W("mousedown",m=>{const h=Yo(m,HTMLElement,{useOriginalTarget:!0}),v=ln.instanceOf(i.shadowRoot.querySelector("input"),HTMLInputElement);h!==v&&(m.preventDefault(),v.focus())}),c=e.disableBrowserHelps||e.type==="password",d=g`
            <span class="input-wrapper" ${e.label?Q:l}>
                ${a}
                ${gr(!!e.fitText,g`
                        <span
                            class="size-span"
                            ${ew(({contentRect:m})=>{n({forcedInputWidth:m.width})})}
                        >
                            <pre>${s||e.placeholder||Q}</pre>
                        </span>
                    `)}

                <input
                    id=${at(e.label?r.randomId:void 0)}
                    aria-label=${at(e.label||void 0)}
                    autofocus=${!1}
                    type=${vM(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${at(c?"off":void 0)}
                    autocorrect=${at(c?"off":void 0)}
                    autocapitalize=${at(c?"off":void 0)}
                    spellcheck=${at(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${W("input",m=>{yM({inputs:e,previousValue:s,event:m,inputBlockedCallback(h){t(new o.inputBlocked(h))},newValueCallback(h){t(new o.valueChange(h))}})})}
                    placeholder=${at(e.placeholder||void 0)}
                    ${Gn(e.attributePassthrough)}
                />

                ${gr(!!(e.showClearButton&&e.value),g`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${W("mousedown",m=>{m.stopImmediatePropagation(),m.preventDefault()})}
                            ${W("click",()=>{e.disabled||t(new o.valueChange(""))})}
                        >
                            <${z.assign({icon:mw})}></${z}>
                        </button>
                    `)}
                ${gr(e.type==="password",g`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${W("mousedown",m=>{m.stopImmediatePropagation(),m.preventDefault()})}
                            ${W("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${z.assign({icon:r.showPassword?pw:gw})}></${z}>
                        </button>
                    `)}
                ${gr(!!e.suffix,g`
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
            `:d}});function vM(e,t){return e==="password"&&t?"text":e||"text"}const ut=qe()({tagName:"vira-select",state(){return{randomId:ei(32)}},events:{valueChange:bt()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${M["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Vr};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${M["vira-form-radius"].value};
            color: ${M["vira-form-foreground-color"].value};
            background-color: ${M["vira-form-background-color"].value};
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
                    ${lu({elementBorderSize:0,noNesting:!0})}
                }

                &.placeholder {
                    color: ${M["vira-form-placeholder-color"].value};
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
                border-radius: ${M["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${M["vira-form-border-color"].value};
                transition: border
                    ${Jn["vira-interaction-animation-duration"].value};
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
                font-weight: ${M["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${mi}
            }
            ${z} {
                ${mi}
            }
            & * {
                cursor: not-allowed;
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${M["vira-form-error-color"].value};
            }
        }
    `,render({inputs:e,state:t,dispatch:r,events:n}){const o=e.value||void 0,i=e.placeholder||o==null?g`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:Q,s=g`
            <span class="select-wrapper">
                <select
                    .value=${at(o)}
                    class=${sr({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${at(e.label?t.randomId:void 0)}
                    aria-label=${at(e.label||void 0)}
                    aria-disabled=${at(e.disabled?"true":void 0)}
                    ${W("input",a=>{const u=Yo(a,HTMLSelectElement),l=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(c=>c.value===o)),r(new n.valueChange(l))})}
                    ${Gn(e.attributePassthrough?.select)}
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

                <${z.assign({icon:e.icon})} class="input-icon"></${z}>
                <${z.assign({icon:lh})} class="trigger-icon"></${z}>
            </span>
        `;return e.label?g`
                <label for=${t.randomId} ${Gn(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),lr=qe()({tagName:"vira-form",events:{valueChange:bt(),validChange:bt()},styles:A`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const i=LT(e.fields);i!==n.lastIsValid&&(o({lastIsValid:i}),t(new r.validChange({allFieldsAreValid:i})));const s=ii(e.fields).map(([a,u])=>u.isHidden?Q:u.type===ye.Checkbox?g`
                        <${ie.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:Nu(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?Dn(u.testId):Q}
                            ${W(ie.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${ie}>
                    `:u.type===ye.Select?g`
                        <${ut.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:Nu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?Dn(u.testId):Q}
                            ${W(ut.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${ut}>
                    `:u.type===ye.Number?g`
                        <${Ze.assign({value:u.value?.toString()||"",disabled:e.isDisabled||u.isDisabled,allowedInputs:/\d/,hasError:u.hasError,icon:u.icon,label:Nu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,type:Xo.Number,attributePassthrough:{...u.min===void 0?{}:{min:String(u.min)},...u.max===void 0?{}:{max:String(u.max)},...u.step===void 0?{}:{step:String(u.step)}}})}
                            ${u.testId?Dn(u.testId):Q}
                            ${W(Ze.events.valueChange,l=>{const c=l.detail===""?void 0:Number(l.detail);t(new r.valueChange({key:a,...u,value:c}))})}
                        ></${Ze}>
                    `:g`
                        <${Ze.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:Nu(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===ye.NewPassword?{autocomplete:"new-password"}:u.type===ye.ExistingPassword?{autocomplete:"password"}:u.type===ye.Email?{autocomplete:"email"}:{},type:[ye.NewPassword,ye.ExistingPassword,ye.PlainPassword].includes(u.type)?Xo.Password:u.type===ye.Email?Xo.Email:Xo.Default})}
                            ${u.testId?Dn(u.testId):Q}
                            ${W(Ze.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${Ze}>
                    `);return g`
            <form ${W("submit",a=>a.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}});function wM(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given: ${_5(r)}`)}function $M(e,t=[],r=!1){return r?t.includes(e.id)?t.filter(n=>n!==e.id):[...t,e.id]:[e.id]}function hp({open:e,callback:t,popUpManager:r,host:n,options:o}){if(e){const i=r.showPopUp(n,o);t?.(i)}else r.removePopUp(),t?.(void 0)}const kr=qe()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            ${ws};
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
                <${z.assign({icon:uh})}></${z}>
                <slot>${e.label}</slot>
            </div>
        `}});function kM(e,t){return e>t}function DM(e,t){return e<t}function Ua(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var An;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(An||(An={}));var ke;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(ke||(ke={}));function yc(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const o=n[t.x];if(o)if(o.navEntry.navParams.group){const i=yc(o.children);i&&(r=i.node)}else o.navEntry.navParams.disabled||(r=o)}}if(r)return{node:r,coords:t}}function gp(e,t,r,n){if(!t){const u=yc(e.children);return u?(Ua(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:ke.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:ke.Navigate}}const{nextNode:o,requiresWrapping:i,coords:s}=ww(t.position,r),a=n?!0:!i;return o&&a?(Ua(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:i,direction:r,navAction:ke.Navigate,coords:s}):o?a?{success:!1,reason:"no conditions matched",direction:r,navAction:ke.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:ke.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:ke.Navigate}}function ww(e,t){let r=!1,n,o=1;const i=Date.now();for(;!r||!n;)if(n=xM(e,t,o),r=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-i>1e3)return Ty.warning("Failed to find next non-disabled node."),n;return n}function xM(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Kt.isDefined(n,"missing parent");const o=ln.isDefined(n.children[e.nodeCoords.y]),i=n.children.length>1&&(t===An.Down||t===An.Up),s=t===An.Down||t===An.Right?r:-1*r,a=s<0?kM:DM,u=i?v0(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=ln.isDefined(n.children[u]),c=i?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:v0(e.nodeCoords.x+s,{min:0,max:o.length-1,takeOverflow:!0}),d=n.children[u]?.[c],m=i?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:d,requiresWrapping:m,coords:{x:c,y:u}}}function AM(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:ke.Pibling};const{nextNode:o,requiresWrapping:i,coords:s}=ww(n,t),a=o?.navEntry.navParams.group?yc(o.children):{node:o,coords:s},u=r?!0:!i;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:ke.Pibling}:u?(Ua(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:i,coords:a.coords,direction:t,navAction:ke.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:ke.Pibling}}var er;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(er||(er={}));const on={name:"data-nav",js(e){return e?`[${on.name}*="${e}"]`:`[${on.name}]`},css({baseSelector:e="",navValue:t}={}){return A`
            ${rt(e)}${rt(on.js(t))}
        `}},ch="navEntry";function $w(e){return ch in e}function kw(e){if($w(e)){const t=e[ch];return ln.instanceOf(t,Dw,"Invalid nav entry")}else return}function EM(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==er.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class Dw{element;navParams;navTreeNode;navValue;eventListener=EM(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Kt.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(on.name,""),ad(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,o=t===(n===er.Focused);if(!(this.navParams.group||this.navController.locked||o||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(er.Focused),ad(this.element)||this.element.focus()):(this.removeNavValue(er.Focused),ad(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,ke.Focus)}activate(t){const r=this.navValue,n=t===(r===er.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(er.Active):this.setNavValue(er.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,ke.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(on.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(on.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function xw(e,t){Object.entries(t).forEach(([r,n])=>{T.isBoolean(n)&&n?e.setAttribute(r,""):T.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const CM=Tn(class extends Mn{element;lastKey;constructor(e){super(e),this.element=uu(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Cr}});function FM(e){return"group"in e?er.Group:e.disabled?er.Disabled:""}function pp(e,t={}){return CM(b(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;Kt.instanceOf(r,HTMLElement);const o={[on.name]:FM(t),tabindex:n?0:-1};xw(r,o);const i=kw(r)||new Dw(r,e,t);$w(r)?(i.navParams=t,i.navController=e):r[ch]=i,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function SM(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:ke.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:ke.Enter};const r=t.position.node.children[0]?.[0];return r?(Ua(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:ke.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:ke.Enter}}function TM(e,t){return Aw([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function Aw(e,t,r){for(let n=0;n<t.length;n++){const o=t[n];for(let i=0;i<o.length;i++){const s=o[i],a={ancestorChain:e,nodeCoords:{x:i,y:n},node:s};if(r(a))return a;const u=Aw(e.concat(a),s.children,r);if(u)return u}}}function Ew(e,t){const r=TM(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function MM(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:ke.Exit};const r=t.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:ke.Exit};const{nodeCoords:n}=Ew(e,r.navEntry);return Ua(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:ke.Exit,coords:n}}class PM extends pn()("nav-exit"){}class Cw extends pn()("nav-activate"){}class NM extends pn()("nav-focus"){}class IM extends pn()("nav-enter"){}class OM extends pn()("nav-navigate"){}class BM extends pn()("nav-navigate-pibling"){}function RM(e){return{root:!0,children:Fw(e)?.children||[]}}function Fw(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=kw(t),n=LM(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function LM(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const o=n.navEntry.navParams.x,i=n.navEntry.navParams.y||0,s=As(t,i,()=>({noX:[],withX:[],y:i}));o==null?s.noX.push(n):s.withX.push({x:o,node:n})}return e.children.forEach(n=>{const o=Fw(n);o&&r(o)}),t.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,i)=>o.x-i.x),n.withX.forEach(({x:o,node:i})=>{n.noX.splice(o,0,i)}),n.noX)).filter(T.isTruthy)}class Sw extends Lf{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){yc(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=Ew(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:o}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const i={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return r&&(n===ke.Activate?this.dispatch(new Cw({detail:i})):n===ke.Focus&&this.dispatch(new NM({detail:i}))),i}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:ke.Navigate,reason:"NavController is locked."};const n=gp(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new OM({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:ke.Enter,reason:"NavController is locked."};const r=SM(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new IM({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:ke.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:ke.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Kt.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:ke.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===ke.Activate&&this.currentNavEntry.entry.focus(!0);const t=MM(this.getNavTree(),this.currentNavEntry);return this.dispatch(new PM({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:ke.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),i={...this.currentNavEntry?AM(this.currentNavEntry,r,t):gp(n,void 0,r,t),navAction:ke.Pibling};return this.dispatch(new BM({detail:i})),i}buildNavTree(){const t=pT(this.rootElement),r=RM(t);return this.cachedNavTree=r,r}}const ya=qe()({tagName:"vira-link",styles:A`
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
            color: ${M["vira-form-accent-primary-color"].value};
        }

        :host(:active) a,
        a:active {
            color: ${M["vira-form-accent-primary-active-color"].value};
        }
    `,render({inputs:e}){function t(r){if(!e.route)return;e.route.router.setRouteOnDirectNavigation(e.route.route,r)&&e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:"instant"})}if(e.link?.newTab)return g`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${Gn(e.attributePassthrough?.a)}
                    style=${at(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return g`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${Gn(e.attributePassthrough?.a)}
                    style=${at(e.stylePassthrough?.a)}
                    ${W("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),bp={item:"menu-item"},va=qe()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new Sw(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>A`
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
            background-color: ${M["vira-form-background-color"].value};
            color: ${M["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Vr};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${on.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:er.Focused})}, ${on.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:er.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${M["vira-form-selection-hover-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${on.css({baseSelector:".menu-item:not(.disabled)",navValue:er.Focused})},
                ${on.css({baseSelector:".menu-item:not(.disabled)",navValue:er.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${M["vira-form-selection-hover-color"].value};
                outline: none;
            }
        }

        ${kr} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${mi};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){wM(e.items);const r=e.items.map(n=>{const o=!!e.selected?.includes(n.id),i=T.isString(n.label)?g`
                      <${kr.assign({label:n.label,selected:o,hideCheckIcon:e.hideCheckIcons})}></${kr}>
                  `:n.label,s=n.disabled||!e.isMultiSelect&&o;return n.route?g`
                    <${ya.assign({route:n.route})}
                        class="menu-item ${sr({disabled:!!n.disabled,selected:o})}"
                        ${Dn(bp.item)}
                        title=${at(n.titleText||void 0)}
                        role="option"
                        ${pp(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </${ya}>
                `:g`
                    <button
                        class="menu-item ${sr({disabled:!!n.disabled,selected:o})}"
                        ${Dn(bp.item)}
                        title=${at(n.titleText||void 0)}
                        role="option"
                        ${pp(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </button>
                `});return g`
            ${r}
        `}});var dh=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(dh||{}),Cl=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Cl||{});const wa=qe()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${M["vira-form-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${M["vira-form-background-color"].value};
            border: 1px solid ${M["vira-form-border-color"].value};
            color: ${M["vira-form-foreground-color"].value};
            ${es.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${es.menuShadowReversed}
            border-radius: ${M["vira-form-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${M["vira-form-radius"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),Iu=globalThis.document;class jM extends qv{constructor(){if(super({defaultValue:!!Iu?.hidden,equalityCheck:T.strictEquals}),!Iu)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,Iu));const t=r=>this.updateVisibility(r,Iu);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=_M.includes(t.type),o=UM.includes(t.type),i=n?!0:o?!1:r.hasFocus()||!r.hidden;this.setValue(i)}}const UM=["blur","focusout","pagehide"],_M=["focus","focusin","pageshow"],VM=new jM;function zM(e,t){return VM.listen(e,t)}function pf(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}const yp={top:0,left:0,right:0,bottom:0};class Tw extends Rf("hide-pop-up"){}class Mw extends pn()("nav-select"){}class qM{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new Lf;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[zM(!1,t=>{t||this.removePopUp()}),this.navController.listen(Cw,t=>{const r=t.composedPath()[0];r instanceof Element&&pf(r)||t.detail.success&&(this.listenTarget.dispatch(new Mw({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),Rd("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Rd("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=t.composedPath()[0];if(n instanceof Element&&pf(n))return;r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:An.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:An.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:An.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:An.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault())}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Tw)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},o=yT(t);Kt.instanceOf(o,HTMLElement);const i=t.getBoundingClientRect(),s=o.getBoundingClientRect(),a=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,l=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=Gt(yp,v=>i[v]),d=Gt(yp,v=>{const $=l[v],D=c[v];return Math.abs($-D)}),m=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace,h=d.left>d.right+n.horizontalDiffThreshold&&d.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!m,popRight:!h,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var wo=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(wo||{});const be=qe()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new qM(new Sw(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>A`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Vr};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${lu({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${ws};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${mi}
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
    `,events:{navSelect:bt(),openChange:bt(),init:bt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:o,events:i}){e.popUpManager.listen(Tw,()=>{if(t({showPopUpResult:void 0}),o(new i.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");Kt.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(Mw,s=>{n.keepOpenAfterInteraction||hp({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),o(new i.navSelect(s.detail))}),o(new i.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:o,host:i,slotNames:s}){function a({emitEvent:v,open:$},D){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&D){const k=i.shadowRoot.querySelector(".dropdown-trigger");if(k&&!D.composedPath().includes(k))return}hp({open:$,callback(k){o({showPopUpResult:k}),v&&e(new t.openChange(k))},host:i,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,l=u==="right"&&r.showPopUpResult?n.ignoreMaxWidth?A`
                          left: unset;
                      `:A`
                          left: -${r.showPopUpResult.positions.diff.left}px;
                      `:A`
                      left: ${n.popUpOffset?.left||0}px;
                  `,c=r.showPopUpResult&&u==="left"?n.ignoreMaxWidth?A`
                          right: unset;
                      `:A`
                          right: -${r.showPopUpResult.positions.diff.right}px;
                      `:A`
                      right: ${n.popUpOffset?.right||0}px;
                  `,d=A`
            ${l}
            ${c}
        `,m=r.showPopUpResult?r.showPopUpResult.popDown?n.ignoreMaxHeight?A`
                          bottom: unset;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${d}
                      `:A`
                          bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${d}
                      `:n.ignoreMaxHeight?A`
                        top: unset;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${d}
                    `:A`
                        top: -${r.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${d}
                    `:void 0;function h(v){a({emitEvent:!0,open:!r.showPopUpResult},v)}return g`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${sr({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${W("keydown",v=>{!r.showPopUpResult&&v.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},v)})}
                ${W("click",v=>{if(v.detail===0){let $=!1;if(vT(({element:D})=>pf(D)?($=!0,!0):!1),$)return;h(v)}})}
                ${W("mousedown",v=>{v.button===0&&h(v)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${sr({"right-aligned":u==="right"})}"
                    style=${m}
                >
                    ${gr(!!r.showPopUpResult,g`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),WM={menu:"menu-trigger-menu"},po=qe()({tagName:"vira-menu-trigger",styles:A`
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
    `,events:{itemActivate:bt(),openChange:bt()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:o}){return g`
            <${be.assign({...e,keepOpenAfterInteraction:!0,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||wo.Left})}
                class=${sr({open:!!t.showPopUpResult})}
                ${W(be.events.init,i=>{r({navController:i.detail.navController,popUpManager:i.detail.popUpManager})})}
                ${W(be.events.openChange,i=>{!!t.showPopUpResult!=!!i.detail&&n(new o.openChange(i.detail)),r({showPopUpResult:i.detail})})}
                ${W(be.events.navSelect,i=>{const s=i.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);n(new o.itemActivate($M(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${be.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?g`
                          <${wa.assign({direction:t.showPopUpResult.popDown?Cl.Downwards:Cl.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${be.slotNames.popUp}
                              class=${sr({"full-width-menu":e.horizontalAnchor===wo.Both})}
                          >
                              <${va.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Dn(WM.menu)}
                              ></${va}>
                          </${wa}>
                      `:Q}
            </${be}>
        `}}),et=qe()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>A`
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
        `}});var Zn=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e.Danger="vira-button-danger",e.DangerOutline="vira-button-danger-outline",e.Ghost="vira-button-ghost",e))(Zn||{});const Ge=qe()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline"||e.buttonStyle==="vira-button-danger-outline","vira-button-danger-style":({inputs:e})=>e.buttonStyle==="vira-button-danger"||e.buttonStyle==="vira-button-danger-outline","vira-button-ghost-style":({inputs:e})=>e.buttonStyle==="vira-button-ghost","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon,"vira-button-icon-only":({inputs:e})=>!!e.icon&&!e.text,"vira-button-default-style":({inputs:e})=>!e.buttonStyle||e.buttonStyle==="vira-button-default"},cssVars:{"vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"transparent","vira-button-internal-background-color":"transparent"},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ws};
            ${t["vira-button-internal-background-color"].name}: ${M["vira-form-accent-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${M["vira-form-background-color"].value};
            ${M["vira-form-focus-outline-color"].name}: ${M["vira-form-accent-primary-hover-color"].value}
        }

        ${e["vira-button-disabled"].selector} {
            ${mi};
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${M["vira-form-accent-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${M["vira-form-accent-primary-active-color"].value};
        }

        ${e["vira-button-danger-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: ${M["vira-form-error-color"].value};
            }

            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${M["vira-form-error-hover-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${M["vira-form-error-active-color"].value};
            }
        }

        ${e["vira-button-ghost-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: transparent;
                ${t["vira-button-internal-foreground-color"].name}: currentColor;
            }

            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${M["vira-form-filled-background-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${M["vira-form-filled-active-background-color"].value};
            }
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: ${t["vira-button-internal-foreground-color"].value};
            border-color: currentColor;
        }

        button {
            ${Vr};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${M["vira-form-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Jn["vira-interaction-animation-duration"].value},
                background-color
                    ${Jn["vira-interaction-animation-duration"].value},
                border-color ${Jn["vira-interaction-animation-duration"].value};

            ${lu({elementBorderSize:2})}
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
        `}});var bf=(e=>(e.Error="error",e.Success="success",e))(bf||{});const dd=qe()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":{default:A`1px solid ${M["vira-form-border-color"].value}`,initialValue:"none"},"vira-card-padding":{default:A`
                ${M["vira-form-wrapper-radius"].value}
            `,initialValue:"16px",syntax:ve.Length}},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${M["vira-form-wrapper-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${M["vira-form-error-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${M["vira-form-success-color"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),Bn=qe()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Vr};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Jn["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:bt()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:o,inputs:i}){const s=i.expanded?A`
                  height: ${e.contentHeight}px;
              `:A`
                  height: 0;
              `;return g`
            <button
                class="header-wrapper"
                ${W("click",()=>{n(new o.expandChange(!i.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${ew(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),fd={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},ia=qe()({tagName:"vira-dropdown",styles:A`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${po} {
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
                ${Jn["vira-interaction-animation-duration"].value} linear;
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
            ${ws};
            border: 1px solid ${M["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${M["vira-form-radius"].value};
            background-color: ${M["vira-form-background-color"].value};
            color: ${M["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:bt(),openChange:bt()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:o}){const i=pi(t.selected,c=>t.options.find(d=>d.id===c),T.isTruthy),s=t.icon?g`
                  <${z.assign({icon:t.icon})}
                      ${Dn(fd.icon)}
                  ></${z}>
              `:Q,a=!i.length,u=t.selectionPrefix&&!a?g`
                      <span class="selected-label-prefix" ${Dn(fd.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:Q,l=a?t.placeholder||"":t.isMultiSelect&&i.length>1?`${i.length} Selected`:i[0]?.label||"";return g`
            <${po.assign({...t,items:t.options,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||wo.Both})}
                ${W(po.events.openChange,c=>{o({showPopUpResult:c.detail}),r(new n.openChange(c.detail))})}
                ${W(po.events.itemActivate,c=>{r(new n.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${sr({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Dn(fd.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${sr({"using-placeholder":a})}"
                        title=${at(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${z.assign({icon:lh})}
                            class="trigger-icon"
                        ></${z}>
                    </span>
                </div>
            </${po}>
        `}}),ni=qe()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>A`
        :host {
            color: ${M["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),so=qe()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:bt(),imageError:bt()},styles:({hostClasses:e})=>A`
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
                      <${z.assign({icon:El})} class="error"></${z}>
                  </slot>
              `:t.loadedUrls[s]?void 0:g`
                    <slot class="status-wrapper" name=${i.loading}>
                        <${z.assign({icon:fi})}></${z}>
                    </slot>
                `;return g`
            ${gr(!!a,a)}
            <img
                class=${sr({hidden:!!a})}
                ${W("load",async()=>{e._debugLoadDelay&&await oi(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new o.imageLoad)})}
                ${W("error",async u=>{e._debugLoadDelay&&await oi(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new o.imageError(u.error))})}
                src=${s}
            />
        `}}),KM=["pagehide","pageshow","popstate"],ao=qe()({tagName:"vira-modal",events:{modalClose:bt()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-filter":"blur(3px)"},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${bc};
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
            ${es.modal}

            &[open] {
                display: flex;
            }
            &::backdrop {
                background: ${M["vira-form-modal-backdrop-color"].value};
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
                            color: ${M["vira-form-secondary-body-foreground"].value};
                        }
                    }

                    & button.close {
                        ${Vr};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${M["vira-form-radius"].value};

                        &:hover {
                            background-color: ${M["vira-form-selection-hover-color"].value};
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
    `,render({inputs:e,state:t,updateState:r,events:n,dispatch:o,slotNames:i}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),r({previousOpenValue:e.open}),e.open)){const a=KM.map(u=>Rd(u,()=>{o(new n.modalClose)}));r({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),o(new n.modalClose))}return g`
            <dialog
                ${di(a=>{r({dialogElement:ln.instanceOf(a,HTMLDialogElement)})})}
                ${W("close",()=>{s()})}
                ${W("mousedown",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${di(a=>{r({contentElement:ln.instanceOf(a,HTMLDivElement)})})}
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
                            ${W("click",()=>{t.dialogElement?.close()})}
                        >
                            <${z.assign({icon:yw})}></${z}>
                        </button>
                    </div>
                    ${e.open?g`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:Q}
                </div>
            </dialog>
        `}}),En=qe()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":({state:e,inputs:t})=>e.isOverflowing||!!t.useSmall},styles:({hostClasses:e})=>A`
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
                ${di(i=>{if(!r.automaticallySwitch)return;const s={elementToTest:i,host:n,updateState:t},a=new ResizeObserver(()=>{md(s)});a.observe(n),a.observe(i);const u=jf(i,"slotchange",()=>{md(s)});md(s),o.cleanup?.(),t({cleanup(){a.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function md({elementToTest:e,host:t,updateState:r}){const n=e.scrollWidth>t.clientWidth;r({isOverflowing:n})}const Un=qe()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px"},styles:({cssVars:e})=>A`
        :host {
            /* Default width that can easily be overridden because it's applied on the host. */
            width: 100px;
            /* Default height that can easily be overridden because it's applied on the host. */
            height: 10px;
            display: inline-flex;
            align-items: center;
            border-radius: ${e["vira-progress-border-radius"].value};
            color: ${M["vira-form-accent-primary-color"].value};
            overflow: hidden;
        }

        .progress-bar {
            background-color: currentColor;
            height: 100%;
        }

        .background-bar {
            background-color: ${M["vira-form-filled-background-color"].value};
            height: 100%;
            flex-grow: 1;
        }
    `,render({inputs:e,host:t}){const r=e.min||0,o=(e.max||100)-r,i=e.value-r,s=P5(Math.round(i/o*100),{min:0,max:100});return xw(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),g`
            <div
                class="progress-bar"
                style=${s?A`
                          width: ${s}%;
                      `:A`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function Pw(e){return G9({async updateCallback(t,r){if(r&&t in r.cache)return{cache:r.cache,element:r.cache[t],key:t};const n=await e[t]();return{cache:{...r?.cache,[t]:n},element:n,key:t}}})}function Nw(e,{ready:t,loading:r,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?r(e.value.then(i=>({[i.key]:i.element}))):t({[e.value.key]:e.value.element})}const Br=tw(),zr=Br()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:({cssVars:e})=>A`
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
                ${W("click",n=>{(!e.router||fw(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new Al(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function GM(e,t){return e.entry.entryType===Bt.Root?!1:e.entry.entryType===Bt.Page||T.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:T.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const Li=Br()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${$e["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${$e["element-book-nav-hover-background-color"].value};
            color: ${$e["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${$e["element-book-nav-active-background-color"].value};
            color: ${$e["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${zr.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${$e["element-book-nav-selected-background-color"].value};
            color: ${$e["element-book-nav-selected-foreground-color"].value};
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
            color: ${$e["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!GM(r,e.selectedPath))return;const n=A`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return g`
                <li style=${n}>
                    <${zr.assign({router:e.router,route:{paths:[fr.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${sr({"title-row":!0,selected:e.selectedPath?T.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${gr(Ji(r,Bt.ElementExample),g`
                                    <${z.assign({icon:hw})}></${z}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${zr}>
                </li>
            `});return g`
            <${zr.assign({route:os,router:e.router})}>
                <slot name=${xn.NavHeader}>Book</slot>
            </${zr}>
            <ul>
                ${t}
            </ul>
        `}}),Eo=Br()({tagName:"book-error",styles:A`
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
    `,render({inputs:e}){return(T.isArray(e.message)?e.message:[e.message]).map(r=>g`
                <p>${r}</p>
            `)}}),_a=Br()({tagName:"book-page-controls",events:{controlValueChange:bt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${$e["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Ze} {
            height: 24px;
            max-width: 128px;
        }

        ${z}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===H.Hidden)return"";const s=ZM(e.currentValues[n],o,a=>{const u=T.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...Object.fromEntries(Object.keys(e.config).map(l=>[l,e.currentValues[l]])),[n]:a}}))});return g`
                    <div class="control-wrapper">
                        ${gr(i===0,g`
                                <${z.assign({icon:ba})}
                                    class="options-icon"
                                ></${z}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${o.controlType===H.Custom?g`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function ZM(e,t,r){return _o(t,H.Hidden)?"":_o(t,H.Checkbox)?g`
            <input
                type="checkbox"
                ?checked=${e}
                ${W("input",n=>{const o=Yo(n,HTMLInputElement);r(o.checked)})}
            />
        `:_o(t,H.Color)?g`
            <input
                type="color"
                .value=${e}
                ${W("input",n=>{const o=Yo(n,HTMLInputElement);r(o.value)})}
            />
        `:_o(t,H.Text)?g`
            <${Ze.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${W(Ze.events.valueChange,n=>{r(n.detail)})}
            ></${Ze}>
        `:_o(t,H.Number)?g`
            <input
                type="number"
                .value=${e}
                ${W("input",n=>{const o=Yo(n,HTMLInputElement);r(o.value)})}
            />
        `:_o(t,H.Dropdown)?g`
            <select
                .value=${e}
                ${W("input",n=>{const o=Yo(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>g`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:_o(t,H.Custom)?t.content:g`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const vp=Br()({tagName:"book-breadcrumbs",styles:A`
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
                <${zr.assign({route:{hash:void 0,search:void 0,paths:[fr.Book,...s]},router:e.router})}>
                    ${r}
                </${zr}>
                ${a}
            `}):g`
                &nbsp;
            `}}),hd=Br()({tagName:"book-breadcrumbs-bar",styles:A`
        :host {
            border-bottom: 1px solid
                ${$e["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${$e["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return g`
            ${gr(!!e.currentSearch,g`
                    &nbsp;
                `,g`
                    <${vp.assign({currentRoute:e.currentRoute,router:e.router})}></${vp}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${W("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await oi({milliseconds:200}),n.value===o&&(n.value?t(new Al({paths:[fr.Search,encodeURIComponent(n.value)]})):t(new Al(os)))})}
            />
        `}}),wp=Br()({tagName:"book-entry-description",styles:A`
        :host {
            color: ${$e["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${$e["element-book-page-foreground-color"].value};
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
            `)}}),$p=Br()({tagName:"book-page-wrapper",styles:A`
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

        ${zr} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?g`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:g`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[fr.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?Ay(e.pageNode.entry.errors):void 0;n&&console.error(n);const o=e.blockNavigation?t:g`
                  <${zr.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${zr}>
              `;return g`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${o}
                    ${n?g`
                              <${Eo.assign({message:n.message})}></${Eo}>
                          `:g`
                              <${wp.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${wp}>
                              <${_a.assign({config:e.pageNode.entry.controls,currentValues:Vf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${_a}>
                          `}
                </div>
            </div>
        `}}),Ou=Br()({tagName:"book-element-example-title",styles:A`
        :host {
            display: flex;
            color: ${$e["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const t=[fr.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return g`
            <${zr.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${zr}>
        `}}),kp=Symbol("unset-internal-state"),Dp=Br()({tagName:"book-element-example-viewer",state(){return{isUnset:kp}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Ay(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===kp&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return g`
                ${gr(!!t.elementExampleNode.entry.styles,g`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Tt(n)),console.error(n),g`
                <${Eo.assign({message:`${t.elementExampleNode.entry.title} failed: ${Tt(n)}`})}></${Eo}>
            `}},options:{allowPolymorphicState:!0}}),xp=Br()({tagName:"book-element-example-wrapper",styles:A`
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

        ${Ou} {
            color: ${$e["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ou} {
            color: ${$e["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return g`
            <div class="individual-example-wrapper">
                <${Ou.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${Ou}>
                <${Dp.assign(e)}></${Dp}>
            </div>
        `}}),HM={milliseconds:10};let sa;const Fl=new Map,Go=new Map;function JM(){return sa||(sa=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=Fl.get(r);if(n)if(t.isIntersecting){if(!Go.has(r)){const o=globalThis.setTimeout(()=>{Go.delete(r),n(),sa?.unobserve(r),Fl.delete(r)},rs(HM,{milliseconds:!0}).milliseconds);Go.set(r,o)}}else{const o=Go.get(r);o&&(clearTimeout(o),Go.delete(r))}}},{rootMargin:"100px"})),sa}function Ap(e){const t=Go.get(e);t&&(clearTimeout(t),Go.delete(e)),Fl.delete(e),sa?.unobserve(e)}const Bu=Br()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:A`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&Ap(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:g`
            <div
                class="placeholder"
                ${di(n=>{t.placeholderElement&&Ap(t.placeholderElement),r({placeholderElement:n}),Fl.set(n,()=>{r({hasRendered:!0})}),JM().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function Iw(e,t,r,n){const o=Ld(r,n),i=[];if(o){const s=Iw(e,t,o,n);s&&i.push(s)}if(Ji(r,Bt.Page)&&!e.includes(r)){const s=Vf(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:s,breadcrumbs:Gt(s,()=>r.fullUrlBreadcrumbs)})}return i.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function YM({blockNavigation:e,currentNodes:t,isTopLevel:r,router:n,isSearching:o,controls:i,originalTree:s}){if(!t.length&&o)return[g`
                No results
            `];const a=T.isLengthAtLeast(t,1)?Iw(t,i,t[0],s):void 0,u=a&&Object.values(a.config).length&&T.isLengthAtLeast(t,1)?g`
                  <${_a.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${_a}>
              `:Q,l=H9(t,c=>c.fullUrlBreadcrumbs.join(">"),c=>{if(Ji(c,Bt.Page))return g`
                    <${$p.assign({blockNavigation:e,isTopLevel:r,pageNode:c,controls:i,router:n})}
                        class="block-entry"
                    ></${$p}>
                `;if(Ji(c,Bt.ElementExample)){const d=Vf(i,c.fullUrlBreadcrumbs.slice(0,-1)),m=g`
                    <${xp.assign({blockNavigation:e,elementExampleNode:c,currentPageControls:d,router:n})}></${xp}>
                `;return g`
                    <${Bu.assign({content:m})}
                        class="inline-entry ${sr({"block-entry":c.entry.isVertical})}"
                    ></${Bu}>
                `}else{if(Ji(c,Bt.Root))return Q;{const d=g`
                    <${Eo.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}></${Eo}>
                `;return g`
                    <${Bu.assign({content:d})}
                        class="block-entry"
                    ></${Bu}>
                `}}});return[u,l]}const ji=Br()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:A`
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

        ${hd} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Jn["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:bt()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=Ry(e.currentRoute.paths),s=YM({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return g`
            <${hd.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${hd}>

            ${gr(e.showLoading,g`
                    <div
                        ${di(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${z.assign({icon:fi})}></${z}>
                    </div>
                    ${gr(!!n.lastElement,g`
                            ${n.lastElement}
                            <slot name=${xn.Footer}></slot>
                        `)}
                `,g`
                    <div
                        ${di(a=>{o({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${xn.Footer}></slot>
                `)}
        `}});function XM(e,t,r){const n=Ep(e,t);return n.length?n:(r(os),Ep(e,os.paths))}function Ep(e,t){return e.filter(r=>q5({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const gd=Ci()({tagName:"element-book-app",state(){return{currentRoute:os,router:void 0,loading:!0,colors:{config:void 0,theme:rp(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:bt()},styles:A`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${$e["element-book-page-background-color"].value};
            color: ${$e["element-book-page-foreground-color"].value};
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

        ${ji} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${Li} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const d=s(c);return!T.jsonEquals(e.currentRoute,d)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(T.isTruthy).join(" - "))}function l(c){if(!a(c))return;const d=s(c);e.router?e.router.setRoute(d):n({currentRoute:{...e.currentRoute,...d}}),t.elementBookRoutePaths&&!T.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(d.paths))}try{if(t.elementBookRoutePaths&&!T.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const k=BT(t.internalRouterConfig.basePath);n({router:k}),k.listen(!0,E=>{n({currentRoute:E})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!T.jsonEquals(c,e.colors.config)){const k=rp(c);n({colors:{config:c,theme:k}}),AD(r,k)}const d=t._debug??!1,m=J5({entries:t.pages,debug:d});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:By(m.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const h=Ry(e.currentRoute.paths),$=(h?xT({flattenedNodes:m.flattenedNodes,searchQuery:h}):void 0)??XM(m.flattenedNodes,e.currentRoute.paths,l);u($[0]?.entry.title);const D=e.treeBasedControls?.controls;return D?(t._debug&&console.info({currentControls:D}),g`
                <div
                    class="root"
                    ${W(Al,k=>{const E=k.detail;if(!a(E))return;if(n({loading:!0}),l(E),!(r.shadowRoot.querySelector(Li.tagName)instanceof Li))throw new TypeError(`Failed to find child '${Li.tagName}'`)})}
                    ${W(_a.events.controlValueChange,k=>{if(!e.treeBasedControls)return;const E=X5(D,k.detail.fullUrlBreadcrumbs,k.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:E}})})}
                >
                    ${t.blockNavigation?Q:g`
                              <${Li.assign({flattenedNodes:m.flattenedNodes,router:e.router,selectedPath:h?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot
                                      name=${xn.NavHeader}
                                      slot=${xn.NavHeader}
                                  ></slot>
                              </${Li}>
                          `}
                    <${ji.assign({blockNavigation:!!t.blockNavigation,controls:D,currentNodes:$,currentRoute:e.currentRoute,debug:d,originalTree:m.tree,router:e.router,showLoading:e.loading})}
                        ${W(ji.events.loadingRender,async k=>{await np();const E=r.shadowRoot.querySelector(ji.tagName);E?E.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${ji.tagName}' for scrolling.`),await np(),n({loading:!k.detail})})}
                    >
                        <slot
                            name=${xn.Footer}
                            slot=${xn.Footer}
                        ></slot>
                    </${ji}>
                </div>
            `):g`
                    <${Eo.assign({message:"Failed to generate page controls."})}></${Eo}>
                `}catch(c){return console.error(c),g`
                <p class="error">${Tt(c)}</p>
            `}}});function QM(e){return A`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}function Cp(e){if(typeof e=="string")return eP(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let t=[0,0,0,0,!1,"unknown"];return t[0]=e.r?e.r:e.red?e.red:!1,t[1]=e.g?e.g:e.green?e.green:!1,t[2]=e.b?e.b:e.blue?e.blue:!1,t[3]=e.a?e.a:e.alpha?e.alpha:1,t[4]=!!(t[0]&&t[1]&&t[2]),t[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",t}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}function eP(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let t=!1,n=[0,0,0,0,t,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let a in s)if(e==a){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:function(c){for(let d=0;d<3;d++)n[d]=parseInt(c[d+1],16);return n[3]=1,!0}},l=u.rex.exec(s[a]);return n[4]=t=u.sprig(l),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:function(s){let a=0,u=0,l=10,c=100,d=2.55,m="1";s[23]&&(m=s[23],delete s[23]),n[3]=m.match(/%/g)?parseFloat(m)/c:parseFloat(m);for(let h=1;h<s.length;h++)s[h]&&(a=a||h,u=h);switch(u){case 4:l=16,c=15,n[3]=parseInt(s[u],l)/c;case 3:l=16;for(let h=0;h<3;h++)n[h]=parseInt(s[a+h]+s[a+h],l);break;case 5:l=16;case 9:n[0]=n[1]=n[2]=l==10?parseFloat(s[u]):parseInt(s[u],l);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[u])*d;break;case 8:l=16,c=255,n[3]=parseInt(s[8],l)/c;case 7:l=16;case 11:for(let h=0;h<3;h++)n[h]=l==10?parseFloat(s[a+h]):parseInt(s[a+h],l);break;case 14:for(let h=0;h<3;h++)n[h]=parseFloat(s[a+h])*d;break;case 18:n[5]=s[15];for(let h=0;h<3;h++)a++,n[h]=s[a].match(/%/g)?parseFloat(s[a])*2.55:parseFloat(s[a])*255;break;case 22:n[5]=s[a];for(let h=0;h<3;h++)a++,n[h]=s[a]?s[a].match(/%/g)?parseFloat(s[a])/c:parseFloat(s[a]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let N=function(B){let q=(B+E/30)%12,ne=h*Math.min(v,1-v);return v-ne*Math.max(-1,Math.min(q-3,9-q,1))},h,v,$,D,k,E=n[0]%360;if(E<0&&(E+=360),n[5].match(/^hsla?/i))h=n[1],v=n[2],$=0,k=1;else if(n[5].match(/^hwba?/i)){if($=n[1],D=n[2],$+D>=1){n[0]=n[1]=n[2]=$/($+D),n[5]="sRGB";break}h=1,v=.5,k=1-$-D}n[0]=Math.round(255*(N(0)*k+$)),n[1]=Math.round(255*(N(8)*k+$)),n[2]=Math.round(255*(N(4)*k+$)),n[5]="sRGB"}break}return!0}},i=o.rex.exec(e);return i?(n[4]=t=o.parsley(i),n):(t=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,t,"parsleyError"])}const dt={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function tP(e,t,r=-1){const n=[0,1.1];if(isNaN(e)||isNaN(t)||Math.min(e,t)<n[0]||Math.max(e,t)>n[1])return 0;let o=0,i=0,s="BoW";return e=e>dt.blkThrs?e:e+Math.pow(dt.blkThrs-e,dt.blkClmp),t=t>dt.blkThrs?t:t+Math.pow(dt.blkThrs-t,dt.blkClmp),Math.abs(t-e)<dt.deltaYmin?0:(t>e?(o=(Math.pow(t,dt.normBG)-Math.pow(e,dt.normTXT))*dt.scaleBoW,i=o<dt.loClip?0:o-dt.loBoWoffset):(s="WoB",o=(Math.pow(t,dt.revBG)-Math.pow(e,dt.revTXT))*dt.scaleWoB,i=o>-.1?0:o+dt.loWoBoffset),r<0?i*100:r==0?Math.round(Math.abs(i)*100)+"<sub>"+s+"</sub>":Number.isInteger(r)?(i*100).toFixed(r):0)}function rP(e,t,r=-1,n=!0){let o=Cp(t),i=Cp(e);return!(i[3]==""||i[3]==1)&&(i=oP(i,o,n)),tP(Fp(i),Fp(o),r)}function nP(e,t=2){const r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],i=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(t),0,0,0,0,0,0,0,0,0];s.length;let a=777;e=Math.abs(e);const u=.2,l=e==0?1:e*u|0;let c=0,d=(e-r[l][c])*u;for(c++;c<i;c++)a=r[l][c],a>400?s[c]=a:e<14.5?s[c]=999:e<29.5?s[c]=777:a>24?s[c]=Math.round(a-n[l][c]*d):s[c]=a-(2*n[l][c]*d|0)*.5;return s}function Fp(e=[0,0,0]){function t(r){return Math.pow(r/255,dt.mainTRC)}return dt.sRco*t(e[0])+dt.sGco*t(e[1])+dt.sBco*t(e[2])}function oP(e=[0,0,0,1],t=[0,0,0],r=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let i=0;i<3;i++)o[i]=t[i]*n+e[i]*e[3],r&&(o[i]=Math.min(Math.round(o[i]),255));return o}const Ow={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};Gt(Ow,e=>e);Object.fromEntries(Object.entries(Ow).map(([e,t])=>[t,e]));function iP({background:e,foreground:t}){const r=N5(Number(rP(t,e)),{digits:1});return{contrast:r,fontSizes:sP(r),contrastLevel:aP(r)}}function sP(e){const t=nP(e).slice(1);return Bl(t,(n,o)=>({key:(o+1)*100,value:n}))}function aP(e){return ln.isDefined(vc.find(t=>t.min<=Math.abs(e)))}var Oe;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(Oe||(Oe={}));const uP={[Oe.SmallBodyText]:"Small Text",[Oe.BodyText]:"Body Text",[Oe.NonBodyText]:"Non-body Text",[Oe.Header]:"Header",[Oe.Placeholder]:"Placeholder",[Oe.Decoration]:"Decoration",[Oe.Invisible]:"Invisible"};Oe.SmallBodyText,Oe.BodyText,Oe.NonBodyText,Oe.Header,Oe.Placeholder,Oe.Decoration,Oe.Invisible;const vc=[{min:90,name:Oe.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:Oe.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:Oe.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:Oe.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:Oe.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:Oe.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:Oe.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];Bl(vc,e=>({key:e.min,value:e}));Bl(vc,e=>({key:e.name,value:e}));const pd=Ci()({tagName:"vir-contrast-indicator",styles:A`
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

        .${rt(Oe.Invisible)} {
            color: red;
        }
        .${rt(Oe.Decoration)} {
            color: #ff6600;
        }
        .${rt(Oe.Placeholder)} {
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
    `,render({inputs:e}){const t=vc.toReversed().slice(1).map(o=>g`
                    <div
                        class="gauge-level ${sr({active:o.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),r=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return g`
            <div title=${r} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${t}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${uP[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),Sp=Ci()({tagName:"vir-color-pair",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"vir-color-pair-no-contrast-tips":({inputs:e,state:t})=>!e.showContrast&&!t.forceShowEverything},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Vr};
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
            font-family: ${pM["vira-monospace"].value};
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${bc};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${pd} {
            margin-top: 1px;
        }
    `,render({state:e,updateState:t,inputs:r,host:n}){ss({onElement:n,forCssVar:r.color.background,toValue:r.color.background.default}),ss({onElement:n,forCssVar:r.color.foreground,toValue:r.color.foreground.default});const o=["foreground","background"].map(u=>{const l=[r.color[u].name,r.showVarValues||e.forceShowEverything?":":""].filter(T.isTruthy).join(""),c=r.showVarValues||e.forceShowEverything?g`
                          <span>${r.color[u].default}</span>
                      `:Q;return g`
                <p>
                    <span>${l}</span>
                    ${c}
                </p>
            `}),i=r.showVarNames||e.forceShowEverything?g`
                      <div class="css-var-names">${o}</div>
                  `:Q,s=e.previewElement?iP({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,a=s&&(r.showContrast||e.forceShowEverything)?g`
                      <${pd.assign({contrast:s,fontWeight:r.fontWeight})}></${pd}>
                  `:Q;return g`
            <button
                ${W("click",()=>{t({forceShowEverything:!e.forceShowEverything})})}
                ${di(u=>{t({previewElement:ln.instanceOf(u,HTMLElement)})})}
                class="color-preview"
                style=${QM(r.color)}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${A`
                                visibility: ${rt((s?.fontSizes[400]||1/0)>150?"hidden":"visible")};
                                font-weight: ${r.fontWeight};
                                font-size: ${s?s.fontSizes[400]:14}px;
                            `}
                        >
                            Min
                        </span>
                    </span>
                </div>
            </button>
            ${a} ${i}
        `}}),Ru="None";function lP({parent:e,title:t,theme:r,hideInverseColors:n,overrides:o,useVerticalLayout:i,prefixGroupByCount:s=2,hideCopyCode:a}){const u={"Show Var Names":{controlType:H.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:H.Checkbox,initValue:!0}},l={"Theme Override":{controlType:H.Dropdown,initValue:Ru,options:[Ru,...(o||[]).map(D=>{if(D.name===Ru)throw new Error(`Cannot have theme override named '${Ru}'`);return D.name})]}},c=Ce({parent:e,title:t,controls:u});function d({controls:D,theme:k,themeColorName:E}){const N=T.isKeyOf(E,k.colors)?k.colors[E]:void 0,B=T.isKeyOf(E,k.inverse)?k.inverse[E]:void 0;if(!N||!B)throw new Error(`No theme color found by name '${E}'`);const q=g`
            <${Sp.assign({color:N,showVarValues:!0,showVarNames:D["Show Var Names"],showContrast:D["Show Contrast Tips"],fontWeight:400})}></${Sp}>
        `,ne=Q;return g`
            <div
                class="with-inverse"
                ${tT(xe=>{mM(ln.instanceOf(xe,HTMLElement),k)})}
            >
                ${q}${ne}
            </div>
        `}function m(D,k,E){const N=d5(Object.keys(k.colors),B=>s?B.split("-").slice(0,s).join("-"):B);Object.entries(N).forEach(([B,q])=>{q&&D({title:B,styles:A`
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
                    `,render({controls:ne}){const xe="Theme Override"in ne&&ne["Theme Override"]&&E?.find(pe=>pe.name===ne["Theme Override"])||void 0;return q.map(pe=>d({controls:ne,theme:xe?.asTheme||k,themeColorName:pe}))}})})}const h=["Click a color preview to show CSS var names and values."],v=Ce({parent:c,title:"Default",descriptionParagraphs:h,useVerticalExamples:i,controls:{...l},defineExamples({defineExample:D}){m(D,r,o)}}),$=(o||[]).map(D=>Ce({parent:c,title:D.name,useVerticalExamples:i,descriptionParagraphs:h,defineExamples({defineExample:k}){m(k,D.asTheme,void 0)}}));return[c,v,...$]}const it=Ce({title:"Elements",parent:void 0}),fh=Ce({title:"Styles",parent:void 0}),Bw=Ce({title:"Util",parent:void 0}),cP=Ce({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:H.Color,initValue:""},"Fill Color":{controlType:H.Color,initValue:""},"Stroke Width":{controlType:H.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(mf).forEach(t=>{e({title:t.name,styles:A`
                    :host(:hover) ${z} {
                        background-color: #f2f2f2;
                    }

                    ${z} {
                        padding: 8px;
                        border-radius: ${M["vira-form-radius"].value};
                    }
                `,render({controls:r}){const n=A`
                        ${w["vira-icon-fill-color"].name}: ${rt(r["Fill Color"]||"inherit")};
                        ${w["vira-icon-stroke-color"].name}: ${rt(r["Stroke Color"]||"inherit")};
                        ${w["vira-icon-stroke-width"].name}: ${rt(r["Stroke Width"]?Aa(r["Stroke Width"]):"inherit")};
                    `;return g`
                        <${z.assign({icon:t})} style=${n}></${z}>
                    `}})})}}),dP=lP({parent:fh,theme:Ke,title:"Vira Theme",hideInverseColors:!0,overrides:[gM],hideCopyCode:!0}),Rw={async element1(){return await oi({seconds:2}),(await ol(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-Cxq6Zd92.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await oi({seconds:2}),(await ol(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-C67Nz-pk.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},Tp=Ci()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:Pw(Rw)}},render({state:e,inputs:t}){return Nw(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(r){return g`
                    <${ni}>
                        ${hi("Failed to import element",Tt(r))}
                    </${ni}>
                `},loading(){return g`
                    <${z.assign({icon:fi})}></${z}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Kt.never("The error element will always error")}})}}),Mp=Ci()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:Pw(Rw)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),Nw(e.dynamicElements,{error(r){return g`
                    <${ni}>
                        ${hi("Failed to import element",Tt(r))}
                    </${ni}>
                `},loading(){return g`
                    <${z.assign({icon:fi})}></${z}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Kt.never("The error element will always error")}})}}),Pp=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],fP=Ce({parent:Bw,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:A`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${ut.assign({value:String(t.value),options:Pp})}
                        ${W(ut.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${ut}>
                    <${Tp.assign({numberValue:t.value})}></${Tp}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:A`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${ut.assign({value:String(t.value),options:Pp})}
                        ${W(ut.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${ut}>
                    <${Mp.assign({numberValue:t.value})}></${Mp}>
                `}})}}),mP=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:g`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:A`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:A`
            ${kr} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],hP=Ce({title:kr.tagName,parent:it,controls:{Selected:{controlType:H.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:H.Text,initValue:""}},defineExamples({defineExample:e}){mP.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?g`
                            <${kr.assign(n)}>
                                ${t.customTemplate}
                            </${kr}>
                        `:g`
                            <${kr.assign(n)}></${kr}>
                        `}})})}}),yf=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new ah({sanitizeRoute(e){return e}})}}],gP=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:dh.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...yf,{id:"long",label:g`
                        <${kr.assign({selected:!1})}>
                            <div
                                style=${A`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${kr}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:wo.Both,items:[...yf,{id:"long",label:g`
                        <${kr.assign({selected:!1})}>
                            <div
                                style=${A`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${kr}>
                    `}]}}],pP=Ce({parent:it,title:po.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){gP.forEach(t=>{e({title:t.title,styles:A`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${po.assign({items:yf,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${po}>
                    `}})})}}),Lw=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],bP=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...Lw,{id:4,label:"link here",route:{route:{paths:["test"]},router:new ah({sanitizeRoute(e){return e}})}}]}}],yP=Ce({parent:it,title:va.tagName,defineExamples({defineExample:e}){bP.forEach(t=>{e({title:t.title,render(){return g`
                        <${va.assign({isMultiSelect:!1,navController:void 0,items:Lw,selected:[],...t.inputs})}></${va}>
                    `}})})}}),jw=[];_r(Cl).forEach(e=>{_r(dh).forEach(t=>{jw.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const vP=Ce({parent:it,title:wa.tagName,defineExamples({defineExample:e}){jw.forEach(t=>{e({title:t.title,styles:A`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${wa.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${wa}>
                    `}})})}}),wP=Ce({parent:it,title:be.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:A`
                ${be} {
                    ${M["vira-form-focus-outline-border-radius"].name}: 0;
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
                    <${be.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${be.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${be.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${be}>
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
                    <${be.assign({keepOpenAfterInteraction:!0,horizontalAnchor:wo.Right})}>
                        <div slot=${be.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${be.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${be}>
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
                    <${be.assign({keepOpenAfterInteraction:!0,horizontalAnchor:wo.Left})}>
                        <div slot=${be.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${be.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${be}>
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
                    <${be.assign({keepOpenAfterInteraction:!0,horizontalAnchor:wo.Right})}>
                        <div slot=${be.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${be.slotNames.popUp}>not long</div>
                    </${be}>
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
                        <${be.assign({keepOpenAfterInteraction:!0})}>
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
                `}})}}),$P=[{title:"menu shadow",styles:es.menuShadow},{title:"menu shadow reversed",styles:es.menuShadowReversed},{title:"modal",styles:es.modal}],kP=Ce({parent:fh,title:"Shadows",defineExamples({defineExample:e}){$P.forEach(t=>{e({title:t.title,styles:A`
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
                    `}})})}}),DP=Ce({parent:it,title:et.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:H.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return g`
                    <${et.assign({text:"Text here",bold:!1})}></${et}>
                `}}),e({title:"Bold",render(){return g`
                    <${et.assign({text:"Text here",bold:!0})}></${et}>
                `}}),e({title:"Dynamic",render({controls:t}){return g`
                    <${et.assign({text:"Text here",bold:t.bolded})}></${et}>
                `}}),e({title:"Resized",styles:A`
                ${et} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return g`
                    <${et.assign({text:"Not Bolded",bold:!1})}></${et}>
                    <${et.assign({text:"Bolded",bold:!0})}></${et}>
                `}}),e({title:"Alignment",styles:A`
                ${et} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return g`
                    <${et.assign({text:"Not Bolded",bold:!1})}></${et}>
                    <${et.assign({text:"Bolded",bold:!0})}></${et}>
                `}}),e({title:"Stylized",styles:A`
                ${et} {
                    text-decoration: underline;
                }
            `,render(){return g`
                    <${et.assign({text:"Not Bolded",bold:!1})}></${et}>
                    <${et.assign({text:"Bolded",bold:!0})}></${et}>
                `}})}}),xP=Ce({parent:it,title:Ge.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:H.Color,initValue:""},"Secondary color":{controlType:H.Color,initValue:""},"Hover color":{controlType:H.Color,initValue:""},"Active color":{controlType:H.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:o}){const i=n??A``;e({title:r,styles:i,render({controls:s}){const a=A`
                        ${M["vira-form-accent-primary-color"].name}: ${rt(s["Primary color"]||"inherit")};
                        ${M["vira-form-background-color"].name}: ${rt(s["Secondary color"]||"inherit")};
                        ${M["vira-form-accent-primary-hover-color"].name}: ${rt(s["Hover color"]||"inherit")};
                        ${M["vira-form-accent-primary-active-color"].name}: ${rt(s["Active color"]||"inherit")};
                    `;return g`
                        <${Ge.assign({text:"hello",...o})}
                            style=${a}
                        ></${Ge}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:ba}}),t({title:"with expanding icon",inputs:{icon:ba,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:Zn.Outline}}),t({title:"ghost",inputs:{buttonStyle:Zn.Ghost}}),t({title:"danger",inputs:{buttonStyle:Zn.Danger}}),t({title:"danger outline",inputs:{buttonStyle:Zn.DangerOutline}}),t({title:"only icon",inputs:{icon:ba,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:A`
                ${Ge} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:A`
                ${Ge} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:A`
                :host {
                    ${M["vira-form-accent-primary-color"].name}: pink;
                    ${M["vira-form-background-color"].name}: purple;
                    ${M["vira-form-accent-primary-hover-color"].name}: orange;
                    ${M["vira-form-accent-primary-active-color"].name}: yellow;
                }
            `,render(){return g`
                    <${Ge.assign({text:"hello"})}></${Ge}>
                `}})}}),AP=[{title:"basic"},{title:"success",inputs:{cardState:bf.Success}},{title:"error",inputs:{cardState:bf.Error}},{title:"long",content:g`
            <p
                style=${A`
                    ${bc}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],EP=Ce({parent:it,title:dd.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){AP.forEach(t=>{e({title:t.title,render(){return g`
                        <${dd.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${dd}>
                    `}})})}}),CP=Ce({parent:it,title:ie.tagName,controls:{Checked:{controlType:H.Checkbox,initValue:!1},Disabled:{controlType:H.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${ie.assign({value:t.checked})}
                        ${W(ie.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ie}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${ie.assign({value:t.checked})}
                        ${W(ie.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ie}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${ie.assign({value:t.checked,hasError:!0})}
                        ${W(ie.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ie}>
                `}}),e({title:"disabled unchecked",render(){return g`
                    <${ie.assign({value:!1,disabled:!0})}></${ie}>
                `}}),e({title:"disabled checked",render(){return g`
                    <${ie.assign({value:!0,disabled:!0})}></${ie}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return g`
                    <${ie.assign({value:t.Checked,disabled:t.Disabled})}></${ie}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return g`
                    <${ie.assign({value:!0})}></${ie}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${ie.assign({value:t.checked,label:"label goes here"})}
                        ${W(ie.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ie}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${ie.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${W(ie.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ie}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:A`
                ${ie} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${ie.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${W(ie.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ie}>
                `}}),e({title:"fill when checked",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${ie.assign({value:t.checked,fillWhenChecked:!0})}
                        ${W(ie.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ie}>
                `}}),e({title:"fill when unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${ie.assign({value:t.checked,fillWhenUnchecked:!0})}
                        ${W(ie.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ie}>
                `}}),e({title:"both fills",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${ie.assign({value:t.checked,fillWhenUnchecked:!0,fillWhenChecked:!0})}
                        ${W(ie.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ie}>
                `}})}}),FP=Ce({title:Bn.tagName,parent:it,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:A`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>g`
                        <${Bn.assign({expanded:!!r.expandedStates[o]})}
                            ${W(Bn.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${Bn.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${W("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${gr(!!r.showMoreStates[o],g`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${Bn}>
                    `)}}),e({title:"wider examples",styles:A`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>g`
                        <${Bn.assign({expanded:!!r.expandedStates[o]})}
                            ${W(Bn.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${Bn.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${W("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${gr(!!r.showMoreStates[o],g`
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
                        </${Bn}>
                    `)}})}}),$a=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],SP=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...$a,{id:42,label:g`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...$a,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:A`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:A`
            ${ia} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Kr}}],TP=Ce({title:ia.tagName,parent:it,controls:{Selected:{controlType:H.Dropdown,initValue:"",options:["",...$a.map(e=>e.label)]},Prefix:{controlType:H.Text,initValue:""},"Force State":{controlType:H.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:H.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:H.Dropdown,initValue:"",options:["",...Object.keys(mf)]},Disabled:{controlType:H.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:H.Text,initValue:"Select something"}},defineExamples({defineExample:e}){SP.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:o}){const i={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:o.Placeholder,options:t.inputs?.options||$a,selected:o.Selected?[$a.find(s=>s.label===o.Selected)?.id].filter(T.isTruthy):r.selected,selectionPrefix:o.Prefix||t.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":t.inputs?.isDisabled,icon:o.Icon?mf[o.Icon]:t.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return g`
                        <${ia.assign(i)}
                            ${W(ia.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${ia}>
                    `}})})}}),MP=Ce({parent:it,title:ni.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${ni}>Error Content</${ni}>
                `}})}}),bd=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],PP=Ce({parent:it,title:lr.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0,quantity:0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:ye.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:ye.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:ye.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:ye.Email,label:"Email Address",value:t.email},password:{type:ye.NewPassword,label:"Password",value:t.password},userRole:{type:ye.Select,label:"Role",options:bd,value:t.userRole,placeholder:"placeholder"},quantity:{type:ye.Number,label:"Quantity",value:t.quantity,min:0,max:100,step:2,placeholder:"Enter quantity"},disabledField:{type:ye.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:ye.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return g`
                    <${lr.assign({fields:n})}
                        ${W(lr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${Ge.assign({text:"Cancel",buttonStyle:Zn.Outline})}></${Ge}>
                            <${Ge.assign({text:"Submit"})}></${Ge}>
                        </div>
                    </${lr}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:ye.Text,label:"First Name",value:t.firstName},lastName:{type:ye.Text,label:"Last Name",value:t.lastName}};return g`
                    <${lr.assign({fields:n})}
                        ${W(lr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <${Ze.assign({value:"",label:"More stuff"})}></${Ze}>
                        <div class="buttons">
                            <${Ge.assign({text:"Cancel",buttonStyle:Zn.Outline})}></${Ge}>
                            <${Ge.assign({text:"Submit"})}></${Ge}>
                        </div>
                    </${lr}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${lr} {
                    width: 400px;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:ye.Text,label:"First Name",value:t.firstName},lastName:{type:ye.Text,label:"Last Name",value:t.lastName},subscribe:{type:ye.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:ye.Email,label:"Email Address",value:t.email},password:{type:ye.NewPassword,label:"Password",value:t.password},userRole:{type:ye.Select,label:"Role",options:bd,value:t.userRole}};return g`
                    <${lr.assign({fields:n})}
                        ${W(lr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${Ge.assign({text:"Cancel",buttonStyle:Zn.Outline})}></${Ge}>
                            <${Ge.assign({text:"Submit"})}></${Ge}>
                        </div>
                    </${lr}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:ye.Text,label:"First Name",value:t.firstName},lastName:{type:ye.Text,label:"Last Name",value:t.lastName},subscribe:{type:ye.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:ye.Email,label:"Email Address",value:t.email},password:{type:ye.NewPassword,label:"Password",value:t.password},userRole:{type:ye.Select,label:"Role",options:bd,value:t.userRole}};return g`
                    <${lr.assign({fields:n,isDisabled:!0})}
                        ${W(lr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${Ge.assign({text:"Cancel",buttonStyle:Zn.Outline})}></${Ge}>
                            <${Ge.assign({text:"Submit"})}></${Ge}>
                        </div>
                    </${lr}>
                `}})}}),NP=Ce({title:z.tagName,parent:it,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${z.assign({icon:Kr})}></${z}>
                `}}),e({title:"using createColoredIcon",render(){return g`
                    <${z.assign({icon:cp(Kr,{"vira-icon-stroke-color":"red"})})}></${z}>
                `}}),e({title:"fit container",styles:A`
                ${z} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return g`
                    <${z.assign({icon:cp(Kr,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${z}>
                `}})}}),IP=Ce({title:so.tagName,parent:it,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:A`
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
                        <${z.assign({icon:fi,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${z}>
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
                        <${z.assign({icon:El,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${z}>
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
                        <${z.assign({icon:fi,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${z}>
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
                        <${z.assign({icon:El,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${z}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:A`
                    ${so} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||A``}
                    }

                    ${r.allowReload?A`
                              ${so} {
                                  cursor: pointer;
                              }

                              ${so}:hover {
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
                        <${so.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${W("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${ei()}`})})}
                        >
                            ${r.loadingSlot?g`
                                      <div class="slot-wrapper" slot=${so.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:Q}${r.errorSlot?g`
                                      <div class="slot-wrapper" slot=${so.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:Q}
                        </${so}>
                    `}})})}}),OP=Ce({title:Ze.tagName,parent:it,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:H.Color,initValue:M["vira-form-foreground-color"].default},"Placeholder color":{controlType:H.Color,initValue:M["vira-form-placeholder-color"].default},"Border color":{controlType:H.Color,initValue:M["vira-form-border-color"].default},"Focus color":{controlType:H.Color,initValue:M["vira-form-focus-outline-color"].default},"Selection color":{controlType:H.Color,initValue:M["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:o,inputs:i}){e({title:o,styles:A`
                    ${n||A``}
                `,state(){return{value:i.value}},render({state:s,updateState:a,controls:u}){const l={[String(M["vira-form-foreground-color"].name)]:u["Text color"],[String(M["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(M["vira-form-border-color"].name)]:u["Border color"],[String(M["vira-form-focus-outline-color"].name)]:u["Focus color"],[String(M["vira-form-text-selection-color"].name)]:u["Selection color"]},c=Gt(l,(m,h)=>h||"inherit"),d=Object.entries(c).map(([m,h])=>[m,h].join(": ")+";").join(`
`);return g`
                        <${Ze.assign({...i,value:s.value})}
                            style=${d}
                            ${W(Ze.events.valueChange,m=>{a({value:m.detail}),console.info("changed:",m.detail)})}
                        ></${Ze}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Kr}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:A`
                    ${Ze} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Kr}},{title:"taller height",styles:A`
                    ${Ze} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Kr}},{title:"shorter height",styles:A`
                    ${Ze} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Kr}},{title:"max width",styles:A`
                    ${Ze} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:A`
                    ${Ze} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Xo.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Xo.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:A`
                    ${Ze} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:A`
                    ${Ze} {
                        width: unset;
                    }
                `}].forEach(t)}}),BP=Ce({title:ya.tagName,parent:it,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:H.Color,initValue:""},"Hover color":{controlType:H.Color,initValue:M["vira-form-accent-primary-color"].default},"Active color":{controlType:H.Color,initValue:M["vira-form-accent-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:o}){const i=A`
                        ${M["vira-form-accent-primary-color"].name}: ${rt(o["Hover color"]||"inherit")};
                        ${M["vira-form-accent-primary-active-color"].name}: ${rt(o["Active color"]||"inherit")};
                        color: ${rt(o["CSS Color"]||"inherit")};
                    `;return g`
                        <${ya.assign(n)} style=${i}>My Link</${ya}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),RP=Ce({title:ao.tagName,parent:it,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:r}){return g`
                    <button
                        ${W("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${ao.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${W(ao.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${ao}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:A`
                ${ao} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${M["vira-form-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:r}){return g`
                    <button
                        ${W("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${ao.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${W(ao.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${ao}>
                `}})}}),aa=A`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,yd=g`
    <${En.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${En.slotNames.large}>Large</div>
        <div class="small" slot=${En.slotNames.small}>Small</div>
    </${En}>
`,Wi={max:120,min:25,default:80},Np=qe()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":Aa(Wi.default)},state(){return{intervalId:void 0,increment:1}},styles:({cssVars:e})=>A`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,init({state:e,updateState:t,host:r,cssVars:n}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{const o=Dy.isNumber(E5(kD({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||Wi.default;(o>=Wi.max||o<=Wi.min)&&t({increment:e.increment*-1}),ss({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:Aa(o+e.increment)})},10)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render(){return g`
            <slot></slot>
        `}}),Ip=qe()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":Aa(Wi.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:A`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${aa}

        .large {
            white-space: nowrap;
        }
    `,init({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{t({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render({state:e}){return g`
            <${En.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${En.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${En.slotNames.small}>Small</div>
            </${En}>
        `}}),LP=Ce({title:En.tagName,parent:it,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:A`
                ${aa}
            `,render(){return yd}}),e({title:"overflowing",styles:A`
                ${aa}

                ${En} {
                    max-width: 50px;
                }
            `,render(){return yd}}),e({title:"dynamic size",styles:A`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${aa}

                .wrapper {
                    width: ${Wi.max+10}px;
                }
            `,render(){return g`
                    <div class="wrapper">
                        <${Np}>
                            ${yd}
                        </${Np}>
                    </div>
                `}}),e({title:"dynamic slot",styles:A`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${aa}
            `,render(){return g`
                    <${Ip}></${Ip}>
                `}})}}),jP=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:A`
            :host {
                ${M["vira-form-filled-background-color"].name}: red;
                ${M["vira-form-accent-primary-color"].name}: black;
                ${Un.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Un} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:A`
            :host {
                ${M["vira-form-filled-background-color"].name}: red;
                ${M["vira-form-accent-primary-color"].name}: yellow;
                ${Un.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Un} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:A`
            :host {
                ${M["vira-form-filled-background-color"].name}: red;
                ${M["vira-form-accent-primary-color"].name}: yellow;
                ${Un.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Un} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],UP=Ce({parent:it,title:Un.tagName,defineExamples({defineExample:e}){jP.forEach(t=>{e({title:t.title,styles:A`
                    ${t.styles||A``}
                `,render(){return g`
                        <${Un.assign({value:50,...t.inputs})}></${Un}>
                    `}})})}}),Ct=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],_P=[{title:"basic",inputs:{options:Ct}},{title:"with really long option",inputs:{options:[...Ct,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:Ct,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:Ct,disabled:!0}},{title:"error",inputs:{options:Ct,hasError:!0}},{title:"with icon",inputs:{options:Ct,icon:Kr}},{title:"custom width",inputs:{options:Ct},styles:A`
            ${ut} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:Ct,icon:Kr},styles:A`
            ${ut} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:Ct,icon:Kr},styles:A`
            ${ut} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:Ct,label:"Pick an option"}},{title:"with long label",inputs:{options:Ct,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:Ct,label:"Pick a really really really really long option"},styles:A`
            ${ut} {
                width: unset;
            }
        `}],VP=Ce({parent:it,title:ut.tagName,defineExamples({defineExample:e}){_P.forEach(t=>{e({title:t.title,styles:A`
                    ${t.styles||A``}
                `,state(){return{selected:void 0}},render({state:r,updateState:n}){return g`
                        <${ut.assign({...t.inputs,value:r.selected??t.inputs.value})}
                            ${W(ut.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${ut}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return g`
                    <${ut.assign({options:Ct,value:Ct[0]?.value})}></${ut}>
                `}}),e({title:"force update",render(){return g`
                    <${Op}></${Op}>
                `}})}}),Op=qe()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const r=Ct.findIndex(o=>o.value===t.value),n=ln.isDefined(Ct[(r+1)%Ct.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return g`
            <${ut.assign({options:Ct,value:e.value})}></${ut}>
        `}}),zP=[it,cP,fh,Bw],qP=[DP,xP,EP,CP,FP,TP,MP,PP,NP,IP,OP,BP,hP,yP,pP,RP,LP,vP,wP,UP,VP].sort((e,t)=>e.title.localeCompare(t.title)),WP=[...qP,fP,kP,...dP],KP=[...zP,...WP];Ci()({tagName:"vira-book-app",styles:A`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${gd} {
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
            <${gd.assign({internalRouterConfig:{basePath:ih("vira"),useInternalRouter:!0},pages:KP,themeColor:"#33ccff"})}>
                <h1 slot=${xn.NavHeader}>Vira</h1>
            </${gd}>
        `}});export{Ci as d,g as h};
