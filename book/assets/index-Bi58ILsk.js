(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var St;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(St||(St={}));function Xd(e,t=r=>r){const r=new Map;return e.filter(n=>{const i=t(n);return r.get(i)?!1:(r.set(i,n),!0)})}class Qd{diff(t,r,n={}){let i;typeof n=="function"?(i=n,n={}):"callback"in n&&(i=n.callback);const o=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(o,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,u,n,i)}diffWithOptionsObj(t,r,n,i){var o;const s=S=>{if(S=this.postProcess(S,n),i){setTimeout(function(){i(S)},0);return}else return S},a=r.length,u=t.length;let l=1,c=a+u;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));const d=(o=n.timeout)!==null&&o!==void 0?o:1/0,f=Date.now()+d,m=[{oldPos:-1,lastComponent:void 0}];let $=this.extractCommon(m[0],r,t,0,n);if(m[0].oldPos+1>=u&&$+1>=a)return s(this.buildValues(m[0].lastComponent,r,t));let b=-1/0,F=1/0;const C=()=>{for(let S=Math.max(b,-l);S<=Math.min(F,l);S+=2){let I;const z=m[S-1],q=m[S+1];z&&(m[S-1]=void 0);let Ce=!1;if(q){const mt=q.oldPos-S;Ce=q&&0<=mt&&mt<a}const Ge=z&&z.oldPos+1<u;if(!Ce&&!Ge){m[S]=void 0;continue}if(!Ge||Ce&&z.oldPos<q.oldPos?I=this.addToPath(q,!0,!1,0,n):I=this.addToPath(z,!1,!0,1,n),$=this.extractCommon(I,r,t,S,n),I.oldPos+1>=u&&$+1>=a)return s(this.buildValues(I.lastComponent,r,t))||!0;m[S]=I,I.oldPos+1>=u&&(F=Math.min(F,S-1)),$+1>=a&&(b=Math.max(b,S+1))}l++};if(i)(function S(){setTimeout(function(){if(l>c||Date.now()>f)return i(void 0);C()||S()},0)})();else for(;l<=c&&Date.now()<=f;){const S=C();if(S)return S}}addToPath(t,r,n,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,i,o){const s=r.length,a=n.length;let u=t.oldPos,l=u-i,c=0;for(;l+1<s&&u+1<a&&this.equals(n[u+1],r[l+1],o);)l++,u++,c++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return c&&!o.oneChangePerToken&&(t.lastComponent={count:c,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let a=0,u=0,l=0;for(;a<s;a++){const c=i[a];if(c.removed)c.value=this.join(n.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let d=r.slice(u,u+c.count);d=d.map(function(f,m){const $=n[l+m];return $.length>f.length?$:f}),c.value=this.join(d)}else c.value=this.join(r.slice(u,u+c.count));u+=c.count,c.added||(l+=c.count)}}return i}}function Km(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function Gm(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function Qc(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function ed(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function Cs(e,t){return Qc(e,t,"")}function Xa(e,t){return ed(e,t,"")}function Zm(e,t){return t.slice(0,D2(e,t))}function D2(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const i=Array(n);let o=0;i[0]=0;for(let s=1;s<n;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=r;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function ks(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function Yn(e){const t=e.match(/^\s*/);return t?t[0]:""}const Mu="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",x2=new RegExp(`[${Mu}]+|\\s+|[^${Mu}]`,"ug");class A2 extends Qd{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=Array.from(s.segment(t),a=>a.segment)}else n=t.match(x2)||[];const i=[];let o=null;return n.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&Hm(n,o,i,s),n=s,i=null,o=null)}),(i||o)&&Hm(n,o,i,null),t}}const E2=new A2;function C2(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?S2(e,t,r):E2.diff(e,t,r)}function Hm(e,t,r,n){if(t&&r){const i=Yn(t.value),o=ks(t.value),s=Yn(r.value),a=ks(r.value);if(e){const u=Km(i,s);e.value=ed(e.value,s,u),t.value=Cs(t.value,u),r.value=Cs(r.value,u)}if(n){const u=Gm(o,a);n.value=Qc(n.value,a,u),t.value=Xa(t.value,u),r.value=Xa(r.value,u)}}else if(r){if(e){const i=Yn(r.value);r.value=r.value.substring(i.length)}if(n){const i=Yn(n.value);n.value=n.value.substring(i.length)}}else if(e&&n){const i=Yn(n.value),o=Yn(t.value),s=ks(t.value),a=Km(i,o);t.value=Cs(t.value,a);const u=Gm(Cs(i,a),s);t.value=Xa(t.value,u),n.value=Qc(n.value,i,u),e.value=ed(e.value,i,i.slice(0,i.length-u.length))}else if(n){const i=Yn(n.value),o=ks(t.value),s=Zm(o,i);t.value=Xa(t.value,s)}else if(e){const i=ks(e.value),o=Yn(t.value),s=Zm(i,o);t.value=Cs(t.value,s)}}class k2 extends Qd{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Mu}]+|[^\\S\\n\\r]+|[^${Mu}]`,"ug");return t.match(r)||[]}}const F2=new k2;function S2(e,t,r){return F2.diff(e,t,r)}class N2 extends Qd{constructor(){super(...arguments),this.tokenize=M2}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const T2=new N2;function P2(e,t,r){return T2.diff(e,t,r)}function M2(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let i=0;i<n.length;i++){const o=n[i];i%2&&!t.newlineIsToken?r[r.length-1]+=o:r.push(o)}return r}function Jm(e){return hg(e,new Map)}function hg(e,t){if(e&&typeof e=="object"&&!Array.isArray(e)){if(t.has(e))return t.get(e);const r={};return t.set(e,r),Object.entries(e).sort((n,i)=>n[0].localeCompare(i[0])).forEach(([n,i])=>{const o=hg(i,t);r[n]=o}),r}else return e}var I2=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,O2=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,B2=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,nc={Space_Separator:I2,ID_Start:O2,ID_Continue:B2},Xe={isSpaceSeparator(e){return typeof e=="string"&&nc.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||nc.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||nc.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let td,zt,Tn,Iu,ci,en,wt,ef,Gs;var R2=function(t,r){td=String(t),zt="start",Tn=[],Iu=0,ci=1,en=0,wt=void 0,ef=void 0,Gs=void 0;do wt=L2(),_2[zt]();while(wt.type!=="eof");return typeof r=="function"?rd({"":Gs},"",r):Gs};function rd(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const o=String(i),s=rd(n,o,r);s===void 0?delete n[o]:Object.defineProperty(n,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const o=rd(n,i,r);o===void 0?delete n[i]:Object.defineProperty(n,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let te,X,Ls,Cn,ae;function L2(){for(te="default",X="",Ls=!1,Cn=1;;){ae=Ln();const e=pg[te]();if(e)return e}}function Ln(){if(td[Iu])return String.fromCodePoint(td.codePointAt(Iu))}function N(){const e=Ln();return e===`
`?(ci++,en=0):e?en+=e.length:en++,e&&(Iu+=e.length),e}const pg={default(){switch(ae){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":N();return;case"/":N(),te="comment";return;case void 0:return N(),Me("eof")}if(Xe.isSpaceSeparator(ae)){N();return}return pg[zt]()},comment(){switch(ae){case"*":N(),te="multiLineComment";return;case"/":N(),te="singleLineComment";return}throw Ie(N())},multiLineComment(){switch(ae){case"*":N(),te="multiLineCommentAsterisk";return;case void 0:throw Ie(N())}N()},multiLineCommentAsterisk(){switch(ae){case"*":N();return;case"/":N(),te="default";return;case void 0:throw Ie(N())}N(),te="multiLineComment"},singleLineComment(){switch(ae){case`
`:case"\r":case"\u2028":case"\u2029":N(),te="default";return;case void 0:return N(),Me("eof")}N()},value(){switch(ae){case"{":case"[":return Me("punctuator",N());case"n":return N(),Ci("ull"),Me("null",null);case"t":return N(),Ci("rue"),Me("boolean",!0);case"f":return N(),Ci("alse"),Me("boolean",!1);case"-":case"+":N()==="-"&&(Cn=-1),te="sign";return;case".":X=N(),te="decimalPointLeading";return;case"0":X=N(),te="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":X=N(),te="decimalInteger";return;case"I":return N(),Ci("nfinity"),Me("numeric",1/0);case"N":return N(),Ci("aN"),Me("numeric",NaN);case'"':case"'":Ls=N()==='"',X="",te="string";return}throw Ie(N())},identifierNameStartEscape(){if(ae!=="u")throw Ie(N());N();const e=nd();switch(e){case"$":case"_":break;default:if(!Xe.isIdStartChar(e))throw Ym();break}X+=e,te="identifierName"},identifierName(){switch(ae){case"$":case"_":case"‌":case"‍":X+=N();return;case"\\":N(),te="identifierNameEscape";return}if(Xe.isIdContinueChar(ae)){X+=N();return}return Me("identifier",X)},identifierNameEscape(){if(ae!=="u")throw Ie(N());N();const e=nd();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!Xe.isIdContinueChar(e))throw Ym();break}X+=e,te="identifierName"},sign(){switch(ae){case".":X=N(),te="decimalPointLeading";return;case"0":X=N(),te="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":X=N(),te="decimalInteger";return;case"I":return N(),Ci("nfinity"),Me("numeric",Cn*(1/0));case"N":return N(),Ci("aN"),Me("numeric",NaN)}throw Ie(N())},zero(){switch(ae){case".":X+=N(),te="decimalPoint";return;case"e":case"E":X+=N(),te="decimalExponent";return;case"x":case"X":X+=N(),te="hexadecimal";return}return Me("numeric",Cn*0)},decimalInteger(){switch(ae){case".":X+=N(),te="decimalPoint";return;case"e":case"E":X+=N(),te="decimalExponent";return}if(Xe.isDigit(ae)){X+=N();return}return Me("numeric",Cn*Number(X))},decimalPointLeading(){if(Xe.isDigit(ae)){X+=N(),te="decimalFraction";return}throw Ie(N())},decimalPoint(){switch(ae){case"e":case"E":X+=N(),te="decimalExponent";return}if(Xe.isDigit(ae)){X+=N(),te="decimalFraction";return}return Me("numeric",Cn*Number(X))},decimalFraction(){switch(ae){case"e":case"E":X+=N(),te="decimalExponent";return}if(Xe.isDigit(ae)){X+=N();return}return Me("numeric",Cn*Number(X))},decimalExponent(){switch(ae){case"+":case"-":X+=N(),te="decimalExponentSign";return}if(Xe.isDigit(ae)){X+=N(),te="decimalExponentInteger";return}throw Ie(N())},decimalExponentSign(){if(Xe.isDigit(ae)){X+=N(),te="decimalExponentInteger";return}throw Ie(N())},decimalExponentInteger(){if(Xe.isDigit(ae)){X+=N();return}return Me("numeric",Cn*Number(X))},hexadecimal(){if(Xe.isHexDigit(ae)){X+=N(),te="hexadecimalInteger";return}throw Ie(N())},hexadecimalInteger(){if(Xe.isHexDigit(ae)){X+=N();return}return Me("numeric",Cn*Number(X))},string(){switch(ae){case"\\":N(),X+=j2();return;case'"':if(Ls)return N(),Me("string",X);X+=N();return;case"'":if(!Ls)return N(),Me("string",X);X+=N();return;case`
`:case"\r":throw Ie(N());case"\u2028":case"\u2029":V2(ae);break;case void 0:throw Ie(N())}X+=N()},start(){switch(ae){case"{":case"[":return Me("punctuator",N())}te="value"},beforePropertyName(){switch(ae){case"$":case"_":X=N(),te="identifierName";return;case"\\":N(),te="identifierNameStartEscape";return;case"}":return Me("punctuator",N());case'"':case"'":Ls=N()==='"',te="string";return}if(Xe.isIdStartChar(ae)){X+=N(),te="identifierName";return}throw Ie(N())},afterPropertyName(){if(ae===":")return Me("punctuator",N());throw Ie(N())},beforePropertyValue(){te="value"},afterPropertyValue(){switch(ae){case",":case"}":return Me("punctuator",N())}throw Ie(N())},beforeArrayValue(){if(ae==="]")return Me("punctuator",N());te="value"},afterArrayValue(){switch(ae){case",":case"]":return Me("punctuator",N())}throw Ie(N())},end(){throw Ie(N())}};function Me(e,t){return{type:e,value:t,line:ci,column:en}}function Ci(e){for(const t of e){if(Ln()!==t)throw Ie(N());N()}}function j2(){switch(Ln()){case"b":return N(),"\b";case"f":return N(),"\f";case"n":return N(),`
`;case"r":return N(),"\r";case"t":return N(),"	";case"v":return N(),"\v";case"0":if(N(),Xe.isDigit(Ln()))throw Ie(N());return"\0";case"x":return N(),U2();case"u":return N(),nd();case`
`:case"\u2028":case"\u2029":return N(),"";case"\r":return N(),Ln()===`
`&&N(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw Ie(N());case void 0:throw Ie(N())}return N()}function U2(){let e="",t=Ln();if(!Xe.isHexDigit(t)||(e+=N(),t=Ln(),!Xe.isHexDigit(t)))throw Ie(N());return e+=N(),String.fromCodePoint(parseInt(e,16))}function nd(){let e="",t=4;for(;t-- >0;){const r=Ln();if(!Xe.isHexDigit(r))throw Ie(N());e+=N()}return String.fromCodePoint(parseInt(e,16))}const _2={start(){if(wt.type==="eof")throw ki();ic()},beforePropertyName(){switch(wt.type){case"identifier":case"string":ef=wt.value,zt="afterPropertyName";return;case"punctuator":Qa();return;case"eof":throw ki()}},afterPropertyName(){if(wt.type==="eof")throw ki();zt="beforePropertyValue"},beforePropertyValue(){if(wt.type==="eof")throw ki();ic()},beforeArrayValue(){if(wt.type==="eof")throw ki();if(wt.type==="punctuator"&&wt.value==="]"){Qa();return}ic()},afterPropertyValue(){if(wt.type==="eof")throw ki();switch(wt.value){case",":zt="beforePropertyName";return;case"}":Qa()}},afterArrayValue(){if(wt.type==="eof")throw ki();switch(wt.value){case",":zt="beforeArrayValue";return;case"]":Qa()}},end(){}};function ic(){let e;switch(wt.type){case"punctuator":switch(wt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=wt.value;break}if(Gs===void 0)Gs=e;else{const t=Tn[Tn.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,ef,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Tn.push(e),Array.isArray(e)?zt="beforeArrayValue":zt="beforePropertyName";else{const t=Tn[Tn.length-1];t==null?zt="end":Array.isArray(t)?zt="afterArrayValue":zt="afterPropertyValue"}}function Qa(){Tn.pop();const e=Tn[Tn.length-1];e==null?zt="end":Array.isArray(e)?zt="afterArrayValue":zt="afterPropertyValue"}function Ie(e){return Ou(e===void 0?`JSON5: invalid end of input at ${ci}:${en}`:`JSON5: invalid character '${gg(e)}' at ${ci}:${en}`)}function ki(){return Ou(`JSON5: invalid end of input at ${ci}:${en}`)}function Ym(){return en-=5,Ou(`JSON5: invalid identifier character at ${ci}:${en}`)}function V2(e){console.warn(`JSON5: '${gg(e)}' in strings is not valid ECMAScript; consider escaping`)}function gg(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Ou(e){const t=new SyntaxError(e);return t.lineNumber=ci,t.columnNumber=en,t}var W2=function(t,r,n){const i=[];let o="",s,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const b of r){let F;typeof b=="string"?F=b:(typeof b=="number"||b instanceof String||b instanceof Number)&&(F=String(b)),F!==void 0&&s.indexOf(F)<0&&s.push(F)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c(b,F){let C=F[b];switch(C!=null&&(typeof C.toJSON5=="function"?C=C.toJSON5(b):typeof C.toJSON=="function"&&(C=C.toJSON(b))),a&&(C=a.call(F,b,C)),C instanceof Number?C=Number(C):C instanceof String?C=String(C):C instanceof Boolean&&(C=C.valueOf()),C){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof C=="string")return d(C);if(typeof C=="number")return String(C);if(typeof C=="object")return Array.isArray(C)?$(C):f(C)}function d(b){const F={"'":.1,'"':.2},C={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let S="";for(let z=0;z<b.length;z++){const q=b[z];switch(q){case"'":case'"':F[q]++,S+=q;continue;case"\0":if(Xe.isDigit(b[z+1])){S+="\\x00";continue}}if(C[q]){S+=C[q];continue}if(q<" "){let Ce=q.charCodeAt(0).toString(16);S+="\\x"+("00"+Ce).substring(Ce.length);continue}S+=q}const I=l||Object.keys(F).reduce((z,q)=>F[z]<F[q]?z:q);return S=S.replace(new RegExp(I,"g"),C[I]),I+S+I}function f(b){if(i.indexOf(b)>=0)throw TypeError("Converting circular structure to JSON5");i.push(b);let F=o;o=o+u;let C=s||Object.keys(b),S=[];for(const z of C){const q=c(z,b);if(q!==void 0){let Ce=m(z)+":";u!==""&&(Ce+=" "),Ce+=q,S.push(Ce)}}let I;if(S.length===0)I="{}";else{let z;if(u==="")z=S.join(","),I="{"+z+"}";else{let q=`,
`+o;z=S.join(q),I=`{
`+o+z+`,
`+F+"}"}}return i.pop(),o=F,I}function m(b){if(b.length===0)return d(b);const F=String.fromCodePoint(b.codePointAt(0));if(!Xe.isIdStartChar(F))return d(b);for(let C=F.length;C<b.length;C++)if(!Xe.isIdContinueChar(String.fromCodePoint(b.codePointAt(C))))return d(b);return b}function $(b){if(i.indexOf(b)>=0)throw TypeError("Converting circular structure to JSON5");i.push(b);let F=o;o=o+u;let C=[];for(let I=0;I<b.length;I++){const z=c(String(I),b);C.push(z!==void 0?z:"null")}let S;if(C.length===0)S="[]";else if(u==="")S="["+C.join(",")+"]";else{let I=`,
`+o,z=C.join(I);S=`[
`+o+z+`,
`+F+"]"}return i.pop(),o=F,S}};const z2={parse:R2,stringify:W2};var q2=z2;const yg="__@@augment-vir-undefined-sentinel@@__",K2=new RegExp(`['"]${yg}['"]`);function g(e,t){if(typeof e=="string")return e;try{return q2.stringify(e,(n,i)=>i===void 0?yg:typeof i=="bigint"?Number(i):i,t||void 0).split(K2).join("undefined")}catch{return String(e)}}var G2=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var tn;(function(e){e.Node="node",e.Web="web"})(tn||(tn={}));function Z2(){return G2?tn.Node:tn.Web}const bg=Z2();function tf(e){return bg===e}function wg(e){return e[bg]()}function H2(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",i=n?P2:C2,o=[r?"":`
`,g(t&&typeof t=="object"&&!Array.isArray(t)?Jm(t):t,4),`
`].join(""),s=[r?"":`
`,g(e&&typeof e=="object"&&!Array.isArray(e)?Jm(e):e,4),`
`].join(""),a=J2(n,i(o,s)),u=tf(tn.Node);return[[u?On.Green:""," +added (unexpected, added in actual)",u?On.Red:""," -missing (expected, missing from actual)",u?On.Reset:""].join(""),r?`

`:`
`,a].join("")}var On;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(On||(On={}));var Bu;(function(e){e.Added="+",e.Removed="-"})(Bu||(Bu={}));function J2(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(i=>Xm(i,n)).join(`
`)).join(""):t.map(n=>Xm(void 0,n)).join("")}function Xm(e,t){if(e!=null&&!e)return"";const r=tf(tn.Node),n=t.added?Bu.Added:t.removed?Bu.Removed:e==null?"":" ",i=t.added?On.Green:t.removed?On.Red:On.Reset;return[r?i:"",n,e??t.value,On.Reset].join("")}function We(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Y2(e){return We(e).filter(t=>isNaN(Number(t)))}function Mr(e){return Y2(e).map(r=>e[r])}const X2=[".",":",";",",","?","!"],Q2=new RegExp(`[${X2.join("")}]+$`);function Qm(e){return e.replace(Q2,"")}function Et(e){return e==null||e===""?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):g(e)}function as(...e){const t=e.map(o=>Et(o)).filter(o=>!!Qm(o)),r=t[t.length-1]?.endsWith("."),n=t.map(o=>Qm(Et(o)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function Je(e){return e instanceof Error?e:new Error(Et(e))}function cl(e,t){const r=Je(e),n=as(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var A;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(A||(A={}));var L;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(L||(L={}));L.ClientError,L.ServerError;A.Continue+"",L.Information,A.SwitchingProtocols+"",L.Information,A.Processing+"",L.Information,A.EarlyHints+"",L.Information,A.Ok+"",L.Success,A.Created+"",L.Success,A.Accepted+"",L.Success,A.NonAuthoritativeInformation+"",L.Success,A.NoContent+"",L.Success,A.ResetContent+"",L.Success,A.PartialContent+"",L.Success,A.MultiStatus+"",L.Success,A.AlreadyReported+"",L.Success,A.ImUsed+"",L.Success,A.MultipleChoices+"",L.Redirect,A.MovedPermanently+"",L.Redirect,A.Found+"",L.Redirect,A.SeeOther+"",L.Redirect,A.NotModified+"",L.Redirect,A.UseProxy+"",L.Redirect,A.Unused+"",L.Redirect,A.TemporaryRedirect+"",L.Redirect,A.PermanentRedirect+"",L.Redirect,A.BadRequest+"",L.ClientError,A.Unauthorized+"",L.ClientError,A.PaymentRequired+"",L.ClientError,A.Forbidden+"",L.ClientError,A.NotFound+"",L.ClientError,A.MethodNotAllowed+"",L.ClientError,A.NotAcceptable+"",L.ClientError,A.ProxyAuthenticationRequired+"",L.ClientError,A.RequestTimeout+"",L.ClientError,A.Conflict+"",L.ClientError,A.Gone+"",L.ClientError,A.LengthRequired+"",L.ClientError,A.PreconditionFailed+"",L.ClientError,A.PayloadTooLarge+"",L.ClientError,A.UriTooLong+"",L.ClientError,A.UnsupportedMediaType+"",L.ClientError,A.RangeNotSatisfiable+"",L.ClientError,A.ExpectationFailed+"",L.ClientError,A.ImATeapot+"",L.ClientError,A.MisdirectedRequest+"",L.ClientError,A.UnprocessableContent+"",L.ClientError,A.Locked+"",L.ClientError,A.FailedDependency+"",L.ClientError,A.TooEarly+"",L.ClientError,A.UpgradeRequired+"",L.ClientError,A.PreconditionRequired+"",L.ClientError,A.TooManyRequests+"",L.ClientError,A.RequestHeaderFieldsTooLarge+"",L.ClientError,A.UnavailableForLegalReasons+"",L.ClientError,A.InternalServerError+"",L.ServerError,A.NotImplemented+"",L.ServerError,A.BadGateway+"",L.ServerError,A.ServiceUnavailable+"",L.ServerError,A.GatewayTimeout+"",L.ServerError,A.HttpVersionNotSupported+"",L.ServerError,A.VariantAlsoNegotiates+"",L.ServerError,A.InsufficientStorage+"",L.ServerError,A.LoopDetected+"",L.ServerError,A.NotExtended+"",L.ServerError,A.NetworkAuthenticationRequired+"",L.ServerError;const Du={[L.Information]:[A.Continue,A.SwitchingProtocols,A.Processing,A.EarlyHints],[L.Success]:[A.Ok,A.Created,A.Accepted,A.NonAuthoritativeInformation,A.NoContent,A.ResetContent,A.PartialContent,A.MultiStatus,A.AlreadyReported,A.ImUsed],[L.Redirect]:[A.MultipleChoices,A.MovedPermanently,A.Found,A.SeeOther,A.NotModified,A.UseProxy,A.Unused,A.TemporaryRedirect,A.PermanentRedirect],[L.ClientError]:[A.BadRequest,A.Unauthorized,A.PaymentRequired,A.Forbidden,A.NotFound,A.MethodNotAllowed,A.NotAcceptable,A.ProxyAuthenticationRequired,A.RequestTimeout,A.Conflict,A.Gone,A.LengthRequired,A.PreconditionFailed,A.PayloadTooLarge,A.UriTooLong,A.UnsupportedMediaType,A.RangeNotSatisfiable,A.ExpectationFailed,A.ImATeapot,A.MisdirectedRequest,A.UnprocessableContent,A.Locked,A.FailedDependency,A.TooEarly,A.UpgradeRequired,A.PreconditionRequired,A.TooManyRequests,A.RequestHeaderFieldsTooLarge,A.UnavailableForLegalReasons],[L.ServerError]:[A.InternalServerError,A.NotImplemented,A.BadGateway,A.ServiceUnavailable,A.GatewayTimeout,A.HttpVersionNotSupported,A.VariantAlsoNegotiates,A.InsufficientStorage,A.LoopDetected,A.NotExtended,A.NetworkAuthenticationRequired]};function rf({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Ru{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(Je(n))}})}}class eo extends Error{}class ev extends eo{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class tv extends eo{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class rv extends eo{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Eo extends eo{}class vg extends eo{constructor(t){super(`Invalid unit ${t}`)}}class Bt extends eo{}class Xn extends eo{constructor(){super("Zone is an abstract class")}}const B="numeric",rn="short",yr="long",Lu={year:B,month:B,day:B},$g={year:B,month:rn,day:B},nv={year:B,month:rn,day:B,weekday:rn},Dg={year:B,month:yr,day:B},xg={year:B,month:yr,day:B,weekday:yr},Ag={hour:B,minute:B},Eg={hour:B,minute:B,second:B},Cg={hour:B,minute:B,second:B,timeZoneName:rn},kg={hour:B,minute:B,second:B,timeZoneName:yr},Fg={hour:B,minute:B,hourCycle:"h23"},Sg={hour:B,minute:B,second:B,hourCycle:"h23"},Ng={hour:B,minute:B,second:B,hourCycle:"h23",timeZoneName:rn},Tg={hour:B,minute:B,second:B,hourCycle:"h23",timeZoneName:yr},Pg={year:B,month:B,day:B,hour:B,minute:B},Mg={year:B,month:B,day:B,hour:B,minute:B,second:B},Ig={year:B,month:rn,day:B,hour:B,minute:B},Og={year:B,month:rn,day:B,hour:B,minute:B,second:B},iv={year:B,month:rn,day:B,weekday:rn,hour:B,minute:B},Bg={year:B,month:yr,day:B,hour:B,minute:B,timeZoneName:rn},Rg={year:B,month:yr,day:B,hour:B,minute:B,second:B,timeZoneName:rn},Lg={year:B,month:yr,day:B,weekday:yr,hour:B,minute:B,timeZoneName:yr},jg={year:B,month:yr,day:B,weekday:yr,hour:B,minute:B,second:B,timeZoneName:yr};class Aa{get type(){throw new Xn}get name(){throw new Xn}get ianaName(){return this.name}get isUniversal(){throw new Xn}offsetName(t,r){throw new Xn}formatOffset(t,r){throw new Xn}offset(t){throw new Xn}equals(t){throw new Xn}get isValid(){throw new Xn}}let oc=null;class dl extends Aa{static get instance(){return oc===null&&(oc=new dl),oc}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Jg(t,r,n)}formatOffset(t,r){return Zs(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const id=new Map;function ov(e){let t=id.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),id.set(e,t)),t}const sv={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function av(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,o,s,a,u,l,c]=n;return[s,i,o,a,u,l,c]}function uv(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:o,value:s}=r[i],a=sv[o];o==="era"?n[a]=s:H(a)||(n[a]=parseInt(s,10))}return n}const sc=new Map;class _n extends Aa{static create(t){let r=sc.get(t);return r===void 0&&sc.set(t,r=new _n(t)),r}static resetCache(){sc.clear(),id.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=_n.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Jg(t,r,n,this.name)}formatOffset(t,r){return Zs(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=ov(this.name);let[i,o,s,a,u,l,c]=n.formatToParts?uv(n,r):av(n,r);a==="BC"&&(i=-Math.abs(i)+1);const f=ml({year:i,month:o,day:s,hour:u===24?0:u,minute:l,second:c,millisecond:0});let m=+r;const $=m%1e3;return m-=$>=0?$:1e3+$,(f-m)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let eh={};function lv(e,t={}){const r=JSON.stringify([e,t]);let n=eh[r];return n||(n=new Intl.ListFormat(e,t),eh[r]=n),n}const od=new Map;function sd(e,t={}){const r=JSON.stringify([e,t]);let n=od.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),od.set(r,n)),n}const ad=new Map;function cv(e,t={}){const r=JSON.stringify([e,t]);let n=ad.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),ad.set(r,n)),n}const ud=new Map;function dv(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let o=ud.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),ud.set(i,o)),o}let js=null;function fv(){return js||(js=new Intl.DateTimeFormat().resolvedOptions().locale,js)}const ld=new Map;function Ug(e){let t=ld.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),ld.set(e,t)),t}const cd=new Map;function mv(e){let t=cd.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={..._g,...t}),cd.set(e,t)}return t}function hv(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=sd(e).resolvedOptions(),i=e}catch{const u=e.substring(0,r);n=sd(u).resolvedOptions(),i=u}const{numberingSystem:o,calendar:s}=n;return[i,o,s]}}function pv(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function gv(e){const t=[];for(let r=1;r<=12;r++){const n=J.utc(2009,r,1);t.push(e(n))}return t}function yv(e){const t=[];for(let r=1;r<=7;r++){const n=J.utc(2016,11,13+r);t.push(e(n))}return t}function eu(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function bv(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Ug(e.locale).numberingSystem==="latn"}class wv{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:o,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=cv(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):uf(t,3);return ot(r,this.padTo)}}}class vv{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&_n.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=sd(r,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class $v{constructor(t,r,n){this.opts={style:"long",...n},!r&&Zg()&&(this.rtf=dv(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Wv(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const _g={firstDay:1,minimalDays:4,weekend:[6,7]};class ve{static fromOpts(t){return ve.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,o=!1){const s=t||_e.defaultLocale,a=s||(o?"en-US":fv()),u=r||_e.defaultNumberingSystem,l=n||_e.defaultOutputCalendar,c=fd(i)||_e.defaultWeekSettings;return new ve(a,u,l,c,s)}static resetCache(){js=null,od.clear(),ad.clear(),ud.clear(),ld.clear(),cd.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return ve.create(t,r,n,i)}constructor(t,r,n,i,o){const[s,a,u]=hv(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=i,this.intl=pv(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=bv(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:ve.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,fd(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return eu(this,t,Qg,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const i=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";if(!this.monthsCache[o][t]){const s=n?a=>this.dtFormatter(a,i).format():a=>this.extract(a,i,"month");this.monthsCache[o][t]=gv(s)}return this.monthsCache[o][t]})}weekdays(t,r=!1){return eu(this,t,ry,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=yv(o=>this.extract(o,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return eu(this,void 0,()=>ny,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[J.utc(2016,11,13,9),J.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return eu(this,t,iy,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[J.utc(-40,1,1),J.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),o=i.formatToParts(),s=o.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new wv(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new vv(t,this.intl,r)}relFormatter(t={}){return new $v(this.intl,this.isEnglish(),t)}listFormatter(t={}){return lv(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Ug(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Hg()?mv(this.locale):_g}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let ac=null;class qt extends Aa{static get utcInstance(){return ac===null&&(ac=new qt(0)),ac}static instance(t){return t===0?qt.utcInstance:new qt(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new qt(hl(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Zs(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Zs(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Zs(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Dv extends Aa{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function ii(e,t){if(H(e)||e===null)return t;if(e instanceof Aa)return e;if(Fv(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?dl.instance:r==="utc"||r==="gmt"?qt.utcInstance:qt.parseSpecifier(r)||_n.create(e)}else return ai(e)?qt.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Dv(e)}const nf={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},th={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},xv=nf.hanidec.replace(/[\[|\]]/g,"").split("");function Av(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(nf.hanidec)!==-1)t+=xv.indexOf(e[r]);else for(const i in th){const[o,s]=th[i];n>=o&&n<=s&&(t+=n-o)}}return parseInt(t,10)}else return t}const dd=new Map;function Ev(){dd.clear()}function Zr({numberingSystem:e},t=""){const r=e||"latn";let n=dd.get(r);n===void 0&&(n=new Map,dd.set(r,n));let i=n.get(t);return i===void 0&&(i=new RegExp(`${nf[r]}${t}`),n.set(t,i)),i}let rh=()=>Date.now(),nh="system",ih=null,oh=null,sh=null,ah=60,uh,lh=null;class _e{static get now(){return rh}static set now(t){rh=t}static set defaultZone(t){nh=t}static get defaultZone(){return ii(nh,dl.instance)}static get defaultLocale(){return ih}static set defaultLocale(t){ih=t}static get defaultNumberingSystem(){return oh}static set defaultNumberingSystem(t){oh=t}static get defaultOutputCalendar(){return sh}static set defaultOutputCalendar(t){sh=t}static get defaultWeekSettings(){return lh}static set defaultWeekSettings(t){lh=fd(t)}static get twoDigitCutoffYear(){return ah}static set twoDigitCutoffYear(t){ah=t%100}static get throwOnInvalid(){return uh}static set throwOnInvalid(t){uh=t}static resetCaches(){ve.resetCache(),_n.resetCache(),J.resetCache(),Ev()}}class Xr{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Vg=[0,31,59,90,120,151,181,212,243,273,304,334],Wg=[0,31,60,91,121,152,182,213,244,274,305,335];function Br(e,t){return new Xr("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function of(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function zg(e,t,r){return r+(Ea(e)?Wg:Vg)[t-1]}function qg(e,t){const r=Ea(e)?Wg:Vg,n=r.findIndex(o=>o<t),i=t-r[n];return{month:n+1,day:i}}function sf(e,t){return(e-t+7)%7+1}function ju(e,t=4,r=1){const{year:n,month:i,day:o}=e,s=zg(n,i,o),a=sf(of(n,i,o),r);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=n-1,u=ia(l,t,r)):u>ia(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...pl(e)}}function ch(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:o}=e,s=sf(of(n,1,t),r),a=Po(n);let u=i*7+o-s-7+t,l;u<1?(l=n-1,u+=Po(l)):u>a?(l=n+1,u-=Po(n)):l=n;const{month:c,day:d}=qg(l,u);return{year:l,month:c,day:d,...pl(e)}}function uc(e){const{year:t,month:r,day:n}=e,i=zg(t,r,n);return{year:t,ordinal:i,...pl(e)}}function dh(e){const{year:t,ordinal:r}=e,{month:n,day:i}=qg(t,r);return{year:t,month:n,day:i,...pl(e)}}function fh(e,t){if(!H(e.localWeekday)||!H(e.localWeekNumber)||!H(e.localWeekYear)){if(!H(e.weekday)||!H(e.weekNumber)||!H(e.weekYear))throw new Eo("Cannot mix locale-based week fields with ISO-based week fields");return H(e.localWeekday)||(e.weekday=e.localWeekday),H(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),H(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Cv(e,t=4,r=1){const n=fl(e.weekYear),i=Rr(e.weekNumber,1,ia(e.weekYear,t,r)),o=Rr(e.weekday,1,7);return n?i?o?!1:Br("weekday",e.weekday):Br("week",e.weekNumber):Br("weekYear",e.weekYear)}function kv(e){const t=fl(e.year),r=Rr(e.ordinal,1,Po(e.year));return t?r?!1:Br("ordinal",e.ordinal):Br("year",e.year)}function Kg(e){const t=fl(e.year),r=Rr(e.month,1,12),n=Rr(e.day,1,Uu(e.year,e.month));return t?r?n?!1:Br("day",e.day):Br("month",e.month):Br("year",e.year)}function Gg(e){const{hour:t,minute:r,second:n,millisecond:i}=e,o=Rr(t,0,23)||t===24&&r===0&&n===0&&i===0,s=Rr(r,0,59),a=Rr(n,0,59),u=Rr(i,0,999);return o?s?a?u?!1:Br("millisecond",i):Br("second",n):Br("minute",r):Br("hour",t)}function H(e){return typeof e>"u"}function ai(e){return typeof e=="number"}function fl(e){return typeof e=="number"&&e%1===0}function Fv(e){return typeof e=="string"}function Sv(e){return Object.prototype.toString.call(e)==="[object Date]"}function Zg(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Hg(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Nv(e){return Array.isArray(e)?e:[e]}function mh(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const o=[t(i),i];return n&&r(n[0],o[0])===n[0]?n:o},null)[1]}function Tv(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function _o(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function fd(e){if(e==null)return null;if(typeof e!="object")throw new Bt("Week settings must be an object");if(!Rr(e.firstDay,1,7)||!Rr(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Rr(t,1,7)))throw new Bt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Rr(e,t,r){return fl(e)&&e>=t&&e<=r}function Pv(e,t){return e-t*Math.floor(e/t)}function ot(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function ti(e){if(!(H(e)||e===null||e===""))return parseInt(e,10)}function Fi(e){if(!(H(e)||e===null||e===""))return parseFloat(e)}function af(e){if(!(H(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function uf(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function Ea(e){return e%4===0&&(e%100!==0||e%400===0)}function Po(e){return Ea(e)?366:365}function Uu(e,t){const r=Pv(t-1,12)+1,n=e+(t-r)/12;return r===2?Ea(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function ml(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function hh(e,t,r){return-sf(of(e,1,t),r)+t-1}function ia(e,t=4,r=1){const n=hh(e,t,r),i=hh(e+1,t,r);return(Po(e)-n+i)/7}function md(e){return e>99?e:e>_e.twoDigitCutoffYear?1900+e:2e3+e}function Jg(e,t,r,n=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(o.timeZone=n);const s={timeZoneName:t,...o},a=new Intl.DateTimeFormat(r,s).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function hl(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function Yg(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new Bt(`Invalid unit value ${e}`);return t}function _u(e,t){const r={};for(const n in e)if(_o(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=Yg(i)}return r}function Zs(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${ot(r,2)}:${ot(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${ot(r,2)}${ot(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function pl(e){return Tv(e,["hour","minute","second","millisecond"])}const Mv=["January","February","March","April","May","June","July","August","September","October","November","December"],Xg=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Iv=["J","F","M","A","M","J","J","A","S","O","N","D"];function Qg(e){switch(e){case"narrow":return[...Iv];case"short":return[...Xg];case"long":return[...Mv];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const ey=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ty=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ov=["M","T","W","T","F","S","S"];function ry(e){switch(e){case"narrow":return[...Ov];case"short":return[...ty];case"long":return[...ey];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const ny=["AM","PM"],Bv=["Before Christ","Anno Domini"],Rv=["BC","AD"],Lv=["B","A"];function iy(e){switch(e){case"narrow":return[...Lv];case"short":return[...Rv];case"long":return[...Bv];default:return null}}function jv(e){return ny[e.hour<12?0:1]}function Uv(e,t){return ry(t)[e.weekday-1]}function _v(e,t){return Qg(t)[e.month-1]}function Vv(e,t){return iy(t)[e.year<0?0:1]}function Wv(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&o){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${i[e][0]}`;case-1:return d?"yesterday":`last ${i[e][0]}`;case 0:return d?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=n?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return s?`${a} ${c} ago`:`in ${a} ${c}`}function ph(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const zv={D:Lu,DD:$g,DDD:Dg,DDDD:xg,t:Ag,tt:Eg,ttt:Cg,tttt:kg,T:Fg,TT:Sg,TTT:Ng,TTTT:Tg,f:Pg,ff:Ig,fff:Bg,ffff:Lg,F:Mg,FF:Og,FFF:Rg,FFFF:jg};class Lt{static create(t,r={}){return new Lt(t,r)}static parseFormat(t){let r=null,n="",i=!1;const o=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||i)&&o.push({literal:i||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&o.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&o.push({literal:i||/^\s+$/.test(n),val:n}),o}static macroTokenToFormatOpts(t){return zv[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return ot(t,r);const i={...this.opts};return r>0&&(i.padTo=r),n&&(i.signDisplay=n),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(m,$)=>this.loc.extract(t,m,$),s=m=>t.isOffsetFixed&&t.offset===0&&m.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,m.format):"",a=()=>n?jv(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(m,$)=>n?_v(t,m):o($?{month:m}:{month:m,day:"numeric"},"month"),l=(m,$)=>n?Uv(t,m):o($?{weekday:m}:{weekday:m,month:"long",day:"numeric"},"weekday"),c=m=>{const $=Lt.macroTokenToFormatOpts(m);return $?this.formatWithSystemDefault(t,$):m},d=m=>n?Vv(t,m):o({era:m},"era"),f=m=>{switch(m){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(m)}};return ph(Lt.parseFormat(r),f)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,i=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(c,d)=>f=>{const m=i(f);if(m){const $=d.isNegativeDuration&&m!==d.largestUnit?n:1;let b;return this.opts.signMode==="negativeLargestOnly"&&m!==d.largestUnit?b="never":this.opts.signMode==="all"?b="always":b="auto",this.num(c.get(m)*$,f.length,b)}else return f},s=Lt.parseFormat(r),a=s.reduce((c,{literal:d,val:f})=>d?c:c.concat(f),[]),u=t.shiftTo(...a.map(i).filter(c=>c)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return ph(s,o(u,l))}}const oy=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function us(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function ls(...e){return t=>e.reduce(([r,n,i],o)=>{const[s,a,u]=o(t,i);return[{...r,...s},a||n,u]},[{},null,1]).slice(0,2)}function cs(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function sy(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=ti(t[r+i]);return[n,null,r+i]}}const ay=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,qv=`(?:${ay.source}?(?:\\[(${oy.source})\\])?)?`,lf=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,uy=RegExp(`${lf.source}${qv}`),cf=RegExp(`(?:[Tt]${uy.source})?`),Kv=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Gv=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Zv=/(\d{4})-?(\d{3})/,Hv=sy("weekYear","weekNumber","weekDay"),Jv=sy("year","ordinal"),Yv=/(\d{4})-(\d\d)-(\d\d)/,ly=RegExp(`${lf.source} ?(?:${ay.source}|(${oy.source}))?`),Xv=RegExp(`(?: ${ly.source})?`);function Mo(e,t,r){const n=e[t];return H(n)?r:ti(n)}function Qv(e,t){return[{year:Mo(e,t),month:Mo(e,t+1,1),day:Mo(e,t+2,1)},null,t+3]}function ds(e,t){return[{hours:Mo(e,t,0),minutes:Mo(e,t+1,0),seconds:Mo(e,t+2,0),milliseconds:af(e[t+3])},null,t+4]}function Ca(e,t){const r=!e[t]&&!e[t+1],n=hl(e[t+1],e[t+2]),i=r?null:qt.instance(n);return[{},i,t+3]}function ka(e,t){const r=e[t]?_n.create(e[t]):null;return[{},r,t+1]}const e$=RegExp(`^T?${lf.source}$`),t$=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function r$(e){const[t,r,n,i,o,s,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",f=(m,$=!1)=>m!==void 0&&($||m&&c)?-m:m;return[{years:f(Fi(r)),months:f(Fi(n)),weeks:f(Fi(i)),days:f(Fi(o)),hours:f(Fi(s)),minutes:f(Fi(a)),seconds:f(Fi(u),u==="-0"),milliseconds:f(af(l),d)}]}const n$={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function df(e,t,r,n,i,o,s){const a={year:t.length===2?md(ti(t)):ti(t),month:Xg.indexOf(r)+1,day:ti(n),hour:ti(i),minute:ti(o)};return s&&(a.second=ti(s)),e&&(a.weekday=e.length>3?ey.indexOf(e)+1:ty.indexOf(e)+1),a}const i$=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function o$(e){const[,t,r,n,i,o,s,a,u,l,c,d]=e,f=df(t,i,n,r,o,s,a);let m;return u?m=n$[u]:l?m=0:m=hl(c,d),[f,new qt(m)]}function s$(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const a$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,u$=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,l$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function gh(e){const[,t,r,n,i,o,s,a]=e;return[df(t,i,n,r,o,s,a),qt.utcInstance]}function c$(e){const[,t,r,n,i,o,s,a]=e;return[df(t,a,r,n,i,o,s),qt.utcInstance]}const d$=us(Kv,cf),f$=us(Gv,cf),m$=us(Zv,cf),h$=us(uy),cy=ls(Qv,ds,Ca,ka),p$=ls(Hv,ds,Ca,ka),g$=ls(Jv,ds,Ca,ka),y$=ls(ds,Ca,ka);function b$(e){return cs(e,[d$,cy],[f$,p$],[m$,g$],[h$,y$])}function w$(e){return cs(s$(e),[i$,o$])}function v$(e){return cs(e,[a$,gh],[u$,gh],[l$,c$])}function $$(e){return cs(e,[t$,r$])}const D$=ls(ds);function x$(e){return cs(e,[e$,D$])}const A$=us(Yv,Xv),E$=us(ly),C$=ls(ds,Ca,ka);function k$(e){return cs(e,[A$,cy],[E$,C$])}const yh="Invalid Duration",dy={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},F$={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...dy},Nr=146097/400,go=146097/4800,S$={years:{quarters:4,months:12,weeks:Nr/7,days:Nr,hours:Nr*24,minutes:Nr*24*60,seconds:Nr*24*60*60,milliseconds:Nr*24*60*60*1e3},quarters:{months:3,weeks:Nr/28,days:Nr/4,hours:Nr*24/4,minutes:Nr*24*60/4,seconds:Nr*24*60*60/4,milliseconds:Nr*24*60*60*1e3/4},months:{weeks:go/7,days:go,hours:go*24,minutes:go*24*60,seconds:go*24*60*60,milliseconds:go*24*60*60*1e3},...dy},Li=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],N$=Li.slice(0).reverse();function Dn(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new le(n)}function fy(e,t){let r=t.milliseconds??0;for(const n of N$.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function bh(e,t){const r=fy(e,t)<0?-1:1;Li.reduceRight((n,i)=>{if(H(t[i]))return n;if(n){const o=t[n]*r,s=e[i][n],a=Math.floor(o/s);t[i]+=a*r,t[n]-=a*s*r}return i},null),Li.reduce((n,i)=>{if(H(t[i]))return n;if(n){const o=t[n]%1;t[n]-=o,t[i]+=o*e[n][i]}return i},null)}function wh(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class le{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?S$:F$;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||ve.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return le.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Bt(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new le({values:_u(t,le.normalizeUnit),loc:ve.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(ai(t))return le.fromMillis(t);if(le.isDuration(t))return t;if(typeof t=="object")return le.fromObject(t);throw new Bt(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=$$(t);return n?le.fromObject(n,r):le.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=x$(t);return n?le.fromObject(n,r):le.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Bt("need to specify a reason the Duration is invalid");const n=t instanceof Xr?t:new Xr(t,r);if(_e.throwOnInvalid)throw new rv(n);return new le({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new vg(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?Lt.create(this.loc,n).formatDurationFromString(this,t):yh}toHuman(t={}){if(!this.isValid)return yh;const r=t.showZeros!==!1,n=Li.map(i=>{const o=this.values[i];return H(o)||o===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=uf(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},J.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?fy(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=le.fromDurationLike(t),n={};for(const i of Li)(_o(r.values,i)||_o(this.values,i))&&(n[i]=r.get(i)+this.get(i));return Dn(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=le.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Yg(t(this.values[n],n));return Dn(this,{values:r},!0)}get(t){return this[le.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,..._u(t,le.normalizeUnit)};return Dn(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return Dn(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return bh(this.matrix,t),Dn(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=wh(this.normalize().shiftToAll().toObject());return Dn(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>le.normalizeUnit(s));const r={},n={},i=this.toObject();let o;for(const s of Li)if(t.indexOf(s)>=0){o=s;let a=0;for(const l in n)a+=this.matrix[l][s]*n[l],n[l]=0;ai(i[s])&&(a+=i[s]);const u=Math.trunc(a);r[s]=u,n[s]=(a*1e3-u*1e3)/1e3}else ai(i[s])&&(n[s]=i[s]);for(const s in n)n[s]!==0&&(r[o]+=s===o?n[s]:n[s]/this.matrix[o][s]);return bh(this.matrix,r),Dn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return Dn(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=wh(this.values);return Dn(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of Li)if(!r(this.values[n],t.values[n]))return!1;return!0}}const yo="Invalid Interval";function T$(e,t){return!e||!e.isValid?He.invalid("missing or invalid start"):!t||!t.isValid?He.invalid("missing or invalid end"):t<e?He.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class He{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Bt("need to specify a reason the Interval is invalid");const n=t instanceof Xr?t:new Xr(t,r);if(_e.throwOnInvalid)throw new tv(n);return new He({invalid:n})}static fromDateTimes(t,r){const n=Fs(t),i=Fs(r),o=T$(n,i);return o??new He({start:n,end:i})}static after(t,r){const n=le.fromDurationLike(r),i=Fs(t);return He.fromDateTimes(i,i.plus(n))}static before(t,r){const n=le.fromDurationLike(r),i=Fs(t);return He.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let o,s;try{o=J.fromISO(n,r),s=o.isValid}catch{s=!1}let a,u;try{a=J.fromISO(i,r),u=a.isValid}catch{u=!1}if(s&&u)return He.fromDateTimes(o,a);if(s){const l=le.fromISO(i,r);if(l.isValid)return He.after(o,l)}else if(u){const l=le.fromISO(n,r);if(l.isValid)return He.before(a,l)}}return He.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?He.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Fs).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:i}=this,o=0;for(;i<this.e;){const s=r[o]||this.e,a=+s>+this.e?this.e:s;n.push(He.fromDateTimes(i,a)),i=a,o+=1}return n}splitBy(t){const r=le.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,o;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*i));o=+a>+this.e?this.e:a,s.push(He.fromDateTimes(n,o)),n=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:He.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return He.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],o=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...o),a=s.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&i.push(He.fromDateTimes(r,u.time)),r=null);return He.merge(i)}difference(...t){return He.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:yo}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Lu,r={}){return this.isValid?Lt.create(this.s.loc.clone(r),t).formatInterval(this):yo}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:yo}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:yo}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:yo}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:yo}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):le.invalid(this.invalidReason)}mapEndpoints(t){return He.fromDateTimes(t(this.s),t(this.e))}}class tu{static hasDST(t=_e.defaultZone){const r=J.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return _n.isValidZone(t)}static normalizeZone(t){return ii(t,_e.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||ve.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||ve.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||ve.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||ve.create(r,n,o)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||ve.create(r,n,o)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||ve.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||ve.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return ve.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return ve.create(r,null,"gregory").eras(t)}static features(){return{relative:Zg(),localeWeek:Hg()}}}function vh(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(le.fromMillis(n).as("days"))}function P$(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=vh(u,l);return(c-c%7)/7}],["days",vh]],i={},o=e;let s,a;for(const[u,l]of n)r.indexOf(u)>=0&&(s=u,i[u]=l(e,t),a=o.plus(i),a>t?(i[u]--,e=o.plus(i),e>t&&(a=e,i[u]--,e=o.plus(i))):e=a);return[e,i,a,s]}function M$(e,t,r,n){let[i,o,s,a]=P$(e,t,r);const u=t-i,l=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(s<t&&(s=i.plus({[a]:1})),s!==i&&(o[a]=(o[a]||0)+u/(s-i)));const c=le.fromObject(o,n);return l.length>0?le.fromMillis(u,n).shiftTo(...l).plus(c):c}const I$="missing Intl.DateTimeFormat.formatToParts support";function pe(e,t=r=>r){return{regex:e,deser:([r])=>t(Av(r))}}const O$=" ",my=`[ ${O$}]`,hy=new RegExp(my,"g");function B$(e){return e.replace(/\./g,"\\.?").replace(hy,my)}function $h(e){return e.replace(/\./g,"").replace(hy," ").toLowerCase()}function Hr(e,t){return e===null?null:{regex:RegExp(e.map(B$).join("|")),deser:([r])=>e.findIndex(n=>$h(r)===$h(n))+t}}function Dh(e,t){return{regex:e,deser:([,r,n])=>hl(r,n),groups:t}}function ru(e){return{regex:e,deser:([t])=>t}}function R$(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function L$(e,t){const r=Zr(t),n=Zr(t,"{2}"),i=Zr(t,"{3}"),o=Zr(t,"{4}"),s=Zr(t,"{6}"),a=Zr(t,"{1,2}"),u=Zr(t,"{1,3}"),l=Zr(t,"{1,6}"),c=Zr(t,"{1,9}"),d=Zr(t,"{2,4}"),f=Zr(t,"{4,6}"),m=F=>({regex:RegExp(R$(F.val)),deser:([C])=>C,literal:!0}),b=(F=>{if(e.literal)return m(F);switch(F.val){case"G":return Hr(t.eras("short"),0);case"GG":return Hr(t.eras("long"),0);case"y":return pe(l);case"yy":return pe(d,md);case"yyyy":return pe(o);case"yyyyy":return pe(f);case"yyyyyy":return pe(s);case"M":return pe(a);case"MM":return pe(n);case"MMM":return Hr(t.months("short",!0),1);case"MMMM":return Hr(t.months("long",!0),1);case"L":return pe(a);case"LL":return pe(n);case"LLL":return Hr(t.months("short",!1),1);case"LLLL":return Hr(t.months("long",!1),1);case"d":return pe(a);case"dd":return pe(n);case"o":return pe(u);case"ooo":return pe(i);case"HH":return pe(n);case"H":return pe(a);case"hh":return pe(n);case"h":return pe(a);case"mm":return pe(n);case"m":return pe(a);case"q":return pe(a);case"qq":return pe(n);case"s":return pe(a);case"ss":return pe(n);case"S":return pe(u);case"SSS":return pe(i);case"u":return ru(c);case"uu":return ru(a);case"uuu":return pe(r);case"a":return Hr(t.meridiems(),0);case"kkkk":return pe(o);case"kk":return pe(d,md);case"W":return pe(a);case"WW":return pe(n);case"E":case"c":return pe(r);case"EEE":return Hr(t.weekdays("short",!1),1);case"EEEE":return Hr(t.weekdays("long",!1),1);case"ccc":return Hr(t.weekdays("short",!0),1);case"cccc":return Hr(t.weekdays("long",!0),1);case"Z":case"ZZ":return Dh(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return Dh(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return ru(/[a-z_+-/]{1,256}?/i);case" ":return ru(/[^\S\n\r]/);default:return m(F)}})(e)||{invalidReason:I$};return b.token=e,b}const j$={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function U$(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const o=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=j$[s];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function _$(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function V$(e,t,r){const n=e.match(t);if(n){const i={};let o=1;for(const s in r)if(_o(r,s)){const a=r[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(o,o+u))),o+=u}return[n,i]}else return[n,{}]}function W$(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return H(e.z)||(r=_n.create(e.z)),H(e.Z)||(r||(r=new qt(e.Z)),n=e.Z),H(e.q)||(e.M=(e.q-1)*3+1),H(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),H(e.u)||(e.S=af(e.u)),[Object.keys(e).reduce((o,s)=>{const a=t(s);return a&&(o[a]=e[s]),o},{}),r,n]}let lc=null;function z$(){return lc||(lc=J.fromMillis(1555555555555)),lc}function q$(e,t){if(e.literal)return e;const r=Lt.macroTokenToFormatOpts(e.val),n=by(r,t);return n==null||n.includes(void 0)?e:n}function py(e,t){return Array.prototype.concat(...e.map(r=>q$(r,t)))}class gy{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=py(Lt.parseFormat(r),t),this.units=this.tokens.map(n=>L$(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=_$(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=V$(t,this.regex,this.handlers),[i,o,s]=n?W$(n):[null,null,void 0];if(_o(n,"a")&&_o(n,"H"))throw new Eo("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function yy(e,t,r){return new gy(e,r).explainFromTokens(t)}function K$(e,t,r){const{result:n,zone:i,specificOffset:o,invalidReason:s}=yy(e,t,r);return[n,i,o,s]}function by(e,t){if(!e)return null;const n=Lt.create(t,e).dtFormatter(z$()),i=n.formatToParts(),o=n.resolvedOptions();return i.map(s=>U$(s,e,o))}const cc="Invalid DateTime",xh=864e13;function Us(e){return new Xr("unsupported zone",`the zone "${e.name}" is not supported`)}function dc(e){return e.weekData===null&&(e.weekData=ju(e.c)),e.weekData}function fc(e){return e.localWeekData===null&&(e.localWeekData=ju(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Si(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new J({...r,...t,old:r})}function wy(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const o=r.offset(n);return i===o?[n,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function nu(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function xu(e,t,r){return wy(ml(e),t,r)}function Ah(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:n,month:i,day:Math.min(e.c.day,Uu(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=le.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=ml(o);let[u,l]=wy(a,r,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function bo(e,t,r,n,i,o){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=J.fromObject(e,{...r,zone:u,specificOffset:o});return s?l:l.setZone(a)}else return J.invalid(new Xr("unparsable",`the input "${i}" can't be parsed as ${n}`))}function iu(e,t,r=!0){return e.isValid?Lt.create(ve.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function mc(e,t,r){const n=e.c.year>9999||e.c.year<0;let i="";if(n&&e.c.year>=0&&(i+="+"),i+=ot(e.c.year,n?6:4),r==="year")return i;if(t){if(i+="-",i+=ot(e.c.month),r==="month")return i;i+="-"}else if(i+=ot(e.c.month),r==="month")return i;return i+=ot(e.c.day),i}function Eh(e,t,r,n,i,o,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=ot(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=ot(e.c.minute),s==="minute")break;a&&(u+=":",u+=ot(e.c.second))}else{if(u+=ot(e.c.minute),s==="minute")break;a&&(u+=ot(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(u+=".",u+=ot(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?u+="Z":e.o<0?(u+="-",u+=ot(Math.trunc(-e.o/60)),u+=":",u+=ot(Math.trunc(-e.o%60))):(u+="+",u+=ot(Math.trunc(e.o/60)),u+=":",u+=ot(Math.trunc(e.o%60)))),o&&(u+="["+e.zone.ianaName+"]"),u}const vy={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},G$={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Z$={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Au=["year","month","day","hour","minute","second","millisecond"],H$=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],J$=["year","ordinal","hour","minute","second","millisecond"];function Eu(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new vg(e);return t}function Ch(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Eu(e)}}function Y$(e){if(_s===void 0&&(_s=_e.now()),e.type!=="iana")return e.offset(_s);const t=e.name;let r=hd.get(t);return r===void 0&&(r=e.offset(_s),hd.set(t,r)),r}function kh(e,t){const r=ii(t.zone,_e.defaultZone);if(!r.isValid)return J.invalid(Us(r));const n=ve.fromObject(t);let i,o;if(H(e.year))i=_e.now();else{for(const u of Au)H(e[u])&&(e[u]=vy[u]);const s=Kg(e)||Gg(e);if(s)return J.invalid(s);const a=Y$(r);[i,o]=xu(e,a,r)}return new J({ts:i,zone:r,loc:n,o})}function Fh(e,t,r){const n=H(r.round)?!0:r.round,i=H(r.rounding)?"trunc":r.rounding,o=(a,u)=>(a=uf(a,n||r.calendary?0:2,r.calendary?"round":i),t.loc.clone(r).relFormatter(r).format(a,u)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(s(r.unit),r.unit);for(const a of r.units){const u=s(a);if(Math.abs(u)>=1)return o(u,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function Sh(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let _s;const hd=new Map;class J{constructor(t){const r=t.zone||_e.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Xr("invalid input"):null)||(r.isValid?null:Us(r));this.ts=H(t.ts)?_e.now():t.ts;let i=null,o=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,o]=[t.old.c,t.old.o];else{const a=ai(t.o)&&!t.old?t.o:r.offset(this.ts);i=nu(this.ts,a),n=Number.isNaN(i.year)?new Xr("invalid input"):null,i=n?null:i,o=n?null:a}this._zone=r,this.loc=t.loc||ve.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new J({})}static local(){const[t,r]=Sh(arguments),[n,i,o,s,a,u,l]=r;return kh({year:n,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=Sh(arguments),[n,i,o,s,a,u,l]=r;return t.zone=qt.utcInstance,kh({year:n,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=Sv(t)?t.valueOf():NaN;if(Number.isNaN(n))return J.invalid("invalid input");const i=ii(r.zone,_e.defaultZone);return i.isValid?new J({ts:n,zone:i,loc:ve.fromObject(r)}):J.invalid(Us(i))}static fromMillis(t,r={}){if(ai(t))return t<-xh||t>xh?J.invalid("Timestamp out of range"):new J({ts:t,zone:ii(r.zone,_e.defaultZone),loc:ve.fromObject(r)});throw new Bt(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(ai(t))return new J({ts:t*1e3,zone:ii(r.zone,_e.defaultZone),loc:ve.fromObject(r)});throw new Bt("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=ii(r.zone,_e.defaultZone);if(!n.isValid)return J.invalid(Us(n));const i=ve.fromObject(r),o=_u(t,Ch),{minDaysInFirstWeek:s,startOfWeek:a}=fh(o,i),u=_e.now(),l=H(r.specificOffset)?n.offset(u):r.specificOffset,c=!H(o.ordinal),d=!H(o.year),f=!H(o.month)||!H(o.day),m=d||f,$=o.weekYear||o.weekNumber;if((m||c)&&$)throw new Eo("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&c)throw new Eo("Can't mix ordinal dates with month/day");const b=$||o.weekday&&!m;let F,C,S=nu(u,l);b?(F=H$,C=G$,S=ju(S,s,a)):c?(F=J$,C=Z$,S=uc(S)):(F=Au,C=vy);let I=!1;for(const Fr of F){const qr=o[Fr];H(qr)?I?o[Fr]=C[Fr]:o[Fr]=S[Fr]:I=!0}const z=b?Cv(o,s,a):c?kv(o):Kg(o),q=z||Gg(o);if(q)return J.invalid(q);const Ce=b?ch(o,s,a):c?dh(o):o,[Ge,mt]=xu(Ce,l,n),_t=new J({ts:Ge,zone:n,o:mt,loc:i});return o.weekday&&m&&t.weekday!==_t.weekday?J.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${_t.toISO()}`):_t.isValid?_t:J.invalid(_t.invalid)}static fromISO(t,r={}){const[n,i]=b$(t);return bo(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=w$(t);return bo(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=v$(t);return bo(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(H(t)||H(r))throw new Bt("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=n,s=ve.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[a,u,l,c]=K$(s,t,r);return c?J.invalid(c):bo(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return J.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=k$(t);return bo(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Bt("need to specify a reason the DateTime is invalid");const n=t instanceof Xr?t:new Xr(t,r);if(_e.throwOnInvalid)throw new ev(n);return new J({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=by(t,ve.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return py(Lt.parseFormat(t),ve.fromObject(r)).map(i=>i.val).join("")}static resetCache(){_s=void 0,hd.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?dc(this).weekYear:NaN}get weekNumber(){return this.isValid?dc(this).weekNumber:NaN}get weekday(){return this.isValid?dc(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?fc(this).weekday:NaN}get localWeekNumber(){return this.isValid?fc(this).weekNumber:NaN}get localWeekYear(){return this.isValid?fc(this).weekYear:NaN}get ordinal(){return this.isValid?uc(this.c).ordinal:NaN}get monthShort(){return this.isValid?tu.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?tu.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?tu.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?tu.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=ml(this.c),i=this.zone.offset(n-t),o=this.zone.offset(n+t),s=this.zone.offset(n-i*r),a=this.zone.offset(n-o*r);if(s===a)return[this];const u=n-s*r,l=n-a*r,c=nu(u,s),d=nu(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[Si(this,{ts:u}),Si(this,{ts:l})]:[this]}get isInLeapYear(){return Ea(this.year)}get daysInMonth(){return Uu(this.year,this.month)}get daysInYear(){return this.isValid?Po(this.year):NaN}get weeksInWeekYear(){return this.isValid?ia(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?ia(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=Lt.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(qt.instance(t),r)}toLocal(){return this.setZone(_e.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=ii(t,_e.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const o=t.offset(this.ts),s=this.toObject();[i]=xu(s,o,t)}return Si(this,{ts:i,zone:t})}else return J.invalid(Us(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Si(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=_u(t,Ch),{minDaysInFirstWeek:n,startOfWeek:i}=fh(r,this.loc),o=!H(r.weekYear)||!H(r.weekNumber)||!H(r.weekday),s=!H(r.ordinal),a=!H(r.year),u=!H(r.month)||!H(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||s)&&c)throw new Eo("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new Eo("Can't mix ordinal dates with month/day");let d;o?d=ch({...ju(this.c,n,i),...r},n,i):H(r.ordinal)?(d={...this.toObject(),...r},H(r.day)&&(d.day=Math.min(Uu(d.year,d.month),d.day))):d=dh({...uc(this.c),...r});const[f,m]=xu(d,this.o,this.zone);return Si(this,{ts:f,o:m})}plus(t){if(!this.isValid)return this;const r=le.fromDurationLike(t);return Si(this,Ah(this,r))}minus(t){if(!this.isValid)return this;const r=le.fromDurationLike(t).negate();return Si(this,Ah(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=le.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(n.weekNumber=this.weekNumber-1),n.weekday=o}else n.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);n.month=(o-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?Lt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):cc}toLocaleString(t=Lu,r={}){return this.isValid?Lt.create(this.loc.clone(r),t).formatDateTime(this):cc}toLocaleParts(t={}){return this.isValid?Lt.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=Eu(s);const a=t==="extended";let u=mc(this,a,s);return Au.indexOf(s)>=3&&(u+="T"),u+=Eh(this,a,r,n,i,o,s),u}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?mc(this,t==="extended",Eu(r)):null}toISOWeekDate(){return iu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=Eu(a),(i&&Au.indexOf(a)>=3?"T":"")+Eh(this,s==="extended",r,t,n,o,a)):null}toRFC2822(){return iu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return iu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?mc(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),iu(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():cc}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return le.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},o=Nv(r).map(le.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=M$(a,u,o,i);return s?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(J.now(),t,r)}until(t){return this.isValid?He.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(r,n)<=i&&i<=o.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||J.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),Fh(r,this.plus(n),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?Fh(t.base||J.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(J.isDateTime))throw new Bt("min requires all arguments be DateTimes");return mh(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(J.isDateTime))throw new Bt("max requires all arguments be DateTimes");return mh(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:o=null}=n,s=ve.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return yy(s,t,r)}static fromStringExplain(t,r,n={}){return J.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,o=ve.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new gy(o,t)}static fromFormatParser(t,r,n={}){if(H(t)||H(r))throw new Bt("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=n,s=ve.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(r.locale))throw new Bt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?J.invalid(c):bo(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return Lu}static get DATE_MED(){return $g}static get DATE_MED_WITH_WEEKDAY(){return nv}static get DATE_FULL(){return Dg}static get DATE_HUGE(){return xg}static get TIME_SIMPLE(){return Ag}static get TIME_WITH_SECONDS(){return Eg}static get TIME_WITH_SHORT_OFFSET(){return Cg}static get TIME_WITH_LONG_OFFSET(){return kg}static get TIME_24_SIMPLE(){return Fg}static get TIME_24_WITH_SECONDS(){return Sg}static get TIME_24_WITH_SHORT_OFFSET(){return Ng}static get TIME_24_WITH_LONG_OFFSET(){return Tg}static get DATETIME_SHORT(){return Pg}static get DATETIME_SHORT_WITH_SECONDS(){return Mg}static get DATETIME_MED(){return Ig}static get DATETIME_MED_WITH_SECONDS(){return Og}static get DATETIME_MED_WITH_WEEKDAY(){return iv}static get DATETIME_FULL(){return Bg}static get DATETIME_FULL_WITH_SECONDS(){return Rg}static get DATETIME_HUGE(){return Lg}static get DATETIME_HUGE_WITH_SECONDS(){return jg}}function Fs(e){if(J.isDateTime(e))return e;if(e&&e.valueOf&&ai(e.valueOf()))return J.fromJSDate(e);if(e&&typeof e=="object")return J.fromObject(e);throw new Bt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var $e;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})($e||($e={}));const X$=[$e.Milliseconds,$e.Seconds,$e.Minutes,$e.Hours,$e.Days,$e.Weeks,$e.Months,$e.Years];$e.Milliseconds+"",$e.Seconds+"",$e.Minutes+"",$e.Hours+"",$e.Days+"",$e.Weeks+"",$e.Months+"",$e.Years+"";function Q$(e){return X$.filter(t=>e[t])}function pd(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function e5(e){return pd(Math.max(e-.4,0),{decimalCount:0})}function Nh(e){return e===0?0:Math.sign(e)}function Vo(e,t,r={}){const n={},i={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=Q$(t).reverse();if(o||s)return a.forEach(c=>{n[c]=o?1/0:-1/0}),n;let u=le.fromObject(e).as($e.Milliseconds);const l=Nh(u);return a.forEach((c,d)=>{const f=d===a.length-1;if(c===$e.Milliseconds)n.milliseconds=pd(u,i);else{const m=le.fromObject({milliseconds:u}).as(c),$=Math.sign(m),b=Math.abs(m),F=f?pd(b,i):Math.floor(i.decimalCount==null?b:e5(b)),C=F===0?0:F*$;n[c]=C,u-=le.fromObject({[c]:C}).as($e.Milliseconds),l!==Nh(u)&&(u=0)}}),n}Intl.DateTimeFormat().resolvedOptions().locale;var K;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(K||(K={}));K.Year,K.Hour,K.Minute,K.Second,K.Millisecond;K.Month,K.Week,K.Day;K.Millisecond,K.Second,K.Minute,K.Hour,K.Day,K.Week,K.Month,K.Year;const Th={min:0,max:23},Ph={min:0,max:59},Mh={min:0,max:59},Ih={min:0,max:999};var Rt;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(Rt||(Rt={}));Rt.Sunday+"",Rt.Monday+"",Rt.Tuesday+"",Rt.Wednesday+"",Rt.Thursday+"",Rt.Friday+"",Rt.Saturday+"";Rt.Sunday,Rt.Monday,Rt.Tuesday,Rt.Wednesday,Rt.Thursday,Rt.Friday,Rt.Saturday;var er;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(er||(er={}));er.January,er.February,er.March,er.April,er.May,er.June,er.July,er.August,er.September,er.October,er.November,er.December;const Oh={min:1,max:12},Bh={min:1,max:31};function Ki(e){const t=new Ru,n=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:Vo(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function $y(...e){const t=e.join(""),r=Xd(Array.from(t));return Array.from(r).join("")}function Dy(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function xy(e,t){const r=$y([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Ay(e,r)}function Ay(e,t){const r=$y(t);return typeof e=="string"?new RegExp(Dy(e),r):new RegExp(e.source,r)}function Ey(e,{caseSensitive:t}){const n="".replaceAll("i","");return Ay(e,n)}function ff(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function Cy(e,t){return t?typeof t=="string"?!!new RegExp(Dy(t),"i").exec(e):!!xy(t,"i").exec(e):!1}class p extends Error{name="AssertionError";constructor(t,r){super(as(r,t)||"Assertion failed.")}}const Rh={interval:{milliseconds:100},timeout:{seconds:10}},hc=Symbol("not set");async function t5(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:o,options:s}=r5(t),a=Vo(s.timeout,{milliseconds:!0}).milliseconds,u=Vo(s.interval,{milliseconds:!0});let l=hc,c;async function d(){try{l=r?n():await n(),e(l,...i)}catch(m){l=hc,c=Je(m)}}const f=Date.now();for(;l===hc;)if(await d(),await Ki(u),Date.now()-f>=a){const $=`${o?`${o}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw cl(c,$)}return l}function T(e,t=!1){return((...r)=>t5(e,r,t))}function r5(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:ky(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function ky(e){return{interval:e?.interval||Rh.interval,timeout:e?.timeout||Rh.timeout}}const Ss={isFalse(e,t){if(e!==!1)throw new p(`'${g(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${g(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new p(`'${g(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new p(`'${g(e)}' is not truthy.`,t)}},Fy={assert:Ss,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new p(`'${g(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new p(`'${g(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new p(`'${g(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new p(`'${g(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:T(Ss.isFalse),isFalsy:T(Ss.isFalsy),isTrue:T(Ss.isTrue),isTruthy:T(Ss.isTruthy)}};function n5(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${g(e)} does not end with ${g(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${g(e)} does not end with ${g(t)}}`,r)}function i5(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new p(`${g(e)} ends with ${g(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${g(e)} ends with ${g(t)}}`,r)}function o5(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${g(e)} does not start with ${g(t)}}`,r)}else if(e[0]!==t)throw new p(`${g(e)} does not start with ${g(t)}}`,r)}function s5(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new p(`${g(e)} starts with ${g(t)}}`,r)}else if(e[0]===t)throw new p(`${g(e)} starts with ${g(t)}}`,r)}const Ns={endsWith:n5,endsWithout:i5,startsWith:o5,startsWithout:s5},Sy={assert:Ns,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new p(`${g(e)} does not end with ${g(t)}}`,r)}else if(e[e.length-1]!==t)throw new p(`${g(e)} does not end with ${g(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new p(`${g(e)} ends with ${g(t)}}`,r)}else if(e[e.length-1]===t)throw new p(`${g(e)} ends with ${g(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new p(`${g(e)} does not start with ${g(t)}}`,r)}else if(e[0]!==t)throw new p(`${g(e)} does not start with ${g(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new p(`${g(e)} starts with ${g(t)}}`,r)}else if(e[0]===t)throw new p(`${g(e)} starts with ${g(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:T(Ns.endsWith),endsWithout:T(Ns.endsWithout),startsWith:T(Ns.startsWith),startsWithout:T(Ns.startsWithout)}};function a5(e,t,r){const n=Mr(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function kn(e,t){return Mr(t).includes(e)}const pc={isEnumValue(e,t,r){a5(e,t,r)},isNotEnumValue(e,t,r){const n=Mr(t);if(n.includes(e))throw new p(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},Ny={assert:pc,check:{isEnumValue:kn,isNotEnumValue(e,t){return!Mr(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=Mr(t);if(!n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=Mr(t);if(n.includes(e))throw new p(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(Mr(t).includes(e))return e},isNotEnumValue(e,t){if(!Mr(t).includes(e))return e}},waitUntil:{isEnumValue:T(pc.isEnumValue),isNotEnumValue:T(pc.isNotEnumValue)}},gc={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${g(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${g(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new p(`Entries are not equal at key '${String(i)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))throw new p("Entries are equal.",r)}},Ty={assert:gc,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const i=e[n],o=t[n];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const i=e[n],o=t[n];return i!==o})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new p(`${g(e)} is not an object.`,r);if(!t||typeof t!="object")throw new p(`${g(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new p(`Entries are not equal at key '${String(i)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))return e;throw new p("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:T(gc.entriesEqual),notEntriesEqual:T(gc.notEntriesEqual)}};function Vu(e,t){return JSON.stringify(e)===JSON.stringify(t)}function oa(e,t){if(!(e===t||Vu(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Vu(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{oa(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${Et(s)}`)}})}throw new Error("Values are not JSON equal.")}}function Vs(e,t){if(e===t||Vu(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Vu(r,n)?!1:Object.keys(e).every(o=>Vs(e[o],t[o]))}return!1}const yc={jsonEquals(e,t,r){try{oa(e,t)}catch(n){throw new p(Et(n),r)}},notJsonEquals(e,t,r){try{oa(e,t)}catch{return}throw new p("Values are JSON equal.",r)}},Py={assert:yc,check:{jsonEquals(e,t){return Vs(e,t)},notJsonEquals(e,t){return!Vs(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return oa(e,t),e}catch(n){throw new p(Et(n),r)}},notJsonEquals(e,t,r){try{oa(e,t)}catch{return e}throw new p("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Vs(e,t))return e},notJsonEquals(e,t){if(!Vs(e,t))return e}},waitUntil:{jsonEquals:T(yc.jsonEquals),notJsonEquals:T(yc.notJsonEquals)}};function Lh(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function My(){this._key="chai/deep-eql__"+Math.random()+Date.now()}My.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var Iy=typeof WeakMap=="function"?WeakMap:My;function jh(e,t,r){if(!r||Wo(e)||Wo(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}function ou(e,t,r,n){if(!(!r||Wo(e)||Wo(t))){var i=r.get(e);i?i.set(t,n):(i=new Iy,i.set(t,n),r.set(e,i))}}function Yr(e,t,r){if(r&&r.comparator)return Uh(e,t,r);var n=Oy(e,t);return n!==null?n:Uh(e,t,r)}function Oy(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Wo(e)||Wo(t)?!1:null}function Uh(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new Iy;var n=r&&r.comparator,i=jh(e,t,r.memoize);if(i!==null)return i;var o=jh(t,e,r.memoize);if(o!==null)return o;if(n){var s=n(e,t);if(s===!1||s===!0)return ou(e,t,r.memoize,s),s;var a=Oy(e,t);if(a!==null)return a}var u=Lh(e);if(u!==Lh(t))return ou(e,t,r.memoize,!1),!1;ou(e,t,r.memoize,!0);var l=u5(e,t,u,r);return ou(e,t,r.memoize,l),l}function u5(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return Yr(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return By(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Vi(e,t,n);case"RegExp":return l5(e,t);case"Generator":return c5(e,t,n);case"DataView":return Vi(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Vi(new Uint8Array(e),new Uint8Array(t),n);case"Set":return _h(e,t,n);case"Map":return _h(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return f5(e,t,n)}}function l5(e,t){return e.toString()===t.toString()}function _h(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){i.push([s,a])}),Vi(n.sort(),i.sort(),r)}function Vi(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(Yr(e[i],t[i],r)===!1)return!1;return!0}function c5(e,t,r){return Vi(gd(e),gd(t),r)}function d5(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function Vh(e){if(d5(e))try{return gd(e[Symbol.iterator]())}catch{return[]}return[]}function gd(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function Wh(e){var t=[];for(var r in e)t.push(r);return t}function zh(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function By(e,t,r,n){var i=r.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(Yr(e[r[o]],t[r[o]],n)===!1)return!1;return!0}function f5(e,t,r){var n=Wh(e),i=Wh(t),o=zh(e),s=zh(t);if(n=n.concat(o),i=i.concat(s),n.length&&n.length===i.length)return Vi(qh(n).sort(),qh(i).sort())===!1?!1:By(e,t,n,r);var a=Vh(e),u=Vh(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Vi(a,u,r)):n.length===0&&a.length===0&&i.length===0&&u.length===0}function Wo(e){return e===null||typeof e!="object"}function qh(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class Io extends p{name="DiffError";constructor(t,r,n,i){const o=H2(r,n);super([t,ff(o)].join(`
`),i)}}function ri(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const ei={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${g(t)}

.`,r):new Io("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${g(t)}

.`,r):new p(`

${g(e)}

strictly equals

${g(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${g(t)}

.`,r):new Io("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${g(t)}

.`,r):new p(`

${g(e)}

loosely equals

${g(t)}

`,r)},deepEquals(e,t,r){if(!Yr(e,t,{comparator:ri}))throw new Io("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Yr(e,t,{comparator:ri}))throw new p(`

${g(e)}

deeply equals

${g(t)}

`,r)}},Ry=ei.deepEquals,Ly={assert:ei,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Yr(e,t,{comparator:ri})},notDeepEquals(e,t){return!Yr(e,t,{comparator:ri})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Strict reference equality failed for 

${g(t)}

.`,r):new Io("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new p(`Strict reference INequality failed for 

${g(t)}

.`,r):new p(`

${g(e)}

strictly equals

${g(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new p(`Loose reference equality failed for 

${g(t)}

.`,r):new Io("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new p(`Loose reference INequality failed for 

${g(t)}

.`,r):new p(`

${g(e)}

loosely equals

${g(t)}

`,r);return e},deepEquals(e,t,r){if(Yr(e,t,{comparator:ri}))return e;throw new Io("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Yr(e,t,{comparator:ri}))throw new p(`

${g(e)}

deeply equals

${g(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Yr(e,t,{comparator:ri}))return e},notDeepEquals(e,t){if(!Yr(e,t,{comparator:ri}))return e}},waitUntil:{strictEquals:T(ei.strictEquals),notStrictEquals:T(ei.notStrictEquals),looseEquals:T(ei.looseEquals),notLooseEquals:T(ei.notLooseEquals),deepEquals:T(ei.deepEquals),notDeepEquals:T(ei.notDeepEquals)}};function mr(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function Pr(e,t){return typeof t=="string"?t.includes(e):mr(t,e)}const xn={hasValue(e,t,r){if(!mr(e,t))throw new p(`'${g(e)}' does not have value '${g(t)}'.`,r)},lacksValue(e,t,r){if(mr(e,t))throw new p(`'${g(e)}' has value '${g(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new p(`'${g(e)}' does not have values '${g(t)}'.`,r)}if(n.length)throw new p(`'${g(e)}' does not have values '${g(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new p(`'${g(e)}' has values '${g(n)}'.`,r)},isIn(e,t,r){if(!Pr(e,t))throw new p(`'${g(e)}'

is not in

${g(t)}.`,r)},isNotIn(e,t,r){if(Pr(e,t))throw new p(`'${g(e)}'

is in

${g(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${g(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new p(`'${g(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new p(`'${g(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${g(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${g(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${g(e)}' is not empty.`,t)}}},jy={assert:xn,check:{hasValue(e,t){return mr(e,t)},lacksValue(e,t){return!mr(e,t)},hasValues(e,t){return t.every(r=>mr(e,r))},lacksValues(e,t){return t.every(r=>!mr(e,r))},isIn(e,t){return Pr(e,t)},isNotIn(e,t){return!Pr(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!mr(e,t))throw new p(`'${g(e)}' does not have value '${g(t)}'.`,r);return e},lacksValue(e,t,r){if(mr(e,t))throw new p(`'${g(e)}' has value '${g(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new p(`'${g(e)}' does not have values '${g(t)}'.`,r)}if(n.length)throw new p(`'${g(e)}' does not have values '${g(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new p(`'${g(e)}' has values '${g(n)}'.`,r);return e},isIn(e,t,r){if(!Pr(e,t))throw new p(`'${g(e)}'

is not in

${g(t)}.`,r);return e},isNotIn(e,t,r){if(Pr(e,t))throw new p(`'${g(e)}'

is in

${g(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new p(`'${g(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new p(`'${g(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new p(`'${g(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new p(`'${g(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new p(`'${g(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new p(`'${g(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(mr(e,t))return e},lacksValue(e,t){if(!mr(e,t))return e},hasValues(e,t){if(t.every(r=>mr(e,r)))return e},lacksValues(e,t){if(!t.every(r=>mr(e,r)))return e},isIn(e,t){if(Pr(e,t))return e},isNotIn(e,t){if(!Pr(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:T(xn.hasValue),lacksValue:T(xn.lacksValue),hasValues:T(xn.hasValues),lacksValues:T(xn.lacksValues),isIn:T(xn.isIn),isNotIn:T(xn.isNotIn),isEmpty:T(xn.isEmpty),isNotEmpty:T(xn.isNotEmpty)}},bc={isHttpStatus(e,t){if(!kn(e,A))throw new p(`${g(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(kn(e,A)){if(!Pr(e,Du[t]))throw new p(`${g(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${g(e)} is not a valid HTTP status.`,r)}},Uy={assert:bc,check:{isHttpStatus(e){return kn(e,A)},isHttpStatusCategory(e,t){return kn(e,A)&&Pr(e,Du[t])}},assertWrap:{isHttpStatus(e,t){if(!kn(e,A))throw new p(`${g(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(kn(e,A)){if(!Pr(e,Du[t]))throw new p(`${g(e)} is not a '${t}' HTTP status.`,r)}else throw new p(`${g(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(kn(e,A))return e},isHttpStatusCategory(e,t){if(kn(e,A)&&Pr(e,Du[t]))return e}},waitUntil:{isHttpStatus:T(bc.isHttpStatus),isHttpStatusCategory:T(bc.isHttpStatusCategory)}},wc={instanceOf(e,t,r){if(!(e instanceof t))throw new p(`'${g(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${g(e)}' is an instance of '${t.name}'`,r)}},_y={assert:wc,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new p(`'${g(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new p(`'${g(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:T(wc.instanceOf),notInstanceOf:T(wc.notInstanceOf)}},m5=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Oe(e,t){return m5.some(r=>{try{return r(e,t)}catch{return!1}})}const Ni={isKeyOf(e,t,r){if(!Oe(t,e))throw new p(`'${String(e)}' is not a key of '${g(t)}'.`,r)},isNotKeyOf(e,t,r){if(Oe(t,e))throw new p(`'${String(e)}' is a key of '${g(t)}'.`,r)},hasKey(e,t,r){if(!Oe(e,t))throw new p(`'${g(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(Oe(e,t))throw new p(`'${g(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(i=>!Oe(e,i));if(n.length)throw new p(`'${g(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(i=>Oe(e,i));if(n.length)throw new p(`'${g(e)}' does not lack keys '${n.join(",")}'.`,r)}},Vy={assert:Ni,check:{isKeyOf(e,t){return Oe(t,e)},isNotKeyOf(e,t){return!Oe(t,e)},hasKey:Oe,lacksKey(e,t){return!Oe(e,t)},hasKeys(e,t){return t.every(r=>Oe(e,r))},lacksKeys(e,t){return t.every(r=>!Oe(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!Oe(t,e))throw new p(`'${String(e)}' is not a key of '${g(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(Oe(t,e))throw new p(`'${String(e)}' is a key of '${g(t)}'.`,r);return e},hasKey(e,t,r){if(!Oe(e,t))throw new p(`'${g(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(Oe(e,t))throw new p(`'${g(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(i=>!Oe(e,i));if(n.length)throw new p(`'${g(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(i=>Oe(e,i));if(n.length)throw new p(`'${g(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(Oe(t,e))return e},isNotKeyOf(e,t){if(!Oe(t,e))return e},hasKey(e,t){if(Oe(e,t))return e},lacksKey(e,t){if(!Oe(e,t))return e},hasKeys(e,t){if(t.every(r=>Oe(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!Oe(e,r)))return e}},waitUntil:{isKeyOf:T(Ni.isKeyOf),isNotKeyOf:T(Ni.isNotKeyOf),hasKey:T(Ni.hasKey),lacksKey:T(Ni.lacksKey),hasKeys:T(Ni.hasKeys),lacksKeys:T(Ni.lacksKeys)}};function h5(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r)}function p5(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r)}const vc={isLengthAtLeast:h5,isLengthExactly:p5},Wy={assert:vc,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:We(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:We(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)<t)throw new p(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)!==t)throw new p(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:We(e).length)===t)return e})},waitUntil:{isLengthAtLeast:T(vc.isLengthAtLeast),isLengthExactly:T(vc.isLengthExactly)}},g5={never(e){throw new p("This code should not have executed.",e)}},zy={assert:g5,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},$c={isDefined(e,t){if(e==null)throw new p(`'${g(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new p(`'${g(e)}' is not a nullish.`,t)}},qy={assert:$c,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new p(`'${g(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new p(`'${g(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:T($c.isDefined),isNullish:T($c.isNullish)}},Yt={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${g({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${g({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n)}},Ky={assert:Yt,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new p(`${e} is not within the bounds ${g({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new p(`${e} is not outside the bounds ${g({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new p(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new p(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new p(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new p(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new p(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new p(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new p(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new p(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new p(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new p(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new p(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:T(Yt.isInBounds),isOutBounds:T(Yt.isOutBounds),isInteger:T(Yt.isInteger),isNotInteger:T(Yt.isNotInteger),isAbove:T(Yt.isAbove),isAtLeast:T(Yt.isAtLeast),isBelow:T(Yt.isBelow),isAtMost:T(Yt.isAtMost),isNaN:T(Yt.isNaN),isFinite:T(Yt.isFinite),isInfinite:T(Yt.isInfinite),isApproximately:T(Yt.isApproximately),isNotApproximately:T(Yt.isNotApproximately)}};function y5(e,t,r,n,i){return Fa(...gl(e,t,r,n,i),!1)}function gl(e,t,r,n,i){const o=Array.isArray(r);return[o?e:Ry,o?t:e,o?r:t,o?n:r,o?i:n]}function Fa(e,t,r,n,i,o){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,n),o?a(l):a()}catch(l){u(new p(`Output from '${t.name}' did not produce expected output. ${Et(l)}`,i))}});try{return e(s,n),o?s:void 0}catch(a){throw new p(`Output from '${t.name}' did not produce expected output. ${Et(a)}`,i)}}function b5(e,t,r,n,i){try{const o=Fa(...gl(e,t,r,n,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function w5(e,t,r,n,i){return Fa(...gl(e,t,r,n,i),!0)}function v5(e,t,r,n,i){try{const o=Fa(...gl(e,t,r,n,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const Dc=Symbol("not set");async function $5(e,t,r,n,i,o){const s=Array.isArray(r),a=s?e:Ry,u=s?t:e,l=s?r:t,c=s?n:r,d=ky(s?i:n),f=s?o:i,m=Vo(d.timeout,{milliseconds:!0}).milliseconds,$=Vo(d.interval,{milliseconds:!0});let b=Dc,F;async function C(){try{b=await Fa(a,u,l,c,void 0,!0)}catch(I){b=Dc,F=Je(I)}}const S=Date.now();for(;b===Dc;)if(await C(),await Ki($),Date.now()-S>=m)throw cl(F,as(f,`Timeout of '${m}' milliseconds exceeded waiting for callback value to match expectations`));return b}const D5={output:y5},Gy={assert:D5,check:{output:b5},assertWrap:{output:w5},checkWrap:{output:v5},waitUntil:{output:$5}},Ts={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${g(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${g(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${g(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${g(e)}' is not a Primitive.`,t)}},Zy={assert:Ts,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new p(`'${g(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new p(`'${g(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new p(`'${g(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new p(`'${g(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:T(Ts.isNotPrimitive),isNotPropertyKey:T(Ts.isNotPropertyKey),isPrimitive:T(Ts.isPrimitive),isPropertyKey:T(Ts.isPropertyKey)}},Ps={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${g(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${g(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${g(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${g(e)}' is a Promise.`,t)}},Hy={assert:Ps,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new p(`'${g(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new p(`'${g(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new p(`'${g(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new p(`'${g(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:T(Ps.isPromiseLike,!0),isNotPromiseLike:T(Ps.isNotPromiseLike,!0),isPromise:T(Ps.isPromise,!0),isNotPromise:T(Ps.isNotPromise,!0)}},xc={matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r)}},Jy={assert:xc,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new p(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new p(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:T(xc.matches,!0),mismatches:T(xc.mismatches,!0)}},Ue={isArray(e,t){if(!Array.isArray(e))throw new p(`'${g(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${g(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${g(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new p(`'${g(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new p(`'${g(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${g(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${g(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${g(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new p(`'${g(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${g(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new p(`'${g(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${g(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${g(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${g(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${g(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new p(`'${g(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${g(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${g(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new p(`'${g(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${g(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${g(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${g(e)}' is a undefined.`,t)}},Yy={assert:Ue,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new p(`'${g(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new p(`'${g(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new p(`'${g(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new p(`'${g(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new p(`'${g(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new p(`'${g(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new p(`'${g(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new p(`'${g(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new p(`'${g(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new p(`'${g(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new p(`'${g(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new p(`'${g(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new p(`'${g(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new p(`'${g(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new p(`'${g(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new p(`'${g(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new p(`'${g(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new p(`'${g(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new p(`'${g(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new p(`'${g(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new p(`'${g(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new p(`'${g(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:T(Ue.isArray),isBigInt:T(Ue.isBigInt),isBoolean:T(Ue.isBoolean),isFunction:T(Ue.isFunction),isNull:T(Ue.isNull),isNumber:T(Ue.isNumber),isObject:T(Ue.isObject),isPlainObject:T(Ue.isPlainObject),isString:T(Ue.isString),isSymbol:T(Ue.isSymbol),isUndefined:T(Ue.isUndefined),isNotArray:T(Ue.isNotArray),isNotBigInt:T(Ue.isNotBigInt),isNotBoolean:T(Ue.isNotBoolean),isNotFunction:T(Ue.isNotFunction),isNotNull:T(Ue.isNotNull),isNotNumber:T(Ue.isNotNumber),isNotObject:T(Ue.isNotObject),isNotPlainObject:T(Ue.isNotPlainObject),isNotString:T(Ue.isNotString),isNotSymbol:T(Ue.isNotSymbol),isNotUndefined:T(Ue.isNotUndefined)}};var tr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(tr||(tr={}));function mf(e,t,r){hf(e,{noError:"No error.",notInstance:`'${g(e)}' is not an error instance.`},t,r)}function Kh(e,t,r){hf(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${g(e)}' is not an error instance.`},t,r)}function hf(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new p(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=Et(e);if(typeof r.matchMessage=="string"){if(!Cy(i,r.matchMessage))throw new p(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new p(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new p(t.notInstance,n);else throw new p(t.noError,n)}function Gh(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=Et(e);if(typeof t.matchMessage=="string"){if(!Cy(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function yl(e,t,r,n){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,a)=>{try{await o}catch(u){i=Je(u)}try{Kh(i,r,n),e===tr.Assert?s():e===tr.Check?s(!0):s(i)}catch(u){e===tr.CheckWrap?s(void 0):e===tr.Check?s(!1):a(Je(u))}})}catch(o){i=Je(o)}try{return Kh(i,r,n),e===tr.Check?!0:e!==tr.Assert?i:void 0}catch(o){if(e===tr.CheckWrap)return;if(e===tr.Check)return!1;throw o}}function x5(e,t,r){return yl(tr.Assert,e,t,r)}function A5(e,t){return yl(tr.Check,e,t)}function E5(e,t,r){return yl(tr.AssertWrap,e,t,r)}function C5(e,t,r){return yl(tr.CheckWrap,e,t,r)}const k5=T(mf);function F5(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${g(o)}'`);return k5(i,async()=>{try{await o();return}catch(u){return Je(u)}},a,s)}const S5={throws:x5,isError:mf},Xy={assert:S5,check:{throws:A5,isError(e,t){return Gh(e,t)}},assertWrap:{throws:E5,isError(e,t,r){return hf(e,{noError:"No error.",notInstance:`'${g(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:C5,isError(e,t){if(Gh(e,t))return e}},waitUntil:{throws:F5,isError:T(mf)}},ni=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Ac={isUuid(e,t){if(!String(e).match(ni))throw new p(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(ni))throw new p(`'${String(e)}' is a UUID.`,t)}},Qy={assert:Ac,check:{isUuid(e){return!!String(e).match(ni)},isNotUuid(e){return!String(e).match(ni)}},assertWrap:{isUuid(e,t){if(!String(e).match(ni))throw new p(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(ni))throw new p(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(ni))return e},isNotUuid(e){if(!String(e).match(ni))return e}},waitUntil:{isUuid:T(Ac.isUuid),isNotUuid:T(Ac.isNotUuid)}},N5={...zy.assert,...Fy.assert,...Sy.assert,...Ty.assert,...Ny.assert,...Uy.assert,..._y.assert,...Py.assert,...Vy.assert,...Wy.assert,...qy.assert,...Ky.assert,...Gy.assert,...Zy.assert,...Hy.assert,...Jy.assert,...Yy.assert,...Ly.assert,...Xy.assert,...Qy.assert,...jy.assert},pf=[Fy,Sy,Ty,Ny,Uy,_y,Py,Vy,Wy,zy,qy,Ky,Gy,Zy,Hy,Jy,Yy,Ly,Xy,Qy,jy],T5=Object.assign({},...pf.map(e=>e.check)),E=Object.assign(function(t){return!!t},T5);function P5(e,t,r){return Cu(e,t,r,new Set)}function Cu(e,t,r,n){if(e=Zh(e),t=Zh(t),E.isObject(e)&&E.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Cu(We(e).sort(),We(t).sort(),r,n))return!1;let i=!1;const o=We(e).map(s=>{const a=Cu(e[s],t[s],r,n);return E.isPromise(a)&&(i=!0),a});return Hh(i,o)}else if(E.isArray(e)&&E.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,a)=>{const u=Cu(s,t[a],r,n);return E.isPromise(u)&&(i=!0),u});return Hh(i,o)}else return r(e,t)}function Zh(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Hh(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(E.isTrue))}catch(i){n(Je(i))}}):t.every(E.isTrue)}const M5=Object.assign({},...pf.map(e=>e.assertWrap)),nn=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r);return t},M5);function I5(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const O5={tsType:I5},B5={assert:O5},R5={fail:e=>{throw new p("Failure triggered.",e)}},L5={...B5.assert,...N5,...R5},Dt=Object.assign(function(t,r){if(!t)throw new p("Assertion failed.",r)},L5),j5=Object.assign({},...pf.map(e=>e.checkWrap)),e1=Object.assign(function(t){if(t)return t},j5);function U5(e,t){return E.hasKey(e,"entryType")&&e.entryType===t}function Ti(e,t){return e.controlType===t}var G;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(G||(G={}));const t1=Symbol("any-type"),_5={[G.Checkbox]:!1,[G.Color]:"",[G.Custom]:void 0,[G.Dropdown]:"",[G.Hidden]:t1,[G.Number]:0,[G.Text]:""};function V5(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{if(i.controlType===G.Custom)return;const o=_5[i.controlType];o!==t1&&(typeof o!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function W5(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return E.isPromise(i)?new Promise(async(o,s)=>{try{const a=await i;e.set(n,a),o(a)}catch(a){s(Je(a))}}):(e.set(n,i),i)}}function to(e,t,r){if(t in e)return e[t];{const n=r();return E.isPromise(n)?new Promise(async(i,o)=>{try{const s=await n;e[t]=s,i(s)}catch(s){o(Je(s))}}):(e[t]=n,n)}}function Gi(e){return We(e).map(t=>[t,e[t]])}function sa(e){return Object.fromEntries(e)}function qn(e,t,r){return e.reduce((n,i,o,s)=>{const a=t(i,o,s);return r(a,i,o,s)&&n.push(a),n},[])}function z5(e,t,r={}){return e.reduce((n,i,o,s)=>{const a=t(i,o,s);return to(n,a,()=>[]).push(i),n},{})}function bl(e,t,r={}){try{let n=!1;const i=e.map((o,s,a)=>{const u=t(o,s,a);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(E.isTruthy);return n?new Promise(async(o,s)=>{try{const a=qn(await Promise.all(i),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},E.isTruthy);o(sa(a))}catch(a){s(Je(a))}}):sa(i)}catch(n){throw Je(n)}}function q5(e){return Object.entries(e).reverse().filter(([,t])=>t.length).reduce((t,[r,n])=>(t.length||(t=[{}]),n.flatMap(i=>t.map(o=>({...o,[r]:i})))),[])}function K5(e){return Array.isArray(e)?e:[e]}function G5({min:e,max:t}){const{min:r,max:n}=rf({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/i)*i,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,f)=>c+d*256**f,0);while(l>=a);return r+l%i}const Jh=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Wi(e=16){let t="";for(let r=0;r<e;r++){const n=G5({min:0,max:Jh.length-1});t+=Jh[n]}return t}function r1(e){if(E.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Et(t).trim()).join(`
`))}function Z5(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):E.hasKey(t,"fallbackValue")?t.fallbackValue:Je(n)):r}catch(r){return t.handleError?t.handleError(r):E.hasKey(t,"fallbackValue")?t.fallbackValue:Je(r)}}function H5(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const J5="modulepreload",Y5=function(e){return"/vira/book/"+e},Yh={},Wu=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){let u=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");i=u(r.map(l=>{if(l=Y5(l),l in Yh)return;Yh[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":J5,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,$)=>{f.addEventListener("load",m),f.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};var ht;(function(e){e.Standard="stdout",e.Error="stderr"})(ht||(ht={}));var ne;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(ne||(ne={}));async function X5(){return await wg({async[tn.Node](){const e=(await Wu(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[ne.Bold]:e.bold.open,[ne.Debug]:e.blueBright.open,[ne.Error]:e.red.open,[ne.Faint]:e.gray.open,[ne.Info]:e.cyan.open,[ne.Mutate]:e.magenta.open,[ne.NormalWeight]:"\x1B[22m",[ne.Plain]:"",[ne.Reset]:e.reset.open,[ne.Success]:e.green.open,[ne.Warning]:e.yellow.open}},[tn.Web](){return Promise.resolve({[ne.Bold]:"font-weight: bold",[ne.Debug]:"color: blue",[ne.Error]:"color: red",[ne.Faint]:"color: grey",[ne.Info]:"color: teal",[ne.Mutate]:"color: magenta",[ne.NormalWeight]:"",[ne.Plain]:"",[ne.Reset]:"",[ne.Success]:"color: green",[ne.Warning]:"color: orange"})}})}const fr=await X5(),Q5={[ne.Bold]:{colors:[fr.bold],logType:ht.Standard},[ne.Debug]:{colors:[fr.debug],logType:ht.Standard},[ne.Faint]:{colors:[fr.faint],logType:ht.Standard},[ne.Info]:{colors:[fr.info],logType:ht.Standard},[ne.Mutate]:{colors:[fr.mutate,fr.bold],logType:ht.Standard},[ne.NormalWeight]:{colors:[fr.normalWeight],logType:ht.Standard},[ne.Plain]:{colors:[],logType:ht.Standard},[ne.Reset]:{colors:[fr.reset],logType:ht.Standard},[ne.Success]:{colors:[fr.success,fr.bold],logType:ht.Standard},[ne.Error]:{colors:[fr.error,fr.bold],logType:ht.Error},[ne.Warning]:{colors:[fr.warning],logType:ht.Error}};function sr({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Oo({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function eD(e,t){try{let r=!1;const n=Gi(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(E.isTruthy);return r?new Promise(async(i,o)=>{try{const s=qn(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},E.isTruthy);i(sa(s))}catch(s){o(Je(s))}}):sa(n)}catch(r){throw Je(r)}}function tD(e,t){return eD(e,(r,n)=>{const i=n,o=t(n,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function n1(e,...t){const r={...e};return t.forEach(n=>{n&&Gi(n).forEach(([i,o])=>{o!=null&&(r[i]=o)})}),r}function rD(e){return e.replace(/,/g,"")}function nD(e){return typeof e=="number"?e:Number(typeof e=="string"?rD(e):e)}function iD(e){const t=oD(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function oD(e){const t=nD(e);if(!isNaN(t))return t}const i1="px";function aa(e){return gf({value:e,suffix:i1})}function sD(e){return iD(o1({value:e,suffix:i1}))}function gf({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function o1({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function aD(){return await wg({async[tn.Node](){const{inspect:e}=await Wu(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),i.join(`
`),n.omitColors?"":n.colorConfig[ne.Reset].colors.join("")].join(""),css:void 0}}},[tn.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:qn(r.colorConfig[t].colors,s=>o1({value:s,suffix:";"}),E.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?Et(s):g(s)).join(`
`),r.omitColors?"":r.colorConfig[ne.Reset].colors.join("")].join(""),css:n}}}})}const uD=await aD(),lD={colorConfig:Q5,omitColors:!1},cD=s1({[ht.Error](){},[ht.Standard](){}});function s1(e,t){const r=n1(lD,t);function n(o){e[r.colorConfig[o.colorKey].logType](uD({...o,options:r}))}const i=tD(ne,o=>(...s)=>n({args:s,colorKey:o}));return{...i,if(o){return o?i:cD}}}const dD=tf(tn.Node)?{[ht.Error]({text:e}){process.stderr.write(e+`
`)},[ht.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[ht.Error]({text:e,css:t}){console.error(sr({value:e,prefix:"%c"}),t)},[ht.Standard]({text:e,css:t}){console.log(sr({value:e,prefix:"%c"}),t)}},yf=s1(dD);function fD(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}function mD(e,{digits:t}){const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function hD({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const i=xy(Ey(t,{caseSensitive:r}),"g"),o=[];return e.replace(i,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);o.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),o}function pD(e,t,{caseSensitive:r}){const n=hD({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),i=Ey(t,{caseSensitive:r});return e.split(i).reduce((s,a,u)=>{const l=n[u],c=s.concat(a);if(l){const d=e.slice(l.index,l.index+l.length);return c.concat(d)}else return c},[])}function gD(e,t){return e.split(t)}function Xh(e,t){const{min:r,max:n}=rf(t);if(t.takeOverflow){const i=n-r+1,o=(e-r)%i;return o<0?r+i+o:r+o}else return e>n?r:e<r?n:e}function Zt(e,t){let r=!1;const n=We(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(r=!0),i[o]=s,i},{});return r?new Promise(async(i,o)=>{try{await Promise.all(We(n).map(async s=>{const a=await n[s];n[s]=a})),i(n)}catch(s){o(Je(s))}}):n}function wl(e,t){const r=Gi(e).filter(([n,i])=>t(n,i,e));return sa(r)}function yD(e,t){return wl(e,r=>!t.includes(r))}function bD(e,t){return wl(e,r=>t.includes(r))}function yd(e){return We(e).map(t=>e[t])}function a1(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var Vn;(function(e){e.Upper="upper",e.Lower="lower"})(Vn||(Vn={}));const wD={firstLetterCase:Vn.Lower};function vD(e,t){if(!e.length)return"";const r=e[0];return(t===Vn.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function $D(e){return e.toLowerCase()!==e.toUpperCase()}function Qh(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if($D(n)){if(t===Vn.Upper&&n!==n.toUpperCase()||t===Vn.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}function DD(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""}),i=n1(wD,t);return vD(n,i.firstLetterCase)}function xD(e){return e.split("").reduce((r,n,i,o)=>{const s=i>0&&o[i-1]||"",a=i<o.length-1&&o[i+1]||"",u=Qh(s,Vn.Lower,{rejectNoCaseCharacters:!0})||Qh(a,Vn.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!u?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function AD(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function ED({value:e,wrapper:t}){return sr({value:gf({value:e,suffix:t}),prefix:t})}function cn(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function bf(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class CD{listeners={};universalListeners=new Map;getListenerCount(){return yd(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function i(o,s){r.once&&n(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const i=E.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(r)||!1;function s(a,u){n.once&&o(),r(a,u)}return to(this.listeners,i,()=>new Map).set(r,{listener:s,removeListener:o}),o}removeListener(t,r){const n=E.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const o=i.get(r);return o?o.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=yd(this.listeners).reduce((n,i)=>{const o=i.size||0;return i.clear(),n+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class wf extends CD{}function vf(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function bd(e,t,r){return vf(globalThis,e,t,r)}function $f(e,t){return ua(e.title),e.parent?[...$f(e.parent),ua(e.parent.title)].concat([]):[]}function ua(e){return a1(e).toLowerCase().replaceAll(/\s/g,"-")}function kD({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const FD=/[/?#&=]/;function u1(e){const t=e.match(FD);return e.trim()?ua(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const SD={[St.ElementExample]:()=>[],[St.Page]:e=>[u1(e.title),...V5(e.controls,e.title)].filter(E.isTruthy),[St.Root]:()=>[]},zu="_isBookTreeNode",l1=new Map;function ND(e){return l1.get(e)}function TD(e,t){W5(l1,e,()=>t)}function Bo(e,t){return c1(e)&&e.entry.entryType===t}function c1(e){return!!(E.hasKeys(e,[zu,"entry"])&&e[zu])}function PD(){return{[zu]:!0,entry:{entryType:St.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function MD({entries:e,debug:t}){const r=ND(e);if(r)return r;const n=PD();e.forEach(s=>Df({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const i=d1(n),o={tree:n,flattenedNodes:i};return TD(e,o),t&&console.info("element-book tree:",n),o}function ID(e,t,r){if(!t.parent)return e;const n=wd(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Df({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=wd(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${$f(t).join(" > ")}`);return i}function Df({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=SD[t.entryType](t);t.errors.push(...i);const o=ID(e,t,r),s=ua(t.title),a=o.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[zu]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};o.children[s]=u,U5(t,St.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Df({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function wd(e,t){const r=c1(e)?e.fullUrlBreadcrumbs.slice(0,-1):$f(e);return r.length?r.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function d1(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>d1(i));return[e,...r].flat()}function xf(e,t){return Af(e,["",...t],void 0)}function Af(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const o=e.children[i||""],s=o&&Af(o,n,r);return{...e.controls,...s}}function OD(e,t,r){const n={...e};return Af(n,["",...t],r),n}function f1(e,t){const r=t?.controls||(Bo(e,St.Page)?Zt(e.entry.controls,(i,o)=>o.initValue):{});return{children:Zt(e.children,(i,o)=>f1(o,t?.children?.[o.urlBreadcrumb])),controls:r}}function me(e){const t={...e,entryType:St.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const i={...n,isVertical:t.useVerticalExamples,entryType:St.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),u1(n.title)].filter(E.isTruthy)};r.add(n.title),t.elementExamples[ua(i.title)]=i}}),t}var rr;(function(e){e.Search="search",e.Book="book"})(rr||(rr={}));function vd(e){return e[0]===rr.Book?"":e[1]?decodeURIComponent(e[1]):""}const zo={hash:void 0,paths:[rr.Book],search:void 0};const ku=globalThis,Ef=ku.ShadowRoot&&(ku.ShadyCSS===void 0||ku.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Cf=Symbol(),e0=new WeakMap;let m1=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Cf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ef&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=e0.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&e0.set(r,t))}return t}toString(){return this.cssText}};const Fe=e=>new m1(typeof e=="string"?e:e+"",void 0,Cf),Fu=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new m1(r,e,Cf)},BD=(e,t)=>{if(Ef)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=ku.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},t0=Ef?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Fe(r)})(e):e;const{is:RD,defineProperty:LD,getOwnPropertyDescriptor:jD,getOwnPropertyNames:UD,getOwnPropertySymbols:_D,getPrototypeOf:VD}=Object,vl=globalThis,r0=vl.trustedTypes,WD=r0?r0.emptyScript:"",zD=vl.reactiveElementPolyfillSupport,Hs=(e,t)=>e,qu={toAttribute(e,t){switch(t){case Boolean:e=e?WD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},kf=(e,t)=>!RD(e,t),n0={attribute:!0,type:String,converter:qu,reflect:!1,useDefault:!1,hasChanged:kf};Symbol.metadata??=Symbol("metadata"),vl.litPropertyMetadata??=new WeakMap;let Ao=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=n0){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&LD(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:o}=jD(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??n0}static _$Ei(){if(this.hasOwnProperty(Hs("elementProperties")))return;const t=VD(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Hs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Hs("properties"))){const r=this.properties,n=[...UD(r),..._D(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(t0(i))}else t!==void 0&&r.push(t0(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return BD(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const o=(n.converter?.toAttribute!==void 0?n.converter:qu).toAttribute(r,n.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:qu;this._$Em=i;const a=s.fromAttribute(r,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,r,n,i=!1,o){if(t!==void 0){const s=this.constructor;if(i===!1&&(o=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??kf)(o,r)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,o]of n){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Ao.elementStyles=[],Ao.shadowRootOptions={mode:"open"},Ao[Hs("elementProperties")]=new Map,Ao[Hs("finalized")]=new Map,zD?.({ReactiveElement:Ao}),(vl.reactiveElementVersions??=[]).push("2.1.2");const Ff=globalThis,i0=e=>e,Ku=Ff.trustedTypes,o0=Ku?Ku.createPolicy("lit-html",{createHTML:e=>e}):void 0,h1="$lit$",oi=`lit$${Math.random().toFixed(9).slice(2)}$`,p1="?"+oi,qD=`<${p1}>`,Zi=document,la=()=>Zi.createComment(""),ca=e=>e===null||typeof e!="object"&&typeof e!="function",Sf=Array.isArray,KD=e=>Sf(e)||typeof e?.[Symbol.iterator]=="function",Ec=`[ 	
\f\r]`,Ms=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,s0=/-->/g,a0=/>/g,Pi=RegExp(`>|${Ec}(?:([^\\s"'>=/]+)(${Ec}*=${Ec}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),u0=/'/g,l0=/"/g,g1=/^(?:script|style|textarea|title)$/i,GD=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ZD=GD(1),wr=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),c0=new WeakMap,ji=Zi.createTreeWalker(Zi,129);function y1(e,t){if(!Sf(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return o0!==void 0?o0.createHTML(t):t}const HD=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=Ms;for(let a=0;a<r;a++){const u=e[a];let l,c,d=-1,f=0;for(;f<u.length&&(s.lastIndex=f,c=s.exec(u),c!==null);)f=s.lastIndex,s===Ms?c[1]==="!--"?s=s0:c[1]!==void 0?s=a0:c[2]!==void 0?(g1.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Pi):c[3]!==void 0&&(s=Pi):s===Pi?c[0]===">"?(s=i??Ms,d=-1):c[1]===void 0?d=-2:(d=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?Pi:c[3]==='"'?l0:u0):s===l0||s===u0?s=Pi:s===s0||s===a0?s=Ms:(s=Pi,i=void 0);const m=s===Pi&&e[a+1].startsWith("/>")?" ":"";o+=s===Ms?u+qD:d>=0?(n.push(l),u.slice(0,d)+h1+u.slice(d)+oi+m):u+oi+(d===-2?a:m)}return[y1(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class da{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=t.length-1,u=this.parts,[l,c]=HD(t,r);if(this.el=da.createElement(l,n),ji.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=ji.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(h1)){const f=c[s++],m=i.getAttribute(d).split(oi),$=/([.?@])?(.*)/.exec(f);u.push({type:1,index:o,name:$[2],strings:m,ctor:$[1]==="."?YD:$[1]==="?"?XD:$[1]==="@"?QD:$l}),i.removeAttribute(d)}else d.startsWith(oi)&&(u.push({type:6,index:o}),i.removeAttribute(d));if(g1.test(i.tagName)){const d=i.textContent.split(oi),f=d.length-1;if(f>0){i.textContent=Ku?Ku.emptyScript:"";for(let m=0;m<f;m++)i.append(d[m],la()),ji.nextNode(),u.push({type:2,index:++o});i.append(d[f],la())}}}else if(i.nodeType===8)if(i.data===p1)u.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(oi,d+1))!==-1;)u.push({type:7,index:o}),d+=oi.length-1}o++}}static createElement(t,r){const n=Zi.createElement("template");return n.innerHTML=t,n}}function qo(e,t,r=e,n){if(t===wr)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const o=ca(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=qo(e,i._$AS(e,t.values),i,n)),t}class JD{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??Zi).importNode(r,!0);ji.currentNode=i;let o=ji.nextNode(),s=0,a=0,u=n[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new fs(o,o.nextSibling,this,t):u.type===1?l=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(l=new ex(o,this,t)),this._$AV.push(l),u=n[++a]}s!==u?.index&&(o=ji.nextNode(),s++)}return ji.currentNode=Zi,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class fs{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=qo(this,t,r),ca(t)?t===Y||t==null||t===""?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==wr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):KD(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&ca(this._$AH)?this._$AA.nextSibling.data=t:this.T(Zi.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=da.createElement(y1(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const o=new JD(i,this),s=o.u(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(t){let r=c0.get(t.strings);return r===void 0&&c0.set(t.strings,r=new da(t)),r}k(t){Sf(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new fs(this.O(la()),this.O(la()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=i0(t).nextSibling;i0(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class $l{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,o){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Y}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=qo(this,t,r,0),s=!ca(t)||t!==this._$AH&&t!==wr,s&&(this._$AH=t);else{const a=t;let u,l;for(t=o[0],u=0;u<o.length-1;u++)l=qo(this,a[n+u],r,u),l===wr&&(l=this._$AH[u]),s||=!ca(l)||l!==this._$AH[u],l===Y?t=Y:t!==Y&&(t+=(l??"")+o[u+1]),this._$AH[u]=l}s&&!i&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class YD extends $l{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class XD extends $l{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class QD extends $l{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){if((t=qo(this,t,r,0)??Y)===wr)return;const n=this._$AH,i=t===Y&&n!==Y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==Y&&(n===Y||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ex{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){qo(this,t)}}const tx={I:fs},rx=Ff.litHtmlPolyfillSupport;rx?.(da,fs),(Ff.litHtmlVersions??=[]).push("3.3.2");const nx=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const o=r?.renderBefore??null;n._$litPart$=i=new fs(t.insertBefore(la(),o),o,void 0,r??{})}return i._$AI(e),i};const Nf=globalThis;let Js=class extends Ao{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nx(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return wr}};Js._$litElement$=!0,Js.finalized=!0,Nf.litElementHydrateSupport?.({LitElement:Js});const ix=Nf.litElementPolyfillSupport;ix?.({LitElement:Js});(Nf.litElementVersions??=[]).push("4.2.2");function Ur(e){if(E.isObject(e))return Zt(e,(r,n)=>{if(!E.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(xD(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const o=n,s=r.startsWith("--")?Fe(r):r.startsWith("-")?Fu`-${Fe(r)}`:Fu`--${Fe(r)}`;return{name:s,value:Fu`var(${s}, ${Fe(o)})`,default:String(o)}});throw new TypeError(`Invalid setup input for '${Ur.name}' function.`)}function b1({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function ox({onElement:e,forCssVar:t,includeCascade:r}){return(r?globalThis.getComputedStyle(e):e.style).getPropertyValue(String(t.name)).trim()}const ye=Ur({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),sx={nav:{hover:{background:ye["element-book-nav-hover-background-color"],foreground:ye["element-book-nav-hover-foreground-color"]},active:{background:ye["element-book-nav-active-background-color"],foreground:ye["element-book-nav-active-foreground-color"]},selected:{background:ye["element-book-nav-selected-background-color"],foreground:ye["element-book-nav-selected-foreground-color"]}},accent:{icon:ye["element-book-accent-icon-color"]},page:{background:ye["element-book-page-background-color"],backgroundFaint1:ye["element-book-page-background-faint-level-1-color"],backgroundFaint2:ye["element-book-page-background-faint-level-2-color"],foreground:ye["element-book-page-foreground-color"],foregroundFaint1:ye["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:ye["element-book-page-foreground-faint-level-2-color"]}};function ax(e,t){w1(e,t,sx)}function $d(e){return E.hasKey(e,"_$cssResult$")}function d0(e){return E.hasKeys(e,["name","value","default"])&&E.isString(e.default)&&$d(e.name)&&$d(e.value)}function w1(e,t,r){Object.entries(t).forEach(([n,i])=>{const o=r[n];if(!o)throw new Error(`no nestedCssVar at key '${n}'`);if($d(i)){if(!d0(o))throw new Error(`got a CSS result at '${n}' but no CSS var`);b1({forCssVar:o,onElement:e,toValue:String(i)})}else{if(d0(o))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);w1(e,i,o)}})}function Re(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,i=t[0].map((s,a)=>t.map(u=>u[a])),o=e.map(s=>i.map(a=>{let u=0;if(!Array.isArray(s)){for(let l of a)u+=s*l;return u}for(let l=0;l<s.length;l++)u+=s[l]*(a[l]||0);return u}));return r===1&&(o=o[0]),n===1?o.map(s=>s[0]):o}function Sa(e){return ui(e)==="string"}function ui(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Gu(e,{precision:t,unit:r}){return di(e)?"none":v1(e,t)+(r??"")}function di(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function st(e){return di(e)?0:e}function v1(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}const ux={deg:1,grad:.9,rad:180/Math.PI,turn:360};function $1(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let o=e.match(t);if(o){let s=[];return o[2].replace(i,(a,u)=>{let l=u.match(n),c=u;if(l){let d=l[0],f=c.slice(0,-d.length);d==="%"?(c=new Number(f/100),c.type="<percentage>"):(c=new Number(f*ux[d]),c.type="<angle>",c.unit=d)}else r.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),s.push(c)}),{name:o[1].toLowerCase(),rawName:o[1],rawArgs:o[2],args:s}}}function D1(e){return e[e.length-1]}function fa(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function x1(e,t,r){return(r-e)/(t-e)}function Tf(e,t,r){return fa(t[0],t[1],x1(e[0],e[1],r))}function A1(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let i=new String(n[1]);return i.range=[+n[2],+n[3]],i}return r}))}function E1(e,t,r){return Math.max(Math.min(r,t),e)}function Dl(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function hn(e,t){return Dl(Math.abs(e)**t,e)}function Pf(e,t){return t===0?0:e/t}function C1(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}var lx=Object.freeze({__proto__:null,bisectLeft:C1,clamp:E1,copySign:Dl,interpolate:fa,interpolateInv:x1,isNone:di,isString:Sa,last:D1,mapRange:Tf,multiplyMatrices:Re,parseCoordGrammar:A1,parseFunction:$1,serializeNumber:Gu,skipNone:st,spow:hn,toPrecision:v1,type:ui,zdiv:Pf});class cx{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const fi=new cx;var vr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const Kt={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Dd(e){return Array.isArray(e)?e:Kt[e]}function Zu(e,t,r,n={}){if(e=Dd(e),t=Dd(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(fi.run("chromatic-adaptation-start",i),i.M||(i.W1===Kt.D65&&i.W2===Kt.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Kt.D50&&i.W2===Kt.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),fi.run("chromatic-adaptation-end",i),i.M)return Re(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const dx=new Set(["<number>","<percentage>","<angle>"]);function f0(e,t,r,n){return Object.entries(e.coords).map(([o,s],a)=>{let u=t.coordGrammar[a],l=n[a],c=l?.type,d;if(l.none?d=u.find($=>dx.has($)):d=u.find($=>$==c),!d){let $=s.name||o;throw new TypeError(`${c??l.raw} not allowed for ${$} in ${r}()`)}let f=d.range;c==="<percentage>"&&(f||=[0,1]);let m=s.range||s.refRange;return f&&m&&(n[a]=Tf(f,m,n[a])),d})}function k1(e,{meta:t}={}){let r={str:String(e)?.trim()};if(fi.run("parse-start",r),r.color)return r.color;if(r.parsed=$1(r.str),r.parsed){let n=r.parsed.name;if(n==="color"){let i=r.parsed.args.shift(),o=i.startsWith("--")?i.substring(2):`--${i}`,s=[i,o],a=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let c of U.all){let d=c.getFormat("color");if(d&&(s.includes(d.id)||d.ids?.filter(f=>s.includes(f)).length)){const f=Object.keys(c.coords).map(($,b)=>r.parsed.args[b]||0);let m;return d.coordGrammar&&(m=f0(c,d,"color",f)),t&&Object.assign(t,{formatId:"color",types:m}),d.id.startsWith("--")&&!i.startsWith("--")&&vr.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${d.id}) instead of color(${i}).`),i.startsWith("--")&&!d.id.startsWith("--")&&vr.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${d.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:f,alpha:a}}}let u="",l=i in U.registry?i:o;if(l in U.registry){let c=U.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of U.all){let o=i.getFormat(n);if(o&&o.type==="function"){let s=1;(o.lastAlpha||D1(r.parsed.args).alpha)&&(s=r.parsed.args.pop());let a=r.parsed.args,u;return o.coordGrammar&&(u=f0(i,o,n,a)),t&&Object.assign(t,{formatId:o.name,types:u}),{spaceId:i.id,coords:a,alpha:s}}}}else for(let n of U.all)for(let i in n.formats){let o=n.formats[i];if(o.type!=="custom"||o.test&&!o.test(r.str))continue;let s=o.parse(r.str);if(s)return s.alpha??=1,t&&(t.formatId=i),s}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function ee(e){if(Array.isArray(e))return e.map(ee);if(!e)throw new TypeError("Empty color reference");Sa(e)&&(e=k1(e));let t=e.space||e.spaceId;return t instanceof U||(e.space=U.get(t)),e.alpha===void 0&&(e.alpha=1),e}const fx=75e-6;class U{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?U.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Dd(n),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:U.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:mx(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),fi.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=fx}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,o)=>{let s=n[o];if(s.type!=="angle"&&s.range){if(Number.isNaN(i))return!0;let[a,u]=s.range;return(a===void 0||i>=a-r)&&(u===void 0||i<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=m0(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=m0(r,this),r):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=ee(t);[t,r]=[a.space,a.coords]}if(t=U.get(t),this.equals(t))return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=this.path,i=t.path,o,s;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)o=n[a],s=a;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=ee(t);[t,r]=[n.space,n.coords]}return t=U.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(U.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof U)return t;if(ui(t)==="string"){let i=U.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return U.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){let n=ui(t),i,o;if(n==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=U.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ui(o),n==="number"||n==="string"&&o>=0){let u=Object.entries(i.coords)[o];if(u)return{space:i,id:u[0],index:o,...u[1]}}i=U.get(i);let s=o.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function mx(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function m0(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=A1(e.coords);let r=Object.entries(t).map(([n,i],o)=>{let s=e.coordGrammar[o][0],a=i.range||i.refRange,u=s.range,l="";return s=="<percentage>"?(u=[0,100],l="%"):s=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(n,i)=>n.map((o,s)=>{let{fromRange:a,toRange:u,suffix:l}=r[s];return a&&u&&(o=Tf(a,u,o)),o=Gu(o,{precision:i,unit:l}),o})}return e}var Nt=new U({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class lr extends U{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Nt),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=Re(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Zu(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=Zu(this.base.white,this.white,r),Re(t.fromXYZ_M,r))),t.referred??="display",super(t)}}function Na(e,t){return e=ee(e),!t||e.space.equals(t)?e.coords.slice():(t=U.get(t),t.from(e))}function pr(e,t){e=ee(e);let{space:r,index:n}=U.resolveCoord(t,e.space);return Na(e,r)[n]}function Mf(e,t,r){return e=ee(e),t=U.get(t),e.coords=t.to(e.space,r),e}Mf.returns="color";function Wn(e,t,r){if(e=ee(e),arguments.length===2&&ui(arguments[1])==="object"){let n=arguments[1];for(let i in n)Wn(e,i,n[i])}else{typeof r=="function"&&(r=r(pr(e,t)));let{space:n,index:i}=U.resolveCoord(t,e.space),o=Na(e,n);o[i]=r,Mf(e,n,o)}return e}Wn.returns="color";var If=new U({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Nt,fromBase:e=>Zu(Nt.white,"D50",e),toBase:e=>Zu("D50",Nt.white,e)});const hx=216/24389,h0=24/116,su=24389/27;let Cc=Kt.D50;var gr=new U({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Cc,base:If,fromBase(e){let r=e.map((n,i)=>n/Cc[i]).map(n=>n>hx?Math.cbrt(n):(su*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>h0?Math.pow(t[0],3):(116*t[0]-16)/su,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/su,t[2]>h0?Math.pow(t[2],3):(116*t[2]-16)/su].map((n,i)=>n*Cc[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function wn(e){return(e%360+360)%360}function px(e,t){if(e==="raw")return t;let[r,n]=t.map(wn),i=n-r;return e==="increasing"?i<0&&(n+=360):e==="decreasing"?i>0&&(r+=360):e==="longer"?-180<i&&i<180&&(i>0?r+=360:n+=360):e==="shorter"&&(i>180?r+=360:i<-180&&(n+=360)),[r,n]}var ma=new U({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:gr,fromBase(e){let[t,r,n]=e,i;const o=.02;return Math.abs(r)<o&&Math.abs(n)<o?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),wn(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const p0=25**7,Hu=Math.PI,g0=180/Hu,wo=Hu/180;function y0(e){const t=e*e;return t*t*t*e}function F1(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=ee([e,t]);let[o,s,a]=gr.from(e),u=ma.from(gr,[o,s,a])[1],[l,c,d]=gr.from(t),f=ma.from(gr,[l,c,d])[1];u<0&&(u=0),f<0&&(f=0);let m=(u+f)/2,$=y0(m),b=.5*(1-Math.sqrt($/($+p0))),F=(1+b)*s,C=(1+b)*c,S=Math.sqrt(F**2+a**2),I=Math.sqrt(C**2+d**2),z=F===0&&a===0?0:Math.atan2(a,F),q=C===0&&d===0?0:Math.atan2(d,C);z<0&&(z+=2*Hu),q<0&&(q+=2*Hu),z*=g0,q*=g0;let Ce=l-o,Ge=I-S,mt=q-z,_t=z+q,Fr=Math.abs(mt),qr;S*I===0?qr=0:Fr<=180?qr=mt:mt>180?qr=mt-360:mt<-180?qr=mt+360:vr.warn("the unthinkable has happened");let ho=2*Math.sqrt(I*S)*Math.sin(qr*wo/2),tc=(o+l)/2,Es=(S+I)/2,Ga=y0(Es),Kr;S*I===0?Kr=_t:Fr<=180?Kr=_t/2:_t<360?Kr=(_t+360)/2:Kr=(_t-360)/2;let Za=(tc-50)**2,rc=1+.015*Za/Math.sqrt(20+Za),Ha=1+.045*Es,Sr=1;Sr-=.17*Math.cos((Kr-30)*wo),Sr+=.24*Math.cos(2*Kr*wo),Sr+=.32*Math.cos((3*Kr+6)*wo),Sr-=.2*Math.cos((4*Kr-63)*wo);let nt=1+.015*Es*Sr,dr=30*Math.exp(-1*((Kr-275)/25)**2),po=2*Math.sqrt(Ga/(Ga+p0)),Jn=-1*Math.sin(2*dr*wo)*po,Ei=(Ce/(r*rc))**2;return Ei+=(Ge/(n*Ha))**2,Ei+=(ho/(i*nt))**2,Ei+=Jn*(Ge/(n*Ha))*(ho/(i*nt)),Math.sqrt(Ei)}const gx=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],yx=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],bx=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],wx=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Ko=new U({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Nt,fromBase(e){let r=Re(gx,e).map(n=>Math.cbrt(n));return Re(bx,r)},toBase(e){let r=Re(wx,e).map(n=>n**3);return Re(yx,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function xd(e,t){[e,t]=ee([e,t]);let[r,n,i]=Ko.from(e),[o,s,a]=Ko.from(t),u=r-o,l=n-s,c=i-a;return Math.sqrt(u**2+l**2+c**2)}const vx=75e-6;function zi(e,t,{epsilon:r=vx}={}){e=ee(e),t||(t=e.space),t=U.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Go(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function S1(e,t,r="lab"){r=U.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((o,s,a)=>{let u=i[a];return isNaN(s)||isNaN(u)?o:o+(u-s)**2},0))}function $x(e,t){return S1(e,t,"lab")}const Dx=Math.PI,b0=Dx/180;function xx(e,t,{l:r=2,c:n=1}={}){[e,t]=ee([e,t]);let[i,o,s]=gr.from(e),[,a,u]=ma.from(gr,[i,o,s]),[l,c,d]=gr.from(t),f=ma.from(gr,[l,c,d])[1];a<0&&(a=0),f<0&&(f=0);let m=i-l,$=a-f,b=o-c,F=s-d,C=b**2+F**2-$**2,S=.511;i>=16&&(S=.040975*i/(1+.01765*i));let I=.0638*a/(1+.0131*a)+.638,z;Number.isNaN(u)&&(u=0),u>=164&&u<=345?z=.56+Math.abs(.2*Math.cos((u+168)*b0)):z=.36+Math.abs(.4*Math.cos((u+35)*b0));let q=Math.pow(a,4),Ce=Math.sqrt(q/(q+1900)),Ge=I*(Ce*z+1-Ce),mt=(m/(r*S))**2;return mt+=($/(n*I))**2,mt+=C/Ge**2,Math.sqrt(mt)}const w0=203;var Of=new U({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Nt,fromBase(e){return e.map(t=>Math.max(t*w0,0))},toBase(e){return e.map(t=>Math.max(t/w0,0))}});const au=1.15,uu=.66,v0=2610/2**14,Ax=2**14/2610,$0=3424/2**12,D0=2413/2**7,x0=2392/2**7,Ex=1.7*2523/2**5,A0=2**5/(1.7*2523),lu=-.56,kc=16295499532821565e-27,Cx=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],kx=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Fx=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Sx=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var N1=new U({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Of,fromBase(e){let[t,r,n]=e,i=au*t-(au-1)*n,o=uu*r-(uu-1)*t,a=Re(Cx,[i,o,n]).map(function(f){let m=$0+D0*(f/1e4)**v0,$=1+x0*(f/1e4)**v0;return(m/$)**Ex}),[u,l,c]=Re(Fx,a);return[(1+lu)*u/(1+lu*u)-kc,l,c]},toBase(e){let[t,r,n]=e,i=(t+kc)/(1+lu-lu*(t+kc)),s=Re(Sx,[i,r,n]).map(function(f){let m=$0-f**A0,$=x0*f**A0-D0;return 1e4*(m/$)**Ax}),[a,u,l]=Re(kx,s),c=(a+(au-1)*l)/au,d=(u+(uu-1)*c)/uu;return[c,d,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Ad=new U({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:N1,fromBase(e){let[t,r,n]=e,i;const o=2e-4;return Math.abs(r)<o&&Math.abs(n)<o?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),wn(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function Nx(e,t){[e,t]=ee([e,t]);let[r,n,i]=Ad.from(e),[o,s,a]=Ad.from(t),u=r-o,l=n-s;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let c=i-a,d=2*Math.sqrt(n*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+d**2)}const T1=3424/4096,P1=2413/128,M1=2392/128,E0=2610/16384,Tx=2523/32,Px=16384/2610,C0=32/2523,Mx=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Ix=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Ox=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Bx=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Ed=new U({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Of,fromBase(e){let t=Re(Mx,e);return Rx(t)},toBase(e){let t=Lx(e);return Re(Bx,t)}});function Rx(e){let t=e.map(function(r){let n=T1+P1*(r/1e4)**E0,i=1+M1*(r/1e4)**E0;return(n/i)**Tx});return Re(Ix,t)}function Lx(e){return Re(Ox,e).map(function(n){let i=Math.max(n**C0-T1,0),o=P1-M1*n**C0;return 1e4*(i/o)**Px})}function jx(e,t){[e,t]=ee([e,t]);let[r,n,i]=Ed.from(e),[o,s,a]=Ed.from(t);return 720*Math.sqrt((r-o)**2+.25*(n-s)**2+(i-a)**2)}const Ux=Kt.D65,I1=.42,k0=1/I1,Fc=2*Math.PI,O1=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],_x=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Vx=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Wx={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Ii={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},zx=180/Math.PI,F0=Math.PI/180;function B1(e,t){return e.map(n=>{const i=hn(t*Math.abs(n)*.01,I1);return 400*Dl(i,n)/(i+27.13)})}function qx(e,t){const r=100/t*27.13**k0;return e.map(n=>{const i=Math.abs(n);return Dl(r*hn(i/(400-i),k0),n)})}function Kx(e){let t=wn(e);t<=Ii.h[0]&&(t+=360);const r=C1(Ii.h,t)-1,[n,i]=Ii.h.slice(r,r+2),[o,s]=Ii.e.slice(r,r+2),a=Ii.H[r],u=(t-n)/o;return a+100*u/(u+(i-t)/s)}function Gx(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=Ii.h.slice(r,r+2),[o,s]=Ii.e.slice(r,r+2);return wn((t*(s*n-o*i)-100*n*s)/(t*(s-o)-100*s))}function R1(e,t,r,n,i){const o={};o.discounting=i,o.refWhite=e,o.surround=n;const s=e.map(b=>b*100);o.la=t,o.yb=r;const a=s[1],u=Re(O1,s);n=Wx[o.surround];const l=n[0];o.c=n[1],o.nc=n[2];const d=(1/(5*o.la+1))**4;o.fl=d*o.la+.1*(1-d)*(1-d)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/a,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const f=Math.max(Math.min(l*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=u.map(b=>fa(1,a/b,f)),o.dRgbInv=o.dRgb.map(b=>1/b);const m=u.map((b,F)=>b*o.dRgb[F]),$=B1(m,o.fl);return o.aW=o.nbb*(2*$[0]+$[1]+.05*$[2]),o}const S0=R1(Ux,64/Math.PI*.2,20,"average",!1);function Cd(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=wn(e.h)*F0:r=Gx(e.H)*F0;const n=Math.cos(r),i=Math.sin(r);let o=0;e.J!==void 0?o=hn(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=hn(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*hn(o,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,d=l/t.nbb,f=23*(d+.305)*Pf(a,23*c+a*(11*n+108*i)),m=f*n,$=f*i,b=qx(Re(Vx,[d,m,$]).map(F=>F*1/1403),t.fl);return Re(_x,b.map((F,C)=>F*t.dRgbInv[C])).map(F=>F/100)}function L1(e,t){const r=e.map(I=>I*100),n=B1(Re(O1,r).map((I,z)=>I*t.dRgb[z]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,o=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(o,i)%Fc+Fc)%Fc,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*Pf(a*Math.sqrt(i**2+o**2),n[0]+n[1]+1.05*n[2]+.305),l=hn(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),d=hn(c/t.aW,.5*t.c*t.z),f=100*hn(d,2),m=4/t.c*d*(t.aW+4)*t.flRoot,$=l*d,b=$*t.flRoot,F=wn(s*zx),C=Kx(F),S=50*hn(t.c*l/(t.aW+4),1/2);return{J:f,C:$,h:F,s:S,Q:m,M:b,H:C}}var Zx=new U({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Nt,fromBase(e){const t=L1(e,S0);return[t.J,t.M,t.h]},toBase(e){return Cd({J:e[0],M:e[1],h:e[2]},S0)}});const Hx=Kt.D65,Jx=216/24389,j1=24389/27;function Yx(e){return 116*(e>Jx?Math.cbrt(e):(j1*e+16)/116)-16}function kd(e){return e>8?Math.pow((e+16)/116,3):e/j1}function Xx(e,t){let[r,n,i]=e,o=[],s=0;if(i===0)return[0,0,0];let a=kd(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let c=0,d=1/0;for(;c<=l;){o=Cd({J:s,C:n,h:r},t);const f=Math.abs(o[1]-a);if(f<d){if(f<=u)return o;d=f}s=s-(o[1]-a)*s/(2*o[1]),c+=1}return Cd({J:s,C:n,h:r},t)}function Qx(e,t){const r=Yx(e[1]);if(r===0)return[0,0,0];const n=L1(e,Bf);return[wn(n.h),n.C,r]}const Bf=R1(Hx,200/Math.PI*kd(50),kd(50)*100,"average",!1);var ha=new U({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Nt,fromBase(e){return Qx(e)},toBase(e){return Xx(e,Bf)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const eA=Math.PI/180,N0=[1,.007,.0228];function T0(e){e[1]<0&&(e=ha.fromBase(ha.toBase(e)));const t=Math.log(Math.max(1+N0[2]*e[1]*Bf.flRoot,1))/N0[2],r=e[0]*eA,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function tA(e,t){[e,t]=ee([e,t]);let[r,n,i]=T0(ha.from(e)),[o,s,a]=T0(ha.from(t));return Math.sqrt((r-o)**2+(n-s)**2+(i-a)**2)}var Zo={deltaE76:$x,deltaECMC:xx,deltaE2000:F1,deltaEJz:Nx,deltaEITP:jx,deltaEOK:xd,deltaEHCT:tA};function rA(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const P0={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function mi(e,{method:t=vr.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:o={}}={}){if(e=ee(e),Sa(arguments[1])?r=arguments[1]:r||(r=e.space),r=U.get(r),zi(e,r,{epsilon:0}))return e;let s;if(t==="css")s=nA(e,{space:r});else{if(t!=="clip"&&!zi(e,r)){Object.prototype.hasOwnProperty.call(P0,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:o}=P0[t]);let a=F1;if(n!==""){for(let l in Zo)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=Zo[l];break}}let u=mi(Be(e,r),{method:"clip",space:r});if(a(e,u)>i){if(Object.keys(o).length===3){let S=U.resolveCoord(o.channel),I=pr(Be(e,S.space),S.id);if(di(I)&&(I=0),I>=o.max)return Be({space:"xyz-d65",coords:Kt.D65},e.space);if(I<=o.min)return Be({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=U.resolveCoord(t),c=l.space,d=l.id,f=Be(e,c);f.coords.forEach((S,I)=>{di(S)&&(f.coords[I]=0)});let $=(l.range||l.refRange)[0],b=rA(i),F=$,C=pr(f,d);for(;C-F>b;){let S=Go(f);S=mi(S,{space:r,method:"clip"}),a(f,S)-i<b?F=pr(f,d):C=pr(f,d),Wn(f,d,(F+C)/2)}s=Be(f,r)}else s=u}else s=Be(e,r);if(t==="clip"||!zi(s,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[c,d]=a[l];return c!==void 0&&(u=Math.max(c,u)),d!==void 0&&(u=Math.min(u,d)),u})}}return r!==e.space&&(s=Be(s,e.space)),e.coords=s.coords,e}mi.returns="color";const M0={WHITE:{space:Ko,coords:[1,0,0]},BLACK:{space:Ko,coords:[0,0,0]}};function nA(e,{space:t}={}){e=ee(e),t||(t=e.space),t=U.get(t);const i=U.get("oklch");if(t.isUnbounded)return Be(e,t);const o=Be(e,i);let s=o.coords[0];if(s>=1){const $=Be(M0.WHITE,t);return $.alpha=e.alpha,Be($,t)}if(s<=0){const $=Be(M0.BLACK,t);return $.alpha=e.alpha,Be($,t)}if(zi(o,t,{epsilon:0}))return Be(o,t);function a($){const b=Be($,t),F=Object.values(t.coords);return b.coords=b.coords.map((C,S)=>{if("range"in F[S]){const[I,z]=F[S].range;return E1(I,C,z)}return C}),b}let u=0,l=o.coords[1],c=!0,d=Go(o),f=a(d),m=xd(f,d);if(m<.02)return f;for(;l-u>1e-4;){const $=(u+l)/2;if(d.coords[1]=$,c&&zi(d,t,{epsilon:0}))u=$;else if(f=a(d),m=xd(f,d),m<.02){if(.02-m<1e-4)break;c=!1,u=$}else l=$}return f}function Be(e,t,{inGamut:r}={}){e=ee(e),t=U.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=mi(i,r===!0?void 0:r)),i}Be.returns="color";function Ys(e,{precision:t=vr.precision,format:r="default",inGamut:n=!0,...i}={}){let o;e=ee(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??U.DEFAULT_FORMAT;let a=e.coords.slice();if(n||=r.toGamut,n&&!zi(e)&&(a=mi(Go(e),n===!0?void 0:n).coords),r.type==="custom")if(i.precision=t,r.serialize)o=r.serialize(a,e.alpha,i);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let u=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(f=>Gu(f,{precision:t})));let l=[...a];if(u==="color"){let f=r.id||r.ids?.[0]||e.space.id;l.unshift(f)}let c=e.alpha;t!==null&&(c=Gu(c,{precision:t}));let d=e.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${c}`;o=`${u}(${l.join(r.commas?", ":" ")}${d})`}return o}const iA=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],oA=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var xl=new lr({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:iA,fromXYZ_M:oA});const cu=1.09929682680944,I0=.018053968510807;var U1=new lr({id:"rec2020",name:"REC.2020",base:xl,toBase(e){return e.map(function(t){return t<I0*4.5?t/4.5:Math.pow((t+cu-1)/cu,1/.45)})},fromBase(e){return e.map(function(t){return t>=I0?cu*Math.pow(t,.45)-(cu-1):4.5*t})}});const sA=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],aA=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var _1=new lr({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:sA,fromXYZ_M:aA});const uA=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],bt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var V1=new lr({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:uA,fromXYZ_M:bt}),O0={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let B0=Array(3).fill("<percentage> | <number>[0, 255]"),R0=Array(3).fill("<number>[0, 255]");var Ho=new lr({id:"srgb",name:"sRGB",base:V1,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:B0},rgb_number:{name:"rgb",commas:!0,coords:R0,noAlpha:!0},color:{},rgba:{coords:B0,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:R0},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(o=>Math.round(o*255));let n=r&&e.every(o=>o%17===0);return"#"+e.map(o=>n?(o/17).toString(16):o.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=O0.black,t.alpha=0):t.coords=O0[e],t.coords)return t}}}}),W1=new lr({id:"p3",cssId:"display-p3",name:"P3",base:_1,fromBase:Ho.fromBase,toBase:Ho.toBase});vr.display_space=Ho;let lA;if(typeof CSS<"u"&&CSS.supports)for(let e of[gr,U1,W1]){let t=e.getMinCoords(),n=Ys({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){vr.display_space=e;break}}function cA(e,{space:t=vr.display_space,...r}={}){let n=Ys(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!vr.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(di)||di(e.alpha))&&!(lA??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=Go(e),i.coords=i.coords.map(st),i.alpha=st(i.alpha),n=Ys(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=Be(i,t),n=new String(Ys(i,r)),n.color=i}return n}function dA(e,t){return e=ee(e),t=ee(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function hi(e){return pr(e,[Nt,"y"])}function z1(e,t){Wn(e,[Nt,"y"],t)}function fA(e){Object.defineProperty(e.prototype,"luminance",{get(){return hi(this)},set(t){z1(this,t)}})}var mA=Object.freeze({__proto__:null,getLuminance:hi,register:fA,setLuminance:z1});function hA(e,t){e=ee(e),t=ee(t);let r=Math.max(hi(e),0),n=Math.max(hi(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const pA=.56,gA=.57,yA=.62,bA=.65,L0=.022,wA=1.414,vA=.1,$A=5e-4,DA=1.14,j0=.027,xA=1.14;function U0(e){return e>=L0?e:e+(L0-e)**wA}function vo(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function AA(e,t){t=ee(t),e=ee(e);let r,n,i,o,s,a;t=Be(t,"srgb"),[o,s,a]=t.coords;let u=vo(o)*.2126729+vo(s)*.7151522+vo(a)*.072175;e=Be(e,"srgb"),[o,s,a]=e.coords;let l=vo(o)*.2126729+vo(s)*.7151522+vo(a)*.072175,c=U0(u),d=U0(l),f=d>c;return Math.abs(d-c)<$A?n=0:f?(r=d**pA-c**gA,n=r*DA):(r=d**bA-c**yA,n=r*xA),Math.abs(n)<vA?i=0:n>0?i=n-j0:i=n+j0,i*100}function EA(e,t){e=ee(e),t=ee(t);let r=Math.max(hi(e),0),n=Math.max(hi(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const CA=5e4;function kA(e,t){e=ee(e),t=ee(t);let r=Math.max(hi(e),0),n=Math.max(hi(t),0);return n>r&&([r,n]=[n,r]),n===0?CA:(r-n)/n}function FA(e,t){e=ee(e),t=ee(t);let r=pr(e,[gr,"l"]),n=pr(t,[gr,"l"]);return Math.abs(r-n)}const SA=216/24389,_0=24/116,du=24389/27;let Sc=Kt.D65;var Fd=new U({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Sc,base:Nt,fromBase(e){let r=e.map((n,i)=>n/Sc[i]).map(n=>n>SA?Math.cbrt(n):(du*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>_0?Math.pow(t[0],3):(116*t[0]-16)/du,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/du,t[2]>_0?Math.pow(t[2],3):(116*t[2]-16)/du].map((n,i)=>n*Sc[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Nc=Math.pow(5,.5)*.5+.5;function NA(e,t){e=ee(e),t=ee(t);let r=pr(e,[Fd,"l"]),n=pr(t,[Fd,"l"]),i=Math.abs(Math.pow(r,Nc)-Math.pow(n,Nc)),o=Math.pow(i,1/Nc)*Math.SQRT2-40;return o<7.5?0:o}var Su=Object.freeze({__proto__:null,contrastAPCA:AA,contrastDeltaPhi:NA,contrastLstar:FA,contrastMichelson:EA,contrastWCAG21:hA,contrastWeber:kA});function TA(e,t,r={}){Sa(r)&&(r={algorithm:r});let{algorithm:n,...i}=r;if(!n){let o=Object.keys(Su).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=ee(e),t=ee(t);for(let o in Su)if("contrast"+n.toLowerCase()===o.toLowerCase())return Su[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Al(e){let[t,r,n]=Na(e,Nt),i=t+15*r+3*n;return[4*t/i,9*r/i]}function q1(e){let[t,r,n]=Na(e,Nt),i=t+r+n;return[t/i,r/i]}function PA(e){Object.defineProperty(e.prototype,"uv",{get(){return Al(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return q1(this)}})}var MA=Object.freeze({__proto__:null,register:PA,uv:Al,xy:q1});function Ws(e,t,r={}){Sa(r)&&(r={method:r});let{method:n=vr.deltaE,...i}=r;for(let o in Zo)if("deltae"+n.toLowerCase()===o.toLowerCase())return Zo[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function IA(e,t=.25){let n=[U.get("oklch","lch"),"l"];return Wn(e,n,i=>i*(1+t))}function OA(e,t=.25){let n=[U.get("oklch","lch"),"l"];return Wn(e,n,i=>i*(1-t))}var BA=Object.freeze({__proto__:null,darken:OA,lighten:IA});function K1(e,t,r=.5,n={}){return[e,t]=[ee(e),ee(t)],ui(r)==="object"&&([r,n]=[.5,r]),Ta(e,t,n)(r)}function G1(e,t,r={}){let n;Rf(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[ee(e),ee(t)],n=Ta(e,t,u));let l=Ws(e,t),c=i>0?Math.max(s,Math.ceil(l/i)+1):s,d=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)d=[{p:.5,color:n(.5)}];else{let f=1/(c-1);d=Array.from({length:c},(m,$)=>{let b=$*f;return{p:b,color:n(b)}})}if(i>0){let f=d.reduce((m,$,b)=>{if(b===0)return 0;let F=Ws($.color,d[b-1].color,o);return Math.max(m,F)},0);for(;f>i;){f=0;for(let m=1;m<d.length&&d.length<a;m++){let $=d[m-1],b=d[m],F=(b.p+$.p)/2,C=n(F);f=Math.max(f,Ws(C,$.color),Ws(C,b.color)),d.splice(m,0,{p:F,color:n(F)}),m++}}}return d=d.map(f=>f.color),d}function Ta(e,t,r={}){if(Rf(e)){let[u,l]=[e,t];return Ta(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:i,progression:o,premultiplied:s}=r;e=ee(e),t=ee(t),e=Go(e),t=Go(t);let a={colors:[e,t],options:r};if(n?n=U.get(n):n=U.registry[vr.interpolationSpace]||e.space,i=i?U.get(i):n,e=Be(e,n),t=Be(t,n),e=mi(e),t=mi(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,d]=[pr(e,l),pr(t,l)];isNaN(c)&&!isNaN(d)?c=d:isNaN(d)&&!isNaN(c)&&(d=c),[c,d]=px(u,[c,d]),Wn(e,l,c),Wn(t,l,d)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=o?o(u):u;let l=e.coords.map((f,m)=>{let $=t.coords[m];return fa(f,$,u)}),c=fa(e.alpha,t.alpha,u),d={space:n,coords:l,alpha:c};return s&&(d.coords=d.coords.map(f=>f/c)),i!==n&&(d=Be(d,i)),d},{rangeArgs:a})}function Rf(e){return ui(e)==="function"&&!!e.rangeArgs}vr.interpolationSpace="lab";function RA(e){e.defineFunction("mix",K1,{returns:"color"}),e.defineFunction("range",Ta,{returns:"function<color>"}),e.defineFunction("steps",G1,{returns:"array<color>"})}var LA=Object.freeze({__proto__:null,isRange:Rf,mix:K1,range:Ta,register:RA,steps:G1}),Z1=new U({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ho,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,u]=[NaN,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-n)/l+2;break;case o:s=(n-i)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),H1=new U({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Z1,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n+r*Math.min(n,1-n);return[t,i===0?0:200*(1-n/i),100*i]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n*(1-r/2);return[t,i===0||i===1?0:(n-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),jA=new U({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:H1,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[t,0,a*100]}let o=1-n,s=o===0?0:1-r/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const UA=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],_A=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var J1=new lr({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:UA,fromXYZ_M:_A}),VA=new lr({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:J1,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const WA=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],zA=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Y1=new lr({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:If,toXYZ_M:WA,fromXYZ_M:zA});const qA=1/512,KA=16/512;var GA=new lr({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Y1,toBase(e){return e.map(t=>t<KA?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=qA?t**(1/1.8):16*t)}}),ZA=new U({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Ko,fromBase(e){let[t,r,n]=e,i;const o=2e-4;return Math.abs(r)<o&&Math.abs(n)<o?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),wn(i)]},toBase(e){let[t,r,n]=e,i,o;return isNaN(n)?(i=0,o=0):(i=r*Math.cos(n*Math.PI/180),o=r*Math.sin(n*Math.PI/180)),[t,i,o]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let X1=Kt.D65;const HA=216/24389,V0=24389/27,[W0,z0]=Al({space:Nt,coords:X1});var Q1=new U({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:X1,base:Nt,fromBase(e){let t=[st(e[0]),st(e[1]),st(e[2])],r=t[1],[n,i]=Al({space:Nt,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let o=r<=HA?V0*r:116*Math.cbrt(r)-16;return[o,13*o*(n-W0),13*o*(i-z0)]},toBase(e){let[t,r,n]=e;if(t===0||di(t))return[0,0,0];r=st(r),n=st(n);let i=r/(13*t)+W0,o=n/(13*t)+z0,s=t<=8?t/V0:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Lf=new U({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Q1,fromBase(e){let[t,r,n]=e,i;const o=.02;return Math.abs(r)<o&&Math.abs(n)<o?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),wn(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const JA=216/24389,YA=24389/27,q0=bt[0][0],K0=bt[0][1],Tc=bt[0][2],G0=bt[1][0],Z0=bt[1][1],Pc=bt[1][2],H0=bt[2][0],J0=bt[2][1],Mc=bt[2][2];function $o(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function Ju(e){const t=Math.pow(e+16,3)/1560896,r=t>JA?t:e/YA,n=r*(284517*q0-94839*Tc),i=r*(838422*Tc+769860*K0+731718*q0),o=r*(632260*Tc-126452*K0),s=r*(284517*G0-94839*Pc),a=r*(838422*Pc+769860*Z0+731718*G0),u=r*(632260*Pc-126452*Z0),l=r*(284517*H0-94839*Mc),c=r*(838422*Mc+769860*J0+731718*H0),d=r*(632260*Mc-126452*J0);return{r0s:n/o,r0i:i*e/o,r1s:n/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/d,b0i:c*e/d,b1s:l/(d+126452),b1i:(c-769860)*e/(d+126452)}}function Y0(e,t){const r=t/360*Math.PI*2,n=$o(e.r0s,e.r0i,r),i=$o(e.r1s,e.r1i,r),o=$o(e.g0s,e.g0i,r),s=$o(e.g1s,e.g1i,r),a=$o(e.b0s,e.b0i,r),u=$o(e.b1s,e.b1i,r);return Math.min(n,i,o,s,a,u)}var XA=new U({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Lf,gamutSpace:Ho,fromBase(e){let[t,r,n]=[st(e[0]),st(e[1]),st(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=Ju(t),s=Y0(o,n);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[st(e[0]),st(e[1]),st(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=Ju(n);i=Y0(o,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});bt[0][0];bt[0][1];bt[0][2];bt[1][0];bt[1][1];bt[1][2];bt[2][0];bt[2][1];bt[2][2];function Do(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function X0(e){let t=Do(e.r0s,e.r0i),r=Do(e.r1s,e.r1i),n=Do(e.g0s,e.g0i),i=Do(e.g1s,e.g1i),o=Do(e.b0s,e.b0i),s=Do(e.b1s,e.b1i);return Math.min(t,r,n,i,o,s)}var QA=new U({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Lf,gamutSpace:"self",fromBase(e){let[t,r,n]=[st(e[0]),st(e[1]),st(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=Ju(t),s=X0(o);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[st(e[0]),st(e[1]),st(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=Ju(n);i=X0(o)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Q0=203,ep=2610/2**14,eE=2**14/2610,tE=2523/2**5,tp=2**5/2523,rp=3424/2**12,np=2413/2**7,ip=2392/2**7;var rE=new lr({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:xl,toBase(e){return e.map(function(t){return(Math.max(t**tp-rp,0)/(np-ip*t**tp))**eE*1e4/Q0})},fromBase(e){return e.map(function(t){let r=Math.max(t*Q0/1e4,0),n=rp+np*r**ep,i=1+ip*r**ep;return(n/i)**tE})}});const op=.17883277,sp=.28466892,ap=.55991073,Ic=3.7743;var nE=new lr({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:xl,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Ic:(Math.exp((t-ap)/op)+sp)/12*Ic})},fromBase(e){return e.map(function(t){return t/=Ic,t<=1/12?Math.sqrt(3*t):op*Math.log(12*t-sp)+ap})}});const eb={};fi.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=tb(e.W1,e.W2,e.options.method))});fi.add("chromatic-adaptation-end",e=>{e.M||(e.M=tb(e.W1,e.W2,e.options.method))});function El({id:e,toCone_M:t,fromCone_M:r}){eb[e]=arguments[0]}function tb(e,t,r="Bradford"){let n=eb[r],[i,o,s]=Re(n.toCone_M,e),[a,u,l]=Re(n.toCone_M,t),c=[[a/i,0,0],[0,u/o,0],[0,0,l/s]],d=Re(c,n.toCone_M);return Re(n.fromCone_M,d)}El({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});El({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});El({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});El({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Kt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Kt.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const iE=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],oE=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var rb=new lr({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Kt.ACES,toXYZ_M:iE,fromXYZ_M:oE});const fu=2**-16,Oc=-.35828683,mu=(Math.log2(65504)+9.72)/17.52;var sE=new lr({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Oc,mu],name:"Red"},g:{range:[Oc,mu],name:"Green"},b:{range:[Oc,mu],name:"Blue"}},referred:"scene",base:rb,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-fu)*2:r<mu?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(fu)+9.72)/17.52:t<fu?(Math.log2(fu+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),up=Object.freeze({__proto__:null,A98RGB:VA,A98RGB_Linear:J1,ACEScc:sE,ACEScg:rb,CAM16_JMh:Zx,HCT:ha,HPLuv:QA,HSL:Z1,HSLuv:XA,HSV:H1,HWB:jA,ICTCP:Ed,JzCzHz:Ad,Jzazbz:N1,LCH:ma,LCHuv:Lf,Lab:gr,Lab_D65:Fd,Luv:Q1,OKLCH:ZA,OKLab:Ko,P3:W1,P3_Linear:_1,ProPhoto:GA,ProPhoto_Linear:Y1,REC_2020:U1,REC_2020_Linear:xl,REC_2100_HLG:nE,REC_2100_PQ:rE,XYZ_ABS_D65:Of,XYZ_D50:If,XYZ_D65:Nt,sRGB:Ho,sRGB_Linear:V1});let Se=class Qt{constructor(...t){let r;t.length===1&&(r=ee(t[0]));let n,i,o;r?(n=r.space||r.spaceId,i=r.coords,o=r.alpha):[n,i,o]=t,Object.defineProperty(this,"space",{value:U.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=o>1||o===void 0?1:o<0?0:o;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new Qt(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=cA(this,...t);return r.color=new Qt(r.color),r}static get(t,...r){return t instanceof Qt?t:new Qt(t,...r)}static defineFunction(t,r,n=r){let{instance:i=!0,returns:o}=n,s=function(...a){let u=r(...a);if(o==="color")u=Qt.get(u);else if(o==="function<color>"){let l=u;u=function(...c){let d=l(...c);return Qt.get(d)},Object.assign(u,l)}else o==="array<color>"&&(u=u.map(l=>Qt.get(l)));return u};t in Qt||(Qt[t]=s),i&&(Qt.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)Qt.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Qt);else for(let r in t)Qt.defineFunction(r,t[r])}};Se.defineFunctions({get:pr,getAll:Na,set:Wn,setAll:Mf,to:Be,equals:dA,inGamut:zi,toGamut:mi,distance:S1,toString:Ys});Object.assign(Se,{util:lx,hooks:fi,WHITES:Kt,Space:U,spaces:U.registry,parse:k1,defaults:vr});for(let e of Object.keys(up))U.register(up[e]);for(let e in U.registry)Sd(e,U.registry[e]);fi.add("colorspace-init-end",e=>{Sd(e.id,e),e.aliases?.forEach(t=>{Sd(t,e)})});function Sd(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(Se.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(i,o)=>{try{return U.resolveCoord([t,o]),!0}catch{}return Reflect.has(i,o)},get:(i,o,s)=>{if(o&&typeof o!="symbol"&&!(o in i)){let{index:a}=U.resolveCoord([t,o]);if(a>=0)return i[a]}return Reflect.get(i,o,s)},set:(i,o,s,a)=>{if(o&&typeof o!="symbol"&&!(o in i)||o>=0){let{index:u}=U.resolveCoord([t,o]);if(u>=0)return i[u]=s,this.setAll(e,i),!0}return Reflect.set(i,o,s,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}Se.extend(Zo);Se.extend({deltaE:Ws});Object.assign(Se,{deltaEMethods:Zo});Se.extend(BA);Se.extend({contrast:TA});Se.extend(MA);Se.extend(mA);Se.extend(LA);Se.extend(Su);const nb=Symbol("no update");function lp(e){return e!==nb}class Bc extends cn()("observable-value-update"){}class aE extends cn()("observable-value-resolve"){}class uE extends cn()("observable-value-error"){}class lE extends bf("observable-destroy"){}class cE extends bf("observable-callback-call"){}class dE extends cn()("observable-params-update"){}class ib{listenTarget=new wf;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===nb)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const i=this.value;return this.value=r,this.listenTarget.dispatch(new Bc({detail:[r,i]})),!0}return!1}listen(t,r){const n=i=>r(...i.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(Bc,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(Bc,r)}destroy(){this.listenTarget.dispatch(new lE),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function jf(e,t){return P5(e,t,(r,n)=>E.isFunction(r)&&E.isFunction(n)?!0:E.strictEquals(r,n))}var Xs;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Xs||(Xs={}));class fE extends ib{equalityCheck;waitingForValueDeferredPromise=new Ru;lastSetPromise;lastSetId=Wi();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||jf,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=Wi();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Ru,super.setValue(this.waitingForValueDeferredPromise.promise,E.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=Je(n);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return lp(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,E.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Wi(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new aE({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,E.strictEquals),this.dispatch(new uE({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):lp(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(Je(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?Xs.Rejected:this.value instanceof Promise?Xs.Waiting:Xs.Resolved}}class Co extends fE{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==Co.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||jf,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:Co.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===Co.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(Je(t))}finally{this.dispatch(new cE)}}updateLastParams(t){try{return this.internalParams===Co.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new dE({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(Je(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return E.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function mE(e){return ct(e)&&!cr(e)&&!Ma(e)&&Symbol.asyncIterator in e}function cr(e){return Array.isArray(e)}function ob(e){return typeof e=="bigint"}function Pa(e){return typeof e=="boolean"}function Uf(e){return e instanceof globalThis.Date}function hE(e){return typeof e=="function"}function pE(e){return ct(e)&&!cr(e)&&!Ma(e)&&Symbol.iterator in e}function gE(e){return e===null}function bn(e){return typeof e=="number"}function ct(e){return typeof e=="object"&&e!==null}function sb(e){return e instanceof globalThis.RegExp}function rt(e){return typeof e=="string"}function yE(e){return typeof e=="symbol"}function Ma(e){return e instanceof globalThis.Uint8Array}function at(e){return e===void 0}function bE(e){return e.map(t=>Yu(t))}function wE(e){return new Date(e.getTime())}function vE(e){return new Uint8Array(e)}function $E(e){return new RegExp(e.source,e.flags)}function DE(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=Yu(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=Yu(e[r]);return t}function Yu(e){return cr(e)?bE(e):Uf(e)?wE(e):Ma(e)?vE(e):sb(e)?$E(e):ct(e)?DE(e):e}function $r(e){return Yu(e)}function _f(e,t){return $r(t===void 0?e:{...t,...e})}function ab(e){return vn(e)&&globalThis.Symbol.asyncIterator in e}function ub(e){return vn(e)&&globalThis.Symbol.iterator in e}function lb(e){return e instanceof globalThis.Promise}function Vf(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function Wf(e){return e instanceof globalThis.Uint8Array}function cb(e,t){return t in e}function vn(e){return e!==null&&typeof e=="object"}function Dr(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function yi(e){return e===void 0}function Cl(e){return e===null}function kl(e){return typeof e=="boolean"}function re(e){return typeof e=="number"}function db(e){return globalThis.Number.isInteger(e)}function Pn(e){return typeof e=="bigint"}function br(e){return typeof e=="string"}function fb(e){return typeof e=="function"}function Fl(e){return typeof e=="symbol"}function mb(e){return Pn(e)||kl(e)||Cl(e)||re(e)||br(e)||Fl(e)||yi(e)}var tt;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=vn(s);return e.AllowArrayObject?a:a&&!Dr(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function i(s){return e.AllowNaN?re(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const a=yi(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=o})(tt||(tt={}));function xE(e){return globalThis.Object.freeze(e).map(t=>Xu(t))}function AE(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=Xu(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=Xu(e[r]);return globalThis.Object.freeze(t)}function Xu(e){return cr(e)?xE(e):Uf(e)?e:Ma(e)?e:sb(e)?e:ct(e)?AE(e):e}function M(e,t){const r=t!==void 0?{...t,...e}:e;switch(tt.InstanceMode){case"freeze":return Xu(r);case"clone":return $r(r);default:return r}}class Mt extends Error{constructor(t){super(t)}}const nr=Symbol.for("TypeBox.Transform"),Ia=Symbol.for("TypeBox.Readonly"),Kn=Symbol.for("TypeBox.Optional"),Sl=Symbol.for("TypeBox.Hint"),P=Symbol.for("TypeBox.Kind");function zf(e){return ct(e)&&e[Ia]==="Readonly"}function bi(e){return ct(e)&&e[Kn]==="Optional"}function hb(e){return ce(e,"Any")}function pb(e){return ce(e,"Argument")}function ms(e){return ce(e,"Array")}function Nl(e){return ce(e,"AsyncIterator")}function Tl(e){return ce(e,"BigInt")}function Oa(e){return ce(e,"Boolean")}function hs(e){return ce(e,"Computed")}function ps(e){return ce(e,"Constructor")}function EE(e){return ce(e,"Date")}function gs(e){return ce(e,"Function")}function ys(e){return ce(e,"Integer")}function Vr(e){return ce(e,"Intersect")}function Pl(e){return ce(e,"Iterator")}function ce(e,t){return ct(e)&&P in e&&e[P]===t}function gb(e){return Pa(e)||bn(e)||rt(e)}function ro(e){return ce(e,"Literal")}function no(e){return ce(e,"MappedKey")}function Cr(e){return ce(e,"MappedResult")}function Ba(e){return ce(e,"Never")}function CE(e){return ce(e,"Not")}function qf(e){return ce(e,"Null")}function bs(e){return ce(e,"Number")}function dn(e){return ce(e,"Object")}function Ml(e){return ce(e,"Promise")}function Il(e){return ce(e,"Record")}function ar(e){return ce(e,"Ref")}function yb(e){return ce(e,"RegExp")}function Ra(e){return ce(e,"String")}function Kf(e){return ce(e,"Symbol")}function io(e){return ce(e,"TemplateLiteral")}function kE(e){return ce(e,"This")}function Pe(e){return ct(e)&&nr in e}function oo(e){return ce(e,"Tuple")}function La(e){return ce(e,"Undefined")}function kt(e){return ce(e,"Union")}function FE(e){return ce(e,"Uint8Array")}function SE(e){return ce(e,"Unknown")}function NE(e){return ce(e,"Unsafe")}function TE(e){return ce(e,"Void")}function PE(e){return ct(e)&&P in e&&rt(e[P])}function Gt(e){return hb(e)||pb(e)||ms(e)||Oa(e)||Tl(e)||Nl(e)||hs(e)||ps(e)||EE(e)||gs(e)||ys(e)||Vr(e)||Pl(e)||ro(e)||no(e)||Cr(e)||Ba(e)||CE(e)||qf(e)||bs(e)||dn(e)||Ml(e)||Il(e)||ar(e)||yb(e)||Ra(e)||Kf(e)||io(e)||kE(e)||oo(e)||La(e)||kt(e)||FE(e)||SE(e)||NE(e)||TE(e)||PE(e)}const ME=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function bb(e){try{return new RegExp(e),!0}catch{return!1}}function Gf(e){if(!rt(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function wb(e){return Zf(e)||ze(e)}function Is(e){return at(e)||ob(e)}function ke(e){return at(e)||bn(e)}function Zf(e){return at(e)||Pa(e)}function Ee(e){return at(e)||rt(e)}function IE(e){return at(e)||rt(e)&&Gf(e)&&bb(e)}function OE(e){return at(e)||rt(e)&&Gf(e)}function vb(e){return at(e)||ze(e)}function Qu(e){return ct(e)&&e[Kn]==="Optional"}function on(e){return de(e,"Any")&&Ee(e.$id)}function BE(e){return de(e,"Argument")&&bn(e.index)}function so(e){return de(e,"Array")&&e.type==="array"&&Ee(e.$id)&&ze(e.items)&&ke(e.minItems)&&ke(e.maxItems)&&Zf(e.uniqueItems)&&vb(e.contains)&&ke(e.minContains)&&ke(e.maxContains)}function Hf(e){return de(e,"AsyncIterator")&&e.type==="AsyncIterator"&&Ee(e.$id)&&ze(e.items)}function Ol(e){return de(e,"BigInt")&&e.type==="bigint"&&Ee(e.$id)&&Is(e.exclusiveMaximum)&&Is(e.exclusiveMinimum)&&Is(e.maximum)&&Is(e.minimum)&&Is(e.multipleOf)}function ao(e){return de(e,"Boolean")&&e.type==="boolean"&&Ee(e.$id)}function RE(e){return de(e,"Computed")&&rt(e.target)&&cr(e.parameters)&&e.parameters.every(t=>ze(t))}function Bl(e){return de(e,"Constructor")&&e.type==="Constructor"&&Ee(e.$id)&&cr(e.parameters)&&e.parameters.every(t=>ze(t))&&ze(e.returns)}function Rl(e){return de(e,"Date")&&e.type==="Date"&&Ee(e.$id)&&ke(e.exclusiveMaximumTimestamp)&&ke(e.exclusiveMinimumTimestamp)&&ke(e.maximumTimestamp)&&ke(e.minimumTimestamp)&&ke(e.multipleOfTimestamp)}function Ll(e){return de(e,"Function")&&e.type==="Function"&&Ee(e.$id)&&cr(e.parameters)&&e.parameters.every(t=>ze(t))&&ze(e.returns)}function Gn(e){return de(e,"Integer")&&e.type==="integer"&&Ee(e.$id)&&ke(e.exclusiveMaximum)&&ke(e.exclusiveMinimum)&&ke(e.maximum)&&ke(e.minimum)&&ke(e.multipleOf)}function $b(e){return ct(e)&&Object.entries(e).every(([t,r])=>Gf(t)&&ze(r))}function uo(e){return de(e,"Intersect")&&!(rt(e.type)&&e.type!=="object")&&cr(e.allOf)&&e.allOf.every(t=>ze(t)&&!WE(t))&&Ee(e.type)&&(Zf(e.unevaluatedProperties)||vb(e.unevaluatedProperties))&&Ee(e.$id)}function Jf(e){return de(e,"Iterator")&&e.type==="Iterator"&&Ee(e.$id)&&ze(e.items)}function de(e,t){return ct(e)&&P in e&&e[P]===t}function Db(e){return wi(e)&&rt(e.const)}function xb(e){return wi(e)&&bn(e.const)}function Ab(e){return wi(e)&&Pa(e.const)}function wi(e){return de(e,"Literal")&&Ee(e.$id)&&LE(e.const)}function LE(e){return Pa(e)||bn(e)||rt(e)}function jE(e){return de(e,"MappedKey")&&cr(e.keys)&&e.keys.every(t=>bn(t)||rt(t))}function UE(e){return de(e,"MappedResult")&&$b(e.properties)}function vi(e){return de(e,"Never")&&ct(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function Jo(e){return de(e,"Not")&&ze(e.not)}function Yf(e){return de(e,"Null")&&e.type==="null"&&Ee(e.$id)}function ir(e){return de(e,"Number")&&e.type==="number"&&Ee(e.$id)&&ke(e.exclusiveMaximum)&&ke(e.exclusiveMinimum)&&ke(e.maximum)&&ke(e.minimum)&&ke(e.multipleOf)}function qe(e){return de(e,"Object")&&e.type==="object"&&Ee(e.$id)&&$b(e.properties)&&wb(e.additionalProperties)&&ke(e.minProperties)&&ke(e.maxProperties)}function Xf(e){return de(e,"Promise")&&e.type==="Promise"&&Ee(e.$id)&&ze(e.item)}function Pt(e){return de(e,"Record")&&e.type==="object"&&Ee(e.$id)&&wb(e.additionalProperties)&&ct(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&bb(r[0])&&ct(t.patternProperties)&&ze(t.patternProperties[r[0]])})(e)}function _E(e){return de(e,"Ref")&&Ee(e.$id)&&rt(e.$ref)}function pa(e){return de(e,"RegExp")&&Ee(e.$id)&&rt(e.source)&&rt(e.flags)&&ke(e.maxLength)&&ke(e.minLength)}function sn(e){return de(e,"String")&&e.type==="string"&&Ee(e.$id)&&ke(e.minLength)&&ke(e.maxLength)&&IE(e.pattern)&&OE(e.format)}function ga(e){return de(e,"Symbol")&&e.type==="symbol"&&Ee(e.$id)}function ya(e){return de(e,"TemplateLiteral")&&e.type==="string"&&rt(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function VE(e){return de(e,"This")&&Ee(e.$id)&&rt(e.$ref)}function WE(e){return ct(e)&&nr in e}function jl(e){return de(e,"Tuple")&&e.type==="array"&&Ee(e.$id)&&bn(e.minItems)&&bn(e.maxItems)&&e.minItems===e.maxItems&&(at(e.items)&&at(e.additionalItems)&&e.minItems===0||cr(e.items)&&e.items.every(t=>ze(t)))}function Hi(e){return de(e,"Undefined")&&e.type==="undefined"&&Ee(e.$id)}function zn(e){return de(e,"Union")&&Ee(e.$id)&&ct(e)&&cr(e.anyOf)&&e.anyOf.every(t=>ze(t))}function ja(e){return de(e,"Uint8Array")&&e.type==="Uint8Array"&&Ee(e.$id)&&ke(e.minByteLength)&&ke(e.maxByteLength)}function an(e){return de(e,"Unknown")&&Ee(e.$id)}function zE(e){return de(e,"Unsafe")}function Ul(e){return de(e,"Void")&&e.type==="void"&&Ee(e.$id)}function qE(e){return ct(e)&&P in e&&rt(e[P])&&!ME.includes(e[P])}function ze(e){return ct(e)&&(on(e)||BE(e)||so(e)||ao(e)||Ol(e)||Hf(e)||RE(e)||Bl(e)||Rl(e)||Ll(e)||Gn(e)||uo(e)||Jf(e)||wi(e)||jE(e)||UE(e)||vi(e)||Jo(e)||Yf(e)||ir(e)||qe(e)||Xf(e)||Pt(e)||_E(e)||pa(e)||sn(e)||ga(e)||ya(e)||VE(e)||jl(e)||Hi(e)||zn(e)||ja(e)||an(e)||zE(e)||Ul(e)||qE(e))}const KE="(true|false)",Nu="(0|[1-9][0-9]*)",Eb="(.*)",GE="(?!.*)",Yo=`^${Nu}$`,Xo=`^${Eb}$`,ZE=`^${GE}$`,Cb=new Map;function Qf(e){return Cb.has(e)}function em(e){return Cb.get(e)}const tm=new Map;function pi(e){return tm.has(e)}function rm(e,t){tm.set(e,t)}function nm(e){return tm.get(e)}function HE(e,t){return e.includes(t)}function JE(e){return[...new Set(e)]}function YE(e,t){return e.filter(r=>t.includes(r))}function XE(e,t){return e.reduce((r,n)=>YE(r,n),t)}function QE(e){return e.length===1?e[0]:e.length>1?XE(e.slice(1),e[0]):[]}function eC(e){const t=[];for(const r of e)t.push(...r);return t}function ba(e){return M({[P]:"Any"},e)}function im(e,t){return M({[P]:"Array",type:"array",items:e},t)}function tC(e){return M({[P]:"Argument",index:e})}function om(e,t){return M({[P]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function gt(e,t,r){return M({[P]:"Computed",target:e,parameters:t},r)}function rC(e,t){const{[t]:r,...n}=e;return n}function xr(e,t){return t.reduce((r,n)=>rC(r,n),e)}function Ke(e){return M({[P]:"Never",not:{}},e)}function It(e){return M({[P]:"MappedResult",properties:e})}function sm(e,t,r){return M({[P]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function Ua(e,t,r){return M({[P]:"Function",type:"Function",parameters:e,returns:t},r)}function Nd(e,t){return M({[P]:"Union",anyOf:e},t)}function nC(e){return e.some(t=>bi(t))}function cp(e){return e.map(t=>bi(t)?iC(t):t)}function iC(e){return xr(e,[Kn])}function oC(e,t){return nC(e)?xi(Nd(cp(e),t)):Nd(cp(e),t)}function ws(e,t){return e.length===1?M(e[0],t):e.length===0?Ke(t):oC(e,t)}function Ot(e,t){return e.length===0?Ke(t):e.length===1?M(e[0],t):Nd(e,t)}class dp extends Mt{}function sC(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function am(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function Bn(e,t){return am(e,t,"(")}function wa(e,t){return am(e,t,")")}function kb(e,t){return am(e,t,"|")}function aC(e){if(!(Bn(e,0)&&wa(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(Bn(e,r)&&(t+=1),wa(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function uC(e){return e.slice(1,e.length-1)}function lC(e){let t=0;for(let r=0;r<e.length;r++)if(Bn(e,r)&&(t+=1),wa(e,r)&&(t-=1),kb(e,r)&&t===0)return!0;return!1}function cC(e){for(let t=0;t<e.length;t++)if(Bn(e,t))return!0;return!1}function dC(e){let[t,r]=[0,0];const n=[];for(let o=0;o<e.length;o++)if(Bn(e,o)&&(t+=1),wa(e,o)&&(t-=1),kb(e,o)&&t===0){const s=e.slice(r,o);s.length>0&&n.push(Qo(s)),r=o+1}const i=e.slice(r);return i.length>0&&n.push(Qo(i)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function fC(e){function t(i,o){if(!Bn(i,o))throw new dp("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=o;a<i.length;a++)if(Bn(i,a)&&(s+=1),wa(i,a)&&(s-=1),s===0)return[o,a];throw new dp("TemplateLiteralParser: Unclosed group parens in expression")}function r(i,o){for(let s=o;s<i.length;s++)if(Bn(i,s))return[o,s];return[o,i.length]}const n=[];for(let i=0;i<e.length;i++)if(Bn(e,i)){const[o,s]=t(e,i),a=e.slice(o,s+1);n.push(Qo(a)),i=s}else{const[o,s]=r(e,i),a=e.slice(o,s);a.length>0&&n.push(Qo(a)),i=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function Qo(e){return aC(e)?Qo(uC(e)):lC(e)?dC(e):cC(e)?fC(e):{type:"const",const:sC(e)}}function um(e){return Qo(e.slice(1,e.length-1))}class mC extends Mt{}function hC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function pC(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function gC(e){return e.type==="const"&&e.const===".*"}function va(e){return hC(e)||gC(e)?!1:pC(e)?!0:e.type==="and"?e.expr.every(t=>va(t)):e.type==="or"?e.expr.every(t=>va(t)):e.type==="const"?!0:(()=>{throw new mC("Unknown expression type")})()}function yC(e){const t=um(e.pattern);return va(t)}class bC extends Mt{}function*Fb(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of Fb(e.slice(1)))yield`${t}${r}`}function*wC(e){return yield*Fb(e.expr.map(t=>[..._l(t)]))}function*vC(e){for(const t of e.expr)yield*_l(t)}function*$C(e){return yield e.const}function*_l(e){return e.type==="and"?yield*wC(e):e.type==="or"?yield*vC(e):e.type==="const"?yield*$C(e):(()=>{throw new bC("Unknown expression")})()}function Sb(e){const t=um(e.pattern);return va(t)?[..._l(t)]:[]}function ut(e,t){return M({[P]:"Literal",const:e,type:typeof e},t)}function Nb(e){return M({[P]:"Boolean",type:"boolean"},e)}function lm(e){return M({[P]:"BigInt",type:"bigint"},e)}function lo(e){return M({[P]:"Number",type:"number"},e)}function Ji(e){return M({[P]:"String",type:"string"},e)}function*DC(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield Nb():t==="number"?yield lo():t==="bigint"?yield lm():t==="string"?yield Ji():yield(()=>{const r=t.split("|").map(n=>ut(n.trim()));return r.length===0?Ke():r.length===1?r[0]:ws(r)})()}function*xC(e){if(e[1]!=="{"){const t=ut("$"),r=Td(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=DC(e.slice(2,t)),n=Td(e.slice(t+1));return yield*[...r,...n]}yield ut(e)}function*Td(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=ut(e.slice(0,t)),n=xC(e.slice(t));return yield*[r,...n]}yield ut(e)}function AC(e){return[...Td(e)]}class EC extends Mt{}function CC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Tb(e,t){return io(e)?e.pattern.slice(1,e.pattern.length-1):kt(e)?`(${e.anyOf.map(r=>Tb(r,t)).join("|")})`:bs(e)?`${t}${Nu}`:ys(e)?`${t}${Nu}`:Tl(e)?`${t}${Nu}`:Ra(e)?`${t}${Eb}`:ro(e)?`${t}${CC(e.const.toString())}`:Oa(e)?`${t}${KE}`:(()=>{throw new EC(`Unexpected Kind '${e[P]}'`)})()}function fp(e){return`^${e.map(t=>Tb(t,"")).join("")}$`}function el(e){const r=Sb(e).map(n=>ut(n));return ws(r)}function Pb(e,t){const r=rt(e)?fp(AC(e)):fp(e);return M({[P]:"TemplateLiteral",type:"string",pattern:r},t)}function kC(e){return Sb(e).map(r=>r.toString())}function FC(e){const t=[];for(const r of e)t.push(...$i(r));return t}function SC(e){return[e.toString()]}function $i(e){return[...new Set(io(e)?kC(e):kt(e)?FC(e.anyOf):ro(e)?SC(e.const):bs(e)?["[number]"]:ys(e)?["[number]"]:[])]}function NC(e,t,r){const n={};for(const i of Object.getOwnPropertyNames(t))n[i]=Vl(e,$i(t[i]),r);return n}function TC(e,t,r){return NC(e,t.properties,r)}function PC(e,t,r){const n=TC(e,t,r);return It(n)}function Mb(e,t){return e.map(r=>Ib(r,t))}function MC(e){return e.filter(t=>!Ba(t))}function IC(e,t){return Rb(MC(Mb(e,t)))}function OC(e){return e.some(t=>Ba(t))?[]:e}function BC(e,t){return ws(OC(Mb(e,t)))}function RC(e,t){return t in e?e[t]:t==="[number]"?ws(e):Ke()}function LC(e,t){return t==="[number]"?e:Ke()}function jC(e,t){return t in e?e[t]:Ke()}function Ib(e,t){return Vr(e)?IC(e.allOf,t):kt(e)?BC(e.anyOf,t):oo(e)?RC(e.items??[],t):ms(e)?LC(e.items,t):dn(e)?jC(e.properties,t):Ke()}function cm(e,t){return t.map(r=>Ib(e,r))}function mp(e,t){return ws(cm(e,t))}function Vl(e,t,r){if(ar(e)||ar(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Gt(e)||!Gt(t))throw new Mt(n);return gt("Index",[e,t])}return Cr(t)?PC(e,t,r):no(t)?WC(e,t,r):M(Gt(t)?mp(e,$i(t)):mp(e,t),r)}function UC(e,t,r){return{[t]:Vl(e,[t],$r(r))}}function _C(e,t,r){return t.reduce((n,i)=>({...n,...UC(e,i,r)}),{})}function VC(e,t,r){return _C(e,t.keys,r)}function WC(e,t,r){const n=VC(e,t,r);return It(n)}function dm(e,t){return M({[P]:"Iterator",type:"Iterator",items:e},t)}function zC(e){return globalThis.Object.keys(e).filter(t=>!bi(e[t]))}function qC(e,t){const r=zC(e),n=r.length>0?{[P]:"Object",type:"object",required:r,properties:e}:{[P]:"Object",type:"object",properties:e};return M(n,t)}var Ct=qC;function Ob(e,t){return M({[P]:"Promise",type:"Promise",item:e},t)}function KC(e){return M(xr(e,[Ia]))}function GC(e){return M({...e,[Ia]:"Readonly"})}function ZC(e,t){return t===!1?KC(e):GC(e)}function Di(e,t){const r=t??!0;return Cr(e)?YC(e,r):ZC(e,r)}function HC(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Di(e[n],t);return r}function JC(e,t){return HC(e.properties,t)}function YC(e,t){const r=JC(e,t);return It(r)}function vs(e,t){return M(e.length>0?{[P]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[P]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function Bb(e,t){return e in t?Tr(e,t[e]):It(t)}function XC(e){return{[e]:ut(e)}}function QC(e){const t={};for(const r of e)t[r]=ut(r);return t}function ek(e,t){return HE(t,e)?XC(e):QC(t)}function tk(e,t){const r=ek(e,t);return Bb(e,r)}function Os(e,t){return t.map(r=>Tr(e,r))}function rk(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=Tr(e,t[n]);return r}function Tr(e,t){const r={...t};return bi(t)?xi(Tr(e,xr(t,[Kn]))):zf(t)?Di(Tr(e,xr(t,[Ia]))):Cr(t)?Bb(e,t.properties):no(t)?tk(e,t.keys):ps(t)?sm(Os(e,t.parameters),Tr(e,t.returns),r):gs(t)?Ua(Os(e,t.parameters),Tr(e,t.returns),r):Nl(t)?om(Tr(e,t.items),r):Pl(t)?dm(Tr(e,t.items),r):Vr(t)?Ai(Os(e,t.allOf),r):kt(t)?Ot(Os(e,t.anyOf),r):oo(t)?vs(Os(e,t.items??[]),r):dn(t)?Ct(rk(e,t.properties),r):ms(t)?im(Tr(e,t.items),r):Ml(t)?Ob(Tr(e,t.item),r):t}function nk(e,t){const r={};for(const n of e)r[n]=Tr(n,t);return r}function ik(e,t,r){const n=Gt(e)?$i(e):e,i=t({[P]:"MappedKey",keys:n}),o=nk(n,i);return Ct(o,r)}function ok(e){return M(xr(e,[Kn]))}function sk(e){return M({...e,[Kn]:"Optional"})}function ak(e,t){return t===!1?ok(e):sk(e)}function xi(e,t){const r=t??!0;return Cr(e)?ck(e,r):ak(e,r)}function uk(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=xi(e[n],t);return r}function lk(e,t){return uk(e.properties,t)}function ck(e,t){const r=lk(e,t);return It(r)}function Pd(e,t={}){const r=e.every(i=>dn(i)),n=Gt(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return M(t.unevaluatedProperties===!1||Gt(t.unevaluatedProperties)||r?{...n,[P]:"Intersect",type:"object",allOf:e}:{...n,[P]:"Intersect",allOf:e},t)}function dk(e){return e.every(t=>bi(t))}function fk(e){return xr(e,[Kn])}function hp(e){return e.map(t=>bi(t)?fk(t):t)}function mk(e,t){return dk(e)?xi(Pd(hp(e),t)):Pd(hp(e),t)}function Rb(e,t={}){if(e.length===1)return M(e[0],t);if(e.length===0)return Ke(t);if(e.some(r=>Pe(r)))throw new Error("Cannot intersect transform types");return mk(e,t)}function Ai(e,t){if(e.length===1)return M(e[0],t);if(e.length===0)return Ke(t);if(e.some(r=>Pe(r)))throw new Error("Cannot intersect transform types");return Pd(e,t)}function $s(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new Mt("Ref: $ref must be a string");return M({[P]:"Ref",$ref:t},r)}function hk(e,t){return gt("Awaited",[gt(e,t)])}function pk(e){return gt("Awaited",[$s(e)])}function gk(e){return Ai(Lb(e))}function yk(e){return Ot(Lb(e))}function bk(e){return Wl(e)}function Lb(e){return e.map(t=>Wl(t))}function Wl(e,t){return M(hs(e)?hk(e.target,e.parameters):Vr(e)?gk(e.allOf):kt(e)?yk(e.anyOf):Ml(e)?bk(e.item):ar(e)?pk(e.$ref):e,t)}function jb(e){const t=[];for(const r of e)t.push(co(r));return t}function wk(e){const t=jb(e);return eC(t)}function vk(e){const t=jb(e);return QE(t)}function $k(e){return e.map((t,r)=>r.toString())}function Dk(e){return["[number]"]}function xk(e){return globalThis.Object.getOwnPropertyNames(e)}function Ak(e){return Md?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function co(e){return Vr(e)?wk(e.allOf):kt(e)?vk(e.anyOf):oo(e)?$k(e.items??[]):ms(e)?Dk(e.items):dn(e)?xk(e.properties):Il(e)?Ak(e.patternProperties):[]}let Md=!1;function es(e){Md=!0;const t=co(e);return Md=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function Ek(e,t){return gt("KeyOf",[gt(e,t)])}function Ck(e){return gt("KeyOf",[$s(e)])}function kk(e,t){const r=co(e),n=Fk(r),i=ws(n);return M(i,t)}function Fk(e){return e.map(t=>t==="[number]"?lo():ut(t))}function fm(e,t){return hs(e)?Ek(e.target,e.parameters):ar(e)?Ck(e.$ref):Cr(e)?Tk(e,t):kk(e,t)}function Sk(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=fm(e[n],$r(t));return r}function Nk(e,t){return Sk(e.properties,t)}function Tk(e,t){const r=Nk(e,t);return It(r)}function Ub(e){const t=co(e),r=cm(e,t);return t.map((n,i)=>[t[i],r[i]])}function Pk(e){const t=[];for(const r of e)t.push(...co(r));return JE(t)}function Mk(e){return e.filter(t=>!Ba(t))}function Ik(e,t){const r=[];for(const n of e)r.push(...cm(n,[t]));return Mk(r)}function Ok(e,t){const r={};for(const n of t)r[n]=Rb(Ik(e,n));return r}function Bk(e,t){const r=Pk(e),n=Ok(e,r);return Ct(n,t)}function _b(e){return M({[P]:"Date",type:"Date"},e)}function Vb(e){return M({[P]:"Null",type:"null"},e)}function Wb(e){return M({[P]:"Symbol",type:"symbol"},e)}function zb(e){return M({[P]:"Undefined",type:"undefined"},e)}function qb(e){return M({[P]:"Uint8Array",type:"Uint8Array"},e)}function zl(e){return M({[P]:"Unknown"},e)}function Rk(e){return e.map(t=>mm(t,!1))}function Lk(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Di(mm(e[r],!1));return t}function hu(e,t){return t===!0?e:Di(e)}function mm(e,t){return mE(e)||pE(e)?hu(ba(),t):cr(e)?Di(vs(Rk(e))):Ma(e)?qb():Uf(e)?_b():ct(e)?hu(Ct(Lk(e)),t):hE(e)?hu(Ua([],zl()),t):at(e)?zb():gE(e)?Vb():yE(e)?Wb():ob(e)?lm():bn(e)||Pa(e)||rt(e)?ut(e):Ct({})}function jk(e,t){return M(mm(e,!0),t)}function Uk(e,t){return ps(e)?vs(e.parameters,t):Ke(t)}function _k(e,t){if(at(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(r)].map(o=>ut(o));return Ot(i,{...t,[Sl]:"Enum"})}class Vk extends Mt{}var k;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(k||(k={}));function _r(e){return e===k.False?e:k.True}function Ds(e){throw new Vk(e)}function dt(e){return vi(e)||uo(e)||zn(e)||an(e)||on(e)}function ft(e,t){return vi(t)?Zb():uo(t)?ql(e,t):zn(t)?pm(e,t):an(t)?Xb():on(t)?hm():Ds("StructuralRight")}function hm(e,t){return k.True}function Wk(e,t){return uo(t)?ql(e,t):zn(t)&&t.anyOf.some(r=>on(r)||an(r))?k.True:zn(t)?k.Union:an(t)||on(t)?k.True:k.Union}function zk(e,t){return an(e)?k.False:on(e)?k.Union:vi(e)?k.True:k.False}function qk(e,t){return qe(t)&&Kl(t)?k.True:dt(t)?ft(e,t):so(t)?_r(Ae(e.items,t.items)):k.False}function Kk(e,t){return dt(t)?ft(e,t):Hf(t)?_r(Ae(e.items,t.items)):k.False}function Gk(e,t){return dt(t)?ft(e,t):qe(t)?Ut(e,t):Pt(t)?Wr(e,t):Ol(t)?k.True:k.False}function Kb(e,t){return Ab(e)||ao(e)?k.True:k.False}function Zk(e,t){return dt(t)?ft(e,t):qe(t)?Ut(e,t):Pt(t)?Wr(e,t):ao(t)?k.True:k.False}function Hk(e,t){return dt(t)?ft(e,t):qe(t)?Ut(e,t):Bl(t)?e.parameters.length>t.parameters.length?k.False:e.parameters.every((r,n)=>_r(Ae(t.parameters[n],r))===k.True)?_r(Ae(e.returns,t.returns)):k.False:k.False}function Jk(e,t){return dt(t)?ft(e,t):qe(t)?Ut(e,t):Pt(t)?Wr(e,t):Rl(t)?k.True:k.False}function Yk(e,t){return dt(t)?ft(e,t):qe(t)?Ut(e,t):Ll(t)?e.parameters.length>t.parameters.length?k.False:e.parameters.every((r,n)=>_r(Ae(t.parameters[n],r))===k.True)?_r(Ae(e.returns,t.returns)):k.False:k.False}function Gb(e,t){return wi(e)&&bn(e.const)||ir(e)||Gn(e)?k.True:k.False}function Xk(e,t){return Gn(t)||ir(t)?k.True:dt(t)?ft(e,t):qe(t)?Ut(e,t):Pt(t)?Wr(e,t):k.False}function ql(e,t){return t.allOf.every(r=>Ae(e,r)===k.True)?k.True:k.False}function Qk(e,t){return e.allOf.some(r=>Ae(r,t)===k.True)?k.True:k.False}function e4(e,t){return dt(t)?ft(e,t):Jf(t)?_r(Ae(e.items,t.items)):k.False}function t4(e,t){return wi(t)&&t.const===e.const?k.True:dt(t)?ft(e,t):qe(t)?Ut(e,t):Pt(t)?Wr(e,t):sn(t)?Yb(e):ir(t)?Hb(e):Gn(t)?Gb(e):ao(t)?Kb(e):k.False}function Zb(e,t){return k.False}function r4(e,t){return k.True}function pp(e){let[t,r]=[e,0];for(;Jo(t);)t=t.not,r+=1;return r%2===0?t:zl()}function n4(e,t){return Jo(e)?Ae(pp(e),t):Jo(t)?Ae(e,pp(t)):Ds("Invalid fallthrough for Not")}function i4(e,t){return dt(t)?ft(e,t):qe(t)?Ut(e,t):Pt(t)?Wr(e,t):Yf(t)?k.True:k.False}function Hb(e,t){return xb(e)||ir(e)||Gn(e)?k.True:k.False}function o4(e,t){return dt(t)?ft(e,t):qe(t)?Ut(e,t):Pt(t)?Wr(e,t):Gn(t)||ir(t)?k.True:k.False}function ur(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function gp(e){return Kl(e)}function yp(e){return ur(e,0)||ur(e,1)&&"description"in e.properties&&zn(e.properties.description)&&e.properties.description.anyOf.length===2&&(sn(e.properties.description.anyOf[0])&&Hi(e.properties.description.anyOf[1])||sn(e.properties.description.anyOf[1])&&Hi(e.properties.description.anyOf[0]))}function Rc(e){return ur(e,0)}function bp(e){return ur(e,0)}function s4(e){return ur(e,0)}function a4(e){return ur(e,0)}function u4(e){return Kl(e)}function l4(e){const t=lo();return ur(e,0)||ur(e,1)&&"length"in e.properties&&_r(Ae(e.properties.length,t))===k.True}function c4(e){return ur(e,0)}function Kl(e){const t=lo();return ur(e,0)||ur(e,1)&&"length"in e.properties&&_r(Ae(e.properties.length,t))===k.True}function d4(e){const t=Ua([ba()],ba());return ur(e,0)||ur(e,1)&&"then"in e.properties&&_r(Ae(e.properties.then,t))===k.True}function Jb(e,t){return Ae(e,t)===k.False||Qu(e)&&!Qu(t)?k.False:k.True}function Ut(e,t){return an(e)?k.False:on(e)?k.Union:vi(e)||Db(e)&&gp(t)||xb(e)&&Rc(t)||Ab(e)&&bp(t)||ga(e)&&yp(t)||Ol(e)&&s4(t)||sn(e)&&gp(t)||ga(e)&&yp(t)||ir(e)&&Rc(t)||Gn(e)&&Rc(t)||ao(e)&&bp(t)||ja(e)&&u4(t)||Rl(e)&&a4(t)||Bl(e)&&c4(t)||Ll(e)&&l4(t)?k.True:Pt(e)&&sn(Id(e))?t[Sl]==="Record"?k.True:k.False:Pt(e)&&ir(Id(e))&&ur(t,0)?k.True:k.False}function f4(e,t){return dt(t)?ft(e,t):Pt(t)?Wr(e,t):qe(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!Qu(t.properties[r]))return k.False;if(Qu(t.properties[r]))return k.True;if(Jb(e.properties[r],t.properties[r])===k.False)return k.False}return k.True})():k.False}function m4(e,t){return dt(t)?ft(e,t):qe(t)&&d4(t)?k.True:Xf(t)?_r(Ae(e.item,t.item)):k.False}function Id(e){return Yo in e.patternProperties?lo():Xo in e.patternProperties?Ji():Ds("Unknown record key pattern")}function Od(e){return Yo in e.patternProperties?e.patternProperties[Yo]:Xo in e.patternProperties?e.patternProperties[Xo]:Ds("Unable to get record value schema")}function Wr(e,t){const[r,n]=[Id(t),Od(t)];return Db(e)&&ir(r)&&_r(Ae(e,n))===k.True?k.True:ja(e)&&ir(r)||sn(e)&&ir(r)||so(e)&&ir(r)?Ae(e,n):qe(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(Jb(n,e.properties[i])===k.False)return k.False;return k.True})():k.False}function h4(e,t){return dt(t)?ft(e,t):qe(t)?Ut(e,t):Pt(t)?Ae(Od(e),Od(t)):k.False}function p4(e,t){const r=pa(e)?Ji():e,n=pa(t)?Ji():t;return Ae(r,n)}function Yb(e,t){return wi(e)&&rt(e.const)||sn(e)?k.True:k.False}function g4(e,t){return dt(t)?ft(e,t):qe(t)?Ut(e,t):Pt(t)?Wr(e,t):sn(t)?k.True:k.False}function y4(e,t){return dt(t)?ft(e,t):qe(t)?Ut(e,t):Pt(t)?Wr(e,t):ga(t)?k.True:k.False}function b4(e,t){return ya(e)?Ae(el(e),t):ya(t)?Ae(e,el(t)):Ds("Invalid fallthrough for TemplateLiteral")}function w4(e,t){return so(t)&&e.items!==void 0&&e.items.every(r=>Ae(r,t.items)===k.True)}function v4(e,t){return vi(e)?k.True:an(e)?k.False:on(e)?k.Union:k.False}function $4(e,t){return dt(t)?ft(e,t):qe(t)&&Kl(t)||so(t)&&w4(e,t)?k.True:jl(t)?at(e.items)&&!at(t.items)||!at(e.items)&&at(t.items)?k.False:at(e.items)&&!at(t.items)||e.items.every((r,n)=>Ae(r,t.items[n])===k.True)?k.True:k.False:k.False}function D4(e,t){return dt(t)?ft(e,t):qe(t)?Ut(e,t):Pt(t)?Wr(e,t):ja(t)?k.True:k.False}function x4(e,t){return dt(t)?ft(e,t):qe(t)?Ut(e,t):Pt(t)?Wr(e,t):Ul(t)?C4(e):Hi(t)?k.True:k.False}function pm(e,t){return t.anyOf.some(r=>Ae(e,r)===k.True)?k.True:k.False}function A4(e,t){return e.anyOf.every(r=>Ae(r,t)===k.True)?k.True:k.False}function Xb(e,t){return k.True}function E4(e,t){return vi(t)?Zb():uo(t)?ql(e,t):zn(t)?pm(e,t):on(t)?hm():sn(t)?Yb(e):ir(t)?Hb(e):Gn(t)?Gb(e):ao(t)?Kb(e):so(t)?zk(e):jl(t)?v4(e):qe(t)?Ut(e,t):an(t)?k.True:k.False}function C4(e,t){return Hi(e)||Hi(e)?k.True:k.False}function k4(e,t){return uo(t)?ql(e,t):zn(t)?pm(e,t):an(t)?Xb():on(t)?hm():qe(t)?Ut(e,t):Ul(t)?k.True:k.False}function Ae(e,t){return ya(e)||ya(t)?b4(e,t):pa(e)||pa(t)?p4(e,t):Jo(e)||Jo(t)?n4(e,t):on(e)?Wk(e,t):so(e)?qk(e,t):Ol(e)?Gk(e,t):ao(e)?Zk(e,t):Hf(e)?Kk(e,t):Bl(e)?Hk(e,t):Rl(e)?Jk(e,t):Ll(e)?Yk(e,t):Gn(e)?Xk(e,t):uo(e)?Qk(e,t):Jf(e)?e4(e,t):wi(e)?t4(e,t):vi(e)?r4():Yf(e)?i4(e,t):ir(e)?o4(e,t):qe(e)?f4(e,t):Pt(e)?h4(e,t):sn(e)?g4(e,t):ga(e)?y4(e,t):jl(e)?$4(e,t):Xf(e)?m4(e,t):ja(e)?D4(e,t):Hi(e)?x4(e,t):zn(e)?A4(e,t):an(e)?E4(e,t):Ul(e)?k4(e,t):Ds(`Unknown left type operand '${e[P]}'`)}function _a(e,t){return Ae(e,t)}function F4(e,t,r,n,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=gm(e[s],t,r,n,$r(i));return o}function S4(e,t,r,n,i){return F4(e.properties,t,r,n,i)}function N4(e,t,r,n,i){const o=S4(e,t,r,n,i);return It(o)}function T4(e,t,r,n){const i=_a(e,t);return i===k.Union?Ot([r,n]):i===k.True?r:n}function gm(e,t,r,n,i){return Cr(e)?N4(e,t,r,n,i):no(e)?M(O4(e,t,r,n,i)):M(T4(e,t,r,n),i)}function P4(e,t,r,n,i){return{[e]:gm(ut(e),t,r,n,$r(i))}}function M4(e,t,r,n,i){return e.reduce((o,s)=>({...o,...P4(s,t,r,n,i)}),{})}function I4(e,t,r,n,i){return M4(e.keys,t,r,n,i)}function O4(e,t,r,n,i){const o=I4(e,t,r,n,i);return It(o)}function B4(e){return e.allOf.every(t=>xs(t))}function R4(e){return e.anyOf.some(t=>xs(t))}function L4(e){return!xs(e.not)}function xs(e){return e[P]==="Intersect"?B4(e):e[P]==="Union"?R4(e):e[P]==="Not"?L4(e):e[P]==="Undefined"}function j4(e,t){return ym(el(e),t)}function U4(e,t){const r=e.filter(n=>_a(n,t)===k.False);return r.length===1?r[0]:Ot(r)}function ym(e,t,r={}){return io(e)?M(j4(e,t),r):Cr(e)?M(W4(e,t),r):M(kt(e)?U4(e.anyOf,t):_a(e,t)!==k.False?Ke():e,r)}function _4(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=ym(e[n],t);return r}function V4(e,t){return _4(e.properties,t)}function W4(e,t){const r=V4(e,t);return It(r)}function z4(e,t){return bm(el(e),t)}function q4(e,t){const r=e.filter(n=>_a(n,t)!==k.False);return r.length===1?r[0]:Ot(r)}function bm(e,t,r){return io(e)?M(z4(e,t),r):Cr(e)?M(Z4(e,t),r):M(kt(e)?q4(e.anyOf,t):_a(e,t)!==k.False?e:Ke(),r)}function K4(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=bm(e[n],t);return r}function G4(e,t){return K4(e.properties,t)}function Z4(e,t){const r=G4(e,t);return It(r)}function H4(e,t){return ps(e)?M(e.returns,t):Ke(t)}function Qb(e){return Di(xi(e))}function fo(e,t,r){return M({[P]:"Record",type:"object",patternProperties:{[e]:t}},r)}function wm(e,t,r){const n={};for(const i of e)n[i]=t;return Ct(n,{...r,[Sl]:"Record"})}function J4(e,t,r){return yC(e)?wm($i(e),t,r):fo(e.pattern,t,r)}function Y4(e,t,r){return wm($i(Ot(e)),t,r)}function X4(e,t,r){return wm([e.toString()],t,r)}function Q4(e,t,r){return fo(e.source,t,r)}function e3(e,t,r){const n=at(e.pattern)?Xo:e.pattern;return fo(n,t,r)}function t3(e,t,r){return fo(Xo,t,r)}function r3(e,t,r){return fo(ZE,t,r)}function n3(e,t,r){return Ct({true:t,false:t},r)}function i3(e,t,r){return fo(Yo,t,r)}function o3(e,t,r){return fo(Yo,t,r)}function ew(e,t,r={}){return kt(e)?Y4(e.anyOf,t,r):io(e)?J4(e,t,r):ro(e)?X4(e.const,t,r):Oa(e)?n3(e,t,r):ys(e)?i3(e,t,r):bs(e)?o3(e,t,r):yb(e)?Q4(e,t,r):Ra(e)?e3(e,t,r):hb(e)?t3(e,t,r):Ba(e)?r3(e,t,r):Ke(r)}function vm(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function s3(e){const t=vm(e);return t===Xo?Ji():t===Yo?lo():Ji({pattern:t})}function tw(e){return e.patternProperties[vm(e)]}function a3(e,t){return t.parameters=Va(e,t.parameters),t.returns=un(e,t.returns),t}function u3(e,t){return t.parameters=Va(e,t.parameters),t.returns=un(e,t.returns),t}function l3(e,t){return t.allOf=Va(e,t.allOf),t}function c3(e,t){return t.anyOf=Va(e,t.anyOf),t}function d3(e,t){return at(t.items)||(t.items=Va(e,t.items)),t}function f3(e,t){return t.items=un(e,t.items),t}function m3(e,t){return t.items=un(e,t.items),t}function h3(e,t){return t.items=un(e,t.items),t}function p3(e,t){return t.item=un(e,t.item),t}function g3(e,t){const r=v3(e,t.properties);return{...t,...Ct(r)}}function y3(e,t){const r=un(e,s3(t)),n=un(e,tw(t)),i=ew(r,n);return{...t,...i}}function b3(e,t){return t.index in e?e[t.index]:zl()}function w3(e,t){const r=zf(t),n=bi(t),i=un(e,t);return r&&n?Qb(i):r&&!n?Di(i):!r&&n?xi(i):i}function v3(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:w3(e,t[n])}),{})}function Va(e,t){return t.map(r=>un(e,r))}function un(e,t){return ps(t)?a3(e,t):gs(t)?u3(e,t):Vr(t)?l3(e,t):kt(t)?c3(e,t):oo(t)?d3(e,t):ms(t)?f3(e,t):Nl(t)?m3(e,t):Pl(t)?h3(e,t):Ml(t)?p3(e,t):dn(t)?g3(e,t):Il(t)?y3(e,t):pb(t)?b3(e,t):t}function $3(e,t){return un(t,_f(e))}function D3(e){return M({[P]:"Integer",type:"integer"},e)}function x3(e,t,r){return{[e]:As(ut(e),t,$r(r))}}function A3(e,t,r){return e.reduce((i,o)=>({...i,...x3(o,t,r)}),{})}function E3(e,t,r){return A3(e.keys,t,r)}function C3(e,t,r){const n=E3(e,t,r);return It(n)}function k3(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function F3(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function S3(e){return e.toUpperCase()}function N3(e){return e.toLowerCase()}function T3(e,t,r){const n=um(e.pattern);if(!va(n))return{...e,pattern:rw(e.pattern,t)};const s=[..._l(n)].map(l=>ut(l)),a=nw(s,t),u=Ot(a);return Pb([u],r)}function rw(e,t){return typeof e=="string"?t==="Uncapitalize"?k3(e):t==="Capitalize"?F3(e):t==="Uppercase"?S3(e):t==="Lowercase"?N3(e):e:e.toString()}function nw(e,t){return e.map(r=>As(r,t))}function As(e,t,r={}){return no(e)?C3(e,t,r):io(e)?T3(e,t,r):kt(e)?Ot(nw(e.anyOf,t),r):ro(e)?ut(rw(e.const,t),r):M(e,r)}function P3(e,t={}){return As(e,"Capitalize",t)}function M3(e,t={}){return As(e,"Lowercase",t)}function I3(e,t={}){return As(e,"Uncapitalize",t)}function O3(e,t={}){return As(e,"Uppercase",t)}function B3(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=Gl(e[i],t,$r(r));return n}function R3(e,t,r){return B3(e.properties,t,r)}function L3(e,t,r){const n=R3(e,t,r);return It(n)}function j3(e,t){return e.map(r=>$m(r,t))}function U3(e,t){return e.map(r=>$m(r,t))}function _3(e,t){const{[t]:r,...n}=e;return n}function V3(e,t){return t.reduce((r,n)=>_3(r,n),e)}function W3(e,t,r){const n=xr(e,[nr,"$id","required","properties"]),i=V3(r,t);return Ct(i,n)}function z3(e){const t=e.reduce((r,n)=>gb(n)?[...r,ut(n)]:r,[]);return Ot(t)}function $m(e,t){return Vr(e)?Ai(j3(e.allOf,t)):kt(e)?Ot(U3(e.anyOf,t)):dn(e)?W3(e,t,e.properties):Ct({})}function Gl(e,t,r){const n=cr(t)?z3(t):t,i=Gt(t)?$i(t):t,o=ar(e),s=ar(t);return Cr(e)?L3(e,i,r):no(t)?Z3(e,t,r):o&&s?gt("Omit",[e,n],r):!o&&s?gt("Omit",[e,n],r):o&&!s?gt("Omit",[e,n],r):M({...$m(e,i),...r})}function q3(e,t,r){return{[t]:Gl(e,[t],$r(r))}}function K3(e,t,r){return t.reduce((n,i)=>({...n,...q3(e,i,r)}),{})}function G3(e,t,r){return K3(e,t.keys,r)}function Z3(e,t,r){const n=G3(e,t,r);return It(n)}function H3(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=Zl(e[i],t,$r(r));return n}function J3(e,t,r){return H3(e.properties,t,r)}function Y3(e,t,r){const n=J3(e,t,r);return It(n)}function X3(e,t){return e.map(r=>Dm(r,t))}function Q3(e,t){return e.map(r=>Dm(r,t))}function eF(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function tF(e,t,r){const n=xr(e,[nr,"$id","required","properties"]),i=eF(r,t);return Ct(i,n)}function rF(e){const t=e.reduce((r,n)=>gb(n)?[...r,ut(n)]:r,[]);return Ot(t)}function Dm(e,t){return Vr(e)?Ai(X3(e.allOf,t)):kt(e)?Ot(Q3(e.anyOf,t)):dn(e)?tF(e,t,e.properties):Ct({})}function Zl(e,t,r){const n=cr(t)?rF(t):t,i=Gt(t)?$i(t):t,o=ar(e),s=ar(t);return Cr(e)?Y3(e,i,r):no(t)?sF(e,t,r):o&&s?gt("Pick",[e,n],r):!o&&s?gt("Pick",[e,n],r):o&&!s?gt("Pick",[e,n],r):M({...Dm(e,i),...r})}function nF(e,t,r){return{[t]:Zl(e,[t],$r(r))}}function iF(e,t,r){return t.reduce((n,i)=>({...n,...nF(e,i,r)}),{})}function oF(e,t,r){return iF(e,t.keys,r)}function sF(e,t,r){const n=oF(e,t,r);return It(n)}function aF(e,t){return gt("Partial",[gt(e,t)])}function uF(e){return gt("Partial",[$s(e)])}function lF(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=xi(e[r]);return t}function cF(e,t){const r=xr(e,[nr,"$id","required","properties"]),n=lF(t);return Ct(n,r)}function wp(e){return e.map(t=>iw(t))}function iw(e){return hs(e)?aF(e.target,e.parameters):ar(e)?uF(e.$ref):Vr(e)?Ai(wp(e.allOf)):kt(e)?Ot(wp(e.anyOf)):dn(e)?cF(e,e.properties):Tl(e)||Oa(e)||ys(e)||ro(e)||qf(e)||bs(e)||Ra(e)||Kf(e)||La(e)?e:Ct({})}function xm(e,t){return Cr(e)?mF(e,t):M({...iw(e),...t})}function dF(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=xm(e[n],$r(t));return r}function fF(e,t){return dF(e.properties,t)}function mF(e,t){const r=fF(e,t);return It(r)}function hF(e,t){return gt("Required",[gt(e,t)])}function pF(e){return gt("Required",[$s(e)])}function gF(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=xr(e[r],[Kn]);return t}function yF(e,t){const r=xr(e,[nr,"$id","required","properties"]),n=gF(t);return Ct(n,r)}function vp(e){return e.map(t=>ow(t))}function ow(e){return hs(e)?hF(e.target,e.parameters):ar(e)?pF(e.$ref):Vr(e)?Ai(vp(e.allOf)):kt(e)?Ot(vp(e.anyOf)):dn(e)?yF(e,e.properties):Tl(e)||Oa(e)||ys(e)||ro(e)||qf(e)||bs(e)||Ra(e)||Kf(e)||La(e)?e:Ct({})}function Am(e,t){return Cr(e)?vF(e,t):M({...ow(e),...t})}function bF(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Am(e[n],t);return r}function wF(e,t){return bF(e.properties,t)}function vF(e,t){const r=wF(e,t);return It(r)}function $F(e,t){return t.map(r=>ar(r)?Em(e,r.$ref):Ar(e,r))}function Em(e,t){return t in e?ar(e[t])?Em(e,e[t].$ref):Ar(e,e[t]):Ke()}function DF(e){return Wl(e[0])}function xF(e){return Vl(e[0],e[1])}function AF(e){return fm(e[0])}function EF(e){return xm(e[0])}function CF(e){return Gl(e[0],e[1])}function kF(e){return Zl(e[0],e[1])}function FF(e){return Am(e[0])}function SF(e,t,r){const n=$F(e,r);return t==="Awaited"?DF(n):t==="Index"?xF(n):t==="KeyOf"?AF(n):t==="Partial"?EF(n):t==="Omit"?CF(n):t==="Pick"?kF(n):t==="Required"?FF(n):Ke()}function NF(e,t){return im(Ar(e,t))}function TF(e,t){return om(Ar(e,t))}function PF(e,t,r){return sm(Wa(e,t),Ar(e,r))}function MF(e,t,r){return Ua(Wa(e,t),Ar(e,r))}function IF(e,t){return Ai(Wa(e,t))}function OF(e,t){return dm(Ar(e,t))}function BF(e,t){return Ct(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:Ar(e,t[n])}),{}))}function RF(e,t){const[r,n]=[Ar(e,tw(t)),vm(t)],i=_f(t);return i.patternProperties[n]=r,i}function LF(e,t){return ar(t)?{...Em(e,t.$ref),[nr]:t[nr]}:t}function jF(e,t){return vs(Wa(e,t))}function UF(e,t){return Ot(Wa(e,t))}function Wa(e,t){return t.map(r=>Ar(e,r))}function Ar(e,t){return bi(t)?M(Ar(e,xr(t,[Kn])),t):zf(t)?M(Ar(e,xr(t,[Ia])),t):Pe(t)?M(LF(e,t),t):ms(t)?M(NF(e,t.items),t):Nl(t)?M(TF(e,t.items),t):hs(t)?M(SF(e,t.target,t.parameters)):ps(t)?M(PF(e,t.parameters,t.returns),t):gs(t)?M(MF(e,t.parameters,t.returns),t):Vr(t)?M(IF(e,t.allOf),t):Pl(t)?M(OF(e,t.items),t):dn(t)?M(BF(e,t.properties),t):Il(t)?M(RF(e,t)):oo(t)?M(jF(e,t.items||[]),t):kt(t)?M(UF(e,t.anyOf),t):t}function _F(e,t){return t in e?Ar(e,e[t]):Ke()}function VF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:_F(e,r)}),{})}class WF{constructor(t){const r=VF(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:M(this.$defs[t],r)};return M({[P]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function zF(e){return new WF(e)}function qF(e,t){return M({[P]:"Not",not:e},t)}function KF(e,t){return gs(e)?vs(e.parameters,t):Ke()}let GF=0;function ZF(e,t={}){at(t.$id)&&(t.$id=`T${GF++}`);const r=_f(e({[P]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,M({[Sl]:"Recursive",...r},t)}function HF(e,t){const r=rt(e)?new globalThis.RegExp(e):e;return M({[P]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function JF(e){return Vr(e)?e.allOf:kt(e)?e.anyOf:oo(e)?e.items??[]:[]}function YF(e){return JF(e)}function XF(e,t){return gs(e)?M(e.returns,t):Ke(t)}class QF{constructor(t){this.schema=t}Decode(t){return new e6(this.schema,t)}}class e6{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const o={Encode:s=>r[nr].Encode(t(s)),Decode:s=>this.decode(r[nr].Decode(s))};return{...r,[nr]:o}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[nr]:n}}Encode(t){return Pe(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function t6(e){return new QF(e)}function r6(e={}){return M({[P]:e[P]??"Unsafe"},e)}function n6(e){return M({[P]:"Void",type:"void"},e)}const i6=Object.freeze(Object.defineProperty({__proto__:null,Any:ba,Argument:tC,Array:im,AsyncIterator:om,Awaited:Wl,BigInt:lm,Boolean:Nb,Capitalize:P3,Composite:Bk,Const:jk,Constructor:sm,ConstructorParameters:Uk,Date:_b,Enum:_k,Exclude:ym,Extends:gm,Extract:bm,Function:Ua,Index:Vl,InstanceType:H4,Instantiate:$3,Integer:D3,Intersect:Ai,Iterator:dm,KeyOf:fm,Literal:ut,Lowercase:M3,Mapped:ik,Module:zF,Never:Ke,Not:qF,Null:Vb,Number:lo,Object:Ct,Omit:Gl,Optional:xi,Parameters:KF,Partial:xm,Pick:Zl,Promise:Ob,Readonly:Di,ReadonlyOptional:Qb,Record:ew,Recursive:ZF,Ref:$s,RegExp:HF,Required:Am,Rest:YF,ReturnType:XF,String:Ji,Symbol:Wb,TemplateLiteral:Pb,Transform:t6,Tuple:vs,Uint8Array:qb,Uncapitalize:I3,Undefined:zb,Union:Ot,Unknown:zl,Unsafe:r6,Uppercase:O3,Void:n6},Symbol.toStringTag,{value:"Module"})),Te=i6;function sw(e){switch(e.errorType){case x.ArrayContains:return"Expected array to contain at least one matching value";case x.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case x.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case x.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case x.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case x.ArrayUniqueItems:return"Expected array elements to be unique";case x.Array:return"Expected array";case x.AsyncIterator:return"Expected AsyncIterator";case x.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case x.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case x.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case x.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case x.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case x.BigInt:return"Expected bigint";case x.Boolean:return"Expected boolean";case x.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case x.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case x.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case x.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case x.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case x.Date:return"Expected Date";case x.Function:return"Expected function";case x.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case x.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case x.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case x.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case x.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case x.Integer:return"Expected integer";case x.IntersectUnevaluatedProperties:return"Unexpected property";case x.Intersect:return"Expected all values to match";case x.Iterator:return"Expected Iterator";case x.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case x.Never:return"Never";case x.Not:return"Value should not match";case x.Null:return"Expected null";case x.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case x.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case x.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case x.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case x.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case x.Number:return"Expected number";case x.Object:return"Expected object";case x.ObjectAdditionalProperties:return"Unexpected property";case x.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case x.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case x.ObjectRequiredProperty:return"Expected required property";case x.Promise:return"Expected Promise";case x.RegExp:return"Expected string to match regular expression";case x.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case x.StringFormat:return`Expected string to match '${e.schema.format}' format`;case x.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case x.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case x.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case x.String:return"Expected string";case x.Symbol:return"Expected symbol";case x.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case x.Tuple:return"Expected tuple";case x.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case x.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case x.Uint8Array:return"Expected Uint8Array";case x.Undefined:return"Expected undefined";case x.Union:return"Expected union value";case x.Void:return"Expected void";case x.Kind:return`Expected kind '${e.schema[P]}'`;default:return"Unknown error type"}}let aw=sw;function o6(e){aw=e}function s6(){return aw}class a6 extends Mt{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function u6(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new a6(e);return zr(r,t)}function Hl(e,t){return!br(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function zr(e,t){return e[P]==="This"||e[P]==="Ref"?u6(e,t):e}class l6 extends Mt{constructor(t){super("Unable to hash value"),this.value=t}}var Er;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(Er||(Er={}));let ko=BigInt("14695981039346656037");const[c6,d6]=[BigInt("1099511628211"),BigInt("18446744073709551616")],f6=Array.from({length:256}).map((e,t)=>BigInt(t)),uw=new Float64Array(1),lw=new DataView(uw.buffer),cw=new Uint8Array(uw.buffer);function*m6(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function h6(e){jt(Er.Array);for(const t of e)ts(t)}function p6(e){jt(Er.Boolean),jt(e?1:0)}function g6(e){jt(Er.BigInt),lw.setBigInt64(0,e);for(const t of cw)jt(t)}function y6(e){jt(Er.Date),ts(e.getTime())}function b6(e){jt(Er.Null)}function w6(e){jt(Er.Number),lw.setFloat64(0,e);for(const t of cw)jt(t)}function v6(e){jt(Er.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())ts(t),ts(e[t])}function $6(e){jt(Er.String);for(let t=0;t<e.length;t++)for(const r of m6(e.charCodeAt(t)))jt(r)}function D6(e){jt(Er.Symbol),ts(e.description)}function x6(e){jt(Er.Uint8Array);for(let t=0;t<e.length;t++)jt(e[t])}function A6(e){return jt(Er.Undefined)}function ts(e){if(Dr(e))return h6(e);if(kl(e))return p6(e);if(Pn(e))return g6(e);if(Vf(e))return y6(e);if(Cl(e))return b6();if(re(e))return w6(e);if(vn(e))return v6(e);if(br(e))return $6(e);if(Fl(e))return D6(e);if(Wf(e))return x6(e);if(yi(e))return A6();throw new l6(e)}function jt(e){ko=ko^f6[e],ko=ko*c6%d6}function Cm(e){return ko=BigInt("14695981039346656037"),ts(e),ko}class E6 extends Mt{constructor(t){super("Unknown type"),this.schema=t}}function C6(e){return e[P]==="Any"||e[P]==="Unknown"}function se(e){return e!==void 0}function k6(e,t,r){return!0}function F6(e,t,r){return!0}function S6(e,t,r){if(!Dr(r)||se(e.minItems)&&!(r.length>=e.minItems)||se(e.maxItems)&&!(r.length<=e.maxItems)||!r.every(o=>xt(e.items,t,o))||e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of r){const a=Cm(s);if(o.has(a))return!1;o.add(a)}return!0})())return!1;if(!(se(e.contains)||re(e.minContains)||re(e.maxContains)))return!0;const n=se(e.contains)?e.contains:Ke(),i=r.reduce((o,s)=>xt(n,t,s)?o+1:o,0);return!(i===0||re(e.minContains)&&i<e.minContains||re(e.maxContains)&&i>e.maxContains)}function N6(e,t,r){return ab(r)}function T6(e,t,r){return!(!Pn(r)||se(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||se(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||se(e.maximum)&&!(r<=e.maximum)||se(e.minimum)&&!(r>=e.minimum)||se(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function P6(e,t,r){return kl(r)}function M6(e,t,r){return xt(e.returns,t,r.prototype)}function I6(e,t,r){return!(!Vf(r)||se(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||se(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||se(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||se(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||se(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function O6(e,t,r){return fb(r)}function B6(e,t,r){const n=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return xt(i,[...t,...n],r)}function R6(e,t,r){return!(!db(r)||se(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||se(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||se(e.maximum)&&!(r<=e.maximum)||se(e.minimum)&&!(r>=e.minimum)||se(e.multipleOf)&&r%e.multipleOf!==0)}function L6(e,t,r){const n=e.allOf.every(i=>xt(i,t,r));if(e.unevaluatedProperties===!1){const i=new RegExp(es(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s));return n&&o}else if(Gt(e.unevaluatedProperties)){const i=new RegExp(es(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s)||xt(e.unevaluatedProperties,t,r[s]));return n&&o}else return n}function j6(e,t,r){return ub(r)}function U6(e,t,r){return r===e.const}function _6(e,t,r){return!1}function V6(e,t,r){return!xt(e.not,t,r)}function W6(e,t,r){return Cl(r)}function z6(e,t,r){return!(!tt.IsNumberLike(r)||se(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||se(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||se(e.minimum)&&!(r>=e.minimum)||se(e.maximum)&&!(r<=e.maximum)||se(e.multipleOf)&&r%e.multipleOf!==0)}function q6(e,t,r){if(!tt.IsObjectLike(r)||se(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||se(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const i of n){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!xt(o,t,r[i])||(xs(o)||C6(o))&&!(i in r))return!1}else if(tt.IsExactOptionalProperty(r,i)&&!xt(o,t,r[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&i.length===n.length?!0:i.every(o=>n.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(o=>n.includes(o)||xt(e.additionalProperties,t,r[o])):!0}function K6(e,t,r){return lb(r)}function G6(e,t,r){if(!tt.IsRecordLike(r)||se(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||se(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,i]=Object.entries(e.patternProperties)[0],o=new RegExp(n),s=Object.entries(r).every(([l,c])=>o.test(l)?xt(i,t,c):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([l,c])=>o.test(l)?!0:xt(e.additionalProperties,t,c)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(l=>o.test(l)):!0;return s&&a&&u}function Z6(e,t,r){return xt(zr(e,t),t,r)}function H6(e,t,r){const n=new RegExp(e.source,e.flags);return se(e.minLength)&&!(r.length>=e.minLength)||se(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function J6(e,t,r){return!br(r)||se(e.minLength)&&!(r.length>=e.minLength)||se(e.maxLength)&&!(r.length<=e.maxLength)||se(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:se(e.format)?Qf(e.format)?em(e.format)(r):!1:!0}function Y6(e,t,r){return Fl(r)}function X6(e,t,r){return br(r)&&new RegExp(e.pattern).test(r)}function Q6(e,t,r){return xt(zr(e,t),t,r)}function e8(e,t,r){if(!Dr(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!xt(e.items[n],t,r[n]))return!1;return!0}function t8(e,t,r){return yi(r)}function r8(e,t,r){return e.anyOf.some(n=>xt(n,t,r))}function n8(e,t,r){return!(!Wf(r)||se(e.maxByteLength)&&!(r.length<=e.maxByteLength)||se(e.minByteLength)&&!(r.length>=e.minByteLength))}function i8(e,t,r){return!0}function o8(e,t,r){return tt.IsVoidLike(r)}function s8(e,t,r){return pi(e[P])?nm(e[P])(e,r):!1}function xt(e,t,r){const n=se(e.$id)?Hl(e,t):t,i=e;switch(i[P]){case"Any":return k6();case"Argument":return F6();case"Array":return S6(i,n,r);case"AsyncIterator":return N6(i,n,r);case"BigInt":return T6(i,n,r);case"Boolean":return P6(i,n,r);case"Constructor":return M6(i,n,r);case"Date":return I6(i,n,r);case"Function":return O6(i,n,r);case"Import":return B6(i,n,r);case"Integer":return R6(i,n,r);case"Intersect":return L6(i,n,r);case"Iterator":return j6(i,n,r);case"Literal":return U6(i,n,r);case"Never":return _6();case"Not":return V6(i,n,r);case"Null":return W6(i,n,r);case"Number":return z6(i,n,r);case"Object":return q6(i,n,r);case"Promise":return K6(i,n,r);case"Record":return G6(i,n,r);case"Ref":return Z6(i,n,r);case"RegExp":return H6(i,n,r);case"String":return J6(i,n,r);case"Symbol":return Y6(i,n,r);case"TemplateLiteral":return X6(i,n,r);case"This":return Q6(i,n,r);case"Tuple":return e8(i,n,r);case"Undefined":return t8(i,n,r);case"Union":return r8(i,n,r);case"Uint8Array":return n8(i,n,r);case"Unknown":return i8();case"Void":return o8(i,n,r);default:if(!pi(i[P]))throw new E6(i);return s8(i,n,r)}}function tl(...e){return e.length===3?xt(e[0],e[1],e[2]):xt(e[0],[],e[1])}var x;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(x||(x={}));class a8 extends Mt{constructor(t){super("Unknown type"),this.schema=t}}function Fn(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function oe(e){return e!==void 0}class dw{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function O(e,t,r,n,i=[]){return{type:e,schema:t,path:r,value:n,message:s6()({errorType:e,path:r,schema:t,value:n,errors:i}),errors:i}}function*u8(e,t,r,n){}function*l8(e,t,r,n){}function*c8(e,t,r,n){if(!Dr(n))return yield O(x.Array,e,r,n);oe(e.minItems)&&!(n.length>=e.minItems)&&(yield O(x.ArrayMinItems,e,r,n)),oe(e.maxItems)&&!(n.length<=e.maxItems)&&(yield O(x.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*At(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const u=Cm(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield O(x.ArrayUniqueItems,e,r,n)),!(oe(e.contains)||oe(e.minContains)||oe(e.maxContains)))return;const i=oe(e.contains)?e.contains:Ke(),o=n.reduce((s,a,u)=>At(i,t,`${r}${u}`,a).next().done===!0?s+1:s,0);o===0&&(yield O(x.ArrayContains,e,r,n)),re(e.minContains)&&o<e.minContains&&(yield O(x.ArrayMinContains,e,r,n)),re(e.maxContains)&&o>e.maxContains&&(yield O(x.ArrayMaxContains,e,r,n))}function*d8(e,t,r,n){ab(n)||(yield O(x.AsyncIterator,e,r,n))}function*f8(e,t,r,n){if(!Pn(n))return yield O(x.BigInt,e,r,n);oe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield O(x.BigIntExclusiveMaximum,e,r,n)),oe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield O(x.BigIntExclusiveMinimum,e,r,n)),oe(e.maximum)&&!(n<=e.maximum)&&(yield O(x.BigIntMaximum,e,r,n)),oe(e.minimum)&&!(n>=e.minimum)&&(yield O(x.BigIntMinimum,e,r,n)),oe(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield O(x.BigIntMultipleOf,e,r,n))}function*m8(e,t,r,n){kl(n)||(yield O(x.Boolean,e,r,n))}function*h8(e,t,r,n){yield*At(e.returns,t,r,n.prototype)}function*p8(e,t,r,n){if(!Vf(n))return yield O(x.Date,e,r,n);oe(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield O(x.DateExclusiveMaximumTimestamp,e,r,n)),oe(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield O(x.DateExclusiveMinimumTimestamp,e,r,n)),oe(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield O(x.DateMaximumTimestamp,e,r,n)),oe(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield O(x.DateMinimumTimestamp,e,r,n)),oe(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield O(x.DateMultipleOfTimestamp,e,r,n))}function*g8(e,t,r,n){fb(n)||(yield O(x.Function,e,r,n))}function*y8(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*At(o,[...t,...i],r,n)}function*b8(e,t,r,n){if(!db(n))return yield O(x.Integer,e,r,n);oe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield O(x.IntegerExclusiveMaximum,e,r,n)),oe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield O(x.IntegerExclusiveMinimum,e,r,n)),oe(e.maximum)&&!(n<=e.maximum)&&(yield O(x.IntegerMaximum,e,r,n)),oe(e.minimum)&&!(n>=e.minimum)&&(yield O(x.IntegerMinimum,e,r,n)),oe(e.multipleOf)&&n%e.multipleOf!==0&&(yield O(x.IntegerMultipleOf,e,r,n))}function*w8(e,t,r,n){let i=!1;for(const o of e.allOf)for(const s of At(o,t,r,n))i=!0,yield s;if(i)return yield O(x.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const o=new RegExp(es(e));for(const s of Object.getOwnPropertyNames(n))o.test(s)||(yield O(x.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp(es(e));for(const s of Object.getOwnPropertyNames(n))if(!o.test(s)){const a=At(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*v8(e,t,r,n){ub(n)||(yield O(x.Iterator,e,r,n))}function*$8(e,t,r,n){n!==e.const&&(yield O(x.Literal,e,r,n))}function*D8(e,t,r,n){yield O(x.Never,e,r,n)}function*x8(e,t,r,n){At(e.not,t,r,n).next().done===!0&&(yield O(x.Not,e,r,n))}function*A8(e,t,r,n){Cl(n)||(yield O(x.Null,e,r,n))}function*E8(e,t,r,n){if(!tt.IsNumberLike(n))return yield O(x.Number,e,r,n);oe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield O(x.NumberExclusiveMaximum,e,r,n)),oe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield O(x.NumberExclusiveMinimum,e,r,n)),oe(e.maximum)&&!(n<=e.maximum)&&(yield O(x.NumberMaximum,e,r,n)),oe(e.minimum)&&!(n>=e.minimum)&&(yield O(x.NumberMinimum,e,r,n)),oe(e.multipleOf)&&n%e.multipleOf!==0&&(yield O(x.NumberMultipleOf,e,r,n))}function*C8(e,t,r,n){if(!tt.IsObjectLike(n))return yield O(x.Object,e,r,n);oe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield O(x.ObjectMinProperties,e,r,n)),oe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield O(x.ObjectMaxProperties,e,r,n));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of i)s.includes(a)||(yield O(x.ObjectRequiredProperty,e.properties[a],`${r}/${Fn(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)o.includes(a)||(yield O(x.ObjectAdditionalProperties,e,`${r}/${Fn(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)o.includes(a)||(yield*At(e.additionalProperties,t,`${r}/${Fn(a)}`,n[a]));for(const a of o){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*At(u,t,`${r}/${Fn(a)}`,n[a]),xs(e)&&!(a in n)&&(yield O(x.ObjectRequiredProperty,u,`${r}/${Fn(a)}`,void 0))):tt.IsExactOptionalProperty(n,a)&&(yield*At(u,t,`${r}/${Fn(a)}`,n[a]))}}function*k8(e,t,r,n){lb(n)||(yield O(x.Promise,e,r,n))}function*F8(e,t,r,n){if(!tt.IsRecordLike(n))return yield O(x.Object,e,r,n);oe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield O(x.ObjectMinProperties,e,r,n)),oe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield O(x.ObjectMaxProperties,e,r,n));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[a,u]of Object.entries(n))s.test(a)&&(yield*At(o,t,`${r}/${Fn(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(n))s.test(a)||(yield*At(e.additionalProperties,t,`${r}/${Fn(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(n))if(!s.test(a))return yield O(x.ObjectAdditionalProperties,e,`${r}/${Fn(a)}`,u)}}function*S8(e,t,r,n){yield*At(zr(e,t),t,r,n)}function*N8(e,t,r,n){if(!br(n))return yield O(x.String,e,r,n);if(oe(e.minLength)&&!(n.length>=e.minLength)&&(yield O(x.StringMinLength,e,r,n)),oe(e.maxLength)&&!(n.length<=e.maxLength)&&(yield O(x.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield O(x.RegExp,e,r,n)}function*T8(e,t,r,n){if(!br(n))return yield O(x.String,e,r,n);oe(e.minLength)&&!(n.length>=e.minLength)&&(yield O(x.StringMinLength,e,r,n)),oe(e.maxLength)&&!(n.length<=e.maxLength)&&(yield O(x.StringMaxLength,e,r,n)),br(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield O(x.StringPattern,e,r,n))),br(e.format)&&(Qf(e.format)?em(e.format)(n)||(yield O(x.StringFormat,e,r,n)):yield O(x.StringFormatUnknown,e,r,n))}function*P8(e,t,r,n){Fl(n)||(yield O(x.Symbol,e,r,n))}function*M8(e,t,r,n){if(!br(n))return yield O(x.String,e,r,n);new RegExp(e.pattern).test(n)||(yield O(x.StringPattern,e,r,n))}function*I8(e,t,r,n){yield*At(zr(e,t),t,r,n)}function*O8(e,t,r,n){if(!Dr(n))return yield O(x.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield O(x.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield O(x.TupleLength,e,r,n);if(e.items)for(let i=0;i<e.items.length;i++)yield*At(e.items[i],t,`${r}/${i}`,n[i])}function*B8(e,t,r,n){yi(n)||(yield O(x.Undefined,e,r,n))}function*R8(e,t,r,n){if(tl(e,t,n))return;const i=e.anyOf.map(o=>new dw(At(o,t,r,n)));yield O(x.Union,e,r,n,i)}function*L8(e,t,r,n){if(!Wf(n))return yield O(x.Uint8Array,e,r,n);oe(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield O(x.Uint8ArrayMaxByteLength,e,r,n)),oe(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield O(x.Uint8ArrayMinByteLength,e,r,n))}function*j8(e,t,r,n){}function*U8(e,t,r,n){tt.IsVoidLike(n)||(yield O(x.Void,e,r,n))}function*_8(e,t,r,n){nm(e[P])(e,n)||(yield O(x.Kind,e,r,n))}function*At(e,t,r,n){const i=oe(e.$id)?[...t,e]:t,o=e;switch(o[P]){case"Any":return yield*u8();case"Argument":return yield*l8();case"Array":return yield*c8(o,i,r,n);case"AsyncIterator":return yield*d8(o,i,r,n);case"BigInt":return yield*f8(o,i,r,n);case"Boolean":return yield*m8(o,i,r,n);case"Constructor":return yield*h8(o,i,r,n);case"Date":return yield*p8(o,i,r,n);case"Function":return yield*g8(o,i,r,n);case"Import":return yield*y8(o,i,r,n);case"Integer":return yield*b8(o,i,r,n);case"Intersect":return yield*w8(o,i,r,n);case"Iterator":return yield*v8(o,i,r,n);case"Literal":return yield*$8(o,i,r,n);case"Never":return yield*D8(o,i,r,n);case"Not":return yield*x8(o,i,r,n);case"Null":return yield*A8(o,i,r,n);case"Number":return yield*E8(o,i,r,n);case"Object":return yield*C8(o,i,r,n);case"Promise":return yield*k8(o,i,r,n);case"Record":return yield*F8(o,i,r,n);case"Ref":return yield*S8(o,i,r,n);case"RegExp":return yield*N8(o,i,r,n);case"String":return yield*T8(o,i,r,n);case"Symbol":return yield*P8(o,i,r,n);case"TemplateLiteral":return yield*M8(o,i,r,n);case"This":return yield*I8(o,i,r,n);case"Tuple":return yield*O8(o,i,r,n);case"Undefined":return yield*B8(o,i,r,n);case"Union":return yield*R8(o,i,r,n);case"Uint8Array":return yield*L8(o,i,r,n);case"Unknown":return yield*j8();case"Void":return yield*U8(o,i,r,n);default:if(!pi(o[P]))throw new a8(e);return yield*_8(o,i,r,n)}}function V8(...e){const t=e.length===3?At(e[0],e[1],"",e[2]):At(e[0],[],"",e[1]);return new dw(t)}class W8 extends Mt{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class z8 extends Mt{constructor(t,r,n,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=i}}function Le(e,t,r){try{return Pe(e)?e[nr].Decode(r):r}catch(n){throw new z8(e,t,r,n)}}function q8(e,t,r,n){return Dr(n)?Le(e,r,n.map((i,o)=>fn(e.items,t,`${r}/${o}`,i))):Le(e,r,n)}function K8(e,t,r,n){if(!vn(n)||mb(n))return Le(e,r,n);const i=Ub(e),o=i.map(c=>c[0]),s={...n};for(const[c,d]of i)c in s&&(s[c]=fn(d,t,`${r}/${c}`,s[c]));if(!Pe(e.unevaluatedProperties))return Le(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Le(u,`${r}/${c}`,l[c]));return Le(e,r,l)}function G8(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=fn(o,[...t,...i],r,n);return Le(e,r,s)}function Z8(e,t,r,n){return Le(e,r,fn(e.not,t,r,n))}function H8(e,t,r,n){if(!vn(n))return Le(e,r,n);const i=co(e),o={...n};for(const l of i)cb(o,l)&&(yi(o[l])&&(!La(e.properties[l])||tt.IsExactOptionalProperty(o,l))||(o[l]=fn(e.properties[l],t,`${r}/${l}`,o[l])));if(!Gt(e.additionalProperties))return Le(e,r,o);const s=Object.getOwnPropertyNames(o),a=e.additionalProperties,u={...o};for(const l of s)i.includes(l)||(u[l]=Le(a,`${r}/${l}`,u[l]));return Le(e,r,u)}function J8(e,t,r,n){if(!vn(n))return Le(e,r,n);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...n};for(const c of Object.getOwnPropertyNames(n))o.test(c)&&(s[c]=fn(e.patternProperties[i],t,`${r}/${c}`,s[c]));if(!Gt(e.additionalProperties))return Le(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.test(c)||(l[c]=Le(u,`${r}/${c}`,l[c]));return Le(e,r,l)}function Y8(e,t,r,n){const i=zr(e,t);return Le(e,r,fn(i,t,r,n))}function X8(e,t,r,n){const i=zr(e,t);return Le(e,r,fn(i,t,r,n))}function Q8(e,t,r,n){return Dr(n)&&Dr(e.items)?Le(e,r,e.items.map((i,o)=>fn(i,t,`${r}/${o}`,n[o]))):Le(e,r,n)}function eS(e,t,r,n){for(const i of e.anyOf){if(!tl(i,t,n))continue;const o=fn(i,t,r,n);return Le(e,r,o)}return Le(e,r,n)}function fn(e,t,r,n){const i=Hl(e,t),o=e;switch(e[P]){case"Array":return q8(o,i,r,n);case"Import":return G8(o,i,r,n);case"Intersect":return K8(o,i,r,n);case"Not":return Z8(o,i,r,n);case"Object":return H8(o,i,r,n);case"Record":return J8(o,i,r,n);case"Ref":return Y8(o,i,r,n);case"Symbol":return Le(o,r,n);case"This":return X8(o,i,r,n);case"Tuple":return Q8(o,i,r,n);case"Union":return eS(o,i,r,n);default:return Le(o,r,n)}}function tS(e,t,r){return fn(e,t,"",r)}class rS extends Mt{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class nS extends Mt{constructor(t,r,n,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=i}}function Tt(e,t,r){try{return Pe(e)?e[nr].Encode(r):r}catch(n){throw new nS(e,t,r,n)}}function iS(e,t,r,n){const i=Tt(e,r,n);return Dr(i)?i.map((o,s)=>ln(e.items,t,`${r}/${s}`,o)):i}function oS(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=Tt(e,r,n);return ln(o,[...t,...i],r,s)}function sS(e,t,r,n){const i=Tt(e,r,n);if(!vn(n)||mb(n))return i;const o=Ub(e),s=o.map(d=>d[0]),a={...i};for(const[d,f]of o)d in a&&(a[d]=ln(f,t,`${r}/${d}`,a[d]));if(!Pe(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,c={...a};for(const d of u)s.includes(d)||(c[d]=Tt(l,`${r}/${d}`,c[d]));return c}function aS(e,t,r,n){return Tt(e.not,r,Tt(e,r,n))}function uS(e,t,r,n){const i=Tt(e,r,n);if(!vn(i))return i;const o=co(e),s={...i};for(const c of o)cb(s,c)&&(yi(s[c])&&(!La(e.properties[c])||tt.IsExactOptionalProperty(s,c))||(s[c]=ln(e.properties[c],t,`${r}/${c}`,s[c])));if(!Gt(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const c of a)o.includes(c)||(l[c]=Tt(u,`${r}/${c}`,l[c]));return l}function lS(e,t,r,n){const i=Tt(e,r,n);if(!vn(n))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...i};for(const d of Object.getOwnPropertyNames(n))s.test(d)&&(a[d]=ln(e.patternProperties[o],t,`${r}/${d}`,a[d]));if(!Gt(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,c={...a};for(const d of u)s.test(d)||(c[d]=Tt(l,`${r}/${d}`,c[d]));return c}function cS(e,t,r,n){const i=zr(e,t),o=ln(i,t,r,n);return Tt(e,r,o)}function dS(e,t,r,n){const i=zr(e,t),o=ln(i,t,r,n);return Tt(e,r,o)}function fS(e,t,r,n){const i=Tt(e,r,n);return Dr(e.items)?e.items.map((o,s)=>ln(o,t,`${r}/${s}`,i[s])):[]}function mS(e,t,r,n){for(const i of e.anyOf){if(!tl(i,t,n))continue;const o=ln(i,t,r,n);return Tt(e,r,o)}for(const i of e.anyOf){const o=ln(i,t,r,n);if(tl(e,t,o))return Tt(e,r,o)}return Tt(e,r,n)}function ln(e,t,r,n){const i=Hl(e,t),o=e;switch(e[P]){case"Array":return iS(o,i,r,n);case"Import":return oS(o,i,r,n);case"Intersect":return sS(o,i,r,n);case"Not":return aS(o,i,r,n);case"Object":return uS(o,i,r,n);case"Record":return lS(o,i,r,n);case"Ref":return cS(o,i,r,n);case"This":return dS(o,i,r,n);case"Tuple":return fS(o,i,r,n);case"Union":return mS(o,i,r,n);default:return Tt(o,r,n)}}function hS(e,t,r){return ln(e,t,"",r)}function pS(e,t){return Pe(e)||yt(e.items,t)}function gS(e,t){return Pe(e)||yt(e.items,t)}function yS(e,t){return Pe(e)||yt(e.returns,t)||e.parameters.some(r=>yt(r,t))}function bS(e,t){return Pe(e)||yt(e.returns,t)||e.parameters.some(r=>yt(r,t))}function wS(e,t){return Pe(e)||Pe(e.unevaluatedProperties)||e.allOf.some(r=>yt(r,t))}function vS(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),n=e.$defs[e.$ref];return Pe(e)||yt(n,[...r,...t])}function $S(e,t){return Pe(e)||yt(e.items,t)}function DS(e,t){return Pe(e)||yt(e.not,t)}function xS(e,t){return Pe(e)||Object.values(e.properties).some(r=>yt(r,t))||Gt(e.additionalProperties)&&yt(e.additionalProperties,t)}function AS(e,t){return Pe(e)||yt(e.item,t)}function ES(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return Pe(e)||yt(n,t)||Gt(e.additionalProperties)&&Pe(e.additionalProperties)}function CS(e,t){return Pe(e)?!0:yt(zr(e,t),t)}function kS(e,t){return Pe(e)?!0:yt(zr(e,t),t)}function FS(e,t){return Pe(e)||!yi(e.items)&&e.items.some(r=>yt(r,t))}function SS(e,t){return Pe(e)||e.anyOf.some(r=>yt(r,t))}function yt(e,t){const r=Hl(e,t),n=e;if(e.$id&&Bd.has(e.$id))return!1;switch(e.$id&&Bd.add(e.$id),e[P]){case"Array":return pS(n,r);case"AsyncIterator":return gS(n,r);case"Constructor":return yS(n,r);case"Function":return bS(n,r);case"Import":return vS(n,r);case"Intersect":return wS(n,r);case"Iterator":return $S(n,r);case"Not":return DS(n,r);case"Object":return xS(n,r);case"Promise":return AS(n,r);case"Record":return ES(n,r);case"Ref":return CS(n,r);case"This":return kS(n,r);case"Tuple":return FS(n,r);case"Union":return SS(n,r);default:return Pe(e)}}const Bd=new Set;function NS(e,t){return Bd.clear(),yt(e,t)}class TS{constructor(t,r,n,i){this.schema=t,this.references=r,this.checkFunc=n,this.code=i,this.hasTransform=NS(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return V8(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new W8(this.schema,t,this.Errors(t).First());return this.hasTransform?tS(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?hS(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new rS(this.schema,t,this.Errors(t).First());return r}}var Mn;(function(e){function t(o){return o===36}e.DollarSign=t;function r(o){return o===95}e.IsUnderscore=r;function n(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=n;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(Mn||(Mn={}));var rl;(function(e){function t(o){return o.length===0?!1:Mn.IsNumeric(o.charCodeAt(0))}function r(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const a=o.charCodeAt(s);if(!(Mn.IsAlpha(a)||Mn.IsNumeric(a)||Mn.DollarSign(a)||Mn.IsUnderscore(a)))return!1}return!0}function n(o){return o.replace(/'/g,"\\'")}function i(o,s){return r(s)?`${o}.${s}`:`${o}['${n(s)}']`}e.Encode=i})(rl||(rl={}));var Rd;(function(e){function t(r){const n=[];for(let i=0;i<r.length;i++){const o=r.charCodeAt(i);Mn.IsNumeric(o)||Mn.IsAlpha(o)?n.push(r.charAt(i)):n.push(`_${o}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(Rd||(Rd={}));var Ld;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(Ld||(Ld={}));class PS extends Mt{constructor(t){super("Unknown type"),this.schema=t}}class $p extends Mt{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Oi;(function(e){function t(s,a,u){return tt.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${rl.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function r(s){return tt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return tt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function i(s){return tt.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return tt.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(Oi||(Oi={}));var Qs;(function(e){function t(y){return y[P]==="Any"||y[P]==="Unknown"}function*r(y,R,v){yield"true"}function*n(y,R,v){yield"true"}function*i(y,R,v){yield`Array.isArray(${v})`;const[Z,_]=[Ja("value","any"),Ja("acc","number")];re(y.maxItems)&&(yield`${v}.length <= ${y.maxItems}`),re(y.minItems)&&(yield`${v}.length >= ${y.minItems}`);const W=dr(y.items,R,"value");if(yield`${v}.every((${Z}) => ${W})`,ze(y.contains)||re(y.minContains)||re(y.maxContains)){const Ne=ze(y.contains)?y.contains:Ke(),Jt=dr(Ne,R,"value"),$n=re(y.minContains)?[`(count >= ${y.minContains})`]:[],Gr=re(y.maxContains)?[`(count <= ${y.maxContains})`]:[],mn=`const count = value.reduce((${_}, ${Z}) => ${Jt} ? acc + 1 : acc, 0)`,Ya=["(count > 0)",...$n,...Gr].join(" && ");yield`((${Z}) => { ${mn}; return ${Ya}})(${v})`}y.uniqueItems===!0&&(yield`((${Z}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${v})`)}function*o(y,R,v){yield`(typeof value === 'object' && Symbol.asyncIterator in ${v})`}function*s(y,R,v){yield`(typeof ${v} === 'bigint')`,Pn(y.exclusiveMaximum)&&(yield`${v} < BigInt(${y.exclusiveMaximum})`),Pn(y.exclusiveMinimum)&&(yield`${v} > BigInt(${y.exclusiveMinimum})`),Pn(y.maximum)&&(yield`${v} <= BigInt(${y.maximum})`),Pn(y.minimum)&&(yield`${v} >= BigInt(${y.minimum})`),Pn(y.multipleOf)&&(yield`(${v} % BigInt(${y.multipleOf})) === 0`)}function*a(y,R,v){yield`(typeof ${v} === 'boolean')`}function*u(y,R,v){yield*Sr(y.returns,R,`${v}.prototype`)}function*l(y,R,v){yield`(${v} instanceof Date) && Number.isFinite(${v}.getTime())`,re(y.exclusiveMaximumTimestamp)&&(yield`${v}.getTime() < ${y.exclusiveMaximumTimestamp}`),re(y.exclusiveMinimumTimestamp)&&(yield`${v}.getTime() > ${y.exclusiveMinimumTimestamp}`),re(y.maximumTimestamp)&&(yield`${v}.getTime() <= ${y.maximumTimestamp}`),re(y.minimumTimestamp)&&(yield`${v}.getTime() >= ${y.minimumTimestamp}`),re(y.multipleOfTimestamp)&&(yield`(${v}.getTime() % ${y.multipleOfTimestamp}) === 0`)}function*c(y,R,v){yield`(typeof ${v} === 'function')`}function*d(y,R,v){const Z=globalThis.Object.getOwnPropertyNames(y.$defs).reduce((_,W)=>[..._,y.$defs[W]],[]);yield*Sr($s(y.$ref),[...R,...Z],v)}function*f(y,R,v){yield`Number.isInteger(${v})`,re(y.exclusiveMaximum)&&(yield`${v} < ${y.exclusiveMaximum}`),re(y.exclusiveMinimum)&&(yield`${v} > ${y.exclusiveMinimum}`),re(y.maximum)&&(yield`${v} <= ${y.maximum}`),re(y.minimum)&&(yield`${v} >= ${y.minimum}`),re(y.multipleOf)&&(yield`(${v} % ${y.multipleOf}) === 0`)}function*m(y,R,v){const Z=y.allOf.map(_=>dr(_,R,v)).join(" && ");if(y.unevaluatedProperties===!1){const _=Jn(`${new RegExp(es(y))};`),W=`Object.getOwnPropertyNames(${v}).every(key => ${_}.test(key))`;yield`(${Z} && ${W})`}else if(ze(y.unevaluatedProperties)){const _=Jn(`${new RegExp(es(y))};`),W=`Object.getOwnPropertyNames(${v}).every(key => ${_}.test(key) || ${dr(y.unevaluatedProperties,R,`${v}[key]`)})`;yield`(${Z} && ${W})`}else yield`(${Z})`}function*$(y,R,v){yield`(typeof value === 'object' && Symbol.iterator in ${v})`}function*b(y,R,v){typeof y.const=="number"||typeof y.const=="boolean"?yield`(${v} === ${y.const})`:yield`(${v} === '${Ld.Escape(y.const)}')`}function*F(y,R,v){yield"false"}function*C(y,R,v){yield`(!${dr(y.not,R,v)})`}function*S(y,R,v){yield`(${v} === null)`}function*I(y,R,v){yield Oi.IsNumberLike(v),re(y.exclusiveMaximum)&&(yield`${v} < ${y.exclusiveMaximum}`),re(y.exclusiveMinimum)&&(yield`${v} > ${y.exclusiveMinimum}`),re(y.maximum)&&(yield`${v} <= ${y.maximum}`),re(y.minimum)&&(yield`${v} >= ${y.minimum}`),re(y.multipleOf)&&(yield`(${v} % ${y.multipleOf}) === 0`)}function*z(y,R,v){yield Oi.IsObjectLike(v),re(y.minProperties)&&(yield`Object.getOwnPropertyNames(${v}).length >= ${y.minProperties}`),re(y.maxProperties)&&(yield`Object.getOwnPropertyNames(${v}).length <= ${y.maxProperties}`);const Z=Object.getOwnPropertyNames(y.properties);for(const _ of Z){const W=rl.Encode(v,_),Ne=y.properties[_];if(y.required&&y.required.includes(_))yield*Sr(Ne,R,W),(xs(Ne)||t(Ne))&&(yield`('${_}' in ${v})`);else{const Jt=dr(Ne,R,W);yield Oi.IsExactOptionalProperty(v,_,Jt)}}if(y.additionalProperties===!1)if(y.required&&y.required.length===Z.length)yield`Object.getOwnPropertyNames(${v}).length === ${Z.length}`;else{const _=`[${Z.map(W=>`'${W}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${v}).every(key => ${_}.includes(key))`}if(typeof y.additionalProperties=="object"){const _=dr(y.additionalProperties,R,`${v}[key]`),W=`[${Z.map(Ne=>`'${Ne}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${v}).every(key => ${W}.includes(key) || ${_}))`}}function*q(y,R,v){yield`${v} instanceof Promise`}function*Ce(y,R,v){yield Oi.IsRecordLike(v),re(y.minProperties)&&(yield`Object.getOwnPropertyNames(${v}).length >= ${y.minProperties}`),re(y.maxProperties)&&(yield`Object.getOwnPropertyNames(${v}).length <= ${y.maxProperties}`);const[Z,_]=Object.entries(y.patternProperties)[0],W=Jn(`${new RegExp(Z)}`),Ne=dr(_,R,"value"),Jt=ze(y.additionalProperties)?dr(y.additionalProperties,R,v):y.additionalProperties===!1?"false":"true",$n=`(${W}.test(key) ? ${Ne} : ${Jt})`;yield`(Object.entries(${v}).every(([key, value]) => ${$n}))`}function*Ge(y,R,v){const Z=zr(y,R);if(nt.functions.has(y.$ref))return yield`${po(y.$ref)}(${v})`;yield*Sr(Z,R,v)}function*mt(y,R,v){const Z=Jn(`${new RegExp(y.source,y.flags)};`);yield`(typeof ${v} === 'string')`,re(y.maxLength)&&(yield`${v}.length <= ${y.maxLength}`),re(y.minLength)&&(yield`${v}.length >= ${y.minLength}`),yield`${Z}.test(${v})`}function*_t(y,R,v){yield`(typeof ${v} === 'string')`,re(y.maxLength)&&(yield`${v}.length <= ${y.maxLength}`),re(y.minLength)&&(yield`${v}.length >= ${y.minLength}`),y.pattern!==void 0&&(yield`${Jn(`${new RegExp(y.pattern)};`)}.test(${v})`),y.format!==void 0&&(yield`format('${y.format}', ${v})`)}function*Fr(y,R,v){yield`(typeof ${v} === 'symbol')`}function*qr(y,R,v){yield`(typeof ${v} === 'string')`,yield`${Jn(`${new RegExp(y.pattern)};`)}.test(${v})`}function*ho(y,R,v){yield`${po(y.$ref)}(${v})`}function*tc(y,R,v){if(yield`Array.isArray(${v})`,y.items===void 0)return yield`${v}.length === 0`;yield`(${v}.length === ${y.maxItems})`;for(let Z=0;Z<y.items.length;Z++)yield`${dr(y.items[Z],R,`${v}[${Z}]`)}`}function*Es(y,R,v){yield`${v} === undefined`}function*Ga(y,R,v){yield`(${y.anyOf.map(_=>dr(_,R,v)).join(" || ")})`}function*Kr(y,R,v){yield`${v} instanceof Uint8Array`,re(y.maxByteLength)&&(yield`(${v}.length <= ${y.maxByteLength})`),re(y.minByteLength)&&(yield`(${v}.length >= ${y.minByteLength})`)}function*Za(y,R,v){yield"true"}function*rc(y,R,v){yield Oi.IsVoidLike(v)}function*Ha(y,R,v){const Z=nt.instances.size;nt.instances.set(Z,y),yield`kind('${y[P]}', ${Z}, ${v})`}function*Sr(y,R,v,Z=!0){const _=br(y.$id)?[...R,y]:R,W=y;if(Z&&br(y.$id)){const Ne=po(y.$id);if(nt.functions.has(Ne))return yield`${Ne}(${v})`;{nt.functions.set(Ne,"<deferred>");const Jt=Ei(Ne,y,R,"value",!1);return nt.functions.set(Ne,Jt),yield`${Ne}(${v})`}}switch(W[P]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*i(W,_,v);case"AsyncIterator":return yield*o(W,_,v);case"BigInt":return yield*s(W,_,v);case"Boolean":return yield*a(W,_,v);case"Constructor":return yield*u(W,_,v);case"Date":return yield*l(W,_,v);case"Function":return yield*c(W,_,v);case"Import":return yield*d(W,_,v);case"Integer":return yield*f(W,_,v);case"Intersect":return yield*m(W,_,v);case"Iterator":return yield*$(W,_,v);case"Literal":return yield*b(W,_,v);case"Never":return yield*F();case"Not":return yield*C(W,_,v);case"Null":return yield*S(W,_,v);case"Number":return yield*I(W,_,v);case"Object":return yield*z(W,_,v);case"Promise":return yield*q(W,_,v);case"Record":return yield*Ce(W,_,v);case"Ref":return yield*Ge(W,_,v);case"RegExp":return yield*mt(W,_,v);case"String":return yield*_t(W,_,v);case"Symbol":return yield*Fr(W,_,v);case"TemplateLiteral":return yield*qr(W,_,v);case"This":return yield*ho(W,_,v);case"Tuple":return yield*tc(W,_,v);case"Undefined":return yield*Es(W,_,v);case"Union":return yield*Ga(W,_,v);case"Uint8Array":return yield*Kr(W,_,v);case"Unknown":return yield*Za();case"Void":return yield*rc(W,_,v);default:if(!pi(W[P]))throw new PS(y);return yield*Ha(W,_,v)}}const nt={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function dr(y,R,v,Z=!0){return`(${[...Sr(y,R,v,Z)].join(" && ")})`}function po(y){return`check_${Rd.Encode(y)}`}function Jn(y){const R=`local_${nt.variables.size}`;return nt.variables.set(R,`const ${R} = ${y}`),R}function Ei(y,R,v,Z,_=!0){const[W,Ne]=[`
`,mn=>"".padStart(mn," ")],Jt=Ja("value","any"),$n=zm("boolean"),Gr=[...Sr(R,v,Z,_)].map(mn=>`${Ne(4)}${mn}`).join(` &&${W}`);return`function ${y}(${Jt})${$n} {${W}${Ne(2)}return (${W}${Gr}${W}${Ne(2)})
}`}function Ja(y,R){const v=nt.language==="typescript"?`: ${R}`:"";return`${y}${v}`}function zm(y){return nt.language==="typescript"?`: ${y}`:""}function b2(y,R,v){const Z=Ei("check",y,R,"value"),_=Ja("value","any"),W=zm("boolean"),Ne=[...nt.functions.values()],Jt=[...nt.variables.values()],$n=br(y.$id)?`return function check(${_})${W} {
  return ${po(y.$id)}(value)
}`:`return ${Z}`;return[...Jt,...Ne,$n].join(`
`)}function qm(...y){const R={language:"javascript"},[v,Z,_]=y.length===2&&Dr(y[1])?[y[0],y[1],R]:y.length===2&&!Dr(y[1])?[y[0],[],y[1]]:y.length===3?[y[0],y[1],y[2]]:y.length===1?[y[0],[],R]:[null,[],R];if(nt.language=_.language,nt.variables.clear(),nt.functions.clear(),nt.instances.clear(),!ze(v))throw new $p(v);for(const W of Z)if(!ze(W))throw new $p(W);return b2(v,Z)}e.Code=qm;function w2(y,R=[]){const v=qm(y,R,{language:"javascript"}),Z=globalThis.Function("kind","format","hash",v),_=new Map(nt.instances);function W(Gr,mn,Ya){if(!pi(Gr)||!_.has(mn))return!1;const v2=nm(Gr),$2=_.get(mn);return v2($2,Ya)}function Ne(Gr,mn){return Qf(Gr)?em(Gr)(mn):!1}function Jt(Gr){return Cm(Gr)}const $n=Z(W,Ne,Jt);return new TS(y,R,$n,v)}e.Compile=w2})(Qs||(Qs={}));const jd={};function fw(e,t){e in jd||(jd[e]=t)}let Dp=!1;function MS(){Dp||(Dp=!0,o6(e=>(jd[e.schema[P]]||sw)(e)))}const Ud=Symbol.for("object-shape-tester.shape-identifier");function xe(e){if(MS(),km(e))return e;const t=_d(e),r=Bi(t,!1),n=Bi(t,!0),i={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:Qs.Compile(t),$_compiledSchemaNoExtraKeys:Qs.Compile(r),$_compiledSchemaExtraKeys:Qs.Compile(n)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[Ud]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function km(e){return E.hasKey(e,Ud)&&!!e[Ud]}function Fm(e){return E.hasKey(e,P)}function Bi(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>Bi(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>Bi(n,t))),Fm(e.items)?r.items=Bi(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>Bi(n,t))),E.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([i,o])=>{n[i]=Bi(o,t)}),r.properties=n}return r.additionalProperties=t,r}function _d(e){if(Fm(e))return e;if(km(e))return e.$_schema;if(E.isFunction(e))return Te.Function([],Te.Any(),{default:e});if(E.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,i])=>{const o=_d(i);r[n]=o,t[n]=o.default}),Te.Object(r,{default:t})}else{if(E.isArray(e))return Te.Array(Te.Union(e.map(t=>_d(t))),{default:[]});if(E.isPrimitive(e)){if(E.isString(e))return Te.String({default:e});if(E.isNumber(e))return Te.Number({default:e});if(E.isBoolean(e))return Te.Boolean({default:e});if(E.isSymbol(e))return Te.Symbol({default:e});if(E.isNull(e))return Te.Null({default:null});if(E.isUndefined(e))return Te.Undefined({default:void 0});if(E.isBigInt(e))return Te.BigInt({default:e});Dt.tsType(e).equals(),Dt.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${g(e)}`)}}function IS({checkValue:e,default:t,name:r}){return pi(r)||rm(r,(n,i)=>e(i)),(n=t)=>xe(Te.Unsafe({[P]:r,default:n}))}function rs(e,t){const r=Mr(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return xe(Te.Union(r.map(n=>Te.Literal(n)),{default:t??r[0]}))}function ue(e){return E.isSymbol(e)?OS(e):xe(Te.Const(e,{default:e}))}const pu="ExactSymbol";function OS(e){return pi(pu)||rm(pu,(t,r)=>r===t.symbol),fw(pu,({schema:t})=>`Expected symbol ${t.symbol?.description?ED({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),xe(Te.Unsafe({[P]:pu,symbol:e,default:e}))}function BS(...e){const t={},r=e.map(n=>{const i=xe(n);return Object.assign(t,i.default),i.$_schema});return xe(Te.Composite(r,{default:t}))}function Ft(e,t={}){tt.ExactOptionalPropertyTypes=!0;const r=xe(e).$_schema,n=t.alsoUndefined?Te.Union([Te.Undefined(),r]):r;return xe(Te.Optional(n))}function Ve(...e){let t;const r=e.map((n,i)=>{const o=xe(n);return i||(t=o.default),o.$_schema});return xe(Te.Union(r,{default:t}))}class RS extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(o=>mw(o)).join(`
`),i=as(r,`Shape mismatch:
${ff(n,1)}`);super(i),this.errors=t,this.failureMessage=r}}function LS(e){return e.errors.flatMap(t=>Array.from(t))}function mw(e,t=0){const r=LS(e).map(i=>mw(i,t+1)),n=[e.path,e.message].filter(E.isTruthy).join(": ")+(r.length?":":"");return[ff(n,t),...r].join(`
`)}function Ui(e,t,r={}){return pw(t,r).Check(e)}function hw(e,t,r={},n){if(Ui(e,t,r))return;const i=Array.from(pw(t,r).Errors(e));if(i.length)throw new RS(i,n)}function pw(e,t){return e=jS(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function jS(e){return xe(e)}function Fo({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:i}=rf(r),o=r.default??(i-n)/2+n,s=xe(Te.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:i}:{maximum:i},default:o})),a=Z5(()=>hw(o,s));if(a)throw cl(a,"Default range value is not within range.");return s}const Tu="recordShape";function Jl({keys:e,values:t,partial:r,additionalProperties:n}){US();const i=gw(e),o=xe(t);return xe(Te.Unsafe({[P]:Tu,keysShape:i,valuesShape:o,isPartial:!!r,additionalProperties:!!n,default:_S({isPartial:!!r,keysShape:i,valuesShape:o})}))}function US(){pi(Tu)||rm(Tu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:Ui(i,e.keysShape),a=Ui(o,e.valuesShape);return s&&a}),n=e.isPartial?!0:!xp(e.keysShape,t).length;return r&&n}),fw(Tu,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const i=qn(Object.entries(n),([u])=>u,(u,[l,c])=>!Ui(l,r.keysShape)||!Ui(c,r.valuesShape)),o=xp(r.keysShape,n),s=i.length?["Failure at keys",i.join(",")].join(": "):"",a=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,a].filter(E.isTruthy).join(`
`)})}function xp(e,t){const r=nl(e).filter(n=>E.isPropertyKey(n));return r.length?r.filter(n=>!E.hasKey(t,n)):[]}function _S({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=nl(e),i=t.default;return Object.fromEntries(n.map(o=>[o,i]))}}function gw(e){return km(e)?e:Fm(e)?xe(e):E.isObject(e)?rs(e):E.isArray(e)&&E.isLengthAtLeast(e,1)?Ve(...e.map(t=>ue(t))):E.isPropertyKey(e)?xe(e):xe(Te.Undefined())}function nl(e){const t=e.$_schema,r=t[P].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?Xd(t.anyOf.flatMap(n=>nl(xe(n)))):["undefined","number","string","symbol"].includes(r)?[]:nl(gw(e.default))}function VS(e){return xe(Te.Unknown({default:e}))}const WS=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Sm=WS.reduce((e,t)=>(e[t]=t,e),{});_e.defaultZone.name;const yw=Sm.UTC,zS=xe({hour:Fo({...Th,default:Th.min}),minute:Fo({...Ph,default:Ph.min}),second:Fo({...Mh,default:Mh.min}),millisecond:Fo({...Ih,default:Ih.min}),timezone:rs(Sm,yw)}),qS=xe({year:2023,month:Fo({...Oh,default:Oh.min}),day:Fo({...Bh,default:Bh.min}),timezone:rs(Sm,yw)});xe(BS(qS,zS));$e.Years+"",$e.Months+"",$e.Weeks+"",$e.Days+"",$e.Hours+"",$e.Minutes+"",$e.Seconds+"",$e.Milliseconds+"";xe(Ve({get:ue(K.Month),in:Ve(ue(K.Year))},{get:ue(K.Week),in:Ve(ue(K.Year),ue(K.Month))},{get:ue(K.Day),in:Ve(ue(K.Year),ue(K.Month),ue(K.Week))},{get:ue(K.Hour),in:Ve(ue(K.Year),ue(K.Month),ue(K.Week),ue(K.Day))},{get:ue(K.Minute),in:Ve(ue(K.Year),ue(K.Month),ue(K.Week),ue(K.Day),ue(K.Hour))},{get:ue(K.Second),in:Ve(ue(K.Year),ue(K.Month),ue(K.Week),ue(K.Day),ue(K.Hour),ue(K.Minute))},{get:ue(K.Millisecond),in:Ve(ue(K.Year),ue(K.Month),ue(K.Week),ue(K.Day),ue(K.Hour),ue(K.Minute),ue(K.Second))}));Jl({keys:rs($e),values:-1,partial:!0});var Ap;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Ap||(Ap={}));var Vd;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Vd||(Vd={}));var Ep;(function(e){e.Year="year",e.Month="month",e.Day="day"})(Ep||(Ep={}));const KS={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};bD(KS,Mr(Vd));IS({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return GS(e)}});function GS(e){return J.fromISO(e).toUTC().toISO()===e}const ZS=xe({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:VS()});function Lc(e){return Ui(e,ZS,{allowExtraKeys:!0})}class bw extends ib{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||jf}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:HS}=tx,Cp=e=>e,kp=()=>document.createComment(""),Bs=(e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const o=n.insertBefore(kp(),i),s=n.insertBefore(kp(),i);r=new HS(o,s,e,e.options)}else{const o=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==s._$AU&&r._$AP(u)}if(o!==i||a){let u=r._$AA;for(;u!==o;){const l=Cp(u).nextSibling;Cp(n).insertBefore(u,i),u=l}}}return r},Mi=(e,t,r=e)=>(e._$AI(t,r),e),JS={},YS=(e,t=JS)=>e._$AH=t,XS=e=>e._$AH,jc=e=>{e._$AR(),e._$AA.remove()};const Nm={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Zn=e=>(...t)=>({_$litDirective$:e,values:t});class Hn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const QS={attribute:!0,type:String,converter:qu,reflect:!1,hasChanged:kf},e9=(e=QS,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function t9(e){return(t,r)=>typeof r=="object"?e9(e,t,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}const Ht=Zn(class extends Hn{constructor(e){if(super(e),e.type!==Nm.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return wr}});const Qe=e=>e??Y;function r9(e,t,r){return e?t(e):r?.(e)}class n9 extends Js{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function i9(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const o=e.map(a=>[a]);return o.length||(o[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(o[a]=[])}),t.forEach(a=>{const u=o[a.index];u&&u.splice(0,0,...a.values)}),o.flat()}function Wd(e){return E.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Tm(e){return E.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function ww(e){return qn(e,t=>{if(Wd(t))return t.definition;if(Tm(t))return t.tagInterpolationKey||t},E.isTruthy)}const vw=new WeakMap;function o9(e,t){const r=ww(t);return $w(vw,[e,...r]).value?.template}function s9(e,t,r){const n=ww(t);return xw(vw,[e,...n],r)}function $w(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=Dw(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?$w(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function Dw(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function xw(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=Dw(e,t,n);if(!o)return{result:!1,reason:s};const a=i??{nested:void 0,template:void 0};if(i||e.set(o,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),xw(u,t,r,n+1)}function Aw(e,t,r){const n=o9(e,t),i=n??r();if(!n){const a=s9(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const o=i.valuesTransform(t),s=i9(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function Ew(e,t,r,n){const i=[],o=[],s=[],a=[];return e.forEach((l,c)=>{const d=i.length-1,f=i[d],m=c-1,$=t[m];n&&n(l);let b,F=[];if(typeof f=="string"&&(b=r(f,l,$),b)){i[d]=[f,b.replacement].join(""),s.push(m);const S=b.getExtraValues;F=S?S($):[],F.length&&S?(i[d]+=" ",F.forEach((I,z)=>{z&&i.push(" ")}),a.push(I=>{const z=I[m],q=S(z);return{index:m,values:q}}),i.push(l)):i[d]+=l}b||i.push(l);const C=e.raw[c];b?(o[d]=[o[d],b.replacement,C].join(""),F.length&&F.forEach(()=>{o.push("")})):o.push(C)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function a9(...[e,t,r]){if(Tm(r))return{replacement:r.tagName,getExtraValues:void 0}}function u9(e,t){return Ew(e,t,a9)}function D(e,...t){const r=Aw(e,t,()=>u9(e,t));return Fu(r.strings,...r.values)}const l9={allowPolymorphicState:!1,errorHandler:void 0};function Cw(e,t){const r=e.instanceState;We(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&We(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class c9 extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function Pm(){return e=>class extends c9{static type=e;_type=e;constructor(t){super(e,t)}}}function lt(){return Pm()}function d9(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=Pm()([e,n].join("-"));return r[n]=i,r},{}):{}}function f9(e){return e?Zt(e,t=>t):{}}function kw(e,t){t in e||t9()(e,t)}function m9(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Fp(e,t){const r=e;function n(s){t?m9(s,e,e.tagName):kw(e,s)}function i(s,a){return n(a),r[a]}return new Proxy({},{get:i,set(s,a,u){n(a);const l=r[a];function c(f){s[a]=f,r[a]=f}const d=e.observablePropertyListenerMap[a];if(l!==u&&Lc(l)&&d&&l.removeListener(d),Lc(u))if(d)u.listen(!1,d);else{let f=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=f,u.listen(!1,f)}else Lc(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return i(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function Sp(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function Np(e,t,r){return r?bl(r,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function h9({hostClassNames:e,cssVars:t}){return{hostClasses:Zt(e,(r,n)=>({name:Fe(n),selector:Fe(`:host(.${n})`)})),cssVars:t}}function p9({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&We(t).forEach(o=>{const s=t[o],a=r[o];typeof s=="function"&&(s({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function g9({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:i}){function o(a){We(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:r,slotNames:n,testIds:i,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function mo(...e){return Dt.isEmpty(e),t=>{const r=t;if(!E.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return y9({...r,options:{...r.options}})}}function y9(e){if(!E.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!E.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...l9,...e.options},r=d9(e.tagName,e.events),n=f9(e.hostClasses);e.hostClasses&&Sp(e.tagName,e.hostClasses),e.cssVars&&Sp(e.tagName,e.cssVars);const i=e.cssVars?Ur(e.cssVars):{},o=Np(e.tagName,"slot",e.slotNames),s=Np(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(h9({hostClassNames:n,cssVars:i})):e.styles||D``,u=e.render;function l(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:c,inputs:d}}const c=class extends n9{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return g9({element:this,eventsMap:r,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=l;static events=r;static render=u;static hostClasses=n;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const d=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(d);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");We(m).forEach($=>{kw(this,$),this.instanceState[$]=m[$]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(d)instanceof Promise))throw new TypeError("init cannot be asynchronous");const f=u(d);if(f instanceof Promise)throw new TypeError("render cannot be asynchronous");return p9({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},f}catch(d){const f=cl(d,`Failed to render ${e.tagName}`);return console.error(f),this._lastRenderError=f,t.errorHandler?.(f),Et(f)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const d=this.createRenderParams();if(e.init(d)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(d=>{E.hasKey(d,"destroy")&&E.isFunction(d.destroy)&&d.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const d=this.createRenderParams();if(e.cleanup(d)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(d){Cw(this,d)}observablePropertyListenerMap={};instanceInputs=Fp(this,!1);instanceState=Fp(this,!t.allowPolymorphicState);constructor(){super(),this.definition=c}};return Object.defineProperties(c,{name:{value:DD(e.tagName,{firstLetterCase:Vn.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,c)),c}class b9 extends Co{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function w9(e){return new b9(e)}const Tp=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},v9=Zn(class extends Hn{constructor(e){if(super(e),e.type!==Nm.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],o=[];let s=0;for(const a of e)i[s]=n?n(a,s):s,o[s]=r(a,s),s++;return{values:o,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=XS(e),{values:o,keys:s}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??=[],u=[];let l,c,d=0,f=i.length-1,m=0,$=o.length-1;for(;d<=f&&m<=$;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(a[d]===s[m])u[m]=Mi(i[d],o[m]),d++,m++;else if(a[f]===s[$])u[$]=Mi(i[f],o[$]),f--,$--;else if(a[d]===s[$])u[$]=Mi(i[d],o[$]),Bs(e,u[$+1],i[d]),d++,$--;else if(a[f]===s[m])u[m]=Mi(i[f],o[m]),Bs(e,i[d],i[f]),f--,m++;else if(l===void 0&&(l=Tp(s,m,$),c=Tp(a,d,f)),l.has(a[d]))if(l.has(a[f])){const b=c.get(s[m]),F=b!==void 0?i[b]:null;if(F===null){const C=Bs(e,i[d]);Mi(C,o[m]),u[m]=C}else u[m]=Mi(F,o[m]),Bs(e,i[d],F),i[b]=null;m++}else jc(i[f]),f--;else jc(i[d]),d++;for(;m<=$;){const b=Bs(e,u[$+1]);Mi(b,o[m]),u[m++]=b}for(;d<=f;){const b=i[d++];b!==null&&jc(b)}return this.ut=s,YS(e,u),wr}}),$9=v9;function za(e,t){return $a(e,t),e.element}function D9(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function $a(e,t){const r=D9(e),n=r?`: in ${r}`:"";if(e.type!==Nm.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function x9(e,t){return Zn(class extends Hn{element;constructor(r){super(r),this.element=nn.instanceOf(za(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),wr}})}const Rn=x9("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const i=to(r,"allAttributesApplied",()=>new Set);We(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===Y?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function A9(e){const t=Zn(class extends Hn{element;constructor(r){super(r),this.element=za(r,e)}render(r){return this.element.setAttribute(e,r),wr}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function V(e,t){return E9(e,t)}const E9=Zn(class extends Hn{element;lastListenerMetaData;constructor(e){super(e),this.element=za(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),wr}});function C9(e){return V("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const Pp="onDomCreated",Yi=Zn(class extends Hn{element;constructor(e){super(e),$a(e,Pp)}update(e,[t]){$a(e,Pp);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Mp="onResize",Fw=Zn(class extends Hn{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&k9(this.element,this.callback,e)});callback;constructor(e){super(e),$a(e,Mp)}update(e,[t]){$a(e,Mp),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function k9(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function or(e,t,r){return r9(e,()=>t,()=>r)}const{attributeDirective:F9}=A9("data-test-id"),jn=F9;function Sw(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>i=>(t(i),mo(...n)(r(i)))}function S9(e,t){return N9(void 0,e)}const N9=Zn(class extends Hn{element;constructor(e){super(e),this.element=za(e,"assign")}render(e,t){return Cw(this.element,t),wr}}),T9={};function P9(e,t){return t.map((r,n)=>{const i=e[n],o=e[n+1];if(i&&o){const{shouldHaveTagNameHere:s}=Nw(i,o);if(s&&E.isString(r))return{tagName:r,tagInterpolationKey:to(T9,r,()=>({tagName:r}))}}return r})}function Nw(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function M9(...[e,t,r]){const n=Wd(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:o}=Nw(e,t),s=Tm(n);if(s&&o&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!o||!s?void 0:{replacement:n.tagName,getExtraValues(u){const l=Wd(u)?u.inputs:void 0;return[i&&l?S9(l):void 0].filter(E.isTruthy)}}}function I9(e){}function O9(e){return Ew(e.strings,e.values,M9,I9)}function h(e,...t){const r=P9(e,t),n=ZD(e,...r),i=Aw(e,r,()=>O9(n));return{...n,strings:i.strings,values:i.values}}function zd(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],o=(t??[""]).map((s,a)=>{const u=B9(s,n[a]);return`${s}${u}`});return a1(o.join(""))}function B9(e,t){return t._$litType$!=null||t._$litDirective$!=null?zd(t):Array.isArray(t)?t.map(n=>zd(n)).join(""):e.endsWith("=")?`"${t}"`:t}function Tw(e){return Zt(e,(t,r)=>r instanceof Se?Fe(r.toString({format:"hex"})):Tw(r))}const R9="dodgerblue";function qd(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Uc({background:e,foreground:t}){return{background:e??new Se(qd(t)),foreground:t??new Se(qd(e))}}var il;(function(e){e.Dark="dark",e.Light="light"})(il||(il={}));function L9(e){return e==="black"?"white":"black"}const j9={black:{foregroundFaint1:new Se("#ccc"),foregroundFaint2:new Se("#eee")},white:{foregroundFaint1:new Se("#ccc"),foregroundFaint2:new Se("#eee")}},U9={black:{backgroundFaint1:new Se("#666"),backgroundFaint2:new Se("#444")},white:{backgroundFaint1:new Se("#ccc"),backgroundFaint2:new Se("#fafafa")}};function Ip({themeColor:e=R9,themeStyle:t=il.Light}={}){const r=new Se(e),n=new Se(t===il.Dark?"black":"white"),i=qd(n),o=new Se(i),s={nav:{hover:Uc({background:r.clone().set({"hsl.l":93})}),active:Uc({background:r.clone().set({"hsl.l":90})}),selected:Uc({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...U9[L9(i)],foreground:o,...j9[i]}};return Tw(s)}var pn;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(pn||(pn={}));async function Kd(e=1){const t=new Ru;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function _9(e,t){return{element:e,children:Pw(e)}}function Pw(e,t,r){return V9(e).map(n=>{const i=Pw(n);return{element:n,children:i}})}function V9(e){return[...e.children,...e.shadowRoot?.children??[]]}function _c(e){return e.matches(":focus")}function Mm(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:Mm(t)}function Mw(e,t){if(t(e))return e;const r=Mm(e);if(r)return Mw(r,t)}async function W9(e){return z9(e,1)}async function z9(e,t){return new Promise(r=>{new IntersectionObserver((i,o)=>{Dt.isLengthAtLeast(i,1),o.disconnect(),r(i[0].intersectionRatio>=t)}).observe(e)})}function _i(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,o=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return n}function q9(e){const t=Mm(e);return t&&Mw(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function K9({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const u=o.codePointAt(s);for(;a<r;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const G9=Wi(32);function Pu(e){return e.join(G9)}function Iw(e){if(!e.length)return[];const t=Pu(e),r=Iw(e.slice(0,-1));return[t,...r]}const Z9=["error","errors"];function H9(e){return Z9.includes(e)}function J9({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(s=>(n(s),Pu(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&H9(t),s=Pu(i.fullUrlBreadcrumbs);if(K9({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(u=>E.isString(u)?u:zd(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||r[s]){const u=Iw(i.fullUrlBreadcrumbs);n(i),u.forEach(l=>r[l]=!0)}else r[s]=!1}),e.filter(i=>{const o=Pu(i.fullUrlBreadcrumbs),s=r[o];if(!E.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Im extends Error{name="SpaRouterError"}class Op extends Im{name="GlobalUrlEventsConsolidationError"}class Y9 extends Im{name="SanitizationDepthMaxed"}xe({paths:[""],search:Ft(Ve(void 0,Jl({keys:"",values:[""]}))),hash:Ft(Ve(void 0,""))});const X9=xe({basePath:Ft("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Ft(1,{alsoUndefined:!0}),disableWarnings:Ft(!1,{alsoUndefined:!0}),isPaused:Ft(!1,{alsoUndefined:!0})}),Vc="://";function Om(...e){const t=e.join("/"),[r,n=""]=t.includes(Vc)?t.split(Vc):["",t];let i=!1;const o=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(i)return s;const c=l[u+1];let d=a;const f=c?.startsWith("?"),m=!a.includes("?")&&f,$=c==="?";if(f||m){i=!0;let b=!1;const F=l.slice(u+2).reduce((C,S)=>(S.includes("#")&&(b=!0),b?C.concat(S):[C,S].join("&")),"");d=[a,c,$?Oo({value:F,prefix:"&"}):F].join("")}return s.concat(d)},[]);return[r,r?Vc:"",o.join("/")].join("")}var ns;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(ns||(ns={}));var is;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(is||(is={}));const Q9=xe({encoding:Ft(Ve(void 0,rs(ns))),searchParamStrategy:Ft(Ve(void 0,rs(is)))});function gu(e,t){return e.map(r=>{if(r!=null)return Ro(String(r),t)}).filter(r=>r!=null)}function Ro(e,t){return t?.encoding===ns.Decode?decodeURIComponent(e):t?.encoding===ns.Encode?encodeURIComponent(e):e}const eN=xe(Jl({keys:"",values:[""]}));function tN(e,t,r){const n=r?.searchParamStrategy===is.Clear?{}:Zt(e,(s,a)=>K5(a)),i=Zt(t,(s,a)=>{if(r?.searchParamStrategy===is.Append){const u=n[s],l=E.isArray(u)?u:[u];if(a){const c=E.isArray(a)?a:[a];return gu([...l,...c],r)}else return gu(l,r)}else return E.isArray(a)?gu(a,r):a?gu([a],r):void 0});return wl({...n,...i},(s,a)=>!!a)}function Ow(e,t){return E.isString(e)&&!e.includes("?")?{}:(E.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...a]=gD(o,"=");return[s,a.length?a.join("="):void 0]}).reduce((o,[s,a])=>{const u=Bw({options:t,key:s,value:a}),l=to(o,u.key,()=>[]);return a!=null&&l.push(u.value),o},{})}function rN(e){if(e!=null)return E.isArray(e)?[...e]:e===""?[]:[e]}function nN(e,t){const r=qn(Object.entries(e),([n,i])=>{const o=rN(i);return o?.length?o.map(s=>{const a=Bw({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?sr({value:r.join("&"),prefix:"?"}):""}function Bw({options:e,key:t,value:r}){return{key:Ro(t,e),value:Ro(String(r),e)}}function Rw({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:o,search:s,username:a}){return[o?o+"://":"",a?a+":":"",r?r+"@":"",Yl({hostname:t,port:i}),Bm({hash:e,pathname:n,search:s})].join("")}function Lw({pathname:e}){const t=Oo({value:e,prefix:"/"});return t?t.split("/"):[]}function Bm({hash:e,pathname:t,search:r}){return[sr({value:t,prefix:"/"}),r?sr({value:r,prefix:"?"}):"",e?sr({value:e,prefix:"#"}):""].join("")}function Yl({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function jw({hostname:e,port:t,protocol:r}){return[r,Yl({hostname:e,port:t})].filter(E.isTruthy).join("://")}function Lo(e,t){const r=E.isString(e)?Oo({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?sr({value:Ro(n,t),prefix:"#"}):"",o=r.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),a=s?sr({value:Ro(s,t),prefix:"?"}):"",u=o.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=c.replace(/@.*/,""),f=c.replace(/^[^@]*@/,""),m=d!==f,[$,...b]=m?d.split(":").reverse():[],F=b.toReversed().join("").replace(/[/:]/g,"")||"",C=$?.replace(/[/:]/g,"")||"",S=pD(f.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),I=S[0]?.endsWith("]")?"":S[1]===":"&&S[0]||"",q=f.replace(new RegExp(`:${I}($|/)`),"$1").replace(/\/.*/,""),Ce=f.replace(/^[^/]*(\/|$)/,"$1"),Ge=Ro(Ce.replace(/^[^/]*(?:\/|$)/,"/"),t),mt=Yl({hostname:q,port:I}),_t=jw({hostname:q,port:I,protocol:l}),Fr=Rw({hash:i,hostname:q,password:C,pathname:Ge,port:I,protocol:l,search:a,username:F}),qr=Ow(a),ho=Lw({pathname:Ge});return{fullPath:Bm({hash:i,pathname:Ge,search:a}),hash:i,host:mt,hostname:q,href:Fr,origin:_t,password:C,pathname:Ge,paths:ho,port:I,protocol:l,search:a,searchParams:qr,username:F}}xe({hash:Ft(Ve(void 0,"")),search:Ft(Ve(void 0,"",Jl({keys:"",values:Ve(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:Ft(Ve(void 0,"")),pathname:Ft(Ve(void 0,"")),paths:Ft(Ve(void 0,[""])),protocol:Ft(Ve(void 0,"")),username:Ft(Ve(void 0,"")),password:Ft(Ve(void 0,"")),port:Ft(Ve(void 0,"",-1))});function iN(e,t,r){const n=!!r,i=t==null||Ui(t,Q9,{allowExtraKeys:!1}),o=i?Lo(""):E.instanceOf(e,URL)||E.isString(e)?Lo(e):e,s=i?e:t,a=E.isString(s)&&s.startsWith("."),u=E.isString(s)||E.instanceOf(s,URL)?wl(Lo(s),(b,F)=>E.isTruthy(F)):s,l=n?r:i?t:void 0,c=Zt(o,(b,F)=>{if(!E.hasKey(u,b))return F;const C=u[b];return E.isNumber(C)?String(C):E.isString(C)?b==="hash"&&C?sr({value:C,prefix:"#"}):b==="pathname"?sr({value:C,prefix:"/"}):C:F});E.hasKey(u,"paths")&&u.paths&&(c.pathname=Om(a?o.pathname:"",...u.paths));const d=E.isString(u.search)?Ow(sr({value:u.search,prefix:"?"})):H5(u.search||{}),f=tN(c.searchParams,d,{...l,encoding:ns.None}),m=nN(f,l);return{...c,searchParams:f,search:m,paths:Lw(c),fullPath:Bm(c),host:Yl(c),origin:jw(c),href:Rw({...c,search:m})}}const oN=xe({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:eN,hash:"",fullPath:"/",href:"/"});({...oN.default});const sN=0;function Uw(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==sN)}const Xl="locationchange",In=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Bp=In?.pushState;function Rp(...e){if(!Bp)return;const t=Bp.apply(In,e);return globalThis.dispatchEvent(new Event(Xl)),t}const Lp=In?.replaceState;function jp(...e){if(!Lp)return;const t=Lp.apply(In,e);return globalThis.dispatchEvent(new Event(Xl)),t}function aN(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!In)){{if(In.pushState===Rp)throw new Op("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(In.replaceState===jp)throw new Op("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,In.pushState=Rp,In.replaceState=jp,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Xl))})}}function yu(e,t){const r=Lo(e),n=Oo({value:Oo({value:r.pathname,prefix:sr({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],o=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?Oo({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class Rm{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){hw(t,X9),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new bw({defaultValue:r,equalityCheck:()=>!1}),aN(),this.removeGlobalListener=vf(globalThis,Xl,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Y9("Looping route sanitization detected; aborting window URL change listener.");const n=yu(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);E.jsonEquals(n,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Om(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(yu(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...yu(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),o=this.routeIncludesBasePath(yu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return iN(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?sr({value:o.hash,prefix:"#"}):""},{searchParamStrategy:is.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=Lo(n);return this.params.isPaused||!r.force&&E.jsonEquals(Lo(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return Uw(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new Im(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function uN(e){return new Rm({basePath:e,sanitizeRoute(t){return{paths:lN(t.paths),hash:void 0,search:void 0}}})}function lN(e){const t=e[0];if(E.isEnumValue(t,rr)){if(t===rr.Book)return[rr.Book,...e.slice(1)];if(t===rr.Search)return e[1]?[t,e[1]]:[rr.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return zo.paths}const ol=Pm()("element-book-change-route"),Up="vira-",je=Sw({assertInputs:e=>{if(!e.tagName.startsWith(Up))throw new Error(`Tag name should start with '${Up}' but got '${e.tagName}'`)}});var he=(e=>(e.Text="text",e.ExistingPassword="existing-password",e.NewPassword="new-password",e.PlainPassword="plain-password",e.Email="email",e.Select="select",e.Checkbox="checkbox",e))(he||{});function Wc(e,t){if(e)return t?gf({value:e,suffix:"*"}):e}function cN(e){return yd(e).every(t=>t.isHidden||!t.isRequired?!0:E.isString(t.value)?!!t.value:t.value!=null)}const w=Ur({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"}),dN=Se;function fN(e){try{if(!e)throw new Error("invalid empty color");return new dN(e)}catch{throw new Error(`Invalid color: ${g(e)}`)}}function ie({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function _p(e,t){const r=We(t).map(n=>{const i=t[n],o=fN(i);return`${w[n].name}: ${o.toString()};`}).join(" ");return ie({name:e.name,svgTemplate:h`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const mN=ie({name:"Bell24Icon",svgTemplate:h`
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
    `}),hN=ie({name:"Chat24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Lm=ie({name:"Check24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),pN=ie({name:"ChevronDown24Icon",svgTemplate:h`
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
    `}),jm=ie({name:"ChevronUp24Icon",svgTemplate:h`
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
    `}),_w=ie({name:"CloseX24Icon",svgTemplate:h`
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
    `}),gN=ie({name:"Commit24Icon",svgTemplate:h`
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
    `}),yN=ie({name:"Document24Icon",svgTemplate:h`
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
    `}),bN=ie({name:"DocumentSearch24Icon",svgTemplate:h`
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
    `}),wN=ie({name:"DoubleChevron24Icon",svgTemplate:h`
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
    `}),Vw=ie({name:"Element16Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Lr=ie({name:"Element24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),vN=ie({name:"ExternalLink24Icon",svgTemplate:h`
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
    `}),Ww=ie({name:"EyeClosed24Icon",svgTemplate:h`
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
    `}),zw=ie({name:"EyeOpen24Icon",svgTemplate:h`
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
    `}),$N=ie({name:"Filter24Icon",svgTemplate:h`
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
    `}),DN=ie({name:"Link24Icon",svgTemplate:h`
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
    `}),qw=ie({name:"Loader24Icon",svgTemplate:h`
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
    `}),Un=Ur({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),xN=D`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Un["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Xi=ie({name:"LoaderAnimated24Icon",svgTemplate:h`
        <style>
            ${xN}
        </style>
        ${qw.svgTemplate}
    `}),AN=ie({name:"Lock24Icon",svgTemplate:h`
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
    `}),ea=ie({name:"Options24Icon",svgTemplate:h`
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
    `}),EN=ie({name:"Pencil24Icon",svgTemplate:h`
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
    `}),CN=ie({name:"Shield24Icon",svgTemplate:h`
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
    `}),kN=ie({name:"SortAscending24Icon",svgTemplate:h`
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
    `}),FN=ie({name:"SortDescending24Icon",svgTemplate:h`
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
    `}),SN=ie({name:"SpeakerLoud24Icon",svgTemplate:h`
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
    `}),NN=ie({name:"SpeakerMedium24Icon",svgTemplate:h`
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
    `}),TN=ie({name:"SpeakerMuted24Icon",svgTemplate:h`
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
    `}),PN=ie({name:"SpeakerQuiet24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),MN=ie({name:"Star24Icon",svgTemplate:h`
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
    `}),sl=ie({name:"StatusFailure24Icon",svgTemplate:h`
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
    `}),IN=ie({name:"StatusInProgress24Icon",svgTemplate:h`
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
    `}),ON=ie({name:"StatusSuccess24Icon",svgTemplate:h`
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
    `}),BN=ie({name:"StatusUnknown24Icon",svgTemplate:h`
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
    `}),RN=ie({name:"StatusWarning24Icon",svgTemplate:h`
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
    `}),LN=ie({name:"Upload24Icon",svgTemplate:h`
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
    `}),Kw=ie({name:"X24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Gd={Bell24Icon:mN,Chat24Icon:hN,Check24Icon:Lm,ChevronDown24Icon:pN,ChevronUp24Icon:jm,CloseX24Icon:_w,Commit24Icon:gN,Document24Icon:yN,DocumentSearch24Icon:bN,DoubleChevron24Icon:wN,Element16Icon:Vw,Element24Icon:Lr,ExternalLink24Icon:vN,EyeClosed24Icon:Ww,EyeOpen24Icon:zw,Filter24Icon:$N,Link24Icon:DN,Loader24Icon:qw,LoaderAnimated24Icon:Xi,Lock24Icon:AN,Options24Icon:ea,Pencil24Icon:EN,Shield24Icon:CN,SortAscending24Icon:kN,SortDescending24Icon:FN,SpeakerLoud24Icon:SN,SpeakerMedium24Icon:NN,SpeakerMuted24Icon:TN,SpeakerQuiet24Icon:PN,Star24Icon:MN,StatusFailure24Icon:sl,StatusInProgress24Icon:IN,StatusSuccess24Icon:ON,StatusUnknown24Icon:BN,StatusWarning24Icon:RN,Upload24Icon:LN,X24Icon:Kw},jr=Ur({"vira-form-input-radius":"8px"}),Qi=D`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,os=Ur({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":D`calc(${jr["vira-form-input-radius"].value} + 2px)`});function qa({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const i=Fe(aa(r+t+e)),o=D`
        content: '';
        top: calc(${i} * -1);
        left: calc(${i} * -1);
        position: absolute;
        width: calc(100% + calc(${i} * 2));
        height: calc(100% + calc(${i} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${r}px solid ${os["vira-focus-outline-color"].value};
        border-radius: ${os["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return n?o:D`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const Q=Ur({"vira-form-border-color":"#cccccc","vira-form-placeholder-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-text-selection-color":"#cfe9ff","vira-form-selection-hover-background-color":"#e6f9fe","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#e6f9fe","vira-form-selection-active-foreground-color":"black","vira-form-error-foreground-color":"red","vira-form-success-foreground-color":"green","vira-form-label-font-weight":"bold"}),j=je()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>D`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),ge=je()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal},styles:({hostClasses:e})=>D`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${j} {
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
                font-weight: ${Q["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${Q["vira-form-selection-hover-background-color"].value};
            }
        }

        ${j} {
            ${w["vira-icon-stroke-width"].name}: 2px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${Q["vira-form-border-color"].value};
            color: ${Q["vira-form-foreground-color"].value};
            border-radius: ${jr["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${qa({elementBorderSize:1})}

            &.checked {
                & ${j} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${Q["vira-form-error-foreground-color"].value};
            }

            &:active {
                background-color: ${Q["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${Qi};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:lt()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}const i=e.label?h`
                  <span
                      class="label-text"
                      ${Rn(e.attributePassthrough?.text)}
                      style=${Qe(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:Y;return h`
            <label
                class=${Ht({disabled:!!e.disabled})}
                ${Rn(e.attributePassthrough?.label)}
                style=${Qe(e.stylePassthrough?.label)}
                ${V("mousedown",n)}
            >
                ${i}
                <span
                    class="custom-checkbox ${Ht({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${Qe(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${Rn(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Qe(e.stylePassthrough?.["custom-checkbox"])}
                    ${C9(n)}
                >
                    <${j.assign({icon:Lm,fitContainer:!0})}
                        ${Rn(e.attributePassthrough?.[j.tagName])}
                        style=${Qe(e.stylePassthrough?.[j.tagName])}
                    ></${j}>
                </span>
            </label>
        `}}),Ka=D`
    padding: 0;
    margin: 0;
`,Ir=D`
    ${Ka};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,zc=Ur({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),jo={menuShadow:D`
        filter: drop-shadow(0px 5px 5px ${zc["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:D`
        filter: drop-shadow(0px -5px 5px ${zc["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:D`
        box-shadow: 0 5px 15px ${zc["modal-shadow-color"].value};
    `},ss=D`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,Jr=Ur({"vira-white":"#ffffff","vira-black":"#000000","vira-teal-10":"#c9f6ee","vira-teal-20":"#89ebda","vira-teal-30":"#3fddc3","vira-teal-40":"#23c9ad","vira-teal-50":"#1fb59b","vira-teal-60":"#1a9681","vira-teal-70":"#147464","vira-teal-80":"#0d4c42","vira-teal-90":"#09362f","vira-blue-10":"#ddf0f9","vira-blue-20":"#b9e0f3","vira-blue-30":"#95d0ec","vira-blue-40":"#6dbee5","vira-blue-50":"#44acde","vira-blue-60":"#228ec4","vira-blue-70":"#1a6e98","vira-blue-80":"#114864","vira-blue-90":"#092736","vira-purple-10":"#f0eafb","vira-purple-20":"#e0d4f8","vira-purple-30":"#d1bff4","vira-purple-40":"#c0a9f0","vira-purple-50":"#b093ec","vira-purple-60":"#9770e6","vira-purple-70":"#7745de","vira-purple-80":"#4c1ea9","vira-purple-90":"#31136d","vira-pink-10":"#fbe7f9","vira-pink-20":"#f6cdf3","vira-pink-30":"#f2b3ed","vira-pink-40":"#ed96e6","vira-pink-50":"#e778df","vira-pink-60":"#dd3bd0","vira-pink-70":"#b01fa4","vira-pink-80":"#74146c","vira-pink-90":"#360933","vira-red-10":"#fbe8ec","vira-red-20":"#f7d0d7","vira-red-30":"#f3b8c2","vira-red-40":"#ee9eac","vira-red-50":"#e98495","vira-red-60":"#e1546b","vira-red-70":"#c1223c","vira-red-80":"#7f1628","vira-red-90":"#6d1322","vira-orange-10":"#f8ebd9","vira-orange-20":"#f1d6af","vira-orange-30":"#eac186","vira-orange-40":"#e2aa5c","vira-orange-50":"#da932d","vira-orange-60":"#b77920","vira-orange-70":"#8e5e19","vira-orange-80":"#5e3d10","vira-orange-90":"#362409","vira-green-10":"#e2f4bd","vira-green-20":"#c1e776","vira-green-30":"#9fd927","vira-green-40":"#8fc422","vira-green-50":"#80b11f","vira-green-60":"#6a931a","vira-green-70":"#527214","vira-green-80":"#364b0d","vira-green-90":"#273609","vira-yellow-10":"#f3f199","vira-yellow-20":"#e4e01a","vira-yellow-30":"#d0cd18","vira-yellow-40":"#bdb915","vira-yellow-50":"#aaa613","vira-yellow-60":"#8d8a10","vira-yellow-70":"#6d6b0c","vira-yellow-80":"#484608","vira-yellow-90":"#393807","vira-grey-10":"#ededed","vira-grey-20":"#dadada","vira-grey-30":"#c7c7c7","vira-grey-40":"#b4b4b4","vira-grey-50":"#a2a2a2","vira-grey-60":"#878787","vira-grey-70":"#686868","vira-grey-80":"#444444","vira-grey-90":"#202020"});function Vp(e){return E.isPrimitive(e)||"_$cssResult$"in e?String(e):e.default}function Sn(e,t,r,n){if(E.isPrimitive(t)||"_$cssResult$"in t)return t;if("refDefaultBackground"in t)return"--var(default-bg)";if("refDefaultForeground"in t)return"--var(default-fg)";if("refBackground"in t||"refForeground"in t){const i=E.hasKey(t,"refBackground")?"refBackground":E.hasKey(t,"refForeground")?"refForeground":void 0,o=i&&E.hasKey(t,i)?t[i]:void 0,s=i==="refBackground"?"background":"foreground",a=o&&n[o];if(!a)throw new Error(`Color theme ${i} reference '${o}' does not exist. (Referenced from '${e}'.)`);const u=a[s]||(s==="foreground"?Sn("default-fg",r.foreground,r,n):Sn("default-bg",r.background,r,n));return`var(--${o}-${s==="foreground"?"fg":"bg"}, ${Sn(o,u,r,n)})`}else return t.value}const Rs="theme-default";function jN(e,t){try{if(Rs in t)throw new Error(`Cannot define theme color by name '${Rs}', it is used internally.`);const r=Ur({"default-fg":Sn("default-fg",e.foreground,e,t),"default-bg":Sn("default-bg",e.background,e,t),"default-inverse-fg":Sn("default-inverse-fg",e.background,e,t),"default-inverse-bg":Sn("default-inverse-bg",e.foreground,e,t)}),n=Gi(t).reduce((l,[c,d])=>{const f=Wp(c);return l[f.foreground]=d.foreground?Sn([c,"foreground"].join(" "),d.foreground,e,t):`var(${r["default-fg"].name}, ${r["default-fg"].default})`,l[f.background]=d.background?Sn([c,"background"].join(" "),d.background,e,t):`var(${r["default-bg"].name}, ${r["default-bg"].default})`,l[f.foregroundInverse]=`var(--${f.background}, ${l[f.background]})`,l[f.backgroundInverse]=`var(--${f.foreground}, ${l[f.foreground]})`,l},{}),i=Ur(n),o={},s={};Gi(t).forEach(([l,c])=>{Dt.isString(l);const d=Wp(l),f=i[d.foreground],m=i[d.background],$=i[d.foregroundInverse],b=i[d.backgroundInverse];Dt.isDefined(f),Dt.isDefined(m),Dt.isDefined($),Dt.isDefined(b),o[l]={foreground:f,background:m,init:c,name:l},s[l]={foreground:$,background:b,init:c,name:l}});const a={foreground:r["default-fg"],background:r["default-bg"],init:e,name:Rs},u={...a,foreground:r["default-inverse-fg"],background:r["default-inverse-bg"]};return{colors:{[Rs]:a,...o},inverse:{[Rs]:u,...s},init:{colors:t,default:e}}}catch(r){throw globalThis.setTimeout(()=>yf.error(r)),r}}function Wp(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}function UN(e,t){const r=Gw(e.init.default,1,void 0,t),n=VN(e.init.colors,1,e.init.default,t);return`defineColorTheme(
${r},
${n},
)`}function $t(e){return"    ".repeat(e)}function bu(e,t){return typeof e!=typeof t?!1:typeof e=="string"||typeof e=="number"?e===t:"_$cssResult$"in e&&"_$cssResult$"in t?e.cssText===t.cssText:JSON.stringify(e)===JSON.stringify(t)}function _N(e){const t=e.match(/^var\(--([^,)]+)/);return t?t[1]:void 0}function zp(e,t,r){if(typeof e=="string")return`'${e}'`;if(typeof e=="number")return String(e);if("_$cssResult$"in e){const n=String(e);{const i=_N(n);if(i)return`${r}['${i}']`}return`css\`${n}\``}else if("refBackground"in e||"refForeground"in e||"refDefaultBackground"in e||"refDefaultForeground"in e){const n=[];return"refForeground"in e&&n.push(`${$t(t+1)}refForeground: '${e.refForeground}',`),"refBackground"in e&&n.push(`${$t(t+1)}refBackground: '${e.refBackground}',`),"refDefaultForeground"in e&&n.push(`${$t(t+1)}refDefaultForeground: true,`),"refDefaultBackground"in e&&n.push(`${$t(t+1)}refDefaultBackground: true,`),`{
${n.join(`
`)}
${$t(t)}}`}else return`'${e.default}'`}function Gw(e,t,r,n){const i=[];return"foreground"in e&&(!r||!bu(e.foreground,r.foreground))&&(r&&bu(e.foreground,r.background)?i.push(`${$t(t+1)}foreground: {
${$t(t+2)}refDefaultBackground: true,
${$t(t+1)}},`):i.push(`${$t(t+1)}foreground: ${zp(e.foreground,t+1,n)},`)),"background"in e&&(!r||!bu(e.background,r.background))&&(r&&bu(e.background,r.foreground)?i.push(`${$t(t+1)}background: {
${$t(t+2)}refDefaultForeground: true,
${$t(t+1)}},`):i.push(`${$t(t+1)}background: ${zp(e.background,t+1,n)},`)),`${$t(t)}{
${i.join(`
`)}
${$t(t)}}`}function VN(e,t,r,n){const i=Gi(e).map(([o,s])=>`${$t(t+1)}'${o}': ${Gw(s,t+1,r,n).trimStart()},`);return`${$t(t)}{
${i.join(`
`)}
${$t(t)}}`}function Zd({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>Zd({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function WN({value:e,allowed:t,blocked:r}){const n=t?Zd({input:e,matcher:t}):!0,i=r?Zd({input:e,matcher:r}):!1;return n&&!i}function Hd(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(WN({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function zN({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){const o=_i(r,HTMLInputElement),s=E.hasKey(r,"data")&&e1.isString(r.data)||"";if(s){const{blocked:u}=Hd({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=Hd({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==a&&(o.value=a),t!==a&&i(a)}var Uo=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(Uo||{});const pt=je()({tagName:"vira-input",cssVars:{"vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>D`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${Q["vira-form-foreground-color"].value};
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
                    font-weight: ${Q["vira-form-label-font-weight"].value};
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
                ${Ir};
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
                ${ss};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Ir};
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
                border-radius: ${jr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${Q["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${Ir};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${jr["vira-form-input-radius"].value};
                background-color: ${Q["vira-form-background-color"].value};
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
                ${Ir};
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
                    ${qa({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${Q["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${Q["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${Q["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${ss};
            }

            button {
                ${Ir};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Un["vira-interaction-animation-duration"].value};
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
                    border-color: ${Q["vira-form-error-foreground-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${Qi};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:lt(),inputBlocked:lt()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Wi(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:i,host:o})=>{const{filtered:s}=Hd({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?h`
                  <${j.assign({icon:e.icon})} class="left-side-icon"></${j}>
              `:Y,u=e.fitText?D`
                  width: ${r.forcedInputWidth}px;
              `:Y,l=V("mousedown",f=>{const m=_i(f,HTMLElement,{useOriginalTarget:!0}),$=nn.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);m!==$&&(f.preventDefault(),$.focus())}),c=e.disableBrowserHelps||e.type==="password",d=h`
            <span class="input-wrapper" ${e.label?Y:l}>
                ${a}
                ${or(!!e.fitText,h`
                        <span
                            class="size-span"
                            ${Fw(({contentRect:f})=>{n({forcedInputWidth:f.width})})}
                        >
                            <pre>${s||e.placeholder||Y}</pre>
                        </span>
                    `)}

                <input
                    id=${Qe(e.label?r.randomId:void 0)}
                    aria-label=${Qe(e.label||void 0)}
                    autofocus=${!1}
                    type=${qN(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${Qe(c?"off":void 0)}
                    autocorrect=${Qe(c?"off":void 0)}
                    autocapitalize=${Qe(c?"off":void 0)}
                    spellcheck=${Qe(c?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${V("input",f=>{zN({inputs:e,previousValue:s,event:f,inputBlockedCallback(m){t(new i.inputBlocked(m))},newValueCallback(m){t(new i.valueChange(m))}})})}
                    placeholder=${Qe(e.placeholder||void 0)}
                    ${Rn(e.attributePassthrough)}
                />

                ${or(!!(e.showClearButton&&e.value),h`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${V("mousedown",f=>{f.stopImmediatePropagation(),f.preventDefault()})}
                            ${V("click",()=>{e.disabled||t(new i.valueChange(""))})}
                        >
                            <${j.assign({icon:_w})}></${j}>
                        </button>
                    `)}
                ${or(e.type==="password",h`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${V("mousedown",f=>{f.stopImmediatePropagation(),f.preventDefault()})}
                            ${V("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${j.assign({icon:r.showPassword?zw:Ww})}></${j}>
                        </button>
                    `)}
                ${or(!!e.suffix,h`
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
            `:d}});function qN(e,t){return e==="password"&&t?"text":e||"text"}const et=je()({tagName:"vira-select",state(){return{randomId:Wi(32)}},events:{valueChange:lt()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError},styles:({hostClasses:e,cssVars:t})=>D`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${Q["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${Ir};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${jr["vira-form-input-radius"].value};
            background-color: ${Q["vira-form-background-color"].value};
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
                    ${qa({elementBorderSize:0,noNesting:!0})}
                }

                &.placeholder {
                    color: ${Q["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${t["vira-select-icon-padding"].value};
                }
            }

            & ${j} {
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
                border-radius: ${jr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${Q["vira-form-border-color"].value};
                transition: border
                    ${Un["vira-interaction-animation-duration"].value};
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
                font-weight: ${Q["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${Qi}
            }
            ${j} {
                ${Qi}
            }
            & * {
                cursor: not-allowed;
            }
        }

        ${e["vira-select-error"].selector} {
            & .wrapper-border {
                border-color: ${Q["vira-form-error-foreground-color"].value};
            }
        }
    `,render({inputs:e,state:t,dispatch:r,events:n}){const i=e.value||void 0,o=e.placeholder||i==null?h`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:Y,s=h`
            <span class="select-wrapper">
                <select
                    .value=${Qe(i)}
                    class=${Ht({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Qe(e.label?t.randomId:void 0)}
                    aria-label=${Qe(e.label||void 0)}
                    aria-disabled=${Qe(e.disabled?"true":void 0)}
                    ${V("input",a=>{const u=_i(a,HTMLSelectElement),l=u.value;u.value!==i&&(u.selectedIndex=e.options.findIndex(c=>c.value===i)),r(new n.valueChange(l))})}
                    ${Rn(e.attributePassthrough?.select)}
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

                <${j.assign({icon:e.icon})} class="input-icon"></${j}>
                <${j.assign({icon:jm})} class="trigger-icon"></${j}>
            </span>
        `;return e.label?h`
                <label for=${t.randomId} ${Rn(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}}),Xt=je()({tagName:"vira-form",events:{valueChange:lt(),validChange:lt()},styles:D`
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
    `,state(){return{lastIsValid:!1}},render({inputs:e,dispatch:t,events:r,state:n,updateState:i}){const o=cN(e.fields);o!==n.lastIsValid&&(i({lastIsValid:o}),t(new r.validChange({allFieldsAreValid:o})));const s=Gi(e.fields).map(([a,u])=>u.isHidden?Y:u.type===he.Checkbox?h`
                        <${ge.assign({value:u.value||!1,disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,label:Wc(u.label,!!u.isRequired&&!e.hideRequiredMarkers)})}
                            ${u.testId?jn(u.testId):Y}
                            ${V(ge.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${ge}>
                    `:u.type===he.Select?h`
                        <${et.assign({options:u.options,value:u.value,placeholder:u.placeholder,disabled:e.isDisabled||u.isDisabled,label:Wc(u.label,!!u.isRequired&&!e.hideRequiredMarkers),hasError:u.hasError,icon:u.icon})}
                            ${u.testId?jn(u.testId):Y}
                            ${V(et.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${et}>
                    `:h`
                        <${pt.assign({value:u.value||"",disabled:e.isDisabled||u.isDisabled,hasError:u.hasError,icon:u.icon,label:Wc(u.label,!!u.isRequired&&!e.hideRequiredMarkers),placeholder:u.placeholder,showClearButton:e.showClearButtons,attributePassthrough:u.isUsername?{autocomplete:"username"}:u.type===he.NewPassword?{autocomplete:"new-password"}:u.type===he.ExistingPassword?{autocomplete:"password"}:u.type===he.Email?{autocomplete:"email"}:{},type:[he.NewPassword,he.ExistingPassword,he.PlainPassword].includes(u.type)?Uo.Password:u.type===he.Email?Uo.Email:Uo.Default})}
                            ${u.testId?jn(u.testId):Y}
                            ${V(pt.events.valueChange,l=>{t(new r.valueChange({key:a,...u,value:l.detail}))})}
                        ></${pt}>
                    `);return h`
            <form ${V("submit",a=>a.preventDefault())}>
                ${s}
                <slot></slot>
            </form>
        `}});function KN(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given: ${AD(r)}`)}function GN(e,t=[],r=!1){return r?t.includes(e.id)?t.filter(n=>n!==e.id):[...t,e.id]:[e.id]}function qp({open:e,callback:t,popUpManager:r,host:n}){if(e){const i=r.showPopUp(n);t?.(i)}else r.removePopUp(),t?.(void 0)}const hr=je()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>D`
        :host {
            display: flex;
            ${ss};
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

        ${e["vira-menu-item-selected"].selector} ${j} {
            opacity: 1;
            visibility: visible;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${j} {
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
            visibility: hidden;
        }
    `,render({inputs:e}){return h`
            <div class="item">
                <${j.assign({icon:Lm})}></${j}>
                <slot>${e.label}</slot>
            </div>
        `}});function ZN(e,t){return e>t}function HN(e,t){return e<t}function Da(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var gn;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(gn||(gn={}));var be;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(be||(be={}));function Ql(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const i=n[t.x];if(i)if(i.navEntry.navParams.group){const o=Ql(i.children);o&&(r=o.node)}else i.navEntry.navParams.disabled||(r=i)}}if(r)return{node:r,coords:t}}function Kp(e,t,r,n){if(!t){const u=Ql(e.children);return u?(Da(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:be.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:be.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=Zw(t.position,r),a=n?!0:!o;return i&&a?(Da(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:r,navAction:be.Navigate,coords:s}):i?a?{success:!1,reason:"no conditions matched",direction:r,navAction:be.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:be.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:be.Navigate}}function Zw(e,t){let r=!1,n,i=1;const o=Date.now();for(;!r||!n;)if(n=JN(e,t,i),r=!n.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return yf.warning("Failed to find next non-disabled node."),n;return n}function JN(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Dt.isDefined(n,"missing parent");const i=nn.isDefined(n.children[e.nodeCoords.y]),o=n.children.length>1&&(t===gn.Down||t===gn.Up),s=t===gn.Down||t===gn.Right?r:-1*r,a=s<0?ZN:HN,u=o?Xh(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=nn.isDefined(n.children[u]),c=o?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:Xh(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),d=n.children[u]?.[c],f=o?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:d,requiresWrapping:f,coords:{x:c,y:u}}}function YN(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:be.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=Zw(n,t),a=i?.navEntry.navParams.group?Ql(i.children):{node:i,coords:s},u=r?!0:!o;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:be.Pibling}:u?(Da(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:o,coords:a.coords,direction:t,navAction:be.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:be.Pibling}}var Wt;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Wt||(Wt={}));const Qr={name:"data-nav",js(e){return e?`[${Qr.name}*="${e}"]`:`[${Qr.name}]`},css({baseSelector:e="",navValue:t}={}){return D`
            ${Fe(e)}${Fe(Qr.js(t))}
        `}},Um="navEntry";function Hw(e){return Um in e}function Jw(e){if(Hw(e)){const t=e[Um];return nn.instanceOf(t,Yw,"Invalid nav entry")}else return}function XN(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Wt.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class Yw{element;navParams;navTreeNode;navValue;eventListener=XN(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Dt.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Qr.name,""),_c(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,i=t===(n===Wt.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Wt.Focused),_c(this.element)||this.element.focus()):(this.removeNavValue(Wt.Focused),_c(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,be.Focus)}activate(t){const r=this.navValue,n=t===(r===Wt.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(Wt.Active):this.setNavValue(Wt.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,be.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(Qr.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(Qr.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function Xw(e,t){Object.entries(t).forEach(([r,n])=>{E.isBoolean(n)&&n?e.setAttribute(r,""):E.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const QN=Zn(class extends Hn{element;lastKey;constructor(e){super(e),this.element=za(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),wr}});function eT(e){return"group"in e?Wt.Group:e.disabled?Wt.Disabled:""}function Gp(e,t={}){return QN(g(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;Dt.instanceOf(r,HTMLElement);const i={[Qr.name]:eT(t),tabindex:n?0:-1};Xw(r,i);const o=Jw(r)||new Yw(r,e,t);Hw(r)?(o.navParams=t,o.navController=e):r[Um]=o,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function tT(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:be.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:be.Enter};const r=t.position.node.children[0]?.[0];return r?(Da(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:be.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:be.Enter}}function rT(e,t){return Qw([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function Qw(e,t,r){for(let n=0;n<t.length;n++){const i=t[n];for(let o=0;o<i.length;o++){const s=i[o],a={ancestorChain:e,nodeCoords:{x:o,y:n},node:s};if(r(a))return a;const u=Qw(e.concat(a),s.children,r);if(u)return u}}}function e2(e,t){const r=rT(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function nT(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:be.Exit};const r=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:be.Exit};const{nodeCoords:n}=e2(e,r.navEntry);return Da(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:be.Exit,coords:n}}class iT extends cn()("nav-exit"){}class t2 extends cn()("nav-activate"){}class oT extends cn()("nav-focus"){}class sT extends cn()("nav-enter"){}class aT extends cn()("nav-navigate"){}class uT extends cn()("nav-navigate-pibling"){}function lT(e){return{root:!0,children:r2(e)?.children||[]}}function r2(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=Jw(t),n=cT(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function cT(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const i=n.navEntry.navParams.x,o=n.navEntry.navParams.y||0,s=to(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(n):s.withX.push({x:i,node:n})}return e.children.forEach(n=>{const i=r2(n);i&&r(i)}),t.sort((n,i)=>n.y-i.y).map(n=>(n.withX.sort((i,o)=>i.x-o.x),n.withX.forEach(({x:i,node:o})=>{n.noX.splice(i,0,o)}),n.noX)).filter(E.isTruthy)}class n2 extends wf{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Ql(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const i=e2(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:i.nodeCoords};return r&&(n===be.Activate?this.dispatch(new t2({detail:o})):n===be.Focus&&this.dispatch(new oT({detail:o}))),o}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:be.Navigate,reason:"NavController is locked."};const n=Kp(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new aT({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:be.Enter,reason:"NavController is locked."};const r=tT(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new sT({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:be.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:be.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Dt.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:be.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===be.Activate&&this.currentNavEntry.entry.focus(!0);const t=nT(this.getNavTree(),this.currentNavEntry);return this.dispatch(new iT({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:be.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),o={...this.currentNavEntry?YN(this.currentNavEntry,r,t):Kp(n,void 0,r,t),navAction:be.Pibling};return this.dispatch(new uT({detail:o})),o}buildNavTree(){const t=_9(this.rootElement),r=lT(t);return this.cachedNavTree=r,r}}const So=je()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>D`
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
                    ${Rn(e.attributePassthrough?.a)}
                    style=${Qe(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return h`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${Rn(e.attributePassthrough?.a)}
                    style=${Qe(e.stylePassthrough?.a)}
                    ${V("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),Zp={item:"menu-item"},ta=je()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new n2(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>D`
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
            background-color: ${Q["vira-form-background-color"].value};
            color: ${Q["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Ir};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${Qr.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Wt.Focused})}, ${Qr.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Wt.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${Q["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${Qr.css({baseSelector:".menu-item:not(.disabled)",navValue:Wt.Focused})},
                ${Qr.css({baseSelector:".menu-item:not(.disabled)",navValue:Wt.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${Q["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${hr} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${Qi};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){KN(e.items);const r=e.items.map(n=>{const i=!!e.selected?.includes(n.id),o=E.isString(n.label)?h`
                      <${hr.assign({label:n.label,selected:i,hideCheckIcon:e.hideCheckIcons})}></${hr}>
                  `:n.label,s=n.disabled||!e.isMultiSelect&&i;return n.route?h`
                    <${So.assign({route:n.route})}
                        class="menu-item ${Ht({disabled:!!n.disabled,selected:i})}"
                        ${jn(Zp.item)}
                        title=${Qe(n.titleText||void 0)}
                        role="option"
                        ${Gp(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </${So}>
                `:h`
                    <button
                        class="menu-item ${Ht({disabled:!!n.disabled,selected:i})}"
                        ${jn(Zp.item)}
                        title=${Qe(n.titleText||void 0)}
                        role="option"
                        ${Gp(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </button>
                `});return h`
            ${r}
        `}});var _m=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(_m||{}),al=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(al||{});const ra=je()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>D`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${jr["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${Q["vira-form-background-color"].value};
            border: 1px solid ${Q["vira-form-border-color"].value};
            color: ${Q["vira-form-foreground-color"].value};
            ${jo.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${jo.menuShadowReversed}
            border-radius: ${jr["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${jr["vira-form-input-radius"].value};
        }
    `,render(){return h`
            <slot></slot>
        `}}),wu=globalThis.document;class dT extends bw{constructor(){if(super({defaultValue:!!wu?.hidden,equalityCheck:E.strictEquals}),!wu)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,wu));const t=r=>this.updateVisibility(r,wu);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=mT.includes(t.type),i=fT.includes(t.type),o=n?!0:i?!1:r.hasFocus()||!r.hidden;this.setValue(o)}}const fT=["blur","focusout","pagehide"],mT=["focus","focusin","pageshow"],hT=new dT;function pT(e,t){return hT.listen(e,t)}const Hp={top:0,left:0,right:0,bottom:0};class i2 extends bf("hide-pop-up"){}class o2 extends cn()("nav-select"){}class gT{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new wf;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(t){let r=!1;const n=new ResizeObserver(()=>{r?this.removePopUp():r=!0});n.observe(t),this.cleanupCallbacks=[()=>{n.disconnect()},pT(!1,i=>{i||this.removePopUp()}),this.navController.listen(t2,i=>{i.detail.success&&(this.listenTarget.dispatch(new o2({detail:i.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),i.stopImmediatePropagation(),i.preventDefault())}),bd("mousedown",i=>{this.lastRootElement&&i.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),bd("keydown",i=>{const o=i.code;o==="Escape"?this.removePopUp():this.options.supportNavigation&&(o==="ArrowDown"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:gn.Down,allowWrapping:!1})):o==="ArrowUp"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:gn.Up,allowWrapping:!1})):o==="ArrowLeft"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:gn.Left,allowWrapping:!1})):o==="ArrowRight"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:gn.Right,allowWrapping:!1})):(o==="Enter"||o==="Return"||o==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(i.stopImmediatePropagation(),i.preventDefault()))})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new i2)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=q9(t);Dt.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},c=Zt(Hp,m=>o[m]),d=Zt(Hp,m=>{const $=l[m],b=c[m];return Math.abs($-b)}),f=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace;return this.attachGlobalListeners(i),{popDown:!f,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var li=(e=>(e.Left="left",e.Right="right",e.Both="both",e))(li||{});const we=je()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new gT(new n2(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>D`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Ir};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${qa({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${ss};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Qi}
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
    `,events:{navSelect:lt(),openChange:lt(),init:lt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:o}){e.popUpManager.listen(i2,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");Dt.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(o2,s=>{n.keepOpenAfterInteraction||qp({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:o,slotNames:s}){function a({emitEvent:m,open:$},b){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&b){const F=o.shadowRoot.querySelector(".dropdown-trigger");if(F&&!b.composedPath().includes(F))return}qp({open:$,callback(F){i({showPopUpResult:F}),m&&e(new t.openChange(F))},host:o,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor==="right"&&r.showPopUpResult?D`
                      left: -${r.showPopUpResult.positions.diff.left}px;
                  `:D`
                      left: ${n.popUpOffset?.left||0}px;
                  `,l=r.showPopUpResult&&n.horizontalAnchor==="left"?D`
                      right: -${r.showPopUpResult.positions.diff.right}px;
                  `:D`
                      right: ${n.popUpOffset?.right||0}px;
                  `,c=D`
            ${u}
            ${l}
        `,d=r.showPopUpResult?r.showPopUpResult.popDown?D`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                      top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                      ${c}
                  `:D`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                      bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                      ${c}
                  `:void 0;function f(m){a({emitEvent:!0,open:!r.showPopUpResult},m)}return h`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Ht({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
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
                    class="pop-up-positioner ${Ht({"right-aligned":n.horizontalAnchor==="right"})}"
                    style=${d}
                >
                    ${or(!!r.showPopUpResult,h`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),yT={menu:"menu-trigger-menu"},si=je()({tagName:"vira-menu-trigger",styles:D`
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
    `,events:{itemActivate:lt(),openChange:lt()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:i}){return h`
            <${we.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||li.Left})}
                class=${Ht({open:!!t.showPopUpResult})}
                ${V(we.events.init,o=>{r({navController:o.detail.navController,popUpManager:o.detail.popUpManager})})}
                ${V(we.events.openChange,o=>{!!t.showPopUpResult!=!!o.detail&&n(new i.openChange(o.detail)),r({showPopUpResult:o.detail})})}
                ${V(we.events.navSelect,o=>{const s=o.detail.x,a=e.items[s];if(!a)throw new Error(`Found no dropdown option at index '${s}'`);n(new i.itemActivate(GN(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${we.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?h`
                          <${ra.assign({direction:t.showPopUpResult.popDown?al.Downwards:al.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${we.slotNames.popUp}
                              class=${Ht({"full-width-menu":e.horizontalAnchor===li.Both})}
                          >
                              <${ta.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${jn(yT.menu)}
                              ></${ta}>
                          </${ra}>
                      `:Y}
            </${we}>
        `}}),Ze=je()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>D`
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
        `}});var No=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(No||{});const fe=je()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>D`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ss};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${os["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Qi};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Ir};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${jr["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Un["vira-interaction-animation-duration"].value},
                background-color
                    ${Un["vira-interaction-animation-duration"].value},
                border-color ${Un["vira-interaction-animation-duration"].value};

            ${qa({elementBorderSize:2})}
        }

        .empty-text {
            width: 0;
        }

        button ${j} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${j} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?h`
                  <${j.assign({icon:e.icon})}></${j}>
              `:Y,r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:h`
                  <span class="empty-text">&nbsp;</span>
              `;return h`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Jd=(e=>(e.Error="error",e.Success="success",e))(Jd||{});const qc=je()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState==="error","vira-card-success":({inputs:e})=>e.cardState==="success"},cssVars:{"vira-card-border":"1px solid #d3d3d3","vira-card-border-radius":"16px","vira-card-padding":"16px"},styles:({hostClasses:e,cssVars:t})=>D`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${t["vira-card-border-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${Q["vira-form-error-foreground-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${Q["vira-form-success-foreground-color"].value};
        }
    `,render(){return h`
            <slot></slot>
        `}}),An=je()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>D`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Ir};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Un["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:lt()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:o}){const s=o.expanded?D`
                  height: ${e.contentHeight}px;
              `:D`
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
                    ${Fw(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Kc={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},zs=je()({tagName:"vira-dropdown",styles:D`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${si} {
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
                ${Un["vira-interaction-animation-duration"].value} linear;
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
            ${ss};
            border: 1px solid ${Q["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${jr["vira-form-input-radius"].value};
            background-color: ${Q["vira-form-background-color"].value};
            color: ${Q["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:lt(),openChange:lt()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:i}){const o=qn(t.selected,c=>t.options.find(d=>d.id===c),E.isTruthy),s=t.icon?h`
                  <${j.assign({icon:t.icon})}
                      ${jn(Kc.icon)}
                  ></${j}>
              `:Y,a=!o.length,u=t.selectionPrefix&&!a?h`
                      <span class="selected-label-prefix" ${jn(Kc.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:Y,l=a?t.placeholder||"":t.isMultiSelect&&o.length>1?`${o.length} Selected`:o[0]?.label||"";return h`
            <${si.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||li.Both})}
                ${V(si.events.openChange,c=>{i({showPopUpResult:c.detail}),r(new n.openChange(c.detail))})}
                ${V(si.events.itemActivate,c=>{r(new n.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${Ht({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${jn(Kc.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${Ht({"using-placeholder":a})}"
                        title=${Qe(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${j.assign({icon:jm})}
                            class="trigger-icon"
                        ></${j}>
                    </span>
                </div>
            </${si}>
        `}}),qi=je()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>D`
        :host {
            color: ${Q["vira-form-error-foreground-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return h`
            <slot></slot>
        `}}),Qn=je()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:lt(),imageError:lt()},styles:({hostClasses:e})=>D`
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
                      <${j.assign({icon:sl})} class="error"></${j}>
                  </slot>
              `:t.loadedUrls[s]?void 0:h`
                    <slot class="status-wrapper" name=${o.loading}>
                        <${j.assign({icon:Xi})}></${j}>
                    </slot>
                `;return h`
            ${or(!!a,a)}
            <img
                class=${Ht({hidden:!!a})}
                ${V("load",async()=>{e._debugLoadDelay&&await Ki(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[s]:!0}}),n(new i.imageLoad)})}
                ${V("error",async u=>{e._debugLoadDelay&&await Ki(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[s]:!0}}),n(new i.imageError(u.error))})}
                src=${s}
            />
        `}}),bT=["pagehide","pageshow","popstate"],En=je()({tagName:"vira-modal",events:{modalClose:lt()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanup:void 0}},cleanup({state:e}){e.cleanup?.()},hostClasses:{"vira-modal-phone-size":({inputs:e})=>!!e.isMobileSize},slotNames:["modalTitle"],cssVars:{"vira-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-modal-backdrop-filter":"blur(3px)","vira-modal-subtitle-color":"#7E7E7E","vira-modal-close-button-hover-radius":"8px","vira-modal-close-button-hover-background-color":"#E4E4E4"},styles:({hostClasses:e,cssVars:t})=>D`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${Ka};
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
            ${jo.modal}

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
                        ${Ir};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${t["vira-modal-close-button-hover-radius"].value};

                        &:hover {
                            background-color: ${t["vira-modal-close-button-hover-background-color"].value};
                        }

                        & ${j} {
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
    `,render({inputs:e,state:t,updateState:r,events:n,dispatch:i,slotNames:o}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanup?.(),r({previousOpenValue:e.open}),e.open)){const a=bT.map(u=>bd(u,()=>{i(new n.modalClose)}));r({cleanup:()=>{a.forEach(u=>u())}})}function s(){e.open&&(t.cleanup?.(),i(new n.modalClose))}return h`
            <dialog
                ${Yi(a=>{r({dialogElement:nn.instanceOf(a,HTMLDialogElement)})})}
                ${V("close",()=>{s()})}
                ${V("click",a=>{t.contentElement&&!a.composedPath().includes(t.contentElement)&&!e.blockLightDismissal&&s()})}
            >
                <div
                    class="modal-content-wrapper"
                    ${Yi(a=>{r({contentElement:nn.instanceOf(a,HTMLDivElement)})})}
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
                            <${j.assign({icon:Kw})}></${j}>
                        </button>
                    </div>
                    ${e.open?h`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:Y}
                </div>
            </dialog>
        `}}),yn=je()({tagName:"vira-overflow-switch",slotNames:["large","small"],state(){return{isOverflowing:!1,resizeObserver:void 0,cleanup:void 0}},hostClasses:{"vira-overflow-switch-show-small":({state:e,inputs:t})=>e.isOverflowing||!!t.useSmall},styles:({hostClasses:e})=>D`
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
                ${Yi(o=>{if(!r.automaticallySwitch)return;const s={elementToTest:o,host:n,updateState:t},a=new ResizeObserver(()=>{Gc(s)});a.observe(n),a.observe(o);const u=vf(o,"slotchange",()=>{Gc(s)});Gc(s),i.cleanup?.(),t({cleanup(){a.disconnect(),u()}})})}
            >
                <slot name=${e.large}></slot>
            </div>
            <div class="small"><slot name=${e.small}></slot></div>
        `}});function Gc({elementToTest:e,host:t,updateState:r}){const n=e.scrollWidth>t.clientWidth;r({isOverflowing:n})}const Vt=je()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>D`
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
    `,render({inputs:e,host:t}){const r=e.min||0,i=(e.max||100)-r,o=e.value-r,s=fD(Math.round(o/i*100),{min:0,max:100});return Xw(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),h`
            <div
                class="progress-bar"
                style=${s?D`
                          width: ${s}%;
                      `:D`
                          display: none;
                      `}
            ></div>

            <div class="background-bar"></div>
        `}});function s2(e){return w9({async updateCallback(t,r){if(r&&t in r.cache)return{cache:r.cache,element:r.cache[t],key:t};const n=await e[t]();return{cache:{...r?.cache,[t]:n},element:n,key:t}}})}function a2(e,{ready:t,loading:r,error:n,key:i}){return i&&e.update(i),e.value instanceof Error?n(e.value):e.value instanceof Promise?r(e.value.then(o=>({[o.key]:o.element}))):t({[e.value.key]:e.value.element})}const kr=Sw(),Or=kr()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>D`
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
                ${V("click",n=>{(!e.router||Uw(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new ol(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function wT(e,t){return e.entry.entryType===St.Root?!1:e.entry.entryType===St.Page||E.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:E.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const Nn=kr()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>D`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${ye["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${ye["element-book-nav-hover-background-color"].value};
            color: ${ye["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${ye["element-book-nav-active-background-color"].value};
            color: ${ye["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Or.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${ye["element-book-nav-selected-background-color"].value};
            color: ${ye["element-book-nav-selected-foreground-color"].value};
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

        ${j} {
            display: inline-flex;
            color: ${ye["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!wT(r,e.selectedPath))return;const n=D`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return h`
                <li style=${n}>
                    <${Or.assign({router:e.router,route:{paths:[rr.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Ht({"title-row":!0,selected:e.selectedPath?E.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${or(Bo(r,St.ElementExample),h`
                                    <${j.assign({icon:Vw})}></${j}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Or}>
                </li>
            `});return h`
            <${Or.assign({route:zo,router:e.router})}>
                <slot name=${pn.NavHeader}>Book</slot>
            </${Or}>
            <ul>
                ${t}
            </ul>
        `}});async function vT(e){await Kd(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await W9(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const gi=kr()({tagName:"book-error",styles:D`
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
    `,render({inputs:e}){return(E.isArray(e.message)?e.message:[e.message]).map(r=>h`
                <p>${r}</p>
            `)}}),xa=kr()({tagName:"book-page-controls",events:{controlValueChange:lt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>D`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${ye["element-book-page-foreground-faint-level-1-color"].value};
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

        ${pt} {
            height: 24px;
            max-width: 128px;
        }

        ${j}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],o)=>{if(i.controlType===G.Hidden)return"";const s=$T(e.currentValues[n],i,a=>{const u=E.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[n]:a}}))});return h`
                    <div class="control-wrapper">
                        ${or(o===0,h`
                                <${j.assign({icon:ea})}
                                    class="options-icon"
                                ></${j}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${i.controlType===G.Custom?h`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function $T(e,t,r){return Ti(t,G.Hidden)?"":Ti(t,G.Checkbox)?h`
            <input
                type="checkbox"
                ?checked=${e}
                ${V("input",n=>{const i=_i(n,HTMLInputElement);r(i.checked)})}
            />
        `:Ti(t,G.Color)?h`
            <input
                type="color"
                .value=${e}
                ${V("input",n=>{const i=_i(n,HTMLInputElement);r(i.value)})}
            />
        `:Ti(t,G.Text)?h`
            <${pt.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${V(pt.events.valueChange,n=>{r(n.detail)})}
            ></${pt}>
        `:Ti(t,G.Number)?h`
            <input
                type="number"
                .value=${e}
                ${V("input",n=>{const i=_i(n,HTMLInputElement);r(i.value)})}
            />
        `:Ti(t,G.Dropdown)?h`
            <select
                .value=${e}
                ${V("input",n=>{const i=_i(n,HTMLSelectElement);r(i.value)})}
            >
                ${t.options.map(n=>h`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:Ti(t,G.Custom)?t.content:h`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const Jp=kr()({tagName:"book-breadcrumbs",styles:D`
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
                <${Or.assign({route:{hash:void 0,search:void 0,paths:[rr.Book,...s]},router:e.router})}>
                    ${r}
                </${Or}>
                ${a}
            `}):h`
                &nbsp;
            `}}),Zc=kr()({tagName:"book-breadcrumbs-bar",styles:D`
        :host {
            border-bottom: 1px solid
                ${ye["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${ye["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return h`
            ${or(!!e.currentSearch,h`
                    &nbsp;
                `,h`
                    <${Jp.assign({currentRoute:e.currentRoute,router:e.router})}></${Jp}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${V("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=n.value;await Ki({milliseconds:200}),n.value===i&&(n.value?t(new ol({paths:[rr.Search,encodeURIComponent(n.value)]})):t(new ol(zo)))})}
            />
        `}}),Yp=kr()({tagName:"book-entry-description",styles:D`
        :host {
            color: ${ye["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${ye["element-book-page-foreground-color"].value};
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
            `)}}),Xp=kr()({tagName:"book-page-wrapper",styles:D`
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

        ${Or} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?h`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:h`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[rr.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?r1(e.pageNode.entry.errors):void 0;return n&&console.error(n),h`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Or.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Or}>
                    ${n?h`
                              <${gi.assign({message:n.message})}></${gi}>
                          `:h`
                              <${Yp.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${Yp}>
                              <${xa.assign({config:e.pageNode.entry.controls,currentValues:xf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${xa}>
                          `}
                </div>
            </div>
        `}}),vu=kr()({tagName:"book-element-example-controls",styles:D`
        :host {
            display: flex;
            color: ${ye["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[rr.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return h`
            <${Or.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Or}>
        `}}),Qp=Symbol("unset-internal-state"),eg=kr()({tagName:"book-element-example-viewer",state(){return{isUnset:Qp}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw r1(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Qp&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return h`
                ${or(!!t.elementExampleNode.entry.styles,h`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Et(n)),console.error(n),h`
                <${gi.assign({message:`${t.elementExampleNode.entry.title} failed: ${Et(n)}`})}></${gi}>
            `}},options:{allowPolymorphicState:!0}}),tg=kr()({tagName:"book-element-example-wrapper",styles:D`
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

        ${vu} {
            color: ${ye["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${vu} {
            color: ${ye["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return h`
            <div class="individual-example-wrapper">
                <${vu.assign(yD(e,["currentPageControls"]))}></${vu}>
                <${eg.assign(e)}></${eg}>
            </div>
        `}}),DT={milliseconds:10};let qs;const ul=new Map,Ri=new Map;function xT(){return qs||(qs=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=ul.get(r);if(n)if(t.isIntersecting){if(!Ri.has(r)){const i=globalThis.setTimeout(()=>{Ri.delete(r),n(),qs?.unobserve(r),ul.delete(r)},Vo(DT,{milliseconds:!0}).milliseconds);Ri.set(r,i)}}else{const i=Ri.get(r);i&&(clearTimeout(i),Ri.delete(r))}}},{rootMargin:"100px"})),qs}function rg(e){const t=Ri.get(e);t&&(clearTimeout(t),Ri.delete(e)),ul.delete(e),qs?.unobserve(e)}const $u=kr()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:D`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&rg(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:h`
            <div
                class="placeholder"
                ${Yi(n=>{t.placeholderElement&&rg(t.placeholderElement),r({placeholderElement:n}),ul.set(n,()=>{r({hasRendered:!0})}),xT().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function u2(e,t,r,n){const i=wd(r,n),o=[];if(i){const s=u2(e,t,i,n);s&&o.push(s)}if(Bo(r,St.Page)&&!e.includes(r)){const s=xf(t,r.fullUrlBreadcrumbs);o.push({config:r.entry.controls,current:s,breadcrumbs:Zt(s,()=>r.fullUrlBreadcrumbs)})}return o.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function AT({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:i,originalTree:o}){if(!e.length&&n)return[h`
                No results
            `];const s=E.isLengthAtLeast(e,1)?u2(e,i,e[0],o):void 0,a=s&&Object.values(s.config).length&&E.isLengthAtLeast(e,1)?h`
                  <${xa.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${xa}>
              `:Y,u=$9(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(Bo(l,St.Page))return h`
                    <${Xp.assign({isTopLevel:t,pageNode:l,controls:i,router:r})}
                        class="block-entry"
                    ></${Xp}>
                `;if(Bo(l,St.ElementExample)){const c=xf(i,l.fullUrlBreadcrumbs.slice(0,-1)),d=h`
                    <${tg.assign({elementExampleNode:l,currentPageControls:c,router:r})}></${tg}>
                `;return h`
                    <${$u.assign({content:d})}
                        class="inline-entry ${Ht({"block-entry":l.entry.isVertical})}"
                    ></${$u}>
                `}else{if(Bo(l,St.Root))return Y;{const c=h`
                    <${gi.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}></${gi}>
                `;return h`
                    <${$u.assign({content:c})}
                        class="block-entry"
                    ></${$u}>
                `}}});return[a,u]}const xo=kr()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:D`
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

        ${Zc} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Un["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:lt()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const o=vd(e.currentRoute.paths),s=AT({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return h`
            <${Zc.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${Zc}>

            ${or(e.showLoading,h`
                    <div
                        ${Yi(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${j.assign({icon:Xi})}></${j}>
                    </div>
                    ${or(!!n.lastElement,h`
                            ${n.lastElement}
                            <slot name=${pn.Footer}></slot>
                        `)}
                `,h`
                    <div
                        ${Yi(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${pn.Footer}></slot>
                `)}
        `}});function ET(e,t,r){const n=ng(e,t);return n.length?n:(r(zo),ng(e,zo.paths))}function ng(e,t){return e.filter(r=>kD({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Hc=mo()({tagName:"element-book-app",state(){return{currentRoute:zo,router:void 0,loading:!0,colors:{config:void 0,theme:Ip(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:lt()},styles:D`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${ye["element-book-page-background-color"].value};
            color: ${ye["element-book-page-foreground-color"].value};
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

        ${xo} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${Nn} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await ig(e,vd(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:o})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function a(c){const d=s(c);return!E.jsonEquals(e.currentRoute,d)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(E.isTruthy).join(" - "))}function l(c){if(!a(c))return;const d=s(c);e.router?e.router.setRoute(d):n({currentRoute:{...e.currentRoute,...d}}),t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(d.paths))}try{if(t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const C=uN(t.internalRouterConfig.basePath);n({router:C}),C.listen(!0,S=>{n({currentRoute:S})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!E.jsonEquals(c,e.colors.config)){const C=Ip(c);n({colors:{config:c,theme:C}}),ax(r,C)}const d=t._debug??!1,f=MD({entries:t.pages,debug:d});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:f1(f.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=vd(e.currentRoute.paths),b=(m?J9({flattenedNodes:f.flattenedNodes,searchQuery:m}):void 0)??ET(f.flattenedNodes,e.currentRoute.paths,l);u(b[0]?.entry.title);const F=e.treeBasedControls?.controls;return F?(t._debug&&console.info({currentControls:F}),h`
                <div
                    class="root"
                    ${V(ol,async C=>{const S=C.detail;if(!a(S))return;if(n({loading:!0}),l(S),!(r.shadowRoot.querySelector(Nn.tagName)instanceof Nn))throw new TypeError(`Failed to find child '${Nn.tagName}'`);await ig(r,m,e.currentRoute)})}
                    ${V(xa.events.controlValueChange,C=>{if(!e.treeBasedControls)return;const S=OD(F,C.detail.fullUrlBreadcrumbs,C.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:S}})})}
                >
                    <${Nn.assign({flattenedNodes:f.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${pn.NavHeader}
                            slot=${pn.NavHeader}
                        ></slot>
                    </${Nn}>
                    <${xo.assign({controls:F,currentNodes:b,currentRoute:e.currentRoute,debug:d,originalTree:f.tree,router:e.router,showLoading:e.loading})}
                        ${V(xo.events.loadingRender,async C=>{await Kd();const S=r.shadowRoot.querySelector(xo.tagName);S?S.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${xo.tagName}' for scrolling.`),await Kd(),n({loading:!C.detail})})}
                    >
                        <slot
                            name=${pn.Footer}
                            slot=${pn.Footer}
                        ></slot>
                    </${xo}>
                </div>
            `):h`
                    <${gi.assign({message:"Failed to generate page controls."})}></${gi}>
                `}catch(c){return console.error(c),h`
                <p class="error">${Et(c)}</p>
            `}}});async function ig(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(Nn.tagName);if(!(n instanceof Nn))throw new TypeError(`Failed to find child '${Nn.tagName}'`);await vT(n)}function og(e){if(typeof e=="string")return CT(e);if(typeof e=="number")return[(e&16711680)>>16,(e&65280)>>8,e&255,1,!0,"unknown"];if(typeof e=="object"){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let t=[0,0,0,0,!1,"unknown"];return t[0]=e.r?e.r:e.red?e.red:!1,t[1]=e.g?e.g:e.green?e.green:!1,t[2]=e.b?e.b:e.blue?e.blue:!1,t[3]=e.a?e.a:e.alpha?e.alpha:1,t[4]=!!(t[0]&&t[1]&&t[2]),t[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",t}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}function CT(e="#abcdef"){e=e.replace(/[^\w,.#%()\/ -]/g,""),e=e.toLowerCase();let t=!1,n=[0,0,0,0,t,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let s={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let a in s)if(e==a){let u={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:function(c){for(let d=0;d<3;d++)n[d]=parseInt(c[d+1],16);return n[3]=1,!0}},l=u.rex.exec(s[a]);return n[4]=t=u.sprig(l),n}}let i={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:function(s){let a=0,u=0,l=10,c=100,d=2.55,f="1";s[23]&&(f=s[23],delete s[23]),n[3]=f.match(/%/g)?parseFloat(f)/c:parseFloat(f);for(let m=1;m<s.length;m++)s[m]&&(a=a||m,u=m);switch(u){case 4:l=16,c=15,n[3]=parseInt(s[u],l)/c;case 3:l=16;for(let m=0;m<3;m++)n[m]=parseInt(s[a+m]+s[a+m],l);break;case 5:l=16;case 9:n[0]=n[1]=n[2]=l==10?parseFloat(s[u]):parseInt(s[u],l);break;case 12:n[0]=n[1]=n[2]=parseFloat(s[u])*d;break;case 8:l=16,c=255,n[3]=parseInt(s[8],l)/c;case 7:l=16;case 11:for(let m=0;m<3;m++)n[m]=l==10?parseFloat(s[a+m]):parseInt(s[a+m],l);break;case 14:for(let m=0;m<3;m++)n[m]=parseFloat(s[a+m])*d;break;case 18:n[5]=s[15];for(let m=0;m<3;m++)a++,n[m]=s[a].match(/%/g)?parseFloat(s[a])*2.55:parseFloat(s[a])*255;break;case 22:n[5]=s[a];for(let m=0;m<3;m++)a++,n[m]=s[a]?s[a].match(/%/g)?parseFloat(s[a])/c:parseFloat(s[a]):0;if(n[5].match(/^(?:hsla?|hwba?)/i)){let I=function(z){let q=(z+S/30)%12,Ce=m*Math.min($,1-$);return $-Ce*Math.max(-1,Math.min(q-3,9-q,1))},m,$,b,F,C,S=n[0]%360;if(S<0&&(S+=360),n[5].match(/^hsla?/i))m=n[1],$=n[2],b=0,C=1;else if(n[5].match(/^hwba?/i)){if(b=n[1],F=n[2],b+F>=1){n[0]=n[1]=n[2]=b/(b+F),n[5]="sRGB";break}m=1,$=.5,C=1-b-F}n[0]=Math.round(255*(I(0)*C+b)),n[1]=Math.round(255*(I(8)*C+b)),n[2]=Math.round(255*(I(4)*C+b)),n[5]="sRGB"}break}return!0}},o=i.rex.exec(e);return o?(n[4]=t=i.parsley(o),n):(t=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,t,"parsleyError"])}const it={mainTRC:2.4,sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1};function kT(e,t,r=-1){const n=[0,1.1];if(isNaN(e)||isNaN(t)||Math.min(e,t)<n[0]||Math.max(e,t)>n[1])return 0;let i=0,o=0,s="BoW";return e=e>it.blkThrs?e:e+Math.pow(it.blkThrs-e,it.blkClmp),t=t>it.blkThrs?t:t+Math.pow(it.blkThrs-t,it.blkClmp),Math.abs(t-e)<it.deltaYmin?0:(t>e?(i=(Math.pow(t,it.normBG)-Math.pow(e,it.normTXT))*it.scaleBoW,o=i<it.loClip?0:i-it.loBoWoffset):(s="WoB",i=(Math.pow(t,it.revBG)-Math.pow(e,it.revTXT))*it.scaleWoB,o=i>-.1?0:i+it.loWoBoffset),r<0?o*100:r==0?Math.round(Math.abs(o)*100)+"<sub>"+s+"</sub>":Number.isInteger(r)?(o*100).toFixed(r):0)}function FT(e,t,r=-1,n=!0){let i=og(t),o=og(e);return!(o[3]==""||o[3]==1)&&(o=NT(o,i,n)),kT(sg(o),sg(i),r)}function ST(e,t=2){const r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],n=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],o=[0,100,200,300,400,500,600,700,800,900].length;let s=[e.toFixed(t),0,0,0,0,0,0,0,0,0];s.length;let a=777;e=Math.abs(e);const u=.2,l=e==0?1:e*u|0;let c=0,d=(e-r[l][c])*u;for(c++;c<o;c++)a=r[l][c],a>400?s[c]=a:e<14.5?s[c]=999:e<29.5?s[c]=777:a>24?s[c]=Math.round(a-n[l][c]*d):s[c]=a-(2*n[l][c]*d|0)*.5;return s}function sg(e=[0,0,0]){function t(r){return Math.pow(r/255,it.mainTRC)}return it.sRco*t(e[0])+it.sGco*t(e[1])+it.sBco*t(e[2])}function NT(e=[0,0,0,1],t=[0,0,0],r=!0){e[3]=Math.max(Math.min(e[3],1),0);let n=1-e[3],i=[0,0,0,1,!0];for(let o=0;o<3;o++)i[o]=t[o]*n+e[o]*e[3],r&&(i[o]=Math.min(Math.round(i[o]),255));return i}const l2={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};Zt(l2,e=>e);Object.fromEntries(Object.entries(l2).map(([e,t])=>[t,e]));function Vm({background:e,foreground:t}){const r=mD(Number(FT(t,e)),{digits:1});return{contrast:r,fontSizes:MT(r),contrastLevel:IT(r)}}function TT(e,t){return t.reduce((r,n)=>{const i=Math.abs(Vm({foreground:n,background:e}).contrast);return i>r.contrast?r:{contrast:i,color:n}},{contrast:1/0,color:""}).color}function PT(e,t){const r=E.isArray(e.foreground)?e.foreground:E.isArray(e.background)?e.background:new Error("No color array provided.");if(r instanceof Error)throw r;const n=ag.indexOf(t);return r.reduce((o,s)=>{const a=Vm({foreground:E.isString(e.foreground)?e.foreground:s,background:E.isString(e.background)?e.background:s}),l=ag.indexOf(a.contrastLevel.name)-n;return l>0||o.distance>l?o:{color:s,distance:l}},{distance:0,color:void 0}).color}function MT(e){const t=ST(e).slice(1);return bl(t,(n,i)=>({key:(i+1)*100,value:n}))}function IT(e){return nn.isDefined(ec.find(t=>t.min<=Math.abs(e)))}var De;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(De||(De={}));const c2={[De.SmallBodyText]:"Small Text",[De.BodyText]:"Body Text",[De.NonBodyText]:"Non-body Text",[De.Header]:"Header",[De.Placeholder]:"Placeholder",[De.Decoration]:"Decoration",[De.Invisible]:"Invisible"},ag=[De.SmallBodyText,De.BodyText,De.NonBodyText,De.Header,De.Placeholder,De.Decoration,De.Invisible],ec=[{min:90,name:De.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:De.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:De.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:De.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:De.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:De.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:De.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];bl(ec,e=>({key:e.min,value:e}));bl(ec,e=>({key:e.name,value:e}));const d2=["#000000","#ffffff","#000","#fff","white","black"];function f2(e,t=d2){const r={};return Object.values(e).forEach(n=>{if(t.includes(n.default))return;const i=OT(n);to(r,i.colorName,()=>[]).push(i)}),r}function OT(e){const t=String(e.name).replace(/^-+/,"").split("-"),r=t.length>2?t.at(-1):void 0,n=nn.isTruthy(t[0]),i=t.slice(1,r?-1:void 0).join("-");return{suffix:r,prefix:n,colorName:i,definition:e,cssVarName:String(e.name)}}function m2(e,{mapFrom:t,mapTo:r}){return E.isArray(e)?Xd(e.map(n=>{if(t&&E.isKeyOf(n,t))return n;if(r&&E.isKeyOf(n,r)&&r[n]!=null)return r[n];throw new Error(`Unknown font weight: ${String(n)}`)})):m2(qn(Object.entries(e),([n,i])=>{if(i)return n},E.isTruthy),{mapTo:r,mapFrom:t})}const BT={background:"white",foreground:"black"},RT={[De.BodyText]:!0,[De.Header]:!0,[De.Placeholder]:!0,[De.Decoration]:!0};function LT(e,{defaultTheme:t=BT,omittedColorValues:r=d2,crossContrastLevels:n=RT}={}){const i=m2(n,{mapFrom:c2}),o=f2(e,r),s=Object.fromEntries(Object.entries(o).flatMap(([a,u])=>{Dt.isLengthAtLeast(u,1);const l=u.map(b=>b.definition.default),c=q5({crossWith:["ahead-background","behind-background","ahead-foreground","behind-foreground","self-light-front","self-light-back"],contrast:i}),d=u[0],f=Vp(t.foreground),m=Vp(t.background),$=TT("white",l);return qn(c,b=>{const F=[d.prefix,d.colorName,b.crossWith,b.contrast].join("-"),C=b.crossWith==="ahead-background"?{foreground:l,background:m}:b.crossWith==="behind-background"?{foreground:m,background:l}:b.crossWith==="ahead-foreground"?{foreground:l,background:f}:b.crossWith==="behind-foreground"?{foreground:f,background:l}:b.crossWith==="self-light-back"?{foreground:l,background:$}:{foreground:$,background:l},S=PT(C,b.contrast),I=u.find(z=>z.definition.default===S);if(!I){yf.error(`No valid '${a}' color cross found for: ${g(b)} with ${g(l)}`);return}return[F,Zt(C,(z,q)=>E.isString(q)?q:I.definition.value)]},E.isTruthy)}));return jN(t,s)}const Jc=mo()({tagName:"theme-vir-contrast-indicator",styles:D`
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

        .${Fe(De.Invisible)} {
            color: red;
        }
        .${Fe(De.Decoration)} {
            color: #ff6600;
        }
        .${Fe(De.Placeholder)} {
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
    `,render({inputs:e}){const t=ec.toReversed().slice(1).map(i=>h`
                    <div
                        class="gauge-level ${Ht({active:i.min<=Math.abs(e.contrast.contrast)})}"
                    ></div>
                `),r=[e.contrast.contrastLevel.description,`
Font weights to font sizes:`,JSON.stringify(e.contrast.fontSizes,null,4)].join(`
`),n=e.contrast.fontSizes[e.fontWeight]>150?"-":`${e.contrast.fontSizes[e.fontWeight]}px`;return h`
            <div title=${r} class="wrapper ${e.contrast.contrastLevel.name}">
                <div class="gauge">${t}</div>
                <span>
                    <span class="gauge-text">${Math.round(e.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${c2[e.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${n}</span>
                </span>
            </div>
        `}}),ll=mo()({tagName:"theme-vir-color-example",state(){return{previewElement:void 0,forceShowEverything:!1}},hostClasses:{"theme-vir-color-example-no-contrast-tips":({inputs:e,state:t})=>!e.showContrast&&!t.forceShowEverything},styles:({hostClasses:e})=>D`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${Ir};
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
            ${Ka};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${Jc} {
            margin-top: 1px;
        }
    `,render({state:e,updateState:t,inputs:r}){const n=["foreground","background"].map(a=>{const u=[r.color[a].name,r.showVarValues||e.forceShowEverything?":":""].filter(E.isTruthy).join(""),l=r.showVarValues||e.forceShowEverything?h`
                          <span>${r.color[a].default}</span>
                      `:Y;return h`
                <p>
                    <span>${u}</span>
                    ${l}
                </p>
            `}),i=r.showVarNames||e.forceShowEverything?h`
                      <div class="css-var-names">${n}</div>
                  `:Y,o=e.previewElement?Vm({foreground:globalThis.getComputedStyle(e.previewElement).getPropertyValue("color"),background:globalThis.getComputedStyle(e.previewElement).getPropertyValue("background-color")}):void 0,s=o&&(r.showContrast||e.forceShowEverything)?h`
                      <${Jc.assign({contrast:o,fontWeight:r.fontWeight})}></${Jc}>
                  `:Y;return h`
            <button
                ${V("click",()=>{t({forceShowEverything:!e.forceShowEverything})})}
                ${Yi(a=>{t({previewElement:nn.instanceOf(a,HTMLElement)})})}
                class="color-preview"
                style=${D`
                    color: ${Fe(r.color.foreground.default)};
                    background: ${Fe(r.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${D`
                                visibility: ${Fe((o?.fontSizes[400]||1/0)>150?"hidden":"visible")};
                                font-weight: ${r.fontWeight};
                                font-size: ${o?o.fontSizes[400]:14}px;
                            `}
                        >
                            Min
                        </span>
                    </span>
                </div>
            </button>
            ${s} ${i}
        `}});function jT({parent:e,title:t,theme:r,hideInverseColors:n,overrides:i,useVerticalLayout:o,prefixGroupByCount:s=0}){const a={"Show Var Names":{controlType:G.Checkbox,initValue:!1},"Show Contrast Tips":{controlType:G.Checkbox,initValue:!0}},u=me({parent:e,title:t,controls:a});function l({controls:$,theme:b,themeColorName:F}){const C=E.isKeyOf(F,b.colors)?b.colors[F]:void 0,S=E.isKeyOf(F,b.inverse)?b.inverse[F]:void 0;if(!C||!S)throw new Error(`No theme color found by name '${F}'`);const I=h`
            <${ll.assign({color:C,showVarValues:!0,showVarNames:$["Show Var Names"],showContrast:$["Show Contrast Tips"],fontWeight:400})}></${ll}>
        `;return h`
            <div class="with-inverse">${I}${Y}</div>
        `}function c($,b){const F=z5(Object.keys(b.colors),C=>s?C.split("-").slice(0,s).join("-"):C);Object.entries(F).forEach(([C,S])=>{S&&$({title:C,styles:D`
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
                    `,render({controls:I}){return S.map(z=>l({controls:I,theme:b,themeColorName:z}))}})})}const d=["Click a color preview to show CSS var names and values."],f=me({parent:u,title:"Default Theme",descriptionParagraphs:d,useVerticalExamples:o,controls:{copy:{controlType:G.Custom,content:h`
                    <button
                        ${V("click",async()=>{const $=UN(r,"viraColorPalette");await navigator.clipboard.writeText($)})}
                    >
                        Copy Code
                    </button>
                `}},defineExamples({defineExample:$}){c($,r)}}),m=(i||[]).map($=>me({parent:u,title:$.name,useVerticalExamples:o,descriptionParagraphs:d,defineExamples({defineExample:b}){c(b,$.asTheme)}}));return[u,f,...m]}const UT=[{title:"Black",fontWeight:400,foreground:Jr["vira-black"]},{title:"Black",fontWeight:700,foreground:Jr["vira-black"]},{title:"White",fontWeight:400,foreground:Jr["vira-white"]},{title:"White",fontWeight:700,foreground:Jr["vira-white"]},{title:"Black",fontWeight:400,background:Jr["vira-black"]},{title:"Black",fontWeight:700,background:Jr["vira-black"]},{title:"White",fontWeight:400,background:Jr["vira-white"]},{title:"White",fontWeight:700,background:Jr["vira-white"]}];function _T({colors:e,parent:t,title:r,includeContrast:n,includeTheme:i,useVerticalTheme:o}){const s=f2(e),a=me({parent:t,title:r}),u=me({parent:a,title:"Palette",defineExamples({defineExample:m}){Object.entries(s).forEach(([$,b])=>{m({title:$,styles:D`
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
                                    color: ${Jr["vira-grey-50"].value};
                                }

                                & .color-value {
                                    margin-left: 1ch;
                                }
                            }
                        `,render(){return b.map(F=>h`
                                    <div class="swatch-wrapper">
                                        <div
                                            class="swatch"
                                            style=${D`
                                                background-color: ${Fe(F.definition.default)};
                                            `}
                                        ></div>
                                        <p class="color-details">
                                            <span>${F.cssVarName}</span>
                                            <br />
                                            <span class="color-value">
                                                ${F.definition.default}
                                            </span>
                                        </p>
                                    </div>
                                `)}})})}}),l=me({parent:a,title:"Palette Contrast"});function c(m,$){return me({parent:l,title:`${r} ${m}`,defineExamples({defineExample:b}){Object.entries(s).forEach(([F,C])=>{const S=E.isArray($)?$:$(C);b({title:F,styles:D`
                                :host {
                                    display: flex;
                                    flex-direction: column;
                                    gap: 24px;
                                }

                                p {
                                    ${Ka}
                                }

                                .darkness-level {
                                    text-align: center;
                                    font-size: 12px;
                                    color: ${Jr["vira-grey-50"].value};
                                }

                                td {
                                    padding: 4px;
                                    min-width: 170px;
                                }
                            `,render(){const I=C.map(q=>{const Ce=S.map(Ge=>h`
                                            <td>
                                                <p class="darkness-level">${q.suffix}</p>
                                                <${ll.assign({color:{background:Ge.background||q.definition,foreground:Ge.foreground||q.definition},showVarValues:!0,showVarNames:!1,showContrast:!0,fontWeight:Ge.fontWeight})}></${ll}>
                                            </td>
                                        `);return h`
                                        <tr>${Ce}</tr>
                                    `}),z=S.map(q=>{const Ce=q.background?"in back":"in front",Ge=[q.title,`(${Ce})`,`(${q.fontWeight})`].join(" ");return h`
                                        <th>${Ge}</th>
                                    `});return h`
                                    <table cellspacing="0" cellpadding="0">
                                        <thead><tr>${z}</tr></thead>
                                        <tbody>${I}</tbody>
                                    </table>
                                `}})})}})}const d=c("Contrast Black White",UT);function f(m){return c(`Contrast Self ${m}`,$=>$.map(b=>({fontWeight:m,title:b.suffix||"",foreground:b.definition})))}return[a,u,l,d,f(400),f(700),...jT({parent:a,title:"Theme (auto)",theme:LT(e),hideInverseColors:!0,useVerticalLayout:o,prefixGroupByCount:2})].filter(E.isTruthy)}const Ye=me({title:"Elements",parent:void 0}),Wm=me({title:"Styles",parent:void 0}),h2=me({title:"Util",parent:void 0}),VT=me({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:G.Color,initValue:""},"Fill Color":{controlType:G.Color,initValue:""},"Stroke Width":{controlType:G.Number,initValue:1.5}},defineExamples({defineExample:e}){Object.values(Gd).forEach(t=>{e({title:t.name,styles:D`
                    :host(:hover) ${j} {
                        background-color: #f2f2f2;
                    }

                    ${j} {
                        padding: 8px;
                        border-radius: ${jr["vira-form-input-radius"].value};
                    }
                `,render({controls:r}){const n=D`
                        ${w["vira-icon-fill-color"].name}: ${Fe(r["Fill Color"]||"inherit")};
                        ${w["vira-icon-stroke-color"].name}: ${Fe(r["Stroke Color"]||"inherit")};
                        ${w["vira-icon-stroke-width"].name}: ${Fe(r["Stroke Width"]?aa(r["Stroke Width"]):"inherit")};
                    `;return h`
                        <${j.assign({icon:t})} style=${n}></${j}>
                    `}})})}}),WT=_T({colors:Jr,parent:Wm,title:"Vira Color",includeContrast:!0,includeTheme:!0}),p2={async element1(){return await Ki({seconds:2}),(await Wu(async()=>{const{ViraElement1Mock:e}=await import("./vira-element-1-BfphpcQY.js");return{ViraElement1Mock:e}},[])).ViraElement1Mock},async element2(){return await Ki({seconds:2}),(await Wu(async()=>{const{ViraElement2Mock:e}=await import("./vira-element-2-DflqcZ2d.js");return{ViraElement2Mock:e}},[])).ViraElement2Mock},errorElement(){throw new Error("import failure")}},ug=mo()({tagName:"example-direct-set-key-dynamic-elements",state(){return{dynamicElements:s2(p2)}},render({state:e,inputs:t}){return a2(e.dynamicElements,{key:t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement",error(r){return h`
                    <${qi}>
                        ${as("Failed to import element",Et(r))}
                    </${qi}>
                `},loading(){return h`
                    <${j.assign({icon:Xi})}></${j}>
                `},ready(r){if(r.element1)return h`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return h`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Dt.never("The error element will always error")}})}}),lg=mo()({tagName:"example-async-update-key-dynamic-elements",state(){return{dynamicElements:s2(p2)}},render({state:e,inputs:t}){return e.dynamicElements.update(t.numberValue===1?"element1":t.numberValue===2?"element2":"errorElement"),a2(e.dynamicElements,{error(r){return h`
                    <${qi}>
                        ${as("Failed to import element",Et(r))}
                    </${qi}>
                `},loading(){return h`
                    <${j.assign({icon:Xi})}></${j}>
                `},ready(r){if(r.element1)return h`
                        <${r.element1}></${r.element1}>
                    `;if(r.element2)return h`
                        <${r.element2.assign({userName:"John"})}></${r.element2}>
                    `;Dt.never("The error element will always error")}})}}),cg=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],zT=me({parent:h2,title:"Dynamic Element Loading",defineExamples({defineExample:e}){e({title:"direct key setting",state(){return{value:1}},styles:D`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return h`
                    <${et.assign({value:String(t.value),options:cg})}
                        ${V(et.events.valueChange,n=>{const i=Number(n.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);r({value:i})})}
                    ></${et}>
                    <${ug.assign({numberValue:t.value})}></${ug}>
                `}}),e({title:"async prop update key",state(){return{value:1}},styles:D`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,render({state:t,updateState:r}){return h`
                    <${et.assign({value:String(t.value),options:cg})}
                        ${V(et.events.valueChange,n=>{const i=Number(n.detail);if(i!==1&&i!==2&&i!==3)throw new Error(`Invalid selection: ${i}`);r({value:i})})}
                    ></${et}>
                    <${lg.assign({numberValue:t.value})}></${lg}>
                `}})}}),qT=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:h`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:D`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:D`
            ${hr} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],KT=me({title:hr.tagName,parent:Ye,controls:{Selected:{controlType:G.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:G.Text,initValue:""}},defineExamples({defineExample:e}){qT.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?h`
                            <${hr.assign(n)}>
                                ${t.customTemplate}
                            </${hr}>
                        `:h`
                            <${hr.assign(n)}></${hr}>
                        `}})})}}),Yd=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new Rm({sanitizeRoute(e){return e}})}}],GT=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:_m.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...Yd,{id:"long",label:h`
                        <${hr.assign({selected:!1})}>
                            <div
                                style=${D`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${hr}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:li.Both,items:[...Yd,{id:"long",label:h`
                        <${hr.assign({selected:!1})}>
                            <div
                                style=${D`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${hr}>
                    `}]}}],ZT=me({parent:Ye,title:si.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){GT.forEach(t=>{e({title:t.title,styles:D`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return h`
                        <${si.assign({items:Yd,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${si}>
                    `}})})}}),g2=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],HT=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...g2,{id:4,label:"link here",route:{route:{paths:["test"]},router:new Rm({sanitizeRoute(e){return e}})}}]}}],JT=me({parent:Ye,title:ta.tagName,defineExamples({defineExample:e}){HT.forEach(t=>{e({title:t.title,render(){return h`
                        <${ta.assign({isMultiSelect:!1,navController:void 0,items:g2,selected:[],...t.inputs})}></${ta}>
                    `}})})}}),y2=[];Mr(al).forEach(e=>{Mr(_m).forEach(t=>{y2.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const YT=me({parent:Ye,title:ra.tagName,defineExamples({defineExample:e}){y2.forEach(t=>{e({title:t.title,styles:D`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return h`
                        <${ra.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${ra}>
                    `}})})}}),XT=me({parent:Ye,title:we.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:D`
                ${we} {
                    ${os["vira-focus-outline-border-radius"].name}: 0;
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
                `}}),e({title:"long clipped content",styles:D`
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
                `}}),e({title:"long right anchored content",styles:D`
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
                    <${we.assign({keepOpenAfterInteraction:!0,horizontalAnchor:li.Right})}>
                        <div slot=${we.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${we.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${we}>
                `}}),e({title:"long left anchored content",styles:D`
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
                    <${we.assign({keepOpenAfterInteraction:!0,horizontalAnchor:li.Left})}>
                        <div slot=${we.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${we.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${we}>
                `}}),e({title:"short right anchored content",styles:D`
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
                    <${we.assign({keepOpenAfterInteraction:!0,horizontalAnchor:li.Right})}>
                        <div slot=${we.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${we.slotNames.popUp}>not long</div>
                    </${we}>
                `}})}}),QT=[{title:"menu shadow",styles:jo.menuShadow},{title:"menu shadow reversed",styles:jo.menuShadowReversed},{title:"modal",styles:jo.modal}],eP=me({parent:Wm,title:"Shadows",defineExamples({defineExample:e}){QT.forEach(t=>{e({title:t.title,styles:D`
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
                    `}})})}}),tP=me({parent:Ye,title:Ze.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:G.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return h`
                    <${Ze.assign({text:"Text here",bold:!1})}></${Ze}>
                `}}),e({title:"Bold",render(){return h`
                    <${Ze.assign({text:"Text here",bold:!0})}></${Ze}>
                `}}),e({title:"Dynamic",render({controls:t}){return h`
                    <${Ze.assign({text:"Text here",bold:t.bolded})}></${Ze}>
                `}}),e({title:"Resized",styles:D`
                ${Ze} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return h`
                    <${Ze.assign({text:"Not Bolded",bold:!1})}></${Ze}>
                    <${Ze.assign({text:"Bolded",bold:!0})}></${Ze}>
                `}}),e({title:"Alignment",styles:D`
                ${Ze} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return h`
                    <${Ze.assign({text:"Not Bolded",bold:!1})}></${Ze}>
                    <${Ze.assign({text:"Bolded",bold:!0})}></${Ze}>
                `}}),e({title:"Stylized",styles:D`
                ${Ze} {
                    text-decoration: underline;
                }
            `,render(){return h`
                    <${Ze.assign({text:"Not Bolded",bold:!1})}></${Ze}>
                    <${Ze.assign({text:"Bolded",bold:!0})}></${Ze}>
                `}})}}),rP=me({parent:Ye,title:fe.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:G.Color,initValue:fe.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:G.Color,initValue:fe.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:G.Color,initValue:fe.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:G.Color,initValue:fe.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:i}){const o=n??D``;e({title:r,styles:o,render({controls:s}){const a=D`
                        ${fe.cssVars["vira-button-primary-color"].name}: ${Fe(s["Primary color"]||"inherit")};
                        ${fe.cssVars["vira-button-secondary-color"].name}: ${Fe(s["Secondary color"]||"inherit")};
                        ${fe.cssVars["vira-button-primary-hover-color"].name}: ${Fe(s["Hover color"]||"inherit")};
                        ${fe.cssVars["vira-button-primary-active-color"].name}: ${Fe(s["Active color"]||"inherit")};
                    `;return h`
                        <${fe.assign({text:"hello",...i})}
                            style=${a}
                        ></${fe}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:ea}}),t({title:"with expanding icon",inputs:{icon:ea,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:No.Outline}}),t({title:"only icon",inputs:{icon:ea,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:D`
                ${fe} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:D`
                ${fe} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:D`
                :host {
                    ${fe.cssVars["vira-button-primary-color"].name}: pink;
                    ${fe.cssVars["vira-button-secondary-color"].name}: purple;
                    ${fe.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${fe.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return h`
                    <${fe.assign({text:"hello"})}></${fe}>
                `}})}}),nP=[{title:"basic"},{title:"success",inputs:{cardState:Jd.Success}},{title:"error",inputs:{cardState:Jd.Error}},{title:"long",content:h`
            <p
                style=${D`
                    ${Ka}
                `}
            >
                Longer form content to fill out the card.
                <br />
                Some more content.
                <br />
                This is what it looks like.
            </p>
        `}],iP=me({parent:Ye,title:qc.tagName,descriptionParagraphs:['A simple wrapper "card" element that is just a <slot> with some styles.'],defineExamples({defineExample:e}){nP.forEach(t=>{e({title:t.title,render(){return h`
                        <${qc.assign(t.inputs||{})}>
                            ${t.content||"Content"}
                        </${qc}>
                    `}})})}}),oP=me({parent:Ye,title:ge.tagName,controls:{Checked:{controlType:G.Checkbox,initValue:!1},Disabled:{controlType:G.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:r}){return h`
                    <${ge.assign({value:t.checked})}
                        ${V(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:r}){return h`
                    <${ge.assign({value:t.checked})}
                        ${V(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"error",state(){return{checked:!1}},render({state:t,updateState:r}){return h`
                    <${ge.assign({value:t.checked,hasError:!0})}
                        ${V(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"disabled unchecked",render(){return h`
                    <${ge.assign({value:!1,disabled:!0})}></${ge}>
                `}}),e({title:"disabled checked",render(){return h`
                    <${ge.assign({value:!0,disabled:!0})}></${ge}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return h`
                    <${ge.assign({value:t.Checked,disabled:t.Disabled})}></${ge}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return h`
                    <${ge.assign({value:!0})}></${ge}>
                `}}),e({title:"with label",state(){return{checked:!0}},render({state:t,updateState:r}){return h`
                    <${ge.assign({value:t.checked,label:"label goes here"})}
                        ${V(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"horizontal",state(){return{checked:!0}},render({state:t,updateState:r}){return h`
                    <${ge.assign({value:t.checked,label:"label goes here",horizontal:!0})}
                        ${V(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}}),e({title:"long label",state(){return{checked:!0}},styles:D`
                ${ge} {
                    max-width: 400px;
                }
            `,render({state:t,updateState:r}){return h`
                    <${ge.assign({value:t.checked,label:"label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here "})}
                        ${V(ge.events.valueChange,n=>{r({checked:n.detail})})}
                    ></${ge}>
                `}})}}),sP=me({title:An.tagName,parent:Ye,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:D`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>h`
                        <${An.assign({expanded:!!r.expandedStates[i]})}
                            ${V(An.events.expandChange,o=>{const s=[...r.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${An.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${V("click",()=>{const o=[...r.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${or(!!r.showMoreStates[i],h`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${An}>
                    `)}}),e({title:"wider examples",styles:D`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>h`
                        <${An.assign({expanded:!!r.expandedStates[i]})}
                            ${V(An.events.expandChange,o=>{const s=[...r.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${An.slotNames.header}
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
                            ${or(!!r.showMoreStates[i],h`
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
                        </${An}>
                    `)}})}}),na=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],aP=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...na,{id:42,label:h`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...na,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:D`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:D`
            ${zs} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Lr}}],uP=me({title:zs.tagName,parent:Ye,controls:{Selected:{controlType:G.Dropdown,initValue:"",options:["",...na.map(e=>e.label)]},Prefix:{controlType:G.Text,initValue:""},"Force State":{controlType:G.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:G.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:G.Dropdown,initValue:"",options:["",...Object.keys(Gd)]},Disabled:{controlType:G.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:G.Text,initValue:"Select something"}},defineExamples({defineExample:e}){aP.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:i}){const o={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||na,selected:i.Selected?[na.find(s=>s.label===i.Selected)?.id].filter(E.isTruthy):r.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?Gd[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return h`
                        <${zs.assign(o)}
                            ${V(zs.events.selectedChange,s=>{n({selected:s.detail})})}
                        ></${zs}>
                    `}})})}}),lP=me({parent:Ye,title:qi.tagName,descriptionParagraphs:["An error wrapper that applies error coloring (red, by default)."],defineExamples({defineExample:e}){e({title:"basic",render(){return h`
                    <${qi}>Error Content</${qi}>
                `}})}}),Yc=[{label:"Admin",value:"admin"},{label:"User Manager",value:"user-manager"},{label:"Billing Manager",value:"billing-manager"},{label:"Member",value:"member"}],cP=me({parent:Ye,title:Xt.tagName,defineExamples({defineExample:e}){e({title:"basic",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:D`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:he.Text,label:"First Name",value:t.firstName,isRequired:!0,placeholder:"placeholder"},lastName:{type:he.Text,label:"Last Name",value:t.lastName,isRequired:!0},subscribe:{type:he.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:he.Email,label:"Email Address",value:t.email},password:{type:he.NewPassword,label:"Password",value:t.password},userRole:{type:he.Select,label:"Role",options:Yc,value:t.userRole,placeholder:"placeholder"},disabledField:{type:he.Text,label:"Disabled Field",value:"should be disabled",isDisabled:!0},hidden:{type:he.Text,label:"Should be hidden",value:"Should be hidden",isHidden:!0}};return h`
                    <${Xt.assign({fields:n})}
                        ${V(Xt.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${fe.assign({text:"Cancel",buttonStyle:No.Outline})}></${fe}>
                            <${fe.assign({text:"Submit"})}></${fe}>
                        </div>
                    </${Xt}>
                `}}),e({title:"with extra slot elements",state(){return{firstName:"",lastName:""}},styles:D`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:he.Text,label:"First Name",value:t.firstName},lastName:{type:he.Text,label:"Last Name",value:t.lastName}};return h`
                    <${Xt.assign({fields:n})}
                        ${V(Xt.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <${pt.assign({value:"",label:"More stuff"})}></${pt}>
                        <div class="buttons">
                            <${fe.assign({text:"Cancel",buttonStyle:No.Outline})}></${fe}>
                            <${fe.assign({text:"Submit"})}></${fe}>
                        </div>
                    </${Xt}>
                `}}),e({title:"custom width",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:D`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                ${Xt} {
                    width: 400px;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:he.Text,label:"First Name",value:t.firstName},lastName:{type:he.Text,label:"Last Name",value:t.lastName},subscribe:{type:he.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:he.Email,label:"Email Address",value:t.email},password:{type:he.NewPassword,label:"Password",value:t.password},userRole:{type:he.Select,label:"Role",options:Yc,value:t.userRole}};return h`
                    <${Xt.assign({fields:n})}
                        ${V(Xt.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${fe.assign({text:"Cancel",buttonStyle:No.Outline})}></${fe}>
                            <${fe.assign({text:"Submit"})}></${fe}>
                        </div>
                    </${Xt}>
                `}}),e({title:"disabled",state(){return{firstName:"",lastName:"",subscribe:!0,email:"",password:"",userRole:void 0}},styles:D`
                .buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
            `,render({state:t,updateState:r}){const n={firstName:{type:he.Text,label:"First Name",value:t.firstName},lastName:{type:he.Text,label:"Last Name",value:t.lastName},subscribe:{type:he.Checkbox,label:"Subscribe to updates",value:t.subscribe},email:{type:he.Email,label:"Email Address",value:t.email},password:{type:he.NewPassword,label:"Password",value:t.password},userRole:{type:he.Select,label:"Role",options:Yc,value:t.userRole}};return h`
                    <${Xt.assign({fields:n,isDisabled:!0})}
                        ${V(Xt.events.valueChange,i=>{r({...t,[i.detail.key]:i.detail.value})})}
                    >
                        <div class="buttons">
                            <${fe.assign({text:"Cancel",buttonStyle:No.Outline})}></${fe}>
                            <${fe.assign({text:"Submit"})}></${fe}>
                        </div>
                    </${Xt}>
                `}})}}),dP=me({title:j.tagName,parent:Ye,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return h`
                    <${j.assign({icon:Lr})}></${j}>
                `}}),e({title:"using createColoredIcon",render(){return h`
                    <${j.assign({icon:_p(Lr,{"vira-icon-stroke-color":"red"})})}></${j}>
                `}}),e({title:"fit container",styles:D`
                ${j} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return h`
                    <${j.assign({icon:_p(Lr,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${j}>
                `}})}}),fP=me({title:Qn.tagName,parent:Ye,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:D`
                    border-radius: 32px;
                `,loadingSlot:h`
                    <div
                        style=${D`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${j.assign({icon:Xi,fitContainer:!0})}
                            style=${D`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${j}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:D`
                    border-radius: 32px;
                `,errorSlot:h`
                    <div
                        style=${D`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${j.assign({icon:sl,fitContainer:!0})}
                            style=${D`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${j}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:D`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:D`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:D`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:h`
                    <div
                        style=${D`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${j.assign({icon:Xi,fitContainer:!0})}
                            style=${D`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${j}>
                    </div>
                `,errorSlot:h`
                    <div
                        style=${D`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${j.assign({icon:sl,fitContainer:!0})}
                            style=${D`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${j}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:D`
                    ${Qn} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||D``}
                    }

                    ${r.allowReload?D`
                              ${Qn} {
                                  cursor: pointer;
                              }

                              ${Qn}:hover {
                                  border-color: #0055ff;
                              }
                          `:D``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:i}){return h`
                        <${Qn.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${V("click",()=>{r.allowReload&&i({imageUrl:`${r.inputs.imageUrl}?di=${Wi()}`})})}
                        >
                            ${r.loadingSlot?h`
                                      <div class="slot-wrapper" slot=${Qn.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:Y}${r.errorSlot?h`
                                      <div class="slot-wrapper" slot=${Qn.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:Y}
                        </${Qn}>
                    `}})})}}),mP=me({title:pt.tagName,parent:Ye,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:G.Color,initValue:Q["vira-form-foreground-color"].default},"Placeholder color":{controlType:G.Color,initValue:Q["vira-form-placeholder-color"].default},"Border color":{controlType:G.Color,initValue:Q["vira-form-border-color"].default},"Focus color":{controlType:G.Color,initValue:os["vira-focus-outline-color"].default},"Selection color":{controlType:G.Color,initValue:Q["vira-form-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:i,inputs:o}){e({title:i,styles:D`
                    ${n||D``}
                `,state(){return{value:o.value}},render({state:s,updateState:a,controls:u}){const l={[String(Q["vira-form-foreground-color"].name)]:u["Text color"],[String(Q["vira-form-placeholder-color"].name)]:u["Placeholder color"],[String(Q["vira-form-border-color"].name)]:u["Border color"],[String(os["vira-focus-outline-color"].name)]:u["Focus color"],[String(Q["vira-form-text-selection-color"].name)]:u["Selection color"]},c=Zt(l,(f,m)=>m||"inherit"),d=Object.entries(c).map(([f,m])=>[f,m].join(": ")+";").join(`
`);return h`
                        <${pt.assign({...o,value:s.value})}
                            style=${d}
                            ${V(pt.events.valueChange,f=>{a({value:f.detail}),console.info("changed:",f.detail)})}
                        ></${pt}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Lr}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:D`
                    ${pt} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Lr}},{title:"taller height",styles:D`
                    ${pt} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Lr}},{title:"shorter height",styles:D`
                    ${pt} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Lr}},{title:"max width",styles:D`
                    ${pt} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:D`
                    ${pt} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Uo.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:Uo.Email,attributePassthrough:{autocomplete:"username"}}},{title:"with error",inputs:{value:"has error",hasError:!0}},{title:"with label",inputs:{label:"Label here",placeholder:"has label",value:""}},{title:"with long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""}},{title:"with unbound long label",inputs:{label:"Enter a really really really really long value",placeholder:"has label",value:""},styles:D`
                    ${pt} {
                        width: unset;
                    }
                `}].forEach(t)}}),hP=me({title:So.tagName,parent:Ye,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:G.Color,initValue:""},"Hover color":{controlType:G.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:i}){const o=D`
                        ${So.cssVars["vira-link-hover-color"].name}: ${Fe(i["Hover color"]||"inherit")};
                        color: ${Fe(i["CSS Color"]||"inherit")};
                    `;return h`
                        <${So.assign(n)} style=${o}>My Link</${So}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),pP=me({title:En.tagName,parent:Ye,defineExamples({defineExample:e}){e({title:"basic",state(){return{modalOpen:!1}},render({state:t,updateState:r}){return h`
                    <button
                        ${V("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${En.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${V(En.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${En}>
                `}}),e({title:"customized",state(){return{modalOpen:!1}},styles:D`
                ${En} {
                    min-width: 500px;
                    border-radius: 4px;
                    ${En.cssVars["vira-modal-backdrop-color"].name}: rgba(255, 255, 255, 0.4);
                }
            `,render({state:t,updateState:r}){return h`
                    <button
                        ${V("click",()=>{r({modalOpen:!0})})}
                    >
                        Show Modal
                    </button>
                    <${En.assign({open:t.modalOpen,modalTitle:"Modal title",modalSubtitle:"Modal subtitle"})}
                        ${V(En.events.modalClose,()=>{r({modalOpen:!1})})}
                    >
                        Modal Content
                    </${En}>
                `}})}}),Ks=D`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`,Xc=h`
    <${yn.assign({automaticallySwitch:!0})}>
        <div class="large" slot=${yn.slotNames.large}>Large</div>
        <div class="small" slot=${yn.slotNames.small}>Small</div>
    </${yn}>
`,To={max:120,min:25,default:80},dg=je()({tagName:"vira-dynamic-width-overflow-switch-example",cssVars:{"vira-dynamic-width-overflow-switch-example-max-width":aa(To.default)},state(){return{intervalId:void 0,increment:1}},styles:({cssVars:e})=>D`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${e["vira-dynamic-width-overflow-switch-example-max-width"].value};
        }
    `,init({state:e,updateState:t,host:r,cssVars:n}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{const i=e1.isNumber(sD(ox({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"]})))||To.default;(i>=To.max||i<=To.min)&&t({increment:e.increment*-1}),b1({onElement:r,forCssVar:n["vira-dynamic-width-overflow-switch-example-max-width"],toValue:aa(i+e.increment)})},10)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render(){return h`
            <slot></slot>
        `}}),fg=je()({tagName:"vira-dynamic-slot-overflow-switch-example",cssVars:{"vira-dynamic-slot-overflow-switch-example-max-width":aa(To.default)},state(){return{intervalId:void 0,showAlternateSlot:!1}},styles:D`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${Ks}

        .large {
            white-space: nowrap;
        }
    `,init({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:globalThis.setInterval(()=>{t({showAlternateSlot:!e.showAlternateSlot})},500)})},cleanup({state:e,updateState:t}){globalThis.clearInterval(e.intervalId),t({intervalId:void 0})},render({state:e}){return h`
            <${yn.assign({automaticallySwitch:!0})}>
                <div class="large" slot=${yn.slotNames.large}>
                    ${e.showAlternateSlot?"Super Large":"Large"}
                </div>
                <div class="small" slot=${yn.slotNames.small}>Small</div>
            </${yn}>
        `}}),gP=me({title:yn.tagName,parent:Ye,descriptionParagraphs:['Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.'],defineExamples({defineExample:e}){e({title:"not overflowing",styles:D`
                ${Ks}
            `,render(){return Xc}}),e({title:"overflowing",styles:D`
                ${Ks}

                ${yn} {
                    max-width: 50px;
                }
            `,render(){return Xc}}),e({title:"dynamic size",styles:D`
                ${Ks}

                .wrapper {
                    width: ${To.max+10}px;
                }
            `,render(){return h`
                    <div class="wrapper">
                        <${dg}>
                            ${Xc}
                        </${dg}>
                    </div>
                `}}),e({title:"dynamic slot",styles:D`
                ${Ks}
            `,render(){return h`
                    <${fg}></${fg}>
                `}})}}),yP=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:D`
            :host {
                ${Vt.cssVars["vira-progress-background-color"].name}: red;
                ${Vt.cssVars["vira-progress-foreground-color"].name}: black;
                ${Vt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Vt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:D`
            :host {
                ${Vt.cssVars["vira-progress-background-color"].name}: red;
                ${Vt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Vt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Vt} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:D`
            :host {
                ${Vt.cssVars["vira-progress-background-color"].name}: red;
                ${Vt.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Vt.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Vt} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],bP=me({parent:Ye,title:Vt.tagName,defineExamples({defineExample:e}){yP.forEach(t=>{e({title:t.title,styles:D`
                    ${t.styles||D``}
                `,render(){return h`
                        <${Vt.assign({value:50,...t.inputs})}></${Vt}>
                    `}})})}}),vt=[{value:"1",label:"one"},{value:"2",label:"two"},{value:"3",label:"three"},{value:"4",label:"four"},{value:"5",label:"five"}],wP=[{title:"basic",inputs:{options:vt}},{title:"with really long option",inputs:{options:[...vt,{label:"really really really really really really really really long option",value:"something"}]}},{title:"with placeholder",inputs:{options:vt,placeholder:"pick an option..."}},{title:"disabled",inputs:{options:vt,disabled:!0}},{title:"error",inputs:{options:vt,hasError:!0}},{title:"with icon",inputs:{options:vt,icon:Lr}},{title:"custom width",inputs:{options:vt},styles:D`
            ${et} {
                width: 100px;
            }
        `},{title:"custom short height",inputs:{options:vt,icon:Lr},styles:D`
            ${et} {
                height: 26px;
            }
        `},{title:"custom tall height",inputs:{options:vt,icon:Lr},styles:D`
            ${et} {
                height: 42px;
            }
        `},{title:"with label",inputs:{options:vt,label:"Pick an option"}},{title:"with long label",inputs:{options:vt,label:"Pick a really really really really long option"}},{title:"with unbound long label",inputs:{options:vt,label:"Pick a really really really really long option"},styles:D`
            ${et} {
                width: unset;
            }
        `}],vP=me({parent:Ye,title:et.tagName,defineExamples({defineExample:e}){wP.forEach(t=>{e({title:t.title,styles:D`
                    ${t.styles||D``}
                `,state(){return{selected:void 0}},render({state:r,updateState:n}){return h`
                        <${et.assign({...t.inputs,value:r.selected??t.inputs.value})}
                            ${V(et.events.valueChange,i=>{n({selected:i.detail})})}
                        ></${et}>
                    `}})}),e({title:"no listener",descriptionParagraphs:["All user input should be blocked if there is nothing updating the state."],render(){return h`
                    <${et.assign({options:vt,value:vt[0]?.value})}></${et}>
                `}}),e({title:"force update",render(){return h`
                    <${mg}></${mg}>
                `}})}}),mg=je()({tagName:"vira-select-force-update-example",state(){return{intervalId:void 0,value:void 0}},init({updateState:e,state:t}){e({intervalId:globalThis.setInterval(()=>{const r=vt.findIndex(i=>i.value===t.value),n=nn.isDefined(vt[(r+1)%vt.length]).value;e({value:n}),console.info(`Forcing select to ${n}`)},500)})},cleanup({state:e}){globalThis.clearInterval(e.intervalId)},render({state:e}){return h`
            <${et.assign({options:vt,value:e.value})}></${et}>
        `}}),$P=[Ye,VT,Wm,h2],DP=[tP,rP,iP,oP,sP,uP,lP,cP,dP,fP,mP,hP,KT,JT,ZT,pP,gP,YT,XT,bP,vP].sort((e,t)=>e.title.localeCompare(t.title)),xP=[...DP,zT,eP,...WT],AP=[...$P,...xP];mo()({tagName:"vira-book-app",styles:D`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Hc} {
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
            <${Hc.assign({internalRouterConfig:{basePath:Om("vira"),useInternalRouter:!0},pages:AP,themeColor:"#33ccff"})}>
                <h1 slot=${pn.NavHeader}>Vira</h1>
            </${Hc}>
        `}});export{mo as d,h};
