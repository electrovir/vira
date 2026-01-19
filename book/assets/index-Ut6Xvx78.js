(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Ot;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(Ot||(Ot={}));function Lp(e,t=r=>r){const r=new Map;return e.filter(n=>{const o=t(n);return r.get(o)?!1:(r.set(o,n),!0)})}class kf{diff(t,r,n={}){let o;typeof n=="function"?(o=n,n={}):"callback"in n&&(o=n.callback);const i=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(i,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,u,n,o)}diffWithOptionsObj(t,r,n,o){var i;const s=E=>{if(E=this.postProcess(E,n),o){setTimeout(function(){o(E)},0);return}else return E},a=r.length,u=t.length;let l=1,c=a+u;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));const d=(i=n.timeout)!==null&&i!==void 0?i:1/0,f=Date.now()+d,m=[{oldPos:-1,lastComponent:void 0}];let v=this.extractCommon(m[0],r,t,0,n);if(m[0].oldPos+1>=u&&v+1>=a)return s(this.buildValues(m[0].lastComponent,r,t));let $=-1/0,k=1/0;const D=()=>{for(let E=Math.max($,-l);E<=Math.min(k,l);E+=2){let P;const O=m[E-1],z=m[E+1];O&&(m[E-1]=void 0);let ie=!1;if(z){const pe=z.oldPos-E;ie=z&&0<=pe&&pe<a}const Me=O&&O.oldPos+1<u;if(!ie&&!Me){m[E]=void 0;continue}if(!Me||ie&&O.oldPos<z.oldPos?P=this.addToPath(z,!0,!1,0,n):P=this.addToPath(O,!1,!0,1,n),v=this.extractCommon(P,r,t,E,n),P.oldPos+1>=u&&v+1>=a)return s(this.buildValues(P.lastComponent,r,t))||!0;m[E]=P,P.oldPos+1>=u&&(k=Math.min(k,E-1)),v+1>=a&&($=Math.max($,E+1))}l++};if(o)(function E(){setTimeout(function(){if(l>c||Date.now()>f)return o(void 0);D()||E()},0)})();else for(;l<=c&&Date.now()<=f;){const E=D();if(E)return E}}addToPath(t,r,n,o,i){const s=t.lastComponent;return s&&!i.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+o,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,o,i){const s=r.length,a=n.length;let u=t.oldPos,l=u-o,c=0;for(;l+1<s&&u+1<a&&this.equals(n[u+1],r[l+1],i);)l++,u++,c++,i.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!i.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const o=[];let i;for(;t;)o.push(t),i=t.previousComponent,delete t.previousComponent,t=i;o.reverse();const s=o.length;let a=0,u=0,l=0;for(;a<s;a++){const c=o[a];if(c.removed)c.value=this.join(n.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let d=r.slice(u,u+c.count);d=d.map(function(f,m){const v=n[l+m];return v.length>f.length?v:f}),c.value=this.join(d)}else c.value=this.join(r.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return o}}function yh(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function bh(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function $d(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function kd(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function zs(e,t){return $d(e,t,"")}function pu(e,t){return kd(e,t,"")}function vh(e,t){return t.slice(0,Gw(e,t))}function Gw(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const o=Array(n);let i=0;o[0]=0;for(let s=1;s<n;s++){for(t[s]==t[i]?o[s]=o[i]:o[s]=i;i>0&&t[s]!=t[i];)i=o[i];t[s]==t[i]&&i++}i=0;for(let s=r;s<e.length;s++){for(;i>0&&e[s]!=t[i];)i=o[i];e[s]==t[i]&&i++}return i}function qs(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function ao(e){const t=e.match(/^\s*/);return t?t[0]:""}const Ju="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Zw=new RegExp(`[${Ju}]+|\\s+|[^${Ju}]`,"ug");class Hw extends kf{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const a of Array.from(s.segment(t))){const u=a.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(u)?n[n.length-1]+=u:n.push(u)}}else n=t.match(Zw)||[];const o=[];let i=null;return n.forEach(s=>{/\s/.test(s)?i==null?o.push(s):o.push(o.pop()+s):i!=null&&/\s/.test(i)?o[o.length-1]==i?o.push(o.pop()+s):o.push(i+s):o.push(s),i=s}),o}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,o=null,i=null;return t.forEach(s=>{s.added?o=s:s.removed?i=s:((o||i)&&wh(n,i,o,s),n=s,o=null,i=null)}),(o||i)&&wh(n,i,o,null),t}}const Jw=new Hw;function Yw(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?e2(e,t,r):Jw.diff(e,t,r)}function wh(e,t,r,n){if(t&&r){const o=ao(t.value),i=qs(t.value),s=ao(r.value),a=qs(r.value);if(e){const u=yh(o,s);e.value=kd(e.value,s,u),t.value=zs(t.value,u),r.value=zs(r.value,u)}if(n){const u=bh(i,a);n.value=$d(n.value,a,u),t.value=pu(t.value,u),r.value=pu(r.value,u)}}else if(r){if(e){const o=ao(r.value);r.value=r.value.substring(o.length)}if(n){const o=ao(n.value);n.value=n.value.substring(o.length)}}else if(e&&n){const o=ao(n.value),i=ao(t.value),s=qs(t.value),a=yh(o,i);t.value=zs(t.value,a);const u=bh(zs(o,a),s);t.value=pu(t.value,u),n.value=$d(n.value,o,u),e.value=kd(e.value,o,o.slice(0,o.length-u.length))}else if(n){const o=ao(n.value),i=qs(t.value),s=vh(i,o);t.value=pu(t.value,s)}else if(e){const o=qs(e.value),i=ao(t.value),s=vh(o,i);t.value=zs(t.value,s)}}class Xw extends kf{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Ju}]+|[^\\S\\n\\r]+|[^${Ju}]`,"ug");return t.match(r)||[]}}const Qw=new Xw;function e2(e,t,r){return Qw.diff(e,t,r)}class t2 extends kf{constructor(){super(...arguments),this.tokenize=o2}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const r2=new t2;function n2(e,t,r){return r2.diff(e,t,r)}function o2(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let o=0;o<n.length;o++){const i=n[o];o%2&&!t.newlineIsToken?r[r.length-1]+=i:r.push(i)}return r}function $h(e,t){return jp(e,new Map)}function jp(e,t,r){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((o,i)=>o[0].localeCompare(i[0])).forEach(([o,i])=>{const s=jp(i,t);n[o]=s}),n}else return e}var i2=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,s2=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,a2=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,$c={Space_Separator:i2,ID_Start:s2,ID_Continue:a2},ot={isSpaceSeparator(e){return typeof e=="string"&&$c.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||$c.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||$c.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let Dd,tr,Un,Yu,Do,un,At,Df,da;var u2=function(t,r){Dd=String(t),tr="start",Un=[],Yu=0,Do=1,un=0,At=void 0,Df=void 0,da=void 0;do At=l2(),f2[tr]();while(At.type!=="eof");return typeof r=="function"?xd({"":da},"",r):da};function xd(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let o=0;o<n.length;o++){const i=String(o),s=xd(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const o in n){const i=xd(n,o,r);i===void 0?delete n[o]:Object.defineProperty(n,o,{value:i,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let ne,ee,ea,Rn,ce;function l2(){for(ne="default",ee="",ea=!1,Rn=1;;){ce=Zn();const e=Up[ne]();if(e)return e}}function Zn(){if(Dd[Yu])return String.fromCodePoint(Dd.codePointAt(Yu))}function M(){const e=Zn();return e===`
`?(Do++,un=0):e?un+=e.length:un++,e&&(Yu+=e.length),e}const Up={default(){switch(ce){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":M();return;case"/":M(),ne="comment";return;case void 0:return M(),Le("eof")}if(ot.isSpaceSeparator(ce)){M();return}return Up[tr]()},comment(){switch(ce){case"*":M(),ne="multiLineComment";return;case"/":M(),ne="singleLineComment";return}throw je(M())},multiLineComment(){switch(ce){case"*":M(),ne="multiLineCommentAsterisk";return;case void 0:throw je(M())}M()},multiLineCommentAsterisk(){switch(ce){case"*":M();return;case"/":M(),ne="default";return;case void 0:throw je(M())}M(),ne="multiLineComment"},singleLineComment(){switch(ce){case`
`:case"\r":case"\u2028":case"\u2029":M(),ne="default";return;case void 0:return M(),Le("eof")}M()},value(){switch(ce){case"{":case"[":return Le("punctuator",M());case"n":return M(),Lo("ull"),Le("null",null);case"t":return M(),Lo("rue"),Le("boolean",!0);case"f":return M(),Lo("alse"),Le("boolean",!1);case"-":case"+":M()==="-"&&(Rn=-1),ne="sign";return;case".":ee=M(),ne="decimalPointLeading";return;case"0":ee=M(),ne="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":ee=M(),ne="decimalInteger";return;case"I":return M(),Lo("nfinity"),Le("numeric",1/0);case"N":return M(),Lo("aN"),Le("numeric",NaN);case'"':case"'":ea=M()==='"',ee="",ne="string";return}throw je(M())},identifierNameStartEscape(){if(ce!=="u")throw je(M());M();const e=Ad();switch(e){case"$":case"_":break;default:if(!ot.isIdStartChar(e))throw kh();break}ee+=e,ne="identifierName"},identifierName(){switch(ce){case"$":case"_":case"‌":case"‍":ee+=M();return;case"\\":M(),ne="identifierNameEscape";return}if(ot.isIdContinueChar(ce)){ee+=M();return}return Le("identifier",ee)},identifierNameEscape(){if(ce!=="u")throw je(M());M();const e=Ad();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!ot.isIdContinueChar(e))throw kh();break}ee+=e,ne="identifierName"},sign(){switch(ce){case".":ee=M(),ne="decimalPointLeading";return;case"0":ee=M(),ne="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":ee=M(),ne="decimalInteger";return;case"I":return M(),Lo("nfinity"),Le("numeric",Rn*(1/0));case"N":return M(),Lo("aN"),Le("numeric",NaN)}throw je(M())},zero(){switch(ce){case".":ee+=M(),ne="decimalPoint";return;case"e":case"E":ee+=M(),ne="decimalExponent";return;case"x":case"X":ee+=M(),ne="hexadecimal";return}return Le("numeric",Rn*0)},decimalInteger(){switch(ce){case".":ee+=M(),ne="decimalPoint";return;case"e":case"E":ee+=M(),ne="decimalExponent";return}if(ot.isDigit(ce)){ee+=M();return}return Le("numeric",Rn*Number(ee))},decimalPointLeading(){if(ot.isDigit(ce)){ee+=M(),ne="decimalFraction";return}throw je(M())},decimalPoint(){switch(ce){case"e":case"E":ee+=M(),ne="decimalExponent";return}if(ot.isDigit(ce)){ee+=M(),ne="decimalFraction";return}return Le("numeric",Rn*Number(ee))},decimalFraction(){switch(ce){case"e":case"E":ee+=M(),ne="decimalExponent";return}if(ot.isDigit(ce)){ee+=M();return}return Le("numeric",Rn*Number(ee))},decimalExponent(){switch(ce){case"+":case"-":ee+=M(),ne="decimalExponentSign";return}if(ot.isDigit(ce)){ee+=M(),ne="decimalExponentInteger";return}throw je(M())},decimalExponentSign(){if(ot.isDigit(ce)){ee+=M(),ne="decimalExponentInteger";return}throw je(M())},decimalExponentInteger(){if(ot.isDigit(ce)){ee+=M();return}return Le("numeric",Rn*Number(ee))},hexadecimal(){if(ot.isHexDigit(ce)){ee+=M(),ne="hexadecimalInteger";return}throw je(M())},hexadecimalInteger(){if(ot.isHexDigit(ce)){ee+=M();return}return Le("numeric",Rn*Number(ee))},string(){switch(ce){case"\\":M(),ee+=c2();return;case'"':if(ea)return M(),Le("string",ee);ee+=M();return;case"'":if(!ea)return M(),Le("string",ee);ee+=M();return;case`
`:case"\r":throw je(M());case"\u2028":case"\u2029":m2(ce);break;case void 0:throw je(M())}ee+=M()},start(){switch(ce){case"{":case"[":return Le("punctuator",M())}ne="value"},beforePropertyName(){switch(ce){case"$":case"_":ee=M(),ne="identifierName";return;case"\\":M(),ne="identifierNameStartEscape";return;case"}":return Le("punctuator",M());case'"':case"'":ea=M()==='"',ne="string";return}if(ot.isIdStartChar(ce)){ee+=M(),ne="identifierName";return}throw je(M())},afterPropertyName(){if(ce===":")return Le("punctuator",M());throw je(M())},beforePropertyValue(){ne="value"},afterPropertyValue(){switch(ce){case",":case"}":return Le("punctuator",M())}throw je(M())},beforeArrayValue(){if(ce==="]")return Le("punctuator",M());ne="value"},afterArrayValue(){switch(ce){case",":case"]":return Le("punctuator",M())}throw je(M())},end(){throw je(M())}};function Le(e,t){return{type:e,value:t,line:Do,column:un}}function Lo(e){for(const t of e){if(Zn()!==t)throw je(M());M()}}function c2(){switch(Zn()){case"b":return M(),"\b";case"f":return M(),"\f";case"n":return M(),`
`;case"r":return M(),"\r";case"t":return M(),"	";case"v":return M(),"\v";case"0":if(M(),ot.isDigit(Zn()))throw je(M());return"\0";case"x":return M(),d2();case"u":return M(),Ad();case`
`:case"\u2028":case"\u2029":return M(),"";case"\r":return M(),Zn()===`
`&&M(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw je(M());case void 0:throw je(M())}return M()}function d2(){let e="",t=Zn();if(!ot.isHexDigit(t)||(e+=M(),t=Zn(),!ot.isHexDigit(t)))throw je(M());return e+=M(),String.fromCodePoint(parseInt(e,16))}function Ad(){let e="",t=4;for(;t-- >0;){const r=Zn();if(!ot.isHexDigit(r))throw je(M());e+=M()}return String.fromCodePoint(parseInt(e,16))}const f2={start(){if(At.type==="eof")throw jo();kc()},beforePropertyName(){switch(At.type){case"identifier":case"string":Df=At.value,tr="afterPropertyName";return;case"punctuator":yu();return;case"eof":throw jo()}},afterPropertyName(){if(At.type==="eof")throw jo();tr="beforePropertyValue"},beforePropertyValue(){if(At.type==="eof")throw jo();kc()},beforeArrayValue(){if(At.type==="eof")throw jo();if(At.type==="punctuator"&&At.value==="]"){yu();return}kc()},afterPropertyValue(){if(At.type==="eof")throw jo();switch(At.value){case",":tr="beforePropertyName";return;case"}":yu()}},afterArrayValue(){if(At.type==="eof")throw jo();switch(At.value){case",":tr="beforeArrayValue";return;case"]":yu()}},end(){}};function kc(){let e;switch(At.type){case"punctuator":switch(At.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=At.value;break}if(da===void 0)da=e;else{const t=Un[Un.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Df,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Un.push(e),Array.isArray(e)?tr="beforeArrayValue":tr="beforePropertyName";else{const t=Un[Un.length-1];t==null?tr="end":Array.isArray(t)?tr="afterArrayValue":tr="afterPropertyValue"}}function yu(){Un.pop();const e=Un[Un.length-1];e==null?tr="end":Array.isArray(e)?tr="afterArrayValue":tr="afterPropertyValue"}function je(e){return Xu(e===void 0?`JSON5: invalid end of input at ${Do}:${un}`:`JSON5: invalid character '${_p(e)}' at ${Do}:${un}`)}function jo(){return Xu(`JSON5: invalid end of input at ${Do}:${un}`)}function kh(){return un-=5,Xu(`JSON5: invalid identifier character at ${Do}:${un}`)}function m2(e){console.warn(`JSON5: '${_p(e)}' in strings is not valid ECMAScript; consider escaping`)}function _p(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Xu(e){const t=new SyntaxError(e);return t.lineNumber=Do,t.columnNumber=un,t}var h2=function(t,r,n){const o=[];let i="",s,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const $ of r){let k;typeof $=="string"?k=$:(typeof $=="number"||$ instanceof String||$ instanceof Number)&&(k=String($)),k!==void 0&&s.indexOf(k)<0&&s.push(k)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c($,k){let D=k[$];switch(D!=null&&(typeof D.toJSON5=="function"?D=D.toJSON5($):typeof D.toJSON=="function"&&(D=D.toJSON($))),a&&(D=a.call(k,$,D)),D instanceof Number?D=Number(D):D instanceof String?D=String(D):D instanceof Boolean&&(D=D.valueOf()),D){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof D=="string")return d(D);if(typeof D=="number")return String(D);if(typeof D=="object")return Array.isArray(D)?v(D):f(D)}function d($){const k={"'":.1,'"':.2},D={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let E="";for(let O=0;O<$.length;O++){const z=$[O];switch(z){case"'":case'"':k[z]++,E+=z;continue;case"\0":if(ot.isDigit($[O+1])){E+="\\x00";continue}}if(D[z]){E+=D[z];continue}if(z<" "){let ie=z.charCodeAt(0).toString(16);E+="\\x"+("00"+ie).substring(ie.length);continue}E+=z}const P=l||Object.keys(k).reduce((O,z)=>k[O]<k[z]?O:z);return E=E.replace(new RegExp(P,"g"),D[P]),P+E+P}function f($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let k=i;i=i+u;let D=s||Object.keys($),E=[];for(const O of D){const z=c(O,$);if(z!==void 0){let ie=m(O)+":";u!==""&&(ie+=" "),ie+=z,E.push(ie)}}let P;if(E.length===0)P="{}";else{let O;if(u==="")O=E.join(","),P="{"+O+"}";else{let z=`,
`+i;O=E.join(z),P=`{
`+i+O+`,
`+k+"}"}}return o.pop(),i=k,P}function m($){if($.length===0)return d($);const k=String.fromCodePoint($.codePointAt(0));if(!ot.isIdStartChar(k))return d($);for(let D=k.length;D<$.length;D++)if(!ot.isIdContinueChar(String.fromCodePoint($.codePointAt(D))))return d($);return $}function v($){if(o.indexOf($)>=0)throw TypeError("Converting circular structure to JSON5");o.push($);let k=i;i=i+u;let D=[];for(let P=0;P<$.length;P++){const O=c(String(P),$);D.push(O!==void 0?O:"null")}let E;if(D.length===0)E="[]";else if(u==="")E="["+D.join(",")+"]";else{let P=`,
`+i,O=D.join(P);E=`[
`+i+O+`,
`+k+"]"}return o.pop(),i=k,E}};const g2={parse:u2,stringify:h2};var p2=g2;const Vp="__@@augment-vir-undefined-sentinel@@__",y2=new RegExp(`['"]${Vp}['"]`);function y(e,t){if(typeof e=="string")return e;try{return p2.stringify(e,(n,o)=>o===void 0?Vp:typeof o=="bigint"?Number(o):o,t||void 0).split(y2).join("undefined")}catch{return String(e)}}var b2=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var ln;(function(e){e.Node="node",e.Web="web"})(ln||(ln={}));function v2(){return b2?ln.Node:ln.Web}const zp=v2();function xf(e){return zp===e}function qp(e){return e[zp]()}function w2(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",o=n?n2:Yw,i=[r?"":`
`,y(t&&typeof t=="object"&&!Array.isArray(t)?$h(t):t,4),`
`].join(""),s=[r?"":`
`,y(e&&typeof e=="object"&&!Array.isArray(e)?$h(e):e,4),`
`].join(""),a=$2(n,o(i,s)),u=xf(ln.Node);return[[u?Wn.Green:""," +added (unexpected, added in actual)",u?Wn.Red:""," -missing (expected, missing from actual)",u?Wn.Reset:""].join(""),r?`

`:`
`,a].join("")}var Wn;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(Wn||(Wn={}));var Qu;(function(e){e.Added="+",e.Removed="-"})(Qu||(Qu={}));function $2(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(o=>Dh(o,n)).join(`
`)).join(""):t.map(n=>Dh(void 0,n)).join("")}function Dh(e,t){if(e!=null&&!e)return"";const r=xf(ln.Node),n=t.added?Qu.Added:t.removed?Qu.Removed:e==null?"":" ",o=t.added?Wn.Green:t.removed?Wn.Red:Wn.Reset;return[r?o:"",n,e??t.value,Wn.Reset].join("")}function ze(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function k2(e){return ze(e).filter(t=>isNaN(Number(t)))}function _r(e){return k2(e).map(r=>e[r])}const D2=[".",":",";",",","?","!"],x2=new RegExp(`[${D2.join("")}]+$`);function xh(e){return e.replace(x2,"")}function St(e){return e==null||e===""?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):y(e)}function fi(...e){const t=e.map(i=>St(i)).filter(i=>!!xh(i)),r=t[t.length-1]?.endsWith("."),n=t.map(i=>xh(St(i)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function rt(e){return e instanceof Error?e:new Error(St(e))}function Wa(e,t){const r=rt(e),n=fi(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var F;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(F||(F={}));var U;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(U||(U={}));U.ClientError,U.ServerError;F.Continue+"",U.Information,F.SwitchingProtocols+"",U.Information,F.Processing+"",U.Information,F.EarlyHints+"",U.Information,F.Ok+"",U.Success,F.Created+"",U.Success,F.Accepted+"",U.Success,F.NonAuthoritativeInformation+"",U.Success,F.NoContent+"",U.Success,F.ResetContent+"",U.Success,F.PartialContent+"",U.Success,F.MultiStatus+"",U.Success,F.AlreadyReported+"",U.Success,F.ImUsed+"",U.Success,F.MultipleChoices+"",U.Redirect,F.MovedPermanently+"",U.Redirect,F.Found+"",U.Redirect,F.SeeOther+"",U.Redirect,F.NotModified+"",U.Redirect,F.UseProxy+"",U.Redirect,F.Unused+"",U.Redirect,F.TemporaryRedirect+"",U.Redirect,F.PermanentRedirect+"",U.Redirect,F.BadRequest+"",U.ClientError,F.Unauthorized+"",U.ClientError,F.PaymentRequired+"",U.ClientError,F.Forbidden+"",U.ClientError,F.NotFound+"",U.ClientError,F.MethodNotAllowed+"",U.ClientError,F.NotAcceptable+"",U.ClientError,F.ProxyAuthenticationRequired+"",U.ClientError,F.RequestTimeout+"",U.ClientError,F.Conflict+"",U.ClientError,F.Gone+"",U.ClientError,F.LengthRequired+"",U.ClientError,F.PreconditionFailed+"",U.ClientError,F.PayloadTooLarge+"",U.ClientError,F.UriTooLong+"",U.ClientError,F.UnsupportedMediaType+"",U.ClientError,F.RangeNotSatisfiable+"",U.ClientError,F.ExpectationFailed+"",U.ClientError,F.ImATeapot+"",U.ClientError,F.MisdirectedRequest+"",U.ClientError,F.UnprocessableContent+"",U.ClientError,F.Locked+"",U.ClientError,F.FailedDependency+"",U.ClientError,F.TooEarly+"",U.ClientError,F.UpgradeRequired+"",U.ClientError,F.PreconditionRequired+"",U.ClientError,F.TooManyRequests+"",U.ClientError,F.RequestHeaderFieldsTooLarge+"",U.ClientError,F.UnavailableForLegalReasons+"",U.ClientError,F.InternalServerError+"",U.ServerError,F.NotImplemented+"",U.ServerError,F.BadGateway+"",U.ServerError,F.ServiceUnavailable+"",U.ServerError,F.GatewayTimeout+"",U.ServerError,F.HttpVersionNotSupported+"",U.ServerError,F.VariantAlsoNegotiates+"",U.ServerError,F.InsufficientStorage+"",U.ServerError,F.LoopDetected+"",U.ServerError,F.NotExtended+"",U.ServerError,F.NetworkAuthenticationRequired+"",U.ServerError;const Uu={[U.Information]:[F.Continue,F.SwitchingProtocols,F.Processing,F.EarlyHints],[U.Success]:[F.Ok,F.Created,F.Accepted,F.NonAuthoritativeInformation,F.NoContent,F.ResetContent,F.PartialContent,F.MultiStatus,F.AlreadyReported,F.ImUsed],[U.Redirect]:[F.MultipleChoices,F.MovedPermanently,F.Found,F.SeeOther,F.NotModified,F.UseProxy,F.Unused,F.TemporaryRedirect,F.PermanentRedirect],[U.ClientError]:[F.BadRequest,F.Unauthorized,F.PaymentRequired,F.Forbidden,F.NotFound,F.MethodNotAllowed,F.NotAcceptable,F.ProxyAuthenticationRequired,F.RequestTimeout,F.Conflict,F.Gone,F.LengthRequired,F.PreconditionFailed,F.PayloadTooLarge,F.UriTooLong,F.UnsupportedMediaType,F.RangeNotSatisfiable,F.ExpectationFailed,F.ImATeapot,F.MisdirectedRequest,F.UnprocessableContent,F.Locked,F.FailedDependency,F.TooEarly,F.UpgradeRequired,F.PreconditionRequired,F.TooManyRequests,F.RequestHeaderFieldsTooLarge,F.UnavailableForLegalReasons],[U.ServerError]:[F.InternalServerError,F.NotImplemented,F.BadGateway,F.ServiceUnavailable,F.GatewayTimeout,F.HttpVersionNotSupported,F.VariantAlsoNegotiates,F.InsufficientStorage,F.LoopDetected,F.NotExtended,F.NetworkAuthenticationRequired]};function Af({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class el{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(rt(n))}})}}class mi extends Error{}class A2 extends mi{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class E2 extends mi{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class C2 extends mi{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Ui extends mi{}class Wp extends mi{constructor(t){super(`Invalid unit ${t}`)}}class Vt extends mi{}class uo extends mi{constructor(){super("Zone is an abstract class")}}const L="numeric",cn="short",Ar="long",tl={year:L,month:L,day:L},Kp={year:L,month:cn,day:L},F2={year:L,month:cn,day:L,weekday:cn},Gp={year:L,month:Ar,day:L},Zp={year:L,month:Ar,day:L,weekday:Ar},Hp={hour:L,minute:L},Jp={hour:L,minute:L,second:L},Yp={hour:L,minute:L,second:L,timeZoneName:cn},Xp={hour:L,minute:L,second:L,timeZoneName:Ar},Qp={hour:L,minute:L,hourCycle:"h23"},ey={hour:L,minute:L,second:L,hourCycle:"h23"},ty={hour:L,minute:L,second:L,hourCycle:"h23",timeZoneName:cn},ry={hour:L,minute:L,second:L,hourCycle:"h23",timeZoneName:Ar},ny={year:L,month:L,day:L,hour:L,minute:L},oy={year:L,month:L,day:L,hour:L,minute:L,second:L},iy={year:L,month:cn,day:L,hour:L,minute:L},sy={year:L,month:cn,day:L,hour:L,minute:L,second:L},S2={year:L,month:cn,day:L,weekday:cn,hour:L,minute:L},ay={year:L,month:Ar,day:L,hour:L,minute:L,timeZoneName:cn},uy={year:L,month:Ar,day:L,hour:L,minute:L,second:L,timeZoneName:cn},ly={year:L,month:Ar,day:L,weekday:Ar,hour:L,minute:L,timeZoneName:Ar},cy={year:L,month:Ar,day:L,weekday:Ar,hour:L,minute:L,second:L,timeZoneName:Ar};class Ka{get type(){throw new uo}get name(){throw new uo}get ianaName(){return this.name}get isUniversal(){throw new uo}offsetName(t,r){throw new uo}formatOffset(t,r){throw new uo}offset(t){throw new uo}equals(t){throw new uo}get isValid(){throw new uo}}let Dc=null;class Tl extends Ka{static get instance(){return Dc===null&&(Dc=new Tl),Dc}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return $y(t,r,n)}formatOffset(t,r){return fa(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Ed=new Map;function T2(e){let t=Ed.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Ed.set(e,t)),t}const M2={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function P2(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,s,a,u,l,c]=n;return[s,o,i,a,u,l,c]}function N2(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:s}=r[o],a=M2[i];i==="era"?n[a]=s:J(a)||(n[a]=parseInt(s,10))}return n}const xc=new Map;class Yn extends Ka{static create(t){let r=xc.get(t);return r===void 0&&xc.set(t,r=new Yn(t)),r}static resetCache(){xc.clear(),Ed.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Yn.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return $y(t,r,n,this.name)}formatOffset(t,r){return fa(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=T2(this.name);let[o,i,s,a,u,l,c]=n.formatToParts?N2(n,r):P2(n,r);a==="BC"&&(o=-Math.abs(o)+1);const f=Pl({year:o,month:i,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let m=+r;const v=m%1e3;return m-=v>=0?v:1e3+v,(f-m)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Ah={};function I2(e,t={}){const r=JSON.stringify([e,t]);let n=Ah[r];return n||(n=new Intl.ListFormat(e,t),Ah[r]=n),n}const Cd=new Map;function Fd(e,t={}){const r=JSON.stringify([e,t]);let n=Cd.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),Cd.set(r,n)),n}const Sd=new Map;function O2(e,t={}){const r=JSON.stringify([e,t]);let n=Sd.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),Sd.set(r,n)),n}const Td=new Map;function B2(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=Td.get(o);return i===void 0&&(i=new Intl.RelativeTimeFormat(e,t),Td.set(o,i)),i}let ta=null;function R2(){return ta||(ta=new Intl.DateTimeFormat().resolvedOptions().locale,ta)}const Md=new Map;function dy(e){let t=Md.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Md.set(e,t)),t}const Pd=new Map;function L2(e){let t=Pd.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...fy,...t}),Pd.set(e,t)}return t}function j2(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=Fd(e).resolvedOptions(),o=e}catch{const u=e.substring(0,r);n=Fd(u).resolvedOptions(),o=u}const{numberingSystem:i,calendar:s}=n;return[o,i,s]}}function U2(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function _2(e){const t=[];for(let r=1;r<=12;r++){const n=Y.utc(2009,r,1);t.push(e(n))}return t}function V2(e){const t=[];for(let r=1;r<=7;r++){const n=Y.utc(2016,11,13+r);t.push(e(n))}return t}function bu(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function z2(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||dy(e.locale).numberingSystem==="latn"}class q2{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=O2(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Tf(t,3);return dt(r,this.padTo)}}}class W2{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Yn.create(a).valid?(o=a,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=Fd(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class K2{constructor(t,r,n){this.opts={style:"long",...n},!r&&vy()&&(this.rtf=B2(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):h$(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const fy={firstDay:1,minimalDays:4,weekend:[6,7]};class Ae{static fromOpts(t){return Ae.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,i=!1){const s=t||Ge.defaultLocale,a=s||(i?"en-US":R2()),u=r||Ge.defaultNumberingSystem,l=n||Ge.defaultOutputCalendar,c=Id(o)||Ge.defaultWeekSettings;return new Ae(a,u,l,c,s)}static resetCache(){ta=null,Cd.clear(),Sd.clear(),Td.clear(),Md.clear(),Pd.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return Ae.create(t,r,n,o)}constructor(t,r,n,o,i){const[s,a,u]=j2(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=o,this.intl=U2(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=z2(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Ae.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Id(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return bu(this,t,xy,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const o=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";if(!this.monthsCache[i][t]){const s=n?a=>this.dtFormatter(a,o).format():a=>this.extract(a,o,"month");this.monthsCache[i][t]=_2(s)}return this.monthsCache[i][t]})}weekdays(t,r=!1){return bu(this,t,Cy,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=V2(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return bu(this,void 0,()=>Fy,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[Y.utc(2016,11,13,9),Y.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return bu(this,t,Sy,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[Y.utc(-40,1,1),Y.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),s=i.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new q2(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new W2(t,this.intl,r)}relFormatter(t={}){return new K2(this.intl,this.isEnglish(),t)}listFormatter(t={}){return I2(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||dy(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:wy()?L2(this.locale):fy}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Ac=null;class rr extends Ka{static get utcInstance(){return Ac===null&&(Ac=new rr(0)),Ac}static instance(t){return t===0?rr.utcInstance:new rr(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new rr(Nl(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${fa(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${fa(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return fa(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class G2 extends Ka{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function go(e,t){if(J(e)||e===null)return t;if(e instanceof Ka)return e;if(Q2(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Tl.instance:r==="utc"||r==="gmt"?rr.utcInstance:rr.parseSpecifier(r)||Yn.create(e)}else return vo(e)?rr.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new G2(e)}const Ef={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Eh={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Z2=Ef.hanidec.replace(/[\[|\]]/g,"").split("");function H2(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Ef.hanidec)!==-1)t+=Z2.indexOf(e[r]);else for(const o in Eh){const[i,s]=Eh[o];n>=i&&n<=s&&(t+=n-i)}}return parseInt(t,10)}else return t}const Nd=new Map;function J2(){Nd.clear()}function rn({numberingSystem:e},t=""){const r=e||"latn";let n=Nd.get(r);n===void 0&&(n=new Map,Nd.set(r,n));let o=n.get(t);return o===void 0&&(o=new RegExp(`${Ef[r]}${t}`),n.set(t,o)),o}let Ch=()=>Date.now(),Fh="system",Sh=null,Th=null,Mh=null,Ph=60,Nh,Ih=null;class Ge{static get now(){return Ch}static set now(t){Ch=t}static set defaultZone(t){Fh=t}static get defaultZone(){return go(Fh,Tl.instance)}static get defaultLocale(){return Sh}static set defaultLocale(t){Sh=t}static get defaultNumberingSystem(){return Th}static set defaultNumberingSystem(t){Th=t}static get defaultOutputCalendar(){return Mh}static set defaultOutputCalendar(t){Mh=t}static get defaultWeekSettings(){return Ih}static set defaultWeekSettings(t){Ih=Id(t)}static get twoDigitCutoffYear(){return Ph}static set twoDigitCutoffYear(t){Ph=t%100}static get throwOnInvalid(){return Nh}static set throwOnInvalid(t){Nh=t}static resetCaches(){Ae.resetCache(),Yn.resetCache(),Y.resetCache(),J2()}}class sn{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const my=[0,31,59,90,120,151,181,212,243,273,304,334],hy=[0,31,60,91,121,152,182,213,244,274,305,335];function qr(e,t){return new sn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Cf(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function gy(e,t,r){return r+(Ga(e)?hy:my)[t-1]}function py(e,t){const r=Ga(e)?hy:my,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function Ff(e,t){return(e-t+7)%7+1}function rl(e,t=4,r=1){const{year:n,month:o,day:i}=e,s=gy(n,o,i),a=Ff(Cf(n,o,i),r);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=n-1,u=xa(l,t,r)):u>xa(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...Il(e)}}function Oh(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:i}=e,s=Ff(Cf(n,1,t),r),a=Zi(n);let u=o*7+i-s-7+t,l;u<1?(l=n-1,u+=Zi(l)):u>a?(l=n+1,u-=Zi(n)):l=n;const{month:c,day:d}=py(l,u);return{year:l,month:c,day:d,...Il(e)}}function Ec(e){const{year:t,month:r,day:n}=e,o=gy(t,r,n);return{year:t,ordinal:o,...Il(e)}}function Bh(e){const{year:t,ordinal:r}=e,{month:n,day:o}=py(t,r);return{year:t,month:n,day:o,...Il(e)}}function Rh(e,t){if(!J(e.localWeekday)||!J(e.localWeekNumber)||!J(e.localWeekYear)){if(!J(e.weekday)||!J(e.weekNumber)||!J(e.weekYear))throw new Ui("Cannot mix locale-based week fields with ISO-based week fields");return J(e.localWeekday)||(e.weekday=e.localWeekday),J(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),J(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Y2(e,t=4,r=1){const n=Ml(e.weekYear),o=Wr(e.weekNumber,1,xa(e.weekYear,t,r)),i=Wr(e.weekday,1,7);return n?o?i?!1:qr("weekday",e.weekday):qr("week",e.weekNumber):qr("weekYear",e.weekYear)}function X2(e){const t=Ml(e.year),r=Wr(e.ordinal,1,Zi(e.year));return t?r?!1:qr("ordinal",e.ordinal):qr("year",e.year)}function yy(e){const t=Ml(e.year),r=Wr(e.month,1,12),n=Wr(e.day,1,nl(e.year,e.month));return t?r?n?!1:qr("day",e.day):qr("month",e.month):qr("year",e.year)}function by(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=Wr(t,0,23)||t===24&&r===0&&n===0&&o===0,s=Wr(r,0,59),a=Wr(n,0,59),u=Wr(o,0,999);return i?s?a?u?!1:qr("millisecond",o):qr("second",n):qr("minute",r):qr("hour",t)}function J(e){return typeof e>"u"}function vo(e){return typeof e=="number"}function Ml(e){return typeof e=="number"&&e%1===0}function Q2(e){return typeof e=="string"}function e$(e){return Object.prototype.toString.call(e)==="[object Date]"}function vy(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function wy(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function t$(e){return Array.isArray(e)?e:[e]}function Lh(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function r$(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function os(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Id(e){if(e==null)return null;if(typeof e!="object")throw new Vt("Week settings must be an object");if(!Wr(e.firstDay,1,7)||!Wr(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Wr(t,1,7)))throw new Vt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Wr(e,t,r){return Ml(e)&&e>=t&&e<=r}function n$(e,t){return e-t*Math.floor(e/t)}function dt(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function fo(e){if(!(J(e)||e===null||e===""))return parseInt(e,10)}function Uo(e){if(!(J(e)||e===null||e===""))return parseFloat(e)}function Sf(e){if(!(J(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Tf(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function Ga(e){return e%4===0&&(e%100!==0||e%400===0)}function Zi(e){return Ga(e)?366:365}function nl(e,t){const r=n$(t-1,12)+1,n=e+(t-r)/12;return r===2?Ga(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Pl(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function jh(e,t,r){return-Ff(Cf(e,1,t),r)+t-1}function xa(e,t=4,r=1){const n=jh(e,t,r),o=jh(e+1,t,r);return(Zi(e)-n+o)/7}function Od(e){return e>99?e:e>Ge.twoDigitCutoffYear?1900+e:2e3+e}function $y(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const s={timeZoneName:t,...i},a=new Intl.DateTimeFormat(r,s).formatToParts(o).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Nl(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function ky(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new Vt(`Invalid unit value ${e}`);return t}function ol(e,t){const r={};for(const n in e)if(os(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=ky(o)}return r}function fa(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${dt(r,2)}:${dt(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${dt(r,2)}${dt(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Il(e){return r$(e,["hour","minute","second","millisecond"])}const o$=["January","February","March","April","May","June","July","August","September","October","November","December"],Dy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i$=["J","F","M","A","M","J","J","A","S","O","N","D"];function xy(e){switch(e){case"narrow":return[...i$];case"short":return[...Dy];case"long":return[...o$];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Ay=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ey=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],s$=["M","T","W","T","F","S","S"];function Cy(e){switch(e){case"narrow":return[...s$];case"short":return[...Ey];case"long":return[...Ay];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Fy=["AM","PM"],a$=["Before Christ","Anno Domini"],u$=["BC","AD"],l$=["B","A"];function Sy(e){switch(e){case"narrow":return[...l$];case"short":return[...u$];case"long":return[...a$];default:return null}}function c$(e){return Fy[e.hour<12?0:1]}function d$(e,t){return Cy(t)[e.weekday-1]}function f$(e,t){return xy(t)[e.month-1]}function m$(e,t){return Sy(t)[e.year<0?0:1]}function h$(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${o[e][0]}`;case-1:return d?"yesterday":`last ${o[e][0]}`;case 0:return d?"today":`this ${o[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=o[e],c=n?u?l[1]:l[2]||l[1]:u?o[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function Uh(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const g$={D:tl,DD:Kp,DDD:Gp,DDDD:Zp,t:Hp,tt:Jp,ttt:Yp,tttt:Xp,T:Qp,TT:ey,TTT:ty,TTTT:ry,f:ny,ff:iy,fff:ay,ffff:ly,F:oy,FF:sy,FFF:uy,FFFF:cy};class qt{static create(t,r={}){return new qt(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||o)&&i.push({literal:o||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",o=!o):o||a===r?n+=a:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return g$[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return dt(t,r);const o={...this.opts};return r>0&&(o.padTo=r),n&&(o.signDisplay=n),this.loc.numberFormatter(o).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(m,v)=>this.loc.extract(t,m,v),s=m=>t.isOffsetFixed&&t.offset===0&&m.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,m.format):"",a=()=>n?c$(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(m,v)=>n?f$(t,m):i(v?{month:m}:{month:m,day:"numeric"},"month"),l=(m,v)=>n?d$(t,m):i(v?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),c=m=>{const v=qt.macroTokenToFormatOpts(m);return v?this.formatWithSystemDefault(t,v):m},d=m=>n?m$(t,m):i({era:m},"era"),f=m=>{switch(m){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(m)}};return Uh(qt.parseFormat(r),f)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,o=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},i=(c,d)=>f=>{const m=o(f);if(m){const v=d.isNegativeDuration&&m!==d.largestUnit?n:1;let $;return this.opts.signMode==="negativeLargestOnly"&&m!==d.largestUnit?$="never":this.opts.signMode==="all"?$="always":$="auto",this.num(c.get(m)*v,f.length,$)}else return f},s=qt.parseFormat(r),a=s.reduce((c,{literal:d,val:f})=>d?c:c.concat(f),[]),u=t.shiftTo(...a.map(o).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return Uh(s,i(u,l))}}const Ty=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function xs(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function As(...e){return t=>e.reduce(([r,n,o],i)=>{const[s,a,u]=i(t,o);return[{...r,...s},a||n,u]},[{},null,1]).slice(0,2)}function Es(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function My(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=fo(t[r+o]);return[n,null,r+o]}}const Py=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,p$=`(?:${Py.source}?(?:\\[(${Ty.source})\\])?)?`,Mf=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Ny=RegExp(`${Mf.source}${p$}`),Pf=RegExp(`(?:[Tt]${Ny.source})?`),y$=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,b$=/(\d{4})-?W(\d\d)(?:-?(\d))?/,v$=/(\d{4})-?(\d{3})/,w$=My("weekYear","weekNumber","weekDay"),$$=My("year","ordinal"),k$=/(\d{4})-(\d\d)-(\d\d)/,Iy=RegExp(`${Mf.source} ?(?:${Py.source}|(${Ty.source}))?`),D$=RegExp(`(?: ${Iy.source})?`);function Hi(e,t,r){const n=e[t];return J(n)?r:fo(n)}function x$(e,t){return[{year:Hi(e,t),month:Hi(e,t+1,1),day:Hi(e,t+2,1)},null,t+3]}function Cs(e,t){return[{hours:Hi(e,t,0),minutes:Hi(e,t+1,0),seconds:Hi(e,t+2,0),milliseconds:Sf(e[t+3])},null,t+4]}function Za(e,t){const r=!e[t]&&!e[t+1],n=Nl(e[t+1],e[t+2]),o=r?null:rr.instance(n);return[{},o,t+3]}function Ha(e,t){const r=e[t]?Yn.create(e[t]):null;return[{},r,t+1]}const A$=RegExp(`^T?${Mf.source}$`),E$=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function C$(e){const[t,r,n,o,i,s,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",f=(m,v=!1)=>m!==void 0&&(v||m&&c)?-m:m;return[{years:f(Uo(r)),months:f(Uo(n)),weeks:f(Uo(o)),days:f(Uo(i)),hours:f(Uo(s)),minutes:f(Uo(a)),seconds:f(Uo(u),u==="-0"),milliseconds:f(Sf(l),d)}]}const F$={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Nf(e,t,r,n,o,i,s){const a={year:t.length===2?Od(fo(t)):fo(t),month:Dy.indexOf(r)+1,day:fo(n),hour:fo(o),minute:fo(i)};return s&&(a.second=fo(s)),e&&(a.weekday=e.length>3?Ay.indexOf(e)+1:Ey.indexOf(e)+1),a}const S$=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function T$(e){const[,t,r,n,o,i,s,a,u,l,c,d]=e,f=Nf(t,o,n,r,i,s,a);let m;return u?m=F$[u]:l?m=0:m=Nl(c,d),[f,new rr(m)]}function M$(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const P$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,N$=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,I$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function _h(e){const[,t,r,n,o,i,s,a]=e;return[Nf(t,o,n,r,i,s,a),rr.utcInstance]}function O$(e){const[,t,r,n,o,i,s,a]=e;return[Nf(t,a,r,n,o,i,s),rr.utcInstance]}const B$=xs(y$,Pf),R$=xs(b$,Pf),L$=xs(v$,Pf),j$=xs(Ny),Oy=As(x$,Cs,Za,Ha),U$=As(w$,Cs,Za,Ha),_$=As($$,Cs,Za,Ha),V$=As(Cs,Za,Ha);function z$(e){return Es(e,[B$,Oy],[R$,U$],[L$,_$],[j$,V$])}function q$(e){return Es(M$(e),[S$,T$])}function W$(e){return Es(e,[P$,_h],[N$,_h],[I$,O$])}function K$(e){return Es(e,[E$,C$])}const G$=As(Cs);function Z$(e){return Es(e,[A$,G$])}const H$=xs(k$,D$),J$=xs(Iy),Y$=As(Cs,Za,Ha);function X$(e){return Es(e,[H$,Oy],[J$,Y$])}const Vh="Invalid Duration",By={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Q$={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...By},Lr=146097/400,Si=146097/4800,e5={years:{quarters:4,months:12,weeks:Lr/7,days:Lr,hours:Lr*24,minutes:Lr*24*60,seconds:Lr*24*60*60,milliseconds:Lr*24*60*60*1e3},quarters:{months:3,weeks:Lr/28,days:Lr/4,hours:Lr*24/4,minutes:Lr*24*60/4,seconds:Lr*24*60*60/4,milliseconds:Lr*24*60*60*1e3/4},months:{weeks:Si/7,days:Si,hours:Si*24,minutes:Si*24*60,seconds:Si*24*60*60,milliseconds:Si*24*60*60*1e3},...By},Jo=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],t5=Jo.slice(0).reverse();function Nn(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new fe(n)}function Ry(e,t){let r=t.milliseconds??0;for(const n of t5.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function zh(e,t){const r=Ry(e,t)<0?-1:1;Jo.reduceRight((n,o)=>{if(J(t[o]))return n;if(n){const i=t[n]*r,s=e[o][n],a=Math.floor(i/s);t[o]+=a*r,t[n]-=a*s*r}return o},null),Jo.reduce((n,o)=>{if(J(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function qh(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class fe{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?e5:Q$;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Ae.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return fe.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Vt(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new fe({values:ol(t,fe.normalizeUnit),loc:Ae.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(vo(t))return fe.fromMillis(t);if(fe.isDuration(t))return t;if(typeof t=="object")return fe.fromObject(t);throw new Vt(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=K$(t);return n?fe.fromObject(n,r):fe.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Z$(t);return n?fe.fromObject(n,r):fe.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Vt("need to specify a reason the Duration is invalid");const n=t instanceof sn?t:new sn(t,r);if(Ge.throwOnInvalid)throw new C2(n);return new fe({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new Wp(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?qt.create(this.loc,n).formatDurationFromString(this,t):Vh}toHuman(t={}){if(!this.isValid)return Vh;const r=t.showZeros!==!1,n=Jo.map(o=>{const i=this.values[o];return J(i)||i===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:o.slice(0,-1)}).format(i)}).filter(o=>o);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Tf(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},Y.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Ry(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=fe.fromDurationLike(t),n={};for(const o of Jo)(os(r.values,o)||os(this.values,o))&&(n[o]=r.get(o)+this.get(o));return Nn(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=fe.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=ky(t(this.values[n],n));return Nn(this,{values:r},!0)}get(t){return this[fe.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...ol(t,fe.normalizeUnit)};return Nn(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return Nn(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return zh(this.matrix,t),Nn(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=qh(this.normalize().shiftToAll().toObject());return Nn(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>fe.normalizeUnit(s));const r={},n={},o=this.toObject();let i;for(const s of Jo)if(t.indexOf(s)>=0){i=s;let a=0;for(const l in n)a+=this.matrix[l][s]*n[l],n[l]=0;vo(o[s])&&(a+=o[s]);const u=Math.trunc(a);r[s]=u,n[s]=(a*1e3-u*1e3)/1e3}else vo(o[s])&&(n[s]=o[s]);for(const s in n)n[s]!==0&&(r[i]+=s===i?n[s]:n[s]/this.matrix[i][s]);return zh(this.matrix,r),Nn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return Nn(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=qh(this.values);return Nn(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of Jo)if(!r(this.values[n],t.values[n]))return!1;return!0}}const Ti="Invalid Interval";function r5(e,t){return!e||!e.isValid?et.invalid("missing or invalid start"):!t||!t.isValid?et.invalid("missing or invalid end"):t<e?et.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class et{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Vt("need to specify a reason the Interval is invalid");const n=t instanceof sn?t:new sn(t,r);if(Ge.throwOnInvalid)throw new E2(n);return new et({invalid:n})}static fromDateTimes(t,r){const n=Ws(t),o=Ws(r),i=r5(n,o);return i??new et({start:n,end:o})}static after(t,r){const n=fe.fromDurationLike(r),o=Ws(t);return et.fromDateTimes(o,o.plus(n))}static before(t,r){const n=fe.fromDurationLike(r),o=Ws(t);return et.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,s;try{i=Y.fromISO(n,r),s=i.isValid}catch{s=!1}let a,u;try{a=Y.fromISO(o,r),u=a.isValid}catch{u=!1}if(s&&u)return et.fromDateTimes(i,a);if(s){const l=fe.fromISO(o,r);if(l.isValid)return et.after(i,l)}else if(u){const l=fe.fromISO(n,r);if(l.isValid)return et.before(a,l)}}return et.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r?.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?et.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Ws).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:o}=this,i=0;for(;o<this.e;){const s=r[i]||this.e,a=+s>+this.e?this.e:s;n.push(et.fromDateTimes(o,a)),o=a,i+=1}return n}splitBy(t){const r=fe.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*o));i=+a>+this.e?this.e:a,s.push(et.fromDateTimes(n,i)),n=i,o+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:et.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return et.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],s)=>i?i.overlaps(s)||i.abutsStart(s)?[o,i.union(s)]:[o.concat([i]),s]:[o,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...i),a=s.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&o.push(et.fromDateTimes(r,u.time)),r=null);return et.merge(o)}difference(...t){return et.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ti}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=tl,r={}){return this.isValid?qt.create(this.s.loc.clone(r),t).formatInterval(this):Ti}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Ti}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ti}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Ti}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:Ti}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):fe.invalid(this.invalidReason)}mapEndpoints(t){return et.fromDateTimes(t(this.s),t(this.e))}}class vu{static hasDST(t=Ge.defaultZone){const r=Y.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Yn.isValidZone(t)}static normalizeZone(t){return go(t,Ge.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Ae.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Ae.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Ae.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Ae.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Ae.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Ae.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Ae.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Ae.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Ae.create(r,null,"gregory").eras(t)}static features(){return{relative:vy(),localeWeek:wy()}}}function Wh(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(fe.fromMillis(n).as("days"))}function n5(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Wh(u,l);return(c-c%7)/7}],["days",Wh]],o={},i=e;let s,a;for(const[u,l]of n)r.indexOf(u)>=0&&(s=u,o[u]=l(e,t),a=i.plus(o),a>t?(o[u]--,e=i.plus(o),e>t&&(a=e,o[u]--,e=i.plus(o))):e=a);return[e,o,a,s]}function o5(e,t,r,n){let[o,i,s,a]=n5(e,t,r);const u=t-o,l=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(s<t&&(s=o.plus({[a]:1})),s!==o&&(i[a]=(i[a]||0)+u/(s-o)));const c=fe.fromObject(i,n);return l.length>0?fe.fromMillis(u,n).shiftTo(...l).plus(c):c}const i5="missing Intl.DateTimeFormat.formatToParts support";function we(e,t=r=>r){return{regex:e,deser:([r])=>t(H2(r))}}const s5=" ",Ly=`[ ${s5}]`,jy=new RegExp(Ly,"g");function a5(e){return e.replace(/\./g,"\\.?").replace(jy,Ly)}function Kh(e){return e.replace(/\./g,"").replace(jy," ").toLowerCase()}function nn(e,t){return e===null?null:{regex:RegExp(e.map(a5).join("|")),deser:([r])=>e.findIndex(n=>Kh(r)===Kh(n))+t}}function Gh(e,t){return{regex:e,deser:([,r,n])=>Nl(r,n),groups:t}}function wu(e){return{regex:e,deser:([t])=>t}}function u5(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function l5(e,t){const r=rn(t),n=rn(t,"{2}"),o=rn(t,"{3}"),i=rn(t,"{4}"),s=rn(t,"{6}"),a=rn(t,"{1,2}"),u=rn(t,"{1,3}"),l=rn(t,"{1,6}"),c=rn(t,"{1,9}"),d=rn(t,"{2,4}"),f=rn(t,"{4,6}"),m=k=>({regex:RegExp(u5(k.val)),deser:([D])=>D,literal:!0}),$=(k=>{if(e.literal)return m(k);switch(k.val){case"G":return nn(t.eras("short"),0);case"GG":return nn(t.eras("long"),0);case"y":return we(l);case"yy":return we(d,Od);case"yyyy":return we(i);case"yyyyy":return we(f);case"yyyyyy":return we(s);case"M":return we(a);case"MM":return we(n);case"MMM":return nn(t.months("short",!0),1);case"MMMM":return nn(t.months("long",!0),1);case"L":return we(a);case"LL":return we(n);case"LLL":return nn(t.months("short",!1),1);case"LLLL":return nn(t.months("long",!1),1);case"d":return we(a);case"dd":return we(n);case"o":return we(u);case"ooo":return we(o);case"HH":return we(n);case"H":return we(a);case"hh":return we(n);case"h":return we(a);case"mm":return we(n);case"m":return we(a);case"q":return we(a);case"qq":return we(n);case"s":return we(a);case"ss":return we(n);case"S":return we(u);case"SSS":return we(o);case"u":return wu(c);case"uu":return wu(a);case"uuu":return we(r);case"a":return nn(t.meridiems(),0);case"kkkk":return we(i);case"kk":return we(d,Od);case"W":return we(a);case"WW":return we(n);case"E":case"c":return we(r);case"EEE":return nn(t.weekdays("short",!1),1);case"EEEE":return nn(t.weekdays("long",!1),1);case"ccc":return nn(t.weekdays("short",!0),1);case"cccc":return nn(t.weekdays("long",!0),1);case"Z":case"ZZ":return Gh(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return Gh(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return wu(/[a-z_+-/]{1,256}?/i);case" ":return wu(/[^\S\n\r]/);default:return m(k)}})(e)||{invalidReason:i5};return $.token=e,$}const c5={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function d5(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const u=/^\s+$/.test(o);return{literal:!u,val:u?" ":o}}const i=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=c5[s];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function f5(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function m5(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const s in r)if(os(r,s)){const a=r[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(o[a.token.val[0]]=a.deser(n.slice(i,i+u))),i+=u}return[n,o]}else return[n,{}]}function h5(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return J(e.z)||(r=Yn.create(e.z)),J(e.Z)||(r||(r=new rr(e.Z)),n=e.Z),J(e.q)||(e.M=(e.q-1)*3+1),J(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),J(e.u)||(e.S=Sf(e.u)),[Object.keys(e).reduce((i,s)=>{const a=t(s);return a&&(i[a]=e[s]),i},{}),r,n]}let Cc=null;function g5(){return Cc||(Cc=Y.fromMillis(1555555555555)),Cc}function p5(e,t){if(e.literal)return e;const r=qt.macroTokenToFormatOpts(e.val),n=zy(r,t);return n==null||n.includes(void 0)?e:n}function Uy(e,t){return Array.prototype.concat(...e.map(r=>p5(r,t)))}class _y{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Uy(qt.parseFormat(r),t),this.units=this.tokens.map(n=>l5(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,o]=f5(this.units);this.regex=RegExp(n,"i"),this.handlers=o}}explainFromTokens(t){if(this.isValid){const[r,n]=m5(t,this.regex,this.handlers),[o,i,s]=n?h5(n):[null,null,void 0];if(os(n,"a")&&os(n,"H"))throw new Ui("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:o,zone:i,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Vy(e,t,r){return new _y(e,r).explainFromTokens(t)}function y5(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:s}=Vy(e,t,r);return[n,o,i,s]}function zy(e,t){if(!e)return null;const n=qt.create(t,e).dtFormatter(g5()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(s=>d5(s,e,i))}const Fc="Invalid DateTime",Zh=864e13;function ra(e){return new sn("unsupported zone",`the zone "${e.name}" is not supported`)}function Sc(e){return e.weekData===null&&(e.weekData=rl(e.c)),e.weekData}function Tc(e){return e.localWeekData===null&&(e.localWeekData=rl(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function _o(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new Y({...r,...t,old:r})}function qy(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function $u(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function _u(e,t,r){return qy(Pl(e),t,r)}function Hh(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,nl(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=fe.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Pl(i);let[u,l]=qy(a,r,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function Mi(e,t,r,n,o,i){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=Y.fromObject(e,{...r,zone:u,specificOffset:i});return s?l:l.setZone(a)}else return Y.invalid(new sn("unparsable",`the input "${o}" can't be parsed as ${n}`))}function ku(e,t,r=!0){return e.isValid?qt.create(Ae.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Mc(e,t,r){const n=e.c.year>9999||e.c.year<0;let o="";if(n&&e.c.year>=0&&(o+="+"),o+=dt(e.c.year,n?6:4),r==="year")return o;if(t){if(o+="-",o+=dt(e.c.month),r==="month")return o;o+="-"}else if(o+=dt(e.c.month),r==="month")return o;return o+=dt(e.c.day),o}function Jh(e,t,r,n,o,i,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=dt(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=dt(e.c.minute),s==="minute")break;a&&(u+=":",u+=dt(e.c.second))}else{if(u+=dt(e.c.minute),s==="minute")break;a&&(u+=dt(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(u+=".",u+=dt(e.c.millisecond,3))}return o&&(e.isOffsetFixed&&e.offset===0&&!i?u+="Z":e.o<0?(u+="-",u+=dt(Math.trunc(-e.o/60)),u+=":",u+=dt(Math.trunc(-e.o%60))):(u+="+",u+=dt(Math.trunc(e.o/60)),u+=":",u+=dt(Math.trunc(e.o%60)))),i&&(u+="["+e.zone.ianaName+"]"),u}const Wy={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},b5={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},v5={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Vu=["year","month","day","hour","minute","second","millisecond"],w5=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],$5=["year","ordinal","hour","minute","second","millisecond"];function zu(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Wp(e);return t}function Yh(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return zu(e)}}function k5(e){if(na===void 0&&(na=Ge.now()),e.type!=="iana")return e.offset(na);const t=e.name;let r=Bd.get(t);return r===void 0&&(r=e.offset(na),Bd.set(t,r)),r}function Xh(e,t){const r=go(t.zone,Ge.defaultZone);if(!r.isValid)return Y.invalid(ra(r));const n=Ae.fromObject(t);let o,i;if(J(e.year))o=Ge.now();else{for(const u of Vu)J(e[u])&&(e[u]=Wy[u]);const s=yy(e)||by(e);if(s)return Y.invalid(s);const a=k5(r);[o,i]=_u(e,a,r)}return new Y({ts:o,zone:r,loc:n,o:i})}function Qh(e,t,r){const n=J(r.round)?!0:r.round,o=J(r.rounding)?"trunc":r.rounding,i=(a,u)=>(a=Tf(a,n||r.calendary?0:2,r.calendary?"round":o),t.loc.clone(r).relFormatter(r).format(a,u)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return i(s(r.unit),r.unit);for(const a of r.units){const u=s(a);if(Math.abs(u)>=1)return i(u,a)}return i(e>t?-0:0,r.units[r.units.length-1])}function e0(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let na;const Bd=new Map;class Y{constructor(t){const r=t.zone||Ge.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new sn("invalid input"):null)||(r.isValid?null:ra(r));this.ts=J(t.ts)?Ge.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const a=vo(t.o)&&!t.old?t.o:r.offset(this.ts);o=$u(this.ts,a),n=Number.isNaN(o.year)?new sn("invalid input"):null,o=n?null:o,i=n?null:a}this._zone=r,this.loc=t.loc||Ae.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new Y({})}static local(){const[t,r]=e0(arguments),[n,o,i,s,a,u,l]=r;return Xh({year:n,month:o,day:i,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=e0(arguments),[n,o,i,s,a,u,l]=r;return t.zone=rr.utcInstance,Xh({year:n,month:o,day:i,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=e$(t)?t.valueOf():NaN;if(Number.isNaN(n))return Y.invalid("invalid input");const o=go(r.zone,Ge.defaultZone);return o.isValid?new Y({ts:n,zone:o,loc:Ae.fromObject(r)}):Y.invalid(ra(o))}static fromMillis(t,r={}){if(vo(t))return t<-Zh||t>Zh?Y.invalid("Timestamp out of range"):new Y({ts:t,zone:go(r.zone,Ge.defaultZone),loc:Ae.fromObject(r)});throw new Vt(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(vo(t))return new Y({ts:t*1e3,zone:go(r.zone,Ge.defaultZone),loc:Ae.fromObject(r)});throw new Vt("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=go(r.zone,Ge.defaultZone);if(!n.isValid)return Y.invalid(ra(n));const o=Ae.fromObject(r),i=ol(t,Yh),{minDaysInFirstWeek:s,startOfWeek:a}=Rh(i,o),u=Ge.now(),l=J(r.specificOffset)?n.offset(u):r.specificOffset,c=!J(i.ordinal),d=!J(i.year),f=!J(i.month)||!J(i.day),m=d||f,v=i.weekYear||i.weekNumber;if((m||c)&&v)throw new Ui("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&c)throw new Ui("Can't mix ordinal dates with month/day");const $=v||i.weekday&&!m;let k,D,E=$u(u,l);$?(k=w5,D=b5,E=rl(E,s,a)):c?(k=$5,D=v5,E=Ec(E)):(k=Vu,D=Wy);let P=!1;for(const xt of k){const Pt=i[xt];J(Pt)?P?i[xt]=D[xt]:i[xt]=E[xt]:P=!0}const O=$?Y2(i,s,a):c?X2(i):yy(i),z=O||by(i);if(z)return Y.invalid(z);const ie=$?Oh(i,s,a):c?Bh(i):i,[Me,pe]=_u(ie,l,n),Ue=new Y({ts:Me,zone:n,o:pe,loc:o});return i.weekday&&m&&t.weekday!==Ue.weekday?Y.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${Ue.toISO()}`):Ue.isValid?Ue:Y.invalid(Ue.invalid)}static fromISO(t,r={}){const[n,o]=z$(t);return Mi(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=q$(t);return Mi(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=W$(t);return Mi(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(J(t)||J(r))throw new Vt("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,s=Ae.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[a,u,l,c]=y5(s,t,r);return c?Y.invalid(c):Mi(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return Y.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=X$(t);return Mi(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Vt("need to specify a reason the DateTime is invalid");const n=t instanceof sn?t:new sn(t,r);if(Ge.throwOnInvalid)throw new A2(n);return new Y({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=zy(t,Ae.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return Uy(qt.parseFormat(t),Ae.fromObject(r)).map(o=>o.val).join("")}static resetCache(){na=void 0,Bd.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Sc(this).weekYear:NaN}get weekNumber(){return this.isValid?Sc(this).weekNumber:NaN}get weekday(){return this.isValid?Sc(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Tc(this).weekday:NaN}get localWeekNumber(){return this.isValid?Tc(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Tc(this).weekYear:NaN}get ordinal(){return this.isValid?Ec(this.c).ordinal:NaN}get monthShort(){return this.isValid?vu.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?vu.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?vu.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?vu.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Pl(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),s=this.zone.offset(n-o*r),a=this.zone.offset(n-i*r);if(s===a)return[this];const u=n-s*r,l=n-a*r,c=$u(u,s),d=$u(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[_o(this,{ts:u}),_o(this,{ts:l})]:[this]}get isInLeapYear(){return Ga(this.year)}get daysInMonth(){return nl(this.year,this.month)}get daysInYear(){return this.isValid?Zi(this.year):NaN}get weeksInWeekYear(){return this.isValid?xa(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?xa(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=qt.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(rr.instance(t),r)}toLocal(){return this.setZone(Ge.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=go(t,Ge.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),s=this.toObject();[o]=_u(s,i,t)}return _o(this,{ts:o,zone:t})}else return Y.invalid(ra(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return _o(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=ol(t,Yh),{minDaysInFirstWeek:n,startOfWeek:o}=Rh(r,this.loc),i=!J(r.weekYear)||!J(r.weekNumber)||!J(r.weekday),s=!J(r.ordinal),a=!J(r.year),u=!J(r.month)||!J(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||s)&&c)throw new Ui("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new Ui("Can't mix ordinal dates with month/day");let d;i?d=Oh({...rl(this.c,n,o),...r},n,o):J(r.ordinal)?(d={...this.toObject(),...r},J(r.day)&&(d.day=Math.min(nl(d.year,d.month),d.day))):d=Bh({...Ec(this.c),...r});const[f,m]=_u(d,this.o,this.zone);return _o(this,{ts:f,o:m})}plus(t){if(!this.isValid)return this;const r=fe.fromDurationLike(t);return _o(this,Hh(this,r))}minus(t){if(!this.isValid)return this;const r=fe.fromDurationLike(t).negate();return _o(this,Hh(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=fe.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:s}=this;s<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?qt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Fc}toLocaleString(t=tl,r={}){return this.isValid?qt.create(this.loc.clone(r),t).formatDateTime(this):Fc}toLocaleParts(t={}){return this.isValid?qt.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=zu(s);const a=t==="extended";let u=Mc(this,a,s);return Vu.indexOf(s)>=3&&(u+="T"),u+=Jh(this,a,r,n,o,i,s),u}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?Mc(this,t==="extended",zu(r)):null}toISOWeekDate(){return ku(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=zu(a),(o&&Vu.indexOf(a)>=3?"T":"")+Jh(this,s==="extended",r,t,n,i,a)):null}toRFC2822(){return ku(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return ku(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Mc(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),ku(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Fc}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return fe.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=t$(r).map(fe.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=o5(a,u,i,o);return s?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(Y.now(),t,r)}until(t){return this.isValid?et.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=o&&o<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||Y.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),Qh(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?Qh(t.base||Y.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(Y.isDateTime))throw new Vt("min requires all arguments be DateTimes");return Lh(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(Y.isDateTime))throw new Vt("max requires all arguments be DateTimes");return Lh(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,s=Ae.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return Vy(s,t,r)}static fromStringExplain(t,r,n={}){return Y.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:o=null}=r,i=Ae.fromOpts({locale:n,numberingSystem:o,defaultToEN:!0});return new _y(i,t)}static fromFormatParser(t,r,n={}){if(J(t)||J(r))throw new Vt("fromFormatParser requires an input string and a format parser");const{locale:o=null,numberingSystem:i=null}=n,s=Ae.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});if(!s.equals(r.locale))throw new Vt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?Y.invalid(c):Mi(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return tl}static get DATE_MED(){return Kp}static get DATE_MED_WITH_WEEKDAY(){return F2}static get DATE_FULL(){return Gp}static get DATE_HUGE(){return Zp}static get TIME_SIMPLE(){return Hp}static get TIME_WITH_SECONDS(){return Jp}static get TIME_WITH_SHORT_OFFSET(){return Yp}static get TIME_WITH_LONG_OFFSET(){return Xp}static get TIME_24_SIMPLE(){return Qp}static get TIME_24_WITH_SECONDS(){return ey}static get TIME_24_WITH_SHORT_OFFSET(){return ty}static get TIME_24_WITH_LONG_OFFSET(){return ry}static get DATETIME_SHORT(){return ny}static get DATETIME_SHORT_WITH_SECONDS(){return oy}static get DATETIME_MED(){return iy}static get DATETIME_MED_WITH_SECONDS(){return sy}static get DATETIME_MED_WITH_WEEKDAY(){return S2}static get DATETIME_FULL(){return ay}static get DATETIME_FULL_WITH_SECONDS(){return uy}static get DATETIME_HUGE(){return ly}static get DATETIME_HUGE_WITH_SECONDS(){return cy}}function Ws(e){if(Y.isDateTime(e))return e;if(e&&e.valueOf&&vo(e.valueOf()))return Y.fromJSDate(e);if(e&&typeof e=="object")return Y.fromObject(e);throw new Vt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var Ee;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Ee||(Ee={}));const D5=[Ee.Milliseconds,Ee.Seconds,Ee.Minutes,Ee.Hours,Ee.Days,Ee.Weeks,Ee.Months,Ee.Years];Ee.Milliseconds+"",Ee.Seconds+"",Ee.Minutes+"",Ee.Hours+"",Ee.Days+"",Ee.Weeks+"",Ee.Months+"",Ee.Years+"";function x5(e){return D5.filter(t=>e[t])}function Rd(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function A5(e){return Rd(Math.max(e-.4,0),{decimalCount:0})}function t0(e){return e===0?0:Math.sign(e)}function is(e,t,r={}){const n={},o={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},i=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=x5(t).reverse();if(i||s)return a.forEach(c=>{n[c]=i?1/0:-1/0}),n;let u=fe.fromObject(e).as(Ee.Milliseconds);const l=t0(u);return a.forEach((c,d)=>{const f=d===a.length-1;if(c===Ee.Milliseconds)n.milliseconds=Rd(u,o);else{const m=fe.fromObject({milliseconds:u}).as(c),v=Math.sign(m),$=Math.abs(m),k=f?Rd($,o):Math.floor(o.decimalCount==null?$:A5($)),D=k===0?0:k*v;n[c]=D,u-=fe.fromObject({[c]:D}).as(Ee.Milliseconds),l!==t0(u)&&(u=0)}}),n}Intl.DateTimeFormat().resolvedOptions().locale;var G;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(G||(G={}));G.Year,G.Hour,G.Minute,G.Second,G.Millisecond;G.Month,G.Week,G.Day;G.Millisecond,G.Second,G.Minute,G.Hour,G.Day,G.Week,G.Month,G.Year;const r0={min:0,max:23},n0={min:0,max:59},o0={min:0,max:59},i0={min:0,max:999};var zt;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(zt||(zt={}));zt.Sunday+"",zt.Monday+"",zt.Tuesday+"",zt.Wednesday+"",zt.Thursday+"",zt.Friday+"",zt.Saturday+"";zt.Sunday,zt.Monday,zt.Tuesday,zt.Wednesday,zt.Thursday,zt.Friday,zt.Saturday;var cr;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(cr||(cr={}));cr.January,cr.February,cr.March,cr.April,cr.May,cr.June,cr.July,cr.August,cr.September,cr.October,cr.November,cr.December;const s0={min:1,max:12},a0={min:1,max:31};function oi(e){const t=new el,n=Object.values(e).some(o=>o===1/0||o===-1/0)?1/0:is(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function Ky(...e){const t=e.join(""),r=Lp(Array.from(t));return Array.from(r).join("")}function Gy(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Zy(e,t){const r=Ky([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Hy(e,r)}function Hy(e,t){const r=Ky(t);return typeof e=="string"?new RegExp(Gy(e),r):new RegExp(e.source,r)}function Jy(e,{caseSensitive:t}){const n="".replaceAll("i","");return Hy(e,n)}function If(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function Yy(e,t){return t?typeof t=="string"?!!new RegExp(Gy(t),"i").exec(e):!!Zy(t,"i").exec(e):!1}class p extends Error{name="AssertionError";constructor(t,r){super(fi(r,t)||"Assertion failed.")}}const u0={interval:{milliseconds:100},timeout:{seconds:10}},Pc=Symbol("not set");async function E5(e,t,r){const{callback:n,extraAssertionArgs:o,failureMessage:i,options:s}=C5(t),a=is(s.timeout,{milliseconds:!0}).milliseconds,u=is(s.interval,{milliseconds:!0});let l=Pc,c;async function d(){try{l=r?n():await n(),e(l,...o)}catch(m){l=Pc,c=rt(m)}}const f=Date.now();for(;l===Pc;)if(await d(),await oi(u),Date.now()-f>=a){const v=`${i?`${i}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Wa(c,v)}return l}function N(e,t=!1){return((...r)=>E5(e,r,t))}function C5(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Xy(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Xy(e){return{interval:e?.interval||u0.interval,timeout:e?.timeout||u0.timeout}}const Ks={isFalse(e,t){if(e!==!1)throw new p(`'${y(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${y(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new p(`'${y(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new p(`'${y(e)}' is not truthy.`,t)}},Qy={assert:Ks,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new p(`'${y(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${y(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new p(`'${y(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new p(`'${y(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:N(Ks.isFalse),isFalsy:N(Ks.isFalsy),isTrue:N(Ks.isTrue),isTruthy:N(Ks.isTruthy)}};function F5(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${y(e)} does not end with ${y(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${y(e)} does not end with ${y(t)}}`,r)}function S5(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new p(`${y(e)} ends with ${y(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${y(e)} ends with ${y(t)}}`,r)}function T5(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${y(e)} does not start with ${y(t)}}`,r)}else if(e[0]!==t)throw new p(`${y(e)} does not start with ${y(t)}}`,r)}function M5(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new p(`${y(e)} starts with ${y(t)}}`,r)}else if(e[0]===t)throw new p(`${y(e)} starts with ${y(t)}}`,r)}const Gs={endsWith:F5,endsWithout:S5,startsWith:T5,startsWithout:M5},eb={assert:Gs,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${y(e)} does not end with ${y(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${y(e)} does not end with ${y(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new p(`${y(e)} ends with ${y(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${y(e)} ends with ${y(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${y(e)} does not start with ${y(t)}}`,r)}else if(e[0]!==t)throw new p(`${y(e)} does not start with ${y(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new p(`${y(e)} starts with ${y(t)}}`,r)}else if(e[0]===t)throw new p(`${y(e)} starts with ${y(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:N(Gs.endsWith),endsWithout:N(Gs.endsWithout),startsWith:N(Gs.startsWith),startsWithout:N(Gs.startsWithout)}};function P5(e,t,r){const n=_r(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function Ln(e,t){return _r(t).includes(e)}const Nc={isEnumValue(e,t,r){P5(e,t,r)},isNotEnumValue(e,t,r){const n=_r(t);if(n.includes(e))throw new p(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},tb={assert:Nc,check:{isEnumValue:Ln,isNotEnumValue(e,t){return!_r(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=_r(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=_r(t);if(n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(_r(t).includes(e))return e},isNotEnumValue(e,t){if(!_r(t).includes(e))return e}},waitUntil:{isEnumValue:N(Nc.isEnumValue),isNotEnumValue:N(Nc.isNotEnumValue)}},Ic={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${y(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${y(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new p(`Entries are not equal at key '${String(o)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))throw new p("Entries are equal.",r)}},rb={assert:Ic,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const o=e[n],i=t[n];return o===i})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const o=e[n],i=t[n];return o!==i})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${y(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${y(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(o=>{const i=e[o],s=t[o];if(i!==s)throw new p(`Entries are not equal at key '${String(o)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],a=t[i];return s!==a}))return e;throw new p("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(o=>{const i=e[o],s=t[o];return i===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const i=e[o],s=t[o];return i!==s}))return e}},waitUntil:{entriesEqual:N(Ic.entriesEqual),notEntriesEqual:N(Ic.notEntriesEqual)}};function il(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Aa(e,t){if(!(e===t||il(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!il(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(i=>{try{Aa(e[i],t[i])}catch(s){throw new Error(`JSON objects are not equal at key '${i}': ${St(s)}`)}})}throw new Error("Values are not JSON equal.")}}function oa(e,t){if(e===t||il(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!il(r,n)?!1:Object.keys(e).every(i=>oa(e[i],t[i]))}return!1}const Oc={jsonEquals(e,t,r){try{Aa(e,t)}catch(n){throw new p(St(n),r)}},notJsonEquals(e,t,r){try{Aa(e,t)}catch{return}throw new p("Values are JSON equal.",r)}},nb={assert:Oc,check:{jsonEquals(e,t){return oa(e,t)},notJsonEquals(e,t){return!oa(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return Aa(e,t),e}catch(n){throw new p(St(n),r)}},notJsonEquals(e,t,r){try{Aa(e,t)}catch{return e}throw new p("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(oa(e,t))return e},notJsonEquals(e,t){if(!oa(e,t))return e}},waitUntil:{jsonEquals:N(Oc.jsonEquals),notJsonEquals:N(Oc.notJsonEquals)}};function l0(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function ob(){this._key="chai/deep-eql__"+Math.random()+Date.now()}ob.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var ib=typeof WeakMap=="function"?WeakMap:ob;function c0(e,t,r){if(!r||ss(e)||ss(t))return null;var n=r.get(e);if(n){var o=n.get(t);if(typeof o=="boolean")return o}return null}function Du(e,t,r,n){if(!(!r||ss(e)||ss(t))){var o=r.get(e);o?o.set(t,n):(o=new ib,o.set(t,n),r.set(e,o))}}function on(e,t,r){if(r&&r.comparator)return d0(e,t,r);var n=sb(e,t);return n!==null?n:d0(e,t,r)}function sb(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:ss(e)||ss(t)?!1:null}function d0(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new ib;var n=r&&r.comparator,o=c0(e,t,r.memoize);if(o!==null)return o;var i=c0(t,e,r.memoize);if(i!==null)return i;if(n){var s=n(e,t);if(s===!1||s===!0)return Du(e,t,r.memoize,s),s;var a=sb(e,t);if(a!==null)return a}var u=l0(e);if(u!==l0(t))return Du(e,t,r.memoize,!1),!1;Du(e,t,r.memoize,!0);var l=N5(e,t,u,r);return Du(e,t,r.memoize,l),l}function N5(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return on(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return ab(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return ei(e,t,n);case"RegExp":return I5(e,t);case"Generator":return O5(e,t,n);case"DataView":return ei(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return ei(new Uint8Array(e),new Uint8Array(t),n);case"Set":return f0(e,t,n);case"Map":return f0(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return R5(e,t,n)}}function I5(e,t){return e.toString()===t.toString()}function f0(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],o=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){o.push([s,a])}),ei(n.sort(),o.sort(),r)}function ei(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var o=-1;++o<n;)if(on(e[o],t[o],r)===!1)return!1;return!0}function O5(e,t,r){return ei(Ld(e),Ld(t),r)}function B5(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function m0(e){if(B5(e))try{return Ld(e[Symbol.iterator]())}catch{return[]}return[]}function Ld(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function h0(e){var t=[];for(var r in e)t.push(r);return t}function g0(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var o=r[n];Object.getOwnPropertyDescriptor(e,o).enumerable&&t.push(o)}return t}function ab(e,t,r,n){var o=r.length;if(o===0)return!0;for(var i=0;i<o;i+=1)if(on(e[r[i]],t[r[i]],n)===!1)return!1;return!0}function R5(e,t,r){var n=h0(e),o=h0(t),i=g0(e),s=g0(t);if(n=n.concat(i),o=o.concat(s),n.length&&n.length===o.length)return ei(p0(n).sort(),p0(o).sort())===!1?!1:ab(e,t,n,r);var a=m0(e),u=m0(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),ei(a,u,r)):n.length===0&&a.length===0&&o.length===0&&u.length===0}function ss(e){return e===null||typeof e!="object"}function p0(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class Ji extends p{name="DiffError";constructor(t,r,n,o){const i=w2(r,n);super([t,If(i)].join(`
`),o)}}function mo(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const co={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${y(t)}

.`,r):new Ji("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${y(t)}

.`,r):new p(`

${y(e)}

strictly equals

${y(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${y(t)}

.`,r):new Ji("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${y(t)}

.`,r):new p(`

${y(e)}

loosely equals

${y(t)}

`,r)},deepEquals(e,t,r){if(!on(e,t,{comparator:mo}))throw new Ji("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(on(e,t,{comparator:mo}))throw new p(`

${y(e)}

deeply equals

${y(t)}

`,r)}},ub=co.deepEquals,lb={assert:co,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return on(e,t,{comparator:mo})},notDeepEquals(e,t){return!on(e,t,{comparator:mo})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${y(t)}

.`,r):new Ji("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${y(t)}

.`,r):new p(`

${y(e)}

strictly equals

${y(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${y(t)}

.`,r):new Ji("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${y(t)}

.`,r):new p(`

${y(e)}

loosely equals

${y(t)}

`,r);return e},deepEquals(e,t,r){if(on(e,t,{comparator:mo}))return e;throw new Ji("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(on(e,t,{comparator:mo}))throw new p(`

${y(e)}

deeply equals

${y(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(on(e,t,{comparator:mo}))return e},notDeepEquals(e,t){if(!on(e,t,{comparator:mo}))return e}},waitUntil:{strictEquals:N(co.strictEquals),notStrictEquals:N(co.notStrictEquals),looseEquals:N(co.looseEquals),notLooseEquals:N(co.notLooseEquals),deepEquals:N(co.deepEquals),notDeepEquals:N(co.notDeepEquals)}};function $r(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function Ur(e,t){return typeof t=="string"?t.includes(e):$r(t,e)}const In={hasValue(e,t,r){if(!$r(e,t))throw new p(`'${y(e)}' does not have value '${y(t)}'.`,r)},lacksValue(e,t,r){if($r(e,t))throw new p(`'${y(e)}' has value '${y(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new p(`'${y(e)}' does not have values '${y(t)}'.`,r)}if(n.length)throw new p(`'${y(e)}' does not have values '${y(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new p(`'${y(e)}' has values '${y(n)}'.`,r)},isIn(e,t,r){if(!Ur(e,t))throw new p(`'${y(e)}'

is not in

${y(t)}.`,r)},isNotIn(e,t,r){if(Ur(e,t))throw new p(`'${y(e)}'

is in

${y(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${y(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new p(`'${y(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new p(`'${y(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${y(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${y(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${y(e)}' is not empty.`,t)}}},cb={assert:In,check:{hasValue(e,t){return $r(e,t)},lacksValue(e,t){return!$r(e,t)},hasValues(e,t){return t.every(r=>$r(e,r))},lacksValues(e,t){return t.every(r=>!$r(e,r))},isIn(e,t){return Ur(e,t)},isNotIn(e,t){return!Ur(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!$r(e,t))throw new p(`'${y(e)}' does not have value '${y(t)}'.`,r);return e},lacksValue(e,t,r){if($r(e,t))throw new p(`'${y(e)}' has value '${y(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>!(typeof o=="string"&&e.includes(o)));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!o.includes(i))}catch{throw new p(`'${y(e)}' does not have values '${y(t)}'.`,r)}if(n.length)throw new p(`'${y(e)}' does not have values '${y(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(o=>typeof o=="string"&&e.includes(o));else try{const o=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>o.includes(i))}catch{}if(n.length)throw new p(`'${y(e)}' has values '${y(n)}'.`,r);return e},isIn(e,t,r){if(!Ur(e,t))throw new p(`'${y(e)}'

is not in

${y(t)}.`,r);return e},isNotIn(e,t,r){if(Ur(e,t))throw new p(`'${y(e)}'

is in

${y(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${y(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new p(`'${y(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new p(`'${y(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${y(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${y(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${y(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if($r(e,t))return e},lacksValue(e,t){if(!$r(e,t))return e},hasValues(e,t){if(t.every(r=>$r(e,r)))return e},lacksValues(e,t){if(!t.every(r=>$r(e,r)))return e},isIn(e,t){if(Ur(e,t))return e},isNotIn(e,t){if(!Ur(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:N(In.hasValue),lacksValue:N(In.lacksValue),hasValues:N(In.hasValues),lacksValues:N(In.lacksValues),isIn:N(In.isIn),isNotIn:N(In.isNotIn),isEmpty:N(In.isEmpty),isNotEmpty:N(In.isNotEmpty)}},Bc={isHttpStatus(e,t){if(!Ln(e,F))throw new p(`${y(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(Ln(e,F)){if(!Ur(e,Uu[t]))throw new p(`${y(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${y(e)} is not a valid HTTP status.`,r)}},db={assert:Bc,check:{isHttpStatus(e){return Ln(e,F)},isHttpStatusCategory(e,t){return Ln(e,F)&&Ur(e,Uu[t])}},assertWrap:{isHttpStatus(e,t){if(!Ln(e,F))throw new p(`${y(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(Ln(e,F)){if(!Ur(e,Uu[t]))throw new p(`${y(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${y(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(Ln(e,F))return e},isHttpStatusCategory(e,t){if(Ln(e,F)&&Ur(e,Uu[t]))return e}},waitUntil:{isHttpStatus:N(Bc.isHttpStatus),isHttpStatusCategory:N(Bc.isHttpStatusCategory)}},Rc={instanceOf(e,t,r){if(!(e instanceof t))throw new p(`'${y(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${y(e)}' is an instance of '${t.name}'`,r)}},fb={assert:Rc,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new p(`'${y(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${y(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:N(Rc.instanceOf),notInstanceOf:N(Rc.notInstanceOf)}},L5=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ve(e,t){return L5.some(r=>{try{return r(e,t)}catch{return!1}})}const Vo={isKeyOf(e,t,r){if(!Ve(t,e))throw new p(`'${String(e)}' is not a key of '${y(t)}'.`,r)},isNotKeyOf(e,t,r){if(Ve(t,e))throw new p(`'${String(e)}' is a key of '${y(t)}'.`,r)},hasKey(e,t,r){if(!Ve(e,t))throw new p(`'${y(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(Ve(e,t))throw new p(`'${y(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(o=>!Ve(e,o));if(n.length)throw new p(`'${y(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(o=>Ve(e,o));if(n.length)throw new p(`'${y(e)}' does not lack keys '${n.join(",")}'.`,r)}},mb={assert:Vo,check:{isKeyOf(e,t){return Ve(t,e)},isNotKeyOf(e,t){return!Ve(t,e)},hasKey:Ve,lacksKey(e,t){return!Ve(e,t)},hasKeys(e,t){return t.every(r=>Ve(e,r))},lacksKeys(e,t){return t.every(r=>!Ve(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!Ve(t,e))throw new p(`'${String(e)}' is not a key of '${y(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(Ve(t,e))throw new p(`'${String(e)}' is a key of '${y(t)}'.`,r);return e},hasKey(e,t,r){if(!Ve(e,t))throw new p(`'${y(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(Ve(e,t))throw new p(`'${y(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(o=>!Ve(e,o));if(n.length)throw new p(`'${y(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(o=>Ve(e,o));if(n.length)throw new p(`'${y(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(Ve(t,e))return e},isNotKeyOf(e,t){if(!Ve(t,e))return e},hasKey(e,t){if(Ve(e,t))return e},lacksKey(e,t){if(!Ve(e,t))return e},hasKeys(e,t){if(t.every(r=>Ve(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!Ve(e,r)))return e}},waitUntil:{isKeyOf:N(Vo.isKeyOf),isNotKeyOf:N(Vo.isNotKeyOf),hasKey:N(Vo.hasKey),lacksKey:N(Vo.lacksKey),hasKeys:N(Vo.hasKeys),lacksKeys:N(Vo.lacksKeys)}};function j5(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r)}function U5(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r)}const Lc={isLengthAtLeast:j5,isLengthExactly:U5},hb={assert:Lc,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ze(e).length)===t)return e})},waitUntil:{isLengthAtLeast:N(Lc.isLengthAtLeast),isLengthExactly:N(Lc.isLengthExactly)}},_5={never(e){throw new p("This code should not have executed.",e)}},gb={assert:_5,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},jc={isDefined(e,t){if(e==null)throw new p(`'${y(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new p(`'${y(e)}' is not a nullish.`,t)}},pb={assert:jc,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new p(`'${y(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new p(`'${y(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:N(jc.isDefined),isNullish:N(jc.isNullish)}},ur={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${y({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${y({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n)}},yb={assert:ur,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${y({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${y({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:N(ur.isInBounds),isOutBounds:N(ur.isOutBounds),isInteger:N(ur.isInteger),isNotInteger:N(ur.isNotInteger),isAbove:N(ur.isAbove),isAtLeast:N(ur.isAtLeast),isBelow:N(ur.isBelow),isAtMost:N(ur.isAtMost),isNaN:N(ur.isNaN),isFinite:N(ur.isFinite),isInfinite:N(ur.isInfinite),isApproximately:N(ur.isApproximately),isNotApproximately:N(ur.isNotApproximately)}};function V5(e,t,r,n,o){return Ja(...Ol(e,t,r,n,o),!1)}function Ol(e,t,r,n,o){const i=Array.isArray(r);return[i?e:ub,i?t:e,i?r:t,i?n:r,i?o:n]}function Ja(e,t,r,n,o,i){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,n),i?a(l):a()}catch(l){u(new p(`Output from '${t.name}' did not produce expected output. ${St(l)}`,o))}});try{return e(s,n),i?s:void 0}catch(a){throw new p(`Output from '${t.name}' did not produce expected output. ${St(a)}`,o)}}function z5(e,t,r,n,o){try{const i=Ja(...Ol(e,t,r,n,o),!1);return i instanceof Promise?new Promise(async s=>{try{await i,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function q5(e,t,r,n,o){return Ja(...Ol(e,t,r,n,o),!0)}function W5(e,t,r,n,o){try{const i=Ja(...Ol(e,t,r,n,o),!0);return i instanceof Promise?new Promise(async s=>{try{s(await i)}catch{s(void 0)}}):i}catch{return}}const Uc=Symbol("not set");async function K5(e,t,r,n,o,i){const s=Array.isArray(r),a=s?e:ub,u=s?t:e,l=s?r:t,c=s?n:r,d=Xy(s?o:n),f=s?i:o,m=is(d.timeout,{milliseconds:!0}).milliseconds,v=is(d.interval,{milliseconds:!0});let $=Uc,k;async function D(){try{$=await Ja(a,u,l,c,void 0,!0)}catch(P){$=Uc,k=rt(P)}}const E=Date.now();for(;$===Uc;)if(await D(),await oi(v),Date.now()-E>=m)throw Wa(k,fi(f,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return $}const G5={output:V5},bb={assert:G5,check:{output:z5},assertWrap:{output:q5},checkWrap:{output:W5},waitUntil:{output:K5}},Zs={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${y(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${y(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${y(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${y(e)}' is not a Primitive.`,t)}},vb={assert:Zs,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${y(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${y(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${y(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${y(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:N(Zs.isNotPrimitive),isNotPropertyKey:N(Zs.isNotPropertyKey),isPrimitive:N(Zs.isPrimitive),isPropertyKey:N(Zs.isPropertyKey)}},Hs={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${y(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${y(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${y(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${y(e)}' is a Promise.`,t)}},wb={assert:Hs,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${y(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${y(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${y(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${y(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:N(Hs.isPromiseLike,!0),isNotPromiseLike:N(Hs.isNotPromiseLike,!0),isPromise:N(Hs.isPromise,!0),isNotPromise:N(Hs.isNotPromise,!0)}},_c={matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r)}},$b={assert:_c,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:N(_c.matches,!0),mismatches:N(_c.mismatches,!0)}},Ke={isArray(e,t){if(!Array.isArray(e))throw new p(`'${y(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${y(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${y(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new p(`'${y(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new p(`'${y(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${y(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${y(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${y(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new p(`'${y(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${y(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new p(`'${y(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${y(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${y(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${y(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${y(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new p(`'${y(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${y(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${y(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new p(`'${y(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${y(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${y(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${y(e)}' is a undefined.`,t)}},kb={assert:Ke,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new p(`'${y(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${y(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${y(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new p(`'${y(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new p(`'${y(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${y(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${y(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${y(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new p(`'${y(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${y(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new p(`'${y(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${y(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${y(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${y(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${y(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new p(`'${y(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${y(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${y(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new p(`'${y(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${y(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${y(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${y(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:N(Ke.isArray),isBigInt:N(Ke.isBigInt),isBoolean:N(Ke.isBoolean),isFunction:N(Ke.isFunction),isNull:N(Ke.isNull),isNumber:N(Ke.isNumber),isObject:N(Ke.isObject),isPlainObject:N(Ke.isPlainObject),isString:N(Ke.isString),isSymbol:N(Ke.isSymbol),isUndefined:N(Ke.isUndefined),isNotArray:N(Ke.isNotArray),isNotBigInt:N(Ke.isNotBigInt),isNotBoolean:N(Ke.isNotBoolean),isNotFunction:N(Ke.isNotFunction),isNotNull:N(Ke.isNotNull),isNotNumber:N(Ke.isNotNumber),isNotObject:N(Ke.isNotObject),isNotPlainObject:N(Ke.isNotPlainObject),isNotString:N(Ke.isNotString),isNotSymbol:N(Ke.isNotSymbol),isNotUndefined:N(Ke.isNotUndefined)}};var dr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(dr||(dr={}));function Of(e,t,r){Bf(e,{noError:"No error.",notInstance:`'${y(e)}' is not an error instance.`},t,r)}function y0(e,t,r){Bf(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${y(e)}' is not an error instance.`},t,r)}function Bf(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const o=e.constructor.name;throw new p(`Error constructor '${o}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const o=St(e);if(typeof r.matchMessage=="string"){if(!Yy(o,r.matchMessage))throw new p(`Error message

'${o}'

does not contain

'${r.matchMessage}'.`,n)}else if(!o.match(r.matchMessage))throw new p(`Error message

'${o}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new p(t.notInstance,n);else throw new p(t.noError,n)}function b0(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=St(e);if(typeof t.matchMessage=="string"){if(!Yy(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Bl(e,t,r,n){let o;try{const i=t instanceof Promise?t:t();if(i instanceof Promise)return new Promise(async(s,a)=>{try{await i}catch(u){o=rt(u)}try{y0(o,r,n),e===dr.Assert?s():e===dr.Check?s(!0):s(o)}catch(u){e===dr.CheckWrap?s(void 0):e===dr.Check?s(!1):a(rt(u))}})}catch(i){o=rt(i)}try{return y0(o,r,n),e===dr.Check?!0:e!==dr.Assert?o:void 0}catch(i){if(e===dr.CheckWrap)return;if(e===dr.Check)return!1;throw i}}function Z5(e,t,r){return Bl(dr.Assert,e,t,r)}function H5(e,t){return Bl(dr.Check,e,t)}function J5(e,t,r){return Bl(dr.AssertWrap,e,t,r)}function Y5(e,t,r){return Bl(dr.CheckWrap,e,t,r)}const X5=N(Of);function Q5(e,t,r,n){const o=typeof e=="function"||e instanceof Promise?void 0:e,i=o?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof i!="function")throw new TypeError(`Callback is not a function, got '${y(i)}'`);return X5(o,async()=>{try{await i();return}catch(u){return rt(u)}},a,s)}const ek={throws:Z5,isError:Of},Db={assert:ek,check:{throws:H5,isError(e,t){return b0(e,t)}},assertWrap:{throws:J5,isError(e,t,r){return Bf(e,{noError:"No error.",notInstance:`'${y(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:Y5,isError(e,t){if(b0(e,t))return e}},waitUntil:{throws:Q5,isError:N(Of)}},ho=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Vc={isUuid(e,t){if(!String(e).match(ho))throw new p(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(ho))throw new p(`'${String(e)}' is a UUID.`,t)}},xb={assert:Vc,check:{isUuid(e){return!!String(e).match(ho)},isNotUuid(e){return!String(e).match(ho)}},assertWrap:{isUuid(e,t){if(!String(e).match(ho))throw new p(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(ho))throw new p(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(ho))return e},isNotUuid(e){if(!String(e).match(ho))return e}},waitUntil:{isUuid:N(Vc.isUuid),isNotUuid:N(Vc.isNotUuid)}},tk={...gb.assert,...Qy.assert,...eb.assert,...rb.assert,...tb.assert,...db.assert,...fb.assert,...nb.assert,...mb.assert,...hb.assert,...pb.assert,...yb.assert,...bb.assert,...vb.assert,...wb.assert,...$b.assert,...kb.assert,...lb.assert,...Db.assert,...xb.assert,...cb.assert},Rf=[Qy,eb,rb,tb,db,fb,nb,mb,hb,gb,pb,yb,bb,vb,wb,$b,kb,lb,Db,xb,cb],rk=Object.assign({},...Rf.map(e=>e.check)),T=Object.assign(function(t){return!!t},rk);function nk(e,t,r){return qu(e,t,r,new Set)}function qu(e,t,r,n){if(e=v0(e),t=v0(t),T.isObject(e)&&T.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!qu(ze(e).sort(),ze(t).sort(),r,n))return!1;let o=!1;const i=ze(e).map(s=>{const a=qu(e[s],t[s],r,n);return T.isPromise(a)&&(o=!0),a});return w0(o,i)}else if(T.isArray(e)&&T.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let o=!1;const i=e.map((s,a)=>{const u=qu(s,t[a],r,n);return T.isPromise(u)&&(o=!0),u});return w0(o,i)}else return r(e,t)}function v0(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function w0(e,t){return e?new Promise(async(r,n)=>{try{const o=await Promise.all(t);r(o.every(T.isTrue))}catch(o){n(rt(o))}}):t.every(T.isTrue)}const ok=Object.assign({},...Rf.map(e=>e.assertWrap)),Fn=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r);return t},ok);function ik(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const sk={tsType:ik},ak={assert:sk},uk={fail:e=>{throw new p("Failure triggered.",e)}},lk={...ak.assert,...tk,...uk},Wt=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r)},lk),ck=Object.assign({},...Rf.map(e=>e.checkWrap)),Ab=Object.assign(function(t){if(t)return t},ck);function dk(e,t){return T.hasKey(e,"entryType")&&e.entryType===t}function zo(e,t){return e.controlType===t}var Z;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(Z||(Z={}));const Eb=Symbol("any-type"),fk={[Z.Checkbox]:!1,[Z.Color]:"",[Z.Custom]:void 0,[Z.Dropdown]:"",[Z.Hidden]:Eb,[Z.Number]:0,[Z.Text]:""};function mk(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{if(o.controlType===Z.Custom)return;const i=fk[o.controlType];i!==Eb&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function hk(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return T.isPromise(o)?new Promise(async(i,s)=>{try{const a=await o;e.set(n,a),i(a)}catch(a){s(rt(a))}}):(e.set(n,o),o)}}function Fs(e,t,r){if(t in e)return e[t];{const n=r();return T.isPromise(n)?new Promise(async(o,i)=>{try{const s=await n;e[t]=s,o(s)}catch(s){i(rt(s))}}):(e[t]=n,n)}}function Xn(e){return ze(e).map(t=>[t,e[t]])}function Ea(e){return Object.fromEntries(e)}function hi(e,t,r){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return r(a,o,i,s)&&n.push(a),n},[])}function gk(e,t,r={}){return e.reduce((n,o,i,s)=>{const a=t(o,i,s);return Fs(n,a,()=>[]).push(o),n},{})}function Rl(e,t,r={}){try{let n=!1;const o=e.map((i,s,a)=>{const u=t(i,s,a);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(T.isTruthy);return n?new Promise(async(i,s)=>{try{const a=hi(await Promise.all(o),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},T.isTruthy);i(Ea(a))}catch(a){s(rt(a))}}):Ea(o)}catch(n){throw rt(n)}}function pk(e){return Array.isArray(e)?e:[e]}function yk({min:e,max:t}){const{min:r,max:n}=Af({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)),s=Math.ceil(i/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/o)*o,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,f)=>c+d*256**f,0);while(l>=a);return r+l%o}const $0=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function ti(e=16){let t="";for(let r=0;r<e;r++){const n=yk({min:0,max:$0.length-1});t+=$0[n]}return t}function Cb(e){if(T.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>St(t).trim()).join(`
`))}function bk(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):T.hasKey(t,"fallbackValue")?t.fallbackValue:rt(n)):r}catch(r){return t.handleError?t.handleError(r):T.hasKey(t,"fallbackValue")?t.fallbackValue:rt(r)}}function vk(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const wk="modulepreload",$k=function(e){return"/vira/book/"+e},k0={},sl=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=u(r.map(l=>{if(l=$k(l),l in k0)return;k0[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":wk,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,v)=>{f.addEventListener("load",m),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var wt;(function(e){e.Standard="stdout",e.Error="stderr"})(wt||(wt={}));var ae;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ae||(ae={}));async function kk(){return await qp({async[ln.Node](){const e=(await sl(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[ae.Bold]:e.bold.open,[ae.Debug]:e.blueBright.open,[ae.Error]:e.red.open,[ae.Faint]:e.gray.open,[ae.Info]:e.cyan.open,[ae.Mutate]:e.magenta.open,[ae.NormalWeight]:"\x1B[22m",[ae.Plain]:"",[ae.Reset]:e.reset.open,[ae.Success]:e.green.open,[ae.Warning]:e.yellow.open}},[ln.Web](){return Promise.resolve({[ae.Bold]:"font-weight: bold",[ae.Debug]:"color: blue",[ae.Error]:"color: red",[ae.Faint]:"color: grey",[ae.Info]:"color: teal",[ae.Mutate]:"color: magenta",[ae.NormalWeight]:"",[ae.Plain]:"",[ae.Reset]:"",[ae.Success]:"color: green",[ae.Warning]:"color: orange"})}})}const wr=await kk(),Dk={[ae.Bold]:{colors:[wr.bold],logType:wt.Standard},[ae.Debug]:{colors:[wr.debug],logType:wt.Standard},[ae.Faint]:{colors:[wr.faint],logType:wt.Standard},[ae.Info]:{colors:[wr.info],logType:wt.Standard},[ae.Mutate]:{colors:[wr.mutate,wr.bold],logType:wt.Standard},[ae.NormalWeight]:{colors:[wr.normalWeight],logType:wt.Standard},[ae.Plain]:{colors:[],logType:wt.Standard},[ae.Reset]:{colors:[wr.reset],logType:wt.Standard},[ae.Success]:{colors:[wr.success,wr.bold],logType:wt.Standard},[ae.Error]:{colors:[wr.error,wr.bold],logType:wt.Error},[ae.Warning]:{colors:[wr.warning],logType:wt.Error}};function or({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Yi({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function xk(e,t){try{let r=!1;const n=Xn(e).map(([o,i])=>{const s=t(o,i,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(T.isTruthy);return r?new Promise(async(o,i)=>{try{const s=hi(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},T.isTruthy);o(Ea(s))}catch(s){i(rt(s))}}):Ea(n)}catch(r){throw rt(r)}}function Ak(e,t){return xk(e,(r,n)=>{const o=n,i=t(n,e);return i instanceof Promise?i.then(s=>({key:o,value:s})):{key:o,value:i}})}function Fb(e,...t){const r={...e};return t.forEach(n=>{n&&Xn(n).forEach(([o,i])=>{i!=null&&(r[o]=i)})}),r}function Ek(e){return e.replace(/,/g,"")}function Ck(e){return typeof e=="number"?e:Number(typeof e=="string"?Ek(e):e)}function Fk(e){const t=Sk(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function Sk(e){const t=Ck(e);if(!isNaN(t))return t}const Sb="px";function Ca(e){return Lf({value:e,suffix:Sb})}function Tk(e){return Fk(Tb({value:e,suffix:Sb}))}function Lf({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Tb({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function Mk(){return await qp({async[ln.Node](){const{inspect:e}=await sl(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const o=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),o.join(`
`),n.omitColors?"":n.colorConfig[ae.Reset].colors.join("")].join(""),css:void 0}}},[ln.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:hi(r.colorConfig[t].colors,s=>Tb({value:s,suffix:";"}),T.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?St(s):y(s)).join(`
`),r.omitColors?"":r.colorConfig[ae.Reset].colors.join("")].join(""),css:n}}}})}const Pk=await Mk(),Nk={colorConfig:Dk,omitColors:!1},Ik=Mb({[wt.Error](){},[wt.Standard](){}});function Mb(e,t){const r=Fb(Nk,t);function n(i){e[r.colorConfig[i.colorKey].logType](Pk({...i,options:r}))}const o=Ak(ae,i=>(...s)=>n({args:s,colorKey:i}));return{...o,if(i){return i?o:Ik}}}const Ok=xf(ln.Node)?{[wt.Error]({text:e}){process.stderr.write(e+`
`)},[wt.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[wt.Error]({text:e,css:t}){console.error(or({value:e,prefix:"%c"}),t)},[wt.Standard]({text:e,css:t}){console.log(or({value:e,prefix:"%c"}),t)}},Pb=Mb(Ok);function Bk(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}function Rk(e,{digits:t}){const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function Lk({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const o=Zy(Jy(t,{caseSensitive:r}),"g"),i=[];return e.replace(o,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);i.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),i}function jk(e,t,{caseSensitive:r}){const n=Lk({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),o=Jy(t,{caseSensitive:r});return e.split(o).reduce((s,a,u)=>{const l=n[u],c=s.concat(a);if(l){const d=e.slice(l.index,l.index+l.length);return c.concat(d)}else return c},[])}function Uk(e,t){return e.split(t)}function D0(e,t){const{min:r,max:n}=Af(t);if(t.takeOverflow){const o=n-r+1,i=(e-r)%o;return i<0?r+o+i:r+i}else return e>n?r:e<r?n:e}function Kt(e,t){let r=!1;const n=ze(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),o[i]=s,o},{});return r?new Promise(async(o,i)=>{try{await Promise.all(ze(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(rt(s))}}):n}function jf(e,t){const r=Xn(e).filter(([n,o])=>t(n,o,e));return Ea(r)}function _k(e,t){return jf(e,r=>t.includes(r))}function jd(e){return ze(e).map(t=>e[t])}function Nb(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var Fa;(function(e){e.Upper="upper",e.Lower="lower"})(Fa||(Fa={}));const Vk={firstLetterCase:Fa.Lower};function zk(e,t){if(!e.length)return"";const r=e[0];return(t===Fa.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function qk(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""}),o=Fb(Vk,t);return zk(n,o.firstLetterCase)}function Wk(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function Kk({value:e,wrapper:t}){return or({value:Lf({value:e,suffix:t}),prefix:t})}function yn(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function Uf(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class Gk{listeners={};universalListeners=new Map;getListenerCount(){return jd(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function o(i,s){r.once&&n(),t(i,s)}return this.universalListeners.set(t,{listener:o,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const o=T.isString(t)?t:t.type,i=()=>this.listeners[o]?.delete(r)||!1;function s(a,u){n.once&&i(),r(a,u)}return Fs(this.listeners,o,()=>new Map).set(r,{listener:s,removeListener:i}),i}removeListener(t,r){const n=T.isString(t)?t:t.type,o=this.listeners[n];if(!o)return!1;const i=o.get(r);return i?i.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(o=>{o.listener(t,o.removeListener)}),this.universalListeners.forEach(o=>{o.listener(t,o.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=jd(this.listeners).reduce((n,o)=>{const i=o.size||0;return o.clear(),n+i},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class _f extends Gk{}function Vf(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function Ud(e,t,r){return Vf(globalThis,e,t,r)}function zf(e,t){return Sa(e.title),e.parent?[...zf(e.parent),Sa(e.parent.title)].concat([]):[]}function Sa(e){return Nb(e).toLowerCase().replaceAll(/\s/g,"-")}function Zk({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const Hk=/[/?#&=]/;function Ib(e){const t=e.match(Hk);return e.trim()?Sa(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const Jk={[Ot.ElementExample]:()=>[],[Ot.Page]:e=>[Ib(e.title),...mk(e.controls,e.title)].filter(T.isTruthy),[Ot.Root]:()=>[]},al="_isBookTreeNode",Ob=new Map;function Yk(e){return Ob.get(e)}function Xk(e,t){hk(Ob,e,()=>t)}function Xi(e,t){return Bb(e)&&e.entry.entryType===t}function Bb(e){return!!(T.hasKeys(e,[al,"entry"])&&e[al])}function Qk(){return{[al]:!0,entry:{entryType:Ot.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function eD({entries:e,debug:t}){const r=Yk(e);if(r)return r;const n=Qk();e.forEach(s=>qf({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=Rb(n),i={tree:n,flattenedNodes:o};return Xk(e,i),t&&console.info("element-book tree:",n),i}function tD(e,t,r){if(!t.parent)return e;const n=_d(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),qf({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=_d(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${zf(t).join(" > ")}`);return o}function qf({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Jk[t.entryType](t);t.errors.push(...o);const i=tD(e,t,r),s=Sa(t.title),a=i.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[al]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};i.children[s]=u,dk(t,Ot.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>qf({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function _d(e,t){const r=Bb(e)?e.fullUrlBreadcrumbs.slice(0,-1):zf(e);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Rb(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Rb(o));return[e,...r].flat()}function Wf(e,t){return Kf(e,["",...t],void 0)}function Kf(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],s=i&&Kf(i,n,r);return{...e.controls,...s}}function rD(e,t,r){const n={...e};return Kf(n,["",...t],r),n}function Lb(e,t){const r=t?.controls||(Xi(e,Ot.Page)?Kt(e.entry.controls,(o,i)=>i.initValue):{});return{children:Kt(e.children,(o,i)=>Lb(i,t?.children?.[i.urlBreadcrumb])),controls:r}}function Ce(e){const t={...e,entryType:Ot.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const o={...n,isVertical:t.useVerticalExamples,entryType:Ot.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),Ib(n.title)].filter(T.isTruthy)};r.add(n.title),t.elementExamples[Sa(o.title)]=o}}),t}var fr;(function(e){e.Search="search",e.Book="book"})(fr||(fr={}));function jb(e){return e[0]===fr.Book?"":e[1]?decodeURIComponent(e[1]):""}const as={hash:void 0,paths:[fr.Book],search:void 0};class ul{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const t=ul.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=r=>(Ub.registry.set(r.name,r),t(r)))}canRegisterCssProperty(t){return ul.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(t){if(!this.canRegisterCssProperty(t.name))return!1;try{return globalThis.CSS.registerProperty(t),!0}catch(r){throw Wa(r,`Failed to define CSS var: ${y(t,4)}

`)}}}const Ub=new ul;const Wu=globalThis,Gf=Wu.ShadowRoot&&(Wu.ShadyCSS===void 0||Wu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zf=Symbol(),x0=new WeakMap;let Cn=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Zf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Gf&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=x0.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&x0.set(r,t))}return t}toString(){return this.cssText}};const Je=e=>new Cn(typeof e=="string"?e:e+"",void 0,Zf),_b=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Cn(r,e,Zf)},nD=(e,t)=>{if(Gf)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Wu.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},A0=Gf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Je(r)})(e):e;const{is:oD,defineProperty:iD,getOwnPropertyDescriptor:sD,getOwnPropertyNames:aD,getOwnPropertySymbols:uD,getPrototypeOf:lD}=Object,Ll=globalThis,E0=Ll.trustedTypes,cD=E0?E0.emptyScript:"",dD=Ll.reactiveElementPolyfillSupport,ma=(e,t)=>e,ll={toAttribute(e,t){switch(t){case Boolean:e=e?cD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Hf=(e,t)=>!oD(e,t),C0={attribute:!0,type:String,converter:ll,reflect:!1,useDefault:!1,hasChanged:Hf};Symbol.metadata??=Symbol("metadata"),Ll.litPropertyMetadata??=new WeakMap;let Li=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=C0){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&iD(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=sD(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:o,set(s){const a=o?.call(this);i?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??C0}static _$Ei(){if(this.hasOwnProperty(ma("elementProperties")))return;const t=lD(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ma("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ma("properties"))){const r=this.properties,n=[...aD(r),...uD(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(A0(o))}else t!==void 0&&r.push(A0(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nD(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:ll).toAttribute(r,n.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,r){const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:ll;this._$Em=o;const a=s.fromAttribute(r,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,r,n,o=!1,i){if(t!==void 0){const s=this.constructor;if(o===!1&&(i=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Hf)(i,r)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,i]of n){const{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Li.elementStyles=[],Li.shadowRootOptions={mode:"open"},Li[ma("elementProperties")]=new Map,Li[ma("finalized")]=new Map,dD?.({ReactiveElement:Li}),(Ll.reactiveElementVersions??=[]).push("2.1.2");const Jf=globalThis,F0=e=>e,cl=Jf.trustedTypes,S0=cl?cl.createPolicy("lit-html",{createHTML:e=>e}):void 0,Vb="$lit$",po=`lit$${Math.random().toFixed(9).slice(2)}$`,zb="?"+po,fD=`<${zb}>`,ii=document,Ta=()=>ii.createComment(""),Ma=e=>e===null||typeof e!="object"&&typeof e!="function",Yf=Array.isArray,mD=e=>Yf(e)||typeof e?.[Symbol.iterator]=="function",zc=`[ 	
\f\r]`,Js=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T0=/-->/g,M0=/>/g,qo=RegExp(`>|${zc}(?:([^\\s"'>=/]+)(${zc}*=${zc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),P0=/'/g,N0=/"/g,qb=/^(?:script|style|textarea|title)$/i,hD=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),gD=hD(1),Cr=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),I0=new WeakMap,Yo=ii.createTreeWalker(ii,129);function Wb(e,t){if(!Yf(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return S0!==void 0?S0.createHTML(t):t}const pD=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=Js;for(let a=0;a<r;a++){const u=e[a];let l,c,d=-1,f=0;for(;f<u.length&&(s.lastIndex=f,c=s.exec(u),c!==null);)f=s.lastIndex,s===Js?c[1]==="!--"?s=T0:c[1]!==void 0?s=M0:c[2]!==void 0?(qb.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=qo):c[3]!==void 0&&(s=qo):s===qo?c[0]===">"?(s=o??Js,d=-1):c[1]===void 0?d=-2:(d=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?qo:c[3]==='"'?N0:P0):s===N0||s===P0?s=qo:s===T0||s===M0?s=Js:(s=qo,o=void 0);const m=s===qo&&e[a+1].startsWith("/>")?" ":"";i+=s===Js?u+fD:d>=0?(n.push(l),u.slice(0,d)+Vb+u.slice(d)+po+m):u+po+(d===-2?a:m)}return[Wb(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Pa{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const a=t.length-1,u=this.parts,[l,c]=pD(t,r);if(this.el=Pa.createElement(l,n),Yo.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Yo.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Vb)){const f=c[s++],m=o.getAttribute(d).split(po),v=/([.?@])?(.*)/.exec(f);u.push({type:1,index:i,name:v[2],strings:m,ctor:v[1]==="."?bD:v[1]==="?"?vD:v[1]==="@"?wD:jl}),o.removeAttribute(d)}else d.startsWith(po)&&(u.push({type:6,index:i}),o.removeAttribute(d));if(qb.test(o.tagName)){const d=o.textContent.split(po),f=d.length-1;if(f>0){o.textContent=cl?cl.emptyScript:"";for(let m=0;m<f;m++)o.append(d[m],Ta()),Yo.nextNode(),u.push({type:2,index:++i});o.append(d[f],Ta())}}}else if(o.nodeType===8)if(o.data===zb)u.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(po,d+1))!==-1;)u.push({type:7,index:i}),d+=po.length-1}i++}}static createElement(t,r){const n=ii.createElement("template");return n.innerHTML=t,n}}function us(e,t,r=e,n){if(t===Cr)return t;let o=n!==void 0?r._$Co?.[n]:r._$Cl;const i=Ma(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=o:r._$Cl=o),o!==void 0&&(t=us(e,o._$AS(e,t.values),o,n)),t}class yD{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=(t?.creationScope??ii).importNode(r,!0);Yo.currentNode=o;let i=Yo.nextNode(),s=0,a=0,u=n[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new Ss(i,i.nextSibling,this,t):u.type===1?l=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(l=new $D(i,this,t)),this._$AV.push(l),u=n[++a]}s!==u?.index&&(i=Yo.nextNode(),s++)}return Yo.currentNode=ii,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Ss{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=us(this,t,r),Ma(t)?t===Q||t==null||t===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==Cr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):mD(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&Ma(this._$AH)?this._$AA.nextSibling.data=t:this.T(ii.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Pa.createElement(Wb(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{const i=new yD(o,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(t){let r=I0.get(t.strings);return r===void 0&&I0.set(t.strings,r=new Pa(t)),r}k(t){Yf(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Ss(this.O(Ta()),this.O(Ta()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=F0(t).nextSibling;F0(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class jl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Q}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=us(this,t,r,0),s=!Ma(t)||t!==this._$AH&&t!==Cr,s&&(this._$AH=t);else{const a=t;let u,l;for(t=i[0],u=0;u<i.length-1;u++)l=us(this,a[n+u],r,u),l===Cr&&(l=this._$AH[u]),s||=!Ma(l)||l!==this._$AH[u],l===Q?t=Q:t!==Q&&(t+=(l??"")+i[u+1]),this._$AH[u]=l}s&&!o&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class bD extends jl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class vD extends jl{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class wD extends jl{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=us(this,t,r,0)??Q)===Cr)return;const n=this._$AH,o=t===Q&&n!==Q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==Q&&(n===Q||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class $D{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){us(this,t)}}const kD={I:Ss},DD=Jf.litHtmlPolyfillSupport;DD?.(Pa,Ss),(Jf.litHtmlVersions??=[]).push("3.3.2");const xD=(e,t,r)=>{const n=r?.renderBefore??t;let o=n._$litPart$;if(o===void 0){const i=r?.renderBefore??null;n._$litPart$=o=new Ss(t.insertBefore(Ta(),i),i,void 0,r??{})}return o._$AI(e),o};const Xf=globalThis;let ha=class extends Li{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xD(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Cr}};ha._$litElement$=!0,ha.finalized=!0,Xf.litElementHydrateSupport?.({LitElement:ha});const AD=Xf.litElementPolyfillSupport;AD?.({LitElement:ha});(Xf.litElementVersions??=[]).push("4.2.2");function Qf({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function ED({onElement:e,forCssVar:t,includeCascade:r}){return(r?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(t.name)).trim()}var _n;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(_n||(_n={}));var O0;(function(e){e.Space="+",e.Comma="#"})(O0||(O0={}));function Zr(e){return Kt(e,(r,n)=>{CD(r);const o=n,i=T.isString(o)||T.isNumber(o)||o instanceof Cn?String(o):String(o.default),s=T.isString(o)||T.isNumber(o)||o instanceof Cn?String(o):String(o.initialValue||o.default),a=Je(or({value:r.replace(/^-+/,""),prefix:"--"})),u={name:a,value:_b`var(${a})`,syntax:T.isString(o)||T.isNumber(o)||o instanceof Cn?_n.Any:Vd(o.syntax),default:i},l=String(u.name);if(!s)throw new Error(`Initial value for CSS var ${l} cannot be empty.`);return Ub.registerProperty({inherits:!0,name:l,initialValue:s,syntax:u.syntax})&&globalThis.document?.documentElement&&Qf({forCssVar:u,onElement:globalThis.document.documentElement,toValue:i}),u})}function CD(e){try{if(T.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(t){throw new Error(fi("Invalid CSS var name.",t,`Got '${y(e)}'`))}}function Vd(e){return e?T.isString(e)?e:e.union?e.union.map(t=>Vd(t)).join(" | "):e.list?`${Vd(e.list.values)}${e.list.separator}`:e.raw:_n.Any}const ke=Zr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),FD={nav:{hover:{background:ke["element-book-nav-hover-background-color"],foreground:ke["element-book-nav-hover-foreground-color"]},active:{background:ke["element-book-nav-active-background-color"],foreground:ke["element-book-nav-active-foreground-color"]},selected:{background:ke["element-book-nav-selected-background-color"],foreground:ke["element-book-nav-selected-foreground-color"]}},accent:{icon:ke["element-book-accent-icon-color"]},page:{background:ke["element-book-page-background-color"],backgroundFaint1:ke["element-book-page-background-faint-level-1-color"],backgroundFaint2:ke["element-book-page-background-faint-level-2-color"],foreground:ke["element-book-page-foreground-color"],foregroundFaint1:ke["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:ke["element-book-page-foreground-faint-level-2-color"]}};function SD(e,t){Kb(e,t,FD)}function zd(e){return T.hasKey(e,"_$cssResult$")}function B0(e){return T.hasKeys(e,["name","value","default"])&&T.isString(e.default)&&zd(e.name)&&zd(e.value)}function Kb(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(zd(o)){if(!B0(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Qf({forCssVar:i,onElement:e,toValue:String(o)})}else{if(B0(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Kb(e,o,i)}})}function ia(e,t){let r=e.length,n,o,i=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,i=!0),Array.isArray(t[0])?o=t:(o=t.length>0?t.map(c=>[c]):[[]],s=!0);let a=o[0].length,u=o[0].map((c,d)=>o.map(f=>f[d])),l=n.map(c=>u.map(d=>{let f=0;if(!Array.isArray(c)){for(let m of d)f+=c*m;return f}for(let m=0;m<c.length;m++)f+=c[m]*(d[m]||0);return f}));return r===1&&i&&(l=l[0]),a===1&&s?r===1&&i?l[0]:l.map(c=>c[0]):l}function qc(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function tt(e,t,r=[0,0,0]){const n=qc(e,t[0]),o=qc(e,t[1]),i=qc(e,t[2]);return r[0]=n,r[1]=o,r[2]=i,r}function Ts(e){return wo(e)==="string"}function wo(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function em(e,{precision:t=16,unit:r}){return xe(e)?"none":(e=+tm(e,t),e+(r??""))}function xe(e){return e===null}function ft(e){return xe(e)?0:e}function tm(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const o=10**(t-n);return Math.floor(e*o+.5)/o}function Na(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Gb(e,t,r){return(r-e)/(t-e)}function qd(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:Na(t[0],t[1],Gb(e[0],e[1],r))}function Ul(e,t,r){return Math.max(Math.min(r,t),e)}function _l(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function mt(e,t){return _l(Math.abs(e)**t,e)}function rm(e,t){return t===0?0:e/t}function Zb(e,t,r=0,n=e.length){for(;r<n;){const o=r+n>>1;e[o]<t?r=o+1:n=o}return r}function ls(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),o=n?.constructor?.name;if(o===r)return!0;if(!o||o==="Object")return!1;e=n}return!1}var TD=Object.freeze({__proto__:null,bisectLeft:Zb,clamp:Ul,copySign:_l,interpolate:Na,interpolateInv:Gb,isInstance:ls,isNone:xe,isString:Ts,mapRange:qd,multiplyMatrices:ia,multiply_v3_m3x3:tt,serializeNumber:em,skipNone:ft,spow:mt,toPrecision:tm,type:wo,zdiv:rm});class MD{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const xo=new MD;var Fr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};let R0=class{type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:o,max:i}=n.groups;(o||i)&&(this.range=[+o,+i])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),qd(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return t=qd(this.coordRange,n,t),em(t,{unit:o,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return ls(t,this)?t:new this(t,r)}};const Wc=Symbol("instance");class dl{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Wc]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let o=["<number>","<percentage>"];return n.type==="angle"&&o.push("<angle>"),o})),this.coords=this.coords.map((n,o)=>{let i=this.spaceCoords[o];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>R0.get(s,i))}))}serializeCoords(t,r,n){return n=t.map((o,i)=>R0.get(n?.[i]??this.coords[i][0],this.spaceCoords[i])),t.map((o,i)=>n[i].serialize(o,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,o],i)=>{let s=t[i];if(xe(s)||isNaN(s))return s;let a=r[i],u=this.coords[i].find(l=>l.type==a);if(!u){let l=o.name||n;throw new TypeError(`${a??s?.raw??s} not allowed for ${l} in ${this.name}()`)}return s=u.resolve(s),u.range&&(r[i]=u.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||ls(t,this)?t:t[Wc]?t[Wc]:new dl(t,...r)}}const nr={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Wd(e){return Array.isArray(e)?e:nr[e]}function fl(e,t,r,n={}){if(e=Wd(e),t=Wd(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(xo.run("chromatic-adaptation-start",o),o.M||(o.W1===nr.D65&&o.W2===nr.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===nr.D50&&o.W2===nr.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),xo.run("chromatic-adaptation-end",o),o.M)return tt(o.XYZ,o.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Hb(e,t){let r={str:String(e)?.trim(),options:t};if(xo.run("parse-start",r),r.color)return r.color;r.parsed=ND(r.str);let n,o=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let i=r.parsed.name,s,a,u=r.parsed.args,l=u.map((f,m)=>r.parsed.argMeta[m]?.type);if(i==="color"){let f=u.shift();l.shift();let m=f.startsWith("--")?f.substring(2):`--${f}`,v=[f,m];if(s=_.findFormat({name:i,id:v,type:"function"}),!s){let $,k=f in _.registry?f:m;if(k in _.registry){let D=_.registry[k].formats?.color?.id;D&&($=`Did you mean ${e.replace("color("+f,"color("+D)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+($??"Missing a plugin?"))}a=s.space,s.id.startsWith("--")&&!f.startsWith("--")&&Fr.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${f}).`),f.startsWith("--")&&!s.id.startsWith("--")&&Fr.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${f}).`)}else s=_.findFormat({name:i,type:"function"}),a=s.space;o&&Object.assign(o,{format:s,formatId:s.name,types:l,commas:r.parsed.commas});let c=1;r.parsed.lastAlpha&&(c=r.parsed.args.pop(),o&&(o.alphaType=l.pop()));let d=s.coords.length;if(u.length!==d)throw new TypeError(`Expected ${d} coordinates for ${a.id} in ${r.str}), got ${u.length}`);u=s.coerceCoords(u,l),n={spaceId:a.id,coords:u,alpha:c}}else e:for(let i of _.all)for(let s in i.formats){let a=i.formats[s];if(a.type!=="custom"||a.test&&!a.test(r.str))continue;let u=i.getFormat(a),l=u.parse(r.str);if(l){o&&Object.assign(o,{format:u,formatId:s}),n=l;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=xe(n.alpha)?n.alpha:n.alpha===void 0?1:Ul(0,n.alpha,1),n}const Jb={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},ml={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Jb).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function PD(e){let t={},r=e.match(ml.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*Jb[r]):ml.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}function ND(e){if(!e)return;e=e.trim();let t=e.match(ml.function);if(t){let r=[],n=[],o=!1,i=t[1].toLowerCase(),s=t[2].replace(ml.singleArgument,(a,u)=>{let{value:l,meta:c}=PD(u);return(a.startsWith("/")||i!=="color"&&r.length===3)&&(o=!0),r.push(l),n.push(c),""});return{name:i,args:r,argMeta:n,lastAlpha:o,commas:s.includes(","),rawName:t[1],rawArgs:t[2]}}}function X(e,t){if(Array.isArray(e))return e.map(n=>X(n,t));if(!e)throw new TypeError("Empty color reference");Ts(e)&&(e=Hb(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=_.get(r)),e.alpha===void 0&&(e.alpha=1),e}const ID=75e-6;class _{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?_.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let o in r)"name"in r[o]||(r[o].name=o);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Wd(n),this.formats=t.formats??{};for(let o in this.formats){let i=this.formats[o];i.type||="function",i.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:_.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,i)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:OD(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),xo.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=ID}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let s=n[i];if(s.type!=="angle"&&s.range){if(xe(o))return!0;let[a,u]=s.range;return(a===void 0||o>=a-r)&&(u===void 0||o<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=dl.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=X(t);[t,r]=[a.space,a.coords]}if(t=_.get(t),this.equals(t))return r;r=r.map(a=>xe(a)?0:a);let n=this.path,o=t.path,i,s;for(let a=0;a<n.length&&n[a].equals(o[a]);a++)i=n[a],s=a;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<o.length;a++)r=o[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=X(t);[t,r]=[n.space,n.coords]}return t=_.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push(o?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(_.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||ls(t,this))return t;if(wo(t)==="string"){let o=_.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return _.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=_.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[o,i]of Object.entries(n.formats)){i.name??=o,i.type??="function";let s=(!t.name||i.name===t.name)&&(!t.type||i.type===t.type);if(t.id){let a=i.ids||[i.id],u=Array.isArray(t.id)?t.id:[t.id];s&&=u.some(l=>a.includes(l))}if(s){let a=dl.get(i,n);return a!==i&&(n.formats[i.name]=a),a}}return null}static resolveCoord(t,r){let n=wo(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=_.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=wo(i),n==="number"||n==="string"&&i>=0){let u=Object.entries(o.coords)[i];if(u)return{space:o,id:u[0],index:i,...u[1]}}o=_.get(o);let s=i.toLowerCase(),a=0;for(let u in o.coords){let l=o.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:o,id:u,index:a,...l};a++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function OD(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Bt=new _({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Zt extends _{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Bt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=tt(r,t.toXYZ_M);return this.white!==this.base.white&&(n=fl(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=fl(this.base.white,this.white,r),tt(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function Yb(e,t={}){if(Array.isArray(e))return e.map(u=>Yb(u,t));let{cssProperty:r="background-color",element:n,...o}=t,i=null;try{return X(e,o)}catch(u){i=u}let{CSS:s,getComputedStyle:a}=globalThis;if(Ts(e)&&n&&s&&a&&s.supports(r,e)){let u=n.style[r];e!==u&&(n.style[r]=e);let l=a(n).getPropertyValue(r);if(e!==u&&(n.style[r]=u),l!==e)try{return X(l,o)}catch(c){i=c}else i={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=i),null}function Ya(e,t){e=X(e);let r=_.get(t,t?.space),n=t?.precision,o;return!r||e.space.equals(r)?o=e.coords.slice():o=r.from(e),n===void 0?o:o.map(i=>tm(i,n))}function Dr(e,t){if(e=X(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=_.resolveCoord(t,e.space);return Ya(e,r)[n]}function nm(e,t,r,n){return e=X(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=_.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}nm.returns="color";function Qn(e,t,r){if(e=X(e),arguments.length===2&&wo(arguments[1])==="object"){let n=arguments[1];for(let o in n)Qn(e,o,n[o])}else if(typeof r=="function"&&(r=r(Dr(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:o}=_.resolveCoord(t,e.space),i=Ya(e,n);i[o]=r,nm(e,n,i)}return e}Qn.returns="color";var om=new _({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Bt,fromBase:e=>fl(Bt.white,"D50",e),toBase:e=>fl("D50",Bt.white,e)});const BD=216/24389,L0=24/116,xu=24389/27;let Kc=nr.D50;var xr=new _({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Kc,base:om,fromBase(e){let r=e.map((s,a)=>s/Kc[a]).map(s=>s>BD?Math.cbrt(s):(xu*s+16)/116),n=116*r[1]-16,o=500*(r[0]-r[1]),i=200*(r[1]-r[2]);return[n,o,i]},toBase(e){let[t,r,n]=e,o=[];return o[1]=(t+16)/116,o[0]=r/500+o[1],o[2]=o[1]-n/200,[o[0]>L0?Math.pow(o[0],3):(116*o[0]-16)/xu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/xu,o[2]>L0?Math.pow(o[2],3):(116*o[2]-16)/xu].map((s,a)=>s*Kc[a])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Hr(e){return typeof e!="number"?e:(e%360+360)%360}function Xb(e,t){let[r,n]=t,o=xe(r),i=xe(n);if(o&&i)return[r,n];if(o?r=n:i&&(n=r),e==="raw")return t;r=Hr(r),n=Hr(n);let s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var Sr=new _({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:xr,fromBase(e){if(this.ε===void 0){let a=Object.values(this.base.coords)[1].refRange,u=a[1]-a[0];this.ε=u/1e5}let[t,r,n]=e,o=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,i=o?null:Hr(Math.atan2(n,r)*180/Math.PI),s=o?0:Math.sqrt(r**2+n**2);return[t,s,i]},toBase(e){let[t,r,n]=e,o=null,i=null;return xe(n)||(r=r<0?0:r,o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const j0=25**7,hl=Math.PI,U0=180/hl,Pi=hl/180;function _0(e){const t=e*e;return t*t*t*e}function Qb(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){[e,t]=X([e,t]);let[i,s,a]=xr.from(e),u=Sr.from(xr,[i,s,a])[1],[l,c,d]=xr.from(t),f=Sr.from(xr,[l,c,d])[1];u<0&&(u=0),f<0&&(f=0);let m=(u+f)/2,v=_0(m),$=.5*(1-Math.sqrt(v/(v+j0))),k=(1+$)*s,D=(1+$)*c,E=Math.sqrt(k**2+a**2),P=Math.sqrt(D**2+d**2),O=k===0&&a===0?0:Math.atan2(a,k),z=D===0&&d===0?0:Math.atan2(d,D);O<0&&(O+=2*hl),z<0&&(z+=2*hl),O*=U0,z*=U0;let ie=l-i,Me=P-E,pe=z-O,Ue=O+z,xt=Math.abs(pe),Pt;E*P===0?Pt=0:xt<=180?Pt=pe:pe>180?Pt=pe-360:pe<-180?Pt=pe+360:Fr.warn("the unthinkable has happened");let vr=2*Math.sqrt(P*E)*Math.sin(Pt*Pi/2),wn=(i+l)/2,en=(E+P)/2,Ro=_0(en),Jt;E*P===0?Jt=Ue:xt<=180?Jt=Ue/2:Ue<360?Jt=(Ue+360)/2:Jt=(Ue-360)/2;let Ei=(wn-50)**2,Ci=1+.015*Ei/Math.sqrt(20+Ei),io=1+.045*en,Yt=1;Yt-=.17*Math.cos((Jt-30)*Pi),Yt+=.24*Math.cos(2*Jt*Pi),Yt+=.32*Math.cos((3*Jt+6)*Pi),Yt-=.2*Math.cos((4*Jt-63)*Pi);let _e=1+.015*en*Yt,Xt=30*Math.exp(-1*((Jt-275)/25)**2),Mn=2*Math.sqrt(Ro/(Ro+j0)),Rr=-1*Math.sin(2*Xt*Pi)*Mn,$n=(ie/(r*Ci))**2;return $n+=(Me/(n*io))**2,$n+=(vr/(o*_e))**2,$n+=Rr*(Me/(n*io))*(vr/(o*_e)),Math.sqrt($n)}const RD=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],LD=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],jD=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],$o=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var dn=new _({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Bt,fromBase(e){let t=tt(e,RD);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),tt(t,jD,t)},toBase(e){let t=tt(e,$o);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,tt(t,LD,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Kd(e,t){[e,t]=X([e,t]);let[r,n,o]=dn.from(e),[i,s,a]=dn.from(t),u=r-i,l=n-s,c=o-a;return Math.sqrt(u**2+l**2+c**2)}const UD=75e-6;function ri(e,t,{epsilon:r=UD}={}){e=X(e),t||(t=e.space),t=_.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function cs(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function e1(e,t,r="lab"){r=_.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,s,a)=>{let u=o[a];return xe(s)||xe(u)?i:i+(u-s)**2},0))}function _D(e,t){return e1(e,t,"lab")}const VD=Math.PI,V0=VD/180;function zD(e,t,{l:r=2,c:n=1}={}){[e,t]=X([e,t]);let[o,i,s]=xr.from(e),[,a,u]=Sr.from(xr,[o,i,s]),[l,c,d]=xr.from(t),f=Sr.from(xr,[l,c,d])[1];a<0&&(a=0),f<0&&(f=0);let m=o-l,v=a-f,$=i-c,k=s-d,D=$**2+k**2-v**2,E=.511;o>=16&&(E=.040975*o/(1+.01765*o));let P=.0638*a/(1+.0131*a)+.638,O;xe(u)&&(u=0),u>=164&&u<=345?O=.56+Math.abs(.2*Math.cos((u+168)*V0)):O=.36+Math.abs(.4*Math.cos((u+35)*V0));let z=Math.pow(a,4),ie=Math.sqrt(z/(z+1900)),Me=P*(ie*O+1-ie),pe=(m/(r*E))**2;return pe+=(v/(n*P))**2,pe+=D/Me**2,Math.sqrt(pe)}const z0=203;var im=new _({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Bt,fromBase(e){return e.map(t=>t*z0)},toBase(e){return e.map(t=>t/z0)}});const Au=1.15,Eu=.66,q0=2610/2**14,qD=2**14/2610,W0=3424/2**12,K0=2413/2**7,G0=2392/2**7,WD=1.7*2523/2**5,Z0=2**5/(1.7*2523),Cu=-.56,Gc=16295499532821565e-27,KD=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],GD=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ZD=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],HD=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var t1=new _({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:im,fromBase(e){let[t,r,n]=e,o=Au*t-(Au-1)*n,i=Eu*r-(Eu-1)*t,a=tt([o,i,n],KD).map(function(f){let m=W0+K0*mt(f/1e4,q0),v=1+G0*mt(f/1e4,q0);return mt(m/v,WD)}),[u,l,c]=tt(a,ZD);return[(1+Cu)*u/(1+Cu*u)-Gc,l,c]},toBase(e){let[t,r,n]=e,o=(t+Gc)/(1+Cu-Cu*(t+Gc)),s=tt([o,r,n],HD).map(function(f){let m=W0-mt(f,Z0),v=G0*mt(f,Z0)-K0;return 1e4*mt(m/v,qD)}),[a,u,l]=tt(s,GD),c=(a+(Au-1)*l)/Au,d=(u+(Eu-1)*c)/Eu;return[c,d,l]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),Gd=new _({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:t1,fromBase:Sr.fromBase,toBase:Sr.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function JD(e,t){[e,t]=X([e,t]);let[r,n,o]=Gd.from(e),[i,s,a]=Gd.from(t),u=r-i,l=n-s;xe(o)&&xe(a)?(o=0,a=0):xe(o)?o=a:xe(a)&&(a=o);let c=o-a,d=2*Math.sqrt(n*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+d**2)}const r1=3424/4096,n1=2413/128,o1=2392/128,H0=2610/16384,YD=2523/32,XD=16384/2610,J0=32/2523,QD=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],ex=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],tx=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],rx=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Zd=new _({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:im,fromBase(e){let t=tt(e,QD);return nx(t)},toBase(e){let t=ox(e);return tt(t,rx)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function nx(e){let t=e.map(function(r){let n=r1+n1*(r/1e4)**H0,o=1+o1*(r/1e4)**H0;return(n/o)**YD});return tt(t,ex)}function ox(e){return tt(e,tx).map(function(n){let o=Math.max(n**J0-r1,0),i=n1-o1*n**J0;return 1e4*(o/i)**XD})}function ix(e,t){[e,t]=X([e,t]);let[r,n,o]=Zd.from(e),[i,s,a]=Zd.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-s)**2+(o-a)**2)}function sx(e,t){[e,t]=X([e,t]);let r=2,[n,o,i]=dn.from(e),[s,a,u]=dn.from(t),l=n-s,c=r*(o-a),d=r*(i-u);return Math.sqrt(l**2+c**2+d**2)}const ax=nr.D65,i1=.42,Y0=1/i1,Zc=2*Math.PI,s1=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],ux=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],lx=[[460,451,288],[460,-891,-261],[460,-220,-6300]],cx={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Ko={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},dx=180/Math.PI,X0=Math.PI/180;function a1(e,t){return e.map(n=>{const o=mt(t*Math.abs(n)*.01,i1);return 400*_l(o,n)/(o+27.13)})}function fx(e,t){const r=100/t*27.13**Y0;return e.map(n=>{const o=Math.abs(n);return _l(r*mt(o/(400-o),Y0),n)})}function mx(e){let t=Hr(e);t<=Ko.h[0]&&(t+=360);const r=Zb(Ko.h,t)-1,[n,o]=Ko.h.slice(r,r+2),[i,s]=Ko.e.slice(r,r+2),a=Ko.H[r],u=(t-n)/i;return a+100*u/(u+(o-t)/s)}function hx(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,o]=Ko.h.slice(r,r+2),[i,s]=Ko.e.slice(r,r+2);return Hr((t*(s*n-i*o)-100*n*s)/(t*(s-i)-100*s))}function u1(e,t,r,n,o){const i={};i.discounting=o,i.refWhite=e,i.surround=n;const s=e.map(k=>k*100);i.la=t,i.yb=r;const a=s[1],u=tt(s,s1);let l=cx[i.surround];const c=l[0];i.c=l[1],i.nc=l[2];const f=(1/(5*i.la+1))**4;i.fl=f*i.la+.1*(1-f)*(1-f)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/a,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const m=Math.max(Math.min(c*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=u.map(k=>Na(1,a/k,m)),i.dRgbInv=i.dRgb.map(k=>1/k);const v=u.map((k,D)=>k*i.dRgb[D]),$=a1(v,i.fl);return i.aW=i.nbb*(2*$[0]+$[1]+.05*$[2]),i}const Q0=u1(ax,64/Math.PI*.2,20,"average",!1);function Hd(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Hr(e.h)*X0:r=hx(e.H)*X0;const n=Math.cos(r),o=Math.sin(r);let i=0;e.J!==void 0?i=mt(e.J,1/2)*.1:e.Q!==void 0&&(i=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/i:e.M!==void 0?s=e.M/t.flRoot/i:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=mt(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*mt(i,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,d=l/t.nbb,f=23*(d+.305)*rm(a,23*c+a*(11*n+108*o)),m=f*n,v=f*o,$=fx(tt([d,m,v],lx).map(k=>k*1/1403),t.fl);return tt($.map((k,D)=>k*t.dRgbInv[D]),ux).map(k=>k/100)}function l1(e,t){const r=e.map(P=>P*100),n=a1(tt(r,s1).map((P,O)=>P*t.dRgb[O]),t.fl),o=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(i,o)%Zc+Zc)%Zc,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*rm(a*Math.sqrt(o**2+i**2),n[0]+n[1]+1.05*n[2]+.305),l=mt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),d=mt(c/t.aW,.5*t.c*t.z),f=100*mt(d,2),m=4/t.c*d*(t.aW+4)*t.flRoot,v=l*d,$=v*t.flRoot,k=Hr(s*dx),D=mx(k),E=50*mt(t.c*l/(t.aW+4),1/2);return{J:f,C:v,h:k,s:E,Q:m,M:$,H:D}}var gx=new _({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Bt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=l1(e,Q0),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return Hd({J:e[0],M:e[1],h:e[2]},Q0)}});const px=nr.D65,yx=216/24389,c1=24389/27;function bx(e){return 116*(e>yx?Math.cbrt(e):(c1*e+16)/116)-16}function Jd(e){return e>8?Math.pow((e+16)/116,3):e/c1}function vx(e,t){let[r,n,o]=e,i=[],s=0;if(o===0)return[0,0,0];let a=Jd(o);o>0?s=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:s=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;const u=2e-12,l=15;let c=0,d=1/0;for(;c<=l;){i=Hd({J:s,C:n,h:r},t);const f=Math.abs(i[1]-a);if(f<d){if(f<=u)return i;d=f}s=s-(i[1]-a)*s/(2*i[1]),c+=1}return Hd({J:s,C:n,h:r},t)}function wx(e,t){const r=bx(e[1]);if(r===0)return[0,0,0];const n=l1(e,sm);return[Hr(n.h),n.C,r]}const sm=u1(px,200/Math.PI*Jd(50),Jd(50)*100,"average",!1);var Ia=new _({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Bt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=wx(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return vx(e,sm)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const $x=Math.PI/180,eg=[1,.007,.0228];function tg(e){e[1]<0&&(e=Ia.fromBase(Ia.toBase(e)));const t=Math.log(Math.max(1+eg[2]*e[1]*sm.flRoot,1))/eg[2],r=e[0]*$x,n=t*Math.cos(r),o=t*Math.sin(r);return[e[2],n,o]}function kx(e,t){[e,t]=X([e,t]);let[r,n,o]=tg(Ia.from(e)),[i,s,a]=tg(Ia.from(t));return Math.sqrt((r-i)**2+(n-s)**2+(o-a)**2)}var ds={deltaE76:_D,deltaECMC:zD,deltaE2000:Qb,deltaEJz:JD,deltaEITP:ix,deltaEOK:Kd,deltaEOK2:sx,deltaEHCT:kx};function Dx(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const rg={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Ao(e,{method:t=Fr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:i=void 0}={}){if(e=X(e),Ts(arguments[1])?r=arguments[1]:r||(r=e.space),r=_.get(r),ri(e,r,{epsilon:0}))return e;let s;if(t==="css")s=xx(e,{space:r});else{if(t!=="clip"&&!ri(e,r)){Object.prototype.hasOwnProperty.call(rg,t)&&({method:t,jnd:o,deltaEMethod:n,blackWhiteClamp:i}=rg[t]);let a=Qb;if(n!==""){for(let l in ds)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=ds[l];break}}o===0&&(o=1e-16);let u=Ao(Oe(e,r),{method:"clip",space:r});if(a(e,u)>o){if(i&&Object.keys(i).length===3){let E=_.resolveCoord(i.channel),P=Dr(Oe(e,E.space),E.id);if(xe(P)&&(P=0),P>=i.max)return Oe({space:"xyz-d65",coords:nr.D65},e.space);if(P<=i.min)return Oe({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=_.resolveCoord(t),c=l.space,d=l.id,f=Oe(e,c);f.coords.forEach((E,P)=>{xe(E)&&(f.coords[P]=0)});let v=(l.range||l.refRange)[0],$=Dx(o),k=v,D=Dr(f,d);for(;D-k>$;){let E=cs(f);E=Ao(E,{space:r,method:"clip"}),a(f,E)-o<$?k=Dr(f,d):D=Dr(f,d),Qn(f,d,(k+D)/2)}s=Oe(f,r)}else s=u}else s=Oe(e,r);if(t==="clip"||!ri(s,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,d]=a[l];return c!==void 0&&(u=Math.max(c,u)),d!==void 0&&(u=Math.min(u,d)),u})}}return r!==e.space&&(s=Oe(s,e.space)),e.coords=s.coords,e}Ao.returns="color";const ng={WHITE:{space:dn,coords:[1,0,0],alpha:1},BLACK:{space:dn,coords:[0,0,0],alpha:1}};function xx(e,{space:t}={}){e=X(e),t||(t=e.space),t=_.get(t);const o=_.get("oklch");if(t.isUnbounded)return Oe(e,t);const i=Oe(e,o);let s=i.coords[0];if(s>=1){const v=Oe(ng.WHITE,t);return v.alpha=e.alpha,Oe(v,t)}if(s<=0){const v=Oe(ng.BLACK,t);return v.alpha=e.alpha,Oe(v,t)}if(ri(i,t,{epsilon:0}))return Oe(i,t);function a(v){const $=Oe(v,t),k=Object.values(t.coords);return $.coords=$.coords.map((D,E)=>{if("range"in k[E]){const[P,O]=k[E].range;return Ul(P,D,O)}return D}),$}let u=0,l=i.coords[1],c=!0,d=cs(i),f=a(d),m=Kd(f,d);if(m<.02)return f;for(;l-u>1e-4;){const v=(u+l)/2;if(d.coords[1]=v,c&&ri(d,t,{epsilon:0}))u=v;else if(f=a(d),m=Kd(f,d),m<.02){if(.02-m<1e-4)break;c=!1,u=v}else l=v}return f}function Oe(e,t,{inGamut:r}={}){e=X(e),t=_.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Ao(o,r===!0?void 0:r)),o}Oe.returns="color";function ga(e,t={}){let{precision:r=Fr.precision,format:n,inGamut:o=!0,coords:i,alpha:s,commas:a}=t,u,l=X(e),c=n,d=l.parseMeta;d&&!n&&(d.format.canSerialize()&&(n=d.format,c=d.formatId),i??=d.types,s??=d.alphaType,a??=d.commas),c&&(n=l.space.getFormat(n)??_.findFormat(c)),n||(n=l.space.getFormat("default")??_.DEFAULT_FORMAT,c=n.name),n&&n.space&&n.space!==l.space&&(l=Oe(l,n.space));let f=l.coords.slice();if(o||=n.toGamut,o&&!ri(l)&&(f=Ao(cs(l),o===!0?void 0:o).coords),n.type==="custom")if(n.serialize)u=n.serialize(f,l.alpha,t);else throw new TypeError(`format ${c} can only be used to parse colors, not for serialization`);else{let m=n.name||"color",v=n.serializeCoords(f,r,i);if(m==="color"){let P=n.id||n.ids?.[0]||l.space.cssId||l.space.id;v.unshift(P)}let $=l.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let k=s?.type??"<number>",D=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&$<1,E="";if(a??=n.commas,D){if(r!==null){let P;k==="<percentage>"&&(P="%",$*=100),$=em($,{precision:r,unit:P})}E=`${a?",":" /"} ${$}`}u=`${m}(${v.join(a?", ":" ")}${E})`}return u}const Ax=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Ex=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Oa=new Zt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Ax,fromXYZ_M:Ex}),d1=new Zt({id:"rec2020",name:"REC.2020",base:Oa,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const Cx=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Fx=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var f1=new Zt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Cx,fromXYZ_M:Fx});const Sx=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Dt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var m1=new Zt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Sx,fromXYZ_M:Dt}),og={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ig=Array(3).fill("<percentage> | <number>[0, 255]"),sg=Array(3).fill("<number>[0, 255]");var si=new Zt({id:"srgb",name:"sRGB",base:m1,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:ig},rgb_number:{name:"rgb",commas:!0,coords:sg,alpha:!1},color:{},rgba:{coords:ig,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:sg},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let o=r&&e.every(s=>s%17===0);return"#"+e.map(s=>o?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=og.black,t.alpha=0):t.coords=og[e],t.coords)return t}}}}),h1=new Zt({id:"p3",cssId:"display-p3",name:"P3",base:f1,fromBase:si.fromBase,toBase:si.toBase});Fr.display_space=si;let Tx;if(typeof CSS<"u"&&CSS.supports)for(let e of[xr,d1,h1]){let t=e.getMinCoords(),n=ga({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Fr.display_space=e;break}}function Mx(e,{space:t=Fr.display_space,...r}={}){e=X(e);let n=ga(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Fr.display_space)n=new String(n),n.color=e;else{let o=e;if((e.coords.some(xe)||xe(e.alpha))&&!(Tx??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=cs(e),o.coords=o.coords.map(ft),o.alpha=ft(o.alpha),n=ga(o,r),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=Oe(o,t),n=new String(ga(o,r)),n.color=o}return n}function Px(e,t,{space:r,hue:n="shorter"}={}){e=X(e),r||=e.space,r=_.get(r);let o=Object.values(r.coords);[e,t]=[e,t].map(l=>Oe(l,r));let[i,s]=[e,t].map(l=>l.coords),a=i.map((l,c)=>{let d=o[c],f=s[c];return d.type==="angle"&&([l,f]=Xb(n,[l,f])),ag(l,f)}),u=ag(e.alpha,t.alpha);return{space:r,coords:a,alpha:u}}function ag(e,t){return xe(e)||xe(t)?e===t?null:0:e-t}function Nx(e,t){return e=X(e),t=X(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Eo(e){return Dr(e,[Bt,"y"])}function g1(e,t){Qn(e,[Bt,"y"],t)}function Ix(e){Object.defineProperty(e.prototype,"luminance",{get(){return Eo(this)},set(t){g1(this,t)}})}var Ox=Object.freeze({__proto__:null,getLuminance:Eo,register:Ix,setLuminance:g1});function Bx(e,t){e=X(e),t=X(t);let r=Math.max(Eo(e),0),n=Math.max(Eo(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Rx=.56,Lx=.57,jx=.62,Ux=.65,ug=.022,_x=1.414,Vx=.1,zx=5e-4,qx=1.14,lg=.027,Wx=1.14;function cg(e){return e>=ug?e:e+(ug-e)**_x}function Ni(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Kx(e,t){t=X(t),e=X(e);let r,n,o,i,s,a;t=Oe(t,"srgb"),[i,s,a]=t.coords.map(m=>xe(m)?0:m);let u=Ni(i)*.2126729+Ni(s)*.7151522+Ni(a)*.072175;e=Oe(e,"srgb"),[i,s,a]=e.coords.map(m=>xe(m)?0:m);let l=Ni(i)*.2126729+Ni(s)*.7151522+Ni(a)*.072175,c=cg(u),d=cg(l),f=d>c;return Math.abs(d-c)<zx?n=0:f?(r=d**Rx-c**Lx,n=r*qx):(r=d**Ux-c**jx,n=r*Wx),Math.abs(n)<Vx?o=0:n>0?o=n-lg:o=n+lg,o*100}function Gx(e,t){e=X(e),t=X(t);let r=Math.max(Eo(e),0),n=Math.max(Eo(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Zx=5e4;function Hx(e,t){e=X(e),t=X(t);let r=Math.max(Eo(e),0),n=Math.max(Eo(t),0);return n>r&&([r,n]=[n,r]),n===0?Zx:(r-n)/n}function Jx(e,t){e=X(e),t=X(t);let r=Dr(e,[xr,"l"]),n=Dr(t,[xr,"l"]);return Math.abs(r-n)}const Yx=216/24389,dg=24/116,Fu=24389/27;let Hc=nr.D65;var Yd=new _({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Hc,base:Bt,fromBase(e){let r=e.map((n,o)=>n/Hc[o]).map(n=>n>Yx?Math.cbrt(n):(Fu*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>dg?Math.pow(t[0],3):(116*t[0]-16)/Fu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Fu,t[2]>dg?Math.pow(t[2],3):(116*t[2]-16)/Fu].map((n,o)=>n*Hc[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const Jc=Math.pow(5,.5)*.5+.5;function Xx(e,t){e=X(e),t=X(t);let r=Dr(e,[Yd,"l"]),n=Dr(t,[Yd,"l"]),o=Math.abs(Math.pow(r,Jc)-Math.pow(n,Jc)),i=Math.pow(o,1/Jc)*Math.SQRT2-40;return i<7.5?0:i}var Ku=Object.freeze({__proto__:null,contrastAPCA:Kx,contrastDeltaPhi:Xx,contrastLstar:Jx,contrastMichelson:Gx,contrastWCAG21:Bx,contrastWeber:Hx});function Qx(e,t,r){Ts(r)&&(r={algorithm:r});let{algorithm:n,...o}=r||{};if(!n){let i=Object.keys(Ku).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=X(e),t=X(t);for(let i in Ku)if("contrast"+n.toLowerCase()===i.toLowerCase())return Ku[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Vl(e){let[t,r,n]=Ya(e,Bt),o=t+15*r+3*n;return[4*t/o,9*r/o]}function p1(e){let[t,r,n]=Ya(e,Bt),o=t+r+n;return[t/o,r/o]}function eA(e){Object.defineProperty(e.prototype,"uv",{get(){return Vl(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return p1(this)}})}var tA=Object.freeze({__proto__:null,register:eA,uv:Vl,xy:p1});function sa(e,t,r={}){Ts(r)&&(r={method:r});let{method:n=Fr.deltaE,...o}=r;for(let i in ds)if("deltae"+n.toLowerCase()===i.toLowerCase())return ds[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function y1(e,t=.25){let n=[_.get("oklch","lch"),"l"];return Qn(e,n,o=>o*(1+t))}function b1(e,t=.25){let n=[_.get("oklch","lch"),"l"];return Qn(e,n,o=>o*(1-t))}y1.returns="color";b1.returns="color";var rA=Object.freeze({__proto__:null,darken:b1,lighten:y1});function v1(e,t,r,n={}){return[e,t]=[X(e),X(t)],wo(r)==="object"&&([r,n]=[.5,r]),Xa(e,t,n)(r??.5)}function w1(e,t,r={}){let n;am(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:s=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[X(e),X(t)],n=Xa(e,t,u));let l=sa(e,t),c=o>0?Math.max(s,Math.ceil(l/o)+1):s,d=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)d=[{p:.5,color:n(.5)}];else{let f=1/(c-1);d=Array.from({length:c},(m,v)=>{let $=v*f;return{p:$,color:n($)}})}if(o>0){let f=d.reduce((m,v,$)=>{if($===0)return 0;let k=sa(v.color,d[$-1].color,i);return Math.max(m,k)},0);for(;f>o;){f=0;for(let m=1;m<d.length&&d.length<a;m++){let v=d[m-1],$=d[m],k=($.p+v.p)/2,D=n(k);f=Math.max(f,sa(D,v.color),sa(D,$.color)),d.splice(m,0,{p:k,color:n(k)}),m++}}}return d=d.map(f=>f.color),d}function Xa(e,t,r={}){if(am(e)){let[u,l]=[e,t];return Xa(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:o,progression:i,premultiplied:s}=r;e=X(e),t=X(t),e=cs(e),t=cs(t);let a={colors:[e,t],options:r};if(n?n=_.get(n):n=_.registry[Fr.interpolationSpace]||e.space,o=o?_.get(o):n,e=Oe(e,n),t=Oe(t,n),e=Ao(e),t=Ao(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,d]=[Dr(e,l),Dr(t,l)];xe(c)&&!xe(d)?c=d:xe(d)&&!xe(c)&&(d=c),[c,d]=Xb(u,[c,d]),Qn(e,l,c),Qn(t,l,d)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=i?i(u):u;let l=e.coords.map((f,m)=>{let v=t.coords[m];return Na(f,v,u)}),c=Na(e.alpha,t.alpha,u),d={space:n,coords:l,alpha:c};return s&&(d.coords=d.coords.map(f=>f/c)),o!==n&&(d=Oe(d,o)),d},{rangeArgs:a})}function am(e){return wo(e)==="function"&&!!e.rangeArgs}Fr.interpolationSpace="lab";function nA(e){e.defineFunction("mix",v1,{returns:"color"}),e.defineFunction("range",Xa,{returns:"function<color>"}),e.defineFunction("steps",w1,{returns:"array<color>"})}var oA=Object.freeze({__proto__:null,isRange:am,mix:v1,range:Xa,register:nA,steps:w1}),iA=new _({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:si,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,u]=[null,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:s=(o-i)/l+(o<i?6:0);break;case o:s=(i-n)/l+2;break;case i:s=(n-o)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),$1=new _({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:si,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,u]=[null,0,t],l=t-r;if(l!==0){switch(t){case n:s=(o-i)/l+(o<i?6:0);break;case o:s=(i-n)/l+2;break;case i:s=(n-o)/l+4}s=s*60}return u&&(a=l/u),s>=360&&(s-=360),[s,a*100,u*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/60)%6;return n-n*r*Math.max(0,Math.min(s,4-s,1))}return[o(5),o(3),o(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),sA=new _({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:$1,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let a=r/o;return[t,0,a*100]}let i=1-n,s=i===0?0:1-r/i;return[t,s*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const aA=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],uA=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var k1=new Zt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:aA,fromXYZ_M:uA}),lA=new Zt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:k1,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const cA=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],dA=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var D1=new Zt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:om,toXYZ_M:cA,fromXYZ_M:dA});const fA=1/512,mA=16/512;var hA=new Zt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:D1,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<mA?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=fA?r*n**(1/1.8):16*t})}});const Su=1.09929682680944,fg=.018053968510807;var gA=new Zt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Oa,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<fg*4.5?t/4.5:r*Math.pow((n+Su-1)/Su,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=fg?r*(Su*Math.pow(n,.45)-(Su-1)):4.5*t})}}),pA=new _({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:dn,fromBase:Sr.fromBase,toBase:Sr.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const fs=2*Math.PI,gl=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],pl=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Yc=Number.MAX_VALUE,pa=.206,um=.03,aa=(1+pa)/(1+um);function Nt(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((o,i)=>{n+=o*t[i]}),n}function ya(e){return .5*(aa*e-pa+Math.sqrt((aa*e-pa)*(aa*e-pa)+4*um*aa*e))}function Qi(e){return(e**2+pa*e)/(aa*(e+um))}function lm(e){let[t,r]=e;return[r/t,r/(1-t)]}function yA(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}function cm(e,t){let r=tt(e,$o);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,tt(r,t,r)}function zl(e,t,r,n){let o=vA(e,t,r,n),i=cm([1,o*e,o*t],r),s=mt(1/Math.max(...i),1/3),a=s*o;return[s,a]}function bA(e,t,r,n,o,i,s,a){let u;if(a===void 0&&(a=zl(e,t,i,s)),(r-o)*a[1]-(a[0]-o)*n<=0)u=a[1]*o/(n*a[0]+a[1]*(o-r));else{u=a[1]*(o-1)/(n*(a[0]-1)+a[1]*(o-r));let l=r-o,c=n,d=Nt($o[0].slice(1),[e,t]),f=Nt($o[1].slice(1),[e,t]),m=Nt($o[2].slice(1),[e,t]),v=l+c*d,$=l+c*f,k=l+c*m,D=o*(1-u)+u*r,E=u*n,P=D+E*d,O=D+E*f,z=D+E*m,ie=P**3,Me=O**3,pe=z**3,Ue=3*v*P**2,xt=3*$*O**2,Pt=3*k*z**2,vr=6*v**2*P,wn=6*$**2*O,en=6*k**2*z,Ro=Nt(i[0],[ie,Me,pe])-1,Jt=Nt(i[0],[Ue,xt,Pt]),Ei=Nt(i[0],[vr,wn,en]),Ci=Jt/(Jt*Jt-.5*Ro*Ei),io=-Ro*Ci,Yt=Nt(i[1],[ie,Me,pe])-1,_e=Nt(i[1],[Ue,xt,Pt]),Xt=Nt(i[1],[vr,wn,en]),Mn=_e/(_e*_e-.5*Yt*Xt),Rr=-Yt*Mn,$n=Nt(i[2],[ie,Me,pe])-1,so=Nt(i[2],[Ue,xt,Pt]),mu=Nt(i[2],[vr,wn,en]),hu=so/(so*so-.5*$n*mu),Fi=-$n*hu;io=Ci>=0?io:Yc,Rr=Mn>=0?Rr:Yc,Fi=hu>=0?Fi:Yc,u+=Math.min(io,Math.min(Rr,Fi))}return u}function x1(e,t,r){let[n,o,i]=e,s=zl(o,i,t,r),a=bA(o,i,n,1,n,t,r,s),u=lm(s),l=a/Math.min(n*u[0],(1-n)*u[1]),c=yA(o,i),d=n*c[0],f=(1-n)*c[1],m=.9*l*Math.sqrt(Math.sqrt(1/(1/d**4+1/f**4)));return d=n*.4,f=(1-n)*.8,[Math.sqrt(1/(1/d**2+1/f**2)),m,a]}function vA(e,t,r,n){let o,i,s,a,u,l,c,d;Nt(n[0][0],[e,t])>1?([o,i,s,a,u]=n[0][1],[l,c,d]=r[0]):Nt(n[1][0],[e,t])>1?([o,i,s,a,u]=n[1][1],[l,c,d]=r[1]):([o,i,s,a,u]=n[2][1],[l,c,d]=r[2]);let f=o+i*e+s*t+a*e**2+u*e*t,m=Nt($o[0].slice(1),[e,t]),v=Nt($o[1].slice(1),[e,t]),$=Nt($o[2].slice(1),[e,t]),k=1+f*m,D=1+f*v,E=1+f*$,P=k**3,O=D**3,z=E**3,ie=3*m*k**2,Me=3*v*D**2,pe=3*$*E**2,Ue=6*m**2*k,xt=6*v**2*D,Pt=6*$**2*E,vr=l*P+c*O+d*z,wn=l*ie+c*Me+d*pe,en=l*Ue+c*xt+d*Pt;return f=f-vr*wn/(wn**2-.5*vr*en),f}function wA(e,t,r){let[n,o,i]=e,s=Qi(i),a=null,u=null;if(n=Hr(n)/360,s!==0&&s!==1&&o!==0){let l=Math.cos(fs*n),c=Math.sin(fs*n),[d,f,m]=x1([s,l,c],t,r),v=.8,$=1.25,k,D,E,P;o<v?(k=$*o,D=0,E=v*d,P=1-E/f):(k=5*(o-.8),D=f,E=.2*f**2*1.25**2/d,P=1-E/(m-f));let O=D+k*E/(1-P*k);a=O*l,u=O*c}return[s,a,u]}function $A(e,t,r){let n=1e-7,o=1e-4,i=e[0],s=0,a=ya(i),u=Math.sqrt(e[1]**2+e[2]**2),l=.5+Math.atan2(-e[2],-e[1])/fs;if(a!==0&&a!==1&&u!==0){let d=e[1]/u,f=e[2]/u,[m,v,$]=x1([i,d,f],t,r),k=.8,D=1.25,E,P,O,z;u<v?(P=k*m,O=1-P/v,z=u/(P+O*u),s=z*k):(E=v,P=.2*v**2*D**2/m,O=1-P/($-v),z=(u-E)/(P+O*(u-E)),s=k+.2*z)}const c=Math.abs(s)<o;return c||a===0||Math.abs(1-a)<n?(l=null,c||(s=0)):l=Hr(l*360),[l,s,a]}var kA=new _({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:dn,gamutSpace:"self",fromBase(e){return $A(e,gl,pl)},toBase(e){return wA(e,gl,pl)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),A1=new _({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:dn,fromBase(e){return[ya(e[0]),e[1],e[2]]},toBase(e){return[Qi(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),DA=new _({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:A1,fromBase:Sr.fromBase,toBase:Sr.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function xA(e,t,r){let[n,o,i]=e;n=Hr(n)/360;let s=Qi(i),a=null,u=null;if(s!==0&&o!==0){let l=Math.cos(fs*n),c=Math.sin(fs*n),d=zl(l,c,t,r),[f,m]=lm(d),v=.5,$=1-v/f,k=1-o*v/(v+m-m*$*o),D=o*m*v/(v+m-m*$*o);s=i*k;let E=i*D,P=Qi(k),O=D*P/k,z=Qi(s);E=E*z/s,s=z;let[ie,Me,pe]=cm([P,l*O,c*O],t),Ue=mt(1/Math.max(Math.max(ie,Me),Math.max(pe,0)),1/3);s=s*Ue,E=E*Ue,a=E*l,u=E*c}return[s,a,u]}function AA(e,t,r){let n=1e-4,o=e[0],i=0,s=ya(o),a=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/fs;if(o!==0&&o!==1&&a!==0){let l=e[1]/a,c=e[2]/a,d=zl(l,c,t,r),[f,m]=lm(d),v=.5,$=1-v/f,k=m/(a+o*m),D=k*o,E=k*a,P=Qi(D),O=E*P/D,[z,ie,Me]=cm([P,l*O,c*O],t),pe=mt(1/Math.max(Math.max(z,ie),Math.max(Me,0)),1/3);o=o/pe,a=a/pe,a=a*ya(o)/o,o=ya(o),s=o/D,i=(v+m)*E/(m*v+m*$*E)}return Math.abs(i)<n||s===0?u=null:u=Hr(u*360),[u,i,s]}var EA=new _({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:dn,gamutSpace:"self",fromBase(e){return AA(e,gl,pl)},toBase(e){return xA(e,gl,pl)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let E1=nr.D65;const CA=216/24389,mg=24389/27,[hg,gg]=Vl({space:Bt,coords:E1});var C1=new _({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:E1,base:Bt,fromBase(e){let t=[ft(e[0]),ft(e[1]),ft(e[2])],r=t[1],[n,o]=Vl({space:Bt,coords:t});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let i=r<=CA?mg*r:116*Math.cbrt(r)-16;return[i,13*i*(n-hg),13*i*(o-gg)]},toBase(e){let[t,r,n]=e;if(t===0||xe(t))return[0,0,0];r=ft(r),n=ft(n);let o=r/(13*t)+hg,i=n/(13*t)+gg,s=t<=8?t/mg:Math.pow((t+16)/116,3);return[s*(9*o/(4*i)),s,s*((12-3*o-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),dm=new _({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:C1,fromBase:Sr.fromBase,toBase:Sr.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const FA=216/24389,SA=24389/27,pg=Dt[0][0],yg=Dt[0][1],Xc=Dt[0][2],bg=Dt[1][0],vg=Dt[1][1],Qc=Dt[1][2],wg=Dt[2][0],$g=Dt[2][1],ed=Dt[2][2];function Ii(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function yl(e){const t=Math.pow(e+16,3)/1560896,r=t>FA?t:e/SA,n=r*(284517*pg-94839*Xc),o=r*(838422*Xc+769860*yg+731718*pg),i=r*(632260*Xc-126452*yg),s=r*(284517*bg-94839*Qc),a=r*(838422*Qc+769860*vg+731718*bg),u=r*(632260*Qc-126452*vg),l=r*(284517*wg-94839*ed),c=r*(838422*ed+769860*$g+731718*wg),d=r*(632260*ed-126452*$g);return{r0s:n/i,r0i:o*e/i,r1s:n/(i+126452),r1i:(o-769860)*e/(i+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/d,b0i:c*e/d,b1s:l/(d+126452),b1i:(c-769860)*e/(d+126452)}}function kg(e,t){const r=t/360*Math.PI*2,n=Ii(e.r0s,e.r0i,r),o=Ii(e.r1s,e.r1i,r),i=Ii(e.g0s,e.g0i,r),s=Ii(e.g1s,e.g1i,r),a=Ii(e.b0s,e.b0i,r),u=Ii(e.b1s,e.b1i,r);return Math.min(n,o,i,s,a,u)}var TA=new _({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dm,gamutSpace:si,fromBase(e){let[t,r,n]=[ft(e[0]),ft(e[1]),ft(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=yl(t),s=kg(i,n);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[ft(e[0]),ft(e[1]),ft(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=yl(n);o=kg(i,t)/100*r}return[n,o,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Dt[0][0];Dt[0][1];Dt[0][2];Dt[1][0];Dt[1][1];Dt[1][2];Dt[2][0];Dt[2][1];Dt[2][2];function Oi(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Dg(e){let t=Oi(e.r0s,e.r0i),r=Oi(e.r1s,e.r1i),n=Oi(e.g0s,e.g0i),o=Oi(e.g1s,e.g1i),i=Oi(e.b0s,e.b0i),s=Oi(e.b1s,e.b1i);return Math.min(t,r,n,o,i,s)}var MA=new _({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dm,gamutSpace:"self",fromBase(e){let[t,r,n]=[ft(e[0]),ft(e[1]),ft(e[2])],o;if(t>99.9999999)o=0,t=100;else if(t<1e-8)o=0,t=0;else{let i=yl(t),s=Dg(i);o=r/s*100}return[n,o,t]},toBase(e){let[t,r,n]=[ft(e[0]),ft(e[1]),ft(e[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let i=yl(n);o=Dg(i)/100*r}return[n,o,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),fm=new Zt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:Oa.toBase,fromBase:Oa.fromBase});const xg=203,Ag=2610/2**14,PA=2**14/2610,NA=2523/2**5,Eg=2**5/2523,Cg=3424/2**12,Fg=2413/2**7,Sg=2392/2**7;var IA=new Zt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:fm,toBase(e){return e.map(function(t){return(Math.max(t**Eg-Cg,0)/(Fg-Sg*t**Eg))**PA*1e4/xg})},fromBase(e){return e.map(function(t){let r=Math.max(t*xg/1e4,0),n=Cg+Fg*r**Ag,o=1+Sg*r**Ag;return(n/o)**NA})}});const Tg=.17883277,Mg=.28466892,Pg=.55991073,td=3.7743;var OA=new Zt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:fm,toBase(e){return e.map(function(t){return t<=.5?t**2/3*td:(Math.exp((t-Pg)/Tg)+Mg)/12*td})},fromBase(e){return e.map(function(t){return t/=td,t<=1/12?mt(3*t,.5):Tg*Math.log(12*t-Mg)+Pg})}});const F1={};xo.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=S1(e.W1,e.W2,e.options.method))});xo.add("chromatic-adaptation-end",e=>{e.M||(e.M=S1(e.W1,e.W2,e.options.method))});function ql({id:e,toCone_M:t,fromCone_M:r}){F1[e]=arguments[0]}function S1(e,t,r="Bradford"){let n=F1[r],[o,i,s]=ia(n.toCone_M,e),[a,u,l]=ia(n.toCone_M,t),c=[[a/o,0,0],[0,u/i,0],[0,0,l/s]],d=ia(c,n.toCone_M);return ia(n.fromCone_M,d)}ql({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});ql({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});ql({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});ql({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(nr,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});nr.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const BA=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],RA=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var T1=new Zt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:nr.ACES,toXYZ_M:BA,fromXYZ_M:RA});const Tu=2**-16,rd=-.35828683,Mu=(Math.log2(65504)+9.72)/17.52;var LA=new Zt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[rd,Mu],name:"Red"},g:{range:[rd,Mu],name:"Green"},b:{range:[rd,Mu],name:"Blue"}},referred:"scene",base:T1,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Tu)*2:r<Mu?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Tu)+9.72)/17.52:t<Tu?(Math.log2(Tu+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Ng=Object.freeze({__proto__:null,A98RGB:lA,A98RGB_Linear:k1,ACEScc:LA,ACEScg:T1,CAM16_JMh:gx,HCT:Ia,HPLuv:MA,HSL:iA,HSLuv:TA,HSV:$1,HWB:sA,ICTCP:Zd,JzCzHz:Gd,Jzazbz:t1,LCH:Sr,LCHuv:dm,Lab:xr,Lab_D65:Yd,Luv:C1,OKLCH:pA,OKLab:dn,OKLrCH:DA,OKLrab:A1,Okhsl:kA,Okhsv:EA,P3:h1,P3_Linear:f1,ProPhoto:hA,ProPhoto_Linear:D1,REC_2020:d1,REC_2020_Linear:Oa,REC_2020_Scene_Referred:gA,REC_2100_HLG:OA,REC_2100_Linear:fm,REC_2100_PQ:IA,XYZ_ABS_D65:im,XYZ_D50:om,XYZ_D65:Bt,sRGB:si,sRGB_Linear:m1});class te{constructor(...t){let r;if(t.length===1){let s={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=X(t[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:_.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=xe(i)?i:i===void 0?1:Ul(0,i,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new te(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Mx(this,...t);return r.color=new te(r.color),r}static get(t,...r){return ls(t,this)?t:new te(t,...r)}static try(t,r){if(ls(t,this))return t;let n=Yb(t,r);return n?new te(n):null}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,s=function(...a){let u=r(...a);if(i==="color")u=te.get(u);else if(i==="function<color>"){let l=u;u=function(...c){let d=l(...c);return te.get(d)},Object.assign(u,l)}else i==="array<color>"&&(u=u.map(l=>te.get(l)));return u};t in te||(te[t]=s),o&&(te.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)te.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(te);else for(let r in t)te.defineFunction(r,t[r])}}te.defineFunctions({get:Dr,getAll:Ya,set:Qn,setAll:nm,to:Oe,equals:Nx,inGamut:ri,toGamut:Ao,distance:e1,deltas:Px,toString:ga});Object.assign(te,{util:TD,hooks:xo,WHITES:nr,Space:_,spaces:_.registry,parse:Hb,defaults:Fr});for(let e of Object.keys(Ng))_.register(Ng[e]);for(let e in _.registry)Xd(e,_.registry[e]);xo.add("colorspace-init-end",e=>{Xd(e.id,e),e.aliases?.forEach(t=>{Xd(t,e)})});function Xd(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(te.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let o=new Proxy(n,{has:((i,s)=>{try{return _.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)}),get:(i,s,a)=>{if(s&&typeof s!="symbol"&&!(s in i)&&s in o){let{index:u}=_.resolveCoord([t,s]);if(u>=0)return i[u]}return Reflect.get(i,s,a)},set:(i,s,a,u)=>{if(s&&typeof s!="symbol"&&!(s in i)||Number(s)>=0){let{index:l}=_.resolveCoord([t,s]);if(l>=0)return i[l]=a,this.setAll(e,i),!0}return Reflect.set(i,s,a,u)}});return o},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}te.extend(ds);te.extend({deltaE:sa});Object.assign(te,{deltaEMethods:ds});te.extend(rA);te.extend({contrast:Qx});te.extend(tA);te.extend(Ox);te.extend(oA);te.extend(Ku);const M1=Symbol("no update");function Ig(e){return e!==M1}class nd extends yn()("observable-value-update"){}class jA extends yn()("observable-value-resolve"){}class UA extends yn()("observable-value-error"){}class _A extends Uf("observable-destroy"){}class VA extends Uf("observable-callback-call"){}class zA extends yn()("observable-params-update"){}class P1{listenTarget=new _f;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===M1)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const o=this.value;return this.value=r,this.listenTarget.dispatch(new nd({detail:[r,o]})),!0}return!1}listen(t,r){const n=o=>r(...o.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(nd,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(nd,r)}destroy(){this.listenTarget.dispatch(new _A),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function mm(e,t){return nk(e,t,(r,n)=>T.isFunction(r)&&T.isFunction(n)?!0:T.strictEquals(r,n))}var ba;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(ba||(ba={}));class qA extends P1{equalityCheck;waitingForValueDeferredPromise=new el;lastSetPromise;lastSetId=ti();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||mm,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=ti();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new el,super.setValue(this.waitingForValueDeferredPromise.promise,T.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const o=rt(n);console.error(o),this.rejectValue(o)}),!0}resolveValue(t){return Ig(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,T.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=ti(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new jA({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,T.strictEquals),this.dispatch(new UA({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):Ig(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(rt(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?ba.Rejected:this.value instanceof Promise?ba.Waiting:ba.Resolved}}class _i extends qA{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==_i.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||mm,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:_i.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===_i.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(rt(t))}finally{this.dispatch(new VA)}}updateLastParams(t){try{return this.internalParams===_i.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new zA({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(rt(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return T.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function WA(e){return yt(e)&&!br(e)&&!eu(e)&&Symbol.asyncIterator in e}function br(e){return Array.isArray(e)}function N1(e){return typeof e=="bigint"}function Qa(e){return typeof e=="boolean"}function hm(e){return e instanceof globalThis.Date}function KA(e){return typeof e=="function"}function GA(e){return yt(e)&&!br(e)&&!eu(e)&&Symbol.iterator in e}function ZA(e){return e===null}function Sn(e){return typeof e=="number"}function yt(e){return typeof e=="object"&&e!==null}function I1(e){return e instanceof globalThis.RegExp}function ut(e){return typeof e=="string"}function HA(e){return typeof e=="symbol"}function eu(e){return e instanceof globalThis.Uint8Array}function ht(e){return e===void 0}function JA(e){return e.map(t=>bl(t))}function YA(e){return new Date(e.getTime())}function XA(e){return new Uint8Array(e)}function QA(e){return new RegExp(e.source,e.flags)}function eE(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=bl(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=bl(e[r]);return t}function bl(e){return br(e)?JA(e):hm(e)?YA(e):eu(e)?XA(e):I1(e)?QA(e):yt(e)?eE(e):e}function Tr(e){return bl(e)}function gm(e,t){return Tr(t===void 0?e:{...t,...e})}function O1(e){return Tn(e)&&globalThis.Symbol.asyncIterator in e}function B1(e){return Tn(e)&&globalThis.Symbol.iterator in e}function R1(e){return e instanceof globalThis.Promise}function pm(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function ym(e){return e instanceof globalThis.Uint8Array}function L1(e,t){return t in e}function Tn(e){return e!==null&&typeof e=="object"}function Mr(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function So(e){return e===void 0}function Wl(e){return e===null}function Kl(e){return typeof e=="boolean"}function oe(e){return typeof e=="number"}function j1(e){return globalThis.Number.isInteger(e)}function Vn(e){return typeof e=="bigint"}function Er(e){return typeof e=="string"}function U1(e){return typeof e=="function"}function Gl(e){return typeof e=="symbol"}function _1(e){return Vn(e)||Kl(e)||Wl(e)||oe(e)||Er(e)||Gl(e)||So(e)}var at;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=Tn(s);return e.AllowArrayObject?a:a&&!Mr(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function o(s){return e.AllowNaN?oe(s):Number.isFinite(s)}e.IsNumberLike=o;function i(s){const a=So(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=i})(at||(at={}));function tE(e){return globalThis.Object.freeze(e).map(t=>vl(t))}function rE(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=vl(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=vl(e[r]);return globalThis.Object.freeze(t)}function vl(e){return br(e)?tE(e):hm(e)?e:eu(e)?e:I1(e)?e:yt(e)?rE(e):e}function B(e,t){const r=t!==void 0?{...t,...e}:e;switch(at.InstanceMode){case"freeze":return vl(r);case"clone":return Tr(r);default:return r}}class jt extends Error{constructor(t){super(t)}}const mr=Symbol.for("TypeBox.Transform"),tu=Symbol.for("TypeBox.Readonly"),to=Symbol.for("TypeBox.Optional"),Zl=Symbol.for("TypeBox.Hint"),I=Symbol.for("TypeBox.Kind");function bm(e){return yt(e)&&e[tu]==="Readonly"}function To(e){return yt(e)&&e[to]==="Optional"}function V1(e){return me(e,"Any")}function z1(e){return me(e,"Argument")}function Ms(e){return me(e,"Array")}function Hl(e){return me(e,"AsyncIterator")}function Jl(e){return me(e,"BigInt")}function ru(e){return me(e,"Boolean")}function Ps(e){return me(e,"Computed")}function Ns(e){return me(e,"Constructor")}function nE(e){return me(e,"Date")}function Is(e){return me(e,"Function")}function Os(e){return me(e,"Integer")}function Yr(e){return me(e,"Intersect")}function Yl(e){return me(e,"Iterator")}function me(e,t){return yt(e)&&I in e&&e[I]===t}function q1(e){return Qa(e)||Sn(e)||ut(e)}function gi(e){return me(e,"Literal")}function pi(e){return me(e,"MappedKey")}function Or(e){return me(e,"MappedResult")}function nu(e){return me(e,"Never")}function oE(e){return me(e,"Not")}function vm(e){return me(e,"Null")}function Bs(e){return me(e,"Number")}function bn(e){return me(e,"Object")}function Xl(e){return me(e,"Promise")}function Ql(e){return me(e,"Record")}function pr(e){return me(e,"Ref")}function W1(e){return me(e,"RegExp")}function ou(e){return me(e,"String")}function wm(e){return me(e,"Symbol")}function yi(e){return me(e,"TemplateLiteral")}function iE(e){return me(e,"This")}function Re(e){return yt(e)&&mr in e}function bi(e){return me(e,"Tuple")}function iu(e){return me(e,"Undefined")}function Mt(e){return me(e,"Union")}function sE(e){return me(e,"Uint8Array")}function aE(e){return me(e,"Unknown")}function uE(e){return me(e,"Unsafe")}function lE(e){return me(e,"Void")}function cE(e){return yt(e)&&I in e&&ut(e[I])}function ir(e){return V1(e)||z1(e)||Ms(e)||ru(e)||Jl(e)||Hl(e)||Ps(e)||Ns(e)||nE(e)||Is(e)||Os(e)||Yr(e)||Yl(e)||gi(e)||pi(e)||Or(e)||nu(e)||oE(e)||vm(e)||Bs(e)||bn(e)||Xl(e)||Ql(e)||pr(e)||W1(e)||ou(e)||wm(e)||yi(e)||iE(e)||bi(e)||iu(e)||Mt(e)||sE(e)||aE(e)||uE(e)||lE(e)||cE(e)}const dE=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function K1(e){try{return new RegExp(e),!0}catch{return!1}}function $m(e){if(!ut(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function G1(e){return km(e)||He(e)}function Ys(e){return ht(e)||N1(e)}function Pe(e){return ht(e)||Sn(e)}function km(e){return ht(e)||Qa(e)}function Te(e){return ht(e)||ut(e)}function fE(e){return ht(e)||ut(e)&&$m(e)&&K1(e)}function mE(e){return ht(e)||ut(e)&&$m(e)}function Z1(e){return ht(e)||He(e)}function wl(e){return yt(e)&&e[to]==="Optional"}function fn(e){return he(e,"Any")&&Te(e.$id)}function hE(e){return he(e,"Argument")&&Sn(e.index)}function vi(e){return he(e,"Array")&&e.type==="array"&&Te(e.$id)&&He(e.items)&&Pe(e.minItems)&&Pe(e.maxItems)&&km(e.uniqueItems)&&Z1(e.contains)&&Pe(e.minContains)&&Pe(e.maxContains)}function Dm(e){return he(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Te(e.$id)&&He(e.items)}function ec(e){return he(e,"BigInt")&&e.type==="bigint"&&Te(e.$id)&&Ys(e.exclusiveMaximum)&&Ys(e.exclusiveMinimum)&&Ys(e.maximum)&&Ys(e.minimum)&&Ys(e.multipleOf)}function wi(e){return he(e,"Boolean")&&e.type==="boolean"&&Te(e.$id)}function gE(e){return he(e,"Computed")&&ut(e.target)&&br(e.parameters)&&e.parameters.every(t=>He(t))}function tc(e){return he(e,"Constructor")&&e.type==="Constructor"&&Te(e.$id)&&br(e.parameters)&&e.parameters.every(t=>He(t))&&He(e.returns)}function rc(e){return he(e,"Date")&&e.type==="Date"&&Te(e.$id)&&Pe(e.exclusiveMaximumTimestamp)&&Pe(e.exclusiveMinimumTimestamp)&&Pe(e.maximumTimestamp)&&Pe(e.minimumTimestamp)&&Pe(e.multipleOfTimestamp)}function nc(e){return he(e,"Function")&&e.type==="Function"&&Te(e.$id)&&br(e.parameters)&&e.parameters.every(t=>He(t))&&He(e.returns)}function ro(e){return he(e,"Integer")&&e.type==="integer"&&Te(e.$id)&&Pe(e.exclusiveMaximum)&&Pe(e.exclusiveMinimum)&&Pe(e.maximum)&&Pe(e.minimum)&&Pe(e.multipleOf)}function H1(e){return yt(e)&&Object.entries(e).every(([t,r])=>$m(t)&&He(r))}function $i(e){return he(e,"Intersect")&&!(ut(e.type)&&e.type!=="object")&&br(e.allOf)&&e.allOf.every(t=>He(t)&&!$E(t))&&Te(e.type)&&(km(e.unevaluatedProperties)||Z1(e.unevaluatedProperties))&&Te(e.$id)}function xm(e){return he(e,"Iterator")&&e.type==="Iterator"&&Te(e.$id)&&He(e.items)}function he(e,t){return yt(e)&&I in e&&e[I]===t}function J1(e){return Mo(e)&&ut(e.const)}function Y1(e){return Mo(e)&&Sn(e.const)}function X1(e){return Mo(e)&&Qa(e.const)}function Mo(e){return he(e,"Literal")&&Te(e.$id)&&pE(e.const)}function pE(e){return Qa(e)||Sn(e)||ut(e)}function yE(e){return he(e,"MappedKey")&&br(e.keys)&&e.keys.every(t=>Sn(t)||ut(t))}function bE(e){return he(e,"MappedResult")&&H1(e.properties)}function Po(e){return he(e,"Never")&&yt(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function ms(e){return he(e,"Not")&&He(e.not)}function Am(e){return he(e,"Null")&&e.type==="null"&&Te(e.$id)}function hr(e){return he(e,"Number")&&e.type==="number"&&Te(e.$id)&&Pe(e.exclusiveMaximum)&&Pe(e.exclusiveMinimum)&&Pe(e.maximum)&&Pe(e.minimum)&&Pe(e.multipleOf)}function Ye(e){return he(e,"Object")&&e.type==="object"&&Te(e.$id)&&H1(e.properties)&&G1(e.additionalProperties)&&Pe(e.minProperties)&&Pe(e.maxProperties)}function Em(e){return he(e,"Promise")&&e.type==="Promise"&&Te(e.$id)&&He(e.item)}function Lt(e){return he(e,"Record")&&e.type==="object"&&Te(e.$id)&&G1(e.additionalProperties)&&yt(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&K1(r[0])&&yt(t.patternProperties)&&He(t.patternProperties[r[0]])})(e)}function vE(e){return he(e,"Ref")&&Te(e.$id)&&ut(e.$ref)}function Ba(e){return he(e,"RegExp")&&Te(e.$id)&&ut(e.source)&&ut(e.flags)&&Pe(e.maxLength)&&Pe(e.minLength)}function mn(e){return he(e,"String")&&e.type==="string"&&Te(e.$id)&&Pe(e.minLength)&&Pe(e.maxLength)&&fE(e.pattern)&&mE(e.format)}function Ra(e){return he(e,"Symbol")&&e.type==="symbol"&&Te(e.$id)}function La(e){return he(e,"TemplateLiteral")&&e.type==="string"&&ut(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function wE(e){return he(e,"This")&&Te(e.$id)&&ut(e.$ref)}function $E(e){return yt(e)&&mr in e}function oc(e){return he(e,"Tuple")&&e.type==="array"&&Te(e.$id)&&Sn(e.minItems)&&Sn(e.maxItems)&&e.minItems===e.maxItems&&(ht(e.items)&&ht(e.additionalItems)&&e.minItems===0||br(e.items)&&e.items.every(t=>He(t)))}function ai(e){return he(e,"Undefined")&&e.type==="undefined"&&Te(e.$id)}function eo(e){return he(e,"Union")&&Te(e.$id)&&yt(e)&&br(e.anyOf)&&e.anyOf.every(t=>He(t))}function su(e){return he(e,"Uint8Array")&&e.type==="Uint8Array"&&Te(e.$id)&&Pe(e.minByteLength)&&Pe(e.maxByteLength)}function hn(e){return he(e,"Unknown")&&Te(e.$id)}function kE(e){return he(e,"Unsafe")}function ic(e){return he(e,"Void")&&e.type==="void"&&Te(e.$id)}function DE(e){return yt(e)&&I in e&&ut(e[I])&&!dE.includes(e[I])}function He(e){return yt(e)&&(fn(e)||hE(e)||vi(e)||wi(e)||ec(e)||Dm(e)||gE(e)||tc(e)||rc(e)||nc(e)||ro(e)||$i(e)||xm(e)||Mo(e)||yE(e)||bE(e)||Po(e)||ms(e)||Am(e)||hr(e)||Ye(e)||Em(e)||Lt(e)||vE(e)||Ba(e)||mn(e)||Ra(e)||La(e)||wE(e)||oc(e)||ai(e)||eo(e)||su(e)||hn(e)||kE(e)||ic(e)||DE(e))}const xE="(true|false)",Gu="(0|[1-9][0-9]*)",Q1="(.*)",AE="(?!.*)",hs=`^${Gu}$`,gs=`^${Q1}$`,EE=`^${AE}$`,ev=new Map;function Cm(e){return ev.has(e)}function Fm(e){return ev.get(e)}const Sm=new Map;function Co(e){return Sm.has(e)}function Tm(e,t){Sm.set(e,t)}function Mm(e){return Sm.get(e)}function CE(e,t){return e.includes(t)}function FE(e){return[...new Set(e)]}function SE(e,t){return e.filter(r=>t.includes(r))}function TE(e,t){return e.reduce((r,n)=>SE(r,n),t)}function ME(e){return e.length===1?e[0]:e.length>1?TE(e.slice(1),e[0]):[]}function PE(e){const t=[];for(const r of e)t.push(...r);return t}function ja(e){return B({[I]:"Any"},e)}function Pm(e,t){return B({[I]:"Array",type:"array",items:e},t)}function NE(e){return B({[I]:"Argument",index:e})}function Nm(e,t){return B({[I]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function $t(e,t,r){return B({[I]:"Computed",target:e,parameters:t},r)}function IE(e,t){const{[t]:r,...n}=e;return n}function Pr(e,t){return t.reduce((r,n)=>IE(r,n),e)}function Xe(e){return B({[I]:"Never",not:{}},e)}function Ut(e){return B({[I]:"MappedResult",properties:e})}function Im(e,t,r){return B({[I]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function au(e,t,r){return B({[I]:"Function",type:"Function",parameters:e,returns:t},r)}function Qd(e,t){return B({[I]:"Union",anyOf:e},t)}function OE(e){return e.some(t=>To(t))}function Og(e){return e.map(t=>To(t)?BE(t):t)}function BE(e){return Pr(e,[to])}function RE(e,t){return OE(e)?Oo(Qd(Og(e),t)):Qd(Og(e),t)}function Rs(e,t){return e.length===1?B(e[0],t):e.length===0?Xe(t):RE(e,t)}function _t(e,t){return e.length===0?Xe(t):e.length===1?B(e[0],t):Qd(e,t)}class Bg extends jt{}function LE(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function Om(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function Kn(e,t){return Om(e,t,"(")}function Ua(e,t){return Om(e,t,")")}function tv(e,t){return Om(e,t,"|")}function jE(e){if(!(Kn(e,0)&&Ua(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(Kn(e,r)&&(t+=1),Ua(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function UE(e){return e.slice(1,e.length-1)}function _E(e){let t=0;for(let r=0;r<e.length;r++)if(Kn(e,r)&&(t+=1),Ua(e,r)&&(t-=1),tv(e,r)&&t===0)return!0;return!1}function VE(e){for(let t=0;t<e.length;t++)if(Kn(e,t))return!0;return!1}function zE(e){let[t,r]=[0,0];const n=[];for(let i=0;i<e.length;i++)if(Kn(e,i)&&(t+=1),Ua(e,i)&&(t-=1),tv(e,i)&&t===0){const s=e.slice(r,i);s.length>0&&n.push(ps(s)),r=i+1}const o=e.slice(r);return o.length>0&&n.push(ps(o)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function qE(e){function t(o,i){if(!Kn(o,i))throw new Bg("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=i;a<o.length;a++)if(Kn(o,a)&&(s+=1),Ua(o,a)&&(s-=1),s===0)return[i,a];throw new Bg("TemplateLiteralParser: Unclosed group parens in expression")}function r(o,i){for(let s=i;s<o.length;s++)if(Kn(o,s))return[i,s];return[i,o.length]}const n=[];for(let o=0;o<e.length;o++)if(Kn(e,o)){const[i,s]=t(e,o),a=e.slice(i,s+1);n.push(ps(a)),o=s}else{const[i,s]=r(e,o),a=e.slice(i,s);a.length>0&&n.push(ps(a)),o=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function ps(e){return jE(e)?ps(UE(e)):_E(e)?zE(e):VE(e)?qE(e):{type:"const",const:LE(e)}}function Bm(e){return ps(e.slice(1,e.length-1))}class WE extends jt{}function KE(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function GE(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function ZE(e){return e.type==="const"&&e.const===".*"}function _a(e){return KE(e)||ZE(e)?!1:GE(e)?!0:e.type==="and"?e.expr.every(t=>_a(t)):e.type==="or"?e.expr.every(t=>_a(t)):e.type==="const"?!0:(()=>{throw new WE("Unknown expression type")})()}function HE(e){const t=Bm(e.pattern);return _a(t)}class JE extends jt{}function*rv(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of rv(e.slice(1)))yield`${t}${r}`}function*YE(e){return yield*rv(e.expr.map(t=>[...sc(t)]))}function*XE(e){for(const t of e.expr)yield*sc(t)}function*QE(e){return yield e.const}function*sc(e){return e.type==="and"?yield*YE(e):e.type==="or"?yield*XE(e):e.type==="const"?yield*QE(e):(()=>{throw new JE("Unknown expression")})()}function nv(e){const t=Bm(e.pattern);return _a(t)?[...sc(t)]:[]}function gt(e,t){return B({[I]:"Literal",const:e,type:typeof e},t)}function ov(e){return B({[I]:"Boolean",type:"boolean"},e)}function Rm(e){return B({[I]:"BigInt",type:"bigint"},e)}function ki(e){return B({[I]:"Number",type:"number"},e)}function ui(e){return B({[I]:"String",type:"string"},e)}function*eC(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield ov():t==="number"?yield ki():t==="bigint"?yield Rm():t==="string"?yield ui():yield(()=>{const r=t.split("|").map(n=>gt(n.trim()));return r.length===0?Xe():r.length===1?r[0]:Rs(r)})()}function*tC(e){if(e[1]!=="{"){const t=gt("$"),r=ef(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=eC(e.slice(2,t)),n=ef(e.slice(t+1));return yield*[...r,...n]}yield gt(e)}function*ef(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=gt(e.slice(0,t)),n=tC(e.slice(t));return yield*[r,...n]}yield gt(e)}function rC(e){return[...ef(e)]}class nC extends jt{}function oC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function iv(e,t){return yi(e)?e.pattern.slice(1,e.pattern.length-1):Mt(e)?`(${e.anyOf.map(r=>iv(r,t)).join("|")})`:Bs(e)?`${t}${Gu}`:Os(e)?`${t}${Gu}`:Jl(e)?`${t}${Gu}`:ou(e)?`${t}${Q1}`:gi(e)?`${t}${oC(e.const.toString())}`:ru(e)?`${t}${xE}`:(()=>{throw new nC(`Unexpected Kind '${e[I]}'`)})()}function Rg(e){return`^${e.map(t=>iv(t,"")).join("")}$`}function $l(e){const r=nv(e).map(n=>gt(n));return Rs(r)}function sv(e,t){const r=ut(e)?Rg(rC(e)):Rg(e);return B({[I]:"TemplateLiteral",type:"string",pattern:r},t)}function iC(e){return nv(e).map(r=>r.toString())}function sC(e){const t=[];for(const r of e)t.push(...No(r));return t}function aC(e){return[e.toString()]}function No(e){return[...new Set(yi(e)?iC(e):Mt(e)?sC(e.anyOf):gi(e)?aC(e.const):Bs(e)?["[number]"]:Os(e)?["[number]"]:[])]}function uC(e,t,r){const n={};for(const o of Object.getOwnPropertyNames(t))n[o]=ac(e,No(t[o]),r);return n}function lC(e,t,r){return uC(e,t.properties,r)}function cC(e,t,r){const n=lC(e,t,r);return Ut(n)}function av(e,t){return e.map(r=>uv(r,t))}function dC(e){return e.filter(t=>!nu(t))}function fC(e,t){return dv(dC(av(e,t)))}function mC(e){return e.some(t=>nu(t))?[]:e}function hC(e,t){return Rs(mC(av(e,t)))}function gC(e,t){return t in e?e[t]:t==="[number]"?Rs(e):Xe()}function pC(e,t){return t==="[number]"?e:Xe()}function yC(e,t){return t in e?e[t]:Xe()}function uv(e,t){return Yr(e)?fC(e.allOf,t):Mt(e)?hC(e.anyOf,t):bi(e)?gC(e.items??[],t):Ms(e)?pC(e.items,t):bn(e)?yC(e.properties,t):Xe()}function Lm(e,t){return t.map(r=>uv(e,r))}function Lg(e,t){return Rs(Lm(e,t))}function ac(e,t,r){if(pr(e)||pr(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!ir(e)||!ir(t))throw new jt(n);return $t("Index",[e,t])}return Or(t)?cC(e,t,r):pi(t)?$C(e,t,r):B(ir(t)?Lg(e,No(t)):Lg(e,t),r)}function bC(e,t,r){return{[t]:ac(e,[t],Tr(r))}}function vC(e,t,r){return t.reduce((n,o)=>({...n,...bC(e,o,r)}),{})}function wC(e,t,r){return vC(e,t.keys,r)}function $C(e,t,r){const n=wC(e,t,r);return Ut(n)}function jm(e,t){return B({[I]:"Iterator",type:"Iterator",items:e},t)}function kC(e){return globalThis.Object.keys(e).filter(t=>!To(e[t]))}function DC(e,t){const r=kC(e),n=r.length>0?{[I]:"Object",type:"object",required:r,properties:e}:{[I]:"Object",type:"object",properties:e};return B(n,t)}var Tt=DC;function lv(e,t){return B({[I]:"Promise",type:"Promise",item:e},t)}function xC(e){return B(Pr(e,[tu]))}function AC(e){return B({...e,[tu]:"Readonly"})}function EC(e,t){return t===!1?xC(e):AC(e)}function Io(e,t){const r=t??!0;return Or(e)?SC(e,r):EC(e,r)}function CC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Io(e[n],t);return r}function FC(e,t){return CC(e.properties,t)}function SC(e,t){const r=FC(e,t);return Ut(r)}function Ls(e,t){return B(e.length>0?{[I]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[I]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function cv(e,t){return e in t?jr(e,t[e]):Ut(t)}function TC(e){return{[e]:gt(e)}}function MC(e){const t={};for(const r of e)t[r]=gt(r);return t}function PC(e,t){return CE(t,e)?TC(e):MC(t)}function NC(e,t){const r=PC(e,t);return cv(e,r)}function Xs(e,t){return t.map(r=>jr(e,r))}function IC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=jr(e,t[n]);return r}function jr(e,t){const r={...t};return To(t)?Oo(jr(e,Pr(t,[to]))):bm(t)?Io(jr(e,Pr(t,[tu]))):Or(t)?cv(e,t.properties):pi(t)?NC(e,t.keys):Ns(t)?Im(Xs(e,t.parameters),jr(e,t.returns),r):Is(t)?au(Xs(e,t.parameters),jr(e,t.returns),r):Hl(t)?Nm(jr(e,t.items),r):Yl(t)?jm(jr(e,t.items),r):Yr(t)?Bo(Xs(e,t.allOf),r):Mt(t)?_t(Xs(e,t.anyOf),r):bi(t)?Ls(Xs(e,t.items??[]),r):bn(t)?Tt(IC(e,t.properties),r):Ms(t)?Pm(jr(e,t.items),r):Xl(t)?lv(jr(e,t.item),r):t}function OC(e,t){const r={};for(const n of e)r[n]=jr(n,t);return r}function BC(e,t,r){const n=ir(e)?No(e):e,o=t({[I]:"MappedKey",keys:n}),i=OC(n,o);return Tt(i,r)}function RC(e){return B(Pr(e,[to]))}function LC(e){return B({...e,[to]:"Optional"})}function jC(e,t){return t===!1?RC(e):LC(e)}function Oo(e,t){const r=t??!0;return Or(e)?VC(e,r):jC(e,r)}function UC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Oo(e[n],t);return r}function _C(e,t){return UC(e.properties,t)}function VC(e,t){const r=_C(e,t);return Ut(r)}function tf(e,t={}){const r=e.every(o=>bn(o)),n=ir(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return B(t.unevaluatedProperties===!1||ir(t.unevaluatedProperties)||r?{...n,[I]:"Intersect",type:"object",allOf:e}:{...n,[I]:"Intersect",allOf:e},t)}function zC(e){return e.every(t=>To(t))}function qC(e){return Pr(e,[to])}function jg(e){return e.map(t=>To(t)?qC(t):t)}function WC(e,t){return zC(e)?Oo(tf(jg(e),t)):tf(jg(e),t)}function dv(e,t={}){if(e.length===1)return B(e[0],t);if(e.length===0)return Xe(t);if(e.some(r=>Re(r)))throw new Error("Cannot intersect transform types");return WC(e,t)}function Bo(e,t){if(e.length===1)return B(e[0],t);if(e.length===0)return Xe(t);if(e.some(r=>Re(r)))throw new Error("Cannot intersect transform types");return tf(e,t)}function js(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new jt("Ref: $ref must be a string");return B({[I]:"Ref",$ref:t},r)}function KC(e,t){return $t("Awaited",[$t(e,t)])}function GC(e){return $t("Awaited",[js(e)])}function ZC(e){return Bo(fv(e))}function HC(e){return _t(fv(e))}function JC(e){return uc(e)}function fv(e){return e.map(t=>uc(t))}function uc(e,t){return B(Ps(e)?KC(e.target,e.parameters):Yr(e)?ZC(e.allOf):Mt(e)?HC(e.anyOf):Xl(e)?JC(e.item):pr(e)?GC(e.$ref):e,t)}function mv(e){const t=[];for(const r of e)t.push(Di(r));return t}function YC(e){const t=mv(e);return PE(t)}function XC(e){const t=mv(e);return ME(t)}function QC(e){return e.map((t,r)=>r.toString())}function e4(e){return["[number]"]}function t4(e){return globalThis.Object.getOwnPropertyNames(e)}function r4(e){return rf?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function Di(e){return Yr(e)?YC(e.allOf):Mt(e)?XC(e.anyOf):bi(e)?QC(e.items??[]):Ms(e)?e4(e.items):bn(e)?t4(e.properties):Ql(e)?r4(e.patternProperties):[]}let rf=!1;function ys(e){rf=!0;const t=Di(e);return rf=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function n4(e,t){return $t("KeyOf",[$t(e,t)])}function o4(e){return $t("KeyOf",[js(e)])}function i4(e,t){const r=Di(e),n=s4(r),o=Rs(n);return B(o,t)}function s4(e){return e.map(t=>t==="[number]"?ki():gt(t))}function Um(e,t){return Ps(e)?n4(e.target,e.parameters):pr(e)?o4(e.$ref):Or(e)?l4(e,t):i4(e,t)}function a4(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Um(e[n],Tr(t));return r}function u4(e,t){return a4(e.properties,t)}function l4(e,t){const r=u4(e,t);return Ut(r)}function hv(e){const t=Di(e),r=Lm(e,t);return t.map((n,o)=>[t[o],r[o]])}function c4(e){const t=[];for(const r of e)t.push(...Di(r));return FE(t)}function d4(e){return e.filter(t=>!nu(t))}function f4(e,t){const r=[];for(const n of e)r.push(...Lm(n,[t]));return d4(r)}function m4(e,t){const r={};for(const n of t)r[n]=dv(f4(e,n));return r}function h4(e,t){const r=c4(e),n=m4(e,r);return Tt(n,t)}function gv(e){return B({[I]:"Date",type:"Date"},e)}function pv(e){return B({[I]:"Null",type:"null"},e)}function yv(e){return B({[I]:"Symbol",type:"symbol"},e)}function bv(e){return B({[I]:"Undefined",type:"undefined"},e)}function vv(e){return B({[I]:"Uint8Array",type:"Uint8Array"},e)}function lc(e){return B({[I]:"Unknown"},e)}function g4(e){return e.map(t=>_m(t,!1))}function p4(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Io(_m(e[r],!1));return t}function Pu(e,t){return t===!0?e:Io(e)}function _m(e,t){return WA(e)||GA(e)?Pu(ja(),t):br(e)?Io(Ls(g4(e))):eu(e)?vv():hm(e)?gv():yt(e)?Pu(Tt(p4(e)),t):KA(e)?Pu(au([],lc()),t):ht(e)?bv():ZA(e)?pv():HA(e)?yv():N1(e)?Rm():Sn(e)||Qa(e)||ut(e)?gt(e):Tt({})}function y4(e,t){return B(_m(e,!0),t)}function b4(e,t){return Ns(e)?Ls(e.parameters,t):Xe(t)}function v4(e,t){if(ht(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(i=>isNaN(i)).map(i=>e[i]),o=[...new Set(r)].map(i=>gt(i));return _t(o,{...t,[Zl]:"Enum"})}class w4 extends jt{}var S;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(S||(S={}));function Jr(e){return e===S.False?e:S.True}function Us(e){throw new w4(e)}function bt(e){return Po(e)||$i(e)||eo(e)||hn(e)||fn(e)}function vt(e,t){return Po(t)?kv():$i(t)?cc(e,t):eo(t)?zm(e,t):hn(t)?Ev():fn(t)?Vm():Us("StructuralRight")}function Vm(e,t){return S.True}function $4(e,t){return $i(t)?cc(e,t):eo(t)&&t.anyOf.some(r=>fn(r)||hn(r))?S.True:eo(t)?S.Union:hn(t)||fn(t)?S.True:S.Union}function k4(e,t){return hn(e)?S.False:fn(e)?S.Union:Po(e)?S.True:S.False}function D4(e,t){return Ye(t)&&dc(t)?S.True:bt(t)?vt(e,t):vi(t)?Jr(Se(e.items,t.items)):S.False}function x4(e,t){return bt(t)?vt(e,t):Dm(t)?Jr(Se(e.items,t.items)):S.False}function A4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):Lt(t)?Xr(e,t):ec(t)?S.True:S.False}function wv(e,t){return X1(e)||wi(e)?S.True:S.False}function E4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):Lt(t)?Xr(e,t):wi(t)?S.True:S.False}function C4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):tc(t)?e.parameters.length>t.parameters.length?S.False:e.parameters.every((r,n)=>Jr(Se(t.parameters[n],r))===S.True)?Jr(Se(e.returns,t.returns)):S.False:S.False}function F4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):Lt(t)?Xr(e,t):rc(t)?S.True:S.False}function S4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):nc(t)?e.parameters.length>t.parameters.length?S.False:e.parameters.every((r,n)=>Jr(Se(t.parameters[n],r))===S.True)?Jr(Se(e.returns,t.returns)):S.False:S.False}function $v(e,t){return Mo(e)&&Sn(e.const)||hr(e)||ro(e)?S.True:S.False}function T4(e,t){return ro(t)||hr(t)?S.True:bt(t)?vt(e,t):Ye(t)?Ht(e,t):Lt(t)?Xr(e,t):S.False}function cc(e,t){return t.allOf.every(r=>Se(e,r)===S.True)?S.True:S.False}function M4(e,t){return e.allOf.some(r=>Se(r,t)===S.True)?S.True:S.False}function P4(e,t){return bt(t)?vt(e,t):xm(t)?Jr(Se(e.items,t.items)):S.False}function N4(e,t){return Mo(t)&&t.const===e.const?S.True:bt(t)?vt(e,t):Ye(t)?Ht(e,t):Lt(t)?Xr(e,t):mn(t)?Av(e):hr(t)?Dv(e):ro(t)?$v(e):wi(t)?wv(e):S.False}function kv(e,t){return S.False}function I4(e,t){return S.True}function Ug(e){let[t,r]=[e,0];for(;ms(t);)t=t.not,r+=1;return r%2===0?t:lc()}function O4(e,t){return ms(e)?Se(Ug(e),t):ms(t)?Se(e,Ug(t)):Us("Invalid fallthrough for Not")}function B4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):Lt(t)?Xr(e,t):Am(t)?S.True:S.False}function Dv(e,t){return Y1(e)||hr(e)||ro(e)?S.True:S.False}function R4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):Lt(t)?Xr(e,t):ro(t)||hr(t)?S.True:S.False}function yr(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function _g(e){return dc(e)}function Vg(e){return yr(e,0)||yr(e,1)&&"description"in e.properties&&eo(e.properties.description)&&e.properties.description.anyOf.length===2&&(mn(e.properties.description.anyOf[0])&&ai(e.properties.description.anyOf[1])||mn(e.properties.description.anyOf[1])&&ai(e.properties.description.anyOf[0]))}function od(e){return yr(e,0)}function zg(e){return yr(e,0)}function L4(e){return yr(e,0)}function j4(e){return yr(e,0)}function U4(e){return dc(e)}function _4(e){const t=ki();return yr(e,0)||yr(e,1)&&"length"in e.properties&&Jr(Se(e.properties.length,t))===S.True}function V4(e){return yr(e,0)}function dc(e){const t=ki();return yr(e,0)||yr(e,1)&&"length"in e.properties&&Jr(Se(e.properties.length,t))===S.True}function z4(e){const t=au([ja()],ja());return yr(e,0)||yr(e,1)&&"then"in e.properties&&Jr(Se(e.properties.then,t))===S.True}function xv(e,t){return Se(e,t)===S.False||wl(e)&&!wl(t)?S.False:S.True}function Ht(e,t){return hn(e)?S.False:fn(e)?S.Union:Po(e)||J1(e)&&_g(t)||Y1(e)&&od(t)||X1(e)&&zg(t)||Ra(e)&&Vg(t)||ec(e)&&L4(t)||mn(e)&&_g(t)||Ra(e)&&Vg(t)||hr(e)&&od(t)||ro(e)&&od(t)||wi(e)&&zg(t)||su(e)&&U4(t)||rc(e)&&j4(t)||tc(e)&&V4(t)||nc(e)&&_4(t)?S.True:Lt(e)&&mn(nf(e))?t[Zl]==="Record"?S.True:S.False:Lt(e)&&hr(nf(e))&&yr(t,0)?S.True:S.False}function q4(e,t){return bt(t)?vt(e,t):Lt(t)?Xr(e,t):Ye(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!wl(t.properties[r]))return S.False;if(wl(t.properties[r]))return S.True;if(xv(e.properties[r],t.properties[r])===S.False)return S.False}return S.True})():S.False}function W4(e,t){return bt(t)?vt(e,t):Ye(t)&&z4(t)?S.True:Em(t)?Jr(Se(e.item,t.item)):S.False}function nf(e){return hs in e.patternProperties?ki():gs in e.patternProperties?ui():Us("Unknown record key pattern")}function of(e){return hs in e.patternProperties?e.patternProperties[hs]:gs in e.patternProperties?e.patternProperties[gs]:Us("Unable to get record value schema")}function Xr(e,t){const[r,n]=[nf(t),of(t)];return J1(e)&&hr(r)&&Jr(Se(e,n))===S.True?S.True:su(e)&&hr(r)||mn(e)&&hr(r)||vi(e)&&hr(r)?Se(e,n):Ye(e)?(()=>{for(const o of Object.getOwnPropertyNames(e.properties))if(xv(n,e.properties[o])===S.False)return S.False;return S.True})():S.False}function K4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):Lt(t)?Se(of(e),of(t)):S.False}function G4(e,t){const r=Ba(e)?ui():e,n=Ba(t)?ui():t;return Se(r,n)}function Av(e,t){return Mo(e)&&ut(e.const)||mn(e)?S.True:S.False}function Z4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):Lt(t)?Xr(e,t):mn(t)?S.True:S.False}function H4(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):Lt(t)?Xr(e,t):Ra(t)?S.True:S.False}function J4(e,t){return La(e)?Se($l(e),t):La(t)?Se(e,$l(t)):Us("Invalid fallthrough for TemplateLiteral")}function Y4(e,t){return vi(t)&&e.items!==void 0&&e.items.every(r=>Se(r,t.items)===S.True)}function X4(e,t){return Po(e)?S.True:hn(e)?S.False:fn(e)?S.Union:S.False}function Q4(e,t){return bt(t)?vt(e,t):Ye(t)&&dc(t)||vi(t)&&Y4(e,t)?S.True:oc(t)?ht(e.items)&&!ht(t.items)||!ht(e.items)&&ht(t.items)?S.False:ht(e.items)&&!ht(t.items)||e.items.every((r,n)=>Se(r,t.items[n])===S.True)?S.True:S.False:S.False}function e3(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):Lt(t)?Xr(e,t):su(t)?S.True:S.False}function t3(e,t){return bt(t)?vt(e,t):Ye(t)?Ht(e,t):Lt(t)?Xr(e,t):ic(t)?o3(e):ai(t)?S.True:S.False}function zm(e,t){return t.anyOf.some(r=>Se(e,r)===S.True)?S.True:S.False}function r3(e,t){return e.anyOf.every(r=>Se(r,t)===S.True)?S.True:S.False}function Ev(e,t){return S.True}function n3(e,t){return Po(t)?kv():$i(t)?cc(e,t):eo(t)?zm(e,t):fn(t)?Vm():mn(t)?Av(e):hr(t)?Dv(e):ro(t)?$v(e):wi(t)?wv(e):vi(t)?k4(e):oc(t)?X4(e):Ye(t)?Ht(e,t):hn(t)?S.True:S.False}function o3(e,t){return ai(e)||ai(e)?S.True:S.False}function i3(e,t){return $i(t)?cc(e,t):eo(t)?zm(e,t):hn(t)?Ev():fn(t)?Vm():Ye(t)?Ht(e,t):ic(t)?S.True:S.False}function Se(e,t){return La(e)||La(t)?J4(e,t):Ba(e)||Ba(t)?G4(e,t):ms(e)||ms(t)?O4(e,t):fn(e)?$4(e,t):vi(e)?D4(e,t):ec(e)?A4(e,t):wi(e)?E4(e,t):Dm(e)?x4(e,t):tc(e)?C4(e,t):rc(e)?F4(e,t):nc(e)?S4(e,t):ro(e)?T4(e,t):$i(e)?M4(e,t):xm(e)?P4(e,t):Mo(e)?N4(e,t):Po(e)?I4():Am(e)?B4(e,t):hr(e)?R4(e,t):Ye(e)?q4(e,t):Lt(e)?K4(e,t):mn(e)?Z4(e,t):Ra(e)?H4(e,t):oc(e)?Q4(e,t):Em(e)?W4(e,t):su(e)?e3(e,t):ai(e)?t3(e,t):eo(e)?r3(e,t):hn(e)?n3(e,t):ic(e)?i3(e,t):Us(`Unknown left type operand '${e[I]}'`)}function uu(e,t){return Se(e,t)}function s3(e,t,r,n,o){const i={};for(const s of globalThis.Object.getOwnPropertyNames(e))i[s]=qm(e[s],t,r,n,Tr(o));return i}function a3(e,t,r,n,o){return s3(e.properties,t,r,n,o)}function u3(e,t,r,n,o){const i=a3(e,t,r,n,o);return Ut(i)}function l3(e,t,r,n){const o=uu(e,t);return o===S.Union?_t([r,n]):o===S.True?r:n}function qm(e,t,r,n,o){return Or(e)?u3(e,t,r,n,o):pi(e)?B(m3(e,t,r,n,o)):B(l3(e,t,r,n),o)}function c3(e,t,r,n,o){return{[e]:qm(gt(e),t,r,n,Tr(o))}}function d3(e,t,r,n,o){return e.reduce((i,s)=>({...i,...c3(s,t,r,n,o)}),{})}function f3(e,t,r,n,o){return d3(e.keys,t,r,n,o)}function m3(e,t,r,n,o){const i=f3(e,t,r,n,o);return Ut(i)}function h3(e){return e.allOf.every(t=>_s(t))}function g3(e){return e.anyOf.some(t=>_s(t))}function p3(e){return!_s(e.not)}function _s(e){return e[I]==="Intersect"?h3(e):e[I]==="Union"?g3(e):e[I]==="Not"?p3(e):e[I]==="Undefined"}function y3(e,t){return Wm($l(e),t)}function b3(e,t){const r=e.filter(n=>uu(n,t)===S.False);return r.length===1?r[0]:_t(r)}function Wm(e,t,r={}){return yi(e)?B(y3(e,t),r):Or(e)?B($3(e,t),r):B(Mt(e)?b3(e.anyOf,t):uu(e,t)!==S.False?Xe():e,r)}function v3(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Wm(e[n],t);return r}function w3(e,t){return v3(e.properties,t)}function $3(e,t){const r=w3(e,t);return Ut(r)}function k3(e,t){return Km($l(e),t)}function D3(e,t){const r=e.filter(n=>uu(n,t)!==S.False);return r.length===1?r[0]:_t(r)}function Km(e,t,r){return yi(e)?B(k3(e,t),r):Or(e)?B(E3(e,t),r):B(Mt(e)?D3(e.anyOf,t):uu(e,t)!==S.False?e:Xe(),r)}function x3(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Km(e[n],t);return r}function A3(e,t){return x3(e.properties,t)}function E3(e,t){const r=A3(e,t);return Ut(r)}function C3(e,t){return Ns(e)?B(e.returns,t):Xe(t)}function Cv(e){return Io(Oo(e))}function xi(e,t,r){return B({[I]:"Record",type:"object",patternProperties:{[e]:t}},r)}function Gm(e,t,r){const n={};for(const o of e)n[o]=t;return Tt(n,{...r,[Zl]:"Record"})}function F3(e,t,r){return HE(e)?Gm(No(e),t,r):xi(e.pattern,t,r)}function S3(e,t,r){return Gm(No(_t(e)),t,r)}function T3(e,t,r){return Gm([e.toString()],t,r)}function M3(e,t,r){return xi(e.source,t,r)}function P3(e,t,r){const n=ht(e.pattern)?gs:e.pattern;return xi(n,t,r)}function N3(e,t,r){return xi(gs,t,r)}function I3(e,t,r){return xi(EE,t,r)}function O3(e,t,r){return Tt({true:t,false:t},r)}function B3(e,t,r){return xi(hs,t,r)}function R3(e,t,r){return xi(hs,t,r)}function Fv(e,t,r={}){return Mt(e)?S3(e.anyOf,t,r):yi(e)?F3(e,t,r):gi(e)?T3(e.const,t,r):ru(e)?O3(e,t,r):Os(e)?B3(e,t,r):Bs(e)?R3(e,t,r):W1(e)?M3(e,t,r):ou(e)?P3(e,t,r):V1(e)?N3(e,t,r):nu(e)?I3(e,t,r):Xe(r)}function Zm(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function L3(e){const t=Zm(e);return t===gs?ui():t===hs?ki():ui({pattern:t})}function Sv(e){return e.patternProperties[Zm(e)]}function j3(e,t){return t.parameters=lu(e,t.parameters),t.returns=gn(e,t.returns),t}function U3(e,t){return t.parameters=lu(e,t.parameters),t.returns=gn(e,t.returns),t}function _3(e,t){return t.allOf=lu(e,t.allOf),t}function V3(e,t){return t.anyOf=lu(e,t.anyOf),t}function z3(e,t){return ht(t.items)||(t.items=lu(e,t.items)),t}function q3(e,t){return t.items=gn(e,t.items),t}function W3(e,t){return t.items=gn(e,t.items),t}function K3(e,t){return t.items=gn(e,t.items),t}function G3(e,t){return t.item=gn(e,t.item),t}function Z3(e,t){const r=X3(e,t.properties);return{...t,...Tt(r)}}function H3(e,t){const r=gn(e,L3(t)),n=gn(e,Sv(t)),o=Fv(r,n);return{...t,...o}}function J3(e,t){return t.index in e?e[t.index]:lc()}function Y3(e,t){const r=bm(t),n=To(t),o=gn(e,t);return r&&n?Cv(o):r&&!n?Io(o):!r&&n?Oo(o):o}function X3(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:Y3(e,t[n])}),{})}function lu(e,t){return t.map(r=>gn(e,r))}function gn(e,t){return Ns(t)?j3(e,t):Is(t)?U3(e,t):Yr(t)?_3(e,t):Mt(t)?V3(e,t):bi(t)?z3(e,t):Ms(t)?q3(e,t):Hl(t)?W3(e,t):Yl(t)?K3(e,t):Xl(t)?G3(e,t):bn(t)?Z3(e,t):Ql(t)?H3(e,t):z1(t)?J3(e,t):t}function Q3(e,t){return gn(t,gm(e))}function e6(e){return B({[I]:"Integer",type:"integer"},e)}function t6(e,t,r){return{[e]:Vs(gt(e),t,Tr(r))}}function r6(e,t,r){return e.reduce((o,i)=>({...o,...t6(i,t,r)}),{})}function n6(e,t,r){return r6(e.keys,t,r)}function o6(e,t,r){const n=n6(e,t,r);return Ut(n)}function i6(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function s6(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function a6(e){return e.toUpperCase()}function u6(e){return e.toLowerCase()}function l6(e,t,r){const n=Bm(e.pattern);if(!_a(n))return{...e,pattern:Tv(e.pattern,t)};const s=[...sc(n)].map(l=>gt(l)),a=Mv(s,t),u=_t(a);return sv([u],r)}function Tv(e,t){return typeof e=="string"?t==="Uncapitalize"?i6(e):t==="Capitalize"?s6(e):t==="Uppercase"?a6(e):t==="Lowercase"?u6(e):e:e.toString()}function Mv(e,t){return e.map(r=>Vs(r,t))}function Vs(e,t,r={}){return pi(e)?o6(e,t,r):yi(e)?l6(e,t,r):Mt(e)?_t(Mv(e.anyOf,t),r):gi(e)?gt(Tv(e.const,t),r):B(e,r)}function c6(e,t={}){return Vs(e,"Capitalize",t)}function d6(e,t={}){return Vs(e,"Lowercase",t)}function f6(e,t={}){return Vs(e,"Uncapitalize",t)}function m6(e,t={}){return Vs(e,"Uppercase",t)}function h6(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=fc(e[o],t,Tr(r));return n}function g6(e,t,r){return h6(e.properties,t,r)}function p6(e,t,r){const n=g6(e,t,r);return Ut(n)}function y6(e,t){return e.map(r=>Hm(r,t))}function b6(e,t){return e.map(r=>Hm(r,t))}function v6(e,t){const{[t]:r,...n}=e;return n}function w6(e,t){return t.reduce((r,n)=>v6(r,n),e)}function $6(e,t,r){const n=Pr(e,[mr,"$id","required","properties"]),o=w6(r,t);return Tt(o,n)}function k6(e){const t=e.reduce((r,n)=>q1(n)?[...r,gt(n)]:r,[]);return _t(t)}function Hm(e,t){return Yr(e)?Bo(y6(e.allOf,t)):Mt(e)?_t(b6(e.anyOf,t)):bn(e)?$6(e,t,e.properties):Tt({})}function fc(e,t,r){const n=br(t)?k6(t):t,o=ir(t)?No(t):t,i=pr(e),s=pr(t);return Or(e)?p6(e,o,r):pi(t)?E6(e,t,r):i&&s?$t("Omit",[e,n],r):!i&&s?$t("Omit",[e,n],r):i&&!s?$t("Omit",[e,n],r):B({...Hm(e,o),...r})}function D6(e,t,r){return{[t]:fc(e,[t],Tr(r))}}function x6(e,t,r){return t.reduce((n,o)=>({...n,...D6(e,o,r)}),{})}function A6(e,t,r){return x6(e,t.keys,r)}function E6(e,t,r){const n=A6(e,t,r);return Ut(n)}function C6(e,t,r){const n={};for(const o of globalThis.Object.getOwnPropertyNames(e))n[o]=mc(e[o],t,Tr(r));return n}function F6(e,t,r){return C6(e.properties,t,r)}function S6(e,t,r){const n=F6(e,t,r);return Ut(n)}function T6(e,t){return e.map(r=>Jm(r,t))}function M6(e,t){return e.map(r=>Jm(r,t))}function P6(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function N6(e,t,r){const n=Pr(e,[mr,"$id","required","properties"]),o=P6(r,t);return Tt(o,n)}function I6(e){const t=e.reduce((r,n)=>q1(n)?[...r,gt(n)]:r,[]);return _t(t)}function Jm(e,t){return Yr(e)?Bo(T6(e.allOf,t)):Mt(e)?_t(M6(e.anyOf,t)):bn(e)?N6(e,t,e.properties):Tt({})}function mc(e,t,r){const n=br(t)?I6(t):t,o=ir(t)?No(t):t,i=pr(e),s=pr(t);return Or(e)?S6(e,o,r):pi(t)?L6(e,t,r):i&&s?$t("Pick",[e,n],r):!i&&s?$t("Pick",[e,n],r):i&&!s?$t("Pick",[e,n],r):B({...Jm(e,o),...r})}function O6(e,t,r){return{[t]:mc(e,[t],Tr(r))}}function B6(e,t,r){return t.reduce((n,o)=>({...n,...O6(e,o,r)}),{})}function R6(e,t,r){return B6(e,t.keys,r)}function L6(e,t,r){const n=R6(e,t,r);return Ut(n)}function j6(e,t){return $t("Partial",[$t(e,t)])}function U6(e){return $t("Partial",[js(e)])}function _6(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Oo(e[r]);return t}function V6(e,t){const r=Pr(e,[mr,"$id","required","properties"]),n=_6(t);return Tt(n,r)}function qg(e){return e.map(t=>Pv(t))}function Pv(e){return Ps(e)?j6(e.target,e.parameters):pr(e)?U6(e.$ref):Yr(e)?Bo(qg(e.allOf)):Mt(e)?_t(qg(e.anyOf)):bn(e)?V6(e,e.properties):Jl(e)||ru(e)||Os(e)||gi(e)||vm(e)||Bs(e)||ou(e)||wm(e)||iu(e)?e:Tt({})}function Ym(e,t){return Or(e)?W6(e,t):B({...Pv(e),...t})}function z6(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Ym(e[n],Tr(t));return r}function q6(e,t){return z6(e.properties,t)}function W6(e,t){const r=q6(e,t);return Ut(r)}function K6(e,t){return $t("Required",[$t(e,t)])}function G6(e){return $t("Required",[js(e)])}function Z6(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Pr(e[r],[to]);return t}function H6(e,t){const r=Pr(e,[mr,"$id","required","properties"]),n=Z6(t);return Tt(n,r)}function Wg(e){return e.map(t=>Nv(t))}function Nv(e){return Ps(e)?K6(e.target,e.parameters):pr(e)?G6(e.$ref):Yr(e)?Bo(Wg(e.allOf)):Mt(e)?_t(Wg(e.anyOf)):bn(e)?H6(e,e.properties):Jl(e)||ru(e)||Os(e)||gi(e)||vm(e)||Bs(e)||ou(e)||wm(e)||iu(e)?e:Tt({})}function Xm(e,t){return Or(e)?X6(e,t):B({...Nv(e),...t})}function J6(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Xm(e[n],t);return r}function Y6(e,t){return J6(e.properties,t)}function X6(e,t){const r=Y6(e,t);return Ut(r)}function Q6(e,t){return t.map(r=>pr(r)?Qm(e,r.$ref):Nr(e,r))}function Qm(e,t){return t in e?pr(e[t])?Qm(e,e[t].$ref):Nr(e,e[t]):Xe()}function eF(e){return uc(e[0])}function tF(e){return ac(e[0],e[1])}function rF(e){return Um(e[0])}function nF(e){return Ym(e[0])}function oF(e){return fc(e[0],e[1])}function iF(e){return mc(e[0],e[1])}function sF(e){return Xm(e[0])}function aF(e,t,r){const n=Q6(e,r);return t==="Awaited"?eF(n):t==="Index"?tF(n):t==="KeyOf"?rF(n):t==="Partial"?nF(n):t==="Omit"?oF(n):t==="Pick"?iF(n):t==="Required"?sF(n):Xe()}function uF(e,t){return Pm(Nr(e,t))}function lF(e,t){return Nm(Nr(e,t))}function cF(e,t,r){return Im(cu(e,t),Nr(e,r))}function dF(e,t,r){return au(cu(e,t),Nr(e,r))}function fF(e,t){return Bo(cu(e,t))}function mF(e,t){return jm(Nr(e,t))}function hF(e,t){return Tt(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:Nr(e,t[n])}),{}))}function gF(e,t){const[r,n]=[Nr(e,Sv(t)),Zm(t)],o=gm(t);return o.patternProperties[n]=r,o}function pF(e,t){return pr(t)?{...Qm(e,t.$ref),[mr]:t[mr]}:t}function yF(e,t){return Ls(cu(e,t))}function bF(e,t){return _t(cu(e,t))}function cu(e,t){return t.map(r=>Nr(e,r))}function Nr(e,t){return To(t)?B(Nr(e,Pr(t,[to])),t):bm(t)?B(Nr(e,Pr(t,[tu])),t):Re(t)?B(pF(e,t),t):Ms(t)?B(uF(e,t.items),t):Hl(t)?B(lF(e,t.items),t):Ps(t)?B(aF(e,t.target,t.parameters)):Ns(t)?B(cF(e,t.parameters,t.returns),t):Is(t)?B(dF(e,t.parameters,t.returns),t):Yr(t)?B(fF(e,t.allOf),t):Yl(t)?B(mF(e,t.items),t):bn(t)?B(hF(e,t.properties),t):Ql(t)?B(gF(e,t)):bi(t)?B(yF(e,t.items||[]),t):Mt(t)?B(bF(e,t.anyOf),t):t}function vF(e,t){return t in e?Nr(e,e[t]):Xe()}function wF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:vF(e,r)}),{})}class $F{constructor(t){const r=wF(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:B(this.$defs[t],r)};return B({[I]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function kF(e){return new $F(e)}function DF(e,t){return B({[I]:"Not",not:e},t)}function xF(e,t){return Is(e)?Ls(e.parameters,t):Xe()}let AF=0;function EF(e,t={}){ht(t.$id)&&(t.$id=`T${AF++}`);const r=gm(e({[I]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,B({[Zl]:"Recursive",...r},t)}function CF(e,t){const r=ut(e)?new globalThis.RegExp(e):e;return B({[I]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function FF(e){return Yr(e)?e.allOf:Mt(e)?e.anyOf:bi(e)?e.items??[]:[]}function SF(e){return FF(e)}function TF(e,t){return Is(e)?B(e.returns,t):Xe(t)}class MF{constructor(t){this.schema=t}Decode(t){return new PF(this.schema,t)}}class PF{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const i={Encode:s=>r[mr].Encode(t(s)),Decode:s=>this.decode(r[mr].Decode(s))};return{...r,[mr]:i}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[mr]:n}}Encode(t){return Re(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function NF(e){return new MF(e)}function IF(e={}){return B({[I]:e[I]??"Unsafe"},e)}function OF(e){return B({[I]:"Void",type:"void"},e)}const BF=Object.freeze(Object.defineProperty({__proto__:null,Any:ja,Argument:NE,Array:Pm,AsyncIterator:Nm,Awaited:uc,BigInt:Rm,Boolean:ov,Capitalize:c6,Composite:h4,Const:y4,Constructor:Im,ConstructorParameters:b4,Date:gv,Enum:v4,Exclude:Wm,Extends:qm,Extract:Km,Function:au,Index:ac,InstanceType:C3,Instantiate:Q3,Integer:e6,Intersect:Bo,Iterator:jm,KeyOf:Um,Literal:gt,Lowercase:d6,Mapped:BC,Module:kF,Never:Xe,Not:DF,Null:pv,Number:ki,Object:Tt,Omit:fc,Optional:Oo,Parameters:xF,Partial:Ym,Pick:mc,Promise:lv,Readonly:Io,ReadonlyOptional:Cv,Record:Fv,Recursive:EF,Ref:js,RegExp:CF,Required:Xm,Rest:SF,ReturnType:TF,String:ui,Symbol:yv,TemplateLiteral:sv,Transform:NF,Tuple:Ls,Uint8Array:vv,Uncapitalize:f6,Undefined:bv,Union:_t,Unknown:lc,Unsafe:IF,Uppercase:m6,Void:OF},Symbol.toStringTag,{value:"Module"})),Ie=BF;function Iv(e){switch(e.errorType){case C.ArrayContains:return"Expected array to contain at least one matching value";case C.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case C.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case C.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case C.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case C.ArrayUniqueItems:return"Expected array elements to be unique";case C.Array:return"Expected array";case C.AsyncIterator:return"Expected AsyncIterator";case C.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case C.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case C.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case C.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case C.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case C.BigInt:return"Expected bigint";case C.Boolean:return"Expected boolean";case C.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case C.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case C.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case C.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case C.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case C.Date:return"Expected Date";case C.Function:return"Expected function";case C.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case C.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case C.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case C.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case C.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case C.Integer:return"Expected integer";case C.IntersectUnevaluatedProperties:return"Unexpected property";case C.Intersect:return"Expected all values to match";case C.Iterator:return"Expected Iterator";case C.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case C.Never:return"Never";case C.Not:return"Value should not match";case C.Null:return"Expected null";case C.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case C.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case C.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case C.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case C.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case C.Number:return"Expected number";case C.Object:return"Expected object";case C.ObjectAdditionalProperties:return"Unexpected property";case C.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case C.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case C.ObjectRequiredProperty:return"Expected required property";case C.Promise:return"Expected Promise";case C.RegExp:return"Expected string to match regular expression";case C.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case C.StringFormat:return`Expected string to match '${e.schema.format}' format`;case C.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case C.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case C.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case C.String:return"Expected string";case C.Symbol:return"Expected symbol";case C.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case C.Tuple:return"Expected tuple";case C.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case C.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case C.Uint8Array:return"Expected Uint8Array";case C.Undefined:return"Expected undefined";case C.Union:return"Expected union value";case C.Void:return"Expected void";case C.Kind:return`Expected kind '${e.schema[I]}'`;default:return"Unknown error type"}}let Ov=Iv;function RF(e){Ov=e}function LF(){return Ov}class jF extends jt{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function UF(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new jF(e);return Qr(r,t)}function hc(e,t){return!Er(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function Qr(e,t){return e[I]==="This"||e[I]==="Ref"?UF(e,t):e}class _F extends jt{constructor(t){super("Unable to hash value"),this.value=t}}var Ir;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(Ir||(Ir={}));let Vi=BigInt("14695981039346656037");const[VF,zF]=[BigInt("1099511628211"),BigInt("18446744073709551616")],qF=Array.from({length:256}).map((e,t)=>BigInt(t)),Bv=new Float64Array(1),Rv=new DataView(Bv.buffer),Lv=new Uint8Array(Bv.buffer);function*WF(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function KF(e){Gt(Ir.Array);for(const t of e)bs(t)}function GF(e){Gt(Ir.Boolean),Gt(e?1:0)}function ZF(e){Gt(Ir.BigInt),Rv.setBigInt64(0,e);for(const t of Lv)Gt(t)}function HF(e){Gt(Ir.Date),bs(e.getTime())}function JF(e){Gt(Ir.Null)}function YF(e){Gt(Ir.Number),Rv.setFloat64(0,e);for(const t of Lv)Gt(t)}function XF(e){Gt(Ir.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())bs(t),bs(e[t])}function QF(e){Gt(Ir.String);for(let t=0;t<e.length;t++)for(const r of WF(e.charCodeAt(t)))Gt(r)}function e8(e){Gt(Ir.Symbol),bs(e.description)}function t8(e){Gt(Ir.Uint8Array);for(let t=0;t<e.length;t++)Gt(e[t])}function r8(e){return Gt(Ir.Undefined)}function bs(e){if(Mr(e))return KF(e);if(Kl(e))return GF(e);if(Vn(e))return ZF(e);if(pm(e))return HF(e);if(Wl(e))return JF();if(oe(e))return YF(e);if(Tn(e))return XF(e);if(Er(e))return QF(e);if(Gl(e))return e8(e);if(ym(e))return t8(e);if(So(e))return r8();throw new _F(e)}function Gt(e){Vi=Vi^qF[e],Vi=Vi*VF%zF}function eh(e){return Vi=BigInt("14695981039346656037"),bs(e),Vi}class n8 extends jt{constructor(t){super("Unknown type"),this.schema=t}}function o8(e){return e[I]==="Any"||e[I]==="Unknown"}function le(e){return e!==void 0}function i8(e,t,r){return!0}function s8(e,t,r){return!0}function a8(e,t,r){if(!Mr(r)||le(e.minItems)&&!(r.length>=e.minItems)||le(e.maxItems)&&!(r.length<=e.maxItems)||!r.every(i=>Ct(e.items,t,i))||e.uniqueItems===!0&&!(function(){const i=new Set;for(const s of r){const a=eh(s);if(i.has(a))return!1;i.add(a)}return!0})())return!1;if(!(le(e.contains)||oe(e.minContains)||oe(e.maxContains)))return!0;const n=le(e.contains)?e.contains:Xe(),o=r.reduce((i,s)=>Ct(n,t,s)?i+1:i,0);return!(o===0||oe(e.minContains)&&o<e.minContains||oe(e.maxContains)&&o>e.maxContains)}function u8(e,t,r){return O1(r)}function l8(e,t,r){return!(!Vn(r)||le(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||le(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||le(e.maximum)&&!(r<=e.maximum)||le(e.minimum)&&!(r>=e.minimum)||le(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function c8(e,t,r){return Kl(r)}function d8(e,t,r){return Ct(e.returns,t,r.prototype)}function f8(e,t,r){return!(!pm(r)||le(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||le(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||le(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||le(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||le(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function m8(e,t,r){return U1(r)}function h8(e,t,r){const n=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];return Ct(o,[...t,...n],r)}function g8(e,t,r){return!(!j1(r)||le(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||le(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||le(e.maximum)&&!(r<=e.maximum)||le(e.minimum)&&!(r>=e.minimum)||le(e.multipleOf)&&r%e.multipleOf!==0)}function p8(e,t,r){const n=e.allOf.every(o=>Ct(o,t,r));if(e.unevaluatedProperties===!1){const o=new RegExp(ys(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s));return n&&i}else if(ir(e.unevaluatedProperties)){const o=new RegExp(ys(e)),i=Object.getOwnPropertyNames(r).every(s=>o.test(s)||Ct(e.unevaluatedProperties,t,r[s]));return n&&i}else return n}function y8(e,t,r){return B1(r)}function b8(e,t,r){return r===e.const}function v8(e,t,r){return!1}function w8(e,t,r){return!Ct(e.not,t,r)}function $8(e,t,r){return Wl(r)}function k8(e,t,r){return!(!at.IsNumberLike(r)||le(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||le(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||le(e.minimum)&&!(r>=e.minimum)||le(e.maximum)&&!(r<=e.maximum)||le(e.multipleOf)&&r%e.multipleOf!==0)}function D8(e,t,r){if(!at.IsObjectLike(r)||le(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||le(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const o of n){const i=e.properties[o];if(e.required&&e.required.includes(o)){if(!Ct(i,t,r[o])||(_s(i)||o8(i))&&!(o in r))return!1}else if(at.IsExactOptionalProperty(r,o)&&!Ct(i,t,r[o]))return!1}if(e.additionalProperties===!1){const o=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&o.length===n.length?!0:o.every(i=>n.includes(i))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(i=>n.includes(i)||Ct(e.additionalProperties,t,r[i])):!0}function x8(e,t,r){return R1(r)}function A8(e,t,r){if(!at.IsRecordLike(r)||le(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||le(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,o]=Object.entries(e.patternProperties)[0],i=new RegExp(n),s=Object.entries(r).every(([l,c])=>i.test(l)?Ct(o,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([l,c])=>i.test(l)?!0:Ct(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(l=>i.test(l)):!0;return s&&a&&u}function E8(e,t,r){return Ct(Qr(e,t),t,r)}function C8(e,t,r){const n=new RegExp(e.source,e.flags);return le(e.minLength)&&!(r.length>=e.minLength)||le(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function F8(e,t,r){return!Er(r)||le(e.minLength)&&!(r.length>=e.minLength)||le(e.maxLength)&&!(r.length<=e.maxLength)||le(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:le(e.format)?Cm(e.format)?Fm(e.format)(r):!1:!0}function S8(e,t,r){return Gl(r)}function T8(e,t,r){return Er(r)&&new RegExp(e.pattern).test(r)}function M8(e,t,r){return Ct(Qr(e,t),t,r)}function P8(e,t,r){if(!Mr(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!Ct(e.items[n],t,r[n]))return!1;return!0}function N8(e,t,r){return So(r)}function I8(e,t,r){return e.anyOf.some(n=>Ct(n,t,r))}function O8(e,t,r){return!(!ym(r)||le(e.maxByteLength)&&!(r.length<=e.maxByteLength)||le(e.minByteLength)&&!(r.length>=e.minByteLength))}function B8(e,t,r){return!0}function R8(e,t,r){return at.IsVoidLike(r)}function L8(e,t,r){return Co(e[I])?Mm(e[I])(e,r):!1}function Ct(e,t,r){const n=le(e.$id)?hc(e,t):t,o=e;switch(o[I]){case"Any":return i8();case"Argument":return s8();case"Array":return a8(o,n,r);case"AsyncIterator":return u8(o,n,r);case"BigInt":return l8(o,n,r);case"Boolean":return c8(o,n,r);case"Constructor":return d8(o,n,r);case"Date":return f8(o,n,r);case"Function":return m8(o,n,r);case"Import":return h8(o,n,r);case"Integer":return g8(o,n,r);case"Intersect":return p8(o,n,r);case"Iterator":return y8(o,n,r);case"Literal":return b8(o,n,r);case"Never":return v8();case"Not":return w8(o,n,r);case"Null":return $8(o,n,r);case"Number":return k8(o,n,r);case"Object":return D8(o,n,r);case"Promise":return x8(o,n,r);case"Record":return A8(o,n,r);case"Ref":return E8(o,n,r);case"RegExp":return C8(o,n,r);case"String":return F8(o,n,r);case"Symbol":return S8(o,n,r);case"TemplateLiteral":return T8(o,n,r);case"This":return M8(o,n,r);case"Tuple":return P8(o,n,r);case"Undefined":return N8(o,n,r);case"Union":return I8(o,n,r);case"Uint8Array":return O8(o,n,r);case"Unknown":return B8();case"Void":return R8(o,n,r);default:if(!Co(o[I]))throw new n8(o);return L8(o,n,r)}}function kl(...e){return e.length===3?Ct(e[0],e[1],e[2]):Ct(e[0],[],e[1])}var C;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(C||(C={}));class j8 extends jt{constructor(t){super("Unknown type"),this.schema=t}}function jn(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function ue(e){return e!==void 0}class jv{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function R(e,t,r,n,o=[]){return{type:e,schema:t,path:r,value:n,message:LF()({errorType:e,path:r,schema:t,value:n,errors:o}),errors:o}}function*U8(e,t,r,n){}function*_8(e,t,r,n){}function*V8(e,t,r,n){if(!Mr(n))return yield R(C.Array,e,r,n);ue(e.minItems)&&!(n.length>=e.minItems)&&(yield R(C.ArrayMinItems,e,r,n)),ue(e.maxItems)&&!(n.length<=e.maxItems)&&(yield R(C.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*Ft(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const u=eh(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield R(C.ArrayUniqueItems,e,r,n)),!(ue(e.contains)||ue(e.minContains)||ue(e.maxContains)))return;const o=ue(e.contains)?e.contains:Xe(),i=n.reduce((s,a,u)=>Ft(o,t,`${r}${u}`,a).next().done===!0?s+1:s,0);i===0&&(yield R(C.ArrayContains,e,r,n)),oe(e.minContains)&&i<e.minContains&&(yield R(C.ArrayMinContains,e,r,n)),oe(e.maxContains)&&i>e.maxContains&&(yield R(C.ArrayMaxContains,e,r,n))}function*z8(e,t,r,n){O1(n)||(yield R(C.AsyncIterator,e,r,n))}function*q8(e,t,r,n){if(!Vn(n))return yield R(C.BigInt,e,r,n);ue(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield R(C.BigIntExclusiveMaximum,e,r,n)),ue(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield R(C.BigIntExclusiveMinimum,e,r,n)),ue(e.maximum)&&!(n<=e.maximum)&&(yield R(C.BigIntMaximum,e,r,n)),ue(e.minimum)&&!(n>=e.minimum)&&(yield R(C.BigIntMinimum,e,r,n)),ue(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield R(C.BigIntMultipleOf,e,r,n))}function*W8(e,t,r,n){Kl(n)||(yield R(C.Boolean,e,r,n))}function*K8(e,t,r,n){yield*Ft(e.returns,t,r,n.prototype)}function*G8(e,t,r,n){if(!pm(n))return yield R(C.Date,e,r,n);ue(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield R(C.DateExclusiveMaximumTimestamp,e,r,n)),ue(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield R(C.DateExclusiveMinimumTimestamp,e,r,n)),ue(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield R(C.DateMaximumTimestamp,e,r,n)),ue(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield R(C.DateMinimumTimestamp,e,r,n)),ue(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield R(C.DateMultipleOfTimestamp,e,r,n))}function*Z8(e,t,r,n){U1(n)||(yield R(C.Function,e,r,n))}function*H8(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];yield*Ft(i,[...t,...o],r,n)}function*J8(e,t,r,n){if(!j1(n))return yield R(C.Integer,e,r,n);ue(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield R(C.IntegerExclusiveMaximum,e,r,n)),ue(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield R(C.IntegerExclusiveMinimum,e,r,n)),ue(e.maximum)&&!(n<=e.maximum)&&(yield R(C.IntegerMaximum,e,r,n)),ue(e.minimum)&&!(n>=e.minimum)&&(yield R(C.IntegerMinimum,e,r,n)),ue(e.multipleOf)&&n%e.multipleOf!==0&&(yield R(C.IntegerMultipleOf,e,r,n))}function*Y8(e,t,r,n){let o=!1;for(const i of e.allOf)for(const s of Ft(i,t,r,n))o=!0,yield s;if(o)return yield R(C.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const i=new RegExp(ys(e));for(const s of Object.getOwnPropertyNames(n))i.test(s)||(yield R(C.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const i=new RegExp(ys(e));for(const s of Object.getOwnPropertyNames(n))if(!i.test(s)){const a=Ft(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*X8(e,t,r,n){B1(n)||(yield R(C.Iterator,e,r,n))}function*Q8(e,t,r,n){n!==e.const&&(yield R(C.Literal,e,r,n))}function*eS(e,t,r,n){yield R(C.Never,e,r,n)}function*tS(e,t,r,n){Ft(e.not,t,r,n).next().done===!0&&(yield R(C.Not,e,r,n))}function*rS(e,t,r,n){Wl(n)||(yield R(C.Null,e,r,n))}function*nS(e,t,r,n){if(!at.IsNumberLike(n))return yield R(C.Number,e,r,n);ue(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield R(C.NumberExclusiveMaximum,e,r,n)),ue(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield R(C.NumberExclusiveMinimum,e,r,n)),ue(e.maximum)&&!(n<=e.maximum)&&(yield R(C.NumberMaximum,e,r,n)),ue(e.minimum)&&!(n>=e.minimum)&&(yield R(C.NumberMinimum,e,r,n)),ue(e.multipleOf)&&n%e.multipleOf!==0&&(yield R(C.NumberMultipleOf,e,r,n))}function*oS(e,t,r,n){if(!at.IsObjectLike(n))return yield R(C.Object,e,r,n);ue(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield R(C.ObjectMinProperties,e,r,n)),ue(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield R(C.ObjectMaxProperties,e,r,n));const o=Array.isArray(e.required)?e.required:[],i=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of o)s.includes(a)||(yield R(C.ObjectRequiredProperty,e.properties[a],`${r}/${jn(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)i.includes(a)||(yield R(C.ObjectAdditionalProperties,e,`${r}/${jn(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)i.includes(a)||(yield*Ft(e.additionalProperties,t,`${r}/${jn(a)}`,n[a]));for(const a of i){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*Ft(u,t,`${r}/${jn(a)}`,n[a]),_s(e)&&!(a in n)&&(yield R(C.ObjectRequiredProperty,u,`${r}/${jn(a)}`,void 0))):at.IsExactOptionalProperty(n,a)&&(yield*Ft(u,t,`${r}/${jn(a)}`,n[a]))}}function*iS(e,t,r,n){R1(n)||(yield R(C.Promise,e,r,n))}function*sS(e,t,r,n){if(!at.IsRecordLike(n))return yield R(C.Object,e,r,n);ue(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield R(C.ObjectMinProperties,e,r,n)),ue(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield R(C.ObjectMaxProperties,e,r,n));const[o,i]=Object.entries(e.patternProperties)[0],s=new RegExp(o);for(const[a,u]of Object.entries(n))s.test(a)&&(yield*Ft(i,t,`${r}/${jn(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(n))s.test(a)||(yield*Ft(e.additionalProperties,t,`${r}/${jn(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(n))if(!s.test(a))return yield R(C.ObjectAdditionalProperties,e,`${r}/${jn(a)}`,u)}}function*aS(e,t,r,n){yield*Ft(Qr(e,t),t,r,n)}function*uS(e,t,r,n){if(!Er(n))return yield R(C.String,e,r,n);if(ue(e.minLength)&&!(n.length>=e.minLength)&&(yield R(C.StringMinLength,e,r,n)),ue(e.maxLength)&&!(n.length<=e.maxLength)&&(yield R(C.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield R(C.RegExp,e,r,n)}function*lS(e,t,r,n){if(!Er(n))return yield R(C.String,e,r,n);ue(e.minLength)&&!(n.length>=e.minLength)&&(yield R(C.StringMinLength,e,r,n)),ue(e.maxLength)&&!(n.length<=e.maxLength)&&(yield R(C.StringMaxLength,e,r,n)),Er(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield R(C.StringPattern,e,r,n))),Er(e.format)&&(Cm(e.format)?Fm(e.format)(n)||(yield R(C.StringFormat,e,r,n)):yield R(C.StringFormatUnknown,e,r,n))}function*cS(e,t,r,n){Gl(n)||(yield R(C.Symbol,e,r,n))}function*dS(e,t,r,n){if(!Er(n))return yield R(C.String,e,r,n);new RegExp(e.pattern).test(n)||(yield R(C.StringPattern,e,r,n))}function*fS(e,t,r,n){yield*Ft(Qr(e,t),t,r,n)}function*mS(e,t,r,n){if(!Mr(n))return yield R(C.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield R(C.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield R(C.TupleLength,e,r,n);if(e.items)for(let o=0;o<e.items.length;o++)yield*Ft(e.items[o],t,`${r}/${o}`,n[o])}function*hS(e,t,r,n){So(n)||(yield R(C.Undefined,e,r,n))}function*gS(e,t,r,n){if(kl(e,t,n))return;const o=e.anyOf.map(i=>new jv(Ft(i,t,r,n)));yield R(C.Union,e,r,n,o)}function*pS(e,t,r,n){if(!ym(n))return yield R(C.Uint8Array,e,r,n);ue(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield R(C.Uint8ArrayMaxByteLength,e,r,n)),ue(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield R(C.Uint8ArrayMinByteLength,e,r,n))}function*yS(e,t,r,n){}function*bS(e,t,r,n){at.IsVoidLike(n)||(yield R(C.Void,e,r,n))}function*vS(e,t,r,n){Mm(e[I])(e,n)||(yield R(C.Kind,e,r,n))}function*Ft(e,t,r,n){const o=ue(e.$id)?[...t,e]:t,i=e;switch(i[I]){case"Any":return yield*U8();case"Argument":return yield*_8();case"Array":return yield*V8(i,o,r,n);case"AsyncIterator":return yield*z8(i,o,r,n);case"BigInt":return yield*q8(i,o,r,n);case"Boolean":return yield*W8(i,o,r,n);case"Constructor":return yield*K8(i,o,r,n);case"Date":return yield*G8(i,o,r,n);case"Function":return yield*Z8(i,o,r,n);case"Import":return yield*H8(i,o,r,n);case"Integer":return yield*J8(i,o,r,n);case"Intersect":return yield*Y8(i,o,r,n);case"Iterator":return yield*X8(i,o,r,n);case"Literal":return yield*Q8(i,o,r,n);case"Never":return yield*eS(i,o,r,n);case"Not":return yield*tS(i,o,r,n);case"Null":return yield*rS(i,o,r,n);case"Number":return yield*nS(i,o,r,n);case"Object":return yield*oS(i,o,r,n);case"Promise":return yield*iS(i,o,r,n);case"Record":return yield*sS(i,o,r,n);case"Ref":return yield*aS(i,o,r,n);case"RegExp":return yield*uS(i,o,r,n);case"String":return yield*lS(i,o,r,n);case"Symbol":return yield*cS(i,o,r,n);case"TemplateLiteral":return yield*dS(i,o,r,n);case"This":return yield*fS(i,o,r,n);case"Tuple":return yield*mS(i,o,r,n);case"Undefined":return yield*hS(i,o,r,n);case"Union":return yield*gS(i,o,r,n);case"Uint8Array":return yield*pS(i,o,r,n);case"Unknown":return yield*yS();case"Void":return yield*bS(i,o,r,n);default:if(!Co(i[I]))throw new j8(e);return yield*vS(i,o,r,n)}}function wS(...e){const t=e.length===3?Ft(e[0],e[1],"",e[2]):Ft(e[0],[],"",e[1]);return new jv(t)}class $S extends jt{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class kS extends jt{constructor(t,r,n,o){super(o instanceof Error?o.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=o}}function qe(e,t,r){try{return Re(e)?e[mr].Decode(r):r}catch(n){throw new kS(e,t,r,n)}}function DS(e,t,r,n){return Mr(n)?qe(e,r,n.map((o,i)=>vn(e.items,t,`${r}/${i}`,o))):qe(e,r,n)}function xS(e,t,r,n){if(!Tn(n)||_1(n))return qe(e,r,n);const o=hv(e),i=o.map(c=>c[0]),s={...n};for(const[c,d]of o)c in s&&(s[c]=vn(d,t,`${r}/${c}`,s[c]));if(!Re(e.unevaluatedProperties))return qe(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)i.includes(c)||(l[c]=qe(u,`${r}/${c}`,l[c]));return qe(e,r,l)}function AS(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=vn(i,[...t,...o],r,n);return qe(e,r,s)}function ES(e,t,r,n){return qe(e,r,vn(e.not,t,r,n))}function CS(e,t,r,n){if(!Tn(n))return qe(e,r,n);const o=Di(e),i={...n};for(const l of o)L1(i,l)&&(So(i[l])&&(!iu(e.properties[l])||at.IsExactOptionalProperty(i,l))||(i[l]=vn(e.properties[l],t,`${r}/${l}`,i[l])));if(!ir(e.additionalProperties))return qe(e,r,i);const s=Object.getOwnPropertyNames(i),a=e.additionalProperties,u={...i};for(const l of s)o.includes(l)||(u[l]=qe(a,`${r}/${l}`,u[l]));return qe(e,r,u)}function FS(e,t,r,n){if(!Tn(n))return qe(e,r,n);const o=Object.getOwnPropertyNames(e.patternProperties)[0],i=new RegExp(o),s={...n};for(const c of Object.getOwnPropertyNames(n))i.test(c)&&(s[c]=vn(e.patternProperties[o],t,`${r}/${c}`,s[c]));if(!ir(e.additionalProperties))return qe(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)i.test(c)||(l[c]=qe(u,`${r}/${c}`,l[c]));return qe(e,r,l)}function SS(e,t,r,n){const o=Qr(e,t);return qe(e,r,vn(o,t,r,n))}function TS(e,t,r,n){const o=Qr(e,t);return qe(e,r,vn(o,t,r,n))}function MS(e,t,r,n){return Mr(n)&&Mr(e.items)?qe(e,r,e.items.map((o,i)=>vn(o,t,`${r}/${i}`,n[i]))):qe(e,r,n)}function PS(e,t,r,n){for(const o of e.anyOf){if(!kl(o,t,n))continue;const i=vn(o,t,r,n);return qe(e,r,i)}return qe(e,r,n)}function vn(e,t,r,n){const o=hc(e,t),i=e;switch(e[I]){case"Array":return DS(i,o,r,n);case"Import":return AS(i,o,r,n);case"Intersect":return xS(i,o,r,n);case"Not":return ES(i,o,r,n);case"Object":return CS(i,o,r,n);case"Record":return FS(i,o,r,n);case"Ref":return SS(i,o,r,n);case"Symbol":return qe(i,r,n);case"This":return TS(i,o,r,n);case"Tuple":return MS(i,o,r,n);case"Union":return PS(i,o,r,n);default:return qe(i,r,n)}}function NS(e,t,r){return vn(e,t,"",r)}class IS extends jt{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class OS extends jt{constructor(t,r,n,o){super(`${o instanceof Error?o.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=o}}function Rt(e,t,r){try{return Re(e)?e[mr].Encode(r):r}catch(n){throw new OS(e,t,r,n)}}function BS(e,t,r,n){const o=Rt(e,r,n);return Mr(o)?o.map((i,s)=>pn(e.items,t,`${r}/${s}`,i)):o}function RS(e,t,r,n){const o=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref],s=Rt(e,r,n);return pn(i,[...t,...o],r,s)}function LS(e,t,r,n){const o=Rt(e,r,n);if(!Tn(n)||_1(n))return o;const i=hv(e),s=i.map(d=>d[0]),a={...o};for(const[d,f]of i)d in a&&(a[d]=pn(f,t,`${r}/${d}`,a[d]));if(!Re(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const d of u)s.includes(d)||(c[d]=Rt(l,`${r}/${d}`,c[d]));return c}function jS(e,t,r,n){return Rt(e.not,r,Rt(e,r,n))}function US(e,t,r,n){const o=Rt(e,r,n);if(!Tn(o))return o;const i=Di(e),s={...o};for(const c of i)L1(s,c)&&(So(s[c])&&(!iu(e.properties[c])||at.IsExactOptionalProperty(s,c))||(s[c]=pn(e.properties[c],t,`${r}/${c}`,s[c])));if(!ir(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)i.includes(c)||(l[c]=Rt(u,`${r}/${c}`,l[c]));return l}function _S(e,t,r,n){const o=Rt(e,r,n);if(!Tn(n))return o;const i=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(i),a={...o};for(const d of Object.getOwnPropertyNames(n))s.test(d)&&(a[d]=pn(e.patternProperties[i],t,`${r}/${d}`,a[d]));if(!ir(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const d of u)s.test(d)||(c[d]=Rt(l,`${r}/${d}`,c[d]));return c}function VS(e,t,r,n){const o=Qr(e,t),i=pn(o,t,r,n);return Rt(e,r,i)}function zS(e,t,r,n){const o=Qr(e,t),i=pn(o,t,r,n);return Rt(e,r,i)}function qS(e,t,r,n){const o=Rt(e,r,n);return Mr(e.items)?e.items.map((i,s)=>pn(i,t,`${r}/${s}`,o[s])):[]}function WS(e,t,r,n){for(const o of e.anyOf){if(!kl(o,t,n))continue;const i=pn(o,t,r,n);return Rt(e,r,i)}for(const o of e.anyOf){const i=pn(o,t,r,n);if(kl(e,t,i))return Rt(e,r,i)}return Rt(e,r,n)}function pn(e,t,r,n){const o=hc(e,t),i=e;switch(e[I]){case"Array":return BS(i,o,r,n);case"Import":return RS(i,o,r,n);case"Intersect":return LS(i,o,r,n);case"Not":return jS(i,o,r,n);case"Object":return US(i,o,r,n);case"Record":return _S(i,o,r,n);case"Ref":return VS(i,o,r,n);case"This":return zS(i,o,r,n);case"Tuple":return qS(i,o,r,n);case"Union":return WS(i,o,r,n);default:return Rt(i,r,n)}}function KS(e,t,r){return pn(e,t,"",r)}function GS(e,t){return Re(e)||kt(e.items,t)}function ZS(e,t){return Re(e)||kt(e.items,t)}function HS(e,t){return Re(e)||kt(e.returns,t)||e.parameters.some(r=>kt(r,t))}function JS(e,t){return Re(e)||kt(e.returns,t)||e.parameters.some(r=>kt(r,t))}function YS(e,t){return Re(e)||Re(e.unevaluatedProperties)||e.allOf.some(r=>kt(r,t))}function XS(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((o,i)=>[...o,e.$defs[i]],[]),n=e.$defs[e.$ref];return Re(e)||kt(n,[...r,...t])}function QS(e,t){return Re(e)||kt(e.items,t)}function e9(e,t){return Re(e)||kt(e.not,t)}function t9(e,t){return Re(e)||Object.values(e.properties).some(r=>kt(r,t))||ir(e.additionalProperties)&&kt(e.additionalProperties,t)}function r9(e,t){return Re(e)||kt(e.item,t)}function n9(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return Re(e)||kt(n,t)||ir(e.additionalProperties)&&Re(e.additionalProperties)}function o9(e,t){return Re(e)?!0:kt(Qr(e,t),t)}function i9(e,t){return Re(e)?!0:kt(Qr(e,t),t)}function s9(e,t){return Re(e)||!So(e.items)&&e.items.some(r=>kt(r,t))}function a9(e,t){return Re(e)||e.anyOf.some(r=>kt(r,t))}function kt(e,t){const r=hc(e,t),n=e;if(e.$id&&sf.has(e.$id))return!1;switch(e.$id&&sf.add(e.$id),e[I]){case"Array":return GS(n,r);case"AsyncIterator":return ZS(n,r);case"Constructor":return HS(n,r);case"Function":return JS(n,r);case"Import":return XS(n,r);case"Intersect":return YS(n,r);case"Iterator":return QS(n,r);case"Not":return e9(n,r);case"Object":return t9(n,r);case"Promise":return r9(n,r);case"Record":return n9(n,r);case"Ref":return o9(n,r);case"This":return i9(n,r);case"Tuple":return s9(n,r);case"Union":return a9(n,r);default:return Re(e)}}const sf=new Set;function u9(e,t){return sf.clear(),kt(e,t)}class l9{constructor(t,r,n,o){this.schema=t,this.references=r,this.checkFunc=n,this.code=o,this.hasTransform=u9(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return wS(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new $S(this.schema,t,this.Errors(t).First());return this.hasTransform?NS(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?KS(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new IS(this.schema,t,this.Errors(t).First());return r}}var zn;(function(e){function t(i){return i===36}e.DollarSign=t;function r(i){return i===95}e.IsUnderscore=r;function n(i){return i>=65&&i<=90||i>=97&&i<=122}e.IsAlpha=n;function o(i){return i>=48&&i<=57}e.IsNumeric=o})(zn||(zn={}));var Dl;(function(e){function t(i){return i.length===0?!1:zn.IsNumeric(i.charCodeAt(0))}function r(i){if(t(i))return!1;for(let s=0;s<i.length;s++){const a=i.charCodeAt(s);if(!(zn.IsAlpha(a)||zn.IsNumeric(a)||zn.DollarSign(a)||zn.IsUnderscore(a)))return!1}return!0}function n(i){return i.replace(/'/g,"\\'")}function o(i,s){return r(s)?`${i}.${s}`:`${i}['${n(s)}']`}e.Encode=o})(Dl||(Dl={}));var af;(function(e){function t(r){const n=[];for(let o=0;o<r.length;o++){const i=r.charCodeAt(o);zn.IsNumeric(i)||zn.IsAlpha(i)?n.push(r.charAt(o)):n.push(`_${i}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(af||(af={}));var uf;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(uf||(uf={}));class c9 extends jt{constructor(t){super("Unknown type"),this.schema=t}}class Kg extends jt{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Go;(function(e){function t(s,a,u){return at.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${Dl.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function r(s){return at.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return at.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function o(s){return at.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=o;function i(s){return at.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=i})(Go||(Go={}));var va;(function(e){function t(b){return b[I]==="Any"||b[I]==="Unknown"}function*r(b,j,x){yield"true"}function*n(b,j,x){yield"true"}function*o(b,j,x){yield`Array.isArray(${x})`;const[H,q]=[so("value","any"),so("acc","number")];oe(b.maxItems)&&(yield`${x}.length <= ${b.maxItems}`),oe(b.minItems)&&(yield`${x}.length >= ${b.minItems}`);const K=Xt(b.items,j,"value");if(yield`${x}.every((${H}) => ${K})`,He(b.contains)||oe(b.minContains)||oe(b.maxContains)){const Ne=He(b.contains)?b.contains:Xe(),ar=Xt(Ne,j,"value"),Pn=oe(b.minContains)?[`(count >= ${b.minContains})`]:[],tn=oe(b.maxContains)?[`(count <= ${b.maxContains})`]:[],kn=`const count = value.reduce((${q}, ${H}) => ${ar} ? acc + 1 : acc, 0)`,gu=["(count > 0)",...Pn,...tn].join(" && ");yield`((${H}) => { ${kn}; return ${gu}})(${x})`}b.uniqueItems===!0&&(yield`((${H}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${x})`)}function*i(b,j,x){yield`(typeof value === 'object' && Symbol.asyncIterator in ${x})`}function*s(b,j,x){yield`(typeof ${x} === 'bigint')`,Vn(b.exclusiveMaximum)&&(yield`${x} < BigInt(${b.exclusiveMaximum})`),Vn(b.exclusiveMinimum)&&(yield`${x} > BigInt(${b.exclusiveMinimum})`),Vn(b.maximum)&&(yield`${x} <= BigInt(${b.maximum})`),Vn(b.minimum)&&(yield`${x} >= BigInt(${b.minimum})`),Vn(b.multipleOf)&&(yield`(${x} % BigInt(${b.multipleOf})) === 0`)}function*a(b,j,x){yield`(typeof ${x} === 'boolean')`}function*u(b,j,x){yield*Yt(b.returns,j,`${x}.prototype`)}function*l(b,j,x){yield`(${x} instanceof Date) && Number.isFinite(${x}.getTime())`,oe(b.exclusiveMaximumTimestamp)&&(yield`${x}.getTime() < ${b.exclusiveMaximumTimestamp}`),oe(b.exclusiveMinimumTimestamp)&&(yield`${x}.getTime() > ${b.exclusiveMinimumTimestamp}`),oe(b.maximumTimestamp)&&(yield`${x}.getTime() <= ${b.maximumTimestamp}`),oe(b.minimumTimestamp)&&(yield`${x}.getTime() >= ${b.minimumTimestamp}`),oe(b.multipleOfTimestamp)&&(yield`(${x}.getTime() % ${b.multipleOfTimestamp}) === 0`)}function*c(b,j,x){yield`(typeof ${x} === 'function')`}function*d(b,j,x){const H=globalThis.Object.getOwnPropertyNames(b.$defs).reduce((q,K)=>[...q,b.$defs[K]],[]);yield*Yt(js(b.$ref),[...j,...H],x)}function*f(b,j,x){yield`Number.isInteger(${x})`,oe(b.exclusiveMaximum)&&(yield`${x} < ${b.exclusiveMaximum}`),oe(b.exclusiveMinimum)&&(yield`${x} > ${b.exclusiveMinimum}`),oe(b.maximum)&&(yield`${x} <= ${b.maximum}`),oe(b.minimum)&&(yield`${x} >= ${b.minimum}`),oe(b.multipleOf)&&(yield`(${x} % ${b.multipleOf}) === 0`)}function*m(b,j,x){const H=b.allOf.map(q=>Xt(q,j,x)).join(" && ");if(b.unevaluatedProperties===!1){const q=Rr(`${new RegExp(ys(b))};`),K=`Object.getOwnPropertyNames(${x}).every(key => ${q}.test(key))`;yield`(${H} && ${K})`}else if(He(b.unevaluatedProperties)){const q=Rr(`${new RegExp(ys(b))};`),K=`Object.getOwnPropertyNames(${x}).every(key => ${q}.test(key) || ${Xt(b.unevaluatedProperties,j,`${x}[key]`)})`;yield`(${H} && ${K})`}else yield`(${H})`}function*v(b,j,x){yield`(typeof value === 'object' && Symbol.iterator in ${x})`}function*$(b,j,x){typeof b.const=="number"||typeof b.const=="boolean"?yield`(${x} === ${b.const})`:yield`(${x} === '${uf.Escape(b.const)}')`}function*k(b,j,x){yield"false"}function*D(b,j,x){yield`(!${Xt(b.not,j,x)})`}function*E(b,j,x){yield`(${x} === null)`}function*P(b,j,x){yield Go.IsNumberLike(x),oe(b.exclusiveMaximum)&&(yield`${x} < ${b.exclusiveMaximum}`),oe(b.exclusiveMinimum)&&(yield`${x} > ${b.exclusiveMinimum}`),oe(b.maximum)&&(yield`${x} <= ${b.maximum}`),oe(b.minimum)&&(yield`${x} >= ${b.minimum}`),oe(b.multipleOf)&&(yield`(${x} % ${b.multipleOf}) === 0`)}function*O(b,j,x){yield Go.IsObjectLike(x),oe(b.minProperties)&&(yield`Object.getOwnPropertyNames(${x}).length >= ${b.minProperties}`),oe(b.maxProperties)&&(yield`Object.getOwnPropertyNames(${x}).length <= ${b.maxProperties}`);const H=Object.getOwnPropertyNames(b.properties);for(const q of H){const K=Dl.Encode(x,q),Ne=b.properties[q];if(b.required&&b.required.includes(q))yield*Yt(Ne,j,K),(_s(Ne)||t(Ne))&&(yield`('${q}' in ${x})`);else{const ar=Xt(Ne,j,K);yield Go.IsExactOptionalProperty(x,q,ar)}}if(b.additionalProperties===!1)if(b.required&&b.required.length===H.length)yield`Object.getOwnPropertyNames(${x}).length === ${H.length}`;else{const q=`[${H.map(K=>`'${K}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${x}).every(key => ${q}.includes(key))`}if(typeof b.additionalProperties=="object"){const q=Xt(b.additionalProperties,j,`${x}[key]`),K=`[${H.map(Ne=>`'${Ne}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${x}).every(key => ${K}.includes(key) || ${q}))`}}function*z(b,j,x){yield`${x} instanceof Promise`}function*ie(b,j,x){yield Go.IsRecordLike(x),oe(b.minProperties)&&(yield`Object.getOwnPropertyNames(${x}).length >= ${b.minProperties}`),oe(b.maxProperties)&&(yield`Object.getOwnPropertyNames(${x}).length <= ${b.maxProperties}`);const[H,q]=Object.entries(b.patternProperties)[0],K=Rr(`${new RegExp(H)}`),Ne=Xt(q,j,"value"),ar=He(b.additionalProperties)?Xt(b.additionalProperties,j,x):b.additionalProperties===!1?"false":"true",Pn=`(${K}.test(key) ? ${Ne} : ${ar})`;yield`(Object.entries(${x}).every(([key, value]) => ${Pn}))`}function*Me(b,j,x){const H=Qr(b,j);if(_e.functions.has(b.$ref))return yield`${Mn(b.$ref)}(${x})`;yield*Yt(H,j,x)}function*pe(b,j,x){const H=Rr(`${new RegExp(b.source,b.flags)};`);yield`(typeof ${x} === 'string')`,oe(b.maxLength)&&(yield`${x}.length <= ${b.maxLength}`),oe(b.minLength)&&(yield`${x}.length >= ${b.minLength}`),yield`${H}.test(${x})`}function*Ue(b,j,x){yield`(typeof ${x} === 'string')`,oe(b.maxLength)&&(yield`${x}.length <= ${b.maxLength}`),oe(b.minLength)&&(yield`${x}.length >= ${b.minLength}`),b.pattern!==void 0&&(yield`${Rr(`${new RegExp(b.pattern)};`)}.test(${x})`),b.format!==void 0&&(yield`format('${b.format}', ${x})`)}function*xt(b,j,x){yield`(typeof ${x} === 'symbol')`}function*Pt(b,j,x){yield`(typeof ${x} === 'string')`,yield`${Rr(`${new RegExp(b.pattern)};`)}.test(${x})`}function*vr(b,j,x){yield`${Mn(b.$ref)}(${x})`}function*wn(b,j,x){if(yield`Array.isArray(${x})`,b.items===void 0)return yield`${x}.length === 0`;yield`(${x}.length === ${b.maxItems})`;for(let H=0;H<b.items.length;H++)yield`${Xt(b.items[H],j,`${x}[${H}]`)}`}function*en(b,j,x){yield`${x} === undefined`}function*Ro(b,j,x){yield`(${b.anyOf.map(q=>Xt(q,j,x)).join(" || ")})`}function*Jt(b,j,x){yield`${x} instanceof Uint8Array`,oe(b.maxByteLength)&&(yield`(${x}.length <= ${b.maxByteLength})`),oe(b.minByteLength)&&(yield`(${x}.length >= ${b.minByteLength})`)}function*Ei(b,j,x){yield"true"}function*Ci(b,j,x){yield Go.IsVoidLike(x)}function*io(b,j,x){const H=_e.instances.size;_e.instances.set(H,b),yield`kind('${b[I]}', ${H}, ${x})`}function*Yt(b,j,x,H=!0){const q=Er(b.$id)?[...j,b]:j,K=b;if(H&&Er(b.$id)){const Ne=Mn(b.$id);if(_e.functions.has(Ne))return yield`${Ne}(${x})`;{_e.functions.set(Ne,"<deferred>");const ar=$n(Ne,b,j,"value",!1);return _e.functions.set(Ne,ar),yield`${Ne}(${x})`}}switch(K[I]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*o(K,q,x);case"AsyncIterator":return yield*i(K,q,x);case"BigInt":return yield*s(K,q,x);case"Boolean":return yield*a(K,q,x);case"Constructor":return yield*u(K,q,x);case"Date":return yield*l(K,q,x);case"Function":return yield*c(K,q,x);case"Import":return yield*d(K,q,x);case"Integer":return yield*f(K,q,x);case"Intersect":return yield*m(K,q,x);case"Iterator":return yield*v(K,q,x);case"Literal":return yield*$(K,q,x);case"Never":return yield*k();case"Not":return yield*D(K,q,x);case"Null":return yield*E(K,q,x);case"Number":return yield*P(K,q,x);case"Object":return yield*O(K,q,x);case"Promise":return yield*z(K,q,x);case"Record":return yield*ie(K,q,x);case"Ref":return yield*Me(K,q,x);case"RegExp":return yield*pe(K,q,x);case"String":return yield*Ue(K,q,x);case"Symbol":return yield*xt(K,q,x);case"TemplateLiteral":return yield*Pt(K,q,x);case"This":return yield*vr(K,q,x);case"Tuple":return yield*wn(K,q,x);case"Undefined":return yield*en(K,q,x);case"Union":return yield*Ro(K,q,x);case"Uint8Array":return yield*Jt(K,q,x);case"Unknown":return yield*Ei();case"Void":return yield*Ci(K,q,x);default:if(!Co(K[I]))throw new c9(b);return yield*io(K,q,x)}}const _e={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Xt(b,j,x,H=!0){return`(${[...Yt(b,j,x,H)].join(" && ")})`}function Mn(b){return`check_${af.Encode(b)}`}function Rr(b){const j=`local_${_e.variables.size}`;return _e.variables.set(j,`const ${j} = ${b}`),j}function $n(b,j,x,H,q=!0){const[K,Ne]=[`
`,kn=>"".padStart(kn," ")],ar=so("value","any"),Pn=mu("boolean"),tn=[...Yt(j,x,H,q)].map(kn=>`${Ne(4)}${kn}`).join(` &&${K}`);return`function ${b}(${ar})${Pn} {${K}${Ne(2)}return (${K}${tn}${K}${Ne(2)})
}`}function so(b,j){const x=_e.language==="typescript"?`: ${j}`:"";return`${b}${x}`}function mu(b){return _e.language==="typescript"?`: ${b}`:""}function hu(b,j,x){const H=$n("check",b,j,"value"),q=so("value","any"),K=mu("boolean"),Ne=[..._e.functions.values()],ar=[..._e.variables.values()],Pn=Er(b.$id)?`return function check(${q})${K} {
  return ${Mn(b.$id)}(value)
}`:`return ${H}`;return[...ar,...Ne,Pn].join(`
`)}function Fi(...b){const j={language:"javascript"},[x,H,q]=b.length===2&&Mr(b[1])?[b[0],b[1],j]:b.length===2&&!Mr(b[1])?[b[0],[],b[1]]:b.length===3?[b[0],b[1],b[2]]:b.length===1?[b[0],[],j]:[null,[],j];if(_e.language=q.language,_e.variables.clear(),_e.functions.clear(),_e.instances.clear(),!He(x))throw new Kg(x);for(const K of H)if(!He(K))throw new Kg(K);return hu(x,H)}e.Code=Fi;function qw(b,j=[]){const x=Fi(b,j,{language:"javascript"}),H=globalThis.Function("kind","format","hash",x),q=new Map(_e.instances);function K(tn,kn,gu){if(!Co(tn)||!q.has(kn))return!1;const Ww=Mm(tn),Kw=q.get(kn);return Ww(Kw,gu)}function Ne(tn,kn){return Cm(tn)?Fm(tn)(kn):!1}function ar(tn){return eh(tn)}const Pn=H(K,Ne,ar);return new l9(b,j,Pn,x)}e.Compile=qw})(va||(va={}));const lf={};function Uv(e,t){e in lf||(lf[e]=t)}let Gg=!1;function d9(){Gg||(Gg=!0,RF(e=>(lf[e.schema[I]]||Iv)(e)))}const cf=Symbol.for("object-shape-tester.shape-identifier");function Fe(e){if(d9(),th(e))return e;const t=df(e),r=Zo(t,!1),n=Zo(t,!0),o={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:va.Compile(t),$_compiledSchemaNoExtraKeys:va.Compile(r),$_compiledSchemaExtraKeys:va.Compile(n)};return Object.defineProperties(o,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[cf]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),o}function th(e){return T.hasKey(e,cf)&&!!e[cf]}function rh(e){return T.hasKey(e,I)}function Zo(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>Zo(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>Zo(n,t))),rh(e.items)?r.items=Zo(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>Zo(n,t))),T.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([o,i])=>{n[o]=Zo(i,t)}),r.properties=n}return r.additionalProperties=t,r}function df(e){if(rh(e))return e;if(th(e))return e.$_schema;if(T.isFunction(e))return Ie.Function([],Ie.Any(),{default:e});if(T.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,o])=>{const i=df(o);r[n]=i,t[n]=i.default}),Ie.Object(r,{default:t})}else{if(T.isArray(e))return Ie.Array(Ie.Union(e.map(t=>df(t))),{default:[]});if(T.isPrimitive(e)){if(T.isString(e))return Ie.String({default:e});if(T.isNumber(e))return Ie.Number({default:e});if(T.isBoolean(e))return Ie.Boolean({default:e});if(T.isSymbol(e))return Ie.Symbol({default:e});if(T.isNull(e))return Ie.Null({default:null});if(T.isUndefined(e))return Ie.Undefined({default:void 0});if(T.isBigInt(e))return Ie.BigInt({default:e});Wt.tsType(e).equals(),Wt.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${y(e)}`)}}function f9({checkValue:e,default:t,name:r}){return Co(r)||Tm(r,(n,o)=>e(o)),(n=t)=>Fe(Ie.Unsafe({[I]:r,default:n}))}function vs(e,t){const r=_r(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return Fe(Ie.Union(r.map(n=>Ie.Literal(n)),{default:t??r[0]}))}function de(e){return T.isSymbol(e)?m9(e):Fe(Ie.Const(e,{default:e}))}const Nu="ExactSymbol";function m9(e){return Co(Nu)||Tm(Nu,(t,r)=>r===t.symbol),Uv(Nu,({schema:t})=>`Expected symbol ${t.symbol?.description?Kk({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Fe(Ie.Unsafe({[I]:Nu,symbol:e,default:e}))}function h9(...e){const t={},r=e.map(n=>{const o=Fe(n);return Object.assign(t,o.default),o.$_schema});return Fe(Ie.Composite(r,{default:t}))}function It(e,t={}){at.ExactOptionalPropertyTypes=!0;const r=Fe(e).$_schema,n=t.alsoUndefined?Ie.Union([Ie.Undefined(),r]):r;return Fe(Ie.Optional(n))}function Ze(...e){let t;const r=e.map((n,o)=>{const i=Fe(n);return o||(t=i.default),i.$_schema});return Fe(Ie.Union(r,{default:t}))}class g9 extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(i=>_v(i)).join(`
`),o=fi(r,`Shape mismatch:
${If(n,1)}`);super(o),this.errors=t,this.failureMessage=r}}function p9(e){return e.errors.flatMap(t=>Array.from(t))}function _v(e,t=0){const r=p9(e).map(o=>_v(o,t+1)),n=[e.path,e.message].filter(T.isTruthy).join(": ")+(r.length?":":"");return[If(n,t),...r].join(`
`)}function Xo(e,t,r={}){return zv(t,r).Check(e)}function Vv(e,t,r={},n){if(Xo(e,t,r))return;const o=Array.from(zv(t,r).Errors(e));if(o.length)throw new g9(o,n)}function zv(e,t){return e=y9(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function y9(e){return Fe(e)}function zi({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:o}=Af(r),i=r.default??(o-n)/2+n,s=Fe(Ie.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:o}:{maximum:o},default:i})),a=bk(()=>Vv(i,s));if(a)throw Wa(a,"Default range value is not within range.");return s}const Zu="recordShape";function gc({keys:e,values:t,partial:r,additionalProperties:n}){b9();const o=qv(e),i=Fe(t);return Fe(Ie.Unsafe({[I]:Zu,keysShape:o,valuesShape:i,isPartial:!!r,additionalProperties:!!n,default:v9({isPartial:!!r,keysShape:o,valuesShape:i})}))}function b9(){Co(Zu)||Tm(Zu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([o,i])=>{const s=e.additionalProperties?!0:Xo(o,e.keysShape),a=Xo(i,e.valuesShape);return s&&a}),n=e.isPartial?!0:!Zg(e.keysShape,t).length;return r&&n}),Uv(Zu,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const o=hi(Object.entries(n),([u])=>u,(u,[l,c])=>!Xo(l,r.keysShape)||!Xo(c,r.valuesShape)),i=Zg(r.keysShape,n),s=o.length?["Failure at keys",o.join(",")].join(": "):"",a=i.length?["Missing keys",i.join(",")].join(": "):"";return[s,a].filter(T.isTruthy).join(`
`)})}function Zg(e,t){const r=xl(e).filter(n=>T.isPropertyKey(n));return r.length?r.filter(n=>!T.hasKey(t,n)):[]}function v9({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=xl(e),o=t.default;return Object.fromEntries(n.map(i=>[i,o]))}}function qv(e){return th(e)?e:rh(e)?Fe(e):T.isObject(e)?vs(e):T.isArray(e)&&T.isLengthAtLeast(e,1)?Ze(...e.map(t=>de(t))):T.isPropertyKey(e)?Fe(e):Fe(Ie.Undefined())}function xl(e){const t=e.$_schema,r=t[I].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?Lp(t.anyOf.flatMap(n=>xl(Fe(n)))):["undefined","number","string","symbol"].includes(r)?[]:xl(qv(e.default))}function w9(e){return Fe(Ie.Unknown({default:e}))}const $9=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],nh=$9.reduce((e,t)=>(e[t]=t,e),{});Ge.defaultZone.name;const Wv=nh.UTC,k9=Fe({hour:zi({...r0,default:r0.min}),minute:zi({...n0,default:n0.min}),second:zi({...o0,default:o0.min}),millisecond:zi({...i0,default:i0.min}),timezone:vs(nh,Wv)}),D9=Fe({year:2023,month:zi({...s0,default:s0.min}),day:zi({...a0,default:a0.min}),timezone:vs(nh,Wv)});Fe(h9(D9,k9));Ee.Years+"",Ee.Months+"",Ee.Weeks+"",Ee.Days+"",Ee.Hours+"",Ee.Minutes+"",Ee.Seconds+"",Ee.Milliseconds+"";Fe(Ze({get:de(G.Month),in:Ze(de(G.Year))},{get:de(G.Week),in:Ze(de(G.Year),de(G.Month))},{get:de(G.Day),in:Ze(de(G.Year),de(G.Month),de(G.Week))},{get:de(G.Hour),in:Ze(de(G.Year),de(G.Month),de(G.Week),de(G.Day))},{get:de(G.Minute),in:Ze(de(G.Year),de(G.Month),de(G.Week),de(G.Day),de(G.Hour))},{get:de(G.Second),in:Ze(de(G.Year),de(G.Month),de(G.Week),de(G.Day),de(G.Hour),de(G.Minute))},{get:de(G.Millisecond),in:Ze(de(G.Year),de(G.Month),de(G.Week),de(G.Day),de(G.Hour),de(G.Minute),de(G.Second))}));gc({keys:vs(Ee),values:-1,partial:!0});var Hg;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Hg||(Hg={}));var ff;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(ff||(ff={}));var Jg;(function(e){e.Year="year",e.Month="month",e.Day="day"})(Jg||(Jg={}));const x9={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};_k(x9,_r(ff));f9({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return A9(e)}});function A9(e){return Y.fromISO(e).toUTC().toISO()===e}const E9=Fe({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:w9()});function id(e){return Xo(e,E9,{allowExtraKeys:!0})}class Kv extends P1{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||mm}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:C9}=kD,Yg=e=>e,Xg=()=>document.createComment(""),Qs=(e,t,r)=>{const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=n.insertBefore(Xg(),o),s=n.insertBefore(Xg(),o);r=new C9(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==s._$AU&&r._$AP(u)}if(i!==o||a){let u=r._$AA;for(;u!==i;){const l=Yg(u).nextSibling;Yg(n).insertBefore(u,o),u=l}}}return r},Wo=(e,t,r=e)=>(e._$AI(t,r),e),F9={},S9=(e,t=F9)=>e._$AH=t,T9=e=>e._$AH,sd=e=>{e._$AR(),e._$AA.remove()};const oh={ATTRIBUTE:1,CHILD:2,ELEMENT:6},no=e=>(...t)=>({_$litDirective$:e,values:t});class oo{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const M9={attribute:!0,type:String,converter:ll,reflect:!1,hasChanged:Hf},P9=(e=M9,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function N9(e){return(t,r)=>typeof r=="object"?P9(e,t,r):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}const sr=no(class extends oo{constructor(e){if(super(e),e.type!==oh.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Cr}});const it=e=>e??Q;function I9(e,t,r){return e?t(e):r?.(e)}class O9 extends ha{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function B9(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(a=>!!a.index).length;if(n||o)return[...e];const i=e.map(a=>[a]);return i.length||(i[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(i[a]=[])}),t.forEach(a=>{const u=i[a.index];u&&u.splice(0,0,...a.values)}),i.flat()}function mf(e){return T.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function ih(e){return T.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Gv(e){return hi(e,t=>{if(mf(t))return t.definition;if(ih(t))return t.tagInterpolationKey||t},T.isTruthy)}const Zv=new WeakMap;function R9(e,t){const r=Gv(t);return Hv(Zv,[e,...r]).value?.template}function L9(e,t,r){const n=Gv(t);return Yv(Zv,[e,...n],r)}function Hv(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Jv(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Hv(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Jv(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Yv(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:s}=Jv(e,t,n);if(!i)return{result:!1,reason:s};const a=o??{nested:void 0,template:void 0};if(o||e.set(i,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),Yv(u,t,r,n+1)}function Xv(e,t,r){const n=R9(e,t),o=n??r();if(!n){const a=L9(e,t,o);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const i=o.valuesTransform(t),s=B9(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Qv(e,t,r,n){const o=[],i=[],s=[],a=[];return e.forEach((l,c)=>{const d=o.length-1,f=o[d],m=c-1,v=t[m];n&&n(l);let $,k=[];if(typeof f=="string"&&($=r(f,l,v),$)){o[d]=[f,$.replacement].join(""),s.push(m);const E=$.getExtraValues;k=E?E(v):[],k.length&&E?(o[d]+=" ",k.forEach((P,O)=>{O&&o.push(" ")}),a.push(P=>{const O=P[m],z=E(O);return{index:m,values:z}}),o.push(l)):o[d]+=l}$||o.push(l);const D=e.raw[c];$?(i[d]=[i[d],$.replacement,D].join(""),k.length&&k.forEach(()=>{i.push("")})):i.push(D)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function j9(...[e,t,r]){if(ih(r))return{replacement:r.tagName,getExtraValues:void 0}}function U9(e,t){return Qv(e,t,j9)}function A(e,...t){const r=Xv(e,t,()=>U9(e,t));return _b(r.strings,...r.values)}const _9={allowPolymorphicState:!1,errorHandler:void 0};function ew(e,t){const r=e.instanceState;ze(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&ze(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class V9 extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function sh(){return e=>class extends V9{static type=e;_type=e;constructor(t){super(e,t)}}}function pt(){return sh()}function z9(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=sh()([e,n].join("-"));return r[n]=o,r},{}):{}}function q9(e){return e?Kt(e,t=>t):{}}function tw(e,t){t in e||N9()(e,t)}function W9(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Qg(e,t){const r=e;function n(s){t?W9(s,e,e.tagName):tw(e,s)}function o(s,a){return n(a),r[a]}return new Proxy({},{get:o,set(s,a,u){n(a);const l=r[a];function c(f){s[a]=f,r[a]=f}const d=e.observablePropertyListenerMap[a];if(l!==u&&id(l)&&d&&l.removeListener(d),id(u))if(d)u.listen(!1,d);else{let f=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=f,u.listen(!1,f)}else id(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return o(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function ep(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function tp(e,t,r){return r?Rl(r,o=>({key:o,value:[e,t,o].join("-")}),{}):{}}function K9({hostClassNames:e,cssVars:t}){return{hostClasses:Kt(e,(r,n)=>({name:Je(n),selector:Je(`:host(.${n})`)})),cssVars:t}}function G9({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&ze(t).forEach(i=>{const s=t[i],a=r[i];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(a):e.classList.remove(a))})}function Z9({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:o}){function i(a){ze(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:r,slotNames:n,testIds:o,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function Ai(...e){return Wt.isEmpty(e),t=>{const r=t;if(!T.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return H9({...r,options:{...r.options}})}}function H9(e){if(!T.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!T.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={..._9,...e.options},r=z9(e.tagName,e.events),n=q9(e.hostClasses);e.hostClasses&&ep(e.tagName,e.hostClasses),e.cssVars&&ep(e.tagName,e.cssVars);const o=e.cssVars?Zr(e.cssVars):{},i=tp(e.tagName,"slot",e.slotNames),s=tp(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(K9({hostClassNames:n,cssVars:o})):e.styles||A``,u=e.render;function l(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:d}}const c=class extends O9{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return Z9({element:this,eventsMap:r,cssVars:o,slotNamesMap:i,testIdsMap:s})}static assign=l;static events=r;static render=u;static hostClasses=n;static cssVars=o;static init=e;static slotNames=i;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const d=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(d);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");ze(m).forEach(v=>{tw(this,v),this.instanceState[v]=m[v]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(d)instanceof Promise))throw new TypeError("init cannot be asynchronous");const f=u(d);if(f instanceof Promise)throw new TypeError("render cannot be asynchronous");return G9({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},f}catch(d){const f=Wa(d,`Failed to render ${e.tagName}`);return console.error(f),this._lastRenderError=f,t.errorHandler?.(f),St(f)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const d=this.createRenderParams();if(e.init(d)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(d=>{T.hasKey(d,"destroy")&&T.isFunction(d.destroy)&&d.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const d=this.createRenderParams();if(e.cleanup(d)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(d){ew(this,d)}observablePropertyListenerMap={};instanceInputs=Qg(this,!1);instanceState=Qg(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:qk(e.tagName,{firstLetterCase:Fa.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}class J9 extends _i{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function Y9(e){return new J9(e)}const rp=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},X9=no(class extends oo{constructor(e){if(super(e),e.type!==oh.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let s=0;for(const a of e)o[s]=n?n(a,s):s,i[s]=r(a,s),s++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const o=T9(e),{values:i,keys:s}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=s,i;const a=this.ut??=[],u=[];let l,c,d=0,f=o.length-1,m=0,v=i.length-1;for(;d<=f&&m<=v;)if(o[d]===null)d++;else if(o[f]===null)f--;else if(a[d]===s[m])u[m]=Wo(o[d],i[m]),d++,m++;else if(a[f]===s[v])u[v]=Wo(o[f],i[v]),f--,v--;else if(a[d]===s[v])u[v]=Wo(o[d],i[v]),Qs(e,u[v+1],o[d]),d++,v--;else if(a[f]===s[m])u[m]=Wo(o[f],i[m]),Qs(e,o[d],o[f]),f--,m++;else if(l===void 0&&(l=rp(s,m,v),c=rp(a,d,f)),l.has(a[d]))if(l.has(a[f])){const $=c.get(s[m]),k=$!==void 0?o[$]:null;if(k===null){const D=Qs(e,o[d]);Wo(D,i[m]),u[m]=D}else u[m]=Wo(k,i[m]),Qs(e,o[d],k),o[$]=null;m++}else sd(o[f]),f--;else sd(o[d]),d++;for(;m<=v;){const $=Qs(e,u[v+1]);Wo($,i[m]),u[m++]=$}for(;d<=f;){const $=o[d++];$!==null&&sd($)}return this.ut=s,S9(e,u),Cr}}),Q9=X9;function du(e,t){return Va(e,t),e.element}function eT(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Va(e,t){const r=eT(e),n=r?`: in ${r}`:"";if(e.type!==oh.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function tT(e,t){return no(class extends oo{element;constructor(r){super(r),this.element=Fn.instanceOf(du(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),Cr}})}const Gn=tT("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const o=Fs(r,"allAttributesApplied",()=>new Set);ze(t).forEach(i=>{if(i.toLowerCase()!==i)throw new Error(`Cannot assign attribute name with uppercase letters: ${i}`);o.add(i)}),o.forEach(i=>{const s=t[i];s==null||s===!1||s===Q?e.removeAttribute(i):s===""||s===!0?e.setAttribute(i,""):e.setAttribute(i,String(s))})});function rT(e){const t=no(class extends oo{element;constructor(r){super(r),this.element=du(r,e)}render(r){return this.element.setAttribute(e,r),Cr}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function W(e,t){return nT(e,t)}const nT=no(class extends oo{element;lastListenerMetaData;constructor(e){super(e),this.element=du(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Cr}});function oT(e){return W("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const np="onDomCreated",li=no(class extends oo{element;constructor(e){super(e),Va(e,np)}update(e,[t]){Va(e,np);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),op="onResize",rw=no(class extends oo{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&iT(this.element,this.callback,e)});callback;constructor(e){super(e),Va(e,op)}update(e,[t]){Va(e,op),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function iT(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function gr(e,t,r){return I9(e,()=>t,()=>r)}const{attributeDirective:sT}=rT("data-test-id"),Hn=sT;function nw(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>o=>(t(o),Ai(...n)(r(o)))}function aT(e,t){return uT(void 0,e)}const uT=no(class extends oo{element;constructor(e){super(e),this.element=du(e,"assign")}render(e,t){return ew(this.element,t),Cr}}),lT={};function cT(e,t){return t.map((r,n)=>{const o=e[n],i=e[n+1];if(o&&i){const{shouldHaveTagNameHere:s}=ow(o,i);if(s&&T.isString(r))return{tagName:r,tagInterpolationKey:Fs(lT,r,()=>({tagName:r}))}}return r})}function ow(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function dT(...[e,t,r]){const n=mf(r)?r.definition:r,{isOpeningTag:o,shouldHaveTagNameHere:i}=ow(e,t),s=ih(n);if(s&&i&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(i&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!i||!s?void 0:{replacement:n.tagName,getExtraValues(u){const l=mf(u)?u.inputs:void 0;return[o&&l?aT(l):void 0].filter(T.isTruthy)}}}function fT(e){}function mT(e){return Qv(e.strings,e.values,dT,fT)}function g(e,...t){const r=cT(e,t),n=gD(e,...r),o=Xv(e,r,()=>mT(n));return{...n,strings:o.strings,values:o.values}}function hf(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],i=(t??[""]).map((s,a)=>{const u=hT(s,n[a]);return`${s}${u}`});return Nb(i.join(""))}function hT(e,t){return t._$litType$!=null||t._$litDirective$!=null?hf(t):Array.isArray(t)?t.map(n=>hf(n)).join(""):e.endsWith("=")?`"${t}"`:t}function iw(e){return Kt(e,(t,r)=>r instanceof te?Je(r.toString({format:"hex"})):iw(r))}const gT="dodgerblue";function gf(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function ad({background:e,foreground:t}){return{background:e??new te(gf(t)),foreground:t??new te(gf(e))}}var Al;(function(e){e.Dark="dark",e.Light="light"})(Al||(Al={}));function pT(e){return e==="black"?"white":"black"}const yT={black:{foregroundFaint1:new te("#ccc"),foregroundFaint2:new te("#eee")},white:{foregroundFaint1:new te("#ccc"),foregroundFaint2:new te("#eee")}},bT={black:{backgroundFaint1:new te("#666"),backgroundFaint2:new te("#444")},white:{backgroundFaint1:new te("#ccc"),backgroundFaint2:new te("#fafafa")}};function ip({themeColor:e=gT,themeStyle:t=Al.Light}={}){const r=new te(e),n=new te(t===Al.Dark?"black":"white"),o=gf(n),i=new te(o),s={nav:{hover:ad({background:r.clone().set({"hsl.l":93})}),active:ad({background:r.clone().set({"hsl.l":90})}),selected:ad({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...bT[pT(o)],foreground:i,...yT[o]}};return iw(s)}var xn;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(xn||(xn={}));async function sp(e=1){const t=new el;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function vT(e,t){return{element:e,children:sw(e)}}function sw(e,t,r){return wT(e).map(n=>{const o=sw(n);return{element:n,children:o}})}function wT(e){return[...e.children,...e.shadowRoot?.children??[]]}function ud(e){return e.matches(":focus")}function ah(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:ah(t)}function aw(e,t){if(t(e))return e;const r=ah(e);if(r)return aw(r,t)}function Qo(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const o=t.name,i=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${o}'. Got '${i}'.`:`Target from event '${e.type}' was not of type '${o}'. Got '${i}'.`;throw new Error(s)}return n}function $T(e){const t=ah(e);return t&&aw(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function kT(e){let t=0,r=document.activeElement||void 0;for(;r;){if(e({depth:t,element:r}))return t;r=r.shadowRoot?.activeElement||void 0,r&&++t}return t}function DT({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const u=i.codePointAt(s);for(;a<r;)if(o.codePointAt(a++)===u)continue e;return!1}return!0}const xT=ti(32);function Hu(e){return e.join(xT)}function uw(e){if(!e.length)return[];const t=Hu(e),r=uw(e.slice(0,-1));return[t,...r]}const AT=["error","errors"];function ET(e){return AT.includes(e)}function CT({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Hu(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&ET(t),s=Hu(o.fullUrlBreadcrumbs);if(DT({searchIn:[o.entry.title,...o.entry.descriptionParagraphs.map(u=>T.isString(u)?u:hf(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[s]){const u=uw(o.fullUrlBreadcrumbs);n(o),u.forEach(l=>r[l]=!0)}else r[s]=!1}),e.filter(o=>{const i=Hu(o.fullUrlBreadcrumbs),s=r[i];if(!T.isBoolean(s))throw new TypeError(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class uh extends Error{name="SpaRouterError"}class ap extends uh{name="GlobalUrlEventsConsolidationError"}class FT extends uh{name="SanitizationDepthMaxed"}Fe({paths:[""],search:It(Ze(void 0,gc({keys:"",values:[""]}))),hash:It(Ze(void 0,""))});const ST=Fe({basePath:It("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:It(1,{alsoUndefined:!0}),disableWarnings:It(!1,{alsoUndefined:!0}),isPaused:It(!1,{alsoUndefined:!0})}),ld="://";function lh(...e){const t=e.join("/"),[r,n=""]=t.includes(ld)?t.split(ld):["",t];let o=!1;const i=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(o)return s;const c=l[u+1];let d=a;const f=c?.startsWith("?"),m=!a.includes("?")&&f,v=c==="?";if(f||m){o=!0;let $=!1;const k=l.slice(u+2).reduce((D,E)=>(E.includes("#")&&($=!0),$?D.concat(E):[D,E].join("&")),"");d=[a,c,v?Yi({value:k,prefix:"&"}):k].join("")}return s.concat(d)},[]);return[r,r?ld:"",i.join("/")].join("")}var ws;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(ws||(ws={}));var $s;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})($s||($s={}));const TT=Fe({encoding:It(Ze(void 0,vs(ws))),searchParamStrategy:It(Ze(void 0,vs($s)))});function Iu(e,t){return e.map(r=>{if(r!=null)return es(String(r),t)}).filter(r=>r!=null)}function es(e,t){return t?.encoding===ws.Decode?decodeURIComponent(e):t?.encoding===ws.Encode?encodeURIComponent(e):e}const MT=Fe(gc({keys:"",values:[""]}));function PT(e,t,r){const n=r?.searchParamStrategy===$s.Clear?{}:Kt(e,(s,a)=>pk(a)),o=Kt(t,(s,a)=>{if(r?.searchParamStrategy===$s.Append){const u=n[s],l=T.isArray(u)?u:[u];if(a){const c=T.isArray(a)?a:[a];return Iu([...l,...c],r)}else return Iu(l,r)}else return T.isArray(a)?Iu(a,r):a?Iu([a],r):void 0});return jf({...n,...o},(s,a)=>!!a)}function lw(e,t){return T.isString(e)&&!e.includes("?")?{}:(T.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(i=>{const[s,...a]=Uk(i,"=");return[s,a.length?a.join("="):void 0]}).reduce((i,[s,a])=>{const u=cw({options:t,key:s,value:a}),l=Fs(i,u.key,()=>[]);return a!=null&&l.push(u.value),i},{})}function NT(e){if(e!=null)return T.isArray(e)?[...e]:e===""?[]:[e]}function IT(e,t){const r=hi(Object.entries(e),([n,o])=>{const i=NT(o);return i?.length?i.map(s=>{const a=cw({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,o])=>o!=null).flat();return r.length?or({value:r.join("&"),prefix:"?"}):""}function cw({options:e,key:t,value:r}){return{key:es(t,e),value:es(String(r),e)}}function dw({hash:e,hostname:t,password:r,pathname:n,port:o,protocol:i,search:s,username:a}){return[i?i+"://":"",a?a+":":"",r?r+"@":"",pc({hostname:t,port:o}),ch({hash:e,pathname:n,search:s})].join("")}function fw({pathname:e}){const t=Yi({value:e,prefix:"/"});return t?t.split("/"):[]}function ch({hash:e,pathname:t,search:r}){return[or({value:t,prefix:"/"}),r?or({value:r,prefix:"?"}):"",e?or({value:e,prefix:"#"}):""].join("")}function pc({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function mw({hostname:e,port:t,protocol:r}){return[r,pc({hostname:e,port:t})].filter(T.isTruthy).join("://")}function ts(e,t){const r=T.isString(e)?Yi({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),o=n?or({value:es(n,t),prefix:"#"}):"",i=r.replace(/#[^#]*$/,""),s=i.replace(/^[^?]*(?:\?|$)/,""),a=s?or({value:es(s,t),prefix:"?"}):"",u=i.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=c.replace(/@.*/,""),f=c.replace(/^[^@]*@/,""),m=d!==f,[v,...$]=m?d.split(":").reverse():[],k=$.toReversed().join("").replace(/[/:]/g,"")||"",D=v?.replace(/[/:]/g,"")||"",E=jk(f.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),P=E[0]?.endsWith("]")?"":E[1]===":"&&E[0]||"",z=f.replace(new RegExp(`:${P}($|/)`),"$1").replace(/\/.*/,""),ie=f.replace(/^[^/]*(\/|$)/,"$1"),Me=es(ie.replace(/^[^/]*(?:\/|$)/,"/"),t),pe=pc({hostname:z,port:P}),Ue=mw({hostname:z,port:P,protocol:l}),xt=dw({hash:o,hostname:z,password:D,pathname:Me,port:P,protocol:l,search:a,username:k}),Pt=lw(a),vr=fw({pathname:Me});return{fullPath:ch({hash:o,pathname:Me,search:a}),hash:o,host:pe,hostname:z,href:xt,origin:Ue,password:D,pathname:Me,paths:vr,port:P,protocol:l,search:a,searchParams:Pt,username:k}}Fe({hash:It(Ze(void 0,"")),search:It(Ze(void 0,"",gc({keys:"",values:Ze(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:It(Ze(void 0,"")),pathname:It(Ze(void 0,"")),paths:It(Ze(void 0,[""])),protocol:It(Ze(void 0,"")),username:It(Ze(void 0,"")),password:It(Ze(void 0,"")),port:It(Ze(void 0,"",-1))});function OT(e,t,r){const n=!!r,o=t==null||Xo(t,TT,{allowExtraKeys:!1}),i=o?ts(""):T.instanceOf(e,URL)||T.isString(e)?ts(e):e,s=o?e:t,a=T.isString(s)&&s.startsWith("."),u=T.isString(s)||T.instanceOf(s,URL)?jf(ts(s),($,k)=>T.isTruthy(k)):s,l=n?r:o?t:void 0,c=Kt(i,($,k)=>{if(!T.hasKey(u,$))return k;const D=u[$];return T.isNumber(D)?String(D):T.isString(D)?$==="hash"&&D?or({value:D,prefix:"#"}):$==="pathname"?or({value:D,prefix:"/"}):D:k});T.hasKey(u,"paths")&&u.paths&&(c.pathname=lh(a?i.pathname:"",...u.paths));const d=T.isString(u.search)?lw(or({value:u.search,prefix:"?"})):vk(u.search||{}),f=PT(c.searchParams,d,{...l,encoding:ws.None}),m=IT(f,l);return{...c,searchParams:f,search:m,paths:fw(c),fullPath:ch(c),host:pc(c),origin:mw(c),href:dw({...c,search:m})}}const BT=Fe({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:MT,hash:"",fullPath:"/",href:"/"});({...BT.default});const RT=0;function hw(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==RT)}const yc="locationchange",qn=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const up=qn?.pushState;function lp(...e){if(!up)return;const t=up.apply(qn,e);return globalThis.dispatchEvent(new Event(yc)),t}const cp=qn?.replaceState;function dp(...e){if(!cp)return;const t=cp.apply(qn,e);return globalThis.dispatchEvent(new Event(yc)),t}function LT(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!qn)){{if(qn.pushState===lp)throw new ap("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(qn.replaceState===dp)throw new ap("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,qn.pushState=lp,qn.replaceState=dp,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(yc))})}}function Ou(e,t){const r=ts(e),n=Yi({value:Yi({value:r.pathname,prefix:or({value:t||"",prefix:"/"})}),prefix:"/"}),o=n?n.split("/"):[],i=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?Yi({value:r.hash,prefix:"#"}):void 0;return{paths:o,search:i,hash:s}}class dh{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){Vv(t,ST),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new Kv({defaultValue:r,equalityCheck:()=>!1}),LT(),this.removeGlobalListener=Vf(globalThis,yc,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new FT("Looping route sanitization detected; aborting window URL change listener.");const n=Ou(globalThis.location.href,this.params.basePath),o=t.sanitizeRoute(n);T.jsonEquals(n,o)?(this.sanitizationDepth=0,this.innerObservable.setValue(o)):(this.sanitizationDepth++,this.setRoute(o,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:o}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:lh(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Ou(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...Ou(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),i=this.routeIncludesBasePath(Ou(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return OT(globalThis.location.href,{paths:i.paths,search:i.search,hash:i.hash?or({value:i.hash,prefix:"#"}):""},{searchParamStrategy:$s.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:o}=ts(n);return this.params.isPaused||!r.force&&T.jsonEquals(ts(globalThis.location.href).fullPath,o)?!1:r.replace?(globalThis.history.replaceState(void 0,"",o),!0):(globalThis.history.pushState(void 0,"",o),!0)}setRouteOnDirectNavigation(t,r){return hw(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new uh(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function jT(e){return new dh({basePath:e,sanitizeRoute(t){return{paths:UT(t.paths),hash:void 0,search:void 0}}})}function UT(e){const t=e[0];if(T.isEnumValue(t,fr)){if(t===fr.Book)return[fr.Book,...e.slice(1)];if(t===fr.Search)return e[1]?[t,e[1]]:[fr.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return as.paths}const El=sh()("element-book-change-route"),fp="vira-",We=nw({assertInputs:e=>{if(!e.tagName.startsWith(fp))throw new Error(`Tag name should start with '${fp}' but got '${e.tagName}'`)}});var be=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Select="select",e.Checkbox="checkbox",e))(be||{});function cd(e,t){if(e)return t?Lf({value:e,suffix:"*"}):e}function _T(e){return jd(e).every(t=>t.isHidden||!t.isRequired?!0:T.isString(t.value)?!!t.value:t.value!=null)}const w=Zr({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function se({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function VT(e){try{if(!e)throw new Error("invalid empty color");return new te(e)}catch{throw new Error(`Invalid color: ${y(e)}`)}}function mp(e,t){const r=ze(t).map(n=>{const o=t[n],i=VT(o);return`${w[n].name}: ${i.toString()};`}).join(" ");return se({name:e.name,svgTemplate:g`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const zT=se({name:"Bell24Icon",svgTemplate:g`
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
    `}),qT=se({name:"Chat24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),fh=se({name:"Check24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),WT=se({name:"ChevronDown24Icon",svgTemplate:g`
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
    `}),mh=se({name:"ChevronUp24Icon",svgTemplate:g`
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
    `}),gw=se({name:"CloseX24Icon",svgTemplate:g`
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
    `}),KT=se({name:"Commit24Icon",svgTemplate:g`
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
    `}),GT=se({name:"Copy24Icon",svgTemplate:g`
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
    `}),ZT=se({name:"Document24Icon",svgTemplate:g`
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
    `}),HT=se({name:"DocumentSearch24Icon",svgTemplate:g`
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
    `}),JT=se({name:"DoubleChevron24Icon",svgTemplate:g`
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
    `}),pw=se({name:"Element16Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Kr=se({name:"Element24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),YT=se({name:"ExternalLink24Icon",svgTemplate:g`
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
    `}),yw=se({name:"EyeClosed24Icon",svgTemplate:g`
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
    `}),bw=se({name:"EyeOpen24Icon",svgTemplate:g`
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
    `}),XT=se({name:"Filter24Icon",svgTemplate:g`
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
    `}),QT=se({name:"Link24Icon",svgTemplate:g`
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
    `}),vw=se({name:"Loader24Icon",svgTemplate:g`
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
    `}),Jn=Zr({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),eM=A`
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
`,ci=se({name:"LoaderAnimated24Icon",svgTemplate:g`
        <style>
            ${eM}
        </style>
        ${vw.svgTemplate}
    `}),tM=se({name:"Lock24Icon",svgTemplate:g`
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
    `}),wa=se({name:"Options24Icon",svgTemplate:g`
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
    `}),rM=se({name:"Pencil24Icon",svgTemplate:g`
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
    `}),nM=se({name:"Shield24Icon",svgTemplate:g`
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
    `}),oM=se({name:"SortAscending24Icon",svgTemplate:g`
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
    `}),iM=se({name:"SortDescending24Icon",svgTemplate:g`
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
    `}),sM=se({name:"SpeakerLoud24Icon",svgTemplate:g`
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
    `}),aM=se({name:"SpeakerMedium24Icon",svgTemplate:g`
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
    `}),uM=se({name:"SpeakerMuted24Icon",svgTemplate:g`
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
    `}),lM=se({name:"SpeakerQuiet24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),cM=se({name:"Star24Icon",svgTemplate:g`
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
    `}),Cl=se({name:"StatusFailure24Icon",svgTemplate:g`
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
    `}),dM=se({name:"StatusInProgress24Icon",svgTemplate:g`
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
    `}),fM=se({name:"StatusSuccess24Icon",svgTemplate:g`
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
    `}),mM=se({name:"StatusUnknown24Icon",svgTemplate:g`
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
    `}),hM=se({name:"StatusWarning24Icon",svgTemplate:g`
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
    `}),gM=se({name:"Upload24Icon",svgTemplate:g`
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
    `}),ww=se({name:"X24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),pf={Bell24Icon:zT,Chat24Icon:qT,Check24Icon:fh,ChevronDown24Icon:WT,ChevronUp24Icon:mh,CloseX24Icon:gw,Commit24Icon:KT,Copy24Icon:GT,Document24Icon:ZT,DocumentSearch24Icon:HT,DoubleChevron24Icon:JT,Element16Icon:pw,Element24Icon:Kr,ExternalLink24Icon:YT,EyeClosed24Icon:yw,EyeOpen24Icon:bw,Filter24Icon:XT,Link24Icon:QT,Loader24Icon:vw,LoaderAnimated24Icon:ci,Lock24Icon:tM,Options24Icon:wa,Pencil24Icon:rM,Shield24Icon:nM,SortAscending24Icon:oM,SortDescending24Icon:iM,SpeakerLoud24Icon:sM,SpeakerMedium24Icon:aM,SpeakerMuted24Icon:uM,SpeakerQuiet24Icon:lM,Star24Icon:cM,StatusFailure24Icon:Cl,StatusInProgress24Icon:dM,StatusSuccess24Icon:fM,StatusUnknown24Icon:mM,StatusWarning24Icon:hM,Upload24Icon:gM,X24Icon:ww},Gr=Zr({"vira-form-input-radius":"8px"}),di=A`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,ks=Zr({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":{initialValue:"10px",default:A`calc(${Gr["vira-form-input-radius"].value} + 2px)`}});function fu({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const o=Je(Ca(r+t+e)),i=A`
        content: '';
        top: calc(${o} * -1);
        left: calc(${o} * -1);
        position: absolute;
        width: calc(100% + calc(${o} * 2));
        height: calc(100% + calc(${o} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${r}px solid ${ks["vira-focus-outline-color"].value};
        border-radius: ${ks["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return n?i:A`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${i}
        }
    `}const re=Zr({"vira-form-border-color":"#cccccc","vira-form-placeholder-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-text-selection-color":"#cfe9ff","vira-form-selection-hover-background-color":"#e6f9fe","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#e6f9fe","vira-form-selection-active-foreground-color":"black","vira-form-error-foreground-color":"red","vira-form-success-foreground-color":"green","vira-form-label-font-weight":"bold"}),V=We()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>A`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),$e=We()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal},styles:({hostClasses:e})=>A`
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
                font-weight: ${re["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${re["vira-form-selection-hover-background-color"].value};
            }
        }

        ${V} {
            ${w["vira-icon-stroke-width"].name}: 2px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${re["vira-form-border-color"].value};
            color: ${re["vira-form-foreground-color"].value};
            border-radius: ${Gr["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${fu({elementBorderSize:1})}

            &.checked {
                & ${V} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${re["vira-form-error-foreground-color"].value};
            }

            &:active {
                background-color: ${re["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${di};
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
                      ${Gn(e.attributePassthrough?.text)}
                      style=${it(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:Q;return g`
            <label
                class=${sr({disabled:!!e.disabled})}
                ${Gn(e.attributePassthrough?.label)}
                style=${it(e.stylePassthrough?.label)}
                ${W("mousedown",n)}
            >
                ${o}
                <span
                    class="custom-checkbox ${sr({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${it(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${Gn(e.attributePassthrough?.["custom-checkbox"])}
                    style=${it(e.stylePassthrough?.["custom-checkbox"])}
                    ${oT(n)}
                >
                    <${V.assign({icon:fh,fitContainer:!0})}
                        ${Gn(e.attributePassthrough?.[V.tagName])}
                        style=${it(e.stylePassthrough?.[V.tagName])}
                    ></${V}>
                </span>
            </label>
        `}}),pM=Zr({"vira-monospace":"monospace"}),bc=A`
    padding: 0;
    margin: 0;
`,Vr=A`
    ${bc};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,dd=Zr({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),rs={menuShadow:A`
        filter: drop-shadow(0px 5px 5px ${dd["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:A`
        filter: drop-shadow(0px -5px 5px ${dd["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:A`
        box-shadow: 0 5px 15px ${dd["modal-shadow-color"].value};
    `},Ds=A`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,h=Zr({"vira-white":"#ffffff","vira-black":"#000000","vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d6","vira-red-20":"#ffc1bc","vira-red-30":"#ffa6a2","vira-red-40":"#ff8887","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001e","vira-red-80":"#a60012","vira-red-90":"#760004","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdcab","vira-orange-20":"#ffc768","vira-orange-30":"#ffac3a","vira-orange-40":"#f49400","vira-orange-50":"#dd8100","vira-orange-60":"#c66b00","vira-orange-70":"#a85800","vira-orange-80":"#884400","vira-orange-90":"#682800","vira-yellow-5":"#f5f0c6","vira-yellow-10":"#eee399","vira-yellow-20":"#e9d100","vira-yellow-30":"#d6bf00","vira-yellow-40":"#c1ac00","vira-yellow-50":"#ad9800","vira-yellow-60":"#958400","vira-yellow-70":"#7d6e00","vira-yellow-80":"#635700","vira-yellow-90":"#473d00","vira-green-5":"#def6cc","vira-green-10":"#c4eea3","vira-green-20":"#94e53b","vira-green-30":"#81d316","vira-green-40":"#71bf00","vira-green-50":"#5eaa00","vira-green-60":"#509400","vira-green-70":"#427c00","vira-green-80":"#316200","vira-green-90":"#1f4600","vira-teal-5":"#d3f5ed","vira-teal-10":"#aeeedf","vira-teal-20":"#4ce6cc","vira-teal-30":"#31d3ba","vira-teal-40":"#00c0a7","vira-teal-50":"#00aa93","vira-teal-60":"#00937e","vira-teal-70":"#007c68","vira-teal-80":"#006252","vira-teal-90":"#004539","vira-blue-5":"#def1ff","vira-blue-10":"#c0e7ff","vira-blue-20":"#9dd7ff","vira-blue-30":"#78c5ff","vira-blue-40":"#5fb1fc","vira-blue-50":"#4d9de7","vira-blue-60":"#3588d0","vira-blue-70":"#1971b7","vira-blue-80":"#00579a","vira-blue-90":"#003a7b","vira-purple-5":"#f3ebff","vira-purple-10":"#e8dcff","vira-purple-20":"#e1c5ff","vira-purple-30":"#d1afff","vira-purple-40":"#c198ff","vira-purple-50":"#b07dff","vira-purple-60":"#a25cff","vira-purple-70":"#8a3cf2","vira-purple-80":"#710dd3","vira-purple-90":"#4c0099","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5f7","vira-pink-20":"#ffbaf5","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb8","vira-pink-60":"#cd58a2","vira-pink-70":"#b3408b","vira-pink-80":"#962472","vira-pink-90":"#6f0050","vira-grey-5":"#eeeef1","vira-grey-10":"#e1e1e4","vira-grey-20":"#d0d0d6","vira-grey-30":"#bebec3","vira-grey-40":"#ababb2","vira-grey-50":"#98989c","vira-grey-60":"#838489","vira-grey-70":"#6e6e73","vira-grey-80":"#57575c","vira-grey-90":"#3d3d43"});function hp(e){return T.isPrimitive(e)||e instanceof Cn?String(e):e.default}function Dn(e,t,r,n){const o=`${r.prefix}-default-fg`,i=`${r.prefix}-default-bg`;if(T.isPrimitive(t)||t instanceof Cn)return t;if("refDefaultBackground"in t)return`var(--${i}, ${hp(r.background)})`;if("refDefaultForeground"in t)return`var(--${o}, ${hp(r.foreground)})`;if("refBackground"in t||"refForeground"in t){const s=T.hasKey(t,"refBackground")?"refBackground":T.hasKey(t,"refForeground")?"refForeground":void 0,a=s&&T.hasKey(t,s)?t[s]:void 0,u=s==="refBackground"?"background":"foreground",l=a&&n[a];if(!l)throw new Error(`Color theme ${s} reference '${a}' does not exist. (Referenced from '${e}'.)`);const c=l[u]||(u==="foreground"?Dn(o,r.foreground,r,n):Dn(i,r.background,r,n));return`var(--${a}-${u==="foreground"?"fg":"bg"}, ${Dn(a,c,r,n)})`}else return t.value}const ji="theme-default";function $w(e,t){try{if(ji in t)throw new Error(`Cannot define theme color by name '${ji}', it is used internally.`);const r=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,o=`${e.prefix}-default-inverse-fg`,i=`${e.prefix}-default-inverse-bg`,s=Kt({[r]:Dn(r,e.foreground,e,t),[n]:Dn(n,e.background,e,t),[o]:Dn(o,e.background,e,t),[i]:Dn(i,e.foreground,e,t)},(v,$)=>({default:$,initialValue:"transparent",syntax:_n.Color})),a=Zr(s),u=Xn(t).reduce((v,[$,k])=>{const D=gp($),E=k.foreground?Dn([$,"foreground"].join(" "),k.foreground,e,t):`var(${a[r].name}, ${a[r].default})`,P=k.background?Dn([$,"background"].join(" "),k.background,e,t):`var(${a[n].name}, ${a[n].default})`;return v[D.foreground]={default:E,initialValue:"transparent",syntax:_n.Color},v[D.background]={default:P,initialValue:"transparent",syntax:_n.Color},v[D.foregroundInverse]={default:`var(--${D.background}, ${P})`,initialValue:"transparent",syntax:_n.Color},v[D.backgroundInverse]={default:`var(--${D.foreground}, ${E})`,initialValue:"transparent",syntax:_n.Color},v},{}),l=Zr(u),c={},d={};Xn(t).forEach(([v,$])=>{Wt.isString(v);const k=gp(v),D=l[k.foreground],E=l[k.background],P=l[k.foregroundInverse],O=l[k.backgroundInverse];Wt.isDefined(D),Wt.isDefined(E),Wt.isDefined(P),Wt.isDefined(O),c[v]={foreground:D,background:E,init:$,name:v},d[v]={foreground:P,background:O,init:$,name:v}});const f={foreground:a[r],background:a[n],init:e,name:ji},m={...f,foreground:a[o],background:a[i]};return{colors:{[ji]:f,...c},inverse:{[ji]:m,...d},init:{colors:t,default:e}}}catch(r){throw globalThis.setTimeout(()=>Pb.error(r)),r}}function gp(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}function fd({originalTheme:e,layerKey:t,themeColor:r,override:n,overrideValues:o}){const i=n?.[t];i&&(o[String(r[t].name)]=String(Dn(t,i,e.init.default,e.init.colors)))}function yM(e,t,{defaultOverride:r,colorOverrides:n}){const o={};r&&ze(r).forEach(u=>{fd({originalTheme:e,layerKey:u,override:r,themeColor:e.colors[ji],overrideValues:o})});const i={};n&&Xn(n).forEach(([u,l])=>{const c=e.colors[u];if(!c)throw new Error(`Override color name '${u}' does not exist in the theme being overridden.`);fd({originalTheme:e,layerKey:"foreground",override:l,themeColor:c,overrideValues:i}),fd({originalTheme:e,layerKey:"background",override:l,themeColor:c,overrideValues:i})});const s=Kt(e.init.colors,(u,l)=>{const c=n?.[u];return{...l,...c}}),a=$w({...e.init.default,...r},s);return{name:t,overrides:{...o,...i},originalTheme:e,asTheme:a}}const kw=$w({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-body":{foreground:h["vira-red-80"]},"vira-red-foreground-header":{foreground:h["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:h["vira-red-30"]},"vira-red-foreground-decoration":{foreground:h["vira-red-20"]},"vira-red-foreground-invisible":{foreground:h["vira-red-10"]},"vira-red-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-red-80"]},"vira-red-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-red-40"]},"vira-red-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-red-30"]},"vira-red-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-red-20"]},"vira-red-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-red-5"]},"vira-red-on-self-body":{foreground:h["vira-red-90"],background:"#ffe9e6"},"vira-red-on-self-header":{foreground:h["vira-red-60"],background:"#ffe9e6"},"vira-red-on-self-placeholder":{foreground:h["vira-red-50"],background:"#ffe9e6"},"vira-red-on-self-decoration":{foreground:h["vira-red-30"],background:"#ffe9e6"},"vira-red-on-self-invisible":{foreground:h["vira-red-20"],background:"#ffe9e6"},"vira-orange-foreground-body":{foreground:h["vira-orange-80"]},"vira-orange-foreground-header":{foreground:h["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:h["vira-orange-30"]},"vira-orange-foreground-decoration":{foreground:h["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:h["vira-orange-5"]},"vira-orange-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-orange-80"]},"vira-orange-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-orange-40"]},"vira-orange-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-orange-30"]},"vira-orange-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-orange-20"]},"vira-orange-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-orange-5"]},"vira-orange-on-self-body":{foreground:h["vira-orange-90"],background:"#ffebd1"},"vira-orange-on-self-header":{foreground:h["vira-orange-60"],background:"#ffebd1"},"vira-orange-on-self-placeholder":{foreground:h["vira-orange-50"],background:"#ffebd1"},"vira-orange-on-self-decoration":{foreground:h["vira-orange-30"],background:"#ffebd1"},"vira-orange-on-self-invisible":{foreground:h["vira-orange-20"],background:"#ffebd1"},"vira-yellow-foreground-body":{foreground:h["vira-yellow-80"]},"vira-yellow-foreground-header":{foreground:h["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:h["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:h["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:h["vira-yellow-5"]},"vira-yellow-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-yellow-80"]},"vira-yellow-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-yellow-40"]},"vira-yellow-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-yellow-30"]},"vira-yellow-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-yellow-20"]},"vira-yellow-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:h["vira-yellow-90"],background:"#f5f0c6"},"vira-yellow-on-self-header":{foreground:h["vira-yellow-60"],background:"#f5f0c6"},"vira-yellow-on-self-placeholder":{foreground:h["vira-yellow-40"],background:"#f5f0c6"},"vira-yellow-on-self-decoration":{foreground:h["vira-yellow-30"],background:"#f5f0c6"},"vira-yellow-on-self-invisible":{foreground:h["vira-yellow-10"],background:"#f5f0c6"},"vira-green-foreground-body":{foreground:h["vira-green-80"]},"vira-green-foreground-header":{foreground:h["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:h["vira-green-40"]},"vira-green-foreground-decoration":{foreground:h["vira-green-20"]},"vira-green-foreground-invisible":{foreground:h["vira-green-5"]},"vira-green-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-green-80"]},"vira-green-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-green-40"]},"vira-green-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-green-30"]},"vira-green-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-green-20"]},"vira-green-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-green-5"]},"vira-green-on-self-body":{foreground:h["vira-green-90"],background:"#def6cc"},"vira-green-on-self-header":{foreground:h["vira-green-60"],background:"#def6cc"},"vira-green-on-self-placeholder":{foreground:h["vira-green-40"],background:"#def6cc"},"vira-green-on-self-decoration":{foreground:h["vira-green-30"],background:"#def6cc"},"vira-green-on-self-invisible":{foreground:h["vira-green-10"],background:"#def6cc"},"vira-teal-foreground-body":{foreground:h["vira-teal-80"]},"vira-teal-foreground-header":{foreground:h["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:h["vira-teal-40"]},"vira-teal-foreground-decoration":{foreground:h["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:h["vira-teal-5"]},"vira-teal-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-teal-80"]},"vira-teal-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-teal-40"]},"vira-teal-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-teal-30"]},"vira-teal-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-teal-20"]},"vira-teal-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-teal-5"]},"vira-teal-on-self-body":{foreground:h["vira-teal-90"],background:"#d3f5ed"},"vira-teal-on-self-header":{foreground:h["vira-teal-60"],background:"#d3f5ed"},"vira-teal-on-self-placeholder":{foreground:h["vira-teal-50"],background:"#d3f5ed"},"vira-teal-on-self-decoration":{foreground:h["vira-teal-30"],background:"#d3f5ed"},"vira-teal-on-self-invisible":{foreground:h["vira-teal-20"],background:"#d3f5ed"},"vira-blue-foreground-body":{foreground:h["vira-blue-80"]},"vira-blue-foreground-header":{foreground:h["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:h["vira-blue-40"]},"vira-blue-foreground-decoration":{foreground:h["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:h["vira-blue-5"]},"vira-blue-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-blue-70"]},"vira-blue-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-blue-40"]},"vira-blue-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-blue-30"]},"vira-blue-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-blue-20"]},"vira-blue-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-blue-5"]},"vira-blue-on-self-body":{foreground:h["vira-blue-90"],background:"#def1ff"},"vira-blue-on-self-header":{foreground:h["vira-blue-60"],background:"#def1ff"},"vira-blue-on-self-placeholder":{foreground:h["vira-blue-50"],background:"#def1ff"},"vira-blue-on-self-decoration":{foreground:h["vira-blue-30"],background:"#def1ff"},"vira-blue-on-self-invisible":{foreground:h["vira-blue-10"],background:"#def1ff"},"vira-purple-foreground-body":{foreground:h["vira-purple-80"]},"vira-purple-foreground-header":{foreground:h["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:h["vira-purple-40"]},"vira-purple-foreground-decoration":{foreground:h["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:h["vira-purple-5"]},"vira-purple-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-purple-80"]},"vira-purple-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-purple-40"]},"vira-purple-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-purple-30"]},"vira-purple-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-purple-20"]},"vira-purple-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-purple-5"]},"vira-purple-on-self-body":{foreground:h["vira-purple-90"],background:"#f3ebff"},"vira-purple-on-self-header":{foreground:h["vira-purple-60"],background:"#f3ebff"},"vira-purple-on-self-placeholder":{foreground:h["vira-purple-40"],background:"#f3ebff"},"vira-purple-on-self-decoration":{foreground:h["vira-purple-30"],background:"#f3ebff"},"vira-purple-on-self-invisible":{foreground:h["vira-purple-10"],background:"#f3ebff"},"vira-pink-foreground-body":{foreground:h["vira-pink-80"]},"vira-pink-foreground-header":{foreground:h["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:h["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:h["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:h["vira-pink-5"]},"vira-pink-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-pink-80"]},"vira-pink-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-pink-40"]},"vira-pink-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-pink-30"]},"vira-pink-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-pink-20"]},"vira-pink-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-pink-5"]},"vira-pink-on-self-body":{foreground:h["vira-pink-90"],background:"#ffe7fb"},"vira-pink-on-self-header":{foreground:h["vira-pink-60"],background:"#ffe7fb"},"vira-pink-on-self-placeholder":{foreground:h["vira-pink-50"],background:"#ffe7fb"},"vira-pink-on-self-decoration":{foreground:h["vira-pink-30"],background:"#ffe7fb"},"vira-pink-on-self-invisible":{foreground:h["vira-pink-20"],background:"#ffe7fb"},"vira-grey-foreground-body":{foreground:h["vira-grey-80"]},"vira-grey-foreground-header":{foreground:h["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:h["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:h["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:h["vira-grey-5"]},"vira-grey-background-body":{foreground:{refDefaultBackground:!0},background:h["vira-grey-80"]},"vira-grey-background-header":{foreground:{refDefaultBackground:!0},background:h["vira-grey-40"]},"vira-grey-background-placeholder":{foreground:{refDefaultBackground:!0},background:h["vira-grey-30"]},"vira-grey-background-decoration":{foreground:{refDefaultBackground:!0},background:h["vira-grey-20"]},"vira-grey-background-invisible":{foreground:{refDefaultBackground:!0},background:h["vira-grey-5"]},"vira-grey-on-self-body":{foreground:h["vira-grey-90"],background:"#eeeef1"},"vira-grey-on-self-header":{foreground:h["vira-grey-60"],background:"#eeeef1"},"vira-grey-on-self-placeholder":{foreground:h["vira-grey-40"],background:"#eeeef1"},"vira-grey-on-self-decoration":{foreground:h["vira-grey-30"],background:"#eeeef1"},"vira-grey-on-self-invisible":{foreground:h["vira-grey-20"],background:"#eeeef1"}}),bM=yM(kw,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-body":{foreground:h["vira-red-20"],background:"black"},"vira-red-foreground-header":{background:"black"},"vira-red-foreground-placeholder":{foreground:h["vira-red-60"],background:"black"},"vira-red-foreground-decoration":{foreground:h["vira-red-80"],background:"black"},"vira-red-foreground-invisible":{foreground:h["vira-red-90"],background:"black"},"vira-red-background-body":{foreground:"black",background:h["vira-red-20"]},"vira-red-background-header":{foreground:"black",background:h["vira-red-50"]},"vira-red-background-placeholder":{foreground:"black",background:h["vira-red-60"]},"vira-red-background-decoration":{foreground:"black",background:h["vira-red-80"]},"vira-red-background-invisible":{foreground:"black",background:h["vira-red-90"]},"vira-red-on-self-body":{foreground:h["vira-red-10"],background:"#760004"},"vira-red-on-self-header":{foreground:h["vira-red-40"],background:"#760004"},"vira-red-on-self-placeholder":{background:"#760004"},"vira-red-on-self-decoration":{foreground:h["vira-red-70"],background:"#760004"},"vira-red-on-self-invisible":{foreground:h["vira-red-80"],background:"#760004"},"vira-orange-foreground-body":{foreground:h["vira-orange-20"],background:"black"},"vira-orange-foreground-header":{background:"black"},"vira-orange-foreground-placeholder":{foreground:h["vira-orange-60"],background:"black"},"vira-orange-foreground-decoration":{foreground:h["vira-orange-80"],background:"black"},"vira-orange-foreground-invisible":{foreground:h["vira-orange-90"],background:"black"},"vira-orange-background-body":{foreground:"black",background:h["vira-orange-20"]},"vira-orange-background-header":{foreground:"black",background:h["vira-orange-50"]},"vira-orange-background-placeholder":{foreground:"black",background:h["vira-orange-60"]},"vira-orange-background-decoration":{foreground:"black",background:h["vira-orange-80"]},"vira-orange-background-invisible":{foreground:"black",background:h["vira-orange-90"]},"vira-orange-on-self-body":{foreground:h["vira-orange-10"],background:"#682800"},"vira-orange-on-self-header":{foreground:h["vira-orange-40"],background:"#682800"},"vira-orange-on-self-placeholder":{background:"#682800"},"vira-orange-on-self-decoration":{foreground:h["vira-orange-70"],background:"#682800"},"vira-orange-on-self-invisible":{foreground:h["vira-orange-80"],background:"#682800"},"vira-yellow-foreground-body":{foreground:h["vira-yellow-20"],background:"black"},"vira-yellow-foreground-header":{background:"black"},"vira-yellow-foreground-placeholder":{foreground:h["vira-yellow-60"],background:"black"},"vira-yellow-foreground-decoration":{foreground:h["vira-yellow-80"],background:"black"},"vira-yellow-foreground-invisible":{foreground:h["vira-yellow-90"],background:"black"},"vira-yellow-background-body":{foreground:"black",background:h["vira-yellow-20"]},"vira-yellow-background-header":{foreground:"black",background:h["vira-yellow-50"]},"vira-yellow-background-placeholder":{foreground:"black",background:h["vira-yellow-60"]},"vira-yellow-background-decoration":{foreground:"black",background:h["vira-yellow-80"]},"vira-yellow-background-invisible":{foreground:"black",background:h["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:h["vira-yellow-10"],background:"#473d00"},"vira-yellow-on-self-header":{foreground:h["vira-yellow-40"],background:"#473d00"},"vira-yellow-on-self-placeholder":{foreground:h["vira-yellow-50"],background:"#473d00"},"vira-yellow-on-self-decoration":{foreground:h["vira-yellow-70"],background:"#473d00"},"vira-yellow-on-self-invisible":{foreground:h["vira-yellow-80"],background:"#473d00"},"vira-green-foreground-body":{foreground:h["vira-green-20"],background:"black"},"vira-green-foreground-header":{background:"black"},"vira-green-foreground-placeholder":{foreground:h["vira-green-60"],background:"black"},"vira-green-foreground-decoration":{foreground:h["vira-green-80"],background:"black"},"vira-green-foreground-invisible":{foreground:h["vira-green-90"],background:"black"},"vira-green-background-body":{foreground:"black",background:h["vira-green-20"]},"vira-green-background-header":{foreground:"black",background:h["vira-green-50"]},"vira-green-background-placeholder":{foreground:"black",background:h["vira-green-60"]},"vira-green-background-decoration":{foreground:"black",background:h["vira-green-80"]},"vira-green-background-invisible":{foreground:"black",background:h["vira-green-90"]},"vira-green-on-self-body":{foreground:h["vira-green-10"],background:"#1f4600"},"vira-green-on-self-header":{foreground:h["vira-green-40"],background:"#1f4600"},"vira-green-on-self-placeholder":{foreground:h["vira-green-50"],background:"#1f4600"},"vira-green-on-self-decoration":{foreground:h["vira-green-70"],background:"#1f4600"},"vira-green-on-self-invisible":{foreground:h["vira-green-80"],background:"#1f4600"},"vira-teal-foreground-body":{foreground:h["vira-teal-20"],background:"black"},"vira-teal-foreground-header":{background:"black"},"vira-teal-foreground-placeholder":{foreground:h["vira-teal-60"],background:"black"},"vira-teal-foreground-decoration":{foreground:h["vira-teal-80"],background:"black"},"vira-teal-foreground-invisible":{foreground:h["vira-teal-90"],background:"black"},"vira-teal-background-body":{foreground:"black",background:h["vira-teal-20"]},"vira-teal-background-header":{foreground:"black",background:h["vira-teal-50"]},"vira-teal-background-placeholder":{foreground:"black",background:h["vira-teal-60"]},"vira-teal-background-decoration":{foreground:"black",background:h["vira-teal-80"]},"vira-teal-background-invisible":{foreground:"black",background:h["vira-teal-90"]},"vira-teal-on-self-body":{foreground:h["vira-teal-10"],background:"#004539"},"vira-teal-on-self-header":{foreground:h["vira-teal-40"],background:"#004539"},"vira-teal-on-self-placeholder":{background:"#004539"},"vira-teal-on-self-decoration":{foreground:h["vira-teal-70"],background:"#004539"},"vira-teal-on-self-invisible":{foreground:h["vira-teal-80"],background:"#004539"},"vira-blue-foreground-body":{foreground:h["vira-blue-20"],background:"black"},"vira-blue-foreground-header":{background:"black"},"vira-blue-foreground-placeholder":{foreground:h["vira-blue-60"],background:"black"},"vira-blue-foreground-decoration":{foreground:h["vira-blue-80"],background:"black"},"vira-blue-foreground-invisible":{foreground:h["vira-blue-90"],background:"black"},"vira-blue-background-body":{foreground:"black",background:h["vira-blue-20"]},"vira-blue-background-header":{foreground:"black",background:h["vira-blue-50"]},"vira-blue-background-placeholder":{foreground:"black",background:h["vira-blue-60"]},"vira-blue-background-decoration":{foreground:"black",background:h["vira-blue-80"]},"vira-blue-background-invisible":{foreground:"black",background:h["vira-blue-90"]},"vira-blue-on-self-body":{foreground:h["vira-blue-10"],background:"#003a7b"},"vira-blue-on-self-header":{foreground:h["vira-blue-40"],background:"#003a7b"},"vira-blue-on-self-placeholder":{background:"#003a7b"},"vira-blue-on-self-decoration":{foreground:h["vira-blue-70"],background:"#003a7b"},"vira-blue-on-self-invisible":{foreground:h["vira-blue-80"],background:"#003a7b"},"vira-purple-foreground-body":{foreground:h["vira-purple-20"],background:"black"},"vira-purple-foreground-header":{background:"black"},"vira-purple-foreground-placeholder":{foreground:h["vira-purple-60"],background:"black"},"vira-purple-foreground-decoration":{foreground:h["vira-purple-80"],background:"black"},"vira-purple-foreground-invisible":{foreground:h["vira-purple-90"],background:"black"},"vira-purple-background-body":{foreground:"black",background:h["vira-purple-20"]},"vira-purple-background-header":{foreground:"black",background:h["vira-purple-50"]},"vira-purple-background-placeholder":{foreground:"black",background:h["vira-purple-60"]},"vira-purple-background-decoration":{foreground:"black",background:h["vira-purple-80"]},"vira-purple-background-invisible":{foreground:"black",background:h["vira-purple-90"]},"vira-purple-on-self-body":{foreground:h["vira-purple-10"],background:"#4c0099"},"vira-purple-on-self-header":{foreground:h["vira-purple-40"],background:"#4c0099"},"vira-purple-on-self-placeholder":{foreground:h["vira-purple-50"],background:"#4c0099"},"vira-purple-on-self-decoration":{foreground:h["vira-purple-70"],background:"#4c0099"},"vira-purple-on-self-invisible":{foreground:h["vira-purple-80"],background:"#4c0099"},"vira-pink-foreground-body":{foreground:h["vira-pink-20"],background:"black"},"vira-pink-foreground-header":{background:"black"},"vira-pink-foreground-placeholder":{foreground:h["vira-pink-60"],background:"black"},"vira-pink-foreground-decoration":{foreground:h["vira-pink-80"],background:"black"},"vira-pink-foreground-invisible":{foreground:h["vira-pink-90"],background:"black"},"vira-pink-background-body":{foreground:"black",background:h["vira-pink-20"]},"vira-pink-background-header":{foreground:"black",background:h["vira-pink-50"]},"vira-pink-background-placeholder":{foreground:"black",background:h["vira-pink-60"]},"vira-pink-background-decoration":{foreground:"black",background:h["vira-pink-80"]},"vira-pink-background-invisible":{foreground:"black",background:h["vira-pink-90"]},"vira-pink-on-self-body":{foreground:h["vira-pink-10"],background:"#6f0050"},"vira-pink-on-self-header":{foreground:h["vira-pink-40"],background:"#6f0050"},"vira-pink-on-self-placeholder":{background:"#6f0050"},"vira-pink-on-self-decoration":{foreground:h["vira-pink-70"],background:"#6f0050"},"vira-pink-on-self-invisible":{foreground:h["vira-pink-80"],background:"#6f0050"},"vira-grey-foreground-body":{foreground:h["vira-grey-20"],background:"black"},"vira-grey-foreground-header":{background:"black"},"vira-grey-foreground-placeholder":{foreground:h["vira-grey-60"],background:"black"},"vira-grey-foreground-decoration":{foreground:h["vira-grey-80"],background:"black"},"vira-grey-foreground-invisible":{foreground:h["vira-grey-90"],background:"black"},"vira-grey-background-body":{foreground:"black",background:h["vira-grey-20"]},"vira-grey-background-header":{foreground:"black",background:h["vira-grey-50"]},"vira-grey-background-placeholder":{foreground:"black",background:h["vira-grey-60"]},"vira-grey-background-decoration":{foreground:"black",background:h["vira-grey-80"]},"vira-grey-background-invisible":{foreground:"black",background:h["vira-grey-90"]},"vira-grey-on-self-body":{foreground:h["vira-grey-10"],background:"#3d3d43"},"vira-grey-on-self-header":{foreground:h["vira-grey-40"],background:"#3d3d43"},"vira-grey-on-self-placeholder":{foreground:h["vira-grey-50"],background:"#3d3d43"},"vira-grey-on-self-decoration":{foreground:h["vira-grey-70"],background:"#3d3d43"},"vira-grey-on-self-invisible":{foreground:h["vira-grey-80"],background:"#3d3d43"}}});function yf({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>yf({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function vM({value:e,allowed:t,blocked:r}){const n=t?yf({input:e,matcher:t}):!0,o=r?yf({input:e,matcher:r}):!1;return n&&!o}function bf(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(vM({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function wM({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){const i=Qo(r,HTMLInputElement),s=T.hasKey(r,"data")&&Ab.isString(r.data)||"";if(s){const{blocked:u}=bf({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=bf({value:i.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;i.value!==a&&(i.value=a),t!==a&&o(a)}var ns=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(ns||{});const ct=We()({tagName:"vira-input",cssVars:{"vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>A`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${re["vira-form-foreground-color"].value};
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
                    font-weight: ${re["vira-form-label-font-weight"].value};
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
                ${Ds};
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
                border-radius: ${Gr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${re["vira-form-border-color"].value};
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
                border-radius: ${Gr["vira-form-input-radius"].value};
                background-color: ${re["vira-form-background-color"].value};
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
                    ${fu({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${re["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${re["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${re["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Ds};
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
                    border-color: ${re["vira-form-error-foreground-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${di};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:pt(),inputBlocked:pt()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:ti(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:o,host:i})=>{const{filtered:s}=bf({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?g`
                  <${V.assign({icon:e.icon})} class="left-side-icon"></${V}>
              `:Q,u=e.fitText?A`
                  width: ${r.forcedInputWidth}px;
              `:Q,l=W("mousedown",f=>{const m=Qo(f,HTMLElement,{useOriginalTarget:!0}),v=Fn.instanceOf(i.shadowRoot.querySelector("input"),HTMLInputElement);m!==v&&(f.preventDefault(),v.focus())}),c=e.disableBrowserHelps||e.type==="password",d=g`
            <span class="input-wrapper" ${e.label?Q:l}>
                ${a}
                ${gr(!!e.fitText,g`
                        <span
                            class="size-span"
                            ${rw(({contentRect:f})=>{n({forcedInputWidth:f.width})})}
                        >
                            <pre>${s||e.placeholder||Q}</pre>
                        </span>
                    `)}

                <input
                    id=${it(e.label?r.randomId:void 0)}
                    aria-label=${it(e.label||void 0)}
                    autofocus=${!1}
                    type=${$M(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${it(c?"off":void 0)}
                    autocorrect=${it(c?"off":void 0)}
                    autocapitalize=${it(c?"off":void 0)}
                    spellcheck=${it(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${W("input",f=>{wM({inputs:e,previousValue:s,event:f,inputBlockedCallback(m){t(new o.inputBlocked(m))},newValueCallback(m){t(new o.valueChange(m))}})})}
                    placeholder=${it(e.placeholder||void 0)}
                    ${Gn(e.attributePassthrough)}
                />

                ${gr(!!(e.showClearButton&&e.value),g`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${W("mousedown",f=>{f.stopImmediatePropagation(),f.preventDefault()})}
                            ${W("click",()=>{e.disabled||t(new o.valueChange(""))})}
                        >
                            <${V.assign({icon:gw})}></${V}>
                        </button>
                    `)}
                ${gr(e.type==="password",g`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${W("mousedown",f=>{f.stopImmediatePropagation(),f.preventDefault()})}
                            ${W("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${V.assign({icon:r.showPassword?bw:yw})}></${V}>
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
            `:d}});function $M(e,t){return e==="password"&&t?"text":e||"text"}const st=We()({tagName:"vira-select",state(){return{randomId:ti(32)}},events:{valueChange:pt()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${re["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Vr};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${Gr["vira-form-input-radius"].value};
            background-color: ${re["vira-form-background-color"].value};
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
                    ${fu({elementBorderSize:0,noNesting:!0})}
                }

                &.placeholder {
                    color: ${re["vira-form-placeholder-color"].value};
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
                border-radius: ${Gr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${re["vira-form-border-color"].value};
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
                font-weight: ${re["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${di}
            }
            ${V} {
                ${di}
            }
            & * {
                cursor: not-allowed;
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${re["vira-form-error-foreground-color"].value};
            }
        }
    `,render({inputs:e,state:t,dispatch:r,events:n}){const o=e.value||void 0,i=e.placeholder||o==null?g`
                      <option value="" disabled ?selected=${o==null}>
                          ${e.placeholder}
                      </option>
                  `:Q,s=g`
            <span class="select-wrapper">
                <select
                    .value=${it(o)}
                    class=${sr({placeholder:!o&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${it(e.label?t.randomId:void 0)}
                    aria-label=${it(e.label||void 0)}
                    aria-disabled=${it(e.disabled?"true":void 0)}
                    ${W("input",a=>{const u=Qo(a,HTMLSelectElement),l=u.value;u.value!==o&&(u.selectedIndex=e.options.findIndex(c=>c.value===o)),r(new n.valueChange(l))})}
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

                <${V.assign({icon:e.icon})} class="input-icon"></${V}>
                <${V.assign({icon:mh})} class="trigger-icon"></${V}>
            </span>
        `;return e.label?g`
                <label for=${t.randomId} ${Gn(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),lr=We()({tagName:"vira-form",events:{valueChange:pt(),validChange:pt()},styles:A`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:r,state:n,updateState:o}){const i=_T(e.fields);i!==n.lastIsValid&&(o({lastIsValid:i}),t(new r.validChange({allFieldsAreValid:i})));const s=Xn(e.fields).map(([a,u])=>u.isHidden?Q:u.type===be.Checkbox?g`
                        <${$e.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:cd(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?Hn(u.testId):Q}
                            ${W($e.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${$e}>
                    `:u.type===be.Select?g`
                        <${st.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:cd(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?Hn(u.testId):Q}
                            ${W(st.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${st}>
                    `:g`
                        <${ct.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:cd(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===be.NewPassword?{autocomplete:"new-password"}:u.type===be.ExistingPassword?{autocomplete:"password"}:u.type===be.Email?{autocomplete:"email"}:{},type:[be.NewPassword,be.ExistingPassword,be.PlainPassword].includes(u.type)?ns.Password:u.type===be.Email?ns.Email:ns.Default})}
                            ${u.testId?Hn(u.testId):Q}
                            ${W(ct.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${ct}>
                    `);return g`
            <form ${W("submit",a=>a.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}});function kM(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given: ${Wk(r)}`)}function DM(e,t=[],r=!1){return r?t.includes(e.id)?t.filter(n=>n!==e.id):[...t,e.id]:[e.id]}function pp({open:e,callback:t,popUpManager:r,host:n,options:o}){if(e){const i=r.showPopUp(n,o);t?.(i)}else r.removePopUp(),t?.(void 0)}const kr=We()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            ${Ds};
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
                <${V.assign({icon:fh})}></${V}>
                <slot>${e.label}</slot>
            </div>
        `}});function xM(e,t){return e>t}function AM(e,t){return e<t}function za(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var An;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(An||(An={}));var De;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(De||(De={}));function vc(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const o=n[t.x];if(o)if(o.navEntry.navParams.group){const i=vc(o.children);i&&(r=i.node)}else o.navEntry.navParams.disabled||(r=o)}}if(r)return{node:r,coords:t}}function yp(e,t,r,n){if(!t){const u=vc(e.children);return u?(za(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:De.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:De.Navigate}}const{nextNode:o,requiresWrapping:i,coords:s}=Dw(t.position,r),a=n?!0:!i;return o&&a?(za(o.element),{success:!0,defaulted:!1,newElement:o.element,wrapped:i,direction:r,navAction:De.Navigate,coords:s}):o?a?{success:!1,reason:"no conditions matched",direction:r,navAction:De.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:De.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:De.Navigate}}function Dw(e,t){let r=!1,n,o=1;const i=Date.now();for(;!r||!n;)if(n=EM(e,t,o),r=!n.nextNode?.navEntry.navParams.disabled,o++,Date.now()-i>1e3)return Pb.warning("Failed to find next non-disabled node."),n;return n}function EM(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Wt.isDefined(n,"missing parent");const o=Fn.isDefined(n.children[e.nodeCoords.y]),i=n.children.length>1&&(t===An.Down||t===An.Up),s=t===An.Down||t===An.Right?r:-1*r,a=s<0?xM:AM,u=i?D0(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=Fn.isDefined(n.children[u]),c=i?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:D0(e.nodeCoords.x+s,{min:0,max:o.length-1,takeOverflow:!0}),d=n.children[u]?.[c],f=i?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:d,requiresWrapping:f,coords:{x:c,y:u}}}function CM(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:De.Pibling};const{nextNode:o,requiresWrapping:i,coords:s}=Dw(n,t),a=o?.navEntry.navParams.group?vc(o.children):{node:o,coords:s},u=r?!0:!i;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:De.Pibling}:u?(za(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:i,coords:a.coords,direction:t,navAction:De.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:De.Pibling}}var er;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(er||(er={}));const an={name:"data-nav",js(e){return e?`[${an.name}*="${e}"]`:`[${an.name}]`},css({baseSelector:e="",navValue:t}={}){return A`
            ${Je(e)}${Je(an.js(t))}
        `}},hh="navEntry";function xw(e){return hh in e}function Aw(e){if(xw(e)){const t=e[hh];return Fn.instanceOf(t,Ew,"Invalid nav entry")}else return}function FM(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==er.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class Ew{element;navParams;navTreeNode;navValue;eventListener=FM(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Wt.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(an.name,""),ud(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,o=t===(n===er.Focused);if(!(this.navParams.group||this.navController.locked||o||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(er.Focused),ud(this.element)||this.element.focus()):(this.removeNavValue(er.Focused),ud(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,De.Focus)}activate(t){const r=this.navValue,n=t===(r===er.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(er.Active):this.setNavValue(er.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,De.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(an.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(an.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function Cw(e,t){Object.entries(t).forEach(([r,n])=>{T.isBoolean(n)&&n?e.setAttribute(r,""):T.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const SM=no(class extends oo{element;lastKey;constructor(e){super(e),this.element=du(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Cr}});function TM(e){return"group"in e?er.Group:e.disabled?er.Disabled:""}function bp(e,t={}){return SM(y(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;Wt.instanceOf(r,HTMLElement);const o={[an.name]:TM(t),tabindex:n?0:-1};Cw(r,o);const i=Aw(r)||new Ew(r,e,t);xw(r)?(i.navParams=t,i.navController=e):r[hh]=i,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function MM(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:De.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:De.Enter};const r=t.position.node.children[0]?.[0];return r?(za(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:De.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:De.Enter}}function PM(e,t){return Fw([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function Fw(e,t,r){for(let n=0;n<t.length;n++){const o=t[n];for(let i=0;i<o.length;i++){const s=o[i],a={ancestorChain:e,nodeCoords:{x:i,y:n},node:s};if(r(a))return a;const u=Fw(e.concat(a),s.children,r);if(u)return u}}}function Sw(e,t){const r=PM(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function NM(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:De.Exit};const r=t.position.ancestorChain.toReversed().find(o=>!o.node.root&&!o.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:De.Exit};const{nodeCoords:n}=Sw(e,r.navEntry);return za(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:De.Exit,coords:n}}class IM extends yn()("nav-exit"){}class Tw extends yn()("nav-activate"){}class OM extends yn()("nav-focus"){}class BM extends yn()("nav-enter"){}class RM extends yn()("nav-navigate"){}class LM extends yn()("nav-navigate-pibling"){}function jM(e){return{root:!0,children:Mw(e)?.children||[]}}function Mw(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=Aw(t),n=UM(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function UM(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const o=n.navEntry.navParams.x,i=n.navEntry.navParams.y||0,s=Fs(t,i,()=>({noX:[],withX:[],y:i}));o==null?s.noX.push(n):s.withX.push({x:o,node:n})}return e.children.forEach(n=>{const o=Mw(n);o&&r(o)}),t.sort((n,o)=>n.y-o.y).map(n=>(n.withX.sort((o,i)=>o.x-i.x),n.withX.forEach(({x:o,node:i})=>{n.noX.splice(o,0,i)}),n.noX)).filter(T.isTruthy)}class Pw extends _f{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){vc(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const o=Sw(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:o}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const i={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:o.nodeCoords};return r&&(n===De.Activate?this.dispatch(new Tw({detail:i})):n===De.Focus&&this.dispatch(new OM({detail:i}))),i}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:De.Navigate,reason:"NavController is locked."};const n=yp(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new RM({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:De.Enter,reason:"NavController is locked."};const r=MM(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new BM({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:De.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:De.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Wt.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:De.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===De.Activate&&this.currentNavEntry.entry.focus(!0);const t=NM(this.getNavTree(),this.currentNavEntry);return this.dispatch(new IM({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:De.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),i={...this.currentNavEntry?CM(this.currentNavEntry,r,t):yp(n,void 0,r,t),navAction:De.Pibling};return this.dispatch(new LM({detail:i})),i}buildNavTree(){const t=vT(this.rootElement),r=jM(t);return this.cachedNavTree=r,r}}const qi=We()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>A`
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
                    ${Gn(e.attributePassthrough?.a)}
                    style=${it(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return g`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${Gn(e.attributePassthrough?.a)}
                    style=${it(e.stylePassthrough?.a)}
                    ${W("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),vp={item:"menu-item"},$a=We()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new Pw(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>A`
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
            background-color: ${re["vira-form-background-color"].value};
            color: ${re["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Vr};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${an.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:er.Focused})}, ${an.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:er.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${re["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${an.css({baseSelector:".menu-item:not(.disabled)",navValue:er.Focused})},
                ${an.css({baseSelector:".menu-item:not(.disabled)",navValue:er.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${re["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${kr} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${di};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){kM(e.items);const r=e.items.map(n=>{const o=!!e.selected?.includes(n.id),i=T.isString(n.label)?g`
                      <${kr.assign({label:n.label,selected:o,hideCheckIcon:e.hideCheckIcons})}></${kr}>
                  `:n.label,s=n.disabled||!e.isMultiSelect&&o;return n.route?g`
                    <${qi.assign({route:n.route})}
                        class="menu-item ${sr({disabled:!!n.disabled,selected:o})}"
                        ${Hn(vp.item)}
                        title=${it(n.titleText||void 0)}
                        role="option"
                        ${bp(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </${qi}>
                `:g`
                    <button
                        class="menu-item ${sr({disabled:!!n.disabled,selected:o})}"
                        ${Hn(vp.item)}
                        title=${it(n.titleText||void 0)}
                        role="option"
                        ${bp(t.internalNavController,{disabled:s})}
                    >
                        ${i}
                    </button>
                `});return g`
            ${r}
        `}});var gh=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(gh||{}),Fl=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(Fl||{});const ka=We()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${Gr["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${re["vira-form-background-color"].value};
            border: 1px solid ${re["vira-form-border-color"].value};
            color: ${re["vira-form-foreground-color"].value};
            ${rs.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${rs.menuShadowReversed}
            border-radius: ${Gr["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${Gr["vira-form-input-radius"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),Bu=globalThis.document;class _M extends Kv{constructor(){if(super({defaultValue:!!Bu?.hidden,equalityCheck:T.strictEquals}),!Bu)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,Bu));const t=r=>this.updateVisibility(r,Bu);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=zM.includes(t.type),o=VM.includes(t.type),i=n?!0:o?!1:r.hasFocus()||!r.hidden;this.setValue(i)}}const VM=["blur","focusout","pagehide"],zM=["focus","focusin","pageshow"],qM=new _M;function WM(e,t){return qM.listen(e,t)}function vf(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}const wp={top:0,left:0,right:0,bottom:0};class Nw extends Uf("hide-pop-up"){}class Iw extends yn()("nav-select"){}class KM{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new _f;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[WM(!1,t=>{t||this.removePopUp()}),this.navController.listen(Tw,t=>{const r=t.composedPath()[0];r instanceof Element&&vf(r)||t.detail.success&&(this.listenTarget.dispatch(new Iw({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),Ud("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Ud("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=t.composedPath()[0];if(n instanceof Element&&vf(n))return;r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:An.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:An.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:An.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:An.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault())}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new Nw)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},o=$T(t);Wt.instanceOf(o,HTMLElement);const i=t.getBoundingClientRect(),s=o.getBoundingClientRect(),a=o.offsetWidth-o.clientWidth,u=o.offsetHeight-o.clientHeight,l=o===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=Kt(wp,v=>i[v]),d=Kt(wp,v=>{const $=l[v],k=c[v];return Math.abs($-k)}),f=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace,m=d.left>d.right+n.horizontalDiffThreshold&&d.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!f,popRight:!m,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var ko=(e=>(e.Left="left",e.Right="right",e.Both="both",e.Auto="auto",e))(ko||{});const ye=We()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new KM(new Pw(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>A`
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

            ${fu({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${Ds};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${di}
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
    `,events:{navSelect:pt(),openChange:pt(),init:pt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:o,events:i}){e.popUpManager.listen(Nw,()=>{if(t({showPopUpResult:void 0}),o(new i.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");Wt.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(Iw,s=>{n.keepOpenAfterInteraction||pp({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),o(new i.navSelect(s.detail))}),o(new i.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:o,host:i,slotNames:s}){function a({emitEvent:v,open:$},k){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&k){const D=i.shadowRoot.querySelector(".dropdown-trigger");if(D&&!k.composedPath().includes(D))return}pp({open:$,callback(D){o({showPopUpResult:D}),v&&e(new t.openChange(D))},host:i,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="auto"||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?"left":"right":n.horizontalAnchor,l=u==="right"&&r.showPopUpResult?n.ignoreMaxWidth?A`
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
                    `:void 0;function m(v){a({emitEvent:!0,open:!r.showPopUpResult},v)}return g`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${sr({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${W("keydown",v=>{!r.showPopUpResult&&v.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},v)})}
                ${W("click",v=>{if(v.detail===0){let $=!1;if(kT(({element:k})=>vf(k)?($=!0,!0):!1),$)return;m(v)}})}
                ${W("mousedown",v=>{v.button===0&&m(v)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${sr({"right-aligned":u==="right"})}"
                    style=${f}
                >
                    ${gr(!!r.showPopUpResult,g`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),GM={menu:"menu-trigger-menu"},yo=We()({tagName:"vira-menu-trigger",styles:A`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${ye} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{itemActivate:pt(),openChange:pt()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:o}){return g`
            <${ye.assign({...e,keepOpenAfterInteraction:!0,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||ko.Left})}
                class=${sr({open:!!t.showPopUpResult})}
                ${W(ye.events.init,i=>{r({navController:i.detail.navController,popUpManager:i.detail.popUpManager})})}
                ${W(ye.events.openChange,i=>{!!t.showPopUpResult!=!!i.detail&&n(new o.openChange(i.detail)),r({showPopUpResult:i.detail})})}
                ${W(ye.events.navSelect,i=>{const s=i.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);n(new o.itemActivate(DM(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${ye.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?g`
                          <${ka.assign({direction:t.showPopUpResult.popDown?Fl.Downwards:Fl.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${ye.slotNames.popUp}
                              class=${sr({"full-width-menu":e.horizontalAnchor===ko.Both})}
                          >
                              <${$a.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Hn(GM.menu)}
                              ></${$a}>
                          </${ka}>
                      `:Q}
            </${ye}>
        `}}),Qe=We()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>A`
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
        `}});var Wi=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(Wi||{});const ge=We()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"transparent","vira-button-internal-background-color":"transparent"},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ds};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${ks["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${di};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
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
            border-radius: ${Gr["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Jn["vira-interaction-animation-duration"].value},
                background-color
                    ${Jn["vira-interaction-animation-duration"].value},
                border-color ${Jn["vira-interaction-animation-duration"].value};

            ${fu({elementBorderSize:2})}
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
        `}});var wf=(e=>(e.Error="error",e.Success="success",e))(wf||{});const md=We()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":"1px solid #d3d3d3","vira-card-border-radius":"16px","vira-card-padding":"16px"},styles:({hostClasses:e,cssVars:t})=>A`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${t["vira-card-border-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${re["vira-form-error-foreground-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${re["vira-form-success-foreground-color"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),On=We()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>A`
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
    `,events:{expandChange:pt()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:o,inputs:i}){const s=i.expanded?A`
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
                    ${rw(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),hd={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},ua=We()({tagName:"vira-dropdown",styles:A`
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
            ${Ds};
            border: 1px solid ${re["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${Gr["vira-form-input-radius"].value};
            background-color: ${re["vira-form-background-color"].value};
            color: ${re["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:pt(),openChange:pt()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:o}){const i=hi(t.selected,c=>t.options.find(d=>d.id===c),T.isTruthy),s=t.icon?g`
                  <${V.assign({icon:t.icon})}
                      ${Hn(hd.icon)}
                  ></${V}>
              `:Q,a=!i.length,u=t.selectionPrefix&&!a?g`
                      <span class="selected-label-prefix" ${Hn(hd.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:Q,l=a?t.placeholder||"":t.isMultiSelect&&i.length>1?`${i.length} Selected`:i[0]?.label||"";return g`
            <${yo.assign({...t,items:t.options,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||ko.Both})}
                ${W(yo.events.openChange,c=>{o({showPopUpResult:c.detail}),r(new n.openChange(c.detail))})}
                ${W(yo.events.itemActivate,c=>{r(new n.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${sr({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Hn(hd.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${sr({"using-placeholder":a})}"
                        title=${it(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${V.assign({icon:mh})}
                            class="trigger-icon"
                        ></${V}>
                    </span>
                </div>
            </${yo}>
        `}}),ni=We()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>A`
        :host {
            color: ${re["vira-form-error-foreground-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return g`
            <slot></slot>
        `}}),lo=We()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:pt(),imageError:pt()},styles:({hostClasses:e})=>A`
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
                      <${V.assign({icon:Cl})} class="error"></${V}>
                  </slot>
              `:t.loadedUrls[s]?void 0:g`
                    <slot class="status-wrapper" name=${i.loading}>
                        <${V.assign({icon:ci})}></${V}>
                    </slot>
                `;return g`
            ${gr(!!a,a)}
            <img
                class=${sr({hidden:!!a})}
                ${W("load",async()=>{e._debugLoadDelay&&await oi(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new o.imageLoad)})}
                ${W("error",async u=>{e._debugLoadDelay&&await oi(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new o.imageError(u.error))})}
                src=${s}
            />
        `}}),ZM=["pagehide","pageshow","popstate"],Bn=We()({tagName:"vira-modal",events:{modalClose:pt()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-modal-backdrop-filter":"blur(3px)","vira-modal-subtitle-color":"#7E7E7E","vira-modal-close-button-hover-radius":"8px","vira-modal-close-button-hover-background-color":"#E4E4E4"},styles:({hostClasses:e,cssVars:t})=>A`
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
            ${rs.modal}

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
                        ${Vr};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${t["vira-modal-close-button-hover-radius"].value};

                        &:hover {
                            background-color: ${t["vira-modal-close-button-hover-background-color"].value};
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
    `,render({inputs:e,state:t,updateState:r,events:n,dispatch:o,slotNames:i}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),r({previousOpenValue:e.open}),e.open)){const a=ZM.map(u=>Ud(u,()=>{o(new n.modalClose)}));r({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),o(new n.modalClose))}return g`
            <dialog
                ${li(a=>{r({dialogElement:Fn.instanceOf(a,HTMLDialogElement)})})}
                ${W("close",()=>{s()})}
                ${W("click",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${li(a=>{r({contentElement:Fn.instanceOf(a,HTMLDivElement)})})}
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
                            <${V.assign({icon:ww})}></${V}>
                        </button>
                    </div>
                    ${e.open?g`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:Q}
                </div>
            </dialog>
        `}}),En=We()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":({state:e,inputs:t})=>e.isOverflowing||!!t.useSmall},styles:({hostClasses:e})=>A`
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
                ${li(i=>{if(!r.automaticallySwitch)return;const s={elementToTest:i,host:n,updateState:t},a=new ResizeObserver(()=>{gd(s)});a.observe(n),a.observe(i);const u=Vf(i,"slotchange",()=>{gd(s)});gd(s),o.cleanup?.(),t({cleanup(){a.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function gd({elementToTest:e,host:t,updateState:r}){const n=e.scrollWidth>t.clientWidth;r({isOverflowing:n})}const Qt=We()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>A`
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
    `,render({inputs:e,host:t}){const r=e.min||0,o=(e.max||100)-r,i=e.value-r,s=Bk(Math.round(i/o*100),{min:0,max:100});return Cw(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),g`
            <div
                class="progress-bar"
                style=${s?A`
                          width: ${s}%;
                      `:A`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function Ow(e){return Y9({async updateCallback(t,r){if(r&&t in r.cache)return{cache:r.cache,element:r.cache[t],key:t};const n=await e[t]();return{cache:{...r?.cache,[t]:n},element:n,key:t}}})}function Bw(e,{ready:t,loading:r,error:n,key:o}){return o&&e.update(o),e.value instanceof Error?n(e.value):e.value instanceof Promise?r(e.value.then(i=>({[i.key]:i.element}))):t({[e.value.key]:e.value.element})}const Br=nw(),zr=Br()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:({cssVars:e})=>A`
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
                ${W("click",n=>{(!e.router||hw(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new El(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function HM(e,t){return e.entry.entryType===Ot.Root?!1:e.entry.entryType===Ot.Page||T.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:T.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const Bi=Br()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>A`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${ke["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${ke["element-book-nav-hover-background-color"].value};
            color: ${ke["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${ke["element-book-nav-active-background-color"].value};
            color: ${ke["element-book-nav-active-foreground-color"].value};
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
            background-color: ${ke["element-book-nav-selected-background-color"].value};
            color: ${ke["element-book-nav-selected-foreground-color"].value};
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
            color: ${ke["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!HM(r,e.selectedPath))return;const n=A`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return g`
                <li style=${n}>
                    <${zr.assign({router:e.router,route:{paths:[fr.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${sr({"title-row":!0,selected:e.selectedPath?T.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${gr(Xi(r,Ot.ElementExample),g`
                                    <${V.assign({icon:pw})}></${V}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${zr}>
                </li>
            `});return g`
            <${zr.assign({route:as,router:e.router})}>
                <slot name=${xn.NavHeader}>Book</slot>
            </${zr}>
            <ul>
                ${t}
            </ul>
        `}}),Fo=Br()({tagName:"book-error",styles:A`
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
            `)}}),qa=Br()({tagName:"book-page-controls",events:{controlValueChange:pt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>A`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${ke["element-book-page-foreground-faint-level-1-color"].value};
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

        ${V}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===Z.Hidden)return"";const s=JM(e.currentValues[n],o,a=>{const u=T.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...Object.fromEntries(Object.keys(e.config).map(l=>[l,e.currentValues[l]])),[n]:a}}))});return g`
                    <div class="control-wrapper">
                        ${gr(i===0,g`
                                <${V.assign({icon:wa})}
                                    class="options-icon"
                                ></${V}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${o.controlType===Z.Custom?g`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function JM(e,t,r){return zo(t,Z.Hidden)?"":zo(t,Z.Checkbox)?g`
            <input
                type="checkbox"
                ?checked=${e}
                ${W("input",n=>{const o=Qo(n,HTMLInputElement);r(o.checked)})}
            />
        `:zo(t,Z.Color)?g`
            <input
                type="color"
                .value=${e}
                ${W("input",n=>{const o=Qo(n,HTMLInputElement);r(o.value)})}
            />
        `:zo(t,Z.Text)?g`
            <${ct.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${W(ct.events.valueChange,n=>{r(n.detail)})}
            ></${ct}>
        `:zo(t,Z.Number)?g`
            <input
                type="number"
                .value=${e}
                ${W("input",n=>{const o=Qo(n,HTMLInputElement);r(o.value)})}
            />
        `:zo(t,Z.Dropdown)?g`
            <select
                .value=${e}
                ${W("input",n=>{const o=Qo(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>g`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:zo(t,Z.Custom)?t.content:g`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const $p=Br()({tagName:"book-breadcrumbs",styles:A`
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
            `}}),pd=Br()({tagName:"book-breadcrumbs-bar",styles:A`
        :host {
            border-bottom: 1px solid
                ${ke["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${ke["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return g`
            ${gr(!!e.currentSearch,g`
                    &nbsp;
                `,g`
                    <${$p.assign({currentRoute:e.currentRoute,router:e.router})}></${$p}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${W("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const o=n.value;await oi({milliseconds:200}),n.value===o&&(n.value?t(new El({paths:[fr.Search,encodeURIComponent(n.value)]})):t(new El(as)))})}
            />
        `}}),kp=Br()({tagName:"book-entry-description",styles:A`
        :host {
            color: ${ke["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${ke["element-book-page-foreground-color"].value};
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
            `)}}),Dp=Br()({tagName:"book-page-wrapper",styles:A`
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
              `,r=[fr.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?Cb(e.pageNode.entry.errors):void 0;n&&console.error(n);const o=e.blockNavigation?t:g`
                  <${zr.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${zr}>
              `;return g`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${o}
                    ${n?g`
                              <${Fo.assign({message:n.message})}></${Fo}>
                          `:g`
                              <${kp.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${kp}>
                              <${qa.assign({config:e.pageNode.entry.controls,currentValues:Wf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${qa}>
                          `}
                </div>
            </div>
        `}}),Ru=Br()({tagName:"book-element-example-title",styles:A`
        :host {
            display: flex;
            color: ${ke["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const t=[fr.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return g`
            <${zr.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${zr}>
        `}}),xp=Symbol("unset-internal-state"),Ap=Br()({tagName:"book-element-example-viewer",state(){return{isUnset:xp}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Cb(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===xp&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return g`
                ${gr(!!t.elementExampleNode.entry.styles,g`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",St(n)),console.error(n),g`
                <${Fo.assign({message:`${t.elementExampleNode.entry.title} failed: ${St(n)}`})}></${Fo}>
            `}},options:{allowPolymorphicState:!0}}),Ep=Br()({tagName:"book-element-example-wrapper",styles:A`
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

        ${Ru} {
            color: ${ke["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ru} {
            color: ${ke["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return g`
            <div class="individual-example-wrapper">
                <${Ru.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${Ru}>
                <${Ap.assign(e)}></${Ap}>
            </div>
        `}}),YM={milliseconds:10};let la;const Sl=new Map,Ho=new Map;function XM(){return la||(la=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=Sl.get(r);if(n)if(t.isIntersecting){if(!Ho.has(r)){const o=globalThis.setTimeout(()=>{Ho.delete(r),n(),la?.unobserve(r),Sl.delete(r)},is(YM,{milliseconds:!0}).milliseconds);Ho.set(r,o)}}else{const o=Ho.get(r);o&&(clearTimeout(o),Ho.delete(r))}}},{rootMargin:"100px"})),la}function Cp(e){const t=Ho.get(e);t&&(clearTimeout(t),Ho.delete(e)),Sl.delete(e),la?.unobserve(e)}const Lu=Br()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:A`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&Cp(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:g`
            <div
                class="placeholder"
                ${li(n=>{t.placeholderElement&&Cp(t.placeholderElement),r({placeholderElement:n}),Sl.set(n,()=>{r({hasRendered:!0})}),XM().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function Rw(e,t,r,n){const o=_d(r,n),i=[];if(o){const s=Rw(e,t,o,n);s&&i.push(s)}if(Xi(r,Ot.Page)&&!e.includes(r)){const s=Wf(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:s,breadcrumbs:Kt(s,()=>r.fullUrlBreadcrumbs)})}return i.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function QM({blockNavigation:e,currentNodes:t,isTopLevel:r,router:n,isSearching:o,controls:i,originalTree:s}){if(!t.length&&o)return[g`
                No results
            `];const a=T.isLengthAtLeast(t,1)?Rw(t,i,t[0],s):void 0,u=a&&Object.values(a.config).length&&T.isLengthAtLeast(t,1)?g`
                  <${qa.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${qa}>
              `:Q,l=Q9(t,c=>c.fullUrlBreadcrumbs.join(">"),c=>{if(Xi(c,Ot.Page))return g`
                    <${Dp.assign({blockNavigation:e,isTopLevel:r,pageNode:c,controls:i,router:n})}
                        class="block-entry"
                    ></${Dp}>
                `;if(Xi(c,Ot.ElementExample)){const d=Wf(i,c.fullUrlBreadcrumbs.slice(0,-1)),f=g`
                    <${Ep.assign({blockNavigation:e,elementExampleNode:c,currentPageControls:d,router:n})}></${Ep}>
                `;return g`
                    <${Lu.assign({content:f})}
                        class="inline-entry ${sr({"block-entry":c.entry.isVertical})}"
                    ></${Lu}>
                `}else{if(Xi(c,Ot.Root))return Q;{const d=g`
                    <${Fo.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}></${Fo}>
                `;return g`
                    <${Lu.assign({content:d})}
                        class="block-entry"
                    ></${Lu}>
                `}}});return[u,l]}const Ri=Br()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:A`
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

        ${pd} {
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
    `,events:{loadingRender:pt()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=jb(e.currentRoute.paths),s=QM({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return g`
            <${pd.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${pd}>

            ${gr(e.showLoading,g`
                    <div
                        ${li(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${V.assign({icon:ci})}></${V}>
                    </div>
                    ${gr(!!n.lastElement,g`
                            ${n.lastElement}
                            <slot name=${xn.Footer}></slot>
                        `)}
                `,g`
                    <div
                        ${li(a=>{o({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${xn.Footer}></slot>
                `)}
        `}});function eP(e,t,r){const n=Fp(e,t);return n.length?n:(r(as),Fp(e,as.paths))}function Fp(e,t){return e.filter(r=>Zk({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const yd=Ai()({tagName:"element-book-app",state(){return{currentRoute:as,router:void 0,loading:!0,colors:{config:void 0,theme:ip(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:pt()},styles:A`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${ke["element-book-page-background-color"].value};
            color: ${ke["element-book-page-foreground-color"].value};
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

        ${Ri} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${Bi} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const d=s(c);return!T.jsonEquals(e.currentRoute,d)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(T.isTruthy).join(" - "))}function l(c){if(!a(c))return;const d=s(c);e.router?e.router.setRoute(d):n({currentRoute:{...e.currentRoute,...d}}),t.elementBookRoutePaths&&!T.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(d.paths))}try{if(t.elementBookRoutePaths&&!T.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const D=jT(t.internalRouterConfig.basePath);n({router:D}),D.listen(!0,E=>{n({currentRoute:E})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!T.jsonEquals(c,e.colors.config)){const D=ip(c);n({colors:{config:c,theme:D}}),SD(r,D)}const d=t._debug??!1,f=eD({entries:t.pages,debug:d});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Lb(f.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=jb(e.currentRoute.paths),$=(m?CT({flattenedNodes:f.flattenedNodes,searchQuery:m}):void 0)??eP(f.flattenedNodes,e.currentRoute.paths,l);u($[0]?.entry.title);const k=e.treeBasedControls?.controls;return k?(t._debug&&console.info({currentControls:k}),g`
                <div
                    class="root"
                    ${W(El,D=>{const E=D.detail;if(!a(E))return;if(n({loading:!0}),l(E),!(r.shadowRoot.querySelector(Bi.tagName)instanceof Bi))throw new TypeError(`Failed to find child '${Bi.tagName}'`)})}
                    ${W(qa.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const E=rD(k,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:E}})})}
                >
                    ${t.blockNavigation?Q:g`
                              <${Bi.assign({flattenedNodes:f.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot
                                      name=${xn.NavHeader}
                                      slot=${xn.NavHeader}
                                  ></slot>
                              </${Bi}>
                          `}
                    <${Ri.assign({blockNavigation:!!t.blockNavigation,controls:k,currentNodes:$,currentRoute:e.currentRoute,debug:d,originalTree:f.tree,router:e.router,showLoading:e.loading})}
                        ${W(Ri.events.loadingRender,async D=>{await sp();const E=r.shadowRoot.querySelector(Ri.tagName);E?E.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ri.tagName}' for scrolling.`),await sp(),n({loading:!D.detail})})}
                    >
                        <slot
                            name=${xn.Footer}
                            slot=${xn.Footer}
                        ></slot>
                    </${Ri}>
                </div>
            `):g`
                    <${Fo.assign({message:"Failed to generate page controls."})}></${Fo}>
                `}catch(c){return console.error(c),g`
                <p class="error">${St(c)}</p>
            `}}});function Sp(e){if(typeof e=="string")return tP(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let t=[0,0,0,0,!1,"unknown"];return t[0]=e.r?e.r:e.red?e.red:!1,t[1]=e.g?e.g:e.green?e.green:!1,t[2]=e.b?e.b:e.blue?e.blue:!1,t[3]=e.a?e.a:e.alpha?e.alpha:1,t[4]=!!(t[0]&&t[1]&&t[2]),t[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",t}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}function tP(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let t=!1,n=[0,0,0,0,t,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let a in s)if(e==a){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:function(c){for(let d=0;d<3;d++)n[d]=parseInt(c[d+1],16);return n[3]=1,!0}},l=u.rex.exec(s[a]);return n[4]=t=u.sprig(l),n}}let o={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:function(s){let a=0,u=0,l=10,c=100,d=2.55,f="1";s[23]&&(f=s[23],delete s[23]),n[3]=f.match(/%/g)?parseFloat(f)/c:parseFloat(f);for(let m=1;m<s.length;m++)s[m]&&(a=a||m,u=m);switch(u){case 4:l=16,c=15,n[3]=parseInt(s[u],l)/c;case 3:l=16;for(let m=0;m<3;m++)n[m]=parseInt(s[a+m]+s[a+m],l);break;case 5:l=16;case 9:n[0]=n[1]=n[2]=l==10?parseFloat(s[u]):parseInt(s[u],l);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[u])*d;break;case 8:l=16,c=255,n[3]=parseInt(s[8],l)/c;case 7:l=16;case 11:for(let m=0;m<3;m++)n[m]=l==10?parseFloat(s[a+m]):parseInt(s[a+m],l);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(s[a+m])*d;break;case 18:n[5]=s[15];for(let m=0;m<3;m++)a++,n[m]=s[a].match(/%/g)?parseFloat(s[a])*2.55:parseFloat(s[a])*255;break;case 22:n[5]=s[a];for(let m=0;m<3;m++)a++,n[m]=s[a]?s[a].match(/%/g)?parseFloat(s[a])/c:parseFloat(s[a]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let P=function(O){let z=(O+E/30)%12,ie=m*Math.min(v,1-v);return v-ie*Math.max(-1,Math.min(z-3,9-z,1))},m,v,$,k,D,E=n[0]%360;if(E<0&&(E+=360),n[5].match(/^hsla?/i))m=n[1],v=n[2],$=0,D=1;else if(n[5].match(/^hwba?/i)){if($=n[1],k=n[2],$+k>=1){n[0]=n[1]=n[2]=$/($+k),n[5]="sRGB";break}m=1,v=.5,D=1-$-k}n[0]=Math.round(255*(P(0)*D+$)),n[1]=Math.round(255*(P(8)*D+$)),n[2]=Math.round(255*(P(4)*D+$)),n[5]="sRGB"}break}return!0}},i=o.rex.exec(e);return i?(n[4]=t=o.parsley(i),n):(t=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,t,"parsleyError"])}const lt={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function rP(e,t,r=-1){const n=[0,1.1];if(isNaN(e)||isNaN(t)||Math.min(e,t)<n[0]||Math.max(e,t)>n[1])return 0;let o=0,i=0,s="BoW";return e=e>lt.blkThrs?e:e+Math.pow(lt.blkThrs-e,lt.blkClmp),t=t>lt.blkThrs?t:t+Math.pow(lt.blkThrs-t,lt.blkClmp),Math.abs(t-e)<lt.deltaYmin?0:(t>e?(o=(Math.pow(t,lt.normBG)-Math.pow(e,lt.normTXT))*lt.scaleBoW,i=o<lt.loClip?0:o-lt.loBoWoffset):(s="WoB",o=(Math.pow(t,lt.revBG)-Math.pow(e,lt.revTXT))*lt.scaleWoB,i=o>-.1?0:o+lt.loWoBoffset),r<0?i*100:r==0?Math.round(Math.abs(i)*100)+"<sub>"+s+"</sub>":Number.isInteger(r)?(i*100).toFixed(r):0)}function nP(e,t,r=-1,n=!0){let o=Sp(t),i=Sp(e);return!(i[3]==""||i[3]==1)&&(i=iP(i,o,n)),rP(Tp(i),Tp(o),r)}function oP(e,t=2){const r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],i=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(t),0,0,0,0,0,0,0,0,0];s.length;let a=777;e=Math.abs(e);const u=.2,l=e==0?1:e*u|0;let c=0,d=(e-r[l][c])*u;for(c++;c<i;c++)a=r[l][c],a>400?s[c]=a:e<14.5?s[c]=999:e<29.5?s[c]=777:a>24?s[c]=Math.round(a-n[l][c]*d):s[c]=a-(2*n[l][c]*d|0)*.5;return s}function Tp(e=[0,0,0]){function t(r){return Math.pow(r/255,lt.mainTRC)}return lt.sRco*t(e[0])+lt.sGco*t(e[1])+lt.sBco*t(e[2])}function iP(e=[0,0,0,1],t=[0,0,0],r=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],o=[0,0,0,1,!0];for(let i=0;i<3;i++)o[i]=t[i]*n+e[i]*e[3],r&&(o[i]=Math.min(Math.round(o[i]),255));return o}const Lw={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};Kt(Lw,e=>e);Object.fromEntries(Object.entries(Lw).map(([e,t])=>[t,e]));function sP({background:e,foreground:t}){const r=Rk(Number(nP(t,e)),{digits:1});return{contrast:r,fontSizes:aP(r),contrastLevel:uP(r)}}function aP(e){const t=oP(e).slice(1);return Rl(t,(n,o)=>({key:(o+1)*100,value:n}))}function uP(e){return Fn.isDefined(wc.find(t=>t.min<=Math.abs(e)))}var Be;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(Be||(Be={}));const lP={[Be.SmallBodyText]:"Small Text",[Be.BodyText]:"Body Text",[Be.NonBodyText]:"Non-body Text",[Be.Header]:"Header",[Be.Placeholder]:"Placeholder",[Be.Decoration]:"Decoration",[Be.Invisible]:"Invisible"};Be.SmallBodyText,Be.BodyText,Be.NonBodyText,Be.Header,Be.Placeholder,Be.Decoration,Be.Invisible;const wc=[{min:90,name:Be.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:Be.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:Be.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:Be.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:Be.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:Be.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:Be.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];Rl(wc,e=>({key:e.min,value:e}));Rl(wc,e=>({key:e.name,value:e}));const bd=Ai()({tagName:"vir-contrast-indicator",styles:A`
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

        .${Je(Be.Invisible)} {
            color: red;
        }
        .${Je(Be.Decoration)} {
            color: #ff6600;
        }
        .${Je(Be.Placeholder)} {
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
    `,render({inputs:e}){const t=wc.toReversed().slice(1).map(o=>g`
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
                        ${lP[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),Mp=Ai()({tagName:"theme-vir-color-example",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"theme-vir-color-example-no-contrast-tips":({inputs:e,state:t})=>!e.showContrast&&!t.forceShowEverything},styles:({hostClasses:e})=>A`
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

        ${bd} {
            margin-top: 1px;
        }
    `,render({state:e,updateState:t,inputs:r}){const n=["foreground","background"].map(a=>{const u=[r.color[a].name,r.showVarValues||e.forceShowEverything?":":""].filter(T.isTruthy).join(""),l=r.showVarValues||e.forceShowEverything?g`
                          <span>${r.color[a].default}</span>
                      `:Q;return g`
                <p>
                    <span>${u}</span>
                    ${l}
                </p>
            `}),o=r.showVarNames||e.forceShowEverything?g`
                      <div class="css-var-names">${n}</div>
                  `:Q,i=e.previewElement?sP({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,s=i&&(r.showContrast||e.forceShowEverything)?g`
                      <${bd.assign({contrast:i,fontWeight:r.fontWeight})}></${bd}>
                  `:Q;return g`
            <button
                ${W("click",()=>{t({forceShowEverything:!e.forceShowEverything})})}
                ${li(a=>{t({previewElement:Fn.instanceOf(a,HTMLElement)})})}
                class="color-preview"
                style=${A`
                    color: ${Je(r.color.foreground.default)};
                    background: ${Je(r.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${A`
                                visibility: ${Je((i?.fontSizes[400]||1/0)>150?"hidden":"visible")};
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
        `}});function cP(e,t){const r=t?.paletteVarName,n=jw(e.init.default,1,void 0,r),o=mP(e.init.colors,1,e.init.default,r),i=`export const theme = defineColorTheme(
${n},
${o},
);`,s=(t?.overrides||[]).map(a=>dP(a,r));return[i,...s].join(`

`)}function dP(e,t){const r=[],n=[];bo(e.asTheme.init.default.foreground,e.originalTheme.init.default.foreground)||n.push(`${ve(3)}foreground: ${Ki(e.asTheme.init.default.foreground,3,t)},`),bo(e.asTheme.init.default.background,e.originalTheme.init.default.background)||n.push(`${ve(3)}background: ${Ki(e.asTheme.init.default.background,3,t)},`),n.length>0&&r.push(`${ve(2)}defaultOverride: {
${n.join(`
`)}
${ve(2)}},`);const o=[];return Xn(e.asTheme.init.colors).forEach(([i,s])=>{const a=e.originalTheme.init.colors[i];if(!a)return;const u=[];"foreground"in s&&(!("foreground"in a)||!bo(s.foreground,a.foreground))&&u.push(`${ve(4)}foreground: ${Ki(s.foreground,4,t)},`),"background"in s&&(!("background"in a)||!bo(s.background,a.background))&&u.push(`${ve(4)}background: ${Ki(s.background,4,t)},`),u.length>0&&o.push(`${ve(3)}'${i}': {
${u.join(`
`)}
${ve(3)}},`)}),o.length>0&&r.push(`${ve(2)}colorOverrides: {
${o.join(`
`)}
${ve(2)}},`),`export const ${e.name}Override = defineColorThemeOverride(
${ve(1)}theme,
${ve(1)}'${e.name}',
${ve(1)}{
${r.join(`
`)}
${ve(1)}},
);`}function ve(e){return"    ".repeat(e)}function bo(e,t){if(typeof e!=typeof t)return!1;const r=T.isString(e)||e instanceof Cn?String(e):JSON.stringify(e),n=T.isString(t)||t instanceof Cn?String(t):JSON.stringify(t);return r===n}function fP(e){const t=e.match(/^var\(--([^,)]+)/);return t?t[1]:void 0}function Ki(e,t,r){if(typeof e=="string")return`'${e}'`;if(typeof e=="number")return String(e);if(e instanceof Cn){const n=String(e);{const o=fP(n);if(o)return`${r}['${o}']`}return`css\`${n}\``}else if("refBackground"in e||"refForeground"in e||"refDefaultBackground"in e||"refDefaultForeground"in e){const n=[];return"refForeground"in e&&n.push(`${ve(t+1)}refForeground: '${e.refForeground}',`),"refBackground"in e&&n.push(`${ve(t+1)}refBackground: '${e.refBackground}',`),"refDefaultForeground"in e&&n.push(`${ve(t+1)}refDefaultForeground: true,`),"refDefaultBackground"in e&&n.push(`${ve(t+1)}refDefaultBackground: true,`),`{
${n.join(`
`)}
${ve(t)}}`}else return`'${e.default}'`}function jw(e,t,r,n){const o=[];return"foreground"in e&&(!r||!bo(e.foreground,r.foreground))&&(r&&bo(e.foreground,r.background)?o.push(`${ve(t+1)}foreground: {
${ve(t+2)}refDefaultBackground: true,
${ve(t+1)}},`):o.push(`${ve(t+1)}foreground: ${Ki(e.foreground,t+1,n)},`)),"background"in e&&(!r||!bo(e.background,r.background))&&(r&&bo(e.background,r.foreground)?o.push(`${ve(t+1)}background: {
${ve(t+2)}refDefaultForeground: true,
${ve(t+1)}},`):o.push(`${ve(t+1)}background: ${Ki(e.background,t+1,n)},`)),`${ve(t)}{
${o.join(`
`)}
${ve(t)}}`}function mP(e,t,r,n){const o=Xn(e).map(([i,s])=>`${ve(t+1)}'${i}': ${jw(s,t+1,r,n).trimStart()},`);return`${ve(t)}{
${o.join(`
`)}
${ve(t)}}`}const ju="None";function hP({parent:e,title:t,theme:r,hideInverseColors:n,overrides:o,useVerticalLayout:i,prefixGroupByCount:s=2,hideCopyCode:a}){const u={"Show Var Names":{controlType:Z.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:Z.Checkbox,initValue:!0}},l={"Theme Override":{controlType:Z.Dropdown,initValue:ju,options:[ju,...(o||[]).map(k=>{if(k.name===ju)throw new Error(`Cannot have theme override named '${ju}'`);return k.name})]}},c=Ce({parent:e,title:t,controls:u});function d({controls:k,theme:D,themeColorName:E}){const P=T.isKeyOf(E,D.colors)?D.colors[E]:void 0,O=T.isKeyOf(E,D.inverse)?D.inverse[E]:void 0;if(!P||!O)throw new Error(`No theme color found by name '${E}'`);const z=g`
            <${Mp.assign({color:P,showVarValues:!0,showVarNames:k["Show Var Names"],showContrast:k["Show Contrast Tips"],fontWeight:400})}></${Mp}>
        `;return g`
            <div class="with-inverse">${z}${Q}</div>
        `}function f(k,D,E){const P=gk(Object.keys(D.colors),O=>s?O.split("-").slice(0,s).join("-"):O);Object.entries(P).forEach(([O,z])=>{z&&k({title:O,styles:A`
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
                    `,render({controls:ie}){const Me="Theme Override"in ie&&ie["Theme Override"]&&E?.find(pe=>pe.name===ie["Theme Override"])||void 0;return z.map(pe=>d({controls:ie,theme:Me?.asTheme||D,themeColorName:pe}))}})})}const m=["Click a color preview to show CSS var names and values."],v=Ce({parent:c,title:"Default",descriptionParagraphs:m,useVerticalExamples:i,controls:{...a?{}:{copy:{controlType:Z.Custom,content:g`
                              <button
                                  ${W("click",async()=>{const k=cP(r,{paletteVarName:"viraColorPalette",overrides:o});await navigator.clipboard.writeText(k)})}
                              >
                                  Copy Code
                              </button>
                          `}},...l},defineExamples({defineExample:k}){f(k,r,o)}}),$=(o||[]).map(k=>Ce({parent:c,title:k.name,useVerticalExamples:i,descriptionParagraphs:m,defineExamples({defineExample:D}){f(D,k.asTheme,void 0)}}));return[c,v,...$]}const nt=Ce({title:"Elements",parent:void 0}),ph=Ce({title:"Styles",parent:void 0}),Uw=Ce({title:"Util",parent:void 0}),gP=Ce({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:Z.Color,initValue:""},"Fill Color":{controlType:Z.Color,initValue:""},"Stroke Width":{controlType:Z.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(pf).forEach(t=>{e({title:t.name,styles:A`
                    :host(:hover) ${V} {
                        background-color: #f2f2f2;
                    }

                    ${V} {
                        padding: 8px;
                        border-radius: ${Gr["vira-form-input-radius"].value};
                    }
                `,render({controls:r}){const n=A`
                        ${w["vira-icon-fill-color"].name}: ${Je(r["Fill Color"]||"inherit")};
                        ${w["vira-icon-stroke-color"].name}: ${Je(r["Stroke Color"]||"inherit")};
                        ${w["vira-icon-stroke-width"].name}: ${Je(r["Stroke Width"]?Ca(r["Stroke Width"]):"inherit")};
                    `;return g`
                        <${V.assign({icon:t})} style=${n}></${V}>
                    `}})})}}),pP=hP({parent:ph,theme:kw,title:"Vira Theme",hideInverseColors:!0,overrides:[bM]}),_w={async element1(){return await oi({seconds:2}),(await sl(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-CtmhGr8b.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await oi({seconds:2}),(await sl(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-DoaQDn_M.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},Pp=Ai()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:Ow(_w)}},render({state:e,inputs:t}){return Bw(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(r){return g`
                    <${ni}>
                        ${fi("Failed to import element",St(r))}
                    </${ni}>
                `},loading(){return g`
                    <${V.assign({icon:ci})}></${V}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Wt.never("The error element will always error")}})}}),Np=Ai()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:Ow(_w)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),Bw(e.dynamicElements,{error(r){return g`
                    <${ni}>
                        ${fi("Failed to import element",St(r))}
                    </${ni}>
                `},loading(){return g`
                    <${V.assign({icon:ci})}></${V}>
                `},ready(r){if(r.element1)return g`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return g`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Wt.never("The error element will always error")}})}}),Ip=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],yP=Ce({parent:Uw,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:A`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${st.assign({value:String(t.value),options:Ip})}
                        ${W(st.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${st}>
                    <${Pp.assign({numberValue:t.value})}></${Pp}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:A`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${st.assign({value:String(t.value),options:Ip})}
                        ${W(st.events.valueChange,n=>{const o=Number(n.detail);if(o!==1&&o!==2&&o!==3)throw new Error(`Invalid selection: ${o}`);r({value:o})})}
                    ></${st}>
                    <${Np.assign({numberValue:t.value})}></${Np}>
                `}})}}),bP=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:g`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:A`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:A`
            ${kr} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],vP=Ce({title:kr.tagName,parent:nt,controls:{Selected:{controlType:Z.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:Z.Text,initValue:""}},defineExamples({defineExample:e}){bP.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?g`
                            <${kr.assign(n)}>
                                ${t.customTemplate}
                            </${kr}>
                        `:g`
                            <${kr.assign(n)}></${kr}>
                        `}})})}}),$f=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new dh({sanitizeRoute(e){return e}})}}],wP=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:gh.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...$f,{id:"long",label:g`
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
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:ko.Both,items:[...$f,{id:"long",label:g`
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
                    `}]}}],$P=Ce({parent:nt,title:yo.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){wP.forEach(t=>{e({title:t.title,styles:A`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${yo.assign({items:$f,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${yo}>
                    `}})})}}),Vw=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],kP=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...Vw,{id:4,label:"link here",route:{route:{paths:["test"]},router:new dh({sanitizeRoute(e){return e}})}}]}}],DP=Ce({parent:nt,title:$a.tagName,defineExamples({defineExample:e}){kP.forEach(t=>{e({title:t.title,render(){return g`
                        <${$a.assign({isMultiSelect:!1,navController:void 0,items:Vw,selected:[],...t.inputs})}></${$a}>
                    `}})})}}),zw=[];_r(Fl).forEach(e=>{_r(gh).forEach(t=>{zw.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const xP=Ce({parent:nt,title:ka.tagName,defineExamples({defineExample:e}){zw.forEach(t=>{e({title:t.title,styles:A`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return g`
                        <${ka.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${ka}>
                    `}})})}}),AP=Ce({parent:nt,title:ye.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:A`
                ${ye} {
                    ${ks["vira-focus-outline-border-radius"].name}: 0;
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
                    <${ye.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${ye.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${ye.slotNames.popUp}>Pop up!</div>
                    </${ye}>
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
                    <${ye.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${ye.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${ye.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ye}>
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
                    <${ye.assign({keepOpenAfterInteraction:!0,horizontalAnchor:ko.Right})}>
                        <div slot=${ye.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ye.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ye}>
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
                    <${ye.assign({keepOpenAfterInteraction:!0,horizontalAnchor:ko.Left})}>
                        <div slot=${ye.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ye.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ye}>
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
                    <${ye.assign({keepOpenAfterInteraction:!0,horizontalAnchor:ko.Right})}>
                        <div slot=${ye.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ye.slotNames.popUp}>not long</div>
                    </${ye}>
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
                        <${ye.assign({keepOpenAfterInteraction:!0})}>
                            <div class="trigger" slot=${ye.slotNames.trigger}>
                                Trigger
                            </div>
                            <div class="pop-up" slot=${ye.slotNames.popUp}>
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
                        </${ye}>
                    </div>
                `}})}}),EP=[{title:"menu shadow",styles:rs.menuShadow},{title:"menu shadow reversed",styles:rs.menuShadowReversed},{title:"modal",styles:rs.modal}],CP=Ce({parent:ph,title:"Shadows",defineExamples({defineExample:e}){EP.forEach(t=>{e({title:t.title,styles:A`
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
                    `}})})}}),FP=Ce({parent:nt,title:Qe.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:Z.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return g`
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
                `}})}}),SP=Ce({parent:nt,title:ge.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:Z.Color,initValue:ge.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:Z.Color,initValue:ge.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:Z.Color,initValue:ge.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:Z.Color,initValue:ge.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:o}){const i=n??A``;e({title:r,styles:i,render({controls:s}){const a=A`
                        ${ge.cssVars["vira-button-primary-color"].name}: ${Je(s["Primary color"]||"inherit")};
                        ${ge.cssVars["vira-button-secondary-color"].name}: ${Je(s["Secondary color"]||"inherit")};
                        ${ge.cssVars["vira-button-primary-hover-color"].name}: ${Je(s["Hover color"]||"inherit")};
                        ${ge.cssVars["vira-button-primary-active-color"].name}: ${Je(s["Active color"]||"inherit")};
                    `;return g`
                        <${ge.assign({text:"hello",...o})}
                            style=${a}
                        ></${ge}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:wa}}),t({title:"with expanding icon",inputs:{icon:wa,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:Wi.Outline}}),t({title:"only icon",inputs:{icon:wa,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:A`
                ${ge} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:A`
                ${ge} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:A`
                :host {
                    ${ge.cssVars["vira-button-primary-color"].name}: pink;
                    ${ge.cssVars["vira-button-secondary-color"].name}: purple;
                    ${ge.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${ge.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return g`
                    <${ge.assign({text:"hello"})}></${ge}>
                `}})}}),TP=[{title:"basic"},{title:"success",inputs:{cardState:wf.Success}},{title:"error",inputs:{cardState:wf.Error}},{title:"long",content:g`
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
        `}],MP=Ce({parent:nt,title:md.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){TP.forEach(t=>{e({title:t.title,render(){return g`
                        <${md.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${md}>
                    `}})})}}),PP=Ce({parent:nt,title:$e.tagName,controls:{Checked:{controlType:Z.Checkbox,initValue:!1},Disabled:{controlType:Z.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${$e.assign({value:t.checked})}
                        ${W($e.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${$e}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${$e.assign({value:t.checked})}
                        ${W($e.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${$e}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:r}){return g`
                    <${$e.assign({value:t.checked,hasError:!0})}
                        ${W($e.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${$e}>
                `}}),e({title:"disabled unchecked",render(){return g`
                    <${$e.assign({value:!1,disabled:!0})}></${$e}>
                `}}),e({title:"disabled checked",render(){return g`
                    <${$e.assign({value:!0,disabled:!0})}></${$e}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return g`
                    <${$e.assign({value:t.Checked,disabled:t.Disabled})}></${$e}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return g`
                    <${$e.assign({value:!0})}></${$e}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${$e.assign({value:t.checked,label:"label goes here"})}
                        ${W($e.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${$e}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:r}){return g`
                    <${$e.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${W($e.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${$e}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:A`
                ${$e} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:r}){return g`
                    <${$e.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${W($e.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${$e}>
                `}})}}),NP=Ce({title:On.tagName,parent:nt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:A`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>g`
                        <${On.assign({expanded:!!r.expandedStates[o]})}
                            ${W(On.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${On.slotNames.header}
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
                        </${On}>
                    `)}}),e({title:"wider examples",styles:A`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,o)=>g`
                        <${On.assign({expanded:!!r.expandedStates[o]})}
                            ${W(On.events.expandChange,i=>{const s=[...r.expandedStates];s[o]=i.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${On.slotNames.header}
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
                        </${On}>
                    `)}})}}),Da=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],IP=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Da,{id:42,label:g`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Da,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:A`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:A`
            ${ua} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Kr}}],OP=Ce({title:ua.tagName,parent:nt,controls:{Selected:{controlType:Z.Dropdown,initValue:"",options:["",...Da.map(e=>e.label)]},Prefix:{controlType:Z.Text,initValue:""},"Force State":{controlType:Z.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:Z.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:Z.Dropdown,initValue:"",options:["",...Object.keys(pf)]},Disabled:{controlType:Z.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:Z.Text,initValue:"Select something"}},defineExamples({defineExample:e}){IP.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:o}){const i={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:o.Placeholder,options:t.inputs?.options||Da,selected:o.Selected?[Da.find(s=>s.label===o.Selected)?.id].filter(T.isTruthy):r.selected,selectionPrefix:o.Prefix||t.inputs?.selectionPrefix,isDisabled:o.Disabled?o.Disabled==="all":t.inputs?.isDisabled,icon:o.Icon?pf[o.Icon]:t.inputs?.icon,isMultiSelect:o["Multi Select"]?o["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:o["Force State"]?o["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return g`
                        <${ua.assign(i)}
                            ${W(ua.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${ua}>
                    `}})})}}),BP=Ce({parent:nt,title:ni.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${ni}>Error Content</${ni}>
                `}})}}),vd=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],RP=Ce({parent:nt,title:lr.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:be.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:be.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:be.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:be.Email,label:"Email Address",value:t.email},password:{type:be.NewPassword,label:"Password",value:t.password},userRole:{type:be.Select,label:"Role",options:vd,value:t.userRole,placeholder:"placeholder"},disabledField:{type:be.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:be.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return g`
                    <${lr.assign({fields:n})}
                        ${W(lr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ge.assign({text:"Cancel",buttonStyle:Wi.Outline})}></${ge}>
                            <${ge.assign({text:"Submit"})}></${ge}>
                        </div>
                    </${lr}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:be.Text,label:"First Name",value:t.firstName},lastName:{type:be.Text,label:"Last Name",value:t.lastName}};return g`
                    <${lr.assign({fields:n})}
                        ${W(lr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <${ct.assign({value:"",label:"More stuff"})}></${ct}>
                        <div class="buttons">
                            <${ge.assign({text:"Cancel",buttonStyle:Wi.Outline})}></${ge}>
                            <${ge.assign({text:"Submit"})}></${ge}>
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
            `,render({state:t,updateState:r}){const n={firstName:{type:be.Text,label:"First Name",value:t.firstName},lastName:{type:be.Text,label:"Last Name",value:t.lastName},subscribe:{type:be.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:be.Email,label:"Email Address",value:t.email},password:{type:be.NewPassword,label:"Password",value:t.password},userRole:{type:be.Select,label:"Role",options:vd,value:t.userRole}};return g`
                    <${lr.assign({fields:n})}
                        ${W(lr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ge.assign({text:"Cancel",buttonStyle:Wi.Outline})}></${ge}>
                            <${ge.assign({text:"Submit"})}></${ge}>
                        </div>
                    </${lr}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:A`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:be.Text,label:"First Name",value:t.firstName},lastName:{type:be.Text,label:"Last Name",value:t.lastName},subscribe:{type:be.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:be.Email,label:"Email Address",value:t.email},password:{type:be.NewPassword,label:"Password",value:t.password},userRole:{type:be.Select,label:"Role",options:vd,value:t.userRole}};return g`
                    <${lr.assign({fields:n,isDisabled:!0})}
                        ${W(lr.events.valueChange,o=>{r({...t,[o.detail.key]:o.detail.value})})}
                    >
                        <div class="buttons">
                            <${ge.assign({text:"Cancel",buttonStyle:Wi.Outline})}></${ge}>
                            <${ge.assign({text:"Submit"})}></${ge}>
                        </div>
                    </${lr}>
                `}})}}),LP=Ce({title:V.tagName,parent:nt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return g`
                    <${V.assign({icon:Kr})}></${V}>
                `}}),e({title:"using createColoredIcon",render(){return g`
                    <${V.assign({icon:mp(Kr,{"vira-icon-stroke-color":"red"})})}></${V}>
                `}}),e({title:"fit container",styles:A`
                ${V} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return g`
                    <${V.assign({icon:mp(Kr,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${V}>
                `}})}}),jP=Ce({title:lo.tagName,parent:nt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:A`
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
                        <${V.assign({icon:ci,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
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
                        <${V.assign({icon:Cl,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
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
                        <${V.assign({icon:ci,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
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
                        <${V.assign({icon:Cl,fitContainer:!0})}
                            style=${A`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
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
                            ${W("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${ti()}`})})}
                        >
                            ${r.loadingSlot?g`
                                      <div class="slot-wrapper" slot=${lo.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:Q}${r.errorSlot?g`
                                      <div class="slot-wrapper" slot=${lo.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:Q}
                        </${lo}>
                    `}})})}}),UP=Ce({title:ct.tagName,parent:nt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:Z.Color,initValue:re["vira-form-foreground-color"].default},"Placeholder color":{controlType:Z.Color,initValue:re["vira-form-placeholder-color"].default},"Border color":{controlType:Z.Color,initValue:re["vira-form-border-color"].default},"Focus color":{controlType:Z.Color,initValue:ks["vira-focus-outline-color"].default},"Selection color":{controlType:Z.Color,initValue:re["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:o,inputs:i}){e({title:o,styles:A`
                    ${n||A``}
                `,state(){return{value:i.value}},render({state:s,updateState:a,controls:u}){const l={[String(re["vira-form-foreground-color"].name)]:u["Text color"],[String(re["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(re["vira-form-border-color"].name)]:u["Border color"],[String(ks["vira-focus-outline-color"].name)]:u["Focus color"],[String(re["vira-form-text-selection-color"].name)]:u["Selection color"]},c=Kt(l,(f,m)=>m||"inherit"),d=Object.entries(c).map(([f,m])=>[f,m].join(": ")+";").join(`
`);return g`
                        <${ct.assign({...i,value:s.value})}
                            style=${d}
                            ${W(ct.events.valueChange,f=>{a({value:f.detail}),console.info("changed:",f.detail)})}
                        ></${ct}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Kr}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:A`
                    ${ct} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Kr}},{title:"taller height",styles:A`
                    ${ct} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Kr}},{title:"shorter height",styles:A`
                    ${ct} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Kr}},{title:"max width",styles:A`
                    ${ct} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:A`
                    ${ct} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:ns.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:ns.Email,attributePassthrough:{autocomplete:"username"}}},{title:"centered",styles:A`
                    ${ct} {
                        text-align: center;
                    }
                `,inputs:{value:"Abc"}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:A`
                    ${ct} {
                        width: unset;
                    }
                `}].forEach(t)}}),_P=Ce({title:qi.tagName,parent:nt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:Z.Color,initValue:""},"Hover color":{controlType:Z.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:o}){const i=A`
                        ${qi.cssVars["vira-link-hover-color"].name}: ${Je(o["Hover color"]||"inherit")};
                        color: ${Je(o["CSS Color"]||"inherit")};
                    `;return g`
                        <${qi.assign(n)} style=${i}>My Link</${qi}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),VP=Ce({title:Bn.tagName,parent:nt,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:r}){return g`
                    <button
                        ${W("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Bn.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${W(Bn.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Bn}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:A`
                ${Bn} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${Bn.cssVars["vira-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:r}){return g`
                    <button
                        ${W("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${Bn.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${W(Bn.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${Bn}>
                `}})}}),ca=A`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,wd=g`
    <${En.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${En.slotNames.large}>Large</div>
        <div class="small" slot=${En.slotNames.small}>Small</div>
    </${En}>
`,Gi={max:120,min:25,default:80},Op=We()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":Ca(Gi.default)},state(){return{intervalId:void 0,increment:1}},styles:({cssVars:e})=>A`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,init({state:e,updateState:t,host:r,cssVars:n}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{const o=Ab.isNumber(Tk(ED({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||Gi.default;(o>=Gi.max||o<=Gi.min)&&t({increment:e.increment*-1}),Qf({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:Ca(o+e.increment)})},10)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render(){return g`
            <slot></slot>
        `}}),Bp=We()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":Ca(Gi.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:A`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${ca}

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
        `}}),zP=Ce({title:En.tagName,parent:nt,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:A`
                ${ca}
            `,render(){return wd}}),e({title:"overflowing",styles:A`
                ${ca}

                ${En} {
                    max-width: 50px;
                }
            `,render(){return wd}}),e({title:"dynamic size",styles:A`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${ca}

                .wrapper {
                    width: ${Gi.max+10}px;
                }
            `,render(){return g`
                    <div class="wrapper">
                        <${Op}>
                            ${wd}
                        </${Op}>
                    </div>
                `}}),e({title:"dynamic slot",styles:A`
                :host {
                    width: 200px;
                    height: 100px;
                }

                ${ca}
            `,render(){return g`
                    <${Bp}></${Bp}>
                `}})}}),qP=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:A`
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
        `,inputs:{value:100}}],WP=Ce({parent:nt,title:Qt.tagName,defineExamples({defineExample:e}){qP.forEach(t=>{e({title:t.title,styles:A`
                    ${t.styles||A``}
                `,render(){return g`
                        <${Qt.assign({value:50,...t.inputs})}></${Qt}>
                    `}})})}}),Et=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],KP=[{title:"basic",inputs:{options:Et}},{title:"with really long option",inputs:{options:[...Et,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:Et,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:Et,disabled:!0}},{title:"error",inputs:{options:Et,hasError:!0}},{title:"with icon",inputs:{options:Et,icon:Kr}},{title:"custom width",inputs:{options:Et},styles:A`
            ${st} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:Et,icon:Kr},styles:A`
            ${st} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:Et,icon:Kr},styles:A`
            ${st} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:Et,label:"Pick an option"}},{title:"with long label",inputs:{options:Et,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:Et,label:"Pick a really really really really long option"},styles:A`
            ${st} {
                width: unset;
            }
        `}],GP=Ce({parent:nt,title:st.tagName,defineExamples({defineExample:e}){KP.forEach(t=>{e({title:t.title,styles:A`
                    ${t.styles||A``}
                `,state(){return{selected:void 0}},render({state:r,updateState:n}){return g`
                        <${st.assign({...t.inputs,value:r.selected??t.inputs.value})}
                            ${W(st.events.valueChange,o=>{n({selected:o.detail})})}
                        ></${st}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return g`
                    <${st.assign({options:Et,value:Et[0]?.value})}></${st}>
                `}}),e({title:"force update",render(){return g`
                    <${Rp}></${Rp}>
                `}})}}),Rp=We()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const r=Et.findIndex(o=>o.value===t.value),n=Fn.isDefined(Et[(r+1)%Et.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return g`
            <${st.assign({options:Et,value:e.value})}></${st}>
        `}}),ZP=[nt,gP,ph,Uw],HP=[FP,SP,MP,PP,NP,OP,BP,RP,LP,jP,UP,_P,vP,DP,$P,VP,zP,xP,AP,WP,GP].sort((e,t)=>e.title.localeCompare(t.title)),JP=[...HP,yP,CP,...pP],YP=[...ZP,...JP];Ai()({tagName:"vira-book-app",styles:A`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${yd} {
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
            <${yd.assign({internalRouterConfig:{basePath:lh("vira"),useInternalRouter:!0},pages:YP,themeColor:"#33ccff"})}>
                <h1 slot=${xn.NavHeader}>Vira</h1>
            </${yd}>
        `}});export{Ai as d,g as h};
