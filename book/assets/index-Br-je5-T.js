(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Bt;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(Bt||(Bt={}));function Ef(e,t=r=>r){const r=new Map;return e.filter(n=>{const o=t(n);return r.get(o)?!1:(r.set(o,n),!0)})}class Af{diff(t,r,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const i=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(i,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,u,n,o)}diffWithOptionsObj(t,r,n,o){var i;const s=D=>{if(D=this.postProcess(D,n),o){setTimeout(function(){o(D)},0);return}else return D},a=r.length,u=t.length;let l=1,c=a+u;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));const d=(i=n.timeout)!==null&&i!==void 0?i:1/0,f=Date.now()+d,m=[{oldPos:-1,lastComponent:void 0}];let w=this.extractCommon(m[0],r,t,0,n);if(m[0].oldPos+1>=u&&w+1>=a)return s(this.buildValues(m[0].lastComponent,r,t));let v=-1/0,E=1/0;const k=()=>{for(let D=Math.max(v,-l);D<=Math.min(E,l);D+=2){let M;const O=m[D-1],j=m[D+1];O&&(m[D-1]=void 0);let Z=!1;if(j){const ae=j.oldPos-D;Z=j&&0<=ae&&ae<a}const H=O&&O.oldPos+1<u;if(!Z&&!H){m[D]=void 0;continue}if(!H||Z&&O.oldPos<j.oldPos?M=this.addToPath(j,!0,!1,0,n):M=this.addToPath(O,!1,!0,1,n),w=this.extractCommon(M,r,t,D,n),M.oldPos+1>=u&&w+1>=a)return s(this.buildValues(M.lastComponent,r,t))||!0;m[D]=M,M.oldPos+1>=u&&(E=Math.min(E,D-1)),w+1>=a&&(v=Math.max(v,D+1))}l++};if(o)(function D(){setTimeout(function(){if(l>c||Date.now()>f)return o(void 0);k()||D()},0)})();else for(;l<=c&&Date.now()<=f;){const D=k();if(D)return D}}addToPath(t,r,n,o,i){const s=t.lastComponent;return s&&!i.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+o,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,o,i){const s=r.length,a=n.length;let u=t.oldPos,l=u-o,c=0;for(;l+1<s&&u+1<a&&this.equals(n[u+1],r[l+1],i);)l++,u++,c++,i.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!i.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const o=[];let i;for(;t;)o.push(t),i=t.previousComponent,delete t.previousComponent,t=i;o.reverse();const s=o.length;let a=0,u=0,l=0;for(;a<s;a++){const c=o[a];if(c.removed)c.value=this.join(n.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let d=r.slice(u,u+c.count);d=d.map(function(f,m){const w=n[l+m];return w.length>f.length?w:f}),c.value=this.join(d)}else c.value=this.join(r.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return o}}function $h(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function kh(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function Dd(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function xd(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function Vs(e,t){return Dd(e,t,"")}function hu(e,t){return xd(e,t,"")}function Dh(e,t){return t.slice(0,Xw(e,t))}function Xw(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const o=Array(n);let i=0;o[0]=0;for(let s=1;s<n;s++){for(t[s]==t[i]?o[s]=o[i]:o[s]=i;i>0&&t[s]!=t[i];)i=o[i];t[s]==t[i]&&i++}i=0;for(let s=r;s<e.length;s++){for(;i>0&&e[s]!=t[i];)i=o[i];e[s]==t[i]&&i++}return i}function Ws(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function ao(e){const t=e.match(/^\s*/);return t?t[0]:""}const Hu="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Qw=new RegExp(`[${Hu}]+|\\s+|[^${Hu}]`,"ug");class e2 extends Af{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const a of Array.from(s.segment(t))){const u=a.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(u)?n[n.length-1]+=u:n.push(u)}}else n=t.match(Qw)||[];const o=[];let i=null;return n.forEach(s=>{/\s/.test(s)?i==null?o.push(s):o.push(o.pop()+s):i!=null&&/\s/.test(i)?o[o.length-1]==i?o.push(o.pop()+s):o.push(i+s):o.push(s),i=s}),o}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,o=null,i=null;return t.forEach(s=>{s.added?o=s:s.removed?i=s:((o||i)&&xh(n,i,o,s),n=s,o=null,i=null)}),(o||i)&&xh(n,i,o,null),t}}const t2=new e2;function r2(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?i2(e,t,r):t2.diff(e,t,r)}function xh(e,t,r,n){if(t&&r){const o=ao(t.value),i=Ws(t.value),s=ao(r.value),a=Ws(r.value);if(e){const u=$h(o,s);e.value=xd(e.value,s,u),t.value=Vs(t.value,u),r.value=Vs(r.value,u)}if(n){const u=kh(i,a);n.value=Dd(n.value,a,u),t.value=hu(t.value,u),r.value=hu(r.value,u)}}else if(r){if(e){const o=ao(r.value);r.value=r.value.substring(o.length)}if(n){const o=ao(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=ao(n.value),i=ao(t.value),s=Ws(t.value),a=$h(o,i);t.value=Vs(t.value,a);const u=kh(Vs(o,a),s);t.value=hu(t.value,u),n.value=Dd(n.value,o,u),e.value=xd(e.value,o,o.slice(0,o.length-u.length))}else if(n){const o=ao(n.value),i=Ws(t.value),s=Dh(i,o);t.value=hu(t.value,s)}else if(e){const o=Ws(e.value),i=ao(t.value),s=Dh(o,i);t.value=Vs(t.value,s)}}class n2 extends Af{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Hu}]+|[^\\S\\n\\r]+|[^${Hu}]`,"ug");return t.match(r)||[]}}const o2=new n2;function i2(e,t,r){return o2.diff(e,t,r)}class s2 extends Af{constructor(){super(...arguments),this.tokenize=l2}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const a2=new s2;function u2(e,t,r){return a2.diff(e,t,r)}function l2(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const i=n[o];o%2&&!t.newlineIsToken?r[r.length-1]+=i:r.push(i)}return r}function Eh(e){return Vp(e,new Map)}function Vp(e,t){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const r={};return t.set(e,r),Object.entries(e).sort((n,o)=>n[0].localeCompare(o[0])).forEach(([n,o])=>{const i=Vp(o,t);r[n]=i}),r}else return e}var c2=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,d2=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,f2=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Dc={Space_Separator:c2,ID_Start:d2,ID_Continue:f2},ot={isSpaceSeparator(e){return typeof e=="string"&&Dc.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Dc.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Dc.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let Ed,tr,Un,Ju,Do,un,At,Cf,ca;var m2=function(t,r){Ed=String(t),tr="start",Un=[],Ju=0,Do=1,un=0,At=void 0,Cf=void 0,ca=void 0;do At=h2(),y2[tr]();while(At.type!=="eof");return typeof r=="function"?Ad({"":ca},"",r):ca};function Ad(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const i=String(o),s=Ad(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const i=Ad(n,o,r);i===void 0?delete n[o]:Object.defineProperty(n,o,{value:i,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let ie,re,Qs,Bn,fe;function h2(){for(ie="default",re="",Qs=!1,Bn=1;;){fe=Gn();const e=Wp[ie]();if(e)return e}}function Gn(){if(Ed[Ju])return String.fromCodePoint(Ed.codePointAt(Ju))}function N(){const e=Gn();return e===`
`?(Do++,un=0):e?un+=e.length:un++,e&&(Ju+=e.length),e}const Wp={default(){switch(fe){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":N();return;case"/":N(),ie="comment";return;case void 0:return N(),je("eof")}if(ot.isSpaceSeparator(fe)){N();return}return Wp[tr]()},comment(){switch(fe){case"*":N(),ie="multiLineComment";return;case"/":N(),ie="singleLineComment";return}throw Ue(N())},multiLineComment(){switch(fe){case"*":N(),ie="multiLineCommentAsterisk";return;case void 0:throw Ue(N())}N()},multiLineCommentAsterisk(){switch(fe){case"*":N();return;case"/":N(),ie="default";return;case void 0:throw Ue(N())}N(),ie="multiLineComment"},singleLineComment(){switch(fe){case`
`:case"\r":case"\u2028":case"\u2029":N(),ie="default";return;case void 0:return N(),je("eof")}N()},value(){switch(fe){case"{":case"[":return je("punctuator",N());case"n":return N(),jo("ull"),je("null",null);case"t":return N(),jo("rue"),je("boolean",!0);case"f":return N(),jo("alse"),je("boolean",!1);case"-":case"+":N()==="-"&&(Bn=-1),ie="sign";return;case".":re=N(),ie="decimalPointLeading";return;case"0":re=N(),ie="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":re=N(),ie="decimalInteger";return;case"I":return N(),jo("nfinity"),je("numeric",1/0);case"N":return N(),jo("aN"),je("numeric",NaN);case'"':case"'":Qs=N()==='"',re="",ie="string";return}throw Ue(N())},identifierNameStartEscape(){if(fe!=="u")throw Ue(N());N();const e=Cd();switch(e){case"$":case"_":break;default:if(!ot.isIdStartChar(e))throw Ah();break}re+=e,ie="identifierName"},identifierName(){switch(fe){case"$":case"_":case"‌":case"‍":re+=N();return;case"\\":N(),ie="identifierNameEscape";return}if(ot.isIdContinueChar(fe)){re+=N();return}return je("identifier",re)},identifierNameEscape(){if(fe!=="u")throw Ue(N());N();const e=Cd();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!ot.isIdContinueChar(e))throw Ah();break}re+=e,ie="identifierName"},sign(){switch(fe){case".":re=N(),ie="decimalPointLeading";return;case"0":re=N(),ie="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":re=N(),ie="decimalInteger";return;case"I":return N(),jo("nfinity"),je("numeric",Bn*(1/0));case"N":return N(),jo("aN"),je("numeric",NaN)}throw Ue(N())},zero(){switch(fe){case".":re+=N(),ie="decimalPoint";return;case"e":case"E":re+=N(),ie="decimalExponent";return;case"x":case"X":re+=N(),ie="hexadecimal";return}return je("numeric",Bn*0)},decimalInteger(){switch(fe){case".":re+=N(),ie="decimalPoint";return;case"e":case"E":re+=N(),ie="decimalExponent";return}if(ot.isDigit(fe)){re+=N();return}return je("numeric",Bn*Number(re))},decimalPointLeading(){if(ot.isDigit(fe)){re+=N(),ie="decimalFraction";return}throw Ue(N())},decimalPoint(){switch(fe){case"e":case"E":re+=N(),ie="decimalExponent";return}if(ot.isDigit(fe)){re+=N(),ie="decimalFraction";return}return je("numeric",Bn*Number(re))},decimalFraction(){switch(fe){case"e":case"E":re+=N(),ie="decimalExponent";return}if(ot.isDigit(fe)){re+=N();return}return je("numeric",Bn*Number(re))},decimalExponent(){switch(fe){case"+":case"-":re+=N(),ie="decimalExponentSign";return}if(ot.isDigit(fe)){re+=N(),ie="decimalExponentInteger";return}throw Ue(N())},decimalExponentSign(){if(ot.isDigit(fe)){re+=N(),ie="decimalExponentInteger";return}throw Ue(N())},decimalExponentInteger(){if(ot.isDigit(fe)){re+=N();return}return je("numeric",Bn*Number(re))},hexadecimal(){if(ot.isHexDigit(fe)){re+=N(),ie="hexadecimalInteger";return}throw Ue(N())},hexadecimalInteger(){if(ot.isHexDigit(fe)){re+=N();return}return je("numeric",Bn*Number(re))},string(){switch(fe){case"\\":N(),re+=g2();return;case'"':if(Qs)return N(),je("string",re);re+=N();return;case"'":if(!Qs)return N(),je("string",re);re+=N();return;case`
`:case"\r":throw Ue(N());case"\u2028":case"\u2029":b2(fe);break;case void 0:throw Ue(N())}re+=N()},start(){switch(fe){case"{":case"[":return je("punctuator",N())}ie="value"},beforePropertyName(){switch(fe){case"$":case"_":re=N(),ie="identifierName";return;case"\\":N(),ie="identifierNameStartEscape";return;case"}":return je("punctuator",N());case'"':case"'":Qs=N()==='"',ie="string";return}if(ot.isIdStartChar(fe)){re+=N(),ie="identifierName";return}throw Ue(N())},afterPropertyName(){if(fe===":")return je("punctuator",N());throw Ue(N())},beforePropertyValue(){ie="value"},afterPropertyValue(){switch(fe){case",":case"}":return je("punctuator",N())}throw Ue(N())},beforeArrayValue(){if(fe==="]")return je("punctuator",N());ie="value"},afterArrayValue(){switch(fe){case",":case"]":return je("punctuator",N())}throw Ue(N())},end(){throw Ue(N())}};function je(e,t){return{type:e,value:t,line:Do,column:un}}function jo(e){for(const t of e){if(Gn()!==t)throw Ue(N());N()}}function g2(){switch(Gn()){case"b":return N(),"\b";case"f":return N(),"\f";case"n":return N(),`
`;case"r":return N(),"\r";case"t":return N(),"	";case"v":return N(),"\v";case"0":if(N(),ot.isDigit(Gn()))throw Ue(N());return"\0";case"x":return N(),p2();case"u":return N(),Cd();case`
`:case"\u2028":case"\u2029":return N(),"";case"\r":return N(),Gn()===`
`&&N(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Ue(N());case void 0:throw Ue(N())}return N()}function p2(){let e="",t=Gn();if(!ot.isHexDigit(t)||(e+=N(),t=Gn(),!ot.isHexDigit(t)))throw Ue(N());return e+=N(),String.fromCodePoint(parseInt(e,16))}function Cd(){let e="",t=4;for(;t-- >0;){const r=Gn();if(!ot.isHexDigit(r))throw Ue(N());e+=N()}return String.fromCodePoint(parseInt(e,16))}const y2={start(){if(At.type==="eof")throw Uo();xc()},beforePropertyName(){switch(At.type){case"identifier":case"string":Cf=At.value,tr="afterPropertyName";return;case"punctuator":gu();return;case"eof":throw Uo()}},afterPropertyName(){if(At.type==="eof")throw Uo();tr="beforePropertyValue"},beforePropertyValue(){if(At.type==="eof")throw Uo();xc()},beforeArrayValue(){if(At.type==="eof")throw Uo();if(At.type==="punctuator"&&At.value==="]"){gu();return}xc()},afterPropertyValue(){if(At.type==="eof")throw Uo();switch(At.value){case",":tr="beforePropertyName";return;case"}":gu()}},afterArrayValue(){if(At.type==="eof")throw Uo();switch(At.value){case",":tr="beforeArrayValue";return;case"]":gu()}},end(){}};function xc(){let e;switch(At.type){case"punctuator":switch(At.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=At.value;break}if(ca===void 0)ca=e;else{const t=Un[Un.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Cf,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Un.push(e),Array.isArray(e)?tr="beforeArrayValue":tr="beforePropertyName";else{const t=Un[Un.length-1];t==null?tr="end":Array.isArray(t)?tr="afterArrayValue":tr="afterPropertyValue"}}function gu(){Un.pop();const e=Un[Un.length-1];e==null?tr="end":Array.isArray(e)?tr="afterArrayValue":tr="afterPropertyValue"}function Ue(e){return Yu(e===void 0?`JSON5: invalid end of input at ${Do}:${un}`:`JSON5: invalid character '${zp(e)}' at ${Do}:${un}`)}function Uo(){return Yu(`JSON5: invalid end of input at ${Do}:${un}`)}function Ah(){return un-=5,Yu(`JSON5: invalid identifier character at ${Do}:${un}`)}function b2(e){console.warn(`JSON5: '${zp(e)}' in strings is not valid ECMAScript; consider escaping`)}function zp(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Yu(e){const t=new SyntaxError(e);return t.lineNumber=Do,t.columnNumber=un,t}var v2=function(t,r,n){const o=[];let i="",s,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const v of r){let E;typeof v=="string"?E=v:(typeof v=="number"||v instanceof String||v instanceof Number)&&(E=String(v)),E!==void 0&&s.indexOf(E)<0&&s.push(E)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c(v,E){let k=E[v];switch(k!=null&&(typeof k.toJSON5=="function"?k=k.toJSON5(v):typeof k.toJSON=="function"&&(k=k.toJSON(v))),a&&(k=a.call(E,v,k)),k instanceof Number?k=Number(k):k instanceof String?k=String(k):k instanceof Boolean&&(k=k.valueOf()),k){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof k=="string")return d(k);if(typeof k=="number")return String(k);if(typeof k=="object")return Array.isArray(k)?w(k):f(k)}function d(v){const E={"'":.1,'"':.2},k={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let D="";for(let O=0;O<v.length;O++){const j=v[O];switch(j){case"'":case'"':E[j]++,D+=j;continue;case"\0":if(ot.isDigit(v[O+1])){D+="\\x00";continue}}if(k[j]){D+=k[j];continue}if(j<" "){let Z=j.charCodeAt(0).toString(16);D+="\\x"+("00"+Z).substring(Z.length);continue}D+=j}const M=l||Object.keys(E).reduce((O,j)=>E[O]<E[j]?O:j);return D=D.replace(new RegExp(M,"g"),k[M]),M+D+M}function f(v){if(o.indexOf(v)>=0)throw TypeError("Converting circular structure to JSON5");o.push(v);let E=i;i=i+u;let k=s||Object.keys(v),D=[];for(const O of k){const j=c(O,v);if(j!==void 0){let Z=m(O)+":";u!==""&&(Z+=" "),Z+=j,D.push(Z)}}let M;if(D.length===0)M="{}";else{let O;if(u==="")O=D.join(","),M="{"+O+"}";else{let j=`,
`+i;O=D.join(j),M=`{
`+i+O+`,
`+E+"}"}}return o.pop(),i=E,M}function m(v){if(v.length===0)return d(v);const E=String.fromCodePoint(v.codePointAt(0));if(!ot.isIdStartChar(E))return d(v);for(let k=E.length;k<v.length;k++)if(!ot.isIdContinueChar(String.fromCodePoint(v.codePointAt(k))))return d(v);return v}function w(v){if(o.indexOf(v)>=0)throw TypeError("Converting circular structure to JSON5");o.push(v);let E=i;i=i+u;let k=[];for(let M=0;M<v.length;M++){const O=c(String(M),v);k.push(O!==void 0?O:"null")}let D;if(k.length===0)D="[]";else if(u==="")D="["+k.join(",")+"]";else{let M=`,
`+i,O=k.join(M);D=`[
`+i+O+`,
`+E+"]"}return o.pop(),i=E,D}};const w2={parse:m2,stringify:v2};var $2=w2;const qp="__@@augment-vir-undefined-sentinel@@__",k2=new RegExp(`['"]${qp}['"]`);function y(e,t){if(typeof e=="string")return e;try{return $2.stringify(e,(n,o)=>o===void 0?qp:typeof o=="bigint"?Number(o):o,t||void 0).split(k2).join("undefined")}catch{return String(e)}}var D2=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var ln;(function(e){e.Node="node",e.Web="web"})(ln||(ln={}));function x2(){return D2?ln.Node:ln.Web}const Kp=x2();function Ff(e){return Kp===e}function Gp(e){return e[Kp]()}function E2(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",o=n?u2:r2,i=[r?"":`
`,y(t&&typeof t=="object"&&!Array.isArray(t)?Eh(t):t,4),`
`].join(""),s=[r?"":`
`,y(e&&typeof e=="object"&&!Array.isArray(e)?Eh(e):e,4),`
`].join(""),a=A2(n,o(i,s)),u=Ff(ln.Node);return[[u?zn.Green:""," +added (unexpected, added in actual)",u?zn.Red:""," -missing (expected, missing from actual)",u?zn.Reset:""].join(""),r?`

`:`
`,a].join("")}var zn;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(zn||(zn={}));var Xu;(function(e){e.Added="+",e.Removed="-"})(Xu||(Xu={}));function A2(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(o=>Ch(o,n)).join(`
`)).join(""):t.map(n=>Ch(void 0,n)).join("")}function Ch(e,t){if(e!=null&&!e)return"";const r=Ff(ln.Node),n=t.added?Xu.Added:t.removed?Xu.Removed:e==null?"":" ",o=t.added?zn.Green:t.removed?zn.Red:zn.Reset;return[r?o:"",n,e??t.value,zn.Reset].join("")}function ze(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function C2(e){return ze(e).filter(t=>isNaN(Number(t)))}function Vr(e){return C2(e).map(r=>e[r])}const F2=[".",":",";",",","?","!"],S2=new RegExp(`[${F2.join("")}]+$`);function Fh(e){return e.replace(S2,"")}function Tt(e){return e==null||e===""?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):y(e)}function Ds(...e){const t=e.map(i=>Tt(i)).filter(i=>!!Fh(i)),r=t[t.length-1]?.endsWith("."),n=t.map(i=>Fh(Tt(i)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function rt(e){return e instanceof Error?e:new Error(Tt(e))}function Tl(e,t){const r=rt(e),n=Ds(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var F;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(F||(F={}));var _;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(_||(_={}));_.ClientError,_.ServerError;F.Continue+"",_.Information,F.SwitchingProtocols+"",_.Information,F.Processing+"",_.Information,F.EarlyHints+"",_.Information,F.Ok+"",_.Success,F.Created+"",_.Success,F.Accepted+"",_.Success,F.NonAuthoritativeInformation+"",_.Success,F.NoContent+"",_.Success,F.ResetContent+"",_.Success,F.PartialContent+"",_.Success,F.MultiStatus+"",_.Success,F.AlreadyReported+"",_.Success,F.ImUsed+"",_.Success,F.MultipleChoices+"",_.Redirect,F.MovedPermanently+"",_.Redirect,F.Found+"",_.Redirect,F.SeeOther+"",_.Redirect,F.NotModified+"",_.Redirect,F.UseProxy+"",_.Redirect,F.Unused+"",_.Redirect,F.TemporaryRedirect+"",_.Redirect,F.PermanentRedirect+"",_.Redirect,F.BadRequest+"",_.ClientError,F.Unauthorized+"",_.ClientError,F.PaymentRequired+"",_.ClientError,F.Forbidden+"",_.ClientError,F.NotFound+"",_.ClientError,F.MethodNotAllowed+"",_.ClientError,F.NotAcceptable+"",_.ClientError,F.ProxyAuthenticationRequired+"",_.ClientError,F.RequestTimeout+"",_.ClientError,F.Conflict+"",_.ClientError,F.Gone+"",_.ClientError,F.LengthRequired+"",_.ClientError,F.PreconditionFailed+"",_.ClientError,F.PayloadTooLarge+"",_.ClientError,F.UriTooLong+"",_.ClientError,F.UnsupportedMediaType+"",_.ClientError,F.RangeNotSatisfiable+"",_.ClientError,F.ExpectationFailed+"",_.ClientError,F.ImATeapot+"",_.ClientError,F.MisdirectedRequest+"",_.ClientError,F.UnprocessableContent+"",_.ClientError,F.Locked+"",_.ClientError,F.FailedDependency+"",_.ClientError,F.TooEarly+"",_.ClientError,F.UpgradeRequired+"",_.ClientError,F.PreconditionRequired+"",_.ClientError,F.TooManyRequests+"",_.ClientError,F.RequestHeaderFieldsTooLarge+"",_.ClientError,F.UnavailableForLegalReasons+"",_.ClientError,F.InternalServerError+"",_.ServerError,F.NotImplemented+"",_.ServerError,F.BadGateway+"",_.ServerError,F.ServiceUnavailable+"",_.ServerError,F.GatewayTimeout+"",_.ServerError,F.HttpVersionNotSupported+"",_.ServerError,F.VariantAlsoNegotiates+"",_.ServerError,F.InsufficientStorage+"",_.ServerError,F.LoopDetected+"",_.ServerError,F.NotExtended+"",_.ServerError,F.NetworkAuthenticationRequired+"",_.ServerError;const Lu={[_.Information]:[F.Continue,F.SwitchingProtocols,F.Processing,F.EarlyHints],[_.Success]:[F.Ok,F.Created,F.Accepted,F.NonAuthoritativeInformation,F.NoContent,F.ResetContent,F.PartialContent,F.MultiStatus,F.AlreadyReported,F.ImUsed],[_.Redirect]:[F.MultipleChoices,F.MovedPermanently,F.Found,F.SeeOther,F.NotModified,F.UseProxy,F.Unused,F.TemporaryRedirect,F.PermanentRedirect],[_.ClientError]:[F.BadRequest,F.Unauthorized,F.PaymentRequired,F.Forbidden,F.NotFound,F.MethodNotAllowed,F.NotAcceptable,F.ProxyAuthenticationRequired,F.RequestTimeout,F.Conflict,F.Gone,F.LengthRequired,F.PreconditionFailed,F.PayloadTooLarge,F.UriTooLong,F.UnsupportedMediaType,F.RangeNotSatisfiable,F.ExpectationFailed,F.ImATeapot,F.MisdirectedRequest,F.UnprocessableContent,F.Locked,F.FailedDependency,F.TooEarly,F.UpgradeRequired,F.PreconditionRequired,F.TooManyRequests,F.RequestHeaderFieldsTooLarge,F.UnavailableForLegalReasons],[_.ServerError]:[F.InternalServerError,F.NotImplemented,F.BadGateway,F.ServiceUnavailable,F.GatewayTimeout,F.HttpVersionNotSupported,F.VariantAlsoNegotiates,F.InsufficientStorage,F.LoopDetected,F.NotExtended,F.NetworkAuthenticationRequired]};function Sf({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Qu{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(rt(n))}})}}class mi extends Error{}class T2 extends mi{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class M2 extends mi{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class N2 extends mi{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class ji extends mi{}class Zp extends mi{constructor(t){super(`Invalid unit ${t}`)}}class Wt extends mi{}class uo extends mi{constructor(){super("Zone is an abstract class")}}const L="numeric",cn="short",Er="long",el={year:L,month:L,day:L},Hp={year:L,month:cn,day:L},P2={year:L,month:cn,day:L,weekday:cn},Jp={year:L,month:Er,day:L},Yp={year:L,month:Er,day:L,weekday:Er},Xp={hour:L,minute:L},Qp={hour:L,minute:L,second:L},ey={hour:L,minute:L,second:L,timeZoneName:cn},ty={hour:L,minute:L,second:L,timeZoneName:Er},ry={hour:L,minute:L,hourCycle:"h23"},ny={hour:L,minute:L,second:L,hourCycle:"h23"},oy={hour:L,minute:L,second:L,hourCycle:"h23",timeZoneName:cn},iy={hour:L,minute:L,second:L,hourCycle:"h23",timeZoneName:Er},sy={year:L,month:L,day:L,hour:L,minute:L},ay={year:L,month:L,day:L,hour:L,minute:L,second:L},uy={year:L,month:cn,day:L,hour:L,minute:L},ly={year:L,month:cn,day:L,hour:L,minute:L,second:L},I2={year:L,month:cn,day:L,weekday:cn,hour:L,minute:L},cy={year:L,month:Er,day:L,hour:L,minute:L,timeZoneName:cn},dy={year:L,month:Er,day:L,hour:L,minute:L,second:L,timeZoneName:cn},fy={year:L,month:Er,day:L,weekday:Er,hour:L,minute:L,timeZoneName:Er},my={year:L,month:Er,day:L,weekday:Er,hour:L,minute:L,second:L,timeZoneName:Er};class Wa{get type(){throw new uo}get name(){throw new uo}get ianaName(){return this.name}get isUniversal(){throw new uo}offsetName(t,r){throw new uo}formatOffset(t,r){throw new uo}offset(t){throw new uo}equals(t){throw new uo}get isValid(){throw new uo}}let Ec=null;class Ml extends Wa{static get instance(){return Ec===null&&(Ec=new Ml),Ec}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return xy(t,r,n)}formatOffset(t,r){return da(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Fd=new Map;function O2(e){let t=Fd.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Fd.set(e,t)),t}const B2={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function R2(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,s,a,u,l,c]=n;return[s,o,i,a,u,l,c]}function L2(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:s}=r[o],a=B2[i];i==="era"?n[a]=s:X(a)||(n[a]=parseInt(s,10))}return n}const Ac=new Map;class Jn extends Wa{static create(t){let r=Ac.get(t);return r===void 0&&Ac.set(t,r=new Jn(t)),r}static resetCache(){Ac.clear(),Fd.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Jn.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return xy(t,r,n,this.name)}formatOffset(t,r){return da(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=O2(this.name);let[o,i,s,a,u,l,c]=n.formatToParts?L2(n,r):R2(n,r);a==="BC"&&(o=-Math.abs(o)+1);const f=Pl({year:o,month:i,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let m=+r;const w=m%1e3;return m-=w>=0?w:1e3+w,(f-m)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Sh={};function j2(e,t={}){const r=JSON.stringify([e,t]);let n=Sh[r];return n||(n=new Intl.ListFormat(e,t),Sh[r]=n),n}const Sd=new Map;function Td(e,t={}){const r=JSON.stringify([e,t]);let n=Sd.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),Sd.set(r,n)),n}const Md=new Map;function U2(e,t={}){const r=JSON.stringify([e,t]);let n=Md.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),Md.set(r,n)),n}const Nd=new Map;function _2(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=Nd.get(o);return i===void 0&&(i=new Intl.RelativeTimeFormat(e,t),Nd.set(o,i)),i}let ea=null;function V2(){return ea||(ea=new Intl.DateTimeFormat().resolvedOptions().locale,ea)}const Pd=new Map;function hy(e){let t=Pd.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Pd.set(e,t)),t}const Id=new Map;function W2(e){let t=Id.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...gy,...t}),Id.set(e,t)}return t}function z2(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=Td(e).resolvedOptions(),o=e}catch{const u=e.substring(0,r);n=Td(u).resolvedOptions(),o=u}const{numberingSystem:i,calendar:s}=n;return[o,i,s]}}function q2(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function K2(e){const t=[];for(let r=1;r<=12;r++){const n=Q.utc(2009,r,1);t.push(e(n))}return t}function G2(e){const t=[];for(let r=1;r<=7;r++){const n=Q.utc(2016,11,13+r);t.push(e(n))}return t}function pu(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function Z2(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||hy(e.locale).numberingSystem==="latn"}class H2{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=U2(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):If(t,3);return dt(r,this.padTo)}}}class J2{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Jn.create(a).valid?(o=a,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=Td(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Y2{constructor(t,r,n){this.opts={style:"long",...n},!r&&ky()&&(this.rtf=_2(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):v$(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const gy={firstDay:1,minimalDays:4,weekend:[6,7]};class Fe{static fromOpts(t){return Fe.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,i=!1){const s=t||Ze.defaultLocale,a=s||(i?"en-US":V2()),u=r||Ze.defaultNumberingSystem,l=n||Ze.defaultOutputCalendar,c=Bd(o)||Ze.defaultWeekSettings;return new Fe(a,u,l,c,s)}static resetCache(){ea=null,Sd.clear(),Md.clear(),Nd.clear(),Pd.clear(),Id.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return Fe.create(t,r,n,o)}constructor(t,r,n,o,i){const[s,a,u]=z2(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=o,this.intl=q2(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Z2(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Fe.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Bd(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return pu(this,t,Cy,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const o=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";if(!this.monthsCache[i][t]){const s=n?a=>this.dtFormatter(a,o).format():a=>this.extract(a,o,"month");this.monthsCache[i][t]=K2(s)}return this.monthsCache[i][t]})}weekdays(t,r=!1){return pu(this,t,Ty,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=G2(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return pu(this,void 0,()=>My,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[Q.utc(2016,11,13,9),Q.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return pu(this,t,Ny,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[Q.utc(-40,1,1),Q.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),s=i.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new H2(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new J2(t,this.intl,r)}relFormatter(t={}){return new Y2(this.intl,this.isEnglish(),t)}listFormatter(t={}){return j2(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||hy(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Dy()?W2(this.locale):gy}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Cc=null;class rr extends Wa{static get utcInstance(){return Cc===null&&(Cc=new rr(0)),Cc}static instance(t){return t===0?rr.utcInstance:new rr(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new rr(Il(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${da(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${da(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return da(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class X2 extends Wa{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function go(e,t){if(X(e)||e===null)return t;if(e instanceof Wa)return e;if(o$(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Ml.instance:r==="utc"||r==="gmt"?rr.utcInstance:rr.parseSpecifier(r)||Jn.create(e)}else return vo(e)?rr.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new X2(e)}const Tf={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Th={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Q2=Tf.hanidec.replace(/[\[|\]]/g,"").split("");function e$(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Tf.hanidec)!==-1)t+=Q2.indexOf(e[r]);else for(const o in Th){const[i,s]=Th[o];n>=i&&n<=s&&(t+=n-i)}}return parseInt(t,10)}else return t}const Od=new Map;function t$(){Od.clear()}function rn({numberingSystem:e},t=""){const r=e||"latn";let n=Od.get(r);n===void 0&&(n=new Map,Od.set(r,n));let o=n.get(t);return o===void 0&&(o=new RegExp(`${Tf[r]}${t}`),n.set(t,o)),o}let Mh=()=>Date.now(),Nh="system",Ph=null,Ih=null,Oh=null,Bh=60,Rh,Lh=null;class Ze{static get now(){return Mh}static set now(t){Mh=t}static set defaultZone(t){Nh=t}static get defaultZone(){return go(Nh,Ml.instance)}static get defaultLocale(){return Ph}static set defaultLocale(t){Ph=t}static get defaultNumberingSystem(){return Ih}static set defaultNumberingSystem(t){Ih=t}static get defaultOutputCalendar(){return Oh}static set defaultOutputCalendar(t){Oh=t}static get defaultWeekSettings(){return Lh}static set defaultWeekSettings(t){Lh=Bd(t)}static get twoDigitCutoffYear(){return Bh}static set twoDigitCutoffYear(t){Bh=t%100}static get throwOnInvalid(){return Rh}static set throwOnInvalid(t){Rh=t}static resetCaches(){Fe.resetCache(),Jn.resetCache(),Q.resetCache(),t$()}}class sn{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const py=[0,31,59,90,120,151,181,212,243,273,304,334],yy=[0,31,60,91,121,152,182,213,244,274,305,335];function qr(e,t){return new sn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Mf(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function by(e,t,r){return r+(za(e)?yy:py)[t-1]}function vy(e,t){const r=za(e)?yy:py,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function Nf(e,t){return(e-t+7)%7+1}function tl(e,t=4,r=1){const{year:n,month:o,day:i}=e,s=by(n,o,i),a=Nf(Mf(n,o,i),r);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=n-1,u=Da(l,t,r)):u>Da(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...Ol(e)}}function jh(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:i}=e,s=Nf(Mf(n,1,t),r),a=Gi(n);let u=o*7+i-s-7+t,l;u<1?(l=n-1,u+=Gi(l)):u>a?(l=n+1,u-=Gi(n)):l=n;const{month:c,day:d}=vy(l,u);return{year:l,month:c,day:d,...Ol(e)}}function Fc(e){const{year:t,month:r,day:n}=e,o=by(t,r,n);return{year:t,ordinal:o,...Ol(e)}}function Uh(e){const{year:t,ordinal:r}=e,{month:n,day:o}=vy(t,r);return{year:t,month:n,day:o,...Ol(e)}}function _h(e,t){if(!X(e.localWeekday)||!X(e.localWeekNumber)||!X(e.localWeekYear)){if(!X(e.weekday)||!X(e.weekNumber)||!X(e.weekYear))throw new ji("Cannot mix locale-based week fields with ISO-based week fields");return X(e.localWeekday)||(e.weekday=e.localWeekday),X(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),X(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function r$(e,t=4,r=1){const n=Nl(e.weekYear),o=Kr(e.weekNumber,1,Da(e.weekYear,t,r)),i=Kr(e.weekday,1,7);return n?o?i?!1:qr("weekday",e.weekday):qr("week",e.weekNumber):qr("weekYear",e.weekYear)}function n$(e){const t=Nl(e.year),r=Kr(e.ordinal,1,Gi(e.year));return t?r?!1:qr("ordinal",e.ordinal):qr("year",e.year)}function wy(e){const t=Nl(e.year),r=Kr(e.month,1,12),n=Kr(e.day,1,rl(e.year,e.month));return t?r?n?!1:qr("day",e.day):qr("month",e.month):qr("year",e.year)}function $y(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=Kr(t,0,23)||t===24&&r===0&&n===0&&o===0,s=Kr(r,0,59),a=Kr(n,0,59),u=Kr(o,0,999);return i?s?a?u?!1:qr("millisecond",o):qr("second",n):qr("minute",r):qr("hour",t)}function X(e){return typeof e>"u"}function vo(e){return typeof e=="number"}function Nl(e){return typeof e=="number"&&e%1===0}function o$(e){return typeof e=="string"}function i$(e){return Object.prototype.toString.call(e)==="[object Date]"}function ky(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Dy(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function s$(e){return Array.isArray(e)?e:[e]}function Vh(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function a$(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function ns(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Bd(e){if(e==null)return null;if(typeof e!="object")throw new Wt("Week settings must be an object");if(!Kr(e.firstDay,1,7)||!Kr(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Kr(t,1,7)))throw new Wt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Kr(e,t,r){return Nl(e)&&e>=t&&e<=r}function u$(e,t){return e-t*Math.floor(e/t)}function dt(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function fo(e){if(!(X(e)||e===null||e===""))return parseInt(e,10)}function _o(e){if(!(X(e)||e===null||e===""))return parseFloat(e)}function Pf(e){if(!(X(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function If(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function za(e){return e%4===0&&(e%100!==0||e%400===0)}function Gi(e){return za(e)?366:365}function rl(e,t){const r=u$(t-1,12)+1,n=e+(t-r)/12;return r===2?za(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Pl(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Wh(e,t,r){return-Nf(Mf(e,1,t),r)+t-1}function Da(e,t=4,r=1){const n=Wh(e,t,r),o=Wh(e+1,t,r);return(Gi(e)-n+o)/7}function Rd(e){return e>99?e:e>Ze.twoDigitCutoffYear?1900+e:2e3+e}function xy(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const s={timeZoneName:t,...i},a=new Intl.DateTimeFormat(r,s).formatToParts(o).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Il(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function Ey(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new Wt(`Invalid unit value ${e}`);return t}function nl(e,t){const r={};for(const n in e)if(ns(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=Ey(o)}return r}function da(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${dt(r,2)}:${dt(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${dt(r,2)}${dt(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Ol(e){return a$(e,["hour","minute","second","millisecond"])}const l$=["January","February","March","April","May","June","July","August","September","October","November","December"],Ay=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c$=["J","F","M","A","M","J","J","A","S","O","N","D"];function Cy(e){switch(e){case"narrow":return[...c$];case"short":return[...Ay];case"long":return[...l$];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Fy=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Sy=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],d$=["M","T","W","T","F","S","S"];function Ty(e){switch(e){case"narrow":return[...d$];case"short":return[...Sy];case"long":return[...Fy];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const My=["AM","PM"],f$=["Before Christ","Anno Domini"],m$=["BC","AD"],h$=["B","A"];function Ny(e){switch(e){case"narrow":return[...h$];case"short":return[...m$];case"long":return[...f$];default:return null}}function g$(e){return My[e.hour<12?0:1]}function p$(e,t){return Ty(t)[e.weekday-1]}function y$(e,t){return Cy(t)[e.month-1]}function b$(e,t){return Ny(t)[e.year<0?0:1]}function v$(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${o[e][0]}`;case-1:return d?"yesterday":`last ${o[e][0]}`;case 0:return d?"today":`this ${o[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=o[e],c=n?u?l[1]:l[2]||l[1]:u?o[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function zh(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const w$={D:el,DD:Hp,DDD:Jp,DDDD:Yp,t:Xp,tt:Qp,ttt:ey,tttt:ty,T:ry,TT:ny,TTT:oy,TTTT:iy,f:sy,ff:uy,fff:cy,ffff:fy,F:ay,FF:ly,FFF:dy,FFFF:my};class qt{static create(t,r={}){return new qt(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||o)&&i.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",o=!o):o||a===r?n+=a:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return w$[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return dt(t,r);const o={...this.opts};return r>0&&(o.padTo=r),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(m,w)=>this.loc.extract(t,m,w),s=m=>t.isOffsetFixed&&t.offset===0&&m.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,m.format):"",a=()=>n?g$(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(m,w)=>n?y$(t,m):i(w?{month:m}:{month:m,day:"numeric"},"month"),l=(m,w)=>n?p$(t,m):i(w?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),c=m=>{const w=qt.macroTokenToFormatOpts(m);return w?this.formatWithSystemDefault(t,w):m},d=m=>n?b$(t,m):i({era:m},"era"),f=m=>{switch(m){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(m)}};return zh(qt.parseFormat(r),f)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},i=(c,d)=>f=>{const m=o(f);if(m){const w=d.isNegativeDuration&&m!==d.largestUnit?n:1;let v;return this.opts.signMode==="negativeLargestOnly"&&m!==d.largestUnit?v="never":this.opts.signMode==="all"?v="always":v="auto",this.num(c.get(m)*w,f.length,v)}else return f},s=qt.parseFormat(r),a=s.reduce((c,{literal:d,val:f})=>d?c:c.concat(f),[]),u=t.shiftTo(...a.map(o).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return zh(s,i(u,l))}}const Py=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function xs(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Es(...e){return t=>e.reduce(([r,n,o],i)=>{const[s,a,u]=i(t,o);return[{...r,...s},a||n,u]},[{},null,1]).slice(0,2)}function As(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function Iy(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=fo(t[r+o]);return[n,null,r+o]}}const Oy=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,$$=`(?:${Oy.source}?(?:\\[(${Py.source})\\])?)?`,Of=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,By=RegExp(`${Of.source}${$$}`),Bf=RegExp(`(?:[Tt]${By.source})?`),k$=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,D$=/(\d{4})-?W(\d\d)(?:-?(\d))?/,x$=/(\d{4})-?(\d{3})/,E$=Iy("weekYear","weekNumber","weekDay"),A$=Iy("year","ordinal"),C$=/(\d{4})-(\d\d)-(\d\d)/,Ry=RegExp(`${Of.source} ?(?:${Oy.source}|(${Py.source}))?`),F$=RegExp(`(?: ${Ry.source})?`);function Zi(e,t,r){const n=e[t];return X(n)?r:fo(n)}function S$(e,t){return[{year:Zi(e,t),month:Zi(e,t+1,1),day:Zi(e,t+2,1)},null,t+3]}function Cs(e,t){return[{hours:Zi(e,t,0),minutes:Zi(e,t+1,0),seconds:Zi(e,t+2,0),milliseconds:Pf(e[t+3])},null,t+4]}function qa(e,t){const r=!e[t]&&!e[t+1],n=Il(e[t+1],e[t+2]),o=r?null:rr.instance(n);return[{},o,t+3]}function Ka(e,t){const r=e[t]?Jn.create(e[t]):null;return[{},r,t+1]}const T$=RegExp(`^T?${Of.source}$`),M$=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function N$(e){const[t,r,n,o,i,s,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",f=(m,w=!1)=>m!==void 0&&(w||m&&c)?-m:m;return[{years:f(_o(r)),months:f(_o(n)),weeks:f(_o(o)),days:f(_o(i)),hours:f(_o(s)),minutes:f(_o(a)),seconds:f(_o(u),u==="-0"),milliseconds:f(Pf(l),d)}]}const P$={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Rf(e,t,r,n,o,i,s){const a={year:t.length===2?Rd(fo(t)):fo(t),month:Ay.indexOf(r)+1,day:fo(n),hour:fo(o),minute:fo(i)};return s&&(a.second=fo(s)),e&&(a.weekday=e.length>3?Fy.indexOf(e)+1:Sy.indexOf(e)+1),a}const I$=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function O$(e){const[,t,r,n,o,i,s,a,u,l,c,d]=e,f=Rf(t,o,n,r,i,s,a);let m;return u?m=P$[u]:l?m=0:m=Il(c,d),[f,new rr(m)]}function B$(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const R$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,L$=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,j$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function qh(e){const[,t,r,n,o,i,s,a]=e;return[Rf(t,o,n,r,i,s,a),rr.utcInstance]}function U$(e){const[,t,r,n,o,i,s,a]=e;return[Rf(t,a,r,n,o,i,s),rr.utcInstance]}const _$=xs(k$,Bf),V$=xs(D$,Bf),W$=xs(x$,Bf),z$=xs(By),Ly=Es(S$,Cs,qa,Ka),q$=Es(E$,Cs,qa,Ka),K$=Es(A$,Cs,qa,Ka),G$=Es(Cs,qa,Ka);function Z$(e){return As(e,[_$,Ly],[V$,q$],[W$,K$],[z$,G$])}function H$(e){return As(B$(e),[I$,O$])}function J$(e){return As(e,[R$,qh],[L$,qh],[j$,U$])}function Y$(e){return As(e,[M$,N$])}const X$=Es(Cs);function Q$(e){return As(e,[T$,X$])}const ek=xs(C$,F$),tk=xs(Ry),rk=Es(Cs,qa,Ka);function nk(e){return As(e,[ek,Ly],[tk,rk])}const Kh="Invalid Duration",jy={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},ok={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...jy},jr=146097/400,Si=146097/4800,ik={years:{quarters:4,months:12,weeks:jr/7,days:jr,hours:jr*24,minutes:jr*24*60,seconds:jr*24*60*60,milliseconds:jr*24*60*60*1e3},quarters:{months:3,weeks:jr/28,days:jr/4,hours:jr*24/4,minutes:jr*24*60/4,seconds:jr*24*60*60/4,milliseconds:jr*24*60*60*1e3/4},months:{weeks:Si/7,days:Si,hours:Si*24,minutes:Si*24*60,seconds:Si*24*60*60,milliseconds:Si*24*60*60*1e3},...jy},Yo=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],sk=Yo.slice(0).reverse();function Nn(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new he(n)}function Uy(e,t){let r=t.milliseconds??0;for(const n of sk.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Gh(e,t){const r=Uy(e,t)<0?-1:1;Yo.reduceRight((n,o)=>{if(X(t[o]))return n;if(n){const i=t[n]*r,s=e[o][n],a=Math.floor(i/s);t[o]+=a*r,t[n]-=a*s*r}return o},null),Yo.reduce((n,o)=>{if(X(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function Zh(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class he{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?ik:ok;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Fe.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return he.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Wt(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new he({values:nl(t,he.normalizeUnit),loc:Fe.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(vo(t))return he.fromMillis(t);if(he.isDuration(t))return t;if(typeof t=="object")return he.fromObject(t);throw new Wt(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Y$(t);return n?he.fromObject(n,r):he.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Q$(t);return n?he.fromObject(n,r):he.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Wt("need to specify a reason the Duration is invalid");const n=t instanceof sn?t:new sn(t,r);if(Ze.throwOnInvalid)throw new N2(n);return new he({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new Zp(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?qt.create(this.loc,n).formatDurationFromString(this,t):Kh}toHuman(t={}){if(!this.isValid)return Kh;const r=t.showZeros!==!1,n=Yo.map(o=>{const i=this.values[o];return X(i)||i===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:o.slice(0,-1)}).format(i)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=If(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},Q.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Uy(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=he.fromDurationLike(t),n={};for(const o of Yo)(ns(r.values,o)||ns(this.values,o))&&(n[o]=r.get(o)+this.get(o));return Nn(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=he.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Ey(t(this.values[n],n));return Nn(this,{values:r},!0)}get(t){return this[he.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...nl(t,he.normalizeUnit)};return Nn(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return Nn(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Gh(this.matrix,t),Nn(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Zh(this.normalize().shiftToAll().toObject());return Nn(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>he.normalizeUnit(s));const r={},n={},o=this.toObject();let i;for(const s of Yo)if(t.indexOf(s)>=0){i=s;let a=0;for(const l in n)a+=this.matrix[l][s]*n[l],n[l]=0;vo(o[s])&&(a+=o[s]);const u=Math.trunc(a);r[s]=u,n[s]=(a*1e3-u*1e3)/1e3}else vo(o[s])&&(n[s]=o[s]);for(const s in n)n[s]!==0&&(r[i]+=s===i?n[s]:n[s]/this.matrix[i][s]);return Gh(this.matrix,r),Nn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return Nn(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=Zh(this.values);return Nn(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of Yo)if(!r(this.values[n],t.values[n]))return!1;return!0}}const Ti="Invalid Interval";function ak(e,t){return!e||!e.isValid?et.invalid("missing or invalid start"):!t||!t.isValid?et.invalid("missing or invalid end"):t<e?et.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class et{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Wt("need to specify a reason the Interval is invalid");const n=t instanceof sn?t:new sn(t,r);if(Ze.throwOnInvalid)throw new M2(n);return new et({invalid:n})}static fromDateTimes(t,r){const n=zs(t),o=zs(r),i=ak(n,o);return i??new et({start:n,end:o})}static after(t,r){const n=he.fromDurationLike(r),o=zs(t);return et.fromDateTimes(o,o.plus(n))}static before(t,r){const n=he.fromDurationLike(r),o=zs(t);return et.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,s;try{i=Q.fromISO(n,r),s=i.isValid}catch{s=!1}let a,u;try{a=Q.fromISO(o,r),u=a.isValid}catch{u=!1}if(s&&u)return et.fromDateTimes(i,a);if(s){const l=he.fromISO(o,r);if(l.isValid)return et.after(i,l)}else if(u){const l=he.fromISO(n,r);if(l.isValid)return et.before(a,l)}}return et.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?et.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(zs).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:o}=this,i=0;for(;o<this.e;){const s=r[i]||this.e,a=+s>+this.e?this.e:s;n.push(et.fromDateTimes(o,a)),o=a,i+=1}return n}splitBy(t){const r=he.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*o));i=+a>+this.e?this.e:a,s.push(et.fromDateTimes(n,i)),n=i,o+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:et.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return et.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],s)=>i?i.overlaps(s)||i.abutsStart(s)?[o,i.union(s)]:[o.concat([i]),s]:[o,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...i),a=s.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&o.push(et.fromDateTimes(r,u.time)),r=null);return et.merge(o)}difference(...t){return et.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ti}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=el,r={}){return this.isValid?qt.create(this.s.loc.clone(r),t).formatInterval(this):Ti}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Ti}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ti}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Ti}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:Ti}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):he.invalid(this.invalidReason)}mapEndpoints(t){return et.fromDateTimes(t(this.s),t(this.e))}}class yu{static hasDST(t=Ze.defaultZone){const r=Q.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Jn.isValidZone(t)}static normalizeZone(t){return go(t,Ze.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Fe.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Fe.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Fe.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Fe.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Fe.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Fe.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Fe.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Fe.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Fe.create(r,null,"gregory").eras(t)}static features(){return{relative:ky(),localeWeek:Dy()}}}function Hh(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(he.fromMillis(n).as("days"))}function uk(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Hh(u,l);return(c-c%7)/7}],["days",Hh]],o={},i=e;let s,a;for(const[u,l]of n)r.indexOf(u)>=0&&(s=u,o[u]=l(e,t),a=i.plus(o),a>t?(o[u]--,e=i.plus(o),e>t&&(a=e,o[u]--,e=i.plus(o))):e=a);return[e,o,a,s]}function lk(e,t,r,n){let[o,i,s,a]=uk(e,t,r);const u=t-o,l=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(s<t&&(s=o.plus({[a]:1})),s!==o&&(i[a]=(i[a]||0)+u/(s-o)));const c=he.fromObject(i,n);return l.length>0?he.fromMillis(u,n).shiftTo(...l).plus(c):c}const ck="missing Intl.DateTimeFormat.formatToParts support";function De(e,t=r=>r){return{regex:e,deser:([r])=>t(e$(r))}}const dk=" ",_y=`[ ${dk}]`,Vy=new RegExp(_y,"g");function fk(e){return e.replace(/\./g,"\\.?").replace(Vy,_y)}function Jh(e){return e.replace(/\./g,"").replace(Vy," ").toLowerCase()}function nn(e,t){return e===null?null:{regex:RegExp(e.map(fk).join("|")),deser:([r])=>e.findIndex(n=>Jh(r)===Jh(n))+t}}function Yh(e,t){return{regex:e,deser:([,r,n])=>Il(r,n),groups:t}}function bu(e){return{regex:e,deser:([t])=>t}}function mk(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hk(e,t){const r=rn(t),n=rn(t,"{2}"),o=rn(t,"{3}"),i=rn(t,"{4}"),s=rn(t,"{6}"),a=rn(t,"{1,2}"),u=rn(t,"{1,3}"),l=rn(t,"{1,6}"),c=rn(t,"{1,9}"),d=rn(t,"{2,4}"),f=rn(t,"{4,6}"),m=E=>({regex:RegExp(mk(E.val)),deser:([k])=>k,literal:!0}),v=(E=>{if(e.literal)return m(E);switch(E.val){case"G":return nn(t.eras("short"),0);case"GG":return nn(t.eras("long"),0);case"y":return De(l);case"yy":return De(d,Rd);case"yyyy":return De(i);case"yyyyy":return De(f);case"yyyyyy":return De(s);case"M":return De(a);case"MM":return De(n);case"MMM":return nn(t.months("short",!0),1);case"MMMM":return nn(t.months("long",!0),1);case"L":return De(a);case"LL":return De(n);case"LLL":return nn(t.months("short",!1),1);case"LLLL":return nn(t.months("long",!1),1);case"d":return De(a);case"dd":return De(n);case"o":return De(u);case"ooo":return De(o);case"HH":return De(n);case"H":return De(a);case"hh":return De(n);case"h":return De(a);case"mm":return De(n);case"m":return De(a);case"q":return De(a);case"qq":return De(n);case"s":return De(a);case"ss":return De(n);case"S":return De(u);case"SSS":return De(o);case"u":return bu(c);case"uu":return bu(a);case"uuu":return De(r);case"a":return nn(t.meridiems(),0);case"kkkk":return De(i);case"kk":return De(d,Rd);case"W":return De(a);case"WW":return De(n);case"E":case"c":return De(r);case"EEE":return nn(t.weekdays("short",!1),1);case"EEEE":return nn(t.weekdays("long",!1),1);case"ccc":return nn(t.weekdays("short",!0),1);case"cccc":return nn(t.weekdays("long",!0),1);case"Z":case"ZZ":return Yh(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return Yh(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return bu(/[a-z_+-/]{1,256}?/i);case" ":return bu(/[^\S\n\r]/);default:return m(E)}})(e)||{invalidReason:ck};return v.token=e,v}const gk={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function pk(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const u=/^\s+$/.test(o);return{literal:!u,val:u?" ":o}}const i=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=gk[s];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function yk(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function bk(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const s in r)if(ns(r,s)){const a=r[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(o[a.token.val[0]]=a.deser(n.slice(i,i+u))),i+=u}return[n,o]}else return[n,{}]}function vk(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return X(e.z)||(r=Jn.create(e.z)),X(e.Z)||(r||(r=new rr(e.Z)),n=e.Z),X(e.q)||(e.M=(e.q-1)*3+1),X(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),X(e.u)||(e.S=Pf(e.u)),[Object.keys(e).reduce((i,s)=>{const a=t(s);return a&&(i[a]=e[s]),i},{}),r,n]}let Sc=null;function wk(){return Sc||(Sc=Q.fromMillis(1555555555555)),Sc}function $k(e,t){if(e.literal)return e;const r=qt.macroTokenToFormatOpts(e.val),n=Ky(r,t);return n==null||n.includes(void 0)?e:n}function Wy(e,t){return Array.prototype.concat(...e.map(r=>$k(r,t)))}class zy{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Wy(qt.parseFormat(r),t),this.units=this.tokens.map(n=>hk(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=yk(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(t){if(this.isValid){const[r,n]=bk(t,this.regex,this.handlers),[o,i,s]=n?vk(n):[null,null,void 0];if(ns(n,"a")&&ns(n,"H"))throw new ji("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:o,zone:i,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function qy(e,t,r){return new zy(e,r).explainFromTokens(t)}function kk(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:s}=qy(e,t,r);return[n,o,i,s]}function Ky(e,t){if(!e)return null;const n=qt.create(t,e).dtFormatter(wk()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(s=>pk(s,e,i))}const Tc="Invalid DateTime",Xh=864e13;function ta(e){return new sn("unsupported zone",`the zone "${e.name}" is not supported`)}function Mc(e){return e.weekData===null&&(e.weekData=tl(e.c)),e.weekData}function Nc(e){return e.localWeekData===null&&(e.localWeekData=tl(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Vo(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new Q({...r,...t,old:r})}function Gy(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function vu(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function ju(e,t,r){return Gy(Pl(e),t,r)}function Qh(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,rl(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=he.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Pl(i);let[u,l]=Gy(a,r,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function Mi(e,t,r,n,o,i){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=Q.fromObject(e,{...r,zone:u,specificOffset:i});return s?l:l.setZone(a)}else return Q.invalid(new sn("unparsable",`the input "${o}" can't be parsed as ${n}`))}function wu(e,t,r=!0){return e.isValid?qt.create(Fe.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Pc(e,t,r){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=dt(e.c.year,n?6:4),r==="year")return o;if(t){if(o+="-",o+=dt(e.c.month),r==="month")return o;o+="-"}else if(o+=dt(e.c.month),r==="month")return o;return o+=dt(e.c.day),o}function e0(e,t,r,n,o,i,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=dt(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=dt(e.c.minute),s==="minute")break;a&&(u+=":",u+=dt(e.c.second))}else{if(u+=dt(e.c.minute),s==="minute")break;a&&(u+=dt(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(u+=".",u+=dt(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!i?u+="Z":e.o<0?(u+="-",u+=dt(Math.trunc(-e.o/60)),u+=":",u+=dt(Math.trunc(-e.o%60))):(u+="+",u+=dt(Math.trunc(e.o/60)),u+=":",u+=dt(Math.trunc(e.o%60)))),i&&(u+="["+e.zone.ianaName+"]"),u}const Zy={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Dk={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},xk={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Uu=["year","month","day","hour","minute","second","millisecond"],Ek=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Ak=["year","ordinal","hour","minute","second","millisecond"];function _u(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Zp(e);return t}function t0(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return _u(e)}}function Ck(e){if(ra===void 0&&(ra=Ze.now()),e.type!=="iana")return e.offset(ra);const t=e.name;let r=Ld.get(t);return r===void 0&&(r=e.offset(ra),Ld.set(t,r)),r}function r0(e,t){const r=go(t.zone,Ze.defaultZone);if(!r.isValid)return Q.invalid(ta(r));const n=Fe.fromObject(t);let o,i;if(X(e.year))o=Ze.now();else{for(const u of Uu)X(e[u])&&(e[u]=Zy[u]);const s=wy(e)||$y(e);if(s)return Q.invalid(s);const a=Ck(r);[o,i]=ju(e,a,r)}return new Q({ts:o,zone:r,loc:n,o:i})}function n0(e,t,r){const n=X(r.round)?!0:r.round,o=X(r.rounding)?"trunc":r.rounding,i=(a,u)=>(a=If(a,n||r.calendary?0:2,r.calendary?"round":o),t.loc.clone(r).relFormatter(r).format(a,u)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return i(s(r.unit),r.unit);for(const a of r.units){const u=s(a);if(Math.abs(u)>=1)return i(u,a)}return i(e>t?-0:0,r.units[r.units.length-1])}function o0(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let ra;const Ld=new Map;class Q{constructor(t){const r=t.zone||Ze.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new sn("invalid input"):null)||(r.isValid?null:ta(r));this.ts=X(t.ts)?Ze.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const a=vo(t.o)&&!t.old?t.o:r.offset(this.ts);o=vu(this.ts,a),n=Number.isNaN(o.year)?new sn("invalid input"):null,o=n?null:o,i=n?null:a}this._zone=r,this.loc=t.loc||Fe.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new Q({})}static local(){const[t,r]=o0(arguments),[n,o,i,s,a,u,l]=r;return r0({year:n,month:o,day:i,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=o0(arguments),[n,o,i,s,a,u,l]=r;return t.zone=rr.utcInstance,r0({year:n,month:o,day:i,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=i$(t)?t.valueOf():NaN;if(Number.isNaN(n))return Q.invalid("invalid input");const o=go(r.zone,Ze.defaultZone);return o.isValid?new Q({ts:n,zone:o,loc:Fe.fromObject(r)}):Q.invalid(ta(o))}static fromMillis(t,r={}){if(vo(t))return t<-Xh||t>Xh?Q.invalid("Timestamp out of range"):new Q({ts:t,zone:go(r.zone,Ze.defaultZone),loc:Fe.fromObject(r)});throw new Wt(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(vo(t))return new Q({ts:t*1e3,zone:go(r.zone,Ze.defaultZone),loc:Fe.fromObject(r)});throw new Wt("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=go(r.zone,Ze.defaultZone);if(!n.isValid)return Q.invalid(ta(n));const o=Fe.fromObject(r),i=nl(t,t0),{minDaysInFirstWeek:s,startOfWeek:a}=_h(i,o),u=Ze.now(),l=X(r.specificOffset)?n.offset(u):r.specificOffset,c=!X(i.ordinal),d=!X(i.year),f=!X(i.month)||!X(i.day),m=d||f,w=i.weekYear||i.weekNumber;if((m||c)&&w)throw new ji("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&c)throw new ji("Can't mix ordinal dates with month/day");const v=w||i.weekday&&!m;let E,k,D=vu(u,l);v?(E=Ek,k=Dk,D=tl(D,s,a)):c?(E=Ak,k=xk,D=Fc(D)):(E=Uu,k=Zy);let M=!1;for(const Et of E){const Pt=i[Et];X(Pt)?M?i[Et]=k[Et]:i[Et]=D[Et]:M=!0}const O=v?r$(i,s,a):c?n$(i):wy(i),j=O||$y(i);if(j)return Q.invalid(j);const Z=v?jh(i,s,a):c?Uh(i):i,[H,ae]=ju(Z,l,n),_e=new Q({ts:H,zone:n,o:ae,loc:o});return i.weekday&&m&&t.weekday!==_e.weekday?Q.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${_e.toISO()}`):_e.isValid?_e:Q.invalid(_e.invalid)}static fromISO(t,r={}){const[n,o]=Z$(t);return Mi(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=H$(t);return Mi(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=J$(t);return Mi(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(X(t)||X(r))throw new Wt("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,s=Fe.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[a,u,l,c]=kk(s,t,r);return c?Q.invalid(c):Mi(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return Q.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=nk(t);return Mi(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Wt("need to specify a reason the DateTime is invalid");const n=t instanceof sn?t:new sn(t,r);if(Ze.throwOnInvalid)throw new T2(n);return new Q({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Ky(t,Fe.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return Wy(qt.parseFormat(t),Fe.fromObject(r)).map(o=>o.val).join("")}static resetCache(){ra=void 0,Ld.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Mc(this).weekYear:NaN}get weekNumber(){return this.isValid?Mc(this).weekNumber:NaN}get weekday(){return this.isValid?Mc(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Nc(this).weekday:NaN}get localWeekNumber(){return this.isValid?Nc(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Nc(this).weekYear:NaN}get ordinal(){return this.isValid?Fc(this.c).ordinal:NaN}get monthShort(){return this.isValid?yu.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?yu.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?yu.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?yu.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Pl(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),s=this.zone.offset(n-o*r),a=this.zone.offset(n-i*r);if(s===a)return[this];const u=n-s*r,l=n-a*r,c=vu(u,s),d=vu(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[Vo(this,{ts:u}),Vo(this,{ts:l})]:[this]}get isInLeapYear(){return za(this.year)}get daysInMonth(){return rl(this.year,this.month)}get daysInYear(){return this.isValid?Gi(this.year):NaN}get weeksInWeekYear(){return this.isValid?Da(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Da(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=qt.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(rr.instance(t),r)}toLocal(){return this.setZone(Ze.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=go(t,Ze.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),s=this.toObject();[o]=ju(s,i,t)}return Vo(this,{ts:o,zone:t})}else return Q.invalid(ta(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Vo(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=nl(t,t0),{minDaysInFirstWeek:n,startOfWeek:o}=_h(r,this.loc),i=!X(r.weekYear)||!X(r.weekNumber)||!X(r.weekday),s=!X(r.ordinal),a=!X(r.year),u=!X(r.month)||!X(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||s)&&c)throw new ji("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new ji("Can't mix ordinal dates with month/day");let d;i?d=jh({...tl(this.c,n,o),...r},n,o):X(r.ordinal)?(d={...this.toObject(),...r},X(r.day)&&(d.day=Math.min(rl(d.year,d.month),d.day))):d=Uh({...Fc(this.c),...r});const[f,m]=ju(d,this.o,this.zone);return Vo(this,{ts:f,o:m})}plus(t){if(!this.isValid)return this;const r=he.fromDurationLike(t);return Vo(this,Qh(this,r))}minus(t){if(!this.isValid)return this;const r=he.fromDurationLike(t).negate();return Vo(this,Qh(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=he.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:s}=this;s<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?qt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Tc}toLocaleString(t=el,r={}){return this.isValid?qt.create(this.loc.clone(r),t).formatDateTime(this):Tc}toLocaleParts(t={}){return this.isValid?qt.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=_u(s);const a=t==="extended";let u=Pc(this,a,s);return Uu.indexOf(s)>=3&&(u+="T"),u+=e0(this,a,r,n,o,i,s),u}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?Pc(this,t==="extended",_u(r)):null}toISOWeekDate(){return wu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=_u(a),(o&&Uu.indexOf(a)>=3?"T":"")+e0(this,s==="extended",r,t,n,i,a)):null}toRFC2822(){return wu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return wu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Pc(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),wu(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Tc}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return he.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=s$(r).map(he.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=lk(a,u,i,o);return s?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(Q.now(),t,r)}until(t){return this.isValid?et.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=o&&o<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||Q.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),n0(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?n0(t.base||Q.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(Q.isDateTime))throw new Wt("min requires all arguments be DateTimes");return Vh(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(Q.isDateTime))throw new Wt("max requires all arguments be DateTimes");return Vh(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,s=Fe.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return qy(s,t,r)}static fromStringExplain(t,r,n={}){return Q.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:o=null}=r,i=Fe.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new zy(i,t)}static fromFormatParser(t,r,n={}){if(X(t)||X(r))throw new Wt("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:i=null}=n,s=Fe.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});if(!s.equals(r.locale))throw new Wt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?Q.invalid(c):Mi(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return el}static get DATE_MED(){return Hp}static get DATE_MED_WITH_WEEKDAY(){return P2}static get DATE_FULL(){return Jp}static get DATE_HUGE(){return Yp}static get TIME_SIMPLE(){return Xp}static get TIME_WITH_SECONDS(){return Qp}static get TIME_WITH_SHORT_OFFSET(){return ey}static get TIME_WITH_LONG_OFFSET(){return ty}static get TIME_24_SIMPLE(){return ry}static get TIME_24_WITH_SECONDS(){return ny}static get TIME_24_WITH_SHORT_OFFSET(){return oy}static get TIME_24_WITH_LONG_OFFSET(){return iy}static get DATETIME_SHORT(){return sy}static get DATETIME_SHORT_WITH_SECONDS(){return ay}static get DATETIME_MED(){return uy}static get DATETIME_MED_WITH_SECONDS(){return ly}static get DATETIME_MED_WITH_WEEKDAY(){return I2}static get DATETIME_FULL(){return cy}static get DATETIME_FULL_WITH_SECONDS(){return dy}static get DATETIME_HUGE(){return fy}static get DATETIME_HUGE_WITH_SECONDS(){return my}}function zs(e){if(Q.isDateTime(e))return e;if(e&&e.valueOf&&vo(e.valueOf()))return Q.fromJSDate(e);if(e&&typeof e=="object")return Q.fromObject(e);throw new Wt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var Se;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Se||(Se={}));const Fk=[Se.Milliseconds,Se.Seconds,Se.Minutes,Se.Hours,Se.Days,Se.Weeks,Se.Months,Se.Years];Se.Milliseconds+"",Se.Seconds+"",Se.Minutes+"",Se.Hours+"",Se.Days+"",Se.Weeks+"",Se.Months+"",Se.Years+"";function Sk(e){return Fk.filter(t=>e[t])}function jd(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function Tk(e){return jd(Math.max(e-.4,0),{decimalCount:0})}function i0(e){return e===0?0:Math.sign(e)}function os(e,t,r={}){const n={},o={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},i=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=Sk(t).reverse();if(i||s)return a.forEach(c=>{n[c]=i?1/0:-1/0}),n;let u=he.fromObject(e).as(Se.Milliseconds);const l=i0(u);return a.forEach((c,d)=>{const f=d===a.length-1;if(c===Se.Milliseconds)n.milliseconds=jd(u,o);else{const m=he.fromObject({milliseconds:u}).as(c),w=Math.sign(m),v=Math.abs(m),E=f?jd(v,o):Math.floor(o.decimalCount==null?v:Tk(v)),k=E===0?0:E*w;n[c]=k,u-=he.fromObject({[c]:k}).as(Se.Milliseconds),l!==i0(u)&&(u=0)}}),n}Intl.DateTimeFormat().resolvedOptions().locale;var G;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(G||(G={}));G.Year,G.Hour,G.Minute,G.Second,G.Millisecond;G.Month,G.Week,G.Day;G.Millisecond,G.Second,G.Minute,G.Hour,G.Day,G.Week,G.Month,G.Year;const s0={min:0,max:23},a0={min:0,max:59},u0={min:0,max:59},l0={min:0,max:999};var zt;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(zt||(zt={}));zt.Sunday+"",zt.Monday+"",zt.Tuesday+"",zt.Wednesday+"",zt.Thursday+"",zt.Friday+"",zt.Saturday+"";zt.Sunday,zt.Monday,zt.Tuesday,zt.Wednesday,zt.Thursday,zt.Friday,zt.Saturday;var lr;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(lr||(lr={}));lr.January,lr.February,lr.March,lr.April,lr.May,lr.June,lr.July,lr.August,lr.September,lr.October,lr.November,lr.December;const c0={min:1,max:12},d0={min:1,max:31};function ii(e){const t=new Qu,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:os(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function Hy(...e){const t=e.join(""),r=Ef(Array.from(t));return Array.from(r).join("")}function Jy(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Yy(e,t){const r=Hy([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Xy(e,r)}function Xy(e,t){const r=Hy(t);return typeof e=="string"?new RegExp(Jy(e),r):new RegExp(e.source,r)}function Qy(e,{caseSensitive:t}){const n="".replaceAll("i","");return Xy(e,n)}function Lf(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function eb(e,t){return t?typeof t=="string"?!!new RegExp(Jy(t),"i").exec(e):!!Yy(t,"i").exec(e):!1}class p extends Error{name="AssertionError";constructor(t,r){super(Ds(r,t)||"Assertion failed.")}}const f0={interval:{milliseconds:100},timeout:{seconds:10}},Ic=Symbol("not set");async function Mk(e,t,r){const{callback:n,extraAssertionArgs:o,failureMessage:i,options:s}=Nk(t),a=os(s.timeout,{milliseconds:!0}).milliseconds,u=os(s.interval,{milliseconds:!0});let l=Ic,c;async function d(){try{l=r?n():await n(),e(l,...o)}catch(m){l=Ic,c=rt(m)}}const f=Date.now();for(;l===Ic;)if(await d(),await ii(u),Date.now()-f>=a){const w=`${i?`${i}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Tl(c,w)}return l}function P(e,t=!1){return((...r)=>Mk(e,r,t))}function Nk(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:tb(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function tb(e){return{interval:e?.interval||f0.interval,timeout:e?.timeout||f0.timeout}}const qs={isFalse(e,t){if(e!==!1)throw new p(`'${y(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${y(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new p(`'${y(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new p(`'${y(e)}' is not truthy.`,t)}},rb={assert:qs,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new p(`'${y(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${y(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new p(`'${y(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new p(`'${y(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:P(qs.isFalse),isFalsy:P(qs.isFalsy),isTrue:P(qs.isTrue),isTruthy:P(qs.isTruthy)}};function Pk(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${y(e)} does not end with ${y(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${y(e)} does not end with ${y(t)}}`,r)}function Ik(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new p(`${y(e)} ends with ${y(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${y(e)} ends with ${y(t)}}`,r)}function Ok(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${y(e)} does not start with ${y(t)}}`,r)}else if(e[0]!==t)throw new p(`${y(e)} does not start with ${y(t)}}`,r)}function Bk(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new p(`${y(e)} starts with ${y(t)}}`,r)}else if(e[0]===t)throw new p(`${y(e)} starts with ${y(t)}}`,r)}const Ks={endsWith:Pk,endsWithout:Ik,startsWith:Ok,startsWithout:Bk},nb={assert:Ks,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${y(e)} does not end with ${y(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${y(e)} does not end with ${y(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new p(`${y(e)} ends with ${y(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${y(e)} ends with ${y(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${y(e)} does not start with ${y(t)}}`,r)}else if(e[0]!==t)throw new p(`${y(e)} does not start with ${y(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new p(`${y(e)} starts with ${y(t)}}`,r)}else if(e[0]===t)throw new p(`${y(e)} starts with ${y(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:P(Ks.endsWith),endsWithout:P(Ks.endsWithout),startsWith:P(Ks.startsWith),startsWithout:P(Ks.startsWithout)}};function Rk(e,t,r){const n=Vr(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function Rn(e,t){return Vr(t).includes(e)}const Oc={isEnumValue(e,t,r){Rk(e,t,r)},isNotEnumValue(e,t,r){const n=Vr(t);if(n.includes(e))throw new p(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},ob={assert:Oc,check:{isEnumValue:Rn,isNotEnumValue(e,t){return!Vr(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=Vr(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=Vr(t);if(n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(Vr(t).includes(e))return e},isNotEnumValue(e,t){if(!Vr(t).includes(e))return e}},waitUntil:{isEnumValue:P(Oc.isEnumValue),isNotEnumValue:P(Oc.isNotEnumValue)}},Bc={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${y(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${y(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new p(`Entries are not equal at key '${String(o)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))throw new p("Entries are equal.",r)}},ib={assert:Bc,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const o=e[n],i=t[n];return o===i})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const o=e[n],i=t[n];return o!==i})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${y(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${y(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new p(`Entries are not equal at key '${String(o)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))return e;throw new p("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(o=>{const i=e[o],s=t[o];return i===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const i=e[o],s=t[o];return i!==s}))return e}},waitUntil:{entriesEqual:P(Bc.entriesEqual),notEntriesEqual:P(Bc.notEntriesEqual)}};function ol(e,t){return JSON.stringify(e)===JSON.stringify(t)}function xa(e,t){if(!(e===t||ol(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!ol(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(i=>{try{xa(e[i],t[i])}catch(s){throw new Error(`JSON objects are not equal at key '${i}': ${Tt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function na(e,t){if(e===t||ol(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!ol(r,n)?!1:Object.keys(e).every(i=>na(e[i],t[i]))}return!1}const Rc={jsonEquals(e,t,r){try{xa(e,t)}catch(n){throw new p(Tt(n),r)}},notJsonEquals(e,t,r){try{xa(e,t)}catch{return}throw new p("Values are JSON equal.",r)}},sb={assert:Rc,check:{jsonEquals(e,t){return na(e,t)},notJsonEquals(e,t){return!na(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return xa(e,t),e}catch(n){throw new p(Tt(n),r)}},notJsonEquals(e,t,r){try{xa(e,t)}catch{return e}throw new p("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(na(e,t))return e},notJsonEquals(e,t){if(!na(e,t))return e}},waitUntil:{jsonEquals:P(Rc.jsonEquals),notJsonEquals:P(Rc.notJsonEquals)}};function m0(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function ab(){this._key="chai/deep-eql__"+Math.random()+Date.now()}ab.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var ub=typeof WeakMap=="function"?WeakMap:ab;function h0(e,t,r){if(!r||is(e)||is(t))return null;var n=r.get(e);if(n){var o=n.get(t);if(typeof o=="boolean")return o}return null}function $u(e,t,r,n){if(!(!r||is(e)||is(t))){var o=r.get(e);o?o.set(t,n):(o=new ub,o.set(t,n),r.set(e,o))}}function on(e,t,r){if(r&&r.comparator)return g0(e,t,r);var n=lb(e,t);return n!==null?n:g0(e,t,r)}function lb(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:is(e)||is(t)?!1:null}function g0(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new ub;var n=r&&r.comparator,o=h0(e,t,r.memoize);if(o!==null)return o;var i=h0(t,e,r.memoize);if(i!==null)return i;if(n){var s=n(e,t);if(s===!1||s===!0)return $u(e,t,r.memoize,s),s;var a=lb(e,t);if(a!==null)return a}var u=m0(e);if(u!==m0(t))return $u(e,t,r.memoize,!1),!1;$u(e,t,r.memoize,!0);var l=Lk(e,t,u,r);return $u(e,t,r.memoize,l),l}function Lk(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return on(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return cb(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return ti(e,t,n);case"RegExp":return jk(e,t);case"Generator":return Uk(e,t,n);case"DataView":return ti(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return ti(new Uint8Array(e),new Uint8Array(t),n);case"Set":return p0(e,t,n);case"Map":return p0(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return Vk(e,t,n)}}function jk(e,t){return e.toString()===t.toString()}function p0(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){o.push([s,a])}),ti(n.sort(),o.sort(),r)}function ti(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(on(e[o],t[o],r)===!1)return!1;return!0}function Uk(e,t,r){return ti(Ud(e),Ud(t),r)}function _k(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function y0(e){if(_k(e))try{return Ud(e[Symbol.iterator]())}catch{return[]}return[]}function Ud(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function b0(e){var t=[];for(var r in e)t.push(r);return t}function v0(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var o=r[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&t.push(o)}return t}function cb(e,t,r,n){var o=r.length;if(o===0)return!0;for(var i=0;i<o;i+=1)if(on(e[r[i]],t[r[i]],n)===!1)return!1;return!0}function Vk(e,t,r){var n=b0(e),o=b0(t),i=v0(e),s=v0(t);if(n=n.concat(i),o=o.concat(s),n.length&&n.length===o.length)return ti(w0(n).sort(),w0(o).sort())===!1?!1:cb(e,t,n,r);var a=y0(e),u=y0(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),ti(a,u,r)):n.length===0&&a.length===0&&o.length===0&&u.length===0}function is(e){return e===null||typeof e!="object"}function w0(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class Hi extends p{name="DiffError";constructor(t,r,n,o){const i=E2(r,n);super([t,Lf(i)].join(`
`),o)}}function mo(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const co={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${y(t)}

.`,r):new Hi("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${y(t)}

.`,r):new p(`

${y(e)}

strictly equals

${y(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${y(t)}

.`,r):new Hi("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${y(t)}

.`,r):new p(`

${y(e)}

loosely equals

${y(t)}

`,r)},deepEquals(e,t,r){if(!on(e,t,{comparator:mo}))throw new Hi("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(on(e,t,{comparator:mo}))throw new p(`

${y(e)}

deeply equals

${y(t)}

`,r)}},db=co.deepEquals,fb={assert:co,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return on(e,t,{comparator:mo})},notDeepEquals(e,t){return!on(e,t,{comparator:mo})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${y(t)}

.`,r):new Hi("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${y(t)}

.`,r):new p(`

${y(e)}

strictly equals

${y(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${y(t)}

.`,r):new Hi("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${y(t)}

.`,r):new p(`

${y(e)}

loosely equals

${y(t)}

`,r);return e},deepEquals(e,t,r){if(on(e,t,{comparator:mo}))return e;throw new Hi("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(on(e,t,{comparator:mo}))throw new p(`

${y(e)}

deeply equals

${y(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(on(e,t,{comparator:mo}))return e},notDeepEquals(e,t){if(!on(e,t,{comparator:mo}))return e}},waitUntil:{strictEquals:P(co.strictEquals),notStrictEquals:P(co.notStrictEquals),looseEquals:P(co.looseEquals),notLooseEquals:P(co.notLooseEquals),deepEquals:P(co.deepEquals),notDeepEquals:P(co.notDeepEquals)}};function $r(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function _r(e,t){return typeof t=="string"?t.includes(e):$r(t,e)}const Pn={hasValue(e,t,r){if(!$r(e,t))throw new p(`'${y(e)}' does not have value '${y(t)}'.`,r)},lacksValue(e,t,r){if($r(e,t))throw new p(`'${y(e)}' has value '${y(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new p(`'${y(e)}' does not have values '${y(t)}'.`,r)}if(n.length)throw new p(`'${y(e)}' does not have values '${y(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new p(`'${y(e)}' has values '${y(n)}'.`,r)},isIn(e,t,r){if(!_r(e,t))throw new p(`'${y(e)}'

is not in

${y(t)}.`,r)},isNotIn(e,t,r){if(_r(e,t))throw new p(`'${y(e)}'

is in

${y(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${y(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new p(`'${y(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new p(`'${y(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${y(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${y(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${y(e)}' is not empty.`,t)}}},mb={assert:Pn,check:{hasValue(e,t){return $r(e,t)},lacksValue(e,t){return!$r(e,t)},hasValues(e,t){return t.every(r=>$r(e,r))},lacksValues(e,t){return t.every(r=>!$r(e,r))},isIn(e,t){return _r(e,t)},isNotIn(e,t){return!_r(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!$r(e,t))throw new p(`'${y(e)}' does not have value '${y(t)}'.`,r);return e},lacksValue(e,t,r){if($r(e,t))throw new p(`'${y(e)}' has value '${y(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new p(`'${y(e)}' does not have values '${y(t)}'.`,r)}if(n.length)throw new p(`'${y(e)}' does not have values '${y(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new p(`'${y(e)}' has values '${y(n)}'.`,r);return e},isIn(e,t,r){if(!_r(e,t))throw new p(`'${y(e)}'

is not in

${y(t)}.`,r);return e},isNotIn(e,t,r){if(_r(e,t))throw new p(`'${y(e)}'

is in

${y(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${y(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new p(`'${y(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new p(`'${y(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${y(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${y(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${y(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if($r(e,t))return e},lacksValue(e,t){if(!$r(e,t))return e},hasValues(e,t){if(t.every(r=>$r(e,r)))return e},lacksValues(e,t){if(!t.every(r=>$r(e,r)))return e},isIn(e,t){if(_r(e,t))return e},isNotIn(e,t){if(!_r(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:P(Pn.hasValue),lacksValue:P(Pn.lacksValue),hasValues:P(Pn.hasValues),lacksValues:P(Pn.lacksValues),isIn:P(Pn.isIn),isNotIn:P(Pn.isNotIn),isEmpty:P(Pn.isEmpty),isNotEmpty:P(Pn.isNotEmpty)}},Lc={isHttpStatus(e,t){if(!Rn(e,F))throw new p(`${y(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(Rn(e,F)){if(!_r(e,Lu[t]))throw new p(`${y(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${y(e)} is not a valid HTTP status.`,r)}},hb={assert:Lc,check:{isHttpStatus(e){return Rn(e,F)},isHttpStatusCategory(e,t){return Rn(e,F)&&_r(e,Lu[t])}},assertWrap:{isHttpStatus(e,t){if(!Rn(e,F))throw new p(`${y(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(Rn(e,F)){if(!_r(e,Lu[t]))throw new p(`${y(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${y(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(Rn(e,F))return e},isHttpStatusCategory(e,t){if(Rn(e,F)&&_r(e,Lu[t]))return e}},waitUntil:{isHttpStatus:P(Lc.isHttpStatus),isHttpStatusCategory:P(Lc.isHttpStatusCategory)}},jc={instanceOf(e,t,r){if(!(e instanceof t))throw new p(`'${y(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${y(e)}' is an instance of '${t.name}'`,r)}},gb={assert:jc,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new p(`'${y(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${y(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:P(jc.instanceOf),notInstanceOf:P(jc.notInstanceOf)}},Wk=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function We(e,t){return Wk.some(r=>{try{return r(e,t)}catch{return!1}})}const Wo={isKeyOf(e,t,r){if(!We(t,e))throw new p(`'${String(e)}' is not a key of '${y(t)}'.`,r)},isNotKeyOf(e,t,r){if(We(t,e))throw new p(`'${String(e)}' is a key of '${y(t)}'.`,r)},hasKey(e,t,r){if(!We(e,t))throw new p(`'${y(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(We(e,t))throw new p(`'${y(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(o=>!We(e,o));if(n.length)throw new p(`'${y(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(o=>We(e,o));if(n.length)throw new p(`'${y(e)}' does not lack keys '${n.join(",")}'.`,r)}},pb={assert:Wo,check:{isKeyOf(e,t){return We(t,e)},isNotKeyOf(e,t){return!We(t,e)},hasKey:We,lacksKey(e,t){return!We(e,t)},hasKeys(e,t){return t.every(r=>We(e,r))},lacksKeys(e,t){return t.every(r=>!We(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!We(t,e))throw new p(`'${String(e)}' is not a key of '${y(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(We(t,e))throw new p(`'${String(e)}' is a key of '${y(t)}'.`,r);return e},hasKey(e,t,r){if(!We(e,t))throw new p(`'${y(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(We(e,t))throw new p(`'${y(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(o=>!We(e,o));if(n.length)throw new p(`'${y(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(o=>We(e,o));if(n.length)throw new p(`'${y(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(We(t,e))return e},isNotKeyOf(e,t){if(!We(t,e))return e},hasKey(e,t){if(We(e,t))return e},lacksKey(e,t){if(!We(e,t))return e},hasKeys(e,t){if(t.every(r=>We(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!We(e,r)))return e}},waitUntil:{isKeyOf:P(Wo.isKeyOf),isNotKeyOf:P(Wo.isNotKeyOf),hasKey:P(Wo.hasKey),lacksKey:P(Wo.lacksKey),hasKeys:P(Wo.hasKeys),lacksKeys:P(Wo.lacksKeys)}};function zk(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r)}function qk(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r)}const Uc={isLengthAtLeast:zk,isLengthExactly:qk},yb={assert:Uc,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)===t)return e})},waitUntil:{isLengthAtLeast:P(Uc.isLengthAtLeast),isLengthExactly:P(Uc.isLengthExactly)}},Kk={never(e){throw new p("This code should not have executed.",e)}},bb={assert:Kk,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},_c={isDefined(e,t){if(e==null)throw new p(`'${y(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new p(`'${y(e)}' is not a nullish.`,t)}},vb={assert:_c,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new p(`'${y(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new p(`'${y(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:P(_c.isDefined),isNullish:P(_c.isNullish)}},ar={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${y({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${y({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n)}},wb={assert:ar,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${y({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${y({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:P(ar.isInBounds),isOutBounds:P(ar.isOutBounds),isInteger:P(ar.isInteger),isNotInteger:P(ar.isNotInteger),isAbove:P(ar.isAbove),isAtLeast:P(ar.isAtLeast),isBelow:P(ar.isBelow),isAtMost:P(ar.isAtMost),isNaN:P(ar.isNaN),isFinite:P(ar.isFinite),isInfinite:P(ar.isInfinite),isApproximately:P(ar.isApproximately),isNotApproximately:P(ar.isNotApproximately)}};function Gk(e,t,r,n,o){return Ga(...Bl(e,t,r,n,o),!1)}function Bl(e,t,r,n,o){const i=Array.isArray(r);return[i?e:db,i?t:e,i?r:t,i?n:r,i?o:n]}function Ga(e,t,r,n,o,i){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,n),i?a(l):a()}catch(l){u(new p(`Output from '${t.name}' did not produce expected output. ${Tt(l)}`,o))}});try{return e(s,n),i?s:void 0}catch(a){throw new p(`Output from '${t.name}' did not produce expected output. ${Tt(a)}`,o)}}function Zk(e,t,r,n,o){try{const i=Ga(...Bl(e,t,r,n,o),!1);return i instanceof Promise?new Promise(async s=>{try{await i,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function Hk(e,t,r,n,o){return Ga(...Bl(e,t,r,n,o),!0)}function Jk(e,t,r,n,o){try{const i=Ga(...Bl(e,t,r,n,o),!0);return i instanceof Promise?new Promise(async s=>{try{s(await i)}catch{s(void 0)}}):i}catch{return}}const Vc=Symbol("not set");async function Yk(e,t,r,n,o,i){const s=Array.isArray(r),a=s?e:db,u=s?t:e,l=s?r:t,c=s?n:r,d=tb(s?o:n),f=s?i:o,m=os(d.timeout,{milliseconds:!0}).milliseconds,w=os(d.interval,{milliseconds:!0});let v=Vc,E;async function k(){try{v=await Ga(a,u,l,c,void 0,!0)}catch(M){v=Vc,E=rt(M)}}const D=Date.now();for(;v===Vc;)if(await k(),await ii(w),Date.now()-D>=m)throw Tl(E,Ds(f,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return v}const Xk={output:Gk},$b={assert:Xk,check:{output:Zk},assertWrap:{output:Hk},checkWrap:{output:Jk},waitUntil:{output:Yk}},Gs={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${y(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${y(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${y(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${y(e)}' is not a Primitive.`,t)}},kb={assert:Gs,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${y(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${y(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${y(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${y(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:P(Gs.isNotPrimitive),isNotPropertyKey:P(Gs.isNotPropertyKey),isPrimitive:P(Gs.isPrimitive),isPropertyKey:P(Gs.isPropertyKey)}},Zs={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${y(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${y(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${y(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${y(e)}' is a Promise.`,t)}},Db={assert:Zs,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${y(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${y(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${y(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${y(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:P(Zs.isPromiseLike,!0),isNotPromiseLike:P(Zs.isNotPromiseLike,!0),isPromise:P(Zs.isPromise,!0),isNotPromise:P(Zs.isNotPromise,!0)}},Wc={matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r)}},xb={assert:Wc,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:P(Wc.matches,!0),mismatches:P(Wc.mismatches,!0)}},Ge={isArray(e,t){if(!Array.isArray(e))throw new p(`'${y(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${y(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${y(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new p(`'${y(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new p(`'${y(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${y(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${y(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${y(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new p(`'${y(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${y(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new p(`'${y(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${y(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${y(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${y(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${y(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new p(`'${y(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${y(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${y(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new p(`'${y(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${y(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${y(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${y(e)}' is a undefined.`,t)}},Eb={assert:Ge,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new p(`'${y(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${y(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${y(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new p(`'${y(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new p(`'${y(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${y(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${y(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${y(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new p(`'${y(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${y(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new p(`'${y(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${y(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${y(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${y(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${y(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new p(`'${y(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${y(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${y(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new p(`'${y(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${y(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${y(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${y(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:P(Ge.isArray),isBigInt:P(Ge.isBigInt),isBoolean:P(Ge.isBoolean),isFunction:P(Ge.isFunction),isNull:P(Ge.isNull),isNumber:P(Ge.isNumber),isObject:P(Ge.isObject),isPlainObject:P(Ge.isPlainObject),isString:P(Ge.isString),isSymbol:P(Ge.isSymbol),isUndefined:P(Ge.isUndefined),isNotArray:P(Ge.isNotArray),isNotBigInt:P(Ge.isNotBigInt),isNotBoolean:P(Ge.isNotBoolean),isNotFunction:P(Ge.isNotFunction),isNotNull:P(Ge.isNotNull),isNotNumber:P(Ge.isNotNumber),isNotObject:P(Ge.isNotObject),isNotPlainObject:P(Ge.isNotPlainObject),isNotString:P(Ge.isNotString),isNotSymbol:P(Ge.isNotSymbol),isNotUndefined:P(Ge.isNotUndefined)}};var cr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(cr||(cr={}));function jf(e,t,r){Uf(e,{noError:"No error.",notInstance:`'${y(e)}' is not an error instance.`},t,r)}function $0(e,t,r){Uf(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${y(e)}' is not an error instance.`},t,r)}function Uf(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const o=e.constructor.name;throw new p(`Error constructor '${o}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const o=Tt(e);if(typeof r.matchMessage=="string"){if(!eb(o,r.matchMessage))throw new p(`Error message

'${o}'

does not contain

'${r.matchMessage}'.`,n)}else if(!o.match(r.matchMessage))throw new p(`Error message

'${o}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new p(t.notInstance,n);else throw new p(t.noError,n)}function k0(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=Tt(e);if(typeof t.matchMessage=="string"){if(!eb(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Rl(e,t,r,n){let o;try{const i=t instanceof Promise?t:t();if(i instanceof Promise)return new Promise(async(s,a)=>{try{await i}catch(u){o=rt(u)}try{$0(o,r,n),e===cr.Assert?s():e===cr.Check?s(!0):s(o)}catch(u){e===cr.CheckWrap?s(void 0):e===cr.Check?s(!1):a(rt(u))}})}catch(i){o=rt(i)}try{return $0(o,r,n),e===cr.Check?!0:e!==cr.Assert?o:void 0}catch(i){if(e===cr.CheckWrap)return;if(e===cr.Check)return!1;throw i}}function Qk(e,t,r){return Rl(cr.Assert,e,t,r)}function e5(e,t){return Rl(cr.Check,e,t)}function t5(e,t,r){return Rl(cr.AssertWrap,e,t,r)}function r5(e,t,r){return Rl(cr.CheckWrap,e,t,r)}const n5=P(jf);function o5(e,t,r,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,i=o?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof i!="function")throw new TypeError(`Callback is not a function, got '${y(i)}'`);return n5(o,async()=>{try{await i();return}catch(u){return rt(u)}},a,s)}const i5={throws:Qk,isError:jf},Ab={assert:i5,check:{throws:e5,isError(e,t){return k0(e,t)}},assertWrap:{throws:t5,isError(e,t,r){return Uf(e,{noError:"No error.",notInstance:`'${y(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:r5,isError(e,t){if(k0(e,t))return e}},waitUntil:{throws:o5,isError:P(jf)}},ho=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,zc={isUuid(e,t){if(!String(e).match(ho))throw new p(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(ho))throw new p(`'${String(e)}' is a UUID.`,t)}},Cb={assert:zc,check:{isUuid(e){return!!String(e).match(ho)},isNotUuid(e){return!String(e).match(ho)}},assertWrap:{isUuid(e,t){if(!String(e).match(ho))throw new p(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(ho))throw new p(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(ho))return e},isNotUuid(e){if(!String(e).match(ho))return e}},waitUntil:{isUuid:P(zc.isUuid),isNotUuid:P(zc.isNotUuid)}},s5={...bb.assert,...rb.assert,...nb.assert,...ib.assert,...ob.assert,...hb.assert,...gb.assert,...sb.assert,...pb.assert,...yb.assert,...vb.assert,...wb.assert,...$b.assert,...kb.assert,...Db.assert,...xb.assert,...Eb.assert,...fb.assert,...Ab.assert,...Cb.assert,...mb.assert},_f=[rb,nb,ib,ob,hb,gb,sb,pb,yb,bb,vb,wb,$b,kb,Db,xb,Eb,fb,Ab,Cb,mb],a5=Object.assign({},..._f.map(e=>e.check)),S=Object.assign(function(t){return!!t},a5);function u5(e,t,r){return Vu(e,t,r,new Set)}function Vu(e,t,r,n){if(e=D0(e),t=D0(t),S.isObject(e)&&S.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Vu(ze(e).sort(),ze(t).sort(),r,n))return!1;let o=!1;const i=ze(e).map(s=>{const a=Vu(e[s],t[s],r,n);return S.isPromise(a)&&(o=!0),a});return x0(o,i)}else if(S.isArray(e)&&S.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let o=!1;const i=e.map((s,a)=>{const u=Vu(s,t[a],r,n);return S.isPromise(u)&&(o=!0),u});return x0(o,i)}else return r(e,t)}function D0(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function x0(e,t){return e?new Promise(async(r,n)=>{try{const o=await Promise.all(t);r(o.every(S.isTrue))}catch(o){n(rt(o))}}):t.every(S.isTrue)}const l5=Object.assign({},..._f.map(e=>e.assertWrap)),dn=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r);return t},l5);function c5(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const d5={tsType:c5},f5={assert:d5},m5={fail:e=>{throw new p("Failure triggered.",e)}},h5={...f5.assert,...s5,...m5},$t=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r)},h5),g5=Object.assign({},..._f.map(e=>e.checkWrap)),Fb=Object.assign(function(t){if(t)return t},g5);function p5(e,t){return S.hasKey(e,"entryType")&&e.entryType===t}function zo(e,t){return e.controlType===t}var J;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(J||(J={}));const Sb=Symbol("any-type"),y5={[J.Checkbox]:!1,[J.Color]:"",[J.Custom]:void 0,[J.Dropdown]:"",[J.Hidden]:Sb,[J.Number]:0,[J.Text]:""};function b5(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===J.Custom)return;const i=y5[o.controlType];i!==Sb&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function v5(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return S.isPromise(o)?new Promise(async(i,s)=>{try{const a=await o;e.set(n,a),i(a)}catch(a){s(rt(a))}}):(e.set(n,o),o)}}function hi(e,t,r){if(t in e)return e[t];{const n=r();return S.isPromise(n)?new Promise(async(o,i)=>{try{const s=await n;e[t]=s,o(s)}catch(s){i(rt(s))}}):(e[t]=n,n)}}function Yn(e){return ze(e).map(t=>[t,e[t]])}function Ea(e){return Object.fromEntries(e)}function So(e,t,r){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return r(a,o,i,s)&&n.push(a),n},[])}function w5(e,t,r={}){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return hi(n,a,()=>[]).push(o),n},{})}function Ll(e,t,r={}){try{let n=!1;const o=e.map((i,s,a)=>{const u=t(i,s,a);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(S.isTruthy);return n?new Promise(async(i,s)=>{try{const a=So(await Promise.all(o),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},S.isTruthy);i(Ea(a))}catch(a){s(rt(a))}}):Ea(o)}catch(n){throw rt(n)}}function $5(e){return Object.entries(e).reverse().filter(([,t])=>t.length).reduce((t,[r,n])=>(t.length||(t=[{}]),n.flatMap(o=>t.map(i=>({...i,[r]:o})))),[])}function k5(e){return Array.isArray(e)?e:[e]}function D5({min:e,max:t}){const{min:r,max:n}=Sf({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)),s=Math.ceil(i/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/o)*o,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,f)=>c+d*256**f,0);while(l>=a);return r+l%o}const E0=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function ri(e=16){let t="";for(let r=0;r<e;r++){const n=D5({min:0,max:E0.length-1});t+=E0[n]}return t}function Tb(e){if(S.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Tt(t).trim()).join(`
`))}function x5(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):S.hasKey(t,"fallbackValue")?t.fallbackValue:rt(n)):r}catch(r){return t.handleError?t.handleError(r):S.hasKey(t,"fallbackValue")?t.fallbackValue:rt(r)}}function E5(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const A5="modulepreload",C5=function(e){return"/vira/book/"+e},A0={},il=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=u(r.map(l=>{if(l=C5(l),l in A0)return;A0[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":A5,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,w)=>{f.addEventListener("load",m),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var wt;(function(e){e.Standard="stdout",e.Error="stderr"})(wt||(wt={}));var le;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(le||(le={}));async function F5(){return await Gp({async[ln.Node](){const e=(await il(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[le.Bold]:e.bold.open,[le.Debug]:e.blueBright.open,[le.Error]:e.red.open,[le.Faint]:e.gray.open,[le.Info]:e.cyan.open,[le.Mutate]:e.magenta.open,[le.NormalWeight]:"\x1B[22m",[le.Plain]:"",[le.Reset]:e.reset.open,[le.Success]:e.green.open,[le.Warning]:e.yellow.open}},[ln.Web](){return Promise.resolve({[le.Bold]:"font-weight: bold",[le.Debug]:"color: blue",[le.Error]:"color: red",[le.Faint]:"color: grey",[le.Info]:"color: teal",[le.Mutate]:"color: magenta",[le.NormalWeight]:"",[le.Plain]:"",[le.Reset]:"",[le.Success]:"color: green",[le.Warning]:"color: orange"})}})}const wr=await F5(),S5={[le.Bold]:{colors:[wr.bold],logType:wt.Standard},[le.Debug]:{colors:[wr.debug],logType:wt.Standard},[le.Faint]:{colors:[wr.faint],logType:wt.Standard},[le.Info]:{colors:[wr.info],logType:wt.Standard},[le.Mutate]:{colors:[wr.mutate,wr.bold],logType:wt.Standard},[le.NormalWeight]:{colors:[wr.normalWeight],logType:wt.Standard},[le.Plain]:{colors:[],logType:wt.Standard},[le.Reset]:{colors:[wr.reset],logType:wt.Standard},[le.Success]:{colors:[wr.success,wr.bold],logType:wt.Standard},[le.Error]:{colors:[wr.error,wr.bold],logType:wt.Error},[le.Warning]:{colors:[wr.warning],logType:wt.Error}};function gr({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Ji({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function T5(e,t){try{let r=!1;const n=Yn(e).map(([o,i])=>{const s=t(o,i,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(S.isTruthy);return r?new Promise(async(o,i)=>{try{const s=So(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},S.isTruthy);o(Ea(s))}catch(s){i(rt(s))}}):Ea(n)}catch(r){throw rt(r)}}function M5(e,t){return T5(e,(r,n)=>{const o=n,i=t(n,e);return i instanceof Promise?i.then(s=>({key:o,value:s})):{key:o,value:i}})}function Mb(e,...t){const r={...e};return t.forEach(n=>{n&&Yn(n).forEach(([o,i])=>{i!=null&&(r[o]=i)})}),r}function N5(e){return e.replace(/,/g,"")}function P5(e){return typeof e=="number"?e:Number(typeof e=="string"?N5(e):e)}function I5(e){const t=O5(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function O5(e){const t=P5(e);if(!isNaN(t))return t}const Nb="px";function Aa(e){return Vf({value:e,suffix:Nb})}function B5(e){return I5(Pb({value:e,suffix:Nb}))}function Vf({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Pb({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function R5(){return await Gp({async[ln.Node](){const{inspect:e}=await il(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const o=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[le.Reset].colors.join("")].join(""),css:void 0}}},[ln.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:So(r.colorConfig[t].colors,s=>Pb({value:s,suffix:";"}),S.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?Tt(s):y(s)).join(`
`),r.omitColors?"":r.colorConfig[le.Reset].colors.join("")].join(""),css:n}}}})}const L5=await R5(),j5={colorConfig:S5,omitColors:!1},U5=Ib({[wt.Error](){},[wt.Standard](){}});function Ib(e,t){const r=Mb(j5,t);function n(i){e[r.colorConfig[i.colorKey].logType](L5({...i,options:r}))}const o=M5(le,i=>(...s)=>n({args:s,colorKey:i}));return{...o,if(i){return i?o:U5}}}const _5=Ff(ln.Node)?{[wt.Error]({text:e}){process.stderr.write(e+`
`)},[wt.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[wt.Error]({text:e,css:t}){console.error(gr({value:e,prefix:"%c"}),t)},[wt.Standard]({text:e,css:t}){console.log(gr({value:e,prefix:"%c"}),t)}},Wf=Ib(_5);function V5(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}function W5(e,{digits:t}){const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function z5({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const o=Yy(Qy(t,{caseSensitive:r}),"g"),i=[];return e.replace(o,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);i.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),i}function q5(e,t,{caseSensitive:r}){const n=z5({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),o=Qy(t,{caseSensitive:r});return e.split(o).reduce((s,a,u)=>{const l=n[u],c=s.concat(a);if(l){const d=e.slice(l.index,l.index+l.length);return c.concat(d)}else return c},[])}function K5(e,t){return e.split(t)}function C0(e,t){const{min:r,max:n}=Sf(t);if(t.takeOverflow){const o=n-r+1,i=(e-r)%o;return i<0?r+o+i:r+i}else return e>n?r:e<r?n:e}function Kt(e,t){let r=!1;const n=ze(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),o[i]=s,o},{});return r?new Promise(async(o,i)=>{try{await Promise.all(ze(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(rt(s))}}):n}function jl(e,t){const r=Yn(e).filter(([n,o])=>t(n,o,e));return Ea(r)}function G5(e,t){return jl(e,r=>!t.includes(r))}function Z5(e,t){return jl(e,r=>t.includes(r))}function _d(e){return ze(e).map(t=>e[t])}function Ob(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var Xn;(function(e){e.Upper="upper",e.Lower="lower"})(Xn||(Xn={}));const H5={firstLetterCase:Xn.Lower};function J5(e,t){if(!e.length)return"";const r=e[0];return(t===Xn.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function Y5(e){return e.toLowerCase()!==e.toUpperCase()}function F0(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if(Y5(n)){if(t===Xn.Upper&&n!==n.toUpperCase()||t===Xn.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}function X5(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""}),o=Mb(H5,t);return J5(n,o.firstLetterCase)}function Q5(e){return e.split("").reduce((r,n,o,i)=>{const s=o>0&&i[o-1]||"",a=o<i.length-1&&i[o+1]||"",u=F0(s,Xn.Lower,{rejectNoCaseCharacters:!0})||F0(a,Xn.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!u?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function eD(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function tD({value:e,wrapper:t}){return gr({value:Vf({value:e,suffix:t}),prefix:t})}function bn(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function zf(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class rD{listeners={};universalListeners=new Map;getListenerCount(){return _d(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function o(i,s){r.once&&n(),t(i,s)}return this.universalListeners.set(t,{listener:o,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const o=S.isString(t)?t:t.type,i=()=>this.listeners[o]?.delete(r)||!1;function s(a,u){n.once&&i(),r(a,u)}return hi(this.listeners,o,()=>new Map).set(r,{listener:s,removeListener:i}),i}removeListener(t,r){const n=S.isString(t)?t:t.type,o=this.listeners[n];if(!o)return!1;const i=o.get(r);return i?i.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(o=>{o.listener(t,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(t,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=_d(this.listeners).reduce((n,o)=>{const i=o.size||0;return o.clear(),n+i},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class qf extends rD{}function Kf(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function Vd(e,t,r){return Kf(globalThis,e,t,r)}function Gf(e,t){return Ca(e.title),e.parent?[...Gf(e.parent),Ca(e.parent.title)].concat([]):[]}function Ca(e){return Ob(e).toLowerCase().replaceAll(/\s/g,"-")}function nD({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const oD=/[/?#&=]/;function Bb(e){const t=e.match(oD);return e.trim()?Ca(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const iD={[Bt.ElementExample]:()=>[],[Bt.Page]:e=>[Bb(e.title),...b5(e.controls,e.title)].filter(S.isTruthy),[Bt.Root]:()=>[]},sl="_isBookTreeNode",Rb=new Map;function sD(e){return Rb.get(e)}function aD(e,t){v5(Rb,e,()=>t)}function Yi(e,t){return Lb(e)&&e.entry.entryType===t}function Lb(e){return!!(S.hasKeys(e,[sl,"entry"])&&e[sl])}function uD(){return{[sl]:!0,entry:{entryType:Bt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function lD({entries:e,debug:t}){const r=sD(e);if(r)return r;const n=uD();e.forEach(s=>Zf({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=jb(n),i={tree:n,flattenedNodes:o};return aD(e,i),t&&console.info("element-book tree:",n),i}function cD(e,t,r){if(!t.parent)return e;const n=Wd(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Zf({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Wd(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Gf(t).join(" > ")}`);return o}function Zf({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=iD[t.entryType](t);t.errors.push(...o);const i=cD(e,t,r),s=Ca(t.title),a=i.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[sl]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};i.children[s]=u,p5(t,Bt.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Zf({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function Wd(e,t){const r=Lb(e)?e.fullUrlBreadcrumbs.slice(0,-1):Gf(e);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function jb(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>jb(o));return[e,...r].flat()}function Hf(e,t){return Jf(e,["",...t],void 0)}function Jf(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],s=i&&Jf(i,n,r);return{...e.controls,...s}}function dD(e,t,r){const n={...e};return Jf(n,["",...t],r),n}function Ub(e,t){const r=t?.controls||(Yi(e,Bt.Page)?Kt(e.entry.controls,(o,i)=>i.initValue):{});return{children:Kt(e.children,(o,i)=>Ub(i,t?.children?.[i.urlBreadcrumb])),controls:r}}function we(e){const t={...e,entryType:Bt.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:t.useVerticalExamples,entryType:Bt.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),Bb(n.title)].filter(S.isTruthy)};r.add(n.title),t.elementExamples[Ca(o.title)]=o}}),t}var dr;(function(e){e.Search="search",e.Book="book"})(dr||(dr={}));function zd(e){return e[0]===dr.Book?"":e[1]?decodeURIComponent(e[1]):""}const ss={hash:void 0,paths:[dr.Book],search:void 0};const Wu=globalThis,Yf=Wu.ShadowRoot&&(Wu.ShadyCSS===void 0||Wu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xf=Symbol(),S0=new WeakMap;let _b=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Xf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Yf&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=S0.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&S0.set(r,t))}return t}toString(){return this.cssText}};const Ie=e=>new _b(typeof e=="string"?e:e+"",void 0,Xf),zu=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new _b(r,e,Xf)},fD=(e,t)=>{if(Yf)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Wu.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},T0=Yf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Ie(r)})(e):e;const{is:mD,defineProperty:hD,getOwnPropertyDescriptor:gD,getOwnPropertyNames:pD,getOwnPropertySymbols:yD,getPrototypeOf:bD}=Object,Ul=globalThis,M0=Ul.trustedTypes,vD=M0?M0.emptyScript:"",wD=Ul.reactiveElementPolyfillSupport,fa=(e,t)=>e,al={toAttribute(e,t){switch(t){case Boolean:e=e?vD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Qf=(e,t)=>!mD(e,t),N0={attribute:!0,type:String,converter:al,reflect:!1,useDefault:!1,hasChanged:Qf};Symbol.metadata??=Symbol("metadata"),Ul.litPropertyMetadata??=new WeakMap;let Ri=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=N0){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&hD(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=gD(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:o,set(s){const a=o?.call(this);i?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??N0}static _$Ei(){if(this.hasOwnProperty(fa("elementProperties")))return;const t=bD(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(fa("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fa("properties"))){const r=this.properties,n=[...pD(r),...yD(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(T0(o))}else t!==void 0&&r.push(T0(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fD(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:al).toAttribute(r,n.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,r){const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:al;this._$Em=o;const a=s.fromAttribute(r,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,r,n,o=!1,i){if(t!==void 0){const s=this.constructor;if(o===!1&&(i=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Qf)(i,r)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,i]of n){const{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Ri.elementStyles=[],Ri.shadowRootOptions={mode:"open"},Ri[fa("elementProperties")]=new Map,Ri[fa("finalized")]=new Map,wD?.({ReactiveElement:Ri}),(Ul.reactiveElementVersions??=[]).push("2.1.2");const em=globalThis,P0=e=>e,ul=em.trustedTypes,I0=ul?ul.createPolicy("lit-html",{createHTML:e=>e}):void 0,Vb="$lit$",po=`lit$${Math.random().toFixed(9).slice(2)}$`,Wb="?"+po,$D=`<${Wb}>`,si=document,Fa=()=>si.createComment(""),Sa=e=>e===null||typeof e!="object"&&typeof e!="function",tm=Array.isArray,kD=e=>tm(e)||typeof e?.[Symbol.iterator]=="function",qc=`[ 	
\f\r]`,Hs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O0=/-->/g,B0=/>/g,qo=RegExp(`>|${qc}(?:([^\\s"'>=/]+)(${qc}*=${qc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),R0=/'/g,L0=/"/g,zb=/^(?:script|style|textarea|title)$/i,DD=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),xD=DD(1),Cr=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),j0=new WeakMap,Xo=si.createTreeWalker(si,129);function qb(e,t){if(!tm(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return I0!==void 0?I0.createHTML(t):t}const ED=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=Hs;for(let a=0;a<r;a++){const u=e[a];let l,c,d=-1,f=0;for(;f<u.length&&(s.lastIndex=f,c=s.exec(u),c!==null);)f=s.lastIndex,s===Hs?c[1]==="!--"?s=O0:c[1]!==void 0?s=B0:c[2]!==void 0?(zb.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=qo):c[3]!==void 0&&(s=qo):s===qo?c[0]===">"?(s=o??Hs,d=-1):c[1]===void 0?d=-2:(d=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?qo:c[3]==='"'?L0:R0):s===L0||s===R0?s=qo:s===O0||s===B0?s=Hs:(s=qo,o=void 0);const m=s===qo&&e[a+1].startsWith("/>")?" ":"";i+=s===Hs?u+$D:d>=0?(n.push(l),u.slice(0,d)+Vb+u.slice(d)+po+m):u+po+(d===-2?a:m)}return[qb(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Ta{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const a=t.length-1,u=this.parts,[l,c]=ED(t,r);if(this.el=Ta.createElement(l,n),Xo.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Xo.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Vb)){const f=c[s++],m=o.getAttribute(d).split(po),w=/([.?@])?(.*)/.exec(f);u.push({type:1,index:i,name:w[2],strings:m,ctor:w[1]==="."?CD:w[1]==="?"?FD:w[1]==="@"?SD:_l}),o.removeAttribute(d)}else d.startsWith(po)&&(u.push({type:6,index:i}),o.removeAttribute(d));if(zb.test(o.tagName)){const d=o.textContent.split(po),f=d.length-1;if(f>0){o.textContent=ul?ul.emptyScript:"";for(let m=0;m<f;m++)o.append(d[m],Fa()),Xo.nextNode(),u.push({type:2,index:++i});o.append(d[f],Fa())}}}else if(o.nodeType===8)if(o.data===Wb)u.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(po,d+1))!==-1;)u.push({type:7,index:i}),d+=po.length-1}i++}}static createElement(t,r){const n=si.createElement("template");return n.innerHTML=t,n}}function as(e,t,r=e,n){if(t===Cr)return t;let o=n!==void 0?r._$Co?.[n]:r._$Cl;const i=Sa(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=o:r._$Cl=o),o!==void 0&&(t=as(e,o._$AS(e,t.values),o,n)),t}class AD{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=(t?.creationScope??si).importNode(r,!0);Xo.currentNode=o;let i=Xo.nextNode(),s=0,a=0,u=n[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new Fs(i,i.nextSibling,this,t):u.type===1?l=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(l=new TD(i,this,t)),this._$AV.push(l),u=n[++a]}s!==u?.index&&(i=Xo.nextNode(),s++)}return Xo.currentNode=si,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Fs{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=as(this,t,r),Sa(t)?t===te||t==null||t===""?(this._$AH!==te&&this._$AR(),this._$AH=te):t!==this._$AH&&t!==Cr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):kD(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==te&&Sa(this._$AH)?this._$AA.nextSibling.data=t:this.T(si.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ta.createElement(qb(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{const i=new AD(o,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(t){let r=j0.get(t.strings);return r===void 0&&j0.set(t.strings,r=new Ta(t)),r}k(t){tm(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Fs(this.O(Fa()),this.O(Fa()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=P0(t).nextSibling;P0(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class _l{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=te,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=te}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=as(this,t,r,0),s=!Sa(t)||t!==this._$AH&&t!==Cr,s&&(this._$AH=t);else{const a=t;let u,l;for(t=i[0],u=0;u<i.length-1;u++)l=as(this,a[n+u],r,u),l===Cr&&(l=this._$AH[u]),s||=!Sa(l)||l!==this._$AH[u],l===te?t=te:t!==te&&(t+=(l??"")+i[u+1]),this._$AH[u]=l}s&&!o&&this.j(t)}j(t){t===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class CD extends _l{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===te?void 0:t}}class FD extends _l{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==te)}}class SD extends _l{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=as(this,t,r,0)??te)===Cr)return;const n=this._$AH,o=t===te&&n!==te||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==te&&(n===te||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class TD{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){as(this,t)}}const MD={I:Fs},ND=em.litHtmlPolyfillSupport;ND?.(Ta,Fs),(em.litHtmlVersions??=[]).push("3.3.2");const PD=(e,t,r)=>{const n=r?.renderBefore??t;let o=n._$litPart$;if(o===void 0){const i=r?.renderBefore??null;n._$litPart$=o=new Fs(t.insertBefore(Fa(),i),i,void 0,r??{})}return o._$AI(e),o};const rm=globalThis;let ma=class extends Ri{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=PD(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Cr}};ma._$litElement$=!0,ma.finalized=!0,rm.litElementHydrateSupport?.({LitElement:ma});const ID=rm.litElementPolyfillSupport;ID?.({LitElement:ma});(rm.litElementVersions??=[]).push("4.2.2");function Fr(e){if(S.isObject(e))return Kt(e,(r,n)=>{if(!S.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Q5(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,s=r.startsWith("--")?Ie(r):r.startsWith("-")?zu`-${Ie(r)}`:zu`--${Ie(r)}`;return{name:s,value:zu`var(${s}, ${Ie(i)})`,default:String(i)}});throw new TypeError(`Invalid setup input for '${Fr.name}' function.`)}function Kb({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function OD({onElement:e,forCssVar:t,includeCascade:r}){return(r?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(t.name)).trim()}const Ee=Fr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),BD={nav:{hover:{background:Ee["element-book-nav-hover-background-color"],foreground:Ee["element-book-nav-hover-foreground-color"]},active:{background:Ee["element-book-nav-active-background-color"],foreground:Ee["element-book-nav-active-foreground-color"]},selected:{background:Ee["element-book-nav-selected-background-color"],foreground:Ee["element-book-nav-selected-foreground-color"]}},accent:{icon:Ee["element-book-accent-icon-color"]},page:{background:Ee["element-book-page-background-color"],backgroundFaint1:Ee["element-book-page-background-faint-level-1-color"],backgroundFaint2:Ee["element-book-page-background-faint-level-2-color"],foreground:Ee["element-book-page-foreground-color"],foregroundFaint1:Ee["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Ee["element-book-page-foreground-faint-level-2-color"]}};function RD(e,t){Gb(e,t,BD)}function qd(e){return S.hasKey(e,"_$cssResult$")}function U0(e){return S.hasKeys(e,["name","value","default"])&&S.isString(e.default)&&qd(e.name)&&qd(e.value)}function Gb(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(qd(o)){if(!U0(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Kb({forCssVar:i,onElement:e,toValue:String(o)})}else{if(U0(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Gb(e,o,i)}})}function oa(e,t){let r=e.length,n,o,i=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,i=!0),Array.isArray(t[0])?o=t:(o=t.length>0?t.map(c=>[c]):[[]],s=!0);let a=o[0].length,u=o[0].map((c,d)=>o.map(f=>f[d])),l=n.map(c=>u.map(d=>{let f=0;if(!Array.isArray(c)){for(let m of d)f+=c*m;return f}for(let m=0;m<c.length;m++)f+=c[m]*(d[m]||0);return f}));return r===1&&i&&(l=l[0]),a===1&&s?r===1&&i?l[0]:l.map(c=>c[0]):l}function Kc(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function tt(e,t,r=[0,0,0]){const n=Kc(e,t[0]),o=Kc(e,t[1]),i=Kc(e,t[2]);return r[0]=n,r[1]=o,r[2]=i,r}function Ss(e){return wo(e)==="string"}function wo(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function nm(e,{precision:t=16,unit:r}){return Ce(e)?"none":(e=+om(e,t),e+(r??""))}function Ce(e){return e===null}function ft(e){return Ce(e)?0:e}function om(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const o=10**(t-n);return Math.floor(e*o+.5)/o}function Ma(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Zb(e,t,r){return(r-e)/(t-e)}function Kd(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:Ma(t[0],t[1],Zb(e[0],e[1],r))}function Vl(e,t,r){return Math.max(Math.min(r,t),e)}function Wl(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function mt(e,t){return Wl(Math.abs(e)**t,e)}function im(e,t){return t===0?0:e/t}function Hb(e,t,r=0,n=e.length){for(;r<n;){const o=r+n>>1;e[o]<t?r=o+1:n=o}return r}function us(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===r)return!0;if(!o||o==="Object")return!1;e=n}return!1}var LD=Object.freeze({__proto__:null,bisectLeft:Hb,clamp:Vl,copySign:Wl,interpolate:Ma,interpolateInv:Zb,isInstance:us,isNone:Ce,isString:Ss,mapRange:Kd,multiplyMatrices:oa,multiply_v3_m3x3:tt,serializeNumber:nm,skipNone:ft,spow:mt,toPrecision:om,type:wo,zdiv:im});class jD{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const xo=new jD;var Sr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};let _0=class{type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:o,max:i}=n.groups;(o||i)&&(this.range=[+o,+i])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),Kd(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return t=Kd(this.coordRange,n,t),nm(t,{unit:o,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return us(t,this)?t:new this(t,r)}};const Gc=Symbol("instance");class ll{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Gc]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let i=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>_0.get(s,i))}))}serializeCoords(t,r,n){return n=t.map((o,i)=>_0.get(n?.[i]??this.coords[i][0],this.spaceCoords[i])),t.map((o,i)=>n[i].serialize(o,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,o],i)=>{let s=t[i];if(Ce(s)||isNaN(s))return s;let a=r[i],u=this.coords[i].find(l=>l.type==a);if(!u){let l=o.name||n;throw new TypeError(`${a??s?.raw??s} not allowed for ${l} in ${this.name}()`)}return s=u.resolve(s),u.range&&(r[i]=u.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||us(t,this)?t:t[Gc]?t[Gc]:new ll(t,...r)}}const nr={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Gd(e){return Array.isArray(e)?e:nr[e]}function cl(e,t,r,n={}){if(e=Gd(e),t=Gd(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(xo.run("chromatic-adaptation-start",o),o.M||(o.W1===nr.D65&&o.W2===nr.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===nr.D50&&o.W2===nr.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),xo.run("chromatic-adaptation-end",o),o.M)return tt(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Jb(e,t){let r={str:String(e)?.trim(),options:t};if(xo.run("parse-start",r),r.color)return r.color;r.parsed=_D(r.str);let n,o=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let i=r.parsed.name,s,a,u=r.parsed.args,l=u.map((f,m)=>r.parsed.argMeta[m]?.type);if(i==="color"){let f=u.shift();l.shift();let m=f.startsWith("--")?f.substring(2):`--${f}`,w=[f,m];if(s=V.findFormat({name:i,id:w,type:"function"}),!s){let v,E=f in V.registry?f:m;if(E in V.registry){let k=V.registry[E].formats?.color?.id;k&&(v=`Did you mean ${e.replace("color("+f,"color("+k)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(v??"Missing a plugin?"))}a=s.space,s.id.startsWith("--")&&!f.startsWith("--")&&Sr.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${f}).`),f.startsWith("--")&&!s.id.startsWith("--")&&Sr.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${f}).`)}else s=V.findFormat({name:i,type:"function"}),a=s.space;o&&Object.assign(o,{format:s,formatId:s.name,types:l,commas:r.parsed.commas});let c=1;r.parsed.lastAlpha&&(c=r.parsed.args.pop(),o&&(o.alphaType=l.pop()));let d=s.coords.length;if(u.length!==d)throw new TypeError(`Expected ${d} coordinates for ${a.id} in ${r.str}), got ${u.length}`);u=s.coerceCoords(u,l),n={spaceId:a.id,coords:u,alpha:c}}else e:for(let i of V.all)for(let s in i.formats){let a=i.formats[s];if(a.type!=="custom"||a.test&&!a.test(r.str))continue;let u=i.getFormat(a),l=u.parse(r.str);if(l){o&&Object.assign(o,{format:u,formatId:s}),n=l;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=Ce(n.alpha)?n.alpha:n.alpha===void 0?1:Vl(0,n.alpha,1),n}const Yb={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},dl={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Yb).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function UD(e){let t={},r=e.match(dl.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*Yb[r]):dl.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}function _D(e){if(!e)return;e=e.trim();let t=e.match(dl.function);if(t){let r=[],n=[],o=!1,i=t[1].toLowerCase(),s=t[2].replace(dl.singleArgument,(a,u)=>{let{value:l,meta:c}=UD(u);return(a.startsWith("/")||i!=="color"&&r.length===3)&&(o=!0),r.push(l),n.push(c),""});return{name:i,args:r,argMeta:n,lastAlpha:o,commas:s.includes(","),rawName:t[1],rawArgs:t[2]}}}function ee(e,t){if(Array.isArray(e))return e.map(n=>ee(n,t));if(!e)throw new TypeError("Empty color reference");Ss(e)&&(e=Jb(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=V.get(r)),e.alpha===void 0&&(e.alpha=1),e}const VD=75e-6;class V{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?V.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let o in r)"name"in r[o]||(r[o].name=o);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Gd(n),this.formats=t.formats??{};for(let o in this.formats){let i=this.formats[o];i.type||="function",i.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:V.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,i)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:WD(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),xo.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=VD}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let s=n[i];if(s.type!=="angle"&&s.range){if(Ce(o))return!0;let[a,u]=s.range;return(a===void 0||o>=a-r)&&(u===void 0||o<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=ll.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=ee(t);[t,r]=[a.space,a.coords]}if(t=V.get(t),this.equals(t))return r;r=r.map(a=>Ce(a)?0:a);let n=this.path,o=t.path,i,s;for(let a=0;a<n.length&&n[a].equals(o[a]);a++)i=n[a],s=a;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<o.length;a++)r=o[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=ee(t);[t,r]=[n.space,n.coords]}return t=V.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push(o?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(V.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||us(t,this))return t;if(wo(t)==="string"){let o=V.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return V.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=V.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[o,i]of Object.entries(n.formats)){i.name??=o,i.type??="function";let s=(!t.name||i.name===t.name)&&(!t.type||i.type===t.type);if(t.id){let a=i.ids||[i.id],u=Array.isArray(t.id)?t.id:[t.id];s&&=u.some(l=>a.includes(l))}if(s){let a=ll.get(i,n);return a!==i&&(n.formats[i.name]=a),a}}return null}static resolveCoord(t,r){let n=wo(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=V.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=wo(i),n==="number"||n==="string"&&i>=0){let u=Object.entries(o.coords)[i];if(u)return{space:o,id:u[0],index:i,...u[1]}}o=V.get(o);let s=i.toLowerCase(),a=0;for(let u in o.coords){let l=o.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:o,id:u,index:a,...l};a++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function WD(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Rt=new V({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Zt extends V{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Rt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=tt(r,t.toXYZ_M);return this.white!==this.base.white&&(n=cl(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=cl(this.base.white,this.white,r),tt(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function Xb(e,t={}){if(Array.isArray(e))return e.map(u=>Xb(u,t));let{cssProperty:r="background-color",element:n,...o}=t,i=null;try{return ee(e,o)}catch(u){i=u}let{CSS:s,getComputedStyle:a}=globalThis;if(Ss(e)&&n&&s&&a&&s.supports(r,e)){let u=n.style[r];e!==u&&(n.style[r]=e);let l=a(n).getPropertyValue(r);if(e!==u&&(n.style[r]=u),l!==e)try{return ee(l,o)}catch(c){i=c}else i={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=i),null}function Za(e,t){e=ee(e);let r=V.get(t,t?.space),n=t?.precision,o;return!r||e.space.equals(r)?o=e.coords.slice():o=r.from(e),n===void 0?o:o.map(i=>om(i,n))}function Dr(e,t){if(e=ee(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=V.resolveCoord(t,e.space);return Za(e,r)[n]}function sm(e,t,r,n){return e=ee(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=V.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}sm.returns="color";function Qn(e,t,r){if(e=ee(e),arguments.length===2&&wo(arguments[1])==="object"){let n=arguments[1];for(let o in n)Qn(e,o,n[o])}else if(typeof r=="function"&&(r=r(Dr(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:o}=V.resolveCoord(t,e.space),i=Za(e,n);i[o]=r,sm(e,n,i)}return e}Qn.returns="color";var am=new V({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Rt,fromBase:e=>cl(Rt.white,"D50",e),toBase:e=>cl("D50",Rt.white,e)});const zD=216/24389,V0=24/116,ku=24389/27;let Zc=nr.D50;var xr=new V({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Zc,base:am,fromBase(e){let r=e.map((s,a)=>s/Zc[a]).map(s=>s>zD?Math.cbrt(s):(ku*s+16)/116),n=116*r[1]-16,o=500*(r[0]-r[1]),i=200*(r[1]-r[2]);return[n,o,i]},toBase(e){let[t,r,n]=e,o=[];return o[1]=(t+16)/116,o[0]=r/500+o[1],o[2]=o[1]-n/200,[o[0]>V0?Math.pow(o[0],3):(116*o[0]-16)/ku,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ku,o[2]>V0?Math.pow(o[2],3):(116*o[2]-16)/ku].map((s,a)=>s*Zc[a])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Hr(e){return typeof e!="number"?e:(e%360+360)%360}function Qb(e,t){let[r,n]=t,o=Ce(r),i=Ce(n);if(o&&i)return[r,n];if(o?r=n:i&&(n=r),e==="raw")return t;r=Hr(r),n=Hr(n);let s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var Tr=new V({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:xr,fromBase(e){if(this.ε===void 0){let a=Object.values(this.base.coords)[1].refRange,u=a[1]-a[0];this.ε=u/1e5}let[t,r,n]=e,o=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,i=o?null:Hr(Math.atan2(n,r)*180/Math.PI),s=o?0:Math.sqrt(r**2+n**2);return[t,s,i]},toBase(e){let[t,r,n]=e,o=null,i=null;return Ce(n)||(r=r<0?0:r,o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const W0=25**7,fl=Math.PI,z0=180/fl,Ni=fl/180;function q0(e){const t=e*e;return t*t*t*e}function e1(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){[e,t]=ee([e,t]);let[i,s,a]=xr.from(e),u=Tr.from(xr,[i,s,a])[1],[l,c,d]=xr.from(t),f=Tr.from(xr,[l,c,d])[1];u<0&&(u=0),f<0&&(f=0);let m=(u+f)/2,w=q0(m),v=.5*(1-Math.sqrt(w/(w+W0))),E=(1+v)*s,k=(1+v)*c,D=Math.sqrt(E**2+a**2),M=Math.sqrt(k**2+d**2),O=E===0&&a===0?0:Math.atan2(a,E),j=k===0&&d===0?0:Math.atan2(d,k);O<0&&(O+=2*fl),j<0&&(j+=2*fl),O*=z0,j*=z0;let Z=l-i,H=M-D,ae=j-O,_e=O+j,Et=Math.abs(ae),Pt;D*M===0?Pt=0:Et<=180?Pt=ae:ae>180?Pt=ae-360:ae<-180?Pt=ae+360:Sr.warn("the unthinkable has happened");let vr=2*Math.sqrt(M*D)*Math.sin(Pt*Ni/2),$n=(i+l)/2,en=(D+M)/2,Lo=q0(en),Jt;D*M===0?Jt=_e:Et<=180?Jt=_e/2:_e<360?Jt=(_e+360)/2:Jt=(_e-360)/2;let Ai=($n-50)**2,Ci=1+.015*Ai/Math.sqrt(20+Ai),io=1+.045*en,Yt=1;Yt-=.17*Math.cos((Jt-30)*Ni),Yt+=.24*Math.cos(2*Jt*Ni),Yt+=.32*Math.cos((3*Jt+6)*Ni),Yt-=.2*Math.cos((4*Jt-63)*Ni);let Ve=1+.015*en*Yt,Xt=30*Math.exp(-1*((Jt-275)/25)**2),Tn=2*Math.sqrt(Lo/(Lo+W0)),Lr=-1*Math.sin(2*Xt*Ni)*Tn,kn=(Z/(r*Ci))**2;return kn+=(H/(n*io))**2,kn+=(vr/(o*Ve))**2,kn+=Lr*(H/(n*io))*(vr/(o*Ve)),Math.sqrt(kn)}const qD=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],KD=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],GD=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],$o=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var fn=new V({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Rt,fromBase(e){let t=tt(e,qD);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),tt(t,GD,t)},toBase(e){let t=tt(e,$o);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,tt(t,KD,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Zd(e,t){[e,t]=ee([e,t]);let[r,n,o]=fn.from(e),[i,s,a]=fn.from(t),u=r-i,l=n-s,c=o-a;return Math.sqrt(u**2+l**2+c**2)}const ZD=75e-6;function ni(e,t,{epsilon:r=ZD}={}){e=ee(e),t||(t=e.space),t=V.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ls(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function t1(e,t,r="lab"){r=V.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,s,a)=>{let u=o[a];return Ce(s)||Ce(u)?i:i+(u-s)**2},0))}function HD(e,t){return t1(e,t,"lab")}const JD=Math.PI,K0=JD/180;function YD(e,t,{l:r=2,c:n=1}={}){[e,t]=ee([e,t]);let[o,i,s]=xr.from(e),[,a,u]=Tr.from(xr,[o,i,s]),[l,c,d]=xr.from(t),f=Tr.from(xr,[l,c,d])[1];a<0&&(a=0),f<0&&(f=0);let m=o-l,w=a-f,v=i-c,E=s-d,k=v**2+E**2-w**2,D=.511;o>=16&&(D=.040975*o/(1+.01765*o));let M=.0638*a/(1+.0131*a)+.638,O;Ce(u)&&(u=0),u>=164&&u<=345?O=.56+Math.abs(.2*Math.cos((u+168)*K0)):O=.36+Math.abs(.4*Math.cos((u+35)*K0));let j=Math.pow(a,4),Z=Math.sqrt(j/(j+1900)),H=M*(Z*O+1-Z),ae=(m/(r*D))**2;return ae+=(w/(n*M))**2,ae+=k/H**2,Math.sqrt(ae)}const G0=203;var um=new V({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Rt,fromBase(e){return e.map(t=>t*G0)},toBase(e){return e.map(t=>t/G0)}});const Du=1.15,xu=.66,Z0=2610/2**14,XD=2**14/2610,H0=3424/2**12,J0=2413/2**7,Y0=2392/2**7,QD=1.7*2523/2**5,X0=2**5/(1.7*2523),Eu=-.56,Hc=16295499532821565e-27,ex=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],tx=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],rx=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],nx=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var r1=new V({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:um,fromBase(e){let[t,r,n]=e,o=Du*t-(Du-1)*n,i=xu*r-(xu-1)*t,a=tt([o,i,n],ex).map(function(f){let m=H0+J0*mt(f/1e4,Z0),w=1+Y0*mt(f/1e4,Z0);return mt(m/w,QD)}),[u,l,c]=tt(a,rx);return[(1+Eu)*u/(1+Eu*u)-Hc,l,c]},toBase(e){let[t,r,n]=e,o=(t+Hc)/(1+Eu-Eu*(t+Hc)),s=tt([o,r,n],nx).map(function(f){let m=H0-mt(f,X0),w=Y0*mt(f,X0)-J0;return 1e4*mt(m/w,XD)}),[a,u,l]=tt(s,tx),c=(a+(Du-1)*l)/Du,d=(u+(xu-1)*c)/xu;return[c,d,l]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),Hd=new V({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:r1,fromBase:Tr.fromBase,toBase:Tr.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function ox(e,t){[e,t]=ee([e,t]);let[r,n,o]=Hd.from(e),[i,s,a]=Hd.from(t),u=r-i,l=n-s;Ce(o)&&Ce(a)?(o=0,a=0):Ce(o)?o=a:Ce(a)&&(a=o);let c=o-a,d=2*Math.sqrt(n*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+d**2)}const n1=3424/4096,o1=2413/128,i1=2392/128,Q0=2610/16384,ix=2523/32,sx=16384/2610,eg=32/2523,ax=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],ux=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],lx=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],cx=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Jd=new V({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:um,fromBase(e){let t=tt(e,ax);return dx(t)},toBase(e){let t=fx(e);return tt(t,cx)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function dx(e){let t=e.map(function(r){let n=n1+o1*(r/1e4)**Q0,o=1+i1*(r/1e4)**Q0;return(n/o)**ix});return tt(t,ux)}function fx(e){return tt(e,lx).map(function(n){let o=Math.max(n**eg-n1,0),i=o1-i1*n**eg;return 1e4*(o/i)**sx})}function mx(e,t){[e,t]=ee([e,t]);let[r,n,o]=Jd.from(e),[i,s,a]=Jd.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-s)**2+(o-a)**2)}function hx(e,t){[e,t]=ee([e,t]);let r=2,[n,o,i]=fn.from(e),[s,a,u]=fn.from(t),l=n-s,c=r*(o-a),d=r*(i-u);return Math.sqrt(l**2+c**2+d**2)}const gx=nr.D65,s1=.42,tg=1/s1,Jc=2*Math.PI,a1=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],px=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],yx=[[460,451,288],[460,-891,-261],[460,-220,-6300]],bx={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Go={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},vx=180/Math.PI,rg=Math.PI/180;function u1(e,t){return e.map(n=>{const o=mt(t*Math.abs(n)*.01,s1);return 400*Wl(o,n)/(o+27.13)})}function wx(e,t){const r=100/t*27.13**tg;return e.map(n=>{const o=Math.abs(n);return Wl(r*mt(o/(400-o),tg),n)})}function $x(e){let t=Hr(e);t<=Go.h[0]&&(t+=360);const r=Hb(Go.h,t)-1,[n,o]=Go.h.slice(r,r+2),[i,s]=Go.e.slice(r,r+2),a=Go.H[r],u=(t-n)/i;return a+100*u/(u+(o-t)/s)}function kx(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,o]=Go.h.slice(r,r+2),[i,s]=Go.e.slice(r,r+2);return Hr((t*(s*n-i*o)-100*n*s)/(t*(s-i)-100*s))}function l1(e,t,r,n,o){const i={};i.discounting=o,i.refWhite=e,i.surround=n;const s=e.map(E=>E*100);i.la=t,i.yb=r;const a=s[1],u=tt(s,a1);let l=bx[i.surround];const c=l[0];i.c=l[1],i.nc=l[2];const f=(1/(5*i.la+1))**4;i.fl=f*i.la+.1*(1-f)*(1-f)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/a,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const m=Math.max(Math.min(c*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=u.map(E=>Ma(1,a/E,m)),i.dRgbInv=i.dRgb.map(E=>1/E);const w=u.map((E,k)=>E*i.dRgb[k]),v=u1(w,i.fl);return i.aW=i.nbb*(2*v[0]+v[1]+.05*v[2]),i}const ng=l1(gx,64/Math.PI*.2,20,"average",!1);function Yd(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Hr(e.h)*rg:r=kx(e.H)*rg;const n=Math.cos(r),o=Math.sin(r);let i=0;e.J!==void 0?i=mt(e.J,1/2)*.1:e.Q!==void 0&&(i=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/i:e.M!==void 0?s=e.M/t.flRoot/i:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=mt(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*mt(i,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,d=l/t.nbb,f=23*(d+.305)*im(a,23*c+a*(11*n+108*o)),m=f*n,w=f*o,v=wx(tt([d,m,w],yx).map(E=>E*1/1403),t.fl);return tt(v.map((E,k)=>E*t.dRgbInv[k]),px).map(E=>E/100)}function c1(e,t){const r=e.map(M=>M*100),n=u1(tt(r,a1).map((M,O)=>M*t.dRgb[O]),t.fl),o=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(i,o)%Jc+Jc)%Jc,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*im(a*Math.sqrt(o**2+i**2),n[0]+n[1]+1.05*n[2]+.305),l=mt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),d=mt(c/t.aW,.5*t.c*t.z),f=100*mt(d,2),m=4/t.c*d*(t.aW+4)*t.flRoot,w=l*d,v=w*t.flRoot,E=Hr(s*vx),k=$x(E),D=50*mt(t.c*l/(t.aW+4),1/2);return{J:f,C:w,h:E,s:D,Q:m,M:v,H:k}}var Dx=new V({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Rt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=c1(e,ng),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return Yd({J:e[0],M:e[1],h:e[2]},ng)}});const xx=nr.D65,Ex=216/24389,d1=24389/27;function Ax(e){return 116*(e>Ex?Math.cbrt(e):(d1*e+16)/116)-16}function Xd(e){return e>8?Math.pow((e+16)/116,3):e/d1}function Cx(e,t){let[r,n,o]=e,i=[],s=0;if(o===0)return[0,0,0];let a=Xd(o);o>0?s=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:s=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const u=2e-12,l=15;let c=0,d=1/0;for(;c<=l;){i=Yd({J:s,C:n,h:r},t);const f=Math.abs(i[1]-a);if(f<d){if(f<=u)return i;d=f}s=s-(i[1]-a)*s/(2*i[1]),c+=1}return Yd({J:s,C:n,h:r},t)}function Fx(e,t){const r=Ax(e[1]);if(r===0)return[0,0,0];const n=c1(e,lm);return[Hr(n.h),n.C,r]}const lm=l1(xx,200/Math.PI*Xd(50),Xd(50)*100,"average",!1);var Na=new V({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Rt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=Fx(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return Cx(e,lm)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Sx=Math.PI/180,og=[1,.007,.0228];function ig(e){e[1]<0&&(e=Na.fromBase(Na.toBase(e)));const t=Math.log(Math.max(1+og[2]*e[1]*lm.flRoot,1))/og[2],r=e[0]*Sx,n=t*Math.cos(r),o=t*Math.sin(r);return[e[2],n,o]}function Tx(e,t){[e,t]=ee([e,t]);let[r,n,o]=ig(Na.from(e)),[i,s,a]=ig(Na.from(t));return Math.sqrt((r-i)**2+(n-s)**2+(o-a)**2)}var cs={deltaE76:HD,deltaECMC:YD,deltaE2000:e1,deltaEJz:ox,deltaEITP:mx,deltaEOK:Zd,deltaEOK2:hx,deltaEHCT:Tx};function Mx(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const sg={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Eo(e,{method:t=Sr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:i=void 0}={}){if(e=ee(e),Ss(arguments[1])?r=arguments[1]:r||(r=e.space),r=V.get(r),ni(e,r,{epsilon:0}))return e;let s;if(t==="css")s=Nx(e,{space:r});else{if(t!=="clip"&&!ni(e,r)){Object.prototype.hasOwnProperty.call(sg,t)&&({method:t,jnd:o,deltaEMethod:n,blackWhiteClamp:i}=sg[t]);let a=e1;if(n!==""){for(let l in cs)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=cs[l];break}}o===0&&(o=1e-16);let u=Eo(Re(e,r),{method:"clip",space:r});if(a(e,u)>o){if(i&&Object.keys(i).length===3){let D=V.resolveCoord(i.channel),M=Dr(Re(e,D.space),D.id);if(Ce(M)&&(M=0),M>=i.max)return Re({space:"xyz-d65",coords:nr.D65},e.space);if(M<=i.min)return Re({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=V.resolveCoord(t),c=l.space,d=l.id,f=Re(e,c);f.coords.forEach((D,M)=>{Ce(D)&&(f.coords[M]=0)});let w=(l.range||l.refRange)[0],v=Mx(o),E=w,k=Dr(f,d);for(;k-E>v;){let D=ls(f);D=Eo(D,{space:r,method:"clip"}),a(f,D)-o<v?E=Dr(f,d):k=Dr(f,d),Qn(f,d,(E+k)/2)}s=Re(f,r)}else s=u}else s=Re(e,r);if(t==="clip"||!ni(s,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,d]=a[l];return c!==void 0&&(u=Math.max(c,u)),d!==void 0&&(u=Math.min(u,d)),u})}}return r!==e.space&&(s=Re(s,e.space)),e.coords=s.coords,e}Eo.returns="color";const ag={WHITE:{space:fn,coords:[1,0,0],alpha:1},BLACK:{space:fn,coords:[0,0,0],alpha:1}};function Nx(e,{space:t}={}){e=ee(e),t||(t=e.space),t=V.get(t);const o=V.get("oklch");if(t.isUnbounded)return Re(e,t);const i=Re(e,o);let s=i.coords[0];if(s>=1){const w=Re(ag.WHITE,t);return w.alpha=e.alpha,Re(w,t)}if(s<=0){const w=Re(ag.BLACK,t);return w.alpha=e.alpha,Re(w,t)}if(ni(i,t,{epsilon:0}))return Re(i,t);function a(w){const v=Re(w,t),E=Object.values(t.coords);return v.coords=v.coords.map((k,D)=>{if("range"in E[D]){const[M,O]=E[D].range;return Vl(M,k,O)}return k}),v}let u=0,l=i.coords[1],c=!0,d=ls(i),f=a(d),m=Zd(f,d);if(m<.02)return f;for(;l-u>1e-4;){const w=(u+l)/2;if(d.coords[1]=w,c&&ni(d,t,{epsilon:0}))u=w;else if(f=a(d),m=Zd(f,d),m<.02){if(.02-m<1e-4)break;c=!1,u=w}else l=w}return f}function Re(e,t,{inGamut:r}={}){e=ee(e),t=V.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Eo(o,r===!0?void 0:r)),o}Re.returns="color";function ha(e,t={}){let{precision:r=Sr.precision,format:n,inGamut:o=!0,coords:i,alpha:s,commas:a}=t,u,l=ee(e),c=n,d=l.parseMeta;d&&!n&&(d.format.canSerialize()&&(n=d.format,c=d.formatId),i??=d.types,s??=d.alphaType,a??=d.commas),c&&(n=l.space.getFormat(n)??V.findFormat(c)),n||(n=l.space.getFormat("default")??V.DEFAULT_FORMAT,c=n.name),n&&n.space&&n.space!==l.space&&(l=Re(l,n.space));let f=l.coords.slice();if(o||=n.toGamut,o&&!ni(l)&&(f=Eo(ls(l),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)u=n.serialize(f,l.alpha,t);else throw new TypeError(`format ${c} can only be used to parse colors, not for serialization`);else{let m=n.name||"color",w=n.serializeCoords(f,r,i);if(m==="color"){let M=n.id||n.ids?.[0]||l.space.cssId||l.space.id;w.unshift(M)}let v=l.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let E=s?.type??"<number>",k=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&v<1,D="";if(a??=n.commas,k){if(r!==null){let M;E==="<percentage>"&&(M="%",v*=100),v=nm(v,{precision:r,unit:M})}D=`${a?",":" /"} ${v}`}u=`${m}(${w.join(a?", ":" ")}${D})`}return u}const Px=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Ix=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Pa=new Zt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Px,fromXYZ_M:Ix}),f1=new Zt({id:"rec2020",name:"REC.2020",base:Pa,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const Ox=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Bx=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var m1=new Zt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Ox,fromXYZ_M:Bx});const Rx=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],xt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var h1=new Zt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Rx,fromXYZ_M:xt}),ug={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let lg=Array(3).fill("<percentage> | <number>[0, 255]"),cg=Array(3).fill("<number>[0, 255]");var ai=new Zt({id:"srgb",name:"sRGB",base:h1,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:lg},rgb_number:{name:"rgb",commas:!0,coords:cg,alpha:!1},color:{},rgba:{coords:lg,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:cg},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let o=r&&e.every(s=>s%17===0);return"#"+e.map(s=>o?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=ug.black,t.alpha=0):t.coords=ug[e],t.coords)return t}}}}),g1=new Zt({id:"p3",cssId:"display-p3",name:"P3",base:m1,fromBase:ai.fromBase,toBase:ai.toBase});Sr.display_space=ai;let Lx;if(typeof CSS<"u"&&CSS.supports)for(let e of[xr,f1,g1]){let t=e.getMinCoords(),n=ha({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Sr.display_space=e;break}}function jx(e,{space:t=Sr.display_space,...r}={}){e=ee(e);let n=ha(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Sr.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(Ce)||Ce(e.alpha))&&!(Lx??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=ls(e),o.coords=o.coords.map(ft),o.alpha=ft(o.alpha),n=ha(o,r),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=Re(o,t),n=new String(ha(o,r)),n.color=o}return n}function Ux(e,t,{space:r,hue:n="shorter"}={}){e=ee(e),r||=e.space,r=V.get(r);let o=Object.values(r.coords);[e,t]=[e,t].map(l=>Re(l,r));let[i,s]=[e,t].map(l=>l.coords),a=i.map((l,c)=>{let d=o[c],f=s[c];return d.type==="angle"&&([l,f]=Qb(n,[l,f])),dg(l,f)}),u=dg(e.alpha,t.alpha);return{space:r,coords:a,alpha:u}}function dg(e,t){return Ce(e)||Ce(t)?e===t?null:0:e-t}function _x(e,t){return e=ee(e),t=ee(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Ao(e){return Dr(e,[Rt,"y"])}function p1(e,t){Qn(e,[Rt,"y"],t)}function Vx(e){Object.defineProperty(e.prototype,"luminance",{get(){return Ao(this)},set(t){p1(this,t)}})}var Wx=Object.freeze({__proto__:null,getLuminance:Ao,register:Vx,setLuminance:p1});function zx(e,t){e=ee(e),t=ee(t);let r=Math.max(Ao(e),0),n=Math.max(Ao(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const qx=.56,Kx=.57,Gx=.62,Zx=.65,fg=.022,Hx=1.414,Jx=.1,Yx=5e-4,Xx=1.14,mg=.027,Qx=1.14;function hg(e){return e>=fg?e:e+(fg-e)**Hx}function Pi(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function eE(e,t){t=ee(t),e=ee(e);let r,n,o,i,s,a;t=Re(t,"srgb"),[i,s,a]=t.coords.map(m=>Ce(m)?0:m);let u=Pi(i)*.2126729+Pi(s)*.7151522+Pi(a)*.072175;e=Re(e,"srgb"),[i,s,a]=e.coords.map(m=>Ce(m)?0:m);let l=Pi(i)*.2126729+Pi(s)*.7151522+Pi(a)*.072175,c=hg(u),d=hg(l),f=d>c;return Math.abs(d-c)<Yx?n=0:f?(r=d**qx-c**Kx,n=r*Xx):(r=d**Zx-c**Gx,n=r*Qx),Math.abs(n)<Jx?o=0:n>0?o=n-mg:o=n+mg,o*100}function tE(e,t){e=ee(e),t=ee(t);let r=Math.max(Ao(e),0),n=Math.max(Ao(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const rE=5e4;function nE(e,t){e=ee(e),t=ee(t);let r=Math.max(Ao(e),0),n=Math.max(Ao(t),0);return n>r&&([r,n]=[n,r]),n===0?rE:(r-n)/n}function oE(e,t){e=ee(e),t=ee(t);let r=Dr(e,[xr,"l"]),n=Dr(t,[xr,"l"]);return Math.abs(r-n)}const iE=216/24389,gg=24/116,Au=24389/27;let Yc=nr.D65;var Qd=new V({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Yc,base:Rt,fromBase(e){let r=e.map((n,o)=>n/Yc[o]).map(n=>n>iE?Math.cbrt(n):(Au*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>gg?Math.pow(t[0],3):(116*t[0]-16)/Au,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Au,t[2]>gg?Math.pow(t[2],3):(116*t[2]-16)/Au].map((n,o)=>n*Yc[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const Xc=Math.pow(5,.5)*.5+.5;function sE(e,t){e=ee(e),t=ee(t);let r=Dr(e,[Qd,"l"]),n=Dr(t,[Qd,"l"]),o=Math.abs(Math.pow(r,Xc)-Math.pow(n,Xc)),i=Math.pow(o,1/Xc)*Math.SQRT2-40;return i<7.5?0:i}var qu=Object.freeze({__proto__:null,contrastAPCA:eE,contrastDeltaPhi:sE,contrastLstar:oE,contrastMichelson:tE,contrastWCAG21:zx,contrastWeber:nE});function aE(e,t,r){Ss(r)&&(r={algorithm:r});let{algorithm:n,...o}=r||{};if(!n){let i=Object.keys(qu).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=ee(e),t=ee(t);for(let i in qu)if("contrast"+n.toLowerCase()===i.toLowerCase())return qu[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function zl(e){let[t,r,n]=Za(e,Rt),o=t+15*r+3*n;return[4*t/o,9*r/o]}function y1(e){let[t,r,n]=Za(e,Rt),o=t+r+n;return[t/o,r/o]}function uE(e){Object.defineProperty(e.prototype,"uv",{get(){return zl(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return y1(this)}})}var lE=Object.freeze({__proto__:null,register:uE,uv:zl,xy:y1});function ia(e,t,r={}){Ss(r)&&(r={method:r});let{method:n=Sr.deltaE,...o}=r;for(let i in cs)if("deltae"+n.toLowerCase()===i.toLowerCase())return cs[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function b1(e,t=.25){let n=[V.get("oklch","lch"),"l"];return Qn(e,n,o=>o*(1+t))}function v1(e,t=.25){let n=[V.get("oklch","lch"),"l"];return Qn(e,n,o=>o*(1-t))}b1.returns="color";v1.returns="color";var cE=Object.freeze({__proto__:null,darken:v1,lighten:b1});function w1(e,t,r,n={}){return[e,t]=[ee(e),ee(t)],wo(r)==="object"&&([r,n]=[.5,r]),Ha(e,t,n)(r??.5)}function $1(e,t,r={}){let n;cm(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:s=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[ee(e),ee(t)],n=Ha(e,t,u));let l=ia(e,t),c=o>0?Math.max(s,Math.ceil(l/o)+1):s,d=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)d=[{p:.5,color:n(.5)}];else{let f=1/(c-1);d=Array.from({length:c},(m,w)=>{let v=w*f;return{p:v,color:n(v)}})}if(o>0){let f=d.reduce((m,w,v)=>{if(v===0)return 0;let E=ia(w.color,d[v-1].color,i);return Math.max(m,E)},0);for(;f>o;){f=0;for(let m=1;m<d.length&&d.length<a;m++){let w=d[m-1],v=d[m],E=(v.p+w.p)/2,k=n(E);f=Math.max(f,ia(k,w.color),ia(k,v.color)),d.splice(m,0,{p:E,color:n(E)}),m++}}}return d=d.map(f=>f.color),d}function Ha(e,t,r={}){if(cm(e)){let[u,l]=[e,t];return Ha(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:o,progression:i,premultiplied:s}=r;e=ee(e),t=ee(t),e=ls(e),t=ls(t);let a={colors:[e,t],options:r};if(n?n=V.get(n):n=V.registry[Sr.interpolationSpace]||e.space,o=o?V.get(o):n,e=Re(e,n),t=Re(t,n),e=Eo(e),t=Eo(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,d]=[Dr(e,l),Dr(t,l)];Ce(c)&&!Ce(d)?c=d:Ce(d)&&!Ce(c)&&(d=c),[c,d]=Qb(u,[c,d]),Qn(e,l,c),Qn(t,l,d)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=i?i(u):u;let l=e.coords.map((f,m)=>{let w=t.coords[m];return Ma(f,w,u)}),c=Ma(e.alpha,t.alpha,u),d={space:n,coords:l,alpha:c};return s&&(d.coords=d.coords.map(f=>f/c)),o!==n&&(d=Re(d,o)),d},{rangeArgs:a})}function cm(e){return wo(e)==="function"&&!!e.rangeArgs}Sr.interpolationSpace="lab";function dE(e){e.defineFunction("mix",w1,{returns:"color"}),e.defineFunction("range",Ha,{returns:"function<color>"}),e.defineFunction("steps",$1,{returns:"array<color>"})}var fE=Object.freeze({__proto__:null,isRange:cm,mix:w1,range:Ha,register:dE,steps:$1}),mE=new V({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ai,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,u]=[null,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:s=(o-i)/l+(o<i?6:0);break;case o:s=(i-n)/l+2;break;case i:s=(n-o)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),k1=new V({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:ai,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,u]=[null,0,t],l=t-r;if(l!==0){switch(t){case n:s=(o-i)/l+(o<i?6:0);break;case o:s=(i-n)/l+2;break;case i:s=(n-o)/l+4}s=s*60}return u&&(a=l/u),s>=360&&(s-=360),[s,a*100,u*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/60)%6;return n-n*r*Math.max(0,Math.min(s,4-s,1))}return[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),hE=new V({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:k1,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let a=r/o;return[t,0,a*100]}let i=1-n,s=i===0?0:1-r/i;return[t,s*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const gE=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],pE=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var D1=new Zt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:gE,fromXYZ_M:pE}),yE=new Zt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:D1,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const bE=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],vE=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var x1=new Zt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:am,toXYZ_M:bE,fromXYZ_M:vE});const wE=1/512,$E=16/512;var kE=new Zt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:x1,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<$E?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=wE?r*n**(1/1.8):16*t})}});const Cu=1.09929682680944,pg=.018053968510807;var DE=new Zt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Pa,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<pg*4.5?t/4.5:r*Math.pow((n+Cu-1)/Cu,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=pg?r*(Cu*Math.pow(n,.45)-(Cu-1)):4.5*t})}}),xE=new V({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:fn,fromBase:Tr.fromBase,toBase:Tr.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const ds=2*Math.PI,ml=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],hl=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Qc=Number.MAX_VALUE,ga=.206,dm=.03,sa=(1+ga)/(1+dm);function It(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((o,i)=>{n+=o*t[i]}),n}function pa(e){return .5*(sa*e-ga+Math.sqrt((sa*e-ga)*(sa*e-ga)+4*dm*sa*e))}function Xi(e){return(e**2+ga*e)/(sa*(e+dm))}function fm(e){let[t,r]=e;return[r/t,r/(1-t)]}function EE(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}function mm(e,t){let r=tt(e,$o);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,tt(r,t,r)}function ql(e,t,r,n){let o=CE(e,t,r,n),i=mm([1,o*e,o*t],r),s=mt(1/Math.max(...i),1/3),a=s*o;return[s,a]}function AE(e,t,r,n,o,i,s,a){let u;if(a===void 0&&(a=ql(e,t,i,s)),(r-o)*a[1]-(a[0]-o)*n<=0)u=a[1]*o/(n*a[0]+a[1]*(o-r));else{u=a[1]*(o-1)/(n*(a[0]-1)+a[1]*(o-r));let l=r-o,c=n,d=It($o[0].slice(1),[e,t]),f=It($o[1].slice(1),[e,t]),m=It($o[2].slice(1),[e,t]),w=l+c*d,v=l+c*f,E=l+c*m,k=o*(1-u)+u*r,D=u*n,M=k+D*d,O=k+D*f,j=k+D*m,Z=M**3,H=O**3,ae=j**3,_e=3*w*M**2,Et=3*v*O**2,Pt=3*E*j**2,vr=6*w**2*M,$n=6*v**2*O,en=6*E**2*j,Lo=It(i[0],[Z,H,ae])-1,Jt=It(i[0],[_e,Et,Pt]),Ai=It(i[0],[vr,$n,en]),Ci=Jt/(Jt*Jt-.5*Lo*Ai),io=-Lo*Ci,Yt=It(i[1],[Z,H,ae])-1,Ve=It(i[1],[_e,Et,Pt]),Xt=It(i[1],[vr,$n,en]),Tn=Ve/(Ve*Ve-.5*Yt*Xt),Lr=-Yt*Tn,kn=It(i[2],[Z,H,ae])-1,so=It(i[2],[_e,Et,Pt]),du=It(i[2],[vr,$n,en]),fu=so/(so*so-.5*kn*du),Fi=-kn*fu;io=Ci>=0?io:Qc,Lr=Tn>=0?Lr:Qc,Fi=fu>=0?Fi:Qc,u+=Math.min(io,Math.min(Lr,Fi))}return u}function E1(e,t,r){let[n,o,i]=e,s=ql(o,i,t,r),a=AE(o,i,n,1,n,t,r,s),u=fm(s),l=a/Math.min(n*u[0],(1-n)*u[1]),c=EE(o,i),d=n*c[0],f=(1-n)*c[1],m=.9*l*Math.sqrt(Math.sqrt(1/(1/d**4+1/f**4)));return d=n*.4,f=(1-n)*.8,[Math.sqrt(1/(1/d**2+1/f**2)),m,a]}function CE(e,t,r,n){let o,i,s,a,u,l,c,d;It(n[0][0],[e,t])>1?([o,i,s,a,u]=n[0][1],[l,c,d]=r[0]):It(n[1][0],[e,t])>1?([o,i,s,a,u]=n[1][1],[l,c,d]=r[1]):([o,i,s,a,u]=n[2][1],[l,c,d]=r[2]);let f=o+i*e+s*t+a*e**2+u*e*t,m=It($o[0].slice(1),[e,t]),w=It($o[1].slice(1),[e,t]),v=It($o[2].slice(1),[e,t]),E=1+f*m,k=1+f*w,D=1+f*v,M=E**3,O=k**3,j=D**3,Z=3*m*E**2,H=3*w*k**2,ae=3*v*D**2,_e=6*m**2*E,Et=6*w**2*k,Pt=6*v**2*D,vr=l*M+c*O+d*j,$n=l*Z+c*H+d*ae,en=l*_e+c*Et+d*Pt;return f=f-vr*$n/($n**2-.5*vr*en),f}function FE(e,t,r){let[n,o,i]=e,s=Xi(i),a=null,u=null;if(n=Hr(n)/360,s!==0&&s!==1&&o!==0){let l=Math.cos(ds*n),c=Math.sin(ds*n),[d,f,m]=E1([s,l,c],t,r),w=.8,v=1.25,E,k,D,M;o<w?(E=v*o,k=0,D=w*d,M=1-D/f):(E=5*(o-.8),k=f,D=.2*f**2*1.25**2/d,M=1-D/(m-f));let O=k+E*D/(1-M*E);a=O*l,u=O*c}return[s,a,u]}function SE(e,t,r){let n=1e-7,o=1e-4,i=e[0],s=0,a=pa(i),u=Math.sqrt(e[1]**2+e[2]**2),l=.5+Math.atan2(-e[2],-e[1])/ds;if(a!==0&&a!==1&&u!==0){let d=e[1]/u,f=e[2]/u,[m,w,v]=E1([i,d,f],t,r),E=.8,k=1.25,D,M,O,j;u<w?(M=E*m,O=1-M/w,j=u/(M+O*u),s=j*E):(D=w,M=.2*w**2*k**2/m,O=1-M/(v-w),j=(u-D)/(M+O*(u-D)),s=E+.2*j)}const c=Math.abs(s)<o;return c||a===0||Math.abs(1-a)<n?(l=null,c||(s=0)):l=Hr(l*360),[l,s,a]}var TE=new V({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:fn,gamutSpace:"self",fromBase(e){return SE(e,ml,hl)},toBase(e){return FE(e,ml,hl)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),A1=new V({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:fn,fromBase(e){return[pa(e[0]),e[1],e[2]]},toBase(e){return[Xi(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),ME=new V({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:A1,fromBase:Tr.fromBase,toBase:Tr.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function NE(e,t,r){let[n,o,i]=e;n=Hr(n)/360;let s=Xi(i),a=null,u=null;if(s!==0&&o!==0){let l=Math.cos(ds*n),c=Math.sin(ds*n),d=ql(l,c,t,r),[f,m]=fm(d),w=.5,v=1-w/f,E=1-o*w/(w+m-m*v*o),k=o*m*w/(w+m-m*v*o);s=i*E;let D=i*k,M=Xi(E),O=k*M/E,j=Xi(s);D=D*j/s,s=j;let[Z,H,ae]=mm([M,l*O,c*O],t),_e=mt(1/Math.max(Math.max(Z,H),Math.max(ae,0)),1/3);s=s*_e,D=D*_e,a=D*l,u=D*c}return[s,a,u]}function PE(e,t,r){let n=1e-4,o=e[0],i=0,s=pa(o),a=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/ds;if(o!==0&&o!==1&&a!==0){let l=e[1]/a,c=e[2]/a,d=ql(l,c,t,r),[f,m]=fm(d),w=.5,v=1-w/f,E=m/(a+o*m),k=E*o,D=E*a,M=Xi(k),O=D*M/k,[j,Z,H]=mm([M,l*O,c*O],t),ae=mt(1/Math.max(Math.max(j,Z),Math.max(H,0)),1/3);o=o/ae,a=a/ae,a=a*pa(o)/o,o=pa(o),s=o/k,i=(w+m)*D/(m*w+m*v*D)}return Math.abs(i)<n||s===0?u=null:u=Hr(u*360),[u,i,s]}var IE=new V({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:fn,gamutSpace:"self",fromBase(e){return PE(e,ml,hl)},toBase(e){return NE(e,ml,hl)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let C1=nr.D65;const OE=216/24389,yg=24389/27,[bg,vg]=zl({space:Rt,coords:C1});var F1=new V({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:C1,base:Rt,fromBase(e){let t=[ft(e[0]),ft(e[1]),ft(e[2])],r=t[1],[n,o]=zl({space:Rt,coords:t});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let i=r<=OE?yg*r:116*Math.cbrt(r)-16;return[i,13*i*(n-bg),13*i*(o-vg)]},toBase(e){let[t,r,n]=e;if(t===0||Ce(t))return[0,0,0];r=ft(r),n=ft(n);let o=r/(13*t)+bg,i=n/(13*t)+vg,s=t<=8?t/yg:Math.pow((t+16)/116,3);return[s*(9*o/(4*i)),s,s*((12-3*o-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),hm=new V({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:F1,fromBase:Tr.fromBase,toBase:Tr.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const BE=216/24389,RE=24389/27,wg=xt[0][0],$g=xt[0][1],ed=xt[0][2],kg=xt[1][0],Dg=xt[1][1],td=xt[1][2],xg=xt[2][0],Eg=xt[2][1],rd=xt[2][2];function Ii(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function gl(e){const t=Math.pow(e+16,3)/1560896,r=t>BE?t:e/RE,n=r*(284517*wg-94839*ed),o=r*(838422*ed+769860*$g+731718*wg),i=r*(632260*ed-126452*$g),s=r*(284517*kg-94839*td),a=r*(838422*td+769860*Dg+731718*kg),u=r*(632260*td-126452*Dg),l=r*(284517*xg-94839*rd),c=r*(838422*rd+769860*Eg+731718*xg),d=r*(632260*rd-126452*Eg);return{r0s:n/i,r0i:o*e/i,r1s:n/(i+126452),r1i:(o-769860)*e/(i+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/d,b0i:c*e/d,b1s:l/(d+126452),b1i:(c-769860)*e/(d+126452)}}function Ag(e,t){const r=t/360*Math.PI*2,n=Ii(e.r0s,e.r0i,r),o=Ii(e.r1s,e.r1i,r),i=Ii(e.g0s,e.g0i,r),s=Ii(e.g1s,e.g1i,r),a=Ii(e.b0s,e.b0i,r),u=Ii(e.b1s,e.b1i,r);return Math.min(n,o,i,s,a,u)}var LE=new V({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:hm,gamutSpace:ai,fromBase(e){let[t,r,n]=[ft(e[0]),ft(e[1]),ft(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=gl(t),s=Ag(i,n);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[ft(e[0]),ft(e[1]),ft(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=gl(n);o=Ag(i,t)/100*r}return[n,o,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});xt[0][0];xt[0][1];xt[0][2];xt[1][0];xt[1][1];xt[1][2];xt[2][0];xt[2][1];xt[2][2];function Oi(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Cg(e){let t=Oi(e.r0s,e.r0i),r=Oi(e.r1s,e.r1i),n=Oi(e.g0s,e.g0i),o=Oi(e.g1s,e.g1i),i=Oi(e.b0s,e.b0i),s=Oi(e.b1s,e.b1i);return Math.min(t,r,n,o,i,s)}var jE=new V({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:hm,gamutSpace:"self",fromBase(e){let[t,r,n]=[ft(e[0]),ft(e[1]),ft(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=gl(t),s=Cg(i);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[ft(e[0]),ft(e[1]),ft(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=gl(n);o=Cg(i)/100*r}return[n,o,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),gm=new Zt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:Pa.toBase,fromBase:Pa.fromBase});const Fg=203,Sg=2610/2**14,UE=2**14/2610,_E=2523/2**5,Tg=2**5/2523,Mg=3424/2**12,Ng=2413/2**7,Pg=2392/2**7;var VE=new Zt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:gm,toBase(e){return e.map(function(t){return(Math.max(t**Tg-Mg,0)/(Ng-Pg*t**Tg))**UE*1e4/Fg})},fromBase(e){return e.map(function(t){let r=Math.max(t*Fg/1e4,0),n=Mg+Ng*r**Sg,o=1+Pg*r**Sg;return(n/o)**_E})}});const Ig=.17883277,Og=.28466892,Bg=.55991073,nd=3.7743;var WE=new Zt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:gm,toBase(e){return e.map(function(t){return t<=.5?t**2/3*nd:(Math.exp((t-Bg)/Ig)+Og)/12*nd})},fromBase(e){return e.map(function(t){return t/=nd,t<=1/12?mt(3*t,.5):Ig*Math.log(12*t-Og)+Bg})}});const S1={};xo.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=T1(e.W1,e.W2,e.options.method))});xo.add("chromatic-adaptation-end",e=>{e.M||(e.M=T1(e.W1,e.W2,e.options.method))});function Kl({id:e,toCone_M:t,fromCone_M:r}){S1[e]=arguments[0]}function T1(e,t,r="Bradford"){let n=S1[r],[o,i,s]=oa(n.toCone_M,e),[a,u,l]=oa(n.toCone_M,t),c=[[a/o,0,0],[0,u/i,0],[0,0,l/s]],d=oa(c,n.toCone_M);return oa(n.fromCone_M,d)}Kl({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Kl({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Kl({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Kl({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(nr,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});nr.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const zE=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],qE=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var M1=new Zt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:nr.ACES,toXYZ_M:zE,fromXYZ_M:qE});const Fu=2**-16,od=-.35828683,Su=(Math.log2(65504)+9.72)/17.52;var KE=new Zt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[od,Su],name:"Red"},g:{range:[od,Su],name:"Green"},b:{range:[od,Su],name:"Blue"}},referred:"scene",base:M1,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Fu)*2:r<Su?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Fu)+9.72)/17.52:t<Fu?(Math.log2(Fu+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Rg=Object.freeze({__proto__:null,A98RGB:yE,A98RGB_Linear:D1,ACEScc:KE,ACEScg:M1,CAM16_JMh:Dx,HCT:Na,HPLuv:jE,HSL:mE,HSLuv:LE,HSV:k1,HWB:hE,ICTCP:Jd,JzCzHz:Hd,Jzazbz:r1,LCH:Tr,LCHuv:hm,Lab:xr,Lab_D65:Qd,Luv:F1,OKLCH:xE,OKLab:fn,OKLrCH:ME,OKLrab:A1,Okhsl:TE,Okhsv:IE,P3:g1,P3_Linear:m1,ProPhoto:kE,ProPhoto_Linear:x1,REC_2020:f1,REC_2020_Linear:Pa,REC_2020_Scene_Referred:DE,REC_2100_HLG:WE,REC_2100_Linear:gm,REC_2100_PQ:VE,XYZ_ABS_D65:um,XYZ_D50:am,XYZ_D65:Rt,sRGB:ai,sRGB_Linear:h1});class ne{constructor(...t){let r;if(t.length===1){let s={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=ee(t[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:V.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=Ce(i)?i:i===void 0?1:Vl(0,i,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new ne(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=jx(this,...t);return r.color=new ne(r.color),r}static get(t,...r){return us(t,this)?t:new ne(t,...r)}static try(t,r){if(us(t,this))return t;let n=Xb(t,r);return n?new ne(n):null}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,s=function(...a){let u=r(...a);if(i==="color")u=ne.get(u);else if(i==="function<color>"){let l=u;u=function(...c){let d=l(...c);return ne.get(d)},Object.assign(u,l)}else i==="array<color>"&&(u=u.map(l=>ne.get(l)));return u};t in ne||(ne[t]=s),o&&(ne.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)ne.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(ne);else for(let r in t)ne.defineFunction(r,t[r])}}ne.defineFunctions({get:Dr,getAll:Za,set:Qn,setAll:sm,to:Re,equals:_x,inGamut:ni,toGamut:Eo,distance:t1,deltas:Ux,toString:ha});Object.assign(ne,{util:LD,hooks:xo,WHITES:nr,Space:V,spaces:V.registry,parse:Jb,defaults:Sr});for(let e of Object.keys(Rg))V.register(Rg[e]);for(let e in V.registry)ef(e,V.registry[e]);xo.add("colorspace-init-end",e=>{ef(e.id,e),e.aliases?.forEach(t=>{ef(t,e)})});function ef(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(ne.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:((i,s)=>{try{return V.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)}),get:(i,s,a)=>{if(s&&typeof s!="symbol"&&!(s in i)&&s in o){let{index:u}=V.resolveCoord([t,s]);if(u>=0)return i[u]}return Reflect.get(i,s,a)},set:(i,s,a,u)=>{if(s&&typeof s!="symbol"&&!(s in i)||Number(s)>=0){let{index:l}=V.resolveCoord([t,s]);if(l>=0)return i[l]=a,this.setAll(e,i),!0}return Reflect.set(i,s,a,u)}});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}ne.extend(cs);ne.extend({deltaE:ia});Object.assign(ne,{deltaEMethods:cs});ne.extend(cE);ne.extend({contrast:aE});ne.extend(lE);ne.extend(Wx);ne.extend(fE);ne.extend(qu);const N1=Symbol("no update");function Lg(e){return e!==N1}class id extends bn()("observable-value-update"){}class GE extends bn()("observable-value-resolve"){}class ZE extends bn()("observable-value-error"){}class HE extends zf("observable-destroy"){}class JE extends zf("observable-callback-call"){}class YE extends bn()("observable-params-update"){}class P1{listenTarget=new qf;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===N1)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const o=this.value;return this.value=r,this.listenTarget.dispatch(new id({detail:[r,o]})),!0}return!1}listen(t,r){const n=o=>r(...o.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(id,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(id,r)}destroy(){this.listenTarget.dispatch(new HE),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function pm(e,t){return u5(e,t,(r,n)=>S.isFunction(r)&&S.isFunction(n)?!0:S.strictEquals(r,n))}var ya;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(ya||(ya={}));class XE extends P1{equalityCheck;waitingForValueDeferredPromise=new Qu;lastSetPromise;lastSetId=ri();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||pm,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=ri();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Qu,super.setValue(this.waitingForValueDeferredPromise.promise,S.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=rt(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(t){return Lg(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,S.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=ri(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new GE({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,S.strictEquals),this.dispatch(new ZE({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):Lg(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(rt(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?ya.Rejected:this.value instanceof Promise?ya.Waiting:ya.Resolved}}class Ui extends XE{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==Ui.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||pm,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:Ui.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===Ui.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(rt(t))}finally{this.dispatch(new JE)}}updateLastParams(t){try{return this.internalParams===Ui.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new YE({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(rt(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return S.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function QE(e){return yt(e)&&!br(e)&&!Ya(e)&&Symbol.asyncIterator in e}function br(e){return Array.isArray(e)}function I1(e){return typeof e=="bigint"}function Ja(e){return typeof e=="boolean"}function ym(e){return e instanceof globalThis.Date}function eA(e){return typeof e=="function"}function tA(e){return yt(e)&&!br(e)&&!Ya(e)&&Symbol.iterator in e}function rA(e){return e===null}function Fn(e){return typeof e=="number"}function yt(e){return typeof e=="object"&&e!==null}function O1(e){return e instanceof globalThis.RegExp}function ut(e){return typeof e=="string"}function nA(e){return typeof e=="symbol"}function Ya(e){return e instanceof globalThis.Uint8Array}function ht(e){return e===void 0}function oA(e){return e.map(t=>pl(t))}function iA(e){return new Date(e.getTime())}function sA(e){return new Uint8Array(e)}function aA(e){return new RegExp(e.source,e.flags)}function uA(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=pl(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=pl(e[r]);return t}function pl(e){return br(e)?oA(e):ym(e)?iA(e):Ya(e)?sA(e):O1(e)?aA(e):yt(e)?uA(e):e}function Mr(e){return pl(e)}function bm(e,t){return Mr(t===void 0?e:{...t,...e})}function B1(e){return Sn(e)&&globalThis.Symbol.asyncIterator in e}function R1(e){return Sn(e)&&globalThis.Symbol.iterator in e}function L1(e){return e instanceof globalThis.Promise}function vm(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function wm(e){return e instanceof globalThis.Uint8Array}function j1(e,t){return t in e}function Sn(e){return e!==null&&typeof e=="object"}function Nr(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function To(e){return e===void 0}function Gl(e){return e===null}function Zl(e){return typeof e=="boolean"}function se(e){return typeof e=="number"}function U1(e){return globalThis.Number.isInteger(e)}function _n(e){return typeof e=="bigint"}function Ar(e){return typeof e=="string"}function _1(e){return typeof e=="function"}function Hl(e){return typeof e=="symbol"}function V1(e){return _n(e)||Zl(e)||Gl(e)||se(e)||Ar(e)||Hl(e)||To(e)}var at;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=Sn(s);return e.AllowArrayObject?a:a&&!Nr(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function o(s){return e.AllowNaN?se(s):Number.isFinite(s)}e.IsNumberLike=o;function i(s){const a=To(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=i})(at||(at={}));function lA(e){return globalThis.Object.freeze(e).map(t=>yl(t))}function cA(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=yl(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=yl(e[r]);return globalThis.Object.freeze(t)}function yl(e){return br(e)?lA(e):ym(e)?e:Ya(e)?e:O1(e)?e:yt(e)?cA(e):e}function B(e,t){const r=t!==void 0?{...t,...e}:e;switch(at.InstanceMode){case"freeze":return yl(r);case"clone":return Mr(r);default:return r}}class Ut extends Error{constructor(t){super(t)}}const fr=Symbol.for("TypeBox.Transform"),Xa=Symbol.for("TypeBox.Readonly"),to=Symbol.for("TypeBox.Optional"),Jl=Symbol.for("TypeBox.Hint"),I=Symbol.for("TypeBox.Kind");function $m(e){return yt(e)&&e[Xa]==="Readonly"}function Mo(e){return yt(e)&&e[to]==="Optional"}function W1(e){return ge(e,"Any")}function z1(e){return ge(e,"Argument")}function Ts(e){return ge(e,"Array")}function Yl(e){return ge(e,"AsyncIterator")}function Xl(e){return ge(e,"BigInt")}function Qa(e){return ge(e,"Boolean")}function Ms(e){return ge(e,"Computed")}function Ns(e){return ge(e,"Constructor")}function dA(e){return ge(e,"Date")}function Ps(e){return ge(e,"Function")}function Is(e){return ge(e,"Integer")}function Yr(e){return ge(e,"Intersect")}function Ql(e){return ge(e,"Iterator")}function ge(e,t){return yt(e)&&I in e&&e[I]===t}function q1(e){return Ja(e)||Fn(e)||ut(e)}function gi(e){return ge(e,"Literal")}function pi(e){return ge(e,"MappedKey")}function Br(e){return ge(e,"MappedResult")}function eu(e){return ge(e,"Never")}function fA(e){return ge(e,"Not")}function km(e){return ge(e,"Null")}function Os(e){return ge(e,"Number")}function vn(e){return ge(e,"Object")}function ec(e){return ge(e,"Promise")}function tc(e){return ge(e,"Record")}function pr(e){return ge(e,"Ref")}function K1(e){return ge(e,"RegExp")}function tu(e){return ge(e,"String")}function Dm(e){return ge(e,"Symbol")}function yi(e){return ge(e,"TemplateLiteral")}function mA(e){return ge(e,"This")}function Le(e){return yt(e)&&fr in e}function bi(e){return ge(e,"Tuple")}function ru(e){return ge(e,"Undefined")}function Nt(e){return ge(e,"Union")}function hA(e){return ge(e,"Uint8Array")}function gA(e){return ge(e,"Unknown")}function pA(e){return ge(e,"Unsafe")}function yA(e){return ge(e,"Void")}function bA(e){return yt(e)&&I in e&&ut(e[I])}function or(e){return W1(e)||z1(e)||Ts(e)||Qa(e)||Xl(e)||Yl(e)||Ms(e)||Ns(e)||dA(e)||Ps(e)||Is(e)||Yr(e)||Ql(e)||gi(e)||pi(e)||Br(e)||eu(e)||fA(e)||km(e)||Os(e)||vn(e)||ec(e)||tc(e)||pr(e)||K1(e)||tu(e)||Dm(e)||yi(e)||mA(e)||bi(e)||ru(e)||Nt(e)||hA(e)||gA(e)||pA(e)||yA(e)||bA(e)}const vA=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function G1(e){try{return new RegExp(e),!0}catch{return!1}}function xm(e){if(!ut(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function Z1(e){return Em(e)||Je(e)}function Js(e){return ht(e)||I1(e)}function Pe(e){return ht(e)||Fn(e)}function Em(e){return ht(e)||Ja(e)}function Ne(e){return ht(e)||ut(e)}function wA(e){return ht(e)||ut(e)&&xm(e)&&G1(e)}function $A(e){return ht(e)||ut(e)&&xm(e)}function H1(e){return ht(e)||Je(e)}function bl(e){return yt(e)&&e[to]==="Optional"}function mn(e){return pe(e,"Any")&&Ne(e.$id)}function kA(e){return pe(e,"Argument")&&Fn(e.index)}function vi(e){return pe(e,"Array")&&e.type==="array"&&Ne(e.$id)&&Je(e.items)&&Pe(e.minItems)&&Pe(e.maxItems)&&Em(e.uniqueItems)&&H1(e.contains)&&Pe(e.minContains)&&Pe(e.maxContains)}function Am(e){return pe(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Ne(e.$id)&&Je(e.items)}function rc(e){return pe(e,"BigInt")&&e.type==="bigint"&&Ne(e.$id)&&Js(e.exclusiveMaximum)&&Js(e.exclusiveMinimum)&&Js(e.maximum)&&Js(e.minimum)&&Js(e.multipleOf)}function wi(e){return pe(e,"Boolean")&&e.type==="boolean"&&Ne(e.$id)}function DA(e){return pe(e,"Computed")&&ut(e.target)&&br(e.parameters)&&e.parameters.every(t=>Je(t))}function nc(e){return pe(e,"Constructor")&&e.type==="Constructor"&&Ne(e.$id)&&br(e.parameters)&&e.parameters.every(t=>Je(t))&&Je(e.returns)}function oc(e){return pe(e,"Date")&&e.type==="Date"&&Ne(e.$id)&&Pe(e.exclusiveMaximumTimestamp)&&Pe(e.exclusiveMinimumTimestamp)&&Pe(e.maximumTimestamp)&&Pe(e.minimumTimestamp)&&Pe(e.multipleOfTimestamp)}function ic(e){return pe(e,"Function")&&e.type==="Function"&&Ne(e.$id)&&br(e.parameters)&&e.parameters.every(t=>Je(t))&&Je(e.returns)}function ro(e){return pe(e,"Integer")&&e.type==="integer"&&Ne(e.$id)&&Pe(e.exclusiveMaximum)&&Pe(e.exclusiveMinimum)&&Pe(e.maximum)&&Pe(e.minimum)&&Pe(e.multipleOf)}function J1(e){return yt(e)&&Object.entries(e).every(([t,r])=>xm(t)&&Je(r))}function $i(e){return pe(e,"Intersect")&&!(ut(e.type)&&e.type!=="object")&&br(e.allOf)&&e.allOf.every(t=>Je(t)&&!SA(t))&&Ne(e.type)&&(Em(e.unevaluatedProperties)||H1(e.unevaluatedProperties))&&Ne(e.$id)}function Cm(e){return pe(e,"Iterator")&&e.type==="Iterator"&&Ne(e.$id)&&Je(e.items)}function pe(e,t){return yt(e)&&I in e&&e[I]===t}function Y1(e){return No(e)&&ut(e.const)}function X1(e){return No(e)&&Fn(e.const)}function Q1(e){return No(e)&&Ja(e.const)}function No(e){return pe(e,"Literal")&&Ne(e.$id)&&xA(e.const)}function xA(e){return Ja(e)||Fn(e)||ut(e)}function EA(e){return pe(e,"MappedKey")&&br(e.keys)&&e.keys.every(t=>Fn(t)||ut(t))}function AA(e){return pe(e,"MappedResult")&&J1(e.properties)}function Po(e){return pe(e,"Never")&&yt(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function fs(e){return pe(e,"Not")&&Je(e.not)}function Fm(e){return pe(e,"Null")&&e.type==="null"&&Ne(e.$id)}function mr(e){return pe(e,"Number")&&e.type==="number"&&Ne(e.$id)&&Pe(e.exclusiveMaximum)&&Pe(e.exclusiveMinimum)&&Pe(e.maximum)&&Pe(e.minimum)&&Pe(e.multipleOf)}function Ye(e){return pe(e,"Object")&&e.type==="object"&&Ne(e.$id)&&J1(e.properties)&&Z1(e.additionalProperties)&&Pe(e.minProperties)&&Pe(e.maxProperties)}function Sm(e){return pe(e,"Promise")&&e.type==="Promise"&&Ne(e.$id)&&Je(e.item)}function jt(e){return pe(e,"Record")&&e.type==="object"&&Ne(e.$id)&&Z1(e.additionalProperties)&&yt(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&G1(r[0])&&yt(t.patternProperties)&&Je(t.patternProperties[r[0]])})(e)}function CA(e){return pe(e,"Ref")&&Ne(e.$id)&&ut(e.$ref)}function Ia(e){return pe(e,"RegExp")&&Ne(e.$id)&&ut(e.source)&&ut(e.flags)&&Pe(e.maxLength)&&Pe(e.minLength)}function hn(e){return pe(e,"String")&&e.type==="string"&&Ne(e.$id)&&Pe(e.minLength)&&Pe(e.maxLength)&&wA(e.pattern)&&$A(e.format)}function Oa(e){return pe(e,"Symbol")&&e.type==="symbol"&&Ne(e.$id)}function Ba(e){return pe(e,"TemplateLiteral")&&e.type==="string"&&ut(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function FA(e){return pe(e,"This")&&Ne(e.$id)&&ut(e.$ref)}function SA(e){return yt(e)&&fr in e}function sc(e){return pe(e,"Tuple")&&e.type==="array"&&Ne(e.$id)&&Fn(e.minItems)&&Fn(e.maxItems)&&e.minItems===e.maxItems&&(ht(e.items)&&ht(e.additionalItems)&&e.minItems===0||br(e.items)&&e.items.every(t=>Je(t)))}function ui(e){return pe(e,"Undefined")&&e.type==="undefined"&&Ne(e.$id)}function eo(e){return pe(e,"Union")&&Ne(e.$id)&&yt(e)&&br(e.anyOf)&&e.anyOf.every(t=>Je(t))}function nu(e){return pe(e,"Uint8Array")&&e.type==="Uint8Array"&&Ne(e.$id)&&Pe(e.minByteLength)&&Pe(e.maxByteLength)}function gn(e){return pe(e,"Unknown")&&Ne(e.$id)}function TA(e){return pe(e,"Unsafe")}function ac(e){return pe(e,"Void")&&e.type==="void"&&Ne(e.$id)}function MA(e){return yt(e)&&I in e&&ut(e[I])&&!vA.includes(e[I])}function Je(e){return yt(e)&&(mn(e)||kA(e)||vi(e)||wi(e)||rc(e)||Am(e)||DA(e)||nc(e)||oc(e)||ic(e)||ro(e)||$i(e)||Cm(e)||No(e)||EA(e)||AA(e)||Po(e)||fs(e)||Fm(e)||mr(e)||Ye(e)||Sm(e)||jt(e)||CA(e)||Ia(e)||hn(e)||Oa(e)||Ba(e)||FA(e)||sc(e)||ui(e)||eo(e)||nu(e)||gn(e)||TA(e)||ac(e)||MA(e))}const NA="(true|false)",Ku="(0|[1-9][0-9]*)",ev="(.*)",PA="(?!.*)",ms=`^${Ku}$`,hs=`^${ev}$`,IA=`^${PA}$`,tv=new Map;function Tm(e){return tv.has(e)}function Mm(e){return tv.get(e)}const Nm=new Map;function Co(e){return Nm.has(e)}function Pm(e,t){Nm.set(e,t)}function Im(e){return Nm.get(e)}function OA(e,t){return e.includes(t)}function BA(e){return[...new Set(e)]}function RA(e,t){return e.filter(r=>t.includes(r))}function LA(e,t){return e.reduce((r,n)=>RA(r,n),t)}function jA(e){return e.length===1?e[0]:e.length>1?LA(e.slice(1),e[0]):[]}function UA(e){const t=[];for(const r of e)t.push(...r);return t}function Ra(e){return B({[I]:"Any"},e)}function Om(e,t){return B({[I]:"Array",type:"array",items:e},t)}function _A(e){return B({[I]:"Argument",index:e})}function Bm(e,t){return B({[I]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function kt(e,t,r){return B({[I]:"Computed",target:e,parameters:t},r)}function VA(e,t){const{[t]:r,...n}=e;return n}function Pr(e,t){return t.reduce((r,n)=>VA(r,n),e)}function Xe(e){return B({[I]:"Never",not:{}},e)}function _t(e){return B({[I]:"MappedResult",properties:e})}function Rm(e,t,r){return B({[I]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function ou(e,t,r){return B({[I]:"Function",type:"Function",parameters:e,returns:t},r)}function tf(e,t){return B({[I]:"Union",anyOf:e},t)}function WA(e){return e.some(t=>Mo(t))}function jg(e){return e.map(t=>Mo(t)?zA(t):t)}function zA(e){return Pr(e,[to])}function qA(e,t){return WA(e)?Bo(tf(jg(e),t)):tf(jg(e),t)}function Bs(e,t){return e.length===1?B(e[0],t):e.length===0?Xe(t):qA(e,t)}function Vt(e,t){return e.length===0?Xe(t):e.length===1?B(e[0],t):tf(e,t)}class Ug extends Ut{}function KA(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function Lm(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function qn(e,t){return Lm(e,t,"(")}function La(e,t){return Lm(e,t,")")}function rv(e,t){return Lm(e,t,"|")}function GA(e){if(!(qn(e,0)&&La(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(qn(e,r)&&(t+=1),La(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function ZA(e){return e.slice(1,e.length-1)}function HA(e){let t=0;for(let r=0;r<e.length;r++)if(qn(e,r)&&(t+=1),La(e,r)&&(t-=1),rv(e,r)&&t===0)return!0;return!1}function JA(e){for(let t=0;t<e.length;t++)if(qn(e,t))return!0;return!1}function YA(e){let[t,r]=[0,0];const n=[];for(let i=0;i<e.length;i++)if(qn(e,i)&&(t+=1),La(e,i)&&(t-=1),rv(e,i)&&t===0){const s=e.slice(r,i);s.length>0&&n.push(gs(s)),r=i+1}const o=e.slice(r);return o.length>0&&n.push(gs(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function XA(e){function t(o,i){if(!qn(o,i))throw new Ug("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=i;a<o.length;a++)if(qn(o,a)&&(s+=1),La(o,a)&&(s-=1),s===0)return[i,a];throw new Ug("TemplateLiteralParser: Unclosed group parens in expression")}function r(o,i){for(let s=i;s<o.length;s++)if(qn(o,s))return[i,s];return[i,o.length]}const n=[];for(let o=0;o<e.length;o++)if(qn(e,o)){const[i,s]=t(e,o),a=e.slice(i,s+1);n.push(gs(a)),o=s}else{const[i,s]=r(e,o),a=e.slice(i,s);a.length>0&&n.push(gs(a)),o=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function gs(e){return GA(e)?gs(ZA(e)):HA(e)?YA(e):JA(e)?XA(e):{type:"const",const:KA(e)}}function jm(e){return gs(e.slice(1,e.length-1))}class QA extends Ut{}function eC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function tC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function rC(e){return e.type==="const"&&e.const===".*"}function ja(e){return eC(e)||rC(e)?!1:tC(e)?!0:e.type==="and"?e.expr.every(t=>ja(t)):e.type==="or"?e.expr.every(t=>ja(t)):e.type==="const"?!0:(()=>{throw new QA("Unknown expression type")})()}function nC(e){const t=jm(e.pattern);return ja(t)}class oC extends Ut{}function*nv(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of nv(e.slice(1)))yield`${t}${r}`}function*iC(e){return yield*nv(e.expr.map(t=>[...uc(t)]))}function*sC(e){for(const t of e.expr)yield*uc(t)}function*aC(e){return yield e.const}function*uc(e){return e.type==="and"?yield*iC(e):e.type==="or"?yield*sC(e):e.type==="const"?yield*aC(e):(()=>{throw new oC("Unknown expression")})()}function ov(e){const t=jm(e.pattern);return ja(t)?[...uc(t)]:[]}function gt(e,t){return B({[I]:"Literal",const:e,type:typeof e},t)}function iv(e){return B({[I]:"Boolean",type:"boolean"},e)}function Um(e){return B({[I]:"BigInt",type:"bigint"},e)}function ki(e){return B({[I]:"Number",type:"number"},e)}function li(e){return B({[I]:"String",type:"string"},e)}function*uC(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield iv():t==="number"?yield ki():t==="bigint"?yield Um():t==="string"?yield li():yield(()=>{const r=t.split("|").map(n=>gt(n.trim()));return r.length===0?Xe():r.length===1?r[0]:Bs(r)})()}function*lC(e){if(e[1]!=="{"){const t=gt("$"),r=rf(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=uC(e.slice(2,t)),n=rf(e.slice(t+1));return yield*[...r,...n]}yield gt(e)}function*rf(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=gt(e.slice(0,t)),n=lC(e.slice(t));return yield*[r,...n]}yield gt(e)}function cC(e){return[...rf(e)]}class dC extends Ut{}function fC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function sv(e,t){return yi(e)?e.pattern.slice(1,e.pattern.length-1):Nt(e)?`(${e.anyOf.map(r=>sv(r,t)).join("|")})`:Os(e)?`${t}${Ku}`:Is(e)?`${t}${Ku}`:Xl(e)?`${t}${Ku}`:tu(e)?`${t}${ev}`:gi(e)?`${t}${fC(e.const.toString())}`:Qa(e)?`${t}${NA}`:(()=>{throw new dC(`Unexpected Kind '${e[I]}'`)})()}function _g(e){return`^${e.map(t=>sv(t,"")).join("")}$`}function vl(e){const r=ov(e).map(n=>gt(n));return Bs(r)}function av(e,t){const r=ut(e)?_g(cC(e)):_g(e);return B({[I]:"TemplateLiteral",type:"string",pattern:r},t)}function mC(e){return ov(e).map(r=>r.toString())}function hC(e){const t=[];for(const r of e)t.push(...Io(r));return t}function gC(e){return[e.toString()]}function Io(e){return[...new Set(yi(e)?mC(e):Nt(e)?hC(e.anyOf):gi(e)?gC(e.const):Os(e)?["[number]"]:Is(e)?["[number]"]:[])]}function pC(e,t,r){const n={};for(const o of Object.getOwnPropertyNames(t))n[o]=lc(e,Io(t[o]),r);return n}function yC(e,t,r){return pC(e,t.properties,r)}function bC(e,t,r){const n=yC(e,t,r);return _t(n)}function uv(e,t){return e.map(r=>lv(r,t))}function vC(e){return e.filter(t=>!eu(t))}function wC(e,t){return fv(vC(uv(e,t)))}function $C(e){return e.some(t=>eu(t))?[]:e}function kC(e,t){return Bs($C(uv(e,t)))}function DC(e,t){return t in e?e[t]:t==="[number]"?Bs(e):Xe()}function xC(e,t){return t==="[number]"?e:Xe()}function EC(e,t){return t in e?e[t]:Xe()}function lv(e,t){return Yr(e)?wC(e.allOf,t):Nt(e)?kC(e.anyOf,t):bi(e)?DC(e.items??[],t):Ts(e)?xC(e.items,t):vn(e)?EC(e.properties,t):Xe()}function _m(e,t){return t.map(r=>lv(e,r))}function Vg(e,t){return Bs(_m(e,t))}function lc(e,t,r){if(pr(e)||pr(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!or(e)||!or(t))throw new Ut(n);return kt("Index",[e,t])}return Br(t)?bC(e,t,r):pi(t)?SC(e,t,r):B(or(t)?Vg(e,Io(t)):Vg(e,t),r)}function AC(e,t,r){return{[t]:lc(e,[t],Mr(r))}}function CC(e,t,r){return t.reduce((n,o)=>({...n,...AC(e,o,r)}),{})}function FC(e,t,r){return CC(e,t.keys,r)}function SC(e,t,r){const n=FC(e,t,r);return _t(n)}function Vm(e,t){return B({[I]:"Iterator",type:"Iterator",items:e},t)}function TC(e){return globalThis.Object.keys(e).filter(t=>!Mo(e[t]))}function MC(e,t){const r=TC(e),n=r.length>0?{[I]:"Object",type:"object",required:r,properties:e}:{[I]:"Object",type:"object",properties:e};return B(n,t)}var Mt=MC;function cv(e,t){return B({[I]:"Promise",type:"Promise",item:e},t)}function NC(e){return B(Pr(e,[Xa]))}function PC(e){return B({...e,[Xa]:"Readonly"})}function IC(e,t){return t===!1?NC(e):PC(e)}function Oo(e,t){const r=t??!0;return Br(e)?RC(e,r):IC(e,r)}function OC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Oo(e[n],t);return r}function BC(e,t){return OC(e.properties,t)}function RC(e,t){const r=BC(e,t);return _t(r)}function Rs(e,t){return B(e.length>0?{[I]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[I]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function dv(e,t){return e in t?Ur(e,t[e]):_t(t)}function LC(e){return{[e]:gt(e)}}function jC(e){const t={};for(const r of e)t[r]=gt(r);return t}function UC(e,t){return OA(t,e)?LC(e):jC(t)}function _C(e,t){const r=UC(e,t);return dv(e,r)}function Ys(e,t){return t.map(r=>Ur(e,r))}function VC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=Ur(e,t[n]);return r}function Ur(e,t){const r={...t};return Mo(t)?Bo(Ur(e,Pr(t,[to]))):$m(t)?Oo(Ur(e,Pr(t,[Xa]))):Br(t)?dv(e,t.properties):pi(t)?_C(e,t.keys):Ns(t)?Rm(Ys(e,t.parameters),Ur(e,t.returns),r):Ps(t)?ou(Ys(e,t.parameters),Ur(e,t.returns),r):Yl(t)?Bm(Ur(e,t.items),r):Ql(t)?Vm(Ur(e,t.items),r):Yr(t)?Ro(Ys(e,t.allOf),r):Nt(t)?Vt(Ys(e,t.anyOf),r):bi(t)?Rs(Ys(e,t.items??[]),r):vn(t)?Mt(VC(e,t.properties),r):Ts(t)?Om(Ur(e,t.items),r):ec(t)?cv(Ur(e,t.item),r):t}function WC(e,t){const r={};for(const n of e)r[n]=Ur(n,t);return r}function zC(e,t,r){const n=or(e)?Io(e):e,o=t({[I]:"MappedKey",keys:n}),i=WC(n,o);return Mt(i,r)}function qC(e){return B(Pr(e,[to]))}function KC(e){return B({...e,[to]:"Optional"})}function GC(e,t){return t===!1?qC(e):KC(e)}function Bo(e,t){const r=t??!0;return Br(e)?JC(e,r):GC(e,r)}function ZC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Bo(e[n],t);return r}function HC(e,t){return ZC(e.properties,t)}function JC(e,t){const r=HC(e,t);return _t(r)}function nf(e,t={}){const r=e.every(o=>vn(o)),n=or(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return B(t.unevaluatedProperties===!1||or(t.unevaluatedProperties)||r?{...n,[I]:"Intersect",type:"object",allOf:e}:{...n,[I]:"Intersect",allOf:e},t)}function YC(e){return e.every(t=>Mo(t))}function XC(e){return Pr(e,[to])}function Wg(e){return e.map(t=>Mo(t)?XC(t):t)}function QC(e,t){return YC(e)?Bo(nf(Wg(e),t)):nf(Wg(e),t)}function fv(e,t={}){if(e.length===1)return B(e[0],t);if(e.length===0)return Xe(t);if(e.some(r=>Le(r)))throw new Error("Cannot intersect transform types");return QC(e,t)}function Ro(e,t){if(e.length===1)return B(e[0],t);if(e.length===0)return Xe(t);if(e.some(r=>Le(r)))throw new Error("Cannot intersect transform types");return nf(e,t)}function Ls(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new Ut("Ref: $ref must be a string");return B({[I]:"Ref",$ref:t},r)}function e4(e,t){return kt("Awaited",[kt(e,t)])}function t4(e){return kt("Awaited",[Ls(e)])}function r4(e){return Ro(mv(e))}function n4(e){return Vt(mv(e))}function o4(e){return cc(e)}function mv(e){return e.map(t=>cc(t))}function cc(e,t){return B(Ms(e)?e4(e.target,e.parameters):Yr(e)?r4(e.allOf):Nt(e)?n4(e.anyOf):ec(e)?o4(e.item):pr(e)?t4(e.$ref):e,t)}function hv(e){const t=[];for(const r of e)t.push(Di(r));return t}function i4(e){const t=hv(e);return UA(t)}function s4(e){const t=hv(e);return jA(t)}function a4(e){return e.map((t,r)=>r.toString())}function u4(e){return["[number]"]}function l4(e){return globalThis.Object.getOwnPropertyNames(e)}function c4(e){return of?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function Di(e){return Yr(e)?i4(e.allOf):Nt(e)?s4(e.anyOf):bi(e)?a4(e.items??[]):Ts(e)?u4(e.items):vn(e)?l4(e.properties):tc(e)?c4(e.patternProperties):[]}let of=!1;function ps(e){of=!0;const t=Di(e);return of=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function d4(e,t){return kt("KeyOf",[kt(e,t)])}function f4(e){return kt("KeyOf",[Ls(e)])}function m4(e,t){const r=Di(e),n=h4(r),o=Bs(n);return B(o,t)}function h4(e){return e.map(t=>t==="[number]"?ki():gt(t))}function Wm(e,t){return Ms(e)?d4(e.target,e.parameters):pr(e)?f4(e.$ref):Br(e)?y4(e,t):m4(e,t)}function g4(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Wm(e[n],Mr(t));return r}function p4(e,t){return g4(e.properties,t)}function y4(e,t){const r=p4(e,t);return _t(r)}function gv(e){const t=Di(e),r=_m(e,t);return t.map((n,o)=>[t[o],r[o]])}function b4(e){const t=[];for(const r of e)t.push(...Di(r));return BA(t)}function v4(e){return e.filter(t=>!eu(t))}function w4(e,t){const r=[];for(const n of e)r.push(..._m(n,[t]));return v4(r)}function $4(e,t){const r={};for(const n of t)r[n]=fv(w4(e,n));return r}function k4(e,t){const r=b4(e),n=$4(e,r);return Mt(n,t)}function pv(e){return B({[I]:"Date",type:"Date"},e)}function yv(e){return B({[I]:"Null",type:"null"},e)}function bv(e){return B({[I]:"Symbol",type:"symbol"},e)}function vv(e){return B({[I]:"Undefined",type:"undefined"},e)}function wv(e){return B({[I]:"Uint8Array",type:"Uint8Array"},e)}function dc(e){return B({[I]:"Unknown"},e)}function D4(e){return e.map(t=>zm(t,!1))}function x4(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Oo(zm(e[r],!1));return t}function Tu(e,t){return t===!0?e:Oo(e)}function zm(e,t){return QE(e)||tA(e)?Tu(Ra(),t):br(e)?Oo(Rs(D4(e))):Ya(e)?wv():ym(e)?pv():yt(e)?Tu(Mt(x4(e)),t):eA(e)?Tu(ou([],dc()),t):ht(e)?vv():rA(e)?yv():nA(e)?bv():I1(e)?Um():Fn(e)||Ja(e)||ut(e)?gt(e):Mt({})}function E4(e,t){return B(zm(e,!0),t)}function A4(e,t){return Ns(e)?Rs(e.parameters,t):Xe(t)}function C4(e,t){if(ht(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(i=>isNaN(i)).map(i=>e[i]),o=[...new Set(r)].map(i=>gt(i));return Vt(o,{...t,[Jl]:"Enum"})}class F4 extends Ut{}var T;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(T||(T={}));function Jr(e){return e===T.False?e:T.True}function js(e){throw new F4(e)}function bt(e){return Po(e)||$i(e)||eo(e)||gn(e)||mn(e)}function vt(e,t){return Po(t)?Dv():$i(t)?fc(e,t):eo(t)?Km(e,t):gn(t)?Cv():mn(t)?qm():js("StructuralRight")}function qm(e,t){return T.True}function S4(e,t){return $i(t)?fc(e,t):eo(t)&&t.anyOf.some(r=>mn(r)||gn(r))?T.True:eo(t)?T.Union:gn(t)||mn(t)?T.True:T.Union}function T4(e,t){return gn(e)?T.False:mn(e)?T.Union:Po(e)?T.True:T.False}function M4(e,t){return Ye(t)&&mc(t)?T.True:bt(t)?vt(e,t):vi(t)?Jr(Me(e.items,t.items)):T.False}function N4(e,t){return bt(t)?vt(e,t):Am(t)?Jr(Me(e.items,t.items)):T.False}function P4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):jt(t)?Xr(e,t):rc(t)?T.True:T.False}function $v(e,t){return Q1(e)||wi(e)?T.True:T.False}function I4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):jt(t)?Xr(e,t):wi(t)?T.True:T.False}function O4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):nc(t)?e.parameters.length>t.parameters.length?T.False:e.parameters.every((r,n)=>Jr(Me(t.parameters[n],r))===T.True)?Jr(Me(e.returns,t.returns)):T.False:T.False}function B4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):jt(t)?Xr(e,t):oc(t)?T.True:T.False}function R4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):ic(t)?e.parameters.length>t.parameters.length?T.False:e.parameters.every((r,n)=>Jr(Me(t.parameters[n],r))===T.True)?Jr(Me(e.returns,t.returns)):T.False:T.False}function kv(e,t){return No(e)&&Fn(e.const)||mr(e)||ro(e)?T.True:T.False}function L4(e,t){return ro(t)||mr(t)?T.True:bt(t)?vt(e,t):Ye(t)?Ht(e,t):jt(t)?Xr(e,t):T.False}function fc(e,t){return t.allOf.every(r=>Me(e,r)===T.True)?T.True:T.False}function j4(e,t){return e.allOf.some(r=>Me(r,t)===T.True)?T.True:T.False}function U4(e,t){return bt(t)?vt(e,t):Cm(t)?Jr(Me(e.items,t.items)):T.False}function _4(e,t){return No(t)&&t.const===e.const?T.True:bt(t)?vt(e,t):Ye(t)?Ht(e,t):jt(t)?Xr(e,t):hn(t)?Av(e):mr(t)?xv(e):ro(t)?kv(e):wi(t)?$v(e):T.False}function Dv(e,t){return T.False}function V4(e,t){return T.True}function zg(e){let[t,r]=[e,0];for(;fs(t);)t=t.not,r+=1;return r%2===0?t:dc()}function W4(e,t){return fs(e)?Me(zg(e),t):fs(t)?Me(e,zg(t)):js("Invalid fallthrough for Not")}function z4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):jt(t)?Xr(e,t):Fm(t)?T.True:T.False}function xv(e,t){return X1(e)||mr(e)||ro(e)?T.True:T.False}function q4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):jt(t)?Xr(e,t):ro(t)||mr(t)?T.True:T.False}function yr(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function qg(e){return mc(e)}function Kg(e){return yr(e,0)||yr(e,1)&&"description"in e.properties&&eo(e.properties.description)&&e.properties.description.anyOf.length===2&&(hn(e.properties.description.anyOf[0])&&ui(e.properties.description.anyOf[1])||hn(e.properties.description.anyOf[1])&&ui(e.properties.description.anyOf[0]))}function sd(e){return yr(e,0)}function Gg(e){return yr(e,0)}function K4(e){return yr(e,0)}function G4(e){return yr(e,0)}function Z4(e){return mc(e)}function H4(e){const t=ki();return yr(e,0)||yr(e,1)&&"length"in e.properties&&Jr(Me(e.properties.length,t))===T.True}function J4(e){return yr(e,0)}function mc(e){const t=ki();return yr(e,0)||yr(e,1)&&"length"in e.properties&&Jr(Me(e.properties.length,t))===T.True}function Y4(e){const t=ou([Ra()],Ra());return yr(e,0)||yr(e,1)&&"then"in e.properties&&Jr(Me(e.properties.then,t))===T.True}function Ev(e,t){return Me(e,t)===T.False||bl(e)&&!bl(t)?T.False:T.True}function Ht(e,t){return gn(e)?T.False:mn(e)?T.Union:Po(e)||Y1(e)&&qg(t)||X1(e)&&sd(t)||Q1(e)&&Gg(t)||Oa(e)&&Kg(t)||rc(e)&&K4(t)||hn(e)&&qg(t)||Oa(e)&&Kg(t)||mr(e)&&sd(t)||ro(e)&&sd(t)||wi(e)&&Gg(t)||nu(e)&&Z4(t)||oc(e)&&G4(t)||nc(e)&&J4(t)||ic(e)&&H4(t)?T.True:jt(e)&&hn(sf(e))?t[Jl]==="Record"?T.True:T.False:jt(e)&&mr(sf(e))&&yr(t,0)?T.True:T.False}function X4(e,t){return bt(t)?vt(e,t):jt(t)?Xr(e,t):Ye(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!bl(t.properties[r]))return T.False;if(bl(t.properties[r]))return T.True;if(Ev(e.properties[r],t.properties[r])===T.False)return T.False}return T.True})():T.False}function Q4(e,t){return bt(t)?vt(e,t):Ye(t)&&Y4(t)?T.True:Sm(t)?Jr(Me(e.item,t.item)):T.False}function sf(e){return ms in e.patternProperties?ki():hs in e.patternProperties?li():js("Unknown record key pattern")}function af(e){return ms in e.patternProperties?e.patternProperties[ms]:hs in e.patternProperties?e.patternProperties[hs]:js("Unable to get record value schema")}function Xr(e,t){const[r,n]=[sf(t),af(t)];return Y1(e)&&mr(r)&&Jr(Me(e,n))===T.True?T.True:nu(e)&&mr(r)||hn(e)&&mr(r)||vi(e)&&mr(r)?Me(e,n):Ye(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(Ev(n,e.properties[o])===T.False)return T.False;return T.True})():T.False}function e3(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):jt(t)?Me(af(e),af(t)):T.False}function t3(e,t){const r=Ia(e)?li():e,n=Ia(t)?li():t;return Me(r,n)}function Av(e,t){return No(e)&&ut(e.const)||hn(e)?T.True:T.False}function r3(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):jt(t)?Xr(e,t):hn(t)?T.True:T.False}function n3(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):jt(t)?Xr(e,t):Oa(t)?T.True:T.False}function o3(e,t){return Ba(e)?Me(vl(e),t):Ba(t)?Me(e,vl(t)):js("Invalid fallthrough for TemplateLiteral")}function i3(e,t){return vi(t)&&e.items!==void 0&&e.items.every(r=>Me(r,t.items)===T.True)}function s3(e,t){return Po(e)?T.True:gn(e)?T.False:mn(e)?T.Union:T.False}function a3(e,t){return bt(t)?vt(e,t):Ye(t)&&mc(t)||vi(t)&&i3(e,t)?T.True:sc(t)?ht(e.items)&&!ht(t.items)||!ht(e.items)&&ht(t.items)?T.False:ht(e.items)&&!ht(t.items)||e.items.every((r,n)=>Me(r,t.items[n])===T.True)?T.True:T.False:T.False}function u3(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):jt(t)?Xr(e,t):nu(t)?T.True:T.False}function l3(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):jt(t)?Xr(e,t):ac(t)?f3(e):ui(t)?T.True:T.False}function Km(e,t){return t.anyOf.some(r=>Me(e,r)===T.True)?T.True:T.False}function c3(e,t){return e.anyOf.every(r=>Me(r,t)===T.True)?T.True:T.False}function Cv(e,t){return T.True}function d3(e,t){return Po(t)?Dv():$i(t)?fc(e,t):eo(t)?Km(e,t):mn(t)?qm():hn(t)?Av(e):mr(t)?xv(e):ro(t)?kv(e):wi(t)?$v(e):vi(t)?T4(e):sc(t)?s3(e):Ye(t)?Ht(e,t):gn(t)?T.True:T.False}function f3(e,t){return ui(e)||ui(e)?T.True:T.False}function m3(e,t){return $i(t)?fc(e,t):eo(t)?Km(e,t):gn(t)?Cv():mn(t)?qm():Ye(t)?Ht(e,t):ac(t)?T.True:T.False}function Me(e,t){return Ba(e)||Ba(t)?o3(e,t):Ia(e)||Ia(t)?t3(e,t):fs(e)||fs(t)?W4(e,t):mn(e)?S4(e,t):vi(e)?M4(e,t):rc(e)?P4(e,t):wi(e)?I4(e,t):Am(e)?N4(e,t):nc(e)?O4(e,t):oc(e)?B4(e,t):ic(e)?R4(e,t):ro(e)?L4(e,t):$i(e)?j4(e,t):Cm(e)?U4(e,t):No(e)?_4(e,t):Po(e)?V4():Fm(e)?z4(e,t):mr(e)?q4(e,t):Ye(e)?X4(e,t):jt(e)?e3(e,t):hn(e)?r3(e,t):Oa(e)?n3(e,t):sc(e)?a3(e,t):Sm(e)?Q4(e,t):nu(e)?u3(e,t):ui(e)?l3(e,t):eo(e)?c3(e,t):gn(e)?d3(e,t):ac(e)?m3(e,t):js(`Unknown left type operand '${e[I]}'`)}function iu(e,t){return Me(e,t)}function h3(e,t,r,n,o){const i={};for(const s of globalThis.Object.getOwnPropertyNames(e))i[s]=Gm(e[s],t,r,n,Mr(o));return i}function g3(e,t,r,n,o){return h3(e.properties,t,r,n,o)}function p3(e,t,r,n,o){const i=g3(e,t,r,n,o);return _t(i)}function y3(e,t,r,n){const o=iu(e,t);return o===T.Union?Vt([r,n]):o===T.True?r:n}function Gm(e,t,r,n,o){return Br(e)?p3(e,t,r,n,o):pi(e)?B($3(e,t,r,n,o)):B(y3(e,t,r,n),o)}function b3(e,t,r,n,o){return{[e]:Gm(gt(e),t,r,n,Mr(o))}}function v3(e,t,r,n,o){return e.reduce((i,s)=>({...i,...b3(s,t,r,n,o)}),{})}function w3(e,t,r,n,o){return v3(e.keys,t,r,n,o)}function $3(e,t,r,n,o){const i=w3(e,t,r,n,o);return _t(i)}function k3(e){return e.allOf.every(t=>Us(t))}function D3(e){return e.anyOf.some(t=>Us(t))}function x3(e){return!Us(e.not)}function Us(e){return e[I]==="Intersect"?k3(e):e[I]==="Union"?D3(e):e[I]==="Not"?x3(e):e[I]==="Undefined"}function E3(e,t){return Zm(vl(e),t)}function A3(e,t){const r=e.filter(n=>iu(n,t)===T.False);return r.length===1?r[0]:Vt(r)}function Zm(e,t,r={}){return yi(e)?B(E3(e,t),r):Br(e)?B(S3(e,t),r):B(Nt(e)?A3(e.anyOf,t):iu(e,t)!==T.False?Xe():e,r)}function C3(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Zm(e[n],t);return r}function F3(e,t){return C3(e.properties,t)}function S3(e,t){const r=F3(e,t);return _t(r)}function T3(e,t){return Hm(vl(e),t)}function M3(e,t){const r=e.filter(n=>iu(n,t)!==T.False);return r.length===1?r[0]:Vt(r)}function Hm(e,t,r){return yi(e)?B(T3(e,t),r):Br(e)?B(I3(e,t),r):B(Nt(e)?M3(e.anyOf,t):iu(e,t)!==T.False?e:Xe(),r)}function N3(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Hm(e[n],t);return r}function P3(e,t){return N3(e.properties,t)}function I3(e,t){const r=P3(e,t);return _t(r)}function O3(e,t){return Ns(e)?B(e.returns,t):Xe(t)}function Fv(e){return Oo(Bo(e))}function xi(e,t,r){return B({[I]:"Record",type:"object",patternProperties:{[e]:t}},r)}function Jm(e,t,r){const n={};for(const o of e)n[o]=t;return Mt(n,{...r,[Jl]:"Record"})}function B3(e,t,r){return nC(e)?Jm(Io(e),t,r):xi(e.pattern,t,r)}function R3(e,t,r){return Jm(Io(Vt(e)),t,r)}function L3(e,t,r){return Jm([e.toString()],t,r)}function j3(e,t,r){return xi(e.source,t,r)}function U3(e,t,r){const n=ht(e.pattern)?hs:e.pattern;return xi(n,t,r)}function _3(e,t,r){return xi(hs,t,r)}function V3(e,t,r){return xi(IA,t,r)}function W3(e,t,r){return Mt({true:t,false:t},r)}function z3(e,t,r){return xi(ms,t,r)}function q3(e,t,r){return xi(ms,t,r)}function Sv(e,t,r={}){return Nt(e)?R3(e.anyOf,t,r):yi(e)?B3(e,t,r):gi(e)?L3(e.const,t,r):Qa(e)?W3(e,t,r):Is(e)?z3(e,t,r):Os(e)?q3(e,t,r):K1(e)?j3(e,t,r):tu(e)?U3(e,t,r):W1(e)?_3(e,t,r):eu(e)?V3(e,t,r):Xe(r)}function Ym(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function K3(e){const t=Ym(e);return t===hs?li():t===ms?ki():li({pattern:t})}function Tv(e){return e.patternProperties[Ym(e)]}function G3(e,t){return t.parameters=su(e,t.parameters),t.returns=pn(e,t.returns),t}function Z3(e,t){return t.parameters=su(e,t.parameters),t.returns=pn(e,t.returns),t}function H3(e,t){return t.allOf=su(e,t.allOf),t}function J3(e,t){return t.anyOf=su(e,t.anyOf),t}function Y3(e,t){return ht(t.items)||(t.items=su(e,t.items)),t}function X3(e,t){return t.items=pn(e,t.items),t}function Q3(e,t){return t.items=pn(e,t.items),t}function e6(e,t){return t.items=pn(e,t.items),t}function t6(e,t){return t.item=pn(e,t.item),t}function r6(e,t){const r=s6(e,t.properties);return{...t,...Mt(r)}}function n6(e,t){const r=pn(e,K3(t)),n=pn(e,Tv(t)),o=Sv(r,n);return{...t,...o}}function o6(e,t){return t.index in e?e[t.index]:dc()}function i6(e,t){const r=$m(t),n=Mo(t),o=pn(e,t);return r&&n?Fv(o):r&&!n?Oo(o):!r&&n?Bo(o):o}function s6(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:i6(e,t[n])}),{})}function su(e,t){return t.map(r=>pn(e,r))}function pn(e,t){return Ns(t)?G3(e,t):Ps(t)?Z3(e,t):Yr(t)?H3(e,t):Nt(t)?J3(e,t):bi(t)?Y3(e,t):Ts(t)?X3(e,t):Yl(t)?Q3(e,t):Ql(t)?e6(e,t):ec(t)?t6(e,t):vn(t)?r6(e,t):tc(t)?n6(e,t):z1(t)?o6(e,t):t}function a6(e,t){return pn(t,bm(e))}function u6(e){return B({[I]:"Integer",type:"integer"},e)}function l6(e,t,r){return{[e]:_s(gt(e),t,Mr(r))}}function c6(e,t,r){return e.reduce((o,i)=>({...o,...l6(i,t,r)}),{})}function d6(e,t,r){return c6(e.keys,t,r)}function f6(e,t,r){const n=d6(e,t,r);return _t(n)}function m6(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function h6(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function g6(e){return e.toUpperCase()}function p6(e){return e.toLowerCase()}function y6(e,t,r){const n=jm(e.pattern);if(!ja(n))return{...e,pattern:Mv(e.pattern,t)};const s=[...uc(n)].map(l=>gt(l)),a=Nv(s,t),u=Vt(a);return av([u],r)}function Mv(e,t){return typeof e=="string"?t==="Uncapitalize"?m6(e):t==="Capitalize"?h6(e):t==="Uppercase"?g6(e):t==="Lowercase"?p6(e):e:e.toString()}function Nv(e,t){return e.map(r=>_s(r,t))}function _s(e,t,r={}){return pi(e)?f6(e,t,r):yi(e)?y6(e,t,r):Nt(e)?Vt(Nv(e.anyOf,t),r):gi(e)?gt(Mv(e.const,t),r):B(e,r)}function b6(e,t={}){return _s(e,"Capitalize",t)}function v6(e,t={}){return _s(e,"Lowercase",t)}function w6(e,t={}){return _s(e,"Uncapitalize",t)}function $6(e,t={}){return _s(e,"Uppercase",t)}function k6(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=hc(e[o],t,Mr(r));return n}function D6(e,t,r){return k6(e.properties,t,r)}function x6(e,t,r){const n=D6(e,t,r);return _t(n)}function E6(e,t){return e.map(r=>Xm(r,t))}function A6(e,t){return e.map(r=>Xm(r,t))}function C6(e,t){const{[t]:r,...n}=e;return n}function F6(e,t){return t.reduce((r,n)=>C6(r,n),e)}function S6(e,t,r){const n=Pr(e,[fr,"$id","required","properties"]),o=F6(r,t);return Mt(o,n)}function T6(e){const t=e.reduce((r,n)=>q1(n)?[...r,gt(n)]:r,[]);return Vt(t)}function Xm(e,t){return Yr(e)?Ro(E6(e.allOf,t)):Nt(e)?Vt(A6(e.anyOf,t)):vn(e)?S6(e,t,e.properties):Mt({})}function hc(e,t,r){const n=br(t)?T6(t):t,o=or(t)?Io(t):t,i=pr(e),s=pr(t);return Br(e)?x6(e,o,r):pi(t)?I6(e,t,r):i&&s?kt("Omit",[e,n],r):!i&&s?kt("Omit",[e,n],r):i&&!s?kt("Omit",[e,n],r):B({...Xm(e,o),...r})}function M6(e,t,r){return{[t]:hc(e,[t],Mr(r))}}function N6(e,t,r){return t.reduce((n,o)=>({...n,...M6(e,o,r)}),{})}function P6(e,t,r){return N6(e,t.keys,r)}function I6(e,t,r){const n=P6(e,t,r);return _t(n)}function O6(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=gc(e[o],t,Mr(r));return n}function B6(e,t,r){return O6(e.properties,t,r)}function R6(e,t,r){const n=B6(e,t,r);return _t(n)}function L6(e,t){return e.map(r=>Qm(r,t))}function j6(e,t){return e.map(r=>Qm(r,t))}function U6(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function _6(e,t,r){const n=Pr(e,[fr,"$id","required","properties"]),o=U6(r,t);return Mt(o,n)}function V6(e){const t=e.reduce((r,n)=>q1(n)?[...r,gt(n)]:r,[]);return Vt(t)}function Qm(e,t){return Yr(e)?Ro(L6(e.allOf,t)):Nt(e)?Vt(j6(e.anyOf,t)):vn(e)?_6(e,t,e.properties):Mt({})}function gc(e,t,r){const n=br(t)?V6(t):t,o=or(t)?Io(t):t,i=pr(e),s=pr(t);return Br(e)?R6(e,o,r):pi(t)?K6(e,t,r):i&&s?kt("Pick",[e,n],r):!i&&s?kt("Pick",[e,n],r):i&&!s?kt("Pick",[e,n],r):B({...Qm(e,o),...r})}function W6(e,t,r){return{[t]:gc(e,[t],Mr(r))}}function z6(e,t,r){return t.reduce((n,o)=>({...n,...W6(e,o,r)}),{})}function q6(e,t,r){return z6(e,t.keys,r)}function K6(e,t,r){const n=q6(e,t,r);return _t(n)}function G6(e,t){return kt("Partial",[kt(e,t)])}function Z6(e){return kt("Partial",[Ls(e)])}function H6(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Bo(e[r]);return t}function J6(e,t){const r=Pr(e,[fr,"$id","required","properties"]),n=H6(t);return Mt(n,r)}function Zg(e){return e.map(t=>Pv(t))}function Pv(e){return Ms(e)?G6(e.target,e.parameters):pr(e)?Z6(e.$ref):Yr(e)?Ro(Zg(e.allOf)):Nt(e)?Vt(Zg(e.anyOf)):vn(e)?J6(e,e.properties):Xl(e)||Qa(e)||Is(e)||gi(e)||km(e)||Os(e)||tu(e)||Dm(e)||ru(e)?e:Mt({})}function eh(e,t){return Br(e)?Q6(e,t):B({...Pv(e),...t})}function Y6(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=eh(e[n],Mr(t));return r}function X6(e,t){return Y6(e.properties,t)}function Q6(e,t){const r=X6(e,t);return _t(r)}function eF(e,t){return kt("Required",[kt(e,t)])}function tF(e){return kt("Required",[Ls(e)])}function rF(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Pr(e[r],[to]);return t}function nF(e,t){const r=Pr(e,[fr,"$id","required","properties"]),n=rF(t);return Mt(n,r)}function Hg(e){return e.map(t=>Iv(t))}function Iv(e){return Ms(e)?eF(e.target,e.parameters):pr(e)?tF(e.$ref):Yr(e)?Ro(Hg(e.allOf)):Nt(e)?Vt(Hg(e.anyOf)):vn(e)?nF(e,e.properties):Xl(e)||Qa(e)||Is(e)||gi(e)||km(e)||Os(e)||tu(e)||Dm(e)||ru(e)?e:Mt({})}function th(e,t){return Br(e)?sF(e,t):B({...Iv(e),...t})}function oF(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=th(e[n],t);return r}function iF(e,t){return oF(e.properties,t)}function sF(e,t){const r=iF(e,t);return _t(r)}function aF(e,t){return t.map(r=>pr(r)?rh(e,r.$ref):Ir(e,r))}function rh(e,t){return t in e?pr(e[t])?rh(e,e[t].$ref):Ir(e,e[t]):Xe()}function uF(e){return cc(e[0])}function lF(e){return lc(e[0],e[1])}function cF(e){return Wm(e[0])}function dF(e){return eh(e[0])}function fF(e){return hc(e[0],e[1])}function mF(e){return gc(e[0],e[1])}function hF(e){return th(e[0])}function gF(e,t,r){const n=aF(e,r);return t==="Awaited"?uF(n):t==="Index"?lF(n):t==="KeyOf"?cF(n):t==="Partial"?dF(n):t==="Omit"?fF(n):t==="Pick"?mF(n):t==="Required"?hF(n):Xe()}function pF(e,t){return Om(Ir(e,t))}function yF(e,t){return Bm(Ir(e,t))}function bF(e,t,r){return Rm(au(e,t),Ir(e,r))}function vF(e,t,r){return ou(au(e,t),Ir(e,r))}function wF(e,t){return Ro(au(e,t))}function $F(e,t){return Vm(Ir(e,t))}function kF(e,t){return Mt(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:Ir(e,t[n])}),{}))}function DF(e,t){const[r,n]=[Ir(e,Tv(t)),Ym(t)],o=bm(t);return o.patternProperties[n]=r,o}function xF(e,t){return pr(t)?{...rh(e,t.$ref),[fr]:t[fr]}:t}function EF(e,t){return Rs(au(e,t))}function AF(e,t){return Vt(au(e,t))}function au(e,t){return t.map(r=>Ir(e,r))}function Ir(e,t){return Mo(t)?B(Ir(e,Pr(t,[to])),t):$m(t)?B(Ir(e,Pr(t,[Xa])),t):Le(t)?B(xF(e,t),t):Ts(t)?B(pF(e,t.items),t):Yl(t)?B(yF(e,t.items),t):Ms(t)?B(gF(e,t.target,t.parameters)):Ns(t)?B(bF(e,t.parameters,t.returns),t):Ps(t)?B(vF(e,t.parameters,t.returns),t):Yr(t)?B(wF(e,t.allOf),t):Ql(t)?B($F(e,t.items),t):vn(t)?B(kF(e,t.properties),t):tc(t)?B(DF(e,t)):bi(t)?B(EF(e,t.items||[]),t):Nt(t)?B(AF(e,t.anyOf),t):t}function CF(e,t){return t in e?Ir(e,e[t]):Xe()}function FF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:CF(e,r)}),{})}class SF{constructor(t){const r=FF(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:B(this.$defs[t],r)};return B({[I]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function TF(e){return new SF(e)}function MF(e,t){return B({[I]:"Not",not:e},t)}function NF(e,t){return Ps(e)?Rs(e.parameters,t):Xe()}let PF=0;function IF(e,t={}){ht(t.$id)&&(t.$id=`T${PF++}`);const r=bm(e({[I]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,B({[Jl]:"Recursive",...r},t)}function OF(e,t){const r=ut(e)?new globalThis.RegExp(e):e;return B({[I]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function BF(e){return Yr(e)?e.allOf:Nt(e)?e.anyOf:bi(e)?e.items??[]:[]}function RF(e){return BF(e)}function LF(e,t){return Ps(e)?B(e.returns,t):Xe(t)}class jF{constructor(t){this.schema=t}Decode(t){return new UF(this.schema,t)}}class UF{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const i={Encode:s=>r[fr].Encode(t(s)),Decode:s=>this.decode(r[fr].Decode(s))};return{...r,[fr]:i}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[fr]:n}}Encode(t){return Le(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function _F(e){return new jF(e)}function VF(e={}){return B({[I]:e[I]??"Unsafe"},e)}function WF(e){return B({[I]:"Void",type:"void"},e)}const zF=Object.freeze(Object.defineProperty({__proto__:null,Any:Ra,Argument:_A,Array:Om,AsyncIterator:Bm,Awaited:cc,BigInt:Um,Boolean:iv,Capitalize:b6,Composite:k4,Const:E4,Constructor:Rm,ConstructorParameters:A4,Date:pv,Enum:C4,Exclude:Zm,Extends:Gm,Extract:Hm,Function:ou,Index:lc,InstanceType:O3,Instantiate:a6,Integer:u6,Intersect:Ro,Iterator:Vm,KeyOf:Wm,Literal:gt,Lowercase:v6,Mapped:zC,Module:TF,Never:Xe,Not:MF,Null:yv,Number:ki,Object:Mt,Omit:hc,Optional:Bo,Parameters:NF,Partial:eh,Pick:gc,Promise:cv,Readonly:Oo,ReadonlyOptional:Fv,Record:Sv,Recursive:IF,Ref:Ls,RegExp:OF,Required:th,Rest:RF,ReturnType:LF,String:li,Symbol:bv,TemplateLiteral:av,Transform:_F,Tuple:Rs,Uint8Array:wv,Uncapitalize:w6,Undefined:vv,Union:Vt,Unknown:dc,Unsafe:VF,Uppercase:$6,Void:WF},Symbol.toStringTag,{value:"Module"})),Be=zF;function Ov(e){switch(e.errorType){case C.ArrayContains:return"Expected array to contain at least one matching value";case C.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case C.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case C.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case C.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case C.ArrayUniqueItems:return"Expected array elements to be unique";case C.Array:return"Expected array";case C.AsyncIterator:return"Expected AsyncIterator";case C.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case C.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case C.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case C.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case C.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case C.BigInt:return"Expected bigint";case C.Boolean:return"Expected boolean";case C.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case C.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case C.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case C.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case C.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case C.Date:return"Expected Date";case C.Function:return"Expected function";case C.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case C.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case C.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case C.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case C.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case C.Integer:return"Expected integer";case C.IntersectUnevaluatedProperties:return"Unexpected property";case C.Intersect:return"Expected all values to match";case C.Iterator:return"Expected Iterator";case C.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case C.Never:return"Never";case C.Not:return"Value should not match";case C.Null:return"Expected null";case C.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case C.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case C.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case C.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case C.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case C.Number:return"Expected number";case C.Object:return"Expected object";case C.ObjectAdditionalProperties:return"Unexpected property";case C.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case C.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case C.ObjectRequiredProperty:return"Expected required property";case C.Promise:return"Expected Promise";case C.RegExp:return"Expected string to match regular expression";case C.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case C.StringFormat:return`Expected string to match '${e.schema.format}' format`;case C.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case C.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case C.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case C.String:return"Expected string";case C.Symbol:return"Expected symbol";case C.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case C.Tuple:return"Expected tuple";case C.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case C.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case C.Uint8Array:return"Expected Uint8Array";case C.Undefined:return"Expected undefined";case C.Union:return"Expected union value";case C.Void:return"Expected void";case C.Kind:return`Expected kind '${e.schema[I]}'`;default:return"Unknown error type"}}let Bv=Ov;function qF(e){Bv=e}function KF(){return Bv}class GF extends Ut{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function ZF(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new GF(e);return Qr(r,t)}function pc(e,t){return!Ar(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function Qr(e,t){return e[I]==="This"||e[I]==="Ref"?ZF(e,t):e}class HF extends Ut{constructor(t){super("Unable to hash value"),this.value=t}}var Or;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(Or||(Or={}));let _i=BigInt("14695981039346656037");const[JF,YF]=[BigInt("1099511628211"),BigInt("18446744073709551616")],XF=Array.from({length:256}).map((e,t)=>BigInt(t)),Rv=new Float64Array(1),Lv=new DataView(Rv.buffer),jv=new Uint8Array(Rv.buffer);function*QF(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function e8(e){Gt(Or.Array);for(const t of e)ys(t)}function t8(e){Gt(Or.Boolean),Gt(e?1:0)}function r8(e){Gt(Or.BigInt),Lv.setBigInt64(0,e);for(const t of jv)Gt(t)}function n8(e){Gt(Or.Date),ys(e.getTime())}function o8(e){Gt(Or.Null)}function i8(e){Gt(Or.Number),Lv.setFloat64(0,e);for(const t of jv)Gt(t)}function s8(e){Gt(Or.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())ys(t),ys(e[t])}function a8(e){Gt(Or.String);for(let t=0;t<e.length;t++)for(const r of QF(e.charCodeAt(t)))Gt(r)}function u8(e){Gt(Or.Symbol),ys(e.description)}function l8(e){Gt(Or.Uint8Array);for(let t=0;t<e.length;t++)Gt(e[t])}function c8(e){return Gt(Or.Undefined)}function ys(e){if(Nr(e))return e8(e);if(Zl(e))return t8(e);if(_n(e))return r8(e);if(vm(e))return n8(e);if(Gl(e))return o8();if(se(e))return i8(e);if(Sn(e))return s8(e);if(Ar(e))return a8(e);if(Hl(e))return u8(e);if(wm(e))return l8(e);if(To(e))return c8();throw new HF(e)}function Gt(e){_i=_i^XF[e],_i=_i*JF%YF}function nh(e){return _i=BigInt("14695981039346656037"),ys(e),_i}class d8 extends Ut{constructor(t){super("Unknown type"),this.schema=t}}function f8(e){return e[I]==="Any"||e[I]==="Unknown"}function de(e){return e!==void 0}function m8(e,t,r){return!0}function h8(e,t,r){return!0}function g8(e,t,r){if(!Nr(r)||de(e.minItems)&&!(r.length>=e.minItems)||de(e.maxItems)&&!(r.length<=e.maxItems)||!r.every(i=>Ft(e.items,t,i))||e.uniqueItems===!0&&!(function(){const i=new Set;for(const s of r){const a=nh(s);if(i.has(a))return!1;i.add(a)}return!0})())return!1;if(!(de(e.contains)||se(e.minContains)||se(e.maxContains)))return!0;const n=de(e.contains)?e.contains:Xe(),o=r.reduce((i,s)=>Ft(n,t,s)?i+1:i,0);return!(o===0||se(e.minContains)&&o<e.minContains||se(e.maxContains)&&o>e.maxContains)}function p8(e,t,r){return B1(r)}function y8(e,t,r){return!(!_n(r)||de(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||de(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||de(e.maximum)&&!(r<=e.maximum)||de(e.minimum)&&!(r>=e.minimum)||de(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function b8(e,t,r){return Zl(r)}function v8(e,t,r){return Ft(e.returns,t,r.prototype)}function w8(e,t,r){return!(!vm(r)||de(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||de(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||de(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||de(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||de(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function $8(e,t,r){return _1(r)}function k8(e,t,r){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return Ft(o,[...t,...n],r)}function D8(e,t,r){return!(!U1(r)||de(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||de(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||de(e.maximum)&&!(r<=e.maximum)||de(e.minimum)&&!(r>=e.minimum)||de(e.multipleOf)&&r%e.multipleOf!==0)}function x8(e,t,r){const n=e.allOf.every(o=>Ft(o,t,r));if(e.unevaluatedProperties===!1){const o=new RegExp(ps(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s));return n&&i}else if(or(e.unevaluatedProperties)){const o=new RegExp(ps(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s)||Ft(e.unevaluatedProperties,t,r[s]));return n&&i}else return n}function E8(e,t,r){return R1(r)}function A8(e,t,r){return r===e.const}function C8(e,t,r){return!1}function F8(e,t,r){return!Ft(e.not,t,r)}function S8(e,t,r){return Gl(r)}function T8(e,t,r){return!(!at.IsNumberLike(r)||de(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||de(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||de(e.minimum)&&!(r>=e.minimum)||de(e.maximum)&&!(r<=e.maximum)||de(e.multipleOf)&&r%e.multipleOf!==0)}function M8(e,t,r){if(!at.IsObjectLike(r)||de(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||de(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const i=e.properties[o];if(e.required&&e.required.includes(o)){if(!Ft(i,t,r[o])||(Us(i)||f8(i))&&!(o in r))return!1}else if(at.IsExactOptionalProperty(r,o)&&!Ft(i,t,r[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(i=>n.includes(i))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(i=>n.includes(i)||Ft(e.additionalProperties,t,r[i])):!0}function N8(e,t,r){return L1(r)}function P8(e,t,r){if(!at.IsRecordLike(r)||de(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||de(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],i=new RegExp(n),s=Object.entries(r).every(([l,c])=>i.test(l)?Ft(o,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([l,c])=>i.test(l)?!0:Ft(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(l=>i.test(l)):!0;return s&&a&&u}function I8(e,t,r){return Ft(Qr(e,t),t,r)}function O8(e,t,r){const n=new RegExp(e.source,e.flags);return de(e.minLength)&&!(r.length>=e.minLength)||de(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function B8(e,t,r){return!Ar(r)||de(e.minLength)&&!(r.length>=e.minLength)||de(e.maxLength)&&!(r.length<=e.maxLength)||de(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:de(e.format)?Tm(e.format)?Mm(e.format)(r):!1:!0}function R8(e,t,r){return Hl(r)}function L8(e,t,r){return Ar(r)&&new RegExp(e.pattern).test(r)}function j8(e,t,r){return Ft(Qr(e,t),t,r)}function U8(e,t,r){if(!Nr(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!Ft(e.items[n],t,r[n]))return!1;return!0}function _8(e,t,r){return To(r)}function V8(e,t,r){return e.anyOf.some(n=>Ft(n,t,r))}function W8(e,t,r){return!(!wm(r)||de(e.maxByteLength)&&!(r.length<=e.maxByteLength)||de(e.minByteLength)&&!(r.length>=e.minByteLength))}function z8(e,t,r){return!0}function q8(e,t,r){return at.IsVoidLike(r)}function K8(e,t,r){return Co(e[I])?Im(e[I])(e,r):!1}function Ft(e,t,r){const n=de(e.$id)?pc(e,t):t,o=e;switch(o[I]){case"Any":return m8();case"Argument":return h8();case"Array":return g8(o,n,r);case"AsyncIterator":return p8(o,n,r);case"BigInt":return y8(o,n,r);case"Boolean":return b8(o,n,r);case"Constructor":return v8(o,n,r);case"Date":return w8(o,n,r);case"Function":return $8(o,n,r);case"Import":return k8(o,n,r);case"Integer":return D8(o,n,r);case"Intersect":return x8(o,n,r);case"Iterator":return E8(o,n,r);case"Literal":return A8(o,n,r);case"Never":return C8();case"Not":return F8(o,n,r);case"Null":return S8(o,n,r);case"Number":return T8(o,n,r);case"Object":return M8(o,n,r);case"Promise":return N8(o,n,r);case"Record":return P8(o,n,r);case"Ref":return I8(o,n,r);case"RegExp":return O8(o,n,r);case"String":return B8(o,n,r);case"Symbol":return R8(o,n,r);case"TemplateLiteral":return L8(o,n,r);case"This":return j8(o,n,r);case"Tuple":return U8(o,n,r);case"Undefined":return _8(o,n,r);case"Union":return V8(o,n,r);case"Uint8Array":return W8(o,n,r);case"Unknown":return z8();case"Void":return q8(o,n,r);default:if(!Co(o[I]))throw new d8(o);return K8(o,n,r)}}function wl(...e){return e.length===3?Ft(e[0],e[1],e[2]):Ft(e[0],[],e[1])}var C;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(C||(C={}));class G8 extends Ut{constructor(t){super("Unknown type"),this.schema=t}}function Ln(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function ce(e){return e!==void 0}class Uv{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function R(e,t,r,n,o=[]){return{type:e,schema:t,path:r,value:n,message:KF()({errorType:e,path:r,schema:t,value:n,errors:o}),errors:o}}function*Z8(e,t,r,n){}function*H8(e,t,r,n){}function*J8(e,t,r,n){if(!Nr(n))return yield R(C.Array,e,r,n);ce(e.minItems)&&!(n.length>=e.minItems)&&(yield R(C.ArrayMinItems,e,r,n)),ce(e.maxItems)&&!(n.length<=e.maxItems)&&(yield R(C.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*St(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const u=nh(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield R(C.ArrayUniqueItems,e,r,n)),!(ce(e.contains)||ce(e.minContains)||ce(e.maxContains)))return;const o=ce(e.contains)?e.contains:Xe(),i=n.reduce((s,a,u)=>St(o,t,`${r}${u}`,a).next().done===!0?s+1:s,0);i===0&&(yield R(C.ArrayContains,e,r,n)),se(e.minContains)&&i<e.minContains&&(yield R(C.ArrayMinContains,e,r,n)),se(e.maxContains)&&i>e.maxContains&&(yield R(C.ArrayMaxContains,e,r,n))}function*Y8(e,t,r,n){B1(n)||(yield R(C.AsyncIterator,e,r,n))}function*X8(e,t,r,n){if(!_n(n))return yield R(C.BigInt,e,r,n);ce(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield R(C.BigIntExclusiveMaximum,e,r,n)),ce(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield R(C.BigIntExclusiveMinimum,e,r,n)),ce(e.maximum)&&!(n<=e.maximum)&&(yield R(C.BigIntMaximum,e,r,n)),ce(e.minimum)&&!(n>=e.minimum)&&(yield R(C.BigIntMinimum,e,r,n)),ce(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield R(C.BigIntMultipleOf,e,r,n))}function*Q8(e,t,r,n){Zl(n)||(yield R(C.Boolean,e,r,n))}function*eS(e,t,r,n){yield*St(e.returns,t,r,n.prototype)}function*tS(e,t,r,n){if(!vm(n))return yield R(C.Date,e,r,n);ce(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield R(C.DateExclusiveMaximumTimestamp,e,r,n)),ce(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield R(C.DateExclusiveMinimumTimestamp,e,r,n)),ce(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield R(C.DateMaximumTimestamp,e,r,n)),ce(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield R(C.DateMinimumTimestamp,e,r,n)),ce(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield R(C.DateMultipleOfTimestamp,e,r,n))}function*rS(e,t,r,n){_1(n)||(yield R(C.Function,e,r,n))}function*nS(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];yield*St(i,[...t,...o],r,n)}function*oS(e,t,r,n){if(!U1(n))return yield R(C.Integer,e,r,n);ce(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield R(C.IntegerExclusiveMaximum,e,r,n)),ce(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield R(C.IntegerExclusiveMinimum,e,r,n)),ce(e.maximum)&&!(n<=e.maximum)&&(yield R(C.IntegerMaximum,e,r,n)),ce(e.minimum)&&!(n>=e.minimum)&&(yield R(C.IntegerMinimum,e,r,n)),ce(e.multipleOf)&&n%e.multipleOf!==0&&(yield R(C.IntegerMultipleOf,e,r,n))}function*iS(e,t,r,n){let o=!1;for(const i of e.allOf)for(const s of St(i,t,r,n))o=!0,yield s;if(o)return yield R(C.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const i=new RegExp(ps(e));for(const s of Object.getOwnPropertyNames(n))i.test(s)||(yield R(C.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const i=new RegExp(ps(e));for(const s of Object.getOwnPropertyNames(n))if(!i.test(s)){const a=St(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*sS(e,t,r,n){R1(n)||(yield R(C.Iterator,e,r,n))}function*aS(e,t,r,n){n!==e.const&&(yield R(C.Literal,e,r,n))}function*uS(e,t,r,n){yield R(C.Never,e,r,n)}function*lS(e,t,r,n){St(e.not,t,r,n).next().done===!0&&(yield R(C.Not,e,r,n))}function*cS(e,t,r,n){Gl(n)||(yield R(C.Null,e,r,n))}function*dS(e,t,r,n){if(!at.IsNumberLike(n))return yield R(C.Number,e,r,n);ce(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield R(C.NumberExclusiveMaximum,e,r,n)),ce(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield R(C.NumberExclusiveMinimum,e,r,n)),ce(e.maximum)&&!(n<=e.maximum)&&(yield R(C.NumberMaximum,e,r,n)),ce(e.minimum)&&!(n>=e.minimum)&&(yield R(C.NumberMinimum,e,r,n)),ce(e.multipleOf)&&n%e.multipleOf!==0&&(yield R(C.NumberMultipleOf,e,r,n))}function*fS(e,t,r,n){if(!at.IsObjectLike(n))return yield R(C.Object,e,r,n);ce(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield R(C.ObjectMinProperties,e,r,n)),ce(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield R(C.ObjectMaxProperties,e,r,n));const o=Array.isArray(e.required)?e.required:[],i=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of o)s.includes(a)||(yield R(C.ObjectRequiredProperty,e.properties[a],`${r}/${Ln(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)i.includes(a)||(yield R(C.ObjectAdditionalProperties,e,`${r}/${Ln(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)i.includes(a)||(yield*St(e.additionalProperties,t,`${r}/${Ln(a)}`,n[a]));for(const a of i){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*St(u,t,`${r}/${Ln(a)}`,n[a]),Us(e)&&!(a in n)&&(yield R(C.ObjectRequiredProperty,u,`${r}/${Ln(a)}`,void 0))):at.IsExactOptionalProperty(n,a)&&(yield*St(u,t,`${r}/${Ln(a)}`,n[a]))}}function*mS(e,t,r,n){L1(n)||(yield R(C.Promise,e,r,n))}function*hS(e,t,r,n){if(!at.IsRecordLike(n))return yield R(C.Object,e,r,n);ce(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield R(C.ObjectMinProperties,e,r,n)),ce(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield R(C.ObjectMaxProperties,e,r,n));const[o,i]=Object.entries(e.patternProperties)[0],s=new RegExp(o);for(const[a,u]of Object.entries(n))s.test(a)&&(yield*St(i,t,`${r}/${Ln(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(n))s.test(a)||(yield*St(e.additionalProperties,t,`${r}/${Ln(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(n))if(!s.test(a))return yield R(C.ObjectAdditionalProperties,e,`${r}/${Ln(a)}`,u)}}function*gS(e,t,r,n){yield*St(Qr(e,t),t,r,n)}function*pS(e,t,r,n){if(!Ar(n))return yield R(C.String,e,r,n);if(ce(e.minLength)&&!(n.length>=e.minLength)&&(yield R(C.StringMinLength,e,r,n)),ce(e.maxLength)&&!(n.length<=e.maxLength)&&(yield R(C.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield R(C.RegExp,e,r,n)}function*yS(e,t,r,n){if(!Ar(n))return yield R(C.String,e,r,n);ce(e.minLength)&&!(n.length>=e.minLength)&&(yield R(C.StringMinLength,e,r,n)),ce(e.maxLength)&&!(n.length<=e.maxLength)&&(yield R(C.StringMaxLength,e,r,n)),Ar(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield R(C.StringPattern,e,r,n))),Ar(e.format)&&(Tm(e.format)?Mm(e.format)(n)||(yield R(C.StringFormat,e,r,n)):yield R(C.StringFormatUnknown,e,r,n))}function*bS(e,t,r,n){Hl(n)||(yield R(C.Symbol,e,r,n))}function*vS(e,t,r,n){if(!Ar(n))return yield R(C.String,e,r,n);new RegExp(e.pattern).test(n)||(yield R(C.StringPattern,e,r,n))}function*wS(e,t,r,n){yield*St(Qr(e,t),t,r,n)}function*$S(e,t,r,n){if(!Nr(n))return yield R(C.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield R(C.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield R(C.TupleLength,e,r,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*St(e.items[o],t,`${r}/${o}`,n[o])}function*kS(e,t,r,n){To(n)||(yield R(C.Undefined,e,r,n))}function*DS(e,t,r,n){if(wl(e,t,n))return;const o=e.anyOf.map(i=>new Uv(St(i,t,r,n)));yield R(C.Union,e,r,n,o)}function*xS(e,t,r,n){if(!wm(n))return yield R(C.Uint8Array,e,r,n);ce(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield R(C.Uint8ArrayMaxByteLength,e,r,n)),ce(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield R(C.Uint8ArrayMinByteLength,e,r,n))}function*ES(e,t,r,n){}function*AS(e,t,r,n){at.IsVoidLike(n)||(yield R(C.Void,e,r,n))}function*CS(e,t,r,n){Im(e[I])(e,n)||(yield R(C.Kind,e,r,n))}function*St(e,t,r,n){const o=ce(e.$id)?[...t,e]:t,i=e;switch(i[I]){case"Any":return yield*Z8();case"Argument":return yield*H8();case"Array":return yield*J8(i,o,r,n);case"AsyncIterator":return yield*Y8(i,o,r,n);case"BigInt":return yield*X8(i,o,r,n);case"Boolean":return yield*Q8(i,o,r,n);case"Constructor":return yield*eS(i,o,r,n);case"Date":return yield*tS(i,o,r,n);case"Function":return yield*rS(i,o,r,n);case"Import":return yield*nS(i,o,r,n);case"Integer":return yield*oS(i,o,r,n);case"Intersect":return yield*iS(i,o,r,n);case"Iterator":return yield*sS(i,o,r,n);case"Literal":return yield*aS(i,o,r,n);case"Never":return yield*uS(i,o,r,n);case"Not":return yield*lS(i,o,r,n);case"Null":return yield*cS(i,o,r,n);case"Number":return yield*dS(i,o,r,n);case"Object":return yield*fS(i,o,r,n);case"Promise":return yield*mS(i,o,r,n);case"Record":return yield*hS(i,o,r,n);case"Ref":return yield*gS(i,o,r,n);case"RegExp":return yield*pS(i,o,r,n);case"String":return yield*yS(i,o,r,n);case"Symbol":return yield*bS(i,o,r,n);case"TemplateLiteral":return yield*vS(i,o,r,n);case"This":return yield*wS(i,o,r,n);case"Tuple":return yield*$S(i,o,r,n);case"Undefined":return yield*kS(i,o,r,n);case"Union":return yield*DS(i,o,r,n);case"Uint8Array":return yield*xS(i,o,r,n);case"Unknown":return yield*ES();case"Void":return yield*AS(i,o,r,n);default:if(!Co(i[I]))throw new G8(e);return yield*CS(i,o,r,n)}}function FS(...e){const t=e.length===3?St(e[0],e[1],"",e[2]):St(e[0],[],"",e[1]);return new Uv(t)}class SS extends Ut{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class TS extends Ut{constructor(t,r,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=o}}function qe(e,t,r){try{return Le(e)?e[fr].Decode(r):r}catch(n){throw new TS(e,t,r,n)}}function MS(e,t,r,n){return Nr(n)?qe(e,r,n.map((o,i)=>wn(e.items,t,`${r}/${i}`,o))):qe(e,r,n)}function NS(e,t,r,n){if(!Sn(n)||V1(n))return qe(e,r,n);const o=gv(e),i=o.map(c=>c[0]),s={...n};for(const[c,d]of o)c in s&&(s[c]=wn(d,t,`${r}/${c}`,s[c]));if(!Le(e.unevaluatedProperties))return qe(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)i.includes(c)||(l[c]=qe(u,`${r}/${c}`,l[c]));return qe(e,r,l)}function PS(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=wn(i,[...t,...o],r,n);return qe(e,r,s)}function IS(e,t,r,n){return qe(e,r,wn(e.not,t,r,n))}function OS(e,t,r,n){if(!Sn(n))return qe(e,r,n);const o=Di(e),i={...n};for(const l of o)j1(i,l)&&(To(i[l])&&(!ru(e.properties[l])||at.IsExactOptionalProperty(i,l))||(i[l]=wn(e.properties[l],t,`${r}/${l}`,i[l])));if(!or(e.additionalProperties))return qe(e,r,i);const s=Object.getOwnPropertyNames(i),a=e.additionalProperties,u={...i};for(const l of s)o.includes(l)||(u[l]=qe(a,`${r}/${l}`,u[l]));return qe(e,r,u)}function BS(e,t,r,n){if(!Sn(n))return qe(e,r,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],i=new RegExp(o),s={...n};for(const c of Object.getOwnPropertyNames(n))i.test(c)&&(s[c]=wn(e.patternProperties[o],t,`${r}/${c}`,s[c]));if(!or(e.additionalProperties))return qe(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)i.test(c)||(l[c]=qe(u,`${r}/${c}`,l[c]));return qe(e,r,l)}function RS(e,t,r,n){const o=Qr(e,t);return qe(e,r,wn(o,t,r,n))}function LS(e,t,r,n){const o=Qr(e,t);return qe(e,r,wn(o,t,r,n))}function jS(e,t,r,n){return Nr(n)&&Nr(e.items)?qe(e,r,e.items.map((o,i)=>wn(o,t,`${r}/${i}`,n[i]))):qe(e,r,n)}function US(e,t,r,n){for(const o of e.anyOf){if(!wl(o,t,n))continue;const i=wn(o,t,r,n);return qe(e,r,i)}return qe(e,r,n)}function wn(e,t,r,n){const o=pc(e,t),i=e;switch(e[I]){case"Array":return MS(i,o,r,n);case"Import":return PS(i,o,r,n);case"Intersect":return NS(i,o,r,n);case"Not":return IS(i,o,r,n);case"Object":return OS(i,o,r,n);case"Record":return BS(i,o,r,n);case"Ref":return RS(i,o,r,n);case"Symbol":return qe(i,r,n);case"This":return LS(i,o,r,n);case"Tuple":return jS(i,o,r,n);case"Union":return US(i,o,r,n);default:return qe(i,r,n)}}function _S(e,t,r){return wn(e,t,"",r)}class VS extends Ut{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class WS extends Ut{constructor(t,r,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=o}}function Lt(e,t,r){try{return Le(e)?e[fr].Encode(r):r}catch(n){throw new WS(e,t,r,n)}}function zS(e,t,r,n){const o=Lt(e,r,n);return Nr(o)?o.map((i,s)=>yn(e.items,t,`${r}/${s}`,i)):o}function qS(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=Lt(e,r,n);return yn(i,[...t,...o],r,s)}function KS(e,t,r,n){const o=Lt(e,r,n);if(!Sn(n)||V1(n))return o;const i=gv(e),s=i.map(d=>d[0]),a={...o};for(const[d,f]of i)d in a&&(a[d]=yn(f,t,`${r}/${d}`,a[d]));if(!Le(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const d of u)s.includes(d)||(c[d]=Lt(l,`${r}/${d}`,c[d]));return c}function GS(e,t,r,n){return Lt(e.not,r,Lt(e,r,n))}function ZS(e,t,r,n){const o=Lt(e,r,n);if(!Sn(o))return o;const i=Di(e),s={...o};for(const c of i)j1(s,c)&&(To(s[c])&&(!ru(e.properties[c])||at.IsExactOptionalProperty(s,c))||(s[c]=yn(e.properties[c],t,`${r}/${c}`,s[c])));if(!or(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)i.includes(c)||(l[c]=Lt(u,`${r}/${c}`,l[c]));return l}function HS(e,t,r,n){const o=Lt(e,r,n);if(!Sn(n))return o;const i=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(i),a={...o};for(const d of Object.getOwnPropertyNames(n))s.test(d)&&(a[d]=yn(e.patternProperties[i],t,`${r}/${d}`,a[d]));if(!or(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const d of u)s.test(d)||(c[d]=Lt(l,`${r}/${d}`,c[d]));return c}function JS(e,t,r,n){const o=Qr(e,t),i=yn(o,t,r,n);return Lt(e,r,i)}function YS(e,t,r,n){const o=Qr(e,t),i=yn(o,t,r,n);return Lt(e,r,i)}function XS(e,t,r,n){const o=Lt(e,r,n);return Nr(e.items)?e.items.map((i,s)=>yn(i,t,`${r}/${s}`,o[s])):[]}function QS(e,t,r,n){for(const o of e.anyOf){if(!wl(o,t,n))continue;const i=yn(o,t,r,n);return Lt(e,r,i)}for(const o of e.anyOf){const i=yn(o,t,r,n);if(wl(e,t,i))return Lt(e,r,i)}return Lt(e,r,n)}function yn(e,t,r,n){const o=pc(e,t),i=e;switch(e[I]){case"Array":return zS(i,o,r,n);case"Import":return qS(i,o,r,n);case"Intersect":return KS(i,o,r,n);case"Not":return GS(i,o,r,n);case"Object":return ZS(i,o,r,n);case"Record":return HS(i,o,r,n);case"Ref":return JS(i,o,r,n);case"This":return YS(i,o,r,n);case"Tuple":return XS(i,o,r,n);case"Union":return QS(i,o,r,n);default:return Lt(i,r,n)}}function e9(e,t,r){return yn(e,t,"",r)}function t9(e,t){return Le(e)||Dt(e.items,t)}function r9(e,t){return Le(e)||Dt(e.items,t)}function n9(e,t){return Le(e)||Dt(e.returns,t)||e.parameters.some(r=>Dt(r,t))}function o9(e,t){return Le(e)||Dt(e.returns,t)||e.parameters.some(r=>Dt(r,t))}function i9(e,t){return Le(e)||Le(e.unevaluatedProperties)||e.allOf.some(r=>Dt(r,t))}function s9(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,i)=>[...o,e.$defs[i]],[]),n=e.$defs[e.$ref];return Le(e)||Dt(n,[...r,...t])}function a9(e,t){return Le(e)||Dt(e.items,t)}function u9(e,t){return Le(e)||Dt(e.not,t)}function l9(e,t){return Le(e)||Object.values(e.properties).some(r=>Dt(r,t))||or(e.additionalProperties)&&Dt(e.additionalProperties,t)}function c9(e,t){return Le(e)||Dt(e.item,t)}function d9(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return Le(e)||Dt(n,t)||or(e.additionalProperties)&&Le(e.additionalProperties)}function f9(e,t){return Le(e)?!0:Dt(Qr(e,t),t)}function m9(e,t){return Le(e)?!0:Dt(Qr(e,t),t)}function h9(e,t){return Le(e)||!To(e.items)&&e.items.some(r=>Dt(r,t))}function g9(e,t){return Le(e)||e.anyOf.some(r=>Dt(r,t))}function Dt(e,t){const r=pc(e,t),n=e;if(e.$id&&uf.has(e.$id))return!1;switch(e.$id&&uf.add(e.$id),e[I]){case"Array":return t9(n,r);case"AsyncIterator":return r9(n,r);case"Constructor":return n9(n,r);case"Function":return o9(n,r);case"Import":return s9(n,r);case"Intersect":return i9(n,r);case"Iterator":return a9(n,r);case"Not":return u9(n,r);case"Object":return l9(n,r);case"Promise":return c9(n,r);case"Record":return d9(n,r);case"Ref":return f9(n,r);case"This":return m9(n,r);case"Tuple":return h9(n,r);case"Union":return g9(n,r);default:return Le(e)}}const uf=new Set;function p9(e,t){return uf.clear(),Dt(e,t)}class y9{constructor(t,r,n,o){this.schema=t,this.references=r,this.checkFunc=n,this.code=o,this.hasTransform=p9(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return FS(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new SS(this.schema,t,this.Errors(t).First());return this.hasTransform?_S(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?e9(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new VS(this.schema,t,this.Errors(t).First());return r}}var Vn;(function(e){function t(i){return i===36}e.DollarSign=t;function r(i){return i===95}e.IsUnderscore=r;function n(i){return i>=65&&i<=90||i>=97&&i<=122}e.IsAlpha=n;function o(i){return i>=48&&i<=57}e.IsNumeric=o})(Vn||(Vn={}));var $l;(function(e){function t(i){return i.length===0?!1:Vn.IsNumeric(i.charCodeAt(0))}function r(i){if(t(i))return!1;for(let s=0;s<i.length;s++){const a=i.charCodeAt(s);if(!(Vn.IsAlpha(a)||Vn.IsNumeric(a)||Vn.DollarSign(a)||Vn.IsUnderscore(a)))return!1}return!0}function n(i){return i.replace(/'/g,"\\'")}function o(i,s){return r(s)?`${i}.${s}`:`${i}['${n(s)}']`}e.Encode=o})($l||($l={}));var lf;(function(e){function t(r){const n=[];for(let o=0;o<r.length;o++){const i=r.charCodeAt(o);Vn.IsNumeric(i)||Vn.IsAlpha(i)?n.push(r.charAt(o)):n.push(`_${i}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(lf||(lf={}));var cf;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(cf||(cf={}));class b9 extends Ut{constructor(t){super("Unknown type"),this.schema=t}}class Jg extends Ut{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Zo;(function(e){function t(s,a,u){return at.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${$l.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function r(s){return at.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return at.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function o(s){return at.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=o;function i(s){return at.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=i})(Zo||(Zo={}));var ba;(function(e){function t(b){return b[I]==="Any"||b[I]==="Unknown"}function*r(b,U,x){yield"true"}function*n(b,U,x){yield"true"}function*o(b,U,x){yield`Array.isArray(${x})`;const[Y,z]=[so("value","any"),so("acc","number")];se(b.maxItems)&&(yield`${x}.length <= ${b.maxItems}`),se(b.minItems)&&(yield`${x}.length >= ${b.minItems}`);const K=Xt(b.items,U,"value");if(yield`${x}.every((${Y}) => ${K})`,Je(b.contains)||se(b.minContains)||se(b.maxContains)){const Oe=Je(b.contains)?b.contains:Xe(),sr=Xt(Oe,U,"value"),Mn=se(b.minContains)?[`(count >= ${b.minContains})`]:[],tn=se(b.maxContains)?[`(count <= ${b.maxContains})`]:[],Dn=`const count = value.reduce((${z}, ${Y}) => ${sr} ? acc + 1 : acc, 0)`,mu=["(count > 0)",...Mn,...tn].join(" && ");yield`((${Y}) => { ${Dn}; return ${mu}})(${x})`}b.uniqueItems===!0&&(yield`((${Y}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${x})`)}function*i(b,U,x){yield`(typeof value === 'object' && Symbol.asyncIterator in ${x})`}function*s(b,U,x){yield`(typeof ${x} === 'bigint')`,_n(b.exclusiveMaximum)&&(yield`${x} < BigInt(${b.exclusiveMaximum})`),_n(b.exclusiveMinimum)&&(yield`${x} > BigInt(${b.exclusiveMinimum})`),_n(b.maximum)&&(yield`${x} <= BigInt(${b.maximum})`),_n(b.minimum)&&(yield`${x} >= BigInt(${b.minimum})`),_n(b.multipleOf)&&(yield`(${x} % BigInt(${b.multipleOf})) === 0`)}function*a(b,U,x){yield`(typeof ${x} === 'boolean')`}function*u(b,U,x){yield*Yt(b.returns,U,`${x}.prototype`)}function*l(b,U,x){yield`(${x} instanceof Date) && Number.isFinite(${x}.getTime())`,se(b.exclusiveMaximumTimestamp)&&(yield`${x}.getTime() < ${b.exclusiveMaximumTimestamp}`),se(b.exclusiveMinimumTimestamp)&&(yield`${x}.getTime() > ${b.exclusiveMinimumTimestamp}`),se(b.maximumTimestamp)&&(yield`${x}.getTime() <= ${b.maximumTimestamp}`),se(b.minimumTimestamp)&&(yield`${x}.getTime() >= ${b.minimumTimestamp}`),se(b.multipleOfTimestamp)&&(yield`(${x}.getTime() % ${b.multipleOfTimestamp}) === 0`)}function*c(b,U,x){yield`(typeof ${x} === 'function')`}function*d(b,U,x){const Y=globalThis.Object.getOwnPropertyNames(b.$defs).reduce((z,K)=>[...z,b.$defs[K]],[]);yield*Yt(Ls(b.$ref),[...U,...Y],x)}function*f(b,U,x){yield`Number.isInteger(${x})`,se(b.exclusiveMaximum)&&(yield`${x} < ${b.exclusiveMaximum}`),se(b.exclusiveMinimum)&&(yield`${x} > ${b.exclusiveMinimum}`),se(b.maximum)&&(yield`${x} <= ${b.maximum}`),se(b.minimum)&&(yield`${x} >= ${b.minimum}`),se(b.multipleOf)&&(yield`(${x} % ${b.multipleOf}) === 0`)}function*m(b,U,x){const Y=b.allOf.map(z=>Xt(z,U,x)).join(" && ");if(b.unevaluatedProperties===!1){const z=Lr(`${new RegExp(ps(b))};`),K=`Object.getOwnPropertyNames(${x}).every(key => ${z}.test(key))`;yield`(${Y} && ${K})`}else if(Je(b.unevaluatedProperties)){const z=Lr(`${new RegExp(ps(b))};`),K=`Object.getOwnPropertyNames(${x}).every(key => ${z}.test(key) || ${Xt(b.unevaluatedProperties,U,`${x}[key]`)})`;yield`(${Y} && ${K})`}else yield`(${Y})`}function*w(b,U,x){yield`(typeof value === 'object' && Symbol.iterator in ${x})`}function*v(b,U,x){typeof b.const=="number"||typeof b.const=="boolean"?yield`(${x} === ${b.const})`:yield`(${x} === '${cf.Escape(b.const)}')`}function*E(b,U,x){yield"false"}function*k(b,U,x){yield`(!${Xt(b.not,U,x)})`}function*D(b,U,x){yield`(${x} === null)`}function*M(b,U,x){yield Zo.IsNumberLike(x),se(b.exclusiveMaximum)&&(yield`${x} < ${b.exclusiveMaximum}`),se(b.exclusiveMinimum)&&(yield`${x} > ${b.exclusiveMinimum}`),se(b.maximum)&&(yield`${x} <= ${b.maximum}`),se(b.minimum)&&(yield`${x} >= ${b.minimum}`),se(b.multipleOf)&&(yield`(${x} % ${b.multipleOf}) === 0`)}function*O(b,U,x){yield Zo.IsObjectLike(x),se(b.minProperties)&&(yield`Object.getOwnPropertyNames(${x}).length >= ${b.minProperties}`),se(b.maxProperties)&&(yield`Object.getOwnPropertyNames(${x}).length <= ${b.maxProperties}`);const Y=Object.getOwnPropertyNames(b.properties);for(const z of Y){const K=$l.Encode(x,z),Oe=b.properties[z];if(b.required&&b.required.includes(z))yield*Yt(Oe,U,K),(Us(Oe)||t(Oe))&&(yield`('${z}' in ${x})`);else{const sr=Xt(Oe,U,K);yield Zo.IsExactOptionalProperty(x,z,sr)}}if(b.additionalProperties===!1)if(b.required&&b.required.length===Y.length)yield`Object.getOwnPropertyNames(${x}).length === ${Y.length}`;else{const z=`[${Y.map(K=>`'${K}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${x}).every(key => ${z}.includes(key))`}if(typeof b.additionalProperties=="object"){const z=Xt(b.additionalProperties,U,`${x}[key]`),K=`[${Y.map(Oe=>`'${Oe}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${x}).every(key => ${K}.includes(key) || ${z}))`}}function*j(b,U,x){yield`${x} instanceof Promise`}function*Z(b,U,x){yield Zo.IsRecordLike(x),se(b.minProperties)&&(yield`Object.getOwnPropertyNames(${x}).length >= ${b.minProperties}`),se(b.maxProperties)&&(yield`Object.getOwnPropertyNames(${x}).length <= ${b.maxProperties}`);const[Y,z]=Object.entries(b.patternProperties)[0],K=Lr(`${new RegExp(Y)}`),Oe=Xt(z,U,"value"),sr=Je(b.additionalProperties)?Xt(b.additionalProperties,U,x):b.additionalProperties===!1?"false":"true",Mn=`(${K}.test(key) ? ${Oe} : ${sr})`;yield`(Object.entries(${x}).every(([key, value]) => ${Mn}))`}function*H(b,U,x){const Y=Qr(b,U);if(Ve.functions.has(b.$ref))return yield`${Tn(b.$ref)}(${x})`;yield*Yt(Y,U,x)}function*ae(b,U,x){const Y=Lr(`${new RegExp(b.source,b.flags)};`);yield`(typeof ${x} === 'string')`,se(b.maxLength)&&(yield`${x}.length <= ${b.maxLength}`),se(b.minLength)&&(yield`${x}.length >= ${b.minLength}`),yield`${Y}.test(${x})`}function*_e(b,U,x){yield`(typeof ${x} === 'string')`,se(b.maxLength)&&(yield`${x}.length <= ${b.maxLength}`),se(b.minLength)&&(yield`${x}.length >= ${b.minLength}`),b.pattern!==void 0&&(yield`${Lr(`${new RegExp(b.pattern)};`)}.test(${x})`),b.format!==void 0&&(yield`format('${b.format}', ${x})`)}function*Et(b,U,x){yield`(typeof ${x} === 'symbol')`}function*Pt(b,U,x){yield`(typeof ${x} === 'string')`,yield`${Lr(`${new RegExp(b.pattern)};`)}.test(${x})`}function*vr(b,U,x){yield`${Tn(b.$ref)}(${x})`}function*$n(b,U,x){if(yield`Array.isArray(${x})`,b.items===void 0)return yield`${x}.length === 0`;yield`(${x}.length === ${b.maxItems})`;for(let Y=0;Y<b.items.length;Y++)yield`${Xt(b.items[Y],U,`${x}[${Y}]`)}`}function*en(b,U,x){yield`${x} === undefined`}function*Lo(b,U,x){yield`(${b.anyOf.map(z=>Xt(z,U,x)).join(" || ")})`}function*Jt(b,U,x){yield`${x} instanceof Uint8Array`,se(b.maxByteLength)&&(yield`(${x}.length <= ${b.maxByteLength})`),se(b.minByteLength)&&(yield`(${x}.length >= ${b.minByteLength})`)}function*Ai(b,U,x){yield"true"}function*Ci(b,U,x){yield Zo.IsVoidLike(x)}function*io(b,U,x){const Y=Ve.instances.size;Ve.instances.set(Y,b),yield`kind('${b[I]}', ${Y}, ${x})`}function*Yt(b,U,x,Y=!0){const z=Ar(b.$id)?[...U,b]:U,K=b;if(Y&&Ar(b.$id)){const Oe=Tn(b.$id);if(Ve.functions.has(Oe))return yield`${Oe}(${x})`;{Ve.functions.set(Oe,"<deferred>");const sr=kn(Oe,b,U,"value",!1);return Ve.functions.set(Oe,sr),yield`${Oe}(${x})`}}switch(K[I]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*o(K,z,x);case"AsyncIterator":return yield*i(K,z,x);case"BigInt":return yield*s(K,z,x);case"Boolean":return yield*a(K,z,x);case"Constructor":return yield*u(K,z,x);case"Date":return yield*l(K,z,x);case"Function":return yield*c(K,z,x);case"Import":return yield*d(K,z,x);case"Integer":return yield*f(K,z,x);case"Intersect":return yield*m(K,z,x);case"Iterator":return yield*w(K,z,x);case"Literal":return yield*v(K,z,x);case"Never":return yield*E();case"Not":return yield*k(K,z,x);case"Null":return yield*D(K,z,x);case"Number":return yield*M(K,z,x);case"Object":return yield*O(K,z,x);case"Promise":return yield*j(K,z,x);case"Record":return yield*Z(K,z,x);case"Ref":return yield*H(K,z,x);case"RegExp":return yield*ae(K,z,x);case"String":return yield*_e(K,z,x);case"Symbol":return yield*Et(K,z,x);case"TemplateLiteral":return yield*Pt(K,z,x);case"This":return yield*vr(K,z,x);case"Tuple":return yield*$n(K,z,x);case"Undefined":return yield*en(K,z,x);case"Union":return yield*Lo(K,z,x);case"Uint8Array":return yield*Jt(K,z,x);case"Unknown":return yield*Ai();case"Void":return yield*Ci(K,z,x);default:if(!Co(K[I]))throw new b9(b);return yield*io(K,z,x)}}const Ve={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Xt(b,U,x,Y=!0){return`(${[...Yt(b,U,x,Y)].join(" && ")})`}function Tn(b){return`check_${lf.Encode(b)}`}function Lr(b){const U=`local_${Ve.variables.size}`;return Ve.variables.set(U,`const ${U} = ${b}`),U}function kn(b,U,x,Y,z=!0){const[K,Oe]=[`
`,Dn=>"".padStart(Dn," ")],sr=so("value","any"),Mn=du("boolean"),tn=[...Yt(U,x,Y,z)].map(Dn=>`${Oe(4)}${Dn}`).join(` &&${K}`);return`function ${b}(${sr})${Mn} {${K}${Oe(2)}return (${K}${tn}${K}${Oe(2)})
}`}function so(b,U){const x=Ve.language==="typescript"?`: ${U}`:"";return`${b}${x}`}function du(b){return Ve.language==="typescript"?`: ${b}`:""}function fu(b,U,x){const Y=kn("check",b,U,"value"),z=so("value","any"),K=du("boolean"),Oe=[...Ve.functions.values()],sr=[...Ve.variables.values()],Mn=Ar(b.$id)?`return function check(${z})${K} {
  return ${Tn(b.$id)}(value)
}`:`return ${Y}`;return[...sr,...Oe,Mn].join(`
`)}function Fi(...b){const U={language:"javascript"},[x,Y,z]=b.length===2&&Nr(b[1])?[b[0],b[1],U]:b.length===2&&!Nr(b[1])?[b[0],[],b[1]]:b.length===3?[b[0],b[1],b[2]]:b.length===1?[b[0],[],U]:[null,[],U];if(Ve.language=z.language,Ve.variables.clear(),Ve.functions.clear(),Ve.instances.clear(),!Je(x))throw new Jg(x);for(const K of Y)if(!Je(K))throw new Jg(K);return fu(x,Y)}e.Code=Fi;function Hw(b,U=[]){const x=Fi(b,U,{language:"javascript"}),Y=globalThis.Function("kind","format","hash",x),z=new Map(Ve.instances);function K(tn,Dn,mu){if(!Co(tn)||!z.has(Dn))return!1;const Jw=Im(tn),Yw=z.get(Dn);return Jw(Yw,mu)}function Oe(tn,Dn){return Tm(tn)?Mm(tn)(Dn):!1}function sr(tn){return nh(tn)}const Mn=Y(K,Oe,sr);return new y9(b,U,Mn,x)}e.Compile=Hw})(ba||(ba={}));const df={};function _v(e,t){e in df||(df[e]=t)}let Yg=!1;function v9(){Yg||(Yg=!0,qF(e=>(df[e.schema[I]]||Ov)(e)))}const ff=Symbol.for("object-shape-tester.shape-identifier");function Te(e){if(v9(),oh(e))return e;const t=mf(e),r=Ho(t,!1),n=Ho(t,!0),o={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:ba.Compile(t),$_compiledSchemaNoExtraKeys:ba.Compile(r),$_compiledSchemaExtraKeys:ba.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[ff]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}function oh(e){return S.hasKey(e,ff)&&!!e[ff]}function ih(e){return S.hasKey(e,I)}function Ho(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>Ho(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>Ho(n,t))),ih(e.items)?r.items=Ho(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>Ho(n,t))),S.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,i])=>{n[o]=Ho(i,t)}),r.properties=n}return r.additionalProperties=t,r}function mf(e){if(ih(e))return e;if(oh(e))return e.$_schema;if(S.isFunction(e))return Be.Function([],Be.Any(),{default:e});if(S.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,o])=>{const i=mf(o);r[n]=i,t[n]=i.default}),Be.Object(r,{default:t})}else{if(S.isArray(e))return Be.Array(Be.Union(e.map(t=>mf(t))),{default:[]});if(S.isPrimitive(e)){if(S.isString(e))return Be.String({default:e});if(S.isNumber(e))return Be.Number({default:e});if(S.isBoolean(e))return Be.Boolean({default:e});if(S.isSymbol(e))return Be.Symbol({default:e});if(S.isNull(e))return Be.Null({default:null});if(S.isUndefined(e))return Be.Undefined({default:void 0});if(S.isBigInt(e))return Be.BigInt({default:e});$t.tsType(e).equals(),$t.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${y(e)}`)}}function w9({checkValue:e,default:t,name:r}){return Co(r)||Pm(r,(n,o)=>e(o)),(n=t)=>Te(Be.Unsafe({[I]:r,default:n}))}function bs(e,t){const r=Vr(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return Te(Be.Union(r.map(n=>Be.Literal(n)),{default:t??r[0]}))}function me(e){return S.isSymbol(e)?$9(e):Te(Be.Const(e,{default:e}))}const Mu="ExactSymbol";function $9(e){return Co(Mu)||Pm(Mu,(t,r)=>r===t.symbol),_v(Mu,({schema:t})=>`Expected symbol ${t.symbol?.description?tD({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Te(Be.Unsafe({[I]:Mu,symbol:e,default:e}))}function k9(...e){const t={},r=e.map(n=>{const o=Te(n);return Object.assign(t,o.default),o.$_schema});return Te(Be.Composite(r,{default:t}))}function Ot(e,t={}){at.ExactOptionalPropertyTypes=!0;const r=Te(e).$_schema,n=t.alsoUndefined?Be.Union([Be.Undefined(),r]):r;return Te(Be.Optional(n))}function He(...e){let t;const r=e.map((n,o)=>{const i=Te(n);return o||(t=i.default),i.$_schema});return Te(Be.Union(r,{default:t}))}class D9 extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(i=>Vv(i)).join(`
`),o=Ds(r,`Shape mismatch:
${Lf(n,1)}`);super(o),this.errors=t,this.failureMessage=r}}function x9(e){return e.errors.flatMap(t=>Array.from(t))}function Vv(e,t=0){const r=x9(e).map(o=>Vv(o,t+1)),n=[e.path,e.message].filter(S.isTruthy).join(": ")+(r.length?":":"");return[Lf(n,t),...r].join(`
`)}function Qo(e,t,r={}){return zv(t,r).Check(e)}function Wv(e,t,r={},n){if(Qo(e,t,r))return;const o=Array.from(zv(t,r).Errors(e));if(o.length)throw new D9(o,n)}function zv(e,t){return e=E9(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function E9(e){return Te(e)}function Vi({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:o}=Sf(r),i=r.default??(o-n)/2+n,s=Te(Be.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:i})),a=x5(()=>Wv(i,s));if(a)throw Tl(a,"Default range value is not within range.");return s}const Gu="recordShape";function yc({keys:e,values:t,partial:r,additionalProperties:n}){A9();const o=qv(e),i=Te(t);return Te(Be.Unsafe({[I]:Gu,keysShape:o,valuesShape:i,isPartial:!!r,additionalProperties:!!n,default:C9({isPartial:!!r,keysShape:o,valuesShape:i})}))}function A9(){Co(Gu)||Pm(Gu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([o,i])=>{const s=e.additionalProperties?!0:Qo(o,e.keysShape),a=Qo(i,e.valuesShape);return s&&a}),n=e.isPartial?!0:!Xg(e.keysShape,t).length;return r&&n}),_v(Gu,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=So(Object.entries(n),([u])=>u,(u,[l,c])=>!Qo(l,r.keysShape)||!Qo(c,r.valuesShape)),i=Xg(r.keysShape,n),s=o.length?["Failure at keys",o.join(",")].join(": "):"",a=i.length?["Missing keys",i.join(",")].join(": "):"";return[s,a].filter(S.isTruthy).join(`
`)})}function Xg(e,t){const r=kl(e).filter(n=>S.isPropertyKey(n));return r.length?r.filter(n=>!S.hasKey(t,n)):[]}function C9({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=kl(e),o=t.default;return Object.fromEntries(n.map(i=>[i,o]))}}function qv(e){return oh(e)?e:ih(e)?Te(e):S.isObject(e)?bs(e):S.isArray(e)&&S.isLengthAtLeast(e,1)?He(...e.map(t=>me(t))):S.isPropertyKey(e)?Te(e):Te(Be.Undefined())}function kl(e){const t=e.$_schema,r=t[I].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?Ef(t.anyOf.flatMap(n=>kl(Te(n)))):["undefined","number","string","symbol"].includes(r)?[]:kl(qv(e.default))}function F9(e){return Te(Be.Unknown({default:e}))}const S9=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],sh=S9.reduce((e,t)=>(e[t]=t,e),{});Ze.defaultZone.name;const Kv=sh.UTC,T9=Te({hour:Vi({...s0,default:s0.min}),minute:Vi({...a0,default:a0.min}),second:Vi({...u0,default:u0.min}),millisecond:Vi({...l0,default:l0.min}),timezone:bs(sh,Kv)}),M9=Te({year:2023,month:Vi({...c0,default:c0.min}),day:Vi({...d0,default:d0.min}),timezone:bs(sh,Kv)});Te(k9(M9,T9));Se.Years+"",Se.Months+"",Se.Weeks+"",Se.Days+"",Se.Hours+"",Se.Minutes+"",Se.Seconds+"",Se.Milliseconds+"";Te(He({get:me(G.Month),in:He(me(G.Year))},{get:me(G.Week),in:He(me(G.Year),me(G.Month))},{get:me(G.Day),in:He(me(G.Year),me(G.Month),me(G.Week))},{get:me(G.Hour),in:He(me(G.Year),me(G.Month),me(G.Week),me(G.Day))},{get:me(G.Minute),in:He(me(G.Year),me(G.Month),me(G.Week),me(G.Day),me(G.Hour))},{get:me(G.Second),in:He(me(G.Year),me(G.Month),me(G.Week),me(G.Day),me(G.Hour),me(G.Minute))},{get:me(G.Millisecond),in:He(me(G.Year),me(G.Month),me(G.Week),me(G.Day),me(G.Hour),me(G.Minute),me(G.Second))}));yc({keys:bs(Se),values:-1,partial:!0});var Qg;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Qg||(Qg={}));var hf;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(hf||(hf={}));var ep;(function(e){e.Year="year",e.Month="month",e.Day="day"})(ep||(ep={}));const N9={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Z5(N9,Vr(hf));w9({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return P9(e)}});function P9(e){return Q.fromISO(e).toUTC().toISO()===e}const I9=Te({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:F9()});function ad(e){return Qo(e,I9,{allowExtraKeys:!0})}class Gv extends P1{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||pm}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:O9}=MD,tp=e=>e,rp=()=>document.createComment(""),Xs=(e,t,r)=>{const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=n.insertBefore(rp(),o),s=n.insertBefore(rp(),o);r=new O9(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==s._$AU&&r._$AP(u)}if(i!==o||a){let u=r._$AA;for(;u!==i;){const l=tp(u).nextSibling;tp(n).insertBefore(u,o),u=l}}}return r},Ko=(e,t,r=e)=>(e._$AI(t,r),e),B9={},R9=(e,t=B9)=>e._$AH=t,L9=e=>e._$AH,ud=e=>{e._$AR(),e._$AA.remove()};const ah={ATTRIBUTE:1,CHILD:2,ELEMENT:6},no=e=>(...t)=>({_$litDirective$:e,values:t});class oo{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const j9={attribute:!0,type:String,converter:al,reflect:!1,hasChanged:Qf},U9=(e=j9,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function _9(e){return(t,r)=>typeof r=="object"?U9(e,t,r):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}const ir=no(class extends oo{constructor(e){if(super(e),e.type!==ah.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Cr}});const it=e=>e??te;function V9(e,t,r){return e?t(e):r?.(e)}class W9 extends ma{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function z9(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(a=>!!a.index).length;if(n||o)return[...e];const i=e.map(a=>[a]);return i.length||(i[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(i[a]=[])}),t.forEach(a=>{const u=i[a.index];u&&u.splice(0,0,...a.values)}),i.flat()}function gf(e){return S.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function uh(e){return S.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Zv(e){return So(e,t=>{if(gf(t))return t.definition;if(uh(t))return t.tagInterpolationKey||t},S.isTruthy)}const Hv=new WeakMap;function q9(e,t){const r=Zv(t);return Jv(Hv,[e,...r]).value?.template}function K9(e,t,r){const n=Zv(t);return Xv(Hv,[e,...n],r)}function Jv(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Yv(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Jv(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Yv(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Xv(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:s}=Yv(e,t,n);if(!i)return{result:!1,reason:s};const a=o??{nested:void 0,template:void 0};if(o||e.set(i,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),Xv(u,t,r,n+1)}function Qv(e,t,r){const n=q9(e,t),o=n??r();if(!n){const a=K9(e,t,o);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const i=o.valuesTransform(t),s=z9(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function ew(e,t,r,n){const o=[],i=[],s=[],a=[];return e.forEach((l,c)=>{const d=o.length-1,f=o[d],m=c-1,w=t[m];n&&n(l);let v,E=[];if(typeof f=="string"&&(v=r(f,l,w),v)){o[d]=[f,v.replacement].join(""),s.push(m);const D=v.getExtraValues;E=D?D(w):[],E.length&&D?(o[d]+=" ",E.forEach((M,O)=>{O&&o.push(" ")}),a.push(M=>{const O=M[m],j=D(O);return{index:m,values:j}}),o.push(l)):o[d]+=l}v||o.push(l);const k=e.raw[c];v?(i[d]=[i[d],v.replacement,k].join(""),E.length&&E.forEach(()=>{i.push("")})):i.push(k)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function G9(...[e,t,r]){if(uh(r))return{replacement:r.tagName,getExtraValues:void 0}}function Z9(e,t){return ew(e,t,G9)}function A(e,...t){const r=Qv(e,t,()=>Z9(e,t));return zu(r.strings,...r.values)}const H9={allowPolymorphicState:!1,errorHandler:void 0};function tw(e,t){const r=e.instanceState;ze(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&ze(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class J9 extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function lh(){return e=>class extends J9{static type=e;_type=e;constructor(t){super(e,t)}}}function pt(){return lh()}function Y9(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=lh()([e,n].join("-"));return r[n]=o,r},{}):{}}function X9(e){return e?Kt(e,t=>t):{}}function rw(e,t){t in e||_9()(e,t)}function Q9(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function np(e,t){const r=e;function n(s){t?Q9(s,e,e.tagName):rw(e,s)}function o(s,a){return n(a),r[a]}return new Proxy({},{get:o,set(s,a,u){n(a);const l=r[a];function c(f){s[a]=f,r[a]=f}const d=e.observablePropertyListenerMap[a];if(l!==u&&ad(l)&&d&&l.removeListener(d),ad(u))if(d)u.listen(!1,d);else{let f=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=f,u.listen(!1,f)}else ad(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return o(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function op(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function ip(e,t,r){return r?Ll(r,o=>({key:o,value:[e,t,o].join("-")}),{}):{}}function eT({hostClassNames:e,cssVars:t}){return{hostClasses:Kt(e,(r,n)=>({name:Ie(n),selector:Ie(`:host(.${n})`)})),cssVars:t}}function tT({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&ze(t).forEach(i=>{const s=t[i],a=r[i];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(a):e.classList.remove(a))})}function rT({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:o}){function i(a){ze(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:r,slotNames:n,testIds:o,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function Ei(...e){return $t.isEmpty(e),t=>{const r=t;if(!S.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return nT({...r,options:{...r.options}})}}function nT(e){if(!S.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!S.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...H9,...e.options},r=Y9(e.tagName,e.events),n=X9(e.hostClasses);e.hostClasses&&op(e.tagName,e.hostClasses),e.cssVars&&op(e.tagName,e.cssVars);const o=e.cssVars?Fr(e.cssVars):{},i=ip(e.tagName,"slot",e.slotNames),s=ip(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(eT({hostClassNames:n,cssVars:o})):e.styles||A``,u=e.render;function l(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:d}}const c=class extends W9{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return rT({element:this,eventsMap:r,cssVars:o,slotNamesMap:i,testIdsMap:s})}static assign=l;static events=r;static render=u;static hostClasses=n;static cssVars=o;static init=e;static slotNames=i;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const d=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(d);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");ze(m).forEach(w=>{rw(this,w),this.instanceState[w]=m[w]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(d)instanceof Promise))throw new TypeError("init cannot be asynchronous");const f=u(d);if(f instanceof Promise)throw new TypeError("render cannot be asynchronous");return tT({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},f}catch(d){const f=Tl(d,`Failed to render ${e.tagName}`);return console.error(f),this._lastRenderError=f,t.errorHandler?.(f),Tt(f)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const d=this.createRenderParams();if(e.init(d)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(d=>{S.hasKey(d,"destroy")&&S.isFunction(d.destroy)&&d.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const d=this.createRenderParams();if(e.cleanup(d)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(d){tw(this,d)}observablePropertyListenerMap={};instanceInputs=np(this,!1);instanceState=np(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:X5(e.tagName,{firstLetterCase:Xn.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}class oT extends Ui{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function iT(e){return new oT(e)}const sp=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},sT=no(class extends oo{constructor(e){if(super(e),e.type!==ah.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let s=0;for(const a of e)o[s]=n?n(a,s):s,i[s]=r(a,s),s++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const o=L9(e),{values:i,keys:s}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=s,i;const a=this.ut??=[],u=[];let l,c,d=0,f=o.length-1,m=0,w=i.length-1;for(;d<=f&&m<=w;)if(o[d]===null)d++;else if(o[f]===null)f--;else if(a[d]===s[m])u[m]=Ko(o[d],i[m]),d++,m++;else if(a[f]===s[w])u[w]=Ko(o[f],i[w]),f--,w--;else if(a[d]===s[w])u[w]=Ko(o[d],i[w]),Xs(e,u[w+1],o[d]),d++,w--;else if(a[f]===s[m])u[m]=Ko(o[f],i[m]),Xs(e,o[d],o[f]),f--,m++;else if(l===void 0&&(l=sp(s,m,w),c=sp(a,d,f)),l.has(a[d]))if(l.has(a[f])){const v=c.get(s[m]),E=v!==void 0?o[v]:null;if(E===null){const k=Xs(e,o[d]);Ko(k,i[m]),u[m]=k}else u[m]=Ko(E,i[m]),Xs(e,o[d],E),o[v]=null;m++}else ud(o[f]),f--;else ud(o[d]),d++;for(;m<=w;){const v=Xs(e,u[w+1]);Ko(v,i[m]),u[m++]=v}for(;d<=f;){const v=o[d++];v!==null&&ud(v)}return this.ut=s,R9(e,u),Cr}}),aT=sT;function uu(e,t){return Ua(e,t),e.element}function uT(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Ua(e,t){const r=uT(e),n=r?`: in ${r}`:"";if(e.type!==ah.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function lT(e,t){return no(class extends oo{element;constructor(r){super(r),this.element=dn.instanceOf(uu(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),Cr}})}const Kn=lT("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const o=hi(r,"allAttributesApplied",()=>new Set);ze(t).forEach(i=>{if(i.toLowerCase()!==i)throw new Error(`Cannot assign attribute name with uppercase letters: ${i}`);o.add(i)}),o.forEach(i=>{const s=t[i];s==null||s===!1||s===te?e.removeAttribute(i):s===""||s===!0?e.setAttribute(i,""):e.setAttribute(i,String(s))})});function cT(e){const t=no(class extends oo{element;constructor(r){super(r),this.element=uu(r,e)}render(r){return this.element.setAttribute(e,r),Cr}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function q(e,t){return dT(e,t)}const dT=no(class extends oo{element;lastListenerMetaData;constructor(e){super(e),this.element=uu(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Cr}});function fT(e){return q("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const ap="onDomCreated",ci=no(class extends oo{element;constructor(e){super(e),Ua(e,ap)}update(e,[t]){Ua(e,ap);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),up="onResize",nw=no(class extends oo{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&mT(this.element,this.callback,e)});callback;constructor(e){super(e),Ua(e,up)}update(e,[t]){Ua(e,up),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function mT(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function hr(e,t,r){return V9(e,()=>t,()=>r)}const{attributeDirective:hT}=cT("data-test-id"),Zn=hT;function ow(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(t(o),Ei(...n)(r(o)))}function gT(e,t){return pT(void 0,e)}const pT=no(class extends oo{element;constructor(e){super(e),this.element=uu(e,"assign")}render(e,t){return tw(this.element,t),Cr}}),yT={};function bT(e,t){return t.map((r,n)=>{const o=e[n],i=e[n+1];if(o&&i){const{shouldHaveTagNameHere:s}=iw(o,i);if(s&&S.isString(r))return{tagName:r,tagInterpolationKey:hi(yT,r,()=>({tagName:r}))}}return r})}function iw(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function vT(...[e,t,r]){const n=gf(r)?r.definition:r,{isOpeningTag:o,shouldHaveTagNameHere:i}=iw(e,t),s=uh(n);if(s&&i&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(i&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!i||!s?void 0:{replacement:n.tagName,getExtraValues(u){const l=gf(u)?u.inputs:void 0;return[o&&l?gT(l):void 0].filter(S.isTruthy)}}}function wT(e){}function $T(e){return ew(e.strings,e.values,vT,wT)}function g(e,...t){const r=bT(e,t),n=xD(e,...r),o=Qv(e,r,()=>$T(n));return{...n,strings:o.strings,values:o.values}}function pf(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],i=(t??[""]).map((s,a)=>{const u=kT(s,n[a]);return`${s}${u}`});return Ob(i.join(""))}function kT(e,t){return t._$litType$!=null||t._$litDirective$!=null?pf(t):Array.isArray(t)?t.map(n=>pf(n)).join(""):e.endsWith("=")?`"${t}"`:t}function sw(e){return Kt(e,(t,r)=>r instanceof ne?Ie(r.toString({format:"hex"})):sw(r))}const DT="dodgerblue";function yf(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function ld({background:e,foreground:t}){return{background:e??new ne(yf(t)),foreground:t??new ne(yf(e))}}var Dl;(function(e){e.Dark="dark",e.Light="light"})(Dl||(Dl={}));function xT(e){return e==="black"?"white":"black"}const ET={black:{foregroundFaint1:new ne("#ccc"),foregroundFaint2:new ne("#eee")},white:{foregroundFaint1:new ne("#ccc"),foregroundFaint2:new ne("#eee")}},AT={black:{backgroundFaint1:new ne("#666"),backgroundFaint2:new ne("#444")},white:{backgroundFaint1:new ne("#ccc"),backgroundFaint2:new ne("#fafafa")}};function lp({themeColor:e=DT,themeStyle:t=Dl.Light}={}){const r=new ne(e),n=new ne(t===Dl.Dark?"black":"white"),o=yf(n),i=new ne(o),s={nav:{hover:ld({background:r.clone().set({"hsl.l":93})}),active:ld({background:r.clone().set({"hsl.l":90})}),selected:ld({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...AT[xT(o)],foreground:i,...ET[o]}};return sw(s)}var En;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(En||(En={}));async function bf(e=1){const t=new Qu;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function CT(e,t){return{element:e,children:aw(e)}}function aw(e,t,r){return FT(e).map(n=>{const o=aw(n);return{element:n,children:o}})}function FT(e){return[...e.children,...e.shadowRoot?.children??[]]}function cd(e){return e.matches(":focus")}function ch(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:ch(t)}function uw(e,t){if(t(e))return e;const r=ch(e);if(r)return uw(r,t)}async function ST(e){return TT(e,1)}async function TT(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{$t.isLengthAtLeast(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}function ei(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const o=t.name,i=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${i}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${i}'.`;throw new Error(s)}return n}function MT(e){const t=ch(e);return t&&uw(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function NT(e){let t=0,r=document.activeElement||void 0;for(;r;){if(e({depth:t,element:r}))return t;r=r.shadowRoot?.activeElement||void 0,r&&++t}return t}function PT({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const u=i.codePointAt(s);for(;a<r;)if(o.codePointAt(a++)===u)continue e;return!1}return!0}const IT=ri(32);function Zu(e){return e.join(IT)}function lw(e){if(!e.length)return[];const t=Zu(e),r=lw(e.slice(0,-1));return[t,...r]}const OT=["error","errors"];function BT(e){return OT.includes(e)}function RT({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Zu(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&BT(t),s=Zu(o.fullUrlBreadcrumbs);if(PT({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(u=>S.isString(u)?u:pf(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[s]){const u=lw(o.fullUrlBreadcrumbs);n(o),u.forEach(l=>r[l]=!0)}else r[s]=!1}),e.filter(o=>{const i=Zu(o.fullUrlBreadcrumbs),s=r[i];if(!S.isBoolean(s))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class dh extends Error{name="SpaRouterError"}class cp extends dh{name="GlobalUrlEventsConsolidationError"}class LT extends dh{name="SanitizationDepthMaxed"}Te({paths:[""],search:Ot(He(void 0,yc({keys:"",values:[""]}))),hash:Ot(He(void 0,""))});const jT=Te({basePath:Ot("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Ot(1,{alsoUndefined:!0}),disableWarnings:Ot(!1,{alsoUndefined:!0}),isPaused:Ot(!1,{alsoUndefined:!0})}),dd="://";function fh(...e){const t=e.join("/"),[r,n=""]=t.includes(dd)?t.split(dd):["",t];let o=!1;const i=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(o)return s;const c=l[u+1];let d=a;const f=c?.startsWith("?"),m=!a.includes("?")&&f,w=c==="?";if(f||m){o=!0;let v=!1;const E=l.slice(u+2).reduce((k,D)=>(D.includes("#")&&(v=!0),v?k.concat(D):[k,D].join("&")),"");d=[a,c,w?Ji({value:E,prefix:"&"}):E].join("")}return s.concat(d)},[]);return[r,r?dd:"",i.join("/")].join("")}var vs;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(vs||(vs={}));var ws;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(ws||(ws={}));const UT=Te({encoding:Ot(He(void 0,bs(vs))),searchParamStrategy:Ot(He(void 0,bs(ws)))});function Nu(e,t){return e.map(r=>{if(r!=null)return Qi(String(r),t)}).filter(r=>r!=null)}function Qi(e,t){return t?.encoding===vs.Decode?decodeURIComponent(e):t?.encoding===vs.Encode?encodeURIComponent(e):e}const _T=Te(yc({keys:"",values:[""]}));function VT(e,t,r){const n=r?.searchParamStrategy===ws.Clear?{}:Kt(e,(s,a)=>k5(a)),o=Kt(t,(s,a)=>{if(r?.searchParamStrategy===ws.Append){const u=n[s],l=S.isArray(u)?u:[u];if(a){const c=S.isArray(a)?a:[a];return Nu([...l,...c],r)}else return Nu(l,r)}else return S.isArray(a)?Nu(a,r):a?Nu([a],r):void 0});return jl({...n,...o},(s,a)=>!!a)}function cw(e,t){return S.isString(e)&&!e.includes("?")?{}:(S.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(i=>{const[s,...a]=K5(i,"=");return[s,a.length?a.join("="):void 0]}).reduce((i,[s,a])=>{const u=dw({options:t,key:s,value:a}),l=hi(i,u.key,()=>[]);return a!=null&&l.push(u.value),i},{})}function WT(e){if(e!=null)return S.isArray(e)?[...e]:e===""?[]:[e]}function zT(e,t){const r=So(Object.entries(e),([n,o])=>{const i=WT(o);return i?.length?i.map(s=>{const a=dw({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return r.length?gr({value:r.join("&"),prefix:"?"}):""}function dw({options:e,key:t,value:r}){return{key:Qi(t,e),value:Qi(String(r),e)}}function fw({hash:e,hostname:t,password:r,pathname:n,port:o,protocol:i,search:s,username:a}){return[i?i+"://":"",a?a+":":"",r?r+"@":"",bc({hostname:t,port:o}),mh({hash:e,pathname:n,search:s})].join("")}function mw({pathname:e}){const t=Ji({value:e,prefix:"/"});return t?t.split("/"):[]}function mh({hash:e,pathname:t,search:r}){return[gr({value:t,prefix:"/"}),r?gr({value:r,prefix:"?"}):"",e?gr({value:e,prefix:"#"}):""].join("")}function bc({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function hw({hostname:e,port:t,protocol:r}){return[r,bc({hostname:e,port:t})].filter(S.isTruthy).join("://")}function es(e,t){const r=S.isString(e)?Ji({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),o=n?gr({value:Qi(n,t),prefix:"#"}):"",i=r.replace(/#[^#]*$/,""),s=i.replace(/^[^?]*(?:\?|$)/,""),a=s?gr({value:Qi(s,t),prefix:"?"}):"",u=i.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=c.replace(/@.*/,""),f=c.replace(/^[^@]*@/,""),m=d!==f,[w,...v]=m?d.split(":").reverse():[],E=v.toReversed().join("").replace(/[/:]/g,"")||"",k=w?.replace(/[/:]/g,"")||"",D=q5(f.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),M=D[0]?.endsWith("]")?"":D[1]===":"&&D[0]||"",j=f.replace(new RegExp(`:${M}($|/)`),"$1").replace(/\/.*/,""),Z=f.replace(/^[^/]*(\/|$)/,"$1"),H=Qi(Z.replace(/^[^/]*(?:\/|$)/,"/"),t),ae=bc({hostname:j,port:M}),_e=hw({hostname:j,port:M,protocol:l}),Et=fw({hash:o,hostname:j,password:k,pathname:H,port:M,protocol:l,search:a,username:E}),Pt=cw(a),vr=mw({pathname:H});return{fullPath:mh({hash:o,pathname:H,search:a}),hash:o,host:ae,hostname:j,href:Et,origin:_e,password:k,pathname:H,paths:vr,port:M,protocol:l,search:a,searchParams:Pt,username:E}}Te({hash:Ot(He(void 0,"")),search:Ot(He(void 0,"",yc({keys:"",values:He(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:Ot(He(void 0,"")),pathname:Ot(He(void 0,"")),paths:Ot(He(void 0,[""])),protocol:Ot(He(void 0,"")),username:Ot(He(void 0,"")),password:Ot(He(void 0,"")),port:Ot(He(void 0,"",-1))});function qT(e,t,r){const n=!!r,o=t==null||Qo(t,UT,{allowExtraKeys:!1}),i=o?es(""):S.instanceOf(e,URL)||S.isString(e)?es(e):e,s=o?e:t,a=S.isString(s)&&s.startsWith("."),u=S.isString(s)||S.instanceOf(s,URL)?jl(es(s),(v,E)=>S.isTruthy(E)):s,l=n?r:o?t:void 0,c=Kt(i,(v,E)=>{if(!S.hasKey(u,v))return E;const k=u[v];return S.isNumber(k)?String(k):S.isString(k)?v==="hash"&&k?gr({value:k,prefix:"#"}):v==="pathname"?gr({value:k,prefix:"/"}):k:E});S.hasKey(u,"paths")&&u.paths&&(c.pathname=fh(a?i.pathname:"",...u.paths));const d=S.isString(u.search)?cw(gr({value:u.search,prefix:"?"})):E5(u.search||{}),f=VT(c.searchParams,d,{...l,encoding:vs.None}),m=zT(f,l);return{...c,searchParams:f,search:m,paths:mw(c),fullPath:mh(c),host:bc(c),origin:hw(c),href:fw({...c,search:m})}}const KT=Te({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:_T,hash:"",fullPath:"/",href:"/"});({...KT.default});const GT=0;function gw(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==GT)}const vc="locationchange",Wn=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const dp=Wn?.pushState;function fp(...e){if(!dp)return;const t=dp.apply(Wn,e);return globalThis.dispatchEvent(new Event(vc)),t}const mp=Wn?.replaceState;function hp(...e){if(!mp)return;const t=mp.apply(Wn,e);return globalThis.dispatchEvent(new Event(vc)),t}function ZT(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Wn)){{if(Wn.pushState===fp)throw new cp("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Wn.replaceState===hp)throw new cp("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Wn.pushState=fp,Wn.replaceState=hp,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(vc))})}}function Pu(e,t){const r=es(e),n=Ji({value:Ji({value:r.pathname,prefix:gr({value:t||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],i=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?Ji({value:r.hash,prefix:"#"}):void 0;return{paths:o,search:i,hash:s}}class hh{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){Wv(t,jT),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new Gv({defaultValue:r,equalityCheck:()=>!1}),ZT(),this.removeGlobalListener=Kf(globalThis,vc,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new LT("Looping route sanitization detected; aborting window URL change listener.");const n=Pu(globalThis.location.href,this.params.basePath),o=t.sanitizeRoute(n);S.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:fh(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Pu(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...Pu(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),i=this.routeIncludesBasePath(Pu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return qT(globalThis.location.href,{paths:i.paths,search:i.search,hash:i.hash?gr({value:i.hash,prefix:"#"}):""},{searchParamStrategy:ws.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:o}=es(n);return this.params.isPaused||!r.force&&S.jsonEquals(es(globalThis.location.href).fullPath,o)?!1:r.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(t,r){return gw(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new dh(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function HT(e){return new hh({basePath:e,sanitizeRoute(t){return{paths:JT(t.paths),hash:void 0,search:void 0}}})}function JT(e){const t=e[0];if(S.isEnumValue(t,dr)){if(t===dr.Book)return[dr.Book,...e.slice(1)];if(t===dr.Search)return e[1]?[t,e[1]]:[dr.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return ss.paths}const xl=lh()("element-book-change-route"),gp="vira-",Ke=ow({assertInputs:e=>{if(!e.tagName.startsWith(gp))throw new Error(`Tag name should start with '${gp}' but got '${e.tagName}'`)}});var $e=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Select="select",e.Checkbox="checkbox",e))($e||{});function fd(e,t){if(e)return t?Vf({value:e,suffix:"*"}):e}function YT(e){return _d(e).every(t=>t.isHidden||!t.isRequired?!0:S.isString(t.value)?!!t.value:t.value!=null)}const $=Fr({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function ue({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function XT(e){try{if(!e)throw new Error("invalid empty color");return new ne(e)}catch{throw new Error(`Invalid color: ${y(e)}`)}}function pp(e,t){const r=ze(t).map(n=>{const o=t[n],i=XT(o);return`${$[n].name}: ${i.toString()};`}).join(" ");return ue({name:e.name,svgTemplate:g`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const QT=ue({name:"Bell24Icon",svgTemplate:g`
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
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
        </svg>
    `}),eM=ue({name:"Chat24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
        </svg>
    `}),gh=ue({name:"Check24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),tM=ue({name:"ChevronDown24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${$["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${$["vira-icon-stroke-width"].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),ph=ue({name:"ChevronUp24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${$["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${$["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),pw=ue({name:"CloseX24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),rM=ue({name:"Commit24Icon",svgTemplate:g`
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
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),nM=ue({name:"Copy24Icon",svgTemplate:g`
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
                fill=${$["vira-icon-fill-color"].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),oM=ue({name:"Document24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),iM=ue({name:"DocumentSearch24Icon",svgTemplate:g`
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
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
        </svg>
    `}),sM=ue({name:"DoubleChevron24Icon",svgTemplate:g`
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
                fill=${$["vira-icon-fill-color"].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),yw=ue({name:"Element16Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Gr=ue({name:"Element24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),aM=ue({name:"ExternalLink24Icon",svgTemplate:g`
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
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),bw=ue({name:"EyeClosed24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${$["vira-icon-fill-color"].value}
            stroke=${$["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${$["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),vw=ue({name:"EyeOpen24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${$["vira-icon-fill-color"].value}
            stroke=${$["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${$["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),uM=ue({name:"Filter24Icon",svgTemplate:g`
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
                fill=${$["vira-icon-fill-color"].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),lM=ue({name:"Link24Icon",svgTemplate:g`
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
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />

            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
        </svg>
    `}),ww=ue({name:"Loader24Icon",svgTemplate:g`
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
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Hn=Fr({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),cM=A`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Hn["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,di=ue({name:"LoaderAnimated24Icon",svgTemplate:g`
        <style>
            ${cM}
        </style>
        ${ww.svgTemplate}
    `}),dM=ue({name:"Lock24Icon",svgTemplate:g`
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
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),va=ue({name:"Options24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),fM=ue({name:"Pencil24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),mM=ue({name:"Shield24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
        </svg>
    `}),hM=ue({name:"SortAscending24Icon",svgTemplate:g`
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
                fill=${$["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),gM=ue({name:"SortDescending24Icon",svgTemplate:g`
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
                fill=${$["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),pM=ue({name:"SpeakerLoud24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
        </svg>
    `}),yM=ue({name:"SpeakerMedium24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
        </svg>
    `}),bM=ue({name:"SpeakerMuted24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
        </svg>
    `}),vM=ue({name:"SpeakerQuiet24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
        </svg>
    `}),wM=ue({name:"Star24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
        </svg>
    `}),El=ue({name:"StatusFailure24Icon",svgTemplate:g`
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
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),$M=ue({name:"StatusInProgress24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),kM=ue({name:"StatusSuccess24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),DM=ue({name:"StatusUnknown24Icon",svgTemplate:g`
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
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),xM=ue({name:"StatusWarning24Icon",svgTemplate:g`
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
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),EM=ue({name:"Upload24Icon",svgTemplate:g`
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
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
                fill=${$["vira-icon-fill-color"].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),$w=ue({name:"X24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),vf={Bell24Icon:QT,Chat24Icon:eM,Check24Icon:gh,ChevronDown24Icon:tM,ChevronUp24Icon:ph,CloseX24Icon:pw,Commit24Icon:rM,Copy24Icon:nM,Document24Icon:oM,DocumentSearch24Icon:iM,DoubleChevron24Icon:sM,Element16Icon:yw,Element24Icon:Gr,ExternalLink24Icon:aM,EyeClosed24Icon:bw,EyeOpen24Icon:vw,Filter24Icon:uM,Link24Icon:lM,Loader24Icon:ww,LoaderAnimated24Icon:di,Lock24Icon:dM,Options24Icon:va,Pencil24Icon:fM,Shield24Icon:mM,SortAscending24Icon:hM,SortDescending24Icon:gM,SpeakerLoud24Icon:pM,SpeakerMedium24Icon:yM,SpeakerMuted24Icon:bM,SpeakerQuiet24Icon:vM,Star24Icon:wM,StatusFailure24Icon:El,StatusInProgress24Icon:$M,StatusSuccess24Icon:kM,StatusUnknown24Icon:DM,StatusWarning24Icon:xM,Upload24Icon:EM,X24Icon:$w},Zr=Fr({"vira-form-input-radius":"8px"}),fi=A`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,$s=Fr({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":A`calc(${Zr["vira-form-input-radius"].value} + 2px)`});function lu({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const o=Ie(Aa(r+t+e)),i=A`
        content: '';
        top: calc(${o} * -1);
        left: calc(${o} * -1);
        position: absolute;
        width: calc(100% + calc(${o} * 2));
        height: calc(100% + calc(${o} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${r}px solid ${$s["vira-focus-outline-color"].value};
        border-radius: ${$s["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return n?i:A`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${i}
        }
    `}const oe=Fr({"vira-form-border-color":"#cccccc","vira-form-placeholder-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-text-selection-color":"#cfe9ff","vira-form-selection-hover-background-color":"#e6f9fe","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#e6f9fe","vira-form-selection-active-foreground-color":"black","vira-form-error-foreground-color":"red","vira-form-success-foreground-color":"green","vira-form-label-font-weight":"bold"}),W=Ke()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>A`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),xe=Ke()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal},styles:({hostClasses:e})=>A`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${W} {
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
                font-weight: ${oe["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${oe["vira-form-selection-hover-background-color"].value};
            }
        }

        ${W} {
            ${$["vira-icon-stroke-width"].name}: 2px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${oe["vira-form-border-color"].value};
            color: ${oe["vira-form-foreground-color"].value};
            border-radius: ${Zr["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${lu({elementBorderSize:1})}

            &.checked {
                & ${W} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${oe["vira-form-error-foreground-color"].value};
            }

            &:active {
                background-color: ${oe["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${fi};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:pt()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}const o=e.label?g`
                  <span
                      class="label-text"
                      ${Kn(e.attributePassthrough?.text)}
                      style=${it(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:te;return g`
            <label
                class=${ir({disabled:!!e.disabled})}
                ${Kn(e.attributePassthrough?.label)}
                style=${it(e.stylePassthrough?.label)}
                ${q("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${ir({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${it(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${Kn(e.attributePassthrough?.["custom-checkbox"])}
                    style=${it(e.stylePassthrough?.["custom-checkbox"])}
                    ${fT(n)}
                >
                    <${W.assign({icon:gh,fitContainer:!0})}
                        ${Kn(e.attributePassthrough?.[W.tagName])}
                        style=${it(e.stylePassthrough?.[W.tagName])}
                    ></${W}>
                </span>
            </label>
        `}}),AM=Fr({"vira-monospace":"monospace"}),cu=A`
    padding: 0;
    margin: 0;
`,Wr=A`
    ${cu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,md=Fr({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),ts={menuShadow:A`
        filter: drop-shadow(0px 5px 5px ${md["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:A`
        filter: drop-shadow(0px -5px 5px ${md["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:A`
        box-shadow: 0 5px 15px ${md["modal-shadow-color"].value};
    `},ks=A`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,h=Fr({"vira-white":"#ffffff","vira-black":"#000000","vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d6","vira-red-20":"#ffc1bc","vira-red-30":"#ffa6a2","vira-red-40":"#ff8887","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001e","vira-red-80":"#a60012","vira-red-90":"#760004","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdcab","vira-orange-20":"#ffc768","vira-orange-30":"#ffac3a","vira-orange-40":"#f49400","vira-orange-50":"#dd8100","vira-orange-60":"#c66b00","vira-orange-70":"#a85800","vira-orange-80":"#884400","vira-orange-90":"#682800","vira-yellow-5":"#f5f0c6","vira-yellow-10":"#eee399","vira-yellow-20":"#e9d100","vira-yellow-30":"#d6bf00","vira-yellow-40":"#c1ac00","vira-yellow-50":"#ad9800","vira-yellow-60":"#958400","vira-yellow-70":"#7d6e00","vira-yellow-80":"#635700","vira-yellow-90":"#473d00","vira-green-5":"#def6cc","vira-green-10":"#c4eea3","vira-green-20":"#94e53b","vira-green-30":"#81d316","vira-green-40":"#71bf00","vira-green-50":"#5eaa00","vira-green-60":"#509400","vira-green-70":"#427c00","vira-green-80":"#316200","vira-green-90":"#1f4600","vira-teal-5":"#d3f5ed","vira-teal-10":"#aeeedf","vira-teal-20":"#4ce6cc","vira-teal-30":"#31d3ba","vira-teal-40":"#00c0a7","vira-teal-50":"#00aa93","vira-teal-60":"#00937e","vira-teal-70":"#007c68","vira-teal-80":"#006252","vira-teal-90":"#004539","vira-blue-5":"#def1ff","vira-blue-10":"#c0e7ff","vira-blue-20":"#9dd7ff","vira-blue-30":"#78c5ff","vira-blue-40":"#5fb1fc","vira-blue-50":"#4d9de7","vira-blue-60":"#3588d0","vira-blue-70":"#1971b7","vira-blue-80":"#00579a","vira-blue-90":"#003a7b","vira-purple-5":"#f3ebff","vira-purple-10":"#e8dcff","vira-purple-20":"#e1c5ff","vira-purple-30":"#d1afff","vira-purple-40":"#c198ff","vira-purple-50":"#b07dff","vira-purple-60":"#a25cff","vira-purple-70":"#8a3cf2","vira-purple-80":"#710dd3","vira-purple-90":"#4c0099","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5f7","vira-pink-20":"#ffbaf5","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb8","vira-pink-60":"#cd58a2","vira-pink-70":"#b3408b","vira-pink-80":"#962472","vira-pink-90":"#6f0050","vira-grey-5":"#eeeef1","vira-grey-10":"#e1e1e4","vira-grey-20":"#d0d0d6","vira-grey-30":"#bebec3","vira-grey-40":"#ababb2","vira-grey-50":"#98989c","vira-grey-60":"#838489","vira-grey-70":"#6e6e73","vira-grey-80":"#57575c","vira-grey-90":"#3d3d43"});function Al(e){return S.isPrimitive(e)||"_$cssResult$"in e?String(e):e.default}function xn(e,t,r,n){if(S.isPrimitive(t)||"_$cssResult$"in t)return t;if("refDefaultBackground"in t)return`var(--default-bg, ${Al(r.background)})`;if("refDefaultForeground"in t)return`var(--default-fg, ${Al(r.foreground)})`;if("refBackground"in t||"refForeground"in t){const o=S.hasKey(t,"refBackground")?"refBackground":S.hasKey(t,"refForeground")?"refForeground":void 0,i=o&&S.hasKey(t,o)?t[o]:void 0,s=o==="refBackground"?"background":"foreground",a=i&&n[i];if(!a)throw new Error(`Color theme ${o} reference '${i}' does not exist. (Referenced from '${e}'.)`);const u=a[s]||(s==="foreground"?xn("default-fg",r.foreground,r,n):xn("default-bg",r.background,r,n));return`var(--${i}-${s==="foreground"?"fg":"bg"}, ${xn(i,u,r,n)})`}else return t.value}const Li="theme-default";function yh(e,t){try{if(Li in t)throw new Error(`Cannot define theme color by name '${Li}', it is used internally.`);const r=Fr({"default-fg":xn("default-fg",e.foreground,e,t),"default-bg":xn("default-bg",e.background,e,t),"default-inverse-fg":xn("default-inverse-fg",e.background,e,t),"default-inverse-bg":xn("default-inverse-bg",e.foreground,e,t)}),n=Yn(t).reduce((l,[c,d])=>{const f=yp(c);return l[f.foreground]=d.foreground?xn([c,"foreground"].join(" "),d.foreground,e,t):`var(${r["default-fg"].name}, ${r["default-fg"].default})`,l[f.background]=d.background?xn([c,"background"].join(" "),d.background,e,t):`var(${r["default-bg"].name}, ${r["default-bg"].default})`,l[f.foregroundInverse]=`var(--${f.background}, ${l[f.background]})`,l[f.backgroundInverse]=`var(--${f.foreground}, ${l[f.foreground]})`,l},{}),o=Fr(n),i={},s={};Yn(t).forEach(([l,c])=>{$t.isString(l);const d=yp(l),f=o[d.foreground],m=o[d.background],w=o[d.foregroundInverse],v=o[d.backgroundInverse];$t.isDefined(f),$t.isDefined(m),$t.isDefined(w),$t.isDefined(v),i[l]={foreground:f,background:m,init:c,name:l},s[l]={foreground:w,background:v,init:c,name:l}});const a={foreground:r["default-fg"],background:r["default-bg"],init:e,name:Li},u={...a,foreground:r["default-inverse-fg"],background:r["default-inverse-bg"]};return{colors:{[Li]:a,...i},inverse:{[Li]:u,...s},init:{colors:t,default:e}}}catch(r){throw globalThis.setTimeout(()=>Wf.error(r)),r}}function yp(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}function hd({originalTheme:e,layerKey:t,themeColor:r,override:n,overrideValues:o}){const i=n?.[t];i&&(o[String(r[t].name)]=String(xn(t,i,e.init.default,e.init.colors)))}function kw(e,t,{defaultOverride:r,colorOverrides:n}){const o={};r&&ze(r).forEach(u=>{hd({originalTheme:e,layerKey:u,override:r,themeColor:e.colors[Li],overrideValues:o})});const i={};n&&Yn(n).forEach(([u,l])=>{const c=e.colors[u];if(!c)throw new Error(`Override color name '${u}' does not exist in the theme being overridden.`);hd({originalTheme:e,layerKey:"foreground",override:l,themeColor:c,overrideValues:i}),hd({originalTheme:e,layerKey:"background",override:l,themeColor:c,overrideValues:i})});const s=Kt(e.init.colors,(u,l)=>{const c=n?.[u];return{...l,...c}}),a=yh({...e.init.default,...r},s);return{name:t,overrides:{...o,...i},originalTheme:e,asTheme:a}}const Dw=yh({foreground:"black",background:"white"},{"vira-red-foreground-body":{foreground:h["vira-red-80"]},"vira-red-foreground-header":{foreground:h["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:h["vira-red-30"]},"vira-red-foreground-decoration":{foreground:h["vira-red-20"]},"vira-red-foreground-invisible":{foreground:h["vira-red-10"]},"vira-red-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-red-80"]},"vira-red-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-red-40"]},"vira-red-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-red-30"]},"vira-red-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-red-20"]},"vira-red-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-red-5"]},"vira-red-on-self-body":{foreground:h["vira-red-90"],background:"#ffe9e6"},"vira-red-on-self-header":{foreground:h["vira-red-60"],background:"#ffe9e6"},"vira-red-on-self-placeholder":{foreground:h["vira-red-50"],background:"#ffe9e6"},"vira-red-on-self-decoration":{foreground:h["vira-red-30"],background:"#ffe9e6"},"vira-red-on-self-invisible":{foreground:h["vira-red-20"],background:"#ffe9e6"},"vira-orange-foreground-body":{foreground:h["vira-orange-80"]},"vira-orange-foreground-header":{foreground:h["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:h["vira-orange-30"]},"vira-orange-foreground-decoration":{foreground:h["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:h["vira-orange-5"]},"vira-orange-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-orange-80"]},"vira-orange-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-orange-40"]},"vira-orange-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-orange-30"]},"vira-orange-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-orange-20"]},"vira-orange-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-orange-5"]},"vira-orange-on-self-body":{foreground:h["vira-orange-90"],background:"#ffebd1"},"vira-orange-on-self-header":{foreground:h["vira-orange-60"],background:"#ffebd1"},"vira-orange-on-self-placeholder":{foreground:h["vira-orange-50"],background:"#ffebd1"},"vira-orange-on-self-decoration":{foreground:h["vira-orange-30"],background:"#ffebd1"},"vira-orange-on-self-invisible":{foreground:h["vira-orange-20"],background:"#ffebd1"},"vira-yellow-foreground-body":{foreground:h["vira-yellow-80"]},"vira-yellow-foreground-header":{foreground:h["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:h["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:h["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:h["vira-yellow-5"]},"vira-yellow-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-yellow-80"]},"vira-yellow-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-yellow-40"]},"vira-yellow-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-yellow-30"]},"vira-yellow-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-yellow-20"]},"vira-yellow-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:h["vira-yellow-90"],background:"#f5f0c6"},"vira-yellow-on-self-header":{foreground:h["vira-yellow-60"],background:"#f5f0c6"},"vira-yellow-on-self-placeholder":{foreground:h["vira-yellow-40"],background:"#f5f0c6"},"vira-yellow-on-self-decoration":{foreground:h["vira-yellow-30"],background:"#f5f0c6"},"vira-yellow-on-self-invisible":{foreground:h["vira-yellow-10"],background:"#f5f0c6"},"vira-green-foreground-body":{foreground:h["vira-green-80"]},"vira-green-foreground-header":{foreground:h["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:h["vira-green-40"]},"vira-green-foreground-decoration":{foreground:h["vira-green-20"]},"vira-green-foreground-invisible":{foreground:h["vira-green-5"]},"vira-green-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-green-80"]},"vira-green-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-green-40"]},"vira-green-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-green-30"]},"vira-green-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-green-20"]},"vira-green-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-green-5"]},"vira-green-on-self-body":{foreground:h["vira-green-90"],background:"#def6cc"},"vira-green-on-self-header":{foreground:h["vira-green-60"],background:"#def6cc"},"vira-green-on-self-placeholder":{foreground:h["vira-green-40"],background:"#def6cc"},"vira-green-on-self-decoration":{foreground:h["vira-green-30"],background:"#def6cc"},"vira-green-on-self-invisible":{foreground:h["vira-green-10"],background:"#def6cc"},"vira-teal-foreground-body":{foreground:h["vira-teal-80"]},"vira-teal-foreground-header":{foreground:h["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:h["vira-teal-40"]},"vira-teal-foreground-decoration":{foreground:h["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:h["vira-teal-5"]},"vira-teal-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-teal-80"]},"vira-teal-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-teal-40"]},"vira-teal-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-teal-30"]},"vira-teal-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-teal-20"]},"vira-teal-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-teal-5"]},"vira-teal-on-self-body":{foreground:h["vira-teal-90"],background:"#d3f5ed"},"vira-teal-on-self-header":{foreground:h["vira-teal-60"],background:"#d3f5ed"},"vira-teal-on-self-placeholder":{foreground:h["vira-teal-50"],background:"#d3f5ed"},"vira-teal-on-self-decoration":{foreground:h["vira-teal-30"],background:"#d3f5ed"},"vira-teal-on-self-invisible":{foreground:h["vira-teal-20"],background:"#d3f5ed"},"vira-blue-foreground-body":{foreground:h["vira-blue-80"]},"vira-blue-foreground-header":{foreground:h["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:h["vira-blue-40"]},"vira-blue-foreground-decoration":{foreground:h["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:h["vira-blue-5"]},"vira-blue-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-blue-70"]},"vira-blue-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-blue-40"]},"vira-blue-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-blue-30"]},"vira-blue-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-blue-20"]},"vira-blue-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-blue-5"]},"vira-blue-on-self-body":{foreground:h["vira-blue-90"],background:"#def1ff"},"vira-blue-on-self-header":{foreground:h["vira-blue-60"],background:"#def1ff"},"vira-blue-on-self-placeholder":{foreground:h["vira-blue-50"],background:"#def1ff"},"vira-blue-on-self-decoration":{foreground:h["vira-blue-30"],background:"#def1ff"},"vira-blue-on-self-invisible":{foreground:h["vira-blue-10"],background:"#def1ff"},"vira-purple-foreground-body":{foreground:h["vira-purple-80"]},"vira-purple-foreground-header":{foreground:h["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:h["vira-purple-40"]},"vira-purple-foreground-decoration":{foreground:h["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:h["vira-purple-5"]},"vira-purple-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-purple-80"]},"vira-purple-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-purple-40"]},"vira-purple-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-purple-30"]},"vira-purple-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-purple-20"]},"vira-purple-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-purple-5"]},"vira-purple-on-self-body":{foreground:h["vira-purple-90"],background:"#f3ebff"},"vira-purple-on-self-header":{foreground:h["vira-purple-60"],background:"#f3ebff"},"vira-purple-on-self-placeholder":{foreground:h["vira-purple-40"],background:"#f3ebff"},"vira-purple-on-self-decoration":{foreground:h["vira-purple-30"],background:"#f3ebff"},"vira-purple-on-self-invisible":{foreground:h["vira-purple-10"],background:"#f3ebff"},"vira-pink-foreground-body":{foreground:h["vira-pink-80"]},"vira-pink-foreground-header":{foreground:h["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:h["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:h["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:h["vira-pink-5"]},"vira-pink-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-pink-80"]},"vira-pink-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-pink-40"]},"vira-pink-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-pink-30"]},"vira-pink-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-pink-20"]},"vira-pink-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-pink-5"]},"vira-pink-on-self-body":{foreground:h["vira-pink-90"],background:"#ffe7fb"},"vira-pink-on-self-header":{foreground:h["vira-pink-60"],background:"#ffe7fb"},"vira-pink-on-self-placeholder":{foreground:h["vira-pink-50"],background:"#ffe7fb"},"vira-pink-on-self-decoration":{foreground:h["vira-pink-30"],background:"#ffe7fb"},"vira-pink-on-self-invisible":{foreground:h["vira-pink-20"],background:"#ffe7fb"},"vira-grey-foreground-body":{foreground:h["vira-grey-80"]},"vira-grey-foreground-header":{foreground:h["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:h["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:h["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:h["vira-grey-5"]},"vira-grey-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-grey-80"]},"vira-grey-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-grey-40"]},"vira-grey-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-grey-30"]},"vira-grey-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-grey-20"]},"vira-grey-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-grey-5"]},"vira-grey-on-self-body":{foreground:h["vira-grey-90"],background:"#eeeef1"},"vira-grey-on-self-header":{foreground:h["vira-grey-60"],background:"#eeeef1"},"vira-grey-on-self-placeholder":{foreground:h["vira-grey-40"],background:"#eeeef1"},"vira-grey-on-self-decoration":{foreground:h["vira-grey-30"],background:"#eeeef1"},"vira-grey-on-self-invisible":{foreground:h["vira-grey-20"],background:"#eeeef1"}}),CM=kw(Dw,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-body":{foreground:h["vira-red-20"],background:"black"},"vira-red-foreground-header":{background:"black"},"vira-red-foreground-placeholder":{foreground:h["vira-red-60"],background:"black"},"vira-red-foreground-decoration":{foreground:h["vira-red-80"],background:"black"},"vira-red-foreground-invisible":{foreground:h["vira-red-90"],background:"black"},"vira-red-background-body":{foreground:"black",background:h["vira-red-20"]},"vira-red-background-header":{foreground:"black",background:h["vira-red-50"]},"vira-red-background-placeholder":{foreground:"black",background:h["vira-red-60"]},"vira-red-background-decoration":{foreground:"black",background:h["vira-red-80"]},"vira-red-background-invisible":{foreground:"black",background:h["vira-red-90"]},"vira-red-on-self-body":{foreground:h["vira-red-10"],background:"#760004"},"vira-red-on-self-header":{foreground:h["vira-red-40"],background:"#760004"},"vira-red-on-self-placeholder":{background:"#760004"},"vira-red-on-self-decoration":{foreground:h["vira-red-70"],background:"#760004"},"vira-red-on-self-invisible":{foreground:h["vira-red-80"],background:"#760004"},"vira-orange-foreground-body":{foreground:h["vira-orange-20"],background:"black"},"vira-orange-foreground-header":{background:"black"},"vira-orange-foreground-placeholder":{foreground:h["vira-orange-60"],background:"black"},"vira-orange-foreground-decoration":{foreground:h["vira-orange-80"],background:"black"},"vira-orange-foreground-invisible":{foreground:h["vira-orange-90"],background:"black"},"vira-orange-background-body":{foreground:"black",background:h["vira-orange-20"]},"vira-orange-background-header":{foreground:"black",background:h["vira-orange-50"]},"vira-orange-background-placeholder":{foreground:"black",background:h["vira-orange-60"]},"vira-orange-background-decoration":{foreground:"black",background:h["vira-orange-80"]},"vira-orange-background-invisible":{foreground:"black",background:h["vira-orange-90"]},"vira-orange-on-self-body":{foreground:h["vira-orange-10"],background:"#682800"},"vira-orange-on-self-header":{foreground:h["vira-orange-40"],background:"#682800"},"vira-orange-on-self-placeholder":{background:"#682800"},"vira-orange-on-self-decoration":{foreground:h["vira-orange-70"],background:"#682800"},"vira-orange-on-self-invisible":{foreground:h["vira-orange-80"],background:"#682800"},"vira-yellow-foreground-body":{foreground:h["vira-yellow-20"],background:"black"},"vira-yellow-foreground-header":{background:"black"},"vira-yellow-foreground-placeholder":{foreground:h["vira-yellow-60"],background:"black"},"vira-yellow-foreground-decoration":{foreground:h["vira-yellow-80"],background:"black"},"vira-yellow-foreground-invisible":{foreground:h["vira-yellow-90"],background:"black"},"vira-yellow-background-body":{foreground:"black",background:h["vira-yellow-20"]},"vira-yellow-background-header":{foreground:"black",background:h["vira-yellow-50"]},"vira-yellow-background-placeholder":{foreground:"black",background:h["vira-yellow-60"]},"vira-yellow-background-decoration":{foreground:"black",background:h["vira-yellow-80"]},"vira-yellow-background-invisible":{foreground:"black",background:h["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:h["vira-yellow-10"],background:"#473d00"},"vira-yellow-on-self-header":{foreground:h["vira-yellow-40"],background:"#473d00"},"vira-yellow-on-self-placeholder":{foreground:h["vira-yellow-50"],background:"#473d00"},"vira-yellow-on-self-decoration":{foreground:h["vira-yellow-70"],background:"#473d00"},"vira-yellow-on-self-invisible":{foreground:h["vira-yellow-80"],background:"#473d00"},"vira-green-foreground-body":{foreground:h["vira-green-20"],background:"black"},"vira-green-foreground-header":{background:"black"},"vira-green-foreground-placeholder":{foreground:h["vira-green-60"],background:"black"},"vira-green-foreground-decoration":{foreground:h["vira-green-80"],background:"black"},"vira-green-foreground-invisible":{foreground:h["vira-green-90"],background:"black"},"vira-green-background-body":{foreground:"black",background:h["vira-green-20"]},"vira-green-background-header":{foreground:"black",background:h["vira-green-50"]},"vira-green-background-placeholder":{foreground:"black",background:h["vira-green-60"]},"vira-green-background-decoration":{foreground:"black",background:h["vira-green-80"]},"vira-green-background-invisible":{foreground:"black",background:h["vira-green-90"]},"vira-green-on-self-body":{foreground:h["vira-green-10"],background:"#1f4600"},"vira-green-on-self-header":{foreground:h["vira-green-40"],background:"#1f4600"},"vira-green-on-self-placeholder":{foreground:h["vira-green-50"],background:"#1f4600"},"vira-green-on-self-decoration":{foreground:h["vira-green-70"],background:"#1f4600"},"vira-green-on-self-invisible":{foreground:h["vira-green-80"],background:"#1f4600"},"vira-teal-foreground-body":{foreground:h["vira-teal-20"],background:"black"},"vira-teal-foreground-header":{background:"black"},"vira-teal-foreground-placeholder":{foreground:h["vira-teal-60"],background:"black"},"vira-teal-foreground-decoration":{foreground:h["vira-teal-80"],background:"black"},"vira-teal-foreground-invisible":{foreground:h["vira-teal-90"],background:"black"},"vira-teal-background-body":{foreground:"black",background:h["vira-teal-20"]},"vira-teal-background-header":{foreground:"black",background:h["vira-teal-50"]},"vira-teal-background-placeholder":{foreground:"black",background:h["vira-teal-60"]},"vira-teal-background-decoration":{foreground:"black",background:h["vira-teal-80"]},"vira-teal-background-invisible":{foreground:"black",background:h["vira-teal-90"]},"vira-teal-on-self-body":{foreground:h["vira-teal-10"],background:"#004539"},"vira-teal-on-self-header":{foreground:h["vira-teal-40"],background:"#004539"},"vira-teal-on-self-placeholder":{background:"#004539"},"vira-teal-on-self-decoration":{foreground:h["vira-teal-70"],background:"#004539"},"vira-teal-on-self-invisible":{foreground:h["vira-teal-80"],background:"#004539"},"vira-blue-foreground-body":{foreground:h["vira-blue-20"],background:"black"},"vira-blue-foreground-header":{background:"black"},"vira-blue-foreground-placeholder":{foreground:h["vira-blue-60"],background:"black"},"vira-blue-foreground-decoration":{foreground:h["vira-blue-80"],background:"black"},"vira-blue-foreground-invisible":{foreground:h["vira-blue-90"],background:"black"},"vira-blue-background-body":{foreground:"black",background:h["vira-blue-20"]},"vira-blue-background-header":{foreground:"black",background:h["vira-blue-50"]},"vira-blue-background-placeholder":{foreground:"black",background:h["vira-blue-60"]},"vira-blue-background-decoration":{foreground:"black",background:h["vira-blue-80"]},"vira-blue-background-invisible":{foreground:"black",background:h["vira-blue-90"]},"vira-blue-on-self-body":{foreground:h["vira-blue-10"],background:"#003a7b"},"vira-blue-on-self-header":{foreground:h["vira-blue-40"],background:"#003a7b"},"vira-blue-on-self-placeholder":{background:"#003a7b"},"vira-blue-on-self-decoration":{foreground:h["vira-blue-70"],background:"#003a7b"},"vira-blue-on-self-invisible":{foreground:h["vira-blue-80"],background:"#003a7b"},"vira-purple-foreground-body":{foreground:h["vira-purple-20"],background:"black"},"vira-purple-foreground-header":{background:"black"},"vira-purple-foreground-placeholder":{foreground:h["vira-purple-60"],background:"black"},"vira-purple-foreground-decoration":{foreground:h["vira-purple-80"],background:"black"},"vira-purple-foreground-invisible":{foreground:h["vira-purple-90"],background:"black"},"vira-purple-background-body":{foreground:"black",background:h["vira-purple-20"]},"vira-purple-background-header":{foreground:"black",background:h["vira-purple-50"]},"vira-purple-background-placeholder":{foreground:"black",background:h["vira-purple-60"]},"vira-purple-background-decoration":{foreground:"black",background:h["vira-purple-80"]},"vira-purple-background-invisible":{foreground:"black",background:h["vira-purple-90"]},"vira-purple-on-self-body":{foreground:h["vira-purple-10"],background:"#4c0099"},"vira-purple-on-self-header":{foreground:h["vira-purple-40"],background:"#4c0099"},"vira-purple-on-self-placeholder":{foreground:h["vira-purple-50"],background:"#4c0099"},"vira-purple-on-self-decoration":{foreground:h["vira-purple-70"],background:"#4c0099"},"vira-purple-on-self-invisible":{foreground:h["vira-purple-80"],background:"#4c0099"},"vira-pink-foreground-body":{foreground:h["vira-pink-20"],background:"black"},"vira-pink-foreground-header":{background:"black"},"vira-pink-foreground-placeholder":{foreground:h["vira-pink-60"],background:"black"},"vira-pink-foreground-decoration":{foreground:h["vira-pink-80"],background:"black"},"vira-pink-foreground-invisible":{foreground:h["vira-pink-90"],background:"black"},"vira-pink-background-body":{foreground:"black",background:h["vira-pink-20"]},"vira-pink-background-header":{foreground:"black",background:h["vira-pink-50"]},"vira-pink-background-placeholder":{foreground:"black",background:h["vira-pink-60"]},"vira-pink-background-decoration":{foreground:"black",background:h["vira-pink-80"]},"vira-pink-background-invisible":{foreground:"black",background:h["vira-pink-90"]},"vira-pink-on-self-body":{foreground:h["vira-pink-10"],background:"#6f0050"},"vira-pink-on-self-header":{foreground:h["vira-pink-40"],background:"#6f0050"},"vira-pink-on-self-placeholder":{background:"#6f0050"},"vira-pink-on-self-decoration":{foreground:h["vira-pink-70"],background:"#6f0050"},"vira-pink-on-self-invisible":{foreground:h["vira-pink-80"],background:"#6f0050"},"vira-grey-foreground-body":{foreground:h["vira-grey-20"],background:"black"},"vira-grey-foreground-header":{background:"black"},"vira-grey-foreground-placeholder":{foreground:h["vira-grey-60"],background:"black"},"vira-grey-foreground-decoration":{foreground:h["vira-grey-80"],background:"black"},"vira-grey-foreground-invisible":{foreground:h["vira-grey-90"],background:"black"},"vira-grey-background-body":{foreground:"black",background:h["vira-grey-20"]},"vira-grey-background-header":{foreground:"black",background:h["vira-grey-50"]},"vira-grey-background-placeholder":{foreground:"black",background:h["vira-grey-60"]},"vira-grey-background-decoration":{foreground:"black",background:h["vira-grey-80"]},"vira-grey-background-invisible":{foreground:"black",background:h["vira-grey-90"]},"vira-grey-on-self-body":{foreground:h["vira-grey-10"],background:"#3d3d43"},"vira-grey-on-self-header":{foreground:h["vira-grey-40"],background:"#3d3d43"},"vira-grey-on-self-placeholder":{foreground:h["vira-grey-50"],background:"#3d3d43"},"vira-grey-on-self-decoration":{foreground:h["vira-grey-70"],background:"#3d3d43"},"vira-grey-on-self-invisible":{foreground:h["vira-grey-80"],background:"#3d3d43"}}});function wf({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>wf({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function FM({value:e,allowed:t,blocked:r}){const n=t?wf({input:e,matcher:t}):!0,o=r?wf({input:e,matcher:r}):!1;return n&&!o}function $f(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(FM({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function SM({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){const i=ei(r,HTMLInputElement),s=S.hasKey(r,"data")&&Fb.isString(r.data)||"";if(s){const{blocked:u}=$f({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=$f({value:i.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;i.value!==a&&(i.value=a),t!==a&&o(a)}var rs=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(rs||{});const ct=Ke()({tagName:"vira-input",cssVars:{"vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>A`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${oe["vira-form-foreground-color"].value};
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
                    font-weight: ${oe["vira-form-label-font-weight"].value};
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
                ${Wr};
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
                ${ks};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Wr};
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
                border-radius: ${Zr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${oe["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Wr};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Zr["vira-form-input-radius"].value};
                background-color: ${oe["vira-form-background-color"].value};
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
                ${Wr};
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
                background: ${oe["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${oe["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${oe["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${ks};
            }

            button {
                ${Wr};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Hn["vira-interaction-animation-duration"].value};
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
                    border-color: ${oe["vira-form-error-foreground-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${fi};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:pt(),inputBlocked:pt()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:ri(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:o,host:i})=>{const{filtered:s}=$f({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?g`
                  <${W.assign({icon:e.icon})} class="left-side-icon"></${W}>
              `:te,u=e.fitText?A`
                  width: ${r.forcedInputWidth}px;
              `:te,l=q("mousedown",f=>{const m=ei(f,HTMLElement,{useOriginalTarget:!0}),w=dn.instanceOf(i.shadowRoot.querySelector("input"),HTMLInputElement);m!==w&&(f.preventDefault(),w.focus())}),c=e.disableBrowserHelps||e.type==="password",d=g`
            <span class="input-wrapper" ${e.label?te:l}>
                ${a}
                ${hr(!!e.fitText,g`
                        <span
                            class="size-span"
                            ${nw(({contentRect:f})=>{n({forcedInputWidth:f.width})})}
                        >
                            <pre>${s||e.placeholder||te}</pre>
                        </span>
                    `)}

                <input
                    id=${it(e.label?r.randomId:void 0)}
                    aria-label=${it(e.label||void 0)}
                    autofocus=${!1}
                    type=${TM(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${it(c?"off":void 0)}
                    autocorrect=${it(c?"off":void 0)}
                    autocapitalize=${it(c?"off":void 0)}
                    spellcheck=${it(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${q("input",f=>{SM({inputs:e,previousValue:s,event:f,inputBlockedCallback(m){t(new o.inputBlocked(m))},newValueCallback(m){t(new o.valueChange(m))}})})}
                    placeholder=${it(e.placeholder||void 0)}
                    ${Kn(e.attributePassthrough)}
                />

                ${hr(!!(e.showClearButton&&e.value),g`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${q("mousedown",f=>{f.stopImmediatePropagation(),f.preventDefault()})}
                            ${q("click",()=>{e.disabled||t(new o.valueChange(""))})}
                        >
                            <${W.assign({icon:pw})}></${W}>
                        </button>
                    `)}
                ${hr(e.type==="password",g`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${q("mousedown",f=>{f.stopImmediatePropagation(),f.preventDefault()})}
                            ${q("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${W.assign({icon:r.showPassword?vw:bw})}></${W}>
                        </button>
                    `)}
                ${hr(!!e.suffix,g`
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
            `:d}});function TM(e,t){return e==="password"&&t?"text":e||"text"}const st=Ke()({tagName:"vira-select",state(){return{randomId:ri(32)}},events:{valueChange:pt()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${oe["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Wr};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${Zr["vira-form-input-radius"].value};
            background-color: ${oe["vira-form-background-color"].value};
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
                    color: ${oe["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${t["vira-select-icon-padding"].value};
                }
            }

            & ${W} {
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
                border-radius: ${Zr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${oe["vira-form-border-color"].value};
                transition: border
                    ${Hn["vira-interaction-animation-duration"].value};
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
                font-weight: ${oe["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${fi}
            }
            ${W} {
                ${fi}
            }
            & * {
                cursor: not-allowed;
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${oe["vira-form-error-foreground-color"].value};
            }
        }
    `,render({inputs:e,state:t,dispatch:r,events:n}){const o=e.value||void 0,i=e.placeholder||o==null?g`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:te,s=g`
            <span class="select-wrapper">
                <select
                    .value=${it(o)}
                    class=${ir({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${it(e.label?t.randomId:void 0)}
                    aria-label=${it(e.label||void 0)}
                    aria-disabled=${it(e.disabled?"true":void 0)}
                    ${q("input",a=>{const u=ei(a,HTMLSelectElement),l=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(c=>c.value===o)),r(new n.valueChange(l))})}
                    ${Kn(e.attributePassthrough?.select)}
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

                <${W.assign({icon:e.icon})} class="input-icon"></${W}>
                <${W.assign({icon:ph})} class="trigger-icon"></${W}>
            </span>
        `;return e.label?g`
                <label for=${t.randomId} ${Kn(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),ur=Ke()({tagName:"vira-form",events:{valueChange:pt(),validChange:pt()},styles:A`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const i=YT(e.fields);i!==n.lastIsValid&&(o({lastIsValid:i}),t(new r.validChange({allFieldsAreValid:i})));const s=Yn(e.fields).map(([a,u])=>u.isHidden?te:u.type===$e.Checkbox?g`
                        <${xe.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:fd(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?Zn(u.testId):te}
                            ${q(xe.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${xe}>
                    `:u.type===$e.Select?g`
                        <${st.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:fd(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?Zn(u.testId):te}
                            ${q(st.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${st}>
                    `:g`
                        <${ct.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:fd(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===$e.NewPassword?{autocomplete:"new-password"}:u.type===$e.ExistingPassword?{autocomplete:"password"}:u.type===$e.Email?{autocomplete:"email"}:{},type:[$e.NewPassword,$e.ExistingPassword,$e.PlainPassword].includes(u.type)?rs.Password:u.type===$e.Email?rs.Email:rs.Default})}
                            ${u.testId?Zn(u.testId):te}
                            ${q(ct.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${ct}>
                    `);return g`
            <form ${q("submit",a=>a.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}});function MM(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given: ${eD(r)}`)}function NM(e,t=[],r=!1){return r?t.includes(e.id)?t.filter(n=>n!==e.id):[...t,e.id]:[e.id]}function bp({open:e,callback:t,popUpManager:r,host:n,options:o}){if(e){const i=r.showPopUp(n,o);t?.(i)}else r.removePopUp(),t?.(void 0)}const kr=Ke()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            ${ks};
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

        ${e["vira-menu-item-selected"].selector} ${W} {
            opacity: 1;
            visibility: visible;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${W} {
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
            visibility: hidden;
        }
    `,render({inputs:e}){return g`
            <div class="item">
                <${W.assign({icon:gh})}></${W}>
                <slot>${e.label}</slot>
            </div>
        `}});function PM(e,t){return e>t}function IM(e,t){return e<t}function _a(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var An;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(An||(An={}));var Ae;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Ae||(Ae={}));function wc(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const o=n[t.x];if(o)if(o.navEntry.navParams.group){const i=wc(o.children);i&&(r=i.node)}else o.navEntry.navParams.disabled||(r=o)}}if(r)return{node:r,coords:t}}function vp(e,t,r,n){if(!t){const u=wc(e.children);return u?(_a(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:Ae.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:Ae.Navigate}}const{nextNode:o,requiresWrapping:i,coords:s}=xw(t.position,r),a=n?!0:!i;return o&&a?(_a(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:i,direction:r,navAction:Ae.Navigate,coords:s}):o?a?{success:!1,reason:"no conditions matched",direction:r,navAction:Ae.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:Ae.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:Ae.Navigate}}function xw(e,t){let r=!1,n,o=1;const i=Date.now();for(;!r||!n;)if(n=OM(e,t,o),r=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-i>1e3)return Wf.warning("Failed to find next non-disabled node."),n;return n}function OM(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;$t.isDefined(n,"missing parent");const o=dn.isDefined(n.children[e.nodeCoords.y]),i=n.children.length>1&&(t===An.Down||t===An.Up),s=t===An.Down||t===An.Right?r:-1*r,a=s<0?PM:IM,u=i?C0(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=dn.isDefined(n.children[u]),c=i?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:C0(e.nodeCoords.x+s,{min:0,max:o.length-1,takeOverflow:!0}),d=n.children[u]?.[c],f=i?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:d,requiresWrapping:f,coords:{x:c,y:u}}}function BM(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:Ae.Pibling};const{nextNode:o,requiresWrapping:i,coords:s}=xw(n,t),a=o?.navEntry.navParams.group?wc(o.children):{node:o,coords:s},u=r?!0:!i;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:Ae.Pibling}:u?(_a(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:i,coords:a.coords,direction:t,navAction:Ae.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:Ae.Pibling}}var er;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(er||(er={}));const an={name:"data-nav",js(e){return e?`[${an.name}*="${e}"]`:`[${an.name}]`},css({baseSelector:e="",navValue:t}={}){return A`
            ${Ie(e)}${Ie(an.js(t))}
        `}},bh="navEntry";function Ew(e){return bh in e}function Aw(e){if(Ew(e)){const t=e[bh];return dn.instanceOf(t,Cw,"Invalid nav entry")}else return}function RM(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==er.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class Cw{element;navParams;navTreeNode;navValue;eventListener=RM(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return $t.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(an.name,""),cd(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,o=t===(n===er.Focused);if(!(this.navParams.group||this.navController.locked||o||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(er.Focused),cd(this.element)||this.element.focus()):(this.removeNavValue(er.Focused),cd(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,Ae.Focus)}activate(t){const r=this.navValue,n=t===(r===er.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(er.Active):this.setNavValue(er.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,Ae.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(an.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(an.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function Fw(e,t){Object.entries(t).forEach(([r,n])=>{S.isBoolean(n)&&n?e.setAttribute(r,""):S.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const LM=no(class extends oo{element;lastKey;constructor(e){super(e),this.element=uu(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Cr}});function jM(e){return"group"in e?er.Group:e.disabled?er.Disabled:""}function wp(e,t={}){return LM(y(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;$t.instanceOf(r,HTMLElement);const o={[an.name]:jM(t),tabindex:n?0:-1};Fw(r,o);const i=Aw(r)||new Cw(r,e,t);Ew(r)?(i.navParams=t,i.navController=e):r[bh]=i,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function UM(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Ae.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Ae.Enter};const r=t.position.node.children[0]?.[0];return r?(_a(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ae.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Ae.Enter}}function _M(e,t){return Sw([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function Sw(e,t,r){for(let n=0;n<t.length;n++){const o=t[n];for(let i=0;i<o.length;i++){const s=o[i],a={ancestorChain:e,nodeCoords:{x:i,y:n},node:s};if(r(a))return a;const u=Sw(e.concat(a),s.children,r);if(u)return u}}}function Tw(e,t){const r=_M(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function VM(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Ae.Exit};const r=t.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Ae.Exit};const{nodeCoords:n}=Tw(e,r.navEntry);return _a(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ae.Exit,coords:n}}class WM extends bn()("nav-exit"){}class Mw extends bn()("nav-activate"){}class zM extends bn()("nav-focus"){}class qM extends bn()("nav-enter"){}class KM extends bn()("nav-navigate"){}class GM extends bn()("nav-navigate-pibling"){}function ZM(e){return{root:!0,children:Nw(e)?.children||[]}}function Nw(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=Aw(t),n=HM(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function HM(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const o=n.navEntry.navParams.x,i=n.navEntry.navParams.y||0,s=hi(t,i,()=>({noX:[],withX:[],y:i}));o==null?s.noX.push(n):s.withX.push({x:o,node:n})}return e.children.forEach(n=>{const o=Nw(n);o&&r(o)}),t.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,i)=>o.x-i.x),n.withX.forEach(({x:o,node:i})=>{n.noX.splice(o,0,i)}),n.noX)).filter(S.isTruthy)}class Pw extends qf{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){wc(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=Tw(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:o}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const i={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return r&&(n===Ae.Activate?this.dispatch(new Mw({detail:i})):n===Ae.Focus&&this.dispatch(new zM({detail:i}))),i}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:Ae.Navigate,reason:"NavController is locked."};const n=vp(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new KM({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Ae.Enter,reason:"NavController is locked."};const r=UM(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new qM({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Ae.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Ae.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return $t.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Ae.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Ae.Activate&&this.currentNavEntry.entry.focus(!0);const t=VM(this.getNavTree(),this.currentNavEntry);return this.dispatch(new WM({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:Ae.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),i={...this.currentNavEntry?BM(this.currentNavEntry,r,t):vp(n,void 0,r,t),navAction:Ae.Pibling};return this.dispatch(new GM({detail:i})),i}buildNavTree(){const t=CT(this.rootElement),r=ZM(t);return this.cachedNavTree=r,r}}const Wi=Ke()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>A`
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
                    ${Kn(e.attributePassthrough?.a)}
                    style=${it(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return g`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${Kn(e.attributePassthrough?.a)}
                    style=${it(e.stylePassthrough?.a)}
                    ${q("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),$p={item:"menu-item"},wa=Ke()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new Pw(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>A`
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
            background-color: ${oe["vira-form-background-color"].value};
            color: ${oe["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Wr};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${an.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:er.Focused})}, ${an.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:er.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${oe["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${an.css({baseSelector:".menu-item:not(.disabled)",navValue:er.Focused})},
                ${an.css({baseSelector:".menu-item:not(.disabled)",navValue:er.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${oe["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${kr} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${fi};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){MM(e.items);const r=e.items.map(n=>{const o=!!e.selected?.includes(n.id),i=S.isString(n.label)?g`
                      <${kr.assign({label:n.label,selected:o,hideCheckIcon:e.hideCheckIcons})}></${kr}>
                  `:n.label,s=n.disabled||!e.isMultiSelect&&o;return n.route?g`
                    <${Wi.assign({route:n.route})}
                        class="menu-item ${ir({disabled:!!n.disabled,selected:o})}"
                        ${Zn($p.item)}
                        title=${it(n.titleText||void 0)}
                        role="option"
                        ${wp(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </${Wi}>
                `:g`
                    <button
                        class="menu-item ${ir({disabled:!!n.disabled,selected:o})}"
                        ${Zn($p.item)}
                        title=${it(n.titleText||void 0)}
                        role="option"
                        ${wp(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </button>
                `});return g`
            ${r}
        `}});var vh=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(vh||{}),Cl=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Cl||{});const $a=Ke()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${Zr["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${oe["vira-form-background-color"].value};
            border: 1px solid ${oe["vira-form-border-color"].value};
            color: ${oe["vira-form-foreground-color"].value};
            ${ts.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${ts.menuShadowReversed}
            border-radius: ${Zr["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${Zr["vira-form-input-radius"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),Iu=globalThis.document;class JM extends Gv{constructor(){if(super({defaultValue:!!Iu?.hidden,equalityCheck:S.strictEquals}),!Iu)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,Iu));const t=r=>this.updateVisibility(r,Iu);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=XM.includes(t.type),o=YM.includes(t.type),i=n?!0:o?!1:r.hasFocus()||!r.hidden;this.setValue(i)}}const YM=["blur","focusout","pagehide"],XM=["focus","focusin","pageshow"],QM=new JM;function eN(e,t){return QM.listen(e,t)}function kf(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}const kp={top:0,left:0,right:0,bottom:0};class Iw extends zf("hide-pop-up"){}class Ow extends bn()("nav-select"){}class tN{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new qf;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[eN(!1,t=>{t||this.removePopUp()}),this.navController.listen(Mw,t=>{const r=t.composedPath()[0];r instanceof Element&&kf(r)||t.detail.success&&(this.listenTarget.dispatch(new Ow({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),Vd("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Vd("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=t.composedPath()[0];if(n instanceof Element&&kf(n))return;r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:An.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:An.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:An.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:An.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault())}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Iw)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},o=MT(t);$t.instanceOf(o,HTMLElement);const i=t.getBoundingClientRect(),s=o.getBoundingClientRect(),a=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,l=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=Kt(kp,w=>i[w]),d=Kt(kp,w=>{const v=l[w],E=c[w];return Math.abs(v-E)}),f=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace,m=d.left>d.right+n.horizontalDiffThreshold&&d.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!f,popRight:!m,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var ko=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(ko||{});const ve=Ke()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new tN(new Pw(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>A`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Wr};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${lu({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${ks};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${fi}
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
    `,events:{navSelect:pt(),openChange:pt(),init:pt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:o,events:i}){e.popUpManager.listen(Iw,()=>{if(t({showPopUpResult:void 0}),o(new i.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");$t.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(Ow,s=>{n.keepOpenAfterInteraction||bp({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),o(new i.navSelect(s.detail))}),o(new i.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:o,host:i,slotNames:s}){function a({emitEvent:w,open:v},E){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&E){const k=i.shadowRoot.querySelector(".dropdown-trigger");if(k&&!E.composedPath().includes(k))return}bp({open:v,callback(k){o({showPopUpResult:k}),w&&e(new t.openChange(k))},host:i,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,l=u==="right"&&r.showPopUpResult?n.ignoreMaxWidth?A`
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
        `,f=r.showPopUpResult?r.showPopUpResult.popDown?n.ignoreMaxHeight?A`
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
                    `:void 0;function m(w){a({emitEvent:!0,open:!r.showPopUpResult},w)}return g`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${ir({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${q("keydown",w=>{!r.showPopUpResult&&w.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},w)})}
                ${q("click",w=>{if(w.detail===0){let v=!1;if(NT(({element:E})=>kf(E)?(v=!0,!0):!1),v)return;m(w)}})}
                ${q("mousedown",w=>{w.button===0&&m(w)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${ir({"right-aligned":u==="right"})}"
                    style=${f}
                >
                    ${hr(!!r.showPopUpResult,g`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),rN={menu:"menu-trigger-menu"},yo=Ke()({tagName:"vira-menu-trigger",styles:A`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${ve} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{itemActivate:pt(),openChange:pt()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:o}){return g`
            <${ve.assign({...e,keepOpenAfterInteraction:!0,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||ko.Left})}
                class=${ir({open:!!t.showPopUpResult})}
                ${q(ve.events.init,i=>{r({navController:i.detail.navController,popUpManager:i.detail.popUpManager})})}
                ${q(ve.events.openChange,i=>{!!t.showPopUpResult!=!!i.detail&&n(new o.openChange(i.detail)),r({showPopUpResult:i.detail})})}
                ${q(ve.events.navSelect,i=>{const s=i.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);n(new o.itemActivate(NM(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${ve.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?g`
                          <${$a.assign({direction:t.showPopUpResult.popDown?Cl.Downwards:Cl.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${ve.slotNames.popUp}
                              class=${ir({"full-width-menu":e.horizontalAnchor===ko.Both})}
                          >
                              <${wa.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Zn(rN.menu)}
                              ></${wa}>
                          </${$a}>
                      `:te}
            </${ve}>
        `}}),Qe=Ke()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>A`
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
        `}});var zi=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(zi||{});const ye=Ke()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ks};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${$s["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${fi};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Wr};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Zr["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Hn["vira-interaction-animation-duration"].value},
                background-color
                    ${Hn["vira-interaction-animation-duration"].value},
                border-color ${Hn["vira-interaction-animation-duration"].value};

            ${lu({elementBorderSize:2})}
        }

        .empty-text {
            width: 0;
        }

        button ${W} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${W} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?g`
                  <${W.assign({icon:e.icon})}></${W}>
              `:te,r=e.text?g`
                  <span class="text-template">${e.text}</span>
              `:g`
                  <span class="empty-text">&nbsp;</span>
              `;return g`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Df=(e=>(e.Error="error",e.Success="success",e))(Df||{});const gd=Ke()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":"1px solid #d3d3d3","vira-card-border-radius":"16px","vira-card-padding":"16px"},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${t["vira-card-border-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${oe["vira-form-error-foreground-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${oe["vira-form-success-foreground-color"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),In=Ke()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Wr};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Hn["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:pt()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:o,inputs:i}){const s=i.expanded?A`
                  height: ${e.contentHeight}px;
              `:A`
                  height: 0;
              `;return g`
            <button
                class="header-wrapper"
                ${q("click",()=>{n(new o.expandChange(!i.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${nw(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),pd={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},aa=Ke()({tagName:"vira-dropdown",styles:A`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${yo} {
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
                ${Hn["vira-interaction-animation-duration"].value} linear;
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
            ${ks};
            border: 1px solid ${oe["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${Zr["vira-form-input-radius"].value};
            background-color: ${oe["vira-form-background-color"].value};
            color: ${oe["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:pt(),openChange:pt()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:o}){const i=So(t.selected,c=>t.options.find(d=>d.id===c),S.isTruthy),s=t.icon?g`
                  <${W.assign({icon:t.icon})}
                      ${Zn(pd.icon)}
                  ></${W}>
              `:te,a=!i.length,u=t.selectionPrefix&&!a?g`
                      <span class="selected-label-prefix" ${Zn(pd.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:te,l=a?t.placeholder||"":t.isMultiSelect&&i.length>1?`${i.length} Selected`:i[0]?.label||"";return g`
            <${yo.assign({...t,items:t.options,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||ko.Both})}
                ${q(yo.events.openChange,c=>{o({showPopUpResult:c.detail}),r(new n.openChange(c.detail))})}
                ${q(yo.events.itemActivate,c=>{r(new n.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${ir({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Zn(pd.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${ir({"using-placeholder":a})}"
                        title=${it(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${W.assign({icon:ph})}
                            class="trigger-icon"
                        ></${W}>
                    </span>
                </div>
            </${yo}>
        `}}),oi=Ke()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>A`
        :host {
            color: ${oe["vira-form-error-foreground-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),lo=Ke()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:pt(),imageError:pt()},styles:({hostClasses:e})=>A`
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
                      <${W.assign({icon:El})} class="error"></${W}>
                  </slot>
              `:t.loadedUrls[s]?void 0:g`
                    <slot class="status-wrapper" name=${i.loading}>
                        <${W.assign({icon:di})}></${W}>
                    </slot>
                `;return g`
            ${hr(!!a,a)}
            <img
                class=${ir({hidden:!!a})}
                ${q("load",async()=>{e._debugLoadDelay&&await ii(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new o.imageLoad)})}
                ${q("error",async u=>{e._debugLoadDelay&&await ii(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new o.imageError(u.error))})}
                src=${s}
            />
        `}}),nN=["pagehide","pageshow","popstate"],On=Ke()({tagName:"vira-modal",events:{modalClose:pt()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-modal-backdrop-filter":"blur(3px)","vira-modal-subtitle-color":"#7E7E7E","vira-modal-close-button-hover-radius":"8px","vira-modal-close-button-hover-background-color":"#E4E4E4"},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${cu};
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
            ${ts.modal}

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
                        ${Wr};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${t["vira-modal-close-button-hover-radius"].value};

                        &:hover {
                            background-color: ${t["vira-modal-close-button-hover-background-color"].value};
                        }

                        & ${W} {
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
    `,render({inputs:e,state:t,updateState:r,events:n,dispatch:o,slotNames:i}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),r({previousOpenValue:e.open}),e.open)){const a=nN.map(u=>Vd(u,()=>{o(new n.modalClose)}));r({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),o(new n.modalClose))}return g`
            <dialog
                ${ci(a=>{r({dialogElement:dn.instanceOf(a,HTMLDialogElement)})})}
                ${q("close",()=>{s()})}
                ${q("click",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${ci(a=>{r({contentElement:dn.instanceOf(a,HTMLDivElement)})})}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${i.modalTitle}>${e.modalTitle}</slot></h1>
                            ${e.modalSubtitle?g`
                                      <sub>${e.modalSubtitle}</sub>
                                  `:te}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${q("click",()=>{t.dialogElement?.close()})}
                        >
                            <${W.assign({icon:$w})}></${W}>
                        </button>
                    </div>
                    ${e.open?g`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:te}
                </div>
            </dialog>
        `}}),Cn=Ke()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":({state:e,inputs:t})=>e.isOverflowing||!!t.useSmall},styles:({hostClasses:e})=>A`
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
                ${ci(i=>{if(!r.automaticallySwitch)return;const s={elementToTest:i,host:n,updateState:t},a=new ResizeObserver(()=>{yd(s)});a.observe(n),a.observe(i);const u=Kf(i,"slotchange",()=>{yd(s)});yd(s),o.cleanup?.(),t({cleanup(){a.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function yd({elementToTest:e,host:t,updateState:r}){const n=e.scrollWidth>t.clientWidth;r({isOverflowing:n})}const Qt=Ke()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>A`
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
    `,render({inputs:e,host:t}){const r=e.min||0,o=(e.max||100)-r,i=e.value-r,s=V5(Math.round(i/o*100),{min:0,max:100});return Fw(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),g`
            <div
                class="progress-bar"
                style=${s?A`
                          width: ${s}%;
                      `:A`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function Bw(e){return iT({async updateCallback(t,r){if(r&&t in r.cache)return{cache:r.cache,element:r.cache[t],key:t};const n=await e[t]();return{cache:{...r?.cache,[t]:n},element:n,key:t}}})}function Rw(e,{ready:t,loading:r,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?r(e.value.then(i=>({[i.key]:i.element}))):t({[e.value.key]:e.value.element})}const Rr=ow(),zr=Rr()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>A`
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
                ${q("click",n=>{(!e.router||gw(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new xl(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function oN(e,t){return e.entry.entryType===Bt.Root?!1:e.entry.entryType===Bt.Page||S.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:S.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const jn=Rr()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>A`
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
            ${zr.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${W} {
            display: inline-flex;
            color: ${Ee["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!oN(r,e.selectedPath))return;const n=A`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return g`
                <li style=${n}>
                    <${zr.assign({router:e.router,route:{paths:[dr.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ir({"title-row":!0,selected:e.selectedPath?S.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${hr(Yi(r,Bt.ElementExample),g`
                                    <${W.assign({icon:yw})}></${W}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${zr}>
                </li>
            `});return g`
            <${zr.assign({route:ss,router:e.router})}>
                <slot name=${En.NavHeader}>Book</slot>
            </${zr}>
            <ul>
                ${t}
            </ul>
        `}});async function iN(e){await bf(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await ST(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Fo=Rr()({tagName:"book-error",styles:A`
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
    `,render({inputs:e}){return(S.isArray(e.message)?e.message:[e.message]).map(r=>g`
                <p>${r}</p>
            `)}}),Va=Rr()({tagName:"book-page-controls",events:{controlValueChange:pt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>A`
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

        ${ct} {
            height: 24px;
            max-width: 128px;
        }

        ${W}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===J.Hidden)return"";const s=sN(e.currentValues[n],o,a=>{const u=S.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[n]:a}}))});return g`
                    <div class="control-wrapper">
                        ${hr(i===0,g`
                                <${W.assign({icon:va})}
                                    class="options-icon"
                                ></${W}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${o.controlType===J.Custom?g`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function sN(e,t,r){return zo(t,J.Hidden)?"":zo(t,J.Checkbox)?g`
            <input
                type="checkbox"
                ?checked=${e}
                ${q("input",n=>{const o=ei(n,HTMLInputElement);r(o.checked)})}
            />
        `:zo(t,J.Color)?g`
            <input
                type="color"
                .value=${e}
                ${q("input",n=>{const o=ei(n,HTMLInputElement);r(o.value)})}
            />
        `:zo(t,J.Text)?g`
            <${ct.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${q(ct.events.valueChange,n=>{r(n.detail)})}
            ></${ct}>
        `:zo(t,J.Number)?g`
            <input
                type="number"
                .value=${e}
                ${q("input",n=>{const o=ei(n,HTMLInputElement);r(o.value)})}
            />
        `:zo(t,J.Dropdown)?g`
            <select
                .value=${e}
                ${q("input",n=>{const o=ei(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>g`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:zo(t,J.Custom)?t.content:g`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const Dp=Rr()({tagName:"book-breadcrumbs",styles:A`
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
                <${zr.assign({route:{hash:void 0,search:void 0,paths:[dr.Book,...s]},router:e.router})}>
                    ${r}
                </${zr}>
                ${a}
            `}):g`
                &nbsp;
            `}}),bd=Rr()({tagName:"book-breadcrumbs-bar",styles:A`
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
            ${hr(!!e.currentSearch,g`
                    &nbsp;
                `,g`
                    <${Dp.assign({currentRoute:e.currentRoute,router:e.router})}></${Dp}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${q("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await ii({milliseconds:200}),n.value===o&&(n.value?t(new xl({paths:[dr.Search,encodeURIComponent(n.value)]})):t(new xl(ss)))})}
            />
        `}}),xp=Rr()({tagName:"book-entry-description",styles:A`
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
            `)}}),Ep=Rr()({tagName:"book-page-wrapper",styles:A`
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
              `,r=[dr.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?Tb(e.pageNode.entry.errors):void 0;return n&&console.error(n),g`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${zr.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${zr}>
                    ${n?g`
                              <${Fo.assign({message:n.message})}></${Fo}>
                          `:g`
                              <${xp.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${xp}>
                              <${Va.assign({config:e.pageNode.entry.controls,currentValues:Hf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Va}>
                          `}
                </div>
            </div>
        `}}),Ou=Rr()({tagName:"book-element-example-controls",styles:A`
        :host {
            display: flex;
            color: ${Ee["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[dr.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return g`
            <${zr.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${zr}>
        `}}),Ap=Symbol("unset-internal-state"),Cp=Rr()({tagName:"book-element-example-viewer",state(){return{isUnset:Ap}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Tb(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Ap&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return g`
                ${hr(!!t.elementExampleNode.entry.styles,g`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Tt(n)),console.error(n),g`
                <${Fo.assign({message:`${t.elementExampleNode.entry.title} failed: ${Tt(n)}`})}></${Fo}>
            `}},options:{allowPolymorphicState:!0}}),Fp=Rr()({tagName:"book-element-example-wrapper",styles:A`
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
            color: ${Ee["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ou} {
            color: ${Ee["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return g`
            <div class="individual-example-wrapper">
                <${Ou.assign(G5(e,["currentPageControls"]))}></${Ou}>
                <${Cp.assign(e)}></${Cp}>
            </div>
        `}}),aN={milliseconds:10};let ua;const Fl=new Map,Jo=new Map;function uN(){return ua||(ua=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=Fl.get(r);if(n)if(t.isIntersecting){if(!Jo.has(r)){const o=globalThis.setTimeout(()=>{Jo.delete(r),n(),ua?.unobserve(r),Fl.delete(r)},os(aN,{milliseconds:!0}).milliseconds);Jo.set(r,o)}}else{const o=Jo.get(r);o&&(clearTimeout(o),Jo.delete(r))}}},{rootMargin:"100px"})),ua}function Sp(e){const t=Jo.get(e);t&&(clearTimeout(t),Jo.delete(e)),Fl.delete(e),ua?.unobserve(e)}const Bu=Rr()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:A`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&Sp(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:g`
            <div
                class="placeholder"
                ${ci(n=>{t.placeholderElement&&Sp(t.placeholderElement),r({placeholderElement:n}),Fl.set(n,()=>{r({hasRendered:!0})}),uN().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function Lw(e,t,r,n){const o=Wd(r,n),i=[];if(o){const s=Lw(e,t,o,n);s&&i.push(s)}if(Yi(r,Bt.Page)&&!e.includes(r)){const s=Hf(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:s,breadcrumbs:Kt(s,()=>r.fullUrlBreadcrumbs)})}return i.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function lN({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[g`
                No results
            `];const s=S.isLengthAtLeast(e,1)?Lw(e,o,e[0],i):void 0,a=s&&Object.values(s.config).length&&S.isLengthAtLeast(e,1)?g`
                  <${Va.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${Va}>
              `:te,u=aT(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(Yi(l,Bt.Page))return g`
                    <${Ep.assign({isTopLevel:t,pageNode:l,controls:o,router:r})}
                        class="block-entry"
                    ></${Ep}>
                `;if(Yi(l,Bt.ElementExample)){const c=Hf(o,l.fullUrlBreadcrumbs.slice(0,-1)),d=g`
                    <${Fp.assign({elementExampleNode:l,currentPageControls:c,router:r})}></${Fp}>
                `;return g`
                    <${Bu.assign({content:d})}
                        class="inline-entry ${ir({"block-entry":l.entry.isVertical})}"
                    ></${Bu}>
                `}else{if(Yi(l,Bt.Root))return te;{const c=g`
                    <${Fo.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}></${Fo}>
                `;return g`
                    <${Bu.assign({content:c})}
                        class="block-entry"
                    ></${Bu}>
                `}}});return[a,u]}const Bi=Rr()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:A`
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

        ${bd} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Hn["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:pt()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=zd(e.currentRoute.paths),s=lN({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return g`
            <${bd.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${bd}>

            ${hr(e.showLoading,g`
                    <div
                        ${ci(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${W.assign({icon:di})}></${W}>
                    </div>
                    ${hr(!!n.lastElement,g`
                            ${n.lastElement}
                            <slot name=${En.Footer}></slot>
                        `)}
                `,g`
                    <div
                        ${ci(a=>{o({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${En.Footer}></slot>
                `)}
        `}});function cN(e,t,r){const n=Tp(e,t);return n.length?n:(r(ss),Tp(e,ss.paths))}function Tp(e,t){return e.filter(r=>nD({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const vd=Ei()({tagName:"element-book-app",state(){return{currentRoute:ss,router:void 0,loading:!0,colors:{config:void 0,theme:lp(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:pt()},styles:A`
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

        ${Bi} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${jn} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await Mp(e,zd(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const d=s(c);return!S.jsonEquals(e.currentRoute,d)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(S.isTruthy).join(" - "))}function l(c){if(!a(c))return;const d=s(c);e.router?e.router.setRoute(d):n({currentRoute:{...e.currentRoute,...d}}),t.elementBookRoutePaths&&!S.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(d.paths))}try{if(t.elementBookRoutePaths&&!S.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const k=HT(t.internalRouterConfig.basePath);n({router:k}),k.listen(!0,D=>{n({currentRoute:D})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!S.jsonEquals(c,e.colors.config)){const k=lp(c);n({colors:{config:c,theme:k}}),RD(r,k)}const d=t._debug??!1,f=lD({entries:t.pages,debug:d});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Ub(f.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=zd(e.currentRoute.paths),v=(m?RT({flattenedNodes:f.flattenedNodes,searchQuery:m}):void 0)??cN(f.flattenedNodes,e.currentRoute.paths,l);u(v[0]?.entry.title);const E=e.treeBasedControls?.controls;return E?(t._debug&&console.info({currentControls:E}),g`
                <div
                    class="root"
                    ${q(xl,async k=>{const D=k.detail;if(!a(D))return;if(n({loading:!0}),l(D),!(r.shadowRoot.querySelector(jn.tagName)instanceof jn))throw new TypeError(`Failed to find child '${jn.tagName}'`);await Mp(r,m,e.currentRoute)})}
                    ${q(Va.events.controlValueChange,k=>{if(!e.treeBasedControls)return;const D=dD(E,k.detail.fullUrlBreadcrumbs,k.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:D}})})}
                >
                    <${jn.assign({flattenedNodes:f.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${En.NavHeader}
                            slot=${En.NavHeader}
                        ></slot>
                    </${jn}>
                    <${Bi.assign({controls:E,currentNodes:v,currentRoute:e.currentRoute,debug:d,originalTree:f.tree,router:e.router,showLoading:e.loading})}
                        ${q(Bi.events.loadingRender,async k=>{await bf();const D=r.shadowRoot.querySelector(Bi.tagName);D?D.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Bi.tagName}' for scrolling.`),await bf(),n({loading:!k.detail})})}
                    >
                        <slot
                            name=${En.Footer}
                            slot=${En.Footer}
                        ></slot>
                    </${Bi}>
                </div>
            `):g`
                    <${Fo.assign({message:"Failed to generate page controls."})}></${Fo}>
                `}catch(c){return console.error(c),g`
                <p class="error">${Tt(c)}</p>
            `}}});async function Mp(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(jn.tagName);if(!(n instanceof jn))throw new TypeError(`Failed to find child '${jn.tagName}'`);await iN(n)}function Np(e){if(typeof e=="string")return dN(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let t=[0,0,0,0,!1,"unknown"];return t[0]=e.r?e.r:e.red?e.red:!1,t[1]=e.g?e.g:e.green?e.green:!1,t[2]=e.b?e.b:e.blue?e.blue:!1,t[3]=e.a?e.a:e.alpha?e.alpha:1,t[4]=!!(t[0]&&t[1]&&t[2]),t[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",t}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}function dN(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let t=!1,n=[0,0,0,0,t,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let a in s)if(e==a){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:function(c){for(let d=0;d<3;d++)n[d]=parseInt(c[d+1],16);return n[3]=1,!0}},l=u.rex.exec(s[a]);return n[4]=t=u.sprig(l),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:function(s){let a=0,u=0,l=10,c=100,d=2.55,f="1";s[23]&&(f=s[23],delete s[23]),n[3]=f.match(/%/g)?parseFloat(f)/c:parseFloat(f);for(let m=1;m<s.length;m++)s[m]&&(a=a||m,u=m);switch(u){case 4:l=16,c=15,n[3]=parseInt(s[u],l)/c;case 3:l=16;for(let m=0;m<3;m++)n[m]=parseInt(s[a+m]+s[a+m],l);break;case 5:l=16;case 9:n[0]=n[1]=n[2]=l==10?parseFloat(s[u]):parseInt(s[u],l);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[u])*d;break;case 8:l=16,c=255,n[3]=parseInt(s[8],l)/c;case 7:l=16;case 11:for(let m=0;m<3;m++)n[m]=l==10?parseFloat(s[a+m]):parseInt(s[a+m],l);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(s[a+m])*d;break;case 18:n[5]=s[15];for(let m=0;m<3;m++)a++,n[m]=s[a].match(/%/g)?parseFloat(s[a])*2.55:parseFloat(s[a])*255;break;case 22:n[5]=s[a];for(let m=0;m<3;m++)a++,n[m]=s[a]?s[a].match(/%/g)?parseFloat(s[a])/c:parseFloat(s[a]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let M=function(O){let j=(O+D/30)%12,Z=m*Math.min(w,1-w);return w-Z*Math.max(-1,Math.min(j-3,9-j,1))},m,w,v,E,k,D=n[0]%360;if(D<0&&(D+=360),n[5].match(/^hsla?/i))m=n[1],w=n[2],v=0,k=1;else if(n[5].match(/^hwba?/i)){if(v=n[1],E=n[2],v+E>=1){n[0]=n[1]=n[2]=v/(v+E),n[5]="sRGB";break}m=1,w=.5,k=1-v-E}n[0]=Math.round(255*(M(0)*k+v)),n[1]=Math.round(255*(M(8)*k+v)),n[2]=Math.round(255*(M(4)*k+v)),n[5]="sRGB"}break}return!0}},i=o.rex.exec(e);return i?(n[4]=t=o.parsley(i),n):(t=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,t,"parsleyError"])}const lt={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function fN(e,t,r=-1){const n=[0,1.1];if(isNaN(e)||isNaN(t)||Math.min(e,t)<n[0]||Math.max(e,t)>n[1])return 0;let o=0,i=0,s="BoW";return e=e>lt.blkThrs?e:e+Math.pow(lt.blkThrs-e,lt.blkClmp),t=t>lt.blkThrs?t:t+Math.pow(lt.blkThrs-t,lt.blkClmp),Math.abs(t-e)<lt.deltaYmin?0:(t>e?(o=(Math.pow(t,lt.normBG)-Math.pow(e,lt.normTXT))*lt.scaleBoW,i=o<lt.loClip?0:o-lt.loBoWoffset):(s="WoB",o=(Math.pow(t,lt.revBG)-Math.pow(e,lt.revTXT))*lt.scaleWoB,i=o>-.1?0:o+lt.loWoBoffset),r<0?i*100:r==0?Math.round(Math.abs(i)*100)+"<sub>"+s+"</sub>":Number.isInteger(r)?(i*100).toFixed(r):0)}function mN(e,t,r=-1,n=!0){let o=Np(t),i=Np(e);return!(i[3]==""||i[3]==1)&&(i=gN(i,o,n)),fN(Pp(i),Pp(o),r)}function hN(e,t=2){const r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],i=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(t),0,0,0,0,0,0,0,0,0];s.length;let a=777;e=Math.abs(e);const u=.2,l=e==0?1:e*u|0;let c=0,d=(e-r[l][c])*u;for(c++;c<i;c++)a=r[l][c],a>400?s[c]=a:e<14.5?s[c]=999:e<29.5?s[c]=777:a>24?s[c]=Math.round(a-n[l][c]*d):s[c]=a-(2*n[l][c]*d|0)*.5;return s}function Pp(e=[0,0,0]){function t(r){return Math.pow(r/255,lt.mainTRC)}return lt.sRco*t(e[0])+lt.sGco*t(e[1])+lt.sBco*t(e[2])}function gN(e=[0,0,0,1],t=[0,0,0],r=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let i=0;i<3;i++)o[i]=t[i]*n+e[i]*e[3],r&&(o[i]=Math.min(Math.round(o[i]),255));return o}const jw={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};Kt(jw,e=>e);Object.fromEntries(Object.entries(jw).map(([e,t])=>[t,e]));function wh({background:e,foreground:t}){const r=W5(Number(mN(t,e)),{digits:1});return{contrast:r,fontSizes:yN(r),contrastLevel:bN(r)}}function Ip(e,t){return t.reduce((r,n)=>{const o=Math.abs(wh({foreground:n,background:e}).contrast);return o>r.contrast?r:{contrast:o,color:n}},{contrast:1/0,color:""}).color}function pN(e,t){const r=S.isArray(e.foreground)?e.foreground:S.isArray(e.background)?e.background:new Error("No color array provided.");if(r instanceof Error)throw r;const n=Op.indexOf(t);return r.reduce((i,s)=>{const a={foreground:S.isString(e.foreground)?e.foreground:s,background:S.isString(e.background)?e.background:s};if(a.foreground===a.background)return i;const u=wh(a),c=Op.indexOf(u.contrastLevel.name)-n;return c>0||i.distance>c?i:{color:s,distance:c}},{distance:0,color:void 0}).color}function yN(e){const t=hN(e).slice(1);return Ll(t,(n,o)=>({key:(o+1)*100,value:n}))}function bN(e){return dn.isDefined($c.find(t=>t.min<=Math.abs(e)))}var be;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(be||(be={}));const Uw={[be.SmallBodyText]:"Small Text",[be.BodyText]:"Body Text",[be.NonBodyText]:"Non-body Text",[be.Header]:"Header",[be.Placeholder]:"Placeholder",[be.Decoration]:"Decoration",[be.Invisible]:"Invisible"},Op=[be.SmallBodyText,be.BodyText,be.NonBodyText,be.Header,be.Placeholder,be.Decoration,be.Invisible],$c=[{min:90,name:be.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:be.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:be.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:be.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:be.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:be.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:be.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];Ll($c,e=>({key:e.min,value:e}));Ll($c,e=>({key:e.name,value:e}));const wd=Ei()({tagName:"vir-contrast-indicator",styles:A`
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

        .${Ie(be.Invisible)} {
            color: red;
        }
        .${Ie(be.Decoration)} {
            color: #ff6600;
        }
        .${Ie(be.Placeholder)} {
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
    `,render({inputs:e}){const t=$c.toReversed().slice(1).map(o=>g`
                    <div
                        class="gauge-level ${ir({active:o.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),r=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return g`
            <div title=${r} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${t}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${Uw[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),Sl=Ei()({tagName:"theme-vir-color-example",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"theme-vir-color-example-no-contrast-tips":({inputs:e,state:t})=>!e.showContrast&&!t.forceShowEverything},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Wr};
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
            font-family: ${AM["vira-monospace"].value};
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${cu};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${wd} {
            margin-top: 1px;
        }
    `,render({state:e,updateState:t,inputs:r}){const n=["foreground","background"].map(a=>{const u=[r.color[a].name,r.showVarValues||e.forceShowEverything?":":""].filter(S.isTruthy).join(""),l=r.showVarValues||e.forceShowEverything?g`
                          <span>${r.color[a].default}</span>
                      `:te;return g`
                <p>
                    <span>${u}</span>
                    ${l}
                </p>
            `}),o=r.showVarNames||e.forceShowEverything?g`
                      <div class="css-var-names">${n}</div>
                  `:te,i=e.previewElement?wh({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,s=i&&(r.showContrast||e.forceShowEverything)?g`
                      <${wd.assign({contrast:i,fontWeight:r.fontWeight})}></${wd}>
                  `:te;return g`
            <button
                ${q("click",()=>{t({forceShowEverything:!e.forceShowEverything})})}
                ${ci(a=>{t({previewElement:dn.instanceOf(a,HTMLElement)})})}
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
        `}}),_w=["#000000","#ffffff","#000","#fff","white","black"];function Vw(e,t=_w){const r={};return Object.values(e).forEach(n=>{if(t.includes(n.default))return;const o=vN(n);hi(r,o.colorName,()=>[]).push(o)}),r}function vN(e){const t=String(e.name).replace(/^-+/,"").split("-"),r=t.length>2?t.at(-1):void 0,n=dn.isTruthy(t[0]),o=t.slice(1,r?-1:void 0).join("-");return{suffix:r,prefix:n,colorName:o,definition:e,cssVarName:String(e.name)}}function Ww(e,{mapFrom:t,mapTo:r}){return S.isArray(e)?Ef(e.map(n=>{if(t&&S.isKeyOf(n,t))return n;if(r&&S.isKeyOf(n,r)&&r[n]!=null)return r[n];throw new Error(`Unknown font weight: ${String(n)}`)})):Ww(So(Object.entries(e),([n,o])=>{if(o)return n},S.isTruthy),{mapTo:r,mapFrom:t})}const wN={[be.BodyText]:!0,[be.Header]:!0,[be.Placeholder]:!0,[be.Decoration]:!0};function $N(e,{omittedColorValues:t=_w,crossContrastLevels:r=wN}={}){const n=Ww(r,{mapFrom:Uw}),o=Vw(e,t),i={background:"white",foreground:"black"},s={},a={};Object.entries(o).forEach(([l,c])=>{$t.isLengthAtLeast(c,1);const d=c.map(D=>D.definition.default),f=$5({crossWith:["color-in-foreground-light-mode","color-in-background-light-mode","color-in-foreground-dark-mode","color-in-background-dark-mode","color-on-self-dark-mode","color-on-self-light-mode"],contrast:n}),m=c[0],w=Al(i.foreground),v=Al(i.background),E=Ip("white",d),k=Ip("black",d);f.forEach(D=>{const M=D.crossWith==="color-in-foreground-light-mode"?{foreground:d,background:v}:D.crossWith==="color-in-background-light-mode"?{foreground:v,background:d}:D.crossWith==="color-in-foreground-dark-mode"?{foreground:d,background:w}:D.crossWith==="color-in-background-dark-mode"?{foreground:w,background:d}:D.crossWith==="color-on-self-dark-mode"?{foreground:d,background:k}:D.crossWith==="color-on-self-light-mode"?{foreground:d,background:E}:void 0;if(!M)throw new Error(`Forgot to handle crossWith: '${D.crossWith}'`);const O=pN(M,D.contrast),j=c.find(H=>H.definition.default===O);if(!j){Wf.error(`No valid '${l}' color cross found for: ${y(D)} with ${y(d)}`);return}const Z=Kt(M,(H,ae)=>S.isString(ae)?ae:j.definition.value);if(D.crossWith==="color-in-foreground-light-mode"){const H=[m.prefix,m.colorName,"foreground",D.contrast].join("-");s[H]=Z}else if(D.crossWith==="color-in-background-light-mode"){const H=[m.prefix,m.colorName,"background",D.contrast].join("-");s[H]=Z}else if(D.crossWith==="color-on-self-light-mode"){const H=[m.prefix,m.colorName,"on","self",D.contrast].join("-");s[H]=Z}else if(D.crossWith==="color-in-foreground-dark-mode"){const H=[m.prefix,m.colorName,"foreground",D.contrast].join("-");a[H]=Z}else if(D.crossWith==="color-in-background-dark-mode"){const H=[m.prefix,m.colorName,"background",D.contrast].join("-");a[H]=Z}else if(D.crossWith==="color-on-self-dark-mode"){const H=[m.prefix,m.colorName,"on","self",D.contrast].join("-");a[H]=Z}else throw $t.tsType(D.crossWith).equals(),new Error(`crossWith not handled: ${String(D.crossWith)}`)})});const u=yh(i,s);return{defaultLight:u,darkOverride:kw(u,"dark",{defaultOverride:{background:"black",foreground:"white"},colorOverrides:a})}}function kN(e,t){const r=t?.paletteVarName,n=zw(e.init.default,1,void 0,r),o=EN(e.init.colors,1,e.init.default,r),i=`const theme = defineColorTheme(
${n},
${o},
);`,s=(t?.overrides||[]).map(a=>DN(a,r));return[i,...s].join(`

`)}function DN(e,t){const r=[],n=[];bo(e.asTheme.init.default.foreground,e.originalTheme.init.default.foreground)||n.push(`${ke(3)}foreground: ${qi(e.asTheme.init.default.foreground,3,t)},`),bo(e.asTheme.init.default.background,e.originalTheme.init.default.background)||n.push(`${ke(3)}background: ${qi(e.asTheme.init.default.background,3,t)},`),n.length>0&&r.push(`${ke(2)}defaultOverride: {
${n.join(`
`)}
${ke(2)}},`);const o=[];return Yn(e.asTheme.init.colors).forEach(([i,s])=>{const a=e.originalTheme.init.colors[i];if(!a)return;const u=[];"foreground"in s&&(!("foreground"in a)||!bo(s.foreground,a.foreground))&&u.push(`${ke(4)}foreground: ${qi(s.foreground,4,t)},`),"background"in s&&(!("background"in a)||!bo(s.background,a.background))&&u.push(`${ke(4)}background: ${qi(s.background,4,t)},`),u.length>0&&o.push(`${ke(3)}'${i}': {
${u.join(`
`)}
${ke(3)}},`)}),o.length>0&&r.push(`${ke(2)}colorOverrides: {
${o.join(`
`)}
${ke(2)}},`),`const ${e.name}Override = defineColorThemeOverride(
${ke(1)}theme,
${ke(1)}'${e.name}',
${ke(1)}{
${r.join(`
`)}
${ke(1)}},
);`}function ke(e){return"    ".repeat(e)}function bo(e,t){return typeof e!=typeof t?!1:typeof e=="string"||typeof e=="number"?e===t:"_$cssResult$"in e&&"_$cssResult$"in t?e.cssText===t.cssText:JSON.stringify(e)===JSON.stringify(t)}function xN(e){const t=e.match(/^var\(--([^,)]+)/);return t?t[1]:void 0}function qi(e,t,r){if(typeof e=="string")return`'${e}'`;if(typeof e=="number")return String(e);if("_$cssResult$"in e){const n=String(e);{const o=xN(n);if(o)return`${r}['${o}']`}return`css\`${n}\``}else if("refBackground"in e||"refForeground"in e||"refDefaultBackground"in e||"refDefaultForeground"in e){const n=[];return"refForeground"in e&&n.push(`${ke(t+1)}refForeground: '${e.refForeground}',`),"refBackground"in e&&n.push(`${ke(t+1)}refBackground: '${e.refBackground}',`),"refDefaultForeground"in e&&n.push(`${ke(t+1)}refDefaultForeground: true,`),"refDefaultBackground"in e&&n.push(`${ke(t+1)}refDefaultBackground: true,`),`{
${n.join(`
`)}
${ke(t)}}`}else return`'${e.default}'`}function zw(e,t,r,n){const o=[];return"foreground"in e&&(!r||!bo(e.foreground,r.foreground))&&(r&&bo(e.foreground,r.background)?o.push(`${ke(t+1)}foreground: {
${ke(t+2)}refDefaultBackground: true,
${ke(t+1)}},`):o.push(`${ke(t+1)}foreground: ${qi(e.foreground,t+1,n)},`)),"background"in e&&(!r||!bo(e.background,r.background))&&(r&&bo(e.background,r.foreground)?o.push(`${ke(t+1)}background: {
${ke(t+2)}refDefaultForeground: true,
${ke(t+1)}},`):o.push(`${ke(t+1)}background: ${qi(e.background,t+1,n)},`)),`${ke(t)}{
${o.join(`
`)}
${ke(t)}}`}function EN(e,t,r,n){const o=Yn(e).map(([i,s])=>`${ke(t+1)}'${i}': ${zw(s,t+1,r,n).trimStart()},`);return`${ke(t)}{
${o.join(`
`)}
${ke(t)}}`}const Ru="None";function AN({parent:e,title:t,theme:r,hideInverseColors:n,overrides:o,useVerticalLayout:i,prefixGroupByCount:s=2}){const a={"Show Var Names":{controlType:J.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:J.Checkbox,initValue:!0}},u={"Theme Override":{controlType:J.Dropdown,initValue:Ru,options:[Ru,...(o||[]).map(v=>{if(v.name===Ru)throw new Error(`Cannot have theme override named '${Ru}'`);return v.name})]}},l=we({parent:e,title:t,controls:a});function c({controls:v,theme:E,themeColorName:k}){const D=S.isKeyOf(k,E.colors)?E.colors[k]:void 0,M=S.isKeyOf(k,E.inverse)?E.inverse[k]:void 0;if(!D||!M)throw new Error(`No theme color found by name '${k}'`);const O=g`
            <${Sl.assign({color:D,showVarValues:!0,showVarNames:v["Show Var Names"],showContrast:v["Show Contrast Tips"],fontWeight:400})}></${Sl}>
        `;return g`
            <div class="with-inverse">${O}${te}</div>
        `}function d(v,E,k){const D=w5(Object.keys(E.colors),M=>s?M.split("-").slice(0,s).join("-"):M);Object.entries(D).forEach(([M,O])=>{O&&v({title:M,styles:A`
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
                    `,render({controls:j}){const Z="Theme Override"in j&&j["Theme Override"]&&k?.find(H=>H.name===j["Theme Override"])||void 0;return O.map(H=>c({controls:j,theme:Z?.asTheme||E,themeColorName:H}))}})})}const f=["Click a color preview to show CSS var names and values."],m=we({parent:l,title:"Default",descriptionParagraphs:f,useVerticalExamples:i,controls:{copy:{controlType:J.Custom,content:g`
                    <button
                        ${q("click",async()=>{const v=kN(r,{paletteVarName:"viraColorPalette",overrides:o});await navigator.clipboard.writeText(v)})}
                    >
                        Copy Code
                    </button>
                `},...u},defineExamples({defineExample:v}){d(v,r,o)}}),w=(o||[]).map(v=>we({parent:l,title:v.name,useVerticalExamples:i,descriptionParagraphs:f,defineExamples({defineExample:E}){d(E,v.asTheme,void 0)}}));return[l,m,...w]}const CN=[{title:"Black",fontWeight:400,foreground:h["vira-black"]},{title:"Black",fontWeight:700,foreground:h["vira-black"]},{title:"White",fontWeight:400,foreground:h["vira-white"]},{title:"White",fontWeight:700,foreground:h["vira-white"]},{title:"Black",fontWeight:400,background:h["vira-black"]},{title:"Black",fontWeight:700,background:h["vira-black"]},{title:"White",fontWeight:400,background:h["vira-white"]},{title:"White",fontWeight:700,background:h["vira-white"]}];function FN({colors:e,parent:t,title:r,includeContrast:n,includeTheme:o,useVerticalTheme:i,options:s}){const a=Vw(e),u=we({parent:t,title:r}),l=we({parent:u,title:"Palette",defineExamples({defineExample:w}){Object.entries(a).forEach(([v,E])=>{w({title:v,styles:A`
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
                                    color: ${h["vira-grey-50"].value};
                                }

                                & .color-value {
                                    margin-left: 1ch;
                                }
                            }
                        `,render(){return E.map(k=>g`
                                    <div class="swatch-wrapper">
                                        <div
                                            class="swatch"
                                            style=${A`
                                                background-color: ${Ie(k.definition.default)};
                                            `}
                                        ></div>
                                        <p class="color-details">
                                            <span>${k.cssVarName}</span>
                                            <br />
                                            <span class="color-value">
                                                ${k.definition.default}
                                            </span>
                                        </p>
                                    </div>
                                `)}})})}}),c=we({parent:u,title:"Palette Contrast"});function d(w,v){return we({parent:c,title:`${r} ${w}`,defineExamples({defineExample:E}){Object.entries(a).forEach(([k,D])=>{const M=S.isArray(v)?v:v(D);E({title:k,styles:A`
                                :host {
                                    display: flex;
                                    flex-direction: column;
                                    gap: 24px;
                                }

                                p {
                                    ${cu}
                                }

                                .darkness-level {
                                    text-align: center;
                                    font-size: 12px;
                                    color: ${h["vira-grey-50"].value};
                                }

                                td {
                                    padding: 4px;
                                    min-width: 170px;
                                }
                            `,render(){const O=D.map(Z=>{const H=M.map(ae=>g`
                                            <td>
                                                <p class="darkness-level">${Z.suffix}</p>
                                                <${Sl.assign({color:{background:ae.background||Z.definition,foreground:ae.foreground||Z.definition},showVarValues:!0,showVarNames:!1,showContrast:!0,fontWeight:ae.fontWeight})}></${Sl}>
                                            </td>
                                        `);return g`
                                        <tr>${H}</tr>
                                    `}),j=M.map(Z=>{const H=Z.background?"in back":"in front",ae=[Z.title,`(${H})`,`(${Z.fontWeight})`].join(" ");return g`
                                        <th>${ae}</th>
                                    `});return g`
                                    <table cellspacing="0" cellpadding="0">
                                        <thead><tr>${j}</tr></thead>
                                        <tbody>${O}</tbody>
                                    </table>
                                `}})})}})}const f=d("Contrast Black White",CN);function m(w){return d(`Contrast Self ${w}`,v=>v.map(E=>({fontWeight:w,title:E.suffix||"",foreground:E.definition})))}return $N(e,s),[u,l,c,f,m(400),m(700)].filter(S.isTruthy)}const nt=we({title:"Elements",parent:void 0}),kc=we({title:"Styles",parent:void 0}),qw=we({title:"Util",parent:void 0}),SN=we({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:J.Color,initValue:""},"Fill Color":{controlType:J.Color,initValue:""},"Stroke Width":{controlType:J.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(vf).forEach(t=>{e({title:t.name,styles:A`
                    :host(:hover) ${W} {
                        background-color: #f2f2f2;
                    }

                    ${W} {
                        padding: 8px;
                        border-radius: ${Zr["vira-form-input-radius"].value};
                    }
                `,render({controls:r}){const n=A`
                        ${$["vira-icon-fill-color"].name}: ${Ie(r["Fill Color"]||"inherit")};
                        ${$["vira-icon-stroke-color"].name}: ${Ie(r["Stroke Color"]||"inherit")};
                        ${$["vira-icon-stroke-width"].name}: ${Ie(r["Stroke Width"]?Aa(r["Stroke Width"]):"inherit")};
                    `;return g`
                        <${W.assign({icon:t})} style=${n}></${W}>
                    `}})})}}),TN=FN({colors:h,parent:kc,title:"Vira Color",includeContrast:!0,includeTheme:!1,options:{crossContrastLevels:[be.BodyText,be.Header,be.Placeholder,be.Decoration,be.Invisible]}}),MN=AN({parent:kc,theme:Dw,title:"Vira Theme",hideInverseColors:!0,overrides:[CM]}),Kw={async element1(){return await ii({seconds:2}),(await il(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-BdR0a5ch.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await ii({seconds:2}),(await il(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-CXtnCRGj.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},Bp=Ei()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:Bw(Kw)}},render({state:e,inputs:t}){return Rw(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(r){return g`
                    <${oi}>
                        ${Ds("Failed to import element",Tt(r))}
                    </${oi}>
                `},loading(){return g`
                    <${W.assign({icon:di})}></${W}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;$t.never("The error element will always error")}})}}),Rp=Ei()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:Bw(Kw)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),Rw(e.dynamicElements,{error(r){return g`
                    <${oi}>
                        ${Ds("Failed to import element",Tt(r))}
                    </${oi}>
                `},loading(){return g`
                    <${W.assign({icon:di})}></${W}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;$t.never("The error element will always error")}})}}),Lp=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],NN=we({parent:qw,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:A`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${st.assign({value:String(t.value),options:Lp})}
                        ${q(st.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${st}>
                    <${Bp.assign({numberValue:t.value})}></${Bp}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:A`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${st.assign({value:String(t.value),options:Lp})}
                        ${q(st.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${st}>
                    <${Rp.assign({numberValue:t.value})}></${Rp}>
                `}})}}),PN=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:g`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:A`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:A`
            ${kr} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],IN=we({title:kr.tagName,parent:nt,controls:{Selected:{controlType:J.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:J.Text,initValue:""}},defineExamples({defineExample:e}){PN.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?g`
                            <${kr.assign(n)}>
                                ${t.customTemplate}
                            </${kr}>
                        `:g`
                            <${kr.assign(n)}></${kr}>
                        `}})})}}),xf=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new hh({sanitizeRoute(e){return e}})}}],ON=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:vh.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...xf,{id:"long",label:g`
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
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:ko.Both,items:[...xf,{id:"long",label:g`
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
                    `}]}}],BN=we({parent:nt,title:yo.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){ON.forEach(t=>{e({title:t.title,styles:A`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${yo.assign({items:xf,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${yo}>
                    `}})})}}),Gw=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],RN=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...Gw,{id:4,label:"link here",route:{route:{paths:["test"]},router:new hh({sanitizeRoute(e){return e}})}}]}}],LN=we({parent:nt,title:wa.tagName,defineExamples({defineExample:e}){RN.forEach(t=>{e({title:t.title,render(){return g`
                        <${wa.assign({isMultiSelect:!1,navController:void 0,items:Gw,selected:[],...t.inputs})}></${wa}>
                    `}})})}}),Zw=[];Vr(Cl).forEach(e=>{Vr(vh).forEach(t=>{Zw.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const jN=we({parent:nt,title:$a.tagName,defineExamples({defineExample:e}){Zw.forEach(t=>{e({title:t.title,styles:A`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${$a.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${$a}>
                    `}})})}}),UN=we({parent:nt,title:ve.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:A`
                ${ve} {
                    ${$s["vira-focus-outline-border-radius"].name}: 0;
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
                    <${ve.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${ve.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${ve.slotNames.popUp}>Pop up!</div>
                    </${ve}>
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
                    <${ve.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${ve.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${ve.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ve}>
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
                    <${ve.assign({keepOpenAfterInteraction:!0,horizontalAnchor:ko.Right})}>
                        <div slot=${ve.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ve.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ve}>
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
                    <${ve.assign({keepOpenAfterInteraction:!0,horizontalAnchor:ko.Left})}>
                        <div slot=${ve.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ve.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ve}>
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
                    <${ve.assign({keepOpenAfterInteraction:!0,horizontalAnchor:ko.Right})}>
                        <div slot=${ve.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ve.slotNames.popUp}>not long</div>
                    </${ve}>
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
                        <${ve.assign({keepOpenAfterInteraction:!0})}>
                            <div class="trigger" slot=${ve.slotNames.trigger}>
                                Trigger
                            </div>
                            <div class="pop-up" slot=${ve.slotNames.popUp}>
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
                        </${ve}>
                    </div>
                `}})}}),_N=[{title:"menu shadow",styles:ts.menuShadow},{title:"menu shadow reversed",styles:ts.menuShadowReversed},{title:"modal",styles:ts.modal}],VN=we({parent:kc,title:"Shadows",defineExamples({defineExample:e}){_N.forEach(t=>{e({title:t.title,styles:A`
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
                    `}})})}}),WN=we({parent:nt,title:Qe.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:J.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return g`
                    <${Qe.assign({text:"Text here",bold:!1})}></${Qe}>
                `}}),e({title:"Bold",render(){return g`
                    <${Qe.assign({text:"Text here",bold:!0})}></${Qe}>
                `}}),e({title:"Dynamic",render({controls:t}){return g`
                    <${Qe.assign({text:"Text here",bold:t.bolded})}></${Qe}>
                `}}),e({title:"Resized",styles:A`
                ${Qe} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return g`
                    <${Qe.assign({text:"Not Bolded",bold:!1})}></${Qe}>
                    <${Qe.assign({text:"Bolded",bold:!0})}></${Qe}>
                `}}),e({title:"Alignment",styles:A`
                ${Qe} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return g`
                    <${Qe.assign({text:"Not Bolded",bold:!1})}></${Qe}>
                    <${Qe.assign({text:"Bolded",bold:!0})}></${Qe}>
                `}}),e({title:"Stylized",styles:A`
                ${Qe} {
                    text-decoration: underline;
                }
            `,render(){return g`
                    <${Qe.assign({text:"Not Bolded",bold:!1})}></${Qe}>
                    <${Qe.assign({text:"Bolded",bold:!0})}></${Qe}>
                `}})}}),zN=we({parent:nt,title:ye.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:J.Color,initValue:ye.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:J.Color,initValue:ye.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:J.Color,initValue:ye.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:J.Color,initValue:ye.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:o}){const i=n??A``;e({title:r,styles:i,render({controls:s}){const a=A`
                        ${ye.cssVars["vira-button-primary-color"].name}: ${Ie(s["Primary color"]||"inherit")};
                        ${ye.cssVars["vira-button-secondary-color"].name}: ${Ie(s["Secondary color"]||"inherit")};
                        ${ye.cssVars["vira-button-primary-hover-color"].name}: ${Ie(s["Hover color"]||"inherit")};
                        ${ye.cssVars["vira-button-primary-active-color"].name}: ${Ie(s["Active color"]||"inherit")};
                    `;return g`
                        <${ye.assign({text:"hello",...o})}
                            style=${a}
                        ></${ye}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:va}}),t({title:"with expanding icon",inputs:{icon:va,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:zi.Outline}}),t({title:"only icon",inputs:{icon:va,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:A`
                ${ye} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:A`
                ${ye} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:A`
                :host {
                    ${ye.cssVars["vira-button-primary-color"].name}: pink;
                    ${ye.cssVars["vira-button-secondary-color"].name}: purple;
                    ${ye.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${ye.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return g`
                    <${ye.assign({text:"hello"})}></${ye}>
                `}})}}),qN=[{title:"basic"},{title:"success",inputs:{cardState:Df.Success}},{title:"error",inputs:{cardState:Df.Error}},{title:"long",content:g`
            <p
                style=${A`
                    ${cu}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],KN=we({parent:nt,title:gd.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){qN.forEach(t=>{e({title:t.title,render(){return g`
                        <${gd.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${gd}>
                    `}})})}}),GN=we({parent:nt,title:xe.tagName,controls:{Checked:{controlType:J.Checkbox,initValue:!1},Disabled:{controlType:J.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${xe.assign({value:t.checked})}
                        ${q(xe.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${xe}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${xe.assign({value:t.checked})}
                        ${q(xe.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${xe}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${xe.assign({value:t.checked,hasError:!0})}
                        ${q(xe.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${xe}>
                `}}),e({title:"disabled unchecked",render(){return g`
                    <${xe.assign({value:!1,disabled:!0})}></${xe}>
                `}}),e({title:"disabled checked",render(){return g`
                    <${xe.assign({value:!0,disabled:!0})}></${xe}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return g`
                    <${xe.assign({value:t.Checked,disabled:t.Disabled})}></${xe}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return g`
                    <${xe.assign({value:!0})}></${xe}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${xe.assign({value:t.checked,label:"label goes here"})}
                        ${q(xe.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${xe}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${xe.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${q(xe.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${xe}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:A`
                ${xe} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${xe.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${q(xe.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${xe}>
                `}})}}),ZN=we({title:In.tagName,parent:nt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:A`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>g`
                        <${In.assign({expanded:!!r.expandedStates[o]})}
                            ${q(In.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${In.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${q("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${hr(!!r.showMoreStates[o],g`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${In}>
                    `)}}),e({title:"wider examples",styles:A`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>g`
                        <${In.assign({expanded:!!r.expandedStates[o]})}
                            ${q(In.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${In.slotNames.header}
                            >
                                Section ${o}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${q("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${hr(!!r.showMoreStates[o],g`
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
                        </${In}>
                    `)}})}}),ka=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],HN=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...ka,{id:42,label:g`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...ka,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:A`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:A`
            ${aa} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Gr}}],JN=we({title:aa.tagName,parent:nt,controls:{Selected:{controlType:J.Dropdown,initValue:"",options:["",...ka.map(e=>e.label)]},Prefix:{controlType:J.Text,initValue:""},"Force State":{controlType:J.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:J.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:J.Dropdown,initValue:"",options:["",...Object.keys(vf)]},Disabled:{controlType:J.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:J.Text,initValue:"Select something"}},defineExamples({defineExample:e}){HN.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:o}){const i={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:o.Placeholder,options:t.inputs?.options||ka,selected:o.Selected?[ka.find(s=>s.label===o.Selected)?.id].filter(S.isTruthy):r.selected,selectionPrefix:o.Prefix||t.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":t.inputs?.isDisabled,icon:o.Icon?vf[o.Icon]:t.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return g`
                        <${aa.assign(i)}
                            ${q(aa.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${aa}>
                    `}})})}}),YN=we({parent:nt,title:oi.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${oi}>Error Content</${oi}>
                `}})}}),$d=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],XN=we({parent:nt,title:ur.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:$e.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:$e.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:$e.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:$e.Email,label:"Email Address",value:t.email},password:{type:$e.NewPassword,label:"Password",value:t.password},userRole:{type:$e.Select,label:"Role",options:$d,value:t.userRole,placeholder:"placeholder"},disabledField:{type:$e.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:$e.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return g`
                    <${ur.assign({fields:n})}
                        ${q(ur.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonStyle:zi.Outline})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${ur}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:$e.Text,label:"First Name",value:t.firstName},lastName:{type:$e.Text,label:"Last Name",value:t.lastName}};return g`
                    <${ur.assign({fields:n})}
                        ${q(ur.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <${ct.assign({value:"",label:"More stuff"})}></${ct}>
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonStyle:zi.Outline})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${ur}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${ur} {
                    width: 400px;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:$e.Text,label:"First Name",value:t.firstName},lastName:{type:$e.Text,label:"Last Name",value:t.lastName},subscribe:{type:$e.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:$e.Email,label:"Email Address",value:t.email},password:{type:$e.NewPassword,label:"Password",value:t.password},userRole:{type:$e.Select,label:"Role",options:$d,value:t.userRole}};return g`
                    <${ur.assign({fields:n})}
                        ${q(ur.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonStyle:zi.Outline})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${ur}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:$e.Text,label:"First Name",value:t.firstName},lastName:{type:$e.Text,label:"Last Name",value:t.lastName},subscribe:{type:$e.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:$e.Email,label:"Email Address",value:t.email},password:{type:$e.NewPassword,label:"Password",value:t.password},userRole:{type:$e.Select,label:"Role",options:$d,value:t.userRole}};return g`
                    <${ur.assign({fields:n,isDisabled:!0})}
                        ${q(ur.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ye.assign({text:"Cancel",buttonStyle:zi.Outline})}></${ye}>
                            <${ye.assign({text:"Submit"})}></${ye}>
                        </div>
                    </${ur}>
                `}})}}),QN=we({title:W.tagName,parent:nt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${W.assign({icon:Gr})}></${W}>
                `}}),e({title:"using createColoredIcon",render(){return g`
                    <${W.assign({icon:pp(Gr,{"vira-icon-stroke-color":"red"})})}></${W}>
                `}}),e({title:"fit container",styles:A`
                ${W} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return g`
                    <${W.assign({icon:pp(Gr,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${W}>
                `}})}}),eP=we({title:lo.tagName,parent:nt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:A`
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
                        <${W.assign({icon:di,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${W}>
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
                        <${W.assign({icon:El,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${W}>
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
                        <${W.assign({icon:di,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${W}>
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
                        <${W.assign({icon:El,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${W}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:A`
                    ${lo} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||A``}
                    }

                    ${r.allowReload?A`
                              ${lo} {
                                  cursor: pointer;
                              }

                              ${lo}:hover {
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
                        <${lo.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${q("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${ri()}`})})}
                        >
                            ${r.loadingSlot?g`
                                      <div class="slot-wrapper" slot=${lo.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:te}${r.errorSlot?g`
                                      <div class="slot-wrapper" slot=${lo.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:te}
                        </${lo}>
                    `}})})}}),tP=we({title:ct.tagName,parent:nt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:J.Color,initValue:oe["vira-form-foreground-color"].default},"Placeholder color":{controlType:J.Color,initValue:oe["vira-form-placeholder-color"].default},"Border color":{controlType:J.Color,initValue:oe["vira-form-border-color"].default},"Focus color":{controlType:J.Color,initValue:$s["vira-focus-outline-color"].default},"Selection color":{controlType:J.Color,initValue:oe["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:o,inputs:i}){e({title:o,styles:A`
                    ${n||A``}
                `,state(){return{value:i.value}},render({state:s,updateState:a,controls:u}){const l={[String(oe["vira-form-foreground-color"].name)]:u["Text color"],[String(oe["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(oe["vira-form-border-color"].name)]:u["Border color"],[String($s["vira-focus-outline-color"].name)]:u["Focus color"],[String(oe["vira-form-text-selection-color"].name)]:u["Selection color"]},c=Kt(l,(f,m)=>m||"inherit"),d=Object.entries(c).map(([f,m])=>[f,m].join(": ")+";").join(`
`);return g`
                        <${ct.assign({...i,value:s.value})}
                            style=${d}
                            ${q(ct.events.valueChange,f=>{a({value:f.detail}),console.info("changed:",f.detail)})}
                        ></${ct}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Gr}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:A`
                    ${ct} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Gr}},{title:"taller height",styles:A`
                    ${ct} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Gr}},{title:"shorter height",styles:A`
                    ${ct} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Gr}},{title:"max width",styles:A`
                    ${ct} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:A`
                    ${ct} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:rs.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:rs.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:A`
                    ${ct} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:A`
                    ${ct} {
                        width: unset;
                    }
                `}].forEach(t)}}),rP=we({title:Wi.tagName,parent:nt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:J.Color,initValue:""},"Hover color":{controlType:J.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:o}){const i=A`
                        ${Wi.cssVars["vira-link-hover-color"].name}: ${Ie(o["Hover color"]||"inherit")};
                        color: ${Ie(o["CSS Color"]||"inherit")};
                    `;return g`
                        <${Wi.assign(n)} style=${i}>My Link</${Wi}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),nP=we({title:On.tagName,parent:nt,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:r}){return g`
                    <button
                        ${q("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${On.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${q(On.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${On}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:A`
                ${On} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${On.cssVars["vira-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:r}){return g`
                    <button
                        ${q("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${On.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${q(On.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${On}>
                `}})}}),la=A`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,kd=g`
    <${Cn.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${Cn.slotNames.large}>Large</div>
        <div class="small" slot=${Cn.slotNames.small}>Small</div>
    </${Cn}>
`,Ki={max:120,min:25,default:80},jp=Ke()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":Aa(Ki.default)},state(){return{intervalId:void 0,increment:1}},styles:({cssVars:e})=>A`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,init({state:e,updateState:t,host:r,cssVars:n}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{const o=Fb.isNumber(B5(OD({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||Ki.default;(o>=Ki.max||o<=Ki.min)&&t({increment:e.increment*-1}),Kb({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:Aa(o+e.increment)})},10)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render(){return g`
            <slot></slot>
        `}}),Up=Ke()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":Aa(Ki.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:A`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${la}

        .large {
            white-space: nowrap;
        }
    `,init({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{t({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render({state:e}){return g`
            <${Cn.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${Cn.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${Cn.slotNames.small}>Small</div>
            </${Cn}>
        `}}),oP=we({title:Cn.tagName,parent:nt,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:A`
                ${la}
            `,render(){return kd}}),e({title:"overflowing",styles:A`
                ${la}

                ${Cn} {
                    max-width: 50px;
                }
            `,render(){return kd}}),e({title:"dynamic size",styles:A`
                ${la}

                .wrapper {
                    width: ${Ki.max+10}px;
                }
            `,render(){return g`
                    <div class="wrapper">
                        <${jp}>
                            ${kd}
                        </${jp}>
                    </div>
                `}}),e({title:"dynamic slot",styles:A`
                ${la}
            `,render(){return g`
                    <${Up}></${Up}>
                `}})}}),iP=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:A`
            :host {
                ${Qt.cssVars["vira-progress-background-color"].name}: red;
                ${Qt.cssVars["vira-progress-foreground-color"].name}: black;
                ${Qt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Qt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:A`
            :host {
                ${Qt.cssVars["vira-progress-background-color"].name}: red;
                ${Qt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Qt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Qt} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:A`
            :host {
                ${Qt.cssVars["vira-progress-background-color"].name}: red;
                ${Qt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Qt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Qt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],sP=we({parent:nt,title:Qt.tagName,defineExamples({defineExample:e}){iP.forEach(t=>{e({title:t.title,styles:A`
                    ${t.styles||A``}
                `,render(){return g`
                        <${Qt.assign({value:50,...t.inputs})}></${Qt}>
                    `}})})}}),Ct=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],aP=[{title:"basic",inputs:{options:Ct}},{title:"with really long option",inputs:{options:[...Ct,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:Ct,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:Ct,disabled:!0}},{title:"error",inputs:{options:Ct,hasError:!0}},{title:"with icon",inputs:{options:Ct,icon:Gr}},{title:"custom width",inputs:{options:Ct},styles:A`
            ${st} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:Ct,icon:Gr},styles:A`
            ${st} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:Ct,icon:Gr},styles:A`
            ${st} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:Ct,label:"Pick an option"}},{title:"with long label",inputs:{options:Ct,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:Ct,label:"Pick a really really really really long option"},styles:A`
            ${st} {
                width: unset;
            }
        `}],uP=we({parent:nt,title:st.tagName,defineExamples({defineExample:e}){aP.forEach(t=>{e({title:t.title,styles:A`
                    ${t.styles||A``}
                `,state(){return{selected:void 0}},render({state:r,updateState:n}){return g`
                        <${st.assign({...t.inputs,value:r.selected??t.inputs.value})}
                            ${q(st.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${st}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return g`
                    <${st.assign({options:Ct,value:Ct[0]?.value})}></${st}>
                `}}),e({title:"force update",render(){return g`
                    <${_p}></${_p}>
                `}})}}),_p=Ke()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const r=Ct.findIndex(o=>o.value===t.value),n=dn.isDefined(Ct[(r+1)%Ct.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return g`
            <${st.assign({options:Ct,value:e.value})}></${st}>
        `}}),lP=[nt,SN,kc,qw],cP=[WN,zN,KN,GN,ZN,JN,YN,XN,QN,eP,tP,rP,IN,LN,BN,nP,oP,jN,UN,sP,uP].sort((e,t)=>e.title.localeCompare(t.title)),dP=[...cP,NN,VN,...TN,...MN],fP=[...lP,...dP];Ei()({tagName:"vira-book-app",styles:A`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${vd} {
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
            <${vd.assign({internalRouterConfig:{basePath:fh("vira"),useInternalRouter:!0},pages:fP,themeColor:"#33ccff"})}>
                <h1 slot=${En.NavHeader}>Vira</h1>
            </${vd}>
        `}});export{Ei as d,g as h};
